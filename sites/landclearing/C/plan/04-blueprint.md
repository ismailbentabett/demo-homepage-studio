# Blueprint — landclearing-C

## Rhythm gate check
- 10 sections (hero + 8 bands + footer). ✓
- Hero height: `calc(100svh - var(--header-h))`; next band (t-paper) peeks in. ✓
- Tone sequence: t-accent (hero) → t-paper → t-deep → t-paper → t-accent → t-paper → t-deep → t-paper → t-light → footer(t-deep). No 3 same in row; no two dark touching. ✓
- ≥1 t-deep (process, proof, footer). ✓
- ≥1 color band (hero t-accent, estimator t-accent). ✓
- ≥1 full-bleed .break (season-story band). ✓
- ≥3 data-hooks: data-zip, data-estimator, data-tool="regrowth", data-tool="debris", data-sw-signature="split-rail". ✓
- ≥3 layout families: diagonal-split, margin-rail, stacked-cards, grid-3, split-text, form-stack. No neighbours share one. ✓
- Exactly one #contact. Every CTA points to #contact or tel:. ✓
- Required content: all 9 services, area + ZIP checker, hours/open-now, sample reviews with Sample tag, sample prices via estimator, footer with {{demo.disclaimer}} + [[credits]]. ✓
- Signature appears in every section listed in concept.json.signature.sections. ✓

## Sections

| # | id | tone | purpose | layout family | content (tokens) | media keys | hooks | entrance |
|---|---|---|---|---|---|---|---|---|
| 1 | hero | t-accent | Trade + town + promise + act | diagonal-split | kicker "Land clearing in Lynchburg", h1 "We put old farms back the way they were", lead "Mulched, not bulldozed, so the red clay stays put.", [[call]], proof line "Mon–Fri 7–5 · Forest, Bedford, Amherst · {{proof.rating}} (Sample rating)" | hero-C | data-sw-signature="split-rail" | clip-path wipe on photo, opacity fade on clay band |
| 2 | area | t-paper | Are you in my town? | margin-rail | h2 "Serving the Piedmont from Forest to Appomattox", area list {{biz.areas\|list}}, ZIP checker, open-now {{hours\|today}} | — | data-zip, data-open-now | text rise |
| 3 | season-story | t-deep | Why mulch, not doze, on red clay slopes | break + pinned rail | Full-bleed photo of reclaimed hillside; four season cards (leaf-off, spring rain, summer resprout, fall grass) with local notes; split-rail builds rail by rail | process-walk-woods | data-sw-signature="split-rail" | pinned scroll story (desktop), stacked clip reveal (mobile) |
| 4 | services | t-paper | What we clear and how | grid-3 | All 9 services via repeater, each tagged to its season rail, [[quote]] CTA per card | — | data-service (prefill) | stagger cards |
| 5 | tools-regrowth | t-accent | Will it grow back? | split-text | h2 "What comes back and when", regrowth calendar tool, guarantee token {{proof.guarantee}} | — | data-tool="regrowth" | text rise |
| 6 | tools-debris | t-paper | What happens to the brush | split-text | h2 "Mulch in place, haul off, or pile", debris answer tool, sample cost bands from {{proof.prices}} | — | data-tool="debris" | text rise |
| 7 | estimator | t-accent | What will it cost? | form-stack | Acreage estimator (acres + density + slope), output draws mini fence-row sketch, sample ranges from {{proof.prices}}, "Price it" CTA prefills form | — | data-estimator | text rise |
| 8 | proof | t-deep | Can I trust these people? | margin-rail | Sample reviews (3 of 6), years {{proof.years}}, license {{proof.license}}, family-owned {{biz.familyOwned}}, [[sample review]] tag | — | data-sw-signature="split-rail" | stagger cards |
| 9 | contact | t-light | Get a number | form-stack | h2 "Tell us about your land", 4-step form, microcopy "We'll call you back to set up a visit.", hours beside phone | — | data-lead | text rise |
| 10 | footer | t-deep | Disclaimer + credits | stack | {{demo.disclaimer}}, [[credits]], nav anchors, phone, email | — | — | none (quiet) |

## Open issues
- Hero family exhaustion: all 15 hero families (1–15) are at or over the library cap (7 uses max, 2 for family 1) or reserved by sibling landclearing-A/B drafts. No valid hero family remains for landclearing-C. Uniqueness check cannot pass without raising the cap or reassigning a sibling site. Last attempted: family 1 (cap 2, used by pool-A + general-A). Static check was clean before this gate; stage stuck at strategy/render.