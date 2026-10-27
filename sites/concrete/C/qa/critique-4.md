COPY: ok

# Critique Round 4: concrete-C (Red Grit Concrete), final round

render.json: 10 shots, no errors, no overflow at 320/390. static.json: 0/0. All three round-3 mustFix items are fixed on screen: the broken images are gone (dist has no `<img>`; the frames are drawn plates with role=img labels), the inactive story steps are readable, and the BM-04 caption is in ink. All five round-3 Should items are also fixed: the mobile bar no longer covers the ZIP card, there is one CTA name, "Neighbors", sans town labels, and the break caption is rewritten.

## Five-second test
- **1440-first.jpg:** "Concrete company in Colorado Springs that builds for clay and frost. Call (719) 555-0133 or price my slab. Map of the towns they pour in, with a ZIP check right there." Answered in under 3 s.
- **390-first.jpg:** same h1 in 3 lines, Call + "Price my slab" + Sample-rated proof line, and the ZIP card starts in view with nothing on top of it.

## firstScreen: 9.0
Earned: an 8-word h1 with trade, city and outcome, one loud primary and a quiet secondary, and the phone shown twice. The signature works in the hero (contour map, pins, legend-style ZIP card), and the next band peeks.
Holding back 9.5: the EL pill, the kicker line, "SHEET 01 / 10" and the legend rows are still a mono stack competing with the h1 (1440-first.jpg).

## distinctiveness: 9.0
Earned: the elevation climb runs from 6,035 to RIDGE 7,800, with contours everywhere, the altimeter rail, the ridge break and the footer ridge. Review cards now carry town pins (1440-rm-full.jpg). Face, palette and hero family all differ from concrete/A and concrete/B.
Deduction: the mono micro-label + middle-dot meta on every band is a template tell (−0.5), offset by the lens story, spec ledger and ridge break.

## type: 8.5
Earned: a strong Young Serif display, Figtree body and the DM Mono accent. Curly quotes, en-dash ranges and a display "4.9".
Deduction: 1440-first.jpg has 6+ tiny tracked mono caps in one view (EL pill, kicker, SHEET 01/10, YOUR ZIP CODE, 3 legend rows, SAMPLE RATING): −0.5.

## layout: 9.0
Earned: 11 bands with no two darks touching, the asymmetric ledger + sticky price sheet (1440-scroll-50.jpg), the dense spec ledger, a full-bleed break and a quiet contact band.
Note: reviews are still a staggered 3×2 grid (1440-rm-full.jpg), the one generic shape. The blank areas in 1440-full.jpg are capture artifacts (the pin spacer and unrevealed content in the motion-on full-page shot); the scroll frames work, so no deduction.

## photo: 8.5
Earned: no broken glyphs or alt-text paint left. BM-02 lens (1440-scroll-25.jpg), BM-03 rebar plate and BM-04 ridge (1440-rm-full.jpg) form one drawn plate series with crop marks and numbered captions. The stock placeholders are temporary, so I judged the drawings on their merit.
Holding at 8.5: nothing on the page shows a finished slab, so the trust a real job photo gives a homeowner is missing.

## copy: 9.0
Earned: specific trade language, every fact traces to facts.json, and Sample labels are on the rating, price, reviews, licence and promise. There is one action name, "Price my slab" (14 uses: hero, rows, contact kicker, footer). "Neighbors" is fixed, and the BM-04 caption now describes the drawing.

## mobile: 9.0
Earned: on 390-first.jpg the mobile bar is hidden at load, so the ZIP card is clear. There is no pin under 900px and no overflow, and the price sheet, spec ledger and reviews stack cleanly (390-rm-full.jpg).

## a11y: 9.0
Earned: on 1440-scroll-25.jpg the inactive steps are full-contrast and the active step is shown by the accent rule + YOU ARE HERE pill, not by dimming. The BM-04 caption is in ink on the snow fill. The plates carry descriptive aria-labels. The reduced-motion pages show everything.

## motion: 9.0
Earned: the pinned freeze-thaw lens, the altimeter rail easing per band, the ridge scrub and the hero contour/pin intro.
Holding: the lower bands share one generic reveal.

## wow: 9.0
Earned: three connected tools (lens story, damage reader with drawn glyphs, price sheet with slab plan and Print).
Holding: the damage-reader result card (1440-scroll-75.jpg) is a neutral dashed box outside the signature language.

## polish: 9.0
Earned: one rule weight, one icon stroke and a designed ridge footer. The head has favicon, OG, JSON-LD and print.
Minor: the "¼ in./ft" slope label in the price-sheet plan is tiny and crowds the slab outline (1440-scroll-50.jpg).

## Arithmetic
14×9.0 + 12×9.0 + 10×8.5 + 10×9.0 + 8×8.5 + 8×9.0 + 7×9.0 + 7×9.0 + 12×9.0 + 8×9.0 + 4×9.0
= 126 + 108 + 85 + 90 + 68 + 72 + 63 + 63 + 108 + 72 + 36
= 891 / 100 = **8.91**

## Must
None.

## Should
1. **where:** 1440-first.jpg, the hero ZIP card. **problem:** "SHEET 01 / 10" plus three mono legend rows add to the mono wall. **fix:** drop "SHEET 01 / 10" and set the legend rows in Figtree 13px sentence case ("Contour, 40 ft interval").
2. **where:** 1440-scroll-50.jpg, the price-sheet plan. **problem:** the "¼ in./ft" label is tiny and touches the slab outline. **fix:** move it outside the slab rectangle with 8px clearance and set it at ≥ 12px.
3. **where:** 1440-scroll-75.jpg, the damage-reader result card. **problem:** a dashed neutral box that sits outside the contour/elevation language. **fix:** frame the result as a benchmark plate (BM number, crop marks, the matching symptom glyph drawn large).
4. **where:** 1440-rm-full.jpg, #reviews. **problem:** a staggered 3×2 card grid is a generic shape. **fix:** put the cards on the contour field, each anchored by a leader line from its town pin to a small inset map, so the hero map returns here.

## Elevate
1. **type (8.5, weight 10):** give the mono one job: the survey instrument (EL pills, BM numbers, the rail). Move every other small label to Figtree small caps or sentence case, so the mono means "elevation" whenever it appears.
2. **photo (8.5, weight 8):** when the real library lands, make the photos plates in the same BM sequence: duotone pine → granite red, masked in the existing crop-mark frames with contour lines over them, so the series ends on a real finished driveway in the brand's ink.
