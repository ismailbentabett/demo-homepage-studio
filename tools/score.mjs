// Score the newest critique round of a site (stage 9).
//   node tools/score.mjs roofer-A          reads qa/scores-N.json (newest N), prints the table and the verdict
//   node tools/score.mjs roofer-A --json
//
// Verdicts (the mode, fast or strict, is in tools/lib/mode.mjs):
//   PASS         -> next: node tools/deliver.mjs <id>
//   ELEVATE      -> rewrite the two weakest categories (named), then stage 7 again
//   FIX          -> fix every must/should + check finding, then stage 7 again
//   NEEDS_HUMAN  -> round cap reached: this tool already restored the best round and freed the site
// The best round so far is kept in qa/best/ (src, dist, scores, best.json).
import fs from "node:fs";
import path from "node:path";
import { parseArgs, parseId, siteDir, loadSite, saveSite, touchSite, unlockSite, copyDir, writeJson, fail, rel } from "./lib/common.mjs";
import { CATEGORIES, latestScores, verdictFor, describeChecks } from "./lib/scoring.mjs";
import { runMode, describeMode } from "./lib/mode.mjs";
import { workerId } from "./lib/locks.mjs";

const { pos, opt } = parseArgs(process.argv.slice(2), ["json"]);
if (!pos[0]) fail("Usage: node tools/score.mjs <id> [--json]");
const { id } = parseId(pos[0]);
const site = loadSite(id);
if (!site) fail(`${id} has no site.json. Claim it first: node tools/claim.mjs ${id}`);

const latest = latestScores(id);
if (!latest) fail(`${rel(path.join(siteDir(id), "qa"))} has no scores-N.json. Run /critique ${id} first (the critic writes it).`);
const round = Number(latest.data.round ?? latest.round);
if (round !== latest.round) fail(`${rel(latest.file)} says round ${latest.data.round}; the file name says ${latest.round}. Make them match.`);

const mode = runMode();
const v = verdictFor(id, latest.data, round, mode);
if (v.verdict === "INVALID") fail(`${rel(latest.file)} is not a valid scores file:\n  - ${v.problems.join("\n  - ")}`);

// Keep the best round (highest weighted; a tie keeps the earlier one).
const base = siteDir(id);
const bestDir = path.join(base, "qa", "best");
const prevBest = site.best;
const isBest = !prevBest || v.weighted > prevBest.weighted || (prevBest.round === round);
if (isBest) {
  copyDir(path.join(base, "src"), path.join(bestDir, "src"));
  copyDir(path.join(base, "dist"), path.join(bestDir, "dist"));
  fs.copyFileSync(latest.file, path.join(bestDir, "scores.json"));
  writeJson(path.join(bestDir, "best.json"), { round, weighted: v.weighted, verdict: v.verdict, at: new Date().toISOString() });
}

const now = new Date().toISOString();
const nextStage = { PASS: "deliver", ELEVATE: "elevate", FIX: "fix", NEEDS_HUMAN: "needs-human" }[v.verdict];
const scoresHist = [...(site.scores || []).filter((s) => s.round !== round), { round, weighted: v.weighted, verdict: v.verdict, at: now }];
const patch = {
  round,
  verdict: v.verdict,
  verdictReason: v.reason,
  mode: mode.name,
  scores: scoresHist,
  best: isBest ? { round, weighted: v.weighted } : prevBest,
  stage: nextStage,
  history: [...(site.history || []), { stage: nextStage, at: now, from: site.stage, worker: workerId(), round, weighted: v.weighted, verdict: v.verdict }],
};
if (v.cap) patch.deliveredAtCap = true;

// NEEDS_HUMAN: put the best round back in place and free the site for the run to move on.
if (v.verdict === "NEEDS_HUMAN") {
  const restored = [];
  // Keep the round just scored in qa/last/ so a restore never destroys newer work.
  if (!isBest) for (const d of ["src", "dist"]) copyDir(path.join(base, d), path.join(base, "qa", "last", d));
  for (const d of ["src", "dist"]) if (fs.existsSync(path.join(bestDir, d))) {
    copyDir(path.join(bestDir, d), path.join(base, d));
    restored.push(d);
  }
  patch.needsHumanWhy = v.reason;
  patch.history[patch.history.length - 1].why = v.reason;
  patch.history[patch.history.length - 1].restored = restored;
}
saveSite(id, patch);
if (v.verdict === "NEEDS_HUMAN") unlockSite(id, { force: true });
else touchSite(id);

if (opt.json) {
  console.log(JSON.stringify({ id, ...v, best: patch.best, nextStage }, null, 2));
  process.exit(0);
}

// Table
const rows = Object.entries(CATEGORIES).map(([k, [w, floor]]) => {
  const s = v.scores[k];
  const bar = k === "photo" ? mode.passPhoto : mode.passMin;
  const mark = s < floor ? "UNDER FLOOR" : s < bar ? "below bar" : "ok";
  return `${k.padEnd(16)} ${String(s).padStart(5)}  w${String(w).padStart(3)}  floor ${floor}  ${mark}`;
});
console.log(`${id} round ${round}  (${describeMode(mode)})`);
console.log(rows.join("\n"));
console.log(`weighted         ${v.weighted.toFixed(2)}   best: round ${patch.best.round} (${patch.best.weighted})${isBest ? "  <- kept in qa/best/" : ""}`);
console.log(`checks: ${describeChecks(v.checks)}`);
console.log(`${v.verdict}${v.cap ? " (at the round cap)" : ""}: ${v.reason}`);
const next = {
  PASS: `next: node tools/deliver.mjs ${id}`,
  ELEVATE: `next: elevate ${v.lowest.join(" + ")}, then node tools/build.mjs ${id} and the checks (stage 7)`,
  FIX: `next: fix every must/should and check finding, then node tools/build.mjs ${id} and the checks (stage 7)`,
  NEEDS_HUMAN: `done with ${id}: the best round (${patch.best.round}, ${patch.best.weighted}) is in place and the site is marked needs-human. Run node tools/next.mjs for the next site.`,
}[v.verdict];
console.log(next);
