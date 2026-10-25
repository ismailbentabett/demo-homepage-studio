# Build contract

What a site's `src/` may contain, what `tools/build.mjs` does with it, and what lands in `dist/`.
This file is the single source of truth shared by the builder agent, the kit (`kit/lib/`) and the tools.

A site lives in `sites/<trade>/<A|B|C>/` (id `<trade>-<A|B|C>`).

## 1. Source files (written by the builder)

| File | What it is |
|---|---|
| `src/index.html` | **Body content only** (no `<html>`, `<head>`, `<body>`). Header, sections, footer, the `<svg>` sprite of icons. |
| `src/style.css` | All styling. Plain CSS (custom properties, `@layer` allowed, nesting allowed). No `@import`. |
| `src/app.js` | Only this site's signature moment and glue. Runs after the kit. Plain script, no modules, no imports. |
| `src/site.config.json` | See §4. |

Never write a literal business fact (name, phone, email, owner, city, areas, ZIPs, prices, reviews) in `src/`. Use tokens.

## 2. Tokens `{{path}}`

Resolved from `facts.json` at build time, HTML-escaped. Unknown token = build error.

- `{{biz.name}}`, `{{biz.short}}`, `{{biz.initials}}`, `{{biz.owner}}`, `{{biz.tradeLabel}}`, `{{biz.phone}}`, `{{biz.phoneE164}}`,
  `{{biz.email}}`, `{{biz.city}}`, `{{biz.state}}`, `{{biz.stateName}}`, `{{biz.timezone}}`
- Arrays by index: `{{biz.areas.0}}`, `{{services.2.name}}`, `{{services.2.blurb}}`, `{{proof.reviews.0.text}}`, `{{proof.prices.1.from}}`
- `{{proof.rating}}`, `{{proof.reviewCount}}`, `{{proof.years}}`, `{{proof.license}}`, `{{proof.guarantee}}`, `{{proof.label}}`
- `{{seo.title}}`, `{{seo.description}}`, `{{demo.disclaimer}}`, `{{year}}` (current year)
- Joined lists: `{{biz.areas|list}}` → "Broken Arrow, Jenks and Bixby", `{{biz.zips|csv}}` → "74103,74104"
- `{{hours|table}}` → a `<dl class="hours">` of the week; `{{hours|today}}` → a `<span data-open-now>` filled by the kit.

### Repeaters

```html
<!-- each services -->
<li class="svc"><h3>{{.name}}</h3><p>{{.blurb}}</p>[[quote {{.short}} btn-ghost]]</li>
<!-- /each -->
```
`<!-- each <path> -->...<!-- /each -->` repeats its inner HTML for every item of the array at `<path>`
(`services`, `biz.areas`, `biz.zips`, `proof.reviews`, `proof.prices`). Inside, `{{.field}}` is the item's field,
`{{.}}` the item itself (for string arrays), `{{#}}` its 1-based index, `{{#2}}` zero-padded ("01"). Optional slice:
`<!-- each services 0:6 -->`. Nesting is not supported.

`<!-- if proof.years -->...<!-- /if -->` keeps the inner HTML only when the fact exists and is truthy.

## 3. Macros `[[...]]`

Regex `\[\[(.+?)\]\]` (dot matches newline). Parts split by `|`, head split by whitespace. Media keys come from
`plan/media.json` (slot name → manifest photo/video id). An unknown key = build error.

