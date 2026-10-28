# fencedeck-A · Media plan

**The library problem (named for the critic).** The approved fencedeck library has 8 frames, all off-brief: a race horse with two
faces (A1), a 19th-c. etching (A2), an English thatched cottage (A3, wrong country), the St. Paul skyline (B1), a 1930s New Hampshire
lumber lot (B2, left for B's lumber mosaic), a warship (B3), a mountain road (C1), Singapore (C2). None shows a Boise yard, a post or
a deck. So A uses **one** image and carries the page with drawn plates (SVG, one etched-line style). An empty slot beats a wrong photo.

## hero-A2 → hero filmstrip, plate 4 of 8 ("CEDAR · RAILS · GATE")
- Childe Hassam, *The Big Cedar, Easthampton*, etching, public domain (credit from manifest, rendered via `[[img]]` credit link).
- Section: hero filmstrip, the only raster plate among 7 SVG plates; also reused **nowhere else** on the page.
- Crop: square plate, `object-fit:cover; object-position: 58% 78%` (the braced gate, posts and rail fence, bottom-center); this crops out
  the pencil title and margin numbers at the bottom edge and the paper border. At ≥1024 a wider 4:3 variant of the same plate
  allowed: `object-position: 55% 70%`.
- Treatment: system grade `saturate(.8) contrast(1.06) sepia(.12) hue-rotate(-4deg)` + sage multiply overlay 18%; plate mark (1px ink rule inset 8px).
- Caption (mono tag): "ETCHING · A CEDAR, A RAIL FENCE AND A BRACED GATE". Alt: "Old etching of a cedar tree beside a post-and-rail fence and a wooden gate with a diagonal brace."
- Never captioned as their work; it's an etching, plainly labelled.

## Drawn plates (builder draws, inline SVG, stroke #1C3329 1.5px, one cedar #9E3F1A accent stroke each)
Filmstrip (1:1): 01 stakes + string at a corner pin · 02 811 paint marks and flags · 03 auger hole with depth tick · 05 post plumb in
concrete · 06 rails at top/mid/bottom · 07 pickets going on, one gap · 08 gate: steel frame inside cedar, self-closing hinge.
Elsewhere: post-depth cross-section (story 2), gate-hinge detail (Gates card), board-spacing diagram (deck: joists 12 in. o.c., 
flashing tape at ledger), estimator live string. All numbers only from facts (8 ft posts, 12 in. o.c., 6 ft height).

## Rejected keys
A1 faces + racecourse · A3 England, thatched roof (DEMO-RULES wrong region) · B1 skyline, irrelevant · B2 left to sibling B (lumber) ·
B3 warship · C1 highway · C2 Singapore.
