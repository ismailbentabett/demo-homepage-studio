# Blueprint — demolition-C

## Round 3
Motion + layout elevate: the ruler is one running "sq ft back to lawn" instrument (header meter ticks with the story, jumps to the estimator footprint, footer lands on the final value, 192 in HTML for no-JS/reduced motion, never counts from 0); #story is a sticky (pinned) plot that changes state per stage beside four tight captions with plot-state thumbnails (inactive text #4A6356, 5.8:1); #tools is a two-column sheet (tool + ZIP left, live field-book sketch with real dimensions right). Also: styled form Next/Submit, slider labels on the track, curly apostrophes and × via app.js, Yard restore card grid, compact phone service list, hours as rows.

## Round 2
Photo 7.0 / Copy 8.5 elevate: every placeholder photo is replaced by drawn field-book plates (hero plot, story plot in 4 stages, ridge-line break) so no grey frames remain; the story is re-cut as ONE sample plot whose ruler + sq-ft count scrub with scroll (desktop) and the footer ruler counts up to the plot total; invented per-review sq-ft numbers are removed (service · town tags instead); estimator gets homeowner-scale microcopy; one CTA name ("Price it") everywhere; mobile bar, menu (inert focus trap) and tabs moved onto kit modules; duplicate credit lines gone (no media used).

## Rhythm (tone sequence)
1. hero (t-deep) — type mask + ruler start
2. trust (t-paper) — proof line + open-now + areas
3. services (t-mid) — footprint cards with sq-ft tags
4. break (t-deep) — full-bleed hillside photo
5. story (t-paper) — space-back ruler scroll story
6. tools (t-accent) — estimator + zip + debris
7. reviews (t-paper) — stacked quotes with sq-ft numerals
8. faq (t-mid) — house-year, dust, shut-offs
9. contact (t-deep) — form + phone + hours
10. footer (t-deep) — ruler total + credits + disclaimer

No two dark bands touch without a paper/mid separator except hero→trust (deep→paper OK) and contact→footer (same deep band merged visually). Break is deep but separated by mid (services) above and paper (story) below.

## Sections

### 1. Hero (t-deep, loose 128px)
- H1 "GONE" in Anton 6rem, line-mask reveal, masks hero-C1 photo.
- Kicker: "{{biz.tradeLabel}} in {{biz.city}}" in DM Mono --fs--1.
- Subhead: "Shed, deck and garage removal on Roanoke's steep lots — ground graded back to lawn."
- CTA row: [[call btn-primary]] + [[quote sheds btn-secondary]].
- Proof line under h1: "Sample rating {{proof.rating}} · {{proof.reviewCount}} reviews (Sample) · {{biz.areas|list}}".
- Ruler starts at 0 in left margin; `data-sw-signature` here.
- Photo: hero-C1 (leaning shed), object-position 50% 40%.

### 2. Trust Bar (t-paper, tight 56px)
- 4-column grid: Open now (`[[i clock]] {{hours|today}}`) · Sample rating {{proof.rating}} · {{proof.years}} years (Sample) · Serving {{biz.areas|list}}.
- No animation. Static trust signals.

### 3. Services (t-mid, normal 96px)
- Heading: "What we take down" in Anton.
- 3×3 grid of service cards (8 services from facts). Each card: icon, name, blurb, sq-ft footprint outline (SVG), sample price range tag in DM Mono.
- Cards use `data-service="{{.short}}"` for prefill.
- Ruler tick appears beside each card as it enters view.

### 4. Break (t-deep, loose 128px)
- Full-bleed photo: region-blue-ridge, object-position 50% 60%.
- Overlay text: "Every yard we clear is a yard given back." in Anton 3rem, centered.
- Grain texture at 5%.

### 5. Story: Reclaimed Space (t-paper, normal 96px)
- Pinned scroll story (≥640px): small hillside yard plan SVG. Shed, deck, carport erase one by one as user scrolls; ruler counts up beside them.
- Height: calc(3 * 55svh + 100svh).
- Under 640px: stacked cards with clip reveal, no pin.
- Each step: "+180 sq ft · shed, Grandin", "+420 sq ft · deck, Cave Spring", "+350 sq ft · carport, Vinton".
- Ruler draws via --sw-p clip-path wipe.

### 6. Tools (t-accent, tight 56px)
- Heading: "Size your job" in Anton.
- Tool tabs: Space-back ruler | Tear-out sizer | Debris load.
- Each tool: inputs → output with sq-ft or load count → "Book a walk-through" CTA that prefills form.
- ZIP checker below tabs.
- All tools work with JS off as static explanations + call button.

### 7. Reviews (t-paper, normal 96px)
- Heading: "Yards given back" in Anton.
- Stacked review cards (6 from facts). Each: large sq-ft numeral in DM Mono (derived from service type), quote text, author + town + service.
- Sample tag visible on each card.
- Counters animate once in view.

### 8. FAQ (t-mid, tight 56px)
- Accordion: 5 questions mapped to objections.
  - "Will you cut into pipes or wires?" → shut-offs explained.
  - "What about dust?" → containment plan.
  - "My house is old — asbestos or lead?" → test-first promise.
  - "Will a dumpster crack my driveway?" → trailer vs dumpster honest note.
  - "Will the bid double?" → sample ranges + walk-through CTA.
- No animation on accordion open (quiet section).

### 9. Contact (t-deep, normal 96px)
- Heading: "Price it" in Anton.
- Multi-step form: structure/room → size/details → timeline → contact.
- Microcopy under button: "We'll call you back to set up a visit."
- Phone + hours beside form on desktop; stacked on mobile.
- Form never sends; honest thank-you state.

### 10. Footer (t-deep, loose 128px)
- Ruler ends with town total: "sq ft given back this year" (sample counter).
- Credits: [[credits]].
- Disclaimer: {{demo.disclaimer}}.
- Nav anchors.
- Final ruler tick mark.

## Hooks
- data-sw-signature: hero ruler instance.
- data-reveal: all text blocks, cards.
- data-reveal="clip": all photos.
- data-count: sq-ft counters in reviews and footer.
- data-tabs: tool section.
- data-accordion: FAQ.
- data-zip: ZIP checker.
- data-lead: contact form.
- data-service: service cards and CTAs.
- data-video: none (no video in this direction).
- data-mobilebar: sticky bar.
- data-header: header with progress.
- data-open-now: trust bar.

## Layout Moves
1. Type-mask hero (family 3).
2. Ruler margin column (desktop) / top rail (mobile).
3. Footprint cards with SVG outlines.
4. Stacked reviews with large numerals.
5. Pinned scroll story with SVG yard plan.