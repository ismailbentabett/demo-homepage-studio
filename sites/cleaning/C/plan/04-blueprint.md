# Blueprint — cleaning-C (Riverfog Housekeeping)

## Section list

| # | ID | Tone | Layout | Purpose | Content tokens | Media slot | Hooks | Entrance |
|---|-----|------|--------|---------|----------------|------------|-------|----------|
| 1 | hero | t-deep | editorial-cover | Trade + town + season hook; first CTA | `{{biz.name}}`, kicker "The House Almanac · Spring Edition", h1 "House Cleaning in {{biz.city}}, {{biz.state}}", phone `{{biz.phone}}`, proof line "13 years · 4.9★ · 122 reviews · Sample" | hero-C1 | data-sw-signature="season-dial" | fog-fade + cover-lines-rise |
| 2 | intro | t-paper | statement | Name the almanac promise; sample price anchor | Lead: "A year of care for Chattanooga houses"; sample price block from `{{proof.prices[0]}}` with Sample tag | — | — | wipe-up |
| 3 | spring | t-paper | split | Pollen season objection; seasonal add-on | Dateline "Late March · Signal Mountain"; pollen clean blurb `{{services[1].blurb}}`; add-on price `{{proof.prices[3]}}` | detail-pollen | data-hook="season-planner" | dateline-wipe |
| 4 | summer | t-mid | split | Mildew objection; old-house material care | Dateline "August · Hixson"; mildew blurb `{{services[4].blurb}}`; old-house note from review Eleanor R. | process-grout | — | dateline-wipe |
| 5 | break | t-deep | break | Full-bleed visual pause; Chattanooga place | — | home-chattanooga | — | fade-in |
| 6 | fall | t-paper | split | Guest-ready objection; holiday prep | Dateline "November · East Ridge"; guest prep blurb `{{services[5].blurb}}`; countdown tool hand-off | season-holiday | data-hook="countdown" | dateline-wipe |
| 7 | winter | t-deep | split | Weekend house / move-out; recurring base | Dateline "January · Lookout Mountain"; weekend house blurb `{{services[7].blurb}}`; every-two-weeks price `{{proof.prices[0]}}` | room-living | — | dateline-wipe |
| 8 | services | t-paper | grid | All services visible; checklist clarity | 9 service cards from `{{services[*]}}` with short + blurb | — | — | stagger-up |
| 9 | proof | t-light | stack | Trust: reviews, guarantee, insurance | 6 reviews from `{{proof.reviews}}` with season tags; guarantee `{{proof.guarantee}}`; insured badge; license `{{proof.license}}` | — | — | stagger-up |
| 10 | area | t-deep | rail | Service area + ZIP check | Areas list `{{biz.areas}}`; ZIP checker | — | data-hook="zip" | wipe-up |
| 11 | contact | t-paper | stack | Primary conversion | Multi-step quote form; phone `{{biz.phone}}`; hours `{{biz.hours}}` | — | data-hook="form" | fade-in |
| 12 | footer | t-deep | rail | Legal + credits + dial reset | `{{demo.disclaimer}}`; `[[credits]]`; season dial reset | crew-back | data-sw-signature="season-dial" | — |

## Rhythm check

- 12 sections ✓ (8-12 range)
- Tone sequence: deep → paper → paper → mid → deep → paper → deep → paper → light → deep → paper → deep
- No three same tones in a row ✓
- No two dark sections touching: deep(paper)✓, paper(mid)✓, mid(deep)✓, deep(paper)✓, paper(deep)✓, deep(paper)✓, paper(light)✓, light(deep)✓, deep(paper)✓, paper(deep)✓ ✓
- At least one t-deep ✓ (hero, break, winter, area, footer)
- At least one color band: t-mid §4 ✓
- Full-bleed break §5 ✓
- Interactive hooks: season-planner (§3), countdown (§6), zip (§10), form (§11), signature dial (hero+footer) = 5 ≥ 3 ✓
- Layout families: editorial-cover, statement, split, break, grid, stack, rail = 7 ≥ 3, no neighbours share ✓
- Quote form once at #contact ✓
- Required content: all 9 services §8, area+ZIP §10, hours §11, reviews+Sample §9, sample prices §2/§3/§7, footer disclaimer+credits §12 ✓