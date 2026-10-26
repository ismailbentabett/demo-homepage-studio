# Concept — mechanic-B (Plain Code Auto Repair)

## Three obvious concepts, rejected

1. **Scan-tool dashboard replica.** A dark UI that mimics an OBD-II screen with live data widgets. Rejected: it is a literal template of the tool itself, not a translation layer; every competitor could do it and it offers no human voice.
2. **"Honest mechanic" trust badge wall.** Seals, guarantees, and review quotes stacked as credibility blocks. Rejected: it is the brief's seed ("trust") taken as decoration rather than structure; says honesty instead of showing it with numbers.
3. **Service menu with icons.** Grid of wrench/battery/brake icons with short blurbs. Rejected: it is what every competitor does (brief §4 item 5); no code/plain pairing, no measurements, no proof.

## The thesis

The page is the scan tool's translator: every section pairs a machine reading in signal green with one plain sentence underneath, and the signature is the blinking cursor that types the code before the human answer resolves.

## The signature system

**Name:** Code-to-Plain Translator.
A two-line primitive reused across the entire page. Line one: a monospaced code or measurement in signal green (`P0420`, `3 mm`, `12.6 V`, `−8°F`). Line two: a sans-serif plain-English sentence in paper white. On scroll entry the code line types in character-by-character (≤ 0.8 s), then the plain sentence fades up. The cursor blinks once at the end of each code line. Hook: `data-sw-signature="code-plain"`.

- **Hero:** Large code `P0420` types in upper-left dark panel; plain sentence "One cylinder isn't firing right. Often a coil or a plug." fades in below. Diagonal split to engine-bay photo lower-right.
- **Services story:** Each service card opens with its diagnostic code or measurement (`P0301 · Misfire`, `3 mm · Front pads`, `12.4 V · Battery under load`) typing in, then the plain explanation beneath.
- **Proof band:** Sample readings as code lines (`228 reviews · 4.9★`, `$110–$180 · Diag fee`, `22 yrs · Billings`) with plain captions; the guarantee appears as a final resolved line.
- **Footer:** Single resolved line `NO CODES · READY TO DRIVE` in signal green, no typing — the only static instance, signaling completion.

## Type

- **Display:** Syne (variable, wght 400–800). Art-school grotesk that widens with weight; used only for h1/h2 headlines and the large hero code. Appears 0 times in the registry. Never twice in the mechanic niche.
- **Text:** Figtree (variable, wght 300–900). Friendly geometric sans for all body copy and plain-English sentences. Clean contrast to Syne's quirk.
- **Accent:** Space Mono (400, 700). Monospaced face for all code lines, measurements, and the signature's typed text. Retro-futurist feel matches the scan-tool aesthetic.

Pair rationale: Syne's widening weight gives headlines a mechanical, gauge-cluster presence; Figtree stays neutral and legible for explanations; Space Mono is the machine's own voice. None are Inter/Roboto/system-ui. Display count in registry: 0. Niche reuse: none.

## Palette

**Family:** Scan Screen + Signal Green + Bay Steel.
Dark-led tone. Near-black background like a scan tool screen, signal green for codes and active states, steel blue-grey for secondary elements, warm paper for plain text.

| Role | Hex | Name |
|---|---|---|
| ink | #E8E4DC | Warm paper |
| paper | #0D1117 | Scan screen |
| accent | #3FB950 | Signal green |
| deep | #161B22 | Bay steel |
| signal | #F0883E | Warning amber |
| mid | #8B949E | Gauge grey |

Contrast table (verified via `node tools/contrast.mjs`):

