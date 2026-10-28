COPY: ok

# autobody-A · critique round 2 (fast mode)

**Five-second test (1440-first.jpg, 390-first.jpg):** "Detroit collision repair, nine stations, a text at each one. They work with every insurer and I pick the shop. Call (313) 555-0107 or send photos. Open now, Detroit to Warren, 4.8 (sample)." The trade and the city are in the h1 now, so all four answers come in under 5 s at both sizes.

What changed since round 1: the h1 carries trade and place; the header open-now pill is gone; the hero filmstrip shows sample texts, not the door drawings, so the imagery is no longer used twice; two library photos added (the gloss band and the promise band); reviews close level; inactive stations at full ink; file inputs restyled as taped "Add photo" slots; services on the phone are a swipe row; the review quote is curly.

## firstScreen: 9.0
Earned: 1440-first.jpg has an h1 with trade, place and the thesis ("Detroit collision repair in nine stations. A text at each one."), the tape eyebrow, a loud yellow Call and a quieter outlined Send photos, and a proof list (open now, area, 4.8 with SAMPLE RATING). The sample-text filmstrip peeks with a pause control. 390-first.jpg: h1 in 4 lines, both actions and proof above the fold, the strip's tapes peek over the mobile bar.
- No deduction. Not 9.5: at 1440 there's ~180px of dead gunmetal between the h1 and the strip (1440-first.jpg).

## distinctiveness: 9.0
Tape & Marker still runs from the hero through the stations (peel to DONE, 1440-scroll-25.jpg), the claim WHO labels, the services, salt, dent check, the reviews "taped to the hood" (1440-scroll-75.jpg), the contact slots and the footer DONE strip (1440-full.jpg). The sample-text strip is a new, trade-true signature use. Nothing like siblings B and C.
- 1440-scroll-50.jpg: services is still a 3×3 grid of equal cards. This is why it isn't 9.5.

