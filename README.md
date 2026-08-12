# CFE Portfolio

A single-file, self-contained study and case-tracking platform built while preparing for the ACFE Certified Fraud Examiner (CFE) exam.

Dark-themed (Palantir Blueprint-inspired) UI, no build step, no backend — everything runs from `index.html` in the browser, with user data (My Cases, network graph, quiz progress) persisted to `localStorage`.

## Features

- **Schemes** — 27 fraud scheme cards + 3 exam-module tutorials, organized by the 3 real CFE exam sections (Financial Transactions & Fraud Schemes / Investigation / Fraud Prevention & Deterrence)
- **Real Cases** — case studies of major fraud cases (Enron, WorldCom, etc.) with what happened / how it was caught / detection techniques / CFE takeaways
- **Investigation** — 30 modules covering interviewing methodology (PEACE model, Wicklander-Zulawski, Cognitive Interview, Strategic Use of Evidence), documents & digital evidence, financial analysis, legal & reporting, forensic technique
- **Prevention** — internal controls, culture & ethics, programs & tools
- **Fraud Tree** — the full official ACFE Fraud Tree (~62 leaves across Corruption / Asset Misappropriation / Financial Statement Fraud)
- **Glossary** — searchable glossary of ACFE/fraud-examination terminology
- **Quiz** — auto-generated questions weighted to match real exam section weights, with a weak-areas tracker
- **My Cases** — local CRUD tracker for practice investigations, with per-case checklists
- **Network** — force-directed graph linking schemes, cases, and people/companies pulled from My Cases
- **Timeline**, **Shadowing checklist**, **Pro Track** — supporting study tools

## Running it

Just open `index.html` in a browser. No dependencies, no build.

## Stack

Vanilla HTML/CSS/JS, Tailwind (CDN), inline SVG for the network graph.
