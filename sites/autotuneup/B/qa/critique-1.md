COPY: needs copy-chief

# autotuneup-B — critique round 1 (fast mode)

**Five-second test.** 1440-first.jpg: "A car-maintenance shop in Reno that tells me what's due at my mileage. I type my miles and press Check my interval. Phone is top right. Why them: 'no upsell'." The right half of the screen is empty paper with the words "Placeholder for hero-B1". 390-first.jpg: same answer, and it's cleaner because the missing photo is below the fold. The h1 is 2 lines and the input and CTA are above the fold. The sticky bar shows Call + Get my plan.

## First screen — 7.0
Earned: the h1 "What's due at your odometer in Reno" is 7 words and names the place, and "odometer" plus the eyebrow tell you the trade. One primary action. The phone is in the header (1440) and the sticky bar (390). There's a proof line with "(Sample rating)". The next band peeks about 64px (1440-first.jpg). The signature (odometer rows) is visible in the hero.
Deductions:
- 1440-first.jpg: the right ~45% of the hero is blank paper with "Placeholder for hero-B1" as visible text. The composition is half a page (−1.0, mustFix → capped).
- 1440-first.jpg / 390-first.jpg: before any input, the result rows read `000000 DUE NOW Oil change · Rotation`. At zero miles nothing is due, so the tool contradicts itself on first sight (−0.5).
- 1440-first.jpg: the proof line is ~12px grey in a middle-dot string, the weakest text on the screen (−0.5 against the 9 anchor).

## Distinctiveness — 8.0
Earned: unmistakably different from both siblings (A: Quarter Hour, wide grotesk + stopwatch over a dark band; C: Thin Air, dark navy, centred, altitude rail). B is light-led, condensed Barlow, tool-first. The odometer row shows up in the hero, services (`030000 30,000 MI`), report (`045000`), review cards (`042000`) and footer (`044403 YOUR NEXT SERVICE`) in 1440-full.jpg, so ≥ 4 sections including hero and footer.
Deductions:
- 1440-full.jpg: a tracked mono-caps eyebrow sits above every h2 (BY THE BOOK…, READINGS, NOT GUESSES, RIGHT OIL…, TWO-MINUTE SELF-CHECK, PLAN YOUR MORNING, FROM NEIGHBORS…, NEAR YOU…), plus mono micro-labels everywhere (−0.5 slop tell).
- 1440-scroll-25.jpg, 1440-full.jpg: the section shapes are standard (heading left, list/grid below, three times: services, report, reviews), and the reviews are three bordered cards in a row (−0.5).
- The signature is a label in most places. It doesn't organise the services list beyond one row (1440-scroll-25.jpg).

## Typography — 7.5
Earned: Barlow Condensed display with tight tracking reads as a dashboard. Karla body ≥ 16px at full ink. DM Mono is listed as the accent in the concept, so it doesn't count as a third family. The oil table uses en-dash ranges (1440-scroll-50.jpg).
Deductions:
- 1440-first.jpg: straight apostrophe in the h1 "What's" and hyphen ranges in "Mon-Sat 7:30-6" (−0.5).
- 1440-first.jpg, 1440-scroll-50.jpg: 3+ tiny tracked caps labels per view (eyebrow, TREAD, WIPERS, CHOOSE SERVICES, STEP 1 · MILEAGE) (−0.5).
- 1440-scroll-25.jpg: service h3s ("Battery and wipers") are barely larger than the body and sit on the description with no gap. "PRICE IT" floats as an unanchored condensed word. The hierarchy in the services band is flat.

## Layout and rhythm — 7.0
Earned: real tone alternation (paper → dust → paper → ink → blue → paper → dust → paper → ink → paper) in 1440-full.jpg. The oil comparison band is a good asymmetric split (1440-scroll-50.jpg).
Deductions:
- 1440-scroll-25.jpg: the "place" band is ~450px of empty paper, a stray alt string and a floating grey-gradient caption box: a blank gap over half a screen (−0.5).
- 1440-first.jpg, 1440-scroll-50.jpg (self-check, right column empty except alt text), 1440-full.jpg (contact "Get your interval plan" is a narrow form floating in empty width): half the columns at 1440 do nothing (−0.5).
- 1440-scroll-25.jpg: the services band is a single left-aligned text column spanning 1392px with the right two-thirds empty. The rows read as a list dump, not a designed section (−0.5).
- 1440-scroll-75.jpg: the booking card is centred in a dust band with centred labels. Fine on its own, but it's the third centred moment.

