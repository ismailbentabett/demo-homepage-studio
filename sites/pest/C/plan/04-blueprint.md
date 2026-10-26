# Blueprint — pest-C (Lamppost Pest & Termite)

## Round 3
Photo + a11y elevate: the photography now does the dusk. Every frame is graded by its clock minute through `--lamp` (sepia/brightness filter + plain-alpha indigo and porch-gold washes, no blend modes): 7:40 hero warm, story 8:05 → 8:28 falls from gold to deep indigo (--lamp 1 / .7 / .4 / .12), services .3, area .2, contact .15. Hero swapped to home-nola-shotgun (a shotgun row, no street signs) and the pasted SVG lamppost removed; hero-C1 moved to the Shotgun card, zoomed onto the porch so its ONE WAY sign stays out of frame. Root cause of the empty gables: `decoding="async"` images missing their raster in full-page captures (verified by toggling in Playwright); app.js now sets every `.frame img` to sync decoding, story frames lost `data-reveal="clip"`, `is-dim` dims only the card text, and frames get real `sizes` (1170w where 2340w was wasted). With JS off / reduced motion the story is a still "evening contact sheet": heading row + four houses side by side (2-up at 900, 4-up at 1200), each with photo, drawing, stamp and check points. Shoulds: descriptions #C2BCB0 at 17px, story gap 64px, swarm-calendar strip fills the lights-out left column (tabs removed; module dropped), h1 now names Formosan and the lead names the city, mono eyebrows replaced by the italic stamp style.

## Round 2 (reopened)
Photo + layout elevate: every frame is now a real approved photo (hero-C1, home-nola-shotgun, home-baton-rouge, detail-attic, detail-mud-tube, weather-humid under the break skyline, process-report beside services, home-wilmington in #area, detail-wood-damage in #contact), no placeholders, no repeats, graded with one luminosity duotone (indigo → streetlamp gold). Story photos are clipped inside a gable with a gold roofline; the sticky left column now holds the house drawing that swaps shotgun → Creole → camelback → slab plus the clock, cards 96px apart, inactive cards dim and the lamp glow drops 1 → .4. Hero h1 now carries the outcome; proof line is one 15px ink line; the selected estimator job lights its table row (:has).

## Round 1
Elevate (distinctiveness + motion): the dusk clock is now the page spine. Every section prints a time stamp 7:40 → 9:30 pm (`data-t`), a margin clock interpolates between them on scroll, the story's big dial and porch-light meter follow the house cards, the break turns the street's windows out, and the footer closes at "9:30 pm. Porch light back on." The hero was re-cut as the stacked headline over a 21:9 dusk strip (photo + generated skyline + 7:40 disc dial). Frames are graded indigo with a lamp-gold glow and captioned, so the placeholder stubs read as intentional. The break photo was dropped (sky + skyline only). Services became a ruled two-group list, proof became a feature quote + review timeline, kickers kept on hero and proof only. Copy-1 replacements applied; the estimator empty state is static (JS off) and the kit fills prices[0] on load.

| # | id | tone | purpose | layout family | content (tokens) | media keys | hooks | entrance |
|---|---|---|---|---|---|---|---|---|
| 1 | hero 7:40 | t-paper | path: land the dusk moment + primary CTA | stacked headline over 21:9 strip | kicker, h1 "Formosan termites in {{biz.city}}", lead, CTAs, sample renewal {{proof.prices.3.from}}–{{proof.prices.3.to}}, areas | hero | data-sw-signature, data-open-now | dial 7:28→7:40, windows light |
| 2 | swarm-tool 7:52 | t-mid | objection: is it termites? what do I do tonight? | text-left / tool-right | Lights-out helper (checklist, dimming lamp), April/May/June tabs | — | data-checklist, data-tabs | fade-up |
| 3 | house-types 8:05 | t-deep | objection: my house is old / raised / slab | sticky aside + card stack | 4 house cards 8:05–8:28, elevation SVGs, entry points | story-1..4 | data-sw-signature | clip, dial + lamp meter follow |
| 4 | break 8:40 | t-mid | rhythm reset: the street goes dark | full-bleed .break | statement + skyline | — | data-sw-signature | windows go out (scrub) |
| 5 | services 8:46 | t-paper | path: what we do | ruled two-group list | all 9 services via tokens, per-service quote links | — | data-reveal | fade-up |
| 6 | prices 8:52 | t-light | objection: what will it cost? | table + estimator card | {{proof.prices}} repeater, [[sample pricing]] | — | data-estimator | fade-up |
| 7 | proof 9:00 | t-deep | trust | feature quote + timeline | 6 sample reviews 9:02–9:20, rating | — | data-sw-signature | fade-up |
| 8 | guarantee 9:24 | t-accent | objection: fine print | centered statement | {{proof.guarantee}} | — | — | none |
| 9 | area 9:26 | t-mid | path: do you serve my street? | form + framed photo | ZIP checker, areas, hours | detail-1 | data-zip, data-open-now | fade-up |
| 10 | contact 9:28 | t-deep | conversion | form beside info | 4-step form, phone, email, hours | — | data-lead, prefill | fade-up |
| 11 | footer 9:30 | t-paper | close + credits | footer with dial | {{demo.disclaimer}}, [[credits]] | — | data-sw-signature | — |

## Rhythm gate check

- [x] 10 sections + footer (within 8-12). Hero `calc(100svh - var(--header-h))`-based; swarm-tool peeks.
- [x] Tones: paper → mid → deep → mid → paper → light → deep → accent → mid → deep → paper. No 3 alike in a row, no two darks touching.
- [x] t-deep ×3, color band (guarantee t-accent), full-bleed .break.
- [x] Hooks: data-sw-signature (hero, house-types, break, proof, footer), checklist, tabs, estimator, zip, lead, open-now.
- [x] Layout families all differ from neighbours.
- [x] One #contact; every CTA → #contact or tel:.
- [x] Required content: 9 services, ZIP + areas, hours/open-now, sample reviews tagged, sample prices + estimator, footer disclaimer + credits.
- [x] Signature in every concept.json signature section (hero, story, proof, footer) plus break.

## Open issues

- Media are placeholder stubs (critique-1 mustFix 1): the niche library needs real curation. Frames are CSS-graded and captioned so they read as intentional, but real photos are required before delivery.

## Build notes (resume)
- Fixed 320px overflow in #area (grid minmax(0,1fr), input/dd min-width 0).
- Sized sprite icons (`.i`), compacted the header under 640 (icon-only call, open-now hidden; mobile bar carries the call).
