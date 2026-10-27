# Media Plan — painter-B (Drawdown Painting Co.)

## Hero
- **Key:** hero-B1
- **Section:** Hero (tint ticket document object)
- **Crop:** `object-position: 50% 40%` — keeps the ticket/document centered in the right half behind the scrim.
- **Treatment:** Photo grade (`saturate(.85) contrast(1.05) sepia(.08) brightness(.98)`). Left-side scrim using deep color RGB (26,60,64) per LEARNINGS §1 formula at ≥900px; below 900px a solid deep overlay at 85% opacity.
- **Caption:** A paint lab tint ticket with formula lines, base code and coverage numbers printed on card stock.

## Slots

### break
- **Key:** region-raleigh-suburb
- **Section:** Full-bleed break between services and proof.
- **Crop:** `object-position: 50% 60%` — shows rooflines and siding at mid-height.
- **Treatment:** Photo grade only. No overlay.
- **Caption:** Two-story suburban house exterior in Raleigh-Cary area with fresh siding paint.

### story-1
- **Key:** process-wash
- **Section:** Prep story step 1 (wash).
- **Crop:** `object-position: 50% 30%` — focuses on water spray and surface.
- **Treatment:** Photo grade. Clip-reveal entrance on scroll.
- **Caption:** Pressure washer rinsing pollen and mildew from exterior siding before painting.

### story-2
- **Key:** process-scrape
- **Section:** Prep story step 2 (scrape).
- **Crop:** `object-position: 40% 50%` — shows tool edge and peeling paint.
- **Treatment:** Photo grade. Clip-reveal entrance.
- **Caption:** Paint scraper removing loose exterior paint down to bare wood.

### story-3
- **Key:** process-prime
- **Section:** Prep story step 3 (prime).
- **Crop:** `object-position: 50% 40%` — brush or roller on primed surface.
- **Treatment:** Photo grade. Clip-reveal entrance.
- **Caption:** Primer coat applied to bare wood spots after scraping and sanding.

### story-4
- **Key:** process-cut-in
- **Section:** Prep story step 4 (cut-in).
- **Crop:** `object-position: 60% 30%` — angled brush at trim edge.
- **Treatment:** Photo grade. Clip-reveal entrance.
- **Caption:** Angled brush cutting a straight paint line along window trim.

### detail-trim
- **Key:** detail-trim
- **Section:** Services grid detail card (ceilings & trim).
- **Crop:** `object-position: 50% 50%` — centered on trim profile.
- **Treatment:** Photo grade. Tint-ticket cap border above.
- **Caption:** Freshly painted window trim with clean semi-glass sheen edge.

### detail-cabinets
- **Key:** detail-cabinets
- **Section:** Services grid detail card (cabinet refinishing).
- **Crop:** `object-position: 50% 40%` — shows door fronts and hardware.
- **Treatment:** Photo grade. Tint-ticket cap border above.
- **Caption:** Sprayed kitchen cabinet doors in a residential kitchen with even enamel finish.

### detail-deck
- **Key:** detail-deck-stain
- **Section:** Services grid detail card (deck staining).
- **Crop:** `object-position: 50% 70%` — boards and stain texture at lower third.
- **Treatment:** Photo grade. Tint-ticket cap border above.
- **Caption:** Deck boards with fresh stain showing grain and water-beading surface.

### room-living
- **Key:** room-living
- **Section:** Room quote builder output example / interior service proof.
- **Crop:** `object-position: 50% 50%` — full room context.
- **Treatment:** Photo grade. Frame with 3/2 aspect ratio.
- **Caption:** Living room walls in a calm neutral eggshell sheen with natural light.

### room-bedroom
- **Key:** room-bedroom
- **Section:** Paint calculator example / interior service proof.
- **Crop:** `object-position: 50% 40%` — wall plane and corner.
- **Treatment:** Photo grade. Frame with 3/2 aspect ratio.
- **Caption:** Bedroom wall in a soft matte color with even coverage and no lap marks.

### material-swatches
- **Key:** material-swatches
- **Section:** Sheen picker tool visual / color help service card.
- **Crop:** `object-position: 50% 50%` — chips laid flat or on wall.
- **Treatment:** Photo grade. No frame; inline with tool UI.
- **Caption:** Paint color sample chips arranged on a wall for morning and evening light comparison.

### tools-brushes
- **Key:** tools-brushes
- **Section:** About / trust section visual anchor.
- **Crop:** `object-position: 50% 60%` — brush bristles and tray.
- **Treatment:** Photo grade. Frame with 3/2 aspect ratio.
- **Caption:** Used angled sash brushes and roller tray with wet paint on a drop cloth.

## Notes
- All keys verified present in `niches/painter/media/manifest.json`.
- No hero reuse: hero-B1 is unique to painter-B direction.
- No faces presented as owner; no readable signs, logos, plates or house numbers in any slot.
- All captions describe the frame content only; no "our work", "our team", "before/after" language.
- Placeholder mode active: actual image files will be sourced when Pexels key is available; build uses poster/fallback until then.