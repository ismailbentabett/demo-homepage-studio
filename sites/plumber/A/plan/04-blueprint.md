# Blueprint — plumber-A (Wrench & Wren)

## Round 2
Photos are 1×1 placeholders, so every frame became a drawn technical plate (hero basement main, under-sink trap, a sticky house section with tags that light step by step, shut-off/heater/pressure gauge drawings, area map). The deep bands got a blueprint grid. Tags now swing and rails scale in. The footer brass tag stamps on press. The tools render SVG artifacts plus a printable tag card. Lenis/estimator/video were dropped and tabs were added to match the kit contracts. Sections are now 9: hero, intro, process, services, break, tools, reviews, area, contact.

## Rhythm check
- 10 sections total.
- Tones: light → paper → deep → light → accent → light → deep → paper → light → deep. No two darks touch. No three same in a row.
- Layout families: stacked-strip, split, pinned-rail, grid, statement, checklist, mosaic, list, form, stack. No neighbours alike.
- Hooks: `data-sw-signature` (hero tag), `data-estimator` (heater tool), `data-checklist` (shut-off/pressure), `data-zip`, `data-lead` (form). ≥ 3 hooks.
- Full-bleed break: section 5 (t-accent band with break photo).
- One `#contact` form.

---

## Sections

### 1. Hero (`#hero`)
- **Tone:** t-light
- **Layout:** stacked-headline-strip (Family 4)
- **Purpose:** First 5s: trade + city + ordered promise + primary action.
- **Content:**
  - Kicker: "Indianapolis plumbing, in order"
  - h1: "Find it. Fix it. Tag it." (3 lines, mask reveal)
  - Proof line: "{{hours|today}} · {{biz.city}} · {{proof.rating}} ([[sample Sample rating]])"
  - Buttons: `[[quote drain-clearing btn-primary]]` + `[[call btn-secondary]]`
  - Strip: `[[frame hero-copper-strip ratio-21x9]]` showing copper pipes + brass valve
  - Signature: `.brass-tag` No. 01 anchored to strip left edge (`data-sw-signature`)
- **Hooks:** `data-split="lines"` on h1, `data-reveal="clip"` on strip
- **Entrance:** Line-mask h1 stagger 70ms; strip clip-open 900ms.

### 2. Intro / Trust (`#intro`)
- **Tone:** t-paper
- **Layout:** Split (text left, detail photo right)
- **Purpose:** Answer "Who are you?" and "Will you explain things?"
- **Content:**
  - h2: "We show you the problem before we fix it"
  - Lead: "Most plumbers just start wrenching. We find your shut-off first, walk you through what's wrong, and price it before work begins."
  - Photo: `[[frame process-show-problem ratio-4x3]]` (camera screen or pointing at pipe)
- **Hooks:** `data-reveal` text rise, `data-reveal="clip"` image
- **Entrance:** Text rises; image unclips.

### 3. Process Story (`#process`)
- **Tone:** t-deep
- **Layout:** Pinned rail story (≥640px); stacked cards (<640px)
- **Purpose:** Show the ordered visit; signature system core.
- **Content:** 6 steps, each a card hanging from `.pipe-rail`:
  - 02 Find the shut-off
  - 03 Show the problem
  - 04 Price it
  - 05 Fix it
  - 06 Tag it
  - (01 was hero)
- **Hooks:** `data-reveal` on each tag (swing entrance)
- **Signature:** Continuous `.pipe-rail` fills via `--sw-p`; tags swing in staggered.
- **Height:** `calc(6 * 55svh + 100svh)`
- **Entrance:** Tags rotateZ -8→0; rail scaleX 0→1.

### 4. Services Grid (`#services`)
- **Tone:** t-light
- **Layout:** Grid (3-col desktop, 2-col tablet, 1-col mobile)
- **Purpose:** Show all services with sample prices; answer "What do you charge?"
- **Content:** Repeater `<!-- each services -->`:
  - `.brass-tag` with price range ("{{.short}} · {{proof.prices.N.from}}–{{to}}")
  - h3: `{{.name}}`
  - p: `{{.blurb}}`
  - `[[quote {{.short}} btn-text]]`
