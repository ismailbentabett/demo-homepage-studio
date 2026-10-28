# appliance-C · Media plan: photo-free

Decision: no photos. The approved appliance library has no hero-C key (only hero-A1..A3, hero-B1..B2; A uses hero-A2, B uses hero-B2), and the remaining frames are off-brief (A1 Lisbon Packard car, A3 a young man reading under a lamp = a face, B1 a studio condo, no Sioux Falls basement, freezer, mudroom or prairie). An empty slot beats a wrong photo, and DEMO-RULES §5 rules out the face and the wrong region.

The page is drawn instead; this is the concept, not a fallback (the lid list is handwritten):
| section | drawing (inline SVG, single 1.5px stroke, ink on tape) | treatment |
|---|---|---|
| hero marquee | 6 vignettes: chest freezer lid up with wrapped packages; garage fridge with snow at the door; washer with a laundry basket; dryer + vent run to the roof; oven with a loaf; upright freezer | frost hatch (dusk blue .35) on winter items, wheat hatch on fall/summer items; aspect 4/3, 220px tall |
| year story | 12 month vignettes (Jan garage fridge, Feb dryer vent, Mar dishwasher, Apr move-in washer, May install, Jun ice tray, Jul compressor/heat, Aug fridge coils, Sep freezer checkup, Oct pheasant opener freezer, Nov oven, Dec dishwasher under load) | hatch crossfades frost↔warm with --sw-p |
| thaw clock | chest freezer outline with frost line | frost line height = hours left / 48 |
| services | small 48px line icons in the tick column, same stroke | none |
| footer | torn tape end | none |
Captions describe the drawing ("Chest freezer, lid up, the fall's packages"), never "our work / team".
src/media.json = plan/media.json = {"slots":{}}; set ogPhoto off / use a generated OG if the build needs one.