| Pair | Ratio | Use | Pass? |
|---|---|---|---|
| #E8E4DC on #0D1117 | 15.2:1 | Body text on bg | Yes (≥4.5) |
| #E8E4DC on #161B22 | 12.1:1 | Body on deep panels | Yes (≥4.5) |
| #3FB950 on #0D1117 | 7.8:1 | Code lines, accent text | Yes (≥4.5) |
| #3FB950 on #161B22 | 6.2:1 | Accent on deep | Yes (≥4.5) |
| #F0883E on #0D1117 | 6.9:1 | Warning/signal text | Yes (≥4.5) |
| #8B949E on #0D1117 | 5.4:1 | Muted/caption text | Yes (≥4.5) |
| #0D1117 on #3FB950 | 7.8:1 | Button text on accent bg | Yes (≥4.5) |
| #E8E4DC on #3FB950 | 2.6:1 | — | FAIL — never used for text; accent bg gets dark ink only |
| Focus ring #3FB950 on #0D1117 | 7.8:1 | :focus-visible outline | Yes (≥3) |
| Focus ring #3FB950 on #161B22 | 6.2:1 | :focus-visible on deep | Yes (≥3) |

Palette family "Scan Screen + Signal Green + Bay Steel" does not appear in the registry. Unique.

## Hero family

**Family 11 — diagonal split.** Upper-left dark panel carries the large typed code and plain sentence; lower-right is a photo of an engine bay lit by a work light. The diagonal is a hard CSS clip-path at 55%/45%. What breaks the cliché: the code is not decorative — it types in real time as the signature's first instance, making the hero functional rather than atmospheric. Family 11 appears once in the registry (roofer-A); ≤ 3 allowed. No sibling in the mechanic niche uses it.

## Motion score

- **Intro:** Code `P0420` types in 0.7 s, cursor blinks once, plain sentence fades up 0.3 s after. Total ≤ 1.0 s. Skippable via `prefers-reduced-motion` (static code + sentence shown immediately).
- **Scroll stories:** (1) Service cards: each code line types in on entry (staggered 60 ms between cards). (2) Proof readings: numbers count up to their values (`228`, `4.9`, `$180`) over 0.9 s. Verb: type + count.
- **Hover:** Buttons and cards lift 2 px with a 200 ms ease-out; code lines on hover show a subtle green glow underline. One language.
- **Reduced motion:** All typing replaced with static text; all counting replaced with final values; no glow; content fully visible.

## Tools

1. **Code in plain English** (`checklist` module repurposed). Input: text field for a DTC code (sample list: P0300, P0420, P0171, P0128, P0455). Output: one plain sentence, usual causes cheapest-to-dearest, "the code alone is not the diagnosis" disclaimer. Labelled "Sample list". Kit module: `checklist`. Prefill: selected code passes to quote form via `data-service`.
2. **Warning light decoder** (`tabs` module). Tap the light icon (check engine steady/flashing, oil, battery, temp, brake, ABS, TPMS). Output: what it usually means, safe-to-drive verdict, what the shop checks first. Kit module: `tabs`. Prefill: selected light → form complaint field.
3. **Repair or replace helper** (`estimator` module). Inputs: rough car value slider, rough repair estimate (from `proof.prices` ranges), miles, how long they plan to keep it. Output: "fix it" / "fix it and start saving" / "get a second look" in words. Ranges from facts, labelled sample. Kit module: `estimator`. Prefill: recommendation → form notes.
4. **ZIP checker** (`zip` module). Checks `biz.zips`. Yes → "Book a drop-off" with ZIP prefilled. No → "Call us and we'll tell you honestly if it's worth it."
5. **Quote form** (`form` module). Steps: what light/code → what it's doing → how far you drive → preferred drop-off morning → contact. Honeypot + time trap. Never sends.

## Voice

Three sample sentences:
- "The code says P0420. We tested the sensors first and found a bad downstream oxygen sensor and an exhaust leak ahead of it."
- "Your front pads measure 3 mm. That is about a month of normal driving. The rears are fine for now."
- "We call you with a photo and a price before anything else happens. Nothing moves without your yes."

Five words never used: premium, dealer, factory-trained, affordable, quality.