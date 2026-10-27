// Cross-process locks, so ~10 Claude Code workers can run the pipeline at the same time.
//
// Two kinds:
//   withMutex(file, fn)   a short global lock for read-modify-write of shared JSON (data/.registry.lock).
//                         Created with fs.openSync(file, "wx") (atomic), retried with backoff for up to 30 s.
//   site locks            sites/<trade>/<dir>/.lock = { owner, pid, at, host }. Held by one worker for the
//                         whole life of a site; refreshed on every stage change; stale after 90 minutes.
//
// A worker is named by the env var DHS_WORKER (set by run-loop.ps1 / run-loop.sh, e.g. "w3").
// Without it the owner is "manual" (a person running /next-site by hand).
import fs from "node:fs";
import os from "node:os";
import path from "node:path";

export const SITE_LOCK_STALE_MS = 90 * 60 * 1000; // a site lock not refreshed for 90 min is free again
const MUTEX_STALE_MS = 60 * 1000; // nobody holds the registry mutex for a minute; a crashed holder left it
const MUTEX_TIMEOUT_MS = 30 * 1000;

// Block this process for ms milliseconds (tools are synchronous scripts).
export function sleepMs(ms) {
  Atomics.wait(new Int32Array(new SharedArrayBuffer(4)), 0, 0, Math.max(0, ms));
}

// Who this process works for: DHS_WORKER or "manual".
export function workerId() {
  return String(process.env.DHS_WORKER || "manual").trim() || "manual";
}

// Read a lock file's JSON (null when missing or half-written).
export function readLockFile(file) {
  try {
    return JSON.parse(fs.readFileSync(file, "utf8"));
  } catch {
    return null;
  }
}

// Age of a lock in ms: from its "at" field, else from the file time.
function lockAge(file, info) {
  const t = Date.parse(info?.at);
  if (!Number.isNaN(t)) return Date.now() - t;
  try {
    return Date.now() - fs.statSync(file).mtimeMs;
  } catch {
    return Infinity;
  }
}

// Atomic create. true = we own it now; false = someone else has it.
function tryCreate(file, info) {
  try {
    fs.mkdirSync(path.dirname(file), { recursive: true });
    const fd = fs.openSync(file, "wx");
    fs.writeSync(fd, JSON.stringify(info));
    fs.closeSync(fd);
    return true;
  } catch (e) {
    // EPERM/EBUSY happen on Windows while another process is deleting the file: treat as "busy"
    if (["EEXIST", "EPERM", "EBUSY", "EACCES"].includes(e.code)) return false;
    throw e;
  }
}

// Remove a stale lock. Rename first so two processes cannot both delete-and-recreate it.
function breakStale(file) {
  const tmp = `${file}.stale-${process.pid}-${Math.random().toString(36).slice(2, 8)}`;
  try {
    fs.renameSync(file, tmp);
  } catch {
    return; // someone else broke it (or it is gone)
  }
  try {
    fs.unlinkSync(tmp);
  } catch {}
}

// ---------- global mutex ----------

const held = new Map(); // file -> depth, so nested withMutex calls in one process do not deadlock

// Run fn() while holding the mutex file. Re-entrant inside one process.
// On timeout it stops the process with a plain message, or throws when { throwOnTimeout: true }.
export function withMutex(file, fn, { timeoutMs = MUTEX_TIMEOUT_MS, throwOnTimeout = false } = {}) {
  if (held.has(file)) {
    held.set(file, held.get(file) + 1);
    try {
      return fn();
    } finally {
      held.set(file, held.get(file) - 1);
    }
  }
  const token = `${process.pid}-${Date.now()}-${Math.random().toString(36).slice(2, 8)}`;
  const start = Date.now();
  let wait = 15;
  while (!tryCreate(file, { owner: workerId(), pid: process.pid, token, at: new Date().toISOString() })) {
    const info = readLockFile(file);
    if (lockAge(file, info) > MUTEX_STALE_MS) {
      breakStale(file);
      continue;
    }
    if (Date.now() - start > timeoutMs) {
      const msg = `Could not get ${path.basename(file)} within ${Math.round(timeoutMs / 1000)} s ` +
        `(held by ${info?.owner ?? "?"} pid ${info?.pid ?? "?"}). If no tool is running, delete ${file}.`;
      if (throwOnTimeout) throw new Error(msg);
      console.error(`ERROR: ${msg}`);
      process.exit(1);
    }
    sleepMs(wait + Math.random() * wait);
    wait = Math.min(wait * 2, 400);
  }
  held.set(file, 1);
  try {
    return fn();
  } finally {
    held.delete(file);
    // only delete it if it is still ours
    if (readLockFile(file)?.token === token) {
      try {
        fs.unlinkSync(file);
      } catch {}
    }
  }
}

// ---------- site locks ----------

// Describe a lock: { owner, pid, at, ageMs, stale, mine } or null when there is none.
export function lockStatus(file) {
  if (!fs.existsSync(file)) return null;
  const info = readLockFile(file) || {};
  const ageMs = lockAge(file, info);
  return { ...info, ageMs, stale: ageMs > SITE_LOCK_STALE_MS, mine: info.owner === workerId() };
}

// Take a site lock. Returns { ok: true } or { ok: false, holder }. Our own lock is refreshed.
export function acquireLock(file, { force = false } = {}) {
  const info = () => ({ owner: workerId(), pid: process.pid, host: os.hostname(), at: new Date().toISOString() });
  for (let attempt = 0; attempt < 5; attempt++) {
    if (tryCreate(file, info())) {
      // verify: a racing stale-breaker may have replaced it within the same moment
      sleepMs(20);
      if (readLockFile(file)?.pid === process.pid && readLockFile(file)?.owner === workerId()) return { ok: true };
      continue;
    }
    const st = lockStatus(file);
    if (!st) continue; // vanished between calls: try again
    if (st.mine) {
      refreshLock(file);
      return { ok: true };
    }
    if (st.stale || force) {
      breakStale(file);
      continue;
    }
    return { ok: false, holder: st };
  }
  return { ok: false, holder: lockStatus(file) };
}

// Rewrite "at" on our own lock (keeps it from going stale). No-op when it is not ours.
export function refreshLock(file) {
  const st = lockStatus(file);
  if (!st?.mine) return false;
  const tmp = `${file}.${process.pid}.tmp`;
  fs.writeFileSync(tmp, JSON.stringify({ owner: st.owner, pid: process.pid, host: os.hostname(), at: new Date().toISOString() }));
  try {
    fs.renameSync(tmp, file);
  } catch {
    try {
      fs.unlinkSync(tmp);
    } catch {}
  }
  return true;
}

// Delete a lock when it is ours (or with force).
export function releaseLock(file, { force = false } = {}) {
  const st = lockStatus(file);
  if (!st) return false;
  if (!st.mine && !force) return false;
  try {
    fs.unlinkSync(file);
  } catch {}
  return true;
}
