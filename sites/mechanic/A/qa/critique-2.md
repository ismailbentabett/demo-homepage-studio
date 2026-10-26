COPY: ok

# mechanic-A: critique, round 2

Evidence: fresh capture (render.json 2026-10-26T14:58). Round 1 was scored blind from HTML with no screenshots; this round has them, and they show problems the HTML could not. Several scores drop because of that, not because a fix broke something.

**Upstream finding:** every file in `dist/media/` and in `niches/mechanic/media/approved/` is a 122-byte placeholder JPEG. No photo renders anywhere on the page. Each frame is a grey box with its alt text printed in it. The orchestrator has to re-run media curation for the mechanic niche. The builder cannot fix this.

## Five-second test
- **1440 (1440-first.jpg):** "Line Item does auto repair and diagnosis in Lansing, MI. They won't touch anything without my yes. I call (517) 555-0185 or price a check-engine job." Clear. The repair-order card with three lines (01 DOING / 02 WAITING / 03 WAITING) reads at once. The right half of the hero is a grey box with alt text in it, and the next band does not peek: below the hero there is only a white strip.
- **390 (390-first.jpg):** a grey placeholder box, then the kicker, then the h1 in 3 lines, then the RO card. Neither hero button is above the fold. The sticky mobile bar has no styling: "Call (517) 555-0185" is bare black text with no fill, "Book drop-off" is a black outline, and the bar sits over the RO card's text. A visitor can tell what the business is but has no clean action to tap.

## firstScreen: 7
Earned: the h1 names the trade and the city (5 words). One orange primary plus a quieter outline secondary. Phone in the header and the hero. The signature RO card is in the first screen and organises the visit (1440-first.jpg).
- 1440-first.jpg: the h1 has trade and city but no outcome, and there is no proof line under it. The kicker sits above it in faint mono caps. That is not the 9 anchor.
- 1440-first.jpg: the hero ends on a white strip with no band showing. The orange guarantee band does not peek (−0.5).
- 390-first.jpg: both hero actions fall below the fold, and the only action in view is the broken mobile bar (−1.5).
- 1440-first.jpg / 390-first.jpg: the hero image is an empty grey box with alt text (scored under photo, not deducted again here).

## distinctiveness: 8.5
Earned: the .ro-line repair-order signature shows in the hero card, the story rail (04 YOUR YES → 07 PICK-UP), the services (01-09 with chips), the reviews (01-03 with service chips), the brake tool output (METAL chip) and the footer (01-06 DONE, then "ALL LINES DONE · Keys at counter") (1440-rm-full.jpg, foot crop of 1440-full.jpg). It organises information rather than decorating it. Arvo, graphite and safety orange share nothing with sibling B (green, grotesk) or C (navy, high-contrast serif).
- 1440-rm-full.jpg: the same section shape (a full-width stack of ro-line rows) repeats in story, services, reviews and footer, with no change in density or scale. Four bands read as one list (−0.5).
- No 9: with every photo a grey box, the page cannot pass the cover-the-logo test as a shoot for this shop. The signature is the only thing carrying identity.

## type: 7.5
Earned: Arvo 700 display with Source Sans 3 body and DM Mono for line numbers, clocks and chips. The h1 at 1440 against the 16px RO lines gives one real scale-contrast moment (1440-first.jpg). Hours use en-dash ranges ("7:30 am – 5:30 pm", footer of 1440-full.jpg).
- 1440-full.jpg (reviews, ~y5600): the review quotes use straight quotes ("I dropped …") (−0.5).
- 1440-full.jpg (reviews): the quote column is squeezed to about 90px, roughly 2-3 words per line, so the measure is far under 35ch (−0.5).
- 1440-rm-full.jpg (services): the group label "DIAGNOSTICS & ENGINE", the chips and the "SAMPLE PRICING" tags make 3+ tiny tracked caps labels in one view. The hero has the kicker plus the chips too (−0.5).