## Photo and video — 4.5
What a visitor sees: not one photograph renders. hero-B1 (1440-first.jpg), place-reno-desert (1440-scroll-25.jpg), the three report frames (1440-full.jpg, dark band shows only alt sentences), and process-tire-pressure (1440-scroll-50.jpg) are all blank boxes with the alt text printed as visible copy. The alt text itself is good and on-topic ("Tread depth gauge pressed into tire grooves…"). Below the 6 floor. The siblings at least render their missing slots as designed tone blocks (A, C 1440-first.jpg); B shows bare paper.
- mustFix: every image slot must render a real approved frame, or a designed fallback (tone + signature frame) that never prints alt text as page copy.

## Copy — 8.0
Earned: specific and in the trade's voice: "Run a quarter across three grooves. If the tread meets Washington's head, you're above 4/32" (1440-scroll-50.jpg), "Heat kills batteries here", "Ranges vary by make and driving. Your spec wins." Reviews carry "Sample reviews". Facts check out against facts.json (prices, hours, areas). 3 em dashes, at the limit.
Deductions:
- Five names for the primary action: "Check my interval" (hero), "Get my plan" (390 bar), "Price it" (services), "Book a rotation" (self-check), "Get your interval plan" (contact), plus a booking card whose only button is "Call" (1440-scroll-75.jpg) (−0.5).
- 1440-scroll-75.jpg: "Estimated bay time —" shows a lone dash. Microcopy at the moment of doubt is empty (−0.5).
- 1440-full.jpg: the area h2 "Serving Reno and Sparks, Sun Valley, Lemmon Valley, Verdi and Carson City" is a list, not a headline, and runs 2 lines.

## Mobile — 8.0
Earned: no overflow at 390/320 (render.json). On 390-first.jpg the h1 is 2 lines, the input + CTA are above the fold, and there's a sticky call bar. Hero result rows wrap cleanly.
Deductions:
- 390-first.jpg: the sticky bar has two equally weighted buttons (filled Call + outlined Get my plan at the same size), so it competes with the hero CTA "Check my interval" (−0.5 against the 9).
- 390-full.jpg: three stacked empty report frames and two empty photo blocks make long dead scrolls on a phone. Nothing is re-cut for the phone (crop/order/density are unchanged from desktop).

## Accessibility — 8.5
Earned: 1440-rm-full.jpg shows every word (rows at final values, footer odometer at 045000). `:focus-visible` rules and `forced-colors` handled. Skip/labels present in dist. One h1, sequential h2/h3.
Deductions:
- 1440-full.jpg (report band): the "ROTATE & WATCH" pill is light cyan with light text on ink. It looks under 4.5:1 for 10px caps; verify and fix (should).
- 1440-first.jpg: the proof line is grey, ~12px; check it against 4.5:1 on paper.

## Motion and interaction — 8.0
Earned: varied hooks in dist (split lines/chars on headings, clip reveals on 6 items, a scale reveal, a digit roll caught mid-flight in 1440-full.jpg footer `044403` vs `045000` in 1440-rm-full.jpg), plus tabs, estimator, wait-or-drop, ZIP, open-now. Reduced motion is respected.
Deductions:
- 1440-first.jpg: at 0% the hero rows sit at `000000 / 050000 / 100000` with no roll to a sample mileage visible. The signature roll isn't shown on arrival, which is the one moment the concept promised.
- 1440-scroll-25/50/75.jpg: nothing in the frames shows the per-section clip wipe of the odometer rows. The services rows look static.

## Wow — 7.5
Earned: a mileage tool in the hero that answers "what's due" is a real homeowner tool, tied to the thesis.
Deductions:
- 1440-first.jpg: the tool output is three text rows with pills. Nothing is designed beyond a list, and there's nothing to keep or print (−0.5).
- 1440-full.jpg: the "sample report you can hold" should be the second moment, but its three frames are blank, so it reads as three captions on black (−0.5).

## Polish — 7.0
Earned: SVG favicon + apple-touch, theme-color, OG, JSON-LD, print stylesheet, forced-colors (dist/index.html).
Deductions:
- 1440-scroll-25.jpg: a grey gradient caption plate "High desert light on the way to the shop" floats over nothing (−0.5).
- 1440-first.jpg: the logo is the bare letters "NI" in display type, no mark and no name. It reads as unfinished next to siblings with a designed badge (−0.5).
- 1440-scroll-75.jpg: the "Estimated bay time" dash and the radius mix (pill status chips, 2px buttons, square cards) (−0.5).

