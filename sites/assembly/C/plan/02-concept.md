# assembly-C — Concept

## 1. Three obvious concepts, rejected
1. **"Flat-pack hero":** stacked boxes + hex key icon + "We build it so you don't have to." → every competitor (brief §4.1/§4.2); the hex key is the niche's clip-art.
2. **"Earthquake alarm":** seismograph line across the hero, red alerts, "Is your bookcase quake-ready?" → fear template, the brief seed taken literally; reads like an insurance ad, and a seismograph line is a one-effect signature.
3. **"Mid-century catalogue":** Eichler photo, boomerang shapes, atomic starbursts, retro script. → pastiche/template; the look sells nostalgia, not the job, and says nothing about anchoring.

## 2. Thesis
**The page is the floor plan of a San Jose Eichler, drawn around its open atrium: you walk it room by room, and every tall thing in every room gets strapped to the beam as you pass.**
(Object: the architect's floor plan. Verb: strap.)

## 3. Signature system — "Atrium Plan + Strap Tick"
Primitive A — **the plan**: a 1.5px charcoal line plan (walls as double lines, door swings as quarter arcs, the atrium as an open square with a hatched sky). Primitive B — **the strap tick**: a short mustard L-bracket (two strokes: a 10px vertical on the piece, a 6px horizontal into the wall line) with a 2px screw dot. A tick = "this is anchored".
- **Hero:** the full plan drawn under the low-pitch roofline seam; the room labels (OFFICE · KIDS · LIVING · GARAGE · YARD) are the in-page nav. Intro: roofline draws, then strap ticks drop onto the tall pieces in the plan, one by one.
- **Room headers (every service section):** each section opens with a plan "room tag" — room name in Fraunces, a dimension line (e.g. `the living room ── beam wall`) and a cropped bit of the plan showing that room, its tall piece carrying a strap tick.
- **Anchoring story (the wow):** a large SVG elevation of a bookcase + dresser + TV on a post-and-beam wall. On scroll the bookcase leans 6°, a strap draws in (DrawSVG), it snaps upright; ticks count up "3 of 3 pieces anchored". Reduced motion: upright, all straps drawn, ticks shown.
- **Proof / reviews:** each review is pinned into its room on a mini-plan (Minh → living room, Rohan → kids, Eloise → office, Bao → yard, Teodoro → garage); the card carries a strap tick as its "verified-on-site" corner (Sample label stays).
- **Tools:** tip-over check output is a little elevation with strap ticks per piece; the wall checker draws the wall section (stud / beam / glass) the mount goes into.
- **Service area:** the "site plan": the house as a small footprint in a ring of town names (areas tokens) + ZIP checker.
- **Footer:** the plan's title block — `{{biz.name}} · {{biz.city}}, {{biz.state}} · Lic. {{proof.license}} (Sample)` — with one last strap tick next to the guarantee line.
- **Corner locator:** a 72px fixed mini-plan (≥ 1024px only; inline at section tops on mobile) lights the current room (redwood fill). `data-sw-signature` on the hero plan + the locator.
Not in the registry: "Pinned Roof Plan" is a roof plan with pins; "Room Marker + Arch Frame" is a doorway frame. Ours is a floor plan as navigation + a strap glyph as the anchoring mark.

## 4. Type
- Display: **Fraunces** (opsz 9-144, wght). Soft, wonky 1970s-leaning old-style; at opsz 144 / wght 560 (no SOFT axis in our file) it reads like mid-century architecture signage and warm room names. Registry count 1, not used in this niche.
- Text: **Albert Sans** (wght). Scandinavian-modern geometric sans — the furniture-design tradition the Eichler era grew from; clean numbers for prices and hours (tabular-nums). Pair unique.
- Accent: none (labels = Albert Sans 600 caps, +0.12em tracking). Fewer files, faster LCP.

## 5. Palette — "Eichler Redwood + Olive Grove + Sun-Faded Mustard"
| Role | Hex | |
|---|---|---|
| ink (charcoal) | #231F1B | text on light |
| paper (cream) | #F3EBDD | page |
| paper-2 (sand) | #E8DCC4 | alt light band, cards |
| accent / redwood | #9A3F28 | big color fields, primary button on light, accent words on light |
| olive (mid) | #545A2E | color band |
| signal / mustard | #D9A83A | strap ticks, numbers on dark, button on dark bands |
| deep (walnut charcoal) | #2A2620 | dark band, footer |
| muted on paper | #5E564B | |

Contrast (node tools/contrast.mjs, real):
| fg | bg | ratio | use |
|---|---|---|---|
| #231F1B | #F3EBDD | 13.82 | body on paper |
| #5E564B | #F3EBDD | 6.09 | muted on paper |
| #9A3F28 | #F3EBDD | 5.69 | redwood words, links, focus on paper |
| #231F1B | #E8DCC4 | 12.05 | body on sand |
| #5E564B | #E8DCC4 | 5.31 | muted on sand |
| #9A3F28 | #E8DCC4 | 4.96 | redwood words on sand |
| #FFFFFF | #9A3F28 | 6.74 | white on primary button |
| #F3EBDD | #9A3F28 | 5.69 | cream text on redwood band (hero) |
| #E9DFC9 | #9A3F28 | 5.09 | muted on redwood |
| #D9A83A | #9A3F28 | 3.08 | **focus ring / strap ticks / large ≥24px only** on redwood, never body |
| #F3EBDD | #545A2E | 6.16 | text on olive |
| #E3D6BC | #545A2E | 5.07 | muted on olive |
| #D9A83A | #545A2E | 3.33 | **focus / ticks / large only** on olive |
| #F3EBDD | #2A2620 | 12.70 | text on deep |
| #C9BFAE | #2A2620 | 8.26 | muted on deep |
| #D9A83A | #2A2620 | 6.88 | mustard words + focus on deep |
| #231F1B | #D9A83A | 7.49 | ink on mustard button / mustard band |
| #3A3328 | #D9A83A | 5.70 | muted on mustard |
| #D9A83A | #F3EBDD | 1.84 | **FAIL — never words**; strap ticks are drawn with a 1px #231F1B keyline on light tones |
| #231F1B | #9A3F28 | 2.42 | **FAIL — never** |
| #9A3F28 | #2A2620 | 2.23 | **FAIL — redwood never on deep** |

## 6. Hero family — 11, diagonal split
Brief's family for C. Library count 4 (cap of 3 unmeetable library-wide, orchestrator said proceed); none in this niche.
Cliché broken: the seam is not a decorative slash — it's the **3:12 low-pitch Eichler gable** (≈14°), drawn as a roofline with an exposed beam end poking past it, and the floor plan continues *under* the photo as a line drawing so photo and plan read as one house. Redwood field left/top with h1; photo right/below. On 390: the gable seam runs horizontally-pitched between h1 block (top) and photo (bottom 38svh).

## 7. Motion score
- **Intro (≤ 1.1 s, never blocks):** the roofline stroke draws left→right (500ms), photo unclips under it (`clip-path` following the gable polygon, 520ms), strap ticks drop onto the plan's tall pieces at 60ms stagger. h1 visible from frame 0 (line mask only under `.sw-motion`).
- **Story 1 — "strap" (the wow):** pinned ≥ 900px (3 steps × 55svh + 100svh): bookcase leans 6° → strap draws (DrawSVG) → snaps upright with a 1-frame settle; then dresser, then TV. Counter "1/2/3 anchored" counts. < 640px: three stacked cards, each strap drawn on enter.
- **Story 2 — "light":** the corner mini-plan fills the current room in redwood (ScrollTrigger per section, 200ms).
- **Hover (one language):** a strap tick slides in at the item's left edge (translateX -6px→0, opacity, 200ms) on links, cards, room tags.
- **Reduced motion:** everything upright and strapped, plan fully drawn, locator updates without transition, no pin.

## 8. Tools
1. **Tip-over check** (`checklist` + small custom render): inputs piece type (bookcase/dresser/TV stand/wardrobe), height band (< 30in / 30-48 / > 48), kids or pets y/n, wall (drywall over stud / beam / plaster / glass). Output: "Anchor it: strap into a beam" + elevation sketch with ticks + sample `{{proof.prices.0.from}}–{{proof.prices.0.to}} per piece`. Hand-off: "Add anchoring to my visit" → form service=Earthquake anchoring, note=list.
2. **Wall checker** (`tabs`): wall type incl. "Glass and beam", TV size. Output: method (stud lag / beam lag / post mount), bracket type, sample range from prices[2]. Hand-off: sms: "Text a photo of the wall" + form service=TV mounting.
3. **Playset sizing** (`estimator`): kit footprint (small/medium/large), slope (flat/gentle/real slope). Output: clearance sketch (+6 ft each side) and sample day count "one or two days" + range prices[3]. Hand-off: "Book a spring date" → form.
4. **ZIP check** (`zip`) in the site-plan section. 5. **Quote form** (`form`, multi-step: service → items/note → contact), hourly sample range shown.

## 9. Voice
- "If it's taller than your kid, we strap it to the beam."
- "Eichler walls are mostly glass. We find the post, not a wall anchor."
- "Desk built, cables in the tray, before your first call."
Never: hassle-free, seamless, premium, transform, peace of mind.
