COPY: needs copy-chief (copy 8.5: primary action has two names, tricolon footer headline, "Placeholder for …" alt text on 8 images)

# pool-B critique, round 1 (fast mode)

Round 0's blank page is fixed: every section renders and the reduced-motion shots show all the content (1440-rm-full.jpg, 390-rm-full.jpg). The page is now judged on its design.

## Five-second test
- **1440-first.jpg**: "Clear Reading, an Orlando pool service. Every visit I get a report that puts each of seven water readings on a scale next to its ideal range. I can tap 'Get my number' or call (407) 555-0138. It's open now, they've been in Orlando 9 years, and the rating is marked Sample." All four questions are answered. The Visit report card is the signature, and you see it at once.
- **390-first.jpg**: the same answers. The h1 runs 3 lines, both buttons sit above the fold, and the sticky call bar shows. The report card starts to show at the bottom.

## First screen: 9.0
- What earned it (1440-first.jpg): a 6-word h1 that gives trade, city and outcome. One teal primary button and a quieter outlined phone button. A proof line with a "Sample rating" tag. The teal band peeks about 64px. The gauge-scale report card makes this hero belong to this concept and no other.
- 390-first.jpg: h1 is 3 lines, both actions are above the fold, and the phone shows in the header and the bottom bar.
- Holding it at 9: the panel behind the report card is a placeholder gradient with diagonal hatching, not water (1440-first.jpg). The card has to carry the whole composition alone. That cost goes to Photo, not here.

## Distinctiveness: 8.5
- What earned it: the gauge scale does real work. You see it in the hero report (1440-first.jpg), on the service rows as mini-gauges (1440-scroll-25.jpg), in the rating gauge and the gallons-calculator output (1440-scroll-75.jpg, 1440-full.jpg), and in the footer's seven test-pad bars (1440-full.jpg, footer). That makes 4+ sections and passes the cover-the-logo test for the hero and the calculator.
- −0.5: a mono caps eyebrow sits over every h2 (SERVICES, ONE VISIT WRITTEN DOWN, REVIEWS, PRICES, SERVICE AREA, QUESTIONS, GET MY NUMBER; 1440-full.jpg). This is the AI-slop "eyebrow above every heading" tell.
- −0.5 (judgement call, not a §3 deduction): sibling overlap. pool-C (sites/pool/C/qa/screens/1440-first.jpg) uses the same teal solid primary button and the same "Get my number" label, and pool-A uses that label too. Put the screenshots side by side and the conversion layer reads as one template.
- The story section is a standard sticky list beside stacked image cards (1440-scroll-25.jpg, 1440-scroll-50.jpg). The signature is missing there, so the most "storytelling" band carries no motif.

