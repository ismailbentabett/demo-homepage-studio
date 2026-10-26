COPY: needs copy-chief

# cleaning-C: critique round 2 (fast mode, scored as always)

Round 1 was scored blind from markup. This round has real screenshots, and they show a page in much worse shape than round 1 assumed. The scores drop because of that evidence, not because anything regressed.

## Five-second test
- **1440-first.jpg:** "House cleaning in Chattanooga, TN. I can hit 'Price it' or call. 4.9 stars, sample rating, 13 years." What and where are clear in under 5 s. Why them is not answered. The rest of the screen looks broken: the raw alt text "Morning fog lifting over the Tennessee River…" sits on top of the logo in the top-left corner, the "RH" logo and the nav (Services / Reviews / Area / Book) are dark-on-dark and almost invisible, the season dial is an empty hollow ring, and the bottom 40% of the hero is flat black with no photo.
- **390-first.jpg:** same h1 (2 lines, good), both buttons above the fold, and the mobile bar (Call / Price it) works. But the alt text wraps across the header and two grey skeleton bars float where the header should be. A visitor reads this as a page that failed to load.

## Section scan (1440-rm-full.jpg, scroll frames)
Hero (t-deep, broken image, no photo) → intro "A year of care" (paper, narrow centered column, sample-pricing card) → Spring "Pollen week" split (flat brass box with caption text) → Summer "Mildew" split (t-mid, **empty cream rectangle**, 1440-scroll-25.jpg) → break band (t-deep, nearly empty: a tiny caption box "Older house on a hill street" bottom-left plus one mono line) → Fall "Guest-ready" split with countdown tool (date input, empty ring, "Hold these dates") → Winter "Weekend houses" split (grey box captioned "Tidy family living room, lived-in", 1440-scroll-50.jpg) → "What we clean" 9-card grid with an orphan card on the last row → reviews 2×3 (1440-scroll-75.jpg) → area/ZIP + hours (t-deep) → form "Book a visit" step 1 → footer with another hollow ring.

Signature check: the dial appears as an empty ring in the header, inside the countdown tool and in the footer. It never shows a filled season quarter in any frame, so it does not visibly turn.

## firstScreen: 7.0
Earned: an h1 with trade and city in strong display type, one primary action plus a quieter phone link, and a proof line with a Sample tag (1440-first.jpg, 390-first.jpg).
Deductions:
- Broken hero image: the alt text renders as visible text over the logo (1440-first.jpg, 1024-first.jpg, 390-first.jpg). This is a mustFix.
- Logo and nav are illegible on the dark hero (1440-first.jpg). Listed as a mustFix under a11y and not deducted twice. Here it costs the "where do I go" read.
- Nothing answers "why them": no outcome line and no seasonal promise in the hero, and the kicker carries the whole concept (−0.5).
- The lower half of the hero is dead space with no image at 1440 and 390 (−0.5).

## distinctiveness: 7.0
Earned: the almanac datelines ("LATE MARCH · SIGNAL MOUNTAIN", "AUGUST · HIXSON") are a real editorial device (1440-scroll-25.jpg). The mono and serif pairing has character.
Deductions:
- The signature does not exist visually. It is a hollow brass ring in the header, the tool and the footer, with no segments and no fill or turn in any frame (1440-first.jpg, 1440-50 / 1440-rm-full.jpg) (−1.0).
- Without the photos and the dial, the page reads as a generic dark-serif template: a centered h1 on black, then alternating text/box splits (1440-full.jpg) (−0.5).
- The concept says Crimson Pro, but the page renders Fraunces (1440-first.jpg). That is a delivery gap against the concept, not a scoring point by itself.

## type: 8.0
Earned: a tight display h1 with good leading (1440-first.jpg), mono datelines and Sample tags used consistently, and a clear hierarchy in the splits (1440-scroll-25.jpg).
Deductions:
- Reviews and the summer pull-quote use straight quotes `"…"` (1440-scroll-75.jpg, 1440-scroll-25.jpg) (−0.5).
- The mono price box wraps "per / visit" onto two lines with the tag hanging (1440-scroll-50.jpg) (−0.5).
- Review attribution lines wrap and orphan the Sample tag ("houses ·" on its own line, 1440-scroll-75.jpg). Covered by the deduction above.

