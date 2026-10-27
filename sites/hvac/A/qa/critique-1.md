COPY: ok

## Five-second test (DOM-only, no screenshots)

At 1440: h1 "AC repair in Las Vegas run like a ticket" states trade + city + outcome in 8 words. Phone visible in header and hero CTA. Proof line shows sample diagnostic range and open-now hook. Next section (#symptoms) peeks below hero fold. At 390: h1 wraps to ~3 lines; both CTAs (Call, Price it) are above the fold based on CSS min-height calc(100svh - header-h). Clear what/where/why/what-next.

## Categories

### firstScreen — 8.5
Earned: trade+city+outcome in h1, phone visible, proof line with sample price, two distinct CTAs (call primary visual weight via icon, Price it secondary), next band peeks.
Deductions:
- dist/index.html line 577: h1 is 8 words exactly but "run like a ticket" is a metaphor that may not land instantly for all homeowners; borderline -0.5 for clarity vs anchor "outcome in ≤8 words". Keeping at 8.5 because the lead paragraph immediately clarifies.
- No screenshot evidence of next-band peek pixel count; DOM shows hero min-height calc(100svh - var(--header-h)) so content below should peek, but cannot verify 40-120px without render. Score capped at 8.5 until screenshots confirm.

### distinctiveness — 8.5
Earned: Ticket Clock Rail signature present in hero (line 574), process story (line 616), reviews (line 744), footer (line 944 data-sw-signature). Timestamp pills, mono labels, sage rail. Palette (desert charcoal + saltbush sage + sodium signal) differs from typical HVAC blue/orange. Type pair Manrope/Outfit/DM Mono is distinctive.
Deductions:
- Signature appears in 4 sections as required, but the rail is a thin 2px line (line 338 CSS) that may read as decoration at small sizes or low attention. Without screenshots cannot confirm it "does real work" beyond marking entries. -0.5 for risk of reading as ornament.
- Services grid (lines 655-717) uses standard 3-column card layout; same shape repeated. Not fatal but flattens distinctiveness mid-page. -0.5.
- Cannot verify sibling uniqueness without screenshots of hvac-B/C. Score held at 8.5 pending visual confirmation.

### type — 9.0
Earned: Manrope display with tight tracking (-0.03em line 311), Outfit body at fluid scale ≥1rem (line 292 fs-1 clamp), DM Mono for timestamps/prices/kickers with tabular-nums (line 318, 339). Scale contrast: h1 clamp 2.6rem-5rem vs body 1rem. Lead paragraph set apart (line 316 .lead class). Prices use mono with tabular figures. No orphans visible in DOM headings. ≤5 distinct sizes on screen (fs--1 through fs-h1).
Deductions: none observed in DOM. Scores 9.0.

### layout — 8.5
Earned: 10 sections with alternating tones (dark/paper/deep/paper/paper/accent/deep/paper/dark/paper). Asymmetric hero grid (line 379 1fr 1fr with sticky media). Full-bleed break photo (line 647 sec-break). Dense services grid vs quiet hot-day stack-center. Process story uses pinned scroll layout.
Deductions:
- Process story min-height calc(4 * 55svh + 100svh) = 320svh (line 404). This is ~3.2 screens of pinned scroll for one idea (the ticket timeline). Rubric §3.4 caps pinned story over calc(n × 55svh + 100svh) or >4 screens at -1.0. At n=4 this equals the threshold exactly; borderline. -0.5 for density risk.
- Two t-paper sections touch (#symptoms t-paper line 589, #services t-paper line 652) with only #process t-deep between them. Not three-in-a-row but the rhythm reads paper-deep-paper-paper which risks flatness. -0.5.

### photo — 7.0
Earned: All frames have descriptive alt text (lines 571, 621, 628, 634, 640, 648). Consistent aspect ratios (4/3 hero, 16/9 process mobile, 4/3 process desktop, 60svh break). Placeholders are on-topic (condenser, gauges, multimeter, coil rinse, drain line, desert sunset). Global grade filter applied uniformly (line 294 saturate/contrast/sepia/hue-rotate).
Deductions:
- All images are placeholders (placeholder-hero-A1.jpg etc.). Cannot verify art direction, crop thirds, or sequence storytelling without real media. Placeholder mode expected per instructions, but photo score reflects absence of executed photography. -1.5 from anchor 8.5 baseline.
- Photo credits say "Photo by unknown on Pexels" (line 965) — generic attribution suggests placeholder, not curated shoot. Acceptable for demo but limits score.
- Score: 7.0 (floor 6, pass mark 8.5 in fast mode; this will need elevation or real media to pass).

### copy — 9.0
Earned: Voice matches concept sentences ("readings on paper", "cause named and priced before we touch anything" line 578). Specific trade nouns (capacitor, superheat, PSI, mastic, condensate drain, service valve). Sample labels on every review (lines 754, 760, 766, 772), every price (lines 823, 830, 837, 844, 851), aggregate rating (line 747). Buttons named for action ("Price it", "Call", "Book this diagnosis", "Send request"). No banned phrases detected. Microcopy under form steps (fieldsets with legends). One consistent primary action name "Price it" throughout services.
Deductions: none observed. 9.0.

### mobile — 8.5
Earned: Mobile bar fixed bottom with call + Price it (lines 969-972), min-height 44px (line 490). Header hides on scroll (line 344). Tap targets ≥48px on buttons (line 321 min-height 48px). Form inputs full-width with padding (line 467). No horizontal scroll indicators in CSS. Process story unstacks below 640px (line 403 media query removes pin).
Deductions:
- Mobile bar does not explicitly hide on scroll-down or over form in CSS; .is-hidden class exists (line 489) but requires JS behavior not verifiable from DOM alone. If bar covers form submit button on small screens, that is a -0.5. Cannot confirm without screenshots. Score 8.5 pending verification.
- Process frame at mobile uses aspect-ratio 16/9 (line 401) which is fine, but pinned layout removed below 640px means 4 tall entries stack vertically — long scroll on phone. Acceptable but not composed-for-phone. -0.5.

### a11y — 9.0
Earned: Skip link (line 532). Focus visible 3px solid signal with 3px offset (line 298). All form inputs have labels (lines 868, 899, 912, 925-930). aria-live on symptom output (line 606) and zip answer (line 807). Reduced motion: CSS disables all transforms/animations (lines 230-235); content visible without JS (no-js rules lines 80-90). Heading order: one h1, h2s for sections, h3s for cards — no skips observed. Forced colors borders on interactive elements (lines 238-241, 516-518). Print stylesheet hides nav/bar/rail (lines 509-513).
Deductions: none observed in DOM. 9.0.

### motion — 8.0
Earned: Intro split-text on h1 (line 577 data-split="lines"). Reveal variants: fade (default), clip (lines 595, 613, 801, 862), stagger (lines 655, 749, 817). Process story uses pinned scroll with timestamp lighting (concept.json). Hover hairline underline (concept motion spec). Reduced motion respected via CSS.
Deductions:
- Fewer than 3 distinct hooks beyond plain reveals visible in DOM: reveal-fade, reveal-clip, reveal-stagger, split-text. That is 4, meeting the ≥3 threshold. However, the signature scroll-dial (photo pan/crop per entry) and count-up on sample chips are JS-driven and cannot be verified from DOM alone. If app.js fails to implement them, motion drops to basic reveals. -1.0 for uncertainty on signature motion execution.
- Same reveal pattern (translateY + opacity) applied broadly; variety comes from clip/stagger modifiers but base easing is identical. -0.5 for homogeneity risk.
- Score: 8.0.

### wow — 8.0
Earned: Symptom sorter tool (lines 595-608) with live aria-live output and handoff to booking. Hot-day printable checklist (lines 726-737) with print button. Both tied to thesis (ticket/process transparency).
Deductions:
- Tool output is plain text in a dashed-border div (line 393 .tool-output). No designed artifact (no sketch, no printable sheet with branding, no visual diagnosis card). Rubric §3.10 docks -1.0 for "tool's output is a plain text line". Applied.
- Wow moment depends on JS execution; static fallback is just the select + empty output div. Reduced-motion/static version loses the interactive payoff. -0.5 for weak static form.
- Score: 8.0 (but note: 8.0 is below fast-mode pass mark of 9.0; needs elevate).

### polish — 8.5
Earned: SVG favicon + apple-touch-icon (lines 20-21). OG image 1200x630 (lines 13-15). JSON-LD HVACBusiness with hours/area/phone (line 22). Theme-color (line 9). Consistent 2px radius on buttons/tags (lines 321, 335). Print stylesheet present (lines 509-513). Lazy loading on non-hero images. Hero poster preloaded (line 25).
Deductions:
- Mixed icon stroke widths not verifiable from DOM (SVG symbols all use stroke-width="2" — consistent). No emoji icons. No `transition: all` in CSS. Radius consistent at 2px.
- Footer credits generic "Photo by unknown on Pexels" (line 965) lacks specificity; minor polish miss. -0.5.
- No evidence of concentric nesting or system-level radius hierarchy beyond uniform 2px. Adequate but not exceptional. -0.5.
- Score: 8.5.

## Arithmetic

14×8.5 + 12×8.5 + 10×9.0 + 10×8.5 + 8×7.0 + 8×9.0 + 7×8.5 + 7×9.0 + 12×8.0 + 8×8.0 + 4×8.5
= 119 + 102 + 90 + 85 + 56 + 72 + 59.5 + 63 + 96 + 64 + 34
= 840.5 / 100 = 8.41

Weighted score: 8.41

## Must

(none — no DEMO-RULES breaches, no a11y blockers, no unlabeled samples, no invented claims detected in DOM)

## Should

1. **where:** dist/index.html line 393 (.tool-output)
   **problem:** Symptom sorter output is a plain dashed-border div with no visual design; reads as debug UI, not a homeowner-facing artifact.
   **fix:** Style .tool-output as a ticket-stub card: add left border 2px solid var(--accent), background var(--bg), padding var(--s-4), mono timestamp prefix "DIAGNOSIS" above the result text. Make it feel like part of the ticket system.

2. **where:** dist/index.html lines 655-717 (.svc-grid)
   **problem:** Services grid uses identical card shapes in a 3-col repeat; reads as template filler mid-page, diluting the ticket signature.
   **fix:** Break the grid into two groups: emergency repairs (first 4) as a dense 2x2 block with timestamp labels, and installations/upgrades (last 6) as a wider list with brief specs. Thread the rail or timestamp motif into at least one group header.

3. **where:** dist/index.html line 404 (.sec-process min-height)
   **problem:** Pinned process story spans calc(4*55svh + 100svh) ≈ 3.2 screens; borderline excessive for one narrative beat.
   **fix:** Reduce to 3 entries (Arrived, Cause, Fixed) and merge Reading into Cause. Or reduce min-height multiplier to calc(3 * 55svh + 80svh). Keeps the signature without exhausting scroll budget.

4. **where:** dist/index.html line 965 (.credits)
   **problem:** "Photo by unknown on Pexels" repeated 6 times signals placeholder, not curated media.
   **fix:** When real media lands, replace with actual photographer names. For now, consolidate to a single credit line: "Sample photography · Pexels contributors" to reduce visual noise.

5. **where:** dist/index.html lines 488-491 (.mobilebar)
   **problem:** No CSS rule to hide mobilebar when form is in view or on scroll-down; relies entirely on JS class toggle that cannot be verified from DOM.
   **fix:** Add IntersectionObserver in app.js to add .is-hidden when #contact enters viewport. Verify with 390x844 screenshot that submit button is fully tappable without bar overlap.

## Elevate

1. **Category: photo (7.0, weight 8)** — Move: Replace placeholder hero and process frames with art-directed desert-dusk condenser photography. Shoot one unit at four crop positions (wide establishing, fan grille close, capacitor panel, drain pan) so the pinned scroll story actually pans across a single coherent subject. Apply the existing global grade filter as the unifying look. This turns photo from placeholder-tax to signature-enabler.

2. **Category: wow (8.0, weight 8)** — Move: Redesign the symptom sorter output as a printable "diagnosis ticket" that mirrors the service ticket format: mono header with timestamp, symptom row, 2-3 likely causes as numbered items, homeowner checks as checkboxes, and a tear-off CTA strip ("Call now / Book soon / Watch it"). The tool's output becomes a physical artifact in the signature language, not a text dump. Tie the print stylesheet to this ticket layout so the printed version is branded and useful.