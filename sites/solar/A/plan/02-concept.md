# solar-A · Concept

## 1. Three obvious concepts (rejected)
1. **"Sacramento sun, lower bills."** Sunset hero, big kW counter, savings slider. Rejected: it is every competitor (brief §4.1,
   §4.3) and breaks the house rules (no bill promises). A contractor has seen it 20 times.
2. **Pitch-cut sections + racking rail grid (the brief seed taken literally).** Every band edge cut at 5/12, rails behind the
   content. Rejected: gutter-A already ships "Pitch Run" (a diagonal falling down the page on hero 11) and it reads as
   decoration; a faint rail grid is wallpaper, not a story.
3. **The install timeline card stack.** Nine numbered cards with icons, "How it works" in a 3x3 grid. Rejected: a template;
   every solar site has "Consult → Design → Install → Enjoy".

## 2. Thesis
**The page is a roof section drawn over the homeowner's own rafters: nothing gets bolted until the rafter under it is found,
so every section snaps a chalk line, locates its rafter, and only then drops its flashed mount.**
(Arguable: it puts structure and leaks, not savings, at the centre of a solar sale.)

## 3. Signature system: "Snap Line + Flashed Mount"
Primitive (`.rafters` + `.mount`, drawn once in 03-system): a 1.5px graphite rule carrying small rafter-section ticks (6x10px
rectangles) at a fixed 24-in-on-centre rhythm (`--oc`: 32px mobile, 48px desktop). A blue chalk line (`--signal`) snaps along it
(scaleX 0→1, 180ms, chalk dust = 3px blurred copy fading out over 400ms). Then an L-foot mount glyph (SVG: square flashing plate,
L bracket, lag bolt) drops 12px onto the found tick and a yellow washer dot lights. `data-sw-signature` on each instance; CSS var
`--found` (0/1) and `--n` (mounts bolted) driven by app.js.
- **Hero:** the rafter row runs along the eave of the 5/12 roof-plane photo (rotated 22.62°), ticks along the pitch, labelled pitch triangle
  "5 / 12"; the quiz verdict bolts the hero mount; intro drops it once on load.
- **Install in order (story 1):** a sticky rafter row with 9 rafters across the section top; each step entering view snaps
  and bolts rafter n, counter "Mount 03 / 09". Step text below says what the homeowner sees that day.
- **Mount detail (story 2):** the primitive zoomed 10x as an exploded SVG section: rafter → lag → flashing → L-foot → rail →
  clamp → panel; assembles with scroll (`--sw-p`) and has hotspots with plain-word labels. Guarantee sits beside it.
- **Proof:** each review card hangs from one mount on a shared rafter row (cards = panels clamped to the rail); the found
  tick under each card is labelled with the town.
- **Sample ranges:** each price row is a rail between two clamps; the range bar is drawn between the clamps, Sample tag on the rail.
- **Footer:** mirror diagonal (the far roof face) with all 9 mounts bolted, mono line "9 of 9 mounts · roof checked first".
Wow moment: the chalk snap + mount drop on the hero diagonal, then the exploded mount assembling.

## 4. Type
- Display: **Saira Condensed** 600/800 (squarish, mechanical, stamped like a racking spec plate; tall step numbers). Registry: 1.
- Text: **Public Sans** 400/500/700 (plain, government-grade honesty; homeowners 40-70 read it easily).
- Accent: **JetBrains Mono** 500 (rafter labels, pitch, counters, Sample tags). Registry: 0.
Why: a stamped-steel condensed face over a plain civic sans = hardware spec sheet + honest letter. Never Inter/Roboto display.

## 5. Palette: "Comp Slate + Morning Paper + Snap-Line Blue + Sun Yellow" (light-led)
| Role | Hex | Use |
|---|---|---|
| paper | #F5F2EA | main ground |
| paper-2 (mid) | #E6E3DA | alt bands, cards |
| ink | #22262B | body, headings |
| muted | #4E555C | secondary text on light |
| deep | #2C3640 | comp-shingle slate: deep bands, primary button |
| accent (sun yellow) | #F2B705 | washers, range bars, buttons on deep; never words on light |
| accent-ink | #8A5A00 | yellow-family words on light |
| signal (snap-line blue) | #1F5FA8 | chalk line, links, focus on light |
| roof grey | #8E979F | shapes/ticks only |

