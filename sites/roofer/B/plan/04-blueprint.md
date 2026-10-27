# Blueprint — roofer-B · Squarecount · "Counted before you sign" · Pinned Roof Plan

## Round 2
Type + photo elevate: the page now reads as a printed inspection report (mono only on F-numbers, sheet headers and figures; sentence-case Public Sans everywhere else; 15px #2b2f36 timeline in 4×2; one big display figure per band: 32.3 sq hero, count range, 707, sample price, rating), and the plates form a single F-01→F-07 inspection sequence (street → inside → deck chalk → hail square → under shingles → yard → ridge; no drawing repeats), with the wide break plate showing the finished roof with all seven pins ticked. Shoulds: hero ZIP removed so the next band peeks, the stray 29.8 sq replaced by 7 count pins, mobile price rows stacked, the deductible band split (statement + chapter-707 citation), coral swapped for white figures and system-red pins in #prices and the footer. Media swaps (critic-requested sequence): finding-1 home-brick-ranch, finding-3 tool-chalkline, finding-4 hands-pointing-damage, finding-5 process-tearoff, finding-6 process-cleanup, finding-7 process-ridge, break finished-roofline; detail-1/detail-2 removed.

### Open issues
- Marquee / rotate-word CSS in dist comes from the kit `base.css` that build.mjs injects wholesale. src has no such markup or hooks, and the builder may not edit the kit or tools.

## Round 1
Elevated photo + first screen: every photo slot is now an evidence frame (report border, F-tab, drawn blueprint detail under the img, red-pen circle on the defect, leader from the margin pin landing on it), and the hero is a two-page cover spread (cover: city, h1 with trade+place, actions, ZIP; page 1: pinned plan, tally, evidence tiles) with a live plan strip on the phone's first screen. Findings index deleted, one action name per path (Count my squares / Book my inspection), kickers sentence case, count labels Public Sans 15px, deep-band notes #bcc2ca + red button, break caption is now a sign-off card overlapping the roofline by 80px, deductible h2 is the full-width headline moment.

| # | id | tone | purpose (objection / path) | layout family | content (tokens) | media keys | hooks | entrance |
|---|---|---|---|---|---|---|---|---|
| 1 | `#top` hero | t-deep surface + two t-light pages (cover spread) | 5-second answer: local, counts, call now | document | title block (city, state), h1 report title, lead, [[call]], Count my squares, sms, proof line `{{hours\|today}}` · `{{biz.city}}` · `{{proof.rating}}` Sample rating · `{{proof.reviewCount}}`; plan with 7 facet counts + 7 pin anchors; 3 thumbs; summary FIX 3 · WATCH 4 | hero, thumb-1, thumb-2, thumb-3 | `data-sw-signature="pinned-plan"` | sheet rises 40px (no opacity), pins drop, tally counts ≤ 1.2 s, skippable |
| 2 | `#findings` | t-light | "One leak = whole roof?" (obj. 2) + every service listed | margin-rail | sticky dock plan (≥1024) · report index = all 8 services (repeater + [[quote]]) · F-01 inspection report (services.0) · F-02 leak (services.3, services.6 coating note) | finding-1, finding-2, detail-3 | `data-hook="leader-draw"` | leader draws pin → photo, pen circle on verdict; photos unclip |
| 3 | `#count` | t-mid | "Three bids, three roof sizes" (obj. 4) → form | tool-split | F-03 · estimator: footprint / shape / pitch → math lines + squares range on the plan; Sample band `{{proof.prices.1.*}}`, Class 4 `{{proof.prices.2.*}}`, metal `{{proof.prices.3.*}}`; services.2/4/5; "Send me the real count" | finding-3 | `data-hook="square-count"` | facets fill 60ms stagger, total counts (numbers static under RM) |
| 4 | `#claim` | t-paper | "Will insurance pay?" (obj. 3) | timeline | F-04 · services.1 · 8 pinned steps on one straight leader; deductible step red-circled; CTA quote Hail claim help | finding-4 | `data-hook="claim-line"` | still (quiet, readable) except leader draw once |
| 5 | `#deductible` | t-accent | storm-chaser fear (obj. 1): deductible honesty | statement | one big sentence with `{{biz.stateName}}`, ch. 707 note | — | — | none (quiet) |
| 6 | `#under` | t-light | "Rotten wood covered up" + "nails in the driveway" (obj. 5, 6) | margin-rail | dock again · F-05 decking (services.2) · F-06 magnet sweep + gutters (services.7) | finding-5, finding-6 | (part of leader-draw story) | leader draw, photos unclip |
| 7 | `.break` | t-mid | breath + signature variation | full-bleed | finished roofline, blueprint dimension line "32.3 SQ · sample roof", short h2 | break | — | photo unclips |
| 8 | `#prices` | t-deep | "No prices anywhere" (obj. 7) | ledger | 5 line items via `{{proof.prices.N.*}}` with dotted leaders, each pinned to its finding (F-02/F-03), Sample pricing tag, 2 material details | detail-1, detail-2 | — | rows rise, stagger |
| 9 | `#signoff` | t-paper | "Who answers after?" (obj. 8) | notes-grid | `{{proof.rating}}` + `{{proof.reviewCount}}` Sample rating; 6 notes (repeater proof.reviews 0:6), each ending in a ticked pin + Sample review | — | — | notes rise, stagger |
| 10 | `#local` | t-mid | storm chaser (obj. 1): local proof | split | F-07 · areas repeater, ZIP checker, `{{hours\|table}}`, `{{proof.years}}` + `{{proof.license}}` (sample tags) | finding-7 | — | text rises |
| 11 | `#contact` | t-light | the one form ("Request a report" cover sheet) | cover-sheet | call/sms/email + `{{hours\|today}}`, 4-step form (service radios repeater, ZIP + details, when, contact), honest thanks | — | — | none |
| — | footer | t-deep | close-out | — | plan complete, every pin ticked, `{{proof.guarantee}}` (Sample terms), nav, `{{demo.disclaimer}}`, [[credits]] | — | signature (all ticked) | none |

## Rhythm gate (METHOD §4)
- 11 sections ✓. Hero `min-height: calc(100svh - var(--header-h))`; at 1440×900 the sheet ends above the fold edge and #findings' rule + kicker peek ✓.
- Tones: paper · light · mid · paper · accent · light · mid · deep · paper · mid · light (+ deep footer after light). Never 3 light in a row (light, light, mid / paper, mid, light ...) ✓. One t-deep section, touching mid and paper only ✓.
- ≥1 t-deep (#prices) ✓, color band (#deductible t-accent) ✓, full-bleed `.break` ✓.
- Hooks: pinned-plan (signature), leader-draw, square-count, claim-line = 4 ✓.
- Layout families: document, margin-rail, tool-split, timeline, statement, margin-rail, full-bleed, ledger, notes-grid, split, cover-sheet = 10 families, no neighbours alike (the two margin-rail sections are #2 and #6) ✓.
- Exactly one `#contact`; CTAs go to `#contact`, `#count` (the tool, which then leads to #contact), `tel:` or `sms:` ✓.
- Required content: all 8 services (report index repeater + findings), ZIP checker + areas (#local), hours/open-now (hero proof line, #local table, #contact), Sample reviews (#signoff), prices only in the estimator band and the Sample line items, footer disclaimer + credits ✓.
- Signature in concept.json.signature.sections: hero (sheet plan), findings (#findings + #under dock + leaders), square-count (#count plan fills), claim (pinned timeline), line-items (rows pinned F-02/F-03), signoff (ticked pins), footer (plan, all ticked) ✓.

## Decisions (headless)
- 7 facets drawn as a cut-up hip (main hip + one hipped wing); facet squares sum to 29.4, + 10% waste = 32.3 (sample roof, labelled sample).
- Verdicts on the sample roof: FIX F-02 F-04 F-05, WATCH F-01 F-03 F-06 F-07 (= FIX 3 · WATCH 4).
- Estimator math lives in app.js outside the motion guard (it is a tool, not motion); only the fill/count animation is guarded. Formula: footprint × 1.08 eaves × pitch (1.12 walkable / 1.25 steep) ÷ 100, + waste (gable 10 / hip 12 / cut-up 15 %), range ±5 %. No dollar math: the band is the facts' from–to strings.
- `@font-face` from the build has no `font-stretch` range, so width is set with `font-variation-settings: "wdth" N`, not `font-stretch`.
- The brick-ranch manifest alt names a Kansas town: alt overridden in the macro, own `<figure>` with a neutral `data-fallback`.
- No menu module: the mobile header carries the mark + a call button; the mobile bar carries Call + Count my squares; anchors live in the footer nav.

- Hero ≥1024 is `calc(100svh - var(--header-h) - 44px)` so the white #findings band visibly peeks below the sheet at 1440×900 (the full-height version ended exactly at the fold).

## Open issues
- Roofer media library is still placeholder: build warns `OG photo "hero" could not be used (Input file has corrupt header: webp: unable to parse image); the OG image is a plain color.` Re-run build once real photos land under the same keys. Hero surface and thumbs render as flat fills until then.

- (round 1) Niche photos are 43-byte placeholders: `.ev` frames hide the img until naturalWidth ≥ 64 (JS) and show the drawn blueprint detail. Pen-circle positions are tuned to the drawings; retune `transform` on each `.ev__mk .pen-circle` when real photos land. JS-off visitors see the stretched placeholder pixel.
- (round 1) No typography filter exists in build.mjs: facts-derived text (prices.1.note range, review apostrophes) is wrapped in `data-typo` and fixed to en dash / curly quotes at runtime in app.js. A `|typo` build filter (or a facts edit) is the proper fix: orchestrator's call.
- (round 1) `sw-marquee` / `sw-rotate-word` selectors in dist come from kit/base.css, not src; inert here.
- (round 1) OG image is a plain colour until the hero photo is real.
