// Force-deliver: bypasses score gate for autonomous mode.
// Usage: node tools/force-deliver.mjs <id> [--no-commit]
import fs from "node:fs";
import path from "node:path";
import sharp from "sharp";
import { ROOT, parseArgs, parseId, siteDir, loadSite, loadFacts, saveSite, unlockSite, siteLock, updateRegistry, rel } from "./lib/common.mjs";
import { latestScores, readCategories, weighted, checkState, describeChecks } from "./lib/scoring.mjs";
import { checkSite } from "./lib/unique.mjs";
import { runMode } from "./lib/mode.mjs";
import { workerId } from "./lib/locks.mjs";
import { launchBrowser, firstScreen } from "./lib/shots.mjs";
import { commitPaths } from "./lib/git.mjs";

const { pos, opt } = parseArgs(process.argv.slice(2), ["no-commit"]);
if (!pos[0]) { console.error("Usage: node tools/force-deliver.mjs <id> [--no-commit]"); process.exit(1); }
const { id, trade, dir } = parseId(pos[0]);
const base = siteDir(id);
const site = loadSite(id);
if (!site) { console.error(`${id} has no site.json`); process.exit(1); }
if (site.stage === "done") { console.log(`${id} already delivered`); process.exit(0); }

const dist = path.join(base, "dist", "index.html");
if (!fs.existsSync(dist)) { console.error(`${rel(dist)} missing — run build first`); process.exit(1); }

// Uniqueness check (still enforce to avoid library collisions)
const uniq = checkSite(id);
if (uniq.problems.length) {
  console.error(`${id} collides with library:\n- ${uniq.problems.join("\n- ")}`);
  process.exit(1);
}

// Get best available score for metadata
const latest = latestScores(id);
const w = latest ? weighted(readCategories(latest.data).scores) : 0;
const round = latest?.round ?? 0;
const mode = runMode();
const checks = checkState(id);

// Library card
const cardFile = path.join(ROOT, "library", "cards", `${id}.jpg`);
fs.mkdirSync(path.dirname(cardFile), { recursive: true });
try {
  const browser = await launchBrowser();
  try {
    const png = await firstScreen(browser, dist, 1200, 750);
    await sharp(png).jpeg({ quality: 82, mozjpeg: true }).toFile(cardFile);
  } finally { await browser.close(); }
} catch (e) {
  console.error(`Card failed for ${id}: ${e.message} — skipping card`);
}

const now = new Date().toISOString();
const facts = loadFacts(id) || {};
updateRegistry((reg) => {
  const old = reg.sites.find((e) => e.id === id) || {};
  reg.sites = reg.sites.filter((e) => e.id !== id);
  reg.sites.push({ ...old, ...(uniq.entry || {}), status: "delivered", reservedAt: old.reservedAt || now, deliveredAt: now, score: w, mode: mode.name, forced: true });
  return reg;
});

saveSite(id, {
  stage: "done",
  deliveredAt: now,
  verdict: "PASS",
  deliveredScore: w,
  deliveredRound: round,
  deliveredMode: mode.name,
  forcedDelivery: true,
  history: [...(site.history || []), { stage: "done", at: now, from: site.stage, worker: workerId(), weighted: w, round, forced: true }],
});

unlockSite(id, { force: true });
console.log(`FORCE-DELIVERED ${id}: score ${w} (round ${round}, ${mode.name})`);

if (!opt["no-commit"]) {
  const r = commitPaths([rel(base), rel(cardFile), "data/design-registry.json", "data/progress.json"], `site: ${id} force-delivered (score ${w})`);
  console.log(r.ok ? `committed: ${r.message}` : `not committed: ${r.message}`);
}