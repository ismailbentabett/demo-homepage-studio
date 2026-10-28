# assembly-C — Media plan

**Status: no photos in this build.** `niches/assembly/media/manifest.json` was not approved when the build ran (the
assembly library is still downloading), so `src/media.json` has no slots and the page carries no `[[img]]`/`[[video]]`.

What stands in (drawn, not faked):
- **Hero:** the house-shaped sheet under a true 3:12 (14°) Eichler gable: fascia, beam ends past the rake, the full
  floor plan around the hatched atrium, strap ticks on every tall piece. It sits where the concept puts the photo.
- **Rooms:** crops of the one plan drawing (same SVG, new viewBox each time).
- **Break:** the atrium drawn big on olive.
- **Tools:** wall sections (stud, plaster, beam and glass, brick) and the elevation of the strap story.

Photos come in the fix round, once the library is approved. Planned slots then: `hero` (sunlit beam-and-glass room,
mounted TV or tall bookcase, subject on the right third), `office` (desk by a window), `yard` (wooden playset on dry
grass), `break` (atrium or glass wall, golden afternoon). Each gets the grade from plan/03-system.md and a wall line
running past one edge. No hero reuse across siblings (`node tools/check-unique.mjs assembly-C`).

OG image: no `ogPhoto` in site.config.json, so the build draws the name in Fraunces on the redwood favicon colour.
