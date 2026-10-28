COPY: ok

# assembly-C, round 2 critique

**Five-second answer (1440-first.jpg, 390-first.jpg):** "Furniture assembly in San Jose. They build desks, cribs, bookcases and TVs and strap the tall ones to a stud or beam. Call (408) 555-0106 or text a photo of the wall. Rated 4.9 (Sample), anchoring from $45 a piece (Sample)." It passes. The gable and the Eichler plan are the first thing you see, and a photo now sits in the plan's living-room cell.

Changes since round 1, checked on screen: three photos placed (hero plan cell, #living stud finder, #kids drawer slide). Curly apostrophes ("If it’s", "Kids’ room", 1440-scroll-25/50.jpg). The italic accent is down to the h1 and the story h2. One action name, "Price my job", used 20 times in dist. The nav is in sentence case (1440-first.jpg). The tip-over check is its own full-width panel (1440-scroll-50.jpg). The hero ends at about 815px, so the next tone peeks.

## firstScreen: 9.0
Earned: 1440-first.jpg has the signature in the first screen (gable with strap ticks, the plan, the title block), one loud mustard Call plus an outlined Text, the phone in the header and the hero, a Sample proof line, and the next band peeking about 85px. 390-first.jpg: the h1 runs 4 lines, both actions sit above the fold, and the plan peeks above the bar.
- The h1 is 9 words ("Furniture assembly in San Jose, strapped to the beam."), one over the 8-word line (−0.5 against the 10). The peek in 1440-first.jpg is blank paper, not content.

## distinctiveness: 9.5
1440-full.jpg: the plan and strap tick organise the page. They are the hero, the "nine jobs, five rooms" schedule, the room tags, the beam-wall story, the numbered review pins on the plan (1440-scroll-75.jpg), the area site plan, the "you are here" locator and the footer title block. Accent-word repetition is gone. A section shot alone (1440-scroll-75.jpg) names the business. It shares nothing with siblings A and B.

## type: 8.5
Fraunces with tight optical display against Albert Sans. Real scale contrast: "Kids’ room" and "Office" are set huge against the body (1440-scroll-50.jpg), and "4.9" is big (1440-scroll-75.jpg). Quotes are now curly.
- 1440-scroll-50.jpg: one view carries the display room name, the h3, the h4 "Flat-pack furniture", the body, the price, the Sample tag, the link and the small checkbox labels. That is more than 5 sizes (−0.5).
- 1440-first.jpg: tracked caps still stack up (SAMPLE RATING, SAMPLE PRICING, plus plan labels). The plan labels are drawing convention, so there is no extra deduction, but it holds the score below 9.

## layout: 9.0
1440-full.jpg: redwood → paper → sand → deep story → paper → olive atrium full-bleed break → garage paper/deep tool → redwood reviews → paper prices → area → deep contact → paper title-block footer. Each section has one job. The staggered asymmetric review columns work (1440-scroll-75.jpg). The tip-over check now sits as its own panel (1440-scroll-50.jpg). It holds at 9 because the garage band (1440-full.jpg) still pairs a service list with the playset tool.

## photo: 8.0
dist has 3 `<img>` with width and height, lazy below the fold and honest alt text. The hero frame is placed inside the plan's living-room cell, so the frame is part of the signature (1440-first.jpg).
- Mixed grades: the hero frame is pushed to a copper duotone, while the stud finder (1440-scroll-25.jpg) and the drawer slide (1440-scroll-50.jpg) are cold neutral grey (−0.5).
- 1440-first.jpg: the copper hero frame reads as a muddy brown blur at that size. A carved armoire does not say "Eichler living room". No frame shows a finished room or an anchored tall piece, which is the thesis.

## copy: 9.0
Trade nouns ("beam wall", "post mount", "cam locks hand-tightened, never driven"). Every review and price carries its Sample label (1440-scroll-75.jpg, 1440-scroll-50.jpg). One action name, "Price my job", appears in the header, the sections and the bar (390-first.jpg). Microcopy sits at the tip-over check.

## mobile: 9.0
390-first.jpg: the hero is re-cut, the h1 runs 4 lines, the buttons are full width, and the bar is 3-up (Call / Text a photo / Price my job). 390-full.jpg: the story and room cards stack. render.json shows no overflow at 320 or 390.

## a11y: 9.0
1440-rm-full.jpg: every section, story step and review is present, and the story pieces are drawn upright. render.json has no console errors. Labelled checkboxes (1440-scroll-50.jpg). The heading order is clean.

## motion: 8.5
Hooks: the strap story with leaning pieces and dimmed steps (1440-scroll-25.jpg), the locator mini-plan (1440-scroll-25/50/75.jpg) and the anchored counter. Nothing new moves this round. The hero plan, the review pins and the new photos show no scroll-tied behaviour in the frames. Still one moving idea.

## wow: 9.0
The beam-wall lean-and-strap story plus the tip-over check, which outputs a drawn dresser elevation and a price (1440-scroll-50.jpg). The reviews are pinned to rooms on the plan (1440-scroll-75.jpg).

## polish: 9.0
1440-full.jpg: the footer is a title block, with one square radius and one stroke system. dist: SVG favicon, apple-touch, og, print and forced-colors CSS, img width and height.

## Arithmetic
14×9 + 12×9.5 + 10×8.5 + 10×9 + 8×8 + 8×9 + 7×9 + 7×9 + 12×8.5 + 8×9 + 4×9
= 126 + 114 + 85 + 90 + 64 + 72 + 63 + 63 + 102 + 72 + 36 = 887 / 100 = **8.87**

## Must
None.

## Should
1. **photo**, 1440-scroll-25.jpg / 1440-scroll-50.jpg / 1440-first.jpg: the grades are mixed. Apply one warm grade to all three: the same sepia/warm curve at low strength (e.g. `filter: sepia(.25) saturate(.9) contrast(1.02)`), and back the hero's copper duotone off to that same level so the subject reads.
2. **photo**, hero plan cell, 1440-first.jpg: the wardrobe frame is unreadable at 24vw. Swap it for a library frame of a tall piece against a wall (a bookcase or dresser), and set `object-position` so the piece's top edge, where the strap goes, sits on the upper third.
3. **type**, #kids, 1440-scroll-50.jpg: cut a size. Set the h4 "Flat-pack furniture" at the h3 size or as body bold, and bring the checkbox labels up to the body size (≥16px).
4. **layout**, garage band, 1440-full.jpg: the service list and the playset tool share one band. Move the 3-column service list (Garage gyms / Patio / Box haul-away) into the "nine jobs" schedule, or give it its own quiet strip.

## Elevate
- **photo**: let the drawing become the photo. Each room cell of the hero plan unclips into its real frame as that room's section enters, in one warm grade, and the strap tick lands on the tall piece in the photo. The three frames then read as one house on one shoot, not three detail shots.
- **motion**: give the signature a second moving idea. As the reviews band enters, the numbered pins drop onto the plan in review order and each card's strap tick snaps on, using the same easing as the beam-wall story. The plan becomes the thing that moves across the page, not only the story.
