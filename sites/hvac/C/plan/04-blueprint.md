# Blueprint — hvac-C (Shadeline Heating & Cooling)

## Round 2
Elevate photo + motion: every plate is now a duotone frame (amber-washed sunlit side, navy colour-graded shaded side, halftone screen, a hot seam line) whose seam angle is its own hour leaning with its band; real library photos are still blocked (manifest is placeholder-only), so the drawn plates are the deliberate treatment. Motion: each band scrubs its own --local while in view, the header clock is piecewise-anchored to the band hours (05:00 on 05:00, 14:00 on 14:00) and the desktop header stays pinned with an amber sun track filling 05:00→23:00; plates open with a diagonal seam wipe instead of a fade; generic fades cut from 23 to 10; the sorter verdict card is now a seam frame that swings toward Replace (animated --score). Fixes: 390 hero plate starts under the header (units whole), 10:00 bottom padding removed, 14:00 reads Problem+plate left / Fix right with a ruled checklist, open-now commas, 10:00 chip names the coil rinse as part of the storm check.

## Round 1
Elevate: photo + motion. Every plate is now a hand-drawn SVG of its own subject (condensers, kneeling tech, coil rinse, stucco house with rooftop unit, dusk rooftops, drain line under a dust wall) under a seam grade at its hour's angle (warm sunlit / cool shaded). One scroll-driven `--sw-hour` now drives every band seam, every plate sun and grade, the header sun-clock and the footer horizon sun (static noon under reduced motion). 18:00 band re-cut as a "dial" (giant hour numeral + portrait plate), footer is a horizon rule with hour ticks and today's hours. Copy-1 applied in full; Vegas alts overridden per slot; nested open-now spans removed; chips squared to 2px; Problem/Fix labels without middle dots; reviews column widened.

## Open issues
- Media: the hvac niche library has only placeholder files (manifest `placeholder: true` on all 12). Real photography is blocked on media curation, not on build. Alts describe the SVG plates now drawn under each slot, so they are true on screen today and stay true once real frames land.


## Section list

### 1. Hero — t-deep
- **Purpose:** first 5 seconds: trade + town + act + proof; establish shade-line signature.
- **Layout:** diagonal-split hero (family 11). Angled seam from top-left to bottom-right splits viewport: sunlit top-left shows rooftop package unit under hard light; shaded bottom-right holds headline "115°" in Antonio, kicker "{{biz.city}} {{biz.tradeLabel}}" in mono, primary "Call now" (`tel:{{biz.phoneE164}}`), secondary "Text us" (`sms:{{biz.phoneE164}}`). Proof line below CTA: "22 years · {{biz.areas[0]}}–{{biz.areas[2]}} · 4.9 Sample rating". Seam angle matches shade-line signature.
- **Media slot:** `hero` (rooftop package unit under hard sun).
- **Hooks:** `data-sw-signature="shade-line"` (intro sweep), `data-hook="open-now"`.
- **Entrance:** shade line sweeps diagonally 900ms revealing photo beneath; text rises staggered on shaded side.
- **Tone note:** deep band with paper text; signal #D97706 for "115°" numerals only (large text ≥3:1).

### 2. Hour Band: 5 AM Rooftop Work — t-paper
- **Purpose:** objection "nobody can come today" → early-morning scheduling proof.
- **Layout:** diagonal split band. Sunlit left: "5:45 AM · on the roof before the sun is." Shaded right: crew photo on ladder from behind, caption "Rooftop package unit replacement, Glendale". Mono hour stamp "05:00" top-left.
- **Media slot:** `story-1` (tech on roof ladder from behind, dawn shadow).
- **Hooks:** `data-hook="shade-hour"` (advances --sw-hour).
- **Entrance:** text rises; image unclips.

### 3. Hour Band: 10 AM Coil Rinse — t-mid
- **Purpose:** objection "they'll sell me a new system" → maintenance-first proof.
- **Layout:** diagonal split reversed (shaded left, sunlit right). Left: condenser coil rinse photo. Right: "After the haboob, the coil needs a rinse, not a replacement." Sample price chip "$129–$219 Monsoon storm check (Sample pricing)".
- **Media slot:** `story-2` (condenser coil rinse).
- **Hooks:** `data-hook="shade-hour"`.
- **Entrance:** image unclips; text rises.

### 4. Tool: Repair or Replace Sorter — t-paper
- **Purpose:** objection "is it worth repairing a 15-year-old AC?" → interactive sorter.
- **Layout:** centered card stack. Inputs: system age, repair quote band, refrigerant type, repairs in 2 years. Output: verdict pill + reason. Hand-off button "Get a second opinion" pre-fills quote form.
- **Hooks:** `data-hook="compare"`, `data-hook="form-prefill"`.
- **Entrance:** card rises; no animation on output (quiet section).

