# Blueprint: landscaper-B (Half Inch Landscape Co.)

## Round 3
Motion + wow elevate. The hero calculator now feeds the drawings: L-1 shows the yard size and lawn %, the hatched lawn grows or shrinks from the street side to match the lawn % (bare beds underneath), and a "Today" readout + "You" gauge appear. L-3 shows "Planned" gal/wk, the gallons saved, and the gauge marker sitting at the plan ratio. Each sheet's gal/wk counts up from 0 when it enters the view. The services list runs like a controller: Z01-Z10 light up one at a time for 600ms each, with a live "Z0n running" readout. With reduced motion or no JS, the final values show statically. Shoulds: the price readout is split (item / unbroken range / small scope line); the ft² label is used at 900-1199; the footer roster and ZIPs are replaced by one link to #service-area; the email no longer wraps; the tags now read Leak fix / Insured / Schedule; the proof line is grouped so it wraps cleanly; the hero is top-aligned.

## Round 2
Photo + polish elevate: the placeholder photos are replaced by one landscape-architect drawing set. L-1 shows the yard today (break band, wide and tall sheets, true aspect ratio). L-2 is the plan, built layer by layer in the process story. L-3 is the planted result with Section A–A, the drip line sitting in the gravel over broken caliche. All three carry hatched lawn, gravel and limestone, plant symbols, a north arrow and a scale bar, and mirror the hero tool's gal/wk. This means no blank frames and no false credits. The footer becomes the controller's schedule screen: hours as run windows, areas as zone assignments, the legal text under an "End" rule. The guarantee, insured status and years now show through tokens in the rail, the hero and the price panel.

## Round 1
Rebuilt the page around the Zone Schedule. The hero is a working water controller (fixed factors: turf 0.62, native 0.15, gravel 0). The three photos are annotated zone plans (drawn SVG + zone tags + caption rule), so the placeholder photos never read as content. The process sketch gains a layer per step (desktop). Services are a schedule, not cards. Header overflow is fixed (icon-only call under 640). The reveals are gated behind a JS class with no gsap.from double-hide, and the kit/app module name collisions are removed.

### Round 1 sequence (supersedes the table below)
| # | id | tone | purpose | layout family | media | hooks | entrance |
|---|---|---|---|---|---|---|---|
| 1 | #hero | light | "will it survive August?" + the tool | split 7/5 copy + controller | none | data-water (lsb-water), opennow, data-sw-signature | controller boot ≤ 0.8 s |
| 2 | #yard | deep (break) | see the yard as zones | full-bleed annotated plan | hero | counters, data-sw-signature | plan draws in (clip) |
| 3 | #services | light | every service, one tap to quote | schedule rows | none | prefill, reveal-stagger | stagger |
| 4 | #process | paper | "do they plan or just plant?" | sticky figure + step list | story-1 | scroll story (≥ 900) | layers per step |
| 5 | #water-tools | mid (color band) | readiness + sample price | asymmetric 7/5 panels | none | checklist, estimator | fade |
| 6 | #native-proof | light | natives look good | figure 7 + quote 5 | plants-native | reveal clip | clip |
| 7 | #reviews | deep | sample reviews | sticky lead + log | none | reveal-stagger, data-sw-signature | stagger |
| 8 | #service-area | paper | "do you come to me?" | text + roster | none | zip, data-sw-signature | fade |
| 9 | #contact | accent | the form | 5/7 form card | none | form, prefill | fade |
| – | footer | light | hours, area, disclaimer, credits | 4-col | none | data-sw-signature | none |

