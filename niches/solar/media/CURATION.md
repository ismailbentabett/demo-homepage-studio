# Solar media curation (2026-10-29)

Pool: Openverse / Wikimedia only (no Pexels key), 54 candidates after `--force --photos-only` (some 429s).
No site had `src/media.json` yet, so unused draft keys were replaced in place; nothing deleted.

## Approved (11)
| Key | Candidate | Why |
|---|---|---|
| hero-A1 | oc00176430936 | Aerial of a comp-shingle house with flush solar shingles, mature trees: Sacramento-style A hero. |
| hero-A2 | oc00176430925 | Solar shingle array on a pitched roof, tree shadows; tight, calm, suits the diagonal cut. |
| hero-B1 | oc00176430935 | Low-angle along a dark array into an evening sky; darkest frame, works half-width. |
| hero-B3 | oc00123189212 | PV panels over weathered clay tile; the only real tile-roof array. Overcast, flat light. |
| hero-C2 | oc00051337638 | Pueblo-style stucco, vigas, turquoise doors; strong colour for C. Carved eagles are distinctive. |
| hero-C2-2 | oc00016628475 | Vintage adobe wall and windows (1970s Documerica colour); backup for C. |
| hero-C3 | oc00170873890 | Sandias at sunset over Albuquerque rooftops; best C frame, survives a circle crop. |
| hero-C3-2 | oc00118624211 | Monsoon storm clouds over the Sandias; the "monsoon sky" shared shot. |
| desert-land | oc00110179930 | High-desert valley at golden hour; band or background. |
| rooftops-aerial | oc00183401295 | Top-down suburb with rooftop arrays (Canberra); good for sun path or neighbourhood graphics. |
| flat-roof | oc00004307087 | Residential membrane flat roof with a parapet edge. |

## Still draft / weak
- measuring (oc00114334061): a man on a ladder at a stone wall, not a roof. Don't use it.
- rails (oc00196875457): railway tracks, wrong subject. Don't use it.
- wiring (oc00081007617): flat, graphic-looking cell pattern. Only usable as a texture.
- Missing, nothing in the pool is acceptable: hero-A3 (attachment/flashing), hero-B2 (inverter/meter), hero-C1 (flat-roof
  array behind a parapet), installer from behind, carrying or clamping panels, tile-roof detail.
  These need Pexels (`fetch-media.mjs solar --slot <slot> --more` once a key exists).
- Rejected: rendered pergola, boat-ramp lights, ISS, faces (Documerica group), "BYGG" sign on a roof, Singapore and Mumbai
  high-rises, solar hot water (thermal, not PV), railway.
- Credit note: hero-A1, hero-A2 and hero-B1 are credited to "Sun Vault Roofing" (CC licence). No logo shows in the frames.

## Best hero frames per direction
- A: hero-A1, hero-A2, rooftops-aerial
- B: hero-B1, hero-B3, desert-land (B has no inverter or real dusk-array frame)
- C: hero-C3, hero-C2, hero-C3-2 (no flat-roof array for C1)
