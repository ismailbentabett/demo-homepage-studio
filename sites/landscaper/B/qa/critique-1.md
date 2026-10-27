COPY: needs copy-chief (copy 8.0: four names for the primary action, readout dashes and empty "—" figures in the hero tool)

# landscaper-B (Half Inch Landscape Co.), critique round 1 (fast mode)

## Five-second test
- **1440-first.jpg:** "A landscaper in Austin who builds yards that use less water. There's a water calculator in the middle, but it shows dashes instead of numbers. To the right is a big grey box with 'hero-01' in tiny type, so the site looks unfinished. To act, I'd call the number in the header or press 'Price my yard', which sits at the very bottom edge."
- **390-first.jpg:** "Same headline, but the whole page is pushed about 160px to the right. The call button in the header is cut off past the right edge and the page scrolls sideways." What it is and where: yes. Why them: only the subline ("water budget your lot actually has") says it.

The thesis (the page as an irrigation controller) only shows up in the reduced-motion full page. With motion on, the zone cards and reviews never appear, and every photo is a grey placeholder.

## First screen: 6.5
Earned: the h1 names the trade outcome and the city. The phone number is in the header. A proof line under the h1 carries a SAMPLE RATING label. The tool-first hero is an unusual and brave composition.
Deductions:
- 1440-first.jpg: the h1 is set in a column of about 330px, so it runs **8 lines** and pushes "Price my yard" to y≈846-895. The secondary "See the process" is below the fold (−0.5 for > 3 lines, and the composition reads as a broken column).
- 1440-first.jpg: the hero photo slot is a flat grey box with the caption "hero-01" floating at mid-right, so a third of the first screen is visibly unfinished (scored under photo; here it costs the composition −0.5).
- 1440-first.jpg: the hero tool shows "— gal/wk" everywhere, with an empty sq ft input. The concept promised a default "Z1 Front Lawn · 18 min · 420 gal/wk", and the signature readout is dead on arrival (−0.5).
- 390-first.jpg: the h1 runs **5 lines** (−1.0). The content is offset about 160px right by the overflow, and the header call button is clipped off-canvas.

## Distinctiveness: 7.5
Earned: in 1440-rm-full.jpg the zone tag primitive appears in the hero (Z0 · BUDGET), the services grid (Z1…Z10 tags with right-aligned labels), the tools (TOOL A / TOOL B), the reviews (NOTE 01…) and the footer roster. That is ≥ 4 sections, and the pairing of Space Grotesk, Albert Sans and DM Mono reads technical rather than "garden".
Deductions:
- 1440-full.jpg and 1440-scroll-75.jpg: with motion on, the services zone grid and the review notes are not rendered, so a real visitor never sees the signature in 2 of its 4 sections (−0.5).
- 1440-rm-full.jpg: the services grid is a standard 3-column card grid, and so are the tools and the reviews: the same "eyebrow + h2 + card grid" shape 3 times (−0.5).
- 1440-rm-full.jpg: mono micro-labels and tracked caps eyebrows sit above every heading (ZONES Z1-Z10, PLAN → PLANT, SCHEDULE + COST, ZONE NOTES, COVERAGE…), an AI-slop tell (−0.5).
- The gallons-per-week readout that should count up on scroll never shows a number in any frame. The motif is mostly tags, and the "metered" idea doesn't land (cost included above).

## Typography: 7.5
Earned: a sound pair from the catalog plus a declared mono accent. The h2s are well scaled ("Two numbers before you sign anything", 1440-scroll-50.jpg), and body text is at full ink.
Deductions:
- 1440-first.jpg: the display h1 breaks after almost every word (Yards / that / keep / their / cool…), with no rag control (−0.5).
- 1440-first.jpg and 1440-scroll-50.jpg: 3+ tiny tracked caps labels in one view (LANDSCAPING · AUSTIN, TX / YARD SIZE / CURRENT MIX / SAMPLE ESTIMATE; STEP 01-04 boxes) (−0.5).
- 1440-first.jpg: the readout card mixes mono at 16px and 13px with Albert labels inside a 260px column, so the type gets cramped and wraps "Native + gravel plan: / — gal/wk".
- 1440-scroll-50.jpg: the step body text is about 15px grey-green and looks lighter than the full ink of the lead.

