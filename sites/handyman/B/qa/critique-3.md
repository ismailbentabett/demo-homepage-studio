COPY: ok

# handyman-B: critique, round 3 (fast mode)

This is the first round with real screenshots. Rounds 1 and 2 were scored from the DOM alone, so several scores move down now that the render can be seen. Checks: static.json and render.json are clean (0 blockers, 0 warnings, no overflow at 320/390).

## Five-second test
- **1440-first.jpg**: "A handyman in Ann Arbor. I tick the jobs on my list, I see how many hours each takes, then I text photos for a firm number. Build my list, or call (734) 555-0126. 4.8 from 212 reviews (Sample)." Answered in about 3 seconds. The pegboard of tools with hour tags makes the offer clear before you read anything.
- **390-first.jpg**: the h1 runs 3 lines, both buttons and the proof line sit above the fold, the first row of tool tiles peeks in, and the sticky Call / Build bar is present. It passes.

## Scroll notes (1440-full.jpg, 1440-rm-full.jpg, 25/50/75 frames)
- Hero (deep teal, peg-dot grid): tool outlines hanging on pegs with gold hang-tags. The signature is present.
- Info rail (paper): open state, the towns, text photos.
- Punch-list builder (gold): 8 pegboard rows with tool icons, hour tags and checkboxes, plus a "Your tray" receipt card. The signature is present and it is the wow.
- Fix-or-specialist (paper): symptom chips and a dashed answer box.
- How a visit runs (deep, pinned): 4 steps with the active one lit and a row of tools above a dashed tray bar (1440-scroll-25.jpg).
- Eight jobs (paper): a two-column ruled list with icons and hour tags (1440-scroll-50.jpg).
- Small jobs, square edges (brown, pegboard): pinned polaroid sketches with hang-tag captions. This is the strongest visual band.
- Neighbors (paper): taped review cards with Sample labels (1440-scroll-75.jpg).
- Photo-to-quote (deep): 4 shot tabs and a viewfinder card.
- Area and hours (paper): town pills, an hours table and a gold ZIP card.
- Contact (gold): a stepped form. Footer (deep): hammer outline, links, disclaimer.

Tones alternate well (deep, paper, gold, paper, deep, paper, brown, paper, deep, paper, gold, deep) and no two adjacent bands share a tone.

---

## First screen: 8.0 (capped by mustFix)
**Earned:** a 6-word h1 in heavy condensed caps, trade plus city in the kicker, one primary action plus the phone, a Sample rating, and the next band peeking (1440-first.jpg). The tool-tag mosaic *is* the product. 390-first.jpg composes well.
**Deductions:**
- 1440-first.jpg and 1024-first.jpg: the hang-tags are clipped by their tiles. "TV MOUNT 1.5-2.5 H" and "RE-CAULK 1.5-2.5 H" lose the "H" at 1440, and at 1024 they read "TV MOUNT 1.5-" and "RE-CAULK 1.5-". The hours are the whole promise of the h1, and they are cut off in the hero (mustFix, −0.5).
- 1440-first.jpg: the proof line is a middle-dot meta string in mono that wraps and orphans "reviews" onto a second line ahead of the Sample pill (−0.5).
- 1440-first.jpg: the level icon in the tall left tile floats at mid-height while every other tool hangs from its peg, so the "hung on a peg" logic breaks on the first tile (included above).

## Distinctiveness: 8.5
**Earned:** the pegboard and hang-tag system is real and runs through the hero, the builder, the story, the sketch wall and the footer (1440-rm-full.jpg). Teal, safety gold and a brown pegboard band are their own palette. Siblings A (paper timeline, red ink) and C (dark brown, slab serif, house elevation) share no face, hero or palette with this site (A/C 1440-first.jpg). The contractor could not swap logos with either sibling.
**Deductions:**
- 1440-rm-full.jpg: every one of the 10 sections opens with the same "○ MONO EYEBROW" label over a condensed caps h2. That is the template tell, and it flattens the sections into one rhythm (−0.5).
- 1440-scroll-25.jpg: "01/02/03/04" numbering used as decoration on the story steps (−0 here, already counted in type).

## Typography: 8.5
**Earned:** Big Shoulders at display size is loud and on-niche, Outfit body is readable, tabular hours line up in the table (1440-rm-full.jpg, area band).
**Deductions:**
- 1440-scroll-75.jpg and 1440-rm-full.jpg: DM Mono does too many jobs. It sets the eyebrows, the tags, the review service lines, the Sample pills, the rating line and the hours. On the reviews view there are 3+ tiny tracked mono captions per card ("FURNITURE ASSEMBLY", "SAMPLE REVIEW", plus the eyebrow) (−0.5).
- 1440-first.jpg: the proof line wraps an orphan, and on the area band (1440-rm-full.jpg) the town pills butt directly under the paragraph with no space (−0.5 across both, with polish).

