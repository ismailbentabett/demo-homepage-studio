COPY: needs copy-chief (copy 8.5: five names for the primary action)

# pool-A (Tileline Pool Care), critique round 2 (fast mode)

**Five-second test (1440-first.jpg, 390-first.jpg):** "Pool care in Tampa. They write down everything they do at every visit and text it to you, about $140–190 a month (sample). I'd press Price my pool or call the number top right. Why them: the report card on the right shows exactly what a visit looks like." This passes now. What still fails is the look: there is no pool and no water anywhere, just a dark gradient.

**What changed since round 1:** the h1 now names Tampa, the sticky visit card exists and ticks with scroll, every section has a time stamp, the troubleshooter prints a cause / first action / sample price slip (CSS `:has()`), the reviews heading is honest, the thanks text is honest, the alt text is descriptive, and the separators are fixed. The media is unchanged. All nine slots are still placeholders (dist/media files are 122-byte stubs, and the manifest has `placeholder: true`).

## First screen: 8.0
- Earned (1440-first.jpg): a 5-word, 2-line h1 with trade and city, a primary and a ghost button, the phone in the header, a sample price line, the visit card (the signature) in view, and the next band peeking about 64px. 390-first.jpg: the h1 is 2 lines, both actions are above the fold, and the band peeks about 90px.
- −1.0: the hero is family 1 (video) with no video and no image. The space between the h1 and the card at 1440 is an empty gradient. On 390 the card is dropped, so the phone first screen is only text on a gradient.

## Distinctiveness: 7.5
- Earned: the signature now does real work. It's the sticky card that ticks per section (1440-scroll-25/50/75.jpg), there are stamps 08:00–08:42 on every section head, the troubleshooter slip uses it, and the footer reads "08:45 Report sent. End of log." (1440-full.jpg). It shows in more than 4 sections and organises the page.
- −1.0: sibling pool-B (sites/pool/B/qa/screens/1440-first.jpg) has the same hero object: h1 on the left and a white "Visit report" card on the right with a "Sample report" pill. The palette and faces differ, but a contractor shown both would see one template.
- −0.5: mono pill micro-labels. 1440-scroll-50.jpg has 3 "Sample price" pills, a stamp, and a card full of mono times.

## Typography: 8.0
- Earned: Sora at display size with tight tracking against Karla body gives real scale contrast (1440-first.jpg). The mono accent for times and prices is in concept.json. Ranges use en dashes and quotes are curly (1440-scroll-75.jpg).
- −0.5: 3 or more tiny tracked mono labels in one view (1440-scroll-50.jpg).

## Layout and rhythm: 8.0
- Earned: the tones alternate across the page (1440-full.jpg). The troubleshooter is now an asymmetric split, with the slip overlapping the photo frame (1440-full.jpg). Reviews have a lead quote over 3 columns, and pricing is a 3×2 grid with rules.
- −0.5: the 08:24 break band is about 500px of empty striped gradient (1440-full.jpg, bottom of 1440-scroll-25.jpg). It's a blank gap until a real photo goes in.
- In 1440-rm-full.jpg the right column (~430px) is empty from process to footer wherever the sticky card isn't on screen.

## Photo and video: 4.0 (mustFix)
- 1440-full.jpg, 390-full.jpg: hero, 4 process frames, break, cloudy water, pump and neighbourhood are all gradient placeholders, and there is no hero video. The stamp-in-corner frame treatment (08:02, 08:09…) is a good frame language, but it has nothing inside it. The alt text now describes photos the visitor can't see. The score can't move until real media lands.

## Copy: 8.5
- Earned: both demo-honesty items are fixed. Trade nouns are concrete (capacitor, cartridge, chloramines, skimmer throat, "water drawn at elbow depth"). The troubleshooter answers say "it depends" the honest way.
- −0.5: the primary action has five names: "Price my pool" (1440-first.jpg), "Get this every week" (visit card), "Price my cleanup" (1440-scroll-50.jpg), "Price it" (price cards) and "Book a visit" (1440-full.jpg contact).
- "Repair before replace." (1440-full.jpg) is a slogan h2. Better: "A humming pump is usually a part, not a pump."

## Mobile: 8.5
- Earned (390-first.jpg): call is in the header, the h1 is 2 lines and both actions are above the fold. 390-full.jpg: on the phone, pricing turns into a swipe row, which is a real phone decision, and the mobile bar carries the current log line. render.json shows no overflow.
- Not 9: the phone has no visit card in the first screen, and the process frames are stacked desktop crops.

