COPY: ok

## Five-second test
- **1440-first.jpg**: "Fieldtest Concrete, Mesa AZ: driveways, RV pads, pool decks. They put thickness, steel and base on the quote as numbers. I can build my spec or call (480) 555-0132." Answered in under 3 seconds.
- **390-first.jpg**: same answer; h1 3 lines, both CTAs and the Sample rating above the fold, sticky Call / Text / Spec 4/8 bar.

Screenshots exist this round. Round 2 scores were capped for lack of evidence; this round is scored from the shots.

## firstScreen: 9.0
The headline is a promise you can check. The stratified "6" numeral with dimension callouts *is* the product, and the CTA hierarchy is clear. The next band peeks about 70px (1440-first.jpg).
- The hero status line "Closed · opens tomorrow 5 am · Mesa + East Valley · 4.8 ★" is a middle-dot meta string in small grey mono (1440-first.jpg) (−0.5 from 10).
- The desktop rail is a column of ticks with a vertical "YOUR SLAB" label. A first-time visitor can't read what it is (1440-first.jpg) (−0.5).

## distinctiveness: 8.5
The signature runs through the hero, the core-sample story (1440-scroll-25.jpg), the estimator plan, the contact spec sheet and the footer receipt (1440-full.jpg).
- Sibling A (A/qa/screens/1440-first.jpg) also leads with a rebar-on-chairs cross-section and a base/steel spec list. The skins differ (dark condensed vs light grotesk) but the thesis is the same (−0.5).
- A mono tracked-caps kicker sits over every section heading (1440-full.jpg) (−0.5).

## type: 8.5
Oswald caps at a confident scale, Outfit body at ≥16px, tabular numerals in the estimator.
- 1440-first.jpg has three mono voices in one view: kicker, spec labels and status line.
- 1440-scroll-50.jpg has mono micro-labels on every table row.
- Middle-dot meta strings appear in the hero and the footer receipt.

## layout: 8.5
The tone run alternates well. The round-2 deep/deep collision is fixed: the amber contact band now sits between service-area and footer (1440-full.jpg).
- The services left column is empty for about 480px under its heading (1440-scroll-75.jpg).
- The estimator has a ~180px gap between the intro and the sliders (1440-full.jpg ~y5150).
- A lone dimension line sits on an empty dark strip under the sunset (1440-full.jpg ~y5030).

## photo: 8.0
I judged the drawn treatments on their merit, since the stock is a placeholder. The core sample (1440-scroll-25.jpg) and the hero numeral are strong, and the map is honestly labelled as a schematic.
- The broom swatch is a 615×460 field of plain stripes with nothing to read (1440-scroll-50.jpg).
- The sunset break is flat clip-art mountains and a disc (1440-full.jpg ~y4600-5000), well below the craft of the core sample.

## copy: 9.0
The copy is specific and checkable: "Hit caliche? You see the rock…" (1440-scroll-25.jpg), and the reviews quote numbers. The guarantee matches facts.json and carries a Sample terms tag. Every price, rating and review is labelled.
- Small tells: the "Price it →" arrow repeats on all 8 rows, and the rows are numbered 01-08 (1440-scroll-75.jpg). Not enough to drop the score.

## mobile: 9.0
390-first.jpg is excellent. 390-full.jpg stacks cleanly, and render.json shows no overflow at 320 or 390.
- A ~60px bone strip shows under the footer at the end of 390-full.jpg.

## a11y: 8.0 (capped by mustFix)
The reduced-motion full pages (1440-rm-full.jpg, 390-rm-full.jpg) show all content.
- **Contrast failure:** the inactive core-sample label "GRADE" is about #3a3d42 on #1c1f23 (1440-scroll-25.jpg).

## motion: 8.5
The pinned core sample lights the active layer, and the matching rail tick lights with it (1440-scroll-25.jpg). The story and the signature move together.
- The story leaves 400-600px of empty dark between layers (1440-scroll-25.jpg, 1440-full.jpg ~y3700-4300), so the scroll is long for five lines.
- The rest of the page reads as standard reveals in the static frames (1440-scroll-50.jpg, 1440-scroll-75.jpg).

