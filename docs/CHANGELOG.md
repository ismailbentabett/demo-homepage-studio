# CHANGELOG

Workspace changes that affect how sites are made. Newest first. Site deliveries are in git log
and `data/design-registry.json`, not here. Add an entry whenever a doc, agent, skill, command or
tool changes behaviour.

## 2026-10-27: 17 new niches, phone groups G7-G10

- New trades: tattoo, assembly (furniture assembly), autobody (auto body / collision and cosmetic
  restoration), tile, mural, landclearing, excavation, septic, well, farm, nursery, pinestraw,
  irrigation, junkremoval, selfstorage, consulting, cannabis. Registered in `data/demo-trades.json`
  and `data/niche-order.json` (prospect niches tattoo, assembly, autobody first, then the 12 unbuilt
  original niches, then the rest).
- `tools/lib/niche.mjs`: the 555-0100..0199 range only holds 100 NNs and 90 were taken, so the
  cross-niche check now compares the full number (area code + NN) instead of the NN alone. New groups
  G7-G10 reuse NN ranges with city pools whose area codes no earlier group uses (docs/NICHE-TEMPLATE.md).
  Every existing number was already unique, so no delivered site changes.

## 2026-10-25: workspace created

- Pipeline: 30 niches × 3 directions (A process, B proof & tools, C local story), 12 stages per
  site (docs/METHOD.md), one site per `/next-site` run.
- Docs: METHOD, BUILD-CONTRACT, DEMO-RULES, NICHE-TEMPLATE, RUBRIC (11 categories, weights sum to
  100, pass = weighted ≥ 9.5 with every category ≥ 9.0 and photo ≥ 8.5), LEARNINGS (seeded from the
  Golden Touch audit: values and traps B1–B5).
- Agents (`.claude/agents/`): concept-director, designer, copy-chief, builder, critic,
  media-curator, niche-researcher.
- Skills (`.claude/skills/`): motion-craft, type-craft, copy-craft, a11y-craft, photo-direction,
  conversion, layout-composition, signature-systems, niche-tools, logo-mark.
- Commands (`.claude/commands/`): /next-site, /next-niche, /niche-setup, /critique, /review,
  /status, /reskin.

### Path decisions
- **Design system file is `plan/03-system.md`** (METHOD and CLAUDE.md name it that; an early draft
  said `03-design.md`).
- **Media plan is written twice, identical:** `src/media.json` (METHOD stage 5; check-unique and the
  build read it) and `plan/media.json` (BUILD-CONTRACT §3 mentions it). The designer writes both in
  the same step; if they ever differ, `src/media.json` wins.
- **Copy deck is `plan/copy.md`**, a new stage-5b file written by copy-chief after the media plan
  and before the build. The builder takes every visible string from it.
- **Critic inputs** are the union of the original task list and METHOD stage 9: `qa/screens/*`,
  `dist/index.html`, `qa/static.json`, `qa/render.json`, `plan/concept.json`, `plan/02-concept.md`,
  `facts.json`, `docs/RUBRIC.md`, brief §1, sibling screenshots. Never `src/`.
- **Must / Should:** `qa/scores-N.json` carries only `mustFix`; the should list lives in
  `qa/critique-N.md`. Stage 11 fixes both.

## 2026-10-26: build.mjs credits
- `tools/build.mjs` no longer prints "Photo by unknown on Pexels" for media with no credit on file
  (the placeholder libraries). Those items are skipped; a credit line appears only with a real name.
  Reason: the critic correctly flagged the "unknown" lines as false credits on every site.

## 2026-10-26: score.mjs keeps the scored round on NEEDS_HUMAN
On NEEDS_HUMAN, score.mjs copies qa/best/ over src/ and dist/. When the scored round was not the best, that wiped the newer rebuild with no copy left (it happened to cleaning-B round 3). It now saves the scored round's src/ and dist/ to qa/last/ before restoring. Scores and verdicts are unchanged, so no recheck is needed.

## 2026-10-26: capture-screens.mjs writes the critic's full evidence
capture-screens.mjs used to take 5 jpgs and leave old pngs and an old qa/render.json in place, and the critic scored against them. It now:
- clears old shots;
- serves dist over local HTTP, because file:// blocked fonts;
- adds 1440/390 reduced-motion full pages and 1440 scroll frames at 25/50/75 %;
- writes qa/render.json with console errors and render errors.

The render errors cover sideways overflow at 390/320 and text hidden under reduced motion. check-render.mjs already treats render.json errors as blockers. Delivered sites should be re-captured before their next recheck.

## 2026-10-26: Openverse photo source when there is no Pexels key

