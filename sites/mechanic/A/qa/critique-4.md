COPY: ok

# mechanic-A: critique, round 4 (final round)

Evidence: render.json 2026-10-27T11:26 (10 screens, no overflow at 320 or 390, no errors) and static.json 11:24 (clean). The drawn "Fig. N" figures are still the media treatment, and I judged them on their merit.

Fixed since round 3, so not listed again: the h1 is now 8 words; the hours table is gone from the ZIP band (the footer is the only one now); the price-sheet rows are padded; "Price it" sits on the blurb column; the price ranges have spaces around the dash ("$95 – $160"); the dead white under the featured review is gone; the hero secondary is now "Book a drop-off". The round-3 layout move was also done: the 04 gate is now a full-bleed hatched perforation across the page (1440-scroll-25.jpg).

## Five-second test
- **1440 (1440-first.jpg):** "Lansing auto repair that touches nothing until I say yes. Line Item. Closed, opens 7:30, 4.8 from 341 reviews (sample). Call (517) 555-0185 or book a drop-off." The RO card (01 DOING to 04 NEEDED, plus Fig. 1 of the car on the lift) explains the process at a glance. The orange gate band peeks about 124px.
- **390 (390-first.jpg):** the h1 runs 3 lines. The lead, the status, the rating, the orange Call and the outline "Book a drop-off" are all above the fold, and the RO card starts under them.

## firstScreen: 9
Earned (1440-first.jpg, 390-first.jpg): an 8-word h1 with trade, city and outcome; the proof line sits under the h1 (status plus Sample-labelled rating); one primary and one quieter secondary; the phone shows in the header and the hero; the signature card does the explaining; the gate band peeks.
- 1024-first.jpg: the RO card is squeezed by the Fig. 1 panel. The labels wrap to 3-4 lines ("Your yes, / before / any / repair"), the status chips sit at different x positions per row (02 vs 03 vs 04), and the 04 hatched row stops at the figure. The first impression at tablet and small-laptop widths is cramped, so no 9.5.

## distinctiveness: 9.5
Earned (1440-full.jpg, 1440-scroll-25.jpg, 1440-scroll-50.jpg, 1440-scroll-75.jpg): the repair-order line is the page's grammar everywhere it matters. It runs through the hero RO card, the sticky "Your order, Line 04 of 06", the full-bleed 04 YOUR YES perforation, the decoder output, "05 Opened by your yes" services, the brake read-out, "What people say after line 06" and the footer "ALL LINES DONE / Keys at the counter." It differs completely from mechanic B and C. The generic blueprint-grid look of the figures keeps it off a 10.

## type: 9
Earned (1440-first.jpg, 1440-scroll-75.jpg, 1440-scroll-50.jpg): Arvo 700 with real scale contrast; the featured review is set in Arvo at lead size; curly quotes; the en-dash ranges are now spaced and read as ranges in DM Mono.
- 1440-scroll-25.jpg and 1440-scroll-50.jpg: the section intros ("Every car gets the same repair order…", "Each job starts as a line…") are still set a lighter grey than the body copy, so there are two body greys on paper.
- 390-full.jpg (reviews): at 390 the featured review loses its Arvo setting and matches the other two cards, so the type moment disappears on the phone.

## layout: 9
Earned (1440-full.jpg, 1440-scroll-25.jpg): ten one-job sections in a clean rhythm (paper, orange, paper, dark, paper, dark, paper, dark, paper, dark), and no dark bands touch. The gate now breaks the 1200px container as a full-bleed hatched perforation with the sticky order crossing it. That is the deliberate grid break the page lacked. The ZIP band does one job now.
- 1440-full.jpg: below the gate the story returns to the same staggered two-column zig-zag, and services, brake and reviews are regular contained stripes. One hinge is not yet a composed page, so no 9.5.

## photo: 8.5
Judged as drawn figures. Earned (1440-full.jpg, 1440-scroll-25.jpg, 1440-scroll-75.jpg, 390-full.jpg): seven figures in one hand (white line on a graphite grid, orange only on the part that matters). The captions do work ("Fig. 7 … New pads are about 12 mm of friction."), Fig. 4 is now a drawn phone text with the pad photo frame, and the credit is honest ("Drawings made for this sample."). Nothing is broken or blank, and there are no duplicates.
- 1440-full.jpg: there is still no real shop, lift or worn part anywhere. Placeholders are expected for this niche, so this is not a mustFix, but it is the ceiling.

