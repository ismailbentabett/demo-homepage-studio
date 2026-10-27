COPY: ok

# concrete-B: critique, round 4 (final round, fast mode)

## Five-second test
- **1440-first.jpg**: "Fieldtest Concrete, Mesa AZ: driveways, RV pads, pool decks. They write thickness, steel and base on the quote as numbers. I can build my spec or call (480) 555-0132." The rail now reads SPEC 0/8 with named lines, so it's legible on arrival.
- **390-first.jpg**: same answer. The h1 runs 3 lines, and both CTAs plus the Sample rating sit above the fold. The kicker wraps to an orphan "POOL DECKS" line.

## Fixed since round 3 (not re-listed)
- Story callout contrast.
- Rail top gap.
- Rail legibility (it now starts at 0/8).
- Story step spacing.
- Kickers cut to the tool sections.
- July break redrawn.
- Broom specimen.
- Mobile footer strip.
- Services left column now holds the price table.

## firstScreen: 9.0
The promise is checkable, the stratified "6" is the product, the CTA hierarchy is clear and the rail is readable (1440-first.jpg).
- −0.5: the status line still has a middle-dot "Closed · opens tomorrow 5 am" string.
- −0.5: orphan kicker word at 390 (390-first.jpg).

## distinctiveness: 9.0
The signature now runs through every section:
- hero numeral
- core sample writing into the rail, with a toast (1440-scroll-25.jpg)
- the July pour drawing with numbered callouts
- Tool 01-04
- spec sheet
- footer receipt (1440-full.jpg)

Deduction:
- −0.5: sibling A (A/qa/screens/1440-first.jpg) shares the cross-section thesis in another skin.

## type: 9.0
Oswald at a confident scale, Outfit ≥16px body, tabular numerals.
- −0.5: mono micro-labels on every data row (1440-scroll-50.jpg: GRIP / JULY UNDERFOOT / UPKEEP; 1440-full.jpg ~y5200: AREA / CONCRETE / WE'D POUR).
- Middle-dot strings in the hero status and footer receipt.

## layout: 8.5
The tone run alternates cleanly, and the services column is now filled (1440-scroll-75.jpg). Dead space remains:
- The estimator's left column ends after Thickness, about 300px before the results column does (1440-full.jpg ~y4950-5300).
- The RV pad drawing is vertically centred, which leaves about 260px of empty dark top-left beside the heading (1440-scroll-50.jpg, 1440-full.jpg ~y6250-6500).
- The reviews' left column is empty under the Gary quote (1440-full.jpg ~y9700-9900).

## photo: 9.0
I judged the drawn treatments on their merit; the stock is a placeholder.
- The July break is now a real section drawing of a dawn pour: mixer, chute, slab on chairs, thermometer, 01-04 callouts (1440-full.jpg ~y3800-4400).
- The broom swatch is a measured specimen with groove depth, slab dim-line, stone size and a scale bar (1440-scroll-50.jpg).

Deduction:
- −0.5: the finish tab thumbnails are tiny generic swatches (1440-scroll-50.jpg top).

## copy: 9.0
"In July the truck comes before the sun" and "Hit caliche? You see the rock" are specific. The guarantee is verbatim from facts.json with a Sample terms tag, and every price, rating, review and licence is labelled.
- −0.5: "Get a price" repeats on all 8 rows (1440-scroll-75.jpg).
- −0.5: the hero meta string.

## mobile: 9.0
390-full.jpg stacks cleanly: estimator controls, then the plan, then the results (~y4600-6200). The footer now ends on deep, and render.json shows no overflow at 320 or 390.
- −0.5: kicker orphan (390-first.jpg).

## a11y: 8.0 (fast cap, mustFix)
The reduced-motion full pages (1440-rm-full.jpg, 390-rm-full.jpg) are complete, and the story callouts are now readable.
- **New failure:** the price-table header "Sample ranges" renders about #585b64 on #1c1f23 (~2.3:1) in both 1440-scroll-75.jpg and 1440-rm-full.jpg. A section paragraph colour is overriding `.ptable__k`.

## motion: 9.0
The pinned core sample lights GRADE amber. The rail fills SLAB/STEEL/BASE, the count goes 0/8 → 4/8 and the toast fires (1440-scroll-25.jpg). Scroll drives the signature. The story steps are tighter now (~315px apart).
- −0.5: the static frames can't confirm that the pour drawing animates.

## wow: 9.0
The visitor can now watch the spec accumulate: 0/8 in the hero, 4/8 mid-story, then the set/unset sheet, the prefilled textarea and the footer receipt (1440-first.jpg → 1440-scroll-25.jpg → 1440-full.jpg bottom).
- −0.5: the estimator and finish tools still look like standard form UI.

## polish: 8.5
The system is consistent, and the round-3 polish items are fixed.
- "GATE 12 FT" is crossed by the pad's bottom edge line (1440-full.jpg ~y6865).
- A bone sliver shows between the price table's top border and its dark header (1440-scroll-75.jpg).

## Arithmetic
14×9 + 12×9 + 10×9 + 10×8.5 + 8×9 + 8×9 + 7×9 + 7×8 + 12×9 + 8×9 + 4×8.5
= 126 + 108 + 90 + 85 + 72 + 72 + 63 + 56 + 108 + 72 + 34 = 886 / 100 = **8.86**

## Must
1. **#services `.ptable__k` "Sample ranges" (1440-scroll-75.jpg, 1440-rm-full.jpg)**
   - Problem: about 2.3:1 contrast on deep.
   - Fix: `#services .ptable .ptable__k { color: #F2EDE4 }` so the header beats the section's paragraph colour.

## Should
1. **Estimator (1440-full.jpg ~y4950-5300)**
   - Problem: the left column runs out about 300px early.
   - Fix: make the plan + results column sticky, or move "Your real number comes from a visit…" plus the Add/Print buttons under the controls on the left.
2. **RV sizer (1440-scroll-50.jpg)**
   - Problem: the drawing is centred, leaving an empty top-left.
   - Fix: `align-items: start` on the tool grid, with the drawing top-aligned to the kicker.
3. **RV sizer label (1440-full.jpg ~y6865)**
   - Problem: "GATE 12 FT" sits on the pad edge line.
   - Fix: move the label 16px below the pad (or left of the gate bar, rotated).
4. **Price table (1440-scroll-75.jpg)**
   - Problem: a bone sliver shows above the dark head row.
   - Fix: zero the table's top padding, or paint the head flush to the border.
5. **Hero kicker at 390 (390-first.jpg)**
   - Problem: it orphans "POOL DECKS" onto its own line.
   - Fix: drop "Pool decks" below 480px, or put `&nbsp;` between the last two items.
6. **Hero status (1440-first.jpg)**
   - Problem: a middle-dot string.
   - Fix: "Closed now. Opens tomorrow at 5 am."
7. **Reviews (1440-full.jpg ~y9700)**
   - Problem: the left column is empty under the lead quote.
   - Fix: span the lead quote across 2 rows, or let the 4th review card flow under it.

## Elevate
- **a11y:** make contrast part of the spec-sheet grammar. Every dark title-block row (price-table head, sheet head, swatch caption) should be one shared deep-band component with bone ink and amber values, so no section style can repaint it grey again.
- **layout:** give each tool a drawing-sheet grid.
  - The drawing column is sticky and top-aligned with the heading: the estimator plan and the RV pad pin at the top while the controls scroll past.
  - That way the plan and the controls always share the same rows, and no column sits empty beside the other.
