COPY: needs copy-chief

# pest-B · Trap Count Pest Co. · critique round 1 (fast mode)

## Five-second test
- **1440-first.jpg:** "Termite and pest control in Baton Rouge, 4.8 Sample stars, two buttons. The big beige box on the right with twelve teal rings and a slash is either still loading or broken. No phone number anywhere."
- **390-first.jpg:** "Same h1 in 3 lines, the white Book button and the outline Compare button are both above the fold. A beige box starts below. No number to call."
What / where / what to do are clear. *Why them* (the station log) is only hinted at by one mono line ("SAMPLE VISIT ST-04 BAIT READ NO HITS"). The signature visual reads as a placeholder, not a station map.

## First screen: 7
- Earned: h1 of 7 words with trade and city, 3 lines at 1440 and at 390; proof line under the h1 (Sample rating, towns); the filled primary and the outline secondary are not equally loud; the ZIP band peeks about 65px at 1440 (1440-first.jpg).
- −1.0: no phone visible on either first screen (1440-first.jpg header shows nav + "Book an inspection" only; 390-first.jpg shows only the burger).
- −0.5: the hero's right half is a flat #D4CFC6 placeholder rectangle with a ring of 12 unlabeled circles and a diagonal line. No house footprint, no BR-01…12 numbers, so the concept's signature isn't readable in the first screen (1440-first.jpg).
- −0.5: the eyebrow ("EVERY STATION CHECKED, EVERY VISIT LOGGED"), the log row and the caps nav make three tracked mono/caps strings in one view (1440-first.jpg). The proof line runs 3 lines because it lists all 8 towns.

## Distinctiveness: 7
- Earned: the palette (bayou green, bone, cypress teal) and the Chivo/Outfit/Space Mono pair differ from sibling A's cream + slab serif (sites/pest/A/qa/screens/1440-first.jpg). The station-pill idea shows on services (BR-01…09) and reviews.
- −1.0: the ring only shows as a decorative circle cluster in the hero, story and footer (1440-rm-full.jpg). It never organises information: stations don't map to anything, and nothing lights or logs. The concept's "every section is a row in the station record" doesn't happen.
- −0.5: services are a 3×3 grid of identical cards, each with a "Price it" outline button (1440-scroll-50.jpg). That's the "wall of services" template shape the brief warns against.
- −0.5: AI-slop tells: mono micro-labels everywhere, middle-dot meta strings ("4.8 stars · 309 Sample reviews · Serving…", "License … · 19 years"), and "BR-01…" numbering used as decoration on services that have no station meaning (1440-scroll-50.jpg).
- The hero photo slot is sibling A's own hero (`hero-A1`, also A's hero in sites/pest/A/dist). Logged as a mustFix under photo, not deducted twice.

## Typography: 7
- Earned: Chivo display at a strong weight, tight and confident on the h1 (1440-first.jpg). Body is Outfit at ≥16px.
- −0.5: straight quotes on all 7 reviews (`"The renewal came…"`) in dist/index.html (#reviews).
- −0.5: the station pills break their own label. "BR-" and "07" wrap onto two lines and spill out of the 40px circle (1440-scroll-50.jpg, every service card).
- −0.5: the compare-card h3s ("Liquid treatment", "Bait station system") are set in Space Mono at display size and rag to 3 lines in a narrow card (1440-scroll-25.jpg). The mono is the accent, not a heading face.
- −0.5: 3+ tracked caps labels per view (hero eyebrow, log row, the "ROUND TYPE / WELLS OR WATER NEARBY / YEARLY MONITORING" labels in the compare tool) (1440-first.jpg, 1440-rm-full.jpg).

## Layout and rhythm: 7
- Earned: tones alternate well (deep → bone → deep → photo → bone → teal → bone → deep → bone → deep, 1440-rm-full.jpg) and no two dark bands touch.
- −0.5: blank gap over half a screen below the mosquito tabs (1440-rm-full.jpg, roughly 40–55% down), and a dead-empty right half in the "From the log" band at 1440-scroll-75.jpg.
- −0.5: the full-bleed "break" is a 700px flat beige rectangle with a tiny caption box (1440-rm-full.jpg), and "How a visit reads" is a heading over four empty boxes with no text. Two sections do no job.
- −0.5: the ZIP band is a narrow centred column with an empty 4-column header row ("ZIP CHECK RESULT NEXT") floating under it, and most of the 1440 width is unused (1440-rm-full.jpg).
- −0.5: the compare section's right column (two placeholder boxes + ring + two log rows) ends far above the left column; lopsided (1440-scroll-25.jpg).

## Photo and video: 4
- All 9 frames are the same flat #D4CFC6 placeholder JPG, 16,907 bytes each (1440-first.jpg hero, 1440-scroll-50.jpg plan panel, 1440-rm-full.jpg break + "How a visit reads"). A buyer sees no photography at all.
- −1.0 ×2: the alt text is for the wrong region. "coastal Carolina house" (hero) and "Wilmington-like neighborhood" (break) on a Baton Rouge site (dist/index.html).
- The break caption says "Raised house with porch in South Louisiana", but the frame shows nothing. A caption that describes a photo that isn't there is the same honesty problem as an invented job.
- mustFix: the hero slot `hero-A1` is sibling pest-A's hero photo (rule 5: never reuse another site's hero).
- Below floor (6).

