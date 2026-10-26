COPY: needs copy-chief

# autotuneup-B: critique round 2 (fast mode)

**Five-second test.** 1440-first.jpg: "A car-maintenance shop in Reno. I type my mileage and it tells me what's due. At the sample 45,000 mi it's an oil change and rotation now, filters at 60k, plugs not yet. The call button is top right. Why them: they show you what can wait." 390-first.jpg gives the same answer: the h1 is 2 lines, the input and CTA are above the fold, and the bar has Call plus a quiet "Get my plan".

What changed since round 1: the hero is now a designed gauge panel with a true sample state, the logo has a mark and a name, services are a 2-column ledger, the place band is a full-bleed break with type over the image, "Get my plan" is one action name everywhere, bay time has real copy, and the 390 bar has one filled button. Those items are not re-listed below.

## First screen: 8.5
Earned (1440-first.jpg, 390-first.jpg): the h1 names the trade and the city in 7 words. There's one primary action, the phone is in the header and in the 390 bar, and the proof line carries "(Sample)". The next band peeks about 64px, and the signature readout plus the status rows are visible.
Deductions:
- 1440-first.jpg: the proof line is still ~13px grey, written as middle-dot strings. It's the weakest text on the screen (−0.5).
- 1440-first.jpg: the composition is still the stock text-left / panel-right family. It's better executed, but it isn't a hero only this concept could have.

## Distinctiveness: 8.5
Earned: the odometer readouts now organise the services ledger (030000 / 060000 / 100000 with a sticky giant readout, 1440-scroll-25.jpg). They also run through the report, the self-check, the reviews, the plan steps and the footer (049501 YOUR NEXT SERVICE, 1440-full.jpg). Nothing here could be swapped with the siblings.
Deductions:
- 1440-scroll-25.jpg "READINGS, NOT GUESSES", 1440-scroll-75.jpg "FROM NEIGHBORS, WITH MILEAGE", 1440-first.jpg "CAR MAINTENANCE BY MILEAGE": tracked mono eyebrows remain above several h2s (−0.5).

## Typography: 8.0
Earned: the giant 100000 readout against small body copy is a real scale-contrast moment (1440-scroll-25.jpg). The apostrophe in the h1 is now curly.
Deductions:
- 1440-scroll-25.jpg "$90-$140", "$120-$190" and 1440-scroll-50.jpg "3,000-5,000 mi": hyphen ranges (−0.5).
- 1440-first.jpg: 3+ tiny tracked caps labels in one view (eyebrow, SAMPLE: 45,000 MI, DUE NOW / AT 60K / NOT YET, ODO / MI) (−0.5).

## Layout and rhythm: 8.5
Earned (1440-full.jpg): the ledger uses the full width, there's a full-bleed break with type over the image, the report is asymmetric, the oil table is dense, the tones alternate, and no two dark bands touch.
Deductions:
- 1440-first.jpg (hero estimator), 1440-scroll-75.jpg (booking card) and 1440-full.jpg ("Your plan in four short steps" form) are three sections that all ask for the same plan. One job is spread over three bands (−0.5).

## Photo and video: 6.0
What a visitor sees: no photograph at all. One dial graphic fills five frames: the hero (1440-first.jpg), the three report frames (1440-full.jpg) and the self-check (1440-scroll-50.jpg). That counts as the same image repeated (−1.0). The alt texts describe a spark plug, a tread gauge, a brake-fluid reservoir and a tire-pressure gauge, and none of them is shown (mustFix). The desert road break (1440-full.jpg) is the only distinct frame. It now looks designed and prints no alt text, which is why the score clears the floor.

## Copy: 8.5
Earned: trade nouns and honest "it depends" lines: the quarter test, 4/32, "Your spec wins" (1440-scroll-50.jpg), "Desert dust off this road ends up in your air filter" (1440-full.jpg), "Confirmed when we call you back" (1440-scroll-75.jpg). Sample labels are on the prices and reviews.
Deductions:
- 1440-full.jpg: the same "get a plan" ask appears in three sections (hero, booking card, four-step form) (−0.5).

