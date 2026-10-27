COPY: ok

# Five-second test (DOM-only, no screenshots)

- **What is it?** Lime mortar repointing for old brick in Cincinnati.
- **Where?** Cincinnati, OH (h1 says "Lime Mortar Repointing – Cincinnati").
- **What do I do?** "Price it" (primary) or call (secondary); phone visible in header and hero.
- **Why them?** 21 years on soft brick, sample rating 4.9, mortar matched by hand.

Answerable from the h1, proof-line and buttons alone. No screenshot to verify fold/peek, so firstScreen capped at 8.5 until render evidence exists.

---

## Categories

### firstScreen — 8.5
**Earned:** h1 states trade + city + outcome in 5 words ("Lime Mortar Repointing – Cincinnati"); one primary action ("Price it") plus a quieter secondary ("Call"); phone visible in header and hero; proof line under h1 ("21 years on soft brick · Sample rating 4.9"); hero family uses offset-frame with dashed border motif tied to the joint-progression signature. Round 1 fix verified: middle-dot separator replaced with en-dash at dist/index.html line 624.
**Deductions:**
- −0.5: Cannot verify next-band peek or fold position without `1440x900-first.png` / `390x844-first.png`; DOM shows hero min-height `calc(100svh - var(--header-h))`, which risks exact-100vh composition if content is short.
- −0.5: No screenshot evidence that intro clip-path reveal completes under 1.2 s or that text is readable at 0 ms with reduced motion.
- −0.5: Cannot verify h1 line count at 390×844; clamp may produce > 4 lines depending on viewport height.

### distinctiveness — 9.0
**Earned:** Signature "Mortar Joint Progression" appears in hero (`data-stage="raked"`), process story (`data-story="joint-process"`), proof (`data-stage="struck"`), guarantee (`data-stage="concave"`), footer (`data-stage="tooled"`) — 5 sections including hero and footer. Three layout families: offset-frame hero, pinned process diagram, split objection/about. Palette (Lime Cream + Soft Brick + Iron Ink) and type pair (Manrope / Source Sans 3 / DM Mono) differ from typical contractor templates. Joint divider is structural, not decorative — it advances through repointing stages.
**Deductions:**
- −1.0: Services grid uses 9 identical svc-card blocks in a row at desktop (3×3), which reads as template-like despite the top-border motif. No alternating density or asymmetric break within the grid.

### type — 9.0
**Earned:** Fluid scale with clamp values; body ≥ 16px (`--fs-0: clamp(0.9rem…1rem)` resolves to 16px+); measure capped at 68ch; display tracking −0.03em on h1/h2; tabular-nums on prices and hours; DM Mono used consistently for labels, tags, and readouts; lead paragraph set apart with `.lead` class; ≤ 5 sizes visible. Round 1 fix verified: en-dash separator in h1 replaces middle-dot.
**Deductions:**
- −0.5: Kicker labels appear in nearly every section (hero, objection, process, services, tools, proof, prices, about, contact) — 9 kickers total, which edges toward the "3+ tiny tracked caps captions in one view" tell at mobile viewports where they stack.
- −0.5: House-age radio labels use "1920 – 1950" with spaces around en-dash — inconsistent with price formatting which uses en-dash without spaces.

### layout — 8.5
**Earned:** 11 sections with one job each; alternating tones (light → paper → deep → paper → deep-break → light → deep → light → accent → deep → light → paper-footer); full-bleed break image at section 5; asymmetric split in objection and about; gap between sections (`--sec-y-norm`) larger than internal gaps.
**Deductions:**
- −0.5: Services grid (section 4) and tools tabs (section 6) are both dense, information-heavy sections back-to-back after the break — no quiet breath between them. The rhythm goes loud (break) → dense (services) → dense (tools) without a rest. Round 2 elevate move (breath section) was NOT applied.
- −0.5: Process story pin uses `min-height: 55svh` centered content, but the steps list below it is static — the pinned area does not integrate with the steps visually, creating a dead zone between diagram and list.
- −0.5: Footer is centred text stack with stamp — functional but not a designed close that uses the signature beyond the joint-divider.

