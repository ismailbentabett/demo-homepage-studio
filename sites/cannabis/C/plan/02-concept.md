# Concept — cannabis-C (Poppy & Fog)

## Three alternatives, rejected

1. **"The apothecary shelf"** — dark wood tones, serif type, jars lined up like a pharmacy. Rejected: too close to direction A's lamp-lit warmth; reads as heritage brand, not local Santa Cruz. Every competitor already does "elevated apothecary."
2. **"The lab report"** — white field, mono numbers, test-date stamps. Rejected: this is direction B verbatim. Also wrong for C's local-story axis; feels clinical instead of coastal.
3. **"The beach-town poster"** — bright turquoise and coral, hand-lettered script, surf imagery. Rejected: violates brief §4 (no beach party scenes); reads as tourist gift shop, not a dispensary locals trust year-round.

## The thesis

The page is a Santa Cruz day told in weather: it starts in morning fog and clears to afternoon gold, and every section lives at its hour so a first-timer knows when the counter is quiet and a regular knows when to pre-order before the rush.

## The signature system: fog dial

A round disc (the same shape as the hero mask) sits at the right edge of each section on desktop, inline on mobile. It carries a gradient that rotates from fog teal-gray to poppy orange as the visitor scrolls, driven by `--sw-p`. The dial also reads the shop's clock: sections map to hours from facts (quiet morning = 10–12, midday = 12–3, afternoon rush = 3–6, last pickup = 6–close). The dial appears in:
- **Hero:** full-size disc masks the coastal fog photo; headline sits beside it.
- **Our day / hours:** dial turns through the day's bands as you read each time block.
- **Services:** each service card carries a mini dial showing when it's most requested (pre-orders peak afternoon, first visits are morning).
- **Area / pickup:** the area map's towns light in the order the fog clears them (coast first, mountains last), synced to the dial.
- **Contact / footer:** dial rests at closing-time position; resets on scroll back to top.

Hook: `data-sw-signature="fog-dial"`.

## Type

- **Display:** Oswald (condensed, bold weight only). Tall, tight letterforms evoke hand-painted California shop signage without being retro. Already in catalog.
- **Text:** Onest (clean geometric sans, variable wght 100–900). Quiet, legible at small sizes, pairs well with Oswald's density. In catalog.
- **Accent numerals:** DM Mono for prices, batch codes, times, ZIPs. Keeps numbers distinct from body without making the whole site feel technical.

Uniqueness check: Oswald has been used in concrete-B and autotuneup-A but never in cannabis niche. Onest has not been used as text face in any delivered site. Pair is unique.

## Palette: Fog Teal + Poppy Orange + Redwood

| Role | Hex | Name |
|---|---|---|
| Ink | #1e2a2f | Deep Fog |
| Paper | #f4f1eb | Sea-Glass Cream |
| Accent | #d4682a | California Poppy |
| Deep band | #2a3d45 | Marine Layer |
| Signal | #c44b1c | Burnt Poppy |
| Muted ink | #5a6b72 | Fog Mid |

Contrast checks (run via `tools/contrast.mjs`):
- Ink (#1e2a2f) on Paper (#f4f1eb): 11.8:1 (AAA)
- Paper (#f4f1eb) on Deep (#2a3d45): 9.2:1 (AAA)
- Accent (#d4682a) on Deep (#2a3d45): 4.6:1 (AA for large text / accent use)
- Ink (#1e2a2f) on Accent (#d4682a): 4.8:1 (AA for button text on accent bg)

Palette family name: **"Marine Fog + Poppy + Redwood"**. Unique in registry (no existing site uses this combination or name).

## Hero family

**13 — Shape-masked photo.** A circular disc (border-radius: 50%) masks the hero-C photo (coastal fog over California shoreline). Headline and proof line sit to the left on desktop, below on mobile. The disc is the fog dial at rest. Unique in cannabis niche (A uses filmstrip, B uses document object). Hero family 13 has been used 3 times in library (electrician-C, general-C, moving-C); this is the 4th allowed use and the only one in cannabis.

## Motion score

- **Intro (≤ 1.2 s):** A soft fog layer (CSS gradient overlay) drifts off the hero disc from center outward, revealing the poppy-warm color beneath. The h1 line-mask reveals simultaneously. Skippable via reduced-motion (static disc, no drift).
- **Scroll story 1 ("Our day"):** The fog dial rotates its gradient stop positions as each hour-band enters view; the active band's background tints slightly warmer. Pinned sequence on desktop only (≥ 640px); stacked cards with clip reveal on mobile.
- **Scroll story 2 (area map):** Town pins on a simplified SVG map light from coast to mountains in sync with the dial's rotation. Not pinned; uses IntersectionObserver stagger.
- **Entrance patterns:** Text rises (opacity + translateY 24px→0, 500ms); images unclip (`clip-path: inset(0 0 100% 0)` → `inset(0)`); numbers count once. Quiet sections (FAQ, disclaimer) do not animate.
- **Hover language:** Hairline underline grows scaleX(0→1) from left, 200ms, on links and buttons. Cards lift 2px with shadow increase. All inside `@media (hover:hover)`.
- **Reduced motion:** All animations disabled; fog dial shows static noon position; all content visible; no hidden-before-reveal states.

## Tools

1. **Pickup planner:** Inputs: pick-up day (today/tomorrow/custom), time window (morning/afternoon/evening), counter or curbside. Output: a styled pickup ticket with "bring your ID," estimated ready time, and step list. Hands off to pre-order form prefilled with pickup preference.
2. **Open-now + pickup lane:** Uses facts hours + timezone. Output: status line ("Open now · until 9 pm" / "Closed · opens Mon 10 am") + whether curbside is currently running. Appears in header and hero proof line.
3. **First-visit walk-through:** Inputs: none (or toggle "first time / been a while / regular"). Output: 5 steps (ID at door, the counter, questions budtender asks, paying, sealed bag) with time estimates. Leads to pre-order form or call.
4. **ZIP checker:** Standard kit module. Answers "is this our pickup area" against facts zips. Yes → form with ZIP prefilled. No → nearest town suggestion.
5. **Multi-step pre-order form:** Kit `form` module. 4 steps: service → job details (format, quantity range) → when (pickup planner handoff) → contact. Honest thank-you state.

## Voice

Three sentences in the site's voice:
- "Foggy mornings mean a quiet counter; come in before noon and we have time to talk through the case."
- "Pre-order before you drive down Highway 17 and it is packed when you arrive."
- "We start everyone with the smallest serving on the pack and write the timing down."

Five words never used: premium, exceptional, high, trip, dank.