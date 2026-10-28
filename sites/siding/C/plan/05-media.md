# siding-C · Media plan

The approved siding library has 10 photos (all from Commons/HABS); only 2 are free and suit Providence and this direction. Rejected: hero-A1 (railway sidings), hero-B1 (soldiers, faces), hero-B2 (industrial bunkhouses), process-tear-off (railway goods shed, readable sign), hero-C1 (Indiana farmhouse: wrong region), hero-A3 (Ontario, readable sign; siding-A's slot), hero-B3 (siding-B hero slot), hero-A2 (siding-A hero: never reuse). Empty slots beat wrong photos: drawings (SVG swatches, wall section, triple-decker elevation) carry the rest of the page. No video in the library; hero family 3 needs none.

| key | slot | section | crop | treatment | caption |
|---|---|---|---|---|---|
| hero-C2 | hero | #top, inside the FISHSCALE mask word | `background-position: 50% 45%`, `background-size: cover` on the word box | `saturate(.9) contrast(1.12) brightness(1.05)`; solid #F4EEDF fallback | (decorative inside the word: `aria-hidden`; sr text = the word) credit in footer: "Weathered cedar shingles" |
| hero-C3 | break | `.break` after #under | `object-position: 38% 55%` (keeps the porch + bays, crops the graffiti at right edge) | global grade + bottom sage gradient | "Fig. 4 — A three-decker with its porch and bay lines intact, spring light." |

Problems for the builder:
- hero-C3: a small door number on the porch door at centre; at 78svh it stays tiny, but if the render shows it legible, move to `object-position: 30% 40%` and `scale(1.08)` so the door sits under the caption chip. The photo is Manchester, NH (fits a New England triple-decker; caption never names a place).
- hero-C2 is a texture, perfect for the mask, weak as a standalone; never show it unmasked.
- Only 2 photos: Photo score will lean on the craft of the mask and the drawings.
