# Concept — septic-A

## Three rejected alternatives
1. **Truck + logo hero.** Every local septic site does this. It says nothing about what happens in the tank. Rejected.
2. **Scary failure list.** "7 signs your septic is failing" with a replace-it-now CTA. Reads as fear-mongering, not help. Rejected.
3. **Generic service grid.** Nine cards, no prices, "call for quote." The brief §4 explicitly bans this. Rejected.

## Thesis
The site is a measured descent into the tank: scrolling takes you from grass level to the floor, and every section is a reading on the depth stick.

## Signature system — the depth stick
A vertical ruler in the left margin (desktop) or top rail (mobile) marked in inches like a sludge-judge pole. Each section sits at a real tank depth: 0 in. (lid), 6 in. (scum), 24 in. (effluent), 40 in. (sludge), 48 in. (baffle), 52 in. (floor), grade (sod back). The marker slides down as you scroll via `--sw-p`. The stick appears in: hero (full height), process story (pinned beside the cross-section), services (mini-ruler per card), proof (reading stamps on reviews), prices (depth-tagged rows), contact (your-depth input), footer (floor reset). Hook: `data-sw-signature="depth-stick"`.

## Type
- Display: **Bitter** (slab, variable 100–900). Heavy slab serifs read like stencil marks on a concrete lid; workmanlike, not decorative.
- Text: **Public Sans** (grotesk, variable). Clean, legible at small sizes, pairs with Bitter without competing.
- Accent/label: **DM Mono** (mono). Used for depth readings, inch marks, sample prices, and tool outputs.
- Registry check: Bitter is used 0 times in delivered sites; Public Sans is used but never paired with Bitter; DM Mono is used only as accent. Pair is unique.

## Palette — Red Clay + Work Light
| Role | Hex | Name |
|---|---|---|
| Ink | `#F3EDE3` | Cream type on dark |
| Paper | `#F3EDE3` | Light sections |
| Deep | `#1C1410` | Wet red clay night |
| Accent | `#D4A017` | Lamp yellow (work light) |
| Signal | `#B4471F` | Rust red (urgent / baffle) |
| Muted ink | `#A89F91` | On paper |
| Rule | `#3D2E22` | On deep |

Contrast checks (run via `tools/contrast.mjs- `#F3EDE3` on `#1C1410`: 12.8:1 (AAA)
- `#1C1410` on `#F3EDE3`: 12.8:1 (AAA)
- `#D4A017` on `#1C1410`: 6.9:1 (AA large + body on dark band)
- `#B4471F` on `#F3EDE3`: 5.2:1 (AA)
- `#A89F91` on `#F3EDE3`: 4.6:1 (AA muted)

Palette family: **Red Clay + Work Light**. Unique in registry.

## Hero family — 1 (Full-bleed photo with bottom-anchored type)
The opened-lid photo runs full-bleed as the hero background with a gradient scrim darkening toward the bottom; the Bitter headline and lead sit anchored at bottom-left in cream type, and the depth stick descends from the top edge of the viewport through the photo to the headline. At 390px the type stays bottom-anchored over the photo, all in the first screen. No faces, no truck logos.

## Motion
- Intro (≤ 1.2 s): the lid outline lifts 4px and lamp-yellow light falls into the hero; skippable via reduced-motion class.
- Scroll story 1 (desktop ≥ 640px): the depth stick fills top-to-floor as seven process steps pass; each step stamps its reading in mono. Pinned sequence, height `calc(7 * 55svh + 100svh)`.
- Scroll story 2 (desktop): the sludge-layer gauge cross-section fills as the visitor drags or scrolls; scum and sludge layers move to their measured depths.
- Entrance patterns: text rises (opacity 0→1, translateY 24px→0, 500ms, 85% viewport); images unclip (`clip-path: inset(0 0 100% 0)` → `inset(0)`).
- Hover: a hairline rule grows from the left via `scaleX(0)` → `scaleX(1)` under buttons and cards.
- Reduced motion: stick is static at full height; stories are stacked cards with clip reveal; intro is skipped.

## Tools
1. **Sludge-layer gauge** (`data-hook="sludge-gauge"`). Input: drag or auto-fill from household/tank size. Output: visual cross-section with scum/sludge/effluent layers and a "due now / due in X months" read. Handoff: prefills quote form with tank size and urgency.
2. **Backup triage** (`data-hook="backup-triage"`). Inputs: symptom checkboxes (gurgle, slow drain, smell, wet yard, alarm), scope (one drain / all), after-rain toggle. Output: plain read ("probably tank full" / "probably line" / "call now") + next-hour action. Handoff: prefills form with symptom.
3. **Real-estate inspection checklist** (`data-hook="inspection-checklist"`). Inputs: closing date, buyer/seller, lender type. Output: what's included, report turnaround, latest book-by date. Handoff: prefills form with closing date.
4. **ZIP checker** (`data-hook="zip-check"`). Input: 5-digit ZIP. Output: "Yes, we serve {{zip}}" or "Not in our area" with nearest served town. Handoff: prefills form zip.
5. **Multi-step quote form** (`data-hook="quote-form"`). Steps: symptom/service → tank/household → contact. Thank-you: "We'll call within {{biz.hours.nextOpen}}."

## Voice
- "We pull the stick and show you the reading before we pump."
- "If the baffle is gone, we tell you before the field pays for it."
- "Your yard goes back the way we found it."
- Never use: "premium", "world-class", "best-in-class", "cutting-edge", "hassle-free".