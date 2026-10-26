COPY: needs copy-chief

# cleaning-C: critique round 3 (fast mode, scored as always)

Huge change from round 2: the photos load, the header is legible, the dial actually turns. Scores rise because the screenshots changed, not because it is round 3.

## Five-second test
- **1440-first.jpg:** "House cleaning in Chattanooga, planned around the seasons. 4.9 sample rating, 13 years. I can price it or call (423) 555-0154." Why them: the seasonal list (pollen, mildew). Clear in under 5 s. The fog photo and brass dial read as an almanac cover. Weak spot: the dial's labels and "EDITION" fade into the bright fog.
- **390-first.jpg:** same message, h1 3 lines, both buttons above the fold, sticky Call / Get a price bar. The eyebrow fades into the fog.

## Section scan (1440-full.jpg, scroll frames)
Hero (fog photo, dial) → brass "A year of care" index with quarter icons + sample price → Spring "Pollen week" paper split (green cloth photo, price chip overflowing) → Summer slate split (shower, Sample review, 1440-scroll-25.jpg) → full-bleed house break "Same house. Four different messes a year." → Fall paper with countdown ring tool + towels → Winter deep (clawfoot cabin bath, 1440-scroll-50.jpg) → "What we clean" 3×3 numbered grid → white reviews 3×2 + proof row (1440-scroll-75.jpg) → deep area/ZIP + hours → paper form step 1 → deep footer with dial "Back to spring".

## firstScreen: 8
Earned: 8-word h1, 2 lines, trade + city + outcome; one primary plus a quieter call button; Sample proof line; brass band peeks ~64px; signature in the hero (1440-first.jpg). 390-first.jpg: 3 lines, both actions above the fold.
Deductions / cap: 1024-first.jpg dial labels collide ("CABINSSPRING") (mustFix); 1440-first.jpg "EDITION" and "WINTER · CABINS" unreadable on fog (mustFix, a11y). Capped at 8.

## distinctiveness: 8.5
Dial in hero, almanac index, every dateline, sticky top-right dial (SUMMER at 1440-scroll-25.jpg, WINTER at 1440-scroll-50.jpg), countdown ring, reviews header, footer. That is real work, not decoration. −0.5: services 01–09 3×3 grid with "Get a price →" on every card and a 3×2 review-card grid (1440-scroll-75.jpg) are template shapes.

## type: 8.5
Strong condensed display serif with scale contrast; curly quotes and en-dash ranges fixed (1440-scroll-25.jpg, 1440-full.jpg). −0.5: 1440-first.jpg has six tracked mono caps strings in one view (eyebrow, four dial labels, proof line).

## layout: 8.5
1440-full.jpg: a real tonal rhythm, no two dark bands touching, the photo break lands. −0.5: pollen price chip, the white box ends before "(porches, screens, fans)" does (1440-full.jpg). Winter spread leaves a dead block under the h2 at 1440 (1440-scroll-50.jpg).

## photo: 7.5
Real photos, strong hero fog. −0.5 mixed grade: saturated emerald cloth (spring) and flat-flash cabin bath next to the cool white shower (1440-full.jpg). −0.5: the green cloth does not read as pollen or porch. The shower frame shows a white sliver along its right edge (1440-scroll-25.jpg).

## copy: 8.5
Concrete and local (1440-scroll-75.jpg: heart pine, porch turns yellow, fan on). Sample labels everywhere. −0.5: the primary action has four names: "Price my cleaning" (1440-first.jpg), "Get a price" (390-first.jpg bar + 9 service links), "Book a visit" (header), plus per-season variants.

## mobile: 8.5
390-first.jpg good; render.json no overflow at 320/390. 390-full.jpg: stacked and usable, the countdown is thumb-friendly, but the sections are collapsed rather than re-cut (same hero crop, 9 stacked service rows).

## a11y: 8
1440-rm-full.jpg / 390-rm-full.jpg: all content visible. mustFix: the gold mono hero labels on bright fog are under 4.5:1 (1440-first.jpg, 390-first.jpg eyebrow).

## motion: 8.5
The sticky dial turns and relabels through the spreads (1440-scroll-25.jpg → 1440-scroll-50.jpg), and the countdown arc draws. The hero dial is one arc, not the four-segment fill. There is no entrance language beyond that.

## wow: 8.5
The countdown output speaks the dial's language: "20 DAYS OUT", ticks, book-by / deep / touch-up dates (1440-full.jpg, 390-full.jpg). It covers only fall, there is nothing to keep (print/save), and the season planner from concept.json is not visible.

## polish: 8
Footer is a designed close (1440-full.jpg). Deductions: 1024 label collision, chip overflow, shower sliver, arrows on 9 identical links (1440-scroll-75.jpg).

## Arithmetic
14×8 + 12×8.5 + 10×8.5 + 10×8.5 + 8×7.5 + 8×8.5 + 7×8.5 + 7×8 + 12×8.5 + 8×8.5 + 4×8
= 112 + 102 + 85 + 85 + 60 + 68 + 59.5 + 56 + 102 + 68 + 32 = 829.5 / 100 = **8.30**

## Must
1. **1024-first.jpg, hero dial labels:** the labels collide ("WINTER · CABINSSPRING · POLLEN"). Fix: below 1100px show the season name only, or stack the labels 2×2 under the dial with a 16px gap; hide them under 900px.
2. **1440-first.jpg / 390-first.jpg, dial labels + "EDITION" + eyebrow:** gold mono on bright fog, under 4.5:1. Fix: use --paper (#F3EFE6) for these, or add a radial scrim rgba(20,25,22,.55) behind the dial and a left gradient behind the text column.

## Should
1. **#almanac-spring price chip (1440-full.jpg):** the white box is narrower than its text. Set it to `display:inline-block; max-width:100%` (or `width:fit-content`) so the box wraps the whole line.
2. **#almanac-summer figure (1440-scroll-25.jpg):** a white sliver shows on the right edge. Use `object-fit:cover` with width 100%, or crop the source.
3. **Primary action naming (1440-first.jpg, 390-first.jpg, services):** pick one name ("Price my cleaning") for the hero, the mobile bar and the header. Change the 9 service links to "Price this", with no arrow on each.
4. **Services grid (1440-scroll-75.jpg):** drop the decorative 01–09 numbers, or replace each with the season quarter icon the service belongs to, so the dial organises the list.
5. **Winter spread (1440-scroll-50.jpg):** move the intro + price + button under the h2 in the left column, or set the h2 across both columns, to close the dead block.
6. **Hero labels (1440-first.jpg):** cut the six mono caps strings to two (keep the eyebrow and the proof line). The dial can carry plain season names.

## Elevate
- **photo (7.5):** grade the set as one almanac shoot: lifted blacks, brass highlights, one warm-charcoal treatment across every frame. Replace the green cloth with a pollen-season porch or screen frame. Give each spread figure the dial's quarter-circle crop corner so the photos sit inside the signature.
- **firstScreen (8):** make the hero dial the masthead: a true four-segment brass dial with the current season filled and its label in paper on a fog scrim, so the first screen reads as the almanac cover and hands off to the sticky dial on scroll.
