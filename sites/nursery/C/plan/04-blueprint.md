# Blueprint — nursery-C (Fog Season Nursery)

## Section list

| # | id | tone | purpose | layout family | content (tokens) | media keys | hooks | entrance |
|---|---|---|---|---|---|---|---|---|
| 1 | hero | t-paper | Trade + town + season signal + guarantee | mosaic | kicker: `{{biz.tradeLabel}} · {{biz.city}}`; h1: "The valley's garden year"; lead: guarantee line; CTA: "Get a planting list" → #contact | hero-C, hero-C-2, hero-C-3, process-seed-tray | data-sw-signature="valley-almanac-ribbon" | fog lift + ribbon fade-in |
| 2 | calendar | t-fog | "What do I plant this month?" objection | split | Planting calendar tool input/output; current month highlighted on ribbon | — | data-hook="planting-calendar" | text rise |
| 3 | services-fog | t-paper | Bare-root fruit trees + pruning lessons (Jan-Feb) | stack | service cards: bare-root trees, pruning help; sample price ranges from `{{proof.prices.*}}` | hero-C | — | image unclip |
| 4 | services-bloom | t-bloom | Veg starts + perennials (Mar-May) | grid | service cards: veg starts, perennials, roses; sample prices | hero-C-2 | — | text rise |
| 5 | break | t-deep | Full-bleed visual pause; seasonal transition | break | caption: "Summer shade over a Modesto ranch yard" | hero-C-3 | — | image unclip |
| 6 | services-heat | t-paper | Shade trees + water-wise + succulents (Jun-Sep) | split | mature-size check tool; shade trees, water-wise, succulents cards; sample prices | hero-C-3 | data-hook="mature-size-check" | text rise |
| 7 | services-second | t-light | Soil, mulch, delivery, planting (Sep-Nov) | list | soil & mulch, delivery cards; sample delivery price range | process-seed-tray | — | image unclip |
| 8 | proof | t-deep | Trust: reviews, guarantee, years, license | rail | 3 sample reviews with Sample tag; guarantee line; `{{proof.years}}` years; license | — | data-hook="open-now" | text rise |
| 9 | area | t-paper | Delivery coverage + ZIP check | stack | ZIP checker; areas list from `{{biz.areas}}`; hours + open-now indicator | — | data-hook="zip-check" | text rise |
| 10 | contact | t-accent | Primary conversion: quote form | form | Multi-step form: What → Sizes → Delivery? → Info; prefilled by tools | — | data-hook="quote-form" | text rise |
| 11 | footer | t-deep | Disclaimer, credits, almanac reset | stack | `{{demo.disclaimer}}`; [[credits]]; almanac ribbon full year | — | — | — |

## Rhythm gate check

- [x] 11 sections (within 8-12).
- [x] Hero is `calc(100svh - var(--header-h))`; next band (calendar, t-fog) peeks in.
- [x] Never 3 same tones in a row: paper → fog → paper → bloom → deep → paper → light → deep → paper → accent → deep. No two dark touching (deep at #5, #8, #11 are separated by paper/light/paper/accent).
- [x] ≥1 t-deep (#5, #8, #11). ≥1 color band (t-accent #10, t-fog #2, t-bloom #4).
- [x] ≥1 full-bleed .break (#5).
- [x] ≥3 data-hooks: planting-calendar (#2), mature-size-check (#6), zip-check (#9), quote-form (#10), open-now (#8). data-sw-signature on hero (#1).
- [x] ≥3 layout families: mosaic (#1), split (#2, #6), stack (#3, #9), grid (#4), break (#5), list (#7), rail (#8), form (#10). No neighbours share one.
- [x] Exactly one #contact (#10). Every CTA above points to #contact or tel:.
- [x] Required content: all 9 services present across #3, #4, #6, #7; area + ZIP in #9; hours/open-now in #8; sample reviews with Sample tag in #8; sample prices via `{{proof.prices.*}}` tokens in service sections; footer has `{{demo.disclaimer}}` + [[credits]].
- [x] Signature (valley-almanac-ribbon) appears in sections listed in concept.json.signature.sections: hero, services (all four), tools (calendar, mature-size), proof, contact, footer.

## Open issues
- Hero family collision: all hero families 2–15 are at the library max (7 uses); family 1 collides with sibling nursery-A draft concept. Cannot pass `check-unique --concept` without a new family becoming available or a sibling releasing theirs. Concept remains at heroFamily 1 as placeholder; render stage blocked until resolved.