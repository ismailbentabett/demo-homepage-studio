COPY: needs copy-chief

# siding-B · critique round 1 (fast mode; mode does not change scoring)

## Five-second test
1440-first.jpg: "Fieldtest Siding Co. in Hartford compares four sidings (vinyl, fiber cement, cedar, engineered wood) on five tests, with sample prices per sq ft. I can measure my house or call (860) 555-0129. Why them: they show me the readings and prices before the pitch." Passes. 390-first.jpg: same answer, h1 two lines, both CTAs above the fold, sticky Call / Text / Measure visit bar. The cover strip is cut off by the sticky bar at the fold (Vinyl row half-hidden).

## firstScreen: 8.5
Earned: h1 "Four sidings, five tests." is short, specific and owns the concept; the lede names the materials and the action; trust line labelled (SAMPLE RATING); cover strip of four five-cell readings peeks in at 1440 (1440-first.jpg). The REVEAL ≈ 4 IN. ruler on the photo is a nice touch.
Deductions: -0.5: the stack above the h1 is P. 01 + REPORT NO. 01 mono rule + grey question sub-head, so three labels before the headline (1440-first.jpg). -0.5: the hero photo is a plain sunny white colonial in a framed box, the exact stock image the niche brief calls a cliché; the page's identity is carried only by type (1440-first.jpg). -0.5: on 390 the sticky bar sits over the first cover row, so the five-cell reading the page is built on gets clipped (390-first.jpg).

## distinctiveness: 8.5
Earned: the Five-Cell Reading is really threaded: cover strip, compare table, squares calculator (21.9 sq as cells), method stack (4/4), services scope bars, price-sheet range bars (1440-full.jpg, 1440-scroll-25.jpg, 1440-scroll-75.jpg). Siblings differ clearly: A is dark navy/orange layered-wall cutaway, C is green with a photo-filled serif masthead; B is light paper + ultramarine report.
Deductions: -1.0: the "lab report" look is built from the generic tells: mono tracked-caps micro-labels on every band (P. 0N, TEST 0N · … · …, RESULT 0N · …), middle-dot meta strings, hairlines everywhere, 01-05 numbering. At 1440-first.jpg I count five tiny caps labels in one view. It reads as "spec-sheet template" more than "Fieldtest's own report". -0.5: ultramarine-on-paper with yellow highlight is a familiar data-viz palette.

## type: 8.5
Earned: tight heavy grotesk display (h1, "Measure your house in squares.", "The price sheet.") has good scale and tracking; the mono for readings ("1,992 sq ft", "21.9 sq", "$450–$2,000") gives numbers a voice (1440-scroll-25.jpg, 1440-scroll-75.jpg).
Deductions: -1.0: three type registers fight in nearly every view (display grotesk, body grotesk, tracked mono caps at 2-3 sizes); the mono is overused for labels where it adds no reading (1440-first.jpg, 1440-scroll-75.jpg "P. 08 / FIELD NOTES · 4.9 FROM 88 REVIEWS / SAMPLE RATING"). -0.5: services card titles and body are small and grey against the display size, the hierarchy jump is too big (390-full.jpg services crop).

## layout: 8.0
Earned: strong left rail with page numbers, consistent 12-col report grid, the price sheet with shared scale is excellent (1440-scroll-75.jpg). Band rhythm alternates paper / stone / navy / ultramarine (1440-full.jpg).
Deductions: -0.5: method stack: the front card is 440 px tall with the copy in the top third and an empty white lower half; P. 04 rail label floats mid-section, detached from its header (1440-scroll-50.jpg). -0.5: on 390 a ~380 px empty paper gap sits between the method section and P. 05 services (390-full.jpg, ~y 6000-6380). -0.5: services is 8 identical boxed cards (2×4 at 1440, 8 stacked at 390, ~2400 px of phone scroll) with the same five-cell bar and "Price it →" in each (1440-full.jpg, 390-full.jpg). -0.5: compare table cells at 1440 are dense small text in a 4×5 grid with a narrow label column; the "results" read as a spreadsheet, not as a verdict (1440-full.jpg).

