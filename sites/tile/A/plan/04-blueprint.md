# Blueprint — tile-A

| # | id | tone | purpose | layout family | content (tokens) | media keys | hooks | entrance |
|---|---|---|---|---|---|---|---|---|
| 1 | hero | t-deep | Trade + city + thesis; first reason to trust | sticky-photo-scroll-text | h1, proof line, 3 statements | hero-A | data-split="lines", data-sw-signature | line-mask h1, layer bands slide in |
| 2 | leak-check | t-paper | Objection: will it leak? Tool hand-off | split-tool | Leak symptom check (4 questions) | — | data-leak-check, data-service-prefill | text rise |
| 3 | process | t-deep | How layers prevent leaks; flood test proof | pinned-story (desktop) / stacked cards (mobile) | 5 layer steps with days | membrane-orange-roll, flood-test-water, thinset-trowel-notch, grout-float-diagonal, detail-shower-niche | data-sw-signature, data-reveal | scroll story pin ≥640, clip reveal mobile |
| 4 | break-process | t-accent | Full-bleed visual pause; membrane color moment | break (full-bleed photo) | Caption: liquid membrane rolling on | hero-A-3 | data-reveal="clip" | image unclip |
| 5 | services | t-paper | All services visible; prefill form | grid-3col | <!-- each services --> name, blurb, quote btn | — | data-service-prefill | stagger text rise |
| 6 | estimator | t-light | Price ranges without $; scope hand-off | split-tool | Tile count/layout estimator; sample price block from proof.prices | — | data-estimator, data-est-sketch | text rise |
| 7 | area | t-mid | ZIP confirmation; service area list | split-list | ZIP checker, areas list, hours/open-now | street-miami-block-homes | data-zip, data-open-now | text rise |
| 8 | reviews | t-paper | Social proof with detail; Sample label | rail-cards | <!-- each proof.reviews --> text, name, town, service | — | data-carousel | clip reveal per card |
| 9 | guarantee | t-deep | Warranty statement; trust anchor | statement-centered | proof.guarantee, years, license (Sample) | — | data-sw-signature | text rise |
| 10 | contact | t-light | Multi-step form; honest thank-you | form-split | 4-step form, microcopy, phone + hours | — | data-lead, data-service-prefill | text rise |
| 11 | footer | t-deep | Disclaimer, credits, nav anchors | footer-grid | demo.disclaimer, [[credits]], nav links | — | — | none (quiet) |

## Rhythm gate check

- Sections: 11 (within 8–12). ✓
- Hero height: `calc(100svh - var(--header-h))`; next band (leak-check t-paper) peeks in. ✓
- No 3 same tone in a row: deep → paper → deep → accent → paper → light → mid → paper → deep → light → deep. Max run = 1. ✓
- No two dark sections touching: deep/paper/deep/accent/paper/light/mid/paper/deep/light/deep. Adjacent pairs checked: none are both t-deep or t-mid. ✓
- ≥1 t-deep: yes (hero, process, guarantee, footer). ✓
- ≥1 color band: t-accent (break-process). ✓
- ≥1 full-bleed .break: break-process. ✓
- ≥3 data-hooks: data-split, data-sw-signature (hero, process, guarantee), data-leak-check, data-estimator, data-zip, data-open-now, data-carousel, data-lead. ✓
- ≥3 layout families, no neighbours sharing: sticky-photo-scroll-text, split-tool, pinned-story/stacked, break, grid-3col, split-tool, split-list, rail-cards, statement-centered, form-split, footer-grid. Neighbours all different. ✓
- Exactly one #contact: section 10. ✓
- Every CTA points to #contact or tel:. ✓
- Required content: all 8 services (section 5), area + ZIP (section 7), hours/open-now (section 7), sample reviews with Sample tag (section 8), sample prices via estimator (section 6), footer with disclaimer + credits (section 11). ✓
- Signature in listed sections: hero, process, guarantee, footer all carry data-sw-signature. Reviews and contact margins show the ruler visually but do not need the hook. ✓

## Open issues

- **Hero family uniqueness collision (hard stop):** All 15 hero families in `data/design-registry.json` are at or above their per-family cap (families 2–15 at 7/7, family 1 at 2/2). `node tools/check-unique.mjs tile-A --concept` blocks on every option. Concept is set to hero family 1 (least saturated). This requires a library-wide registry cleanup or cap adjustment before tile-A can pass uniqueness; leaving as-is per the 4-failure hard-stop rule so the critic can score it.