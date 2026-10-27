# Project guidance

## Purpose and source

Build Dhruv Goel's personal website at `dhruvg.net`: a home for writing,
projects, and personal background that makes restarting a writing habit easy.
Keep maintenance and publishing friction low.

This brief was initialized from the 39-page ChatGPT export
`WordPress Account Comparison - chatgpt chat.pdf`, dated October 26, 2026.
The source is a local planning conversation, not a specification with every
recommendation approved. Later user instructions override this brief.
Do not copy the full conversation or its account and billing details into the
site or repository.

## Current implementation context

The user subsequently confirmed GitHub username `dhruvstar10` and Substack
profile `https://substack.com/@godhruv`. The user has now approved featuring the public Auzar project at
`https://github.com/dhruvstar10/auzar`. Home, Writing, Projects, and About are
the current site structure. Use the confirmed
profile rather than assuming the older publication URL is correct.

Astro source and a GitHub Pages workflow now exist. See `README.md` for commands
and outstanding setup work. On October 26, 2026, dependencies were installed
(lockfile committed), `npm run check` and `npm run build` passed, drafts were
confirmed absent from production output, and pages were checked at desktop
and 320/390px mobile widths. Headless Chrome's `--window-size` will not go
below 500px wide; use device emulation (for example Puppeteer `setViewport`)
for mobile checks.

The user chose a public repository on GitHub Free named
`dhruvstar10/dhruvstar10.github.io` (the user site, not `dhruvg.net`), so the
site serves from the domain root and project repos with Pages turned on appear
at `dhruvg.net/<repo-name>` once the custom domain is set. `BASE_PATH` is `/`
throughout. The site is live at `https://dhruvg.net` (connected October 26,
2026; HTTPS enforced; `SITE_URL` Actions variable set). See `README.md` for the
DNS records. Pushes to `main` deploy to the live site.

The user supplied a screenshot of the current site and its introduction:
“I’m a product leader passionate about AI, product strategy, and building tools
that empower everyone.” This is approved source material for the biography.

## Current revision

The user reviewed the local draft and explicitly requested committing and
pushing these changes on October 26, 2026.
LinkedIn is confirmed as `https://www.linkedin.com/in/godhruv/` and is linked
from the site; the user plans to link back from LinkedIn themselves.
The current draft revises Home, Writing, and About, adds a shared external
article list and social-sharing image, and keeps Writing active on article pages.
Latest visual feedback: use a neutral white/charcoal theme, remove arrow icons
and decorative placeholder artwork, and streamline repeated links. External
profile links now appear once per page in the footer: LinkedIn, GitHub, and
the Substack publication homepage. Causes links appear on About. Home uses the
Hallucinating Touchdowns artwork from Part 1 via its original published image
URL. Copy it into local assets once accessible; the user-provided shared Google
Drive folder is currently blocked by filesystem permissions.
The user supplied three Substack article URLs and confirmed they are Parts 1–3
in the supplied order. They are recorded in `src/data/writing.ts`, with a series
summary based on the author’s public LinkedIn introduction. Chrome successfully opened Part 1: its date is November 22, 2025 and subtitle
is “An experiment with AI, statistics and football.” These are now recorded.
Other dates and individual summaries remain omitted pending verification.
The standard publication `/subscribe` URL is configured but needs browser
verification before publishing.
The session can build, but cannot bind a local preview port (`EPERM`) or launch
Chrome. Preview must currently be started from the user's own terminal.

Auzar’s public README was reviewed in Chrome on October 26, 2026. It is an
experimental Swift/iOS prototype using Meta Ray-Ban glasses for live voice,
camera snapshots, and label reading with vision/OCR. Guided repair procedures
and manual lookup are roadmap items, not current capabilities. There is no
verified public demo URL; link to the repository. Project copy is curated in
`src/data/projects.ts`, shown on Home and `/projects/`.

## Confirmed user context

- The user wants a fresh content website. There is nothing valuable on the old
  WordPress site that needs migration.
- The domain is `dhruvg.net`, registered through GoDaddy. Keep the domain;
  WordPress hosting is a separate service.
- Existing writing is on Substack, and the user wants to resume writing.
- The site should link to projects stored on GitHub and connect those projects
  to the blog posts discussing them.
- The user asked to use GitHub Pages instead of Cloudflare and is interested in
  maintaining the website with Codex or Claude.
- Azure credits were mentioned for testing. They are not a requirement for
  hosting this website.

## Working technical direction

The following are the conversation's proposed defaults, not an already-built
system. Use them when implementing unless the user changes direction:

- Astro with static output, Markdown content, and minimal client-side JavaScript.
- GitHub for source control; GitHub Pages for hosting; GitHub Actions for builds
  and deployment.
- Keep the website, writing, and project descriptions together in this repo.
  Keep actual project application code in its own repositories.
- Keep `dhruvg.net` at GoDaddy and connect it to the finished site when ready.
- Avoid introducing WordPress, a database, authentication, a CMS, or paid
  infrastructure without a concrete requirement.
