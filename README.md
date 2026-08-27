# The Web3 Family

The marketing site for The Web3 Family (Clarke Tech Solutions, Inglewood, California).

The homepage has one job: get the right visitor to book a 15 minute call. Built
to grow past one page.

**Read `CLAUDE.md` before changing anything.** It holds the audience, the design
direction, the copy rules, the locked copy, the brand tokens, the verified contrast
ratios, and the accessibility floor. Those are project rules, not suggestions.

## Structure

```
src/
  _includes/
    base.njk       the shared layout: <head>, header, footer, every page uses it
    article.njk    the shared layout for articles, wraps base.njk
  index.njk         the homepage
  articles/
    index.njk       the /articles/ listing page
    *.md            one file per published article
  styles.css        the one stylesheet every page shares
  favicon.svg
  favicon.ico
.eleventy.js        build config: input/output dirs, passthrough copy list
article-template.md starting point for a new article, copy into src/articles/
```

Built with [Eleventy](https://www.11ty.dev/). A brand-wide change (a color, a
spacing value) is one edit to `src/styles.css`, not one edit per page.

## Running it

```
npm install
npm run dev       # local preview with live reload, localhost:8080
npm run build     # static output into _site/
```

## Adding a page

Create a file under `src/` with front matter:

```
---
layout: base.njk
title: Page title here
description: One sentence for the meta description.
---
```

Write the page's sections below the front matter, matching the rhythm in
`src/index.njk`: a `<section>` with a top border (or `class="band"` for the
alternate ground), a `.wrap` container, and either `.split` prose or a `.cards`
grid. The header and footer come from `base.njk` automatically. Do not add a
navigation link anywhere without asking first, see CLAUDE.md section 10.

## Adding an article

Copy `article-template.md` into `src/articles/` under a new filename (that
filename becomes the URL), fill in the front matter, write the body in
Markdown, done. It shows up on `/articles/` and builds automatically. Nothing
currently links to `/articles/` itself, so it's reachable by direct URL only,
on purpose, until there's a decision about how visitors should find it.

## Deploying

Vercel builds from `main` automatically: `npm run build`, output directory `_site`.

If something breaks, roll back to the previous deployment in the Vercel dashboard
rather than hotfixing under pressure.

## Before merging

Confirm every time:

1. Reads cleanly at 375px width.
2. All text is 18px or larger.
3. Every color pair meets the ratios in CLAUDE.md section 6.
4. A 68-year-old would understand every word.
5. Each page still has exactly one goal and one action.

## Open slots

None. The portrait (`src/christopher.jpg`), the phone number
(310-703-6003), the email (christopher@theweb3family.com), and the booking
panel (a real Calendly inline embed in `src/index.njk`) are all real. The
proof section's heading and its two lines are real, shipped copy too; they
stay as they are until there is a real testimonial with a full name,
organization, photo, and written permission.
