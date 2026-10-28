# appliance-B · Media plan

Library state (2026-10-27): the approved appliance library holds only 5 frames (hero-A1..A3, hero-B1, hero-B2), all
status "draft". Orchestrator rule: hero-B* keys only. So this site has ONE photo. That is a real weakness for the
Photo category; the concept compensates with drawn SVG (appliance line outlines for the age story and tag locator,
part icons for the symptom finder). Recommend a media-curator pass for B1/B2/B3 + shared process slots before the
build (then add 10-16 slot keys here: break, story-*, detail-*).

## hero → `hero-B2`
- Frame: modern white kitchen, stainless dishwasher drawers under a quartz counter, sink, daylight; wide-angle,
  slightly dim, marble floor (USVI government photo; reads as generic US condo kitchen, no people, no logos, no
  readable signs). Weak: wide-angle distortion, flat light, a bit "listing photo".
- Section: hero, framed inset in the teal REPLACE field (≥1024: 5 cols, 3:2; 390: 16:10 below calculator), never full-bleed.
- Crop: `object-position: 46% 62%` (centres the dishwasher drawers + sink, crops the upper cabinets and the door).
- Treatment: teal duotone (03-system: grayscale + #0E4746 multiply .55 + #E9B949 screen .08), offset 1.5px frame.
  The duotone hides the flat light and makes it a "what new looks like" diagram, not a showroom brag.
- Caption (mono, --fs--1): "A newer kitchen: dishwasher drawers under a quartz counter. Typical life ~9-10 years."
- Also used as `ogPhoto`.

## rejected
- hero-B1: a 3D render floor plan (brief §7 bans cartoon/3D renders). Not used anywhere.
- hero-A1..A3: reserved for sibling A's hero options; not ours.

## empty slots (intentional)
break, story-*, detail-*, gallery: none. Builder draws instead: SVG line outlines (fridge, washer, dryer,
dishwasher, range) in 1.5px ink stroke; no stock fill.
