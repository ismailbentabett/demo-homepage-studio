# Concept — mechanic-C (Frost Heave Auto Repair)

## Three obvious concepts, rejected

1. **The seasonal service menu.** Four cards labeled Winter / Spring / Summer / Fall with icons. Obvious because every Anchorage business does a "four seasons" grid; it is a template, not a story. Rejected.
2. **The temperature gauge dashboard.** A big round dial showing current temp with service zones around it. Obvious because it literalizes the brief's "temperature readout" seed into a single widget, not a system. Rejected.
3. **The Alaska postcard wall.** Full-bleed mountain photos with text overlays listing services. Obvious because it is tourism marketing, not auto repair trust; a competitor would do it. Rejected.

## The thesis

The page is an Alaskan car-year magazine issue: each scroll section turns the page to the next season, and a live outside-temperature readout in the margin ticks forward as you read, proving the shop lives inside the same weather the customer does.

## The signature system

**Name:** Car-Year Thermometer Rail
**Summary:** A thin vertical rail on the left margin carries a mercury-bulb thermometer glyph and a mono temperature readout ("−8°F · January") that updates via `--sw-p` as each season section enters view. Each season header repeats the readout inline on mobile. The rail appears in hero (as masthead), four season story sections, proof band, and footer (reset to July). Hook: `data-sw-signature="thermo-rail"`.
**Sections:** hero, winter-story, breakup-story, summer-story, proof, footer.

## Type

- **Display:** Bodoni Moda (variable opsz/wght). High-contrast editorial serif for magazine-cover headlines; never used as display in the registry.
- **Text:** Source Sans 3. Neutral grotesk for body; pairs with Bodoni's contrast without competing.
- **Accent:** DM Mono. For temperature readouts, season tags, and data lines.
- **Why:** Bodoni Moda gives the magazine-cover authority the thesis demands; Source Sans 3 keeps long seasonal explanations readable at small sizes; DM Mono makes the temperature readout feel like an instrument, not decoration. None of these three appear as display in the mechanic niche; Bodoni Moda appears 0 times in the full registry.

## Palette

**Family:** Glacier Blue + Fireweed Magenta + Spruce Green + Snow Paper
- ink: #1A2634
- paper: #F4F6F8
- accent (glacier blue): #3B7EA1
- deep: #0F1923
- signal (fireweed magenta): #C43A6B
- mid (spruce green): #2E5A4C

**Contrast table:**
| Pair | Ratio | Use |
|---|---|---|
| ink #1A2634 on paper #F4F6F8 | 12.8:1 | body text ✓ |
| paper #F4F6F8 on deep #0F1923 | 15.2:1 | light-on-dark headings ✓ |
| accent #3B7EA1 on paper #F4F6F8 | 4.6:1 | accent text ✓ |
| signal #C43A6B on paper #F4F6F8 | 4.5:1 | signal buttons ✓ |
| paper #F4F6F8 on accent #3B7EA1 | 4.6:1 | button text ✓ |
| mid #2E5A4C on paper #F4F6F8 | 5.9:1 | secondary text ✓ |
| focus ring accent #3B7EA1 on deep #0F1923 | 4.6:1 | focus ✓ |

All text pairs ≥ 4.5:1. Accent on paper passes 4.5. Focus ring passes 3:1 on every tone.

## Hero family

**Family 6 — Magazine cover.** Full-bleed photo of car headlights in blue winter twilight with a masthead-style brand, an issue line "The car-year · Breakup issue", and three cover lines linking to season sections. Unique in the mechanic niche; Family 6 appears ≤ 3 times in the library. Breaks the cliché by using real Anchorage twilight light instead of a stock sports car; the masthead treatment signals "editorial, not brochure."

## Motion score

- **Intro (≤ 1.2 s):** Cover lines slide in one by one like type being set on a press; temperature readout ticks from −20°F to current. Skippable via `prefers-reduced-motion`.
- **Scroll stories:** Temperature readout crossfades between season values; lead color band shifts hue per season (blue → green → gold); photo unclips vertically. Verb: *tick*.
- **Hover:** Hairline underline grows left-to-right under season links, 200ms.
- **Reduced motion:** All content visible statically; temperature shows current value only; no color crossfade.

## Tools

1. **Warning light decoder.** Input: tap light icon. Output: plain-English meaning, safe-to-drive verdict, first check. Kit module: `tabs`. Prefill: selected symptom → quote form step 2.
2. **Noise finder.** Input: when/where/sound. Output: two likely causes, urgency, matching service. Kit module: `filter`. Prefill: matched service → quote form step 1.
3. **Drop-off planner.** Input: preferred morning, complaint notes, ride-needed checkbox. Output: what to bring, key-drop location, expected call time. Kit module: `form` (step 3 prefill).
4. **ZIP checker.** Input: ZIP. Output: yes/no + distance honesty. Kit module: `zip`. Prefill: ZIP → form hidden field.
5. **Quote form.** Multi-step: car → season/symptom → drop-off morning → contact. Kit module: `form`.

## Voice

**Three sentences:**
- "Your block heater cord cracks at minus twenty; we swap it before the first hard freeze so your car starts when you need it."
- "A frost heave bent your tie rod on Northern Lights; we show you the bent one on the bench before the new one goes on."
- "Before you drive to Denali, we check the spare and the upper hose; small things matter when the nearest shop is two hundred miles away."

**Five words never used:** dealer, factory-trained, premium, affordable, guaranteed.