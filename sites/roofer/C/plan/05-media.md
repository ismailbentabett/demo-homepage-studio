# Media Plan — roofer-C (Hailward Roofing)

## Hero

- **Key:** `hero-C1`
- **Section:** hero (stacked-headline-strip)
- **Crop:** `object-position: 50% 40%` (keep storm sky in upper third, suburb horizon in lower)
- **Treatment:** standard grade (`saturate(0.8) contrast(1.08) sepia(0.06) brightness(0.95)`), no overlay
- **Caption:** Dark supercell anvil cloud rolling over central-Oklahoma prairie with a brick ranch roofline in the lower frame; late-afternoon storm light from the southwest.

## Slots

### break
- **Key:** `weather-prairie-sunset`
- **Section:** break (full-bleed visual pause between season-apr-jun and season-jul-aug)
- **Crop:** `object-position: 50% 60%` (horizon low, sky dominates)
- **Treatment:** standard grade; optional duotone multiply with `#1a2430` at 15% opacity in t-dark context
- **Caption:** Golden-hour light breaking through retreating storm clouds over open grassland; warm prairie gold tones against fading slate sky.

### story-1
- **Key:** `weather-rain-shingles`
- **Section:** season-mar (wind season, split layout right side)
- **Crop:** `object-position: 50% 30%` (close on shingle surface, water streaks visible)
- **Treatment:** standard grade
- **Caption:** Rain running down architectural shingles into a gutter; wet granule texture and water sheen show wind-driven moisture exposure.

### story-2
- **Key:** `hero-C2`
- **Section:** season-apr-jun (hail season, stack layout background)
- **Crop:** `object-position: 50% 50%` (brick ranch centered under heavy clouds)
- **Treatment:** standard grade
- **Caption:** Brick ranch house under dark hail-season cloud cover; suburban OKC roofline with hip roof and mature trees, no faces or signage.

### story-3
- **Key:** `weather-ice-branches`
- **Section:** season-nov-feb (ice season, split layout right side)
- **Crop:** `object-position: 50% 40%` (branches in upper two-thirds, roof edge visible below)
- **Treatment:** standard grade; slightly cooler white balance to emphasize ice
- **Caption:** Ice-glazed tree branches overhanging a residential roof after a winter freeze; glazed limbs show the weight that brings trees down onto decking.

### detail-1
- **Key:** `material-shingle-texture`
- **Section:** season-jul-aug (heat + Class 4, split layout left side)
- **Crop:** `object-position: 50% 50%` (tight macro on shingle surface)
- **Treatment:** standard grade
- **Caption:** Close-up of architectural shingle granule texture showing impact-resistant mat density; matte finish and embedded granules visible in raking light.

### detail-2
- **Key:** `process-cleanup`
- **Section:** season-sep-oct (build season, grid card)
- **Crop:** `object-position: 50% 70%` (ground-level, magnet sweeper in foreground)
- **Treatment:** standard grade
- **Caption:** Magnetic nail sweeper passing over a freshly mowed lawn beside a completed roof replacement; no crew faces, no logos, just the tool and clean ground.

### detail-3
- **Key:** `process-ridge`
- **Section:** season-sep-oct (build season, grid card)
- **Crop:** `object-position: 50% 30%` (ridge line against sky, low angle)
- **Treatment:** standard grade
- **Caption:** Newly installed ridge cap along a hip roof peak against clear blue sky; clean nail lines and sealed tabs show finished craftsmanship.

## Rejections

No frames rejected: all selected keys are landscape, US residential, no faces toward camera, no readable logos, no house numbers, no commercial sites. All keys exist in `niches/roofer/media/manifest.json`. No key is reused as a hero by roofer-A or roofer-B (A uses hero-A*, B uses hero-B*).

## Notes for builder

- `hero-C1` is a placeholder; if the actual photo is weak on storm drama, swap to `hero-C3` (hail stones in palm) and adjust crop to `object-position: 50% 50%`. Note this in render check.
- All photos use the same grade filter defined in `03-system.md`; do not apply per-photo filters.
- Month ring SVG is drawn in CSS/SVG, not a photo; no media slot needed for it.