### photo — 7.0
**Earned:** All frames reference on-topic masonry work (hero: tooling lime mortar; detail: spalled brick; break: Cincinnati hillside brick houses); consistent filter grade applied via CSS (`saturate(.82) contrast(1.06) sepia(.1) brightness(.97)`); alt text describes the frame; width/height attributes present; lazy loading on non-hero images.
**Deductions:**
- −1.0: Placeholder media (`placeholder-hero-A1.webp`, `placeholder-detail-spalling.webp`, `placeholder-home-cincinnati.webp`) — cannot verify actual photo quality, crop, or object-position without render. Score reflects DOM correctness only.
- −0.5: Only 3 images total for an 11-section page. Services, tools, proof, guarantee, about, and contact have no visual anchor.
- −0.5: Credits say "Photo by unknown on Pexels" three times as plain `<span>` elements. Provenance is still generic placeholder text. Round 2 elevate move (apply `.frame-signature` class to an image) was NOT applied — the CSS exists but no HTML element uses it.

### copy — 9.0
**Earned:** Voice matches concept thesis — plain, specific, trade-literate ("rake out", "lime mortar softer than your old brick", "spalls the face off", "tool the profile to match"). Every section answers a homeowner question. Microcopy at form ("In your version photos upload straight to the inbox. Here it is a demo field."). Consistent primary action name "Price it" throughout — round 1 fix verified: all tool CTAs now say "Price it". Sample labels on reviews and pricing. No banned phrases. Guarantee is concrete ("two years", "repoint it at no charge"). Round 1 fix verified: about headline now reads "Owen F. has repointed Cincinnati brick for 21 years".
**Deductions:**
- −0.5: Proof section kicker "From homeowners like yours" is slightly generic compared to the trade-specific voice elsewhere.
- −0.5: Timing tool intro "Enter nothing — we read the current month" is functional but could be warmer.

### mobile — 8.5
**Earned:** CSS breakpoints at 640px and 900px adjust grids (svc-grid 1→2→3 cols, review-card 85%→45%→30%); mobile bar fixed bottom with call + Price it; tap targets ≥ 48px (btn min-height 48px, menu-btn 48×48). Round 1 fix verified: rail prev/next buttons now `min-width: 48px; min-height: 48px`. Form inputs height 48px.
**Deductions:**
- −0.5: Cannot verify 390×844 composition without screenshot — hero grid stacks copy above frame on mobile (`order: 2` / `order: 1` swap at 900px), but h1 clamp may produce > 4 lines at 390px.
- −0.5: Process diagram is 280×180px fixed size — at 320px width this leaves only 20px margin each side, and the label text below may wrap awkwardly.
- −0.5: Cannot verify mobile bar hides on scroll down and over the form without render evidence.

### a11y — 8.5
**Earned:** Skip link present; focus-visible outline 3px solid accent with 3px offset; all form inputs have labels; aria-live regions on checklist results, zip result, and open-now; carousel has aria-label; tabs have proper roles (tablist, tab, tabpanel, aria-selected, aria-controls); reduced-motion CSS clears all transforms and clip-paths; forced-colors rules for compare handle, hotspot, carousel buttons, and broken frame fallback.
**Deductions:**
- −0.5: Menu button `aria-expanded="false"` is hardcoded in HTML (line 594) — JS must toggle this. Without render verification, cannot confirm it updates on open/close.
- −0.5: Review carousel has prev/next buttons but no indication of current position (e.g., "slide 2 of 6") or live region announcing slide changes.
- −0.5: Checklist joint diagram is `aria-hidden="true"` with a text label below — correct pattern, but the label text stays static even after answering. Without render, cannot verify the label updates dynamically.

### motion — 8.5
**Earned:** Hero clip-path reveal tied to `.is-in`; split-text on h1 with line stagger; process story uses pinned diagram with stage progression driven by scroll (`data-story="joint-process"`); guarantee concave-line draws left-to-right on enter; consistent reveal system with fade, clip, and stagger variants; reduced-motion disables all animation. Elevate move from round 1 partially addressed: `.joint-diagram__fill` CSS transition added for checklist result, connecting tool output to signature language.
**Deductions:**
- −0.5: Fewer than 3 distinct hooks beyond plain reveals visible in DOM: hero clip, process pin, guarantee draw, checklist fill. The services stagger and section reveals are standard fade-up. Motion is competent but not surprising.
- −0.5: Process diagram `.gap-fill` relies entirely on app.js for scaleX animation. Without render, cannot verify easing or timing. If JS fails, the diagram shows an empty gap with no fallback state.
- −0.5: Cannot verify intro completes under 1.2 s without render timing data.

