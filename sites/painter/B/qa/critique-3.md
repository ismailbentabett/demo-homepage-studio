COPY: ok

# painter-B: critique, round 3 (fast mode, final round)

**Five-second test.** 1440-first.jpg and 390-first.jpg: "Raleigh house painters. Before they come, they give me a ticket with gallons, sheen and a price range ($450 – $900 a room, marked Sample). I press 'Price it' or call (919) 555-0120. I'd pick them because they show the numbers first." The test passes on both viewports.

**What changed since round 2.** The hero is recomposed: the h1 runs full width, the ticket sits below it on the left and the actions on the right, so it no longer mirrors painter-A's cover. The chip fan is replaced by a drawdown test-card band. Every band now ends in a drawdown divider with a roller tab. The sheen visual now shows real sheen steps. The sheen tabs are square. The ZIP band has two columns with a route ticket. The en dashes are fixed. The builder-speak footer line is gone. None of these items is listed again below.

## firstScreen: 9.5
- 1440-first.jpg: the h1 "Raleigh painters who show the numbers first" fills the width over 2 lines, with an ochre second line. The ticket carries real fields (12 × 12 bedroom, eggshell 2 coats, 2.0 gallons, $450 – $900) and is labelled Sample pricing. The ochre "Price it" and the outlined call button sit side by side. The facts band (rating, open now, areas, phone) now peeks at the fold.
- 390-first.jpg: the h1 takes 4 lines and both actions sit above the fold. The ticket starts at the fold, and the sticky Call / Price it bar is present.
- Not 10: the header "Price it" is teal while the hero "Price it" is ochre (1440-first.jpg). The same action has two colours.

## distinctiveness: 9.0
- The ticket system now runs through the whole page: hero, DD-nn service caps, scope ticket, formula ticket, route ticket, request ticket, footer ticket (1440-rm-full.jpg). The drawdown-divider-plus-roller between every band (1440-scroll-25.jpg, 1440-scroll-75.jpg) is an ownable system. The hero no longer shares painter-A's skeleton.
- −0.5 from 9.5: services (3×3 cards) and reviews (3×2 cards) are both "heading over a card grid" (1440-rm-full.jpg, y≈1000 and y≈5400). That is the most template-like stretch of the page.

## type: 9.0
- Antonio condensed carries the label idea. The gallon formula (381 / × 2 / ÷ 350 / = 2.2) is a real tabular display moment (1440-rm-full.jpg, gallon band). The en dashes are fixed in the hero ticket and the footer hours.
- −0.5: there are still many tracked mono caps labels. The hero ticket has JOB, WALLS, GALLONS, DRY and RANGE (1440-first.jpg), and the footer has CALL, AREA, LICENCE #, EMAIL, HOURS and MON–SUN (1440-rm-full.jpg footer). It is on concept but dense.

## layout: 9.0
- Tones alternate well and the dividers stitch the bands together. The ZIP band now uses the width. The sheen band fills its right column (1440-rm-full.jpg).
- −0.5: in the gallon band (1440-rm-full.jpg, y≈6600), the left column is an h2 and 2 lines with about 250px of dead teal below them, next to a tall formula ticket. The test-card band (1440-rm-full.jpg, y≈2350) is a label on a large flat striped panel when it is not scrolled. In 1440-scroll-25.jpg it reads well mid-pull, but at rest it is a lot of empty beige.

## photo: 9.0 (drawn artwork, judged on merit)
- All visuals are drawn and consistent: the drawdown swatch, the siding layer stack with grain (1440-scroll-50.jpg), the sheen steps from Flat to Semi-gloss (now a real demonstration, 1440-rm-full.jpg sheen band) and the can pictograms.
- Not higher: the hero ticket's swatch is a flat ochre block with faint stripes (1440-first.jpg). It is the weakest drawing on the most-seen screen.

