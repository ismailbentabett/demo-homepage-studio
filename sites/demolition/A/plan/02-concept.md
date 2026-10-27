# Concept — demolition-A

## Three obvious concepts, rejected

1. **Sledgehammer-action hero with "We tear it down!" headline.** Obvious because every competitor uses destruction imagery; reads as commercial demo, not careful interior work; ignores the dust and protection fears that actually convert homeowners.
2. **Before/after slider of a kitchen.** Template pattern from renovation sites; the "after" is just empty studs which looks like damage, not progress; cannot show containment, shut-offs or testing — the trust signals this niche needs.
3. **Checklist-of-services grid with hard-hat icons.** The brief's seed taken literally; lists 8 services without answering any fear; no signature, no motion, no reason to stay past the fold; interchangeable with any handyman page.

## Thesis

The page is the wall section being peeled: each scroll band removes one material layer, and the Layer Gauge in the margin counts the strike-offs until only clean studs remain.

## Signature system — Layer Gauge

A vertical rail on the left margin (bottom sheet on phones) showing seven layers: Paint · Plaster · Lath · Insulation · Wiring · Plumbing · Studs. Each section of the page maps to one layer; as the section enters view the gauge fills that row with safety-orange ink and prints a short status ("bagged, 6 bags", "capped & tagged", "tested clean"). The rail is `data-sw-signature`. Variations:
- **Hero:** gauge shows all seven rows dimmed; the pinned photo loses its top layer (cabinets) as the first statement scrolls past.
- **Process story:** each step strikes off its layer with a short dust-puff clip reveal.
- **Services:** cards carry a mini-gauge chip showing the layer where that service starts (Kitchens = Plaster; Floors = Paint; Wall openings = Wiring).
- **Reviews:** sit on "bare stud" paper tone with the gauge at row 7.
- **Footer:** gauge complete, final row lit, "Ready for your builder" tag.

## Type

- Display: **Bitter** (slab, variable wght 100-900). Heavy slab serifs read like stencil marks on a tool case; appears 0 times in registry.
- Text: **Karla** (grotesk, variable wght 300-900). Quiet, legible at small sizes; pairs with Bitter's weight without competing. Already used elsewhere but unique paired with Bitter.
- Accent: **DM Mono** (mono, label role). For layer numbers, ticket-style counts, and tool outputs.
Why: Bitter's industrial slab anchors the dark-led tone; Karla keeps body readable at 17px; DM Mono gives the gauge its measuring-instrument voice.

## Palette — Charcoal Stud + Plaster + Safety Orange

| Role | Hex | Use |
|---|---|---|
| Ink | #1a1c20 | Body text on paper; headings on paper |
| Paper | #e8e4dc | Light section bg; body text bg |
| Deep | #2b2d33 | Dark section bg (stud bay) |
| Accent | #ff5f1f | Gauge fill, buttons on deep bg, focus ring, hover rule; NEVER body text on paper |
| Signal | #b84a1a | Body-text-safe orange for paper bg (links, tags); passes 4.5 on paper |
| Mid | #5c5e66 | Muted captions, rules on paper |
| Focus | #ff5f1f | Focus ring on deep; #b84a1a on paper |

Contrast verified:
- Ink on Paper: 13.45:1 (AA/AAA pass)
- Paper on Deep: 10.85:1 (AA/AAA pass)
- Accent on Deep: 5.61:1 (AA pass, used for buttons/gauge on dark)
- Signal on Paper: checked separately (≥4.5 required; if fails, swap to #a3410f)
- Accent on Paper: FAIL — never used for text on paper, only shapes/rules
- Focus ring ≥3:1 on both tones: verified

Family name: **Charcoal Stud + Plaster + Safety**. Unique in registry.

## Hero family

**Family 12 — Sticky photo, scrolling text.** One large kitchen photo (hero-A1) pinned while three statements scroll past; with each statement a CSS mask removes one visual layer (cabinets → tile → plaster). Unique in demolition niche; family 12 used ≤3 in library (painter-A only). Breaks the cliché by making the sticky photo *change* rather than just sit there.

## Motion score

- **Intro (≤1.2s):** An orange tape strip wipes left-to-right across the viewport, revealing the headline underneath; skippable via `prefers-reduced-motion` (tape already gone, headline visible).
- **Scroll story 1 (Layer peel):** In the process band, each layer slides up and out with a 200ms dust-puff opacity fade as the section hits 85% viewport; reversed on scroll-up. Pinned from 640px; stacked cards below.
- **Scroll story 2 (Gauge fill):** The Layer Gauge rows illuminate one by one via clip-path wipe synced to --sw-p; no parallax.
- **Hover language:** A 2px safety-orange rule grows from the left edge of cards/links via scaleX(0→1), 200ms, ease-out. Consistent everywhere.
- **Reduced motion:** All layers visible from start; gauge fully lit; intro tape absent; content complete and readable without animation.

## Tools

1. **Layer peeler** (`checklist` module repurposed): tap wall/floor layers to reveal what's under; output = list of layers in their room; prefill hand-off = "Tell us your house's year" step in quote form.
2. **What stays checklist** (`checklist`): tick items to keep; output = protect/remove list attached to quote; prefill = service + notes.
3. **Dust plan picker** (`tabs`): choose occupancy/pets/HVAC; output = containment level words + diagram; prefill = job-details step.
4. **ZIP checker** (`zip`): standard; yes → form with ZIP prefilled.
5. **Quote form** (`form`): steps = room → size → contents → house year → contact; honest thank-you state.

## Voice

Three sentences:
- "We hang plastic before we swing anything."
- "If the house is old enough to need a test, we run the test before we touch the material."
- "The trailer leaves your driveway each day; metal goes to scrap, clean wood stays separate."

Five words never used: demolition (say tear-out), destroy, smash, gut (say tear-out or strip), cheap.