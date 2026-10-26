COPY: needs copy-chief

# autotuneup-A: critique round 1 (fast mode)

## Five-second test
1440-first.jpg / 390-first.jpg: "A quick-service oil change and tune-up shop in Provo, UT (I read that in the small mono eyebrow, not the headline). I can book a time or call (801) 555-0188. Why them: they post how long each job takes and I can wait or drop off." Answerable, but trade and city sit only in the eyebrow; the h1 is a three-beat slogan. Below the copy, the hero strip is an empty teal-to-rust gradient captioned "Placeholder for hero-A1". The strip is half the composition, and right now it sells nothing.

## firstScreen: 7
Earned: phone in the header and hero at 1440, call button in the hero and sticky bar at 390. One filled primary ("Book a time") and a quieter outline call. The proof line carries hours, area and "4.9 average" with a SAMPLE RATING pill. The signature shows up in the first screen: the left "TOTAL SO FAR 00:00" rail and the "LAP 00 · START 00:00" card. At 390 the h1 runs 4 lines and both actions sit above the fold. The next band peeks about 65px at 1440.
Deductions (from 8, +0.5 for the signature being present):
- 1440-first.jpg: h1 "Book it. Wait or walk. Done by the time you're back." has no trade and no place. It reads as a slogan (−1.0).
- 1440-first.jpg: h1 is 10 words (−0.5).
- 1440-first.jpg / 390-first.jpg: the hero strip is an empty placeholder gradient with visible "Placeholder for hero-A1". This is scored under photo, but the first screen loses its image half.

## distinctiveness: 8
Earned: the Stopwatch Stations system does real work. In the stations band (1440-scroll-25.jpg) the dial and lap list with cumulative times organise the visit. The planner's "~30 min" ticket, the "SPLIT 01/02/03" review printouts with DONE stamps (1440-scroll-75.jpg) and the footer "Done · 31:00" close (1440-full.jpg) carry it on. That is 5 or more sections, hero and footer included. Unbounded, Figtree and DM Mono with teal and tangerine are their own.
Deductions:
- Sibling C (autotuneup/C 1440-first.jpg) uses the same device: a rounded vertical pill rail fixed at the left edge with a mono readout ("ALT 7,199" against "TOTAL SO FAR 00:00"), plus the same "Open now · until 6 pm" plus "Book a time" header pattern. Cover the logo and the two first screens share their most visible motif (−1.0).
- 1440-first.jpg, 1440-scroll-50.jpg: mono tracked micro-labels plus middle-dot meta strings, used as decoration everywhere (−0.5, AI-slop tell).
- +0.5 because the signature organises information rather than decorating it.

## type: 8.5
Earned: Unbounded at display size is loud and wide with tight tracking, and the footer "Done · 31:00" is a real scale-contrast moment (1440-full.jpg). DM Mono numerals in lap times and hours. Curly quotes in the guarantee pull-quote and en-dash ranges ("$69–$99", "7:30 am – 6 pm") in 1440-scroll-25.jpg and m4 of 390-full.jpg. Body is 16px or more.
Deductions:
- 1440-first.jpg: there are 3+ tiny tracked caps labels in one view: eyebrow, proof line and "SAMPLE RATING" pill, plus the rail "TOTAL SO FAR" / "START". In 1440-scroll-50.jpg the comparison row labels are all tracked mono caps (−0.5).

## layout: 8.5
Earned: the tone run (1440-full.jpg) is paper → deep (stations) → paper (menu) → tangerine (planner) → paper (oil compare) → break → paper (reviews) → stone (area/hours) → paper (book) → deep footer. No dark bands touch, and the families vary: stacked hero, dial plus list, vertical tabs, chip planner, compare table, staggered split cards, pull-quote, form, giant footer numeral.
Deductions:
- 1440-full.jpg at about 55% (the full-bleed break): it renders as an empty brown-orange gradient over half a screen tall with a placeholder caption. It reads as a blank gap, not a breath (−0.5).
- 1440-full.jpg, area band: the stone band's left column ends early and the hours card floats low on the right, leaving a dead upper-right quadrant. That is minor and is not deducted separately.

