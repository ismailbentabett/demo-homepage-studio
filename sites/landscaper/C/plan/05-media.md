# Media Plan — landscaper-C

## Hero
- **Key:** hero-C2
- **Section:** hero (arch-masked)
- **Crop:** `object-position: 50% 40%` — keeps brick path and ferns centered in arch
- **Treatment:** grade `saturate(.82) contrast(1.06) sepia(.12)` + multiply tint `rgba(212,168,85,.08)` + grain 5% opacity
- **Caption:** Shaded courtyard garden with brick path and holly ferns under live oaks

## Slots

### break
- **Key:** region-savannah-street
- **Section:** break-photo (full-bleed 21:9)
- **Crop:** `object-position: 50% 60%` — horizon low, moss canopy fills upper frame
- **Treatment:** grade + grain 5%, no overlay
- **Caption:** Spanish moss draping over a historic Savannah street at dusk

### story-1
- **Key:** hands-at-work
- **Section:** story-shade (split-story left photo)
- **Crop:** `object-position: 40% 50%` — hands centered, soil visible
- **Treatment:** grade only
- **Caption:** Gloved hands placing a shade plant into prepared soil around oak roots

### detail-1
- **Key:** plants-shade-south
- **Section:** plant-picker-tool output cards (optional background or inline)
- **Crop:** `object-position: 50% 30%` — foliage mass upper third
- **Treatment:** grade only
- **Caption:** Ferns and azaleas thriving in dappled shade beneath a tree canopy

### detail-2
- **Key:** material-stone
- **Section:** services-grid card accent or story margin detail
- **Crop:** `object-position: 50% 50%` — texture fills frame
- **Treatment:** grade only
- **Caption:** Weathered flagstone surface with moss between joints

### detail-3
- **Key:** detail-lighting
- **Section:** proof-reviews background accent or lighting service card
- **Crop:** `object-position: 60% 70%` — light fixture lower right, glow visible
- **Treatment:** grade only
- **Caption:** Low-voltage path light casting warm pool on brick at twilight

### process-1
- **Key:** process-planting
- **Section:** story-shade alternate or process strip
- **Crop:** `object-position: 45% 55%` — root ball and hands centered
- **Treatment:** grade only
- **Caption:** Hands setting a container shrub into a freshly dug bed

### process-2
- **Key:** process-mulch
- **Section:** services-grid mulch service card or break alternate
- **Crop:** `object-position: 50% 60%` — mulch texture foreground, shrubs behind
- **Treatment:** grade only
- **Caption:** Fresh pine straw mulch spread around foundation planting beds

### season-1
- **Key:** season-spring-bloom
- **Section:** season-planner-tool spring tab visual
- **Crop:** `object-position: 50% 40%` — bloom mass upper center
- **Treatment:** grade only
- **Caption:** Azaleas in full spring bloom against a shaded garden wall

### season-2
- **Key:** season-fall-leaves
- **Section:** season-planner-tool fall tab visual
- **Crop:** `object-position: 50% 70%` — leaf carpet lower frame
- **Treatment:** grade only
- **Caption:** Fallen oak leaves covering a lawn ready for seasonal cleanup

### gallery
- **Keys:** detail-bed-finished, tools-hand, crew-from-behind
- **Section:** optional gallery strip after proof or before contact
- **Crops:** detail-bed-finished `50% 50%`, tools-hand `40% 60%`, crew-from-behind `50% 40%`
- **Treatment:** grade only
- **Captions:** Finished planting bed with fresh mulch beside a house · Used garden fork and shears resting on soil · Landscaper from behind carrying mulch through a garden gate

## Notes
- All keys exist in manifest. No key reused as hero by sibling (A uses hero-A*, B uses hero-B*).
- hero-C2 chosen over hero-C1 (street scene too wide for arch mask) and hero-C3 (iron gate too cliché).
- Mid-green (#6B7F6A) never used as text background per contrast check.
- Placeholder mode: all src values are placeholder:// URLs; build will resolve when Pexels key available.