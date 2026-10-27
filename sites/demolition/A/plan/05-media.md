# Media Plan — demolition-A

All keys verified in niches/demolition/media/manifest.json. No key reused. Hero unique to demolition-A.

## hero
- Key: hero-A1
- Section: 1 (hero, pinned sticky photo)
- Crop: object-position 50% 35% (keep upper cabinets visible for first peel layer)
- Treatment: base grade saturate(.8) contrast(1.08) sepia(.1) brightness(.92); CSS mask layers keyed to scroll statements (cabinets→tile→plaster). No overlay (t-deep bg provides contrast).
- Caption: Gutted Highland Square kitchen with plaster-on-lath walls exposed to the stud bay, plastic sheeting across the dining doorway.

## slots

### process-containment-zipper
- Section: 3 (process-containment, left frame)
- Crop: object-position 50% 50%
- Treatment: base grade; no overlay.
- Caption: Plastic dust wall with zipper door taped into a kitchen doorway, work light glowing behind the poly.

### process-water-valve
- Section: 4 (process-structural, right frame)
- Crop: object-position 40% 40% (focus on valve handle and cap)
- Treatment: base grade.
- Caption: Gloved hand capping a copper supply line at the basement shut-off, brass compression fitting visible.

### process-loading-trailer
- Section: 5 (break, full-bleed)
- Crop: object-position 50% 60% (keep trailer bed and sorted piles in frame)
- Treatment: base grade + slight darken brightness(.88) for cinematic band.
- Caption: Open dump trailer at curb with separated metal and clean wood stacks, driveway boards underneath.

### material-plaster-lath
- Section: 6 (tools-band background texture, optional subtle bg-image at 8% opacity)
- Crop: object-position 50% 50%
- Treatment: desaturated to near-monochrome, multiplied into t-accent bg.
- Caption: Close-up of broken plaster revealing wood lath strips and nail heads.

### finished-bare-studs
- Section: 9 (reviews background, 6% opacity texture)
- Crop: object-position 50% 40%
- Treatment: base grade, low opacity overlay.
- Caption: Bare 2x4 stud wall in a stripped kitchen, electrical boxes capped and tagged, floor swept.

### hands-gloved-pry
- Section: 7 (services intro spot illustration, small inline frame)
- Crop: object-position 50% 30%
- Treatment: base grade.
- Caption: Gloved hands levering a cabinet away from a plaster wall with a flat pry bar, mask strap visible at edge.

### tool-pry-bar
- Section: 6 (tools-band icon frame beside layer peeler card)
- Crop: object-position 50% 50%
- Treatment: base grade, duotone ink/paper.
- Caption: Flat steel pry bar resting on a subfloor, worn wooden handle facing camera.

### region-ohio-foursquare
- Section: 10 (contact left column ambient photo, small frame)
- Crop: object-position 50% 70% (show porch and roofline, not sky)
- Treatment: base grade.
- Caption: Brick foursquare on an Akron street with a covered porch and mature maple, late afternoon light.

### season-rain-window-well
- Section: 8 (pricing-sample ambient, small frame beside estimator)
- Crop: object-position 50% 60%
- Treatment: base grade.
- Caption: Rain streaking a basement window well with wet concrete and a sump pump hose visible.

## Rejections
- hero-A2 (plastic sheeting alone): too abstract for hero; better as process slot but already have zipper shot which shows scale.
- hero-A3 (worker swinging pry bar): reads as action selfie, violates brief §4 cliché #3.
- process-hot-tub, process-slab-break: outdoor/structure shots; direction A is interior-led. Saved for B or C if needed.
- finished-cleared-lawn: outdoor; not this direction.
- Any key already used as hero in registry: none (checked via check-unique).

## Notes for builder
- hero-A1 must support CSS mask layers; provide three mask PNGs or use gradient masks keyed to scroll position.
- Break photo (process-loading-trailer) needs object-fit cover and min-height 60svh to feel cinematic.
- Texture overlays (material-plaster-lath, finished-bare-studs) are decorative only; keep opacity ≤8% so text contrast holds.
- All photos carry alt text from manifest; captions above are for plan reference, not rendered verbatim.