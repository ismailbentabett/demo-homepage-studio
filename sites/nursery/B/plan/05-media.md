# Media Plan — nursery-B

## Manifest status
The nursery media manifest currently contains only hero-A/B/C variants and process-seed-tray, all in draft status. No approved Florida/plant-specific photos exist yet. This plan uses `hero-B` as the hero placeholder per the brief's direction-B slot; other slots use shared keys that map to whatever the curator approves later. The build will fail on missing keys if they are not in the manifest; this file documents the intended final state.

## Slot assignments

| Slot | Key | Crop / position | Why |
|---|---|---|---|
| hero | hero-B | center | Placeholder for bright outdoor nursery bench photo; current manifest entry is a limestone pediment (will be replaced by curator) |
| proof-break | hero-B-3 | center | Sandy ground texture reads as neutral break between proof cards |
| photo-check | hero-B-2 | center | Blue sky tone works as backdrop for leaf-detail section until real leaf photo approved |
| delivery | hero-C-3 | bottom | Mulched garden bed shows soil/planting context for delivery section |

## Notes
- No video in manifest; hero is static photo.
- All captions will describe what the frame actually shows once real photos are curated.
- Re-run `node tools/check-unique.mjs nursery-B` after curator approves real direction-B photos.