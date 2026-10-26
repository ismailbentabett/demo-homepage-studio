# CHANGELOG

Workspace changes that affect how sites are made. Newest first. Site deliveries are in git log
and `data/design-registry.json`, not here. Add an entry whenever a doc, agent, skill, command or
tool changes behaviour.

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
