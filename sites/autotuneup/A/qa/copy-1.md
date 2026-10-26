# autotuneup-A: copy fixes, round 1

Source edits: `src/index.html` unless noted. `before` is the text as rendered in `dist/index.html`; `after` uses tokens.

## mustFix

### planner ticket note, wait state (src/app.js line 37, the JS string)
- before: Pull in, grab a seat and the Wi-Fi. You’re out before your coffee’s cold.
- after: Pull in, hand over the keys and wait. You’re out before your coffee’s cold.
- why: mustFix 2. Wi-Fi and a waiting area are not in facts.json. Process line, no amenity claim.

### #wait .ticket__note (static default, src/index.html line 270)
- before: Anything under an hour you can sit through with the Wi-Fi. Drop-offs come in at the 7:30 slot and are usually ready by lunch.
- after: Anything under an hour, you can wait for. Drop-offs come in at the 7:30 slot and are usually ready by lunch.
- why: same invented amenity, JS-off version of the ticket.

## should

### #hero h1 (keep the three `.lm` spans, one line each)
- before: Book it. / Wait or walk. / Done by the time you’re back.
- after: {{biz.city}} oil changes / and tune-ups, / timed.
- why: should 1. Trade and town in the headline, 6 words, no tricolon slogan. The last line stays short and loud for the stopwatch thesis.

### #hero .hero__lead
- before: Most oil changes take about 30 minutes. Longer jobs get a drop-off slot and a text when they’re done.
- after: Book it, then wait or walk. Most oil changes take about 30 minutes. Longer jobs get a drop-off slot and a text when they’re done.
- why: the slogan moves out of the h1 into the lead (24 words) and still answers "how long will I be stuck here".

### #hero .kicker
- before: Oil changes & tune-ups · Provo, UT
- after: Quick service by appointment, {{biz.city}}, {{biz.state}}
- why: the h1 now says trade and town, so the eyebrow stops repeating it and drops the middle dot (tracked-caps / dot-meta budget, should 5).

### #hero .proofline, 2nd span
- before: Provo to Spanish Fork
- after: Cars from {{biz.city}} to {{biz.areas.5}}
- why: should 5. Reads as a short phrase, not a meta tag. Builder: also drop the CSS `.proofline > span + span::before { content: "·" }` separator and use the gap or a line break.

### #menu buttons, all 9 tab panels (`[[quote … | Book this]]`)
- before: Book this
- after: Book a time
- why: should 6. One name for the primary action across the page.

### #wait button (static, src/index.html line 271, and src/app.js line 43 `'Book this visit'`)
- before: Book this visit
- after: Book this time
- why: should 6. Matches "Book a time"; the JS keeps "Book a time" for the empty state.

### #oil comparison row headers (should 5; builder sets them in Figtree sentence case 15px semibold, no mono, no caps)
- before: Typical interval
- after: How often
- why: plainer, shorter in the narrow column.

Style note: "Cold mornings" and "Older engines" keep their text; restyle all four row headers the same way.

- before: When we use it
- after: When we pour it
- why: concrete verb from the bay.

### #stations lap 1, Check-in
- before: Keys, mileage and what you want done, written on the ticket. Grab a seat or walk for a coffee.
- after: Keys, mileage and what you want done, written on the ticket. Wait with it or walk for a coffee.
- why: "grab a seat" implies a waiting room that facts don't list; keep the choice the brand is built on.

### #proof .slip__stamp (not a copy change, for the builder)
- before: Done
- after: Done
- why: should 3. The service label comes from `proof.reviews[].service` (full name), so the fix is placement: move the stamp to the card body's bottom-right, below the header rule.

## extra

### #proof h2
- before: Out the door, on the clock.
- after: Out the door when we said.
- why: the hero now carries "timed"; this one says the promise kept, which is what a review proves.

### #contact .lead
- before: Four short steps. We’ll call you back to set up the visit.
- after: Four short steps. We call back with a slot, wait or drop-off.
- why: says what the call gets you and keeps the planner's wait-or-drop choice.
