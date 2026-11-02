# Blueprint — consulting-B (Plain Figures Business Advisors)

| # | id | tone | purpose | layout | content | media | hooks | entrance |
|---|---|---|---|---|---|---|---|---|
| 1 | hero | t-light | Objection: "I don't have time" + primary conversion | tool-panel | Kicker, h1, proof line, cash runway check tool, phone | hero-B | data-sw-signature, data-cash-runway | text-rise |
| 2 | services | t-paper | Objection: "What do you actually do?" | grid-3 | All 8 services with blurbs | — | data-reveal-stagger | stagger |
| 3 | proof | t-deep | Objection: "They've never run anything" | split | 3 sample reviews with specific numbers | hands-calculator-receipts | data-reveal | text-rise + img-unclip |
| 4 | prices | t-paper | Objection: "It'll cost more than it fixes" | list-table | Sample price rows in grid format | — | data-estimator | text-rise |
| 5 | tools | t-light | Secondary conversion: price gap + reporting | stack-2col | Price gap worksheet + Reporting checklist | laptop-spreadsheet-blurred | data-price-gap, data-reporting-checklist | text-rise |
| 6 | area | t-accent | Objection: "Are you local?" | split-reverse | ZIP checker + areas list + hours | — | data-zip, data-open-now | text-rise |
| 7 | process | t-paper | Objection: "What do I walk away with?" | rail | First meeting agenda, what you bring/leave with | desk-notebook-plan | data-reveal | img-unclip |
| 8 | contact | t-light | Primary conversion | form-stack | Multi-step request form | — | data-lead | text-rise |
| 9 | footer | t-deep | Credits + disclaimer | stack | Disclaimer, credits, phone, hours | — | — | — |

## Rhythm gate check

- [x] 9 sections (8-12 range).
- [x] Hero is `calc(100svh - var(--header-h))`; next band (services) peeks in.
- [x] No 3 same tones in a row: light → paper → deep → paper → light → accent → paper → light → deep.
- [x] No two dark sections touching: deep at #3, next is paper; deep at #9 is last.
- [x] ≥ 1 t-deep (#3, #9). ≥ 1 color band (#6 t-accent).
- [x] ≥ 1 full-bleed .break: process section photo breaks the grid at ≥ 900px.
- [x] ≥ 3 data-hooks: data-cash-runway, data-price-gap, data-reporting-checklist, data-zip, data-lead, data-sw-signature.
- [x] ≥ 3 layout families: tool-panel, grid-3, split, list-table, stack-2col, split-reverse, rail, form-stack, stack. No neighbours share one.
- [x] Exactly one #contact. Every CTA points to #contact or tel:.
- [x] Required content: all 8 services ✓, area + ZIP ✓, hours/open-now ✓, sample reviews with Sample tag ✓, sample prices via estimator block ✓, footer with disclaimer + credits ✓.
- [x] Signature in every section listed in concept.json.signature.sections: hero, services, proof, prices, area, process, contact, footer.

## Open issues

- **Hero family collision:** All 15 hero families are at max capacity (7 each, except family 1 at 2/2). No available hero family exists for consulting-B. This blocks `stage.mjs render` permanently until another site is delivered or unreserved.
- **Horizontal overflow at 390px/320px:** The `.sample-tag` inside `.price-table td.mono` overflows because `table-layout: fixed` does not constrain inline content width sufficiently. The tag wraps but the cell still exceeds viewport. Requires either removing sample tags from table cells (moving them outside the table) or restructuring the price display as a non-table layout on mobile. Not fixable within current CSS constraints without redesigning the prices section.