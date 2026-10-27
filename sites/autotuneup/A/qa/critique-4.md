COPY: ok

# autotuneup-A: critique round 4 (final)

**Five-second test (1440-first.jpg, 390-first.jpg):** "It's an oil change and tune-up place in Provo. They give each job a posted time, about 30 minutes. I can book a time or call (801) 555-0188. Why them: I know how long it takes and where my car is at each minute." All four answered.

**What changed since round 3 (seen in the screenshots):**
- The Hand-back drawing exists now (1440-scroll-25.jpg).
- The motion-on thumbs render drawn instead of empty (1440-full.jpg).
- The hero strip carries the station drawings (1440-first.jpg).
- Section eyebrows are now clock positions.
- The menu tab numerals are replaced by durations.
- The menu panel's empty right third is filled.
- The 390 strip keeps its station names.
- The radius is mostly unified.

## First screen: 9.5
- 1440-first.jpg: the h1 is 6 words on 2 lines and covers trade, city and outcome. There is one solid primary and an outline call, and the phone shows in both the header and the hero. The proof line has hours, area and a "Sample rating" pill. The deep band peeks about 65px. The signature fills the lower hero: the stopwatch sits over six drawn stations on a road with the car.
- 390-first.jpg: the h1 runs 3 lines, both actions are above the fold, there is a sticky Book/Call bar, and the strip keeps its station names.
- Not 10: at 1440 the diagram band takes about 40% of the fold and adds nothing to the reason to call.

## Distinctiveness: 9
- The clock now labels the page: "At 02:00: tell us what's due" (1440-scroll-25.jpg), "At 20:00: the oil goes in" (1440-scroll-50.jpg), "Before 00:00: is your ZIP on the list?" (1440-scroll-75.jpg) and the footer "31:00" (1440-full.jpg). The signature organises the hero, the dial, the menu durations, the lap sheet and the DONE reviews.
- Not 9.5: with the logo covered, the oil table and the canyon band (1440-full.jpg) could belong to any shop.

## Typography: 9
- 1440-scroll-75.jpg: curly quotes in the display pull-quote. Tabular mono times (1440-scroll-25.jpg). A giant 31:00 numeral and the en-dash range $69–$99 (1440-full.jpg).
- 1440-scroll-25.jpg: several tiny mono labels share one view ("3 min", "1 min", "Levels read").

## Layout: 9
- 1440-full.jpg: a good tone run and varied families. The #menu panel now uses the full width with its drawing.
- 1440-scroll-50.jpg: about 120px of empty tangerine under the coffee card.
- 1440-scroll-75.jpg: the stair-stepped reviews leave dead space under card 1.

## Photo and video: 9 (judged on the drawn treatments)
- 1440-scroll-25.jpg: the six-station set is now complete, with Hand-back drawn as a key and ticket tagged "Keys back".
- 1440-first.jpg: the same drawings appear small in the hero strip, so the set reads as the visit's record.
- 1440-full.jpg: the motion-on thumbs are no longer blank.
- Not higher: the canyon sunset (1440-full.jpg) is a generic vignette outside the station sequence.

## Copy: 9
- Strong points: trade nouns, the honest "No upsell to a better bottle", Sample pills on reviews, rating and licence, and one action name throughout (1440-scroll-50.jpg, 1440-scroll-75.jpg).
- The canyon caption "Up the canyon on a fresh rotation…" (1440-full.jpg) is still a lifestyle line.

## Mobile: 9
- 390-first.jpg: passes. 390-full.jpg: the stations re-stack with their drawings, the planner chips are thumb-sized, and render.json reports clean overflow at 320 and 390.
- 390-full.jpg: the page is about 15 screens long, and the oil table becomes three repeated stacks.

## Accessibility: 9
- dist/index.html: decorative images have alt="", there are live regions and a 3px focus ring.
- 1440-scroll-25.jpg: the dial has a visible text equivalent.
- 1440-rm-full.jpg: all content is present, with the dial static at 31:00.
- JS-off is not evidenced in fast mode.

## Motion: 9
- Working: the stopwatch laps and the car drives (1440-first.jpg), the dial sweeps (1440-scroll-25.jpg), the lap strip tracks sections, and the DONE stamps land (1440-scroll-75.jpg).
- The table, the canyon and the hours have no entrance (1440-scroll-50.jpg).

## Wow: 9
- 1440-scroll-25.jpg: the dial plus the drawings. 1440-scroll-50.jpg: the lap sheet. The hero strip now shares the dial's drawings.
- The planner sheet still doesn't drive the clock.

## Polish: 9
- dist/index.html: the meta, icons, JSON-LD, print and forced-colors are all present. Radius is unified on a --radius token with pills for buttons and tags (1440-scroll-75.jpg, 1440-scroll-50.jpg).
- Stray 2px and 18px radii remain in the CSS.

## Arithmetic
14×9.5 + 12×9 + 10×9 + 10×9 + 8×9 + 8×9 + 7×9 + 7×9 + 12×9 + 8×9 + 4×9
= 133 + 108 + 90 + 90 + 72 + 72 + 63 + 63 + 108 + 72 + 36 = 907 / 100 = **9.07**

## Must
None. static.json and render.json are clean, and nothing is blank or broken in 1440-rm-full.jpg or 390-full.jpg.

## Should
1. **Where:** the canyon band caption (1440-full.jpg). **Problem:** a lifestyle line. **Fix:** "After 31:00: drive home with the next due mileage on your ticket."
2. **Where:** the tangerine #wait band, under the coffee card (1440-scroll-50.jpg). **Problem:** about 120px of dead space. **Fix:** cut the bottom padding to match the other bands.
3. **Where:** the reviews stair-step (1440-scroll-75.jpg). **Problem:** dead space under card 1. **Fix:** reduce the offsets to 24px/48px, or align the card bottoms.
4. **Where:** the stations list, right column (1440-scroll-25.jpg). **Problem:** the "3 min" label stacks over the time in tiny mono. **Fix:** merge them into one line, "30:00 · 3 min", at 14px.
5. **Where:** the oil table at 390 (390-full.jpg). **Problem:** it collapses into three repeated stacks. **Fix:** use a 3-column compact grid with short cells, or a type switcher.

## Elevate
- **Wow (9, weight 8):** make the three clocks one clock. When the visitor picks jobs in the planner, the dial hand and the hero stopwatch jump to the new out-the-door time, and the lap sheet prints with the same station drawings.
- **Distinctiveness (9, weight 12):** bring the oil table and the canyon into the clock. Present oil types as the 20:00 lap card in the station-drawing language, and turn the canyon into the "after 31:00" lap on the hero's road line.
