COPY: needs copy-chief

# tattoo-A: critique round 1 (fast mode)

**Five-second test (1440-first.jpg, 390-first.jpg):** "A tattoo studio in Brooklyn, custom and fine line, I'd guess. 'Drawn for you.' They redraw my screenshot and show me before any ink, and needles are opened in front of me. Book a consult or text a photo." The eyebrow carries trade and city; the h1 does not. I'd find no healed work and no phone number until I scroll.

## First screen: 8.0
Earned: the signature is in the first screen (tabbed sheet "01 · IDEA", register marks, the violet transfer line under the h1). There is one primary action and a quiet secondary, a proof line with SAMPLE RATING, and the next band peeks.
- 1440-first.jpg: h1 "Drawn for you." has no trade and no place; it leans on the eyebrow (−0.5).
- 1440-first.jpg / 390-first.jpg: no phone number visible, only an icon button (−0.5).
- 1440-first.jpg: the right plate is a line-drawn limb, not the healed photo plate the concept promised. The hero proves nothing about the work.
- 390-first.jpg: the forearm plate ghosts behind the sheet with a stray register mark at the bottom right, which reads as a glitch.

## Distinctiveness: 8.5
Earned: the sheet stack runs through hero, services, process, reviews, form and footer (1440-full.jpg), and it is fully unlike sibling B's dark mono session sheet (B/1440-first.jpg).
- 1440-full.jpg: outside the process story the sheets are decoration. Services and reviews are ordinary cards with offset edges behind them (−0.5).
- 1440-scroll-75.jpg: hygiene, timeline and deposit drop the system.
- The "h2 left, grey side note right" intro is used 5 times.

## Typography: 8.0
Earned: Instrument Serif + Hanken with tight display tracking, curly quotes, and an italic violet transfer word that has a job.
- 1440-full.jpg contact and footer: "noon - 8 pm" uses hyphens; use an en dash (−0.5).
- 1440-full.jpg Styles band: the rail label, S1-S8 tabs and 8× "BOOK THIS" put too many tiny tracked caps in one view (−0.5).

## Layout: 8.0
Earned: a good tone rhythm, and the full-bleed healed-photo break works (1440-scroll-50.jpg).
- 1440-scroll-75.jpg: one deep band holds the timeline and the deposit ledger, which is two jobs (−0.5).
- 1440-full.jpg: the deposit box leaves the right ~400px empty, and the reviews right column ends early, leaving a blank tail (−0.5).
- 1440-scroll-25.jpg: the process sheets are 500px tall for 3 lines of text, so the story is mostly empty paper.

## Photo: 7.5
- 1440-full.jpg: one photograph on the whole page. For a tattoo buyer, healed work is the main trust signal.
- 1440-first.jpg: there is no hero photo, against the concept.
- 1440-scroll-50.jpg: the moth frame is a warm phone snapshot whose red sleeve fights the violet; it has no treatment tying it to the vellum system (−0.5).

## Copy: 8.5
Earned: real trade voice ("Itchy is normal; picking isn't.", "Nobody got rushed.") and full Sample labelling.
- 1440-scroll-75.jpg: the deposit ledger ends on "Book my six-week check", the wrong hand-off (−0.5).
- 1440-full.jpg Styles: the h2 promises "one we say no to", but the refusal is never named as an item.
- 1440-full.jpg: the hours table is printed twice (contact and footer).

## Mobile: 8.0
Earned: no overflow (render.json), the sticky CTA bar, and full-width buttons above the fold.
- 390-full.jpg Styles: 8 one-per-row sheets, about 2,400px of the same card. The desktop grid is collapsed, not composed (−0.5).
- 390-full.jpg Day 1-42: the labels and text sit flush against the rail with no gap (−0.5).
- 390-first.jpg: ghost plate behind the hero sheet.

## Accessibility: 8.5
Earned: axe and console are clean, and the reduced-motion shots (1440-rm-full.jpg, 390-rm-full.jpg) show every word, with the process as a 5-up grid. Heading order is clean and inputs are labelled. Focus is not verifiable from the shots.

## Motion: 8.5
Earned: the drawing is redrawn as the sheets stack (scribble in 1440-full.jpg, clean line in 1440-scroll-25.jpg), plus the intro transfer line, the timeline draw, the estimator redraw and the steps.
- Services, reviews and hygiene seem to share one stagger reveal, and the services hover is the standard lift.

## Wow: 8.5
Earned: the process redraw is tied to the thesis, and the estimator draws a stencil on a limb (1440-full.jpg, "Get a number before the consult").
- The estimator output sheet is small and secondary, and the process sheets are mostly empty, so the moment under-sells itself.

## Polish: 8.0
Earned: favicon SVG, apple-touch icon, OG 1200×630, JSON-LD, print CSS, and a designed footer sheet.
- 1440-scroll-75.jpg: the timeline rule strikes through the DAY labels (mustFix).
- 1440-full.jpg: shadows on every non-floating card (−0.5).

## Arithmetic
14×8 + 12×8.5 + 10×8 + 10×8 + 8×7.5 + 8×8.5 + 7×8 + 7×8.5 + 12×8.5 + 8×8.5 + 4×8
= 112 + 102 + 80 + 80 + 60 + 68 + 56 + 59.5 + 102 + 68 + 32 = 819.5 / 100 = **8.20**

## Must
1. **1440-scroll-75.jpg, #after timeline:** the violet rule strikes through the DAY 1-30 labels. Move the rule to the dot row, through the circle centres, or push the labels at least 12px below it. Verify at 1440 and 1024.

## Should
1. **#hero h1:** add trade and place to the display line, e.g. "Fine line tattoos, *drawn for you* in Brooklyn." (keep it ≤ 8 words).
2. **Header at ≥ 1024:** show "(718) 555-0101" as text next to the phone icon, using the token.
3. **#hero plate:** place the approved healed-forearm photo under the sheet as the concept specified. At ≤ 640, drop the ghost plate behind the sheet, or show it as a clean plate above the sheet.
4. **#after:** split the deposit ledger out of the timeline band, or set it in the right column beside the timeline. Change its button to "Book a consult"; keep "Book my six-week check" on the timeline.
5. **#styles:** name the "one we say no to" as its own sheet, e.g. "S9 · No: lines under 2 cm", struck in graphite, with a one-line reason. At ≤ 640, make the 8 sheets a 2-column compact list or a stacked-edge deck.
6. **Hours tables (#contact, footer):** use en dashes ("noon–8 pm") and keep one full table. The footer can show the open-now line only.
7. **#after timeline at 390:** add padding-left of at least 20px between the rail and the text.
8. **#process sheets:** cut the empty height (min-height ~ auto + 48px), or put a small Caveat annotation or the tool note inside each.
9. **Cards (services, reviews, form):** drop the drop shadows; the offset sheet edges already give depth.
10. **#reviews:** balance the two columns, or end the right column with the rating sheet so there is no blank tail.

## Elevate
- **Photo (7.5):** make healed photography the thing the sheets are laid over. Put a healed-work plate in the hero under sheet 01, with register marks on its corners. Have the process story end at sheet 05 by lifting the last vellum sheet off a real healed photo, so the drawn sprig meets skin. Give every photo one treatment (vellum-white mat plus a cool graphite grade) so the photos read as one shoot, and add 2 more healed frames where they act as proof.
- **First screen (8.0):** let the first screen prove the work, not describe it. Use a display line with trade, Brooklyn and the italic transfer phrase, show the phone number as text, and have the tracing sheet sit over a real healed photo so the signature and the evidence are one image.
