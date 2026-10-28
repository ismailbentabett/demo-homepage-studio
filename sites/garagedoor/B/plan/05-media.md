# garagedoor-B · Media plan

## Status: no photos placed (deliberate). `src/media.json` = `plan/media.json` = `{"slots":{}}` + note.
The niche manifest has only 5 **draft** frames, none showing a garage door part for direction B:
- `hero-B1`: vintage motorcycle front forks and engine (coil springs are suspension, not a torsion spring; a handwritten paper tag top-left). Wrong subject: would tell a Cleveland homeowner we fix motorbikes. **Rejected.**
- `hero-B2`: 1951 Hudson Hornet painted as a film character, readable plate, faces, readable shop signs, film IP. Breaks DEMO-RULES §5 four times. **Rejected.**
- `hero-A1/A2/A3`: sibling A's hero slots (and A1 is a university fieldhouse, A3 a solarpunk illustration). Not ours.
An empty slot beats a wrong photo.

## What the builder does instead (fits the thesis: the page is a nameplate + drawings)
- **Hero right half:** inline SVG line drawing of the torsion assembly seen from inside: header bracket, shaft, two springs with winding cones, drums, cables down to the bottom brackets, top two door sections. Stroke 1.5px #15181B on `t-zinc` with the brushed texture; parts named by the finder turn #F2C200 fill with ink stroke. `role="img"` + `aria-label` "Line drawing of a torsion spring assembly above a garage door".
- **Story:** 1:1 spring SVG (coil path repeated, `vector-effect:non-scaling-stroke`), no photo.
- **Services:** each plate carries a 48px line icon-drawing of its part (spring, stretch spring with safety cable, opener head, bottom section with salt line, roller, door section with foam core, seal, photo-eye, keypad, checklist, door) — drawn, consistent 1.5px stroke, not a stock icon set.
- **Break band:** instead of a full-bleed photo, a `t-deep` band with an oversized drawn bottom section (rust shown as a hatched band along the bottom panel, salt line dashed).
- **OG image:** set `ogPhoto` off; build falls back to the business name in the display font.

## Critic note
Photo category will be judged on drawings; that is the honest call. If the curator later approves `hero-B*` frames of spring coils / rollers / a rusted bottom section, put the best one in the hero right half (`object-position: 50% 40%`, grade from 03-system) under the SVG at 30% opacity and keep the drawing as the overlay.
