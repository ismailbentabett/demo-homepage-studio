# Blueprint: well-A

## Open issues
- Hero family 1 is at library cap (2/2). All 15 hero families (1-15) are at or over their library-wide maximum. No concept can pass `check-unique.mjs --concept` for well-A. Build and static checks succeed; screenshots captured. Stage cannot advance to render because `stage.mjs render` enforces uniqueness. This requires either releasing existing reservations, expanding MAX_HERO_USES in tools/lib/unique.mjs, or assigning well-A to a future slot when capacity opens. Hard stop per BUILD-CONTRACT: same check fails 4+ times, documented here, finish.

## Section table

| #id | tone | purpose | layout family | content (tokens) | media keys | hooks | entrance |
|---|---|---|---|---|---|---|---|
| hero | t-deep | Trade + town + act | full-bleed-photo | h1 "Water Well Drilling for the South Plains", kicker "{{biz.tradeLabel}} · {{biz.city}} & {{biz.areas.0}}", proof line "22 years · Sample rating 4.8 · Written drill log", CTA [[call]] | hero | data-sw-signature | text-rise |
| triage | t-paper | Objection: guessing | split-left-text | h2 "No water? Check this first.", triage tool inputs, output likely cause, CTA "Call with this reading" | — | data-hook="triage" | text-rise |
| process | t-deep | Objection: drill and miss | strata-stack | h2 "How a well gets drilled here", 4-step cards (Site, Drill, Case, Test), each with depth annotation | process-1, process-2 | data-hook="process" | clip-reveal |
| services | t-paper | Every service listed | card-grid-3 | <!-- each services --> card with name, blurb, depth note, [[quote .short]] | — | data-hook="services" | text-rise |
| pricing | t-signal | Objection: cost | estimator-sheet | h2 "What it runs", estimator tool, sample price block from proof.prices, CTA "Price it" | — | data-hook="estimator" data-sw-signature | text-rise |
| reviews | t-paper | Trust + sample proof | testimonial-rail | h2 "From your neighbors", <!-- each proof.reviews 0:4 --> card with text, name, town, service, [[sample review]] | — | data-hook="reviews" | clip-reveal |
| area | t-deep | Objection: do you come here | zip-checker | h2 "We work in {{biz.city}} and {{biz.areas|list}}", ZIP checker, hours, open-now | — | data-hook="zip" | text-rise |
| contact | t-paper | Convert | form-centered | h2 "Get a number", multi-step form, guarantee line, phone | — | — | text-rise |
| footer | t-deep | Legal + credits | footer-cols | disclaimer, credits, nav links | — | — | — |

## Rhythm gate check
- 9 sections (8-12): PASS
- Hero calc(100svh - var(--header-h)), next band peeks: PASS (CSS enforces)
- No 3 same tone in a row: deep-paper-deep-paper-signal-paper-deep-paper-deep → PASS
- No two dark sections touching: PASS (paper/signal between every deep)
- ≥1 t-deep: 4 (hero, process, area, footer) → PASS
- ≥1 color band: pricing (t-signal) → PASS
- ≥1 full-bleed .break: between services and pricing → PASS
- ≥3 data-hooks: triage, process, services, estimator, reviews, zip (6) → PASS
- data-sw-signature: hero, pricing (2) → PASS (≥1 required)
- ≥3 layout families: full-bleed-photo, split-left-text, strata-stack, card-grid-3, estimator-sheet, testimonial-rail, zip-checker, form-centered, footer-cols (9) → PASS, no neighbours share
- Exactly one #contact: PASS
- Every CTA → #contact or tel:: PASS
- Required content: all 9 services via repeater, area + ZIP checker, hours/open-now, 4 sample reviews with tag, prices via estimator + sample block, footer with disclaimer + credits → PASS
- Signature in concept.json.signature.sections [hero, process, services, reviews, contact]: hero has data-sw-signature, process has strata column, services have depth annotations, reviews have depth markers, contact has bottom-of-borehole marker → PASS