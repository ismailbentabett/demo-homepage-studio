# drywall-B · Media plan

**State of the library (checked 2026-10-27):** `niches/drywall/media/manifest.json` holds only hero-A1, hero-A2,
hero-A3 and video-1. There is **no hero-B\* key** and no shared-pool shot (ranch house, rain window, work light,
macro texture). A1/A2/video-1 are drywall-A's; hero-A3 shows a woman's face mid-work (reads as owner/crew, DEMO-RULES §5)
and sits in A's slot. An empty slot beats a wrong photo → **`src/media.json` = `{"slots":{}}`**, no hero photo.

**Why the concept survives without photos:** the signature is drawn light. Every "photo" position is a `.lit-wall`
SVG surface (feTurbulence + feDiffuseLighting) lit by the raking beam; this is the most honest picture of
"what a side light shows", and it can't be a stock wall in Sweden.

| position | stand-in | params | caption (mono, --fs--1) |
|---|---|---|---|
| hero mask (h1 fill) | knockdown surface, data-URI | baseFrequency .045, oct 3, surfaceScale 4, az 200→165, el 8 | none (h1) |
| hero tool backdrop | knockdown wide 16/9, right 5 cols | same preset, opacity .55, beam stays at 62% | "Knockdown, lit at 8°. Drawn, not photographed." |
| levels story | taped-seam wall: turbulence + 3 vertical seam bands (feMorphology) | surfaceScale 6→0 on --sw-p | "L0 → L5: same wall, same light" |
| texture swatches ×4 | smooth / orange peel / knockdown / skip trowel | .002 / .9 o2 / .045 o3 / .02×.06 o2 | swatch name + "usually finished to L3/L4" |
| break band | full-bleed 21:9 smooth L5 wall, beam crossing once on scroll | surfaceScale .4 | "Level 5 at sunset angle: nothing to find." |
| footer | the same wall, light fades to 0 | elevation 14→0 | "Light off." |

**If B photos get approved later** (curator re-run), add in this order, each key once, grade from 03-system:
hero-B2 → `break` (object-position 40% 50%), hero-B1 → `story-1` (30% 50%), hero-B3 → `detail-ceiling` (50% 40%),
region-ranch-house → `area` (50% 60%), season-rain-window → `detail-rain` (50% 50%), tool-work-light → `detail-light`,
problem-water-stain → `detail-stain`, step-sand, protection-plastic, finished-smooth-wall, video-3 (hero background
behind the mask only). Captions describe the frame ("Knockdown texture under a low side light"), never "our work".
Do not put any photo key in src/media.json until it exists in the manifest (unknown key = build error).

`[[credits]]` will be empty: footer drops the credits block when no media is used.
