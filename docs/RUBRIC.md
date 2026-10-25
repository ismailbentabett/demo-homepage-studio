# RUBRIC: how a demo homepage is scored

The critic scores every site against this file in stage 9. `tools/score.mjs` reads the result
(`qa/scores-N.json`) and prints the verdict. This file is the contract between the critic and the
loop: if the critic is soft, 90 sites ship soft.

The bar is an award jury (Awwwards Site of the Day, CSSDA, FWA), applied to a contractor homepage.
A 10 means "a jury member would bookmark it". A 7 means "a good agency template". Most first
rounds land between 7.5 and 8.8. That is normal and is why the loop exists.

---

## 1. Categories, weights and floors

| Key | Category | Weight | Floor | Pass mark |
|---|---|---|---|---|
| `firstScreen` | First screen | 14 | 7 | 9.0 |
| `distinctiveness` | Distinctiveness | 12 | 7 | 9.0 |
| `type` | Typography | 10 | 7 | 9.0 |
| `layout` | Layout and rhythm | 10 | 7 | 9.0 |
| `photo` | Photo and video | 8 | 6 | **8.5** |
| `copy` | Copy | 8 | 7 | 9.0 |
| `mobile` | Mobile | 7 | 8 | 9.0 |
| `a11y` | Accessibility | 7 | 8 | 9.0 |
| `motion` | Motion and interaction | 12 | 7 | 9.0 |
| `wow` | Wow moment | 8 | 7 | 9.0 |
| `polish` | Polish | 4 | 6 | 9.0 |
| | **Total** | **100** | | |

**Weighted score** = Σ(weight × score) / 100, rounded to 2 decimals. Scores use 0.5 steps only
(7, 7.5, 8, 8.5, 9, 9.5, 10). No 8.7, no 9.25.

### Two modes: `fast` (default) and `strict`

`data/run-config.json` holds `{"mode": "fast"}` or `{"mode": "strict"}`. score.mjs, deliver.mjs and
check-render read it. **The critic scores exactly the same way in both modes**: the mode only moves
the pass line and the round limit, never the anchors in §3. Do not soften a score because the mode is fast.

| | `fast` (default: 90 sites in ~5 h, 10 workers) | `strict` |
|---|---|---|
| Pass: weighted | ≥ **9.0** | ≥ **9.5** |
| Pass: every category | ≥ **8.5** (photo ≥ **8.0**) | ≥ **9.0** (photo ≥ **8.5**) |
| Critique rounds | **2** | 4 |
| After the last round | deliver if weighted ≥ **8.8**, no blockers in the checks, `mustFix` empty; otherwise NEEDS_HUMAN | NEEDS_HUMAN |
| Render check | 3 viewports (390×844, 1024×768, 1440×900) × 2 modes (motion on, reduced motion) | 5 viewports × 3 modes (adds 375×812, 320×640, JS off) |
| ELEVATE window | 8.0 ≤ weighted < 9.0 | 8.5 ≤ weighted < 9.5 |
| Pipeline | merged calls: designer (stages 1-5) → builder (4, copy, 6-8) → critic → builder → critic | one agent per stage (CLAUDE.md table) |

In fast mode JS-off is not screenshotted, but the reduced-motion shots must still show every word
(reduced motion and JS-off share the same "nothing hidden" rule, §2.8).

### Verdict (score.mjs is the authority)

`P` = the mode's pass line from the table, `R` = its round limit.

| Verdict | Rule |
|---|---|
| **PASS** | weighted ≥ P **and** every category ≥ its pass mark **and** `qa/static.json` + `qa/render.json` clean **and** `mustFix` empty **and** round ≤ R |
| **NEEDS_HUMAN** | not PASS and round = R (fast mode: unless the "after the last round" rule above delivers it) |
| **FIX** | any category below its floor, or weighted below the ELEVATE window, or checks not clean, or `mustFix` not empty |
| **ELEVATE** | everything else (inside the ELEVATE window, floors met, checks clean, no mustFix) |

A mustFix item caps the category it belongs to at 8.5 (strict) / 8.0 (fast). You cannot hand out
a 9 and a mustFix in the same category; if it is truly a must-fix, the score shows it.

---

## 2. How to score (critic calibration)

