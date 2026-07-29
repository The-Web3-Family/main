# CLAUDE.md — The Web3 Family

Read this fully before making any change. These are project rules, not suggestions. When a request conflicts with a rule here, say so and ask before proceeding.

---

## 1. What this project is

A single-page marketing website for **The Web3 Family** (operating entity: Clarke Tech Solutions, Inglewood, California). Principal and sole operator: **Christopher Clarke**.

The business: Christopher is the technical right hand for people starting new and grassroots nonprofits. He researches their organization and funding landscape, hands them the findings for free, then builds their website, donation pages, and digital assets for a flat $3,000/month, delivering finished work every Friday.

The site has exactly one job: get the right visitor to request a free **Digital Intelligence Briefing**. Every change should make that easier, clearer, or more legible. Nothing else.

**Live domain:** theweb3family.com
**Hosting:** Cloudflare Pages, deploying automatically from this repo's main branch.

---

## 2. Who reads this site

This is the single most important thing to internalize, because it invalidates most default web-design instincts.

**The reader is a founder aged roughly 60 to 75.** Usually a man. He spent thirty or forty years building a career somewhere else — trades, ministry, education, law enforcement, corporate, military, medicine — and is now starting a grassroots nonprofit. He is retired or semi-retired with stable income. The organization is pre-launch to about three years old, often with no paid staff.

He is not a beginner at anything except the internet.

What he wants: to be findable, to be taken seriously by funders, to stop losing weeks to tools and vendors he doesn't understand, to not be sold something he can't evaluate, and to leave behind something that outlasts him.

**His currency is time.** Money arrives reliably; years do not.

**He decides alone.** No procurement committee, no board vote, no RFP. Usually at a kitchen table, sometimes with a spouse.

**He is reading on a phone.** Assume a small screen and imperfect eyesight as the default case, not the edge case.

### What he is NOT

Not stupid, not fragile, not a charity case. He built more in his life than most people who will condescend to him about technology. Copy fails the instant it treats him as *behind* rather than *new*.

He does not care about: procurement thresholds, RFP exemptions, agency comparisons, growth-marketing language, or being told what he's doing wrong.

---

## 3. Copy rules

The plain-spoken voice **is** the positioning. Do not "punch up," "polish," or "make it more compelling." Every adjective added drifts it toward agency-speak, which is the exact failure this site was rebuilt to escape.

### Never use these words or framings

- **"Web3" in any headline or prominent position.** It reads as crypto to this audience. The name stays in the logo and the FAQ answer only.
- **Jargon:** fractional CTO, tech debt, technical debt, full-stack, optimization, conversion, funnel, scale, leverage (as a verb), synergy, solutions, seamless, robust, cutting-edge, digital transformation.
- **Age labels:** "second act," "senior," "older," "silver," "boomer," "retiree." He should recognize himself, never be labeled.
- **Negative framing about his current setup:** "your site is broken," "stop leaking donations," "outdated," "you're losing money." Any tension belongs on the *internet* as the problem, never on him.
- **Agency comparisons:** "unlike traditional agencies," "without 6-month delays," "agency prices." He was never going to hire an agency.
- **Compliance/procurement language:** micro-purchase threshold, 2 CFR 200, single-signature authority, board approval, RFP. He has no board. (This material exists for a separate business track — see §9 — and must never appear on this site.)
- **"Bypass," "workaround," "get around"** anything.
- **Em dashes.** Christopher dislikes them. Use periods, commas, or colons.
- Pressure tactics of any kind: countdown timers, scarcity claims that aren't true, "limited spots," "book now before."

### Always do these

- Short sentences. Plain words. One idea per sentence.
- Specifics over cleverness. Being clear beats being memorable.
- Active voice. A button says exactly what happens when it's tapped.
- "You decide, I build" — the reader is always in control.
- First person singular. Christopher is one person, not a team. Never "we," "our team," "us."
- Respect his experience explicitly where natural ("you spent a career building something").
- Sentence case for buttons and labels, not Title Case or ALL CAPS (except the one eyebrow label).

### Reading-level check

Before committing any copy change, read it aloud imagining a 68-year-old hearing it. If any word would make him pause, replace it. If a sentence needs a second read, split it.

---

## 4. Locked copy

Do not change these without an explicit request from Christopher. If a design change would require altering them, ask first.

