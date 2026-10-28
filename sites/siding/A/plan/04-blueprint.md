# siding-A · Blueprint (Lap Course + Nail Line)

| # | id | tone | purpose (objection / path) | layout family | content (tokens) | media keys | hooks | entrance |
|---|---|---|---|---|---|---|---|---|
| C-01 | #hero | t-deep | 10-second answer: they open the wall first; call or price it | `split` (text column + 6/12 gable mask: photo half / drawn-wall half) | kicker {{biz.tradeLabel}} · {{biz.city}}, h1, lead (4 materials), [[call]] + Price my walls → #squares, proof line {{hours\|today}} · {{proof.rating}} Sample · from {{proof.prices.0.from}} Sample | hero (hero-A2, eager, scale 1.08) | `data-hook="intro"`, `data-sw-signature` | rake draws eave→ridge, wall layers build bottom-up 90ms (≤1.1 s), h1 readable at frame 0 |
| C-02 | #services | t-paper | "What do you actually do?": every service as one lap board | `rows` (course rows, gutter number + name + blurb + Price it) | repeater `services` (8), [[quote]] per row | — | `data-sw-signature` | rows stagger-rise (reveal-stagger) |
| C-03 | #layers | t-deep | "They'll cover rotten wood" / "weeks in plastic" / "nails in the yard": 7 layers in order | `stack` (sticky title column + 7-course stack, pinned ≥ 900) | 7 layers: tear-off, sheathing (price per sheet shown first), wrap, flashing, starter, courses, trim; check + {{biz.stateName}} winter line each | — | `data-hook="stack"`, `data-sw-signature` | story 1: one course set per step from the bottom, drip falls 6px, nails below hide; < 900 stacked, clip reveal |
| C-04 | #winter (.break) | t-light | Breath: a frame house in snow, the climate the wall is for | `bleed` (full-bleed photo + caption strip) | caption (describes the frame) | break (hero-A3; width 124% crop keeps the FOR SALE sign out at every width) | — | image unclips (clip) |
| C-05 | #reveal | t-mid | "It'll look cheap and wavy": see 4 / 5 / 7 in., Dutch lap, board and batten | `tool` (tabs left, live wall drawing right) | 5 tab panels, output line, review Beth A. quote line (Sample) | — | `data-hook="draw"`, `data-sw-signature` | story 2: course lines redraw (dashoffset 520ms) on each tab |
| C-06 | #squares | t-paper | "How much for my house?": squares calculator → Sample range → form | `calc` (inputs board + result board) | estimator on {{proof.prices.0-2}}, Sample tag, Send these numbers → form | — | `data-hook="squares"` | none (quiet tool) |
| C-07 | #prices | t-deep | "No prices": 5 Sample ranges on a course board | `board` (gable-notched heading + 5 lap boards) | repeater `proof.prices`, Sample pricing tag, sheathing note | — | `data-sw-signature` | boards set one by one (stagger) |
| C-08 | #reviews | t-light | trust: 6 Sample reviews hung on courses, staggered butt joints | `cards` (3 courses × 2 cards, wide/narrow alternating) | repeater `proof.reviews`, {{proof.rating}} / {{proof.reviewCount}} Sample | — | `data-sw-signature` | cards rise |
| C-09 | #storm | t-mid | "Insurance won't cover it": calm 7-item storm checklist | `checklist` (heading left, 2-col check grid right) | 7 items, result line, prefill Hail and wind repair, review Craig O. line | — | `data-hook="storm"` | none (quiet) |
| C-10 | #area | t-ember | "Do you come to me? Are you open?": the starter strip | `strip` (ZIP checker · towns · hours in 3 cells) | [[zip]], `biz.areas` repeater, {{hours\|table}}, {{hours\|today}} | — | `data-hook="zip"` | none |
| C-11 | #contact | t-paper | the one form: 4 steps, honest thank-you | `form` (call/text side + form) | form[data-lead] 4 steps, [[call]], sms, email, hours | — | — | none |
| — | footer | t-deep | top course + trim board under the rake: name, nav, licence (sample), promise (sample), disclaimer, credits | footer | {{demo.disclaimer}}, [[credits]], {{proof.license}}, {{proof.guarantee}} | — | `data-sw-signature` | none |

## Rhythm gate (METHOD §4)
- 11 sections (8-12) ✓. Hero `min-height: calc(100svh - var(--header-h))`, the services paper band peeks in at 1440×900 and 390×844 ✓.
- Tones: deep · paper · deep · light · mid · paper · deep · light · mid · ember · paper (+ footer deep). No 3 of a category in a row; no two dark (deep/mid treated as dark too) touching ✓.
- ≥ 1 t-deep (3) ✓, colour band t-ember (#area) ✓, full-bleed `.break` (#winter) ✓.
- Hooks: intro, stack, draw, squares, storm, zip + `data-sw-signature` on 7 course bands ✓ (≥ 3).
- Layout families: split, rows, stack, bleed, tool, calc, board, cards, checklist, strip, form: 11, no neighbours share ✓.
- Exactly one `#contact`; every CTA is `tel:`, `sms:`, `#contact` ([[quote]] / prefill) or `#squares` (a tool that ends at #contact) ✓.
- Required content: 8 services (repeater) ✓, areas + ZIP checker (#area) ✓, hours table + open-now (#area, hero, contact) ✓, Sample reviews (#reviews, Sample tag) ✓, prices only in #prices and the estimator, Sample-tagged ✓, footer with {{demo.disclaimer}} + [[credits]] ✓.
- Signature in every section concept.json lists: hero (drawn wall courses + nail line on the last course), layers (7-course stack), reveal (the course lines are the tool output), prices (lap boards with nail-head bullets), reviews (cards on courses), footer (top course + trim board + rake) ✓. Also on services.

## Decisions (headless)
- Hero: the h1 sits in its own column under an eave hairline (not inside the mask) so it reads at frame 0 on 390; the gable art keeps a 4:3 box at every width so the drawn half never distorts (rake = aspect/4 → 33.3%).
- Pin at `(min-width: 1200px) and (min-height: 760px)` (inside the ≥ 640 rule): 7 boards do not fit a 640-899 stage.
- Form has 4 steps (contract), not the 3 in the concept: material → the house → when → contact.
- The visualizer redraw is a tool, so it runs with reduced motion too (instant, no dash animation); only the animation sits behind the `sw-motion` guard.
- hero-A3 manifest alt is a personal note ("the house we just bought…"); the img gets its own descriptive alt.

## Open issues
(none yet)
