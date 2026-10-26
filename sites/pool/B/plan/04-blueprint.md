# Blueprint: pool-B (Clear Reading Pool Co.)

## Round 1
Elevate: the story photos became gauge readings (test-pad colour edge + white reading card with gauge, e.g. "Filter 18 psi · ideal 10–20"), the break is now the "Visit report · after" card, and one motion idea runs through the page: numbers start out of range (coral) and settle into their ideal band: hero report on load (≤1.2 s), each story card on entry, the sticky rail log row by row (≥900, rail now actually sticks and fills the left half), break and footer pads fill left to right. Armed by app.js only, so JS-off and reduced motion show the settled state. Also: one action name "Get a written price", 5 h2 eyebrows removed, footer line "If a reading is missing, the visit is free.", hours nowrap + one column <640, buttons in Outfit 600 (mono kept for readings/phone digits), tick tool result drawn as a gauge, hatching removed from all frame gradients, gauge defaults fixed so each hero band sits at its own range. Contrast: muted #56656f on #f5f3ee ≈ 5.5:1, on #fff ≈ 6:1 (pass). Photos stay placeholder stubs (niche library), not touched.

## Round 0
Rebuilt the page around the signature. The hero is now a "Visit report" with 7 readings, each on a gauge with its ideal band (the markers slide into their bands in the intro). The services became a gauge ledger. The visit story is a sticky log that fills one line per step. Why: round 0 was blank because site CSS overrode the kit reveal and the stub photos were broken. Every hidden state now lives under `.sw-motion` only, the photo frames have water gradients, and the h1 names the trade and the city.

| # | id | tone | purpose | layout family | content | media | hooks | entrance |
|---|---|---|---|---|---|---|---|---|
| 1 | hero | t-paper | thesis: trade + city + "every reading shown" | split statement + report card over photo | h1, lead, CTA, open-now · years · Sample rating, 7-gauge sample report | hero-B1 | data-sw-signature | markers slide into their bands (≤1.2 s) |
| 2 | reader | t-accent (color band) | "what is my water doing?" | split checklist + photo | 6 symptoms, live result | cloudy-water | data-checklist | none |
| 3 | services | t-paper | all 8 services | ledger rows with mini gauge | services repeater | none | data-sw-signature, reveal-stagger | rows stagger, markers slide in |
| 4 | visit | t-deep | "what do I get for the money" | sticky rail + 4 steps (story) | log of 4, 4 steps | test-vials, salt-cell, filter-cartridge, equipment-pad | data-sw-signature | log fills per step (≥900), photo settle scrub |
| 5 | break | t-mid | rest | full-bleed .break | one line | clear-after | none | none |
| 6 | proof | t-light | trust | quote + masonry + rule band | rating gauge, 7 Sample reviews, guarantee, license, insured, years | none | data-sw-signature | none |
| 7 | price | t-mid | price objection | 2-up tool panel | estimator (proof.prices) + gallons calculator with gauge | none | data-estimator, data-gallons, data-sw-signature | none |
| 8 | area | t-deep | "do you come to me" | split form + photo | ZIP check, areas, hours table | orlando-neighborhood | data-zip | none |
| 9 | faq | t-paper | worries | sticky head + accordion | 5 Q&A | none | data-accordion | none |
| 10 | contact | t-mid | conversion | split copy + 4-step form | form, open-now, tel, email | none | data-lead | none |
| footer | footer | t-deep | close | pad strip + grid | 7 pads, disclaimer, credits | none | data-sw-signature | none |

Rhythm: 10 sections plus the footer. No 3 of the same tone in a row. Dark sections (visit, area, footer) never touch: break, mid and paper sit between them. 1 color band (reader), 1 full-bleed break. Hooks: checklist, estimator, zip, lead, accordion, signature. Neighbours never share a layout family. Exactly one #contact. Signature shows in hero, services, visit, proof, price and footer.

## Open issues
- Every photo in the niche library is a corrupt stub (122 bytes). The frames show water gradients, and the OG image falls back to a plain color.
