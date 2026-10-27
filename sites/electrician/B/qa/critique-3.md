COPY: ok

# Critique: electrician-B (Round 3, final)

Note on calibration: the round 2 critique scored from the CSS and inferred the 390 view ("inferred from responsive CSS"). This round is scored from the screenshots. Several scores move down because the screenshots show things the code reading missed. These are not regressions caused by fixes.

## Five-second test
1440-first.jpg / 390-first.jpg: "An electrician in San Antonio. They label every breaker in my panel when they're done. I can tap Price it or call (210) 555-0111. They're open now until 6 pm and drive out to Boerne." All four questions are answered on both viewports. The panel-schedule card on the right says "electrician" before you read a word.

## First screen: 9.0
- 1440-first.jpg: the h1 runs 3 lines and ends on "panel schedule." in amber. There is one amber primary (Price it) and an outlined secondary (Call), and the phone shows in the header. The proof line carries hours, area and a 4.8 rating marked SAMPLE RATING. The cream band peeks about 57px. The panel-schedule mosaic (01–10, with 10 as a SPARE) puts the signature on the first screen.
- 390-first.jpg: the h1 is 3 lines, both CTAs sit above the fold, and the schedule card starts peeking at the bottom. Good.
- Deduction: the h1 "San Antonio electrical work, written into your panel schedule" is 9 words (−0.5 against the ≤ 8 rule). Without it this would be a 9.5.

## Distinctiveness: 8.5
- Earned: the signature does real work. You see it in the hero mosaic (1440-first.jpg), in the services rail with C-01…C-09 handles and the "CIRCUITS LABELED 06 / 09" meter (1440-scroll-25.jpg), and in the C-09 tag on the live-oaks break, C-03 on the outage drawing and C-05 on the EV drawing. It also files the reviews as R-01…R-06 (1440-scroll-75.jpg), numbers the circuit column of the pricing ledger, and sets a MAIN toggle in the footer (1440-full.jpg). That is far more than 4 sections.
- Deduction (−0.5): next to sibling A (electrician/A 1440-first.jpg) the family resemblance is strong. Both use a near-black field with an orange/amber accent and tracked mono caps. Both put text on the left and a framed line drawing on a grid on the right. Both use the same headline formula, "<City> electrical work, <participle> …". The palettes do not "unmistakably differ".
- Deduction (−0.5): the same section shape repeats. The trip tool, the services, the outage tool, the EV tool (mirrored) and the contact block are all "heading left, panel right" splits.
- Signature logic breaks in the pricing ledger (1440-full.jpg, pricing). There, Generator interlock is C-02, Standby C-03, EV C-04 and Surge C-05. In the hero and services they are C-03, C-04, C-05 and C-07. A schedule whose numbers change between sections undercuts the thesis. This is a Should, not a separate deduction.

## Typography: 8.5
- Earned: Oswald, Karla and DM Mono (listed as accent) are used with clear roles. The display is tight with good leading (1440-first.jpg). The reviews quote set in Oswald at display size (1440-scroll-75.jpg, R-03) is a good scale-contrast moment. The pricing ledger uses mono tabular figures. The lead paragraphs are set apart. Quotes are curly and ranges use en-dashes ("40–50 A", "$900–$1,900").
- Deduction (−0.5): there are 3+ tiny tracked caps labels in one view. 1440-scroll-50.jpg shows TOOL · OUTAGE PLAN, MUST STAY ON, WATTS, PORTABLE, STANDBY, the C-03 caption and SAMPLE PRICING. 1440-first.jpg shows the nav, the kicker, PANEL SCHEDULE, MAIN · ON and TYPED AT THE VAN · T&T · SHEET 1 OF 1.
- Minor: in the status band at 1440 (1440-full.jpg, Hours cell), "Mon–Fri 7 am–6" breaks with "pm" alone on the next line. The number and unit need a non-breaking space.