## wow: 8.5
The spec sheet and the footer receipt close the loop (1440-full.jpg bottom).
- Mid-page, the rail never visibly fills, and it already reads 4/8 before the visitor has chosen anything (1440-first.jpg).

## polish: 8.5
The system is consistent: 2px radius, one stroke weight, dashed add-to-spec buttons.
- A bone 56×72px square shows above the rail at top-right in every scroll frame (1440-scroll-25/50/75.jpg).
- The bone strip under the mobile footer (390-full.jpg).

## Arithmetic
14×9 + 12×8.5 + 10×8.5 + 10×8.5 + 8×8 + 8×9 + 7×9 + 7×8 + 12×8.5 + 8×8.5 + 4×8.5
= 126 + 102 + 85 + 85 + 64 + 72 + 63 + 56 + 102 + 68 + 34 = 857 / 100 = **8.57**

## Must
1. **1440-scroll-25.jpg, #story core-sample callouts**
   - Problem: the inactive labels ("GRADE" and the other dimmed callouts) are about 1.5:1 on deep.
   - Fix: set inactive labels to ≥ #8a8f98 on #1c1f23 (4.5:1 for 14px mono). Mark the active layer with amber plus weight instead of fading the others.

## Should
1. **Fixed rail top (1440-scroll-25/50/75.jpg)**
   - Problem: a bone 56×72px gap sits above the rail when the header hides.
   - Fix: start the rail at top:0 (or paint the header slot deep) so the column is continuous.
2. **#services (1440-scroll-75.jpg)**
   - Problem: the left column is empty for 480px.
   - Fix: make the heading block `position: sticky; top: 120px`, or put the RV/driveway sample price table under it.
3. **Estimator intro (1440-full.jpg ~y5150)**
   - Problem: a ~180px gap sits between the intro and the sliders.
   - Fix: top-align the controls under the intro (`align-content: start`) or move the plan drawing to span both rows.
4. **Under the July break (1440-full.jpg ~y5030)**
   - Problem: an unlabeled dimension line floats on a dark strip.
   - Fix: give it a value ("7 days wet cure") or remove the strip.
5. **Hero status line (1440-first.jpg)**
   - Problem: it's a middle-dot meta string.
   - Fix: split it into two quiet items, the open-state chip and the Sample rating. Move "Mesa + East Valley" out, since the kicker already says it.
6. **Kickers (1440-full.jpg)**
   - Problem: a mono kicker sits on every section.
   - Fix: keep them only on the tool sections (Tool 01/02/03). Drop "What we pour", "Field notes" and "Area & hours".
7. **Desktop rail (1440-first.jpg)**
   - Problem: the rail is unreadable.
   - Fix: show the current set line ("SLAB 5 IN.") horizontally at the rail's top when the visitor adds something, and start at 0/8 or label the defaults "Our default".
8. **Broom swatch (1440-scroll-50.jpg)**
   - Problem: the swatch is plain stripes.
   - Fix: add an edge profile and a dim-line for groove depth, and cut the frame to about 60% of its height.
9. **Story spacing (1440-scroll-25.jpg)**
   - Problem: too much empty scroll between the five layers.
   - Fix: cut the step height from 55svh to about 35svh.
10. **390-full.jpg end**
    - Problem: a bone strip shows below the footer.
    - Fix: pad the footer itself, not the body, for the sticky bar, so the reserved space is deep.

## Elevate
- **photo**: bring every drawn surface up to the core sample's craft.
  - Make each finish a measured specimen: a cut tile with edge profile, aggregate scale and a depth dim-line.
  - Redraw the July break as a section-line drawing of a dawn pour (truck, chute, slab, a temperature callout) instead of flat mountains and a sun.
- **a11y**: redesign the story's active/inactive grammar so state is carried by colour, weight and a filled marker on the dim-line, not by fading the other layers.
  - The rail mirrors the same marker.
  - Every label stays readable at every scroll position.
