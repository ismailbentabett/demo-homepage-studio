# fencedeck-B · Media plan

**One photo only.** The niche library has 8 frames, all `draft`, almost all off-topic. Reviewed on
`niches/fencedeck/media/contact-sheet-approved-01.jpg`:
- REJECT hero-A1 (racehorse + two faces), A2 (etching; taken by A as hero anyway), A3 (English thatched cottage: wrong
  country), B1 (St. Paul skyline: wrong city, readable landmarks), B3 (warship in a navy yard), C1 (road bridge), C2 (Singapore).
- KEEP **hero-B2**: 1930s B&W lumber yard, rows of stickered board stacks drying in snow, hills behind. No people, no sign,
  no house, no logo. It is literally "a pile of countable things", and snow on lumber reads Front Range winter. Weakness the
  critic will see: archival (NARA, New Hampshire), not a Denver backyard, and no finished deck exists anywhere in the library.
  We own that: it is the only photo, graded as an archival plate, and every deck/fence image is drawn.

## hero-B2 → hero mosaic, big tile
- Tile: 7-col mosaic, big tile spans 2 rows (≈ 4:5 at 1440; 1:1 at 390 as the top of the 2×2).
- Crop: `object-fit:cover; object-position: 38% 64%` (the front stack rows on the lower third; sky trimmed).
  At 390: `object-position: 30% 66%`.
- Treatment: site grade `grayscale(1) contrast(1.08) brightness(1.02)` + `#22508F` screen overlay at .28 → blue-graphite
  duotone on pine paper; 1px ink frame, 3px radius. A drawn tally overlay in the lower-right corner counts 5 stacks (the
  front row) with Martian Mono "5 STACKS" (true of the frame).
- Caption (figcaption, `--fs--2` mono, `--muted`): "Boards stacked and stickered to dry under snow. Archive photo." + credit link.
- Alt: "Rows of lumber stacked in a snowy field with wooded hills behind."
- Loading: `fetchpriority="high"`, eager; it is the LCP element.

## Drawn instead of photographed (builder: inline SVG, 03-system stroke style)
- hero tile 2: joist plan, 12 ft run, 10 joists at 16 in. o.c., tally underneath (signature hook).
- hero tile 3: hidden-clip section: two boards, clip, joist, tape strip, gap dimension line.
- hero tile 4: post section: post, concrete, grade line, dashed FROST LINE, post below it.
- counter: live deck plan (boards + joists) redrawn from inputs.
- posts story: fence elevation, posts at 8 ft, depth lines below frost.
- repair band: ledger detail (house rim, flashing Z-shape, ledger, joist hanger).
- compare: 4 stain/material swatch chips.
- gallery: none (no honest photos). Reviews carry the proof.

`src/media.json` = `plan/media.json` = `{"hero":"hero-B2","slots":{}}`. check-unique (full): clean.
