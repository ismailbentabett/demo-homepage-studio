COPY: needs copy-chief

# garagedoor-A, round 1 (fast mode)

**Five-second answer (1440-first.jpg, 390-first.jpg):** "Garage door repair in Dallas. If my spring broke I shouldn't lift the door. I can call (214) 555-0146 or text them now. Why them: they tell me the price up front ($260–$420 for a spring pair, marked Sample) and explain the job turn by turn."

## First screen: 9
The h1 is 6 words on 3 lines. The orange Call is the primary action, with Text us and Price it as quieter options. The phone shows in the header and the CTA. There is a proof line with Sample tags, and the spring strip with its 00–30 ruler puts the signature in frame. The seam band peeks about 60px. On 390-first.jpg the h1 runs 3 lines, Call sits above the fold and the sticky bar is present. Held under 10 because trade and city sit in the kicker, not in the h1, and the Text us outline is nearly as loud as Call.

## Distinctiveness: 9
The margin spring and its counter run through every frame (1440-scroll-25/50/75.jpg). Panel seams with rollers mark the section edges. The signature also appears in the story spring, the estimator spring bar, the orange break and the footer at 30. Sibling B (light blueprint) shares nothing with it. −0.5: a tracked mono "— ¼ NN/30 LABEL" eyebrow sits above every h2, which reads as the eyebrow tell.

## Typography: 8.5
The pair is good: Saira Condensed for display and Libre Franklin for text, with JetBrains Mono as the listed accent. The "29 /30" figure is a real scale moment (1440-scroll-25.jpg), and the prices use tabular numerals. −0.5: 1440-first.jpg shows 5 tiny tracked caps labels in one view. There is also a byline bug in 1440-scroll-75.jpg: "Renee K. , Richardson ·".

## Layout: 8.5
1440-rm-full.jpg has a real grid, a light concrete band, a full-bleed orange break and a dense services section. −0.5: the dark story runs into the dark services, and the dark prices run into the dark area band, with only a thin seam between each pair. −0.5 (partial): in 1440-scroll-25.jpg the story leaves the top-right quadrant empty, with the step card parked low.

## Photo: 8
There is one photograph, the spring cut-out (1440-first.jpg). It is on-topic and well treated, but there is no sequence of work and the peach gradient is off-palette. The alt text is an encyclopedia line, not a description of the frame.

## Copy: 8.5
The voice is real: "Leave the door down", "counted out loud", "When a repair will do, we'll say so." −0.5: the primary action has three names: "Price it" (16 times), "Book a spring check" and "Send my request". −0.5: the break-band headline "Thirty quarter turns. Counted out loud. Then we let go halfway." is a three-beat slogan.

## Mobile: 9
390-first.jpg looks composed for the phone, and the bottom bar carries the counter. In 390-rm-full.jpg the story is stacked with no pin. render.json shows no overflow at 320 or 390.

## Accessibility: 8.5
The reduced-motion shots are complete. There is a skip link, a 3px #FFB547 focus outline, and the heading order is clean. −0.5: dist has only one aria-live region for two widgets (the ZIP check and the estimator).

## Motion: 9
The margin spring winds and the counter climbs through 08, 15 and 22. In the story the painted line twists into a spiral, with step controls (1440-scroll-25.jpg). Reduced motion shows the static wound spring.

## Wow: 9
The winding spring story is tied to the thesis. The estimator draws its output as a spring bar. It falls short of 10 because there is no keepable sheet.

## Polish: 9
dist/index.html has an apple-touch-icon, og:image, JSON-LD, print and forced-colors rules, and no transition:all. Radius and the seam language stay consistent. The byline punctuation bug is noted under type.

## Arithmetic
14×9 + 12×9 + 10×8.5 + 10×8.5 + 8×8 + 8×8.5 + 7×9 + 7×8.5 + 12×9 + 8×9 + 4×9
= 126 + 108 + 85 + 85 + 64 + 68 + 63 + 59.5 + 108 + 72 + 36 = 874.5 / 100 = **8.75** (8.745)

## Must
None.

## Should
1. **Reviews byline** (1440-scroll-75.jpg, the proof section): "Renee K. , Richardson ·" has a stray space before the comma and a dangling dot. Render it as "Renee K., Richardson" and put the service on its own line, with no trailing separator.
2. **Primary-action name** (all service cards, the estimator, the form): pick one verb for the money action, e.g. "Price it" everywhere, including "Price my spring check" on the estimator, and keep "Send my request" only as the form's submit button. Cut "Price it" from the cards that point to the same anchor, or vary it as "Price a spring", "Price an opener" so each card says what it prices.
3. **Break band headline** (orange band, 1440-full.jpg): replace the three-beat slogan with one plain sentence, e.g. "Thirty quarter turns, counted out loud, and the door stays put halfway."
4. **Caps labels** (hero, 1440-first.jpg): drop the "% TURNS 00/30" badge on the strip, because the ruler already says it, or merge the two Sample tags into one tag on the proof line.
5. **Live regions** (the ZIP check in #area and the estimator): give each result its own `aria-live="polite"` output.
6. **Hero alt text**: describe this frame, e.g. "A torsion spring off the shaft, the winding cone on the left, its size stamped on the coil."
7. **Story right column** (1440-scroll-25.jpg): vertically centre the step card on the spring row so the top-right quadrant is not empty.

## Elevate
- **Photo (8):** make the photography part of the winding count. Cut real frames of the spring, the cone and the winding bars into the same 21:9 strip with the ruler for the story steps and the prices, all graded to the sodium/concrete palette, so the page reads as one shoot from snapped spring to balanced door.
- **Layout (8.5):** break the dark-on-dark runs with the door itself. Put the services on the concrete tone as stacked door panels, with seams and rollers as the row dividers, and seat the story's step card level with the spring. The scroll then alternates night / concrete / night and nothing floats.
