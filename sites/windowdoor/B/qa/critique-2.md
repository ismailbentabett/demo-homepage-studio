COPY: ok

# windowdoor-B, critique round 2 (mode: fast)

**Five-second answer** (1440-first.jpg, 390-first.jpg): "An impact window and door company in Naples. They read the window's sticker label with you, five numbers, before you pay a deposit. I can call (239) 555-0144 or text a photo of my label. They're closed now, open tomorrow at 8, and the rating is a sample." The h1 now carries trade and place. On the phone the sticker comes before the lead and the buttons, but the call bar covers the action.

## Since round 1
Fixed: the #label overprint at 390 (mustFix), the h1 that named no trade or place, the number count, the oak-door photo, the apostrophes, the tracked caps in #compare, the hero caption, OPENING 01-07, the right column in #label, and the primary action names. Not repeated below.

## First screen: 9.0
Earned: the h1 holds the thesis, the trade and the city. The lead and the sticker agree on 5 numbers. Both actions, the open-now line and SAMPLE RATING are present, and the caption is one line (1440-first.jpg). 390-first.jpg: the h1 is 4 lines and the sticker is readable above the fold.
Not 9.5: at 390 the lead and both buttons drop below the fold, behind the sticker (390-first.jpg).

## Distinctiveness: 9.0
Earned: the sticker system now does something. #label rows peel (1440-full.jpg closed, 1440-rm-full.jpg open, 390-full.jpg first row peeled). The service cards say "OWN LABEL" instead of being numbered (1440-scroll-25.jpg).
Deduction: services is still the stock photo-tile plus card grid (1440-scroll-25.jpg).

## Typography: 9.0
Earned: curly apostrophes throughout (1440-scroll-50.jpg, 1440-full.jpg #contact) and sentence-case labels in #compare.
Residue: the WHAT MOVES IT notes on the tags still read about 12px (1440-full.jpg #prices).

## Layout and rhythm: 9.0
Earned: the tone run holds and the #label right column now fills the sticker's height (1440-rm-full.jpg).
Deductions: the services grid shape (1440-scroll-25.jpg). In the motion state, each closed #label row is about 100px of white with only a name and a number (1440-full.jpg #label).

## Photo and video: 8.5
Earned: the flat-roof stucco house is on-topic for SW Florida and graded cool. Hero, services and rain now read as one set (1440-first.jpg, 1440-scroll-25.jpg, 1440-scroll-50.jpg).
Deductions: the "Impact glass" frame in #compare shows as an empty grey gradient box at 1440 (1440-full.jpg #compare). 390-full.jpg shows droplets there. The services house is shot from far away, so you see a facade, not an opening.

## Copy: 9.0
Earned: one count everywhere and one action family ("Price it…") (1440-full.jpg). The meanings are concrete ("9-lb 2x4 fired at 50 feet per second", 1440-rm-full.jpg) and the hedges are honest.

## Mobile: 8.5
Earned: the label stacks as name, then the big value, then the meaning under a curled corner, with no collision (390-full.jpg). No sideways scroll (render.json).
Deductions: #services is 8 near-identical stacked cards, about 2,400px of scroll (390-full.jpg ~y3900–6300). The price-tag punch holes sit as stray black dots beside "per opening" (390-full.jpg #prices).

## Accessibility: 8.5
Earned: 1440-rm-full.jpg shows every meaning and every section. Checks are clean, and forced-colors and print media are present.
Not 9: small light-grey text on paper (the cross-section caption, the insurance note, 1440-full.jpg) and the ~12px tag notes on yellow are borderline.

## Motion and interaction: 9.0
Earned: the peel is now a visible state change (1440-full.jpg vs 1440-rm-full.jpg vs 390-full.jpg). The sliders and month tabs drive their outputs.
Not 9.5: the peel happens only on tap, one row at a time, so a desktop skimmer sees five closed rows.

## Wow moment: 9.0
Earned: the peeling label, the live shutters-vs-glass total and the ORDER BY sticker on the hatched season (1440-full.jpg).
Not 9.5: there is no keepable output.

## Polish: 8.5
Deductions: the empty grey photo box (1440-full.jpg #compare), the stray dots at 390 (390-full.jpg #prices), and the services caption cut with an ellipsis "tall ribbon wind…" (1440-scroll-25.jpg).

## Arithmetic
14×9.0 + 12×9.0 + 10×9.0 + 10×9.0 + 8×8.5 + 8×9.0 + 7×8.5 + 7×8.5 + 12×9.0 + 8×9.0 + 4×8.5
= 126 + 108 + 90 + 90 + 68 + 72 + 59.5 + 59.5 + 108 + 72 + 34 = **887 / 100 = 8.87**
8.5 ≤ 8.87 < 9.5, no mustFix → **ELEVATE**.

## Must
None.

## Should
1. **#compare "Impact glass" photo (1440-full.jpg):** the frame renders as a flat grey gradient at 1440. Make the image load eagerly or drop the reveal's initial opacity/filter on it, and verify on the 1440 frame that the droplets show as they do at 390.
2. **#prices tag punch hole at 390 (390-full.jpg):** the black dots float beside "per opening". Under 640px, hide the hole (`display:none`) or move it to the top-left corner of the cream half.
3. **#services caption (1440-scroll-25.jpg):** "Flat-roof stucco house, tall ribbon wind…" is cut. Shorten it to "Flat-roof stucco house, Florida light." or allow 2 lines.
4. **#label closed rows at 1440 (1440-full.jpg):** cut the reserved height of a closed row to the name/value line (about 56px) and let the meaning expand on peel. Or open the first row by default on desktop as it is on 390.
5. **Small grey text:** the cross-section caption, the insurance note under #compare and the WHAT MOVES IT notes. Raise them to ≥ 14px and set the colour to the body ink, not the muted grey.
6. **390 first screen (390-first.jpg):** move the lead and the two buttons above the sticker, or shrink the sticker to its 3 top rows on phones, so the h1 and actions share the first screen.

## Elevate
- **Photo (8.5):** make every photo a labelled opening. Crop the services and compare images to the opening itself (a slider track, a window corner with its frame and sill, a French door to the pool), each wearing a small 5-number sample sticker in the corner. The photography then says "products with their label" rather than "a house" or "rain", and the empty compare frame becomes a real impact pane in the same cool grade.
- **Mobile (8.5):** re-cut services for the thumb as a label roll: one horizontal snap row of compact sticker tabs (name, one key number, Price it) instead of 8 stacked cards. Pull the hero lead and actions above the sticker so the phone reads headline, actions, then label. Swap the punch-hole for a corner curl on phone price tags so the motif stays one gesture.
