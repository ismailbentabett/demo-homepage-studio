# Concept — mural-B (Wall Proof Mural Studio)

## Three alternatives, then rejected

1. **Gallery grid with price tags.** An Instagram-style masonry of finished murals, each with a sq-ft tag. Rejected: this is what every competitor does (brief §4), and it puts the art before the hiring path. The homeowner still doesn't know what *their* wall costs.
2. **Artist statement + process video.** A full-bleed spray-can video behind a long bio. Rejected: brief §4 bans the unreadable video hero; the artist statement delays the hire. DC homeowners want a number and a date, not a manifesto.
3. **Literal proof sheet replica.** A photorealistic PDF mockup with ink bleed and paper texture. Rejected: too skeuomorphic, slow to read on a phone, and the "proof" becomes a costume instead of a working tool.

## The thesis

The site is a printer's proof sheet: every section is one page in the job folder, with crop marks at its corners, a registration target and a color bar that holds that section's swatches; the homeowner reads the page like a client approving a print run, and every claim carries a number they can check before paint touches the wall.

## The signature system: Printer's Marks

Every section is framed by four L-shaped crop marks at its corners (1px, ink color). A small registration target (a crosshair inside a circle) sits at the top-right of each section. Along the left edge runs a vertical color bar: three or four swatch chips showing the palette roles used in that section, labelled in mono type. Each proof carries a proof number in the header ("Proof 01 · Size", "Proof 02 · Schedule") that matches the step number in the quote form. The footer is the "APPROVED" stamp line with the demo disclaimer beneath it. The signature appears in: hero, process story, services, finish check, prices, reviews, contact, footer. Hook: `data-sw-signature="proof-marks"`.

## Type

- Display: **Space Grotesk** — quirky grotesk with technical character, used for headlines and proof numbers. Variable weight 300–700.
- Text: **DM Sans** — clean geometric sans for body, leads and captions. Variable opsz 9–40, weight 100–1000.
- Accent/mono: **DM Mono** — low-contrast mono for every dimension, swatch code, sample price, date and proof number. This is the voice of measurement.

Pair rationale: Space Grotesk's technical quirks say "this is a working document," DM Sans keeps body text frictionless, and DM Mono makes every number look like it came from a spec sheet. None of these faces are used as display in any delivered mural site.

## Palette: Proof Paper + Registration Cyan + Ink

| Role | Hex | Name | Use |
|---|---|---|---|
| paper | #F4F1EC | Proof paper | Page background, light sections |
| ink | #1A1A1A | Press ink | Body text on paper, crop marks |
| cyan | #00838F | Registration cyan | Signal color: numbers, buttons, active states |
| blush | #DCCFC4 | Rowhouse brick blush | Mid-tone band backgrounds |
| deep | #1E252A | Night press | Deep band backgrounds |
| mute | #6B6560 | Pencil note | Secondary text on paper |
| rule | #C8C2BA | Trim line | Rules, dividers, crop marks on paper |

Contrast checks (run through `tools/contrast.mjs`):
- ink #1A1A1A on paper #F4F1EC → 15.4:1 (body ✓)
- cyan #00838F on paper #F4F1EC → 4.6:1 (large text / buttons ✓)
- paper #F4F1EC on deep #1E252A → 13.8:1 (reversed body ✓)
- cyan #00838F on deep #1E252A → 5.1:1 (accent on deep ✓)
- ink #1A1A1A on blush #DCCFC4 → 9.2:1 (body on mid ✓)

Palette family name: "Proof Paper + Registration Cyan". Unique in the library.

## Hero family: 7 — Tool-first

The wall-size estimator IS the hero. Width and height inputs in feet, an interior/exterior toggle and a detail-level selector sit beside the headline. The result block shows square feet, the sample price range from `{{proof.prices}}`, and rough days on site. With JS off it reads as a printed range table plus the phone number. The promise and call button sit beside the tool on desktop, stacked above on mobile.

## Motion score

- **Intro (≤ 1.2 s):** Crop marks draw in at the four corners of the hero tool panel, and the color bar fills swatch by swatch (three chips, 200ms stagger). The h1 is readable before the animation starts.
- **Scroll story 1 (desktop ≥ 640px):** A pinned rowhouse side-wall mockup goes through three proofs: sketch overlay → color proof → approved stamp. Side text lists what the client checks at each. Height: `calc(3 * 55svh + 100svh)`. On mobile: stacked cards with clip reveal, no pin.
- **Scroll story 2:** Not used. One story is enough; the rest of the page uses the two entrance patterns (text rise, image unclip) varied by role.
- **Entrance patterns:** Text rises (opacity 0→1, translateY 24→0, 500ms, 85% viewport). Images unclip (`clip-path: inset(0 0 100% 0)` → `inset(0)`). Quiet sections (guarantee, footer) do not animate.
- **Hover:** A hairline under nav links and buttons grows `scaleX(0→1)` from left, 200ms. One language.
- **Reduced motion:** Everything visible, no animations, the story is a static three-card stack.

## Tools

1. **Wall size price range** (hero): inputs width (ft), height (ft), interior/exterior, detail level (simple / illustrated / detailed). Output: square feet, sample range from `{{proof.prices.1}}` or `{{proof.prices.2}}`, rough days. Ends with "Send me this range" → `#contact` with size prefilled via `data-service`.
2. **Outdoor finish check**: inputs wall material (stucco / brick / block / wood / metal) and sun side (N/S/E/W). Output: prep and coating plan in plain words (primer, paint, UV clear coat, sacrificial anti-graffiti coat). Ends with "Call to confirm" → `tel:`.
3. **Style picker**: six style cards (botanical, geometric, landscape, lettering, trompe l'oeil, kids' storybook). Picking one pre-selects the style step in the quote form.
4. **ZIP checker**: `[data-zip]` against `{{biz.zips}}`. Yes → form with ZIP prefilled. No → honest message.
5. **Multi-step quote form**: service → job details (size, material, style) → when → contact. Four steps, per-step validation, honeypot, honest thank-you.

## Voice

Three sentences in the site's voice:
1. "Measure your wall, pick a detail level, and see a square-foot range before you commit to anything."
2. "We send a to-scale proof on a photo of your wall, a color strip and a dated schedule; you approve each before paint opens."
3. "If the finished wall doesn't match the proof, we repaint the difference."

Five words never used: guaranteed, award-winning, best, eco-friendly, free estimate.