## Layout and rhythm: 9.0
- Earned: 12 bands, each with one job. Tones alternate cleanly: deep, paper status, mid tool, deep services, gridded paper break, full amber tool, paper EV, deep reviews, paper ZIP, mid ledger, deep contact, mid footer with an amber rule (1440-full.jpg). The full-bleed live-oaks illustration is a real quiet breath. The amber outage band is a loud break. The pricing ledger is the dense section. The ZIP check is the quiet centered one. Gaps between sections are larger than gaps within them.
- Minor: the R-05 card (1440-scroll-75.jpg) is a 2-line quote in a tall cell, about 40% empty. The 1440 hero leaves about 140px of dead dark space above the kicker (1440-first.jpg). Neither is a rule deduction.

## Photo and video: 8.5 (drawn treatment, stock pending)
- No photography on the page. Every image is a single-weight line drawing on a drafting grid, framed with a C-xx tag: the services panel door, the live-oaks house, the outage inlet and transfer switch, the EV charger (1440-full.jpg, 1440-scroll-50.jpg). One hand and one stroke throughout, so it reads as one set. They are tied to the signature by the circuit tags.
- Holding at 8.5: the drawings are simple, and the car in the EV frame is crude (1440-full.jpg, EV section). Nothing is broken or blank.

## Copy: 9.0
- Earned: trade nouns throughout: "every lug torqued to spec", "rated connectors at each device", "inlet, interlock, transfer switch", "Most Level 2 chargers want their own 40–50 A circuit", and "The main breaker size is printed on the biggest breaker at the top of your panel" (1440-full.jpg). There is microcopy at every moment of doubt: the trip tool's "If a breaker trips the moment you reset it, leave it off and call us", the ZIP line "The answer shows right here", and the form's "We call you back to set up a visit. This demo sends nothing." The action family is consistent: Price it, Price this repair, Price an interlock, Price an EV charger. Every review and price row is Sample-labelled (1440-scroll-75.jpg, 1440-full.jpg pricing).
- Deduction (−0.5): the pricing intro reads "Ranges from recent San Antonio jobs" (1440-full.jpg, pricing). That claims a job history that facts.json does not hold. The prices are Sample-labelled, so this is not a mustFix, but the line should not claim past work.
- "Open now · until 6 pm" appears three times: the hero proof line, the status band and the contact block (1440-full.jpg). It is useful but heavy.

## Mobile: 9.0
- 390-first.jpg: the h1 is 3 lines and both actions are above the fold. The schedule is re-cut into a compact two-column list rather than squeezed. 390-full.jpg: the status band stacks into a ruled list, the trip-tool chips wrap to thumb-sized targets of 48px or more, the outage tool stacks drawing then checklist, and the pricing table re-flows. There is no sideways scroll (render.json overflow at 320 and 390 is clean).
- Not 9.5: the sticky Call / Price it bar already shows on 390-first.jpg. With the header Price it and the two hero CTAs, that makes 5 buttons on one phone screen saying the same two things.

## Accessibility: 9.0
- 1440-rm-full.jpg and 390-rm-full.jpg match the motion-on full pages section for section: all text, tool panels, review cards and the ledger are present. Every input has a visible label (ZIP "YOUR ZIP CODE", form "Service"). The tool states are written in words, not colour alone (the circuit tag card and the WATTS readout). Contrast on the charcoal, mid and cream bands reads as AA in the shots. The red kicker on cream (SERVICE AREA, TOOL · PANEL CAPACITY) is the weakest pair and worth checking at its size.

## Motion and interaction: 9.0
- 1440-scroll-25.jpg shows the motion explaining something. The services rail is pinned on the left, with a "CIRCUITS LABELED 06 / 09" meter filling as the circuit handles to the right flip ON. That is the thesis ("the schedule fills itself in as you scroll"), visible mid-scroll. There are more hooks than plain reveals: the progress meter, the handle flips, the watts count-up with the portable/standby scale (1440-scroll-50.jpg), the circuit-tag output and the ZIP live result. The reduced-motion shots show a complete static state.
- Not 9.5: the hero mosaic is already fully ON at 0 ms (1440-first.jpg), so the first screen never shows the flip. The single idea a visitor would describe only starts in services.

## Wow moment: 9.0
- The Breaker-keeps-tripping sorter returns a "CIRCUIT TAG" card styled as a breaker label (1440-full.jpg, trip tool). The outage tool returns watts against a portable/standby scale. Both are things a homeowner would use, and both answer in the signature's language. Together with the filling schedule this is close to the 10 anchor. What holds it back is that the outputs are not printable or keepable as a typed schedule sheet.

