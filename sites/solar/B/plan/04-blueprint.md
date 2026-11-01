# solar-B · blueprint (fast)

| # id | tone | purpose | layout family | content (tokens) | media keys | hooks | entrance |
|---|---|---|---|---|---|---|---|
| 1 #top | t-deep | "their numbers were made up" → size it from my bill | split-50 | kicker {{biz.tradeLabel}} · {{biz.city}}, {{biz.state}}; h1; size tool (kWh → kW range, ring 1); call {{biz.phone}}; proof line {{hours|today}} · {{biz.areas.0}} · {{proof.rating}} Sample | hero (wiring, duotone + SVG callouts) | data-sw-signature (ring 1 + seam leader), data-hook="size" | h1 line mask, ring pop, leader draw |
| 2 #second | t-paper | "pushy pitch / I don't understand what I'm signing" → second opinion + questions checklist | sheet-margin | drawn SVG proposal with 6 rings + margin questions; checklist 8 Qs (rings fill on tick); [[quote Quote review]]; Sources strip | – (drawn) | data-hook="checklist" | sheet unclip, rings stagger |
| 3 #how | t-mid | "where does the size come from" → 4-sheet chain story | story-pin | 4 sheets: bill → roof tape → production band → range; rings 1-4; Sources strip | detail-roof (flat-roof) in sheet 2 | data-hook="story" | pinned scrub ≥ 640 (chain draws via --sw-p); stacked < 640 |
| 4 #services | t-paper | "do you do X" → all 8 services as a ledger | ledger | repeater services (name, blurb, [[quote]]); tile-roof note | tile (hero-B3) | – | rows rise (stagger) |
| 5 .break | t-deep | "local, measured from above" → pause + annotation | bleed | full-bleed rooftops with 3 drawn rings + caption | inline SVG roof plan (no photo) | data-hook="break" | clip unclip |
| 6 #inverter | t-paper | "inverter dies in July" → light reader | tool-split | tabs: 5 lights, drawn inverter face, meaning + can it wait, ring → hedge; Sources strip | – (drawn SVG) | data-hook="inverter" | none (quiet tool) |
| 7 #prices | t-mid | "what does it cost" → sample price ledger | table | repeater proof.prices with ring per row + Sample pricing tag; note | – | – | rows wipe |
| 8 #proof | t-paper | "is anyone happy" → sample reviews with ring tags | cards-offset | repeater proof.reviews (text, name, town, service ring tag), {{proof.rating}} / {{proof.reviewCount}} Sample | – | – | stagger rise |
| 9 #after | t-accent | "gone in two years" → guarantee + after-install list | statement | {{proof.guarantee}}, inspection / utility approval / monitoring / production check, {{proof.years}} yrs Sample, {{proof.license}} | – | – | none (statement) |
| 10 #contact | t-deep | path: ZIP → 4-step form | form-split | ZIP check, {{hours|table}}, {{hours|today}}, form, [[tel]], sms | – | data-hook="zip" | fade |
| footer | t-mid | Sources index (all rings), disclaimer, credits | – | {{demo.disclaimer}}, [[credits]], {{proof.license}} Sample | – | data-hook="sources" | rows wipe |

## Rhythm gate
- 10 sections ✓. Hero `calc(100svh - var(--header-h))`, #second paper edge peeks ✓.
- Tones: deep · paper · mid · paper · deep · paper · mid · paper · accent · deep → no 3 alike, no two dark touching (mid is never next to deep) ✓.
- t-deep ✓ (hero, break, contact) · colour band t-accent (#after) ✓ · full-bleed .break ✓.
- Hooks: signature + size, checklist, story, break, inverter, zip, sources (≥ 3) ✓.
- Families: split-50, sheet-margin, story-pin, ledger, bleed, tool-split, table, cards-offset, statement, form-split; no neighbours alike ✓.
- One #contact; every CTA → #contact or tel:/sms: ✓.
- Required content: 8 services (repeater) ✓, ZIP + areas ✓, hours + open-now ✓, sample reviews ✓, prices only in sample price ledger ✓, footer disclaimer + credits ✓.
- Signature in hero, story (#how), tools (#second checklist, #inverter), prices, proof, second-opinion, footer ✓.

## Notes / choices
- Coordinator approved extra photos: `hero-B3` (panels on clay tile, used in services next to Tile roof solar) and
  `rooftops-aerial` (top-down rooftops, the .break). `measuring` dropped (person in frame, draft status). Hero stays `wiring` per concept.
- The size tool's band (1,700-1,950 kWh per kW per year) is from brief §5 and is labelled "sample Tucson band" everywhere.
- The size tool lives in app.js (the kit estimator only shows prices); JS off shows a worked sample row + call.
