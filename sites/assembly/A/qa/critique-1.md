COPY: needs copy-chief

# assembly-A · critique round 1 (fast mode)

**Five seconds (1440-first.jpg, 390-first.jpg):** "Someone in Arlington who builds flat-pack furniture: beds, dressers, wardrobes, TVs, and anchors them. I call (703) 555-0104 or price my list. Why them: they count the parts, strap it to the wall and take the boxes." Answerable, but trade + city live in the mono eyebrow, not the h1.

## First screen: 8.5
Earned: 1440-first.jpg has a strong composition: the h1 "Six boxes in the hall." with the 01/02/03 step rail, the exploded dresser as FIG. 1 with Bag A pinned over it. The signature shows on the first screen. One red primary (Call) and a quieter outline secondary. The phone shows in the header and the button. The proof line carries a SAMPLE FIGURES tag. 390-first.jpg: the h1 runs 2 lines, both actions sit above the fold, and the sticky call bar shows.
Deductions: the h1 names neither the trade nor the place; only the 12px eyebrow does (−0.5). In 1440-first.jpg the next band does not peek: about 110px of empty paper sits below the proof line and nothing from the steps section shows (−0.5). Two of the steps' signature advantages are offset by a strong concept-only composition (+0.5).

## Distinctiveness: 8.5
Earned: in 1440-rm-full.jpg the signature (exploded drawing + zip-bag label) appears in the hero, all six steps, the reviews (BAG R1-R6 tags, 1440-scroll-75.jpg) and the footer "The empty hallway" with the assembled dresser. The sibling first screens (assembly-B dark/yellow packing list, assembly-C rust/floor plan) share no face, palette or hero family.
Deductions: AI-slop tells: a mono tracked-caps eyebrow above nearly every h2 ("— PARTS LIST · PRICES", "— WHERE WE COME", 1440-scroll-50.jpg and 1440-scroll-75.jpg), middle-dot meta strings in the hero proof line and the bag headers (−1.0). The services band (1440-scroll-50.jpg) is a 3×3 grid of icon + title + "Price it →" cells, a template parts tray with no bag or drawing (−0.5). The signature organises information in the steps, which makes up for it (+0.5).

## Typography: 8.5
Earned: Familjen Grotesk display, tight and confident (1440-first.jpg). Public Sans body at full ink and about 18px. JetBrains Mono as the declared accent, tabular in the price table (1440-scroll-50.jpg). Good scale contrast between the h1 and the step lines.
Deductions: 3+ tiny tracked mono caps in one view in 1440-scroll-75.jpg (BAG R3 · WARDROBES AND CLOSET SYSTEMS, SAMPLE REVIEW ×3, the eyebrow) (−0.5). "BAG R6 · TAKING FURNITURE APART FOR A MOVE" wraps to a widow "MOVE" (1440-scroll-75.jpg). The steps' scale contrast offsets this (+0.5 net to 8.5).

## Layout and rhythm: 8.5
Earned: in 1440-rm-full.jpg the six steps zig-zag the margin rail left and right on a ruled manual grid. Tones run cream steps → deep tools → paper services → zinc prices → paper tools → cream reviews → tomato area → paper FAQ/form → deep footer. No two dark bands touch.
Deductions: the reviews masonry in 1440-scroll-75.jpg leaves a ~300px empty hole under R1 (left/centre column) and floats the cards at uneven heights (−0.5). Services, tools and FAQ are three "heading above or left, grid/list right" bands (1440-rm-full.jpg) (−0.5). The steps' rail and drawing scale give the scroll a real shape (+0.5).

## Photo and video: 7.0
The page has no photograph and no video (0 `<img>`, `<picture>` or `<video>` in dist/index.html; 1440-rm-full.jpg and 390-full.jpg are drawings top to bottom). The concept promised hero family 12 with "the photo as a framed plate, FIG. 1". The hero plate is a drawing instead. The line drawings are excellent and consistent (one stroke, one fill, one grade), which keeps this above the floor. But nothing on the page shows a real room, a real pair of hands or a real finished piece, which a homeowner uses to trust a service they let into their home. A hero-family promise was not delivered (−1.0).

## Copy: 8.5
Earned: concrete trade nouns: "Every hinge has three screws: in and out, up and down, side to side" and "Not plaster, not drywall alone: the stud" (1440-scroll-25.jpg). Bag lines like "Parts · counted" and "Boxes out · all". No em dashes. Reviews carry item and town, all SAMPLE REVIEW (1440-scroll-75.jpg).
Deductions: a tricolon step line, "Built, anchored, boxes gone." (1440-first.jpg) (−0.5). The primary action has two names: "Price my list" in the header and hero, "Price it →" on all nine service cells (1440-scroll-50.jpg) (−0.5). The specificity earns a step back (+0.5).

