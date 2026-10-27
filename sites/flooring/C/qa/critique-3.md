COPY: ok

# flooring-C: critique, round 3 (fast mode, final round)

This is the first round with real render evidence: rounds 1 and 2 were scored from the DOM alone. Scores below come from the screenshots.

## Five-second test

**1440 (`1440-first.jpg`):** "A Norfolk flooring company for old houses in flood country. They restore heart pine and check the crawlspace before they lay anything. I can press Price it or text a photo, and the phone number is in the header." The wood-grain HEART PINE mask, the house cross-section with its tide gauge, and the trust row peeking at the bottom give you all four answers in about three seconds.

**390 (`390-first.jpg`):** You get the same answer from the kicker, the h1 (2 lines) and both actions above the fold, with Call and Price it in the bottom bar. But the cross-section drawing is gone, and the trust band doesn't peek: there's about 110px of empty navy between the tide ruler and the mobile bar.

## First screen: 9.0
- Earned: in `1440-first.jpg` the wood-grain type mask on HEART PINE, "Kept above the tide line", one teal primary with an outlined secondary, the phone in the header, an Open now proof line tagged "Sample rating", the trust row peeking about 65px, and the signature (house section with storm-surge reading and gauge) right in the first screen.
- −0.5: the h1 names the material, not the trade or the city. "Norfolk floors" sits only in the mono kicker (`1440-first.jpg`).
- −0.5: in `390-first.jpg` the hero signature drawing is dropped rather than re-cut, and the next band doesn't peek (about 110px of empty navy above the mobile bar).
- +0.5 back for the 10-level traits that do show: h1 is 2 lines at 390, both actions above the fold, and the signature is visible at 1440. Net 9.0.

## Distinctiveness: 9.5
- Earned: the tide ruler with a live reading closes every section: hero, story steps (STEP 1 · STRIP · 1.2 FT), water damage (STORM SURGE · 2.4 FT), break (LOW WATER), services (FINISH · 3.8 FT), tool (TYPICAL FLOOR · 2.0 FT), reviews (SAMPLE READING · 4.9 / 5), stairs (LANDING · +0.0 FT), ZIP (GRADE 0.0), contact and footer (LOW TIDE · −1.0 FT). See `1440-full.jpg`, `1440-scroll-25.jpg`, `1440-scroll-75.jpg`. It works as the divider and as the tool output.
- Other non-template families: the CUPPING type mask with drawn cupped boards (`1440-full.jpg`, water section), the vertical gauge pinned beside the story, and the stair section drawing.
- Siblings: A (`A/1440-first.jpg`) is a cream serif triptych and B (`B/1440-first.jpg`) is a sans spec-card picker. C's navy/teal/amber with Oswald and a mono can't be swapped with either.
- Not a 10: "What Norfolk homeowners say" (`1440-scroll-75.jpg`) and the ZIP band are the two sections that would not name the business if you covered the ruler.

## Typography: 9.0
- Earned: Oswald display with wood-grain fill, real scale contrast (HEART PINE against the mono kicker in `1440-first.jpg`, the 1950 numeral in the tool), tabular mono for prices and hours (`1440-scroll-50.jpg`, contact in `1440-full.jpg`), en-dash ranges ($4–$7, 7:30 am – 5 pm), and a lead quote set in display (`1440-scroll-75.jpg`).
- −0.5: straight apostrophes in rendered copy: "NOR'EASTER" (water-damage h2), "WHAT'S UNDER YOUR CARPET?", "You'll" (`1440-full.jpg`, water and tool sections).
- Watch: the hero has 3+ tiny tracked mono caps labels in one view (kicker, HEART PINE · FLOOR 3.8 FT, CRAWLSPACE, MOISTURE READ, GRADE 0.0) in `1440-first.jpg`. They're borderline but tied to the gauge, so no deduction.

