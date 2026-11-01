COPY: needs copy-chief (copy 8.5 unchanged: five pricing action names, h1 still lacks trade noun)

## Five-second test
- **1440-first.jpg**: Portland gutter company that times visits to trees. H1 still 4 lines without "gutter" in it; eyebrow carries the trade word. Signature bars visible at first paint. Phone + text CTA present. Passes functionally but headline still does half the job.
- **390-first.jpg**: Same hierarchy. Bars resize for mobile. No fold-critical content lost.

## Category scores

### firstScreen — 8.5
Earned: Signature bars on screen at first paint, dual CTAs, proof line with Sample, open-now indicator. 390-first.jpg preserves hierarchy.
Deductions:
- `1440-first.jpg`: h1 runs 4 lines at 1440, no trade noun in headline (−0.5).
- `1440-first.jpg`: hero fills exactly 900px, next band doesn't peek (−0.5).
- `390-first.jpg`: signature card hidden under mobile bar; phone first screen has no signature visible (−0.5).

### distinctiveness — 9.0
Earned: Drop-Season Bars appear in hero, plates, price ledger, tools, field notes and footer (6 sections). Plates with Latin names are unique vs siblings A and B. No registry collision.
Deductions:
- `1440-full-3/4/5.jpg`: services 01–08 and visit 01–04 numbering plus tracked eyebrows remain AI-slop tells (−0.5).
- `1440-full-3.jpg`: tools band mid-green drifts toward sibling B's field (noted, no deduction).

### type — 8.5
Earned: Rethink Sans + Newsreader italic pairing has a reason. Scale contrast between h1 and legend. Tabular prices.
Deductions:
- `1440-full-3.jpg`, `1440-full-5.jpg`: section rule cuts through descenders of last headline line (−0.5).
- `1440-first.jpg`: 4 tracked-caps labels in one view; plates add 2 more (−0.5).
- `1440-first.jpg`: month letters and bar legend under 13px (no extra deduction, holds score off 9).

### layout — 8.5
Earned: Good tone map (deep → paper → break → paper → mid → light → deep → paper → moss → deep → paper). Asymmetric plates with sticky index. Dense ledger. Quiet steps. Full-bleed break.
Deductions:
- `1440-full-3.jpg`: tools grid lopsided; left card ends ~160px above right (−0.5).
- `1440-full-3/4/5.jpg`: services index and visit steps are template shapes; nothing breaks the grid on purpose (holds at 8.5).

### photo — 8.0
Earned: Break photo now renders correctly in motion-on captures (`1440-full.jpg`, `390-full.jpg`) — clip reveal fixed. Two photos on page with proper alt text and credits. Habitat inset shows in reduced motion (`1440-rm-full.jpg`).
Deductions:
- `1440-first.jpg`: only gutter photo is a 150×180 inset; homeowner never sees a gutter at size (−0.5).
- `1440-rm-full.jpg`: break frame grade (desaturated sepia) doesn't match hero inset's warm green (−0.5).
- Net from 8 with +1.0 habitat framing bonus, −0.5 for grade mismatch = 8.0. Up from 7.5.

### copy — 8.5
Earned: Specific trade voice. Answers fears 1 and 3 from brief §1. Sample labels everywhere. No em dashes, no claims outside facts.json.
Deductions:
- `1440-full-2/3/4/5.jpg`: five names for pricing action unchanged (−0.5).
- `1440-first.jpg`: h1 still lacks trade noun (−0.5).
- `1440-full-4.jpg`: "Plate 1 · Douglas fir" on two reviews; "Downspout check" label mixes systems (−0.5).

### mobile — 8.5
Earned: 390-full composed for phone. Hero re-stacked. Plates stack without pin. Ledger re-laid. Form options full-width. Sticky call/text bar. No overflow (render.json clean). CSS has 640/1024 breakpoints.
Deductions:
- `390-first.jpg`: signature card hidden under mobile bar (−0.5).
- `390-full.jpg`: "When it falls" cells and month letters ~10px; hero map label tiny (−0.5).

### a11y — 9.0
Earned: MustFix from round 1 resolved — hero inset photo now renders in `1440-rm-full.jpg`. Focus designed per tone. Forced-colors rule present. One h1, h2→h3 order clean. Labelled ZIP. Sample text real.
Deductions:
- `dist/index.html`: filmstrip pause button (if present) lacks aria-pressed state (−0.5).
- `1440-first.jpg`: hero proof line trailing "·" after "9 years in the field" (−0.5).

### motion — 8.5
Earned: Hooks well over 3 (data-reveal, data-split, data-plate draw, sticky pindex, bar fills, form progress, clip reveal). Entrances vary by role. Intro bar fill runs with h1 readable at first paint. Break clip reveal now fires correctly.
Deductions:
- `1440-full-3.jpg`: tree calendar shows empty state only; no pre-selected example visible without input (−0.5).
- No single motion idea explains beyond "drawings draw, bars fill" (−0.5).

### wow — 8.5
Earned: Tree sorter writes output into signature's own bar and prints. Right idea for a 9.
Deductions:
- `1440-full-3.jpg`: shot shows only empty state; moment not visible without input (−0.5).
- `390-full.jpg`: mobile loses some desktop wow density (−0.5).

### polish — 8.5
Earned: SVG favicon, apple-touch, OG, JSON-LD with hours and City areas, print stylesheet, forced colors, no `transition: all`. Footer is designed close with year bar.
Deductions:
- `1440-full-3.jpg`: pill tree chips next to square downspout buttons; mixed radius (−0.5).
- `1440-first.jpg`: trailing "·" in proof line (−0.5).

## Arithmetic
14×8.5 + 12×9.0 + 10×8.5 + 10×8.5 + 8×8.0 + 8×8.5 + 7×8.5 + 7×9.0 + 12×8.5 + 8×8.5 + 4×8.5
= 119 + 108 + 85 + 85 + 64 + 68 + 59.5 + 63 + 102 + 68 + 34
= 855.5 / 100 = **8.56**

## Must
(none — prior mustFix resolved)

## Should
1. `1440-first.jpg`: Put trade noun in h1 and hold to 3 lines at 1440.
2. `1440-full-2/3/4/5.jpg`: Pick one verb "Price it" for every pricing button.
3. `#svc-h`, `#visit-h`: Add padding-bottom to prevent rule cutting descenders.
4. `1440-first.jpg`: Set hero min-height to `calc(100svh - 72px)` so next band peeks.
5. `#tools grid`: Align-items stretch or pre-select example trees so cards match height.
6. `#notes`: Give every review card the month tick; drop "Downspout check" as label.
7. Tracked caps: Drop section eyebrows on #svc, #visit, #book; use Newsreader italic for plate sublabels.
8. `1440-full-3.jpg`: Unify radius (tree chips square like downspout options, or both pill).
9. `1440-first.jpg`: Remove trailing "·" in proof line.
10. `1440-rm-full.jpg`: Match break frame grade to hero inset's warm green.

## Elevate
1. **photo** (weight 8, score 8.0): Make photographs specimens. Give break frame a plate header ("Plate 2, habitat: Bigleaf maple, November") and rust November tick from bar system overlaid on lower edge. Bring a roof-edge/gutter frame from approved library at size as habitat plate beside field guide with same plate header and one grade across all frames.
2. **layout** (weight 10, score 8.5): Fix tools grid lopsidedness with align-items stretch and pre-selected tree example. Add one intentional grid-break moment (asymmetric element, overlapping layer, or full-bleed interruption) to escape template shape in services/visit sections.