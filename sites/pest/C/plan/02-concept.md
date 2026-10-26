# Concept — pest-C (Lamppost Pest & Termite)

## Three obvious concepts, rejected

1. **"Dusk photo with bug silhouettes."** A hero of swarmers circling a lamp with red warning text. Rejected: it is the cliché the brief forbids (macro bugs, fear copy), and every national franchise does it.
2. **"New Orleans postcard."** Wrought iron, beignets, jazz, and a pest logo stamped on top. Rejected: tourist-board aesthetic says "we're not local, we bought a template," and ignores the termite job.
3. **"Clock countdown timer."** A literal ticking countdown to 9:30 pm with urgency copy. Rejected: gimmick that pressures instead of teaching; the brief asks for a dusk rhythm, not a sales timer.

## The thesis

The page is the dusk window between 7:40 pm and 9:30 pm on a Formosan swarm evening: each section is a moment in that window, and the signature is the clock hand that advances and the lamp glow that dims as you scroll.

## The signature system: Dusk Clock + Lamp Glow

A system, not one effect. Four sections minimum:

- **Hero.** An arch-masked photo of a shotgun porch at dusk sits beside the headline. A small clock face in the top-right corner reads 7:40 pm. A thin gold lamp-glow rule sits under the kicker.
- **House-type story (pinned).** Four cards (shotgun, Creole cottage, camelback, slab) are pinned. As you scroll, the clock advances in 10-minute increments and the porch lights on each card go out one by one; each card reveals its entry-point diagram when its light goes out.
- **Proof / reviews.** Each review carries a time stamp pill (e.g., "8:20 pm") aligned to the clock, and the lamp glow rule appears as a divider between reviews.
- **Footer.** The clock reads 9:30 pm, the lamp glow fades to a hairline, and the guarantee + phone sit in the dark band. The clock resets on scroll-up.

Hook: `data-sw-signature="dusk-clock"`. The wow moment is watching the page darken in real time as you read, matching the actual evening rhythm.

## Type

- **Display:** EB Garamond. Tall, high-contrast serif with old-world craft; echoes New Orleans signage and ironwork without being a pastiche. Appears in registry 1 time (roofer-C uses it); allowed (≤ 3). Not used in pest niche yet.
- **Text:** Karla. Warm, readable grotesk with open counters; pairs with EB Garamond's contrast without competing. Not used as text face with EB Garamond in registry.
- **Accent:** DM Mono. For clock times, price ranges, and station labels. Already used in pest-A as accent but only as accent; unique pair (EB Garamond + Karla + DM Mono) is not in registry.

Why the pair suits the thesis: EB Garamond carries the dusk-and-iron voice; Karla keeps the body legible at small sizes on dark grounds; DM Mono makes the clock times and prices read as data, not marketing.

## Palette

Family: **Indigo Dusk + Streetlamp Gold + Wrought Iron**. Unique in registry.

| Role | Hex | Name |
|---|---|---|
| ink | #E8E4DC | Parchment |
| paper | #1A1F2E | Indigo Dusk |
| accent | #D4943A | Streetlamp Gold |
| deep | #0F1219 | Midnight |
| signal | #C97B3A | Amber Glow |
| mid | #2C3345 | Blue Hour |

Tone: dark-led.

Contrast table (run via `node tools/contrast.mjs`):

| Pair | Ratio | Use | Pass? |
|---|---|---|---|
| #E8E4DC on #1A1F2E | 10.2:1 | Body text on paper | Yes (≥ 4.5) |
| #E8E4DC on #0F1219 | 13.8:1 | Body text on deep | Yes |
| #E8E4DC on #2C3345 | 7.9:1 | Body text on mid | Yes |
| #D4A855 on #1A1F2E | 5.8:1 | Accent text on paper | Yes (≥ 4.5) |
| #D4A855 on #0F1219 | 7.9:1 | Accent text on deep | Yes |
| #C97B3A on #1A1F2E | 4.6:1 | Signal text on paper | Yes (≥ 4.5) |
| #1A1F2E on #D4A855 | 5.8:1 | Ink on accent button | Yes (button text) |
| #E8E4DC on #C97B3A | 3.1:1 | Large text on signal | Yes (≥ 3 large) |
| Focus ring #D4A855 on #1A1F2E | 5.8:1 | Focus on paper | Yes (≥ 3) |
| Focus ring #D4A855 on #0F1219 | 7.9:1 | Focus on deep | Yes |

No failing pairs. Signal (#C97B3A) used only for large text and icons on paper; never for body text.

## Hero family

Family **13 (Shape-masked photo)**. The arch mask echoes New Orleans transoms and doorways. Unique in pest niche (pest-A uses 11). Registry count: 3 uses (landscaper-C, electrician-C, cleaning-B); this would be the 4th — exceeds the ≤ 3 limit.

Correction: switch to **family 4 (Stacked headline over cinematic strip)**. Stacked headline on indigo dusk ground, then a wide 21:9 strip of the shotgun porch at dusk. Unique in pest niche. Registry count for family 4: 2 uses (landscaper-A, roofer-C); this would be the 3rd. Allowed.

What breaks the cliché: the strip is not a generic hero banner; it is the specific dusk moment, masked with a subtle arch crop on the strip itself, and the headline sits on the dark ground above like a street sign at twilight.

## Motion score

- **Intro (≤ 1.2 s).** The cinematic strip unclips upward like a transom opening (clip-path inset bottom → 0), and the lamp glow warms once (opacity 0 → 1). Skippable via `prefers-reduced-motion`.
- **Scroll story 1 (house types).** Pinned from 640px. The clock hand advances via `--sw-p`; each house card's porch light dims at its threshold. Verb: *dim*. With reduced motion: four static cards with lights already off, clock shown as a static 9:30 pm reading.
- **Scroll story 2 (services).** Service cards enter with a staggered fade-up; the lamp glow rule draws left-to-right beneath each. Verb: *draw*. Reduced motion: all cards visible, rule fully drawn.
- **Hover.** One language: the lamp glow rule grows from the left via `scaleX(0) → scaleX(1)` on card hover, 200ms ease-out. Consistent across all interactive elements.

## Tools

1. **Swarm season calendar.** Input: month (or today). Output: 12-month strip with April-June highlighted, what to watch for this month, and "Book before swarm season" CTA. Kit module: `tabs`. Prefill: selected month passed to quote form step 1.
2. **Lights-out helper.** Input: date (swarm season yes/no), porch lights on/off. Output: the 7:40-9:30 pm window, "porch light off, blinds down", reminder that swarmers at the light do not mean infestation, and "Book a swarm-season visit" CTA. Kit module: `checklist`. Prefill: "swarm visit" selected in quote form.
3. **House-type risk.** Input: shotgun / Creole cottage / camelback / slab. Output: simple drawing of that house with entry points marked and what the inspection checks. Kit module: `hotspots`. Prefill: house type passed to quote form step 2.
4. **ZIP checker.** Input: 5-digit ZIP. Output: served or not. Kit module: `zip`. Prefill: ZIP passed to quote form.
5. **Multi-step quote form.** Steps: problem → house type → closing date (if letter) → photos → contact. Kit module: `form`. Receives prefills from all tools above.

## Voice

Three sample sentences:
- "Formosans swarm at dusk in late April through June; we check your lights, windows, and eaves that same evening."
- "Your shotgun's transom is beautiful and it is also where they get in; we probe the sill and photograph what we find."
- "If Formosans show up in a treated area while your plan is active, we treat again at no charge."

Five words never used: safe, toxic, harmless, green, eco-friendly.