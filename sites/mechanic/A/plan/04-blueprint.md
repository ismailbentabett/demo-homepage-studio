# Blueprint — mechanic-A

## Round 3
Layout: line 04 is now the page's hinge. A perforated, hatched band runs full-bleed through the story behind the gate card, it draws open on scroll, and the chip flips to "Yes, go ahead". The sections below carry RO line kickers (02 Find the cause, 05 Opened by your yes, 03 The number we text you). The hours table lives only in the footer; #area keeps just the live status line. Photo: Fig. 4 is now the text we send, a phone thread with a close-up drawing of the worn pad (3 mm, scored rotor), the sample price and your "Yes" reply. Shoulds: price-sheet rows padded (kit role=list reset beat the class), "Price it" links aligned, thin spaces around the price dashes, intros in #3D3F43, the featured review sized to its content, the hero secondary renamed "Book a drop-off", the h1 cut to 8 words, and the hero's empty margins trimmed.

## Round 2
Rebuilt the page (src rewritten): the approved media are 122-byte placeholders, so every photo slot is now a drawn RO plate (inline SVG Fig. 1-7: car on lift, key tag, scan tool, phone YES, road test, DONE stamp, brake section) and the credits list is empty and hidden. The h1 carries the outcome ("fixed only after your yes") with hours and rating as a proof line under it. Both hero CTAs fit at 390x844, the next band peeks about 85px at 1440x900, and there is no strip between the hero and the gate band. The mobile bar has a solid call button and an outlined Book button, 48px tall, with its padding on the footer. Section shapes now vary (split sheet / statement band / sticky-rail story / dash console / ledger + tickets / brake diagram / feature quote + stack / ZIP + towns / form card / closed-order footer). Decoder preselected on check engine steady, brake gauge default 6 mm. Planner merged into form step 3 as styled slots. Paper muted darkened to #5E5C57 for AA.

| # | id | tone | layout | hooks / signature |
|---|---|---|---|---|
| 1 | hero | paper | split | sig ro-line, ro-intro (chip stamps Doing) |
| 2 | gate | accent .break | statement | line 04 "Your yes" |
| 3 | visit | paper | rail | sig ro-line, ro-story (sticky summary order advances, ≥900) |
| 4 | lights | deep | console | decoder |
| 5 | services | paper | ledger | sig ro-line (numbered tickets + price sheet) |
| 6 | brakes | deep | diagram | brake-gauge |
| 7 | reviews | paper | quotes | none |
| 8 | area | deep | split-list | ZIP check, open-now |
| 9 | contact | paper | form | 4-step form |
| — | footer | deep | — | sig ro-line (closed order) |

Rhythm: 9 sections, alternating tones, no two dark sections touching, t-deep and t-accent present, .break on the gate band, 5 hooks, 9 distinct layout families, one #contact. check-static, check-render and check-unique are clean.

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