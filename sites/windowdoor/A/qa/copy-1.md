# windowdoor-A · copy fixes, round 1

One name for the primary action, everywhere: **Start my window schedule**.
Submit stays "Send my schedule" (it's the last step, not the entry point). US spelling throughout.

### header .header__btn
- before: Start a schedule
- after: Start my window schedule
- why: critique Copy: four names for one action; this is the one name

### #menu (mobile menu link, D1)
- before: <span class="mono">D1</span> Start a schedule
- after: <span class="mono">D1</span> Start my window schedule
- why: same action, same name

### #hero .hero__link
- before: Get my window schedule
- after: Start my window schedule
- why: same action, same name (keep the arrow icon after it)

### #schedule sheet button
- before: Get my measured list
- after: Start my window schedule
- why: same action, same name

### #contact h2
- before: Start your window schedule.
- after: Start my window schedule.
- why: the heading the button lands on reads the same as the button

### #contact form aria-label
- before: aria-label="Start your window schedule"
- after: aria-label="Start my window schedule"
- why: accessible name matches the visible action

### footer nav link
- before: <a href="#contact">Start a schedule</a>
- after: <a href="#contact">Start my window schedule</a>
- why: same action, same name

### #area ZIP yes answer (data-zip-yes)
- before: Yes, we measure in {zip}. Start your schedule below.
- after: Yes, we measure in {zip}. Your window schedule starts just below.
- why: uses the same "window schedule" noun as the action, so the page has one name for it

### #area ZIP button
- before: <button class="btn btn-primary" type="submit">Check</button>
- after: <button class="btn btn-primary" type="submit">Check my ZIP</button>
- why: the button says what happens (conversion rule)

### #schedule .sheet__lic (src line 261)
- before: Licence # SAMPLE-FL-CGC-0143 (sample)
- after: License # {{proof.license}} (sample)
- why: US spelling. Two copies on the page; this is the sheet one

### footer license line (src line 470)
- before: <p class="mono">Licence # SAMPLE-FL-CGC-0143 (sample)</p>
- after: <p class="mono">License # {{proof.license}} (sample)</p>
- why: US spelling, second copy

### #contact form data-thanks
- before: Thanks, {name}. In your version of this site, this schedule goes straight to your phone and inbox.
- after: Thanks, {name}. This is a demo, nothing was sent. On the real site this schedule goes to {{biz.short}}.
- why: honest thank-you text per the copy rules; "your version of this site" talks to the contractor, not the homeowner
