# Blueprint — nursery-B

| # | id | tone | purpose | layout | content (tokens) | media | hooks | entrance |
|---|---|---|---|---|---|---|---|---|
| 1 | hero | t-light | Tool-first: answer "will it live" before the drive | tool-first | kicker `{{biz.tradeLabel}} · {{biz.city}}, {{biz.state}}`; h1 "Know before you drive"; lead; yard-check tool (sun/soil/water/wind); guarantee line | hero photo right on desktop | data-hook="yard-check" data-sw-signature="sun-dial" | text rise + dial trace |
| 2 | services | t-paper | What grows here, by sun hours | grid-3 | all 10 services from facts.services; each card has mini sun-dial showing sun need | none | data-hook="service-grid" | cards unclip stagger |
| 3 | proof | t-light | Trust: real yards, real questions | split | 3 sample reviews from facts.proof.reviews; Sample tag; star rating; town + service | break photo left | data-hook="reviews" | text rise |
| 4 | prices | t-accent | Sample pricing by pot size | ring-table | facts.proof.prices rows; pot-size rings on dial; Sample label | none | data-hook="price-rings" | rings draw in |
| 5 | area | t-deep | Delivery across Polk County | stack | areas list; ZIP checker; delivery blurb | none | data-hook="zip-check" | text rise |
| 6 | photo-check | t-light | "Text us a photo" for sick plants | split-right | Photo check service blurb; sms: button; what we look at list | detail-leaf-water right | data-hook="photo-check" | image unclip |
| 7 | natives | t-paper | Sand-proof plants | statement | Florida native plants blurb; coontie/muhly/beautyberry; review quote | none | — | text rise |
| 8 | delivery | t-light | Plants set in and watered | rail | Delivery and planting blurb; watering plan; guarantee repeat | delivery-plants-truckbed | — | image unclip |
| 9 | hours | t-mid | Open now / today's hours | dial-hours | facts.biz.hours rendered as sun arc; open-now pill; phone | none | data-hook="open-now" | arc lights |
| 10 | contact | t-deep | Get a plant list or price | form | multi-step quote form (What/Where/When); thank-you text | none | data-hook="quote-form" | form steps fade |
| 11 | footer | t-light | Credits + disclaimer | stack | {{demo.disclaimer}}; [[credits]]; dial reset to dawn | none | — | — |

## Rhythm gate check
- Sections: 11 (within 8-12). Hero is `calc(100svh - var(--header-h))`; services band peeks in.
- Tone sequence: light → paper → light → accent → deep → light → paper → light → mid → deep → light. No 3 same in row. No two dark touching (deep at #5 and #10 separated by light/paper/light/mid).
- ≥1 t-deep: #5, #10. ≥1 color band: #4 (t-accent). ≥1 .break: #3 proof photo.
- ≥3 data-hooks: yard-check, service-grid, reviews, price-rings, zip-check, photo-check, open-now, quote-form (8 total). One is data-sw-signature="sun-dial" in hero.
- ≥3 layout families: tool-first, grid-3, split, ring-table, stack, split-right, statement, rail, dial-hours, form. No neighbours share one.
- Exactly one #contact (#10). Every CTA points to #contact or tel:/sms:.
- Required content: all services (#2), area+ZIP (#5), hours/open-now (#9), sample reviews with Sample tag (#3), sample prices via ring table (#4), footer with disclaimer+credits (#11).
- Signature sections per concept.json: hero, services, prices, hours, footer — all present.

## Open issues
- **Hero family uniqueness collision (hard stop):** All 15 hero families in `data/design-registry.json` are at or exceed their max usage (families 2–15 at 7/7, family 1 at 3/2 including sibling nursery-A draft). `node tools/check-unique.mjs nursery-B --concept` fails regardless of which family is chosen. This is a library-wide capacity problem that cannot be resolved by changing one site's concept. The build, static check, and render capture all pass clean; only `stage.mjs render` is blocked by this gate. Awaiting registry limit increase or slot release from another site before staging can complete.