# CLAUDE.md

Project instructions for theweb3family.com. Read this fully before changing anything. These are rules, not suggestions. If a request conflicts with something here, say so and ask before proceeding.

---

## 1. The project

A marketing site for **The Web3 Family**, operated by **Christopher Clarke** in Inglewood, California. Built to grow past one page, on purpose.

The business: Christopher works with people who started a nonprofit after a full career in something else. Two hours a week, on a standing call, turns into something finished every Friday: a page, a sheet, a video, whatever that week's work calls for. Flat $3,000 a month, month to month, no contract.

The homepage has exactly one job: get the right visitor to book a 15 minute call. Every change should make that easier, clearer, or more legible. Every other page carries the same design system and the same restraint, even once there are more of them.

**Hosting:** Vercel, deploying automatically from this repo's main branch. Vercel runs `npm run build` and serves `_site`.
**Files:** built with Eleventy. `src/` holds every page and the shared layout; `src/_includes/base.njk` is the one header, footer, and `<head>` every page uses; `src/styles.css` is the one design system every page shares. See section 9.

---

## 2. Who reads this page

This is the most important section, because it invalidates most default web design instincts.

**A founder aged roughly 60 to 90.** Usually a man. He spent thirty or forty years building a career somewhere else, in trades, ministry, education, law enforcement, corporate work, the military, or medicine. He recently started a grassroots nonprofit. He is retired or semi retired with stable income. The organization is pre launch to about three years old, often with no paid staff.

He is not a beginner at anything except the internet.

**He reads on a phone**, top to bottom, in order, without skipping ahead. He will not scan for the price, so anything buried reads as hidden.

**He decides alone.** No board vote, no procurement, no RFP.

**His currency is time.** Money arrives reliably. Years do not.

**What he is not:** stupid, fragile, or a charity case. He built more in his life than most people who will condescend to him about technology. The page fails the moment it treats him as behind rather than new.

---

## 3. Design direction

The page should feel like a well made letter from a competent person. Editorial and printed, not startup. Someone who makes things for a living made this page, and it should show, quietly.

**Do:**
- Generous whitespace. Let sections breathe. Crowding reads as cheap.
- Real size contrast between headline and body. A headline should feel like a headline.
- Left aligned text everywhere. Centered body copy is harder to track for aging eyes.
- Thin horizontal rules between sections. Structure by division, not by boxes everywhere.
- Warm paper background with near black text. It should feel like good stock, not a screen.
- One accent color, used rarely. When orange appears, it means act.
- Vertical rhythm that repeats. Consistent spacing above and below every section.
- Lora for headings, Inter for body. Two typefaces, no more.
- The portrait is the only photograph on the page. It carries all the human weight.

**Do not:**
- Gradients, glassmorphism, blurred backgrounds, or heavy drop shadows.
- Icon sets. Checkmarks and numbers only.
- Stock photography of any kind. It destroys trust with this reader faster than bad copy.
- Animation on scroll, parallax, or anything that moves while reading.
- Cards inside cards, or boxes around everything.
- Dark mode. The warm background is the brand.
- Full width text. Cap line length around 62 characters.

The test: would this look out of place printed and handed to someone? If yes, reconsider.

---

## 4. Voice and copy rules

The plain spoken voice is the positioning. Do not punch it up, polish it, or make it more compelling. Every adjective added drifts it toward agency speak, which is the failure this site was rebuilt to escape.

**Never use:**
- The word "Web3" in a headline or above the fold. It reads as crypto to this reader. It stays in the logo, the company name, and the FAQ answer.
- Jargon: fractional CTO, tech debt, full stack, optimization, conversion, funnel, scale, leverage as a verb, synergy, solutions, seamless, robust, cutting edge, digital transformation, impact assets.
- Age labels: second act, senior, older, silver, boomer, retiree. He should recognize himself, never be labeled.
- Negative framing about his current setup: your site is broken, stop leaking donations, outdated, you are losing money. Any tension belongs on the internet as the problem, never on him.
- Agency comparisons: unlike traditional agencies, without six month delays, agency prices. He was never going to hire an agency.
- Compliance and procurement language: micro purchase threshold, 2 CFR 200, single signature authority, board approval, RFP. He has no board.
- Bypass, workaround, or get around anything.
- Em dashes. Use periods, commas, or colons.
- Pressure tactics: countdown timers, false scarcity, limited spots, book now before.

**Always:**
- Short sentences. Plain words. One idea per sentence.
- Specifics over cleverness. Clear beats memorable.
- Active voice. A button says exactly what happens when it is tapped.
- First person singular. Christopher is one person, not a team. Never "we" or "our team".
- Respect his experience where it is natural. "You spent a career building something."
- Sentence case for buttons and labels.

**The read aloud test:** before any copy change ships, read it aloud imagining an 87 year old hearing it. If a word makes him pause, replace it. If a sentence needs a second read, split it.

