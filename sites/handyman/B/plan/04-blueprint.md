# Blueprint — handyman-B (Pegboard Home Repair)

## Round 3
Elevate: the hero IS the tool (each tile toggles its punch-list job; the tool lifts off its peg, leaving its painted outline, and a running hours tally sits under the h1; tray and hero start with two labelled sample jobs so first sight is never an empty receipt). Layout: one pegboard grid, with every band in one container on 12 peg columns at >=900 and a page-wide peg field pitched so a hole column falls on each column line (root cause of the x=0 grids: the kit's `ol[role=list]` reset outranked `.ledger`/`.notes__list`, so role="list" was removed). Fixes: two-line hero tags (no clipping), level hangs from its end hole, story steps change colour instead of opacity (>=7:1), story tray labelled and counting, tools parked in the tray off-story, eyebrows cut to hero/builder/photo/area, proof line in Outfit with a nowrap rating, mono trimmed (sample tags, review service, aggregate), board stretches to the tray, "Price it" on row bottoms, 2-col triage chips on phones with the answer scrolled into view.

## Round 2
Motion + wow rebuilt: hero tiles peg-drop with tools swinging to rest (GSAP, ≤1.1 s, h1 untouched); a pinned "wall" story at ≥640px where each tool lifts off the board into the tray as its step comes up; hang-tag swing on the services ledger and the proof pins. The estimator is now a punch list on a peg grid: ticking a job lifts its tool into a tray sheet of hang-tag rows (sample price, hours), totals hours, names the visit (two-hour stop / half-day / full day / two visits), prefills the form and prints. Triage verdicts are colour-coded cards (fix / look first / specialist) with icons and "Add to my list". Fixed the reveal bug (CSS waited for .is-visible, the kit adds .is-in), the malformed frame class and kit hook mismatches. Font sizes consolidated to 5 steps + h1 (sample tags and credits on --fs--1).

Sections now: hero (t-deep, sig) → open-now rail (t-paper) → estimator (t-signal, sig) → triage (t-paper) → how/wall break (t-deep, sig, story) → services ledger (t-paper, sig) → proof pins (t-board, sig) → reviews (t-paper) → photo-to-quote tabs (t-deep) → area + ZIP (t-paper) → contact (t-signal) → footer (t-deep, sig). `t-board` (#4A3B2E pegboard brown) replaces t-mid.

Notes: per-job hour bands are illustrative, labelled "Sample hours", not facts. Media files are temporary 1×1 placeholders: every photo slot has a drawn SVG under it (tool outlines on the hero, finish sketches on the proof pins) and placeholder .png files are rendered invisible, so no grey frames show; real photos cover the drawing. The break and area media slots are unused by design.

## Section list (top to bottom)

| # | id | tone | purpose | layout | content (tokens) | media slot | hooks | entrance |
|---|---|---|---|---|---|---|---|---|
| 1 | hero | t-deep | first 5s: trade + town + action + proof | mosaic (family 8) | kicker "Handyman Services · {{biz.city}}, {{biz.state}}"; h1 "Pick your jobs. See the hours."; [[call]]; proof line "{{proof.rating}} stars · {{proof.reviewCount}} reviews ([[sample rating]])" | hero-B1, hero-B2, hero-B3, fix-tv-mount, fix-drywall-patch, fix-faucet | data-reveal-stagger (tiles), data-sw-signature | tiles drop 60ms stagger |
| 2 | open-now | t-paper | objection: "they'll show up at 4" | rail | [[i clock]] "{{hours\|today}}" · Mon–Sat 8–5:30 · text/SMS | — | data-open-now, data-reveal | text rise |
| 3 | estimator | t-signal | primary conversion: build list + see hours | split (tool left, output right) | punch-list builder: 8 service checkboxes from facts.services; output: hour band per item, total band, visit fit; "Price it" button pre-fills form | tools-pegboard (left panel bg) | data-estimator, data-service, data-sw-signature | tool outline unclip, tags swing in |
| 4 | triage | t-paper | objection: "they'll try something they shouldn't" | stack cards | fix-or-specialist checklist: 6 symptoms → handyman / licensed / inspect-first; honest-limits sentence | fix-light-fixture | data-checklist, data-reveal | cards clip-up stagger |
| 5 | break | t-deep | visual breath, full-bleed photo | break (full-width) | caption: "Level shelf mounted into studs, cables tucked" | break-slot: region-ann-arbor-house | data-reveal="clip" | image unclip |
| 6 | services | t-paper | what we do + sample prices | grid 3-col (tool-outline cards) | <!-- each services --> card: tool SVG, {{.name}}, {{.blurb}}, hang-tag with typical hours from facts.proof.prices (mapped), [[quote {{.short}}]] <!-- /each --> | — | data-sw-signature, data-reveal-stagger | hang-tags swing in |
| 7 | photo-proof | t-mid (shape-only) | objection: "sloppy patch" | mosaic 2×3 | detail shots: clean patch, level shelf, straight caulk, door hardware, faucet installed, furniture assembled | detail-clean-patch, fix-shelf, fix-caulk-tub, detail-door-hardware, fix-faucet, fix-furniture-assembly | data-reveal-stagger | tiles unclip stagger |
| 8 | reviews | t-paper | social proof | list (pinned notes) | <!-- each proof.reviews 0:4 --> note card: "{{.text}}" — {{.name}}, {{.town}} · {{.service}} · [[sample review]] <!-- /each -->; aggregate "{{proof.rating}} / 5 ([[sample rating]])" | — | data-reveal | text rise |
| 9 | photo-quote | t-deep | secondary conversion: text photos for firm price | tabs | photo-to-quote checklist: 4 tabs (wide / close-up / tape / model); each tab shows instruction + sample frame; "Text these to [[tel]]" sms: link | hands-at-work | data-tabs, data-reveal | tab content fade |
| 10 | area | t-paper | service area + ZIP check | split (map left, checker right) | "{{biz.city}} and {{biz.areas\|list}}"; ZIP checker; "We come to {{biz.areas.0}}, {{biz.areas.1}} and {{biz.areas.2}}" | region-ann-arbor-house (cropped map-style) | data-zip, data-reveal | text rise |
| 11 | contact | t-signal | primary form | stack | multi-step quote form; microcopy "We'll call you back to set up a visit."; hours beside phone | — | data-lead, data-service | form step wipe |
| 12 | footer | t-deep | legal + credits + signature close | rail | {{demo.disclaimer}}; [[credits]]; hammer outline + [[call]] as hang-tag; peg holes fade | — | data-sw-signature | static |

## Rhythm check

- 12 sections (within 8–12).
- Tone sequence: deep → paper → signal → paper → deep → paper → mid(shape) → paper → deep → paper → signal → deep. No two dark touching (deep→paper always between). No three same in a row.
- Dark bands: hero, break, photo-quote, footer (4). Color band: signal (estimator, contact). Mid is shape-only.
- Full-bleed break: section 5.
- Interactive hooks: data-estimator (3), data-checklist (4), data-tabs (9), data-zip (10), data-lead (11), data-sw-signature (hero, services, footer). ≥ 3 distinct hooks.
- Layout families: mosaic, rail, split, stack, break, grid, list, tabs. No neighbours share family.
- One #contact form (section 11). All CTAs above point to it or tel:.
- Required content: all 8 services (section 6), service area + ZIP (section 10), hours/open-now (section 2), sample reviews with label (section 8), sample prices via estimator + hang-tags (sections 3, 6), footer disclaimer + credits (section 12).

## Notes for builder

- Peg-hole grid background is a CSS radial-gradient on `body` and every `t-paper`/`t-deep` section; opacity .18 so it never competes with text.
- Tool outlines are inline SVGs defined once in the sprite (`#i-hammer`, `#i-drill`, `#i-wrench`, `#i-tape`, `#i-level`, `#i-caulk`, `#i-screwdriver`, `#i-saw`). Each service maps to one icon by index.
- Hang-tag pill uses `position: absolute; top: var(--s-3); right: var(--s-3); transform: rotate(-3deg)` and swings to 0 on enter via GSAP.
- Estimator output never prints `$`. Hour bands come from `{{proof.prices.*}}` tokens rendered server-side; the JS only toggles visibility and sums ranges.
- Photo-proof section uses `t-mid` bg but no text sits directly on it: cards inside are `t-paper` with their own ink. This satisfies the contrast rule while keeping the visual band.
- Mobile: estimator becomes stacked (tool above, output below); mosaic becomes 2-col; pinned stories become stacked cards with clip reveal (no pin under 640px).