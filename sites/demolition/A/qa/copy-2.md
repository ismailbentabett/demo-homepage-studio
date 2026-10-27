# demolition-A · copy fixes · round 2

Apply with Edit in `src/index.html` (or the source that renders it). `before` = text as rendered in dist; `after` uses tokens.

## Must (critique-2)

### #pricing-sample .btn (after the pricing disclaimer)
- before: Get my number
- after: Price it
- why: mustFix. One name for the primary action across the page.

## Should (critique-2)

### #hero .lead
- before: Plastic dust walls before any swing. We test first when the house is old enough. Trailer leaves daily, not a dumpster.
- after: Plastic goes up before anything swings. In an older house we test the material first, and anything that tests positive waits for an abatement crew.
- why: should #3. Restores the consequence clause, answers the dust-and-old-house fear in 25 words. The trailer line already sits in the trust rail and break caption.

## Honesty (DEMO-RULES: thank-you must not promise a reply)

### #contact .form-thankyou h3
- before: Thanks.
- after: Got it. Here's what you sent.

### #contact .form-thankyou p
- before: In your version this goes straight to your phone and inbox. For now, we'll be in touch within one business day.
- after: This is a demo, nothing was sent. On the real site this goes to {{biz.short}}, and {{biz.owner}} calls back to set the walk-through.
- why: the old text promised a callback from a demo form. If `{{biz.owner}}` isn't an available token, end the sentence after `{{biz.short}}.`

## Buttons that say what happens

### #tools-band .tool-card .btn (×3, replace all)
- before: Start my list
- after: Price it
- why: the button jumps to the quote form, not to a list. It's a third name for the primary action (same issue as the mustFix).

### #tools-band .zip-checker button
- before: Check
- after: Check my ZIP

### #contact step 4 submit
- before: Send
- after: Send my tear-out

### #contact step 4 h3
- before: Your contact
- after: Where should {{biz.short}} call you?

## Tighter lines (score lifts)

### #tools-band dust plan intro
- before: Choose the containment level that fits your house and your tolerance.
- after: Pick how sealed the work zone gets. More people and pets at home, more plastic.

### #tools-band what-stays intro
- before: Mark what must survive the demo so we can protect it or route around it.
- after: Tick what has to survive the tear-out. We cover it, or we work around it.
- why: "the demo" reads as this demo site on a sales call.

### #pricing-sample .est-ticket__layer
- before: Layer gauge estimate
- after: Walk-through sets the final number
- why: "Layer gauge estimate" doesn't say anything to a homeowner. This label states the honest limit.

### #break .break__caption
- before: Debris sorted daily: metal to scrap, wood separate, trailer gone by five.
- after: A trailer loaded at the curb. Metal goes to scrap, clean wood stays separate.
- why: the caption now describes the frame (DEMO-RULES §5) and drops the invented "by five" time.

### #trust-bar pill 1
- before: Plastic walls + zipper door
- after: Plastic walls, zipper door

### #trust-bar pill 2
- before: Water/gas/power capped
- after: Supply and drain lines capped
- why: facts only say plumbing is capped. Gas and power aren't in facts, so they're cut.
