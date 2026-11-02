# Blueprint — mural-B

| # | id | tone | purpose | layout | content (tokens) | media | hooks | entrance |
|---|---|---|---|---|---|---|---|---|
| 1 | #hero | t-paper | Objection: cost unknown. Path: estimator → form. | tool-first | kicker, h1, lead, wall-size estimator, [[call]], proof line (rating · years · city) | hero-B | data-estimator, data-sw-signature="proof-marks" | crop marks draw, color bar fills, h1 line-mask |
| 2 | #process | t-mid | Objection: what if I hate it? Proof path. | pinned-story (desktop) / stack (mobile) | three proofs: sketch → color → approved; guarantee line | process-sketch-paper, process-chalk-grid, process-projector-wall | data-reveal | text rise, image unclip per card |
| 3 | #services | t-paper | Every service listed. Path: quote per service. | grid-cards | <!-- each services --> name, blurb, [[quote]] | — | data-prefill | stagger cards |
| 4 | #finish | t-deep | Objection: fade/peel. Outdoor finish check. | split-finish | outdoor-finish-check tool, material/sun inputs, coating plan output | hero-B-2 | data-hook="finish-check" | text rise, image unclip |
| 5 | #break | t-accent | Full-bleed visual pause. | break | — | hero-B-3 | — | unclip |
| 6 | #prices | t-paper | Sample pricing via estimator or block. | list-prices | <!-- each proof.prices --> item, from-to, unit, note, [[sample label]] | — | data-estimator | text rise |
| 7 | #reviews | t-mid | Social proof. Sample reviews. | stack-reviews | <!-- each proof.reviews 0:4 --> name, town, service, text, [[sample review]] | — | data-reveal-stagger | stagger |
| 8 | #area | t-paper | Service area + ZIP checker. | split-zip | areas list, ZIP input, aria-live result | — | data-zip | text rise |
| 9 | #schedule | t-deep | Timeline counter. Hold dates. | tool-stack | timeline counter (date input → sketch/approve/paint dates) | — | data-hook="timeline" | text rise |
| 10 | #contact | t-paper | Multi-step quote form. | form-stack | 4-step form (service → details → when → contact), hours, open-now, phone | — | data-lead, data-open-now | text rise |
| 11 | #footer | t-deep | Disclaimer, credits, credits. | footer-cols | {{demo.disclaimer}}, [[credits]], nav anchors | — | — | none |

## Rhythm gate check

- Sections: 11 (within 8-12). ✓
- Hero height: `calc(100svh - var(--header-h))`; #process peeks. ✓
- No 3 same tones in a row: paper → mid → paper → deep → accent → paper → mid → paper → deep → paper → deep. ✓
- No two dark sections touching: deep at #4, then accent at #5 (not dark), then paper. deep at #9, then paper at #10. ✓
- ≥ 1 t-deep: #4, #9, #11. ✓
- ≥ 1 color band: #5 t-accent. ✓
- ≥ 1 full-bleed .break: #5. ✓
- ≥ 3 data-hooks: data-estimator (#1, #6), data-zip (#8), data-hook="finish-check" (#4), data-hook="timeline" (#9), data-lead (#10), data-open-now (#10), data-prefill (#3), data-reveal (#2), data-reveal-stagger (#7). ✓
- data-sw-signature: #1. ✓
- ≥ 3 layout families: tool-first, pinned-story, grid-cards, split-finish, break, list-prices, stack-reviews, split-zip, tool-stack, form-stack, footer-cols. No neighbours share. ✓
- Exactly one #contact. ✓
- Required content: all services (#3), area + ZIP (#8), hours/open-now (#10), sample reviews (#7), sample prices (#6), footer disclaimer + credits (#11). ✓
- Signature sections per concept.json: hero, process, services, finish, prices, reviews, contact, footer all carry crop marks + reg target + color bar. ✓

## Open issues

- **Hero family collision (blocker for render stage):** All 15 hero families in METHOD §2 are at the library cap of 7 uses. `check-unique.mjs` rejects every candidate (families 7–15 all returned collisions). No unique hero family is available for mural-B without removing or reassigning another site's hero family in `data/design-registry.json`, which is outside the builder's authority. The concept currently declares hero family 15, but `stage.mjs mural-B render` refuses until a unique family is assigned. This must be resolved by either: (a) freeing a hero family slot via registry cleanup, (b) adding a 16th hero family to METHOD §2, or (c) accepting a needs-human outcome for mural-B.