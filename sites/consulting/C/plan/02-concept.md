# Concept — consulting-C

## Direction
C — The shops that build Dayton, and what comes next (LOCAL STORY axis).

## Thesis
Dayton is a city of small makers. This site reads the Miami Valley town by town, with succession and growth as its center. The owner sees their own street, their own shop floor, and a clear path to what comes next.

## Signature system: The Confluence
Three drawn river lines represent the owner, the business, and the next person. They run down the page side by side through services and reviews, and meet at the succession section the way the Great Miami, Stillwater and Mad River meet at downtown Dayton. Each section is marked with a river mile instead of a number. The lines appear in:
- Hero map (as the three rivers)
- Services section (side rail)
- Reviews section (side rail)
- Succession section (convergence point)
- Contact section (single merged line)

This is the `data-sw-signature` hook.

## Tone
Color-led. Deep machine-shop green as main field, brick red from the Oregon District, river blue from the Great Miami, warm cream for type and panels. Never corporate navy or consulting beige.

## Type
Condensed industrial sans for display (tall, stencil-like, set big like shop door lettering). Plain grotesk for body and UI. No serif, no mono. Optical size axis used if available.

## Hero
Map / area-led. An illustrated SVG map of the Miami Valley: the three rivers drawn on load, service towns as dots, headline set along the river. ZIP checker built into the map so a typed ZIP lights its town. First line of h1 visible without scrolling. Next band peeks in at bottom.

## Motion
- Intro: rivers draw on the map from north to downtown in ~1s, towns light up. H1 line-mask reveal after.
- Scroll story: the three river lines stay in a side rail and converge as you scroll, merging at the succession timeline. Pinned sequence on desktop only (≥640px). Phone: stacked cards with clip reveal.
- Signature scrub: at succession, the three lines merge into one driven by scroll progress.

## Layout families (no neighbours share one)
1. Hero: full-bleed map + overlaid text column left
2. Trust strip: horizontal data row (open-now · years · rating · areas)
3. Services: two-column list with river-mile markers and side-rail signature
4. Break: full-bleed photo band (shop floor)
5. Tool: succession timeline interactive
6. Reviews: sample review cards with river-mile markers
7. Pricing: sample price block + estimator CTA
8. Area: ZIP checker standalone + towns list
9. FAQ: accordion
10. Contact: multi-step form + phone/hours
11. Footer: disclaimer + credits

## Rhythm
deep (hero) → paper (trust) → deep (services) → break (photo) → paper (tool) → deep (reviews) → paper (pricing) → deep (area) → paper (FAQ) → deep (contact) → deep (footer, but separated by rule).
No two dark sections touch without a break or paper between them. ≥1 t-deep, ≥1 color band (the brick-red accent band in pricing), ≥1 full-bleed .break.