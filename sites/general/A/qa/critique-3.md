COPY: needs copy-chief (copy 8.5: the primary action has five different names)

# Critique: general-A (Round 3, final, fast mode)

**Five-second test.** 1440-first.jpg: "A Nashville general contractor (from the eyebrow) that runs remodels and additions on a 20-week schedule and sends a report every Friday. Call, or price an addition. Why them: I always know which week I'm in." 390-first.jpg gives the same read: the h1 takes 4 lines and both actions sit above the fold. The trade and the city come from the small mono eyebrow, not from the h1.

Note on calibration: round 2 named no screenshots and gave a flat 9 everywhere. This round re-scores from the evidence, so some categories sit 0.5 lower. Nothing broke between rounds. The lower scores are corrections.

## First screen: 8.5
- Earned: the signature is in frame at 0% (a 20-tie track with a TODAY WK 06 marker). There is one amber primary and a quieter outlined secondary. The phone number shows in the header and in the hero. The proof line carries SAMPLE RATING (1440-first.jpg).
- −0.5: the h1 runs 9 words and names neither the trade nor the place. "General contracting · Nashville, TN" appears only in the eyebrow (1440-first.jpg).
- −0.5: the next band peeks about 15px at 1440 and not at all at 390 (1440-first.jpg, 390-first.jpg). The signature track partly makes up for this.
- The proof line floats about 90px below the buttons in dead space (1440-first.jpg).

## Distinctiveness: 9
- The crosstie system shows up in 7 places: the hero, the pinned story, the break, the service rails, the review tie-heads, the timeline tool and the footer WK 20 plate (1440-full.jpg). It does real work: it orders the story, it is the break's content, and it frames the tool. The siblings (B, a ledger sheet in a serif and sans; C, a contour map on navy) share nothing with it.
- Held at 9 because of tells. Mono micro-labels sit on nearly every block. Decorative 01/02/03 numbering appears in the promise row, services 01-08, reviews 01-06 and the contact steps (1440-scroll-50.jpg, 1440-scroll-75.jpg).

## Typography: 8.5
- Earned: Barlow Condensed display with a real scale-contrast moment ("20 TIES. 20 FRIDAYS. ONE HOUSE.", 1440-full.jpg). Work Sans body at full ink. Tabular DM Mono prices and hours with en-dash ranges.
- −0.5: 1440-scroll-25.jpg holds 10+ tiny tracked caps labels in one view (SHEET 03, FOOTING SECTION, WK 06, DONE, TODAY, NEXT, FROM YOU, WALLS BEAMS ROOF FRAMING…).
- The hero tie numbers and report-thumb captions are .6875rem (11px), under 13px (1440-first.jpg bottom track).

## Layout and rhythm: 9
- 1440-full.jpg: 12 sections, and no two neighbours share a tone. There is a full-bleed break, an asymmetric pinned story, a dense ledger and a quiet checklist. Section gaps are larger than the gaps inside sections.
- Minor: under each report list in the story the right column is empty for about 200px (1440-scroll-25.jpg). On the phone, six review cards stack in full (390-full.jpg).

## Photo and video: 9 (drawn treatments judged on merit)
- One line weight, one grid and one amber accent run across the hero elevation, the SHEET 01/03/06/18 plates and the report thumbnails (1440-scroll-25.jpg, 1440-full.jpg). They read as one set and as a plan → work → result sequence. Nothing is broken or blank.
- Not higher: the hero elevation is a stock gable-house diagram.

## Copy: 8.5
- Earned: real trade nouns (dust wall, sill plate, doubled header, rough-in, punch list). The honest "Real tracks are written after we walk the house" line. Every review, price, rating, guarantee and licence carries a Sample label (1440-full.jpg). No em dashes.
- −0.5: the primary action goes by five names: "Price an addition" (1440-first.jpg), "Get a number" (390-first.jpg bar), "Price this job" (1440-scroll-50.jpg), "Get my real track" and "Get my number" (1440-full.jpg).
- The Done / Next / From you trio is explained three times: in the promise, in the story rows and in the report tabs (1440-full.jpg).

