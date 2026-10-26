COPY: needs copy-chief

# autotuneup-C · critique round 3 (mode: fast; scored the same as strict)

The checks are clean: render.json has no errors, no console errors and no overflow at 390 or 320, and static.json shows zero blockers and zero warnings. This is the biggest jump between any two rounds so far. Last round the photo slots were empty gradient panes. They are now drawn altitude plates: a hero elevation profile, plus STOP 01, 02 and 03 plates that each carry the dotted route and an altitude figure. The concept's ascent now shows on screen. As instructed, I treat the placeholder photos as temporary. The `<img>` tags for the 48-byte webps are still in the DOM, but they sit inside `aria-hidden` plates and nothing broken shows, so they are not a mustFix.

## Five-second test
- **1440-first.jpg:** "Thin Air, a tune-up shop in Santa Fe, NM, set up for driving at 7,000 ft. I can book a time or text, and it has 4.9 stars from 164 reviews (labelled Sample). Why them: they tune for the climb to Los Alamos and the ski basin." The drawn profile below the buttons (Santa Fe Plaza 7,199 → Cerrillos ~5,700 → Los Alamos ~7,300 → ski basin ~10,350) gets the "why them" across with no words. It passes.
- **390-first.jpg:** The eyebrow, a 3-line h1, the lead, both buttons and the proof line all sit above y≈470. The profile shows below, and the call bar is pinned. It passes.

## firstScreen: 8.5
- Earned: a 2-line Outfit Black h1 with the city and the outcome, one teal primary plus an outline secondary, a Sample-labelled proof line, and a readable header with the phone (1440-first.jpg). The hero image is now the concept itself (the profile with place chips), not a stock frame. The paper band peeks in at the bottom edge.
- 1440-first.jpg: "Open now · until 6 pm" appears twice in one view, in the header status and again in the proof line (−0.5, folded into the next point).
- 1440-first.jpg: mono labels stack up in one view: the tracked eyebrow, the SAMPLE RATING tag, the ALT rail, five chart chips and the axis numbers. The chart chips earn their place, but the eyebrow and the rail's "ALT/FT" add to the noise (−0.5 together with the point above).
- The centred eyebrow, h1, lead and button stack is the familiar SaaS hero shape. The profile saves it, but the type block itself is generic.

## distinctiveness: 8.5
- Earned: the thesis is delivered. The rail reads 7,199 → ~5,700 → ~7,300 → 7,199 across 1440-first.jpg, 1440-scroll-25.jpg, 1440-scroll-50.jpg and 1440-scroll-75.jpg. Each story plate carries the same altitude figure in the bottom-left and the same dotted route (1440-full.jpg). The footer resets to "7,199 ft Back at the Santa Fe Plaza". Next to its siblings (A is a stopwatch on light paper, B an odometer dial in Reno), C does not swap logos with either.
- 1440-full.jpg y≈900 (services): a numbered 01–08 two-column rule list with an arrow before every name. This is the standard template services block, and the altitude idea never touches it (−0.5).
- 1440-full.jpg y≈4600 (bay sheet): a "DUE NOW / CAN WAIT" ledger card is close to sibling B's "DUE NOW / NOT YET" panel. Same niche, same idea (−0.5).

## type: 8
- Earned: Outfit Black display with tight tracking, Space Mono kept to the data (altitudes, prices, phone), correct curly quotes and apostrophes (1440-scroll-25.jpg, 1440-full.jpg).
- 1440-full.jpg: a tracked mono eyebrow sits above every h2 (MAINTENANCE BY ELEVATION, STOP 01 · DUST, YOUR CAR, YOUR ROAD, STOP 02 · SUN, FROM DRIVERS WHO LIVE HERE, STOP 03 · COLD, BOOK A SLOT). That is the "eyebrow above every heading" tell (−0.5).
- 1440-full.jpg y≈900 / 390-full.jpg: a "→" glyph before every one of the 8 service names, plus "01–08" numbering used as decoration (−0.5).
- 1440-scroll-50.jpg bottom / 1440-full.jpg y≈4600: the rotated bay-sheet card renders its text soft and blurry. The mono "BAY SHEET · 65,000 MI" and the item lines lose crispness (folded into the points above).

