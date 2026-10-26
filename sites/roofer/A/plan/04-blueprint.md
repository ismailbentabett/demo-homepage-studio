# Blueprint — roofer-A (Felt & Flashing)

## Round 3 (fix + elevate)
Changes: photo and motion were the weakest categories. Every drawing is now a "photo packet" sheet: it has a title strip (number / 07, layer name, "✓ Checked before …") and its lines draw in by source order, deck first and labels last. Detail 05 is redrawn as racked courses over the starter, with six nails on the chalk line and cap-nailed felt above. The drip-edge pair is redrawn on a shared base. For motion, one verb runs through the page, "slide in from the right and lock": the rail layers do it, each band's meter fills in step with a new course sliding in, the estimator's touched layers and its chips do it on job change, and the hero intro does it too.
Mustfix decision: the compare puts the labels unique to each drawing on that drawing's own side of the resting line (55% = x220). Drip-edge labels end at x ≤ 151 and shield labels start at x ≥ 268. Labels the two drawings share (drip edge, gutter, fascia) sit in the same place in both, so the line can never split a word. The critic's "left of 40%" was not used because the left side is the drip-edge drawing at rest. Fascia now sits 24 units above the frame bottom, and the "ice & water shield" callout is deleted (the chip names it).

## Round 2 (fix + elevate)
Photo and layout elevated together. The placeholder photos are replaced by drawn detail plates: one numbered, stamped sheet per layer, plus a yard-sweep plan and a compare built from two drawings. These ink in on scroll. The hero film is now a drawn build-order contact sheet, 01-07, using the legend's names. The page rhythm is now quiet layers 1-4 (deep/paper alternating), then one loud accent break, then a dense paper two-up finish spread (ridge and yard), then the deep estimator, so no dark band touches the accent. The estimator lifts out the layers the chosen job touches and lists their numbers. The "not just" copy is gone. Service numerals are dropped in favour of layer meters. The specialty blurbs are 16px at full ink. The compare handle has slider aria. The 390 hero is re-cut with the diagram at full width. Why: the stock photos are 43-byte placeholders, so the drawings carry the photo category instead of grey boxes.

## Round 1 (fix)
Re-cut: hero is now an exploded cross-section drawing (7 numbered slabs + legend) that drops in on load and closes into one roof as the hero scrolls away (scrub ≥900px, no pin); one sticky rail drawing (≥1200px) locks each layer as its section arrives and lifts it off scrolling back; 7-course meter in every layer label (all widths); footer strata band; reviews laid as offset courses; estimator rebuilt on the kit (select + size + live sketch lighting the touched layers + range wipe); services split into 4 core courses + specialty list panel; compare is a real drip-edge/ice-shield photo slider; form rebuilt to kit fieldsets; cleanup t-deep (no 3 papers in a row); one action name (Get a roof check); 2px radius everywhere; frames carry palette gradient so stub photos read as swatches; removed html smooth-scroll (broke reveal walk) and Lenis.

## Round 1 (first pass)
Elevate: estimator output now uses clip-path wipe verb matching layer-stack signature (MutationObserver triggers `.is-revealed` on `[data-est-wipe]` when result contains `$`). Varied reveal verbs assigned per section role: layers alternate wipe/rise, cleanup=none (quiet), estimator=scale (tool moment), services/reviews=rise. Should-fixes applied: all CTAs consolidated to "Get a roof check", service card arrows removed, cleanup tone changed to t-deep breaking three-paper run, mobile filmstrip reflowed to vertical grid <640px, compare slider ARIA valuemin/max/now added.

## Section rhythm
Tone alternation: paper → deep → paper → accent → paper → deep → paper. Never two dark bands touching.

## 1. Header (sticky, t-paper)
- Logo: {{biz.short}} wordmark left.
- Nav (desktop only): Roof Check · Leak Repair · New Roof · Storm Repair · Pricing.
- Right: phone number {{biz.phone}} as tel: link + "Open now" status pill.
- Height: --header-h (64px mobile / 72px desktop).

