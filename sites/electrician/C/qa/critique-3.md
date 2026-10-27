COPY: needs copy-chief (mustFix on an inflated star rating; the fix itself is CSS, but copy is capped at 8.0)

# electrician-C, round 3 critique

**Five-second answer** (1440-first.jpg, 390-first.jpg): "An electrician who rewires old Kansas City bungalows one room at a time without tearing out the plaster. I tap 'Price my rewire' or call (816) 555-0112. Why them: they only do 1910s–1930s houses and patch before they leave." Answered cleanly on both sizes.

What changed since round 2: the page now renders in full in motion and in reduced motion (1440-full.jpg, 1440-rm-full.jpg, 390-rm-full.jpg). Both round-2 mustFix items are gone: the blank middle is fixed, and the placeholder alt is no longer shown. Every section can now be judged.

## First screen: 9.0
Earned: 6-word h1 on 2 lines naming the trade, city and outcome. One loud action plus a quieter outlined call. Phone in the header. Proof line with open-now, areas and a Sample rating. The arch frame and the "01 FRONT ROOM" marker put the signature on the first screen. 390: h1 on 4 lines, both actions above the fold, sticky bar.
- 1440-first.jpg: the next band peeks only ~15px (the edge of the dark ledger under the rail), under the 40–120px mark (−0.5).

## Distinctiveness: 9.0
The arch appears in the hero, the attic decoder (1440-scroll-50.jpg) and the porch/area band. The room marker numbers 01–09 run through the tour and the footer index. The house-section icons in #services (1440-scroll-25.jpg) light up the room each service belongs to, so the motif carries information.
- 1440-full.jpg: a numbered mono eyebrow sits above every heading and reads as the "eyebrow / 01-02-03" tell (−0.5 from 9.5).

## Typography: 8.5
Cormorant + Karla + JetBrains Mono (the listed accent). Body is full ink at 16px or more. Price ranges use en-dashes.
- 1440-full.jpg ledger band: 4+ tracked mono caps labels in one view (−0.5).
- 1440-scroll-75.jpg: in "★★★★★ 5 out of five", the 5 is an old-style display figure that drops below the sentence baseline (−0.5, combined with the hours format noted under polish).

## Layout and rhythm: 8.0
Tones alternate with no two dark bands touching. The shapes vary: ledger, sticky story, grid, full-bleed break, decoder, tabs, brick tool band, reviews, area, form.
- 1440-full.jpg #services: the middle row is broken. Two-prong splits into two columns and Push-button has no icon or room label (−1.0, **mustFix**).
- 1440-scroll-75.jpg #reviews: the fifth card is orphaned, and the left column sits empty for ~600px under the big quote (−0.5).
- Round 2's blank-middle penalty is gone (+0.5 back).

## Photo (drawn treatments): 8.5
1440-first.jpg, 1440-scroll-50.jpg and the 1440-full.jpg area band share one warm palette inside the arch frame. Everything is on-topic and nothing is blank or broken. Not a 9: these are flat vector scenes with no sequence that runs through the page.

## Copy: 8.0 (capped by mustFix)
This is the best writing in the niche so far: "Wired for iceboxes and radios. Asked to run a dishwasher, a microwave and a car.", "Two-hole outlets have three honest fixes.", "None of these means trouble on its own." Every price and review carries its Sample tag.
- 1440-scroll-75.jpg: Erica N. is a 4-star review in facts.json but shows five filled stars. That is an inflated rating (**mustFix**).
- The action names drift across the page: Price my rewire / Price it / Price my outlets / Price my charger / Book an inspection.

## Mobile: 9.0
390-first.jpg: h1 on 4 lines, both actions above the fold. 390-full.jpg: the wall diagram is re-cut vertically, services stack cleanly, the decoder is a single column, the EV slider is thumb-sized and the area list is 2-col. render.json shows no overflow at 390 or 320.
- 390-full.jpg: the "Price it →" links in #services look shorter than 48px.

## Accessibility: 8.5
The reduced-motion full pages show every word. Skip link, a 3px accent focus ring, sr-only star text, and forced-colors and print blocks are all present.
- 1440-full.jpg #story: steps 02–04 are dimmed to pale grey on paper in the motion state, well under 4.5:1. The diagram labels PATCHED and TESTED · BEDROOM are also faint (−0.5).

