# Media Plan — pool-A (Tileline Pool Care)

## Hero

- **hero-A2**: Screened lanai pool in evening light with visible cage shadows and lit water surface. Crop `object-position: 50% 40%` to keep waterline tile visible at bottom-left for scrim text placement. Grade: night-water filter + duotone multiply `rgba(11,28,44,0.3)`. Caption: "Screened pool at dusk with lit waterline tile." Reads well under dark scrim with white type.

## Slots

- **break → waterline-tile**: Close-up of cobalt waterline tile band against clear water, shot from side angle showing grout lines and wet sheen. Full-bleed break between process and troubleshooter sections. Crop `object-position: 50% 60%` to center the tile band vertically. Grade: standard night-water filter. Caption: "Cobalt waterline tile showing grout detail and wet sheen."

- **process-1 → brushing**: Pool brush pushing along a plaster wall underwater, clear water, no face visible. Used in visit-log step "08:09 Brush". Crop `object-position: 30% 50%` to show brush contact point. Grade: standard. Caption: "Nylon brush working algae off plaster wall underwater."

- **process-2 → test-vials**: Comparator block with colored vials held over water surface, daylight or flash, readings legible. Used in "08:15 Test" step. Crop `object-position: 50% 40%` to keep color pads centered. Grade: standard. Caption: "Test vial comparator block showing pH and chlorine color match."

- **process-3 → chemicals**: Hands pouring measured powder into skimmer or return jet, no brand labels visible. Used in "08:22 Balance" step. Crop `object-position: 50% 50%`. Grade: standard. Caption: "Measured stabilizer added at return jet, no brand visible."

- **process-4 → baskets**: Skimmer basket being lifted out with leaves and debris, water dripping. Used in "08:02 Skim" step (paired with brushing). Crop `object-position: 50% 30%` to show basket contents. Grade: standard. Caption: "Skimmer basket cleared of oak leaves after overnight storm."

- **story-1 → cloudy-water**: Murky green-tinted pool water surface, no people, taken from deck level. Used in troubleshooter section as problem state. Crop `object-position: 50% 50%`. Grade: standard (do not over-correct clarity; the cloudiness is the point). Caption: "Cloudy water after afternoon thunderstorm, free chlorine low."

- **detail-1 → pump**: Variable-speed pump and motor on equipment pad, clean installation, no brand logos facing camera. Used in repair section. Crop `object-position: 40% 50%` to show capacitor housing. Grade: standard. Caption: "Variable-speed pump on concrete pad, capacitor housing accessible."

- **detail-2 → tampa-neighborhood**: Aerial or street-level view of Tampa subdivision with screened lanais visible, single-family homes, palm trees. Used in service area section. Crop `object-position: 50% 40%`. Grade: standard. Caption: "Tampa subdivision with screened lanai pools, typical service route."

## Rejections

No frames rejected: all manifest keys are placeholders approved for direction A, no faces presented as owner, no readable signs/logos/plates/house numbers, no resort infinity pools, no commercial sites. All slots map to residential Tampa context per facts.json.

## Notes for builder

- Hero video not used (family 1 with photo fallback); if video asset becomes available later, key would be `hero-video-A` but currently omitted.
- All photos use the same grade filter defined in 03-system.md; do not apply per-photo adjustments except object-position.
- Visit-card sticky component needs z-index above content but below mobile bar; shadow token from system applies.