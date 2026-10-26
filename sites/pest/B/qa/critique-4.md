COPY: ok

# pest-B · Trap Count Pest Co. · critique round 4 (fast mode, final round)

## Five-second test
- **1440-first.jpg:** "Termite and pest control in Baton Rouge. They put numbered stations around the house, read them on every visit, and write it on a log I keep. Book an inspection, or compare liquid and bait. The phone is in the header and under the buttons, Monday to Saturday." The station ring is now drawn over the raised house in the photo, with BR-04 tagged, so the photo and the signature are one object.
- **390-first.jpg:** "Same h1 in 3 lines. Both actions are above the fold, the phone is in the proof line, and there's a Call / Book an inspection bar. The ticket-captioned house peeks below."
- **What changed since round 3** (verified in the shots, not re-listed below):
  - The mud-tube frame now loads at 1440 and carries a BR-07 / "Marked" caption (1440-rm-full.jpg, services).
  - The "Line 04" caption is no longer clipped.
  - The visit frames stack at 390 (390-rm-full.jpg, ~y 12,100).
  - The compare price cards moved under the drawing, so the columns end together and the void is gone (1440-rm-full.jpg, ~y 1,000–2,100).
  - The hero proof line now says "Monday to Saturday".
  - The "Sample review" / "Sample pricing" badges are set in Outfit caps instead of mono (1440-scroll-75.jpg).
  - The 01–09 service numbering is gone (1440-scroll-50.jpg).
  - A shared `--grade` filter is applied to the photos.
  - A scroll-driven liquid → bait story exists on #compare (dist/app.js: the trench draws, then stations light in groups of four as the house steps from slab to crawlspace to raised, reversible, ≥ 900px only).

## First screen: 9
- **Earned (1440-first.jpg):**
  - The h1 is 6 words with trade and city, in 3 lines.
  - Filled primary button and an outline secondary.
  - The phone is in the header and in the proof line, and the rating is labelled Sample.
  - The station-map card overlaps the photo, and the ring continues across the house, so the signature is in the first screen.
  - The ZIP band peeks about 65px.
- **Earned (390-first.jpg):** both actions are above the fold and the call bar is there.
- **Not 9.5:** the outcome lives in the lead, not the h1. The hero photo is still a flat grey roadside frame with power lines across the sky (1440-first.jpg). The ring improves it but doesn't make it art-directed.

## Distinctiveness: 9.5
- **Earned:** the station system now does real work in 7 places:
  - the hero ring on the photo and the map card (1440-first.jpg)
  - the compare drawing with its dated log rows (1440-rm-full.jpg)
  - the BR-07 photo ticket (1440-rm-full.jpg, services)
  - the year log with the 01–12 chips (1440-scroll-50.jpg)
  - the Entry-pinned reviews (1440-scroll-75.jpg)
  - the visit ticket
  - the "All read" close (1440-rm-full.jpg, contact)
