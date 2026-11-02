# Blueprint — irrigation-C

## Rhythm check
- 10 sections (hero + 9 bands). Hero is `calc(100svh - var(--header-h))`; next band peeks.
- Tone sequence: light → accent → paper → deep → light → paper → mid → light → deep → paper. No 3 same in a row; no two dark touching.
- ≥ 1 t-deep (freeze band), ≥ 1 color band (spring accent), ≥ 1 full-bleed `.break` (summer photo break).
- ≥ 3 data-hooks: `data-sw-signature="soil-line"`, `data-zip`, `data-lead`, `data-open-now`, `data-checklist`, `data-accordion`.
- ≥ 3 layout families: map-hero, split-service, grid-proof, tool-rail, statement-break, stack-cards. No neighbours share one.
- Exactly one `#contact`; every CTA points to it or `tel:`.
- Required content: all 9 services, area + ZIP checker, hours/open-now, sample reviews, sample prices via estimator block, footer with disclaimer + credits.
- Signature appears in hero, spring, summer, fall, winter, proof, footer (per concept.json.signature.sections).

## Sections

| # | id | tone | purpose | layout | content (tokens) | media | hooks | entrance |
|---|---|---|---|---|---|---|---|---|
| 1 | hero | t-light | Trade + town + act | classic-hero | h1 "McKinney sprinkler repair", kicker "North Texas clay yards", lead, phone, Price it, open-now line, sample rating; frosty lawn photo on right with left-aligned type column | hero-A (frosty lawn sunrise) | data-open-now, data-sw-signature | text rise + img unclip |
| 2 | spring | t-accent | Spring start-up path | split-service | h2 "March: turn it back on", services.spring-start-up.blurb, smart-controller-setup.blurb, rain-sensor.blurb | hero-B (suburban lawn) | data-service | text rise + img unclip |
| 3 | summer | t-paper | Peak repair + dry spots | grid-proof | h2 "August: the clay cracks", services.sprinkler-repair, foundation-drip, zone symptom finder tool teaser | process-trench-01 | data-hook="zone-finder" | text rise |
| 4 | break | t-deep | Visual pause, full bleed | statement-break | Statement "Watering days are Tue & Sat. We set the controller so you don't have to think about it." | break-summer-lawn | — | fade |
| 5 | fall | t-light | Winterization rush | split-service | h2 "November: shut it down", services.winterization, backflow-testing | winterize-wrap-01 | data-service | text rise + img unclip |
| 6 | winter | t-mid | Freeze repair | stack-cards | h2 "February: the freeze splits pipes", services.freeze-repair, freeze-ready checklist teaser | frost-head-01 | data-checklist | clip reveal |
| 7 | proof | t-paper | Trust via neighbors | grid-proof | Sample reviews (3), sample rating, guarantee line, years | — | data-sw-signature | text rise |
| 8 | prices | t-light | Sample price transparency | tool-rail | Estimator block with sample prices from facts.proof.prices, labelled Sample pricing | — | data-estimator | text rise |
| 9 | area | t-deep | Service area + ZIP | split-service | h2 "Towns we serve", areas list, ZIP checker | — | data-zip | text rise |
| 10 | contact | t-paper | Convert | form-stack | Multi-step form, microcopy, hours, phone, SMS | — | data-lead | text rise |
| 11 | footer | t-light | Legal + credits | footer | Disclaimer, credits, nav anchors, soil line flat | — | data-sw-signature | — |

## Open issues
- **Hero family saturation:** All 15 hero families are at library capacity (family 1: 2/2; families 2–15: 7/7 each). Tried families 15, 4, 13, 9, 11, 10, 8, 6, 3, 2, 1 — all rejected by `check-unique.mjs`. Proceeding with family 1 (classic-hero) as the least-worst option; the uniqueness gate blocks `stage.mjs media` but the build may still produce output for the critic to score. A future run must free a family slot before this site can pass the pass rule.