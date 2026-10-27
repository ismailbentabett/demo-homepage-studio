# carpenter-C, copy fixes for round 4 (fast mode)

**Base:** every `before` below is copied exactly from `qa/last/src/index.html`, the round-4 source the critic scored.
`score.mjs` restored `src/` to the best round (round 2), so these lines may not be in `src/` right now. Restore
`qa/last/src/*` into `src/` first, then apply the edits with Edit. `before` and `after` are source lines, with
macros and tokens left unresolved. No new facts: everything comes from `{{services.*}}`, `{{proof.*}}` and `{{biz.*}}`.

One name for the primary action: **"Price it"** (nav, cards, form h2) and **"Price a rebuild"** (hero + mobile bar, the same pair).

---

## Critique copy items (Should 1, 2, 3, 4, 7)

### #floor-2 .trim-services, card 1 (duplicate of #services card 2)
- before:
```
          <article class="svc-card svc-card-sm">
            <h3>Porch railings and balusters</h3>
            <p>Wobbly rails replaced at typical 36-inch guard height with balusters spaced under 4 inches.</p>
            [[quote Railings btn-secondary]]
          </article>
```
- after:
```
          <article class="svc-card svc-card-sm" data-service="{{services.4.short}}">
            <h3>{{services.4.name}}</h3>
            <p>{{services.4.blurb}}</p>
            [[quote {{services.4.short}} btn-secondary]]
          </article>
```
- why: "Porch railings and balusters" was repeated word for word from #services. Floor-2 is now about trim only, and the trim card moves up to first place (see the next item for its replacement).

### #floor-2 .trim-services, card 2 (was the trim card, now the profile-match card)
- before:
```
          <article class="svc-card svc-card-sm" data-service="Exterior trim">
            <h3>Clapboard and exterior trim</h3>
            <p>Split clapboards, corner boards and rotted window trim replaced and primed before winter.</p>
            <a class="btn btn-secondary" href="#contact" data-service="Exterior trim">Get a trim quote</a>
          </article>
```
- after:
```
          <article class="svc-card svc-card-sm" data-service="{{services.4.short}}">
            <h3>Brackets and spindles, matched</h3>
            <p>Keep the one broken piece. We copy its profile so the new bracket or spindle lines up with the old ones.</p>
            [[quote {{services.4.short}} btn-secondary]]
          </article>
```
- why: the critique asked for a second trim card with its own copy. This one makes the section lead ("We match the profile") concrete with one specific instruction and adds no new service. "Get a trim quote" was a second name for the primary action, so it becomes "Price it" through the default `[[quote]]` label. The service names come from tokens now, not literals.

### #services .svc-more p
- before: `        <p class="mono">Plus: exterior trim · back stairs · decks · doors · turnover fixes</p>`
- after: `        <p>Also on the list: exterior trim, small decks, doors that stick and turnover fixes between tenants.</p>`
- why: "back stairs" was the third mention, since it already has a card. This also removes the middle-dot string, and the line is set in body type instead of mono.

### #services .svc-more link
- before: `        [[quote Framing btn-text | See full list →]]`
- after: `        [[quote Framing btn-text | Ask about another job]]`
- why: the link goes to #contact, not to a list. The label now says what happens, and it was the only arrow link on the page.

### #floor-3 .lead
- before: `        <p class="lead">We book porches in April for June starts; call in March and you pick your month.</p>`
- after: `        <p class="lead">Call in March and you pick your month. By May the summer calendar is spoken for.</p>`
- why: the old lead repeated the h2 word for word. This is the critique's exact fix.

### .mobile-bar secondary button
- before: `  [[quote Framing btn-secondary | Price it]]` (the last line before `</div>` of `.mobile-bar`, not the earlier one)
- after: `  [[quote {{services.0.short}} btn-secondary | Price a rebuild]]`
- why: it now has the same name as the hero's button, so the 390 first screen shows one pair of actions, not two. (Hiding the bar until the hero buttons leave the view is a builder/CSS job, Should 4.)

