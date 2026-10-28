# assembly-A · Concept

## 1. Three obvious concepts, rejected
1. **"Assembly made easy" + smiling couple on a sofa + 14-field form.** Hex-key logo, stock lifestyle photo, a
   blue CTA. Rejected: it is brief §4 items 1-3; every Arlington competitor already runs it.
2. **Before/after slider of a box-strewn room vs a finished bedroom.** Rejected: template move, stock can't be an
   honest before/after (DEMO T5), and it shows the end, not the process this direction sells.
3. **A literal IKEA-style wordless manual with a cartoon figure.** Rejected: the brief's seed taken literally;
   cartoons are on the "leave in 5 seconds" list and it parodies a brand.

## 2. Thesis
**The page is the manual that should have come in the box: every section is a numbered step whose exploded
drawing closes up as you read it, and each step's hardware bag counts the visit instead of the screws.**

## 3. Signature system: "Exploded Step + Hardware Bag"
Two primitives, always together: (a) **the exploded view**: a graphite line drawing (1.5px stroke) whose parts sit
apart along dashed explode lines and slide shut as `--sw-p` goes 0→1; (b) **the hardware bag**: a small label
shaped like a zip bag (seal line + two punched holes at the top, mono letter code "BAG C"), whose lines count the
*visit*, only with facts. Hook: `data-sw-signature` on the step rail.
- **Hero:** margin drawing = exploded dresser (carcass, 3 drawers, back panel, 4 cam bolts) closes during the
  intro; bag A under the buttons: "BAG A · 9 kinds of job · 6 towns · tools included".
- **Story (Steps 01-06):** count on a blanket → square the frame → set the cams → hang + adjust doors → anchor to a
  stud → boxes out. Each step: its own drawing (parts grid, square + diagonal, cam bolt, hinge, strap + stud,
  flattened boxes) draws itself; step number circle gets a tomato tick; bag lists what that step covers.
- **Parts list (prices):** price table set as the manual's parts inventory, rows keyed A-E, each with a tiny part
  silhouette; the bag reads "BAG P · Sample prices · 2-hour minimum".
- **Proof (reviews):** each review is a bag tag pinned to its job ("BAG R1 · Arlington · bed + 2 dressers"), item
  and town from the review text; the 4.9/214 Sample rating sits in a bag with the Sample tag.
- **Tools:** move-in planner output prints as a numbered step list with mini drawings; tip-over check shows the
  strap drawing closing when the answer is "anchor it".
- **Footer = Step 07, "The empty hallway":** the dresser drawing fully assembled, a final bag "Boxes out: all ·
  90-day come-back", and the call button.
Variation per section: drawing subject, bag letter, and whether the drawing sits in the margin (story), inline (cards),
or full-size (footer). Not in registry (closest: "Spec Rail + Dimension Callout", "Cut List + Kerf Rule": different
object, verb and material).

## 4. Type
- Display **Familjen Grotesk** 600/700 (0 uses in registry): plain, slightly quirky Scandinavian grotesk, the
  voice of a manual that respects you.
- Text **Public Sans** 400/500/600 (1 use): neutral, government-grade, very legible steps.
- Accent **JetBrains Mono** 500 (0 uses): step numbers, bag labels, part counts, prices, tabular.

