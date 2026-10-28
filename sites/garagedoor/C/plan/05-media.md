# garagedoor-C · Media plan

**BLOCKER (2026-10-28 00:51 UTC):** `niches/garagedoor/media/manifest.json` holds only 5 *draft* photos (hero-A1..A3, hero-B1..B2), no hero-C*, no shared slots, no approved contact sheet; the curation lock is from 23:13 and the pool has stopped at 5 slots. The keys below are the brief §7 shot-list slot names (the manifest names keys by slot, as hero-A1 shows). **Provisional:** once curation lands, re-check each key exists and is approved; drop a slot that has no honest frame rather than fill it. Must not use hero-A*/B* (sibling heroes). If hero-C1 is weak or missing, use hero-C3 as hero and move break to home-nebraska.

| key | section | crop | treatment | caption |
|---|---|---|---|---|
| hero-C1 | hero, inside the "−8°" type mask (and the 320px fallback frame below h1) | `object-position: 38% 55%` (light spill from the open door inside the numerals) | grade + no overlay (keep the amber spill) | Door rising at blue hour, light on fresh snow |
| hero-C3 | `.break` full-bleed 21:9 after the story, t-deep frame, frost edge --cold 1 | `50% 60%` | grade + multiply #0F2340 .22 | A two-car garage after snowfall, windows lit |
| finished-dark-door | story 104°F scene (opener heat) | `50% 45%` | grade, warm, no overlay | A flush dark door in summer daylight |
| weather-hail | story 88°F scene | `50% 50%` | grade | Hailstones scattered on a driveway |
| material-seal | story 34°F scene | `50% 70%` | grade + multiply .22 | Bottom rubber meeting the concrete slab |
| process-spring-2 | story −8°F scene, next to the "don't touch the spring" stop line | `50% 40%` | grade + multiply .22 | A torsion spring with a gap in the coil |
| hero-C2 | services card "Weatherstripping" / frozen door, 4:5 | `50% 50%` | grade only (frost reads white) | Frost crystals on a steel panel |
| weather-hail-dents | hail dent check tool, beside inputs | `50% 50%` | grade | Dimples left by hail on painted metal |
| process-cable | services: cables & track | `50% 50%` | grade | Lift cable wound on its drum |
| process-sensor | services: sensors & safety reverse | `50% 70%` | grade | Photo-eye sensor on its bracket near the floor |
| process-opener | services: opener install | `50% 40%` | grade | Opener head and rail on the garage ceiling |
| material-insulation | services: insulated door | `50% 50%` | grade | Foam core inside a door section |
| home-nebraska | ZIP / area band | `50% 55%` | grade + multiply .22 | A newer suburban house with a wide lawn |
| gallery: finished-white-door, finished-carriage, process-rollers | door styles strip (optional, 3 frames 4:5) | `50% 50%` | grade | White raised-panel door on a brick ranch · Carriage-style door with windows · A roller seated in its track |

Reject on arrival: faces, readable plates/house numbers/signs/brand logos on openers, mountains or palm trees (wrong region), commercial roll-up doors.

## Build round 0 decision (builder, 2026-10-27)
The manifest still holds only hero-A1..A3 and hero-B1..B2 (sibling heroes, drafts). None of the keys above exist, so `src/media.json` (and `plan/media.json`) now carry **no photo slots**. Photos come in the fix round, once hero-C*/shared slots are curated and approved.
- The "−8°" type mask is filled with a **drawn frosted blue-hour scene** (inline SVG: gradient sky, snow ground, house silhouette, a half-raised door spilling amber light, feTurbulence frost overlay cleared from the centre on load).
- The story stage uses a drawn door elevation (springs, tracks, panels, seal) whose state changes per reading, instead of four photos.
- Known side effect: `tools/build.mjs` falls back to the manifest's first photo (hero-A1) for `og.jpg` only, because no hero slot exists (it prints a draft warning). Not shown on the page; resolves when hero-C lands.
