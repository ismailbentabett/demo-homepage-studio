# Concept — pool-B (Clear Reading Pool Co.)

## Three obvious concepts, rejected
1. **"Crystal Clear Orlando Pools."** Hero is a bright blue pool photo with a "Get a Quote" button. Rejected: every competitor does this; brief §4 lists it as cliché #1 and #5. No proof, no price, no tool.
2. **"Your Pool's Chemistry Lab."** Dark lab-coat aesthetic with beaker icons and periodic-table styling. Rejected: takes the brief's seed ("chemistry with a swimsuit") literally; reads as a science classroom, not a service company. Template-y icon grid.
3. **"Seven-Point Water Test Dashboard."** A static infographic of seven gauges frozen at sample values. Rejected: looks like a SaaS dashboard template; no interactivity; the homeowner can't see *their* reading. Competitor would do it as a PDF download.

## The thesis
The page is a test strip: every section is a pad that reads a value against its ideal band, and the signature is the gauge scale that fills as you scroll.

## The signature system: Gauge Scale + Test Pad
A horizontal scale with a shaded ideal band and a marker showing where "this" sits. Appears in ≥ 4 sections with variation:
- **Hero:** Centered statement "Read your water before you touch it" above a photo marquee of test-strip close-ups; six pads with scales sit below as the first interactive element. Marker slides into the ideal band on intro.
- **Services:** Each service card has a mini-gauge showing the relevant reading range (e.g., pH 7.2–7.8 for water balance, pressure 15–25 psi for filters). Marker animates to center on scroll entry.
- **Proof / Reviews:** Review stars sit on a 0–5 gauge scale; sample prices sit on a from–to gauge with the quoted range shaded. Each review's star rating is the marker position.
- **Footer:** A single wide gauge spans the footer width, labeled "Readings in range this week: 94%" with the marker at 94%. Acts as the closing proof line.

Section dividers are blank test-pad rectangles that fill with their assigned color (yellow, coral, violet, aqua) as they enter the viewport via clip-path wipe.
CSS primitive: `.gauge-scale` (track + band + marker), `.test-pad` (rectangle with fill color set by `--pad-color`). Hook: `data-sw-signature="gauge-scale"`.

## Type
- **Display:** DM Mono (mono class). Used for h1, section headings, and all numeric labels. Technical, data-forward, tabular figures for readings.
- **Text:** Figtree (grotesk class). Clean, friendly body text for explanations and microcopy.
- **Accent:** null (DM Mono serves double duty as accent for labels/units).

Why: DM Mono's tabular numerals make every reading align vertically; Figtree's warmth prevents the page from feeling clinical. Pair is unique in the registry; neither face appears twice in the pool niche.

## Palette: Paper White + Forest Teal + Ink Navy
| Role | Hex | Name |
|------|-----|------|
| paper | #f5f3ee | Warm test-paper white |
| ink | #1a2b3c | Deep navy ink |
| accent | #2d6a4f | Forest teal |
| deep | #1a2b3c | Same as ink (deep band uses ink bg) |
| signal | #d4a03c | Amber alert (out-of-range marker) |
| mid | #e8e4db | Light warm grey |

Contrast table (verified with `tools/contrast.mjs`):
| FG | BG | Ratio | Body ≥4.5 | Large ≥3 | Notes |
|----|----|-------|-----------|----------|-------|
| #1a2b3c | #f5f3ee | 13.01:1 | pass | pass | Primary body text |
| #2d6a4f | #f5f3ee | 5.76:1 | pass | pass | Accent text on paper |
| #ffffff | #2d6a4f | 6.39:1 | pass | pass | White text on teal buttons |
| #1a2b3c | #e8e4db | 11.37:1 | pass | pass | Body on mid tone |
| #2d6a4f | #1a2b3c | 2.25:1 | FAIL | FAIL | NEVER used as text on deep; shapes/rules only |
| #d4a03c | #1a2b3c | 4.62:1 | pass | pass | Signal amber on deep (large text only) |
| #1a2b3c | #ffffff | 15.39:1 | pass | pass | Ink on white |

Focus ring: `#2d6a4f` on light/paper/mid tones; `#d4a03c` on deep backgrounds.

## Hero family: 10 — Centered Statement + Photo Marquee
Centered statement "Read your water before you touch it" (8 words) above a slow-marquee strip of test-strip and water-testing close-ups. Unique in the pool niche (pool-A uses family 1). Breaks the cliché: instead of a resort pool or underwater video, the hero is a calm data-first promise with real diagnostic imagery. Works with JS off as centered headline + static photo strip + call button.

## Motion score
- **Intro (≤1.2s):** Six test pads fade from white to their sample colors in sequence (stagger 80ms each); markers slide into ideal bands simultaneously. Skippable via `prefers-reduced-motion`; reduced motion shows completed state instantly.
- **Scroll story 1 (services):** Each service card's gauge marker glides from left edge to its position as the card enters the viewport (clip-path wipe, 600ms, ease-out). Verb: slide.
- **Scroll story 2 (proof):** Review star markers and price-range markers animate into position on entry. Section-divider test pads fill with color via clip-path wipe. Verb: fill.
- **Hover:** One language — gauge marker pulses once (scale 1.0→1.15→1.0, 200ms) when hovering any interactive gauge or card. Consistent across all sections.
- **Reduced motion:** All gauges show final state; no animation; content fully readable.

## Tools
1. **Test Strip Reader** (hero). Inputs: tap six color pads or type numeric values. Output: each reading vs. ideal band with in-range/low/high status. Kit module: `checklist` (repurposed as pad reader). Prefill: passes readings to quote form step 2.
2. **Gallons Calculator.** Inputs: length, width, average depth. Output: gallons with honest rounding. Kit module: `estimator`. Prefill: passes pool size to quote form step 1.
3. **Pump Repair or Replace.** Inputs: age, symptoms (hum/scream/leak/trips breaker), single or variable speed. Output: "likely a part" / "worth a diagnosis" / "time to replace" with sample ranges. Kit module: `compare`. Prefill: passes diagnosis to quote form step 3.
4. **ZIP Checker.** Validates service area. Kit module: `zip`. Prefill: passes ZIP to quote form step 1.
5. **Multi-step Quote Form.** Steps: ZIP + pool size → symptom/readings → contact info. Kit module: `form`. Receives prefill from all tools above.

## Voice
Three sample sentences:
1. "Your pH reads 7.9 — that's above the 7.2–7.8 band, so we'd add muriatic acid on the next visit and retest."
2. "Salt cell output tested at 1.8 ppm; the ideal band is 2.5–3.5, so cleaning the cell is the first move before replacement."
3. "Filter pressure hit 28 psi last Tuesday; the clean baseline is 18, so we pulled the cartridges and washed them same day."

Five words never used: crystal, sparkling, pristine, guaranteed, premium.