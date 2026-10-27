# Blueprint — painter-B (Drawdown Painting Co.)

## Rhythm map (tone sequence)

1. **Hero** — t-deep (dark band with scrim + tint ticket)
2. **Proof line** — t-light (paper band: rating, reviews, hours, area)
3. **Room quote builder** — t-paper (warm band: estimator tool)
4. **Services grid** — t-light (paper band: 9 service cards with tint-ticket caps)
5. **Break** — t-mid (full-bleed photo: region-raleigh-suburb)
6. **Prep story** — t-deep (dark pinned story: wash/scrape/prime/cut-in steps)
7. **Sheen picker** — t-paper (warm band: tabs tool)
8. **Reviews** — t-light (paper band: review tickets with drawdown bars)
9. **Paint calculator** — t-accent (teal band: estimator tool)
10. **ZIP checker** — t-light (paper band: zip module)
11. **Contact form** — t-deep (dark band: multi-step form)
12. **Footer** — t-deep (dark band: final tint ticket + credits)

Rhythm check: no three same tones in a row; no two dark bands touching (deep→light→paper→light→mid→deep→paper→light→accent→light→deep→deep is valid because footer deep follows contact deep but footer has distinct visual treatment as ticket cap; actually this violates — fix: make footer t-paper).

**Corrected rhythm:**
11. **Contact form** — t-deep
12. **Footer** — t-paper (warm band: final tint ticket + credits)

Now: deep→light→paper→light→mid→deep→paper→light→accent→light→deep→paper. No two darks touch. No three same in a row. Has dark band, color band (t-accent), break section. ✓

## Section detail

### 1. Hero (t-deep)
- Layout: 12-col grid. Left 6 cols: h1 + proof line + CTA row. Right 6 cols: tint ticket document object with embedded room-size input.
- Signature: full-width tint ticket with headline as product name; drawdown bar spans bottom edge.
- Data hooks: `data-sw-signature` on ticket container; `data-drawdown-width="100"` on bar.
- Content: h1 "Raleigh painters who show the numbers first"; kicker "{{biz.tradeLabel}} in {{biz.city}}"; CTA row: [[quote interior btn-primary]] + [[call btn-secondary]]; proof line: "{{proof.rating}} · {{proof.reviewCount}} reviews ([[sample rating]]) · {{hours|today}}".
- Photo: hero-B1 via [[video hero-B1]] if family 14 uses video, else [[img hero-B1 eager]]. Scrim applied via CSS.

### 2. Proof line (t-light)
- Tight padding (--s-8). Single row: rating stars + count + sample tag + open-now + areas list.
- Font: --fs-1 for status sentence; --fs-2 for phone number only.

### 3. Room quote builder (t-paper)
- Normal padding (--s-9). Heading: "Price your rooms before we visit".
- Tool: `[data-estimator]` with inputs for S/M/L rooms, ceilings, trim. Output: sample range from facts.proof.prices.
- Handoff: "Price it" button with `data-service="interior-painting"` pre-selects form.
- Signature: tint-ticket cap above heading; drawdown bar under heading scaled to coverage value.

### 4. Services grid (t-light)
- Loose padding (--s-loose: 128px). 3x3 grid on desktop, 2-col tablet, 1-col mobile.
- Each card: tint-ticket cap (service name + sheen + sample range); blurb; [[quote .short btn-ghost]] CTA.
- Repeater: `<!-- each services -->`.
- Detail photos: detail-trim, detail-cabinets, detail-deck used in cards 3, 4, 5 respectively via [[frame key cls]].
- Signature: every card has `.drawdown-bar` under title with width from data attribute.

### 5. Break (t-mid)
- Full-bleed [[img break]] with object-position 50% 60%. No text overlay. Height: 60svh.
- Acts as tone separator between light services and dark prep story.