### 5. Break: Full-Bleed Photo — t-deep
- **Purpose:** visual pause; reinforce desert light.
- **Layout:** full-bleed photo, 21:9 crop, no text. Shade line overlays as a subtle diagonal rule.
- **Media slot:** `break` (monsoon dust wall or lightning at dusk).
- **Hooks:** none (pure break).
- **Entrance:** image unclips.

### 6. Hour Band: 2 PM Peak Call — t-accent
- **Purpose:** objection "it's 112 and I'm panicking" → hot-day plan + emergency response.
- **Layout:** diagonal split. Sunlit left: "2:00 PM · 115° outside, 86° inside." Shaded right: hot-day plan excerpt (close blinds, check breaker, fan-only to thaw). Button "Print the hot-day plan".
- **Media slot:** `story-3` (heat haze over desert rooftops).
- **Hooks:** `data-hook="shade-hour"`, `data-hook="hot-day-plan"`.
- **Entrance:** text rises; image unclips.

### 7. Services Grid — t-paper
- **Purpose:** all services from facts; sample prices where available.
- **Layout:** 3-column grid (desktop), 2-col tablet, 1-col mobile. Each card: service name, blurb, sample price range if in facts.prices. Cards use shaded-half styling (left border accent).
- **Content tokens:** `{{services.*.name}}`, `{{services.*.blurb}}`, `{{proof.prices.*}}` with Sample tag.
- **Hooks:** none.
- **Entrance:** staggered card rise (60ms stagger).

### 8. Hour Band: 6 PM Monsoon Check — t-mid
- **Purpose:** seasonal relevance; tool hand-off.
- **Layout:** diagonal split. Left: monsoon checklist excerpt (rinse, reset, drain). Right: lightning/dust photo. Button "Book a post-storm check" pre-fills form.
- **Media slot:** `story-4` (monsoon dust storm or lightning).
- **Hooks:** `data-hook="shade-hour"`, `data-hook="checklist"`.
- **Entrance:** image unclips; text rises.

### 9. Proof / Reviews — t-paper
- **Purpose:** trust; social proof with Sample label.
- **Layout:** shaded review cards (left half of each card is accent strip with star rating; right half is quote + name + town + service). Sample-rating chip top-right. Three reviews from facts.proof.reviews.
- **Hooks:** none.
- **Entrance:** card rise stagger.

### 10. ZIP Checker + Service Area — t-deep
- **Purpose:** objection "is this a real local company?" → confirm coverage.
- **Layout:** centered input + result. Input: ZIP code. Output: "We serve {{biz.city}}, {{biz.areas[0]}}, {{biz.areas[1]}}…" or "Sorry, we don't cover that ZIP." Areas listed below as pills.
- **Hooks:** `data-hook="zip"`.
- **Entrance:** text rises.

### 11. Quote Form — t-paper
- **Purpose:** primary conversion; multi-step.
- **Layout:** single column, max-width 640px. Steps: symptom → system type → best time → contact. Microcopy under button: "We'll call you back to set up a visit." Hours beside phone: `{{hours|today}}`.
- **Hooks:** `data-hook="form"`, id="contact".
- **Entrance:** form rises; no animation on step change (View Transitions optional).

### 12. Footer — t-deep
- **Purpose:** disclaimer, credits, secondary nav.
- **Layout:** horizon rule (shade line flattened to horizontal). Left: "{{demo.disclaimer}}". Center: "[[credits]]". Right: phone + email + hours. Nav anchors: Services, Area, Reviews, Price it.
- **Hooks:** none.
- **Entrance:** none (static).

## Rhythm check

- Tones: deep → paper → mid → paper → deep → accent → paper → mid → paper → deep → paper → deep. No two dark touching. No three same in a row. At least one dark (deep), one color (accent), one break.
- Layout families: type-mask, diagonal-split, centered-card, full-bleed, grid, input-form, horizon-footer. ≥3 families, no neighbours alike.
- Hooks: data-sw-signature (hero), data-hook="compare", data-hook="zip", data-hook="form", data-hook="checklist", data-hook="shade-hour". ≥3 interactive hooks including signature.
- Content: all services present, ZIP checker, hours/open-now, sample reviews with Sample label, sample prices via proof.prices, footer with disclaimer and credits.
## Round 0 (fix)
Rebuilt the page around a real Shade Line: every hour band (05:00, 10:00, 14:00, reviews, 18:00) is now split into a sunlit "problem" zone and a shaded "fix" panel whose diagonal edge is a clip-path driven by `--local`, scrubbed per band on scroll (elevate: layout + motion); the header/hero sun clock and footer horizon sun track page progress as the hour.
Fixes: tone classes now paint their backgrounds; `scroll-behavior: smooth` removed (it stalled reveals in capture); form steps follow the kit's `hidden` instead of a dead `.is-active` rule; ZIP is a real form; sorter has working logic; placeholder photo stubs are hidden (`img[src*="placeholder-"]`) over designed sky/sun/roofline plates per hour, so a missing photo reads as art, not a broken box. Services became a timetable list; hours table added to Area.
