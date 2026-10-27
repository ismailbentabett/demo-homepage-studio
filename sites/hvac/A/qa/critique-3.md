COPY: ok

# hvac-A — critique round 3 (fast mode, final round)

Round 2 was scored from the DOM only (no screenshots existed). This round is scored from the real frames, so some round-2 scores move down. That is calibration, not a regression.

## Five-second test
- **1440-first.jpg:** "AC repair in Las Vegas, and they write everything on a ticket. The diagnostic is $89-$160. I can call (702) 555-0104 or hit Price it." Trade, city, action and the reason to pick them all read in under 5 s.
- **390-first.jpg:** the h1 and lead read clearly. The drawn condenser plate takes the top ~330px, so the hero CTAs and the sample-diagnostic line fall below the fold. The fixed bottom bar (Call + Price it) covers the action.

## Section scroll (1440-rm-full.jpg, 1440-scroll-25/50/75.jpg)
1. **Hero (dark).** Drawn condenser plate on the left, ticked rail plus h1 on the right. Signature present.
2. **"What's it doing?" (paper).** Symptom select with a Diagnosis Ticket stub: header bar, SYMPTOM / YOU GET rows, perforated "KEEP THIS STUB" tear line. This is the best object on the page.
3. **"One call, one ticket, three stamps" (deep).** Three timestamped entries with plate crops (fan guard, capacitor, drain line). In motion (1440-scroll-25.jpg) the crossfade leaves two entries' text and two plates overlapping.
4. **Break (night skyline).** Full-bleed drawn valley at dusk. Good.
5. **Services (paper).** A 2×2 emergency block, then the "Installations & upgrades" list sits in the right half with an empty left half (1440-scroll-50.jpg).
6. **While you wait (sage).** A centred numbered checklist with a print button.
7. **Reviews (deep).** Rail plus four full-width text cards. Each review's text stops at about 60% of the card width.
8. **Area (paper).** A long h1-sized area heading, chips, and a ZIP card. The card's bottom edge is open (1440-scroll-75.jpg).
9. **Pricing (dark).** Five identical full-width stacked cards. Each has a SAMPLE PRICING bar stretched across the whole card.
10. **Form (paper).** "Get a number / What's happening?" with a single centred select in a large empty band.
11. **Footer.** "SHA" initials, hours grid, licence (Sample), "DISPATCH CLOSED", and the saltbush glyph sitting on the divider rule.

Siblings: hvac-B (1440-first) is a light dew-point chart tool with a different face and layout. No family overlap.

Checks: `static.json` and `render.json` are clean (no overflow at 320/390, no console errors). The blank bands in 1440-full.jpg / 390-full.jpg are reveals that had not fired in the full-page capture. 1440-rm-full.jpg shows every section with its content, and the 75% frame shows reviews revealed on scroll, so this is not scored as a defect. It is still evidence of fade-in on almost every section (see motion).

## firstScreen: 8.5
- **Earned:** the h1 names trade, city and promise (1440-first.jpg). The phone shows in the header and the hero, there is one filled primary action ("Price it"), the sample price and open status are on the proof line, and contrast is strong.
- **−0.5:** the composition is still "framed image left + text block right" (1440-first.jpg, 1024-first.jpg).
- **−0.5:** the band below peeks only as about 67px of empty cream with no content (1440-first.jpg). The "SHA" initials wordmark carries no brand at the most important moment.
- **+0.5:** the hero CTAs reach both 1024 and 1440 cleanly.
- **−0.5 at 390:** the plate pushes the CTAs below the fold (390-first.jpg). The fixed bar compensates.

## distinctiveness: 8.5
- **Earned:** the Ticket Clock Rail (ticked rule, mono timestamps) is in the hero, the story, the reviews and the footer stamp (1440-rm-full.jpg). The drawn condenser plates and the diagnosis ticket stub are unlike anything else in the niche. Siblings differ.
- **−1.0:** from services down (services list, pricing, area, form) the page drops the ticket language and becomes a generic paper/dark template (1440-rm-full.jpg crops at 50-90%). Pricing in particular should be the ticket line-items, and it is not.
- **+0.5:** the hero-to-story continuity of the plates is real.

