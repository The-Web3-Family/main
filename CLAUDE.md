# CLAUDE.md

Project instructions for theweb3family.com. Read this fully before changing anything. These are rules, not suggestions. If a request conflicts with something here, say so and ask before proceeding.

---

## 1. The project

A single page marketing site for **The Web3 Family**, operated by **Christopher Clarke** in Inglewood, California.

The business: Christopher handles the technology for people starting nonprofits. He researches their organization and funding landscape, hands them the findings for free, then builds their website, donation pages, and digital assets for a flat $3,000 a month, delivering finished work every Friday.

The page has exactly one job: get the right visitor to request the free Briefing. Every change should make that easier, clearer, or more legible.

**Hosting:** Vercel, deploying automatically from this repo's main branch.
**Files:** `index.html` is the whole site. One file, no build step.

---

## 2. Who reads this page

This is the most important section, because it invalidates most default web design instincts.

**A founder aged roughly 60 to 75.** Usually a man. He spent thirty or forty years building a career somewhere else, in trades, ministry, education, law enforcement, corporate work, the military, or medicine. He recently started a grassroots nonprofit. He is retired or semi retired with stable income. The organization is pre launch to about three years old, often with no paid staff.

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

**The read aloud test:** before any copy change ships, read it aloud imagining a 68 year old hearing it. If a word makes him pause, replace it. If a sentence needs a second read, split it.

---

## 5. Page structure

The order is the argument. Do not reorder blocks without asking.

1. Header. Logo only. No navigation, no social links. Nothing leaves this page except the phone number.
2. Portrait, name, and city. Before any claim. For this reader a real photo of a real person is the largest trust signal on the page.
3. Headline: **You did the hard part. I'll handle the internet.**
4. Subhead naming what he gets.
5. First action: booking button plus phone button, then a short reassurance line.
6. The problem, in his words. He will not believe you can help until he believes you understand.
7. What Christopher does. Three promises.
8. The price, plainly. Do not bury it. Missing pricing reads as a trap to this reader.
9. How it works. Four steps, numbered because they happen in order.
10. Proof. Currently a comment in the code. See section 8.
11. What is in the free Briefing. Four cards.
12. Straight answers. The FAQ, which handles his last objections.
13. Last action. Booking widget and phone number.
14. Footer. One line.

**Locked copy.** Do not change the headline, the three promises, the price line, the button text, or the footer line without an explicit request from Christopher.

**Naming consistency.** The free research deliverable is called the **Digital Intelligence Briefing**, short form "the Briefing". One name everywhere: site, booking widget, emails, documents. Never introduce a second name for it.

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

Three slots in `index.html` are waiting on real material. Do not fill them with substitutes.

- `src="christopher.jpg"` in the hero. Christopher's headshot goes here.
- The phone number, currently a dummy, appears twice.
- The booking widget container near the bottom.
- **Block 10, proof.** Currently a comment. It stays empty until there is a real testimonial with a full name, organization, photograph, one specific thing that changed, and written permission. Do not fill it with generic praise, credentials, or invented case studies. An empty page is more trustworthy than a vague endorsement.

---

## 9. Technical constraints

- Static site. One `index.html` with an inline `<style>` block. No build step, no bundler, no framework, no npm, no package.json. Do not introduce any of these.
- No JavaScript beyond the third party booking embed. No analytics libraries, animation libraries, sliders, or cookie banners.
- No localStorage, sessionStorage, or cookies. Nothing that would require a consent banner.
- External dependencies are Google Fonts and the booking embed. That is the whole list.
- If analytics are added later, use a cookieless option that needs no consent banner.
- Keep everything in one file unless it passes roughly 800 lines, then ask before splitting.

---

## 10. How to work in this repo

- Small, single purpose changes. One concern per pull request.
- Never rewrite sections that were not asked about. If you notice something else worth fixing, say so in the pull request description instead of changing it.
- Explain what changed and why in plain language. Christopher reviews on a phone.
- When adding a section, match the existing rhythm: a `<section>` with a top border, a `.wrap` container, an `h2`, and either prose or a `.cards` grid.
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
- Client names, logos, or quotes without written permission.
- LLC status, DBA registration, certifications, UEI, or CAGE codes that are not yet actually granted. The LLC and DBA were still in formation as of August 2026. List nothing as pending that has no application on file.
- Anything about cryptocurrency, tokens, or blockchain other than the FAQ's explicit denial.

**Coming, but not yet claimable.** Christopher is building interactive knowledge archives, where a founder's recordings and writing become something people can ask questions of. This will eventually be central to the positioning. It does not go on the site until one exists and a client has agreed to it being shown. A brand must deliver before it promotes.

---

## 13. Before merging

Confirm every time:

- Does it read cleanly at 375px width?
- Is all text 18px or larger?
- Does every color pair meet the ratios in section 6?
- Would a 68 year old understand every word?
- Does the page still have exactly one goal and one action?
