COPY: ok

# appliance-C · critique round 2 (fast mode)

## Five-second answer
"Sioux Falls appliance repair, before the beef thaws. They fix chest freezers, garage fridges, washers and dryers. I call (605) 555-0172 or text. Why them: they know what's in my basement freezer, they're open now and the diagnostic visit is $85–$115 (sample)." The h1 now names the trade, the city and the outcome (1440-first.jpg, 390-first.jpg).

## What changed since round 1
Fixed and verified: the h1 sits on a large tape strip with trade + city in it and the marquee butts straight under it (1440-first.jpg). Curly apostrophes everywhere (1440-scroll-25.jpg "Don’t", "We’ll"). The garage-fridge h2 is down to 2 lines (1440-full.jpg, garage band). The review tape no longer covers "reviews" (1440-scroll-75.jpg). The 7th review is now a full-width note (1440-full.jpg, reviews band). "Lars E.." is gone ("9 years on these roads [Sample years]. Ask for Lars E."). Margin tags are months only, and at 390 the tag sits above the h2 (390-full.jpg, garage band). The year-story vignettes are month-specific now (sun on JUL, dusty coils AUG, thermometer SEP, pheasant on the lid OCT, oven NOV, dishwasher DEC) (1440-scroll-50.jpg). data-reveal went from 27 to 11 instances.

## firstScreen: 9.0
Earned: h1 of 8 words with trade + city + outcome, set on the tape lid with the tick. The marquee reads as the next lines of the same list. One loud Call and a quieter Text, a Sample-labelled proof line, the phone in the header. 390-first.jpg: h1 4 lines on the strip, both actions and the proof line above the fold, the mobile bar present.
Deductions (not enough to leave 9):
- 1440-first.jpg: about 130px of empty paper above the Caveat line and about 100px under the proof line before the navy band. The composition floats in the middle of a tall hero.

## distinctiveness: 9.5
Earned: the freezer-lid tape list is now the whole page's grammar: the h1 strip, the marquee entries, the month tags in the margin, the ruled services checklist, the year cards, the ruled price sheet, the taped review notes, the ruled form and the torn "LAST" entry in the footer (1440-full.jpg, d-band footer). Nothing on the 1440 first screen resembles A or B. You could tell which site it is from any single band, which is the reason for the 9.5.

## type: 9.0
Earned: Literata upright vs italic at real scale contrast (hero, red band in 1440-scroll-25.jpg), Work Sans body at full ink, Caveat limited to the deck line and the ticks. h2s mostly 2 lines at 1440. Curly quotes, en-dash ranges ($85–$115, 7 am – 5 pm).
Deductions (light):
- 1440-scroll-50.jpg: the year story still carries a tracked "JAN–DEC" eyebrow over its h2 while every other section uses the margin tag. One system, one exception.
- 1440-full.jpg form band: "The last line / on the list / is yours." runs 3 lines in a narrow column.

## layout: 9.0
Earned: tone run paper/deep/light/red/deep/paper/tape/light/paper/tape/deep, no dark bands touching, a full-bleed red break, quiet list against dense sheet + tool. The orphaned review is now a deliberate wide note (1440-full.jpg reviews band).
Deductions (light):
- 1440-full.jpg reviews band: the wide Canton note's text stops at about 60% of the note, leaving its right 40% empty paper.

## photo: 9.0
Earned: a photo-free concept done honestly. One stroke weight, one hatch, one hand throughout. The year sequence is now a sequence: each month has its own object and detail (1440-scroll-50.jpg, 390-full.jpg year story).
Deductions (light):
- 1440-scroll-50.jpg: the drawings are still icons on a card, not small scenes; the garage fridge tile in 1440-full.jpg (garage band) is the most generic of them.

## copy: 9.0
Earned: trade nouns and household detail ("quarter of beef and two seasons of pheasant", "start relay", "twenty-two feet up to the roof"), honest hedges ("Typical; check yours.", "Typical lifespans"), Sample labels on rating, pricing, reviews, promise and years (1440-scroll-75.jpg). Zero em dashes; the double period is gone.
Deductions (light):
- 1440-first.jpg: "Open now · until 5 pm" appears in the header and again in the hero proof line, and once more in the form (1440-full.jpg form band). Middle-dot meta strings remain a light tell.

## mobile: 9.0
Earned: no overflow at 320/390 (render.json). The year story stacks into ticked tape lines (390-full.jpg). The month tag now sits above the h2 in the garage band, and the tool follows the CTA in a clear order (390-full.jpg). Tap targets on the form chips and the bar are thumb-sized.

## a11y: 9.0
Earned: 390-rm-full.jpg and 1440-rm-full.jpg show every word and every tick, the marquee static. One h1 and a clean heading order, visible focus, forced-colors and print. static.json and render.json are clean.

## motion: 9.0
Earned: the pinned year story ticks month by month with a gold progress rule, so the motion explains order (1440-scroll-50.jpg); it stacks unpinned at 390 (390-full.jpg). The h1 strip now carries the tick, so the intro is tied to the idea. The generic reveal is used about half as often as in round 1, the tools (thaw clock dial, life slider, garage month/°F) give interaction with feedback.
Deductions (light):
- I can't see role-varied entrances in stills. The 11 remaining data-reveal hooks still read as one entrance for list, notes and area.

## wow: 9.0
Earned: the thaw clock ("About 48 hours… Don’t open it to check") is a tool a panicked homeowner would use, drawn in the tape language (1440-full.jpg deep band 1). With the ticking year and the garage-fridge month/°F tool (1440-full.jpg garage band) it adds up to a site that knows the basement.

## polish: 9.0
Earned: the tape-over-text overlap is fixed (1440-scroll-75.jpg). Concentric ruled cards, one stroke weight, the footer's "LAST" entry as a designed close with the credit in place (1440-full.jpg footer).
Deductions (light):
- 1440-full.jpg footer: "Appliance Repair · Sioux Falls, SD" middle-dot meta string.

## Arithmetic
14×9 + 12×9.5 + 10×9 + 10×9 + 8×9 + 8×9 + 7×9 + 7×9 + 12×9 + 8×9 + 4×9
= 126 + 114 + 90 + 90 + 72 + 72 + 63 + 63 + 108 + 72 + 36 = 906 / 100 = **9.06** → PASS (fast: ≥ 9.0, every category ≥ 9.0)

## Must
None.

## Should
1. Hero (1440-first.jpg): tighten the empty paper. Set `.hero` to about `min-height: 84svh` or cut the top padding by ~80px so the deck line starts about 60px under the header, and the next band peeks more.
2. Year story (1440-scroll-50.jpg): replace the "JAN–DEC" eyebrow with a margin tape tag like every other section ("ALL YEAR").
3. Reviews (1440-full.jpg, reviews band): on the wide Canton note, set the quote in 2 columns or at a larger italic size (about 1.5rem) so it fills the note instead of stopping at 60%.
4. Form h2 (1440-full.jpg form band): widen the left column to 6/12 or shorten to "The last line is yours." so it runs 2 lines.
5. Hero proof line (1440-first.jpg): drop "Open now · until 5 pm" there (it's already in the header) and keep rating + pricing only.
6. Motion: give the services list a per-row tick draw and keep the area and hours still. Don't run the same data-reveal rise on every band.

## Elevate
PASS: none required. If there's time, firstScreen and type (the lowest-weighted 9s) would gain the most. Make the hero a single lid filling the viewport, and finish moving every heading onto the margin-tag system.
