# garagedoor-C · Blueprint (builder, round 0)

## Round 1
Elevated firstScreen + photo: the hero is now one full-width frosted window. A blue-hour scene sits under a rime layer, and the frost is wiped clear through a single Arvo glyph run "−8°" (real U+2212, raised .09em to the 8's centre, tracked −.04em). It is sized with container units so the ° bleeds off the top and right, the h1 sits on its lower edge, the spring-price stamp is the proof line, and the paper band peeks 56px. Each reading (story stage + cards) is now a window graded to its temperature (washed amber 104, storm grey 88, blue-hour slab 34, frost-blue −8), with the door line art as a thin overlay. The frost is a rime texture that grows with --cold instead of twig glyphs. Also: stop steps run in one row, services head is sticky with the −8 stamp, the price head sits above the full-width sheet, eyebrows are cut on readings/services/tools/area, link arrows are gone, the hail result is in a stamp box, the mobile bar hides while the hero buttons are on screen, and every copy-1 replacement is applied.
Photo decision (headless): the garagedoor manifest still has zero approved photos (5 drafts; A/B heroes belong to siblings), so the fills are drawn gradients. Swap in an SVG image element plus the same grades once a C frame is approved.

| # id | tone | purpose (objection / path) | layout family | content (tokens) | media | hooks | entrance |
|---|---|---|---|---|---|---|---|
| 1 `#top` hero | t-deep | "Car stuck, out by 8" → call/text in 5 s | `mask` (giant −8° type mask top, h1 row below, reading card right) | kicker {{biz.city}}, h1, lead, [[call]], sms, quote, proof line {{hours\|today}} · {{proof.rating}} Sample, card {{proof.prices.0.*}} [[sample pricing]] | drawn SVG scene (no photo) | `data-sw-signature` (mask + frost clear) | frost clears from centre 900 ms; h1 lines rise (split) |
| 2 `#readings` story | t-paper | "Will it break again / what breaks when" | `story` (sticky stage ≥640: stamp + drawn door + scene text; stacked cards <640) | 4 scenes 104 → 88 → 34 → −8 with {{services.N.blurb}}, {{proof.prices.N.*}} | drawn door elevation | `data-hook="count"` | stamp counts down, --cold scrubs frost (≥640, motion); cards clip-reveal on phone |
| 3 `#stop` safety | t-mid | "Springs can kill you, do I touch it?" | `steps` (stop line left, 4 numbered steps right) | stop h2, 4 steps, call + text | — | — | text rise |
| 4 `#services` | t-paper | every service, plain words | `index` (numbered two-column rows) | `<!-- each services -->` name, blurb, [[quote]] | — | — | stagger rise |
| 5 `.break` | t-deep | thesis pause: pairs, balanced | `break` (full-bleed frost pane, one line) | h2 + one line | frost pattern | `data-hook="frost-pane"` | frost grows with scroll (CSS var) |
| 6 `#prices` | t-light | "$300 spring becomes a $4,000 door" | `table` (weather table coldest first, stamp per row) | all 5 {{proof.prices.N}} + [[sample pricing]], {{proof.guarantee}} [[sample guarantee]] | — | stamps | rows stagger |
| 7 `#proof` | t-mid | "Will they treat me fair" | `wall` (one big review + 5 offset cards, season stamps) | {{proof.reviews.N.*}}, {{proof.rating}}, {{proof.reviewCount}}, Sample tags | — | stamps | stagger |
| 8 `#tools` | t-paper | "Is my door ready / hail: section or door?" | `tools` (checklist with live stamp + hail dent check) | checklist 6 items, {{proof.prices.4}}, estimator over prices | — | `data-hook="checklist"`, `data-hook="hail"` | none (quiet, interactive) |
| 9 `#area` | t-deep | "Do you serve Papillion / Council Bluffs?" + hours | `split` (ZIP + towns left, hours right) | zip checker, `<!-- each biz.areas -->`, {{hours\|table}}, {{hours\|today}} | — | — | rise |
| 10 `#contact` | t-accent | the one form | `form` (4-step form + call column) | form steps, data-thanks, [[call]] | — | — | none |
| footer | t-ink (footer) | brand + legal | — | 0° brand stamp (thaws on hover), {{demo.disclaimer}}, [[credits]], {{proof.license}} sample | — | `data-hook="thaw"` | — |

## Rhythm gate
- 10 sections; hero `min-height: calc(100svh - var(--header-h))`, story band peeks in. ✔
- Tones: deep · paper · mid · paper · deep · light · mid · paper · deep · accent. No 3 of a category in a row; no two dark touching (break sits between paper and light; area between paper and accent). ✔
- ≥1 t-deep (3), colour band t-accent (#contact), full-bleed `.break` (#5). ✔
- Hooks: signature (hero), count, frost-pane, checklist, hail, thaw = 6. ✔
- Layout families: mask, story, steps, index, break, table, wall, tools, split, form: 10, all neighbours differ. ✔
- One `#contact`; every CTA → `#contact`, `tel:` or `sms:`. ✔
- Required content: 10 services (repeater), ZIP checker + 7 towns, hours table + open-now, 6 sample reviews (Sample tag), prices via sample price sheet + estimator, footer disclaimer + credits. ✔
- Signature in: hero (mask), story (counting stamp + frost), proof (season stamps), prices (row stamps), tools (checklist stamp n/6), footer (0° thaw). ✔ matches concept.json.signature.sections.

## Decisions (headless)
- No photos this round (manifest has no C slots): hero mask and story stage are drawn SVG; see 05-media.md.
- Strategy's "#quote" target folded into `#contact` (one form, contract).
- Story is a CSS `position: sticky` stage inside `@media (min-width:640px)` under `.sw-motion`, scrubbed by ScrollTrigger (no pin under 640).

## Open issues
- og.jpg: build.mjs falls back to manifest photo hero-A1 (sibling hero, draft) because no hero slot exists. Off-page only; fix when hero-C is approved.
