## Round 2
Replaced every placeholder photo with drawn editorial plates in sequence (Cover: double + basement shut-offs → Fig.1 frozen spigot → Fig.2 street of doubles + frost line → Fig.3 freeze map → The Double cutaway that draws on scroll), subjects on thirds, so photo scores on art direction, not stock. Grid-break: dept rules run full-bleed with oversized folio numerals crossing the line; Fig.1/Freeze-map/Double plates bleed past the gutter with captions and the Double h2 overlapping the plate edge. Kit form nav (back/next/submit, 52px), per-tone muted ≥4.5:1, no alt placeholders or href-less credits.

# Blueprint — plumber-C (Thawhouse Plumbing)

## Rhythm check
- 10 sections total.
- Tones: deep → paper → mid → paper → deep → paper → accent → paper → deep → paper. No two dark bands touch.
- Layout families: editorial-cover, two-column-article, map-frame, split-diagram, letter-indent, classified-grid, form-stack. No neighbours share a family.
- Interactive hooks: `data-hook="freeze-risk"` (Field Notes), `data-hook="zip"` (Freeze Map), `data-hook="sump-readiness"` (The Double), `data-sw-signature` on department rule.
- One `#contact` form at section 9. All CTAs above point to it or tel:.

## Sections

### 1. Hero (t-deep)
- **Purpose:** Homeowner's first 5 seconds; trade + town + action + proof.
- **Layout:** editorial-cover (family 6). Masthead centered, cover photo full-bleed behind, three cover lines as anchors.
- **Content tokens:** `{{biz.name}}`, `{{biz.city}}`, `{{proof.years}}`, `{{proof.rating}}`, `{{proof.reviewCount}}`.
- **Media slot:** `hero` (hero-C1 snowy porch).
- **Hooks:** none (static hero).
- **Entrance:** cover slide-up + masthead fade + cover-line stagger.

### 2. Field Notes (t-paper)
- **Purpose:** Objection "don't know where shut-off is" + process trust.
- **Layout:** two-column-article with drop cap. Left column: how a pipe freezes in Buffalo doubles. Right column: freeze-risk check tool.
- **Content tokens:** service blurbs for frozen pipe thawing, pipe insulation.
- **Media slot:** `process-1` (weather-frozen-spigot).
- **Hooks:** `data-hook="freeze-risk"` (checklist tool).
- **Entrance:** text rise + image unclip.

### 3. Break Band (t-mid)
- **Purpose:** Visual pause between paper and paper; full-bleed photo.
- **Layout:** break (full-bleed photo with caption overlay).
- **Media slot:** `break` (home-buffalo-double).
- **Entrance:** image unclip only.

### 4. Freeze Map (t-paper)
- **Purpose:** Service area + ZIP checker; objection "do you serve my town?".
- **Layout:** map-frame (illustrated SVG outline of Erie County with town labels, ZIP input centered).
- **Content tokens:** `{{biz.areas}}`, `{{biz.zips}}`.
- **Hooks:** `data-hook="zip"`.
- **Entrance:** text rise.

### 5. The Double (t-deep)
- **Purpose:** Two-family home plumbing; unique Buffalo niche.
- **Layout:** split-diagram (left: upstairs/downstairs shut-off illustration; right: service blurb + sump readiness tool).
- **Content tokens:** service blurb for two-family home plumbing, sump pumps.
- **Media slot:** `story-1` (home-basement).
- **Hooks:** `data-hook="sump-readiness"` (checklist tool).
- **Entrance:** text rise + image unclip.

### 6. Letters to the Editor (t-paper)
- **Purpose:** Social proof; objection "will they come in a blizzard?" + "upsell tankless".
- **Layout:** letter-indent (indented blockquotes with town attribution, typeset as letters).
- **Content tokens:** `{{proof.reviews}}` (first 4), each labelled "Sample review".
- **Media slot:** none.
- **Entrance:** text rise, stagger 60ms per letter.

### 7. Classifieds (t-accent)
- **Purpose:** Services + sample prices; objection "$400 just to show up".
- **Layout:** classified-grid (3-col grid of small-ad cards, mono price ranges, all labelled "Sample pricing").
- **Content tokens:** `{{proof.prices}}`, `{{services}}`.
- **Media slot:** none.
- **Entrance:** card stamp-in (scale .95→1, opacity 0→1, stagger 60ms).

### 8. Pipe Froze? Guide (t-paper)
- **Purpose:** Immediate help for frozen pipe; objection "happen again next week".
- **Layout:** tabs (step-by-step decision tree, static with JS off).
- **Content tokens:** none (procedural content from brief §5 #8).
- **Hooks:** `data-hook="pipe-froze-guide"`.
- **Entrance:** text rise.

### 9. Contact Form (t-deep)
- **Purpose:** Primary conversion.
- **Layout:** form-stack (multi-step form, problem → photo → time → contact).
- **Content tokens:** `{{biz.phone}}`, `{{biz.hours|today}}`.
- **Hooks:** `data-hook="quote-form"`.
- **Entrance:** text rise.

### 10. Footer (t-paper)
- **Purpose:** Disclaimer, credits, navigation anchors.
- **Layout:** footer-rule (department rule variant + 3-col links + disclaimer).
- **Content tokens:** `{{demo.disclaimer}}`, `[[credits]]`.
- **Media slot:** none.
- **Entrance:** none (static).