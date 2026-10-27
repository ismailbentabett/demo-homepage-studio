COPY: ok

# handyman-C: critique round 4 (fast mode, final round)

**Five-second test (1440-first.jpg, 390-first.jpg):** "A handyman in Louisville who does the small fixes on old houses (porch boards, screen doors, plaster cracks) in Old Louisville, Germantown, Highlands and Crescent Hill. I press 'Price a visit' or call (502) 555-0147. Why them: they know these exact houses; the drawing of a shotgun house with numbered problems shows it." Answered on both viewports.

Changed since round 3 (verified on screenshots): the hero secondary is now an outline button (1440-first.jpg); the 390 first screen opens on a crop of the hero sheet above the sign and h1 (390-first.jpg); the mobile bar primary is brass; the lead form is now "SHEET 06 · YOUR LIST" on graph paper with a styled 48px "Next step" button (1440-full.jpg, 390-full.jpg contact); the ZIP check sits under the form, so the contact columns end within ~20px of each other; the footer phone and email stack on 390; the Highlands sheet is now a bungalow with a hall section cut; the inspection card's ruled lines became separated checklist rows; the eyebrows over picker, prices and reviews are gone.

## firstScreen: 9.0 (was 8.5)
Earned: 1440-first.jpg: h1 has 6 words on 2 lines with trade (small fixes), place (Louisville) and object (old houses); filled "Price a visit" plus an outline "Call (502) 555-0147"; phone in the header; proof line "Open now · until 5 pm · 4.8 from 112 reviews SAMPLE RATING"; the street sign and the hung sheet put the signature in the first screen; the cream band peeks ~56px. 390-first.jpg: sheet crop, sign, 2-line h1, both actions above the fold.
- 390-first.jpg: the proof line (open now / sample rating) falls below the fold, and the sheet crop cuts the house off at the top edge with no roof, so it reads as clipped, not composed. This keeps it off 9.5.

## distinctiveness: 9.0
Earned: 1440-full.jpg: green street signs (hero, picker, 4 stops, footer) and numbered drawn sheets (SHEET 00–06, which now include the form) do real work: they act as the navigation, the service index, the checklist output and the form frame. It does not look like either sibling's first screen (A timecard, B pegboard).
- 1440-full.jpg: the price tags and the review cards are standard shapes; the review band is a 3×2 card grid any template has. Cover-the-logo works for the stops, not for prices or reviews.

## type: 8.5
Earned: Aleo display at real scale against Figtree body; en-dash price ranges ($320–$460) in the tags; tabular mono phone; headings balance without orphans (1440-full.jpg).
- 1440-first.jpg: the hero view still holds 3 tiny tracked mono caps labels (HANDYMAN SERVICES, SHEET 00 SHOTGUN WITH REAR SECOND STORY / LOUISVILLE, SAMPLE RATING) (−0.5).
- 1440-full.jpg / 390-full.jpg contact Hours: "7:30 am - 5 pm" set with a spaced hyphen, not an en dash, six times in the mono hours grid. Small, but visible, and the prices get it right.

## layout: 9.0 (was 8.5)
Earned: 1440-full.jpg: 12 sections with one job each; tones alternate dark → cream → brown → cream → dark skyline → light → brown → cream → teal → light → dark → cream with no dark bands touching; full-bleed skyline break; the stops vary the sheet's position (below text, left, right, small right). Contact band now balanced (form + ZIP on the right end level with the hours on the left, c1440 crop of 1440-full.jpg).
- 1440-full.jpg: the footer at 1440 leaves the right two-thirds empty above the nav row (the sign sits alone at left); a quiet but under-used close.

## photo: 9.0
Earned (drawn treatments, no stock on page): one consistent sheet system (graph paper, ink lines, red numbered callouts, title block naming house type + neighborhood). The Highlands sheet now matches the others: bungalow, tapered columns, 12 ft hall section (1440-full.jpg mid). Footer says honestly that the drawings are illustrations. Nothing broken or blank.
- 390-first.jpg: the hero sheet crop loses the roof and gable; it is the only sheet on the page that looks cut off rather than framed.

## copy: 9.0
Earned: trade- and house-native lines ("Anything past the shutoff valve goes to a plumber", "Wood frame cottages swell in July and shrink in January", "We bring the long ladder"); the honest "Where we stop" box; "five small fixes cost what one trip costs"; the CTAs now all use one verb ("Price a porch visit / an assembly visit / my report list / this visit"). Sample labels on every price and review (1440-full.jpg). Claims trace to facts.json.
- 1440-full.jpg reviews: each review card restates a service as its tag line ("Ceiling fan and light fixture swaps"), which repeats the service h3s word for word.

