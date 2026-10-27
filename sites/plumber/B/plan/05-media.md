# Media Plan — plumber-B (Ledgerline Plumbing)

## Hero
- **Key:** `hero-B1`
- **Section:** #hero (right half of 50/50 split)
- **Crop:** `object-position: 50% 40%` — keep the pipe joint centered in the right column
- **Treatment:** Photo grade (saturate .8, contrast 1.1, sepia .05, hue-rotate -4deg); steel-blue duotone overlay at 15% opacity via multiply blend to unify with ledger rule; footage counter overlay in IBM Plex Mono positioned bottom-right
- **Caption:** Sewer camera view inside a clay lateral showing root intrusion at a joint

## Slots

### story-1
- **Key:** `process-drain-snake`
- **Section:** #camera-story step 1 ("Run the camera")
- **Crop:** `object-position: 30% 50%` — focus on the reel and cable entering the cleanout
- **Treatment:** Photo grade only; no overlay
- **Caption:** Drain cable reel beside an open cleanout with the camera head visible

### story-2
- **Key:** `process-solder`
- **Section:** #camera-story step 3 ("Repair at the break")
- **Crop:** `object-position: 60% 40%` — hands and torch centered, background blurred by depth
- **Treatment:** Photo grade only
- **Caption:** Copper fitting being soldered after a spot repair on a supply line

### break
- **Key:** `home-hillside-row`
- **Section:** #break (full-bleed visual rest between dark sections)
- **Crop:** `object-position: 50% 70%` — keep the rooflines in the lower third, sky in upper
- **Treatment:** Photo grade + steel-blue duotone at 25% opacity; slight vignette to frame edges
- **Caption:** Pittsburgh row houses on a hillside at dusk with warm window light

### detail-valve
- **Key:** `equip-prv`
- **Section:** #services or #tools (pressure regulator detail)
- **Crop:** `object-position: 50% 50%`
- **Treatment:** Photo grade only
- **Caption:** Pressure reducing valve on a copper supply line with gauge attached

### detail-heater
- **Key:** `equip-tankless`
- **Section:** #services (water heater entry)
- **Crop:** `object-position: 40% 30%` — show the wall-mount unit and venting
- **Treatment:** Photo grade only
- **Caption:** Tankless water heater mounted on a basement wall with stainless vent

### detail-sump
- **Key:** `equip-sump`
- **Section:** #services (backwater valve / sump entry)
- **Crop:** `object-position: 50% 60%` — pit and pump visible, floor context
- **Treatment:** Photo grade only
- **Caption:** Sump pump in a basement pit with check valve and discharge pipe

### tool-pipe
- **Key:** `tool-copper-fittings`
- **Section:** #tools (pipe material identifier result illustration)
- **Crop:** `object-position: 50% 50%`
- **Treatment:** Photo grade only
- **Caption:** Assorted copper fittings and elbows arranged on a workbench

### tool-meter
- **Key:** `tool-meter`
- **Section:** #tools (pressure check result illustration)
- **Crop:** `object-position: 50% 40%` — dial face readable
- **Treatment:** Photo grade only
- **Caption:** Water pressure gauge reading on a hose bib test port

### problem-leak
- **Key:** `problem-leak`
- **Section:** #services or #reviews (illustrating a leak finding)
- **Crop:** `object-position: 50% 60%`
- **Treatment:** Photo grade only
- **Caption:** Water dripping from a copper pipe joint onto a basement floor

### problem-scale
- **Key:** `problem-scale`
- **Section:** #services (galvanized repipe entry)
- **Crop:** `object-position: 50% 50%`
- **Treatment:** Photo grade only
- **Caption:** Mineral scale buildup inside a cut section of galvanized pipe

### area
- **Key:** `home-brick-midwest`
- **Section:** #area (service area visual)
- **Crop:** `object-position: 50% 80%` — house base and porch visible, sky minimized
- **Treatment:** Photo grade + steel-blue duotone at 20%
- **Caption:** Brick Midwest home with covered porch and mature trees

## Notes for builder
- All photos are placeholders; actual Pexels assets will be fetched during build if available.
- No faces presented as owner; all crew shots are hands/back only.
- No readable signs, plates, or logos in any selected key.
- Hero-B1 is unique to plumber-B; siblings use hero-A1 and hero-C1.
- Break photo uses duotone to maintain dark-led tone rhythm without introducing a new color band.
- Story images support the camera/lateral narrative; process-solder stands in for trenchless repair detail since no dedicated trenchless key exists in manifest.