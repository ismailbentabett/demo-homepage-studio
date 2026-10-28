# assembly-B · Concept (Piece Count Assembly, Jersey City · PROOF & TOOLS · dark-led)

## 1. Three obvious concepts, rejected
1. **"Skyline at night" hero video + "Assembly you can trust" + a price form.** Every Jersey City contractor with a
   budget does the Hudson skyline. Template; says nothing about pieces or walls. Rejected.
2. **The receipt that writes itself (brief seed, literal).** A running receipt strip on the right edge. cleaning-B
   already delivered "Running Receipt" (thermal strip, torn edge, lines wipe in). Taking it = a clone. Rejected.
3. **A hex key / allen wrench as the brand mark and section bullets.** Brief §4 cliché #1 (cartoon hex key logo).
   Every competitor. Rejected.

## 2. Thesis
**The page is the stack of flat-pack cartons in a Jersey City tower hallway: every answer is stencilled on a carton
side, the stack grows as you tap your pieces, and the page ends by flattening it for haul-away.**
(Material: corrugated carton + stencil. Verbs: stack, stencil, flatten.)

## 3. Signature system: "Stencilled Carton Stack" (`data-sw-signature` on the margin stack)
Primitive (drawn once in 03-system): `.carton` = a tile with corrugated flute edge (repeating gradient, 3px/5px),
chamfered top-right flap (clip-path), and a `.plate` = bridged stencil numerals "PC 03" (Sofia Sans Condensed 800,
a 2px horizontal bridge cut through the glyphs via mask).
- **Hero (tool):** the item counter tiles ARE cartons (bed, dresser, desk, wardrobe, TV, crib, treadmill); each
  shows its stencil count "×2"; the big plate "PC 04" + "about 3–4 h · Sample $280–$420" beside the h1.
- **Margin stack (structure, whole page):** right margin column on ≥1100px, bottom sheet on phones. Each tapped piece
  drops a small stencilled carton onto the stack; the plate totals pieces. Empty state: "PC 00 · tap a piece".
- **Wall checker (data):** each wall cross-section carries a stencil plate "WALL 04 · CONCRETE"; choosing it drops a
  "TV" carton onto the stack with the sample range.
- **Pieces / packing list (detail):** section heads carry outlined stencil numbers PC 01-07 at 18-22vw bleeding right;
  price rows start with stencil codes (DSK, BED, TV-D, TV-C, GYM, BOX).
- **Proof (variation):** reviews are carton labels: stencil plate = the service item + town, e.g. "TV · CONCRETE ·
  JERSEY CITY"; the rating is a big plate "4.8" with Sample tag.
- **Building checklist (variation):** checklist rows are stencilled codes "ELEV", "COI", "HRS", "WALK-UP".
- **Footer (wow end):** the stack flattens: SVG cartons fold to flat sheets and tie into a bundle (haul-away),
  plate reads "PC 00 · boxes out", call button beside it. Reduced motion: the flat bundle drawn static.

## 4. Type
- Display: **Sofia Sans Condensed** (variable wght 1-1000), 760-860 for h1/plates, 600 for item names. Tall, packed,
  reads like carton side-printing; big tabular numbers stay narrow so a price fits a tile.
- Text: **Geist** (100-900) 400/500 body, 600 labels. Neutral, crisp on dark at 18px.
- Accent: **JetBrains Mono** 500, `--fs--1`, uppercase, tracking .06em: stencil codes, Sample tags, plate sublines.
- Registry: Sofia Sans Condensed 0 uses; Geist 0 uses; pair unique. (Reserved.)

## 5. Palette: "Tower Night + Poured Concrete + Stencil Lemon"
| role | hex | use |
|---|---|---|
| deep / ink | #0E141C | tower-night ground (dark tones), text on light/yellow |
| mid | #252C36 | concrete panels, cards on dark |
| paper | #F1EFE9 | light bands (paper), text on dark |
| paper-2 | #E2DFD6 | poured-concrete light panel |
| accent | #F2DA1A | numbers, totals, primary button fill, plates on dark |
| signal | #8EB8FF | window-light blue: "open now" dot + inline links on dark only |
| muted-dark | #A9B1BB / #B4BBC4 | secondary text on deep / on mid |
| muted-light | #545C66 / #4F5761 | secondary text on paper / on paper-2 |

