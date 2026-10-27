COPY: ok

# landscaper-B (Half Inch Landscape Co.), critique round 3 (fast mode)

Round 2 → 3: the drawings are now a three-sheet set (L-1 existing conditions, L-2 planting plan, L-3 planted with a section A-A). They have hatch fills, plan-symbol plants, a north arrow, scale bars and a title block. The plan at 390 is recomposed, not squashed. The footer is now a "run schedule" with clean hours. The Pexels credits are replaced by "Drawings L-1 to L-3 are sample plans". The guarantee, insured and 9 years now appear in the deep strip and in Tool B. The mono eyebrows are gone, and the hero proof line now reads "4.8 ★ · 143 reviews [Sample rating] · 9 years in Austin". None of the round-2 items are listed again below.

## Five-second test
- **1440-first.jpg:** "An Austin landscaper who builds yards that survive the summer on less water. On a mid-size yard my lawn uses 1,341 gal/wk against 491 with native beds, which saves me about 850. I'd press 'Price my yard' or call (512) 555-0117." That answers what, where, what to do and why them.
- **390-first.jpg:** the same 3-line h1, a full-width "Price my yard" above the fold, the Sample rating, and the start of the water card. Call is in the header and the sticky bar. That answers all four.

## First screen: 9.0
Earned: in 1440-first.jpg the h1 has 8 words in 3 lines and states outcome and city. There is one filled primary action and one outlined secondary, and the phone is in the header. The proof line is clean and labelled. The signature water-budget card shows live numbers on load. The deep band peeks at the bottom.
Deductions / limits:
- 1440-first.jpg: about 150px of empty paper sits above the eyebrow, and the text block floats, centred against the card. This was also noted in round 2 and keeps the score off 9.5.
- 390-first.jpg: the proof line wraps with an orphan "·" at the end of line 1 ("Sample rating ·" / "9 years in Austin"). This is minor.

## Distinctiveness: 9.0
Earned: two primitives now work together. The zone tag (Z0/Z1 hero, Z01-Z10 services in 1440-scroll-25.jpg, the "Route / Zone roster", and "Prog … End · All zones off" in the footer) carries the controller thesis. The L-1/L-2/L-3 sheet title blocks (c0/c2/c3 crops of 1440-full.jpg) carry the landscape-architect thesis. No eyebrow tells remain. Nothing on the page reads as a landscaper template.
Deductions: none at half-point scale. Zone-tag boxes still sit on almost everything (review "Note", Tool B "Fix"/"Ins", footer "Demo"/"Plans"), so the tag loses hierarchy. This is not scored.

## Typography: 9.0
Earned: the h1 rag is controlled. The Space Grotesk h2s are well scaled, and DM Mono is kept to numbers, tags, run windows and sheet labels. The footer hours now set as clean right-aligned mono rows (c6 crop of 1440-full.jpg).
Deductions:
- 1440-scroll-50.jpg: the Tool B price readout is set at display size and breaks "Xeriscape conversion: $6 / to $15 per sq ft (plants, / gravel, edging and soil prep)". The number range is split across lines, which is the one thing a price should never do. There is no separate deduction; it is folded into the Should list together with the 1024 wrap below.
- 1024-first.jpg: the yard-size buttons wrap "2,800 sq / ft" and "1,200 sq / ft" onto two lines (−0.5, offset by the hours fix → net 9.0).

## Layout and rhythm: 9.0
Earned: tones alternate in 1440-full.jpg: paper hero → deep sheet L-1 + facts strip → paper services → white process → mist tools → paper natives → deep reviews (sticky left column, 1440-scroll-75.jpg) → white ZIP → juniper quote → paper footer. Tool B now fills its card (Fix / Ins rows, 1440-scroll-50.jpg). The L-1 sheet is composed inside a frame with a title-block column instead of bleeding (c0 crop).
Deductions:
- c6 crop of 1440-full.jpg: the footer repeats the whole zone roster and all 12 ZIPs that the ZIP band showed 2 screens earlier (c5). At 390 this makes the footer about 1,400px long (lb_m7 crop of 390-full.jpg). The repetition costs rhythm rather than points.
- c5/c6 crop: the quote band's left column ends at about 40% of the band's height, leaving a large empty juniper area under "Closed · opens tomorrow 6:30 am". This is acceptable.

## Photo and video: 9.0
Per the orchestrator, the stock photos are placeholders. The page currently ships no `<img>` at all (dist/index.html). Judged here: the drawn sheet set.
Earned: this is now a coherent art-directed drawing language. Lawn has a hatch (no more X-box), the plants are plan symbols (salvia star, agave rosette, muhly tuft, sage cloud), and there is a north arrow and scale bar on every sheet. The L-3 section A-A shows drip in gravel over amended soil over caliche "broken per hole", which is trade knowledge drawn, not stated (c3 crop). The three sheets tell existing → plan → planted, and the process sheet adds a layer per step (Step 1 of 4 in c2, Step 4 of 4 in lb_m3 crop of 390-full.jpg). At 390 the L-1 sheet is recomposed (side yard dropped, title block moved under it) rather than squashed (lb_m0 crop).
Limits: there is still no image of a real finished yard anywhere, so the homeowner never sees green. That is expected while the photos are pending, and it is why this is not higher.

## Copy: 9.0
Earned: there is one action name everywhere. The lines are specific to the region and trade ("broke through the caliche for each plant hole", "pruning for January because of oak wilt", "Brown by July"). Trust facts are now on screen: "9 yrs · Insured · Year-one leak fix" (c0) and the full guarantee in Tool B. The sign-off "All zones off until your next watering day" is strong. All reviews, the rating, the price and the estimate are Sample-labelled. Everything checks against facts.json.
Deductions: none at half-point scale. The tags "Prog", "Ins" and "Fix" are cryptic to a homeowner (1440-scroll-50.jpg, c6). That is listed under Should.

