COPY: ok

# Critique: demolition-C, round 3 (fast, final round)

Based on the real render this time (qa/screens, 10 frames). static.json and render.json are clean (0/0, no overflow at 320/390, no console errors), so none of the deductions below are check failures counted twice.

## Five-second test
- **1440-first.jpg:** "Hollow & Hill. Demolition and structure removal in Roanoke, VA. They take sheds, decks and garages off steep lots by hand and give the lawn back. Call (540) 555-0181 or Price it. Open now, 4.9 Sample rating." All four answers land in under five seconds. The field-book plot drawing on the right shows the signature on the first screen.
- **390-first.jpg:** Same answers. GONE is one line, both CTAs sit above the fold, and the sticky bar repeats Call and Price it.

## First screen: 9.0
**Earned:** The h1 GONE is a confident one-word outcome. The kicker carries the trade and the city, and the lead names the three jobs plus the hillside angle. There is a quiet secondary button, and the proof line has the Sample label. The hero's left-edge ruler (0 to 192 sq ft) and the plot card make this composition belong to this concept. The next band peeks about 48px (1440-first.jpg). At 390, the h1 is 1 line and both actions are above the fold (390-first.jpg).
**Deductions:** The city lives in the kicker, not the h1, and the proof line in 1440-first.jpg sits at about 60% opacity in small mono, so it is the weakest text in the hero. That keeps it off a 10, but no point deduction.

## Distinctiveness: 9.0
**Earned:** The ruler and plot system appears in the hero, the services axis (01–08 ticks, c0 / 1440-full.jpg), the story field book (1440-scroll-50.jpg), the estimator footprint (tools band, 1440-full.jpg), the review axis (1440-scroll-75.jpg) and the footer ruler. The topographic ridge break (1440-scroll-25.jpg) is a layout family no template ships. Anton, Crimson Pro and DM Mono on pine and cream differ from the library cards.
**Deductions:** None that cost a point. The services band still reads as "card grid with an axis" more than a parcel map (1440-full.jpg, services).

## Typography: 8.5
**Earned:** Anton display with tight tracking, Crimson Pro body at a comfortable size and measure, and DM Mono for labels, figures and prices. The hierarchy is clear in every band (1440-scroll-75.jpg, the reviews title against the 4.9 figure).
**Deductions:**
- Straight apostrophes inside curly-quoted reviews: "my mother's place" (1440-scroll-75.jpg, Earl M.) and "couldn't find the circle" (Josh R., 1440-full.jpg bottom). The rest of the page uses ’. −0.5
- "12x16" with a letter x in the estimator result and the story lead (1440-full.jpg tools band, 390-full.jpg story). The hero and story drawings correctly use "12 × 16". Inconsistent. (Counted under the same −0.5.)

## Layout and rhythm: 8.5
**Earned:** The tone sequence works: deep → paper → stone → deep ridge → paper → slate → paper → stone → deep → stone. The sticky field book beside the four stages is a real asymmetric layout. The FAQ split (title left, accordion right) is quiet and correct.
**Deductions:**
- The story band at 1440 has 250–300px voids between stages on the right while the sticky card waits (1440-full.jpg, story; 1440-scroll-50.jpg shows a single faded stage and a rule floating in empty space). On a static read it looks unfinished. −0.5
- In the estimator band, the right column is empty below the ZIP card for about 600px (1440-full.jpg, tools band). The band reads as one tool plus a stray box. −0.5 (shared with polish)
- The "Yard restore" dark card: the icon, title and Price it link sit on three unrelated alignments. The link floats at mid-card x≈915 (1440-scroll-25.jpg top).

## Photo and video (drawn treatments): 8.5
**Earned:** The stock photos are placeholders, and the page carries itself on one consistent drawn language: the field-book plot (1440-first.jpg, 1440-scroll-50.jpg), the topographic ridge layers (1440-scroll-25.jpg), the single-stroke footprint icons (services) and the hatched estimator footprint. It reads as one hand, one stroke weight and one palette. Nothing is broken or blank.
**Deductions:** The estimator footprint (1440-full.jpg, tools band) is a bare hatched rectangle in a box, much thinner than the hero plot. It drops the drawing quality at the moment the visitor interacts. −0.5

## Copy: 9.0
**Earned:** The round-2 mustFix is resolved: review cards no longer carry invented sq-ft numerals (1440-scroll-75.jpg). The voice is specific and local: "Hillside yards need hands, not just machines", "Nothing left to trip a mower", "Topsoil, straw, and a promise". The estimator now grounds the number: "That footprint is about the floor of a bedroom, handed back to the yard." Prices, rating, figure, licence, plot and terms all carry Sample labels. Every fact checks against facts.json.
**Deductions:** None at this level. The footer line "0 sq ft back to lawn" is a motion bug (see Motion), not a copy problem.

## Mobile: 8.5
**Earned:** 390-first.jpg is tight and correct: a one-line h1, a full-width Call, Price it and a sticky bar. There is no overflow at 320 or 390 (render.json). The story stacks cleanly with the field book above the stages (390-full.jpg).
**Deductions:**
- Services become eight full-width cards of about 245px each, roughly 2,000px of scroll with nothing to break it (390-full.jpg, services). −0.5
- The contact hours block at 390 is a cramped 2-column day/time grid in small mono (390-full.jpg, contact) that reads as a data dump.

