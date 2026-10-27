You are the run lead for this workspace (demo-homepage-studio). Goal: build 54 sales-quality demo homepages (18 niches x 3 directions A/B/C), as fast as possible, each passing the bar in data/run-config.json. Work autonomously to the end. Do not ask me questions; decide and note the decision in docs/LEARNINGS.md.

READ FIRST (once, fast): CLAUDE.md, AGENTS.md, docs/METHOD.md, docs/BUILD-CONTRACT.md, docs/DEMO-RULES.md, docs/RUBRIC.md, data/run-config.json, data/niche-order.json, .claude/agents/*.md, .claude/skills/*.

ORDER (data/niche-order.json): landscaper, general, painter, handyman, electrician, plumber, flooring, concrete, mason, demolition, carpenter, cleaning, hvac, roofer, mechanic, autotuneup, pest, pool. Only these 18. Each niche already has niches/<trade>/brief.md, facts-A/B/C.json, media-queries.json; all pass `node tools/validate-niche.mjs <trade>`. Do not rewrite facts except to fix a validator error.

STEP 0 (max 15 min): check the tooling. `ls tools kit vendor .claude`. Run each tool with no args or --help. If something the pipeline needs is missing or broken (claim/lock, stage tracking, build, static check, render/screenshot check, score, status), write the smallest working version yourself in tools/ (Node ESM, no new heavy deps). There is no run-loop.ps1 / status.mjs yet; you are the loop. Make sure .env has PEXELS_API_KEY (if missing, tell me once in your final report and use the kit's labelled placeholder panels instead of photos; do not stop).

THE LOOP (you orchestrate, subagents do the work):
- Run 10 sites at once. Launch one subagent per site in a SINGLE message (parallel Agent calls), then refill as each finishes. Never let two agents touch the same site: claim with `node tools/claim.mjs` (or a .lock file in sites/<id>/) before starting.
- Per site, one subagent runs the 12 stages in order: strategy, concept, design, blueprint, media, build, static, render, critique, elevate, fix, deliver. Use the role files in .claude/agents/ (concept-director, designer, copy-chief, media-curator, builder, critic) as its instructions. The critic is a SEPARATE subagent that never reads src/, only the rendered output/screenshots, and scores with docs/RUBRIC.md.
- Media: run the photo fetch/approve for a niche once, before its 3 sites start (one subagent per niche, can run ahead of the builds).
- Fast mode: pass = weighted >= 9.0, every category >= 8.5 (photo >= 8.0). Max 2 critique rounds; after round 2 deliver if >= 8.8 with no blockers, else mark needs-review and move on. Never loop forever on one site.
- The 3 sites of a niche must look like 3 different companies (different tone lead, type lead, hero family, signature system, motion). Run `node tools/check-unique.mjs` after each niche.
- Demo rules are hard: phones (XXX) 555-01NN from facts only, emails hello@slug.example, licence SAMPLE-, all proof labelled "Sample", no banned words (same-day, emergency, guarantee, bonded, etc. per DEMO-RULES), no invented facts beyond facts-*.json. Golden Touch (reference/) is inspiration only; never copy its layout.

SPEED RULES:
- Parallel everything: 10 site agents + 1 media agent ahead. Batch tool calls. Do not re-read big docs inside every subagent; give each subagent a tight brief: its site id, the facts file, the brief.md section for its direction, the run-config bar, and the file paths to read.
- Do not wait on me. Do not polish past the bar. Do not refactor tools once they work.
- If a site fails 3 times for a tooling reason, fix the tool once, note it in docs/LEARNINGS.md, continue.

PROGRESS: keep data/status.json (site id -> stage, score, state) updated, and every 6 finished sites print one line: done/total, average score, sites needing review.

COMMITS: `git add` and commit after each finished niche ("site: <trade> A/B/C delivered, scores x/y/z"). Never git push. Never delete anything outside this workspace.

FINAL REPORT (short): sites delivered with scores, sites needing review and why, tool changes made, anything I must do (e.g. Pexels key).

Start now with STEP 0, then launch the first 10 sites (landscaper A/B/C, general A/B/C, painter A/B/C, handyman A) in one message.
