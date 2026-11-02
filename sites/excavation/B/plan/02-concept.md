# Concept — excavation-B (Rod Reading Excavation)

## Three rejected alternatives
1. **Field-book scan.** Every section looks like a scanned notebook page with handwritten notes. Rejected: reads as a prop, not a tool; fails accessibility; another niche already uses paper texture as the lead.
2. **Topo-map hero.** A contour map of NW Arkansas with pins. Rejected: direction C already uses a map/area-led hero family; too close to sibling.
3. **Machine spec sheet.** Hero is a spec card for the mini-excavator. Rejected: scares homeowners; brief §4 explicitly bans equipment-brand credentials.

## Thesis
The site is a surveyor's field book rendered as a live instrument: every section is a rod reading taken off a laser level, and the visitor's own numbers (from the calculator) sit beside our sample ranges so the call is a verification, not a discovery.

## Signature system — the rod reading
A 2px laser-red horizontal rule (`--sw-laser`) crosses the full width of every section at the header baseline. Each section header carries a monospace reading pill ("4.62 ft · driveway crown") aligned to that rule. On scroll, the rule wipes in via clip-path driven by `--sw-p`, and the reading ticks up from 0.00 to its value. The footer closes with "benchmark 0.00 · call to check". Hook: `data-sw-signature="rod-reading"`. Appears in: hero, services, process, tools, proof, contact, footer.

## Type
- Display: **Space Grotesk** (quirky technical grotesk, variable weight 300-700). Used for h1-h3 and button labels.
- Text: **Outfit** (clean geometric sans, variable 100-900). Body, captions, form labels.
- Accent/mono: **DM Mono** (low-contrast mono, 300-500). Every reading, yard count, range, ZIP, timestamp.
Pair rationale: Space Grotesk's ink-trap quirks signal "instrument", Outfit stays neutral for long reads, DM Mono makes every number feel measured. All three are OFL and present in `data/fonts-catalog.json`. Unique in the library for this combination.

## Palette — Graphite Field Book + Laser Red + Gravel Bone
| Role | Hex | Use |
|---|---|---|
| Ink | `#1C1F23` | Body text on light, headings on light |
| Paper | `#F4F1EB` | Page background, card bg |
| Deep band | `#1A1D21` | Dark sections (process, trust) |
| Accent / laser | `#C8372D` | Rod-reading rule, CTAs, focus outline |
| Signal / gravel | `#B8A992` | Mid-tone band, caption bg |
| Muted ink | `#5A5E66` | Captions, secondary text |
| White | `#FFFFFF` | Cards on deep, form inputs |

Contrast checks (ink on paper ≥ 4.5:1, accent on deep ≥ 4.5:1): verified via `node tools/contrast.mjs`. Palette family name unique in registry.

## Hero family — 7 (tool-first)
The dirt calculator IS the hero. Left half: h1 + guarantee line + ZIP checker. Right half: the calculator form with length/width/depth presets and a live output panel showing bank yards, loose yards and truckloads. The laser-red rule runs across both halves at the reading the tool returns on default values. Works with JS off as a static explanation + call button.

## Motion
- Intro (≤ 1.2 s): laser rule sweeps left-to-right across the hero once; calculator digits tick to their default. Skippable via reduced-motion.
- Scroll story 1: pinned grade rod on desktop right margin slides to each section's reading as you scroll; on mobile, stacked cards with clip reveal.
- Scroll story 2: process cross-section fills layer by layer (cut → footing → backfill lifts → topsoil → seed) synced to scroll.
- Entrances: text rises (opacity + translateY, 500ms, 85% viewport); images unclip (`clip-path: inset(0 0 100% 0)` → `inset(0)`).
- Hover: hairline grows from left via `scaleX(0→1)` on buttons and cards.
- Reduced motion: all stories become static complete layouts; no hidden content.

## Tools
1. **Dirt calculator** (hero). Inputs: L × W × D or preset (basement/driveway/pad). Output: bank yd³, loose yd³, ~truckloads. Handoff: "Bring these numbers" + Price-it prefill.
2. **Gravel driveway estimator**. Inputs: L, W, new/re-top. Output: tons base + top, loads, sample range from `proof.prices.0`. Handoff: form prefill.
3. **Drainage picker**. Inputs: where water stands, soil feel, gutters y/n. Output: likely fix + sample range from `proof.prices.3` or `.4`. Handoff: form prefill.
4. **ZIP checker**. Against `biz.zips`. Answers in aria-live; yes → form with ZIP prefilled.
5. **Multi-step quote form**. 4 steps, honeypot, honest thank-you.

## Voice
- "We measure twice so the bill matches the bid."
- "Your pad will be flat within half an inch, checked with a laser before the pour."
- "If we hit ledge, the rock clause kicks in at the rate written on your sheet."
Never use: expert, trusted, affordable, quality, solutions.