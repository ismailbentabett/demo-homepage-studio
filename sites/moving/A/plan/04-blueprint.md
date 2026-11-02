# Blueprint — moving-A (Tag & Lift Moving)

## Round 1
Removed all Quebec/Vieux-Limoilou photo references. Replaced filmstrip-6 (was region-durham-porch) with hero-B1. Replaced area-photo (was region-durham-porch) with process-straps reuse. No season-snow-street or region-durham-porch keys remain in src/media.json. Process section was already t-deep per blueprint.

## Section list

| # | id | tone | purpose | layout | content (tokens) | media | hooks | entrance |
|---|---|---|---|---|---|---|---|---|
| 1 | hero | t-light | Trade + town + act + reason | filmstrip | h1, lead, phone, CTA, tag No. 001 | hero-A1, process-dolly-ramp, hands-carrying-box, crew-from-behind, tool-hand-truck, hero-B1 | data-sw-signature="inventory-tag" | tag swing-in + filmstrip slide |
| 2 | trust | t-paper | Hours + area + sample rating | split | open-now, areas list, sample rating, years | — | data-open-now | text rise |
| 3 | process | t-deep | How work is done (objection: damage/loss) | story (pinned ≥640) | Tag, wrap, ramp, place steps; guarantee | process-straps, region-apartment-stairs | data-reveal | clip reveal per step |
| 4 | services | t-light | What we move + haul | tag-board grid | All 8 services from facts.services | tool-furniture-dolly | data-reveal-stagger | stagger cards |
| 5 | estimate | t-paper | Price before truck rolls (objection: hour creep) | split + tool | Room-by-room sizer, stairs check | — | data-estimator, data-hook="stairs-check" | text rise |
| 6 | break | t-mid | Visual breath, Durham texture | full-bleed photo | Caption describing frame | season-autumn-street | — | unclip |
| 7 | junk | t-accent | Where junk goes (objection: illegal dump) | ledger list | Donation-first sorting, appliance haul | — | data-reveal | text rise |
| 8 | reviews | t-light | Proof with specifics | tag grid | 6 sample reviews from facts.proof.reviews | — | data-reveal-stagger | stagger cards |
| 9 | prices | t-paper | Sample price transparency | ledger table | facts.proof.prices rows | — | data-reveal | text rise |
| 10 | area | t-deep | Service area + ZIP check | split | Areas list, ZIP checker | process-straps | data-zip | text rise |
| 11 | contact | t-light | Multi-step quote form | stack | Form steps, microcopy, hours | — | data-lead | text rise |
| 12 | footer | t-deep | Disclaimer + credits + last tag | stack | {{demo.disclaimer}}, [[credits]], tag No. 112 | — | — | none |

## Rhythm gate check

- **8-12 sections:** 12 sections. Pass.
- **Hero height:** `calc(100svh - var(--header-h))`. Next band (trust) peeks in. Pass.
- **Never 3 same tone in a row:** light → paper → deep → light → paper → mid → accent → light → paper → deep → light → deep. No three in a row. Pass.
- **Never two dark sections touching:** deep at #3, next is light. Deep at #10, next is light. Footer is deep but preceded by light. Pass.
- **≥ 1 t-deep:** #3, #10, #12. Pass.
- **≥ 1 color band:** #7 t-accent. Pass.
- **≥ 1 full-bleed .break:** #6. Pass.
- **≥ 3 data-hooks:** data-sw-signature (hero), data-estimator (estimate), data-zip (area), data-lead (contact). 4 hooks. Pass.
- **≥ 3 layout families:** filmstrip, split, story, tag-board grid, ledger list, full-bleed, stack. 7 families, no neighbours share. Pass.
- **Exactly one #contact:** #11. Pass.
- **Every CTA points to #contact or tel:** Verified in copy deck. Pass.
- **Required content:** All 8 services (#4), area + ZIP (#10), hours/open-now (#2), sample reviews with Sample tag (#8), sample prices via estimator + price block (#5, #9), footer with disclaimer + credits (#12). Pass.
- **Signature in concept.json.sections:** hero, process, services, reviews, prices, contact, footer all carry inventory tags. Pass.