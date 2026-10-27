COPY: ok

## Five-second test (no screenshots available)

From `dist/index.html`: the hero presents "Hillside builder in Asheville" with a topo-map SVG, ZIP checker, proof line ("21 yrs · Sample rating 4.9"), and phone visible in header and hero-actions. A homeowner understands the trade (hillside builder), the city (Asheville), and what to do (check ZIP or call). The signature (contour lines, elevation tags, topo map) is visible in the first screen. Without screenshots I cannot verify next-band peek or fold position on 390x844.

## First screen — 8.5

What earned it: h1 states trade + city in 4 words; phone visible in header and hero-actions; proof line with years, sample rating, and service area; topo-map SVG with elevation labels and ZIP checker embedded as the functional entry point; hero section carries `data-sw-signature`. Improved from 8.0 — the signature is now delivered in the hero.

Deductions:
- Cannot verify next-band peek or fold position on 390x844 without screenshots; scored conservatively at 8 anchor +0.5 for delivered signature.

## Distinctiveness — 8.5

What earned it: Signature (`data-sw-signature`) now present in 5 sections: hero (line 910), story (line 952), services (line 995), area (line 1234), footer (line 1251) — meets the >=4 requirement. Topo-map SVG, elevation-tags, contour-line dividers thread the motif throughout. Services use numbered elevation-tags (01-08) as a recurring device. Palette (Blue Ridge Slate + Moss + Rust) and type pair (Zilla Slab / Source Serif 4 / DM Mono) remain unique per concept. Improved from 7.5 — signature now appears in all required sections.

Deductions:
- Cannot verify sibling distinctiveness against general-A and general-B without screenshots; cover-the-logo test not possible.

## Typography — 8.5

What earned it: Three families loaded correctly (Zilla Slab display, Source Serif 4 body, DM Mono accent); fluid scale from --fs--1 to --fs-h1; body clamp >=16px; paragraph max-width 65ch; kicker uses tracked mono uppercase; hours use en-dash ranges. Tabular numerals now explicitly applied to hours-block dl/dd, timeline-list dt/dd, est-output, tool-result, tel links, [data-count] (lines 427-432). Improved from 8.5 — tabular numeral coverage confirmed.

Deductions:
- Cannot verify orphan control or scale-contrast moments without screenshots.

## Layout and rhythm — 8.5

What earned it: Sections alternate t-deep / t-mid / t-paper / t-accent tones; hero-grid, story-bands with alternating RTL direction (lines 625-626), svc-grid 3-col, break full-bleed, tool-sections with tool-grid, review-grid, area-grid, footer-grid provide >=3 layout families. Contour-line dividers between sections. Two dark bands (hero t-deep, break t-deep) are separated by story t-mid and services t-paper — no adjacent dark collision. Improved from 8.0 — layout families now include story-bands alternation and tool-sections.

Deductions:
- Cannot verify density map variation or blank gaps without full-page screenshots.

## Photo and video — 7.5

What earned it: Consistent CSS filter applied via `.frame img` (saturate .82, contrast 1.06, sepia .06, hue-rotate -2deg); images have width/height attributes and lazy loading. Credits simplified to single plain-text li "Photos are placeholders for demo purposes" (line 1375) — no broken `<a>` tags. Improved from 7.0 — credits markup fixed.

Deductions:
- All images remain placeholders with alt text reading "Placeholder for ..." (e.g. lines 944, 965, 1063). Placeholder integration is visually ugly and fails the "one grade across every photo" anchor (-0.5 from 8 anchor). Pass mark is 8.5; this remains below pass.

## Copy — 9.0

What earned it: Mobilebar CTA now says "Get a number" (line 1386), matching hero CTA "Get a number" (line 917) and form heading "Get a number for your project" (line 1254) — consistent primary action name. Reviews carry explicit "Sample" tag in footer (lines 1195, 1205, 1215, 1225). Estimator has "Sample pricing" label (line 1150). Voice matches concept: specific trade nouns ("stepped footings", "moisture meter", "tapered columns"). No banned phrases detected. Improved from 8.5 — CTA naming inconsistency resolved, sample labels added.

Deductions:
- None.

## Mobile — 8.0

