# Blueprint — septic-C

| # | id | tone | purpose | layout family | content (tokens) | media keys | hooks | entrance |
|---|---|---|---|---|---|---|---|---|
| 1 | hero | t-deep | trade + town + act + believe | map-panel | kicker, h1, lead, proof line, ZIP checker, CTA | hero-C | data-sw-signature="rain-almanac", data-zip | text rises; map draws bayou line |
| 2 | services | t-paper | what we do, tied to season | split-rail | all 8 services via repeater, each with peak-month pill | detail-green-riser-lid | data-reveal-stagger | cards clip-reveal |
| 3 | process | t-light | what a visit looks like | stack-cards | 4-step plant walkthrough (air pump, tablets, spray heads, alarm) | detail-vacuum-hose | data-reveal | pinned story ≥640, stacked below |
| 4 | break | t-deep | full-bleed photo pause | break | wide photo of wet backyard after rain | hero-C-3 | — | unclip |
| 5 | tools | t-accent | self-diagnose before calling | grid | alarm decoder + backup triage | — | data-hook="alarm-decoder", data-hook="backup-triage" | text rises |
| 6 | area | t-paper | do you work here? | split-rail | areas list, ZIP checker, open-now | hero-C-2 | data-zip, data-open-now | text rises |
| 7 | proof | t-light | trust from neighbors | grid | sample reviews (repeater), rating, guarantee | — | data-reveal-stagger | cards clip-reveal |
| 8 | prices | t-mid | what it costs | list | sample price block via estimator | — | data-estimator | text rises |
| 9 | contact | t-deep | get a number | form | multi-step quote form, phone, hours | — | data-lead | text rises |
| 10 | footer | t-deep | disclaimer + credits | stack | disclaimer, credits, almanac reset | — | data-sw-signature="rain-almanac" | static |

## Rhythm gate check
- Sections: 10 (within 8-12). Hero is `calc(100svh - var(--header-h))`; next band (services) peeks in.
- Tone run: deep → paper → light → deep → accent → paper → light → mid → deep → deep. No three same in a row. Two dark sections (footer and contact) touch — fix: change footer to t-paper so it reads as sign-off, not continuation of contact. **Adjusted: footer = t-paper.**
- Dark bands: t-deep at hero, break, contact. Color band: t-accent at tools. Full-bleed `.break` at section 4.
- Hooks: data-sw-signature (hero + footer), data-zip (hero + area), data-estimator (prices), data-lead (contact), data-open-now (area), data-reveal variants. ≥3 hooks, signature present.
- Layout families: map-panel, split-rail, stack-cards, break, grid, list, form, stack. ≥3, no neighbours share one (split-rail at 2 and 6 are separated by stack-cards, break, grid).
- One `#contact`. Every CTA points to `#contact` or `tel:`.
- Required content: all services (section 2), area + ZIP (sections 1 and 6), hours/open-now (section 6), sample reviews with Sample tag (section 7), sample prices via estimator (section 8), footer with `{{demo.disclaimer}}` and `[[credits]]` (section 10).
- Signature sections per concept.json: hero, services, process, proof, footer. Almanac strip appears in all five.

## Open issues
- Hero family collision: all 15 hero families are at the library cap (7 each; family 1 at 2). Sibling septic-A holds a draft on family 1. Cannot pass `check-unique --concept` without exceeding registry limits. Staged to render with current concept (Aleo + Outfit, hero family 1) for critic scoring; uniqueness must be resolved by registry cleanup or sibling delivery before final deliver.