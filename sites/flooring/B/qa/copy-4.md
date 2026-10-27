# Copy fixes: flooring-B, round 4 → 5

**Start from `src/` (round 3, restored by score.mjs as the best round).** Every `before` below is copied from
round 3's `src/index.html` / `dist/index.html`. It is not from `qa/last/src` (round 4). Where the rendered text
has a resolved fact, the `src:` line shows the token form you will find in `src/index.html`.

Not copy (builder, CSS): both mustFix items (`--muted` contrast on t-paper/t-light, footer paint) and the
tracked caps on legends and labels (`text-transform`/`letter-spacing` on `.compare-widget legend`, `.kicker`,
`.chip__spec`). Builder, wiring: round 3's hero tool, slab check and ZIP use `data-hook="…"` plus `*-run` buttons
that no kit module reads. If you wire them, use the state strings below.

Primary action has ONE name: **Compare floors**. The form action has ONE name: **Price my floor**. Call stays Call.
"Best" is banned (DEMO-RULES §4), so "See best fit" / "Best fit" go. Em dashes on page: 0, keep it that way.

## Hero: one statement, Atlanta in the h1, proof line under it

### #hero .kicker
- before: Flooring · Atlanta, GA
- src: {{biz.tradeLabel}} · {{biz.city}}, {{biz.state}}
- after: (delete the element; the city moves into the h1)
- why: one less tracked-caps mono label in the hero; Atlanta was only in the kicker (critique, First screen)

### #hero h1
- before: See the spec before you choose
- after: {{biz.city}} flooring with the wear layer on the quote
- why: trade + town + the promise in 9 words; single statement (critique, Elevate firstScreen)

### #hero .lead
- before: Wear layer on every quote. Slab moisture tested. Sample prices per square foot.
- after: Every quote lists the wear layer, the core and your slab's moisture reading, so three quotes finally line up side by side.
- why: removes the three-fragment tricolon and answers the first objection ("I can't compare these quotes"), 22 words

### #hero proof line (new `<p class="hero__proof">` directly under .lead, before .btn-row)
- before: (none)
- after: <span class="sample-tag">Sample</span> {{proof.rating}} from {{proof.reviewCount}} reviews · {{hours|today}}
- why: critique Should: "add a proof line under the h1 (hours + Sample rating)"

### #hero .btn-row primary
- before: Compare floors
- after: Compare floors
- why: unchanged on purpose. This is the one name; every other compare button below matches it

### #hero .compare-widget run button
- before: See best fit
- after: Compare floors
- why: one name for the primary action; "best" is banned

### #hero .compare-handoff
- before: See samples at your house
- after: (delete the link from the hero)
- why: critique Should: "cut See samples at your house from the hero"; the Samples service card already offers it

### #hero .compare-widget legend 1
- before: Room type
- after: Which room
- why: sentence case, plain words (set without tracked caps)

### #hero .compare-widget legend 2
- before: Pets?
- after: Pets in the house
- why: sentence case; drops the clipped question

### #hero .compare-widget legend 3
- before: Subfloor
- after: What the floor sits on
- why: buyer's words, not trade jargon; answers are Slab / Crawlspace

### #hero .compare-result (states, if wired: shown ONCE, in place of a separate chip)
- empty: Pick the room and what it sits on. The floor that fits shows here.
- result tag: Fits your room
- result example (kitchen + pets + slab): LVP · 12 mil wear · SPC core. A rigid core lies flat on a slab, and the wear layer takes claws.
- why: the result shows in one place only, with no "BEST FIT" twice (critique, First screen)

## Services

### #services h2
- before: Flooring services, spec-first
- after: Every floor we lay, with what goes under it
- why: "spec-first" is a slogan; this line names the job

### #services group labels (new h3 if the builder splits the grid, critique Should)
- after (group 1, services 0–3): Floors
- after (group 2, services 4–9): Prep, repair and stairs

### #services .chip__cta (×10, inside the each loop)
- before: Price it →
- after: Price this floor
- why: critique Should, word for word; no arrow on card links

## Story

### #story heading (new `<h2 class="story-cross__title">` above .story-cross__statements; round 4 had it)
- before: (none)
- after: What the mil number buys
- why: gives the three lines a subject; set in Karla, not centred mono (critique Should)

### .story-cross__statements p 1
- before: 12 mil survives dogs.
- after: A 12 mil wear layer takes dog claws.
- why: names the layer the diagram is pointing at

## Reviews

### #reviews h2
- before: What homeowners are saying
- after: What people noticed after the floor went down
- why: "What homeowners are saying" is the template cliché

## Estimator

### #estimator h2
- before: Get a sample number in seconds
- after: Square feet in, sample price out
- why: "Get a number" was one of the five names for the action; this one says what the tool does

### #estimator run button
- before: Calculate
- after: Show the sample price
- why: the button says what happens

### #estimator handoff
- before: Send these numbers
- after: Price my floor
- why: one name for the form action

## Area + ZIP

### #area h2
- before: We serve Atlanta and eight surrounding cities
- src: We serve {{biz.city}} and eight surrounding cities
- after: {{biz.city}} and the towns around it
- why: "eight" is a hard-coded count that breaks on reskin

### #area .lead
- before: Enter your ZIP to confirm coverage and see if we can help.
- after: Type your ZIP and we'll tell you straight whether we cover it.

### #area ZIP button
- before: Check
- after: Check my ZIP

### #area ZIP answers (data-zip-yes / data-zip-no / invalid)
- yes: {zip} is on our route. Call {phone} or compare floors above.
- no: {zip} is outside our usual area. Call {phone} and ask anyway.
- invalid: Five digits, please.

## Contact + form

### #contact h2
- before: Get a number for your project
- after: Price my floor
- why: same name as the card links, estimator handoff and menu

### #contact .section-lead
- before: We will call you back to set up a visit. No obligation.
- after: We call you back to set a visit, then bring samples to your rooms.
- why: "No obligation" is filler; the samples visit is the real next step

### form submit
- before: Send request
- after: Price my floor

### .form-thankyou p (and the form's `data-thanks` if wired to kit/form.js)
- before: In your version this goes straight to your phone and inbox. We will call you back to set up a visit.
- after: This is a demo, nothing was sent. On the real site this goes to {{biz.short}}.
- why: honest demo thank-you (copy-chief contract)

## Menu + mobile bar

### #main-menu last link
- before: Get a number
- after: Price my floor

### .mobilebar__quote
- before: Compare
- after: Compare floors
- why: same name as the hero action
