COPY: ok

# painter-C, round 3 (fast, final round), critique

## Five-second test
- **1440-first.jpg:** "Haint & Harbor, a historic house painter in Charleston. They hand-scrape and prime first. It's open now until 4:30, rated 4.9 (sample). I tap Price it or call (843) 555-0121." A drawn row of Charleston single houses fills the lower half. The street plaque now hangs below the ground line instead of covering a door, and the cream next band peeks.
- **390-first.jpg:** the h1 runs 3 lines, both CTAs and the sample rating sit above the fold, the house row peeks, and the mobile bar repeats Call and Price it. Passes.

Changes since round 2:
- The break caption now sits on a solid dark plaque (1440-scroll-25.jpg), which clears the mustFix.
- Services is now a "second street" of nine houses on a dark band, each with its own named link.
- Each of the four prep houses now shows its defect (peeling sill, broken baluster, closed louvers, rusted gate).
- The piazza ceiling paints from mildew to haint blue as you scroll (1440-scroll-50.jpg is captured mid-sweep).
- The paper-on-paper runs are broken.
- "5 of 5" no longer splits.

## firstScreen: 9.5
Earned:
- The 6-word h1 names the trade and the city.
- There is one primary and one secondary CTA, and the phone appears in both the header and the hero.
- The open-now line and the labelled sample rating are present.
- The signature row carries the hero, and the plaque is now mounted on the ground band (1440-first.jpg).
- On mobile the hierarchy is clean (390-first.jpg).

No deduction worth a half point.

## distinctiveness: 9
Earned: Facade + Plaque appears in the hero, color explorer, prep row, marsh break, piazza, second street, marsh house, estimator and footer (1440-full.jpg). The pastel row and haint blue belong to Charleston.
- −0.5: painter-A's 1440-first.jpg is still a drawn house elevation with mono callouts. The siblings share the "illustrated house + label" idea.
- −0.5: the system is one recurring move: a front-elevation house plus a plaque, nine times over. It never shifts scale or viewpoint. There is no close detail (a bead board, a shutter hinge, a brush stroke), so by the second street it reads as repetition, not escalation (crop of the services band in 1440-rm-full.jpg, y≈4400).

## type: 9
Earned: Cormorant display, Source Serif text and DM Mono plaques work well together. The italic review quotes are strong, and the prices use tabular figures with en-dashes (1440-rm-full.jpg pricing).
- −0.5: the services cards in 1440-rm-full.jpg (y≈4600) set body text in nine columns about 130px wide, a measure of roughly 16–18ch. Links break as "Price / interior →" and "Price / washing →", and the cards end at five different heights.
- −0.5: in 1440-scroll-75.jpg the first review's attribution wraps so that the second line starts with "· 5 of 5", an orphaned separator.

## layout: 9
Earned: the tone rhythm now alternates: ink hero, paper, plaster prep, dusk break, haint piazza, dark-green street, paper marsh, slate reviews, paper pricing, pale-blue area, ink contact, paper footer (1440-full.jpg). Nothing light touches light anymore. The page uses several layout families: a row, a split, a four-up, a full-bleed band, a pinned story, a nine-up street and a sheet.
- −0.5: the "Nine jobs, one crew" header and the street start at x≈32 in the 1440 services crop. Every other section starts at x=112, so this band breaks the page's left edge.
- −0.5: the nine-up card row is cramped and ragged at 1440 (see type). It needs two tiers or a wider card for the copy.

## photo (drawn treatment judged on merit): 9
Earned: every drawing shares one language: window module, cornice, ground line, palette. The four prep houses now carry their defects (peeling sill, sagging baluster, louvers shut, rust spots), which makes the plaque copy visible (1440-full.jpg prep crop). The marsh break has depth, and nothing is broken or blank.
- −0.5: the estimator mini-house in 1440-rm-full.jpg (pricing, y≈8000) is a crude block: no shutters, no cornice, two flat squares for windows. It is a weaker drawing than every other house on the page.
- −0.5: the services street houses are scaled-down copies of the hero houses, with the job shown only by a small prop (ladder, gate, spray). At 110px these props are hard to read (1440-rm-full.jpg services).

## copy: 9.5
Earned:
- The copy uses specific trade nouns: piazza, louvers, mildewcide, metal primer, bead.
- The voice is local and dry ("More rust than iron", "Black spots by July").
- Every service link now names its job ("Price shutters & doors", "Price ironwork").
- Every proof element is labelled sample (1440-scroll-75.jpg, 1440-rm-full.jpg).
- Facts check out against facts.json: the owner is Wendell, and the areas match.

## mobile: 9
Earned: render.json shows no overflow. Prep is now one house per row with its plaque beside it, the piazza is unpinned with the CTA visible, services stack as card + house chip, and the mobile bar is present (390-full.jpg).
- −0.5: the prep plaques in 390-full.jpg (y≈2300–3400) still wrap to 4–5 lines in a ~190px box ("SULLIVAN'S ISLAND / RAIL", "→ Wood and / trim repair"), next to a lot of unused plaster.
- −0.5: in 390-full.jpg (y≈4800) the piazza ceiling drawing sits below the steps and the CTA. The story's visual comes after its call to action on the phone.

