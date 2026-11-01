# solar-C · media plan

Library state: 9 approved keys (all `draft` status in the manifest), only 3 fit this site. **Drawn SVG carries the
solar content**: the top-down roof plan (story), the parapet section drawings (hero, calculator, cards), the panel rows.
Empty slots beat wrong photos. If the curator approves new C keys (C1 flat-roof array behind parapet), the builder may
swap them into `story-1` / `gallery` only after re-running `node tools/check-unique.mjs solar-C`.

| key | section | crop | treatment | caption |
|---|---|---|---|---|
| `hero-C3` (Sandia Mountains sunset, 2340×924) | hero sun-disc mask (circle, ~min(46vw,560px), bleeds 12% off the right edge at ≥1100; 78vw centred under the h1 block on 390) | `object-position: 58% 42%` (crest + lit face fill the disc, city lights band at the bottom third) | site grade; intro brightness .8→1; 2px umber ring on the disc edge (gold-on-clay fails) | "The Sandias at sundown, seen across the rooftops of the city" |
| `flat-roof` (EPDM roof, white parapet cap, 2288×1904) | break band, between services and the shadow calculator: parapet-framed 21:9 at ≥900, 4:5 on 390 | `object-position: 50% 62%` (parapet cap on the upper third, open membrane below) | site grade + clay multiply 18%; `.parapet--p3` edge on top; morning wedge on the left | "A flat roof membrane and its parapet cap: the edge that sets every row" |
| `wiring` (36-cell panel diagram art, 2340×1074) | detail texture only: inside the battery-planner result panel / one panel row in the roof plan legend, 16:9 small (≤320px) | `object-position: 50% 50%` | grade off, `opacity:.9`, 1px umber rule frame; alt can be empty if purely decorative (`alt=""` + aria-hidden), otherwise "Grid of solar cells, drawn" | "Thirty-six cells in a grid: one panel, close up" |

## Rejected (DEMO-RULES §5 / wrong place)
- `hero-C2`: three faces to camera presented as designers (faces + 1970s, reads as the owner/team). Out.
- `hero-A2`: a 3D render (cliché §4.6, rendered array). Out.
- `hero-B1`: Louisiana boat-ramp lights, wrong region, not residential. Out.
- `hero-B3`: Wisconsin pitched shingle roof, wrong climate/roof; also a sibling hero candidate. Out.
- `measuring`: porch restoration with a readable sign and a person; not solar, not NM. Out.
- `rails`: Bologna rail station, commercial/wrong country. Out.

## Problems the builder must know
- The hero photo has **no panels**: the solar subject lives in the drawn parapet + panel rows beside the disc. Keep the
  hero SVG (parapet section with 2 tilted panel rows set back from the Dec 21 wedge) in the first screen at 390 and 1440.
- Only 3 photos on the page: sections that would hold photos use drawings (roof plan, parapet sections, battery loads icons drawn
  in 1.5px umber line). Do not reach for an unapproved file.
- `hero-C3` is 2.53:1; the disc crop uses the centre ~924px square, so use `hero-C3.webp` (2340w) at ≥700px, `-1170` below.
