COPY: needs copy-chief (copy 8.5: primary action has four names)

# assembly-B · Critique round 1 (fast mode)

**Five-second test** (1440-first.jpg, 390-first.jpg): "Furniture assembly and TV mounting in Jersey City. I tap the pieces I bought, see a sample price for each, then call or book the list. Why them: they price by the piece and handle concrete walls and walk-ups." Answerable in 5 s, but the trade and city sit in a small mono eyebrow, not in the h1.

Siblings (A/1440-first.jpg light isometric drawing, C/1440-first.jpg rust floor plan + serif) share nothing with this dark condensed-stencil carton board. Distinct.

## firstScreen: 8.5
Earned: tool-first hero executed with intent; carton tiles visible at 0 ms; phone in header (1440) and a Call button + sticky Call bar (390); proof line "Closed · opens tomorrow 9 am · … 4.8 from 386 reviews" with SAMPLE RATING; 390 h1 is 3 lines with both actions above the fold (390-first.jpg).
Deductions:
- 1440-first.jpg / 390-first.jpg: h1 "Price your list before anyone rings the buzzer." names neither trade nor city; they live in the 13px mono eyebrow (−0.5).
- 1440-first.jpg: "Book this list" appears three times in one view (hero outline button, under the board, in the margin stack): the hierarchy blurs (−0.5).
- 1440-first.jpg: next band peeks only ~25px (below the 40–120px target); the margin stack has a ~130px dead void between "PIECES ON YOUR LIST" and the rule in its empty state. (−0, noted, covered by the elevate move.)
Start 8, +1 for the hero being the tool itself and the signature on screen, −1.0 = 8.5 (rounded from evidence up for the 390 composition).

## distinctiveness: 9
1440-full.jpg: the carton/stencil system runs through hero tiles, PC 01–06 section plates, the wall checker ("WALL 01–04" plates), the yellow haul-away band with flat carton bundle, ELEV/COI/HRS checklist codes, review carton labels, and the footer "PC 00 · boxes out" bundle. Concept delivered. Cover-the-logo mostly works.
Deductions:
- 1440-scroll-25/50/75.jpg: the giant outlined "PC 02/03/05/06" ghosts behind every heading are pure decoration repeated identically each section (−0.5).
- 1440-full.jpg, #pieces: the services ledger (one big cell + small cells) reads as a bento grid (AI tell, −0.5). Offset by the signature doing real work (tool output, wall picker) +1.

## type: 8.5
Sofia Sans Condensed display is tight and carton-like, Geist body reads well, JetBrains Mono is the declared accent. Scale contrast in hero h1 vs. labels; tabular ranges in the tiles; `&nbsp;` before "buzzer" prevents the orphan.
Deductions:
- 1440-first.jpg: 4+ tiny tracked mono caps labels in one view ("FURNITURE ASSEMBLY & TV MOUNTING · JERSEY CITY, NJ", "TAP + FOR EVERY PIECE.", "SAMPLE PRICING", "PIECES ON YOUR LIST", "TAP A PIECE. IT LANDS HERE.", eyebrow codes) (−0.5).
- 390-first.jpg: mono eyebrow wraps to 2 lines, "JERSEY / CITY, NJ" split (part of the same deduction; fix in Should).
+0.5 for type carrying the concept (stencil plates, condensed caps item names) and −0.5 for the label noise = 8.5.

## layout: 8.5
1440-full.jpg: tone run deep → paper → deep → yellow → paper-2 → mid → paper → deep → paper → deep, never two darks touching; ≥ 4 layout families (tool board, ledger, wall cross-section row, 4-step row, checklist, hours table, form). Sticky margin stack holds the right column at 1440.
Deductions:
- 1440-scroll-25.jpg: the paper band after the "1 YR" line leaves ~150px of dead paper before the dark band, and the margin column is empty in every section except where the stack floats (−0.5 for an under-used right column in the empty state).
- 1440-full.jpg: the scroll has little density change: the yellow haul-away band is the only full-bleed break; no quiet, breathing section with one huge statement (no shape you can see) (−0 / held at 8.5, no 9 anchor met).

## photo: 7
1440-full.jpg / 390-full.jpg: there is not a single photograph or video on the page. dist/index.html has zero `<img>` and zero `<video>`. The wall cross-section SVGs are well drawn and the concept allowed "no hero photo needed", but a homeowner never sees a mounted TV, a built bed or a hallway of cartons. For a trust buy in a stranger's apartment that is a real loss, and the category has nothing to score except illustration. 7 = above floor because the illustrations are on-topic and consistent, below 8 because the 8 anchor (consistent on-topic frames with good alt) is not present at all.

## copy: 8.5
Strong, trade-specific: "Poured concrete eats drywall anchors.", "hammer drill, sleeve anchors, toggles & lags", "freight elevator needs booking", "management wants an insurance certificate", "the number is on the table before we climb the stairs". Every price, rating and the guarantee carries a Sample tag (1440-first.jpg, 1440-scroll-25.jpg). Zero em dashes. Facts check: guarantee, 4.8/386, prices all in facts.json.
Deductions:
- 1440-full.jpg: the primary action has four names: "Book this list" (hero, stack), "Price it" (every service cell, 1440-scroll-25.jpg), "Add to my booking" (1440-scroll-75.jpg), "Send the list" (form, 1440-full.jpg) (−0.5).
- 1440-full.jpg #visit vs #rules: the insurance certificate / building paperwork idea is told in step 02, the rules section and reviews (light repeat, noted only).

