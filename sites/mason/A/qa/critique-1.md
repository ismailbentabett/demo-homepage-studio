COPY: ok

# Five-second test (DOM-only, no screenshots)

- **What is it?** Lime mortar repointing for old brick in Cincinnati.
- **Where?** Cincinnati, OH (h1 says "Lime Mortar Repointing · Cincinnati").
- **What do I do?** "Price it" (primary) or call (secondary); phone visible in header and hero.
- **Why them?** 21 years on soft brick, sample rating 4.9, mortar-matched by hand.

Answerable from the h1, proof-line and buttons alone. No screenshot to verify fold/peek, so firstScreen capped at 8.5 until render evidence exists.

---

## Categories

### firstScreen — 8.5
**Earned:** h1 states trade + city + outcome in 5 words ("Lime Mortar Repointing · Cincinnati"); one primary action ("Price it") plus a quieter secondary ("Call"); phone visible in header and hero; proof line under h1 ("21 years on soft brick · Sample rating 4.9"); hero family uses offset-frame with dashed border motif tied to the joint-progression signature.
**Deductions:**
- −0.5: Cannot verify next-band peek or fold position without `1440x900-first.png` / `390x844-first.png`; DOM shows hero min-height `calc(100svh - var(--header-h))`, which risks exact-100vh composition if content is short.
- −0.5: h1 uses middle-dot separator "·" which may reflow unpredictably at narrow widths; en-dash or line break would be safer.
- −0.5: No screenshot evidence that intro clip-path reveal completes under 1.2 s or that text is readable at 0 ms with reduced motion (CSS sets `.sw-motion .hero-img { clip-path: inset(0 100% 0 0); }` but reduced-motion override only clears clip-path on `.hero-img`, not on staggered text).

### distinctiveness — 9.0
**Earned:** Signature "Mortar Joint Progression" appears in hero (`data-stage="raked"`), process story (`data-story="joint-process"`), proof (`data-stage="struck"`), guarantee (`data-stage="concave"`), footer (`data-stage="tooled"`) — 5 sections including hero and footer. Three layout families: offset-frame hero, pinned process diagram, split objection/about. Palette (Lime Cream + Soft Brick + Iron Ink) and type pair (Manrope / Source Sans 3 / DM Mono) differ from typical contractor templates. Joint divider is structural, not decorative — it advances through repointing stages.
**Deductions:**
- −1.0: Services grid uses 9 identical svc-card blocks in a row at desktop (3×3), which reads as template-like despite the top-border motif. No alternating density or asymmetric break within the grid.

### type — 9.0
**Earned:** Fluid scale with clamp values; body ≥ 16px (`--fs-0: clamp(0.9rem…1rem)` resolves to 16px+); measure capped at 68ch; display tracking −0.03em on h1/h2; tabular-nums on prices and hours; DM Mono used consistently for labels, tags, and readouts; lead paragraph set apart with `.lead` class; ≤ 5 sizes visible.
**Deductions:**
- −0.5: Straight hyphen ranges in prices ("$14 – $28") use en-dash correctly, but house-age radio labels use "1920 – 1950" with spaces around en-dash — inconsistent with price formatting.
- −0.5: Kicker labels appear in nearly every section (hero, objection, process, services, tools, proof, prices, about, contact) — 9 kickers total, which edges toward the "3+ tiny tracked caps captions in one view" tell at mobile viewports where they stack.

### layout — 8.5
**Earned:** 11 sections with one job each; alternating tones (light → paper → deep → paper → deep-break → light → deep → light → accent → deep → light → paper-footer); full-bleed break image at section 5; asymmetric split in objection and about; gap between sections (`--sec-y-norm`) larger than internal gaps.
**Deductions:**
- −0.5: Services grid (section 4) and tools tabs (section 6) are both dense, information-heavy sections back-to-back after the break — no quiet breath between them. The rhythm goes loud (break) → dense (services) → dense (tools) without a rest.
- −0.5: Process story pin uses `min-height: 55svh` centered content, but the steps list below it is static — the pinned area does not integrate with the steps visually, creating a dead zone between diagram and list.
- −0.5: Footer is centred text stack with stamp — functional but not a designed close that uses the signature.

