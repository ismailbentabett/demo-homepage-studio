# gutter-B · Concept

## 1. Three obvious concepts (rejected)
- **Rain on glass.** Full-bleed rainy-window video, blue gradient, "Seattle's rain experts". Every Seattle roofer and
  gutter co. does it; it is the brief's B3 seed taken literally; hero family 1 is full in the library anyway.
- **The marquee of numbers.** Brief seed: centered statement over a scrolling marquee "1,000 sq ft · 1 in · 623 gal".
  Hero family 10 is at 6/6 in the library (blocked), and a marquee of numbers is a template move (SaaS logo strip).
- **The tube gauge.** A plastic rain-gauge tube in the margin. Too close to pool-B "Gauge Scale", flooring-C "Tide Line
  Gauge", landscaper-A "Depth gauge" (all registry); it reads as a progress bar with a skin.

## 2. Thesis
**The page is a lab ledger of one roof's water: a glass measuring cylinder fills as you read, and every section
pours its gallons into it, so the homeowner watches the same arithmetic Gallonworks writes on the estimate.**

## 3. Signature system: Rain Cylinder Ledger (`data-sw-signature="cylinder"`)
Primitive: a graduated cylinder (SVG, 2px rain-gray outline, 10 mono tick marks, yellow `--signal` fill driven by
`--sw-p` 0→1) + a **ledger line** (mono row: `label ······ 1,246 gal`, dotted leader, right-aligned yellow numeral).
- **Hero:** the filmstrip frames are cylinders at different fills, each with its ledger line; the first reads
  `1,000 sq ft × 1 in ······ 623 gal (example)` and fills on load.
- **Story "Where 623 gallons go"** (pinned ≥ 640px, 4 steps): the cylinder empties into 1 → 2 drawn downspouts;
  ledger rows count per drop (`one 2x3 drop ······ 623 gal` → `two 3x4 drops ······ 312 gal each`).
  Variation: cylinder splits in two.
- **Tools:** the runoff calculator writes its answer into a big cylinder (fill = gallons / 3,000 cap, tick labels
  re-number); size check appends a ledger row "5-inch usually enough / 6-inch safer".
- **Proof:** each review card carries a mini-cylinder chip (12×28px) + ledger tag with the service and "Sample"
  (no invented gallon numbers on reviews: the tag shows the service, the cylinder level is decorative = star rating 4/5 vs 5/5).
- **Prices:** the sample pricing band is a ledger (dotted leaders, mono ranges from facts.proof.prices).
- **Footer:** the page cylinder tops out, the overflow lip spills into a drawn rain barrel outline; ledger total line
  "This page: 1 in of rain on 1,000 sq ft. Your roof: [Price my roof]".
Margin cylinder (desktop ≥ 1024px): fixed in the left 72px margin column, fills with page scroll; 390: a 4px yellow
fill line under the header instead.

## 4. Type
- Display: **Martian Mono** (wdth 87.5, wght 300 for h1, 500 for numerals). Never used in the library (0/6).
- Text: **Lexend** (wght 300-600), 0 uses as text; pair unique.
- Accent: none (the display face is the mono). Why: an instrument-maker's mono makes the numbers the hero; Lexend's
  open, even forms keep long explanations calm for 60-80-year-old readers.

## 5. Palette · family "Wet Cedar Evergreen + Rain Glass + Cylinder Yellow" (color-led)
ink #13211c · paper #eef2ee · mid #dfe6e1 · deep #0e3a2d (the evergreen field) · deeper #0a2a21 · accent (moss, text
on light) #1f6f55 · signal (yellow numerals/buttons on dark) #f3c623 · muted-light #5a6b65 · muted-mid #52625c ·
muted-dark #c9d6d0 · rule-dark #8fa39b.