What earned it: Mobilebar with call and anchor links (lines 1384-1387); buttons and inputs have min-height 48px; header hides on scroll via data-header.is-hidden; mobilebar hides via .is-hidden class. Scored at 8 anchor.

Deductions:
- Cannot verify h1 line count, fold position, or whether mobilebar covers form/footer without 390x844 screenshots.

## Accessibility — 8.5

What earned it: Skip link present; focus-visible outline 3px solid with 3px offset; forced-colors borders on interactive elements; reduced-motion safety net disables all animation; honeypot and time-trap in form; review stars use aria-label. Credits no longer have broken `<a>` tags (line 1375 is plain text). Improved from 8.0 — broken credit links eliminated.

Deductions:
- Cannot verify that all content is visible in reduced-motion or JS-off states without screenshots.

## Motion and interaction — 8.0

What earned it: Kit provides reveal, split-text, rotator, counter, marquee, compare hooks. Hero h1 uses data-split="lines" (line 914). Sections use data-reveal. Story bands have elevation-tag data-count for counter climb. Estimator has data-est-sketch for output visualization. Three distinct hooks beyond plain reveals: split-text hero, counter elevation-tags, clip reveal on story frames. Improved from 7.5 — three hooks now identifiable.

Deductions:
- Cannot verify timing, reversibility, or whether story is pinned only at >=640px without screenshots.

## Wow moment — 8.0

What earned it: Lot & slope check tool (lines 1068-1092) with three checkboxes and live result is a functional homeowner tool tied to the steep-lot thesis. Cost estimator (lines 1145-1180) with project type, size input and sketch output. Both tools use the signature's elevation/contour language. Improved from 7.0 — tools now exist and are concept-tied.

Deductions:
- Cannot verify tool output design quality or whether the wow moment reads as two connected moments without screenshots.

## Polish — 8.5

What earned it: SVG favicon and apple-touch-icon preloaded; OG 1200x630 declared; theme-color set; JSON-LD GeneralContractor with openingHoursSpecification; print stylesheet for estimator; lazy images with width/height. Credits simplified to plain text — no broken links. Border radius consistent at var(--radius) 2px throughout including sample-tag. Improved from 8.0 — credits fix and radius consistency confirmed.

Deductions:
- None identified from HTML alone.

## Arithmetic

14×8.5 + 12×8.5 + 10×8.5 + 10×8.5 + 8×7.5 + 8×9.0 + 7×8.0 + 7×8.5 + 12×8.0 + 8×8.0 + 4×8.5 = 119 + 102 + 85 + 85 + 60 + 72 + 56 + 59.5 + 96 + 64 + 34 = 832.5 / 100 = 8.33

## Must

None. Both round-1 mustFix items (broken credit links, missing sample tags on reviews) are resolved.

## Should

1. **Photo alt text**: All images have alt text reading "Placeholder for crew-from-behind" etc. Fix: replace with descriptive scene captions that read as intentional art direction (e.g., "Crew framing a hillside addition from behind, lumber and nails visible") so placeholders feel deliberate rather than broken.
2. **Mobile hero composition**: Cannot verify from HTML alone whether the topo-map panel stacks above the h1 on phone viewports or whether the mobilebar hides when scrolling past the form. Fix: confirm in render check that the hero is re-composed for 390x844 and the mobilebar does not overlap the footer contact info.
3. **Motion verification**: Cannot verify timing, reversibility, or pin behavior without screenshots. Fix: confirm in render check that the story bands are pinned only at >=640px and that the intro runs under 1.2s.

## Elevate

1. **Photo** (weight 8, weakest at 7.5): Replace placeholder alt text with descriptive scene captions and add a duotone or color-grade overlay using the brand palette (--accent #5A7D7C) so placeholders feel like a deliberate graphic treatment tied to the contour signature. This transforms ugly placeholders into an intentional art-directed look.
2. **Mobile** (weight 7, second weakest at 8.0): Recompose the hero for phone viewports so the topo-map panel stacks above the h1 with the ZIP checker as the primary thumb-target, and ensure the mobilebar hides when scrolling past the form section to prevent overlap with the footer contact info. This makes the phone experience feel designed rather than collapsed.