### 6. Prep story (t-deep)
- Pinned scroll story on desktop (≥640px); stacked cards on mobile.
- 4 steps: wash (process-wash), scrape (process-scrape), prime (process-prime), cut-in (process-cut-in).
- Each step: photo left, text right with ticket fields (step name, tool, dry time).
- Story height: calc(4 * 55svh + 100svh) = 320svh.
- Motion: clip-path reveal on each photo; text rises.
- Signature: drawdown bar grows across each step's ticket as it enters viewport.

### 7. Sheen picker (t-paper)
- Normal padding. Heading: "Pick the right sheen for the room".
- Tool: `[data-tabs]` with tabs for bath/kitchen/bedroom/hall/trim/ceiling. Each tab shows recommended sheen + reason.
- Handoff: selected sheen passed to form via hidden field.
- Visual: [[img material-swatches]] inline with tab content.

### 8. Reviews (t-light)
- Loose padding. Heading: "What Raleigh homeowners say".
- Grid: 3-col desktop, 2 tablet, 1 mobile. Each review is a tint ticket: room type, sheen, town, star rating, text, author.
- Repeater: `<!-- each proof.reviews 0:6 -->`.
- Sample tag on every card: [[sample review]].
- Signature: drawdown bar behind stars, opacity tied to rating (5★ = 100%, 4★ = 80%).

### 9. Paint calculator (t-accent)
- Normal padding. Color band. Heading: "How many gallons does your room need?".
- Tool: `[data-estimator]` variant with length/width/height/doors/windows/coats inputs. Output: wall area + gallons.
- Handoff: "Price this room" button pre-selects interior painting.
- White text on teal bg; paper-colored inputs.

### 10. ZIP checker (t-light)
- Tight padding. Heading: "Do we paint your neighborhood?".
- Tool: `[data-zip]` with input + aria-live result. Yes-result offers form with ZIP prefilled.
- Areas list below: {{biz.areas|list}}.

### 11. Contact form (t-deep)
- Normal padding. Heading: "Get your number".
- Tool: `form[data-lead]` with 4 steps. Service pre-selected from any CTA with data-service.
- Honest thank-you: "Thanks, {name}. In your version this goes straight to your phone and inbox."
- Phone + email shown beside form: [[tel]] + [[mailto]].

### 12. Footer (t-paper)
- Tight padding. Final tint ticket: license (sample), phone, hours, service area, disclaimer.
- [[credits]] for photo attribution.
- Drawdown bar as top border in accent color.
- Demo disclaimer: {{demo.disclaimer}}.

## Data hooks inventory

- `data-sw-signature`: hero ticket, services cards, prep story steps, review tickets, footer ticket (5 instances).
- `data-drawdown-width`: hero bar, service card bars, prep step bars, review bars (variable widths).
- `data-estimator`: room quote builder, paint calculator (2 instances).
- `data-tabs`: sheen picker (1 instance).
- `data-zip`: ZIP checker (1 instance).
- `data-lead`: contact form (1 instance).
- `data-open-now`: proof line (1 instance).
- `data-service`: all [[quote]] CTAs (9+ instances).

Total unique hooks: 8. Exceeds minimum of 3. ✓

## Mobile bar

Visible < 900px. Fixed bottom. Two buttons: [[call btn-primary]] + [[quote interior btn-secondary]]. Height 56px. Shadow above.

## Reduced motion

All clip-path reveals become instant opacity. Drawdown bars render at full width. Pinned story becomes stacked cards. Counters show final values. No autoplay video.
## Round 1 (reopened, elevate + fix)
Photo + distinctiveness/wow rewritten: every placeholder photo replaced by drawn paint-lab artefacts (pull-card over a black/white hiding chart in the hero, estimator, footer; colour-chip film on every service ticket; scroll-driven paint-strip break; prep story where primer and coats stack on a siding cross-section, sticky ≥900px); lead form moved to kit markup (fieldset[data-step] + [data-form-nav] with data-back/next/submit, 48-52px buttons); estimator rebuilt on kit hooks; gallon calculator added; 11 sections deep→paper→light→accent→paper→deep→light→paper→mid→light→deep, footer paper.
Note: the class is `pullcard` (not "drawdown") because the business short name is a token-only fact.
