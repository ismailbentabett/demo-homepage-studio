COPY: ok

# drywall-B · critique round 1 (fast mode)

**Five-second answer (1440-first.jpg, 390-first.jpg):** "Drywall repair and finishing in Eugene, OR. Call (541) 555-0162 or price my wall. They tell you which finish level (L0-L5) your wall needs and show a sample price before anyone comes out." The answer is clear. The "why them" (the work-light check) comes through, but only if you read the strip and the tool. The h1 is a slogan: the trade and city sit in the eyebrow.

Siblings: drywall-A (1440-first) is a light paper/green page with a framed tape photo. B is a dark procedural room. The face, palette and hero family all differ. No logo-swap risk.

## firstScreen: 8.5
- Earned: the h1 letters are masked with the lit knockdown surface, so the signature shows on screen at 0 ms. The grade strip runs under the header. The finish-level picker docked right is a real tool on the first screen. The proof line has Sample rating, CCB and insured, all labelled. At 390 the h1 is 3 lines and both actions sit above the fold (390-first.jpg).
- −0.5: the h1 "Walls that pass the side light." has no trade word and no place. "Drywall · Eugene" lives only in the tracked-mono eyebrow (1440-first.jpg).
- −0.5: the header carries two equally loud filled cyan buttons ("Price my wall" and the phone), right next to a hero that has its own filled primary (1440-first.jpg).
- −0.5: the hero fills the full 900px and the next band does not peek (1440-first.jpg bottom edge is empty dark).
- +1.0 for a signature that is truly inside the first screen and a tool that does real work.

## distinctiveness: 8.5
- Earned: the grade strip appears in the header, hero tool output, section badges, levels story, swatch details, price ledger bars, rating strip and footer ("Light off. Wall done.") (1440-full.jpg, crops 0-4). The procedural lit wall is a material no stock site has. It clearly differs from A.
- −0.5: the AI-slop tells pile up. There is a tracked mono eyebrow above every h2. "01…08" numbering is used as decoration in services (1440-full.jpg services band) and again in the area and popcorn lists. Middle-dot meta strings appear in the hero proof line and the footer. Mono micro-labels are everywhere.
- The section badges (L4 on services, L0 on popcorn, L4 on area) read as arbitrary. The strip "organises" those sections in name only, and the label could be deleted without loss (1440-full.jpg).

## type: 8.5
- Earned: Epilogue 800 display with a huge h1 against an 18px Albert Sans lead. Martian Mono tabular prices in the ledger (1440-full.jpg crop 2-3). Curly quotes, an en-dash in "$150–$350", no em dashes.
- −0.5: there are 3+ tiny tracked caps labels in one view. The nav is in tracked mono caps, plus the eyebrow, plus "ROOM / BIG OR WEST-FACING WINDOW? / PAINT SHEEN / TEXTURE GOING ON TOP?" in the hero (1440-first.jpg).
- On the scale side: heading sizes are disciplined, but the mono is doing too many jobs (nav, labels, notes, prices, meta, disclaimers). The third voice dilutes the display.

## layout: 8.0
- Earned: a real 12-column grid, an asymmetric reviews grid (rating left, staggered cards right), a dense price ledger, and one light band at the form.
- −0.5: the same section shape repeats 8 times: badge cell + eyebrow + h2 left, mono note right, then a two-column body (1440-full.jpg, every band).
- −0.5: the "Level 5 at sunset angle" full-bleed is about 700px of murky brown gradient with the text in the bottom-left. It reads as a blank gap more than a break (1440-full.jpg crop 2, 1440-scroll-50.jpg).
- −0.5: the popcorn left column ends after three toggle rows, leaving about 500px of empty dark beside the steps (1440-scroll-75.jpg).
- +0.5: tones alternate paper/mid/paper and the light band at the form lands as an event (1440-full.jpg crop 4).
- The area band also does two jobs: area + hours, plus a three-step dust-control list (1440-full.jpg crop 4). It is listed in Should.