## layout: 7
Earned: a real 12-column grid at 1440, with a full-bleed accent guarantee band, a dark decoder band, the dark brake band and a dark footer. The sections alternate tones (1440-rm-full.jpg).
- 1440-full.jpg (reviews): the grid is lopsided. Number, chip, a ~90px quote column and stars sit in one row, the quote wraps word by word, and the third card is cut off at the right edge. The same failure shows on the 390 services rows (390-rm-full.jpg, ~y3800: titles squeezed into a ~150px column) (−1.0).
- 1440-full.jpg (story crop, y≈700-820): a white strip of about 24px sits between the hero (paper) and the orange guarantee band. It is a stray gap of a third tone (−0.5).
- 1440-rm-full.jpg: the reviews band (paper) runs straight into the planner (paper) and then the form (paper, after the ZIP band). The reviews and planner touch and read as one block. Not deducted separately.

## photo: 4
- 1440-first.jpg, 1440-scroll-25.jpg, 1440-scroll-50.jpg, 1440-scroll-75.jpg, 390-first.jpg: all 7 image slots render as flat grey boxes with the alt text printed inside. There is no photograph on the page. `dist/media/*.jpg` are 122-byte placeholders. This is below the 6 anchor: a 6 has wrong photos, this has none.
- foot crop of 1440-full.jpg: the credits read "Photo by unknown on Pexels" seven times.
- Positive: the alt text describes each frame properly now (round-1 item fixed).
mustFix (see below). Probably an upstream niche-library issue, but the score reflects what a visitor sees.

## copy: 9
Earned: the voice is plain, specific and in trade terms. "Nothing is repaired until we call you with a photo, a price and your yes." answers the brief's top fear directly (1440-full.jpg, guarantee band). The service blurbs use concrete nouns: sway bar link, vacuum hose, tensioner, salt-rotted pipes (390-rm-full.jpg). Every price is tagged SAMPLE PRICING and every review SAMPLE REVIEW (1440-full.jpg). Secondary actions are named consistently: "Price it", "Price check engine", "Price brake repair".
- 1440-scroll-50.jpg: the brake tool defaults to "Metal-on-metal. Stop driving and call now." That makes the first reading an alarm, which works against a page that sells calm diagnosis. Should, not a deduction.
- 1440-full.jpg: the h2 "Book a drop-off or get a quote" puts two jobs in one heading. Minor.

## mobile: 6.5
Earned: the page stacks, there is no sideways scroll at 390, the RO footer is legible (390-full.jpg bottom), and the services and tools are usable with a thumb (390-rm-full.jpg).
- 390-first.jpg and 390-full.jpg (~y1200): the sticky mobile bar has no styling. The call link has no fill, the label wraps to 2 lines, and the bar overlaps the RO card and then the guarantee sentence ("a price and your yes" collides with "Call (517)"). **mustFix**, which caps mobile at 8.0 in fast mode, and further −1.0 for covering content.
- 390-rm-full.jpg (~y3800-5300): the service rows keep a 3-column desktop line. Titles are squeezed into ~150px, and "Starting and charging" runs 3 lines in a card title next to a wide chip column. Collapsed, not composed (−0.5).
- 390-full.jpg bottom: an empty white band about 80px tall under the dark footer (body padding for the bar, showing paper/white) (−0.0, polish).
- render.json: 320px overflows to 378px (.ro-line__body). This is a check failure and already FIX. Listed in Must, not deducted again.

## a11y: 8
Earned: reduced motion shows every section, every story frame and every service line (1440-rm-full.jpg, 390-rm-full.jpg). The form fields have visible labels (1440-full.jpg form). The tabs show a visible selected state (1440-scroll-75.jpg). There is one h1 and the h2s run in order. The carousel buttons are now 48px (1440-full.jpg reviews, round-1 item fixed).
- 1440-first.jpg: the kicker "BY APPOINTMENT · NOTHING DONE WITHOUT YOUR YES" is light grey mono on paper, and the "SAMPLE PRICING" tags are light grey too (1440-scroll-50.jpg). Both look under 4.5:1 for small text (−0.5).
- 390-first.jpg: while the mobile bar overlaps, the RO card text underneath cannot be read (counted under mobile).