## layout: 7.0
Earned: the tones alternate paper / mid / deep, and the splits alternate sides (1440-rm-full.jpg).
Deductions:
- Four almanac spreads all use the same split shape with the box on the right (1440-rm-full.jpg) (−0.5).
- The break band is a full-width dark block holding only a tiny caption box and one mono line, so it reads as an empty void (1440-rm-full.jpg, ~1/3 down) (−1.0).
- The services grid leaves "Inside windows & screens" alone on a last row (1440-rm-full.jpg) (−0.5).
- The "Price it" button touches the blockquote rule with no gap (1440-scroll-25.jpg). The hours table in the area band is a ragged two-column jumble (1440-rm-full.jpg) (−0.5 together).

## photo: 5.0
Placeholders are acknowledged, but the score is for what is on screen, and no photograph appears anywhere. The hero `<img>` is broken and shows raw alt text (1440-first.jpg). The other figures are flat colour blocks with caption strings (1440-scroll-50.jpg). The summer figure is a blank cream rectangle with no caption at all (1440-scroll-25.jpg). The break band "photo" is a postage-stamp caption (1440-rm-full.jpg). Every media file in `dist/media` is a 30-byte stub. Nothing here can be graded on crop, grade or story. This is below the floor until the real library lands. Handle it in the pipeline, not with a design move.

## copy: 8.5
Earned: specific, local and tactile copy. "Every April the porch turns yellow…", "heart pine", "leave the fan on" (1440-scroll-75.jpg). Sample labels sit on every review and price. Buttons name actions ("Add pollen clean", "Hold these dates").
Deductions:
- The hero says only trade and city, with no reason to choose them. The concept's season promise ("a year of care") is buried in section 2 (1440-first.jpg) (−0.5).
- "Price it" is used 7+ times, including inside every service card (1440-rm-full.jpg). It is consistent, but it is a weak verb for a first-time buyer ("what will it cost?"). No deduction, but note it for the copy-chief.

## mobile: 7.5
Earned: the h1 is 2 lines, both CTAs are above the fold, and the sticky Call / Price it bar has big targets (390-first.jpg). There is no horizontal overflow (render.json 320/390).
Deductions:
- Broken alt text plus two grey skeleton bars in the header area at 390 (390-first.jpg) (−0.5. The image break itself is already a mustFix).
- 390-rm-full.jpg: nine stacked service cards make one long, undifferentiated run, and the almanac boxes are full-width blocks of flat colour, so nothing is composed for the phone (−0.5).

## a11y: 7.0
Earned: in reduced motion, all content is visible at 1440 and 390 (1440-rm-full.jpg, 390-rm-full.jpg). The form has visible labels and the Sample tags are real text.
Deductions:
- The header logo "RH" and the nav links on the dark hero are near-invisible, roughly dark grey on #141916, far under 4.5:1 (1440-first.jpg, 1024-first.jpg). This is a mustFix (−1.0).
- At 1024 the header dial ring overlaps the "Book" nav link (1024-first.jpg) (−0.5).
- The broken hero image exposes alt text as visual junk (390-first.jpg). Already a mustFix, not deducted again.

