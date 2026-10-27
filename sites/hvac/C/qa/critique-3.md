COPY: ok

# hvac-C critique, round 3 (fast mode, final round)

## Five-second test
- 1440-first.jpg: "Shadeline, a Phoenix AC company. 115° by noon, so their crews start at dawn. Call (602) 555-0106 or Price it. 22 years on Phoenix roofs, Tempe to Gilbert, rated 4.9 (Sample rating)." What, where, what to do and why them are all answered.
- 390-first.jpg: same read. 115° display, a 2-line h1, both buttons above the fold, sticky Call now / Price it bar.

Changed since round 2 (not re-listed): the header middle-dot string is gone ("Closed, opens 5:30 am"). The 10:00 price chip now reads "Storm check, coil rinse included" and matches the story. The 14:00 band reads problem → fix. The 10:00 band's dead sand is cut. The header sun clock visibly advances with scroll (05:00 → 10:49 → 14:15 → 16:42 across 1440-first / 1440-scroll-25 / -50 / -75), and there is a scroll progress rule under the header. The sorter verdict card is now a shade-line frame with a seam. The mobile hero has object-position 50% 70%.

## firstScreen: 9.0
Earned: 1440-first.jpg has an amber Antonio "115°", a 9-word h1 with trade and city, the seam-split frame, the phone in the header and the primary button, Sample-labelled proof, and the next band peeking in. 390-first.jpg has both actions above the fold.
Deductions:
- 390-first.jpg: the hero strip still cuts the condenser tops under the header, so the image reads as a sliver rather than a frame. This holds the score at 9.0, not 9.5.

## distinctiveness: 9.5
Earned: 1440-full.jpg shows one system, a day told in hours: the shade seam inside every frame (hero, 05:00, 10:00, break, 14:00, 18:00, sorter card), hour stamps, the outlined 18:00, a live sun clock in the header and the footer horizon. Nothing in the library or in hvac A/B uses a time-of-day narrative. The last AI-slop tell (the middle-dot string) is gone (1440-first.jpg).

## type: 9.0
Earned: Antonio / Figtree / DM Mono with real scale contrast (115°, 4.9 and the 18:00 outline numerals in 1440-scroll-75.jpg). Reviews h2 sets cleanly, and mono stays as accent.
Deductions:
- 1440-first.jpg header: the clock chip, the mono "Closed, opens 5:30 am" and the nav form three type voices in one 64px bar. It is a little busy, but kept at 9.

## layout: 9.0
Earned: 1440-full.jpg has a good tone rhythm (navy → sand → sand → full-bleed break → paper sorter → terracotta 14:00 → paper services → sand reviews → paper 18:00 → navy ZIP → paper form → navy footer) with no dark bands touching. The 10:00 band now ends tight to its fix card (1440-scroll-25.jpg).
Deductions:
- 1440-scroll-50.jpg: in the 14:00 band, the Fix column ends at its Call button around y=350 while the band runs to y=645. That leaves a ~300px empty terracotta hole on the right (−0.5).

## photo: 8.5
These are judged as drawn treatments, per the brief: the stock frames are placeholders. Earned: 1440-full.jpg / 390-full.jpg show six distinct, on-topic, region-right frames (rooftop condensers, kneeling tech, coil rinse, palm-and-roofline sunset, stucco house with roof unit, drain line). They share one halftone grain and one palette, and every frame is split warm/cool by the seam at its hour's angle, so the treatment is the signature. Nothing is broken or blank.
Deductions:
- 390-first.jpg: the hero frame crops the units at the top edge (−0.5 from 9; noted once here, not again in mobile).

## copy: 9.0
Earned: 1440-full.jpg has a concrete trade voice (haboob, cottonwood fluff, capacitor, contactor, the 82 degree rule, "Never pull the disconnect yourself. Call us."). The 10:00 chip now matches its story (1440-scroll-25.jpg). Sample labels sit on the rating, the reviews and the prices (1440-scroll-25.jpg, 1440-scroll-75.jpg). Every claim checks against facts.json (22 years, 4.9 / 389, $129–$219).
Deductions:
- 1440-first.jpg: the header chip reads "SUN 05:00" right beside opening hours, so "SUN" reads as Sunday. Minor, kept at 9.

## mobile: 9.0
Earned: 390-first.jpg has a short h1, both actions above the fold and the sticky bar. 390-full.jpg has a single-column sorter, services, reviews and form, and the hour stamps survive. render.json shows no overflow at 320/390 and no errors.

## a11y: 9.0
Earned: 1440-rm-full.jpg shows every band and every word with motion off. dist/index.html has one h1, an h2 per band and an h3 per service, and the sorter form is aria-labelled. The alts describe the drawn frames, and a forced-colors query is present. Contrast on the terracotta 14:00 copy reads fine (1440-scroll-50.jpg).

## motion: 9.0
Earned: the sun-clock idea is now visible in stills. The header chip ticks 05:00 → 10:49 → 14:15 → 16:42 (1440-first, 1440-scroll-25, -50, -75), the progress rule fills under the header, and the seam angle differs band to band (1440-full.jpg).
Deductions:
- 24 `data-reveal` hooks in dist/index.html suggest the same fade-up on everything outside the signature. This holds at 9.0, not 9.5.

## wow: 9.0
Earned: 1440-full.jpg shows a header clock that tells the time of the page, the sorter verdict now cut by the same shade seam (signature and tool are one system), and the giant outlined 18:00 stamp. A contractor would screenshot it.
Deductions:
- 1440-scroll-50.jpg: the 14:00 "peak afternoon" moment is the dramatic beat of the day, but it is a static two-column band with a hole. The story's climax is under-staged (−0.5 from 9.5).

## polish: 9.0
Earned: square chips, buttons and cards agree (1440-scroll-25.jpg, 1440-scroll-75.jpg). dist/index.html has a favicon, apple-touch icon, OG image, print and forced-colors queries, and lazy images with dimensions. static.json and render.json are both clean.

## Arithmetic
14×9 + 12×9.5 + 10×9 + 10×9 + 8×8.5 + 8×9 + 7×9 + 7×9 + 12×9 + 8×9 + 4×9
= 126 + 114 + 90 + 90 + 68 + 72 + 63 + 63 + 108 + 72 + 36 = 902 / 100 = 9.02

## Must
None. There is no DEMO-RULES breach, no invented claim, no visible a11y failure, and nothing breaks on a phone.

## Should
- `#h-14` band at ≥900px (1440-scroll-50.jpg): the Fix column ends ~300px above the band edge. Either align-items:center on the two columns, or cut the band's bottom padding so it ends ~96px below the tallest column.
- Hero on mobile (390-first.jpg): raise the hero strip to ~200px tall, or set object-position to 50% 85%, so the condenser tops clear the header.
- Header sun chip (1440-first.jpg): replace "SUN 05:00" with a sun icon plus the time only, or use "SUNLIGHT 05:00", so it cannot be read as Sunday next to the opening hours.

## Elevate
- **photo (8.5):** when real library frames land, keep the system and make it one shoot: each hour band uses a real photo duotoned amber on the sunlit side and navy on the shaded side of the seam, so the page reads as one roof photographed from 05:00 to 18:00.
- **layout (9.0):** stage 14:00 as the climax of the day. Make it the one band that breaks the grid: the 14:00 stamp set as large as 18:00, the frame full-bleed to the right edge with the Fix steps laid over its shaded side, so the hottest hour is also the loudest band and the hole disappears.
