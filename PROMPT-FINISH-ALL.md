# MISSION: finish every remaining demo homepage in this repo, start to end, without stopping

You are working inside `C:\Users\ismailbentabett\Desktop\demo-homepage-studio` (Windows 11, Node ≥ 20, git repo on `main`).
This studio builds sales-demo homepages for local home-service businesses: **47 niches × 3 homepages (A, B, C) = 141 sites.**
Your job is to take **every** site that is not finished to a final state (`done` or `needs-human`), including all the
niches that have no sites yet, and commit each one. You run until `node tools/next.mjs` prints `ALL_DONE`.

---

## 0. Operating mode — read this twice

- **Never stop until the whole job is done.** No "phase 1 complete", no "let me know if you want me to continue",
  no summaries mid-way that end your turn. After every site, immediately start the next one.
- **Never ask a question.** Every decision you need is answerable from this file, `CLAUDE.md`, `docs/`, or the
  tools' own output. When unsure, pick the option the docs favour and keep going. Write the choice in
  `docs/CHANGELOG.md` if it matters.
- **Never abort, never give up on the run.** A site that cannot pass goes to `needs-human` (see §5) and you move on.
  A crashing tool gets diagnosed and fixed (see §6). Nothing is a reason to end the run except `ALL_DONE`.
- **Do not work "phase by phase" across the whole library.** Work **site by site**: take one site from wherever it is
  all the way to delivered/needs-human and committed, then the next. Never batch "all strategies first, then all
  builds".
- **If your context is getting long**, that is fine: the state lives on disk (`sites/*/*/site.json`, `data/progress.json`).
  Re-run `node tools/next.mjs` and resume. Never restart a stage whose output file exists and passed its gate.
- Progress line after each site (one line, then continue): `✔ <id> <done|needs-human> <score> — <N> left`.

## 1. Your environment is limited — plan for it

You are running through a Claude gateway with **fewer features than Claude Code**. Assume:

- **No subagents / no Task tool.** The repo's workflow calls agents (`designer`, `builder`, `critic`, `copy-chief`,
  `concept-director`, `media-curator`, `niche-researcher`). You play every role yourself: before each role,
  **read its definition file** `.claude/agents/<role>.md` and follow it exactly as if you were that agent.
- **No slash commands, no skills tool.** `.claude/commands/next-site.md` is your procedure — read it and execute it by
  hand. Craft guidance in `.claude/skills/*/SKILL.md` is plain markdown: open the relevant one when that stage needs it
  (motion, type, copy, a11y, photo, conversion, logo, signature-systems, layout-composition).
- **No MCP servers** (no browser MCP, no Playwright MCP, no web search, no image viewer guarantees). Everything is done
  with the shell + file read/write. Screenshots are produced by `node tools/check-render.mjs` / `tools/capture-screens.mjs`
  (Playwright from `node_modules`, already installed). If you can read image files, look at `qa/screens/*.jpg`; if you
  cannot, rely on `qa/render.json` and `qa/static.json` numbers — never claim you "looked" at something you didn't.
- **Network may be missing.** Never hot-link fonts/images/scripts. Use only `assets/fonts/`, `vendor/`, and each
  niche's approved `niches/<trade>/media/`. If `fetch-fonts.mjs` or `fetch-media.mjs` fails offline, choose a font
  that already exists in `assets/fonts/` and photos already in the manifest.
- **Shell:** prefer Git Bash syntax. Commands can time out: run long ones one at a time and check their output.
- **NEVER delete recursively** (`rm -rf`, `rm -r`, `Remove-Item -Recurse`, `rmdir /s`, `del /s`) — on any path,
  ever. Need a clean folder? Write to a new uniquely named folder. Never `git push`. Never `git add -A`.

## 2. Read first (once, at the start; re-read METHOD before each new niche)

1. `CLAUDE.md` — the 10 rules that never bend, the pass rule, the stage table.
2. `.claude/commands/next-site.md` — the exact per-site procedure (fast mode table, deliver, commit).
3. `docs/METHOD.md`, `docs/RUBRIC.md`, `docs/LEARNINGS.md`, `docs/DEMO-RULES.md`, `docs/BUILD-CONTRACT.md`.
4. `.claude/agents/*.md` — all seven role definitions.
5. `reference/golden-touch/` — method and values only; never copy the look.

## 3. What is left (snapshot 2026-11-01 — always trust `node tools/next.mjs` over this list)

- **In progress:** gutter-A (deliver), gutter-B (critique), gutter-C (render), insulation-C (render),
  locksmith-A/B (render), locksmith-C (build), solar-A (build), solar-B/C (render),
  fireplace-A/B/C (strategy), moving-A/B/C (strategy).
- **Missing niches — no sites built yet (brief, facts and media manifest already exist):**
  landclearing, tile, junkremoval, septic, selfstorage, excavation, well, irrigation, nursery, pinestraw,
  mural, farm, consulting, cannabis → 14 niches × 3 = **42 new sites**.
- Already final (`done` / `needs-human`): leave them alone. Do not reopen `needs-human` sites.

Order is decided by `node tools/next.mjs` (follows `data/niche-order.json`). Finish all 3 of a niche before the next.

## 4. The loop (repeat until `ALL_DONE`)

```
node tools/next.mjs
```
- `ALL_DONE` → go to §7.
- `NONE_FREE` → a stale lock is blocking. Inspect `sites/*/*/.lock` / `niches/*/media/.lock`; locks older than
  1 hour with no live worker are stale: `node tools/claim.mjs <id> --take` for that site only. Continue.
