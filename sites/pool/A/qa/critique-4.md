COPY: ok (copy 9.0, no copy mustFix)

# pool-A (Tileline Pool Care), critique round 4 (fast mode, cap 4)

**Five-second test (1440-first.jpg, 390-first.jpg):** "Pool care in Tampa. Same tech every week, and after each stop they text me the time, the readings and a photo. That's the 08:45 card right there. About $140–$190 a month (sample). Press Price my pool, or call the number in the header." It passes on both sizes. The one hitch is the photo: rows of white loungers, a wall clock, depth markers and a faint "NO DIVING" sign. It reads as a condo or community amenity pool, not the homeowner's own backyard.

**What changed since round 3:** the re-screening hero is gone, and water is now the subject, so the mustFix is closed. The hero now holds the 07:58 stamp plus an 08:45 "Visit done" notification card, which delivers the start and end of the visit as asked. The spine now has a "Last reading" card and a CTA that fill the old dead navy space. The tile break is shorter, its caption is at body size, and the cobalt rail runs across it with a marker. The intro h2 is now the guarantee. The hero sample line no longer doubles "sample". The industrial pump-room photo was replaced by a drawn pump diagram, and the test-vials photo by a reading widget.

## First screen: 9.0
- Earned (1440-first.jpg): a 5-word, 2-line h1 with trade and city. One primary action ("Price my pool") and a quieter ghost, the phone in the header, a "From $140–$190 a month [Sample pricing]" proof line. The signature shows twice: the 07:58 "Arrived, gate latched" stamp and the 08:45 report card at the fold edge. The next band peeks about 64px. 390-first.jpg: the h1 is 2 lines, both actions and the report card sit above the fold, and the paper band peeks.
- Not 9.5: the photo is a commercial or community pool, with lounger rows, a clock, "NO DIVING" and depth tiles (1440-first.jpg). The concept is "your pool". The h1 says "written down", but the frame says "condo amenity". The composition is still the stock left text block on a scrimmed photo, rescued by the two log objects.

## Distinctiveness: 8.5
- Earned: the signature appears in at least 5 places. Hero stamp and report card (1440-first.jpg). The ticking spine with its live "Last reading" card (1440-scroll-25/50/75.jpg). A time-stamped head on every section (08:00 … 08:42). The tile break with the cobalt rail and marker (1440-full.jpg). The footer "08:45 Report sent. End of log." (1440-full.jpg). The gauge (08:22) and pump diagram (08:36) now form a drawn language that appears twice.
- −0.5: the 08:09 "Sample reading" widget, with gradient bars, a marker and a value column (1440-scroll-25.jpg), is the same object as pool-B's hero reading card (sites/pool/B/qa/screens/1440-first.jpg). Both A and B sell "the readings, shown", and this widget is where you can see it.
- −0.5: the same section shape appears three times: text and checklist left, framed figure right, for the troubleshooter, the equipment pad and the area (1440-full.jpg).

## Typography: 9.0
- Earned: Sora display at tight tracking against Karla body and JetBrains Mono for times and figures only (1440-first.jpg, 1440-scroll-25.jpg). Large mono timestamps (08:09, 08:15) against 18px body give a real scale-contrast moment that carries the concept. En-dash ranges and curly quotes in the reviews (1440-scroll-75.jpg). The hero sample line is clean now (1440-first.jpg). Heading rags are balanced.
- Not 9.5: dist CSS still has hard 11px and 12px sizes. The "· Sample" suffixes, the footer credits and the "1 photo of your water attached" line read at about 11–13px (1440-scroll-50.jpg, 1440-full.jpg).

## Layout and rhythm: 9.0
- Earned (1440-full.jpg): the tones run photo, paper, deep, tile break, paper, deep, paper, mid, paper, aqua, deep, with no two dark bands touching. The full-bleed break carries the rail. The slip overlaps the photo, which is a deliberate grid break. Pricing is a dense ruled 3×2 grid, the intro is the quiet band, and the reviews use a lead-quote layout. The spine now earns its column with the reading card and CTA (1440-scroll-25/50/75.jpg).
- Not 9.5: the same-shape repetition noted under Distinctiveness. The visit-log rows also leave a big hole: two lines of text in a roughly 270px row, with empty dark space between the text and the figure (1440-scroll-25.jpg, the 08:09 and 08:22 rows).

