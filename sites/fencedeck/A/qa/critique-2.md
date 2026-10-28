COPY: ok

# fencedeck-A · critique round 2 (fast mode)

**Five-second answer (1440-first.jpg, 390-first.jpg):** "Boise fence and deck builder, Stringline. Call (208) 555-0134 or price my fence by the foot. Why them: they find the corner pins, call 811 and pull a string before digging, and the drawings show it." It answers in one look now that the h1 carries the city and the outcome.

## What changed since round 1
The etching and its garbage alt are gone. The h1 names Boise. The CTAs moved up beside the lede. The next band peeks at the fold. The counter is in sync with the section tags. Action names are unified, and the slogan h2s were replaced. Two real fence photos were added (#fix and the closing frame).

## firstScreen: 9.0
- Earned: 1440-first.jpg has a city + outcome h1, the CTA block aligned to the lede, the string and plates as the signature on the first screen, the phone in the header, and the cream band with its rust string peeking under the fold. 390-first.jpg: both CTAs and the Sample proof are above the fold, and the 3-way bar is in place.

## distinctiveness: 8.5
- Earned: the string with stake tags carries the hero, process, services, reviews and the closing "Stake B · 112 ft" (1440-scroll-25/50/75.jpg, 1440-rm-full.jpg).
- −0.5: next to sites/fencedeck/B/qa/screens/1440-first.jpg it is still the same illustrator's series: cream technical line plates, mono callouts and a frost-line post drawing.

## type: 8.5
- Earned: Schibsted 800 display at tight tracking, a full-ink lede, curly quotes, and "Pause drawings" now in sentence case (1440-first.jpg).
- −0.5: 1440-first.jpg still carries an eyebrow, SAMPLE, STAKE A→B and seven tracked mono captions in one view. In 1440-scroll-25.jpg the "Post 06 · 40 ft" mono readout is set at h2 size and competes with the h2.

## layout: 9.0
- Earned: the hero grid is resolved (1440-first.jpg). Services is grouped and hung from post marks (1440-scroll-50.jpg). The tone rhythm is clean and the page closes on a full-width photo (1440-rm-full.jpg).

## photo: 8.0
- Earned: two on-topic frames replace the off-topic etching, one in #fix and one closing the page (1440-rm-full.jpg). The captions are real.
- −0.5: the closing "112 ft · drawn, then built" frame shows an old, uneven picket fence with leaning boards. That contradicts the "built to a tight string" promise at the exact moment it is supposed to pay off.
- −0.5: the treatment is a flat grey desaturation, not tied to the pine/sage palette.

## copy: 9.0
- Earned: one verb family ("Price it by the foot" / "Price it" / "Price my gate" / "Price my repair" / "Send my fence numbers"), seen in 1440-rm-full.jpg and dist. The slogan h2s are now statements: "A gate on a steel frame closes itself" and "Fences, gates and decks around Boise" (1440-scroll-50.jpg). Trade nouns throughout. Every review carries a Sample label (1440-scroll-75.jpg).
- Noted: "Straight lines, in their words." is still a soft head.

## mobile: 8.5
- Earned: 390-first.jpg is composed for the phone. render.json is clean.
- −0.5: 390-full.jpg is 15,121px, about 18 screens. The process plates and 9 services still stack in full, with no phone-specific condensing.

## a11y: 9.0
- Earned: the garbage alt is gone with the etching, and the remaining img alts are real descriptions. All content shows in reduced motion (1440-rm-full.jpg, 390-rm-full.jpg). The marquee has a pause control. The fixed counter no longer covers body copy (1440-scroll-50.jpg, -75).

## motion: 8.5
- Earned: the counter now matches the section tags (POST 10 · 72 FT in 1440-scroll-50.jpg, POST 12 · 88 FT in 1440-scroll-75.jpg). The pinned process readout works (1440-scroll-25.jpg), and the estimator draws live.
- −0.5: the string turning into the plumb line at #depth is still not visible as a moment. The closing photo is static, not revealed by the string (1440-full.jpg vs 1440-rm-full.jpg).

## wow: 9.0
- Earned: the estimator draws the run with posts, sections and gates plus a Sample price, and now offers a print stake-out sheet (dist `data-est-print`). "String comes down" at Stake B gives the page a real ending (1440-rm-full.jpg).

## polish: 8.5
- Earned: favicon, OG, JSON-LD, print and forced-colors styles. The plate captions now fit (1440-first.jpg).
- −0.5: in 1440-scroll-50.jpg the fixed counter sits a few px from the Vinyl fences "Price it →" link, which is tight at 1440.

## Arithmetic
14×9 + 12×8.5 + 10×8.5 + 10×9 + 8×8 + 8×9 + 7×8.5 + 7×9 + 12×8.5 + 8×9 + 4×8.5
= 126 + 102 + 85 + 90 + 64 + 72 + 59.5 + 63 + 102 + 72 + 34 = 869.5 / 100 = **8.70**

## Must
None.

## Should
1. **#close photo (1440-rm-full.jpg bottom)**: the leaning, uneven picket run undercuts "drawn, then built". Swap it for the straightest, newest fence frame in the approved library. Apply a pine (#1c3328-ish) to paper duotone instead of plain greyscale.
2. **Fixed counter (1440-scroll-50.jpg)**: it crowds the service "Price it" links. At ≥1024, move it into the left string gutter (left: 24px, vertical) or add `padding-bottom: 72px` to sections while it is visible.
3. **#proc readout (1440-scroll-25.jpg)**: "Post 06 · 40 ft" is set at h2 size in mono. Drop it to about 60% of the h2 size so the heading leads.
4. **1440-first.jpg, mono caption load**: shorten the plate captions to the number only at ≥1024 (e.g. "02") and move the names into the img alt/figcaption under sr-only, or set the captions in Schibsted 14px sentence case.
5. **#rev h2**: replace "Straight lines, in their words." with a plain line, e.g. "What Boise-area neighbors said after the string came down".
6. **390-full.jpg**: on <640, make the process plates a horizontal snap rail and collapse services into Fences / Gates / Decks disclosure groups.

## Elevate
- **photo (8.0)**: give the one real photograph a job and a palette. Use the straightest new fence run, duotoned to pine/paper. At Stake B, lay the estimator's drawn picket run over it and clip-wipe the drawing away left to right, so the drawing becomes the built fence.
- **distinctiveness (8.5)**: make the string the page's path, not a row of plates. Run one unbroken rust line from hero to footer and hang every section from its post mark: service cards, review tags and FAQ items on stake tags. #depth is the single place the line turns 90° and drops to the frost tick. That moves the system away from the sibling's cream-plate look.
