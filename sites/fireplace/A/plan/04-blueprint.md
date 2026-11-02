# Blueprint — fireplace-A

| # | id | tone | purpose | layout | content (tokens) | media | hooks | entrance |
|---|---|---|---|---|---|---|---|---|
| 1 | hero | t-deep | trade + town + promise + first action | arch-frame | kicker "Chimney sweeps & stove service · {{biz.city}}", h1 "From the hearth to the cap", lead "{{hours|today}} · {{biz.city}} · {{proof.rating}} [[sample rating]]", [[call btn-primary]], [[quote Sweep btn-ghost]] | hero-A3 | data-header, data-split="lines" | line-mask h1, ember glow intro |
| 2 | checker | t-paper | objection: don't know sweep vs inspection | tool-stack | Symptom checker (7 symptoms → visit type), ZIP checker below | — | data-zip, data-checklist | text rise |
| 3 | process | t-deep | objection: soot on rug + what sweep removes | split-level (pinned story ≥640) | L1 Firebox: drop cloth + vacuum + brush; creosote stage tiles; sample review Dan P. (white rug) | process-vacuum, process-roof-rods | data-sw-signature="flue-level", data-reveal | clip wipe story |
| 4 | services | t-paper | all services at their flue level | grid (3-col ≥900, 1-col mobile) | <!-- each services --> card with level tag, {{.name}}, {{.blurb}}, [[quote {{.short}} btn-ghost]] | — | data-reveal-stagger | stagger cards |
| 5 | break | t-mid | full-bleed visual pause, no text | break (full-bleed photo) | — | appliance-masonry | — | unclip |
| 6 | camera | t-deep | objection: chimney fire fear + smoky room | split (photo left, text right ≥900) | L3 Smoke shelf: camera inspection photos, findings fine/watch/fix, smoky-room fixes, sample review Leah M. | tool-camera | data-reveal | text rise + image unclip |
| 7 | stoves | t-paper | objection: stove installed right + insert warmth | split (text left, photo right ≥900) | L4 Liner: stainless liners + stove/insert installs, clearances, sample review Greg T. | appliance-insert | data-reveal | text rise + image unclip |
| 8 | proof | t-light | trust: sample reviews + guarantee | rail (horizontal scroll ≥900, stack mobile) | 6 sample reviews with level tags, clean-hearth guarantee {{proof.guarantee}}, [[sample review]] | — | data-carousel | stagger |
| 9 | prices | t-accent | objection: cost transparency | list (estimator rows) | Sample price ranges via estimator, labelled [[sample pricing]], level tag per row | — | data-estimator | text rise |
| 10 | area | t-paper | objection: do you come to my town | stack | ZIP checker, {{biz.areas|list}}, hours {{hours|table}}, [[sample label]] | — | data-zip | text rise |
| 11 | contact | t-deep | primary conversion | form-stack | Multi-step quote form (what you burn → what's happening → last swept → area → contact), honest thank-you, microcopy "We'll call you back to set up a visit." | — | data-lead | text rise |
| 12 | footer | t-mid | disclaimer + credits + cap signature | stack | {{demo.disclaimer}}, [[credits]], nav anchors, cap-level marker | — | — | none (quiet) |

## Rhythm gate check
- **Sections:** 12 (within 8-12). Hero is `calc(100svh - var(--header-h))`; checker peeks in.
- **Tone run:** deep → paper → deep → paper → mid → deep → paper → light → accent → paper → deep → mid. No three same in a row. No two dark touching (deep→paper→deep OK; mid breaks deep→deep risk at break→camera; break is t-mid, camera is t-deep — OK).
- **Dark band:** t-deep appears at hero, process, camera, contact. ✓
- **Color band:** t-accent at prices. ✓
- **Full-bleed break:** #break with `.break` class. ✓
- **Interactive hooks:** data-zip (checker + area), data-checklist (symptom), data-sw-signature="flue-level" (process), data-estimator (prices), data-lead (contact), data-carousel (proof). ≥3, includes signature. ✓
- **Layout families:** arch-frame, tool-stack, split-level, grid, break, split, rail, list, form-stack, stack. ≥3, no neighbours share. ✓
- **#contact:** exactly one, at section 11. Every CTA points to #contact or tel:. ✓
- **Required content:** all 8 services (repeater), area + ZIP checker, hours + open-now, 6 sample reviews with Sample tag, sample prices via estimator, footer with {{demo.disclaimer}} + [[credits]]. ✓
- **Signature sections:** concept.json.signature.sections = ["hero","process","services","proof","prices","contact"]. Flue-level marker appears in each. ✓

## Round 0

Elevation moves applied: flue cross-section divider inserted between proof and prices (t-paper arch motif); symptom checker restructured as vertical full-width tap targets with flue-rail left accent on mobile; mobile bar call button changed to ghost style for visual differentiation.

### Open issues

- **Horizontal overflow at 390px and 320px (blocker, 4 failed fix attempts):** Render check reports page width 415px at 390px viewport and 413px at 320px. Widest elements: div.checker__symptom (right 415), div.checker__zip (right 415), article.review-card.card (right 764), span.level-tag (right 582), p inside review cards (right 739). Applied fixes: overflow-x: clip on html/body/main, max-width: 100vw on html/body, box-sizing: border-box globally, width: 100% + min-width: 0 + overflow-wrap: anywhere on checker containers and children, contain: layout on proof__rail, restructured .wrap to use padding-inline with box-sizing. None resolved the bounding box measurement. Root cause is likely the checker section's `.wrap.split` grid container whose children have intrinsic content widths that expand beyond the padded container, and/or the proof rail carousel track's flex children forcing page width. Requires HTML restructuring (removing .split from checker on mobile, or wrapping carousel track in a fixed-width overflow-hidden container) rather than CSS-only containment. Left for critic scoring per hard stop rule.