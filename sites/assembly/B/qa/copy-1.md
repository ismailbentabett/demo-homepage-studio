# assembly-B · copy round 1 (fast)

One primary action across the page: **Book this list**. Every link to `#contact` either says it or says
"Book this …" for the one thing it carries. "Call {{biz.phone}}" stays the only other action.

### #hero h1
- before: Price your list before anyone rings the buzzer.
- after: {{biz.city}} furniture assembly, priced before the&nbsp;buzzer.
- why: Should 1. Trade and city now sit in the display type, and the thesis stays. 7 words. Keep the `&nbsp;` before "buzzer" so it never orphans.

### #hero kicker (eyebrow)
- before: Furniture assembly & TV mounting · Jersey City, NJ
- after: TV mounting & wall anchoring · {{biz.areas.0}} to {{biz.areas.1}}
- why: Should 5. The h1 now carries trade and city, so the eyebrow shouldn't say it twice. It's shorter, so it fits one line at 390 with no split "Jersey / City", and it brings in the second service and the reach. Keep the `PC 00` code span.

### #hero board__hint (JS-on span)
- before: Tap + for every piece.
- after: (remove the span; keep the no-JS span and the Sample pricing tag)
- why: Should 4. The + buttons already say it, so this drops one tracked mono label from the first view.

### #stack rail__empty
- before: Tap a piece. It lands here.
- after: Your stack starts here. Tap + on a piece.
- why: Should 4 + 6. Names what the empty state will draw. Set it in Geist 15px sentence case, not mono caps.

### #hero board__acts primary button
- before: Book this list
- after: (remove this `<a data-book>` under the board; keep "See my list")
- why: Should 2. That made three "Book this list" in one view. The hero button and the rail button stay.

### #pieces ledger links (all 9, `.ledger__go`)
- before: Price it
- after: Book this piece
- why: Should 3 / copy deduction. Same verb family as the primary action, and honest: the link goes to the form with that service filled in, not into the stack.

### #walls primary button
- before: Mount on my wall
- after: Book this mount
- why: one verb family for every link to #contact.

### #building primary button
- before: Add to my booking
- after: Add these to my list
- why: copy deduction ("four names"). It's the list, not a booking: the form says nothing is booked until we talk.

### #contact h2
- before: Send the list. Get one number back.
- after: One list in. One number back.
- why: drops the fourth verb ("Send") and keeps the promise.

### #contact form submit
- before: Send my list
- after: Book this list
- why: Should 3. The submit button is the primary action, so it gets the primary action's name.

### #visit step 01 h3
- before: Send the list
- after: Make the list
- why: drops "Send" as a competing action verb. The step describes tapping or texting the list, which is making it.

### #contact form data-thanks
- before: Thanks, {name}. In your version of this site, this list goes straight to your phone and inbox.
- after: Thanks, {name}. This is a demo, nothing was sent. On the real site this list goes to {{biz.short}}.
- why: the agent spec requires honest thank-you text.

### header nav last link
- before: Book a list
- after: Book this list
- why: one name for the primary action (it matches the menu, footer and rail).
