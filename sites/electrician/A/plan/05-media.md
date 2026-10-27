# Media Plan — electrician-A (Lineside Electric)

## Hero
- **Key:** `hero-A1`
- **Section:** 1 (Hero)
- **Crop:** `object-position: 60% 40%` — keeps the panel label centered in the right-offset frame while leaving left space for headline overlap.
- **Treatment:** Cool teal grade (`saturate(.8) contrast(1.08) hue-rotate(-4deg)`). No overlay; the offset frame and copper line provide separation.
- **Caption:** Clean labeled breaker panel with open door in daylight basement.

## Slots

### break
- **Key:** `process-wire-strip`
- **Section:** 5 (Break)
- **Crop:** `object-position: 50% 50%`
- **Treatment:** Same cool grade + dark overlay `rgba(9,28,32,.4)` for caption contrast.
- **Caption:** Stripped wire ends showing copper conductors before termination.

### story-1
- **Key:** `process-panel-work`
- **Section:** 2 (Services Main) — optional detail card or background texture if builder needs it.
- **Crop:** `object-position: 40% 30%`
- **Treatment:** Cool grade only.
- **Caption:** Neatly dressed wires landing on breaker lugs inside a modern panel.

### story-2
- **Key:** `process-outlet`
- **Section:** 4 (Services Circuits) — supports GFCI/outlet update cards.
- **Crop:** `object-position: 50% 60%`
- **Treatment:** Cool grade only.
- **Caption:** GFCI receptacle being tested with a plug-in tester.

### detail-panel
- **Key:** `equip-surge`
- **Section:** 2 (Services Main) — surge protector card illustration.
- **Crop:** `object-position: 50% 40%`
- **Treatment:** Cool grade only.
- **Caption:** Whole-home surge protector mounted beside a main panel.

### detail-ev
- **Key:** `equip-ev-charger`
- **Section:** 6 (Tool EV Load) — charger photo beside tool output.
- **Crop:** `object-position: 30% 50%`
- **Treatment:** Cool grade only.
- **Caption:** Level 2 EV charger mounted on a garage wall with cable coiled.

### detail-gfci
- **Key:** `equip-gfci`
- **Section:** 4 (Services Circuits) — GFCI card.
- **Crop:** `object-position: 50% 50%`
- **Treatment:** Cool grade only.
- **Caption:** White GFCI outlet with test and reset buttons visible.

### detail-two-prong
- **Key:** `equip-two-prong`
- **Section:** 4 (Services Circuits) — two-prong options tab.
- **Crop:** `object-position: 50% 50%`
- **Treatment:** Cool grade only.
- **Caption:** Old two-prong ungrounded outlet in a plaster wall.

### home-1
- **Key:** `home-columbus-brick`
- **Section:** 8 (Service Area) — map companion photo.
- **Crop:** `object-position: 50% 70%`
- **Treatment:** Cool grade only.
- **Caption:** Brick Columbus home with front porch and mature trees.

### home-2
- **Key:** `home-kitchen-lights`
- **Section:** 4 (Services Circuits) — lighting card support.
- **Crop:** `object-position: 50% 30%`
- **Treatment:** Cool grade only.
- **Caption:** Kitchen pendant lights over an island at dusk.

### problem-1
- **Key:** `problem-burned-outlet`
- **Section:** 3 (Tool Panel ID) — diagnostic context.
- **Crop:** `object-position: 50% 50%`
- **Treatment:** Cool grade only.
- **Caption:** Scorched outlet faceplate showing heat damage.

### problem-2
- **Key:** `problem-old-fuse-box`
- **Section:** 3 (Tool Panel ID) — fuse panel option.
- **Crop:** `object-position: 50% 40%`
- **Treatment:** Cool grade only.
- **Caption:** Old grey fuse box with Edison-base fuses visible.

### tool-belt
- **Key:** `tool-labels`
- **Section:** 7 (Proof) — background texture or review card accent.
- **Crop:** `object-position: 50% 50%`
- **Treatment:** Cool grade only.
- **Caption:** Printed circuit labels and marker pen on a workbench.

## Notes
- All keys exist in `niches/electrician/media/manifest.json`.
- No photo used twice. Hero key `hero-A1` is unique to this site (siblings B/C use hero-B*/hero-C* keys).
- All captions describe the frame content only; no "our work", no "before/after", no invented jobs.
- Placeholder mode: actual images will be swapped by media curator later; grades and crops are set now so the builder can proceed.