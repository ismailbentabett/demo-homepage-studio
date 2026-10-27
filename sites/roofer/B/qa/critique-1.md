COPY: needs copy-chief

# roofer-B · Squarecount Roofing · critique round 1 (fast mode)

**Five-second test.** 1440-first.jpg: "A roof inspection report… from Squarecount Roofing in Fort Worth. I can call (817) 555-0102 or 'count my squares'. Why them: they measure and photograph everything before I sign." I get it, but "roofer" and "Fort Worth" come from the logo and the small mono header cells on the sheet, not from the h1. 390-first.jpg: same read. h1 on 2 lines, Call and Count my squares both above the fold, sticky bar present. The roof plan (the signature) is below the fold on the phone.

**Media note (pipeline, not the builder).** Every file in `dist/media/*.webp` is a 43-byte placeholder. All 15 photo slots render as empty beige boxes in every screenshot, and the hero "report sheet on shingle photo" shows a flat graphite band. I score photo as I see it, as instructed. The floor failure is a media-pipeline item. I have kept it out of the design deductions in the other categories.

---

## First screen: 7.5
Earned: the tilted white report sheet over graphite is a real composition, not "photo + left text". The signature is visible: the plan with 7 red pins, facet squares and the `29.4 sq + 10% waste = 32.3 sq` tally, with FIX 3 circled in red pen. The Call button is primary and Count my squares is quieter. The phone is in the header. The proof line reads "Open now · until 6 pm · Fort Worth and 7 nearby towns · ★ 4.8 (212) SAMPLE RATING".
- 1440-first.jpg / 390-first.jpg: the h1 "Counted before you sign." names no trade and no place. The trade and city sit in 13px mono cells above it (−1.0).
- 1440-first.jpg: the sheet starts at x≈475, so the left third of the hero (≈470 px × 780 px) is empty graphite. Nothing at 1440 uses that column. This is not a deliberate break, it reads as a void (−0.5).
- 1440-first.jpg: the next band peeks about 43 px, and what peeks is blank white. That does not pull you into the scroll (+0, no credit).
- 390-first.jpg: the signature plan sits entirely below the fold. On the phone the first screen is a text card (+0.5 for the h1 at 2 lines with both actions above the fold).

## Distinctiveness: 9.0
Earned: the Pinned Roof Plan does real work in at least 7 places:
- hero plan
- sticky margin plan whose pins tick as you read ("4 OF 7 READ", 1440-scroll-50.jpg)
- estimator plan with eave dimension lines (1440-scroll-25.jpg)
- claim timeline as pins on a leader, with the deductible circled in red pen (1440-full.jpg ≈ 35%)
- price rows keyed to finding numbers "see F-02" (1440-full.jpg ≈ 62%)
- reviews signed off with red ticks (1440-scroll-75.jpg)
- footer plan with all 7 ticked, "7 of 7 findings signed off" (1440-full.jpg footer)

Cover the logo and any section still names the business. It does not look like roofer-A (Wichita layered strata, brown and cream, Barlow-style condensed display).
- 1440-full.jpg: mono tracked-caps eyebrows above every heading ("FINDINGS 01-02 · WHAT WE CHECK FIRST", "F-04 · HAIL CLAIM HELP", "SIGNED-OFF NOTES"…) plus middle-dot meta strings. The concept explains them, but density makes them read as a tell (−0.5).
- Findings 01, 02, 05 and 06 all use the same "text left, photo right" row. It is one system, but it is the most template-like shape on the page (+0, already counted in layout).

## Typography: 8.0
Earned: Instrument Sans at a condensed width with tight display tracking (h2s at 1440-scroll-25.jpg and 1440-scroll-50.jpg). Public Sans body at full ink, about 17–18 px. Martian Mono does the numbers: prices, squares and hours line up as tabular figures (1440-full.jpg prices band, local hours card). Hours use an en dash, "7:30 am – 6 pm".
- dist/index.html: zero curly apostrophes on the page. "Here's", "won't", "we'd", "What's" are all straight. Hyphen ranges: "2,000-2,600 sq ft" (prices note), "FINDINGS 01-02" and "05-06" (−0.5).
- 1440-scroll-25.jpg: 8 tiny tracked mono caps labels in one view (F-03 · SQUARE COUNT, COUNT SHEET · ROUGH, HOUSE FOOTPRINT, ROOF SHAPE, PITCH, ROOF AREA, WASTE, YOUR ORDER) (−0.5).
- +0.5: the mono/condensed pairing does carry the "report" idea, and scale contrast between the 64 px h2 and the 13 px sheet cells is used.
- 1440-full.jpg: there is no full-width headline moment anywhere. The largest type on the page is the 72 px hero h1 inside a card (+0).

