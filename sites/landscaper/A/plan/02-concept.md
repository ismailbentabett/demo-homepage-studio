# Concept — landscaper-A (Tilth & Tine Landscape)

## Thesis
Charlotte lawns fail in the red clay, not in the grass. The page reads as a soil profile: scrolling down moves through depth horizons, each showing the work done at that layer so homeowners understand why surface-only fixes die.

## Signature system: Depth gauge + horizon bands
- A vertical depth gauge runs down the left edge (desktop) or top of each section (mobile): `0 in`, `2 in`, `6 in`, `12 in`, `18 in`.
- Each content band is a soil horizon with its depth tag, a wavy horizon-line divider in shifting earth tones, and the job step done at that depth.
- Footer is bedrock (deepest tone, no gauge mark).
- The gauge fills progressively on scroll (clip-path reveal tied to scroll progress).
- Used in ≥ 4 sections: hero (0 in), lawn renovation (0–2 in), soil amendment (2–6 in), drainage (12–18 in), footer (bedrock).

## Palette family: Piedmont Earth (color-led)
- **Deep:** `#3B1F12` (dark red-brown clay) — used for drainage/bedrock bands.
- **Accent:** `#C2593A` (Piedmont terracotta) — primary buttons, gauge fill, horizon lines.
- **Mid:** `#D4A76A` (warm straw) — secondary surfaces, card backgrounds.
- **Paper:** `#F5F0E8` (unbleached paper) — main text bands, form fields.
- **Green:** `#2D4A2E` (deep fescue) — success states, plant accents, checkmarks.
- Tone sequence: paper → mid → deep → paper → accent → deep (no two darks touch; color band present via accent; break between deep and paper).

## Type pair
- **Display:** Bitter (slab serif, variable wght 100–900) — headlines, depth tags, tool labels. Sturdy, stamped-tool feel. Tracking −0.02em on display sizes.
- **Text:** Karla (humanist sans, variable wght 200–800) — body, captions, form labels. Warm x-height, readable at 16px+.
- **Mono accent:** JetBrains Mono (for numbers only in estimator output, price ranges, countdown days). Not a third family per rubric §3.3 because it is listed here as accent for data.
- Scale: h1 clamp(2.5rem, 5vw, 4.5rem), h2 clamp(1.75rem, 3.5vw, 3rem), h3 1.5rem, body 1.125rem (18px), small 0.875rem. Line-height: display 0.95, body 1.6.

## Hero family: 4 — Stacked headline above cinematic strip
- Kicker: "Tilth & Tine Landscape · Matthews to Davidson" (small caps, tracked .04em, accent color).
- H1: "Charlotte Landscaping That Starts in the Soil" (3 lines max at 1440, ≤ 4 lines at 390).
- Proof line: "Sample rating 4.9 · 88 reviews · Open now until 5:30 pm" (small, green checkmark before rating, labelled Sample).
- Primary CTA: "Price it" button (accent bg, paper text). Secondary: "Call (704) 555-0116" (outline, green border).
- Strip photo below headline: ground-level cross-section of turf edge meeting red clay soil, early morning side light, muted greens and rich red-brown. Aspect ~21:9, object-position center 60%.
- Intro motion: headline settles (opacity 0→1, translateY 24→0, 500ms); strip photo lifts a soil layer away from top (clip-path inset(0 0 100% 0) → inset(0), 800ms), revealing first horizon line beneath.