- `tools/fetch-media.mjs`: without `PEXELS_API_KEY` (or with `--source openverse`) photos come from the
  Openverse API (no key). It keeps only CC0, public-domain and CC BY files that are landscape and at least
  1600 wide. Searches are cached in `pool/.openverse-cache.json` because of the ~200/day anonymous limit.
  Each query is retried shorter only when needed. Videos are skipped (they still need Pexels).
  Why: every niche library was 1×1 placeholder stubs that render as broken images, so Photo could never pass.
- `tools/approve-media.mjs`: the credit now carries `source` and, when present, `license` / `licenseUrl`.
- `tools/build.mjs`: the credit line names the real source ("Photo by X on Wikimedia Commons, CC BY 4.0")
  instead of always saying Pexels. Pexels credits are unchanged.

## 2026-10-26: fetch-media falls back to Wikimedia Commons
- `tools/fetch-media.mjs`: when Openverse answers 5xx or cannot be reached, the run switches to the Wikimedia Commons API (no key) for the rest of the run; `--source commons` uses it directly. Same filters (landscape, ≥1600 wide), licences CC0 / public domain / CC BY / CC BY-SA, credit keeps creator, source and licence. Commons answers are cached in `pool/.openverse-cache.json` under `commons:<query>`.

- 2026-10-26: fetch-media spaces Wikimedia downloads 2.5 s apart, backs off 20 s+ on HTTP 429, and sends a descriptive User-Agent (Commons rate-limits anonymous bulk downloads).

## 2026-10-26: check-static accepts Commons / CC credit links
- `tools/check-static.mjs`: links inside `ul.credits` (matched by prefix, since the URL scanner stops at `)` in Commons file names) may point to pexels.com, wikimedia.org, creativecommons.org, openverse.org or flickr.com (was Pexels only). Why: build.mjs now writes the real source and licence links for Openverse / Commons photos (CC BY requires them), so every site with a real photo failed `external-url`. Found on cleaning-C. Run `node tools/recheck-all.mjs`.


## 2026-10-26 — clean photo-credit names
- Wikimedia Commons creator fields can hold wiki markup, "Category:" prefixes and e-mail addresses (one cleaning credit printed a photographer's e-mail). `fetch-media.mjs` now stores a plain name, and `build.mjs` cleans the name again when it writes the credit list, so older manifests are safe too.

## 2026-10-26: reopen needs-human sites for more rounds
- New `tools/reopen.mjs <id> [--rounds N]`: takes the lock, sets `site.json.roundCap = round + N` (default 2) and moves the site from needs-human back to `fix` on its best round.
- `tools/lib/scoring.mjs` `verdictFor` now uses `site.json.roundCap` when present instead of the mode's `maxRounds`. Pass bars are unchanged; sites without `roundCap` behave exactly as before, so no recheck of delivered sites is needed.
- Why: most needs-human sites stalled on placeholder photos; once a niche gets real photos, the site needs extra rounds to be re-scored.

## 2026-10-26: capture-screens waits for lazy images
`tools/capture-screens.mjs` walked the page at 120 ms a step and shot the full page straight away, so `loading="lazy"` photos far down the page were still empty frames in `*-full.jpg` (the critic flagged them as missing photos on cleaning-B and pest-C). After the walk it now waits until every image has loaded or failed, up to 8 s. Real visitors scroll slower than that walk, so the shot now matches what they see.

## 2026-10-26: roofer-B fixture removed
roofer-B was a test fixture (11-byte stub, worker t2) force-delivered at 8.88. Its fixture files moved to sites/roofer/B/qa/fixture-old/, its design-registry entry was removed, and the site is being built for real.

## 2026-10-26: reopen.mjs accepts delivered sites
`tools/reopen.mjs` now reopens a site at stage `done` as well as `needs-human`, so delivered sites that scored under 8.8 or still use placeholder photos can get more rounds. It records `reopenedFrom` in site.json.

## 2026-10-26: scoring counts render errors
`tools/lib/scoring.mjs` `checkState` read `qa/render.json` (the capture output, which lists problems under `errors`) as if it were a check report, so horizontal overflow, page errors and text hidden under reduced motion never counted as blockers. It now counts `render.json.errors` as blockers and adds the blockers and warnings from `render-check.json` when that report is at least as new.

## 2026-10-27: check-static sample-label match ignores clock times
The sample-labels check matched a numeric fact (such as a rating of `4.8` or a count of `30`) anywhere in visible text, so opening hours like `5:30 pm` or `7 a.m.` were flagged as an unlabelled fact. The word-boundary regex now skips a match that follows a colon or is followed by `am/pm` or `:NN`. Real facts like `4.8` and `30 years` still match (tested on 9 cases). The check only got narrower, so no delivered site can start failing.

## 2026-10-27: city pool reads every group
- `tools/lib/niche.mjs` `cityPool()` only parsed table rows G1-G6, so every G7-G10 city failed validation. It now reads any `G<n>` row. The check was wrong, not the data.
