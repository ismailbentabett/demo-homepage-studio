COPY: needs copy-chief

# cleaning-B, critique round 5 (mode: fast; scored the same as strict)

**Five-second test (1440-first.jpg, 390-first.jpg):** "House cleaning in Huntsville. They price it room by room and show sample prices before anyone comes. I press 'Price my house' or call (256) 555-0153. Why them: the checklist and the prices are right here, it's open now, and there's a 4.8 Sample rating." All four answers land in under five seconds on both viewports.

## What changed since round 4
- Fixed: the hotel and cabin photo set is gone. Hero, break and triptych are now residential or process frames (1440-first.jpg, 1440-scroll-25.jpg, 390-full.jpg).
- Fixed: the credits read "Photo by X on Wikimedia Commons, licence", with no "Category:" and no email (1440-full.jpg footer).
- Fixed: the crew lede no longer restates "same crew". Mono labels are now mostly sentence case ("Times are Huntsville time", "Change it any visit.").
- Fixed: the hero ticket now says "Fills in as you price your house" and the dist carries `data-echo` hooks. The footer ticket prints SUBTOTAL / TOTAL from the estimator (1440-full.jpg footer).
- New regression: triptych frame 01 (fridge) renders as the striped placeholder in BOTH 1440-full.jpg and 1440-rm-full.jpg, and frame 02 (mop) is blank in 1440-full.jpg. The files decode fine and load at 390 (390-full.jpg), so this is a lazy-load or reveal race on desktop. Whatever the cause, the delivered screenshots show empty boxes.
- New: in #services, the row CTA was cut to "Price this visit →" on row 1 only. Rows 2-9 now show a lone orange arrow floating mid-row with no label (1440-full.jpg #services). It reads as a broken link.

## First screen: 9
1440-first.jpg: the h1 "Huntsville house cleaning, priced line by line." is 7 words on 3 lines and gives trade + city + outcome. There is one primary button plus a quieter "or call", the phone sits in the header, the proof line reads "Open now · until 5:30 pm · 4.8 ★ Sample rating", and the grey band peeks about 75px. The hero ticket is the signature, live in the first screen. 390-first.jpg: the h1 is 3 lines, both actions sit above the fold, and the sticky Call / Price bar shows. Held under 10: the new hero photo is a desaturated, near-monochrome sofa shot that reads as a furniture listing more than a clean home, and at 1440 the right half below the proof line is about 200px of dead paper.

## Distinctiveness: 8.5
1440-full.jpg: the Running Receipt carries the hero ticket, estimator slip, checklist tabs, quiz slip, price list, torn review stubs, hours ticket, form ticket and footer total. It is unmistakable against the siblings. Deductions:
- The spine-left ticket + right column shape is still used 6 times: hero, price, list, services, form, footer (−0.5).
- #services (1440-full.jpg) shows 8 unlabeled arrows that read as broken affordances, not as receipt lines.

## Typography: 8.5
Bricolage / Figtree / DM Mono (accent listed in concept.json). The display tracking is strong, prices use tabular mono, and the tracked-caps load is lower than round 4. Deductions:
- 1440-rm-full.jpg #area hours ticket: hyphen ranges "8 am - 5:30 pm", "9 am - 1 pm". They should be en dashes (−0.5).
- 390-full.jpg #services price list: "Every-other-week visit / $135 to $185" breaks onto two lines in the mono leader row. The leader dots vanish and the price drops under the label (minor, noted under Should).

## Layout and rhythm: 8
1440-full.jpg: there is a full-bleed sienna break, an offset triptych, staggered review stubs, and a good paper / grey / deep / sienna alternation. Deductions:
- 1440-full.jpg #services: the price-list ticket ends about 500px into a roughly 1100px dark band, which leaves about 600px of empty left column. Flagged in round 4, still there (−0.5).
- Same ticket-left / content-right family in 6 sections (−0.5; also counted under distinctiveness as the motif, here as rhythm). #form (1440-rm-full.jpg) repeats it with the ticket ending halfway and the right column empty below.

