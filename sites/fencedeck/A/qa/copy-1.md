# fencedeck-A · copy round 1 (fast)

Primary action has one name: **Price it by the foot** (short form **Price it** in the nav, mobile bar and service cards). Other actions stay in the same "Price my …" family.

## Must

### #top img[data-photo="hero-A2"] alt
- before: Title from item.; Alternative title from catalogue raisonné.; Leonard Clayton Gallery: C. 328; Additional information accompanying item: Sig
- after: Old etching of a big cedar tree standing over a small house
- why: mustFix. The alt is catalogue metadata. This describes the frame (Hassam, "The big cedar, Easthampton"). The alt comes from niches/fencedeck/media/manifest.json `hero-A2.alt`, so either fix it there or override it in the `[[img]]` macro. If the builder swaps the plate for a drawn one, use `alt=""` and let the caption carry the meaning.

## Should (copy items from the critique)

### #top h1
- before: A straight fence starts with a tight string.
- after: {{biz.city}} fences and decks, built to a tight string.
- why: Should 4. Names the trade and the city through tokens, keeps the string thesis. 8 words, 2 lines at 1440.

### #top .kicker
- before: Fence &amp; Deck · Boise, ID
- after: Corner pins · 811 · {{biz.areas.0}} to {{biz.areas.5}}
- why: the city now lives in the h1, so the eyebrow stops repeating it and carries the reach instead (Meridian to Nampa).

### #top figure plate 04 figcaption
- before: 04 · Etching: cedar, rails, gate
- after: 04 · Old cedar etching
- why: Should 3. It fits one line, so the "ETCHING: CEDAR,…" truncation goes away. It is also honest: the frame shows no rails or gate.

### #top .strip-toggle
- before: Pause the drawings
- after: Pause drawings
- why: Should 10. Shorter. The builder sets it in sentence case, Schibsted 15px, not mono caps.

### #top .proof sample tag (rating)
- before: Sample rating
- after: Sample
- why: Should 10. One plain "Sample" tag per proof item cuts the tracked caps load. Keep the tag. Do not remove it.

### #top .proof sample tag (pricing)
- before: Sample pricing
- after: Sample
- why: same as above, in the hero only. Leave the tags in the price list and reviews as they are.

### #estimator [data-est-send] button
- before: Send these numbers
- after: Send my fence numbers
- why: Should 7. Says what gets sent and whose it is.

### #gate .btn
- before: Price a gate
- after: Price my gate
- why: Should 7. Same verb family as the primary action.

### #fix quiz .btn
- before: Book a look at my fence
- after: Price my repair
- why: Should 7. It was a fifth name for the same action.

### #svc h2
- before: Fences, gates and decks. One crew, one string.
- after: Fences, gates and decks around {{biz.city}}
- why: Should 8. A statement of fact instead of a two-beat slogan.

### #gate h2
- before: Your gate should close on its own. Ours do.
- after: A gate on a steel frame closes itself
- why: Should 8. Drops the "Ours do." slogan ending. Uses the noun from `services.2.blurb`.

## Extra lines (score)

### #proc h2
- before: Seven steps, one string. Nothing gets dug until the line is right.
- after: Nothing gets dug until the string is right
- why: this was the third "X. Y." head in a row. One plain sentence that keeps the process promise.

### #est h2
- before: Type your feet. See your posts.
- after: Type your feet and see every post
- why: no two-beat imperative. Same promise, one line.

### #contact ZIP check button
- before: Check
- after: Check my ZIP
- why: the button says what happens (conversion rule).

### #ct h2
- before: Tell us about the yard. We’ll come walk the line.
- after: Tell us about the yard and we’ll walk the line with you
- why: removes the last "X. Y." two-beat head. Keep the curly apostrophe.

### #depth h3 (builder note)
- before: Plumb to the string
- after: Plumb to the string
- why: no change to the text. The builder sets it in Schibsted 700 at h3 size and adds `text-wrap: balance` to fix the "string" orphan (Should 9).
