# siding-B · Media plan

**Library state (problem, named):** `niches/siding/media/manifest.json` holds only 10 photos, all `status:"draft"`
(build.mjs will warn on each one used; the orchestrator must approve `hero-B3` and `hero-C1` with
`tools/approve-media.mjs`, or the warning blocks the pass rule). Rejected: hero-A1 (railway sidings, UK), hero-B1
(army soldiers, Guatemala, faces), hero-B2 (bentonite plant bunkhouses, industrial), process-tear-off (stone goods shed,
UK, readable sign). Sibling heroes are left alone: hero-A2 (siding-A hero), hero-C2 (siding-C hero); hero-A3 and hero-C3
are sibling breaks, so they stay off this page too.
So this site uses **2 photos**. Everything else is **drawn**: material swatches (SVG lap/clapboard/plank patterns in
flat swatch colours), the elevation-picker colonial, the squares diagram. That fits the thesis (a test report is mostly
readings and drawings) and an empty slot beats a wrong photo. 10-16 keys was not possible without breaking DEMO-RULES §5.

| key | section | crop | treatment | caption |
|---|---|---|---|---|
| `hero-B3` | hero, right 5 cols, specimen plate 4:5 | `object-position: 22% 45%` (left wing only: lap courses, corner board, 2×2 windows; **crops out the right-hand porch pediment, which carries a number**). Check at 390: plate 4:3, `object-position: 18% 40%` | site grade `saturate(.82) contrast(1.06) hue-rotate(-4deg) brightness(1.02)`; white 12px mat + 1px rule; SVG dimension line over the courses with label "REVEAL ≈ 4 IN." on a white chip | PLATE 01 · Painted clapboard on a Colonial Revival, Danbury, CT, in summer daylight |
| `hero-C1` | `.break` after the compare table, full bleed, 16:9 (21:9 ≥ 1100) | `object-position: 50% 68%` (porch columns + lap courses; cuts the antenna and most of the bare tree) | site grade + a `linear-gradient(0deg, rgba(20,27,51,.55), transparent 45%)` foot scrim for a mono caption row in #F5F4F0 at bottom-left | PLATE 02 · White lap siding on a hip-roof farmhouse in late-winter light |

Credits: both via `[[credits]]` in the footer (CC BY 4.0, Bmzuckerman; and DPLA/Fulton County for hero-C1, from the manifest).
No video: hero family 6 is still.
