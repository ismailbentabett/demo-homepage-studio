# Blueprint — mason-B (Flemish Bond Masonry)

## Round 1
- **Layout elevate:** Services grid now alternates stretcher service tiles with header price-range tiles in Flemish-bond rhythm, breaking the flat auto-fill monotony. Price tiles use `svc-price` class with mono range + sample tag.
- **Photo elevate:** Added consistent duotone frame treatment (`::after` overlay with mix-blend-mode multiply on `.bond-tile img`) to unify placeholder visual language.
- **Should-fix:** Trust band gets sr-only h2. Credits `<a>` converted to `<span>`. Hero alt text overridden via inline `alt` attribute. Elevation hotspots now scroll-driven via existing GSAP timeline (verified code already implements sequential lighting; added `data-hotspot-seq` attribute for clarity).

Rhythm: 10 sections. Tone sequence: deep → paper → mid → paper → deep → accent(rule) → paper → mid → paper → deep. No two darks touch. One full-bleed break. Three interactive hooks + signature.

## 1. hero · t-deep · sec-loose
- **Purpose:** first 5s: trade + city + proof + CTA; contractor wow via mosaic grid.
- **Layout:** family 8 photo mosaic (Flemish bond). Headline in one dark stretcher tile. Proof line under headline. Two CTAs: [[call]] + [[quote Front repointing]].
- **Content tokens:** `{{biz.tradeLabel}}`, `{{biz.city}}`, `{{proof.rating}}`, `{{proof.reviewCount}}`, `{{proof.label}}`.
- **Media slots:** hero mosaic uses keys `hero-B1` (stretcher), `detail-joint-concave` (stretcher), `detail-marble-step` (header), `material-lime` (header), `detail-formstone` (header), headline tile (no image).
- **Hooks:** `data-sw-signature` on `.bond-grid`, `data-reveal-stagger` on tiles.
- **Entrance:** tiles unclip bottom-up, headline rises.

## 2. trust-band · t-paper · sec-tight
- **Purpose:** answer "can I trust them?" with sample stats + guarantee.
- **Layout:** bond grid row: 3 header tiles (rating, reviews, years) + 1 stretcher (guarantee text).
- **Content:** `{{proof.rating}}`, `{{proof.reviewCount}}`, `{{proof.years}}`, `{{proof.guarantee}}`. All carry `[[sample rating]]` / `[[sample review]]` tags.
- **Hooks:** `data-count` on numbers.
- **Entrance:** text rises, numbers count.

## 3. mortar-match-tool · t-mid · sec-normal
- **Purpose:** objection "patch will be wrong color" → interactive proof.
- **Layout:** split: left = controls (brick swatch, mortar color, joint profile); right = live CSS brick panel.
- **Tool:** mortar-match. Inputs: 6 swatches, 3 mortar colors, 4 profiles. Output: rendered panel + "three test samples" line. Hand-off: [[quote Mortar analysis]].
- **Hooks:** `data-match` (custom in app.js), `data-reveal`.
- **Entrance:** panel fades in on first interaction; static fallback shows default panel.

## 4. services-intro · t-paper · sec-normal
- **Purpose:** list all services from facts; each pre-fills quote form.
- **Layout:** bond grid: each service is a stretcher tile; lintels/arches and marble steps get paired header tiles with sample price ranges from `{{proof.prices.*}}`.
- **Content:** `<!-- each services -->` repeater. Price ranges labelled `[[sample pricing]]`.
- **Hooks:** `data-service` on each [[quote]] button.
- **Entrance:** staggered tile unclip.

## 5. facade-elevation-story · t-deep · sec-loose
- **Purpose:** objection "money pit / what needs work?" → visual diagnosis.
- **Layout:** pinned story (≥ 640px). Rowhouse elevation with 5 hotspots: parapet, lintels, front joints, marble steps, formstone. Each hotspot lights with fix + sample price. Under 640px: stacked cards with clip reveal.
- **Media:** `home-baltimore` as base elevation. Hotspot icons are SVG.
- **Hooks:** `data-hotspots` (kit), `data-sw-signature` reuse (grid overlay on elevation).
- **Entrance:** hotspots light in scroll order; reduced motion = all labels visible.

## 6. cta-band · t-accent · sec-tight
- **Purpose:** primary conversion nudge after proof.
- **Layout:** single centered statement + [[call]] button. Height ≤ 200px. This is a RULE band, not body text (signal red fails 4.5 on soot for body).
- **Content:** "Send us a photo of the front." + phone.
- **Hooks:** none (quiet section).
- **Entrance:** none (static).

## 7. formstone-tool · t-paper · sec-normal
- **Purpose:** Baltimore-specific objection "what's under the formstone?".
- **Layout:** checklist tool left, recommendation card right.
- **Tool:** formstone-checklist (`data-checklist="formstone"`). Outputs keep/patch/remove + sample range. Hand-off: [[quote Formstone]].
- **Media:** `detail-formstone` as small frame beside output.
- **Hooks:** `data-checklist`, `data-reveal`.
- **Entrance:** result card slides in.

## 8. facade-estimator · t-mid · sec-normal
- **Purpose:** objection "how much?" → sample range before call.
- **Layout:** estimator tool. Inputs: width slider, stories radio, joint-share select. Output: sq ft + sample range from `{{proof.prices.0}}`, labelled Sample. Printable sheet via `@media print`.
- **Hooks:** `data-estimator="facade"`, `data-est-sketch` (SVG sketch of facade).
- **Entrance:** sketch draws on input change.

## 9. reviews · t-paper · sec-normal
- **Purpose:** social proof.
- **Layout:** bond grid: 3 stretcher tiles, each a review. Header tiles carry star count. All tagged `[[sample review]]`.
- **Content:** `<!-- each proof.reviews 0:3 -->`. Author = `{{.name}}, {{.town}}`.
- **Hooks:** `data-reveal-stagger`.
- **Entrance:** tiles unclip in sequence.

## 10. footer · t-deep · sec-tight
- **Purpose:** disclaimer, credits, area list, hours.
- **Layout:** bond grid footer: one stretcher (disclaimer + credits + areas), one header (FB initials as maker's mark + open-now).
- **Content:** `{{demo.disclaimer}}`, `[[credits]]`, `{{biz.areas|list}}`, `{{hours|today}}`, `[[tel]]`.
- **Hooks:** `data-open-now`.
- **Entrance:** static.

## Full-bleed break
The facade-elevation-story (section 5) uses `home-baltimore` as a full-bleed background behind the pinned elevation at ≥ 1100px, satisfying the `.break` requirement. At smaller viewports it becomes stacked cards without the bleed.

## Interactive hooks (≥ 3)
1. `data-sw-signature` (hero + elevation overlay)
2. `data-match` (mortar match tool)
3. `data-checklist` (formstone tool)
4. `data-estimator` (facade estimator)
5. `data-hotspots` (elevation story)
6. `data-zip` (in mobile bar or trust band)
7. `form[data-lead]` (quote form)

## Required content check
- Services: section 4 (all 9 from facts)
- Service area + ZIP: trust band includes ZIP checker widget
- Hours / open-now: footer header tile
- Sample reviews: section 9
- Sample prices: estimator + service cards
- Footer disclaimer + credits: section 10