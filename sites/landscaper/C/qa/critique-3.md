COPY: ok

# Five-second test
1440-first.jpg: "A shade-garden company in Savannah. They plant courtyards and fern beds under live oaks. I call to plan or text a photo of my yard. 14 years in Savannah, 4.9 from 64 reviews (marked Sample)." The drawn live oak in an arch with its plant-marker tag tells me the idea before I read it.
390-first.jpg: same answer. The h1 is 2 lines, both actions sit above the fold, the phone is in the header and the sticky Call/Text bar.

Round 2 was scored from the DOM with no screenshots. This round has real frames, so some r2 scores move in both directions.

# First screen: 9.5
Earned (1440-first.jpg): the h1 names trade, city and outcome ("Shade gardens for Savannah's live oaks") with a gold italic second line that carries the scale contrast. There is one primary action (gold "Call to plan") and a quieter outlined "Text a photo of your yard". The proof line has a boxed SAMPLE RATING. The hero is a drawn arch: live oak, Spanish moss, ferns, a brick wall and the Quercus virginiana marker tag, so the signature is in the first screen. 390-first.jpg: h1 is 2 lines, both CTAs are above the fold, and the marker tag peeks under them.
-0.5: in 1440-first.jpg the next band peeks only about 18px (cream sliver at y≈882), under the 40–120px anchor. The hero also has about 100px of dead green under the proof line.

# Distinctiveness: 9.5
1440-full.jpg: the plant-marker tag organises the page. It names the hero tree, every service card ("BED NO. 07"), the "Under the oaks" interstitial (1440-scroll-25.jpg), the story fern (1440-scroll-50.jpg), the review service tags (1440-scroll-75.jpg) and the area/footer pills. All imagery is drawn line art in cream and gold on live-oak green, which no sibling or contractor template has. Cormorant italic with Albert Sans is a distinct pair. Cover-the-logo test passes for the hero, interstitial and story.
-0.5: services (1440-scroll-25.jpg) and reviews (1440-scroll-75.jpg) are both bordered 3-column card grids. Without the tags they are template shapes.

# Typography: 9
1440-first.jpg: large display Cormorant with tight tracking and a gold italic accent line. The lead is set apart. Caps eyebrows are tracked. 1440-scroll-50.jpg: the italic pull quote is the second scale-contrast moment, with curly quotes and oldstyle step numerals. 1440-scroll-25.jpg: the italic binomial carries the type identity. 1440-scroll-75.jpg: the price heading "$600 to $2,000" is large and clear.
Not a 10: the price range reads "to" instead of an en-dash (1440-scroll-75.jpg), and "Garden design plan: $600 / to $2,000" breaks with the unit split across lines.

# Layout and rhythm: 8.5
1440-full.jpg: about 11 sections, each with one job. Tones alternate deep / light / paper / deep interstitial / deep full-bleed illustration / light / deep story / paper / light / gold / deep / light / deep. The asymmetric story (1440-scroll-50.jpg) and the full-bleed brick-path drawing give breath.
-0.5: two dark bands touch. The "Under the oaks" interstitial is boxed inside the paper services section, but the full-bleed brick-path illustration that follows starts immediately after the services end (1440-full.jpg, ~y 640–800 of the thumbnail). The plan in the services grid then reads as deep → deep with only a paper strip between.
-0.5: the season planner (1440-full.jpg, ~y 1180–1240 thumbnail) is a quiet section that is too empty. The month tabs and a single small card sit on the right with a large blank paper field, and it reads unfinished next to the dense reviews grid below. Two bordered card grids (services, reviews) also make the density map repetitive.

# Photo and video (drawn treatments): 8.5
There are no stock photos on the page. Every image is a coherent drawn system in one stroke weight and palette: the hero oak arch (1440-first.jpg), the fern-and-marker panel (1440-scroll-50.jpg) and the dappled-leaf texture behind the interstitial (1440-scroll-25.jpg). The fern panel is the best frame on the page.
-0.5: the full-bleed brick-path drawing (1440-full.jpg, after services) is a vanishing-point wireframe tunnel. It reads as a 3D grid more than a Savannah garden path, and it is the weakest drawing on the page next to the hero oak. Nothing is broken or blank.

# Copy: 9
1440-first.jpg: specific nouns (courtyards, fern beds, brick paths, dappled light). Service cards now all say "Plan this with us →" and the contact submit says "Plan your garden", so the r2 should item is fixed. 1440-scroll-25.jpg: "We plan the beds around the tree, not the other way round" is a real point of view. The story steps (1440-scroll-50.jpg) are plain and concrete. Every review and price is boxed Sample (1440-scroll-75.jpg). The facts hold: 14 years, 4.9, 64 reviews and the towns all match facts.json.
Not higher: "Get your own number" (1440-scroll-75.jpg) is a fourth CTA verb next to Call to plan, Plan this with us and Plan your garden.

