// Stage 12: deliver a site. The only tool that sets site.json.stage = "done".
//   node tools/deliver.mjs roofer-A
//   node tools/deliver.mjs roofer-A --no-commit    (skip the git commit)
//
// Refuses unless:
//   - the newest qa/scores-N.json gives PASS under the run mode (score.mjs rules, including the fast-mode round cap),
//   - qa/static.json and qa/render.json are newer than the last change in src/ (part of the PASS rule),
//   - check-unique is clean against the library.
// Then: registry entry -> "delivered", stage done, library card library/cards/<id>.jpg (1200x750),
// DELIVERY.md in the site folder, and one git commit "site: <id> delivered (score X)" (never fails the delivery).
import fs from "node:fs";
import path from "node:path";
import sharp from "sharp";
import { ROOT, parseArgs, parseId, siteDir, loadSite, loadFacts, saveSite, unlockSite, siteLock, updateRegistry, fail, rel } from "./lib/common.mjs";
import { latestScores, verdictFor, describeChecks } from "./lib/scoring.mjs";
import { checkSite } from "./lib/unique.mjs";
import { runMode, describeMode } from "./lib/mode.mjs";
import { workerId } from "./lib/locks.mjs";
import { launchBrowser, firstScreen } from "./lib/shots.mjs";
import { commitPaths } from "./lib/git.mjs";

const { pos, opt } = parseArgs(process.argv.slice(2), ["no-commit"]);
if (!pos[0]) fail("Usage: node tools/deliver.mjs <id> [--no-commit]");
const { id, trade, dir } = parseId(pos[0]);
const base = siteDir(id);
const site = loadSite(id);
if (!site) fail(`${id} has no site.json. Claim it first: node tools/claim.mjs ${id}`);
if (site.stage === "done") fail(`${id} is already delivered (${site.deliveredAt}). Nothing to do.`);

const lock = siteLock(id);
if (lock && !lock.mine && !lock.stale) fail(`${id} is held by worker "${lock.owner}". Only that worker delivers it.`);

// 1. The pass rule, recomputed now (checks may have been re-run since score.mjs).
const latest = latestScores(id);
if (!latest) fail(`${id} has no qa/scores-N.json. Run the critique and node tools/score.mjs ${id} first.`);
const mode = runMode();
const v = verdictFor(id, latest.data, latest.round, mode);
if (v.verdict === "INVALID") fail(`${rel(latest.file)} is not a valid scores file:\n  - ${v.problems.join("\n  - ")}`);
if (v.verdict !== "PASS") {
  fail(`${id} does not pass (${describeMode(mode)}).\n  ${v.verdict}: ${v.reason}\n  checks: ${describeChecks(v.checks)}\n` +
    `Do what score.mjs says (node tools/score.mjs ${id}), then deliver again.`);
}

// 2. Uniqueness against the library (its own reservation does not count against it).
const uniq = checkSite(id);
if (uniq.problems.length) {
  fail(`${id} collides with the library:\n  - ${uniq.problems.join("\n  - ")}\nFix it (node tools/check-unique.mjs ${id}), rebuild, re-run the checks and the critique.`);
}

const dist = path.join(base, "dist", "index.html");
if (!fs.existsSync(dist)) fail(`${rel(dist)} is missing. Run node tools/build.mjs ${id}.`);

// 3. Library card: the top of the page at 1200x750.
const cardFile = path.join(ROOT, "library", "cards", `${id}.jpg`);
fs.mkdirSync(path.dirname(cardFile), { recursive: true });
let cardNote;
try {
  const browser = await launchBrowser();
  try {
    const png = await firstScreen(browser, dist, 1200, 750);
    await sharp(png).jpeg({ quality: 82, mozjpeg: true }).toFile(cardFile);
    cardNote = rel(cardFile);
  } finally {
    await browser.close();
  }
} catch (e) {
  fail(`Could not make the library card: ${e.message}`);
}

// 4. Registry, site.json, DELIVERY.md.
const now = new Date().toISOString();
const facts = loadFacts(id) || {};
updateRegistry((reg) => {
  const old = reg.sites.find((e) => e.id === id) || {};
  reg.sites = reg.sites.filter((e) => e.id !== id);
  reg.sites.push({ ...old, ...uniq.entry, status: "delivered", reservedAt: old.reservedAt || now, deliveredAt: now, score: v.weighted, mode: mode.name });
  return reg;
});
saveSite(id, {
  stage: "done",
  deliveredAt: now,
  verdict: "PASS",
  deliveredScore: v.weighted,
  deliveredRound: latest.round,
  deliveredMode: mode.name,
  ...(v.cap ? { deliveredAtCap: true } : {}),
  history: [...(site.history || []), { stage: "done", at: now, from: site.stage, worker: workerId(), weighted: v.weighted, round: latest.round }],
});

const c = uniq.entry || {};
const biz = facts.biz || {};
const scoreRows = Object.entries(v.scores).map(([k, s]) => `| ${k} | ${s} |`).join("\n");
const md = `# ${id} delivered

- **Business (sample):** ${biz.name || "?"}, ${biz.city || "?"}, ${biz.state || "?"}
- **Direction:** ${dir} (${facts.direction?.axis || facts.direction?.name || facts.direction || "see brief"})
- **Score:** ${v.weighted} (round ${latest.round}, ${mode.name} mode${v.cap ? ", delivered at the round cap" : ""})
- **Delivered:** ${now} by ${workerId()}
- **Signature:** ${c.signature?.name || "?"}: ${c.signature?.summary || ""}
- **Fonts:** ${c.displayFont || "?"} / ${c.textFont || "?"}
- **Palette:** ${c.paletteFamily || "?"} (accent ${c.accentHex || "?"}, deep ${c.deepHex || "?"})
- **Hero family:** ${c.heroFamily ?? "?"}
- **Card:** ${cardNote}
- **Checks:** ${describeChecks(v.checks)}

| Category | Score |
|---|---|
${scoreRows}

Open \`dist/index.html\` in a browser. Reskin for a prospect: \`node tools/reskin.mjs ${id} <prospect-facts.json> <outDir>\`.
`;
fs.writeFileSync(path.join(base, "DELIVERY.md"), md);
unlockSite(id, { force: true });

console.log(`DELIVERED ${id}: score ${v.weighted} (round ${latest.round}, ${mode.name}${v.cap ? ", at the round cap" : ""}); card ${cardNote}`);

// 5. Commit (never fails the delivery).
const message = `site: ${id} delivered (score ${v.weighted})`;
if (opt["no-commit"]) {
  console.log(`commit skipped (--no-commit). Message would be: ${message}`);
} else {
  const r = commitPaths([rel(base), rel(cardFile), "data/design-registry.json", "data/progress.json"], message);
  console.log(r.ok ? `committed: ${r.message}` : `not committed: ${r.message}`);
}
console.log("Stop here: one site per run. The next run starts with node tools/next.mjs.");
