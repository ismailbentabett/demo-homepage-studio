COPY: needs copy-chief

# hvac-B — Critique round 1 (fast mode)

## Five-second test
1440-first.jpg: "A Houston AC / humidity outfit (eyebrow says Houston, AC, heat and humidity). My house is sticky with cold air; they want me to check my dew point on this chart, then call (713) 555-0105 or book a check. Why them: they measure before they sell." The tool answers *why them* better than any slogan. But the right third of the screen is a grey box printing `placeholder-process-gauges`, so the visitor's first impression is "unfinished site".
390-first.jpg: the same answer, h1 on 2 lines plus a 2-line sub, Call and Book a check above the fold, the chart peeking, sticky call bar present. Clean.

## firstScreen — 7.5
Earned: signature visible at 0% (the comfort chart with the dot is the hero tool), phone in header and hero, proof line with Sample rating and open-now, next band peeks ~70px (1440-first.jpg), 390 h1 ≤ 4 lines with both actions above the fold (390-first.jpg).
Deductions:
- 1440-first.jpg: the right hero column is a blank graphite panel with the literal text "placeholder-process-gauges" (−1.0; counted as mustFix under photo, scored here only as the composition hole).
- 1440-first.jpg: the h1 names no trade and no place ("Sticky house, cold air?"); the city lives only in the mono eyebrow (−0.5).
- 1440-first.jpg: the left column has ~170px of dead space between the sub-h1 and the lead, which drops to y≈460 to align with the chart; reads as a gap, not a choice (−0.5).
- 1440-first.jpg: three loud actions in one view (Call, Book a check, Book a check with this reading); noted under Should, not deducted because the tool earns its button.
Net from 8 anchor + signature in hero (+1.0) − 1.5 = 7.5.

## distinctiveness — 8.5
Earned: the Comfort Chart Dot shows in hero (1440-first.jpg), the story (1440-scroll-25.jpg: dot path from sticky to inside the band), every service row icon (1440-scroll-50.jpg), the reviews chart "Four houses, four readings" (1440-scroll-75.jpg) and the footer badge (1440-full.jpg). It organises information, not decoration. Nothing like the sibling hvac-C (hvac/C 1440-first.jpg: condensed display, yellow sun, navy split): different face, palette and hero family.
Deductions:
- AI-slop tells: "01/02/03" numbering as decoration on the story steps and all nine service rows (1440-scroll-50.jpg), middle-dot meta strings ("4.8 ★ · 276 reviews", "Open now · until 6 pm", chip "72°F · 48% RH · DP 51") on nearly every section (−0.5).
- 1440-full.jpg: the full-bleed break band is an empty dark slab, so one of the planned "layout families" contributes nothing (−0.0 here, scored in layout/photo).
8.5 rather than 9: the signature is strong but the section shapes beyond it (left heading / right grid for area, prices, contact) are template-standard.

## type — 8.5
Earned: Chivo heavy with tight tracking for the h1 makes a real scale-contrast moment (1440-first.jpg); Figtree body ≥ 16px at full ink; DM Mono is the declared accent; readings in tabular-looking mono; en-dashes in hours and price ranges (1440-full.jpg prices).
Deductions:
- 1440-first.jpg: 3+ tiny tracked caps labels in one view ("HOUSTON · AC, HEAT AND HUMIDITY", "HEATING & COOLING", "YOUR READING", "SAMPLE RATING", "COMFORT BAND") (−0.5).
- 1440-scroll-75.jpg: mono micro-labels on every review card chip plus "SAMPLE REVIEW" plus "5/5" — label noise dilutes the instrument idea.
Kept at 8.5: hierarchy is clear and the sub-h1 in teal Figtree is a good second voice.

## layout — 7.5
Earned: real grid, a dense section (services ledger 1440-scroll-50.jpg), a quiet section (area), a tan sorter band breaking the paper/dark rhythm (1440-full.jpg), a sticky chart beside the story.
Deductions:
- 1440-full.jpg / 390-full.jpg: the dark story band runs straight into the dark full-bleed break (placeholder "weather-desert-sunset") and its caption — two dark bands touching read as one 2.5-screen dark block (−1.0).
- 1440-scroll-25.jpg: story photo slots are empty graphite rectangles ~315px tall; together with the break band this is a blank run of more than half a screen (−0.5).
- 1440-full.jpg: area, prices and contact are all "heading left / tool right" (same shape 3×) (−0.5).
+0.5 for the services ledger and the tan sorter, which are genuinely non-template.

