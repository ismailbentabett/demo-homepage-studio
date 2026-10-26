COPY: ok

# hvac-B: critique round 2 (fast mode)

## Five-second test
1440-first.jpg: "Wetbulb, heating and cooling in Houston. My house is cold but sticky, and they want me to check my dew point before I buy anything. I drag two dials, it says 'Damp: dew point over 60', and I can call (713) 555-0105 or book a check with this reading. Why them: they measure before they sell." The h1 now carries both the place and the trade ("Sticky Houston house, cold AC?"), and the chart is now the dominant frame with no filename box beside it.
390-first.jpg: same answer. The h1 runs 2 lines, the sub 2 lines, Call and Book a check sit above the fold, the chart peeks out and the sticky bar is present.

## What changed since round 1
Fixed: no filename strings visible anywhere; the h1 has place and trade; the hero photo column is gone and the instrument is the hero; the decorative row numbers are gone; actions now read "Book a check / Book this check"; the break no longer touches the dark story (services on paper sit between them); the eyebrow is in sentence case; prices is a full-width ledger.
Not fixed: there is **still no photography**. The five slots are still the placeholder files, now dressed as dot-grid gradient panels with reading chips and captions that describe photos nobody can see.

## firstScreen: 8.5
Earned: the signature is the hero at 0%. The h1 has trade + place + problem, the phone is in the header and the hero, the proof line has a Sample label, and the dark story band peeks about 70px (1440-first.jpg). 390-first.jpg is composed.
Deductions:
- 1440-first.jpg: the left column still has a ~180px dead gap between the lead (ends y≈430) and the rating line (y≈615), because the column is stretched to the chart height and the proof + buttons are pushed to the bottom. It reads as a hole, not a choice (−0.5).
- 1440-first.jpg: three filled/outlined actions in one view (Call, Book a check, Book a check with this reading). Noted, not deducted; the tool earns its button.

## distinctiveness: 9
Earned: the Comfort Chart Dot organises the hero (1440-first.jpg), the story path (1440-scroll-25.jpg), every service row icon (1440-scroll-50.jpg), the reviews "four houses, four readings" chart (1440-scroll-75.jpg) and the footer badge (1440-full.jpg). The hvac/C sibling has a different face, palette and hero family. The decorative numbering is gone.
Residual: middle-dot meta strings ("Open now · until 6 pm", "72°F · 48% RH · DP 51") are still frequent, but here they are the instrument's readout voice. No deduction.

## type: 8.5
Earned: the Chivo heavy h1 is a real scale moment (1440-first.jpg). The teal Figtree sub works as a second voice, and the break headline "Ice on the coil…" is set big and well (1440-scroll-50.jpg). The mono readings fit the concept.
Deductions:
- 1440-scroll-75.jpg / 1440-full.jpg: the tracked mono caps labels are still everywhere: YOUR READING, SAMPLE RATING, SAMPLE READING ×3, SAMPLE REVIEW ×4, SERVICE AREA, THE READING LOG, THREE SAMPLE READINGS. Labels get as much weight as the data, which dilutes the instrument voice (−0.5).

## layout: 8.5
Earned: dark story → paper ledger → break → tan sorter → deep reviews → paper area → green prices → paper contact, with no same-tone bands touching (1440-full.jpg). The services ledger and the full-width prices ledger are not template shapes.
Deductions:
- 1440-scroll-25.jpg: in the story, the right column is three ~280px dot-grid panels with nothing in them, and under the sticky chart on the left is ~350px of empty deep green. Half the story frame is texture (−0.5).
- 1440-scroll-50.jpg: the full-bleed break is ~550px of dot-grid gradient with one line of type at the bottom. Without a photo it is an empty slab that only exists to hold a caption (−0.5).
+0.5 for fixing the tonal rhythm.

## photo: 5
Earned: the treatment idea is right. Out-of-band story frames get a wet dark tint with a red reading chip; the in-band frame turns to dry pale mint with a green chip (1440-scroll-25.jpg). Consistent ratios.
Deductions:
- 1440-first.jpg, 1440-scroll-25.jpg, 1440-scroll-50.jpg, 390-full.jpg: no on-topic photograph is visible anywhere on the page. dist/media holds only `placeholder-*.jpg` files; the 8 anchor ("all frames on-topic, alt describes the frame") is not met by any frame.
- 1440-scroll-25.jpg: captions such as "Condensate drain line with added cleanout" and "Condenser coil rinse after dust season" sit on empty dot fields. The page names photos it doesn't show (mustFix).
- No video, though the concept has one.
Still below the floor of 6.

## copy: 9
Earned: concrete, trade-true copy in the homeowner's words ("72 on the wall, 64 in the air", "A dehumidifier on the return", "Do you come out to my street?", "Ice on the coil: the water it pulled from the air, frozen by weak airflow."). The verb family is now consistent: Book a check / Book this check / Book a second-opinion check (1440-scroll-50.jpg, 1440-full.jpg). Sample labels are on the rating, readings, reviews and prices. "Same thermostat. Very different air." is gone.
Residual: "Tick what is true for your system." is repeated as a heading and as a result line in the sorter (1440-full.jpg). Minor; should.

## mobile: 9
Earned: 390-first.jpg is composed, with the h1 on 2 lines, both actions above the fold and a sticky Call / Book a check bar. render.json shows no overflow at 320 or 390, and 390-full.jpg stacks cleanly with no dark-on-dark run.
Residual: 390-full.jpg has nine full-width "Book this check" buttons in the ledger, a long thumb scroll. Should, not deducted.