### photo — 7.0
**Earned:** All frames reference on-topic masonry work (hero: tooling lime mortar; detail: spalled brick; break: Cincinnati hillside brick houses); consistent filter grade applied via CSS (`saturate(.82) contrast(1.06) sepia(.1) brightness(.97)`); alt text describes the frame; width/height attributes present; lazy loading on non-hero images.
**Deductions:**
- −1.0: Placeholder media (`placeholder-hero-A1.webp`, `placeholder-detail-spalling.webp`, `placeholder-home-cincinnati.webp`) — cannot verify actual photo quality, crop, or object-position without render. Score reflects DOM correctness only.
- −0.5: Only 3 images total for an 11-section page. Services, tools, proof, guarantee, about, and contact have no visual anchor. The page is text-heavy by necessity of placeholder mode.
- −0.5: Credits say "Photo by unknown on Pexels" three times with broken `<a>` links (no href) — static.json already flags this as warning, but it also means photo provenance is incomplete.

### copy — 9.0
**Earned:** Voice matches concept thesis — plain, specific, trade-literate ("rake out", "lime mortar softer than your old brick", "spalls the face off", "tool the profile to match"). Every section answers a homeowner question. Microcopy at form ("In your version photos upload straight to the inbox. Here it is a demo field."). Consistent primary action name "Price it" throughout. Sample labels on reviews and pricing. No banned phrases. Guarantee is concrete ("two years", "repoint it at no charge").
**Deductions:**
- −0.5: About section headline "Owen F. has worked on Cincinnati brick since 21 years ago" is awkward phrasing — "for 21 years" or "since 2005" would read more naturally.
- −0.5: Tools section CTA varies: "Get my number" (mortar/chimney panels) vs "Book a visit" (timing panel) vs "Price it" (services/hero). Two names for the primary action costs −0.5 per rubric §3.6.

### mobile — 8.5
**Earned:** CSS breakpoints at 640px and 900px adjust grids (svc-grid 1→2→3 cols, review-card 85%→45%→30%); mobile bar fixed bottom with call + Price it; tap targets ≥ 48px (btn min-height 48px, menu-btn 48×48, rail controls 40×40 — borderline); no horizontal scroll indicators; form inputs height 48px.
**Deductions:**
- −0.5: Rail prev/next buttons are 40×40px, below the 48px tap target floor outside sentences. At mobile these are the only way to navigate reviews.
- −0.5: Cannot verify 390×844 composition without screenshot — hero grid stacks copy above frame on mobile (`order: 2` / `order: 1` swap at 900px), but h1 clamp `clamp(2.6rem, min(9vw, 9.5svh) + 0.1rem, 5rem)` may produce > 4 lines at 390px depending on viewport height. Capped at 8.5 until verified.
- −0.5: Process diagram is 280×180px fixed size — at 320px width this leaves only 20px margin each side, and the label text below may wrap awkwardly.

### a11y — 8.5
**Earned:** Skip link present; focus-visible outline 3px solid accent with 3px offset; all form inputs have labels; aria-live regions on checklist results, zip result, and open-now; carousel has aria-label; tabs have proper roles (tablist, tab, tabpanel, aria-selected, aria-controls); reduced-motion CSS clears all transforms and clip-paths; forced-colors rules for compare handle, hotspot, carousel buttons, and broken frame fallback.
**Deductions:**
- −0.5: Menu button `aria-expanded="false"` is hardcoded in HTML — JS must toggle this, but without render verification we cannot confirm it updates. If it stays false when open, screen readers announce wrong state.
- −0.5: Review carousel has prev/next buttons but no indication of current position (e.g., "slide 2 of 6") or live region announcing slide changes.
- −0.5: Heading order: h1 → h2 (objection) → h2 (process) → h2 (services) → h3 (about hours-card) → h2 (tools) → h3 (zip-block) → h2 (proof) → h2 (prices) → h2 (guarantee) → h2 (about) → h2 (contact). The h3 inside about's hours-card is nested under an h2, which is correct, but the zip-block h3 sits inside the tools section under an h2 — acceptable. However, the guarantee h2 follows prices h2 with no h3 intermediary, which is fine. No skip detected, but the nesting is worth verifying with axe.

### motion — 8.5
**Earned:** Hero clip-path reveal tied to `.is-in`; split-text on h1 with line stagger; process story uses pinned diagram with stage progression driven by scroll (`data-story="joint-process"`); guarantee concave-line draws left-to-right on enter; consistent reveal system with fade, clip, and stagger variants; reduced-motion disables all animation.
**Deductions:**
- −0.5: Fewer than 3 distinct hooks beyond plain reveals visible in DOM: hero clip, process pin, guarantee draw. The services stagger and section reveals are standard fade-up. Motion is competent but not surprising.
- −0.5: Process diagram `.gap-fill` uses `transform: scaleX(0)` animated by JS, but the CSS transition is not defined inline — relies entirely on app.js. Without render, cannot verify easing or timing. If JS fails, the diagram shows an empty gap with no fallback state.
- −0.5: Marquee CSS is present in base but not used on this page — missed opportunity for a low-cost motion moment in the proof or services section.