## Copy: 7.5
- Earned: trade-true nouns in the services and reviews (Formosan swarmers, weep holes, soffit, AC pad, after-flood framing). The retreat guarantee is in the facts' own words. Sample labels sit on prices and reviews. The primary action is consistently "Book an inspection".
- −0.5: the mosquito tabs repeat the same sentence 7 times ("Yard sprayed for shade and standing water. Per-visit sample price $65–$95.") for April through October. The tool says nothing month-specific (dist/index.html #mosquito).
- −0.5: the log rows that carry the thesis are filler: "VISIT · LIQUID · TRENCH · ROD SOIL" has no date, no station and no reading (1440-scroll-25.jpg). The log is the concept, and it reads like column headers.
- −0.5: "How a visit reads" and "From the log" are headings with no lead (1440-scroll-75.jpg). The guarantee line sits under "From the log" though it isn't a log entry.
- mustFix: the form's success state says "Request received. We'll be in touch shortly." with no Sample/demo wording. That's a demo form that pretends it sent (DEMO-RULES).

## Mobile: 7.5
- Earned: no sideways scroll at 390 or 320 (render.json). h1 is 3 lines and both actions sit above the fold (390-first.jpg). A Call/Book mobile bar is in the DOM.
- −0.5: no phone visible on 390-first.jpg; the mobile bar isn't visible in the first-screen shot.
- −0.5: collapsed, not composed. The hero signature box drops below the fold as a beige slab. Nine full-width service cards each carry their own "Price it" button, so the page runs 12,622px (390-rm-full.jpg). Nothing is re-cut for the phone.
- −0.5: the compare tool stacks three radio groups, two cards, two placeholder boxes, the ring and the log rows into about 2.5 screens for one idea (390-rm-full.jpg).

## Accessibility: 7.5
- Earned: reduced motion shows every section (1440-rm-full.jpg, 390-rm-full.jpg). Skip link, labelled inputs, one h1 and no heading skips (dist/index.html). The star ratings have aria-labels.
- −1.0: focus ring is `3px solid var(--focus)` = #4DB8A4, which is invisible on the #4DB8A4 "Build your plan" band (1440-scroll-50.jpg): every radio, checkbox and the CTA in the estimator. The bone-tone bands also only reach about 2.0:1 with this teal.
- +0.5: forced-colors and a print stylesheet are present.

## Motion and interaction: 7
- Earned: hooks beyond reveals exist (split h1, stagger, station dots, estimator, tabs, mobile bar hide). Reduced motion is respected.
- −1.0: the reveal doesn't fire reliably. At 1440-scroll-75.jpg the reviews band is in the viewport and every review card is still invisible. In 1440-full.jpg and 390-full.jpg the services, reviews and visit sections are blank. A visitor who scrolls at normal speed can land on an empty band (mustFix).
- −0.5: the promised "dial" story doesn't show. The ring isn't pinned and no stations light in groups at 1440-scroll-25.jpg, and the log rows sit static. Nearly everything else is the same fade-up.

## Wow moment: 6.5
- −1.0: no moment a homeowner would show anyone. The ring is unlabeled circles on a placeholder (1440-first.jpg). The estimator's output is the plain text "Select options above" in a box (1440-rm-full.jpg, plan band).
- −0.5: the compare tool's output is two static cards with price lines (1440-scroll-25.jpg). Nothing changes in the ring or the log when the house type changes.
- Below floor (7).

## Polish: 7
- Earned: radius chosen once (2px, pills only for the station dots), no `transition: all`, theme CSS for print and forced colors.
- −0.5: the BR pill text overflows its circle on all 9 service cards (1440-scroll-50.jpg).
- −0.5: the footer close reads "Next visit — scheduled —" with two stray dashes and a faint ring (1440-rm-full.jpg footer). It's not a designed close.
- −0.5: the empty placeholder frames and the empty ZIP result header row make the page look unfinished at every viewport (1440-rm-full.jpg).

## Arithmetic
14×7 + 12×7 + 10×7 + 10×7 + 8×4 + 8×7.5 + 7×7.5 + 7×7.5 + 12×7 + 8×6.5 + 4×7
= 98 + 84 + 70 + 70 + 32 + 60 + 52.5 + 52.5 + 84 + 52 + 28 = **683 / 100 = 6.83**

Below floors: photo (4 < 6), mobile (7.5 < 8), a11y (7.5 < 8), wow (6.5 < 7). Verdict expected: **FIX**.

## Must
1. **Photo, every `[data-photo]` (1440-first.jpg, 1440-rm-full.jpg):** all 9 frames are blank placeholder JPGs. Fix: get real approved pest/Gulf South frames into `niches/pest/media/manifest.json` (this is a niche-library gap, so the orchestrator may need to run media curation) and re-place them. Until then the site can't pass.
2. **Hero slot `hero-A1` (dist/index.html):** sibling pest-A uses the same photo as its hero. Fix: give B a hero frame no sibling uses.
3. **Alt text and captions (dist/index.html, hero + break):** "coastal Carolina house" and "Wilmington-like neighborhood" are the wrong region. The caption "Raised house with porch in South Louisiana" describes a frame that doesn't exist. Fix: write alt and caption from the actual approved frame, region-neutral or Louisiana-true.
4. **Form success state (#contact, dist/index.html):** "Request received. We'll be in touch shortly." pretends it sent. Fix: "Sample site: this form doesn't send. Call (225) 555-0156 to book." (through the tokens).
5. **Reveal reliability (1440-scroll-75.jpg, 1440-full.jpg, 390-full.jpg):** reviews, services and the visit gallery stay invisible when scrolled into view. Fix: trigger at `top 90%` with a fallback that adds `.is-in` to everything already above the viewport bottom on load and on scroll end. Or drop the stagger hide on the review grid entirely.
6. **Focus on the teal band (#plan, 1440-scroll-50.jpg):** the focus ring is the same colour as the background. Fix: inside the teal band use `--focus: #1A332A`, and check 3:1 on bone too (use #1A332A or a darker teal ≥ 3:1).

## Should
- **Header and hero (1440-first.jpg, 390-first.jpg):** no phone. Fix: put `{{biz.phone}}` as a tel: link in the header right of the nav at ≥ 900px, and as a quiet line under the hero buttons at all sizes ("Or call (225) 555-0156, Mon–Fri from 7 am").
- **Service pills `.svc-card` station label (1440-scroll-50.jpg):** "BR-07" wraps. Fix: `white-space: nowrap`, and size the pill to the text (padding 4px 10px, radius 999px) instead of a fixed circle.
- **Review quotes (#reviews):** straight quotes. Fix: use “ ” (curly double quotes).
- **Compare h3s (1440-scroll-25.jpg):** set them in Chivo at --fs-2, not mono at display size.
- **Mosquito tabs (#mosquito):** 7 identical panels. Fix: one line per month that's true to the trade and invents nothing, e.g. "April: first treatment as the yard warms" … "October: last treatment before first frost". Keep the sample price once, outside the tabs.
- **Log rows (#compare, hero):** give each row the four promised columns with a sample date and station: "SAMPLE · MAY 14 · BR-07 · AC pad · hits → bait replaced".
- **"How a visit reads" (1440-rm-full.jpg):** four empty boxes and no copy. Either cut it or make it a four-row visit log (arrive, read stations, treat, leave the ticket) with one frame.
- **ZIP band (1440-rm-full.jpg):** remove the empty "ZIP CHECK RESULT NEXT" header row. Put the ZIP check beside a served-areas list so the band uses the 1440 width.
- **Mosquito band gap (1440-rm-full.jpg):** blank cream area over half a screen. Tighten the section padding to --s-9 and remove the empty panel height.
- **Footer close (1440-rm-full.jpg):** "Next visit — scheduled —". Fix: a real closing log row ("Next visit: scheduled · All 12 stations read"), with the ring drawn large and every station lit.
- **Services (1440-scroll-50.jpg):** nine "Price it" buttons. Replace them with one row action per item, or turn the grid into a station log table (station / service / what's checked / sample price).

## Elevate (once the musts are cleared)
- **Photo (4):** treat the photography as the inspector's evidence. Each frame sits in a log-ticket frame with its station number and a reading line ("BR-07 · AC pad · no hits"), cropped tight to the detail (mud tube, bait cap, sill plate), so stock reads as one dated inspection rather than decoration.
- **Wow (6.5):** make the station ring the tool. Draw the house footprint with BR-01…12 placed around it. The compare inputs (slab, crawlspace or raised; water nearby) relight the ring, liquid as a continuous trench line and bait as discrete stations. The estimator writes its result as a printed year log under the ring, one dated row per visit. The signature and the tool's output then speak one language and can be printed.
