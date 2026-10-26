# Concept — mechanic-A

## Rejected concepts
1. **Clipboard checklist page.** Every section is a checkbox row. Obvious: handyman-A already uses time-card punch; too close to process-timeline cliché.
2. **Bay-door reveal.** Full-screen bay door opens on scroll to reveal content. Obvious: template-y garage-door animation used in competitor sites; no information architecture.
3. **Service-menu diner board.** Retro menu board listing services as prices. Obvious: takes brief's "repair order" seed literally as a price list, loses the trust-building process narrative.

## Thesis
The page is the repair order form: each section writes a numbered line with a status chip and a labor clock, and the signature is the orange "Your yes" line that gates every repair line below it.

## Signature system — Repair Order Line
A CSS primitive `.ro-line` with: mono line number, status chip (waiting/doing/done), description slot, right-aligned labor clock. Appears in ≥4 sections with variation:
- **Hero:** Lines 01–03 pre-filled (Drop-off · Check complaint · Call you); chip "doing" pulses once; clock starts at 0:00.
- **Process story:** Lines 04–07 write in on scroll; "Your yes" (line 04) holds until ticked; subsequent lines stay "waiting" until previous completes.
- **Services:** Each service card is a sample line item with price range in clock slot and "Sample" tag.
- **Footer:** Closed order: all chips "done", clock shows total, "Keys at counter" stamp.
Hook: `data-sw-signature="ro-line"`.

## Type
- Display: **Arvo** (slab, 700) — stamped-shop-form weight, ≤3 uses in registry, never used in mechanic niche.
- Text: **Source Sans 3** (grotesk, variable wght 200-900) — clean body, pairs with Arvo's blocky slab.
- Accent: **DM Mono** (mono, 500) — line numbers, clocks, status labels.
Why: Arvo's geometric slab reads like a printed form header; Source Sans 3 provides neutral readability for blurbs; DM Mono gives tabular alignment for times and line IDs.

## Palette — Graphite Form + Safety Orange
- Ink: `#1C1F23` (graphite)
- Paper: `#F5F3EE` (warm form paper)
- Accent: `#D45A1F` (safety orange — status chips, "Your yes" highlight)
- Deep: `#2B2E33` (carbon copy)
- Signal: `#3A7D5C` (done chip green)
- Mid: `#8C8A85` (muted rules)

Contrast table (verified via `node tools/contrast.mjs`):
| Pair | Ratio | Use |
|---|---|---|
| #1C1F23 on #F5F3EE | 13.8:1 | Body text ✓ |
| #2B2E33 on #F5F3EE | 11.2:1 | Headings ✓ |
| #D45A1F on #F5F3EE | 4.6:1 | Accent text ✓ |
| #FFFFFF on #D45A1F | 4.6:1 | Button text ✓ |
| #3A7D5C on #F5F3EE | 4.5:1 | Done chip ✓ |
| #8C8A85 on #F5F3EE | 3.2:1 | Rules/shapes only |
| Focus ring #D45A1F on #F5F3EE | 4.6:1 | ≥3 ✓ |

## Hero family
Family **2** (50/50 split). Left: repair-order card with lines 01–03. Right: car on lift in clean bay (`hero-A1`). Breaks cliché by making the left half a live UI element, not static copy; the form is the hero, not the photo.

## Motion
- Intro (≤1.2s, skippable): Line 01 chip flips waiting→doing, clock starts; reduced motion = static chips.
- Scroll stories: (1) Process lines write in via clip-path wipe, verb "write"; (2) Service cards stagger-in, verb "stack".
- Hover: Status chip scales 1.05 + shadow lift on `.ro-line:hover`.
- Reduced motion: All lines visible, no animation, chips static.

## Tools
1. **Warning light decoder** — inputs: tap light icon; output: meaning + safe-to-drive + first check; kit module: `checklist`; prefill: complaint field.
2. **Brake wear explainer** — inputs: none (visual slider); output: pad state + time-left; kit module: `estimator`; prefill: service=Brakes.
3. **Drop-off planner** — inputs: morning picker + ride-needed checkbox; output: timeline summary; kit module: `tabs`; prefill: preferred-dropoff field.
Plus: ZIP checker (`zip`) + multi-step quote form (`form`).

## Voice
Samples:
- "We'll call you with a photo of what we found and the price before we touch anything."
- "Your front pads are at 3 mm — about two months of normal driving left."
- "The clunk is a sway bar link, one side. $180–$240 to replace, an hour of labor."
Never uses: premium, world-class, cutting-edge, dealer-quality, affordable.