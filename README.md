# Fraud Examination Study Platform, inspired by ACFE

*A self-study project for the ACFE Certified Fraud Examiner exam. Not affiliated with or endorsed by the ACFE.*

A self-contained study platform built while preparing for the ACFE **Certified Fraud Examiner (CFE)** exam. What started as a set of study notes grew, over several sessions, into a small working platform: part exam-prep tool, part portfolio piece for fraud-examination / AML-KYC roles.

No backend, no build step, no dependencies beyond a CDN copy of Tailwind and two Google Fonts. The app is split across `index.html` (markup), `app.js` (application logic), `data.js` (all study content), and `styles.css`, and runs straight in the browser. User progress (quiz history, bookmarks, checklist state) is kept in the browser's `localStorage` — nothing is sent anywhere, and the repo itself contains no personal or case-specific data.

Dark theme by default — a calm, muted palette (near-black background, soft gold and blue accents, IBM Plex Serif headings) rather than a flashy neon dashboard; a light mode is available via the 🌙/☀️ toggle in the header.

## Why this exists

The ACFE CFE exam covers four areas — Financial Transactions & Fraud Schemes, Law, Investigation, and Fraud Prevention & Deterrence — through mostly static, text-heavy prep material. This project turns that material into something interactive: browsable scheme cards instead of a PDF, a quiz that tracks weak areas instead of a one-off practice test, and forensic-analytics tools (Benford's Law, a fraud-risk calculator, a chain-of-custody generator) instead of a flat list of definitions.

It's also meant to double as a portfolio artifact: for someone targeting AML/KYC/fraud-examiner roles, it demonstrates both domain knowledge (the ACFE Fraud Tree, real interviewing methodology, forensic technique) and the ability to build a clean, working tool from scratch.

## What's inside

| Section | Content |
|---|---|
| **Schemes & Fraud Tree** | 30 fraud scheme cards in a searchable master-detail catalog, plus the full official ACFE Occupational Fraud Classification System — all three branches (Corruption, Asset Misappropriation, Financial Statement Fraud) down to individual scheme leaves. A 4th, non-official branch ("Non-Financial Misstatements") is added and clearly marked as an extension, not part of the ACFE original |
| **Wall of Infamy (Real Cases)** | 15 in-depth case studies of major fraud cases (Enron, WorldCom, and others), each with what happened / how it was caught / detection techniques used / the CFE-relevant takeaway |
| **Law & Ethics** | Statutes, evidence & FRE rules, constitutional rights, and the ACFE Code of Ethics, in a searchable master-detail layout |
| **Investigation** | Interviewing methodology (PEACE model, Wicklander-Zulawski, Cognitive Interview, Strategic Use of Evidence, admission-seeking interviews, written statements), documents & digital evidence, financial analysis techniques, legal & reporting, and forensic technique |
| **Prevention** | Internal controls, culture & ethics, and anti-fraud programs & tools |
| **Forensic Lab** | Interactive tools: a Benford's Law first-digit analyzer (with a custom-data sandbox), a Fraud Triangle / red-flag risk calculator, a chain-of-custody receipt generator, and a "Ghost Vendor" case-investigation simulator |
| **Exam & Flashcards** | A practice exam auto-generated from the glossary and scheme data, weighted to match the real exam's 3 section proportions (120/120/70 questions), plus a 3D flashcard trainer. Tracks per-topic weak areas in `localStorage` after repeated misses |
| **Glossary** | Searchable terms across the ACFE framework, fraud schemes, accounting/audit, legal/compliance, investigation technique, and EU regulatory categories |
| **Bookmarks** | Quick-revision list of schemes and cases starred for exam review |

A command palette (Ctrl+K) searches across schemes, cases, tools, and glossary at once.

## Running it

Open `index.html` in any modern browser. No install, no server, no build step.

## Stack

Vanilla HTML/CSS/JS, split across `index.html`, `app.js`, and `data.js`. Tailwind CSS via CDN for styling. No frameworks, no bundler.

## Feedback

This is a self-study project, built and reviewed by one person — corrections are welcome, especially from anyone with hands-on fraud examination or AML/compliance experience. If you spot something inaccurate or outdated, please [open an issue](../../issues).

## How this was built

The code was built with AI-assisted development. My role was directing the build and owning every product and content decision: what the exam-prep structure should cover, which fraud-examination and interviewing methodologies to include (and how to describe them accurately), how the content should be organized across sections, and reviewing the result for correctness and scope — including cutting redundant sections and catching content that shouldn't be public before publishing. This is a self-study project, not official ACFE material.
