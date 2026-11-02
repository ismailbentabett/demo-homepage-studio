# Design System — consulting-C

## Palette
| Token | Hex | Role |
|---|---|---|
| --c-deep | #1A2E28 | Machine-shop green, primary background |
| --c-deep-rgb | 26,46,40 | For rgba() |
| --c-brick | #B84A3C | Oregon District brick red, accent |
| --c-brick-rgb | 184,74,60 | For rgba() |
| --c-river | #4A7C8A | Great Miami river blue, secondary accent |
| --c-river-rgb | 74,124,138 | For rgba() |
| --c-cream | #F2EDE4 | Warm cream, primary text on deep |
| --c-cream-rgb | 242,237,228 | For rgba() |
| --c-paper | #FAF8F4 | Light background for alternating bands |
| --c-paper-rgb | 250,248,244 | For rgba() |
| --c-ink | #1A1A18 | Body text on paper |
| --c-ink-rgb | 26,26,24 | For rgba() |
| --c-muted | #6B6860 | Secondary text on paper |
| --c-rule | #D4CFC6 | Dividers on paper |
| --c-rule-deep | #3A5248 | Dividers on deep |

## Typography
Display: Barlow Condensed (weights 600, 700, 800). Preloaded.
Body: DM Sans (weights 400, 500, 700).

### Scale
--fs--2: clamp(0.75rem, 0.7rem + 0.25vw, 0.8125rem)
--fs--1: clamp(0.8125rem, 0.75rem + 0.3vw, 0.9375rem)
--fs-0: clamp(1rem, 0.9rem + 0.5vw, 1.125rem)
--fs-1: clamp(1.125rem, 1rem + 0.6vw, 1.375rem)
--fs-2: clamp(1.5rem, 1.2rem + 1.5vw, 2.25rem)
--fs-3: clamp(2rem, 1.5rem + 2.5vw, 3.5rem)
--fs-4: clamp(2.75rem, 2rem + 3.5vw, 5rem)

Headings: text-wrap: balance; font-weight: 700; letter-spacing: -0.02em; line-height: 1.05.
Body: text-wrap: pretty; line-height: 1.6.
Numbers: font-variant-numeric: tabular-nums.

## Spacing
--sp-xs: clamp(0.5rem, 0.4rem + 0.5vw, 0.75rem)
--sp-sm: clamp(0.75rem, 0.6rem + 0.75vw, 1.25rem)
--sp-md: clamp(1.5rem, 1rem + 2vw, 3rem)
--sp-lg: clamp(3rem, 2rem + 4vw, 6rem)
--sp-xl: clamp(5rem, 3rem + 6vw, 9rem)

## Radius & Rules
--radius: 2px everywhere (industrial feel, no pills except tags).
--rule-w: 1.5px.
--rule: var(--rule-w) solid var(--c-rule).
--rule-deep: var(--rule-w) solid var(--c-rule-deep).

## Easing & Duration
--ease-out: cubic-bezier(.23,1,.32,1)
--ease-io: cubic-bezier(.77,0,.175,1)
--dur-press: 120ms
--dur-ui: 200ms
--dur-page: 520ms
--dur-story: 900ms
--dur-stagger: 60ms

## Tone classes
.t-deep { background: var(--c-deep); color: var(--c-cream); }
.t-paper { background: var(--c-paper); color: var(--c-ink); }
.t-brick { background: var(--c-brick); color: var(--c-cream); }
.t-river { background: var(--c-river); color: var(--c-cream); }

## Header height
--header-h: 64px (mobile), 72px (≥900px).

## Photo grade
filter: saturate(.85) contrast(1.05) sepia(.1) hue-rotate(-2deg);
Applied to every img and video poster.