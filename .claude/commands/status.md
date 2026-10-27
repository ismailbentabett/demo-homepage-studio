---
description: One-screen status of the 90-site run - stages, who holds what, delivered/needs-human counts, average score and pace.
allowed-tools: Bash(node tools/*), Bash(node:*), Bash(ls:*), Bash(git status:*), Read, Glob, Grep
---

Read-only. Read `data/run-config.json` (mode, workers), `data/progress.json` and `sites/*/*/site.json`,
and list the live locks (`sites/*/*/.lock`, `sites/*/.setup.lock`: a lock not refreshed for 20+ minutes is stale).
`node tools/next.mjs --peek` tells what a new worker would get.

Print, in ≤ 20 lines:
- mode, workers; done / needs-human / in progress / not started (of 90);
- in progress: id, stage, round, minutes since the last stage change, stale lock yes/no;
- delivered: average and lowest weighted score; needs-human ids with their `why`;
- pace: sites delivered in the last hour and the estimated time to finish at that pace;
- `git status --short | head` if there are uncommitted site folders (a worker may have crashed before committing).
