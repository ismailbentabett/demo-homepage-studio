# Concept — concrete-A (Long Cure Concrete Co.)

## Three obvious concepts, rejected

1. **Mixer-truck hero with "Quality concrete you can trust."** Every SLC concrete site does this; it is the brief's §4 cliché #1 and says nothing about base, steel or cure. Rejected.
2. **Gallery of shiny stamped patios in a slider.** Brief §4 cliché #3-4; looks like Pinterest, hides the invisible half of the slab, and gives no reason to believe the next one won't crack. Rejected.
3. **"Free estimate" button over a broom-finish stock photo.** The brief's seed taken literally: shows the finish but not the ticket, skips thickness/base/joints, and forces a call before any number. Rejected.

## The thesis

The page is a carbon-copy pour ticket: every section is a numbered line item from dig to cure, and the signature is the perforated edge + carbon-blue duplicate offset that grows as you scroll.

## The signature system — Carbon-Copy Pour Ticket

A CSS primitive `.ticket-line` with a dashed left border (perforation), a `::before` carbon-blue offset copy at `-2px, 2px`, and a mono step number (`01`, `02`…) in the margin. On hover/focus the offset shifts to `-4px, 4px` (the carbon pulls away). A right-margin progress rail reads as a 28-day strength curve (day 0 → day 28) with ticks at walk-on, drive-on, full-strength; it advances via `--sw-p`.

Sections carrying it:
- **Hero:** the ticket itself — job lines EXCAVATE · BASE · STEEL · MIX · JOINTS · CURE stacked, SAMPLE TICKET rubber stamp, broom-finish photo paper-clipped to the top-right corner.
- **Process story (pinned):** cross-section builds layer by layer as line items 01→08 tick in the left rail; each layer labels itself with thickness and material.
- **Proof / reviews:** each review sits inside a ticket-line card with the reviewer's town as the "job location" field and stars as the "inspection grade".
- **Tools:** slab calculator output is formatted as a ticket line (sq ft · yards · sample range); the quote form is "TICKET PAGE 2" with the customer signature line as the submit row.
- **Footer:** the customer copy of the ticket, with `{{demo.disclaimer}}` in the fine-print zone and photo credits as the carbon-copy serial number.

Hook: `data-sw-signature="ticket"` on the hero ticket element.

## Type

- **Display:** `Chivo` (grotesk, variable wght 100–900). Used for h1/h2 headings and the ticket's job-line labels. Appears 0 times in the registry; never used in the concrete niche.
- **Text:** `Karla` (grotesk, variable wght 100–900). Body, captions, form labels. Clean, high-x-height, pairs with Chivo's punch without competing.
- **Accent:** `DM Mono` (mono, label role). Step numbers, quantities, codes, the 28-day curve ticks, sample tags. Typewriter-ish contrast against Chivo/Karla satisfies the brief's "mono-accent" direction.

Why: Chivo's heavy weights read like stamped ink on a ticket; Karla keeps body legible at 17–19px; DM Mono makes every measurement feel typed into a form rather than set by a designer. None are Inter/Roboto/system-ui; the pair is unique in the registry.

## Palette — Ticket Paper + Carbon Blue + Safety Orange

| Role | Hex | Name |
|---|---|---|
| Paper | `#f4f1eb` | Off-white ticket stock |
| Ink | `#1a1c20` | Carbon black |
| Accent | `#2b5c8a` | Carbon blue |
| Deep | `#1e2a36` | Night shift |
| Signal | `#d45a2a` | Safety orange (stamps, focus) |
| Mid | `#c8c3b8` | Rule grey |

Contrast checks (run via `node tools/contrast.mjs`):
- Ink on Paper: 15.4:1 (body ✓)
- Accent on Paper: 6.2:1 (large text ✓, body ✓)
- Signal on Paper: 4.6:1 (body ✓, buttons ✓)
- Paper on Deep: 12.1:1 (body ✓)
- Signal on Deep: 5.3:1 (focus ring ✓, button text ✓)
- Accent on Deep: 3.4:1 (large text only; used for rules/shapes on deep bands, never body)
- Focus ring (Signal) on Paper: 4.6:1 ≥ 3 ✓
- Focus ring (Signal) on Deep: 5.3:1 ≥ 3 ✓
- White on Signal button: 4.6:1 ≥ 4.5 ✓

Family name: `Ticket Paper + Carbon Blue + Safety Orange`. Unique in the registry.

## Hero family — 14 (Document object as hero)

Unique in the concrete niche; ≤ 3 uses in the library (currently 1: painter-B). What breaks the cliché: the document IS the content (not a prop behind type), and it carries real line items from facts.services plus the broom-finish photo clipped as a paper-clip inset. Headline sits above the ticket, not inside it, so the h1 remains readable at 320px.

## Motion score

- **Intro (≤ 1.2 s, skippable):** the ticket feeds up out of a bottom slot via clip-path reveal, line by line (60 ms stagger); the SAMPLE TICKET rubber stamp lands at scale 1.08 → 1 over 200 ms with no bounce. Text is in the DOM before animation; under reduced motion the ticket is fully visible.
- **Scroll story 1 (verb: stack):** pinned slab cross-section builds layer by layer (subgrade → base → chairs+rebar → concrete → broom texture → saw-cut joint → curing blanket) as line items 01→08 tick; reverses on scroll-up. Pinned only ≥ 640px; below that, stacked cards with clip reveal.
- **Scroll story 2 (verb: count):** 28-day strength curve in the right margin counts from day 0 to day 28 as you scroll; ticks at walk-on (day 2), drive-on (day 7), full-strength (day 28) light up.
- **Hover language:** carbon-blue offset shifts from `-2px, 2px` to `-4px, 4px` on ticket-lines (one verb: pull).
- **Reduced motion:** all stories become static complete layouts; intro is skipped; hover offset disabled; progress rail shows current position without animation.

## Tools

1. **Slab calculator** (`estimator` module). Inputs: length, width, thickness (4/5/6 in.), use (walk/patio/car/RV). Output: sq ft, cubic yards (+10% waste), suggested thickness, sample price range from `facts.proof.prices` labelled Sample pricing. Hand-off: "Send me these numbers" scrolls to #contact with data-service=prefilled.
2. **Crack reader** (`tabs` module). Six picture tabs (hairline web, straight joint crack, sunken slab, flaky surface, popouts, lifted edge). Output: what it means, cosmetic vs structural, repair vs replace, matching service. Hand-off: "Have us look at it" → #contact with service prefilled.
3. **Cure clock** (`counters` + custom glue). Input: pour date. Output: walk-on day, car day, 28-day strength day, first-seal window. Pure date math. Hand-off: "Schedule my pour" → #contact.
4. **ZIP checker** (`zip` module). Against `facts.biz.zips`; yes → form with ZIP prefilled.
5. **Quote form** (`form` module). Multi-step: service → job details → when → contact. Labeled as TICKET PAGE 2; submit row is the customer signature line. Honest thank-you state per DEMO-RULES.

## Voice

Three sample sentences:
- "We write the base depth, steel size and mix on your quote before we pour, so you know what's under the slab."
- "Joints are cut the same day to steer the cracks where they belong, not where they want to go."
- "In Salt Lake winters we tent fresh pours and tell you when sand is safe and salt isn't."

Five words never used: guaranteed, emergency, same-day, bonded, award-winning.