### #floor-2 .tab-panel, Victorian
- before: `            <p class="mono">Turned balusters · scroll-sawn brackets · built-up crown</p>`
- after: `            <p>Turned balusters, scroll-sawn brackets and built-up crown.</p>`
- why: Should 7, a middle-dot string becomes a sentence, and mono is dropped as body type (Should 6).

### #floor-2 .tab-panel, Craftsman
- before: `            <p class="mono">Square tapered posts · exposed joinery · wide flat rails</p>`
- after: `            <p>Square tapered posts, exposed joinery and wide flat rails.</p>`
- why: same as Victorian.

### #floor-2 .tab-panel, Colonial Revival
- before: `            <p class="mono">Doric columns · dentil molding · paneled newels</p>`
- after: `            <p>Doric columns, dentil molding and paneled newels.</p>`
- why: same as Victorian.

### #proof .review-meta
- before: `          <p class="review-meta mono">{{.name}}, {{.town}} · {{.service}}</p>`
- after: `          <p class="review-meta mono">{{.name}}, {{.town}}<br>{{.service}}</p>`
- why: Should 7, the review meta goes on 2 lines (name and town, then the job) with no middle dot.

---

## Extra lines (highest score lift)

### #hero .lead (proof line)
- before: `      <p class="lead">{{proof.reviewCount}} sample reviews | {{proof.years}} years in {{biz.city}}</p>`
- after: `      <p class="lead">{{proof.reviewCount}} sample reviews. {{proof.years}} years in {{biz.city}}.</p>`
- why: the bare pipe looked like a code artifact (First screen deduction). Two short sentences read as typeset.

### #proof .lead
- before: `      <p class="lead mono">[[sample stats]] {{proof.reviewCount}} reviews | {{proof.rating}} stars</p>`
- after: `      <p class="lead mono">[[sample stats]] {{proof.reviewCount}} reviews, {{proof.rating}} stars average</p>`
- why: this is the same pipe artifact. The Sample tag stays where it is.

### #floor-3 .tab-panel, Spring
- before: `            <p class="mono">Best for: porch rebuilds, framing, stair replacement. Ground thaws, paint cure window opens mid-May.</p>`
- after: `            <p>Best for porch rebuilds, framing and stair replacement. The ground thaws, and paint cures well from mid-May.</p>`
- why: mono was used as body text (Typography). The line now reads as a sentence.

### #floor-3 .tab-panel, Summer
- before: `            <p class="mono">Best for: railings, trim, deck builds. Long days, fast paint dry. Book early — June fills by April.</p>`
- after: `            <p>Best for railings, trim and deck builds. Long days and paint dries fast, so June fills first.</p>`
- why: drops the mono body text and one em dash (the page goes from 3 to 2), and it no longer repeats the h2.

### #floor-3 .tab-panel, Fall
- before: `            <p class="mono">Best for: rot repair, priming, turnover fixes. Beat the freeze. Avoid painting after mid-October.</p>`
- after: `            <p>Best for rot repair, priming and turnover fixes. Paint goes on before mid-October, not after.</p>`
- why: same fix as Spring, and it cuts the slogan fragment "Beat the freeze."

### #floor-3 button
- before: `        [[quote Framing btn-primary | Lock a month]]`
- after: `        [[quote {{services.0.short}} btn-primary]]`
- why: "Lock a month" was a fourth name for the primary action. With the default label this renders as "Price it".

### #services .floor-label
- before: `      <p class="floor-label mono">CORE SERVICES</p>`
- after: `      <p class="floor-label mono">The porch jobs</p>`
- why: this cuts one generic all-caps mono micro-label (Distinctiveness slop tell). The kicker is plain and specific to the trade.

### footer brand line
- before: `      <p>{{biz.name}} · {{biz.city}}, {{biz.state}}</p>`
- after: `      <p>{{biz.name}}, {{biz.city}}, {{biz.state}}</p>`
- why: the last middle-dot meta string in the body copy.
