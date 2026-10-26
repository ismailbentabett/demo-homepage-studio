COPY: ok (copy 9; no copy mustFix)

# pool-B critique, round 3 (fast mode)

What changed since round 2, checked against screenshots and dist:
- The placeholders are gone. dist/media now holds 8 real webp frames, and every alt describes its frame (dist/index.html). This closes the round-2 mustFix.
- The hero meta strip is now on separate lines: "Closed · opens tomorrow 7:30 am" in teal, then "9 years in Orlando", then "4.8 rating" with a Sample tag (1440-first.jpg, 390-first.jpg).
- The tick tool now has a 6-pad strip ("0 of 6 checked") and an in-balance/out-of-balance gauge under its status line (1440-full.jpg, tick band).
- "Settle" now runs in three places: the story steps, the water-break card and the footer strip. In 1440-full.jpg the story markers sit off-band (pre-settle). In 1440-scroll-50.jpg the same markers sit in the band.
- On the phone, the story cards are shorter crops with the reading overlay as the content (390-full.jpg).
- **The problem now is the photos themselves.** Half the frames are off-topic for an Orlando residential pool service (see Photo below).

## Five-second test
- **1440-first.jpg**: "Clear Reading, a pool service in Orlando. They show me every water reading on a scale next to its ideal range. I tap 'Get a written price' or call (407) 555-0138. They're closed now and open tomorrow at 7:30. They've been here 9 years, and the 4.8 rating is marked Sample."
- **390-first.jpg**: the same answers. The h1 is 3 lines and both actions are above the fold. The report card starts as a sliver at the fold.

## First screen: 9.0
- Earned (1440-first.jpg): a 6-word h1 with trade, city and outcome. One teal primary and an outlined phone button. The proof lines are now clean, not a dotted string. The Visit report gauge card is the signature, and it shows in the first screen. The teal band peeks.
- Held below 10: on the phone the hero is the desktop stack, so the report only peeks (390-first.jpg). The hero photo behind the card is an abstract blue crop that reads as a colour block, not a pool (1440-first.jpg).

## Distinctiveness: 9.0
- The gauge or pad system organises information in the hero (1440-first.jpg), the tick tool's pad strip and balance gauge (1440-full.jpg), the service rows (1440-scroll-25.jpg), the story readout and card overlays (1440-scroll-50.jpg), the water-break "Visit report · after" card, the gallons output (1440-scroll-75.jpg) and the footer's seven-colour strip (1440-full.jpg). It does real work, not decoration.
- Held: the teal solid primary is still the same family as pool-C's.

## Typography: 9.0
- Outfit display against Plex Mono readings. Tabular prices, and "19,200 gallons" as the scale moment (1440-scroll-75.jpg). En-dash ranges. The hero meta is no longer a middle-dot run (1440-first.jpg).
- Watch: "01 · Test" / "04 · Report" story labels (1440-scroll-50.jpg) and the reviewer meta lines (1440-full.jpg) are still mono middle-dot strings. Not deducted.

## Layout and rhythm: 9.0
- 1440-full.jpg: paper → teal tool → paper services → navy story → full-bleed water → white reviews → sand prices → navy area → paper FAQ → sand form → navy footer. There's a dense prices/calculator pair, a quiet FAQ, a full-bleed break and an asymmetric story.
- Held: the story's left column is empty below the sticky readout for most of the section in a static capture (1440-full.jpg). It's acceptable because the readout is sticky in use.

