COPY: ok

# mason-C (Kilnside Masonry): critique, round 4 (fast, final round)

**Five-second test (1440-first.jpg / 390-first.jpg):** "This is a St. Louis tuckpointing and brick repair shop for old soft-brick houses. The map shows my neighborhood's brick. I can call (314) 555-0160 or price the job. They've been on city brick 18 years, and the rating is marked as a sample." The test passes at both sizes.

**Changes since round 3, verified on the screenshots:**
- The hero is rebuilt: a deep tone, the map runs full height to the edge, and hood chips fill the dead quadrant.
- The curly apostrophe is in place.
- The services stamp at 390 is a normal size.
- The story labels are off the artwork at 390.
- The review boxes are now real stamp chips.
- The finder mini map is filled.
- The stat plates are pressed mono.
- The price verb is unified.
- The inactive rail labels are readable.

## firstScreen: 9.5
Earned: the 8-word, 2-line h1 has trade, city and the outcome ("soft brick"). There is one loud Call and an outlined Price it. The phone shows in the header and the hero. The proof chips are marked SAMPLE RATING. The paper band peeks about 56px. The signature (the clay neighborhood map with its KM stamp and Mississippi edge) owns the right half (1440-first.jpg). On 390-first.jpg the h1 runs 4 lines, both actions sit above the fold, and the map peeks.
Not 10: the 1440 left column stacks kicker, h1, lead, CTAs, proof chips and 7 hood chips, which is dense for a 3-second read.

## distinctiveness: 9.0
Earned: sibling A (mason/A/qa/screens/1440-first.jpg) is a cream hero with a sans display and a brick panel. C is now a deep hero with a hood map in Young Serif, so the round-3 skeleton overlap is gone. The stamp system runs through every section header (01 NB to 07 PR), the hero map, the finder card, the review stamps, the stat plates and the footer (1440-full.jpg).
Not 9.5: the review stamps say "ST. LOUIS" even on the Soulard quote (1440-full.jpg reviews). The hood colours from the map do not travel down the page.

## type: 9.0
Earned: `neighborhood’s` now has a curly apostrophe. The 4.9 / 164 / 18 stats sit in pressed tabular mono plates (1440-scroll-75.jpg). The break line gives a display scale-contrast moment. Review quotes are set in the serif, and hours use en-dash ranges.
Deductions held: the story SVG labels render at about 8–9px at 390 (390-full.jpg, frames 01, 02 and 05), under the 13px floor. Tracked mono runs still cluster in the hero (1440-first.jpg).

## layout: 9.0
Earned: the tone sequence has no touching dark bands (1440-full.jpg). The hero is filled edge to edge (1440-first.jpg). The services section is an asymmetric card plus a ruled list (1440-scroll-50.jpg). The page has a visible loud → dense → breath shape.
Not 9.5: the timing season box ends about 95px short of its neighbours (end of 1440-full.jpg). Review cards 2 and 3 have about 150px of empty tail (1440-full.jpg).

## photo (drawn treatments): 9.0
Earned: one hand and one palette run across the map, the six story drawings, the cornice strip, the chimney and the season chart. The round-3 problems are fixed (390-full.jpg, 1440-full.jpg):
- Labels moved to plates or margins.
- The empty review rectangles are gone.
- The mini map is solid.

Not 9.5: chimney callouts ① and ② sit stacked and touching at the crown (1440-full.jpg, 390-full.jpg).

## copy: 9.0
Earned: it is a mason's voice throughout. The price verb is now one family (Price it / for my street / my chimney / for this week). Sample labels are present. Every fact traces to facts.json.
Not 9.5: the contact h2 "Get a number for your house" drops the "Price it" vocabulary at the final ask (1440-full.jpg).

## mobile: 9.0
Earned (390-first.jpg, 390-full.jpg, render.json):
- The h1 is 4 lines and both CTAs are above the fold.
- The sticky Call / Price it bar works.
- The services stamp is fixed.
- The story stacks statically.
- The tools are stacked full width.
- There is no overflow at 320 or 390.

Not 9.5: the 8px SVG labels.

## a11y: 9.0
Earned: the reduced-motion full pages at 1440 and 390 show every word (1440-rm-full.jpg, 390-rm-full.jpg). The checks are clean, the inputs are labelled, and the rail labels are readable (1440-scroll-25.jpg).
Watch: the tiny SVG labels at 390.

## motion: 9.0
Earned: the pinned story's progress rail explains the order (1440-scroll-25.jpg, 1440-scroll-50.jpg). The chimney signs light up (1440-scroll-75.jpg). Reduced motion stacks the frames (1440-rm-full.jpg).
Not 9.5: there is no new motion evidence since round 3. The frames still crossfade, and no control micro-interaction is visible.

## wow: 9.0
Earned: three connected moments in the signature's language:
- The hood map and chips feed the finder card.
- The chimney drawing lights up as you tick signs.
- The season chart shows frost-risk hatching.

All of them read in reduced motion (1440-first.jpg, 1440-full.jpg, 1440-rm-full.jpg).
Not 9.5: the chosen hood does not recolour anything beyond the finder.

## polish: 9.0
Earned: one radius, one rule weight, and one stamp object from hero to footer. The round-3 inconsistencies are fixed (1440-full.jpg, 390-full.jpg).
Not 9.5: the chimney callout overlap and the timing box heights.

## Arithmetic
14×9.5 + 12×9 + 10×9 + 10×9 + 8×9 + 8×9 + 7×9 + 7×9 + 12×9 + 8×9 + 4×9
= 133 + 108 + 90 + 90 + 72 + 72 + 63 + 63 + 108 + 72 + 36
= 907 / 100 = **9.07**

Fast mode requires weighted ≥ 9.0 and every category ≥ 8.5 (photo ≥ 8.0). The checks are clean and there is no mustFix, so the hint is **PASS**.

## Must
(none)

## Should
1. **#reviews stamp chips** (1440-full.jpg): stamp each review with the reviewer's hood and its map clay colour. Jenna C. → "5 ★ SOULARD" in the Soulard red. Ron D. → "5 ★ ST. LOUIS" stays neutral. Priya N. → "5 ★ MAPLEWOOD".
2. **Story SVG labels at < 640px** (390-full.jpg, frames 01, 02 and 05): scale the label text so it renders at ≥ 12px on a phone, using a larger font-size in the SVG under a `max-width:640px` rule or HTML captions under the drawing.
3. **Chimney callouts ① ②** (1440-full.jpg, 390-full.jpg, #chimney drawing): move ② to the left side of the crown, or offset it 28px up, so the two circles don't touch.
4. **Timing band** (end of 1440-full.jpg): set `align-items:start` on the three-box grid so the boxes don't pretend to be equal, or stretch the season box to match.
5. **Contact h2** (1440-full.jpg #contact): "Price your house's brick" or keep the headline and change the kicker to "Price it", so the final ask uses the page's verb.

## Elevate
(none: PASS)