## mobile: 9.0 (was 8.0)
Earned: 390-full.jpg: no sideways scroll at 320/390 (render.json); the form "Next step" is a full-width 48px brass button; the picker becomes a list of signs with radio rings; each stop reads sign → sheet → h2 → fixes; the footer phone and email stack as separate lines; the brass mobile bar matches the hero.
- 390-first.jpg: proof line below the fold; clipped sheet crop (see firstScreen).

## a11y: 9.0 (was 8.5)
Earned: 1440-rm-full.jpg and 390-rm-full.jpg show every word, sign and sheet. One h1, h2 → h3 without skips (dist/index.html), focus-visible ring, forced-colors, skip link, live ZIP and checklist text. The form step control is now inside the designed button system.
- 1440-scroll-75.jpg: the checklist checkboxes are white squares with a 1px grey border on light teal rows; the box edge is faint next to the label.

## motion: 8.5
Earned: hero sheet swings on its nail; dotted route draws down the stop rail; signs flip up on arrival (hidden pre-trigger, present in 1440-rm-full.jpg); checklist ticks mark the porch drawing; skyline traveller dot.
- 1440-scroll-25.jpg / 1440-scroll-50.jpg: the route is still a thin dashed rule in the far-left gutter. A visitor would not retell "you walk from house to house"; there is no single motion idea that carries the concept. Unchanged since round 3.

## wow: 8.5
Earned: 1440-scroll-75.jpg: the Derby checklist ties trade, city and season; the porch drawing shows the "as found" faults with red dashes and numbered callouts that match the rows.
- 1440-scroll-75.jpg: the result is a small cream box with one line ("Nothing ticked yet…") and a dark button. The output does not become a sheet the homeowner keeps (no visit type, price range or "SHEET 05 · YOUR PORCH, MARKED" result). Unchanged since round 3.

## polish: 9.0 (was 8.0)
Earned: the default "Next" is gone; inspection rows are clean; SHEET 06 form frame; icons, OG, JSON-LD, print and forced-colors in dist/index.html.
- 1440-full.jpg stop 4: "Price my report list" is a red filled button while every other primary is brass; one off-colour primary.
- 1440-full.jpg contact: hyphen hours (scored in type, not again here).

## Arithmetic
14×9.0 + 12×9.0 + 10×8.5 + 10×9.0 + 8×9.0 + 8×9.0 + 7×9.0 + 7×9.0 + 12×8.5 + 8×8.5 + 4×9.0
= 126 + 108 + 85 + 90 + 72 + 72 + 63 + 63 + 102 + 68 + 36 = 885 / 100 = **8.85**

## Must
None. The round-3 mustFix (the default "Next" button) is fixed: 390-full.jpg and 1440-full.jpg show a styled 48px "Next step".

## Should
1. **#contact hours grid** (1440-full.jpg, 390-full.jpg): "7:30 am - 5 pm" → "7:30 am–5 pm" with an en dash (U+2013) and no spaces, everywhere the hours render (including the JS-written open-now output).
2. **Hero tracked caps** (1440-first.jpg): drop the "HANDYMAN SERVICES" plate under the hero sign (the h1 already says it), or set it in Figtree sentence case at 14px; keep SHEET 00 and SAMPLE RATING.
3. **390 hero sheet crop** (390-first.jpg): set the sheet's object/viewBox crop to include the gable and roof (the top ~40% of the house), e.g. show the house from the roof peak to the porch step at 16:10, and move the proof line ("Open now · 4.8 Sample") directly under the h1 above the lead paragraph at <640px so it is above the fold.
4. **Stop 4 primary colour** (1440-full.jpg, #crescent-hill card 2): make "Price my report list" brass like every other primary; keep red for callout numbers only.
5. **Checklist checkboxes** (1440-scroll-75.jpg): 2px ink border, 22px boxes, so the control edge reaches 3:1 against the light teal row.
6. **Review card tags** (1440-full.jpg reviews): replace the repeated service names under reviewer names with street + house type ("Germantown · wood cottage") so reviews carry the route idea.
7. **Footer at 1440** (1440-full.jpg bottom): put the nav + phone/email row beside the sign (sign left, two columns right) so the close does not leave the right two-thirds empty.

## Elevate
- **motion** (12, 8.5): make the walk the motion. Instead of a dashed rule in the gutter, have the route line run from the hero sheet's nail down through each stop's sign post and into its sheet's title block, with each sign turning to face the reader as the line reaches it and the sheet number ticking up (SHEET 01 → 02…). The visitor should feel they are being walked down the street, and the line should end at SHEET 06, the form.
- **wow** (8, 8.5): make the checklist's output a sheet. When boxes are ticked, the porch drawing's title block should rewrite itself ("SHEET 05 · YOUR PORCH, 3 FIXES MARKED"), and a stamped result strip should appear under it in the same drawn language (visit type, typical Sample price range, "about 2 hours") with "Send this sheet" carrying the ticked list into SHEET 06. The tool's answer then looks like the business's own paperwork.
