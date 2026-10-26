COPY: ok

# hvac-C critique, round 2 (fast mode)

## Five-second test
- 1440-first.jpg: "Phoenix AC company. It's 115° by noon, their crews start at dawn. Call (602) 555-0106 or Price it. 22 years, Tempe to Gilbert, 4.9 (Sample rating)." What, where, what to do, why them: all answered, and trade + city now sit in the h1 itself.
- 390-first.jpg: same read; 115° display, h1 2 lines, both buttons above the fold, sticky Call now / Price it bar.

Changed since round 1: "Las Vegas" alts gone; the six media slots are now six different flat illustrations, each split by the warm/cool shade seam; h1 carries trade + city; reviews h2 is 3 lines; Problem/Fix use icon + word instead of mono middle-dot labels; pricing action is "Price it" everywhere; chips are square; 10:00 band re-shaped (wide image on top), 18:00 band has the outlined stamp; footer has the sun-on-horizon rule. Not re-listed below.

## firstScreen: 9.0
Earned: 1440-first.jpg: "115°" in amber Antonio over a 9-word h1 with trade + city ("By noon. Phoenix AC crews start at dawn."), diagonal seam split, phone in header and primary, proof line with Sample chip, next band peeks ~64px. 390-first.jpg: re-cut strip, both actions above fold.
Deductions:
- 1440-first.jpg: the left half is a flat vector illustration of two condensers; it carries the concept but not the "real company, real roof" trust a photo would (scored in photo, not again here). Not a 9.5 because the image half is the weaker half.

## distinctiveness: 9.0
Earned: 1440-full.jpg: the shade seam now lives inside every frame (hero, 05:00, 10:00, break, 14:00, 18:00) plus hour stamps and the footer horizon; the 10:00 and 18:00 bands now have their own shapes. Nothing in the library or hvac-B looks like it.
Deductions:
- 1440-first.jpg header: "Open now · until 7 pm" mono middle-dot string remains, the last AI-slop tell (−0.5 from 9.5).

## type: 9.0
Earned: Antonio / Figtree / DM Mono accent; real scale contrast (115°, 18:00 outline numerals in 1440-scroll-75.jpg); "What they said once we came down." now 3 clean lines (1440-scroll-75.jpg); mono labels down to ≤2 per view.
Deductions: none worth 0.5 beyond the header middle-dot string already counted in distinctiveness.

## layout: 8.5
Earned: 1440-full.jpg: tone run navy → sand → sand → full-bleed break → paper sorter → terracotta 14:00 → paper services → sand reviews → paper 18:00 → navy ZIP → paper form → navy footer; no dark bands touching; dense services vs quiet break.
Deductions:
- 1440-scroll-25.jpg: ~130px of empty sand under the 10:00 fix card before the break; the scroll still sags there (−0.5).
- 1440-scroll-50.jpg: 14:00 band reads backwards at 1440 (Fix steps + image on the left, the 14:00 Problem heading on the right), and the right column leaves ~250px empty under its paragraph.

## photo: 7.5
Earned: 1440-full.jpg / 390-full.jpg: six distinct frames, all on-topic and region-right (condensers, kneeling tech, coil rinse, Phoenix sunset with palm, stucco house with roof unit, drain line), one palette, and each frame is split warm/cool by the shade seam: the frame treatment is part of the signature. Alts now describe what is drawn.
Deductions:
- Every slot is still a `media/placeholder-*.jpg` flat vector illustration, not library photography. To a homeowner, clip-art condensers read as a template, not a company that has been on 22 years of roofs (−1.0 from 8.5).
- 390-first.jpg: hero strip crops the condensers at the top edge under the header; the units read as cut boxes (−0.5 from 8.5, folded into the above; score not double-cut).

## copy: 9.0
Earned: 1440-full.jpg: concrete trade voice (haboob, cottonwood fluff, capacitor, contactor, 82 degree rule, "Never pull the disconnect yourself. Call us."), Sample labels on rating, reviews and prices (1440-scroll-25.jpg, 1440-scroll-75.jpg), one name for the pricing action, no wrong city.
Deductions:
- 1440-scroll-25.jpg: the 10:00 coil-rinse fix shows the price for "Monsoon storm check" while "Condenser coil cleaning" is its own service; the chip doesn't match the story (minor, kept at 9).

