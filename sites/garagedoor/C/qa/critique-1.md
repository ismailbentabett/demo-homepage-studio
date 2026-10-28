COPY: needs copy-chief

# garagedoor-C · critique round 1 (fast mode, scored as strict)

**Five-second answer (1440-first.jpg, 390-first.jpg):** "Garage door repair in Omaha. My door won't open on a cold morning, so I call the number or text a photo. Why them: they quote a spring-pair range up front and pick up emergencies." Clear on both sizes. The big "8°" graphic reads as a cartoon of a house in a number, not as "−8°": the minus sign is a small separate house tile on the left that looks like a stray thumbnail.

Checks: static.json and render.json are clean (no overflow at 320/390, no errors). Nothing is counted twice.

## firstScreen: 8
- Earned: the h1 is plain homeowner language with curly quotes, the eyebrow names trade + city, there is one loud amber Call plus a quieter "Text a photo", the phone is in the header and the button, and the proof line (open-now, emergency, 4.9 Sample rating) sits under it (1440-first.jpg). At 390 the h1 runs 4 lines and both actions sit above the fold (390-first.jpg).
- −0.5: the h1 is 10 words, over 8, and it never says "garage door" or "Omaha"; the eyebrow carries both (1440-first.jpg).
- −0.5: the next band does not peek at 1440. The hero fills the full 900px and nothing of the paper band shows (1440-first.jpg).
- +0.5 for the intent of the type mask, −0.5 for how it lands: the mask shows a flat vector scene, not a photo. The "−" is detached into a house tile at x≈60–230 that reads as a thumbnail, so the reading looks like "8°". The top half of the hero is a loose scatter (mask left, price card right, an empty 450px middle) (1440-first.jpg).
- Three actions in the hero row (Call, Text, "Price my repair →"), and at 390 the mobile bar repeats Call/Text right under the hero buttons, so four call/text targets show in one view (390-first.jpg). Not deducted twice; listed under Should.

## distinctiveness: 8.5
- Earned: the degree stamp works as real structure. It orders the story (104 → 88 → 34 → −8, 1440-scroll-25.jpg), it leads every price-sheet row, it tags each review card with its season (1440-scroll-75.jpg), it is the checklist score box and the footer "0°" (1440-full.jpg). The navy, frost-white and amber palette and the Arvo slab are unlike A (black, orange, condensed sans, a photo of the spring) and B (grey, yellow, mono).
- −0.5: the story's left panel is a black-line garage-door drawing with springs on a white field (1440-scroll-25.jpg). It sits in the same visual family as sibling B's technical drawing hero (B/1440-first.jpg). Cover the stamp and it could be B.
- −0.5: the "frost edge" is rows of tiny twig/arrow glyphs on every card border (1440-scroll-25.jpg, 1440-scroll-75.jpg). They read as decoration, not frost, and they never grow with the temperature in any frame I can see.
- +0.5: the stamp organising the price sheet coldest-first is a real idea (1440-rm-full.jpg).

## type: 8.5
- Earned: Arvo 700 display with Libre Franklin text is a characterful pair, the display tracking is tight, prices use tabular figures, and the large Arvo 400 review quote against small attribution is a real scale-contrast moment (1440-scroll-75.jpg).
- −0.5: there is a tracked-caps eyebrow over every h2 ("FOUR READINGS, ONE YEAR", "WHAT WE FIX", "TWO CHECKS YOU CAN DO FROM THE DRIVEWAY"…), plus the caps "SAMPLE PRICING / SAMPLE REVIEW" boxes. That makes 3+ tiny caps labels per view (1440-scroll-75.jpg, 1440-scroll-25.jpg).
- The service headline "Ten jobs, from the first bang to the fall tune-up." sets in 4 lines in a narrow column (1440-scroll-50.jpg). No orphan, but it is heavy for the column.

