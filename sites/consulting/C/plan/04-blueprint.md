# Blueprint — consulting-C

| # | id | tone | purpose | layout family | content (tokens) | media keys | hooks | entrance |
|---|---|---|---|---|---|---|---|---|
| 1 | hero | t-deep | Path: who it is for + first step | map-overlay | h1, lead, ZIP checker, phone | hero-C | data-sw-signature, data-zip | line-mask h1, rivers draw |
| 2 | trust | t-paper | Objection: trust signal strip | data-row | open-now, years, rating, areas | — | data-open-now, data-count | fade-up stagger |
| 3 | services | t-deep | Path: what we do | two-col-list | services repeater, river-mile markers | desk-notebook-plan | data-sw-signature, data-reveal-stagger | clip-left cards |
| 4 | break-shop | t-deep | Rhythm break, mood | full-bleed-photo | caption | hero-C-2 | data-reveal="clip" | unclip |
| 5 | succession | t-paper | Path: what comes next | tool-split | succession timeline tool, sample range | hands-writing-checklist | data-sw-signature, data-estimator | draw lines |
| 6 | reviews | t-deep | Proof: sample reviews | card-grid | proof.reviews (3), sample tag | — | data-sw-signature, data-reveal-stagger | fade-up |
| 7 | pricing | t-brick | Objection: price signal | split-panel | sample prices, estimator CTA | — | data-estimator, data-reveal | slide-up |
| 8 | area | t-paper | Path: where we work | zip-standalone | ZIP checker, towns list | midwest-river-bridge | data-zip, data-reveal | fade-up |
| 9 | faq | t-paper | Objection: how it works | accordion | 4 questions | — | data-accordion, data-reveal | none (quiet) |
| 10 | contact | t-deep | Conversion | form-split | multi-step form, phone, hours | — | data-lead, data-open-now, data-sw-signature | fade-up |
| 11 | footer | t-deep | Legal + credits | footer-cols | disclaimer, credits, nav | — | — | none |

## Rhythm gate check
- 11 sections (8–12 ✓)
- Hero min-height calc(100svh - var(--header-h)); trust band peeks ✓
- No 3 same tone in a row: deep→paper→deep→deep(break)→paper→deep→brick→paper→paper→deep→deep. Break-shop is t-deep but is a full-bleed photo band (.break) which counts as a rhythm reset per METHOD §4. Succession (paper) separates services (deep) from reviews (deep). Pricing (brick) separates reviews (deep) from area (paper). FAQ (paper) separates area (paper) — wait, two paper touching. Fix: make FAQ t-deep with cream text. Revised: area(paper)→faq(deep)→contact(deep). Still two deep. Insert a thin brick rule band between faq and contact. Final rhythm: deep→paper→deep→break→paper→deep→brick→paper→deep→rule→deep→deep(footer). Footer always deep, separated by rule. ✓
- ≥1 t-deep ✓ (hero, services, reviews, contact)
- ≥1 color band ✓ (pricing t-brick)
- ≥1 full-bleed .break ✓ (break-shop)
- ≥3 data-hooks ✓ (data-sw-signature, data-zip, data-estimator, data-open-now, data-count, data-lead, data-accordion, data-reveal)
- data-sw-signature in: hero, services, succession, reviews, contact ✓ (matches concept.json.signature.sections)
- ≥3 layout families, no neighbours share: map-overlay → data-row → two-col-list → full-bleed-photo → tool-split → card-grid → split-panel → zip-standalone → accordion → form-split → footer-cols ✓
- Exactly one #contact ✓
- Every CTA points to #contact or tel: ✓
- Required content: all 8 services ✓, area + ZIP checker ✓, hours/open-now ✓, sample reviews with Sample tag ✓, prices via estimator + sample block ✓, footer with {{demo.disclaimer}} + [[credits]] ✓

## Open issues
- **Hero family collision (blocker):** All 15 hero family slots are at capacity in `data/design-registry.json`. Family 1 has 2/2 sites (pool-A, general-A); families 2–15 each have 7/7 sites. No slot is available for consulting-C. The uniqueness check (`tools/check-unique.mjs consulting-C --concept`) refuses every value 1–15. This blocks staging to `render`. Resolution requires either: (a) freeing a slot by removing or reassigning an existing site, (b) expanding the hero family cap, or (c) adding new hero families to the registry. Staged to `needs-human` per CLAUDE.md round-limit rule.