## mobile: 9
390-first.jpg: re-composed, not squeezed: h1 3 lines, Call primary full-width, outline secondary, bottom bar split "Call | PC 00 My list" (the margin stack becomes a bottom sheet: phone-specific decision). 390-full.jpg: tiles 2-up, walls stack, checklist stays readable; render.json overflow 0 at 320 and 390. CSS breakpoints 390/640/900/1100 cover 320.
No deductions beyond the eyebrow wrap counted in type.

## a11y: 9
1440-rm-full.jpg and 390-rm-full.jpg show every section and every word. dist: skip link, `:focus-visible` rules, forced-colors handled, `<output>` with aria-label per tile counter (implicit live region), aria-expanded on the menu/sheet, aria-invalid on form fields. static/render clean.
No deductions found; not 9.5 because a custom checklist + stack sheet adds risk I cannot see focused in a still.

## motion: 8.5
Hooks: 14 `data-reveal`, GSAP, the signature stack (cartons drop into the margin column), the sticky margin stack, footer flatten. 1440-scroll-25/50/75.jpg show reveals completed and the stack sticky.
Deductions:
- 1440-scroll-25/50/75.jpg: the stack sits at "PC 00 / empty" through the whole scroll in the capture: the signature only moves on tap, so a scroller who never taps sees no motion idea tied to the thesis (no 9 anchor).
- Reveals appear to be the same rise on most sections (14 identical `data-reveal` hooks) (−0.5, offset by the stack interaction +0.5... held at 8.5).

## wow: 8.5
The packing-list board + the margin stack + the wall checker that drops a TV carton with its range is a tool a Jersey City renter would really use, in the signature's language. 
Deductions:
- 1440-first.jpg: the empty-state stack is a black box with a 130px void; the output is a list and a total, not a designed "carton stack" artefact visible without interaction; no printable/saveable sheet of the list (−0.5 from 9).

## polish: 9
SVG favicon, apple-touch, OG, theme-color, JSON-LD, print stylesheet, forced colors, radius 0 everywhere (chosen once), no `transition: all`. Corrugated flute edge used consistently on tiles and ledger cells. Footer is a designed close (1440-full.jpg).

## Arithmetic
14×8.5 + 12×9 + 10×8.5 + 10×8.5 + 8×7 + 8×8.5 + 7×9 + 7×9 + 12×8.5 + 8×8.5 + 4×9
= 119 + 108 + 85 + 85 + 56 + 68 + 63 + 63 + 102 + 68 + 36 = 853 / 100 = **8.53**

## Must
None. No DEMO-RULES breach, no hidden content in reduced motion, no overflow.

## Should
1. **#hero h1 / eyebrow** (1440-first.jpg, 390-first.jpg): trade and city are only in the mono eyebrow. Put the place in the display type: keep the h1, and promote the eyebrow to a 18–20px Geist 500 line "Furniture assembly & TV mounting in {{biz.city}}" at full ink; or set the h1 "Price your Jersey City list before anyone rings the buzzer." (via token).
2. **#hero buttons** (1440-first.jpg): three "Book this list" in one view. Remove the one under the board; keep hero outline secondary + margin-stack button (which is the contextual one).
3. **Primary action naming** (1440-scroll-25.jpg, 1440-scroll-75.jpg, 1440-full.jpg form): pick one verb family: "Book this list" everywhere; service-cell links become "Add to list", rules button "Add to my list", form submit "Book this list".
4. **Mono labels** (1440-first.jpg): cut the tracked caps in the hero to two: drop "TAP + FOR EVERY PIECE." (the + buttons say it) and set "TAP A PIECE. IT LANDS HERE." in Geist 15px sentence case.
5. **390 eyebrow** (390-first.jpg): shorten to "ASSEMBLY & TV MOUNTS · {{biz.city}}" under 640px or use a non-breaking space so "Jersey City" never splits.
6. **Margin stack empty state** (1440-first.jpg): fill the ~130px void with the stencilled outline of an empty pallet/three ghost cartons (dashed, #5C646E) labelled "Your stack starts here", so the empty state shows what the tool will draw.
7. **Ghost "PC 0X" outlines** (1440-scroll-25/50/75.jpg): drop them from at least half the sections (keep on #walls and #area) so they stop reading as wallpaper.
8. **#pieces ledger** (1440-full.jpg): replace the bento-like big/small cells with a single ruled packing-slip table (code | job | one line | range | Add) so it reads as a bill, matching "one line each on the bill".

## Elevate
- **photo (7):** Bring the stock into the carton system instead of leaving the page photo-free. Three to four approved frames (a TV on a concrete wall, a built bed/crib, boxes in a hallway, a hammer drill on concrete) presented as "what's inside the carton": each photo sits inside a carton tile frame with the flute edge and stencil plate ("TV-C · FIG", "BED"), duotoned to the ink/lemon grade so they read as one shoot, and revealed by the carton flap opening (clip-path on the chamfer) as the section scrolls in. One frame next to the wall checker (concrete mount result), one as the haul-away band background behind the bundle, one in reviews. Alt text describes the frame only.
- **firstScreen (8.5):** Make the first screen state the city in the display type and show the stack doing something at 0 ms: pre-fill a demo stack (e.g. one carton "TV-C ×1 · Sample $199–$329") that the visitor can clear, so the margin column shows the signature's output and the total plate reads "PC 01" instead of an empty black box, and let the hero band end at ~820px so the paper band peeks 80px.