## Photo: 8 (mustFix, capped at 8)
The set is now on-topic and residential: living room, microwave, shower glass, stairs, fridge, mop, bungalow (390-full.jpg). That is real progress from 7.5. Deductions:
- **1440-full.jpg and 1440-rm-full.jpg: triptych 01 is an empty striped placeholder. 1440-full.jpg: triptych 02 is too.** (mustFix)
- 1440-scroll-25.jpg #break: a half-screen pine-panelled cabin bathroom with a chipped clawfoot tub. It is still not a Huntsville house, and it is the largest image on the page (−0.5).
- 390-full.jpg triptych 02: "spin mop head… strands grey from use". A dirty mop is the wrong image for a cleaning company. The blind duster (checklist tab) is a product cut-out on white, a different visual language (−0.5 combined with grade).
- Mixed grades: a near-monochrome hero, a saturated orange-wood bathroom, a cold grey-sky bungalow (1440-full.jpg).

## Copy: 8.5
Strong trade voice ("Nine visits, each with its own line.", "Which fridge shelf to leave alone", "They brought a rubber broom for the rugs"), doubt microcopy under the estimator and form, and a Sample label on every review, price, rating, licence and redo promise (1440-scroll-75.jpg). Deductions:
- "Same crew" still appears in the #break h2 and again in the 1440-scroll-75.jpg review, "Same crew every Friday". The dist has it 3 times (−0.5).
- Primary-action naming: "Price my house" (hero, header), "Price this visit" (quiz slip, services), "Send my price" (estimator), "Next" (form). Close, but "Price this visit" and "Price my house" both point into the price flow (noted under Should).

## Mobile: 9
qa/render.json: scrollWidth equals the viewport at 390 and 320. 390-first.jpg: h1 3 lines, both actions above the fold, a sticky bar of about 48px. 390-full.jpg: triptych stacks with all three photos loaded, the estimator options are thumb-sized, and the review stubs stack cleanly. The breakpoints at 390/640/900/1200/1440 cover 320. Held at 9: in 390-full.jpg the #quiz answer slip ("Nothing ticked yet") sits ABOVE the question and checkboxes, so the answer comes before the question on a phone.

