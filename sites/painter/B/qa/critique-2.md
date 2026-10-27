COPY: ok

# painter-B: critique, round 2 (fast mode, final round)

Round 1's scores-1.json was synthetic (written without a critic), so this is the first real reading. It is not a delta from 8.96.

**Five-second test.** 1440-first.jpg and 390-first.jpg: "A Raleigh house painter. Before they visit, they give me a printed ticket with the gallons, the sheen and a price range ($450–900 a bedroom, marked Sample). I press 'Price it' or call (919) 555-0120. I'd pick them because they show the numbers first." The test passes on both viewports.

## firstScreen: 9.0
- 1440-first.jpg: the h1 says "Raleigh painters who show the numbers first". That is 7 words on 3 lines, with trade, city and outcome. The ochre "Price it" is the primary action and the outlined call button is quieter. The phone appears in both the header and the hero. The proof line is open-now, area and 4.8 ★ with a Sample rating label. The signature (the tint ticket with the drawdown art) is the hero object.
- 390-first.jpg: the h1 is 3 lines, both actions sit above the fold, and the sticky Call / Price it bar is present.
- −0.5: 1440-first.jpg shows only the 10px four-colour stripe at y≈890. The facts band below does not peek.
- Small issue: the "HIDING POWER" label on the hero drawdown art (1440-first.jpg, bottom left of the swatch) is ochre on ochre and can't be read. It is decorative, but it reads as an error.

## distinctiveness: 8.5
- The ticket system does real work in at least 6 sections: hero ticket, DD-11…19 service caps, the scope ticket in the price tool, review tickets with a drawdown rating bar, the request ticket on the form, and the footer ticket (1440-full.jpg, 1440-scroll-75.jpg, d_end crop of 1440-full.jpg). The DD-nn numbering acts as a document index, not decoration.
- −0.5: compare painter/A/qa/screens/1440-first.jpg. The hero skeleton is the same: boxed mono kicker ("DD-00" / "00 COVER"), big h1 on the left, a filled "Price it" next to an outlined call button, a mono middle-dot meta line with a dashed Sample-rating box, and a paper document card on the right. Palette and face differ, but the composition could swap logos with A.
- −0.5: the colour-chip fan band (1440-scroll-25.jpg) is the niche's swatch-fan cliché. It is placed mid-page, but it is still the fan deck.

## type: 8.5
- Antonio condensed in caps carries the tint-label idea well. There is real scale contrast between the hero h1 and the mono ticket fields. The 2.2 GALLONS numeral (1440-full.jpg, gallon band) is a good display moment. Mono is declared as the accent.
- −0.5: hyphen ranges. "$450-$900" on the hero ticket (1440-first.jpg) and "8 am - 5:30 pm" in the footer hours (390-full.jpg, footer).
- −0.5: too many tracked mono caps labels in one view. 1440-first.jpg has TINT TICKET, NO. DD-00, JOB, WALLS, TRIM, GALLONS, PRIMER, DRY, RANGE plus the kicker, and 1440-scroll-75.jpg repeats the pattern on every review card. The micro-label tell is real here even though it is on-concept.

## layout: 8.5
- Twelve bands. The tones alternate well (deep, warm, paper, teal, warm, deep, paper, warm, mid, paper, deep, warm) and no two dark bands touch (1440-full.jpg). The chip fan is the full-bleed break. The prep section is asymmetric: copy on the left, layer stack on the right (1440-scroll-50.jpg). On mobile the pin becomes a stack (390-full.jpg).
- −0.5: the sheen band (d_mid crop of 1440-full.jpg, around y 6500–7300) puts a 420px swatch on the left and a short result on the right. Most of the right column under the intro paragraph is empty, so the section floats.
- −0.5: the ZIP band (1440-full.jpg, around y 9200) is a centred narrow column, with an h2, one input and chips, in a 1440 field. Nothing uses the width.
- Not deducted: services (3×3 cards) and reviews (3×2 cards) are both "heading then card grid", which is close to a repeated shape.

## photo: 8.5 (drawn artwork, judged on merit)
- No stock photos are used. Every visual is drawn in the palette: the drawdown card (1440-first.jpg), the chip fan (1440-scroll-25.jpg), the scope-ticket swatch, the prep layer stack with siding grain (1440-scroll-50.jpg) and the gallon cans. It is one consistent grade with no broken frames.
- −0.5 from a 9: the sheen visual (d_mid crop, sheen band) is a generic diagonal-gradient rectangle. It does not show sheen the way the drawdown card shows hiding power.

## copy: 9.0
- Trade-specific nouns: "feathered with 80-grit", "bonding or stain-blocking primer", "cut in, then two coats", "350 sq ft per gallon, minus doors and windows". Honest hedges: "Your exact number comes after we see the walls". Microcopy under the form button: "Nothing is sent from this sample page". "Price it" is used consistently. Every review, the rating, the prices and the licence are labelled Sample (1440-scroll-75.jpg, 390-full.jpg).
- Small issue: the footer line "All artwork on this page is drawn; no stock photos are used." is builder-speak a homeowner never needs (390-full.jpg, footer).

