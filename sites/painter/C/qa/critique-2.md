COPY: ok

# painter-C, round 2 (fast), critique

## Five-second test
- **1440-first.jpg:** "Haint & Harbor, a historic house painter in Charleston. They hand-scrape and prime before painting. It's open now until 4:30, rated 4.9 (sample). I can tap Price it or call (843) 555-0121." A row of drawn Charleston single houses runs across the bottom, the cream next band peeks about 70px, and the phone shows twice.
- **390-first.jpg:** the h1 runs 3 lines, both CTAs sit above the fold, the house row and its plaque peek in, and the mobile bar repeats Call and Price it. Passes.

What changed since round 1: the stock-photo filmstrip is gone. A drawn facade system now carries the whole page: hero row, color explorer house, four prep houses, marsh break, piazza ceiling, marsh house, estimator mini house and footer row. The credits now say "Houses, marsh and porch drawn for this sample." The pricing CTA is now "Price it". The shutter intro promised in concept.json still does not appear on screen.

## firstScreen: 9
Earned: the h1 is 6 words and names the trade and city. There is one primary and one secondary CTA, the phone is in both header and hero, the open-now and sample-rating line is labelled, the signature row is in the hero, and the next band peeks (1440-first.jpg, 390-first.jpg).
- −0.5: in 1440-first.jpg the hero plaque "CHARLESTON, SC" sits over the first two houses and hides a door. It reads as a sticker over the art rather than a plaque mounted on a house.

## distinctiveness: 9
Earned: Facade + Plaque appears in the hero, the color explorer, the prep row, the piazza, the marsh house, the estimator and the footer (1440-full.jpg), so you could not swap logos with a generic painter. The pastel-row palette is specific to Charleston.
- −0.5: painter-A's 1440-first.jpg is also a drawn house elevation with callout labels. The two siblings share the "illustrated facade + mono label" idea, even though the treatments differ (blueprint elevation vs. coloured row).

## type: 9
Earned: Cormorant display, Source Serif text and DM Mono plaques are a coherent, unique pair. The Cormorant italic in the reviews and break works well. The measure is controlled and the price ranges use tabular figures with true en-dashes (d3 crop of 1440-full.jpg).
- −0.5: in 1440-scroll-75.jpg the review attribution breaks "5 of / 5" onto two lines, with the SAMPLE REVIEW tag stranded on the second line. All three cards do it.

## layout: 8.5
Earned: clear tonal bands (ink hero, paper, dusk break, haint-blue piazza, paper, deep reviews, paper, ink contact). Families include the row, the split, the four-up stack, the full-bleed break and the two-column list.
- −0.5: there are long light runs. Story-color (paper) touches story-prep (paper), and services (paper) touches coastal (paper), then pricing touches area (1440-full.jpg, 1440-rm-full.jpg). Paper sits next to paper three times, and those pairs read as one block.
- −0.5: services is a plain two-column ruled list with "Price it" ×9. It is the one section with no signature (pc crop of 1440-full.jpg, y≈6300). On a page built around houses, it looks like a template.
- −0.5: in 1440-full.jpg the piazza pin leaves about 2,100px of empty haint-blue in the full-page capture (1440-rm-full.jpg is 9,150px tall, 1440-full.jpg is 11,274px). Scrolled live, that is a long hold for a 4-step list.

## photo (drawn treatment, placeholders judged on merit): 9
Earned: one illustrative language with the same window module, shutters, cornice and ground line in every house. The palette is unified, the marsh break has depth (sun, steeple, reeds), and nothing is broken or blank (1440-scroll-25.jpg, 1440-scroll-50.jpg, d1 crop).
- −0.5: every house reuses the identical window and shutter tile. The prep row of four (1440-full.jpg, y≈1800) needs one distinct defect per house to show the service each plaque names: peeling sill, broken baluster, closed louvers, rusted gate. As drawn, the houses are pristine, so the plaque copy is never visualised.

## copy: 9
Earned: specific trade nouns (piazza, balusters, mildewcide, louvers, metal primer), a dry local voice ("More rust than iron", "Black spots by July"), and every proof element labelled sample. "Price it" is now consistent (1440-scroll-50.jpg, d3 crop).
- −0.5: in 1440-full.jpg the services headline "Nine jobs, one crew" leads into nine "Price it" links. The repetition flattens the voice, and the link names never change per service.

## mobile: 9
Earned: no overflow at 320 or 390 (render.json). The prep houses stack 2×2, the piazza pin is dropped on the phone, the steps are readable, the timeline bar fits, and the mobile bar is present (390-full.jpg).
- −0.5: on 390-full.jpg the prep plaques wrap to 4–5 lines ("CHURCH STREET / PORCH … and prime"). In a 2-up grid the mono plaque text is too long for the column.

