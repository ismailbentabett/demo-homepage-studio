# Media Plan — mechanic-B (Plain Code Auto Repair)

## Hero
- **Key:** `hero-B1`
- **Section:** Hero (diagonal split lower-right)
- **Crop:** `object-position: 50% 40%` — engine bay centered on work-light pool
- **Treatment:** Grade per system (`saturate(0.7) contrast(1.1) brightness(0.85) sepia(0.05)`) + diagonal gradient overlay `linear-gradient(135deg, rgba(13,17,23,0.9) 0%, rgba(13,17,23,0.3) 100%)` for code text legibility
- **Caption:** Engine bay under a single work light, no car logos or readable plates

## Slots

### break
- **Key:** `place-montana-highway`
- **Section:** Full-bleed divider between tools and proof band
- **Crop:** `object-position: 50% 60%` — road horizon low, sky minimal
- **Treatment:** Grade + duotone multiply `#0D1117` at 40% opacity to match dark palette
- **Caption:** Montana highway at dusk, long straight grade toward the Rims

### story-1
- **Key:** `process-under-car`
- **Section:** Services story card #1 (Check engine light and codes)
- **Crop:** `object-position: 50% 70%` — tech's back and underside of car, no face
- **Treatment:** Standard grade
- **Caption:** Technician inspecting from below on a two-post lift, gloved hands only

### story-2
- **Key:** `parts-worn-pads`
- **Section:** Services story card #2 (Brakes and ABS)
- **Crop:** `object-position: 50% 50%` — pads centered on bench
- **Treatment:** Standard grade
- **Caption:** Worn brake pad beside a new one on a clean bench, thickness visible

### story-3
- **Key:** `tool-flashlight`
- **Section:** Services story card #3 (Electrical diagnosis)
- **Crop:** `object-position: 30% 50%` — flashlight beam angled into engine bay
- **Treatment:** Standard grade
- **Caption:** Flashlight beam across an engine bay, no readable labels

### story-4
- **Key:** `process-road-test`
- **Section:** Services story card #4 (Drivability problems)
- **Crop:** `object-position: 50% 40%` — hands on steering wheel, dashboard blurred
- **Treatment:** Standard grade
- **Caption:** Hands on a steering wheel during a road test, no instrument cluster readable

### detail-1
- **Key:** `parts-alternator`
- **Section:** Services story card #5 (Cooling and heating / electrical)
- **Crop:** `object-position: 50% 50%`
- **Treatment:** Standard grade
- **Caption:** Alternator on a bench, copper windings visible

### detail-2
- **Key:** `parts-strut`
- **Section:** Services story card #6 (Suspension and alignment checks)
- **Crop:** `object-position: 50% 30%`
- **Treatment:** Standard grade
- **Caption:** Strut assembly standing upright, spring and mount visible

### detail-3
- **Key:** `parts-ball-joint`
- **Section:** Services story card #7 (Wheel bearings and CV axles)
- **Crop:** `object-position: 50% 50%`
- **Treatment:** Standard grade
- **Caption:** Ball joint with grease fitting, worn boot visible

### detail-4
- **Key:** `tool-torque-wrench`
- **Section:** Services story card #8 (Road trip inspection)
- **Crop:** `object-position: 40% 50%`
- **Treatment:** Standard grade
- **Caption:** Torque wrench on a workbench, dial face not readable

### gallery
- **Keys:** `process-wheel-off`, `process-coolant`, `process-belt`, `hands-pointing-part`
- **Section:** Optional gallery after reviews (if builder includes it)
- **Crop:** All `object-position: 50% 50%`
- **Treatment:** Standard grade
- **Captions:**
 - `process-wheel-off`: Wheel removed at the hub, lug nuts visible
 - `process-coolant`: Coolant reservoir cap off, fluid level visible
 - `process-belt`: Serpentine belt path around pulleys
 - `hands-pointing-part`: Gloved hand pointing at a worn component on a bench

## Rejections
No frames rejected — all selected keys are free of faces, car-maker logos, readable plates, house numbers, commercial signage, and wrong-region cues. All are residential-service appropriate for Billings MT.

## Notes for builder
- Hero photo `hero-B1` is a placeholder; the diagonal clip-path must be applied in CSS, not baked into the image.
- The break photo needs the duotone multiply overlay as a pseudo-element or CSS filter combo to avoid washing out the dark palette.
- All gallery images are optional; if omitted, the section collapses cleanly.