## Layout and rhythm: 8.0
Earned: tones alternate cleanly in 1440-full.jpg: graphite hero, white findings, carbon estimator, paper claim, red deductible band, white findings, break, graphite prices, paper notes, carbon local, white contact, graphite footer. No two dark bands touch. The red deductible band is a strong quiet/loud beat. The prices band is properly dense.
- 1440-first.jpg: the dead left third of the hero (see First screen). Charged here once as "floats in empty width" (−0.5).
- 1440-full.jpg ≈ 8–17%: the findings section does two jobs. It holds the 8-row "What we price / PRICE IT" index and the findings F-01/F-02. The index also repeats the services that the findings and the line items already list (−0.5).
- 1440-scroll-75.jpg: the notes heading sits in the left 470 px with the right 900 px empty for ~430 px of height (+0, minor).
- 1440-full.jpg ≈ 52%: the "break" puts its caption ("Signed off when the count…") in a separate carbon strip under the image, not on it. Without a photo the break reads as a grey slab and a stray footer strip (+0.5 for the otherwise varied families: index, split rows, tool sheet, horizontal timeline, full band, ruled ledger, card grid).

## Photo and video: 5.0
- All 15 slots in 1440-full.jpg, 390-full.jpg and 1440-rm-full.jpg are empty beige frames, including the hero thumbnails F-04/F-02/F-05 (1440-first.jpg) and the hero background, which shows as flat graphite. A visitor sees no photographs at all.
- Credit for what is under the placeholders: 3:2 crops are consistent, alt text is specific ("Rubber boot flashing around a plumbing vent pipe"), and the captions are keyed F-01…F-07 so the frames belong to the signature. That is why this is not lower.
- This is a media-pipeline item (placeholder files), not a builder item. The floor failure will clear only when real files land. Re-score photo then.

## Copy: 8.0
Earned: real trade nouns and honest specifics. "One leak is one leak. The report says so." "Rotten wood gets photographed, not covered." "A magnet sweep is the last finding on the report." The 8-step Texas claim timeline ends at "Depreciation released". "We won't touch your deductible. Texas law says we can't" (Insurance Code ch. 707 is accurate, and the facts.json review backs the stance). Microcopy at doubt points: "Nothing is sent from this demo", "Tap one and the form fills itself". Sample labels are on rating, reviews, prices, figure, licence and terms.
- h1 (1440-first.jpg) is a slogan with no trade and no place. Charged in First screen, noted here.
- Primary action has five names: "Count my squares" (header, hero, prices), "Price it" (index), "Book an inspection with a photo report" (F-01), "Ask for your count" (contact h2), "Request a report" (footer nav, 1440-full.jpg footer) (−0.5).
- Headlines over 2 lines at 1440 (−0.5):
  - "Three bids, three roof sizes? Here's how we count ours." (1440-scroll-25.jpg, 3 lines)
  - "What homeowners wrote after the last line was checked." (1440-scroll-75.jpg, 3 lines)
  - "We won't touch your deductible…" (1440-full.jpg, 3 lines)
  - "Based in Fort Worth. Still here after the storm trucks leave." (3 lines)
- 1440-full.jpg ≈ 8–12%: the same idea is repeated. The h2 "Every problem gets a number, a photo and a call: fix it or watch it." is followed by F-01 "A roof diagram with every problem pinned on it" and a body that opens "Every problem pinned on a roof diagram… a clear fix-or-watch call". The services blurb is pasted under findings as a bold run-in ("**Roof replacement.** Your roof measured in squares…") (−0.5).
- +0.5 for trade-specific voice that could not be pasted onto another trade.

