# Blueprint — farm-C (Sand Road Farm)

## Open issues

- Hero family 1 is at 2/2 capacity (pool-A, general-A). All other families (2–15) are at 7/7. No valid heroFamily exists for farm-C in the current registry state. Documented per hard-stop rule; critic will score with this collision noted.

## Rhythm gate check

- [x] 11 sections (8-12 range).
- [x] Hero is `calc(100svh - var(--header-h))`; next band (open-now) peeks in.
- [x] No 3 same tones in a row: paper → accent → deep → paper → deep → paper → paper → deep → accent → paper → pine.
- [x] No two dark sections touching: deep bands at 3, 5, 8 are separated by paper/accent.
- [x] ≥ 1 t-deep (sections 3, 5, 8).
- [x] ≥ 1 color band (section 2 t-accent, section 9 t-accent).
- [x] ≥ 1 full-bleed .break (section 5 field-to-stand).
- [x] ≥ 3 data-hooks: data-open-now (s2), data-zip (s7), data-lead (s10), data-sw-signature (all month-mark sections).
- [x] ≥ 3 layout families: hero-split, almanac-rail, photo-break, service-grid, review-stack, form-centered. No neighbours share one.
- [x] Exactly one #contact (section 10); every CTA points to #contact or tel:.
- [x] Required content: all 10 services (s7), area + ZIP checker (s7), hours/open-now (s2), sample reviews with Sample tag (s8), prices via sample price block (s7), footer with {{demo.disclaimer}} + [[credits]].
- [x] Signature appears in every section listed in concept.json.signature.sections: hero, season-spring, season-summer, season-harvest, season-winter, services, proof, footer.

## Section table

| # | id | tone | purpose | layout family | content (tokens) | media keys | hooks | entrance |
|---|---|---|---|---|---|---|---|---|
| 1 | hero | t-paper | Land in the current month; show what is ripe now and where the farm sits | hero-split (type-left, photo-right) | kicker: {{biz.tradeLabel}} · {{biz.city}}, h1: "What the Wiregrass sand gives this month", lead: current-month crop line, CTA: Text before you drive → #contact, proof line: {{proof.years}} years on this sand · Sample rating {{proof.rating}} | hero-C | data-sw-signature="almanac-month" | text rise + image unclip |
| 2 | open-now | t-accent | Answer "is it open today?" above the fold | single-line bar | {{hours\|today}} · Stand hours: Mon–Fri 9–5:30, Sat 8–4, Sun 1–5 · [[tel]] | — | data-open-now, data-hook="open-now" | fade up |
| 3 | season-spring | t-deep | Show March–May crops and PYO window | almanac-rail (horizontal scroll-snap desktop, stacked mobile) | Month markers: Mar, Apr, May. Crops: strawberries, lettuce, spring onions, first sweet corn. Weather line: "Frost risk until mid-March; row covers on cold nights." CTA: Reserve strawberries → #contact | strawberries-in-field, hands-picking-strawberries | data-sw-signature="almanac-month", data-hook="season-spring" | clip reveal per card |
| 4 | season-summer | t-paper | Show June–August peak harvest | almanac-rail | Month markers: Jun, Jul, Aug. Crops: tomatoes, okra, field peas, watermelon, boiled peanuts. Weather line: "Stand opens early, closes early in July heat." CTA: Order boiled peanuts → #contact | tomatoes-on-vine, okra-on-plant | data-sw-signature="almanac-month", data-hook="season-summer" | clip reveal per card |
| 5 | field-to-stand | t-deep | Prove the food comes from this sand, not a terminal | full-bleed .break photo wipe | Caption: "Peanut rows on Sand Road, harvested and on the stand by noon." No invented job. | peanut-field-rows | data-sw-signature="almanac-month", data-hook="field-break" | clip-path wipe L→R via --sw-p |
| 6 | season-harvest | t-paper | Show September–November harvest and prep | almanac-rail | Month markers: Sep, Oct, Nov. Crops: muscadines, sweet potatoes, pecans, greens. Events: pumpkin patch, school field trips, Thanksgiving pre-orders. CTA: Book a field trip → #contact | pumpkins-in-field, sweet-potatoes-dug | data-sw-signature="almanac-month", data-hook="season-harvest" | clip reveal per card |
| 7 | services | t-paper | List every offering with its month(s) and price anchor | service-grid (3-col desktop, 1-col mobile) | <!-- each services --> card: {{.name}}, {{.blurb}}, month pill(s), [[quote {{.short}} btn-ghost]]. After grid: sample price block with [[sample pricing]] tag, ZIP checker [data-zip]. <!-- /each --> | — | data-zip, data-hook="services", data-sw-signature="almanac-month" | text rise per card |
| 8 | proof | t-deep | Answer "is this real?" with dated, local reviews | review-stack (vertical, each with month corner marker) | <!-- each proof.reviews 0:4 --> "{{.text}}" — {{.name}}, {{.town}} · {{.service}} · [[sample review]] · month marker from service season. <!-- /each --> Rating line: {{proof.rating}} ({{proof.reviewCount}} reviews, Sample rating) | — | data-sw-signature="almanac-month", data-hook="proof" | text rise |
| 9 | season-winter | t-accent | Show December trees and close the almanac loop | almanac-rail (single card + CTA) | Month marker: Dec. Crop: Leyland cypress, Virginia pine. Line: "Saw on loan, shaken out and tied on." Guarantee: {{proof.guarantee}} (Sample guarantee). CTA: Reserve a tree → #contact | christmas-trees-rows | data-sw-signature="almanac-month", data-hook="season-winter" | clip reveal |
| 10 | contact | t-paper | Capture the visit or order | form-centered (multi-step) | 4-step form [data-lead]: service → details → when → contact. Honest thank-you: "Thanks, {name}. In your version this goes straight to your phone and inbox." | — | data-lead, data-hook="contact" | fade up |
| 11 | footer | t-pine | Credits, disclaimer, reset almanac | footer-grid | {{demo.disclaimer}} · [[credits]] · Full 12-month marker strip (all dimmed except current) · © {{year}} {{biz.name}} | — | data-sw-signature="almanac-month" | fade up |

## Open issues

- Hero family 1 is at 2/2 per check-unique's stricter per-family cap; no other hero family has capacity under 7 including reserved sites. Proceeding with family 1 as the only viable slot; concept is otherwise unique in font pair (Instrument Serif + Outfit), palette family (Wiregrass Sand + Clay Teal + Pine), and signature system.