## a11y: 8.5 (capped by mustFix)
Earned: skip link, focus ring, labelled form, sample tags visible, and the reduced-motion page has full content (1440-rm-full.jpg, 390-rm-full.jpg).
- mustFix: in 1440-scroll-25.jpg the break caption "We start when the dew burns off and stop before it settles back." is small cream mono that runs straight across the dark house silhouettes and the pale horizon bands. The words "it / settles back" sit on a light band and fail contrast.

## motion: 8.5
Earned: the piazza section pins and steps through Mildew/Wash/Prime/Two coats with an active-row state (1440-scroll-50.jpg). The color explorer recolours the house. The timeline tabs work, and reduced motion is clean.
- −1.0: concept.json's intro ("shutters swing open… to reveal headline") is still not on screen. The hero in 1440-first.jpg is static and the dist has no shutter hook. The signature never moves in the hero.
- −0.5: the piazza pin holds about 2,100px for 4 text steps, and the porch drawing doesn't change across the steps (1440-scroll-50.jpg shows the same ceiling and fan as the rm shot). The scrub highlights list rows instead of painting the ceiling.

## wow: 9
Earned: the color explorer that recolours a drawn single house, the price sheet whose mini-house responds to the size slider, and the "painting day on the marsh" timeline are designed outputs, not text (d1 and d3 crops, 390-full.jpg).
- −0.5: the piazza drawing, the strongest Charleston-specific image, stays static while its 4 steps scroll (1440-scroll-50.jpg). The wow moment is in the controls, not the story.

## polish: 9
Earned: the footer has a house-row mark with a plaque, the credits are honest ("drawn for this sample"), shadows on plaques and cards are consistent, the radius is zero throughout, and there is a print button on the price sheet (d3 crop).
- −0.5: the plaque drop-shadow offsets differ. Hero plaques use a hard 4px offset, while the estimator card uses a thick ochre slab (d3 crop vs 1440-first.jpg).

## Arithmetic
14×9 + 12×9 + 10×9 + 10×8.5 + 8×9 + 8×9 + 7×9 + 7×8.5 + 12×8.5 + 8×9 + 4×9
= 126 + 108 + 90 + 85 + 72 + 72 + 63 + 59.5 + 102 + 72 + 36
= 885.5 / 100 = **8.86**

## Must
1. **where:** 1440-scroll-25.jpg, humidity break caption. **problem:** cream mono text runs over the silhouettes and the pale horizon bands, and fails contrast on "it settles back". **fix:** move the caption above the skyline, so it sits within the dark sky gradient, or put it on a solid `#1a1c1e` plaque (padding 8px 12px). Keep its max-width ≤ 38ch so it ends before the first roofline.

## Should
1. **where:** #services (1440-full.jpg y≈6300). **problem:** this is the only section without the signature, and it has nine identical "Price it" links. **fix:** give each row a 28px house-silhouette chip in that service's colour on the left, and name each link after its job ("Price shutters", "Price a porch ceiling"…).
2. **where:** review cards (1440-scroll-75.jpg). **problem:** the attribution breaks "5 of / 5". **fix:** wrap "5 of 5" in a `white-space:nowrap` span, and move the SAMPLE REVIEW tag to its own line after the attribution.
3. **where:** prep plaques on 390-full.jpg. **problem:** the plaques wrap to 4–5 lines in the 2-up grid. **fix:** below 640px, stack the prep houses one per row at 70% width, or drop the plaque to 12px with letter-spacing 0.
4. **where:** hero plaque, 1440-first.jpg. **problem:** it covers a door on the first house. **fix:** anchor it below the ground line, or hang it from the wall of house 2 with a 1px hairline so it reads as mounted.
5. **where:** tone runs in 1440-rm-full.jpg. **problem:** paper sits next to paper in three places (color→prep, services→coastal, pricing→area). **fix:** make story-prep `t-light` with a plaster texture, or swap area to a haint-blue tint, so each light pair gets a visible boundary.

## Elevate
1. **motion (12):** make the piazza pin paint the porch. As the steps advance, the ceiling should go from grey-with-mildew-spots, to washed, to white primer, to haint blue in two sweeps across the bead boards. The scroll then shows the transformation the copy describes. Open the hero with the same idea: the shutters on the centre house swing open as the headline lands. Then the signature moves at both ends of the page.
2. **layout (10):** break the paper runs and give the services list a place on the street. Turn #services into a second, shorter row of nine small facades, one per job, each wearing its plaque, on a darker plaster tone. The page then reads as a walk with a loud/quiet rhythm instead of three light slabs in a row.
