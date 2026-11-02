# Concept — fireplace-B (Draft Note)

## Three alternatives, rejected

1. **The inspection report PDF.** Hero is a literal PDF embed; sections are pages. Rejected: reads as a download, not a page; no rhythm; every competitor has a "download our sample report" button.
2. **The checklist app.** Interactive tick-box UI where visitors check off their own symptoms. Rejected: feels like a SaaS product demo; the value is the pro's note, not a self-diagnosis.
3. **The before/after flue gallery.** Side-by-side camera shots of dirty vs clean flues. Rejected: stock photos cannot honestly show "our work"; DEMO-RULES §5 bans before/after with unrelated stock; also the brief's #7 cliché.

## The thesis
The site *is* the visit note: every section is one numbered finding on the paper the homeowner receives, with its status chip, a photo slot and a plain sentence; scrolling turns the page, and the footer signs it off.

## The signature system: Numbered Findings
A CSS primitive `.finding` with:
- A mono finding number (`F-01`, `F-02`…) in JetBrains Mono.
- A status chip (`.chip--ok`, `.chip--watch`, `.chip--fix`) in the three signal colors.
- A thin rule under the header like a printed form line.
- An optional photo slot clipped as a circle (the camera scope shape).

It appears in:
1. **Hero** — Finding 00 · Your chimney · the note itself, with the first three findings previewed.
2. **Services** — each service is a finding ("Finding 04 · Sweep · OK when done yearly").
3. **Proof** — reviews are signed notes with a finding number referencing the service.
4. **Prices** — each price row is a finding with a status chip (sample range).
5. **Contact** — Finding 12 · All done · next sweep: October, with the form as the sign-off.
6. **Footer** — the note's bottom edge with the disclaimer as the printer's line.

Hook: `data-sw-signature="finding-note"`.

## Type
- Display + body: **Outfit** (geometric grotesk, variable wght 100–900). Clean, even-width letters that read like printed form text; unused as display in the registry for fireplace.
- Accent / numbers: **JetBrains Mono** (variable wght 100–800). Typewriter feel for finding numbers, measurements, status chips and labels. Already in catalog.
- Pair is unique: no site in the registry uses Outfit + JetBrains Mono.

## Palette: Pumice Paper + Ink + Tri-Signal
Light-led. Paper white with a pumice-gray warmth, true ink for text, and three muted signal colors for the finding statuses that pass WCAG on both paper and deep bands.

| Role | Hex | On | Ratio | Use |
|---|---|---|---|| paper | #F4F1EC | ink #1A1C1E | 15.2 | body bg |
| ink | #1A1C1E | paper #F4F1EC | 15.2 | body text, headings |
| deep | #1E2228 | paper-text #F4F1EC | 13.8 | deep band bg |
| ok | #3D6B5A | paper #F4F1EC | 5.1 | OK chip bg, status words on paper |
| watch | #8A6A28 | paper #F4F1EC | 5.0 | WATCH chip bg, status words on paper |
| fix | #9B3A2E | paper #F4F1EC | 5.6 | FIX chip bg, status words on paper |
| rule | #C8C2B6 | — | — | form lines, dividers |

All ratios verified ≥ 4.5:1 for body text. Accent colors never carry body text alone; they fill chips with white text (white on ok/watch/fix all ≥ 4.5:1).

## Hero family
**14 — Document object.** The hero is the visit note on paper, with a flue photo clipped to it and the first three findings readable; the phone number is the "questions?" line on the note. Unique in the fireplace niche (A uses 13, C uses 5).

## Motion score
- **Intro (≤ 1.2 s):** the note slides up from below (`translateY(40px)→0`, opacity 0→1, 700ms); status chips stamp on one by one (scale .9→1, 120ms each, stagger 80ms). Skippable; content readable before animation via `.sw-motion` gate.
- **Scroll story 1 (desktop ≥ 640px):** pinned camera-scope wipe. A circular clip-path moves top-to-bottom across the flue photo as you scroll through the sweep finding, simulating the rod descending. Height `calc(3 * 55svh + 100svh)`. Reverses on scroll-up. Under reduced motion: static photo with the scope circle drawn at center.
- **Scroll story 2:** the finding numbers count up (`data-count`) as each finding enters view; the status chip fades in after the number settles.
- **Entrance patterns:** text rises (opacity + translateY, 500ms, 85% viewport); images unclip (`clip-path: inset(0 0 100% 0) → inset(0)`). Quiet sections (FAQ, footer) do not animate.
- **Hover:** a hairline under finding headers grows `scaleX(0→1)` from left, 200ms, only on `(hover:hover)`.

## Tools
1. **Symptom checker** (`data-hook="symptom-checker"`): tap what is happening → plain-language meaning + which visit to book → prefills quote form.
2. **Sweep interval planner** (`data-hook="sweep-planner"`): appliance + frequency + cords → suggested timing on a season dot → "book before the fall rush" CTA.
3. **Firewood dry-check** (`data-hook="firewood-dry"`): split month + wood type + covered → ready/not ready + the 20% rule → sweep booking CTA.
4. **ZIP checker** (`data-zip`): checks `{{biz.zips|csv}}`; answers in aria-live; yes → form with ZIP prefilled.
5. **Multi-step quote form** (`form[data-lead]`): visit type → appliance → last sweep → how to reach you. Honest thank-you state.

## Voice
- "We write down what we saw, with photos, so you can decide what to do next."
- "If it's fine, we say fine. If it can wait, we say how long."
- "The note is yours to keep, whether you book with us or not."

Never uses: certified, guaranteed, best, top-rated, eco-friendly, free estimate.