## Layout and rhythm: 6.5
Earned: tones alternate (paper / mist / paper / mist / paper / deep / paper / accent / deep), and the process split with a vertical rule is an asymmetric section.
Deductions:
- 1440-full.jpg: the "break" band is a full-bleed grey placeholder about 1.5 screens tall with a black slab on its right. Together with the unrevealed services grid (1440-scroll-25.jpg is an entirely blank paper frame), that leaves blank gaps over half a screen (−0.5, and visually far worse).
- 1440-first.jpg: the hero grid is lopsided, with an h1 column of about 330px, a 315px tool card, and a photo slot floating at y 333-745 that is not aligned to either column (−1.0, the "lopsided grid" deduction).
- 1440-scroll-75.jpg: the reviews band is an empty deep slab of about 800px under its heading when motion is on.
- 1440-rm-full.jpg: the ZIP check band ("Do we reach your street?") has a left column and a grey placeholder on the right with a large dead area under it.
- 1440-rm-full.jpg: the deep reviews band touches the accent-green quote band only through a thin paper strip, and then the accent band runs into the deep footer. The accent/deep pair reads as one dark block (−0.5).

## Photo and video: 4.0
- dist/index.html, 1440-full.jpg, 390-full.jpg: **all 8 images are `media/placeholder-*.jpg`** with alt text "Placeholder for hero-B1" and so on. No photograph of a yard, plant, or hand appears anywhere on the page, and there is no video. Region, grade and crop can't be judged, because there is nothing to judge. This is a mustFix: the page cannot be shown to a contractor.

## Copy: 8.0
Earned: the copy is specific to the trade and the region, which is the best thing on the site. Examples: "Break through caliche where needed, pick natives that match the light and the deer pressure" (1440-scroll-50.jpg), "A laminated zone card in the garage", "Natives that still look good in August". The Sample labels are present (SAMPLE RATING, SAMPLE ESTIMATE, SAMPLE REVIEW ×7, Sample pricing). The form success state is honest ("This demo keeps everything on the page").
Deductions:
- 1440-first.jpg, 390-first.jpg and 1440-rm-full.jpg: the primary action has four names: "Price my yard", "Price it", "Get this number" and "Get a real number for your yard" (−0.5).
- dist/index.html: 5 em dashes, some used as fake "no value" readouts (−0.5 for > 3).
- 1440-first.jpg: "based on city ET and typical zone counts" is jargon; a homeowner doesn't know what ET means.

## Mobile: 5.5
- render.json: **horizontal overflow at 390 (629px) and 320 (623px)**, caused by `div.header__actions` holding the open-now pill plus a full-label call button. This is a mustFix. 390-full.jpg is captured 629px wide, so the whole layout is shifted and the right third is empty.
- 390-first.jpg: the h1 runs 5 lines (−1.0, counted in firstScreen; here it adds to the cramped feel).
- 390-first.jpg: the header holds a 2-line wordmark ("Half / Inch"), a pill that reads "Closed · opens tomorrow 6:30 am", and a clipped call button. That is too much for 390.
- 390-first.jpg: the sticky bar (Call + "Price it") is good and above the fold.
- 390-full.jpg: the services grid and the reviews are missing with motion on (same reveal fault as desktop).

## Accessibility: 7.5
Earned: 390-rm-full.jpg and 1440-rm-full.jpg show every section, including services and reviews. There is one h1, the form steps have headings, and the sample labels are text.
Deductions:
- dist/index.html: the alt text on all 8 images is "Placeholder for …". Screen readers announce build scaffolding (−0.5; it disappears when the real photos land).
- 1440-first.jpg: the SAMPLE ESTIMATE tag in light grey on white looks under 4.5:1. Verify with axe and raise it to ink.
- Contrast on the mist band is fine. Focus can't be judged from the frames; no deduction.

## Motion and interaction: 6.0
Hooks present in dist: data-reveal (29), clip reveals (8), stagger, data-split lines/chars, data-count, and the process wipe rule. That is enough variety on paper.
Deductions:
- 1440-scroll-25.jpg (blank paper frame), 1440-scroll-75.jpg (empty reviews band) and 1440-full.jpg: reveal targets stay hidden while the viewport is on them. Content invisible with motion on is a mustFix (the content exists in 1440-rm-full.jpg, so this is a trigger/threshold bug, not missing markup) (−1.5).
- 1440-first.jpg: the data-count readout never counts and shows "—". The signature motion idea ("readout counts up as you scroll") is not visible in any frame (−0.5).
- dist/index.html: `transition: all var(--dur-ui)` (counted in polish).

## Wow moment: 6.5
Earned: putting a water-budget calculator in the hero is a real idea tied to the thesis and the buyer.
Deductions:
- 1440-first.jpg: its output is "— gal/wk" until the visitor types, and when filled it is a plain text line (−1.0 for "tool output is a plain text line"). There is no zone-schedule graphic and no bar of turf versus native.
- 1440-rm-full.jpg: the process wipe has no photos to wipe between (placeholders), so the second moment doesn't exist yet (−0.5).