## Mobile: 9
- 390-first.jpg: h1 in 4 lines, both CTAs above the fold, sticky bar. 390-full.jpg: the story becomes stacked ties with no pin, and the tools and form go single-column with full-width rows.
- Minor: the six review cards add about 1900px of scroll. The hero track's "01" is clipped at the left edge (390-first.jpg).

## Accessibility: 9
- 1440-rm-full.jpg and 390-rm-full.jpg show every section, tie, report card, tool and review.
- render.json reports no errors and no overflow at 320 or 390.
- Headings: one h1, then h2 and h3 with no skips. Forced-colors and print media queries are present.

## Motion and interaction: 9
- 1440-scroll-25.jpg: the today-line has scrubbed down the rail. WK 06 shows its DONE stamp and the TODAY marker sits on the rail, so the motion explains order. The timeline-tool bars stagger like a Gantt chart. There is one hairline hover language.
- Not higher: the hero track is static after the intro, and the today-line glows.

## Wow moment: 9
- The line crossing the ties and stamping DONE is the thesis in motion. "How long will mine take?" gives an answer a homeowner would keep (1440-full.jpg).
- Not 10: the tool output is a plain bar chart, not ties on the track.

## Polish: 8.5
- Earned: radius held at 1-2px, consistent rules, a designed footer close, a print stylesheet.
- −0.5: the Friday report card in the amber band has a drop shadow, but it is not a floating element (1440-full.jpg).
- The today-line has an amber glow.

## Arithmetic
14×8.5 + 12×9 + 10×8.5 + 10×9 + 8×9 + 8×8.5 + 7×9 + 7×9 + 12×9 + 8×9 + 4×8.5
= 119 + 108 + 85 + 90 + 72 + 68 + 63 + 63 + 108 + 72 + 34 = 882 / 100 = **8.82**

## Must
None. There are no DEMO-RULES breaches (every proof item is Sample-labelled), nothing is hidden in reduced motion, and there is no overflow.

## Should
1. **Hero h1** (#hero-h, 1440-first.jpg): no trade and no place. Fix: put city and trade in the h1, e.g. "Nashville additions, week 1 to week 20." with "A report every Friday." as the lead line. Keep it to 8 words or fewer.
2. **Hero peek** (1440-first.jpg): the paper band shows 15px. Fix: cap the hero at about 88svh so the next band peeks 60-80px. Close the gap between the buttons and the proof line to 24px.
3. **Primary action name** (sitewide): pick one, "Get a number". Use it in the hero secondary, the mobile bar, the service links ("Get a number for this job" is acceptable), the timeline CTA and the cost CTA.
4. **Tiny labels** (.htrack__ties span, .plate--thumb figcaption, .ts__marker at .6875rem): raise them to .8125rem. In the story ties, drop the tracked-caps sub-label under each h3 (e.g. "WALLS, BEAMS, ROOF FRAMING") or set it in sentence case.
5. **Decorative numbering** (promise row 01-03, services 01-08, reviews 01-06): keep the numbers only where they are week numbers. On services, replace them with the typical week span; on reviews, delete them.
6. **Report card shadow** (#report card in the amber band, 1440-full.jpg): remove the 0 18px 40px shadow and use a 1px ink border.
7. **Mobile reviews** (390-full.jpg): show 3 reviews plus a "More Friday notes" disclosure, or a scroll-snap row, to cut about 1000px.
8. **Repeated trio**: the promise section and the report tabs explain Done / Next / From you twice. Give the promise section a different job, for example what arrives on Friday and in what format.

## Elevate
- **First screen**: make the h1 the track's first tie. City and trade carry the week count, the proof line is bolted to the hero tie like a spike plate, and the paper band peeks below the track so the signature becomes the threshold into the page.
- **Typography**: give DM Mono one job only, week numbers and figures. Phase names and sheet titles move to Barlow Condensed at one small size. Every repeating tracked-caps sub-label goes. The stencilled week numbers become the only small voice on the page, and nothing is under 13px.
