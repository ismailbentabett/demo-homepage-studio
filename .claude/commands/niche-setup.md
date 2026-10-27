---
description: Set up one niche - research pack (brief, facts A/B/C, media queries) if invalid, then fetch, draft-approve and curate its photo library.
argument-hint: "<trade, e.g. roofer>"
allowed-tools: Bash(node tools/*), Bash(node:*), Bash(git add:*), Bash(git commit:*), Bash(git status:*), Bash(ls:*), Read, Write, Edit, Glob, Grep, Task
---

Set up the niche `$ARGUMENTS` so `/next-site` can build its three sites. Headless: never ask a question.

1. Take the niche's setup lock: `node tools/next.mjs --peek` shows whether another worker is setting it up.
   If another live worker holds `sites/$ARGUMENTS/.setup.lock`, print `BUSY` and stop.
2. `node tools/validate-niche.mjs $ARGUMENTS`. If it fails: Task `niche-researcher` with the trade, then
   validate again (it must be clean).
3. Media: if there's no `niches/$ARGUMENTS/media/pool/`, run `node tools/fetch-media.mjs $ARGUMENTS`
   (needs `PEXELS_API_KEY` in `.env`; on a network error stop and say so). Then
   `node tools/approve-media.mjs $ARGUMENTS --auto` (drafts for every slot), then Task `media-curator`
   with the trade (it approves under the same keys and never replaces a key a site already uses).
4. `node tools/approve-media.mjs $ARGUMENTS --list`: at least the 9 hero slots and 15 shared slots approved.
   If fewer, Task `media-curator` once more naming the empty slots.
5. Commit: `git add niches/$ARGUMENTS` then `git commit -m "$ARGUMENTS: niche setup" -- niches/$ARGUMENTS`
   (retry on `index.lock` as in /next-site; the photo files are gitignored if the repo says so).

Report in ≤ 4 lines: validate result, approved photo/video counts, weak slots.