## type: 8.5
League Gothic against Libre Franklin gives real scale contrast, Caveat stays on the tape, the review quote is now curly (1440-scroll-75.jpg).
- 1440-full.jpg / 1440-rm-full.jpg: the display headings still use straight apostrophes, and League Gothic makes them very visible: "Where it's done is your choice" (#claim), "Salt doesn't stop at the paint" (#salt), "we don't guess" (STN 4). (−0.5)

## layout: 8.5
Reviews now close level in a featured + 4 layout (1440-scroll-75.jpg). The stations run is shorter, with no tail gap after STN 9 (1440-full.jpg). The tones alternate well, and the gloss photo band adds a full-bleed break before the yellow claim band (1440-rm-full.jpg).
- 1440-full.jpg and 390-full.jpg (motion on): the #gloss band renders as an empty gunmetal block, about 400px tall, with only the text at its foot, because the photo hasn't loaded or revealed in the motion capture. A visitor who scrolls fast sees a black hole. (−0.5)
- 1440-scroll-50.jpg: the 3×3 services grid followed by a lone "Headlight restoration" card next to the price sheet makes the page read as a template for a moment. Covered under distinctiveness, so no second deduction.

## photo: 8.5
There are now two library photos, both graded into the palette and both honestly captioned "Library photo, not our shop": the red tail fin under #gloss (1440-rm-full.jpg) and the leaf on gloss paint in #promise (1440-full.jpg). The drawn doors explain the steps and the photos show the finish, so the double use of the doors is gone (1440-first.jpg).
- 1440-rm-full.jpg: the fin is a 1950s show car, not a Detroit commuter car after a collision. It reads as a car-show image, not "the finish we hand back". There's still no shop floor, booth or tech in the work. Not deducted further, and it sits at the stock ceiling for this pass mark.

## copy: 9.0
Plain, trade-true copy that follows the order of the work: "Station 3 is the phone call nobody likes. We make it, not you.", the "You hear:" line under each station, and "No VIN, no claim number needed to start" (1440-full.jpg). Sample labels sit on the rating, texts, prices, reviews, promise and licence (1440-full.jpg #promise). Everything checks against facts.json.
- 1440-full.jpg #salt: "Salt doesn't stop at the paint. Neither do we." is still the one slogan-shaped line (no deduction at 9).

## mobile: 9.0
390-full.jpg: the services are now a "Swipe for all ten jobs" snap row, the stations stack with a drawing per step, the claim tabs wrap into two rows, the mobile Call / Text photos bar is present, and render.json shows no overflow at 320 or 390.
- 390-full.jpg: still about 21,300px tall. The six reviews are a full stack (density, no deduction at 9).

## a11y: 9.0
1440-rm-full.jpg and 390-rm-full.jpg show every station, photo, label and review. The inactive stations are now at full ink (1440-scroll-25.jpg, STN 8). The strip has a pause control (1440-first.jpg). The photo slots are labelled "Add photo" targets (1440-full.jpg #contact).
- 1440-scroll-25.jpg: the "You hear:" detail lines are light grey at about 14px. They're borderline, so check them with axe. No deduction.

## motion: 8.5
Split h1, a sample-text marquee with pause, the station counter with a door-finish change and a tape peel to DONE (1440-scroll-25.jpg), claim tabs, the dent-check route lights, the services swipe row.
- 1440-scroll-50.jpg / 1440-scroll-75.jpg: outside the stations, the motion is stagger-in reveals only. The second photo band only fades in, and in motion captures it hasn't loaded yet (1440-full.jpg). The signature moves in one place.

## wow: 8.5
The door that changes finish as the tape peels station by station is tied to the thesis (1440-scroll-25.jpg). The sample texts in the hero now set up the story instead of spending it (1440-first.jpg).
- 1440-full.jpg: the dent check and the claim path give answers, but you don't keep anything. No single moment makes you reach for the phone to show someone.

## polish: 9.0
The taped "Add photo" slots replace the native inputs (1440-full.jpg #contact). Square corners and one rule weight stay consistent. The footer closes on STN 9 DONE with an honest credit line. Icons, OG image, print and forced-colors styles are present (per dist).

## Arithmetic
14×9 + 12×9 + 10×8.5 + 10×8.5 + 8×8.5 + 8×9 + 7×9 + 7×9 + 12×8.5 + 8×8.5 + 4×9
= 126 + 108 + 85 + 85 + 68 + 72 + 63 + 63 + 102 + 68 + 36 = 876 / 100 = **8.76**

That's under the 8.8 last-round delivery line → NEEDS_HUMAN.

## Must
None.

## Should
1. **Display apostrophes (#claim-h, #salt-h, STN 4 h3; 1440-full.jpg):** replace `it's` → `it’s`, `doesn't` → `doesn’t`, `don't` → `don’t`. Sweep every heading and button for U+0027.
2. **#gloss band empty in motion captures (1440-full.jpg, 390-full.jpg):** set `loading="eager"` on the fin photo (or give the band a `background-image` poster of the same file). Don't gate the image's opacity on a reveal, so the band is never an empty gunmetal block.
3. **Hero dead space (1440-first.jpg):** pull the strip up about 120px at ≥1100px (for example, cut the hero's bottom padding), so the filmstrip sits closer to the proof list.
4. **Services desktop (1440-scroll-50.jpg):** the lone "10 · Headlights" card next to the price sheet looks orphaned. Put the headlights into the price sheet's column, or let the price sheet span the full 3 columns under a 3×3 grid.
5. **#gloss photo choice (1440-rm-full.jpg):** if the library has one, prefer a modern panel under booth light over a 1950s show-car fin, so "the finish we hand back" reads as a collision job.

## Elevate
- **motion:** let the tape travel. The same peel-to-DONE that runs in the stations should also run when a claim-path tab is picked (the WHO tapes peel in order), when the dent check lights a route, and when a photo slot is filled. The thesis "you hear from us at every step" would then move everywhere you act, not only in one story.
- **layout:** give the page one shape. Merge the gloss photo and the stations end into one edge-to-edge "DONE" moment (the door drawing resolves into the real gloss photo), then give the page a quiet paper breath before the yellow claim band. Break the services out of the equal 3×3 into a taped work-order board where crash work is large and the small jobs are a ruled list.
