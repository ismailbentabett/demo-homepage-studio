# Blueprint — nursery-A

| # | id | tone | purpose | layout family | content (tokens) | media keys | hooks | entrance |
|---|---|---|---|---|---|---|---|---|
| 1 | hero | t-deep | thesis + proof line | filmstrip-hero | h1, lead, proof line, [[call]] | hero-A, hero-A-2, hero-A-3, process-seed-tray | data-header, data-split="lines", data-marquee | line-mask h1, filmstrip fade-in |
| 2 | trust | t-paper | open now + area + sample rating | trust-grid | hours, areas, rating, years | — | data-open-now, data-count | stagger text |
| 3 | services | t-deep | what we grow | bench-row | services repeater, bench cards | — | data-reveal-stagger | clip reveal per card |
| 4 | process | t-paper | how hardening works | split-process | 3 steps text + photo | process-seed-tray | data-reveal | image unclip, text rise |
| 5 | calendar | t-accent | planting windows for Santa Rosa | calendar-block | fall native, bare-root, spring rush | hero-A-3 | data-reveal | fade up |
| 6 | reviews | t-deep | grower notes | stacked-proof | reviews repeater, sample tag | — | data-reveal-stagger, data-sw-signature | stagger cards |
| 7 | prices | t-paper | sample price rack | price-rack | prices repeater, sample tag | — | data-estimator | table row reveal |
| 8 | zip | t-deep | delivery check | zip-block | zip input, aria-live | — | data-zip | fade up |
| 9 | contact | t-paper | quote form | form-block | multi-step form, microcopy | — | data-lead | step transition |
| 10 | footer | t-deep | credits + disclaimer | footer-cols | disclaimer, credits, nav | — | — | static |

## Rhythm gate check
- 10 sections: pass (8-12 required).
- Hero height: `calc(100svh - var(--header-h))`; next band (trust) peeks: pass.
- No 3 same tone in a row: deep → paper → deep → paper → accent → deep → paper → deep → paper → deep. Pass.
- No two dark sections touching: deep/paper alternation holds; accent breaks deep run before reviews. Pass.
- ≥ 1 t-deep: yes (hero, services, reviews, zip, footer). Pass.
- ≥ 1 color band: yes (calendar t-accent). Pass.
- ≥ 1 full-bleed .break: filmstrip hero acts as break. Pass.
- ≥ 3 data-hooks: data-header, data-marquee, data-open-now, data-count, data-reveal-stagger, data-reveal, data-sw-signature, data-estimator, data-zip, data-lead. Pass.
- data-sw-signature present: yes (reviews section). Pass.
- ≥ 3 layout families, no neighbours sharing: filmstrip-hero ≠ trust-grid ≠ bench-row ≠ split-process ≠ calendar-block ≠ stacked-proof ≠ price-rack ≠ zip-block ≠ form-block ≠ footer-cols. Pass.
- Exactly one #contact: yes (section 9). All CTAs point to #contact or tel:. Pass.
- Required content: all 9 services listed via repeater; area + ZIP checker (zip section); hours + open-now (trust); sample reviews with Sample tag (reviews); prices via estimator/sample block (prices); footer has {{demo.disclaimer}} + [[credits]]. Pass.
- Signature in concept.json.signature.sections: hero, services, process, reviews, prices, contact — bench card appears in each. Pass.

## Open issues
- **Hero family registry saturation (blocker for render stage):** All 15 hero family slots in `data/design-registry.json` are at or over their per-family cap (families 2–15 at 7/7, family 1 at 2/2). `node tools/check-unique.mjs nursery-A --concept` fails on every available family, preventing `node tools/stage.mjs nursery-A render` from succeeding despite clean static and render checks. This is a library-wide capacity issue, not a site-specific defect. The site builds, passes static check with zero blockers/warnings, and passes render check with zero errors at all viewports. Resolution requires either expanding the hero family cap in the registry or retiring/reskinning existing sites to free slots.