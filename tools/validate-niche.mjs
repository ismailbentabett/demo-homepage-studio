// Validate a niche's brief, facts and media queries.
//   node tools/validate-niche.mjs roofer     -> "NICHE OK roofer" or the problem list (exit 1)
//   node tools/validate-niche.mjs --all      -> a summary of all 30 niches + cross-niche collisions
import { nicheOrder, fail } from "./lib/common.mjs";
import { validateNiche } from "./lib/niche.mjs";

const args = process.argv.slice(2);
const all = args.includes("--all");
const trade = args.find((a) => !a.startsWith("--"));
if (!all && !trade) fail("Usage: node tools/validate-niche.mjs <trade> | --all");

if (!all) {
  const r = validateNiche(trade);
  for (const w of r.warnings) console.log(`  warn: ${w}`);
  if (r.problems.length) {
    console.log(`NICHE PROBLEMS ${trade} (${r.problems.length})`);
    for (const p of r.problems) console.log(`  - ${p}`);
    process.exit(1);
  }
  console.log(`NICHE OK ${trade}`);
  process.exit(0);
}

// --all: one line per niche, then the details of the failing ones
const cache = {};
let bad = 0;
const results = nicheOrder().map((t) => validateNiche(t, cache));
for (const r of results) {
  const status = r.problems.length ? `FAIL (${r.problems.length} problems)` : "OK";
  console.log(`${r.trade.padEnd(12)} ${status}${r.warnings.length ? `, ${r.warnings.length} warnings` : ""}`);
  if (r.problems.length) bad++;
}
const cross = results.flatMap((r) => r.problems.filter((p) => /already used by/.test(p)).map((p) => `${r.trade}: ${p}`));
if (cross.length) {
  console.log(`\nCross-niche collisions (${cross.length}):`);
  for (const c of cross) console.log(`  - ${c}`);
}
for (const r of results.filter((x) => x.problems.length)) {
  console.log(`\n${r.trade}:`);
  for (const p of r.problems) console.log(`  - ${p}`);
}
console.log(`\n${results.length - bad} of ${results.length} niches OK.`);
process.exit(bad ? 1 : 0);
