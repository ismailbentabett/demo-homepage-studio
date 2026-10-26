# Concept — autotuneup-C (Thin Air Tune-Up · Santa Fe, NM)

## Three obvious concepts, rejected

1. **The scenic postcard.** Hero is a sunset over the Sangre de Cristo with "Santa Fe car care" in a serif; sections are stock adobe frames. Obvious because every tourism site does it; the trade disappears behind the landscape. Rejected.
2. **The altitude-warning dashboard.** Red/yellow/green gauges for UV, dust, cold, thin air; each section is a warning light. Obvious because it reads like a mechanic's diagnostic page (the niche we must not resemble) and uses scare language ("don't wait until your engine starves"). Rejected.
3. **The maintenance calendar with desert motifs.** A 12-month grid with monsoon and snow icons, turquoise borders. Obvious because it is the brief's seed taken literally; a competitor would do the same seasonal grid, and it has no system beyond decoration. Rejected.

## The thesis

The page is an ascent: each section is a place on the road out of Santa Fe, and the altitude marker on the margin climbs as you scroll, tying every maintenance task to the elevation that demands it.

## The signature system

**Altitude Marker Rail.** A monospaced vertical rail on the left margin (sticky on desktop, inline pill on mobile) that reads the current section's elevation and place name. It is the `data-sw-signature` hook.

- **Hero:** "7,199 ft · Santa Fe Plaza" centered under the statement, static.
- **Story sections:** Each story band carries its own marker ("7,450 ft · Eldorado Canyon Road", "8,200 ft · Ski Basin Turnoff", "6,300 ft · Cerrillos Dust Bowl"); the rail counts up via `--sw-p` as sections enter view.
- **Proof/reviews:** Review cards carry a small altitude tag showing where the reviewer drives ("Eldorado · 7,450 ft"), reinforcing that these are real local cars.
- **Footer:** "Sea level is a long way down. Next interval at 7,199 ft." The marker resets to shop elevation.

Variation: the marker format shifts from full line (hero) → compact pill (story) → inline tag (review) → sentence (footer). Never just decoration: it organizes content by place, not service category.

## Type

- **Display:** `Space Mono` (mono class, used for altitude markers, readings, labels). Appears 0 times in registry as display; unique in niche.
- **Text:** `Outfit` (grotesk class, humanist warmth for headlines and body). Appears 0 times as text in autotuneup niche.
- **Accent:** none (mono does double duty as accent for data).

Why: Space Mono's fixed-width numerals make altitude readings feel instrument-grade; Outfit's rounded terminals keep the tone human and avoid the clinical feel of pure technical type. Pair is unique in registry.

## Palette

**Family:** "Night Sky + Turquoise Door + Adobe Dust"

| Role   | Hex       | Usage                              |
|--------|-----------|------------------------------------|
| ink    | `#e8e4dc` | Body text on deep backgrounds      |
| paper  | `#121826` | Deep night-sky background          |
| accent | `#3bb9a6` | Turquoise door; buttons, links     |
| deep   | `#0b1120` | Deeper bands, footer               |
| signal | `#d4880f` | Sunset/adobe; sample tags, alerts  |
| mid    | `#2a3344` | Card backgrounds, rules            |

Contrast pairs to verify:
- ink `#e8e4dc` on paper `#121826`: body text
- accent `#3bb9a6` on paper `#121826`: button text, links
- signal `#d4880f` on paper `#121826`: sample tags
- ink `#e8e4dc` on mid `#2a3344`: card body
- accent `#3bb9a6` on deep `#0b1120`: footer links
- white `#ffffff` on accent `#3bb9a6`: button text

## Hero family

**Family 10 — Centered statement + photo marquee.** Unique in autotuneup niche (A uses family 1). Statement: "Tuned for thin air." (4 words). Marquee below: slow horizontal slide of adobe wall at dusk, car on mountain road, monsoon clouds over mesa, dusty windshield with wipers. Marquee pauses on hover/focus; stops with reduced motion. Breaks the cliché by making the statement typographic (not a slogan) and the photos atmospheric (not service shots).

## Motion score

- **Intro (≤ 1.2 s):** Centered statement fades in letter-by-letter (stagger 40ms, total 600ms); marquee starts after 400ms. Skippable via any interaction. Reduced motion: statement visible immediately, marquee static first frame.
- **Scroll story 1 (altitude count):** Altitude marker rail counts up between sections via `--sw-p`; numbers tick in mono, 900ms ease-io. Verb: count.
- **Scroll story 2 (marquee parallax):** Photo marquee shifts speed relative to scroll (0.3× rate), creating depth without pinning. Verb: drift.
- **Hover:** Hairline rule grows from left (`scaleX(0→1)`) under interactive elements, 200ms, accent color. One language only.
- **Reduced motion:** All stories become static layouts; altitude markers show final value; marquee shows first frame; nothing hidden.

## Tools

1. **Season check list** (`checklist` module). Inputs: toggle boxes for wipers, battery, coolant, tires, lights, A/C. Output: ticked list with "book a season check" button. Hand-off: pre-fills services array in quote form.
2. **Oil type explainer** (`tabs` module). Inputs: three tabs (conventional, synthetic blend, full synthetic). Output: plain-language explanation + usual change interval + "your spec wins" note. No hand-off (informational).
3. **What's due at my mileage** (`estimator` module). Inputs: mileage number, driving condition selector (town, dirt roads, ski road). Output: due-now list, coming-soon list, not-due list, all labelled "sample schedule". Hand-off: pre-fills services into quote form.
4. **ZIP checker** (`zip` module). Input: ZIP code. Output: "easy drive" or "booked drop-off works best" + service area list. Hand-off: reveals form if served.
5. **Quote form** (`form` module). Multi-step: car (year/make/model text) → mileage → where you drive → services (pre-filled) → when → contact.

## Voice

Three sample sentences:
- "At seven thousand feet, your engine breathes less air and your battery works harder on cold mornings."
- "We show you the dirty filter next to the new one and tell you what can wait until the next interval."
- "Book a slot, drop it at 7:30, pick it up by noon. We'll text you when it's ready."

Five words never used: premium, expert, guaranteed, affordable, state-of-the-art.