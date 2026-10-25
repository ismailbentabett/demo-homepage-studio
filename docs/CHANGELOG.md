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
