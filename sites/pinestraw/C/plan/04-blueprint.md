# Blueprint — pinestraw-C

| # | id | tone | purpose | layout | content (tokens) | media | hooks | entrance |
|---|---|---|---|---|---|---|---|---|
| 1 | hero | t-deep | trade+town+price+act | type-over-right-scrim | h1 "Pine straw, twice a year. {{biz.city}}.", lead, proof line, CTA Price it + tel | hero-C | data-sw-signature, data-split="lines" | line-mask h1 over right gradient |
| 2 | seasons | t-paper | when to book (objection: don't know when) | ribbon-split | spring/fall windows, dogwood/Thanksgiving anchors, refresh clock tool | hero-C-2 (fall) | data-season, data-refresh-clock | text rise, tool stagger |
| 3 | process | t-light | mess/weeds fear | stack | rake, edge, weed, spread, blow steps; guarantee token | process-rake-out, process-spade-edge, process-weeding, process-shake-bale | data-reveal-stagger | stagger cards |
| 4 | break | t-deep | visual pause, local feel | full-bleed | caption "Red clay and long-leaf under a Cobb County oak" | hero-C-3 | — | unclip |
| 5 | services | t-paper | what we do | grid | all 8 services via repeater, each with [[quote]] | — | data-reveal | grid fade |
| 6 | pricing | t-accent | thin-layer fear | split | sample per-bale range, estimator link, typical ticket ranges | — | data-estimator | text rise |
| 7 | area | t-deep | am I in the zone | split + zip | ZIP checker, town list, photo beside copy | seasons-fall | data-zip, data-sw-signature | zip live region |
| 8 | reviews | t-paper | trust | rail | 3 sample reviews in kidney-masked cards | — | data-carousel, data-sw-signature | slide-in |
| 9 | hoa | t-light | HOA deadline fear | split | deadline planner tool, guarantee token | — | data-hoa-planner | tool reveal |
| 10 | contact | t-deep | convert | form | 4-step form, open-now, microcopy | — | data-lead, data-open-now, data-sw-signature | form step fade |
| 11 | footer | t-paper | legal + credits | stack | disclaimer, credits, nav anchors | — | — | static |

## Rhythm gate check

- 11 sections (within 8-12). Hero is `calc(100svh - var(--header-h))`; #seasons peeks in.
- Tone sequence: deep → paper → light → deep → paper → accent → deep → paper → light → deep → paper. No 3 same in row; no two dark touching (deep→paper→light→deep OK; deep→paper→accent→deep OK; deep→paper→light→deep OK).
- ≥1 t-deep (hero, break, area, contact). ≥1 color band (pricing t-accent). ≥1 full-bleed .break (#4).
- ≥3 data-hooks: data-refresh-clock, data-zip, data-estimator, data-hoa-planner, data-lead, data-open-now, data-carousel, data-sw-signature (in hero, area, reviews, contact).
- ≥3 layout families: shape-mask, ribbon-split, stack, full-bleed, grid, split, rail, form. No neighbours share one.
- Exactly one #contact. Every CTA points to #contact or tel:.
- Required content: all services (#5), area+ZIP (#7), hours/open-now (#10), sample reviews (#8), sample prices (#6 via estimator + price block), footer with {{demo.disclaimer}} + [[credits]].
- Signature sections per concept.json: hero, area, reviews, contact all carry data-sw-signature; seasons carries data-season which the ribbon reads.

## Open issues

- **Hero family collision (round cap reached).** All 15 hero families are at the library max (7) or reserved by pinestraw-A/B drafts. Tried families 13, 9, 5, 7, 12, 14, 1, 2, 3, 4, 6, 8, 10, 11 — all collide. Site ships with hero family 11 (type over photo with right-side scrim); `check-unique` will fail until a sibling delivers and frees a slot. No further hero-family changes possible this run.