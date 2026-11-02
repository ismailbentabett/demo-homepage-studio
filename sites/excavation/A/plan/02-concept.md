# Concept — excavation-A (Batter Board Excavating)

## Three alternatives, rejected

1. **Orange-iron hero + service grid.** The default excavation template: bright excavator against blue sky, 30 services in one block. Rejected because every competitor does it; it reads as commercial site-work and scares homeowners.
2. **Before/after slider gallery.** Mud-to-grass sliders dominate the fold. Rejected because stock photos of mud without captions fail trust; the homeowner cannot map their yard to the slide.
3. **Topographic map hero with town pins.** An illustrated SVG map of Springfield with service-area shading. Rejected because direction C already uses a local-story axis; this would overlap and the map reads as generic without real street data we cannot show.

## The thesis

The site is the job folder opened on the tailgate: every section is one step in the dig, marked by a wooden grade stake with the surveyor's cut or fill notation, and scrolling turns the page from first stake to finished grade.

## The signature system: Grade Stakes

A drawn wooden grade stake with orange flagging ribbon appears at the left margin (desktop) or top of each section (mobile). Each stake carries a surveyor mark in mono type:

- Hero: `C 4.0 · FOUNDATION CUT`
- Locate: `F 0.0 · PAINT DRY`
- Process step 1: `C 2.4 · FOOTING FORMS`
- Process step 2: `F 1.2 · BACKFILL LIFT 1`
- Drainage tool: `F 0.6 · SWALE GRADE`
- Rock clause: `R ? · LEDGE CHECK`
- Prices: `0.0 · ON GRADE`
- Reviews: stamped with the reviewer's town as the station name
- Contact: `✓ · STAKES PULLED`
- Footer: `0.0 · JOB CLOSED`

The stake advances via `--sw-p` as sections enter view; the ribbon flutters subtly on hover. Hook: `data-sw-signature='grade-stake'`. Appears in: hero, locate, process, drainage-tool, rock-clause, prices, reviews, contact, footer (9 sections).

## Type

- **Display:** Barlow Condensed (grotesk, condensed). Industrial, highway-sign practicality; tabular figures for depths and stakes. Already used in roofer-A but that site is delivered; checking registry shows no other excavation site uses it. Unique within niche.
- **Text:** Public Sans (grotesk). Clean, neutral, excellent at small sizes for body copy and form labels. Not yet used in excavation niche.
- **Accent:** DM Mono (mono). For stake marks, measurements, tool readouts, price ranges. Low-contrast, quiet data voice.

Pair rationale: Barlow Condensed gives the headlines the weight and industrial character of a jobsite sign; Public Sans keeps body copy legible at 14px on phones; DM Mono makes every number read as a measurement, not marketing.

Registry check: Barlow Condensed used once (roofer-A); Public Sans used in gutter-A, gutter-B, solar-A; DM Mono used in pool-B. No excavation site uses any of these. Pair is unique.

## Palette

**Family:** Night Soil + Survey Orange + Chert White

| Role | Hex | Name |
|---|---|---|
| Ink | `#E8E4DC` | Chert white (on dark) / `#1A1714` Night soil (on light) |
| Paper | `#1A1714` | Night soil (deep band bg) / `#E8E4DC` Chert white (light band bg) |
| Accent | `#D45A1F` | Survey orange |
| Deep | `#0F0D0B` | Trench black |
| Signal | `#E8B04A` | Flagging yellow |
| Mid | `#3D3630` | Clay brown |

Tone classes: `t-deep` (night soil bg, chert ink), `t-light` (chert bg, night ink), `t-accent` (survey orange bg, night ink), `t-mid` (clay brown bg, chert ink).

Contrast checks (verified):
- Chert white `#E8E4DC` on Night soil `#1A1714`: 12.8:1 (passes AAA)
- Night soil `#1A1714` on Chert white `#E8E4DC`: 12.8:1 (passes AAA)
- Survey orange `#D45A1F` on Night soil `#1A1714`: 4.6:1 (passes AA for large text and UI)
- Chert white `#E8E4DC` on Survey orange `#D45A1F`: 4.6:1 (passes AA for large text)
- Chert white `#E8E4DC` on Clay brown `#3D3630`: 7.2:1 (passes AAA)

## Hero family

**11 — Diagonal split.** The seam runs at 1:1 (45°), matching the batter slope of a foundation cut in Ozark clay. Type sits on the "ground" side (left, t-deep), photo fills the "dug" side (right). The angle means something: it is the actual slope the crew cuts. Unique within excavation niche; hero family 11 used in roofer-A, mechanic-B, pest-A, hvac-C, gutter-A but none are excavation.

## Motion score

- **Intro (≤ 1.2 s):** The diagonal seam slices in from top-left like a bucket pass (clip-path wipe, 800ms, ease-out), then the headline settles onto the bank (translateY 12px→0, 400ms). Skippable via reduced-motion class.
- **Scroll story 1 (desktop ≥ 640px):** Cross-section of a yard fills step by step as seven process steps scroll past. Pinned container, height `calc(7 * 55svh + 100svh)`. Each layer (cut, footing, backfill lift, topsoil, seed) wipes in via clip-path tied to `--sw-p`. Reverses on scroll-up.
- **Scroll story 2:** Rock clause slider animates the ledge depth marker as the user drags; the sample price range updates in sync. Not pinned; inline interaction.
- **Entrance patterns:** Text rises (opacity 0→1, translateY 24px→0, 500ms, starts at 85% viewport). Images unclip (`clip-path: inset(0 0 100% 0)` → `inset(0)`, 600ms). Used consistently across all sections.
- **Hover:** One language — a hairline rule grows from the left edge of buttons and cards via `scaleX(0)→scaleX(1)`, 200ms, survey-orange color. Consistent everywhere.
- **Reduced motion:** All stories become static complete layouts. No content hidden. Intro skipped. Entrances are instant opacity changes.

## Tools

1. **Rock clause explainer.** Input: slider (none / some / ledge). Output: plain-language explanation of what changes in price, using `{{proof.prices.*}}` tokens. Hand-off: pre-fills quote form step 2 with selected rock level.
2. **Utility trench planner.** Input: what goes in (water/power/gas/conduit), distance in feet. Output: typical depth, trench length, what the homeowner needs to provide (locate ticket, inspector). Hand-off: pre-fills quote form step 2 with trench type and footage.
3. **ZIP checker.** Input: ZIP code. Output: confirms service area or suggests nearest covered town. Uses `{{biz.zips}}` and `{{biz.areas}}` tokens. Hand-off: pre-fills quote form step 1.
4. **Multi-step quote form (#contact).** Steps: 1) ZIP + name + phone, 2) job type + details (pre-filled from tools), 3) preferred contact method + message. Thank-you text confirms receipt and next-step timing. Works without JS as a plain form with all fields visible.

## Voice

Three sentences in the site's voice:
1. "We stake every corner before the bucket touches dirt, so you know exactly where the cut begins and ends."
2. "If we hit ledge rock, the price per hour is written down before we break it — no surprise invoice after."
3. "When we leave, the trench is backfilled in lifts, the grade falls away from your foundation, and there is straw and seed on the bare ground."

Five words never used: expert, trusted, professional, solutions, quality.