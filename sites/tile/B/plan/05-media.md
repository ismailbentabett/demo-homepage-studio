# Media Plan — tile-B (Feeler Gauge Tile Works)

## Slots

| Slot | Manifest key | Crop / object-position | Why |
|---|---|---|---|
| hero-big | hero-B | center 40% | Large-format porcelain floor in raking daylight; shows flatness and scale. Main mosaic panel. |
| hero-sm-1 | detail-grout-lines-close | center | Close-up of even grout lines; reinforces precision. Mosaic tile #2. |
| hero-sm-2 | leveling-clips | center 60% | Leveling clips between big tiles; visual proof of lippage control. Mosaic tile #3. |
| hero-sm-3 | thinset-back-butter | center | Mortar on back of tile; shows coverage. Mosaic tile #4. |
| flatness-story | hero-B-2 | center 30% | Level/straightedge resting on new floor tile; used in pinned story and static fallback. |
| break | hero-B-3 | center | Aerial/coastal texture as abstract tile-field; full-bleed visual pause. Dark tone band. |
| area | street-oakland-craftsman | center 50% | Oakland Craftsman street; grounds service area in real housing stock. |

## Rules followed
- Every key exists in `niches/tile/media/manifest.json`. Verified: hero-B, hero-B-2, hero-B-3 present. detail-grout-lines-close, leveling-clips, thinset-back-butter, street-oakland-craftsman are in shared pool per brief §7.
- No photo used twice on page.
- Hero photo (hero-B) not used as hero by sibling tile-A (uses hero-A) or tile-C (uses hero-C).
- Captions describe frame, never invent a job.
- All photos get shared grade: `saturate(0.85) contrast(1.05) sepia(0.04) hue-rotate(-2deg)`.

## Notes
- If any shared-pool key is missing from manifest at build time, replace with closest available slot from manifest that matches mood (clean, exact, cool light). Prefer `detail-*` for small mosaic tiles, `hero-B-*` for story/break.
- No video slots used (manifest has no videos for tile niche).