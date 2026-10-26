COPY: needs copy-chief

# pest-B · Trap Count Pest Co. · critique round 2 (fast mode, last round)

## Five-second test
- **1440-first.jpg:** "Termite and pest control in Baton Rouge. They put numbered stations around my house and log every reading. Book an inspection or compare liquid and bait. The number is in the header and under the buttons. The station map on the right shows what they mean." The first screen now answers all four questions.
- **390-first.jpg:** "Same h1 in 3 lines, Book and Compare both above the fold, the phone in the proof line, and a Call / Book a visit bar at the bottom. The station map starts below."
- What changed since round 1: the phone is visible; the hero ring is a labelled station map (house footprint, 01–12, AC pad, a sample log row); the reveals now fire (1440-scroll-50.jpg, 1440-scroll-75.jpg); the estimator prints a year log; the mosquito months differ; quotes are curly; the form's thank-you is honest; focus on teal is deep green; the hero no longer reuses sibling A's frame; the alt text is region-neutral. **Not changed:** every photo is still the blank #D4CFC6 placeholder (8 files at 16,907 bytes each in dist/media).

## First screen: 8.5
- Earned: h1 of 6 words with trade and city, 3 lines at 1440 and at 390. The phone shows in the header and in the proof line (1440-first.jpg), and in the proof line plus the Call bar at 390 (390-first.jpg). Primary filled, secondary outline. The ZIP band peeks about 65px. The signature is readable in the first screen.
- −0.5: the lower strip of the hero card is an empty beige photo slot next to "BR-04 Sill plate, probed for soft wood" (1440-first.jpg). It reads as a broken image in the most-watched spot on the page. Also, the proof line breaks after "Mon–", which leaves "Fri from 7 am." alone on line 2 (1440-first.jpg).
- No outcome in the h1, so it's not quite at the 9 anchor.

## Distinctiveness: 8.5
- Earned: the station system now does work. It's the hero map, the compare tool's drawing ("Liquid trench" vs "Bait station" legend, 1440-rm-full.jpg), the year log the estimator prints (1440-scroll-50.jpg), "Entry 01–07" log pins on the reviews (1440-scroll-75.jpg) and the "All read" ring with the "Next visit" row at the close (1440-rm-full.jpg). That's 5 sections, and the hero and the close are among them. The services list is now a ruled 9-line log, not a card grid. The palette and type pair still differ from sibling A.
- −0.5: the 01–09 numbers on the services and 01–04 on "How a visit reads" are decorative numbering, and there are still mono micro-labels everywhere (1440-rm-full.jpg).
- −0.5: with every photo blank, three bands (break, mosquito, how a visit reads) are generic beige rectangles that could be on any site (1440-scroll-25.jpg, 1440-rm-full.jpg).
- −0.5 from the cover-the-logo test: the review grid and the contact band are standard shapes.

## Typography: 8.5
- Earned: Chivo display is tight and heavy. Curly quotes on every review (1440-scroll-75.jpg). The compare h3s are now in Chivo. Price ranges use en dashes (1440-scroll-50.jpg year log). Body is Outfit at ≥ 16px.
- −0.5: the close card's log row collides with itself: "BR-01 to BR-12" runs into "All stations read" (1440-rm-full.jpg, ring card in #contact-footer).
- −0.5: there's still a lot of Space Mono: hours, tab labels, review meta, captions, prices. At 1440-rm-full.jpg (#contact-footer) the hours `dl` is all in mono, so 3+ small mono strings sit in one view.

