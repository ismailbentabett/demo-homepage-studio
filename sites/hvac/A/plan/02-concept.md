# Concept — hvac-A (Saltbush Heating & Air)

## Three obvious concepts, rejected

1. **"Cool comfort guaranteed" hero with family on couch.** Obvious because every HVAC competitor does it; it is the brief's §4 cliché #1 and signals stock-template site. Rejected.
2. **Coupon wall with "$49 tune-up" spinner.** Obvious because it is the brief's §4 cliché #2; violates demo rules (no fake urgency, no unverified pricing). Rejected.
3. **Brand-dealer badge strip + "Your comfort is our priority" headline.** Obvious because it is §4 clichés #3 and #5; says nothing specific to Saltbush or Las Vegas. Rejected.

## The thesis

The page is a service ticket: every section is one timestamped entry on a vertical clock rail, and the pinned condenser photo crops to the part named in that entry.

## The signature system

**Name:** Ticket Clock Rail.
A 2px sage-green vertical rule runs down the left edge of the content column. Each section begins with a mono timestamp pill (e.g., `2:14 PM`) that lights from muted to signal-orange as it enters view. The pinned hero photo pans and zooms to match the current entry's subject. Variations:
- **Hero:** Ticket header prints line-by-line (job no., address withheld, outside temp sample); timestamp is "NOW"; photo is full condenser at dusk.
- **Process story:** Four entries (Arrived · Reading · Cause · Fixed); each timestamp lights on scroll; photo crops to fan/grille, gauge, capacitor, drain pan respectively.
- **Proof/reviews:** Timestamp becomes review date in mono; each review card carries a "sample reading" chip echoing the ticket format.
- **Footer:** Final timestamp is the dispatch close time; the rail ends in a small saltbush glyph stamp.
Hook: `data-sw-signature` on the rail container.

## Type

- **Display:** Manrope (grotesk, variable wght 200–800). Clean neo-grotesk with tabular figures; appears 0 times in registry for hvac niche, ≤3 overall. Used for h1-h3 and timestamp labels.
- **Text:** Outfit (grotesk, variable wght 100–900). Friendly geometric sans for body; pairs with Manrope's technical tone without competing. Unique pair in registry.
- **Accent:** DM Mono (mono, label role). For timestamp pills, sample-reading chips, ticket metadata. Never used as display.
Why: Manrope's tight spacing and tabular nums suit the ticket metaphor; Outfit keeps body readable at 17px; DM Mono distinguishes data from prose.

## Palette

**Family:** Desert Charcoal + Saltbush Sage + Sodium Signal.
- Ink: `#1a1c1f`
- Paper: `#e8e4dc`
- Accent (saltbush): `#7da87b`
- Deep: `#2f3530`
- Signal (sodium): `#e8a45c`

Contrast table (verified via `contrast.mjs`):
| FG | BG | Ratio | Body ≥4.5 | Large ≥3 | Use |
|---|---|---|---|---|---|
| #e8e4dc | #1a1c1f | 13.46:1 | pass | pass | Body/headings on ink/deep |
| #e8e4dc | #2f3530 | 9.90:1 | pass | pass | Body/headings on deep |
| #1a1c1f | #e8e4dc | 13.46:1 | pass | pass | Text on paper |
| #2f3530 | #e8e4dc | 9.90:1 | pass | pass | Muted text on paper |
| #e8a45c | #1a1c1f | 8.04:1 | pass | pass | Signal text/buttons on ink |
| #e8a45c | #2f3530 | 5.91:1 | pass | pass | Signal text on deep |
| #7da87b | #1a1c1f | 6.30:1 | pass | pass | Accent rules/timestamps on ink |
| #7da87b | #e8e4dc | 2.13:1 | FAIL | FAIL | Shapes/rules only on paper (never text) |

Focus ring: `#e8a45c` on all tones (≥3:1 verified). Button white `#ffffff` on `#e8a45c`: 3.12:1 large-text pass; primary button uses ink text `#1a1c1f` on signal bg (8.04:1) for body-safe contrast.

## Hero family

**Family 12: Sticky photo + scrolling text.** Unique in hvac niche; ≤3 in library. The pinned condenser-at-dusk photo stays fixed while ticket entries scroll past. Breaks the cliché by replacing generic "comfort" imagery with a documentary equipment portrait that changes crop per entry, making the photo serve the narrative rather than decorate.

## Motion score

- **Intro (≤1.2s):** Ticket header lines print in sequence (opacity + translateY, 70ms stagger); pinned photo fades up from black. Skippable via `prefers-reduced-motion`.
- **Scroll story 1:** Clock rail timestamps light from muted to signal as each entry hits 85% viewport; pinned photo pans/crops via GSAP ScrollTrigger pin (desktop ≥640 only). Verb: *dial*.
- **Scroll story 2:** Sample-reading chips in proof section count up once in view. Verb: *count*.
- **Hover:** Hairline underline grows `scaleX(0→1)` from left, 200ms, `@media (hover:hover)` only.
- **Reduced motion:** All timestamps visible statically; photo is a single static crop; no pin, no count, no intro animation. Content fully readable without JS.

## Tools

1. **"What's it doing?" symptom sorter.** Inputs: symptom select (blowing warm / fan not spinning / ice / water / short-cycle / noise), noise type radio. Output: 2-3 likely causes in plain words, homeowner checks list, call/book/watch recommendation. Kit module: custom `symptom-sorter` (built in app.js using facts-derived lookup). Hand-off: selected symptom passed to quote form via `data-service` prefill.
2. **Hot-day plan.** Inputs: none (static printable checklist). Output: 6-step what-to-do-while-waiting list with icons. Kit module: static content + print stylesheet. Hand-off: ends with `[[quote emergency]]` CTA.
3. **ZIP checker.** Inputs: 5-digit ZIP. Output: yes/no service area answer in aria-live region; yes offers form with ZIP prefilled. Kit module: `zip`.
4. **Multi-step quote form.** Steps: symptom → system type → best time → contact. Kit module: `form`. Prefill from symptom sorter and ZIP checker via `data-service` and URL params.

## Voice

Three sample sentences:
- "We text when we're on the way, show you the reading, and price the fix before we touch anything."
- "If it's a $20 part, we say so. If it's the compressor, we show you why."
- "Every visit ends with a ticket you can keep: what we found, what we did, what to watch."

Five words never used: guaranteed, award-winning, eco-friendly, financing, comfort solutions.