COPY: ok

# electrician-C, round 4 critique (final round)

**Five-second answer** (1440-first.jpg, 390-first.jpg): "An electrician who rewires old Kansas City bungalows one room at a time, through small cuts in the plaster. I tap 'Price my rewire' or call (816) 555-0112. Why them: they only work on 1910s–1930s houses and patch the cuts before they leave." Clear on both sizes.

What changed since round 3: both mustFix items are fixed. Erica N. now shows 4 filled stars and 1 empty (1440-scroll-75.jpg). #services is now a drawn house section: the attic sits in the roof, the rooms are cells, the garage is a dashed outbuilding and the basement is a full-width slab (1440-scroll-25.jpg, 1440-full.jpg). Reviews are now a pinned-letter spread with no orphan card. Several Should items also landed: the hero now shows the ledger below the fold, the rating line reads correctly, the decoder label is clear, the break-band wire no longer strikes through the text, and the eyebrow was dropped on three sections. I don't re-list any of those.

## First screen: 9.5
Earned: the h1 is 6 words on 2 lines and names the trade, the city and the outcome. There is one loud action and one quieter outlined call button, and the phone is in the header. The proof line carries open-now, the areas and a Sample rating. The arch and the "01 FRONT ROOM" marker put the signature on the first screen. The dark ledger and "Before anyone opens a wall" now show about 90px above the fold (1440-first.jpg). At 390 the h1 is on 4 lines, both actions are above the fold and the sticky Call/Price bar is present (390-first.jpg). No deduction.

## Distinctiveness: 9.5
The services grid has become the signature: a house cross-section whose rooms hold the cards, with the garage dashed off to the side and joined by a run to the basement (1440-full.jpg). The arch appears in the hero, the attic decoder and the porch band. The room markers 01–09 run through to the footer index. No other site in the library looks like this, and no contractor template either.

## Typography: 9.0
Cormorant, Karla and JetBrains Mono, with body text at full ink and 16px or more. The rating line now reads "Rated 5 out of 5 by 96 neighbors" (1440-scroll-75.jpg).
- 1440-full.jpg: the mono caps labels are still dense. Four of them sit in the ledger, the attic and joist labels sit in the decoder, the decoder caption is set in mono, and the EV slider stops are mono too. The mono is starting to stand in for body text (−0.5 from 9.5).

## Layout and rhythm: 9.0
The tones alternate cleanly and no dark bands touch. The section shapes change all the way down: ledger, sticky story, house section, full-bleed break, decoder, tabs, brick planner, letter spread, area, form.
- 1440-full.jpg #story (f1 region): in the captured state the diagram ends near step 01, and the right column is empty for about 900px beside steps 02–04.
- 1440-full.jpg #area: the left column is empty for about 350px under the town list while the porch drawing runs on (−0.5 combined).

## Photo (drawn treatments): 8.5
1440-first.jpg (the lamp-lit room), 1440-scroll-50.jpg (the attic) and the porch in 1440-full.jpg share one warm palette inside the arch. Nothing is blank or broken. Not a 9: these are flat vector vignettes with no shared light source and no sequence that runs from the problem to the finished room.

## Copy: 9.0
The voice is the best in the niche: "Wired for iceboxes and radios.", "Two-hole outlets have three honest fixes.", "Read us your ticks when you call." The new microcopy lands: "Print this and keep it by the panel. We start from it on the first visit." Every price and review carries its Sample tag. The family-owned line and "31 years" match facts.json.
- 1440-full.jpg #services: the fix for action drift overshot. All nine cards now say "Price my rewire", including Lighting and ceiling fans, Electrical inspections and the EV charger, where nothing is being rewired (−0.5).

## Mobile: 9.0
390-first.jpg is clean. In 390-full.jpg the wall diagram is redrawn vertically with the cable visible, the house section collapses into a roofed column, the reviews stack with the 4-star card correct, and the area list is 2 columns. render.json shows no overflow at 390 or 320.
- 390-full.jpg #services: nine full-height cards make a scroll of about 2,700px with nothing to break it up (−0.5).

