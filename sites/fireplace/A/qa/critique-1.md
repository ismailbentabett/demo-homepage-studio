COPY: ok

## Five-second test
1440-first.jpg: "Chimney Sweeps & Stove Service in Missoula" — trade, city, outcome all clear in 7 words. Arch-masked firebox photo frames the hero; phone visible in header; two CTAs ("Price it", "Call") above fold; sample rating line under h1; next band (checker) peeks ~60px at bottom. 390-first.jpg: h1 wraps to 3 lines, both buttons above fold, phone in sticky mobile bar. Immediate clarity is strong.

## First screen — 9
1440-first.jpg: h1 states trade + city + outcome in 7 words; primary CTA "Price it" is distinct from secondary "Call"; phone visible in header; sample rating line present; next band peeks ~60px. 390-first.jpg: h1 ≤ 4 lines, both actions above fold, phone in mobile bar. No deductions. Meets the 9 anchor fully.

## Distinctiveness — 8.5
1440-full.jpg: flue-level signature appears in hero (arch frame), process (brush marker + soot wipe), services (level tags), proof (cards hang at level), prices (estimator rows tagged), contact/footer (L6 cap tag) — ≥ 4 sections confirmed. Soot+Ember+Brick palette is unique in registry. 1440-scroll-25.jpg: checker symptom cards use generic bordered rectangles rather than integrating the flue-rail motif (-0.5). 1440-scroll-50.jpg: services grid is a uniform 3-column layout with no signature-driven variation (-0.5). Flue-rail functions as margin decoration more than information organiser in mid-page sections (-0.5).

## Typography — 9
1440-full.jpg: Young Serif display + Work Sans text pairing; fluid scale; tabular numerals in prices/hours/phone; curly quotes in reviews; measure 45–75ch throughout body copy. 1440-scroll-25.jpg: three tracked-caps labels ("L1 · Firebox", "Symptom", "ZIP") appear in one viewport but serve functional roles within the signature system, not pure decoration — borderline, no deduction applied. 1024-first.jpg: h1 clamp produces slightly awkward mid-range sizing but remains readable — minor, no deduction. Overall meets the 9 anchor.

## Layout and rhythm — 9
1440-full.jpg: 11 sections with alternating tones (deep → paper → deep → accent → paper → deep → mid); full-bleed break between process and services; asymmetric hero grid (1.1fr / 0.9fr); dense checker section followed by quiet guarantee band. 1440-scroll-50.jpg: proof (t-deep) and prices (t-accent) now separated by the t-paper flue-divider arch inserted per elevate move — tone collision resolved. 1440-scroll-75.jpg: area/hours split uses symmetric 1fr/1fr grid but serves dual informational purpose appropriately. No two adjacent sections share identical shape. Meets the 9 anchor.

## Photo and video — 8.5
1440-first.jpg, 1440-scroll-25.jpg, 1440-scroll-50.jpg: all frames on-topic (brick fireplace, chimney crown, stove interior, flue tiles, masonry); consistent warm grade via CSS filter (saturate .85, contrast 1.08, sepia .12); arch mask is part of the signature; alt text descriptive. 1440-scroll-25.jpg + 1440-scroll-50.jpg: process and break photos share similar masonry aesthetic, reducing visual variety across the scroll (-0.5). No off-topic frames, no faces as owner, no duplicate images. Solid 8.5 for stock media.

## Copy — 9
dist/index.html: voice matches concept sentences ("Drop cloths go down before the brush goes up"); Sample labels on all reviews, pricing, and rating; microcopy under form button ("We will call you back to set up a visit"); consistent primary action name "Price it" across hero, mobile bar, and estimator; no banned words detected. 1440-scroll-75.jpg: "Book a visit" heading in contact section is functional and specific to the trade, not generic filler. ZIP checker result is JS-generated but has proper aria-live region and static fallback structure. Meets the 9 anchor.

## Mobile — 9
390-first.jpg: h1 ≤ 4 lines, both CTAs above fold. 390-full.jpg: horizontal overflow fully resolved — page width matches viewport at 390px; checker section restructured as vertical stack with full-width tap targets; review cards constrained to viewport; carousel track clipped. qa/render.json confirms zero overflow errors at 390 and 320. Tap targets ≥ 48px (symptom buttons have min-height: 48px). Sticky mobile bar hides on scroll down per CSS rules. Previous mustFix items are resolved. Meets the 9 anchor.

