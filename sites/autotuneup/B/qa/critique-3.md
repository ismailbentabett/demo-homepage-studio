COPY: ok

# autotuneup-B: critique round 3 (fast mode)

**Five-second test.** 1440-first.jpg: "A Reno car-maintenance shop that goes by mileage. I type my odometer and it tells me what's due now, what's due at 60k and what can wait. The call button is top right, and it's open until 6 pm. Why them: they show the reading behind each call." 390-first.jpg gives the same answer. The h1 is 2 lines, and the input, the CTA, the proof lines and the Call bar are all above the fold.

What changed since round 2:
- The five copies of one dial are gone. The report is now three different readings, each a distinct drawing with an honest aria-label: tread 4/32, plug gap in spec, brake fluid at 1% moisture. The self-check is a wiper-blade drawing (1440-full.jpg, 1440-scroll-50.jpg). Last round's mustFix is closed.
- Every range uses an en dash.
- The hero eyebrow and the reviews eyebrow are gone.
- The proof line is set in full ink.
- The closing band merges booking and plan into one card.
- On 390 the report shows one large frame and a 2-up row.

None of these are re-listed below.

## First screen: 9.0
Earned (1440-first.jpg, 390-first.jpg):
- The h1 is 7 words and names the place and the job (odometer, Reno).
- There's one filled primary ("Check my interval") and a quiet "Get my plan" text link.
- The phone shows in the header at 1440 and in the bar at 390.
- The proof line carries "(Sample)".
- The signature is visible: a 045000 readout with DUE NOW / AT 60K / NOT YET rows.
- The next band peeks about 64px.

Not a 10:
- 1440-first.jpg: the structure is still the text-left / panel-right family.
- 1440-first.jpg: about 140px of dead paper sits under the proof line before the band edge.
- 1440-first.jpg: the proof line still uses middle-dot strings ("Open now · until 6 pm").

## Distinctiveness: 9.0
Earned (1440-full.jpg): the odometer row is the information system, not decoration. It appears in:
- the hero tool output
- the ledger dividers (030000 / 060000 / 100000), with a sticky giant readout (1440-scroll-25.jpg)
- the report frame tags (045000 MI)
- the wiper panel (CHECK EVERY 005000 MI, 1440-scroll-50.jpg)
- the break (TRIP 000412 MI, 1440-scroll-75.jpg)
- the review mileage pills (042000 / 098000)
- the footer (050000 YOUR NEXT SERVICE)

A screenshot of any section names the concept, and the siblings share none of this.

Deductions:
- 1440-full.jpg: "READINGS, NOT GUESSES" is the last tracked mono eyebrow. It's tolerable but redundant with the h2.
- Concept drift (no deduction, because check-unique is clean): concept.json lists Bebas Neue as display, but dist renders Barlow Condensed.

## Typography: 8.5
Earned:
- 1440-scroll-25.jpg: the giant 100000 readout against 16px body is a real scale-contrast moment.
- Tabular mono numerals run through the prices, the intervals and the hours.
- En-dash ranges are now in the DOM ("$90–$140", "3,000–5,000 mi").
- Display tracking is tight and the heading rag is clean.

Deductions:
- 1440-scroll-75.jpg: there are straight apostrophes in the featured review ("That's exactly what they did"), set at display size, which makes them the most visible quote on the page. "didn't" in the Dale K. review has the same problem (−0.5).
- 1440-scroll-25.jpg / 1440-scroll-50.jpg: the mono en dashes are letter-spaced ("$90 - $140", "3,000 - 5,000 mi") and read as spaced hyphens at a glance. Tighten the dash span.

## Layout and rhythm: 9.0
Earned (1440-full.jpg), in this order:
- the paper hero
- a sand ledger, asymmetric, with a sticky readout
- a deep report with a big frame plus two small ones
- a blue dense oil table
- a paper self-check
- a full-bleed break with type over the image
- paper reviews in a 2-column ragged layout
- a deep ZIP and hours band
- a paper close
- a deep footer

No two dark bands touch, and the families vary. The scroll has a shape: loud, then dense, then breath, then close.