## mobile: 9.0
Earned: 390-first.jpg: re-cut hero, short h1, both actions above fold, sticky bar. 390-full.jpg: single column sorter, services, reviews, form; render.json has no errors.
Deductions: 390-first.jpg crop noted under photo.

## a11y: 9.0
Earned: 1440-rm-full.jpg shows every band and word with motion off; one h1, h2 per section, h3 per service (dist/index.html); alts match the frames; forced-colors query present; render.json errors empty.

## motion: 8.5
Earned: dist/index.html: `--sw-hour` is now set per band and driven from app.js; the seam angle visibly differs band to band in 1440-full.jpg (steep in hero, near vertical at the break, shallow at 14:00), header sun-clock chip present (1440-first.jpg).
Deductions:
- 1440-scroll-25.jpg / 1440-scroll-50.jpg: no frame shows the header clock having advanced or the seam mid-travel; the "sun moves as you scroll" idea can't be confirmed from stills, and 23 `data-reveal` still suggest one fade-up everywhere else (−0.5 from 9).

## wow: 8.5
Earned: 1440-full.jpg: the repair-or-replace sorter verdict now sits on a navy card with a Repair ↔ Replace bar, plus the giant outlined 18:00 stamp: two moments a contractor would screenshot.
Deductions:
- 1440-full.jpg: the sorter verdict card is not split by the shade seam like every other frame, so the tool and the signature still feel like two systems (−0.5 from 9).

## polish: 9.0
Earned: square chips now match square buttons and cards (1440-first.jpg, 1440-scroll-25.jpg); favicon, apple-touch, OG, print + forced-colors queries; lazy images with dimensions.

## Arithmetic
14×9 + 12×9 + 10×9 + 10×8.5 + 8×7.5 + 8×9 + 7×9 + 7×9 + 12×8.5 + 8×8.5 + 4×9
= 126 + 108 + 90 + 85 + 60 + 72 + 63 + 63 + 102 + 68 + 36 = 873 / 100 = 8.73

## Must
None. No DEMO-RULES breach, no wrong fact, no visible a11y failure, nothing broken on a phone.

## Should
- Every `[data-photo]` (1440-full.jpg): replace the `placeholder-*.jpg` illustrations with approved hvac library photographs, one per slot, no repeats, keeping the warm/cool seam split on each. If the hvac library has no approved frames, this site is blocked on media curation; photo cannot reach 8.5 with illustrations.
- Hero on mobile (390-first.jpg): set the hero image `object-position: 50% 70%` (or raise the strip height to ~200px) so the condensers sit fully inside the frame, not cut by the header.
- `#h-10` band (1440-scroll-25.jpg): cut the bottom padding by ~120px so the fix card ends near the band edge.
- `#h-14` band (1440-scroll-50.jpg): at ≥900px put the Problem column (14:00 stamp + h2) on the left and the Fix steps on the right, so it reads problem → fix like the other bands; vertically center or top-align the shorter column to remove the ~250px hole.
- Header `[data-open-now]` (1440-first.jpg): replace "Open now · until 7 pm" with "Open now, until 7 pm" (no middle dot).
- 10:00 fix price chip (1440-scroll-25.jpg): name it "Coil cleaning" with its own Sample price, or reword the fix line to "Part of a monsoon storm check".

## Elevate
- **photo (7.5):** make the frames one shoot on one roof: real library photos for the five hour bands, each clipped by the seam at its hour's angle and duotoned (amber on the sunlit side, navy on the shaded side) so the page reads as a single day shot from 05:00 to 18:00.
- **motion (8.5):** make the sun visibly travel: a single scroll-scrubbed `--sw-hour` that rotates the seam on every band while it is in view and ticks the header chip 05:00 → 18:00 in step, with the sorter verdict card's seam swinging to the verdict side when it resolves; static noon angle under reduced motion.
