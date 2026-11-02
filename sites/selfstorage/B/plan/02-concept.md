# Concept — selfstorage-B

## Seed
West Palm Beach is humid eleven months a year. Storage here is a climate problem first and a space problem second. The page reads like an instrument panel: every section opens with a gauge line in monospace, and the numbers are the promise.

## Signature system — The Reading
A single-line mono label that opens each section, formatted as `KEY value · UNIT`. Examples:
- `SIZE 10×10 · 100 SQ FT · 800 CU FT`
- `HALL 68–78°F · RH ≤ 55%`
- `LEASE month-to-month · NOTICE before next due date`
- `GATE 06:00–22:00 · OFFICE 08:30–18:00`

The reading appears in the hero, every service card, the reviews header, the pricing block, and the footer. It is the visual spine. Under motion, the numbers tick into place once per section entry.

## Hero composition
Family 2 (50/50 split). Left half: headline + default sizer reading (`SIZE 10×10 · $165–$219/mo`). Right half: cool-lit climate hallway photo (`hero-B`). A thin drawn 10×10 floor outline crosses the center seam, half on type, half on photo. Next band peeks at the bottom.

## Motion
- Intro: the 10×10 outline draws itself (SVG stroke), then fills with top-down item shapes from the default sizer answer; the monthly range counts up. Duration ≤ 1.2s, h1 readable immediately.
- Scroll story (desktop only, ≥ 640px): a humidity dial follows one wooden dresser through twelve months outside vs inside the climate hallway. Pinned sequence, height `calc(4 * 55svh + 100svh)`. Phone gets stacked cards with the same four frames, no pin.

## Palette
| Role | Hex | Use |
|---|---|| deep | #0B1C2C | primary background, body-on-light inverse |
| paper | #E8EDEB | light band background |
| cyan | #5CD6E0 | readings, links, active states |
| cyan-ink | #0F5F66 | readings on paper |
| amber | #E0A526 | primary CTA, call button |
| amber-ink | #7A5200 | CTA text on paper |
| warm-white | #F4F1EA | body text on deep |

Contrast checked: warm-white on deep ≥ 13:1; cyan on deep ≥ 8:1; cyan-ink on paper ≥ 5.5:1; amber on deep ≥ 7:1.

## Type
- Display/headlines: **Space Grotesk** (weights 500, 700). Clean grotesk, good numerals.
- Mono readings: **JetBrains Mono** (weight 400). Precise, tabular nums built in.
- Body: Space Grotesk 400.

## Layout families (no neighbours share)
1. Split (hero)
2. Stack-center (climate explainer)
3. Grid-3 (services)
4. Side-by-side reversed (chooser tool)
5. Full-bleed break (humidity story)
6. Cards-horizontal (reviews)
7. Two-column (pricing + lease)
8. Stack-center (contact)
9. Band (footer reading)

## Sections (9 total)
1. Hero (split, t-deep) — headline + sizer reading + hallway photo
2. Climate explainer (stack-center, t-paper) — what the hallway holds and why it matters
3. Services grid (grid-3, t-deep) — all nine services as reading-labeled cards
4. Chooser tool (side-by-side reversed, t-paper) — climate or drive-up decision
5. Humidity story (full-bleed break, t-deep) — pinned dial sequence / stacked cards
6. Reviews (cards-horizontal, t-paper) — sample reviews with reading header
7. Pricing + lease (two-column, t-deep) — sample price block + plain-words lease
8. Contact (stack-center, t-paper) — multi-step form + ZIP checker + two clocks
9. Footer (band, t-deep) — final reading + disclaimer + credits