COPY: ok

# pool-C critique, round 2 (fast mode)

**Five-second test.** 1440-first.jpg: "Scottsdale pool care, month by month, $150–$210 a month (Sample), phone in the header, Get my price. Why them? They tell you which month each job belongs in. The bucket test, the tile band and pebble in November are right there as cover lines." 390-first.jpg: same answer. The J–D month row sits on the cover, and the sticky bar gives Call (480) 555‑0139 + Get my price. This passes. Round 1's placeholder stubs are gone, but the "plates" are flat vector drawings, not photographs.

## firstScreen: 8.5
- Earned (1440-first.jpg): h1 has trade + city + outcome in 6 words and 3 lines. There is one teal primary plus an outline secondary. The phone shows in the header at 1440 and 1024 (1024-first.jpg) and in the sticky bar at 390. The proof line has hours, towns and a Sample rating. The cover lines are month-keyed. The next band peeks about 64px. The signature (month index with the current month lit) is visible on the first screen.
- 1440-first.jpg: the cover plate is a flat clip-art scene (circle sun, cactus, a tilted teal parallelogram). It reads as a placeholder graphic, not a pool a homeowner would trust. The editorial cover is only half executed (−0.5).
- 390-first.jpg: the hero re-cut shows mountains and a 20px sliver of water under the month row. The pool, which is the subject, is cropped out. The proof line breaks into three lines with leading "·" orphans, and the sticky bar covers its last line (−0.5, counted once here).

## distinctiveness: 9
- Reason for the 9 (1440-rm-full.jpg): the year is now the structure. The right-edge J–D index tracks the section, every spread opens with a big terracotta folio (00, 03, 06, 07, 08, 11, 12), and services is a table of contents with 12-month tick bars. Tool outputs are "Almanac entry" cards. Reviews carry month pills (1440-rm-full.jpg reviews band). The footer closes "End of issue" with the month strip.
- Sibling check: pool/A 1440-first.jpg (navy, visit log) and pool/B 1440-first.jpg (reading card, grotesk) look nothing like this. The sand + terracotta + serif almanac is its own family.
- Held back from 9.5: the illustration style is generic flat vector, so a screenshot of a plate alone doesn't name the brand.

