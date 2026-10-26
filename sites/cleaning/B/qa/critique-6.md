COPY: ok

# cleaning-B, critique round 6 (mode: fast; scored the same as strict)

**Five-second test (1440-first.jpg, 390-first.jpg):** "House cleaning in Huntsville, priced room by room, with sample prices on the page before anyone comes. I press 'Price my house' or call (256) 555-0153. Why them: the checklist is here, a walk-through confirms the price, they're open now, and there's a 4.8 Sample rating." Every answer lands on both viewports.

**Fixed since round 5 (not re-listed):** the triptych frames all render in 1440-full.jpg and 1440-rm-full.jpg (the round-5 mustFix). Bare service arrows are now "Put it on my ticket →". The mop is now carpeted stairs. Hours use en dashes. The quiz slip comes after the question at 390. The footer SUBTOTAL is split into VISIT and HOUSE, and the footer now matches the hero's "not picked yet". "Same crew" is gone from the #break h2.

## First screen: 9
The h1 "Huntsville house cleaning, priced line by line." is 7 words on 3 lines. There's one primary action and a quieter "or call". The phone is in the header, and a proof line reads Open now · until 5:30 pm · 4.8 Sample rating. The next band peeks about 75px, and the ticket signature is in the hero (1440-first.jpg). On 390-first.jpg the h1 runs 3 lines, both actions sit above the fold, and the sticky Call/Price bar shows. Why it's not a 10: the near-monochrome sofa photo still reads as a furniture listing, and about 450px of empty paper sits to the right of the h1 block (1440-first.jpg).

## Distinctiveness: 9
The receipt is now a continuous strip down the left edge at 1440. It prints a ticket per section: Your price, The list, How often, Price list, Hours, Your ticket, and the footer receipt (1440-full.jpg). Every one of the nine service rows feeds the ticket (Put it on my ticket). The site has stubs with torn edges, a ledger, a photo-slip triptych and a sienna break. The cover-the-logo test mostly passes. It held at 9 because the strip is blank ruled paper in #crew and #reviews (1440-scroll-75.jpg), so the idea goes quiet for long stretches.

## Typography: 9
Bricolage display with tight tracking, Figtree body and DM Mono receipts, with tabular prices ($135 to $185 aligned in the 1440-full.jpg price ticket). The page has a real scale-contrast moment ("4.8★" against small mono). Ranges now use en dashes. Deduction: at 390 the price-list first row still wraps to "Every-other- / week visit" with a hyphen break (390-full.jpg) (−0.5, absorbed at 9 because everything else is clean).

## Layout and rhythm: 8.5
The tone alternation is good: paper, grey, sienna, paper, grey, ink, paper (1440-full.jpg). The triptych is offset and the stubs are staggered. Deduction (−0.5): the spine strip is empty for its whole height beside #reviews, about 900px of ruled blank paper (1440-scroll-75.jpg). It's empty under "LINE 05 · 3 VISITS" in #crew and about 500px below the price-list ticket in #services (1440-full.jpg). The dead left column from round 5 moved into the spine instead of being used.

## Photo: 8.5
Every frame now loads (1440-full.jpg, 390-full.jpg), and the set is residential: microwave, fridge, stairs, a craftsman house, a shower. The time-stamped photo slips ("Visit 02 · Fri 10:40") help. Deductions: the #break photo is a tiled shower with a ledge crowded with shampoo bottles. It is the largest image on the page and shows clutter, not "after" (1440-scroll-25.jpg). Visit 01 is a fridge full of leftover tubs (1440-full.jpg). The grades still don't match: the mono hero, the cool shower and the saturated fridge.

## Copy: 9
The trade voice is concrete: "Which fridge shelf to leave alone", "Military move-out cleans timed around the packers", "Nothing ticked yet. Your answer prints here." (1440-scroll-50.jpg). "Sample" is on every review, price, rating, licence and the redo promise (1440-scroll-75.jpg). "The crew you met, Every Other Friday." replaces the repeated "Same crew". CTA language is consistent with the metaphor (Price my house / Put it on my ticket).

## Mobile: 9
qa/render.json: scrollWidth equals the viewport at both 390 and 320. 390-first.jpg: both actions sit above the fold, with a ~48px sticky bar. 390-full.jpg: the quiz question comes before its slip, the services rows stack with labelled links, the price ticket stays on screen, and the triptych stacks. Held at 9 for the price-row wrap noted under Typography.