Not a 10:
- 1440-full.jpg: the services ledger runs about 1.3 screens with eight identical "GET MY PLAN" right-column links. It's the one flat stretch.
- 1440-full.jpg: the tread section (#self-check) leaves a wide empty gutter between the copy column and the panel.

## Photo and video: 8.0
Earned:
- 1440-full.jpg: the report and self-check are now four distinct, on-topic drawings under one deep-blue grade (tread section, plug gap, fluid strip, wiper blades). Their aria-labels describe exactly what is drawn.
- The frames are part of the signature (odometer tags pinned to each).

Holding it at 8:
- 1440-scroll-75.jpg: the "two-lane road" break is a flat vector scene, not a photograph.
- 1440-first.jpg: the hero is a rendered dial.

There isn't a single real photograph of a car, a bay or hands on the page. That suits the concept, but a homeowner gets no view of the shop.

## Copy: 9.0
Earned: trade nouns and honest "it depends" lines, and no line you could paste onto another trade's site:
- "Moisture tested first. If the fluid is fine, we write the next check date and stop." (1440-scroll-25.jpg)
- "Ranges vary by make and driving. Your spec wins." (1440-scroll-50.jpg)
- "Desert dust off this road ends up in your air filter." (1440-scroll-75.jpg)
- "Wait for it or drop it off", with "Rather talk now?" under the form (1440-full.jpg)

"Get my plan" is the one consistent action name, and Sample labels are on the prices, the rating and the reviews. The quote glyphs are a typography item, not a copy one.

## Mobile: 9.0
Earned:
- 390-first.jpg: the h1 is 2 lines, the input and CTA are above the fold, and the bar has a filled Call plus a quiet "Get my plan".
- 390-full.jpg: the report is re-cut as one large frame plus a 2-up row, the oil table stays legible, and render.json shows no overflow at 320 or 390.

Not a 10:
- 390-full.jpg: the services ledger is about 2.5 phone screens of stacked rows with a CTA under each. There's no phone-specific density decision there.

## Accessibility: 9.0
Earned:
- 1440-rm-full.jpg and 390-rm-full.jpg show every word, with the readouts at their final values (050000 in the footer).
- The drawings carry role="img" with accurate labels, so last round's 1.1.1 mismatch is gone.
- There's one h1 and the h2/h3 order has no skips.
- focus-visible and forced-colors rules are in dist.
- The proof line is now full ink.

## Motion and interaction: 8.5
Earned: the digit roll is now caught mid-flight in several places:
- 1440-scroll-50.jpg: CHECK EVERY 004999, rolling to 005000
- 1440-full.jpg: the footer at 049853, against 050000 in 1440-rm-full.jpg
- the ledger readout swapping 060000 → 100000 as the rows pass (1440-full.jpg vs 1440-scroll-25.jpg)

The roll changes meaning per section, which is motion that explains something.

Deductions:
- 1440-first.jpg: the hero is already settled at 045000, so the arrival roll is not visible.
- 1440-scroll-50.jpg: the tread copy column is still blank when the frame is taken. A plain fade-in reveal lags behind the scroll, and that is the generic reveal, not the roll.

## Wow: 9.0
Earned: there are two connected moments in one language.
1. The hero tool answers with an instrument panel (1440-first.jpg).
2. The "sample report you can hold" is three different readings, each with its own odometer tag and verdict ("Gap in spec, NOT YET, DUE AT 100K"; "Moisture 1%, CHECK AGAIN AT 60K") (1440-full.jpg).

A homeowner would show this.

Not a 10: the report is static. The tool output and the report are not visibly the same object (the tool doesn't hand you this report).

## Polish: 9.0
Earned:
- dist has an SVG favicon, an apple-touch icon, a preloaded hero, a print stylesheet and forced-colors.
- --radius is 0 throughout, and the closing form card is now square (1440-full.jpg).
- The footer is a designed close with the odometer row (1440-full.jpg).

## Arithmetic
14×9 + 12×9 + 10×8.5 + 10×9 + 8×8 + 8×9 + 7×9 + 7×9 + 12×8.5 + 8×9 + 4×9
= 126 + 108 + 85 + 90 + 64 + 72 + 63 + 63 + 102 + 72 + 36 = 881 / 100 = **8.81**

## Must
None.

## Should
1. **#reviews (1440-scroll-75.jpg)**: the featured review shows "That's", and "didn't" appears in the Dale K. card, both as straight apostrophes. Fix: render them as ’ (U+2019) in the built text. The display-size quote is the most visible glyph on the page.
2. **Range dashes (1440-scroll-25.jpg, 1440-scroll-50.jpg)**: `.dash` inside the mono price and interval spans picks up the mono letter-spacing, so it reads as " - ". Fix: `.dash{letter-spacing:0;margin:0 .08em}`, or set the dash in the text face.
3. **Hero proof line (1440-first.jpg)**: "Open now · until 6 pm" still uses a middle dot. Fix: "Open now, until 6 pm".
4. **Hero dead space (1440-first.jpg)**: about 140px of empty paper sits under the proof line. Fix: reduce the hero bottom padding so the ledger band peeks around 100px, or align the left column's bottom with the panel's bottom.
5. **#services right column (1440-full.jpg, 390-full.jpg)**: there are eight identical "GET MY PLAN" links. Fix: keep the link only on each mileage-group header row (030000 / 060000 / 100000). On 390, drop the per-row link entirely and let the bar carry the action.
6. **#report eyebrow (1440-full.jpg)**: remove "READINGS, NOT GUESSES". The h2 already says it.

## Elevate
- **Photo (8.0)**: give the page one real, graded photograph that the signature frames. For example, a close crop of a tread gauge or an open hood, inside the report's big frame with the 045000 MI tag and a duotone in deep blue and signal orange. That way the drawings read as the diagrams of a real car, and stock becomes the evidence the readings sit on.
- **Motion (8.5)**: make the hero tool and the report one object in motion. When the visitor checks a mileage, the readout rolls to their number and the report frames re-tag and re-verdict to that reading (DUE / AT / NOT YET). The digit roll then becomes the page's one describable idea: "my number rolls in and the whole report re-reads itself".
