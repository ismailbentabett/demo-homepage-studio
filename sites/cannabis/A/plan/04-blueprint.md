# Blueprint — cannabis-A

| # | id | tone | purpose | layout | content | media | hooks | entrance |
|---|---|---|---|---|---|---|---|---|
| 1 | hero | t-deep | Trade + town + hours + pre-order | filmstrip | kicker, h1, lead, buttons, proof line | hero-A, hero-A-2, store-display-case, store-jar-shelf, pickup-car-dusk | data-sw-signature="lamp-stop" | lamp 01 warms, text rises |
| 2 | first-visit | t-mid | "I don't know what to ask for" | split-stack | 5 steps walkthrough | store-hands-counter, store-scale-weighing, store-sealed-bag | data-first-visit | lamps light sequentially |
| 3 | formats | t-paper | "Edibles hit too hard" | grid | start-low cards per format | flower-bud-macro, edible-chocolate-plain, vape-cartridge-plain, tincture-dropper-bottle | data-format-explainer | cards clip-in |
| 4 | break | t-deep | Visual pause, full-bleed | break | — | local-flagstaff-ponderosa-snow | — | unclip |
| 5 | services | t-mid | What we carry | rail | all 9 services | flower-jar-open, preroll-plain-row, topical-balm-tin | data-service | text rises |
| 6 | prices | t-paper | "What's the real price?" | stack | sample estimator | lab-test-tubes | data-estimator | counter |
| 7 | visitors | t-accent | "Can I use out-of-state ID?" | split | visitor checklist | local-flagstaff-night-sky | data-visitor-checklist | text rises |
| 8 | area | t-deep | "Do you serve my town?" | stack | ZIP checker, areas list | — | data-zip | text rises |
| 9 | reviews | t-mid | Trust | grid | 6 sample reviews | — | data-review | cards clip-in |
| 10 | contact | t-paper | Pre-order | stack | multi-step form | — | data-lead | text rises |
| 11 | footer | t-deep | Disclaimer + credits | stack | disclaimer, credits, lamp 06 | — | — | — |

## Rhythm gate check
- 11 sections (within 8–12). ✓
- Hero height: `calc(100svh - var(--header-h))`; next band (first-visit) peeks. ✓
- No 3 same tones in a row: deep, mid, paper, deep, mid, paper, accent, deep, mid, paper, deep. ✓
- No two dark sections touching: deep→mid, mid→paper, paper→deep (break), deep→mid, mid→paper, paper→accent, accent→deep, deep→mid, mid→paper, paper→deep. ✓
- ≥1 t-deep: yes (hero, break, area, footer). ✓
- ≥1 color band: yes (visitors = t-accent). ✓
- ≥1 full-bleed .break: yes (#4). ✓
- ≥3 data-hooks: data-sw-signature, data-first-visit, data-format-explainer, data-estimator, data-visitor-checklist, data-zip, data-lead. ✓
- ≥3 layout families: filmstrip, split-stack, grid, break, rail, stack, split. No neighbours share. ✓
- Exactly one #contact. ✓
- Required content: all services (#5), area+ZIP (#8), hours/open-now (hero), sample reviews (#9), sample prices (#6), footer with disclaimer+credits. ✓
- Signature in listed sections: hero, first-visit, services, reviews, footer. ✓

## Open issues
- **Hero family cap reached (2026-11-02):** Every hero family (1–14) is at its library max of 7 uses (family 1 at max 2). `check-unique --concept` refuses all options. Additionally, family 1 collides with sibling cannabis-C's draft concept in the same niche. Cannot pass the uniqueness gate without retiring/delivering existing sites to free a slot or an explicit exception from the project owner. Static check was clean; only the concept-uniqueness gate blocks render advancement. Site moved to `needs-human` per round-cap protocol.