## Accessibility — 9
1440-rm-full.jpg, 390-rm-full.jpg: all content visible under reduced motion; brush marker static at L1; no clip wipes; intro skipped. dist/index.html: skip link present; focus-visible outline (2px solid currentColor, offset 3px); correct heading order (h1 → h2 → h3, no skips); all inputs labelled; aria-live regions on ZIP result and estimator output; rotating word handled via visibility toggling with sr-only alternative. Focus outline uses currentColor which adapts to tone background — adequate contrast on both deep and paper tones. Symptom checker uses fieldset/legend grouping. Meets the 9 anchor.

## Motion and interaction — 8.5
1440-scroll-25.jpg, 1440-scroll-50.jpg: scroll-triggered brush marker rise and clip-path soot wipe visible and tied to thesis; pinned story respects ≥ 640px threshold. 1440-rm-full.jpg: reduced motion fully respected. 1440-scroll-25.jpg + 1440-scroll-50.jpg: section reveals remain predominantly fade-up across multiple sections; entrance patterns vary somewhat (text rises, images unclip) but quiet sections like guarantee and footer correctly stay still (-0.5 for insufficient variation beyond plain reveals). 1440-scroll-75.jpg: estimator select is native with no custom micro-interaction (-0.5). Three hooks beyond plain reveals confirmed (brush marker story, clip-path wipe, hover hairline grow). Meets 8.5 but not 9 due to uniform reveal pattern.

## Wow moment — 8.5
1440-scroll-25.jpg: flue-level signature tied directly to thesis; symptom checker outputs urgency guidance and pre-fills contact form — tool is genuinely useful to homeowners. 1440-scroll-25.jpg: checker output is plain text rather than designed in the signature's visual language (-0.5). 1440-scroll-50.jpg: creosote stage tabs lack the visual punch of the flue-rail story, making the second tool feel less connected to the signature (-0.5). The wow is real but not fully integrated into the design system.

## Polish — 9
dist/index.html: SVG favicon + 180px apple-touch-icon; OG 1200×630; theme-color #1A1614; JSON-LD HomeAndConstructionBusiness with complete schema; print stylesheet for estimator; lazy images with width/height attributes; hero poster preloaded; forced colors handled; consistent 2px radius throughout. 1440-full.jpg: footer Wikimedia credits are properly attributed and styled consistently. 390-first.jpg: mobile bar buttons visually differentiated (ghost vs primary). No mixed radii, no stray shadows, no console errors. Meets the 9 anchor.

## Arithmetic
14×9 + 12×8.5 + 10×9 + 10×9 + 8×8.5 + 8×9 + 7×9 + 7×9 + 12×8.5 + 8×8.5 + 4×9 = 126 + 102 + 90 + 90 + 68 + 72 + 63 + 63 + 102 + 68 + 36 = 880 / 100 = 8.80

## Must
None. All round 0 mustFix items (horizontal overflow at 390/320, review card overflow) are resolved per qa/render.json and 390-full.jpg.

## Should
- **1440-scroll-25.jpg, #checker**: Symptom cards use generic bordered rectangles. Restyle them with the flue-rail left accent bar or level-tag badges to integrate the signature into this high-density tool section.
- **1440-scroll-50.jpg, #services**: Uniform 3-column grid reads as template. Vary column spans or interleave a full-width service highlight that uses the arch motif to break the rhythm.
- **1440-scroll-25.jpg + 1440-scroll-50.jpg**: Section reveals are predominantly fade-up. Add clip-reveal for images and staggered text entrances by role to increase motion variety without adding new hooks.
- **1440-scroll-75.jpg, #prices**: Native select lacks micro-interaction. Style the output transition with a subtle opacity/slide that matches the signature easing.
- **1440-scroll-25.jpg, #checker output**: Plain text result. Design the output card with the same border/accent treatment as the symptom buttons to unify the tool visually.
- **1440-scroll-50.jpg, #process creosote tabs**: Tabs lack visual connection to the flue-rail story. Add a small brush-marker indicator or soot-texture background to tie them into the signature.

## Elevate
The two weakest categories by weight are distinctiveness (12) and motion (12), tied. Breaking the tie by score (both 8.5), distinctiveness is selected first as it appears earlier in the rubric ordering, followed by motion.

1. **Distinctiveness**: Thread the flue-rail signature into the checker and services sections as a structural element rather than margin decoration — make symptom cards hang from the rail as level-tagged nodes, and let the services grid break its uniform columns where the rail passes through, turning the signature from an ornamental border into the organising spine of every section.
2. **Motion**: Differentiate entrance patterns by content role so that text, images, and interactive tools each have a distinct reveal language — text rises, images unclip vertically, and tool outputs slide in horizontally along the flue-rail axis — creating a motion vocabulary that reinforces the chimney-as-site metaphor rather than applying a single fade-up universally.