## Motion language
- **Entrance pattern 1 (text):** opacity 0→1, translateY 24px→0, 500ms ease-out, trigger at 85% viewport.
- **Entrance pattern 2 (images):** clip-path inset(0 0 100% 0) → inset(0), 700ms ease-out, trigger at 85% viewport.
- **Scroll story:** Pinned from 640px up. Height calc(3 × 55svh + 100svh). Depth gauge fills as user scrolls; at each horizon the layer color washes in and a small cross-section illustration (core holes, compost, pipe) draws itself via SVG stroke-dashoffset. Reverses on scroll-up. Below 640px: stacked cards with clip reveal, no pin.
- **Hover language:** Hairline underline grows from left via scaleX(0) → scaleX(1), 250ms, accent color. Applied to all links and buttons consistently.
- **Micro-interactions:** Button press scale(0.97), 100ms. Form input focus: accent border + subtle glow. Estimator number count-up on enter.
- **Reduced motion:** All entrances instant (opacity 1, clip-path inset(0)). Scroll story becomes static complete layout with all horizons visible. Gauge fully filled. No animation waits for readability.
- **Budget compliance:** 1 intro, 1 scroll story (horizons), micro-interactions free, no popup (exit-intent only if needed later), no scroll-jack, no autoplay, no bounce.

## Tools selected (2+ per brief §5)
1. **Soil-first lawn quiz** (hero-adjacent, 0–2 in horizon). 5 questions → likely cause + matching service + NC soil test timing tip. Output styled as a soil sample card with depth tag.
2. **Overseeding window countdown** (lawn renovation section, 0–2 in). Static date logic: days until/through mid-Sept to mid-Oct window. Output includes step checklist.
3. **Project size-to-range estimator** (mid-page, paper tone). Inputs: project type dropdown + size slider. Output: sample range from facts.proof.prices, labelled "Sample pricing", with "Get my number" button prefilling #contact form.
4. **ZIP checker + multi-step quote form** (#contact, required). ZIP check yes-state shows service area confirmation + form with ZIP prefilled. No-state shows polite message + phone number.

## Section map (one job each, rhythm-compliant)
1. **Hero** (paper) — trade+city+outcome, CTAs, proof, strip photo. Depth tag: 0 in.
2. **Soil quiz** (mid) — interactive quiz, output card. Depth tag: 0–2 in.
3. **Lawn renovation** (paper) — overseeding explanation + countdown tool + sample price. Depth tag: 0–2 in. *Break after this section (full-bleed accent band).*
4. **Soil amendment** (mid) — why clay fails, compost/topdressing process photo. Depth tag: 2–6 in.
5. **Drainage** (deep) — French drain/swale explanation + sample price + process photo. Depth tag: 12–18 in.
6. **Estimator** (paper) — project size-to-range tool. No depth tag (tool zone).
7. **Garden design** (mid) — planting beds, drawn plan mention, plant picker link. Depth tag: 2–6 in (return).
8. **Reviews** (paper) — 3 review cards, all labelled Sample. No depth tag.
9. **Service area** (accent) — towns list, ZIP checker start. Color band.
10. **Contact form** (paper) — multi-step quote form. No depth tag.
11. **Footer** (deep) — bedrock. Biz info, hours, license SAMPLE-NC-LC-4471, disclaimer.

Rhythm check: paper/mid/paper/BREAK/mid/deep/paper/mid/paper/accent/paper/deep. No two darks touch. Color band present (accent). Break present. ≥ 3 layout families (stacked hero, quiz card, split process, tool panel, review grid, form). ≥ 3 data-hook attributes (quiz, countdown, estimator).

## What makes this distinct from siblings
- **vs B (Austin water/controller):** No mono readouts, no zone numbers, no water-budget hero. Warm earth palette vs bleached limestone. Slab serif vs grotesk+mono. Soil horizons vs irrigation zones.
- **vs C (Savannah shade/botanical):** No arch masks, no Latin names, no dark oak shade. Terracotta/straw vs moss gray/gold. Ground-level process vs dappled courtyard mood. Depth gauge vs plant markers.
- Cover-the-logo test: any section screenshot shows the depth gauge or horizon line = Tilth & Tine.

## Voice (3 sentences)
1. We talk about dirt before we talk about plants.
2. Numbers are samples, not promises; we say so every time.
3. If the soil is wrong, nothing else matters — and we will tell you that before you pay us.