# Media Plan — electrician-B (Torque & Tag Electric)

## Hero
- **Key:** `hero-B1`
- **Section:** hero (mosaic spine center + surrounding tiles)
- **Crop:** `object-position: 50% 40%` — dark panel with neat wiring centered; breaker handles visible in upper third.
- **Treatment:** Global grade (`saturate(.8) contrast(1.1) brightness(.92) sepia(.05) hue-rotate(-2deg)`). No overlay; the mosaic grid lines are drawn via CSS on top.
- **Caption:** Charcoal panel interior with labeled breaker handles and neat copper wiring, shot from straight-on at eye level.

## Slots

### break
- **Key:** `home-patio-lights`
- **Section:** break (full-bleed between services and generator-sizer)
- **Crop:** `object-position: 50% 60%` — low-voltage path lights along a stone patio edge, live oaks above, dusk sky.
- **Treatment:** Global grade only. Warm enough to read as evening but cooled by the grade to match charcoal palette.
- **Caption:** Low-voltage path lights along a stone patio under live oaks at dusk.

### story-1
- **Key:** `process-panel-work`
- **Section:** services (circuit rail background texture or inline detail)
- **Crop:** `object-position: 30% 50%` — hands torquing a lug inside an open panel, label sheet visible at left edge.
- **Treatment:** Global grade. Slight vignette to focus on hands and lug.
- **Caption:** Torque screwdriver tightening a lug inside an open residential panel, label sheet at left.

### detail-lug
- **Key:** `tool-labels`
- **Section:** hero mosaic tile + services circuit detail
- **Crop:** `object-position: 50% 50%` — typed circuit labels on a white sheet, sharp focus.
- **Treatment:** Global grade. High contrast preserved so text reads as graphic element.
- **Caption:** Typed circuit schedule labels on white paper, sharp focus on text.

### detail-wire
- **Key:** `tool-wire-spools`
- **Section:** hero mosaic tile
- **Crop:** `object-position: 50% 50%` — copper wire spools stacked, colored insulation visible.
- **Treatment:** Global grade. Copper tones warmed slightly by sepia component.
- **Caption:** Copper wire spools with colored insulation stacked on a workbench.

### ranch-dusk
- **Key:** `hero-B3`
- **Section:** hero mosaic tile
- **Crop:** `object-position: 50% 70%` — 1960s San Antonio ranch house under live oaks, warm evening light, no people.
- **Treatment:** Global grade. Evening warmth retained but desaturated to match charcoal palette.
- **Caption:** 1960s San Antonio ranch house under live oaks at dusk, warm evening light.

### generator-stone
- **Key:** `equip-generator`
- **Section:** break alternative or generator-sizer background
- **Crop:** `object-position: 40% 50%` — standby generator beside a stone wall, no readable brand.
- **Treatment:** Global grade. Stone texture preserved; metal housing neutralized.
- **Caption:** Standby generator unit installed beside a limestone wall, no branding visible.

### detail-ev-charger
- **Key:** `equip-ev-charger`
- **Section:** ev-load (split-image right half)
- **Crop:** `object-position: 60% 40%` — Level 2 charger mounted on garage wall, cable coiled, no car.
- **Treatment:** Global grade. Garage concrete and drywall neutral; charger body reads as equipment not product shot.
- **Caption:** Level 2 EV charger mounted on a garage drywall surface, cable coiled below.

### gallery
Keys in order of appearance:

1. **`process-outlet`** — Section: gallery row 1. Crop: `object-position: 50% 50%`. Treatment: global grade. Caption: GFCI outlet being tested with a plug-in tester, indicator lights visible.
2. **`equip-surge`** — Section: gallery row 1. Crop: `object-position: 50% 40%`. Treatment: global grade. Caption: Whole-home surge protector mounted at the main panel, status LED lit.
3. **`home-kitchen-lights`** — Section: gallery row 2. Crop: `object-position: 50% 30%`. Treatment: global grade. Caption: Kitchen pendant lights over an island, warm bulbs, no people.
4. **`problem-burned-outlet`** — Section: gallery row 2. Crop: `object-position: 50% 50%`. Treatment: global grade. Caption: Scorched two-prong outlet faceplate showing heat damage, no hand touching.

## Rejections
- All `hero-A*` and `hero-C*` keys: belong to sibling directions.
- `home-columbus-brick`, `home-kc-bungalow`: wrong region (San Antonio site).
- `crew-van`, `crew-at-work`: faces or implied owner presentation risk; brief says no faces toward camera.
- `weather-storm`, `weather-outage`: dramatic weather reads as fear-based; brief §4 bans it.
- `problem-old-fuse-box`, `problem-knob-tube`: fuse boxes and knob-and-tube are Columbus/KC artifacts, not San Antonio aluminum-wiring context.

## Notes for builder
- Hero mosaic uses 6 tiles: `hero-B1` (center), `detail-lug`, `detail-wire`, `ranch-dusk`, `generator-stone`, `process-panel-work`. Arrange as 2 columns × 3 rows with center spine reserved for h1.
- All photos use the same global grade defined in `plan/03-system.md`. Do not add per-photo filters.
- No photo appears twice. Gallery keys are distinct from hero/slot keys.
- Placeholder mode: all src values resolve to local placeholders. Build will not fail on missing Pexels files.