## photo: 4
Earned: nothing. No frame on the page is a photograph.
Deductions:
- 1440-first.jpg, 1440-scroll-25.jpg, 1440-full.jpg, 390-full.jpg (m2 crop): every media slot is a flat gradient with a visible "Placeholder for hero-A1 / place-waiting-coffee / place-utah-canyon / process-*" caption. That covers the hero strip, the service tab image, the planner image and the full-bleed break. The niche library (`niches/autotuneup/media/approved/`) holds only placeholder-*.webp. This is below the floor and is a mustFix. It cannot pass until real approved media exists.

## copy: 8 (capped by mustFix)
Earned: specific and in the trade's own words. "Old oil drained, new filter on, filled with the oil your manual calls for, level checked twice". "Flows fastest on an inversion morning". "We read the spec off your manual or the oil cap. No upsell to a better bottle." The guarantee is from facts. Every review and the rating and prices carry Sample labels. "Book a time" is used consistently.
Deductions:
- 1440-first.jpg: the h1 is a tricolon-shaped slogan ("Book it. / Wait or walk. / Done…") (−0.5).
- 1440-full.jpg (planner ticket) and 390-full.jpg (m2): "Pull in, grab a seat and the Wi-Fi." Wi-Fi and a waiting area are not in facts.json, so this is an invented amenity claim (mustFix, caps copy at 8).
- 1440-scroll-25.jpg: "Book this" (menu) and "Book this visit" (planner) alongside "Book a time". These are close enough to keep, but unify them on "Book a time".

## mobile: 8.5
Earned: 390-first.jpg is well composed: h1 4 lines, stacked buttons, sticky Book/Call bar. The stations band re-stacks with the dial above the laps (390-full.jpg, m0). The planner chips are thumb-sized (m2). There is no horizontal scroll (render.json overflow is clean at 320 and 390).
Deductions:
- 390-full.jpg (m4, area band): the ZIP input is about 125px wide and clips its own placeholder ("5 digit" is cut). Make it wider (−0.5).

## a11y: 8.5
Earned: 1440-rm-full.jpg and 390-rm-full.jpg show every word, with the dial resting at 31:00 and the laps static. Headings run h1 → h2 → h3 with no skip (dist/index.html). There is a forced-colors block. Labels are visible on the ZIP and form ("Your ZIP code", "Service").
Deductions:
- Focus styling cannot be verified from screenshots, and there is no evidence of the designed 3px accent ring on the tangerine band. Held at 8.5.

## motion: 8
Earned: several hooks beyond reveals. The dial sweeps through the stations (00:00 at 390-full m0, 31:00 at 1440-scroll-25.jpg), the rail fills per section (1440-scroll-25/50/75.jpg show 20:00 → 24:00 → 30:00), DONE stamps press onto the split cards, and the planner updates its ticket. It is reversible by design and stays static in reduced motion.
Deductions:
- 1440-scroll-25.jpg: the signature contradicts itself. The dial reads 31:00 "LAP 06 · HAND-BACK" while the rail in the same frame reads "TOTAL SO FAR 20:00 / SERVICES". Two clocks showing two totals for one visit breaks the "one clock" idea the band headline promises (−0.5).
- Entrances beyond the signature look uniform across the menu, compare and form. This is minor and not deducted further.

## wow: 8.5
Earned: the stations dial plus lap list is tied to the thesis and the trade. The planner output is a scalloped "WAIT FOR IT ~30 min" ticket in the signature's language, not a plain line (390-full.jpg m2). The footer "Done · 31:00 / Next oil due around 48,200 mi" closes the loop.
Deductions:
- The planner ticket does not hand the visitor anything to keep (no lap list of the chosen jobs, no drop-off time). It is one number. Held below 9.