## Accessibility: 8.5
**Earned:** 1440-rm-full.jpg and 390-rm-full.jpg show every section present and readable with reduced motion: story stages at full ink and the footer counter at its value. Labels sit visible above every field. The focus and ARIA structure are as in round 2, and the heading order (h1 → h2 → h3) is clean in the dist.
**Deductions:**
- The story scroll-focus dims inactive stages to roughly #a7aea6 on #f3f0e9 (1440-scroll-50.jpg, Stage 03 body). That is well under 4.5:1 for 16px body text, and axe will flag it on any scroll position. −0.5

## Motion and interaction: 8.5
**Earned:** A line-split hero, a scroll-focused story with the field-book card filling its ruler (1440-scroll-50.jpg: the bar at 160 sq ft mid-story), tabs, a ZIP check, a 4-step form with a progress ruler, an accordion and the estimator slider that redraws the footprint. That is enough distinct hook types.
**Deductions:**
- The footer ruler, which is the payoff of the whole "sq ft back to lawn" idea, reads **"0 sq ft back to lawn on Plot 01"** in both motion captures (1440-full.jpg and 390-full.jpg footers). It shows 192 only in reduced motion. The counter starts from 0 and does not fire reliably at page end. −0.5
- The estimator slider labels SMALL / TYPICAL / LARGE are not aligned to the track: LARGE sits at about 75% while the track runs to 100% (1440-full.jpg, tools band). The control looks unfinished.

## Wow moment: 8.5
**Earned:** The field-book plot is a genuine moment. It works as the hero art and as the story's measured artefact, and the "Print this sheet" option gives the estimator a take-away.
**Deductions:** The estimator, where the visitor actually acts, produces a thin drawing (a hatched box and a progress bar). The payoff ruler in the footer reads 0 (see Motion). The two places that should land the idea are the two weakest renderings of it. −0.5

## Polish: 8.5
**Earned:** Sample labels are consistent, the radius is consistent, the icon strokes are consistent, and the footer has a honest disclaimer ("Drawings on this page are illustrations of a sample plot").
**Deductions:**
- The form's primary "Next →" is unstyled text with no border or fill (1440-full.jpg contact, 390-full.jpg contact). It is the weakest button on the page at the most important step. −0.5
- The slider label misalignment, the Yard restore card alignment and the empty estimator right column (above).

## Arithmetic
```
14×9.0 + 12×9.0 + 10×8.5 + 10×8.5 + 8×8.5 + 8×9.0 + 7×8.5 + 7×8.5 + 12×8.5 + 8×8.5 + 4×8.5
= 126 + 108 + 85 + 85 + 68 + 72 + 59.5 + 59.5 + 102 + 68 + 34
= 867 / 100 = 8.67
```

## Must
None. There is no DEMO-RULES breach, nothing breaks on a phone, and reduced motion shows everything. The dimmed-stage contrast is a scroll state, so it sits under Should with a deduction.

## Should
1. **#story stage dimming** (1440-scroll-50.jpg): inactive stages fall below 4.5:1. Floor the inactive state at opacity .72 on the text (or use color #5d665f) instead of the current pale grey, and keep the active stage at full ink.
2. **Footer ruler counter** (1440-full.jpg / 390-full.jpg footer, "0 sq ft"): render the final value (192) in the HTML and animate from 0 only once the footer is actually observed. If the observer never fires, the number must already read 192.
3. **#story voids at 1440** (1440-full.jpg): cut the per-stage min-height so the gaps between stages are ≤ 120px, or let each stage carry a small plot-state thumbnail so the right column is never empty.
4. **Estimator band right column** (1440-full.jpg tools): put the sample price sheet summary or the "Print this sheet" preview under the ZIP card, or make the ZIP card sticky to the top of the band with the tool beside it.
5. **Slider labels** (tools band): place SMALL / TYPICAL / LARGE at 0 / 50 / 100% of the track width (`justify-content: space-between` on a row the same width as the input).
6. **Form "Next →"** (#contact): style it as the primary button (filled cream on deep, or deep on cream inside the card, min-height 48px), matching "Book a walk-through".
7. **Apostrophes and multiplication sign**: replace ' with ’ in the Earl M. and Josh R. reviews, and use "12 × 16" in the estimator result and the story lead.
8. **Yard restore card** (#services, card 08): put the icon, title, body and Price it on one baseline grid (icon + title left column, body + link right column, link left-aligned under the body).
9. **Mobile services** (390-full.jpg): at < 640px, collapse the cards to a compact two-line list row (icon, name, "Price it →") with the blurb behind a details toggle, or use a 2-up grid for the six small items.

## Elevate
1. **Motion (8.5, weight 12):** Make the ruler a single continuous instrument across the page. One running "sq ft back to lawn" figure lives in the sticky header's edge. It ticks up as the story stages pass and jumps to the estimator's chosen size when the slider moves. It then lands on the footer ruler at the exact final number, so the idea is measured, not decorated.
2. **Layout (8.5, weight 10; ties at 8.5 broken by weight → motion, then layout):** Rebuild #story as a true scroll-stage: one full-height pinned plot drawing that changes state per stage (shut-offs marked → walls gone → footings out → seeded), with the four stage texts as short captions stacked tight beside it. Then the band has no empty voids and the drawing, not the white space, sets the rhythm. Pair it by turning the estimator band into a two-column sheet (tool left, live field-book result right) so no column sits empty.