## Layout and rhythm: 8.0 (capped by mustFix)
**Earned:** clean tone alternation, varied section shapes (split, pinned story, ruled list, scattered polaroids, taped cards, viewfinder), and a confident brown sketch wall.
**Deductions:**
- 1440-scroll-50.jpg: the services list's left column starts at x=0 (rule, peg dot and tape icon touch the viewport edge) while the heading sits at x=124 and the right column stops at 1320. 1440-scroll-75.jpg: the left review cards also start at x=0. 390-rm-full.jpg: the same cards and service icons touch the screen edge with no gutter. This is a broken container, not a bleed (mustFix, −0.5).
- 1440-scroll-25.jpg vs 1440-rm-full.jpg: four different left edges (124 for most bands, 64 for the story, 244 for photo-to-quote, 0 for services and reviews). The page has no single grid (−0.5).
- 1440-scroll-25.jpg and 390-rm-full.jpg: the story's dashed "tray" bar is empty, so it reads as an unloaded placeholder (−0.5, also counted in wow).
- 1440-rm-full.jpg: the builder's tool grid ends ~180px above the tray card, leaving a dead gold block under the list (folded into the above).

## Photo and video: 8.5
**Earned:** the stock photos are placeholders, so the site carries itself on drawn treatments. The polaroid sketches on the brown pegboard (1440-rm-full.jpg) share one line weight and a cream, teal and gold palette. They are pinned and slightly rotated, with hang-tag captions that say something ("Feathered flush, no halo"). The footer honestly says "Drawings stand in for job photos". Nothing is broken or blank.
**Deductions:**
- 1440-rm-full.jpg: the sketches sit in identical pale-grey inset boxes inside each polaroid, so they read as thumbnails in frames. Nothing is broken, and per the brief no photo mustFix applies.

## Copy: 9.0
**Earned:** a plain contractor voice ("Small jobs, square edges", "Where the truck goes", "Send the list, get a time"). Buttons say what they do. Reviews are specific and sourced from facts.json. Rating, hours, pricing and reviews all carry Sample labels (1440-scroll-75.jpg, 1440-rm-full.jpg). Doubt is handled at the decision point ("Final number after photos or a walk-through"). No invented claims found against facts.json.
**Deductions:** none worth points. One nit: "Pick a job" as the empty VISIT value reads like a button.

## Mobile: 8.5
**Earned:** 390-first.jpg is a good fold. The sticky Call / Build bar is there, the builder stacks into a single readable list with the tray under it, and the form is a single column with 48px controls. No overflow at 320/390 (render.json).
**Deductions:**
- 390-rm-full.jpg: review cards and service-row icons touch the left screen edge (same root cause as the layout mustFix; not double-counted beyond −0.5 here).
- 390-rm-full.jpg: the six triage chips stack nearly one per row, about 300px of chips before the answer box. The answer appears off-screen when a chip is tapped low in the stack.

## Accessibility: 8.0 (capped by mustFix)
**Earned:** 1440-rm-full.jpg and 390-rm-full.jpg show every word with reduced motion: sketches, reviews and steps are all visible. Labelled ZIP and form fields, 48px targets, and visible Sample pills.
**Deductions:**
- 1440-scroll-25.jpg: the inactive story steps (02-04) are dimmed. I sampled the brightest glyph pixels of "The tray adds them up…" at about rgb(115,141,140) on #1C3A38, about 3.5:1. That is 16px body text below 4.5:1, which axe will flag (mustFix).

## Motion and interaction: 8.5
**Earned:** a pinned, scrubbed story (the motion-on full page is ~2,000px taller than reduced motion, and 1440-scroll-25.jpg shows the step state advancing). Hang-tag swing and tool lift into the tray exist as hooks. The builder, triage chips, photo tabs and stepped form are four real interactions tied to the thesis.
**Deductions:**
- 1440-scroll-25.jpg: the pinned story's visual is a row of static tools above an empty dashed tray. Whatever the scroll does, the still frame at 25% shows nothing moving into the tray, so the payoff of the thesis ("lifts its tool off the wall into a running tray") is not visible in the story frame (−0.5).

