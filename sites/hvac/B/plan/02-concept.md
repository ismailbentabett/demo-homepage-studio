# Concept — hvac-B (Wetbulb Heating & Cooling)

## Three obvious concepts, rejected

1. **"Your Comfort Zone" with smiling family.** A stock photo of a relaxed family on a couch with a thermostat overlay and "Comfort Guaranteed" headline. Rejected: this is the #1 cliché in brief §4; every Houston competitor does it; it says nothing about humidity or measurement.
2. **"Beat the Houston Heat" coupon wall.** Flashing "$49 Tune-Up!!!" badges, countdown timers, brand logos, and a wrapped-van hero. Rejected: brief §4 lists this as the second-most-common competitor move; it attracts tire-kickers and signals low-trust discounting, not diagnostic expertise.
3. **"Psychrometric Chart Explainer" static infographic.** A big labeled chart with arrows explaining dry-bulb, wet-bulb, dew point and relative humidity, surrounded by textbook copy. Rejected: takes the brief's seed literally without making it interactive; reads like an engineering lecture, not a sales page; no signature system, just one diagram.

## The thesis

The page is a field hygrometer: every section plots one real reading on a simplified comfort chart, and the signature dot travels from "sticky" to "inside the band" as you scroll toward the booking form.

## The signature system — Comfort Chart Dot

A CSS-drawn simplified psychrometric chart (curved comfort band shaded in teal, axes labelled Temp °F / Humidity %) appears as a sticky margin element on desktop and as a compact inline widget on mobile. A single coral dot represents "your house right now" and moves across the chart on scroll via `--sw-p`. Each section adds a plotted reading chip beside its content:

- **Hero:** the calculator sets the initial dot position based on visitor inputs; headline updates to name the result ("Dew point 68°F — outside the comfort band").
- **Story (Humidity Check):** a sample bedroom reading chip (72°F / 65% RH / DP 64°F) plots inside the band after the fix; the dot animates from its pre-fix position.
- **Proof / Reviews:** each review carries a mini chip showing the before/after reading that the reviewer mentions; chips stack vertically beside the chart.
- **Services cards:** each service card has a small chart icon with a dot at the typical outcome position (e.g., coil cleaning → lower humidity; dehumidifier → deep inside band).
- **Footer:** the dot settles permanently inside the comfort band; the chart shrinks to a badge beside the disclaimer.

Hook: `data-sw-signature="comfort-chart"`. The chart is drawn once in CSS/SVG and reused via the primitive `.wb-chart` and `.wb-dot`.

## Type

- **Display:** Chivo (grotesk, variable wght). Bold geometric grotesk with enough weight to anchor chart headings and tool labels; reads like instrument engraving rather than marketing copy. Never used in hvac niche; ≤ 3 uses in library.
- **Text:** Figtree (grotesk, variable wght). Friendly, open body face with clear tabular figures for readings; lighter weight contrasts cleanly with Chivo's display mass. Never paired with Chivo in the registry.
- **Accent:** DM Mono (mono). For reading chips, sample labels, axis labels and tool outputs; reinforces the instrument aesthetic.

Why the pair suits the thesis: Chivo reads like engraved instrument lettering; Figtree is the clean printed manual beneath it; DM Mono is the digital readout. Together they say "measured, noted, explained."

## Palette — Gulf Dew + Graphite + Coral Signal

Family name: **"Gulf Dew + Graphite + Coral"**

| Role | Hex | Name |
|------|-----|------|
| Paper | #F4F1EC | Warm paper |
| Ink | #2B2D2E | Graphite |
| Accent | #0E5C52 | Deep teal |
| Deep | #1B2F2C | Deep bayou |
| Signal | #A83A25 | Burnt coral |
| Mid | #C8C2B8 | Warm mid |
| Rule | #A8A29A | Warm rule |

Contrast table (verified via `node tools/contrast.mjs`):

