COPY: needs copy-chief

# appliance-B · critique round 1 (fast mode; scored as strict anchors)

**Five-second answer (1440-first.jpg, 390-first.jpg):** "Appliance repair in Allentown. They'll tell me whether to fix my machine or buy a new one, and there's a check right here: pick the machine and its age. Call (610) 555-0171, the visit is $95–$129 and goes toward the repair." Clear on both viewports. The verdict seam is in the first screen.

## firstScreen: 8.5
Earned: the copper|teal 12° seam *is* the hero, with the calculator card sitting across it (1440-first.jpg). The phone shows in the header and as the primary button. The proof line has the visit band, a 4.8 rating labelled SAMPLE RATING, and open-now status. At 390 (390-first.jpg) the h1 runs 3 lines, both actions are above the fold and the calculator band peeks at about 110px.
- 1440-first.jpg: trade and city only appear in the mono eyebrow. The h1 "Fix it or buy new? We'll tell you which." names neither the trade nor the place (−0.5).
- 1440-first.jpg: the hero fills the full 900px and the FIX/NEW outline words get cut off at the fold, so the next band doesn't peek (−0.5).
- 1440-first.jpg: there are two copper-filled actions in view (the "Book a visit" bar in the card and the copper field behind the dark call button), so it isn't obvious which one is primary. No deduction, but it's close.

## distinctiveness: 9
The seam appears in the hero, the lifespan story panel (1440-scroll-25.jpg), the price-band divider (1440-scroll-50.jpg), the rule band "Fix it while it's young / Replace it when the math says so", the reviews split (1440-scroll-75.jpg) and the contact/footer close (1440-full.jpg). The FIX/CALL/NEW tag sorts the lifespan rows and the price rows, so it does real work. Archivo wide, a copper/teal palette and a light bone page: nothing in common with sibling A (dark panel, slab serif, amber; appliance/A 1440-first.jpg). Not a 10: the services list (1440-scroll-50.jpg top) and the area band (1440-full.jpg) are standard shapes, and the logo-cover test fails on them.

## type: 8.5
The Archivo 125% wide display against Plus Jakarta body is a real width contrast. The Martian Mono prices are tabular (1440-scroll-50.jpg "$170–$320"). En-dash ranges and curly quotes are correct.
- 1440-first.jpg: three tracked mono caps labels in one view ("APPLIANCE REPAIR · ALLENTOWN, PA", "YOUR VERDICT", "SAMPLE RATING"), and the same thing again at 1440-scroll-50.jpg ("SAMPLE PRICE BANDS", "SAMPLE PRICING", the FIX tags) (−0.5).
- 1440-scroll-25.jpg: "02 / yrs" stacks the unit under the number on every row, so the number column reads as two lines of display text. Put the unit inline at mono size.

## layout: 8.5
The tones alternate well (bone → teal symptoms → bone services → sand prices → copper|teal rule → bone tag → copper reviews → bone area). There is a dense section (the services list) and a quiet one (the tag locator).
- 1440-full.jpg: there's about 1,000px of blank bone between the lifespan story and the symptom band, which is the pin spacer showing as an empty screen in the scroll (−0.5).
- 1440-scroll-75.jpg: the reviews band opens on a copper field with the headline at the left and about 40% of the width empty on the teal side. Nothing sits there until the cards arrive.
- 1440-full.jpg: the services (heading left, list right), the prices (heading left, rows right) and the area (heading left, list right) all use the same shape.

## photo: 7.5
- 1440-rm-full.jpg: the page has exactly one photograph, a dark teal-duotoned kitchen inset in the rule band. It reads muddy and low-contrast, and it carries almost no information (−0.5).
- 1440-full.jpg (motion on): in the full-page capture that photo is missing from the rule band, which shows only flat teal. The clip reveal never resolves unless the visitor scrolls the frame into view (−0.5 here, see Should).
- The line drawings (washer, fridge outlines) do the visual work well, but they aren't photo craft. Nothing about the media sequence shows plan → work → result.

## copy: 8.5
Plain, specific and trade-true: "Text a photo of the model tag", "inside the door frame, left side", "applied to the repair if you go ahead", "If no repair is worth doing, you paid to know, not to be sold." The Sample labels are present on the rating, prices, reviews and terms.
- 1440-full.jpg: #tag "Read us the model number. We'll bring the likely part." is repeated almost word for word in #contact as "Bring us the model number. We bring the likely part." That's the same idea twice, and one version has a tense slip (−0.5).
- 1440-scroll-50.jpg: every one of the 9 service rows ends with the same "Price it →" link with an arrow. This is the arrow-on-every-link tell, and none of those links goes to a price (−0.5).

