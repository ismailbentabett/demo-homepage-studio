COPY: ok

# appliance-B · critique round 2 (fast mode, scored on the same anchors as strict)

**Five-second answer (1440-first.jpg, 390-first.jpg):** "Ohm & Hinge, appliance repair in Allentown. They'll tell me whether to fix my machine or buy new, and the card already says 'Worth fixing.' for a 5-year-old washer. I call (610) 555-0171. The visit is $95–$129 and goes toward the repair." Clear at both sizes. The city and the trade are in the display lockup now.

**What changed since round 1:** the h1 lockup carries "Allentown appliance repair says which." The card shows a default verdict. The lifespan pin no longer leaves an empty screen (1440-full.jpg). The rule-band photo shows with motion on and is split-graded across the seam (1440-scroll-50.jpg). The service rows have their own links instead of "Price it →". The #contact h2 is new. Eyebrows are sentence case. The units sit inline ("02 yrs"). The NEW review card now sits beside the reviews headline (1440-scroll-75.jpg).

## firstScreen: 9
Earned: the seam hero with a live verdict card ("Worth fixing.", with the typical life and the Sample price band). The city and trade are in the h1 lockup. There's one dark primary call, a secondary text action, and a proof line with the visit price, a SAMPLE RATING and open-now status (1440-first.jpg). The hero stops at about 838px and a bone strip peeks below it. 390-first.jpg: the h1 runs 2 lines plus a sub-line, both actions are above the fold, the seam band peeks and the Call/Text/Book bar is pinned.
- Not 9.5: the peek at 1440 is a blank bone strip about 60px tall, so it doesn't promise the next section. The FIX outline word still touches the hero's bottom edge.

## distinctiveness: 9
The seam runs through the hero, the lifespan panel, the price rule, the rule band, the reviews split and the close (1440-full.jpg). The FIX/SAFE CHECK/STOP/NEW tags do real sorting work (1440-scroll-25.jpg, 1440-scroll-75.jpg). Nothing in common with sibling A. Not a 10: the services list and the area band are still generic shapes (1440-full.jpg).

## type: 9
The Archivo wide display against Jakarta body has real width contrast. The mono is tabular on prices (1440-scroll-50.jpg "$190–$350"). The eyebrows are now sentence case ("What we open up", 1440-scroll-25.jpg), so the mono caps are reserved for the tags. Not 9.5: the reviews aside "The one where we said 'buy new'…" is set as body-size mono on teal (1440-scroll-75.jpg) and reads like code, not like a caption.

## layout: 8.5
The tone rhythm is good, and the round-1 pin gap is gone (1440-full.jpg).
- 1440-full.jpg: services (heading left, list right), prices (heading left, rows right) and area (heading left, list right) still repeat the same two-column shape three times in four bands (−0.5).
- 1440-scroll-50.jpg: the left 40% of the price section is empty sand for a full screen. The heading scrolls away while the rows continue on the right.

## photo: 8.5
Earned: the rule-band kitchen now shows with motion on, cut by the 12° seam, warm on the FIX side and cool on the NEW side (1440-scroll-50.jpg). The services aside adds three small frames (1440-full.jpg).
- 1440-scroll-50.jpg: the main frame is an empty, generic kitchen. No appliance is open, no part, no hand, so it carries mood but not the trade. Still no plan → part → running-machine sequence (−0.5 held from round 1, partly earned back).

## copy: 9
Plain and trade-true. The round-1 repetition is fixed: #contact now reads "Tell us the machine. We'll call back with a time and a price band." (1440-full.jpg). The service links are specific ("See the not-cooling band", 1440-scroll-25.jpg). The Sample labels are on the rating, reviews and prices.
- 1440-first.jpg: the hero lede "A 12-year-old fridge with a tired compressor, we tell you on the phone." is a comma splice that reads as a fragment. See Should.

## mobile: 9
390-first.jpg is composed for the phone. 390-full.jpg restacks every band and render.json shows no overflow at 320/390. Not 9.5: the price ruler rows on the phone are dense.

## a11y: 9
1440-rm-full.jpg shows every section's text, the lifespan rows static and the photo present. There's a skip link, labelled steppers, one h1 and forced-colors CSS in dist. render.json has no errors. I can't verify focus styling from the screenshots.

## motion: 9
The calculator drives the seam site-wide, the lifespan scrub works with its age dial (1440-full.jpg), and the price ruler bars, symptom tabs and tag hotspots are all there. Round-1 late entrances are fixed: the photo is visible and the reviews are populated on entry (1440-scroll-50.jpg, 1440-scroll-75.jpg).

## wow: 9
The repair-or-replace check now answers before you touch it, and its verdict moves the page-wide seam (1440-first.jpg). Not 10: the verdict isn't carried into the #contact form as a kept result (1440-full.jpg).

## polish: 9
Square system with one clipped-corner motif used consistently on the cards (1440-scroll-25.jpg, 1440-scroll-75.jpg). The footer is designed (1440-rm-full.jpg). Favicon, print and forced-colors are in dist.

## Arithmetic
14×9 + 12×9 + 10×9 + 10×8.5 + 8×8.5 + 8×9 + 7×9 + 7×9 + 12×9 + 8×9 + 4×9
= 126 + 108 + 90 + 85 + 68 + 72 + 63 + 63 + 108 + 72 + 36 = 891 / 100 = **8.91**

## Must
None.

## Should
1. **#hero lede (1440-first.jpg):** replace "A 12-year-old fridge with a tired compressor, we tell you on the phone." with "Got a 12-year-old fridge with a tired compressor? We'll tell you that one on the phone."
2. **#prices (1440-scroll-50.jpg):** make the left column `position: sticky; top: 96px` at ≥1024, so the heading and the "visit fee goes toward the repair" line stay beside the rows. Or put a visit-fee summary block there.
3. **Reviews aside (1440-scroll-75.jpg):** set "The one where we said 'buy new'…" in Jakarta 500 italic or regular at 15px, not mono.
4. **Hero peek (1440-first.jpg):** let the lifespan eyebrow and the top of the h2 show in the ~60px under the hero, or cut the bottom padding so the FIX outline word clears the edge.

## Elevate
- **layout (8.5):** break the repeated heading-left/list-right shape. Turn #services into a full-width grid of nine tiles sorted by the seam (FIX-likely machines on the copper side, CALL/NEW on the teal side, with the 12° line running through the grid). Then the services, prices and area bands each have their own composition.
- **photo (8.5):** make the photography show the trade, not a room. Swap the empty kitchen for library frames of the work: a panel off with a part in hand on the FIX side, and a running machine on the NEW side. Sequence them so the seam reads diagnosis → part → working machine.
