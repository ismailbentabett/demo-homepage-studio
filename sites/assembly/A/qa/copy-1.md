# assembly-A · copy round 1 (fast)

Primary action name, sitewide: **Price my list**. "Price it" is retired.

### #hero h1 (critique should 1)
- before: <h1 id="hero-h">Six boxes in the hall.</h1>
- after: <h1 id="hero-h"><span class="hero__h1-sub">Furniture assembly in {{biz.city}}</span> Six boxes in the hall.</h1>
- why: the h1 names the trade and the town (8 words); "Six boxes in the hall." stays the big line, so the step-01 concept holds. Builder: style `.hero__h1-sub` as a block line at about 0.4× the h1 size in display weight 600 (not mono caps), ink colour. The h1 still fits in 2 lines at 1440.

### #hero kicker (now redundant with the h1)
- before: <p class="kicker">Furniture assembly · Arlington, VA</p>
- after: (delete the element; src line: `<p class="kicker">Furniture assembly · {{biz.city}}, {{biz.state}}</p>`)
- why: the h1 now says this. One less mono eyebrow and one less middle-dot string (critique Distinctiveness).

### #hero step 03 (critique should 4)
- before: Built, anchored, boxes gone.
- after: Anchored to a stud, and the boxes leave with us.
- why: kills the tricolon. One clause with the real noun (stud) and the haul-away promise.

### #services cell buttons ×9 (critique should 3)
- before: Price it
- after: Price my list
- why: the primary action gets one name. In src it comes from the macro on line 363: `[[quote {{.short}} btn--text | Price it]]` → `[[quote {{.short}} btn--text | Price my list]]`. Keep `data-service` so the form pre-fills.

### #services kicker (critique should 6)
- before: <p class="kicker">Parts tray · what we build</p>
- after: (delete)
- why: this eyebrow isn't a step or bag code. The h2 "Everything that came in a flat box…" carries the section on its own.

### #area kicker (critique should 6)
- before: <p class="kicker">Where we come</p>
- after: (delete)
- why: this eyebrow isn't a code either, and it's part of the run of eyebrows the critic counted.

### #contact kicker (critique should 6)
- before: <p class="kicker">Send the list</p>
- after: (delete)
- why: the h2 "Tell us what's in the boxes." already says it.

### #reviews bag header R6 widow (critique should 6)
- before: Bag R6 · Taking furniture apart for a move
- after: Bag R6 · {{services.7.short}}
- why: "MOVE" wraps alone. The source template is `Bag R{{#}} · {{.service}}` (src line 508). The simplest fix is to switch the template to the service's short name for every bag (Flat-pack, Beds & cribs, Wardrobes, TV mounting, Take-apart). That gives shorter tags, no widow and less tiny caps per view. If the review facts can't map to a short name, add `text-wrap:balance` to `.bag__code` instead.

### #contact form thank-you (honest demo text, DEMO-RULES)
- before: Thanks, {name}. In your version of this site, this list goes straight to your phone and inbox.
- after: Thanks, {name}. This is a demo, nothing was sent. On the real site this list goes to {{biz.short}}, and you get a call back to set a time.
- why: the required honest line, and it keeps the call-back promise from the contact h2.