Contrast (node tools/contrast.mjs, real output):
| fg | bg | ratio | verdict |
|---|---|---|---|
| #22262B | #F5F2EA | 13.60 | body ✓ |
| #22262B | #E6E3DA | 11.85 | body ✓ |
| #4E555C | #F5F2EA | 6.75 | muted body ✓ |
| #4E555C | #E6E3DA | 5.89 | muted body ✓ |
| #8A5A00 | #F5F2EA | 5.29 | accent words ✓ |
| #8A5A00 | #E6E3DA | 4.61 | accent words ✓ (≥16px only, prefer paper) |
| #1F5FA8 | #F5F2EA | 5.75 | links + focus ✓ |
| #1F5FA8 | #E6E3DA | 5.01 | links + focus ✓ |
| #FFFFFF | #2C3640 | 12.28 | white on primary button ✓ |
| #F5F2EA | #2C3640 | 10.98 | body on deep ✓ |
| #C9CDD1 | #2C3640 | 7.68 | muted on deep ✓ |
| #F2B705 | #2C3640 | 6.75 | yellow words + focus on deep ✓ |
| #F2B705 | #22262B | 8.36 | yellow on graphite ✓ |
| #22262B | #F2B705 | 8.36 | ink on yellow button/band ✓, focus on yellow ✓ |
| #2C3640 | #F2B705 | 6.75 | slate on yellow ✓ |
| #FFFFFF | #22262B | 15.21 | footer ✓ |
| #B9C0C6 | #22262B | 8.27 | footer muted ✓ |
| #F2B705 | #F5F2EA | **1.62 FAIL** | shapes only (washers, bars) |
| #8E979F | #F5F2EA | **2.65 FAIL** | ticks/rules only |
| #1F5FA8 | #F2B705 | **3.54** | never words; no blue on yellow |
| #1F5FA8 | #2C3640 | not used | focus on deep = yellow |

## 6. Hero family: 7, tool-first (changed from 11)
Brief §6 asked for 11 (diagonal split); check-unique refused it: family 11 is at the library max of 7 (gutter-A, hvac-C, …).
Family 7 suits the thesis better anyway: "roof first" means the roof-ready quiz IS the first screen. Unique in niche (B=2, C=13).
Layout ≥1024: 12-col. Left 6 cols: kicker, h1 "Roof first. Panels second.", lead, Call + "Check my roof first", proof line.
Right 6 cols: the drone photo clipped to a 5/12 roof plane (clip-path polygon: eave bottom-left → ridge top-right), the rafter
row + pitch triangle "5 / 12" on its eave line; the quiz card (question 1 of 5, roof-age chips, "Next") overlaps the lower
photo edge by 64px. 390: h1 + buttons, then the pitched photo strip (16:9 clipped), then quiz card; the card top peeks in.
Cliché broken: a tool-first hero is usually a bare form; here the tool sits on a drawn roof section and its answer bolts a mount.
JS off: the quiz card shows 5 questions as a plain list + "Call for a roof check".

## 7. Motion score
- **Intro (1.1 s, content readable at 0 ms):** diagonal draws eave→ridge (600ms, ease-io), rafter ticks pop along it (40ms
  stagger), chalk snaps (180ms), the hero mount drops (240ms ease-out). Any scroll/key skips to end state.
- **Story 1 "bolt" (Install in order):** sticky rafter row; each step at 60% viewport snaps + bolts rafter n, counter counts
  01→09; no pin (sticky strip only), phones: inline rafter row per step card.
- **Story 2 "stack" (Mount detail):** exploded mount assembles part by part on `--sw-p` 0→1 (each part translateY from its
  exploded offset to 0); ≥900px sticky 1 screen + 140svh run; phones: static assembled drawing + numbered list.
- **Hover (one language):** a 2px snap-line-blue chalk underline that grows scaleX 0→1 from left, 200ms, inside (hover:hover).
- **Reduced motion:** all mounts bolted, chalk lines drawn, exploded mount shown assembled with labels, counters at final values.

## 8. Tools
1. **Roof-ready quiz** (`estimator`, choice mode): roof age (<10 / 10-20 / 20+ / not sure), material (comp shingle / tile /
   flat-foam / metal), shade (open / some trees / big trees), electrical panel (100A / 200A / not sure), re-roof planned (no /
   within 5 yrs). Output: "Ready", "Check first" or "Roof first" + one reason line, and a mount glyph that bolts (ready) or
   stays loose. Hand-off: "Book this roof check" → form prefill `service=Roof assessment`, `note=verdict + answers`.
   First question also appears inline in the hero (chips link to #roof-ready with `?age=` state).
2. **Roof-fit panel count range** (`estimator`): roof faces picker (1-4 faces, each small ~250 / medium ~400 / large ~600 sq ft
   usable) + shade (open / some / heavy). Output: panel range (sq ft ÷ 21 to ÷ 18, minus 15% setbacks, shade cuts 0/20/40%),
   kW range at ~400 W each, drawn as panels filling an SVG roof face. Line: "Sample only; your real numbers come from a site
   visit." Hand-off → form `service=Solar panel installation`, `note=faces, shade, range`.
3. **ZIP check** (`zip`) with `{{biz.zips}}`; in-area → "We cover {{zip}}" + form; out → phone.
4. **Quote form** (`form`, 3 steps): service + note → ZIP + roof type → name, phone, best time. Microcopy "We call back to set a
   roof visit." No electric-bill field.

## 9. Voice
- "We find your rafters before we talk about panels."
- "If the decking near your chimney is soft, you'll hear it from us first, not from a leak."
- "Bring the other company's packet. We'll read it with you, page by page."
Never: save, free, $0, revolutionary, seamless (also no "green", "go solar", percentages off a bill).