1. **Evidence only from what a visitor sees.** Score from `qa/screens/*.png`, `dist/index.html`,
   `qa/static.json` and `qa/render.json`. Never open `src/`. Never read `plan/` to learn what the
   page "is meant to do": read `plan/concept.json` and `plan/02-concept.md` only to check whether
   the promised thesis and signature actually show up on screen. Intent is worth 0 points.
2. **Name the screenshot for every deduction.** "`qa/screens/390x844-first.png`: h1 runs 5 lines,
   buttons fall below the fold (−1.0 firstScreen)". A deduction without a file name is deleted.
   Use the exact file names `check-render` wrote (listed in `qa/render.json`); the names in this
   file are examples of the pattern.
3. **A 10 is rare.** Give one only when the anchor for 10 below is fully met *and* you cannot name
   a single improvement. Two 10s on one site is unusual; four is suspicious; re-check them.
4. **Start each category at the 8 anchor** and move up or down from evidence. Do not start at 10
   and subtract.
5. **No grade inflation between rounds.** A score only goes up when a screenshot of the thing
   changed. Compare `qa/screens/` with `qa/best/` or the previous round. "They said they fixed it"
   is not evidence. If the screenshot looks the same, the score stays the same. A score can fall in
   a later round if the fix broke something else.
6. **Compare with siblings.** Open the first-screen and full-page shots of the other directions in
   the same niche (`sites/<trade>/*/qa/screens/1440x900-first.png`) and of 3 delivered library
   sites. If this site could swap logos with a sibling, distinctiveness ≤ 7.
7. **Recompute the weighted score by hand and write the arithmetic** in the critique. Known trap:
   9.03 was once written when the real number was 8.97, and the site shipped as a pass it had not
   earned. Show `14×9 + 12×9.5 + … = 897 / 100 = 8.97`. score.mjs recomputes it; if your number
   differs, yours is wrong.
8. **Reduced-motion and JS-off screenshots are first-class.** If content is missing or broken
   there, it is a mustFix in a11y, whatever the motion-on version looks like.
9. **Every phone viewport in `qa/render.json` counts equally for mobile** (strict: 390×844,
   375×812, 320×640; fast: 390×844 only, so judge 320 by reading the CSS breakpoints in
   `dist/index.html` and the 390 shots). A broken 320 is a broken site.
10. **Do not score what the tools already gate** (banned words, tokens, failed requests) twice.
    If a check failed, the verdict is already FIX. Score the design.

---

## 3. Categories

Each category: what it measures, anchors at 6 / 8 / 9 / 10, and standard deductions (from the 8
anchor unless stated). Anchors are observable: you must be able to point at them in a screenshot.

### 3.1 First screen (`firstScreen`, 14, floor 7)

The 1440×900 and 390×844 first-screen shots (`*-first.png`) and the 0% scroll shot. What a
homeowner understands in 3 seconds, and whether they want to scroll.

| Score | Anchor |
|---|---|
| 6 | Generic headline ("Quality roofing you can trust"), two equal buttons, phone not visible, a hero photo with text pasted on it. Could be any trade in any city. |
| 8 | Trade + city clear in the h1, one primary action, phone visible in header or hero, readable contrast. But the composition is a stock "photo + left text block", or the next band does not peek, or the intro animation delays reading. |
| 9 | h1 states trade + city + outcome in ≤ 8 words, one primary action plus a quieter secondary, phone visible on both viewports, a proof line under the h1 (hours, area, a sample rating marked Sample), the next band peeks 40–120px, the hero family is executed with intent. |
| 10 | The 9, plus: the composition could only belong to this concept (the signature is visible in the first screen), the intro runs under 1.2 s and never blocks reading (text readable at 0 ms with reduced motion, readable by 400 ms with motion), and on 390×844 the h1 is ≤ 4 lines with both actions above the fold. |

Deductions:
- h1 > 8 words or > 3 lines at 1440: −0.5. > 4 lines at 390: −1.0.
- Primary action below the fold at 390×844: −1.5.
- No phone visible on the first screen at either size: −1.0.
- Two equally loud buttons: −0.5.
- Next band does not peek (hero exactly 100vh or taller): −0.5.
- Video smothered by a scrim (more than 70% of the frame at ≥ 60% opacity): −1.0.
- Text over the brightest video frame under 4.5:1 (body) / 3:1 (h1): −1.0 and a mustFix.
- Intro hides the h1 longer than 1.2 s: −1.0.
- Rotating word reflows the h1 (line count or width changes between words): −0.5.
- Headline is a slogan with no trade or no place ("Built to last."): −1.0.