## Accessibility: 9.0
1440-rm-full.jpg and 390-rm-full.jpg show every word. The inactive story steps are now legible in mid ink (1440-full.jpg). The skip link, focus ring, sr-only stars and forced-colors block are all still present.
- 1440-full.jpg #story diagram: the "TESTED · BEDROOM" tag is pale text on tan, well under 4.5:1 (−0.5).

## Motion: 8.5
The hooks are present in dist (split lines, story step focus, header room marker, tabs, slider-driven EV drawing, stagger reveals), and the reveals resolve.
- The 25/50/75 frames (1440-scroll-25.jpg, -50, -75) still show no motion that explains anything beyond the step focus. The house section, the attic arch and the porch drawing are all static, and nothing travels between rooms. This is unchanged from round 3.

## Wow: 9.5
There are now three things a homeowner would keep. The house-section service index lets you find your room and price the job (1440-scroll-25.jpg). The attic decoder pairs a checklist with a meter (1440-scroll-50.jpg). The EV run planner offers "Print this plan" (1440-full.jpg). All three tie back to the bungalow thesis.

## Polish: 9.0
The radius, stroke weight and footer close are consistent. The letter spread has a believable tilt and shadow (1440-scroll-75.jpg).
- 1440-full.jpg ledger and footer: the hours still read "08:00–17:00" (24h) beside "opens tomorrow 8 am" (−0.5).
- 1440-full.jpg #story: the "TESTED · BEDROOM" tag sits on top of the dashed stud line.

## Arithmetic
14×9.5 + 12×9.5 + 10×9 + 10×9 + 8×8.5 + 8×9 + 7×9 + 7×9 + 12×8.5 + 8×9.5 + 4×9
= 133 + 114 + 90 + 90 + 68 + 72 + 63 + 63 + 102 + 76 + 36 = 907 / 100 = **9.07**

No mustFix is open. Weighted 9.07 < 9.5, and motion and photo are under the floor.

## Must
None.

## Should
1. **Hours format** (1440-full.jpg ledger `Office hours` and footer `Office hours`): write the hours as "8 am – 5 pm" for Mon–Thu and "8 am – 4 pm" for Fri, to match the open-now line.
2. **Service card actions** (1440-full.jpg #services): keep "Price my rewire" on Knob-and-tube, Room-by-room, Panel and Kitchen. Use "Price this job" on Lighting, Push-button and Two-prong. Use "Book an inspection" on Electrical inspections and "Plan my charger" on EV.
3. **Story diagram tag** (1440-full.jpg #story "TESTED · BEDROOM"): use full ink text on the tan tag, or invert it to paper text on brick, so it reaches 4.5:1. Nudge it 12px right so it clears the dashed stud line.
4. **Story right column** (1440-full.jpg #story): put the final-state caption or a small "panel label" card at the bottom of the sticky column, so the static and reduced-motion layouts don't leave a 900px void beside steps 02–04.
5. **Area left column** (1440-full.jpg #area): move the ZIP checker under the town list in the left column and let the porch arch take the full right column height.
6. **Mobile services** (390-full.jpg #services): at <640px, show the roof cell (Knob-and-tube) plus 3 cards, and put the other 5 behind a "Show every room (5 more)" disclosure, or use a 2-up compact card without the blurb.
7. **Mono density** (1440-full.jpg): set the decoder caption and the EV slider stop labels in Karla 14px. Keep mono for the drawing labels and markers only.

## Elevate
- **Motion (8.5):** make the signature move once, with meaning. As #services enters, draw the house-section outline with DrawSVG (roof, then walls, then the garage run). Then light each room cell in turn with the same brass "current" line that later runs from the panel to the charger in #ev, so a single wire visibly travels room to room through the page. The end state is static, so reduced motion keeps it intact.
- **Photo / drawn treatments (8.5):** give the vignettes one light source and a sequence. The hero room at dusk, the attic lit by a work lamp, the porch at night with the switched porch light on: one lamp motif and one grade, with the hero lamp echoed in each. Then the illustrations read as one house over one evening, not three separate clip-art scenes.
