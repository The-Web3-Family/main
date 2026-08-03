# The Web3 Family

The marketing site for The Web3 Family (Clarke Tech Solutions, Inglewood, California).

One page, one job: get the right visitor to request the free Digital Intelligence Briefing.

**Read `CLAUDE.md` before changing anything.** It holds the audience, the design
direction, the copy rules, the locked copy, the brand tokens, the verified contrast
ratios, and the accessibility floor. Those are project rules, not suggestions.

## Structure

```
index.html      the entire site: markup and styles in one file
favicon.svg
favicon.ico
```

There is one page and one file. No build step, no framework, no npm. If the file
grows past roughly 800 lines, ask before splitting.

## Running it

Open `index.html` directly in a browser, or serve the folder with anything static:

```
python3 -m http.server 4321
```

## Deploying

Vercel builds from `main` automatically. No framework preset, no build command,
no output directory. It serves the repository root as-is.

If something breaks, roll back to the previous deployment in the Vercel dashboard
rather than hotfixing under pressure.

## Before merging

Confirm every time:

1. Reads cleanly at 375px width.
2. All text is 18px or larger.
3. Every color pair meets the ratios in CLAUDE.md section 6.
4. A 68-year-old would understand every word.
5. The page still has exactly one goal and one action.

## Open slots

Placeholders in `index.html` are intentional and must not be removed or replaced
with substitutes:

- `src="christopher.jpg"` in the portrait block. Drop the real photo in the repo
  root to fill it.
- The phone number, currently `(555) 555-5555` in two places.
- `<div id="booking-widget">` near the bottom. The booking embed goes there.
- The proof section, currently just an HTML comment. Stays empty until there is
  a real testimonial with a full name, organization, photo, and written permission.
