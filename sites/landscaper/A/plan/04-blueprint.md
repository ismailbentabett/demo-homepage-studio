# Blueprint — landscaper-A (Tilth & Tine Landscape)

## Round 1 (elevate + fix)
Placeholder photos were grey frames, so every photo is now a drawn soil treatment (hero profile strip, aeration, amendment + pH, drainage cross-section) and the signature became a real pinned horizon story (#profile, sticky core, roots draw on scroll, 4 steps; stacked under 640px), because photo and motion were the weakest categories.
Sections now: hero (hero-strip) · soil-quiz (checklist) · lawn-renovation (split) · profile (story, .break, t-deep) · soil-amendment (split-rev) · drainage (diagram, t-deep) · estimator (tool) · services (index, all 9 via repeater) · reviews · service-area (t-accent) · contact (4-step kit form, [data-form-nav]). Accent band darkened to #9E4329 and button clay to #9E4329 so text reaches 4.5:1. Removed html smooth scroll (broke the capture walk).


## Section sequence (11 sections)

| # | ID | Tone | Purpose | Layout family | Content tokens | Media slot | Hooks | Entrance |
|---|---|---|---|---|---|---|---|---|
| 1 | hero | t-paper | Trade+city+outcome, CTAs, proof, strip photo | stacked-headline-strip | `{{biz.name}}`, `{{biz.city}}`, `{{biz.phone}}`, `{{proof.rating}}`, `{{proof.reviewCount}}` | hero (strip) | data-split="lines", data-reveal | text rise + strip clip |
| 2 | soil-quiz | t-mid | Diagnose lawn failure cause, match service | tool-panel | services list, NC soil test tip | — | data-checklist (soil-quiz) | text rise |
| 3 | lawn-renovation | t-paper | Overseeding window + countdown + sample price | split-process | `{{services.0.blurb}}`, `{{proof.prices.0.from}}`, `{{proof.prices.0.to}}` | process-aeration | data-countdown, data-reveal | text rise + img clip |
| 4 | break-accent | t-accent | Full-bleed color band, visual breath | statement | "The yard starts underground." | — | data-reveal | fade |
| 5 | soil-amendment | t-mid | Why clay fails, compost/topdressing process | split-process (reversed) | `{{services.1.blurb}}` | process-soil-test | data-reveal | text rise + img clip |
| 6 | drainage | t-deep | French drain/swale explanation + sample price | split-process | `{{services.4.blurb}}`, `{{proof.prices.3.from}}`, `{{proof.prices.3.to}}` | detail-irrigation | data-reveal | text rise + img clip |
| 7 | estimator | t-paper | Project size-to-range tool, sample pricing | tool-panel | `{{proof.prices.*}}` | — | data-estimator | text rise |
| 8 | garden-design | t-mid | Planting beds, drawn plan, plant picker link | split-process | `{{services.2.blurb}}` | process-planting | data-reveal | text rise + img clip |
| 9 | reviews | t-light | 3 sample review cards | review-grid | `{{proof.reviews.0..2}}` | — | data-reveal-stagger | stagger rise |
| 10 | service-area | t-accent | Towns list, ZIP checker start | list + tool-inline | `{{biz.areas\|list}}`, `{{biz.zips\|csv}}` | — | data-zip | text rise |
| 11 | contact | t-paper | Multi-step quote form | form-stack | all services | — | data-lead | text rise |
| 12 | footer | t-deep | Bedrock: biz info, hours, license, disclaimer, credits | footer-cols | `{{biz.*}}`, `{{hours\|table}}`, `{{proof.license}}`, `{{demo.disclaimer}}` | — | — | none |

## Rhythm validation
- Tones: paper → mid → paper → accent → mid → deep → paper → mid → light → accent → paper → deep.
- No two darks touch (deep at #6 followed by paper at #7; deep at #12 is footer).
- Color band present: t-accent at #4 and #10.
- Full-bleed break: #4 break-accent (statement layout, solid color, no image needed — or use a thin horizon-line SVG as decorative element).
- Layout families: stacked-headline-strip, tool-panel, split-process, statement, review-grid, list, form-stack, footer-cols. ≥ 3 distinct, no two neighbours share.
- Interactive hooks: data-checklist (#2), data-countdown (#3), data-estimator (#7), data-zip (#10), data-lead (#11). ≥ 3. Signature hook: data-sw-signature on depth gauge container (wraps all sections).
- One #contact form at #11. All CTAs above point to #contact or tel:.

## Required content placement
- Services: #3 (lawn renovation), #5 (soil amendment), #6 (drainage), #8 (garden design). Remaining services referenced in estimator dropdown and quiz output.
- Service area + ZIP: #10.
- Hours / open-now: header (data-open-now) + footer.
- Sample reviews: #9, all cards carry [[sample Sample review]].
- Sample prices: #3 (aeration range), #6 (drainage range), #7 (estimator output). All labelled [[sample Sample pricing]].
- Footer: {{demo.disclaimer}}, [[credits]], license SAMPLE-NC-LC-4471.

## Depth gauge integration
- Container: `<div class="depth-gauge" data-sw-signature>` wraps sections #1–#11.
- Each section carries `data-depth="N"` where N is the inch mark (0, 2, 6, 12, 18).
- app.js observes intersections and updates `--depth-pct` CSS variable on the gauge fill.
- Horizon dividers: SVG wave between sections, fill matches next section's --bg.
- Mobile: gauge becomes horizontal top bar (4px height), sections stack normally.

## Header
- Logo: `{{biz.initials}}` in Bitter bold, accent color.
- Nav: Services, Process, Pricing, Reviews (all anchors).
- Right: phone `[[tel]]` + "Price it" button `[[quote default btn-primary]]`.
- Scrolled state: bg t-paper, border-bottom var(--rule).
- Mobile: hamburger menu + sticky bottom bar with call + quote.

## Mobile adaptations
- Hero: h1 ≤ 4 lines, strip photo aspect 16:9 instead of 21:9, CTAs stacked vertically.
- Split-process sections: stack vertically (image top, text bottom) on ≤ 640px.
- Tool panels: full-width, inputs stacked.
- Review grid: single column.
- Depth gauge: horizontal bar at top of viewport, fixed.
- Mobile bar: hides on scroll down and when #contact is visible.