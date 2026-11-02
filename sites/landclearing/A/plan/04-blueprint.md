# Blueprint — landclearing-A

| # | id | tone | purpose | layout | content | media | hooks | entrance |
|---|---|---|---|---|---|---|---|---|
| 1 | hero | t-deep | thesis: nothing goes down you didn't agree to | full-bleed photo + left scrim | h1, proof line, CTA | hero-A | data-split="lines" | line-mask reveal |
| 2 | trust-bar | t-paper | open now + area + sample rating | 4-col grid | hours·today, areas list, rating, phone | — | data-open-now | fade stagger |
| 3 | process | t-deep | signature story: walk→flag→mulch→grade | pinned vertical (desktop) / stacked cards (phone) | 4 steps with ribbon SVG | process-walk-woods, process-flag-tie | data-sw-signature, data-reveal | clip + ribbon draw |
| 4 | services | t-paper | what we clear | 2-col card grid | each services | — | data-reveal-stagger | stagger up |
| 5 | estimator | t-mid | price transparency | tool + result panel | acreage estimator, sample prices | — | data-estimator | fade |
| 6 | break | t-flag | full-bleed accent band | single statement | guarantee token | — | — | none (quiet) |
| 7 | reviews | t-paper | social proof | 3-col review grid | each proof.reviews (Sample tag) | — | data-reveal-stagger | stagger up |
| 8 | ground | t-deep | will it fit / when | tool + explanation | gate/access check | — | data-checklist | fade |
| 9 | zip | t-paper | do you work here | checker + form link | ZIP input, aria-live answer | — | data-zip | fade |
| 10 | contact | t-deep | lead capture | multi-step form | service → details → when → contact | — | data-lead | step wipe |
| 11 | footer | t-deep | credits + disclaimer | narrow column | disclaimer, credits, nav anchors | — | — | none |

## Rhythm gate check
- 11 sections (within 8–12). ✓
- Hero height calc(100svh - var(--header-h)); trust-bar peeks. ✓
- No 3 same tone in a row: deep, paper, deep, paper, mid, flag, paper, deep, paper, deep, deep → footer is deep after deep (contact). **Fix:** make footer t-paper. Revised: deep, paper, deep, paper, mid, flag, paper, deep, paper, deep, paper. ✓
- No two dark touching: verified after fix. ✓
- ≥1 t-deep (hero, process, ground, contact), ≥1 color band (break t-flag), ≥1 full-bleed .break (break section). ✓
- ≥3 data-hooks: data-split, data-open-now, data-sw-signature, data-reveal, data-estimator, data-checklist, data-zip, data-lead. ✓
- ≥3 layout families: full-bleed, grid, pinned/stacked, tool-panel, form. No neighbours share. ✓
- Exactly one #contact; all CTAs point to #contact or tel:. ✓
- Required content: all 8 services via repeater, ZIP checker, hours/open-now, sample reviews, sample prices via estimator, footer with disclaimer + credits. ✓
- Signature in concept.json.signature.sections: hero, process, services, estimator, footer. ✓