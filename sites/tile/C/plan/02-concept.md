# Concept — tile-C (Two-Flat Tile & Mosaic)

## Three rejected alternatives

1. **Vintage postcard wall.** Each section is a framed postcard from a Chicago neighborhood with cursive captions. Rejected: reads as a gift shop, not a contractor; no way to show layers or prices without breaking the conceit.
2. **Tile-sample board grid.** The whole page is a pegboard of physical tile samples you "flip" to reveal details. Rejected: gimmick that collapses on mobile; no room for process or reviews without abandoning the metaphor.
3. **Bungalow cross-section.** A single architectural drawing of a Chicago bungalow with rooms labeled and zoomed into. Rejected: too close to direction A's layer cutaway; one drawing cannot carry 10 sections without becoming an anatomy poster.

## Thesis

The site is a hex-mosaic floor laid across Chicago: every section is one tile in the pattern, and scrolling walks you through the rooms and seasons where tile lives in these houses.

## Signature system — Hex Mosaic Map

A field of small flat-topped hexagons rendered in CSS/SVG. Each hex represents a neighborhood or suburb; colors are brick (#8B3A2F), cream (#F3E8D2) and glazed green (#2F6B5E). On scroll, hexes fill in via `--sw-p` clip-path wipe to mark progress. The same hex shape frames every photo (clip-path polygon), appears as the bullet marker on lists, and becomes the button icon. Hover/tap a hex in the area map to see the town name, typical house type and common job. Hook: `data-sw-signature="hex-map"`. Appears in: hero (single large hex mask over photo), area (full mosaic map), services (hex bullets), proof (hex-framed review photos), footer (complete filled map).

## Type

- Display: **Young Serif** — heavy, rounded old-style serif with a homely confidence that matches 1920s Chicago bungalow lettering. Used for h1-h3.
- Text: **DM Sans** — clean grotesk with optical sizing; friendly at small sizes, tabular figures for prices and hours.
- Pair rationale: Young Serif carries the heritage warmth; DM Sans keeps specs and tools readable. Neither is used by tile-A or tile-B (checked against registry).

## Palette — Bungalow Brick + Glazed Green + Warm Cream

| Role | Hex | On | Ratio | Use |
|---|---|---|---|---|
| ink | #1C1816 | cream #F3E8D2 | 15.2 | body on light |
| cream | #F3E8D2 | ink #1C1816 | 15.2 | paper bg |
| brick | #8B3A2F | cream #F3E8D2 | 5.8 | accent words, hex fills, rules |
| brick-ink | #6B2A22 | cream #F3E8D2 | 7.4 | accent on light when carrying text |
| green | #2F6B5E | cream #F3E8D2 | 5.1 | deep band bg, hex fills |
| green-ink | #F3E8D2 | green #2F6B5E | 5.1 | reversed text on green band |
| mid | #D6C8B0 | ink #1C1816 | 9.1 | muted borders, dividers |

Palette family: "Bungalow Brick + Glazed Green". Unique in the library (no other site uses this combination). Tone lead: color-led.

## Hero family — 13 Shape-masked photo

A single large hexagon clips the hero photo (vintage white hex mosaic floor). The headline wraps around the hex on cream. The hex returns as the signature frame throughout. First statement visible without scrolling.

## Motion

- Intro: the hex mask grows from a small tile to full hero photo (≤ 1 s, scale transform, ease-out). H1 line-mask reveals after.
- Scroll story: the hex area map fills tile-by-tile as you scroll through four season bands (winter basements, spring baths, summer kitchens, fall fireplaces). Pinned only ≥ 640px; below, stacked cards with clip reveal. Story height: `calc(4 * 55svh + 100svh)`.
- Entrances: text rises (opacity + translateY, 500ms, 85% viewport); images unclip (clip-path inset bottom → 0). Quiet sections (statement, FAQ) do not animate.
- Hover: hairline under links/buttons grows scaleX(0→1) from left, 200ms. Inside `@media (hover:hover)` only.
- Reduced motion: hex map fully filled and static; all content visible; no pin; entrances instant.

## Tools

1. **Repair or redo quiz.** Inputs: tile age, how many cracked, leak yes/no, do you like the tile. Output: "regrout and reseal", "spot repair" or "rebuild" with sample price ranges from facts. Handoff: prefills service into quote form.
2. **Grout color preview.** Pick a tile swatch (white subway, gray hex, terracotta, marble look) and a grout (white, warm gray, charcoal, matched). Output: live CSS swatch pair with aging note. Handoff: prefills selection into form notes.
3. **Heated floor cost card.** Input: room size slider. Output: install range from `{{proof.prices.3.from}}`–`{{proof.prices.3.to}}` (Sample tagged) plus daily run-time note. Handoff: prefills Heated Floors service.
4. **ZIP checker.** Standard kit module against `biz.zips`. Yes → opens form with ZIP prefilled. No → honest message + phone.
5. **Multi-step quote form.** 4 steps: service → job details → when → contact. Honest thank-you state.

## Voice

Three sentences in voice:
- "Your bungalow's hex floor has lasted a hundred years. We'll make sure the next hundred look just as good."
- "January mornings start better on a warm floor. Let's put one under your tile."
- "Send us a photo of the crack. We'll tell you if it's a patch or a rebuild before we set foot in your house."

Five banned words never used: quality, craftsmanship, expert, professional, beautiful.