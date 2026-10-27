# Blueprint — flooring-A (Third Coat Floor Works)

Reconstructed from concept + strategy (original file missing at hand-back).

## Rhythm gate check

- 10 sections total (hero + 8 bands + footer). Within 8–12 range.
- Hero height: `calc(100svh - var(--header-h))`; next band (quiz) peeks ~80px via negative margin on mobile / natural flow on desktop.
- Tone sequence: paper → cream → paper → deep(break) → paper → accent → paper → deep(footer). No two darks touch; no three same tones in a row.
- ≥ 1 t-deep (break, footer). ≥ 1 color band (accent CTA strip). ≥ 1 full-bleed .break (material-sawdust).
- data-hooks: data-zip, data-checklist, data-estimator, data-filter, data-form, data-sw-signature (hero rail), data-carousel (filmstrip), data-reveal. ≥ 3 hooks present; data-sw-signature on hero grit rail.
- Layout families: filmstrip (hero), split-text-image (story), checklist-tool (quiz), grid-cards (services), filter-gallery (stain picker), estimator-sketch (estimator), review-stack (proof), form-stack (contact). ≥ 3 families, no neighbours share one.
- Exactly one #contact; every CTA points to #contact or tel:.
- Required content: all 10 services listed; ZIP checker in mobile bar + form step 1; hours via {{hours|today}}; sample reviews with [[sample Sample review]]; sample prices only inside estimator (labelled); footer has {{demo.disclaimer}} + [[credits]].
- Signature (.grit-rail with data-sw-signature) appears in: hero, pinned story, proof divider, footer. Matches concept.json.signature.sections intent.

## Sections (top to bottom)

| #id | tone | purpose | layout family | content (tokens) | media keys | hooks | entrance |
|---|---|---|---|---|---|---|---|
| hero | t-paper | Trade+city+outcome + proof line + primary CTA | filmstrip (family 9) | h1 "Hardwood floor refinishing in Knoxville, TN"; kicker "{{biz.short}} · Sand & refinish · Screen & recoat"; proof "Sample $3–$5/sq ft · {{hours\|today}} · {{proof.rating}} Sample rating"; CTAs: Book a sample visit (primary) / Price it (secondary) | hero-A1 (frame 5 of strip) | data-carousel, data-sw-signature, data-reveal | Filmstrip unclip L→R 70ms stagger; grit rail draws via --sw-p |
| quiz | t-cream | Answer "refinish or recoat?" before services | checklist-tool | h2 "Refinish or recoat?"; 4-item checklist; result card with sample range + CTA "Get it checked" | detail-cupping (result context) | data-checklist, data-reveal | Clip-up reveal |
| story | t-paper | Show the sanding pass sequence (signature moment) | split-text-image (pinned ≥640) | h2 "Three passes to bare wood"; grit counter 36→60→100→STAIN→COAT; captions per step | story-1..story-4 | data-reveal, grit-rail | Pinned crossfade ≥640; stacked photos <640 |
| break | t-deep | Atmospheric breath; tone shift | full-bleed .break | Minimal caption only | material-sawdust | data-reveal | Fade-in grain overlay |
| services | t-paper | List all 10 services with blurbs | grid-cards (2-col desktop, 1-col mobile) | h2 "What we do"; repeater over services; each card has [[quote .short]] | detail-stairs (stairs card), detail-transition (transitions card) | data-reveal-stagger | Stagger 60ms |
| stain-picker | t-cream | Stain samples on your floor tool | filter-gallery | h2 "See the stain on your wood"; wood/light/sheen inputs; swatch output; "we lay real samples" note | detail-stain-samples | data-filter, data-reveal | Clip reveal |
| estimator | t-paper | Square-foot estimator with live sketch | estimator-sketch | h2 "Price your rooms"; room inputs; service select; stairs; output range labelled Sample; printable sheet | none (SVG sketch) | data-estimator, data-reveal | Sketch draws via clip-path |
| cta-strip | t-accent | Signal band driving to contact | centered-text-band | "Ready to see it on your floor?"; phone + Book CTA | none | data-reveal | Fade-up |
| proof | t-paper | Sample reviews + rating + guarantee | review-stack | h2 "From Knoxville homeowners"; rating line; 6 review cards with grit pills; guarantee; licence (sample) | finished-living (bg or gallery) | data-reveal-stagger | Stagger cards |
| contact | t-cream | Multi-step quote form + hours + ZIP | form-stack | h2 "Book a sample visit"; form[data-lead]; steps service→rooms→floor→timing→contact; hours; ZIP prefill | none | data-form, data-zip | Clip-up |
| footer | t-deep | Credits, disclaimer, nav anchors | footer-grid | {{demo.disclaimer}}; [[credits]]; anchor links; TC initials in finish sheen; grit rail completes at COAT 3 | none | grit-rail (final) | Rail completes |

## Open issues

None at blueprint stage. Original 04-blueprint.md was missing; this reconstruction follows concept + strategy + system exactly. Builder proceeds from this spec.
## Round 2 → 3
Re-cut the hero: full-width h1 with the outcome in it, plus a three-frame sander-pass filmstrip (before → 36→100 → coat 3) that unclips at 70ms on load. Services became a coarse-to-fine grit ladder with the rail. Each frame is now drawn (CSS/SVG board textures, one per grit stage) because the stock is 1×1 placeholders. I also fixed the pinned story (sticky stage, scrubbed wipe per grit, a live counter), turned the estimator output into an estimate sheet with sketches per job, added a verdict card with a meter to the quiz, used SVG stars (4★ for Robert G.), folded the credits into a details element, fixed the 320px overflow and moved prices onto tokens.
