# autobody-C: copy replacements, round 1

`before` is the rendered text in dist/index.html. The `src:` line shows the matching
src/index.html text where it differs (tokens, loops, macros). Apply in src/index.html.

## Should 1: h1 (trade + city)

### #hero h1
- before: Salt takes the shine off cars and boats. <em>We bring both back.</em>
- after: A {{biz.city}} body shop for salt-tired cars <em>and boats.</em>
- why: 10 words, with the trade ("body shop") and the town in the line. The salt thesis stays in "salt-tired". This passes the 5-second test without the eyebrow.

### #hero kicker
- before: Collision Repair &amp; Restoration · Fort Lauderdale
- src: {{biz.tradeLabel}} · {{biz.city}}
- after: {{biz.tradeLabel}}
- why: the city now sits in the h1, so the eyebrow carries the trade only (critic Should 1).

## Should 6: one name for the main action ("Send photos")

### #services row links (all 4 loop rows in src, which render 10 links)
- before: Price it <svg class="i" aria-hidden="true" focusable="false"><use href="#i-arrow"/></svg>
- src (lines 219, 222, 233, 243, replace_all): Price it [[i arrow]]
- after: Send photos
- why: the hero, header, form and mobile bar already say "Send photos". The row's data-service still pre-fills the form. Dropping the arrow also removes the arrow-on-every-link tell.

### #hull button
- before: Price my hull <svg class="i" aria-hidden="true" focusable="false"><use href="#i-arrow"/></svg>
- src: Price my hull [[i arrow]]
- after: [[i camera]]<span>Send photos</span>
- why: one name and one icon (the camera) for the action everywhere on the page.

### #planner plan-card buttons (5 in src, replace_all)
- before: Plan it with us <svg class="i" aria-hidden="true" focusable="false"><use href="#i-arrow"/></svg>
- src: Plan it with us [[i arrow]]
- after: [[i camera]]<span>Send photos</span>
- why: same action with the same name. The service is pre-filled from data-service.

## Should 5: service numbering (03/04/05/09/10, then none)

### #services .svc__n (3 loop rows in src)
- before: <span class="svc__n mono">03</span> (also 04, 05, 09, 10, 01, 02)
- src (lines 219, 222, 243, replace_all): <span class="svc__n mono">{{#2}}</span>
- after: (delete the span, nothing in its place)
- why: the numbers follow facts.json order, not the order on screen, and the "on the line" rows have none. That reads like a bug. The boot-stripe groups (above / on / below the line) already order the list. Also delete the `.svc__n` CSS rule so no empty column is left.

## Should 7: eyebrows on 3 sections at most, italic tails on fewer h2s
Keep the kicker on hero, seasons and claim only. Keep the italic on hero, services, test spot and claim.

### #services kicker
- before: What we bring back
- after: (delete the `<p class="kicker">`)
- why: there were 10 eyebrows on the page. The h2 opens the section fine without one.

### #hull kicker
- before: Hull price, sample
- after: (delete the `<p class="kicker">`)
- why: same as above. The Sample tag on the price result stays.

### #hull h2
- before: How long <em>is your boat?</em>
- after: How long is your boat?
- why: a short question needs no italic accent.

### #testspot kicker
- before: How every job starts
- after: (delete the `<p class="kicker">`)
- why: eyebrow formula.

### #planner kicker
- before: Restoration planner
- after: (delete the `<p class="kicker">`)
- why: eyebrow formula.

### #planner h2
- before: Correction, coating, <em>or both?</em>
- after: Correction, coating or both?
- why: removes the italic tail and the comma before "or".

### #seasons h2
- before: Every season leaves <em>a different mark.</em>
- after: Every season leaves a different mark on the paint.
- why: no italic tail, and a real noun at the end.

### #proof kicker
- before: From docks and driveways nearby
- after: (delete the `<p class="kicker">`)
- why: this also removes one of the tiny mono caps the critic counted in that view (type).

### #proof h2
- before: What owners said <em>after.</em>
- after: From docks and driveways near {{biz.city}}.
- why: "after" brushes against the before/after rule, and the italic one-word tail is the formula. The kicker's line moves into the h2.

### #area kicker
- before: Where we work
- after: (delete the `<p class="kicker">`)
- why: eyebrow formula.

### #area h2
- before: Fort Lauderdale <em>and the towns along the water.</em>
- src: {{biz.city}} <em>and the towns along the water.</em>
- after: {{biz.city}} and the towns along the water.
- why: removes the italic tail.

### #contact kicker
- before: Send photos
- after: (delete the `<p class="kicker">`)
- why: the h2 already says it.

### #contact h2
- before: Send three photos. <em>We text back with a range.</em>
- after: Send three photos. We text back with a range.
- why: removes the italic tail. The plain sentence reads more like a promise.

## Extra lines

### #area ZIP button
- before: Check
- after: Check my ZIP
- why: the button now says what happens.

### #contact form data-thanks (honest demo text, DEMO-RULES)
- before: Thanks, {name}. In your version of this site, your photos and note go straight to your phone and inbox.
- after: Thanks, {name}. This is a demo, nothing was sent. On the real site this goes to {{biz.short}}.
- why: this is the required honest thank-you. The old text talked to the contractor, not to the homeowner the page pretends to serve.

### #hero lead
- before: Paint correction and ceramic coating for the car under the carport. Wet sanding and compounding for the chalky hull at the dock. Collision repair when a storm drops a limb.
- after: Paint correction for the car under the carport, gel coat compounding for the hull at the dock, and collision repair when a storm drops a limb.
- why: 26 words in one sentence instead of three parallel ones, so the tricolon cadence goes. The lead also sits tighter against the shorter h1.
