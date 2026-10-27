---
name: conversion
description: Conversion design for contractor demo homepages - the first-screen contract, call vs quote paths, CTA placement and count, the 4-step lead form, the ZIP checker, the mobile bar, trust placement and the honest demo states. Use when planning the blueprint's paths, writing the hero, form and mobile bar, or fixing a conversion score under 9.
---

# Conversion

A homeowner with a problem decides in 5 seconds whether to call, and in 30 whether to fill the form.
Every section either removes a fear or offers one of the two paths.

## The first screen (390×844 and 1440×900)
Visible without scrolling, at both sizes:
1. What + where (h1 with trade and town).
2. Why them (lead answering the first fear).
3. **Two paths:** primary = call (`[[call btn-primary]]`), secondary = quote (`[[quote … btn-ghost | Price my …]]`
   to `#contact`). On phones the primary call button is full width or the first of two equal buttons.
4. Proof line: hours / open now · area · Sample rating.
The next band peeks in (hero `calc(100svh - var(--header-h))`).

## Paths and CTAs
- Exactly one `#contact`. Every CTA goes to `#contact` or `tel:`. No dead `#` links, no "learn more".
- A CTA after every 2-3 sections, worded for that section ("Price this repair", "Check my ZIP").
  Service cards use `[[quote {{.short}} btn-ghost]]` so the form opens with the service selected (kit `prefill`).
- The header keeps the phone visible ≥ 900px (`[[tel]]`) plus one quote button.
- The mobile bar (`[data-mobilebar]`, < 900px): Call + Quote, ≥ 48px tall, safe-area padding
  (`padding-bottom: max(.75rem, env(safe-area-inset-bottom))`); the kit hides it near the form.
- Emergency trades: a "Same-day? Call now" line near the top if `biz.emergency`.

## The form (kit `form[data-lead]`, 4 steps)
1. **Service** (cards or chips, preselected by `data-service`), 2. **The job** (2-3 short questions from
   the brief: roof type, age, where the leak is), 3. **When** (this week / this month / just pricing),
4. **Contact** (name, phone, email optional, ZIP, preferred contact time).
- Progress "Step 2 of 4", back button, per-step validation, `website2` honeypot, time trap.
- Beside it: what happens next in 3 plain steps ("We call within 2 business hours…" only if the facts
  say so; otherwise "We call you back to ask two questions, then book a visit").
- Thank-you state is honest: "This is a demo, nothing was sent. On the real site this goes straight to
  {{biz.short}}." Never fake a success that implies a lead was sent.

## Tools that convert (pick 2+ from brief §5, plus the ZIP checker)
- ZIP checker (`[data-zip]`): yes → "We work in {{town}}. Want a number?" + opens the form with the ZIP
  prefilled; no → the nearest area + call; invalid → how to type it.
- Estimator (`[data-estimator]`): ranges from `proof.prices` only, labelled sample, ends in "Get my exact number".
- Self-check list (`[data-checklist]`): "3 of 6 signs → worth a look this month" → CTA.
- Every tool ends in a CTA with its result carried over.

## Trust placement
- Next to the first CTA: rating (Sample), hours, area.
- Next to the form: guarantee in one sentence, licence line (`{{proof.license}}`), insured if true.
- Reviews: 3-5 visible, with town + service, Sample tag; one quoted large near the price section.
- Never a wall of badges. Never a fake "As seen on".

## Open now
`[data-open-now]` near the call button: "Open now · until 6 pm" / "Closed · opens Mon 7 am".
It makes the call feel safe to make.

## What costs points
CTAs that say nothing, the phone hidden on phones, a form that is 9 fields on one screen, a tool with
no next step, a mobile bar that covers the form, more than 2 button styles, a popup on load.
