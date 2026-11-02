# Media Plan — fireplace-B

## Slot assignments

| Slot | Manifest key | Why | Crop / object-position |
|---|---|---|---|
| hero | hero-B1 | Inspection camera screen showing flue interior — matches the "document note" hero family and the thesis that every visit ends with photos from inside the flue. Light, documentary, no cozy staging. | center 40% (screen centered in frame) |
| sweep | process-vacuum | Vacuum-cup washer / industrial vacuum reference — reads as the soot vacuum at the firebox opening during a sweep. Matches Finding 02. | center 50% |
| break | process-roof-rods | Chimney sweeps on roof with rods — full-bleed visual pause, shows the climb without being the hero. Deep tone band behind it. | center 30% (figures upper third) |
| inspect | tool-camera | Water inspection cover / camera scope close-up — stands in for the Level 2 camera inspection. Documentary, precise. | center 50% |
| services-masonry | appliance-masonry | Masonry fireplace in a living room — illustrates the open fireplace service. Warm brick, even daylight. | center 40% |
| services-insert | appliance-insert | Post-medieval flagon shape reads as an insert/stove silhouette in context — used for gas insert service card. | center 50% |

## Rules followed
- Every key exists in `niches/fireplace/media/manifest.json`. Verified.
- No photo used twice on the page. Six unique keys for six slots.
- Hero photo (hero-B1) is not used as hero by sibling A (hero-A3) or C (hero-C1). Verified against manifest slot names.
- Captions describe the frame, never invent a job. Alt text comes from manifest.
- No people's faces as "the owner". process-roof-rods shows figures from behind/at distance; all others are objects.
- Photo grade applied globally: `saturate(.85) contrast(1.05) sepia(.08)`.