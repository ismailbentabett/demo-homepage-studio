COPY: ok (copy 9; the one mustFix is a photo/claim issue, not copy)

# pool-A (Tileline Pool Care), critique round 3 (fast mode)

**Five-second test (1440-first.jpg, 390-first.jpg):** "Pool care in Tampa. Same tech every week, and they text me the time, the readings and a photo, about $140–190 a month (sample). Press Price my pool or call the number top right." It passes. The photo trips the first second, though: it shows a man on a ladder re-screening a cage, so for a moment it reads like a screen-repair company, not a pool-care company. The water is only the bottom-right quarter of the frame.

**What changed since round 2:** real photos everywhere, so the placeholder mustFix is closed. The visit log is now a left spine that ticks with scroll instead of a right-hand card. The hero is a full-bleed photo with a log line under the buttons, and that line also appears on 390. The primary action is unified ("Price my pool" / "Price this job"). The h2 is now "A humming pump is usually a part, not a pump." The price pills are plain "· Sample" text. The 08:22 step uses a pressure-gauge diagram, and the 08:24 break is a real tile close-up.

## First screen: 8.5
- Earned (1440-first.jpg): a 5-word, 2-line h1 with trade and city. The scrim keeps it readable over the cage struts. One primary button and a ghost, the phone in the header, a sample price line, and a "07:58 Arrived, gate latched" log line, so the signature is in the first screen. 390-first.jpg: the h1 is 2 lines, both buttons and the log strip are above the fold, and the next band peeks.
- −1.0: the hero subject is a cage re-screen (1440-first.jpg; dist alt "A worker on a ladder re-screening a Florida pool cage"). The trade the visitor is buying, a clean pool and a written visit, is the smallest thing in the frame. On 390-first.jpg the crop is struts and a torso, with no water at all.
- −0.5: on 1440-first.jpg the bottom 64px shows a half-started spine header ("Visit report / Sample report") cut off against an empty paper band. The peek reads as a seam, not an invitation.

## Distinctiveness: 8.5
- Earned: the left spine log (1440-scroll-25/50/75.jpg) is A's alone. It's a running column of times beside the cobalt rail that checks off as each section passes, and every section head carries its time stamp (08:00 Visit log … 08:42 Book). The footer reads "08:45 Report sent. End of log." (1440-full.jpg). The hero is now a full-bleed photo, so it no longer shares pool-B's split hero with a card on the right (sites/pool/B/qa/screens/1440-first.jpg).
- −0.5: the log component still uses the same mono "Visit report" title with a boxed "Sample report" tag that pool-B's hero card uses (1440-scroll-25.jpg vs B 1440-first.jpg). A contractor shown both would spot the shared widget.
- −0.5: the gauge diagram (1440-scroll-25.jpg, 08:22) is the strongest drawn object on the page and appears once. The rest of the visual language is stock frames with a stamp.

## Typography: 8.5
- Earned: Sora display at tight tracking over Karla body gives real scale contrast (1440-first.jpg, 1440-scroll-50.jpg). Mono is used for times and figures only. En-dash ranges and curly quotes (1440-scroll-75.jpg). The reviews lead quote is set large, and its 3 columns hold a calm measure.
- −0.5: boxed mono tags still recur: "Sample pricing" in the hero, "Sample report" twice in one view, "Sample prices" and "Sample rating" (1440-scroll-50.jpg shows 3 boxed tags plus 6 "· Sample" suffixes). The hero says "Sample range … [Sample pricing]", the same word twice in one line (1440-first.jpg).

## Layout and rhythm: 8.5
- Earned (1440-full.jpg): the tones run photo, paper, deep, tile, paper, deep, paper, mid, paper, aqua, deep. The troubleshooter split has the slip overlapping the photo (cropped d1 / 1440-full.jpg). Pricing is a ruled 3×2 grid, and reviews have a lead quote over 3 columns.
- −0.5: the spine is a 320px dark column for the whole page height (1440-full.jpg). Below the 10 log lines, roughly 60% of each viewport's spine is empty navy (1440-scroll-25/50/75.jpg, y 540–820), and the content is squeezed into ~1050px. On paper sections the hard navy/paper split at x=320 reads like an admin sidebar.
- −0.5: the 08:24 tile break (1440-full.jpg) is still about 500px tall. It's a texture now, but it holds a whole viewport with one 10px caption.

