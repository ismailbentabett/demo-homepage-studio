# Media Plan — general-C (Switchback Building Co.)

## Hero

- **Key:** `hero-C1`
- **Section:** Hero (above fold)
- **Crop:** `object-position: 50% 40%` — keeps ridge line in upper third for headline placement
- **Treatment:** Photo grade (`saturate(.82) contrast(1.06) sepia(.06) hue-rotate(-2deg)`); deep slate scrim on left 60% at ≥900px per LEARNINGS §1; SVG topo contour overlay drawn via app.js intro animation
- **Caption:** Steep residential lot with layered mountain ridges behind, showing the terrain context for hillside construction

## Slots

### break
- **Key:** `region-asheville-mountains`
- **Section:** Full-bleed break between services and story
- **Crop:** `object-position: 50% 60%` — emphasizes valley floor and ridge layers
- **Treatment:** Photo grade only; no scrim (this is a visual pause, not text-bearing)
- **Caption:** Blue Ridge layered ridges at mid-morning light, showing the slope context of Asheville building sites

### story-1
- **Key:** `process-footings`
- **Section:** Story band 1 (river-level / foundation)
- **Crop:** `object-position: 50% 70%` — focuses on footing formwork at ground level
- **Treatment:** Photo grade; plan-to-build wipe overlay via `--sw-p` clip-path in scroll story
- **Caption:** Stepped concrete footings being formed on a sloped lot, showing how foundations follow the terrain

### story-2
- **Key:** `process-framing`
- **Section:** Story band 2 (mid-slope / structure)
- **Crop:** `object-position: 50% 50%` — centered on wall framing against open sky
- **Treatment:** Photo grade; same wipe treatment as story-1
- **Caption:** Wall framing rising on a hillside addition, with temporary bracing visible

### story-3
- **Key:** `process-drywall`
- **Section:** Story band 3 (ridge-level / finish)
- **Crop:** `object-position: 50% 40%` — shows ceiling and upper wall planes
- **Treatment:** Photo grade; wipe completes to full photo at end of story
- **Caption:** Drywall panels being hung on an interior wall, fastener lines visible

### detail-kitchen
- **Key:** `detail-kitchen-finished`
- **Section:** Services grid (Kitchens card)
- **Crop:** `object-position: 50% 50%`
- **Treatment:** Photo grade; frame with contour-line top border
- **Caption:** Modest mountain kitchen with open shelving and window facing trees, realistic budget finishes

### detail-bath
- **Key:** `detail-bath-finished`
- **Section:** Services grid (Bathrooms card)
- **Crop:** `object-position: 50% 45%`
- **Treatment:** Photo grade; contour-line frame
- **Caption:** Tiled bathroom with glass shower enclosure and warm lighting, residential scale

### detail-porch
- **Key:** `detail-porch`
- **Section:** Services grid (Porches card)
- **Crop:** `object-position: 50% 55%` — emphasizes column bases and stone piers
- **Treatment:** Photo grade; contour-line frame
- **Caption:** Rebuilt front porch with tapered wood columns on stone piers, Craftsman proportions

### detail-adu
- **Key:** `detail-adu`
- **Section:** Services grid (ADUs card)
- **Crop:** `object-position: 50% 50%`
- **Treatment:** Photo grade; contour-line frame
- **Caption:** Small detached backyard cottage with metal roof and simple siding, one-story scale

### detail-addition
- **Key:** `detail-addition-exterior`
- **Section:** Services grid (Additions card)
- **Crop:** `object-position: 50% 45%`
- **Treatment:** Photo grade; contour-line frame
- **Caption:** House with new side addition visible, matching roofline and siding, modest residential scale

### tools-hands
- **Key:** `hands-at-work`
- **Section:** Lot & slope check tool intro
- **Crop:** `object-position: 50% 50%`
- **Treatment:** Photo grade; small square frame beside checklist
- **Caption:** Hands holding a pencil against a stud, marking a measurement line

### tools-tape
- **Key:** `tools-tape-level`
- **Section:** Timeline builder tool header
- **Crop:** `object-position: 50% 50%`
- **Treatment:** Photo grade; inline with tool label
- **Caption:** Tape measure and spirit level resting on framing lumber, used tools with worn markings

### material-lumber
- **Key:** `material-lumber`
- **Section:** Estimator sketch background texture
- **Crop:** `object-position: 50% 60%`
- **Treatment:** Photo grade + opacity 0.15 as subtle texture behind SVG sketch
- **Caption:** Stacked framing lumber on a residential site, end grain visible

### region-craftsman
- **Key:** `region-asheville-craftsman`
- **Section:** Proof / reviews band background accent
- **Crop:** `object-position: 50% 50%`
- **Treatment:** Photo grade; duotone multiply with #1B2838 at 40% opacity for muted backdrop
- **Caption:** Arts and Crafts bungalow with stone pier foundation and deep eaves, Asheville neighborhood context

### crew
- **Key:** `crew-from-behind`
- **Section:** Footer / about band
- **Crop:** `object-position: 50% 40%`
- **Treatment:** Photo grade; contour-line bottom border
- **Caption:** Carpenters seen from behind while framing, hard hats and tool belts, no faces visible

## Notes for builder

- All photos are placeholders in manifest; when real Pexels assets arrive, re-run contact-sheet approval.
- No photo shows a face presented as owner, a readable sign, logo, licence plate or house number.
- No "before/after" pairings; all process shots stand alone with descriptive captions.
- Hero photo may be weak if placeholder lacks slope context; if so, swap to `hero-C2` or `hero-C3` after reviewing approved contact sheets. Note this risk for critic.
- Signal green (#5E7D5E) appears only as map highlight color in ZIP checker and icon fills, never as text.