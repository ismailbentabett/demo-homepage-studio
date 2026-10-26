COPY: ok

# autotuneup-A: critique round 2 (fast mode)

## Five-second test
1440-first.jpg / 390-first.jpg: "Oil changes and tune-ups in Provo, and they're timed. I can book a time or call (801) 555-0188. Why them: most oil changes take about 30 minutes, I wait or walk, and longer jobs get a drop-off slot and a text." That is clear now. The h1 carries trade and place. The stopwatch ("02:00 lap 01") and the "Lap 01 Check-in 2 min" card put the signature on the first screen. The lower 40% of the 1440 frame is still a stylised road gradient, not a photograph.

Fixed since round 1, not re-listed: the h1 is no longer a slogan; the "Wi-Fi" claim is gone ("Pull in, hand over the keys and wait…", 1440-scroll-50.jpg); the left pill rail has become a top lap strip, so it no longer echoes sibling C; the comparison row labels are now set in sentence-case Figtree; the DONE stamps sit clear of the card headers (1440-scroll-75.jpg); the ZIP input is wide enough (1440-full.jpg, area band); the visible "Placeholder for …" captions are gone.

## firstScreen: 8.5
Earned: the h1 "Provo oil changes and tune-ups, timed." is 6 words on 2 lines at 1440 and 3 lines at 390, with trade, place and the timed outcome. There is one filled primary ("Book a time") and an outline call; the phone shows in the header (1440) and the hero (390), plus a sticky Book/Call bar. The proof line covers hours, area and "4.9 average" with a Sample rating pill. The signature is on the first screen (stopwatch, lap strip, lap card). The deep band peeks about 60px at 1440.
Deductions:
- 1440-first.jpg: about 330px of the first screen is an empty teal-to-rust road gradient. The composition's image half sells no service. The image itself is scored in photo; here it is −0.5 for a composition that leans on a void.

## distinctiveness: 8.5
Earned: the Stopwatch Stations system organises information in the hero (stopwatch plus lap card), the stations dial and lap times (1440-scroll-25.jpg), the menu "About 30 min · wait" badge, the planner ticket (1440-scroll-50.jpg), the "Split 01/02/03" review cards with DONE stamps (1440-scroll-75.jpg) and the "Done · 31:00" footer (1440-full.jpg). The top lap strip now reads apart from sibling C's vertical altitude pill (autotuneup/C 1440-first.jpg). The palette and type pair are their own.
Deductions:
- 1440-first.jpg, 1440-scroll-25.jpg, 390-full.jpg: middle-dot meta strings ("Open now · until 6 pm", "About 30 min · wait", "Oil change · about 30 min") and mono micro-labels ("Lap 06, hand-back", "Split 01", "lap 01") are still used as texture everywhere (−0.5, AI-slop tell).

## type: 8.5
Earned: Unbounded display with tight tracking, plus the huge "Done · 31:00" footer as the scale-contrast moment (1440-full.jpg). DM Mono for the lap times and day names. The en-dash ranges "$69–$99" (m-plan crop of 390-full.jpg) and "7:30 am – 6 pm" (1440-full.jpg, area band) are correct. The tracked-caps budget is now in check.
Deductions:
- 1440-scroll-75.jpg / 390-full.jpg: straight apostrophe inside curly quotes, "“If it isn't due…”", in the display pull-quote, which is the biggest type on that screen. 390-full.jpg (menu): "your car's spec" has a straight apostrophe too (−0.5).

## layout: 8.5
Earned: the canyon break is now a real full-bleed illustrated moment with the caption "A canyon drive after a fresh rotation" (1440-full.jpg), so the blank half-screen is gone. The tone run is paper → deep → paper → tangerine → paper → break → paper → stone → paper → deep footer. Section families vary: dial plus laps, vertical tabs, chip planner with ticket, compare table, staggered splits, pull-quote, area/hours split, form. Gaps between sections are larger than gaps within them.
Deductions:
- 1440-full.jpg and 1440-first.jpg: the hero's dark-teal road strip runs straight into the deep stations band, separated only by a 6px rule. In the full page they read as one dark block about 1.3 screens tall (−0.5, an image band and not a flat tone, so half the standard penalty).

