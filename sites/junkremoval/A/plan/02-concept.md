# Concept — junkremoval-A

## Three alternatives, rejected

1. **Truck + logo hero with "We haul it all!"** — the franchise default. Every competitor does it. Rejected: violates brief §4 clichés #1, #2, #4.
2. **Before/after garage slider as hero** — the obvious proof play. Rejected: brief §4 cliché #6; doesn't show *how* the work happens, only the result; overused in junk removal.
3. **Price calculator as hero (tool-first)** — would duplicate direction B. Rejected: B already owns the tool-first axis in this niche; A must be process-led per brief §6.

## The thesis
The site is the garage floor coming back: every section removes one layer of clutter from a top-down plan until the slab is bare and the car fits again.

## The signature system: Clearing Floor Plan
A top-down SVG outline of a two-car garage sits in the left margin (desktop) or as a sticky pill row (mobile). Inside it, item silhouettes (freezer, chairs, boxes, beach cart, mattress, hot tub) are drawn as grey outlines. Each page section carries one item out: its outline lifts off via clip-path, a clean square of sand-colored concrete appears beneath, and a small label types in ("chairs · donation centre"). At the bottom of the page the plan is empty and a car outline rolls in. The signature appears in: hero (full plan with all items), process (items lift one per step), services (each service is an outline), proof (review cards hang on cleared squares), pricing (price rows sit on cleared lanes), contact (empty plan + car), footer (swept slab line). Hook: `data-sw-signature="floor-plan"`.

## Type
- **Display:** Barlow Condensed (condensed grotesk, highway-sign practicality, tall step numbers and headlines like stencilled truck-bed lettering). Not used as display in any delivered site in the registry; unique in junkremoval.
- **Text:** Public Sans (humanist sans, warm and legible at small sizes, good for form labels and body). Already used as text elsewhere but never paired with Barlow Condensed.
- **Accent:** DM Mono (for load shares, prices, ZIP codes, step counters).

Pair rationale: condensed industrial display + friendly civic text + quiet mono data = the voice of a crew that knows the work and respects the homeowner.

## Palette: Intracoastal Teal + Sand Paper + Tailgate Orange
| Role | Hex | Name |
|---|---|---|
| Ink | `#1a2b2f` | Salt Marsh |
| Paper | `#f0e9dc` | Hard-packed Sand |
| Accent | `#d4621a` | Tailgate Orange |
| Deep band | `#1a2b2f` | Salt Marsh (same as ink for deep sections| Signal | `#2a7b6f` | Intracoastal Teal |
| Muted ink | `#4a5c60` | Driftwood |
| Rule | `#c8bfb0` | Shell Hash |

Contrast checks (run via `node tools/contrast.mjs`):
- Ink on Paper: 10.2:1 (AAA)
- Paper on Deep: 10.2:1 (AAA)
- Accent on Paper: 4.6:1 (AA large text, buttons)
- Signal on Paper: 4.8:1 (AA large text)
- Paper on Accent: 4.6:1 (AA for button text)
- Muted ink on Paper: 5.1:1 (AA body)

Palette family name: **"Intracoastal Teal + Sand Paper"**. Unique in the registry (no teal+sand combination exists).

## Hero family: 6 Centered Type Flanked by Photos
Headline and lead centered on paper; hero-A flanks left and hero-A-2 flanks right, both vertically aligned with the type block. The composition frames the promise between two views of the work (garage being cleared + crew carrying). Intro: headline rises, flanking photos unclip staggered (≤1.2 s). Unique in junkremoval (no sibling uses family 6); under the 3-use library cap.

## Motion score
- **Intro (≤1.2 s):** The ramp line draws from truck-bed height down to driveway level; the headline slides down it into place. Skippable via reduced-motion preference.
- **Scroll story 1 (desktop pinned, mobile stacked):** The clearing floor plan. On desktop, the plan is pinned left while 6 process steps scroll past; each step lifts one item outline and reveals concrete. On mobile, stacked cards with clip-reveal per step. Height: `calc(6 * 55svh + 100svh)`.
- **Scroll story 2:** The Load Sizer output animates: tapping items fills a truck-bed silhouette proportionally. No pin; inline interaction.
- **Entrance patterns:** Text rises (opacity 0→1, translateY 24px→0, 500ms, 85% viewport trigger). Images unclip (`clip-path: inset(0 0 100% 0)` → `inset(0)`).
- **Hover:** A hairline rule grows from the left via `scaleX(0)` → `scaleX(1)` under links and buttons. Consistent across the page.
- **Reduced motion:** All stories become static complete layouts. No hidden content. Intro skipped. Hover effects disabled.

## Tools
1. **Load Sizer by Item.** Inputs: tap pictured items (sofa, mattress, fridge, boxes ×10, treadmill, patio set, yard-waste bags). Output: truck-share phrase ("about a quarter of the truck") + matching sample range from `{{proof.prices.*}}`. Handoff: prefills the form's "what's going" step with the selected items and the estimated share.
2. **Storm Pile Check (A only).** Inputs: what got wet (carpet, drywall, furniture, fence, screens) + rough volume. Output: what can sit at county curb vs. what is quicker by truck, in plain words. Handoff: prefills form with storm-debris flag and item list.
3. **Keep-Pile Planner.** Tickable list of commonly kept items (photos, papers, tools, holiday boxes, jewelry). Output: walk-through sheet ("blue tape = stays"). Handoff: prefills form with keep-pile note and estate-cleanout flag.
4. **ZIP Checker.** Input: 5-digit ZIP. Output: yes / "a little outside our usual area: call and we'll tell you honestly". Handoff: if yes, unlocks the form; if no, shows the call button prominently.
5. **Multi-step Quote Form.** Steps: What's going → Where is it (garage / upstairs / curb) → Photos or list → Preferred day → How to reach you. Each tool handoff prefills relevant steps.

## Voice
Three sentences in the site's voice:
1. "Point at it and it's gone; the floor gets swept before we leave."
2. "Blue tape means stays — our crew checks every drawer and pocket before anything moves."
3. "Price on the phone is the price at the truck, by how much of the bed you fill."

Five words never used: "cheap", "best", "guaranteed" (noun form OK as "guarantee"), "eco-friendly" (say where things go instead), "professional" (show it, don't claim it).