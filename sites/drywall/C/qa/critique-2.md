COPY: ok

# drywall-C, round 2 (fast)

**Five-second answer (1440-first.jpg, 390-first.jpg):** "Manchester plaster and drywall people who repair old horsehair walls instead of gutting them. I call the amber button or press Price my wall. Why them: they literally draw the inside of my wall." On 390 the arch and Plate I now come first, then the "Manchester walls, 1890 to now" plate title, h1 and both actions.

What changed since round 1: the city is now in the plate title right above the h1; the phone hero is re-cut with the plate first; photos sit in the hero arch and the era arches; the slate season band no longer touches the navy break (the identifier sits between them); one action name ("Price my wall", 17 uses in dist); era dates agree (1920 to 1969 / 1970 on); era numerals are outlined in brick; ledes are full ink under the h2.

## First screen: 9
Signature in the first screen (Plate I drawn over a cracked-plaster photo inside the mill-window arch), one loud amber Call plus a quiet outline secondary, phone in header and hero, Sample rating line, next band (plate index strip) peeks (1440-first.jpg). 390-first.jpg: re-cut, plate on top, h1 3 lines, both actions above the fold.
- The h1 itself still carries no place; the city sits in the plate title above it. Accepted at 9, not 9.5.
- 390-first.jpg: the sticky bar covers the Sample rating line on the phone first screen.

## Distinctiveness: 9
Era plates in hero, eras story, service micro-plates, Plate V season drawing, identifier key, patch sketch, footer Plate IV (1440-rm-full.jpg). Different from A and B.
- Hero proof line still a middle-dot string ("Open now · until 4 pm", 1440-first.jpg). Small.

## Typography: 9
Newsreader + Libre Franklin, the italic break quote, outlined roman era numerals that now read as plate numbers (1440-rm-full.jpg), ledes now in full ink under the h2.
- The price sheet still has many sizes in one view (1440-scroll-75.jpg). Held at 9.

## Layout: 9
The tone order now goes slate → cream → navy (1440-scroll-50.jpg), so the dark run is gone. The era rows are tighter, with the quote in the Plate III column (1440-scroll-25.jpg).
- 1440-scroll-25.jpg: there is still a ~250px empty cream run under Plate III beside the quote.

## Photo: 8.5
Real photos now: cracked plaster in the hero arch (1440-first.jpg), textured plaster and finished orange-peel board in the Plate I and III arches (1440-rm-full.jpg).
- Plate II's arch holds a drawing, not a photo, so the photo pairing breaks on the middle era (1440-rm-full.jpg, 390-rm-full.jpg).
- The Plate I "horsehair" photo is a grey skim-coat texture with no lath or keys visible, so it is generic stock texture rather than the era it captions (1440-rm-full.jpg).
- The arches are small (about 130px wide at 1440) next to the large drawings, so the photos read as thumbnails.

## Copy: 9
Trade nouns, honest timing ("Reset it in March and it stays reset", 1440-scroll-50.jpg), everything Sample-tagged, facts match facts.json, one action name, dates agree.

## Mobile: 9
The hero is re-cut (390-first.jpg). No overflow (render.json 390/320). The sticky Call/Text/Price bar works, and the identifier key and sizer stack cleanly (390-rm-full.jpg).
- The sticky bar covers the rating line on the first screen (390-first.jpg). Minor.

## Accessibility: 9
All content is visible in reduced motion (1440-rm-full.jpg, 390-rm-full.jpg), labels are visible, the radio options are large, and render.json shows no errors.

## Motion: 9
The plates build layer by layer on scroll (1440-full.jpg shows the bare stud state, the 25% frame shows them complete), the arch draws in, and the season and identifier tools respond. No distinct hover language is visible.

## Wow: 9
The identifier picks a plate, the footer's Plate IV fills from your answer, and the patch slider draws the hole and the visits (1440-scroll-75.jpg).

## Polish: 8.5
apple-touch, og, JSON-LD, print and forced-colors are carried over.
- 1024-first.jpg: the nav wraps "WALL / ERAS" onto two lines and the logo wraps "Co." to a second line, so the header looks broken at tablet width (-0.5).
- 1440-scroll-75.jpg: the slider reads "Fist", but the visits table highlights the "Plate" row instead of "Coin to fist". The tool contradicts itself.

## Arithmetic
14×9 + 12×9 + 10×9 + 10×9 + 8×8.5 + 8×9 + 7×9 + 7×9 + 12×9 + 8×9 + 4×8.5
= 126 + 108 + 90 + 90 + 68 + 72 + 63 + 63 + 108 + 72 + 34 = 894 / 100 = **8.94**

## Must
None.

## Should
1. **Header at 1024 (1024-first.jpg).** Problem: the nav item "Wall eras" and the logo both wrap. Fix: `white-space: nowrap` on nav links and the wordmark. Between 1024 and 1180px, show `biz.short` in the logo or drop the "Area" link into the menu.
2. **Patch sizer visits table (1440-scroll-75.jpg).** Problem: a "Fist" size highlights the "Plate" row. Fix: map coin and fist → row 1, plate → row 2, door → row 3.
3. **Plate II arch (1440-rm-full.jpg).** Problem: no photo, so the pairing breaks. Fix: put an approved rock-lath or gypsum-plaster photo in it, or a close crop of a straight sheet-edge crack.
4. **390 first screen (390-first.jpg).** Problem: the sticky bar hides the Sample rating. Fix: reveal the sticky bar only after the hero CTAs leave the viewport.
5. **Hero proof line (1440-first.jpg).** Problem: middle-dot string. Fix: "Open now until 4 pm." on one line and "Manchester and six towns around it." on a second.
6. **#eras dead space (1440-scroll-25.jpg).** Problem: an empty cream run under Plate III. Fix: end the section when the right column ends, and trim the bottom padding to the section rhythm value.

## Elevate
- **Photo (8.5):** make each era a true specimen pair. Enlarge each arch to about 40% of the row and give it a photo that shows that era's failure (loose keys, a straight sheet-edge crack, a nail pop). Draw the plate's leader lines across into the photo so the drawing annotates the real wall.
- **Polish (8.5):** give the tools and the header the same exactness as the plates. The sizer's highlighted row, the drawn hole and the price should all come from one state, and the header should hold one line at every width from 1024 up. The page should behave like a precise instrument at every size.