| Pair | Ratio | Pass? | Use |
|------|-------|-------|-----|
| Ink #2B2D2E on Paper #F4F1EC | 12.28:1 | AAA | Body text, headings |
| Ink #2B2D2E on Mid #C8C2B8 | 7.81:1 | AAA | Muted text on mid bg |
| Accent #0E5C52 on Paper #F4F1EC | 6.97:1 | AA | Buttons, links, chart band on light |
| Paper #F4F1EC on Accent #0E5C52 | 6.97:1 | AA | Button text on accent bg |
| Paper #F4F1EC on Deep #1B2F2C | 12.51:1 | AAA | Text on deep sections |
| Signal #A83A25 on Paper #F4F1EC | 5.65:1 | AA | Alert/out-of-band dot, warning chips on light |
| Signal on Deep: use Paper #F4F1EC on Deep #1B2F2C | 12.51:1 | AAA | Signal elements on deep bg rendered as paper-colored text/icons |
| Focus ring Accent #0E5C52 on Paper | 6.97:1 | ≥3 | Focus visible on light |
| Focus ring Paper #F4F1EC on Deep | 12.51:1 | ≥3 | Focus visible on dark |

All body pairs ≥ 4.5; all large/accent pairs ≥ 3; focus ring ≥ 3 on every tone. Signal color is used only on paper backgrounds; on deep backgrounds, signal elements use paper-colored text or icons instead.

## Hero family

**Family 1 — Video with scrim + tool overlay.** A slow-loop humid-Gulf video (condensation sliding down glass or post-rain neighborhood) fills the hero behind a deep-teal scrim at 70% opacity; the dew point calculator and headline sit centered over the scrim as the primary interactive layer. This breaks the family-1 cliché (usually a generic stock video with white text and a static CTA) by replacing the static CTA with a working instrument and using the scrim color from the palette to tie video to chart. Unique in the hvac niche (hvac-A uses family 12). ≤ 3 uses in library (currently 2).

## Motion score

- **Intro (≤ 1.2 s, skippable):** The chart curves draw in from bottom-left via SVG stroke-dashoffset over 900ms; then the dot drops from top-center to the default reading position (75°F / 55% RH) with a soft ease-out settle. Skippable via `prefers-reduced-motion`: chart renders fully drawn, dot appears at final position instantly.
- **Scroll story 1 (wipe):** As each section enters view, the dot wipes along a path to its new plotted position over 900ms using `--ease-io`; the previous position fades to a ghost dot at 20% opacity.
- **Scroll story 2 (count):** Reading chips count up their numeric values (temp, RH, dew point) over 600ms with tabular figures when they enter the viewport.
- **Hover language:** One pattern — chart dot scales to 1.3× and shows a tooltip with the reading label; service cards lift 2px with a subtle shadow. No parallax, no spin.
- **Reduced motion:** All animations disabled; chart fully rendered; dot at final position; reading chips show final values immediately; hover effects replaced with outline.

## Tools

1. **Dew Point & Comfort Calculator (hero).** Inputs: indoor temp (°F, slider 60-90), indoor RH (%, slider 30-80). Output: dew point value, comfort-band status ("Inside band" / "Too humid" / "Too dry"), plotted dot. Kit module: custom `dew-point` (pure math, no API). Hand-off: "Book a humidity check with these readings" button prefills temp/RH into quote form step 1.
2. **Size Sanity Check.** Inputs: sq ft, ceiling height, sun exposure, insulation era. Output: broad tonnage band + "Only a Manual J sizes your system" note. Kit module: `estimator` (reconfigured). Hand-off: "Book a load calculation" prefills size estimate.
3. **Repair or Replace Sorter.** Inputs: system age, repair quote band, refrigerant type, repairs in 2 years. Output: verdict + reason. Kit module: `compare`. Hand-off: "Get a second opinion" prefills sorter result.
4. **ZIP Checker.** Confirms {{biz.zips}}. Kit module: `zip`.
5. **Multi-step Quote Form (#contact).** Steps: symptom/tool result → system type → best time → contact. Kit module: `form`.

## Voice

Three sample sentences:
1. "Your thermostat says 72 but the dew point in the bedroom is 64 — that's why the sheets feel damp."
2. "We measured every room before we recommended anything; the upstairs office needed a damper, not a new unit."
3. "A bigger AC cools faster but dries worse; the load calculation told us 3.5 tons would run long enough to pull the water out."

Five words never used: comfort, solutions, guaranteed, affordable, expert.