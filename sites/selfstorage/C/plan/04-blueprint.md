# Blueprint — selfstorage-C

| # | id | tone | purpose | layout | content (tokens) | media | hooks | entrance |
|---|---|---|---|---|---|---|---|---|
| 1 | hero | t-light | Trade+town+act | editorial-cover | masthead, issue line, 4 cover anchors | hero-C | data-sw-signature="tide-calendar" | zoom settle + stagger lines + tide draw |
| 2 | snowbird | t-paper | Objection: timing/season | split-story | Apr-May story, car+golf cart, season planner tool | hero-C-2 | data-hook="season-planner" | text rise + img unclip |
| 3 | boats | t-light | Objection: HOA/boat fit | split-story | Covered+open spaces, boat fit check tool | doors-row-orange | data-hook="boat-fit-check" | text rise + img unclip |
| 4 | storm | t-accent | Objection: storm timing | stack | Aug-Oct checklist, shutters/generator/patio | hero-C-3 | data-hook="season-planner" | text rise |
| 5 | sizer | t-paper | Objection: wrong size | tool-stack | What Fits Sizer, sample price block | detail-rollup-door | data-hook="estimator" | clip reveal |
| 6 | climate | t-mid | Objection: mildew | split | Climate hallway explanation, what it holds | hero-B | — | text rise + img unclip |
| 7 | security | t-light | Objection: safety | mosaic | Gate keypad, cameras, family-owned | detail-gate-keypad, detail-security-camera, detail-padlock-hasp | — | stagger cards |
| 8 | hours | t-deep | Objection: access | statement | Two clocks, live open-now, gate code | — | data-open-now, data-hook="zip" | text rise |
| 9 | prices | t-paper | Proof: fair pricing | list | Sample price rows from proof.prices, guarantee | — | data-hook="estimator" | stagger rows |
| 10 | reviews | t-light | Proof: trust | rail | 6 sample reviews with month pills, rating | — | — | stagger cards |
| 11 | contact | t-mid | Convert | stack-form | Multi-step form (size→climate→date→contact) | — | data-lead | fade up |
| 12 | footer | t-deep | Close + credits | stack | Tide band reset, clocks, disclaimer, credits | — | — | — |

## Rhythm gate check
- 12 sections: PASS (8-12 range).
- Hero height = `calc(100svh - var(--header-h))`; next band (#snowbird t-paper) peeks in: PASS.
- No 3 same tones in a row: light→paper→light→accent→paper→mid→light→deep→paper→light→mid→deep. PASS.
- No two dark sections touching: deep at #8 followed by paper at #9; deep at #12 is last. PASS.
- ≥1 t-deep: #8 and #12. PASS.
- ≥1 color band: #4 t-accent. PASS.
- ≥1 full-bleed .break: hero-C is full-bleed editorial cover. PASS.
- ≥3 data-hooks: season-planner (#2, #4), boat-fit-check (#3), estimator (#5, #9), zip (#8), plus data-sw-signature on hero. PASS.
- ≥3 layout families: editorial-cover, split-story, stack, tool-stack, split, mosaic, statement, list, rail, stack-form. No neighbours share. PASS.
- Exactly one #contact: yes, section 11. All CTAs point to #contact or tel:. PASS.
- Required content: all 9 services appear across sections; area + ZIP checker in #hours; hours/open-now in #hours; sample reviews with Sample tag in #reviews; sample prices via estimator/price block in #prices; footer has {{demo.disclaimer}} + [[credits]]. PASS.
- Signature sections per concept.json: hero, snowbird, storm, boats, reno (mapped to sizer/climate stories), reviews, footer. Tide band appears in each. PASS.

## Open issues
- **Hero family collision (unresolvable):** All 15 hero families are at their library usage cap (7) or reserved by sibling draft concepts (selfstorage-A/B hold family 1). No available hero family exists for selfstorage-C. The site cannot pass `check-unique --concept` without a registry cleanup or sibling reservation change. Static check is clean; render screenshots were captured but stage cannot advance to render due to this collision. Marking needs-human per hard-stop rule.