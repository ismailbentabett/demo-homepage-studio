# Concept — cannabis-A (Night Jar Cannabis Co.)

## Three alternatives, rejected

1. **The glowing menu board.** A dark page with neon-green product cards and strain names. Rejected: this is every competitor site; it reads as a catalog, not a visit, and violates the brief's "no neon green leaf" rule.
2. **The lab report.** White paper, mono type, batch numbers everywhere. Rejected: that is direction B (Batch & Date). We are narrative and dark-led, not document-led.
3. **The fog dial.** A round disc that turns from morning to afternoon. Rejected: that is direction C (Poppy & Fog). We are high-desert night, not coastal fog.

## The thesis
The site is a dark-sky trail through the shop: each section is a numbered lamp stop lit in amber on a deep pine-night field, and scrolling walks the visitor from the door to the sealed bag so a first-timer knows exactly where they fit before they arrive.

## The signature system: lamp stops
A numbered pool of amber light (01 Door, 02 Case, 03 Counter, 04 Scale, 05 Seal, 06 Pickup) appears at the left margin on desktop and as a top pill on mobile. Only the current stop is fully lit; the rest glow faintly. Each stop's photo lives inside its pool of light. The lamp appears in:
- Hero: lamp 01 lights behind the headline.
- First-visit walk-through: lamps 01–05 light one by one down the path.
- Services: each service card sits under its lamp number.
- Reviews: each review carries the lamp where the moment happened.
- Footer: lamp 06 glows as the sign-off.
Hook: `data-sw-signature="lamp-stop"`.

## Type
- Display: **Cormorant Garamond** (serif, warm old-style with good italics for step names and headlines). Variable wght 300–700, italic available.
- Text: **DM Sans** (quiet humanist grotesk for body and labels). Variable opsz + wght.
- Pair rationale: Cormorant's warmth reads as craft and calm; DM Sans stays legible at small sizes and never competes. Neither is used in the cannabis niche yet; Cormorant appears once elsewhere (electrician-C) but with Karla, so the pair is unique.

## Palette: Pine Night + Amber Lamp + Trichome Frost
| Role | Hex | On | Ratio | Use |
|---|---|---|---|---|
| deep | #0E1418 | frost #E8E4DC | 15.8 | body on deep, reversed |
| frost | #E8E4DC | deep #0E1418 | 15.8 | body on paper |
| amber | #D4943A | deep #0E1418 | 7.2 | accent words, lamp glow |
| amber-ink | #8A5A00 | frost #E8E4DC | 5.4 | accent words on light |
| bark | #6B3A28 | frost #E8E4DC | 7.1 | secondary accent, rules |
| mid | #2A3038 | frost #E8E4DC | 10.2 | card backgrounds |

Palette family: **Pine Night + Amber Lamp**. Unique in the registry.

## Hero family
**9 — Horizontal filmstrip.** A slow side-scrolling strip of five frames under the headline: jar on shelf, lid off, flower on scale, sealed bag, pickup window at dusk. Pauses on hover/focus; stops with reduced motion. Unique in the cannabis niche.

## Motion
- Intro: the page starts in darkness; lamp 01 warms up behind the headline in ≤ 1 s. Skippable via reduced motion.
- Scroll story: in #first-visit, lamps 01–05 light one after another down the path while the filmstrip frame for each step slides into the lit pool. Pinned only ≥ 640px; stacked cards below.
- Entrances: text rises (opacity + translateY, 500ms, 85% viewport); images unclip (`clip-path: inset(0 0 100% 0)` → `inset(0)`).
- Hover: a hairline under the item grows `scaleX(0→1)` from left, 200ms. One language.
- Reduced motion: all content visible, no animation, filmstrip static.

## Tools
1. **First-visit walk-through.** Inputs: none or "first time / been a while / regular". Output: 5 steps (ID check, the counter, questions, paying, sealed bag) with time each takes. Hand-off: pre-order form prefilled with "First-time guidance".
2. **Format explainer (start-low card).** Inputs: pick a format (flower, edible, vape, tincture). Output: serving size labelling, timing (inhaled minutes, edibles up to two hours), "start low, go slow". No effect claims. Hand-off: pre-order prefilled with chosen format.
3. **Visitor checklist.** Inputs: "visiting from out of state?" toggle. Output: valid ID, 21+, keep sealed and out of reach while driving, not on federal land. Hand-off: call CTA.
Plus ZIP checker and multi-step pre-order form.

## Voice
- "We open the jar at the counter so you can see and smell before it is weighed."
- "Start with half a piece; you can always have more later."
- "Text us from the lot and we bring the sealed bag to your window."
Never: premium, exceptional, high, trip, dank.