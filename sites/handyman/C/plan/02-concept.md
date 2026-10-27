# Concept — handyman-C

## Three alternatives, then rejected

1. **A map of Louisville with pins for each neighborhood.** Rejected: every local service site does a map; it is a template move and says nothing about house types or fixes.
2. **A gallery of before/after porch repairs.** Rejected: DEMO-RULES forbids before/after with unrelated stock; also generic and not neighborhood-specific.
3. **A timeline of Derby prep from March to May.** Rejected: too seasonal; the site must work year-round, and a timeline is direction A's process axis.

## The thesis

The page is a walk through Louisville's neighborhoods: each section is a stop on the walk, marked by a street sign that names the neighborhood and its house type, with the small fixes that house needs. The walk ends at a front porch with a Derby-ready checklist.

## The signature system

**Street Sign Marker.** A vertical post with a hanging blade sign. The blade carries the neighborhood name in Aleo slab serif and the house type in DM Mono below it. Brass accent border on the blade. Appears in: hero (first stop), Old Louisville section, Germantown section, Highlands section, Crescent Hill section, and the footer (final stop). The marker organizes content by place, not by service category. `data-sw-signature` hook on every marker.

## Type

- Display: **Aleo** (slab serif, old-sign character). Headlines and street-sign blades.
- Text: **Figtree** (humanist sans, warm). Body copy, cards, form labels.
- Accent: **DM Mono**. House types on signs, hour bands, prices, tool outputs.

Pair rationale: Aleo's slab weight reads like carved wood or cast iron on a street sign; Figtree is legible at small sizes on cream paper; DM Mono gives numbers and labels a utilitarian tag feel. None used by siblings A (Fraunces/JetBrains Mono) or B (Barlow Condensed/Inter).

## Palette

Family: **Bourbon Barrel + Porch Light + Brick**

| Role | Hex | Name |
|---|---|---|
| Deep (ink bg) | #2A1F1A | Bourbon Barrel |
| Paper (cream) | #F2E8D5 | Porch Light |
| Accent | #4A9B8E | Teal |
| Signal | #A6372E | Brick |
| Muted ink | #5C4A3A | Weathered Wood |

Contrast checks:
- Paper on Deep: 12.8:1 (body text)
- Brass on Deep: 5.4:1 (accent text, large)
- Brick on Paper: 5.1:1 (signal buttons, body)
- Deep on Paper: 12.8:1 (headings on light sections)

Tone lead: dark-led. Hero and alternating sections use t-deep; reviews use t-paper; one t-accent band for the Derby checklist.

## Hero family

**5 — Offset framed photo.** A photo of a shotgun-house porch (hero-C1) framed off-center like a picture hung slightly low on a plaster wall. Headline beside it, overlapping the frame edge. Frame has a thin brass border matching the palette. On mobile, the photo stacks above the headline, still framed.

## Motion

- **Intro:** The framed hero photo swings ±3° and settles like a picture on a nail. Duration 1.0s, ease-out. Text is readable at 0ms (no mask, no delay). Reduced motion: photo is static, already settled.
- **Scroll story:** A dotted walking path (SVG, brass color) draws down the page between neighborhood stops, driven by `--sw-p`. Each street-sign marker flips up (rotateX -90° → 0°) when the path reaches it. Pinned only ≥640px; on mobile, markers are static and fully visible. Story height: calc(4 × 55svh + 100svh) for four stops.
- **Entrances:** Text rises (translateY 24px→0, opacity 0→1, 500ms). Images unclip (clip-path inset). Signs flip. Three distinct patterns.
- **Hover:** Brass underline grows from left via scaleX on links and buttons. Consistent across all tones.
- **Reduced motion:** Everything visible, no animation, path fully drawn, signs upright.

## Tools

1. **Derby-ready checklist** (seasonal checklist). Inputs: tick items (porch boards, rail spindles, screen door closer, paint touch-ups, gutter clear, fan check). Output: hour band ("3–5 hours") and which visit fits ("half day"). Hand-off: pre-fills #contact form with "Porch repair" + checked items as notes.
2. **Fix-or-specialist triage** (for old houses). Inputs: pick a symptom (soft floor, no power, gas smell, structural crack, leak). Output: "handyman can fix this" / "needs a licensed electrician" / "needs a structural engineer first". Plain words. Hand-off: if handyman, pre-fills form with the item.
3. **Price by job** (from facts.proof.prices). A table of sample prices per common job, labelled Sample. No estimator widget needed; the table is the tool. Hand-off: "Book this" button per row scrolls to #contact with data-service.
4. **ZIP checker** + **multi-step quote form** (required).

## Voice

Three sentences in the site's voice:
- "Your shotgun house was built in 1890. We know what creaks."
- "Half a day, your list done, the porch ready for Saturday."
- "If it needs a licensed trade, we tell you before we start."

Five words never used: guaranteed, best, affordable, expert, professional.