Rhythm check: 9 sections + footer. No 3 same tones in a row, and the two deep sections (#yard, #reviews) never touch. One t-deep break, one color band (t-mid) and one accent band. Neighbours never share a layout family. Hooks: lsb-water, checklist, estimator, zip, form, counters, scroll story. Signature sections: hero, yard, services, process, reviews, area, footer. Exactly one #contact, and every CTA goes to #contact or tel:.


## Section Sequence

| # | ID | Tone | Layout Family | Purpose / Objection | Content Tokens | Media Slot | Hooks | Entrance |
|---|---|---|---|---|---|---|---|---|
| 1 | hero | t-light | tool-first-split | Trade+city+outcome in h1; water budget tool as hero; proof line under h1 | `{{biz.tradeLabel}}`, `{{biz.city}}`, `{{biz.state}}`, `{{proof.rating}}`, `{{proof.label}}` | hero-B1 (beside tool) | `data-sw-signature` (zone rule in tool), `data-estimator` (water-budget config) | Line-mask h1 reveal; calculator boots (count-up defaults) |
| 2 | trust-strip | t-paper | rail-horizontal | Open-now, hours, service area list as zone roster; phone visible | `{{hours\|today}}`, `{{biz.areas\|list}}`, `{{biz.phone}}` | crew-from-behind (small inline frame) | `data-open-now` | Text rise stagger |
| 3 | services | t-light | zone-grid | Services as zones with gallons-saved readout; answers "what do you actually do" | `<!-- each services -->{{.name}}{{.blurb}}<!-- /each -->` | detail-irrigation, detail-bed, material-gravel, material-stone, weather-rain | `data-sw-signature` (zone tag per card), `data-service` on CTA | Cards clip-reveal staggered |
| 4 | break | t-deep | full-bleed-photo | Visual breath; shows real Austin home context | — | region-austin-home | — | Image unclip |
| 5 | process-story | t-paper | split-wipe-pinned | Shows work from plan to plant; answers "will they wreck my yard" | Process copy: site walk → test → install → label/map | story-1 (sketch), story-2 (planting) | `data-compare` or custom `--sw-p` wipe, `data-sw-signature` (zone progress marker) | Wipe driven by scroll (pinned ≥640px); stacked cards below |
| 6 | water-tools | t-mid | tool-panel-stack | Watering-day finder + project estimator; answers "what's my schedule / cost" | Sample rule explanation, `{{proof.prices.*}}` | season-summer-heat (context photo) | `data-checklist` (watering-day), `data-estimator` (project-size) | Text rise; tool panels slide-in |
| 7 | native-proof | t-light | split-text-photo | Native bed review + plant knowledge; answers "plants die by August" | `{{proof.reviews.3.text}}` (Karen J.), `{{proof.reviews.3.name}}`, `{{proof.reviews.3.town}}` | plants-native-texas | `data-reveal` | Image unclip + text rise |
| 8 | reviews | t-deep | review-stack | Social proof as "zone notes"; sample labels visible | `<!-- each proof.reviews 0:5 -->{{.text}}{{.name}}{{.town}}{{.service}}<!-- /each -->`, `[[sample Sample review]]` | — | `data-sw-signature` (zone note frame) | Cards rise staggered |
| 9 | service-area | t-paper | zip-check-split | ZIP checker + area map/list; answers "do you come to me" | `{{biz.zips\|csv}}`, `{{biz.areas\|list}}` | tools-hand (inline) | `data-zip` | Text rise |
| 10 | contact | t-accent | form-centered | Multi-step quote form; primary conversion | Form steps, honeypot, honest thank-you | — | `data-lead` (form), `data-service` prefill | Form panel fade-in |
| 11 | footer | t-deep | footer-roster | Service area as zone roster; disclaimer; credits; nav anchors | `{{demo.disclaimer}}`, `[[credits]]`, anchor links | — | `data-sw-signature` (END marker) | Static (no motion) |

## Rhythm Verification
- **Total sections:** 11 (within 8–12 range).
- **Tone sequence:** light → paper → light → deep → paper → mid → light → deep → paper → accent → deep.
- **No three same tones in a row:** Verified.
- **No two dark sections touching:** deep (#4 break) followed by paper (#5); deep (#8 reviews) followed by paper (#9); deep (#11 footer) is last. Verified.
- **At least one dark band:** #4, #8, #11. Verified.
- **At least one color band:** #10 t-accent. Verified.
- **Full-bleed break:** #4 break. Verified.
- **Interactive hooks (≥3):** `data-estimator` (hero + water-tools), `data-sw-signature` (hero, services, reviews, footer), `data-checklist` (water-tools), `data-zip` (service-area), `data-lead` (contact), `data-open-now` (trust-strip), `data-compare`/wipe (process). Total: 7 distinct hooks. Verified.
- **Layout families (≥3, no neighbors alike):** tool-first-split, rail-horizontal, zone-grid, full-bleed-photo, split-wipe-pinned, tool-panel-stack, split-text-photo, review-stack, zip-check-split, form-centered, footer-roster. All unique; no repeats. Verified.
- **Quote form appears once:** #10 only. Verified.
- **Required content:** services (all via repeater), service area + ZIP (#9), hours/open-now (#2), sample reviews with label (#8), sample prices via estimator (#6), footer disclaimer + credits (#11). Verified.

## Signature System Placement (`data-sw-signature`)
1. **Hero:** Zone rule inside calculator output frame.
2. **Services:** Zone tag + gallons-saved readout on each card.
3. **Process story:** Zone progress marker at each step.
4. **Reviews:** Zone note frame around each review.
5. **Footer:** Zone roster for service area + END marker.

## Mobile Adaptations
- Hero: calculator stacks below headline; h1 ≤4 lines at 390×844.
- Process story: pinned wipe disabled <640px; becomes stacked cards with clip reveal.
- Trust strip: horizontal rail wraps to vertical stack.
- Mobile bar: sticky bottom with Call + Price it; hides on scroll-down and over #contact.
- All tap targets ≥48px.

## Notes for Builder
- Zone rule primitive defined in `03-system.md` as `.zone-rule`; reuse exactly.
- Water-budget calculator uses `data-estimator` with custom config object in `app.js` (yard size presets, turf vs native gallons factors). Output feeds prefill.
- Process wipe uses CSS var `--sw-p` driven by GSAP ScrollTrigger; static side-by-side with reduced motion.
- All photos use grade from system: `saturate(.8) contrast(1.08) sepia(.04) hue-rotate(-2deg)`.
- No literal facts in src/; all via tokens.
- Sample labels on every review card and price output.