---

## 5. Page structure

The order is the argument. Do not reorder blocks without asking.

1. Header. Logo only. No navigation, no social links. Nothing leaves this page except the phone number.
2. Portrait, name, and city. Before any claim. For this reader a real photo of a real person is the largest trust signal on the page.
3. Hero. A two-line headline, one line naming who he works with and what happens every Friday, the price and cadence in one line, the booking button as the one dominant action, the phone number beside it as a small secondary link, and a one-line delivery-record credibility note.
4. The problem, in his words. He will not believe you can help until he believes you understand.
5. What Christopher does. In his own voice, not a bulleted list.
6. The price, plainly. Do not bury it. Missing pricing reads as a trap to this reader.
7. How it works. Four steps, numbered because they happen in order.
8. Proof. Three anonymized client stories, one line each, linking out to their own case study pages. See section 8.
9. Straight answers. The FAQ, which handles his last objections.
10. Last action. Booking widget and phone number.
11. Footer. Name, business name, city, phone, and email. Nothing else, no other links, no social icons.

**Locked copy.** Do not change the headline, the price block, the button text, or the footer without an explicit request from Christopher.

**Naming consistency.** The offer is **a 15 minute call**. The earlier "free briefing" name, and "Digital Intelligence Briefing" before that, are both retired and do not come back. One name everywhere: site, booking widget, emails, documents. The primary booking button and the panel header both read "Book my 15 minute call," first person, since it's the visitor's own words being reflected back to them. The phone number, being a secondary link rather than a button, stays third person: "or call [number]."

---

## 6. Brand tokens

Defined as CSS custom properties in `index.html`. Use the variables, never raw hex, in new code.

| Token | Hex | Use |
|---|---|---|
| `--forest` | `#003223` | Headings, panels, borders, logo ground |
| `--orange` | `#fc4d00` | The call to action, accent rules |
| `--cream` | `#f5ebe1` | Page background |
| `--charcoal` | `#181C1B` | Body text, and text on orange |
| `--cream-deep` | `#ede0d3` | Card and panel fills |
| `--muted` | `#2f3d38` | Small labels, footer |
| `--rust` | `#8f2c00` | Eyebrow labels, step numerals |

**Type:** Lora at 600 and 700 for headings. Inter at 400, 500, 600, 700 for body. Loaded from Google Fonts. Do not add a third typeface.

### Verified contrast ratios

These were computed, not estimated. Any new color pairing must be checked before it ships.

| Pair | Ratio | Status |
|---|---|---|
| Charcoal on cream | 14.62:1 | AAA |
| Forest on cream | 12.06:1 | AAA |
| Muted on cream | 9.67:1 | AAA |
| Rust on cream | 7.06:1 | AAA |
| Charcoal on orange | 5.08:1 | AA, which is why button text is charcoal |
| White on orange | 3.39:1 | **Fails. Never put white text on the orange.** |
| Orange on cream | 2.88:1 | **Fails non text contrast. Orange elements need a forest border.** |

---

## 7. Accessibility

Not compliance theater. For this reader it is the positioning. If he has to squint, the message is that this was not built for him.

- Body text 20px. Never below 18px anywhere, including footer, captions, and button subtext.
- Line height 1.5 minimum.
- Tap targets 48px minimum, 56px and up for primary actions, with 8px between adjacent targets.
- Links underlined by default at 2px thickness, not on hover only.
- Visible keyboard focus on every interactive element.
- No light gray on cream. This was a real reported failure on an earlier version of this site.
- Respect `prefers-reduced-motion`.
- Real alt text on images.
- Design at 375px width first. Desktop is secondary.

---

## 8. Placeholders that are intentional

No slot in `src/index.njk` is waiting on placeholder material anymore. The portrait (`src/christopher.jpg`), the phone number (310-703-6003), the email (christopher@theweb3family.com), and the booking panel (a real Calendly inline embed) are all real.

**Proof.** Points to three real, anonymized case study pages under `src/case-studies/`, built from Christopher's own weekly delivery logs. Names stay off both the homepage cards and the case study pages themselves until each client signs off in writing; that's the deliberate anonymization policy set in the source drafts, not a placeholder waiting on something. Once a client does sign off, that page gets their name, organization, and photo added: it doesn't need a new page built. Don't add a fourth case study or embellish a real one with anything not in the delivery logs.

---

## 9. Technical constraints