## a11y: 9
Earned: the break caption now sits on a solid #1a1c1e plaque (1440-scroll-25.jpg). The page has a skip link and a labelled form, and the reduced-motion pages show full content (1440-rm-full.jpg, 390-rm-full.jpg). Sample tags are visible, and render.json is clean.
- −0.5: the services card body text in 1440-rm-full.jpg (y≈4650) is about 13px muted grey-brown on cream. It is legible but at the low edge for body copy, and with the 16ch measure it is the hardest-to-read block on the page.
- −0.5: the area chips in 1440-rm-full.jpg are mono caps on a pale-blue band with only an offset shadow to mark them out. The active "CHARLESTON" state is the only one that is clearly a control.

## motion: 9
Earned: both round-2 elevate moves were delivered.
- The hero intro is there: the centre house's shutters swing open and its windows light. The final state matches the static hero (1440-first.jpg).
- The piazza pin now paints the ceiling. 1440-scroll-50.jpg catches the haint-blue sweep crossing the bead board, with the mildew gone and the "Two coats" row active.
- The color explorer recolours the house, and reduced motion is clean.
- −0.5: the pin holds a long scroll for four steps, and the ceiling is the only thing that changes. The fan and plaque stay frozen, and there is no beat when the coat finishes (1440-scroll-50.jpg).
- −0.5: the second street, the largest signature band after the hero, has no motion at all. Nothing in the nine houses responds to scrolling or hover (1440-full.jpg services).

## wow: 9.5
Earned:
- The colour explorer recolours a drawn single house.
- The piazza ceiling is painted coat by coat as you scroll (1440-scroll-50.jpg).
- The price sheet's mini-house responds to the size slider.
- Services became a second street of nine jobs (1440-rm-full.jpg).

Several designed outputs, not text. A contractor would show this to people.

## polish: 9
Earned: the footer has a row mark with a plaque, the credit honestly says "drawn for this sample", the radius is zero everywhere, the plaque shadows are consistent, and there is a print button on the sheet.
- −0.5: the services gutter misalignment (x≈32 vs 112) and the uneven card heights in the 1440-rm-full.jpg services band.
- −0.5: the estimator mini-house's drawing quality falls below the rest of the set (1440-rm-full.jpg pricing).

## Arithmetic
14×9.5 + 12×9 + 10×9 + 10×9 + 8×9 + 8×9.5 + 7×9 + 7×9 + 12×9 + 8×9.5 + 4×9
= 133 + 108 + 90 + 90 + 72 + 76 + 63 + 63 + 108 + 76 + 36
= 915 / 100 = **9.15**

## Must
None. The round-2 caption contrast failure is fixed (1440-scroll-25.jpg).

## Should
1. **where:** #services header and street (1440-rm-full.jpg y≈4300). **problem:** the content starts at x≈32 while every other section starts at 112. **fix:** wrap the header and the street in the standard `.container` (max-width matching the other sections, 112px gutter at 1440). Let only the ground line run full-bleed.
2. **where:** services cards at ≥1024px. **problem:** nine ~130px columns give a 16ch measure, two-line links and five different card heights. **fix:** keep the nine houses in one row, but put the cards in a 3×3 grid below (or show only title + link under each house and move the description into a `title`-free expander). Set `align-items:stretch`, with the link pinned to the card bottom (`margin-top:auto`).
3. **where:** first review attribution (1440-scroll-75.jpg). **problem:** the line breaks before "· 5 of 5". **fix:** put each "· " separator inside a nowrap span with the item that follows it, or set the attribution in two explicit lines (name · place / job · 5 of 5).
4. **where:** estimator sketch (pricing). **problem:** a crude block house. **fix:** draw it from the same window and shutter module, cornice and ground line as the hero houses. Scale storeys (1/2/3) with the slider instead of scaling a box.
5. **where:** prep plaques ≤640px (390-full.jpg). **problem:** they wrap to 4–5 lines in a narrow box. **fix:** put the plaque under the house at full column width, or widen the plaque to 60% and shrink the house to 40%.
6. **where:** piazza on mobile (390-full.jpg). **problem:** the ceiling drawing comes after the CTA. **fix:** reorder below 768px so it reads intro → ceiling drawing → steps → CTA.
7. **where:** services card body text. **problem:** 13px muted text. **fix:** use 15px minimum and darken the colour to ≥7:1 on cream.

## Elevate
1. **distinctiveness (12):** change scale once. Add one close-up moment where the drawn language zooms in to the material: a single shutter hinge, or a bead-board strip at 1:1 with a brush stroke. Put it between the second street and the marsh house. The system then escalates (street → house → detail) instead of repeating one elevation nine times, and no other painter in the library has a macro beat.
2. **motion (12):** make the second street alive. On hover or focus, a house's job happens (the ladder leans in, the gate rust clears, the shutters open, the spray lifts the mildew), and the scroll-in raises the houses on the ground line with a stagger. Give the piazza a finishing beat when coat 2 completes: the fan turns once and the plaque flips to "Clean two summers". Then every signature surface responds, not just the hero and the porch.