### 3.2 Distinctiveness (`distinctiveness`, 12, floor 7)

Does it look like this concept and nothing else? Judged against the two sibling directions and
the library, not against "the internet".

| Score | Anchor |
|---|---|
| 6 | Template look: hero, three icon cards, logos strip, testimonials slider, CTA band. Swap the logo and it is a sibling. |
| 8 | A clear palette and type pair, one recurring motif, but the motif appears in 1–2 places and the section shapes are standard. |
| 9 | The signature system (concept.json `signature`) shows in ≥ 4 sections, including the hero and the footer; at least 3 layout families that a template would not use; type and palette unmistakably differ from both siblings. |
| 10 | Cover-the-logo test: a screenshot of any one section names the business. The signature does real work (it organises information, it is the divider, the tool output, the gallery frame), not decoration. A jury would describe the site in one sentence that names its idea. |

Deductions:
- Signature in < 4 sections: −1.0. Only in the hero: −2.0.
- Sibling in the same niche shares the hero family, the display face or the palette family: −2.0 (and check-unique should have caught it).
- Any AI-slop visual tell (list in §5): −0.5 each, max −2.0.
- Three icon-in-square cards in a row: −1.0.
- Same section shape used 3+ times (e.g. three "heading left, grid right" bands): −0.5.
- Motif is pure decoration (could be deleted with no loss of meaning): −0.5.

### 3.3 Typography (`type`, 10, floor 7)

Pairing, scale, measure, rag, hierarchy, details.

| Score | Anchor |
|---|---|
| 6 | One family at 3 weights, body 15px grey, headings all the same size, orphans everywhere. |
| 8 | A good pair from the catalog, a fluid scale, body ≥ 16px at full ink, 45–75ch, balanced headings. |
| 9 | The 8, plus: one scale-contrast moment (a full-width or very large headline against small text), variable axes used on purpose (width, optical size), tabular numerals in prices, hours and phone, lead paragraph set apart, ≤ 5 sizes on the page, no orphans in headings. |
| 10 | Type carries the concept: you could identify the site from a text-only screenshot. Curly quotes, en-dash ranges, `&nbsp;` between number and unit, consistent caps (≤ 3 words, tracked .02–.06em), display tracking −0.02 to −0.05em, line-height .85–1.05 on display. Nothing under 13px. |

Deductions:
- Body under 16px or grey under 4.5:1: −1.0.
- Measure over 80ch or under 35ch in a paragraph: −0.5.
- More than 2 families (a mono for numbers counts as a third unless concept.json lists it as `accent`): −0.5.
- More than 5 distinct sizes on screen: −0.5.
- Inter, Roboto, system-ui or Arial as display: −1.5.
- Orphan (one word on the last line) in an h1/h2: −0.5 each, max −1.0.
- Straight quotes or hyphen ranges ("8-6"): −0.5.
- Status sentence set at a number's display size (the trust-grid B1 bug): −0.5.
- 3+ tiny tracked caps labels in one view: −0.5.

### 3.4 Layout and rhythm (`layout`, 10, floor 7)

Grid, rhythm of tones and densities, one job per section, spacing.

| Score | Anchor |
|---|---|
| 6 | Every section the same width, padding and alignment; long runs of centred text; two dark bands touch. |
| 8 | A real grid, alternating tones, varied section shapes, but the density map is flat or one section tries to do two jobs. |
| 9 | 8–12 sections each with one job, ≥ 3 layout families with no two neighbours alike, a full-bleed break, an asymmetric section, a dense section and a quiet section; gap between sections > gap within; no blank gap over half a screen. |
| 10 | The scroll has a shape (loud → quiet → dense → breath) you can see in the full-page screenshot as a pattern. One place breaks the grid on purpose (type over image, an overlap, an off-grid frame) and it lands. Every column at 1440 is used; nothing floats in empty width. |

