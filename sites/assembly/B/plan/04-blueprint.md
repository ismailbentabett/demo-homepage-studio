## Round 1
Elevate photo + firstScreen: the manifest has no approved assembly photos (all draft, off-topic), so the drawn system went richer instead: flat-pack box pictograms on all 8 tiles and a printed carton side panel (FIG. 01) that opens with a clip reveal in #pieces. The city is in the h1 now (2 lines at 1440), the stack starts with one clearable sample carton (PC 01) on dashed ghost cartons, the duplicate hero Book button is gone, the next band peeks 64px, the bento ledger became a ruled packing slip, ghost numbers stay on #walls and #area only, and every copy-1 replacement is in.

# assembly-B · Blueprint (Piece Count Assembly · Stencilled Carton Stack)

Fixed signature element (outside the bands): `aside#stack.stack-rail` with `data-sw-signature`: a sticky right rail
at ≥1100px (fixed, 10 content cols + 2-col rail), a bottom sheet under 1100px opened from the mobile bar ("PC 03 ▲").
JS-only (`data-js-only`): it is the counter's output; with JS off the hero board is a plain sample price list.

| # | id | tone | purpose (objection / path) | layout family | content (tokens) | media | hooks | entrance |
|---|---|---|---|---|---|---|---|---|
| 1 | hero | t-deep | "Costs more than the furniture" → price the list; primary call | board | kicker trade + {{biz.city}}, h1, lead, [[call]], Book this list, proof line {{hours\|today}} · {{biz.areas.0}} … · {{proof.rating}} Sample; 8 carton tiles = proof.prices 0,0,0,1,2,3,4,5 | none | `data-hook="counter"` | tiles rise 60ms stagger, plate stamp |
| 2 | pieces | t-paper | "Strip the particleboard / drawers won't close" | ledger | ghost PC 01; services repeater (9) as carton rows, first one wide; guarantee {{proof.guarantee}} + Sample | none | — | rows rise (stagger) |
| 3 | walls | t-deep | "TV falls / wrong anchor" | elevation | ghost PC 02; 4 SVG cross-sections (drywall, plaster & lath, brick, poured concrete), stencil plate WALL 0N, anchor method, {{proof.prices.2/3}} Sample; "Add this TV" → stack; sms photo | none | `data-hook="draw"` | anchors draw (dashoffset 900ms, 120ms stagger) |
| 4 | haul | t-accent .break | "Leftover boxes clog the trash room" | statement | giant stencil BOX, {{services.8.blurb}}, {{proof.prices.5.*}} Sample, add to stack | none | — | none (quiet) |
| 5 | visit | t-light | "Show up without tools / not at all" | steps | ghost PC 03; 4 steps + tool roll (hammer drill, level, stud finder, sleeve anchors) | none | — | steps rise |
| 6 | proof | t-mid | "Will they really?" | labels | ghost PC 04; plate {{proof.rating}} + {{proof.reviewCount}} Sample rating; 7 reviews as paper carton labels (plate = service · town) | none | — | labels rise |
| 7 | building | t-paper | "Building wants a COI + elevator booking"; "4th-floor walk-up" | checklist | ghost PC 05; checklist ELEV / COI / HRS / WALK-UP / BOX + result line + "Add to my booking" | none | `data-hook="checklist"` | none |
| 8 | area | t-deep | "Do you come to me? Open now?" | split | ghost PC 06; ZIP checker, {{biz.areas\|list}}, {{hours\|table}}, {{hours\|today}} | none | `data-hook="zip"` | fade |
| 9 | contact | t-paper | the one form | form | ghost PC 07; 4-step form (list → place → when → you), thank-you honest | none | — | none |
| — | footer | t-deep | wow end: stack flattens to a tied bundle | footer | plate PC 00 · boxes out, [[call]], {{demo.disclaimer}}, [[credits]], licence Sample | none | `data-hook="flatten"` | sheets fold flat, straps draw |

## Rhythm gate
- 9 top-level sections ✓. Hero `min-height: calc(100svh - var(--header-h))`; at ≥900 the content is ~690px so the paper band peeks. At 390 the board is taller than one screen (8 tiles): h1 + buttons + first tile row are on the first screen; accepted (the tool is the hero).
- Tones: deep · paper · deep · accent · light · mid · paper · deep · paper (footer deep). Never 3 same category in a row; no two dark touching (t-mid is mid) ✓.
- ≥1 t-deep ✓ · colour band t-accent ✓ · full-bleed `.break` = #haul ✓.
- Hooks: counter, draw, checklist, zip, flatten + `data-sw-signature` on the rail ✓ (6).
- Layout families: board, ledger, elevation, statement, steps, labels, checklist, split, form: 9, no neighbours alike ✓.
- Exactly one `#contact`; every CTA → `#contact` (data-service prefill) or `tel:` / `sms:` ✓.
- Required content: 9 services (repeater), area + ZIP checker, hours + open-now, 7 sample reviews, prices only in tiles / wall plates / haul band (all `Sample`), footer with disclaimer + credits ✓.
- Signature in concept sections: hero (carton tiles + rail plate), walls (WALL 0N plates), pieces (ghost PC + carton rows), proof (carton labels + 4.8 plate), building (stencil codes), footer (flattened bundle) ✓.

## Decisions (headless)
- **No summed totals.** The kit never does math on dollars and DEMO-RULES §4 bans any dollar figure not in `proof.prices`. The counter totals the piece count (PC 03) and lists each line with its own sample range; the total price is promised as "one number on the call". No time band either (no time facts).
- **Tiles map 1:1 to `proof.prices`**: Desk, Dresser, Bookcase (prices.0), Storage bed (1), TV on drywall (2), TV on brick/concrete (3), Treadmill (4), Boxes out (5). Crib/wardrobe from the concept dropped: no honest price line.
- **Plaster** wall shows no price ("priced from a photo"); drywall uses prices.2, brick + concrete prices.3.
- **No photos this build** (library still downloading): `src/media.json` has no slots, no `ogPhoto` (OG falls back to the plain deep colour). Photos come in the fix round.
- Mobile bar shows under 1100px (not 900) because the rail becomes the sheet below 1100.

## Open issues
- (none yet)
