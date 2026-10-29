# insulation-C · media plan

The approved library has exactly one frame for C (hero-C3). Every other approved key is off-topic or a sibling's hero
(hero-A1 → A, hero-B3 → B; hero-C1 Himalaya, hero-C2 tractor, A2 Turner painting, A3 waterfall, B1 furnace, B2 logo,
process-caulk-plate archive). So: **one photo on the page, everything else drawn (SVG/CSS)**. An empty slot beats a wrong photo.

## hero-C3 → hero street plate (the only `[[img]]`)
- Section: hero, as the 4:5 photo plate clipped to the Syracuse pin on the drawn map (not full-bleed).
- Crop: `aspect-ratio:4/5; object-fit:cover; object-position: 8% 62%`. This keeps the pale-blue house + porch and the left
  half of the yellow house, and **crops out the "SOLD"-style yard sign (~57% x) and the green street sign (~75% x)**, both
  readable at full width. Builder: verify in the 1440 and 390 screenshots that neither sign is in frame; if the yard sign
  shows, move to `object-position: 0% 62%` or narrow to 3:4.
- Treatment: grade from 03-system (saturate .78, contrast 1.06, brightness .96, sepia .06, hue-rotate −4deg) + screen
  overlay to soften the hard blue sky toward overcast. 6px white border, −2deg rotation ≥ 900px, none on mobile.
- Caption (DM Mono, `--fs--1`): "Clapboard two-storeys, porches and a thaw in the yards: the kind of street the bands roll over."
- Alt: from manifest ("Row of pale blue and yellow clapboard houses with snow in the yards under blue sky").
- Problem the critic will see: bright clear sky and sun, not overcast lake-effect light; small for a hero by design.
  Credit link (Nyttend, Wikimedia Commons, public domain) in the footer credits.

## Drawn visuals (no photo keys; the builder draws these in inline SVG, palette colours only)
| Where | Drawing |
|---|---|
| hero | Onondaga County map: Lake Ontario top edge (field → deep), Oneida Lake NE, Onondaga Lake by the city, 3 hatched drift bands at −14°, 8 pins (Syracuse + 7 areas) with labels; stylised, not survey-accurate, no roads named. |
| story ×3 | House cut-aways: Eastwood 2.5-story frame (knee walls, half-story attic), Tipp Hill narrow clapboard (hollow plaster walls, dense-pack plugs), Liverpool colonial (attic floor + rim joist). Brick arrows = leaks, become short sealed ticks. |
| services | 7 mini line icons (knee wall, ice dam eave, attic floor, wall cavity + plug, rim joist, porch floor, sound waves through wall), 1.5px stroke. |
| reviews | horizontal county strip map with town pins. |
| break band | full-width deep band with a large drawn ice-dam eave section (snow on roof, warm air arrow, refrozen ridge at gutter) instead of a break photo. |
| footer | county map at 20% scale, band parked at the bottom. |

`src/media.json` = `plan/media.json` = `{"hero":"hero-C3","slots":{}}`. No heroVideo (map hero), no gallery.
