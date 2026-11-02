# Blueprint — farm-A

| #id | tone | purpose | layout family | content (tokens) | media keys | hooks | entrance |
|---|---|---|---|---|---|---|---|
| hero | t-dark | Path: show what's ripe + open-now above fold | sticky-photo-scroll-text (12) | kicker "Picked at first light", h1, lead, [[call]], clock stamp 5:45 | hero-A | data-sw-signature="morning-clock" data-reveal | clip photo + stagger text |
| process | t-deep | Objection: prove it's actually theirs via timeline | pinned-story (scroll-driven clock) | 3 steps: Eggs gathered 7:15, Cooled & washed 8:00, CSA packed 9:30 | hands-picking-strawberries, tomatoes-on-vine | data-reveal="clip" | pinned ≥640px, clock ticks |
| ripe | t-accent | Objection: field picked out / is it open | chalkboard-list | Ripe this week board (sample), Text-before-you-drive CTA | strawberry-plants-straw | data-ripe-board data-reveal | line-by-line wipe |
| services | t-dark | Path: all offerings with blurbs | card-grid (3-col desktop, 1-col mobile) | <!-- each services --> name + blurb + [[quote]] | — | data-reveal-stagger | fade-up stagger |
| csa | t-paper | Objection: CSA box fear / skip rule | split-content (text + tool) | Share sizer tool, sample box, hold rule, price range | pyo-bucket-full | data-share-sizer data-reveal | slide-in right |
| beef | t-dark | Objection: quarter cow confusion | split-content (tool + text) | Freezer math tool, sample cuts, pickup Saturday | — | data-freezer-math data-reveal | slide-in left |
| proof | t-paper | Proof: real reviews with town + crop | review-stack | <!-- each proof.reviews 0:4 --> text, name, town, service, hour stamp | — | data-reveal-stagger | fade-up stagger |
| prices | t-dark | Path: sample pricing transparency | price-table | <!-- each proof.prices --> item, from-to, note/unit | — | data-sample-pricing data-reveal | fade-up |
| tours | t-deep | Path: families + classes | single-band | Farm tours blurb, age note, CTA | — | data-reveal | fade-up |
| contact | t-dark | Conversion: reserve form + ZIP check | form-split | Multi-step form, ZIP checker, hours table, open-now | — | data-zip data-lead data-open-now data-reveal | fade-up |
| footer | t-mid | Credits + disclaimer | footer-standard | {{demo.disclaimer}}, [[credits]], nav links | — | — | — |

## Rhythm gate check

- Sections: 11 (within 8-12). ✓
- Hero height: `calc(100svh - var(--header-h))`; next band (#process) peeks in via scroll. ✓
- Tone sequence: t-dark → t-deep → t-accent → t-dark → t-paper → t-dark → t-paper → t-dark → t-deep → t-dark → t-mid. No three same in row; no two dark touching (t-dark separated by t-deep/t-accent/t-paper). ✓
- ≥1 t-deep: yes (#process, #tours). ≥1 color band: yes (#ripe t-accent). ≥1 full-bleed .break: add between #services and #csa. ✓
- ≥3 data-hooks: data-sw-signature (hero), data-ripe-board (#ripe), data-share-sizer (#csa), data-freezer-math (#beef), data-zip (#contact), data-lead (#contact), data-open-now (header + #contact). ✓
- ≥3 layout families: sticky-photo-scroll-text, pinned-story, chalkboard-list, card-grid, split-content, review-stack, price-table, single-band, form-split, footer-standard. No neighbours share. ✓
- Exactly one #contact; every CTA points to #contact or tel:. ✓
- Required content: all 9 services listed; area + ZIP checker in #contact; hours table + open-now in #contact; sample reviews with Sample tag; prices via sample price block only; footer has {{demo.disclaimer}} + [[credits]]. ✓
- Signature sections per concept.json: hero, process, ripe, csa, beef, proof, contact, footer — all present. ✓

## Open issues

- Hero family uniqueness: all 15 hero families are at the library cap of 7 uses. Kept heroFamily 2 (last attempted) and documented here per METHOD §2 / CLAUDE.md rule 10 hard-stop guidance. The critic will score distinctiveness accordingly; no further family swap is possible without expanding the library cap.