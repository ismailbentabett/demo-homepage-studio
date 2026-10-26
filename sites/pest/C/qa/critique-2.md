COPY: ok

# pest-C, critique round 2 (fast)

**Five-second test** (1440-first.jpg, 390-first.jpg): "A termite company in New Orleans for the May swarm, when the porch lights come on. I can book a swarm visit or call (504) 555-0157. Why them? They clearly know the dusk swarm and they put a sample renewal price right up front." The answer is clear. The big dusk-street drawing makes it feel finished now.

## First screen: 8.5
- Earned: stacked h1 over the 21:9 dusk strip, as the concept promised. Two actions. The next band peeks. 390 has everything above the fold.
- 1440-first.jpg: the h1 has no outcome. The proof line is 2 lines of small grey text under the buttons and reads as fine print.

## Distinctiveness: 9
- Earned: a fixed margin clock advances through the page (8:22 in 1440-scroll-25.jpg, 8:47 in 1440-scroll-50.jpg, 9:13 in 1440-scroll-75.jpg). Every section and review has a time stamp, and the footer lands on "9:30 pm. Porch light back on." (1440-rm-full.jpg). The service card grid is gone.
- One mono eyebrow is left ("SAMPLE REVIEWS, NEW ORLEANS", 1440-scroll-75.jpg). Not deducted.

## Typography: 8.5
- Earned: curly quotes, en-dash ranges, the "The street goes dark" display moment and the italic reviews (1440-rm-full.jpg, 1440-scroll-75.jpg).
- 1440-scroll-25.jpg: the house-card descriptions are faint small grey text on near-black (-0.5).

## Layout: 8
- Earned: the services are a ruled two-group list (1440-scroll-50.jpg), and the gold band breaks the dark run.
- 1440-scroll-25.jpg: the left column is empty at 1440 for the length of the story, with about 260px of dead band between cards (-1.0).
- 1440-rm-full.jpg #area: the right frame is an empty gradient (-0.5).

## Photo: 7
- dist/media/*.jpg are still seven identical placeholders, multiply-blended under SVG drawings. The drawings are coherent and in the brand duotone (up from 5), but there is no photography, and the area frame is empty (1440-first.jpg, 1440-scroll-25.jpg, 1440-rm-full.jpg). mustFix.

## Copy: 9
- The "From real porches" claim is fixed. The copy is local and process-honest ("You keep the product label", 1440-scroll-50.jpg; "Names and stories are samples", 1440-scroll-75.jpg). The service links say what they do. Every review is labelled Sample.

## Mobile: 9
- 390-first.jpg is designed, not just collapsed. 390-rm-full.jpg stacks cleanly, overflow is clean at 320 and 390, and the helper uses full-width rows.

## Accessibility: 8.5
- Content is complete with reduced motion (1440-rm-full.jpg, 390-rm-full.jpg).
- The alt text and captions describe photographs that aren't visible (hero alt "Hand probing foundation perimeter with flashlight" on a skyline drawing, 1440-first.jpg). mustFix, capped.

## Motion: 8.5
- Earned: the clock rail visibly advances across the 25/50/75 frames.
- 1440-scroll-25.jpg: the per-card lamp dimming isn't visible, and every card has the same glow (-0.5). The section entrances all use the same fade (1440-full.jpg).

## Wow: 8.5
- The "street goes dark" break and the time-stamped reviews are worth a screenshot. The price tool is a dropdown that gives one line of text (1440-rm-full.jpg).

## Polish: 8.5
- The glass disc is gone and the radii are consistent (1440-first.jpg). The area frame is empty and the placeholder jpgs ship in dist.

## Arithmetic
14×8.5 + 12×9 + 10×8.5 + 10×8 + 8×7 + 8×9 + 7×9 + 7×8.5 + 12×8.5 + 8×8.5 + 4×8.5
= 119 + 108 + 85 + 80 + 56 + 72 + 63 + 59.5 + 102 + 68 + 34 = 846.5 / 100 = **8.47**

## Must
1. **Photo** (1440-first.jpg, 1440-scroll-25.jpg, 1440-rm-full.jpg #area; dist/media/*.jpg): still no photography, because all media are identical placeholders. Escalate: the pest niche needs a real approved library. Until then, if the drawings stay, remove the hidden placeholder `<img>` elements and fill the area frame with the drawing system.
2. **A11y** (img[data-slot], figcaptions): the alt text and captions describe photos that aren't on screen. Rewrite them to describe the drawing, or use alt="" and keep the meaning in the adjacent list.

## Should
- **#story at 1440** (1440-scroll-25.jpg): the empty left column and the ~260px gaps. Keep the heading and large clock sticky in the left column for the whole story, and cut the card spacing to about 96px.
- **#story card text** (1440-scroll-25.jpg): the description grey is too faint. Raise it to about #B8B2A6 and 17px.
- **#story cards** (1440-scroll-25.jpg): carry out the promised dimming, by lowering the glow opacity per card from 1 to 0.4 as the time advances.
- **Hero proof line** (1440-first.jpg): make it one line at 15px in ink colour, e.g. "Sample Formosan plan from $275 a year · New Orleans and 7 nearby towns".
- **#prices tool** (1440-rm-full.jpg): the output is a single text line. Show it as a range bar on the price table, with the selected row highlighted.

## Elevate
- **Photo:** commit to one frame language. Grade real frames into the indigo/streetlamp duotone and clip them inside the house-outline silhouettes, so each story card is a photo seen through the drawing.
- **Layout:** make the house-type story a true pinned stage. The left column holds the large clock and a house drawing that morphs from shotgun to Creole to camelback to slab while the right column steps through the checks, so no column is ever empty.
