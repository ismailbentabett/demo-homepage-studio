COPY: ok

# painter-A: critique, round 6 (fast mode, final round)

**Five-second test (1440-first.jpg, 390-first.jpg):** "It's a house painter in Richmond, Cutline. They prep before they paint and give you a written day-by-day coat schedule. I can press Price it or call (804) 555-0119. Why them: the drawing shows the house as found next to the house after coat two, so I can see what the prep buys me."

Round 5's mustFix is fixed. 390-full.jpg and 1440-full.jpg now show the form as a day-card stepper with one styled 48px "Next card" button, no Back on step 1, and no default browser button. Last round's mobile elevate move is delivered too: the day cards come from the coat sheet and a film-build progress bar adds one layer per card.

## firstScreen: 9
- **What earned it:** an 8-word h1 with trade, city and outcome. Price it is the primary action with a quieter call button beside it. The phone is in the header, the rating carries a Sample tag, the drawing is concept-specific, and the next band peeks in (1440-first.jpg). At 390 (390-first.jpg) the h1 takes 4 lines, both actions sit above the fold and the sticky bar shows.
- **Deduction (-0.5):** the proof line under the CTAs is a long middle-dot meta string (1440-first.jpg).

## distinctiveness: 9
- **What earned it:** the sheet numbering runs 00 to 09 CALL, then 10 WALK-THROUGH · DONE in the footer (1440-full.jpg, 390-full.jpg). The cut-line elevation, the cross-sections, the street and the form day cards all speak one "painter's coat schedule" language. Sibling C shares nothing.
- **Held:** the services index (1440-scroll-50.jpg) and the reviews grid (1440-scroll-75.jpg) carry no sheet artefact or drawing.

## type: 9
- **What earned it:** Sora display against DM Mono, with real scale contrast. En-dash price ranges, tabular figures and curly quotes (1440-scroll-75.jpg).
- **Deduction (-0.5):** five or more tracked mono caps labels share one view in 1440-first.jpg.

## layout: 9
- **What earned it:** dark bands never touch, the street break is full-bleed, splits are asymmetric (1440-full.jpg). The guarantee card now closes on a CTA, so the dead column is gone (1440-scroll-75.jpg).
- **Remaining:** in 1440-scroll-50.jpg the left column under "What we paint" goes empty for ~330px beside the 9-row index.

## photo: 9
- The drawn treatments are judged on merit, since the stock is a placeholder. The as-found/after elevation is honestly captioned "Drawing, not a photo" (1440-first.jpg). The wash/scrape/prime cross-sections have legends (1440-scroll-25.jpg), and the street stands in as the result (1440-full.jpg). Nothing is broken or blank.

## copy: 9
- **What earned it:** trade nouns throughout, a consistent "Price it" verb, honest form microcopy, and Sample labels on every proof item (1440-full.jpg). Both round 5 deductions, the tricolon and the step-count mismatch, are gone. Every claim matches facts.json.
- **Held:** the pre-1978 idea is said three times: in the services, the red band and a review (1440-full.jpg).

## mobile: 9
- The form is fixed (390-full.jpg bottom). The schedule becomes a vertical day list, the tap targets are 48px or taller, and the sticky bar is present. render.json shows no overflow at 320 or 390.

## a11y: 9
- Nothing goes missing with reduced motion (1440-rm-full.jpg, 390-rm-full.jpg). The page has a skip link, focus-visible styles, forced-colors support, a labelled select and a labelled progress bar. There is one h1 and no heading levels are skipped. Both checks are clean.

## motion: 9
- Drawings clip in, the h1 splits into lines, the film stripe builds across 1440-scroll-25/50/75.jpg, a progress rule runs along the top, and form cards transition in. Held at 9 because stills can't confirm one big describable scroll moment beyond the stripe.

## wow: 9.5
- The coat-schedule tool outputs a taped sheet of day cards with hatched weekends, a working-day count, and Print it / Price this schedule buttons (1440-full.jpg, 390-full.jpg). The form now reuses that language. Not 10: the page stripe and the sheet's film bar don't visibly answer each other.

## polish: 9
- Favicon, apple-touch icon, og image, JSON-LD, print CSS and forced-colors support are all in place. The round 5 pill chips are now 2px stamped rectangles (1440-scroll-75.jpg). Minor: dashed Sample tags sit beside solid section stamps.

## Arithmetic
14×9 + 12×9 + 10×9 + 10×9 + 8×9 + 8×9 + 7×9 + 7×9 + 12×9 + 8×9.5 + 4×9
= 126 + 108 + 90 + 90 + 72 + 72 + 63 + 63 + 108 + 76 + 36 = 904 / 100 = **9.04**

## Must
None.

## Should
1. **#services (1440-scroll-50.jpg):** the left column goes empty for ~330px under the call button. Fix: make the left column `position: sticky; top: 96px`, or put a small cross-section thumbnail of the hovered or active service under the button.
2. **Hero proof line (1440-first.jpg):** "Open now · until 5 pm · Richmond + Henrico, Glen Allen, Midlothian · 4.9 ★" is a middle-dot meta string. Fix: split it into two lines, open-now status on one and "4.9 from 112 reviews [Sample]" on the other, and drop the area list (the Area section covers it).
3. **1440-first.jpg labels:** five tracked mono caps labels show in one view. Fix: set "RICHMOND · PAINTING" in sentence-case mono at normal tracking, keeping caps only for the 00 COVER stamp and CUT LINE.
4. **Pre-1978 repetition (1440-full.jpg):** the idea appears in the services, the red band and a review. Fix: shorten the "Older-home exterior repaints" row blurb to "Plastic, wet scraping and daily cleanup around kids and gardens" and let the red band own the 1978 line.
5. **Tag border styles (1440-scroll-75.jpg):** dashed Sample tags sit beside solid stamps. Fix: keep dashed for Sample only (it means "illustrative") and state that in the footer's Sample note, or switch both to solid with a 1px inner dash.

## Elevate
No elevate needed: score.mjs decides the verdict, and this round meets the fast pass line. If a strict pass is wanted later, the two weakest categories by weight are motion and distinctiveness (both 9, weight 12). Motion: make the page's film stripe and the schedule sheet's bar a single scrubbed element, so the coat layer you watch building down the page is the one that lands on the sheet. Distinctiveness: give the services index and reviews their own sheet artefact, such as a per-row cross-section swatch or a "signed off" day stamp per review, so no section sits outside the drawing set.
