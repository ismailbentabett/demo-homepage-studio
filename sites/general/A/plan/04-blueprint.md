# Blueprint — general-A (Crosstie Building Co.)

## Round 2 (final fix)
Elevate: (1) Photo 8.5 → every grey placeholder frame replaced by a drawn site plate (line-art section/elevation drawings in the creosote + work-light palette, stenciled with the week); (2) Distinctiveness/wow → the crosstie track now runs as a full-width hero track (WK 01–20, today marker slides to WK 06), a scrubbed rail fill + DONE stamps on every tie, branch-line rails in services, tie-headed proof cards and an amber buffer-stop footer. t-paper becomes real chalk paper (#ebe5d9) so deep/paper bands no longer read as one dark run. Fixes: kit-standard 4-step lead form with [data-form-nav]; kit tabs, checklist and ZIP markup; muted text ≥ 4.5:1 on every tone; data-layout on each section.

| # | id | tone | purpose | layout | content | media | hooks | entrance |
|---|---|---|---|---|---|---|---|---|
| 1 | hero | t-deep | trade + city + Friday promise, call | track-hero | kicker, h1, lead, proof (hours/sample rating), call + price an addition, drawn elevation, WK 01–20 track | drawn | data-sw-signature | line-mask h1, today marker WK01→06 ≤1.2s |
| 2 | promise | t-paper | "will I know what's happening?" | statement | report anatomy Done / Next / From you | — | — | none (quiet) |
| 3 | track-story | t-deep | "will it double?" / "will they vanish?" | track-stack | 4 ties WK01/03/06/18 with drawn plates + report cards | drawn ×4 | data-sw-signature | rail fill scrub + DONE stamp per tie |
| 4 | break | t-mid | breath: whole job on one line | full-bleed | 20 ties, phase brackets | drawn | — | clip |
| 5 | services | t-paper | what they build | branch-line | repeater services ×8 | — | data-sw-signature | rise stagger |
| 6 | timeline | t-deep | "how long?" → form | split-tool | timeline builder (sample) | — | data-hook="timeline" | bars fill |
| 7 | weekly-report | t-accent | show the Friday report | tabs | kit tabs Done/Next/From you + drawn thumbs | drawn ×3 | data-tabs, data-hook | none |
| 8 | live-in | t-paper | "can we live through it?" | checklist | kit checklist ×6 | — | data-checklist, data-hook | rise |
| 9 | proof | t-deep | trust | telegram-grid | repeater reviews, Sample tags | — | data-sw-signature | stagger |
| 10 | prices-area | t-paper | cost + area + hours | ledger-split | sample prices, guarantee (sample), ZIP, hours | — | data-zip, data-hook | rise |
| 11 | contact | t-deep | conversion | form-panel | 4-step kit form, next steps | — | data-lead, data-hook | none |
| — | footer | t-accent | buffer stop | rail-terminate | disclaimer, licence (sample), credits | — | data-sw-signature | static |

Rhythm: deep/paper/deep/mid/paper/deep/accent/paper/deep/paper/deep/accent(footer): no dark pair touches, no 3 same in a row; 11 sections; 11 layout families, no neighbour repeats; t-deep ×5, colour band ×2, .break ×1; signature in hero, track-story, services, proof, footer (= concept.json). One #contact; every CTA → #contact or tel:.

---
## Round 1 blueprint (kept for history)

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