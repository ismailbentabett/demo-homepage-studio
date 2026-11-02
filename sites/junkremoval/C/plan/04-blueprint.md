# Blueprint — junkremoval-C

## Rhythm check
- 10 sections (hero + 8 bands + footer). Hero is `calc(100svh - var(--header-h))`; next band peeks.
- Tones: deep → paper → light → accent → deep → paper → light → mid → deep → footer(deep). No 3 same in row; no two dark touching (deep/paper/light alternate; accent breaks deep sequence).
- ≥1 t-deep (hero, arrival, prices, footer). ≥1 color band (t-accent at #where-it-goes). ≥1 full-bleed .break (#process-break).
- Hooks: data-sw-signature='garage-panel' (hero), data-hook='zip-checker' (#area), data-hook='keep-pile' (#keep-pile), data-hook='hot-tub-check' (#hot-tub), data-hook='arrival-window' (#arrival), data-hook='quote-form' (#contact). Total 6 hooks.
- Layout families: shape-mask (hero), split (services), grid (process), statement (break), list (proof), rail (prices), stack (keep-pile), form (contact), rail (area), stack (footer). No neighbours share.
- Exactly one #contact; every CTA points to #contact or tel:.
- Required content: all 9 services (#services), area+ZIP (#area), hours/open-now (header+#arrival), sample reviews (#proof), sample prices (#prices via estimator block), footer with {{demo.disclaimer}} + [[credits]].
- Signature sections per concept.json: hero, services, process, proof, prices, contact, footer.

## Sections

| # | id | tone | purpose | layout | content tokens | media | hooks | entrance |
|---|---|---|---|---|---|---|---|---|
| 1 | #hero | t-deep | Trade+town+act+believe | shape-mask | biz.name, biz.city, biz.phone, seo.description | hero-C | data-sw-signature='garage-panel' | door rises, headline fades |
| 2 | #services | t-paper | What we clear | split | services.* (repeater) | process-carry-box | garage-panel | text rise |
| 3 | #process | t-light | How it works (quiet) | grid | process steps (point·sort·carry·sweep) | process-garage-empty, process-dolly-ramp | garage-panel | image unclip |
| 4 | #process-break | t-mid | Visual breath | statement | "In and out before lunch" | break-stucco-dusk (.break full-bleed) | — | fade |
| 5 | #proof | t-deep | Trust (sample reviews) | list | proof.reviews.*, proof.rating, proof.reviewCount | proof-swept-floor | garage-panel | text rise |
| 6 | #where-it-goes | t-accent | Destination clarity | rail | donate/recycle/landfill sorter output | process-sort-donate | garage-panel | slide-in |
| 7 | #prices | t-deep | Price logic (sample) | rail | proof.prices.* (estimator block) | — | garage-panel | text rise |
| 8 | #keep-pile | t-paper | Keepsake respect | stack | keep-pile planner tool | tool-keep-pile | data-hook='keep-pile' | image unclip |
| 9 | #hot-tub | t-light | Specialty item | split | hot-tub check tool | tool-hot-tub | data-hook='hot-tub-check' | text rise |
| 10 | #arrival | t-deep | Timing trust | rail | arrival window picker, biz.hours | — | data-hook='arrival-window' | slide-in |
| 11 | #area | t-paper | Service area + ZIP | stack | biz.areas, biz.zips, zip-checker | — | data-hook='zip-checker' | text rise |
| 12 | #contact | t-light | Convert | form | multi-step quote form | — | data-hook='quote-form' | fade-up |
| 13 | footer | t-deep | Legal + credits | stack | demo.disclaimer, credits, biz.initials | — | garage-panel | — |

## Open issues
- Hero family capacity: all 15 families are at or over the library cap (family 1 max 2/2 used; families 2-15 max 7/7 used each). No valid heroFamily remains for junkremoval-C. Concept currently set to family 1 but check-unique rejects it. This blocks `stage.mjs render` and requires either a registry cleanup or a cap increase before the site can advance. Font pair (Libre Baskerville + Outfit) and palette family are unique and pass.