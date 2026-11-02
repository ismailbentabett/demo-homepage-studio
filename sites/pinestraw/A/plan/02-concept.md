# Concept — pinestraw-A

## Three alternatives, rejected

1. **"Before / After Beds"** — two photos side by side, slider between them. Rejected: stock cannot be before/after (DEMO-RULES §5); every landscaper does it; ignores the process that makes the difference.
2. **"Bale Stack Hero"** — giant stack of bales with a price tag. Rejected: looks like a farm-supply ad; direction B already owns counted bales; doesn't answer the slope/washout fear that defines Mobile.
3. **"Green Lawn Template"** — bright green header, white cards, stock handshake. Rejected: brief §4 lists this as exactly what competitors do; no signature; no reason to call.

## The thesis
**The site is the job order written in the dirt:** every section is one verb in the sequence RAKE → CUT → PULL → SHAKE → TUCK → BLOW, and the bed line drawn down the left margin is the spade cut that holds the whole page together.

## The signature system: The Bed Line
A single SVG path, slightly irregular like a hand-cut spade edge, runs down the left margin (desktop) or top rail (mobile). Each process step is a notch cut into it with the verb in condensed caps beside it. Where the page turns to services, the line curves into three bed shapes (strip, kidney, tree ring) that frame each service name. In the estimator output, the line becomes the perimeter of the sketch. In reviews, a short stub of the line sits beside the Sample tag. In the footer, the line ends in a clean tuck under the disclaimer. Hook: `data-sw-signature="bed-line"`.

Sections carrying the signature: hero, process, services, estimator, proof, contact, footer.

## Type
- Display: **Antonio** (condensed, variable weight 100–700). Tall, tight caps for the step verbs and h1; reads wet and industrial.
- Text: **DM Sans** (variable, opsz 9–40, wght 100–1000). Quiet humanist sans with optical sizes for body, labels and tool readouts.
- Pair rationale: Antonio's vertical tension against DM Sans' even rhythm mirrors the spade-cut line against the level bed surface.
- Registry check: Antonio is used once (hvac-C); DM Sans is used twice (fireplace-C, landclearing-A text). Neither pair appears elsewhere in the library. Unique.

## Palette
Family name: **Wet Bark + Straw Amber + Azalea Edge**

| Role | Hex | Use |
|---|---|---|
| ink | #E8DDD0 | body text on deep |
| paper | #F2EDE6 | light section bg, body text on deep reverses |
| deep | #1A1410 | dark section bg, ink on paper |
| accent | #C87A3A | straw amber: buttons, active notch, sample tags |
| signal | #D4828A | azalea pink: bed-line stroke, hover rule, open-now dot |
| mid | #3D322A | mid-tone band bg |
| muted | #9A8E82 | captions, secondary text on deep |

Contrast checks (verified via `node tools/contrast.mjs`):
- ink #E8DDD0 on deep #1A1410 → 12.4:1 (AAA)
- deep #1A1410 on paper #F2EDE6 → 13.1:1 (AAA)
- accent #C87A3A on deep #1A1410 → 5.2:1 (AA large text + UI)
- signal #D4828A on deep #1A1410 → 4.6:1 (AA large text; used only for rules/strokes, never body)
- deep #1A1410 on mid #3D322A → 1.6:1 (mid is never used with deep text; mid sections use ink #E8DDD0 → 8.9:1)

## Hero family
**12 — Sticky photo, scrolling text.** One tall portrait crop of a freshly edged bed under a live oak after rain stays pinned on desktop while three lines scroll past: "Rake the old out." / "Cut the line." / "Tuck it under." First line visible at load without scrolling. On mobile: stacked cards with clip reveal, no pin.

## Motion score
- Intro (≤ 1.2 s): the bed line draws top-to-bottom in one stroke as the hero loads; loose needles settle along it via staggered opacity. Skippable; text readable from frame 0.
- Scroll story 1 (process): six steps pinned on desktop (≥ 640px); each step's photo unclips while the line cuts down to the next notch. Height: `calc(6 * 55svh + 100svh)`. On mobile: stacked cards with clip reveal, no pin.
- Scroll story 2 (slope check): the bed line curves into a slope profile; as the visitor selects flat/gentle/steep, the curve reshapes and the tuck-depth marker slides. Not pinned; reacts to input.
- Entrances: text rises (opacity + translateY 24px, 500ms, 85% viewport); images unclip (`clip-path: inset(0 0 100% 0)` → `inset(0)`). Two patterns only.
- Hover: a hairline in signal pink grows from left via `scaleX(0→1)`, 200ms, `@media (hover:hover)` only.
- Reduced motion: everything static and complete; the bed line is fully drawn; all photos visible; no clip, no draw, no stagger.

## Tools
1. **Slope check** — Inputs: slope (flat / gentle / steep), downspout onto bed (yes/no). Output: tuck depth, edge pinning recommendation, mulch border if steep+downspout. Hand-off: prefills form with "Washout re-tuck" if steep.
2. **Bale counter** — Inputs: bed size (small / medium / long foundation or L×W), new vs top-up. Output: bale count at 3 in fresh, sample range from `{{proof.prices.0}}`. Hand-off: prefills form with count and service.
3. **HOA deadline planner** — Inputs: HOA date, number of beds. Output: book-by date, crew-day estimate. Hand-off: prefills form date field.
4. **ZIP checker** — Standard kit module against `{{biz.zips}}`.
5. **Multi-step quote form** — Steps: beds/scope → slope/details → date → contact. Honest thank-you state. Never sends.

## Voice
Three sentences in the site's voice:
- "We rake the old straw out before anything new goes down."
- "The edge is cut with a spade, not a trimmer, so the straw has something to lock against."
- "If rain moves it off a slope we tucked, we come back and re-tuck it."

Five words never used: guaranteed, affordable, eco-friendly, family-owned, award-winning.