- Backend-dependent demos can be hosted separately and linked from the site.
  Do not design GitHub Pages to run Python, APIs, or private server-side logic.

At initialization this directory contained no application, Git repository,
package manifest, or build/test commands. Inspect the current files before
working; do not assume scaffolding or deployment is already configured.
Once tooling exists, document the actual setup, development, build, preview,
and validation commands in `README.md`.

## Initial site scope

- Home: a concise personal introduction, selected projects, and recent writing.
- Writing/blog: an index and support for individual articles when needed.
- Projects: a curated showcase explaining what was built, why, and what was
  learned. Include repository links, related writing, and live demos where real
  destinations exist.
- About: user-supplied personal background.
- A visible Substack subscribe link; an embed is optional if it improves the
  experience without unnecessary complexity.

Suggested routes are `/blog/`, `/projects/`, and `/about/`. These are defaults,
not existing routes. Favor a minimal, personal design with readable typography,
responsive layouts, semantic HTML, keyboard access, and accessible contrast.
Use shared layouts and structured content rather than duplicating page markup.
Add appropriate page titles, descriptions, canonical URLs, and a sitemap;
add RSS when publishing articles on the site.

## Writing, Substack, and project content

The conversation's final recommendation was to start by featuring existing
Substack writing and linking to projects, while leaving the current publishing
workflow in place. Do not treat earlier website-first publishing suggestions as
a settled migration decision.

- The conversation identifies `https://dhruvgblog.substack.com` as the existing
  publication. Verify the destination and actual article details before use.
- Preserve existing Substack posts and subscribers. Do not automatically import,
  duplicate, delete, or unpublish articles.
- A future website-first workflow could publish full articles here and send
  excerpts through Substack, but the user has not chosen that workflow yet.
- If importing an article is requested, preserve its wording, original date,
  attribution, and source link. Establish a canonical URL strategy for any
  duplicated full articles.
- Preserve the author's voice. Do not invent biographical claims, project
  achievements, article text, dates, or URLs.
- The fantasy football/AI article and projects in the chat were examples, not
  supplied publication-ready content. Verify their titles and sources.
- Curate an explicit list of projects; do not automatically expose every GitHub
  repository. Do not feature private or work-related material without direction.
- Keep placeholders clearly marked during development and out of production.

## Implementation and verification

- Prefer small, understandable changes and dependencies justified by a concrete
  need. Keep the initial site static and easy to edit.
- Keep secrets, account details, tokens, and private source material out of
  committed files and browser bundles.
- Make internal links and assets work for the actual hosting URL. GitHub project
  Pages previews can require a repository base path; the custom domain can use
  a different base. Verify both configurations when applicable.
- Before delivering site changes, run the available build and relevant checks;
  inspect affected pages at desktop and mobile sizes, navigation, links,
  images, and metadata. Do not claim checks that were not run.
- Document the publishing workflow so adding a post or project does not require
  reverse-engineering the site.

## Drafts, repository visibility, and project repos

From a follow-up Claude conversation (October 26, 2026). Verify plan details
against current GitHub documentation before relying on them.

- The source repo and the published Pages site have separate visibility. On
  GitHub Free a Pages repo must be public; GitHub Pro allows a private repo. The
  published site is public either way. Login-only Pages requires Enterprise
  Cloud, which doesn't apply to a personal account.
- Anything committed to a public repo is readable, including posts marked
  `draft: true` that are excluded from the build. Don't commit private drafts
  to a public repo without the user's agreement.
- Default draft workflow: write and preview locally (`npm run dev`, Astro's
  default `localhost:4321`) and push only when a post is ready. Support a
  `draft` frontmatter flag that keeps drafts out of production builds.
- Shareable per-branch preview links would mean moving hosting to Cloudflare
  Pages, Netlify, or Vercel. That is a possible later option, not a decision;
  the current choice is still GitHub Pages.
- Pages works per repo. The website repo (for example `<username>.github.io`)
  serves `dhruvg.net`. A project repo with Pages turned on is served at
  `dhruvg.net/<repo-name>`, and its visibility is independent of the website
  repo.

## Deployment and unresolved inputs

Prepare and verify a preview before switching the live domain. Preserve unrelated
DNS records, including email records. Verify current provider documentation when
configuring deployment, domains, plan eligibility, or service limits; the chat's
pricing, refund dates, and platform rules are historical context.

This brief itself does not authorize account cancellation, billing changes, DNS
changes, or public publication. Carry out those actions when the user requests
them. The WordPress refund discussion is separate from implementing this site;
do not assume a refund or cancellation has happened.

Resolve inputs when the relevant work needs them, without blocking independent
local implementation:

- GitHub username, website repository name, visibility, and Pages eligibility.
- Which projects, article links, biography, and profile links to feature.
- Visual preferences and any supplied images or branding.
- Whether to retain Substack-first publishing or later move full articles here.
- Current domain/hosting state before deployment or DNS changes.