Deductions:
- Two dark bands touching (they read as one block): −1.0.
- Three sections of the same tone in a row: −0.5.
- A section with two jobs (e.g. reviews + service area): −0.5.
- Pinned story over `calc(n × 55svh + 100svh)` or a scroll of > 4 screens for one idea: −1.0.
- More than 72% of text centred, or a centred paragraph over 3 lines: −0.5.
- Lopsided grid (columns sized `auto` so one column wraps every word, as in B1): −1.0.
- Blank gap over half a screen at any viewport: −0.5.
- Card inside a card: −0.5.

### 3.5 Photo and video (`photo`, 8, floor 6, pass 8.5)

Stock media made to feel like one shoot for this business. The ceiling is lower because nothing
is the client's own; 9.0 is very good, 10 is exceptional.

| Score | Anchor |
|---|---|
| 6 | Off-topic frames (high-rise, commercial, wrong climate), mixed colour temperatures, faces in the centre, a visible logo or sign. |
| 8 | All frames on-topic and region-appropriate, consistent crop ratios, alt text describes the frame. |
| 9 | One grade across every photo and the video poster (looks like one shoot), object-position puts the subject on a third, frames and masks are part of the signature, video loads fast and has a poster. |
| 10 | Photography is art-directed: crops tell a sequence (plan → work → result), the frame treatment is unique to the concept, and at least one image is used in a way stock never is (type mask, clip reveal tied to scroll, a duotone in the brand colours) without looking like a filter. |

Deductions:
- Any off-topic or wrong-region frame: −1.0 each.
- A face presented as the owner, a readable logo, plate, house number or sign: −1.5 and a mustFix.
- Mixed grades (warm next to cold, one oversaturated frame): −0.5.
- Captions or alt text saying "our work / our team / our crew" or "before/after": mustFix (copy) and −0.5 here.
- Video over 15 MB or no poster: −0.5. Video that never plays (poster only): −0.5.
- Same photo used twice on the page: −1.0.
- Portrait or square crop forced into a wide frame so the subject is cut: −0.5.

### 3.6 Copy (`copy`, 8, floor 7)

Specific, plain, contractor voice, honest demo labelling.

| Score | Anchor |
|---|---|
| 6 | Marketing filler, banned phrases, "Get started" buttons, every section ends on a slogan. |
| 8 | Plain and specific, no banned words, buttons named for the action, Sample labels present. |
| 9 | Voice matches the concept's 3 voice sentences; every section answers one homeowner question from brief §1 in the homeowner's words; microcopy at moments of doubt (under the form button, next to the phone, at the ZIP check); one consistent name for the primary action. |
| 10 | Reads like the best person at the company wrote it: concrete nouns from the trade ("ridge vent", "P-trap", "ledger board"), numbers only where facts allow, honest "it depends on X" answers, and not one line you could paste onto another trade's site. |

Deductions:
- Banned phrase or copy tell (§5) the tools missed: −0.5 each, max −2.0.
- Tricolon headline ("Fast. Fair. Local."): −0.5.
- "Get started", "Learn more", "Submit", "Contact us" as the main action: −0.5.
- Two different names for the primary action ("Price it" in the hero, "Get a quote" in the footer): −0.5.
- Same idea repeated in two sections: −0.5.
- Headline over 2 lines at 1440: −0.5.
- Review or price missing its Sample label: mustFix.
- More than 3 em dashes on the page: −0.5.

### 3.7 Mobile (`mobile`, 7, floor 8)

Every phone shot in `qa/render.json` (fast: 390×844; strict: also 375×812 and 320×640).

| Score | Anchor |
|---|---|
| 6 | Horizontal scroll, tiny links, a desktop layout squeezed. |
| 8 | No sideways scroll, readable type, tap targets ≥ 48px, sticky call bar works. |
| 9 | Composed for the phone, not collapsed: the hero is re-cut (not the desktop crop), no pin under 640px (stacked cards with a clip reveal instead), the mobile bar hides on scroll down and over the form, h1 ≤ 4 lines, tools usable with a thumb. |
| 10 | 320×640 looks designed, not survived. Every section has a phone-specific decision visible in the screenshots (crop, order, density). |

Deductions:
- Any horizontal scroll at any width: mustFix (render check already fails it).
- Tap target under 48px outside sentences or under 44px inside: −0.5 each, max −1.5.
- Pinned scroll under 640px: −1.0.
- Mobile bar covers the form or the footer credits: −0.5.
- Text over 4 lines in a button or card title: −0.5.
- 320×640 has overlapping elements: −1.0.

