COPY: ok

# garagedoor-C · critique round 2 (fast mode, scored as strict)

**Five-second answer (1440-first.jpg, 390-first.jpg):** "Garage door repair in Omaha. My door won't lift, so I call (402) 555-0148 or text a photo. Why them: a spring pair is $250 to $420 (sample) and they're open now and take emergencies." The h1 now carries the trade and the city. At 390 the "−8°" reads cleanly. At 1440 the minus is still a long separate photo strip at x≈60–545, and the big "8" plus its outline ring fight the h1.

Checks: static.json and render.json are clean (no overflow at 320/390, no console errors). Nothing is counted twice.

## firstScreen: 8.5 (was 8)
- Fixed: the h1 "Garage door won't lift in Omaha? We come out." is 9 words, plain, and names the trade and city. The paper band now peeks at 1440 (y≈845–900). A real photo (house, bare winter trees) shows through the mask. The Sample label in the price line no longer has a stray dot (1440-first.jpg).
- −0.5: at 1440 the "−" is still a detached rectangle far left of the "8", at a different height, so it reads as a cropped thumbnail and not as part of the reading (1440-first.jpg). At 390 it reads correctly (390-first.jpg), which shows that the desktop composition is the problem.
- −0.5: the h1 sits on the 8's lower bowl, and a thin outline ring around that bowl runs through "lift in", the sub-copy and the "Open now" proof line, then crosses the hero's bottom edge (1440-first.jpg). The result is busy where it should be calm.
- +0.5: one amber Call, a quieter Text, a stamped −8° price proof and an open-now line make the hierarchy correct (1440-first.jpg).

## distinctiveness: 9 (was 8.5)
- Earned: the stamp primitive now runs through the hero mask (photo-filled), the pinned story (the −8°F stamp over the house photo, 1440-scroll-25.jpg), the services aside stamp (1440-scroll-50.jpg), the review season tags (1440-scroll-75.jpg), the price sheet and the footer 0° (1440-full.jpg). The spring line art is now a thin overlay on a photo, so it no longer reads as sibling B's technical drawing. The frost grain on the card edges is visible (1440-scroll-25.jpg, 1440-scroll-50.jpg).
- Nothing in the shots lets me point to a 9.5 move.

## type: 9 (was 8.5)
- Earned: the eyebrows over the h2s are gone, and the caps labels left are factual (SAMPLE PRICING, SAMPLE REVIEW, season stamps) (1440-rm-full.jpg). Arvo at large sizes against Libre Franklin text works, and the Megan T. lead quote in Arvo 400 is a real scale-contrast moment (1440-scroll-75.jpg). Prices use tabular figures.
- Not a 9.5: the services h2 still sets in 3 heavy lines in a narrow column (1440-scroll-50.jpg).

## layout: 8.5
- Earned: the tones alternate cleanly and no dark bands touch (1440-full.jpg). The services left column now holds a stamp card (1440-scroll-50.jpg).
- −0.5: the "heading left, rows right" shape is still used 3 times: stop, services, prices (1440-rm-full.jpg).
- The review mosaic leaves an empty ~250px hole under the October card in the right column (1440-scroll-75.jpg, y≈260–510). Should.

## photo: 7.5 (was 6.5)
- Earned: there are photographs now. The hero mask holds a house with bare winter trees (1440-first.jpg), and the pinned story uses a two-door brick house with a spring overlay (1440-scroll-25.jpg).
- −0.5: the story photo is washed to a pale frost grey at low contrast, so the doors, the actual subject, nearly disappear (1440-scroll-25.jpg).
- −0.5: neither frame shows snow, ice or any garage-door hardware, so the page says "−8°F" over photos of a mild day. In reduced motion the four reading cards show colour gradients instead of photos (1440-rm-full.jpg, story grid), so the 104/88/34 readings have no picture at all.
- Two photos in ~12,000px is thin for a trust page. The rest is vector and type.

## copy: 9 (was 8.5)
- Fixed: the arrows are gone, "neighbors" is American, and the price sheet temperatures now match the story, with season words on the non-temperature rows (1440-rm-full.jpg, prices).
- Earned: "Text a photo of the door: we'll tell you what broke and the price range before we drive over" (1440-first.jpg). "Kids made it to school late, not absent" is the lead quote, and it's from facts (1440-scroll-75.jpg).
- Not a 9.5: the services aside reads "Row 01 is the one that can't wait: Cold-snap spring repair…", which is meta copy about the layout, with a capital after the colon (1440-scroll-50.jpg). The 10 service links all say "Price my repair", the same as the hero link (1440-scroll-50.jpg). Should.

## mobile: 9
- Earned: the hero is re-cut and the −8° mask reads correctly. The h1 runs 4 lines, Call is full-width, Text sits under it, and the 4-call-target pile-up from round 1 is gone (390-first.jpg). The story becomes stacked cards, and the list, reviews, tools and form stack cleanly (390-full.jpg). No overflow at 320 or 390 (render.json).
- The price proof line's Sample tag is cut at the fold (390-first.jpg). It's minor, and the tag is visible on scroll.