## Accessibility: 9
1440-rm-full.jpg / 390-rm-full.jpg: every text block renders with reduced motion. The quiz slip has a text empty state. There is one h1 and a clean h2/h3 tree in dist, a labelled ZIP input ("Check your ZIP code"), and forced-colors and print media blocks in dist. Light-on-dark service copy is readable (1440-full.jpg #services). The blank triptych frames are images with alt text, so they are not text loss (scored under photo/polish, not here).

## Motion and interaction: 8.5
The dist now has `data-echo` (5), `data-print` (6), `data-split`, `data-reveal-stagger`, tabs, stepper and estimator. The hero ticket copy promises "Fills in as you price your house", and the footer ticket prints SUBTOTAL / TOTAL from the estimator state (1440-full.jpg footer). That ties motion to the thesis, which is why this moves up from 8. Kept under 9: 1440-scroll-25/-50/-75.jpg show only settled states, and nothing shows lines feeding in one after another. The hero ticket still reads "not picked yet" while the footer already shows a default visit, so the echo is not seen to travel. The blank desktop triptych frames suggest the image reveal is fragile.

## Wow: 8.5
The estimator prints VISIT / HOUSE / ADD-ONS / RANGE "$135 to $185" with Sample pricing, and the footer receipt closes on SUBTOTAL / TOTAL / TODAY with "Thank you · see you Friday" (1440-full.jpg). That is a real two-moment arc. Under 9: the footer TOTAL shows a default pick the reader never made (the hero shows "not picked yet" at the same time). The receipt does not visibly become *theirs*, and the footer line "SUBTOTAL Every-other-week visit, 3 bed, 2 bath" wraps raggedly into a right-aligned two-line mess (1440-full.jpg footer).

## Polish: 8.5
Credits are cleaned (1440-full.jpg), forced-colors and print styles exist, and the torn-edge footer close is designed. Deductions:
- Blank image placeholders in the desktop full shots (counted as mustFix under photo, not deducted twice).
- #services: 8 orphan arrows with no label (1440-full.jpg) (−0.5).

## Arithmetic
14×9 + 12×8.5 + 10×8.5 + 10×8 + 8×8 + 8×8.5 + 7×9 + 7×9 + 12×8.5 + 8×8.5 + 4×8.5
= 126 + 102 + 85 + 80 + 64 + 68 + 63 + 63 + 102 + 68 + 34 = 855 / 100 = **8.55**

## Must
1. **1440-full.jpg / 1440-rm-full.jpg, #crew triptych (data-slot story-1, story-2).** Problem: the fridge frame (and the mop frame in the motion-on capture) renders as the striped `data-fallback` placeholder on desktop, while the files decode fine and load at 390. Fix: drop `loading="lazy"` on the three triptych images (or set `loading="eager"` on story-1..3), and make sure the image clip/opacity reveal never starts from a hidden state when the image has not decoded yet. Reveal on `img.decode()` resolve, and with reduced motion show the image at full opacity with no reveal. Re-shoot and confirm all three frames show in 1440-full.jpg and 1440-rm-full.jpg.

## Should
1. **#services rows 2-9 (1440-full.jpg).** Problem: a lone orange "→" floats mid-row with no label. Fix: either print "Price this visit →" on every row as a right-aligned receipt line (mono, the same baseline as the h3), or remove the arrow and make the whole row the link, with a hover underline growing from the left. Never a bare arrow.
2. **#services left column (1440-full.jpg).** Problem: about 600px of dead dark space under the price-list ticket. Fix: `position: sticky; top: 96px` on the price-list ticket at ≥900px, so it rides beside the nine rows.
3. **#break photo (1440-scroll-25.jpg).** Problem: a rustic cabin bathroom, the largest image on the page. Fix: swap for the residential white shower (process-shower-glass) or another home-interior frame from niches/cleaning/media/manifest.json, and move the shower out of the checklist tab.
4. **Triptych 02 (390-full.jpg).** Problem: a dirty grey mop for "They learn the dog". Fix: use a pet-hair or stairs frame (process-vacuum, the carpeted stairs, fits "where the hair piles up"), and give the checklist floors tab a different frame.
5. **#area hours (1440-rm-full.jpg).** Fix: "8 am – 5:30 pm" with an en dash and `&nbsp;` around it, on every row.
6. **#quiz at 390 (390-full.jpg).** Problem: the answer slip comes before the question. Fix: `order` the slip after the checkbox grid under 900px.
7. **Footer ticket SUBTOTAL (1440-full.jpg).** Problem: "Every-other-week visit, 3 bed, 2 bath" wraps right-aligned over two lines. Fix: split into two receipt lines: "VISIT ···· Every other week" and "HOUSE ···· 3 bed, 2 bath".
8. **Copy (1440-scroll-75.jpg).** Fix: keep "Same crew" only in the #break h2. The facts.json review text stays as written, so remove the third occurrence, wherever it is outside the review and break h2 (check the meta / aria strings in dist).
9. **Price list at 390 (390-full.jpg).** Problem: the first row breaks label and price onto two lines. Fix: shorten the visible label to the service `short` value ("Every other week") in the ticket under 640px, or let the label wrap while the price stays right-aligned on the first line.
10. **Grade.** Fix: one shared warm paper-tone treatment on every photo (`filter: sepia(.12) saturate(.9) contrast(1.02)` or a baked grade) so the near-mono hero and the saturated cabin wood stop fighting.

## Elevate
- **Layout (8):** Break the six-times ticket-left shape. Let the receipt become the *spine of the scroll*, not a column in each band: one continuous paper strip that runs down the left edge of the page at ≥1200px. Each section prints its line onto it as you pass, and the content bands use the full remaining width in different shapes (a full-width services ledger, an asymmetric quiz, a centred area map line). The dead left columns in #services and #form disappear because the strip *is* the left column.
- **Photo (8):** Art-direct the set as one home on one Friday. Build a morning-to-afternoon sequence of the same kind of house (entry, kitchen counter, bathroom, stairs, living room) with one warm paper grade. Present each frame as a "photo slip" stapled to its receipt line, with the time printed under it in mono, so the photos read as proof-of-visit evidence printed by the business, not stock.
