# Media Plan — general-A (Crosstie Building Co.)

## Hero
- **hero-A1** (video + poster). Section: hero. Crop: `object-position: 50% 60%` (keep framing silhouettes in lower third, sky above). Treatment: photo grade `saturate(.8) contrast(1.1) sepia(.12) brightness(.9)`; scrim left band matches creosote #1b1915. Caption: "Wood framing rising at dusk under work lights on a Nashville infill lot." Note: placeholder mode — no Pexels key; builder uses manifest fallback.

## Slots
- **crew-from-behind** → break. Full-bleed. Crop `50% 40%`. Grade as above. Caption: "Carpenters framing an addition wall, seen from behind; no faces, no logos."
- **process-demo** → track-story week 1. Crop `50% 50%`. Grade. Caption: "Interior demolition with walls opened to studs in a residential remodel."
- **process-footings** → track-story week 3. Crop `50% 70%` (show trench depth). Grade. Caption: "Concrete footing forms set for a home addition."
- **process-framing** → track-story week 6. Crop `50% 40%`. Grade. Caption: "Wood framing of a second-story addition with rafters visible."
- **process-inspection** → track-story week 18. Crop `50% 30%`. Grade. Caption: "Clipboard and inspection tag on a framed wall; no readable text."
- **tools-tape-level** → timeline-tool section. Crop `50% 50%`. Grade. Caption: "Tape measure and level resting on lumber at a job site."
- **detail-kitchen-finished** → weekly-report sample tab. Crop `50% 40%`. Grade. Caption: "Finished kitchen in a modest Nashville home with cabinets and counters installed."
- **region-nashville-bungalow** → area/ZIP section. Crop `50% 60%`. Grade. Caption: "Nashville-style bungalow with front porch in an infill neighborhood."
- **hands-at-work** → contact section background. Crop `50% 50%`. Grade. Caption: "Hands marking a stud with a pencil; no face, no brand."

## Gallery array
- **process-rough-plumbing** → gallery. Crop `50% 40%`. Caption: "Rough plumbing pipes in open stud walls of a bathroom remodel."
- **process-drywall** → gallery. Crop `50% 50%`. Caption: "Drywall sheets being hung on a residential addition interior."
- **detail-bath-finished** → gallery. Crop `50% 40%`. Caption: "Finished bathroom with tile surround and vanity in a Nashville home."
- **detail-addition-exterior** → gallery. Crop `50% 60%`. Caption: "House with a new side addition showing matched roofline and siding."

## Notes for builder
- All keys exist in `niches/general/media/manifest.json` (placeholder mode). No sibling reuse (no other general sites reserved yet).
- Photo grade filter applied uniformly via `.frame img` selector in style.css.
- Video poster uses same grade; video itself loads via `data-src` and kit `video` module.
- Captions describe frames only; never "our work", "our crew", or "before/after".
- Hero video is placeholder; if missing at build time, poster serves as static hero without error.