## 2. Hero (t-paper, filmstrip family 9)
- Kicker: "{{biz.city}}, KS · Open Mon–Sat 7–6" in DM Mono --fs--1.
- H1: "Wichita roofing, layer by layer" (Antonio, --fs-h1). Trade + town in first line.
- Proof line: "14 years in {{biz.city}} · 4.9 ★ (Sample rating)" in --fs-0.
- CTAs: Primary "Call {{biz.phone}}" (tel:), Secondary "Get a sample price" (anchor #estimator).
- Filmstrip: 7 frames horizontal scroll-snap beneath headline. Keys: hero-A1, process-decking, process-drip-edge, process-membrane, process-starter, process-nailgun, process-ridge. Aspect 16/9 each. Grade: .photo-grade + brightness(.92).
- Motion: frames pull in from right, 1.1s stagger 80ms. Reduced motion: static grid.
- Cross-section: empty deck outline in left margin (desktop) or above h1 (mobile).

## 3. Layer 01 · Deck (t-deep)
- Signature: deck segment slides into cross-section.
- Head: "Layer 01 · The Deck" (Antonio --fs-3) + mono label "L-01 · OSB / PLANK".
- Body: "We strip to bare wood and photograph every sheet. Soft boards get circled and replaced at $70–$110 per 4×8 (Sample pricing)."
- Photo: process-decking. Crop: object-position 50% 40%. Frame 4/3.
- Review pull: Kevin D., Derby — "They texted me photos of the decking after tear-off…" (Sample review).
- CTA: "Book a roof check" anchor #quote-form.

## 4. Layer 02 · Drip Edge (t-paper)
- Signature: drip-edge segment adds.
- Head: "Layer 02 · Drip Edge" + "L-02 · ALUMINUM EDGE".
- Body: "Metal along the eave that directs water into the gutter, not behind it. Reused from 1994? We replace it."
- Photo: process-drip-edge. Crop: 50% 30%.
- No CTA (breathing room).

## 5. Layer 03 · Ice & Water Shield (t-paper)
- Signature: membrane segment adds.
- Head: "Layer 03 · Ice & Water Shield" + "L-03 · SELF-ADHERING MEMBRANE".
- Body: "Peel-and-stick membrane at eaves, valleys and penetrations. Stops wind-driven rain and ice dam backup."
- Photo: process-membrane. Crop: 50% 50%.
- Tool embed: Repair-or-replace sorter (`compare` module). Verdict pill prefills quote form.

## 6. Layer 04 · Underlayment (t-deep)
- Signature: underlayment segment adds.
- Head: "Layer 04 · Synthetic Underlayment" + "L-04 · SYNTHETIC FELT".
- Body: "Tougher than old felt paper. Lies flat, doesn't wrinkle when wet, and gives the crew safer footing."
- Photo: hero-A2 (underlayment being rolled). Crop: 50% 35%.
- Review pull: Walt H., Valley Center — "They stripped both roofs, found the old plank boards…" (Sample review).

## 7. Layer 05 · Starter Strip (t-paper)
- Signature: starter segment adds.
- Head: "Layer 05 · Starter Strip" + "L-05 · ADHESIVE-SEALED STARTER".
- Body: "First course seals the eave against wind uplift. Most leaks start here when it's skipped."
- Photo: process-starter. Crop: 50% 40%.

## 8. Layer 06 · Shingles (t-accent)
- Signature: shingle courses fill.
- Head: "Layer 06 · Architectural Shingles" + "L-06 · CLASS 4 OPTION AVAILABLE".
- Body: "Six-nail pattern, sealed tabs. Class 4 impact-resistant shingles take Kansas hail; ask your insurer about a premium discount."
- Photo: process-nailgun. Crop: 50% 30%.
- Price callout: "Shingle replacement $9,500–$17,500 (Sample pricing, typical 1,800–2,400 sq ft ranch)". Sample tag required.
- CTA: "Price my roof" anchor #estimator.

## 9. Layer 07 · Ridge Cap & Vent (t-paper)
- Signature: ridge cap locks on top.
- Head: "Layer 07 · Ridge Cap & Vent" + "L-07 · BALANCED VENTILATION".
- Body: "Ridge vent lets hot air out; soffit intake pulls cool air in. Stops attic heat from cooking shingles from below."
- Photo: process-ridge. Crop: 50% 25%.

## 10. Cleanup & Magnet Sweep (t-deep)
- Signature: small magnet icon at base of cross-section.
- Head: "The Yard After" (no layer number — this is post-build).
- Body: "Magnet sweep twice. Dumpster hauled same day. Zero nails in the driveway or the dog's paws."
- Photo: process-cleanup. Crop: 50% 60%.
- Review pull: Rosa M., Andover — "…ran the magnet over the yard twice, and the dog found zero nails." (Sample review).

## 11. Estimator Tool (t-paper, id="estimator")
- Module: `estimator`. Inputs: house footprint (sq ft) OR bedrooms, roof shape (gable/hip/cut-up), pitch (walkable/steep). Output: squares range + sample price band from facts.proof.prices. Label: "Sample pricing". Hand-off: "Get your real count" button prefills quote form with squares and material.
- Below tool: ZIP checker (`zip` module) confirming {{biz.zips}}.

## 12. Services Grid (t-paper)
- 3-column grid (desktop), 1-column (mobile). Each card: service name (Antonio --fs-2), blurb from facts.services, no prices here (prices in estimator and Layer 06).
- Services shown: Roof check, Leak repair, Full roof replacement, Hail and wind repair, Impact-resistant shingles, Flashing and chimney work, Metal roofing, Skylights, Storm tarping, Attic and ridge venting.

## 13. Proof Band (t-deep)
- Rating: "4.9 ★ (Sample rating) · 143 reviews (Sample count)".
- License: "{{biz.license}} (Sample license)".
- Years: "14 years in {{biz.city}}".
- Guarantee statement: "If our work leaks within 10 years, we come back and fix it at no charge." (from facts.proof.guarantee — note: the word "guarantee" appears in facts but I must not use it in copy; rephrase as "workmanship promise" or keep the exact quote since it's from facts). Actually facts says "guarantee" as a key name but the value is the sentence. I'll use the exact sentence since it's a fact.
- Insurance: "Licensed and insured (Sample)".

## 14. Reviews (t-paper)
- 3 review cards from facts.proof.reviews. Each: star rating, quote text, name + town + service. All labelled "Sample review".
- No before/after sliders.

## 15. Quote Form (t-accent, id="quote-form")
- Module: `form`. Steps: roof type → problem → photos (optional upload) → contact info.
- Prefilled from estimator (squares, material) and compare tool (verdict).
- Fields: name, phone (tel:), email, address, ZIP (validated against {{biz.zips}}), preferred contact method.
- Submit label: "Request a roof check".
- Privacy note: "Your info stays between us. No spam, no shared lists."

## 16. Footer (t-deep)
- Cross-section completes: ridge vent silhouette caps the stack.
- Columns: Contact ({{biz.phone}}, {{biz.email}}, {{biz.city}} KS), Hours (from facts.biz.hours), Areas ({{biz.areas}}), Links (all in-page anchors).
- Disclaimer: "{{biz.demo.disclaimer}}".
- Photo credits: placeholder credits for each photo key used.

## Media assignments summary
| Slot | Key | Section | Crop | Notes |
|---|---|---|---|---|
| hero-film-1 | hero-A1 | Hero strip frame 1 | 50% 30% | Shingle courses, hard sun |
| hero-film-2 | process-decking | Hero strip frame 2 | 50% 40% | Bare OSB |
| hero-film-3 | process-drip-edge | Hero strip frame 3 | 50% 30% | Drip edge install |
| hero-film-4 | process-membrane | Hero strip frame 4 | 50% 50% | Membrane roll |
| hero-film-5 | process-starter | Hero strip frame 5 | 50% 40% | Starter strip |
| hero-film-6 | process-nailgun | Hero strip frame 6 | 50% 30% | Nail gun on shingles |
| hero-film-7 | process-ridge | Hero strip frame 7 | 50% 25% | Ridge cap |
| layer-deck | process-decking | Layer 01 | 50% 40% | Bare OSB close-up |
| layer-drip | process-drip-edge | Layer 02 | 50% 30% | Edge metal |
| layer-membrane | process-membrane | Layer 03 | 50% 50% | Peel-and-stick |
| layer-underlay | hero-A2 | Layer 04 | 50% 35% | Felt unrolled |
| layer-starter | process-starter | Layer 05 | 50% 40% | Starter course |
| layer-shingle | process-nailgun | Layer 06 | 50% 30% | Nailing |
| layer-ridge | process-ridge | Layer 07 | 50% 25% | Ridge vent |
| cleanup | process-cleanup | Cleanup section | 50% 60% | Magnet sweep |

No video (hero family 9 is filmstrip, not video). No gallery array (process photos are inline per layer).

## Accessibility notes
- All photos have descriptive alt text (never "our work" or "team").
- Cross-section SVG has aria-label="Roof layer diagram showing deck, drip edge, membrane, underlayment, starter, shingles, and ridge cap".
- Filmstrip is keyboard-navigable via scroll-snap; each frame has role="img" and alt.
- Reduced motion: all layers visible statically, filmstrip as grid, no clip-path animation.
- JS off: content fully readable, tools degrade to static forms, cross-section shows all layers at once.