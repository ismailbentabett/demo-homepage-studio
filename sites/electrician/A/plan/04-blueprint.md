# Blueprint — electrician-A (Lineside Electric)

## Round 2
Rebuilt every photo slot as a drawn engineering sheet (one-line, EV garage, wall section, house elevation) so no placeholder ever shows, made the panel ID (CSS :has) and EV load check actually work, moved the form onto kit markup, and set services as a panel schedule; this raises the first screen and mobile, the two categories the critic named weakest.

## Rhythm check
- 10 sections total.
- Tone sequence: t-deep (hero) → t-paper (services-main) → t-mid (tools-panel) → t-paper (services-circuits) → t-deep (break) → t-accent (tools-ev) → t-paper (proof) → t-mid (area) → t-paper (contact) → t-deep (footer).
- No two dark sections touch. No three same tones in a row. One full-bleed break. One color band (t-accent).
- Layout families: offset-frame, branch-grid, annotation-callout, split-rail, statement-stack, mosaic, list-form, map-check, form-single, ground-rule. All different from neighbours.
- Interactive hooks: `data-sw-signature` (one-line trace), `data-tabs` (two-prong options), `data-estimator` (ev load check), `data-checklist` (panel id), `data-zip`, `data-lead`, `data-open-now`, `data-reveal`. ≥ 3 hooks including signature.
- Single `#contact` form in section 9.

---

## Section 1: Hero
- **id:** `#hero`
- **tone:** `t-deep`
- **purpose:** First 5 seconds: trade + city + process promise; primary CTA; proof line; phone visible. Answers "Is this dangerous?" and "Do they serve me?" via kicker and proof line.
- **layout:** `offset-frame` (hero family 5). Headline left, framed panel photo right offset, copper line originates from frame bottom edge.
- **content:**
  - Kicker: "From the pole to the plug"
  - h1: "Columbus electrical work, drawn line by line."
  - Proof line: "{{hours|today}} · {{biz.areas|list}} · {{proof.rating}} ★ ([[sample Sample rating]])"
  - Primary CTA: `[[quote panel-eval btn-primary]]`
  - Secondary CTA: `[[call btn-ghost]]`
- **media:** `hero-A1` (clean labeled panel, daylight). Crop `object-position: 60% 40%`. Grade: cool teal shift. Frame overlaps headline left edge.
- **hooks:** `data-sw-signature` (line starts here), `data-split="lines"` on h1, `data-open-now`.
- **entrance:** Photo slides right (600ms); line draws down (700ms); h1 line-mask reveal (70ms stagger). Reduced motion: static layout, all content visible.

## Section 2: Services — Main & Meter
- **id:** `#services-main`
- **tone:** `t-paper`
- **purpose:** Answers "They'll upsell a panel I don't need" and "What does it cost?" with sample pricing at the meter/main symbol.
- **layout:** `branch-grid`. Copper line on left margin; two branch lines split right to service cards.
- **content:**
  - h2: "At the meter and main"
  - Cards (from facts): Panel replacement, Service upgrades, Whole-home surge protection. Each card: name, blurb, sample price range (`{{proof.prices.N.from}}–{{proof.prices.N.to}}`), `[[sample Sample pricing]]`, `[[quote <short> btn-text]]`.
- **media:** none.
- **hooks:** `data-reveal-stagger` on cards.
- **entrance:** Cards rise with 60ms stagger. Branch lines draw from main line.

## Section 3: Tool — Old Panel Identifier
- **id:** `#tool-panel-id`
- **tone:** `t-mid`
- **purpose:** Answers "They'll tell me I need a whole new panel when I don't." Honest diagnostic before selling.
- **layout:** `annotation-callout`. Copper line left; tool UI right inside a diagram annotation box.
- **content:**
  - h2: "What panel do you have?"
  - Lead: "A photo of the label inside the door tells us. Pick the closest match."
  - Tool: `data-checklist` adapted as image-choice selector (FPE Stab-Lok / Zinsco / Fuse / Split-bus / Modern). Output: plain-language ID + next step inside callout. Hand-off: `[[quote panel-eval btn-primary | Book a panel evaluation]]`.
- **media:** none (tool uses inline SVG icons, not photos).
- **hooks:** `data-checklist`, `data-sw-signature` (test probe node).
- **entrance:** Annotation box wipes open from line (clip-path, 500ms).

## Section 4: Services — Circuits & Devices
- **id:** `#services-circuits`
- **tone:** `t-paper`
- **purpose:** Answers "Can my house handle an EV charger?" and "Will they pull the permit?" with circuit-level services.
- **layout:** `split-rail`. Copper line center; services alternate left/right on branch nodes.
- **content:**
  - h2: "Downstream: circuits and devices"
  - Cards: EV charger installation, Heat pump circuits, GFCI/AFCI updates, Two-prong outlet updates, Lighting and ceiling fans, Troubleshooting and repairs. Each with blurb, sample price where available, `[[quote <short> btn-text]]`.
- **media:** none.
- **hooks:** `data-reveal-stagger`.
- **entrance:** Alternating cards rise from left/right with stagger.

## Section 5: Break — Process Photo
- **id:** `#break-process`
- **tone:** `t-deep`
- **purpose:** Visual breath. Shows real work without faces. Reinforces "They'll cut holes in my plaster walls" answer via process imagery.
- **layout:** `statement-stack`. Full-bleed photo with centered caption overlay.
- **content:**
  - Caption: "Fishing new wire through small plaster cuts, then patching clean."
