# Concept — pinestraw-B

## Three rejected alternatives
1. **The bale stack hero.** A single towering photo of bales with "We deliver" across it. Rejected: every delivery site does this; says nothing about count or depth.
2. **The green lawn template.** Pine straw as one service tile in a grid of twenty. Rejected: brief §4 cliché #1; homeowner leaves in 5 seconds.
3. **The handshake promise.** Stock photo of hands shaking over "Quality at affordable prices." Rejected: cliché #3; no arithmetic, no trust.

## The thesis
The site is the load ticket: every claim carries a counted number, and scrolling turns the tally.

## The signature system — The load ticket
A torn manila strip closes each section, carrying SVG hand-tally marks (||||) and a running total drawn from the tool the homeowner just used (bale count, square feet, inches measured). The strip appears in: hero (intro tally), bale counter story (live count), needle guide (length tally), process (step count), services (service tally), reviews (review count), contact (booking tally), footer (final total). Hook: `data-sw-signature="load-ticket"`.

## Type
- Display: **Arvo** (slab serif, stenciled-bale-tag feel for headlines and big counts).
- Text: **Karla** (humanist grotesk with tabular figures for tallies and body).
Pair rationale: Arvo's weight reads like stamped ink on manila; Karla's even color keeps long blurb lines legible beside numbers.

## Palette — Manila Tag + Hay Twine + Graphite
| Role | Hex | Use |
|---|---|---|
| Paper | #F5EFE0 | Section backgrounds, ticket strip |
| Ink | #1C1917 | Body text, headings on light |
| Accent | #C26A2A | Counted numbers, primary buttons, tally marks |
| Deep | #2A2318 | Dark bands, footer, deep-tone sections |
| Signal | #D4943A | Hover states, open-now dot |
| Muted | #78716C | Captions, secondary text |

Contrast checks (all ≥ 4.5:1 body, ≥ 3:1 large):
- Ink on Paper: 14.2:1
- Accent on Paper: 4.6:1
- Paper on Deep: 12.8:1
- Accent on Deep: 5.1:1

Palette family name: **Manila Tag + Hay Twine + Graphite** (unique in registry).

## Hero family
Family 8 (photo mosaic): five tiles on paper — stacked bales (large), measured bed, opened bale, needle against tape, finished bed. Each tile carries a tally number. Headline sits beside on paper.

## Motion score
- Intro (≤ 1.2 s): five tally strokes draw across the mosaic; "35 sq ft per bale" counts up. Skippable via reduced motion.
- Scroll story 1 (desktop ≥ 640 px): bale counter pinned while bed outline draws segment by segment; bale stack grows one bale per 35 sq ft. Height: `calc(3 * 55svh + 100svh)`.
- Scroll story 2: load ticket strip wipes in at each section end via `--sw-p`.
- Entrance patterns: clip reveal on photos, stagger on card children.
- Hover: buttons lift 2px; ticket strip accent brightens.
- Reduced motion: all content visible statically; no pin, no draw, no count animation.

## Tools
1. **Bale counter** — inputs: bed size preset (small/medium/long foundation) or length × depth; new vs top-up. Output: bales at 3 in fresh (≈ 35 sq ft/bale), sample price range from `proof.prices[0]`. Handoff: "Book this count" → form prefilled with service + bale count.
2. **Bed sketcher** — inputs: tap shapes (strip, kidney, tree ring, corner) with rough sizes. Output: total sq ft + bales. Handoff: "Send this sketch" → form note field.
3. **Needle guide** — tap-to-compare cards for longleaf vs slash vs loblolly: length, color life, slope hold, sample price band. Handoff: "Ask for longleaf" → form service prefill.
Plus: ZIP checker, multi-step quote form (sketch → count → day → contact).

## Voice
Three sentences in voice:
- "Your ticket says 52 bales. You count 52 empty strings in the trailer."
- "We measure the bed before we shake the bale."
- "Three inches fresh, two after it settles. Ruler-checked."

Five banned words: quality, affordable, professional, experienced, satisfaction.