## motion: 6.5
Earned: reveals do fire on scroll, since the content is present in the 1440-scroll-25/50/75 frames.
Deductions:
- The dial never turns. No frame shows an active quarter, so the promised "dial turns 90° at each spread" is not delivered (1440-scroll-25/50/75.jpg) (−1.0).
- The motion-on 390-full.jpg shows solid black bars over the intro h2 and paragraph ("A year of c█████"), and the split-line masks are stuck mid-state (−0.5. Verify it isn't capture lag, but it is visible in the evidence).
- The motion-on full pages have ~5000 px of blank paper between summer and the footer (1440-full.jpg, 390-full.jpg). Content that is hidden until scrolled leaves the page empty for any non-scrolling agent (−0.5).
- Nothing else shows a distinct motion idea beyond fade-ups.

## wow: 6.5
There is nothing to show a partner. The countdown tool is a date input, an empty ring and a button (1440-rm-full.jpg, 1440-scroll-50.jpg). The dial, the one ownable idea, is a hollow circle (1440-first.jpg). The almanac datelines are pleasant, but they are not a moment.

## polish: 6.5
Deductions: a broken image with alt text visible (1440-first.jpg), an empty cream figure (1440-scroll-25.jpg), skeleton bars in the mobile header (390-first.jpg), the dial overlapping nav at 1024 (1024-first.jpg), a button touching the blockquote (1440-scroll-25.jpg), and a ragged hours table (1440-rm-full.jpg).

## Arithmetic
14×7.0 + 12×7.0 + 10×8.0 + 10×7.0 + 8×5.0 + 8×8.5 + 7×7.5 + 7×7.0 + 12×6.5 + 8×6.5 + 4×6.5
= 98 + 84 + 80 + 70 + 40 + 68 + 52.5 + 49 + 78 + 52 + 26 = 697.5 / 100 = **6.98** (6.975)

Photo (5.0 < 6) and a11y (7.0 < 8) are below their floors, and every category is below the fast pass line of 8.5 (photo 8.0) except copy. This is round 2 of 2 in fast mode, so the expected verdict is **NEEDS_HUMAN**.

## Must
1. **1440-first.jpg / 390-first.jpg, `.hero__img`:** the hero image is broken (`dist/media/hero-C1*.webp` are 30-byte stubs) and its alt text renders over the logo. Ship a real decodable image, or, until the library lands, hide the broken `<img>` (onerror → `hidden`) and give `.hero` a designed fallback (a fog gradient on t-deep) so no alt text ever paints.
2. **1440-first.jpg / 1024-first.jpg, header on the hero:** the "RH" logo and the nav links are illegible on #141916. Set the header's text to `--paper` (#F3EFE6) while it sits over the dark hero (≥ 4.5:1), and keep the dark ink only after the header turns solid paper.
3. **1440-scroll-25.jpg, `#almanac-summer` figure:** an empty cream rectangle with no image and no caption. Fill it or give it the same captioned placeholder treatment as the others. A blank box must never ship.
4. **390-first.jpg, header at 390:** two grey skeleton bars float in the header. Remove or fix whatever renders them (likely the dial "pill" or the menu lines drawn at the wrong size).

## Should
1. **1024-first.jpg, `.header__dial`:** the ring overlaps the "Book" link. Hide the dial below 1100px or reserve 64px of space for it in the nav flex.
2. **#reviews, summer blockquote (1440-scroll-75.jpg, 1440-scroll-25.jpg):** replace `"` with curly quotes “ ”.
3. **Winter price box (1440-scroll-50.jpg):** give the mono price line `white-space: nowrap` on "per visit", or shorten it to "$140–$195 / visit" and put the Sample tag on its own line.
4. **#almanac-summer (1440-scroll-25.jpg):** add `margin-top: 1.5rem` between the blockquote and the "Price it" button.
5. **#services grid (1440-rm-full.jpg):** 9 cards in 4 columns leave an orphan. Use 3 columns (3×3), or make "Inside windows & screens" a wide closing card.
6. **Break band (1440-rm-full.jpg):** it is an empty dark void with a tiny caption. Either make it a full-bleed image with the caption on it, or turn it into a typographic almanac statement (a large Fraunces line such as "Four seasons, one house"). Do not leave a black slab.
7. **Area band hours (1440-rm-full.jpg):** set the hours as a two-column definition list (day | hours) with aligned tabular numbers, and label "Sat/Sun Closed" on one line each.
8. **Hero copy (1440-first.jpg):** add one line under the h1 that carries the thesis, e.g. "A cleaning plan that changes with Chattanooga's seasons: pollen, mildew, guests, cabins."
9. **Motion-on full page (390-full.jpg):** the split-line masks render as black bars over the intro. Make sure the split masks resolve to visible text when the observer never fires, using a timeout fallback that adds the revealed class.

## Elevate
(The verdict is not ELEVATE. These are the two moves that matter most once the Musts are in. The weakest categories after photo, which is pipeline-blocked, are motion and wow, tied at 6.5. Motion carries more weight.)
1. **motion:** make the Season Dial the scroll's clock. Draw it as four real arcs, with only the active season filled and the others as hairlines. Pin it top-right and drive its fill with ScrollTrigger across the four almanac spreads, so the quarter sweeps and the label ("SPRING → SUMMER") changes as each dateline crosses. One continuous motion story instead of fade-ups.
2. **wow:** let the countdown tool speak the dial's language. When a date is entered, the ring inside the tool sweeps from today to the deadline, marks the "book by" date on its rim and shows the two-visit plan as two ticks on the arc, so the output becomes an almanac diagram rather than a text line.