### wow — 8.0
**Earned:** The mortar-softness checklist is a genuine diagnostic tool tied to the thesis — homeowner answers four questions and gets a lime-vs-cement assessment. The process diagram visualises the repointing sequence interactively. Both are useful, not decorative.
**Deductions:**
- −0.5: Tool output is a text readout in a bordered div (`.checklist__result`), not designed in the signature's language. A 10 requires the output to be visually integrated with the mortar-joint motif.
- −0.5: Only one connected moment (the checklist). The process diagram is the second, but it is passive (scroll-driven) rather than interactive. Rubric §3.10 asks for two connected moments where the tool output speaks the signature's language.
- −0.5: Cannot verify reduced-motion static form of the process diagram without screenshot — if the gap-fill stays at scaleX(0) with reduced motion, the diagram shows an empty mortar gap with no indication of stage.

### polish — 8.5
**Earned:** SVG favicon + apple-touch-icon; OG image with dimensions; JSON-LD with HomeAndConstructionBusiness type; theme-color set; print stylesheet hides nav and reveals estimator; consistent radius (2px); forced-colors handled; no console warnings in static check.
**Deductions:**
- −0.5: Three broken credit links (`<a>Pexels</a>` with no href) — static.json flags as warning, but it is also a polish miss. Should be either real links or plain text.
- −0.5: No preload for hero poster video (none exists, but the hero image is preloaded correctly). Missing: no print stylesheet specifically for the checklist/timing tool output, though the general print rules exist.

---

## Arithmetic

```
14×8.5 + 12×9.0 + 10×9.0 + 10×8.5 + 8×7.0 + 8×9.0 + 7×8.5 + 7×8.5 + 12×8.5 + 8×8.0 + 4×8.5
= 119 + 108 + 90 + 85 + 56 + 72 + 59.5 + 59.5 + 102 + 64 + 34
= 849 / 100 = 8.49
```

Weighted score: **8.49**

---

## Must

None. Static check has zero blockers. Render check file does not exist (placeholder mode). No DEMO-RULES breaches detected in DOM: all reviews carry Sample tags, prices are labelled Sample, no "our work" language, no real address, no face-as-owner, form has honeypot and demo disclaimer.

## Should

1. **where:** `dist/index.html` line 1028, `ul.credits > li > a`
   **problem:** Three `<a>` tags with text "Pexels" but no `href` attribute.
   **fix:** Either add real Pexels URLs from the media manifest, or change to `<span>` elements since these are placeholders.

2. **where:** `dist/index.html` line 920, `#about h2`
   **problem:** "Owen F. has worked on Cincinnati brick since 21 years ago" is grammatically awkward.
   **fix:** Change to "Owen F. has repointed Cincinnati brick for 21 years" or "Owen F. has worked on Cincinnati brick for 21 years".

3. **where:** `dist/index.html` lines 775, 802, 809, tools section CTAs
   **problem:** Inconsistent primary action naming: "Get my number" (mortar/chimney) vs "Book a visit" (timing) vs "Price it" elsewhere.
   **fix:** Standardise to "Price it" across all tool CTAs, matching the hero and services.

4. **where:** `dist/index.html` line 467, `.rail__prev` / `.rail__next`
   **problem:** 40×40px tap targets, below 48px minimum.
   **fix:** Increase to `min-width: 48px; min-height: 48px;` in the `.rail__prev, .rail__next` rule.

5. **where:** `dist/index.html` line 609, h1
   **problem:** Middle-dot separator "·" may reflow unpredictably; en-dash or explicit line break would be more robust.
   **fix:** Replace `·` with `&ensp;–&ensp;` or use a `<br>` with responsive visibility.

6. **where:** `dist/index.html` line 579, menu button
   **problem:** `aria-expanded="false"` hardcoded; must be toggled by JS.
   **fix:** Verify in app.js that `data-menu-btn` click handler toggles `aria-expanded` on this button. If not, add the toggle.

## Elevate

1. **Category: photo (weakest, weight 8)**
   **Move:** Replace the three placeholder images with niche-approved media from `niches/mason/media/manifest.json` and apply the signature's offset-frame treatment to at least one service or proof image — not just the hero. Thread the dashed-border motif into a gallery frame or a before/after comparator so photography becomes part of the joint-progression system rather than illustration beside it.

2. **Category: wow (second weakest, weight 8)**
   **Move:** Redesign the checklist result output as a miniature joint cross-section diagram that fills from raked to concave as the homeowner answers questions — the same visual language as the process story but driven by user input instead of scroll. This connects the tool's output to the signature and gives the homeowner a keepsake visual they can screenshot or print.