- `NICHE_SETUP <trade>` → run "Niche setup" from `next-site.md` yourself:
  `node tools/validate-niche.mjs <trade>`; if it fails, act as `niche-researcher` and fix the pack; if no approved media,
  `node tools/fetch-media.mjs <trade>` → `node tools/approve-media.mjs <trade> --auto` → act as `media-curator`.
  Validate again, commit `niches/<trade>` only. Then back to the loop.
- `<id> <stage> <round>` → `node tools/claim.mjs <id>`, read `sites/<trade>/<dir>/site.json`, resume at its stage:

| Stage | You act as | Do |
|---|---|---|
| new / strategy / concept / design | `designer` (fast mode) | stages 1-5: strategy, concept, design system, media plan. Gate: `node tools/check-unique.mjs <id> --concept` clean. |
| blueprint / media / build / static / render | `builder` (job build) | write `src/index.html`, `src/style.css`, `src/app.js`, `src/site.config.json`; `node tools/build.mjs <id>`; `node tools/check-static.mjs <id>`; `node tools/check-render.mjs <id>`; loop until **zero blockers, zero warnings**. |
| critique | `critic` | see "being your own critic" below; write `qa/critique-N.md` + `qa/scores-N.json`; run `node tools/score.mjs <id>`. |
| elevate / fix | `copy-chief` if line 1 of the critique says so, then `builder` (job fix) | apply every critique item, re-run build + both checks, then critique round N+1. |
| deliver | you | `node tools/deliver.mjs <id>`. |

Run `node tools/stage.mjs <id> <stage>` between stages. Follow `score.mjs`'s verdict exactly
(`PASS` → deliver, `ELEVATE`/`FIX` → fix row, `NEEDS_HUMAN` → commit and move on). Respect the round cap the
mode line prints (fast mode: 2 rounds).

**Being your own critic (no subagent available):** you must still be blind and harsh. Before scoring, deliberately
switch roles: read only `.claude/agents/critic.md`, `docs/RUBRIC.md`, `plan/02-concept.md` (or concept.json),
`qa/screens/`, `qa/render.json` and the built `dist/index.html` — **do not open `src/`**. Score as an Awwwards jury
that hates "clean and professional" (= 7). Never inflate a score to pass; an honest `needs-human` is better than a
fake `done`. Never edit an existing `qa/scores-*.json` after `score.mjs` has read it.

**Commit after each site** (path-limited):
```
git add sites/<trade>/<dir> data/design-registry.json data/progress.json library
git commit -m "<id>: <delivered 9.1 | needs-human 8.4> (fast)" -- sites/<trade>/<dir> data/design-registry.json data/progress.json library
```
Skip paths that don't exist. Skip if `deliver.mjs` already committed. Commit messages end with your normal
co-author line if you have one. Then **immediately** run `node tools/next.mjs` again.

## 5. Hard rules that keep quality real (from CLAUDE.md — never bend)

- Facts only from `sites/<trade>/<dir>/facts.json`, always through tokens (`{{biz.name}}`, `{{biz.phone}}`, `{{biz.city}}` …).
  Never type a literal fact into `src/`. 555-01NN phones, `.example` emails, "Sample" labels (`docs/DEMO-RULES.md`).
- Media only via `[[img]]` / `[[video]]` macros from the niche manifest; no photo twice on a page; no reused hero.
- Homepage only: every link is an in-page anchor, `tel:`, `sms:`, `mailto:` or a photo credit.
- No frameworks. HTML/CSS + `kit/lib/` + `vendor/` GSAP/Lenis + your `src/app.js`. Works with JS off and reduced motion.
- No two sites share a font pair, hero layout, signature system or palette family — `check-unique` enforces it.
  With 141 sites this gets tight: when a pick collides, go back to the niche brief's direction and `METHOD.md` §2
  "ways to be different", and pick something genuinely new, not a near-copy.
- Measure, don't guess: every "fixed" is backed by a tool run.
- A site that fails after the round cap, or whose subagent-role work fails twice in a row on the same error:
  `node tools/stage.mjs <id> needs-human --why "<one line>"`, commit, move on. That is not stopping; that is the rule.

## 6. When something breaks (fix and continue, never halt)

- Tool error → read the message, fix the **input** (your src, a JSON file, a missing font). Only edit a tool if the
  tool itself is wrong; then explain in `docs/CHANGELOG.md` and run `node tools/recheck-all.mjs`.
- Playwright/render crash → retry once; check `node_modules/playwright` browsers (`npx playwright install chromium`
  if online). If render truly cannot run, mark the site `needs-human --why "render unavailable"` and continue.
- Font missing and offline → choose another font already in `assets/fonts/` that keeps uniqueness.
- Media short for a slot → use another approved item of the niche manifest; never hot-link.
- `index.lock` in git → wait 3 s (`node -e "setTimeout(()=>{},3000)"`), retry up to 5 times.
- Anything unexpected → note it in `docs/CHANGELOG.md`, make the safest documented choice, keep going.

## 7. Finish line (only when `next.mjs` prints `ALL_DONE`)

1. `node tools/status.mjs` (or `npm run status`) — confirm every site is `done` or `needs-human`.
2. `npm run library`, then `npm run showcase` — rebuild the gallery/manifest/zips and showcase.
3. Commit: `git commit -m "library: all sites final" -- library data` (add other generated folders those scripts touched,
   path-limited, never `-A`).
4. Only now write one final report: counts done / needs-human, average score, the list of needs-human sites with
   their one-line reasons, and any tool fixes logged in `docs/CHANGELOG.md`.

**Start now:** read the files in §2, then run `node tools/next.mjs` and do not stop until §7 is complete.