## Polish: 9.0
- One 2px radius everywhere. One line weight across all drawings. The footer is designed: a MAIN toggle next to the wordmark, the licence marked SAMPLE LABEL, and the "Sample website" line (1440-full.jpg footer). The Sample tags share one style. The amber rule above the footer closes the page. The pricing numbering mismatch is listed under Distinctiveness and not charged twice.

## Arithmetic
14×9.0 + 12×8.5 + 10×8.5 + 10×9.0 + 8×8.5 + 8×9.0 + 7×9.0 + 7×9.0 + 12×9.0 + 8×9.0 + 4×9.0
= 126 + 102 + 85 + 90 + 68 + 72 + 63 + 63 + 108 + 72 + 36
= 885 / 100 = **8.85**

## Must
None. static.json and render.json are clean. Every review, price and the rating carry Sample labels, and the reduced-motion shots show all content.

## Should
1. **#pricing ledger, circuit column (1440-full.jpg).** Problem: the numbers contradict the hero and services schedule (interlock C-02 vs C-03, standby C-03 vs C-04, EV C-04 vs C-05, surge C-05 vs C-07). Fix: use the schedule numbers: Panel replacement C-01, Generator interlock and inlet C-03, Standby generator C-04, EV charger installation C-05, Whole-home surge protector C-07.
2. **Hero h1 (1440-first.jpg).** Problem: 9 words. Fix: "San Antonio wiring, written into your panel schedule." (8 words). Keep "panel schedule." in amber.
3. **#pricing intro (1440-full.jpg).** Problem: "Ranges from recent San Antonio jobs" claims job history not in facts.json. Fix: "Typical San Antonio ranges. Your number comes after we see the panel."
4. **Status band, Hours cell (1440-full.jpg).** Problem: "6 / pm" breaks across lines. Fix: put `&nbsp;` between each number and "am" or "pm", and either widen the Hours column or set `white-space: nowrap` on each range.
5. **Mono caps density (1440-scroll-50.jpg, 1440-first.jpg).** Problem: 5–7 tracked mono caps labels per view. Fix: keep DM Mono caps only for circuit numbers (C-xx, R-xx) and the hero schedule. Set the tool kickers ("TOOL · OUTAGE PLAN"), "MUST STAY ON", "PORTABLE / STANDBY" and "YOUR ZIP CODE" in Karla 14px sentence case.
6. **Mobile bar timing (390-first.jpg).** Problem: the sticky Call / Price it bar shows over the hero, which already has both actions, giving 5 CTAs in one view. Fix: show `.mobile-bar` only once the hero CTA row has left the viewport (IntersectionObserver on the hero actions).
7. **R-05 review card (1440-scroll-75.jpg).** Problem: a 2-line quote in a tall cell leaves about 40% empty. Fix: swap R-05 into the narrow column and R-06 into the wide one, or let that row size by content (`align-items: start`).
8. **Hero mosaic at 0 ms (1440-first.jpg).** Problem: every slot is already ON, so the first screen never shows the flip. Fix: start slots 06–09 OFF and flip them ON in sequence within the first 1.2 s. Reduced motion shows all ON.

## Elevate
1. **Distinctiveness (8.5).** Separate from Lineside by changing the material, not the colour of the accent. Make the hero schedule a cream label card (paper stock, typed DM Mono entries, one hand-ruled strike-through on the SPARE slot) fixed to the charcoal panel door. Use that same cream label stock as the one frame for everything numbered: the C-xx drawing tags, the trip tool's circuit-tag output, the pricing rows and the footer MAIN slot. Keep one numbering (C-01…C-10) from hero to footer. "The cream label on the dark door" then becomes the site's one-sentence identity, which A's blueprint grid cannot share.
2. **Typography (8.5).** Give Oswald one scale moment no sibling has, and narrow the mono to one job. In the live-oaks break, set "09" at about 22vw in the Oswald display as the breaker number the headline refers to, with the sentence set against it. Make DM Mono the voice of the schedule only (circuit numbers, typed labels). Every other kicker becomes Karla sentence case, so the typed labels read as the panel's own writing rather than as page decoration.
