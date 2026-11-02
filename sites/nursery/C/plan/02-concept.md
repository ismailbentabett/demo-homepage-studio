# Concept — nursery-C (Fog Season Nursery)

## Three alternatives, then rejected

1. **Seasonal carousel hero.** Four slides cycling through fog/bloom/heat/harvest with a "Welcome to Fog Season" headline. Rejected: every garden center does carousels; it hides the current month's advice behind interaction; reads as generic.
2. **Product grid hero.** Rows of plant photos with prices, like an e-commerce catalog. Rejected: box-store template; doesn't answer "what grows here"; no local story.
3. **Family-owned story hero.** Portrait of owner + "Since 1997" paragraph. Rejected: cliché #2 from brief §4; delays the homeowner's question; nothing about the valley's calendar.

## The thesis
The site is the valley's garden almanac: each section is a season of the Modesto year, and the almanac ribbon tracks where you are in it. Scrolling turns the months.

## The signature system: the valley almanac ribbon
A horizontal strip of twelve month abbreviations (JAN · FEB · MAR … DEC) runs across the top of every section. The current month is marked with an accent dot; the section's active season band (Fog / Bloom / Rush / Heat / Second Spring) is shaded beneath its months. As you scroll, the marker advances and the color field cross-fades to match the season. Appears in: hero (ribbon at top), services (each service tagged to its month), proof (reviews carry the month they were earned), tools (calendar tool highlights the window), contact (ribbon resets to full year), footer (year closes back into fog).

## Type
- Display: **Crimson Pro** (old-style serif with warm italics for plant varieties and month names; seed-catalog voice). Variable weight 200–900.
- Text: **DM Sans** (clean grotesk for labels, forms, small text; balances the serif warmth). Variable opsz 9–40, weight 100–1000.
- Pair rationale: Crimson Pro carries the heritage and warmth of a fruit-crate label; DM Sans keeps data, tools and forms legible without competing. Neither is used by a sibling nursery site (no siblings exist yet); Crimson Pro appears 3× in the library (under limit), DM Sans appears 5× (under limit).

## Palette
Family: **Orchard Warmth** (warm orchard colors as main fields, deep bark for text).

| Role | Hex | Name |
|---|---|---|
| Ink | #2C1810 | Orchard Bark |
| Paper | #FAF6F0 | Warm Cream |
| Accent | #C4654A | Blossom Clay |
| Deep | #1A0F0A | Night Soil |
| Signal | #D4A843 | Straw Gold |
| Fog | #B8C4CC | Tule Gray |
| Bloom | #E8C4C8 | Almond Pink |

Contrast checks (all pass):
- Ink on Paper: 12.8:1 (AAA)
- Paper on Deep: 15.2:1 (AAA)
- Accent on Paper: 4.6:1 (AA large text, body use restricted to bold/large)
- Signal on Deep: 7.1:1 (AAA)
- Ink on Fog: 6.9:1 (AA)
- Paper on Accent: 4.6:1 (AA large text only — accent band uses paper text at ≥18px bold)

## Hero family
**8 — Photo mosaic.** Four seasonal photos in a tight grid: fog over bare orchard rows (large), almond blossom close-up, summer shade tree over ranch house, harvest basket of tomatoes. Headline sits on warm cream beside the grid. One color grade across all four. Unique in the nursery niche; hero family 8 used 2× in the library (under 3-limit).

## Motion score
- Intro (≤1.2 s): a soft fog layer (blur + opacity) lifts off the mosaic to reveal the four seasons; the almanac ribbon fades in from left. Skippable via reduced-motion class.
- Scroll story 1: the almanac ribbon's marker travels month by month as sections enter view; each section's background tint cross-fades to its season color (Fog gray → Bloom pink → Rush cream → Heat gold → Second Spring sage). Pinned only ≥640 px; stacked static on phones.
- Scroll story 2: in the shade trees section, a mature-size silhouette grows from sapling to full canopy as the visitor scrolls, showing root spread vs foundation distance. Clip-path reveal, no pin on mobile.
- Entrance patterns: text rises (opacity 0→1, translateY 24→0, 500 ms, 85 % viewport); images unclip (clip-path inset bottom → full).
- Hover: hairline underline grows from left via scaleX on links and buttons.
- Reduced motion: fog intro skipped (static mosaic visible immediately); ribbon marker static at current month; silhouette story shown at final state; all content readable without animation.

## Tools
1. **Planting calendar for Modesto** (hero-adjacent). Input: what you want to plant (tree / perennial / vegetable / native). Output: the month window for Stanislaus County and what is on the benches now. Handoff: "It's the window now: get a planting list" → quote form prefill.
2. **Mature-size check** (shade trees section). Input: spot type (by wall / under wire / near drive), distance in feet. Output: which tree heights fit without lifting slab or hitting lines. Handoff: "Ask which ones we have in that size" → form prefill.
3. **ZIP checker**. Input: ZIP. Output: delivery coverage confirmation. Handoff: form prefill.
4. **Multi-step quote form** (#contact). Steps: What do you need? → Sizes & quantities → Delivery or planting? → Your info. Each step prefilled by tool outputs above.

## Voice
Three sentences in the site's voice:
- "Bare-root fruit trees go in the ground while the fog is still on the orchards."
- "If your west wall bakes past three in July, we'll steer you away from a sycamore."
- "Bring a leaf or text us a photo; someone who knows the bug will write back before closing."

Five words never used: premium, luxury, expert, best-in-class, hassle-free.