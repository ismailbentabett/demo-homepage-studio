# landscaper-B, copy round 1

One name for the primary action from here on: **Price my yard**. Every button that goes to `#contact` says it.
After these edits the page has 0 em dashes (all 5 were the empty readouts).

## A. Primary action: one name (critique: Should, "four names")

### #hero-tool button
- before: Get this number
- after: Price my yard
- why: same action as the hero button, so it gets the same words

### #tools Tool B button
- before: Get my real number
- after: Price my yard
- why: was a fifth name for the same action

### #services cards (all 10 ghost buttons, replace_all)
- before: Price it
- after: Price my yard
- why: "Price it" was the third name. `data-service` still preselects the zone in the form, so the button doesn't need to name the service

### #mobilebar second button
- before: Price it
- after: Price my yard
- why: the sticky bar must match the hero. Covered by the replace_all above; the builder checks it fits next to the call button at 320 (if not, keep the text and drop the call label to "Call", since aria-label carries the number)

### #contact h2
- before: Get a real number for your yard
- after: Price my yard in four short steps
- why: the quote band now repeats the button name, so the click and the landing say the same thing

### #contact lead
- before: Four quick steps. Nothing leaves this page until you decide to reskin it for your business.
- after: Pick the zone, the size and the timing, and leave a number. We call back to book a site walk.
- why: the old line talked to the contractor, not the homeowner. The new one says what happens next. The demo honesty goes in the thank-you

### #contact thank-you paragraph
- before: In your version this goes straight to your phone and inbox. This demo keeps everything on the page.
- after: This is a demo, nothing was sent. On the real site this goes to {{biz.short}}.
- why: the standard honest line, spoken to the visitor

## B. Readouts: no dashes, real numbers at load (critique: Should, "em dashes" + "default output is —")

The water numbers are wrong at the source. With `factors.turf: 55`, a 2,800 sq ft yard reads **107,800 gal/wk**, and any Austin homeowner who has seen a water bill will stop trusting the page. Builder: in `src/index.html` `data-est-config`, set `"factors":{"turf":0.62,"native":0.15,"gravel":0}`. That is gal per sq ft per week: 1 inch on turf, about ¼ inch on established natives. Then at the default (Mid yard 2,800 sq ft, 70% turf) the script gives current 1,341, plan 491 and saves 850. Prefill those same values in the HTML so the readout is right with JS off and the count-up has a target. They are formula outputs, not business facts.

### #hero-tool zone-rule readout
- before: — gal/wk
- after: 491 gal/wk
- why: the signature readout shows a number on arrival

### #hero-tool result line 1
- before: Current: <strong data-est-output="current">—</strong> gal/wk
- after: Current lawn: <strong data-est-output="current">1,341</strong> gal/wk
- why: no dash. "Current lawn" says what is being measured

### #hero-tool result line 2
- before: Native + gravel plan: <strong data-est-output="plan">—</strong> gal/wk
- after: With native beds: <strong data-est-output="plan">491</strong> gal/wk
- why: shorter, so it stops wrapping in the 260px card, and it's in the homeowner's words

### #hero-tool result note
- before: Saves about <strong data-est-output="save">—</strong> gal/wk in summer.
- after: About <strong data-est-output="save">850</strong> gal a week back in summer.
- why: the saving is the payoff, so it should read as a sentence

### #hero-tool disclaimer
- before: · based on city ET and typical zone counts.
- after: · based on Austin summer evaporation and a typical zone layout.
- why: nobody outside the trade knows "ET". Keep the Sample estimate tag in front of it exactly as it is (the city word is `{{biz.city}}` in src)

### #tools Tool B result
- before: Sample range: <strong data-est-output="priceRange">—</strong>
- after: Sample range: <strong data-est-output="priceRange">{{proof.prices.0.from}}–{{proof.prices.0.to}} {{proof.prices.0.unit}}</strong>
- why: the first item in the select is Xeriscape conversion, so the panel opens on its range instead of a dash. The separator is an en dash, not an em dash, and the Sample pricing tag stays below

## C. Hero lead (it answers the first fear)

### #hero .lead
- before: Native beds, drip lines and limestone paths built around the water budget your lot actually has.
- after: Native beds, drip lines and limestone paths, planned around your watering day so they're still alive in August.
- why: 19 words. It answers the brief's first fear ("half of it will be dead by August") and keeps the water idea

### #hero h1 (no text change)
- before: Yards that keep their cool when Austin dries up
- after: Yards that keep their cool when {{biz.city}} dries up
- why: the words are fine (9 words, outcome + town). The 8 lines are a layout fault. Builder: give it ≥ 6/12 columns at 1440 and add `text-wrap: balance` so it sets as "Yards that keep their cool / when Austin dries up". Confirm src uses the token

## D. Fewer eyebrows (critique: Should, "drop the tracked caps eyebrow on at least half the h2s")
Keep the ones that carry a zone meaning (Zones Z1–Z10, Plan → Plant, Zone notes). Delete the `<p class="kicker mono">` element for these four:

### #tools kicker
- before: Schedule + Cost
- after: (delete the element)
- why: the h2 "Two numbers before you sign anything" already says it

### #native-proof kicker
- before: Plant knowledge
- after: (delete the element)
- why: the h2 "Natives that still look good in August" carries it

### #coverage kicker
- before: Coverage
- after: (delete the element)
- why: it repeats the h2 "Do we reach your street?"

### #contact kicker
- before: Quote request
- after: (delete the element)
- why: the h2 is now "Price my yard in four short steps"
