# solar-C · concept

## 1. Three obvious concepts, rejected
- **"Sunny Southwest"**: terracotta + turquoise, a big sun graphic, a family on a stucco patio, "Harness the sun".
  Obvious: every NM installer site; clichés §4.3/§4.8; the brief's palette read as a postcard.
- **"Savings dashboard"**: hero gauge of kWh + bill-cut counter, sliders. Obvious: the competitor template, and the
  house rules ban bill promises. Also B's territory (numbers + sources).
- **"Sun follows the scroll" literally**: a sun sprite sliding across a header bar. Obvious: the seed taken
  literally as one effect; it decorates and measures nothing.

## 2. Thesis
**The page is one flat Albuquerque roof on one day: the sun crosses it east to west as you scroll, and every section's
stepped parapet casts the shadow it would really cast, so the reader learns where panels can sit before anyone calls.**
(Material: the parapet. Verb: cast.)

## 3. Signature system: "Parapet Shadow Clock"
One scroll variable `--sun` (0 = 7 am east, .5 = solar noon, 1 = 5 pm west) + one CSS primitive `.parapet` (a stepped
top edge drawn with clip-path, 3 steps, heights 28/44/64px) whose `::after` is a shadow wedge on the band below:
length = step height × cot(altitude), skew from azimuth. The sun disc (`.sun`, gold #e8a81c, 22px, 2px umber ring) rides
a 1px arc track in the right margin column at ≥1100px, a top hairline track at <1100px. Hook `data-sw-signature` on `<main>`.
- **Hero:** the sun disc IS the photo mask (circle, Sandias at sunset), rising 18% into place behind a drawn SVG parapet;
  mono label "Dec 21 · noon · 31.5°" and a clay-dark shadow wedge 1.63× the parapet on the field. Variation: biggest, still.
- **Sun-path story (pinned ≥900px):** top-down SVG roof plan (parapet ring, 2 canales, 1 roof drain, 4 panel rows).
  4 stops (morning / noon / winter noon / afternoon); the shadow polygon inside the parapet redraws and rows that fall
  inside it dim and slide back. Variation: plan view instead of section view.
- **Shadow calculator (tool):** the same `.parapet` primitive at the reader's height, wedge sized to the computed length
  for Dec 21 / Mar 20 / Jun 21. Variation: the reader sets the height.
- **Services / proof cards:** each card top is a `.parapet` edge of a different step height; its wedge length follows
  the current `--sun` (short at noon, long late), so the shadows change as you scroll. Variation: many small.
- **Break photo:** flat-roof photo framed by a parapet edge on both sides, shadow on the morning (left) side.
- **Footer:** sunset: disc half below the parapet line, longest wedge (×3), deep turquoise band.
Reduced motion / JS off: `--sun:.5` fixed noon, all shadows short and static, story stops stacked.

## 4. Type
- Display **Aleo** (slab, variable 100-900; 2 uses in registry, 0 in niche): semi-rounded slab = sun-softened adobe
  edges with plain weight; numbers (31.5°, 1.63×) look stamped and sturdy.
- Text **Barlow** (slightly rounded grotesk, roadside-sign practicality), 400/500/600.
- Accent **JetBrains Mono** 500 for angles, times, multipliers, ZIPs (tabular). Pair Aleo + Barlow is unique.

## 5. Palette: "Parapet Clay + Canale Turquoise + Noon Gold + Umber"
ink umber #2b1a12 · paper plaster #f3e7d3 · mid plaster #e6d5ba · field clay #d08a62 · accent turquoise #0e5a5e ·
deep turquoise #0e3b3e · signal noon gold #e8a81c · muted umber #6b4a38 · rust (words on paper) #9a4a26 ·
muted on clay #3d2a20 · muted on deep #c9b8a2.

| fg | bg | ratio | use |
|---|---|---|---|
| #2b1a12 | #f3e7d3 | 13.64 | body on paper |
| #6b4a38 | #f3e7d3 | 6.45 | muted on paper |
| #0e5a5e | #f3e7d3 | 6.50 | links/accent words, focus on paper |
| #9a4a26 | #f3e7d3 | 5.08 | kicker words on paper |
| #2b1a12 | #e6d5ba | 11.58 | body on mid |
| #6b4a38 | #e6d5ba | 5.48 | muted on mid |
| #0e5a5e | #e6d5ba | 5.52 | links + focus on mid |
| #2b1a12 | #d08a62 | 5.95 | body + focus on clay |
| #3d2a20 | #d08a62 | 4.83 | muted on clay |
| #f3e7d3 | #0e3b3e | 10.02 | body on deep |
| #c9b8a2 | #0e3b3e | 6.33 | muted on deep |
| #e8a81c | #0e3b3e | 5.86 | gold words + focus on deep |
| #f6d27a | #0e3b3e | 8.41 | gold-light numerals on deep |
| #f3e7d3 | #0e5a5e | 6.50 | primary button text |
| #ffffff | #0e5a5e | 7.94 | button text alt |
| #f3e7d3 | #2b1a12 | 13.64 | umber button text (clay band) |
| #2b1a12 | #e8a81c | 7.98 | text on gold chip |
| #d08a62 | #0e3b3e | 4.37 | clay shapes on deep, large only (≥24px) |
| **#e8a81c on #f3e7d3** | | **1.70** | FAIL: gold on paper = shapes only (sun disc w/ umber ring, rules) |
| **#d08a62 on #f3e7d3** | | **2.29** | FAIL: clay on paper = wedges/shapes only |
| **#0e5a5e on #d08a62** | | **2.83** | FAIL: no turquoise button/text on clay; clay band uses umber button |
| **#0e5a5e on #0e3b3e** | | **1.54** | FAIL: never turquoise on deep; deep band button = gold w/ umber text |
| **#e8a81c on #d08a62** | | **1.34** | FAIL: sun disc on clay needs its 2px umber ring |

## 6. Hero family 13: shape-masked photo
Unique in niche (A 11, B 2). Library already has 6 uses of 13 (every family is at ≥6, so the ≤3 rule cannot hold;
the brief's pick stands and check-unique decides). Cliché broken: the circle is not decoration, it is the sun at a stated
altitude, behind a drawn parapet that casts a correctly sized shadow onto the h1's field; the same circle becomes the
travelling sun of the signature.

## 7. Motion score
- **Intro (≤1.1 s, skippable, text readable at 0 ms):** disc rises translateY(18%)→0 with photo brightness .8→1 (900ms
  ease-out); the hero wedge grows scaleX 0→1 from the parapet (520ms, +300ms delay). h1 never hidden.
- **Story 1 "cast" (sun-path, pinned ≥900px, `calc(4*55svh + 100svh)`):** scrub `--sun` across 4 stops; the shadow
  polygon morphs, rows inside it dim and slide back; mono counter "09:00 → 12:00 → Dec 21 12:00 → 16:00". <640: stacked cards.
- **Story 2 "draw" (page-wide):** `--sun` 0→1 across the document moves the sun on its arc and sets every card's wedge
  length (one rAF scroll listener, transform only).
- **Hover:** the parapet step lifts 4px and its wedge lengthens 12%, 200ms; links get the hairline scaleX underline. Press scale(.97).
- **Reduced motion:** fixed noon sun, short static wedges, story stops stacked, no pin.

## 8. Tools
1. **Parapet shadow calculator**: parapet height (ft, 1-4, step .5; slider + number). Output: noon shadow Dec 21 (×1.63),
   Mar 20 (×0.70), Jun 21 (×0.21) in ft+in, the drawn wedge, and "in December, keep the first row about X ft back".
   Hedge: "Noon only, flat roof; we measure on site." Module `estimator` + app.js drawing. Hand-off → prefill `parapet`.
2. **Battery backup planner**: tick loads (fridge, swamp cooler, well pump, CPAP, lights, internet) + hours (4/8/12).
   Output: kWh band in words + "one battery likely / two likely" + Sample battery range from {{proof.prices}} + "your real
   numbers come from a site visit". Modules `checklist` + `estimator`. Hand-off → prefill `loads` + service "Battery backup".
3. **ZIP checker** (`zip`) against {{biz.zips}}: covered → call; else "call, we'll tell you honestly".
4. **Quote form** (`form`, 3 steps: service → roof type / parapet height / loads → contact). "We'll call you back to set up a roof check."

## 9. Voice
- "Your parapet throws a shadow all winter. We measure it before we draw a single panel."
- "Foam roof due for a recoat? We'll say so, and the panels go on after."
- "Here is what will run in an outage, and what won't."
Never: "harness", "savings", "free", "green future", "limited time".
