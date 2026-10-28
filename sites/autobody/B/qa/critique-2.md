COPY: ok

# autobody-B: critique round 2 (fast mode)

**Five-second test** (1440-first.jpg, 390-first.jpg): "A body and paint shop in El Paso for sun-peeled paint. I tap the swatch that looks like my hood and it tells me 4.4 mils, a polish, $350–$700 Sample. I can call (915) 555-0108 or text 4 photos. They put a gauge on the paint before they sell me anything." That passes cleanly now. The city and the trade are in the h1 and the navy story band peeks about 80px under the fold at 1440.

Changes since round 1 that I verified: the h1 now names the city, the next band peeks, three photos were added, the story pin was cut (1440-full is 12,618px against 11,821px in rm, down from about 1,500px extra to about 800px), the dent check prints a PDR readout tag, the stripe board is square, the 02/03/04 story numbering is gone and the phone bar now says "Send the paint".

## First screen: 9
Earned: "Sun-peeled paint in El Paso? Tap your paint." gives the trade, the city and the action in 8 words. The probe tag straddles the seam over the strata card and the sorter prints a reading, a fix and a Sample price. The phone shows in the header and the primary button, the secondary is quieter, and the proof line has hours, a Sample rating and the insurer line. The next band peeks (1440-first.jpg). At 390 the h1 runs 3 lines and Call sits above the bar (390-first.jpg).
- 1440-first.jpg: the right-half photo is a fallen leaf. The strata card covers most of it, and at a glance it reads as autumn, not a car. It is not a deduction here, but it keeps this from a 9.5.

## Distinctiveness: 9
Earned: the readout and strata system shows up in the hero, the story (four readings, 390-full.jpg / 1440-rm-full.jpg), the services test sheet (a reading chip on every row, 1440-scroll-25.jpg), the dent check's PDR tag, the color-match swatch fan, the review tallies, the price tape (1440-scroll-75.jpg), the UV tag on the area photo and the footer shop status. That is the hero and the footer plus 7 more sections. It is clearly unlike siblings A and C.
- 1440-scroll-25.jpg / 1440-rm-full.jpg: AI tells remain. Every eyebrow is a middle-dot mono string ("TEST SHEET · WHAT WE MEASURE FIRST", "SAMPLE REVIEWS · THE NUMBERS ARE THEIRS", "SAMPLE READINGS · ONE HOOD"), and the services sheet still has a "#" column of 01–10 (−0.5).

## Typography: 8.5
Earned: Schibsted Grotesk display, tight and heavy, against Public Sans at full ink, with Martian Mono for readings and prices. Strong scale contrast on "4.4", "PDR" and the price tape. En-dash ranges, curly quotes, no em dashes. The hero strata labels are now sentence case (1440-first.jpg).
- 1440-first.jpg: there are still 5+ tracked mono caps strings in one view: the "AUTO BODY & PAINT" eyebrow, "MILS / POLISH", "SAMPLE READING", "SAMPLE PRICING" and "SAMPLE RATING". The story strata on 1440-rm-full.jpg are back to caps ("BASE COLOR", "E-COAT") (−0.5).

## Layout and rhythm: 9
Earned: the tone run (1440-rm-full.jpg) is paper → deep → paper → mid → blue → photo/paper → white → deep → mid → paper → deep. No two dark bands touch. The section families are a ruled sheet, the questionnaire with a board, the claim path, the swatch fan over a photo, the tally column, the gauge tape and the area photo with an hours card. The story pin is now about 800px over rm (1440-full.jpg), which is acceptable.
- 1440-rm-full.jpg: the color-match band leaves about 150px of dead cream under the guarantee line. It is minor, so noted only.

## Photo and video: 8
Earned: three on-topic frames now exist: a leaf on blue gloss paint, a red tail fin with chrome, and El Paso desert scrub under mountains. The alt text describes each frame, and two carry the probe crosshair plus an LCD tag ("UV NOON · WHY THE CLEAR BURNS OFF"), so the frames belong to the signature (1440-rm-full.jpg).
- 1440-first.jpg / 390-full.jpg: the hero photo is mostly hidden behind the strata card. At 390 only a sliver of the leaf shows between the readout tag and the card, so the one hero image does almost no work.
- 1440-rm-full.jpg: the grades are mixed. A saturated cool blue hero sits beside a warm pink and red tail fin and a neutral daylight desert, so they do not read as one shoot (−0.5).
- Still no frame of a car being worked on (no gauge on a panel, no booth, no hands). The page shows paint and land but never the shop's work.