## layout: 8.5
- Earned: a real tonal rhythm. Night hero → paper services → night STOP 01 → teal tools → paper STOP 02 → dusk break → paper reviews and prices → night STOP 03 → teal booking → night footer (1440-full.jpg). The plates alternate left, right and centred-wide, and nothing reads as an empty band any more.
- 1440-full.jpg y≈3100–3600 (tools): the oil block on the right ends about 120px above the ZIP block, and the checklist card on the left runs taller than both. The right column has a dead patch beside the checklist (−0.5).
- 1440-scroll-75.jpg: the "Sample pricing" left column holds two lines next to a five-row table, which leaves a large blank under the intro. It is acceptable, but the column carries no weight (−0.5, folded into the point above with the dead space).
- 1440-scroll-50.jpg: the dusk break section starts with about 250px of empty navy above the h2 before any mountain shows (−0.5).

## photo: 8
- Graded as drawn treatments, per the brief. The four plates (hero profile, STOP 01 dust and filter, STOP 02 sun and wiper, STOP 03 snow and battery) share one flat vector language, one palette, one chip position and one dotted route, so they read as one set (1440-first.jpg, 1440-full.jpg y≈700/2150/6600). The frames are part of the signature.
- 1440-scroll-50.jpg: the wiper is a white bar with tick marks that reads as a ski or a ruler, not a wiper blade. 1440-full.jpg y≈700: the filter is a zigzag in a box. These are icon-level drawings blown up to plate size, and they read as clip art rather than illustration (−0.5).
- 1440-full.jpg: no image shows a car, a hood or a human hand. A homeowner gets no picture of the shop doing the work. That is the ceiling for drawn-only.

## copy: 8.5
- Earned: specific, local and plain. "Dust eats filters faster than miles do", "UV cracks rubber before you notice", "not from a dead click in the ski basin lot at ten thousand feet" (1440-full.jpg). Reviews name the towns, every price carries SAMPLE (1440-scroll-75.jpg), and the footer explains the elevations as rounded public figures. No genre verbs, no em-dash tics.
- 1440-full.jpg: "Book a time" appears as a visible button 9 times (header, hero, services, STOP 01, mileage tool, checklist, STOP 02, STOP 03, call bar). Each section ends with the same button, and it reads as a template (−0.5).
- 1440-full.jpg y≈2800 (tool result): "Oil change and filter look" is clunky, and "~7,000 ft Wipers, belts and hoses" pins jobs to altitudes that are decorative rather than meaningful. It is labelled Sample, so it is honest, but it reads as forced (no extra deduction, see Should).

## mobile: 8.5
- Earned: 390-first.jpg passes the fold test with the call bar pinned. render.json reports no overflow at 390 or 320. Breakpoints at 390, 640, 900 and 1200 in dist/index.html. Services, tools, reviews and the booking form all stack cleanly, and the radio rows are full-width tap targets (390-full.jpg).
- 390-full.jpg: the altitude rail, which is the signature, is gone on the phone. The concept promised an inline pill, and no pill shows at 390. The plates still carry the numbers, but the "climbing as you scroll" idea is lost (−0.5).

## a11y: 8.5
- Earned: 1440-rm-full.jpg and 390-rm-full.jpg show every word and every plate. Header contrast is good. The teal STOP eyebrow on paper is now a dark teal (1440-scroll-50.jpg). The decorative plates are `aria-hidden`.
- 1440-full.jpg y≈3500: the ZIP field is a mid-teal box on the teal band with "87501" in a darker teal. The input's edge and text sit at about 2–3:1 against the band (−0.5).

## motion: 8
- Earned: the rail value, place name and dot move across 1440-first.jpg → 1440-scroll-25.jpg → 1440-scroll-50.jpg → 1440-scroll-75.jpg. Each plate's route marker sits at a different point on its dotted path, so the climb is implied.
- 1440-full.jpg: beyond the rail, the frames show no scroll-tied movement. The plates, the hero profile and the bay sheet sit static at every frame, and the promised marquee drift is gone. The rest is one reveal language (−0.5). The page's best asset, the hero profile, does not visibly draw or travel with scroll (−0.5).

## wow: 8.5
- Earned: the hero elevation profile is the screenshot (1440-first.jpg). The mileage tool now draws the road as a profile with numbered job pins and a matching list (1440-scroll-25.jpg, 1440-full.jpg y≈2400), which is last round's elevate move, delivered.
- 1440-full.jpg y≈2400: the tool profile is a generic downhill line chart (7,199 → 5,700) with no mountains and no place chips. It does not reuse the hero's landscape language, so the wow lives only in the hero (−0.5).