| Macro | Output |
|---|---|
| `[[img key \| attrs]]` | `<img src="media/<file>" alt="<manifest alt>" width="1170" height="780" loading="lazy" decoding="async" data-photo="key" attrs>`. If attrs contain `eager`: `fetchpriority="high"`, no lazy. Real width/height from the manifest when present. |
| `[[frame key cls \| attrs \| imgattrs]]` | `<figure class="frame cls" data-fallback="<alt>" attrs><img ... imgattrs></figure>` |
| `[[video key cls \| attrs]]` | `<figure class="vid cls"><video muted loop playsinline preload="none" poster="media/<poster>" data-src="media/<file>" data-video aria-label="<alt>" attrs></video><button class="vid-btn" type="button" data-vid-btn aria-pressed="false">Pause background video</button></figure>` |
| `[[purl key]]` | The relative URL of the photo (`media/<file>`), for CSS custom properties / `srcset`. |
| `[[credits]]` | `<ul class="credits">` of "Photo by X on Pexels" / "Video by X on Pexels" for every media file used. |
| `[[i name]]` | `<svg class="i" aria-hidden="true" focusable="false"><use href="#i-name"/></svg>` |
| `[[tel]]` | `<a class="tel-plain" href="tel:{{biz.phoneE164}}">{{biz.phone}}</a>` |
| `[[call cls]]` | `<a class="btn btn-call cls" href="tel:...">[[i phone]]<span>Call {{biz.phone}}</span></a>` |
| `[[quote svc cls]]` | `<a class="btn cls" href="#contact" data-service="svc">Price it</a>` (label override: `[[quote svc cls \| Get my number]]`) |
| `[[sample label]]` | `<span class="sample-tag">Sample label</span>`, e.g. `[[sample review]]`, `[[sample pricing]]` |

## 4. `src/site.config.json`

```json
{
  "lang": "en",
  "themeColor": "#1d1a16",
  "fonts": [
    { "family": "Fraunces", "weights": [400, 600], "italic": false, "preload": true },
    { "family": "Inter Tight", "weights": [400, 500, 700] }
  ],
  "modules": ["reveal", "header", "menu", "mobilebar", "lenis", "split", "counters", "video", "zip", "form", "faq", "opennow", "popup"],
  "vendor": ["gsap", "ScrollTrigger", "lenis"],
  "ogPhoto": "hero",
  "favicon": { "glyph": "R", "bg": "#1d1a16", "fg": "#f2c14e" },
  "jsonLd": { "type": "RoofingContractor" }
}
```

- `fonts`: families must exist in `data/fonts-catalog.json` (or be fetched with `node tools/fetch-fonts.mjs "Family"`).
  The build writes the `@font-face` rules (font-display: swap) and preloads the ones marked `preload`.
- `modules`: names of `kit/lib/<name>.js`. Only the listed ones are bundled (`core` is always first).
- `vendor`: files of `vendor/` (`gsap`, `ScrollTrigger`, `SplitText`, `Flip`, `DrawSVGPlugin`, `MotionPathPlugin`,
  `Observer`, `CustomEase`, `lenis`). Loaded with `defer` before the bundle.
- `favicon`: the build draws an SVG favicon + 180px apple-touch PNG + 1200×630 OG image (the `ogPhoto` slot with the
  name set in the display font over a scrim).

## 5. What the build injects (`dist/index.html`)

In order:
1. `<!doctype html><html lang>` `<head>`: charset, viewport, `<title>{{seo.title}}`, description, `robots noindex`,
   `theme-color`, canonical-less OG/Twitter tags (`og:image` = `og.jpg`), icons, JSON-LD (`schemaType`, name, telephone,
   email, `areaServed` = city + areas, `openingHoursSpecification` from hours; **no address, no rating**),
   the gate script `document.documentElement.classList.add('sw-js'); if(matchMedia('(prefers-reduced-motion: no-preference)').matches) document.documentElement.classList.add('sw-motion')`,
   font preloads, `@font-face`, then `<style>` = `kit/base.css` + `src/style.css`.
2. `<body>` = resolved `src/index.html`.
3. `<script defer>` vendor files, then `<script defer src="app.js">` = `kit/lib/core.js` + listed modules + `src/app.js`.
4. `<script type="application/json" id="sw-facts">` with the facts the kit needs (hours, timezone, zips, areas, services
   names, phone) so modules never read literals from the DOM.

`dist/` is self-contained: `index.html`, `app.js`, `media/`, `fonts/`, `vendor/`, `icons/`, `og.jpg`. It opens from
`file://` and from any static host. No request leaves the page.

## 6. Kit modules (`kit/lib/`)

`core.js` defines `window.SW` (helpers: `$`, `$$`, `on`, `facts`, `reduced`, `mod(name, fn)`). Every module registers
with `SW.mod('name', fn)` and is started on `DOMContentLoaded` in the order listed. Modules attach only to their
`data-*` hooks and do nothing when the hook is absent. They never style (only toggle classes / attributes / CSS vars).

