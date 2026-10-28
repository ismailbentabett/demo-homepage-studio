# assembly-B · Media plan

Round 0 ships with **no photos**. The assembly media library (`niches/assembly/media/manifest.json`) was still downloading
when the build started, and a photo is never faked or hot-linked.

- The hero is tool-first (the item counter board), so it needs no hero photo.
- Every visual is drawn: the carton tiles, the stencil plates, four SVG wall cross-sections, the flattened box bundle.
- `src/media.json` has an empty `slots` object; `site.config.json` has no `ogPhoto` (the OG image is the deep colour + name).

**Fix round:** once the manifest is approved, add at most three slots (concept §6 + brief photo mood):
1. `wall-tv`: a TV level on a concrete or brick wall at night, narrow vertical crop beside the walls band (≥1100 only, 30% width).
2. `boxes-hall`: flat-pack cartons stacked in a hallway or elevator lobby, behind the haul-away band or the visit steps.
3. `tools`: a drill and level on a box, for the visit tool roll.
Grade: `saturate(.8) contrast(1.08) brightness(.94) hue-rotate(-4deg)`. Check no sibling uses the same photo as hero.
