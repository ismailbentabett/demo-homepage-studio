COPY: ok

## Five-second test
1440-first.jpg: "A Knoxville crew that sands hardwood floors back to bare wood and refinishes them. Book a sample visit or price my rooms; the phone is top right, and they're open until 5." Why them: stain samples go on your own floor, and the dust is bagged. The three drawn frames (worn, sanded, coat 3) above the 36→COAT 3 rail tell the process before I read a word. 390-first.jpg: the h1 runs 4 lines, both CTAs sit above the fold, the filmstrip peeks in, and the call + book bar is pinned at the bottom. Passes.

Round 2 was scored from the DOM only. This round has screenshots, and the round-2 fixes show in them: a three-frame filmstrip, the outcome in the h1, SVG stars that match the 4-star review, a designed estimate sheet, a coarse→fine rail over services, and the eight duplicate credits are gone.

## firstScreen: 9.0
**Earned:** 1440-first.jpg: the h1 "Hardwood floors sanded bare and refinished in Knoxville" (8 words) gives trade, outcome and city. One filled primary and one outlined secondary. The phone CTA in the header is the strongest-coloured element. Three process frames sit over the grit rail, and the dark quiz band peeks about 70px at the fold. 390-first.jpg: all key content is above the fold.
**Deductions:**
- 1440-first.jpg: the first frame's pill says "BEFORE". On a stock or drawn floor this is the before/after framing that DEMO-RULES avoids. Process framing ("36 GRIT IN" / "WORN") fits the thesis better (−0.5, Should).
- 1440-first.jpg: there are two mono middle-dot strings in one view, the eyebrow "THIRD COAT · SAND & REFINISH · SCREEN & RECOAT" and the proof line "Sample $3–$5 per sq ft · Open now · until 5 pm · 4.9". Add the header's "Open now · until 5 pm" and that makes three mono tracked strings in the first view. It's a template tell, and the hours appear twice (header and proof line). Absorbed in the 9.0, which stops it reaching 9.5.

## distinctiveness: 9.0
**Earned:** The Grit Sequence Rail is really threaded through the page: the hero rail (1440-first.jpg), the GRIT 60 counter plate on the pinned story (1440-scroll-25.jpg), the COARSE→FINE rule over services (1440-scroll-50.jpg), the "100" pill in the break band, and the footer close (1440-full.jpg). Siblings: B (spec cards, grotesk) and C (dark navy, heart-pine section drawing) share nothing with A's paper-and-walnut serif page. The logos can't be swapped.
**Deductions:**
- 1440-scroll-50.jpg: the service rows carry "01"–"10" on identical amber squares. That's decorative numbering, and the squares look like placeholder thumbnails. The grit idea stops at the rule above the grid instead of reaching the rows (−0.5).
- Mono micro-labels everywhere (eyebrows, captions, sample tags, "CHANGES IT" rows) dilute the mono that should belong to grit numbers only. Absorbed in the 9.0.

## type: 9.0
**Earned:** 1440-first.jpg: Crimson Pro at display size is tight and warm, with good weight contrast against Karla. The lead measure is about 45ch. 1440-scroll-75.jpg: the estimate sheet "Sand & refinish: $3 to $5 per sq ft" is set well. The h2s are consistent across sections (1440-full.jpg).
**Deductions:**
- 1440-first.jpg / 1440-scroll-50.jpg: DM Mono does too many jobs: eyebrows, the proof line, the hero captions and the scale labels. The grit numerals lose their special status (−0.5).
- 1440-full.jpg: the review-card meta and sample tags at about 11px mono sit at the edge of legible on the cream cards. Absorbed in the 9.0.

