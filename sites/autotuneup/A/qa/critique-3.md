COPY: ok

# autotuneup-A, round 3 critique

**Five-second answer (1440-first.jpg, 390-first.jpg):** "Quarter Hour does oil changes and tune-ups in Provo, timed: about 30 minutes, you wait or drop it off. Book a time or call (801) 555-0188. Open now until 6 pm. The six stations and a stopwatch show me what happens while I sit." Passes on both viewports.

What changed since round 2: the empty road gradient in the hero is now a six-station split strip with the car on the road and the stopwatch on the checker line; placeholder frames are replaced by one drawn line-illustration system with alt=""; the planner output is now a lap sheet (Job / Time / Split, "Print the sheet"); pull-quote apostrophes are curly.

## First screen: 9
- 1440-first.jpg: h1 "Provo oil changes and tune-ups, timed." (6 words, 2 lines): trade, city and outcome. One filled primary plus an outline call. Phone shows in the header and the hero. Proof line has hours, area and a 4.9 rating with a Sample label. The signature (stopwatch at 02:00 "Lap 01" over the six-station strip) is visible, and the deep band peeks about 65px.
- 390-first.jpg: h1 runs 3 lines, both actions sit above the fold, and the sticky Book/Call bar is there.
- Not a 10: at 1440 the station strip and road take about 350px of hero and hold only labels and times, so the hero's lower half reads as a diagram, not a composition. The stopwatch sits on the checker line at the far right, cut off from the h1 (1440-first.jpg).

## Distinctiveness: 8.5
- The signature organises the hero strip (1440-first.jpg), the stations dial (1440-scroll-25.jpg), the menu duration badges and the planner lap sheet (1440-scroll-50.jpg), the "Split 01/02/03" review cards with DONE stamps (1440-scroll-75.jpg) and the "Done · 31:00" footer (1440-full.jpg). It does real work.
- Deduction carried over, not fixed: DM Mono micro-labels and middle-dot meta strings are still used as texture everywhere. The "01 / 10 Start" pill, the 01–06 numerals in the hero strip and again in the stations list, the menu tab numerals (1440-scroll-25.jpg) and "Done · 31:00" (1440-full.jpg) all count (−0.5). The numbering repeats in three neighbouring places, so it is losing meaning.

## Typography: 9
- 1440-scroll-75.jpg: curly quotes and apostrophes in the display pull-quote ("isn’t"). Unbounded display has tight tracking. Tabular mono for every time, and a giant footer numeral gives the scale contrast (1440-full.jpg). En-dash price ranges ($69–$99 in 1440-full.jpg).
- Not a 10: 1440-first.jpg strip labels "Check-in 02:00" are set at body size in a third family on a busy tint. 3+ tiny mono labels share one view in 1440-scroll-25.jpg ("3 min", "1 min", "05", "Levels read").

## Layout: 9
- 1440-full.jpg: the hero now ends on a light taupe road, so the deep stations band no longer merges with it. The tone run is paper → deep → paper → tangerine → paper → illustrated canyon → paper → taupe → paper → deep. Families vary: split list + dial, tabs + detail, chooser + ticket, table, full-bleed illustration, staggered cards, pull-quote, hours table, form, footer.
- Not a 10: 1440-full.jpg "What's due today?" leaves the right third of the detail panel empty under the intro paragraph. The hours band (1440-scroll-75.jpg bottom) opens with about 150px of empty taupe before its heading.

## Photo and video: 8.5
Judged on the drawn treatments, as instructed. The stock is a placeholder.
- 1440-rm-full.jpg, 1440-scroll-25.jpg: each station has a drawn teal-on-deep line illustration with a station number badge and a caption tag ("Levels read"). The menu icon (oil can and funnel) and the planner cup with stopwatch share the same stroke and palette (1440-full.jpg). The canyon illustration is in the same warm grade. The set looks like one hand and is tied to the signature. Decorative frames have alt="" (dist/index.html).
- Holding it at 8.5: 1440-full.jpg / 1440-rm-full.jpg show that station 06 "Hand-back", the payoff, is the only one with no drawing. No image tells the result (keys handed back, the ticket). 1440-full.jpg (motion) also shows the station thumbs as dark empty frames until they scroll into view, which will look blank in any static capture.

