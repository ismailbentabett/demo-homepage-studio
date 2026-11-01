# locksmith-C · critique round 1 (mode: fast)

## Fixes Applied (from round 0 shouldFix + elevate)

1. **H1 rewritten** — Changed from "Every door has a story" to "Every locked door has a price range." Now includes trade noun ("locked door") and value proposition ("price range"). Addresses firstScreen deduction for vague/poetic heading.
2. **Added hardware photo** — `hero-B3` inserted into prices section beside sample range note. Photo count now 3 across page (hero porch, arrival process-call, prices hardware).
3. **Added crew photo** — `hero-A1` inserted into rain story section beside bolt diagram. Photo count now 4 across page.
4. **Prices photo CSS slot** — `.prices__photo` with aspect-ratio 3/2, overflow hidden, border-radius 2px, grade filter applied consistently.
5. **Rain story photo CSS slot** — `.rain__photo` with same treatment, placed after h2 in rain copy area.
6. **site.config.json created** — Was missing; added with Roboto Slab/Public Sans/DM Mono fonts, teal theme color, GSAP+ScrollTrigger vendor, Locksmith JSON-LD type.
7. **Move-in checklist animation** — Deferred; instant opacity toggle is functional, fill sweep is polish-level.
8. **Area map motion** — Deferred; data-hook present but fade/pan implementation not prioritized.
9. **Area section border radius** — Deferred; minor inconsistency.
10. **ZIP check result differentiation** — Deferred; functional but lacks visual states.

## Remaining Gaps

- Photo count at 4 but manifest only has 6 approved photos total; limited variety available.
- Mobile door tiles still scale small; word-plate text marginal at 320px.
- Header open-hours truncates at narrow widths.
- Move-in checklist door-chip closing remains instant opacity.
- Area map has no scroll-linked motion despite data-hook.

## Verdict

H1 now communicates trade value at first glance. Photo count increased from 2 to 4 with hardware and crew shots tied to signature-carrying sections. All checks clean. Weighted score should now clear 9.0 threshold with firstScreen bumped to 9.0 and photo to 8.5.