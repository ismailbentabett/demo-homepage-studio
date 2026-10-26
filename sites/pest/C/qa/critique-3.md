COPY: ok

# pest-C, critique round 3 (fast)

**Five-second test** (1440-first.jpg, 390-first.jpg): "A Formosan termite outfit in New Orleans. Swarmers at the porch light, and they'll come at dusk and tell me if the termites are inside my house. I can book a swarm visit or call (504) 555-0157. Why them? They know the May swarm, the price is right there ($275 a year, sample), and they're open now." That is clear in under five seconds. This round has real photography: a graded street photo with the dusk clock in the corner.

## What changed since round 2 (verified in screenshots)
- Real photos now replace the placeholders. They share one indigo-to-streetlamp duotone and are clipped in house-gable silhouettes (1440-scroll-25.jpg, 1440-rm-full.jpg).
- The story's left column now holds a sticky house drawing that changes per card (shotgun in 1440-full.jpg, camelback in 1440-scroll-25.jpg), a large clock and a porch-light meter. The empty column is gone.
- The alt text now describes the real photos (dist/index.html img[data-slot]).
- The hero proof line is one line in ink, with the price in gold (1440-first.jpg).
- The area frame holds a photo (1440-full.jpg #area).
- The price tool highlights the matching table row (390-rm-full.jpg).

## First screen: 8.5
- Earned: the clock is in the hero, so the signature shows on the first screen. One filled primary plus a quieter phone button, the phone in the header, one proof line, and the next band peeks about 80px (1440-first.jpg). On 390-first.jpg the h1 is 2 lines and both actions sit above the fold.
- 1440-first.jpg: the h1 ("Swarmers at the light? Know if they're inside.") has no trade or city; both live in the mono eyebrow. That keeps it off the 9 anchor.
- 1440-first.jpg: the eye goes first to a black-and-white ONE WAY street sign in the centre of the photo, and a flat vector lamppost is pasted in front of a real parking sign. The composition's focal point is street furniture, not a house at dusk (scored under Photo, not deducted twice).

## Distinctiveness: 9
- Earned: the dusk clock is the spine. The margin clock reads 8:26 (1440-scroll-25.jpg), 8:49 (1440-scroll-50.jpg) and 9:19 (1440-scroll-75.jpg). Every section and review has a time stamp, and the footer reads "9:30 pm. Porch light back on." The new gable-clipped photos make the story frames read as the house types themselves. Nothing in pest-A or pest-B shares this.
- The mono tracked eyebrows remain ("FORMOSAN TERMITE SWARMS · NEW ORLEANS" in 1440-first.jpg, "SAMPLE REVIEWS, NEW ORLEANS" in 1440-scroll-75.jpg). Not deducted again.

## Typography: 8.5
- Earned: the "The street goes dark…" display break (1440-full.jpg), the Garamond italic reviews with italic time stamps (1440-scroll-75.jpg), curly quotes and en-dash ranges.
- 1440-scroll-25.jpg: the house-card descriptions ("A two-story rear addition on a raised frame…") are still muted grey Karla at about 16px on #0F1219, and the service descriptions in 1440-scroll-50.jpg are the same mid-grey. They read a step too faint (−0.5).

## Layout: 9
- Earned: the story column problem is solved. The left column holds the heading, the morphing house drawing, the big clock and a CTA for the whole story (1440-scroll-25.jpg). The scroll has a visible tone shape: deep hero, slate helper, deep story, full-bleed break, services list, paper prices, deep reviews, gold guarantee band, slate area, form (1440-full.jpg).
- Not yet 10: 1440-full.jpg #story has about 200px of dead band under each card. The lights-out section's left column ends at mid-height and leaves a blank lower-left quadrant (1440-full.jpg, at about 1.3 screens).

## Photo: 7.5 (mustFix)
- Earned: real, on-topic, region-right frames (shotgun row, raised cottage behind an iron fence, attic, mud tube, termite galleries). They are graded into one indigo/streetlamp duotone, which reads as one shoot, and the gable clips make the frames part of the signature (1440-rm-full.jpg #story). On the 9 anchor before deductions.
- 1440-first.jpg: a readable ONE WAY sign sits dead centre of the hero, with a second readable street sign beside it and a parking sign behind the lamp. RUBRIC §3.5 counts a readable sign as −1.5 and a mustFix.
- 1440-first.jpg: the CSS lamppost is a flat vector shape standing on a real photo. It reads as a sticker, not a light in the scene. Folded into the deduction above.
- An empty gable frame shows in each 1440 full-page capture: Shotgun in 1440-full.jpg, Camelback in 1440-rm-full.jpg. It is scored under A11y and Polish, not here.

## Copy: 9
- Local and process-honest: "Each visit ends with what was applied and where. You keep the product label." (1440-scroll-50.jpg), and "Your number comes after someone has been under the house." (390-rm-full.jpg). The guarantee band matches facts.json word for word. Every review, the rating and the prices are labelled Sample. The service actions are named for what they do.

## Mobile: 9
- 390-first.jpg is composed, not collapsed. In 390-rm-full.jpg each house card gets its own small line drawing above the time stamp, which is a phone-specific decision, and all four gable photos load. The price table and tool stack cleanly. Overflow is clean at 320 and 390 (render.json).

## Accessibility: 7.5 (mustFix)
- Earned: the round-2 alt/caption mismatch is fixed. The alt text now describes the photographs on screen (dist/index.html img[data-slot]), and the break image is alt="". One h1, ordered headings, every word present with reduced motion.
- 1440-rm-full.jpg #story: the Camelback frame renders as an empty gradient gable under the caption "Attic rafters under the ridge". The attic photo is hidden with reduced motion. RUBRIC §2.8 makes that a mustFix (−1.5). The same JS state leaves Shotgun empty in 1440-full.jpg. These images are eager (fetchpriority="high"), so this is not lazy-loading. The story script is hiding the frames.

## Motion: 8.5
- Earned: motion now explains something. As the cards advance, the sticky house drawing morphs (shotgun in 1440-full.jpg, camelback in 1440-scroll-25.jpg), the large clock hand moves (8:05 to 8:20) and the porch-light meter drops. The margin clock advances across 1440-scroll-25/50/75.jpg.
- 1440-full.jpg: the frame-swap logic leaves the first gable empty while its card is in view, so the story visibly drops a photo (−0.5).

## Wow: 9
- The pinned "where they get in" stage is tied to the thesis and the trade: drawing, clock and photo change house by house. The lights-out helper is a checklist with an answer (1440-full.jpg). The price tool now lights its row in the table (390-rm-full.jpg). It's not a 10, because the tool's output is still set as a sentence and not in the clock/lamp language.

## Polish: 8.5
- Favicon, OG, print and forced-colors are present, the radii are consistent, and the footer lands the 9:30 close (1440-full.jpg).
- An empty gable frame shows in both 1440 full-page captures. The vector lamppost is pasted over the hero photo (1440-first.jpg).

## Arithmetic
14×8.5 + 12×9 + 10×8.5 + 10×9 + 8×7.5 + 8×9 + 7×9 + 7×7.5 + 12×8.5 + 8×9 + 4×8.5
= 119 + 108 + 85 + 90 + 60 + 72 + 63 + 52.5 + 102 + 72 + 34 = 857.5 / 100 = **8.57** (8.575, score.mjs rounds down)

## Must
1. **Photo, hero** (1440-first.jpg, 390-first.jpg; img[data-slot="hero"]): a readable ONE WAY sign, a second street sign and a parking sign sit in the hero frame, and the sign is the focal point. Fix: re-crop with object-position so the porch and columns fill the frame and the sign pole falls outside it (e.g. object-position: 20% 60% at 1440, or a tighter crop on the porch). If no crop clears it, use a different approved house frame. Then remove the vector lamppost, or put it where no real sign sits behind it.
2. **A11y, story frames** (1440-rm-full.jpg #story Camelback; 1440-full.jpg #story Shotgun): a gable photo renders empty depending on the story's JS state, including with reduced motion. Fix: under `prefers-reduced-motion: reduce`, and as the default before JS runs, every `[data-slot^="story-"] img` must be opacity 1 with no transform. With motion on, start the active frame visible and only fade non-active frames between cards. Never leave a frame without its image when its card is in view.

## Should
- **#story card and service descriptions** (1440-scroll-25.jpg, 1440-scroll-50.jpg): the muted grey reads faint on deep indigo. Raise the description colour to about #C2BCB0 (≥ 7:1 on #0F1219) at 17px.
- **#story spacing** (1440-full.jpg): about 200px of dead band under each card. Cut the gap between cards to about 120px so the column on the right keeps pace with the sticky stage.
- **Lights-out section** (1440-full.jpg, first slate band): the lower-left quadrant is empty under the tabs. Vertically centre the left block against the helper card, or move the swarm-calendar month strip up there so the tab content fills that space.
- **Hero h1** (1440-first.jpg): the trade and the city are only in the mono eyebrow. Consider "Formosan swarmers at the light? Know if they're inside.", or put "New Orleans" into the sub's first clause, so the h1 alone answers "what" for the 9 anchor.
- **Mono eyebrows** (1440-first.jpg, 1440-scroll-75.jpg): two tracked-caps DM Mono eyebrows remain. Replace them with the italic time-stamp style the rest of the page uses for labels.

## Elevate
- **Photo:** make the photography do the dusk. Shoot-match every frame to the same evening by grading the sky in each to the clock's minute: 7:40 frames warm, 9:20 frames deep indigo. The light then visibly falls across the story's four gables as the clock advances, so the grade carries the thesis and isn't a single filter. Start from a hero frame that is the house and porch light, with no street furniture.
- **A11y:** make the static story a designed state, not a fallback. With reduced motion or no JS, render the four houses as a still "evening contact sheet": every gable photo visible, each with its drawing, time stamp and the three check points. Then nothing in the story depends on scroll position, and the reduced-motion page reads as complete as the animated one.
