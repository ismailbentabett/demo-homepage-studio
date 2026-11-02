# Media Plan — moving-C (Kestrel Moving & Haul)

## Slots and manifest keys

| Slot | Manifest key | Why this frame | Crop / object-position |
|---|---|---|---|
| hero | hero-B1 | Wide transport/unload scene with sky and ground plane; reads as Boulder plains-to-mountains without logos or faces. No sibling uses hero-B1 as hero. | `object-position: center 40%` — keeps horizon low so headline sits in upper third. |
| canyon-story break | region-apartment-stairs | Narrow vertical passage evoking canyon road constraint; dark tone matches t-deep band. Not used elsewhere on page. | `object-position: center 30%` — emphasizes depth of passage. |
| lease-calendar | season-autumn-street | Residential street in warm light; seasonal context for August lease cycle without showing CU campus. | `object-position: center 60%` — tree canopy frames top, street-level detail visible. |
| haul-away | crew-from-behind | Crew working from behind, no faces; shows labor without branding. Distinct from A's process shots. | `object-position: center 50%` — centered composition for three-column layout. |
| reviews | hands-carrying-box | Hands-only detail shot; reinforces human scale without faces. Not reused. | `object-position: center 40%` — hands centered in frame. |
| area / ZIP | tool-hand-truck | Tool detail on residential street; implies service readiness. Distinct from B's tool-hero usage. | `object-position: left 50%` — tool left-aligned to balance text right. |

## Rules followed

- Every key exists in `niches/moving/media/manifest.json`. Verified.
- No photo used twice on this page. Six unique keys.
- Hero key `hero-B1` not used as hero by sibling A (A uses hero-A1). Sibling B has no concept.json yet; hero-B1 is available.
- Captions describe the frame, never invent a job. Alt text from manifest preserved.
- No faces as "the owner". All people shots are backs, hands, or silhouettes.
- No visible logos, plates, or readable signs in hero.

## Video

No video slots in blueprint. Site is photo-led per direction C brief ("Colorado light at its warmest"). Motion comes from route-line draw and scroll stories, not background footage. This avoids T9 (heavy video) and keeps load fast.