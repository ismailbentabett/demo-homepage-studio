# Media Plan — concrete-A (Long Cure Concrete Co.)

All keys exist in `niches/concrete/media/manifest.json`. No photo is used twice on the page. Hero key `hero-A2` is not used as a hero by any sibling (registry shows painter-B uses hero family 14 but with a different hero key; no concrete sibling exists yet). All captions describe the frame only, never "our work" or a job claim.

## Photo grade (applied to every frame)
```css
.frame img { filter: saturate(.85) contrast(1.05) sepia(.08); }
.frame.is-hero::after, .frame.is-break::after {
  content: ""; position: absolute; inset: 0;
  background: rgba(43,92,138,.08); mix-blend-mode: multiply; pointer-events: none;
}
```

## Slot assignments

| Key | Section | Crop (`object-position`) | Treatment | Caption |
|---|---|---|---|---|
| `hero-A2` | 1 Hero (ticket inset) | `50% 60%` (forms and rebar centered) | Grade + carbon-blue overlay; clipped into ticket frame via `.ticket-photo` class | Wooden forms and rebar grid on compacted gravel before a pour |
| `base-compaction` | 2 Objection band (BASE card) | `50% 70%` (plate compactor near ground) | Grade only | Plate compactor working a road-base layer |
| `rebar` | 3 Process story (cross-section inset) | `40% 50%` (rebar on chairs, tight) | Grade only | #4 rebar on plastic chairs over gravel base |
| `saw-cut` | 3 Process story (cross-section inset) | `60% 40%` (blade entering slab) | Grade only | Saw cutting a control joint in fresh concrete |
| `broom-finish` | 4 Break (full-bleed) | `50% 30%` (texture fills frame, horizon low) | Grade + carbon-blue overlay | Broom drag across fresh concrete in flat morning light |
| `cracked-concrete` | 6 Tools strip (Crack reader tab 1) | `50% 50%` (web crack centered) | Grade only | Hairline cracking pattern on a residential slab |
| `scaling` | 6 Tools strip (Crack reader tab 2) | `50% 50%` (flaky surface close) | Grade only | Surface scaling after freeze-thaw exposure |
| `sunken-slab` | 6 Tools strip (Crack reader tab 3) | `50% 60%` (tilted panel edge visible) | Grade only | Sunken driveway panel next to a garage apron |
| `utah-home` | 8 Service area (context frame) | `50% 40%` (rambler facade, driveway visible) | Grade only | Utah rambler with original concrete driveway |
| `forms` | Gallery slot 1 | `50% 50%` | Grade only | Plywood forms staked for a patio pour |
| `edging` | Gallery slot 2 | `60% 50%` | Grade only | Hand edger rounding a fresh slab edge |
| `curing` | Gallery slot 3 | `50% 60%` | Grade only | Curing blanket draped over fresh steps |
| `finished-driveway` | Gallery slot 4 | `50% 40%` | Grade only | Completed broom-finish driveway at a rambler |
| `patio` | Gallery slot 5 | `50% 50%` | Grade only | Broom-finish patio beside a back door |
| `walkway` | Gallery slot 6 | `50% 60%` | Grade only | Concrete walkway leading to a front porch |

## Notes for the builder
- The hero ticket photo uses `[[frame hero-A2 ticket-photo | eager]]`; the `ticket-photo` class applies the clip shape and paper-clip inset styling defined in `src/style.css`.
- Crack reader tabs are small crops; they must survive at ~200px wide inside the tabs module. Object positions above keep the diagnostic feature centered.
- Gallery frames use `4/5` aspect ratio on mobile, `3/2` at ≥900px. The gallery is optional in the blueprint; if the builder needs to cut a section for rhythm, drop gallery slots 5-6 first.
- All placeholders resolve at build time; no hot-links. If a placeholder fails, the `media-fallback` kit module swaps to a styled `.frame.is-broken` panel with the caption as fallback text.
- No faces toward camera, no logos, no readable signs, no commercial sites, no before/after pairs. Every frame passes DEMO-RULES §5.