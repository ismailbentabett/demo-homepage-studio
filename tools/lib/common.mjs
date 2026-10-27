// Shared helpers for every tool. Keep this file small and stable: other tools import it.
import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";
import { withMutex, acquireLock, refreshLock, releaseLock, lockStatus, sleepMs } from "./locks.mjs";

// Project root (this file lives in tools/lib/).
export const ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..", "..");

// Every stage a site can be in, in order. "done" is set only by deliver.mjs.
export const STAGES = [
  "strategy", "concept", "design", "blueprint", "media", "build",
  "static", "render", "critique", "elevate", "fix", "deliver", "done", "needs-human",
];

// Print a plain message and stop with exit code 1.
export function fail(msg) {
  console.error(`ERROR: ${msg}`);
  process.exit(1);
}

// "roofer-A" -> { id, trade: "roofer", dir: "A" }. Fails on a bad id.
export function parseId(id) {
  const m = /^([a-z]+)-([ABC])$/.exec(String(id || "").trim());
  if (!m) fail(`"${id}" is not a site id. Use <trade>-<A|B|C>, e.g. roofer-A.`);
  return { id: `${m[1]}-${m[2]}`, trade: m[1], dir: m[2] };
}

// Absolute folder of a site: roofer-A -> <ROOT>/sites/roofer/A
export function siteDir(id) {
  const { trade, dir } = parseId(id);
  return path.join(ROOT, "sites", trade, dir);
}

// Read a JSON file. With a fallback, a missing file returns the fallback instead of failing.
export function readJson(file, fallback) {
  if (!fs.existsSync(file)) {
    if (arguments.length > 1) return fallback;
    fail(`File not found: ${path.relative(ROOT, file)}`);
  }
  try {
    return JSON.parse(fs.readFileSync(file, "utf8").replace(/^﻿/, ""));
  } catch (e) {
    fail(`${path.relative(ROOT, file)} is not valid JSON: ${e.message}`);
  }
}

// Write pretty JSON (2 spaces, trailing newline), creating folders as needed.
// Written to a temp file and renamed, so a parallel reader never sees half a file.
export function writeJson(file, data) {
  fs.mkdirSync(path.dirname(file), { recursive: true });
  const text = JSON.stringify(data, null, 2) + "\n";
  const tmp = `${file}.${process.pid}.tmp`;
  fs.writeFileSync(tmp, text);
  for (let i = 0; i < 8; i++) {
    try {
      fs.renameSync(tmp, file);
      return;
    } catch (e) {
      // Windows refuses the rename while another process has the file open: wait a moment
      if (!["EPERM", "EBUSY", "EACCES"].includes(e.code)) throw e;
      sleepMs(25 * (i + 1));
    }
  }
  fs.writeFileSync(file, text);
  try {
    fs.unlinkSync(tmp);
  } catch {}
}

// The global mutex for data/design-registry.json and data/progress.json.
export const REGISTRY_LOCK = path.join(ROOT, "data", ".registry.lock");
export const REGISTRY_FILE = path.join(ROOT, "data", "design-registry.json");

// Read-modify-write the registry under the mutex. fn(registry) changes it in place (or returns a new one).
export function updateRegistry(fn) {
  return withMutex(REGISTRY_LOCK, () => {
    const reg = readRegistry();
    const out = fn(reg) || reg;
    writeJson(REGISTRY_FILE, out);
    return out;
  });
}

// The registry as it is now: { sites: [{ id, status: "reserved" | "delivered", ... }] }
export function readRegistry() {
  const reg = readJson(REGISTRY_FILE, { sites: [] });
  reg.sites = Array.isArray(reg.sites) ? reg.sites : [];
  return reg;
}

// ---- site locks (sites/<trade>/<dir>/.lock), see tools/lib/locks.mjs ----
export const siteLockFile = (id) => path.join(siteDir(id), ".lock");
export const siteLock = (id) => lockStatus(siteLockFile(id));
export const lockSite = (id, opts) => acquireLock(siteLockFile(id), opts);
export const touchSite = (id) => refreshLock(siteLockFile(id));
export const unlockSite = (id, opts) => releaseLock(siteLockFile(id), opts);
// A niche being set up (media curation) is locked at sites/<trade>/.setup.lock.
export const setupLockFile = (trade) => path.join(ROOT, "sites", trade, ".setup.lock");
export { withMutex };

