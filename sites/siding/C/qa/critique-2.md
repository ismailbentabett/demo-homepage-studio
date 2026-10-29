COPY: ok

# siding-C · critique round 2 (fast mode, scored as strict)

## Five-second answer
"A siding company in Providence that repairs old-house shingles, fish-scale gables and clapboard so the new courses match the old ones. I call (401) 555-0130 or book a measure visit. Why them: they cut to match, and the prices are right there (Sample)." Clear on 1440-first.jpg and 390-first.jpg.

## What changed since round 1
- h1 now names the trade ("Old Providence siding, matched course by course."), and the scallop course and PL. 03 chip sit inside the first 900px (1440-first.jpg) and 844px (390-first.jpg). Fixed.
- Joseph A. review appears once (dist). Fixed.
- The empty cream gap under the story is gone (1440-full.jpg). Fixed.
- The calculator card lost its offset shadow and gained a lapped-stripe head and big numerals (1440-scroll-75.jpg). Fixed.
- Services on phone read as a composed list now, not 8 full-height plates (390-full.jpg). Fixed.

## firstScreen: 9
1440-first.jpg: 7-word h1 with trade, place and outcome. Cream primary vs outline secondary, phone in the header, a proof table with Sample tags, the cedar type-mask "Fishscale" seated on the scallop edge, and paper peeking under it. 390-first.jpg: h1 in 3 lines, both actions above the fold, sticky bar. Held back from 10: the right half above the proof table is empty green at 1440 (1440-first.jpg), so the top half reads as two separate blocks.

## distinctiveness: 9
1440-full.jpg: course-cut edges organise the page (hero scallop, sawtooth services, story, review cards with cut tops, footer Index). Type, palette and hero differ from the siding siblings. The story's wall drawing still sits close to sibling A's layered-wall idea (1440-rm-full.jpg).

## type: 8.5
1440-first.jpg: Gloock at scale with tight tracking, curly quotes, en-dash ranges. Deductions: many tiny tracked caps in one view (eyebrows, PL. numbers, Sample chips, "Price it" labels, 1440-scroll-25.jpg) (-0.5). Story step text is still ~14px muted on cream (1440-rm-full.jpg, "Under the courses").

## layout: 9
1440-full.jpg: green / cream / sage / cream / photo / salmon / cream / green rhythm, a full-bleed photo break, dense service grid, quiet FAQ. The story gap is fixed. Held back: label-left / h2-right header used for patterns, services and FAQ (1440-full.jpg).

## photo: 8.5
1440-first.jpg: cedar used as a type mask, warm. 1440-full.jpg: the full-bleed triple-decker is cold, overcast, with wires (-0.5 mixed grade vs the warm cedar). Only two photos on the page.

## copy: 9
1440-scroll-50.jpg: reviews in the trade's nouns (4-inch reveal, back-primed, coursing), each with a job tag and Sample label. FAQ in the homeowner's words (1440-full.jpg). Duplicate review fixed. Small: "Price it" on all 8 services repeats (1440-scroll-25.jpg).

## mobile: 9
390-first.jpg and 390-full.jpg: no overflow (render.json 320/390 scrollWidth clean), actions above the fold, services now a compact list, story stacked, sticky Call / Text a photo / Book visit bar.

## a11y: 8.5
1440-rm-full.jpg and 390-rm-full.jpg: all content visible, story drawn in its layered state. One h1, ordered h2s, labelled inputs (1440-scroll-75.jpg). Still: FAQ "+" markers faint on cream (1440-full.jpg, -0.5). The "Sample review" chips' muted job labels sit near the lower edge of comfortable contrast on cream (1440-scroll-50.jpg).

## motion: 8.5
dist hooks: data-cut (12), tabs, split, estimator, compare, hotspots, accordion. 1440-scroll-25.jpg: the "Under the courses" drawing, motion on, is still bare studs as the section enters, and no frame shows it building layer by layer, so the motion still doesn't prove it explains the four steps. The reduced-motion frame shows the full state (1440-rm-full.jpg).

## wow: 9
1440-scroll-75.jpg: squares calculator now has a real output moment ("2,190 sq ft · 24.1 squares" in display numerals, a Sample price, a method line). Pattern book (1440-full.jpg) tied to the form, plus color-by-street triple-decker. Not 9.5: none of them is the single "I've never seen that" moment yet.

## polish: 9
dist: SVG favicon, apple-touch, print and forced-colors styles; designed footer Index (1440-full.jpg); calculator shadow replaced by a lapped-stripe head (1440-scroll-75.jpg).

## Arithmetic
14×9 + 12×9 + 10×8.5 + 10×9 + 8×8.5 + 8×9 + 7×9 + 7×8.5 + 12×8.5 + 8×9 + 4×9
= 126 + 108 + 85 + 90 + 68 + 72 + 63 + 59.5 + 102 + 72 + 36 = 881.5 / 100 = **8.82**

## Must
None.

## Should
1. **#faq accordion markers**: the "+" is faint on cream (1440-full.jpg). Make it ink (#1f2d2b or the green) at 2px stroke, 20px, with a 44px hit area on the summary row.
2. **#under step text**: raise the step bodies to 16px / 1.55 in full ink, not muted (1440-rm-full.jpg).
3. **Tracked caps budget**: keep tracked caps for eyebrows and Sample chips only. Set the PL. numbers in the services grid (1440-scroll-25.jpg) in Gloock italic numerals, not tracked caps.
4. **Photo break after #under**: warm the triple-decker grade (lift warmth, cut the blue sky) or crop out the wires, so it sits with the cedar mask (1440-full.jpg).
5. **Hero right column at 1440**: move the proof table up to align with the h1 cap height, or put the PL. 03 pattern swatch in the empty top-right (1440-first.jpg).
6. **Services "Price it" x8**: give each link its own verb + noun ("Price a gable", "Price a storm patch") or drop the link on cards and keep one section CTA (1440-scroll-25.jpg).

## Elevate
- **motion** (12): make "Under the courses" a scroll-scrubbed build. The wall assembles in step with the 4 steps (soft sheathing flagged red at step 2, wrap lapped at 3, courses laid bottom-up at 4), reversible, and the last course becomes the section's cut edge. The motion should carry the story, not just decorate it.
- **type** (10): give the page one type voice for data. Set PL. numbers, prices and the calculator outputs in Gloock numerals at one shared scale, and cut the small tracked caps to two jobs (eyebrow, Sample chip), so the hierarchy reads like a printed pattern book, not a UI kit.
