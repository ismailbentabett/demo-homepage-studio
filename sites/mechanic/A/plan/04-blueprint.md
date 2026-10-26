# Blueprint — mechanic-A

## Round 1
Elevate: Layout (8.5) fixed by changing brake estimator section from t-paper to t-deep with ro-line rail left margin, breaking paper/paper adjacency with services. Wow (8.0) fixed by replacing text-only brake wear output with a designed .ro-line card showing pad state as a numbered line item in signature language. Also added scale-in reveal hook for guarantee band (third motion family), replaced all placeholder alt text with descriptive frame content, and verified carousel tap targets at 48px.

## Rhythm
Tight (64px) → Normal (96px) → Tight → Normal → Loose (128px) → Normal → Tight.

## Sections

### 00 · Header (`--header-h: 64px`, t-paper)
Left: `{{biz.short}}` wordmark in Arvo 700. Center: nav anchors (Process · Services · Tools · Reviews). Right: [[call]] + "Book drop-off" ghost button. Sticky on scroll-up; collapses to logo + hamburger under 900px.

### 01 · Hero (family 2, 50/50 split, tight padding)
- Left pane (t-paper): Repair-order card `.ro-card` with lines 01–03 pre-filled. Line 01 chip = doing (pulse), clock running. H1: "Auto Repair & Diagnosis in {{biz.city}}, {{biz.state}}". Kicker above: "By appointment · nothing done without your yes". Below card: [[call]] primary + [[quote check-engine btn-ghost]].
- Right pane: `[[frame hero-A1]]` car on lift, grade filter applied. Alt from manifest.
- Mobile: stack left over right; card full-width.

### 02 · Guarantee banner (t-accent, tight)
Single line in Arvo 700: "{{proof.guarantee}}". No CTA; reads as a stamp.

### 03 · Process story (t-paper, normal)
Vertical `.ro-line` rail in left margin column (desktop) or top-aligned (mobile). Lines 04–07 write in on scroll via clip-path wipe:
- 04 · Your yes · 0:00 — chip pulses orange until user scrolls past; gates lines below.
- 05 · Repair · sample range from `{{proof.prices.1.from}}–{{proof.prices.1.to}}`.
- 06 · Road test · 0:15.
- 07 · Pick-up · keys at counter.
Right of each line: `[[frame process-*]]` photo (under-car, wheel-off, road-test, key-drop). Captions describe the frame, never "our team".

### 04 · Warning light decoder tool (t-deep, tight)
Kit module `checklist` with `[data-checklist]`. Tap icons (check engine steady/flashing, oil, battery, temp, brake, ABS, TPMS). Output: meaning + safe-to-drive + first-check. End state offers [[quote]] with service prefilled. Label: "[[sample diagnosis]]".

### 05 · Services as sample line items (t-paper, normal)
`<!-- each services -->` renders `.ro-line` cards. Each: mono index `{{#2}}`, chip = waiting (static), description = `{{.name}}` + `{{.blurb}}`, clock slot = `[[sample pricing]]` pill. Hover lifts chip. CTA: `[[quote {{.short}} btn-ghost]]`.

### 06 · Brake wear explainer (t-paper, tight)
Kit module `estimator` with `[data-estimator]`. Visual pad slider (new → half → 3 mm → metal). Output text + time-left. Prefill: service=Brakes. Photo: `[[frame parts-worn-pads]]`.

### 07 · Proof band (t-deep, normal)
Three reviews in horizontal scroll-snap carousel. Each review is a `.ro-line` variant: line number = review index, chip = done (green), description = quote + town + service, clock slot = star rating. `[[sample review]]` tag on each.

### 08 · Drop-off planner tool (t-paper, tight)
Kit module `tabs`: morning picker (Mon–Fri 07:30–10:00 slots), ride-needed checkbox. Output timeline summary. Hand-off to quote form with preferred-dropoff prefilled. Photo: `[[frame place-bay-door]]`.

### 09 · ZIP checker (t-paper, normal)
Kit module `zip` with `[data-zip]`. Input + aria-live answer region. Yes → show form with ZIP prefilled. No → honest "call us" message.

### 10 · Quote form (t-paper, loose)
Multi-step `form[data-lead]`: car → complaint → when → contact. Honeypot `website2`, time trap `t`. Thank-you state shows closed repair order (all chips done). Phone visible above form on mobile.

### 11 · Footer (t-deep, tight)
Closed repair order: all lines 01–07 chips = done, total clock shown. Wordmark + `{{biz.city}}` + areas list `{{biz.areas|list}}`. Hours `{{hours|table}}`. `[[tel]]` + `mailto:{{biz.email}}`. License `{{proof.license}}`. `[[credits]]`. Disclaimer `{{demo.disclaimer}}`. © `{{year}}`.

## Mobile bar
Sticky bottom under 900px: [[call]] left + "Book drop-off" right. Hides when `#contact` is in view.

## A11y notes
- All status chips carry text label (waiting/doing/done), not color alone.
- Skip-link to `#main`.
- Form labels visible, error messages in aria-live.
- Reduced motion: no pulse, no clip-path wipe, lines static.