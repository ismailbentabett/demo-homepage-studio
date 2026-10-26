# concrete-A copy, round 1 (fast)

Apply in `src/index.html`. `before` is the rendered text in `dist/index.html`; `after` uses tokens. Where the
source is a token or repeater, the source line is given too.

## Must (copy mustFix)

### #hero .lead (proof line, false hours)
- before: Mon–Sat 7:00–5:30 · Millcreek, Holladay, Murray, Cottonwood Heights, Sandy, Bountiful and Draper · 4.9 ★ Sample rating
- source: `<p class="lead">Mon–Sat 7:00–5:30 · {{biz.areas|list}} · {{proof.rating}} ★ [[sample Sample rating]]</p>`
- after: two paragraphs. The lead becomes:
  `<p class="lead">Base depth, rebar spacing and joint layout go on your quote before the truck comes, so you know what's under the slab.</p>`
  followed by the proof line (keep it small, as `p.hero__meta`):
  `<p class="hero__meta">{{hours|today}} · {{proof.rating}} ★ [[sample Sample rating]]</p>`
- why: the typed hours were false (Fri closes at 4, Sat 8–noon). `{{hours|today}}` is computed from facts.hours, so it's right every day and survives a reskin. There's no weekly-hours token, and the full week is already in the footer `{{hours|table}}`. The seven towns move out of the hero because #area lists them. The lead (22 words) now answers the first objection, "will it crack / what am I paying for", in the voice of the concept.

## Should (copy items from the critique)

### #hero h1
- before: A slab is decided in the dirt, not the truck.
- after: {{biz.city}} slabs are decided in the dirt.
- why: 9 words on 4 lines becomes 8 words on 3 lines at 1440. The town is now in the h1, so the kicker can go (next item).

### #hero .kicker (remove)
- before: Concrete · Salt Lake City
- after: (delete the `<p class="kicker">` element)
- why: the critique allows at most 2 mono caps labels in view. The town moved into the h1, so the eyebrow is redundant. TICKET # and SAMPLE TICKET stay as the signature.

### #rev blockquote (all 6, curly quotes)
- before: "They showed me the gravel base and the rebar on little chairs before the truck came. I had never seen that from the last guy. Two winters in and the driveway still looks like the day they finished."
- source: `<blockquote>"{{.text}}"</blockquote>`
- after: `<blockquote>“{{.text}}”</blockquote>`
- why: straight quotes in every review (type −0.5). One repeater line fixes all six.

### #contact h2
- before: Get a number.
- after: Price your slab.
- why: matches the primary action everywhere else ("Price it" / "Price my slab").

### #menu link to #contact
- before: Get a number
- after: Price your slab
- why: same action, same words.

### .form-thanks .thanks-msg
- before: Thanks. In your version this goes straight to your phone and inbox.
- after: This is a demo, nothing was sent. On the real site this goes to {{biz.short}}.
- why: required honest thank-you (DEMO-RULES). The old line talked to the contractor, not the homeowner.

### .mobilebar call button
- before: Call (801) 555-0131
- source: the `<span>` inside the mobilebar `.btn-call`
- after: Call {{biz.short}}
- why: the critique wants two side-by-side buttons in a 56px bar. The full number wraps to 4 lines at 390, and the `tel:` href still dials it. Keep the visible number in the header pill and the hero.

### alt text (once real photos replace the placeholders)
- before: Placeholder for hero-A2 / base-compaction / rebar / saw-cut / broom-finish / cracked-concrete / scaling / sunken-slab / utah-home
- after (check each against the actual frame and edit to what it shows):
  - hero: Fresh broom-finished concrete slab inside wood forms
  - objection-base: Compacted road base inside wood forms before the pour
  - story-rebar: Rebar grid tied and raised on chairs above the base
  - story-joints: Saw blade cutting a control joint into a cured slab
  - break: Broom texture across fresh concrete in low light
  - crack-reader-1: Hairline cracks spreading across a concrete surface
  - crack-reader-2: Flaking concrete surface with the aggregate showing
  - crack-reader-3: Sidewalk panel sunk below its neighbor
  - area-context: Utah house with a concrete driveway out front
- why: "Placeholder for …" describes nothing (a11y −0.5). Set these in `src/media.json` alts, not in the manifest.

## More lines that raise the score

### #hero primary button
- before: Price it
- source: `[[quote Driveways btn-primary | Price it]]`
- after: `[[quote Driveways btn-primary | Price my slab]]`
- why: the button says what happens and whose job it is. The service cards keep "Price it", where the card title gives it context.

### #tools h2
- before: Get a rough number before you call.
- after: Size the slab before you call.
- why: drops the third "number" phrasing and names what the calculator actually does.

### #tools ZIP label
- before: Check your ZIP
- after: Your ZIP
- why: the button below now says the action, so the label shouldn't repeat it.

### #tools and #area ZIP buttons (both)
- before: Check
- after: Check my ZIP
- why: buttons say what happens.

### #area .area__checker h3
- before: Does your street qualify?
- after: Do we pour on your street?
- why: "qualify" sounds like a loan form. This is the trade's verb.

### #area .area__license and footer .license-line
- before: Licence # SAMPLE-UT-31877
- after: License # {{proof.license}}
- why: US spelling on a Utah site. Keep the Sample tag next to it.

### #rev .guarantee-line
- before: Guarantee (Sample guarantee): If a slab we poured heaves or splits outside its joints in the first 3 years, we come back and make it right.
- after: `<strong>On every ticket:</strong> {{proof.guarantee}} [[sample Sample guarantee]]`
- why: "Guarantee (Sample guarantee):" says the same word twice in a bracket. Put the tag after the sentence, where it belongs.

### footer .footer__tagline
- before: Customer copy
- after: Concrete in {{biz.city}}, written on the ticket before the pour.
- why: "Customer copy" means nothing to a homeowner. This fills the sparse footer with the thesis in one line.

### #rev h2
- before: What homeowners say.
- after: Read back from the job file.
- why: generic header. This ties the reviews to the ticket system (town = job location, stars = inspection grade).
