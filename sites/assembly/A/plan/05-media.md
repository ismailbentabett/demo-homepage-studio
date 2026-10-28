# assembly-A · Media plan (round 0: drawings only)

The assembly photo library (`niches/assembly/media/manifest.json`) was still downloading when this site was built,
so `src/media.json` has **no photo slots**. Nothing is faked and nothing is hot-linked.

What stands in, by slot (each is an inline SVG line drawing, graphite on paper, part of the signature):

| Planned slot | Round 0 stand-in | Photo to bring in (fix round) |
|---|---|---|
| hero (sticky plate, FIG. 1) | exploded dresser: carcass, back panel, top, 4 cam bolts, 3 drawers; closes in the intro | half-built dresser on a blanket, parts sorted in rows, top-down / three-quarter, no packaging logo |
| story 01-06 | one exploded drawing per step (blanket parts, square check, cam lock, hinge, stud strap, tied boxes) | hands with a hex key; drill at a cam; a level on a wardrobe door (one per step at most, drawings stay) |
| break (tools) | full-bleed lineup of six drawn tools on deep | flat-lay of drill, level, stud finder (optional: the drawing band already carries it) |
| tools / proof | strap + bookcase drawing, bag tags | none needed |
| footer | the dresser, assembled | an empty, bright hallway or a finished bedroom (no faces) |

Fix round: add the hero plate photo first (`[[frame hero ...]]` inside `.plate`, the drawing moves to the plate
margin), keep `ogPhoto: "hero"` then, and run `node tools/check-unique.mjs assembly-A`. The OG image is a plain
color card until a hero photo exists.

## Round 1 photo pass
| slot | manifest id | where |
|---|---|---|
| hero | tool-stud-finder-2 | #top FIG. 1 plate (eager, og image) |
| slide | detail-drawer-slide-2 | #steps step 02, FIG. 3b beside the squaring drawing |
| tv | room-tv-mounted | #services head, FIG. 8 (cropped to the TV + console) |
