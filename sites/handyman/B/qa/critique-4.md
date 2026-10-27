COPY: ok

# handyman-B: critique, round 4 (fast mode, final round)

Checks: static.json and render.json are clean (0 blockers, 0 warnings, no overflow at 320/390, no console errors). All three round-3 mustFix items are fixed in the screenshots. Fixed items are not listed again.

## Five-second test
- **1440-first.jpg**: "A handyman in Ann Arbor. I tap the tool tags and the hours add up. Two jobs are already picked, and the tally reads 2.5–4.5 H, half-day. Then I text photos for a firm number. Build my list, or call (734) 555-0126. Open now until 5:30. 4.8 from 212 reviews (Sample rating)." This is answered in under 3 seconds, and the hero now *shows* the tally working instead of describing it.
- **390-first.jpg**: the 3-line h1, both CTAs, open state, rating with Sample pill, the first row of tool tiles and the dashed tally all sit above the sticky Call / Build bar. It passes.

## Scroll notes
- Hero (deep teal, peg grid): TV mount and drywall tiles are picked (gold outline, the level ghosted off its peg). Every tag is now whole at 1440 and 1024 (1440-first.jpg, 1024-first.jpg). The proof line is split into an open-state item and a rating group, with no orphan.
- Info rail (paper): open state, the towns, text photos.
- Builder (gold, 1440-rm-full.jpg): the tray is pre-filled (TV and wall mounting, Drywall repair, 2.5–4.5 H HALF-DAY), so the receipt is no longer blank on sight.
- Triage (paper), then the story (deep, pinned, 1440-scroll-25.jpg): the steps now sit on the 124px edge and the inactive text is readable.
- Services (paper, 1440-scroll-50.jpg): the rules and icons start at 124px, and the "Price it" links line up per row.
- Sketch wall (brown), reviews (paper, 1440-scroll-75.jpg): the cards sit inside the container.
- Photo-to-quote (deep), area (paper), contact (gold), footer (deep). The tone alternation still holds.

---

## First screen: 9.0
**Earned:** 1440-first.jpg puts a 6-word h1 next to a live tally box ("2.5–4.5 H · Half-day · 2 jobs on your list · See the tray"), with picked tiles that prove the claim. There is one primary action plus the phone, and the info rail peeks in. 1024-first.jpg shows every tag whole. 390-first.jpg composes well.
**Deductions:**
- 390-first.jpg: the phone tiles show only the hours ("1.5-2.5 H", "1-2 H") with no job name, so a homeowner sees numbers without knowing what they price (−0.5, offset by the hero now proving the thesis).

## Distinctiveness: 9.0
**Earned:** the pegboard, hang-tag and tray system runs from the hero through the builder, story, services pegs, sketch wall and footer (1440-rm-full.jpg). The teal, safety-gold and brown palette and the condensed caps share nothing with siblings A and C. The mono eyebrows are now cut down to the bands where they add information (builder, triage answer, photo-to-quote, area), which removes the template rhythm.
**Deductions:** none beyond what the anchors already reflect.

## Typography: 9.0
**Earned:** Big Shoulders display at scale and Outfit body, with the proof line in plain Outfit and no orphan (1440-first.jpg). Review cards drop the extra mono captions: the service line is now Outfit grey with a single Sample pill (1440-scroll-75.jpg).
**Deductions:**
- 1440-scroll-50.jpg: the rotated mono hour pills ("1-2 H PER ITEM") are still small, tracked and tilted. That is acceptable, but it is the one place the type gets fussy (no points).

## Layout and rhythm: 9.0
**Earned:** one content edge at 124px for the story (1440-scroll-25.jpg), services (1440-scroll-50.jpg), reviews (1440-scroll-75.jpg) and photo-to-quote (1440-rm-full.jpg). The section shapes vary (split, mosaic, pinned story, ruled list, scattered polaroids, taped cards, viewfinder), and the builder no longer leaves a dead gold block.
**Deductions:**
- 1440-scroll-25.jpg: the story visual still floats as a tool row over a thin dashed bar with ~150px of empty teal above the heading. The right column feels underweight next to the 4-step grid (−0.5, offset by the fixes).

## Photo and video: 8.5
**Earned:** the drawn polaroid sketches on the brown pegboard (1440-rm-full.jpg) are consistent in line weight and palette, pinned, rotated and captioned with useful lines. Nothing is broken or blank, and the footer honestly says the drawings stand in for job photos.
**Deductions:** the sketches still sit in identical pale inset boxes and read as thumbnails. This is placeholder stock territory, so there is no mustFix.

