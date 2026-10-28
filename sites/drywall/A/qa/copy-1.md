# drywall-A · copy round 1 (fast)

Primary action name, everywhere: **Price my patch**. The 8 service-row links become "Price this repair" (secondary text links, named as the critique allows). The sizer keeps "Book this size of repair" as the step after pricing.

### #hero h1
- before: Patches that disappear under paint.
- after: {{biz.city}} drywall patches that vanish under paint.
- why: trade + town in the h1 (critique Should 2), 7 words, still one promise. Keep the `.h1__chip` span. The kicker "Drywall repair · {{biz.city}}, {{biz.state}}" stays.

### header .header__quote (button)
- before: `<a class="btn btn-primary header__quote" href="#contact">Price it</a>`
- after: `<a class="btn btn-primary header__quote" href="#contact">Price my patch</a>`
- why: one name for the main action (Should 3)

### #menu last link
- before: `<a href="#contact">Price it</a>`  (inside `.menu__inner`)
- after: `<a href="#contact">Price my patch</a>`
- why: same action, same name. Also drop the `<a href="#sizer">Price my patch</a>` link above it in the menu so the menu doesn't list the action twice; it becomes `<a href="#sizer">Patch sizer</a>`.

### header .nav (desktop)
- before: `<a href="#sizer">Price my patch</a>`  (inside `nav.nav`)
- after: `<a href="#sizer">Patch sizer</a>`
- why: the header button already says "Price my patch"; two header items with the same label read as a bug

### #services .svc__go (all 8 rows, replace_all)
- before: `data-service="…">Price it</a>`  (text "Price it", 8×)
- after: Price this repair
- why: the rows no longer compete with the primary name (Should 3)

### #coats .wp__label (static markup, src/index.html line 112)
- before: `<p class="wp__label"><span data-wp-label>Visit 1</span> · coat <span data-wp-coat>0</span> of 3</p>`
- after: `<p class="wp__label"><span data-wp-label>Visit 1 of 3 · cut and backed</span></p>`
- why: "coat 0 of 3" reads as a counter bug (Should 9). One label, no counter.

### #coats labels (src/app.js line 122–123)
- before: `var labels = ['Visit 1', 'Visit 1', 'Visit 1', 'Visits 2 and 3', 'Last visit'];`
- after: `var labels = ['Visit 1 of 3 · cut and backed', 'Visit 1 of 3 · cut and backed', 'Visit 1 of 3 · taped', 'Visits 2 and 3 · coats 1 to 3', 'Last visit · primed'];`
- why: each label says what the wall is at that step. Then delete `var coatsN = …` and the line `if (coat) coat.textContent = coatsN[s];` (the `data-wp-coat` span is gone).

### #timer h2
- before: Cracks that show up in the heating season can often wait for spring.
- after: Winter cracks can often wait for spring.
- why: ran 3 lines at 1440. Now 7 words, 2 lines max (Should 5).

### #contact form data-thanks
- before: Thanks, {name}. In your version of this site, this request goes straight to your phone and inbox.
- after: Thanks, {name}. This is a demo, nothing was sent. On the real site this goes to {{biz.short}}.
- why: honest thank-you, the wording from the rules

### footer .footer__nav last link
- before: `<a href="#contact">Price it</a>`  (inside `.footer__nav`)
- after: `<a href="#contact">Price my patch</a>`
- why: one name. And the footer's `<a href="#sizer">Price my patch</a>` becomes `<a href="#sizer">Patch sizer</a>`.

### .mobile-bar .mb--go
- before: `<a class="mb mb--go" href="#contact">Price it</a>`
- after: `<a class="mb mb--go" href="#contact">Price my patch</a>`
- why: one name. Check it fits the 3-way bar at 320 (render check).
