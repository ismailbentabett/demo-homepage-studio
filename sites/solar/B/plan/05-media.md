# solar-B · media plan

The approved solar library has 9 frames (all from Wikimedia/Openverse, none of a Tucson home). Only 3 survive DEMO-RULES §5
and the brief, so **drawn SVG carries the page**: the signature (rings, leader lines, Sources strips), the 4 story sheets
(bill, roof plan with tape dimensions, production-band chart, range bar), the second-opinion proposal sheet, the inverter
face in the light reader (an SVG box with an LED that changes colour), and a line drawing of a low-slope Tucson roof
with array, parapet and foam coating for the break band. No photo appears twice. Do not add other keys unless the
curator approves new frames and this file is updated.

| key | section | crop | treatment | caption |
|---|---|---|---|---|
| `wiring` (hero) | hero right half, 4:5 at ≥ 900, 16:10 band under the h1 block < 900 | `object-position: 50% 50%`, scale 1.15 so the cell grid is large and no edge shows | `grayscale(1) contrast(1.15)` + multiply over #15171A→#2F5F82 gradient (night duotone); SVG overlay: ring 1 sits on a cell junction, the leader crosses the seam | "Monocrystalline cells and bus lines, the part of the system the numbers are about." |
| `flat-roof` (detail-roof) | "How a number gets made" sheet 2 (roof measured), 3:2 inside the sheet beside the drawn roof plan | `object-position: 45% 60%` (membrane field + parapet edge, crop the lawn at top) | site grade + `sepia(.06)`; SVG tape dimension lines drawn over it in copper (#9A461A on paper sheet) | "A low-slope roof with a parapet edge, before any racking: the surface we measure first." |
| `measuring` (detail-measure, optional) | Tile/roof-details service card or sheet 2 alt, **1:1 or 3:4 only** | `object-position: 88% 42%` with the frame no wider than the right 30% of the photo: hands, pencil, tape on the beam; **the sign (x 36-54%) must be fully out of frame**, no face in frame | site grade; on t-paper | "A pencil mark on a measured beam: every size starts with a tape." |

## Rejected (and why)
- `hero-B1`: boat ramp with solar street lights in Louisiana; water, pier, public site, not a home. Off-region, non-residential.
- `hero-B3`: Wisconsin drone shot, green lawns and deciduous trees; wrong climate for Tucson, and likely A's (Sacramento) hero.
- `hero-A2`: a 3D render (brief §4.6 bans rendered arrays).
- `hero-C2`: three faces to camera, 1970s print. `hero-C3`: Sandia Mountains, C's city and C's hero.
- `rails`: a railway yard in Bologna, not solar racking.

## Weak spot (tell the critic nothing, tell the builder this)
The hero image is a panel-cell graphic, not a site photo. That is on purpose: it is evidence under annotation, not a
roof vista. It only works with the duotone grade + the drawn ring/leader overlay + 2 small mono callouts ("cell
string", "bus line") on it. Without the overlay it looks like clip art: never ship it bare.
