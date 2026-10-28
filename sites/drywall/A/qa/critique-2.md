COPY: ok

# drywall-A · critique round 2 (fast mode, scored to the same anchors as strict)

## Five-second answer
1440-first.jpg / 390-first.jpg: "Knife & Hawk, drywall patching in Harrisburg. The patch disappears under paint. I call (717) 555-0161 or price my patch. Why them: they tell me exactly how it's done (cut square, back it, tape it, three coats) and send a photo after each coat." This passes, and the h1 now carries both trade and city.

## What changed since round 1
These are fixed and I don't re-list them: the inactive story-step contrast (1440-scroll-25.jpg now shows full-ink labels on a striped board texture, so the material state replaces the faded ink), the h1 with trade and city, the air under the proof line, the dropped 01–08 numerals, the services drawing in the left column, the story counter ("Visit 1 of 3 · taped"), the sizer label and price split, the texture "Smooth" panel (it now draws a taped seam under a side light), the 2-line cracks h2, the balanced review grid, the review chips at 40px with a rule, and the mobile hero re-cut as a 16:9 strip above the h1 (390-first.jpg).

## firstScreen: 9.0
Earned (1440-first.jpg): "Harrisburg drywall patches that vanish under paint." is set on paper chips. There is one filled Call and one outline "Price my patch", the phone is in the header, and the proof row (open now, area, 4.9, SAMPLE RATING) has its own air. The taped patch frame and the ghost "Three coats." are the signature, and both show on the first screen. On 390-first.jpg the photo strip comes first, then a 3-line h1, then both actions, with the sticky Call/Text/Price bar below.
Deductions:
- 1440-first.jpg: the hero ends at about 840/900px, so only about 60px of the paper band peeks. The 12px caps eyebrow now just repeats the h1. That holds it at 9.

## distinctiveness: 9.0
Earned: the services drawing ("the wall before the knife", with a blade shape at the top edge, 1440-full.jpg), the taped patch frame, the feathered seams, the board-texture story steps, the texture chips on the review cards (1440-scroll-75.jpg), the knife-swept strip through the mud photo (1440-rm-full.jpg) and the "Primed. Ready for your painter." footer. The motif runs from top to bottom, and nothing here reads as drywall/B.
Deductions:
- 1440-full.jpg: the band seams are still a faint torn line. They don't visibly get finer down the page, so the "rough to primed" arc reads from the background tones more than from the knife.

## type: 9.0
Earned: Hanken Grotesk 800 tight display with Public Sans text. The sizer now sets "Small hole or dent patch" on one line and "$150–$325" alone at display size (1440-full.jpg). Ledger ranges are tabular en-dash. Curly quotes. Eyebrows are now limited to the hero, FIX NOW OR WAIT? and THE FINAL COAT. The footer gives a real scale-contrast moment.
Deductions:
- 1440-scroll-50.jpg: the sizer meta "(up to fist size, primed)" sits in parentheses at about 11px right under the display price, crowding it. The "3 visits" line mixes a display numeral with 14px gray text on a wrapped line (1440-full.jpg).

## layout: 8.5
Earned: the tones step down the page with no two darks touching. There is a full-bleed mud break, a dense ledger, and a quiet area band. The services column is now used, and the review grid is 2 + 3 with the callback card closing the row (1440-scroll-75.jpg).
Deductions:
- 1440-full.jpg: after the four steps, the story band runs about 1,700px of empty skim tone before the mud break (pin spacer). In the scrolling frame (1440-scroll-25.jpg) it reads fine, but the band has nothing else in it for about 3 screens (−0.5).
- 1440-full.jpg (ledger band): the right column ends about 550px above the sizer card, which leaves an empty hole under "Ranges are sample figures". The area band has the same problem: the town list stops about 400px above the hours card.

## photo: 8.5
Earned: the on-topic tape-in-corner hero is treated as a taped patch (1440-first.jpg). The mud close-up break is honest texture (1440-full.jpg). One cool grade throughout.
Deductions:
- 1440-rm-full.jpg (story card 3) / 390-full.jpg: the only video is still a small 4:3 thumbnail inside a step card, below the text. It is the one moving-image asset, and it's spent where it's barely seen. There are only two real stills.

## copy: 9.0
Earned: real trade voice ("pin it, don't just caulk it", "Four steps, in the order the mud allows.", "Nothing is booked until we talk."). The CTA naming is now consistent: "Price my patch" in the header, hero and bar, "Price this repair" on rows, and "Book this size of repair" as the step after pricing. The counter reads correctly. Every sample is labeled, and the facts match facts.json.
Deductions:
- 1440-full.jpg: "Price this repair" appears 8 times in a row. It's consistent, but it reads as a template link. One link under the list, or a verb fitted to each row, would read as written.

