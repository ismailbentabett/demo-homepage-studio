# appliance-A · Concept

## 1. Rejected (obvious)
- **Tech-in-polo hero + brand-logo strip + "all makes and models".** What every competitor does (brief §4.1, §4.2, §4.5). Template.
- **Blueprint/exploded-diagram site (white lines on navy).** The brief's "diagnosis" taken as engineering-drawing cosplay; roofer-B/carpenter-B already own drafting paper and blue pencil.
- **Ticket/work-order document page.** Repair-order line is mechanic-A, carbon pour ticket is concrete-A, receipt is cleaning-B. Every repair trade would do it.

## 2. Thesis
**The page is the back of the machine: every section is an access panel held by four screws, and scrolling unscrews it so the cause behind the symptom is lit by the work light.**
(Arguable: it hides half of each section behind a panel on purpose, and puts the homeowner's words and the tech's words on two sides of one seam.)

## 3. Signature system: Screw-Corner Access Panels (`data-sw-signature="panel"`)
Primitive: a sheet-metal panel (`.panel`) with a stamped label "PANEL 0N" (JetBrains Mono), four Phillips screw heads
(SVG `<use href="#screw">`, `--screw` rotation var) at the corners, a 1px inset seam, and a two-cell inside: **YOU NOTICE**
(symptom, homeowner's words) | **BEHIND THE PANEL** (cause, pro words, amber).
- **Hero (Panel 00):** the whole hero is one panel; left = symptom on enamel black, right = the lit side: SVG cutaway of a
  dryer back (element, thermal fuse tagged "BLOWN" in signal red, leader line crossing the seam) + cropped meter-photo inset.
  Intro: 4 screws spin out, the seam opens from the centre, the work-light cone sweeps onto the fuse tag.
- **Story "One service call" (Panels 01-07):** pinned ≥ 900px; each step unscrews the next panel and lifts it, revealing
  the "behind" half: 01 you describe the noise · 02 we ask the model number · 03 we bring the likely part · 04 we test (meter)
  · 05 the failed part in your hand · 06 fix it or tell you not to · 07 the old part leaves with us.
- **Services (cards):** 10 small panels (8px screws), symptom on the face, the cause slides up on `:hover`/`:focus-within`;
  on touch / no-hover both halves stacked and visible.
- **Proof / reviews:** each review is a panel "What they saw" (quote) | "What was behind it" (the part: thermal fuse,
  defrost heater, lemon seeds in the filter, weak igniter). Rating card is a panel with the Sample tag stamped on it.
- **Price card:** paper panel, rows are mono part labels, screws in the corners, "Sample pricing" stamp, 90-day guarantee line.
- **Form:** a panel labelled STEP 1-4; each completed step drives one screw home (rotation to tightened).
- **Footer:** the last panel screwed shut (all screws in, seam closed): "Panel back on. Machine running."
Variation per section: screw size/count visible, which half is lit, direction of the lift.

## 4. Type
- Display **Roboto Slab** (var wght 100-900; 0× in registry, 0× in niche): even, mechanical slab = stamped parts labels; 800 h1, 650 h2.
- Text **Libre Franklin** (var wght): plain American workhorse grotesk, reads at 18px on dark.
- Accent **JetBrains Mono** (500/700): panel numbers, part names, model/serial strings, prices (tabular).
Pair Roboto Slab / Libre Franklin is unique in the library.

## 5. Palette: "Enamel Black + Bare-Bulb Amber + Fuse Red" (dark-led)
| role | hex |
|---|---|
| deep (enamel black, page bg) | #141516 |
| mid (panel steel) | #1F2123 |
| rule / seam (shapes only on dark) | #3A3C40 |
| ink on dark | #EEE9DF |
| muted on dark | #A9A49A |
| accent (bare-bulb amber) | #F2A33A |
| signal (fuse red, on dark) | #E0533A |
| paper (light bands: prices, form) | #ECE7DD |
| ink on paper | #1A1B1C |
| muted on paper | #5C5850 |
| accent-ink (amber words on paper) | #8A4B00 |
| signal on paper / submit button | #B23A22 |

Contrast (tools/contrast.mjs, real):
| fg on bg | ratio | use |
|---|---|---|
| #EEE9DF on #141516 | 15.11 | body on deep |
| #A9A49A on #141516 | 7.36 | muted on deep |
| #F2A33A on #141516 | 8.77 | accent words, focus ring on deep |
| #141516 on #F2A33A | 8.77 | primary button text (dark on amber) |
| #E0533A on #141516 | 4.76 | signal words (BLOWN tag) on deep |
| #EEE9DF on #1F2123 | 13.35 | body on panel steel |
| #A9A49A on #1F2123 | 6.51 | muted on steel |
| #F2A33A on #1F2123 | 7.74 | accent words / focus on steel |
| #EEE9DF on #3A3C40 | 9.13 | text on seam chips |
| #1A1B1C on #ECE7DD | 13.99 | body on paper |
| #2B2D30 on #ECE7DD | 11.20 | secondary ink on paper |
| #5C5850 on #ECE7DD | 5.74 | muted on paper |
| #8A4B00 on #ECE7DD | 5.52 | accent words + focus ring on paper |
| #B23A22 on #ECE7DD | 4.83 | signal words on paper |
| #FFFFFF on #B23A22 | 5.96 | form submit button on paper |
| **#F2A33A on #ECE7DD** | **1.69 FAIL** | never text; amber on paper only as screw heads / rules |
The primary button is dark text on amber (8.77); white on amber is never used. The only white-on-color button is #B23A22 (5.96).

## 6. Hero family 2: 50/50 split
Unique in niche (B=11, C=10). Cliché broken: the seam is a physical panel seam with screws on it; left = the symptom in
the homeowner's words ("Runs. No heat."), right = the cause; the amber work-light cone and the fuse tag's leader line cross
the seam. The right half is an SVG cutaway + a small cropped meter photo, not a stock photo filling 50%.

## 7. Motion score
- **Intro (≤ 1.1s, skippable, text readable at t=0):** 4 hero screws spin out (300ms, 40ms stagger), seam opens 12px from centre (400ms ease-io), amber cone wipes onto the fuse tag (500ms). Any scroll/key/pointer jumps to the end state.
- **Story 1 "One service call" (unscrew + lift):** pinned 7 steps ≥ 900px, height `calc(7 * 55svh + 100svh)`; per step screws rotate out with progress, the panel lifts 8px with shadow, the behind-half wipes in (clip-path). < 900px: stacked panels, each opens once on entry.
- **Story 2 (draw):** the meter needle (Panel 04) and the vent-length bar draw to their value when tools answer.
- **Hover (one language):** the nearest screw turns 90° and an amber seam line grows `scaleX(0→1)` from left, 200ms.
- **Reduced motion / JS off:** every panel shown open, both halves visible, screws static, no pin, cone static.

## 8. Tools
1. **Symptom finder** (`filter` + `tabs`): appliance tabs (Fridge, Washer, Dryer, Dishwasher, Range & oven) + symptom chips in homeowner words (brief §2 table). Output: 2-3 likely causes (pro words), one safe self-check, "stop and call when…". Hand-off: "Send this to us" → form prefill `appliance`, `symptom`.
2. **Model-tag locator** (`hotspots`): SVG outlines of fridge/washer/dryer/dishwasher/range; tap shows the plate location (brief §5.3) + why it matters. Hand-off: focuses form field `model`, appliance prefilled.
3. **Dryer vent length check** (`estimator`): straight feet, # 90° elbows, # 45° elbows → equivalent = ft + 5×n90 + 2.5×n45 vs typical 35 ft (labelled typical, check your manual); bar draws. Hand-off: prefill service "Yearly checkup", note "vent ≈ N ft".
4. **ZIP checker** (`zip`) against `{{biz.zips}}`.
5. **Quote form** (`form`, 4 steps): what you notice → appliance + model number → time window → contact. Each step tightens a screw.

## 9. Voice
- "Tell us what it's doing. We'll tell you what's behind the panel."
- "Read us the model number off the tag and the likely part rides along in the van."
- "If the fix costs more than the machine is worth, you'll hear that from us first."
Never: "same-day", "emergency", "factory authorized", "all makes and models", "quality you can trust".
