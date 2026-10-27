## Round 3
Elevate a11y: tools band re-toned to safety orange #ff5f1f with hazard-tape edges, ink text (~5.7:1), deeper sheet shadows. Elevate motion: one Gauge value drives the story clip-wipe (top-down, score line, no crossfade), pass counter, step focus and the rail; sections own a data-layer (services = hovered job depth, tools = peeler list, pricing = ticket reach, 7 after). Shoulds: pricing column sticky with Price it under the lead; photo textures + their credits removed (no media rendered); middots and Sheet 0N prefixes dropped, depth captions in Outfit 14px; rail anchored to the column gutter (left: max(12px, 50vw - 684px)). Open-now line keeps the kit middot (kit output).

## Round 2
Rebuilt as a drawn wall-section system (photos are 1×1 placeholders): hero cutaway plate, a scrubbed peel story with dust puffs (Elevate: photo → unified drawn treatment), the estimator ticket fused with the Layer Gauge (Elevate: wow). Plus depth chips on services/reviews, tear-out sheets with perforated edges, a fixed margin rail ≥1380px, and every copy-2 swap.
Sections: hero t-deep/hero-cutaway · trust t-paper/rail · peel t-deep/story · services t-paper/grid · tools t-accent/bench · pricing t-paper/ticket · haul t-mid.break/full-bleed · reviews t-paper/ledger · contact t-deep/form-split · footer t-paper. Signature: hero, process (peel), services, reviews, footer.
Note: `.plate`/`.haul` keep the photo as a 12% grayscale texture under the drawing; when real photos arrive, swap the drawing for `[[frame]]`.
Open issues: credits are generic ("Demo Homepage Studio") from the manifest, and the OG path is relative because the build injects it; neither can be fixed in src.

# Blueprint — demolition-A

Rhythm: 10 sections. Tones alternate; no two dark touching. One t-accent band. One .break. Three+ data-hook including data-sw-signature. Layouts never repeat adjacently.

## 1. hero · t-deep · family 12 sticky-photo-peel
- Purpose: trade + town in 5s; first layer peel moment.
- Content: kicker "{{biz.tradeLabel}} · {{biz.city}}, {{biz.state}}"; h1 "Interior tear-outs that leave your house clean"; three scrolling statements ("Plastic dust walls before any swing", "We test first when the house is old enough", "Trailer leaves daily, not a dumpster"); [[call]] primary + [[quote kitchen btn-ghost]] secondary; open-now pill.
- Media: hero-A1 (pinned kitchen with exposed studs). CSS mask removes top layer per statement.
- Hooks: data-header, data-open-now, data-sw-signature (gauge at left), data-split="lines" on h1.
- Entrance: text rise; photo unclip.

## 2. trust-bar · t-paper · tight · rail
- Purpose: answer dust + shut-off fears in one breath.
- Content: four pills in a horizontal rail: "Plastic walls + zipper door", "Water/gas/power capped", "Test-first on pre-1978", "Broom-clean each day". DM Mono labels.
- Hooks: data-reveal-stagger.
- Entrance: stagger 60ms.

## 3. process-containment · t-deep · normal · split
- Purpose: objection #2 (dust) answered visually.
- Content: heading "Layer 1–2 · Paint & Plaster · bagged as we go"; body copy on containment, negative air, floor protection; [[sample review]] quote from Megan L. (Highland Square kitchen).
- Media: process-containment-zipper (left frame).
- Hooks: data-reveal, data-sw-signature (gauge rows 1-2 light up).
- Entrance: image unclip; text rise.

## 4. process-structural · t-paper · normal · split (reversed)
- Purpose: objection #1 (cutting into things) + #5 (bid doubles).
- Content: heading "Layer 3–5 · Lath, Insulation, Wiring · capped & tagged"; copy on shut-offs, structural stop-and-call, builder handoff; Hassan A. review (wall opening stopped when load-bearing found).
- Media: process-water-valve (right frame).
- Hooks: data-reveal, data-sw-signature (rows 3-5).
- Entrance: text rise; image unclip.

## 5. break · t-mid · full-bleed
- Purpose: visual reset; show debris handling without dumpster fear.
- Content: single caption "Debris sorted daily: metal to scrap, wood separate, trailer gone by five".
- Media: process-loading-trailer (full-bleed, object-position 50% 60%).
- Hooks: data-reveal="clip".
- Entrance: clip reveal.

## 6. tools-band · t-accent · loose · grid (3-col)
- Purpose: interactive proof; prefill form.
- Content: three tool cards: Layer peeler, What stays checklist, Dust plan picker. Each has short instruction + CTA "[[quote * | Start my list]]". ZIP checker inline below.
- Hooks: data-checklist (layer peeler repurpose), data-checklist (what-stays), data-tabs (dust plan), data-zip, data-sw-signature (gauge shows tool icon at row 6).
- Entrance: stagger cards 60ms.

## 7. services · t-paper · normal · grid (2-col mobile, 4 desktop)
- Purpose: all services from facts; each tied to a layer.
- Content: <!-- each services --> card with h3 {{.name}}, p {{.blurb}}, mini-gauge chip showing start layer, [[quote {{.short}} btn-ghost]]. <!-- /each -->
- Hooks: data-reveal-stagger, data-service (prefill).
- Entrance: stagger 60ms.

## 8. pricing-sample · t-deep · tight · stack
- Purpose: price transparency without $ shock; labelled sample.
- Content: heading "Sample ranges for Akron tear-outs"; estimator output area; disclaimer "[[sample pricing]] Ranges from {{proof.label}} jobs; your walk-through sets the real number."; [[quote estimate | Get my number]] CTA.
- Hooks: data-estimator, data-reveal.
- Entrance: text rise.

## 9. reviews · t-paper · normal · stack
- Purpose: social proof on bare-stud tone.
- Content: heading "From bare studs to broom-clean"; three review cards (Megan L., Terrence J., Patti R.) with [[sample review]] tag, service line, town. Gauge at row 7 beside each.
- Hooks: data-reveal-stagger.
- Entrance: stagger 60ms.

## 10. contact · t-deep · loose · split
- Purpose: primary conversion; form only instance.
- Content: left column: "Tell us what's coming out" + phone [[tel]] + hours [[hours|today]] + areas {{biz.areas|list}}. Right column: multi-step form (room → size → contents → house year → contact) with honeypot. Thank-you state honest.
- Hooks: data-form, data-lead, data-open-now.
- Entrance: text rise; form fade.

## 11. footer · t-paper · tight · rail
- Purpose: legal + credits + gauge completion.
- Content: {{demo.disclaimer}}; [[credits]]; nav anchors; Layer Gauge final state "Layer 7 · Studs · Ready for your builder"; licence [[sample license]] {{proof.license}}.
- Hooks: data-sw-signature (final row lit).
- Entrance: none (static).

## Rhythm check
Tones: deep, paper, deep, paper, mid, accent, paper, deep, paper, deep, paper. No two dark touching (deep→paper always). One accent band (#6). One break (#5). Layouts: sticky-photo-peel, rail, split, split-rev, full-bleed, grid-3, grid-4, stack, stack, split, rail. No adjacent repeats. Hooks: data-sw-signature (hero, process×2, tools, footer = 5), data-checklist, data-tabs, data-zip, data-estimator, data-form, data-lead, data-split, data-reveal, data-open-now. ≥3 interactive. Form once (#10). All required content present.