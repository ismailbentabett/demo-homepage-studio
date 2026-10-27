# Media Plan — plumber-A (Wrench & Wren)

## Hero
- **Key:** `hero-A1`
- **Section:** #hero (cinematic strip)
- **Crop:** `object-position: 50% 40%` (center on brass valve and copper pipe run)
- **Treatment:** Standard grade (`saturate(.82) contrast(1.06) sepia(.1) brightness(.98)`); optional multiply overlay `rgba(184,134,11,.08)` to unify copper tones with brass accent.
- **Caption:** Copper supply pipes and a brass gate valve in a warm basement utility area.

## Slots

### intro
- **Key:** `process-under-sink`
- **Section:** #intro (split layout right)
- **Crop:** `object-position: 50% 60%` (focus on hands and valve under sink)
- **Treatment:** Standard grade.
- **Caption:** Hands adjusting a shut-off valve beneath a kitchen sink.

### process-1
- **Key:** `process-wrench`
- **Section:** #process step 02 (Find the shut-off)
- **Crop:** `object-position: 50% 50%`
- **Treatment:** Standard grade.
- **Caption:** Pipe wrench positioned on a main shut-off valve.

### process-2
- **Key:** `tool-meter`
- **Section:** #process step 03 (Show the problem)
- **Crop:** `object-position: 50% 40%` (focus on gauge face)
- **Treatment:** Standard grade.
- **Caption:** Pressure gauge reading at a hose bib.

### process-3
- **Key:** `tool-copper-fittings`
- **Section:** #process step 04 (Price it)
- **Crop:** `object-position: 50% 50%`
- **Treatment:** Standard grade.
- **Caption:** Copper fittings and solder laid out on a workbench.

### process-4
- **Key:** `process-solder`
- **Section:** #process step 05 (Fix it)
- **Crop:** `object-position: 50% 50%`
- **Treatment:** Standard grade.
- **Caption:** Torch heating a copper pipe joint during soldering.

### process-5
- **Key:** `process-pex`
- **Section:** #process step 06 (Tag it)
- **Crop:** `object-position: 50% 50%`
- **Treatment:** Standard grade.
- **Caption:** PEX tubing connections with crimp rings in an open wall cavity.

### break
- **Key:** `home-basement`
- **Section:** #break (full-bleed accent band background)
- **Crop:** `object-position: 50% 70%` (lower third focus for text overlay readability)
- **Treatment:** Standard grade + multiply overlay `rgba(14,26,43,.4)` for contrast with white text on brass bg.
- **Caption:** Finished basement utility room with exposed ceiling joists and warm lighting.

### tool-shutoff
- **Key:** `equip-spigot`
- **Section:** #tools (Shut-off finder visual)
- **Crop:** `object-position: 50% 50%`
- **Treatment:** Standard grade.
- **Caption:** Outdoor spigot with frost-proof valve detail.

### tool-heater
- **Key:** `process-water-heater`
- **Section:** #tools (Water heater life check visual)
- **Crop:** `object-position: 50% 40%` (focus on tank label and anode port)
- **Treatment:** Standard grade.
- **Caption:** Tank water heater with visible serial number plate and drain valve.

### tool-pressure
- **Key:** `equip-prv`
- **Section:** #tools (Pressure check visual)
- **Crop:** `object-position: 50% 50%`
- **Treatment:** Standard grade.
- **Caption:** Pressure reducing valve installed on a main supply line.

### review-1
- **Key:** `home-kitchen-sink`
- **Section:** #reviews mosaic card 1
- **Crop:** `object-position: 50% 50%`
- **Treatment:** Standard grade.
- **Caption:** Stainless steel kitchen sink with faucet in natural light.

### review-2
- **Key:** `home-bathroom`
- **Section:** #reviews mosaic card 2
- **Crop:** `object-position: 50% 60%`
- **Treatment:** Standard grade.
- **Caption:** Bathroom vanity fixture with clean tile surround.

### area
- **Key:** `home-brick-midwest`
- **Section:** #area (service list header)
- **Crop:** `object-position: 50% 80%` (house lower, sky above for text)
- **Treatment:** Standard grade.
- **Caption:** Brick single-family house on a tree-lined Midwest street.

## Notes
- All keys verified present in `niches/plumber/media/manifest.json`.
- No photo reused across slots; hero key `hero-A1` is unique to this site (siblings use B/C prefixes).
- Manifest is in placeholder mode; all entries have `"placeholder": true`. Builder will render fallback frames until real assets are curated.
- No faces presented as owner; no readable signs, logos, plates or house numbers in selected keys per manifest metadata.
- Break photo uses darker overlay to ensure text contrast on t-accent tone.