---
description: Re-skin a delivered or needs-human site with a new concept (new palette, type, hero family and signature) while keeping its facts and niche, then run it through the normal pipeline.
argument-hint: "<site id> [why, e.g. \"too close to hvac-B\"]"
allowed-tools: Bash(node tools/*), Bash(node:*), Bash(git add:*), Bash(git commit:*), Bash(git status:*), Bash(ls:*), Read, Write, Edit, Glob, Grep, Task
---

1. If `tools/reskin.mjs` exists, run `node tools/reskin.mjs $ARGUMENTS` (it archives the old plan/src/qa,
   frees the old registry reservations and sets the stage back to `concept`). Otherwise do it by hand:
   `node tools/claim.mjs <id>`, move `plan/`, `src/`, `qa/` into `archive/<date>/` inside the site folder
   (copy with node, never `rm -rf`), then `node tools/stage.mjs <id> concept`.
2. Tell the designer (or concept-director in strict mode) why: the reason in `$ARGUMENTS`, plus the old
   concept's font, palette family, hero family and signature, which it must not reuse.
3. Continue exactly as `/next-site <id>` from the concept stage: design, build, critique, fix, deliver, commit.
