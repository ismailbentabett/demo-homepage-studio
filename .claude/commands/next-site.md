---
description: Build the next free demo homepage end to end (claim, design, build, critique, fix, deliver, commit). Headless and parallel-safe; one site per run.
argument-hint: "[site id to resume, e.g. roofer-B]"
allowed-tools: Bash(node tools/*), Bash(node:*), Bash(npx playwright:*), Bash(git add:*), Bash(git commit:*), Bash(git status:*), Bash(ls:*), Read, Write, Edit, Glob, Grep, Task
---

You are the orchestrator of ONE site. Up to 10 copies of you run at once, each on its own site.
**Never ask a question, never wait for another worker, never touch a site you don't hold.**
Give subagents paths, not file contents. Keep the critic blind to `src/`.

## 0. Pick the work
1. If `$ARGUMENTS` names a site: `node tools/claim.mjs $ARGUMENTS` (it resumes a site you hold), then go to 2.
   Otherwise run `node tools/next.mjs`. Line 1 is the answer, line 2 the run mode (`fast` or `strict`):
   - `ALL_DONE` or `NONE_FREE` → print it and **stop** (no commit).
   - `NICHE_SETUP <trade> <why>` → the niche's setup lock is yours: run **Niche setup** below, then run
     `node tools/next.mjs` again (it frees the setup lock once the niche is valid). Max 2 setups per run.
   - `<id> <stage> <round>` → the site is locked for you. If the stage is `new`, run `node tools/claim.mjs <id>`.
     If claim fails (another live worker holds it), run `node tools/next.mjs` again (up to 5 times), never `--take`.
2. Read `sites/<trade>/<dir>/site.json` (stage, round). Resume from the table in step 3. Never redo a
   stage whose output exists and passed its gate.

### Niche setup (only when next.mjs said NICHE_SETUP)
- `node tools/validate-niche.mjs <trade>` fails → Task `niche-researcher` with the trade.
- No `niches/<trade>/media/manifest.json`, or no approved item → `node tools/fetch-media.mjs <trade>`,
  then `node tools/approve-media.mjs <trade> --auto`, then Task `media-curator` with the trade.
- Re-run `node tools/validate-niche.mjs <trade>`. Commit: `git add niches/<trade>` then
  `git commit -m "<trade>: niche setup" -- niches/<trade>`.

## 1. The run, fast mode (default)
| Stage in site.json | Do |
|---|---|
| `new`, `strategy`, `concept`, `design` | Task `designer` (id, mode fast). It writes stages 1-3 + the media plan and records `blueprint`. |
| `blueprint`, `media`, `build`, `static`, `render` | Task `builder` (id, mode fast, job build). It ends at `critique`. If `src/media.json` is missing at `media`, run the designer first. |
| `critique` | Task `critic` (id, round N = number of `qa/scores-*.json` + 1). It runs `node tools/score.mjs <id>`. |
| `elevate`, `fix` | If line 1 of `qa/critique-N.md` says `COPY: needs copy-chief`: Task `copy-chief` (id, mode fast, round N). Then Task `builder` (id, mode fast, job fix, round N). Then the critic again (round N+1). |
| `deliver` | Step 2. |
| `needs-human` | score.mjs already restored the best round and freed the lock. Commit (step 3) and stop. |

Read score.mjs's verdict after every critique: `PASS` (also "at the round cap") → deliver; `ELEVATE` or
`FIX` → the fix row; `NEEDS_HUMAN` → commit and stop. Fast mode allows 2 rounds; don't start a third.
Target: 25-30 minutes for the site. If a subagent returns without moving the stage, run it once more
with its error; a second failure → `node tools/stage.mjs <id> needs-human --why "<one line>"`.

## 1b. Strict mode (line 2 says strict)
Same table, but: `strategy`/`concept` → Task `concept-director`; `design` → Task `designer` (stages 3 + 5
only); `blueprint` → Task `builder` blueprint, then Task `copy-chief` (mode strict: `plan/copy.md`), then
`builder` job build; copy-chief runs on every round the critic flags copy. Up to 4 rounds.

## 2. Deliver
`node tools/deliver.mjs <id>`. If it refuses, do what it says (usually: re-run a stale check through the
builder fix job) and try once more; still refused → `needs-human --why`.

## 3. Commit (path-limited: other workers share the index)
```
git add sites/<trade>/<dir> data/design-registry.json data/progress.json library
git commit -m "<id>: <delivered 9.1 | needs-human 8.4> (<mode>)" -- sites/<trade>/<dir> data/design-registry.json data/progress.json library
```
Skip a path that doesn't exist. If git says `index.lock` exists, wait 3 s
(`node -e "setTimeout(()=>{},3000)"`) and retry, up to 5 times. Never `git add -A`, never `git push`,
never commit another site's folder. If deliver.mjs already committed, skip this.

## 4. Report (≤ 6 lines)
The id, the verdict and weighted score, the rounds used, the wall time, and anything a human should look at.
One site per run: then stop.
