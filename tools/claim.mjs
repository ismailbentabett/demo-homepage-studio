// Claim a site: take its lock, create its folders, write site.json and copy the niche facts.
//   node tools/claim.mjs roofer-A            idempotent; resumes a site this worker already holds
//   node tools/claim.mjs roofer-A --force    also re-copies facts.json from the niche (overwrites)
//   node tools/claim.mjs roofer-A --take     take the lock even when another live worker holds it
import fs from "node:fs";
import path from "node:path";
import { ROOT, parseArgs, parseId, siteDir, loadSite, saveSite, lockSite, fail, rel } from "./lib/common.mjs";
import { workerId } from "./lib/locks.mjs";

const { pos, opt } = parseArgs(process.argv.slice(2), ["force", "take"]);
if (!pos[0]) fail("Usage: node tools/claim.mjs <id> [--force] [--take]");
const { id, trade, dir } = parseId(pos[0]);

const src = path.join(ROOT, "niches", trade, `facts-${dir}.json`);
if (!fs.existsSync(src)) fail(`${rel(src)} does not exist. Set the niche up first (/niche-setup ${trade}).`);

const existing = loadSite(id);
if (existing && ["done", "needs-human"].includes(existing.stage) && !opt.take) {
  fail(`${id} is already ${existing.stage}. Nothing to claim. (Use --take to work on it again on purpose.)`);
}

const lock = lockSite(id, { force: !!opt.take });
if (!lock.ok) {
  const h = lock.holder;
  fail(`${id} is being built by worker "${h.owner}" (pid ${h.pid}, lock ${Math.round(h.ageMs / 60000)} min old). ` +
    `Run node tools/next.mjs to get a free site instead.`);
}

const base = siteDir(id);
for (const d of ["plan", "src", "qa", "dist"]) fs.mkdirSync(path.join(base, d), { recursive: true });

const facts = path.join(base, "facts.json");
let factsNote = "copied facts.json";
if (fs.existsSync(facts) && !opt.force) {
  factsNote = fs.readFileSync(facts, "utf8") === fs.readFileSync(src, "utf8")
    ? "facts.json already in place"
    : "facts.json kept (it differs from the niche file; use --force to re-copy)";
} else {
  fs.copyFileSync(src, facts);
}

const now = new Date().toISOString();
const site = existing
  ? saveSite(id, { worker: workerId() })
  : saveSite(id, { id, stage: "strategy", round: 0, startedAt: now, worker: workerId(), history: [{ stage: "strategy", at: now, worker: workerId() }] });

console.log(`CLAIMED ${id} by ${workerId()}: stage ${site.stage}, round ${site.round ?? 0}; ${factsNote} (${rel(base)})`);
