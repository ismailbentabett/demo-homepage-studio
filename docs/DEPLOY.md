# Deploying the library to Vercel

The whole library is static: one showcase page plus 54 self-contained homepages. Vercel serves it with no
framework, no npm install and no environment variables.

## What gets published

`node tools/build-deploy.mjs` writes `deploy/`:

| URL | Source |
|---|---|
| `/` | the showcase (`tools/build-showcase.mjs --deploy deploy`) |
| `/<id>/` e.g. `/roofer-A/` | `sites/<trade>/<A|B|C>/dist/` copied as is |
| `/shots/<id>-desk.jpg`, `-phone.jpg` | `qa/screens/1440-first.jpg`, `390-first.jpg` |
| `/fonts/*` | the showcase's fonts from `assets/fonts/` |
| `/robots.txt`, `/404.html` | written by the script |

The script uses only Node built-ins. It exits with an error if a site's `dist/` lacks the noindex meta or
still has a `{{biz.*}}` token. It lists, without failing, any site still in progress or carrying placeholder
photos (files under 2 KB in `dist/media`).

## Config in the repo

- `vercel.json`:
  - Build command `node tools/build-deploy.mjs`, output `deploy`, install skipped, framework none.
  - `trailingSlash: true`, so `/roofer-A` redirects to `/roofer-A/`. This is required because every site
    uses relative asset paths.
  - Headers on every response: `X-Robots-Tag: noindex, nofollow` plus basic security headers. Media and
    fonts are cached for a week, JS and CSS for an hour.
- `.vercelignore`: uploads only what the build reads (each site's `dist/`, `site.json`, `facts.json`,
  `plan/concept.json`, two screenshots, `data/`, `assets/fonts`, `tools/`). The upload is about 80 MB
  instead of over 1 GB, because the stock pools in `niches/` stay out.

## Deploy

Either way, Vercel runs the build itself. Do not commit `deploy/`; it is gitignored.

**From GitHub (recommended):** Vercel dashboard, Add New, Project, import this repo. Leave every setting
alone (`vercel.json` sets them). Each push to `main` deploys production, and other branches get preview URLs.

**From this machine:**

```bash
vercel            # first run links the project, then makes a preview deploy
vercel --prod     # production
```

**Check before deploying:**

```bash
node tools/build-deploy.mjs
```

Then serve `deploy/` with any static server, or run the Playwright check in `.tmp/` if you have it.

## Demo safety

Every page is a fictional business (`docs/DEMO-RULES.md`), so search engines are kept out three ways:
- the per-page `noindex` meta
- the `X-Robots-Tag` header
- `robots.txt` with `Disallow: /`

Don't remove these. For a real prospect, reskin first (`tools/reskin.mjs`) and deploy that copy separately.
