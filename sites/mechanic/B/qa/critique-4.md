COPY: ok

## Five-second test
1440-first.jpg / 390-first.jpg, as a visitor: "An auto diagnosis and repair shop in Billings, MT that turns my car's code into plain English. They test the part, show me the reading and text a price before any work. I call (406) 555-0186 or check what my warning light means. It's closed now, opens tomorrow at 7:30, and has a sample 4.9 rating." It passes cleanly. The round-3 gap is fixed: the h1 states the promise and the place sits directly under it.

## What changed since round 3
- Hero rebuilt: the thesis is the h1, there is a green trade + city line, and P0420 moved into the panel header.
- Section eyebrows are cut to 3 and the primary action is unified to "Book a drop-off".
- The price holds one line. On 390 the scan list uses inline PRICE IT links.
- The brake steps are compacted.
- The brown I-90 photo is replaced by a drawn road-test chart.

## First screen: 9.0
Earned: in 1440-first.jpg the left column reads h1 → place → lead → two actions → proof, with the machine reading on the right. That is the translator idea staged as a composition. On 390-first.jpg the h1 is 4 lines, both actions sit above the fold and the sticky call bar is present.
Deduction: in 1440-first.jpg the proof line wraps as "… 4.9 from / 228 reviews [SAMPLE RATING]", which splits the figure from its count (−0.5).

## Distinctiveness: 9.0
Earned: the reading-over-sentence primitive runs through the hero, scan list, readings, road-test chart, printouts, decoder, brakes and footer (1440-full.jpg). Eyebrows are down to 3. No sibling swap is possible.
Deduction: in 1440-first.jpg, #0D1117 with signal green still reads as an editor dark theme (−0.5).

## Typography: 9.0
Earned: strong Syne/Figtree scale contrast, correct quotes and dashes, and a full-measure break headline (1440-full.jpg).
Deduction: in the readings band of 1440-full.jpg, "$110–$180" no longer wraps but now sits a visible size step below "4.9" and "22 yrs", so the row has two number sizes (−0.5).

## Layout and rhythm: 9.0
Earned: the clean tone alternation is kept, and the I-90 break now holds a real object (1440-full.jpg). In 1440-scroll-75.jpg the brake steps are a compact stack beside the diagram.
Deduction: the pin still leaves the left half below the diagram empty (1440-scroll-75.jpg). The motion-on full page also shows about 1,000px of bare paper before the brake CTA (1440-full.jpg), though 1440-rm-full.jpg is tight (−0.5).

## Photo and video: 8.5
Earned: the drawn instruments in 1440-first.jpg, 1440-full.jpg, 1440-scroll-75.jpg and 1440-scroll-50.jpg are one coherent, well-drawn system. On 390-full.jpg the pad is re-drawn per card, with sparks at 0 mm.
Deduction: the page has no photograph left, so the shop, the car and the hands are never seen (−0.5). Nothing is blank, and the library is a placeholder, so this is not a mustFix.

## Copy: 9.5
Earned: there is now one action name, "Book a drop-off", and "Price it" is used only as a row link (dist/index.html, 1440-full.jpg). The voice is exact and trade-true, and every claim carries a Sample pill. "Nothing is sent from this sample" sits under the form.

## Mobile: 9.5
Earned: in 390-full.jpg the scan list is halved by the inline links. The brake cards are re-drawn, the drop-off becomes a rail and the decoder runs 2 columns. render.json shows no overflow at 320 or 390.

## Accessibility: 9.0
Earned: 1440-rm-full.jpg and 390-rm-full.jpg show every section with the pin unrolled. The page has one h1, decoder tabs, forced-colors and print styles.
Not higher: the light grey mono eyebrows on near-black (1440-scroll-50.jpg) still look borderline and need axe confirmation.

## Motion and interaction: 8.5
Earned: the brake pin thins the pad per step (1440-scroll-75.jpg vs 1440-full.jpg), and the ROW 0N / 08 counter tracks the scan list (1440-scroll-25.jpg).
Deductions:
- 1440-scroll-75.jpg: the big readout says "2 mm" while the active step is "PAD 3 MM". On a page whose promise is "you get the number", the number disagrees (−0.5).
- 1440-full.jpg / 1440-scroll-50.jpg: the road-test chart, printouts and drop-off show no role-specific entrance in any frame (−0.5).

## Wow moment: 9.0
Earned: three moments now carry the thesis: the decoder (1440-scroll-50.jpg), the millimetre brakes (1440-scroll-75.jpg) and the I-90 misfire chart (1440-full.jpg).
Not a 10: they still don't connect, and the decoder answer can't be kept.

## Polish: 9.0
Earned: a consistent square system and a designed footer close (1440-full.jpg). Favicon, og, JSON-LD, print and forced-colors are in dist/index.html.
Not higher: the proof wrap (1440-first.jpg) and the readout mismatch (1440-scroll-75.jpg).

## Arithmetic
14×9.0 + 12×9.0 + 10×9.0 + 10×9.0 + 8×8.5 + 8×9.5 + 7×9.5 + 7×9.0 + 12×8.5 + 8×9.0 + 4×9.0
= 126 + 108 + 90 + 90 + 68 + 76 + 66.5 + 63 + 102 + 72 + 36 = 897.5 / 100 = **8.98**

## Must
None. All content is visible in the motion-on and reduced-motion shots, every proof item is Sample-labelled, the form says nothing is sent, and there is no overflow on the phone.

## Should
1. **#hero proof line (1440-first.jpg):** "4.9 from / 228 reviews" splits across two lines. **Fix:** wrap the rating group ("4.9 from 228 reviews" + pill) in a `white-space: nowrap` span, or move the rating onto its own line under the status and areas.
2. **Brake readout (1440-scroll-75.jpg):** it shows "2 mm" while "PAD 3 MM" is active. **Fix:** snap the readout to the active step's value (10/7/3/0) and tween only between step values, never past them.
3. **Readings band (1440-full.jpg):** the price is set smaller than its neighbours. **Fix:** give all three figures the same size and let the price cell span wider (e.g. a grid of `1fr 1fr 1.4fr 2fr`) so it fits at the shared size.
4. **Brake pin (1440-full.jpg / 1440-scroll-75.jpg):** about 1,000px of bare paper after the pin, and an empty left half under the diagram. **Fix:** shorten the pin end (`end: "+=" + steps*60vh` rather than a full viewport per step), and put the brake CTA plus a one-line "Ask for your number at drop-off" under the FRICTION / BACKING PLATE legend so the left column has a finish.
5. **Road-test chart (#break, 1440-full.jpg):** it is static in every frame. **Fix:** draw the two traces with a stroke-dashoffset tied to scroll, and reveal the MISFIRE window last.
6. **Eyebrow contrast (1440-scroll-50.jpg):** the grey "— BEFORE YOU CALL" mono on near-black looks light. **Fix:** confirm ≥ 4.5:1 with axe. If not, raise it to the paper colour at 75%.

## Elevate
- **Motion (8.5):** make every number on the page a live reading. The brake readout ticks in lockstep with the active step. The road-test traces draw left to right and the misfire window flashes as the I-90 headline lands. Each scan row types its mono label before its title. The signature should move the same way in four places, not one.
- **Photo (8.5):** give the drawings one real-world anchor: a single sharp photograph of a meter probe on a connector or a car on the lift. Frame it in the same LIVE DATA chrome, with a mono reading in its header and the plain sentence as its caption, so the instrument language reaches the physical shop.