// The 30 niches in build order.
export function nicheOrder() {
  return readJson(path.join(ROOT, "data", "niche-order.json"));
}

// sites/<trade>/<dir>/facts.json (or null when the site is not claimed yet).
export function loadFacts(id) {
  return readJson(path.join(siteDir(id), "facts.json"), null);
}

// sites/<trade>/<dir>/site.json, or null when the site does not exist yet.
export function loadSite(id) {
  return readJson(path.join(siteDir(id), "site.json"), null);
}

// Merge a patch into site.json and mirror the summary into data/progress.json. Returns the new site.json.
export function saveSite(id, patch) {
  const file = path.join(siteDir(id), "site.json");
  const now = new Date().toISOString();
  const site = { ...(loadSite(id) || { id, history: [] }), ...patch, updatedAt: now };
  writeJson(file, site);
  updateProgress(id, site);
  return site;
}

// data/progress.json: { updatedAt, sites: { id: { stage, round, best, verdict, updatedAt } } }
// Read-modify-write under the registry mutex (parallel workers).
export function updateProgress(id, site) {
  const file = path.join(ROOT, "data", "progress.json");
  withMutex(REGISTRY_LOCK, () => {
    const progress = readJson(file, { sites: {} });
    progress.sites = progress.sites || {};
    progress.sites[id] = {
      stage: site.stage,
      round: site.round ?? 0,
      best: site.best?.weighted ?? null,
      verdict: site.verdict ?? null,
      startedAt: site.startedAt ?? null,
      deliveredAt: site.deliveredAt ?? null,
      updatedAt: site.updatedAt,
    };
    progress.updatedAt = site.updatedAt;
    writeJson(file, progress);
  });
}

// All three site ids of a niche.
export function nicheIds(trade) {
  return ["A", "B", "C"].map((d) => `${trade}-${d}`);
}

// Every site folder that exists on disk: ["roofer-A", ...]
export function allSiteIds() {
  const out = [];
  const base = path.join(ROOT, "sites");
  if (!fs.existsSync(base)) return out;
  for (const trade of fs.readdirSync(base)) {
    for (const dir of ["A", "B", "C"]) {
      if (fs.existsSync(path.join(base, trade, dir))) out.push(`${trade}-${dir}`);
    }
  }
  return out;
}

// Path relative to ROOT with forward slashes, for messages.
export function rel(p) {
  return path.relative(ROOT, p).split(path.sep).join("/");
}

// Tiny argv parser: { pos: [...], opt: { flag: true, key: "value" } }. `bool` lists flags without a value.
export function parseArgs(argv = process.argv.slice(2), bool = []) {
  const pos = [];
  const opt = {};
  for (let i = 0; i < argv.length; i++) {
    const a = argv[i];
    if (a.startsWith("--")) {
      const [k, inline] = a.slice(2).split(/=(.*)/s, 2);
      if (inline !== undefined) opt[k] = inline;
      else if (bool.includes(k) || i + 1 >= argv.length || argv[i + 1].startsWith("--")) opt[k] = true;
      else opt[k] = argv[++i];
    } else pos.push(a);
  }
  return { pos, opt };
}

// Newest modification time (ms) of any file under dir (0 when empty or missing).
export function newestMtime(dir) {
  if (!fs.existsSync(dir)) return 0;
  const st = fs.statSync(dir);
  if (!st.isDirectory()) return st.mtimeMs;
  let max = 0;
  for (const e of fs.readdirSync(dir, { withFileTypes: true })) {
    max = Math.max(max, newestMtime(path.join(dir, e.name)));
  }
  return max;
}

// Copy a folder recursively (replacing the target folder).
export function copyDir(from, to) {
  fs.rmSync(to, { recursive: true, force: true });
  if (!fs.existsSync(from)) return false;
  fs.cpSync(from, to, { recursive: true });
  return true;
}
