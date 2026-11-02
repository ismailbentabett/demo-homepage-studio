# Blueprint — landclearing-B

| # | id | tone | purpose | layout | content (tokens) | media | hooks | entrance |
|---|---|---|---|---|---|---|---|---|
| 1 | hero | t-light | prove rate-per-acre before call | mosaic | h1, lead, proof line, ZIP input | hero-B, hero-B-2, hero-B-3, process-walk-woods | data-zip, data-sw-signature | hatch draw + fade |
| 2 | estimator | t-paper | sample price by ground class | split-stat | acres input, density picker, slope, range output | — | data-estimator, data-sw-signature | text rise |
| 3 | services | t-light | what we clear | grid-3 | all 9 services via repeater | — | data-service (prefill) | stagger cards |
| 4 | break | t-deep | visual pause, ground texture | full-bleed | caption only | hero-A-2 | — | unclip |
| 5 | prices | t-paper | sample rates per class | table | proof.prices repeater | — | data-sw-signature | text rise |
| 6 | process | t-light | how debris is handled | rail | mulch-in-place explanation | process-flag-tie | data-sw-signature | image unclip |
| 7 | reviews | t-mid | trust via sample reviews | stack | proof.reviews repeater | — | — | stagger |
| 8 | area | t-light | towns + ZIP check | split | biz.areas, zip checker | — | data-zip | text rise |
| 9 | contact | t-accent | form + phone | form-col | multi-step form, tel, hours | — | data-lead, data-open-now | text rise |
| 10 | footer | t-deep | disclaimer + credits | stack | demo.disclaimer, credits | — | — | — |

## Rhythm gate check
- 10 sections ✓ (8-12)
- Hero `calc(100svh - var(--header-h))`, next band peeks ✓
- No 3 same tone in a row: light → paper → light → deep → paper → light → mid → light → accent → deep ✓
- No two dark touching: deep at #4 followed by paper; deep at #10 is last ✓
- ≥1 t-deep (#4, #10) ✓
- ≥1 color band (t-accent #9) ✓
- ≥1 full-bleed .break (#4) ✓
- ≥3 data-hooks: data-zip (#1,#8), data-estimator (#2), data-sw-signature (#1,#2,#5,#6), data-lead (#9), data-open-now (#9), data-service (#3) ✓
- ≥3 layout families: mosaic, split-stat, grid-3, full-bleed, table, rail, stack, split, form-col ✓ (no neighbours share)
- Exactly one #contact (#9) ✓
- Required content: all services (#3), area+ZIP (#8), hours/open-now (#9), sample reviews (#7), sample prices via estimator+table (#2,#5), footer with disclaimer+credits (#10) ✓
- Signature in concept.json.signature.sections: hero(#1), estimator(#2), prices(#5), services(#3), process(#6) ✓

## Open issues
- Hero family collision: all 15 hero families are at library max (7) or reserved by sibling landclearing-A/C drafts. Current concept.json uses family 1 (side-by-side) which collides with pool-A, general-A and landclearing-C draft. No available family remains; staging to render with this known collision per hard-stop rule (4 consecutive check failures on uniqueness). Critic will score distinctiveness accordingly.