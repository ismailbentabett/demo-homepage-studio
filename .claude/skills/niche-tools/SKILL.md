---
name: niche-tools
description: Interactive tools for contractor demo homepages - which kit module powers each (zip, estimator, checklist, compare, tabs, hotspots, filter, carousel, counters), markup patterns, honest sample outputs, result-to-CTA handoff and per-trade tool ideas. Use when picking tools in the concept, writing their markup and copy, or fixing a tools/conversion score.
---

# Niche tools

A tool earns its place when the homeowner learns something they'd otherwise call to ask, and the
answer leads into the call or form. Every site has the ZIP checker, the 4-step form, and 2+ niche tools
from brief §5.

## Kit modules (hooks are the API: no JS of your own for tools)
| Need | Module + hook | Notes |
|---|---|---|
| Do you serve me? | `zip` · `[data-zip]` | Checks `facts.biz.zips`; answers in `aria-live`; "yes" opens the form with the ZIP prefilled. |
| What will it cost? | `estimator` · `[data-estimator]` | Ranges only from `proof.prices` (`from`/`to` strings), Sample label, optional `data-est-sketch` SVG, printable. |
| Do I need this now? | `checklist` · `[data-checklist]` | Self-check; live result line ("3 of 6: worth a look this month"). |
| Which option? | `compare` · `[data-compare]` | Two-layer slider; labels via `data-compare-labels`; never a before/after of a real job: compare materials, options, or a diagram. |
| What happens? | `tabs` · `[data-tabs]` | Service or step tabs with a photo per tab. |
| What's this part? | `hotspots` · `[data-hotspots]` | Points on a photo or diagram with cards ("drip edge", "valley flashing"). |
| Show me examples | `filter` + `lightbox` | Filter by type; captions describe the frame. |
| Is it open? | `opennow` · `[data-open-now]` | From hours + timezone. |
| Numbers | `counters` · `[data-count]` | Only numbers from facts (years, reviewCount), with Sample where needed. |

## Pattern (estimator)
```html
<section id="price" class="t-paper" aria-labelledby="price-h">
  <h2 id="price-h">What a {{services.0.short}} usually costs here</h2>
  <div data-estimator data-hook>
    <!-- the module fills options from facts.proof.prices -->
    <output aria-live="polite" data-est-out></output>
    [[sample pricing]]
    [[quote {{services.0.short}} btn-primary | Get my exact number]]
  </div>
</section>
```
Read `kit/README.md` (or the module file header) for the exact child hooks before writing markup.

## Honesty
- Outputs are ranges with "Sample" and "your number comes after a visit". Never a single price, never
  "save X%", never an invented spec ("lasts 30 years") unless a fact says so.
- Diagnostic tools say "signs worth a look", never "you need a new roof".
- No tool collects data beyond the form; nothing is sent (demo).

## Ideas per trade (brief §5 is the source; these are starters)
Roofer: storm check by date + ZIP · roof age quiz · shingle vs metal compare. HVAC: "repair or replace"
checklist · filter size helper · SEER range estimator. Plumber: water-heater age decoder (serial
explained) · "is it an emergency" checklist. Electrician: panel warning signs · EV charger readiness.
Painter: room estimator by size · sheen guide (tabs). Landscaper: season planner · yard-size estimator.
Concrete: slab thickness explainer (hotspots) · driveway estimator. Pest: identify-by-sign tabs. Moving:
home-size to truck-size helper · move-date planner. Mechanic: warning-light hotspots · service interval check.

## Placement
One tool in the first two sections after the hero (it's the "proof & tools" promise), the rest
where the objection they answer comes up. Each ends with a CTA carrying the result.
On phones: one column, inputs ≥ 44px, result visible without scrolling after the last input.

## What costs points
A tool that is decoration (no result), a result with no next step, prices as literals, a slider that
only works with a mouse, a tool that duplicates another, a quiz longer than 6 questions.
