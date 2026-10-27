## Round 5
Form wired to kit hooks (data-form-nav/back/next/submit, data-thanks-box) so there is one Next and no stray default button; elevate mobile: the quote form became a 4 day-card stepper with a film-build progress bar gaining a layer per card; elevate polish: one 2px stamped-tag system (Sample, area chips, step numbers, kicker) and 1.5px rules on the cards; stamps renumbered 00 Cover → 01 Plan → 02–04 Prep → 05 Services → 06 Older houses → 07 Reviews → 08 Area → 09 Call → 10 Done; h1 now 3 lines at 1440; process h2/note, form intro copy, guarantee column, and street sashes fixed.

# Blueprint — painter-A (Cutline Painting Co.)

## Round 4 (elevate + fix)
Photo + wow: every placeholder photo replaced by one drawn system (a Fan-rowhouse elevation symbol, coat cross-sections, a painted street break), so there's no grey frame anywhere. The Coat Schedule is now a working paper sheet (job, start day, pre-1978/wood/rain options → a weekday calendar with weekends off, film-build bar, print). Signature: each section carries one more film layer (left edge) plus a right-edge page-long stripe. Reveals vary: the h1 is split into lines, cross-sections clip in, the calendar cells stagger, the street paints house by house, and the hero cut line pulls across. Services became a ledger, the old-house check became a working kit checklist, and the 390/320 overflow and the stale placeholder render warning are fixed.

## Rhythm check
- 10 sections total.
- Tones: light → paper → deep → mid → light → accent → paper → deep → light → deep.
- No two dark sections touch (deep/mid/light/accent/paper/deep/light/deep).
- One full-bleed break (`#break`).
- One color band (`t-accent`).
- Layout families: sticky-split, stamp-grid, split-process, statement, rail, checklist, card-grid, form-stack, footer-rail. No neighbours share a family.
- Hooks: `data-sw-signature` (stripe), `data-zip`, `data-lead`, `data-open-now`, `data-checklist` (old-house), `data-estimator`. ≥3 interactive + signature.
- Single `#contact` form at end.

---

## Sections

### 1. Hero (`#hero`)
- **Tone:** `t-light`
- **Layout:** sticky-split (family 12)
- **Purpose:** Trade + city + outcome in h1; process promise; primary CTA.
- **Content:**
  - h1: "Richmond house painting that starts with the prep"
  - Proof line: "{{biz.hours.mon}}–{{biz.hours.fri}} · {{biz.areas|list}} · {{proof.rating}} ([[sample Sample rating]])"
  - Primary: `[[quote exterior btn-primary]]` "Price it"
  - Secondary: `[[call btn-secondary]]`
  - Sticky photo: `[[img hero-A1 eager]]` (cut line detail)
  - Scrolling statements (right column): "Wash. Scrape. Prime." / "Then two coats." / "Then we leave."
- **Signature:** stripe starts at 0 opacity; `data-sw-signature` initializes `--sw-p: 0`.
- **Hook:** `data-split="lines"` on h1 for tape-pull reveal.
- **Entrance:** text rises, photo unclip.

### 2. Coat Schedule Tool (`#schedule`)
- **Tone:** `t-paper`
- **Layout:** checklist (interactive)
- **Purpose:** Answer "how long does it take?" before the scroll; capture intent.
- **Content:**
  - h2: "00 Plan the week"
  - Checklist tool: interior/exterior toggle, start day picker.
  - Output: day-by-day list (wash/dry/scrape/prime/coat1/recoat/coat2) with "labelled typical" note.
  - CTA: "Price this schedule" → `#contact` with service prefilled.
- **Signature:** stripe layer 00 added (translucent wash layer). Stamp "00 PLAN" with dry-time icon.
- **Hook:** `data-checklist="schedule"`
- **Entrance:** text rises.

### 3. Process Story: Prep (`#prep`)
- **Tone:** `t-deep`
- **Layout:** split-process
- **Purpose:** Objection "paint over peeling stuff" + "floors/shrubs mess".
- **Content:**
  - h2: "01 Wash · 02 Scrape · 03 Prime"
  - Three cards stacked vertically, each with:
    - Mono stamp ("01 WASH", "dry to touch: n/a")
    - Photo slot (`process-wash`, `process-scrape`, `process-prime`)
    - Blurb from facts.services (exterior/older-home blurbs)
  - Note on lead-safe practice for pre-1978 homes (plain language, no credential claim).
- **Signature:** stripe builds layers 01–03. Stamps tick in via counter.
- **Hook:** `data-reveal-stagger` on cards.
- **Entrance:** cards stagger-rise, photos unclip.

### 4. Full-Bleed Break (`#break`)
- **Tone:** `t-mid`
- **Layout:** break (full-width image)
- **Purpose:** Visual breath; show Richmond context.
- **Content:**
  - `[[frame region-richmond-rowhouse break-frame]]`
  - Caption: "Brick rowhouses with porches in Richmond's Fan district"