## Mobile: 8.5
Earned: 390-first.jpg shows an h1 of 2 lines, full-width call, the sticky two-button bar and a 48px menu button. render.json shows no overflow at 320 or 390. 390-full.jpg stacks the steps with the drawing above the text. Breakpoints at 359/429/479px exist for small phones.
Deductions: 390-full.jpg collapses the desktop layout rather than re-cutting it. The hero drawing falls below both buttons and the bag, so the signature misses the phone's first screen (390-first.jpg shows only the frame corner).

## Accessibility: 8.5
Earned: 1440-rm-full.jpg shows every section with its content: steps, tools icons, services, prices, planner, reviews, area, FAQ, form and footer. There is one h1 and the heading order is sensible. A forced-colors media query and a print stylesheet are present.
Deductions: focus styling can't be verified from the stills. In the motion-on capture 1440-full.jpg the tools, services and reviews bands are empty until they are scrolled into view, so content depends on the reveal firing. It is not a mustFix because reduced motion is clean, but it is fragile.

## Motion: 8.5
Earned: hooks are the hero dresser closing, the step ticks (the 02/03 ticks in 1440-first.jpg, the 04 tick in 1440-scroll-25.jpg), per-step drawings, data-reveal plus data-reveal-stagger and data-sw-signature. The motion explains assembly order.
Deductions: 1440-full.jpg shows whole bands (tools, services, reviews) blank under the motion-on capture. That means one generic reveal gates large blocks of content: −0.5 for the reveal's sameness and risk.

## Wow: 8.5
Earned: the exploded drawings closing step by step (1440-scroll-25.jpg, the hinge with red adjust arrows, the strap to the stud) are tied to the thesis. The tip-over check with a strap drawing is a real homeowner tool (1440-rm-full.jpg).
Deductions: the move-in planner output in 1440-rm-full.jpg reads as a checkbox list with small icons, not a printable "manual page" in the signature's language. It is not yet two connected moments.

## Polish: 9.0
Earned: SVG favicon, apple-touch icon, OG image, JSON-LD, theme-color, print stylesheet, forced colors, and no `transition: all` (dist/index.html). One stroke weight across drawings and icons, square corners throughout, and the footer is a designed close (Step 07, 1440-rm-full.jpg).

## Arithmetic
14×8.5 + 12×8.5 + 10×8.5 + 10×8.5 + 8×7.0 + 8×8.5 + 7×8.5 + 7×8.5 + 12×8.5 + 8×8.5 + 4×9.0
= 119 + 102 + 85 + 85 + 56 + 68 + 59.5 + 59.5 + 102 + 68 + 36 = 840 / 100 = **8.40** → ELEVATE

## Must
None.

## Should
1. **#hero h1 (1440-first.jpg):** trade and town are only in the eyebrow. Keep "Six boxes in the hall." and set the step-01 sub-line or a second h1 line to carry it, e.g. make the eyebrow part of the h1 as a smaller line ("Furniture assembly in Arlington"), so the h1 states trade + place.
2. **#hero bottom spacing (1440-first.jpg):** cut the hero's bottom padding so 60-100px of the steps band (its top rule and the "— 6 SIX STEPS" eyebrow) peeks at 900px height.
3. **Services cells (1440-scroll-50.jpg):** change "Price it →" to "Price my list" (or remove the arrow and link the title) so the primary action has one name.
4. **Hero step 03 (1440-first.jpg):** replace the tricolon "Built, anchored, boxes gone." with one clause, e.g. "Anchored to a stud, and the boxes leave with us."
5. **Reviews masonry (1440-scroll-75.jpg):** remove the ~300px hole under R1. Align the grid to `align-items:start` with a fixed 3-column order, or let R1 span two rows with a larger quote so the gap is designed.
6. **Eyebrows (1440-scroll-50.jpg, 1440-scroll-75.jpg):** drop the mono eyebrow from at least half the h2s (services, FAQ, form), keeping it only where it is a step/bag code. Fix the "MOVE" widow in the R6 bag header with `text-wrap:balance` or a shorter label ("TAKE-APART").
7. **Reveal gating (1440-full.jpg):** the tools, services and reviews bands render empty until revealed. Start reveals from opacity .001→1 with a short translate on children only, and make sure the IntersectionObserver threshold fires for tall bands (threshold 0, rootMargin "0px 0px -10%").

## Elevate
- **Photo (7.0):** bring in real photography on the manual's terms. Set 2-3 approved library frames (hands squaring a frame, a finished bedroom, flattened boxes) as "FIG." plates inside the same corner-tick frame as the drawings. Pair each with its drawing, so a step reads drawing → photo of the same moment and the stock becomes evidence inside the signature.
- **First screen (8.5):** make the hero the manual's cover page. The h1 should carry the trade + town as part of the step-01 line, the FIG. 1 dresser should close fully inside the first 900px, and the steps band's first ruled drawing should peek under it. On 390, re-cut so a cropped FIG. 1 (the drawers sliding shut) sits between the h1 and the buttons rather than below the fold.
