COPY: ok

# autobody-B: critique round 1 (fast mode)

**Five-second test** (1440-first.jpg, 390-first.jpg): "An El Paso auto body and paint shop. Click the swatch that looks like my faded hood and it tells me what it needs (polish, 4.4 mils, $350–$700 Sample). I can call (915) 555-0108 or text them 4 photos. They measure the paint before they sell me anything." That passes. The city sits only in the mono eyebrow, though, and the h1 is a question about the problem, not "body shop, El Paso".

## First screen: 8.5
Earned: the signature is the hero. The probe LCD tag straddles the seam over a drawn four-film paint cross-section, and the hero sorter (Dull / Chalky / Peeling / Bare) prints a reading, a fix and a Sample price. Phone shows in the header and the primary button, the secondary "Text us 4 photos" is quieter, and the proof line has hours, a Sample rating and the insurer line (1440-first.jpg). At 390 the h1 runs 3 lines and Call sits above the fold and the bar (390-first.jpg).
- 1440-first.jpg: the hero fills the whole 900px and the dark story band does not peek (−0.5).
- 1440-first.jpg: the h1 names neither the trade nor the city ("Peeling, chalky or just dull? Tap your paint."). Both sit in a 13px mono eyebrow. It is not a slogan because "paint" carries the trade, but it is not trade + city + outcome either (held at 8.5, not 9).
- 1440-first.jpg: the right half is all illustration. Nothing on the first screen shows that a car or a shop exists.

## Distinctiveness: 8.5
Earned: the readout and strata system shows up in the hero, the story (four mil readings, 1440-scroll-25.jpg), the services test sheet (a readout chip on every row, 1440-full.jpg), the dent check (a stripe-reflection board, 1440-scroll-50.jpg), the review numbers ("41 dents", "8 months", "<1 hour", 1440-scroll-75.jpg), the price tape and the footer status. It does real work as a tool output and a price gauge. It cannot be mistaken for sibling A (dark, yellow, condensed stations strip) or sibling C (teal, serif, boat hull).
- 1440-first.jpg, 1440-scroll-25.jpg: AI tells. Mono micro-labels are everywhere ("CROSS-SECTION · HOOD · ×400", "SAMPLE", "MILS"), middle-dot meta strings run in the eyebrow and the proof line, and the story steps carry "02 / 03 / 04" numbering in front of headings that already have a mil value (−0.5).