## motion: 8
Earned: hooks beyond plain reveals: the RO intro chip state with the 7:30 clock (1440-first.jpg), the clip wipe on the story frames, caught mid-wipe in 1440-full.jpg story crop, the h2 slide-left, the service stagger, the brake bars that respond to the slider (1440-scroll-50.jpg), and the carousel. Reduced motion is respected (1440-rm-full.jpg).
- 1440-full.jpg (story crop): mid-scroll the story frames are thin grey slivers with ~250px of empty rail under them. The wipe reveals placeholders, so the motion explains nothing yet. No deduction beyond the anchor, but nothing earns a 9 either. Motion that "explains order" is not visible in 1440-scroll-25.jpg.

## wow: 8
Earned: the brake tool output is now an RO line (a METAL chip, a status line and a reason), and the four pad-thickness bars echo the slider (1440-scroll-50.jpg). That is a real improvement on round 1's text-only output. The footer closing the order as "ALL LINES DONE" is a neat payoff (foot crop).
- 1440-scroll-50.jpg / 390-rm-full.jpg: the output card shows a stray dot where the clock or line number should be.
- 1440-scroll-25.jpg / 390-rm-full.jpg: the warning-light decoder output is an empty dark slab until something is tapped. Nothing tells the visitor what will appear.
- Neither tool produces something to keep. There is no print or text-me sheet, so this is not the 9 anchor.

## polish: 7
Earned: SVG favicon, theme-color, OG, JSON-LD, one 2px radius used throughout, and a designed RO footer (foot crop of 1440-full.jpg).
- foot crop: the credits repeat "Photo by unknown on Pexels" ×7 (−0.5).
- 1440-scroll-75.jpg: the planner uses native, unstyled 13px radio buttons next to designed tabs and buttons (−0.5).
- story crop of 1440-full.jpg: a white strip between the hero and the band. 390-full.jpg: a white band under the footer. 1440-scroll-50.jpg: a stray dot in the brake output (−0.5 combined, nothing out of place is the 10).

## Arithmetic
14×7 + 12×8.5 + 10×7.5 + 10×7 + 8×4 + 8×9 + 7×6.5 + 7×8 + 12×8 + 8×8 + 4×7
= 98 + 102 + 75 + 70 + 32 + 72 + 45.5 + 56 + 96 + 64 + 28
= 738.5 / 100 = **7.39** (7.385)

Verdict expected: FIX (photo below its floor of 6, mobile below its floor of 8, mustFix not empty, render check has an error).