## Mobile: 9.0
Earned: no overflow (render.json at 390/320). In 390-first.jpg the primary action is above the fold, and there is a call icon and a sticky Call / Price bar. The L-1 and L-2 sheets are re-cropped for the phone (lb_m0, lb_m3). The services become stacked rows with their action link. The tools stack cleanly.
Deductions: the footer is about 1,400px long at 390 because of the repeated roster and ZIPs (lb_m7). It is counted under Layout, not here.

## Accessibility: 9.0
Earned: 1440-rm-full.jpg and 390-rm-full.jpg show every section with content visible. There is one h1, the switches and the ZIP field have visible labels, and the Sample tags have readable contrast in both tones. The orphaned photo alt text from round 2 is resolved because no `<img>` is shipped.
Deductions: none visible.

## Motion and interaction: 8.5
Earned: in dist there are reveals, stagger, split headings, step-driven sketch layers (data-step / data-layer), the live water tool, the readiness switches and the price select. The progress rule shows in 1440-scroll-25/50/75.jpg.
Deductions:
- 1440-scroll-25.jpg, 1440-scroll-50.jpg, 1440-scroll-75.jpg: the concept promises "zone rule readout counts to value on enter (data-count)" and the controller boot. dist has no data-count hook, and the readouts ("Today 1,341 gal/wk", "Planned 491 gal/wk") are static text. The motion visible in the frames is still fades plus a progress bar (−0.5). This was carried over from round 2 and is still not delivered.

## Wow moment: 8.5
Earned: the hero water budget is live on load (1440-first.jpg), and the L-1 → L-2 → L-3 sheet set is now a genuine second moment.
Deductions:
- c0 and c3 crops of 1440-full.jpg: the sheets quote "Today 1,341 gal/wk" and "Planned 491 gal/wk" as fixed strings. In dist, data-water-out only targets the hero card. If you change the yard size or the lawn slider, nothing on the drawings answers. The tool and the yard still don't talk (−0.5, carried from round 2).

## Polish: 8.5
Earned: credits now match what is shown. The hours grid is fixed, and there is a print stylesheet, favicon, OG and JSON-LD.
Deductions:
- c6 crop of 1440-full.jpg: the footer email breaks mid-domain "hello@half-inch- / landscape.example", and "Dripping / Springs" wraps, so that zone-assignment row is taller than its neighbours (−0.5).
- 1024-first.jpg: the "sq / ft" wraps in the size buttons (scored under type; noted here as part of the unfinished look).

## Arithmetic
14×9.0 + 12×9.0 + 10×9.0 + 10×9.0 + 8×9.0 + 8×9.0 + 7×9.0 + 7×9.0 + 12×8.5 + 8×8.5 + 4×8.5
= 126 + 108 + 90 + 90 + 72 + 72 + 63 + 63 + 102 + 68 + 34 = **888 / 100 = 8.88**

(Order: firstScreen, distinctiveness, type, layout, photo, copy, mobile, a11y, motion, wow, polish.)

## Must
None. No DEMO-RULES breach, no a11y failure and no phone breakage is visible. static.json and render.json have zero blockers and zero warnings.

## Should
- **Tool B price readout, `#tools` dark card (1440-scroll-50.jpg):** drop the readout to the h3 size (about 1.375rem). Put the range on its own line with `white-space: nowrap` ("$6 to $15 per sq ft"), and move the scope "(plants, gravel, edging and soil prep)" to a small line beneath it.
- **Hero size buttons at 1024 (1024-first.jpg):** set `white-space: nowrap` on the sq ft line. Between 900 and 1100px, shorten the label to "2,800 ft²" or reduce it to 0.8125rem.
- **Footer (c6 crop, lb_m7 crop):** remove the duplicate zone roster and ZIP list from the footer, since the ZIP band already has them. Replace them with one line, "Zones 00-07 · Austin + 7 towns · see Area", that links to #area. Set the email in a column wide enough not to break, or use `overflow-wrap: anywhere` only at ≤ 360px.
- **Cryptic tags (1440-scroll-50.jpg, c6):** rename "Ins" → "Insured", "Fix" → "Leak fix" and "Prog" → "Schedule". The homeowner should never decode a tag.
- **390 proof line (390-first.jpg):** keep "Sample rating" and "· 9 years in Austin" together with a non-breaking group, or drop the separator at the wrap.
- **Hero vertical rhythm (1440-first.jpg):** top-align the text column with the card (`align-items: start` plus about 40px top padding), so the 150px of empty paper above the eyebrow closes.

## Elevate
- **Motion (8.5): make the schedule run.** When each sheet enters, its readout counts from 0 to its value in mono (L-1 "Today 1,341", L-3 "Planned 491"). The zone tags of the services list tick on in sequence like a controller stepping through zones, with the active row's tag filled for about 600ms. In reduced motion, show the final values at once. The page should feel like a controller cycling, not like sections fading in.
- **Wow (8.5): let the hero tool redraw the yard.** Bind the hero calculator's state to the sheets. Changing yard size or lawn % updates the L-1 "Today" figure and the L-3 "Planned" figure. It also shrinks or grows the hatched lawn area on L-1 (a clip or scale on the lawn group) and moves a small "you are here" marker between the "Today" and "Planned" readouts. The homeowner's own numbers then follow them down the page, turning one widget into the thread of the whole site.