## layout: 8.5
**Earned:** 1440-full.jpg: tone rhythm is paper → deep → cream (story) → textured break → paper → cream → deep → accent → paper → cream → deep. The break band gives the page breath. The story is pinned with a step rail on the left. 1440-rm-full.jpg: the story falls back to a clean 2×2 grid.
**Deductions:**
- 1440-scroll-75.jpg, `.cta-strip .cta-inner`: the h2 "Want to see it on your own floor first?" starts at x≈48 while every other section starts at x≈128. `.cta-inner { max-width: none }` drops the container's width cap, so the strip breaks the page's left edge and the lead runs to x≈1380 (−0.5).
- 1440-full.jpg: the services list (two columns of ten ruled rows) and the proof grid below it are the two densest blocks, and both are uniform repeaters. Services has no single row given more weight (sand & refinish is the money job) (−0.5).
- 1440-full.jpg, contact: the ZIP check sits as a loose line under the contact copy with a lot of empty cream to its right. The bottom of the page goes slack. Absorbed.

## photo: 8.5
**Earned:** The drawn treatments are coherent. 1440-first.jpg: worn grey, sanded blond and amber satin read as one grade and one floor. 1440-scroll-25.jpg: the sanded plank texture with a half-sanded split is a nice detail. 1440-full.jpg: the break band grain and the stain swatches stay in the same warm family. Nothing is blank or broken, and no photo appears twice.
**Deductions:**
- 1440-full.jpg / 1440-scroll-50.jpg: the break band at full bleed is a flat grey-brown blur. At 1440 width it reads as a muddy texture, not a floor seen in raking light, and it's the weakest image on the page (−0.5).
- 1440-scroll-50.jpg: the service-row squares are flat amber noise tiles with no content, so they look like failed thumbnails. Absorbed in the distinctiveness deduction (not double-counted).

## copy: 9.0
**Earned:** Specific trade voice: "erases the 36 swirl marks and evens out boards that sit a hair proud" (1440-scroll-25.jpg), "Each one priced in writing before the sander comes off the trailer" (1440-scroll-50.jpg), "What's left after the last pass goes in the bag, not your vents". Sample labels are on the price, rating, reviews and pricing note. The guarantee matches facts.json. CTAs are consistent.
**Deductions:**
- 1440-full.jpg, story step 4: "Colour in your own light" uses UK spelling on a Knoxville, TN business. Use "Color in your own light" (−0.5).

## mobile: 9.0
**Earned:** 390-first.jpg: the h1 runs 4 lines, the CTAs are full-height, the header has a 44px call button and menu, and a bottom bar holds Call + Book a visit. 390-full.jpg: the sections stack in order, the services become a single-column list, the estimate sheet stacks under the controls, the reviews go single-column, and nothing overflows sideways.
**Deductions:**
- 390-first.jpg: the "Price your rooms" outlined button is narrower than the primary above it (ragged pair). Make both full width or both auto. Minor, absorbed.

## a11y: 9.0
**Earned:** 1440-rm-full.jpg: every section is present with reduced motion, all four story frames show as a grid, and the reveals are all visible. Contrast on the accent band (cream on rust) and the deep bands reads fine in 1440-scroll-75.jpg. The stars are now SVG with labels that match the data (4-star review fixed). static.json and render.json are clean.
**Deductions:**
- 1440-scroll-75.jpg: the "SAMPLE PRICING" tag and pricing note are muted tan text at about 13px on near-black. That's borderline for a small label. Absorbed, and no failure in the checks.

## motion: 9.0
**Earned:** 1440-scroll-25.jpg: the pinned story has a step-progress rail on the left, a half-sanded split on the plank and a GRIT counter plate that ticks with the steps, so the signature moves. 1440-first.jpg: the three hero frames give the intro something to unclip. 1440-scroll-75.jpg: the estimate sheet sits as a slightly rotated printed card. That makes ≥3 hooks beyond reveals.
**Deductions:**
- 1440-full.jpg: in the motion-on full page, story steps 2–4 sit at low opacity with large dead gaps between them. During the pin the reader scrolls through a lot of empty cream with one frame fixed. The pin length feels longer than the content (−0.5). Lift: tighten each step's scroll span.

## wow: 9.0
**Earned:** 1440-scroll-75.jpg: the estimator output is now a designed "Estimate sheet" (title, range in display serif, ruled rows, "Print this sheet") next to a plan sketch with a door swing and a dimension line. It's a keepable artifact. 1440-full.jpg: the refinish-or-recoat quiz with its result box ("Most floors don't need a full sand") is tied to the thesis and helps the homeowner.
**Deductions:**
- 1440-scroll-75.jpg: the plan sketch on the left is a dark box on a dark band with a faint dashed frame. Next to the bright sheet it reads as an empty placeholder, so the visual pay-off is lopsided (−0.5).

