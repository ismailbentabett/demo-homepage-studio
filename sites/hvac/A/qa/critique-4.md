COPY: ok

# hvac-A: critique round 4 (fast mode, final round)

## Five-second test
- **1440-first.jpg:** "Saltbush, AC repair in Las Vegas. They write the readings and the price on a ticket before they touch anything. A diagnostic is $89-$160 (sample). I can call (702) 555-0104 or hit Price it."
- **390-first.jpg:** the same answer, and both CTAs plus the proof line now sit above the fold, with the plate below them and the fixed Call / Price it bar. This passes.

## What changed since round 3
The story crossfade double-exposure is gone. The job ticket now accumulates entries, and the plate pans to each part (1440-scroll-25.jpg). The wordmark reads "Saltbush" with its glyph. Pricing is one line-item sheet with a rotated stamp. The form is now a "Service stub" with a "Sample form · nothing is sent" label and a tear line. The area heading is two lines. The install list has a left column, reviews are a 2×2 grid, the ZIP card is closed, and the footer glyph sits clear of the rule.

## Section scroll (1440-rm-full.jpg, 25/50/75 frames)
Hero (dark split) → What's it doing? (diagnosis stub) → One call, one ticket, three stamps (pinned ticket + plate camera) → night-valley break → What we fix and install (R-/I- work codes) → While you wait (sage checklist) → reviews 2×2 → area + coverage check → line-item sheet → service stub form → footer. The signature carries through every band except the sage checklist.

Checks: static.json and render.json are clean (no overflow, no errors). The blank stretches in 1440-full.jpg are capture artefacts of pinning and reveals, and the rm-full captures show all content, so they are not scored as defects.

## firstScreen: 9
- **Earned:** trade, city and promise sit in the h1 (1440-first.jpg). The phone appears twice, there is one filled CTA, and the sample price and open status are visible. At 390 the CTAs are above the fold (390-first.jpg).
- **−0.5:** the composition is still the common framed-image-left / text-right split.

## distinctiveness: 9
- **Earned:** the ticket is now the page's spine. It appears as the diagnosis stub, the accumulating job ticket (1440-scroll-25.jpg), the work codes (1440-scroll-50.jpg), the line-item sheet with its stamp, and the tear-off service stub (1440-rm-full.jpg). Nothing in the niche, hvac-B included, looks like it.
- **−0.5:** the sage "While you wait" band is the only section with no ticket part.

## type: 9
- **Earned:** the area headline is fixed (1440-scroll-75.jpg). Prices use tabular mono and the display tracking is tight.
- **−0.5:** there are still a lot of tracked mono micro-labels: the hero eyebrow, the mono proof line, the card codes and every sample tag (1440-first.jpg, 1440-scroll-75.jpg).

## layout: 8.5
- **Earned:** the pinned story, the full-bleed break, the install list with its plate column, the review grid and the pricing sheet.
- **−0.5:** symptom, area, pricing and form all repeat "text left / card right" (1440-rm-full.jpg), so the lower half reads as one template.
- **−0.5:** repairs are four identical boxed cards, each with an identical outline "Price it" (1440-scroll-50.jpg).
- **−0.5:** the sage checklist is a narrow centred column floating in a full-width band (1440-rm-full.jpg).
- **+0.5:** the story composition.

## photo (drawn plates): 8.5
- **Earned:** the camera crop to the run capacitor has bracket corners and a caption (1440-scroll-25.jpg). One palette runs from the hero through the night-valley break. The plates are honestly labelled in the footer.
- **−0.5:** the flat vectors without texture read slightly clip-art at full width.
- Nothing is broken or blank.

## copy: 9.5
- **Earned:** "Send the stub. We call back with a number.", "The line items, written before any work starts" and "No part goes in until you have signed the number on the ticket" (1440-rm-full.jpg). Trade nouns are specific throughout. Everything sample-like is labelled. The prices, rating, reviews and areas all match facts.json, and nothing is invented.

## mobile: 9
- **Earned:** no overflow at any width (render.json). The CTAs are above the fold (390-first.jpg). The stub and ticket reflow cleanly (390-rm-full.jpg).
- **−0.5:** the rail ticks crowd the 16px gutter.

## a11y: 9
- **Earned:** reduced motion shows everything (1440-rm-full.jpg, 390-rm-full.jpg). Fields are labelled and tap targets are at least 44px.
- **−0.5:** the light-grey ticket footer mono ("51 MIN ON SITE", 1440-scroll-25.jpg) and the price notes are small and low-contrast.

## motion: 9
- **Earned:** stamps accumulate onto one ticket while the plate pans and zooms to the failed part (1440-scroll-25.jpg). A visitor can describe it, and the round-3 mustFix is resolved.
- **−0.5:** the other sections still use generic fade reveals (1440-full.jpg).

## wow: 9
- **Earned:** a ticket journey from first symptom to "closes the ticket" (1440-rm-full.jpg).
- **−0.5:** the story never ends on a finished, totalled ticket the visitor could keep.

## polish: 9
- **Earned:** every round-3 polish item is fixed (stamp, glyph, ZIP card, wordmark).
- **−0.5:** the story rail sits about 30px off the ticket edge and looks detached (1440-scroll-25.jpg).

## Arithmetic
14×9 + 12×9 + 10×9 + 10×8.5 + 8×8.5 + 8×9.5 + 7×9 + 7×9 + 12×9 + 8×9 + 4×9
= 126 + 108 + 90 + 85 + 68 + 76 + 63 + 63 + 108 + 72 + 36 = **895 / 100 = 8.95**

Layout (8.5) is under the strict 9.0 floor but meets the fast-mode 8.5 floor; at the round cap, 8.95 >= 8.8 with no blockers and no mustFix.

## Must
None.

## Should
1. **#area / pricing / form / symptom bands (1440-rm-full.jpg).** Four bands share one split. Change at least two of them: run pricing full-bleed with the h2 set inside the sheet header, and make the area band a full-width route strip with the ZIP field inline.
2. **Repairs row (1440-scroll-50.jpg).** Four identical boxed cards. Make it one ruled ledger (R-01 · name · blurb · price-range link per row), matching the install list's row style.
3. **"While you wait" (sage band).** Set the list as a printed checklist card with a ticket header ("WHILE YOU WAIT · 6 CHECKS") and place it off-centre beside the heading, so the band is not a narrow centred column.
4. **Story rail (1440-scroll-25.jpg).** Bind the rail to the ticket's left edge (0 gap) or drop it in that section.
5. **Ticket footer mono and price notes.** Raise them to ≥4.5:1 (for example #5f5a52 on paper) and ≥13px.
6. **Hero mono.** Drop either the "NOW · Heating & Air" eyebrow or the mono styling of the proof line, so the hero carries at most one mono line.

## Elevate
- **layout:** break the repeated text-left/card-right rhythm. Give each lower band its own geometry tied to a ticket part: a route strip for area, a full-bleed ledger for pricing, a ruled work-code ledger for repairs.
- **photo:** give the drawn plates a printed material that matches the ticket (paper grain, slight two-ink misregistration), so they read as diagrams printed on the job sheet, not flat vector clip-art.
