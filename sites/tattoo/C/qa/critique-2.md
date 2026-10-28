COPY: ok

# tattoo-C · Critique round 2 (fast mode)

**Five-second answer (1440-first.jpg, 390-first.jpg):** "Long Beach tattoo & piercing shop. Walk in Tue–Sun, pick a flash sheet off the wall for $100–$300 and leave with it today. Call or text a photo. Needles opened in front of me, titanium jewelry." Clear on both sizes.

## First screen: 9.5
City now in the h1; info tiles peek as the next band at 900px; healed photo sheet with ribbon on the right (1440-first.jpg). 390-first.jpg: h1 2 lines, both actions, price/open tiles follow immediately, docked bar.

## Distinctiveness: 9
Ribbons now name sections instead of tracked eyebrows (1440-scroll-25.jpg, 1440-scroll-50.jpg); price board is one wide pinned sheet (1440-scroll-75.jpg). −0.5 heading-left/panel-right still used for cover-up, visit, contact (1440-full.jpg).

## Typography: 9
En dash fixed ("2–3 sittings", 1440-scroll-75.jpg). Scale moment in the red band (1440-scroll-50.jpg). Tiny caps labels now limited.

## Layout: 9
Rail spacer gap gone; services band full at rest (1440-full.jpg, 1440-scroll-25.jpg). Good tone rhythm, no dark bands touching.

## Photo: 8
One photo only (dist: single `<img>`). Hero healed portrait on forearm, framed as a pinned sheet with HEALED · ON SKIN ribbon (1440-first.jpg): right subject, right treatment. −: cornfield background reads Midwest, not coast; still the only skin on the page (1440-full.jpg); `sizes="100vw"` on a half-width tile.

## Copy: 9
Invented location line removed; booking action unified as "Hold this sheet" (×6 in dist) and "Hold a sheet" heading (1440-full.jpg). All prices match facts; Sample labels everywhere (1440-scroll-75.jpg).

## Mobile: 9
390-first.jpg info tiles follow the CTAs; 390-full.jpg photo moved below the tiles; no overflow (render.json). Reviews and price board are straight collapses.

## Accessibility: 9
1440-rm-full.jpg / 390-rm-full.jpg complete; checks clean; descriptive alt on hero img.

## Motion: 8.5
Content-at-rest fix landed (1440-scroll-25.jpg). Motion is still ribbon unfurls + generic reveals; the healing story and the photo sheet don't move with scroll (1440-scroll-50.jpg, 1440-full.jpg).

## Wow: 9
Ocean band, cover-up answer ribbon, DAY 21 marker (1440-scroll-50.jpg, 1440-full.jpg). Healing output still a text grid (1440-rm-full.jpg).

## Polish: 9
Consistent pinned-paper system and footer (1440-full.jpg). Middle-dot strings repeat (1440-first.jpg).

## Arithmetic
14×9.5 + 12×9 + 10×9 + 10×9 + 8×8 + 8×9 + 7×9 + 7×9 + 12×8.5 + 8×9 + 4×9
= 133 + 108 + 90 + 90 + 64 + 72 + 63 + 63 + 102 + 72 + 36 = 893 / 100 = **8.93** → ELEVATE

## Must
None.

## Should
1. **Hero img (dist, `.psheet__img`)**: `sizes="100vw"` on a ~40vw tile → `sizes="(min-width: 840px) 40vw, 100vw"`.
2. **#cover-ups / visit / contact (1440-full.jpg)**: break one of the three split layouts, e.g. set the visit hours as the footer-style wide ribbon around a drawn shop-front card centered on the band.
3. **Healing tool output (1440-rm-full.jpg)**: turn the 5-column text grid into a pinned "aftercare card" sheet with a ribbon title and a print/keep affordance.
4. **Middle-dot strings (1440-first.jpg)**: vary separators in header pill and tile ("Closed, opens 11 am").

## Elevate
- **Photo (8):** make healed skin a recurring sheet type: two more healed pieces from the approved library (prefer a sunlit/coastal frame) hung as pinned photo sheets in the flash rail after No. 06 and beside DAY 21, so the page reads paper → skin → healed.
- **Motion (8.5, weight 12):** scrub the tide-line wave with scroll so each DAY ribbon unfurls as the wave reaches it and lands on mustard DAY 21; let the hero photo sheet swing in on its pins once. Motion then tells the healing sequence instead of fading sections in.
