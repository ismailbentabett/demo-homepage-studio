---
description: Run a blind critique round on one built site (critic agent + score.mjs), without fixing anything.
argument-hint: "<site id, e.g. roofer-A>"
allowed-tools: Bash(node tools/*), Bash(node:*), Read, Glob, Grep, Task
---

1. Read `sites/<trade>/<dir>/site.json` for `$ARGUMENTS`. The site must have `dist/`, `qa/static.json`
   and `qa/render.json` newer than `src/`; if not, say which check is stale and stop (run the builder first).
2. N = number of `qa/scores-*.json` + 1.
3. Task `critic` with the id and round N. Give it paths only. Never show it `src/`.
4. Print score.mjs's table and verdict (`node tools/score.mjs $ARGUMENTS`), the two elevate moves and the
   must/should counts. Don't fix anything and don't change the stage beyond what score.mjs does.