## Mobile: 8.5
Earned: 390-first.jpg has the h1 on 2 lines, Call and Count my squares above the fold, and a 2-button sticky bar. There is no sideways scroll at 320 or 390 (render.json). The estimator stacks into a usable thumb tool with 48 px chips (m1 region of 390-full.jpg). The findings index collapses to readable rows. CSS is min-width-first with steps at 390/400/640/900/1024, so 320 should be the base layout.
- 390-first.jpg: the signature plan is pushed below the fold. The phone hero is the desktop sheet stacked, not re-cut (−0.5).
- 390-full.jpg: the findings rows simply stack text then frame, and the margin plan disappears with nothing replacing the "pin drops" idea except the kicker pin (+0, from the 9 anchor "composed for the phone").
- +0.5: the sticky bar is clean and the tool is genuinely thumb-usable.

## Accessibility: 8.5
Earned: 1440-rm-full.jpg and 390-rm-full.jpg show every word and every section, matching the motion-on full pages. There is a skip link. ZIP and estimator inputs have labels and the radio choices are wrapped in labels. Heading order is h1 → h2 → h3 with no skips (dist/index.html). Forced-colors blocks exist.
- 1440-full.jpg prices band: the mono meta line "SAMPLE PRICING · EVERY ROW PINNED TO ITS FINDING" and the row notes ("most single leaks · see F-02") are mid-grey at about 12 px on graphite. They look near the 4.5:1 line and need verifying (−0.5).
- 1440-first.jpg: the 13 px mono "Sample roof · 29.4 sq + 10% waste" line and the header cells on the sheet are small for meaning-carrying text (+0).
- The focus style cannot be judged from stills. I give no 9 without seeing it.

## Motion and interaction: 8.5
Earned: at least 5 distinct hooks beyond reveals:
- margin plan pins turn red and tick per finding read, with a progress leader that draws under the group heading (1440-scroll-50.jpg)
- red-pen circles on verdicts (FIX/WATCH, the deductible word)
- estimator count-up
- `sw-print-est`
- intro sheet rise with pin drop

The motion explains reading progress, which is the 9-anchor idea.
- 1440-scroll-50.jpg: the concept's leader "from pin to the section photo" is delivered as a horizontal progress rule under the group h2. It never connects the margin pin to the finding's frame, so the "drop and draw to evidence" moment is only half there (−0.5).
- dist/index.html carries `sw-marquee` and `sw-rotate-word` hooks, but no marquee or rotating word shows in any screenshot. That is dead weight or a hidden marquee: remove it or confirm it is unused (+0).

## Wow moment: 9.0
Earned: the count sheet (1440-scroll-25.jpg, 390-full.jpg). The plan redraws by roof shape with eave/rake dimension lines. The math is shown the way a roofer writes it, "2,200 × 1.08 eaves × 1.12 pitch = 26.6 sq · +12 % for a hip roof = 29.8 sq · YOUR ORDER 28–31 squares", then a Sample price band and a print hook. It answers the exact buyer fear from facts ("28, 34 and 31 squares"). It connects to the margin plan that ticks as you read and to the footer plan signed off.
- Without photos, the "evidence" half of each pin is blank, so the connected moment cannot be fully read in 1440-scroll-50.jpg. This is not charged here because it is a photo item.

