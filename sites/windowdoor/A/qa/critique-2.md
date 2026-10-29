COPY: ok

# windowdoor-A · critique round 2 (mode: fast; scored the same as strict)

## Five-second answer
1440-first.jpg: "Impact windows and doors in Sarasota. They measure every opening, tag it and price it line by line. I call (941) 555-0143, text a photo, or start a window schedule. Why them: the quote is a list, not a lump sum." 390-first.jpg gives the same answer: photo, tags and both actions are above the fold.

## What changed since round 1
These items are fixed: the primary action has one name, the hero peeks into the next band, the 390 first screen is re-cut, the key-plan photo is now a Florida house, the service body is larger, and #area has one job. They are not re-listed. A new defect showed up: the key-plan photo no longer fills its stage.

## First screen: 9.0
Earned: 1440-first.jpg has the "tagged" box set over the jamb on purpose with a W1 string, the header and hero both say "Start my window schedule", the coral band peeks by about 90px, and the Sample proof is present. 390-first.jpg has the photo, W1/W2 and Call/Text above the fold.
- 390-first.jpg: the proof line (price, rating, open now) is below the fold. No deduction at this level.

## Distinctiveness: 9.0
Earned: the tag/schedule system works in at least 6 sections (1440-rm-full.jpg key plan, 1440-scroll-25.jpg strip, 1440-scroll-50.jpg service tags, 1440-scroll-75.jpg reviews, the 1440-full.jpg sheet and footer, and the tagged town list A0–A7).
- 1440-full.jpg: an eyebrow over every h2 plus mono middle-dot strings (−0.5).

## Typography: 9.0
Earned: 1440-scroll-50.jpg service body is full ink and readable. The Spectral review quotes (1440-scroll-75.jpg) and the tabular sheet prices are good. The mono captions stay small and grey, but they are captions.

## Layout and rhythm: 8.5
Earned: #area is now a single job, ZIP plus a tagged town table (1440-full.jpg). Office hours moved into #contact. The tones still alternate cleanly.
- 1440-full.jpg / 1440-rm-full.jpg #keyplan: the photo ends about 280px above the caption strip, leaving an empty sand band inside the section. It shows in reduced motion too, so it is layout, not timing (−0.5).
- 1440-scroll-25.jpg: the process is still about 3.6 screens with large gaps. No extra deduction.

## Photo and video: 8.5
Earned: 1440-rm-full.jpg shows the key plan as the same Gulf flat-roof stucco house from the drive. The grade matches the hero and the tags sit on real openings.
- 1440-rm-full.jpg / 390-rm-full.jpg: half the frame is lawn and driveway, and all five tags crowd into the top third. The subject is small in its own sheet (−0.5).
- 1440-scroll-50.jpg: the pool-court frame is still the flatter grade. Minor.

## Copy: 9.0
Earned: one action phrase across the header, hero, sheet and form h2 (1440-first.jpg, end of 1440-full.jpg). The reviews are tied to openings ("west wall", "slider + sill pan"), and every claim carries a Sample label (1440-scroll-75.jpg).

## Mobile: 9.0
Earned: 390-first.jpg is composed for the phone, with a sticky Call/Text bar. render.json shows no overflow at 320/390. 390-full.jpg has stacked process cards.

## Accessibility: 9.0
Earned: 390-rm-full.jpg and 1440-rm-full.jpg show every word, the photo and all 5 tags. Headings run h1→h2→h3→h4. Inputs are labelled. Static and render checks are clean.

## Motion and interaction: 8.5
Earned: 1440-scroll-25.jpg shows the strip ticking while the jamb drawing changes state.
- 390-full.jpg #keyplan: with motion on, the stage is a blank sand box (no photo, no tags). In 1440-full.jpg only a faded W1 has arrived. The reveal still hides the section's whole content until late (−0.5).

## Wow moment: 9.0
Earned: the strip-to-sheet arc (1440-scroll-25.jpg → 1440-full.jpg) and the measure tool's tagged row. The 5-tag key plan (390-rm-full.jpg) is the share moment, when it renders.

## Polish: 9.0
Earned: favicon, OG, JSON-LD, print and forced-colors blocks, a consistent 2px radius, and the "Schedule closed." footer (1440-full.jpg).

## Arithmetic
14×9 + 12×9 + 10×9 + 10×8.5 + 8×8.5 + 8×9 + 7×9 + 7×9 + 12×8.5 + 8×9 + 4×9
= 126 + 108 + 90 + 85 + 68 + 72 + 63 + 63 + 102 + 72 + 36 = 885 / 100 = **8.85**

## Must
None.

## Should
1. **#keyplan stage height** (1440-full.jpg, 1440-rm-full.jpg): the image does not fill its container. Give the photo `width:100%; height:100%; object-fit:cover`, or size the stage to the image's aspect ratio, so there is no sand band between the photo and the caption strip.
2. **#keyplan reveal** (390-full.jpg, 1440-full.jpg): never start from a blank stage. Keep the photo at opacity 1 and animate only a mask edge or the tags, and trigger at `top 80%` so the photo is there when the section enters.
3. **#keyplan crop** (1440-rm-full.jpg): set `object-position` toward the top, around 50% 30%, or crop the frame so the house fills at least 60% of the height and the tags spread across the frame.
4. **Pool-court grade** (1440-scroll-50.jpg): warm it toward the hero grade (slight lift and warmth) so all three frames read as one shoot.
5. **Proof at 390** (390-first.jpg): move the one-line price + SAMPLE PRICING under the buttons and above the paragraph, so the proof joins the first phone screen.

## Elevate
- **motion (8.5)**: make the key plan a scrubbed survey. The photo is there from the first pixel. A scan line crosses the house on scroll and drops each tag as it passes the opening, while the Sheet A-1 card counts "1 of 5 … 5 of 5 openings". The motion counts the openings and never hides the house.
- **layout (8.5)**: re-cut #keyplan as one plan sheet. Crop to the house band, fill the stage edge to edge, and replace the coral caption strip with a thin title-block rail (sheet / openings / scale / "tags are an example"). The section becomes one drawing with no dead space.
