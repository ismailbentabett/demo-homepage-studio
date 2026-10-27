
## 2026-10-27 placeholder repair (Wikimedia Commons pool)

Replaced in place (same key):
- hero-A1 <- oc00056353090 (pool/process-drain-plug): small car on a lift in a bright bay, mechanic seen from behind; wide 16:9, matches A1 "car in a sunlit bay".
- hero-B1 <- oc00180726501: blue car interior, wheel framing the gauges; no readable logo (Buick frame rejected for its wheel badge).
- process-oil-pour <- oc00054361166: golden oil stream, gloved hand, no label (Citroën-badge frame rejected).
- process-dipstick <- oc00116757560: hand wiping a dipstick, no face.
- process-drain-plug <- oc00177223379: oil draining into a catch pan (motorcycle engine, reads as generic sump).
- process-battery-test <- oc00154423822: gloved hand on a battery tester, face out of frame.
- process-coolant-pour <- oc00055439031: coolant temperature gauge (weak: no pour in pool; alt says gauge honestly).
- process-wiper-swap <- oc00002941182: wiper blade on a windshield (not a swap in progress).
- place-reno-desert <- oc00046413673: Nevada ridge over sagebrush (road-at-sunset frame rejected for photographer watermark).
- place-waiting-coffee <- oc00079346304: empty waiting area, no people, no coffee.

Skipped (still placeholder): hands-keys (only frame is a child's hand at the ignition), parts-spark-plugs (antique museum plugs with readable sign), process-tire-off (pool is car-show / classic-car / train frames), place-utah-canyon, process-cabin-filter, process-tire-pressure, tool-tread-gauge (no pool candidates).

## 2026-10-27: placeholder-stub replacement pass

Pool sheets regenerated and every candidate for these keys looked at full size. Replaced in place (approved by the orchestrator):

| Key | Candidate | Why |
|---|---|---|
| process-tire-off | oc00058857987 | Wheel off a red hatchback on a floor jack, cross wrench on gravel: a real rotation step, no plate, no logo, no people. |
| process-tire-pressure | oc00030618180 | Tight hands-only shot of a pencil gauge on the valve stem; no uniform in frame, sidewall lettering cropped and unreadable. |
| process-cabin-filter | SKIPPED | Candidates: a house furnace filter (wrong job), an engine bay with a FORD grille, a Panasonic purifier filter with label text. None is a cabin filter. |
| parts-spark-plugs | SKIPPED | Only candidate is a museum case of antique plugs with a readable brand ("J-M Mezger") and a Cyrillic sign; not "worn plug, new plug". |
| hands-keys | SKIPPED | Only candidate is a child's hand at a car ignition, not keys on a service counter. |
| tool-tread-gauge | SKIPPED | No candidates; `--slot --more --force` refetch hit Openverse 500 / Commons HTTP 429, nothing downloaded. |
| place-utah-canyon | SKIPPED | No candidates; refetch timed out, nothing downloaded. |

Rejected on sight: every other tire-pressure frame (military uniforms), tire-off oc00095156134 (race livery and sponsor decals), oc00025112040 (readable brand bottles and machine labels).
Skipped keys stay as placeholder stubs: they need drawings or a later fetch, not a forced photo.
