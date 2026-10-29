COPY: ok

# siding-B · critique round 2 (fast mode; mode does not change scoring)

## Five-second test
1440-first.jpg: "Fieldtest Siding Co., Hartford CT. They score vinyl, fiber cement, cedar and engineered wood on five tests and show sample prices per sq ft. I can measure my house or call (860) 555-0129. Why them: they show the readings and prices before the pitch." Passes. 390-first.jpg: same answer, h1 is 2 lines, both CTAs above the fold. The sticky Call / Text / Measure visit bar still sits on top of the cover strip (the Fiber cement row is hidden under it).

## What changed since round 1 (verified in screenshots)
- Plate 02 and the hero plate now paint in motion and in reduced motion (1440-full.jpg, 1440-rm-full.jpg). Must 1 is closed.
- Office hours are a single-column list at 390 (390-full.jpg, #area). Must 2 is closed.
- New specimen row: four material crops, each with REVEAL ≈ N IN. and a five-cell reading (1440-full.jpg, P. 02).
- Price sheet has a "Per sq ft / My house, 21.9 sq" switch. The bars rescale and the totals count up (1440-scroll-75.jpg shows the count mid-tween, 1440-full.jpg the end state).
- The method stack is sized to its content (1440-scroll-50.jpg). The 390 gap is gone: the cards stack statically (390-full.jpg).
- Services is a ruled list at 390 with a different action line per job. The h2 is now "Eight jobs, scored by how much of the house they touch."
- The hero sub-head question is cut. The CTA cells glyph is now an aria-hidden SVG.

## firstScreen: 8.5
Earned: short, concept-owning h1, a lede that names the materials and the action, one primary plus a quieter phone CTA, a SAMPLE RATING proof line, and the cover strip of four readings peeking in (1440-first.jpg). The label stack above the h1 is down to one report rule.
Deductions: -0.5: the hero photo is still the plain sunny white colonial in a box. The concept shows only in the type and the REVEAL tag (1440-first.jpg). -0.5: at 390 the sticky bar covers the cover strip's second row, so the page's own signature is clipped at the fold (390-first.jpg). The h1 also carries no place ("Hartford" lives in the mono label only), which keeps it off the 9 anchor.

## distinctiveness: 9.0
Earned: the Five-Cell Reading now does real work in at least 8 places:
- cover strip
- specimen photos
- compare table
- calculator output (21.9 sq as cells)
- method pages 1/4 to 4/4
- service scope
- review stars
- footer "END OF REPORT 5/5"

See 1440-full.jpg and 390-full.jpg. Siblings A (dark cutaway) and C (green serif masthead) do not share the face, the palette or the hero family (sites/siding/A|C 1440-first.jpg).
Deductions: -0.5: the generic spec-sheet tells are still present: mono tracked-caps labels on every band, middle-dot meta ("FIELD REPORT · HARTFORD, CT", "OVERALL READING · SAMPLE PRICE / SQ FT") and P. 0N rail numbers (1440-first.jpg). Still on the right side of 9 because the motif carries information.

## type: 8.5
Earned: heavy tight grotesk display; mono readings give the numbers a voice ("21.9 sq", "$13,100–$26,300"); en-dash ranges are used throughout (1440-scroll-25.jpg, 1440-full.jpg price sheet). Service text at 390 is now full ink at a readable size (390-full.jpg).
Deductions: -0.5: 3+ tiny tracked caps labels in one view. 1440-first.jpg has P. 01, FIELD REPORT, OVERALL READING, SAMPLE READINGS, SAMPLE RATING and PLATE 01. -0.5: at 390 the calculator's "1,992 sq ft" breaks onto two lines ("1,992 sq / ft") at display size, and "SQUARES WITH 10% / WASTE" wraps beside it (390-full.jpg, #squares).

## layout: 8.5
Earned: the method card is fixed and the 390 gap is gone. The specimen row adds an image-led band between the heading and the dense table. The price sheet is a strong dense section, and the full-bleed Plate 02 gives the page a breath. Tones alternate paper / stone / white / ultramarine / navy (1440-full.jpg).
Deductions: -0.5: the compare table at 390 is a sideways scroller with the Fiber cement column sliced at the right edge and no affordance (no shadow, no "swipe", no count). It reads as cut off, not as designed (390-full.jpg, P. 02). -0.5: the services grid at 1440 is still 8 equal boxed cards in a 4×2 grid, the most template shape on the page (1440-full.jpg, P. 05).
The motion-on 1440-full.jpg shows a ~1,900 px empty paper run at P. 04. This is the pin spacer in a full-page capture, and the 1440-scroll-50.jpg frame shows the stack working, so there is no deduction. It does make the section long: 4 pages for one idea is at the limit.

## photo: 8.5
Earned: no empty frames now (1440-full.jpg, 1440-rm-full.jpg). The four specimen crops carry the reading and reveal overlays, so photography and system finally meet (1440-full.jpg, P. 02). Plates are captioned with place.
Deductions: -0.5: mixed grades. The hero is saturated summer blue, Plate 02 is a desaturated late-winter navy grade, and the specimens range from yellow-saturated (Engineered wood) to flat grey (Vinyl). They do not read as one shoot (1440-full.jpg). The generic colonial hero keeps this off 9.

## copy: 9.0
Earned: concrete trade nouns and honest process lines:
- "Starter strip level, courses straight, corners and trim tight. Nails are swept with a magnet"
- "New house wrap with taped seams, and flashing bent around every window, door and deck ledger"
- "Soft sheathing is priced per sheet after tear-off"
- "Houses built before 1978 get lead-safe prep"

See 1440-full.jpg and 390-full.jpg. The new services h2 and the varied per-job action lines fix round 1's slogan and arrow repetition. Every price, reading, rating and review is sample-labelled. The guarantee line is verbatim from facts.json.
Deductions (minor, kept at 9): the price-sheet footnote still says "Per square foot unless the line says otherwise" while the "My house" mode shows whole-house totals (1440-scroll-75.jpg). "Price this one" appears 4 times in the compare table (1440-full.jpg).

## mobile: 8.0 (capped by mustFix)
Earned: hours fixed, static method stack, services as a ruled list, the form's radio rows are large, no page overflow at 320/390 (render.json).
Deductions: mustFix: in the price sheet at 390, row 04 "Engineered wood siding" collides with its total. "Engineere" runs under "$19,700–$32,900", and the letters overlap (390-full.jpg, P. 07). -0.5: the compare table is sliced at the right edge (390-full.jpg, P. 02). -0.5: the "1,992 sq ft" readout wraps (390-full.jpg, #squares). The sticky bar over the cover strip is counted in firstScreen.

## a11y: 9.0
Earned: reduced motion shows everything: both plates, the method stack as a 2×2 grid, the price sheet and the calculator (1440-rm-full.jpg, 390-rm-full.jpg). Focus is designed: `:focus-visible { outline: 3px solid var(--focus); outline-offset: 3px }` in dist/index.html. There are three `aria-live="polite"` regions (calculator, walls, ZIP), the glyph in the CTAs is now an aria-hidden SVG, the heading order is h1 → h2 → h3 with no skips, and every input has a visible label (390-full.jpg).

## motion: 8.5
Earned: the calculator now drives the price sheet. The bars rescale to the visitor's squares and the totals count up (1440-scroll-75.jpg mid-count, 1440-full.jpg end state), so the motion explains a change. The method stack pages 1→4 in order with a clean stacked-edge look (1440-scroll-50.jpg).
Deductions: -0.5: outside those two moments the scroll is still "cells fill when visible" in every section, so entrances barely vary by role (1440-scroll-25.jpg, 1440-full.jpg). -0.5: the count-up passes through unrounded figures ("$10,043–$20,162" in 1440-scroll-75.jpg) and then settles on rounded hundreds ("$13,100–$26,300" in 1440-full.jpg). Mid-tween the numbers look like a different, falsely precise quote.

## wow: 9.0
Earned: two connected moments. You measure your house (live drawing, 1,992 sq ft → 21.9 sq as cells), then "My house, 21.9 sq" turns the price sheet into your own range on one shared scale (1440-scroll-25.jpg → 1440-scroll-75.jpg). The wall picker on ultramarine is a third, useful tool. A homeowner would show this to a partner.
Deductions: the payoff depends on finding the toggle. The calculator's own link renders as "Put my21.9squares on the price sheet" (see polish), which weakens the hand-off.

## polish: 8.0
Earned: one radius (square), consistent hairlines, a designed "END OF REPORT 5/5" close, SVG favicon, OG, JSON-LD and a print stylesheet present in dist/index.html.
Deductions: -0.5: "Put my21.9squares on the price sheet". The spaces around the live number are lost at both viewports (1440-full.jpg, 390-full.jpg, #squares). -0.5: the price-row collision at 390 (390-full.jpg). It is a mustFix in mobile; here it is the visual. -0.5: the photo credits at 390 wrap so that ", CC BY 4.0" starts each second line with an orphan comma, six times (390-full.jpg footer).

## Arithmetic
14×8.5 + 12×9.0 + 10×8.5 + 10×8.5 + 8×8.5 + 8×9.0 + 7×8.0 + 7×9.0 + 12×8.5 + 8×9.0 + 4×8.0
= 119 + 108 + 85 + 85 + 68 + 72 + 56 + 63 + 102 + 72 + 32 = 862 / 100 = **8.62**

Verdict hint: NEEDS_HUMAN. This is round 2 of 2 in fast mode, weighted 8.62 is under 8.8, and mustFix is not empty.

## Must
1. **390-full.jpg, #prices (P. 07), row 04**: "Engineered wood siding" overlaps "$19,700–$32,900". At 390 the name column is too narrow next to a nowrap total. Fix: below 560px put the total on its own line under the name (grid-template-areas "num name" / "num total" / "num note" / "num bar") at about 1.5rem. Or keep one row with `minmax(0,1fr) auto` and let the name wrap, never overlap. Re-shoot at 390 and also check 320.

## Should
- **#squares link (1440-full.jpg, 390-full.jpg)**: "Put my21.9squares on the price sheet". Fix: put the spaces inside the text around the live span, e.g. `Put my&nbsp;<span data-sq-sq3>21.9</span>&nbsp;squares on the price sheet`, so the minifier cannot collapse them.
- **#squares readout at 390 (390-full.jpg)**: "1,992 sq / ft" wraps. Fix: `white-space:nowrap` on the value. Below 400px stack the two readouts (one column) or drop the readout size to clamp(1.75rem, 8vw, 2.25rem).
- **#compare table at 390 (390-full.jpg)**: the scroller slices the next column. Fix: either replace it below 640px with one stacked block per material (specimen, then five rows of readings), or keep the scroller with scroll-snap per column, a right-edge fade and a "1 / 4 · swipe" mono count.
- **Price count-up (1440-scroll-75.jpg)**: it shows unrounded mid-tween totals. Fix: round each frame to the same step as the final value (nearest $100), or tween only the bars and swap the totals once.
- **Price footnote (1440-scroll-75.jpg)**: "Per square foot unless the line says otherwise" contradicts the My house mode. Fix: make the line mode-aware: in My house mode, "Your 21.9 squares × each sample rate. Repairs stay per job."
- **390-first.jpg**: the sticky bar covers the cover strip's second row. Fix: show the bar only after the hero CTAs scroll out (IntersectionObserver on .hero .btn--primary), or give the hero a bottom padding equal to the bar height on mobile.
- **Footer credits at 390 (390-full.jpg)**: orphan ", CC BY 4.0" lines. Fix: wrap "on Wikimedia Commons, CC BY 4.0" in a `white-space:nowrap` span, or set the credits as a two-column ruled list (Plate / Credit).
- **Hero labels (1440-first.jpg)**: six tiny caps labels in one view. Fix: drop the P. 01 rail number in the hero and merge SAMPLE READINGS into the OVERALL READING rule as one label.
- **#services at 1440 (1440-full.jpg)**: 8 equal boxed cards. Fix: reuse the 390 ruled-list form at 1440 as a two-column report list, or give the four materials the specimen thumbnail and keep the four services as text rows.
- **Photo grade (1440-full.jpg)**: apply one shared grade to every plate (same slight desaturation and cool shadow as Plate 02, or neutral daylight for all) so hero, specimens and plate read as one shoot.

## Elevate
- **mobile (8.0)**: compose the two data sections for the thumb instead of shrinking the desktop table. At 390 the compare becomes a vertical stack of four "specimen reports": photo crop, five readings, price, one note. The price sheet becomes one card per material with the total set large in mono on its own line and a full-width bar under it, so the phone gets the report's best moments at full size.
- **polish (8.0)**: give every live number one typographic rule. Each value is a nowrap token with fixed spacing and the same rounding everywhere (calculator, link, toggle, totals, count-up frames). Then close the page with credits set as a ruled "Plate credits" table in the report's language (Plate 01 … Specimen 04), so the last screen is as designed as the first.
