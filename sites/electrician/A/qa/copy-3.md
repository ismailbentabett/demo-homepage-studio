# electrician-A, copy fixes for round 3

Base: `qa/last/src/index.html` (the scored round-3 source). Every `before` is the exact source text, tokens as written. Apply with Edit after the restore.

## Critique copy items

### #break-process h2#brk-h (tricolon, echoes sibling C)
- before: `<h2 id="brk-h" class="statement">Small cuts. Fished wire. Patched&nbsp;clean.</h2>`
- after: `<h2 id="brk-h" class="statement">One new circuit, panel to box, through four small&nbsp;cuts.</h2>`
- why: removes the §5 tricolon. The line now reads off this site's own drawing (PANEL → CUT A-D → NEW BOX) instead of borrowing C's thesis.

### #break-process caption
- before: `New circuits in old plaster go in through a few hand-sized openings, not open walls. We patch them before we pack up.`
- after: `In old plaster the cable goes stud to stud through hand-sized openings, not an open wall. Each cut is patched before we pack up.`
- why: matches the new h2 (four cuts, one run) and says the same thing without the "not X" echo of C's hero.

### #contact form microcopy ("Priya S.." double period)
- before: `<p class="form-micro">No spam. Your details stay between you and {{biz.owner}}. Rather talk? [[tel]]</p>`
- after: `<p class="form-micro">No spam. Only {{biz.owner}} reads this. Rather talk? [[tel]]</p>`
- why: the owner token ends in a period. It no longer closes a sentence, so no "S..".

### #services-main card buttons: one name for the main action (3 lines)
- before: `[[quote Panels btn-line]]`
- after: `[[quote Panels btn-line | Price my job]]`
- before: `[[quote {{services.1.short}} btn-line]]`
- after: `[[quote {{services.1.short}} btn-line | Price my job]]`
- before: `[[quote {{services.6.short}} btn-line]]`
- after: `[[quote {{services.6.short}} btn-line | Price my job]]`
- why: the macro defaults to "Price it". The header, hero and mobile bar already say "Price my job", so the cards now use the same label.

### Panel-check tool button
- before: `[[quote Panels btn-primary | Book a panel evaluation]]`
- after: `[[quote Panels btn-primary | Price my job]]`
- why: same action and same form, so it gets the same name. `data-service` still preselects Panels.

### EV tool button
- before: `[[quote {{services.2.short}} btn-primary | Get a charger quote]]`
- after: `[[quote {{services.2.short}} btn-primary | Price my job]]`
- why: same reason. The selected service carries the context.

### #contact h2 (match the button)
- before: `<h2 id="contact-h">Price your job</h2>`
- after: `<h2 id="contact-h">Price my job</h2>`
- why: every button that lands here says "Price my job", so the heading repeats the button's exact words.

### Rail micro-captions (mono label density, critique should #4): 5 lines, delete the tag span and keep the node
- before: `<span class="one-line__tag">Service drop</span>`
- before: `<span class="one-line__tag">Branch circuits</span>`
- before: `<span class="one-line__tag">New load</span>`
- before: `<span class="one-line__tag">Field notes</span>`
- before: `<span class="one-line__tag">Your job</span>`
- after: (empty, remove each span. The `one-line__node` icon stays.)
- why: five fewer tiny tracked caps. The nodes already mark the sections.

## Extra lines that raise the score

### #hero h1 (sibling B uses the same "<City> electrical work, …" formula)
- before: `<h1 id="hero-h" data-split="lines">{{biz.city}} electrical work, drawn line by line.</h1>`
- after: `<h1 id="hero-h" data-split="lines">A {{biz.city}} electrician who draws the job&nbsp;first.</h1>`
- why: 8 words with trade, town and the thesis. It drops B's h1 formula (critique distinctiveness −0.5).

### #circuits h2 (says "panel schedule", which is sibling B's idea)
- before: `<h2 id="ckt-h">Circuits and devices, read like a panel schedule</h2>`
- after: `<h2 id="ckt-h">Downstream: circuits, breaker to device</h2>`
- why: keeps the one-line diagram language (downstream of the main) and drops B's "panel schedule" idea.

### Thank-you text (honest demo line, per copy rules)
- before: `data-thanks="Thanks, {name}. In your version this goes straight to your phone and inbox."`
- after: `data-thanks="Thanks, {name}. This is a demo, nothing was sent. On the real site this goes to {{biz.short}}."`
- why: the required honest wording. The old line spoke to the contractor, not the homeowner filling in the form.