## photo — 4
Earned: nothing visible. Every photo slot on the page renders as a grey box with its filename: placeholder-process-gauges (1440-first.jpg), placeholder-process-drain-line / multimeter / coil-rinse in the story (1440-scroll-25.jpg), placeholder-weather-desert-sunset in the break (1440-full.jpg, 390-full.jpg). No video despite the concept's video hero.
Deductions: no photography at all, filename strings visible to the visitor (mustFix). "Desert sunset" is also the wrong climate for a Houston humidity story if it ever resolves to that frame (−1.0 risk, check when real media lands). Below the 6 floor.

## copy — 8.5
Earned: concrete, trade-specific and in the homeowner's words: "72 on the wall, 64 in the air", "A dehumidifier on the return", "Do you come out to my street?", "Slime cleared, pans checked for rust, float switches tested". Sample labels on rating, every review, readings and prices (1440-scroll-75.jpg, 1440-full.jpg). The form says honestly that it is a demo.
Deductions:
- 1440-scroll-50.jpg vs 1440-first.jpg: the primary action has several names — "Book a check", "Book a check with this reading", "Price it" (×9), "Get a second opinion", "Send my request" (−0.5).
- 1440-full.jpg: "Same thermostat. Very different air." is a two-beat slogan heading and "Every fix starts with a reading and ends with one." ends the services band on a slogan (−0.5 combined for slogan endings).
- 1440-first.jpg: h1 is a question with no trade noun; the outcome lives in the sub (counted in firstScreen, noted here for the copy-chief).
Net 8.5 → copy-chief.

## mobile — 8.5
Earned: 390-first.jpg is composed (h1 2 lines, sub 2 lines, both actions above the fold, chart peeking, sticky Call / Book a check bar); render.json shows no overflow at 320 or 390; CSS has 640/900/1200 breakpoints so the story pin is desktop-only.
Deductions:
- 390-full.jpg: the story stacks into three tall empty placeholder frames and a placeholder break; on a phone this is ~2 screens of near-black with nothing in it (−0.5, the photo cause is mustFix elsewhere).
- 390-full.jpg: the 9 service rows each carry a full-width "Price it" button — long, repetitive thumb scroll (−0.0, should).
Kept at 8.5; not 9 because no section shows a phone-specific crop decision yet.

## a11y — 8.5
Earned: 1440-rm-full.jpg and 390-rm-full.jpg show every word; the chart has role="img" with a real title; status line is aria-live; forced-colors media query present; one h1, h2/h3 order clean (dist/index.html); static and render checks clean.
Deductions:
- 1440-scroll-75.jpg: mono metadata on the deep band ("Four houses, four readings…", review tags) is small and close to the 4.5:1 edge on #1B2F2C (−0.5, verify with contrast tool).
- Placeholder images expose a filename as their visible content (1440-first.jpg); alt text must describe a real frame once media lands.

## motion — 8.5
Earned: 1440-scroll-25.jpg shows the story dot travelling from the out-of-band rings into the band with ghost positions — motion explains the fix. Hooks beyond reveal: split lines on the h1, story steps, dew-point slider driving the dot, compare, carousel, marquee, accordion, totop (dist/index.html). Reduced motion keeps the final state (1440-rm-full.jpg).
Deductions:
- 1440-full.jpg vs 1440-rm-full.jpg: below the story the frames look identical; areas, prices and contact appear to rely on the same data-reveal (14×) fade (−0.5).
Not 9: the dot does not visibly carry on to the form/footer as the concept promised (the "travels to the booking form" idea stops at the story).

## wow — 8.5
Earned: 1440-first.jpg — the dew-point tool is the hero and plots the visitor's own house with a "Damp: dew point over 60" verdict; the story replays the fix on the same chart (1440-scroll-25.jpg). Tied to the thesis and the trade.
Deductions: the output is a dot and one status line; nothing a homeowner keeps (no readings sheet / print card carrying the chart) and the "Book a check with this reading" hand-off does not visibly show the reading in the form (1440-full.jpg contact) (−0.5 from 9).

