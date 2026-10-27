COPY: ok

# roofer-C · critique round 4 (final, fast mode)

**Five-second test (1440-first.jpg, 390-first.jpg):** "Hailward Roofing fixes hail, wind and ice damage across Oklahoma City. I can tap Get a quote or call (405) 555-0103 right here. Why them: the page is organised around the roofing year here, and it says what they do in each season." All four answers are clear in both shots. At 390 the h1 runs 4 lines and both actions sit above the fold.

**What changed since round 3:**
- The service index is now an almanac table: 9 jobs against 12 months, prime-month bars, and an October "now" column (1440-rm-full.jpg, 1440-scroll-75.jpg). On the phone each row has its own month strip (390-full.jpg).
- The header pill shows the live season at load ("Now · Oct · Build", 1440-first.jpg).
- The duplicate hail-band service list is gone. The hyphen range is fixed (1,800–2,400). "Sample reviews" now sits under the h2. The form panel no longer stretches (1440-full.jpg).
- The prices band became a full gold slab with a mono tabular price list (1440-rm-full.jpg).

## firstScreen: 9.0
- What earned it: an 8-word h1 that names trade and city; a gold primary with a quieter outline call; the phone in both the header and the hero; a proof line labelled Sample; the ring and town-map signature at 0%; the season strip peeking at the fold (1440-first.jpg). At 390 the h1 is 4 lines with both actions above the fold (390-first.jpg).
- −0.5: about 150px of dead navy still sits above the kicker. The text block floats above the ring's centre line instead of sitting on it (1440-first.jpg).
- −0.5: the meta row is a middle-dot string ("Closed · opens tomorrow 7 am · ★ 4.9 … · 19 years"), with a Sample chip hanging under it (1440-first.jpg, 390-first.jpg).

## distinctiveness: 9.5
- The season ring now organises the whole page:
  - the hero map, and the live header pill (1440-scroll-25/50/75.jpg)
  - every season eyebrow, and the almanac table, which passes cover-the-logo (1440-scroll-75.jpg)
  - the review season tags, and the footer mark (1440-full.jpg)
- It differs from siblings A and B in palette, type and hero family.
- −0.5: middle-dot meta strings and mono micro-captions ("PLATE 1 · WIND LIFT AT THE RIDGE", "VERDICT · OKLAHOMA CITY GROUND CHECK") are still the default label voice (1440-rm-full.jpg).

## type: 9.0
- Garamond display with italic season eyebrows, Source Sans body, and DM Mono for tabular prices. The price list in the gold slab is well set (1440-rm-full.jpg).
- −0.5: the hours table uses hyphens ("7 am - 6 pm") where it should use en dashes (1440-rm-full.jpg contact).
- −0.5: the Sample chips ("Sample figures", "Sample pricing", "Sample reviews") are still around 11px (390-first.jpg, 1440-rm-full.jpg).

## layout: 9.0
- Strong tone rhythm, with no dark bands touching (1440-full.jpg). The lower third now sits on the 120–1320 grid through the almanac table, and the gold price slab gives it a clear crescendo (1440-rm-full.jpg).
- −0.5: the storm-chasers band is a bare gold ring on the left, about 40% empty space on the right, and around 130px of dead space underneath (1440-scroll-25.jpg).
- −0.5: the sunset break and the empty storm-chasers band sit back to back, which makes two consecutive low-content screens (1440-full.jpg).
- +0.5: the scroll has a visible shape.

## photo: 8.5
- One raster, the sunset break (a temporary placeholder), graded into the slate and gold palette (1440-scroll-25.jpg). The drawn plates (wind lift, ice load, cross-section compare, build steps) share one stroke and one palette and carry the page (1440-rm-full.jpg).
- Not 9: no image or plate sits inside the signature ring itself.

## copy: 9.0
- Trade nouns throughout (seal strip, pipe boot, rolling magnet, UL 2218). The build lead is rewritten to describe the day ("One tear-off, dawn to dark"). The duplicate blurbs are gone (1440-scroll-50.jpg). The voice is good ("Storm chasers come with the hail and leave with the deposit.").
- Every claim checks against facts.json (19 years, 4.9/318, the license, the 12-year workmanship guarantee).
- −0.5: the almanac repeats "Get a quote →" on all 9 rows, so there are 16 identical CTA labels on the page, each with an arrow (1440-scroll-75.jpg).