## type: 8.5
- Earned: the Crimson Pro h1 and the large Crimson folios give the scale contrast that was missing in round 1 (1440-scroll-25.jpg "03 MARCH · THE TILE LINE"). The area list set in display type is a real type moment (1440-rm-full.jpg #area).
- 1440-first.jpg / 1440-scroll-75.jpg: still three or more DM Mono tracked strings per view (cover-line months, Sample chips, folio labels, rail, mini month bars) (−0.5).

## layout: 8.5
- Earned: the tones alternate (paper / off-white / sand / dark break / sand / paper / teal / paper / deep). The services TOC with month bars and a side plate breaks the card template. The full-bleed monsoon break is a real grid break (1440-scroll-50.jpg).
- 1440-rm-full.jpg: "copy one side, tool the other" repeats three times (tile check, leak test, resurfacing) (−0.5).
- 1440-rm-full.jpg #haboob spread (07 July): text column on the left, the right ~45% of 1440 empty sand for the whole band.
- 1440-scroll-75.jpg: reviews are a plain 3×2 equal card grid.

## photo: 7
- Earned: the five plates share one palette and grade (terracotta, sand, teal, slate). They are framed and captioned "Plate I–V" with a month, so the frames are part of the signature (1440-first.jpg, 1440-scroll-25.jpg, 1440-scroll-50.jpg, 1440-scroll-75.jpg). The alt text describes each scene.
- None of the media is photographic. These are flat vector drawings. The hero (1440-first.jpg) is clip-art level, and the monsoon plate (1440-scroll-50.jpg) has unreadable mushroom-shaped forms and a pool that is only a teal strip. A homeowner sees no real pool, tile or finish anywhere, so the trust job of photography isn't done (−1.0 from the 8 anchor).
- 1440-scroll-75.jpg: the "fresh pebble under clear water" plate is a dot pattern. It works as texture, not as proof of a finish.
- Not a mustFix: the pool library on disk is placeholder-only. When approved frames exist, they belong in these plate frames.

## copy: 9
- Earned: the voice matches the concept ("Losing water? The bucket test tells sun from leak.", "Why pebble is poured in November, not June.", 1440-first.jpg). The primary action now has one name, "Get my price", everywhere (1440-first.jpg, 390-first.jpg). "No spam" is gone. The contact intro names Ramon E. and the hours. The form is labelled "Demo form. Nothing was sent." All prices, reviews and the rating carry Sample tags (1440-scroll-75.jpg). No banned words.
- Held at 9: the "07 July" haboob spread ends on a lone button with no doubt-killer (1440-rm-full.jpg).

## mobile: 8.5
- Earned (390-first.jpg): h1 is 3 lines and both actions are above the fold. The month index becomes a horizontal pill row, which is the promised phone decision. The sticky bar has Call + Get my price. No overflow at 320/390 (render.json).
- 390-first.jpg: the hero crop loses the pool (scored in firstScreen). In 390-rm-full.jpg the services TOC rows stack tick bar + price + button into a tall, repetitive column of eight rows.

## a11y: 9
- Earned: 1440-rm-full.jpg and 390-rm-full.jpg show every section, every review and the haboob stats. There is one h1 and a clean h2→h3 order in dist. Rail letters are now readable ink on sand (1440-first.jpg). The star ratings have role="img" labels. Static and render checks are clean.
- Watch (1440-scroll-50.jpg): the rail shows three states at once (teal "J" active, dark "S", terracotta-bordered "O" = now) with no legend, so meaning relies on colour alone.

## motion: 8
- Earned: the hooks are rail activation per section, the bucket-test slider with its "½ in." readout, the scale checklist → almanac entry, the pour/wait tabs, ZIP and the multi-step form (1440-scroll-25.jpg, 1440-rm-full.jpg).
- 1440-full.jpg: reviews and the haboob stat row are still blank in the motion-on capture, so they sit behind the same opacity reveal (−0.5).
- No motion idea a visitor would describe. The folio count-up and "turning the year" don't show on screen, and the rail just changes fill.

## wow: 8.5
- Earned: the bucket test with a big "½ in." readout and an Almanac-entry verdict, and the scale check producing an entry with a Sample price (1440-scroll-25.jpg, 1440-rm-full.jpg). A pool owner would screenshot these.
- The moment that would make a contractor say "nobody has that" (the year turning as you scroll) isn't visible. The rail is quiet.

## polish: 8.5
- Earned: apple-touch, OG, specific JSON-LD with hours and areas, print and forced-colors styles (dist). Hamburger removed at desktop (1440-first.jpg).
- 1440-first.jpg: the fixed rail sits on top of the cover plate's right edge and frame line.
- 1024-first.jpg / 390-first.jpg: the proof line wraps with leading "·" separators at the start of lines.

## Arithmetic
14×8.5 + 12×9 + 10×8.5 + 10×8.5 + 8×7 + 8×9 + 7×8.5 + 7×9 + 12×8 + 8×8.5 + 4×8.5
= 119 + 108 + 85 + 85 + 56 + 72 + 59.5 + 63 + 96 + 68 + 34 = 845.5 / 100 = **8.46**

## Must
None. Round-1 items are fixed: there are no placeholder stubs, the cover has a plate, and the signature is threaded through ≥ 4 sections.

## Should
- **#hero plate, 1440-first.jpg**: the clip-art cover undersells the concept. Fix: when an approved pool frame exists, put it in the Plate I frame (object-position on the waterline, ~60% 70%). Until then, redraw the plate as a detailed line engraving in ink on sand (pebble pool, stone coping, saguaro) instead of flat geometric shapes.
- **#hero at 390, 390-first.jpg**: the crop loses the water. Fix: at ≤ 600px set the plate's object-position / viewBox so the pool fills the lower 60% of a 4:3 crop, and move the month pill row below the plate, not over it.
- **Proof line, 390-first.jpg / 1024-first.jpg**: orphan "·" at line starts. Fix: wrap each item in a `white-space: nowrap` span and draw the separator with `::before` on the item, hidden when it's the first item on its line (or use `gap` with a flex list instead of literal dots).
- **Haboob spread (07 July), 1440-rm-full.jpg**: the right half is empty. Fix: put the three stats (Evaporation ¼–½ / Chlorine 2 / Dust 1) in the right column as large folio-style numerals, and add a one-line doubt-killer under "Get my price": "After a storm, we’re usually out the next morning."
- **Reviews, 1440-scroll-75.jpg**: equal 3×2 grid. Fix: set the reviews as a 12-month column, one card per earned month, with the month pill as the row label and blank months dimmed.
- **Rail states, 1440-scroll-50.jpg**: three simultaneous states. Fix: keep two (current section = teal fill, this month = small terracotta dot under the letter) and add an `aria-label` / visually hidden legend "Reading: July · This month: October".
- **Reveals, 1440-full.jpg**: reviews and the haboob stats still wait on the shared opacity reveal. Fix: render them static; keep motion for the rail, the folios and the tool outputs.
- **Rail overlap, 1440-first.jpg**: the fixed rail sits over the plate frame. Fix: reserve `padding-right: 56px` on `.hero` at ≥ 1200px so the plate ends before the rail.

## Elevate
- **photo** (7): make the plates a real plate series. Each one is an art-directed frame in one shoot-like grade. If stock exists, use stock under a sand-and-ink duotone. Otherwise use finely drawn engravings with real pool detail (tile line, pebble, skimmer, coping). Each carries its folio and month, so scrolling the plates reads plan → problem → result across the year, and at least one plate is revealed by a scroll-tied clip tied to its month tab.
- **motion** (8): give the page one motion idea people can name, "the year turns as you read". On each spread's entry the rail tab slides out, the folio numeral rolls from the previous month to this one, and the small 12-cell month bar fills to the same cell, all on one 500ms ease-out curve. Then nothing else on the page animates except tool readouts.