## photo: 5
Earned: the placeholders are now dressed in the signature (numbered lap badges, orange gauge rings, captions such as "Levels read" in 1440-scroll-25.jpg), and the canyon break is a coherent warm illustration. No "Placeholder for …" caption shows anymore.
Deductions:
- 1440-first.jpg, 1440-scroll-25.jpg, 390-full.jpg (stations and menu): there is still no photograph on the page. The hero strip, six station thumbnails, the menu frame and the planner frame are all the same striped teal gradient with an orange ring. The approved niche library (`niches/autotuneup/media/approved/`) holds only `placeholder-*.webp`. This is below the floor and remains a mustFix, and it cannot be fixed inside the build.

## copy: 9
Earned: concrete trade nouns and local truth: "Flows fastest on an inversion morning", "worn round at the tips, and said the coils were fine to keep", "the stale inversion smell", "We read the spec off your manual or the oil cap. No upsell to a better bottle." There is microcopy at doubt points ("Rather talk? (801) 555-0188", "Check your ZIP before you book"). Every review, the rating, the prices and the licence carry Sample pills. The footer "Next oil due around 48,200 mi. We write it on the ticket." closes the thesis.
Deductions:
- 1440-scroll-50.jpg: the planner ticket button "Book this time" is a second name for the primary action ("Book a time" everywhere else) (−0.5 against a 9.5-level body).

## mobile: 9
Earned: 390-first.jpg has a 3-line h1, a full-width primary plus call, and both actions above the fold, with the stopwatch re-placed bottom-right. 390-full.jpg: the stations re-stack, the menu tabs become a horizontal chip scroller (m-plan crop), the planner chips are thumb-sized, and the ZIP field is full-width under its label. render.json overflow is clean at 320 and 390.
Deductions:
- 390-full.jpg: the six station thumbnails and the menu frame repeat the same placeholder gradient down the phone scroll, so there is no phone-specific crop decision. Held at 9, not higher.

## a11y: 8
Earned: 1440-rm-full.jpg shows every word, with the dial resting at 31:00 and the hero stopwatch at 00:00. Headings run h1 → h2 → h3 with no skip (dist/index.html). The ZIP and form inputs have visible labels ("Your ZIP code").
Deductions:
- dist/index.html (images shown in 1440-first.jpg, 1440-scroll-25.jpg): 8 images carry `alt="Placeholder for hero-A1"`, "Placeholder for process-drain-plug" and so on, so a screen reader announces build jargon. The other 7 have alt text describing photos that are not there ("Dirty cabin filter pulled from housing, red dust visible in pleats" on a teal gradient). Alt text that misdescribes the image is a WCAG 1.1.1 failure (−1.0, mustFix).
- A designed focus ring on the tangerine planner band is still not evidenced (held, not deducted again).

## motion: 8.5
Earned: the dial sweeps lap by lap to 31:00 (1440-scroll-25.jpg). The top lap strip ticks section by section ("01 / 10 Start" in 1440-first.jpg) and no longer shows a second contradicting total, so "one clock" holds. The hero stopwatch runs (02:00 lap 01, against 00:00 in 1440-rm-full.jpg). DONE stamps press onto the splits and the planner ticket updates. Everything is static in reduced motion.
Deductions:
- 1440-scroll-50.jpg and 1440-scroll-75.jpg: outside the signature, the compare table, area band and form show no role-specific entrance (no clip on frames, no row stagger). Images do not clip in differently from text. Below the 9 anchor.

## wow: 8.5
Earned: the stations dial plus lap list is the thesis made visible, and the planner ticket is in the signature's language (scalloped "Wait for it ~30 min", a lap line "Oil change 30 min", a process line). The footer "Done · 31:00" closes the loop.
Deductions:
- 1440-full.jpg and 390-full.jpg (planner): the ticket still hands back one total plus one line. It is not a keepable lap sheet (a split per chosen job, drop-off or pick-up time, printable), so it falls short of the "use and keep" anchor.

