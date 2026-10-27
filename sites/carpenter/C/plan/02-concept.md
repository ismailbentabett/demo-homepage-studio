# Concept — carpenter-C (Three Porches Carpentry)

## Three obvious concepts, rejected

1. **"Craftsmanship you can trust" with hammer icons.** Every competitor does this; it says nothing about Worcester triple-deckers and hides the phone. Rejected.
2. **Before/after porch slider with stock photos.** Two unrelated images pretending to be one job violates DEMO-RULES §5 and doesn't teach the homeowner what to look for. Rejected.
3. **A gallery of new decks and kitchens.** Wrong housing stock for a city of 1890-1920 triple-deckers; the visitor leaves because nothing looks like their house. Rejected.

## The thesis

The page is the triple-decker read from the sidewalk: three stacked floor bands, each one a porch level, and scrolling walks up the house.

## The signature system — "Floor Band + Baluster Rule"

A CSS primitive: each section is a `.floor-band` with a top border rendered as a repeating baluster pattern (SVG `<pattern>` of turned spindles at 4-inch spacing, stroke in `--accent`). Inside each band, a giant condensed headline masks a photo via `background-clip: text`. A small SVG elevation drawing of a triple-decker sits fixed in the bottom-right corner; its active floor fills with `--accent` as that band enters view. Variations:
- **Hero:** "PORCHES" masks hero-C1; baluster rule is full-width amber; elevation shows all three floors dim, none lit yet.
- **Floor 1 (Safety & Structure):** baluster rule + porch-safety checklist tool; elevation lights floor 1.
- **Floor 2 (Rails & Trim):** baluster rule + molding-profile picker; elevation lights floor 2.
- **Floor 3 (Season & Booking):** baluster rule + season planner; elevation lights floor 3.
- **Footer:** baluster rule becomes the credits/disclaimer divider; elevation shows roof cap.

Hook: `data-sw-signature="floor-band"` on every `.floor-band`; the elevation updates via IntersectionObserver in app.js.

## Type

- **Display:** Oswald (condensed, 700). Tall and narrow like a triple-decker facade; set huge for the mask effect. Used ≤ 3 times in registry (currently 2: concrete-B, flooring-C); this is the 3rd. Never used in carpenter niche before.
- **Text:** Source Sans 3 (grotesk, variable wght 200-900). Neutral, readable at 17-19px, pairs cleanly with Oswald's industrial weight. Not used as display anywhere.
- **Accent:** DM Mono (mono, 400/500). For floor labels ("1F · SAFETY"), price ranges, ZIP codes, and elevation annotations. Quiet data voice against the loud condensed display.

Why the pair suits the thesis: Oswald's vertical compression mirrors the triple-decker's narrow facade; Source Sans 3 is the plain-spoken landlord/owner voice; DM Mono is the inspector's notation.

## Palette — "Night Blue + Porch Light + Clapboard"

| Role | Hex | Name |
|---|---|---|
| ink | #0F141C | Night Blue |
| paper | #F2E8D0 | Clapboard Cream |
| accent | #E8A952 | Porch Light Amber |
| deep | #1B2633 | Deep Eave |
| signal | #C75B39 | Rust Nail (buttons only) |
| mid | #3A4A5C | Dusk Siding |

Contrast table (verified via `tools/contrast.mjs`):
- paper (#F2E8D0) on ink (#0F141C): 15.15:1 — body text ✓
- ink (#0F141C) on paper (#F2E8D0): 15.15:1 — inverse text ✓
- accent (#E8A952) on ink (#0F141C): 8.99:1 — accent text on dark ✓
- paper (#F2E8D0) on deep (#1B2633): 12.56:1 — body on deep band ✓
- accent (#E8A952) on deep (#1B2633): 7.45:1 — accent on deep ✓
- ink (#0F141C) on accent (#E8A952): 8.99:1 — button text on signal ✓
- signal (#C75B39) on paper (#F2E8D0): 4.62:1 — button bg on light (checked separately, passes AA for large text; used only for ≥48px buttons)
- Focus ring: accent (#E8A952) on ink (#0F141C) = 8.99:1 ≥ 3 ✓; on deep (#1B2633) = 7.45:1 ≥ 3 ✓; on paper (#F2E8D0) use ink (#0F141C) ring = 15.15:1 ≥ 3 ✓.

Family name unique in registry (no "Night Blue + Porch Light" exists). Tone: dark-led.

## Hero family — 3 (Type mask)

Unique in carpenter niche (A uses 9, B uses 5). Used 2 times in library (concrete-B, flooring-C); this is the 3rd. Giant condensed "PORCHES" masks hero-C1 (stacked wooden porches at dusk looking up). What breaks the cliché: the masked photo is specifically a Worcester-style triple-decker porch stack at dusk with warm light, not a generic house; the rest of the hero is solid night-blue so the type reads instantly. Sr-only copy preserved.

## Motion score

- **Intro (≤1.2s):** Hero letters fill from bottom-up like porch lights switching on (clip-path inset animation on the text-mask background); skippable via `prefers-reduced-motion` (static mask shown immediately).
- **Scroll story 1 (pinned elevation build):** From 640px up, a pinned triple-decker SVG elevation builds porches floor-by-floor as visitor scrolls through the three floor bands (posts → rail → balusters drawn in via DrawSVG). Under 640px: static elevation beside each band, no pin.
- **Scroll story 2 (baluster rule draw):** Each floor band's baluster top-border draws left-to-right via clip-path wipe on entry (verb: draw).
- **Hover language:** One language — hairline amber underline grows from left via `scaleX(0)→scaleX(1)` on links and buttons.
- **Reduced motion:** All content visible statically; elevation fully built; baluster rules fully drawn; no clip animations.

## Tools

1. **Porch safety checklist** (`checklist` module). Inputs: 6 yes/no toggles (rail moves, post bases soft, balusters missing/gaps >4in, treads soft/split, ledger stained, stairs pull away). Output: "Fine for now / Plan a repair this season / Keep people off until looked at" + priority booking CTA. Hand-off: pre-fills #contact with service="porch-railings" and note="Checklist result: [status]".
2. **Season planner** (`tabs` module repurposed). Input: job type select (porch rebuild / railing / back stairs / trim / deck). Output: best months for that job in Worcester (paint cure window, ground thaw, rental turnover) + current sample lead time. Hand-off: "Lock a month" button pre-fills #contact with service + preferred-season note.
3. **ZIP checker** (`zip` module). Standard: checks against {{biz.zips|csv}}; yes → offer form with ZIP prefilled; no → suggest nearest area.
4. **Multi-step quote form** (`form` module). Step 1: "I'm the owner / I'm a landlord" toggle + service select. Step 2: job details textarea. Step 3: when (season/month). Step 4: contact. Honeypot + time trap. Honest thank-you: "Thanks, {name}. In your version this goes straight to Nico's phone and inbox."

## Voice

Three sample sentences:
1. "Your triple-decker's back porches were built to last fifty years; we rebuild them to last fifty more."
2. "If the screwdriver goes in past a quarter inch, it's not paint's problem anymore — it's ours."
3. "We book porches in April for June starts; call in March and you pick your month."

Five words never used: premium, luxury, affordable, expert, guaranteed.