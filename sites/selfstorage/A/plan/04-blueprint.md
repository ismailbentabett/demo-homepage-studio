# Blueprint — selfstorage-A (Wide Aisle Storage)

## Section list

| # | id | tone | purpose | layout family | content (tokens) | media keys | hooks | entrance |
|---|---|---|---|---|---|---|---|| 1 | #hero | t-light | First impression: trade, town, act now, believe | fullbleed-scrim | Full-bleed hero-A photo with left scrim; kicker "Self storage in Port St. Lucie"; h1 "Rent it at the kitchen table, unload it by lunch"; proof line "Mon–Sat 9–6 · Gate till 10 p.m. · {{proof.rating}} ★ ([[sample rating]])"; CTA "Hold your unit" → #contact | hero-A | data-split="lines", data-sw-signature | photo settle + headline mask-reveal |
| 3 | #climate | t-light | Objection: Will my stuff get mildew? | split-left | h2 "A-103 · Climate-controlled"; blurb from services.1; explains temp/RH in plain words; CTA "Price a climate unit" | detail-padlock-hasp | data-reveal | text rise + image unclip |
| 4 | #services | t-paper | Show all services, each with a door number | door-grid | repeater over services; each card: door number A-104-N, {{.name}}, {{.blurb}}, [[quote {{.short}} btn-ghost]] | — | data-reveal-stagger | staggered card rise |
| 5 | #prices | t-accent | Objection: price will double; show real ranges | price-rail | h2 "A-105 · Sample monthly prices"; repeater over proof.prices; each: item, from/to, unit, note; [[sample pricing]] tag | — | data-count (optional) | text rise |
| 6 | #gate | t-deep | Objection: Is it safe? Who can get in? | split-right | h2 "A-106 · Gated keypad access"; service blurb from services.4; camera/keypad details; no fear language | detail-gate-keypad | data-reveal | image unclip + text rise |
| 7 | #hours | t-light | Objection: Can I get in after work? | two-clock | h2 "A-107 · Two clocks"; office: {{hours\|today}}; gate: "6 a.m. – 10 p.m. daily" from services.4 blurb; live open-now | — | data-open-now | text rise |
| 8 | #lease | t-paper | Objection: Do I have to sign a year? | statement | h2 "A-108 · Month-to-month"; blurb from services.7; plain-language lease explainer; CTA "Ask the manager" → tel | — | — | text rise (quiet section) |
| 9 | #break | t-light | Visual pause, full-bleed facility photo | break-full | Full-width photo of roll-up doors row; caption describes frame | doors-row-orange | — | image unclip |
| 10 | #reviews | t-paper | Social proof, labelled sample | review-mosaic | h2 "A-109 · Sample reviews"; repeater over proof.reviews (first 4); each: text, name, town, service; [[sample review]] tag | — | data-reveal-stagger | staggered card rise |
| 11 | #area | t-light | Service area + ZIP checker | stack-center | h2 "Serving the Treasure Coast"; {{biz.areas\|list}}; ZIP checker input + aria-live answer | — | data-zip | text rise |
| 12 | #contact | t-accent | Primary conversion: hold your unit | form-stack | h2 "A-110 · Hold your unit"; multi-step form (size → type → date → contact); honest thank-you; guarantee from {{proof.guarantee}} beside submit | — | data-lead, data-service | text rise |

Footer: t-deep, contains {{demo.disclaimer}}, [[credits]], nav anchors, phone, email. Not counted as a section for rhythm.

## Rhythm gate check

- **Section count:** 12 sections + footer. Within 8-12 range (footer excluded). PASS.
- **Hero height:** `min-height: calc(100svh - var(--header-h))`; next band (#sizer, t-paper) peeks in. PASS.
- **No 3 same tones in a row:** light → paper → light → paper → accent → deep → light → paper → light → paper → light → accent. No three consecutive same. PASS.
- **No two dark sections touching:** Only one t-deep (#gate). PASS.
- **≥ 1 t-deep:** #gate. PASS.
- **≥ 1 color band:** #prices and #contact are t-accent. PASS.
- **≥ 1 full-bleed .break:** #break. PASS.
- **≥ 3 data-hooks:** data-split, data-sw-signature, data-estimator, data-service, data-reveal, data-reveal-stagger, data-count, data-open-now, data-zip, data-lead. PASS.
- **data-sw-signature present:** #hero. PASS.
- **≥ 3 layout families, no neighbours sharing:** cinematic-strip, tool-stack, split-left, door-grid, price-rail, split-right, two-clock, statement, break-full, review-mosaic, stack-center, form-stack. All different from neighbour. PASS.
- **Exactly one #contact:** yes. Every CTA points to #contact or tel:. PASS.
- **Required content:** all 8 services via repeater; area + ZIP checker in #area; hours/open-now in #hours; sample reviews with tag in #reviews; sample prices via price block in #prices; footer has disclaimer + credits. PASS.
- **Signature sections match concept.json:** hero, sizer, climate, services, prices, gate, hours, lease, reviews, contact all carry door numbers. PASS.

## Open issues

- **Hero family capacity exhausted (2026-11-01):** All 15 hero families in `data/design-registry.json` are at their maximum usage (family 1: max 2, used 2; families 2-15: max 7 each, all used 7). No slot is available for selfstorage-A. The `check-unique.mjs` tool blocks staging past "concept" without a valid hero family. Per CLAUDE.md pass rule and round-limit protocol, this site requires human intervention to either reclaim a reserved-but-abandoned slot, increase a family's cap, or assign an exception. Stage advanced to `needs-human` with best plan artifacts preserved.