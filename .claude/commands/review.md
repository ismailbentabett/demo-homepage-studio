---
description: Human-facing review of one site or the whole library - scores, verdicts, weakest categories, open issues and side-by-side first screens - read-only.
argument-hint: "[site id | trade | all]"
allowed-tools: Bash(node tools/*), Bash(node:*), Bash(ls:*), Read, Glob, Grep
---

Read-only. Never edit, stage or commit.

- **A site id** (`roofer-A`): read `site.json`, every `qa/scores-*.json`, the newest `qa/critique-N.md`,
  `plan/02-concept.md` and the "Open issues" in `plan/04-blueprint.md`. Look at the 1440 and 390 first
  screens. Report: thesis, signature, score per round, the 3 weakest categories, open must/should items,
  and whether you agree with the critic (one line, with the screenshot you base it on).
- **A trade** (`roofer`): the same, short, for A, B and C, then whether the three differ enough (tone,
  type, hero family, signature) from their first screens.
- **`all`** or nothing: `node tools/score.mjs` is per site, so read `data/progress.json` and every
  `sites/*/*/site.json`: counts by stage, delivered with scores, needs-human with their `why`, and the
  10 lowest delivered scores.
Keep it under 30 lines.
