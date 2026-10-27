# Demo Homepage Studio

You build **sales demo homepages for local home-service businesses**: 30 niches × 3 homepages = 90 sites.
Each one must score **10/10 on sight** with two audiences:

1. **The contractor we are selling to** opens it on a sales call and thinks "I want that, nobody in my town has that".
2. **The homeowner** it pretends to serve would trust it and call within 10 seconds.

The bar is an award jury (Awwwards / CSS Design Awards "Site of the Day") that also runs Lighthouse and axe.
"Clean and professional" is a 7. We ship 9.5+.

Everything you need is in this folder. Read this file fully, then follow the procedure. Never skip a stage.

---

## The 10 rules that never bend

1. **One site per run, one niche at a time.** Finish all 3 homepages of a niche (A, B, C) before starting the next niche. `node tools/next.mjs` decides what is next; obey it.
2. **Never clone.** `reference/golden-touch/` shows *how* a 10 was reached (method, exact CSS values, traps). It is not a look to copy. No two sites in the library may share a font pair, hero layout, signature system or palette family (`data/design-registry.json`, checked by `tools/check-unique.mjs`).
3. **Fictional business, real city.** Facts come only from `sites/<trade>/<dir>/facts.json`. Never invent a fact that is not in it. Demo safety rules: `docs/DEMO-RULES.md` (555-01NN phones, `.example` emails, everything "Sample"-labelled).
4. **Facts go through tokens.** Never type the business name, phone, email, owner, city, areas or ZIPs into `src/`. Use `{{biz.name}}`, `{{biz.phone}}`, `{{biz.city}}`... so the site can be reskinned for a real prospect (`tools/reskin.mjs`). The static check fails on literal facts.
5. **Media comes only from the niche's approved library** (`niches/<trade>/media/manifest.json`), placed with the `[[img]]` / `[[video]]` macros. Never hot-link an image, font or script. Never put the same photo twice on one page. Never reuse another site's hero photo.
6. **Homepage only.** Every link is an in-page anchor, `tel:`, `sms:`, `mailto:` or a photo credit. A link to a page that does not exist is a blocker.
7. **No JavaScript frameworks.** Hand-written HTML/CSS + the behaviour kit (`kit/lib/`) + GSAP/Lenis from `vendor/` + your own `src/app.js` for the signature moment. Everything works with JS off and with reduced motion (content visible, nothing hidden).
8. **Measure, don't guess.** Every claim of "fixed" is backed by a tool run or a screenshot you looked at. Screenshots can lag one step: verify state with the render report, not your memory.
9. **The critic is not you.** Scores come only from the `critic` subagent (fresh eyes, screenshots + rubric + concept only). You never edit `qa/scores-*.json` by hand.
10. **Done means `site.json.stage = "done"`**, set only by `node tools/deliver.mjs`, which refuses unless the pass rule holds.

**Pass rule:** weighted score ≥ **9.5**, every category ≥ **9.0** (Photo ≥ **8.5**, it is stock), `check-static` and `check-render` both with **zero blockers and zero warnings**, `check-unique` clean.
**Round limit:** 4 critique rounds. If round 4 still fails, `node tools/stage.mjs <id> needs-human` keeps the best round (`qa/best/`) and you move on.

---

## Folder map

