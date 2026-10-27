# Media Plan — painter-C (Haint & Harbor)

## Hero
- **Key:** hero-C1
- **Section:** #1 hero
- **Crop:** `object-position: 50% 40%` (centered on facade row, horizon at 40%)
- **Treatment:** grade only (saturate .8, contrast 1.05, sepia .12, hue-rotate -2deg); no overlay. Filmstrip drifts left; pauses on hover.
- **Caption:** Pastel historic house facades along a Charleston street with shutters and porch ceilings visible.

## Slots

### story-color
- **Key:** process-scrape
- **Section:** #2 story-color (inside facade #1 shape)
- **Crop:** `object-position: 30% 60%` (close on wood grain and scraper hand)
- **Treatment:** grade only; clipped inside facade SVG via CSS clip-path.
- **Caption:** Scraper lifting old peeling paint from wooden clapboard.

### story-prep-1
- **Key:** process-prime
- **Section:** #3 story-prep (left of split)
- **Crop:** `object-position: 50% 50%`
- **Treatment:** grade only.
- **Caption:** White primer brushed onto bare wood trim.

### story-prep-2
- **Key:** detail-trim
- **Section:** #3 story-prep (right of split)
- **Crop:** `object-position: 40% 30%`
- **Treatment:** grade only.
- **Caption:** Freshly painted window trim with crisp cut line.

### break
- **Key:** weather-humid
- **Section:** #4 break (full-bleed)
- **Crop:** `object-position: 50% 70%` (low angle, dew on railing prominent)
- **Treatment:** grade only; full-bleed, no frame.
- **Caption:** Morning dew on a painted iron railing in humid coastal air.

### story-haint
- **Key:** region-porch-ceiling
- **Section:** #5 story-haint (fills piazza area of facade #3)
- **Crop:** `object-position: 50% 20%` (ceiling boards centered, fan/lantern visible)
- **Treatment:** grade only; clipped inside facade piazza zone.
- **Caption:** Pale blue haint-blue porch ceiling with overhead fan.

### story-coastal
- **Key:** crew-from-behind
- **Section:** #7 story-coastal (inside facade #4 shape)
- **Crop:** `object-position: 50% 40%`
- **Treatment:** grade only; clipped inside facade SVG.
- **Caption:** Painter on ladder working exterior siding, viewed from behind.

### gallery
Four keys for optional gallery or secondary use:

1. **region-charleston-street** — Section: optional gallery or OG fallback. Crop: `50% 50%`. Treatment: grade. Caption: Row of pastel historic houses with dark shutters in Charleston.
2. **detail-door** — Section: optional gallery. Crop: `50% 30%`. Treatment: grade. Caption: Front door painted deep glossy black with brass hardware.
3. **material-swatches** — Section: optional gallery or color explorer support. Crop: `50% 50%`. Treatment: grade. Caption: Paint color swatches laid on a wooden table.
4. **hands-at-work** — Section: optional gallery. Crop: `40% 60%`. Treatment: grade. Caption: Hands holding an angled brush cutting in at a trim edge.

## Rejections
No frames rejected: all selected keys are residential, Charleston-appropriate, no faces presented as owner, no readable signs/logos/plates/house numbers, no commercial sites. Placeholder manifest means actual image content will be verified at render check.

## Notes for builder
- Every `[[img key]]` or `[[frame key]]` macro uses a key from this file only.
- Photo grade filter is global in style.css; per-photo `object-position` set via `[data-photo="key"] { object-position: ... }`.
- No photo appears twice on the page.
- Hero key hero-C1 is unique to painter-C (no sibling uses it).