### 3.8 Accessibility (`a11y`, 7, floor 8)

WCAG 2.2 AA, judged from render.json (axe), the reduced-motion and JS-off shots and the DOM.

| Score | Anchor |
|---|---|
| 6 | Contrast failures, content hidden with reduced motion, unlabeled inputs. |
| 8 | axe clean, skip link, visible focus, labels on every input, reduced motion shows everything. |
| 9 | Focus is designed (3px outline in the accent, 3px offset, 3:1 on every tone); every kit widget has its ARIA (slider valuetext, accordion expanded state, tabs roles, live region on ZIP and estimator); rotating word is aria-hidden with an sr-only static copy; video has "Pause background video"; forced colors keeps borders. |
| 10 | JS-off is a complete, attractive page. Heading order is perfect (one h1, no skips). Form errors are announced and say how to fix them. Nothing depends on colour alone. |

Deductions:
- Any content invisible in the reduced-motion or JS-off screenshot: mustFix, −1.5.
- Focus not visible on one tone: −1.0.
- Rotating text announced repeatedly: −0.5.
- Popup that traps focus without Esc, or opens on load: mustFix.
- Heading level skip: −0.5.
- Input with placeholder as its only label: −1.0.

### 3.9 Motion and interaction (`motion`, 12, floor 7)

Purposeful motion, budget, reversibility, micro-interactions. Judge from the 0/25/50/75/100%
scroll shots, render.json timings and the hooks present in dist/index.html.

| Score | Anchor |
|---|---|
| 6 | Everything fades up the same way, or nothing moves; or motion blocks reading. |
| 8 | A tidy intro, consistent reveals, hover states, reduced motion respected. ≥ 3 hooks beyond plain reveals. |
| 9 | Motion explains something (order in a process story, change in a plan→build wipe, scale on a counter, focus in a lightbox); entrances vary by role (text rises, images clip, quiet sections stay still); one hover language; the story is reversible and pinned only at ≥ 640px; nothing animates layout properties. |
| 10 | One motion idea a visitor would describe ("the drawing turns into the photo as you scroll"), executed with exact easing and timing; micro-interactions on every control (press scale .97, magnetic primary, hairline hover); Lenis feels natural (lerp .1); nothing floaty, nothing bouncy, nothing that waits. |

Deductions:
- Same reveal on every section: −1.0.
- Fewer than 3 different hooks beyond plain reveals: motion capped at 6.
- Intro over 1.2 s or not skippable: −1.0.
- Scroll-jacking (wheel captured, snap that fights the user): −1.5.
- Bounce or elastic easing: −0.5.
- Animating width/height/top/left/margin: −0.5.
- Autoplay carousel or a marquee that does not pause on hover/focus: −0.5.
- Story you cannot scroll back through: −1.0.

### 3.10 Wow moment (`wow`, 8, floor 7)

The one thing a homeowner would show their partner.

| Score | Anchor |
|---|---|
| 6 | Nothing memorable; a well-made page. |
| 8 | One interesting moment (a good tool, a nice reveal) that is not tied to the concept. |
| 9 | The signature moment is tied to the thesis and the trade, and the tool is something a homeowner would actually use and keep (a sketch, a printable sheet, a checklist with an answer). |
| 10 | Two connected moments: the signature in motion and a tool whose output is designed in the signature's language. You can describe it in one sentence and want to try it again. |

Deductions:
- The wow moment is generic (a parallax hero, a counter strip): −1.0.
- The tool's output is a plain text line or a $ figure: −1.0.
- Wow moment broken or missing in reduced motion (it must have a static form that still reads): −0.5.

### 3.11 Polish (`polish`, 4, floor 6)

Head, details, consistency.

| Score | Anchor |
|---|---|
| 6 | Missing favicon, inconsistent radius, a console warning, stray styles. |
| 8 | Favicon, theme-color, OG image, consistent radius and rules, footer designed. |
| 9 | SVG favicon + 180 apple-touch, OG 1200×630, specific JSON-LD type, print stylesheet for the tool sheet, lazy images with width/height, hero poster preloaded, forced colors handled. |
| 10 | Every detail matches the system (radius chosen once, concentric nesting, one stroke width for icons, rules of one weight), the footer is a designed close, nothing out of place at any viewport. |

