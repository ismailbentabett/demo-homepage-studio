COPY: ok

# roofer-A · critique round 4 (fast mode, final round, roundCap 4)

## Five-second test
- 1440-first.jpg: "Felt & Flashing is a Wichita roofer that strips to bare wood and photographs every layer. I call (316) 555-0101 or ask for a roof check. Why them: they show me the deck, flashing and felt before covering it, 14 years, 4.9 from 143 reviews (Sample)." I can answer all four in under five seconds.
- 390-first.jpg: same answer. H1 is 2 lines, both CTAs are above the fold, and the filmstrip shows 3.5 cards that read as swipeable. The hero diagram starts under the sticky call bar.

## What changed since round 3
- The drip-edge compare mustFix is fixed (1440-full.jpg crop at y≈1600-2100, 390-full.jpg). The in-drawing "ice shield" callout is gone, "water led into the gutter" and "water stays on the membrane" sit clear of the drag line, and "fascia" is off the frame edge. The mustFix is closed.
- Detail 05 (starter strip) is now fully drawn with a course, nails, a chalk line and a sealant line (1440-full.jpg y≈3400). There is no more empty beige block.
- The "Six nails a shingle." break is now a 1-line display h2 plus a 1-line kicker (1440-full.jpg y≈4000). Before it ran 4 lines.
- The ZIP row now sits as two columns, with the area list on the left and the ZIP check card on the right (1440-full.jpg y≈6900). Before it floated with 770px of dead band beside it.
- The review cards now use the same hard offset shadow as the drawing frames, so the page has one shadow language (1440-full.jpg y≈9500).

## firstScreen: 9
- Earned (1440-first.jpg): a 5-word h1 with trade and city, the phone in the header, one filled CTA and one outlined CTA, a Sample rating line, the exploded 7-layer stack with numbered layers, and the 01-07 filmstrip. A dark band peeks at the bottom of the fold.
- Deduction (390-first.jpg): the sticky two-button bar covers the base of the hero diagram, and the stack's numbered layers 1-5 are hidden behind it. On phone the signature is cut in half at the fold (-0.5).
- Not 9.5: the hero stack is a static diagram, with nothing on it that a homeowner would stop for. The fold holds no moment of craft beyond the drawing.

## distinctiveness: 9
- 1440-full.jpg: the layer system runs everywhere. It appears in the hero stack, the filmstrip, the sticky "LAYER n OF 7" card (1440-scroll-25.jpg, 1440-scroll-50.jpg), the dash progress bars over each h2, the service rows showing which layers each call opens (1440-scroll-75.jpg), the estimator drawing and the footer strata. Nothing on the page reads as a contractor template, and the site differs fully from siblings B and C.
- Deduction: the mono micro-label plus dash-bar device repeats more than 12 times, so by the services it reads as decoration rather than information (-0.5).

## type: 9
- Barlow-Condensed-style display at real scale (the "Our 1958 ranch" display quote in 1440-scroll-25.jpg, "Six nails a shingle." in 1440-full.jpg), body text at about 18px in full ink, and a clear h2/h3 ladder (1440-scroll-75.jpg).
- Deduction: the 11px tracked caps tags (SAMPLE RATING, SAMPLE REVIEW, LEAK REPAIR card labels in 1440-full.jpg y≈9500) plus the mono labels make a third voice that is used a little too often (-0.5). The open-now pill and the phone are no longer mono, which is better.

## layout: 9
- 1440-full.jpg: the scroll has a visible shape. Paper hero, then deep band, then a paper/deep alternation through the layers, then the red full-bleed shingle field, then paper for the two-up finish spread (1440-scroll-50.jpg), then the deep estimator, the paper services and the red CTA, closing on the strata footer. The ZIP row is fixed and the staggered review "courses" have real intent.
- Deduction: the estimator band and the area/ZIP band are both deep and touch, so they read as one 1,500px dark slab (1440-full.jpg y≈6300-7300). The layer sections also share one left-rail plus content grid for six bands in a row, so the middle of the page repeats a single grid (-0.5).
- Deduction (1440-full.jpg y≈10300, footer): the hours list is laid out as a 2-column day grid (Mon | Tue, then the times), which reads out of order (-0.5 noted under polish, not counted twice here).

