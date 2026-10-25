# The method: 12 stages for one homepage

Read this before every site. Each stage writes a file. A stage is finished only when its file exists and its
gate passes. `node tools/stage.mjs <id> <stage>` records progress in `sites/<trade>/<dir>/site.json`, so a run
that crashes can start again where it stopped.

Paths below are relative to the site folder `sites/<trade>/<dir>/` unless they start with `docs/`, `niches/`,
`tools/`, `kit/` or `data/`.

```
facts.json            copied from niches/<trade>/facts-<dir>.json by tools/claim.mjs (never edit by hand after stage 1)
plan/01-strategy.md   stage 1
plan/02-concept.md    stage 2
plan/concept.json     stage 2 (machine-readable: fonts, palette, hero family, signature, motion)
plan/03-system.md     stage 3
plan/04-blueprint.md  stage 4
plan/05-media.md      stage 5
src/media.json        stage 5
src/index.html        stage 6 (body only: the build adds the head)
src/style.css         stage 6
src/app.js            stage 6 (only this site's signature + glue; behaviour comes from kit/lib)
src/site.config.json  stage 6 (fonts, kit modules, theme color, hooks)
dist/                 tools/build.mjs output: index.html + media/ + fonts/ + vendor/ (self-contained)
qa/static.json        stage 7
qa/render.json        stage 8, with qa/screens/*.png
qa/critique-N.md      stage 9, round N
qa/scores-N.json      stage 9, round N
qa/best/              the best round so far (tools/score.mjs keeps it)
site.json             stage, round, scores history, timestamps
```

---

## Stage 1 — Strategy (`plan/01-strategy.md`)

Read `niches/<trade>/brief.md` (sections 1-5 and your direction in section 6) and `facts.json`. Write:

1. **The one job of this page.** One sentence: who lands here, what they must do (call / text / price it / book),
   and in how many seconds.
2. **The homeowner's first 5 seconds.** What they must see above the fold to stay: the trade, the town, a way to
   act, and one reason to believe. Name the exact elements.
3. **The contractor's first 5 seconds.** What makes the contractor on the sales call say "nobody in my town has
   that". Name the one thing (it becomes the signature).
4. **Objections and where each is answered.** 5-8 fears from the brief, each mapped to a section.
5. **Conversion paths.** Primary (call or form), secondary (text, tool → form hand-off), and where each appears.
   The phone is never more than one thumb-reach away on a phone.
6. **What this direction is NOT.** 3 things the sibling directions do that this one must avoid
   (read the other two directions in the brief and any sibling `plan/concept.json` that already exists).

## Stage 2 — Concept (`plan/02-concept.md`, `plan/concept.json`)

The concept is where 10s are won. Do it in this order and keep the rejected work in the file:

1. **Three alternatives, then reject them.** Write three different concepts in 3-4 lines each. Say why each is
   the obvious one (a competitor would do it, it is a template, it is the brief's seed taken literally). Reject
   all three.
2. **The thesis.** A fourth concept that came from the rejections: one sentence a designer could argue with.
   Example of the shape (never reuse it): *"The site is the job folder: every section is a sheet clipped into it,
   and scrolling turns the pages."*
3. **The signature system.** Not one effect: a system that repeats with variation through the page (e.g. sheets,
   measuring tape, weather readings, stamp marks, a dial). Describe how it appears in at least 4 sections.
4. **Type.** Display + text faces from `data/fonts-catalog.json` (or a free OFL face you fetch with
   `tools/fetch-fonts.mjs`). Explain the pair in one line. Check `data/design-registry.json`: a display face is
   used at most 3 times in the library and never twice in a niche; the pair is unique.
5. **Palette.** 4-7 colors with roles (ink, paper, accent, deep band, signal). One table: every text/background
   pair you will use with its WCAG ratio (`node tools/contrast.mjs "#hex" "#hex"`). Body text ≥ 4.5:1, large text
   ≥ 3:1, the accent on its band ≥ 4.5:1 when it carries words. Name the **palette family** (e.g. "rust + bone",
   "ink + safety yellow"); the family must be unique in the library.
6. **Hero family.** One of the 15 in §2, unique in the niche and not used more than 3 times in the library.
7. **Motion score.** One intro moment (≤ 1.2 s, skippable, never blocks reading), 1-2 scroll stories, the two
   entrance patterns (§5), the hover language, and what happens with reduced motion. Write each as a sentence a
   builder can implement.
8. **Tools.** The 2-3 niche tools from the brief this site uses + the ZIP checker + the multi-step quote form.
   For each: inputs, output, and how it hands off to the form (prefill).
9. **Voice.** 3 sentences in the site's voice, and 5 words it will never use.

`plan/concept.json` (read by `check-unique` and the registry):

```json
{
  "id": "roofer-A",
  "thesis": "…",
  "signature": { "name": "job-folder sheets", "summary": "…", "sections": ["hero", "process", "proof", "contact"] },
  "fonts": { "display": "Fraunces", "text": "Inter Tight", "accent": "JetBrains Mono" },
  "palette": { "family": "rust + bone", "ink": "#1d1a17", "paper": "#f3ede3", "accent": "#b4471f", "deep": "#2a211b", "signal": "#e8b04a" },
  "tone": "light-led",
  "heroFamily": 6,
  "layoutMoves": ["sheet stack", "margin notes", "ruled grid"],
  "motion": { "intro": "…", "stories": ["…"], "hover": "…" },
  "tools": ["storm-check", "roof-age-quiz", "zip", "quote-form"]
}
```

**Gate:** `node tools/check-unique.mjs <id> --concept` is clean.

## Stage 3 — Design system (`plan/03-system.md`)

Write the tokens before any section. Start from these (they are the Golden Touch base; change the values, keep
the structure):

- **Type scale:** fluid `--fs--1` … `--fs-4` with `clamp()`, plus `--fs-h1`. The h1 must fit 1440×900 *and*
  320 wide: start from `clamp(2.6rem, min(9vw, 9.5svh) + .1rem, 5.25rem)` and tune per face.
  Headings `text-wrap: balance`, body `text-wrap: pretty`, measure 60-72ch, lead paragraph larger with
  variable axes where the face has them (`"opsz" 24`, weight 450).
- **Space:** `--s-1` … `--s-9` (4 → 160px), section padding `--sec-y` / `--sec-x`.
- **Tone classes:** at least `t-light`, `t-paper`, `t-mid`, `t-deep` and one color band (e.g. `t-accent`). Each sets
  background, ink, muted ink, rule color and accent for the section, so components never pick colors themselves.
- **Motion tokens:** easing `--ease-out: cubic-bezier(.23,1,.32,1)`, `--ease-io: cubic-bezier(.77,0,.175,1)`;
  durations press 120ms, ui 200ms, page 520ms, story 900ms, stagger 60ms. No bounce, no elastic.
- **Gating:** the build adds `sw-js` and `sw-motion` classes to `<html>` before first paint. Every hidden-before-reveal
  style lives under `.sw-motion` so the page reads fully with JS off and with reduced motion.
- **Focus:** `:focus-visible { outline: 3px solid <accent>; outline-offset: 3px }` with a color that passes 3:1 on
  every tone. `forced-colors: active` keeps button borders.
- **Components:** buttons (primary/secondary/text, ≥ 48px tall), inputs, cards, tags (for "Sample"), rules,
  frames (photo containers with ratio + grade), the sticky mobile bar, the header.
- **Photo grade:** one shared filter for every photo so 20 stock photographers look like one shoot
  (start: `saturate(.85) contrast(1.05) sepia(.08)`; tune to the palette), and per-photo `object-position`.

## Stage 4 — Blueprint (`plan/04-blueprint.md`)

A section list, top to bottom. For each section: id, tone class, purpose (which objection or path), layout family,
content (from facts, by token name), media slots, hooks (`data-hook` names from the kit), and its entrance pattern.

**Rhythm rules (the gate):**

- 8-12 sections. The first screen is the hero; the next band must peek in (hero height = `100svh` minus the header).
- Never 3 sections of the same tone in a row. **Never two dark sections touching** (they read as one block).
- At least one dark band (`t-deep`) and one color band.
- At least one full-bleed photo or video break (`class="break"`).
- At least 3 interactive hooks (`data-hook`), one of them the signature (`data-sw-signature`).
- At least 3 different layout families (split, grid, list, stack, statement, mosaic, rail…). No two neighbouring
  sections share a layout family.
- The quote form appears once (`#contact`); every CTA above it points to it or to `tel:`.
- Required content somewhere: services (all from facts), service area + ZIP checker, hours / open-now, sample
  reviews with the Sample label, sample prices only through the estimator or a price block labelled sample,
  the footer with `{{demo.disclaimer}}` and `[[credits]]`.

## Stage 5 — Media plan (`src/media.json`, `plan/05-media.md`)

Open `niches/<trade>/media/manifest.json` and the contact sheets in `niches/<trade>/media/`. Pick photos by slot:

```json
{
  "hero": "roof-steep-01",
  "heroVideo": "v-shingles-02",
  "slots": { "process-1": "nail-line-03", "break": "ridge-dusk-01", "gallery": ["…", "…"] }
}
```

Rules: every key exists in the manifest; no photo twice on the page; the hero photo and hero video are not used as
heroes by a sibling (`check-unique` reads every `src/media.json`); captions say what the frame shows
(`docs/DEMO-RULES.md` §5). `plan/05-media.md` says for each photo its crop (`object-position`) and why it is there.

## Stage 6 — Build

The `builder` subagent writes `src/index.html`, `src/style.css`, `src/app.js` and `src/site.config.json` following
`docs/BUILD-CONTRACT.md` and the blueprint. Then:

```
node tools/build.mjs <id>
```

The build resolves tokens and macros, inlines the CSS and JS, copies media/fonts/vendor into `dist/`, and refuses
unknown tokens, unknown media keys and missing kit modules.

Build notes that save rounds (details in `docs/LEARNINGS.md`):
- Write CSS with the Write tool, never through a shell heredoc. Use a literal `·`, never `\00B7`.
- Mobile first: design 375 and 320 while you design 1440, not after.
- Every tool (estimator, ZIP, quiz) works without JS as a plain explanation + the call button.
- The estimator never prints `$`. Ranges come from `{{proof.prices.*}}` tokens rendered by the build and carry a Sample tag.

## Stage 7 — Static check (`qa/static.json`)

```
node tools/check-static.mjs <id>
```

Fix every blocker **and** every warning. Typical: banned phrase, literal fact, `$` in visible text, photo used
twice, missing Sample label, dead anchor, missing alt, heading order, more than one h1, title/description length.

## Stage 8 — Render check (`qa/render.json`, `qa/screens/`)

```
node tools/check-render.mjs <id>
```

Playwright opens `dist/index.html` at 1440×900, 1024×768, 390×844, 375×812 and 320×640, with motion on, reduced
motion and JS off. It checks: no horizontal scroll, nothing still hidden after scrolling to the end, tap targets
≥ 48px (44px inside sentences), no console errors, no failed requests, no request leaving the page, h1 fits the
first screen, contrast of real rendered text (axe), form steps work, popups never on load, LCP/CLS budget.
It saves full-page and first-screen screenshots plus frames at 0/25/50/75/100% scroll for the critic.

Fix everything. Re-run until clean. Look at the screenshots yourself only to confirm a fix.

## Stage 9 — Critique (`qa/critique-N.md`, `qa/scores-N.json`)

Run `/critique <id>`. The `critic` subagent gets only: `qa/screens/`, `qa/render.json`, `plan/02-concept.md`,
`docs/RUBRIC.md`, the niche brief section 1 and the sibling screenshots. It never reads `src/`. It scores the 11
categories, lists every problem as `must` / `should` with a location and a concrete fix, and names the weakest
two categories. Then:

```
node tools/score.mjs <id>
```

computes the weighted score, applies the floors, updates `site.json`, keeps the best round in `qa/best/`, and
prints `PASS`, `ELEVATE`, `FIX` or `NEEDS_HUMAN`.

## Stage 10 — Elevate (only when 8.5 ≤ weighted < 9.5)

The builder rewrites the **two weakest categories** as a design move, not a patch. A 7 in Distinctiveness is not
fixed by changing a color; it is fixed by pushing the signature system into two more sections. Then stage 7.

## Stage 11 — Fix

Every `must` item and every `should` item from the critique, plus anything the checks found. Then stage 7.
A round = 7 → 8 → 9. Round limit 4. After round 4 fails: `node tools/stage.mjs <id> needs-human`.

## Stage 12 — Deliver

```
node tools/deliver.mjs <id>
```

Refuses unless: the pass rule (CLAUDE.md) holds, the latest check runs are newer than the latest `src/` change,
`check-unique` is clean. It writes `site.json.stage = "done"`, adds the site to `data/design-registry.json`, builds
the library card (`library/cards/<id>.jpg`), and prints the commit message. Commit, then stop.

---

## §2 The 15 hero families

Each site picks one. Unique within a niche, at most 3 times in the library. "Full-bleed video with a left scrim"
is the easy default: use it at most twice in the whole library.

| # | Family | What it is | Watch out |
|---|---|---|---|
| 1 | Full-bleed video + scrim | Muted loop behind a left-aligned headline. | The default everyone uses. Needs a strong idea on top. |
| 2 | 50/50 split | Type on one half, photo/video on the other, with an object crossing the seam. | Must not look like a SaaS template: break the seam. |
| 3 | Type mask | Giant headline whose letters reveal the photo or video. | The h1 still has to read; keep a plain sr-only copy. |
| 4 | Stacked headline over a cinematic strip | Big type on paper, then a wide 21:9 strip of photo. | The strip must be in the first screen at 1440×900. |
| 5 | Offset framed photo | A framed photo off-axis with type overlapping the frame. | Overlap must stay readable at 320. |
| 6 | Editorial cover | A magazine cover: masthead, issue line, cover lines that are real anchors. | Cover lines are links, ≥ 48px tall. |
| 7 | Tool-first | The niche tool IS the hero (estimator, storm check, quiz), with the promise beside it. | Must work with JS off as text + call. |
| 8 | Photo mosaic | 3-5 photos in a tight grid, one huge, type on paper. | Use one grade; never repeat a photo below. |
| 9 | Horizontal filmstrip | A slow side-scrolling strip of frames under the headline. | Pauses on hover/focus; stops with reduced motion. |
| 10 | Centered statement + photo marquee | A short centered statement, photos sliding beneath. | Statement ≤ 8 words. |
| 11 | Diagonal split | An angled seam between type and photo. | The angle must mean something (a roof pitch, a ramp). |
| 12 | Sticky photo, scrolling text | The photo stays while 3 short statements scroll past. | First statement visible without scrolling. |
| 13 | Shape-masked photo | Arch, circle, house, drop, gear: a shape from the trade. | One shape, used again later as the signature. |
| 14 | Document object | A quote sheet, work order, invoice, tag, ticket as the hero. | Must read as a page, not a gimmick. |
| 15 | Map / area-led | The service area as an illustrated map with the promise. | No real street map tiles: draw it (SVG). |

### Ways to be different (when the siblings are too close)

Change the **grid** (columns, gutters, a margin column for notes), the **frame** (borders, tape, clips, rounded vs
square, shape masks), the **reading direction** (horizontal rail, sticky column, ledger rows), the **material**
(paper, metal, chalk, blueprint, receipt), the **type role** (mono numbers, condensed labels, a serif voice), the
**color temperature** (warm paper vs cool steel vs night), the **density** (airy editorial vs dense ledger), the
**proof format** (stamps, receipts, readings, tickets), the **motion verb** (wipe, stack, draw, slide, dial,
count), and the **tool** (each site's hero tool is different).

## §4 Rhythm rules (repeated here because they are the gate)

See stage 4. `tools/check-static.mjs` reads the tone classes from the built page and fails on: 3 same tones in a
row, two dark sections touching, no dark band, no color band, no `.break`, fewer than 3 `data-hook`, no
`data-sw-signature`, more than one `#contact` form.

## §5 Motion rules

- **Two entrance patterns, used everywhere:** text rises (opacity 0→1, translateY 24px→0, 500ms, starts at 85% of the
  viewport); images unclip (`clip-path: inset(0 0 100% 0)` → `inset(0)`). Do not invent a third; vary timing.
- **Budget:** 1 intro, 1-2 scroll stories, micro-interactions free, at most 1 popup per visit (never on load:
  exit intent on desktop or 60% scroll on phones, once per visit), no scroll-jacking, no autoplay carousels, no bounce.
- **Scroll stories:** pinned only from 640px up; below that, stacked cards with a clip reveal. Story height
  `calc(var(--n) * 55svh + 100svh)`. They reverse on scroll-up.
- **Reduced motion:** every story becomes a static, complete layout. Nothing waits for an animation to be readable.
- **Hover:** one hover language per site (e.g. a hairline that grows from the left via `scaleX`), consistent.