## type: 8.5
- **Earned:** Manrope display at tight tracking, Outfit body, and tabular mono figures in prices (1440-rm-full.jpg pricing).
- **−0.5:** mono micro-labels in tracked caps stack up. In one view of 1440-first.jpg there are "HEATING & AIR · NEVADA", "NOW", "PLATE A-C · CONDENSER, WEST WALL" and a middle-dot meta line, which is the §5 tell. "INSTALLATIONS & UPGRADES" and the SAMPLE tags repeat it below.
- **−0.5:** the area heading is a 4-line, h1-weight list of six suburbs (1440-scroll-75.jpg). It is a wall of type, not a headline.

## layout: 8
- **Earned:** tones alternate, the break band is full-bleed, and the emergency block and install list split the service grid.
- **−0.5:** the install list leaves the left half of the section empty, about 750px tall (1440-scroll-50.jpg).
- **−0.5:** pricing is five identical full-width stacked cards, the uniform-repeat pattern (1440-rm-full.jpg, pricing).
- **−0.5:** the form section is one centred select in a large empty band, which makes for a weak close (1440-rm-full.jpg, "Get a number").
- **−0.5:** review cards run full width with text stopping at about 60%, leaving dead right space (1440-scroll-75.jpg).

## photo (drawn plates in place of stock): 8.5
- **Earned:** one illustrated palette across the hero plate, the story crops (fan guard → capacitor → drain line) and the night-valley break (1440-rm-full.jpg). The crops tell a sequence, and the plate labels are part of the system. The footer note honestly says "Drawn plates are sample illustrations".
- **−0.5:** the flat-vector plates are a bit clip-art at the 1440 story scale, with no texture or grain to match the ticket-paper idea (1440-rm-full.jpg, story).
- **−0.5:** the plates double-expose in mid-scroll (1440-scroll-25.jpg). That deduction is counted under motion, not here.

Nothing is broken or blank.

## copy: 9
- **Earned:** specific trade nouns ("superheat 12°", "swollen like a soda can", "mastic", "140° attic", "casitas"), checklist items a homeowner can act on, and a consistent "Price it". Every review, price and the rating carry a Sample label. The rating (4.9 · 431), prices and licence all match facts.json.
- **−0.5:** "Get a number / What's happening?" is a weak close next to the hero voice (1440-rm-full.jpg). The area h1 is a list, not a line.

## mobile: 8.5
- **Earned:** no overflow at 320/390 (render.json). The fixed Call + Price it bar works, the "Price it" buttons are large, and the checklist and ticket stub reflow well (390-rm-full.jpg crops).
- **−0.5:** at 390-first.jpg the plate costs about 330px, so the hero CTAs and proof line sit below the fold.
- **−0.5:** the rail ticks crowd the left gutter at 390 (390-first.jpg).

## a11y: 9
- **Earned:** reduced motion shows every section's content (1440-rm-full.jpg, 390-rm-full.jpg). Contrast is good on dark and paper, the form fields are labelled, and tap targets are at least 44px (390-rm-full.jpg).
- **−0.5:** the small grey footer meta and the "credited if you go ahead" price notes are borderline in size on dark (1440-rm-full.jpg pricing).
- **+0.5:** the noscript and reduced-motion paths are clean.

## motion: 8
- **Earned:** rail ticks, a scrubbed story with the plate crop per entry, and a split h1.
- **−1.0 (mustFix):** the story crossfade leaves "Reading & cause" body text at about 40% opacity under "Fixed", so both are unreadable. The two plates also double-expose (1440-scroll-25.jpg).
- **−0.5:** reveals gate almost every section: checklist, reviews, pricing and form are all blank in 1440-full.jpg / 390-full.jpg until revealed. That is the "fade-up on every section" tell.
- **+0.5:** the idea, a pinned plate that follows the ticket entry, is describable.

## wow: 8.5
- **Earned:** the Diagnosis Ticket stub (perforation, "KEEP THIS STUB", phone on the stub) is a real object a visitor would remember (1440-rm-full.jpg, "What's it doing?"). The printable "While you wait" list is useful.
- **−0.5:** the ticket only appears once. The thesis says the whole job runs on a ticket, but nothing prints the final ticket at pricing or at the form.

