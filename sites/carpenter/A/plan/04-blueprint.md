# Blueprint — carpenter-A

## Round 5 (answering critique 4)
Layout: PL 04 is now the page's one off-grid moment. The whole elevation, at its own 600×240 ratio (meet, with a porch-only crop on phones), sits offset right and hangs 112px over into the porch-check band. The PL 07 seam overlap is gone. #proof now anchors its left column with the 4.9, the Sample guarantee and the PL 07 finished joint, and the reviews hang from a rule. Type: three voices. Tracked caps are kept only for the CUT nn token; every other label (kicker, buttons, drawing dimensions, form labels, Sample chips) is mixed-case mono at .02em. PL 05 label is end-anchored and inset.

## Round 3 (fix + elevate)
Type: every h2 now sits under a large Young Serif cut number (01–09) against a small mono spec, and all dimensions use one ½ ¼ ¾ glyph style. Layout: the footer is now paper and gathers CUT 00–09 into one finished cut list; the finished-scarf plate (PL 07) overlaps the proof/area seam. The story is now scrubbed without a pin (no spacer gap), reveals and counters are gone (no blank capture), services are an accordion under 640px, the estimator starts on the selected job, and the form uses the kit [data-form-nav] markup.

## Round 2
Photo: every placeholder slot is now a drawn shop-drawing plate (teal + cream duotone, PL numbers, dimension lines); a real photo hides its plate once it loads. Motion/wow: pinned 3-step scarf-joint story (cut → fit oak → prime) in #story-rot, and the estimator price is cut in by a kerf line on every change. Also fixed: giant unsized button icons, broken t-accent tone, estimator and rot-check wiring, hidden-h1 split CSS, kerf hidden with JS off, 390 overflow. Signature added to #services and #area.

Rhythm: 10 sections. Tones alternate; no two dark touching. One full-bleed break. ≥3 data-hook including signature. ≥3 layout families. One #contact form.

## 1. Hero (t-paper) — family: filmstrip rail
- Purpose: trade + town in 5s; primary call; proof line.
- Content: kicker "{{biz.stateName}} · rot repair · matched trim · built-ins"; h1 "Old-house carpentry in {{biz.city}}"; [[call]]; [[quote rot-repair]]; proof "{{proof.years}} years splicing Maine porches · Sample".
- Media: hero filmstrip keys hero-A1, process-measure, process-mark-square, process-saw-cut, process-chisel, process-dry-fit, process-paint-trim (7 frames numbered CUT 00–06).
- Hooks: data-sw-signature on cut-rule; data-carousel on filmstrip.
- Entrance: text rise; filmstrip slide-in with counter.

## 2. Rot Repair Story (t-deep) — family: pinned SVG story
- Purpose: objection "paint over rot"; show splice not cover.
- Content: cut-rule "CUT 02 · SILL DUTCHMAN · 2½ × 7 × 38 · WHITE OAK"; scarf-joint SVG animation; copy from facts.services.0.blurb; sample price {{proof.prices.0.from}}–{{proof.prices.0.to}} {{proof.prices.0.unit}} [[sample pricing]].
- Media: material-rotten-wood (left), detail-window-sill (right).
- Hooks: data-reveal="clip" on images; data-sw-signature on cut-rule.
- Entrance: clip reveal images; rule wipe.

## 3. Repair-or-Replace Tool (t-accent) — family: split
- Purpose: interactive diagnosis → form handoff.
- Content: [data-checklist] rot-check tool; output region aria-live; CTA "Send a photo" [[quote rot-repair]].
- Media: none (tool only).
- Hooks: data-checklist, data-service prefill.
- Entrance: text rise.

## 4. Matched Trim Cards (t-paper) — family: grid
- Purpose: objection "new won't match old"; show profile matching.
- Content: 3 cards from services (matched trim, sash repair, door fixes); each tops with cut-rule variant; review quote {{proof.reviews.4.text}} — {{proof.reviews.4.name}}, {{proof.reviews.4.town}} [[sample review]].
- Media: detail-crown-corner, material-molding-profiles, detail-panel-door.
- Hooks: data-reveal-stagger on cards; data-sw-signature on rules.
- Entrance: stagger cards 60ms.

## 5. Full-Bleed Break (t-deep) — family: break
- Purpose: visual pause; regional anchor.
- Content: none (photo only).
- Media: region-victorian-house (full-bleed, object-position 50% 40%).
- Hooks: data-reveal="clip".
- Entrance: clip reveal.

## 6. Porch Safety Checklist (t-mid) — family: split
- Purpose: objection "is porch safe?"; urgent booking path.
- Content: [data-checklist] porch-safety tool (6 yes/no); output aria-live; CTA [[quote porch-repair]].
- Media: region-porch-columns (right).
- Hooks: data-checklist, data-service.
- Entrance: text rise left, clip right.

## 7. Services List (t-paper) — family: list
- Purpose: all services visible; secondary CTAs.
- Content: <!-- each services --> with name, blurb, [[quote .short btn-ghost]].
- Media: none.
- Hooks: data-reveal-stagger.
- Entrance: stagger rows.

## 8. Proof & Prices (t-deep) — family: stack
- Purpose: trust + price transparency.
- Content: rating {{proof.rating}} / {{proof.reviewCount}} reviews [[sample rating]]; 2 review quotes; estimator [data-estimator] showing sample ranges from proof.prices; guarantee {{proof.guarantee}} [[sample guarantee]].
- Media: hands-at-work (small frame).
- Hooks: data-count on rating/reviewCount; data-estimator; data-sw-signature on cut-rule footer variant.
- Entrance: count-up; rule wipe.

## 9. Service Area + ZIP (t-paper) — family: split
- Purpose: confirm coverage; prefill form.
- Content: city + areas {{biz.areas|list}}; [data-zip] checker; open-now [data-open-now]; hours snippet.
- Media: season-autumn-steps (right).
- Hooks: data-zip, data-open-now.
- Entrance: text rise left, clip right.

## 10. Contact Form + Footer (t-deep) — family: stack
- Purpose: primary conversion; legal.
- Content: #contact form [data-lead] (problem → part → photo note → contact); honest thank-you per DEMO-RULES §3; footer: {{demo.disclaimer}}; [[credits]]; final cut-rule "CUT 99 · FINISHED JOINT".
- Media: none.
- Hooks: data-lead, data-sw-signature on footer rule.
- Entrance: text rise.

## Rhythm check
Tones: paper, deep, accent, paper, deep, mid, paper, deep, paper, deep. No 3 same in row ✓. No two dark touching (deep→accent ✓, deep→mid ✓, deep→paper ✓) ✓. Dark bands: 4 ✓. Color band: t-accent ✓. Break: section 5 ✓. Hooks: data-sw-signature (hero, rot, trim, proof, footer = 5), data-checklist (2), data-zip, data-estimator, data-carousel, data-open-now, data-lead = 11 ≥3 ✓. Layout families: filmstrip, pinned-SVG, split, grid, break, list, stack = 7 ≥3, no neighbors same ✓. One #contact ✓. Required content: services ✓, area+zip ✓, hours/open-now ✓, sample reviews ✓, sample prices via estimator ✓, disclaimer+credits ✓.