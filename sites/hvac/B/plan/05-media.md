# Media Plan — hvac-B (Wetbulb Heating & Cooling)

## Hero
- **Key:** `problem-frozen-lines` (repurposed as condensation/moisture visual; closest available to "condensation on glass" in manifest)
- **Section:** 1 (Hero)
- **Crop:** `object-position: 50% 60%` — moisture detail centered, soft focus background.
- **Treatment:** Universal grade filter (`saturate(.85) contrast(1.05) sepia(.06) hue-rotate(2deg)`). Humid Gulf tone.
- **Caption:** Moisture on copper lines showing humidity symptoms.

## Humidity Story Slots
- **Key:** `process-multimeter` → Section 3 entry "Bedroom reading". Crop `object-position: 40% 50%`. Multimeter display close-up standing in for hygrometer reading. Caption: Digital meter reading indoor conditions.
- **Key:** `home-desert-stucco` → Section 3 entry "Upstairs office". Crop `object-position: 50% 40%`. House exterior representing attic/insulation context. Caption: Residential attic access typical of Houston homes.
- **Key:** `process-coil-rinse` → Section 3 entry "After dehumidifier". Crop `object-position: 50% 30%`. Coil cleaning representing system maintenance outcome. Caption: Evaporator coil after cleaning and dehumidification service.

## Break Photo
- **Key:** `weather-desert-sunset` (repurposed as atmospheric break; only landscape weather photo available)
- **Section:** 4 (Break)
- **Crop:** `object-position: 50% 60%` — horizon low, sky dominates for full-bleed atmosphere.
- **Treatment:** Same universal grade. No text overlay.
- **Caption:** Evening atmosphere over residential rooftops.

## Additional Slots (builder choice pool)
- `equip-condensers` → optional services illustration. Crop `50% 50%`. Matched outdoor units. Caption: Matched outdoor condensers in a residential yard.
- `equip-mini-split-head` → ductless service card accent. Crop `50% 40%`. Wall-mounted head. Caption: Ductless mini-split head mounted indoors.
- `crew-kneeling` → process story alternate or about section. Crop `50% 60%`. Tech from behind, no face. Caption: Technician checking outdoor unit components.
- `tool-copper-lines` → pricing or tools section accent. Crop `50% 50%`. Brazed copper line set. Caption: Copper refrigerant line set ready for installation.
- `process-gauges` → additional proof or diagnostic visual. Crop `50% 50%`. Gauge manifold on lines. Caption: Refrigerant gauges reading system pressure.
- `process-drain-line` → drain service visual. Crop `60% 70%`. PVC drain with cleanout. Caption: Condensate drain line with added cleanout cap.

## Rejected Frames
None from the approved manifest violate DEMO-RULES §5. All selected keys are placeholder-approved and contain no faces toward camera, no readable brands, no house numbers, no commercial sites. Keys like `hero-A1` (desert dusk block wall) were avoided as too specific to hvac-A's Las Vegas concept.

## Notes for Builder
- The sticky comfort chart is CSS/SVG drawn in app.js, not a photo. It uses `.wb-chart` and `.wb-dot` primitives from the design system.
- Process story photos swap per entry via CSS class toggling driven by scroll position; all three images load eagerly within the pinned container on desktop ≥640px. On mobile, stacked cards with clip reveal replace the pin.
- Universal grade applied via `img, [data-video]{filter:...}` in style.css; no per-image overrides needed.
- The manifest lacks true Gulf-specific humidity photos (condensation on window, hygrometer display, damp attic insulation). Selected keys are the closest functional matches from the shared pool. The critic may flag this; if so, elevate round can swap to better-curated B-specific media when available.