## mobile: 9.0
- Real phone decisions:
  - the almanac is re-cut so each row gets its own J–D strip (390-full.jpg)
  - the season strip reflows to 2 columns
  - the build steps stack
  - the price rows hold
  - a sticky Call / Get a quote bar
- No overflow at 320 or 390 (render.json).
- −0.5: the hero dial is the desktop dial scaled down, and the sunset crop cuts the sun at the right edge (390-full.jpg).
- −0.5: the hours table and the contact form stack as two long blocks with no phone-specific density (390-full.jpg).

## a11y: 9.0
- All content is visible in reduced motion, including the verdict card, the compare plate, the almanac and the steps (1440-rm-full.jpg, 390-rm-full.jpg). axe is clean (render.json). There is one h1. The ZIP and form inputs are labelled.
- The 11px Sample chips are borderline for legibility (390-first.jpg).

## motion: 9.0
- One idea now runs through the page: the year turns as you scroll.
  - The header mini-dial and pill advance by season (Jul at 1440-scroll-25.jpg, Oct at 1440-scroll-50.jpg).
  - The almanac's gold month cursor sweeps the columns (it sits at Aug in 1440-scroll-75.jpg; reduced motion shows the static Oct column in 1440-rm-full.jpg).
  - The sun travels the build arc (1440-scroll-50.jpg).
- −0.5: 24 data-reveal hooks still suggest uniform entrances on every block.
- −0.5: the hero dial itself never moves in any frame.

## wow: 9.0
- The ground-check verdict card (1440-rm-full.jpg hail band) and the almanac table with its live month cursor (1440-scroll-75.jpg) are two moments a contractor would show someone.
- Not 10: the ground-check verdict doesn't light the April–June arc of the ring.

## polish: 9.0
- Designed footer close (ring mark, "The almanac starts over in January. So do we."). The Sample tags are aligned now and the form panel sits at its natural height (1440-full.jpg).
- −0.5: the bare ring in the storm-chasers band reads as a placeholder rather than an object (1440-scroll-25.jpg).

## Arithmetic

14×9.0 + 12×9.5 + 10×9.0 + 10×9.0 + 8×8.5 + 8×9.0 + 7×9.0 + 7×9.0 + 12×9.0 + 8×9.0 + 4×9.0
= 126 + 114 + 90 + 90 + 68 + 72 + 63 + 63 + 108 + 72 + 36
= 902 / 100 = **9.02**

The fast pass line is 9.0. Every category is ≥ 8.5 (photo 8.5), static.json and render.json are clean, and mustFix is empty, so this is a PASS.

## Must

None. There are no demo-rule breaches:
- every rating, price and review is Sample-labelled
- every claim is in facts.json
- no face, no "our work", no before/after
- the form is a step form that doesn't pretend to send

Reduced motion shows all content, and nothing breaks at 320 or 390.

## Should

1. **Hero vertical balance** (1440-first.jpg, hero). Problem: the text block floats about 150px below the header, above the ring's centre. Fix: vertically centre the hero copy column on the ring, or cut the hero's top padding by about 80px.
2. **Storm-chasers band** (1440-scroll-25.jpg). Problem: a bare ring and an empty right half. Fix: put a figure inside the ring, the 12-month tick dial with all 12 segments lit ("we answer every month"). Widen the text column to 7/12, and cut the band's bottom padding to match its top.
3. **Almanac CTAs** (1440-scroll-75.jpg, #services rows). Problem: 9 identical "Get a quote →" links. Fix: keep the link only on the highlighted row and on hover/focus-within for the others. Or name the job ("Quote hail repair"), and drop the arrow on rows.
4. **Hours hyphens** (1440-rm-full.jpg, contact hours). Fix: "7&nbsp;am–6&nbsp;pm" with an en dash.
5. **Sample chip size** (390-first.jpg, 1440-rm-full.jpg). Fix: raise the chips to at least 13px with 4px/8px padding.
6. **Middle-dot meta** (1440-first.jpg hero proof row, review card tags). Fix: split the hero row into two lines ("Closed now, opens tomorrow at 7 am" / "★ 4.9 from 318 reviews"). On review tags use "Hail season, Moore".
7. **Mobile sunset crop** (390-full.jpg, break). Fix: set `object-position` so the sun and the roofline sit in frame at 390, around 70% 60%.

## Elevate

None required (PASS). If it is reopened: wire the ground-check verdict into the hero ring, so each ticked sign lights a segment of the April–June arc. That would make the tool and the signature one object.
