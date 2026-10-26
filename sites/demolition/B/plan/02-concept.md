# Concept — demolition-B (Scale Ticket Demo & Haul)

## Three obvious concepts, rejected

1. **Sledgehammer action hero.** A guy swinging at drywall with dust flying. Rejected: every demo site does this; it signals destruction, not control, and ignores the homeowner's fear of mess.
2. **Before/after slider of an empty lot.** Rejected: the "after" is dirt, which says nothing to a kitchen-tear-out client; competitors use it as filler.
3. **Generic "Demolition Services" list with excavator photo.** Rejected: commercial-scale imagery on a residential page; the brief explicitly calls this out as what makes homeowners leave in 5 seconds.

## The thesis

The page is a scale-ticket docket: every section is a perforated stub that records what left the house, where it went, and at what weight, so trust is built by paperwork rather than promises.

## The signature system: Perforated Weigh Ticket

A CSS primitive: a dashed-left-border ticket stub with a carbon-blue offset copy, a mono ticket number, date, load type and weight. Appears in four sections with variation:
- **Hero:** the scope-and-ticket sheet is the hero itself; the ticket prints live as the intro moment.
- **Services:** each service card is a ticket stub ("Ticket 0412 · Deck · 1.6 t · transfer station").
- **Proof/reviews:** reviews sit on the back of a ticket, signed with name and town.
- **Footer:** closing ticket "0420 · job closed · broom-clean" with total tonnage.
Hook: `data-sw-signature` on the ticket primitive; running tonnage counter in header via `--sw-p`.

## Type

- **Display:** Chivo (grotesk, variable wght 100-900). Industrial, newspaper-punch weights for headlines; appears 1× in registry (concrete-A uses it, but that is a different niche; allowed ≤3 total).
- **Text:** Work Sans (grotesk, variable wght 100-900). Slightly wide and workmanlike body at 17-19px; pairs with Chivo's industrial punch without competing.
- **Accent:** DM Mono (mono, 300-500). Tabular figures for ticket numbers, weights, dates; quiet data voice.
Why: Chivo's heavy weights read like stamped ink on paper; Karla stays invisible for body; DM Mono makes the numbers feel printed, not typeset. Pair is unique in the registry.

## Palette: Scale-Ticket Buff + Carbon Blue + Stamp Red

- **Paper:** #F5F0E6 (scale-ticket buff)
- **Ink:** #1A1A1A (near-black for body text)
- **Deep:** #1E2A36 (deep navy for dark bands)
- **Accent:** #2B5C8A (carbon-copy blue for figures, rules, focus)
- **Signal:** #B8372B (stamp red for CTAs, alert notes)
- **Mid:** #D6CFC2 (mid-tone for muted text, rules on paper)

Contrast table (verified via `node tools/contrast.mjs`):
| FG | BG | Ratio | Use |
|---|---|---|---|
| #1A1A1A | #F5F0E6 | 14.8:1 | Body on paper ✓ |
| #1A1A1A | #D6CFC2 | 9.2:1 | Muted on mid ✓ |
| #F5F0E6 | #1E2A36 | 12.1:1 | Paper text on deep ✓ |
| #F5F0E6 | #2B5C8A | 5.1:1 | Paper on accent ✓ |
| #F5F0E6 | #B8372B | 4.6:1 | Paper on signal ✓ |
| #2B5C8A | #F5F0E6 | 5.1:1 | Accent words on paper ✓ |
| #B8372B | #F5F0E6 | 4.6:1 | Signal words on paper ✓ |
| #1A1A1A | #2B5C8A | 4.7:1 | Ink on accent band ✓ |
| Focus ring #2B5C8A on #F5F0E6 | 5.1:1 | ≥3 ✓ |
| Focus ring #2B5C8A on #1E2A36 | 3.2:1 | ≥3 ✓ |

Family name: "Scale-Ticket Buff + Carbon Blue + Stamp Red". Unique in registry.

## Hero family

**Family 10 — Horizontal rail.** A horizontal rail of three ticket stubs scrolls across the hero, each carrying one promise: "Written scope", "Load estimate", "Weigh ticket". Photo `hero-B1` sits behind the rail as a muted backdrop. Breaks the cliché: horizontal rails are usually logo marquees or service lists; here the rail is the paperwork itself, moving like a printer feed. Unique in the demolition niche; family 10 used 1× in library (handyman-A), well under cap.

## Motion score

- **Intro (≤1.2s):** A ticket feeds out of a slot at the top of the hero and the numbers print one by one (DM Mono digits fade in sequentially). Skippable via `prefers-reduced-motion`; content visible immediately without JS.
- **Scroll story 1 (verb: stack):** A stack of tickets builds in the margin as you scroll; each section adds its stub with a short slide-up + fade. Tonnage bar grows beside it.
- **Scroll story 2 (verb: count):** Running tonnage total in the header counts up via `data-count` as tickets enter view.
- **Hover language:** One pattern — ticket stub lifts 2px and the carbon-blue offset shifts right 4px via `translateX`, revealing the "copy" beneath. Consistent across all tickets.
- **Reduced motion:** All tickets render statically in their final position; no feeding animation, no stacking, no counting. Content complete and readable.

## Tools

1. **Tear-out sizer** (`estimator` module). Inputs: room/structure selector, size (sq ft or small/avg/large), contents checkboxes. Output: crew-days, trailer loads, sample price range from `facts.proof.prices`. Hand-off: "Book a walk-through" button with service + size prefilled via `data-service`.
2. **Debris load estimator** (`estimator` module). Inputs: job type + size. Output: "about 3 trailer loads or one 20-yard container" with honest note on cost tradeoff. Hand-off: same prefill button.
3. **House-year check** (`checklist` module). Input: year built or "not sure". Output: plain-language result about lead/asbestos testing policy. Hand-off: attaches year to form step.
4. **ZIP checker** (`zip` module). Standard.
5. **Quote form** (`form` module). Multi-step: service → size/details → timing → contact. Prefill from tools via `data-service`.

## Voice

Three sample sentences:
- "Your written scope is the price; if we find more, we stop and show you before any extra work."
- "Every trailer gets weighed at the transfer station, and the ticket comes to your email that night."
- "Houses built before 1978 can have lead paint; we test the materials we'll disturb before we start."

Five words never used: guaranteed, certified, eco-friendly, award-winning, free estimate.