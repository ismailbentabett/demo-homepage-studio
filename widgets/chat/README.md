# Site chat widgets

One chat widget per built homepage (75 sites), each themed from that site's own palette, fonts, corner radius and signature motif. No framework, no network calls: answers come from the site's `facts.json`.

## Layout

```
widgets/chat/
  core/chat-widget.css   shared structure (uses --swc-* variables)
  core/chat-widget.js    behaviour (quote flow, prices, ZIP check, hours, hand-off)
  fonts/<slug>/          self-hosted woff2 copied from assets/fonts
  themes/<site-id>/
    theme.css            --swc-* variables for .swc[data-site=<id>]
    fonts.css            @font-face for the site's fonts
    config.js            window.SiteChatConfig (facts, copy, anchors)
    embed.html           the snippet to paste before </body>
    preview.html         the real site with the widget injected
  tools/build.mjs        generator
  tools/serve.mjs        static preview server
  qa/contrast.json       contrast check per site (all ≥ 4.5:1)
  index.html             gallery of all widgets
```

## Embed

Copy `themes/<id>/embed.html` into the page before `</body>`, and copy `core/`, `fonts/<slug>/` and `themes/<id>/` next to it, keeping the relative paths. The widget sits above a fixed mobile call bar on its own (`--swc-lift`).

JS API: `SiteChat.open()`, `SiteChat.close()`.

## Rebuild

After a reskin or a facts change:

```bash
node widgets/chat/tools/build.mjs
```

Pass ids to rebuild only some sites: `node widgets/chat/tools/build.mjs roofer-A tattoo-C`.

## Preview

```bash
node widgets/chat/tools/serve.mjs 4790
```

Open http://localhost:4790/widgets/chat/ for the gallery, or `/widgets/chat/themes/<id>/preview.html` for one site.

## Customise

- Colours, radius, fonts: edit the `--swc-*` values in `themes/<id>/theme.css` (they are overwritten by the next build; change `tools/build.mjs` to make it stick).
- Copy and quick-reply chips: `copyOf()` in `tools/build.mjs`.
- Behaviour: `core/chat-widget.js`.