## mobile: 9.0
- 390-full.jpg: the page is re-composed for the phone, not squeezed. The ticket stacks under the CTAs, the prep pin becomes a static stack, the sheen pills wrap into two rows, the form becomes one column of 48px radio rows, and the sticky bar is present. render.json shows no overflow at 320 or 390.
- Small issue: in the footer ticket's hours grid (390-full.jpg, last screen), "8 am – 5:30 pm" wraps to 2 lines in the second column.

## a11y: 9.0
- 1440-rm-full.jpg and 390-rm-full.jpg show every section, the prep layers and every word. Skip link, `:focus-visible`, forced-colors, aria-live and print styles are present in dist/index.html. The JS sets aria-valuetext on the size slider and tab roles on the sheen picker. render.json lists no console errors.

## motion: 9.0
- Hooks beyond plain reveals: split headline, the signature draw (data-sw-signature ×6), the scrubbed prep layer build with a progress rule (1440-scroll-50.jpg, where the coats are still dashed outlines mid-scroll), the marquee with a paused state, counters and Lenis. The motion explains order (wash → patch → prime → coats) and is pinned only on desktop. Reduced motion is respected.
- Not higher: there is no single motion idea you'd remember on the scale of "the drawdown pulls across as you scroll". The hero ticket print-in is invisible in the stills.

## wow: 9.0
- The price tool's output is a scope ticket in the signature language with a "Print this ticket" button (1440-scroll-25.jpg). The gallon math produces 2.2 GALLONS plus can pictograms and "buy 3 gallons". The prep layer stack sits between them. A homeowner would keep this.
- Not 10: the two moments aren't linked. The gallon result doesn't write onto a ticket, and the drawdown bar doesn't run across the tool output.

## polish: 8.5
- SVG favicon, apple-touch, OG image, HousePainter JSON-LD with OpeningHoursSpecification, print stylesheet, forced colors and a designed footer ticket.
- −0.5: mixed radius. Pill `999px` sheen tabs (d_mid crop) sit next to the square ticket system everywhere else.

## Arithmetic
14×9 + 12×8.5 + 10×8.5 + 10×8.5 + 8×8.5 + 8×9 + 7×9 + 7×9 + 12×9 + 8×9 + 4×8.5
= 126 + 102 + 85 + 85 + 68 + 72 + 63 + 63 + 108 + 72 + 34 = 878 / 100 = **8.78**

## Must
None. No demo-rule breach, nothing missing in reduced motion, no phone breakage.

## Should
1. **#hero ticket, 1440-first.jpg**: "$450-$900" uses a hyphen. Change it to "$450–$900" (en dash, thin spaces optional). Do the same in the footer hours: "8 am – 5:30 pm".
2. **Hero, 1440-first.jpg**: the next band doesn't peek. Cut the hero min-height so 60–90px of the facts band (RATING / TODAY…) shows at 900px tall.
3. **Hero drawdown art**: the "HIDING POWER" label is illegible ochre on ochre. Either set it in ink on a paper chip or delete it.
4. **#sheen, 1440 (d_mid crop)**: the right column is empty. Put the result block (title, reason, SHINE meter) top-aligned beside the swatch, and make the swatch show sheen. For example, five strips from flat to gloss, with a highlight whose width follows the shine value.
5. **#area (ZIP), 1440-full.jpg**: it floats centred. Make it a two-column band: the h2 and ZIP field on the left, and on the right the town chips as a ticket listing ZIP prefixes.
6. **Sheen tabs**: the pills are `border-radius: 999px`. Use the system's `var(--radius)` so they match the square ticket language.
7. **Hero / painter-A overlap**: break the shared skeleton. For example, let the ticket overlap the h1 column, or set the h1 across the full width with the ticket under it, so it can't be mistaken for A's text-left / card-right cover.
8. **Footer, 390-full.jpg**: delete "All artwork on this page is drawn; no stock photos are used." On mobile, set the hours as one column (day | hours) so ranges don't wrap.
9. **Labels**: cut the mono caps labels in the hero ticket to the five that matter (JOB, WALLS, GALLONS, DRY, RANGE) and set the rest in Karla sentence case.

## Elevate
- **distinctiveness (8.5)**: make the drawdown itself the page's divider. Each band opens with a drawdown pull in that band's colour that wipes left to right on entry and stops at that section's "coverage", replacing the stock stripe and the chip fan. The site then reads as one test card being pulled down the page, and no sibling can share it.
- **type (8.5)**: let the type become the ticket. Set one band (the prep or gallon result) as a real tint formula, with Antonio numerals at display size in a strict tabular column against tiny Karla units. Cut the mono labels to one tier, so the condensed numbers carry the lab-print idea instead of a cloud of tracked captions.
