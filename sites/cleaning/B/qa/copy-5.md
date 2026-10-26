# cleaning-B · copy round 5 (fast)

`before` strings are matched against `src/index.html` (tokens unresolved) unless another file is named.
Review text in `facts.json` stays as written ("Same crew every Friday" is Derek S.'s line and does not change).

## Must / Should from critique-5

### #break .break__quote (Should 8: "Same crew" repeated)
- before: `<p class="break__quote">Same crew. <em>{{biz.short}}.</em></p>`
- after: `<p class="break__quote">The crew you met, <em>{{biz.short}}.</em></p>`
- why: the review below already says "Same crew every Friday", so the phrase now shows up once on the page, in the customer's words. The new line still lands on the name pun.

### #crew section comment (third "same crew" in dist)
- before: `<!-- 5 · same crew (scroll story) -->`
- after: `<!-- 5 · crew (scroll story) -->`
- why: this is the third hit in dist. It isn't visible, but the critic counts it.

### #services row link (Should 1, lone arrows on rows 2-9)
- before: `<a class="svc__go" href="#contact" data-service="{{.short}}"><span class="svc__label">Price this visit</span><span class="svc__arrow" aria-hidden="true">→</span></a>`
- after: `<a class="svc__go" href="#contact" data-service="{{.short}}"><span class="svc__label">Put it on my ticket</span><span class="svc__arrow" aria-hidden="true">→</span></a>`
- why: the button says what happens (it preselects this visit in the form ticket) in the receipt's own words, and it is no longer a near-twin of "Price my house".
- BUILDER (style.css, required or the arrows stay bare): delete the rule at `.svc__item:not(:first-child) .svc__label { … }` (line ~280) and its hover/focus reveal on line ~283, so the label prints on all nine rows, right-aligned in mono on the h3 baseline.

### #frequency quiz slip button (critique Copy note: action naming)
- before: `<a class="btn btn-primary btn-block" href="#contact" data-service="{{services.0.name}}">Price this visit</a>`
- after: `<a class="btn btn-primary btn-block" href="#contact" data-service="{{services.0.name}}">Put it on my ticket</a>`
- why: one verb per destination. "Price my house" goes to the estimator, "Put it on my ticket" goes to the form, "Send my price" submits it.

### #area hours fallback line (Should 5, en dashes + nbsp)
- before: `<p class="tk__open mono" data-open-now>Mon to Thu 8 am to 5:30 pm · Fri to 5 pm</p>`
- after: `<p class="tk__open mono" data-open-now>Mon–Thu 8&nbsp;am&nbsp;–&nbsp;5:30&nbsp;pm · Fri 8&nbsp;am&nbsp;–&nbsp;5&nbsp;pm · Sat 9&nbsp;am&nbsp;–&nbsp;1&nbsp;pm</p>`
- why: the same range style as the `{{hours|table}}` rows (dist already renders "8 am – 5:30 pm" there). Saturday is added because it is in facts.json, and no range breaks across a line.
- BUILDER note: if the hours table rows still wrap mid-range at 390, wrap them via CSS `.tk--hours dd { white-space: nowrap; }`. Don't edit tools/build.mjs.

### footer receipt SUBTOTAL (Should 7, two-line ragged wrap)
- before:
  `<li class="tk__line"><span>Subtotal</span><i></i><span data-echo="subtotal">your picks from the price ticket</span></li>`
- after:
  `<li class="tk__line"><span>Visit</span><i></i><span data-echo="visit">not picked yet</span></li>`
  `<li class="tk__line"><span>House</span><i></i><span data-echo="size">not picked yet</span></li>`
- why: two short receipt lines replace one long one, and the footer now matches the hero ticket word for word until the reader picks. That way the echo is seen to travel (critique Wow and Motion).

### footer receipt TOTAL placeholder
- before: `<li class="tk__line"><span>Total</span><i></i><span data-echo="total-note">confirmed before the first visit</span></li>`
- after: `<li class="tk__line"><span>Total</span><i></i><span data-echo="total">prints when you pick</span></li>`
- why: the same key and wording as the hero's Price line, and short enough for one line.

### src/app.js (footer echo strings, so the footer never prefills a pick the reader didn't make)
- before: `        echo('subtotal', (p.item || '') + ', ' + sizeText); echo('total-note', range + ', confirmed at the walk-through');`
- after: (delete the line; `echo('size')`, `echo('visit')` and `echo('total')` on the line above already fill the footer)
- before: `      if (p.item) echo('subtotal', p.item + ', ' + sizeText);
      if (total.textContent) echo('total-note', total.textContent + ' (sample), confirmed at the walk-through');`
- after: (delete both lines, or the whole "footer receipt arrives filled" IIFE)
- why: the critic flagged the footer TOTAL showing a default the reader never chose while the hero said "not picked yet".

## Extra lines that raise the score

### #services price-list note (duplicate "Sample" next to the meta tag; Should 9 tightening)
- before: `<p class="tk__note">Sample pricing for a 3 bed, 2 bath house. Walk-through confirms it.</p>`
- after: `<p class="tk__note">For a 3 bed, 2 bath house. The walk-through confirms it.</p>`
- why: the Sample tag already sits in the meta line one row up. This is shorter and reads like a receipt.

### #quote-builder lead
- before: `<p class="lead">Pick the size and how often. The range prints on the ticket, no phone call needed.</p>`
- after: `<p class="lead">Pick the visit and the size. The range prints on the ticket, and the hero ticket up top fills in too.</p>`
- why: it tells the reader the echo exists, so they look for it (Wow/Motion "the echo is not seen to travel").

### #crew lead
- before: `<p class="lead">The people who clean your house the first time come back on the weekday you picked.</p>`
- after: `<p class="lead">Whoever cleans your house the first time comes back on the weekday you picked.</p>`
- why: tighter. It says the promise without "same crew" and without "people".

### footer thanks line
- before: `<p class="footer__thanks">Thank you · see you Friday · <a href="tel:{{biz.phoneE164}}">{{biz.phone}}</a></p>`
- after: `<p class="footer__thanks">Thank you · see you Friday · <a href="tel:{{biz.phoneE164}}">Call {{biz.phone}}</a></p>`
- why: the link says what it does.

Count: 9 index.html replacements (one becomes two lines), 2 app.js deletions, 2 CSS notes.
