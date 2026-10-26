# cleaning-C: copy fixes, round 3

**Read first:** needs-human restored `src/` and `dist/` to the round-1 best. The critic scored the round-3 build,
which lives in `qa/last/`. Every `before` below is the text in `qa/last/dist/index.html`. Restore `qa/last/src/`
into `src/` before applying these, or the strings won't be found.

Order: copy mustFix/should items first (one action name, dial labels, chip, services, winter), then the extras.

---

## Critique items

### #hero dial labels (4 spans)  [Must 1, Must 2, Should 6]
- before: Spring · pollen
- after: Spring
- before: Summer · mildew
- after: Summer
- before: Fall · guests
- after: Fall
- before: Winter · cabins
- after: Winter
- why: plain season names are half the width, so they stop colliding at 1024 ("CABINSSPRING"). The section below already explains pollen/mildew/guests/cabins. Set them in the display serif, sentence case, `--paper`, and drop the mono/caps. That takes the hero from six mono strings to two (eyebrow + proof).

### #hero dial year
- before: Edition2026
- after: (delete the whole `<span class="hero__dial-year">`)
- why: unreadable on the fog (Must 2), it tells the buyer nothing, and it's a third mono string in the hero (Should 6).

### Primary action: one name everywhere  [Should 3, copy −0.5]
The primary action is called "Price my cleaning" everywhere. "Call {{biz.phone}}" is the secondary.

#### header nav button
- before: Book a visit   (`a.header__book`)
- after: Price my cleaning

#### mobile menu link
- before: Book a visit   (in `#menu`)
- after: Price my cleaning

#### mobile bar
- before: Get a price
- after: Price my cleaning
- why: matches the hero button the user just saw. Fits a 390 half-bar at 16px. If it wraps, the fallback is "Price it", nothing else.

#### #almanac-summer button
- before: Price a mildew clean
- after: Price my cleaning
- why: the critic counted this as a fourth name. `data-service="{{services.4.short}}"` already preselects the form, so the label doesn't need to say mildew.

#### #almanac-winter button
- before: Price a cabin clean
- after: Price my cleaning
- why: same as summer. `data-service` keeps the preselect.

#### #contact h2
- before: Book a visit
- after: Price my cleaning in four steps
- why: the button the user tapped brings them to a heading with the same words. It also tells them how long the form is (the honest answer to "how long is this").

#### #contact submit
- before: Send request
- after: Send for my price
- why: says what happens next.

### #services card buttons (9×, one template line)  [Should 3]
- before: Get a price   (with the `[[i arrow-right]]` icon)
- after: Price this
- why: the critic asked for it word for word. Remove the arrow icon from the template too (`Get a price [[i arrow-right]]` → `Price this`).

### #services card numbers (9×)  [Should 4]
- before: 01 … 09   (`span.svc-card__n`)
- after: replace each number with its season, so the dial organises the list. Builder places the quarter-dial icon and uses this word as its visible label:
  - {{services.0.name}}: All year
  - {{services.1.name}}: Spring
  - {{services.2.name}}: Any season
  - {{services.3.name}}: All year
  - {{services.4.name}}: Summer
  - {{services.5.name}}: Fall
  - {{services.6.name}}: Any season
  - {{services.7.name}}: Winter
  - {{services.8.name}}: Spring
- why: decorative 01–09 numbers are a template tell (distinctiveness −0.5). The season words make the grid read as part of the almanac. "All year" / "Any season" get the full dial ring with no quarter lit.

### #almanac-spring price chip  [Should 1, layout −0.5]
- before: Add to any visit: $60–$120 (porches, screens, fans)
- after: `<span>Add to any visit: {{proof.prices.3.from}}–{{proof.prices.3.to}}</span> <span>{{proof.prices.3.note}}</span>` [[sample pricing]]
- why: the long one-line string with `nowrap` is what ran out of the box. Two spans let the note wrap to its own line inside the chip. Also drop the `white-space:nowrap` on `span:first-child` or keep it only on the first span.

### #almanac-winter: close the dead block and match the h2  [Should 5]
The h2 says "Weekend houses and move-outs", but the body only covers cabins and the price is the every-two-weeks rate.

- before: Cabins on the mountain aired out and cleaned between your visits or your guests.
- after: {{services.7.blurb}} For move-outs: {{services.6.blurb}}
  - (renders: "Cabins on the mountain aired out and cleaned between your visits or your guests. For move-outs: Empty rooms, cabinets, oven and fridge cleaned for the next keys or for your own.")
- before: Regular visit: $140–$195
- after: Move-in or move-out: {{proof.prices.2.from}}–{{proof.prices.2.to}}, {{proof.prices.2.note}}
- why: now the body and price back up the h2. The second sentence fills the empty block under the h2 in the left column, which also helps the layout fix the builder makes.

---

## Extras (highest score lift)

### #break caption
- before: Four seasons · one house · one list that changes
- after: A {{biz.city}} bungalow in late fall
- why: it's a tricolon, and captions should describe the frame (DEMO-RULES §5). The photo is a Craftsman gable with a brick chimney. Don't name a street or neighborhood, since none is in facts.

### #hero call button
- before: Call (423) 555-0154
- after: Call {{biz.phone}}
- why: no wording change. It's listed so the builder checks the token is in `src/`, not a literal (static check).

### #intro lead
- before: Riverfog follows the seasons: pollen in spring, mildew in summer, guest prep in fall, and a steady every-two-weeks visit that keeps the house at its baseline. Your number comes after a walk-through or photos.
- after: {{biz.short}} works the season into every visit: pollen in spring, mildew in summer, guests in fall. Your real number comes after a walk-through or a few photos.
- why: shorter (27 words), drops "baseline" (jargon), and answers "is the sample price my price" with "real number". Three seasons is a list of facts, not a slogan tricolon. If the critic is strict, cut "guests in fall".

### #contact micro line (step 4)
- before: We will call you back to set up a visit.
- after: {{biz.short}} calls back during office hours: <span data-open-now>Mon–Fri 8 am – 5 pm</span>. Weekend requests get a call Monday.
- why: "we will call you back" leaves "when?" open. The office hours are in facts, so this is a process statement, not a new promise. Reuse the existing `data-open-now` span.

### #proof trust item
- before: Insured for work in your house
- after: Insured while we're in your house
- why: reads like a person said it. Still only the `insured: true` fact.

### #almanac-fall countdown note
- before: Two visits: a deep clean first, then a touch-up the day before they ring the bell.
- after: (keep, it's the best line on the page)

### thank-you (no change, check only)
- current: "This is a demo, nothing was sent. On the real site this goes to Riverfog. …" is honest and correct. Confirm it's `{{biz.short}}` in src.
