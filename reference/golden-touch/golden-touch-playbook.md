# Golden Touch Contracting: the full build playbook, from brief to 10/10

This is the complete method used to build the Golden Touch Contracting LLC site. It covers every stage, every file, every check and the order to do them in. If you follow it top to bottom with the files in `golden-touch-kit/`, you get the published site (version 3, scored 8.97) back exactly. Part 7 covers what moves it the rest of the way to 10.

- Live site: https://claude.ai/artifact/8e6f44joJB132WxmdXSQQM
- Rebuild everything with one command: `python golden-touch-kit/make.py`. The output matches the published `golden-touch.html` byte for byte. This was checked.

---

## Contents

0. [Every file, and which prompt asked for it](#0-every-file-and-which-prompt-asked-for-it)
1. [Ground rules before any design](#1-ground-rules-before-any-design)
2. [The 12 stages, step by step](#2-the-12-stages-step-by-step)
3. [How the source is built](#3-how-the-source-is-built)
4. [The checks: static, render, critique](#4-the-checks-static-render-critique)
5. [Fix rounds: what was wrong and how it was fixed](#5-fix-rounds-what-was-wrong-and-how-it-was-fixed)
6. [Deliver: localize, publish, report](#6-deliver-localize-publish-report)
7. [From 8.97 to 10: what code cannot do](#7-from-897-to-10-what-code-cannot-do)
8. [Traps we hit, so you don't](#8-traps-we-hit-so-you-dont)
9. [The one-page run sheet](#9-the-one-page-run-sheet)

---

## 0. Every file, and which prompt asked for it

### Deliverables (in `sitewright test/`)

| File | What it is | Asked for by |
|---|---|---|
| `golden-touch.html` | The finished site: one HTML file with 17 hash-routed pages, all CSS and JS inline | Prompt 1 (DELIVER: "ONE HTML artifact") |
| `media/` (22 files) | 15 photos `p-<id>.jpg`, 4 video posters `poster-<id>.jpg`, 3 videos `v-<id>.mp4` | Prompt 1 (PHOTOS / VIDEO). Stored locally because the artifact viewer blocks Pexels |
| `golden-touch-report.md` | The 12-stage write-up, delivery report, credits and final rubric | Prompt 1 (stages and DELIVERY REPORT), updated by prompt 3 |
| `golden-touch-10-of-10.md` | The audit and roadmap: 5 bugs, 11 categories, priority list of 19 items, projected scores | Prompt 2 ("how to make it a 10/10") |
| `golden-touch-playbook.md` | This document | Prompt 4 |
| Published artifact (version 3) | The live, private page with the media uploaded alongside | Prompts 1 and 3 |

### Source kit (in `golden-touch-kit/`)

| File | Role | Lines |
|---|---|---|
| `brief.txt` | The original brief, word for word. It is the contract, so read it first. | ~520 |
| `src/style.css` | The design system: tokens, surfaces, components, all 17 pages' layout, motion, reduced motion, print | 731 |
| `src/extra.css` | Fix layers added after critique rounds. It loads after `style.css`, and section 15 is the 10/10 pass | 144 |
| `src/pages.html` | All 17 pages as `<section data-page>` blocks, written with macros (`[[frame …]]`, `[[call]]`, …) | 1318 |
| `src/app.js` | Router, page transition, scroll effects, forms, estimator, ZIP checker, open-now, popup, lightbox, Lenis/GSAP glue | 784 |
| `src/build.py` | Holds the media table (photos, videos, alt text, credits), expands macros, assembles the file and runs the static check | 167 |
| `localize.py` | Swaps every Pexels URL for its `media/` file and removes the 35 MB clip | 14 |
| `make.py` | Runs `build.py` then `localize.py` and stops if either one fails | 30 |

---

## 1. Ground rules before any design

Write these on a card. Every later decision is checked against them.

### 1.1 The only facts that exist

| Fact | Value | How to use it |
|---|---|---|
| Name | Golden Touch Contracting LLC | Exact |
| Trade | General contractor | |
| Phone | (727) 692-4446, `tel:+17276924446` | On every screen of a phone |
| Email | **None** | The form is the only way to write |
| Address | 669 Fairwood Forest Dr, Clearwater, FL 33759 | Exact, plus a Google Maps link |
| Hours | Mon–Sat 8:00 AM–6:00 PM, Sunday closed | Drives the open-now status (America/New_York) |
| Rating | 4.1 from 17 Google reviews | Exactly this, always with the review link |
| Services | Remodels, Exterior Painting, Home Renovations, Project Management, Consulting, Multi-Trade Coordination | One page each |
| Areas | Clearwater, Pinellas County | Plus 14 ZIPs for the checker |
| ZIPs | 33755 33756 33759 33761 33762 33763 33764 33765 33767 33770 33771 33772 33773 33774 | |
| Review themes | On time, professional, friendly communication, quality workmanship, close follow-up, no corners cut, clear estimates, solves problems | Paraphrase only. Never quote |
| Owner "Henry" | Unconfirmed | **Not used.** Listed in the report as a question for the client |

### 1.2 The never list

The static check enforces these:

- Never write "licensed", a licence number or "insured". No warranty, years in business, financing, awards, certifications or BBB.
- **No `$` anywhere** and no price ranges. The estimator scopes the job, it does not price it.
- No testimonials, no quotes, no customer names and no invented counts or statistics.
- No 24/7, no same-day and no "free estimate".
- No before/after. A compare slider may only show **Planning** and **Build**.
- No banned phrases. There are about 50 in `build.py` ("seamless", "elevate", "peace of mind", "learn more", "submit", "get started", …).
- Buttons say exactly **"Request a quote"** and **"Call (727) 692-4446"**. Nothing else.
- Every page has one h1, a title of 50–60 characters and a description of 120–155.
- Use only the 15 given photos and 4 given videos. No photo appears twice on a page, and every item is credited in the footer.
- The lead form never pretends a send worked.

### 1.3 Motion limits

- Animate only transform, opacity, clip-path and filter. Never layout properties.
- No bounce, no elastic, no autoplay carousel, no scroll-jacking and no popup on load.
- Entrances use the easing `cubic-bezier(.23,1,.32,1)`. Moves across the screen use `cubic-bezier(.77,0,.175,1)`.
- Durations are 150–300 ms for UI and 600–1200 ms for story moments. Stagger by 40–80 ms. Move things 16–40 px.
- Reduced motion shows every final state at once, and content can be read without JS.

---

## 2. The 12 stages, step by step

### Stage 1: Strategy

1. **Buyer.** A Clearwater or Pinellas homeowner planning a remodel, an exterior repaint or a multi-trade renovation, often reading on a phone.
2. **Fears.** Overruns, trades that don't show up, vague quotes, corners cut and poor follow-up.
3. **Proof available.** The 4.1★ rating from 17 reviews, review themes that answer those fears directly (on time, clear estimates, close follow-up, no corners cut), a real address and real hours. Nothing else.
4. **One goal.** A phone call or a quote request. Every page ends on those two buttons.
5. **Page list (17).** Home, Services, 6 service pages, Projects, Reviews, Areas, Estimator, FAQ, About, Contact, Thank-you and 404.

### Stage 2: Concept

1. **Reject the first idea.** "Gold luxury contractor" was rejected for being generic. Three alternatives followed, each summed up in a line:
   - *Paint swatch:* colour chips as a system. Too narrow, because painting is one service out of six.
   - *Site log:* a dated diary. It would need dates and jobs, which aren't in the facts.
   - **Plan becomes build:** blueprint lines turn into real photos. ✅ It fits what reviewers praise most, which is clear estimates and planning.
2. **Thesis.** "Written down first, then built." The site shows the plan before the build, the same way the reviews describe how the company works.
3. **Three differentiators.**
   - Blueprint line drawings that resolve into photography.
   - A job-sheet title block on every inner page.
   - A floor-plan estimator that lights up rooms.
4. **Mood.** Drafting table, site office, calm and exact.
5. **Fonts.** **Archivo** (variable width 62–125, weight 400–900) for display, set condensed, like stencil on site signs. **Source Serif 4** (optical size 8–60, weight 400–600) for body text, so it reads like a written estimate. The variable axes give scale contrast without loading a third family.
6. **Palette.** Every pair passes WCAG AA:

   | Token | Hex | Pair | Contrast |
   |---|---|---|---|
   | `--deep` (dark base) | #0E2233 | `--on-deep` #EEF1F0 on it | 14.26:1 |
   | `--vellum` (light base) | #EEF1F0 | `--ink` #13202B on it | 14.56:1 |
   | `--concrete` (mid tone) | #C7D1CE | `--ink` on it | 10.59:1 |
   | `--gold` (accent) | #E0A526 | on `--deep` | 7.4:1 |
   | `--gold-ink` (links on light) | #8A5A00 | on `--vellum` | 5.21:1 |
   | `--ink-2` (secondary text) | #3A4A57 | on `--vellum` | 8.04:1 |
   | `--on-deep-2` | #B9C6CF | on `--deep` | 9.3:1 |

7. **Shape language.** 2 px radius, 1.5 px rules, blueprint grid lines, dimension ticks and stamped labels.
8. **Signature system.** The *drawn line*. It appears in the hero's blueprint draw, the pinned story, the title blocks, the estimator sketch and the footer rule.
9. **Motion score.**
   - **Intro:** a split-word headline plus a blueprint draw on the home hero.
   - **Transition:** one wipe for the whole site, using the View Transitions API with a CSS wipe as fallback, under 600 ms.
   - **Signatures:** one per page, listed in Stage 4.
   - **Micro-interactions:** magnetic primary button, autohiding header, accordion, tabs and tilt.
   - **Video:** one muted hero loop with a poster image, plus breaks lower on the page.

### Stage 3: Design system (`style.css`, top of file)

1. **Tokens** on `:root`:
   - **Colour:** listed above, plus `--line`, `--focus` and `--gridc`.
   - **Type scale:** fluid, `--fs--1` to `--fs-4`, with ratio 1.25 on phones and about 1.333 on desktop.
   - **Spacing:** a 4/8 scale, `--s-1` (4 px) to `--s-9` (96 px).
   - **Section rhythm:** `--sec-tight`, `--sec-normal` and `--sec-loose`.
   - **Safe-area gutters:** `--gut-l` and `--gut-r`, at least 16 px.
   - **Shape:** `--r: 2px` and `--bw: 1.5px`.
   - **Motion:** `--ease-out`, `--ease-move`, `--t-press` (120 ms), `--t-ui` (200 ms), `--t-story` (900 ms), `--t-page` (520 ms), `--stagger` (60 ms).
   - **Layers:** a z-index scale and `--head-h: 72px`.
2. **Surfaces.** Five tone classes re-set the same variables, so any component works on any background: `.t-light`, `.t-paper`, `.t-mid`, `.t-deep` and `.t-gold`.
3. **Motion gating.** A tiny inline script adds `sw-js`, and adds `sw-motion` only when reduced motion is off. **All motion CSS lives under `.sw-motion`**, so without it every element shows its final state.
4. **Focus.** A visible 3 px outline using `--focus`, plus `:focus-visible` on every control.
5. **Components.** Buttons (primary, ghost, deep), the photo frame `.frame` (fixed ratio with a fallback caption if the image fails), the Planning/Build compare slider, proof cards, the trust strip, the step form, accordion, tabs, the estimator, ZIP checker, sticky call bar, popup, lightbox and back-to-top button.

### Stage 4: Blueprint (every page)

Rule: no page may have three sections of the same background tone in a row.

| Page | Signature (`data-sw-signature`) | Award hooks used | Tone run | Variant |
|---|---|---|---|---|
| Home | `plan-to-build` (pinned 4-step story) | intro, story, parallax, marquee, preview, fill, count, zip, magnetic | deep · paper · mid · light · paper · paper · gold · light · deep | n/a |
| Services | `service-stack` | stack, split, parallax | light · deep · paper · light | n/a |
| Renovations | `sticky-steps` | sticky-steps, zoom, spotlight | light · paper · deep · light · gold | **PROCESS-LED** |
| Remodels | `plan-vs-build` (compare slider) | compare, stack-cards, reveal | light · paper · light · deep · mid · light · deep | **COMPARISON-LED** |
| Painting | `warning-reel` | hscroll, kenburns, parallax | light · deep · light · paper · gold | **PROBLEM-LED** |
| Project management | `question-tabs` | tabs, draw, fill | light · paper · deep · light · gold | **QUESTION-LED** |
| Coordination | `hotspot-proof` | hotspot, tilt, spotlight, count | light · paper · deep · light · gold | **PROOF-LED** |
| Consulting | `checklist-tool` | checklist, split, zoom, parallax | light · paper · deep · gold | **TOOL-LED** |
| Areas | `town-reel` | hscroll, zip, split, stagger, parallax | light · deep · gold · paper · deep | n/a |
| About | `scrub-expand` | scrub, mark, stagger | light · deep · paper · deep · gold | n/a |
| Projects | `gallery-lightbox` | filter, lightbox, carousel (manual), parallax | light · light · deep · gold | n/a |
| Reviews | `gauge-proof` | gauge, count, stagger, parallax | deep · light · gold | n/a |
| FAQ | `accordion-index` | accordion, split, reveal, parallax | light · light · deep · gold | n/a |
| Estimator | `scope-builder` | estimator, sticky-summary, draw, split | light · paper · deep | n/a |
| Contact | (short page) | step form | light · paper · deep | n/a |
| Thank-you, 404 | (short pages) | none | light | n/a |

The checklist for each page:

- 3 or more different hooks.
- Its own signature, different in kind from its neighbours.
- At least one dark or gold band.
- One full-bleed band.
- One photo or video break.
- No two service pages in the same section order.

### Stage 5: Media plan

Photos are listed in `build.py` under `P = {…}`, with Pexels ID, alt text, photographer and link. Videos are under `V = {…}`, with src, poster, creator, link and description.

| Slot | Media |
|---|---|
| Home hero | `hero` video (paint swatches) with hero-3, hero-2 and hero-1 in the story |
| Home break | `work1` video under the blueprint wipe |
| Services | service-1, 2, 12, 4, 3 and 5 on the stacked cards. `work2` shows its poster only |
| Renovations | service-7 (hero), 12, 8, 1, 5 and 9 |
| Remodels | hero-1 and hero-2 in the **Planning / Build** slider, with service-5 |
| Painting | service-2, the `hero` video and the `work3` break |
| Project management | service-4 and 12 |
| Coordination | service-1 (hotspots) and service-10 |
| Consulting | service-3 and 6 |
| Areas | service-10 |
| About | hero-3 and `work1` |
| Projects | all 15 in a grid. Captions describe the photo and are never presented as a client's job |
| Reviews, FAQ, Estimator | service-8, service-11 and service-7 |

Rules:

- Reuse across pages is fine. Repeating a photo within one page is not, and the build checks for it.
- Captions say what is in the frame, never "our project in Dunedin".
- Every item is credited in the footer, which `[[credits]]` generates from the same tables.

### Stage 6: Pages and tools

Write each page in `pages.html` straight from the blueprint. Copy rules:

- One job per page, said once. Specific beats general. Paraphrase review themes as "Reviewers mention: finished on schedule".
- Lead with the six real services and the two real areas. Never name a town outside the facts as a place served. The optional towns are questions for the client.
- Every page ends with **Request a quote** plus **Call (727) 692-4446**.

Tools to build for real in `app.js`:

| Tool | Behaviour |
|---|---|
| **Lead form** | 4 steps: project type → ZIP + timing → details + optional photo note → name, phone, email. It POSTs JSON to `/api/public/site-lead` with `{slug:"golden-touch", name, phone, email, message, service, zip, t, website2:""}` (`t` is ms since the form was shown, and `website2` is a hidden honeypot). A 2xx response goes to the success state and `#thank-you`. **Anything else** shows "could not be sent" with the tel link and a **Try again** button. |
| **Estimator** | 5 questions: type, size, condition, timing, and a budget band in the visitor's own words. The output is a plain scope sentence, a list of what the visit will check, and the floor-plan sketch. A button carries every answer into the lead form. No `$`. |
| **ZIP checker** | Takes 5 digits. A match gives "Yes, we work in …" plus the quote button. No match gives "Outside our usual area, call and we'll tell you honestly" plus the tel link. |
| **Open-now** | Uses the hours above in America/New_York time and says "Open now · until 6 PM" or the next opening time. |
| **Sticky mobile bar** | Call and Quote buttons, hidden while the form is on screen. |
| **Exit popup** | At most once per visit, on exit intent or 60% scroll. It offers the estimator, closes with Esc or a button, and traps focus. |
| **Lightbox** | Arrow keys, Esc, and focus returns to the photo that opened it. |

---

## 3. How the source is built

### 3.1 Why a build script

The brief needs one self-contained HTML file. Writing 240 KB by hand means repeated alt text, credits and phone markup, and drift between them. Instead the pages are written in short macros, and `build.py` expands them from one media table. That makes the static check exact.

### 3.2 Macros in `pages.html`

| Macro | Expands to |
|---|---|
| `[[frame key cls \| attrs \| imgattrs]]` | `<figure class="frame cls" data-fallback="alt">` + `<img>` with alt text, width and height, lazy loading and `data-photo=key` |
| `[[img key \| attrs]]` | The bare `<img>`. Putting `eager` in attrs gives `fetchpriority="high"` with no lazy loading (used for the LCP image) |
| `[[video key cls \| attrs]]` | A muted, looping `<video>` with `preload="none"`, a poster, `data-src` (loaded only when on screen) and a pause button |
| `[[purl key]]` | The photo URL alone (lightbox links) |
| `[[credits]]` | The footer credit list for all 19 items |
| `[[i name]]` | The `<svg><use href="#i-name"/></svg>` icon |
| `[[tel]]` | The plain phone link |
| `[[call cls]]` | The **Call (727) 692-4446** button |
| `[[quote svc cls]]` | The **Request a quote** button. `svc` pre-selects the service in the form |

### 3.3 Page markup contract

```html
<section id="painting" data-page data-long data-sw-signature="warning-reel"
         data-title="Exterior Painting, Clearwater FL | Golden Touch Contracting"
         data-desc="…120–155 characters…">
  …sections with t-light / t-deep / … and data-hook="…" …
</section><!--/page-->
```

- `data-title` and `data-desc` are swapped into `<title>` and the meta description on every route change.
- `data-long` turns on the long-page checks.
- The `<!--/page-->` comment is how the checker finds where each page ends. Keep it.

### 3.4 `app.js` structure

1. **Helpers.** `$`, `$$`, `track(el, fn, start, end)` (ScrollTrigger when available, otherwise a manual scroll listener using `edge()` with specs like `"top 80%"`), and `split()`, which wraps words in `.w` and, for `[data-sw-split]`, an inner `.wi` that rises through a mask.
2. **Lenis** smooth scroll with `lerp: 0.1`, turned off under reduced motion.
3. **Per-page init** (cleaned up when you leave a page): reveals, the story (pinned on desktop; on phones an IntersectionObserver adds `.is-seen`), hscroll (desktop only), the `[data-plan]` wipe, scroll-expand, parallax, fill, sticky steps, compare, tabs, accordion, hotspots, tilt, count and the gauge.
4. **Global features:** the estimator (`estRead`, `estUpd`, `skUpd` for the sketch), lead form, ZIP checker, open-now, sticky bar, popup, lightbox, video play/pause (paused off screen) and back-to-top.
5. **Router** (bottom). It reads `location.hash`, finds the `[data-page]`, runs `startViewTransition` (or the CSS `.wipe` fallback), sets the title and description, moves focus to the h1, scrolls to the top and re-runs the page init. An unknown hash goes to `#not-found`.

### 3.5 Libraries (exact versions, in `build.py`)

- GSAP 3.12.5 and ScrollTrigger 3.12.5 from cdnjs.
- Lenis 1.0.42 from jsdelivr.
- Google Fonts: `Archivo:wdth,wght@62..125,400..900` and `Source+Serif+4:opsz,wght@8..60,400..600`.
- The site works with none of them loaded: `track()` has a fallback, and content is visible without motion.

### 3.6 `<head>` (from `build.py`)

- A title (56 characters) and a description.
- `theme-color` #0E2233.
- Open Graph title, description and type.
- An SVG data-URI favicon and apple-touch-icon (gold square with "GT").
- JSON-LD `GeneralContractor` with only the facts: name, telephone, PostalAddress, `openingHours "Mo-Sa 08:00-18:00"`, `aggregateRating 4.1 / 17`, and `areaServed` Clearwater and Pinellas County.
- The motion-gating script.
- Font preconnects.

---

## 4. The checks: static, render, critique

### 4.1 Static check (automatic, every build)

`build.py` prints `STATIC CHECK: clean` or a list of problems. It checks:

| Check | Rule |
|---|---|
| Banned phrases | About 50 phrases searched in visible text, including licensed, licence, license, insured, warranty, financing, 24/7, same-day, award, certified, guarantee, submit, learn more, get started, free estimate |
| Money | No `$` in visible text, and no `$` + digit in JS strings |
| Image URLs | Every Pexels URL must be one from the brief |
| Per page | No photo twice, exactly one `<h1>`, title 50–60, description 120–155 |
| Long pages | Has a signature, at least one `t-deep` band, a `break` section, 3+ hooks, and never 5 light sections in a row |
| Site | Signatures are unique, and no `href="#…"` points to a page or id that doesn't exist |

**Never publish until it says clean.** `make.py` stops the build if it doesn't.

### 4.2 Render check (by hand, in a real browser)

Preview: `.claude/launch.json` defines the server `golden-touch` (`python -m http.server 8731 --bind 127.0.0.1`). The artifact gets a doctype wrapper when published, so for local preview copy the file to a temporary `_preview.html` that starts with `<!doctype html>` and delete it afterwards.

Walk **every route** at **1440×900** and **375 px** (also 390 px and 320 px), once with motion on and once with reduced motion on:

- [ ] Nothing scrolls sideways. Check `document.documentElement.scrollWidth <= innerWidth`.
- [ ] Nothing stays hidden with reduced motion on or JS off.
- [ ] Every photo loads (watch for 404s in network). Name the LCP element, which is the hero image or poster with `fetchpriority="high"`.
- [ ] The first screen at 1440×900 shows the h1, the lede, both buttons and the proof line above the fold.
- [ ] The ZIP checker answers right for 33759 (match) and 90210 (no match).
- [ ] The lead form shows the honest failure state with **Try again** and the tel link, because there is no server.
- [ ] The estimator prefills the form, and the sketch lights the right rooms (A, B and D for "A few rooms").
- [ ] The popup appears at most once, closes with Esc and traps focus.
- [ ] The lightbox works with arrow keys and Esc, and focus comes back.
- [ ] The sticky bar hides over the form.
- [ ] Every tap target is at least 48 px, with gaps of 8 px or more.
- [ ] No console errors.
- [ ] Print preview: only the active page prints, and the estimator prints as a scope sheet.

Tip: screenshots can lag one step behind a route change. **Check state with JS** (`location.hash`, `getComputedStyle`, `getBoundingClientRect`) rather than trusting the picture.

### 4.3 Critique (the brief's rubric)

Score each category 0–10. Publish only when the weighted total is **8 or higher** and **every floor** is met. Between 7 and 8, rework the two weakest categories first.

| Category | Weight | Floor | v2 | v3 (now) | After client items |
|---|---|---|---|---|---|
| First screen | 14% | 7 | 8.5 | 9 | 10 |
| Distinctiveness | 12% | 7 | 8 | 9 | 10 |
| Type | 10% | 7 | 8.5 | 9 | 9.5 |
| Layout | 10% | 7 | 8.5 | 9 | 9.5 |
| Photo | 8% | 6 | 7 | 7.5 | 10 |
| Copy | 8% | 7 | 8.5 | 9 | 9.5–10 |
| Mobile | 7% | 8 | 8.5 | 9.5 | 9.5 |
| A11y | 7% | 8 | 8.5 | 9.5 | 9.5 |
| Motion | 12% | 7 | 8.5 | 9 | 9.5 |
| Wow | 8% | 7 | 8 | 9 | 10 |
| Polish | 4% | 6 | 8 | 9.5 | 9.5 |
| **Weighted** | | | **8.26** | **8.97** | **~9.7** |

---

## 5. Fix rounds: what was wrong and how it was fixed

### Round 1 (v1 → v2, inside the original 12 stages)

| Found in critique | Fix |
|---|---|
| Story step text sat under the photo on desktop | Text moved to its own column |
| Mobile Call button wrapped onto two lines | Tighter label and padding, `white-space:nowrap` |
| Back-to-top button covered text on phones | Moved above the sticky bar |
| Story too tall on short laptop screens | Height-capped headings (`svh`) |
| Pexels images blocked inside the artifact viewer | `localize.py` and a local `media/` folder uploaded with the artifact |
| One video is 35 MB, over the 15 MB limit | It is shown as its poster only (removed by `localize.py`) |

### Round 2 (v2 → v3, the 10/10 pass: items 1–13 of the roadmap)

Most CSS is in `extra.css` §15. JS changes are in `app.js`, page changes in `pages.html` and head changes in `build.py`.

| # | Item | Exactly what was done |
|---|---|---|
| 1 | **Trust row balance** | At 1100 px and up: `grid-template-columns: minmax(0,.8fr) minmax(0,1.2fr) minmax(0,1fr) minmax(0,1.6fr)`, and the hours label is made quieter (`--fs-1`) |
| 2 | **Hero scrim** | Desktop gradient is .92 → .78 → .18 → 0 left to right, plus a bottom fade, so the video shows on the photo side. The h1 is capped at `clamp(2.6rem, min(9vw,9.5svh) + .1rem, 5.25rem)` so the proof line stays above the fold at 1440×900. A `.hero__proof` row shows rating, hours and address |
| 3 | **48 px inline links** | `padding-block:14px; margin-block:-14px` on trust, proof, accordion, muted, prose, breadcrumb and 404 links. The tap area grows and the text doesn't move |
| 4 | **Story** | Desktop height changed to `calc(var(--n) * 55svh + 100svh)` (35% shorter). Under 640 px nothing pins: steps stack, each photo sits above its text (`order:-1`, `aspect-ratio:3/2`) and reveals with a clip-path when an IntersectionObserver adds `.is-seen` |
| 5 | **Headline reveal + rotator** | `split()` adds an inner `.wi`. Words rise from `translateY(112%)` through an overflow mask, staggered 70 ms. The rotating hero word has a fixed width, and an sr-only sentence gives screen readers the full line once |
| 6 | **Dark band run** | Home "What reviewers say most" changed to `t-paper`, so two dark sections are never back to back |
| 7 | **Title blocks** | Each service page hero has a `.tblock` job sheet (Sheet 01–06, Scope, Area, Hours). Projects has a `.filmstrip` bar, and Contact shows the number in large type (`.ihero__tel`) |
| 8 | **Plan becomes build** | On the home break, a `[data-plan]` wrapper gets `--sw-p` from `track(…,'top 80%','bottom 30%')`. CSS turns that into `--e`, which drives `clip-path: inset(0 0 0 calc(var(--e)*100%))` on a blueprint SVG layer, plus a gold seam with **Plan** and **Build** labels sliding across. Only clip-path and transform are animated |
| 9 | **Photo grade** | `.frame img, .frame video { filter: saturate(.85) contrast(1.05) sepia(.08) }` and object-position fixes. Two off-topic shots swapped: service-11 → 12 and service-10 → 5 on Home and Services, and service-7 moved to the Renovations hero |
| 10 | **Copy** | "On paper" is used less, a callback line goes under the form (`.lead__micro`), the 404 now says "This page isn't on the plans." with a call line, and repeated sentences between pages were cut |
| 11 | **Estimator sketch + print** | A 6-room floor plan. `SK_ROOMS` maps size to rooms ("A few rooms" lights 0, 1 and 3). Rooms fill with a staggered clip-path, `data-cond` switches the hatching for repairs or damage, and a dashed `.sk-ext` outline means "The outside". In print, only the active page shows, and the estimator prints the summary with a "Golden Touch Contracting · (727) 692-4446 · Scope sheet" header |
| 12 | **Head polish** | Favicon, Open Graph tags, JSON-LD (facts only), the full serif weight range, and the video button labelled "Pause/Play background video" |
| 13 | **Accessibility sweep** | All routes checked: one h1, heading order, alt text, focus order, contrast, reduced-motion and forced-colors rules (decorative layers hidden, borders use `CanvasText`) |

The verified result at 1440×900 and 375 px:

- The wipe updates `--sw-p`.
- The sketch lights the right rooms.
- Title blocks render.
- Nothing scrolls sideways.
- There are no console errors.
- JSON-LD is present.
- The static check is clean.

---

## 6. Deliver: localize, publish, report

1. **Build:** run `python golden-touch-kit/make.py`. It prints `STATIC CHECK: clean`, then `work2 clip removed: 2` and `left: 0`.
2. **Media folder:** `media/` must sit next to `golden-touch.html`. The file names come from the Pexels IDs: `p-<id>.jpg`, `poster-<id>.jpg` and `v-<id>.mp4`. To fetch them again, every source URL is in `build.py` (`P` and `V`).
3. **Publish:** use the Artifact tool with `file_path: golden-touch.html` and a `files` map with an entry per media file, such as `{"media/p-8961339.jpg": "media/p-8961339.jpg", …}` for all 22. To update the live page, publish the same path again so the URL stays the same.
4. **Report** (`golden-touch-report.md`):
   - **The 12 stages:** one paragraph each.
   - **Confirm with the client:** Henry, the optional services, the nearby towns, the lead endpoint, and whether the address can be public.
   - **Missing facts:** email, own photos, licence and insurance, warranty, years, prices, and testimonials they allow us to quote.
   - **Credits:** a table of all 15 photos and 4 videos.
   - **Final rubric.**

---

## 7. From 8.97 to 10: what code cannot do

The code side is close to its ceiling. The rest needs things only the client can supply, and every one of them stays inside the never list.

| # | Item | Who | What it lifts | How it goes in |
|---|---|---|---|---|
| 14 | Re-encode the 35 MB clip to under 15 MB (`ffmpeg -i in.mp4 -vf scale=1280:-2 -c:v libx264 -crf 28 -preset slow -an out.mp4`) | Code (needs ffmpeg) | Motion | Add it to `media/` and remove the strip rule in `localize.py` |
| 15 | **The client's own job photos** (15–20, same crop ratio, shot in daylight) plus one 10-second hero clip | **Client** | Photo 7.5 → 10, First screen, Wow | Replace entries in `P` (keys stay the same, so pages don't change). Projects captions can then name real jobs *the client confirms* |
| 16 | A live lead endpoint, tested end to end | **Client** + code | Trust, Polish | The form already posts to `/api/public/site-lead`. Once it returns 2xx, the success state runs |
| 17 | Confirm Henry, towns, optional services and the public address | **Client** | Copy | Each "yes" adds a fact: the About line, Areas sections and new service cards |
| 18 | A logo mark | Client or designer | Distinctiveness | Replace the "GT" favicon and the header wordmark |
| 19 | Permission to quote 3 reviews word for word | **Brief owner** | Copy → 10 | The rule against quotes is in the brief, so only the brief owner can change it |

After 15–19 the projected score is **about 9.7**. The final 0.3 comes from real-world use rather than design:

- Testing on real iOS and Android phones.
- Lighthouse at 100.
- Weeks of real leads arriving cleanly.

---

## 8. Traps we hit, so you don't

| Trap | What happened | Fix |
|---|---|---|
| Pexels blocked in the artifact viewer | Every image was blank once published | Localize to `media/` and upload it with `files` |
| 15 MB file limit | The 35 MB clip was refused | Poster only, or re-encode |
| CSS or Python in a bash heredoc | "unexpected EOF" | Write the file with the Write tool, then append with `cat` |
| A `\00B7` escape inside a Python string | It became a null byte, and grep then saw `extra.css` as binary | Use the literal "·" character |
| A screen-height-blind hero h1 | At 1440×900 the h1 was 104 px and pushed the proof line to 916 px, below the fold | Cap the size with `min(9vw, 9.5svh)` |
| Phone story photos revealed late | The threshold was too strict | `rootMargin '0px 0px -5% 0px'`, `threshold .02` |
| Screenshots one step behind | They showed the previous route | Check state with JS |
| Arithmetic | The weighted score was first written as 9.03 | Recompute: Σ(weight × score) = 8.97 |
| "Before/after" slips into copy | It is a habit in contractor copy | Search for it, and label the slider Planning/Build only |
| Same reveal on every section | Reads as template motion | Vary entrances by role (split, clip, stagger) and leave quiet sections still |

---

## 9. The one-page run sheet

```
□ Read brief.txt. Copy the facts and the never list onto a card.
□ Stage 1  Strategy: buyer, fears, proof, one goal, 17 pages
□ Stage 2  Concept: reject the first idea, 3 alternatives, pick "plan becomes build",
           fonts, palette with contrast, signature system, motion score
□ Stage 3  Tokens + surfaces + motion gating + components   → style.css
□ Stage 4  Blueprint table: signature, 3+ hooks, tone run, variant  (§2 Stage 4)
□ Stage 5  Media table P / V with alt and credits            → build.py
□ Stage 6  Write the 17 pages with macros                    → pages.html
           Build the tools: form, estimator, ZIP, open-now, bar, popup, lightbox → app.js
□ Stage 7  python golden-touch-kit/make.py  → must print STATIC CHECK: clean
□ Stage 8  Render check: every route × 1440 / 375 / 320 × motion on/off (§4.2)
□ Stage 9  Score the rubric honestly: 8 or more, every floor met
□ Stage 10 Elevate the two weakest categories                → extra.css
□ Stage 11 Fix, rebuild, re-check (up to 3 rounds)
□ Stage 12 Localize → publish with media files → write the report
□ Then     Send the client the list in §7: photos, endpoint, confirmations, logo, quotes
```