## Motion: 8.5
Hooks present: split-line headings, story step focus, header room marker, tabs, a slider-driven drawing, stagger reveals. Reveals now resolve.
- The 25/50/75 frames show only the story step focus as motion that explains something. The attic cross-section and arch frames are static, and the promised brass connector line between room markers does not appear in any frame.

## Wow: 9.0
1440-full.jpg #ev: "Where does the car park?" redraws the panel-to-garage run in line drawing, names the price driver, and offers "Print this plan". The attic decoder (1440-scroll-50.jpg) pairs a checklist with a recent/mixed/original meter and a knob-and-tube cross-section. Both tie to the thesis and both are things a homeowner would keep.

## Polish: 8.5
Radius is consistent, the icon stroke is one weight, and the footer is a designed close.
- 1440-full.jpg: hours are written as "08:00–17:00" (24h) in the ledger and footer, but as "8 am" in the open-now line (−0.5).
- 1440-scroll-50.jpg: the label "NEW CABLE ALONG THE JOIST" collides with the joist posts.
- 1440-full.jpg break band: the dashed wire cuts through "and radios." like a strike-through.

## Arithmetic
14×9 + 12×9 + 10×8.5 + 10×8 + 8×8.5 + 8×8 + 7×9 + 7×8.5 + 12×8.5 + 8×9 + 4×8.5
= 126 + 108 + 85 + 80 + 68 + 64 + 63 + 59.5 + 102 + 72 + 34 = 861.5 / 100 = **8.62** (8.615)

Verdict expected: **FIX** (2 mustFix).

## Must
1. **#reviews, Erica N. card** (1440-scroll-75.jpg, 390-full.jpg): the card draws five stars for a 4-star review. Fix: make `.stars` respect `--s`, for example by dimming star 5 to opacity .25 or using a clipped gradient fill. Then confirm in the screenshot that the card shows 4 filled stars and 1 empty.
2. **#services middle row** (1440-full.jpg): the Two-prong card breaks into columns and Push-button has no icon or room label. Fix: give all nine cards the same structure (house icon → room label → h3 → blurb → "Price it"), one cell each. Remove the span/subgrid rule on that pair. Add a Push-button house icon with the living room lit. Check at 1024 and 1440.

## Should
1. **Hero bottom** (1440-first.jpg): cut the hero's bottom padding by ~60px so 60–80px of the dark ledger shows above the fold.
2. **#story inactive steps** (1440-full.jpg): give inactive steps a contrast of at least 4.5:1. Dim only the h3 and number (for example ink at 70% on #F5F0E8), not the body text. Raise the diagram labels PATCHED and TESTED · BEDROOM to full ink.
3. **Hours format** (1440-full.jpg ledger and footer): write the hours as "8 am – 5 pm" / "8 am – 4 pm" to match the open-now line.
4. **Rating line** (1440-scroll-75.jpg `.stars--lg` row): set the "5" in Karla tabular lining figures, or fold it into the sentence: "5 out of five, from 96 reviews".
5. **Attic decoder label** (1440-scroll-50.jpg): move "NEW CABLE ALONG THE JOIST" below the red cable line, or give it a paper-colour backing so it clears the joist posts.
6. **Break band** (1440-full.jpg #break): move the dashed knob-and-tube lines below the h2 block, or between the two lines of the h2 with clear space, so they stop striking through "and radios."
7. **Ledger labels** (1440-full.jpg): keep the mono only on the four column labels and set the "Before anyone opens a wall" sub-items in Karla. Across the page, drop the mono eyebrow on at least 3 of the 9 sections (for example #reviews, #area, #quote), so the room marker becomes an event and not a habit.
8. **"Price it" links** (390-full.jpg #services): give each link padding so the tap area is at least 48px tall.

## Elevate
- **Layout (8.0):** make the reviews band a room of its own. Arrange the letters around the Megan quote as a kitchen-table spread (letters of varied widths, no empty column, no orphan). Then turn #services into a true floor plan: one large house-section drawing whose room cells hold the cards, so the grid itself is the signature.
- **Copy (8.0):** use one name for the primary action ("Price my rewire") everywhere, with the room as a sub-line. Write doubt-moment microcopy at the decoder result and the EV plan, for example "Print this and keep it by the panel; we start from it on the first visit."