## Polish: 9.0
Earned: SVG favicon and apple-touch icon, OG 1200×630, `RoofingContractor` JSON-LD, theme-color, a preloaded hero, print styles, lazy images with width/height. One radius (2px, plus 50% for pins). Rules are of one weight. The footer is a designed close, with the ticked plan and "32.3 sq · 7 of 7 findings signed off" (1440-full.jpg footer).
- 1440-full.jpg prices band: the primary button changes from red to salmon (#f08080-ish) on graphite. It is the only off-system colour on the page (−0.5, offset by +0.5 for the footer close).

---

## Arithmetic
14×7.5 + 12×9.0 + 10×8.0 + 10×8.0 + 8×5.0 + 8×8.0 + 7×8.5 + 7×8.5 + 12×8.5 + 8×9.0 + 4×9.0
= 105 + 108 + 80 + 80 + 40 + 64 + 59.5 + 59.5 + 102 + 72 + 36 = **806 / 100 = 8.06**

Photo 5.0 is below its floor of 6, so the verdict is **FIX**. The weighted score sits inside the fast ELEVATE window, but the floor decides.

## Must
None from the build. There are no DEMO-RULES breaches: every review, rating, price, figure, licence and term is Sample-labelled; the form says "Nothing is sent from this demo"; there is no owner face. The reduced-motion pages show everything. There is no overflow.
(Pipeline, for the orchestrator and not the builder: `dist/media/*.webp` are 43-byte placeholders. Photo cannot clear its floor until real files are in the niche library.)

## Should
1. **#hero h1 (1440-first.jpg, 390-first.jpg).** The h1 has no trade or place. Keep the line and add the place to it, for example "Fort Worth roofs, counted before you sign." Alternatively keep "Counted before you sign." and promote the WHERE cell into a visible 20 px line directly under it: "Roof inspections and replacements in Fort Worth, TX".
2. **#hero at ≥1200 px (1440-first.jpg).** The left 470 px is a void. Either centre the sheet's grid so it spans columns 2–12, or give the left column the "Inspected by Squarecount" report cover (biz name, date line, "Sample" stamp, ZIP check) so the void becomes the cover page the sheet is pulled from.
3. **Primary-action name (whole page).** Pick one name and use it everywhere: "Count my squares" for the tool and "Book my inspection" for the form. Change the contact h2 "Ask for your count." and the footer "Request a report" to match.
4. **#findings intro (1440-full.jpg ≈ 8–12%).** Cut the repeat between the h2 and F-01. Rewrite the F-01 body to something new, such as what the report physically is: "A printed sheet and a PDF: the plan, every finding with its photo, the squares, the price lines." Drop the bold "service blurb" run-ins under F-05/F-06 or fold them into one sentence.
5. **Headlines at 1440.** Trim them to 2 lines:
   - "Three roof sizes from three bids? Here's ours." (or widen `#count-h` max-width to ~16ch at 1440)
   - "What homeowners wrote after sign-off."
   - "We won't touch your deductible. Texas law says we can't."
   - "Based in Fort Worth, here after the storm trucks leave."
6. **Typography details (dist).** Swap every straight apostrophe for ’. Change "2,000-2,600" to "2,000–2,600" and "01-02"/"05-06" to en dashes.
7. **Tiny caps density (1440-scroll-25.jpg).** In the count sheet, set field labels (HOUSE FOOTPRINT, ROOF SHAPE, PITCH) in Public Sans 15 px sentence case and keep mono caps only for the sheet header and the result keys.
8. **#prices meta text (1440-full.jpg prices band).** Raise the grey notes on graphite to at least #b8bec6 at 14 px and verify 4.5:1. Keep the primary button red (#c41e3a with white text, or the white-ringed variant) instead of salmon so the action colour stays one colour.
9. **#findings index (1440-full.jpg ≈ 8%).** The 8-row "What we price" list duplicates line items and the form step 1. Move it into the hero sheet as the report's "Scope" table, or delete it and let the pins be the index.
10. **Unused hooks (dist/index.html).** `sw-marquee` and `sw-rotate-word` appear in markup and CSS but nothing shows. Remove them, or confirm they are inert.
11. **Break (1440-full.jpg ≈ 52%).** Put the "Signed off when the count, the photos and the invoice match." line on the image as the report's sign-off block (white sheet corner, bottom left, overlapping the photo by 80 px) instead of in a separate carbon strip under it.

## Elevate
- **Photo (5.0): make the photo frames the evidence end of the signature.** Every finding frame gets the same treatment, so stock reads as one inspection:
  - a thin report border
  - the F-number tab cut into its top-left corner
  - the red-pen circle drawn onto the defect in the photo itself, as an SVG overlay positioned per image
  - the margin pin's leader actually landing on that circle

  The hero's three thumbnails become the same evidence tiles at small size. When real photos arrive, the page looks like one inspector shot them all.
- **First screen (7.5): turn the hero into the report's cover spread.** Use two pages side by side across the full 1440:
  - Left, the cover: "Roof inspection · Fort Worth, TX", with the h1 carrying the place, the two actions, the open-now and Sample rating line, and a ZIP field.
  - Right, page 1: the plan, its tally and the FIX/WATCH summary.

  The intro "turns the page" (cover settles, pins drop on page 1), all under 1.2 s. On 390, crop the plan into a short strip (the L-shaped plan rotated, 160 px tall, pins live) between the h1 and the buttons, so the signature is in the phone's first screen too.
