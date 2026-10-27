# Media Plan — hvac-A

## Hero
- **Key:** `hero-A1`
- **Section:** 1 (Hero)
- **Crop:** `object-position: 50% 40%` — condenser unit centered with block wall context visible at top third.
- **Treatment:** Universal grade filter (`saturate(.8) contrast(1.08) sepia(.12) hue-rotate(-2deg)`). No overlay; dusk ambient light carries the sodium warmth.
- **Caption:** Residential condenser beside a stucco block wall at desert dusk.

## Process Story Slots
- **Key:** `process-gauges` → Section 3 entry "Reading". Crop `object-position: 50% 50%`. Gauge manifold on copper lines, gloved hand from behind. Caption: Refrigerant gauges reading suction pressure on a split system.
- **Key:** `process-multimeter` → Section 3 entry "Cause". Crop `object-position: 40% 60%`. Multimeter probes on capacitor terminals. Caption: Multimeter testing run capacitor microfarads.
- **Key:** `process-coil-rinse` → Section 3 entry "Fixed" (visual variety swap). Crop `object-position: 50% 30%`. Hose rinsing condenser fins from above. Caption: Condenser coil rinse after dust season.
- **Key:** `process-drain-line` → Section 3 entry "Fixed" alternate. Crop `object-position: 60% 70%`. Clear PVC drain line with cleanout cap. Caption: Condensate drain line with added cleanout.

## Break Photo
- **Key:** `weather-desert-sunset`
- **Section:** 4 (Break)
- **Crop:** `object-position: 50% 60%` — horizon low, sky dominates for full-bleed atmosphere.
- **Treatment:** Same universal grade. No text overlay.
- **Caption:** Desert sunset over Las Vegas valley rooftops.

## Additional Slots (builder choice pool)
- `equip-condensers` → optional gallery or services illustration. Crop `50% 50%`. Two residential condensers side by side. Caption: Matched outdoor units in a desert yard.
- `equip-mini-split-head` → ductless service card accent. Crop `50% 40%`. Wall-mounted head in a garage. Caption: Ductless mini-split head mounted in a garage gym.
- `problem-frozen-lines` → symptom sorter visual. Crop `40% 50%`. Ice on copper suction line. Caption: Frozen evaporator coil from low airflow.
- `crew-kneeling` → process story alternate. Crop `50% 60%`. Tech kneeling beside unit from behind, no face. Caption: Technician checking outdoor unit components.
- `home-desert-stucco` → service area section accent. Crop `50% 40%`. Stucco home with gravel yard and block fence. Caption: Desert stucco home typical of the Las Vegas service area.
- `tool-copper-lines` → pricing section accent. Crop `50% 50%`. Brazed copper line set connection. Caption: Copper refrigerant line set ready for brazing.

## Rejected Frames
None from the approved manifest violate DEMO-RULES §5. All selected keys are placeholder-approved and contain no faces toward camera, no readable brands, no house numbers, no commercial sites.

## Notes for Builder
- The pinned hero photo must support GSAP ScrollTrigger pin + crop animation on desktop ≥640px. On mobile, it renders as a static image with the hero crop.
- Process story photos swap per entry via CSS class toggling driven by scroll position; all four images load eagerly within the pinned container.
- Universal grade applied via `img, [data-video]{filter:...}` in style.css; no per-image overrides needed.