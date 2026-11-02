# Concept — selfstorage-A (Wide Aisle Storage)

## Three alternatives, then rejected

1. **The hallway tour.** A long scrollable hallway photo with hotspots on each door. Rejected: hotspot galleries are overused in SaaS and feel like a virtual tour widget, not a sales page. Hotspots also fail the phone-first rule (tiny targets).
2. **The moving-day timeline.** A vertical timeline from "sold the house" to "locked the unit" with photos at each node. Rejected: timelines are a competitor cliché in storage and moving; the visual rhythm becomes identical dots on a line.
3. **The size catalog.** A grid of unit sizes with floor plans and prices, like a rental-car picker. Rejected: this is exactly what every chain does; it reads as a widget embedded in a template, not a designed page.

## The thesis
The page is the aisle: every section is a numbered roll-up door along one corridor, and scrolling walks you from the kitchen-table reservation to the locked unit, with the door rising to reveal what is behind it.

## The signature system: the unit door
Each section carries a stencilled door number (A-101, A-102…) set in the condensed display face, positioned top-left like the real stencil on a steel door. A thin horizontal rule sits under the number like the door track. On scroll-in (under `.sw-motion`), the section's content reveals with a bottom-up clip that mimics the roll-up door rising; statically, the content is fully visible and the number still reads as wayfinding. The signature appears in: hero (A-100), sizer (A-102), climate (A-103), services (A-104), prices (A-105), gate (A-106), hours (A-107), lease (A-108), reviews (A-109), contact (A-110). The footer repeats the numbering as "END OF AISLE".

## Type
- Display: **Bebas Neue** (tall condensed sans, used as the stencilled door numbers and section titles). Distinctive for storage because it matches the industrial stencil aesthetic without being a novelty font.
- Text: **DM Sans** (clean geometric sans for body, labels, form fields). Pairs quietly with Bebas and reads well at small sizes on phones.
- Checked against `data/fonts-catalog.json` and `data/design-registry.json`: Bebas Neue is not used elsewhere in the selfstorage niche; DM Sans is not paired with Bebas in the library.

## Palette
Family: **stucco white + roll-up blue**. Inspired by Florida storage facilities: white stucco walls, pale concrete, and the specific blue of painted roll-up doors.

| Role | Hex | On | Ratio | Use |
|---|---|---|---|---|
| ink | #1a1a1a | paper #f5f3ef | 16.1 | body text on light |
| paper | #f5f3ef | ink #1a1a1a | 16.1 | page background, card bg |
| deep | #1c2b3a | paper #f5f3ef | 12.4 | dark band (#gate), reversed text |
| accent | #2d6da8 | paper #f5f3ef | 5.3 | primary buttons, links, door numbers |
| accent-ink | #1b4a75 | paper #f5f3ef | 8.1 | accent text on light (captions, labels) |
| mid | #d6d2cb | ink #1a1a1a | 1.8 | rules, dividers only (never text) |
| signal | #c45a2d | paper #f5f3ef | 4.6 | open-now badge, urgent microcopy |

Generated with `node tools/contrast.mjs`. Body on paper ≥ 4.5:1 ✓. Accent on paper ≥ 4.5:1 ✓. Deep band uses paper text (12.4:1) ✓.

## Hero family
**Family 1 — Full-bleed photo with left scrim.** The roll-up-door aisle photo fills the viewport behind a left-aligned scrim that carries the headline, proof line and CTA. The scrim uses the deep palette color at high opacity so text reads clearly over the bright Florida stucco photo. Uses `hero-A` from the manifest. This is the only hero family with remaining capacity in the library.

## Motion score
- **Intro (≤ 1.2 s):** The hero photo settles from a slight zoom (scale 1.04 → 1) behind the scrim while the headline lines mask-reveal upward, staggered 70ms. The door number A-100 prints in last. Skippable; text is readable before animation starts.
- **Scroll story 1 (desktop ≥ 640px):** A small truck icon drives down a drawn aisle line pinned to the left margin as you scroll through the seven move-in steps (doors A-102 through A-108). Each door lights up as the truck stops at it. Height: `calc(7 * 55svh + 100svh)`. Under 640px: stacked cards with clip reveal, no pin.
- **Scroll story 2:** None. One story is enough; the door-rise entrance provides variation per section.
- **Entrance patterns:** Text rises (opacity + translateY); images unclip (clip-path inset). Door sections add the bottom-up clip timed to the door number printing.
- **Hover:** A hairline rule grows from left (`scaleX(0→1)`, 200ms) under buttons and card titles. Consistent across the site.
- **Reduced motion:** All content visible; doors are shown open (no clip animation); the truck story renders as a static numbered list with the aisle line drawn.

## Tools
1. **What fits sizer** (door A-102): Inputs are room count or item list (sofa, mattress, boxes, golf cart). Output is the recommended size drawn as a top-down floor plan with items placed, plus the sample monthly range from `{{proof.prices}}`. Ends with "Hold this size" → #contact with size prefilled.
2. **Two clocks** (door A-107): Office hours from `{{hours|today}}` and gate hours stated in the service blurb, shown side by side with live open/closed state. Leads to call (office) or hold online (gate).
3. **ZIP checker** (inside #area): Checks visitor ZIP against `{{biz.zips}}`; answers in an aria-live region; yes offers the form with ZIP noted.
4. **Multi-step quote form** (#contact, door A-110): Four steps — size → climate or drive-up → move-in date → contact info. Per-step validation, honeypot, honest thank-you. Never sends.

## Voice
Three sentences in the site's voice:
- "Back the truck right up to the door and unload straight in."
- "Pick a size, sign, and get your gate code from your kitchen table."
- "Stay one month or two years; give notice and move out when you're ready."

Five words it will never use: guaranteed, cheapest, award-winning, 24/7, eco-friendly.