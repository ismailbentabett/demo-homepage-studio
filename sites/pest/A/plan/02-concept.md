# Concept — pest-A (Sill Plate Pest Co.)

## Three obvious concepts, rejected

1. **Bug-macro hero with red alarm banner.** Every competitor does this; brief §4 lists it as a leave-trigger. Rejected.
2. **Cartoon exterminator mascot + coupon pop-up.** Franchise template; violates brief §4 and DEMO-RULES. Rejected.
3. **Generic "trusted local experts" page with 30 pest icons.** Template seed from brief §4; no Wilmington specificity, no inspection process shown. Rejected.

## The thesis

The page is the inspection clipboard: each section is a numbered station on a coastal house cross-section, and the signature is the finding tag (Seen / Not seen / Conducive) that fills in as you scroll.

## The signature system

**Name:** Station Tag Rail.
A vertical rail carries six numbered station badges (01–06); each section lights its badge and reveals a finding-tag pill (graphite outline → green fill for Not Seen, amber fill for Conducive). The final section renders the complete sample report sheet with all six tags filled.

- **Hero:** Station 01 badge beside the H1; crawlspace photo pinned right; tag reads "Sample".
- **Story (stations 02–05):** Each station block has its badge top-left, a photo of that area center, and a finding-tag pill bottom-right that animates from outline to fill on entry.
- **Proof:** Sample report card with all six rows; tags are static filled pills; retreat guarantee sits below.
- **Footer:** Station 06 badge becomes the phone/CTA anchor; rail ends in a "Report complete" stamp.

Hook: `data-sw-signature="station-tag"`.

## Type

- **Display:** Zilla Slab (slab, friendly authority, ≤3 uses in registry, 0 in pest niche). Stamped-report header feel matches the clipboard thesis.
- **Text:** Source Sans 3 (grotesk, neutral, readable at small sizes for form fields and tags).
- **Accent:** DM Mono (for station numbers, finding labels, prices, dates).
- Pair is unique in registry; Zilla Slab not used as display in any reserved site.

## Palette

**Family:** Graphite + Inspection Paper + Field Green.
Tone: light-led.

| Role | Hex | Use |
|---|---|---|
| Ink | #2D3436 | Body text, headings, rules |
| Paper | #F5F3EB | Page background, card bg |
| Mid | #E8E4D9 | Section alt bg, borders |
| Accent | #1B5E3B | Buttons, Not-Seen tag fill, focus ring |
| Signal | #B8860B | Decorative only: station badge border, rail line, Conducive tag border (no text) |
| Deep | #1A2E22 | Mobile bar bg, footer bg |

Contrast table (verified):
- Ink on Paper: 11.41:1 (AA/AAA pass)
- Ink on Mid: 9.98:1 (AA/AAA pass)
- Accent on Paper: 6.97:1 (AA pass, AAA large pass)
- White on Accent: 7.74:1 (AA/AAA pass) — button text safe
- Signal on Paper: 2.92:1 — FAIL for text; used only for 2px borders and shapes
- Signal on Ink: 3.89:1 — large-only decorative; no text

## Hero family

**Family 11** (diagonal split). Unique in pest niche; 1 use in registry (roofer-A), room for two more.
Breaks cliché: no bug macro, no hazmat suit; diagonal line cuts the hero — left side shows a calm daylight crawlspace entry under a coastal Carolina house, right side carries the headline and first station tag on inspection-paper ground. The diagonal echoes the treated-zone line around a foundation. On mobile, photo stacks above text.

## Motion score

- **Intro:** Flashlight cone radial mask sweeps once L→R across hero photo (≤1.2 s), then rests. Skippable via prefers-reduced-motion.
- **Scroll story:** Station rail is pinned; dotted path draws from 01→06 via --sw-p clip-path wipe; each station's finding tag fades in as its section enters view. Verb: draw + fade.
- **Hover:** Finding tag lifts 2px with subtle shadow on card hover.
- **Reduced motion:** Static diagram with numbered list; all tags visible; no sweep or draw.

## Tools

1. **Termite-or-Flying-Ant Identifier** (`checklist` kit module). Inputs: waist, wings, antennae (line-diagram taps). Output: likely ID + next step + sample inspection price. Prefills quote form problem step.
2. **Crawlspace Conditions Check** (`checklist`). Inputs: 5 tick boxes. Output: conducive conditions list + fix per item + moisture-check service link. Prefills quote form.
3. **ZIP Checker** (`zip`). Input: 5-digit ZIP. Output: served/not served from facts zips.
4. **Multi-step Quote Form** (`form`). Steps: problem → house type → closing date (if letter) → photos → contact. Fast path: "termite letter for a sale" pre-selects closing-date step.

## Voice

**Samples:**
- "We check the sill plate first because that is where termites start."
- "Your report lists what we saw, what we did not see, and what invites them."
- "The product label stays with you so you know what was applied and where."

**Never uses:** safe, non-toxic, harmless, eco-friendly, guaranteed (without qualification).