- **Cover-the-logo test:** almost any band names the business. A juror would say "the page is the termite station log".
- **Not 10:** some numbering is still decorative: the 01/02/03 on the house-type radios (1440-rm-full.jpg, #compare). The floating station-map and ticket cards carry soft shadows that a ledger wouldn't have.

## Typography: 9
- **Earned:**
  - Chivo display set tight against Outfit text, which gives real scale contrast (1440-first.jpg).
  - Curly quotes and en-dash ranges.
  - The badges moved out of mono, so Space Mono now carries only station IDs, dates and prices, as the concept's accent (1440-scroll-75.jpg).
  - The compare prices are now a readable mono size on one line (1440-rm-full.jpg).
  - Hours are tabular in Outfit (1440-rm-full.jpg, contact).
- **Not 9.5:** the year-log price column ("$110–$170 per visit") is small, light mono that sits at the edge of comfortable reading (1440-scroll-50.jpg). The "Liquid" card body wraps at about 25 characters (1440-rm-full.jpg, #compare).

## Layout and rhythm: 9
- **Earned:**
  - The tones alternate: deep / bone / deep / photo / bone / teal / bone / deep / bone / deep.
  - The full-bleed break has a ticket caption overhanging the edge, which is the grid-break, and it lands (1440-scroll-25.jpg).
  - The compare columns now end together.
  - Reviews run 3+3 plus one full-width row (1440-scroll-75.jpg).
  - The visit section is an asymmetric frame stack beside the ticket.
- **Not 9.5:** the services band leaves the 1440 right half empty below the photo. Nine ruled rows run full width under a two-column intro, and that is the flattest part of the density map (1440-rm-full.jpg, ~y 2,900–4,200).

## Photo and video: 8.5
- **Earned:**
  - On-topic Gulf South frames: the raised house, the New Orleans cottage, the mud tube at grade, the termite-damaged wood and the clipboards.
  - Every frame sits in a ticket caption with a code ("BR-07", "Line 01", "Porch").
  - The hero carries the station ring drawn over the house, so the frame treatment is part of the signature (1440-first.jpg).
  - The mud tube now renders at 1440.
- **−0.5:** the shared grade softens the frames but doesn't unify them:
  - the hard winter sun on bare branches in the break (1440-scroll-25.jpg)
  - the cool dusk asphalt behind the clipboards (1440-rm-full.jpg, visit)
  - the flat grey sky in the hero (1440-first.jpg)

  These still read as three shoots.
- **Watch:** a parked car fills the break's left edge (1440-scroll-25.jpg). That's not a mustFix: no plate is readable at this size.

## Copy: 9
- **Earned:**
  - One name for the action, "Book an inspection", in the header, hero, mobile bar and contact (390-first.jpg).
  - Trade nouns: sill plate, mud tube at grade, weep holes, re-entry time from the label, AC pad.
  - "Monday to Saturday" now matches the hours.
  - The microcopy under the form says what happens next and mentions the termite letter (1440-rm-full.jpg, contact).
  - Every review, price and the licence is labelled Sample.
  - No em dashes in dist/index.html.
- **Not 9.5:** the services descriptions are plain definitions ("Numbered stations around the house checked on a schedule…"), not the owner's voice that the reviews and the ticket have (1440-rm-full.jpg, services).

## Mobile: 9
- **Earned:**
  - No sideways scroll at 320 or 390 (render.json).
  - The h1 is 3 lines, both actions are above the fold, and the call bar is there (390-first.jpg).
  - The compare drawing sits under the inputs with its log rows (390-rm-full.jpg, ~y 1,800–3,400).
  - The visit frames now stack, with the inset offset right.
  - The story is desktop-only (≥ 900px in app.js), so there's no pin on phones.
- **Not 9.5:** the inset caption "What the / probe finds" still wraps in a narrow tile (390-rm-full.jpg, ~y 13,300). The page runs 14,884px.

## Accessibility: 9
- **Earned:**
  - Reduced motion shows every section at both widths (1440-rm-full.jpg, 390-rm-full.jpg).
  - Live regions on the compare verdict and the year log.
  - The compare story writes its beat into a text element and announces "12 bait stations lit…".
  - Real radios and checkboxes, labelled inputs, a skip link and one h1 (dist/index.html).
  - render.json shows no errors.
- **Not 9.5:** the light-grey mono meta in the compare log ("Sample · Mar 3 · Trenched and rodded") is low-contrast on bone (1440-rm-full.jpg, #compare).

## Motion and interaction: 9
- **Earned:** the promised dial story is now in dist/app.js. On #compare the trench draws itself around the footprint, then the stations light in groups of four as the house steps from slab to crawlspace to raised. It's scrubbed by scroll, reversible on leave-back, desktop-only, and handed to the inputs on the first touch. Motion now explains the liquid-vs-bait difference.
- **Other hooks:**
  - the break photo drifts with scroll
  - the year log writes rows
  - the hero lights BR-04
  - the mobile bar hides on scroll and when typing
- **Not 9.5:**
  - No frame shows the story mid-state: 1440-scroll-25.jpg and 1440-full.jpg both catch #compare fully lit.
  - The right column is barely taller than the left (1440-rm-full.jpg), so the "sticky" drawing has almost no travel. The story plays as the section passes rather than holding the drawing in place.
  - The hero map is the same between 1440-first.jpg and 1440-scroll-25.jpg.

## Wow moment: 9
- **Earned:**
  - The printable Sample year log with dated rows, per-line ranges, "BR-01 to BR-12, stations installed" and the 01–12 chip strip (1440-scroll-50.jpg).
  - The compare drawing that redraws the house as a trench or as stations, and now runs as a scroll story.
  - The "All read" close (1440-rm-full.jpg).
- **Not 10:** the log's chip strip and the compare ring still don't light together. These are two moments in one language, not one connected act.

## Polish: 9
- **Earned:**
  - One radius and ruled tickets.
  - The clipped caption and the blank frame from round 3 are both gone (1440-rm-full.jpg).
  - The credits are formatted in the footer.
  - A designed close card.
  - Print and forced-colors CSS.
- **Not 9.5:** soft drop shadows on the station-map, visit-ticket and break-caption cards. They float, so it's not a deduction, but they break the flat paper-log idea (1440-first.jpg, 1440-scroll-25.jpg).

## Arithmetic
14×9 + 12×9.5 + 10×9 + 10×9 + 8×8.5 + 8×9 + 7×9 + 7×9 + 12×9 + 8×9 + 4×9
= 126 + 114 + 90 + 90 + 68 + 72 + 63 + 63 + 108 + 72 + 36 = **902 / 100 = 9.02**

Every category meets its fast pass mark (photo 8.5 ≥ 8.0), mustFix is empty, and both checks are clean. This is round 4, past the fast round limit of 2, so score.mjs decides between delivery and NEEDS_HUMAN.

## Must
None. There's no demo-rule breach, no content missing in the reduced-motion shots, and no phone breakage.

## Should
- **Services right half (1440-rm-full.jpg, #services):**
  - Problem: the photo ends after the intro, and the 9 rows run full width with the right column mostly description.
  - Fix: set the rows in a 2-column ledger (name + description | the station code or "Logged each visit" in mono), or let the BR-07 frame run `position: sticky` beside the first rows.
- **Grade (break and visit photos, 1440-scroll-25.jpg, 1440-rm-full.jpg):**
  - Problem: the frames still read as three shoots.
  - Fix: crop the break to `object-position: 50% 75%`, which keeps the porch steps and loses the bright sky and branches. Lift the clipboards frame (`brightness(1.08)` plus the same sepia) so the asphalt goes warm grey, not blue-black.
- **Compare log meta (1440-rm-full.jpg, #compare):**
  - Problem: the light-grey "Sample · Mar 3" row is too low-contrast.
  - Fix: raise it to at least 4.5:1 on bone (for example #5E6A63).
- **Inset caption (390-rm-full.jpg, visit):**
  - Problem: the caption wraps in the narrow tile.
  - Fix: under 640px, give the inset `width: 72%`.
- **Year-log price column (1440-scroll-50.jpg):**
  - Problem: the small, light mono is hard to read.
  - Fix: set it in full ink at 14px.

## Elevate
Not required (score ≥ 9.0, all categories ≥ 8.5). Recorded for a human pass:
- **Photo (8.5):** make the frames one inspection day. Use one warm-grey grade, crop each frame to what the tech touches (the pier footing, the porch step, the mud tube), and show the station code in each frame's rule. The gallery should read as entries in the same log.
- **Motion (9):** tie the two moments together. Give #compare a sticky drawing with real travel (the left column steps through the three house types with room to scroll). When the year log adds the bait row, light its 01–12 chips in the same group-of-four sequence as the ring, so the signature moves once, in two places.
