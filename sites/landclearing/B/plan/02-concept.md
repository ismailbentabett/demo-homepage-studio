# Concept — landclearing-B

## Rejected alternatives
1. **Survey stake grid.** Hero is a literal surveyor's field book with handwritten rates. Rejected: too niche-literal, reads as a prop not a system, competitor could do it.
2. **Drone-map overlay.** Hero is an aerial photo with colored zones for density. Rejected: every land-clearing site uses drone shots; doesn't give the homeowner a number before the call.
3. **Calculator-first hero.** Giant calculator widget above the fold. Rejected: tool-as-hero (family 7) already used elsewhere; loses the photographic proof of ground type.

## Thesis
The page is a ground survey sheet: Florida land comes in four readable classes, each with its own sample rate, machine and timeline, and the density legend ties every number on the page back to a type of ground.

## Signature system
**Density legend.** Four hatch patterns (dots = palmetto sand, crosses = oak hammock, dashes = pasture, lines = pine plantation) appear as:
- Hero mosaic tile overlays
- Section background textures (t-paper bands carry a faint hatch)
- Price table row markers
- Estimator SVG sketch fill patterns
- Service card corner badges
The legend is drawn once in SVG and reused via `<use>`; `data-sw-signature` marks every instance.

## Type
Display: **Space Grotesk** (clean grotesk, wide weights, good at large scale). Text/accent: **IBM Plex Mono** (monospace for every acre figure, rate, density label and plot tag). Pair is unique in the library; Space Grotesk used ≤ 3 times total.

## Palette
Family: **sand + ink + survey pink**. Light-led.

| Role | Hex | On | Ratio | Use |
|---|---|---|---|---|
| ink | #1a1a18 | sand #f4f0e8 | 16.2 | body text |
| sand | #f4f0e8 | ink #1a1a18 | 16.2 | paper bg |
| deep | #2c2a24 | sand #f4f0e8 | 12.1 | deep band bg |
| pink | #d94f7a | ink #1a1a18 | 4.6 | accent words, rules |
| pink-ink | #a33258 | sand #f4f0e8 | 5.8 | accent on light |
| muted | #6b6860 | sand #f4f0e8 | 5.1 | captions |

Body ≥ 4.5:1 ✓; accent on deep ≥ 4.5:1 ✓.

## Hero family
**8 — Photo mosaic.** Four tiles of four ground classes in one grade, each tile carrying its class label and sample rate in mono; promise set on plain sand-white paper beside them. Unique in niche.

## Motion
- Intro: four mosaic tiles draw their hatch overlay (SVG stroke-dashoffset) then fade to photo, ≤ 1 s.
- Scroll story: acreage bar fills by density class as estimator inputs change; totals tick in mono. Pinned ≥ 640px only.
- Entrances: text rises (opacity + translateY); images unclip (clip-path inset).
- Hover: hairline underline grows from left via scaleX, 200ms.
- Reduced motion: hatches static, bars pre-filled, all content visible.

## Tools
1. **Acreage estimator** — inputs: acres + density class + slope; output: sample price range per acre and total from facts.proof.prices; hand-off: "Send parcel to firm up" → form prefilled.
2. **Ground reader** — inputs: soil type + slope; output: machine recommendation + seasonality note; hand-off: call CTA.
3. **Stump counter** — inputs: stump count by diameter band; output: sample per-stump range total; hand-off: quote form.
Plus ZIP checker and multi-step quote form.

## Voice
Three sentences: "Your ground has a class. Each class has a rate. We measure before we quote." Five banned words: professional, guaranteed, eco-friendly, family-owned, award-winning.