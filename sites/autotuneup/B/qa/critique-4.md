COPY: ok

# autotuneup-B: critique round 4 (fast mode, final round)

**Five-second test.** 1440-first.jpg: "A car-maintenance shop in Reno that works by mileage. I type my odometer and it shows what's due now, what's due at 60k and what can wait. The call button is top right, and it's open until 6 pm. Why them: they show the reading behind each call, and the rating is labelled Sample." 390-first.jpg gives the same answer. The h1 is 2 lines, and the input, the CTA and the proof lines all sit above the fold. The Call bar is pinned at the bottom.

What changed since round 3, checked against the screenshots:
- **New hero composition.** The h1 sits top-left and the tool sits top-right. The instrument panel now runs full width beneath them (1440-first.jpg), so the text-left / panel-right family is gone.
- **The arrival roll is visible.** 1440-first.jpg catches 044998 rolling to 045000.
- **The report has its own mileage row.** "045000 REPORT MILEAGE: Check yours up top and every frame re-reads for it" sits above the report (1440-full.jpg). dist has `data-verdict` hooks on the three verdict pills.
- **Curly apostrophes** in the featured review ("That’s", 1440-scroll-75.jpg).
- **Tighter range dashes** ("$90–$140", 1440-scroll-25.jpg; "3,000–5,000 mi", 1440-scroll-50.jpg).
- **Proof line** reads "Open now, until 6 pm".
- **Ledger CTAs.** GET MY PLAN appears only on the three mileage-group headers (1440-full.jpg, 1440-scroll-25.jpg).
- **Eyebrow removed.** "READINGS, NOT GUESSES" is gone.
- **Tread copy column.** It is visible at 50% (1440-scroll-50.jpg).

None of these are re-listed below.

## First screen: 9.0
Earned:
- 1440-first.jpg: the h1 is 7 words and names the job and the place.
- One filled primary, with a quiet "Get my plan" in the panel.
- The phone is in the header.
- The proof line carries "(Sample)".
- The signature shows as a 045000 readout with DUE NOW / AT 60K / NOT YET rows.
- The sand band peeks about 90px.
- 390-first.jpg: the h1 is 2 lines and both actions are above the fold.

Not a 10:
- 1440-first.jpg: the lead paragraph floats top-right, about 100px above the h1's cap line. The h1 and the tool column don't share a baseline, so the top third reads as two unrelated blocks.
- 390-first.jpg: only the top of the dial shows. The DUE / AT / NOT YET rows, which are the signature, sit below the fold on the phone.

## Distinctiveness: 9.5
Earned: the odometer row is the information system on this page. It shows up in all of these places, each doing a job:
- the hero output
- the ledger group dividers (030000 / 060000 / 100000), with the sticky giant readout (1440-scroll-25.jpg)
- the report mileage row and the frame tags
- the wiper panel ("CHECK EVERY 005000 MI", 1440-scroll-50.jpg)
- the break ("TRIP 000412 MI", 1440-scroll-75.jpg)
- the review mileage pills (042000 / 098000)
- the close and the footer (1440-full.jpg)

Cover-the-logo passes in every section. The last redundant eyebrow is gone.

Not a 10: concept.json promises Bebas Neue, but the page renders a condensed grotesque that is close to it. This is drift, not a fault.

## Typography: 9.0
Earned:
- The giant 100000 readout against 16px body is the scale-contrast moment (1440-scroll-25.jpg).
- Tabular mono numerals run through prices, intervals and hours.
- Ranges use en dashes that read as dashes now.
- Apostrophes are curly at display size (1440-scroll-75.jpg).
- Display tracking is tight and the heading rag is clean.

Not a 10: 1440-full.jpg shows a lot of small mono tag boxes (REPORT MILEAGE, Sample report, FIG 04 / WIPER EDGE, status pills). It's acceptable because they carry data, but it's on the edge of the tracked-caps tell.

## Layout and rhythm: 9.0
Earned: 1440-full.jpg runs paper hero → sand ledger → deep report → blue oil table → paper self-check → full-bleed break → paper reviews → deep ZIP/hours → paper close → deep footer. No two dark bands touch. The ledger is lighter now that its right column holds 3 links instead of 8.

Not a 10:
- 1440-full.jpg, #self-check: the copy column sits low against a tall panel, with about 150px of empty paper above "Tread depth and wipers".
- 1440-full.jpg, #report: the right column under the two small frames ends early, leaving a dead corner beside the big frame's caption.

## Photo and video: 8.0
Unchanged from round 3, so no movement (calibration rule 5).
- 1440-full.jpg: the drawn tread, plug-gap, fluid and wiper plates share one deep-blue grade and carry the odometer tags. As a treatment they are coherent.
- 1440-scroll-75.jpg: the road break is still a flat vector scene.

