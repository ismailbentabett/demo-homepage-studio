# Concept — nursery-B (Sun Hours Nursery)

## Three rejected alternatives
1. **Bright garden-center grid.** A cheerful photo mosaic of flowers with rounded cards and green buttons. Rejected: every box-store garden center looks like this; it ignores the Polk County sand/sun problem and hides the tool behind decoration.
2. **Citrus-crate label nostalgia.** Vintage fruit-label typography with warm yellows and illustrated lemons. Rejected: reads as a farmers market or juice brand, not a place that answers "will this survive my yard"; cliché for Florida nurseries.
3. **Botanical illustration editorial.** Fine-line plant drawings on cream paper with serif captions. Rejected: beautiful but slow; the homeowner needs a fast check, not a field guide. Competitors already do "pretty plant site."

## The thesis
The site is a sun-hours check first and a nursery second: every section answers "how many hours of sun does this spot get, and what fits," so the drive is earned before it is made.

## The signature system — the sun-hours dial
A single drawn SVG arc (sun path over a simplified house roofline) appears in five roles:
1. **Hero:** full-width dial with four tap inputs along the arc; the sun marker sits at the chosen hour.
2. **Services:** each card carries a mini dial showing the sun range the plant group needs (e.g. Shrubs: 4–8 hrs).
3. **Prices:** pot-size rows use concentric rings on the same dial to show size-to-price visually.
4. **Hours:** the nursery's open window is drawn as a lit arc segment; "Open now" pulses when current time falls inside.
5. **Footer:** the dial resets to dawn as a sign-off mark.

No other site in the library uses a daylight dial. Hook: `data-sw-signature="sun-dial"`.

## Type
- Display + text: **Sora** (variable grotesk, wide and confident for headlines and big numbers like "6 HRS"; same family for body with tabular figures for sizes/prices).
- Unique check: Sora is used as display in solar-A only; pairing Sora + Sora is unique in the nursery niche and unused elsewhere.
- Fallback: system sans-serif stack.

## Palette — Sand + Palmetto + Citrus Leaf
Light-led. Bright Florida midday: sun-bleached sand white base, deep palmetto ink for text, citrus-leaf green as accent for data highlights and active states, hot-sun yellow as signal for open-now and CTAs.

| Role | Hex | Name |
|---|---|---|
| Paper | #F7F4EE | Sand White |
| Ink | #1A2E22 | Palmetto |
| Muted | #4A5D50 | Palmetto Muted |
| Accent | #3B7A3A | Citrus Leaf |
| Signal | #E8A918 | Hot Sun |
| Deep band | #14211A | Night Canopy |
| Rule | #D6CFBF | Sand Rule |

Contrast checks (all ≥ 4.5:1 body, ≥ 3:1 large):
- Ink on Paper: ~13.5:1
- Muted on Paper: ~6.2:1
- Accent on Paper: ~4.6:1 (body OK)
- Signal on Palmetto: ~4.8:1 (large text / buttons OK)
- Paper on Deep: ~14.2:1

Palette family: **"Sand + Palmetto + Citrus Leaf"** — unique in registry.

## Hero family
**7 — Tool-first.** The "Will it live in my yard?" check IS the hero. With JS off it renders as a plain list of plant groups by sun hours plus the call button. Unique in the nursery niche; hero family 7 used ≤3 times in library.

## Motion
- Intro (≤1.2 s): the sun marker traces its arc from dawn to the default 6-hour position while the shortlist count fades in. Skippable via reduced motion.
- Scroll story 1: pinned desktop sequence (≥640 px) where the dial rotates from morning to evening as three plant-group cards wipe in; on mobile, stacked cards with clip reveal.
- Entrance patterns: text rises (opacity + translateY 24px, 500ms); images unclip (clip-path inset).
- Hover: hairline rule grows from left via scaleX on cards and buttons.
- Reduced motion: all stories static and complete; dial shows default state; no autoplay.

## Tools
1. **Will it live in my yard?** (hero): inputs ZIP, sun hours (2/4/6/8+), soil (sand/clay/loam/don't know), watering (hose/drip/none); output short list of plant groups with sample size and price range; hands off to form with prefill.
2. **Size-to-price slider**: pot-size slider (1-gal → 30-gal); output sample price range from facts.proof.prices; hands off to form.
3. **Hedge counter**: fence length + plant type; output plant count and sample range; hands off to form.
4. **ZIP checker**: validates service area; pre-fills form.
5. **Multi-step quote form**: 3 steps (What / Where / When); thank-you text on submit.

## Voice
Three sentences in voice:
- "Your side yard gets about four hours of sun in summer. That explains why the last hibiscus never bloomed."
- "We grow these on sand, in this heat, before they ever reach the bench."
- "Text us a photo of the spot and its sun hours. You will get a short plant list back this afternoon."

Five banned words: premium, expert, best, affordable, quality.