## Accessibility: 8.5
- Earned: in 1440-rm-full.jpg and 390-rm-full.jpg every word is visible. There's a skip link, the inputs are labelled, and the troubleshooter output uses `:has()`, so it works with JS off.
- Not 9: the "Sample" tags in 1440-scroll-75.jpg are around 11px, and the focus design can't be verified from the frames.

## Motion and interaction: 8.5
- Earned: the visit card ticks as you scroll (5 lines in 1440-scroll-25.jpg, 7 in -50, 8 in -75), so the motion explains progress. Reveals now land before the reader arrives (the pricing cards are visible in 1440-scroll-50.jpg).
- −0.5: the waterline rail is the same fixed stub (y 64–540) in every 1440 scroll frame. The "waterline advances with scroll" story from concept.json does not read.

## Wow moment: 8.5
- Earned: the sticky card completes a sample report as you scroll, and the troubleshooter prints its answer in the same slip format (dist `#troubleshooter .ts-row`: cause, first action, sample price). These are two connected moments.
- Not 9: no frame shows the slip filled. With placeholder media, the moment sits next to empty boxes.

## Polish: 8.5
- Earned: SVG favicon, apple-touch icon, OG image, JSON-LD, print and forced-colors styles are in place. The hours and footer separators are fixed (1440-rm-full.jpg).
- −0.5: the radius is mixed. Pill tags and area chips sit beside square buttons and 2px cards (1440-scroll-50.jpg, 1440-rm-full.jpg).

## Arithmetic
14×8 + 12×7.5 + 10×8 + 10×8 + 8×4 + 8×8.5 + 7×8.5 + 7×8.5 + 12×8.5 + 8×8.5 + 4×8.5
= 112 + 90 + 80 + 80 + 32 + 68 + 59.5 + 59.5 + 102 + 68 + 34 = 785 / 100 = **7.85**

Expected verdict: **NEEDS_HUMAN**. This is the last fast round, photo is below its floor and mustFix is not empty.

## Must
1. **All media, 1440-full.jpg / 390-full.jpg, dist/media/*.jpg.** Problem: every slot is a 122-byte placeholder, and there is no hero video. Fix: send niches/pool to media curation. Approve real frames (dusk screened lanai pool for the hero, brush on tile, test vials, chemicals, baskets, waterline tile, cloudy water, pump pad, Tampa street) plus a hero clip with a poster, then rebuild.

## Should
1. **Primary action naming (1440-first.jpg, visit card, #contact).** Use one verb family: "Price my pool" in the hero, card and contact, and "Price this job" on the price cards. Change "Get this every week" to "Price my pool".
2. **Break band #break (1440-full.jpg).** Once a photo exists, cap it at 60svh with the 08:24 caption. If there's still no photo, cut the band.
3. **Waterline rail (1440-scroll-25/50/75.jpg).** Make the rail fill to the scroll position (scaleY or clip driven by progress) instead of a fixed 476px stub.
4. **Mono pills (1440-scroll-50.jpg).** Replace the 6 "Sample price" pills with one "Sample prices" tag in the #pricing head, and use plain text "Sample" after each unit.
5. **Radius (1440-scroll-50.jpg, #area chips).** Choose one radius, 2px. Make the pills and chips 2px, or make the buttons match the pills, but not both.
6. **390 first screen (390-first.jpg).** Show a 2-line collapsed visit strip ("07:58 Arrived, gate latched") under the buttons, so the signature is on the phone first screen too.
7. **"Repair before replace." h2 (1440-full.jpg #repair).** Replace it with "A humming pump is usually a part, not a pump."

## Elevate
- **Photo (4.0):** make the media look like one Tampa morning. Use one cool dawn grade on every frame. Treat every frame as an attachment in the visit log, with its time stamp burned into the corner. Make the 08:24 break a full-bleed waterline-tile close-up whose tile line continues into the cobalt rail.
- **Distinctiveness (7.5):** pool-B also has a "report card on the right", so A needs a different form for its log. Make the log the page's left spine: a running column of times beside the waterline rail that ticks as each section passes. Make the hero a full-bleed pool at 07:58, and let the report slip appear only as the completed object at #contact. The idea stays the same, and the composition becomes A's alone.
