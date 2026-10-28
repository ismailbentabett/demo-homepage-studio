COPY: needs copy-chief

# assembly-C, round 1 critique

**Five-second answer (1440-first.jpg, 390-first.jpg):** "Furniture assembly and earthquake anchoring in San Jose. They build desks, cribs, bookcases and TVs and strap the tall ones to the beam. Call (408) 555-0106 or text a photo of the wall. 4.9 sample rating, from $45 a piece." It passes. The floor-plan-under-a-gable is unmistakable, and it is the concept's signature.

## firstScreen: 8.5
Earned: 1440-first.jpg shows the Eichler gable seam, a line floor plan with strap ticks and a title block. One loud mustard Call plus a quieter outlined Text. Phone in the header and the hero. Proof line with Sample labels. 390-first.jpg: h1 runs 3 lines and both actions sit above the fold.
- 1440-first.jpg: the hero runs past 900px and the next band does not peek (−0.5).
- The h1 is 7 words but carries no place. The city only shows in the tracked eyebrow, so it holds at 8.5 rather than 9.

## distinctiveness: 9.0
1440-full.jpg: the plan and strap tick show up in the hero, the "nine jobs, five rooms" plan schedule, the room tags (Living room, Kids, Office), the beam-wall story, the reviews pinned to the plan (1440-scroll-75.jpg), the area site plan, the "you are here" locator and the footer title block. The signature organises the information: it is the nav, the review map and the tool sketch. Sibling A (isometric/mono) and B (dark/yellow condensed) share nothing with it.
- Every h2 uses an italic Fraunces accent word ("strapped", "post", "strap", "tight", "level", "strap"). That is the §5 accent-word tell, repeated (−0.5).

## type: 8.0
Fraunces at a large optical size with tight tracking against Albert Sans is a characterful pair, with real scale contrast in 1440-first.jpg.
- 1440-first.jpg: tracked caps everywhere at once (nav, eyebrow, SAMPLE RATING, SAMPLE PRICING, plan labels). That makes 3+ tiny tracked caps in one view (−0.5).
- dist/index.html: straight apostrophes ("If it's taller…", "Kids' room"); zero curly quotes on the page (−0.5).

## layout: 8.5
1440-full.jpg: a good tonal rhythm (redwood → paper → sand → deep story → paper → olive full-bleed atrium break → paper/deep tool → redwood reviews → paper prices rail → area → deep contact). The asymmetric staggered review columns (1440-scroll-75.jpg) work.
- 1440-scroll-50.jpg: the kids/office band holds two plan cards and the tip-over tool side by side. That is three ruled columns of similar weight, and the band does two jobs (service listing plus tool) (−0.5).

## photo: 6.0
dist/index.html has **zero `<img>`, `<picture>` or `<video>`**, and no CSS background image. 1440-full.jpg and 390-full.jpg have no photograph anywhere. 02-concept §6 promised a photo under the gable that unclips along the roof polygon; that photo is missing. A homeowner never sees a real room, a real strap or a real person's hands. With stock this is a trust gap, not a style choice. Score sits at the 6 anchor: the category is effectively unaddressed. **mustFix.**

## copy: 8.5
Trade-specific nouns ("beam wall", "post mount", "cam locks hand-tightened, never driven", "paintable cover"). Honest Sample labels on every review and price (1440-scroll-75.jpg, 1440-scroll-25.jpg).
- The primary action has five names: header "Price it", "Book this mount" (1440-scroll-25.jpg), "Add anchoring to my visit", "Price the desk" / "Price the kids' room" (1440-scroll-50.jpg), "Book a spring date" (−0.5).

## mobile: 9.0
390-first.jpg: the hero is re-cut (h1 3 lines, full-width stacked buttons, the plan peeks under them), and a 3-button bottom bar (Call / Text a photo / Price it). 390-full.jpg: the story is stacked with no pin, and the plan cards stack. No overflow at 320/390 (render.json). The CSS carries a max-width:399px rule for 320.

## a11y: 9.0
1440-rm-full.jpg: every section, story step and review is present and strapped upright. render.json shows no console errors. Forced-colors and reduced-motion queries are present, and inputs are labelled checkboxes (1440-scroll-50.jpg). Heading order is h1 → h2 → h3 with no skip.

## motion: 8.5
Hooks visible: the strap story with the leaning bookcase and active/dimmed steps (1440-scroll-25.jpg), the "you are here" locator lighting rooms (1440-scroll-25/50/75.jpg) and the "0 of 3 pieces anchored" counter. The motion explains the job.
- It holds at 8.5 because the frames show only one moving idea (the strap). The plan in the hero and the review map do not visibly respond to scroll.

## wow: 9.0
The beam-wall elevation story ("3 of 3 pieces anchored") plus a tip-over check whose output is a drawn dresser elevation with a price (1440-scroll-50.jpg). The reviews pinned to rooms on the plan are a second memorable moment. Both tie to the thesis.

## polish: 9.0
SVG favicon, apple-touch icon, og.jpg, print and forced-colors stylesheets, one radius (square) and one stroke system across the plan, no `transition: all`. The footer reads as a title block (1440-full.jpg).

## Arithmetic
14×8.5 + 12×9 + 10×8 + 10×8.5 + 8×6 + 8×8.5 + 7×9 + 7×9 + 12×8.5 + 8×9 + 4×9
= 119 + 108 + 80 + 85 + 48 + 68 + 63 + 63 + 102 + 72 + 36 = 844 / 100 = **8.44**

## Must
1. **photo**, dist/index.html, 1440-full.jpg, 390-full.jpg: the page has no photography at all. Fix: place at least 3 approved niche-library frames via `[[img]]`:
   - the hero frame under the gable (clip-path following the roof polygon, as concept §6 says);
   - one living-room/beam-wall frame inside #living's room tag;
   - one kids-room or garage frame in the kids or yard band.
   Grade them warm to match the redwood/sand palette. Use no faces and alt text without "our work".

## Should
1. **firstScreen**, 1440-first.jpg, hero: the hero is taller than 900px. Cap the hero at about `min(820px, 92svh)` at ≥1100px so the plan band peeks by 60–100px.
2. **type**, dist/index.html, all copy: replace straight apostrophes with ’ ("If it’s", "Kids’ room", "kid’s").
3. **type**, 1440-first.jpg, hero meta: there are too many tracked caps. Set the nav in sentence case (Albert Sans 500, no tracking), or drop the eyebrow and fold "San Jose" into the h1 deck.
4. **distinctiveness/type**, all h2: keep the italic mustard/redwood accent word in at most 2 headings: the h1 "strapped" and the story h2 "strap". Set the rest in roman.
5. **copy**, header CTA + section buttons: choose one primary-action name and use it everywhere, e.g. "Book a visit" (header, sections, form submit). Section buttons can add the context after it ("Book a visit for the TV").
6. **layout**, #kids, 1440-scroll-50.jpg: split the tip-over check into its own band, or put it full-width under the two room cards, so the band has one job.

## Elevate
- **photo**: make photography part of the plan. Each room tag opens on a real frame of that room, clipped by the room's plan outline, with the strap tick on the tall piece. The plan then turns into the photo as you enter the room, so stock reads as one house in one shoot.
- **type**: let the type itself be the architecture signage. Give Fraunces one drawn job, e.g. room names set huge at opsz 144 and running along the plan's dimension lines as wall labels. Strip the decorative italic accents and the caps-label noise so the single scale contrast carries the page.
