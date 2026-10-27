# Media Plan — concrete-B

## Hero
- **Key:** `hero-B1`
- **Section:** hero (type-mask)
- **Crop:** `object-position: 50% 40%` (keep screed tool and wet sheen centered behind numerals)
- **Treatment:** shared grade (`saturate(.8) contrast(1.1) sepia(.12) brightness(.95)`); no overlay so the mask reads cleanly.
- **Caption:** Fresh concrete being screeded at dawn in a Mesa backyard; low sun rakes across the wet surface.

## Slots

### break — `desert-dawn`
- **Section:** break-photo (full-bleed visual pause after core-sample story)
- **Crop:** `object-position: 50% 60%` (horizon low, sky band carries amber tone)
- **Treatment:** shared grade only.
- **Caption:** Desert dawn light across a stucco house and fresh slab edge; long shadows show the pour started before sunrise.

### story-1 — `rebar`
- **Section:** core-sample-story (layer 3: steel)
- **Crop:** `object-position: 50% 50%` (tight on rebar grid and chairs)
- **Treatment:** shared grade.
- **Caption:** #4 rebar on chairs over compacted base, spaced 16 inches center-to-center.

### story-rv — `rv-pad`
- **Section:** rv-pad-sizer (tool context photo)
- **Crop:** `object-position: 30% 50%` (pad left third, gate clearance visible right)
- **Treatment:** shared grade.
- **Caption:** Six-inch RV pad with approach slope and side clearance for a fifth-wheel gate swing.

### detail-finish — `broom-finish`
- **Section:** finish-compare (default tab texture reference)
- **Crop:** `object-position: 50% 50%` (macro, fill frame)
- **Treatment:** shared grade.
- **Caption:** Broom finish texture close-up; linear grip pattern that stays walkable when wet.

### gallery
- `finished-driveway` — services / proof context. Crop `50% 70%`. Caption: Completed driveway extension with control joints and desert landscaping edge.
- `pool-deck` — services / proof context. Crop `50% 40%`. Caption: Cool-deck pool surface with knockdown texture; barefoot-safe in July heat.
- `exposed-aggregate` — services / proof context. Crop `50% 50%`. Caption: Exposed aggregate patio with washed pebble top and sealed surface.
- `stamped` — services / proof context. Crop `50% 50%`. Caption: Stamped concrete with stone-pattern release and integral color.
- `arizona-home` — service-area / local proof. Crop `50% 60%`. Caption: Arizona stucco home with new walkway and side-yard path.

## Notes
- All keys exist in `niches/concrete/media/manifest.json` (placeholder mode).
- No hero reuse: `hero-B1` is direction-B specific; siblings use A/C keys.
- No faces, logos, readable signs, or commercial sites in any frame.
- Photo grade applied uniformly via `.frame img` selector in design system.