## photo: 7.5 (capped by mustFix)
Earned: two photos only, both honest residential siding, captioned as plates with place (1440-first.jpg, 1440-rm-full.jpg PLATE 02).
Deductions: -1.0 / mustFix: in 1440-full.jpg the PLATE 02 band is an empty navy block (≈620 px) with only the caption visible; the photo never painted in the motion full-page capture. In 1440-rm-full.jpg the hero plate is an empty stone rectangle with only the ruler. Either a lazy/reveal init state or a load race; both mean a user can see an empty frame. -0.5: the hero is the most generic colonial in the library; nothing in the photo is "tested". -0.5: no photo carries the signature (no reading laid on a material close-up), so photography and system never meet.

## copy: 8.5
Earned: concrete and plain: "One square is 100 sq ft of wall… We add 10% for waste, the way we order it.", "Nothing new goes on until the wall behind it has been checked.", "A drawing is not a tape measure." (1440-scroll-25.jpg, 1440-scroll-50.jpg). All prices/rating labelled sample. FAQ questions are real owner questions (390-full.jpg).
Deductions: -0.5: "Price it →" repeated on all 8 service cards, arrow on every link (390-full.jpg services). -0.5: "Every job we take, from one course to the whole house." is a slogan h2; the services intro does not say anything the cards don't (1440-full.jpg). -0.5: "Which siding for a Hartford house?" sub-head above the h1 duplicates what the h1 + lede already say (1440-first.jpg).

## mobile: 8.0 (capped by mustFix)
Earned: no overflow at 320/390 (render.json), sticky three-action bar, calculator inputs full width, multi-step form with large radio targets (390-full.jpg contact crop).
Deductions: mustFix: office hours table breaks at 390: day and time collide ("Mon7:30 am –" / "5 pm" wrapping under, "Wed7:30 am –"), two columns too narrow (390-full.jpg area crop). -0.5: 380 px blank gap before services (390-full.jpg). -0.5: services column is ~2400 px of identical cards (390-full.jpg).

## a11y: 8.5
Earned: visible focusable form fields with labels, high-contrast ink on paper, labelled sample badges, FAQ as disclosure rows, CTA sizes ≥ 44 px (390-first.jpg, 1440-scroll-25.jpg).
Deductions: -0.5: in reduced motion the hero photo is not shown (1440-rm-full.jpg), so reduced-motion users get an empty frame (counted under mustFix with photo, not double-deducted here beyond this). -0.5: the 5-square ruler glyph after CTA labels ("Measure my house ▫▫▫▫▫") reads like missing-glyph tofu at small size and, if it is text, it is noise for screen readers (1440-first.jpg); make it aria-hidden SVG.

## motion: 8.0
Earned: cells fill per row, the method section is a pinned card stack paging 1→4, house drawing in the calculator updates live (1440-scroll-25.jpg, 1440-scroll-50.jpg).
Deductions: -1.0: the motion is mostly "bars fill when visible", the same move repeated in 6 sections; nothing in the scroll is choreographed beyond the method stack (1440-scroll-25/50/75.jpg). -0.5: the method stack's front card is half empty and the cards behind show clipped headers ("PAGE 3 OF 4 · WRAP & FLASHING" cut by the front card), so the pinned moment looks unfinished mid-scroll (1440-scroll-50.jpg). -0.5: the plate 02 band arrives empty in motion mode (1440-full.jpg), see mustFix.

## wow: 8.5
Earned: the squares calculator (house drawing, 1,992 sq ft → 21.9 sq with waste, sample per-material prices, "Book a measure visit with these numbers") is a real tool a homeowner would use and a contractor would want (1440-scroll-25.jpg). The "Only two walls? Mark them." wall picker on ultramarine is a second good idea (1440-full.jpg).
Deductions: -1.0: the two tools are adjacent ideas stated separately; the price sheet does not react to the squares you just entered, so the payoff ("your house costs $X–$Y in fiber cement") never lands (1440-scroll-25.jpg vs 1440-scroll-75.jpg). -0.5: no single moment that stops a juror; it is consistently smart rather than memorable.