## Photo and video: 7.0 (mustFix: hero subject)
- Earned: real frames now, with a mostly cool grade. Each frame carries its burned-in time stamp (08:02, 08:09, 08:15, 08:30, 08:36), which makes the photos attachments to the log, and that is the right idea. The tile close-up (1440-full.jpg) and the Tampa palms (#area) work.
- −1.0: the hero shows a worker re-screening a pool cage (1440-first.jpg, alt text in dist). Screen re-screening is not a service in facts.json. "Screen enclosure pool care" there means cleaning the corners under a cage. The hero therefore advertises work the business does not do. → mustFix.
- −1.0: three frames are off subject for a Tampa backyard route. 08:15 "Balance it" (1440-scroll-25.jpg) is a resort or public pool with a footbridge and pavilion. The 08:30 troubleshooter photo (cropped d1 / 1440-full.jpg) is a hotel lagoon with a panorama horizon. The 08:36 pump frame (1440-full.jpg #repair) is a commercial plant room with yellow lagged pipes, not a residential pump pad.
- −0.5: the 08:09 test-vials frame (1440-scroll-25.jpg) is a soft, low-contrast pile of plastic cups and reads as a stock filler. The 08:02 skim frame has a pink object dominating it (1440-full.jpg).
- No hero video, but that's not docked further: a strong still is acceptable.

## Copy: 9.0
- Earned: one action family ("Price my pool" in the hero, spine and contact; "Price this job" on cards and the slip) (1440-scroll-50.jpg, 1440-full.jpg). Trade nouns are concrete ("water drawn at elbow depth, away from the return jets"; "Needle in the amber: the cartridge comes out", 1440-scroll-25.jpg). "A humming pump is usually a part, not a pump." is a real h2. The reviews heading is honest. Every review, the rating (4.9 / 312) and every price matches facts.json.
- Not 9.5: "One tech, one weekday, and the readings in writing." (1440-full.jpg intro) repeats the hero subline almost word for word.

## Mobile: 9.0
- Earned (390-first.jpg): call in the header, a 2-line h1, both actions and the log strip above the fold. 390-full.jpg: pricing becomes a swipe row with a peek of the next card (m2 crop), the slip stacks under the photo, and render.json reports no overflow.
- Note: in 390-full.jpg the fixed bottom bar is captured mid-page over the intro h2 (y≈845–940) and its right-hand outlined button shows no readable label. This is probably a capture artifact of the hidden-until-scroll bar. Verify that the second button in the mobile bar has a visible label (see Should 6).

## Accessibility: 8.5
- Earned: in 1440-rm-full.jpg and 390-rm-full.jpg every word is visible and the spine shows all ticks. Skip link, labelled ZIP and form inputs, real checkboxes in the troubleshooter, descriptive alt text (dist).
- Not 9: the boxed "Sample …" tags and the spine time column are ~11–12px mono, and the "Tick what you see" footnote is small grey on paper (1440-scroll-50.jpg). Focus styles can't be verified from the frames.

## Motion and interaction: 9.0
- Earned: the spine ticks per section (5 checks in 1440-scroll-25.jpg, 7 in -50, 8 in -75), and the current line goes bold, so the motion explains progress. The waterline rail now advances: it's a partial fill in 390-full.jpg against full length in 390-rm-full.jpg, which fixes the round 2 stub. Reveals land before the reader arrives (pricing visible in 1440-scroll-50.jpg).
- Not 9.5: no frame shows the troubleshooter slip printing a result, so the second interaction is unproven on screen.

## Wow moment: 8.5
- Earned: a page that is a 30-minute visit, with the spine completing a sample report as you scroll and the gauge drawn in the same stamp language. That's the thing to show a contractor.
- Not 9: the log is a list checking off in a sidebar. Nothing on the page shows the payoff, the finished report with the photo that lands on the homeowner's phone at 08:45. The slip (1440-scroll-50.jpg) is shown empty: "Nothing ticked yet".

## Polish: 8.5
- Earned: favicon, OG, JSON-LD, hours table and a footer with a credits line (1440-full.jpg). The tags and buttons are now square-cornered and consistent.
- −0.5: a seam at the 1440 hero bottom, where the spine header starts inside the hero's last 64px (1440-first.jpg). The mobile bar ghost button looks empty in 390-full.jpg.

## Arithmetic
14×8.5 + 12×8.5 + 10×8.5 + 10×8.5 + 8×7 + 8×9 + 7×9 + 7×8.5 + 12×9 + 8×8.5 + 4×8.5
= 119 + 102 + 85 + 85 + 56 + 72 + 63 + 59.5 + 108 + 68 + 34 = 851.5 / 100 = **8.52** (8.515)

Expected verdict: **FIX**, because mustFix is not empty. Without it, this would be ELEVATE: photo at 7.0 is above its floor (6) and below pass (8.5).

## Must
1. **Hero photo, 1440-first.jpg / 390-first.jpg, `.hero img` (alt "A worker on a ladder re-screening a Florida pool cage…").** Problem: the hero depicts cage re-screening, a service not in facts.json, so the first thing a homeowner sees is work Tileline doesn't do (an implied invented claim). The phone crop also shows no water. Fix: replace it with an approved residential pool frame where the water is the subject: a screened lanai pool at low morning light, or a brush or pole on the waterline. Keep the left third dark enough for the h1 scrim, and set `object-position` so the water stays in the 390 crop.

## Should
1. **#visit-log 08:15 frame (1440-scroll-25.jpg).** Problem: a resort or public pool with a footbridge. Fix: use a residential pool edge or a hand adding chemical at the skimmer. If the library has nothing, use a close-up of water surface caustics.
2. **#troubleshooter photo (1440-full.jpg, 08:30).** Problem: a hotel lagoon panorama. Fix: the cloudy-water frame ("hazy, green-tinted water", now used elsewhere) belongs here, since this section is about bad water. Then drop the duplicate subject from the other slot.
3. **#repair photo (1440-full.jpg, 08:36).** Problem: an industrial plant room. Fix: use a residential pump/filter pad on a concrete slab beside a house wall. If none is approved, use the heat-pump frame from the library, cropped to the unit.
4. **Hero sample line (1440-first.jpg).** Problem: "Sample range $140–$190 per month [Sample pricing]" says "sample" twice. Fix: "From $140–$190 a month" plus one boxed "Sample pricing" tag.
5. **#intro h2 (1440-full.jpg).** Problem: it restates the hero subline. Fix: give it a promise the hero doesn't make, for example the guarantee from facts: "Cloudy between visits? We come back before your next one."
6. **Mobile bar (390-full.jpg, y≈845–940).** Problem: the second (outlined) button shows no legible label in the capture. Fix: confirm both buttons carry visible text ("Text Tileline" / "Call") at ≥ 4.5:1, and that the bar is `visibility:hidden` (not just translated) until it shows.
7. **Spine dead space (1440-scroll-25/50/75.jpg, left 320px, y 540–820).** Problem: an empty navy column on every screen. Fix: fill it with the current step's reading, for example the live "08:22 · filter 18 psi" figure or the attachment thumbnail. Or narrow the spine to 260px and let paper sections run under it.
8. **Hero seam (1440-first.jpg, bottom 64px).** Problem: the spine header starts cut off beside an empty paper band. Fix: start the spine at the intro band (`top` aligned to #intro), or have the intro h2 itself peek into the fold.
9. **Tile break (#break, 1440-full.jpg).** Problem: ~500px of texture with a 10px caption. Fix: cap it at 50svh and set the 08:24 caption at body size, or run the cobalt rail across the tile line so the break carries the signature.

## Elevate
- **Photo (7.0):** make every frame an attachment that a real tech on a Tampa route would have taken. All residential, all shot from the deck at the same early hour, with one cool grade and water as the subject in each. Pair the "before" read with the stamped "after" in the visit log, so the photos become the evidence the h1 promises ("written down") rather than decoration beside it.
- **First screen (8.5):** let the hero be the visit itself. Use the water at 07:58, with the log's first line set as a large stamped caption burned into the photo like the other attachments, and the 08:45 finished-report phone notification as the payoff object waiting at the fold edge. That way the first screen shows the start and the end of the visit, and the spine picks up from there.
