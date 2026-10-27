COPY: ok

# general-C, round 3 (fast mode): first round judged from real screenshots

## Five-second test
- **1440-first.jpg:** "Switchback builds additions, ADUs and porches on steep lots in Asheville. I can check my ZIP, get a number or call (828) 555-0124. Why them: 21 years on these hills, and the drainage gets planned before they dig." The topo service map on the right shows the idea right away.
- **390-first.jpg:** The same answer. The map is re-cut as a strip above the h1, the h1 runs 2 lines, ZIP, "Get a number" and Call all sit above the fold, and the mobile bar repeats Call and Get a number.

Round 2 was scored from HTML only. This round is scored from pixels, so some scores move both ways.

## First screen: 8.5
Earned: h1 "We build into Asheville's hills." is 6 words and names the city and the trade in one verb. The phone shows in the header and the hero (1440-first.jpg). The proof line has years, a Sample rating and live hours. The signature (contour sheet with elevation labels, river line, town pins) is the hero composition. The tan band peeks about 65px below the "2,100 FT · RIVER LEVEL" contour. At 390 the h1 runs 2 lines and every action is above the fold (390-first.jpg).
- 1440-first.jpg: there are three actions of equal weight: a cream "Check ZIP" block, then "Get a number" and "Call" as two identical outlined buttons. No single primary reads first (−0.5).
- 1440-first.jpg: the "Black Mountain" label is detached from its dot (the dot floats 100px right of the text) and the river line crosses the label. The map's top-left third is empty sheet.

