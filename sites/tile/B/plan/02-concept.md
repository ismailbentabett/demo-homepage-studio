# Concept — tile-B (Feeler Gauge Tile Works)

## Three alternatives, rejected
1. **Gallery-forward portfolio.** Big finished-room photos, minimal text. Rejected: every competitor does this; no proof of measurement; doesn't answer "will it be flat?".
2. **Tool-as-hero (estimator only).** The estimator fills the first screen. Rejected: too transactional for a first impression; homeowners need trust before they input dimensions.
3. **Literal inspection report.** The page looks like a PDF checklist. Rejected: reads as a gimmick, not a brand; too dense for a sales demo.

## Thesis
The site is an inspection sheet made beautiful: every section sits on a 1/16" tile grid, every claim carries a gauge readout (target / measured / tool), and the visitor prices their room with the same numbers the crew uses on site.

## Signature system: gauge readout + tile grid
- **Tile grid:** the page gutters are 1/16" grout lines; cards sit in tile-sized cells. On desktop the grid is visible as faint rules; on mobile it collapses to stacked cards with the same gap.
- **Gauge readout:** a small mono tag on every claim: `TARGET 1/16" · MEASURED 1/32" · TOOL straightedge`. Appears in hero (on photos), flatness story, services (each blurb gets a relevant metric), reviews (as a pull-quote tag), and the estimator summary.
- **Sections using signature:** hero, flatness-story, services, estimator, reviews, footer.

## Type
- Display: **Outfit** (geometric grotesk, variable wght 100-900). Clean, modern, reads well at large sizes; distinct from tile-A's Space Grotesk.
- Text: **IBM Plex Sans** (humanist sans, variable wght 100-700). Friendly body, good for longer blurbs.
- Accent/mono: **IBM Plex Mono** (for all gauge readouts, prices, measurements, phone, hours). Tabular nums, technical voice.

## Palette: porcelain + level-vial green
| Role | Hex | Use |
|---|---|---|
| ink | #1C1F23 | body text on light, headings |
| paper | #F4F2EF | main background, cards |
| concrete | #E2DFDA | secondary bg, grid lines |
| deep | #1C1F23 | dark band (price table, footer) |
| accent | #2D8C4E | level-vial green: CTAs, active states, gauge check marks |
| signal | #C74B1E | warning/error, leak-symptom alerts |

Contrast checks (run via tools/contrast.mjs): ink on paper ≥ 14:1; accent on deep ≥ 5.2:1; ink on concrete ≥ 10:1. Body text passes AAA.

## Hero family
**8 — Photo mosaic.** Four photos in a tight grid with real grout-width gaps; one huge (hero-B, large-format floor in raking light); three smaller (level on tile, leveling clips, thinset back-butter). Each carries a mono spec tag. Headline sits on paper beside the mosaic on desktop; stacks above on mobile.

## Motion
- **Intro (≤ 1.2s):** mosaic tiles drop into grid with staggered clip-path reveal (60ms each); a straightedge SVG slides across the big photo leaving a "FLAT ✓" readout. Line-mask h1 reveals after. Skippable, never blocks reading.
- **Scroll story 1 (flatness):** pinned on ≥640px. A raking-light floor photo where the lippage gap visually closes from 1/8" to flush as you scroll; the gauge readout counts down. Height calc(3*55svh+100svh). Reduced motion: static side-by-side pair with numbers.
- **Scroll story 2 (estimator sketch):** live SVG builds as choices are made (clip-path reveal per room block). Not pinned; inline.
- **Entrance patterns:** text rises (opacity+translateY, 500ms, 85% viewport); images unclip (clip-path inset). Quiet sections (FAQ, footer) do not animate.
- **Hover:** hairline underline grows from left via scaleX, 200ms, @media (hover:hover) only.

## Tools
1. **Tile count & layout estimator** (`data-estimator`). Inputs: room L×W, tile size (12×24 / 24×48 / 3×6 / hex), pattern (straight / offset / herringbone). Output: sq ft, waste factor, boxes, sample price range from facts. Hand-off: "Send these numbers" prefills form with service + size.
2. **Lippage & flatness explainer** (custom scroll story). Shows two big tiles with adjustable gap; explains why large-format needs a flat floor and leveling clips. Hand-off: "Measure my floor" → form.
3. **Repair or redo quiz** (`data-checklist`). 4 questions → regrout / spot repair / rebuild recommendation with sample ranges. Hand-off: prefill service.
4. **ZIP checker** (`data-zip`). Against facts.biz.zips. Yes → form with ZIP prefilled. No → honest message + phone.
5. **Multi-step quote form** (`form[data-lead]`). Steps: service → job details → when → contact. Honeypot, time trap, honest thank-you.

## Voice
- "We measure twice so your floor stays flat."
- "The number on the gauge is the number you get."
- "Your estimate lists the square footage, the waste factor, and the boxes."
- Never: quality, craftsmanship, best, award, free estimate, guaranteed (unless sample-tagged from facts).