## layout: 8.5
- Earned: the tones alternate cleanly (deep hero, paper story, deep "Don't touch the spring", paper services, deep break, paper prices, mid reviews, paper tools, amber contact, deep footer), with no two dark bands touching (1440-full.jpg). Reviews are a varied mosaic with one big lead card (1440-scroll-75.jpg).
- −0.5: the same "heading left, list or table right" shape is used 3 times: the stop band, the services and the prices (1440-full.jpg, 1440-scroll-50.jpg).
- The services left column is empty below the h2 for about 250px at 1440 while the 10-row list scrolls on the right (1440-scroll-50.jpg). The heading should stick or the column should carry something. Kept to Should.
- Tools and area are two paper bands back to back (1440-rm-full.jpg). Not 3, so no deduction.

## photo: 6.5
- The page has **no photograph or video at all**: the built page has zero `<img>`, `<picture>` and `<video>` elements, and every image is a vector illustration (1440-first.jpg, 1440-scroll-25.jpg, 1440-full.jpg). The concept says the blue-hour snow photo shows through the "−8°" (02-concept.md §3, §6), and that photo is not delivered.
- For the homeowner this costs trust: there is no real door, no real driveway in snow, no real hardware anywhere in 12,000px. The illustrations are tidy, but flat clip-art houses read as a template, not as a crew in Omaha.
- No off-topic frames, faces or logos. That is why it stays above the floor.

## copy: 8.5
- Earned: specific, trade-real voice. "Pull the red release cord only if the door is down and sitting level", "Text us a photo of the gap in the coil. We'll know which spring to bring", "Ranges, not quotes" (1440-rm-full.jpg). Reviews and prices carry Sample labels everywhere (1440-scroll-75.jpg). No em dashes.
- −0.5: there is an arrow on every link. Ten "Price it →" rows plus "Price my repair →" and "Call … →" (1440-scroll-50.jpg, 1440-scroll-25.jpg).
- The price sheet gives temperatures with no source: "10 °F" for a new insulated door, and "34 °F" for the fall tune-up, while the story uses 34 °F for the frozen seal (1440-rm-full.jpg). The signature's numbers contradict each other. Listed under Should.
- "What the neighbours said" uses British spelling on an Omaha site, while Doug's review says "neighbor" (1440-scroll-75.jpg region, 1440-full.jpg).

## mobile: 9
- Earned: no overflow at 320 or 390 (render.json). The hero is re-cut with a smaller mask above the h1, the h1 runs 4 lines, both actions are above the fold, and there is a sticky Call/Text bar (390-first.jpg). The story becomes stacked cards, and the services list and reviews stack cleanly (390-full.jpg). There are 900px breakpoints for the two-column bands.
- The mobile bar covers the second half of the proof line on the first screen (390-first.jpg, the "4.9 Sample rating" line is cut). Should.

## a11y: 9
- Earned: the reduced-motion full page shows every word. All four story scenes show as a static 2×2 grid, and the checklist, estimator and form are all visible (1440-rm-full.jpg, 390-rm-full.jpg). There is one h1, the h2 → h3 order is clean, a skip link, and a forced-colors block. Amber text never sits on paper; the dark-amber accent is used there instead (1440-scroll-50.jpg).
- Nothing to deduct from the shots. I cannot show the focus ring in a screenshot, so this is not a 9.5.

## motion: 8.5
- Earned: the story pins with a stamp count (1440-scroll-25.jpg shows the −8°F state with the 104/88/34/−8 timeline under it), the h1 splits by line, there are reveal variants, and the reduced-motion fallback is complete (1440-rm-full.jpg). The hooks go well beyond plain reveals.
- −0.5: the motion only explains something in one place (the countdown). The concept's frost growth with `--cold` cannot be seen. The twig border in 1440-scroll-25.jpg is identical to the 104° state's border in 1440-rm-full.jpg, so the second half of the signature does not move.

## wow: 8
- Earned: the "Omaha's year, read off the thermometer" countdown is tied to the trade and the city (1440-scroll-25.jpg). The winter-ready checklist with a stamp score is something a homeowner would actually tick (1440-rm-full.jpg).
- −0.5: the hail tool's output is a plain "$380 to $850 per section" text line (1440-rm-full.jpg, tools band). It is not set in the stamp language.
- −0.5: the hero moment, which should be the wow (light through a frosted "−8°"), lands as a vector cartoon (1440-first.jpg).
- +0.5: the checklist score in a stamp box is good.

