COPY: ok

# siding-A · critique round 2 (fast mode, scored as strict anchors)

## Five-second answer
1440-first.jpg / 390-first.jpg: "Minneapolis siding company (Richfield, Edina, St. Louis Park too). They open the wall before covering it and show me soft sheathing with a price per sheet. Call (612) 555-0128 or price my walls. The half-photo, half-wall-section gable says they think in layers." Clear in under five seconds; trade and place are now in the h1.

## What changed since round 1
Fixed: calculator contrast (mustFix), h1 trade+place, hero peek, en-dash ranges, single action name, "Co." typo, review grid, unified photo grade, square pills, layers header row in place of per-course caps, mobile gable order, motion-on blank blocks. Not re-listed.

## firstScreen: 9.5
1440-first.jpg: the h1 says what and where, the gable is the signature at 0%, there is one primary and one quiet secondary, and the proof line has Sample labels. The paper services band peeks under the nail row. 390-first.jpg: the gable sits above the h1 and the buttons are above the fold. The proof line half-hides under the sticky bar, which is scored under mobile.

## distinctiveness: 8.5
The siblings still differ in tone, face and hero family (siding/B, siding/C 1440-first.jpg).
- An em-dash eyebrow sits above every section heading ("What we put on walls", "How it will look", "Squares calculator", "What people wrote"), and middle-dot meta strings remain in the hero proof line (1440-rm-full.jpg, 1440-first.jpg): −0.5.
- The nail-dot rows on services, prices and reviews are still decoration (1440-rm-full.jpg, 1440-scroll-75.jpg): −0.5.
- +0.5 for the gable hero and the drawn course slots in layers (1440-scroll-25.jpg).

## type: 9.0
"Seven layers. You see every one." now delivers the scale contrast (1440-rm-full.jpg). Ranges use en dashes (1440-scroll-75.jpg). One header row replaces the repeated caps (1440-scroll-25.jpg), and the collisions are gone. No deduction. It isn't 9.5 because the display/mono contrast drops off after the layers band.

## layout: 9.0
Tone alternation, the full-bleed break and the ember area band (+0.5) (1440-rm-full.jpg).
- Reviews: the featured card leaves about 300px of dead paper between the quote and the byline (1440-rm-full.jpg reviews): −0.5.

## photo: 9.0
Both frames now share one cold monochrome grade (1440-first.jpg, 1440-scroll-50.jpg). The hero mask is a non-stock use (+0.5). There are still only two photos.

## copy: 9.0
"Price my walls" is used everywhere, the footer is fixed, trade nouns run throughout, and every Sample label is present (1440-rm-full.jpg, 1440-scroll-75.jpg).

## mobile: 9.0
render.json shows no overflow. The gable is reordered and clear of the bar (390-first.jpg). The layers now render in motion (390-full.jpg) (+0.5).
- The "Closed · opens tomorrow 7 am" proof line sits half under the sticky bar on the first screen (390-first.jpg): −0.5.

## a11y: 9.0
The calculator range is ember mono on the dark board at full contrast (1440-rm-full.jpg). aria-live outputs, skip link, forced-colors and labels are in dist/index.html. All text is visible in 1440-rm-full.jpg and 390-rm-full.jpg.

## motion: 9.0
The pinned stack has a counter, fills the drawn slots and explains the order (+1.0) (1440-scroll-25.jpg). Captures with motion on are complete (390-full.jpg).
- Courses slide into their slots instead of lapping over the course below and covering its nails (1440-scroll-25.jpg): −0.5.

## wow: 9.0
The visualizer output is now a course board ("14 courses on an 8 ft wall"). The calculator answer is a lap-board readout (1440-rm-full.jpg). The hero and the story connect (+1.0).
- The visualizer house is still a flat clip-art rambler (1440-rm-full.jpg C-05): −0.5.

## polish: 9.0
Radius is now consistent (1440-scroll-75.jpg), the footer is fixed, and the head/meta is complete (dist/index.html).

## Arithmetic
14×9.5 + 12×8.5 + 10×9 + 10×9 + 8×9 + 8×9 + 7×9 + 7×9 + 12×9 + 8×9 + 4×9
= 133 + 102 + 90 + 90 + 72 + 72 + 63 + 63 + 108 + 72 + 36 = 901 / 100 = **9.01**

Every category is at or above its floor and mustFix is empty, but the score is under 9.5, so the verdict is **ELEVATE**.

## Must
None.

## Should
1. **distinctiveness, section eyebrows (1440-rm-full.jpg)**: there's an em-dash eyebrow on every section. Fix: keep at most two (hero, calculator) and delete the rest. Also replace the " · " in the hero proof line with a line break or a comma.
2. **layout, #reviews featured card (1440-rm-full.jpg)**: about 300px of dead space under the quote. Fix: drop `justify-content: space-between` / the fixed height so the byline follows the quote at 24px, and let the card height match its content (align-self: start). Alternatively, raise the quote to the display size so it fills the card.
3. **mobile, hero proof line (390-first.jpg)**: it's half under the sticky bar. Fix: tighten the hero so the proof line clears the bar, by reducing the gable band to about 200px or the vertical gap between the buttons to 12px. Or hide the open-now line on the first screen below 400px and show it in the bar.
4. **wow, visualizer house (1440-rm-full.jpg C-05)**: it's flat clip-art. Fix: draw it with the same line weight and labels as the hero wall section (ember ridge line, mono callouts for exposure and course count on the wall itself).
5. **motion, layers lap (1440-scroll-25.jpg)**: see Elevate.

## Elevate (two weakest by score and weight: distinctiveness 8.5 / w12, motion 9.0 / w12)
- **motion**: make the layers story physically lap. Each course drops from above and overlaps the top inch of the one below, covering its nail line as it lands, so the motion demonstrates how siding is hung. Reuse the same lap-and-cover action when the visualizer redraws its courses.
- **distinctiveness**: retire the eyebrows and the decorative nail rows, and let the course system carry the section labels. Each section opens on a single lap board whose exposed face holds the title and a real measurement ("7 in. exposure", "13 squares"), so the motif only appears where it means a board on a wall.
