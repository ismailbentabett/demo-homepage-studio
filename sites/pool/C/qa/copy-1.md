# pool-C copy, round 1 (fast)

Main action has one name everywhere: **"Get my price"** (header, menu, hero, mobile bar). The form h2 matches it: "Get your monthly price".
`before` is the text as built in `dist/index.html`, with markup where the line has it. `after` uses tokens.
Em dashes after this pass: 0. No new facts. Hours are quoted from facts.hours.

---

## A. Critique copy items (mustFix / should)

### header nav button (`.nav-list .btn--primary`)
- before: Get a number
- after: Get my price
- why: three names for one action (critique copy −0.5). One name on the page now.

### #menu last link
- before: `<li><a href="#contact">Get a number</a></li>`
- after: `<li><a href="#contact">Get my price</a></li>`
- why: same action, same name

### .mobilebar secondary button
- before: `<a href="#contact" class="btn btn--secondary">Get a number</a>`
- after: `<a href="#contact" class="btn btn--secondary">Get my price</a>`
- why: same action, same name

### #hero primary button
- before: Get my number
- after: Get my price
- why: same action, same name. "Price" says what comes back, "number" didn't

### #contact h2
- before: Get your number
- after: Get your monthly price
- why: matches the button. Says what the form gets you

### #contact lead
- before: Tell us about your pool. We will call you back with a monthly price and a first-visit date. No spam, no obligation.
- after: Tell us about your pool. {{biz.owner}} calls back with a monthly price and a first-visit date. The office picks up from 6 am, Monday to Saturday.
- why: cut the boilerplate. The doubt-killer comes from facts.hours

### #hero h1 (the masthead moves down to the kicker)
- before: `<h1>The Desert Pool<br>Almanac</h1>`
- after: `<h1>{{biz.city}} pool care, month by month</h1>`
- why: was a masthead, not a promise. Now it has the trade, the town and the almanac idea in 6 words. Fits 2 lines at 1440

### #hero kicker (now the masthead)
- before: Scottsdale pool care, by the season
- after: The Desert Pool Almanac
- why: the masthead stays as the small Crimson Pro title above the h1 (critique should). The old kicker repeated the new h1

### #hero issue line becomes the lead
- before: Sample Issue · Scottsdale, AZ
- after: Weekly service for hard water, haboob dust and 110° afternoons. One monthly price, chemicals included for most pools.
- why: the hero had no lead. This one answers "what will it cost me in chemicals" from facts.prices.0.note. It also cuts one middle-dot mono string (type −0.5)

### #hero cover lines (new, three anchors under the lead, before the actions)
Builder: a `<ul class="cover-lines">`. The month sits in a DM Mono span, the line is a Crimson Pro link to the spread.
- `<span>Jul</span> <a href="#leak">Losing water? The bucket test tells sun from leak.</a>`
- `<span>Any month</span> <a href="#tile">The white band on the tile, and what takes it off.</a>`
- `<span>Nov</span> <a href="#resurface">Why pebble goes in in November, not June.</a>`
- why: the editorial cover promised working cover lines that jump to the spreads (concept, critique Elevate). Each one is a real job noun

### #hero secondary button
- before: See what we do
- after: See the year's work
- why: says where it goes (the services contents) in the almanac voice

### .almanac-rail labels (replace all five spans with twelve, aria-hidden stays)
- before: NOW / JUN / SRV / FIX / PRF
- after: J / F / M / A / M / J / J / A / S / O / N / D (each span gets `title` = full month: January … December)
- why: SRV/FIX/PRF is jargon (critique copy and distinctiveness). The index is the twelve months the concept promised. Section-to-month map for the builder: hero = current month, #story = Jul, #tile = Mar, #leak = Jun, #resurface = Nov, #proof = Aug, footer = all dimmed but the current month

### #contact form submit
- before: Send it
- after: Send my pool details
- why: says what happens. Not a "submit" synonym

### .form-thanks h3
- before: Got it.
- after: Demo form. Nothing was sent.
- why: the old text promised a callback that never happens. Honest per DEMO-RULES

### .form-thanks p
- before: `<p>We have your details and will call within one business day to confirm your first visit. If you need us sooner, <a class="tel-plain" href="tel:+14805550139">(480) 555-0139</a>.</p>`
- after: `<p>This is a demo, nothing was sent. On the real site this goes to {{biz.short}}, and {{biz.owner}} calls back with a monthly price. To talk now, <a class="tel-plain" href="tel:{{biz.phoneE164}}">{{biz.phone}}</a>.</p>`
- why: "within one business day" was an invented promise. The thank-you text is now the required honest one

---

## B. Tool results as useful sentences

### #tile tool intro
- before: Answer three questions to see if bead blasting will fix it.
- after: Two questions. The answer tells you if it scrubs off or needs bead blasting.
- why: the tool asks two questions, not three

### #tile `.checklist__result` (empty now: the kit checklist only reads checkboxes, these are radios. Builder wires it in `app.js` with these strings)
- empty state: Pick one answer in each row. The method shows here.
- thin (any age): Thin film that wipes off: a hand scrub on a weekly visit takes it. No bead blasting needed.
- medium + new: A ridge your fingernail catches is calcium, and it comes off. Fresh scale like this often goes by hand. Bead blasting if it doesn't.
- medium + old: A ridge your fingernail catches, years deep: bead blasting. Most pools {{proof.prices.2.from}}–{{proof.prices.2.to}}.
- thick (any age): A rough band this thick is a bead-blast job. The blue tile is under it. Most pools {{proof.prices.2.from}}–{{proof.prices.2.to}}.
- result button (thick or medium + old): Book tile cleaning (`data-service="Calcium and tile cleaning"`)
- why: the result line rendered blank. Each answer now names a method and, where it applies, a Sample price. Keep the Sample tag next to the price