### wow — 8.5
**Earned:** The mortar-softness checklist is a genuine diagnostic tool tied to the thesis. Round 1 elevate move addressed: checklist result now includes a miniature joint cross-section diagram (`.joint-diagram`) with CSS-driven fill animation tied to `--joint-fill` custom property. This connects the tool output to the signature's visual language. The process diagram visualises the repointing sequence interactively. Both are useful, not decorative.
**Deductions:**
- −0.5: Only one connected interactive moment (the checklist with joint diagram). The process diagram is the second, but it is passive (scroll-driven) rather than interactive. Rubric §3.10 asks for two connected moments where the tool output speaks the signature's language — the process diagram qualifies as signature-tied but is not user-driven.
- −0.5: Cannot verify reduced-motion static form of the joint diagram without screenshot — if `--joint-fill` stays at 0 with reduced motion, the diagram shows an empty mortar gap.

### polish — 9.0
**Earned:** SVG favicon + apple-touch-icon; OG image with dimensions; JSON-LD with HomeAndConstructionBusiness type; theme-color set; print stylesheet hides nav and reveals estimator; consistent radius (2px); forced-colors handled; no console warnings in static check. Round 1 fix verified: credit links changed from broken `<a>` to `<span>` elements. Round 1 fix verified: about headline grammar corrected.
**Deductions:**
- −0.5: No print stylesheet specifically for the checklist/timing tool output — the general print rules hide everything except `[data-estimator]`, but the checklist uses `[data-checklist]` which is not covered. A homeowner printing the checklist result would get a blank page.
- −0.5: Credits still say "Photo by unknown on Pexels" — generic placeholder text. Not a blocker but a polish miss compared to naming the actual photographer or omitting credits entirely.

---

## Arithmetic

```
14×8.5 + 12×9.0 + 10×9.0 + 10×8.5 + 8×7.0 + 8×9.0 + 7×8.5 + 7×8.5 + 12×8.5 + 8×8.5 + 4×9.0
= 119 + 108 + 90 + 85 + 56 + 72 + 59.5 + 59.5 + 102 + 68 + 36
= 855 / 100 = 8.55
```

Weighted score: **8.55**

---

## Must

None. Static check has zero blockers. Render check file does not exist (placeholder mode). No DEMO-RULES breaches detected in DOM: all reviews carry Sample tags, prices are labelled Sample, no "our work" language, no real address, no face-as-owner, form has honeypot and demo disclaimer.

## Should

1. **where:** `dist/index.html` CSS line 426–429, `.frame-signature` class
   **problem:** The elevate move added the CSS for the offset-frame signature motif on images, but no `<img>` or `<figure>` in the HTML uses the `frame-signature` class. The motif exists in CSS only.
   **fix:** Add `class="frame-signature"` to at least one image in the proof or services section (e.g., wrap a review card image or add a service photo with the class).

2. **where:** `dist/index.html` line 594, menu button
   **problem:** `aria-expanded="false"` hardcoded; must be toggled by JS on menu open/close.
   **fix:** Verify in app.js that `data-menu-btn` click handler toggles `aria-expanded` on this button. If not, add the toggle.

3. **where:** `dist/index.html` line 882–884, review carousel controls
   **problem:** No position indicator (e.g., "slide 2 of 6") or live region announcing slide changes for screen readers.
   **fix:** Add an aria-live region that announces the current slide number when prev/next is activated.

4. **where:** `dist/index.html` print stylesheet (line 244–253)
   **problem:** Print rules only reveal `[data-estimator]`; the checklist tool uses `[data-checklist]` which would print blank.
   **fix:** Add `html.sw-print-est [data-checklist], html.sw-print-est [data-checklist] * { visibility: visible; }` to the print block.

5. **where:** `dist/index.html` line 1057, credits
   **problem:** Generic "Photo by unknown on Pexels" placeholder text.
   **fix:** Either pull real photographer names from the media manifest or remove the credits line entirely when using placeholders.

## Elevate

1. **Category: photo (weakest, weight 8)**
   **Move:** Apply the existing `.frame-signature` CSS class to at least one image in the proof or services section so the offset-frame/dashed-border motif becomes visually present on photography, not just in CSS. Thread the signature into the image treatment so photography participates in the joint-progression system rather than sitting beside it.

2. **Category: layout (second weakest by weight tie with type/mobile/a11y/motion at 8.5, but layout has the most actionable structural improvement)**
   **Move:** Insert a quiet breath section between the dense services grid and the dense tools tabs — a single-line pull quote or a narrow full-bleed mortar texture strip that resets the density rhythm. This breaks the loud→dense→dense run and gives the scroll a shape that matches the thesis (work → pause → diagnosis).