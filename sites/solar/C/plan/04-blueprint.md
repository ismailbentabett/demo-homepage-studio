# solar-C · blueprint (Parapet Shadow Clock)

Signature host: `<main data-sw-signature>` sets `--sun` (0 east → 1 west) from document scroll; a fixed sun disc rides the
sky column arc (≥1100) / a top hairline (<1100). Every band opens with a `.parapet` stepped edge (p1/p2/p3) + wedge.

| # id | tone | purpose (objection or path) | layout family | content (tokens) | media keys | hooks | entrance |
|---|---|---|---|---|---|---|---|
| 1 `#top` hero | t-clay | 5-s answer: this crew plans around the parapet shadow; call | `mask-split` | kicker city/state, h1, lead, [[call]], Book a roof check, Text, proof line years · rating (Sample) · {{hours|today}} | hero-C3 (disc mask) | `data-hook="sunrise"` | disc rises 18%, wedge grows; h1 line mask |
| 2 `#roof-check` | t-paper | "pushy pitch" / "foam needs recoat": roof check before any layout | `statement-photo` | h2 statement, 4 checks (membrane, parapet, canales, panel), Rosa V. sample review, [[quote Roof check]] | adobe (hero-C2-2) | – | text rises, photo unclips |
| 3 `#story` | t-deep | "don't understand": sun path in 4 stops on a top-down roof plan | `pinned-plan` (pin ≥900) | 4 stops 09:00 / 12:00 / Dec 21 12:00 / 16:00, plain words | drawn SVG | `data-hook="cast"` | scrubbed (story 1) |
| 4 `#services` | t-paper | "holes in my roof", "gone in two years": all 8 services, sealed / flashed | `card-grid` (4×2, step heights vary) | repeater services name/blurb/[[quote]] | – | wedges follow `--sun` | stagger |
| 5 `#above` .break | t-mid | breath: the roof from above; parapet frame both sides | `bleed` | caption + one line | flat-roof | – | clip |
| 6 `#calculator` | t-clay | "numbers were made up": shadow math shown, angles + multipliers | `tool-split` | slider 1-4 ft, 3 results, drawn wedge, hand-off → form `parapet` | drawn SVG | `data-hook="calculator"` | numbers count |
| 7 `#battery` | t-paper | "will it run my well pump": battery planner | `checklist-panel` | 6 loads + hours, kWh band words, battery Sample range, hand-off | – | `data-hook="battery"` | quiet |
| 8 `#proof` | t-mid | trust: sample reviews, rating, licence (sample), years | `quote-wall` (masonry 3 col, parapet tops) | repeater proof.reviews, rating + count (Sample) | rooftops-aerial (small, above the wall) | parapet wedges | stagger |
| 9 `#prices` | t-ink | prices only as Sample ranges + roof-penetration promise | `ledger` | repeater proof.prices, {{proof.guarantee}} (Sample) | – | – | quiet |
| 10 `#faq` | t-paper | "what am I signing / what happens after" | `accordion` | 5 Q&A | – | – | still |
| 11 `#area` | t-clay? → **t-mid** | area + ZIP + hours | `map-split` | biz.areas repeater, ZIP checker, hours table, open-now | – | – | text rises |
| 12 `#contact` | t-paper | the form (4 steps) + call | `form-split` | form: service → roof → when → contact, thanks | – | – | quiet |
| footer | t-deep | sunset: disc half under parapet, longest wedge | footer | name, phone, email, areas, disclaimer, credits, licence (sample) | – | signature | – |

Decision: area went to `t-mid` (not clay) so contact (paper) → footer (deep) closes; and to keep the clay to two bands (hero, calculator), so the color band means "the roof field".

## Rhythm gate
- Sections: 12 (hero … contact). ✓ Hero `min-height: calc(100svh - var(--header-h))`; roof-check parapet edge peeks. ✓
- Tones: clay, paper, deep, paper, mid, clay, paper, mid, ink, paper, mid, paper → no 3 same category in a row; dark bands (deep #3, ink #9) never touch; footer deep follows paper. ✓
- ≥1 t-deep (story) ✓, color band (t-clay ×2) ✓, full-bleed `.break` (#above) ✓.
- Hooks: sunrise, cast, calculator, battery + `data-sw-signature` on main = 5 ✓.
- Layout families: 12 distinct, no neighbours share. ✓
- One `#contact`; every CTA → `#contact` or `tel:` / `sms:`. ✓
- Required: all 8 services (repeater) ✓, areas + ZIP checker ✓, hours + open-now ✓, sample reviews with tag ✓, prices only in a Sample price block / battery planner Sample range ✓, footer disclaimer + credits ✓.
- Signature in concept sections: hero (disc + wedge), story (plan shadow), tools (calculator wedge), proof (card wedges), break (parapet frame + morning wedge), footer (sunset disc, ×3 wedge). ✓

## Media (coordinator update)
New approved keys: added `rooftops-aerial` (proof, small: rooftops from above) and `hero-C2-2` (roof-check: adobe wall).
Dropped `wiring` (solar-B's hero). No hero-A1/A2/B1.

## Open issues
(none yet)
