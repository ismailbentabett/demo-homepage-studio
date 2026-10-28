COPY: ok

# drywall-C, round 1 (fast)

**Five-second answer (1440-first.jpg, 390-first.jpg):** "A plaster and drywall outfit in Manchester, NH that repairs old horsehair walls instead of gutting them. I call the yellow button or press Price my wall. Why them: they draw my exact wall, so they clearly know old houses." Clear on both viewports, but "Manchester" only comes from the small italic eyebrow, not the h1.

## First screen: 8.5
Earned: signature is visible at once (Plate I inside the mill-window arch), one loud primary and a quiet secondary, phone in header and hero, Sample-labelled proof line (1440-first.jpg). 390-first.jpg: h1 4 lines, both actions above the fold, sticky bar.
- h1 has no place, city only in eyebrow (1440-first.jpg) −0.5.
- The band below the hero peeks as empty cream with no content (1440-first.jpg); on 390 the plate falls below the fold, so the phone first screen has no signature (390-first.jpg).

## Distinctiveness: 9
Era Plates appear in the hero, the three-era story, nine service micro-plates, the Plate V season drawing, the identifier key, the patch sketch and the empty Plate IV footer (1440-rm-full.jpg). Nothing like A or B (1440-first.jpg of each).
- Middle-dot meta strings in the hero proof line and plate captions (1440-first.jpg) −0.5.
- Brick + cream is close to the cream/terracotta default; the slate and navy bands save it.

## Typography: 8.5
Newsreader + Libre Franklin, italic serif break quote as a scale-contrast moment, &nbsp; against orphans.
- Section ledes set small and grey, floating at the h2 baseline on the right (1440-rm-full.jpg, eras + services) −0.5.
- More than 5 sizes in the price sheet (1440-scroll-75.jpg) −0.5.
- Giant era numerals are so pale they read washed out (1440-rm-full.jpg).

## Layout: 8.5
Good tone rhythm and density changes (1440-rm-full.jpg).
- Era story dead space: empty right column under each era and the empty left half beside the Ray O. quote (1440-scroll-25.jpg) −0.5.
- Slate season band runs into the navy break and they read as one dark block (1440-scroll-50.jpg) −0.5.

## Photo: 7
No photograph anywhere (1440-rm-full.jpg, 390-rm-full.jpg). The concept promised mill-window arch photo frames and a photo-pan hover. The arches hold only drawings, and the footer admits drawings stand in for photos. The homeowner never sees a real wall.

## Copy: 9
Trade nouns throughout (keys, lath, rock lath, plaster washers, brown coat), honest timing advice, everything Sample-tagged, facts match facts.json.
- Primary action has several names: "Price my wall", "Price it", "Ask us to look at it" (1440-rm-full.jpg) −0.5.
- Era dates disagree: story says c.1950 rock lath / c.2005 board, identifier key says 1920–1969 / 1970 on (1440-rm-full.jpg) −0.5.

## Mobile: 8.5
No overflow (render.json 390 and 320 clean), h1 4 lines, sticky bar (390-first.jpg).
- Price ranges break mid-range ("$900 to / $2,300") (390-rm-full.jpg) −0.5.
- Hero is the desktop stack, not re-cut (390-first.jpg).

## Accessibility: 9
Everything visible in reduced motion (1440-rm-full.jpg, 390-rm-full.jpg), visible labels, forced-colors handled. Check that the pale era numerals are aria-hidden.

## Motion: 9
Arch fanlight draws in (1440-first.jpg). Plates build layer by layer on scroll: bare studs in 1440-full.jpg, complete in 1440-scroll-25.jpg. The motion explains the construction, which is the thesis. No visible hover language in the frames, so it is not 9.5.

## Wow: 9
Identifier → plate → footer Plate IV, plus the slider-driven patch sketch with visits and a printable price (1440-scroll-75.jpg).

## Polish: 9
apple-touch, og:image, JSON-LD, print stylesheet, forced colors, one rule weight, designed footer (1440-rm-full.jpg).

## Arithmetic
14×8.5 + 12×9 + 10×8.5 + 10×8.5 + 8×7 + 8×9 + 7×8.5 + 7×9 + 12×9 + 8×9 + 4×9
= 119 + 108 + 85 + 85 + 56 + 72 + 59.5 + 63 + 108 + 72 + 36 = 863.5 / 100 = **8.64** (8.635)

## Must
None.

## Should
1. **#eras (1440-scroll-25.jpg).** Problem: dead space under each era block and beside the Ray O. quote. Fix: bring the quote up into the 2005 era's right column below "Replace only what failed", and cut each era panel's min-height so the plate and the copy end together.
2. **#season → .break (1440-scroll-50.jpg).** Problem: two dark bands touch. Fix: put a cream band between them (move the break after #ident), or set the break on brick.
3. **Primary action name (1440-rm-full.jpg).** Problem: three names. Fix: use "Price my wall" on the service cards ("Price this wall") and the identifier CTA ("Price my wall →").
4. **Era dates (1440-rm-full.jpg).** Problem: the story says 1950/2005 and the identifier says 1920–1969/1970 on. Fix: caption the plates as ranges ("Plate II · c. 1920–1969 · rock lath", "Plate III · 1970 on · board") or make the identifier match the story.
5. **Section ledes (#eras, #services, 1440-rm-full.jpg).** Problem: small grey text floating at the h2 baseline. Fix: set them at fs-1 in full ink directly under the h2, 60ch max.
6. **Typical ranges at 390 (390-rm-full.jpg).** Problem: ranges wrap mid-range. Fix: `white-space: nowrap` on the price cell and let the item name wrap.
7. **Hero proof line and plate captions (1440-first.jpg).** Problem: middle-dot meta strings. Fix: break the proof line into two set lines (rating / hours + area) and use a comma or line break in the plate captions.
8. **Era numerals (1440-rm-full.jpg).** Problem: too pale. Fix: aria-hide them and lift them to about 25% ink, or outline them in the accent so they read as plate numbers.

## Elevate
- **Photo (7):** deliver the promised pairing. Put approved library photos inside the mill-window arches next to each era plate (keyed horsehair behind a broken edge, rock lath, taped board), so every drawing gets its photograph and the pair sets the story's rhythm. In the hero, the arch holds a photo with Plate I drawn over its lower half.
- **First screen (8.5):** make Manchester part of the plate. Title the hero like a surveyor's plate (a city line in or directly above the h1: "Manchester walls, 1890 to now"), and on 390 re-cut the hero so a cropped Plate I sits beside or above the h1 instead of below the fold.
