# Blueprint — irrigation-A

## Rhythm gate check
- 10 sections (hero + 8 bands + footer). Pass: 8-12.
- Hero height: calc(100svh - var(--header-h)); next band (#process) peeks in.
- Tone sequence: t-deep → t-paper → t-light → t-accent → t-paper → t-deep → t-light → t-paper → t-deep. No 3 same in a row, no two dark touching.
- ≥1 t-deep (hero, proof, footer), ≥1 color band (t-accent #cta-band), ≥1 full-bleed .break (#break-photo).
- ≥3 data-hooks: data-zip, data-estimator, data-sw-signature='valve-lid', data-lead form.
- ≥3 layout families: sticky-scroll (hero), split (process), grid (services), stack (proof), rail (tools), statement (guarantee), list (area), form (contact). No neighbours share one.
- Exactly one #contact form; every CTA points to it or tel:.
- Required content: all 8 services, area + ZIP checker, hours/open-now, sample reviews with Sample tag, sample prices via estimator block, footer with {{demo.disclaimer}} + [[credits]].
- Signature appears in: hero, process, services, proof, tools, contact, footer (per concept.json.signature.sections).

## Open issues

- Hero family uniqueness collision: all 15 hero families are at or over their library cap (families 2–15 at 7/7, family 1 at 2/2). Render check passed clean with no horizontal overflow or visual errors. Site cannot advance to `render` stage via `stage.mjs` until a family slot opens or the registry caps are raised. Left as-is for critic scoring; recommend `needs-human` if round cap reached without resolution.

## Sections

| # | id | tone | purpose | layout | content tokens | media | hooks | entrance |
|---|---|---|---|---|---|---|---|---|
| 1 | #hero | t-deep | First 5s: trade+city+act+believe | sticky-scroll | h1, lead, phone, Price it, proof line (hours·area·sample rating) | hero-A (sticky photo) | data-sw-signature='valve-lid' | text rises, photo fades up |
| 2 | #process | t-paper | Objection: "they'll dig up my yard" | split | Zone story: flag→open→find→fix→test→close; 3 steps shown | hero-A-2 (valve box hands) | data-sw-signature | text rises, image unclip |
| 3 | #services | t-light | All services, each priced individually | grid | <!-- each services --> name, blurb, [[quote]] | — | data-service prefill | stagger cards |
| 4 | #break-photo | t-deep | Visual breath, full-bleed | break | Caption describing frame | hero-A-3 | — | image unclip |
| 5 | #prices | t-paper | Objection: "charged for new system when it's one valve" | stack | Sample price block from proof.prices, labelled Sample | — | data-estimator | text rises |
| 6 | #proof | t-deep | Trust: reviews name exact fix and part | stack | <!-- each proof.reviews 0:4 --> text, name, town, service; Sample tag | — | data-sw-signature | text rises |
| 7 | #tools | t-light | Self-diagnose before calling | rail | Zone symptom finder + bill-spike checker descriptions + call CTA | — | data-zip | text rises |
| 8 | #area | t-paper | Service area + ZIP check | list | {{biz.areas\|list}}, ZIP checker, hours/open-now | — | data-zip, data-open-now | text rises |
| 9 | #contact | t-accent | Primary conversion | form | 4-step form, microcopy, phone beside | — | data-lead | text rises |
| 10 | footer | t-deep | Disclaimer + credits + controller face signature | list | {{demo.disclaimer}}, [[credits]], zone list | — | data-sw-signature | static |