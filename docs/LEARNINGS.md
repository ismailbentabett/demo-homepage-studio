# LEARNINGS: exact values and traps

Values that already scored 10, and mistakes that already cost a round. Read it before stage 3 and
before every elevate/fix round. When a run learns something new (a bug that cost a round, a value
that moved a score), append it to the right section with the site id and date. Keep entries short:
the value, where it goes, why.

Source of the first entries: the Golden Touch reference build (v2 8.26 → v3 8.97 → 10). Golden Touch
is a reference for *craft values*, never a design to copy: its blueprint/gold look belongs to it.

---

## 1. Values that work (copy the value, not the look)

### First screen
- **Hero height:** `min-height: calc(100svh - var(--header-h))` so the top 40–120px of the next band
  peeks in. That edge replaces a "scroll" cue (which is banned).
- **h1 size:** start from `font-size: clamp(2.6rem, min(9vw, 9.5svh) + .1rem, 5.25rem)`. The `svh`
  term stops it overflowing 1440×900 and 1024×768; the `vw` term lands 375px on 3 lines. Tune per
  face: condensed faces can go to 6rem max, wide grotesks stay ≤ 5rem.
- **Proof line under the h1:** one factual line in `--fs--1`/`--fs-0`: hours · area · sample rating
  with its Sample tag. "Mon–Sat 8–6 · Pinellas County · 4.8 (Sample rating)". Moved firstScreen
  8.5 → 9.
- **Rotating word without reflow:** a fixed-width slot. All words stacked in one grid cell, only the
  active one visible, so the width is the widest word and the h1 never moves:
  ```html
  <span class="rot" aria-hidden="true" data-rotate="kitchens|bathrooms|basements"></span>
  <span class="sr-only">kitchens, bathrooms and basements</span>
  ```
  ```css
  .rot{display:inline-grid}
  .rot>*{grid-area:1/1;opacity:0;transition:opacity 200ms var(--ease-out)}
  .rot>.is-on{opacity:1}
  ```
  (The kit `rotator` builds the children; check kit/README.md for its exact markup.)