### #leak estimator intro
- before: Estimate your loss rate.
- after: How far did the water drop in 24 hours?
- why: asks the one thing the homeowner measured

### #leak estimator label
- before: Inches lost in 24 hours
- after: Drop at the tile line, 24 hours (inches)
- why: tells them where to measure

### #leak `.estimator__verdict` (static now. Builder swaps by slider value in `app.js`. The before is the default at ½)
- before: Normal summer evaporation. No leak likely.
- after (0): No drop you can measure. Nothing to fix.
- after (¼): A quarter inch a day is normal sun in a desert summer. No leak bill here.
- after (½, default): Half an inch a day is the top of normal in July. Run the bucket test before anyone calls it a leak.
- after (¾ to 1): More than the sun takes, even in July. Worth a dye test: book a leak check.
- after (1¼ and up): That much is not evaporation. Turn off the autofill and call {{biz.phone}}.
- why: was one flat line for every value. Each value now gets a verdict and a next step, using the ¼–½ in./day range the story section already gives

### #leak section button
- before: Run the bucket test
- after: Book a leak check
- why: it opens the form. The test happens in the tool next to it

### #area ZIP tool intro
- before: Check your ZIP.
- after: Is your street on a route?
- why: the question the buyer actually has

### #area ZIP button
- before: Check
- after: Check my ZIP
- why: says what happens

### #area ZIP answers (`data-zip-yes` / `data-zip-no` on the `[data-zip]` box. Kit placeholders {zip}, {phone})
- yes: {zip} is on a weekly route. Your monthly price is one form away.
- no: {zip} is outside the routes. If you're close to the line, call {phone} and ask.
- invalid: (kit default "Enter a 5-digit ZIP code." stays)
- why: the default answers don't say what to do next. These do

---

## C. Extra lines that raise the score

### #story kicker (folio)
- before: This month in your pool
- after: July · Monsoon
- why: "this month" is false most of the year. The folio names the spread's month and matches the J/J/A index

### #story h2
- before: `Monsoon dust, hard water,<br>and chlorine that burns off`
- after: `Haboob dust in,<br>chlorine burned off`
- why: was a tricolon. Now one desert picture

### #story lead
- before: Desert pools lose up to a quarter inch of water a day in summer. Chlorine demand doubles when the water hits 90°. After a haboob, the filter loads up in hours, not weeks.
- after: In July a desert pool can drop ¼ to ½ inch a day, and one haboob can load a cartridge filter in an afternoon. Weekly service catches both.
- why: "doubles" was an invented number, and "up to a quarter" contradicted the ¼–½ line just below it

### #services kicker
- before: What we do every week
- after: Contents
- why: half these jobs aren't weekly. In the almanac the services are the table of contents (critique should)

### #services h2
- before: `Balanced water, clean tile,<br>equipment that lasts`
- after: `The year's work, and<br>the month each job belongs to`
- why: was a tricolon. Now it sets up the service + best month layout

### #resurface cool panel
- before: `<p><strong>Ideal window.</strong> October through April gives pebble the slow cure it needs. Nights above 50°, days under 85°. We book two to four weeks out in this window.</p>`
- after: `<p><strong>Oct–Apr: pour.</strong> Nights above 50°, days under 90°. Pebble gets the slow cure it needs. Ask for a November date when you call.</p>`
- why: reads as an almanac entry. Fixes 85° vs the lead's 90°. Cuts the invented "two to four weeks" lead time

### #resurface hot panel
- before: `<p><strong>Avoid if you can.</strong> Surface temps over 110° flash-cure the mix, leaving hairline cracks and a chalky finish. If you must, we tent and mist — and add a curing surcharge.</p>`
- after: `<p><strong>May–Sep: wait.</strong> Decks over 110° flash-cure the mix and leave hairline cracks and a chalky finish. A summer pour is the one we talk people out of.</p>`
- why: entry format. Drops an invented surcharge and the page's only em dash. Matches Paul W.'s Sample review

### #proof review month pills (new, one per card, DM Mono, next to `.review__service`)
- Greg N.: July
- Leticia R.: August
- Paul W.: November
- Nicole H.: February (if the card is restored, it's in facts but not on the page)
- Susan L., Ted B.: no pill (their reviews don't name a month)
- why: the concept's month pills on reviews. Each month comes from the review text

### #proof license line
- before: License SAMPLE-AZ-ROC-0139 · Insured · 21 years in Arizona
- after: License {{proof.license}} · Insured · {{proof.years}} years in business
- why: "in Arizona" isn't in facts. Use tokens, not typed values

### #area lead
- before: We run routes in Paradise Valley, Fountain Hills, Cave Creek, Carefree, Arcadia and Tempe. Same technician, consistent weekday, every week.
- after: Weekly routes run through {{biz.city}}, {{biz.areas.0}}, {{biz.areas.1}}, {{biz.areas.2}}, {{biz.areas.3}}, {{biz.areas.4}} and {{biz.areas.5}}. Put your ZIP in the box to check yours.
- why: "same technician" isn't in facts, and the fragment ending was a tricolon. Now it points to the tool

### #contact kicker
- before: Ready to talk water?
- after: Last page
- why: drops the rhetorical question and closes the issue

### .break__caption (describes the monsoon-sky frame now in that slot)
- before: Pebble finish under desert light, Paradise Valley.
- after: Monsoon clouds building over a backyard pool, late July.
- why: the caption described a different photo. It now describes this frame

### footer, new strip above `.footer__rail`
- after: `<p class="footer__end">End of issue · {{biz.name}}, {{biz.city}}</p>`
- why: the concept's "End of issue" close. It sits on the dimmed 12-month strip
