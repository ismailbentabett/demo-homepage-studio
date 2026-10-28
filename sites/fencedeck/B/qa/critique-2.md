COPY: ok

# fencedeck-B · Critique round 2 (fast mode)

## Five-second answer
1440-first.jpg / 390-first.jpg: "Denver decks and fences, and they count every board, joist and post on the quote. I tap Count my deck or call (720) 555-0135. Why them: the count is on the quote, and I can check it after." The h1 now names trade and city; the next band (TB·DEN·02 DECK TAKEOFF) peeks at 1440.

## What changed since round 1
- h1 fixed (trade + city). Hero now leaves the next band peeking (1440-first.jpg).
- Hero photo is now on-topic: deck boards on joists, as "Plate 01" with a caption (1440-first.jpg). A second plate (fence boards, "5 fence boards in frame") sits in the compare section (1440-scroll-50.jpg).
- Hero tile captions are now Onest sentence case, so there are fewer mono caps.
- Posts story: ghost posts draw faintly from frame 0 and the counter reads "1 of 5 · 32 ft" (1440-scroll-25.jpg). The stage is no longer empty.
- Permit result is now a stamped paper card: "0 of 4 ticked. No permit flagged yet." (1440-scroll-75.jpg).
- Action labels are down to Count my deck / Price it / Quote this (dist), all clearly in context.

## firstScreen: 9
Earned (1440-first.jpg): the h1 says what and where, there is one loud primary and a quieter outlined Call, the phone is in both the header and the hero, and the proof stack carries Sample tags. The signature is visible (stamp + "10 joists, counted" tally) and the next band peeks. 390-first.jpg: h1 in 3 lines, both actions and the proof stack above the fold, Call/Text/Count bar.
Deduction: the hero mosaic is a busy 4-tile grid of drawings. The drawings carry their own mono labels, so the right half reads as dense spec sheet more than one image (held at 9, not 9.5).

## distinctiveness: 9
Earned: the tally now organises real numbers in 8 places (hero tile, running tally, posts counter, photo plate "5 fence boards in frame", the 203-stroke review block, the permit "0 of 4", the form, the footer total) (1440-rm-full.jpg). The grade stamps label every section. Photos framed as counted plates are a move of its own.
Deduction: the drawn technical-section language (post below frost) still echoes fencedeck-A's hero tiles. Less than in round 1, because the tally and the plates now dominate.

## type: 9
Earned: Arvo slab h1 at a real scale, an italic Arvo review quote as the contrast moment (1440-scroll-75.jpg), tabular mono numbers, sentence-case Onest captions in the hero (1440-first.jpg).
Deduction: 1440-scroll-50.jpg: "UPKEEP I'LL DO EACH YEAR: A WASH AND A LOOK" is a long tracked mono caps line. It is a sentence, not a label (−0.5 headroom, held at 9).

## layout: 9
Earned (1440-rm-full.jpg): the tone rhythm holds (paper / card / paper / deep / paper / accent / card / paper / card / paper / deep), the accent ledger break is full-bleed, and the permit result is now a finished card (1440-scroll-75.jpg).
Deductions:
- 1440-full.jpg: the posts pin still leaves about one screen of empty deep under the four steps in the full capture. A visitor scrolling through sees it as the pin releasing late (noted).
- 1440-scroll-50.jpg: in the compare intro, the right column holds two lines plus a slider, leaving a ~200px void beside the photo plate.

## photo: 8.5
Earned: the plates are on-topic now, deck boards on joists (1440-first.jpg) and rough-sawn fence boards (1440-scroll-50.jpg). The blue-graphite grade is consistent, and the stamped plate frames with tallies make photos part of the takeoff.
Deduction: both frames are close-up board textures. A homeowner still never sees a finished deck off a Denver house or a fence line along a yard (1440-rm-full.jpg). There is no wide, mid and detail sequence.

