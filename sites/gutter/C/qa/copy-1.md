# gutter-C copy fixes, round 1

The before strings come from `src/index.html` (tokenized), so the builder can Edit src directly.
The pricing action now has one verb everywhere it opens #contact: **Price it**.

### #hero h1  (mustFix: no trade noun, 4 lines at 1440)
- before: Every {{biz.city}} roof drops something different.
- after: {{biz.city}} gutters, cleaned when your trees drop.
- why: trade and town are both in the headline now, and the thesis (timing to the trees) stays. 7 words. Builder: change `.hero h1{max-width:12ch}` to about `17ch` (and the base `h1` 13ch rule if it applies) so it sets in 2 to 3 lines at 1440. Check 1440-first.jpg.

### #hero kicker
- before: Gutter cleaning &amp; guards · {{biz.city}}, {{biz.state}}
- after: Cleaning, guards &amp; downspouts · {{biz.state}}
- why: the h1 now carries "gutters" and the city, so the eyebrow would just repeat them. It adds the third service line instead.

### #prices ledger CTA  (mustFix: five names for one action)
- before: [[quote {{services.0.name}} btn-primary | Get my number]]
- after: [[quote {{services.0.name}} btn-primary | Price it]]
- why: one verb for the pricing action, matching the services index and the nav.

### #tools calendar button
- before: <button class="btn btn-primary" type="button" data-cal-go>Price this plan</button>
- after: <button class="btn btn-primary" type="button" data-cal-go>Price it for these trees</button>
- why: starts with the same verb, and the rest says what gets carried into the form.

### #tools downspout button
- before: <button class="btn btn-ghost" type="button" data-ds-go data-js-only>Price this fix</button>
- after: <button class="btn btn-ghost" type="button" data-ds-go data-js-only>Price it for this downspout</button>
- why: same verb, and it names the actual thing being fixed.

### #plates inline link (plate 0)
- before: [[quote {{services.0.name}} text-link | Price a cleaning]]
- after: [[quote {{services.0.name}} text-link | Price it]]
- why: one name for the action. The plate already says which service it is.

### #plates inline link (plate 1)
- before: [[quote {{services.1.name}} text-link | Price a cleaning plan]]
- after: [[quote {{services.1.name}} text-link | Price it]]
- why: same as above.