## Accessibility: 9
1440-rm-full.jpg and 390-rm-full.jpg: every text block and all three triptych images render with reduced motion. There's one h1 and a clean h2/h3 tree (dist). The ZIP input is labelled, and forced-colors and print media queries are present in dist. Light-on-ink services copy reads clearly (1440-full.jpg). No visible failure.

## Motion and interaction: 8.5
dist carries split, stagger, tabs, stepper, estimator, data-echo and data-print. The hero ticket ("Fills in as you price your house") and the footer receipt are both wired to the estimator, the quiz and nine "Put it on my ticket" rows (1440-full.jpg). Under 9: 1440-scroll-25.jpg, -50.jpg and -75.jpg still show only settled states. The spine strip doesn't visibly change as sections pass (blank in 1440-scroll-75.jpg), so the "prints line by line" promise isn't visible in any frame.

## Wow: 9
1440-full.jpg: the estimator prints VISIT/HOUSE/ADD-ONS/RANGE $135 to $185 (Sample). The quiz and every service row now write onto the same ticket. The footer closes on a torn receipt reading "THANK YOU · SEE YOU FRIDAY · CALL". The hero/footer contradiction is fixed (both say "not picked yet"), so the receipt now reads as the visitor's own.

## Polish: 8.5
The footer is designed: credits in one format, a torn-edge close, print and forced-colors styles. Deductions (−0.5): in the footer credits, ", CC BY 2.0" wraps onto its own line with a leading comma under the Blake Handley credit (1440-full.jpg footer). The footer ticket heading reads "EOF  · Every Other Friday Cleaning" with a double gap before the dot (1440-full.jpg).

## Arithmetic
14×9 + 12×9 + 10×9 + 10×8.5 + 8×8.5 + 8×9 + 7×9 + 7×9 + 12×8.5 + 8×9 + 4×8.5
= 126 + 108 + 90 + 85 + 68 + 72 + 63 + 63 + 102 + 72 + 34 = 883 / 100 = **8.83**

## Must
None. No DEMO-RULES breach, no visible a11y failure and nothing broken on a phone in this round's screenshots.

## Should
1. **#break photo (1440-scroll-25.jpg).** Problem: the shower ledge is crowded with bottles. Fix: swap it for a clean, uncluttered interior frame from niches/cleaning/media/manifest.json (an empty made-up bathroom or kitchen counter), or crop to the glass and tile with `object-position` so no products show.
2. **Triptych Visit 01 (1440-full.jpg).** Problem: a fridge full of leftover tubs. Fix: use a frame of a wiped fridge shelf or counter, or crop to the glass shelf only.
3. **Spine strip beside #reviews and #crew (1440-scroll-75.jpg, 1440-full.jpg).** Problem: blank ruled paper. Fix: print a section ticket there too. In #reviews: "LINE 08 · 264 reviews · 4.8 (Sample)" plus six mono lines naming each stub's service and score. In #crew: "Visit 01 Fri 09:15 / Visit 02 Fri 10:40 / Visit 03 Fri 12:10". Or make each ticket `position: sticky; top: 96px` so it rides the band.
4. **Footer credits (1440-full.jpg).** Fix: put the source and licence in one `white-space: nowrap` span, so ", CC BY 2.0" never starts a line.
5. **Footer ticket heading.** Fix: remove the double space so it reads "EOF · Every Other Friday Cleaning".
6. **Price ticket at 390 (390-full.jpg).** Fix: show the short label "Every other week" under 640px, with no hyphen.
7. **Photo grade.** Fix: apply one shared warm-paper treatment to every `img` in the photo slips, e.g. `filter: sepia(.1) saturate(.9) contrast(1.02)`.

## Elevate
- **Motion (8.5, weight 12):** Make the spine actually print. As each section enters, its ticket line types onto the strip in DM Mono, one line at a time, with a short paper-feed nudge (translateY 6px → 0, 180ms, steps). When the visitor picks in the estimator, the quiz or a service row, the new line prints onto the strip *where they are*, not only in the hero and the footer. Reduced motion shows every line already printed. The scroll frames would then show a receipt that grows from 25% to 75%.
- **Layout (8.5, weight 10):** Give the strip a rhythm instead of a constant width. Let it narrow to a thin perforated edge (about 24px) in bands where the content needs the room (#reviews, #crew), and widen into a full ticket only where it carries data (price, list, quiz, hours, form). That breaks the same left-column shape in every band and removes the dead paper.