## Layout and rhythm: 9.0
- Earned (`1440-full.jpg`): 12 bands with clean tone alternation: deep, paper, deep, paper, deep break, paper, teal, paper, navy, paper, deep, paper. No two dark bands touch. There's a full-bleed perspective-floor break, an asymmetric services grid plus price panel, a dense service list, a quiet centred ZIP band and a two-column contact.
- −0.5: `1440-scroll-75.jpg` shows the lead review column leaving about 200px of dead paper under "Margaret S." while the right column runs on. The lead quote is shorter than its two-review neighbour.
- Not a 10: the three story steps repeat one shape (text left, frame right, ruler under), so that run reads flat for about 2.5 screens (`1440-full.jpg`).

## Photo / drawn treatments: 9.0
- Following the brief, the stock is a placeholder, so I judged the drawn system. Every frame shares one grade (amber wood, navy, teal water): story frames STRIP → FILL → FINISH read as a sequence (`1440-scroll-25.jpg`, `1440-full.jpg`), CUPPING is a wood type mask with a rising water fill, and the stair drawing and the wood/tile threshold close it out (`1440-full.jpg`, stairs section). The footer labels drawings as illustrations.
- Not 9.5: the break band's perspective floor is softer and blurrier than the crisp vector frames around it (`1440-full.jpg`, "Every floor here" band), so it reads as a second hand.

## Copy: 9.0
- Earned: trade nouns throughout (reclaimed slivers, satin polyurethane, vapor barrier, membrane, low-grit drum, treads), honest "Your number comes after we see the floor and read the crawlspace" (`1440-scroll-50.jpg`), and microcopy at doubt points ("Rather talk?" next to the phone, "Tick what you see. Each sign raises the water line."). Sample labels sit on rating, licence, pricing, reviews and guarantee. Every claim traces to facts.json. Zero em dashes.
- −0.5: the primary action has several names: "Price it", "Price your heart pine", "Price your stairs", "Pull up a corner, then price it" and "Book a damage check" (`1440-full.jpg`). The last one breaks the Price-it family.
- Not a 10: "What Norfolk homeowners say" is the one generic heading.

## Mobile: 8.5
- Earned: no overflow at 320 or 390 (render.json). The bottom bar carries Call and Price it. Services become a single list with a right-aligned Price it per row (`390-full.jpg`). The tool card stacks cleanly and the h1 is 2 lines.
- −0.5: the hero cross-section is removed on phone, not re-cut, and nothing peeks below the tide ruler (`390-first.jpg`).
- −0.5: the tool readout truncates to "TYPICAL FLOOR · 2.0 FT ABOVE G…" at 390 (`390-full.jpg`, house-age guide). The signature's own output is clipped.
- +0.5 back for phone-specific service-list density. Net 8.5.

## Accessibility: 9.0
- Earned: `1440-rm-full.jpg` and `390-rm-full.jpg` show every section, heading, frame and the CUPPING panel in place. Teal on navy and ink on paper read well, inputs are labelled, and the form uses visible radio cards with a step progress bar (`1440-full.jpg`, contact). render.json shows no errors.
- Not 9.5: the mono "Sample" pills in the hero and trust row are light grey on navy at about 11px (`1440-first.jpg`). They pass, but they're the weakest contrast on the page.

## Motion and interaction: 8.5
- Earned: split-char hero, clip reveals on frames, the pinned vertical gauge beside the three-step story (`1440-scroll-25.jpg`), the checklist that raises the water line in CUPPING, and the slider tool that redraws the floor swatch and the reading.
- −0.5: reveals fire late, so the visitor scrolls onto empty bands. In `1440-scroll-25.jpg` the water-damage h2, lead and CUPPING panel are blank while the band is already 285px into the viewport. In `1440-scroll-75.jpg` the stairs band is a 220px empty navy slab.
- Not 9: from the frames I can't see one idea a visitor would name in motion. The tide doesn't visibly rise as you scroll, and the gauge sits at the same reading across story frames.

