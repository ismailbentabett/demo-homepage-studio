COPY: needs copy-chief (copy 8.0 with a mustFix: alt text names Las Vegas on a Phoenix site)

# hvac-C critique, round 1 (fast mode)

## Five-second test
- 1440-first.jpg: "A Phoenix heating & cooling company that starts at first light. It's 115° by noon; they're on the roof before then. Call (602) 555-0106, open until 7 pm, 22 years, 4.9 (Sample)." Clear what, where, what to do. Why them: the early-start promise. Answered.
- 390-first.jpg: same read, h1 is "115°" + 2 lines, both buttons above the fold, sticky Call now / Price it bar. Answered.

Changed since round 0: content now renders everywhere (round 0 was blank bands); placeholder text no longer visible. All media slots are still placeholder files, now rendered as the same flat sun-over-rooftops graphic.

## firstScreen: 8.5
Earned: 1440-first.jpg and 1024-first.jpg: diagonal split hero, giant amber "115°" in Antonio against navy is a real scale moment; phone in header and primary button; proof line with "Sample rating" chip; next band peeks ~64px at 1440. 390-first.jpg: re-cut skyline strip on top, h1 ≤ 4 lines, both actions above the fold.
Deductions:
- 1440-first.jpg: h1 carries neither trade nor city ("115° By noon. We're on the roof before the sun is."), they live in the mono eyebrow above it; 10 words (−0.5 from 9 anchor).
- 1440-first.jpg: the sunlit half is the placeholder graphic, not the promised rooftop unit under hard light; the left half carries no subject.

## distinctiveness: 8.5
Earned: nothing in the library looks like it; sibling hvac-B (Wetbulb, 1440-first.jpg) differs in face, palette and hero family. Hour stamps (05:00 / 10:00 / 14:00 / 18:00) + diagonal shade seam appear in hero, three story bands, reviews and storm band (1440-full.jpg): the sundial idea reads.
Deductions:
- 1440-full.jpg: the 05:00, 10:00 and 18:00 bands use the same shape (heading + sunlit problem left, shaded fix card right, identical skyline) (−0.5).
- 1440-full.jpg: footer is a plain navy block; the "horizon rule" close promised in the concept is not visible. Shade line does not visibly organise the tool or the services list (−0.5 from 9 anchor).
- 1440-first.jpg / 1440-scroll-25.jpg: middle-dot meta strings and mono micro-labels on every band ("SUNLIT · THE PROBLEM", "SHADED · THE FIX") are AI-slop tells (−0.5).

## type: 8.5
Earned: Antonio + Figtree + DM Mono (accent, declared); real scale contrast (115° vs body); body ≥ 16px full ink; mono numerals in hours and prices.
Deductions:
- 1440-first.jpg: 3+ tracked mono caps labels in one view (eyebrow, SHADE LINE / CREW ON THE ROOF card, stats line) (−0.5).
- 1440-scroll-75.jpg: "WHAT THEY SAID AFTER THE CREW CAME DOWN." breaks into 6 lines in a narrow column, "DOWN." alone on its line (−0.5).

## layout: 8.5
Earned: 1440-full.jpg: clear rhythm: navy hero → sand bands → full-bleed sunset break → paper sorter → terracotta 14:00 → dense services list → sand reviews → paper storm → navy ZIP/hours → paper form → navy footer. No two dark bands touch. Dense section (services) and quiet section (break) both present.
Deductions:
- 1440-full.jpg: same story-band shape three times (counted in distinctiveness, not again here); 1440-scroll-25.jpg: ~130px of dead sand below the 10:00 band and the 1440-scroll-50.jpg cream gap above services (within limits, but the scroll sags there) (−0.5 from 9 anchor).
- 1440-scroll-75.jpg: reviews column on the left is very narrow vs the card grid, h2 wraps to 6 lines.

## photo: 6.0
Deductions:
- 1440-full.jpg / 390-full.jpg: all six media slots (hero, story-1..4, break) render the same flat sun-over-skyline graphic. No condenser, no technician, no coil rinse, no stucco house: a visitor sees zero photography (−1.0, same frame repeated).
- dist/index.html: alt texts describe frames that are not on screen ("Matched outdoor units in a desert yard", "Technician checking outdoor unit components") (−1.0, subject absent).
- dist/index.html: two alts say "Las Vegas valley rooftops" / "Las Vegas service area": wrong region (logged as copy mustFix, not deducted again).
Note: this is a media-library problem (placeholder-*.jpg in every slot), not a crop problem. The graphic is on palette, which is why it sits at 6, not lower.

## copy: 8.0 (capped by mustFix)
Earned: concrete trade voice: haboob, cottonwood fluff, capacitor, contactor, the 82-degree rental rule, "Never pull the disconnect yourself. Call us." Sample labels on rating, reviews and prices (1440-scroll-25.jpg, 1440-scroll-75.jpg). No em dashes.
Deductions:
- dist/index.html alt on break and story-3 images: "Las Vegas" on a Phoenix business: an invented location fact (mustFix).
- 1440-first.jpg: hero secondary is "Price it", the sorter hands off with "Get a second opinion", the 05:00 band says "Price a rooftop unit": the pricing action has three names (−0.5 from 9 anchor).

