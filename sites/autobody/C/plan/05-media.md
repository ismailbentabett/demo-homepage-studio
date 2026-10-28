# autobody-C · Media plan

**Round 0: no photos.** The autobody photo library (`niches/autobody/media/manifest.json`) was still downloading when
this site was built, so `src/media.json` has no slots and nothing is hot-linked or faked.

What stands in (drawn, in the palette):
- Hero: the drawn hull in the bow shape (gel-coat white, half polished, chalk veil aft of the polish line), the boot
  stripe at its waterline, its rippled reflection below. This is the concept's planned fallback (02-concept §6).
- Services: line drawings of a car side profile (Driveway) and a hull profile (Dock).
- Seasons: four line icons (sun, hull, rain, storm limb).
- Hull calculator: the stretching hull profile.
- Test-spot break: a chalky gel-coat surface with one round polished spot reflecting sky and horizon.

**Photos come in the fix round.** Slots to fill then (keys from the manifest, no sibling hero reused):
| Slot | Want | Where |
|---|---|---|
| hero | white hull at a canal dock, or a polisher on gel coat, subject on the right third | inside the bow clip-path in #hero |
| break | wide gel coat / hull side with water light | #testspot behind the spot drawing |
| detail-1..3 | macro: water beading on coated paint, polisher pad on gel coat, headlight lens | services rows |
Grade for all: `saturate(.88) contrast(1.06) brightness(1.02) hue-rotate(-4deg)`.
