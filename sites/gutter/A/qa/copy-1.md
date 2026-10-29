# gutter-A copy fixes, round 1

`before` = exact text in `src/index.html` (tokenized source). `after` uses tokens. Apply with Edit.

### #hero h1
- before: `<h1 id="hero-h" data-split="lines">A quarter inch every ten feet.</h1>`
- after: `<h1 id="hero-h" data-split="lines">{{biz.city}} gutters, hung a quarter inch every ten feet.</h1>`
- why: should #1. Trade and town now sit in the h1, and the pitch idea stays. 9 words, 2 lines at 1440.

### #hero kicker
- before: `<p class="kicker">Seamless gutters · cleaning · downspouts · {{biz.city}}, {{biz.state}}</p>`
- after: `<p class="kicker">Seamless gutters, cleaning and downspouts</p>`
- why: the city is in the h1 now, so it isn't said twice. Also drops one of the middle-dot kit strings the critic flagged.

### #hero proof line (area)
- before: `<span>{{biz.areas.0}} and nearby</span>`
- after: `<span>{{biz.city}}, {{biz.areas.0}} and nearby</span>`
- why: should #3. The base city matches the h1.

### #services card buttons (8×, one macro line)
- before: `[[quote {{.short}} btn--text]]`
- after: `[[quote {{.short}} btn--text | Price this run]]`
- why: should #2. One name for the primary action. Uses the macro's existing `| label` override, so build.mjs doesn't change.

### #tools size-check button
- before: `<button class="btn btn--primary" type="button" data-sc-quote data-js-only>Put this on my quote</button>`
- after: `<button class="btn btn--primary" type="button" data-sc-quote data-js-only>Add to my run price</button>`
- why: should #2, same action name.

### #tools downspout-count button
- before: `<button class="btn btn--primary" type="button" data-dc-quote data-js-only>Put this on my quote</button>`
- after: `<button class="btn btn--primary" type="button" data-dc-quote data-js-only>Add to my run price</button>`
- why: should #2, same action name.

### #contact kicker
- before: `<p class="kicker">Get a number</p>`
- after: `<p class="kicker">Price my run</p>`
- why: should #2. The form section uses the same name as the hero.

### mobile bar, third button
- before: `<a class="btn btn--secondary" href="#contact">Quote</a>`
- after: `<a class="btn btn--secondary" href="#contact">Price my run</a>`
- why: should #2. If 3 buttons won't fit at 320, shorten the SMS one to "Text" (`<span>Text a photo</span>` → `<span>Text</span>` in the bar only). Don't shorten this one.

### #reviews first quote, "Darnell's" (not a copy edit)
- The text comes from `facts.json` (`proof.reviews.0.text`) through `{{.text}}`, so it can't change in src. Builder: curl the apostrophe at render time (CSS can't do it, so either a build typographer pass on `'`→`’` in review text or a one-line replace in app.js on load). Don't edit facts.json.
