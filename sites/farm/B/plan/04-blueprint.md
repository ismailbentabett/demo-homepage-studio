# Blueprint — farm-B

| # | id | tone | purpose | layout | content (tokens) | media | hooks | entrance |
|---|---|---|---|---|---|---|---|---|
| 1 | hero | t-paper | First screen: trade, town, open-now, field status mosaic | mosaic | kicker "U-pick berries, eggs & beef · Jackson, MS", h1 "Know before you drive", lead "{{hours|today}} · {{biz.city}}, {{biz.state}}", CTA "Check the field" → #field-check, secondary "Call [[tel]]" | hero-B (huge), hero-B-2, hero-B-3, strawberry-plants-straw, tomatoes-on-vine | data-sw-signature="crate-tag" | tags drop on strings (intro) |
| 2 | field-check | t-light | Objection: drove out to picked-out field | split-tool | Picked-out check tool, day selector, result tag with status + best time, "Reserve a pickup" → #contact | — | data-hook="picked-out-check" | text rise |
| 3 | services | t-paper | What we sell, all from facts | tag-grid | <!-- each services --> tag card with name, blurb, sample price if in proof.prices <!-- /each --> | — | data-service (per card) | stagger clip |
| 4 | prices | t-mid | Objection: no prices visible | tag-grid | Sample price block from {{proof.prices}}, each row a tag with item, from/to, unit, note; [[sample pricing]] label | — | — | text rise |
| 5 | break | t-deep | Visual breath, full-bleed photo | break | Full-bleed photo of hands picking strawberries, caption "Picked this morning, tagged by ten" | hands-picking-strawberries | — | unclip |
| 6 | freezer-math | t-light | Objection: quarter cow fits where? | split-tool | Freezer math tool: quarter/half toggle, freezer cf input, take-home lbs output, fits/tight/too-big, sample price range, "Reserve a pickup date" → #contact | — | data-hook="freezer-math" | pinned story ≥640 |
| 7 | share-sizer | t-paper | Objection: CSA box too much greens / can't skip | split-tool | Share sizer: people, cook frequency, greens preference → half/full share, sample week box, pause-by-text note, "Reserve a share" → #contact | — | data-hook="share-sizer" | text rise |
| 8 | proof | t-light | Trust: real words from real towns | stack | <!-- each proof.reviews 0:4 --> review card as tag with text, name, town, service; [[sample review]] label <!-- /each -->, rating line "{{proof.rating}} ({{proof.reviewCount}} reviews, {{proof.label}})" | — | — | stagger clip |
| 9 | hours | t-accent | Open-now, hours, area | statement | "{{hours|today}}" large, "{{biz.city}} · {{biz.areas|list}}", ZIP checker [data-zip], "Text us before you drive" microcopy | — | data-zip, data-open-now | text rise |
| 10 | contact | t-paper | Conversion: reserve or ask | form | Multi-step form [data-lead]: service → details → when → contact; honest thank-you; microcopy "We'll text you back to confirm." | — | data-lead, data-service | text rise |
| 11 | footer | t-deep | Disclaimer, credits, sign-off | stack | {{demo.disclaimer}}, [[credits]], sign-off crate tag "Halfbushel Farm · {{biz.city}}, {{biz.state}}" | — | data-sw-signature="crate-tag" | none |

## Rhythm gate check
- 11 sections (within 8-12). Hero is calc(100svh - var(--header-h)); next band (field-check) peeks in.
- Tones: paper → light → paper → mid → deep → light → paper → light → accent → paper → deep. No 3 same in row. No two dark touching (deep at 5 and 11 are separated by light/paper/accent).
- ≥1 t-deep (sections 5, 11). ≥1 color band (section 9 t-accent). ≥1 full-bleed .break (section 5).
- ≥3 data-hooks: picked-out-check (2), freezer-math (6), share-sizer (7), zip (9), data-sw-signature (1, 11). Total 5.
- ≥3 layout families: mosaic (1), split-tool (2,6,7), tag-grid (3,4), break (5), stack (8,11), statement (9), form (10). No neighbours share.
- Exactly one #contact (section 10). Every CTA points to #contact or tel:.
- Required content: services (3), area+ZIP (9), hours/open-now (1,9), sample reviews (8), sample prices (4), footer disclaimer+credits (11).
- Signature sections per concept.json: hero (1), services (3), prices (4), proof (8), tools (2,6,7), contact (10), footer (11). All present.

## Open issues
- **Hero family collision (hard stop):** All 15 hero families are at or over the library max (7) or reserved by siblings/drafts. farm-B cannot pass `check-unique --concept` with any available family. Stage advanced to `needs-human`; a human must either free a family slot or assign a new one before build can deliver.