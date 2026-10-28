# Tattoo media curation (2026-10-27)

The pool is thin: the fetch timed out with 4 Openverse/Wikimedia candidates per hero slot and no
process, hygiene, tools or style slots. 28 candidates were checked on the pool contact sheets, and the
3 shortlisted frames were also checked at full size. No `sites/tattoo/*/src/media.json` exists yet,
so no key was in use and every key could be replaced.

## Approved (3)
| Key | Candidate | Why |
|---|---|---|
| hero-A | oc00163493968 (slot hero-A) | Healed fine-line luna moth on a forearm in soft indoor light, no face. Fits A (fine line, violet/vellum). Crop to the top arm, `object-position: 50% 35%`. Note: the Commons source describes cover-up tattoos, and the credit link says so. |
| hero-B-2 | oc00141008057 (slot hero-B-2) | A real working moment: pink nitrile glove, film-wrapped rotary machine, ink caps on a barrier-covered tray, single-use razor. The only hygiene-story frame in the pool, so it is B's hero. Crop away the left 20% (sticker-covered toolbox with Star Wars/IP stickers), `object-position: 70% 50%`. The small brand mark on the machine grip is barely legible. |
| hero-C | oc00061847616 (slot hero-A, key hero-C) | Healed neo-trad portrait tattoo with rose tint on a forearm, cropped body, no face. A 2.33:1 panorama with open cornfield at left for type. It is the closest thing to C's bold traditional look in the pool. |

## Rejected, left as `draft` (the build warns if one is used; nothing was deleted)
- hero-A-2 oc00127361371: printed tracing paper with Vietnamese text and a watermark. Not tattoo, readable text.
- hero-A-3 oc00060180196: museum bronze arm sconce. Not tattoo.
- hero-B oc00010584946: archaeological bone sewing needles. Not the job.
- hero-B-3 oc00165576450: jewelry bead tray. Not piercing.
- Other pool frames rejected: the "No religion" ambigram (readable belief statement), the bruise and tanned arm, sewing needles and spools, inkcap mushrooms, the night market and restaurant facade (faces and signs), the Teflon tray, foamboard, the fuse board, maps, and the vellum envelope (readable business card).

## Weak slots
Every slot except the three above: hero-A-2, hero-A-3, hero-B, hero-B-3, hero-C-2, hero-C-3, and all
process-*, hygiene-*, tools-* and style-* slots. These need a refetch when the network allows
(`node tools/fetch-media.mjs tattoo`). Until then the sites should use drawings or type in place of photos.

## Best hero per direction
- A (tracing vellum / violet): hero-A, the luna moth forearm.
- B (sterilization log, graphite / rose): hero-B-2, the gloved ink dip on the barrier tray.
- C (traditional flash, teal / red): hero-C, the portrait forearm by the cornfield.
There are not 3 distinct frames per direction: the pool has 3 honest frames in total.