Deductions:
- Mixed radius (2px here, 12px there, pill there): −0.5.
- Shadows on non-floating things: −0.5.
- Mixed icon stroke widths or emoji icons: −0.5.
- Missing print stylesheet for a printable tool: −0.5.
- `transition: all` anywhere in the CSS: −0.5.

---

## 4. `qa/scores-N.json` (exact shape)

N is the round (1–4). One file per round, never overwritten.

```json
{
  "round": 2,
  "categories": {
    "firstScreen":     { "score": 9,   "notes": "1440x900-first.png: h1 6 words, trade+city+outcome; next band peeks 80px. 390x844-first.png: h1 4 lines, both buttons above fold." },
    "distinctiveness": { "score": 9,   "notes": "Title-block signature in hero, story, estimator sheet, footer (fullpage-1440.png). Siblings B/C differ in face and hero family." },
    "type":            { "score": 9,   "notes": "..." },
    "layout":          { "score": 8.5, "notes": "fullpage-1440.png: reviews (t-deep) touches the break (t-deep) at 62% scroll, reads as one block (-1.0)." },
    "photo":           { "score": 8.5, "notes": "..." },
    "copy":            { "score": 9,   "notes": "..." },
    "mobile":          { "score": 9,   "notes": "..." },
    "a11y":            { "score": 9,   "notes": "..." },
    "motion":          { "score": 8.5, "notes": "..." },
    "wow":             { "score": 8.5, "notes": "..." },
    "polish":          { "score": 9,   "notes": "..." }
  },
  "mustFix": [
    { "where": "390x844-50.png, #reviews", "problem": "Sample label missing on the third review card", "fix": "Add [[sample Sample review]] to every card in the repeater, not only the first" }
  ],
  "elevate": [
    { "category": "layout", "move": "Turn the reviews band into t-paper and give it the ruled title-block frame, so the dark run deep/deep becomes deep/paper/deep" },
    { "category": "motion", "move": "Drive the estimator sketch with the same --sw-p clip wipe as the story so the signature moves in two places" }
  ],
  "verdictHint": "ELEVATE"
}
```

Rules:
- All 11 keys present, `score` a number in 0.5 steps, `notes` a string that names ≥ 1 screenshot.
- `mustFix` items each name a screenshot (or a check file) in `where`. Empty array when none.
- `elevate`: exactly 2 items for ELEVATE (the 2 weakest categories, ties broken by weight), each a
  *design move* ("thread the signature into the footer as a title block"), never a patch ("make the
  margin 24px"). Empty for PASS.
- `verdictHint`: what the critic expects (`PASS` / `ELEVATE` / `FIX` / `NEEDS_HUMAN`). score.mjs
  decides; if they differ, the critique was arithmetically wrong.
- Write the file with the Write tool. Valid JSON: no comments, no trailing commas.

`qa/critique-N.md` holds the reasoning: one section per category with deductions and file names,
then the arithmetic line, then **Must** (same items as `mustFix`), **Should** (every other
deduction worth fixing, each with where / problem / fix) and **Elevate** in prose. Stage 11 (Fix)
works through Must and Should; stage 10 (Elevate) works through the two elevate moves.

---

## 5. Tells that always cost points

**Visual (AI slop):** purple/blue gradients, gradient text, glassmorphism, glow; a shadow on every
card, cards inside cards; three icon-in-square cards; emoji as icons; a centred pill-badge hero;
eyebrow labels above every heading; one italic serif "accent word" in a sans headline; bento grids;
neon on near-black; a floating pill nav; pulsing dots; fade-up on every section; hover lift on
every card; bounce; cream + terracotta as a default; zero-radius hairlines on everything; mono
micro-labels; "01/02/03" numbering as decoration; middle-dot meta strings; a "Scroll" cue; 3+ tiny
tracked caps captions in one view.

**Copy:** genre verbs (unlock, unleash, supercharge, empower, streamline, elevate, transform);
"Not just X, it's Y"; tricolon headlines; "Whether you need X or Y"; stacks of rhetorical
questions; slogan endings on every section; always exactly three items; an arrow on every link;
"Get started", "Learn more", "Submit".

**Demo honesty** (DEMO-RULES; these are mustFix, not deductions): unlabeled reviews, rating or
prices; a claim from the banned list not supported by facts.json; "our work / our team"; before /
after; a real-looking address; a face presented as the owner; a form that pretends it sent.
