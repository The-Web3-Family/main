<!-- .github/PULL_REQUEST_TEMPLATE.md -->
## ⚡ Executive Summary
<!-- Provide a strict 2-sentence What & Why. Do not exceed two sentences. -->
**What:** 
**Why:** 

---

## 🤖 AI Sanity & Collateral Audit
<!-- Mandatory check for all AI-assisted code generations (Claude Code, Cursor, Copilot). -->
* **AI Orchestrator / Model:** `[e.g., Claude Code / Claude 3.7 Sonnet]`
* **Prompt Scope Target:** `[e.g., app/components/billing]`

- [ ] **Unexpected File Edits:** Audited the full diff; the AI **did not** touch files outside the target scope or revert uncommitted human changes.
- [ ] **Zero Hallucinated Dependencies:** Checked `package.json`; no unrequested, non-existent, or deprecated `npm` packages were added.
- [ ] **Secret Hygiene:** Verified zero hardcoded API keys, bearer tokens, or local environment paths exist in the diff.
- [ ] **Environment Sync:** All new `.env` variables are documented in `.env.example` and mirrored to deployment preview settings.

---

## 🏷️ Change Classification
- [ ] **Feature:** New functionality or client deliverable.
- [ ] **Bugfix:** Patching an existing defect or regression.
- [ ] **Refactor / AI Batch:** Structural cleanup or multi-file AI update.

---

## 📱 Visual Proof & Verification
<!-- Required for UI changes. Delete if backend/infra only. -->
| Desktop View (1440px) | Mobile View (390px) |
| :--- | :--- |
| <!-- Paste Desktop Screenshot --> | <!-- Paste Mobile Screenshot --> |

* **Interactive Recording / Walkthrough (Loom/Video):** `[Insert Link]`

---

<details>
<summary><b>🐞 Bugfix Context (Expand if applicable)</b></summary>

* **Ticket / Sentry Reference:** `[Link / ID]`
* **Root Cause:** 
* **Remediation & Rollback Plan:** 
</details>

---

## 🛡️ Pre-Merge Quality Gate
- [ ] **Ephemeral Build Passed:** Vercel/Cloudflare preview deployment compiled and passes sanity checks without runtime console errors.
- [ ] **Device & Responsive Check:** Tested manually across mobile (390px) and desktop (1280px+) viewports.
- [ ] **Typecheck & Linter Passed:** Local static analysis (`pnpm tsc --noEmit` / `eslint`) exited with zero errors.
