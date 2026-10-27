// Is this site's concept different enough from the library and its niche siblings?
//   node tools/check-unique.mjs <id>             concept + media plan (hero reuse between siblings)
//   node tools/check-unique.mjs <id> --concept   concept only (stage 2 gate)
//   node tools/check-unique.mjs <id> --reserve   check and, when clean, reserve the font/hero/palette in the
//                                                registry (stage.mjs does this when the site leaves "concept")
// Compares with delivered sites and other workers' reservations (blocking). Siblings' unreserved draft
// concepts are listed as notes only: whoever reserves first (stage.mjs, leaving "concept") keeps the choice.
// Prints "UNIQUE: clean" or the collisions (exit 1).
import { parseArgs, parseId, fail } from "./lib/common.mjs";
import { checkSite, reserveSite } from "./lib/unique.mjs";

const { pos, opt } = parseArgs(process.argv.slice(2), ["concept", "reserve"]);
if (!pos[0]) fail("Usage: node tools/check-unique.mjs <id> [--concept] [--reserve]");
const { id } = parseId(pos[0]);

let res;
if (opt.reserve) {
  res = reserveSite(id);
  if (!res.problems.length && !opt.concept) res.problems.push(...checkSite(id).problems.filter((p) => p.startsWith("Media:")));
} else {
  res = checkSite(id, { media: !opt.concept });
}

const notes = opt.reserve ? [] : res.notes || [];
if (notes.length) {
  console.log(`note: ${notes.length} overlap${notes.length > 1 ? "s" : ""} with a sibling's draft concept (not reserved yet; change yours to avoid a race):`);
  for (const n of notes) console.log(`  - ${n}`);
}
if (res.problems.length) {
  console.log(`UNIQUE: ${res.problems.length} collision${res.problems.length > 1 ? "s" : ""} for ${id}`);
  for (const p of res.problems) console.log(`  - ${p}`);
  console.log("Change plan/concept.json (or the media plan) and run this again.");
  process.exit(1);
}
console.log(`UNIQUE: clean${res.reserved ? ` (reserved ${res.entry.displayFont}, hero ${res.entry.heroFamily}, "${res.entry.paletteFamily}", ${res.entry.accentHex} for ${id})` : ""}`);
