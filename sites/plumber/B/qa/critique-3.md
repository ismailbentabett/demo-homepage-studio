COPY: ok

# Critique — plumber-B (Ledgerline Plumbing), round 3

## Five-second test
1440-first.jpg / 390-first.jpg: "A Pittsburgh plumber who measures before they dig. Pressure, lead, camera footage, all logged. I press Price it, or text them a photo." The drawn camera viewfinder (047.0 FT, roots at joint, status FIX) and the three ledger rows tell me why them. Passes.

## What changed since R2
- Green placeholder hero replaced by a drawn sewer-camera viewfinder in the palette (1440-first.jpg).
- Dark run fixed: reviews now paper, pricing sand (1440-full.jpg).
- Tool band now renders three working cards (1440-scroll-50.jpg).
- Story renders a camera run with a foot counter (1440-scroll-25.jpg). The lateral cross-section sheet is new (1440-scroll-50.jpg).

## firstScreen — 9.5
Earned: h1 is 4 words on 3 lines with trade, city and an outcome that is the concept. The signature (ledger rows plus stamps) and the camera readout share one language. The primary action outranks a quieter secondary. Phone in the header at 1440 and Call in the sticky bar at 390. The paper band peeks about 70px. 390-first.jpg: h1 on 3 lines, both actions above the fold. Not 10: the proof line is a 2-line mono middot string, dense and easy to skip (1440-first.jpg).

## distinctiveness — 9.0
Earned: the ledger entry is a real organising device in at least 8 sections (hero, services, story, lateral, tools, reviews, pricing, footer; 1440-full.jpg). The plumber-A sibling (light serif, "Find it. Fix it. Tag it.") shares nothing. Not 9.5: every section opens with an "ENTRY NN · LABEL" kicker. By the sixth one it is ornament, not information.

## type — 9.0
Earned: Plex Mono display and Outfit text, the 4.8 numeral against small text (1440-scroll-75.jpg), a set-apart lead (1440-scroll-50.jpg), tabular readings. Deduction: tracked mono caps micro-labels pile up: the kicker, "8 FT DOWN THE LINE", "CAMERA RUN · SAMPLE" and "● LIVE" all sit in one view (1440-scroll-25.jpg).

## layout — 9.0
Earned: the tones now alternate cleanly, deep / paper / sand / deep / sand / steel / paper / sand / deep / paper / deep (1440-full.jpg). The lateral sheet is the full-bleed break and the reviews band is asymmetric. Not 9.5: in the reviews band the left column is empty under the rating for most of its height (1440-scroll-75.jpg).

## photo — 8.5
The niche photos are temporary placeholders, so the drawn treatments are judged on merit. The viewfinder, pipe run, lateral section and map share one steel/copper grade, and nothing is blank or broken (1440-first.jpg, 1440-scroll-25.jpg, 1440-scroll-50.jpg). Held at 8.5 because there is no art-directed photography yet.

## copy — 9.0
Earned: concrete trade nouns (cleanout, offset joint, dye test, galvanized risers, backwater valve). Every rating, review and price carries a Sample label (1440-scroll-75.jpg). Honest "it depends" framing on the prices. Deduction: the primary action has four names: "Price it" (hero, header), "Get your number" (pricing), "Get your own number" (tool card 3), "Get a price" (form heading) (1440-full.jpg).

## mobile — 9.0
Earned: on 390-full.jpg the story is unpinned and stacked as steps 01–03, the tools and price ledger are re-cut, and the sticky Call / Price it bar works. render.json shows no overflow at 320 or 390.

## a11y — 9.0
Earned: 1440-rm-full.jpg shows every story step, the lateral counter at 047 FT and every tool. Skip link, labels, forced-colors and one h1 are present in dist/index.html.

## motion — 9.0
Earned: the camera head travels the pipe as the foot counter climbs, which explains the inspection order (1440-scroll-25.jpg). The lateral counter ticks (000 → 047 between 1440-full.jpg and 1440-rm-full.jpg). The pin is desktop-only (390-full.jpg). Not 9.5: the stills cannot separate the entrances of the other sections.

## wow — 9.0
Earned: the drawn lateral sheet marks 12 / 31 / 47 ft, then three tools a homeowner would actually use (magnet/scratch lead check, psi reading against a 40–80 band, job-to-sample-range), each ending at a pre-filled Price button (1440-scroll-50.jpg). Not 9.5: the cost card's output is a plain text range line.

## polish — 9.0
Earned: SVG favicon and apple-touch icon, OG 1200×630, theme-color, print stylesheet, forced colors. Radius is limited to 0 and pills, and the footer is a designed close (1440-full.jpg).

## Arithmetic
14×9.5 + 12×9.0 + 10×9.0 + 10×9.0 + 8×8.5 + 8×9.0 + 7×9.0 + 7×9.0 + 12×9.0 + 8×9.0 + 4×9.0
= 133 + 108 + 90 + 90 + 68 + 72 + 63 + 63 + 108 + 72 + 36 = 903 / 100 = **9.03**

## Must
(none)

## Should
- **where:** 1440-full.jpg, #pricing button, tool card 3 button, #contact heading | **problem:** four names for one action | **fix:** use "Price it" on every button, and "Price it, written down" as the form heading.
- **where:** 1440-scroll-75.jpg, #reviews left column | **problem:** empty column under the 4.8 for most of the band | **fix:** make the rating block `position: sticky; top: 120px` (if it isn't already), or add a ledger tally under it (5★ ×5, 4★ ×1, all Sample).
- **where:** 1440-scroll-50.jpg, tool card No. 03 output | **problem:** the result is a plain text line | **fix:** print it as a ledger row (No. / job / low–high / SAMPLE stamp) in the same style as the price ledger.
- **where:** 1440-first.jpg, hero proof line | **problem:** 2-line mono middot string | **fix:** split into "Open now, until 5:30 pm" and "4.8 SAMPLE RATING" on one line, and move the six towns down to #area.

## Elevate (optional, PASS)
- **photo:** when real media lands, put it inside the camera viewfinder frame, with readouts over the still, so the photography becomes a ledger entry and not a picture.
- **motion:** let the hero's 047.0 FT readout hand off to the story's foot counter, so the same number travels through the page.
