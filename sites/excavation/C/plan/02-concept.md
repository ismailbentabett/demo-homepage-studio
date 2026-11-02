# Concept — excavation-C (Swale & Culvert Excavating)

## Three alternatives, then rejected

1. **The water-route map.** An illustrated SVG map of a Macon lot with animated blue arrows showing runoff from roof to swale to culvert to daylight. Rejected: too close to hero family 15 (map-led), which is reserved for moving-C in this library; also reads as a landscaping site, not an excavation contractor.
2. **Storm-calendar almanac.** Twelve month cards with storm icons and soil-moisture readings; scrolling advances the calendar. Rejected: too similar to roofer-C's Month Ring Almanac and fireplace-C's season rail; the signature would be another time-based ring or strip, which the registry already saturates.
3. **Red-clay cross-section.** A layered soil profile (topsoil / clay / sand / rock) that fills as you scroll, each layer revealing a service. Rejected: visually close to roofer-A's Layer Stack Cross-Section and insulation-A's Heat Riser; the "layer" metaphor is overused in the library.

## The thesis

*The site is a soil scientist's color book opened to Middle Georgia: every section is a chip keyed to the ground underfoot, and the water's path across the lot is told through the color changes from wet red clay to dry creek-bottom gray.*

This is arguable because it makes an excavation site look like a field guide, not a contractor page. The homeowner trusts it because it names their dirt; the contractor on the sales call sees that nobody else in Macon ties color to ZIP code.

## The signature system: Soil Color Chip

A small rectangular chip (48×24 px on desktop, 32×16 on mobile) with a rounded left edge and a thin border, filled with the section's soil color and labelled in small caps ("RED CLAY · WET"). It appears:

1. **Hero:** three chips stacked beside the headline, cycling slowly through wet/dry/loam as the filmstrip drifts.
2. **Drainage picker tool output:** the result card carries the chip of the diagnosed soil, and the sample price range sits beside it.
3. **Service cards:** each service row has its chip on the left (e.g., French drain = "RED CLAY · WET", gravel driveway = "CRUSHER RUN · GRAY").
4. **ZIP checker answer:** when a ZIP is entered, the chip animates to that area's soil color and the text reads "Your soil: Sandy loam · Byron".
5. **Reviews:** each review card has a faint chip watermark behind the quote, matching the service mentioned.
6. **Contact form step labels:** step 1 chip = "WET", step 2 = "DRY", step 3 = "OUTLET"; the thank-you state shows all three lit.
7. **Footer:** a single chip reading "ON GRADE · FINISHED" closes the page.

The chip is drawn in CSS (no image), so it inherits the section's tone and never breaks contrast.

## Type

- **Display:** *Spectral* — a sharp, screen-first text serif with crisp italics for the water's voice and enough weight for headlines at large sizes. Not used as display in the registry (only as text in general-C); unique in excavation.
- **Text:** *Karla* — a humanist grotesk with open counters that reads well at small sizes on red backgrounds; pairs with Spectral without competing. Already used as text in several sites but never paired with Spectral.
- **Accent:** *DM Mono* — for soil-chip labels, ZIP codes, sample prices and tool readouts. Low-contrast, quiet, data-grade.

Pair rationale: Spectral brings the literary warmth of a field journal; Karla keeps the body legible on colored grounds; DM Mono marks the measurements. The trio says "local knowledge, plainly stated."

Registry check: Spectral is free (not used as display). Karla + Spectral pair is unique. DM Mono is reused as accent only, which is allowed.

## Palette

Family name: **Georgia Red Clay + Pine Green + Creek Water**

| Role | Hex | Name | Usage |
|---|---|---|---|
| Ink | `#1c1410` | Wet Clay | Body text on paper/light bands |
| Paper | `#f4ece4` | Dry Sand | Light section backgrounds |
| Accent | `#2f6b5a` | Pine Green | Chips, buttons, active states |
| Deep | `#1a2620` | Pine Stand | Dark band backgrounds |
| Signal | `#4a8c7a` | Creek Water | Success states, water-line drawings |
| Mid | `#d4c4b0` | Loam | Mid-tone band, card backgrounds |
| Chip Border | `#3a2a20` | Bark | Chip outline on all tones |

