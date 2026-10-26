## Round 3
Hero re-cut (≥1200): h1 + check on top, the instrument strip full width with a giant six-drum odometer that rolls after fonts load (spin to 044,994, last miles click over with the carry); the mileage check rolls the readout to the visitor's number and re-reads the report (tag rolls, DUE / AT / NOT YET verdicts); drawn plates graded as one set (graph grid, grain, blue→signal duotone, FIG tags + odo tag) because the niche photos are blank placeholders. Shoulds: curly apostrophes, drawn en dash, no middle dots, hero dead space closed (~95px peek), one "Get my plan" per mileage band (none per row, hidden on phone), report eyebrow cut, fades 420ms and removed from large columns.

# Blueprint — autotuneup-B

## Round 2
Elevate photo: the placeholder dial no longer repeats. The report is now three distinct drawn readings in one grade (tread section with a depth-gauge pin at 4/32, plug gap over a tight/spec/wide feeler scale, brake-fluid strip against a 0–3%+ moisture scale), each with its pinned odometer readout, scroll-scrubbed so the probe drops, the marker slides and the strip lands. The self-check is a drawn new-vs-cracked wiper edge, and the hero dial is the only gauge left. Alt text = what is drawn (hero img alt=""). Elevate type: hero and review eyebrows cut, ranges set as DM Mono readouts with a Karla en dash, sample label in sentence case, step labels as 1/4 readouts. Planner band merged into #contact ("Wait for it or drop it off"), so the plan is asked for once. Radius 0 everywhere, proof line 16px in full ink without middle dots, phone report = one large frame + 2-up row. Sections are now 9: hero, services, report, oil, check, break, reviews, area, contact.

## Round 1
Elevate: every photo slot is now an instrument-cluster frame (ink plate, gauge arc + needle, mono mileage readout that rolls on reveal, one grade), so the placeholder stubs read as designed gauges and alt text never prints; the scroll is shaped by the odometer (7/5 hero with a giant live 045000 readout panel, a full-width interval ledger with a sticky odometer column that rolls 30k→60k→100k, one full-bleed desert-road break with the h2 over it). Fixes: sample 45,000 mi default state with working mileage logic, one action name ("Get my plan"), bay-time text, eyebrows cut to hero/report/reviews, report pills re-contrasted, logo mark + name, logbook reviews (lead + two), split planner/contact, working ZIP (data-zip) and form hooks (data-back, thanks box outside form, prefill), copy-1 lines applied.
Order now: hero(light) → ledger(mid) → report(deep) → oil(accent) → check(light) → break(full-bleed dark) → planner(mid) → reviews(light) → area(deep) → contact(light) → footer.

## Rhythm
10 sections. Tone sequence: light → mid → light → deep → accent → light → mid → light → deep → light. No two dark touching. One full-bleed break. Three interactive hooks minimum.

## Sections

### 1. Hero (t-light)
- Purpose: The one job + homeowner's first 5 seconds.
- Layout: family 5 (offset framed odometer document overlapping type).
- Content: H1 "Car maintenance by mileage in {{biz.city}}" + mileage input + three result rows (Due Now / Next 5k / Not Yet) + Book button + proof line.
- Media: hero-B1 (blurred odometer/dash cluster, offset frame right).
- Hooks: data-hook="whats-due-estimator", data-sw-signature="odometer-row".
- Entrance: odometer digits roll 900ms; text rises 500ms.

### 2. Service Intervals (t-mid)
- Purpose: Objection "sell me what isn't due" answered by showing intervals with Not Yet visible.
- Layout: stack of mileage bands.
- Content: Three bands (30k / 60k / 100k) each with odometer row header, services list from facts, posted times.
- Media: none.
- Hooks: data-hook="service-menu-tabs".
- Entrance: odometer rolls per band on entry.

### 3. Break (full-bleed)
- Purpose: Visual pause, Reno texture.
- Layout: break class, full-width.
- Content: Caption only.
- Media: place-reno-desert.
- Entrance: clip-path unclip.

### 4. What We Show You (t-deep)
- Purpose: Objection "find something wrong just because I'm there" answered by sample report with readings.
- Layout: grid of report cards.
- Content: Three sample findings (air filter dust, tread 4/32, brake fluid OK) with mini-odometer mileage, reading value, status pill.
- Media: detail-1 (spark plugs), detail-2 (wiper cracked), detail-3 (brake fluid).
- Hooks: data-hook="sample-report".
- Entrance: cards stagger 60ms; mini-odometers count.

### 5. Oil Type Explainer (t-accent)
- Purpose: Objection "right oil for my car" answered plainly.
- Layout: split (text left, comparison table right).
- Content: Conventional vs blend vs full synthetic; "your spec wins"; change ranges.
- Media: none.
- Hooks: data-hook="oil-type-compare".
- Entrance: text rises; table fades.

### 6. Tread & Wiper Check (t-light)
- Purpose: Self-service check before booking.
- Layout: side-by-side visual reference.
- Content: Tread depth diagram (10/32, 4/32, 2/32) + wiper new vs cracked; replace thresholds.
- Media: story-4 (tool-tread-gauge).
- Hooks: data-hook="tread-wiper-check".
- Entrance: image unclip; labels fade.

### 7. Wait or Drop Planner (t-mid)
- Purpose: Objection "how long will I wait" answered with posted times.
- Layout: interactive planner card.
- Content: Select services → total time → "wait for it" or "drop at 7:30, pick up by noon".
- Media: none.
- Hooks: data-hook="wait-or-drop".
- Entrance: card rises.

### 8. Proof & Reviews (t-light)
- Purpose: Trust via sample reviews with mileage context.
- Layout: rail of review cards.
- Content: Three reviews from facts with town, service, mileage tag, Sample label.
- Media: gallery array.
- Hooks: none.
- Entrance: cards stagger.

### 9. ZIP Checker + Hours (t-deep)
- Purpose: Objection "is this shop near me" + open-now status.
- Layout: split (ZIP left, hours right).
- Content: ZIP input + result message; hours from facts; open-now indicator.
- Media: none.
- Hooks: data-hook="zip", data-hook="open-now".
- Entrance: text rises.

### 10. Contact Form + Footer (t-light)
- Purpose: Primary conversion + demo disclaimer.
- Layout: form centered, footer below.
- Content: Multi-step quote form (mileage → due services prefilled → wait/drop → when → contact); footer with odometer row at visitor mileage + "NEXT INTERVAL: WE'LL TEXT YOU" + disclaimer + credits.
- Media: none.
- Hooks: data-hook="quote-form", data-sw-signature="odometer-row".
- Entrance: form rises; footer odometer rolls.
## Build notes (resume, fast)
- `[[quote]]` args now use `{{services.N.short}}` tokens (multi-word names split into broken args).
- Report card 3 used `tool-tread-gauge` twice → swapped to slot `detail-4` (brake fluid photo, matches its heading).
- Injected base reset is unlayered and beats `@layer` margins → unlayered flow-spacing block at end of style.css.
- 320px overflow fixed (oil grid `minmax(0,1fr)`, compact table < 390, footer odo-row wraps).
- Open issue: media are placeholder stubs; OG image falls back to plain color until real hero webp lands.
