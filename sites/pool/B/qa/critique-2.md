COPY: ok (copy 9: one primary action name, tricolon footer gone; the "Placeholder for …" alt strings are counted under the Photo mustFix)

# pool-B critique, round 2 (fast mode, last round)

What changed since round 1, checked against screenshots and dist:
- The primary action now has one name, "Get a written price", in the hero, mobile bar, service rows and form (1440-first.jpg, 1440-scroll-25.jpg, 390-first.jpg). It appears 12× in dist.
- The footer headline is now "If a reading is missing, the visit is free." (1440-full.jpg).
- Buttons are set in Outfit, not mono (1440-first.jpg).
- The #story left column is now a live readout. At 1440-scroll-25.jpg only "Water tested" is logged. At 1440-scroll-50.jpg all four rows are logged and their markers sit in the band. The empty navy half is gone.
- Story cards and the water break carry reading overlays (pH 7.5, 3200 ppm, 18 psi, 7 of 7) and colour edges (1440-scroll-50.jpg). That is the round-1 photo elevate move, but it sits on gradients.
- Eyebrows are down to a few (PRICES, REVIEWS, the tick tool and FAQ labels), not one over every h2 (1440-full.jpg).
- **Not changed:** dist/media/*.jpg are still 122-byte placeholders, and every alt still reads "Placeholder for …" (dist/index.html). The niche manifest itself is all placeholders.

## Five-second test
- **1440-first.jpg**: "Clear Reading, a pool service in Orlando. Every visit, I see each water reading on a scale next to its ideal range. I tap 'Get a written price' or call (407) 555-0138. It's open now, they've been here 9 years, and the rating is marked Sample."
- **390-first.jpg**: the same answers. The h1 runs 3 lines, both actions sit above the fold, the call bar shows, and the top of the report card peeks in.

## First screen: 9.0
- Earned (1440-first.jpg): a 6-word h1 with trade, city and outcome. One teal primary and an outlined phone button. A proof line with a Sample tag. The Visit report gauge card is the signature, and it shows in the first screen. The teal band peeks about 64px.
- 390-first.jpg: the h1 is 3 lines, both actions are above the fold, and the phone shows in the header and the bar.
- Held at 9: the panel behind the report is a teal gradient, not water (1440-first.jpg). That cost is charged to Photo.

## Distinctiveness: 9.0
- Earned: the gauge scale organises information in the hero (1440-first.jpg), the service rows (1440-scroll-25.jpg), the story readout and card overlays (1440-scroll-50.jpg), the "Visit report · after" pads on the water break (1440-scroll-50.jpg), the gallons output (1440-scroll-75.jpg) and the footer (1440-full.jpg). The label and type are now clearly apart from pool-C's almanac (sites/pool/C/qa/screens/1440-first.jpg).
- Still: the teal solid primary is the same family as pool-C's. The remaining eyebrows (PRICES, REVIEWS) are fine at this count.

## Typography: 9.0
- Earned: Outfit display with tight tracking against IBM Plex Mono for readings. Tabular mono prices and the big "19,200 gallons" as the scale-contrast moment (1440-scroll-75.jpg). En-dash ranges. Buttons are back in the sans (1440-first.jpg). dist now has nowrap on the hour ranges.
- Watch: the hero meta strip "Open now · until 5:30 pm · 9 years in Orlando · 4.8 rating" is a middle-dot mono string (1440-first.jpg). The same pattern recurs in the story labels "04 · Report" (1440-scroll-50.jpg). Not deducted yet.

## Layout and rhythm: 9.0
- Earned (1440-full.jpg): paper → teal tool → paper services → navy story → full-bleed water → white reviews → sand prices → navy area → paper FAQ → sand form → navy footer. The #story left column now carries the progress readout, so no half-screen sits empty (1440-scroll-50.jpg). There is a dense prices/calculator pair and a quiet FAQ.
- Watch: the reviews band still ends with the guarantee strip (1440-full.jpg). It's acceptable as an inset bar.

## Photo and video: 6.0 (mustFix)
- Still no photography. All 8 images are 122-byte placeholders rendered as teal and green gradients: the hero panel (1440-first.jpg), the tick-tool side (1440-full.jpg), four story cards and the full-bleed break (1440-scroll-25.jpg, 1440-scroll-50.jpg), and the area image as a blurred sky over a green field (1440-full.jpg, 390-full.jpg).
- +0.5 over round 1: the hatching is gone, and the reading overlays and colour edges make the frames read as intentional water-tone panels (1440-scroll-50.jpg). The frame treatment is now ready for real photos.
- Alt still reads "Placeholder for hero-B1" and the other slot names (dist/index.html). The mustFix stands and caps the category.

## Copy: 9.0
- Earned: trade nouns throughout (salt-cell output, filter pressure, "Stained plaster and tile lines cleaned back", 1440-scroll-25.jpg). One name for the primary action. The footer close is a promise taken from the guarantee, not a tricolon (1440-full.jpg). "Your exact number comes after the first reading" is honest microcopy (1440-scroll-75.jpg). Sample tags are on the report, rating, reviews, prices and the price readout.
- Watch: "Owners who finally understand their own pool." leans slightly toward a marketing line (1440-full.jpg).

## Mobile: 8.5
- Earned: no overflow at 320 or 390 (render.json). The h1 is 3 lines and the buttons are full width (390-first.jpg). Services, tick tool and calculator are restacked (390-full.jpg).
- Held: the hero is the desktop stack collapsed, not re-cut. The report card starts below the fold as a sliver (390-first.jpg). Story cards are the same tall gradient frames stacked at full height (390-full.jpg), so the phone has no phone-specific density decision.

## Accessibility: 8.5
- Earned: render.json has no errors. The reduced-motion full pages show every word, and the story readout is in its settled state (1440-rm-full.jpg). Labels are visible on the calculator and price select (1440-scroll-75.jpg). dist has a focus outline and a forced-colors block.
- −0.5: eight images announce "Placeholder for …" (dist/index.html). Counted with the Photo mustFix.

## Motion and interaction: 8.5
- +0.5 over round 1: motion now explains order. Between 1440-scroll-25.jpg (1 of 4 logged) and 1440-scroll-50.jpg (4 of 4 logged, markers in the band), the readout advances with the story cards. dist has split, clip and scale reveals and the gauge-scale hooks, with expo easing and no bounce.
- Held at 8.5: the hero report and the footer pads show only the settled state in every frame. The one motion idea, "readings settle into their band", shows in a single section only.

## Wow moment: 8.5
- Earned: the hero Visit report ("7 of 7 in range", 1440-first.jpg) and the gallons calculator, whose output is a big mono figure on a gauge with a shaded "most pools" band (1440-scroll-75.jpg).
- Held: the tick-what-you-see tool still rests on a plain status line, "Tick what you see. We will tell you what it usually means." (1440-full.jpg). Its output isn't a drawn reading.

## Polish: 8.5
- Earned: SVG favicon, apple-touch, OG, JSON-LD, theme-color, print and forced-colors in dist. No `transition: all`. Radius and rules are consistent, and the footer is designed (1440-full.jpg).
- −0.5: six gradient panels with no image still read as unfinished next to the real UI (1440-scroll-50.jpg, 1440-full.jpg #area). Same root cause as Photo, held to −0.5.

## Arithmetic
14×9 + 12×9 + 10×9 + 10×9 + 8×6 + 8×9 + 7×8.5 + 7×8.5 + 12×8.5 + 8×8.5 + 4×8.5
= 126 + 108 + 90 + 90 + 48 + 72 + 59.5 + 59.5 + 102 + 68 + 34 = 857 / 100 = **8.57**

Round 2 is the fast-mode last round. Weighted 8.57 is below 8.8 and the Photo mustFix is open, so the verdict is **NEEDS_HUMAN**.

## Must
1. **Photo / all 8 image slots** (1440-first.jpg, 1440-scroll-25.jpg, 1440-scroll-50.jpg, 1440-full.jpg, 390-full.jpg; dist/media/*.jpg are 122 bytes each; every alt reads "Placeholder for …"). The page shows no pool, water or equipment. **Fix:** curate real approved frames into niches/pool/media: a clear water surface (hero-B1), cloudy water, test vials, salt cell, filter cartridge, equipment pad, clear water after, an Orlando street. Re-place them with [[img]] so the manifest alt text describes each frame. The overlay and colour-edge treatment can stay as it is.

## Should
1. **Hero meta strip** (1440-first.jpg): the middle-dot mono string. Fix: split it into two lines. Line 1 is "Open now, until 5:30 pm" in teal. Line 2 is "9 years in Orlando" plus "4.8" with the Sample tag. Drop the dots.
2. **Mobile hero** (390-first.jpg): re-cut for the phone. Fix: under 640px, show a compact 3-row version of the report (pH, chlorine, "7 of 7 in range") straight under the buttons, so the signature sits above the fold. Keep the full 7-row card further down.
3. **Story cards on phone** (390-full.jpg): four full-height gradient frames. Fix: under 640px, set the cards to an aspect-ratio of 4/3 and drop the image height so the overlay reading is the content.
4. **Tick tool resting state** (1440-full.jpg): the plain status line. Fix: draw an empty test-pad strip with a "0 of 7 checked" label, and turn each tick into a pad that changes colour.

## Elevate
- **Photo (6.0)**: once real frames land, make them a sequence: reading → work → clear water. Pair the hero water with its report. Give each story photo its pad-colour edge and reading overlay (already built). Make the full-bleed break the "after" frame, with its pads filled. The images then become the evidence the readings point at, not decoration.
- **Motion (8.5)**: run the "settle into the band" idea in three places, not one. The hero report markers slide from out-of-range into the band once on load (under 1.2 s). The story readout keeps its scroll-linked fill. The footer's seven pads fill left to right on entry. A visitor could then say "the numbers settle as I scroll".