## Mobile: 8.5
Earned (390-first.jpg): no overflow (render.json), the h1 is 2 lines, the CTA is above the fold, and the bar has a clear hierarchy.
Deductions:
- 390-full.jpg: four identical dials stacked make long dead scrolls. Sections are collapsed, not re-cut for the phone.

## Accessibility: 8.0
Earned: 1440-rm-full.jpg shows every word, the rows sit at their final values, and the footer reads 050000. Focus-visible and forced-colors are present in dist.
Deductions:
- 1440-full.jpg / 1440-scroll-50.jpg: the alt text on five frames describes objects that are not in the image, which fails WCAG 1.1.1 (−0.5; fixed together with the photo mustFix).
- 1440-first.jpg: the proof line is small and grey.

## Motion and interaction: 8.0
Earned: dist has split headings, clip reveals, staggers, a digit roll (049501 mid-roll in 1440-full.jpg vs 050000 in 1440-rm-full.jpg), the estimator, a compare handle and the mobile bar. The needle angle changes per dial.
Deductions:
- 1440-scroll-25/50/75.jpg: nothing in the frames shows motion that explains something beyond reveals. The hero in 1440-first.jpg is already settled at 045000, with no visible arrival roll.

## Wow: 8.5
Earned: in 1440-first.jpg the tool output is now an instrument panel in the signature's language.
Deductions:
- 1440-full.jpg: the "sample report you can hold" is the same dial four times, so the second moment reads as wallpaper.

## Polish: 8.5
Earned: the logo now has a mark, there's a favicon, OG, JSON-LD, a print stylesheet and forced-colors.
Deductions:
- 1440-scroll-75.jpg: the booking card has rounded corners while the ledger and frames are square (−0.5).

## Arithmetic
14×8.5 + 12×8.5 + 10×8 + 10×8.5 + 8×6 + 8×8.5 + 7×8.5 + 7×8 + 12×8 + 8×8.5 + 4×8.5
= 119 + 102 + 80 + 85 + 48 + 68 + 59.5 + 56 + 96 + 68 + 34 = 815.5 / 100 = **8.16** (8.155)

Fast mode round 2 is the last round. The score is below 8.8 and mustFix is not empty → **NEEDS_HUMAN**.

## Must
1. **#report frames (1440-full.jpg), self-check frame (1440-scroll-50.jpg), hero (1440-first.jpg)**: one placeholder dial is used in five slots, and the alt texts describe objects that aren't shown. Fix: use the approved real frames for parts-spark-plugs, tool-tread-gauge, process-brake-fluid and process-tire-pressure. If none exist, render each slot as a distinct designed panel and make the alt text describe what is actually shown (or use `alt=""` if the image is decorative).

## Should
- **Ranges (1440-scroll-25.jpg, 1440-scroll-50.jpg)**: change "$90-$140", "$120-$190", "3,000-5,000 mi", "5,000-7,500 mi" and "7,500-10,000 mi" to en dashes.
- **Hero proof line (1440-first.jpg)**: set it at 15px in full ink and drop the middle dots. Line 1: "Open now, until 6 pm". Line 2: "Reno, Sparks and four more · 4.8 from 296 reviews (Sample)", which becomes two separate spans.
- **Eyebrows**: remove "CAR MAINTENANCE BY MILEAGE" (hero) and "FROM NEIGHBORS, WITH MILEAGE" (#reviews). Keep only the report's eyebrow.
- **Duplicate plan asks**: merge the booking card (1440-scroll-75.jpg) and the "Your plan in four short steps" form (1440-full.jpg) into one band, so the plan is asked for once after the hero.
- **Booking card radius (1440-scroll-75.jpg)**: square it to match the ledger and frames.
- **390-full.jpg**: on phones, show one report frame large and the other two as a 2-up row of smaller frames, instead of stacking four tall dials.

## Elevate
- **Photo (6.0)**: make the report a sequence of distinct readings: tread close-up with a 4/32 overlay, plug gap with a gauge strip, fluid strip against a moisture scale. Give all of them one grade and pin each one's odometer readout, so the band reads measure → read → decide instead of four copies of one dial.
- **Typography (8.0)**: let the type carry the instrument idea end to end. Set every range as a tabular en-dash readout, keep one caps style for readouts only, and drop the mono eyebrows, so the condensed headings and the giant odometer numerals are the page's only two voices.
