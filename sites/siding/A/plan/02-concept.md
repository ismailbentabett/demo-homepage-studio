# siding-A · Concept

## 1. Three obvious concepts (rejected)
- **A. Dusk-house hero + layer list.** Full-bleed house at dusk with lit windows, scrim, "Siding done right", then a
  numbered 7-step list. Rejected: every competitor's hero (brief §4.1), and the steps are a template list.
- **B. Cutaway wall diagram as one big illustration.** One exploded wall SVG mid-page with labels. Rejected: the
  brief's seed taken literally and used once; one effect, not a system; roofer-A already owns "Layer Stack Cross-Section".
- **C. Storm-season dashboard.** Hail map, "inspections this week", urgency badges. Rejected: storm-chaser tone the
  buyer leaves on (brief §1), and a competitor would do exactly this after June hail.

## 2. Thesis
The page is a Minnesota wall being sided: every section is a 7-inch lap course nailed over the last, and scrolling
covers each nail line as the wall goes from bare studs to trim.

## 3. Signature system: "Lap Course + Nail Line"
Primitive: `.course` band. Height rhythm `--course: clamp(56px, 7vw, 112px)` (7 in. scaled); section padding is a
whole number of courses. Top edge: a row of nail-head dots (5px circles, 48px pitch, frost 40%). Bottom edge: the
drip shadow (8px gradient, deep 55% → 0) falling onto the course below. Mono gutter label C-01…C-12 on the left.
`data-sw-signature` on each course; `--sw-p` 0→1 drives: next course translateY(-8px→0), nail dots scale(1→0).
- **Hero:** 6/12 gable mask; the drawn right half builds studs → sheathing (one sheet flagged ember "soft, replaced")
  → wrap (lapped top over bottom) → flashing → starter → 3 courses. Nail line visible on the last course only.
- **Layers story (#layers):** 7 courses stack from the bottom, one per layer, each with "what we check / why it
  matters in a Minnesota winter". Variation: course color = that layer's material (OSB tan, wrap frost, flashing steel).
- **Reveal visualizer:** the course lines ARE the tool output; exposure 4 / 5 / 7 in. changes `--course`.
- **Prices (proof):** each Sample range is one lap board; nail-head dots are the bullets; row heights follow exposure.
- **Reviews:** cards hang on a course; the service name sits in the mono gutter; nail line covered by the next card.
- **Footer:** the top course capped by a wide trim board (frost band 24px) under the gable rake at 26.57deg.

## 4. Type
Darker Grotesque 800/900 (display, tall and narrow: lines of headline stack like boards, tight -0.02em) + Plus Jakarta
Sans 400/500/700 (text, tall x-height, calm at 18px) + JetBrains Mono 500 (course numbers, inches, squares, prices).
Why: tall-narrow display set in stacked lines reads as courses; mono carries measurements without a lab-report look.

## 5. Palette "Sheathing Charcoal + Housewrap Frost + Ember Window"
| Role | Hex | On | Ratio | Use |
|---|---|---|---|---|
| frost (text) | #E9EEF1 | deep #121B23 | 14.88 | body on deep |
| frost-muted | #A9B6BF | deep #121B23 | 8.39 | muted on deep |
| frost | #E9EEF1 | mid #1D2A35 | 12.52 | body on mid |
| frost-muted | #A9B6BF | mid #1D2A35 | 7.06 | muted on mid |
| ember | #F28C4E | deep #121B23 | 7.15 | accent words on deep |
| ember | #F28C4E | mid #1D2A35 | 6.01 | accent words on mid |
| signal frost-blue | #9EC6DD | deep / mid | 9.59 / 8.06 | focus ring on dark, chalk circle |
| deep | #121B23 | ember #F28C4E | 7.15 | text on ember band + dark-tone primary button |
| ink | #131C24 | paper #EEEBE3 | 14.45 | body on paper |
| ink | #131C24 | light #F7F5F0 | 15.80 | body on light |
| muted | #55616B | paper / light | 5.32 / 5.82 | muted on light tones |
| ember-ink | #A4461A | paper / light | 5.08 / 5.55 | accent words on light |
| white | #FFFFFF | ember-ink #A4461A | 6.05 | primary button on light tones |
| focus blue | #1D5F86 | paper / light | 5.81 / 6.35 | focus ring on light tones |
| deep | #121B23 | signal #9EC6DD | 9.59 | text on frost-blue chip |
| ember | #F28C4E | paper | 2.04 | **never words**: rules/shapes only |
| white | #FFFFFF | ember | 2.43 | **never**: ember buttons carry deep text |
| rule #3A4A57 | — | deep | 1.90 | rules only |
| rule #C9C3B4 | — | paper | 1.47 | rules only |

## 6. Hero family 13: shape-masked photo
Shape = a rambler gable at 6/12 pitch (the common Twin Cities rambler roof). Cliché broken: the mask is not a cute
house icon over a full photo; it's split down the ridge, half photo (duotone charcoal/frost), half the drawn wall
building itself. The shape returns as the footer rake and the course-board heading notch. h1 sits under the eave.

## 7. Motion score
- **Intro (≤ 1.1 s):** rake line draws eave → ridge (400ms), drawn half builds bottom-up 9 layers × 90ms stagger, photo unclips bottom-up; content readable at frame 0; any input skips; reduced motion = finished wall.
- **Story 1, stack:** #layers pins ≥ 640px (7 × 55svh + 100svh); each step sets a course from below, drip shadow falls 6px, nail dots below scale to 0. < 640: stacked courses, clip reveal.
- **Story 2, draw:** visualizer course lines redraw (stroke-dashoffset, 520ms) on each exposure/profile change.
- **Hover:** 2px ember hairline scaleX 0→1 from left, 200ms (chalk line snap), inside `(hover:hover)`.
- **Reduced motion:** every course in final position, nails hidden except hero last course, no pin, visualizer swaps instantly.

## 8. Tools
- **Squares calculator** (`estimator`): wall length ×4 or footprint W×D, stories 1/1.5/2, gable ends 0-2, windows,
  doors → wall sq ft, squares +10% waste, Sample range per material from `{{proof.prices.0-2}}` scaled by squares band
  (small/typical/large, never invented $/sq ft). Button "Send these numbers" → `prefill` form: squares, material, sides.
- **Course & reveal visualizer** (`tabs`): 4 / 5 / 7 in. lap, Dutch lap, board and batten → SVG wall redraws; output
  line "7 in. exposure: fewer, wider courses; reads like 1950s ramblers". Hand-off: chosen profile → form note.
- **Storm damage checklist** (`checklist`): 7 calm items (each side photographed, coin for scale, date, chalk circle
  dents, don't pull loose panels, call insurer yourself, we write scope + photos) → "N of 7 ready" → prefill service "Hail and wind repair".
- **ZIP checker** (`zip`) on the starter strip → prefill ZIP. **Quote form** (`form`) 3 steps: job → walls/material → contact.

## 9. Voice
- "We open the wall before we cover it. If a sheet is soft, you see the photo and the price per sheet first."
- "Wrap goes on top over bottom, like the courses that cover it. Water runs down and out, every time."
- "After hail, you talk to your insurer. We write the scope and photograph every side."
Never: lifetime, premium, act now, storm season special, hassle-free.
