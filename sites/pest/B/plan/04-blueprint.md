## Round 1
Elevated distinctiveness and tools. The station map is now a working house-footprint tool: slab, crawl or raised, plus well/creek and read-every-visit inputs, relights liquid vs bait in a clockwise sweep. The summed estimator became a dated sample year log, one priced line per visit, printable, never a sum (DEMO-RULES). Hero photo swapped to process-probe (it was pest-A's) and filed as an evidence slip under the map. Services are a numbered log table. Reviews are "Entry NN". The tabs and form now use the right kit hooks. Focus is deep on teal and bone, teal on deep. Reveals have a scroll safety net, and GSAP no longer fights them. Months are spelled out because the "Apr" ban check matched them.

# Blueprint — pest-B

## Rhythm gate check

- Sections: 10 (hero, zip, compare-story, break, services, plan-cost, mosquito, proof, process-strip, contact+footer). ✓ 8-12.
- Hero height: `calc(100svh - var(--header-h))`; next band (zip) peeks ~60px. ✓
- Tone sequence: t-deep (hero) → t-paper (zip) → t-deep (compare-story) → t-paper (break-img is full-bleed, not a tone band) → t-paper (services) → t-accent (plan-cost) → t-paper (mosquito) → t-deep (proof) → t-paper (process-strip) → t-deep (contact+footer). No two dark touching. ✓
- ≥1 t-deep: hero, compare-story, proof, contact+footer. ✓
- ≥1 color band: plan-cost (t-accent). ✓
- ≥1 full-bleed .break: home-baton-rouge between compare-story and services. ✓
- ≥3 data-hooks: data-zip, data-compare, data-estimator, data-tabs, data-lead, data-sw-signature. ✓ (6 hooks, one is signature)
- ≥3 layout families, no neighbours same: map-hero (15), split-story (11), grid-cards (3), full-bleed-break (17), stack-log (9), tabs-strip (6), masonry-reviews (8), photo-strip (14), form-split (2). ✓
- Exactly one #contact; every CTA → #contact or tel:. ✓
- Required content: all 9 services listed; area + ZIP checker; hours/open-now; sample reviews with Sample tag; prices via estimator + sample price block in compare; footer with {{demo.disclaimer}} + [[credits]]. ✓
- Signature sections per concept.json: hero, story (compare-story), proof, footer. ✓

## Section table

| # | id | tone | purpose | layout family | content (tokens) | media keys | hooks | entrance |
|---|-----|------|---------|---------------|------------------|------------|-------|----------|
| 1 | hero | t-deep | Path: show the log thesis + book inspection | 15 map-hero | Kicker "Every station checked, every visit logged"; h1 "Termite & Pest Control in {{biz.city}}"; lead "{{proof.rating}} stars · {{proof.reviewCount}} Sample reviews · {{biz.areas\|list}}"; CTA "Book an inspection" → #contact; secondary "Compare liquid vs bait" → #compare; station ring SVG with 12 dots; first log row "Sample log — scroll to see entries." | hero-B1 (eager) | data-sw-signature="station-ring" | Line-mask h1 reveal; diagonal line draw ≤1.2s; 12 dots stagger rise |
| 2 | zip | t-paper | Objection: do you serve my neighborhood? | 9 stack-log | h2 "Check your ZIP"; ZIP input; aria-live result; if served → enable #contact prefill; if not → nearest area text. Log row: "ZIP · CHECK · RESULT · NEXT". | — | data-zip | Clip reveal on input container |
| 3 | compare-story | t-deep | Objection: liquid or bait? what does each cost? | 11 split-story | h2 "Liquid vs Bait"; pinned station ring on desktop (stations 01-04 light for liquid, 05-08 for bait); two-column compare tool (house type, wells, monitoring pref); sample price ranges from {{proof.prices.1}} and {{proof.prices.2}} with [[sample pricing]]; pros/cons list; hand-off "Ask which fits your house" → #contact prefill problem=termite. Log rows type in beside ring. | story-1 (process-trench), story-2 (process-bait-install) | data-compare, data-sw-signature="station-ring" | Pinned ring (desktop ≥640); stations dial-light in groups; log rows type-in; mobile: stacked cards with clip reveal |
| 4 | break | — | Visual rest + local anchor | 17 full-bleed-break | Full-bleed photo of raised Baton Rouge house; caption "Raised house with porch in South Louisiana; foundation type where bait stations are placed." | home-baton-rouge | — | Image unclip |
| 5 | services | t-paper | Path: every service named with its log-style blurb | 3 grid-cards | h2 "What we check and treat"; 3×3 grid of service cards; each card: station badge (BR-{{#2}}), h3 {{.name}}, p {{.blurb}}, [[quote {{.short}} btn-ghost]]; detail photos on termite contract, Formosan, flood check cards. | detail-mud-tube, detail-wings, detail-crawlspace-vent | data-reveal-stagger | Cards stagger in 60ms; station badges scale on hover |
| 6 | plan-cost | t-accent | Objection: how much will this cost yearly? | 9 stack-log | h2 "Build your plan"; estimator tool: termite plan (none/liquid/bait), renewal y/n, quarterly pest y/n, mosquito months multi-select; output sample yearly range from {{proof.prices}} with [[sample pricing]]; hand-off "Get this plan in writing" → #contact prefill. Log row: "PLAN · ITEMS · RANGE · SAMPLE". | story-3 (hands-label) | data-estimator, data-sw-signature="station-ring" | Count-up on total; station ring shows active plan stations |
| 7 | mosquito | t-paper | Path: seasonal calendar for mosquito visits | 6 tabs-strip | h2 "Mosquito season"; month tabs (Apr–Oct or today auto-selected); per-month visit plan strip with sample per-visit price from {{proof.prices.3}}; hand-off "Book mosquito season" → #contact prefill problem=mosquito. | detail-porch-light | data-tabs | Tab panel slide; active tab underline grows scaleX |
| 8 | proof | t-deep | Trust: sample reviews with station pills + log excerpts | 8 masonry-reviews | h2 "From the log"; 7 review cards; each: station pill (e.g. BR-07), stars, {{.text}}, {{.name}} · {{.town}} · {{.service}}; [[sample review]] tag; guarantee statement "{{proof.guarantee}}"; license "{{proof.license}}" · {{proof.years}} years. | — | data-reveal, data-sw-signature="station-ring" | Cards fade+rise; station ring in margin lights reviewed stations |
| 9 | process-strip | t-paper | Proof: visual process evidence | 14 photo-strip | h2 "How a visit reads"; 4-photo horizontal strip with captions from media plan. | gallery[0-3] | data-reveal | Horizontal scroll-snap; images unclip on enter |
| 10 | contact-footer | t-deep | Path: book + legal | 2 form-split | Left: multi-step form (data-lead) steps problem → house type → closing date → photos → contact; microcopy "We'll call you back to set up a visit."; open-now span. Right: hours table {{hours\|table}}, phone [[tel]], email mailto, areas list {{biz.areas\|list}}. Footer: [[credits]], {{demo.disclaimer}}, © {{year}} {{biz.name}}. Station ring resets to all 12 lit; final log row "Next visit: scheduled." | — | data-lead, data-open-now, data-sw-signature="station-ring" | Form step wipe; ring reset |

## Open issues

(none)
## Build notes (builder)
- Fixed: h1 hidden by CSS translateY + gsap.from (never revealed); header CTA specificity at <900; 320px ZIP-row overflow; hero log row now a real sample entry; SVG stations light via `fill`; compare story pins only `.compare__visual` (pinSpacing false, ≥640px).
- Open issue: media files in dist are identical beige stub JPGs (placeholders). Frames carry a palette gradient behind the img, so real photos drop in without change.