- **Eyebrow:** For new & grassroots nonprofits
- **Headline:** Starting a nonprofit? I'll handle the technology.
- **Subline:** The same AI and tools the big organizations pay millions for, working for you.
- **Three checkmark bullets:** Enterprise tools, your size. / Every Friday, finished work. / Your time, protected.
- **Price line:** Flat $3,000/month. Month to month, on your terms.
- **CTA button:** Request Your Free Briefing — with subtext "We'll go over the findings together. 15 minutes."
- **Footer:** For the founder who built it the hard way, and wants someone solid in his corner.

### Naming consistency

The free research deliverable is called the **Digital Intelligence Briefing** (short form: "the Briefing"). It has exactly one name across the site, the booking widget, emails, and every document. Never introduce a second name for it — no "Reality Check," no "audit," no "assessment," no "Pre-Call Review." The mechanism's name is a brand asset; consistency is the whole point.

### The Web3 question

This answer lives in the FAQ section only, never higher on the page:

> It stands for the original promise of an open internet: public records, tracked dollars, and work that's owned by the organization instead of trapped in software you can't leave. It has nothing to do with cryptocurrency, tokens, or blockchain. Zero crypto, ever.

---

## 5. Brand tokens

Defined as CSS custom properties in `src/pages/index.astro`. Use the variables, never raw hex values, in new code.

| Token | Hex | Use |
|---|---|---|
| `--forest` | `#003223` | Headlines, panels, logo ground, borders |
| `--orange` | `#fc4d00` | Call-to-action background, accent rules |
| `--cream` | `#f5ebe1` | Page background |
| `--charcoal` | `#181C1B` | Body text, text on orange |
| `--cream-deep` | `#ede0d3` | Card and panel fills |
| `--muted` | `#2f3d38` | Small labels, footer text |
| `--rust` | `#8f2c00` | Eyebrow label, checkmarks |

**Type:** Lora (serif) for headings at 600/700. Inter (sans) for body at 400/500/600/700. Loaded from Google Fonts. Do not add a third typeface.

### Verified contrast ratios — do not break these

These were computed, not estimated. Any new color combination must be checked before it ships.

| Combination | Ratio | Status |
|---|---|---|
| Charcoal on cream | 14.62:1 | AAA |
| Forest on cream | 12.06:1 | AAA |
| Muted `#2f3d38` on cream | 9.67:1 | AAA |
| Rust eyebrow `#8f2c00` on cream | 7.06:1 | AAA |
| **Charcoal on orange** | **5.08:1** | AA — this is why button text is charcoal |
| ~~White on orange~~ | ~~3.39:1~~ | **FAILS AA. Never use white text on the orange.** |
| ~~Orange on cream~~ | ~~2.88:1~~ | **Fails 3:1 non-text contrast. Orange elements need a forest border.** |

---

## 6. Accessibility requirements

Non-negotiable. For this audience, accessibility is not compliance theater — it is the positioning. If he has to squint, the message is that this wasn't built for him.

- **Body text: 20px minimum.** Never below 18px anywhere on the page, including footer, captions, button subtext, and legal lines.
- **Line height: 1.5 minimum** for body copy. Currently 1.62.
- **Tap targets: 48px minimum height**, 56px+ preferred for primary actions, with at least 8px of space between adjacent tappable elements.
- **Links underlined by default**, 2px thickness, not hover-dependent.
- **Visible keyboard focus** on every interactive element. Never remove outlines without replacing them.
- **No low-contrast decorative text.** No light gray on cream, ever. This was a real reported failure on a previous version of this site.
- **Respect `prefers-reduced-motion`.** Motion is minimal by design; keep it that way.
- **Images need real alt text.**
- Test mentally at 375px width first. Desktop is the secondary case.

---

## 7. Technical constraints