## Typography: 8.5
- What earned it: Outfit display with tight tracking against IBM Plex Mono for readings, prices and labels. That's the right pair for a concept built on readings. Tabular mono numerals in the price table and the "19,200 gallons" output (1440-scroll-75.jpg) give one real scale-contrast moment. En-dash ranges ("7.2–7.8"), body ≥ 16px.
- −0.5: on the phone the office hours break as "7:30 am – 5:30 / pm", with "pm" orphaned on its own line in every cell (390-full.jpg, #area hours grid). At 1440 Saturday breaks "8 am – 1 / pm" (1440-full.jpg).
- −0 / watch: buttons set in mono ("Get my number", "Book a water test") read as code rather than as an action (1440-first.jpg). The quote at the top of the reviews is set in a light weight that sits close to the body grey.

## Layout and rhythm: 8.5
- What earned it: the tones alternate cleanly: paper → teal tool → paper services → navy story → full-bleed water break → white reviews → sand prices → navy area → paper FAQ → sand form → navy footer (1440-full.jpg). The services rows form a dense ruled list, the full-bleed break works as breath, and the prices/calculator pair is dense on purpose.
- −0.5: #story at 1440. The left column (heading plus "logged" checklist) is sticky, so for most of the scroll the left 45% of the screen is empty navy (1440-scroll-50.jpg: the left half is blank above and beside card 04).
- −0 / watch: the reviews band also carries the guarantee/license strip (1440-full.jpg). It's acceptable because the strip is styled as its own inset bar.
- +0.5: the full-bleed water break with the "Clear water is a reading, not a guess." tag is a deliberate grid break. The FAQ and form bands are quiet, so the scroll has a shape.

## Photo and video: 5.5
- The page has no photography. All eight `<img>` are 122-byte placeholder files (dist/media/*.jpg) shown as CSS gradients with diagonal hatching: the hero panel (1440-first.jpg), the teal tool's side image (1440-full.jpg), all four story cards (1440-scroll-25.jpg, 1440-scroll-50.jpg), the full-bleed break (1440-scroll-50.jpg) and the service-area image, which reads as a blurred sky over a green field (1440-full.jpg, 390-full.jpg).
- Story captions such as "Clean the filter when the gauge says so" sit under a beige stripe pattern (1440-full.jpg). The caption promises a picture and none is there.
- Alt text on every image reads "Placeholder for hero-B1", "Placeholder for salt-cell"… (dist/index.html). The alt describes nothing.
- This is below the anchor-6 description: a visitor sees no pool, no water, no equipment anywhere. mustFix.

## Copy: 8.5
- What earned it: plain contractor voice with trade nouns: salt-cell output, filter pressure, "White crust on the tile line", "Pump hums, screams or trips" (1440-full.jpg, tick tool). The guarantee is lifted straight from facts.json. "Four short steps. Nothing is booked until we have talked." works as microcopy at the moment of doubt. Every review, price and the license carries a Sample tag.
- −0.5: the primary action goes by different names: "Get my number" (hero, mobile bar, form eyebrow), "Book a water test" (tick tool), "Price it" (service rows) (1440-full.jpg).
- −0.5: the footer headline "Seven readings. Every visit. Written down." is a tricolon (1440-full.jpg, footer).
- Note: the "Placeholder for …" alt strings are copy a screen-reader user hears 8 times. They're covered by the Photo mustFix.

## Mobile: 8.5
- What earned it: no overflow at 320 or 390 (render.json). The h1 runs 3 lines. Buttons go full-width (390-first.jpg). Services are restacked with the gauge under the blurb. The tick tool becomes a single column of 48px+ rows, and the calculator inputs pair up (390-full.jpg).
- −0.5: the hours grid wraps "pm" onto its own line in every cell (390-full.jpg, #area). The two-up day grid is too tight at 390.
- −0 / watch: the hero report card starts below the fold on the phone, so the signature only shows as a sliver (390-first.jpg). That's acceptable, but the phone has no hero re-cut of its own.

## Accessibility: 8.5
- What earned it: render.json reports no errors. Reduced-motion full pages show every word (1440-rm-full.jpg, 390-rm-full.jpg). The ZIP input and calculator fields have visible labels (1440-scroll-75.jpg). dist has a 3px focus outline in var(--focus), a forced-colors block and a sensible heading order (one h1, then h2/h3).
- −0.5: eight images announce "Placeholder for …" (dist/index.html). Counted once, under the Photo mustFix.
- −0 / watch: light grey service blurbs on paper (1440-scroll-25.jpg) and the "ideal 7.2–7.8" captions are near the contrast floor. Verify they are ≥ 4.5:1.

## Motion and interaction: 8.0
- What earned it: the dist hooks go beyond plain reveals: data-split (lines/chars), data-reveal clip / scale / fade, staggered reveals, and 6 `data-sw-signature="gauge-scale"` hooks. Easing is expo-out and in-out; there's no bounce. The tick tool and the calculator are live interactions.
- Held at 8: the scroll frames show finished, static states (1440-scroll-25.jpg, -50, -75). No frame shows motion that *explains* anything. The concept's "test pads fill as you scroll / markers slide into the ideal band" story can't be seen. The story band's "logged" checklist (1440-scroll-25.jpg) doesn't visibly change between frames: at -25 "Water tested" is active, and at -50 the left column is blank.

## Wow moment: 8.5
- What earned it: two tools speak the signature's language. The hero Visit report ("7 of 7 in range", 1440-first.jpg) and the gallons calculator, whose answer lands as a big mono figure on a gauge with a shaded "most pools" band (1440-scroll-75.jpg). A homeowner would actually use the calculator.
- Held at 8.5: the tick-what-you-see tool shows only a plain status line before you interact ("Tick what you see. We will tell you what it usually means.", 1440-full.jpg). Its result isn't drawn as a test-pad reading, and the signature never moves on screen (see Motion).

## Polish: 8.5
- What earned it: SVG favicon, apple-touch, OG image, JSON-LD, theme-color, a print stylesheet and forced-colors handling in dist. Radius and rule weight are consistent. The footer is a designed close with the seven-pad strip.
- −0.5: the hatched gradient placeholders make the page look unfinished in four places (1440-scroll-50.jpg, 1440-full.jpg). The same root cause sits in Photo, so it is held to −0.5 here.

## Arithmetic
14×9 + 12×8.5 + 10×8.5 + 10×8.5 + 8×5.5 + 8×8.5 + 7×8.5 + 7×8.5 + 12×8 + 8×8.5 + 4×8.5
= 126 + 102 + 85 + 85 + 44 + 68 + 59.5 + 59.5 + 96 + 68 + 34 = 827 / 100 = **8.27**

Photo is below its floor (6) and there is a mustFix, so the verdict is **FIX**.

## Must
1. **Photo / all 8 image slots** (1440-first.jpg hero panel, 1440-scroll-25.jpg + 1440-scroll-50.jpg story cards and water break, 1440-full.jpg tool side image and service-area image; dist/media/*.jpg are 122-byte placeholders). The page has no real photography, and the alt text reads "Placeholder for …". **Fix:** the niche library `niches/pool/media/approved/` holds only placeholders, so this needs media curation (`/next-niche` media step for pool) to supply real approved frames: clear water surface for hero-B1, test vials, salt cell, filter cartridge, equipment pad, clear-after, an Orlando street. Re-place them with `[[img]]` so alt text comes from the manifest. Until then the site can't pass.

## Should
1. **#area office hours** (390-full.jpg, 1440-full.jpg): "pm" wraps onto its own line. Fix: set `white-space: nowrap` on each time range, and at <640px use one column (day | range) instead of the two-up day grid.
2. **Primary action naming** (1440-full.jpg): "Get my number" / "Book a water test" / "Price it". Fix: use "Get my number" everywhere it leads to the form. The tick tool's button becomes "Get my number". Service rows can keep "Price it" only if they jump to the price table, not the form.
3. **Footer headline** (1440-full.jpg, footer): drop the tricolon. Replacement: "If a reading is missing, the visit is free."
4. **Eyebrows** (1440-full.jpg): remove the mono caps eyebrow from at least 4 of the 7 h2s (keep REVIEWS + Sample tag, PRICES). Let the headings stand alone.
5. **#story left column** (1440-scroll-50.jpg): the sticky list leaves the left 45% empty. Fix: shrink the image column to about 50% and make the left checklist the progress readout: each row's swatch fills and the "logged" text turns to ink as its card enters. Then the empty half carries the story.
6. **Buttons in mono** (1440-first.jpg): set button labels in Outfit 600 and keep mono for numbers and readings only. Mono then stays the "reading" voice.
7. **Contrast check** (1440-scroll-25.jpg): confirm the service blurb grey and the "ideal …" captions are ≥ 4.5:1 on #f5f3ee. If not, darken them to the ink at 75%.

## Elevate
- **Photo (5.5)**: once real frames exist, make photography part of the gauge system rather than separate pictures. Each story card gets a test-pad colour edge and a reading overlay set in the report's language: for example "Filter 18 psi · ideal 10–20" over the cartridge photo. The full-bleed water break then reads as the "after" of the hero reading. Photo and signature become one sequence: the reading, the work, the clear water.
- **Motion (8.0)**: give the signature one motion a visitor could describe: "the numbers settle into their ideal bands as you scroll". In #story, each card's entry drives its gauge marker from out-of-range into the shaded band, and the matching "logged" row fills. In the footer, the seven pads fill left to right on entry. The hero report runs the same settle once on load, under 1.2 s.