## Wow moment: 9.5
- Earned: two connected moments in one language. The CUPPING damage checklist raises a drawn water line ("0 / 5 SIGNS · WATER LINE"), and the house-age guide (`1440-full.jpg`, teal band) outputs a drawn floor swatch, a named floor type, advice and a tide reading (TYPICAL FLOOR · 2.0 FT ABOVE GRADE), then hands off to pricing. A homeowner would slide it to their own year.
- Not a 10: the 390 readout is truncated (scored under mobile), and the result card has no keep/print form.

## Polish: 9.0
- Earned: one 2px radius family, one rule weight for the rulers, a designed footer close with LOW TIDE · −1.0 FT and the demo disclaimer (`1440-full.jpg`), and a consistent stroke on the phone and message icons.
- Not 9.5: the radio-card grid in contact leaves an orphan cell next to "Single board replacement" (`1440-full.jpg`, contact).

## Arithmetic
14×9 + 12×9.5 + 10×9 + 10×9 + 8×9 + 8×9 + 7×8.5 + 7×9 + 12×8.5 + 8×9.5 + 4×9
= 126 + 114 + 90 + 90 + 72 + 72 + 59.5 + 63 + 102 + 76 + 36 = 900.5 / 100 = **9.005 → 9.00** (score.mjs rounding)

Fast-mode pass line: weighted ≥ 9.0 and every category ≥ 8.5 (photo ≥ 8.0). Checks are clean and mustFix is empty, so expect **PASS**, though only by half a point of the total.

## Must
None. There are no DEMO-RULES breaches (every review, rating, price, licence and the guarantee is Sample-tagged and in facts.json), reduced-motion shots show all content, and there's no overflow.

## Should
1. **#house-age readout at 390** (`390-full.jpg`): "TYPICAL FLOOR · 2.0 FT ABOVE G…" is truncated. Let the reading wrap (`white-space: normal`, drop `text-overflow: ellipsis`) or shorten it below 640px to "FLOOR · 2.0 FT".
2. **Hero at 390** (`390-first.jpg`): about 110px of empty navy and no peek. Bring back a cropped, short version of the cross-section (just the joists, the waterline and the gauge, about 120px tall) under the actions, or reduce the hero min-height so the trust band shows 40–80px above the mobile bar.
3. **Reveal thresholds** (`1440-scroll-25.jpg`, `1440-scroll-75.jpg`): sections sit blank while 200–300px into view. Trigger at `top 85%` (or `rootMargin: 0px 0px -10% 0px`), and never gate a whole section's h2 behind one late trigger.
4. **Apostrophes** (`1440-full.jpg`): replace ' with ’ in NOR’EASTER, WHAT’S, You’ll and every other contraction in dist copy.
5. **Primary action name** (`1440-full.jpg`, #water-damage): change "Book a damage check" to "Price the damage", keeping the Price-it family.
6. **Reviews lead column** (`1440-scroll-75.jpg`): close the dead space under Margaret S. Put the "SAMPLE READING · 4.9 / 5" ruler in that column, or span the lead quote down two rows with the gauge under it.
7. **Contact radio grid** (`1440-full.jpg`, #contact): make the 9th option span both columns so the grid doesn't leave an orphan cell.

## Elevate (for the record. If score.mjs passes it, this is not required.)
- **Motion (8.5):** make the tide move. Tie the hero/story waterline to scroll progress so the teal water visibly rises up the vertical gauge through STRIP → FILL → FINISH and the reading ticks 1.2 → 2.5 → 3.8 FT. That gives the one-sentence motion idea: "the water rises as you scroll and the floor stays above it."
- **Mobile (8.5):** compose the phone hero as its own cut. Use a narrow vertical slice of the cross-section (joist, waterline, gauge) set beside the h1, so the signature reads in the first 390 screen and the trust band peeks above the bar.