## Photo and video: 6.0
Real photos replace the gradients, and the frame treatment is good: a pad-colour left edge and a reading overlay on each story card (1440-scroll-50.jpg). The frames themselves don't fit the subject. The 6 anchor reads "off-topic frames (commercial, wrong climate), mixed colour temperatures", and that describes this page:
- **Story 04 "A dated report"** (1440-scroll-50.jpg): an industrial plant room with yellow process pipes. It's commercial, not a residential equipment pad. −1.0
- **Water break** (1440-scroll-50.jpg): a tropical resort lagoon with a red timber footbridge and stone walls. It's not an Orlando backyard pool, and it's the largest image on the page. −1.0
- **Area, "Do you come to my street?"** (1440-full.jpg #area): open sea and a far shoreline. It shows no street, no neighbourhood and no pool. −1.0
- **Story 03 "Clean the filter"** (1440-full.jpg story): a small metal-cased cutaway filter on floor tile. It reads as an automotive oil filter, not a pool cartridge. −1.0
- **Story 01 "Test"** (1440-scroll-25.jpg): a heap of empty plastic lab bottles. It's not a pool test kit or a sample vial in hand. It's borderline, so not deducted, but it's weak.
- **Story 02 "Salt cell"** (1440-full.jpg story): a pergola and clubhouse pool. It's on-topic for pools, but no salt cell is in frame, so the caption and the image disagree.
- **Mixed grades** (1440-full.jpg): saturated blue sky (story 02), warm brown tile (story 03), green-cast lagoon (break), cold sea (area). −0.5
- **Hero** (1440-first.jpg): an abstract blue water crop, 80% covered by the card. Fine as texture, but it says nothing.
- Start at 8, minus 4.5, lands below the 6 anchor. Held at the 6 anchor because the frame system (edges, overlays, the after-card on the break) is strong and the hero and tick-tool frames are on-topic.

## Copy: 9.0
- Trade nouns (salt-cell output, filter pressure, "Stained plaster and tile lines cleaned back", 1440-scroll-25.jpg). One primary-action name, "Get a written price", across hero, tool, rows, mobile bar and form (1440-first.jpg, 390-first.jpg). "If a reading is missing, the visit is free." (1440-full.jpg). Honest microcopy (1440-scroll-75.jpg). Sample tags on the report, rating, reviews, prices and licence.
- Watch: the caption "Read the cell, don't guess at it" now sits over a photo with no cell in it (1440-full.jpg). That's charged to Photo.

## Mobile: 8.5
- Earned: no overflow at 320 or 390 (render.json). The h1 is 3 lines, the buttons are full width and the call bar is present (390-first.jpg). The story cards are now shorter crops with the overlay as the content, and the tick tool is restacked (390-full.jpg).
- Held: the hero is still the desktop stack collapsed. The signature report is a sliver at the fold, with "7 of 7 in range" and pH only (390-first.jpg). No phone-specific hero cut yet.

## Accessibility: 9.0
- render.json is clean. The reduced-motion full pages show every word, and the story readout is settled with all four logged (1440-rm-full.jpg, 390-rm-full.jpg). Visible labels on the calculator, price select and ZIP (1440-scroll-75.jpg, 1440-full.jpg). The alts now describe their frames (dist/index.html), so the round-2 −0.5 is lifted. Focus and forced-colors are in dist.

## Motion and interaction: 9.0
- +0.5: the settle idea now runs in three places: the story steps (off-band in 1440-full.jpg, in-band in 1440-scroll-50.jpg), the water-break card and the footer strip (11 `data-settle` hooks in dist). There are split, clip and scale reveals, the estimator, accordion and open-now. Expo easing, no bounce.
- Held below 10: the hero report shows only the settled state in 1440-first.jpg. The one idea a visitor could name does not start in the first screen.

## Wow moment: 9.0
- +0.5: the tick tool's output is now drawn in the signature language, as a pad strip and an in-balance/out-of-balance gauge (1440-full.jpg tick band). It joins the hero report and the gallons gauge (1440-scroll-75.jpg) as tools in the same language.

## Polish: 9.0
- SVG favicon, apple-touch, OG, JSON-LD, theme-color, print and forced-colors in dist. One radius, consistent rules. The footer is a designed close with the pad strip and credits (1440-full.jpg). The unfinished gradient panels are gone, so the round-2 −0.5 is lifted.

## Arithmetic
14×9 + 12×9 + 10×9 + 10×9 + 8×6 + 8×9 + 7×8.5 + 7×9 + 12×9 + 8×9 + 4×9
= 126 + 108 + 90 + 90 + 48 + 72 + 59.5 + 63 + 108 + 72 + 36 = 872.5 / 100 = **8.73** (8.725)

Fast mode allows 2 rounds, and this is round 3. Weighted is below 8.8 and Photo is below its 8.0 pass mark, so I expect **NEEDS_HUMAN**.

## Must
None. The placeholder mustFix is closed. The off-topic frames are a Photo score problem, not a demo-rule breach: no faces, logos, plates or "our work" captions.

## Should
1. **#story step 04 image** (1440-scroll-50.jpg): an industrial plant room. Fix: replace it with a residential equipment pad (pump, filter tank and heater on a concrete slab beside a house wall) from the niche library. If none is approved, curate one.
2. **Water break** (1440-scroll-50.jpg): a tropical resort lagoon with a timber bridge. Fix: replace it with a screened-lanai or backyard pool in clear turquoise water, Florida light, no people. It's the largest frame on the page, so it matters most.
3. **#area image** (1440-full.jpg): open sea for "Do you come to my street?". Fix: use a Central Florida residential street or a roofline-and-palms neighbourhood frame with no house numbers. Or drop the photo and draw the 7 towns as pad-coloured chips on a simple map plate.
4. **#story step 03 image** (1440-full.jpg): an automotive-looking cutaway filter. Fix: use a pleated pool cartridge (large white pleats, end cap) or a pool filter pressure gauge close-up.
5. **#story step 01 image** (1440-scroll-25.jpg): a pile of lab bottles. Fix: use a hand holding a pool test vial or a test strip against a colour chart, or a DPD kit on a pool deck.
6. **#story step 02 image** (1440-full.jpg): no salt cell in frame. Fix: use a salt cell or salt-system control box, or change the step's image to one that shows its subject.
7. **One grade** (1440-full.jpg): after the swaps, apply a single grade across all 8 frames (slight teal shadow, neutral highlights, matched saturation) so the set reads as one shoot.
8. **Mobile hero** (390-first.jpg): carried from round 2. Under 640px, show a compact 3-row report (pH, chlorine, "7 of 7 in range") straight under the buttons, and keep the full card lower.
9. **Hero settle** (1440-first.jpg): the hero report markers should start off-band and settle once on load, under 1.2 s, so the motion idea begins in the first screen.

## Elevate
- **Photo (6.0)**: art-direct the 8 frames as one Orlando week: test (vial in hand), salt cell, cartridge, equipment pad, then the clear backyard pool as the "after" on the full-bleed break. Each frame should show exactly what its overlay reading measures. The reading overlays and pad-colour edges then point at evidence, not at a random picture. One grade across all eight.
- **Mobile (8.5)**: re-cut the phone page around the report. Put a 3-row live report right under the CTAs (settling on load), stack the story as reading-first cards where the number leads and the photo is a short strip, and show the tick tool's pad strip before its checkboxes. Every phone section then makes a visible density decision.