- **Hero video scrim at ≥ 900px** (replace `c` with the deep colour's RGB):
  ```css
  @media (min-width:900px){
    .hero__scrim{background:
      linear-gradient(90deg, rgba(c,.92) 0%, rgba(c,.78) 34%, rgba(c,.18) 62%, rgba(c,0) 100%),
      linear-gradient(0deg, rgba(c,.55) 0%, rgba(c,0) 30%)}
  }
  ```
  The footage carries the right half; contrast lives only behind the text column. Measure contrast
  over the **brightest** frame of the clip, not the average.
- **Line-mask h1 reveal:** each line wrapped in an `overflow:clip` mask, inner span
  `translateY(100%) → 0`, 70ms stagger, 700ms, `cubic-bezier(.2,.7,.1,1)`, once, no bounce. Text is
  in the DOM and readable before the animation (the mask only exists under `.sw-motion`).

### Layout
- **Trust / proof grid at ≥ 1100px:**
  `grid-template-columns: minmax(0,.8fr) minmax(0,1.2fr) minmax(0,1fr) minmax(0,1.6fr)`.
  Never `auto` columns (bug B1: one column 55px, another 508px, every theme wrapped 3 lines).
  Status sentences ("Open now, closes 6:00 PM") at `--fs-1`; only numbers and the phone at `--fs-2`.
- **Pinned story height:** `calc(var(--n) * 55svh + 100svh)` (≈ 2,800px for 4 steps). 85svh per step
  was 3,960px: 4+ screens for four sentences, where people bail (bug B5).
- **No pin under 640px.** Stacked cards with a clip reveal instead. A pin on a phone feels like
  scroll-jacking even when it isn't.
- **Break up dark runs.** deep → paper → deep, never deep → deep. Two touching dark bands read as one
  long block (cost a full layout point).
- **One job per section.** If a section answers two questions, split it or cut one.

### Type
- **Lead paragraph:** `font-size: var(--fs-1); font-weight: 450; font-variation-settings: "opsz" 24`
  on faces with an optical-size axis (Source Serif 4, Fraunces, Literata, Newsreader, Bricolage).
- **Variable axes on purpose:** e.g. Archivo `font-stretch: 75%` for display, `87.5%` for labels;
  Bricolage `wdth` 75–100 and `opsz`; Instrument Sans `wdth`. A width axis is a cheap, distinctive
  second voice from one family.
- **Font loading:** preload the display woff2 (≈ 30–60KB, Latin subset) with
  `"preload": true` in site.config.json. At most 2 preloads.
- Headings `text-wrap: balance`; paragraphs `text-wrap: pretty`; numbers `font-variant-numeric:
  tabular-nums` (prices, hours, phone, counters).

### Tap targets
- **Inline links:** `display:inline-block; padding-block:12px; margin-block:-12px` (14px for 20px+
  body). The hit area reaches 48px without changing line spacing. Then check the enlarged boxes do
  not overlap the line above (look at the 375 screenshot); if they do, move the link into a button
  row. Bug B3: five inline links were 23–32px tall.
- Gap between tap targets ≥ 8px.

### Motion
- **Easing tokens:** `--ease-out: cubic-bezier(.23,1,.32,1)`, `--ease-io: cubic-bezier(.77,0,.175,1)`.
- **Durations:** press 120ms, ui 200ms, page 520ms, story 900ms, stagger 60ms (40–80 range).
- **Text entrance:** opacity 0→1 + translateY 24px→0, 500ms, starts when the top reaches 85% of the
  viewport. **Image entrance:** `clip-path: inset(0 0 100% 0)` → `inset(0)`.
- **Vary by role, not by invention:** text rises, images unclip, numbers count, the signature draws,
  and quiet sections (a statement, the FAQ) do not animate at all. Same reveal on every section
  reads as a template.
- **Hover language:** a hairline under the item that grows `transform: scaleX(0→1)` from
  `transform-origin: left`, 200ms. One language for the whole site, inside `@media (hover:hover)`.
- **Press:** `:active{transform:scale(.97)}`, 120ms. Never animate from `scale(0)`.
- **Lenis:** `lerp: .1`, `wheelMultiplier: 1`. Smoother feels floaty; floaty reads as scroll-jacking.
- **Marquee:** pauses on `:hover` and `:focus-within`, `animation: none` with reduced motion.
- **Phone story reveal** (IntersectionObserver for stacked cards): `rootMargin: '0px 0px -5% 0px',
  threshold: .02`. Higher thresholds left tall cards hidden on 320×640.
- **Signature scrub example:** a "plan becomes build" wipe. A line drawing sits over its photo;
  a scroll var `--sw-p` (0→1) drives `clip-path: inset(0 calc((1 - var(--sw-p)) * 100%) 0 0)` on the
  photo while the drawing's opacity goes `1 - var(--sw-p)`. Reverses on scroll up. Static layout
  with reduced motion: drawing and photo side by side.
- **Gallery filter:** FLIP, transform only (`kit filter` does it). Never animate grid columns.

### Photo
- **One grade per site:** start from `filter: saturate(.85) contrast(1.05) sepia(.08)` and tune to the
  palette (cool palette: drop the sepia, add `hue-rotate(-4deg)`; warm: sepia .12). Apply it to every
  `img` and the video poster. It turns 20 photographers into one shoot. Moved photo 7 → 8.
- **Drop off-topic frames** (commercial, high-rise, wrong climate) even if the slot looks empty.
- `object-position` puts the subject on a third; write it per photo in plan/05-media.md.

### Video
- Encode: `ffmpeg -i in.mp4 -vf "scale=1280:-2,fps=24" -c:v libx264 -crf 28 -preset slow -an
  -movflags +faststart out.mp4`. Target 3–8MB, hard limit 15MB (bug B4: a 35MB clip silently became
  a still). The media tools normally do this; check the size in the manifest.
- Pause button label: "Pause background video" / "Play background video" (the `[[video]]` macro
  adds it; do not rename it).

### Tools
- **Estimator that wins wow:** as the visitor picks rooms and scope, a live SVG sketch builds (one
  block per room, revealed with a staggered `clip-path`, hatching for the scope), and it ends on a
  printable scope sheet (`@media print` styles the sheet only). It asks for budget in words ("under
  a few thousand / mid-range / bigger project"), never prints `$`. Ranges, if any, come only from
  `{{proof.prices.*}}` with a Sample tag. Moved wow 8 → 10.
- Every tool works with JS off as a short explanation + the call button.

### Conversion and copy
- **Microcopy under the form button:** "We'll call you back to set up a visit." Beside the phone:
  the hours (`{{hours|today}}`).
- One name for the primary action, everywhere ("Price it" in the hero = "Price it" in the bar).

### Polish
- SVG favicon + 180px apple-touch (site.config `favicon`), OG 1200×630 (`ogPhoto`), `theme-color`
  = the deep colour, a specific JSON-LD type (`RoofingContractor`, `Plumber`, `HVACBusiness`,
  `Electrician`, `HousePainter`, `GeneralContractor`, `HomeAndConstructionBusiness` as fallback),
  a print stylesheet, `loading="lazy"` + width/height on every below-fold image, the hero poster
  preloaded (the `eager` img attr does it). Lighthouse mobile 95+.
- **Forced colors:**
  ```css
  @media (forced-colors: active){
    .btn{border:2px solid CanvasText}
    .btn--primary{forced-color-adjust:none}  /* only if you set both colors yourself */
  }
  ```
- **Details:** radius chosen once (e.g. 2px everywhere, or square + full pills, never a mix), rules
  at one weight (e.g. 1.5px), concentric radius for nested shapes, dimension ticks on dividers if the
  concept is technical.
- **Small wins:** magnetic primary button (`data-magnetic`, ≤ 8px pull), a View Transitions wipe on
  the form step change, the lightbox returns focus to the thumbnail it came from.

### A palette with its contrast table (shape to follow, never the colours)
| Role | Hex | On | Ratio | Use |
|---|---|---|---|---|
| deep | #0E2233 | vellum #EEF1F0 | 14.3 | body on deep, reversed |
| vellum | #EEF1F0 | deep #0E2233 | 14.3 | body on paper |
| gold | #E0A526 | deep #0E2233 | 7.4 | accent words, dimension rule |
| gold-ink | #8A5A00 | vellum #EEF1F0 | 5.2 | accent words on light |
| gold | #E0A526 | vellum #EEF1F0 | 1.9 | **never for words**, rules only |
Always generate the real numbers with `node tools/contrast.mjs`; the ones above were computed the same way.

---

## 2. Traps (each one cost at least one round)

| # | Trap | What happened | Rule |
|---|---|---|---|
| T1 | Remote media | Pexels/Unsplash URLs are blocked in the viewers and the render check fails outgoing requests. | Only `[[img]]`/`[[frame]]`/`[[video]]`/`[[purl]]` with manifest keys. The tools localize the files. |
| T2 | Shell heredoc | Writing CSS through `cat <<EOF` mangled `$`, backticks and backslashes. | Write every src file with the **Write** tool. Edit with **Edit**. |
| T3 | CSS escapes | `content:"\00B7"` turned into a null byte. | Use the literal character: `content:"·"`. Same for `–`, `—`, `’`. |
| T4 | Stale screenshots | Screenshots lagged one step behind the fix. | Re-run `check-render` after the build; compare timestamps in render.json with the last src change before judging. |
| T5 | "Before/after" | The phrase slipped into a caption and an alt text. | Stock is never before/after. Use "Planning / Build" or describe the frame. check-static scans alt too. |
| T6 | Template reveal | The same fade-up on every section cost a full motion point. | Vary by role; leave quiet sections still. |
| T7 | Dark run | Two `t-deep` bands touched (break, then reviews). | Put `t-paper` or `t-light` between them. The rhythm gate fails it. |
| T8 | Section sameness | Three "heading left, grid right" bands in a row. | ≥ 3 layout families, no neighbours alike; change the reading direction. |
| T9 | Heavy video | A 35MB clip was swapped for its poster. | ≤ 15MB, check the manifest bytes. |
| T10 | Long story | 85svh per step = 4 screens for 4 sentences. | 55svh per step, no pin < 640px. |
| T11 | Smothered hero | 96% scrim at the left, 88% at 42%: the video showed in 25% of the screen. | Use the scrim in §1. |
| T12 | Small inline links | 5 links at 23–32px. | Padding-block trick in §1. |
| T13 | Lopsided grid | `auto` columns in the trust row. | `minmax(0, Nfr)` columns. |
| T14 | Score arithmetic | A critique wrote 9.03 for a real 8.97. | Write the Σ line; score.mjs recomputes. |
| T15 | Hidden after scroll | Content behind `.sw-motion` with a reveal that never fired at 320×640 (threshold too high). | `threshold:.02`, `rootMargin:'0px 0px -5% 0px'`; render check "nothing hidden after scrolling" catches it. |
| T16 | Grade inflation | A score rose without the screenshot changing. | Critic compares with the previous round's screens. |

---

## 3. What moved a site from 8 to 10 (ranked by points per hour)

1. **h1 line mask** + **fixed-width rotator** + **proof line under the h1** + **next band peeks**
   (firstScreen 8.5 → 10 together).
2. **Break up dark-band runs** (layout +1, ten minutes).
3. **A signature system everywhere**, not a hero effect: on Golden Touch a title-block (a ruled box
   with SHEET / SCOPE / AREA fields filled only with facts) appeared in the hero, every service, the
   estimator sheet and the footer (distinctiveness 8 → 10). Find *your* concept's equivalent.
4. **The signature in motion:** the plan → build clip wipe driven by `--sw-p` (wow + motion).
5. **Shared photo grade + dropping off-topic stock** (photo 7 → 8.5).
6. **One job per section** and no repeated idea (copy 8.5 → 9.5).
7. **Microcopy at moments of doubt** ("We'll call you back to set up a visit.").
8. **Estimator sketch + printable sheet** (wow 8 → 10).
9. **Head polish + forced colors** (polish 8 → 9.5).
10. **One recurring divider that is the signature:** on Golden Touch a 2px gold dimension line with
    end ticks between every section. A divider that means something beats three that don't.

---

## 4. Run log (append below: `YYYY-MM-DD <id>: what was learned`)

- 2026-10-25 workspace: seeded from the Golden Touch audit.
