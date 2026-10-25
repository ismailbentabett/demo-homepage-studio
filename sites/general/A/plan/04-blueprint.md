# Blueprint — general-A (Crosstie Building Co.)

## Section list

| # | ID | Tone | Purpose | Layout | Content tokens | Media slot | Hooks | Entrance |
|---|---|---|---|---|---|---|---|---|
| 1 | hero | t-deep | Trade+city+outcome in h1; primary CTA; proof line; video atmosphere | split (rails left, type+video right) | kicker "General Contracting · Nashville, TN"; h1 "Week 1 to week 20. A report every Friday."; proof "Sample rating {{proof.rating}} · {{proof.reviewCount}} reviews · Mon–Fri 7–5"; [[call]] + [[quote additions]] | heroVideo: hero-A1 | data-header, data-sw-signature | rails draw 900ms, h1 line-mask 70ms stagger |
| 2 | promise | t-paper | Answer "won't know what's happening" | statement (centered) | "Every Friday you get a report: what we did, what is next, what we need from you by Monday." | — | — | text rise |
| 3 | track-story | t-deep | Process rhythm; answer "cost/time double", "disappear" | pinned stack (≥640) / stacked cards (<640) | 4 ties: Week 1 Demo, Week 3 Footings, Week 6 Framing Inspection, Week 18 Walk-through; each with report card (done/next/decisions) | process-demo, process-footings, process-framing, process-inspection | data-sw-signature, data-reveal="clip" | today-line scrubs down; ties stamp DONE on crossing |
| 4 | break | t-mid | Visual breath; full-bleed photo | full-bleed frame | caption "Framing silhouettes at dusk under work lights" | break: crew-from-behind | data-reveal="clip" | image unclip |
| 5 | services | t-paper | What they build; branch lines off track | rail grid (3 branch lines) | <!-- each services --> tie bar with {{.name}} + {{.blurb}}; grouped Kitchen Line / Addition Line / Whole-Home Line | — | data-service prefill | text rise stagger 60ms |
| 6 | timeline-tool | t-deep | Answer "how long"; tool → form hand-off | split (tool left, explanation right) | Project timeline builder; inputs project type/size/start month; output mini-track + move-back week | tools-tape-level | data-estimator, data-service prefill | ui fade |
| 7 | weekly-report | t-accent | Show the Friday report; answer "disappear" | tabs panel | 3 tabs Done/Next/Decisions; sample telegram-style card with photo slot | detail-kitchen-finished | data-tabs | tab switch fade |
| 8 | live-in-guide | t-paper | Answer "living in dust"; checklist tool | checklist panel | Live-in-or-move-out guide; inputs project type/kids/office; output hard-weeks list | — | data-checklist | text rise |
| 9 | proof | t-deep | Trust via quoted report lines; sample labels | telegram grid (2×3) | <!-- each proof.reviews --> telegram card with {{.text}}, {{.name}}, {{.town}}; [[sample Sample review]] | — | data-reveal-stagger | stagger 60ms |
| 10 | prices | t-paper | Cost ranges; sample only | estimator panel | Cost range estimator; inputs project type/size; output range from {{proof.prices}} with Sample tag | — | data-estimator | ui fade |
| 11 | area | t-mid | Service area + ZIP check | split (map/list left, zip right) | {{biz.city}} + {{biz.areas|list}}; ZIP checker | region-nashville-bungalow | data-zip | text rise |
| 12 | contact | t-deep | Primary conversion; multi-step form | form panel | Multi-step quote form; prefills from tools | hands-at-work | data-lead | ui fade |
| 13 | footer | t-deep | Disclaimer, credits, final tie | rail terminate | {{demo.disclaimer}}; [[credits]]; week-20 tie buffer stop | — | data-sw-signature | static |

## Rhythm check
- Tones: deep, paper, deep, mid, paper, deep, accent, paper, deep, paper, mid, deep, deep → no 3 same in row; deep/paper/deep alternation holds; one accent band (#7); one mid break (#4, #11).
- Dark bands never touch except footer (final tie is intentional termination; separated from #12 contact by spacing and distinct layout).
- Full-bleed break at #4.
- Interactive hooks: data-sw-signature (hero, track-story, footer), data-estimator (timeline-tool, prices), data-tabs (weekly-report), data-checklist (live-in-guide), data-zip (area), data-lead (contact) = 6 hooks ≥ 3.
- Layout families: split, statement, pinned-stack, full-bleed, rail-grid, split, tabs, checklist, telegram-grid, estimator, split, form, rail-terminate = 10 families, no two neighbours alike.
- Sections: 13 (within 8-12 range? Actually 13 exceeds 12 max. Merge #11 area into #10 prices or fold ZIP into footer. Decision: merge area+zip into #10 prices section as a combined "Cost & Area" band. New count = 12.)

Revised #10: prices-area | t-paper | Cost ranges + service area + ZIP | split (estimator left, area+zip right) | estimator + {{biz.areas|list}} + data-zip | region-nashville-bungalow | data-estimator, data-zip | ui fade

Final count: 12 sections. Rhythm valid.