## 5. Palette: "Instruction White + Cam Zinc + Tomato Step" (light-led)
| Role | Hex | On | Ratio | Use |
|---|---|---|---|---|
| ink graphite | #22262B | paper #F8F7F3 | 14.19 | body, headings |
| ink | #22262B | cream #EFE8DA | 12.48 | body on cream |
| ink | #22262B | zinc #D9DCDF | 11.05 | body on zinc band |
| muted | #5A6068 | paper | 5.92 | captions, meta |
| muted | #5A6068 | cream | 5.20 | captions on cream |
| muted | #5A6068 | zinc | 4.61 | captions on zinc |
| muted-2 | #4A5058 | paper | 7.59 | small mono labels |
| tomato (accent, signal) | #C42A31 | paper | 5.26 | step numbers, accent words, focus |
| tomato | #C42A31 | cream | 4.62 | accent words on cream |
| tomato | #C42A31 | zinc | 4.09 | **no words on zinc**; ticks/rules + focus ring (≥3) only |
| white | #FFFFFF | tomato | 5.64 | primary button text |
| paper | #F8F7F3 | tomato | 5.26 | text on t-accent band |
| blush | #FFE6E4 | tomato | 4.75 | muted on t-accent |
| paper | #F8F7F3 | deep #1B1E22 | 15.60 | body on deep |
| zinc-light | #A9B0B8 | deep | 7.63 | muted on deep |
| tomato-light | #FF8A8A | deep | 7.37 | accent words + focus on deep |
| deep | #1B1E22 | tomato-light | 7.37 | button text on deep tone |
| tomato | #C42A31 | deep | 2.96 | **never** on deep |
| line | #6E757D | paper / cream | 4.34 / 3.82 | drawing strokes, rules (graphics ≥3) |
| hairline | #8C939B | paper | 2.89 | decorative hairlines only |

## 6. Hero family 12: sticky photo, scrolling text
Note: every family is over the library cap of 3 (12 has 4); the brief assigns 12 to A, taken per orchestrator.
Cliché broken: the scrolling statements are **numbered manual steps** (mono "01 / 02 / 03" + tick) in a margin
rail beside an exploded-view drawing; the photo is a framed plate (3px paper mat, "FIG. 1" caption), not a
full-bleed mood shot. Statement 1 is the h1 and is visible without scrolling. < 640px: no pin; photo on top
(4:5), the three lines stacked below with their numbers.

## 7. Motion score
- **Intro (≤ 1.1 s):** hero exploded dresser slides shut part by part (5 parts, 60ms stagger, 520ms each,
  ease-out) while the h1 line mask rises; any scroll/key/tap jumps to the end; text is in the DOM before.
- **Story 1 (stack):** hero pin, 3 statements scroll past the sticky photo, each one's number gets a tick as it
  crosses 50% (55svh per statement, ≥ 640px only).
- **Story 2 (draw):** Steps 01-06: each drawing's strokes draw (DrawSVG 0→100%) then its parts close along the
  explode lines via `--sw-p`; the step circle ticks at `--sw-p ≥ .9`. Reverses on scroll up.
- **Hover (one language):** a dimension line (1.5px, end ticks) grows under links/cards, scaleX 0→1 from left, 200ms.
- **Reduced motion:** drawings shown assembled, ticks shown, no pin, no line mask; all content static and visible.

## 8. Tools
1. **Move-in day planner** — inputs: move-in date (date input), rooms ticked (bedroom, kids' room/nursery, living
   room/TV, office, outdoor); output: an ordered day ("1 Beds first · 2 Dressers, anchored · 3 Wardrobe · 4 TV +
   desk · 5 Boxes out") as a numbered step list with mini drawings, plus the matching Sample price rows. Module
   `checklist` + `app.js` ordering. Hand-off: "Book this order" → `data-service` prefill + rooms/date into the
   message field. JS off: the static order + the call button.
2. **Tip-over check** — inputs: piece height (under 30 in / 30-50 / over 50), kids or pets (y/n), wall
   (drywall / plaster / brick-concrete); output: "Anchor it: strap to a stud" / "toggle into plaster" / "sleeve
   anchor" + strap drawing closes. Module `tabs` (wall) + `checklist` (risk). Hand-off: "Add anchoring to my visit"
   → prefill "Anchoring tall furniture".
3. **ZIP check** (`zip`, facts zips) → "We come to {{town}}" + Price my list.
4. **Quote form** (`form`, multi-step: what / where + date / contact), microcopy "We'll call you back to set a time."

## 9. Voice
- "We open every box and count the parts on a blanket before a single screw goes in."
- "Tall dressers get strapped to a stud. Not plaster, not drywall alone: the stud."
- "When we leave, the hallway is empty. Foam, bags and cardboard go with us."
Never: seamless, hassle-free, top-notch, one-stop, premium.