## Must
1. **where:** 1440-first.jpg, 1440-scroll-25.jpg, 1440-scroll-75.jpg, 390-first.jpg, all `[[img]]` slots. **problem:** every image is a 122-byte placeholder, so the page shows grey boxes with alt text instead of photos, and the credits read "unknown". **fix:** re-run media curation for `niches/mechanic` so `approved/` holds real Pexels frames with photographer credits, then rebuild. The builder cannot fix this from src.
2. **where:** 390-first.jpg, 390-full.jpg (~y1200), mobile call bar. **problem:** the sticky bar has no styling. The call link has no fill, labels wrap to 2 lines, and the bar overlaps the RO card and the guarantee sentence. **fix:** give the bar a solid paper (or graphite) background with a top hairline. Make the call link the orange primary (fill #D45A1F, white text, min-height 48px) and "Book drop-off" the outline secondary. Use a 1fr 1fr grid with `white-space: nowrap` and a shorter call label ("Call" plus the icon). Hide the bar until the hero CTAs scroll out of view.
3. **where:** render.json (320px overflow, `.ro-line__body` right 338). **problem:** horizontal scroll at 320. **fix:** below 400px, change the ro-line grid to two rows (`grid-template-columns: auto 1fr` with number and chip on row 1, body spanning on row 2) and set `min-width: 0` on `.ro-line__body`.
4. **where:** 1440-full.jpg reviews band (~y5600). **problem:** the quote column collapses to ~90px, the text wraps word by word, and the third card is cut off at the right edge. **fix:** in `.ro-line--review`, give the quote `grid-column: 1 / -1` (full width under the number and chip row) or size the card to 2 per view at 1440 with the quote at min 36ch. Make sure the track clips cleanly inside the container.

## Should
1. **where:** 1440-full.jpg, between `#hero` and the guarantee band. **problem:** a ~24px white strip. **fix:** remove the stray margin or background (the band should butt the hero, or the hero should end in paper with the band peeking 40-120px at 900px tall: trim the hero's bottom padding).
2. **where:** 1440-first.jpg, under the h1. **problem:** no outcome in the h1 and no proof line. **fix:** add a one-line proof under the h1 in body size: "Mon–Fri 7:30 am – 5:30 pm · Sat 8 – noon · 4.8 from 341 reviews (Sample)", using tokens.
3. **where:** reviews blockquotes (1440-full.jpg). **problem:** straight quotes. **fix:** use “ ” (or `<q>` with `quotes` set).
4. **where:** 1440-scroll-50.jpg, `#brake` output. **problem:** a stray dot in the line-number or clock slot, and the slider defaults to metal-on-metal. **fix:** put a mono line number ("Line 10") or a mm reading ("3 mm") in that slot. Default the slider to 6 mm (HALF · "Plan on pads in the next few months").
5. **where:** 1440-scroll-25.jpg, decoder output slab. **problem:** an empty dark box before any tap. **fix:** pre-select "Check engine (steady)" so the output shows a full ro-line answer (chip SAFE TO DRIVE, line, what we check first) on load.
6. **where:** 1440-scroll-75.jpg, planner slots. **problem:** native 13px radios. **fix:** style each slot as a ro-line row (48px tall, mono time on the right, WAITING chip that flips to BOOKED when checked) with `accent-color` as the fallback.
7. **where:** 390-rm-full.jpg services. **problem:** card titles squeezed into a ~150px column, up to 3 lines. **fix:** use the same two-row line as Must 3, with the title full width under the number and chip, and the price tag and "Price it" in one row under the blurb.
8. **where:** 1440-first.jpg kicker, 1440-scroll-50.jpg SAMPLE PRICING tags. **problem:** light grey small text on paper. **fix:** darken to ink at 70% (≥ 4.5:1 on #F5F3EE), and drop either the kicker or the tracked caps on the group labels so that no view shows 3 caps label styles.
9. **where:** foot crop of 1440-full.jpg. **problem:** "Photo by unknown on Pexels" ×7. **fix:** follows from Must 1. Render real names once, as one sentence ("Photos: A, B, C on Pexels").
10. **where:** 390-full.jpg bottom. **problem:** a white band under the footer. **fix:** put the bar's padding-bottom on the footer (graphite), not on the body.

## Elevate
1. **photo (4, weight 8):** once real frames exist, make every photo a "photo we text you" attached to its repair-order line. Each frame sits in the RO rail as an attachment, with a mono strip under it ("ATTACHED · front wheel off, rotor and caliper visible"), so the brief's trust point ("seeing the problem") becomes the photo treatment itself. The frames should be graded as one shoot in graphite and orange.
2. **mobile (6.5, weight 7):** compose the repair order for the phone instead of collapsing it. Use a two-row ro-line (number and chip, then the full-width body). Re-cut the hero so the RO card comes first and the photo becomes a narrow attachment strip. Turn the sticky bar into the order's own "next line" ("08 · YOUR CALL · Call / Book drop-off") that docks at the bottom and hides over the form.
