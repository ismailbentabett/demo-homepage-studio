# Blueprint — painter-C (Haint & Harbor)

## Round 1 (critique-1 → fix)
Placeholder photos rendered blank, so every frame is now a drawn facade system (street, explorer house, prep row, marsh, porch ceiling, beach house). Elevate layout: replaced the repeated split-story with street hero → stage → facade row → full-bleed marsh → pinned haint story → ledger. Elevate motion: shutter intro tied to the plaque reveal, plus a pinned scroll story where the porch ceiling goes mildew → wash → prime → haint blue. Also: the next band peeks below the hero, CTA reads "Price it", estimator draws on a house sketch with a print button, stars read "N of 5", en-dashes fixed, empty credits hidden, invented claim and hours removed.

| # | id | tone | layout | hooks |
|---|---|---|---|---|
| 1 | hero | t-ink | street-hero | data-sw-signature, split |
| 2 | story-color | t-light | stage | :has() color explorer |
| 3 | story-prep | t-paper | facade-row | reveal |
| 4 | break | t-deep | full-bleed | marsh scrub |
| 5 | story-haint | t-accent | scroll-story | pinned step story (≥640) |
| 6 | services | t-light | ledger | repeater |
| 7 | story-coastal | t-paper | split-story | data-tabs |
| 8 | proof | t-deep | quote-stack | reveal |
| 9 | pricing | t-light | sheet | data-estimator |
| 10 | area | t-paper | plaque-map | data-zip |
| 11 | contact | t-ink | statement | data-lead, open-now |

## Original blueprint (pre-round-1)

## Section list

| # | ID | Tone | Layout | Purpose | Content (tokens) | Media slot | Hooks | Entrance |
|---|---|---|---|---|---|---|---|---|
| 1 | hero | t-ink | filmstrip-rail | Trade + town + proof + CTA in 5s | h1 "Historic House Painting in Charleston", kicker "{{biz.name}}", proof line "Mon–Fri 7–4:30 · Peninsula & Sea Islands · {{proof.rating}} ★ ([[sample rating]])", buttons [[quote]] + [[call]] | hero-C1 (filmstrip frames: region-charleston-street, detail-door, region-porch-ceiling, detail-trim, material-swatches) | data-sw-signature (facade primitive), data-reveal | text rises; filmstrip drifts after shutter intro |
| 2 | story-color | t-light | split-story | Objection: wrong color for street | Facade #1 (single house, yellow fill), plaque "Battery Row / Salt spray fades pigment / Historic color matching"; historic color explorer tool inside | process-scrape (clipped inside facade shape) | data-tabs (color explorer), data-service="Historic exterior repaints" | facade slides in; plaque fades up |
| 3 | story-prep | t-paper | facade-stack | Objection: paint over peeling stuff | Facade #2 (Victorian, pink fill), plaque "Church Hill Porch / Peeling at the sills / Hand-scrape and prime"; process photos clipped inside | process-prime, detail-trim | data-reveal="clip" | facade slides in; photos unclip |
| 4 | break | t-deep | full-bleed | Visual pause + salt-air mood | Full-bleed photo of weathered coastal wood with fresh paint edge | weather-humid | none (quiet section) | image unclip only |
| 5 | story-haint | t-accent | split-story | Objection: porch ceiling mildew | Facade #3 (Freedman's cottage, pale blue fill), plaque "Piazza Ceiling / Mildew returns each summer / Wash, mildewcide primer, two coats"; porch ceiling photo fills piazza | region-porch-ceiling | data-reveal | facade slides in; glow on center |
| 6 | services | t-light | grid | All services from facts | 3×3 grid of service cards, each with name + blurb + [[quote .short]] | none | data-service (per card) | stagger text rise |
| 7 | story-coastal | t-paper | split-story | Objection: salt air eats paint | Facade #4 (beach house, sage fill), plaque "James Island Marsh / Dew sets by mid-morning / Exterior timed around humidity"; weather window tool inside | crew-from-behind (clipped inside) | data-tabs (weather window), data-service="Coastal exterior painting" | facade slides in |
| 8 | proof | t-deep | stack | Trust: sample reviews + rating | Heading "Sample reviews", rating {{proof.rating}} ([[sample rating]]), 3 review cards with text/name/town/service/stars, all labelled [[sample review]] | none | data-reveal-stagger | text rises staggered |
| 9 | pricing | t-light | list | Objection: quote doubles | Heading "Sample pricing", price list from {{proof.prices}} via repeater, each line with item/from/to/note + [[sample pricing]] tag | none | data-estimator (optional sketch hook) | text rises |
| 10 | area | t-paper | split | Objection: do they serve my island | Service area heading, {{biz.areas|list}}, ZIP checker input + aria-live output, map-like row of facade silhouettes (decorative, no real map) | none | data-zip | text rises |
| 11 | contact | t-ink | statement | Primary conversion | Heading "Price a Charleston paint job", multi-step form (service → details → when → contact), microcopy "We'll call you back to set up a visit.", hours {{hours|today}} beside phone | none | data-lead (form), data-open-now | form step wipe |
| 12 | footer | t-light | rail | Disclaimer + credits + signature echo | Tiny row of 3 facade silhouettes (ink-on-paper, no color) as decorative rule, {{demo.disclaimer}}, [[credits]], nav anchors | none | none | static |