## photo: 7.5
- Earned: no stock at all. Every surface is procedural, and in reduced motion the levels wall (tape seams raked by side light) is convincing (1440-rm-full.jpg crop 0). The h1 texture mask is a use stock never gets.
- −0.5: the "Smooth" swatch preview at 1440 and 390 reads as an empty grey rectangle (1440-full.jpg crop 2, 390-full-2). It is the default selection, so the tool's first impression is "nothing loaded".
- −0.5: the sunset band surface is a soft brown smear with no visible wall or light, and its caption claims "A smooth wall drawn under a light at 6°" (1440-scroll-50.jpg).
- The brief §1 buyer wants "photos of finished walls under real light". There is not one real-world frame on the page, so trust rests entirely on drawings. The motion-on levels wall at 390 is a flat grey panel too (390-full-0).

## copy: 9.0
- Earned: concrete trade nouns (GA-214, sample board, resilient channel, abatement firm, "west window at sunset"). Honest "it depends" in the popcorn result ("Not clean: we stop and hand you a plan"). Doubt microcopy under the form ("Nothing is booked until we talk."). The footer line closes the thesis. Every price and review is Sample-labelled (1440-full.jpg crops 2-4).
- −0.5: the primary action is named "Price my wall" in the header and hero, "Price it" ×8 in services, and "Get a number" as the form eyebrow (1440-full.jpg crop 1, crop 4).
- +0.5: the voice sentences in concept §9 show up almost verbatim and land.

## mobile: 8.5
- Earned: no overflow (render.json). The h1 is 3 lines. Call + Text-a-photo bar. The levels story is stacked, not pinned (390-full-0/1). Swatches go 2×2. Tap targets on the toggles look ≥ 44px. Breakpoints at 359/389 exist for 320.
- −0.5: the hero is the desktop stack collapsed. The picker header sits under the sticky bar at the fold (390-first.jpg), and the h1 texture is the same crop scaled.
- The "↳" note marker renders as a clipped stub at the start of every section note (390-full-1, 390-full-3). It is counted in polish.

## a11y: 8.0 (capped by mustFix)
- Earned: focus is 3px accent with 3px offset on dark and teal on light (dist CSS). Forced-colors blocks, 3 aria-live regions, one h1, no heading skips. Reduced motion shows every word and the wall in its seamed state (1440-rm-full.jpg crop 0).
- −0.5 and mustFix: with motion on, the inactive level steps dim their title and body to roughly #5x grey on #141517 (about 2.5:1). That is readable content under 4.5:1 (1440-full.jpg crop 0 "Two coats / Three coats / A skim over everything", 1440-scroll-25.jpg L0-L4 rows).
- The footer brand line "Raking Light Drywall" is set in muted grey at display size. Fine on ratio, but it looks disabled (390-full-6).

## motion: 8.5
- Earned: one describable idea. As you scroll the levels story, the strip dials L0→L5 and the drawn wall loses its seams (1440-scroll-25.jpg: "seams flagged 0" and a flat wall at L5; 1440-full.jpg crop 0 shows "seams flagged 3" at L0). It is pinned only ≥ 1024 and stacked on the phone. The hero tool, estimator, checklist and ZIP give ≥ 3 hooks beyond reveals. Reduced motion is honoured.
- −0.5: outside the dial, nothing on screen shows motion with a job. The sunset band and the swatch wipe show no visible state change across the 25/50/75 frames, so the second story (wipe) cannot be confirmed (1440-scroll-50.jpg).

## wow: 8.5
- Earned: the hero picker outputs "Level 4 for this room." on its own grade strip with "Put Level 4 on my quote". The tool speaks the signature's language. The dial story ties to the thesis (1440-first.jpg, 1440-scroll-25.jpg).
- −0.5: the output is a headline + one sentence. Nothing a homeowner would keep or show. The best visual (the lit seam wall) is a small 4:3 box at the left of the pin, not a moment (1440-scroll-25.jpg).

## polish: 8.0
- Earned: SVG favicon + apple-touch, OG 1200, print stylesheet, forced colors, no `transition: all`, footer designed.
- −0.5: the "↳ " pseudo-content glyph is missing from the mono subset and renders as a broken stub on every section note (390-full-1, 390-full-3).
- −0.5: mixed radius. The pill Sample chips and service chips sit on a system that is square everywhere else (1440-full.jpg crop 3 review cards).

