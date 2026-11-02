# Concept — septic-C

## Three rejected alternatives
1. **Storm tracker dashboard.** A live-looking radar widget as hero. Rejected: feels like a weather app, not a septic service; stock radar images are not in the manifest; gimmick over substance.
2. **Plant diagram explorer.** An interactive SVG aerobic plant with hotspots. Rejected: too close to direction A's process cross-section; hotspots are heavy on phones; reads as educational, not local.
3. **Parish photo collage.** A mosaic of Lafayette landmarks. Rejected: direction C already uses map/area-led hero; collage would duplicate the area signal without adding the seasonal thesis.

## Thesis
The site is an Acadiana rain almanac: every section is pinned to a month or season, and the services, stories and proof all answer "what your plant needs when the rain does this."

## Signature system: Rain Almanac Strip
A horizontal month strip (Jan–Dec) with rainfall bars; hurricane season (Jun–Nov) is shaded. Each section activates its month via `--sw-active` set by IntersectionObserver; the active bar fills with crawfish-red and the section's note appears beneath the strip. The strip appears in:
1. Hero peek (full year, current month lit).
2. Services (each service tied to its peak month).
3. Process story (seasonal walkthrough).
4. Proof reviews (month pill on each review).
5. Footer (strip resets, current month still lit).

Hook: `data-sw-signature="rain-almanac## Type
- Display: **Young Serif** — warm, rounded old-style serif with good italics for place names and month labels; distinct from siblings (A uses slab, B uses grotesk+mono).
- Text: **Work Sans** — slightly wide, workmanlike grotesk for UI and body; readable at small sizes on humid-green backgrounds.
- Pair unique in niche and library (checked against registry: Young Serif used once in concrete-C but paired with Figtree; Work Sans not yet paired with Young Serif).

## Palette: Bayou Green + Egret White + Cypress Brown + Crawfish Red
| Role | Hex | On | Ratio | Use |
|---|---|---|---|---|
| deep (bayou green) | #1A3328 | egret #F2F0E9 | 12.8 | body on deep, reversed type |
| paper (egret white) | #F2F0E9 | deep #1A3328 | 12.8 | body on paper |
| accent (crawfish red) | #B8432F | deep #1A3328 | 5.1 | buttons, active almanac bar, signal words on deep |
| accent-ink | #8C3222 | paper #F2F0E9 | 5.6 | accent words on paper |
| mid (cypress brown) | #5C4A3A | paper #F2F0E9 | 7.2 | muted ink, rules on paper |
| signal (soft gold) | #D4A03C | deep #1A3328 | 6.3 | sample tags, hour markers on deep |

Palette family: "Bayou Green + Egret + Crawfish". Unique in registry.

## Hero family
**15 — Map / area-led.** A drawn SVG map of Lafayette and the coulee towns with the Vermilion River as a blue thread; rainfall marks across it; headline set along the bayou; ZIP checker built into the map panel. No real tile map.

## Motion
- Intro (≤ 1.2 s): the bayou line draws itself across the map via `stroke-dashoffset`; towns fade in at their pins. Skippable, never blocks h1.
- Scroll story 1: rain almanac bars rise month-by-month as the strip scrolls horizontally (pinned ≥ 640px, stacked cards below).
- Scroll story 2: process cards clip-reveal on phone; on desktop, a pinned plant walkthrough with four steps.
- Entrances: text rises (opacity + translateY), images unclip (`clip-path`). Quiet sections (statement, FAQ) do not animate.
- Hover: hairline grows from left via `scaleX`, 200ms, inside `@media (hover:hover)`.
- Reduced motion: almanac strip is static with current month lit; map is fully drawn; all content visible.

## Tools
1. **Alarm decoder.** Inputs: light color (red/amber/green), beeping or silent, aerobic or conventional. Output: plain read ("timer reset" / "float stuck" / "call now") + next step. Hand-off: prefills form with symptom.
2. **Backup triage.** Inputs: symptom (gurgle/smell/wet yard/alarm), scope (one drain/all), after rain yes/no. Output: likely cause + what to do in the next hour. Hand-off: call button or form prefill.
3. **ZIP checker.** Validates against `biz.zips`; yes → form with ZIP prefilled; no → polite message + phone.
4. **Multi-step quote form.** Service → job details → when → contact. Honest thank-you state.

## Voice
- "After sixty inches of rain, your plant earns its keep."
- "We check the air pump, the tablets and the spray heads in one visit."
- "If the alarm comes back within thirty days, so do we."

Never uses: guaranteed, best, top-rated, eco-friendly, 24/7.