## Copy: 9
Earned: trade nouns throughout ("clear coat", "e-coat", "mils", "test spot", "supplement", "body line or a panel edge"). It gives honest ranges ("Ranges, not quotes. Where yours lands depends on the reading."), the claim path leads with "You pick the shop", the reviews match facts.json with SAMPLE REVIEW tags, and every price carries a Sample label (1440-scroll-50.jpg, 1440-scroll-75.jpg). The naming of the action is consistent now ("Send the paint" in the bar, the claim buttons and the contact eyebrow). I found no invented claims.

## Mobile: 9
Earned: 390-full.jpg (17,702px) and 390-rm-full.jpg are effectively the same height, so there is no phone pin. The sorter leads and the strata follow, the h1 is 3 lines, the swatches are thumb-sized, the 3-way bar says Call / Text photos / Send the paint, and render.json shows no overflow at 320 or 390.
- 390-full.jpg: the page is still about 21 screens long, and the 10-row services sheet is the longest stack.

## Accessibility: 9
Earned: 1440-rm-full.jpg and 390-rm-full.jpg show every section, the four story readings and all the strata statically. One h1, tabs, compare and accordion hooks, forced-colors and print media queries (dist/index.html). The inactive steps keep readable contrast in rm.

## Motion and interaction: 9
Earned: the story strata thin and rebuild as the reading goes 4.6 → 3.6 → 3.4 → 3.4 + coat (1440-rm-full.jpg static end state, 1440-full.jpg pin), and the claim path draws its timeline (1440-scroll-50.jpg). dist/index.html carries split h1, data-mil counts, the signature hooks, tabs, compare and staggered reveals, so entrances vary by role.

## Wow moment: 9
Earned: the hero sorter is the signature and a tool at once (1440-first.jpg). The dent check now prints its verdict in the same LCD language ("PDR · PAINTLESS", 1440-rm-full.jpg), and the color-match fan with its "FULL SUN" pick tab is a third trade-true moment.

## Polish: 9
Earned: the stripe board and the frames are square now (1440-rm-full.jpg). SVG favicon, apple-touch icon, OG image, print and forced-colors queries, a designed footer with live status and a licence line marked sample, and the photo credits are complete (1440-rm-full.jpg footer).

## Arithmetic
14×9 + 12×9 + 10×8.5 + 10×9 + 8×8 + 8×9 + 7×9 + 7×9 + 12×9 + 8×9 + 4×9
= 126 + 108 + 85 + 90 + 64 + 72 + 63 + 63 + 108 + 72 + 36 = 887 / 100 = **8.87**

## Must
None. Every Sample label is present, no claims are invented, no faces appear, reduced motion is complete and there is no overflow.

## Should
1. **Hero photo** (1440-first.jpg, 390-full.jpg). Problem: the strata card covers most of the leaf frame, and at 390 almost nothing shows. Fix: at 1440, move the strata card down so at least 50% of the photo stays visible and set object-position so the leaf sits on the left third. At <640px, show the photo as a 4:3 band above the strata card instead of behind it.
2. **Grade** (1440-rm-full.jpg). Problem: cool blue, warm red and neutral desert frames sit on one page. Fix: give all three photos one shared treatment, for example `filter: saturate(.85) contrast(1.05)` plus a 12% Clear-Coat Blue (#1748C8) multiply overlay, so they read as one shoot.
3. **Mono caps density** (1440-first.jpg). Fix: set "SAMPLE READING / PRICING / RATING" in mono lowercase small text ("sample") or Public Sans 12px, and set the story strata labels in sentence case like the hero.
4. **Eyebrow strings** (1440-scroll-25.jpg, 1440-rm-full.jpg). Fix: cut the "·" second halves ("WHAT WE MEASURE FIRST", "THE NUMBERS ARE THEIRS", "ONE HOOD") and drop the "#" 01–10 column from the services sheet, since the reading chip is the row marker.
5. **Color-match band** (1440-rm-full.jpg). Fix: trim about 150px of bottom padding under the guarantee line.

## Elevate
- **Photo (8): make the photos the readings.** Show one panel through the sequence a stock page never would. Clip the hero photo inside the clear-coat layer of the strata (the image fills the clear film as a mask, so the "paint" is the photo), and carry the same frame cropped tighter into the story so each reading shows that photo at a different gloss level (a CSS filter step per reading, tied to --sw-p). Grade everything to the Clear-Coat Blue duotone so the three frames read as one shoot.
- **Typography (8.5): one voice for numbers, one for words.** Keep Martian Mono only for numerals and units ("4.4 mils", "$350–$700", "41 dents") and move every label, eyebrow and Sample tag to Public Sans small caps or sentence case at 13–14px. The readings become the only mono on the page and hit harder, and the AI-tell eyebrow pattern disappears with it.
