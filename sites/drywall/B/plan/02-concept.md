# drywall-B · Concept

## 1. Three obvious concepts, rejected
- **Before/after slider wall.** Drag a handle, rough wall → smooth wall. Every finisher site has it; brief §4 names the
  fake "after" as a cliché. Rejected: competitor move.
- **Dark page + tool-first hero (brief seed, family 7, literal).** Texture matcher and level picker side by side as the
  hero with a beam behind. Family 7 is at the library cap (6/6, check-unique) and it is the seed taken literally.
- **Spec-sheet / data dashboard.** GA-214 table, numbers everywhere, gray UI cards. Reads as SaaS, no material, no
  light: a template. Rejected.

## 2. Thesis
The page is a dark room with one work light on the floor: an SVG raking beam skims every drawn wall surface, and
nothing is called finished until it is graded L0-L5 under that light.

## 3. Signature system: "Side-Light Grade Strip" (`data-sw-signature="grade-strip"`)
Two primitives drawn once (03-system): **(a)** `.grade` strip, six 1px-ruled cells L0…L5, the current cell filled
Level Cyan, a mono note right ("checked at 8° · 0 seams flagged"); **(b)** `.lit-wall`, an inline SVG
`feTurbulence → feDiffuseLighting(feDistantLight)` surface; `azimuth`/`elevation` read from `--sw-p` in app.js so the
shadows rake across real bumps. No photo needed (the niche library has no B photos; see 05-media).
- **Hero:** masked h1 letters filled with a knockdown `.lit-wall`; the beam sweeps once; strip under header shows L4→L5.
- **Levels story (pinned):** scroll dials the strip L0→L5; the drawn wall loses its seams (surfaceScale 6→0); each step
  shows the level's one-line definition + who needs it (L5 = west window at sunset).
- **Texture tool:** four `.lit-wall` swatches (smooth / orange peel / knockdown / skip trowel = 4 turbulence presets),
  each carries the level it is normally finished to (L3/L4) as a mini strip.
- **Proof:** each review card carries a grade chip for the job (L4 bedrooms, L5 living room); rating as a 5-cell strip.
- **Price ledger:** each row gets a mini strip of the level included.
- **Footer:** the strip reads L5 complete, the light cell switches off (beam fades to 0), "Light off. Wall done."

## 4. Type
Display **Epilogue** 800/900 (variable wght; wide, flat-sided letters make a big mask window for the texture);
text **Albert Sans** 400/600 (open, calm, legible light-on-dark at 18px); accent **Martian Mono** 400/500 with `wdth`
88 for readouts (levels, ° angles, Sample prices, lab fees). Epilogue: 0 uses in registry; pair unique.

## 5. Palette: "Unlit Room + Worklight Bone + Level Cyan"
| role | hex |
|---|---|
| paper (room) | #141517 |
| deep (footer/hero) | #0B0C0E |
| mid (cards/bands) | #22252A |
| ink (text) | #EDE6DA |
| muted | #A39D93 |
| accent (levels, links on dark) | #8AD4E2 |
| signal (flag/"seam seen", rating stars) | #F2B544 |
| light (primed band, form) | #EFEAE1 · ink #17181A · muted #5E5A54 · accentOnLight #0B6374 |

Contrast (tools/contrast.mjs):
| pair | ratio | use |
|---|---|---|
| #EDE6DA on #141517 | 14.73 | body |
| #A39D93 on #141517 | 6.78 | muted body |
| #8AD4E2 on #141517 | 10.95 | accent text, focus ring |
| #141517 on #8AD4E2 | 10.95 | primary button text |
| #F2B544 on #141517 | 9.97 | signal text |
| #EDE6DA on #22252A | 12.39 | card body |
| #A39D93 on #22252A | 5.71 | card muted |
| #8AD4E2 on #22252A | 9.22 | card accent |
| #F2B544 on #22252A | 8.39 | stars on card |
| #EDE6DA / #8AD4E2 / #A39D93 on #0B0C0E | 15.77 / 11.73 / 7.26 | hero, footer |
| #17181A on #EFEAE1 | 14.82 | light band body |
| #5E5A54 on #EFEAE1 | 5.71 | light band muted |
| #0B6374 on #EFEAE1 | 5.74 | accent text + focus on light |
| #FFFFFF on #0B6374 | 6.88 | button on light band |
| #EDE6DA on #0B6374 | 5.54 | alt button text |
| #17181A on #F2B544 | 9.70 | signal chip text |
| #17181A / #5E5A54 / #0B6374 on #E3DCD0 | 13.04 / 5.02 / 5.05 | input fill on light band |
| FAIL: #8AD4E2 on #EFEAE1 1.39, #0B6374 on #141517 2.65, #8AD4E2 on #0B6374 4.12 (large only), #3A3D43 on #141517 1.67 | | rules/shapes only, never words |

## 6. Hero family 3: Type mask
Giant Epilogue h1 "Walls that pass the side light." whose letters are windows onto a lit knockdown surface. Cliché
broken: the mask isn't decoration on a stock photo. It *demonstrates the product*: the beam rakes, bumps show inside
the letters, then the surface settles flat (L5). A plain sr-only h1 copy is not needed: the h1 is real text with
`background-clip:text` over an SVG data surface, and a solid #EDE6DA fallback with no clip support/forced-colors.
Tool panel (finish-level picker) docked right at ≥1024 (7/5); below the CTAs on mobile.

## 7. Motion score
- **Intro:** beam sweeps across the h1 once (1.1 s, azimuth 200→165°), skipped on scroll/key; text readable at t=0.
- **Story 1 (dial):** finish-level story pinned 220svh ≥1024; --sw-p moves the strip L0→L5 and flattens the wall. Mobile: 6 stacked steps, each enters with its cell lit.
- **Story 2 (wipe):** texture swatches: a light gradient wipes across each once on entry, shadows draw in.
- **Hover:** a 120° side-light gradient slides 30% across cards/swatches on hover+focus-visible. No lift.
- **Reduced motion:** static light at azimuth 170°, elevation 10; strip shows each section's final level; no pin.

## 8. Tools
| tool | inputs | output | module | hand-off |
|---|---|---|---|---|
| Finish-level picker (hero) | room, big/west window y/n, sheen (flat/eggshell/semi), texture on top y/n | L3/L4/L5 + reason line | `tabs` + `estimator` | "Put L5 on my quote" → form `level` |
| Texture matcher | 4 lit swatches, wall/ceiling, decade | name, how applied, blend difficulty, "sample board first" | `tabs` | "Send a side-lit photo" → form `texture` |
| Patch sizer | coin/fist/plate/door, wall/ceiling, textured y/n, paint after y/n | Sample range from facts.prices, visits = coats + dry, dust note | `estimator` | "Book this size" → form `size` |
| Popcorn test-first | decade, painted y/n, tested y/n | pre-1980 → "Test first", steps, lab fee {{prices}} $60-$120 Sample; "check the current rules on Oregon DEQ's website" (link text only, no external link per homepage-only rule: plain text) | `checklist` | "Book a sample visit" → form `service=popcorn` |
| ZIP | 5 digits | in area / who to call | `zip` | prefills form zip |
| Quote form | what, size+photo, wall/ceiling+texture, level, timing, contact | stored then sent | `form` | receives all above |

## 9. Voice
- "Under a work light at 8°, a Level 4 seam shows. Under your ceiling light, it doesn't. We tell you which one you're paying for."
- "Pre-1980 popcorn gets a lab sample before anyone scrapes. That's the order."
- "Point at anything you can see. We fix it before we pack up."
Never: seamless, flawless, premier, top-notch, no job too small.
