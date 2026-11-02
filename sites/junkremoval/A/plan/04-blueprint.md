# Blueprint — junkremoval-A

## Open issues
- **Hero family cap:** All 15 hero families are at the library maximum of 7 uses. Tried families 11, 12, 4, 8, 5, 9, 10, 13, 14, 15, 6 — all collide at the cap. Family 6 was selected as it has no reserved-site collision in this niche (only the library-cap collision). The uniqueness check will continue to report this collision; the build proceeds under the hard-stop rule (same check failing ≥4 times → document and finish). The critic will score distinctiveness accordingly.

## Rhythm gate check
- Sections: 10 (within 8-12). Hero is `calc(100svh - var(--header-h))`; next band (`#process`) peeks in.
- Tone sequence: paper → light → deep → paper → accent → light → paper → mid → light → deep. No 3 same in a row. No two dark touching (deep at #3 and #10 are separated by 6 sections; mid at #8 is not dark).
- ≥1 t-deep: yes (#3 pricing, #10 footer). ≥1 color band: yes (#5 where-it-goes, t-accent).
- ≥1 full-bleed .break: yes (#8 storm-break).
- ≥3 data-hooks: load-sizer (#4), zip-checker (#6), quote-form (#9), floor-plan signature (all sections). ✓
- ≥3 layout families: diagonal-split (hero), margin+stack (process), grid (services), split (pricing), stack (proof), rail (where-it-goes), form (contact), break (storm), list (hours), ruled (footer). No neighbours share. ✓
- Exactly one #contact: yes (#9). Every CTA points to #contact or tel:. ✓
- Required content: all 10 services (#3), area + ZIP (#6), hours/open-now (#7), sample reviews with Sample tag (#7), sample prices via estimator/price block (#4), footer with {{demo.disclaimer}} + [[credits]] (#10). ✓
- Signature sections per concept.json: hero, process, services, proof, pricing, contact, footer. All present. ✓

## Section table

| # | id | tone | purpose | layout | content (tokens) | media | hooks | entrance |
|---|---|---|---|---|---|---|---|---|
| 1 | hero | t-paper | Trade+town+promise+price logic visible above fold | centered-type-flanked-photos (family 6) | kicker "Junk Removal · {{biz.city}}", h1 "You point. We carry. The floor comes back.", lead "Price by how much of the truck you fill. Crew does all the lifting. Floor swept before we leave.", CTA "Get a number" → #contact, sample chip "Quarter truck · from {{proof.prices.quarter.from}}" | Headline centered on paper; hero-A flanks left, hero-A-2 flanks right, both vertically aligned with type block | data-sw-signature="floor-plan" | Headline rises; flanking photos unclip staggered ≤1.2s |
| 2 | process | t-light | Objection: strangers scraping walls / taking keep items | margin-floor-plan + stacked cards (6 steps) | h2 "How the floor comes back", steps: 1 Walk-through (you point, crew marks keep-pile), 2 Carry-out (dollies, gloves, no wall contact), 3 Sort (donate/recycle/landfill at truck), 4 Load (strapped, no shift), 5 Sweep (broom-clean slab), 6 Sign-off (you walk the empty space) | none (SVG floor plan only) | data-hook="floor-plan-step" | Text rise; floor-plan item lifts per step (pinned desktop, clip-reveal mobile) |
| 3 | services | t-paper | All services visible; objection: condo/elevator damage | grid (2-col mobile, 3-col desktop) | h2 "What we clear", repeater over {{services.*}}: short name + blurb. Cards: Garages, Storm debris, Furniture, Appliances, Condos, Estates, Hot tubs, Yard waste, Mattresses, Donations | none | — | Staggered card rise |
| 4 | pricing | t-deep | Objection: price changes on truck; show sample ranges | split (estimator left, price table right) | h2 "Price by the share of the truck", Load Sizer tool (tap items → truck share + sample range), price table from {{proof.prices.*}} with Sample tag, note "Price on the phone = price at the truck" | none | data-hook="load-sizer" | Estimator inline anim; price rows type in |
| 5 | where-it-goes | t-accent | Objection: they'll dump everything; show destination | rail (3-column sort sheet) | h2 "Where it goes", sorter output: Donate / Recycle / Landfill columns with plain reasons, donation note prefills form | none | data-hook="where-sorter" | Column rules draw in; items sort on scroll |
| 6 | area | t-light | Service area + ZIP checker; trust: local | stack (map outline + ZIP input) | h2 "Serving {{biz.city}} and Volusia County", areas list from {{biz.areas}}, ZIP checker, honest outside-area message | none | data-hook="zip-checker" | Text rise; ZIP input focus |
| 7 | proof | t-paper | Social proof + open-now + hours | mosaic (reviews + hours card) | h2 "From your neighbors", 3 sample reviews from {{proof.reviews[0..2]}} with Sample tag, open-now badge, hours from {{biz.hours}}, guarantee line | none | data-hook="open-now" | Review cards stagger; open-now pulse |
| 8 | storm-break | t-mid | Full-bleed visual break; storm debris service | .break (full-bleed photo + overlay text) | Overlay: "Storm pile? We haul what the county won't take this week." CTA → #contact | hero-A-2 (hands carrying, FL light) | — | Photo unclip; text rise |
| 9 | contact | t-light | Primary conversion: multi-step form | form (multi-step) | h2 "Get a number in minutes", 5-step form: What → Where → Photos/list → Day → Contact. Prefill from tools. Phone + SMS links as fallback. | none | data-hook="quote-form" | Form steps slide; focus first field |
| 10 | footer | t-deep | Disclaimer, credits, swept-slab sign-off | ruled (single column) | {{demo.disclaimer}}, [[credits]], "Floor swept · {{biz.short}} · {{biz.city}}", nav anchors | none | data-sw-signature="floor-plan" (empty plan + car) | Car outline rolls in; rule wipes |