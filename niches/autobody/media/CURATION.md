# Autobody media curation

Source: Openverse / Wikimedia Commons (no Pexels key). The pool has 188 candidates, 4 per photo slot.
Keyword matching on Commons is poor for this trade: most candidates are trains, churches, fish, show cars or
graffiti. No key was in use by any site (A, B and C all have empty `src/media.json`), so nothing was protected.

## Approved (4)

| Key | Candidate | Why |
|---|---|---|
| resto-coating-applicator | oc00039776618 | Leaf on deep blue gloss paint with a crisp reflection. An honest gloss/coating macro with no badge. Works for B or C. |
| process-clearcoat-wet | oc00061793161 | Tight red-gloss tail fin and chrome. No script or badge in frame. A paint-depth/gloss detail, not "fresh clear". |
| street-el-paso-mountains | oc00188685686 | Desert scrub under rugged mountains in hard light. Fits B's high-desert local frame. No signs. |
| canal-dock-boat-lauderdale | oc00179278744 | Sailboats on teal water past a palm-lined key. Fits C's coastal break. No readable names. |

Alt text must stay as a description of the frame. Never caption these as shop work.

## Left as draft (do NOT place on a site): every hero and process-teardown-bumper

- hero-A oc00148789866: a motorcycle/locomotive dashboard. Wrong job.
- hero-A-2 oc00093472266: graffiti spray cans. Art, not auto paint.
- hero-A-3 oc00053641225: an airman posed facing the camera in an aircraft hangar, with a logo on the extractor. Fails Honest.
- hero-B oc00152850591: a Rolls-Royce mascot, a brand mark.
- hero-B-2 oc00164308680: a railway carriage.
- hero-B-3 oc00069233216: a classic Imperial on a lawn, a show car.
- hero-C oc00030356274: a shipyard crane in Poland, not a residential boat.
- hero-C-2 oc00139719893: a reversing camera in a white panel, not a hull.
- hero-C-3 oc00078385795: palms reflected in sunglasses, no paint.
- process-teardown-bumper oc00144977062: a royal Buick with a readable "A-1" plate.

Rejected on sight elsewhere: the cracked white bumper (Acura badge, plate frame), the welding-panel drill (DeWalt
logo, aircraft), the Detroit snow bungalow (house number "44" readable), the beached fishing boat (readable name
board), and the police and protest cars (readable text).

## Weak slots (no acceptable candidate)

Every hero (A, A-2, A-3, B, B-2, B-3, C, C-2, C-3) and every process-*, damage-*, hands-* slot, plus
resto-water-beading, resto-polisher-pads, resto-gelcoat-oxidation, resto-hull-wetsand, resto-boat-trailer-yard,
street-detroit-bungalows-winter, road-salt-spray-car, sunfaded-car-parking-lot and palms-driveway-car.
Fix: re-fetch with a PEXELS_API_KEY (`node tools/fetch-media.mjs autobody --force --source pexels`), then curate again.
An empty slot beats a lying photo.

## Best hero frames per direction

- A (shop at night): none acceptable. Keep the drawn filmstrip.
- B (desert daylight): none for a hero. Use street-el-paso-mountains and resto-coating-applicator as section frames.
- C (coast): none for the bow mask. Use canal-dock-boat-lauderdale as the break and resto-coating-applicator as a macro.