## mobile: 9.0
Earned: 390-first.jpg: hero re-cut as a skyline strip, h1 short, both actions above the fold, sticky Call now / Price it bar; 390-full.jpg: no sideways scroll (render.json overflow 320/390 clean), tool stacks into one column, services list single column with Price it links, form readable. CSS has 640/900 breakpoints for re-layout.

## a11y: 8.5
Earned: 1440-rm-full.jpg and 390-rm-full.jpg show every word; render.json errors empty; one h1, h2 per section, h3 in services; forced-colors media query present.
Deductions:
- dist/index.html: screen-reader users hear photo descriptions (and a wrong city) for images that show something else (−0.5).

## motion: 8.0
Earned: dist/index.html hooks: data-split, data-sunclock, data-hour, data-reveal-stagger, data-marquee, compare, estimator: well beyond 3 hooks. Reduced motion respected (1440-rm-full.jpg).
Deductions:
- 1440-scroll-25.jpg / 1440-scroll-50.jpg vs 1440-full.jpg: the shade line looks like fixed diagonals per band; nothing in the frames shows the seam advancing with the clock, so the one motion idea the concept promises can't be seen. 26 data-reveal on the page suggest one entrance everywhere (−0.5 from 8.5).
- The intro "line sweeps to reveal the rooftop unit" has no unit to reveal.

## wow: 8.0
Earned: 1440-full.jpg: the repair-or-replace sorter in four answers with a "REPAIR IT" verdict bar, plus the hour-stamp day. Useful to a homeowner.
Deductions:
- 1440-full.jpg: the sorter output is a heading + one line + bar, not designed in the shade-line language; the signature moment (the clock advancing) isn't visible, so the two moments don't connect (−1.0 from 9 anchor, +0 for the tool being real).

## polish: 8.5
Earned: SVG favicon, apple-touch, OG 1200×630, theme-color, print and forced-colors media queries, lazy images with width/height, no transition: all.
Deductions:
- 1440-scroll-25.jpg / 1440-first.jpg: radius mixed: pill chips (Sample pricing, Sample rating, header 05:00) beside square buttons and square cards (−0.5).

## Arithmetic
14×8.5 + 12×8.5 + 10×8.5 + 10×8.5 + 8×6 + 8×8 + 7×9 + 7×8.5 + 12×8 + 8×8 + 4×8.5
= 119 + 102 + 85 + 85 + 48 + 64 + 63 + 59.5 + 96 + 64 + 34 = 819.5 / 100 = 8.20 (8.195)

Verdict expected: FIX (mustFix not empty).

## Must
1. dist/index.html, `img[data-slot="break"]` and `img[data-slot="story-3"]` alt: "Las Vegas" on a Phoenix business (wrong region, invented fact). Fix: "Desert sunset over flat Phoenix rooftops" and "Stucco block house with a rooftop unit", or use `{{biz.city}}`, never a literal city.
2. 1440-full.jpg / 390-full.jpg, every `[data-photo]`: all six slots are placeholder files showing the same graphic. Fix: place approved hvac library frames (condenser in desert yard for hero, coil rinse for 10:00, technician at the unit for 14:00, stucco home for 18:00, sunset for the break), one per slot, no repeats. If the niche library has no approved frames, this site is blocked on media curation, not on build.

## Should
- 1440-first.jpg `.hero__h1`: put trade + city into the h1 line: "115° by noon. Phoenix AC crews on the roof before the sun." (≤ 10 words, keep 115° as the display line).
- 1440-scroll-75.jpg `#h-rev`: widen the left column to ≥ 34% or drop the h2 to 4 lines ("What they said once the crew came down.") so "DOWN." isn't an orphan.
- 1440-first.jpg: cut the mono labels to two per view: drop "CREW ON THE ROOF" from the shade-line card and replace the middle-dot stats line with a plain sentence ("22 years on Phoenix roofs, Tempe to Gilbert. 4.9 [Sample rating]").
- All bands: replace "SUNLIT · THE PROBLEM" / "SHADED · THE FIX" with a sun / shade icon + one word, no middle dots.
- Pricing action naming: use "Price it" everywhere (05:00 band button "Price it: rooftop unit", sorter hand-off "Price it with this answer").
- 05:00 / 10:00 / 18:00 bands: give each a different shape (e.g. 10:00 full-width image with the fix card overlapping the seam; 18:00 text-only with the hour stamp as the image).
- Footer `footer`: draw the shade line flat as the horizon rule the concept promises, with the hours set along it.
- Radius: pick one: either square chips (2px) to match buttons and cards, or round everything slightly.

## Elevate
- **photo (6.0):** make the photography the shade line's subject: one real frame per hour band, each clipped by the same diagonal seam at its hour's angle and graded warm on the sunlit side, cool on the shaded side, so the five frames read as one day shot on one roof.
- **motion (8.0):** make the clock actually run: one scroll-driven `--sw-hour` that rotates the seam across every band and ticks the header sun-clock chip in step, so scrolling the page visibly moves the sun from 05:00 to 23:00, with a static noon angle under reduced motion.
