# Blueprint — cleaning-A

## Round 3 (elevate + fix)
- Photo elevate: every rail frame (and the area house) is now a ruled checklist sheet with the print taped on, a caption in a pencil tone and a gold tick across the corner. Real photos get one sage grade (grayscale + sage colour blend), placeholders draw ink-on-sage paper (new shower and stairs drawings), and the break is redrawn as a full porch scene. Copy elevate: #area is a route sheet (2-line h2, ticked town rows, per-ZIP nowrap list, doubt line at the ZIP check, kit yes/no answers). Fixes: homeowner contact lead and thank-you, kit form markup (data-form-nav/back/next/submit, all steps visible with JS off, progress bar), reviews 1+3 grid, named service links that tick on enter, chooser default recommendation, clock rests at 3:10 for JS-off and reduced motion, monogram + wordmark from 1024px, shadows only on the hero clipboard, hero kicker removed and open-now set in Karla, a fuller hero drawing.

## Round 2 (fix)
- Elevate photo: placeholder photos now fail into drawn pencil sketches on ruled visit-sheet paper (.ph__draw, shown via :has(.is-broken)); break became a paper-bordered pollen sheet with a stamped caption; area photo got the clipboard frame. Elevate distinctiveness: services became a ruled tick list (box + tick drawn on hover/focus, on reveal on touch); tick also in proof band, done card, break stamp, estimator bar. Chooser re-cut as a full-width walk-through sheet (kit checklist, meter + verdict) so it no longer mirrors the estimator. Estimator re-wired to the kit (data-est-item/size) with a room-segmented visit bar + clock + tick. Process story: sticky visit clock + scrubbed rail fill (no pin). Removed Lenis + smooth scroll (they broke reveals in captures). Chooser CTA = Price my visit; hyphenated radio labels → "Every other week".


## Section list

1. **hero** · t-paper · Purpose: trade + town + checklist promise + CTA · Layout: split (clipboard left, type right on desktop; stacked mobile) · Content: h1 "House Cleaning in {{biz.city}}, {{biz.state}}", kicker "Visit checklist: 3 bed / 2 bath", [[call]], [[quote Recurring]] · Media: hero-A1 (clipboard) · Hook: data-sw-signature (intro ticks) · Entrance: text rise + clipboard rise + tick draw.
2. **proof-line** · t-accent · Purpose: trust anchor ("Same team, same checklist") · Layout: statement (centered mono line) · Content: "{{proof.reviews.5.text}}" excerpt + sample tag · Media: none · Hook: none · Entrance: text rise.
3. **process-story** · t-light · Purpose: show top-down dry-to-wet method room by room · Layout: pinned rail (timeline left, rooms right) · Content: kitchen/bath/bedroom/floor cards with times and checklists · Media: process-high-dust, process-baseboard, process-shower-glass, process-vacuum · Hook: data-sw-signature (scroll ticks), data-reveal · Entrance: clip reveal per card.
4. **break** · t-deep · Purpose: full-bleed visual pause + pollen angle · Layout: break (full-width photo) · Content: caption "Pollen season on a Greenville porch rail" · Media: detail-pollen · Hook: none · Entrance: unclip.
5. **estimator** · t-paper · Purpose: visit time + sample price before call · Layout: tool (estimator left, output right) · Content: beds/baths/pets/type inputs; timeline bar + range output · Media: none · Hook: data-estimator, data-est-sketch · Entrance: text rise.
6. **chooser** · t-mid · Purpose: deep vs recurring decision · Layout: tool (checklist module) · Content: last-clean/baseboards/moving inputs; plan recommendation · Media: none · Hook: data-checklist · Entrance: text rise.
7. **services** · t-light · Purpose: all services from facts with sample prices · Layout: grid (3-col desktop, 1-col mobile) · Content: <!-- each services --> card with name, blurb, [[quote .short]] · Media: none · Hook: data-service prefill · Entrance: stagger.
8. **reviews** · t-paper · Purpose: social proof with sample label · Layout: stack (cards) · Content: <!-- each proof.reviews 0:4 --> review card with mini-tick stamp, [[sample review]] · Media: none · Hook: data-sw-signature (mini-tick) · Entrance: stagger.
9. **area** · t-deep · Purpose: service area + ZIP checker · Layout: split (map/list left, zip right) · Content: {{biz.areas|list}}, {{biz.zips|csv}}, data-zip input + aria-live · Media: home-greenville · Hook: data-zip · Entrance: text rise.
10. **contact** · t-accent · Purpose: multi-step quote form · Layout: form (centered) · Content: form[data-lead] steps: visit type → size → frequency → pets/entry → day → contact · Media: none · Hook: data-lead, data-service · Entrance: text rise.
11. **footer** · t-deep · Purpose: disclaimer, credits, final tick · Layout: stack · Content: {{demo.disclaimer}}, [[credits]], final tick at 3:10, [[tel]] · Media: none · Hook: data-sw-signature (final tick) · Entrance: text rise.

## Rhythm check
- 11 sections (within 8-12).
- Tones: paper → accent → light → deep → paper → mid → light → paper → deep → accent → deep. No three same in row. No two dark touching (deep at 4, 9, 11 are separated by paper/mid/light/accent).
- Dark bands: t-deep at 4, 9, 11 (≥1 ✓).
- Color band: t-accent at 2, 10 (≥1 ✓).
- Full-bleed break: section 4 (.break ✓).
- Interactive hooks: data-sw-signature (1,3,8,11), data-estimator (5), data-checklist (6), data-zip (9), data-lead (10) — ≥3 ✓.
- Layout families: split, statement, pinned-rail, break, tool, tool, grid, stack, split, form, stack — ≥3 different, no neighbours share ✓.
- #contact appears once (section 10) ✓.
- Required content: services (7), area+zip (9), hours/open-now (in header/footer via kit), reviews with Sample (8), prices via estimator (5), footer disclaimer+credits (11) ✓.