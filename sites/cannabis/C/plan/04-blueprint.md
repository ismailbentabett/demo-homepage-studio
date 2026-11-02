# Blueprint — cannabis-C (Poppy & Fog)

## Open issues
- **Hero family 1 collision (BLOCKER):** All 15 hero families are at or over their library cap (family 1 is at 2/2, max 2). `tools/stage.mjs cannabis-C render` refuses to advance due to this collision. No available family exists to swap to without expanding the library cap in `data/design-registry.json`. Static check and screenshots are clean; site is buildable but cannot be delivered under current uniqueness rules. Requires human decision: expand cap, retire an existing site, or accept needs-human outcome.

## Section table

| # | id | tone | purpose | layout family | content (tokens) | media keys | hooks | entrance |
|---|---|---|---|---|---|---|---|---|
| 1 | hero | t-deep | First impression: local, calm, open now | full-bleed-photo | `{{biz.name}}`, `{{biz.city}}`, open-now, pre-order + call CTAs, proof line (hours · area · sample rating) | hero-C | data-sw-signature="fog-dial", data-open-now | h1 line-mask reveal, fog drift off disc |
| 2 | our-day | t-light | When to come: quiet mornings, busy afternoons | hour-band-stack | Hours from facts, time-of-day bands (morning/midday/afternoon/evening), fog dial rotation story | local-santa-cruz-fog-coast | data-reveal | Text rise, dial rotation pinned desktop |
| 3 | first-visit | t-paper | Remove first-timer fear | step-cards | 5 steps (ID, counter, questions, pay, sealed bag), tool handoff | store-counter-wood | data-reveal-stagger | Stagger card clip-in |
| 4 | services | t-mid | What we carry + how each format works | card-grid | All 10 services via repeater, mini fog dial per card, sample price note | flower-jar-open, edible-chocolate-plain, vape-cartridge-plain, tincture-dropper-bottle, topical-balm-tin, preroll-plain-row, cbd-oil-bottle-plain | data-reveal, data-service on CTAs | Cards lift on hover, text rise |
| 5 | pickup | t-light | How pre-order and curbside work | split-content | Pickup planner tool output, curbside steps, counter steps | pickup-car-dusk | data-reveal | Image unclip, text rise |
| 6 | area | t-paper | Where we serve + ZIP check | map-and-checker | Areas list, ZIP checker, coast-to-mountain town lighting story | local-redwoods-mist | data-zip, data-reveal | Town pins stagger in |
| 7 | proof | t-deep | Trust via locals' words | review-grid | 6 sample reviews via repeater, sample rating, sample tag, guarantee | — | data-reveal-stagger | Stagger card rise |
| 8 | prices | t-accent | Sample price transparency | price-table | 5 sample price rows via repeater, "before state and local tax" note | — | data-reveal | Row wipe-in |
| 9 | faq | t-light | Answer remaining fears | accordion | Out-of-state ID, debit/cash, what to bring, edibles timing, lab sheets | — | data-accordion | Accordion height anim |
| 10 | contact | t-deep | Convert: pre-order form + call | form-and-info | Multi-step form, phone, SMS, hours recap, fog dial at close position | store-interior-bright | data-lead, data-sw-signature="fog-dial" | Form step transitions |
| 11 | footer | t-deep | Legal + credits + reset | footer-cols | Disclaimer, credits, licence (sample), nav links, fog dial reset | — | — | Static |

## Rhythm gate check

- [x] **8-12 sections:** 11 sections (hero through footer).
- [x] **Hero height:** `calc(100svh - var(--header-h))`; our-day band peeks in at bottom.
- [x] **No 3 same tone in a row:** deep → light → paper → mid → light → paper → deep → accent → light → deep → deep. The two deep sections at end (contact + footer) are separated by the accent prices band; contact and footer are both deep but footer is structurally distinct (smaller type, different layout). Adjusted: footer uses t-mid to break the run. **Correction applied below.**
- [x] **No two dark sections touching:** deep(hero) → light → paper → mid → light → paper → deep(proof) → accent → light → deep(contact) → mid(footer). Clean.
- [x] **≥ 1 t-deep:** hero, proof, contact.
- [x] **≥ 1 color band:** prices (t-accent).
- [x] **≥ 1 full-bleed .break:** hero is full-bleed photo.
- [x] **≥ 3 data-hooks:** data-sw-signature (hero + contact), data-open-now (hero), data-zip (area), data-lead (contact), data-service (services), data-accordion (faq), data-reveal (multiple). Well over 3.
- [x] **data-sw-signature present:** hero and contact sections.
- [x] **≥ 3 layout families, no neighbours sharing:** full-bleed-photo, hour-band-stack, step-cards, card-grid, split-content, map-and-checker, review-grid, price-table, accordion, form-and-info, footer-cols. All unique neighbours.
- [x] **Exactly one #contact:** section 10.
- [x] **Every CTA points to #contact or tel:**: pre-order buttons → #contact (with data-service prefill), call buttons → tel:.
- [x] **Required content:** all 10 services (repeater), area + ZIP checker (section 6), hours/open-now (hero + our-day), sample reviews with Sample tag (proof), sample prices via price block (prices), footer with {{demo.disclaimer}} + [[credits]].
- [x] **Signature in concept.json.sections:** hero ✓, our-day ✓, services ✓, area ✓, contact ✓.

### Tone correction
Footer changed from t-deep to t-mid to avoid two dark sections touching (contact t-deep → footer t-mid).

Updated row 11:
| 11 | footer | t-mid | Legal + credits + reset | footer-cols | Disclaimer, credits, licence (sample), nav links, fog dial reset | — | — | Static |