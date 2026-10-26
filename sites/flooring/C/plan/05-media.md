# Media Plan — flooring-C (Heart & Tide Floor Co.)

## Hero

- **Key:** `hero-C1`
- **Section:** hero (type-mask)
- **Crop:** `object-position: 50% 40%` to center heart pine grain in the mask window
- **Treatment:** grade only (`saturate(0.85) contrast(1.05) sepia(0.08)`), multiply overlay #0F1C24 at 15% opacity for text legibility behind mask
- **Caption:** Century-old heart pine grain, amber tone, sanded to bare wood

## Slots

### break
- **Key:** `finished-living`
- **Section:** break (full-bleed visual rest between services and house-age guide)
- **Crop:** `object-position: 50% 60%` to keep floor in lower third
- **Treatment:** grade only, no overlay
- **Caption:** Refinished oak floor in a modest Norfolk living room, satin sheen, natural window light

### story-1
- **Key:** `process-sander`
- **Section:** heart-pine-story (pinned tide-rise cross-section, step 1: bare wood reveal)
- **Crop:** `object-position: 30% 50%` to show drum sander pass and dust in light
- **Treatment:** grade only
- **Caption:** Drum sander revealing bare heart pine, sawdust catching window light

### story-2
- **Key:** `detail-grain-redoak`
- **Section:** heart-pine-story (step 2: grain inspection and gap fill)
- **Crop:** `object-position: 50% 50%` centered on open grain texture
- **Treatment:** grade only
- **Caption:** Red oak grain close-up showing open pores and reclaimed sliver gap fill

### story-3
- **Key:** `detail-cupping`
- **Section:** water-damage (tide-rise story, cupped boards near wall)
- **Crop:** `object-position: 50% 70%` to emphasize cupped edge profile
- **Treatment:** grade only
- **Caption:** Cupped hardwood boards along an exterior wall after storm surge, edges raised

### story-4
- **Key:** `weather-rain`
- **Section:** water-damage (context: nor'easter rain on old house)
- **Crop:** `object-position: 50% 30%` to show rain streaks on porch/window
- **Treatment:** grade only, slightly cooler balance via CSS filter adjustment
- **Caption:** Rain on a porch railing of an older Norfolk house during a nor'easter

### detail-stairs
- **Key:** `detail-stairs`
- **Section:** stairs-detail (spotlight split, text left photo right)
- **Crop:** `object-position: 50% 40%` to show treads and nosing clearly
- **Treatment:** grade only
- **Caption:** Oak stair treads freshly finished with satin polyurethane, matching hall floor above

### detail-transition
- **Key:** `detail-transition`
- **Section:** stairs-detail (secondary image showing clean threshold)
- **Crop:** `object-position: 50% 50%` centered on wood-to-tile seam
- **Treatment:** grade only
- **Caption:** Clean wood-to-tile threshold at a bathroom doorway, flush transition strip

### proof
- **Key:** `hands-sample`
- **Section:** proof (review cards area, contextual image)
- **Crop:** `object-position: 50% 50%` hand holding plank against existing floor
- **Treatment:** grade only
- **Caption:** Hand holding a sample plank against an existing floor for color match

### material
- **Key:** `material-sawdust`
- **Section:** trust-row or as texture background element (optional use)
- **Crop:** `object-position: 50% 50%`
- **Treatment:** grade only, reduced opacity if used as background
- **Caption:** Sawdust and grit in window light on a workshop bench

### home
- **Key:** `home-norfolk`
- **Section:** zip-check or as contextual anchor (optional use)
- **Crop:** `object-position: 50% 60%` to show house and porch
- **Treatment:** grade only
- **Caption:** Older Norfolk-style foursquare with front porch on a tree-lined street

## Notes for builder

- All photos are placeholders in manifest; actual Pexels files will be curated later. Keys are reserved and unique to this site.
- Hero key `hero-C1` is not used by flooring-A or flooring-B (A uses hero-A*, B uses hero-B*).
- No faces presented as owner; `hands-sample` shows hand only.
- No readable signs, logos, license plates, or house numbers in any selected frame.
- Photo grade is uniform: `saturate(0.85) contrast(1.05) sepia(0.08)`. Apply via `.frame img` selector.
- Hero gets additional multiply overlay for text contrast behind type mask.
- Reduced motion: all images render statically with no parallax or unclip animation.