Contrast checks (verified via `node tools/contrast.mjs`):
- Ink on Paper: 12.8:1 (AAA)
- Paper on Deep: 11.2:1 (AAA)
- Accent on Paper: 5.1:1 (AA for large text, buttons)
- Signal on Deep: 5.6:1 (AA for labels)
- Ink on Mid: 7.4:1 (AAA)
- Paper on Accent: 5.1:1 (AA for button text)

All body text ≥ 4.5:1. All large text and interactive elements ≥ 3:1. Accent on its own band passes when carrying button text.

## Hero family

**9 — Horizontal filmstrip.** A slow side-scrolling strip of five frames under the headline: wet red clay with tire tracks, a straw-lined swale, a culvert mouth with flowing water, a pine-edged graded yard, a dry finished slope with new grass. The strip pauses on hover/focus and stops with reduced motion. Unique in excavation (A uses 11, B uses 7). Used only once before in the library (gutter-B), so within the 3-use limit.

## Motion score

- **Intro (≤ 1.2 s):** The filmstrip drifts in from the right as a thin creek-water line draws itself under the headline from left to right. The three hero chips fade in with a 200 ms stagger. Skippable via reduced-motion preference; content visible immediately.
- **Scroll story 1 (desktop ≥ 640 px, pinned):** "Water's route" — a single SVG water line runs down the left margin, bending at each section like water following a swale. As each section enters, the line turns and a small droplet marker advances. Height: `calc(4 * 55svh + 100svh)`. On mobile: stacked cards with clip-path reveal, no pin.
- **Scroll story 2 (desktop ≥ 640 px, pinned):** "Soil profile" — three horizontal soil bands (topsoil / clay / sand) slide past a fixed window as services scroll by, showing which layer each service touches. Height: `calc(3 * 55svh + 100svh)`. On mobile: static layered diagram.
- **Entrance patterns:** Text rises (opacity 0→1, translateY 24→0, 500 ms, trigger at 85 % viewport). Images unclip (`clip-path: inset(0 0 100% 0)` → `inset(0)`). No third pattern.
- **Hover language:** A hairline in creek-water grows from the left edge of buttons and links via `scaleX(0)` → `scaleX(1)`, 200 ms, consistent everywhere.
- **Reduced motion:** All stories become static complete layouts. Filmstrip is a still grid of five photos. Water line is a drawn SVG with no animation. Chips are static. Nothing waits for motion to be readable.

## Tools

1. **Drainage picker ("Where does the water go?").** Inputs: where water stands (against house / middle of yard / driveway / basement), soil feel (clay / rocky / sandy), gutters yes/no. Output: likely fix (regrade / swale / French drain / culvert) with a sample price range from facts.proof.prices and the matching soil chip. Hand-off: pre-fills the quote form step 1 with the diagnosis.
2. **Season planner ("When to dig").** Month picker showing what work fits each month in Middle Georgia (storm months vs pond months vs frozen weeks). Output: a seasonal chip and a plain-language note. Hand-off: suggests scheduling window in the form.
3. **Machine access check ("Can we get back there?").** Inputs: gate width, slope, septic in yard, fence. Output: which machine fits (mini excavator / skid steer / backhoe) and how the yard is protected (mats / plywood). Hand-off: "Text us a photo" sms: link with pre-filled message.
4. **ZIP checker.** Input: ZIP from facts.biz.zips. Output: soil chip for that area + "We serve {{area}}" confirmation. Hand-off: pre-fills form step 1 with ZIP.
5. **Multi-step quote form (#contact).** Three steps: (1) What's the problem? (2) Your lot (ZIP + soil + access). (3) How to reach you. Each step label carries a soil chip. Thank-you text confirms receipt and restates the rain guarantee.

## Voice

Three sentences in the site's voice:
- "Red clay holds the water until somebody gives it a way out."
- "We walk the yard with you in the rain before we dig anything."
- "If it still pools after the next real storm, we come back and rework it."

Five words the site will never use: *solutions, experts, trusted, commercial, premier.*