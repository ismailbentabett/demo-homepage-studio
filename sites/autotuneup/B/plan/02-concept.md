# Concept — autotuneup-B

## Three obvious concepts, rejected

1. **Dashboard gauges everywhere.** Circular speedometer-style widgets for each service. Rejected: a template cliché; every auto site does gauges; reads as decoration, not information.
2. **Checklist clipboard.** Paper-texture background with checkbox icons per service. Rejected: literal interpretation of “maintenance list”; indistinguishable from handyman or cleaning sites; no numeric honesty.
3. **Garage calendar wall.** Monthly grid with service stickers. Rejected: competitor trope; implies seasonality over mileage; doesn’t answer “what’s due *now*”.

## Thesis

The page is the odometer: each section is a mileage row that rolls to its interval, and the signature is the digit roll that distinguishes “due now” from “not yet”.

## Signature system — Service-Interval Odometer Rows

A horizontal row of six tabular digits (e.g. `030,000`) in condensed display type, followed by a status pill (`DUE` / `NOT YET` / `WATCH`) and the service name. The row appears in four sections with variation:
- **Hero:** interactive input; digits roll from `000,000` to the entered mileage on submit; three result rows slide in beneath.
- **Services:** each service card opens with its interval row rolling to the target mileage; “not yet” rows stay muted grey.
- **Proof:** review cards carry a small odometer pill showing the reviewer’s mileage at visit (“at 98,000 mi”).
- **Footer:** a final row reads `NEXT · TEXT REMINDER` with the shop’s phone as the “digit” value.

CSS primitive: `.odo-row` with tabular-nums, mono-spaced digit slots, and a clip-path wipe driven by `--sw-p` on scroll. Hook: `data-sw-signature="odo-row"`.

## Type

- **Display:** Barlow Condensed (condensed grotesk, highway-sign clarity for odometer digits and headlines). Used ≤ 3× in registry, never in autotuneup niche.
- **Text:** Karla (friendly grotesk, high x-height for body readability at small sizes).
- **Accent:** DM Mono (tabular numerals for readings, prices, and the odometer digits themselves).
Pair suits thesis: condensed display = dashboard readout; Karla = plain spoken explanation; DM Mono = instrument precision.

## Palette — Desert Dash + Cool Blue + Signal Orange

| Role | Hex | Name |
|------|-----|------|
| Ink | `#1a1d21` | Charcoal dash |
| Paper | `#f4f1eb` | Warm sand |
| Mid | `#e6e2d8` | Dust |
| Accent | `#0f5f7f` | Cool blue (due-now) |
| Signal | `#b53d0f` | Burnt orange (watch/CTA) |
| Deep | `#1a1d21` | Same as ink (dark band) |

Contrast table (verified):
- Ink on paper: 15.00:1 ✓ body + large
- Ink on mid: 13.07:1 ✓ body + large
- Accent on paper: 6.28:1 ✓ body + large
- Accent on white: 7.08:1 ✓ body + large
- Signal on paper: 5.11:1 ✓ body (AA) — used for CTA buttons and large pills only
- Signal on white: 5.77:1 ✓ body
- Paper on ink: 15.00:1 ✓ reverse text
- Paper on accent: 6.28:1 ✓ reverse large text
- Signal on ink: 2.93:1 ✗ FAIL — never used for text on dark backgrounds; signal appears only on paper/white/mid

Tone: light-led.

## Hero family

Family 7 — Tool-first. The hero IS the mileage input with rolling odometer digits and three result rows. Photo is secondary: a blurred dash cluster (`hero-B1`) cropped to avoid readable numbers or logos. Unique in niche (A=4, C=12). ≤ 3 uses in library.

## Motion score

- **Intro (≤ 1.2 s):** Odometer digits roll from `000,000` to sample `045,000`; three result rows slide up in stagger. Skippable via reduced-motion class.
- **Scroll story 1 (wipe):** Each service section’s odometer row wipes in left-to-right via clip-path as it enters viewport.
- **Scroll story 2 (count):** Proof section’s review-mileage pills count up to their value on entry.
- **Hover:** Hairline underline grows from left via `scaleX(0→1)` on links and buttons.
- **Reduced motion:** All digits static at final values; all rows fully visible; no animation blocks reading.

## Tools

1. **What’s due at my mileage** (`estimator`). Input: mileage number. Output: three rows (due now, coming soon, not due). Hand-off: prefills quote-form service checkboxes.
2. **Tread and wiper check** (`checklist`). Visual tread gauge at 10/32, 4/32, 2/32 + wiper blade states. Hand-off: if user selects worn, prechecks tire/wiper services in form.
3. **Next service reminder** (`form` capture). Input: mileage or months. Output: sample text message preview. Hand-off: captures phone in quote form.
4. **ZIP checker** (`zip`). Input: ZIP. Output: “easy drive” or “book a drop-off”. Hand-off: sets visit-type radio in form.
5. **Quote form** (`form`). Steps: mileage → due items (prefilled) → wait or drop → preferred time → contact.

## Voice

Three sample sentences:
- “Type your mileage. We’ll tell you what’s due and what can wait.”
- “Brake fluid tested first. If it’s fine, we write the next check date and stop.”
- “Your owner’s manual wins. Our intervals are samples; your car’s spec is the rule.”

Five words never used: premium, unleash, transform, guaranteed (noun), special.