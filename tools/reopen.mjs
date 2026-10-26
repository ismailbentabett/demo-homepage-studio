// Reopen a needs-human site for more critique rounds (for example after its niche got better photos).
//   node tools/reopen.mjs pest-A              2 more rounds, back to stage "fix" on the best round
//   node tools/reopen.mjs pest-A --rounds 3
// Sets site.json.roundCap = current round + N (tools/lib/scoring.mjs uses it instead of the mode's
// maxRounds) and takes the site lock. The best round is already in src/ (score.mjs restored it).
import { parseArgs, parseId, loadSite, saveSite, lockSite, fail } from "./lib/common.mjs";
import { workerId } from "./lib/locks.mjs";

const { pos, opt } = parseArgs(process.argv.slice(2));
if (!pos[0]) fail("Usage: node tools/reopen.mjs <id> [--rounds N]");
const { id } = parseId(pos[0]);
const site = loadSite(id);
if (!site) fail(`${id} has no site.json.`);
if (site.stage !== "needs-human") fail(`${id} is at "${site.stage}", not needs-human. Nothing to reopen.`);
const extra = Math.max(1, Number(opt.rounds) || 2);
const lock = lockSite(id, { force: true });
if (!lock.ok) fail(`could not lock ${id}`);
const round = Number(site.round) || 0;
const now = new Date().toISOString();
saveSite(id, {
  stage: "fix", roundCap: round + extra, worker: workerId(),
  history: [...(site.history || []), { stage: "fix", at: now, from: "needs-human", worker: workerId(), round, why: `reopened for ${extra} more round(s)` }],
});
console.log(`REOPENED ${id}: stage fix, round ${round}, cap now ${round + extra}. Next: builder fix round ${round}, then critic round ${round + 1}.`);
