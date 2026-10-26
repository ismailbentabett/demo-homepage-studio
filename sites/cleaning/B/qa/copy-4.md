# cleaning-B · copy round 4 (fast)

Goal: "same crew" said once (the #break h2), "line by line" said where it does work, and the hero ticket reading as the visitor's own receipt.
The h1 stays as it is: "{{biz.city}} house cleaning, priced line by line." (7 words, trade + town + promise).

## Critique "should" 5: "same crew" repetition

### #crew .lead
- before: The people who clean your house the first time are the people who come back, on the weekday you picked.
- after: The people who clean your house the first time come back on the weekday you picked.
- why: critique should 5, word for word. Drops the restatement.

### #services first row blurb (services.0.blurb)
- before: The same crew every visit, so they learn your house, your pets and your preferences.
- after: Your house on a two-week rhythm: they learn the pets, the rooms and the order you like.
- why: critique should 5, word for word. The row renders `{{.blurb}}` from a loop, so edit `sites/cleaning/B/facts.json` → `services[0].blurb`. It is a copy field, not a fact. Do not hard-code it in src.

### #mobile-menu nav link (src line 40)
- before: Same crew
- after: The crew
- why: a fourth "same crew" in the menu. It now matches the section kicker "Line 05 · The crew".

### #services .svc__end
- before: * * * nine lines, one crew * * *
- after: * * * walk-through confirms every line * * *
- why: "one crew" echoes the same phrase again. This ends the price list on the honest step (Sample prices, confirmed on site).

(Derek S.'s review keeps "Same crew every Friday". It is a review token from facts and stays as written. With the lines above changed it is now the only echo of the #break h2, which works as proof rather than repetition.)

## Critique "should" 6: tracked-caps mono labels (copy side)

### #frequency .tk__foot
- before: You can change it any visit
- after: Change it any visit.
- why: shorter. The builder also needs to set this foot in sentence-case mono with no letter-spacing (`text-transform:none; letter-spacing:0`), per should 6.

### #hero .tk__foot
- before: * * * line by line * * *
- after: Fills in as you price your house
- why: repeats the h1 two inches away and adds a tracked-caps label to the first view. Now it tells the reader the ticket is theirs (Wow note). Set it sentence-case, not tracked.

## Wow: the hero ticket should read as the reader's receipt

### #hero .tk__line Rooms (data-echo="size")
- before: you pick
- after: not picked yet
- why: "you pick" reads as a slogan. "not picked yet" reads as an empty field waiting for the estimator. data-echo still overwrites it.

### #hero .tk__line How often (data-echo="visit")
- before: you pick
- after: not picked yet
- why: same as above. Both lines now read as one open ticket.

### #hero .tk__line Price (data-echo="total")
- before: before we come
- after: prints when you pick
- why: ties the line to the estimator one band down, so the printing promise is visible on the first screen.

## Higher-scoring lines (repetition and specificity)

### #checklist .lead
- before: Room by room, line by line. Deep-only items marked (D).
- after: Four rooms, 28 lines. Deep-clean-only lines are marked (D).
- why: the third "line by line" above the fold area. A count (8+7+8+5 = 28, as built) beats the slogan.

### #contact .lead
- before: Tell us about your house. We'll confirm the price before anyone shows up.
- after: Four short steps. Nothing is booked until the walk-through, and the price on your ticket is the one you pay.
- why: repeated the h2 above it ("confirmed before the first visit"). Now it answers the buyer's real doubt: will the price change at the door.

### footer .footer__lines Subtotal (data-echo="subtotal")
- before: your house, line by line
- after: your picks from the price ticket
- why: fourth "line by line". The footer total now refers back to the estimator, which supports the critic's "TOTAL arrives filled" elevate note.

### #quote-builder .lead
- before: Pick your rooms, pick how often, see the number. No phone call required.
- after: Pick the size and how often. The range prints on the ticket, no phone call needed.
- why: cuts a tricolon (pick / pick / see) and names the ticket, the page's signature object.

## Not copy (for the builder, from the same critique)
- #services "Price this visit" x9: show it on hover/focus only or make the whole row the link (should 4). Do not change the wording per row.
- Footer credits: "Photo: <author>, Wikimedia Commons, <licence>". No "Category:", no email (should 3).
