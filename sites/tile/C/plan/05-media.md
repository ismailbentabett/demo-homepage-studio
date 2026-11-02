# Media Plan — tile-C

## Slots

| Slot | Manifest key | Crop / position | Why |
|---|---|---|---|
| hero | hero-C | center 40% | Vintage white hex mosaic floor, warm light, fills hex mask without cutting edges |
| process | detail-hex-mosaic | center | Close-up of hex pattern showing grout lines and alignment, supports layer explanation |
| break | street-chicago-bungalow-snow | center 30% | Brick bungalow street in winter, full-bleed color band, establishes Chicago context |
| proof | detail-subway-white | center 50% | Clean subway tile wall with black liner, warm tone, backs review grid without competing |

## Rules followed
- Every key exists in `niches/tile/media/manifest.json`.
- No photo used twice on the page.
- Hero photo not reused by siblings (tile-A and tile-B use different heroes per registry).
- Captions describe the frame, never invent a job.
- All photos receive the shared grade: `saturate(.88) contrast(1.04) sepia(.1)`.