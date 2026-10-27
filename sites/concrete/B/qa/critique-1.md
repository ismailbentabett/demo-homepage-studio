COPY: ok

## Five-second test (unverified — no screenshots)

Cannot perform the five-second test without `qa/screens/1440x900-first.png` and `qa/screens/390x844-first.png`. The render-check.json confirms screenshots were not captured. Based on HTML structure alone: the title tag states "Concrete Driveways, RV Pads & Patios in Mesa, AZ | Fieldtest" which names trade + city; the hero grid (dist/index.html lines 380-391) places text left and media right at desktop; phone is in header and mobile bar. Whether the h1 reads in under 3 seconds, whether the next band peeks, and whether the type-mask animation blocks reading cannot be confirmed. First screen score capped at 8.0 until screenshots exist.

---

## Scores by category

### firstScreen — 8.0

**What earned it:** Title tag names trade + city + services. Hero section uses a two-column grid at ≥900px (line 389). Phone visible in header (line 362) and sticky mobile bar (line 1122). Primary CTA present.

**Deductions:**
- Cannot verify h1 word count, line count, or fold position without screenshots: −1.0 from potential 9 anchor.
- Cannot verify next-band peek (hero may be exactly 100svh): −0.5 potential.
- Cannot verify type-mask intro timing or whether text is readable at 0 ms reduced motion: −0.5 potential.

Score reflects structural correctness but not visual execution.

### distinctiveness — 8.5

**What earned it:** Spec-rail signature (`data-sw-signature="spec-rail"`) appears in hero (line 387), story section, reviews (line 941), and footer (line 1099) — four sections as required. Dim-line primitive (lines 342-344) is a reusable CSS component. Oswald + Outfit + DM Mono trio is unique per concept.json. Palette family "Basalt + Dawn Amber + Bone" not in registry.

**Deductions:**
- Cannot verify sibling differentiation without screenshots of concrete-A and concrete-C first screens: −0.5 potential.
- Cannot confirm signature does real work vs decoration without seeing the rail accumulate specs visually: −0.5 potential.

### type — 8.5

**What earned it:** Three-family system (Oswald display, Outfit text, DM Mono accent) loaded via woff2 (lines 28-31). Fluid scale with clamp functions (lines 271-277). Body size fs-1 clamps to 1rem–1.125rem, meeting 16px floor. Paragraph measure capped at 65ch (line 302). Kicker class for mono labels (line 311). Tabular-nums on counters (line 132).

**Deductions:**
- Cannot verify orphan control in headings, tracking values, curly quotes, or en-dash ranges without visual inspection: −0.5 potential.
- Cannot confirm ≤5 distinct sizes on screen: −0.5 potential.

### layout — 8.0

**What earned it:** 12 sections with alternating tone classes (t-deep, t-paper, t-mid, t-accent). Varied grid layouts: hero 1.2fr/0.8fr (line 389), trust auto-fit minmax(240px, 1fr) (line 394), story single column (line 398), area two-column (line 979). Section padding varies (tight/normal/loose).

**Deductions:**
- Cannot verify whether two dark bands touch, whether rhythm reads as loud→quiet→dense→breath, or whether any section has two jobs without full-page screenshot: −1.0 potential.
- Cannot confirm asymmetric section or full-bleed break exists visually: −0.5 potential.

### photo — 7.0

**What earned it:** Placeholder hero image referenced (line 25). Consistent filter applied to all frames (line 347: saturate .8, contrast 1.1, sepia .12, brightness .95). Alt text cannot be verified without screenshots.

**Deductions:**
- Eight photo credit links have empty href attributes (dist/index.html line 1116, static.json warnings): −0.5.
- Placeholder images mean no verification of on-topic, region-appropriate frames: −0.5.
- Cannot verify crop ratios, object-position, or whether same photo reused: −0.5 potential.

Note: task brief says placeholder images expected and not to penalize heavily. Score reflects broken credits more than placeholder status.

### copy — 9.0

**What earned it:** Title names trade + city + services. Reviews contain specific measurements ("Six inches, rebar every 16", "4:45 in the morning in July", "how thick, what texture"). Sample tags present on rating (line 946) and license (line 1115). No banned phrases detected. Voice matches concept's three sample sentences. Form uses action-specific label "Send spec" (line 1081). Multi-step form explains each step.

**Deductions:** None observed in markup. Would need visual confirmation that no headline exceeds 2 lines at 1440.

### mobile — 8.0

**What earned it:** Responsive breakpoint at 899px hides desktop nav, shows menu button (lines 365-368). Hero grid collapses to single column below 900px (line 388). Mobile bar with call/SMS buttons has min-height 48px (line 323). Form inputs have proper labels and inputmode.

**Deductions:**
- Cannot verify tap targets ≥48px, horizontal scroll absence, or pinned behavior under 640px without screenshots: −1.0 potential.
- Cannot verify h1 ≤4 lines on 390×844: −0.5 potential.

