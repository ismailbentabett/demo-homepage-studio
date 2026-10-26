# pest-B · copy fixes, round 2 (fast)

The `before` text is copied exactly from `sites/pest/B/src/index.html` (tokens as written in src). Apply each one with Edit.
I left image alts and ticket captions alone because the builder is swapping the photos. When a frame is replaced, rewrite its alt and caption from the real frame. When a frame is cut, cut its caption too.

## Critique "should" items (copy)

### #mobilebar .mobilebar__book
- before: `<a class="btn btn-primary mobilebar__book" href="#contact">Book a visit</a>`
- after: `<a class="btn btn-primary mobilebar__book" href="#contact">Book an inspection</a>`
- why: the primary action had two names. It now matches the header, hero, menu and form.

### footer .footer__brand
- before: `{{biz.name}}. Termite and pest control in {{biz.city}}, {{biz.state}}.</p>`
- after: `{{biz.name}}, termite and pest control in {{biz.city}}, {{biz.state}}.</p>`
- why: the name ends in "Co.", so the literal period made "Co.." on the page.

### #contact-footer close card log row (station cell + note)
- before: `<span class="log-row__st">BR-01 to BR-12</span>`
- after: `<span class="log-row__st">All 12</span>`
- why: the long cell ran into the next one. The critic's own short option.

- before: `<span>All stations read</span>`
- after: `<span>Read and logged</span>`
- why: "All 12" already says "all stations", so this cell no longer repeats it, and it says the log promise.

### #hero .hero__call
- before: `Or call <a class="tel-plain" href="tel:{{biz.phoneE164}}">{{biz.phone}}</a>, Mon–Fri from 7 am.</p>`
- after: `Or call <a class="tel-plain" href="tel:{{biz.phoneE164}}">{{biz.phone}}</a>, weekdays from 7&nbsp;am.</p>`
- why: "Mon–" / "Fri" was splitting across lines. "Weekdays" has no break point, and the nbsp keeps "7 am" together. Still matches the hours facts (Mon–Fri open 07:00).

## More lines that raise the score

### #plan-cost .lead
- before: `Tick what your house needs. The sample year log writes itself on the right, one dated row per visit, with the sample range on each line.`
- after: `Tick what your house needs. The sample year log fills in as you go, one dated row per visit, with the sample range on each line.`
- why: "on the right" is wrong at 390, where the log stacks below.

### #compare .lead
- before: `Either one can sit under a contract with a retreat.`
- after: `Either one can go under a yearly contract with retreat terms.`
- why: "a contract with a retreat" reads as a vacation. Says what the buyer actually gets.

### #services .lead
- before: `Nine lines on the log. Each one says what gets checked, so the ticket shows what you paid for.`
- after: `Each line is something we check. The ticket says which ones got done, so you can see what you paid for.`
- why: "Nine lines" pointed at the 01–09 numbering the critic called decorative. Now the list explains what a ticket line is.

### #process .lead
- before: `Four lines on every ticket, in the order the work gets done.`
- after: `Every ticket has the same four lines, in the order the tech does the work.`
- why: gives the step numbers a reason (they are ticket lines, not decoration). Concrete subject.

### #process step 02 paragraph
- before: `<p>Every station opened, every reading written down by number.</p>`
- after: `<p>Each station cap comes off and the reading goes down next to its number, hits or no hits.</p>`
- why: drops the doubled "every… every" pattern and names the real object (station cap) and the real outcome.

### #contact .form-microcopy
- before: `<p class="form-microcopy">{{biz.short}} calls you back to set a visit time.</p>`
- after: `<p class="form-microcopy">{{biz.short}} calls you back to set the inspection. If you need a termite letter, add your closing date in step 3.</p>`
- why: fills a bit of the empty left column the critic flagged, with a real answer for the home-sale buyer (the form already has a closing-date field).

### #zip data-zip-yes
- before: `data-zip-yes="Yes, {zip} is on our route. Book an inspection and we’ll set the first visit."`
- after: `data-zip-yes="Yes, {zip} is on our route. Book an inspection and we’ll walk the foundation on the first visit."`
- why: the result now says what happens at the first visit, not just that a visit gets set up.