## copy: 9
Earned: "Denver decks and fences, counted before you pay." (1440-first.jpg) does the job. Concrete trade nouns throughout. The permit microcopy is honest, "0 of 4 ticked. No permit flagged yet." (1440-scroll-75.jpg). Sample labels everywhere, zero em dashes (dist).
Deduction: "Price it" on 8 service rows and "Quote this" on the compare columns (dist) are still two more names for the path into the form. They are contextual, so this is minor.

## mobile: 8.5
Earned: 390-first.jpg is clean. The h1 fits in 3 lines, both actions sit above the fold, the 3-way bottom bar is there, and render.json shows no overflow at 320/390.
Deduction: 390-full.jpg still reads as the desktop sections stacked. The hero mosaic, the counter and the compare table all fall into one long column with no phone-specific move (no swipe plates, no condensed tally). The page is 15,600px long at 390.

## a11y: 9
Earned: 1440-rm-full.jpg and 390-rm-full.jpg show every section complete (posts 5 of 5, tallies full, stamps flat). Focus ring and forced-colors are in the CSS, heading order is clean, and static.json and render.json are both clean.

## motion: 9
Earned: the posts story now has a full stage. Ghost posts sit on the grade, the active post goes solid and the count reads "1 of 5 · 32 ft" (1440-scroll-25.jpg), then "5 of 5" in the end state (1440-rm-full.jpg). Split h1, joist draw, stamp thunk and estimator redraw give varied hooks.
Deduction: the pin is still long relative to 4 steps (1440-full.jpg), held at 9.

## wow: 9
Earned: the deck board counter with the running tally hands off to the quote (1440-full.jpg). The 203-stroke "Counted, not rounded." block restates the thesis in data (1440-scroll-75.jpg).

## polish: 9
Earned: designed footer with final tally + licence stamp (1440-rm-full.jpg), radius chosen once, photo credits present (dist), OG/JSON-LD/print/forced-colors present.

## Arithmetic
14×9 + 12×9 + 10×9 + 10×9 + 8×8.5 + 8×9 + 7×8.5 + 7×9 + 12×9 + 8×9 + 4×9
= 126 + 108 + 90 + 90 + 68 + 72 + 59.5 + 63 + 108 + 72 + 36 = 892.5 / 100 = **8.93** (8.925)

## Must
None.

## Should
1. **Mobile hero mosaic.** Where: 390-full.jpg, under the hero CTAs. Problem: four tiles stack into a tall column. Fix: under 640px show only Plate 01 + the joist-tally tile side by side (or as a horizontal scroll-snap strip), and hide the clip and frost sections there (the posts story covers frost).
2. **Posts pin length.** Where: #posts, 1440-full.jpg. Problem: about one screen of blank deep after the last step. Fix: set the pin end to the last step's centre, around `end: "+=" + 4*45 + "%"`, so the release happens as step 04 lands.
3. **Compare intro void.** Where: the compare section, 1440-scroll-50.jpg. Problem: the right column holds two lines and a slider, with an empty field below. Fix: align it to the plate's vertical centre, or move the swatch row up into that column.
4. **Upkeep label.** Where: the slider label, 1440-scroll-50.jpg. Problem: a long tracked mono caps sentence. Fix: set it in Onest sentence case, e.g. "Upkeep I'll do each year: a wash and a look".
5. **Form path labels.** Where: service rows ("Price it") and compare ("Quote this") in dist. Fix: use "Count this one" / "Put on my quote" consistently, or simply "Count my deck" where the target is the counter.

## Elevate
- **photo (8.5)**: Complete the plate sequence as plan → build → result. Add one wide plate of a finished deck or fence in a yard from the library, set as the closing plate before the reviews with its own tally ("1 deck · 212 boards · 46 joists"). The photos then end on the product the homeowner is buying, and each plate counts something different (wide result, mid framing, board detail).
- **mobile (8.5)**: Give the phone its own composition. Run the hero plates and the takeoff tiles as one swipeable "takeoff sheet" strip with a tally pager (one stroke per plate). Collapse the counter's running tally into a sticky mini tally above the bottom bar while the counter is on screen. The tally then becomes the phone's navigation instead of a stacked desktop.
