// What should this worker do next? Safe to run from ~10 workers at once.
//   node tools/next.mjs            takes (locks) the next free site and prints it
//   node tools/next.mjs --peek     same answer, but locks nothing
//   node tools/next.mjs --mine     only the site this worker already holds (or NONE)
//   node tools/next.mjs --json
//
// Line 1 is one of:
//   <id> <stage> <round>      work on this site (it is locked for you; "new 0" = not claimed yet: run claim.mjs)
//   NICHE_SETUP <trade> <why> set the niche up first (/niche-setup); the niche's setup lock is yours
//   NONE_FREE                 everything left is being built by other workers: stop this worker
//   ALL_DONE                  all 90 sites are done or need a human
// Line 2 is the run mode (fast/strict).
//
// Order: a site this worker already holds first, then the first free site in data/niche-order.json (A, B, C).
// An unfinished earlier niche never blocks a later one.
import fs from "node:fs";
import path from "node:path";
import { ROOT, parseArgs, nicheOrder, nicheIds, loadSite, siteLock, lockSite, setupLockFile } from "./lib/common.mjs";
import { lockStatus, acquireLock, releaseLock, workerId } from "./lib/locks.mjs";
import { validateNiche, approvedMediaCount } from "./lib/niche.mjs";
import { runMode, describeMode } from "./lib/mode.mjs";

const { opt } = parseArgs(process.argv.slice(2), ["peek", "mine", "json"]);
const mode = runMode();
const FINAL = new Set(["done", "needs-human"]);

function out(result) {
  if (opt.json) console.log(JSON.stringify({ ...result, worker: workerId(), mode: mode.name }, null, 2));
  else {
    console.log(result.line);
    console.log(`mode ${describeMode(mode)}; worker ${workerId()}`);
  }
  process.exit(0);
}
const siteResult = (id) => {
  const s = loadSite(id);
  const stage = s?.stage ?? "new";
  const round = s?.round ?? 0;
  return { kind: "site", id, stage, round, line: `${id} ${stage} ${round}` };
};

// Why a niche is not ready to build, or null when it is.
function nicheNotReady(trade) {
  const dir = path.join(ROOT, "niches", trade);
  const missing = ["brief.md", "facts-A.json", "facts-B.json", "facts-C.json"].filter((f) => !fs.existsSync(path.join(dir, f)));
  if (missing.length) return `missing ${missing.join(", ")}`;
  const v = validateNiche(trade);
  if (v.problems.length) return `validate-niche fails (${v.problems.length} problem${v.problems.length > 1 ? "s" : ""}: ${v.problems[0]})`;
  const media = approvedMediaCount(trade);
  if (!media.exists) return "no media manifest (niches/" + trade + "/media/manifest.json)";
  if (media.invalid) return "media manifest is not valid JSON";
  if (!media.approved) return "media manifest has no approved items";
  return null;
}

const order = nicheOrder();
const all = order.flatMap((t) => nicheIds(t));

// 1. A site this worker already holds (resume after a crash or a new /next-site turn).
for (const id of all) {
  const lock = siteLock(id);
  if (lock?.mine && !FINAL.has(loadSite(id)?.stage)) out(siteResult(id));
}
if (opt.mine) out({ kind: "none", line: "NONE" });

// 2. The first free site in niche order.
let othersBusy = false;
for (const trade of order) {
  const open = nicheIds(trade).filter((id) => !FINAL.has(loadSite(id)?.stage));
  if (!open.length) continue;

  // Sites already claimed only need their lock: the niche was ready when they started.
  const unclaimed = open.filter((id) => !loadSite(id));
  const claimed = open.filter((id) => loadSite(id));

  for (const id of claimed) {
    const lock = siteLock(id);
    if (lock && !lock.stale && !lock.mine) { othersBusy = true; continue; }
    if (opt.peek) out(siteResult(id));
    if (lockSite(id).ok) out(siteResult(id));
    othersBusy = true;
  }
  if (!unclaimed.length) continue;

  // A niche being set up by someone else: skip it for now.
  const setupFile = setupLockFile(trade);
  const setup = lockStatus(setupFile);
  if (setup && !setup.stale && !setup.mine) { othersBusy = true; continue; }

  const why = nicheNotReady(trade);
  if (why) {
    if (!opt.peek && !acquireLock(setupFile).ok) { othersBusy = true; continue; }
    out({ kind: "setup", trade, why, line: `NICHE_SETUP ${trade} ${why}` });
  }
  if (setup?.mine && !opt.peek) releaseLock(setupFile); // set up and valid now: free the niche

  for (const id of unclaimed) {
    const lock = siteLock(id);
    if (lock && !lock.stale && !lock.mine) { othersBusy = true; continue; }
    if (opt.peek) out(siteResult(id));
    if (lockSite(id).ok) out(siteResult(id));
    othersBusy = true;
  }
}

out(othersBusy ? { kind: "none_free", line: "NONE_FREE" } : { kind: "all_done", line: "ALL_DONE" });