## polish — 8
Earned: SVG favicon + apple-touch, OG 1200×630, HVACBusiness JSON-LD, print stylesheet, forced colors, consistent square radius and 1px rules, designed footer (dist/index.html, 1440-full.jpg).
Deductions:
- 1440-first.jpg, 1440-scroll-25.jpg: filename strings printed in tiny green text in five frames — "nothing out of place" fails visibly (−1.0).
+0.5 for the consistency of chips and rules.

## Arithmetic
14×7.5 + 12×8.5 + 10×8.5 + 10×7.5 + 8×4 + 8×8.5 + 7×8.5 + 7×8.5 + 12×8.5 + 8×8.5 + 4×8
= 105 + 102 + 85 + 75 + 32 + 68 + 59.5 + 59.5 + 102 + 68 + 32 = 788 / 100 = **7.88**

Photo (4) is below its floor (6) and mustFix is not empty → **FIX**.

## Must
1. **1440-first.jpg, 1440-scroll-25.jpg, 1440-full.jpg, 390-full.jpg (all 5 photo slots)** — every image is a grey placeholder printing its filename (placeholder-process-gauges, -drain-line, -multimeter, -coil-rinse, -weather-desert-sunset). Fix: approve the hvac media library and place real on-topic frames via `[[img]]` (gauges on a condenser for the hero, coil/drain/meter close-ups for the three story steps, a humid Gulf-coast street or condensation-on-glass frame for the break — not a desert sunset). If real media cannot land, remove the break band and the story photo slots rather than ship filenames.
2. **1440-full.jpg, between #story and the break band** — two dark bands touch and the break is an empty slab. Fix: once the break has a real photo, set the caption strip and the services intro on paper so the order reads deep → photo → paper; or move the break after the services ledger.

## Should
- **#hero h1 (1440-first.jpg)**: no trade or place in the h1. Fix: keep the question but put the place and trade in it, e.g. "Sticky Houston house, cold AC?" with the sub unchanged, so the five-second answer comes from the h1, not the eyebrow.
- **#hero left column (1440-first.jpg)**: ~170px dead gap above the lead. Fix: top-align `.hero-copy` with the instrument (align-self:start) or place the lead directly under the sub-h1 and let the proof line + buttons sit at the instrument's bottom edge.
- **Primary action naming (1440-first.jpg, 1440-scroll-50.jpg)**: "Book a check", "Price it", "Get a second opinion", "Send my request". Fix: one verb family — "Book a check" everywhere a visit is requested; service rows "Book this check"; sorter "Book a second-opinion check"; form submit "Book my check".
- **#services numbering (1440-scroll-50.jpg)** and story "01/02/03": decorative numerals. Fix: drop the row numbers; the mini-chart icon already identifies each row.
- **Tracked caps labels (1440-first.jpg)**: five tiny tracked caps in one view. Fix: keep "YOUR READING" and "SAMPLE" tags only; set the eyebrow and "HEATING & COOLING" lockup in sentence case Figtree.
- **#area, #prices, #contact (1440-full.jpg)**: same heading-left / tool-right shape three times. Fix: set #prices as a full-width ledger with the heading above (no side column), so the three differ.
- **Reveal sameness (1440-full.jpg)**: lower sections all fade. Fix: let price rows count their numbers in (the concept's chip count-up), and keep #area still.
- **#reviews deep band (1440-scroll-75.jpg)**: verify mono meta contrast on #1B2F2C ≥ 4.5:1; raise to paper at 80% if under.

## Elevate
- **photo (weakest, 4)**: make photography part of the instrument. Every story photo gets the reading chip burned into its corner and a teal comfort-band duotone on the out-of-band frames that clears to full colour when the dot enters the band — the photo literally dries out as the reading improves.
- **firstScreen / layout (7.5, firstScreen by weight)**: recompose the hero as one instrument panel: h1 + sub across the top, the chart as the dominant 2/3 frame with the hero photo cropped into the chart's background behind the band, and the lead/proof/actions as the panel's readout column — no separate photo column, no dead gap, signature and place read in one glance.
