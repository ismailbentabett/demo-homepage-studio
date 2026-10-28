# drywall-C — Media plan

**BLOCKER:** as of this run `niches/drywall/media/manifest.json` holds only hero-A1/A2/A3 + video-1 (one approved). No hero-C*, region, season, material or problem slots exist yet, so the niche's media curation (`/next-niche drywall`) is unfinished. The keys below are the brief §7 slot names this site needs; the curator must fill them (C-specific first: hero-C1, hero-C2, hero-C3, season-snow-roof, region-victorian, material-plaster-lath). If a slot stays empty after curation, the builder drops it (an Era Plate drawing stands in; never a wrong photo). Re-run `node tools/check-unique.mjs drywall-C` after curation.

Grade on all: `saturate(.82) contrast(1.06) sepia(.1) brightness(.98)` (03-system). No faces, signs, house numbers, plates.

| key | section | crop | treatment | caption |
|---|---|---|---|---|
| hero-C1 (hero) | hero arch, right 5 cols | `object-position: 50% 35%` (arched window centered in the arch) | `.arch` + muntins overlay + brick multiply .12; slit-open intro | "Red brick and tall arched windows, the way the mill blocks along the river were built." |
| hero-C3 | break (full-bleed, `.arch--wide` segmental top) | `50% 60%` | grade + slate multiply .18 | "Snow on pitched roofs: the season dry heat starts opening cracks indoors." |
| material-plaster-lath | eras story, Plate I panel | `40% 50%` | arch, plain grade | "Wood lath behind old plaster; the keys are the curls pushed through the gaps." |
| problem-crack | eras story / crack-timer | `50% 50%` | square crop 4:3, grade | "A long branching crack in a plaster ceiling." |
| finished-attic-room | eras story, Plate III (2005 board) | `50% 45%` | arch | "A sloped attic ceiling finished smooth in board." |
| season-snow-roof | season strip (t-slate) | `50% 70%` (icicle edge in lower third) | slate multiply .18, `saturate(.6)` | "Icicles at a roof edge, where ice dams start." |
| finished-arch | services: Arches card / proof | `50% 40%` | `.arch` (shape echoes the subject) | "A plaster archway between two rooms, curve kept even." |
| hero-C2 | detail beside the "keep, pin, replace" intro | `55% 40%` | arch | "An old interior with plaster walls and window light." |
| region-victorian | area section (towns + ZIP checker) | `50% 55%` | wide arch | "A New England house with a deep porch." |
| problem-water-stain | services: ceiling stains | `50% 30%` | 4:3 square, grade | "A brown water ring on a top-floor ceiling." |
| hands-at-work | how a visit runs | `50% 50%` | 4:3, grade | "Hands holding a trowel against fresh plaster." |
| protection-plastic | how a visit runs (dust) | `50% 50%` | 4:3 | "Plastic sheeting taped over a doorway before any sanding." |
| step-skim | services: skim coat | `45% 50%` | 4:3 | "A wide trowel pulling a thin skim across a ceiling." |
| gallery: finished-smooth-wall, step-tape, problem-hole | review pins (`.arch--pin`, texture-only crops) | `50% 50%` | small arches 96-160px | "A flat wall in side light." / "Paper tape bedded in a seam." / "A hole left by old wiring." |

## Round 0 decision (builder)
None of the slots above exist in the manifest yet, so `src/media.json` (and `plan/media.json`) now hold **no photo slots on the page**.
The hero arch, the eras story and every other frame show drawn Era Plates instead (never a wrong photo).
`og -> hero-A3` is the only key: it feeds the OG share image only (the build otherwise falls back to hero-A1, drywall-A's hero).
Photos come in the fix round once the curator approves the C slots; then restore the table above slot by slot.
