# Blueprint — pinestraw-B

| #id | tone | purpose | layout family | content (tokens) | media keys | hooks | entrance |
|---|---|---|---|---|---|---|---|
| hero | t-paper | Trade + town + price + counter entry | mosaic-grid | h1 "Pine straw counted by the bale in {{biz.city}}", lead, sample price line, 5-tile mosaic with tally overlays | hero-B, process-shake-bale, process-spade-edge, hero-B-2, hero-B-3 | data-sw-signature="load-ticket", data-split="lines" | Line-mask h1 reveal; tally strokes draw; count-up on "35 sq ft" |
| zip-check | t-light | Confirm service area before commitment | single-col-narrow | ZIP checker input, aria-live result, prefill handoff | — | data-zip | Clip reveal |
| counter-story | t-paper | Prove the arithmetic; teach 35 sq ft/bale | pinned-story | Bale counter tool (bed size → bales → sample range), live sketch, "Book this count" CTA | process-weeding | data-estimator, data-sw-signature="load-ticket" | Pinned on desktop ≥640; stacked cards on mobile |
| needle-guide | t-mid | Distinguish longleaf from short stuff | three-col-cards | Three tap-compare cards (longleaf/slash/loblolly): length, color life, slope hold, sample price band | hero-B-3 | data-tabs, data-sw-signature="load-ticket" | Stagger children |
| process | t-light | Show the order: rake, edge, weed, shake, tuck, blow | horizontal-strip | Six step cards with verb + photo + ticket strip showing step count | process-rake-out, process-spade-edge, process-weeding, process-shake-bale, hero-B-2, hero-C-3 | data-reveal-stagger, data-sw-signature="load-ticket" | Stagger 60 ms per card |
| services | t-paper | List every service with blurb and quote link | two-col-grid | All 9 services via repeater, each with [[quote]] CTA | — | data-reveal, data-sw-signature="load-ticket" | Clip reveal per card |
| reviews | t-deep | Social proof with counted-bale trust signals | three-col-cards | Top 3 reviews via repeater, sample rating line, guarantee | — | data-reveal-stagger, data-sw-signature="load-ticket" | Stagger children |
| pricing | t-accent | Sample price ranges without hiding them | single-col-wide | Price table from proof.prices via repeater, sample label prominent | — | data-reveal, data-sw-signature="load-ticket" | Slide up |
| contact | t-paper | Capture lead with full context | form-centered | Multi-step form (service → job details → when → contact), open-now status, phone + sms | — | data-lead, data-open-now, data-sw-signature="load-ticket" | Form step transitions |
| footer | t-deep | Disclaimer, credits, final ticket total | footer-grid | {{demo.disclaimer}}, [[credits]], nav anchors, hours | — | data-sw-signature="load-ticket" | Static |

## Rhythm gate check

- **Section count:** 10 sections. Pass (8–12 required).
- **Hero height:** `calc(100svh - var(--header-h))`; zip-check band peeks in below. Pass.
- **Tone sequence:** paper → light → paper → mid → light → paper → deep → accent → paper → deep. No three same in a row. No two dark touching (deep at #7, accent at #8 breaks it, paper at #9, deep at #10 is fine since accent and paper separate). Pass.
- **Required elements:** ≥1 t-deep (#7, #10). ≥1 color band (t-accent #8). ≥1 full-bleed .break (process horizontal-strip uses .break for edge-to-edge). Pass.
- **Data hooks:** data-sw-signature in hero, counter-story, needle-guide, process, services, reviews, pricing, contact, footer (9 occurrences). data-zip in zip-check. data-estimator in counter-story. ≥3 hooks. Pass.
- **Layout families:** mosaic-grid, single-col-narrow, pinned-story, three-col-cards, horizontal-strip, two-col-grid, form-centered, footer-grid. No neighbours share one. Pass.
- **Contact:** Exactly one #contact section. Every CTA points to #contact or tel:. Pass.
- **Required content:** All 9 services listed via repeater. ZIP checker present. Open-now in contact. Sample reviews with Sample tag. Prices only via sample price block with label. Footer has {{demo.disclaimer}} + [[credits]]. Signature in all sections listed in concept.json.signature.sections. Pass.

## Open issues
- Hero family 1 is at registry capacity (2/2). All 15 hero families are saturated in the design registry (100 entries). Proceeding with family 1 as the least-used option; uniqueness check will fail on this axis until registry slots free up. This is a known library-wide saturation issue, not a concept defect.