- **Signature:** stripe continues through break as overlay.
- **Entrance:** image unclip.

### 5. Services Rail (`#services`)
- **Tone:** `t-light`
- **Layout:** rail (horizontal scroll on mobile, grid on desktop)
- **Purpose:** Show all services without overwhelming; answer "do you do X?".
- **Content:**
  - h2: "04 What we paint"
  - Repeater: `<!-- each services -->` card with name, short blurb, `[[quote {{.short}} btn-text]]`.
  - Services: exterior, older-home, interior, porch & trim, wood repair, cabinets, drywall, washing, wallpaper.
- **Signature:** stripe at layer 04 (half-color). Each card has a small coat-number stamp.
- **Hook:** none (static content).
- **Entrance:** text rises.

### 6. Old-House Check (`#oldhouse`)
- **Tone:** `t-accent`
- **Layout:** checklist (interactive)
- **Purpose:** Address lead fear directly; capture pre-1978 homeowners.
- **Content:**
  - h2: "Pre-1978? We test first."
  - Checklist: year built (pre/post-1978), peeling yes/no, kids under 6.
  - Output: plain-language lead-safe prep description (plastic, wet scraping, HEPA cleanup).
  - CTA: "Get a lead-safe number" → `#contact`.
- **Signature:** stripe fully opaque on accent band. Stamp "LEAD-SAFE" in white.
- **Hook:** `data-checklist="oldhouse"`
- **Entrance:** text rises.

### 7. Proof & Reviews (`#proof`)
- **Tone:** `t-paper`
- **Layout:** card-grid
- **Purpose:** Trust; answer "will it last?" and "price per room?".
- **Content:**
  - h2: "05 Two coats, verified"
  - Sample rating block: "{{proof.rating}} · {{proof.reviewCount}} reviews ([[sample Sample rating]])"
  - Review repeater: `<!-- each proof.reviews 0:4 -->` card with text, name, town, service, stars, `[[sample Sample review]]`.
  - Price list: `<!-- each proof.prices -->` line item with from/to, note, `[[sample Sample pricing]]`.
  - Guarantee note: "{{proof.guarantee}}" with sample label.
- **Signature:** stripe at near-full. Review cards carry stamp format.
- **Hook:** none.
- **Entrance:** cards stagger-rise.

### 8. Service Area & ZIP (`#area`)
- **Tone:** `t-deep`
- **Layout:** split (text left, zip right)
- **Purpose:** Confirm coverage; capture ZIP.
- **Content:**
  - h2: "06 Where we work"
  - Text: "{{biz.city}}, {{biz.stateName}} and {{biz.areas|list}}."
  - Open-now: `<span data-open-now>` showing current status.
  - ZIP checker: input + live result region.
  - Hours table: `{{hours|table}}`
- **Signature:** stripe full. Stamp "AREA" with map pin icon.
- **Hook:** `data-zip`, `data-open-now`
- **Entrance:** text rises.

### 9. Quote Form (`#contact`)
- **Tone:** `t-light`
- **Layout:** form-stack
- **Purpose:** Primary conversion.
- **Content:**
  - h2: "Price it"
  - Multi-step form: `form[data-lead]` with service select, job details, timing, contact info.
  - Microcopy under button: "We'll call you back to set up a visit."
  - Phone beside form: `[[tel]]` + hours note.
- **Signature:** stripe ends at full opacity beside form.
- **Hook:** `data-lead`
- **Entrance:** form rises.

### 10. Footer (`#footer`)
- **Tone:** `t-deep`
- **Layout:** footer-rail
- **Purpose:** Legal, credits, final CTA.
- **Content:**
  - Logo + tagline.
  - Links: anchor nav, tel, mailto.
  - Disclaimer: "{{demo.disclaimer}}"
  - Credits: `[[credits]]`
  - Licence: "{{proof.license}} ([[sample Sample licence]])"
- **Signature:** stripe terminates with "06 DONE" stamp.
- **Hook:** none.
- **Entrance:** static.

---

## Kit modules required
`reveal`, `header`, `menu`, `mobilebar`, `lenis`, `split`, `checklist`, `zip`, `form`, `opennow`, `prefill`, `counters`.

## Motion summary
- Intro: tape pull on h1 (split lines, clip wipe 900ms).
- Story 1: stripe builds via ScrollTrigger `--sw-p` (reversible).
- Story 2: process photos unclip on enter.
- Hover: hairline scaleX from left.
- Reduced motion: all content visible, stripe full, no animations.

## Accessibility notes
- Skip link in header.
- All forms have visible labels.
- ZIP checker uses aria-live.
- Focus ring 3px solid var(--focus) offset 3px on all tones.
- Forced colors: borders on buttons and stripe.
- Heading order: h1 → h2 × 8 (no skips).