## photo: 9
- These are judged as drawn treatments (the stock is a temporary placeholder). The detail plates now share one complete language: a cream sheet, a struck layer number, a mono annotation, a title strip reading "0n / 07 Name ✓ Checked before covering", and a caption below (1440-full.jpg, 1440-scroll-25.jpg, 1440-scroll-50.jpg). The drip-edge compare and detail 05 are now at the density of the deck and felt plates. The shingle-field break is a strong full-bleed drawn image.
- Deduction: the yard plate (1440-scroll-50.jpg) is the thinnest drawing on the page: flat rectangles, labels "house"/"drive" in plain boxes, and a "+" chip instead of a number. It breaks the series' finish (-0.5). There is no photography of a real roof at all, so a homeowner never sees the craft in context. That is acceptable for this concept but caps the score at 9.

## copy: 9
- The hero line and the layer headlines are concrete trade nouns ("The deck: bare wood, photographed", "The first course nobody sees", "Then the yard. Magnet sweep, twice." in 1440-full.jpg). Doubt microcopy sits under the estimator ("No form needed; we confirm the real number on the roof"). The form note is honest ("Nothing is sent from this sample site", 1440-full.jpg y≈10000). Sample tags are on every review, price and rating. There are no em dashes.
- Deduction (1440-full.jpg y≈10000, #contact): "We call back within one business day" is a service promise that is not in facts.json. It reads as a fact a prospect would be held to (-0.5, Should).

## mobile: 9
- 390-full.jpg: no overflow at 390 or 320 (render.json). The layer bands stack cleanly, the drawing frames go full width with readable annotation, the estimator is reordered (select, slider, drawing, result, buttons), and the sticky two-button bar works.
- Deduction (390-first.jpg): the sticky bar sits over the hero stack, so the hero signature lands half-hidden under the bar on first view (-0.5). Deduction (390-full.jpg, deck plate): the "soft: replace" and "4 ft" annotations shrink to about 8px on the phone and are barely legible (-0.5 folded in, rounded to 9).

## a11y: 9
- 1440-rm-full.jpg and 390-rm-full.jpg show every heading, plate, quote, price and field with motion off. One h1 with no skips (dist/index.html), the compare handle carries slider ARIA, :focus-visible rings are styled, there are forced-colors queries, and render.json shows no console errors.
- Deduction: the drawing annotation text inside the SVG plates (mono, about 12px at 1440 and about 8px at 390 in 390-full.jpg) is the only place the page's information falls below a comfortable reading size. Its contrast on cream is fine (-0.5 shared with mobile, not double-counted in the score).

## motion: 8.5
- dist/index.html and the built behaviour now describe a rail that locks each layer as its section arrives, plates that unclip, nails that drop onto the chalk line, and the estimator reusing the same slide-and-lock. The frames agree with the rail: 1440-scroll-25.jpg shows "LAYER 4 OF 7" with the upper layers ghosted, and 1440-scroll-50.jpg shows 7 of 7.
- Deduction: none of the stills catches a moment of motion as an event. The sticky card is 230×265px in a 1440 frame, so the "roof builds itself" idea plays out at thumbnail size in the margin. There are still 18 data-reveal plus 5 data-reveal-stagger generic hooks next to the signature motion (-0.5). I can't credit what no frame shows beyond the rail states (-0.5). That leaves the score at 8.5 and not 9.

## wow: 9
- 1440-full.jpg (estimator) and 390-full.jpg: picking "Leak repair" redraws the stack with layers 02/03/06 inked and the rest ghosted, plus "Touches layers 02 03 06" chips, a Sample range and "Print this range". The tool speaks the signature's language. The drip-edge drag compare is a second hands-on moment.
- Not higher: the most memorable visual, the shingle field with nailed course (1440-full.jpg y≈4300), is static. The scroll story doesn't have a single moment a contractor would screen-record.

## polish: 9
- Favicon, apple-touch-icon, theme-color, og:image, JSON-LD, print and forced-colors styles (dist/index.html). One shadow language now (hard offsets everywhere). The strata footer is a designed close (1440-full.jpg).
- Deduction (1440-full.jpg y≈10300, footer #hours): the day/time 2-column grid reads Mon, Tue, then "7 am – 6 pm 7 am – 6 pm", which is hard to scan. Weekdays with the same hours aren't collapsed (-0.5). The specialty card has a small radius where every other frame is square (1440-scroll-75.jpg) (-0.5 folded, rounded to 9).

## Arithmetic
14×9 + 12×9 + 10×9 + 10×9 + 8×9 + 8×9 + 7×9 + 7×9 + 12×8.5 + 8×9 + 4×9
= 126 + 108 + 90 + 90 + 72 + 72 + 63 + 63 + 102 + 72 + 36 = 894 / 100 = **8.94**

## Must
None. The round-3 drip-edge label mustFix is closed (1440-full.jpg, 390-full.jpg). No DEMO-RULES breach is visible: every review, rating, price and license carries a Sample tag, the form says nothing is sent, there is no face presented as the owner and no before/after photography.

## Should
1. **#contact lead (1440-full.jpg y≈10000).** Problem: "We call back within one business day" is not in facts.json. Fix: replace it with "Tell us what you are seeing. We call you back to set a time, and you get the photos of what we find."
2. **Footer hours (1440-full.jpg y≈10300).** Problem: a 2-column day grid that reads out of order. Fix: use a single-column `dl` with collapsed rows: "Mon–Thu 7 am – 6 pm / Fri 7 am – 5 pm / Sat 8 am – 1 pm / Sun Closed".
3. **Yard plate (1440-scroll-50.jpg).** Problem: it is drawn thinner than the 01-07 plates and uses a "+" chip instead of a number. Fix: draw lawn texture, bed edges and the dumpster footprint at the plates' line weight, and give it a struck "08" or "✓" chip in the same style as "07".
4. **Estimator band plus area band (1440-full.jpg y≈6300-7300).** Problem: two deep bands touch and read as one slab. Fix: put the area/ZIP block on t-paper (or on the estimator's cream sheet colour) so it goes deep / paper / paper-services with a rule between them.
5. **Hero on phone (390-first.jpg).** Problem: the sticky call bar covers the base of the hero stack. Fix: hide `[data-mobilebar]` until the hero CTAs leave the viewport (IntersectionObserver on the hero CTA row), or shorten the hero stack to 60vw and put it above the filmstrip.
6. **Deck plate annotations at 390 (390-full.jpg).** Problem: "soft: replace" and "4 ft" render at about 8px. Fix: at ≤480px, scale the SVG text with `font-size: 14px` via a `vector-effect`-safe class, or drop the dimension labels and keep only "soft: replace".
7. **Specialty card radius (1440-scroll-75.jpg).** Problem: it has a radius where every other frame is square. Fix: set `border-radius: 0` to match the plates.

## Elevate
- **motion (8.5).** Move the build from the margin to the stage. As each layer section enters, slide that layer's segment into the large plate itself and lock it with a short settle, with the nails dropping in for 06, so the roof is visibly assembled at full size while the sticky card just keeps count. Then make the estimator replay exactly that assembly in reverse to lift out the touched layers, so the page has one motion idea a contractor would screen-record.
- **firstScreen (9, heaviest weight among the 9s).** Make the hero stack the first proof, not an illustration. On load, the seven layers drop into place from 01 to 07 in under a second with their names typed beside them (static and complete under reduced motion). On the phone, place the stack above the fold in a shorter crop so the signature lands before the visitor scrolls and never sits under the call bar.
