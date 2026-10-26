# Media Plan — autotuneup-C (Thin Air Tune-Up)

## Hero
- **Key:** `hero-C1`
- **Section:** Hero (sticky photo, scrolling text)
- **Crop:** `object-position: 50% 40%` (adobe wall at sunset with car shadow centered)
- **Treatment:** Grade only (`saturate(0.8) contrast(1.1) sepia(0.12) brightness(0.95)`). No overlay; text sits beside photo in sticky layout.
- **Caption:** Adobe wall at dusk with a parked car's long shadow stretching across warm plaster.

## Break
- **Key:** `place-santa-fe`
- **Section:** Full-bleed break between story and proof
- **Crop:** `object-position: 50% 60%` (street-level adobe architecture)
- **Treatment:** Grade + multiply overlay `rgba(18,24,38,0.3)` for text legibility if caption overlaid.
- **Caption:** Santa Fe street at golden hour, adobe walls and turquoise trim catching late light.

## Story slots
- **story-1:** `season-dusty-hood` — Story band "7,450 ft · Eldorado Canyon Road". Crop `50% 30%`. Grade only. Caption: Red dust settled on a hood after a week of dirt-road driving to Eldorado.
- **story-2:** `parts-wiper-cracked` — Story band "8,200 ft · Ski Basin Turnoff". Crop `50% 50%`. Grade only. Caption: Sun-cracked wiper blade split along the rubber edge from high-desert UV exposure.
- **story-3:** `process-battery-test` — Story band "6,300 ft · Cerrillos Dust Bowl". Crop `50% 40%`. Grade only. Caption: Battery load tester clamped to terminals, reading visible but no brand logo.

## Detail slots
- **detail-1:** `process-cabin-filter` — Tools section (cabin filter swap demo). Crop `50% 50%`. Grade only. Caption: Dirty cabin filter pulled from housing, red dust visible in pleats.
- **detail-2:** `tool-tread-gauge` — Tools section (tire tread measurement). Crop `50% 60%`. Grade only. Caption: Tread depth gauge pressed into tire groove, numbers readable but generic.
- **detail-3:** `parts-spark-plugs` — Proof section (sample report detail). Crop `50% 40%`. Grade only. Caption: New spark plug beside a worn one, electrode gap difference visible.

## Gallery
- `process-oil-pour` — Gallery grid. Crop `50% 50%`. Grade only. Caption: Oil stream pouring into funnel, amber liquid against dark bay background.
- `process-tire-pressure` — Gallery grid. Crop `50% 40%`. Grade only. Caption: Tire pressure gauge held to valve stem, dial face generic.
- `season-snow-windshield` — Gallery grid. Crop `50% 30%`. Grade only. Caption: Windshield with frost and wiper streaks, winter morning light.
- `hands-keys` — Gallery grid. Crop `50% 50%`. Grade only. Caption: Hand holding car keys, fob generic, no logo visible.

## Notes
- All photos are placeholders per manifest; builder uses `[[img]]` macro with these keys.
- No faces, no car-maker logos, no license plates, no readable business signs in any frame.
- Hero photo is direction C's slot (`hero-C1`); not reused by sibling A or B.
- Weak spot: placeholder images lack real desert texture; critic will note stock feel. Mitigated by consistent grade and altitude-marker system that carries distinctiveness.