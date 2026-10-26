# Blueprint — concrete-A (Long Cure Concrete Co.)

## Round 2
Elevate photo: every drawing is re-inked as a carbon copy (blue offset duplicate stroke through the `f-carbon` filter, dashed carbon sheet behind the tickets). Labels are HTML at 13px on leader lines, and each drawing has a scale tag. Precise crack sketches: map crazing, a plan view of scaling, and a dropped panel in section. Why: zero photos, so the drawings have to read as the trade's own paperwork. Elevate motion: the process is one dig→cure build. Each layer clip-wipes in, then its label lands on its leader (pinned at ≥900×760, scrubbed elsewhere). The 28-day curve starts at "08 cure → day 0". The calculator slab redraws and re-cuts its joints live. Fixes:
- Process labels sit in a right gutter, stacked bottom-up.
- The subgrade and base layers are filled.
- "mid-slab" is unclipped.
- Reviews: one featured quote, then centred thirds.
- The ZIP checker and the hours each appear once (#area, with an open-now line).
- The numbering on services and towns is gone.
- "4–5 in." uses an en dash, and the hero title uses `5&nbsp;in.`
- Contact "Next" is the blue primary, and the footer call is outlined.
- The gap above the hero h1 is cut.

## Round 1
Zero photos: every grey placeholder slot is now an SVG drawing (pour ticket with a slab section, a Base/Steel/Drainage strip, a dig-to-cure cross-section, a 28-day cure curve, crack drawings, an estimator sketch). Why: the media is placeholder only, and the drawings carry the concept. Photo slots come back when real media lands. Icons now have a fixed size (1.25em), the overflow at 320/390 is gone, and the copy-1 replacements are in. Sections are now: hero / under / process (pinned stack) / cure (break, count) / services / tools (estimator + crack reader) / reviews / area / contact.

## Section list (top to bottom)

### 1. Hero · `t-paper` · `.sec-tight`
- **Purpose:** Homeowner's first 5 seconds: trade + town, ticket as hero, two actions, one proof line. Contractor wow: nobody shows the spec before the pour.
- **Layout:** split (text left 6 cols, ticket document right 6 cols at ≥900; stacked on mobile with ticket above text).
- **Content tokens:** `{{biz.tradeLabel}}`, `{{biz.city}}`, h1 "A slab is decided in the dirt, not the truck.", proof line "Mon–Sat 7:00–5:30 · {{biz.areas|list}} · {{proof.rating}} ★ ([[sample rating]])". Buttons: `[[quote driveway | Price it]]` and `[[call btn-primary]]`.
- **Media:** `hero-A2` (wooden forms and rebar grid on gravel) clipped into the ticket via `[[frame hero-A2 ticket-photo | eager]]`. Ticket carries SAMPLE TICKET stamp and job lines EXCAVATE · BASE · STEEL · MIX · JOINTS · CURE.
- **Hooks:** `data-sw-signature="ticket"` on the ticket element, `data-split="lines"` on h1, `data-reveal` on ticket lines.
- **Entrance:** line-mask h1 reveal; ticket feeds up via clip-path stagger.

### 2. Objection band · `t-mid` · `.sec-tight`
- **Purpose:** Answers "They'll pour thin / skip gravel" and "Water runs toward foundation" before the homeowner scrolls past.
- **Layout:** 3-up grid (cards at ≥900, stack below). Each card is a `.ticket-line` with step number.
- **Content:** Cards for BASE (4 in. compacted road base, slope away from house), STEEL (#4 rebar 18 in. O.C. on chairs), DRAINAGE (positive grade callout). All copy from facts.services blurbs rewritten as spec lines. Sample tag on any measurement that echoes proof.prices context.
- **Media:** `base-compaction` in BASE card (`[[frame base-compaction card-ratio]]`).
- **Hooks:** `data-reveal-stagger` on cards.
- **Entrance:** staggered clip reveal.

### 3. Process story (pinned) · `t-deep` · `.sec-loose`
- **Purpose:** Answers "It'll crack in a year" and makes the invisible half visible layer by layer. Signature moment.
- **Layout:** pinned cross-section left (≥640 only), ticket-line rail right that ticks 01→08. Below 640: stacked cards with clip reveal, no pin.
- **Content:** Eight line items: 01 DIG, 02 BASE, 03 STEEL, 04 FORMS, 05 POUR, 06 SCREED, 07 JOINTS, 08 CURE. Each labels thickness/material. Cross-section SVG layers correspond.
- **Media:** `rebar` and `saw-cut` as inset detail frames inside the cross-section panel.
- **Hooks:** `data-sw-signature` reuse (class only), `data-reveal="clip"` on each layer.
- **Entrance:** layer build on scroll; reverse on scroll-up. Reduced motion: full static cross-section with all labels visible.

### 4. Break · `t-paper` · full-bleed
- **Purpose:** Atmospheric pause; shows broom texture in raking light. Satisfies rhythm rule (one .break).
- **Layout:** full-bleed 21:9 frame, no text.
- **Media:** `broom-finish` (`[[frame broom-finish break-ratio | eager]]`). Caption: "Broom drag across fresh concrete in flat morning light."
- **Hooks:** none.
- **Entrance:** unclip.

### 5. Services · `t-paper` · `.sec-normal`
- **Purpose:** All services from facts; each links to quote form with service prefilled.
- **Layout:** 3-col grid at ≥1100, 2-col at ≥640, stack below. Each service is a `.ticket-line` card with mono step number continuing the sequence (09–17).
- **Content:** `<!-- each services -->` repeater. Card: `<h3>{{.name}}</h3><p>{{.blurb}}</p>[[quote {{.short}} btn-ghost]]`. Sample pricing referenced only through estimator, never inline.
- **Media:** none (keep density low after break).
- **Hooks:** `data-service` on each CTA (prefill module).
- **Entrance:** stagger reveal.

### 6. Tools strip · `t-mid` · `.sec-normal`
- **Purpose:** Conversion path secondary; gives a rough number before the call. Satisfies interactive hook count.
- **Layout:** tabs (Crack reader) left, Slab calculator right at ≥900; stacked below. Cure clock as a compact widget underneath.
- **Content:** 
  - Slab calculator: inputs length/width/thickness/use; output sq ft, yards, sample range from `facts.proof.prices`; CTA "Send me these numbers" → #contact with data-service.
  - Crack reader: six picture tabs mapping to diagnosis + service match; CTA "Have us look at it".
  - Cure clock: date input → walk-on/drive-on/full-strength days.
- **Media:** crack reader tab images use `cracked-concrete`, `scaling`, `sunken-slab` (small crops, reused only here per DEMO-RULES §5 allowance for tool diagrams).
- **Hooks:** `data-estimator`, `data-tabs`, `data-counters`, `data-zip` (ZIP checker embedded in calculator footer).
- **Entrance:** fade-up on section enter.

### 7. Proof / Reviews · `t-paper` · `.sec-normal`
- **Purpose:** Social proof labelled Sample; answers "Will they stand behind it?".
- **Layout:** 2-col review cards at ≥900, stack below. Each review sits in a `.ticket-line` with reviewer town as "job location" and stars as "inspection grade".
- **Content:** `<!-- each proof.reviews -->` repeater. Card: `[[sample review]]` tag, "{{.text}}", "{{.name}}, {{.town}} · {{.service}}", star row. Aggregate line: "{{proof.reviewCount}} reviews · {{proof.rating}} ★ ([[sample rating]])". Guarantee line from `{{proof.guarantee}}` with Sample label.
- **Media:** none.
- **Hooks:** `data-reveal-stagger`.
- **Entrance:** stagger.

### 8. Service area + ZIP · `t-light` · `.sec-tight`
- **Purpose:** Confirms we serve their street; ZIP yes → form prefill.
- **Layout:** split: map/list left, ZIP checker right at ≥900.
- **Content:** `{{biz.city}}` + `{{biz.areas|list}}`. ZIP input with aria-live answer. Hours: `{{hours|today}}` + `[[i clock]]` open-now badge. Licence: `Licence # {{proof.license}} ([[sample license]])`.
- **Media:** `utah-home` as small contextual frame beside the list.
- **Hooks:** `data-zip`, `data-open-now`.
- **Entrance:** fade-up.

### 9. Quote form · `t-accent` · `.sec-normal`
- **Purpose:** Primary conversion. Styled as TICKET PAGE 2; submit row is customer signature line.
- **Layout:** centered single column, max-width 640px.
- **Content:** Multi-step form (`form` module): service → job details → when → contact. Honeypot `website2`, time trap `t`. Thank-you state honest per DEMO-RULES. Every field label in Karla; step indicators in DM Mono.
- **Media:** none.
- **Hooks:** `data-lead`, `data-service` listeners.
- **Entrance:** fade-up.

### 10. Footer · `t-deep` · `.sec-tight`
- **Purpose:** Legal, credits, customer-copy closure of the ticket metaphor.
- **Layout:** 4-col at ≥1100, stack below. Left col: logo + "Customer copy" ticket header. Col 2: services links. Col 3: contact (`[[tel]]`, `{{biz.email}}`, hours table `{{hours|table}}`). Col 4: `{{demo.disclaimer}}`, `[[credits]]`, licence sample tag.
- **Media:** none.
- **Hooks:** none.
- **Entrance:** fade-up.

## Rhythm check
- Tones: paper → mid → deep → paper(break) → paper → mid → paper → light → accent → deep. No three same in a row. No two dark touching (deep is followed by paper break; accent is color-led, then deep footer is separated by accent). ✓
- Dark bands: deep (process), deep (footer). ✓
- Color band: accent (form). ✓
- Full-bleed break: section 4. ✓
- Interactive hooks: `data-sw-signature` (hero), `data-estimator` (tools), `data-tabs` (tools), `data-zip` (tools + area), `data-lead` (form). ≥3. ✓
- Layout families: split, grid, pinned-stack, full-bleed, grid, tabs-split, grid, split, centered-form, 4-col-footer. No two neighbours share. ✓
- Sections: 10 (within 8-12). ✓
- One #contact form. ✓
- Required content: services ✓, area+ZIP ✓, hours/open-now ✓, sample reviews ✓, sample prices via estimator ✓, footer disclaimer+credits ✓.