- **Sample label:** `[[sample Sample pricing]]` above grid
- **Hooks:** `data-reveal-stagger` on cards
- **Entrance:** Cards fade up staggered 60ms; tags stamp in.

### 5. Break / CTA Band (`#break`)
- **Tone:** t-accent
- **Layout:** Statement + full-bleed photo
- **Purpose:** Visual breath; secondary conversion point.
- **Content:**
  - Statement: "Every valve tagged. Every price explained."
  - Photo: `[[img break-basement-warm eager]]` as background with multiply overlay
  - Button: `[[quote general btn-primary]]`
- **Hooks:** None (quiet section)
- **Entrance:** Static (no animation on accent band).

### 6. Tools Hub (`#tools`)
- **Tone:** t-light
- **Layout:** Tabs or stacked cards
- **Purpose:** Interactive value; wow moment; prefill hand-off.
- **Content:**
  - h2: "Check it yourself"
  - Tool 1: Shut-off finder (`data-checklist`) → printable tag card
  - Tool 2: Water heater life check (`data-estimator`) → SVG sketch + verdict
  - Tool 3: Pressure check (`data-checklist`) → gauge reading guide
  - Each ends with prefilled `[[quote service-name btn-secondary]]`
- **Hooks:** `data-checklist`, `data-estimator`, `data-service`
- **Entrance:** Active tab fades in; tool outputs clip-reveal.

### 7. Reviews (`#reviews`)
- **Tone:** t-deep
- **Layout:** Mosaic (asymmetric grid)
- **Purpose:** Social proof; answer "Can I trust you?"
- **Content:** Repeater `<!-- each proof.reviews -->`:
  - `.brass-tag--stars` with "★★★★★"
  - Blockquote: "{{.text}}"
  - Cite: "{{.name}}, {{.town}}" · "{{.service}}"
  - `[[sample Sample review]]` per card
- **Hooks:** `data-reveal-stagger`
- **Entrance:** Cards fade up staggered.

### 8. Service Area (`#area`)
- **Tone:** t-paper
- **Layout:** List + ZIP checker
- **Purpose:** Confirm coverage; answer "Do you come to my town?"
- **Content:**
  - h2: "Serving {{biz.city}} and nearby"
  - Areas list: `{{biz.areas|list}}`
  - ZIP checker: `input[data-zip]` + `aria-live` result
  - Yes-result: prefilled form link
- **Hooks:** `data-zip`
- **Entrance:** Text rises; checker static.

### 9. Contact Form (`#contact`)
- **Tone:** t-light
- **Layout:** Form (centered, max-width 640px)
- **Purpose:** Primary conversion.
- **Content:**
  - h2: "Price it or book a visit"
  - Multi-step form (`data-lead`): service → details → time → contact
  - Microcopy: "We'll call back within 2 hours to confirm."
  - Phone beside: `[[tel]]` · `{{hours|today}}`
- **Hooks:** `data-lead`, `data-service`
- **Entrance:** Form static; success state clips in.

### 10. Footer (`#footer`)
- **Tone:** t-deep
- **Layout:** Stack
- **Purpose:** Legal, credits, final signature instance.
- **Content:**
  - `.pipe-rail` end cap
  - `.brass-tag` "{{biz.initials}} · Est. {{proof.years}}" (sample)
  - Licence: "{{proof.license}} ([[sample Sample licence]])"
  - Disclaimer: "{{demo.disclaimer}}"
  - `[[credits]]`
  - Nav anchors: #hero, #services, #area, #contact
- **Hooks:** None
- **Entrance:** Static.

---

## Required content check
- [x] All services from facts (repeater in #services)
- [x] Service area + ZIP checker (#area)
- [x] Hours / open-now (hero proof line + form microcopy)
- [x] Sample reviews with label (#reviews)
- [x] Sample prices via estimator/repeater with label (#services, #tools)
- [x] Footer disclaimer + credits (#footer)
- [x] One h1 only (#hero)
- [x] No dead links (all anchors/tel/mailto)