## mobile: 9
390-first.jpg is composed for the phone: the h1 sits on a bone strip, the seam band comes below with FIX/NEW, and a 3-way Call/Text/Book bar is pinned at the bottom. In 390-full.jpg the lifespan rows restack as cards, the services and price rows stay readable, and there's no sideways scroll (render.json at 320 and 390). The CSS has 640/900/1024 breakpoints, so the pin is ≥1024 only. Not a 10: I can't see a phone-specific crop for the one photo.

## a11y: 9
1440-rm-full.jpg and 390-rm-full.jpg show every section's text, the lifespan rows as a static 4-up and the photo present. Steppers have labels ("One year older"), there's a skip link to #main, forced-colors and print blocks exist, and all the h2/h3 sit under one h1. render.json shows no errors. I couldn't verify the focus styling from the screenshots, so this isn't a 10.

## motion: 8.5
Real hooks: the calculator drives `--seam` across the site, the lifespan story scrubs the age dial while the seam slides (1440-scroll-25.jpg "15 YRS" with the ruler), the price bars sit on a ruler, the tabs are on symptoms and there are hotspots on the tag locator. That's more than 3 hooks, and the motion explains the thesis.
- 1440-full.jpg vs 1440-rm-full.jpg: with motion on, the photo is a flat teal block and the reviews field opens empty (1440-scroll-75.jpg). The entrances are late enough that the page reads unfinished mid-scroll (−0.5 held at 8.5; the hooks earn the 8.5 anchor).

## wow: 9
The repair-or-replace check moves the seam that runs through the whole page, and its output is a verdict word plus the seam position, in the signature's own language (1440-first.jpg). It's something a homeowner would actually use while standing at the machine. Not a 10: from the screenshots, the output isn't something you keep (no printable "verdict sheet" carried into the form).

## polish: 9
SVG favicon and apple-touch, a print stylesheet, forced-colors, lazy images with width/height. Square corners throughout, and one clipped corner as a deliberate motif (1440-first.jpg). The footer is designed (1440-rm-full.jpg).

## Arithmetic
14×8.5 + 12×9 + 10×8.5 + 10×8.5 + 8×7.5 + 8×8.5 + 7×9 + 7×9 + 12×8.5 + 8×9 + 4×9
= 119 + 108 + 85 + 85 + 60 + 68 + 63 + 63 + 102 + 72 + 36 = 861 / 100 = **8.61** → ELEVATE

## Must
None.

## Should
1. **#hero h1 (1440-first.jpg):** put the trade or the city in the h1 itself, for example "Fix it or buy new? Allentown appliance repair that tells you which." (keep it to ≤ 8 words in the display line), or move "Allentown" into the second line.
2. **#hero height (1440-first.jpg):** set the hero to `min-height: calc(100svh - 96px)` at ≥1024 so the lifespan band peeks about 80px above the fold, with the FIX/NEW outline words kept whole.
3. **#lifespan pin (1440-full.jpg):** the full-page capture shows about 1,000px of empty bone after the story. Shorten the pin to ≤ `calc(3 × 55svh + 100svh)` and make sure the spacer carries the bone tone with no dead screen. With pinning off, the gap disappears (rm-full), so the spacer is the cause.
4. **Rule-band photo (1440-full.jpg):** make the inset photo visible by default and run the clip reveal only as an enhancement (`clip-path` from 0 to 100% once it enters the viewport, falling back to visible). Lift the duotone so the kitchen reads: mix the teal at about 55% opacity instead of a full multiply.
5. **#reviews (1440-scroll-75.jpg):** let the first cards sit in the first screen of the band, or place the teal-side "NEW" review card up beside the headline so the right 40% isn't empty on entry.
6. **#contact h2 (1440-full.jpg):** replace "Bring us the model number. We bring the likely part." with a line that's about the request, for example "Tell us the machine. We'll call back with a time and a price band."
7. **#services rows (1440-scroll-50.jpg):** drop the "Price it →" link from the rows. Use a FIX/CALL tag in the signature's language on each row, plus one "See sample prices" link at the end of the list.
8. **Mono caps labels (1440-first.jpg, 1440-scroll-50.jpg):** keep the FIX/CALL/NEW tags and the Sample labels. Turn the section eyebrows ("TYPICAL LIFESPANS", "SAMPLE PRICE BANDS", "SYMPTOM FINDER") into sentence-case Jakarta 600, or cut them.

## Elevate
- **photo (7.5):** turn the one photo into part of the seam instead of a dim inset. Cut two or three library frames (a machine panel off, a part in hand, a running appliance) and sit each one *on* the verdict seam: the copper side gets a warm grade, the teal side the duotone, and the 12° edge clips the frame. The photography then reads plan → part → working machine, in the signature's own geometry.
- **firstScreen (8.5):** make the first screen answer the question before anyone touches it. Show a live default verdict in the card (for example "6-yr washer: FIX" with the seam already at 72%), and set the h1 so its line break falls on the seam ("Fix it" in the copper field, "or buy new?" continuing across). Carry the trade and city into that h1, and let the next band peek.