## polish: 8
- Earned: favicon, JSON-LD, print and forced-colors queries, an og.jpg that exists (22 KB), consistent pill buttons and 16px-ish card radii, and a honest demo form ("Thin Air calls back to confirm the slot").
- dist/index.html: four `<img>` tags still point at 48-byte placeholder webps, inside aria-hidden plates, with alt text describing photos that never show ("Santa Fe street at golden hour…"). That is dead weight in the DOM (−0.5).
- 1440-scroll-50.jpg: the rotated bay-sheet card has a heavy drop shadow and blurred text (−0.5).

## Arithmetic
14×8.5 + 12×8.5 + 10×8 + 10×8.5 + 8×8 + 8×8.5 + 7×8.5 + 7×8.5 + 12×8 + 8×8.5 + 4×8
= 119 + 102 + 80 + 85 + 64 + 68 + 59.5 + 59.5 + 96 + 68 + 32 = 833 / 100 = **8.33**

Fast-mode ELEVATE window is 8.0 ≤ 8.33 < 9.0. No category is below its floor, there is no mustFix and the checks are clean, so the verdict is **ELEVATE**.

## Must
None.

## Should
1. **#services list (1440-full.jpg y≈900, 390-full.jpg):** the "→" before each name and the decorative 01–08 make it a template list. Drop the arrows. Replace the numbers with the altitude or place each job belongs to (e.g. "Cerrillos road" next to filters, "Los Alamos hill" next to wipers, "Ski basin lot" next to battery) in the same mono chip as the plates.
2. **Eyebrows (1440-full.jpg):** keep the STOP 01/02/03 eyebrows, which carry the route. Delete MAINTENANCE BY ELEVATION, YOUR CAR, YOUR ROAD, FROM DRIVERS WHO LIVE HERE and BOOK A SLOT.
3. **"Book a time" ×9 (1440-full.jpg):** keep it in the header, hero, STOP 03, the call bar and the tools. Drop the buttons under #services, STOP 01 and STOP 02, or turn them into one inline text link per story ("Book a filter check").
4. **ZIP field (1440-full.jpg y≈3500):** give the input the same deep-navy fill and paper text as the tool cards, or a 2px #0b1120 border with #0b1120 text, so field and text clear 4.5:1 on the teal.
5. **Bay sheet (1440-scroll-50.jpg):** remove the rotation, or keep it at 1.5° or less with `transform-style` and font smoothing that keep the text sharp. Soften the shadow to one layer (≈0 12px 30px rgba(0,0,0,.35)).
6. **Dusk break (1440-scroll-50.jpg):** cut the empty navy above the h2. Start the section with the ridge in view, or move the heading to the upper third.
7. **Tools column (1440-full.jpg y≈3100–3600):** make the right column a stack of 2 equal cards with the same navy fill as the checklist, so the oil and ZIP blocks match the checklist's height and the dead patch closes.
8. **Placeholder imgs (dist/index.html):** while the library is empty, remove the hidden `<img>` elements from the plates instead of shipping 48-byte files with alt text for photos nobody sees.
9. **Mobile rail (390-full.jpg):** add the promised inline altitude pill (sticky under the header or at the top of each story plate's section) so the climb also reads on a phone.
10. **Tool result copy (1440-full.jpg y≈2800):** "Oil change and filter look" → "Oil and filter change". Tie each pin to its real reason ("~5,700 ft · Cerrillos dust: cabin and engine filters"), not a made-up altitude per job.

## Elevate
- **motion (8, weight 12):** make the hero profile the engine of the page. The teal route draws itself on load. As you scroll, the same dot visibly travels the profile, and each STOP plate picks the line up where the last left off, so the route reads as one continuous line from hero to footer. One scroll-tied path, not section reveals.
- **type (8, weight 10):** give the altitude numerals the display role. Set the place figures (7,199 · ~5,700 · ~7,300 · ~10,350) as the large typographic anchor of each stop, in a consistent oversize mono slot that bleeds off the plate. Retire the generic eyebrow-plus-h2 stack, so the page's type rhythm becomes "altitude, then the claim".
