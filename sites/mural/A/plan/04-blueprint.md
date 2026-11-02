# Blueprint — mural-A

| # | id | tone | purpose | layout family | content (tokens) | media keys | hooks | entrance |
|---|-----|------|---------|---------------|------------------|------------|-------|----------|
| 1 | hero | t-field | thesis + first trust line | sticky-photo-scroll | h1, proof line, CTA | hero-A | data-split, data-sw-signature | line-mask h1 |
| 2 | process | t-chalk | objection: "what if I hate it" | pinned-story (≥640) / stacked-cards (<640) | 7 steps, coordinates | process-sketch-paper, process-chalk-grid, process-projector-wall | data-sw-signature, data-reveal | clip + stagger |
| 3 | services | t-deep | path: what we paint | bento-grid | all 8 services | — | data-reveal-stagger | fade-up |
| 4 | estimator | t-field | objection: cost | tool-panel | wall-size price range, sample prices | — | data-estimator, data-sw-signature | none (tool| 5 | break | t-accent | visual rest, full-bleed | full-bleed-img | caption | hero-A-2 | data-reveal="clip" | unclip |
| 6 | reviews | t-chalk | trust: sample social proof | testimonial-rail | 6 reviews, rating | — | data-reveal-stagger, data-sw-signature | fade-up |
| 7 | timeline | t-green | objection: when | tool-panel | timeline counter, hours | — | data-reveal | fade-up |
| 8 | area | t-deep | path: where | zip-checker | areas, zips | — | data-zip, data-reveal | fade-up |
| 9 | guarantee | t-field | trust: finish promise | statement | guarantee, license | — | data-reveal | fade-up |
| 10 | contact | t-chalk | conversion | form-split | multi-step form, phone, hours | — | data-lead, data-open-now, data-sw-signature | none |
| 11 | footer | t-deep | legal + credits | footer-bar | disclaimer, credits | — | — | none |

## Rhythm gate check
- Sections: 11 (within 8-12). ✓
- Hero height: calc(100svh - var(--header-h)); next band peeks. ✓
- No 3 same tone in a row: field → chalk → deep → field → accent → chalk → green → deep → field → chalk → deep. ✓
- No two dark sections touching: deep→field, accent→chalk, green→deep, deep→field, chalk→deep all alternate. ✓
- ≥1 t-deep: services, area, footer (3). ✓
- ≥1 color band: break (t-accent). ✓
- ≥1 full-bleed .break: section 5. ✓
- ≥3 data-hooks: data-split, data-estimator, data-zip, data-lead, data-open-now, data-sw-signature (6). ✓
- data-sw-signature present in hero, process, estimator, reviews, contact (5 sections per concept.json). ✓
- ≥3 layout families: sticky-photo-scroll, pinned-story/stacked-cards, bento-grid, tool-panel, full-bleed-img, testimonial-rail, zip-checker, statement, form-split, footer-bar (10). No neighbours share. ✓
- Exactly one #contact. ✓
- All CTAs point to #contact or tel:. ✓
- Required content: all 8 services listed, area+ZIP checker, hours/open-now, sample reviews with Sample tag, prices via estimator, footer with {{demo.disclaimer}} + [[credits]]. ✓

## Open issues
- **Hero family collision**: All 15 hero families (1–15) are at max capacity (7 uses each) in `data/design-registry.json`. `check-unique --concept` blocks mural-A regardless of chosen value. Current concept uses heroFamily 15. Resolution requires either a delivered site being displaced or the registry cap being raised. Build and static checks pass clean; render staging is blocked by this uniqueness gate.