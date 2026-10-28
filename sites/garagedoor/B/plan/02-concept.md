# garagedoor-B · Concept

## 1. Rejected (obvious)
- **"Your neighbor's door guy."** Smiling owner photo, family-trust copy, blue/red badge row. Rejected: every competitor (brief §4), and facts say familyOwned=false; no owner face allowed.
- **"Spec sheet, literally."** A PDF-looking white spec sheet with a table of services. Rejected: the brief seed taken literally; a template table, no object, no wow.
- **"Tool-first hero (family 7)."** The brief's hero family. Rejected by the gate, not by taste: family 7 is at its library max (6). We keep the tool in the hero but inside a family-2 split (below).

## 2. Thesis
The page is the door's riveted nameplate read aloud: every section **stamps** a reading onto a zinc plate, and the hero asks what broke and stamps the answer before it ever pitches.

## 3. Signature system: Riveted Data Plate (`data-sw-signature="plate"`)
One primitive: zinc plate (brushed linear-gradient, 1px #6B757C border, 4 rivet dots), mono rows `LABEL ··········· VALUE`, a serial `CC-0N`, an optional fill-in field (dotted underline + "measured at your door") and an optional cycle meter (tick scale + needle at `--sw-p`).
- **Hero:** big plate crosses the 50/50 seam; its rows are blank fill-in lines until the finder is tapped, then stamp: LIKELY PART · URGENCY · SAMPLE RANGE · SAFE TO LIFT? (yes/STOP in yellow band).
- **Story (wow):** a 1:1 torsion spring drawn edge to edge; its plate counts CYCLES 0 → 10,000 ("typical standard rating") as you scroll, the needle hits red, a gap opens in the coil, 120ms shake, a drawn bang line, plate stamps "BROKEN · CALL · don't lift it".
- **Services:** each of the 11 services is a small plate: short name as the label, blurb, one stamped value (price from facts where one exists, else "MEASURED ON SITE" fill-in).
- **Parts sheet:** the 6 facts.prices as a long ledger plate, rows riveted; "Sample" stamp on the plate corner.
- **Proof:** each review = a reading plate: SERVICE · TOWN · ★ value, quote text below the rivets; aggregate 4.8 / 168 on a plate with a meter.
- **Footer:** the company nameplate: name, LIC {{biz.license}}, insured, hours, phone, serial "EST. 14 YRS" (facts.years), as on a door's maker plate.

## 4. Type
Display **Libre Franklin** 800/900 (Franklin Gothic = the face of American nameplates, gauges and hardware tags; heavy, slightly condensed, never decorative) · Text **Public Sans** 400/600 (civic, plain, built for forms) · Accent **Martian Mono** (wdth 87.5, wght 500; stamped readouts, prices, serials). Registry: Libre Franklin 0× display, pair unique.

## 5. Palette: Galvanized Zinc + Plate Black + Hazard Yellow + Stamp Blue
ink #15181B · paper #F4F5F2 · mid (zinc) #D9DDDF · accent (stamp blue) #1F4E79 · deep (gunmetal) #22282D · signal (hazard yellow) #F2C200 · muted #4F5A62 · muted-on-deep #B9C2C8 · rule-strong #6B757C · rule-hair #A9B1B6.
| pair | ratio | use |
|---|---|---|
| ink/paper | 16.28 | body |
| muted/paper | 6.45 | secondary text |
| accent/paper | 7.91 | links, mono readouts, focus ring |
| ink/zinc | 13.03 | text on plates |
| muted/zinc | 5.16 | plate labels |
| accent/zinc | 6.33 | plate values |
| ink/yellow | 10.60 | primary button text, STOP band |
| deep/yellow | 8.86 | alt |
| paper/deep | 13.61 | text on deep |
| #B9C2C8/deep | 8.23 | muted on deep |
| yellow/deep | 8.86 | accent words + focus on deep |
| paper/accent | 7.91 | blue band text |
| yellow/accent | 5.15 | focus on blue band |
| accent/white | 8.66 | inputs |
| #6B757C/paper | 4.30 | input borders, plate border (non-text ≥3 OK; NOT for body text) |
| #A9B1B6/paper | 1.98 | FAILS: hairline rules / leaders only, never text |
Button note: primary is **ink on yellow (10.60)**, not white on yellow (white fails). Secondary is ink outline on paper.

## 6. Hero family 2: 50/50 split
Left: kicker, h1, the symptom finder (2 chip groups), CTAs, proof line. Right: zinc panel with a line drawing of the torsion assembly above a door (SVG, shaft + 2 springs + drums + cables) instead of a photo. Cliché broken: the seam isn't a clean SaaS split, the big data plate is riveted across it (−8% overlap into the left column at ≥ 1100px), and the "photo" half is a technical drawing whose parts light up yellow when the finder names them. JS off: finder is a `<dl>` of symptom → likely part → range, plus Call.

## 7. Motion
- **Intro:** plate digits roll in (odometer, 600ms, 40ms stagger), meter needle sweeps 0; skippable (any scroll/tap ends it), never hides text.
- **Story (count):** pinned ≥ 900px, `calc(4*55svh + 100svh)`; cycles count 0 → 10,000 with `--sw-p`, coil spacing widens, at p=.92 gap + shake + bang line. < 640px: no pin, 4 stacked plates with clip reveal.
- **Hover:** plates lift 2px, rivet highlight shifts (inset box-shadow), 200ms ease-out.
- **Reduced motion:** final states: spring drawn with its gap, plate reading 10,000 / BROKEN, all values printed.

## 8. Tools
- **Symptom finder (hero)** · in: sound (bang / grinding / clicking / silence), door does (won't move / goes up then back / goes up crooked / moves a few inches) · out: likely part, urgency, sample range from facts.prices, safe-to-lift line; STOP panel for spring/cable/crooked → Call · kit `estimator` (radio groups) + app.js mapping · hand-off "Send this to us" → form `service`, `notes`.
- **Repair or replace** · in: door age, sections rusted/damaged (0-4), insulation (none/some), planned repair spend · out: plain recommendation + repair items range vs "New 16x7 insulated door $1,900–$4,200" side by side · `estimator` · "Get both numbers in writing" → `service`, `notes`.
- **R-value compare** · in: current door (uninsulated / polystyrene / not sure), room above (y/n) · out: relative bars (no invented R numbers: "the R-value is printed on your quote"), comfort + noise lines, Sam D. review · `compare` · "Ask for door options" → `service`.
- **ZIP checker** · `zip` · in-area → "Book in {{zip}}" prefills `zip`.
- **Quote form** · `form`, 5 steps: what's wrong · car stuck inside? · door size + photo · timing · contact.

## 9. Voice
- "Tell us the sound and what the door does. We'll tell you the part, the range, and whether it's safe to touch."
- "We measure the old spring before we quote the new one: wire, length, inside diameter."
- "If the spring has a gap in it, don't lift the door. Call. That's the whole instruction."
Never: "premier", "top-notch", "your trusted", "hassle-free", "state-of-the-art".
