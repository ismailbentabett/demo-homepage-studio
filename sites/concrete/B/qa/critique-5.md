COPY: ok

# concrete-B: critique, round 5 (final round, fast mode)

## Five-second test
- **1440-first.jpg**: "Fieldtest Concrete, Mesa AZ: driveways, RV pads and pool decks. They put thickness, steel and base on the quote as numbers. I can build my spec or call (480) 555-0132. They're closed now and open at 5 am."
- **390-first.jpg**: same answer. The kicker now fits on one line, and the h1, both CTAs, the status and the Sample rating all sit above the sticky Call/Text/Spec bar.

## Fixed since round 4 (not re-listed)
- **a11y mustFix**: the price-table header is now bone on deep.
- **Price table**: the bone sliver is gone.
- **RV sizer**: the drawing is top-aligned, and GATE 12 FT is off the pad edge.
- **Estimator**: the buttons moved under the controls, so the two columns now end together.
- **Reviews**: the left column is filled.
- **Hero status**: now plain sentences.
- **390 kicker**: no orphan.
- **Service links**: "Get a price" ×8 now reads as named "… quote" links.

## firstScreen: 9.5
The promise is checkable, the stratified "6 IN." is the product, the CTA hierarchy is clear and the rail is legible (1440-first.jpg, 390-first.jpg).
- −0.5: at 1440 the area to the right of the h1 is empty grid, and the right column ends at ~y710.

## distinctiveness: 9.0
The spec-sheet signature runs through the whole page:
- hero numeral
- core sample writing into the rail, with a toast (1440-scroll-25.jpg)
- July pour drawing
- Sheet 01/03 plans
- season tool
- spec sheet and footer receipt (1440-full.jpg)

Deduction:
- −0.5: sibling A shares the cross-section thesis.

## type: 9.0
Oswald at a confident scale, Outfit ≥16px, tabular numerals.
- −0.5: mono micro-labels on every data row (1440-scroll-50.jpg; 1440-full.jpg ~y7550), plus middle-dot strings in the kicker, footer and review meta.

## layout: 9.0
The tone run alternates cleanly, and the estimator, RV sizer and reviews are now balanced (1440-full.jpg).
- −0.5: the services price table ends ~230px above the end of the service list (1440-scroll-75.jpg).
- −0.5: in reduced motion the core-sample column leaves ~600px of empty dark under the drawing (1440-rm-full.jpg ~y1800-2400).

## photo: 9.0
I judged the drawn treatments on their merit: the July pour section, the measured broom specimen, the core sample and the honest schematic map (1440-full.jpg, 1440-scroll-50.jpg).
- −0.5: the finish tab thumbnails are tiny generic swatches (1440-scroll-50.jpg).

## copy: 9.5
The copy is specific and checkable, every Sample item is labelled, and the service links are now named (1440-scroll-75.jpg).
- −0.5: "ADD TO MY SPEC" under each review card (1440-full.jpg ~y9150-9650) doesn't say what gets added.

## mobile: 9.0
Everything stacks cleanly (390-full.jpg), and render.json shows no overflow at 320 or 390.
- −0.5: the Sheet 03 plan labels render at ~7px on a 390 screen (390-full.jpg ~y6550).

## a11y: 9.0
The mustFix is fixed, and both reduced-motion full pages are complete (1440-rm-full.jpg, 390-rm-full.jpg).
- −0.5: the rail toast covers the end of the step-04 paragraph (1440-scroll-25.jpg).
- −0.5: the small SVG labels at 390.

## motion: 9.0
Scroll drives the signature: GRADE lights, the rail fills to 4/8 and the toast fires (1440-scroll-25.jpg). The count carries into the sticky bar and the contact sheet.
- −0.5: from the static frames I can't confirm the pour drawing or the plan sheets animate.

## wow: 9.0
The spec builds up from 0/8 to 4/8, then shows as the sheet, the prefilled textarea and the footer receipt. A contractor would demo this on a call.
- −0.5: the estimator controls and finish tabs still read as standard form UI.

## polish: 8.5
The round-4 items are fixed. New collisions:
- The "15 FT" label is crossed by the dotted fence line (1440-full.jpg ~y6585).
- The toast overlaps body copy (1440-scroll-25.jpg).
- The "02 CHUTE TO THE FORMS" tag sits on the mixer drum nose (1440-full.jpg ~y3900).

## Arithmetic
14×9.5 + 12×9 + 10×9 + 10×9 + 8×9 + 8×9.5 + 7×9 + 7×9 + 12×9 + 8×9 + 4×8.5
= 133 + 108 + 90 + 90 + 72 + 76 + 63 + 63 + 108 + 72 + 34 = 909 / 100 = **9.09**

## Must
None.

## Should
1. **#story toast (1440-scroll-25.jpg)**: it covers step text.
   - Fix: anchor the toast to the rail column (right: 72px, outside the 1320 content edge), or offset it below the active step's paragraph.
2. **Sheet 03 "15 FT" (1440-full.jpg ~y6585)**: the dotted fence line runs through the label.
   - Fix: move the vertical dimension label inside the fence (x − 24px), or give it a deep background pad.
3. **July drawing (1440-full.jpg ~y3900)**: the "02" tag overlaps the drum nose.
   - Fix: move it up ~30px with a longer leader line.
4. **Sheet 03 at ≤480px (390-full.jpg ~y6550)**: the labels are too small.
   - Fix: scale the SVG text to ≥12px rendered (non-scaling text, or a mobile-only font-size on the label class).
5. **Review cards (1440-full.jpg ~y9150)**: the button doesn't say what it adds.
   - Fix: rename it to "+ Use this job's spec" (or "+ Add Gary's pad spec"), or drop the button from reviews.
6. **#story under reduced motion (1440-rm-full.jpg)**: the drawing sits at the top of an empty column.
   - Fix: keep `position: sticky` on the drawing when motion is reduced (CSS-only, no animation).
7. **#services (1440-scroll-75.jpg)**: the left column runs out early.
   - Fix: put a "Measure it" guarantee strip or a small rail-count note under the price table.

## Elevate (recorded for a future pass; empty in JSON because this is a PASS)
- **polish:** make every label in the drawings follow one placement rule: leader line plus a deep tag that is never placed over a stroke. All drawing callouts then come from one system and can't collide.
- **wow:** turn the estimator controls into the drawing itself. Drag handles on the Sheet 01 plan edges set length and width, so the form UI becomes the spec drawing.
