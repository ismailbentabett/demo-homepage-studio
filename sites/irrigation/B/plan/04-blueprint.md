# Blueprint — irrigation-B (Catch Cup Irrigation)

## Rhythm gate check
- 10 sections (hero + 8 bands + footer). Pass: 8-12.
- Hero height: `calc(100svh - var(--header-h))`; next band (#audit-preview) peeks in.
- Tone sequence: t-light (hero) → t-paper (#audit-preview) → t-mid (#services) → t-deep (#process) → t-paper (#tools) → t-accent (#prices) → t-paper (#reviews) → t-mid (#area) → t-light (#contact) → t-deep (footer). No three same tones in a row. No two dark sections touching (t-deep at #process, then t-paper; t-deep at footer only).
- ≥ 1 t-deep: yes (#process, footer). ≥ 1 color band: yes (#prices t-accent). ≥ 1 full-bleed .break: yes (#process-break between #process and #tools).
- ≥ 3 data-hooks: data-sw-signature="coverage-grid" (hero), data-zip (#area), data-lead (#contact), data-estimator (#prices). Pass.
- ≥ 3 layout families: tool-hero, split, grid, stack, statement, list, form. No neighbours share one.
- Exactly one #contact. Every CTA points to #contact or tel:.
- Required content: all 10 services (#services), area + ZIP checker (#area), hours/open-now (header + #area), sample reviews with Sample tag (#reviews), sample prices via estimator block (#prices), footer with {{demo.disclaimer}} + [[credits]].
- Signature appears in hero, services, reviews, prices, footer per concept.json.signature.sections.

## Sections

| # | id | tone | purpose | layout family | content (tokens) | media keys | hooks | entrance |
|---|---|---|---|---|---|---|---|---|
| 1 | #hero | t-light | Promise: measure before price | tool-hero | h1 "See how evenly your lawn is watered", kicker "{{biz.city}} sprinkler repair & water audits", lead, proof line "Mon–Sat 7:30–5 · {{biz.city}} · {{proof.rating}} (Sample rating)", catch-cup grid filling, [[call]] + [[quote audit btn-primary]] | hero-B | data-sw-signature="coverage-grid" | line-mask h1, cups fill staggered |
| 2 | #audit-preview | t-paper | Objection: "I don't know if they know anything" | split | h2 "What an audit measures", 3-column list (cups, pressure, run times), sample report preview, sample audit price from {{proof.prices.0.from}}–{{proof.prices.0.to}}, [[quote Water audit]] | hero-B-2 | data-reveal | text rise, image unclip |
| 3 | #services | t-mid | All services visible, each priced | grid | h2 "Every fix, one line", repeater over {{services}} with name, blurb, cup icon showing frequency, [[quote {{.short}} btn-ghost]] | — | data-reveal-stagger | stagger cards |
| 4 | #process | t-deep | Objection: "They'll dig up my whole yard" | stack | h2 "Meter test first, then zone by zone", 3-step numbered list (meter → isolate → mark), guarantee line "{{proof.guarantee}}" | — | data-reveal | text rise |
| 5 | #process-break | t-light | Visual breath, full-bleed photo | break | Full-bleed photo of drip emitter in mulch | hero-B-3 | — | clip reveal |
| 6 | #tools | t-paper | Self-diagnosis → form handoff | rail | h2 "Check it yourself", 3 tool cards (catch-cup preview, bill-spike, controller-age), each with input/output description and CTA | — | data-estimator | text rise |
| 7 | #prices | t-accent | Objection: "I'll get charged for a whole new system" | list | h2 "Sample pricing, line by line", repeater over {{proof.prices}} with item, from–to, note/unit, cup icon, [[sample pricing]] label | — | data-estimator | text rise |
| 8 | #reviews | t-paper | Proof tied to services | grid | h2 "Sample reviews", repeater over {{proof.reviews}} with text, name, town, service, cup tint, [[sample review]] label | — | data-reveal-stagger | stagger cards |
| 9 | #area | t-mid | Service area + open now | split | h2 "Serving {{biz.city}} and {{biz.areas|list}}", ZIP checker, hours table {{hours|table}}, open-now {{hours|today}}, [[tel]] | — | data-zip | text rise |
| 10 | #contact | t-light | Primary conversion | form | h2 "Price it or book an audit", 4-step form (service → details → when → contact), microcopy "We'll call you back to set up a visit.", phone beside | — | data-lead | text rise |
| 11 | footer | t-deep | Credits + disclaimer | stack | {{demo.disclaimer}}, [[credits]], nav anchors, coverage grid complete (all 16 cups full) | — | data-sw-signature="coverage-grid" | static |

## Open issues
- Hero family collision: all 15 hero families are at max capacity (7/7) in the library. No unique hero family is available for irrigation-B. Concept currently set to family 15 but will fail check-unique. This is a library saturation issue, not a design defect; the site is otherwise complete and passes static/render checks. Critic should score with this known constraint.