## polish: 8.5
Earned: SVG favicon, apple-touch, OG, theme-color, JSON-LD, print and forced-colors blocks (dist/index.html). The DONE stamps no longer collide with the card headers (1440-scroll-75.jpg).
Deductions:
- 1440-full.jpg, area band (d-area crop) and 1440-scroll-25.jpg: mixed radius. Buttons and chips are full pills, the photo frames are about 4px rounded, and the ZIP input, menu tab and review cards are square-cornered (−0.5).

## Arithmetic
14×8.5 + 12×8.5 + 10×8.5 + 10×8.5 + 8×5 + 8×9 + 7×9 + 7×8 + 12×8.5 + 8×8.5 + 4×8.5
= 119 + 102 + 85 + 85 + 40 + 72 + 63 + 56 + 102 + 68 + 34 = 826 / 100 = **8.26**

Photo 5 is below its floor (6) and mustFix is not empty → FIX. This is round 2, the fast-mode limit, so it goes to **NEEDS_HUMAN**.

## Must
1. **Photo / every media slot** (1440-first.jpg hero strip; 1440-scroll-25.jpg station thumbnails; 390-full.jpg menu and planner frames): there are no photographs, only `placeholder-*.webp` gradients. Fix: curate real approved autotuneup media (niche media stage), then re-map `hero-A1`, `process-*` and `place-*` and rebuild. This is not a builder fix.
2. **A11y / alt text** (dist/index.html, images visible in 1440-first.jpg and 1440-scroll-25.jpg): 8 alts read "Placeholder for …" and 7 describe photos that are not shown. Fix: while the frames stay placeholders, set `alt=""` on them, since they are decorative and the station text carries the meaning. Restore descriptive alts only once real photos land.

## Should
1. **Pull-quote and menu apostrophes** (1440-scroll-75.jpg, 390-full.jpg): replace "isn't" with "isn’t" and "car's" with "car’s". Check every `'` in the copy.
2. **Planner ticket button** (1440-scroll-50.jpg): change "Book this time" to "Book a time".
3. **Hero strip into stations** (1440-full.jpg top): put a paper or stone breath between the dark road strip and the deep stations band, e.g. a 96px paper gap holding the "Lap 01 Check-in 2 min" card. Or set the stations band on paper with deep-teal type, so the page does not open with 1.3 screens of one dark block.
4. **Middle-dot meta** (1440-first.jpg proof line, 1440-scroll-25.jpg menu badge): rewrite "Open now · until 6 pm" as "Open now, until 6 pm" and "About 30 min · wait" as "About 30 min, you wait". Keep mono only for the clock numerals, not for "Lap 06, hand-back" captions.
5. **Radius** (1440-full.jpg area band, 1440-scroll-75.jpg): choose one card radius (e.g. 6px) for the ZIP input, review cards, ticket and frames, and keep the pill for buttons and chips only.
6. **Entrances by role** (1440-scroll-50.jpg compare, area band): stagger the compare-table rows by 60ms, clip-reveal the frames from the left edge like a lap filling, and leave the area and hours band still. Do not use the same fade on everything.

## Elevate
- **photo (5)**: once real frames exist, make them the laps themselves. Each station row gets one tight process crop (keys on the counter, drain plug, old filter beside new, tread gauge, hand-back ticket) in one warm bay-light grade, revealed by the same sweep as the dial hand. The hero strip becomes a single letterboxed bay frame that the stopwatch sits on. The photos then become the splits, not filler in a ring frame.
- **a11y (8)**: make the signature fully accessible as a designed feature. Give the stations dial a live, polite text equivalent ("Lap 3 of 6, filters, 24 minutes in"), add a designed 3px deep-teal focus ring with 3px offset that holds 3:1 on the tangerine planner band, and make the planner ticket an `aria-live` region that reads the full lap list. Then the clock is usable by ear and by keyboard, not only by sight.
