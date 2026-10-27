// Record that a site moves to a stage (site.json + data/progress.json).
//   node tools/stage.mjs roofer-A design
//   node tools/stage.mjs roofer-A needs-human --why "round 2 stuck at 8.4: hero photo too weak"
//
// - Leaving "concept" (any later stage) reserves the display font, hero family, palette family and accent
//   in data/design-registry.json under the registry lock, so a parallel sibling cannot take them.
// - needs-human puts the best round back in place (qa/best/src and qa/best/dist) and frees the site lock.
// - "done" is refused: only tools/deliver.mjs sets it.
import fs from "node:fs";
import path from "node:path";
import { STAGES, parseArgs, parseId, siteDir, loadSite, saveSite, siteLock, touchSite, unlockSite, copyDir, fail } from "./lib/common.mjs";
import { workerId } from "./lib/locks.mjs";
import { reserveSite, reservationCurrent } from "./lib/unique.mjs";

const { pos, opt } = parseArgs(process.argv.slice(2), ["force"]);
if (pos.length < 2) fail(`Usage: node tools/stage.mjs <id> <stage> [--why "..."]. Stages: ${STAGES.join(", ")}`);
const { id } = parseId(pos[0]);
const stage = pos[1];
if (!STAGES.includes(stage)) fail(`"${stage}" is not a stage. Use one of: ${STAGES.filter((s) => s !== "done").join(", ")}.`);
if (stage === "done") fail("Only tools/deliver.mjs may set a site to done (it checks the pass rule). Run node tools/deliver.mjs " + id);

const site = loadSite(id);
if (!site) fail(`${id} has no site.json. Claim it first: node tools/claim.mjs ${id}`);

const lock = siteLock(id);
if (lock && !lock.mine && !lock.stale && !opt.force) {
  fail(`${id} is held by worker "${lock.owner}" (pid ${lock.pid}). Do not change another worker's site (use --force only if you are sure).`);
}

// Reserve the concept's unique choices once the site moves past the concept stage.
const after = STAGES.indexOf(stage) > STAGES.indexOf("concept") && stage !== "needs-human";
if (after && !reservationCurrent(id)) {
  const r = reserveSite(id);
  if (r.problems.length) {
    console.log(`Cannot move ${id} to ${stage}: its concept collides with the library (another worker may have just reserved it):`);
    for (const p of r.problems) console.log(`  - ${p}`);
    console.log("Change plan/concept.json, run node tools/check-unique.mjs " + id + " --concept, then this again.");
    process.exit(1);
  }
  if (r.reserved) console.log(`reserved ${r.entry.displayFont} / hero ${r.entry.heroFamily} / "${r.entry.paletteFamily}" ${r.entry.accentHex} for ${id}`);
}

const now = new Date().toISOString();
const entry = { stage, at: now, from: site.stage, worker: workerId() };
const patch = { stage };

if (stage === "needs-human") {
  const why = typeof opt.why === "string" ? opt.why : site.verdictReason || "not given";
  entry.why = why;
  patch.needsHumanWhy = why;
  const best = path.join(siteDir(id), "qa", "best");
  const restored = [];
  for (const d of ["src", "dist"]) {
    if (fs.existsSync(path.join(best, d))) {
      copyDir(path.join(best, d), path.join(siteDir(id), d));
      restored.push(d);
    }
  }
  entry.restored = restored;
  console.log(restored.length ? `restored the best round (${site.best?.round ?? "?"}, ${site.best?.weighted ?? "?"}) into ${restored.join(" + ")}` : "no qa/best/ yet: left src/ and dist/ as they are");
}

patch.history = [...(site.history || []), entry];
saveSite(id, patch);

if (stage === "needs-human") unlockSite(id, { force: true });
else touchSite(id);

console.log(`${id}: ${site.stage} -> ${stage}${entry.why ? ` (${entry.why})` : ""}`);