## polish: 9.0
**Earned:** Consistent 2px radius, one icon stroke weight, SVG stars, a designed footer with a grit close (1440-full.jpg), and favicon, OG and JSON-LD in dist. The duplicate credits are gone. Checks are clean.
**Deductions:**
- 1440-first.jpg: the "Open now · until 5 pm" status repeats in the header and the hero proof line, and the header version is a thin mono string that reads as debris. Absorbed.

## Arithmetic
14×9.0 + 12×9.0 + 10×9.0 + 10×8.5 + 8×8.5 + 8×9.0 + 7×9.0 + 7×9.0 + 12×9.0 + 8×9.0 + 4×9.0
= 126 + 108 + 90 + 85 + 68 + 72 + 63 + 63 + 108 + 72 + 36
= 891 / 100 = **8.91**

## Must
(none). There are no DEMO-RULES breaches serious enough to block, all content is present in reduced motion, and nothing breaks at 390.

## Should
1. **where:** 1440-scroll-75.jpg, `.cta-strip .cta-inner`. **problem:** the strip's content ignores the page container (left edge at x≈48 against 128 everywhere else). **fix:** remove `max-width: none` from the desktop `.cta-inner` rule (or set `max-width: var(--container)` with `margin-inline: auto`), so h2 and lead line up with the 128px column.
2. **where:** 1440-first.jpg, the first hero frame's pill. **problem:** "BEFORE" is before/after framing. **fix:** relabel it "36 IN" or "WORN" so the three pills read WORN → 36 → 100 → COAT 3 as one grit sequence.
3. **where:** 1440-full.jpg, story step 4 h3. **problem:** "Colour" is UK spelling on a US business. **fix:** "Color in your own light".
4. **where:** 1440-scroll-50.jpg, `#services` row squares. **problem:** "01"–"10" on identical amber noise tiles look like failed thumbnails and decorative numbering. **fix:** replace each square with the service's grit or stage stamp (36, 100, STAIN, COAT…) on a texture whose coarseness matches, or drop the squares.
5. **where:** 1440-full.jpg, the break band. **problem:** at full bleed the grain reads as a muddy grey blur. **fix:** raise contrast and add one raking-light highlight streak across the boards so it reads as a floor in window light.
6. **where:** 1440-scroll-75.jpg, the estimator sketch. **problem:** the dark plan on a dark band reads as empty. **fix:** draw the plan in cream lines on the deep band with the board pattern filling in amber as the slider moves, so it balances the bright sheet.
7. **where:** 1440-first.jpg, the header and hero proof line. **problem:** the open-now string appears twice, and there are three mono middle-dot strings in the first view. **fix:** keep open-now in the proof line only, and cut the hero eyebrow to one item or remove it.
8. **where:** 1440-full.jpg, `[data-story]`. **problem:** the pin span leaves long empty scrolls between steps. **fix:** shorten the scroll distance per step by about 40% so each step arrives sooner.

## Elevate
1. **layout (8.5, weight 10):** Give the services section a lead job and a hierarchy. Promote "Sand & refinish hardwood" to a wide feature row spanning both columns, with its own process frame and the full 36→COAT 3 mini-rail. Then let the other nine fall in sequence below as a lighter ruled index ordered coarse to fine, each tagged with its grit stamp. Fix the CTA strip so it holds the same 128px column as the rest of the page. The page then has one clear left edge and a services block with a focal point instead of a uniform list.
2. **photo (8.5, weight 8):** Make the drawn imagery into one art-directed set that tracks the grit. Each image (hero frames, break band, story frames, service stamps) is rendered at a texture coarseness that matches its place in the sequence: coarse speckle and visible swirl at 36, clean grain at 100, raking-light satin sheen at COAT 3. Give the break band a single strong light streak so it becomes the page's hero image of "finished floor in window light" rather than a blurred filler.
