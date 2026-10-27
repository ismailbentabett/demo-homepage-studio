# Blueprint — concrete-B

## Round 3
Photo elevate: every drawn surface is now a measured drawing. Each finish is a cut specimen (oblique tile, edge profile, slab depth dim, texture-depth callout, 0–6 in. scale bar), and the July break is a section drawing of a dawn pour (mixer, chute, forms, rebar on chairs, wet cure, thermometer, numbered callouts) instead of a sun disc. A11y elevate: the story no longer fades anything. State is carried by colour, weight and a filled diamond on the dim-line, and the rail uses the same diamond. The spec starts at 0/8, and reading each core layer writes its default line. Kickers are kept only on the tool sections. Services gets a Sample price table, the estimator rows are top-aligned, and the rail and mobile-footer gaps are closed.

## Round 2
Rebuilt the page around one working signature: a spec sheet that every tool writes into (rail at ≥1200, header button at 900–1199, mobile bar under 900, a sheet card in #contact, a receipt in the footer). I also re-cut the hero as a strata-filled "6 IN." numeral with a dimension line, and gave motion one real story: the core sample lights layer by layer on scroll at ≥640, with sticky positioning and no pin. Photos are placeholders, so every visual is drawn: the section SVG, finish swatches, the plan drawings, the map and the dawn backdrop.

| # | id | tone | purpose | layout family | content (tokens) | media | hooks | entrance |
|---|---|---|---|---|---|---|---|---|
| 1 | hero | t-deep | "Will they pour it thin?" Answered with a number | type-mask | biz.city, biz.state, hours today, proof.rating (Sample) | none (og: hero) | signature spec-rail | numeral pours in (clip), dim line draws, ≤1.2 s; h1 split |
| 2 | numbers | t-paper | Four numbers on every quote | ledger | proof.guarantee (Sample terms) | none | dim-draw, counters | dimlines draw, stagger |
| 3 | story | t-deep | "It'll crack in a year": five layers with dimensions | core-sample | none | drawn SVG | story, signature | layer-by-layer light (≥640) |
| 4 | (break) | t-accent | July pours: summer method | full-bleed | none | break (drawn dawn fallback) | none | split statement |
| 5 | estimator | t-paper | "What will it cost / how much concrete?" | tool-split | proof.prices.0/1 (Sample pricing) | drawn plan | calculator, signature | live plan redraw |
| 6 | finishes | t-mid | Which top for a Phoenix-area summer | swatch-tabs | proof.prices.0/2/3 (Sample) | CSS-drawn swatches | tabs, signature | tab swap |
| 7 | rv-pads | t-deep | Will my rig fit the gate? | plan-drawing | proof.prices.1 (Sample) | drawn plan | rv-sizer, signature | live redraw |
| 8 | season | t-paper | Pouring in summer / monsoon | month-ruler | none | none | season (tabs) | tab swap |
| 9 | services | t-mid | Every service | spec-table | each services | none | prefill | hairline hover |
| 10 | reviews | t-paper | Proof from neighbours | field-notes | proof.rating, reviewCount, each proof.reviews (Sample review) | none | signature (add a note) | stagger |
| 11 | area | t-deep | Do you come to my ZIP? Are you open? | map-split | biz.city, biz.areas, hours table/today | drawn map | zip, opennow | none |
| 12 | contact | t-accent | Send the spec | rail-form | services, biz.phone/email | none | form, signature (sheet card) | none |
| — | footer | t-deep | Receipt + legal | — | demo.disclaimer, [[credits]], proof.license (Sample) | — | signature (receipt) | — |

## Rhythm check
- 12 sections. The hero is `min-height: calc(100svh - var(--header-h))` under a fixed header, so the next band peeks in.
- Tones: D L D C L M D L M L D C, then the footer D. No three alike in a row; no two dark sections touch (the area band, D, is followed by contact, C, then the footer, D).
- t-deep ×4, colour bands ×2 (the break and contact), one full-bleed `.break`.
- Hooks: dim-draw, story, calculator, tabs, rv-sizer, season, zip (7), plus data-sw-signature in 7 sections and the footer.
- 12 layout families, no neighbours share one.
- One #contact; every CTA → #contact, #estimator, or tel:/sms:.
- Required: services (spec-table + form choices), area + ZIP checker, hours / open now, Sample reviews, prices only as Sample ranges, footer with disclaimer + credits.
- Signature present in hero, story, estimator, finishes, rv-pads, reviews, contact, footer.

## Open issues
- none


## Round 4
One shared dark .titlerow title-block (bone ink, amber value) now paints the price-table head, sheet heads and swatch captions, so section colours cannot repaint it. Tools use a drawing-sheet grid: the drawing sticks top-aligned beside the heading (estimator plan, RV pad plan with key + price), and the review header + lead quote share a sticky left column. Also: GATE label clears the pad, status reads as a sentence, the kicker no longer orphans, and each row CTA is named after its service.