## Polish: 6.0
Earned: favicon, apple-touch, OG, JSON-LD and an @media print block are present in dist. The radius is mostly square throughout.
Deductions:
- dist/index.html: `transition: all` (−0.5).
- 1440-full.jpg: grey placeholder boxes carry debug captions ("hero-01", "region-austin-home"), which reads as a build artifact on screen (−1.0).
- 1440-rm-full.jpg: the footer credits read "Photo by unknown on Pexels" ×8, and static.json flags 8 `<a>` elements without href (the check already counts these; this note is about the unfinished look only).

## Arithmetic
14×6.5 + 12×7.5 + 10×7.5 + 10×6.5 + 8×4.0 + 8×8.0 + 7×5.5 + 7×7.5 + 12×6.0 + 8×6.5 + 4×6.0
= 91 + 90 + 75 + 65 + 32 + 64 + 38.5 + 52.5 + 72 + 52 + 24 = **656 / 100 = 6.56**

Verdict expected: **FIX** (photo, mobile and motion below their floors; render.json has errors; mustFix is not empty).

## Must
1. **render.json, 390-first.jpg, `.header__actions`:** horizontal overflow at 390 (629px) and 320 (623px). **Fix:** under 640px, hide `.open-now-pill` in the header (keep it in the hours band), collapse `.btn-call` to a 48×48 icon button with `aria-label="Call {{biz.phone}}"` (the sticky bar already carries the labelled call), and set `.header__actions{min-width:0;flex-shrink:1}`. Then re-run check-render at 320 and 390 with zero overflow.
2. **1440-full.jpg, 390-full.jpg, every `<img>` in dist:** all 8 photos are `media/placeholder-*.jpg`, with alt "Placeholder for …". **Fix:** place the approved niche-library frames with the `[[img]]` macro for every slot (hero-B1, crew, break, story-1, story-2, season-heat, plants-native, tools-hand). Write real descriptive alt text and give the credits real hrefs.
3. **1440-scroll-25.jpg, 1440-scroll-75.jpg, #services and #reviews:** reveal targets stay invisible while in view with motion on. **Fix:** make the stagger reveal fire (ScrollTrigger `start:"top 85%"`, `once:true`, refresh after fonts and images load). Make the base state visible and add the hidden state only via a `.js-motion` class set when the trigger is registered, so a failed trigger never hides content.

## Should
- **1440-first.jpg, hero grid:** the h1 column is about 330px and the h1 runs 8 lines. Give the h1 at least 6 of 12 columns at 1440 and clamp it so it sets in ≤ 3 lines ("Yards that keep their cool / when Austin dries up"). Put "Price my yard" and "See the process" above y=760.
- **1440-first.jpg, hero tool:** the default output is "—". Prefill a 2,500 sq ft yard at 70% turf and show the computed numbers at load (the concept's "Z1 Front Lawn · 18 min · 420 gal/wk").
- **390-first.jpg, h1:** it runs 5 lines. Reduce the clamp minimum so it fits in 4 lines at 390 ("Yards that keep / their cool when / Austin dries up").
- **Copy, primary action:** pick one name, e.g. "Price my yard", and use it in the hero, sticky bar, tool button and quote band. The quote h2 can stay as a headline, but its button must match.
- **Hero tool note:** replace "based on city ET and typical zone counts" with "based on Austin summer evaporation and a typical zone layout".
- **dist/index.html:** replace `transition: all` with explicit properties (`transform, opacity, background-color, border-color`).
- **Em dashes:** use "0 gal/wk" or a skeleton bar for empty readouts instead of "—", and keep ≤ 3 em dashes in the prose.
- **Eyebrows:** drop the tracked caps eyebrow on at least half the h2s (keep it where it carries a zone tag that means something).
- **1440-rm-full.jpg, ZIP band:** the right column is a lone placeholder. Make it the zone-roster map or the ZIP list, and remove the dead space.
- **1440-rm-full.jpg, accent quote band → deep footer:** put the paper tone between them, or switch the quote band to paper with an accent frame.

## Elevate
- **Photo (4.0): make the photos meters.** Once real frames are in, give each one a zone-rule caption bar (zone tag + mono "gal/wk" readout) as its frame. Cut a plan → work → result sequence across story-1 → story-2 → plants-native, and give all of them one warm, dry Hill-Country grade so they read as one shoot on one street.
- **Mobile (5.5): compose the phone as the controller's handheld.** At 390, put the hero tool directly under a 3-line h1 as a compact "zone dial" (yard size chips plus a turf slider, with the result in one big mono line). Show the services as a swipe-free stacked zone list (tag, name, one line). The sticky bar becomes the controller's two buttons. Every section should show a phone-specific decision rather than the desktop grid collapsed.