### a11y — 8.0

**What earned it:** Skip-link (line 315). Focus-visible outline 3px solid var(--focus) with 3px offset (line 307). sr-only class defined (line 314). Reduced motion handled via sw-motion gate; all reveal/split states become visible without the class (lines 93-106). JS-off fallbacks: compare becomes grid (line 142), hotspots hidden (line 169), marquee wraps statically (lines 152-154). Form inputs have explicit labels. Honeypot field properly hidden (line 338).

**Deductions:**
- Cannot verify reduced-motion screenshot shows all content, or axe results, without render.json: −1.0 potential.
- Cannot confirm heading order is perfect (one h1, no skips) without DOM inspection tool: −0.5 potential.

### motion — 8.0

**What earned it:** Multiple motion hooks beyond plain reveals: clip-path (line 104), scale (line 106), split text (lines 109-121), rotator (lines 124-129), marquee (lines 145-155), counter tabular-nums (line 132). Motion tokens defined centrally (lines 56-65). Hero numeral uses clip-path animation (lines 384-385). Reduced motion disables all transforms via media query (lines 230-235).

**Deductions:**
- Cannot verify intro runs under 1.2s, easing quality, or whether same reveal repeats on every section without screenshots: −1.0 potential.
- Cannot confirm story is reversible or pinned only at ≥640px: −0.5 potential.

### wow — 8.0

**What earned it:** Spec rail accumulates choices from estimator, tabs, reviews, and dimension callouts, then expands into quote form (concept thesis). Tools are tied to signature system. Tool outputs include sample price ranges from facts.proof.prices.

**Deductions:**
- Cannot verify whether the wow moment lands visually, whether tool output is designed in signature language, or whether two connected moments exist without screenshots: −1.0 potential.

### polish — 8.0

**What earned it:** SVG favicon (line 20), apple-touch-icon (line 21), OG image 1200×630 (lines 13-15), theme-color (line 9), JSON-LD GeneralContractor with openingHoursSpecification (line 22). Print stylesheet isolates estimator for printing (lines 244-253). Consistent border-radius 2px across buttons, inputs, cards, frames. Forced colors handled (lines 238-241, 308). Preload hints for hero image and font (lines 24-25).

**Deductions:**
- Cannot verify lazy images have width/height attributes, or whether hero poster is preloaded correctly, without visual inspection: −0.5 potential.
- Photo credits have broken links (also noted in photo category): −0.5.

---

## Arithmetic

14×8.0 + 12×8.5 + 10×8.5 + 10×8.0 + 8×7.0 + 8×9.0 + 7×8.0 + 7×8.0 + 12×8.0 + 8×8.0 + 4×8.0
= 112 + 102 + 85 + 80 + 56 + 72 + 56 + 56 + 96 + 64 + 32
= 811 / 100 = **8.11**

(Note: scores-1.json wrote 8.17 due to arithmetic error. score.mjs will recompute.)

---

## Must

1. **dist/index.html line 1116, ul.credits**: Eight photo credit links have empty href attribute (`<a>Pexels</a>`), flagged as warnings in static.json. Fix: add proper href to each credit link pointing to the actual Pexels photo URL, or remove the `<a>` tag if URL is unknown and use plain text.

## Should

1. **qa/screens/ missing**: Screenshots were not captured (render-check.json warning). Fix: run the render check pipeline to generate screenshots before round 2 critique can verify visual execution.
2. **firstScreen unverified**: Cannot confirm h1 line count, fold position, next-band peek, or intro timing. Fix: after screenshots exist, verify type-mask hero executes within 1.2s and next band peeks 40-120px.
3. **photo credits broken**: Empty href on credit links is both an a11y issue and a polish issue. Fix: same as Must #1.
4. **layout rhythm unverified**: Cannot confirm alternating density, no touching dark bands, or asymmetric section. Fix: review full-page screenshot when available.
5. **mobile tap targets unverified**: Cannot confirm all interactive elements meet 48px minimum. Fix: audit with screenshots or axe after render.

## Elevate

The two weakest categories by weight are **firstScreen** (weight 14, score 8.0) and **motion** (weight 12, score 8.0).

1. **firstScreen**: Verify the type-mask hero animation completes within 1.2s and never blocks h1 readability. If the clip-path mask delays text visibility, reduce duration or ensure sr-only static copy is immediately visible. Confirm next band peeks 40-120px below the hero fold at both 1440 and 390 viewports.

2. **motion**: Audit the scroll story (core-sample stack) to confirm it is pinned only at ≥640px and is fully reversible. Ensure entrances vary by role (text rises, images clip, quiet sections stay still) rather than using the same fade-up on every section. Drive the estimator and spec-rail updates with the same easing language as the story so the signature moves consistently.