## mobile: 9.0
Earned: 390-first.jpg is re-cut, with the photo strip on top, the h1 on 3 lines and full-width actions. The story stacks into 4 drawn cards with no pin (390-full.jpg). The texture tabs go 2×2, the ledger stays readable, and render.json shows no overflow at 320/390.
Deductions:
- 390-full.jpg: "Send a photo with the light from the side" wraps to 2 centered lines in a full-width button. The ledger item names wrap to 2 lines beside the prices.

## a11y: 9.0
Earned: the round-1 contrast failure is fixed (1440-scroll-25.jpg: inactive steps use full ink on board texture). Reduced motion shows every step as a static card with all copy (1440-rm-full.jpg). One h1, clean h2/h3 order (dist), a labeled ZIP input, a pause control on the video, and forced-colors and print CSS.
Deductions:
- 1440-first.jpg: the "Harrisburg to Hershey" and "from 142 reviews" proof items are mid-gray at about 13px on a ribbed gray texture. That looks close to the 4.5:1 line. Darken them to the ink used for "Open now".

## motion: 8.5
Earned: the pinned 4-step story with the drawn panel changing per step (1440-scroll-25.jpg), the services wall map on hover, the sizer drawing, texture tabs, the checklist, the ZIP check and the multi-step form. Reduced motion collapses cleanly.
Deductions:
- 1440-scroll-25/50/75.jpg: none of the motion frames catches the knife sweep. The mud-break strip appears only in the reduced-motion capture, and the ledger rows are static at 50%. The signature motion the page is named for still isn't something a visitor would describe after one scroll.

## wow: 9.0
Earned: the patch sizer (size, place and finish produce a drawn patch, a price, a visit count and a dust note, 1440-full.jpg). The texture matcher now draws each texture with a seam under side light, and the services wall map marks each repair.
Deductions:
- 1440-scroll-50.jpg: the sizer's drawing is still a small square in a 135px strip. The tool's result is mostly text.

## polish: 9.0
Earned: square radius held everywhere, the review chips now read as texture chips (1440-scroll-75.jpg), the sample tags hug their text, and there is a favicon, OG, print and forced-colors CSS. The footer is a designed close.
Deductions:
- 1440-full.jpg (hours card): the clock icon sits alone on its own line between "Hours" and "Open now". It should be inline.

## Arithmetic
14×9 + 12×9 + 10×9 + 10×8.5 + 8×8.5 + 8×9 + 7×9 + 7×9 + 12×8.5 + 8×9 + 4×9
= 126 + 108 + 90 + 85 + 68 + 72 + 63 + 63 + 102 + 72 + 36 = 885 / 100 = **8.85**

Fast mode, round 2 = last round. The weighted score is below 9.0, but it is at least 8.8 with no mustFix and clean checks, so the after-last-round rule applies.

## Must
None.

## Should
1. **#story band (1440-full.jpg):** shorten the pin distance (for example `end: "+=180%"` instead of about 300%), or give the panel a running caption so the band isn't empty skim for 3 screens.
2. **Ledger band (1440-full.jpg):** fill the hole under the price list. Move the "Ranges are sample figures…" note and the Tom H. texture review there, or make the ledger `position: sticky; top: 96px` beside the sizer.
3. **Area band (1440-full.jpg):** put the ZIP check under the town list on the left, so the left column ends level with the hours card.
4. **Hero proof row (1440-first.jpg):** set "Harrisburg to Hershey" and "from 142 reviews" to the same ink as "Open now" (#1D2327, or at least #4A5357).
5. **Sizer meta (1440-scroll-50.jpg):** drop the parentheses and set "up to fist size, primed" at 14px with 8px above it. Put "3 visits" on its own line, with the dust note under it at body size.
6. **Services links (1440-full.jpg):** replace the 8 "Price this repair" links with one "Price my patch →" under the list. Make the whole row the hover target for the wall map.
7. **Hours card (1440-full.jpg):** put the clock icon inline before "Open now · until 4:30 pm".
8. **Story video (1440-rm-full.jpg):** promote the knife-and-mud clip to the mud break band as a full-bleed muted loop (poster = the current still), or give it the full card width above the text.

## Elevate
- **motion (8.5):** make the knife pass the visible verb of the scroll. When each band enters, the blade sweeps once along its seam and leaves the edge finer than the one before: rough teeth at the services band, a hairline at the form. The ledger rows get the same skim, one row after another, so a mid-scroll frame catches the blade mid-pass. The reduced-motion strip that is already in the mud break becomes the final state of that sweep.
- **layout (8.5):** let the knife pass shape the page instead of filling columns. Collapse the story's pin spacer into a tight, panel-led band. Then set the ledger and the sizer as one "wall sheet": the sizer's drawn patch grows into a full-height board on the left, and the price rows sit as ruled marks on it. The dense middle of the page then reads as one material object, not two cards with a hole between them.