## a11y: 8.5
Earned: 1440-rm-full.jpg and 390-rm-full.jpg show every word. The chart has role="img" with a title, the status line is aria-live, and forced-colors CSS is present. Heading order is clean (dist/index.html), and static/render checks are clean.
Deductions:
- dist/index.html vs 1440-scroll-25.jpg: the five `<img>` alts describe real photographs ("Multimeter testing run capacitor microfarads", "Frozen evaporator coil from low airflow"), but what renders is a placeholder under a texture. Screen-reader users are told about images that sighted users don't get (−0.5; it resolves itself when real media lands).
- 1440-scroll-75.jpg: the small mono meta on #1B2F2C ("average from 276 reviews", the review tags) is still near the 4.5:1 edge. Verify it.

## motion: 8.5
Earned: the story dot travels from the out-of-band ghosts into the band (1440-scroll-25.jpg), the slider drives the hero dot, and there are hooks for the split h1, the accordion, the sorter, the carousel and the ZIP check (dist/index.html). Reduced motion keeps the final state (1440-rm-full.jpg).
Deductions:
- 1440-full.jpg vs 1440-rm-full.jpg: the lower half (area, prices, contact) looks the same in both captures; it still relies on one shared fade (−0.5). The dot doesn't travel on into the form.

## wow: 8.5
Earned: 1440-first.jpg, where the hero tool plots the visitor's own house with a verdict and the story replays the fix on the same chart.
Deductions:
- 1440-full.jpg #contact: "Book a check with this reading" lands on a form ("What's going on?") that shows no reading. The hand-off the hero promises is invisible, and nothing is left for the homeowner to keep (−0.5).

## polish: 8.5
Earned: SVG favicon, apple-touch icon, OG image, HVACBusiness JSON-LD, print + forced-colors CSS, consistent square radius and 1px rules. The filename strings are gone.
Deductions:
- 1440-scroll-25.jpg: captions naming photos over empty textured panels look unfinished on a sales call (−0.5).

## Arithmetic
14×8.5 + 12×9 + 10×8.5 + 10×8.5 + 8×5 + 8×9 + 7×9 + 7×8.5 + 12×8.5 + 8×8.5 + 4×8.5
= 119 + 108 + 85 + 85 + 40 + 72 + 63 + 59.5 + 102 + 68 + 34 = 835.5 / 100 = **8.36** (8.355)

Photo (5) is below its floor (6) and mustFix is not empty → **FIX**.

## Must
1. **1440-first.jpg (hero), 1440-scroll-25.jpg (story-1..3), 1440-scroll-50.jpg (break), 390-full.jpg**: no real photography. Every `<img>` is `media/placeholder-*.jpg` under a texture. Fix: curate real on-topic hvac frames into `niches/hvac/media/approved` (gauges on a condenser, capacitor/meter, condensate drain with cleanout, coil rinse, iced evaporator coil) and place them with `[[img]]`. The niche library is placeholder-only, so this needs media curation, not the builder.
2. **1440-scroll-25.jpg, `.step-photo` captions + all five alts**: captions and alt text describe photographs that aren't rendered. Fix: once real media lands they become true. Until then, drop the caption strips and set the three panels as pure reading chips (alt="" + aria-hidden on the placeholder), so nothing claims an image that isn't there.

## Should
- **#hero `.hero-copy` (1440-first.jpg)**: ~180px gap under the lead. Fix: `align-content:start` on the column with the proof line + buttons directly under the lead (gap 32px), or make the lead 1 size larger and move the proof under the buttons so the column's bottom edge lines up with the chart's bottom edge.
- **Mono caps labels (1440-scroll-75.jpg, 1440-full.jpg)**: label noise. Fix: keep SAMPLE tags only as the small outlined chip. Set section eyebrows ("THE READING LOG", "SERVICE AREA", "THREE SAMPLE READINGS") in sentence-case Figtree 15px at 70% ink.
- **#story empty column (1440-scroll-25.jpg)**: ~350px of void under the sticky chart. Fix: put the current reading readout (big mono 64°F → 51°F dew point, with the step label) under the chart so the left column carries the change in data.
- **Break band (1440-scroll-50.jpg)**: 550px slab without a photo. Fix: until a real iced-coil frame exists, reduce it to ~320px. When it does, run it full-bleed with the headline on a bottom scrim.
- **#contact (1440-full.jpg)**: the reading from the hero isn't shown. Fix: a read-only "Your reading: 72°F · 75% RH · DP 64 (Damp)" chip at the top of the form, filled from the hero dials, with a "change" link back to #hero.
- **#sorter (1440-full.jpg)**: "Tick what is true for your system." used twice. Fix: the result line starts empty and reads e.g. "2 of 6 point to repair."
- **#reviews (1440-scroll-75.jpg)**: verify small mono meta on #1B2F2C ≥ 4.5:1; raise it to paper at 80% if it's under.
- **Lower-page motion (1440-full.jpg)**: one fade everywhere. Fix: count up the price ranges in #prices and let the ZIP check result plot a dot on a small area map chip; keep #area itself still.

## Elevate
- **photo (5, weakest)**: once real frames exist, make them part of the instrument. Each story photo carries its reading chip and sits under a teal comfort-band duotone while out of band, then clears to full colour as the dot enters the band, so the photo dries out as the reading improves. The current wet/dry tint system is the right skeleton for this.
- **firstScreen (8.5, tied with type/layout/a11y/motion/wow; highest weight)**: make the hero one instrument panel. The headline sits across the top; the chart and dials are the dominant frame; the lead, proof and actions become the panel's left readout column, aligned to the chart's top and bottom rules, with the live dew-point value repeated large in that column. No dead gap, and the reading the visitor sets is what the primary button carries.