There is no photograph of a car, a bay or hands. The placeholders are acknowledged as temporary, and nothing is broken or blank, so there's no mustFix.

## Copy: 9.0
Earned: trade nouns and honest conditions:
- "Moisture tested first. If the fluid is fine, we write the next check date and stop."
- "Ranges vary by make and driving. Your spec wins."
- "before the I-80 summer heat and the Donner Pass cold"

"Get my plan" is the one name for the action. Sample labels are on the prices, the rating and the reviews. The report's new line, "Check yours up top and every frame re-reads for it", ties the tool and the report together in plain words.

## Mobile: 9.0
Earned:
- 390-first.jpg: the h1 is 2 lines, the CTA is above the fold, and the bar has a filled Call plus a quiet "Get my plan".
- 390-full.jpg: the report is re-cut into one large frame plus a 2-up row, and the oil table stays legible.
- render.json shows no overflow at 320 or 390.

Not a 10: 390-full.jpg shows the ledger is still about 2 phone screens of stacked rows.

## Accessibility: 9.0
Earned:
- 1440-rm-full.jpg and 390-rm-full.jpg show every word, with the readouts at their final values.
- The drawings have role="img" with accurate labels.
- There's one h1 and the heading order has no skips.
- dist has focus-visible and forced-colors rules.
- axe is clean in render.json.

## Motion and interaction: 9.0
Earned:
- The digit roll now explains something in four places:
  - the hero arrival, caught mid-roll at 044998 (1440-first.jpg)
  - the ledger readout swapping by group (1440-full.jpg vs 1440-scroll-25.jpg)
  - the wiper interval (1440-scroll-50.jpg)
  - the footer reminder
- The report verdicts are wired to the mileage check (`data-verdict` ×3, plus the report mileage row in 1440-full.jpg).
- The tread copy no longer lags blank at 50%.

Not a 10: the re-read is not caught in any frame. A visitor who never types a mileage never sees the page's best motion idea. 19 `data-reveal` hooks still give the remaining sections a uniform entrance.

## Wow: 9.0
Earned: the tool now hands you the report. The hero check and the "sample report you can hold" share one mileage row, three distinct readings and verdict pills (1440-full.jpg).

Not a 10: in the screenshots the report still looks static. The connection is promised in a caption rather than shown as a state change, for example "Re-read for 045,000 mi" stamped on each frame after a check.

## Polish: 9.0
Earned:
- dist has an SVG favicon, an apple-touch icon, a preloaded hero, a print stylesheet and forced-colors.
- The 0 radius is held everywhere (1440-full.jpg).
- The footer closes on the 050000 reminder row.

Remaining nit: 1440-full.jpg, the ZIP input and its CHECK button sit at mismatched heights.

## Arithmetic
14×9 + 12×9.5 + 10×9 + 10×9 + 8×8 + 8×9 + 7×9 + 7×9 + 12×9 + 8×9 + 4×9
= 126 + 114 + 90 + 90 + 64 + 72 + 63 + 63 + 108 + 72 + 36 = 898 / 100 = **8.98**

## Must
None.

## Should
1. **Hero alignment (1440-first.jpg).** The lead paragraph sits about 100px above the h1 cap line. Fix: align the tool column's top to the h1's cap height (`align-items:end` on the hero grid, or move the lead under the h1 on the left).
2. **390 hero (390-first.jpg).** The signature rows are below the fold. Fix: on phones, put the three DUE / AT / NOT YET rows directly under the CTA and drop the dial drawing below them. Alternatively, crop the dial to a 120px strip.
3. **#self-check gap (1440-full.jpg).** About 150px of empty paper sits above the h2. Fix: `align-self:start` on the copy column, with a sticky top so it rides alongside the tall panel.
4. **#report dead corner (1440-full.jpg).** The space under the two small frames is empty. Fix: give the big frame's caption ("Front tread 4/32 in, DUE NOW: ROTATE") that space, or span the small frames to the big frame's height.
5. **ZIP row (1440-full.jpg, #zip).** The input and the CHECK button have different heights. Fix: give both the same block-size, 48px.

## Elevate
- **Photo (8.0).** When the real library lands, let one graded photograph sit under the signature. A close crop of a tread gauge in a tire, or an open hood, goes in the report's big frame with the drawn plate as an overlay that wipes away on scroll. The diagram then becomes the reading of a real car, and the stock photo becomes the evidence.
- **First screen (9.0).** Make the first screen the report's cover. Pin the h1, the input and the three verdict rows on one baseline grid, so the hero reads as the top sheet of the sample report: same frame, same FIG label, same mileage tag. Checking a mileage would then visibly stamp the sheet.