## Photo and video: 7.5
- Earned: the mustFix is closed, and water is now the subject in every remaining pool frame. Burned-in time stamps make each photo an attachment to the log ("08:15 after", 1440-scroll-25.jpg). The tile close-up works as texture (1440-full.jpg). Drawn diagrams replaced two bad stock frames.
- −1.0: three frames are off subject for a Tampa residential route. The hero is a community pool with loungers and a "NO DIVING" sign (1440-first.jpg). The 08:02 skim frame is an above-ground frame pool with a pink net (390-full.jpg, 1440-full.jpg). The 08:30 troubleshooter photo is still a hotel-lagoon panorama, flagged in round 3 and unchanged (1440-full.jpg).
- −0.5: mixed grade. The 08:40 area frame is a warm, yellow sunset with silhouetted palms (1440-full.jpg, 390-full.jpg), next to a cool, blue set. It reads like a second shoot.

## Copy: 9.0
- Earned: the intro h2 is now the guarantee ("Cloudy between visits? We come back before your next one.", 1440-full.jpg), so it no longer repeats the hero. One action family runs throughout ("Price my pool" / "Price this job"). Trade nouns appear ("water drawn at elbow depth, away from the return jets", "Needle in the amber: the cartridge comes out", 1440-scroll-25.jpg). The rating, reviews and prices all match facts.json and all carry a Sample label. There are no em dashes in dist.
- Not 9.5: the troubleshooter says the same thing twice. The lead is "Tick what you see. The likely cause and the first thing…", and the footnote is "Tick what you see. The likely cause shows on the slip." (1440-full.jpg, 1440-scroll-50.jpg).

## Mobile: 9.0
- Earned (390-first.jpg): the hero is re-cut to the ladder and water, with a 2-line h1, both actions and the report card above the fold, and the call button in the header. 390-full.jpg: the visit log stacks with its figures, pricing becomes a swipe row with a peek, the slip overlaps the photo, the ZIP check is thumb-sized, and the hours table is full-width. render.json reports no overflow at 320 or 390.
- Not 9.5: the slip in 390-full.jpg is a long card with a heavy shadow. The area palms photo is a full-width block that adds scroll without adding information.

## Accessibility: 9.0
- Earned: 1440-rm-full.jpg and 390-rm-full.jpg show every word, every spine tick and the "Last reading 08:45" end state. dist has a designed focus style (`:focus-visible { outline: 3px solid var(--focus); outline-offset: 3px }`), a forced-colors block, a skip link, labelled inputs, real checkboxes and descriptive alt text.
- Not 9.5: the hard 11–12px text noted under Typography, and grey footnotes on paper (1440-scroll-50.jpg).

## Motion and interaction: 9.0
- Earned: the spine ticks per section (5 ticks in 1440-scroll-25.jpg, 7 in -50, 8 in -75). The current line goes bold and the "Last reading" card updates (08:22 → 08:34 → 08:36), so the motion explains progress. The rail crosses the tile break with a marker (1440-full.jpg).
- Not 9.5: no frame shows the troubleshooter slip changing on input; it shows the example print in every frame (1440-scroll-50.jpg).

## Wow moment: 9.0
- Earned: start and end are both now on the first screen (07:58 stamp, 08:45 report card, 1440-first.jpg). The spine completes the report as you scroll, and its reading card ticks through the visit (1440-scroll-25/50/75.jpg). The troubleshooter slip gives a cause, a first action and a sample price, which is a checklist with an answer (1440-full.jpg). Someone could describe this in one sentence: "the page is the 30-minute visit, and it ends with the text you'd get."
- Not 9.5: the payoff card and the slip are not designed as the same artefact. The hero card is a phone notification and the slip is a printed receipt, so the two moments don't feel connected.

