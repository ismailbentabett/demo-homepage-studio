# Concept — painter-B (Drawdown Painting Co.)

## 1. Three obvious concepts, rejected

1. **The paint swatch fan deck hero.** A rainbow of chips fanned across the screen with "Transform Your Space" headline. Obvious: every competitor does this; it says nothing about cost, gallons or prep; it is the brief's cliché #2.
2. **Smiling painter holding a roller.** White overalls, thumbs up, "Quality You Can Trust." Obvious: brief §4 cliché #1; no numbers, no proof, no tool; a template stock photo.
3. **Before/after slider of two rooms.** Left side peeling, right side fresh. Obvious: brief §4 cliché #5; stock photos are never real before/after; violates DEMO-RULES §5; hides the process and the price.

## 2. The thesis

The page is a paint lab's drawdown card: every section is a tint ticket printed with gallons, sheen, coverage and a sample range, and scrolling pulls the color bar across each card like a wet film test.

## 3. The signature system

**Name:** Tint Ticket + Drawdown Bar.

A tint ticket is a small printed label (service name, base, sheen, coverage, dry time, sample range) that appears as a header or card cap in four sections, each with a variation:

- **Hero:** Full-width tint ticket with headline as product name, room quote builder input field embedded, and a drawdown bar spanning the bottom edge showing three film thicknesses of the accent color.
- **Services grid:** Each service card is capped by a mini-ticket (name, sheen, sample range from facts.proof.prices); the drawdown bar sits under the card title as a colored rule whose width equals the coverage number.
- **Proof / reviews:** Review cards are styled as tickets ("Room: primary bedroom · Sheen: eggshell · Town: Cary"); the drawdown bar appears as a horizontal stripe behind the star rating, its opacity tied to the rating value.
- **Footer:** A final ticket summarizing license (sample), phone, hours and service area; the drawdown bar becomes the top border of the footer in the accent color.

The `data-sw-signature` hook drives the drawdown bar animation on scroll.

## 4. Type

- **Display:** Antonio (condensed sans, variable wght 100-700). Tall and narrow like a paint-can label; unique in the niche and ≤ 3 uses in registry.
- **Text:** Karla (grotesk, variable wght). Clean, readable body with tabular figures for numbers; pairs with Antonio's industrial feel.
- **Accent:** DM Mono (mono, label role). For ticket fields (coverage, sheen codes, dry times); reinforces the lab-print aesthetic.

Why: Antonio's condensed verticality mimics a tint label; Karla's open counters keep body legible at small sizes; DM Mono grounds the data fields in a technical register. None are Inter/Roboto/system-ui; pair is unique.

## 5. Palette

**Family:** Teal + Ochre + Parchment

| Role | Hex | On | Ratio | Use |
|---|---|---|---|---|
| ink | #1a3c40 | paper #f4f1ea | 10.55 | body text on light backgrounds |
| paper | #f4f1ea | ink #1a3c40 | 10.55 | primary background |
| accent | #0f766e | paper #f4f1ea | 4.85 | buttons, signal words, drawdown bars |
| deep | #1a3c40 | paper #f4f1ea | 10.55 | dark band backgrounds (reversed text) |
| mid | #2d5f63 | paper #f4f1ea | 6.35 (as bg with paper text) | secondary surfaces, rules |
| warm | #e8d5b7 | ink #1a3c40 | 8.29 | ticket card backgrounds, highlights |
| signal | #0f766e | paper #f4f1ea | 4.85 | CTA buttons, focus ring |

Notes: #1a3c40 on #2d5f63 fails (1.65) — never use ink text on mid background; only paper text on mid. Accent #0f766e passes AA on paper for normal text (4.85) and is used for buttons and signal words. Focus ring uses accent on paper (4.85 ≥ 3). All pairs verified via contrast.mjs.

## 6. Hero family

**Family 14 — Document object.** The hero is a paint-can tint ticket: formula lines, base, sheen, size, "coverage 350-400 sq ft/gal", with the headline printed as the product name and the room quote builder's first input below. Unique in the painter niche; ≤ 3 in library. Breaks the cliché by making the document itself the hero instead of a photo or video; the ticket IS the promise.

## 7. Motion score

- **Intro (≤ 1.2 s):** The tint ticket prints line by line (receipt-printer feed effect via staggered clip-path reveals), then the drawdown bar wipes left-to-right across the card bottom. Skippable; content visible without motion.
- **Scroll story 1:** Section backgrounds roll from one chip color to the next (paper → warm → mid → paper) like a paint strip; transition driven by scroll position via GSAP ScrollTrigger pin on desktop, stacked static cards on mobile.
- **Scroll story 2:** Ticket fields (gallons, coverage, price range) count up to their values as each section enters viewport using `data-count`.
- **Hover language:** A hairline underline grows from left (`scaleX(0→1)`, `transform-origin: left`, 200ms) on all interactive elements. One language site-wide.
- **Reduced motion:** All tickets render fully visible; no printing animation; no background color transitions; counters show final values immediately; hover underline appears instantly.

## 8. Tools

1. **Paint calculator** (`estimator` module). Inputs: room length, width, wall height, doors/windows count, coats. Output: wall area and gallons needed (350-400 sq ft/gal shown as method), primer gallons if dark-to-light. Handoff: "Price this room" button pre-selects "Interior painting" in quote form with gallon count passed via data attribute.
2. **Sheen picker** (`tabs` module). Inputs: room type (bath/kitchen/bedroom/hall/trim/ceiling), kids/pets toggle. Output: recommended sheen with plain-language reason (wipeability vs flaw-hiding). Handoff: selected sheen passed to quote form step 2 via hidden field.
3. **Room quote builder** (`estimator` module). Inputs: rooms by size (S/M/L), ceilings yes/no, trim/doors yes/no, color change dark-to-light. Output: sample range from facts.proof.prices with each line item shown, labelled Sample. Handoff: total range and room breakdown prefill quote form step 2.
4. **ZIP checker** (`zip` module). Standard; yes-result offers form with ZIP prefilled.
5. **Multi-step quote form** (`form` module). 4 steps; service prefilled from any CTA with `data-service`.

## 9. Voice

**Three sentences in voice:**
1. "Two gallons of eggshell, one of semi-gloss for the trim, and the price lands inside the range we showed you."
2. "We print the gallons, the sheen and the sample range before we visit, so there is nothing to guess."
3. "Your walls are 420 square feet; that is one gallon per coat plus a half-gallon for cuts."

**Five words never used:** transform, quality, affordable, expert, professional.