## Typography: 8.5
Earned: Schibsted Grotesk display, tight and heavy, against Public Sans body at full ink, with Martian Mono kept for readings and prices (the concept's accent). There is a real scale-contrast moment in the hero readout "4.4" and the price tape. Ranges use en dashes ($350–$700), quotes are curly and there are no em dashes.
- 1440-first.jpg: 3+ tracked mono caps captions in one view (the eyebrow, "CROSS-SECTION · HOOD · ×400", "SAMPLE", "CLEAR COAT / BASE COLOR / PRIMER / E-COAT / STEEL", "GLOSS", "SAMPLE RATING") (−0.5).
- 1440-scroll-25.jpg: the dimmed inactive story steps put body grey on navy near the 4.5:1 line. It is acceptable as a state, so noted with no extra deduction.

## Layout and rhythm: 8.5
Earned: 1440-rm-full.jpg reads paper → deep → paper → mid → blue → paper → white → deep → mid → paper → deep. No dark bands touch, and there is a ruled services sheet, an asymmetric review column with tally numbers, a full-bleed blue claim band and the gauge-tape price list.
- 1440-full.jpg: with motion on, the full-page shot holds about 1,500px of empty navy under the story (12,943px tall against 11,382px in rm). That is the pin spacer. In a live scroll it is the pinned story, but the four steps are already visible side by side, so the pin adds a screen and a half with little change. Keep the pin to calc(4 × 55svh + 100svh) at most (−0.5).
- 1440-scroll-50.jpg: the dent check right column (the stripe board) ends roughly 250px above its form column and leaves a dead cream rectangle under "STRIPES BEND WHERE THE METAL DOES". This does not reach half a screen, so there is no deduction, but tighten it.

## Photo and video: 6.5
- dist/index.html holds **zero `<img>`, `<picture>` or `<video>`**. 1440-full.jpg and 390-full.jpg contain no photograph. The "Matched in the booth" band (1440-rm-full.jpg) is a row of drawn swatches. The concept (02-concept.md) promised "the photo becomes a 4:3 band under the sorter with the readout overlapping its top edge". That was not delivered.
- To a homeowner, a body shop page with no car, no booth and no hands on a panel reads as an app, not a shop you drive to. The drawings are good and on-concept, which is why this is above the floor, but this category scores media.

## Copy: 9
Earned: trade nouns throughout ("clear coat", "e-coat", "mils", "test spot", "supplement", "body line or panel edge"). There are honest it-depends answers ("Ranges, not quotes. Where yours lands depends on the reading."), the claim path tells you "You pick the shop" first, the reviews match facts.json word for word with Sample labels, and every price carries SAMPLE PRICING (1440-scroll-75.jpg, 1440-scroll-50.jpg). I found no invented claims.
- 390-first.jpg vs 1440-first.jpg: the mobile bar says "Price it" while the page says "Send this to the shop" and "Send us the paint". That is a minor naming drift on the secondary action (noted only).
- 1440-rm-full.jpg: "Matched in the booth. Checked in full sun." is a slogan couplet (noted only, no deduction).

## Mobile: 9
Earned: 390-full.jpg and 390-rm-full.jpg are the same height (17,656px), so there is no phone pin. The hero is re-cut so the sorter leads and the strata drop below. The h1 is 3 lines, swatches and tap targets are thumb-sized (390-first.jpg), the three-way bar holds Call / Text photos / Price it, and render.json shows no overflow at 320 or 390.
- 390-full.jpg: the page runs about 21 phone screens. The services sheet and the claim band are long stacks, so density needs a phone-specific cut (Should).

## Accessibility: 9
Earned: 1440-rm-full.jpg and 390-rm-full.jpg show every section, the four story steps and the strata in static form. One h1 and an ordered h2/h3 structure (dist/index.html). Tabs and accordion hooks are present, and forced-colors and print media queries exist.
- dist/index.html: the four hero tab panels each use an `h2.sort-panel__h` placed before the story h2. That is acceptable, but h3 would keep the outline honest (Should).

## Motion and interaction: 9
Earned: the story explains something. The strata thin and rebuild as the mil reading counts 4.6 → 3.6 → 3.4 → 3.4 + coat (1440-scroll-25.jpg shows the white coating layer added at step 4). The hooks in dist cover split-line h1, count readouts (data-mil), the signature (13×), tabs, compare, carousel, marquee and staggered reveals, well beyond 3, and entrances vary by role.
- Cannot verify from stills that the hover "probe touch" re-count exists on the services rows. If it is missing, add it.

## Wow moment: 9
Earned: the hero sorter is the signature and a tool at once. Pick your paint state and the probe prints mils, a fix and a Sample price you can send to the shop (1440-first.jpg). The dent check's bending stripe board is a second, trade-true moment (1440-scroll-50.jpg).
- 1440-scroll-50.jpg: the dent-check output is a plain line plus a price ("Likely paintless. $100–$350"). It is not printed as a readout tag like the hero, so the two moments don't share their output language (kept at 9).

## Polish: 8.5
Earned: SVG favicon, a 180 apple-touch icon, OG 1200×630, a print stylesheet, forced colors and a designed dark footer with live status.
- 1440-scroll-50.jpg: the stripe board has a ~16px radius and the hero selected swatch is rounded (1440-first.jpg), while every other frame, tag and button is square (−0.5).

## Arithmetic
14×8.5 + 12×8.5 + 10×8.5 + 10×8.5 + 8×6.5 + 8×9 + 7×9 + 7×9 + 12×9 + 8×9 + 4×8.5
= 119 + 102 + 85 + 85 + 52 + 72 + 63 + 63 + 108 + 72 + 34 = 855 / 100 = **8.55**

Verdict expected: **ELEVATE** (inside 8.0–9.0, floors met, no mustFix).

## Must
None. Every Sample label is present, no claims are invented, no faces appear, reduced motion is complete and there is no overflow.

## Should
1. **#story pin length** (1440-full.jpg). Problem: about 1,500px of extra pinned scroll for four readings that are already listed. Fix: cap the pin at calc(4 × 55svh + 100svh) or less, or let the left list scroll freely while only the strata panel sticks.
2. **#dent right column** (1440-scroll-50.jpg). Problem: the stripe board ends far above the form and leaves dead cream. Fix: make the board sticky (top: 15vh) inside the column, or align it to the bottom with the verdict.
3. **Dent-check output** (1440-scroll-50.jpg). Problem: the plain text verdict sits next to a designed hero readout. Fix: print "Likely paintless" inside the same LCD tag (value "PDR", status "PAINTLESS", Sample tag) that the hero uses.
4. **Radius** (1440-scroll-50.jpg stripe board, 1440-first.jpg swatch). Fix: set the board and the swatch focus ring to 0 radius like every other frame.
5. **Mono caps density** (1440-first.jpg). Fix: drop "SAMPLE" from the cross-section header (the readout tag already says SAMPLE READING) and set the strata layer names in Public Sans 14px, sentence case. Keep mono for numbers only.
6. **Story numbering** (1440-scroll-25.jpg). Fix: remove "02/03/04". The mil value is the ordinal.
7. **Hero h2s** (dist/index.html `.sort-panel__h`). Fix: change them to h3, or to p with aria-live, so the hero holds no h2 before #story.
8. **Phone length** (390-full.jpg). Fix: on <640px, collapse services rows to name + readout chip with blurbs in a disclosure, and cut the claim band to the selected case only.
9. **Action naming** (390-first.jpg mobile bar "Price it"). Fix: name it "Send the paint", matching the contact h2 and "Send this to the shop".

## Elevate
- **Photo (6.5): bring one shoot under the probe.** Take 3–4 frames from the approved autobody library (a sun-peeled roof or hood, a gauge or hand on a panel, the booth light, a finished panel in sun) and make them part of the reading system. Each photo carries the probe's crosshair dot and an LCD tag pinned to its corner with the reading for that state. Put the first one in the hero's right column under the strata (as 02-concept promised: a 4:3 band with the readout overlapping its top edge), and turn "Matched in the booth" into a real booth frame with the drawn swatches laid over it. Grade them all cool toward the Clear-Coat Blue so they read as one shoot.
- **First screen (8.5): make the hero say shop + city in the big type and let the night band show.** Restructure the h1 so the trade and El Paso sit in the display line (e.g. "Sun-peeled paint in El Paso? Tap your paint."), shorten the hero to about 820px so the probe-night story band peeks 80px under the fold, and let the hero readout count to the sorter's value on load. A visitor then sees shop, city, the instrument and the next band in one glance.
