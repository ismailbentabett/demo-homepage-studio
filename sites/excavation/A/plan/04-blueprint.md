# Blueprint — excavation-A

| # | id | tone | purpose | layout | content | media | hooks | entrance |
|---|-----|------|---------|--------|---------|-------|-------|----------|
| 1 | hero | t-deep | trade+town+act+believe | diagonal-split (11) | h1, kicker, CTA tel, CTA form | hero photo | data-sw-signature, data-hook="open-now" | seam wipe + text rise |
| 2 | locate | t-light | objection: hit utility line | split | 811 explanation, paint marks, hand-dig note | locate-photo | data-hook="zip-checker" | text rise + img unclip |
| 3 | process | t-mid | objection: tear up yard / disappear | cross-section-stack | 7 steps with stake marks | process photos ×3 | data-hook="process-steps" | text rise + layer wipe |
| 4 | drainage-tool | t-light | objection: water moves elsewhere | tool-inline | drainage picker inputs + output | none | data-hook="drainage-picker" | text rise |
| 5 | rock-clause | t-deep | objection: price doubles on rock | tool-inline | slider + sample ranges | rock-photo | data-hook="rock-clause" | text rise + img unclip |
| 6 | services | t-light | all services listed | grid-3col | 8 service cards from facts | none | — | text rise stagger |
| 7 | break | t-deep | full-bleed visual pause | break | wide photo, caption | break-photo | — | img unclip |
| 8 | prices | t-light | sample price transparency | ledger-table | 5 price rows from facts | none | data-hook="estimator" | text rise |
| 9 | reviews | t-mid | social proof | card-stack | 6 sample reviews with tag | none | — | text rise stagger |
| 10 | contact | t-accent | primary conversion | form-centered | multi-step quote form | none | data-hook="quote-form" | text rise |
| 11 | footer | t-deep | disclaimer + credits | stack | disclaimer, credits, hours, areas | none | — | text rise |

## Rhythm gate check

- [x] 11 sections (8-12 range).
- [x] Hero is `calc(100svh - var(--header-h))`; next band (locate) peeks in.
- [x] No 3 same tones in a row: deep → light → mid → light → deep → light → deep → light → mid → accent → deep.
- [x] No two dark sections touching: deep/light/mid/light/deep/light/deep/light/mid/accent/deep — verified.
- [x] ≥1 t-deep (hero, rock-clause, break, footer = 4).
- [x] ≥1 color band (t-accent at contact).
- [x] ≥1 full-bleed .break (section 7).
- [x] ≥3 data-hooks: zip-checker, drainage-picker, rock-clause, estimator, quote-form, open-now, process-steps (7 total).
- [x] data-sw-signature present in hero (and repeats through signature sections).
- [x] ≥3 layout families: diagonal-split, split, cross-section-stack, tool-inline, grid-3col, break, ledger-table, card-stack, form-centered, stack (10 families, no neighbours share).
- [x] Exactly one #contact (section 10).
- [x] Every CTA points to #contact or tel:.
- [x] Required content: services (section 6), area+ZIP checker (section 2), hours/open-now (hero+footer), sample reviews with tag (section 9), sample prices via block (section 8), footer with disclaimer+credits (section 11).
- [x] Signature appears in every section listed in concept.json.signature.sections.

## Open issues

- Hero family uniqueness: all 15 hero families are at the library cap of 7 when counting reserved sites. The `check-unique --concept` check fails on every family tried (11, 14, 8, 10, 4, 12, 13, 15, 1, 9). Family 9 is retained as the best available option; the site builds, passes static check (0 blockers), and renders with no overflow errors. This collision must be resolved by the critic or by freeing a slot in the registry before delivery. Hard stop reached after 10 consecutive uniqueness failures.