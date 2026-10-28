# windowdoor-B — Concept

## 1. Three obvious concepts, rejected
- **Hurricane-ready fortress.** Dark storm sky, "Protect your family", a 2x4 smashing glass in slow motion. Rejected: every
  Florida competitor does fear (brief §4.5), and it makes the buyer anxious instead of informed.
- **Sticky lanai photo + 3 scrolling spec lines** (the brief seed, family 12). Rejected: seed taken literally, family 12 is
  full in the library (6), and a pinned half-photo is a template move on this one weak B&W photo.
- **Riveted spec plates everywhere.** Bordered mono boxes with corner rivets. Rejected: garagedoor-B already ships "Riveted
  Data Plate"; it would read as a reskin. A plate is industrial; a window label is a *sticker you peel off the glass*.

## 2. Thesis
The page is the sticker on the glass, peeled back: every number on an impact window's label lifts at the corner to show what
it means for your Naples house, and nothing is sold until it has been read.

## 3. Signature system: Peel-Back Label (`data-sw-signature="peel"`)
Primitive: off-white sticker (#F1EDE3), 2px radius, 4px label-yellow top rule, mono rows with hairline separators. Top-right
corner is a dog-ear: a triangle whose underside is yellow (#F2C230) with a soft curl shadow. `--peel` (0→1) sets the curl size
(16px flat → 72px peeled). Under the lifted corner/row: the plain-English meaning, in Rethink Sans on yellow or on night.
- **Hero (cover):** the masthead is a label ("SHUTTERLESS · PRODUCT LABEL · SAMPLE"); the lanai photo sits under a large
  sticker whose corner curls 14% on load. Cover lines = label rows (DP / MISSILE / U-FACTOR / SHGC / ORDER-BY) as anchors.
- **#label (story + tool):** one big sticker, 5 rows. Scroll peels each row's corner as it crosses 50% viewport (--sw-p per row);
  tap/click = toggle (kit `hotspots`). Underneath: DP +50/-50 = pressure in/out; large missile = 9-lb 2x4 at 50 ft/s then 9,000
  pressure cycles; U-factor lower = holds cool; SHGC lower = blocks more sun heat; VT = daylight through.
- **#prices:** each sample price is a small price-tag sticker, the corner already peeled to show the "note" (what changes it).
- **#proof:** reviews printed on stickers stuck slightly askew (±1.2deg), service name as the label row, "SAMPLE" in the rule.
- **#orderby:** an "ORDER BY" sticker slapped on the calendar bar at the computed date; peels to show the hedge text.
- **Footer:** the hero sticker reappears fully peeled off, stuck crooked on the footer edge: "Label read. {{biz.phone}}".
Wow moment: the explainer rows peeling in sequence as you read — the whole label translates itself.

## 4. Type
Display **Red Hat Display** 800/600 (geometric-humanist, confident, reads like product packaging, never used in the registry);
text **Rethink Sans** 400/600 (clean product grotesk, 1 use as text, unique pair); accent **Martian Mono** wdth 87.5, 500
(label values, dates, prices — it is literally the type on an NFRC sticker). Inter/Roboto nowhere.

## 5. Palette — "Lanai Night + Sticker White + Label Yellow + Gulf Blue" (dark-led)
| Role | Hex | On | Ratio | Use |
|---|---|---|---|---|
| ink-on-night (warm white) | #F3EEE4 | deep #121519 | 15.83 | body/headings on deep |
| same | #F3EEE4 | mid #20252B | 13.34 | body on mid band |
| label yellow | #F2C230 | deep #121519 | 10.92 | accent words, focus ring on dark, primary button bg |
| label yellow | #F2C230 | mid #20252B | 9.21 | accent words on mid |
| deep text on yellow (button/t-accent) | #121519 | #F2C230 | 10.92 | primary button label, t-accent band body |
| gulf blue (data) | #6FB3D9 | deep #121519 | 7.95 | mono data values on deep |
| gulf blue | #6FB3D9 | mid #20252B | 6.70 | data on mid |
| muted on deep | #A7ABA6 | #121519 | 7.86 | captions, proof line |
| muted on mid | #A7ABA6 | #20252B | 6.62 | captions |
| ink-on-paper | #15181C | paper #F1EDE3 | 15.23 | body on paper / stickers |
| muted on paper | #5A5E60 | #F1EDE3 | 5.60 | captions on paper |
| yellow-ink | #7A5A00 | #F1EDE3 | 5.45 | accent words on paper |
| blue-ink | #1D5F86 | #F1EDE3 | 5.92 | links, data, focus ring on paper |
| white on blue-ink | #FFFFFF | #1D5F86 | 6.92 | secondary filled button on paper |
| **label yellow on paper** | #F2C230 | #F1EDE3 | **1.43** | **NEVER words.** Top rule + dog-ear underside only |
No white-on-yellow anywhere: the primary button is yellow with #121519 text (10.92).

## 6. Hero family 6 — editorial cover (library 5→6 with this, niche-unique)
Cliché broken: it is not a magazine. The "masthead" is the product label; issue line = "{{biz.city}} · impact openings ·
season starts June 1"; the cover lines are label rows that are real ≥48px anchors to the sections that explain them. Photo is
under a peelable sticker, so the cover itself demonstrates the idea in 1 s.

## 7. Motion score
- Intro (≤ 1.1 s, `.sw-motion` only): hero sticker corner curls 0→.14 (900ms ease-out) while row 1 value types in (Martian Mono,
  40ms/char); h1 line mask 700ms. Any scroll/key ends it. Text is in the DOM from frame 0.
- Story 1 — **peel**: #label rows: per-row `--sw-p` 0→1 as the row crosses 65%→40% viewport; corner curls and meaning unclips
  (`clip-path: inset(0 0 calc((1 - var(--sw-p))*100%) 0)`). No pin; ≥640 the sticker is `position:sticky` inside a 2-col grid.
- Story 2 — **fill**: #orderby: month cells fill left→right with ScrollTrigger scrub up to the selected sign month + lead time; the
  ORDER BY sticker drops (translateY -12px→0, 520ms) when the fill reaches it.
- Hover (one language): on label-styled elements (cards, buttons, cover lines) the dog-ear grows 16→28px, 200ms ease-out,
  `@media (hover:hover)`. Press scale .97.
- Reduced motion: every corner shown at the peeled state, all meanings visible, month fill complete, no typing.

## 8. Tools
1. **Label explainer** (`hotspots`): input tap a row (DP, missile, U, SHGC, VT); output the plain meaning + "what to ask for on a
   west wall in Naples" line. CTA "Have us read your quote" → #contact prefill `service=Label and quote review`.
2. **Shutters vs impact glass** (`compare` + `estimator`): inputs openings count (1-30), who hangs shutters (me / hired / nobody),
   weeks away in season. Output side-by-side: storm-day work (openings × panels), the look, sample range from
   `{{proof.prices}}` impact window ×openings (Sample tag); no insurance claims. → prefill `service=Shutter to impact glass`, `openings=n`.
3. **Order-by timeline** (`tabs` for month picker, 12 buttons): input sign month; output hedged steps measure (wk 1) → permit (1-3 wk)
   → manufacture 6-14 wk → install → inspection, drawn on the Jan-Dec bar against June 1-Nov 30. "Manufacturers and permits
   vary; we confirm your dates in writing." → prefill note `Planning to sign in <month>`.
4. **ZIP checker** (`zip`) against `{{biz.zips}}`. 5. **Quote form** (`form`, 3 steps: service → openings/photo note → contact).

## 9. Voice
- "DP 50 is the pressure the window held in the test, pushing in and pulling out. Your wall needs a number; we show you which."
- "Sign in March, and most homes are installed before June. Sign in July, and you plan around the season."
- "If a number on the label changes, so does your price. That's in writing."
Never: "fortress", "protect your family", "state-of-the-art", "unbeatable", "act now".