- **Built with Eleventy**, deliberately, so a design-system-wide change (a color, a spacing value, the type scale) is one edit instead of one edit per page. That was the entire reason this site moved off a single static file: it started growing past one page. Do not reach for anything heavier (Astro, Next.js, a component framework) without asking. This project already tried Astro twice before landing here.
- `src/_includes/base.njk` is the shared layout: the `<head>`, the header, and the footer. Every page uses it. Do not duplicate the header or footer markup into a page file.
- `src/styles.css` is the one stylesheet every page links. A style that only one page needs still belongs in this file, scoped with a class; do not add a second stylesheet or inline a `<style>` block into a page.
- Ships zero client-side JavaScript beyond the booking embed and Microsoft Clarity (analytics). No animation libraries, sliders, or other analytics tools. Eleventy's job is finished at build time; nothing it does should add a runtime script beyond those two.
- Microsoft Clarity is loaded on every page, by explicit request, even though it sets cookies for session replay and heatmaps. That's a deliberate exception to the site's general no-cookies posture, made knowingly, without a consent banner. Don't add a banner speculatively and don't treat this as license to add other tracking without the same explicit ask.
- Beyond Clarity's cookies, no localStorage, sessionStorage, or other cookies. Nothing else that would require a consent banner.
- External dependencies are Google Fonts, the booking embed, and Microsoft Clarity. That is the whole list of things a visitor's browser talks to. `@11ty/eleventy` is a dev-time dependency only; it never ships to the browser.
- Build: `npm run build` outputs static files to `_site/`. `npm run dev` serves it locally with live reload. There is no other build step and no server at runtime; Vercel serves what Eleventy generates, nothing more.

---

## 10. How to work in this repo

- Small, single purpose changes. One concern per pull request.
- Never rewrite sections that were not asked about. If you notice something else worth fixing, say so in the pull request description instead of changing it.
- Explain what changed and why in plain language. Christopher reviews on a phone.
- When adding a section to a page, match the existing rhythm: a `<section>` with a top border, a `.wrap` container, an `h2`, and either `.split` prose or a `.cards` grid.
- **Adding a new page:** create a file under `src/` with `layout: base.njk` in its front matter, a `title`, and a `description`. The header and footer come along automatically from `base.njk`. Write its sections using the same rhythm as `src/index.njk`. Do not add a navigation link for it anywhere without an explicit conversation first: the whole site is built around having nothing to click but the phone number and the one call to action, and a nav bar undoes that on every page at once, not just the new one.
- **Adding an article:** copy `article-template.md` (repo root) into `src/articles/`, fill in the front matter, write the body in Markdown, done. It appears on `/articles/` and gets its own page automatically, no template edits needed. Every article carries the same header, footer, and a "Book my 15 minute call" button at the end. Articles are not linked from anywhere yet (see the next point): for now they're reachable only by direct URL.
- **`/articles/` has no link pointing at it yet**, on purpose, until there's an explicit decision about how visitors should find it. Do not add one (footer, a homepage mention, anything) without asking first.
- **Case studies** live at `src/case-studies/*.njk`, one hand-written page per client, not a collection like articles: intro, the story, a "what this proves" block, and a weekly delivery log with the most recent six weeks visible and everything earlier behind a native `<details>`/`<summary>` disclosure (no JavaScript). The homepage's Proof section links to all three by name. Follow the same rhythm as the existing three when adding another: reuse the `.prose`, `.log-*`, and `.case-meta` classes in `src/styles.css` rather than inventing new ones.
- Numbered lists are only for real sequences. Do not add decorative numbering elsewhere.
- Do not add sections speculatively. No testimonials until they exist. No logo bars until there are logos. No statistics that have not been verified.
- If a request would break a rule in this file, flag it and ask.

---

## 11. Out of scope for this site

Christopher also does embedded technical work for larger nonprofits with staff and compliance obligations. That is sold person to person with its own document. None of it belongs here, because its language would repel this buyer on sight.

Keep off this site: HIPAA, GLBA, PII, compliance, cybersecurity audits, CRM migration, Salesforce, board governance, capacity building, IT modernization, procurement.

---

## 12. Claims that must stay off the page

- Any promise that a grant will cover the cost, or that the service is free to the organization. No client has ever paid because of a grant. That model is untested.
- Regulatory compliance capability claims of any kind.
- Outcome metrics that have not been measured, such as hours saved or percentage increases in donations.
- Client names or logos without written permission. Anonymized quotes and delivery-log detail are fine (that's how the case studies work), as long as nothing in them identifies who the client is.
- LLC status, DBA registration, certifications, UEI, or CAGE codes that are not yet actually granted. The LLC and DBA were still in formation as of August 2026. List nothing as pending that has no application on file.
- Anything about cryptocurrency, tokens, or blockchain other than the FAQ's explicit denial.

**Coming, but not yet claimable.** Christopher is building interactive knowledge archives, where a founder's recordings and writing become something people can ask questions of. This will eventually be central to the positioning. It does not go on the site until one exists and a client has agreed to it being shown. A brand must deliver before it promotes.

---

## 13. Before merging

Confirm every time:

- Does it read cleanly at 375px width?
- Is all text 18px or larger?
- Does every color pair meet the ratios in section 6?
- Would an 87 year old understand every word?
- Does the page still have exactly one goal and one action?