## Copy: 9
- 1440-scroll-50.jpg / 1440-scroll-75.jpg: trade nouns (cabin filter, coils, spark plugs, inversion morning, owner's manual), honest "No upsell to a better bottle", Sample pills on reviews, rating, prices and licence. "Book a time" is the one action name throughout (the planner ticket was renamed, 1440-scroll-50.jpg). 0 em dashes.
- Not a 10: 1440-scroll-50.jpg "You're out before your coffee's cold" and 1440-full.jpg "The car is the part we look after." lean on slogan endings.

## Mobile: 9
- 390-first.jpg: h1 3 lines, primary and call above the fold, sticky bar. 390-full.jpg: stations re-stack with the drawings, menu tabs become a chip scroller, thumb-sized planner chips, full-width ZIP. render.json overflow is clean at 320 and 390.
- Not a 10: 390-first.jpg puts the stopwatch on top of the station strip's top edge. The strip's "01…06" columns shrink to about 55px each and the station names drop out, so on the phone it is a row of numbers.

## Accessibility: 9
- dist/index.html: all 15 img now alt="" (decorative). The dial has a visible text equivalent ("Lap 6 of 6, hand-back, 31 minutes in", 1440-scroll-25.jpg). There are two aria-live="polite" regions, a 3px focus outline with 3px offset, a deep-teal ring rule for the tangerine band, and a clean h1>h2>h3. 1440-rm-full.jpg shows all content, the dial static at 31:00 and the stopwatch at 00:00.
- Not a 10: JS-off is not evidenced in fast mode.

## Motion: 9
- 1440-first.jpg: the hero stopwatch laps and the active station plus the car move across the strip ("Lap 01", check-in lit). 1440-scroll-25.jpg: the dial sweeps lap by lap to 31:00. The top lap strip tracks sections. DONE stamps land on the reviews (1440-scroll-75.jpg) and the lap sheet updates as you pick jobs (1440-scroll-50.jpg). One motion idea a visitor can name: the clock runs the visit.
- Not a 10: 1440-scroll-50.jpg / 1440-scroll-75.jpg show no role-specific entrance outside the signature (table, canyon and hours just appear). Micro-interactions on controls are not evidenced.

## Wow: 9
- 1440-scroll-25.jpg: the stations dial is the thesis. 1440-scroll-50.jpg: the planner output is now a lap sheet with Job / Time / Split, an "Out the door ~30:00" total and "Print the sheet". It is in the signature's language and worth keeping.
- Not a 10: the hero clock, dial and lap sheet are three separate clocks. The sheet doesn't pick up the dial's sweep or the hero strip, so the two moments don't feel connected.

## Polish: 8.5
- dist/index.html: SVG favicon, apple-touch, OG, theme-color, JSON-LD, print and forced-colors.
- Deduction carried over: mixed radius. 1440-scroll-75.jpg review cards are square, the 1440-scroll-50.jpg ticket is about 8px, buttons and tags are pills, and the ZIP input and menu tabs are square (1440-full.jpg) (−0.5).

## Arithmetic
14×9 + 12×8.5 + 10×9 + 10×9 + 8×8.5 + 8×9 + 7×9 + 7×9 + 12×9 + 8×9 + 4×8.5
= 126 + 102 + 90 + 90 + 68 + 72 + 63 + 63 + 108 + 72 + 34 = 888 / 100 = **8.88**

## Must
None. Check files are clean (static.json and render.json: 0 blockers, 0 warnings, 0 errors). The round-2 alt-text mustFix is fixed (all alt=""), and no media slot is visibly broken or blank in the reduced-motion shot.

## Should
1. **Where:** stations list, row 06 Hand-back (1440-full.jpg, 1440-rm-full.jpg). **Problem:** the only station with no drawing, and it is the payoff. **Fix:** add the sixth drawing in the same stroke (key on a ring over a folded ticket with "next due" mileage) with badge 06 and the tag "Keys back".
2. **Where:** station thumbs, motion-on (1440-full.jpg). **Problem:** frames render as dark empty boxes until revealed. **Fix:** start the drawing at full opacity with stroke-dashoffset 0 and run the draw-on from that drawn state, or reveal on load for rows above 2 screens, so static captures never show an empty frame.
3. **Where:** global radius (1440-scroll-75.jpg review cards, 1440-scroll-50.jpg ticket, 1440-full.jpg ZIP input and menu tabs). **Problem:** square, 8px and pill all at once. **Fix:** pick one card radius (e.g. 6px) for cards, ticket, tabs and inputs, and keep pill only for buttons and Sample tags.
4. **Where:** numbering texture ("01 / 10 Start" pill in 1440-first.jpg, 01–06 in the hero strip, 01–06 in the stations, 01–09 menu tab numerals in 1440-scroll-25.jpg). **Problem:** three adjacent numbered sequences make the numerals decorative. **Fix:** remove the numerals from the menu tabs (use the duration instead, "30 min"), and keep station numbers only in the stations section and hero strip.
5. **Where:** #menu "What's due today?" (1440-full.jpg). **Problem:** the right third of the detail panel is empty under the intro paragraph. **Fix:** move the intro paragraph into the left column under the h2 and let the detail panel plus drawing span columns 5–12.
6. **Where:** hours band top (1440-scroll-75.jpg). **Problem:** about 150px of empty taupe before the heading. **Fix:** cut the band's top padding to match the other sections (clamp(64px, 8vw, 120px)).
7. **Where:** 390-first.jpg hero strip. **Problem:** station names drop out and the strip becomes a row of numbers under the stopwatch. **Fix:** at ≤ 640px, show the strip as 3 columns × 2 rows with names, or as one horizontal scroller with names, and move the stopwatch to the right edge of the action row.
8. **Where:** 1440-scroll-50.jpg ticket note and 1440-full.jpg canyon caption. **Problem:** slogan endings ("before your coffee's cold", "The car is the part we look after."). **Fix:** replace them with plain process lines, e.g. "Pull in, hand over the keys and wait. We text the lap sheet when it's done."

## Elevate
- **Distinctiveness (8.5, weight 12):** make the stopwatch the only numbering system. Drop the decorative 01/02 sequences and mono labels outside the clock, and let every section's label be its clock position instead ("at 02:00", "at 20:00", "after 31:00"). The cover-the-logo test then rests on one device, not on a texture of numerals.
- **Photo (8.5, weight 8):** turn the drawings into a sequence the visit plays through. Complete the six-station set with Hand-back. Draw each station on as the dial hand passes its lap, so the stations column fills in step with the clock. Use the hero strip's lit station to show the same drawing small. The illustration becomes the visit's record (keys → drain → filter → tread → levels → keys back), a treatment no stock frame could give.
