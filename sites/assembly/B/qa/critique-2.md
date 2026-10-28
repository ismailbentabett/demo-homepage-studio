COPY: ok

# assembly-B · Critique round 2 (fast mode)

**Five-second test** (1440-first.jpg, 390-first.jpg): "Jersey City furniture assembly, priced before the buzzer. I tap the pieces I bought, each shows a sample range, and one TV-on-concrete is already in my list. Call (201) 555-0105 or book the list. Why them: priced per piece, they deal with concrete walls and building rules." Clear in under 5 s; trade and city are now in the h1.

Changed since round 1: city + trade in the h1; the margin stack opens pre-filled (TV-C ×1, PC 01) with a ghost-carton outline; hero buttons cut to one "Book this list" per column; #pieces is now a ruled packing slip; verbs unified to the Book / Add family; hero mono noise reduced. Still unchanged: **zero photographs or video** (dist: 0 `<img>`, 0 `<video>`).

## firstScreen: 9
1440-first.jpg: h1 "Jersey City furniture assembly, priced before the buzzer." names trade + city + outcome; the board is the tool; the stack shows output at 0 ms ("Started for you: one TV on concrete. Clear it…"); phone in header; proof line Sample-tagged; paper band peeks ~65px. 390-first.jpg: h1 3 lines, Call + Book above the fold, bottom bar "Call | PC 01 My list".
Deductions: 1440-first.jpg, eyebrow "TV MOUNTING & WALL ANCHORING · HOBOKEN TO BAYONNE" repeats what the h1 and proof line say (−0, noted). Held at 9, not 9.5: no photo means the first screen proves the price, not the craftsman.

## distinctiveness: 9
1440-full.jpg: carton/stencil system in the hero tiles, PC 0X plates, ruled packing-slip ledger with the carton drawing ×2, WALL 01–04 plates, yellow haul-away band with tied bundle, ELEV/COI/HRS codes, review labels, footer "PC 00" bundle. Siblings A (light isometric) and C (rust plan + serif) share nothing.
Deduction: 1440-scroll-25.jpg / 1440-scroll-75.jpg: ghost outlined "PC 02", "PC 06" and "BOX" still sit behind three heads as wallpaper (−0.5); offset by the bento fixed into a slip (+0.5).

## type: 9
1440-first.jpg: Sofia Sans Condensed display at real scale, Geist body, mono restricted to codes and Sample tags. 390-first.jpg: eyebrow fits one line now. Stencil numerals in 1440-scroll-50.jpg (01–04) carry the concept.
No new deduction; the remaining mono tags are mostly mandatory Sample labels.

## layout: 8.5
1440-full.jpg: tone run deep → paper → deep → yellow → paper-2 → mid → paper → deep → paper → deep, no two darks touching, 5+ layout families, sticky right column.
Deductions:
- 1440-scroll-50.jpg, #visit: steps 01/02/04 end ~150px above step 03's tool chips; the band reads ragged with dead paper under three of four columns (−0.5).
- 1440-full.jpg: the only full-bleed break is the yellow haul-away band; no quiet, single-statement section, so the scroll has little density change (no 9 anchor met).

## photo: 7
1440-full.jpg / 390-full.jpg / 1440-rm-full.jpg: still not one photograph or video on the page (dist: 0 img, 0 video). The wall cross-sections (1440-scroll-25.jpg) are well drawn, but a homeowner letting a stranger drill their concrete never sees a mounted TV, a built bed or a real person's work. Below the 8 anchor; the round-1 elevate move was not applied. Floor 8.5 fails.

## copy: 9
1440-scroll-25.jpg: "Poured concrete eats drywall anchors."; 1440-scroll-75.jpg: "Your building has rules. Tick them." + freight elevator / COI / quiet hours; 1440-scroll-50.jpg: "The van carries what a Jersey City wall asks for." Action verbs now one family: Book this list / Book this piece / Add this TV / Add these to my list. Every price, rating and the guarantee Sample-tagged ("SAMPLE TERMS", 1440-scroll-25.jpg). 0 em dashes. All facts trace to facts.json.
Noted only: insurance-certificate idea appears in #visit, #rules and a review.

## mobile: 9
390-first.jpg: re-composed hero, split bottom bar turns the margin stack into a sheet showing PC 01. 390-full.jpg: tiles 2-up, walls stack, checklist readable; render.json overflow 0 at 320 and 390.

## a11y: 9
1440-rm-full.jpg and 390-rm-full.jpg show every section and word. dist: skip link, focus-visible, forced-colors, labelled counters, aria-expanded on menu/sheet, aria-invalid on fields. Static/render clean.

## motion: 8.5
1440-scroll-25/50/75.jpg: sticky stack holds its position through the scroll; reveal variants exist (clip, fade, scale, stagger in dist).
Deduction: 1440-scroll-25/50/75.jpg: the stack shows the identical PC 01 state in every frame; a scroller who never taps sees the signature sit still. The concept's "draw" story (anchors driving into the walls) is not evidenced as a scroll-linked moment in any frame (no 9 anchor).

## wow: 9
1440-first.jpg: the packing list + pre-filled stack + wall checker is a real tool a Jersey City renter would use, now demonstrating its own output at load. 1440-full.jpg footer: stack folded into a "PC 00" bundle closes the thesis.

## polish: 9
1440-full.jpg: radius 0 throughout, flute edge consistent on tiles and cartons, designed footer; dist has favicon, apple-touch, OG, theme-color, JSON-LD, print and forced-colors CSS.

## Arithmetic
14×9 + 12×9 + 10×9 + 10×8.5 + 8×7 + 8×9 + 7×9 + 7×9 + 12×8.5 + 8×9 + 4×9
= 126 + 108 + 90 + 85 + 56 + 72 + 63 + 63 + 102 + 72 + 36 = 873 / 100 = **8.73**

## Must
None. No DEMO-RULES breach, no hidden text in reduced motion, no overflow. (Photo fails its floor as a score, not a rule breach.)

## Should
1. **#visit** (1440-scroll-50.jpg): align the four steps' bottoms: move the tool chips under step 03 into a full-width ruled strip below all four steps ("THE VAN: hammer drill · 4 ft level · stud finder · sleeve anchors · toggles & lags"), so no column trails 150px of empty paper.
2. **Ghost PC outlines** (1440-scroll-25.jpg, 1440-scroll-75.jpg): keep the outline on #walls only; remove "PC 06" behind #area and "BOX" in the haul-away band.
3. **Hero eyebrow** (1440-first.jpg): now redundant with the h1; shorten to "PC 00 · PRICED BY THE PIECE" so it adds the method, not a repeat of the trade.

## Elevate
- **photo (7):** Put the approved stock inside the carton system as "what was in the box": 3–4 frames (TV on a hard wall, built bed or crib, boxes in a hallway, drill into masonry), each in a flute-edged carton frame with a stencil plate (FIG TV-C, FIG BED), graded to one ink/lemon duotone so they read as one shoot, revealed by the chamfered flap opening on scroll. One beside WALL 04 as the result, one behind the haul-away bundle, one leading the reviews. Without this the photo floor (8.5) cannot be met.
- **motion (8.5):** Tie the scroll to the thesis so a non-tapper sees it: as #walls enters, each cross-section drives its anchor into the wall (stroke-dashoffset) and the WALL plate counts to its sample range; as the page reaches the footer, the margin stack visibly folds flat into the PC 00 bundle (scrubbed transform), so the stack grows, works and collapses across the scroll.
