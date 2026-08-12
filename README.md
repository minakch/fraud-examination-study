# CFE Exam Prep — Fraud Examination Study Platform

*A self-study project for the ACFE Certified Fraud Examiner exam. Not affiliated with or endorsed by the ACFE.*

A single-file, self-contained study and case-tracking platform built while preparing for the ACFE **Certified Fraud Examiner (CFE)** exam. What started as a set of study notes grew, over several sessions, into a small working platform: part exam-prep tool, part case-management sandbox, part portfolio piece for fraud-examination / AML-KYC roles.

No backend, no build step, no dependencies beyond a CDN copy of Tailwind. Everything lives in `index.html` and runs straight in the browser. User-entered data (practice cases, quiz history, checklist progress) is kept in the browser's `localStorage` — nothing is sent anywhere, and the repo itself contains no personal or case-specific data.

Dark theme by default — a calm, muted palette (near-black background, soft gold and blue accents, IBM Plex Serif headings) rather than a flashy neon dashboard; a light mode is available via the 🌙/☀️ toggle in the header.

## Why this exists

The ACFE CFE exam covers four areas — Financial Transactions & Fraud Schemes, Law, Investigation, and Fraud Prevention & Deterrence — through mostly static, text-heavy prep material. This project turns that material into something interactive: browsable scheme cards instead of a PDF, a quiz that tracks weak areas instead of a one-off practice test, a network graph that shows how schemes, real cases, and practice-case entities connect instead of a flat list.

It's also meant to double as a portfolio artifact: for someone targeting AML/KYC/fraud-examiner roles, it demonstrates both domain knowledge (the ACFE Fraud Tree, real interviewing methodology, forensic technique) and the ability to build a clean, working tool from scratch.

## What's inside

| Section | Content |
|---|---|
| **Schemes** | 27 fraud scheme cards + 3 exam-module tutorials, grouped by the ACFE's 3 real exam sections (not 4 — Law and Investigation were merged into one section in the current exam) |
| **Real Cases** | 14 in-depth case studies of major fraud cases (Enron, WorldCom, and others), each with what happened / how it was caught / detection techniques used / the CFE-relevant takeaway |
| **Investigation** | 30 modules — interviewing methodology (PEACE model, Wicklander-Zulawski, Cognitive Interview, Strategic Use of Evidence, admission-seeking interviews, written statements), documents & digital evidence, financial analysis techniques, legal & reporting, forensic technique, and covert-investigation OPSEC |
| **Prevention** | 10 modules on internal controls, culture & ethics, and anti-fraud programs & tools |
| **Fraud Tree** | The full official ACFE Occupational Fraud Classification System — all three branches (Corruption, Asset Misappropriation, Financial Statement Fraud), down to individual scheme leaves, each with its own definition. A 4th, non-official branch ("Non-Financial Misstatements") is added and clearly marked as an extension, not part of the ACFE original |
| **Glossary** | ~70 searchable terms across ACFE framework, fraud schemes, accounting/audit, legal/compliance, investigation technique, and EU regulatory categories |
| **Quiz** | Auto-generated from the glossary and scheme data, weighted to match the real exam's section proportions (120/120/70 questions, 2.5h/2.5h/1.5h). Tracks per-topic weak areas in `localStorage` after repeated misses and surfaces a "needs review" list |
| **My Cases** | A local CRUD tracker for practice investigations — title, group, status, related codes/people/companies, notes, and a per-scheme-group investigation checklist. Includes an audit log of create/update/delete actions |
| **Network** | A force-directed SVG graph linking the 27 schemes, the real cases, and any people/companies entered into My Cases — a visual map of how the practice material connects |
| **Timeline** | Chronology combining the real case studies and user-entered practice cases |
| **Pro Track** | Career-stage guidance (daily ops, case work, analytics, reporting, tools, career progression) plus a "day in the life of a fraud analyst" checklist — first-week onboarding, daily/weekly/monthly routines, and toolkit — a combined study map for what the job actually looks like day to day |

A global search bar in the header searches across schemes, cases, glossary, and practice-case data at once.

## Running it

Open `index.html` in any modern browser. No install, no server, no build step.

## Stack

Vanilla HTML/CSS/JS. Tailwind CSS via CDN for styling. Inline SVG (Pointer Events + `setPointerCapture` for reliable dragging) for the network graph. No frameworks, no bundler.

## Feedback

This is a self-study project, built and reviewed by one person — corrections are welcome, especially from anyone with hands-on fraud examination or AML/compliance experience. If you spot something inaccurate or outdated, please [open an issue](../../issues).

## How this was built

The code was built with AI-assisted development (Claude). My role was directing the build and owning every product and content decision: what the exam-prep structure should cover, which fraud-examination and interviewing methodologies to include (and how to describe them accurately), how the content should be organized across sections, and reviewing the result for correctness and scope — including cutting redundant sections and catching content that shouldn't be public before publishing. This is a self-study project, not official ACFE material.
