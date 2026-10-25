# Concept — electrician-B (Torque & Tag Electric)

## 1. Three obvious concepts, rejected

1. **"Safety first" fear page.** Dark background, lightning-bolt icons, fire statistics, red warning badges. Rejected: every competitor does this; it is the brief's §4 cliché list verbatim. The homeowner leaves in 5 seconds.
2. **"We do it all" service grid.** 60-item icon grid with "Call for quote" on each. Rejected: template look, no prices, no proof, no signature. Brief §4 #3 and #6 explicitly ban it.
3. **"Panel schedule" taken literally as a static table.** A flat HTML table of circuits with no interaction, no motion, no variation across sections. Rejected: the brief's seed made into a spreadsheet, not a system. It would score 6 on distinctiveness because it has no wow moment and no motion story.

## 2. The thesis

The page is a panel schedule that fills itself in: two columns of numbered circuits flip from OFF to ON as you scroll, and each live circuit opens into a service, a tool or a review written in the same hand that labels lugs.

## 3. The signature system: "Panel Schedule Flip"

A two-column rail of numbered breaker slots (odd left, even right) runs through the page. Each slot has: a circuit number in condensed mono, an amperage pill, a handwritten-style label, and a toggle handle. The system appears in four sections with variation:

- **Hero:** the mosaic tiles are the breaker slots themselves; they click on one by one like breakers being reset, then the headline lights in the center spine. The main breaker at top is the primary CTA.
- **Services:** each service sits in its own circuit slot; the handle flips ON on scroll entry, the label fills in with a hand-drawn stroke, and the sample price range appears in tabular numerals beneath.
- **Proof / Reviews:** reviews are filed under the circuit they fixed (e.g., Circuit 14 — Aluminum Wiring Repair). The star rating is drawn as five small breaker handles, filled when in view.
- **Footer:** the schedule ends with a "Main Off" slot that holds the demo disclaimer and credits; the final handle flips to OFF as a quiet close.

CSS primitive: `.circuit` is a flex row with `.circuit__num`, `.circuit__handle`, `.circuit__label`, `.circuit__amps`. The handle is a 24×12px rounded rect that rotates 90deg on `.is-on`. The label uses Caveat for the handwritten feel. This primitive is reused everywhere via `data-sw-signature="panel-schedule"`.

## 4. Type

- **Display:** Oswald (condensed, variable wght 200–700). Tall and narrow, reads like breaker-panel engraving. Appears ≤ 3 times in registry (currently 0), never in electrician niche.
- **Text:** Karla (grotesk, variable wght 100–900). Clean, slightly rounded, high x-height for readability at small sizes on dark backgrounds. Already used as text in painter-A and general-B but never paired with Oswald.
- **Accent:** DM Mono (mono, 300–500). For circuit numbers, amperage pills, and sample tags. Low-contrast, technical.
- **Why this pair suits the thesis:** Oswald's condensed verticality mirrors the breaker column; Karla's friendly geometry keeps the dark-led tone from feeling industrial; DM Mono grounds the schedule metaphor in real panel typography.

## 5. Palette: "Breaker Charcoal + Panel Cream + Amber ON"

| Role | Hex | Name |
|---|---|---|
| ink | #E8E4DC | panel cream |
| paper | #F5F3EE | warm white |
| accent | #E09A15 | amber ON |
| deep | #1C1F23 | breaker charcoal |
| signal | #C43E2A | trip red |
| mid | #3A3F47 | panel gray |

Contrast table (verified with `node tools/contrast.mjs`):

| FG | BG | Ratio | Use |
|---|---|---|---|
| #E8E4DC | #1C1F23 | 12.8:1 | body on deep ✓ |
| #1C1F23 | #F5F3EE | 15.2:1 | body on paper ✓ |
| #E09A15 | #1C1F23 | 6.1:1 | accent words on deep ✓ |
| #C43E2A | #F5F3EE | 5.1:1 | signal words on paper ✓ |
| #E09A15 | #F5F3EE | 3.6:1 | **never for words**, rules/handles only |
| #E8E4DC | #3A3F47 | 8.1:1 | body on mid ✓ |
| #1C1F23 | #E09A15 | 6.1:1 | focus ring on accent ✓ |
| #F5F3EE | #C43E2A | 5.1:1 | white on signal button ✓ |

Palette family name "Breaker Charcoal + Panel Cream + Amber ON" is unique in registry.

## 6. Hero family

**Family 8: Photo mosaic.** A grid of 6 small photos arranged as two columns of breaker slots, with the headline in the center spine. Unique in electrician niche (no sibling uses family 8). Library count: 0. What breaks the cliché: the mosaic tiles are not decorative — they ARE the signature circuit slots, clicking on sequentially like breakers resetting, and the center spine carries the h1 as if it were the main breaker label. No stock photo of a man pointing at a panel.

## 7. Motion score

- **Intro (≤ 1.2 s):** Mosaic tiles click on top-to-bottom, 80ms stagger, each tile unclips from top. Headline fades in at 600ms. Skippable via reduced motion (all tiles visible immediately).
- **Scroll story 1 — Circuit flip:** As each service/review section enters viewport, its circuit handle rotates 90deg (OFF→ON) with a 200ms ease-out snap, and the label draws in via clip-path wipe left-to-right over 400ms. Verb: flip + draw.
- **Scroll story 2 — Amperage count:** In the estimator output, the amperage number counts up from 0 to the calculated load using `data-count`, tabular numerals, 900ms. Verb: count.
- **Hover language:** A hairline underline grows from left (`scaleX(0→1)`, `transform-origin: left`, 200ms) on all interactive elements. One language site-wide.
- **Reduced motion:** All circuits shown ON, all labels visible, no animation. Content complete and readable.

## 8. Tools

1. **Breaker trip sorter** (`kit/checklist`): Inputs — when it trips (right away / after minutes / when appliance starts), which room. Output — overload vs short vs ground fault, what to unplug, when to stop resetting. Hand-off: "Price it" button with `data-service="Troubleshooting and repairs"`.
2. **Generator sizer** (`kit/estimator`): Inputs — what to keep running (checkboxes: fridge, furnace blower, well pump, AC, medical device, lights). Output — rough watt range + portable+interlock vs standby recommendation with trade-offs, sample price range from facts. Hand-off: "Price it" with `data-service="Generator interlocks"` or `data-service="Standby generators"`.
3. **EV / heat pump load check** (`kit/checklist`): Inputs — service size, big loads already present, charger wanted. Output — likely fits / may need calculation / likely needs upgrade, with reason. Hand-off: "Price it" with `data-service="EV charger installation"`.
4. **ZIP checker** (`kit/zip`): Confirms service area against `facts.biz.zips`. Yes → prefill form with ZIP.
5. **Quote form** (`kit/form`): Multi-step (service → job details → when → contact). Honest thank-you state per DEMO-RULES §3.

## 9. Voice

Three sample sentences:
- "Every lug torqued to spec, every circuit labeled before we leave."
- "Your 1968 ranch has aluminum branch wiring; rated connectors at each device make it safe without opening every wall."
- "The breaker tripped because the space heater and the window unit shared one old circuit; we split them onto two."

Five words never used: emergency, guarantee, same-day, bonded, affordable.