# Design system — selfstorage-B

## Tokens (:root)

```css
:root{
  /* palette */
  --c-deep:#0B1C2C;
  --c-paper:#E8EDEB;
  --c-cyan:#5CD6E0;
  --c-cyan-ink:#0F5F66;
  --c-amber:#E0A526;
  --c-amber-ink:#7A5200;
  --c-warm:#F4F1EA;

  /* type scale */
  --fs--2:clamp(.75rem,.7rem + .25vw,.8125rem);
  --fs--1:clamp(.8125rem,.76rem + .3vw,.9375rem);
  --fs-0:clamp(.9375rem,.88rem + .35vw,1.0625rem);
  --fs-1:clamp(1.0625rem,.98rem + .5vw,1.375rem);
  --fs-2:clamp(1.375rem,1.2rem + 1vw,2rem);
  --fs-3:clamp(2rem,1.6rem + 2.2vw,3.25rem);
  --fs-4:clamp(2.6rem,min(9vw,9.5svh) + .1rem,5.25rem);

  /* spacing */
  --sp-xs:.5rem;
  --sp-sm:.75rem;
  --sp-md:1.25rem;
  --sp-lg:2rem;
  --sp-xl:3.5rem;
  --sp-2xl:6rem;

  /* layout */
  --header-h:4rem;
  --gutter:clamp(1rem,4vw,2.5rem);
  --measure:42ch;
  --wide:78rem;

  /* motion */
  --ease-out:cubic-bezier(.23,1,.32,1);
  --ease-io:cubic-bezier(.77,0,.175,1);
  --dur-press:120ms;
  --dur-ui:200ms;
  --dur-page:520ms;
  --dur-story:900ms;
  --dur-stagger:60ms;

  /* radius & rule */
  --radius:2px;
  --rule:1.5px;
}
```

## Tone classes
- `.t-deep` → bg `--c-deep`, text `--c-warm`, accent `--c-cyan`, cta `--c-amber`
- `.t-paper` → bg `--c-paper`, text `--c-deep`, accent `--c-cyan-ink`, cta `--c-amber-ink`

## Components
- `.reading` → JetBrains Mono, `--fs--1`, tabular-nums, letter-spacing .02em, uppercase key segment
- `.btn` → min-height 3rem, padding-inline 1.5rem, radius `--radius`, press scale(.97)
- `.btn-primary` → bg `--c-amber`, color `--c-deep` on deep; bg `--c-amber-ink`, color `--c-warm` on paper
- `.sample-tag` → inline pill, border 1px currentColor, `--fs--2`, uppercase, padding-inline .5em
- `.frame` → aspect-ratio from slot, overflow clip, reveal via clip-path under `.sw-motion`
- `.svc-card` → bordered panel with reading header, blurb, quote link
- `.hours-dl` → two-column dl for office/gate side by side

## Photo grade
```css
img,[data-video]{filter:saturate(.85) contrast(1.05) hue-rotate(-4deg)}
```
Cool palette: drop sepia, shift hue slightly blue to match the night-blue deep.