## Copy: 9.0
**Earned:** "Tap a tag and its tool comes off the wall. Your hours add up as you go, then text us photos for a firm number." (1440-first.jpg) The site keeps its plain trade voice throughout. Reviews are specific and Sample-labelled (1440-scroll-75.jpg), the hours carry a "Sample hours" pill (1440-scroll-50.jpg), and nothing outside facts.json was found.
**Deductions:** none worth points.

## Mobile: 8.5
**Earned:** 390-first.jpg has a strong fold and a sticky bar. 390-rm-full.jpg shows cards and service rows with a gutter now, the builder stacking into a list with the tray under it, and a single-column form. No overflow at 320/390 (render.json).
**Deductions:**
- 390-first.jpg: the hero tags have no job names (counted in firstScreen, noted here for the phone).
- 390-rm-full.jpg: the triage chips and the services list make a long middle stretch. The page runs ~14,600px at 390, with services as eight full-height rows (−0.5).

## Accessibility: 9.0
**Earned:** 1440-rm-full.jpg and 390-rm-full.jpg show every word with reduced motion. The inactive story paragraphs in 1440-scroll-25.jpg now read as light sage on teal, well above 4.5:1, and the dimmer step titles are large display text. Sample pills are visible, and the controls are 48px.
**Deductions:** none visible.

## Motion and interaction: 9.0
**Earned:** the hero tiles are interactive, with a picked state that lifts the tool off its peg (ghost left behind, 1440-first.jpg) and a running tally. There is a pinned, scrubbed story (the motion-on full page is ~2,000px taller than reduced motion), plus the builder, triage, photo tabs and stepped form, all tied to the thesis.
**Deductions:**
- 1440-scroll-25.jpg: the story frame still shows "0 OF 4 IN THE TRAY" with the tools above an empty bar. The start state is legitimate, but the first frame a visitor stops on is the empty one (−0.5, offset by the hero interaction).

## Wow moment: 9.0
**Earned:** the hero now *is* the tool. Picked tags, a ghosted peg and a live "2.5–4.5 H half-day" tally sit on the first screen (1440-first.jpg). The builder receipt is pre-filled (1440-rm-full.jpg). A contractor gets the idea without scrolling, and nobody in Ann Arbor has this.
**Deductions:** the brown sketch wall is still the second peak, and it remains static.

## Polish: 8.5
- 390-first.jpg: the nameless hour tags on mobile.
- 1440-scroll-25.jpg: the empty dashed tray bar in the story start frame reads as unloaded.
- 1440-first.jpg: below the mosaic there is ~100px of dead hero before the rail, with the mosaic ending at 716 and the hero at 828. This is minor.
- Credit: the tags are whole, the proof line is clean, "Price it" is aligned, and the gutters are fixed.

---

## Arithmetic
14×9.0 + 12×9.0 + 10×9.0 + 10×9.0 + 8×8.5 + 8×9.0 + 7×8.5 + 7×9.0 + 12×9.0 + 8×9.0 + 4×8.5
= 126 + 108 + 90 + 90 + 68 + 72 + 59.5 + 63 + 108 + 72 + 34 = **890.5 / 100 = 8.91** (8.905)

The weighted score is below the fast pass line of 9.0, and every category is ≥ 8.5. mustFix is empty and the checks are clean. This is the final round, so the "after the last round" rule (≥ 8.8, no blockers, no mustFix) applies.

## Must
None.

## Should
1. **Hero tiles on phone**, 390-first.jpg `.tile__tag`: restore the job name on the tag ("TV MOUNT / 1.5-2.5 H") on two lines at <640px. Do not drop it to hours only.
2. **Story tray**, 1440-scroll-25.jpg #how: start the scrub with 1 tool already in the tray ("1 OF 4"), or show the tally text inside the dashed bar ("Nothing yet, scroll to load the truck"), so the first stopped frame isn't an empty box.
3. **Story right column**, 1440-scroll-25.jpg: align the tool row and tray to the h2's top (align-self: start, margin-top 0) to remove the empty teal above it.
4. **Services on phone**, 390-rm-full.jpg #services: collapse the description to one line and put the hour pill inline with the title at <640px, cutting each row by about 40%.
5. **Hero bottom**, 1440-first.jpg: reduce the hero bottom padding so the rail sits ~48px under the mosaic, not ~110px.

## Elevate
- **photo (8.5, weight 8)**: turn the sketch wall into a work-in-progress board. Each polaroid shows the same detail in two stages, drawn and inked, and the inked one is revealed as the hang-tag swings. The drawings then read as a crafted series instead of thumbnails in grey frames.
- **mobile (8.5, weight 7)**: make the phone page a pocket punch list. The hero tiles, the builder and the sticky bar become one thing: the sticky bar shows the running "2.5–4.5 H" tally and opens the tray as a bottom sheet. The phone experience then becomes the product, not a stacked desktop.
