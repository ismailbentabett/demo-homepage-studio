# tattoo-A: copy fixes, round 1

`before` is as rendered in dist/index.html; the src line it comes from is noted where markup is involved. `after` uses tokens.

### #hero h1
- before: Drawn <em>for you.</em>
- after: Custom tattoos, <em>drawn for you</em> in {{biz.city}}.
- why: Should 1. The h1 had no trade and no place. Now it has the trade, the town and the italic transfer phrase in 7 words, which fits on 2 lines at 1440. The transfer line SVG stays under it.

### #hero kicker
- before: Custom &amp; fine line tattoos · Brooklyn
- after: {{biz.tradeLabel}} · consult first, ink second
- why: the h1 now carries the trade and the town, so the kicker no longer repeats them. It states the process promise from the thesis instead.

### #hero proof line (phone as text, next to the buttons)
- before (rendered): `<p class="proof"><span><span data-open-now>`
- before (src line 72): `<p class="proof"><span>{{hours|today}}</span>`
- after: `<p class="proof"><a class="proof__tel" href="tel:{{biz.phoneE164}}">{{biz.phone}}</a><span class="proof__sep" aria-hidden="true">·</span><span>{{hours|today}}</span>`
- why: Should 2 and the five-second test. Until now the number appeared only below the fold. The tel link must be at least 44px tall on 390 (use padding-block, not font size).

### header phone (icon only → icon + number at ≥ 1024)
- before (rendered): `<a class="icon-btn" href="tel:+17185550101" aria-label="Call (718) 555-0101"><svg class="i" aria-hidden="true" focusable="false"><use href="#i-phone"/></svg></a>`
- before (src line 36): `<a class="icon-btn" href="tel:{{biz.phoneE164}}" aria-label="Call {{biz.phone}}">[[i phone]]</a>`
- after: `<a class="icon-btn hdr__tel" href="tel:{{biz.phoneE164}}">[[i phone]]<span class="hdr__tel-num">{{biz.phone}}</span></a>`
- why: Should 2. Show `.hdr__tel-num` at ≥ 1024 and visually hide it below that (keep it in the accessible name). Drop the aria-label, because the visible text now names the link.

### #price estimator button
- before: Book a consult with this
- after: Book a consult
- why: the primary action gets one name across the page. In src this is `[[quote Consultations btn btn--primary | Book a consult with this]]`; change only the label after the `|`.

### #after deposit ledger button
- before: Book my six-week check
- after: Book a consult
- why: Should 4 and the copy deduction. The deposit ledger hands off to booking, not to aftercare. Set `data-service="Consultations"` on this one. Keep "Book my six-week check" only if the builder adds a link on the Day 42 timeline item (`tl__end`), e.g. `<a href="#contact" data-service="Six-week aftercare check">Book my six-week check</a>` after "Come in for your six-week check."

### #styles card buttons (×8)
- before: Book this
- after: Ask about this
- why: there were 8 "BOOK THIS" tracked caps fighting the primary "Book a consult" (Typography). The card link pre-fills the form, so this is a question, not a second booking verb. Set it in sentence case if the style allows.

### #styles h2
- before: Eight things we do <em>well</em>, and one we say no to.
- after: Eight things we do <em>well</em>, and one we say no to.
- why: no change. Should 5 adds the refusal as its own sheet, so the h2's promise is kept. New 9th sheet:
  - tab: S9 · No
  - h3: Lines under 2 cm
  - line: Fine lines that small blur together as they heal. We'll show you the smallest size that still reads.
  - no button. Strike the h3 in graphite.

### #styles lead
- before: We say no to lines too small to last, and we tell you why at the consult. Everything else below is on the table.
- after: Everything below is on the table. The last sheet is the one we turn down, and why.
- why: S9 now names the refusal, so the lead points to it instead of repeating it.

### #process h2 (unchanged) / #cta h2 (unchanged)
- no change. "Bring the screenshot." and "Five sheets between your idea and your skin." are on-thesis.

### footer hours
- before (rendered, footer only): `<dl class="hours"><div><dt>Mon</dt><dd>Closed</dd></div>…<div><dt>Sun</dt><dd>noon – 6 pm</dd></div></dl>`
- after: (remove the footer `<dl class="hours">`; keep `<span data-open-now>{{hours|today}}</span>`)
- why: Should 6 and the copy deduction. The full hours table was printed twice; #contact keeps the full table. The hours already use en dashes ("noon – 8 pm") as built, so no dash change is needed.
