# The Web3 Family

The marketing site for The Web3 Family (Clarke Tech Solutions, Inglewood, California).

One page, one job: get the right visitor to request a free Digital Intelligence Briefing.

**Read `CLAUDE.md` before changing anything.** It holds the audience, the copy rules,
the locked copy, the brand tokens, the verified contrast ratios, and the accessibility
floor. Those are project rules, not suggestions.

## Structure

```
src/pages/index.astro   the entire site: markup and styles in one file
public/                 static assets served at the site root
```

There is one page and one file. If it grows past roughly 800 lines, ask before splitting.

## Running it

```
npm install
npm run dev       # local preview at localhost:4321
npm run build     # static output into dist/
```

## Deploying

Cloudflare Pages builds from `main` automatically.

- Build command: `npm run build`
- Output directory: `dist`

Live in under a minute. If something breaks, roll back to the previous deployment in
the Cloudflare Pages dashboard rather than hotfixing under pressure.

## Before merging

Confirm all four:

1. Reads cleanly at 375px width.
2. All text is 18px or larger.
3. Every color pair meets the ratios in CLAUDE.md section 5.
4. A 68-year-old would understand every word.

## Open slots

Two placeholders in `index.astro` are intentional and must not be removed:

- `src="christopher.jpg"` in the hero. Drop the real photo into `public/` to fill it.
- `<div id="booking-widget">` in the booking section. The embed goes there.
