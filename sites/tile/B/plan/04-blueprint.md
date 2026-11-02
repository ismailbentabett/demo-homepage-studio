# Blueprint — tile-B (Feeler Gauge Tile Works)

| # | id | tone | purpose | layout | content (tokens) | media | hooks | entrance |
|---|---|---|---|---|---|---|---|---|
| 1 | hero | t-light | Trade + town + proof line + CTA; answer "do they do my job and will it be flat?" | mosaic | h1 "Tile Installation in Oakland", kicker "Feeler Gauge Tile Works", lead "We measure before we set.", proof line "Flatness ≤ 1/16\" over 10 ft · {{proof.rating}} ({{proof.label}} rating)", CTA Price it | hero-B (big), detail-grout-lines-close, leveling-clips, thinset-back-butter | data-split="lines" on h1, data-sw-signature on mosaic | line-mask h1; mosaic tiles clip-in staggered |
| 2 | trust | t-concrete | Open now, area, years, license at a glance | rail-4col | hours today (data-open-now), areas list, {{proof.years}} yrs, license (sample) | — | data-open-now | text rise |
| 3 | flatness-story | t-light | Objection: big tiles lip / floor not flat. Signature scroll story. | pinned-split | Story: raking-light floor, lippage closes 1/8→0; gauge readout counts down. Static fallback below. | hero-B-2 (level on tile) | data-sw-signature, data-reveal | pinned ≥640; stacked cards <640 |
| 4 | services | t-paper | All 9 services with gauge tags | grid-3col | <!-- each services --> name, blurb, [[quote .short btn-ghost]] | — | data-reveal-stagger | stagger cards |
| 5 | break | t-deep | Full-bleed visual pause; reinforce exactness | full-bleed | Caption: "Large-format porcelain in raking daylight" | hero-B-3 | — | unclip |
| 6 | estimator | t-light | Price my room tool; sample ranges from facts | split-tool | Tile count & layout estimator; outputs sq ft, waste, boxes, sample price range. Hand-off: Send these numbers → form prefill. | — | data-estimator, data-sw-signature | text rise |
| 7 | area | t-concrete | Do they come to my ZIP? | split | Area list + ZIP checker. Yes → form w/ ZIP. No → phone. | street-oakland-craftsman | data-zip | text rise + img unclip |
| 8 | reviews | t-paper | Social proof with sample tag | grid-2col | <!-- each proof.reviews 0:4 --> text, name, town, service; sample-tag | — | data-reveal-stagger | stagger |
| 9 | guarantee | t-accent | Risk reversal: 3-year reset promise | statement | "{{proof.guarantee}}" + sample tag | — | data-sw-signature | text rise |
| 10 | contact | t-light | Multi-step form; honest demo thank-you | form-col | form[data-lead] steps: service → details → when → contact. Microcopy: "We'll call to set up a measure." Hours beside phone. | — | data-lead, data-service | text rise |
| 11 | footer | t-deep | Disclaimer, credits, nav anchors | stack | {{demo.disclaimer}}, [[credits]], anchors | — | — | none (quiet) |

## Rhythm gate check
- Sections: 11 (within 8-12). ✓
- Hero height: calc(100svh - var(--header-h)); next band (trust) peeks. ✓
- Tone run: light → concrete → light → paper → deep → light → concrete → paper → accent → light → deep. No 3 same in row. No two dark touching (deep at #5, next is light; deep at #11 is last). ✓
- ≥1 t-deep: #5 break, #11 footer. ✓
- ≥1 color band: #9 t-accent. ✓
- ≥1 full-bleed .break: #5. ✓
- ≥3 data-hooks: data-split (hero), data-open-now (trust), data-sw-signature (hero, flatness, estimator, guarantee), data-estimator, data-zip, data-lead, data-service, data-reveal*, data-reveal-stagger*. ✓
- ≥3 layout families: mosaic, rail-4col, pinned-split, grid-3col, full-bleed, split-tool, split, grid-2col, statement, form-col, stack. No neighbours share. ✓
- Exactly one #contact: #10. Every CTA points to #contact or tel:. ✓
- Required content: all services (#4), area+ZIP (#7), hours/open-now (#2), sample reviews (#8), sample prices via estimator (#6), footer disclaimer+credits (#11). ✓
- Signature sections per concept.json: hero, flatness-story, services (gauge tags on blurbs), estimator, reviews (gauge tag on pull quotes), footer (gauge-style rule). ✓

## Open issues
- **Hero family collision (unfixable):** All hero families 1-15 are at or over their library cap (family 1: 2/2; families 2-15: 7/7). `check-unique` refuses any value 1-15, and values >15 are rejected by METHOD §2 range validation. Cannot advance to render stage until another site is delivered or a family slot opens. Static check and render captures are clean; only the uniqueness gate blocks delivery.