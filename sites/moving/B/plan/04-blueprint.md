# Blueprint — moving-B

## Rhythm gate check

- 10 sections (hero + 8 bands + footer). Hero is `calc(100svh - var(--header-h))`; next band (move-sizer) peeks in.
- Tone sequence: deep → paper → deep → accent → paper → deep → paper → light → deep → footer(deep). No three same in a row. No two dark touching (deep→paper→deep→accent→paper→deep→paper→light→deep).
- ≥ 1 t-deep (hero, process, reviews, contact, footer). ≥ 1 color band (t-accent: where-it-goes). ≥ 1 full-bleed .break (process-break photo).
- ≥ 3 data-hooks: data-zip, data-estimator (move-sizer + junk-gauge), data-sw-signature="load-meter". Also data-accordion (FAQ), data-lead (form).
- ≥ 3 layout families: sticky-photo-stack (hero), tool-panel (move-sizer, junk-gauge), split-bars (hours-story), grid-cards (services), ledger-list (reviews, prices), stack (contact). No neighbours share one.
- Exactly one #contact form. Every CTA points to #contact or tel:.
- Required content: all 9 services via repeater, area + ZIP checker, hours/open-now, sample reviews with Sample tag, sample prices via estimator block, footer with {{demo.disclaimer}} + [[credits]].
- Signature in every section listed in concept.json.signature.sections: hero, move-sizer, junk-gauge, process, reviews, prices, contact, footer.

## Sections

| # | id | tone | purpose | layout family | content (tokens) | media keys | hooks | entrance |
|---|---|---|---|---|---|---|---|---|
| 1 | hero | t-deep | First 5s: trade, town, promise, tool entry | sticky-photo-stack | Kicker: "Fort Collins movers & junk haul-away". h1: "The number before the truck rolls". Lead: "Size your move or your pile in three taps and see a sample range." Proof line: "{{hours\|today}} · {{biz.city}} · {{proof.rating}} ([[sample rating]])". [[call]] button. | hero-B1 | data-sw-signature="load-meter" | Text rises; photo unclip; truck outline draws |
| 2 | move-sizer | t-paper | Objection: hour-creep fear. Tool: room-by-room sizer | tool-panel | h2: "Size your move". Move sizer tool (home type, stairs, boxes). Output: crew size, truck, sample hour range, sample price range from {{proof.prices.0}}–{{proof.prices.1}}. Ledger line types in. "Hold this number" → #contact. | — | data-estimator, data-service | Tool panel slides up; ledger line types in |
| 3 | junk-gauge | t-deep | Objection: how much truck is my pile? Tool: truck-fill gauge | tool-panel | h2: "Size your junk pile". Truck-fill gauge (tap items). Output: truck fraction, sample load range from {{proof.prices.3}}–{{proof.prices.5}}. Ledger line. "Send a photo" → #contact. | tool-hand-truck | data-estimator | Gauge fills on interaction; ledger types in |
| 4 | process-break | t-paper | Objection: damage fear. Show real work | break (full-bleed) | Full-bleed photo of strapped load inside truck. Caption: "Straps ratcheted, pads on every surface." | process-straps | — | Photo unclip |
| 5 | hours-story | t-accent | Objection: standing in empty apt at 9pm. Show where hours go | split-bars | h2: "Where the hours go". Three bars: Load · Drive · Unload. Sample 4h move breakdown. Stairs/distance inputs adjust bars. Ledger line. | — | data-estimator | Bars grow on scroll; text rises |
| 6 | services | t-paper | All services visible, each with CTA | grid-cards | h2: "What we move and haul". <!-- each services --> card with {{.name}}, {{.blurb}}, [[quote {{.short}} btn-ghost]]. <!-- /each --> | — | — | Cards stagger in |
| 7 | where-it-goes | t-deep | Objection: junk dumped in ditch. Donation → recycling → landfill | ledger-list | h2: "Where it goes". Three ledger entries: "Donation drop (furniture bank)", "Metal & electronics recycling", "Landfill (last)". Each with icon. | — | — | Ledger lines type in |
| 8 | reviews | t-paper | Social proof with specific towns, times, items | ledger-list | h2: "From the ledger". [[sample review]] tag. <!-- each proof.reviews 0:4 --> ledger entry: "{{.text}}" — {{.name}}, {{.town}} · {{.service}}. <!-- /each --> | — | — | Lines stagger in |
| 9 | prices | t-light | Sample pricing transparency | ledger-list | h2: "Sample ranges". [[sample pricing]] tag. <!-- each proof.prices --> ledger line: {{.item}} · {{.from}}–{{.to}} {{.unit}} · {{.note}}. <!-- /each --> Guarantee: "{{proof.guarantee}}" | — | — | Lines stagger in |
| 10 | area | t-paper | Service area + ZIP checker | stack | h2: "Where we work". "{{biz.city}} and {{biz.areas\|list}}". ZIP checker. Open-now: {{hours\|today}}. | — | data-zip, data-open-now | Text rises |
| 11 | contact | t-deep | Primary conversion. Multi-step form | stack | h2: "Hold a date". Form steps: service → job details → when → contact. Microcopy: "We'll call you back to set up a visit." Hours beside phone. | — | data-lead | Form steps slide |
| 12 | footer | t-deep | Disclaimer, credits, last ledger line | stack | {{demo.disclaimer}}. [[credits]]. Last ledger line: "LEDGER COMPLETE · {{biz.short}}". | — | — | Static |

## Open issues

None.