| Pair | Ratio | Use |
|---|---|---|
| #13211c on #eef2ee | 14.71 | body on paper |
| #5a6b65 on #eef2ee | 4.98 | muted on paper |
| #1f6f55 on #eef2ee | 5.36 | links/labels on paper |
| #0e3a2d on #eef2ee | 11.17 | headings, focus ring on paper |
| #13211c on #dfe6e1 | 13.10 | body on mid |
| #52625c on #dfe6e1 | 5.07 | muted on mid (#5a6b65 FAILS 4.44: never on mid) |
| #1f6f55 on #dfe6e1 | 4.77 | links on mid |
| #0e3a2d on #dfe6e1 | 9.95 | focus on mid |
| #ffffff on #0e3a2d | 12.63 | body on deep |
| #c9d6d0 on #0e3a2d | 8.43 | muted on deep |
| #f3c623 on #0e3a2d | 7.77 | numerals, focus ring on deep |
| #8fa39b on #0e3a2d | 4.74 | rules, small labels on deep |
| #ffffff on #0a2a21 | 15.37 | body on deeper (footer) |
| #f3c623 on #0a2a21 | 9.45 | numerals/focus on deeper |
| #ffffff on #13211c | 16.64 · #f3c623 on #13211c 10.23 · #a9bab3 on #13211c 8.21 | ink band |
| #13211c on #f3c623 | 10.23 | text on yellow button / yellow band |
| #0e3a2d on #f3c623 | 7.77 | focus on yellow |
| #ffffff on #1f6f55 | 6.06 | white on moss button (paper sections) |
| **#f3c623 on #eef2ee** | **1.43 FAIL** | yellow on paper: fills/shapes only (cylinder fill with ink outline), never text |
| **#8fa39b on #eef2ee** | **2.35 FAIL** | rule-dark never on paper; paper rules use #13211c at 18% |

## 6. Hero family 9 (horizontal filmstrip), 5/6 in library, 0 in niche
(Rejected first: family 15 map — gutter-C reserved it and it hit 6/6; family 10 marquee — 6/6. Only 9 was open.)
Hero = deep evergreen field. Top: kicker + h1 statement (left-aligned, 2 lines at 1440) + proof ledger line +
Call / Price my roof + inline ZIP checker. Under it, the filmstrip (≈ 44svh tall, 4:5 frames, 12px gaps, drifts
left 24px/s, pauses on hover/focus/`prefers-reduced-motion`, a pause button 48px): frames alternate **drawn sample
cylinders** (each a scenario from facts/brief math: "1,000 sq ft × 1 in · 623 gal (example)", "5-inch vs 6-inch",
"one 2x3 drop vs two 3x4", "micro-mesh under fir · hose-tested") with **one photo frame: hero-B3** (raindrops on the
rail, duotone). Track duplicated with `aria-hidden` copy for the loop; the photo appears in the visible set only once
(the duplicate uses a drawn frame in its place so the same photo never appears twice).
Cliché broken: a filmstrip is normally a photo carousel; here the frames are measurements, so the strip reads as a
lab bench of specimens, and only one frame is a photograph.

## 7. Motion score
- **Intro (≤ 1.1 s, never blocks):** h1 line mask rises (520ms, 60ms stagger); first filmstrip cylinder fills
  0 → "1 in" tick (700ms) while its numeral counts 0 → 623; then the strip starts drifting. DOM holds final state.
- **Story 1 "Where 623 gallons go" (verb: pour):** pinned ≥ 640px, 4 steps × 55svh; cylinder level drops as
  downspout pipes draw and ledger rows count per drop. < 640: 4 stacked cards with clip reveal.
- **Story 2 (verb: count):** the margin cylinder fills with page progress; each section's ledger numeral counts up
  once when 40% in view.
- **Hover (one language):** a 2px yellow/moss fill rises from the bottom of buttons/cards (scaleY 0→1, 200ms) — water level.
- **Reduced motion:** cylinders shown at their final fill, all ledger numerals final, story = 4-column static diagram,
  map drawn, no count-up.

## 8. Tools
1. **Runoff calculator** (`estimator`): inputs roof footprint sq ft (default 1,000), rain inches (typed, default 1).
   Output gallons = sqft × in × 0.623, written into the big cylinder + "about N downspouts' worth at ~30-40 ft each"
   NOT claimed; only gallons. Hand-off: "Size gutters for this roof" → form prefill `service=Gutter sizing and
   replacement`, message "Roof ~{sqft} sq ft, {gal} gal per inch".
2. **Gutter size check** (`estimator`): roof side area, pitch low/med/steep, rain intensity low/med/high (visitor
   picks). Output "5-inch usually enough" / "6-inch is the safer choice" + one-line reason. Prefill service + size.
3. **Guard compare** (`compare` / `tabs`): screen · micro-mesh · reverse curve under fir/maple/moss; what stops,
   what slips, upkeep; sample range "$14–$30 per linear ft" for micro-mesh only (facts). Prefill `service=Gutter guards`.
4. **ZIP checker** (`zip`) docked in the hero map, against facts.biz.zips.
5. **Quote form** (`form`) #contact: name, phone, ZIP, service (8 from facts), message, optional photo note; text alt.

## 9. Voice
- "One inch of rain on 1,000 square feet is about 623 gallons. Your gutters have to carry every one."
- "We size the gutter to the water, then we flow-test each downspout before we leave."
- "If the 5-inch is enough for your garage, we will say so."
Never: "hassle-free", "never clean again", "lifetime", "experts", "state-of-the-art".
