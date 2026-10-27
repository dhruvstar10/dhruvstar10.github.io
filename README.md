# dhruvg.net

Dhruv Goel's personal website: Astro, static output, and GitHub Pages.
The site focuses on writing and links directly to the author-confirmed three-part
“Juicing with AI in Fantasy Football” series on https://dhruvgblog.substack.com.
The public Auzar prototype is featured on Home and the Projects page. All three
parts' dates and subtitles come from the published Substack posts.

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
- `src/data/projects.ts`: curated project descriptions, capabilities, and repository links.
- `src/pages/projects/index.astro`: project showcase.
- `src/data/writing.ts`: external article titles, summaries, URLs, sources, and dates.
- `src/components/ArticleList.astro`: reusable external article index.
- `public/social-card.svg`: editable source for `social-card.png`, used in link previews.
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

Connected October 26, 2026. `dhruvg.net` is verified on the GitHub account and
set as the repository's Pages custom domain; the `SITE_URL` Actions variable is
`https://dhruvg.net`, and HTTPS is enforced. `www.dhruvg.net`, `http://` and
`dhruvstar10.github.io` all redirect to `https://dhruvg.net/`.

DNS stays at GoDaddy (nameservers unchanged). Website records:

| Type | Name | Value |
| --- | --- | --- |
| A | @ | 185.199.108.153, 185.199.109.153, 185.199.110.153, 185.199.111.153 |
| AAAA | @ | 2606:50c0:8000::153, 2606:50c0:8001::153, 2606:50c0:8002::153, 2606:50c0:8003::153 |
| CNAME | www | dhruvstar10.github.io |
| TXT | _github-pages-challenge-dhruvstar10 | GitHub domain verification; keep it |

The MX, SPF TXT, `_outlook` TXT and `autodiscover` CNAME records are for
Outlook email; leave them alone. The old WordPress hosting has been cancelled
and its records removed.

If the certificate ever stops renewing, remove and re-add the custom domain in
Settings → Pages to make GitHub re-check DNS. Reference:
https://docs.github.com/en/pages/configuring-a-custom-domain-for-your-github-pages-site/managing-a-custom-domain-for-your-github-pages-site

## Prepublication review

- The introduction is taken from the user-supplied current-site screenshot.
- The featured image currently uses its original published image URL from Part 1;
  replace it with a local copy when the shared artwork folder becomes accessible.
- Run `npm run check` and `npm run build` successfully.
- Check navigation, focus indicators, and layout at mobile and desktop widths.
- Confirm canonical URLs, sitemap, and assets for the selected deployment URL.
- Verify a draft is absent from production output before using native posts.