## Wow moment: 8.5
**Earned:** the punch-list builder plus "Your tray" receipt (1440-rm-full.jpg) is a genuine, on-thesis tool a contractor would want. The brown sketch wall is memorable.
**Deductions:**
- 1440-rm-full.jpg, 1440-scroll-25.jpg: both tray moments are shown empty ("Nothing in the tray yet", "0 H", the empty dashed bar), so on first sight the wow is a blank receipt. A pre-ticked sample state or a filled story tray would land it (−0.5).

## Polish: 8.0
- 1440-first.jpg and 1024-first.jpg: clipped hang-tags (the mustFix is counted in firstScreen; it reads as unfinished here too).
- 1440-rm-full.jpg: town pills with zero gap under the paragraph, and the "reviews" orphan.
- 1440-scroll-50.jpg: the "Price it" links sit at different heights per row (578 vs 771 vs 763).
- Credit: favicon, OG and a clean footer disclaimer.

---

## Arithmetic
14×8.0 + 12×8.5 + 10×8.5 + 10×8.0 + 8×8.5 + 8×9.0 + 7×8.5 + 7×8.0 + 12×8.5 + 8×8.5 + 4×8.0
= 112 + 102 + 85 + 80 + 68 + 72 + 59.5 + 56 + 102 + 68 + 32 = **836.5 / 100 = 8.37** (8.365)

Verdict expected: **FIX** (mustFix not empty).

## Must
1. **firstScreen**, 1440-first.jpg and 1024-first.jpg, hero `.tile__tag`: the hour tags are clipped by their tile ("TV MOUNT 1.5-2.5 H" → "1.5-"). Fix: let the tag size to its content (`white-space: nowrap; max-width: none; width: max-content`) and remove `overflow: hidden` on the tile, or anchor the tag at `left: 8px; right: auto` with the tile wide enough. At ≤1100px, drop the hours onto a second tag line instead of truncating. No tag may be cut at 1024 or 1440.
2. **layout / mobile**, 1440-scroll-50.jpg (#services), 1440-scroll-75.jpg (#reviews), 390-rm-full.jpg: the left column starts at x=0. Fix: put both grids inside the same container as their h2 (`max-width: 1192px; margin-inline: auto; padding-inline: var(--gutter)`), so the services rules, icons and review cards start at the heading's left edge (124px at 1440, 20px at 390).
3. **a11y**, 1440-scroll-25.jpg (#how story): the inactive step text is about 3.5:1 on teal. Fix: don't dim body text with opacity. Keep the inactive titles and paragraphs at ≥ 4.5:1 (e.g. paragraph `#B9C6BF` on `#1C3A38`), and signal the active step with the gold number, a peg dot or the left rule instead.

## Should
1. **Whole page**, 1440-rm-full.jpg: unify the left edge. The story (#how, x=64) and photo-to-quote (x=244) must sit on the same 124px content edge as every other band.
2. **Every section**, 1440-rm-full.jpg: drop the "○ MONO EYEBROW" from at least 6 of the 10 sections. Keep it only where it adds information (Punch-list builder, Photo-to-quote, Area & hours). Let the condensed h2s stand alone.
3. **Hero proof**, 1440-first.jpg: replace the wrapped middle-dot mono line with two plain Outfit items: an open-state chip, and "4.8 from 212 reviews" plus the Sample pill, kept on one line (`white-space: nowrap` on the rating group).
4. **Area band**, 1440-rm-full.jpg: add `margin-top: var(--s-4)` between the towns paragraph and the pills, or cut the paragraph since the pills repeat it.
5. **Builder**, 1440-rm-full.jpg: either stretch the tool board to the tray card's height (`align-items: stretch`) or move the "Final number after photos…" note under the board, so there's no empty gold block.
6. **Services**, 1440-scroll-50.jpg: align every "Price it" to the row's bottom (`align-self: end`) so the links form one line per row.
7. **Triage**, 390-rm-full.jpg: at <640px, set the symptom chips in a 2-column grid (`grid-template-columns: 1fr 1fr`) and scroll the answer into view on tap.
8. **Hero tile 1**, 1440-first.jpg: hang the level from its peg like every other tool (top-aligned under the peg), not floating at mid-height.

## Elevate
- **firstScreen (8.0, weight 14)**: make the hero the tool itself. The hang-tags on the hero tools should be tappable, and ticking one lifts the tool off its peg and starts a running "0 H → 2.5 H" tally right under the h1. The first screen then proves "See the hours" instead of illustrating it, and a contractor gets the idea in one tap.
- **layout (8.0, weight 10)**: give the whole page one pegboard grid. Every band sits on the same 1-inch peg-hole module, so content edges, card widths and the services rules snap to peg columns, and a section's left edge is literally a peg line. The scattered rhythm becomes a single workshop wall that you scroll down.