## Distinctiveness: 8.5
Earned: the altitude system does real work. Every section kicker is an elevation (EL. 2,100 → 3,600 FT), a fixed elevation gauge climbs as you scroll (1440-scroll-25/50/75.jpg: 2,540 → 2,990 → 3,430), contour rules divide bands ("2,800 FT · UPPER SLOPE", "3,600 FT · THE SUMMIT"), and the service area is drawn as a climbing elevation profile (1440-rm-full.jpg, area band). The area band passes the cover-the-logo test. No sibling first screens exist in sites/general/*/qa/screens to compare, so that check could not be made.
- 1440-first.jpg / 1440-scroll-50.jpg: mono tracked micro-labels on every block ("SHEET 01 · SERVICE MAP", "SCHEMATIC · NOT TO SCALE", "EL. … FT", "FIG. 0N") are a known slop tell and the most generic part of the system (−0.5).
- 1440-rm-full.jpg: the "FIG. / SHEET" title-block language is the library's most common blueprint device. The elevation idea is the original part and should lead.

## Typography: 8.5
Earned: Zilla Slab display has real scale contrast against Source Serif body (1440-first.jpg). Curly quotes, en-dash ranges ("Weeks 1–3", "7:30 am – 5 pm"), tabular hours, and lead paragraphs set apart.
- 1440-first.jpg: 5 tracked caps labels in one view (−0.5).
- 1440-rm-full.jpg (lot check, prices): the field labels "WHAT DO YOU SEE ON YOUR LOT?" and "THE JOB" sit directly under the lead paragraph with no gap, so they read as its last line.
- 1440-scroll-75.jpg: the estimator result is a full sentence set in DM Mono at about 18px, a status sentence in the numeric face.

## Layout and rhythm: 8.0
Earned: the tones alternate (deep / tan / paper / deep break / slate / paper / tan / paper / tan / deep) and the section shapes vary: story bands, a ruled service list, a full-bleed ridge break, a tool + drawing split, a timeline, an estimator sheet, a 1+3 review grid and a profile chart (1440-rm-full.jpg).
- 1440-scroll-50.jpg: the navy base of the ridge break runs straight into the dark slate lot-check band. Two dark bands touch and read as one block (−0.5, partial: the hues differ).
- 1440-rm-full.jpg (services): the left column is the heading and lead, then about 550px of empty paper beside rows 03–08 (c0 crop of the services band). Columns float in empty width (−0.5).
- 1440-full.jpg: with motion on, the story leaves about 1,900px of blank tan after "Water repair" before services begins. That is a pinned-story artefact over half a screen.
- The labels jammed under the leads (see Typography) make the tool bands feel crowded at the exact spot that should breathe.

## Photo and video (drawn treatments): 8.0
Earned: no stock at all. Every image is a flat drawing in the brand palette (navy, moss, sage, tan), so the grade matches by construction. The ridge break (1440-scroll-50.jpg) is the best image on the page. The story figures move from line drawing to filled drawing (390-full.jpg vs 1440-scroll-25.jpg).
- 1440-rm-full.jpg (lot check, FIG. 05) and 390-full.jpg (FIG. 03): the dark caption plate sits on top of the drawing's own label row ("FOOTING · SLAB · DRAIN · SURFACE", "4 STEPS · 11 FT DROP"), so the labels are half-hidden. This is visibly broken: mustFix.
- 1440-scroll-25.jpg / 1440-rm-full.jpg (story): the house drawings are beige rectangles with two dark squares. They are crude next to the ridge break and the estimator line drawing.

## Copy: 9.0
Earned: the voice is a hillside builder's: "stepped into steep lots, not perched on top of them", "the drain behind the wall laid before the first stud goes up", "Four steps of footing, one level floor." There is one primary action name ("Get a number") everywhere. Reviews, rating and prices carry Sample labels. The form note says "Nothing is sent from this demo." The reviews are concrete (1440-scroll-75.jpg).
- 1440-rm-full.jpg (form): "We call back within one business day" is a service promise that is not in facts.json. It is not a banned word, but it should become a process line (see Should).

## Mobile: 8.5
Earned: the hero is re-cut for the phone, with the map as a top strip, a 2-line h1 and full-width actions (390-first.jpg). The story stacks with no pin. The form radios use 2 columns and the mobile bar has Call + Get a number (390-full.jpg).
- 390-full.jpg (FIG. 03): the caption plate covers the drawing label (counted under Photo).
- 390-full.jpg (area profile): town labels collide with the profile line ("Candler" is struck through, "Arden" sits on the stroke) (−0.5).

## Accessibility: 8.0 (capped by mustFix)
Earned: 1440-rm-full.jpg and 390-rm-full.jpg show every word with reduced motion. There is one h1 and no heading skips (dist). Inputs are labelled and the static and render checks are clean.
- 1440-scroll-75.jpg: the fixed elevation gauge (bottom-left, about 68×160px) sits on top of the first review quote and hides "Our lot" / "drops". In 1440-scroll-50.jpg it covers the start of the "EL. 3,000 FT" kicker. Content is hidden under a fixed element: mustFix.

## Motion and interaction: 8.5
Earned: there are several hooks beyond reveals: contour-draw intro, line-split h1, the climbing elevation gauge (it visibly changes across 1440-scroll-25/50/75.jpg), the story figures going from line drawing to filled, a lot-check drawing that redraws as you answer, an estimator sketch with a dimension line, and timeline tabs. Motion explains altitude, which is the thesis.
- 1440-full.jpg: the pinned story produces a long dead stretch in the scroll capture. One idea takes too much scroll for three bands.
- The gauge, the best motion idea, is a small box in the corner and it collides with content (see a11y).

## Wow moment: 8.5
Earned: the page has two tools tied to the thesis. "Does your lot need stepped footings?" redraws a section of your lot, and the estimator prints a sheet with a sketch and a Sample price (1440-scroll-75.jpg). The service area drawn as a climb is memorable.
- 1440-rm-full.jpg (lot check): in its default state the output drawing is a flat box house on a gentle green slope. Nothing invites a tick, and the answer is not designed as a result (no "you likely need X steps" plate).
- The estimator's result is a mono text line (1440-scroll-75.jpg). The sketch helps, but the number is not set as the hero of the sheet.

## Polish: 8.5
Earned: radius is consistent (square throughout), rules are one weight, the footer carries licence, Sample note and "Drawings are schematic" (1440-rm-full.jpg footer), and there is a print button on the estimator.
- 1440-scroll-75.jpg: the estimator sheet has a hard offset shadow, and it is the only shadow on the page (a non-floating thing) (−0.5 within the band).
- 1440-first.jpg: the Black Mountain pin is detached from its label.

## Arithmetic
14×8.5 + 12×8.5 + 10×8.5 + 10×8.0 + 8×8.0 + 8×9.0 + 7×8.5 + 7×8.0 + 12×8.5 + 8×8.5 + 4×8.5
= 119 + 102 + 85 + 80 + 64 + 72 + 59.5 + 56 + 102 + 68 + 34 = 841.5 / 100 = **8.41** (8.415, rounded as score.mjs does)

Verdict expected: **FIX** (mustFix not empty).

## Must
1. **a11y: 1440-scroll-75.jpg, 1440-scroll-50.jpg, the fixed elevation gauge.** The gauge covers review text and section kickers at 1440. Fix: give the page a left gutter that holds it. Either reserve `padding-inline-start: 96px` on `.wrap` at ≥1024px, or move the gauge to the right edge, outside the 1380px content column. Below 1200px wide, hide it or dock it into the header. It must never overlap text at any scroll position.
2. **photo/drawings: 1440-rm-full.jpg (FIG. 05, lot check) and 390-full.jpg (FIG. 03).** The FIG caption plate hides the drawing's own label row. Fix: move the caption below the figure (as a `figcaption` outside the frame), or raise the drawing's label row above the caption's height, so "FOOTING · SLAB · DRAIN · SURFACE" and "4 STEPS · 11 FT DROP" are fully readable.

## Should
1. **#hero (1440-first.jpg): three equal actions.** Make "Get a number" the one filled button (cream fill, navy text), keep Call as a text link with the phone icon, and make "Check ZIP" an outlined button attached to the input.
2. **#hero map (1440-first.jpg).** Put the Black Mountain dot next to its label and keep the river line off it. Move the pins up so the top-left of the sheet is not empty.
3. **#services (1440-rm-full.jpg).** Fill the empty left column under the lead: make it sticky (`position: sticky; top: 120px`) or add a small drawn elevation-legend card there, so the column is not blank for 550px.
4. **Lot check and prices leads (1440-rm-full.jpg).** Add `margin-top: var(--space-m)` (≥24px) above "WHAT DO YOU SEE ON YOUR LOT?" and "THE JOB".
5. **Ridge break → lot check (1440-scroll-50.jpg).** Two dark bands touch. Either end the break on the slate colour as a contour line with an elevation tag between them, or move the lot check onto `t-paper`.
6. **#area profile (390-full.jpg).** Offset town labels above the line at 390 (`translateY(-14px)`), or alternate them above and below so no label is struck by the stroke.
7. **#story (1440-full.jpg).** Shorten the pinned distance to about 55svh per band, so the blank run after the third band disappears.
8. **Estimator sheet (1440-scroll-75.jpg).** Drop the hard offset shadow. Use a 1px rule frame like the other sheets.
9. **#quote copy (1440-rm-full.jpg).** "We call back within one business day" is not in facts.json. Replace it with "We call you back to set a time to walk the lot, and bring a budget range."
10. **Micro-labels (1440-first.jpg).** Cut the hero map's "SCHEMATIC · NOT TO SCALE" line and the second hours line under the proof list, so that 3 or fewer tracked caps labels show per view.

## Elevate
Weakest two: **layout (8.0, weight 10)** and **photo/drawings (8.0, weight 8)**. a11y is also 8.0, but it is mustFix-capped and lighter.

1. **Layout: make the scroll an actual climb you can see.** Put a thin vertical altitude rail, the gauge grown into the page's left gutter, down the full page at 1440. Every section's kicker hangs off it at its elevation, and the gaps between sections scale with the altitude gained. This turns the empty services column and the touching dark bands into one intentional ascending spine. The full-page screenshot should read as a mountain profile, not a stack of bands.
2. **Drawings: art-direct one illustration language.** Redraw the three story figures and the lot-check result in the ridge-break style (layered flat planes, the same three greens, a horizon line, cut-section hatching for footings), so river → mid-slope → steep → ridge reads as one illustrated sequence going uphill. Let the lot-check result plate state the outcome in that same language ("2 stepped footings + French drain").