| Path | What it is |
|---|---|
| `docs/METHOD.md` | The 12 stages for one homepage, with what each stage must write. **Read before every site.** |
| `docs/RUBRIC.md` | 11 categories, weights, floors, and what a 6 / 8 / 10 looks like in each. |
| `docs/LEARNINGS.md` | Exact values and traps learned getting Golden Touch to 10 (scrims, h1 clamps, tap targets, story heights...). |
| `docs/DEMO-RULES.md` | Fictional-business safety rules. |
| `docs/BUILD-CONTRACT.md` | Tokens, macros, `site.config.json`, kit modules, what the build injects. |
| `docs/NICHE-TEMPLATE.md` | Shape of `niches/<trade>/brief.md` and `facts-*.json`. |
| `.claude/agents/` | `concept-director`, `builder`, `critic`, `media-curator`, `copy-chief`. |
| `.claude/skills/` | Craft skills loaded on demand (motion, type, copy, a11y, photo, conversion, logo, tools). |
| `.claude/commands/` | `/next-site`, `/next-niche`, `/critique`, `/review`, `/status`, `/reskin`. |
| `niches/<trade>/` | `brief.md` (the niche research + 3 directions), `facts-A/B/C.json`, `media-queries.json`, `media/` (pool + approved library). |
| `sites/<trade>/<A|B|C>/` | One homepage: `facts.json`, `plan/`, `src/`, `dist/`, `qa/`, `site.json`. |
| `kit/lib/*.js` | Behaviour-only modules (form, ZIP check, open-now, compare, reveal...). No styling. |
| `vendor/` | GSAP 3.13 (+ ScrollTrigger, SplitText, Flip, DrawSVG...), Lenis. Self-hosted. |
| `assets/fonts/` | Self-hosted Latin-subset woff2 (`node tools/fetch-fonts.mjs "Family"`). |
| `data/` | `demo-trades.json`, `niche-order.json`, `fonts-catalog.json`, `design-registry.json`, `progress.json`. |
| `reference/` | Golden Touch package (read-only inspiration) and the Sitewright prompt rules. |
| `library/` | Output of `tools/build-library.mjs`: gallery, manifest, one zip per site. |
| `out/prospects/` | Reskinned copies for real prospects. |

---

## Procedure for one run (`/next-site`)

```
node tools/next.mjs            # prints the next site id (e.g. roofer-A), its stage and round, or "NICHE_SETUP roofer"
```

- **`NICHE_SETUP <trade>`**: the niche media library is not approved yet. Run `/next-niche` (media curation) first, then `/next-site` again.
- **`<id> <stage> <round>`**: claim it (`node tools/claim.mjs <id>`), then resume at that stage. Never restart a stage that has its output file written and valid.

Stage order (details and outputs in `docs/METHOD.md`):

| # | Stage | Who | Output | Gate |
|---|---|---|---|---|
| 1-2 | Strategy + Concept | `concept-director` | `plan/01-strategy.md`, `plan/02-concept.md`, `plan/concept.json` | `node tools/check-unique.mjs <id> --concept` clean |
| 3-4 | Design system + Blueprint | `concept-director` | `plan/03-system.md`, `plan/04-blueprint.md` | blueprint passes rhythm rules (METHOD §4) |
| 5 | Media plan | `concept-director` | `src/media.json`, `plan/05-media.md` | every slot exists in the niche manifest, no hero reuse |
| 6 | Build | `builder` | `src/index.html`, `src/style.css`, `src/app.js`, `src/site.config.json` | `node tools/build.mjs <id>` succeeds |
| 7 | Static check | you | `qa/static.json` | zero blockers, zero warnings |
| 8 | Render check | you | `qa/render.json`, `qa/screens/` | zero blockers, zero warnings |
| 9 | Critique | `critic` | `qa/critique-N.md`, `qa/scores-N.json` | `node tools/score.mjs <id>` |
| 10 | Elevate | `builder` | rewrite of the 2 weakest categories | only when 8.5 ≤ weighted < 9.5 |
| 11 | Fix | `builder` | every critique item + every check item | back to 7 |
| 12 | Deliver | you | `node tools/deliver.mjs <id>` | pass rule; commits |

Between stages: `node tools/stage.mjs <id> <stage>` (keeps `site.json` honest so a crash resumes in the right place).
After stage 12: `git add -A && git commit -m "<id>: delivered <score>"`. Then stop: one site per run.

**Context discipline:** you orchestrate. Give each subagent the file paths it needs, not file contents. Keep the
critic blind to the source code. Read screenshots yourself only to confirm a specific fix.

---

## When something is wrong

- A tool crashes: read its error, fix the input (never edit the tool to make a check pass, unless the check is wrong; then fix the tool, explain it in `docs/CHANGELOG.md`, and re-run every delivered site's checks with `node tools/recheck-all.mjs`).
- Network is down for Pexels/fonts: work only with what is already downloaded; never hot-link as a stopgap.
- Out of ideas that differ from siblings: re-read the niche brief's direction, then `docs/METHOD.md` §2 "ways to be different".
- Unsure whether a sentence is a fact: if it is not in `facts.json`, it is not a fact. Cut it or make it a process statement.