# Mobile: 9
390-first.jpg: the h1 is 2 lines and both CTAs are full-width above the fold. The sticky Call/Text bar is about 56px tall, and the header Call button stays visible. In 390-full.jpg the services stack to one column, the marker tags stay legible, the interstitial and fern panel scale down, and the form stacks. render.json shows no overflow at 320 or 390.
Not higher: on 390-first.jpg the eyebrow "SAVANNAH, GEORGIA · SHADE AND COURTYARD GARDENS" wraps to 2 caps lines and pushes the hero art below the fold.

# Accessibility: 9
390-rm-full.jpg: every section's content is present with reduced motion, and no blank bands. Contrast is good across all the bands in 1440-first.jpg, 1440-scroll-25.jpg and 1440-scroll-75.jpg: cream on deep green, dark ink on gold, dark on paper. The r2 star fix holds: Gloria F. shows 4 stars (1440-scroll-75.jpg). Sample tags are legible. Tap targets look ≥ 48px on 390-first.jpg.

# Motion and interaction: 9
The static frames can't show timing. The 1440-scroll-25/50/75.jpg frames are all fully settled with no half-revealed content. The marker tags are drawn hanging at a slight rotation (1440-first.jpg, 1440-scroll-25.jpg), which shows a physical tag metaphor ready for a swing. There are no pinned sections to judge. Kept at 9: nothing seen contradicts it, and nothing seen earns more.

# Wow moment: 9
1440-full.jpg: the plant finder outputs tagged plant cards. The light chips (Deep shade / Part shade / Marsh edge) filter the plants, and "Plan a bed with these" hands off to the form. The season planner and the sample estimator in the gold band (1440-scroll-75.jpg) tie into the same planning thesis.
Not higher: the season planner's output is one small card (1440-full.jpg), which undersells the second tool.

# Polish: 8.5
1440-first.jpg: a designed S&S monogram, one radius and one icon stroke weight. 1440-scroll-25.jpg: the double-ruled marker tags are consistent everywhere. The footer has the tag pills as a designed close (1440-full.jpg). The r2 nested `<dl>` and `transition: all` are gone from dist.
-0.5: the estimator "Project" select in 1440-scroll-75.jpg shows no chevron. It looks like a text input that holds "Garden design plan", so its affordance is lost.

# Arithmetic
14×9.5 + 12×9.5 + 10×9 + 10×8.5 + 8×8.5 + 8×9 + 7×9 + 7×9 + 12×9 + 8×9 + 4×8.5
= 133 + 114 + 90 + 85 + 68 + 72 + 63 + 63 + 108 + 72 + 34 = 902 / 100 = **9.02**

# Must
None. No DEMO-RULES breach: every review, the rating and the price are Sample-labelled, and the 555 phone and .example email come from facts.json. Reduced motion shows all content (390-rm-full.jpg) and nothing on the phone breaks.

# Should
1. **#prices select (`#est-item`), 1440-scroll-75.jpg**: the chevron is not rendered, so the select reads as a text field. Fix: make sure the `select.input` background-image chevron isn't overridden by a later `.input { background: … }` shorthand. Use `background-color` on `.input`, or raise specificity, so the 6px chevron shows at `calc(100% - 22px)`.
2. **#prices output, 1440-scroll-75.jpg**: "$600 to $2,000" wraps after "$600". Fix: render it as `$600–$2,000` with an en-dash and `white-space: nowrap` on the range span.
3. **#seasons, 1440-full.jpg**: the right column is one small card on a wide empty field. Fix: show 3 task rows for the chosen month as a marker-tag list (task · bed · best week), so the section has the weight of a planner.
4. **Hero, 1440-first.jpg**: the next band peeks about 18px. Fix: lower the hero `min-height` by about 80px (for example `calc(100svh - var(--header-h) - 72px)`) so 60–100px of the cream services intro shows.
5. **Brick-path full-bleed, 1440-full.jpg**: the wireframe tunnel reads as generic 3D. Fix: redraw it in the hero's vocabulary, with brick courses in running bond, a moss edge and a lantern, using the same stroke and gold accents, and drop the converging grid lines.
6. **#prices CTA, 1440-scroll-75.jpg**: "Get your own number" is a fourth action verb. Fix: "Plan this garden" (or "Price my garden") to match the plan verb used elsewhere.
7. **390-first.jpg eyebrow**: wraps to 2 caps lines. Fix: on < 640px show only "SAVANNAH · SHADE GARDENS".

# Elevate (for the record; the verdict is PASS, so this is optional)
- **Layout**: turn the services grid into a planting-bed plan. The nine marker tags sit on a drawn courtyard plan with rows ordered by light (deep / part / sun), so the densest section stops being a card grid and becomes the concept's map.
- **Photo/drawn**: give the drawn system a second full-bleed frame as strong as the hero oak. A night garden with the uplit oak and path lanterns could replace the wireframe path and pay off the landscape-lighting service visually.