## polish: 9
- Earned: one stroke weight in the icons, the 2px rule boxes are consistent, there is an OG image, JSON-LD `HomeAndConstructionBusiness`, a print stylesheet and forced-colors handling (dist/index.html). The footer close is designed around a big "0°" stamp (1440-full.jpg).
- The price card in the hero has a stray trailing middle dot: "most two-car doors ·" before the Sample label wraps (1440-first.jpg). Should.

## Arithmetic
14×8 + 12×8.5 + 10×8.5 + 10×8.5 + 8×6.5 + 8×8.5 + 7×9 + 7×9 + 12×8.5 + 8×8 + 4×9
= 112 + 102 + 85 + 85 + 52 + 68 + 63 + 63 + 102 + 64 + 36 = 832 / 100 = **8.32** → ELEVATE (fast window 8.0–9.0). Photo 6.5 is below the fast pass mark of 8.0 but above the floor of 6.

## Must
- None. All reviews, the rating and the prices carry Sample labels. No invented claims are visible. Reduced motion shows everything, and there is no overflow.

## Should
1. **#hero type mask (1440-first.jpg).** Problem: the "−" is a separate house tile, so the reading looks like "8°", and the mask holds vector art. Fix: set "−8°" as one glyph run in the mask, with the minus inside the same clip, and fill it with an approved snow or driveway photo from the niche manifest. Make the mask about 60% of the hero width so the empty middle closes.
2. **#hero height at 1440 (1440-first.jpg).** Problem: no peek. Fix: cap the hero at `min(100svh - 80px, 860px)` so 40–80px of the paper band shows.
3. **#hero actions + mobile bar (390-first.jpg).** Problem: 4 call/text targets in one view, and the bar covers the proof line. Fix: keep the mobile bar hidden until the hero buttons leave the viewport, and drop "Price my repair →" from the hero row at under 640px.
4. **#prices temperatures (1440-rm-full.jpg).** Problem: "10 °F" for the insulated door is arbitrary, and "34 °F" is used for both the fall tune-up and the frozen seal. Fix: use exactly the story's four readings (104 opener, 88 hail, 34 frozen seal → weatherstrip, −8 spring). Lead the insulated door and fall tune-up rows with a season word ("All winter", "October"), as the review cards do.
5. **Link arrows (1440-scroll-50.jpg).** Problem: there is a "→" on every link. Fix: keep the arrow only on the hero "Price my repair", and make the 10 service "Price it" links plain underlined text.
6. **#proof h2 (1440-full.jpg).** Problem: "neighbours" is British spelling. Fix: "What the neighbors said after the cold snap."
7. **Eyebrows (1440-scroll-25.jpg, 1440-scroll-75.jpg).** Problem: there is a caps eyebrow over every h2. Fix: drop the eyebrows on #readings, #services and #tools. Keep them only where they carry a fact (Sample pricing, Sample reviews).
8. **#services left column (1440-scroll-50.jpg).** Problem: the h2 floats with empty space under it while 10 rows scroll. Fix: make the h2 block `position: sticky; top: 120px` from 900px up, and add the "−8 °F" stamp for the first row under it.
9. **Hero price card (1440-first.jpg).** Problem: there is a stray trailing "·" before the Sample label. Fix: put the Sample label on its own line with no separator.

## Elevate
- **photo (6.5).** Make photography part of the thermometer. Fill every reading's frame with an approved photo graded to its temperature: warm, washed light at 104°, storm grey at 88°, a blue-hour slab at 34°, a near-monochrome frost-blue at −8°. Use the same image as the fill inside the hero "−8°" mask. The page becomes one shoot told as a falling temperature, and the line art can stay as a thin overlay that labels the spring and the seal on the real door.
- **firstScreen (8).** Make the first screen one frosted window instead of a scatter. Set the "−8°" mask as a single huge reading, full width and bleeding off the right edge, with the photo showing through it and the frost clearing from the centre on load. Set the h1 against its lower edge with the stamp-boxed sample spring price as the proof line under it. Size it so the paper band peeks at 1440 and the reading is impossible to misread as "8°".
