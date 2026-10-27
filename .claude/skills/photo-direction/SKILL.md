---
name: photo-direction
description: Choosing, cropping and grading stock photos and video for the demo homepages so 10-16 Pexels frames read as one honest shoot - hero choice, crops and object-position, aspect ratios, grading with CSS, captions, the DEMO-RULES photo rejects, and video use. Use when curating a niche's media, writing the media plan (src/media.json, plan/05-media.md), placing photos in the build, or fixing a photo score.
---

# Photo direction

Photos are judged twice: are they honest, and do they look like one shoot made for this business.
Stock looks like stock when it's flat-lit, centered, posed, and every frame has a different color temperature.

## Rejects (DEMO-RULES §5, no exceptions)
- A face toward the camera that reads as the owner or "the team". Backs, hands, profiles at distance: fine.
- Any logo, brand on a truck, uniform text, readable sign, licence plate, house number, street name.
- Commercial or industrial jobs for a residential site; the wrong climate or house style for the city.
- Before/after pairs, "our work" framing, drone shots of a skyline, cartoon/3D renders, watermarks.
- Staged poses: thumbs-up, handshake, clipboard smile, hard hat in a studio.

## The media plan (10-16 keys, `src/media.json`)
- Hero: one frame (or video + poster) no sibling uses as hero. Prefer a working moment or a tight
  material detail over a finished-house exterior. Space for the text column where the layout needs it.
- A mix by distance: 1-2 wide (street, house, region), 4-6 mid (the work happening), 4-6 close
  (material, tool, hands, texture). Never two of the same distance in a row on the page.
- One full-bleed `.break` photo: the most atmospheric frame, horizon or texture, no subject on the edge.
- The signature section may use a crop of a photo already used, at a very different scale.

## Crops and placement
- Aspect ratios in use: max 3 (e.g. 3:2 hero, 4:5 cards, 21:9 break). `aspect-ratio` + `object-fit: cover`.
- Set `object-position` per photo toward the subject (`object-position: 62% 40%`), check the 390 crop:
  the subject must survive on a phone.
- Hero: `fetchpriority="high"` via `[[img hero | eager]]`, real width/height from the manifest.
- Never stretch a photo past its pixel width ×1.25 (the manifest has `w`). 1170 wide is the ceiling for most.

## Grading (make them one shoot)
Pick one treatment for the site in stage 3 and apply it to every photo:
```css
.frame img{filter:saturate(.88) contrast(1.04)}                 /* calm, natural */
.frame::after{content:"";position:absolute;inset:0;background:var(--tint);mix-blend-mode:multiply;opacity:.12}
```
- Warm sites tint with the accent's hue at 8-14%; cool sites desaturate to .8 and lift contrast.
- A duotone or full black-and-white only if the concept is built on it (and then every photo).
- Grain (an SVG noise at 4-6% opacity) on the hero and break only.
- Never grade differently per section; never a heavy vignette.

## Captions
Describe the frame, 6-14 words, sentence case, no period needed: "Copper flashing bent around a brick
chimney". No "our", no business name, no "beautiful", no claims ("expert installation").

## Video
- Hero video only when the clip is slow (5-20 s), no faces, and matches the concept's verb.
  Always a poster (the build uses the manifest poster), `[[video key]]` macro, pause button, lazy.
- Under reduced motion the poster stays. On phones the video is fine if it's ≤ 4 MB; else poster only.

## When the library is weak
Use fewer photos, bigger type, a texture band, an SVG diagram of the process. An empty slot beats a
lying photo. Never hot-link, never search outside the manifest at build time (the build refuses).

## What costs points
A hero that a sibling or a delivered site already used, a crop that cuts the subject at 390, mixed
color temperatures, a wall of equal cards each with its own stock photo, visible stock clichés.
