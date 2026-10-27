---
name: a11y-craft
description: Accessibility rules with exact values for the demo homepages - contrast ratios, focus styles, tap targets, landmarks and headings, forms and live regions, motion, images and video, and what check-static/check-render flag. Use when writing the design system tokens, the HTML structure, the form and tools, or fixing an accessibility mustFix.
---

# Accessibility craft

An a11y failure is a mustFix and caps its category. Most are cheap if built in from the start.

## Contrast (measure with `node tools/contrast.mjs <fg> <bg>` if it exists, else compute)
- Body text and small labels: ≥ 4.5:1. Large text (≥ 24px, or ≥ 18.66px bold): ≥ 3:1.
- Buttons: label on fill ≥ 4.5:1; the button edge against its band ≥ 3:1 (or a 1px border that is).
- Focus ring ≥ 3:1 against both the element and the band.
- Text over photos: measure over the **brightest** area under the text; use a scrim (see LEARNINGS)
  or a solid plate. Text over video: the brightest frame.
- Muted text on tinted bands: check each tone class (`t-paper`, `t-deep`, `t-color`…) separately.
- Placeholder text is not a label and still needs 4.5:1 if shown.

## Focus and keyboard
```css
:focus-visible{outline:2px solid var(--focus);outline-offset:3px;border-radius:inherit}
```
- Never `outline:none` without a replacement. Skip link first in the body, visible on focus.
- Everything interactive reachable by Tab in reading order. Tools (sliders, tabs, hotspots) use the
  kit modules: they already handle keys (arrows, Home/End, Esc).
- The menu traps focus while open and returns it to the button on close.

## Targets
- ≥ 44×44 CSS px for every tap target on phones (buttons, nav links, chips, slider thumbs, close buttons).
  Inline text links are exempt but need 8px between them. The mobile bar buttons are ≥ 48px tall.

## Structure
- Landmarks: `header`, `nav aria-label="Main"`, `main#main`, `footer`; extra navs labelled.
- One h1; h2 per section; no skipped levels. Sections that are landmarks get `aria-labelledby` their h2.
- `lang` set by the build. Phone links `tel:` with the visible number.
- Lists are `<ul>/<ol>`; the hours are a `<dl>` or a table with headers.

## Forms (kit `form`)
- Every input has a visible `<label>`. Required marked in text ("required"), not only by color or `*`.
- Errors: text next to the field, `aria-invalid="true"`, `aria-describedby` to the message, focus moves
  to the first invalid field. Step changes announce "Step 2 of 4" in a live region.
- Autocomplete tokens: `name`, `tel`, `email`, `postal-code`, `street-address`.
- The ZIP checker and estimator answer in `aria-live="polite"`.

## Images, icons, video
- Content photos: the manifest alt (what the frame shows). Decorative textures: `alt=""`.
- Icons from the sprite are `aria-hidden`; an icon-only button gets `aria-label`.
- Video: muted, no autoplay under reduced motion, a visible pause button (`[data-vid-btn]`), poster set.
  No sound, no captions needed only because it has no speech.
- No text baked into images.

## Motion and content
- `prefers-reduced-motion`: everything visible, no pins/parallax/autoplay; see motion-craft.
- Rotating words: `aria-hidden` slot + a static sr-only sentence. Marquees pause on hover/focus.
- Popups: never on load, Esc closes, focus trapped and returned.
- Nothing essential only on hover. Nothing that flashes more than 3 times a second.

## Mobile
- No horizontal scroll at 320 (check-render measures `scrollWidth`). Text ≥ 16px in inputs (stops iOS zoom).
- The sticky mobile bar must not cover focused fields or the form's buttons (kit hides it near `#contact`).

## What the checks catch vs. what you must look at
Checks: contrast of declared token pairs, missing alts, labels, heading order, tap target size,
overflow, hidden-in-reduced-motion text. You: text over photos, focus visibility on each band, reading
order of a complex grid, whether the 390 shot is usable with a thumb.