## Arithmetic
14×8.5 + 12×8.5 + 10×8.5 + 10×8 + 8×7.5 + 8×9 + 7×8.5 + 7×8 + 12×8.5 + 8×8.5 + 4×8
= 119 + 102 + 85 + 80 + 60 + 72 + 59.5 + 56 + 102 + 68 + 32 = 835.5 / 100 = **8.36** (8.355)

Verdict hint: **FIX** (one mustFix).

## Must
1. **#levels story, inactive steps (1440-full.jpg crop 0, 1440-scroll-25.jpg):** dimmed step titles and bodies fall to about 2.5:1 on #141517. Fix: never dim words below #A39D93 (6.78:1). Show the inactive state on the strip cell, the rule and the badge instead (cell fill off, title at ink, body at muted). Opacity on text must stay ≥ 0.85.

## Should
1. **Hero h1 (1440-first.jpg):** no trade or place in the h1. Fix: keep the mask line and let the lead or eyebrow carry the trade at reading size. Better: put "Eugene drywall" into the h1 as a second, smaller unmasked line ("Eugene drywall, finished to pass the side light.") so the clamp stays ≤ 3 lines.
2. **Header (1440-first.jpg):** two filled buttons. Fix: make the header phone a text link with the icon (ink, tabular), and keep "Price my wall" as the only filled header button.
3. **Hero height (1440-first.jpg):** no peek. Fix: hero `min-height: calc(100svh - 96px)` at ≥ 1024 so the L0-5 badge and h2 top of #levels show 60-90px.
4. **Texture tool default (1440-full.jpg crop 2, 390-full-2):** "Smooth" preview is an empty grey box. Fix: default the selection to Knockdown (the h2 asks about knockdown), and give Smooth a visible raking highlight band + one faint trowel arc so it reads as "lit and flat", not "blank".
5. **Sunset band (1440-scroll-50.jpg):** muddy gradient with no wall. Fix: render the lit-wall surface at elevation 6° with a hard warm window-light parallelogram crossing it, and cut the band to about 60svh.
6. **#popcorn left column (1440-scroll-75.jpg):** about 500px empty. Fix: make the left column `position: sticky; top: 120px` with the result card (Test first + lab fee Sample) under the toggles, or move the Oregon DEQ note into that column.
7. **Section shape repetition (1440-full.jpg):** 8 identical headers. Fix: drop the badge + right note on at least 3 bands (services, area, reviews) and give one band a full-width display heading. Reserve the level badge for sections where the level is real data (levels, texture, prices).
8. **#area (1440-full.jpg crop 4):** two jobs. Fix: move the 3 dust-control steps to the price/patch sizer ("Dust:" line already exists there) or to the form's left column, and keep area + ZIP + hours.
9. **CTA naming (1440-full.jpg crop 1):** "Price it" ×8 vs "Price my wall". Fix: rename to "Price my wall" or drop the per-row link and make each row a link to the sizer with the service preselected.
10. **"↳" glyph (390-full-1, 390-full-3):** missing in the Martian Mono subset. Fix: replace the `content:"↳ "` with an inline 1px-stroke SVG mask or a plain 12px rule, or add U+21B3 to the subset.
11. **Radius (1440-full.jpg crop 3):** pill chips on a square system. Fix: give Sample/service chips the same 2px radius as buttons and cards.
12. **Tracked caps (1440-first.jpg):** nav + eyebrow + 4 field labels in tracked mono. Fix: set the nav in Albert Sans 500 sentence case, and the field labels in Albert Sans 600 14px, no tracking.

## Elevate
- **photo (7.5): make one procedural surface the page's photograph.** Promote the lit seam wall from a 4:3 box to a full-bleed band where the beam is the image. The same wall goes from taped seams under a raking light (L0) to a flat skim (L5), with a single warm window parallelogram in the sunset band, so the page has one art-directed "shoot" with a plan → work → result sequence. Use the same azimuth/elevation grade in the swatches and the h1 mask so every surface looks lit by one lamp.
- **layout (8.0): give the scroll a shape instead of eight identical bands.** Make the light come on in steps. Dark bands keep the badge header only where a level is data. One band (prices) goes light-mid as the "primed" moment. The reviews break the grid with a card overlapping the rating column. The sunset band becomes a short full-bleed breath between the dense ledger and the dense popcorn checklist, so the full-page reads loud → dense → breath → dense → light.
