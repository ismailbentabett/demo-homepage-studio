# locksmith-C · Media plan

**Library problem (builder + critic, read this).** The approved locksmith library holds 6 draft photos, 0 videos:
manuscript letter (A1), snowy Quebec street at night (A3, also wrong for Tacoma and A's look), typewriter (B2),
English abbey (B3, wrong country), 1934 b&w survey photo of a two-storey porch building in North Carolina (C3),
hand holding a phone in a lit walkway (process-call). Nothing shows a painted Tacoma door, hardware or rain.
Decision: **the concept carries itself with drawn art** (CSS/SVG painted doors, the deadbolt section diagram),
and uses only 2 photos. 10-16 keys would mean off-topic frames; DEMO-RULES §5 says an empty slot beats a wrong
photo. Rejected: A1, B2 (off-topic), A3 (snow/Quebec, wrong climate), B3 (UK estate). No `heroVideo` (none fits).

| Key | Section | Crop | Treatment | Caption |
|---|---|---|---|---|
| `hero-C3` | Hero mosaic, ONE tile (row 1 col 4 desktop / row 3 col 2 at 390), 3:4 tile | `object-position: 38% 55%` (the porch railings and posts, not the roofline) | grayscale(1) contrast(1.1) brightness(1.08) + teal #1f5f5c multiply duotone; 8px oxblood frame like a door-glass mould; never full-bleed | "A two-storey porch with turned railings, 1930s survey photograph" (no city claim: it is not Tacoma) |
| `process-call` | Arrival-text section (sample text card beside it), 4:5 frame | `object-position: 62% 50%` (hand + phone on the right third) | site grade `saturate(.8) contrast(1.06) hue-rotate(-4deg)` + slate #1d3a44 multiply at 35%; phone screen is not readable, do not overlay a fake UI on it | "A hand holding a phone in a lit walkway" |

Builder notes
- Neither photo may appear twice. No other `[[img]]` on the page; services, rain story, proof and footer are drawn.
- C3 is a former tavern (commercial origin) but reads as an old porch house with no sign, no number, no people;
  it is kept small (one mosaic tile) and duotoned so it reads as "old house", the critic may still flag region.
  If the critic scores Photo < 8.5 for it, drop the tile and paint a ninth door instead: the concept survives.
- OG image: render the door wall (screenshot of the hero mosaic) rather than a photo.
