# dhruvg.net

Dhruv Goel's personal website: Astro, static output, and GitHub Pages.
The initial site focuses on writing and links to the confirmed Substack profile:
https://substack.com/@godhruv. Projects are intentionally omitted until there is
something to showcase. The original article URL and title still need verification.

## Run locally

Use Node 24 (`nvm install && nvm use` if you use nvm), then:

```sh
npm install
npm run check
npm run dev
```

Open http://localhost:4321. Build with `npm run build`; inspect the built site
with `npm run preview`. Commit the generated `package-lock.json` after installation;
subsequent installs should use `npm ci`.

Node 24 is installed with Homebrew as the keg-only `node@24`, so the system default
may still be an older Node. Put it first on your `PATH` before running npm:
`export PATH="/opt/homebrew/opt/node@24/bin:$PATH"`.

## Content

- `src/data/site.ts`: name, description, and verified profile links.
- `src/pages/index.astro`: homepage.
- `src/pages/blog/index.astro`: writing index and Substack link.
- `src/pages/about.astro`: short introduction; extend with approved biography.
- `src/styles/global.css`: shared responsive design.
- `src/content/posts/`: optional native Markdown articles.

To add an article, create `src/content/posts/my-article.md`:

```md
---
title: "Your article title"
description: "A short description."
date: 2026-10-26
draft: true
---

Your article goes here.
```

Drafts appear in local development but are excluded from production routes,
indexes, and sitemap. Posts default to drafts. Change to `draft: false` only when
ready to publish. A public repository exposes committed drafts even when they
are excluded from the website; keep private writing in `.private-drafts/` until
ready to move it into the collection. Native RSS is deferred until there are
articles to publish here. Substack remains the publishing destination for now.

## GitHub Pages

The site lives in the public user-site repository
`dhruvstar10/dhruvstar10.github.io` (GitHub Free requires a public repository
for Pages). Because it is the user site, it serves from the domain root, and
any other repository with Pages turned on appears at `<domain>/<repo-name>`.

Every push to `main` runs `npm run check` and `npm run build`, then deploys.
Pages uses **GitHub Actions** as its build source. The workflow reads two
optional repository Actions variables: `SITE_URL` (defaults to
`https://dhruvstar10.github.io`) and `BASE_PATH` (always `/` for this repo).

Configuration follows the [official Astro GitHub Pages guide](https://docs.astro.build/en/guides/deploy/github/).

## Connect dhruvg.net

The configuration defaults to `https://dhruvg.net` and root-relative hosting.
No DNS or GoDaddy changes have been made.

When the preview is verified, configure `dhruvg.net` as the custom domain in
GitHub Pages, set `SITE_URL=https://dhruvg.net` and `BASE_PATH=/`, and rebuild.
Follow GitHub's current custom-domain instructions to verify domain ownership
and enter the required apex A/AAAA and optional `www` CNAME records in GoDaddy.
Keep the domain registered at GoDaddy; preserve MX, TXT, and other unrelated
records. Enable HTTPS once GitHub provisions the certificate.

Do not change nameservers or cancel domain registration to accomplish this.
Check current provider instructions before changing records:
https://docs.github.com/en/pages/configuring-a-custom-domain-for-your-github-pages-site/managing-a-custom-domain-for-your-github-pages-site

## Prepublication review

- The introduction is taken from the user-supplied current-site screenshot.
- Replace the general Substack link with the direct article link when verified.
- Run `npm run check` and `npm run build` successfully.
- Check navigation, focus indicators, and layout at mobile and desktop widths.
- Confirm canonical URLs, sitemap, and assets for the selected deployment URL.
- Verify a draft is absent from production output before using native posts.
