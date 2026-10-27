# Concept — plumber-B (Ledgerline Plumbing)

## Three obvious concepts, rejected

1. **The pipe diagram hero.** A schematic of a house's plumbing with hotspots you click to learn about each pipe. Obvious because every plumbing template uses a house diagram; it reads as an educational poster, not a contractor who measures and writes things down. Rejected.
2. **The water-drop blue palette with wrench icon.** Standard plumber branding: light blue background, dark blue text, orange accent, wrench-and-pipe logo mark. Every competitor in Pittsburgh does this. The brief §4 explicitly bans it. Rejected.
3. **The inspection checklist as a literal clipboard graphic.** A skeuomorphic clipboard with checkboxes that tick as you scroll. Takes the "written down" seed too literally into decoration; the clipboard is a prop, not a system that organises information. Rejected.

## The thesis

The page is the field ledger: every section is a ruled entry row carrying a measurement, a status stamp and the next action, and the signature is the steel-blue rule that draws itself across each row as the reading is logged.

## The signature system: Ledger Rule + Status Stamp

A horizontal steel-blue rule (`--rule-ledger`) underlines every section like a line on a graph-paper field book. Each entry row carries: an entry number in mono (No. 01, No. 02…), a measurement or reading in the body voice, a status stamp pill (OK · WATCH · FIX) in the signal colour when FIX, muted ink when OK, and the action verb. The rule animates on scroll via `--sw-p` (clip-path wipe left-to-right). Appears in:

- **Hero:** three sample ledger entries type in on the left half while the camera still pushes forward on the right; the rule draws under each.
- **Services:** each service is a ledger row with its sample price range as the reading and a status derived from the homeowner's situation.
- **Reviews:** each review is an entry quoting the written log ("ledger sheet listed every joint"), with the star rating as the status stamp.
- **Footer:** a final summary row ("Total inspected: Sample feet") closes the ledger; the rule extends to the edge.

CSS primitive: `.ledger-rule` is a 1.5px steel-blue line with end ticks; `.ledger-entry` is the grid row; `.status-stamp` is the pill. All driven by one `data-sw-signature` hook.

## Type

- **Display:** IBM Plex Mono (mono class, variable wght). Used for entry numbers, status stamps, measurements, and the h1 kicker. Chosen because the thesis is a field ledger and mono *is* the handwriting of measurement; no other site in the registry uses a mono display face.
- **Text:** Outfit (grotesk, variable wght). Clean, slightly wide, high x-height for readability at small sizes against the dark tone. Pairs with IBM Plex Mono as the human-readable counterpart to the machine-readable numerals.
- **Accent:** null (no third family; mono carries all accent roles).

Registry check: IBM Plex Mono appears 0 times in the delivered/reserved registry. Outfit appears 0 times. Pair is unique. Neither is Inter/Roboto/system-ui.

## Palette

Family name: **Iron + Steel Blue + Copper Signal**

| Role | Hex | Use |
|---|---|---|
| ink | #E8E6E1 | body text on deep, headings on deep |
| paper | #F4F2ED | light-tone sections, card backgrounds |
| deep | #1A1D21 | primary dark tone, hero left, footer |
| accent | #4A6670 | steel-blue rules, ledger lines, focus ring |
| signal | #C4693D | copper-orange for FIX status, primary button bg |
| mid | #2E3338 | secondary dark band, tool backgrounds |

Tone: dark-led.

Contrast table (to be verified with contrast.mjs):

| FG | BG | Ratio | Pass |
|---|---|---|---|
| #E8E6E1 | #1A1D21 | ≥ 12:1 | body ✓ |
| #E8E6E1 | #2E3338 | ≥ 9:1 | body ✓ |
| #E8E6E1 | #4A6670 | ≥ 4.5:1 | large text on accent ✓ |
| #1A1D21 | #F4F2ED | ≥ 14:1 | body on paper ✓ |
| #C4693D | #1A1D21 | ≥ 4.5:1 | signal words on deep ✓ |
| #FFFFFF | #C4693D | ≥ 4.5:1 | button text ✓ |
| #4A6670 | #F4F2ED | ≥ 3:1 | focus ring on paper ✓ |
| #4A6670 | #1A1D21 | ≥ 3:1 | focus ring on deep ✓ |

Pairs that fail 4.5:1 are used only for rules and shapes, never for words.

## Hero family

Family 2 (50/50 split). Left half: headline + three sample ledger entries typing in. Right half: sewer camera still of a clay joint with root, overlaid with footage counter in mono. Unique in the plumber niche (no sibling uses family 2). Registry shows family 2 used twice (roofer-A, general-B); this is the third use, within the ≤ 3 limit. What breaks the cliché: the seam between halves is crossed by the ledger rule extending from the left text into the photo overlay, and the footage counter ticks in sync with the entry typing.

## Motion score

- **Intro (≤ 1.2 s):** Three ledger rows type in sequentially on the left (300ms each, stagger 200ms), rule draws under each; right-side camera still slowly pushes forward with foot counter ticking. Skippable via `prefers-reduced-motion`; text is in DOM before animation starts.
- **Scroll story 1 (verb: draw):** The ledger rule wipes left-to-right across each section as it enters the viewport, driven by `--sw-p`. One continuous motion tied to scroll position.
- **Scroll story 2 (verb: count):** A vertical foot-counter in the margin climbs as you scroll through the camera/lateral story, stopping at named findings (joint, root, belly). Reverses on scroll-up.
- **Hover language:** A hairline underline grows from left via `scaleX(0→1)` on links and buttons, 200ms, `transform-origin: left`. One language, inside `@media (hover:hover)`.
- **Reduced motion:** All entries visible statically; rules fully drawn; counters show final value; no animation runs.

## Tools

1. **Pipe material identifier** — inputs: magnet test result (sticks / doesn't), scratch test (shiny silver / penny / gray / white). Output: material name + what it means + next step. Kit module: `checklist`. Prefill: passes material guess to quote form.
2. **Pressure check** — inputs: gauge reading typed by visitor (psi). Output: below 40 / 40–80 normal / above 80 needs regulator. Kit module: `estimator`. Prefill: passes pressure reading to form.
3. **Sewer lateral era check** — inputs: house build decade, trees near line, past backups (yes/no). Output: likely pipe material + whether camera inspection makes sense. Kit module: `compare`. Prefill: passes era + recommendation to form.
4. **ZIP checker** — confirms service area. Kit module: `zip`.
5. **Quote form** — multi-step (problem → optional photo → time → contact). Kit module: `form`.

## Voice

Three sample sentences:
1. "We read the pressure at the hose bib, write it down, and tell you what it means before we open a wall."
2. "The camera showed roots at 47 feet; the repair was at 47 feet, not the whole yard."
3. "Your galvanized risers are 60 years old and the upstairs shower is a trickle; repiping two floors takes three days and the plaster gets patched."

Five words never used: emergency, guarantee, same-day, bonded, affordable.