## copy: 9.0
- Trade nouns: 80-grit, stain-blocking primer, cut in, 350 sq ft per gallon. Honest hedges: "Your exact number comes after we see the walls" (1440-scroll-25.jpg). "The same math goes on your ticket" links the tools together. The reviews are specific, and each review, the rating, the prices and the licence are labelled Sample (1440-scroll-75.jpg).
- Not higher: the review h2 reuses a review quote as the section headline (1440-rm-full.jpg, DD-05), which slightly overstates sample content.

## mobile: 9.0
- 390-full.jpg: the page is re-composed for the phone. Tickets stack, the prep pin becomes a stack, the sheen tabs wrap, the form is one column, and the sticky bar is present. render.json shows no overflow at 320 or 390.

## a11y: 9.0
- 1440-rm-full.jpg and 390-rm-full.jpg show every section, the prep layers and all copy. render.json lists no console errors, and static.json is clean. The form says "Nothing is sent from this sample page" (1440-rm-full.jpg, DD-08).

## motion: 9.0
- The drawdown pull with a roller tab at the band edges and the test card mid-pull (1440-scroll-25.jpg), plus the scrubbed prep layer build with its progress rule (1440-scroll-50.jpg, where the coats are still dashed). This is now one idea repeated across the page, not a pile of reveals.
- Not higher: the hero has no visible motion moment of its own in the stills (1440-first.jpg). The signature first plays below the fold.

## wow: 9.0
- The scope ticket from the price tool (1440-scroll-25.jpg) and the gallon formula ticket with "Buy 3 gallons" and "Price this room" (1440-rm-full.jpg) are things a homeowner would keep. The contractor would want the ticket.
- Not 10: the gallon result still doesn't print onto the scope ticket, so the two tools sit side by side and aren't chained.

## polish: 9.0
- The sheen tabs are square now. Favicon, OG, JSON-LD, print and forced-colors are in place. The footer ticket is designed (1440-rm-full.jpg).
- −0.5 from 9.5: the header "Price it" is teal and the hero "Price it" is ochre (1440-first.jpg).

## Arithmetic
14×9.5 + 12×9 + 10×9 + 10×9 + 8×9 + 8×9 + 7×9 + 7×9 + 12×9 + 8×9 + 4×9
= 133 + 108 + 90 + 90 + 72 + 72 + 63 + 63 + 108 + 72 + 36 = 907 / 100 = **9.07**

## Must
- None. There are no DEMO-RULES breaches and no visible a11y failures, and static.json and render.json are clean.

## Should
1. **Header CTA colour** (`header .btn` / nav "Price it", 1440-first.jpg): use the hero's ochre fill and ink text so the primary action has one colour sitewide.
2. **Gallon band left column** (#gallons, 1440-rm-full.jpg y≈6600): move the 6 inputs under the intro copy in the left column and give the formula ticket the right half, or align the column bottoms. Remove the ~250px of dead teal.
3. **Test card at rest** (test-card band, 1440-rm-full.jpg y≈2350): in the static/reduced-motion state, show it fully painted (two colours plus the label), not a bare striped panel.
4. **Reviews vs services grid** (#reviews): break the 3×2 grid. For example, one large feature review spanning 2 columns with 4 smaller ones, so it doesn't echo the 3×3 services grid.
5. **Hero swatch** (hero ticket, 1440-first.jpg): give the drawdown a visible two-coat edge (coat 1 lighter, coat 2 full) so the drawing explains hiding power at a glance.
6. **Review h2** (DD-05): mark it as a Sample quote inline or replace it with a process line: "Prices that land inside the range on your ticket."

## Elevate
- **type**: let the numbers become the type system. Set every ticket's key figure (hero 2.0 gal, the price range, gallon 2.2, ZIP count) in the same Antonio tabular display tier with Karla units, and drop the mono caps labels to one small tier used only for field names on tickets. The page should then read as a printed lab sheet, not a field of micro-labels.
- **layout**: chain the tools into one document. The gallon formula ticket writes its result onto the scope ticket and then onto the request ticket, so each band visibly hands its ticket down the page. That gives the grid sections a narrative order instead of repeating card-grid shapes.
