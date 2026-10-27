---
description: Find the next niche that isn't set up yet (per data/niche-order.json) and run /niche-setup on it.
allowed-tools: Bash(node tools/*), Bash(node:*), Bash(git add:*), Bash(git commit:*), Bash(git status:*), Bash(ls:*), Read, Write, Edit, Glob, Grep, Task
---

1. Run `node tools/next.mjs --peek`. If line 1 is `NICHE_SETUP <trade> <why>`, that is the niche.
   Otherwise read `data/niche-order.json` and take the first trade where
   `node tools/validate-niche.mjs <trade>` fails or `niches/<trade>/media/manifest.json` has no approved item.
   None → print `ALL_NICHES_READY` and stop.
2. Follow `.claude/commands/niche-setup.md` for that trade exactly (lock, research, media, curate, commit).
3. Report in ≤ 4 lines. One niche per run.
