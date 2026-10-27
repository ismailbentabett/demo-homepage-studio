COPY: needs copy-chief

# Critique: flooring-B, round 4 (final, fast mode)

This is the first round scored from actual screenshots. Round 3 was scored from the DOM alone, so several 9s from it don't hold up now that the page has been seen. Scores move because of evidence, not because the work regressed.

## Five-second test
1440-first.jpg: "Twelve Mil, a flooring company in Atlanta. They show you the wear layer and spec before you pick. I can compare floors right here or call (404) 555-0150." The message is clear. The hero is crowded, though: a tool, four chips, a result chip and three buttons all compete. 390-first.jpg: the same answer in 2 h1 lines, with both actions above the fold.

## First screen: 8.5
Earned: a 6-word h1, a primary button with a quieter Call button, the phone in the header, and the signature (sample chips) visible at 0%.
Deductions: at 1440 the hero runs past 900px, so the proof bar does not peek (−0.5, 1440-first.jpg). Atlanta appears only in the mono kicker. There is no proof line under the h1. LVP / BEST FIT appears twice in one view (selected chip + result chip), plus a third button, "See samples at your house".

## Distinctiveness: 8.5
Earned: the chip system shows up in the hero, services, story, reviews (cut corners), estimator strip and footer (1440-rm-full.jpg). The drawn plank cutaway, RH probe and route map are not stock template parts.
Deductions: mono micro-labels appear in every band (a slop tell, −0.5). The palette sits close to sibling A's cream + rust (flooring/A 1440-first.jpg).

## Typography: 8.5
Earned: Archivo display is tight and heavy, Karla body is comfortable, and DM Mono as the spec voice suits the concept.
Deductions: 4 tracked caps labels in one hero view (1440-first.jpg, −0.5). The centred mono sentences in the story (1440-scroll-50.jpg) read like code output.

## Layout and rhythm: 8.5
Earned: the tones alternate cleanly (1440-rm-full.jpg), the plank cutaway works as a full-bleed break, and the slab section is asymmetric.
Deductions: two long uniform grids, with 10 near-identical service chips and 6 identical review cards (−0.5). The story is a narrow centred column in a large dark field (1440-scroll-25.jpg). The contact form is a narrow centred column with empty flanks at 1440.

## Photo (drawn treatments): 8.5
There are no raster photos. The plank cutaway, probe drawing and route sketch are on-topic, share one palette and look like one hand (1440-rm-full.jpg). Nothing is blank. A stray triangle artefact sits bottom-left of the plank band. None of the drawings is tied to scroll.

## Copy: 8.5
Earned: concrete trade nouns (wear layer, SPC core, RH probe, membrane), Sample labels on every review and price, and reviews that tell real stories.
Deductions: the primary action has several names: Compare floors / See best fit / See samples at your house / Price it / Get a number (−0.5, 1440-first.jpg, 1440-scroll-25.jpg, 1440-rm-full.jpg). An arrow sits on every card link.

## Mobile: 9
390-first.jpg: the h1 is 2 lines, both actions are above the fold, and the sticky Call/Compare bar is in place. 390-rm-full.jpg: the story is stacked, not pinned, and the plank legend is re-stacked for the phone. No overflow at 320/390 (render.json). The service run is long on the phone.

## Accessibility: 8.0 (capped by mustFix)
Reduced-motion shots are complete, inputs have labels, and live regions are present.
mustFix: muted grey text fails contrast on paper/light bands (about 3.5–3.8:1, 1440-scroll-25.jpg). The footer is t-deep in the markup but paints light bone, so its text sits near 2:1 (1440-rm-full.jpg).

## Motion: 8.5
Hooks: the live compare result chip, the pinned cross-section story, the estimator chip strip that fills with the slider, and staggered chip entrances.
Deductions: across the 25%→50% frames the story's "peel" barely visibly changes, so the motion idea doesn't explain the mil number yet (−0.5). In 1440-full.jpg everything after the story is unrevealed, but this is a capture artefact; the scroll frames show the reveals firing.

## Wow: 9
The compare tool's answer (kitchen + pets + slab → LVP, 12 mil, SPC core, with a plain reason) is designed as a chip in the signature language (1440-first.jpg). It's backed by the slab checklist with the probe drawing and a printable chip-strip estimator.

## Polish: 8.5
The footer looks washed out and undesigned (1440-rm-full.jpg). Pill badges and tags sit next to square chips. There is a stray triangle under the plank band.

## Arithmetic
14×8.5 + 12×8.5 + 10×8.5 + 10×8.5 + 8×8.5 + 8×8.5 + 7×9 + 7×8 + 12×8.5 + 8×9 + 4×8.5
= 119 + 102 + 85 + 85 + 68 + 68 + 63 + 56 + 102 + 72 + 34 = 854 / 100 = **8.54**

## Must
1. #services card text and the contact lead (1440-scroll-25.jpg, 1440-rm-full.jpg): --muted #8C7B6E on #FAF8F5/#F4EFE6 is about 3.5–3.8:1. Set --muted in .t-paper and .t-light to #6B5C50 or darker.
2. Footer (1440-rm-full.jpg): the t-deep class doesn't paint, so the light-on-light text sits near 2:1. Add `.footer { background: var(--bg); color: var(--ink); }`, or move it to t-mid with --muted #5C4F44.

## Should
- Hero (1440-first.jpg): cut "See samples at your house" from the hero. Show the result in one place only. Bring the hero under 900px so the proof bar peeks. Add a proof line under the h1 (hours + Sample rating).
- Copy: pick one name for the primary action (e.g. "Compare floors"). Replace the card links "Price it →" with plain "Price this floor" and no arrow.
- Story (#story, 1440-scroll-25/50.jpg): make the layers physically separate as you scroll, each label drawing in beside its layer. Set the three lines in Karla, not centred mono.
- Services (1440-scroll-25.jpg): vary the 10 chips with a second featured chip at a different width, or group them into "Floors" vs "Prep & repair".
- Plank band (1440-rm-full.jpg): remove the stray triangle at the bottom-left corner.
- Hero labels: drop the tracked caps on ROOM TYPE / PETS? / UNDER THE FLOOR and set them in sentence case.

## Elevate
- **a11y**: make the footer the deep close of the sample board. Paint it #3B2218, set the TM chip, licence and nav as one spec strip, and check every muted tone at 4.5:1 on its own band.
- **firstScreen**: split the hero into one statement and one tool. Put Atlanta in the h1 with a proof line under it, and make the chip stack's result chip the compare output, so BEST FIT appears once and the proof band peeks at 1440.

Verdict expected: NEEDS_HUMAN (final round, mustFix not empty, 8.54 < 8.8 delivery line).
