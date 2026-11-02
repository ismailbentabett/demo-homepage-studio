# Concept — fireplace-A

## Three alternatives, rejected
1. **"Cozy hearth glow"** — warm photo of a roaring fire with a family silhouette. Rejected: every competitor does this; the brief §4 bans it; it says nothing about the work.
2. **"Safety checklist wall"** — grid of badges and certifications with a red "chimney fire!" banner. Rejected: demo rules forbid badges and scare copy; reads as fear-mongering.
3. **"Stove showroom"** — product-grid hero with inserts and stoves lined up. Rejected: misses the sweep/inspection core of the business; looks like an e-commerce template.

## The thesis
**The site is the chimney.** Scrolling is the brush climbing the flue: each section is one level of the cross-section, and the page brightens from firebox-dark to cap-daylight as you rise.

## The signature system: chimney cross-section
A drawn flue in the left margin (desktop) or top rail (mobile) with six labelled levels. A small brush marker sits at the current level and moves on scroll via `--sw-p`. Each section's content lives at its level:
- **L1 Firebox** — process (drop cloth, vacuum, brush).
- **L2 Damper** — caps and dampers.
- **L3 Smoke shelf** — camera inspection + smoky-room fixes.
- **L4 Liner** — stainless liners + stove/insert installs.
- **L5 Crown** — crown and brick repair.
- **L6 Cap** — contact form under open sky.
The signature appears in: hero (arch frames the firebox), process, services, proof (review cards hang at their level), prices (estimator rows carry a level tag), footer (cap + sky). Hook: `data-sw-signature="flue-level"`.

## Type
- **Display:** Young Serif (heavy rounded old-style serif, homely and confident — like a cast-iron stove plate). Roles: display.
- **Text:** Work Sans (grotesk tuned for screens, slightly wide, workmanlike). Roles: text.
Pair rationale: a sturdy serif voice for headlines that feels like craft, paired with a practical sans for body that reads cleanly at small sizes. Neither is used elsewhere in the fireplace niche; Young Serif has not been used as display in the library yet.

## Palette: Soot + Ember + Brick
Dark-led. Warm black of a firebox, ember orange as the accent, brick reds and flue-tile buff in photos, cream type on dark.

| Role | Hex | On | Ratio | Use |
|---|---|---|---|---|
| deep (soot) | #1A1614 | ember #D96A2B | 5.2 | body on deep, reversed |
| paper (cream) | #F2EBE0 | deep #1A1614 | 13.8 | body on paper |
| ember (accent) | #D96A2B | deep #1A1614 | 5.2 | accent words, brush marker, buttons on deep |
| ember-ink | #8C3A0F | paper #F2EBE0 | 6.1 | accent words on paper |
| brick | #7A3B2E | paper #F2EBE0 | 7.4 | secondary headings, level tags on paper |
| mid (warm gray) | #3D3532 | paper #F2EBE0 | 9.2 | muted text on paper |
| signal (daylight) | #E8DCC8 | deep #1A1614 | 10.4 | cap-level background, never for body text |

Palette family name: **Soot + Ember + Brick**. Unique in the registry.

## Hero family
**13 — Shape-masked photo (firebox arch).** The hero photo is shown through an arched clip-path that echoes a firebox opening; the headline sits below on the hearth. Unique in the fireplace niche; not overused in the library.

## Motion
- **Intro (≤ 1.2 s):** An ember glow warms inside the arch (radial gradient opacity 0→1, 800ms), then the photo fades in behind it (opacity 0→1, 400ms). H1 line-mask reveals upward, 70ms stagger. Skippable; readable before animation.
- **Scroll story (#process, pinned ≥ 640px):** The brush marker rises through the drawn flue; soot on the flue walls wipes clean via `clip-path: inset(0 calc((1 - var(--sw-p)) * 100%) 0 0)` driven by ScrollTrigger. Height: `calc(3 * 55svh + 100svh)`. Reverses on scroll-up. Under 640px: stacked cards with clip reveal, no pin.
- **Entrance patterns:** Text rises (opacity 0→1, translateY 24px→0, 500ms, 85% viewport). Images unclip (`clip-path: inset(0 0 100% 0)` → `inset(0)`). Quiet sections (#guarantee, #footer) do not animate.
- **Hover:** Hairline under item grows `scaleX(0→1)` from left, 200ms. One language everywhere, inside `@media (hover:hover)`.
- **Reduced motion:** Everything visible and complete. Brush marker static at L1. No clip wipes. Intro skipped.

## Tools
1. **Symptom checker** (`#checker`, after hero). Inputs: tap what is happening (smoke into room / smell in summer / flakes falling / sounds in flue / water stain / stove won't stay lit / haven't used in years). Output: plain-English meaning + urgency ("before your next fire" / "this season") + which visit to book. Handoff: prefills `#contact` form with symptom and service.
2. **Creosote stage explainer** (inside #process). Three tiles: dusty soot / crunchy flakes / shiny glaze. Tap the one that matches. Output: what it is, why it forms, what a sweep can remove. Honest: glazed may need a second visit. No price.
3. **ZIP checker** (`#area`). Input: ZIP. Output: "We cover 59803. Sweeps there run on Tuesdays and Thursdays" or outside-area message. Reads `{{biz.zips}}` only. Handoff: opens form with ZIP prefilled.
4. **Multi-step quote form** (`#contact`). Steps: what you burn in → what's happening → when it was last swept → your address area → how to reach you. Per-step validation, honeypot, honest thank-you. Never sends.

## Voice
Three sentences in the site's voice:
- "Drop cloths go down before the brush goes up."
- "If the flue tile is cracked, we show you the photo before we say a word about a liner."
- "If the hearth isn't as clean as we found it, we come back."

Five words it never uses: certified, guaranteed (except as the named clean-hearth guarantee from facts), emergency, best, free.