## polish: 8.5
Earned: SVG favicon, apple-touch icon, OG 1200×630, theme-color, JSON-LD, print and forced-colors media blocks (dist/index.html). Pill radius is consistent across buttons and chips.
Deductions:
- 1440-scroll-75.jpg, SPLIT 03 card: the rotated "DONE" stamp sits on top of "ENGINE AND CABIN AIR FILTERS", which wraps to two lines and becomes unreadable ("FILTERS" is struck through by the stamp) (−0.5).

## Arithmetic
14×7 + 12×8 + 10×8.5 + 10×8.5 + 8×4 + 8×8 + 7×8.5 + 7×8.5 + 12×8 + 8×8.5 + 4×8.5
= 98 + 96 + 85 + 85 + 32 + 64 + 59.5 + 59.5 + 96 + 68 + 34 = 777 / 100 = **7.77**

Photo 4 is below its floor (6), and mustFix is not empty → **FIX**.

## Must
1. **Photo / all media slots** (1440-first.jpg, 1440-scroll-25.jpg, 1440-full.jpg, 390-full.jpg): every image is a placeholder gradient with a visible "Placeholder for …" caption. Fix: curate real approved media for the autotuneup niche (`/next-niche` media stage) and rebuild. Until then, the visible "Placeholder for …" text must never render on a demo page.
2. **Copy / planner ticket** (1440-full.jpg planner, 390-full.jpg m2): "Pull in, grab a seat and the Wi-Fi." invents an amenity that is not in facts.json. Fix: "Pull in, hand over the keys and wait. You're out before your coffee's cold." (or any process line with no amenity claim).

## Should
1. **#hero h1** (1440-first.jpg): put the trade and the place in the headline. Keep the stacked rhythm but make line 3 carry it, e.g. "Book it. Wait or walk. / Provo oil changes, done by the time you're back." Better still, make line 1 itself "Provo oil changes and tune-ups, timed." At most 8 words in the h1 and move the slogan to the lead.
2. **Rail vs dial** (1440-scroll-25.jpg): drive the rail's "TOTAL SO FAR" from the same timeline as the dial while the stations band is in view, so both read the same minute. Or have the rail count sections only and relabel it ("STATION 3 / 9") so it never shows a second total.
3. **#reviews .split card header** (1440-scroll-75.jpg): move the DONE stamp below the header rule (e.g. bottom-right of the card body), or shorten the service label to `services[].short` ("Filters") so it fits on one line beside SPLIT 03.
4. **ZIP input** (390-full.jpg m4): give it `min-width: 9ch` plus padding (about 160px) so the placeholder is not clipped.
5. **Tracked caps budget** (1440-first.jpg, 1440-scroll-50.jpg): set the comparison row labels ("TYPICAL INTERVAL"…) in Figtree sentence case at 15px semibold. Keep mono only for times and numbers. Drop the middle-dot meta string in the hero proof line in favour of a short sentence with en-dashes or line breaks.
6. **Primary action name** (1440-scroll-25.jpg, planner): rename "Book this" and "Book this visit" to "Book a time" (and "Book this time" where context needs it).
7. **Distinctiveness vs sibling C**: C also has a fixed left vertical pill rail. Change A's rail into something only a stopwatch would be, e.g. a horizontal lap strip under the header that ticks laps across, or a crown-topped stopwatch case with no pill shape, so the two siblings no longer share a silhouette.

## Elevate
- **photo (4)**: once real frames exist, art-direct them as the stations themselves. Each station in the dial band gets its own tight process crop (keys on the counter, oil drain, filter held next to new, tread gauge, hand-back ticket), revealed by the same rail-fill clip as the lap it belongs to. The photos then become the lap splits, not decoration, all in one warm bay-light grade.
- **firstScreen (7)**: make the hero strip the starting line in fact. A wide letterboxed bay frame with the stopwatch case sitting on its top edge, the h1 naming "Provo oil changes and tune-ups", and the first lap ("Check-in · 2 min") already ticking on the strip. The concept's signature and the trade + place then land in the first three seconds, instead of a slogan above an empty band.