Contrast (node tools/contrast.mjs, real):
| fg on bg | ratio | verdict |
|---|---|---|
| #F4F2EC on #0E141C | 16.52 | body ok |
| #A9B1BB on #0E141C | 8.53 | muted ok |
| #F2DA1A on #0E141C | 13.05 | accent words ok, focus ring ok |
| #8EB8FF on #0E141C | 9.20 | links ok |
| #F4F2EC on #252C36 | 12.57 | body ok |
| #B4BBC4 on #252C36 | 7.26 | muted ok |
| #F2DA1A on #252C36 | 9.93 | accent words + focus ok |
| #0E141C on #F2DA1A | 13.05 | button text ok, focus ring on yellow band ok |
| #3A3300 on #F2DA1A | 8.96 | muted text on yellow band ok |
| #0E141C on #F1EFE9 | 16.08 | body + focus ok |
| #545C66 on #F1EFE9 | 5.89 | muted ok |
| #0E141C on #E2DFD6 | 13.87 | body ok |
| #4F5761 on #E2DFD6 | 5.49 | muted ok |
| #2D5BD7 on #F1EFE9 | 5.08 | link on paper ok (optional) |
| #5C646E on #0E141C | 3.08 | **rules / outlines only, never words** |
| #F2DA1A on #F1EFE9 | — | **never**: yellow on paper is a shape only (plate fills with ink text) |
Primary button = #F2DA1A fill + #0E141C text (13.05). No white-on-button pair exists.

## 6. Hero family 7 — tool-first
Library: 5 uses (limit 6 per tool; METHOD cap of 3 cannot be met by any family, picked the brief's family as told).
Unique in niche (A=12, C=11). Cliché broken: not a form-in-a-white-card beside a stock photo. The tool is a dark board
of corrugated carton tiles at full hero width; the margin stack starts empty beside it; no hero photo needed (one
narrow vertical crop of a TV on concrete at night may sit behind the plate at ≥1100 only, 30% of width).
JS off: tiles are a plain list with each sample range from facts.proof.prices + the call button.

## 7. Motion score
- Intro: carton tiles rise 16px→0 with 60ms stagger (≤ 520ms total), PC 00 plate stamps (scale .96→1, 200ms). Text
  visible from frame 0; no blocking.
- Story 1 (stack): every tapped piece drops a carton onto the margin stack (translateY -24px→0, 320ms ease-out) and the
  plate count + range tick up (counters, tabular). Removing lifts it off.
- Story 2 (draw): the wall band: on enter, each cross-section's anchor draws into the wall (stroke-dashoffset 900ms,
  stagger 120ms) and its plate counts to the sample range.
- Footer: the stack folds flat (scaleY 1→.12 per carton, 60ms stagger, then a strap line draws across), once.
- Hover (one language): carton tiles lift 4px + flap chamfer opens 14→22px, 200ms; text links get a yellow
  underline scaleX 0→1 from the left. Inside `(hover:hover)`.
- Reduced motion: all states final: stack shows its current count statically, anchors drawn, footer bundle flat.

## 8. Tools
| tool | inputs | output | kit | hand-off |
|---|---|---|---|---|
| Item counter (hero) | +/− per piece: bed, dresser, desk, wardrobe, TV, crib, treadmill | PC total, Sample $ range (sums of facts.proof.prices from/to), "about N–M h (Sample)" | `estimator` | "Book this list" → form `items` + `service=Furniture assembly by the piece` (prefill) |
| Wall checker | wall: drywall / plaster / brick / concrete; TV size ≤55, 65, 75 | anchor method (stud lag, toggle, mortar-joint sleeve, hammer-drill sleeve), mount type, Sample range (TV drywall $139–219 / brick-concrete $199–329) | `tabs` | "Mount on this wall" → `service=TV mounting on any wall` + note; "Text a photo of the wall" sms: |
| Building checklist | building: tower w/ freight elevator, walk-up, two-family, townhouse | checklist: elevator booking, insurance certificate (we email it), quiet hours, box haul-away | `checklist` | "Add to my booking" → form note prefill |
| ZIP check | ZIP | in area / not | `zip` | yes → form ZIP prefilled |
| Quote form | name, phone, ZIP, items, wall, building, date | Sample confirmation | `form` | — |
Prices only from facts.proof.prices, every figure tagged Sample. Time bands labelled "Sample time".

## 9. Voice
- "Tap what came in the boxes. The total shows before anyone rings the buzzer."
- "Poured concrete eats drywall anchors. We bring the hammer drill and sleeve anchors."
- "Your building wants an insurance certificate? Ask, and we email it to the management office." (no turnaround promise: not in facts)
Never: "hassle-free", "top-notch", "quality you can trust", "handyman", "solutions".