| Module | Hook(s) | Behaviour |
|---|---|---|
| `reveal` | `[data-reveal]`, `[data-reveal="clip"]`, `[data-reveal-stagger]` | Adds `.is-in` at 85% viewport; clip images; stagger children 60ms. Without `sw-motion` everything is already visible. |
| `header` | `[data-header]`, `[data-progress]`, `[data-totop]` | `.is-scrolled`, hide on scroll down / show on up, reading progress var `--p`, back-to-top. |
| `menu` | `[data-menu-btn]`, `[data-menu]` | Full-screen / drawer menu, focus trap, Esc, `aria-expanded`. |
| `mobilebar` | `[data-mobilebar]` | Sticky call/quote bar under 900px; hides on scroll down and while `#contact` form is visible. |
| `lenis` | `html[data-smooth]` | Lenis `lerp .1`, `wheelMultiplier 1`, synced to ScrollTrigger; off under reduced motion. |
| `split` | `[data-split="lines\|words\|chars"]` | Splits text (keeps an sr-only copy), sets `--i` per piece; the h1 line-mask reveal. |
| `rotator` | `[data-rotate="a\|b\|c"]` | Fixed-width inline-grid slot, `aria-hidden`, sr-only static copy, 2.6s interval, stops under reduced motion. |
| `counters` | `[data-count="127"]` | Counts up once in view (static under reduced motion). |
| `video` | `[data-video]`, `[data-vid-btn]` | Lazy-loads `data-src` near view, plays muted, pauses off-screen, pause button with `aria-pressed`; never autoplays under reduced motion. |
| `pointer` | `[data-magnetic]`, `[data-tilt]`, `[data-spotlight]` | Fine-pointer only effects (sets CSS vars). |
| `compare` | `[data-compare]` | Two-layer slider, keyboard + pointer, `role=slider`, `aria-valuetext` "Planning 40%, Build 60%". Labels from `data-compare-labels`. |
| `marquee` | `[data-marquee]` | Duplicates content, pauses on hover/focus, static under reduced motion. |
| `faq` | `[data-accordion]` | Accessible accordion with height animation. |
| `tabs` | `[data-tabs]` | ARIA tabs, arrow keys. |
| `hotspots` | `[data-hotspots]` | Photo hotspots with popover cards, keyboard reachable. |
| `zip` | `[data-zip]` | ZIP checker against `facts.biz.zips`; answers in an `aria-live` region; "yes" offers the form with the ZIP prefilled. |
| `checklist` | `[data-checklist]` | Self-check list with a live result line. |
| `estimator` | `[data-estimator]` | Range estimate from `facts.proof.prices` (shows `from`/`to` strings only, labelled sample), live SVG sketch hook `data-est-sketch`, printable sheet. |
| `prefill` | `[data-service]` | Any CTA with `data-service` pre-selects the service in the form and scrolls to `#contact`. |
| `form` | `form[data-lead]` | 4 steps (service → job details → when → contact), per-step validation, `website2` honeypot, time trap `t`, honest thank-you state, **never sends anything**. |
| `opennow` | `[data-open-now]` | "Open now · until 6 pm" / "Closed · opens Mon 7 am" from hours + timezone. |
| `filter` | `[data-filter]` | Gallery filter with FLIP (transform only). |
| `lightbox` | `[data-lightbox]` | Dialog lightbox with focus trap, arrows, Esc. |
| `carousel` | `[data-carousel]` | Drag/scroll-snap carousel with buttons; no autoplay. |
| `popup` | `[data-popup]` | One per visit (sessionStorage), on exit intent (desktop) or 60% scroll; never on load; Esc + focus trap. |
| `media-fallback` | (always on) | A failed image swaps to a styled `.frame.is-broken` panel with the `data-fallback` text. |

`src/app.js` may use `SW`, `gsap`, `ScrollTrigger`, `Lenis` and must guard every effect with `SW.reduced` / `sw-motion`.

## 7. Build refusals

The build fails (exit 1, plain message) on: unknown token, unknown macro, unknown media key, a font not in the catalog,
a module not in `kit/lib`, a vendor file not in `vendor/`, `<script src="http`, any `http(s)://` URL in `src/` other than
`https://schema.org`, a `<html>/<head>/<body>` tag in `src/index.html`.