## Polish: 9.0
- Earned: apple-touch icon, OG, JSON-LD, a print stylesheet and forced colors all in dist. The hero seam is resolved: the "Stop log" header now peeks as a deliberate start (1440-first.jpg). Square corners and 1px rules are consistent, and the footer close is "08:45 Report sent. End of log." (1440-full.jpg).
- Not 9.5: at the top of the spine, an empty 64px navy band sits above the cobalt rule in every scroll frame (1440-scroll-25/50/75.jpg, y 0–64).

## Arithmetic
14×9 + 12×8.5 + 10×9 + 10×9 + 8×7.5 + 8×9 + 7×9 + 7×9 + 12×9 + 8×9 + 4×9
= 126 + 102 + 90 + 90 + 60 + 72 + 63 + 63 + 108 + 72 + 36 = 882 / 100 = **8.82**

Photo (7.5) is below its fast pass mark (8.0), and the weighted score is below 9.0. mustFix is empty. This is the last round of the cap.

## Must
None.

## Should
1. **Hero img (1440-first.jpg, 390-first.jpg).** Problem: a community or condo pool with lounger rows and a "NO DIVING" sign, not a homeowner's backyard. Fix: swap in an approved residential lanai or backyard pool frame. Keep the water in the right two-thirds and dark deck on the left for the scrim, and keep the 390 object-position on the water.
2. **#visit-log 08:02 frame (390-full.jpg, 1440-full.jpg).** Problem: an above-ground frame pool. Fix: use an in-ground waterline or skimmer close-up from the library. If there is none, show the net on the water surface, cropped tight.
3. **#troubleshooter photo (1440-full.jpg).** Problem: still a hotel-lagoon panorama (round 3 Should 2). Fix: use a tight crop of the hazy water so it reads as a symptom, not a resort.
4. **#area photo (1440-full.jpg, 390-full.jpg).** Problem: a warm sunset breaks the cool grade. Fix: apply the same cool grade (`filter: saturate(.8) hue-rotate(-10deg)` or an approved cooler frame), or drop the photo and let the town chips and ZIP tool carry the band.
5. **#troubleshooter copy (1440-full.jpg).** Problem: the lead and the footnote both open with "Tick what you see." Fix: cut the footnote, or change it to "Nothing ticked? The slip shows the most common cause."
6. **#visit-log 08:09 widget (1440-scroll-25.jpg).** Problem: gradient-bar readings repeat pool-B's hero card. Fix: draw the readings as test-kit vial swatches or a handwritten log row in the stamp language instead of slider bars.
7. **Small text (dist CSS `font-size: 11px` / `12px`, 1440-scroll-50.jpg).** Problem: under 13px. Fix: set the floor at 13px for the "· Sample" suffixes, spine meta and credits.
8. **Spine top (1440-scroll-25/50/75.jpg, y 0–64).** Problem: an empty navy band above the rule. Fix: align the sticky spine `top` to the header height so the rule sits flush, or put the "Tileline, weekly route, Tampa" meta into that band.
9. **Visit-log rows (1440-scroll-25.jpg).** Problem: two lines of text in a roughly 270px row. Fix: align the figure to the row top and cap its height, or set the step text at `--fs-1` with a short reading line under it, so the row fills.

## Elevate
- **Photo (7.5):** shoot the page as one route morning. Every frame should be residential and taken from the deck, in the same cool early light, with water or equipment as the subject and the time stamp burned in. Make the hero the same backyard the 08:45 card reports on, so the photo and the report read as one visit rather than stock with a caption.
- **Distinctiveness (8.5):** make the report itself the one designed artefact. The 08:45 card in the hero, the spine's "Last reading", the troubleshooter slip and the footer should all be the same report sheet (same header, same rows, same stamp), and the readings should be drawn in the log's own language rather than slider bars. Then no section could be swapped with pool-B's reading card.
