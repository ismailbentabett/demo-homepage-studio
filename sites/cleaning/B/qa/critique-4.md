COPY: needs copy-chief (copy 8.5: "same crew" said four times)

# cleaning-B, critique round 4 (mode: fast, scored as always)

## Five-second answer
1440-first.jpg / 390-first.jpg: "House cleaning in Huntsville that gives you a price line by line before anyone comes. I tap 'Price my house' or call (256) 555-0153. Why them: the checklist and Sample prices are right here, a walk-through confirms it, 4.8 Sample rating, open now."

## What changed since round 3
- Real photos replace every hatched placeholder (1440-full.jpg). The photo mustFix is closed.
- 390 overflow is gone (qa/render.json: 390 and 320 scrollWidth equal the viewport). The mustFix is closed.
- Fresh render.json lists the reduced-motion and 25/50/75 frames, and 1440-rm-full.jpg shows every word. The mustFix is closed.
- Price ranges now use "to" everywhere (1440-scroll-50.jpg). The footer's "Image list" is now "Photos".

## First screen: 9
The h1 has 7 words on 3 lines and names trade, city and outcome. There's one primary action plus a quieter "or call". The phone shows in the header and the hero, the proof line carries a Sample rating, and the next band peeks ~75px (1440-first.jpg). At 390 the h1 runs 3 lines with the CTA, the phone and a sticky bar above the fold (390-first.jpg). It stays under 10 because the ticket photo is a cabin bedroom with towel rolls, a rental look rather than a Huntsville home.

## Distinctiveness: 8.5
The Running Receipt shows up in 8 places (1440-full.jpg). Two deductions (−0.5 overall): the ticket-left/content-right shape repeats 6 times, and #services ends nine rows with the same "Price this visit" link (1440-scroll-50.jpg).

## Type: 8.5
The price format is now consistent (fixed). The pairing and scale contrast are good. −0.5: three or more tracked-caps mono labels per view (1440-scroll-50.jpg "YOU CAN CHANGE IT ANY VISIT", 1440-first.jpg "* * * LINE BY LINE * * *").

## Layout: 8
Earned: a full-bleed sienna break (1440-scroll-25.jpg), the offset triptych and staggered stubs, and good tone alternation. Deductions:
- −0.5: the #services dark band leaves ~800px of empty left column under the price list (1440-rm-full.jpg).
- −0.5: the same ticket-left shape is used in hero, price, list, services and form.

## Photo: 7.5
Earned: real photos, no repeats, and consistent crops inside the ticket frames. Against it, the set reads as hotels:
- marble hotel bath with toiletry kit in #break (1440-scroll-25.jpg)
- cabin bedroom with towel rolls in the hero (1440-first.jpg)
- hotel towel shelf in triptych 03 (1440-full.jpg)
- a saturated green cloth in the form ticket that clashes with the palette (1440-full.jpg, #quote)
- triptych 01 shows hands peeling a sweet potato, which isn't cleaning

There's also no shared grade across frames. Photo is above its floor (6) but below the fast pass mark (8.0).

## Copy: 8.5
Earned: a specific voice (PCS move-outs, "They learn the dog", "By day ten the house starts to slip"), doubt microcopy, and Sample labels everywhere. Facts check out against facts.json (264 reviews, 10 years, guarantee). −0.5: "same crew" appears in the #break h2, the crew lede, the first service blurb and the Derek S. review (1440-scroll-25.jpg, 1440-scroll-50.jpg).

## Mobile: 9
Overflow is fixed (render.json). 390-first.jpg is clean. In 390-full.jpg the estimator slip stacks above the controls and the options are full-width and thumb-sized. The breakpoints cover 390, 640, 900, 1200 and 1440.

## A11y: 9
Reduced-motion full pages show everything (1440-rm-full.jpg, 390-rm-full.jpg). There's one h1 and no heading skips. The ZIP input is labelled, and forced-colors and print styles are present. The quiz slip has a text empty state.

## Motion: 8
The 25/50/75 frames (1440-scroll-25/50/75.jpg) only show settled states. The dist hooks are varied, but no frame shows the receipt printing or the hero ticket filling, so the motion doesn't carry the thesis.

## Wow: 8.5
The live estimator receipt with Sample pricing and "Print this ticket" (1440-rm-full.jpg #price) is strong. But the hero ticket still reads "you pick" (1440-first.jpg) and never becomes the reader's own receipt.

## Polish: 8.5
The receipt footer is well done. −0.5: the photo credits show raw Commons metadata (1440-full.jpg footer): "Photo by Category:Government of the United States Virgin Islands", a photographer's personal email, and orphaned ", CC BY-SA 4.0" lines.

## Arithmetic
14×9 + 12×8.5 + 10×8.5 + 10×8 + 8×7.5 + 8×8.5 + 7×9 + 7×9 + 12×8 + 8×8.5 + 4×8.5
= 126 + 102 + 85 + 80 + 60 + 68 + 63 + 63 + 96 + 68 + 34 = 845 / 100 = **8.45**

## Must
None. All three round-3 mustFix items are closed by the evidence above.

## Should
1. **Photos (hero ticket, #break, triptych 03, #quote ticket).** Problem: hotel and cabin interiors, plus a green cloth that clashes with the palette. Fix: swap each for residential interiors from niches/cleaning/media/manifest.json, and in #quote use a neutral process shot such as mop or vacuum (already in the library).
2. **Triptych 01 (crew section).** Problem: a food-prep photo. Fix: use a sink or shower-glass cleaning frame.
3. **Footer #photos credits.** Fix: clean the credit strings to "Photo: <author>, Wikimedia Commons, <licence>". Drop "Category:", strip the email from the Sienicki credit, and keep the licence on the same line (white-space:nowrap on the licence span).
4. **#services.** Fix: keep "Price this visit" on hover/focus only, or keep it on the first row and make the rest the row's whole-row link. Then fill the empty left column under the price list by making the ticket sticky (position:sticky; top:96px) so it travels with the nine rows.
5. **Copy.** Fix: keep "Same crew." only in the #break h2. Change the crew lede to "The people who clean your house the first time come back on the weekday you picked." (drop the restatement), and the first service blurb to "Your house on a two-week rhythm: they learn the pets, the rooms and the order you like."
6. **Mono labels.** Fix: reduce tracked caps to one per view and set the rest in sentence-case mono without letter-spacing ("You can change it any visit").

## Elevate
- **Photo (7.5):** Recast the set as one residential shoot printed on the receipt. Swap in home interiors (a family kitchen counter, a lived-in living room, a home bathroom) and give every frame one warm paper-toned grade so they read as a single job, not a stock search.
- **Motion (8):** Make scrolling print the receipt. Each ticket's lines feed in one after another with a downward clip wipe as its section enters, and the hero ticket's ROOMS / HOW OFTEN / PRICE lines update from the reader's estimator and quiz picks, so the footer TOTAL arrives filled. With reduced motion, every line shows already printed.
