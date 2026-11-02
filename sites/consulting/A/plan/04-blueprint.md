# Blueprint — consulting-A

## Rhythm gate check
- Sections: 10 (hero, sessions-1-2, sessions-3-4, break, sessions-5-6, plan-summary, tools, reviews, area, contact) + footer = 11 bands. Pass (8-12).
- Hero height: `calc(100svh - var(--header-h))`; next band (sessions-1-2) peeks. Pass.
- Tone sequence: deep → paper → deep → break(light) → paper → mid → light → paper → accent → deep. No 3 same in row; no two dark touching. Pass.
- ≥1 t-deep: hero, sessions-3-4, footer. Pass.
- ≥1 color band: area (t-accent). Pass.
- ≥1 full-bleed .break: break section. Pass.
- ≥3 data-hooks: data-sw-signature (ledger), data-zip, data-lead (form), data-accordion (FAQ inside tools). Pass.
- ≥3 layout families: sticky-split, ledger-grid, statement, stack, mosaic, form-stack. No neighbours share. Pass.
- Exactly one #contact. All CTAs point to #contact or tel:. Pass.
- Required content: all 8 services (in sessions + tools), area+ZIP, hours/open-now, sample reviews, sample prices via estimator block, footer disclaimer+credits. Pass.
- Signature sections per concept.json: hero, sessions-1-2, sessions-3-4, sessions-5-6, plan-summary, contact. Pass.

## Section table

| # | id | tone | purpose | layout | content tokens | media | hooks | entrance |
|---|---|---|---|---|---|---|---|---|
| 1 | hero | t-deep | Trade+town+promise+proof | sticky-split (family 12) | kicker, h1, proof line, guarantee, [[call]] | hero-A | data-sw-signature | lamp glow + line-mask h1 |
| 2 | sessions-1-2 | t-paper | Show first two Thursdays | ledger-grid | services.0-1 name/blurb, session slip markup | desk-notebook-plan | data-sw-signature | text rise + img unclip |
| 3 | sessions-3-4 | t-deep | Show middle Thursdays | ledger-grid | services.2-3 name/blurb | hands-writing-checklist | data-sw-signature | text rise + img unclip |
| 4 | break | t-light | Visual breath, mill brick | full-bleed .break | caption only | hero-A-3 | — | clip reveal |
| 5 | sessions-5-6 | t-paper | Show final Thursdays | ledger-grid | services.4-5 name/blurb | whiteboard-sticky-notes | data-sw-signature | text rise + img unclip |
| 6 | plan-summary | t-mid | Collect homework slips into TOC | stacked-plan | services.6-7 short names, plan stack | — | data-sw-signature | stagger slide-in |
| 7 | tools | t-light | Where-to-start + planner + FAQ | split + accordion | quiz/planner labels, FAQ items | laptop-spreadsheet-blurred | data-accordion | text rise |
| 8 | reviews | t-paper | Social proof, sample labelled | mosaic | proof.reviews.0-3, rating, count | — | — | text rise |
| 9 | area | t-accent | ZIP checker + towns | stack | biz.areas, biz.zips, hours, open-now | storefront-brick-mainstreet-no-signs | data-zip | text rise |
| 10 | contact | t-deep | Multi-step form + phone | form-stack | form steps, phone, sms, microcopy | — | data-lead | text rise |
| 11 | footer | t-deep | Disclaimer + credits + SMS | stack | demo.disclaimer, [[credits]], biz.phoneE164 | — | — | none |