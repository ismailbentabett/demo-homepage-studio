# siding-A · copy fixes, round 1

Edit `src/index.html` (tokens), not `dist/`. `before` is what renders in `dist/index.html`.

## Critique items

### #hero h1
- before: `<span class="ln">Built in courses.</span> <span class="ln">Checked in <em>layers.</em></span>`
- after: `<span class="ln">{{biz.city}} siding,</span> <span class="ln">checked in <em>layers.</em></span>`
- why: should #1, the trade and the town go in the headline. 5 words, 2 lines at 1440, and it keeps the layer idea and the em accent.

### #hero kicker (after the C-01 chip)
- before: Siding · Minneapolis and the towns around it
- after: Also {{biz.areas.0}}, {{biz.areas.1}}, {{biz.areas.2}} and nearby
- why: the h1 now says siding and the city, so the eyebrow would only repeat it. This also removes one middle-dot meta string (distinctiveness slop tell).

### #services `.svc__go` (all 8 rows)
- before: Price it
- after: Price my walls
- why: should #10, one name for the quote path. Keep each row's `data-service`.

### #squares calculator button `[data-sq-send]`
- before: Send these numbers
- after: Price my walls
- why: should #10, same action, same name.

### #contact kicker (after the C-11 chip)
- before: Get a number
- after: Price my walls
- why: should #10. The section that receives the action uses the action's name.

### footer nav, the link to #contact
- before: Get a number
- after: Price my walls
- why: should #10.

### mobile bar `.mbar__btn` span
- before: Price it
- after: Price my walls
- why: should #10. 14 characters fit the bar at 320. If it wraps at 320, shrink the label's font size and keep the words.

### #storm button (stays as it is)
- before: Ask for a storm scope
- after: Ask for a storm scope
- why: the one deliberate exception (should #10). No edit.

### footer `.ftr__disc`
- before: Sample website by Site Sledge. Business details are illustrative. © 2026 Coursework Siding Co..
- after: {{demo.disclaimer}} © {{year}} {{biz.name}}
- why: should #13, the "Co.." typo. `biz.name` already ends in a period, so drop the literal "." after the token in src line 491.

### Ranges: prices and hours (check only, nothing to edit)
- The current dist already uses en dashes: `.board__range` renders `{{.from}} – {{.to}}` (with an sr-only "to"), and `{{hours|today}}` / `{{hours|table}}` render "7 am – 5 pm". The hyphens the critic saw came from an earlier build. After the rebuild, check 1440-scroll-75 and C-10 once.
- The calculator line "Vinyl re-side: $14,000 to $28,000" is written by `kit/lib/estimator.js:59` (" to "). In running text that is correct and is not a hyphen range, so leave it. The real problem there is contrast (the mustFix), not copy.

## Extra lines (score)

### #contact lead
- before: Four short steps. We call back to set up a walk around the house, then you get a written quote.
- after: Four short steps. We call back to set a time to walk the house. The written quote follows, with soft sheets priced per sheet.
- why: answers the main objection ("what will you find under it?") with the promise from the hero. 23 words. Also put ≥ 24px between this lead and the buttons (type, should #3).

### #contact form submit `[data-submit]`
- before: Send my request
- after: Send to {{biz.short}}
- why: says where it goes. The thank-you stays honest (demo, nothing sent).
