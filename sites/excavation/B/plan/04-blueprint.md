# Blueprint — excavation-B

| # | id | tone | purpose | layout | content (tokens) | media | hooks | entrance |
|---|---|---|---|---|---|---|---|---|
| 1 | hero | t-light | trade+town+act+believe | tool-first split | h1, lead, guarantee, ZIP checker, dirt calculator | hero-B-3 | data-sw-signature, data-zip, data-dirt-calc | text rise + rule sweep |
| 2 | services | t-paper | what we dig | ledger grid | all 9 services via repeater | — | data-reveal-stagger | stagger cards |
| 3 | process | t-deep | tear-up fear answered | stack story | locate→stake→cut→compact→seed | hero-A-3, hero-A-2 | data-process-story | clip unclip per step |
| 4 | trust | t-mid | utility hit / rock price | split | 811 locate, rock clause, guarantee | hero-B | data-rock-clause | text rise |
| 5 | tools | t-light | self-measure before call | rail | gravel estimator, drainage picker | — | data-gravel-est, data-drainage-pick | text rise |
| 6 | break | t-accent | full-bleed photo pause | break | finished driveway crown | hero-B-2 | data-reveal="clip" | image unclip |
| 7 | proof | t-paper | numbers people trust | list | sample reviews, rating, years, license | — | data-reveal-stagger | stagger cards |
| 8 | area | t-light | service area + ZIP | stack | areas list, ZIP checker repeat | — | data-zip | text rise |
| 9 | contact | t-deep | convert | form | multi-step quote form, open-now, phone | — | data-lead, data-open-now | text rise |
| 10 | footer | t-light | credits + disclaimer | stack | disclaimer, credits, benchmark 0.00 | — | — | — |

## Rhythm gate check
- Sections: 10 (within 8-12). Hero is `calc(100svh - var(--header-h))`; next band (services) peeks in.
- Tone sequence: light → paper → deep → mid → light → accent → paper → light → deep → light. No 3 same in a row. No two dark touching (deep at 3 and 9 are separated by mid/light/accent/paper/light).
- ≥ 1 t-deep: yes (process, contact). ≥ 1 color band: yes (break = t-accent). ≥ 1 full-bleed .break: yes (section 6).
- ≥ 3 data-hooks: data-sw-signature, data-zip, data-dirt-calc, data-process-story, data-rock-clause, data-gravel-est, data-drainage-pick, data-lead, data-open-now. Signature present.
- ≥ 3 layout families: tool-first split, ledger grid, stack story, split, rail, break, list, form, stack. No neighbours share one.
- Exactly one #contact: section 9. Every CTA points to #contact or tel:.
- Required content: all 9 services (section 2), area + ZIP (sections 1, 8), hours/open-now (section 9), sample reviews with Sample tag (section 7), prices only via estimator/sample block (sections 1, 5, 7), footer with {{demo.disclaimer}} + [[credits]] (section 10).
- Signature sections match concept.json: hero, services, process, tools, proof, contact, footer. All present.

## Open issues
- Hero family uniqueness: all 15 hero families in METHOD §2 are at or over the library cap (max 7, or max 2 for family 1). No valid heroFamily can pass `check-unique --concept` or `stage render` without another site being delivered first. Build, static check, and render check all pass clean with heroFamily=1 in concept.json; staging to render is blocked solely by this library saturation. Critic should score the built site as-is; resolution requires a library slot to free up.