- **This is a static site built with Astro.** It compiles to plain HTML and ships zero JavaScript to the browser. Christopher chose Astro deliberately in July 2026, replacing an earlier hand-written `index.html`. Do not migrate it to another framework, and do not add React, Vue, Svelte, or Tailwind.
- **One page, one file.** The whole site lives in `src/pages/index.astro`: markup plus a single `<style is:global>` block. No component splitting, no separate stylesheet, no layouts directory. If the file grows past roughly 800 lines, ask before splitting.
- **No blog, no second page, no navigation.** The site is one page with one action. Anything that gives the visitor somewhere else to go works against the only job the page has.
- **No JavaScript unless it earns its place.** The page currently needs none beyond the third-party booking embed. Do not add analytics libraries, animation libraries, sliders, or cookie banners.
- **No `localStorage`, `sessionStorage`, or cookies.** Nothing that would require a consent banner.
- **Dependencies:** `astro` only. Do not add npm packages or Astro integrations without asking. External runtime dependencies are Google Fonts (Lora, Inter) and the booking widget embed. That is the whole list.
- **Analytics:** if added, Cloudflare Web Analytics only — free, cookieless, no consent banner required. A placeholder comment marks where the beacon goes.
- **Forms:** if a contact form is ever needed, use Formspree or a Cloudflare Pages Function. No backend exists.
- **Build:** `npm run build` outputs static files to `dist/`. That is what Cloudflare Pages serves.

---

## 8. How to work in this repo

- **Small, single-purpose changes.** One concern per commit and per PR.
- **Never rewrite sections that weren't asked about.** If you notice something else worth fixing, mention it in the PR description instead of changing it.
- **Say what changed and why** in plain language, not just a diff summary. Christopher reviews on a phone.
- **Preserve the placeholders.** `src="christopher.jpg"` in the hero and the booking-widget container are intentional slots. Don't replace them with stock images or remove them.
- **When adding a section**, match the existing rhythm: `<section>` with a top border, `.wrap` container, `h2`, and either `.narrow` prose or a `.cards` grid.
- **Numbered lists are only for real sequences.** The "What happens" steps are numbered because they occur in order. Do not add decorative 01/02/03 markers elsewhere.
- **Don't add sections speculatively.** No testimonials until real testimonials exist. No logo bars until there are logos to show. No statistics that haven't been verified.
- If a request would break a rule in this file, flag it and ask rather than silently complying or silently refusing.

---

## 9. Out of scope for this site

Christopher runs a second, quieter track: embedded technical work for larger nonprofits with staff and compliance obligations. That work is sold person to person with its own one-page document. **None of it belongs on this website** — its language would repel the grassroots founder on sight.

Keep off this site: HIPAA, GLBA, PII, compliance, cybersecurity audits, CRM migration, Salesforce, board governance, capacity building, IT modernization, procurement.

---

## 10. Claims that must stay off the site

These are either unverified or legally sensitive. Do not add them, and remove them if they appear.

- Any promise that a grant will cover the cost, or that the service is free to the organization. No client has ever paid because of a grant; that model is untested.
- HIPAA, GLBA, or other regulatory compliance capability claims.
- Specific outcome metrics ("reclaim 8 hours a week," "increase donations by X%") that haven't been measured.
- Client names, logos, or quotes without written permission.
- Certifications, LLC status, DBA registration, UEI, or CAGE codes that are not yet actually granted. The LLC and DBA were still in formation as of July 2026. List nothing as "pending" that has no application on file.
- Anything about cryptocurrency, tokens, or blockchain other than the FAQ's explicit denial.

---

## 11. Deploy

Merging to `main` triggers an automatic Cloudflare Pages deploy, live in under a minute. Build command `npm run build`, output directory `dist`. If something breaks, roll back to the previous deployment in the Cloudflare Pages dashboard rather than trying to hotfix under pressure.

Before merging any change, confirm: does it read cleanly at 375px width, is all text 18px or larger, does every color pair meet the ratios in §5, and would a 68-year-old understand every word.

---

## 12. Landing page standard

A research-backed landing page standard governs page structure alongside this file. Where the two disagree, **this file wins**. The resolved conflicts:

| Standard says | This project does | Why |
|---|---|---|
| Tier 1 testimonial required above the fold | No testimonials at all | §8 and §10. None exist yet with written permission. |
| First-person CTA ("Start my free briefing") | "Request Your Free Briefing" | §4 locked copy. |
| Felt-problem headline naming the visitor's pain | The locked headline | §3 bans negative framing about him. §4 locks it. |
| Never show price before value is established | Price sits in the hero | He decides alone, at a kitchen table. The number early is the trust signal. |
| Use specific statistics for credibility | Only verifiable numbers | §10. $3,000/month, every Friday, 15 minutes. Nothing unmeasured. |

Where they agree, follow the stricter rule: one page and one action, no navigation, a booking link instead of a contact form, under 3 seconds on mobile, and no autoplay video. The standard's own research figures are internal reasoning only. None of them go on the page.
