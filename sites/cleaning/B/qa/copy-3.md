# Copy fixes, cleaning-B, round 3

The `before` text is as rendered in `dist/index.html`. Apply the `after` text in `src/index.html` (with tokens). For loop and macro lines, the src line to edit is given too.

### #hero .kicker
- before: Every Other Friday · Huntsville, AL
- after: Line 01 · Your house
- why: the header and the ticket already say the name and the town. This starts the Line 01 to Line 10 count that every other section kicker uses (critique Should, firstScreen).

### #hero .hero__lines, 2nd item
- before: Same crew every visit
- after: A walk-through confirms the price
- why: "same crew" was said three times in a row (hero, break, crew). This line answers the "will the price change at the door" doubt with a process statement, not a new fact.

### .break .break__quote
- before: Same crew. Same list. <em>Every Other Friday.</em>
- after: Same crew. <em>{{biz.short}}.</em>
- why: it was a tricolon and repeated the #crew h2. Two beats stay on-name and land harder in the full-bleed band.

### #crew h2
- before: Same crew, same Friday, same list.
- after: By the third visit, they know your house.
- why: it duplicated the break and was a tricolon. Now it answers a different question (what changes over time) and sets up the Visit 01/02/03 steps.

### #crew .lead
- before: The team that cleans your house the first time is the team that comes back. By the third visit they know it.
- after: The people who clean your house the first time are the people who come back, on the same day of the week.
- why: the new h2 already says "by the third visit". This keeps the same-crew point (services.0 blurb) without repeating it.

### #frequency .tk__answer (empty state) + data-checklist-results "0:"
- before: Tick what's true. Your answer prints here.
- after: Nothing ticked yet. Your answer prints here.
- why: the slip now says what state it's in before any input (critique a11y/wow). Change both the `<p data-checklist-result>` text and the `0:` entry in `data-checklist-results` on the `.wrap` so JS returns to the same line. Markup: add `aria-live="polite"` to `<p class="tk__answer" data-checklist-result>`.

### #frequency .tk .btn (the slip button)
- before: Price this frequency
- after: Price this visit
- why: "frequency" is form language, not homeowner language. It matches the services buttons below.

### #services .svc__item buttons (×9)
- before: Price it
- src before: `[[quote {{.short}} btn-ghost]]`
- after: `[[quote {{.short}} btn-ghost | Price this visit]]`  (renders "Price this visit")
- why: one name for the "send this to the form" action on the slip and in the service rows (critique copy). This uses the macro label override from BUILD-CONTRACT.

### #services price list lines (×6, loop)
- before: $135–$185 (and $115–$160, $160–$220, $250–$420, $290–$500, $35–$50)
- src before: `<span>{{.from}}–{{.to}}</span>`
- after: `<span>{{.from}} to {{.to}}</span>`
- why: the estimator prints "$135 to $185". The price list now uses the same words, so the page no longer contradicts itself (critique type, Should).

### #area .tk__open (static fallback before JS)
- before: Mon to Fri, 8 am to 5:30 pm
- after: Mon to Thu 8 am to 5:30 pm · Fri to 5 pm
- why: factual slip. facts.json has Friday closing at 17:00. It now uses "to" like the rest of the page.

### footer .footer__mast
- before: EOF Every Other Friday Cleaning
- src before: `<span>{{biz.initials}}</span> {{biz.name}}`
- after: `<span>{{biz.initials}}</span> · {{biz.name}}`
- why: it now matches every other ticket mast ("EOF · Huntsville") (critique polish).

### footer "Photos" column, paragraph
- before: Demo images. Photographer credits print here with the licensed photos.
- after: Sample photos, shown for this demo only.
- why: the old line read as a builder note (critique copy/polish). The new one is a true statement while the frames are placeholders.

### footer "Photos" column, credits disclosure
- before: Image list
- after: Photo credits
- why: the bare "Image list" read as a stray note. **Builder:** if `[[credits]]` renders an empty `<ul class="credits"></ul>` (it does in the current dist), delete the whole `<details class="footer__credits">` so there is no empty disclosure. Put it back with this summary text once the approved photos are placed.

## Not copy (for the builder)
- The hours ranges "8 am – 5:30 pm" in `{{hours|table}}` and `{{hours|today}}` (hero proof line, #area table, footer "Today") come from the build filter, not from src text. I can't change them with an Edit here. If the critic flags them again, the filter's separator is the place to fix it (unspaced en dash or " to ").
- In #price, sentence case for the field legends ("How often, or what kind of visit", "Size of the house", "Add to the visit") is a CSS change (`text-transform`/tracking), not a copy change. The words stay.
- Em dashes on the page: 0 in src copy. Banned-word grep on the new lines: clean.