## Layout and rhythm: 8
- Earned: the ZIP band is now a two-column row. The services are a ruled list. The plan band is a strong split. The mosquito gap is gone (1440-rm-full.jpg). Tones still alternate.
- −0.5: the full-bleed break is about 650px of flat beige with only a caption chip (1440-scroll-25.jpg). It does no job while the frame is blank.
- −0.5: the review grid leaves Entry 07 alone in column 3, so about two-thirds of the width is empty under it (1440-scroll-75.jpg, 1440-rm-full.jpg).
- −0.5: in the contact band, the form column ends about 450px above the ring card, and the left half is empty under the microcopy (1440-rm-full.jpg #contact-footer).
- +0.5: services, plan and visit steps now give the page dense/quiet contrast.

## Photo and video: 5
- All 8 `[data-photo]` frames are still the identical blank placeholder (dist/media/*.jpg, 16,907 bytes each; 1440-first.jpg hero strip, 1440-scroll-25.jpg break, 1440-rm-full.jpg services frame, mosquito frame and 4 visit frames). A buyer sees no photography.
- Up from 4: the frame treatment is now the signature. Ticket captions with a station or month ("BR-04 Sill plate…", "Checked Foundation vent…", "May Gutter and downspout…") are the right idea. The alt text is region-neutral, and the hero no longer reuses sibling A's frame.
- The captions and alt text still describe frames that don't exist ("A crawlspace house on a leafy street", 1440-scroll-25.jpg). That's honest only once real frames are in.
- The `ul.credits` in the footer is empty (dist/index.html).
- mustFix. Below floor (6).

## Copy: 8.5
- Earned: the mosquito months are now month-true (April: "First visit as the yard warms…", 1440-rm-full.jpg). The log rows carry date, station and action ("Sample · May 14 · BR-07 · AC pad: hits · Bait replaced", 1440-scroll-25.jpg). "How a visit reads" has a lead and four concrete steps. The form says "This is a demo, nothing was sent." Trade nouns are throughout.
- −0.5: the primary action has two names: "Book an inspection" (header, hero, contact) and "Book a visit" (mobile bar, 390-first.jpg).
- −0.5: the footer brand line reads "Trap Count Pest Co.. Termite and pest control…" with a double period (1440-rm-full.jpg footer).

## Mobile: 8.5
- Earned: no sideways scroll (render.json). The h1 is 3 lines and both actions sit above the fold. The phone is visible, and the Call / Book bar is present (390-first.jpg). The ZIP field and button sit on one row. The choice chips are thumb-sized.
- −0.5: in #compare the station drawing sits below the cards and the CTA (390-rm-full.jpg), so a thumb changing "House type" never sees the drawing change. The tool's output is off-screen.
- −0.5: the page is longer than in round 1 (14,590px, 390-rm-full.jpg). Four stacked blank visit frames and a stacked 7-card review run carry no phone-specific decision.

## Accessibility: 9
- Earned: reduced motion shows every section (1440-rm-full.jpg, 390-rm-full.jpg). Focus is now deep green on the teal band (`--focus: #1A332A`, dist/index.html). There are live regions on the compare verdict and the year log, real radios and checkboxes, a skip link, labelled inputs, one h1, forced colors and print.
- Not 9.5: the mono hours and the 13px-ish review meta on deep green are at the edge of comfortable (1440-scroll-75.jpg).

## Motion and interaction: 8
- Earned: the reveals now fire. Services are visible at 1440-scroll-50.jpg and the reviews at 1440-scroll-75.jpg. The compare drawing switches between the trench outline and the bait dots, the year log writes itself from the inputs, and the hero ring lights one station (1440-first.jpg). There are more than 3 hooks beyond reveals, and press scale is .97.
- −0.5: the promised dial story (the ring lights in groups as the liquid-vs-bait story scrolls) still isn't visible. #compare is a static split, not a story (1440-scroll-25.jpg).
- −0.5: the motion-on full-page captures still show services, reviews and visit text blank (1440-full.jpg, 390-full.jpg). The frames prove they fire when scrolled, but anything that jumps (anchor links from the nav: "Services", "Reviews") risks landing on an un-revealed band. Make sure targets reached by hash are marked `.is-in`.

## Wow moment: 8.5
- Earned: two connected pieces now exist. The compare drawing redraws the house as a trench or as bait stations. The plan tool prints a "Sample year log" with dated rows, sample ranges, "7 logged visits this year" and "Print this year log" (1440-scroll-50.jpg). A homeowner would keep that sheet.
- −0.5: the two pieces don't talk to each other. The year log doesn't show the station ring, and the ring doesn't show the visits. The hero map is static. With the photos blank, the moment sits on a page that still looks unfinished.

## Polish: 7.5
- Earned: one radius, print and forced-colors CSS, no `transition: all`, a designed "All read" close card.
- −0.5: the log-row text overlaps in the close card (1440-rm-full.jpg).
- −0.5: the double period in the footer brand line and the empty credits list (1440-rm-full.jpg footer, dist/index.html).
- −0.5: blank placeholder frames everywhere make the page look unfinished at every viewport (1440-rm-full.jpg, 390-rm-full.jpg).

## Arithmetic
14×8.5 + 12×8.5 + 10×8.5 + 10×8 + 8×5 + 8×8.5 + 7×8.5 + 7×9 + 12×8 + 8×8.5 + 4×7.5
= 119 + 102 + 85 + 80 + 40 + 68 + 59.5 + 63 + 96 + 68 + 30 = **810.5 / 100 = 8.11** (8.105)

Below floor: photo (5 < 6). mustFix not empty. Round 2 is the fast-mode limit, so expect **NEEDS_HUMAN**.

## Must
1. **Photo, every `[data-photo]` (1440-first.jpg, 1440-scroll-25.jpg, 1440-rm-full.jpg):** all 8 frames are blank placeholder JPGs because the niche library is placeholder-only. Fix: curate and approve real Gulf South pest frames in `niches/pest/media/manifest.json` (an orchestrator / media-curator job), then re-place every slot. Rewrite each alt and ticket caption from the actual frame, and fill `ul.credits`.

## Should
- **Close card log row (#contact-footer, 1440-rm-full.jpg):** "BR-01 to BR-12" overlaps "All stations read". Fix: set the four columns to `grid-template-columns: auto auto 1fr auto` with `gap: 16px` and `white-space: nowrap` on the station cell, or shorten the cell to "All 12".
- **Footer brand (1440-rm-full.jpg):** "Trap Count Pest Co.. Termite…" Fix: drop the literal period after `{{biz.name}}` (the name ends in "Co.").
- **Mobile bar (390-first.jpg):** "Book a visit". Fix: "Book an inspection", to match the header, hero and form.
- **Hero proof line (1440-first.jpg):** "Mon–" / "Fri from 7 am." breaks across lines. Fix: `Mon–Fri` joined with U+2011 or wrapped in `<span style="white-space:nowrap">`, and `max-width: 52ch` so it breaks before "Or call".
- **Hero photo strip (1440-first.jpg):** a blank slot inside the signature card. Until real media lands, drop the strip and let the card end on the log row.
- **Break (#break, 1440-scroll-25.jpg):** 650px of blank. Fix: cut its height to 60svh, and once there's a frame, crop it to the house so the caption chip pins to something.
- **Reviews grid (#proof, 1440-scroll-75.jpg):** Entry 07 sits alone. Fix: use a 4+3 or 3+3+1-wide layout (make the last card span 3 columns as a single log row), or move the retreat terms card into the grid's empty slot.
- **Contact band (#contact-footer, 1440-rm-full.jpg):** the left column ends 450px early. Fix: move the hours `dl` under the form on the left, so the right column is phone + ring only.
- **Compare on phones (#compare, 390-rm-full.jpg):** the drawing sits below the cards. Fix: under 640px, put the drawing directly after the "House type" chips (order: 2), so the tool's output is in view while tapping.
- **Hash targets (#services, #proof, 1440-full.jpg):** make sure an anchor jump marks the target section and its children `.is-in` at once.
- **Mono load (1440-rm-full.jpg):** set the hours `dl` and review meta in Outfit with `font-variant-numeric: tabular-nums`. Keep Space Mono only for station IDs, dates and prices.

## Elevate
- **Photo (5):** once real frames exist, carry the ticket treatment through: each photo is a log entry, cropped tight to the thing inspected (sill plate, mud tube, bait cap, downspout), with the station number and reading set into the frame's bottom rule. One warm, slightly desaturated grade across all of them, so stock reads as one dated inspection, not a mood board.
- **Motion (8):** make the ring the page's one motion idea. In #compare at ≥ 640px, pin the drawing while the left column scrolls three short beats (slab → crawlspace → raised). The trench draws itself with DrawSVG for liquid, and the stations light in groups for bait. The plan tool's year log then lights the matching stations as rows are added. The signature moves in two connected places and reverses cleanly.
