COPY: ok

# landscaper-A: critique round 2 (fast)

Round 1 scores named no screenshots and gave no deductions; this round re-scores from evidence. Some numbers are lower because of that, not because the site got worse.

**Five-second test** (1440-first.jpg, 390-first.jpg): "A Charlotte landscaper who fixes the red clay under the lawn first. Drawing of the soil layers right there. Price it, or call (704) 555-0116. Why them: they dig a test hole before seeding." Passes on both sizes.

## firstScreen: 9.5
1440-first.jpg: 8-word h1 on 2 lines with trade, city and thesis. Price it (filled) and Call (outline). Phone in the header. Proof line with a Sample rating and open-now. The soil-horizon strip with the probe is the signature, shown in the first screen, and the tan band peeks below it. 390-first.jpg: h1 on 3 lines, both actions above the fold, mobile bar. Small issue: at 1440 the CTA pair sits far right and reads as detached from the lede.

## distinctiveness: 9.0
The depth-gauge rail is on every frame (1440-scroll-25/50/75.jpg). Depth tags run on the lawn, soil and drainage bands, and the footer is "18 in + bedrock" (1440-rm-full.jpg). The signature does real work by ordering the services by depth. Sibling B (landscaper/B/1440-first.jpg) is unrelated in face, palette and hero. −0.5: the 01–09 numbering on the services list (1440-scroll-75.jpg) is the decorative-numbering tell, and the price, reviews, area and form bands lose the horizon language.

## type: 8.5
Bitter/Karla with a mono accent. Strong scale contrast and tabular numerals. −0.5: three tracked mono caps labels in one view (TWO-MINUTE YARD CHECK / WHAT DO YOU SEE? / UNTIL THE NEXT FESCUE SEEDING WINDOW, 1440-rm-full.jpg). −0.5: in the footer the hours break "5:30 / pm" (1440-rm-full.jpg). Review card 1 is set in Bitter at a larger size and cards 2–3 in Karla, which reads as inconsistency.

## layout: 8.5
The tone rhythm is good across 12 bands with no dark-on-dark joins (1440-rm-full.jpg), and the drainage section works as a full-bleed break. −0.5: the "heading left, card right" shape appears 3 times (yard check, Price it yourself, contact form). −0.5: the left column of Price it yourself is a short block floating in ~500px of empty height, and the footer's right half is thin (1440-rm-full.jpg).

## photo: 9.0
There are no raster photos. Every visual is a drawn cross-section (hero strip, aeration plugs, profile column, pH card, drainage section) in one palette and one texture system (1440-rm-full.jpg, 1440-scroll-50.jpg). Judged as drawn treatments, they read as one shoot. Not higher: the sequence never shows the result, a finished yard.

## copy: 9.0
Real trade nouns: core aeration, fescue window, swales, French drain, crape myrtles. Sample labels everywhere they are needed. Doubt microcopy under the form ("Nothing is sent from this demo"). −0.5: service blurbs repeat word for word. The drainage line appears in the story step, the drainage band and the services row; the soil line appears in the soil band and the services row (1440-rm-full.jpg).

## mobile: 9.0
390-full.jpg: the story is stacked rather than pinned, area chips are thumb-sized, the estimator runs full width and the mobile bar is present. −0.5: the drainage diagram is only scaled down to ~290px, not re-cut, so its numbered markers are illegible (390-full.jpg drainage band).

## a11y: 9.0
The reduced-motion full pages (1440-rm-full.jpg, 390-rm-full.jpg) show everything. render.json and static.json are clean. Forced-colors and reduced-motion handling are present, and the inputs are labelled. Not higher: the Sample pills are ~11px.

## motion: 9.0
1440-scroll-25.jpg: pinned profile with the active horizon outlined, and the matching step shown at the right. 1440-scroll-50.jpg: the rail fills in horizon colours. The motion explains the order of the work. Not higher: half of the right column is empty during the pin, and the rest of the page uses one reveal (19 data-reveal).

## wow: 8.5
The descending profile is on thesis. The two tools are off-signature, though. The yard check result is a plain text line (1440-rm-full.jpg check card), and the estimator output is a green bar with a house icon, not a depth drawing (1440-rm-full.jpg Price it yourself).

## polish: 8.5
apple-touch, OG, specific JSON-LD, print and forced-colors are all in place. −0.5: drop shadows on cards that do not float (yard check, estimator, form, reviews) and the footer hours wrap (1440-rm-full.jpg).

## Arithmetic
14×9.5 + 12×9 + 10×8.5 + 10×8.5 + 8×9 + 8×9 + 7×9 + 7×9 + 12×9 + 8×8.5 + 4×8.5
= 133 + 108 + 85 + 85 + 72 + 72 + 63 + 63 + 108 + 68 + 34 = 891 / 100 = **8.91**

## Must
None.

## Should
1. **#services list**: the 01–09 numbering is decorative. Replace each number with the row's depth tag (e.g. "0–2 in", "2–12 in", "12–18 in") so the list reuses the signature.
2. **Eyebrows (check, lawn, price, services, area, form)**: too many tracked mono caps. Drop the eyebrows, or set them in Karla sentence case. Keep mono only for depth tags and numbers.
3. **Footer hours**: they wrap to "5:30 / pm". Use `white-space: nowrap` on each time range, or give the hours a single column with day and time on one row.
4. **Reviews**: card 1 is in Bitter at a larger size. Set all three quotes the same way, or make card 1 clearly the lead by spanning 2 columns.
5. **Repeated blurbs**: in the services rows, write one new sentence per service (price driver or season) instead of reusing the band ledes and story steps.
6. **Drainage diagram at <640px**: add a phone crop with a taller viewBox centred on the swale and the drain, at ≥340px tall, with markers at ≥28px.
7. **Card shadows**: remove the drop shadows on the yard check, estimator, form and review cards, and use a 1px ink rule instead.
8. **Price it yourself left column**: add the "what it usually covers" list or the depth tag under the lede so the column holds content, or stack the tool under the heading.

## Elevate
- **type**: make the mono strictly the depth instrument. Use JetBrains Mono only for inch tags, the gauge and figures, and drop every tracked-caps eyebrow, so a text-only screenshot reads as a field log of depths.
- **layout**: carry the strata below the drainage band. Open Price it yourself, reviews, area and form each with a full-width wavy horizon edge and its depth tag. Break up the three "heading left, card right" bands: stack the estimator under its headline and run the form as one full-width strip.
