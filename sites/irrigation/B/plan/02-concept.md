# Concept — irrigation-B (Catch Cup Irrigation)

## Three alternatives, rejected

1. **The audit report as a PDF viewer.** A scrolling document with page turns. Rejected: too literal, feels like a download gate, not a sales page.
2. **Water-drop logo + blue-green palette + lawn photo.** The exact cliché the brief bans. Rejected: every competitor does this.
3. **Before/after lawn gallery.** Stock lawns presented as "our work". Rejected: violates DEMO-RULES §5, no measurement story.

## Thesis

The site is the catch-cup audit itself: every section is a reading on the coverage grid, and scrolling fills the cups from empty to measured so the homeowner sees their yard quantified before anyone asks for money.

## Signature system: Coverage Grid

A 4×4 grid of cup outlines appears in the hero beside the promise. Each cup fills to a different level via `--sw-p` as you scroll. The same grid recurs as:
- **Hero:** 16 cups filling at staggered rates, uniformity number counting up beside them
- **Services:** each service card carries a single cup showing how common that fix is (full = frequent, half = occasional)
- **Reviews:** review cards sit inside grid cells, the cup behind them tinted by the service type
- **Prices:** price rows have a cup icon on the left whose fill matches the sample price band's frequency
- **Footer:** the grid completes, all 16 cups full, with the phone number centered below

Hook: `data-sw-signature="coverage-grid"`.

## Type

- **Display:** Space Grotesk (variable wght 300–700). Technical character, slightly quirky, reads as measurement not decoration. Preloaded.
- **Text:** Public Sans (variable wght 100–900). Clean, neutral, high x-height for body and UI.
- **Mono accent:** DM Mono (wght 300–500). Every PSI reading, zone number, sample price, and uniformity percentage.

Pair is unique in the library (checked against design-registry.json: Space Grotesk used once as display for landscaper-B but paired with Albert Sans; Public Sans used as text elsewhere but never with Space Grotesk).

## Palette: Lab Sheet + Gauge Blue + Fix Coral

| Role | Hex | On | Ratio | Use |
|---|---|---|---|---|
| paper | #F4F1EC | ink #1C1F23 | 14.8 | body bg, card bg |
| ink | #1C1F23 | paper #F4F1EC | 14.8 | headings, body text |
| gauge | #1B6B8A | paper #F4F1EC | 5.4 | accent words, cup fill, rules |
| gauge-deep | #0E3D52 | paper #F4F1EC | 9.2 | deep band bg |
| fix | #C4503A | paper #F4F1EC | 4.6 | fix-row highlight, signal buttons |
| muted | #6B7280 | paper #F4F1EC | 4.6 | captions, secondary text |
| rule | #D1CDC6 | ink #1C1F23 | — | dividers, grid lines |

Palette family: "Lab Sheet + Gauge Blue + Fix Coral". Unique in the registry.

## Hero family

**7 — Tool-first.** The hero IS the catch-cup audit preview: a 4×4 grid of cups that fill to different levels, with the promise beside it. With JS off it is a static sample grid plus the call line.

## Motion

- **Intro (≤ 1.2 s):** The 16 hero cups fill at slightly staggered rates (60ms apart), then the uniformity number counts up beside them. H1 line-mask reveals in parallel. Skippable, never blocks reading.
- **Scroll story 1 (desktop ≥ 640px, pinned):** An audit report page whose rows tick from "found" → "priced" → "fixed" as you scroll. Height: `calc(3 * 55svh + 100svh)`. Phone: stacked cards with clip reveal.
- **Scroll story 2:** The coverage grid in the margin fills cup-by-cup as sections enter view, driven by `--sw-p`.
- **Entrance patterns:** Text rises (opacity 0→1, translateY 24px→0, 500ms, 85% viewport). Images unclip (`clip-path: inset(0 0 100% 0)` → `inset(0)`).
- **Hover:** Hairline under items grows `scaleX(0→1)` from left, 200ms. One language everywhere.
- **Reduced motion:** All cups shown full statically. No pin. Content fully visible.

## Tools

1. **Catch-cup audit preview** (hero tool). Inputs: lawn size band, zones, sun/shade. Output: what an audit measures, sample report preview, sample audit price. Handoff: "Book an audit" button → form with service pre-selected.
2. **Bill-spike checker.** Inputs: last normal bill, this bill, season. Output: leak vs summer watering verdict + 3-minute meter test instructions. Handoff: "Check for a leak" → form.
3. **Controller age check.** Inputs: pick controller look (dial / buttons / app). Output: what it can/cannot do, sample upgrade price. Handoff: "Price a controller" → form.
4. **ZIP checker** (kit module). Checks against `biz.zips`.
5. **Multi-step quote form** (kit module). 4 steps, honest thank-you.

## Voice

Three sentences in the site's voice:
- "We set sixteen cups on your lawn and let the sprinklers run. The numbers tell us where the water goes."
- "Every fix is one line: zone, part, price. You say yes to the ones you want."
- "Your controller should be set from measurements, not guesses."

Five words it never uses: guaranteed, eco-friendly, award-winning, free estimate, best.