## Arithmetic
14×7 + 12×8 + 10×7.5 + 10×7 + 8×4.5 + 8×8 + 7×8 + 7×8.5 + 12×8 + 8×7.5 + 4×7
= 98 + 96 + 75 + 70 + 36 + 64 + 56 + 59.5 + 96 + 60 + 28 = 738.5 / 100 = **7.39** (7.385)

Photo 4.5 < floor 6, mustFix not empty → **FIX**.

## Must
1. **1440-first.jpg, #hero media slot**: blank half-hero with the visible text "Placeholder for hero-B1". Fix: render the approved hero-B1 frame. If only placeholder art exists, style the slot as a designed panel: ink or dust tone, a large `045,000` odometer readout in Barlow Condensed with the three status pills. Alt text must never print as page copy.
2. **1440-scroll-25.jpg, place-reno-desert band**: ~450px empty paper, a stray alt string and a floating gradient caption. Fix: give the frame a real image/tone fill at a fixed aspect-ratio (e.g. 16/7 full-bleed), or delete the band and its caption.
3. **1440-full.jpg, #report (3 frames) and 1440-scroll-50.jpg, self-check frame**: empty boxes showing alt sentences. Fix: same as 1: real frames or a designed tone fill with object-fit:cover and no visible alt text.
4. **1440-first.jpg / 390-first.jpg, hero estimator rows**: the default state says `000000 DUE NOW Oil change`. Fix: show the sample state at `045,000` (labelled "Sample: 45,000 mi") so due/next/not-yet are true for the number shown.

## Should
- **#hero proof line (1440-first.jpg)**: "Mon-Sat 7:30-6 · … · 4.8 (Sample rating)". Fix: en-dashes ("Mon–Sat 7:30–6"), set it at 15px full ink, and split it into two clean lines (hours / areas + Sample 4.8).
- **h1 (1440-first.jpg)**: straight apostrophe. Fix: `What’s`.
- **Primary action name (whole page)**: pick one, "Get my plan", and use it on the hero submit's follow-on, the 390 bar, the services "Price it" links, the "Book a rotation" button and the contact h2/button. Keep "Check my interval" only as the estimator's submit.
- **#plan booking card (1440-scroll-75.jpg)**: "Estimated bay time —". Fix: default to the selected service's estimate ("about 30 min") or the line "Pick a service to see bay time". Add a booking button ("Get my plan") above the Call button.
- **#services (1440-scroll-25.jpg)**: one long text column at 1440. Fix: put the odometer row in a fixed left column (≈ 4/12) and service name/blurb/price in the right column (8/12), with h3 at ≥ 28px, 8px gap to the blurb, and "Price it" as a ruled link with the price range from facts.
- **Eyebrows (1440-full.jpg)**: drop the mono eyebrow from at least four of the eight h2s. Keep it only where it adds information (report, reviews).
- **Report pill "ROTATE & WATCH" (1440-full.jpg)**: check contrast on ink and use a darker fill with paper text or accent text on transparent.
- **Logo (1440-first.jpg)**: pair the "NI" initials with the short name "Next Interval" and a small odometer-slot mark.
- **390 sticky bar (390-first.jpg)**: make Call the filled button and "Get my plan" a text-weight secondary, or a single bar button.

## Elevate
- **Photo (weakest, 4.5)**: make the frames part of the odometer system. Every image sits in an instrument-cluster frame: ink border, a mono mileage readout pinned to the bottom-left corner that rolls when the frame clip-reveals. The report band becomes three such "readings": photo + reading + status pill, one shoot, one grade. If no frame exists, the frame still reads as a designed gauge panel, never blank paper.
- **Layout (7.0, tie with first screen/polish broken by weight → firstScreen is weight 14, but photo + layout carry the blanks)**: give the scroll a shape built on the odometer. The hero splits 7/5 with the right side a giant live readout. Services become a full-width "interval ledger": rows ruled like a trip-meter tape, odometer column fixed left, so the 1440 width is used. One full-bleed break (the place photo with the h2 overlaid in condensed type) replaces the empty place band.