## copy: 9
Earned (1440-full.jpg, 1440-scroll-50.jpg, 1440-scroll-75.jpg): plain trade nouns; doubt microcopy at the gate, the form and the decoder ("Usually yes, for now. Book a diagnosis this week."); every price, rating, review and the license is Sample-labelled; the reviews match facts.json; no em dashes; the action names are now consistent ("Book drop-off" / "Book a drop-off").
- 390-full.jpg (ZIP band, form, hero): "Closed · opens 7:30 am" appears three times on the phone (hero, area, form). The status repeats without adding anything.

## mobile: 9
Earned (390-first.jpg, 390-full.jpg): both actions sit above the fold, and the page is composed rather than collapsed. The story stacks with no pin, the brake tool puts the drawing first and keeps the slider full width, the form is one column with 16px+ fields, and the footer order close reads well. render.json shows no overflow at 320 or 390.
- 390-full.jpg (reviews, Omar K. card): the meta line wraps so that "·" starts a line on its own before "Check engine light diagnosis". It is a small orphaned separator.

## a11y: 9
Earned (1440-rm-full.jpg, 390-full.jpg): every section, figure and line is present in reduced motion. There is one h1 with ordered h2s, the form fields are labelled ("Year, make and model", "What do you think it needs? (optional)"), and the chips carry text, not just colour.
- 1440-scroll-25.jpg: the light-grey section intros on #F5F3EE are still the lowest-contrast body text on the page, near the 4.5:1 line.

## motion: 9
Earned (1440-scroll-25.jpg vs 1440-full.jpg): the sticky order advances to Line 04 of 06 with DONE chips and a progress rule that crosses the gate. The gate now says "Lines 05 and 06 open below this line." The brake read-out re-measures from the slider (1440-scroll-75.jpg), the decoder re-writes, and reduced motion is respected (1440-rm-full.jpg).
- 1440-scroll-25.jpg: the progress rule only reaches about 40% across the gate, and there is no visible beat where lines 05 and 06 flip from WAITING as the story passes the perforation. The copy promises the opening but the frames don't show it.

## wow: 9
Earned (1440-full.jpg, 390-full.jpg): the order ticking as you read, the full-bleed gate, the tools answering in ro-lines, and the footer "ALL LINES DONE · Keys at the counter" payoff. A homeowner would use the decoder and the brake slider.
- There is still nothing to keep (no "text me this line" or saved order).

## polish: 9
Earned (1440-scroll-50.jpg, 1440-scroll-75.jpg, 390-full.jpg): the price sheet is padded and aligned, "Price it" sits on its column, the review card heights follow their content, one radius throughout, and the footer is a designed close. The favicon, theme-color, OG and JSON-LD are present in dist.
- The 1024 RO-card crunch is counted under firstScreen, not again here.

## Arithmetic
14×9 + 12×9.5 + 10×9 + 10×9 + 8×8.5 + 8×9 + 7×9 + 7×9 + 12×9 + 8×9 + 4×9
= 126 + 114 + 90 + 90 + 68 + 72 + 63 + 63 + 108 + 72 + 36
= 902 / 100 = **9.02**

Expected in fast mode: PASS (weighted ≥ 9.0, every category ≥ 8.5, photo ≥ 8.0, checks clean, mustFix empty). score.mjs decides.

## Must
None. There is no DEMO-RULES breach (everything is Sample-labelled, the reviews match facts.json, no faces, the form says nothing is booked), nothing is lost in reduced motion, and there is no overflow.

## Should
1. **where:** `.hero` RO card at 1024 (1024-first.jpg). **problem:** the figure panel squeezes the line labels to 3-4 lines, and the chips misalign. **fix:** between 900 and 1180px, move Fig. 1 under the line list (as at 390) or give the card 2/3 of the hero row; keep the chip column a fixed width (≈96px) so every chip starts at the same x.
2. **where:** the section intros in `#visit` and `#svc` (1440-scroll-25.jpg, 1440-scroll-50.jpg). **problem:** a lighter grey than the body, near 4.5:1. **fix:** use the body ink at ~80% (≥ 5.5:1 on #F5F3EE).
3. **where:** the reviews meta line at 390 (390-full.jpg, Omar K.). **problem:** "·" orphaned at the start of a line. **fix:** wrap the separator and the service name in one `white-space: nowrap` span, or hide the separator below 480px.
4. **where:** "Closed · opens 7:30 am" in `#area` and `#book` (390-full.jpg). **problem:** the same status three times. **fix:** keep it in the hero and the form, and drop it from the ZIP band.
5. **where:** the featured review at 390 (390-full.jpg). **problem:** it loses its Arvo lead setting. **fix:** keep the Arvo face at ~20px for the first card on the phone.

## Elevate
PASS expected, so no elevate moves are required. For the record, the two weakest are photo (a "photo we text you" frame holding a real part crop once library frames exist) and type (carry the Arvo review moment to the phone and settle on one body grey).
