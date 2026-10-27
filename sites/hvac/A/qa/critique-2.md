COPY: ok

## Five-second test (DOM-only, no screenshots available)

At 1440 (inferred from CSS): h1 "AC repair in Las Vegas run like a ticket" states trade + city + outcome in 8 words. Phone visible in header and hero CTA. Proof line shows sample diagnostic range and open-now hook. Next section (#symptoms) should peek below hero fold based on `min-height: calc(100svh - var(--header-h))`. At 390 (inferred): h1 wraps to ~3 lines via clamp; both CTAs above fold. Clear what/where/why/what-next. Cannot verify pixel-level peek or fold without screenshots; score reflects DOM evidence only.

## Categories

### firstScreen — 8.5
Earned: trade+city+outcome in h1 (line 614), phone visible in header (line 584) and hero CTA (line 618), proof line with sample price and open-now (line 616), two distinct CTAs with call as primary visual weight. Next band peeks per CSS min-height.
Deductions:
- No screenshots to verify next-band peek is 40–120px or that both CTAs are above fold at 390x844. DOM supports it but cannot confirm visually. Score held at 8.5 pending render evidence.
- h1 metaphor "run like a ticket" may not land instantly for all homeowners; lead paragraph clarifies immediately (line 615). Borderline clarity risk, no deduction applied given immediate clarification.

### distinctiveness — 8.5
Earned: Ticket Clock Rail signature present in hero (line 611), process story (line 654), reviews (line 783), footer (line 983 data-sw-signature). Timestamp pills, mono labels, sage rail. Palette desert charcoal+sage+sodium differs from HVAC blue/orange norm. Type pair Manrope/Outfit/DM Mono distinctive. Services grid now split into emergency block + install list (lines 688-755) with group labels using accent rule motif, improving mid-page distinctiveness vs round 1.
Deductions:
- Rail is 2px (line 341 CSS) which may read as decoration at small sizes without screenshots to confirm visual weight. -0.5 for risk.
- Cannot verify sibling uniqueness without hvac-B/C screenshots. Held at 8.5.

### type — 9.0
Earned: Manrope display -0.03em tracking (line 314 CSS), Outfit body fluid ≥1rem (line 292), DM Mono for timestamps/prices/kickers with tabular-nums (lines 321, 338). Scale contrast h1 clamp 2.6-5rem vs body 1rem. Lead paragraph set apart (line 319). ≤5 sizes on screen. No orphans in DOM headings. Prices use mono with tabular figures (line 495). Consistent caps tracking on kickers/timestamps.

### layout — 9.0
Earned: 10 sections alternating dark/paper/deep/accent tones. Asymmetric hero grid (line 382 CSS). Full-bleed break photo (line 679). Process story reduced to 3 entries (lines 655-673) with min-height calc(3*55svh+80svh) = 245svh (line 429 CSS), within rubric threshold. Services grid split into emergency 2x2 block + install list (lines 688-755), breaking the uniform card repeat from round 1. Dense services vs quiet hot-day stack-center. Reviews use rail layout. No two adjacent sections share tone or shape.
Deductions: none observed. Improved from 8.5 to 9.0 based on verified structural fixes.

### photo — 7.0
Earned: All frames have descriptive alt text (lines 608, 659, 666, 672, 680). Consistent aspect ratios. Global grade filter applied uniformly (line 297 CSS). Placeholders are on-topic (condenser, gauges, multimeter, coil rinse, desert sunset).
Deductions:
- All images remain placeholders. No art-directed photography executed. Credits still say "Photo by unknown on Pexels" (line 1004). Placeholder mode expected per instructions but score reflects absence of executed photography. -1.5 from anchor 8.5 baseline. Same as round 1; elevate move for photo was not actionable without media curation.
- Score: 7.0. Below fast-mode pass mark 8.5; needs real media or continued elevation.

### copy — 9.0
Earned: Voice matches concept sentences. Specific trade nouns (capacitor, superheat, PSI, mastic, condensate drain, service valve, microfarads). Sample labels on every review (lines 793, 799, 805, 811), every price (lines 862, 869, 876, 883, 890), aggregate rating (line 786). Buttons named for action ("Price it", "Call", "Book this diagnosis", "Send request"). No banned phrases. Microcopy under form steps. One consistent primary action name "Price it". Diagnosis ticket copy uses mono labels and structured rows (lines 398-415 CSS).

### mobile — 8.5
Earned: Mobile bar fixed bottom with call + Price it (lines 1008-1011), min-height 44px (line 527 CSS). Header hides on scroll (line 347 CSS). Tap targets ≥48px on buttons (line 324 CSS min-height 48px). Form inputs full-width (line 504 CSS). Process unstacks below 640px (line 428 CSS removes pin).
Deductions:
- Mobile bar hide behavior requires JS IntersectionObserver; CSS class .is-hidden exists (line 526) but cannot verify execution without screenshots. If bar covers form submit on small screens, -0.5. Score held at 8.5 pending visual confirmation.
- Process entries stack vertically on mobile (no pin below 640px); long scroll but acceptable. Not composed-for-phone excellence.

### a11y — 9.0
Earned: Skip link (line 569). Focus 3px solid signal offset 3px (line 301 CSS). All form inputs labeled (lines 907, 938, 951, 964-969). aria-live on symptom output (line 643) and zip answer (line 846). Reduced motion disables all transforms (lines 230-235 CSS). Heading order correct (one h1, h2s for sections, h3s for cards). Forced colors borders (lines 238-241, 553-555 CSS). Print stylesheet present (lines 244-253, 546-550 CSS). Noscript fallback for symptom sorter (line 645).

### motion — 8.5
Earned: Split-text on h1 (line 614 data-split="lines"). Reveal variants: fade, clip (lines 632, 801, 862 data-reveal="clip"), stagger (lines 687, 788, 856 data-reveal-stagger). Process story pinned scroll with timestamp lighting (concept.json, app.js). Hover hairline underline (concept spec). Reduced motion respected. Signature scroll-dial and count-up implemented in app.js (verified module registration pattern in core).
Deductions:
- Cannot verify signature motion execution (photo pan/crop per entry, timestamp lighting) without screenshots. App.js structure supports it but visual confirmation absent. -0.5 for uncertainty (reduced from -1.0 in round 1 given code evidence).
- Base reveal easing homogeneous; variety comes from clip/stagger modifiers. Acceptable at 8.5.

### wow — 8.5
Earned: Symptom sorter tool (lines 632-646) with aria-live output and handoff to booking. Hot-day printable checklist (lines 761-777) with print button. Both tied to thesis. Diagnosis ticket CSS added (lines 397-415) with structured header/body/checks/cta-strip and print styles, addressing round 1 elevate move.
Deductions:
- HTML still uses legacy `.tool-output` div (line 643) rather than `.diag-ticket` markup. CSS exists but is not wired into the DOM; app.js may inject it dynamically, but without screenshots cannot confirm the designed artifact renders. If JS fails, fallback is plain dashed-border div (line 418). -0.5 for incomplete integration risk.
- Improved from 8.0 to 8.5 based on CSS infrastructure present; needs verification that app.js populates .diag-ticket structure.

### polish — 8.5
Earned: SVG favicon + apple-touch-icon (lines 20-21). OG 1200x630 (lines 13-15). JSON-LD HVACBusiness (line 22). Theme-color (line 9). Consistent 2px radius. Print stylesheet for diagnosis ticket (lines 409-415) and general (lines 546-550). Lazy loading on non-hero images. Hero poster preloaded (line 25).
Deductions:
- Footer credits generic "Photo by unknown on Pexels" repeated 5x (line 1004). -0.5.
- No concentric nesting hierarchy beyond uniform 2px radius. Adequate but not exceptional. -0.5.

## Arithmetic

14×8.5 + 12×8.5 + 10×9.0 + 10×9.0 + 8×7.0 + 8×9.0 + 7×8.5 + 7×9.0 + 12×8.5 + 8×8.5 + 4×8.5
= 119 + 102 + 90 + 90 + 56 + 72 + 59.5 + 63 + 102 + 68 + 34
= 855.5 / 100 = 8.56

Weighted score: 8.56

## Must

(none — no DEMO-RULES breaches, no a11y blockers, no unlabeled samples, no invented claims detected in DOM)

## Should

1. **where:** dist/index.html line 643 (.tool-output) and dist/app.js symptom-sorter module
   **problem:** Diagnosis ticket CSS (.diag-ticket) exists but HTML uses legacy .tool-output div. If app.js does not inject .diag-ticket markup dynamically, the elevate move for wow is incomplete and the tool output remains a plain dashed-border div.
   **fix:** Verify app.js symptom-sorter module populates .diag-ticket__header, .diag-ticket__body, .diag-ticket__checks, .diag-ticket__cta-strip structure. If not, replace line 643 with proper .diag-ticket markup and update app.js to fill it. Test with JS off to ensure noscript fallback remains readable.

2. **where:** dist/index.html line 1004 (.credits)
   **problem:** "Photo by unknown on Pexels" repeated 5 times signals placeholder, not curated media.
   **fix:** Consolidate to single credit line: "Sample photography · Pexels contributors" until real media lands. Reduces visual noise in footer.

3. **where:** dist/app.js mobilebar module
   **problem:** Mobile bar hide behavior over form and on scroll-down cannot be verified without screenshots. CSS class exists but execution uncertain.
   **fix:** Ensure IntersectionObserver adds .is-hidden when #contact enters viewport. Verify with 390x844 screenshot that submit button is fully tappable without bar overlap.

4. **where:** dist/index.html line 614 (h1)
   **problem:** "run like a ticket" metaphor may not land instantly for all homeowners despite immediate lead paragraph clarification.
   **fix:** Consider testing alternative phrasing like "AC repair in Las Vegas, ticketed and transparent" or keeping current if homeowner testing confirms comprehension. Low priority; monitor.

## Elevate

1. **Category: photo (7.0, weight 8)** — Move: Replace placeholder hero and process frames with art-directed desert-dusk condenser photography shot at four crop positions (wide establishing, fan grille close, capacitor panel, drain pan) so the pinned scroll story pans across one coherent subject. Apply existing global grade filter as unifying look. This turns photo from placeholder-tax to signature-enabler and is required to reach pass mark 8.5.

2. **Category: wow (8.5, weight 8)** — Move: Wire the .diag-ticket CSS into the symptom sorter output so the tool produces a branded, printable diagnosis ticket artifact in the signature language. Ensure the printed version uses the dedicated print stylesheet (lines 409-415) and includes tear-off CTA strip. Verify the static/noscript fallback also renders as a readable ticket stub, not a debug div. This completes the round 1 elevate move and pushes wow toward 9.0+.