## a11y: 9
- Earned: reduced motion shows every word, with the story as a 2×2 grid and the tools and form visible (1440-rm-full.jpg, 390-rm-full.jpg). There is one h1 and a clean h2 order (dist). Amber is used only on deep fields or as a dark-amber link on paper (1440-scroll-50.jpg). The hero photo `<img>` has a descriptive alt.
- Not a 9.5: 10 identical "Price my repair" link names in one list (1440-scroll-50.jpg). The focus ring cannot be seen in a still.

## motion: 9 (was 8.5)
- Earned: the pinned story now counts down over a photo, with the spring overlay flagging the snapped coil and the 104/88/34/−8 timeline under it (1440-scroll-25.jpg). The frost grain on the card edge is visible in the −8° state and the services stamp card (1440-scroll-25.jpg, 1440-scroll-50.jpg). The line-split h1 and the reduced-motion fallback are complete (1440-rm-full.jpg).
- Not a 9.5: I can't see the frost depth change between states in these frames.

## wow: 8.5 (was 8)
- Earned: the hero numerals full of photo are now the moment the concept promised (390-first.jpg especially). The hail tool output is now a boxed stamp result, "Hail-dent section: $380 to $850 per section" (1440-rm-full.jpg, tools). The checklist score stamp is useful.
- −0.5: on desktop the hero moment is diluted by the detached minus and the ring (1440-first.jpg). The story photo is too washed to land as an image (1440-scroll-25.jpg).

## polish: 8.5 (was 9)
- −0.5: the hero's outline ring runs through body text and the proof line and is clipped by the hero's bottom edge (1440-first.jpg). The review mosaic has an unfilled hole (1440-scroll-75.jpg). The OG, JSON-LD, print and forced-colors work is still in dist.

## Arithmetic
14×8.5 + 12×9 + 10×9 + 10×8.5 + 8×7.5 + 8×9 + 7×9 + 7×9 + 12×9 + 8×8.5 + 4×8.5
= 119 + 108 + 90 + 85 + 60 + 72 + 63 + 63 + 108 + 68 + 34 = 870 / 100 = **8.70**

## Must
- None. Every review, the rating and the prices carry Sample labels, and there are no invented claims. Reduced motion shows all text, and there is no overflow or phone breakage.

## Should
1. **#hero minus at ≥900px (1440-first.jpg).** Problem: the "−" is a detached strip at x≈60–545, at a different baseline than the "8". Fix: set "−8°" as one glyph run in one clip path, with the minus sitting on the 8's optical centre-line, butted to it (gap ≤ 0.05em) as on mobile.
2. **#hero outline ring (1440-first.jpg).** Problem: the thin circle around the 8's lower bowl crosses the h1, the sub-copy and the "Open now" line, and is clipped at the hero bottom. Fix: remove it, or clip it to the mask and keep it out of the text zone (`clip-path` on the mask layer, or `z-index` under the scrim).
3. **#readings photo grade (1440-scroll-25.jpg).** Problem: the photo is washed to ~15% contrast and the doors vanish. Fix: lower the frost overlay to ≤ 35% opacity and keep it at the frame edges (a radial mask clear in the centre), so the doors read at full contrast.
4. **#readings reduced-motion cards (1440-rm-full.jpg).** Problem: the 104/88/34/−8 cards show gradients, not photos. Fix: show the same approved photo in each card with the four temperature grades (warm, storm grey, blue, frost mono) as CSS filters.
5. **#proof mosaic (1440-scroll-75.jpg).** Problem: an empty ~250px hole under the October card. Fix: give the right column the Alicia F. card, or use `grid-auto-flow: dense` with the Megan card spanning 2 rows, so the columns end within 40px of each other.
6. **#services aside (1440-scroll-50.jpg).** Problem: "Row 01 is the one that can't wait: Cold-snap spring repair…" is meta copy, with a capital after the colon. Fix: "The one that can't wait: a spring that snaps on the morning the door won't lift."
7. **#services links (1440-scroll-50.jpg).** Problem: 10 identical "Price my repair" links. Fix: "Price a spring repair", "Price hail damage"… using `{{service.short}}`, or one visible label with `aria-label` naming the service.

## Elevate
- **photo (7.5).** Make the photography carry the cold. Use one approved door-and-driveway frame through the whole thermometer, graded per reading (washed warm at 104°, storm grey at 88°, blue hour at 34°, frost-blue mono at −8°), with the frost growing from the frame edges and the doors kept sharp in the centre. Then the "−8°" in the hero and the "−8°F" in the story are visibly the same morning, and the homeowner sees a real door at every step.
- **firstScreen (8.5).** Make the desktop hero one reading, not a collage. Set the "−8°" as a single locked glyph run, cropped hard by the right edge and filled with the photo. Keep the left 55% clear on a calm deep-blue scrim for the h1, actions and stamped price proof, with nothing (no ring, no strip) crossing the text. The first view then reads as the number first, the promise second and the call third, as the 390 cut already does.
