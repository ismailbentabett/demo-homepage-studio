# appliance-A · Copy fixes, round 1

The one primary action is **Book a visit** (amber, href `#contact`) everywhere. Call becomes the secondary:
outlined `btn--line` in the hero, plain `Call` in the mobile bar. The header stays "Book a visit" (amber). In the
hero the order becomes Book a visit (primary), then Call (line), then Text as a small text link.

### #fixes h2 (should 2, ungrammatical)
- before: What we take the back off.
- after: Ten machines we open from the back.
- why: "take the back off." is missing a word. The new line is grammatical and keeps the panel idea. It doesn't repeat the lead's "open every week".

### #hero primary button (should 3: one primary name)
- before: Call (515) 555-0170
- after: Book a visit
- why: the hero's amber button now has the same name as the header's. Change the `<a>` to `href="#contact"`, `btn--primary`, and drop the phone icon. Only the first hero `.btn-call` gets this. The menu's `.btn-call` stays a call.

### #hero secondary button (should 3)
- before: Text us a photo
- after: Call {{biz.phone}}
- why: Call is the secondary (`btn btn-call btn--line`, `href="tel:{{biz.phoneE164}}"`, phone icon). Text moves to the line below.

### #hero text link (new, under the two buttons)
- before: (none)
- after: or text a photo of the model tag to {{biz.phone}}
- why: keeps the SMS path (`href="sms:{{biz.phoneE164}}"`, class `tel-plain`) without a third button competing.

### #fixes service buttons, S-01 to S-04 (x4)
- before: Book this repair
- after: Book a visit
- why: one name for the primary action. Keep `data-service`.

### #fixes service buttons, S-05 to S-10 (x6, src macro `[[quote {{.short}} btn--text | Book it]]`)
- before: Book it
- after: Book a visit
- why: one name for the primary action.

### #symptoms accordion buttons (x12)
- before: Send this to us
- after: Book a visit
- why: same action, same name. Keep `data-service` so the form preselects the machine.

### #fixes lead
- before: Each panel below is a machine we open every week in Des Moines kitchens and basements. Tap one to book it.
- after: Each panel is a machine we open every week in {{biz.city}} kitchens and basements. Pick yours and book a visit.
- why: the lead now uses the same verb as the button, and the city goes through a token.

### #prices h2 (should 1, the range breaks across lines)
- before: The visit is $89–$119 and it counts toward the fix.
- after: The visit is <span class="nw">{{proof.prices.0.from}}–{{proof.prices.0.to}}</span>, and it counts toward the fix.
- why: the range can no longer split across lines (`.nw{white-space:nowrap}`). The comma fixes the run-on. The `[[sample pricing]]` stays after it.

### #contact submit button
- before: Send my request
- after: Book my visit
- why: the last button names the same action the page has been offering.

### #contact form data-thanks attribute + .lead__thanks paragraph (both, identical)
- before: Thanks, {name}. Panel’s back on. In your version this request goes straight to your phone and inbox.
- after: Thanks, {name}. This is a demo, nothing was sent. On the real site this goes to {{biz.short}}.
- why: the thank-you has to be honest, as DEMO-RULES requires. Change both the `data-thanks` attribute on `form#lead` and the `<p>` inside `[data-thanks-box]`.

### #contact .lead__thanks label
- before: Panel back on
- after: Demo · nothing sent
- why: the label above the message must not suggest a real booking went through.

### .mbar third item
- before: Book
- after: Book a visit
- why: the same name on the phone as well. The three cells fit at 320 (about 100px each, 13px label). If it wraps, keep "Book" and say so in the build note.

### Not changed
- h1 stays "Runs. No heat. We open the back and show you why." Adding the city pushes it past 9 words. Should 7's other route is layout: set `.kicker` in the hero at ≥ 16px so "{{biz.tradeLabel}} · {{biz.city}}, {{biz.state}}" lands at first glance. That's the builder's CSS.
- Should 8 (eyebrows): drop the kickers above #fixes ("One van, every machine on this list"), #symptoms ("Before you call"), #prices ("The number before the knock") and #area ("Local, with a Des Moines number"). Delete the `<p class="kicker">` lines; the h2s stand alone.
