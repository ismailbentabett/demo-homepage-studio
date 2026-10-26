COPY: needs copy-chief

# pest-C, critique round 1 (fast)

**Five-second test** (1440-first.jpg, 390-first.jpg): "A termite company in New Orleans, for the swarmers that show up in May. I can book a swarm visit or call (504) 555-0157. Why them? They seem to know the dusk swarm. But the big picture is an empty beige box, so it looks like the site isn't finished."

## First screen: 7.5
- Good: the h1 names the pest and the city in 5 words. The phone is in the header and in the secondary button. One filled primary action. 390: h1 is 2 lines and both actions are above the fold.
- 1440-first.jpg: the hero is a stock split (text left, tall frame right), not the promised family 4 stacked headline over a 21:9 dusk strip. The frame is a flat beige placeholder.
- 1440-first.jpg: the proof line is 3 lines of mono with "$275-$475/per year" (hyphen range, "/per").
- 1440-first.jpg: an empty dark band under the hero and nothing peeks (-0.5).
- The ZIP field makes a third competing action.

## Distinctiveness: 6
- The clock is visible only as a 48px dial in the hero (1440-first.jpg). The story, reviews and footer carry the hook but show no clock, no time stamps and no dimming lamp (1440-scroll-25.jpg, 1440-scroll-75.jpg, 1440-rm-full.jpg): signature only in the hero (-2.0).
- A mono tracked eyebrow sits on every heading (1440-scroll-50.jpg, 1440-scroll-75.jpg) (-0.5).
- The 3×3 bordered service grid with "Price it" on each card is a template (1440-scroll-50.jpg) (-0.5).
- The palette and serif clearly differ from pest-A (sites/pest/A/qa/screens/1440-first.jpg).

## Typography: 7.5
- The pairing is good, and the italic Garamond reviews are lovely (1440-scroll-75.jpg).
- Straight quotes on the reviews and a hyphen range in the hero (-0.5).
- The mono is overused (kicker, proof, meta, rating, prices), so there are 3+ tracked labels per view (1440-scroll-75.jpg).
- No scale-contrast moment after the h1.

## Layout: 7.5
- The tone sequence is sound (1440-rm-full.jpg).
- The house-type cards are about 700px bordered boxes with one image and two lines, and the right column and bottom third are empty (1440-scroll-25.jpg) (-0.5).
- Services, prices and reviews share the heading-over-grid shape (-0.5).

## Photo: 5
- Every frame is a flat beige rectangle (1440-first.jpg, 1440-scroll-25.jpg, 1440-scroll-50.jpg, 390-rm-full.jpg). The dist/media files are byte-identical placeholders.
- The alt text describes photos that are not there, and one file is named "home-wilmington" on a New Orleans site.
- Below the floor.

## Copy: 8
- Strong local specifics ("Brick-between-posts with a side hall…", 1440-scroll-25.jpg).
- "From real porches" over Sample reviews (1440-scroll-75.jpg): mustFix, so the score is capped.
- "Price it" ×9 (1440-scroll-50.jpg).
- "Sample yearly range: —" shows as an empty state (1440-scroll-75.jpg).

## Mobile: 8
- 390-first.jpg is well composed. No overflow (render.json). Stacked story.
- The native checkboxes and radios are about 13px targets (390-rm-full.jpg) (-0.5).
- The phone first screen has no image.

## Accessibility: 8.5
- The reduced-motion shots show everything (1440-rm-full.jpg, 390-rm-full.jpg). Heading order is fine and the clock is aria-hidden.
- The checkboxes are tiny and have no designed focus on parchment (1440-scroll-75.jpg).

## Motion: 7
- Hooks: split h1, reveal, hotspots, and a clock hand on --sw-p.
- None of the promised story is visible in the frames: no clock advance, no lights dimming, no pin (1440-scroll-25.jpg).
- Whole sections fade the same way (blank bands in 1440-full.jpg) (-1.0).

## Wow: 6.5
- The page never darkens and the clock is a corner ornament (1440-first.jpg).
- The tool outputs are plain text lines (1440-scroll-75.jpg) (-1.0).

## Polish: 7.5
- Favicon, OG, print and forced-colors blocks are present.
- Pill badge against square buttons (1440-scroll-75.jpg) (-0.5).
- Backdrop-filter glass behind the clock (1440-first.jpg).
- The placeholder frames make the page look unfinished.

## Arithmetic
14×7.5 + 12×6 + 10×7.5 + 10×7.5 + 8×5 + 8×8 + 7×8 + 7×8.5 + 12×7 + 8×6.5 + 4×7.5
= 105 + 72 + 75 + 75 + 40 + 64 + 56 + 59.5 + 84 + 52 + 30 = 712.5 / 100 = **7.13** → FIX (photo below floor 6, two mustFix items)

## Must
1. **All media are placeholders** (1440-first.jpg, 1440-scroll-25.jpg, dist/media/*.jpg, all 16,907 bytes and identical). Re-curate niches/pest media with real, distinct approved frames and rebuild. This is a pipeline issue: escalate.
2. **#proof .kicker "From real porches"** claims Sample reviews are real (1440-scroll-75.jpg). Replace it with "Sample reviews, New Orleans".

## Should
- **#hero proof line** (1440-first.jpg): replace "$275-$475/per year" with "$275–$475 a year" (en dash, curly typography) and cut it to 2 lines (drop the duplicate "Open now · until 6 pm", which the header already shows).
- **#hero** (1440-first.jpg): lower min-height so the helper band peeks 60–100px at 1440×900. Move the ZIP check out of the hero (it already has its own section, #area).
- **#proof reviews** (1440-scroll-75.jpg): use curly quotes “ ” and add the promised time-stamp pill per review (e.g. "8:20 pm").
- **#house-types cards** (1440-scroll-25.jpg): drop the outer bordered box. Set image and text in a 7/5 grid with the text vertically centred, plus the entry-point list that is promised. Cut each card to about 60svh.
- **#services** (1440-scroll-50.jpg): replace the 3×3 card grid with a ruled list (name, one line, sample price at the right in tabular mono) so it stops being a template grid. Make the link copy specific ("See inspection price").
- **Plan builder / lights-out helper** (1440-scroll-75.jpg): use custom 24px checkboxes and radios inside 48px labels, add accent focus rings, and give an initial output state that is not "—" (for example "Tick what you need").
- **Kickers** (1440-scroll-50.jpg, 1440-scroll-75.jpg): keep the mono eyebrow on 2 sections at most.
- **.hero__media .dusk-clock** (1440-first.jpg): remove the backdrop-filter. Use a solid midnight disc.
- **Sample rating badge** (1440-scroll-75.jpg): match the square radius of the system.

## Elevate
- **Photo**: once real frames exist, grade every one into an indigo and streetlamp-gold duotone and cut the hero as the promised 21:9 dusk strip under a stacked headline. The photography then becomes the dusk window instead of boxes beside text.
- **Distinctiveness**: make the dusk clock the spine of the page. A clock fixed in the margin advances 7:40 → 9:30 pm as section grounds step darker through the story. Reviews are stamped with times on that clock, and the footer lands at 9:30 with the lamp glow down to a hairline. Someone covering the logo should still know it is "the dusk page".
