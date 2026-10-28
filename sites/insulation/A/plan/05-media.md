# insulation-A · Media plan

The approved library has one usable frame for A (`hero-A1`); every other insulation pool image is off-topic or rejected
(niches/insulation/media/CURATION.md). hero-B3 / hero-C3 belong to the siblings. So: **one photo on the page, everything
else is drawn SVG/CSS** in the line language of 03-system.md. An empty slot beats a wrong photo.

## Photo
| key | section | crop | treatment | caption |
|---|---|---|---|---|
| hero-A1 | hero mosaic, big gable-topped cell (≈ 62% width ≥ 1100; full width, 4/5 ratio, < 640) | `object-position: 42% 30%` (keeps the lamp, the lit windows and bare trees; cuts most of the bright snow foreground) | site grade + bottom multiply gradient; gable clip-path; floor-line rules at 46% / 74% | "Lit windows behind bare trees on a snowy January night." |

Problem to know: it is a park in front of row houses (a bench, a lamp post), not one house, and the foreground snow is very
bright. Never put text on it; the gradient sinks the foreground. Credit: Wilfredor, Wikimedia Commons, CC0 (credit link in footer).

## Drawn visuals (builder makes them as inline SVG, no image files)
1. **Hero tiles** (3 small mosaic cells, t-mid bg): L1 roof deck cut (rafter, sheathing, icicle row + ice dam at the eave,
   amber arrow under the deck); L2 attic cut (joists, stipple insulation, chimney chase gap with amber arrow, depth ruler);
   L5 rim joist cut (sill plate, band joist, frost hatching outside, amber draft arrow at floor level).
2. **#order pinned story**: full 2½-storey hillside house section (gable, knee walls, 2 floors, basement, rim joist), 5 leak
   points with amber arrows; each step stitches one (ice); final state = even snow line along the whole roof.
3. **Full-bleed break** (`class="break"`, t-ice or t-deep, 100vw, 40-56svh): a drawn wide roofline row of 5 Duluth gables at
   night under even snow, one roof with bare stripes + icicles (the before) going even as it scrolls in. No photo is available
   for a break; if check-render demands an image in `.break`, the SVG counts as the media (note it in the build log).
4. **Heat path picker**: the same house section as #order, 6 tappable zones (≥ 48px targets, button elements).
5. **R-value diagram** in the L2 attic level: a vertical depth ruler 0-20 in, ticks every inch, marks at typical R-49 and R-60
   (labelled "typical, ENERGY STAR / DOE", depth x ~3 rule), and nothing else numeric.
6. **Ice dam diagram** in L1: warm attic air → melted snow → refreezes at the cold eave.
7. **Season planner**: 12 small month glyphs (snow depth bar), drawn.
8. Footer: ground line + frost line hatching, riser ends sealed.

No gallery. No video (hero family 8; no approved video).