## Rhythm check
- 12 sections. Hero first, break at #4.
- Tone sequence: ink → light → paper → deep → accent → light → paper → deep → light → paper → ink → light.
- No two dark bands adjacent (deep at #4 and #8 separated by accent/light/paper; ink at #1 and #11 separated by multiple lights).
- At least one dark band (#4, #8) and one color band (#5 t-accent).
- One full-bleed break (#4).
- Interactive hooks: data-sw-signature (#1), data-tabs (#2, #7), data-zip (#10), data-lead (#11), data-estimator (#9), data-service (multiple). ≥3 distinct hooks.
- Layout families: filmstrip-rail, split-story, facade-stack, full-bleed, grid, stack, list, split, statement, rail. No two neighbours share a family.
- Quote form appears once (#11). Every CTA above points to #contact or tel:.
- Required content: services (#6), service area + ZIP (#10), hours/open-now (#11), sample reviews (#8), sample prices (#9), footer disclaimer + credits (#12).

## Round 1

Elevate moves applied:
- **Motion:** Implemented shutter intro animation (rotateY -90→0 over 800ms) as signature's first appearance, tied to facade plaque reveal. Shutter swing mimics Charleston window shutters opening.
- **Layout:** Added varied motion entrance patterns (scale on service cards, fade-only on reviews) to break repetitive translateY reveals. Hero min-height reduced to 95svh so next band peeks at fold.

Should-fix items applied:
- Hero min-height changed from `calc(100svh - var(--header-h))` to `calc(95svh - var(--header-h))` with padding-bottom added.
- Pricing CTA unified to "Price it" (was already correct in source).
- Motion entrances varied: service cards use scale, reviews use fade-only, clip remains on story visuals.

## Notes for builder
- Facade SVGs are inline in index.html, not external files. Each facade is a `<svg>` with `class="facade"` and `style="--facade-color: <hex>"`.
- Filmstrip in hero uses CSS animation (`@keyframes drift`) with `animation-play-state: paused` on hover/focus and `prefers-reduced-motion`.
- Plaque text lines use DM Mono; street line is bold, enemy is muted, service is accent-colored.
- Photo grade filter applied globally; per-photo object-position in style.css via `[data-photo="key"]`.
- Form thank-you state uses honest copy: "Thanks, {name}. In your version this goes straight to your phone and inbox."
- Shutter intro runs once on load (not scroll-triggered), respects prefers-reduced-motion via SW.reduced check wrapping all motion code.