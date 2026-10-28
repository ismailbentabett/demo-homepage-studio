# appliance-A · Media plan

## State of the library (read this first, builder)
`niches/appliance/media/manifest.json` (updated 2026-10-27T23:38) holds only 5 **draft** photos, no videos. The hero-A set:
- **hero-A1** (1939 Packard on Lisbon cobbles): REJECTED. Readable licence plate, rally sticker, a face behind the windscreen, wrong subject (car), wrong country.
- **hero-A2** (hands probing a circuit card with a multimeter, yellow meter left): USED, cropped hard. The full frame shows a young woman's face in profile (y ≈ 15-50% of the frame); DEMO-RULES §5 forbids a face. Only the hands + leads + meter strip is used.
- **hero-A3** (man reading under a desk lamp): REJECTED. Face, a book, not appliance work.
- hero-B*: not ours (sibling keys).
So: **one photo on the page.** Everything else is drawn (SVG, in the palette): the dryer back cutaway, the 7 story panels, the model-tag outlines, parts (thermal fuse, defrost heater, drain pump, igniter, dishwasher filter). "Drawings stand in where no honest photo exists" (same call as autotuneup-A). If the curator later approves process/detail keys (panel off, part in hand, model tag, igniter glow), add them to `slots` as `story-1..7` / `detail-*`, one each, never the hero again.

## src/media.json (= plan/media.json)
`{"hero":"hero-A2","slots":{}}`

## hero-A2 → hero, lit half, inset frame (not full-bleed)
- Placement: inside the right ("BEHIND THE PANEL") half, an inset frame under the SVG dryer cutaway, ratio **16/9** at ≥ 900px (≈ 420-520px wide), **3/2** full width under the h1 at < 900px.
- Crop (must hide the face): `object-fit:cover; object-position:30% 100%; transform:scale(1.7); transform-origin:30% 100%;` inside `overflow:hidden`. Visible = the two hands, black/red leads, the card and the yellow meter body; top edge of the visible area must sit below the chin (source y > 62%). **Verify on the 1440 and 390 screenshots that no part of the face, ear or hair shows; if it does, raise scale to 1.9.** Use the 2340px file (`hero-A2.webp`) for ≥ 900px so the zoom stays sharp.
- Treatment: site grade `saturate(.7) contrast(1.08) brightness(.88) sepia(.12)` + bottom gradient to #141516; the amber work-light cone overlaps the frame's top-right corner. Frame: 1px #3A3C40, 2px radius, 4 screws 10px at its corners (it is a small panel), mono label "PANEL 00 · METER CHECK".
- Caption (mono, muted): "Meter leads on a circuit board: test before any part is swapped." Alt: "Two hands holding multimeter probes against a circuit board, a yellow meter beside them."
- Credit: from manifest `credit` (Public domain, U.S. Navy via Wikimedia Commons) in the footer credits list.
- Problem for the critic: a navy electronics bench, not a home appliance; the crop makes it read as "testing a control board", which is honest for appliance repair. Photo score will lean on the drawings.

## Drawn assets the builder must make (inline SVG, palette only)
| asset | section | notes |
|---|---|---|
| dryer back cutaway | hero right half | rear panel removed: drum outline, heater housing, element coil, thermal fuse tagged BLOWN (#E0533A), leader line crossing the seam |
| 7 panel spot drawings | story 01-07 | phone + speech line; model tag plate; part in a bag on a van shelf; meter dial (needle draws); fuse in an open palm outline; scale/verdict (fix / don't); old part in a bag leaving |
| appliance outlines (5) | model-tag locator | fridge, washer, dryer, dishwasher, range; hotspots at plate locations |
| part icons | service panels + reviews | thermal fuse, defrost heater, drain pump, igniter, dishwasher filter, evaporator fan |
Stroke 1.5px #EEE9DF at 70% on deep, part highlights #F2A33A, failure marks #E0533A; no fills beyond #1F2123.