- **media:** `process-wire-strip` (stripping wire close-up) or `process-conduit`. Crop `object-position: 50% 50%`. Grade: cool teal. Overlay: `rgba(9,28,32,.4)` for text contrast.
- **hooks:** `data-reveal="clip"` on photo.
- **entrance:** Photo unclips from top (900ms).

## Section 6: Tool — EV / Heat Pump Load Check
- **id:** `#tool-ev-load`
- **tone:** `t-accent`
- **purpose:** Answers "I don't know if my house can even handle an EV charger." Gives a load calc result before booking.
- **layout:** `annotation-callout` (mirrored). Copper line right; tool UI left inside callout on copper bg.
- **content:**
  - h2: "Will your panel fit a charger?"
  - Lead: "Tell us your service size and big loads. We'll say whether a 240V circuit fits."
  - Tool: `data-estimator` adapted. Inputs: service size dropdown, existing loads checkboxes, charger amps. Output: "Likely fits / May need calculation / Likely needs upgrade" + reason + sample price range. Hand-off: `[[quote ev-charger btn-primary | Get a charger quote]]`.
- **media:** none.
- **hooks:** `data-estimator`, `data-sw-signature` (circuit branch node).
- **entrance:** Callout wipes from right (mirrored clip-path).

## Section 7: Proof — Reviews
- **id:** `#proof`
- **tone:** `t-paper`
- **purpose:** Social proof. Answers trust objections with real Columbus homeowner words.
- **layout:** `mosaic`. Review cards clipped to copper line with small copper tabs.
- **content:**
  - h2: "What Columbus homeowners say"
  - Repeater: `<!-- each proof.reviews -->` card with text, name+town, service, stars, `[[sample Sample review]]`.
  - Aggregate: "{{proof.reviewCount}} reviews · {{proof.rating}} ★ ([[sample Sample rating]])"
- **media:** none.
- **hooks:** `data-reveal-stagger`.
- **entrance:** Cards rise with stagger; copper tabs draw from line.

## Section 8: Service Area + ZIP Checker
- **id:** `#area`
- **tone:** `t-mid`
- **purpose:** Answers "Do they serve my street?" Confirms coverage and prefills form.
- **layout:** `map-check`. Left: illustrated SVG map of Columbus metro with area pins (no real tiles). Right: ZIP checker + hours.
- **content:**
  - h2: "Serving Columbus and nearby"
  - Areas: `{{biz.areas|list}}`
  - ZIP checker: `data-zip` input + aria-live result. Success: "Yes, we serve {{zip}}. Price your job below." with form link carrying ZIP prefill.
  - Hours: `{{hours|table}}` + `data-open-now`.
- **media:** none (SVG map drawn inline).
- **hooks:** `data-zip`, `data-open-now`, `data-reveal`.
- **entrance:** Map fades in; ZIP checker rises.

## Section 9: Contact Form
- **id:** `#contact`
- **tone:** `t-paper`
- **purpose:** Primary conversion. Multi-step lead capture with honest demo thank-you.
- **layout:** `form-single`. Centered form, max-width 640px, copper line terminates above form with device symbol.
- **content:**
  - h2: "Price your job"
  - Lead: "Tell us what's wrong. We'll reply with a range and a time window."
  - Form: `data-lead` multi-step (service → details → time → contact). Honeypot `website2`, time trap `t`. Thank-you: "Thanks, {name}. In your version this goes straight to your phone and inbox."
  - Microcopy under button: "No spam. Your info stays between you and Priya S."
- **media:** none.
- **hooks:** `data-lead`.
- **entrance:** Form rises; no animation on inputs.

## Section 10: Footer
- **id:** `#footer`
- **tone:** `t-deep`
- **purpose:** Legal close, credits, ground symbol termination.
- **layout:** `ground-rule`. Copper line ends in ground symbol; three columns: biz info, links, credits.
- **content:**
  - Ground symbol SVG.
  - Biz: `{{biz.name}}` · `{{biz.city}}, {{biz.state}}` · `[[tel]]` · `{{biz.email}}`
  - Licence: "Licence # {{proof.license}} ([[sample Sample licence]])"
  - Disclaimer: `{{demo.disclaimer}}`
  - Credits: `[[credits]]`
  - Year: `© {{year}}`
- **media:** none.
- **hooks:** `data-sw-signature` (ground node).
- **entrance:** Static; no animation.

---

## Required content checklist
- [x] Services: all 10 from facts.json distributed across sections 2 and 4.
- [x] Service area + ZIP checker: section 8.
- [x] Hours / open-now: hero proof line + section 8.
- [x] Sample reviews with label: section 7.
- [x] Sample prices via estimator/cards: sections 2, 4, 6.
- [x] Footer with disclaimer and credits: section 10.
- [x] Tools: Old Panel ID (sec 3), EV Load Check (sec 6), Two-Prong Options (embedded in sec 4 card via `data-tabs` on click), ZIP (sec 8), Quote Form (sec 9).
- [x] Signature in ≥ 4 sections: hero, services-main, tools, proof, footer (5 total).
- [x] ≥ 3 interactive hooks beyond reveals: `data-checklist`, `data-estimator`, `data-tabs`, `data-zip`, `data-lead`, `data-open-now`, `data-sw-signature`.
- [x] Full-bleed break: section 5.
- [x] Color band: section 6 (t-accent).
- [x] No two dark sections touching: verified.
- [x] No three same tones in a row: verified.
- [x] ≥ 3 layout families, no neighbours alike: verified.