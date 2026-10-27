# Golden Touch Contracting: the road to 10/10

Audit date: 2026-10-25. Built site version 2 (https://claude.ai/artifact/8e6f44joJB132WxmdXSQQM).
Tested in a real browser at 1440×900 and 375×812, on these pages: home, services, remodels, projects, contact.

## The short answer

- **Current score:** weighted **8.26**. Every floor is met.
- **Code only:** about **9.1** is reachable with code changes alone. That is roughly two days of work, and it is listed below.
- **Full 10:** a true 10 is **not reachable with code alone**. Three categories (Photo, Copy, and part of Wow) are capped by things only the client can supply:
  - their own job photos and video;
  - permission to quote reviews;
  - a lead endpoint that actually delivers.
- **The brief also caps it:** it forbids quotes, prices and credentials, which are the three strongest trust signals a contractor site has. Even a perfect build tops out around **9.6–9.8** until those rules change.

So the plan has three tiers:

| Tier | What | Who | Weighted after |
|---|---|---|---|
| 1 | Bug fixes found in this audit | Code | ~8.5 |
| 2 | Design and motion upgrades | Code | ~9.1 |
| 3 | Real assets and a working form | Client | ~9.7 |
| — | Relax the brief's "no quotes" rule | Brief owner | ~10 |

---

## Part 1: Bugs found in this audit (fix first)

### B1. Trust band columns are lopsided at desktop (Layout, First screen)
`style.css:212` sets `.trust__row{grid-template-columns:auto auto auto 1.6fr}` at 1100px and up. With `auto`, each column sizes to its content, and the results at 1440 are bad:

| Column | Content | Width | Result |
|---|---|---|---|
| 1 | "4.1" | 55px | OK, but tiny |
| 2 | "Closed, opens Monday at 8:00 AM" | 508px | Wraps to 2 lines at 46px type |
| 3 | Phone number | 271px | OK |
| 4 | "Reviewers mention" plus 4 themes | 88px | Every theme breaks onto 2–3 lines |

This is the first thing under the hero, so it costs First screen and Layout points.

**Fix:**
```css
@media (min-width:1100px){
  .trust__row{grid-template-columns:minmax(0,.8fr) minmax(0,1.2fr) minmax(0,1fr) minmax(0,1.6fr)}
}
```
Also shrink the open-now value to `--fs-1`. A status sentence should not be set as big as a number. Keep `--fs-2` for "4.1" and the phone.

### B2. The desktop hero hides its own video (First screen, Wow, Photo)
`style.css:406` lays a 90° scrim over the video: 96% opacity at the left edge and still 88% at 42%. The video (paint swatches, average brightness ~95/255) is only readable in the right ~25% of the screen, so at desktop the first screen reads as a flat navy block with text on it. On mobile (`style.css:405`, a vertical gradient) the footage does show, and it looks better there.

**Fix:** let the footage carry the right half, and keep contrast only behind the text column:
```css
@media (min-width:900px){
  .hero__scrim{background:
    linear-gradient(90deg,rgba(14,34,51,.92) 0%,rgba(14,34,51,.78) 34%,rgba(14,34,51,.18) 62%,rgba(14,34,51,0) 100%),
    linear-gradient(0deg,rgba(14,34,51,.55) 0%,rgba(14,34,51,0) 30%)}
}
```
Then re-check contrast for the h1, body copy and the rating link (target 4.5:1 for body, 3:1 for the 48px+ h1). Use the browser's contrast picker over the brightest video frame, not the average one.

### B3. Five inline links are under 48px tall (A11y, Mobile)
Measured on home at 375px:

| Link | Size |
|---|---|
| "4.1 on Google" | 143×30 |
| "(727) 692-4446" in the trust band | 165×30 |
| "Read the reviews on Google" | 239×32 |
| "full FAQ" | 63×23 |
| "quote request form" | 150×23 |

WCAG lets inline text links slide, but the brief says every tap target is 48px.

**Fix:**
- Add `.textlink, .trust a, .prose a{display:inline-block;padding-block:12px;margin-block:-12px}`. The hit area grows and the line spacing doesn't change.
- For the two links inside sentences ("full FAQ", "quote request form"), check that the enlarged areas don't overlap the line above. If they do, move them into the `.related` button row (48px already).

### B4. One of the three work videos only shows a still (Motion, Wow)
The aerial house-frame clip (Pexels 31025079) is 35 MB, which is over the artifact's 15 MB file cap, so the build swaps in the poster image.

**Fix:** re-encode it on a machine with ffmpeg:
```bash
ffmpeg -i v-31025079.mp4 -vf "scale=1280:-2,fps=24" -c:v libx264 -crf 28 -preset slow -an -movflags +faststart v-31025079.mp4.small.mp4
```
That gives about 4–6 MB for a 20-second clip. Then:
1. Restore its `data-src` and play button.
2. Remove that clip's line from `localize.py`.
3. Republish.

Do the same for the hero clip: 1280px and no audio track saves bandwidth on phones.

### B5. The pinned story is too long (Motion, Layout)
`style.css:434` sets the story height to `calc(var(--n) * 85svh + 100svh)`, which is 3,960px at desktop and 3,573px on a phone for 4 steps. That's 4+ screens of scrolling for four sentences, and it's where people bail.

**Fix:**
- Set it to `calc(var(--n) * 55svh + 100svh)`, about 2,800px.
- Scrub each image change over a shorter range, so every step feels like a deliberate click rather than a drift.
- On phones under 640px, drop the pin entirely and use four stacked cards with a clip-path reveal. A pinned scroll on a small screen feels like scroll-jacking even when it isn't.

---

## Part 2: Category by category

Each category lists:
- the current score;
- why it isn't a 10;
- the code fixes (C) and client items (K);
- the projected score after code (→C) and after client items too (→K).

### 1. First screen: 8.5 → C 9.0 → K 10 (weight 14%, the biggest)
**What works:**
- A clear h1 ("Clearwater remodels, built the way they were planned.").
- Both buttons sit above the fold.
- A rating line.
- A rotating service word.
- The sticky call bar on mobile.

**Why not 10:**
- At desktop the footage is smothered (B2).
- The trust band under it is broken (B1).
- The footage is generic stock: a woman picking paint chips is not a Clearwater remodel.

**C:**
- Fix B2 and B1.
- Add one honest, concrete proof line under the h1: "Mon–Sat 8–6 · 669 Fairwood Forest Dr, Clearwater". It is local, factual and allowed.
- Make the rotating word a fixed-width slot. Use `inline-grid` with all the words stacked in one cell and only the active one at opacity 1, so the h1 never reflows. Right now the eyebrow changes length.
- Make the hero 100svh minus the header so the trust band's top edge peeks in. That edge says "there's more" without a scroll cue.

**K:**
- A 6–10 second clip of the client's own crew on a real Pinellas job, shot on a phone in landscape at golden hour.
- That single asset is worth more than every other first-screen fix combined.

### 2. Distinctiveness: 8 → C 9.0 → K 10 (weight 12%)
**What works:** the blueprint-and-gold system, the condensed Archivo against Source Serif body, the "plan → build" idea, and dimension-line details (`.dim`).

**Why not 10:**
- All 16 inner pages use the same `.ihero` template: breadcrumb, giant h1, paragraph, a white field (seen on services, remodels, projects, contact).
- After the home page the site looks like a well-made template.

**C:**
- **Give each inner hero a signature.** Keep the template but add one element per page type:
  - **Service pages:** a "spec sheet" strip on the right. It shows the service name as a blueprint title block (a ruled box with SHEET / SCOPE / AREA fields), filled only with facts: the service name, "Clearwater and Pinellas County", "Mon–Sat 8–6". Architects' title blocks are a real visual language, and no competitor uses one.
  - **Projects:** a full-width filmstrip of the work videos under the h1.
  - **Contact:** put the big phone number in the hero itself, not in a side card below it.
- **Own the gold rule.** Use one 2px gold dimension line, with tick marks at both ends, as the single recurring divider between every section and page. It's partly there already; make it a system.
- **A drawn blueprint motif.** Add one SVG floor-plan outline per service (a kitchen, an elevation, a floor), revealed with clip-path. This gives a house style no stock photo can.

**K:** a logo. The wordmark is typeset, and a simple mark (a "GT" monogram inside a title-block square) would anchor everything.

### 3. Type: 8.5 → C 9.5 → K 9.5 (weight 10%)
**What works:**
- The variable Archivo width axis (75% for display, 87.5% for labels).
- `text-wrap:balance`.
- Tabular numbers.
- A tight display line-height of 1.02.

**Why not 10:**
- The status line in the trust band is set at display size (B1).
- On mobile the h1 is 48px over 4 lines, which is fine but heavy. One step down (42px) gives 3 lines and lifts the buttons higher.
- The serif body is 400 weight only. Lead paragraphs would read better at 450–500 with the `opsz` axis set to match.
- Neither font is subset or preloaded, so there is a flash of fallback type on slow connections.

**C:**
- Use `clamp(2.6rem, 9vw + .2rem, 6.5rem)` for the home h1 so 375px lands on 3 lines.
- For the lead paragraph use `font-variation-settings:"opsz" 24` with weight 450.
- Add `<link rel="preload">` for the two woff2 files, or self-host them inside the artifact (subset to Latin to keep about 60 KB total).
- Add `font-feature-settings:"ss01"` if Archivo's alternates suit the brand. Test it.
- Audit the whole site for orphans and use `text-wrap:pretty` on body paragraphs.

### 4. Layout: 8.5 → C 9.5 → K 9.5 (weight 10%)
**Why not 10:**
- B1 (trust band) and B5 (story length).
- Inner pages are a single column with the same spacing, so the rhythm goes flat on long pages.
- The home stack runs deep, mid, light, deep, deep, paper, gold, light, deep. Two deep bands back to back (break then reviews) blur into one long dark block.

**C:**
- Fix B1 and B5.
- Change the reviews band to `t-paper`, or put a light gap between the two dark bands, so the page alternates.
- On inner pages, add a 12-column asymmetric grid for the body:
  - copy in columns 1–7;
  - a sticky aside in columns 9–12 holding the call button, the hours and the "open now" status.
  - This uses the empty right half at 1440 and keeps the call to action in view.

### 5. Photo: 7 → C 7.5 → K 10 (weight 8%)
**Why not 10:**
- Every photo is stock, credited and honestly labelled. That honesty is right, but a contractor site with no photos of its own work can't score past ~7.5.
- Several stock frames show commercial concrete and high-rise work, which doesn't match "Clearwater home remodels".

**C (small lift only):**
- Drop the off-topic frames (high-rise roof, concrete-floor crews) and keep the domestic ones.
- Grade every image to one look with a CSS filter. Something like `filter:saturate(.85) contrast(1.05) sepia(.08)` ties them into a single shoot. (`filter` is on the allowed animation list too.)
- Use `object-position` so faces and hands sit on the thirds.

**K (this is where the 10 comes from):**
- 12–20 of the client's own photos: before, during and after for 3–4 real jobs.
- The brief allows "Planning/Build" pairs, so the during shots are as valuable as the finished ones.
- Shooting guide for the client:
  - phone, landscape, daylight;
  - the same corner of the room each time;
  - no people's faces without consent.

### 6. Copy: 8.5 → C 9.0 → K 9.5 (weight 8%)
**What works:** short, plain, specific, no banned words, and an honest note on the projects page that the photos are stock.

**Why not 10:**
- Without quotes, prices or credentials, the copy has to carry trust through process alone.
- Some pages repeat the same "plan on paper first" idea in near-identical words.

**C:**
- Give every page one job, and write the h1 as that job:
  - remodels: planning;
  - painting: prep;
  - coordination: one point of contact.
- Cut every repeat of "on paper".
- Turn the four review themes into four short process promises, each tied to its theme. Write them as statements, not as quotes or invented claims. For example: "Reviewers mention clear estimates, so every quote is itemised by room." Check each line against the facts block before publishing.
- Add microcopy at the moments of doubt:
  - under the form button: "We'll call you back to set up a visit." (fact-safe);
  - beside the phone number: "Mon–Sat 8–6".

**K:**
- Confirm "Henry" so the about page can say who answers the phone.
- Confirm the town list (Largo, Dunedin, Safety Harbor…) so area pages can name them.
- A 10 here needs the brief's "Write NO quotes" rule relaxed to allow 3 real Google reviews, quoted with permission and first names only.

### 7. Mobile: 8.5 → C 9.5 → K 9.5 (weight 7%, floor 8)
**What works at 375:**
- No sideways scroll (document width = 375).
- A sticky two-button call bar.
- 48px header buttons.
- The hero footage reads well.

**Why not 10:** B3 (small links), B5 (the long pinned story), and the h1 at 4 lines.

**C:**
- Fix B3 and B5, and apply the type fix from section 3.
- Make the sticky bar hide on scroll-down and come back on scroll-up, so it doesn't cover content while reading. It already has a transform transition (`style.css:189`).
- Give the phone number `type="tel"` styling and confirm `tel:` works on iOS and Android outside the artifact viewer. The viewer can block it.
- Test at 320px, the smallest iPhone SE width.

### 8. Accessibility: 8.5 → C 9.5 → K 9.5 (weight 7%, floor 8)
**What works:**
- A skip link.
- A focus-trapped popup with Esc.
- A keyboard lightbox.
- Reduced motion shows all content.
- The form error is honest and live.

**Why not 10:**
- B3.
- Contrast over moving video isn't proven frame by frame.
- The rotating eyebrow word may be announced over and over by screen readers.

**C:**
- Make the rotating word `aria-hidden="true"` and add a static sr-only version: "General contractor for remodels, exterior painting, home renovations and multi-trade jobs".
- Run axe or AccessLint on all 17 routes and fix everything it reports. Hash routes need each page shown before the scan.
- On every route change, move focus to the new h1 (`tabindex="-1"`) and update `document.title`. Check that this happens.
- Make the hero pause button's label say what it does: "Pause background video" / "Play background video".
- Turn on Windows High Contrast (`forced-colors:active`) and check that the gold buttons keep a visible border.

### 9. Motion: 8.5 → C 9.5 → K 9.5 (weight 12%)
**What works:**
- GSAP + ScrollTrigger + Lenis.
- View Transitions between routes.
- A press scale on buttons.
- Only allowed properties are animated.
- Reduced motion is respected.

**Why not 10:**
- The story drags (B5).
- One video is a still (B4).
- There is no single signature moment that people would remember.
- The h1 just fades in.

**C (all within transform, opacity, clip-path and filter):**
- **h1 line reveal:** wrap each line in a mask. Each one rises `translateY(100%) → 0` with a 70ms stagger over 700ms, using `cubic-bezier(.2,.7,.1,1)`. It runs once and has no bounce.
- **Signature: "plan becomes build".** On the home "break" section:
  1. A blueprint line drawing of a room sits over the matching photo.
  2. As you scroll, a `clip-path: inset()` wipe reveals the photo from left to right while the drawing fades.
  3. It is tied to scroll position, not autoplay, and it reverses on scroll-up.
  - It's the brand idea made literal, and it's legal under the brief: it is Planning → Build, not before/after.
- **Section entrances:** rather than every block fading up, use one consistent rule: content `opacity 0→1, translateY(24px→0)`, 500ms, triggered at 85% of the viewport. Images get a `clip-path: inset(0 0 100% 0) → inset(0)` reveal. Two patterns, used everywhere.
- **Hover:** the service rows (`.ruled__name`) already slide. Add a gold hairline that scales on the X axis from the left (`transform:scaleX`).
- **Check the marquee:** make sure it pauses on hover and focus and stops under reduced motion. A non-stop scroll can count against "no autoplay carousel".
- **Tune Lenis:** set `lerp:0.1` and `wheelMultiplier:1`. Anything smoother feels floaty, and floaty reads as scroll-jacking.

### 10. Wow: 8 → C 9.0 → K 10 (weight 8%)
**Why not 10:** the craft is high, but nothing on the site is a "show my partner" moment, and stock media puts a ceiling on emotion.

**C:**
- Build the "plan becomes build" scrub above.
- **Make the estimator feel like a tool:**
  - as the user picks rooms and scope, draw a live floor-plan sketch (SVG blocks per room, revealed with clip-path);
  - end on a printable "scope sheet" in title-block style (`@media print` stylesheet).
  - It shows no $ figures, and gives visitors something to keep and bring to the call.
- **Projects:** add a filter that animates the grid with the FLIP technique (transform only) when switching categories.

**K:** a real-job compare slider using the client's own Planning/Build photo pairs. It would be the site's strongest moment.

### 11. Polish: 8 → C 9.5 → K 9.5 (weight 4%)
**C:**
- Favicon set (SVG, plus a 180px apple-touch icon), using the monogram or a gold square.
- An Open Graph image (1200×630) with the h1 on the navy blueprint grid, so shared links look designed.
- A designed 404 ("This page isn't on the plans.") that links to services and the phone number.
- A print stylesheet for the estimator scope sheet and the contact page.
- `theme-color` meta in navy so the mobile browser bar matches.
- Make sure no console errors or warnings appear on any route.
- Lighthouse on mobile: target 95+ for Performance, Accessibility, Best Practices and SEO.
  - Lazy-load every below-the-fold image with `loading="lazy"` and set width and height.
  - Preload the hero poster.
- Move `LocalBusiness` JSON-LD to the `GeneralContractor` type, with the hours and the 4.1 / 17 rating (the rating is a fact).

---

## Part 3: Priority order

| # | Task | Category impact | Effort | Owner |
|---|---|---|---|---|
| 1 | B1 trust band grid | Layout, First | 15 min | Code |
| 2 | B2 hero scrim + contrast check | First, Wow, Photo | 30 min | Code |
| 3 | B3 48px inline links | A11y, Mobile | 20 min | Code |
| 4 | B5 shorter story, no pin on phones | Motion, Layout, Mobile | 1 h | Code |
| 5 | h1 mask reveal + fixed-width rotating word + sr-only text | Motion, A11y, First | 1 h | Code |
| 6 | Break the two back-to-back dark bands | Layout | 10 min | Code |
| 7 | Blueprint title block on inner heroes | Distinct | 3 h | Code |
| 8 | "Plan becomes build" clip-path scrub | Wow, Motion, Distinct | 4 h | Code |
| 9 | Shared image grade, drop off-topic stock | Photo | 30 min | Code |
| 10 | Copy pass: one job per page, no repeats | Copy | 2 h | Code |
| 11 | Estimator floor sketch + print scope sheet | Wow | 5 h | Code |
| 12 | Favicon, OG image, 404, theme-color, JSON-LD, font preload | Polish, Type | 2 h | Code |
| 13 | Run accessibility checks on all 17 routes, fix what they find | A11y | 2 h | Code |
| 14 | B4 re-encode the 35 MB video | Motion | 10 min | Needs ffmpeg |
| 15 | Own photos + 1 hero clip | Photo, First, Wow | Shoot day | **Client** |
| 16 | Live lead endpoint, tested end to end | Copy, Polish, trust | 1 h once routed | **Client** + code |
| 17 | Confirm Henry, towns, optional services, address | Copy | Email | **Client** |
| 18 | Logo mark | Distinct | Design task | **Client** / designer |
| 19 | Permission to quote 3 reviews | Copy | Brief change | **Brief owner** |

Items 1–6 are under four hours and lift the weighted score about 0.3 on their own.

---

## Part 4: Projected scores

| Category | Weight | Now | After code (1–14) | After client (15–19) |
|---|---|---|---|---|
| First screen | 14% | 8.5 | 9.0 | 10 |
| Distinctiveness | 12% | 8 | 9.0 | 10 |
| Type | 10% | 8.5 | 9.0 | 9.5 |
| Layout | 10% | 8.5 | 9.5 | 9.5 |
| Photo | 8% | 7 | 7.5 | 10 |
| Copy | 8% | 8.5 | 9.0 | 9.5 (10 with quotes) |
| Mobile | 7% | 8.5 | 9.5 | 9.5 |
| A11y | 7% | 8.5 | 9.5 | 9.5 |
| Motion | 12% | 8.5 | 9.5 | 9.5 |
| Wow | 8% | 8 | 9.0 | 10 |
| Polish | 4% | 8 | 9.5 | 9.5 |
| **Weighted** | | **8.26** | **9.08** | **~9.7** |

### Why the last 0.3 is the hardest
The 9.5s in the client column would only reach 10 through a judge's taste and real-world proof:
- every route tested on real iOS and Android devices;
- Lighthouse at 100;
- weeks of real leads arriving cleanly.

Those come from launching and iterating, not from more design.

---

## Part 5: What stays off the site, even at 10
These still apply to every change above:
- No "licensed", licence number or "insured".
- No warranty, years in business, financing, $ figures, awards or certifications.
- No 24/7 or same-day claims, invented stats, team details or customer names.
- No before/after framing. Use Planning/Build only.
- No banned phrases.
- The buttons stay "Request a quote" and "Call (727) 692-4446".
- The form never pretends a send succeeded.
