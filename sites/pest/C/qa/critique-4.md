COPY: ok

# pest-C, critique round 4 (fast, final round)

**Five-second test** (1440-first.jpg, 390-first.jpg): "A termite company in New Orleans, the Formosan swarm kind. If swarmers show up at my porch light, they'll come out on a May evening and tell me whether the termites came from inside my walls. I can book a swarm visit or call (504) 555-0157, and they're open now. Why them? They talk about my kind of house, the price is right there (sample, from $275 a year), and the whole page feels like dusk on my street." Clear in under five seconds.

## What changed since round 3 (verified in screenshots)
- The hero is a new frame: a row of shotgun doubles with a porch-light grade. No readable street sign and no vector lamppost sticker. The h1 now opens with "Formosan" (1440-first.jpg, 390-first.jpg).
- The story frames never go empty. All four gables carry their photo with motion on (1440-full.jpg) and with reduced motion (1440-rm-full.jpg). With reduced motion the story becomes a four-up contact sheet: photo, drawing, time stamp and check points for each house (1440-rm-full.jpg #story).
- The mono eyebrows are gone. Labels now use the gold italic time-stamp style ("Swarm season · New Orleans" in 1440-first.jpg).
- The card and service descriptions are lighter (1440-scroll-25.jpg, 1440-scroll-50.jpg).
- The lights-out band's lower-left now holds the swarm-calendar month strip (1440-full.jpg).

## First screen: 9
- Earned (1440-first.jpg): the h1 is 8 words on 2 lines and names the pest. The gold italic line above it gives the place. There is one filled primary ("Book a swarm visit") and a quieter outlined phone button. The phone shows in the header, and "Open now · until 6 pm" sits next to it. The proof line reads "Sample Formosan plan from $275 a year · New Orleans and nearby towns". The 7:40 pm dusk clock sits on the photo, so the signature is on the first screen, and the next band peeks about 80px.
- 390-first.jpg: the h1 runs 3 lines, the photo is re-cut tighter, both actions sit above the fold, and the proof line is visible.
- Not 10: the composition is still text stacked over a wide photo panel. That is a well-made but familiar hero family. The city appears only in the italic kicker and the sub, not in the h1.

## Distinctiveness: 9
- The dusk clock is the spine. The margin clock reads 8:27 (1440-scroll-25.jpg), 8:50 (1440-scroll-50.jpg) and 9:19 (1440-scroll-75.jpg). Every section and every review carries a time stamp, and the footer closes on "9:30 pm. Porch light back on." (1440-full.jpg). The gable-clipped photos turn the story frames into the house types. Nothing in pest-A or pest-B shares the palette, the Garamond/Karla pair or this idea.
- Not 10: the services list (1440-scroll-50.jpg) and the area band (1440-full.jpg) are standard shapes with only a time stamp to carry the signature.

## Typography: 9
- Earned: the display break "The street goes dark. The swarm moves on to the next light." (1440-full.jpg) gives a scale-contrast moment. The Garamond italic reviews have italic time stamps (1440-scroll-75.jpg). Quotes are curly, ranges use en dashes, and the page has no em dashes. The tracked mono caps are gone. The descriptions now read at a comfortable contrast (1440-scroll-25.jpg).
- Not 10: the review attributions are small grey Karla with a wrapping service name ("Termite / inspection" in 1440-scroll-75.jpg), which makes the rag ragged.

## Layout: 9
- Earned: 1440-full.jpg shows a clear tone shape: deep hero, slate lights-out helper, deep story, full-bleed break, services list, paper prices, deep reviews, gold guarantee band, slate area, form, footer. No two dark bands merge without a change of shape. The lights-out lower-left is now filled by the month strip.
- 1440-scroll-75.jpg: the reviews leave about 300px of dead width between the quote column (which ends at about x=810) and the attribution column (which starts at about x=1120). Not deducted at this size, but it keeps the section from a 10.

## Photo: 8.5
- Earned: the hero sign problem is gone. 1440-first.jpg is a street of shotgun doubles with gingerbread porches, power lines and a porch-lamp warmth on the left. That is region-right and on-thesis. Every story frame is on-topic (shotgun porch, raised cottage behind an iron fence, attic rafters, mud tube on a block foundation), graded into one indigo and lamp-gold duotone, and clipped into a gable that belongs to the signature (1440-rm-full.jpg, 390-rm-full.jpg).
- 1440-full.jpg #area: the area photo is a leafy lawn street with parked cars (alt "Leafy residential street under a full tree canopy"). It reads as a generic suburb, not New Orleans, and is the weakest frame on the page.
- 1440-first.jpg: the alt says "Pastel shotgun houses", but the grade has removed the pastel. Small mismatch.
- Not 9: the grade is one filter on every frame, not a sequence. The light does not visibly fall from 7:40 to 9:30 across the frames.

## Copy: 9
- Plain and trade-specific: "Sill plate over the piers", "The joint between the two roofs", "Stairwell wall at the step-up" (390-rm-full.jpg). "Soft sills, door frames and floor joists probed and photographed so you can show your carpenter" (1440-scroll-50.jpg). Every action is named for what it does. The guarantee, the license and "22 years in New Orleans" match facts.json (1440-scroll-75.jpg). Every review carries a Sample review label.

## Mobile: 9
- 390-first.jpg is composed for the phone: the photo is re-cut, the actions are full width and the h1 runs 3 lines. 390-rm-full.jpg: each house card has its own line drawing above its time stamp, there is no pin on the phone, and the story stacks as cards. render.json overflow is clean at 320 and 390.
- Not 10: the 320 width is only checked through overflow, and the services list on the phone is a long single column with no phone-specific density decision (390-full.jpg).

## Accessibility: 9
- Earned: the round-3 mustFix is fixed. Every story photo shows in 1440-rm-full.jpg and 390-rm-full.jpg, and the reduced-motion story is a complete designed contact sheet. One h1, ordered headings, alt text that describes the frames, decorative break image alt="" (dist/index.html). static.json and render.json are clean.

## Motion: 9
- Motion explains something. The sticky house drawing morphs per card and the big clock advances (8:20 pm on Camelback in 1440-scroll-25.jpg). The porch-light meter drops, inactive cards dim (Slab is dimmed in 1440-scroll-25.jpg), and the margin clock walks 8:27 → 8:50 → 9:19 across the scroll frames. No frame drops out any more (1440-full.jpg).
- Not 10: the services list and area band have no motion of their own beyond the margin clock (1440-scroll-50.jpg).

## Wow: 9
- The "where they get in" stage is tied to the thesis and the trade: drawing, clock, light meter and photo change house by house (1440-scroll-25.jpg). The lights-out helper is a checklist with an answer (1440-full.jpg).
- Not 10: the price tool's output ("Termite inspection: $95 to $175", 1440-full.jpg #prices) is a plain figure in a box. It is not in the clock/lamp language.

## Polish: 9
- Favicon, OG, print, forced colors and consistent radii are in place. The footer is a designed close (1440-full.jpg). No transition: all in the built CSS, no empty frames and no sticker artefacts.

## Arithmetic
14×9 + 12×9 + 10×9 + 10×9 + 8×8.5 + 8×9 + 7×9 + 7×9 + 12×9 + 8×9 + 4×9
= 126 + 108 + 90 + 90 + 68 + 72 + 63 + 63 + 108 + 72 + 36 = 896 / 100 = **8.96**

## Must
None.

## Should
- **#area photo** (1440-full.jpg): the leafy lawn street reads as a generic suburb. Swap it for an approved New Orleans or Gulf frame (a raised house, an iron fence or a narrow sidewalk), or crop it to the canopy and drop the lawns and cars.
- **Hero alt** (1440-first.jpg, img[src*="home-nola-shotgun"]): the alt says "Pastel shotgun houses", but the graded image is not pastel. Use "A row of shotgun doubles with gingerbread porches behind a picket fence at dusk".
- **Review attributions** (1440-scroll-75.jpg): the service name wraps under the name ("Termite / inspection"). Give the attribution column min-width: 15rem, or put the service on its own line below the name and the Sample label.
- **Reviews dead width** (1440-scroll-75.jpg): about 300px of empty width between the quotes and the attributions. Widen the quote column to about 62ch, or pull the attribution column left to sit right after it.

## Elevate
- **Photo:** make the grade carry the clock. Tune each frame to its minute (7:40 hero warm, 8:05–8:28 story cooling, 9:20 area deep indigo) so the light visibly falls as you scroll. Replace the suburban area frame with one that is unmistakably a New Orleans street after dark.
- **First screen:** let the composition belong only to this concept. Make the photo panel the street at the moment the porch lights come on: the clock and a lamp-glow rule set into the frame as the light source, with the h1 against that light. The hero then shows the thesis, not just text stacked over a photo.
