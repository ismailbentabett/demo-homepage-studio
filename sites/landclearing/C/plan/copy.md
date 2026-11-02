# Copy Deck — landclearing-C

## Hero (t-accent, diagonal-split)
- Kicker: Land clearing in Lynchburg
- H1: We put old farms back the way they were
- Lead: Mulched, not bulldozed, so the red clay stays put and the roots hold the bank.
- Proof line: Mon–Fri 7–5 · Forest, Bedford, Amherst · {{proof.rating}} [[sample rating]]
- CTA: [[call]]

## Area (t-paper, margin-rail)
- H2: Serving the Piedmont from Forest to Appomattox
- Body: {{biz.areas|list}}
- ZIP checker label: Check your ZIP
- ZIP yes: We work in your area. Tell us about your land.
- ZIP no: We don't cover that ZIP yet. Call to ask.
- Open now: {{hours|today}}

## Season Story (t-deep, break + pinned rail)
- H2: One hillside through the year
- Rail 1 label: Leaf-off (Nov–Mar)
- Rail 1 note: Hardwoods visible, ground firm. Best window for clearing slopes.
- Rail 2 label: Spring rain (Apr–May)
- Rail 2 note: Red clay slick. Mulch over doze so the bank holds.
- Rail 3 label: Summer resprout (Jun–Aug)
- Rail 3 note: Follow-up visit for invasives. Mowing returns.
- Rail 4 label: Fall grass (Sep–Oct)
- Rail 4 note: Field comes back. Broomsedge gold. Fence rows open.

## Services (t-paper, grid-3)
- H2: What we clear and how
- Each card: {{.name}} · {{.blurb}} · [[quote {{.short}}]]
- Season tag per card (from facts mapping): Leaf-off / Spring / Summer / Fall

## Regrowth Tool (t-accent, split-text)
- H2: What comes back and when
- Label: Pick the plant
- Options: Tree of heaven · Autumn olive · Multiflora rose · Cedar · Briars
- Output: Resprouts show in {season}. A follow-up visit in {month} keeps it from returning.
- Guarantee: {{proof.guarantee}}
- CTA: Book a follow-up → #contact (prefill service="Invasives")

## Debris Tool (t-paper, split-text)
- H2: Mulch in place, haul off, or pile
- Label: Choose what happens to the brush
- Options: Mulch in place · Haul off · Pile on site
- Output mulch: Brush chipped where it falls. No burn piles, no ruts from hauling. Sample: {{proof.prices.1.from}}–{{proof.prices.1.to}} per acre [[sample pricing]].
- Output haul: Brush loaded and taken off-site. Adds time and truck cost.
- Output pile: Brush piled at field edge for later burning or chipping. Least expensive, leaves a footprint.
- CTA: Price it → #contact

## Estimator (t-accent, form-stack)
- H2: What will it cost?
- Labels: Acres · Density (Light brush / Thick understory / Wooded) · Slope (Flat / Rolling / Steep)
- Output: Sample range: {from}–{to} per acre · Total: {total} [[sample pricing]]
- Note: What moves this number: density, slope, rock, gate width.
- CTA: Price it → #contact (prefill)

## Proof (t-deep, margin-rail)
- H2: People who've walked their land with us
- Reviews: first 3 from facts.proof.reviews, each with [[sample review]] tag
- Years: {{proof.years}} years in the Piedmont [[sample years]]
- License: {{proof.license}} [[sample license]]
- Family-owned: Family-owned since day one
- Guarantee: {{proof.guarantee}}

## Contact (t-light, form-stack)
- H2: Tell us about your land
- Step labels: Service · Job details · When · Contact
- Microcopy under button: We'll call you back to set up a visit.
- Hours beside phone: {{hours|today}}
- Thank-you: Thanks, {name}. In your version this goes straight to your phone and inbox.

## Footer (t-deep)
- Disclaimer: {{demo.disclaimer}}
- Credits: [[credits]]
- Nav: Services · Area · Pricing · Reviews · Contact
- Phone: [[tel]]
- Email: {{biz.email}}