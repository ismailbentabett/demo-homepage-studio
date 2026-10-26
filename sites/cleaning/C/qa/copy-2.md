# cleaning-C: copy fixes, round 2

Apply in `src/` (tokens stay tokens). `before` is the text as rendered in `dist/index.html`.
Order: critique copy shoulds first (S2, S3, S6, S8), the honest thank-you, then the top-10 extras.

---

## Critique items

### #hero lead (new line, insert directly after the h1, before `.hero__proof`)  [Should 8]
- before: (none: no lead under the h1)
- after: `<p class="hero__lead">Each visit's list follows the season, from April pollen on the porch screens to August mildew in the grout. You see a sample price before anyone walks in.</p>`
- why: answers "why them" and the "price surprise at the door" objection in the first screen; 28 words. Style as body text on t-deep in `--paper`, max-width ~34ch.

### #almanac-summer blockquote quotes  [Should 2]
- before: "The guest bathroom grows mildew every August. They cleaned the grout and caulk, then showed me where to leave the fan on. It has not come back as fast."
- after: “{{proof.reviews.2.text}}”
- why: straight quotes flagged in type. In src line ~107: `<p>"{{proof.reviews.2.text}}"</p>` → `<p>“{{proof.reviews.2.text}}”</p>`

### #reviews card quotes (all 6, one template line)  [Should 2]
- before: "Our house on the North Shore is from 1905 and the plaster scares most cleaners. Delia's crew knew to dust it, not scrub it, and to keep water off the heart pine."
- after: “{{.text}}”
- why: same. In src the each-template: `<p class="review-card__text">"{{.text}}"</p>` → `<p class="review-card__text">“{{.text}}”</p>`. Apostrophes inside the review text come from facts; leave them.

### #almanac-winter price line  [Should 3]
- before: Every-two-weeks base: $140–$195 per visit
- after: Regular visit: {{proof.prices.0.from}}–{{proof.prices.0.to}}
- why: wrapped "per / visit" and orphaned the tag; "visit" already carries the unit. Keep `[[sample pricing]]` after it, on its own line (display:block) as the critic asked.

### .break band statement (insert above the mono caption line)  [Should 6]
- before: Chattanooga, Tennessee · river valley fog and ridge lines
- after (new large Fraunces line, `<p class="break__line">`): Same house. Four different messes a year.
- after (mono line under it, replaces the before): {{biz.city}}, {{biz.stateName}} · the year, by the house
- why: the band read as an empty black slab; one dry display line turns it into the almanac's turn-of-page, and it leads into the fall spread.

### .lead-form__thanks body (required honest thank-you)
- before: In your version this goes straight to your phone and inbox. For now, call (423) 555-0154 or email hello@riverfog-housekeeping.example .
- after: This is a demo, nothing was sent. On the real site this goes to {{biz.short}}. For now, call [[tel]] or email <a href="mailto:{{biz.email}}">{{biz.email}}</a>.
- why: copy-chief rule: the thank-you must say plainly that nothing was sent.

---

## Top extras

### #hero h1
- before: House Cleaning in Chattanooga, TN
- after: House cleaning in {{biz.city}}, planned by the season
- why: 8 words, trade + town + the thesis in one read; sentence case. Should hold 2 lines at 1440 with the current clamp (check render).

### #hero kicker
- before: The House Almanac · Spring Edition
- after: {{biz.short}} · The House Almanac
- why: the business name never appears in the first screen (logo is only initials); "Spring Edition" is wrong 9 months a year.

### #hero primary button
- before: Price it
- after: Price my cleaning
- why: says what happens and whose house; critic flagged "Price it" as a weak verb for a first-time buyer. (Hero `.hero__actions .btn--primary` only.)

### #hero phone link (`.hero__actions`, second link)
- before: (423) 555-0154
- after: Call {{biz.phone}}
- why: a bare number reads as text, not an action. Only the one inside `.hero__actions`.

### #almanac-summer button
- before: Price it
- after: Price a mildew clean
- why: names the job of this spread. (`data-service="{{services.4.short}}"` button.)

### #almanac-winter button
- before: Price it
- after: Price a cabin clean
- why: names the job. (`data-service="{{services.7.short}}"` button.)

### #services card buttons (all 9, `.svc-card__cta` in the each-template)
- before: Price it
- after: Get a price
- why: nine identical "Price it" made it the page's catchphrase; the card title already names the service.

### #mobilebar book button (`.mobilebar__book`)
- before: Price it
- after: Get a price
- why: same verb as the cards; fits the bar at 320.

### #almanac-spring add-on line
- before: Add-on: Pollen clean add-on — $60–$120 (porches, screens, fans)
- after: Add to any visit: {{proof.prices.3.from}}–{{proof.prices.3.to}} ({{proof.prices.3.note}})
- why: "Add-on … add-on" said twice, and it spent an em dash. Keep `[[sample pricing]]` after it.

### Review attributions, em dashes (summer blockquote footer + `.review-card__meta` template) and countdown result
- before: — Ruby H., Hixson ·   (and "— Eleanor R., Chattanooga · Old-house care ·" etc., 7 in all)
- after: {{proof.reviews.2.name}}, {{proof.reviews.2.town}} ·   /   {{.name}}, {{.town}} · {{.service}} ·
- why: 8 em dashes on the page against a cap of 3; the mono footer already marks it as attribution. Drop the leading `— ` in both templates.
- also in `src/app.js` countdown: `'Less than 3 days — call ' + phone + ' to check availability.'` → `'Under 3 days out. Call ' + phone + ' and we’ll check the calendar.'`

### #area ZIP button + answers
- before: Check
- after: Check my ZIP
- why: button says what it does.
- add to `.zip-checker[data-zip]`: `data-zip-yes="Yes, {zip} is on our route. Pick a visit type below."` and `data-zip-no="{zip} is outside our usual route. Call {phone} and we’ll tell you straight."` (invalid stays the kit default: "Enter a 5-digit ZIP code.")

---

Em dashes after these edits: 0 in copy. No new facts; every number is a token.