## polish: 8
- **Earned:** consistent 2px radius, a designed hours grid, sample licence, and a dispatch status in the footer.
- **−0.5:** the SAMPLE PRICING label is stretched into a full-width bordered bar in every price card (1440-rm-full.jpg pricing). It reads like a broken badge.
- **−0.5:** the ZIP card's bottom border is open/clipped (1440-scroll-75.jpg). The footer saltbush glyph sits on the divider rule, half-overlapping it (1440-rm-full.jpg footer).
- **−0.5:** the "SHA" initials logo has no mark (1440-first.jpg).

## Arithmetic
14×8.5 + 12×8.5 + 10×8.5 + 10×8 + 8×8.5 + 8×9 + 7×8.5 + 7×9 + 12×8 + 8×8.5 + 4×8
= 119 + 102 + 85 + 80 + 68 + 72 + 59.5 + 63 + 96 + 68 + 32 = **844.5 / 100 = 8.45**

This is the final round in fast mode. 8.45 is under the 8.8 delivery floor and mustFix is not empty, so the expected verdict is **NEEDS_HUMAN**.

## Must
1. **1440-scroll-25.jpg, process story (`#process`).** Problem: the crossfade between entries overlaps two text blocks and two plates, so both are illegible mid-scroll. Fix: hide the outgoing entry completely before the incoming one shows. Either swap with a clip wipe (`clip-path: inset(0 0 100% 0)` → `inset(0)`), or keep opacity but set `visibility:hidden` on the outgoing entry. Never let two entries both sit above opacity 0 at the same scroll position.

## Should
1. **1440-scroll-50.jpg, services install list.** The left half is empty for about 750px. Put the group heading and a short intro or a small drawn plate (thermostat or duct) in the left column, sticky. Alternatively, run the list full width in two columns.
2. **1440-rm-full.jpg, pricing.** Five identical full-width cards. Render pricing as one printed ticket: a single bordered sheet, one row per job (name · note · mono range right-aligned, dotted leaders), and one "Sample pricing" stamp in the sheet header instead of five bars.
3. **1440-rm-full.jpg, `.sample-tag` in price cards.** The tag stretches full width. Set it to `display:inline-block; width:auto` (or `justify-self:start`).
4. **1440-scroll-75.jpg, ZIP card.** The bottom border is missing. Give the card a complete border and a min-height that includes the answer line.
5. **1440-scroll-75.jpg, area h2.** Replace the 6-suburb heading with "Across the valley, Henderson to Boulder City" (areas from tokens). Leave the suburbs to the chips.
6. **1440-rm-full.jpg, "Get a number".** One select alone in an empty band. Show the full form (symptom, ZIP, phone, a "Sample form, nothing is sent" label) in a ticket-stub frame matching the diagnosis stub, with the phone as the alternative.
7. **1440-scroll-75.jpg, reviews.** Cards run full width with dead right space. Use a two-column grid at ≥900px, or put the timestamp/date in a left column so the text measure fills the card.
8. **1440-full.jpg, reveals.** Drop the fade reveal on the checklist, pricing and form. Keep motion for the rail and the story only.
9. **1440-first.jpg, header wordmark.** Set "Saltbush" in full (biz.short) with the saltbush glyph, not "SHA".
10. **1440-first.jpg, hero meta.** Cut one of the tracked mono labels ("HEATING & AIR · NEVADA" or the plate caption), so the hero has two mono lines at most.
11. **1440-rm-full.jpg, footer glyph.** Lift the saltbush stamp off the divider rule, or end the rail into it deliberately.

## Elevate
- **motion (12):** make the story one move a visitor would describe: "the ticket fills in as the plate zooms to the part". The pinned plate pans and scales continuously within one SVG (no crossfading between images), and each timestamp stamps onto a ticket card that accumulates rows (Arrived → Reading → Fixed) rather than replacing text. One continuous camera instead of slide swaps.
- **layout (10):** carry the ticket through the bottom half so the page reads as one job sheet from first call to close. Services become the ticket's "work codes", pricing becomes the line-items sheet, and the form becomes the tear-off stub that closes the ticket. Each band takes a different ticket part (header, ledger, stub) instead of stacked generic cards.
