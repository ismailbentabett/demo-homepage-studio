# autobody-B · Media plan

**Round 0: no photos.** The autobody photo library (`niches/autobody/media/manifest.json`) was still downloading
when this site was built, so `src/media.json` has no slots and the page uses no `[[img]]`, `[[frame]]` or `[[video]]`.
Nothing is faked and nothing is hot-linked.

Every visual is a drawing in the palette (SVG + CSS): the hero paint cross-section with the probe and the sun,
the hood strata story, the dent contour map, the spray-out cards and the price tape.

**Photos come in the fix round**, when the manifest is approved. Candidate slots then:
- `hero`: macro of sun-peeled clear coat on a roof or hood (right half of the split, behind the drawing's probe line).
- `story`: a hood in hard noon light (deep band, beside the strata).
- `match`: a spray-out card held against a panel in daylight.
- `ogPhoto: "hero"` goes back into site.config.json at that point (omitted now so the build draws a plain OG card).
Grade: `filter: saturate(.82) contrast(1.08) brightness(1.03) sepia(.06)` (03-system).