## polish: 8.0
Earned: clean hairlines, aligned rail, consistent badges (1440-scroll-75.jpg).
Deductions: -0.5: hours table collision on 390 (counted as mustFix in mobile; here only for the visual). -0.5: empty lower half of method card (1440-scroll-50.jpg). -0.5: ruler-tick glyph in CTAs looks like tofu (1440-first.jpg). -0.5: "SAMPLE PRICING" badge in the calculator sits awkwardly inline with the mono label, baseline mismatch (1440-scroll-25.jpg).

## Arithmetic
14×8.5 + 12×8.5 + 10×8.5 + 10×8.0 + 8×7.5 + 8×8.5 + 7×8.0 + 7×8.5 + 12×8.0 + 8×8.5 + 4×8.0
= 119 + 102 + 85 + 80 + 60 + 68 + 56 + 59.5 + 96 + 68 + 32 = 825.5 / 100 = **8.26**

Verdict hint: FIX (mustFix not empty).

## Must
1. **1440-full.jpg (PLATE 02 band) + 1440-rm-full.jpg (#hero plate)**: photos render as empty frames in full-page captures (navy block with caption only; stone box with ruler only). Fix: hero image `loading="eager" fetchpriority="high"`, no opacity/clip init state on either plate; if the plate 02 band uses a reveal, set the image visible by default and only animate a transform, with `prefers-reduced-motion` showing it immediately. Re-shoot and confirm both photos visible in motion and reduced-motion full pages.
2. **390-full.jpg, #area office hours**: day and time collide and wrap ("Mon7:30 am –" / "5 pm"). Fix: below 560 px make the hours a single column list (`grid-template-columns: 1fr`), each row `display:flex; justify-content:space-between; gap:1rem`, day in a fixed 3.5ch column, time `white-space:nowrap`.

## Should
- **#method (1440-scroll-50.jpg)**: front card half empty, P. 04 rail label detached. Fix: size the card to content (min-height ≈ 280px) and put a material diagram or a cross-section line drawing in the lower half; pin the rail label to the section header.
- **390-full.jpg, gap before #services**: ~380 px empty paper after the method pin. Fix: remove the pin spacer on mobile (no pin below 768 px, cards stack statically).
- **#services (390-full.jpg, 1440-full.jpg)**: 8 identical cards with "Price it →". Fix: on 390 turn it into a compact ruled list (title + scope bar + one line), collapse the four material ones into the compare table they duplicate; replace "Price it →" with a single section link "See every price on the price sheet".
- **CTA ruler glyph (1440-first.jpg)**: "▫▫▫▫▫" after button labels reads as missing glyphs. Fix: replace with a 5-cell inline SVG at 1.5px stroke with one cell filled, `aria-hidden="true"`, or drop it from secondary CTAs.
- **Hero label stack (1440-first.jpg)**: P. 01 + REPORT NO. 01 rule + grey question. Fix: cut "Which siding for a Hartford house?" (the h1 + lede answer it) and keep one report rule.
- **Mono label density (1440-first.jpg, 1440-scroll-75.jpg)**: tracked caps on every band. Fix: keep the mono only on readings and the one report header per section; drop the P. 0N rail numbers or the TEST 0N rule, not both kept.
- **Services h2 (1440-full.jpg)**: slogan. Fix: e.g. "Eight jobs, scored by how much of the house they touch."
- **Calculator badge (1440-scroll-25.jpg)**: SAMPLE PRICING badge baseline off the mono label. Fix: align-items:center on the header row, badge on its own line on narrow widths.
- **390-first.jpg**: sticky bar clips the cover strip's first row. Fix: add bottom padding equal to the bar height to the hero on mobile, or show the bar only after the hero scrolls past.

## Elevate
- **photo (7.5)**: make photography part of the test. Pair each material in the compare/cover with a tight material close-up (lap vinyl, fiber-cement plank, cedar clapboard grain, engineered wood) from the library, each overlaid with its five-cell reading and the reveal measurement, so the plates become the report's specimens instead of two generic house shots.
- **motion (8.0)**: connect the calculator to the price sheet. When the visitor enters their walls, the price-sheet bars re-scale from per-sq-ft to their house's total (squares × range), animating the bars and mono totals as the section scrolls in, so the one interaction carries through the page and the "reading fills" motif finally pays off with a number about their own house.
