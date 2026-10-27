// Safe git commits for parallel workers: one commit at a time (data/.git.lock), only the given paths,
// retries while another git process holds .git/index.lock. Never throws: returns { ok, message }.
import fs from "node:fs";
import path from "node:path";
import { spawnSync } from "node:child_process";
import { ROOT } from "./common.mjs";
import { withMutex, sleepMs } from "./locks.mjs";

const GIT_LOCK = path.join(ROOT, "data", ".git.lock");

function git(args) {
  const r = spawnSync("git", args, { cwd: ROOT, encoding: "utf8" });
  if (r.error) return { code: -1, out: "", err: r.error.message };
  return { code: r.status, out: r.stdout || "", err: r.stderr || "" };
}

export function gitAvailable() {
  return git(["rev-parse", "--is-inside-work-tree"]).out.trim() === "true";
}

// Commit `paths` (relative to ROOT) with `message`. Paths that do not exist are skipped.
export function commitPaths(paths, message) {
  if (!gitAvailable()) return { ok: false, message: "git is not available here (no repository or no git): skipped the commit" };
  const existing = paths.filter((p) => fs.existsSync(path.join(ROOT, p)));
  if (!existing.length) return { ok: false, message: "nothing to commit" };
  try {
    return withMutex(GIT_LOCK, () => {
      for (let attempt = 1; attempt <= 6; attempt++) {
        const add = git(["add", "--", ...existing]);
        if (add.code === 0) {
          const staged = git(["diff", "--cached", "--quiet", "--", ...existing]);
          if (staged.code === 0) return { ok: true, message: "nothing changed since the last commit" };
          const c = git(["commit", "-m", message, "--", ...existing]);
          if (c.code === 0) return { ok: true, message: c.out.split("\n")[0].trim() };
          if (!/index\.lock/.test(c.err)) return { ok: false, message: `git commit failed: ${c.err.trim() || c.out.trim()}` };
        } else if (!/index\.lock/.test(add.err)) {
          return { ok: false, message: `git add failed: ${add.err.trim()}` };
        }
        sleepMs(500 * attempt); // another git process is running: wait and retry
      }
      return { ok: false, message: "git stayed busy (.git/index.lock) for ~10 s: commit skipped, run it by hand" };
    }, { timeoutMs: 60_000, throwOnTimeout: true });
  } catch (e) {
    return { ok: false, message: `commit skipped: ${e.message}` };
  }
}
