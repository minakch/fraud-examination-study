/**
 * Fraud Examination Platform — Complete Data Store
 * Contains all official ACFE taxonomies, 27 detailed schemes, real case studies,
 * investigation techniques, prevention frameworks, glossary, and shadowing roadmaps.
 */
const portfolioData = [

    // ── ASSET MISAPPROPRIATION ─────────────────────────────────────
    {
        id: 1, type: "case", schemeGroup: "AM", code: "AM1",
        category: "Asset Misappropriation",
        title: "Cash Theft by Cyberfraud — Phishing Attack",
        description: "Professional fraudsters use phishing to harvest an organization's online banking credentials and drain corporate accounts.",
        date: "ACFE RMT",
        content: `
            <p><strong>Definition:</strong> Criminals send convincing phishing emails impersonating the company's bank or IT team to steal online banking login credentials, then initiate unauthorized wire transfers.</p>
            <h4 class="text-pl-neon-pink">Red Flags</h4>
            <ul class="red">
                <li>Unexpected wire transfers to unfamiliar beneficiaries</li>
                <li>New payees added to online banking without dual authorization</li>
                <li>Login attempts from unusual IP addresses or geographies</li>
                <li>Emails from "the bank" requesting credentials or OTP codes</li>
                <li>Bank balance drops not matching AP records</li>
            </ul>
            <h4 class="text-pl-neon-green">Detection Techniques</h4>
            <ul class="detect">
                <li>Reconcile bank statements to authorized wire transfer approvals daily</li>
                <li>Review online banking access logs — flag foreign IP logins</li>
                <li>Implement dual-control: two approvals required for any wire over threshold</li>
                <li>Audit new payee additions — who added them and when</li>
                <li>Conduct phishing simulation tests on finance staff quarterly</li>
            </ul>
            <h4 class="text-pl-neon-amber">CFE Exam Tip</h4>
            <ul class="tip">
                <li>This is classified under <em>Cash Larceny</em> + <em>Technology-Enabled Fraud</em></li>
                <li>Key control: segregation of duties between wire initiator and approver</li>
                <li>ACFE Fraud Tree: Asset Misappropriation → Cash → Larceny</li>
            </ul>
        `
    },
    {
        id: 2, type: "case", schemeGroup: "AM", code: "AM2",
        category: "Asset Misappropriation",
        title: "Billing Scheme — Phony Vendor Invoices",
        description: "Employee creates fictitious vendor accounts and submits invoices for goods or services that were never delivered.",
        date: "ACFE RMT",
        content: `
            <p><strong>Definition:</strong> The perpetrator establishes shell companies or fictitious vendor names, registers them in the AP system, and submits invoices that get paid through the normal disbursement cycle.</p>
            <h4 class="text-pl-neon-pink">Red Flags</h4>
            <ul class="red">
                <li>Vendor address matches an employee's home address</li>
                <li>Vendor registered at a PO Box with no phone number or web presence</li>
                <li>New vendor receives large payments immediately after setup</li>
                <li>Invoices with sequential numbers (printed by one person)</li>
                <li>Single employee is sole contact/approver for a vendor</li>
                <li>Vendor incorporated the same week they received their first invoice</li>
            </ul>
            <h4 class="text-pl-neon-green">Detection Techniques</h4>
            <ul class="detect">
                <li>Cross-match vendor master file addresses against employee address records</li>
                <li>Flag vendors with no tax ID, phone, or verifiable web presence</li>
                <li>Analyze vendors approved by a single employee with no secondary review</li>
                <li>Search for duplicate vendor names, addresses, bank accounts</li>
                <li>Review vendors added and paid within same accounting period</li>
                <li>Confirm services with department heads — did they receive anything?</li>
            </ul>
            <h4 class="text-pl-neon-amber">CFE Exam Tip</h4>
            <ul class="tip">
                <li>Most common form of billing scheme — high exam frequency</li>
                <li>Key control: independent vendor setup process, separated from AP payment</li>
                <li>ACFE Fraud Tree: Asset Misappropriation → Fraudulent Disbursements → Billing Schemes</li>
            </ul>
        `
    },
    {
        id: 3, type: "case", schemeGroup: "AM", code: "AM3",
        category: "Asset Misappropriation",
        title: "Theft or Diversion of Inventory",
        description: "Employees steal or redirect physical inventory for personal use or to sell externally.",
        date: "ACFE RMT",
        content: `
            <p><strong>Definition:</strong> An employee removes inventory from the warehouse or production floor without authorization, or diverts incoming shipments before they are logged into the system.</p>
            <h4 class="text-pl-neon-pink">Red Flags</h4>
            <ul class="red">
                <li>Unexplained inventory shrinkage on physical counts</li>
                <li>High volume of write-offs or "damaged goods" adjustments</li>
                <li>Discrepancies between purchase orders, receiving reports, and stock records</li>
                <li>Missing or altered receiving documentation</li>
                <li>Employee lifestyle inconsistent with salary (driving new car, expensive items)</li>
            </ul>
            <h4 class="text-pl-neon-green">Detection Techniques</h4>
            <ul class="detect">
                <li>Conduct surprise physical inventory counts — compare to perpetual records</li>
                <li>Analyze inventory adjustment entries: who posts them, frequency, amounts</li>
                <li>Match receiving reports to POs — look for quantity discrepancies</li>
                <li>Review inventory turnover ratios for anomalies by SKU or location</li>
                <li>Install CCTV in warehouse; review access logs</li>
                <li>Verify "damaged goods" disposals with independent witness</li>
            </ul>
            <h4 class="text-pl-neon-amber">CFE Exam Tip</h4>
            <ul class="tip">
                <li>Inventory theft often involves collusion with receiving staff</li>
                <li>Key control: independent receiving function + regular cycle counts</li>
                <li>ACFE Fraud Tree: Asset Misappropriation → Non-Cash → Inventory</li>
            </ul>
        `
    },
    {
        id: 4, type: "case", schemeGroup: "AM", code: "AM4",
        category: "Asset Misappropriation",
        title: "Check Tampering & Expense Reimbursement Schemes",
        description: "Employees alter checks or submit fraudulent expense reports to obtain unauthorized payments from the organization.",
        date: "ACFE RMT",
        content: `
            <p><strong>Definition:</strong> Covers two related schemes: (1) physical alteration of checks (payee name, amount) and (2) submission of fictitious, inflated, or duplicate expense reimbursement claims.</p>
            <h4 class="text-pl-neon-pink">Red Flags</h4>
            <ul class="red">
                <li>Checks payable to "cash" or made out to the employee directly</li>
                <li>Alterations visible on cancelled checks (ink difference, white-out)</li>
                <li>Expense reports with missing or generic receipts</li>
                <li>Round-dollar expense amounts without detail</li>
                <li>Same expense submitted twice across different reports</li>
                <li>Personal expenses disguised as business costs</li>
            </ul>
            <h4 class="text-pl-neon-green">Detection Techniques</h4>
            <ul class="detect">
                <li>Review cancelled check images — inspect payee name and amount for alterations</li>
                <li>Compare payee on check to vendor master file name</li>
                <li>Run duplicate detection on expense submissions (same date, amount, vendor)</li>
                <li>Verify receipts against credit card statements where applicable</li>
                <li>Benchmark employee expense totals vs. peers in same role</li>
                <li>Require original receipts over policy threshold</li>
            </ul>
            <h4 class="text-pl-neon-amber">CFE Exam Tip</h4>
            <ul class="tip">
                <li>Check tampering = one of the highest-dollar asset misappropriation schemes</li>
                <li>Key control: positive pay service with bank; dual signatures on checks over threshold</li>
                <li>ACFE Fraud Tree: Asset Misappropriation → Fraudulent Disbursements → Check Tampering / Expense Reimbursements</li>
            </ul>
        `
    },
    {
        id: 5, type: "case", schemeGroup: "AM", code: "AM5",
        category: "Asset Misappropriation",
        title: "Cash Skimming",
        description: "Employee diverts cash receipts before they are recorded in the accounting system — the theft never appears in the books.",
        date: "ACFE RMT",
        content: `
            <p><strong>Definition:</strong> Skimming is an off-book fraud: cash is stolen before it enters the accounting system, so there is no direct record of the theft. It is one of the hardest schemes to detect.</p>
            <h4 class="text-pl-neon-pink">Red Flags</h4>
            <ul class="red">
                <li>Declining cash revenue trend without business explanation</li>
                <li>Customer complaints that payments were not credited to their account</li>
                <li>Gaps or missing numbers in receipt sequences</li>
                <li>High volume of voided or refunded transactions by one cashier</li>
                <li>Cash register shortages consistently from the same employee</li>
            </ul>
            <h4 class="text-pl-neon-green">Detection Techniques</h4>
            <ul class="detect">
                <li>Analytical review: compare revenue per period to prior periods and budget</li>
                <li>Confirm payments directly with customers — did they pay but not get credited?</li>
                <li>Review voided/refund transactions: who initiated them and when</li>
                <li>Check receipt sequence continuity — are there missing numbers?</li>
                <li>Surprise cash counts and reconcile to register tapes</li>
                <li>Compare deposits to sales records on a daily basis</li>
            </ul>
            <h4 class="text-pl-neon-amber">CFE Exam Tip</h4>
            <ul class="tip">
                <li>Skimming = off-book; larceny = on-book (cash already recorded then stolen)</li>
                <li>Key control: separation of cash handling from recordkeeping</li>
                <li>ACFE Fraud Tree: Asset Misappropriation → Cash → Skimming</li>
            </ul>
        `
    },

    // ── CORRUPTION ────────────────────────────────────────────────
    {
        id: 6, type: "case", schemeGroup: "IAC", code: "IAC1",
        category: "Corruption",
        title: "Bribery of Governmental Officials",
        description: "Payments made to government officials to obtain favorable treatment, contracts, licenses, or regulatory approvals.",
        date: "ACFE RMT",
        content: `
            <p><strong>Definition:</strong> Offering, promising, or giving anything of value to a government official to influence their official actions — a violation of anti-bribery laws (FCPA, UK Bribery Act, local statutes).</p>
            <h4 class="text-pl-neon-pink">Red Flags</h4>
            <ul class="red">
                <li>Payments to vaguely described "consultants" or "facilitators" in high-risk jurisdictions</li>
                <li>Third-party intermediaries used for all government-facing transactions</li>
                <li>Unusually rapid approvals, permits, or contract awards</li>
                <li>Consultant fees not tied to any verifiable deliverable</li>
                <li>Cash payments or payments through unrelated third parties</li>
            </ul>
            <h4 class="text-pl-neon-green">Detection Techniques</h4>
            <ul class="detect">
                <li>FCPA/anti-bribery risk assessment: map all government touchpoints</li>
                <li>Review third-party due diligence files for agents and consultants</li>
                <li>Analyze disbursements in high-risk countries — match to contracts</li>
                <li>Interview business unit managers on permit/approval processes</li>
                <li>Review gifts and entertainment expense reports in government-facing roles</li>
                <li>Confirm consultant deliverables — what was actually produced?</li>
            </ul>
            <h4 class="text-pl-neon-amber">CFE Exam Tip</h4>
            <ul class="tip">
                <li>FCPA applies to US issuers and companies operating in the US, even for acts abroad</li>
                <li>Key concept: <em>facilitation payments</em> are FCPA exception but banned under UK Bribery Act</li>
                <li>ACFE Fraud Tree: Corruption → Bribery → Government Officials</li>
            </ul>
        `
    },
    {
        id: 7, type: "case", schemeGroup: "IAC", code: "IAC2",
        category: "Corruption",
        title: "Conflicts of Interest — Undisclosed Related-Party Transactions",
        description: "An employee has an undisclosed financial relationship with a vendor, customer, or competitor that influences their business decisions.",
        date: "ACFE RMT",
        content: `
            <p><strong>Definition:</strong> An employee fails to disclose a personal financial interest in a third party that they deal with on behalf of the organization, steering business to benefit themselves at the organization's expense.</p>
            <h4 class="text-pl-neon-pink">Red Flags</h4>
            <ul class="red">
                <li>Vendor or customer address/phone matches employee's personal details</li>
                <li>Contracts awarded to a vendor without competitive bidding process</li>
                <li>Employee's lifestyle visibly exceeds their documented salary</li>
                <li>Employee resists audits or discourages scrutiny of a specific vendor</li>
                <li>Unusually favorable contract terms for one supplier</li>
            </ul>
            <h4 class="text-pl-neon-green">Detection Techniques</h4>
            <ul class="detect">
                <li>Cross-match vendor/customer database against employee personal data (address, SSN, relatives)</li>
                <li>Review conflict of interest disclosure forms — are they current and complete?</li>
                <li>Analyze sole-source contract justifications — are they documented and reasonable?</li>
                <li>Examine pricing on key contracts vs. market rates</li>
                <li>Interview departing employees as part of exit process</li>
                <li>Run social network analysis on vendor ownership vs. employees</li>
            </ul>
            <h4 class="text-pl-neon-amber">CFE Exam Tip</h4>
            <ul class="tip">
                <li>Conflict of interest ≠ always illegal, but undisclosed = fraud</li>
                <li>Key control: annual COI disclosure program with HR follow-up</li>
                <li>ACFE Fraud Tree: Corruption → Conflicts of Interest</li>
            </ul>
        `
    },
    {
        id: 8, type: "case", schemeGroup: "IAC", code: "IAC3",
        category: "Corruption",
        title: "Commercial Bribery & Illegal Gratuities",
        description: "Payments or gifts given to private-sector employees to influence their business decisions in favor of the payer.",
        date: "ACFE RMT",
        content: `
            <p><strong>Definition:</strong> Commercial bribery = something of value given before a decision to influence it. Illegal gratuity = something given after a decision as a reward. Both corrupt the business relationship.</p>
            <h4 class="text-pl-neon-pink">Red Flags</h4>
            <ul class="red">
                <li>Gifts or entertainment to buyers exceeding policy limits</li>
                <li>Vendor selection with no documented competitive justification</li>
                <li>Close personal relationship between a buyer and a specific vendor rep</li>
                <li>Vendor inviting employees to expensive trips or events</li>
                <li>Purchases always routed through one specific supplier despite alternatives</li>
            </ul>
            <h4 class="text-pl-neon-green">Detection Techniques</h4>
            <ul class="detect">
                <li>Review and audit gifts & entertainment expense reports — flag policy violations</li>
                <li>Interview procurement staff: how are vendors selected and evaluated?</li>
                <li>Analyze vendor concentration — does one supplier get disproportionate share?</li>
                <li>Maintain anonymous tip hotline (ACFE studies show tips catch most corruption)</li>
                <li>Rotate purchasing staff to disrupt entrenched vendor relationships</li>
            </ul>
            <h4 class="text-pl-neon-amber">CFE Exam Tip</h4>
            <ul class="tip">
                <li>Bribery = proactive (to influence); gratuity = retroactive (as reward)</li>
                <li>Key control: gifts policy + mandatory reporting of anything above threshold</li>
                <li>ACFE Fraud Tree: Corruption → Bribery → Commercial Bribery / Illegal Gratuities</li>
            </ul>
        `
    },

    // ── FINANCIAL REPORTING ────────────────────────────────────────
    {
        id: 9, type: "case", schemeGroup: "FR", code: "FR1",
        category: "Financial Reporting",
        title: "Inappropriate Journal Entries",
        description: "Unauthorized or fictitious journal entries are used to manipulate reported financial results.",
        date: "ACFE RMT",
        content: `
            <p><strong>Definition:</strong> Management or employees post journal entries that lack economic substance, proper authorization, or supporting documentation — often to hit earnings targets or conceal theft.</p>
            <h4 class="text-pl-neon-pink">Red Flags</h4>
            <ul class="red">
                <li>Entries posted by users who don't normally make journal entries</li>
                <li>High concentration of entries posted on the last day of the period</li>
                <li>Entries with no description or reference number</li>
                <li>Unusual account combinations (e.g., debit revenue, credit equity)</li>
                <li>Round-number entries with no supporting invoice</li>
                <li>Entries that reverse at the start of the next period</li>
            </ul>
            <h4 class="text-pl-neon-green">Detection Techniques</h4>
            <ul class="detect">
                <li>Export full JE population and apply data analytics: filter by posting time, user, amount</li>
                <li>Flag entries posted outside business hours (nights, weekends, holidays)</li>
                <li>Identify entries with round numbers or amounts just below approval thresholds</li>
                <li>Trace all top-side adjusting entries to supporting documentation</li>
                <li>Compare prior-period entries to current period for unusual patterns</li>
            </ul>
            <h4 class="text-pl-neon-amber">CFE Exam Tip</h4>
            <ul class="tip">
                <li>ISA 240 / AS 2401 specifically require auditors to test JEs for fraud risk</li>
                <li>Key technique: Benford's Law — first-digit frequency analysis on JE amounts</li>
                <li>ACFE Fraud Tree: Financial Statement Fraud → Fictitious Revenues / Asset Overstatement</li>
            </ul>
        `
    },
    {
        id: 10, type: "case", schemeGroup: "FR", code: "FR2",
        category: "Financial Reporting",
        title: "Side Letters — Hidden Concessions in Sales Agreements",
        description: "Secret agreements modify the terms of recorded sales (extended payment, rebates, return rights) that are not reflected in recognized revenue.",
        date: "ACFE RMT",
        content: `
            <p><strong>Definition:</strong> A side letter is an undisclosed agreement that contradicts or amends a formal sales contract — often granting price reductions, right of return, or unusual payment terms that would disqualify revenue recognition.</p>
            <h4 class="text-pl-neon-pink">Red Flags</h4>
            <ul class="red">
                <li>High volume of returns or credits issued shortly after period end</li>
                <li>Unusual credit memos issued to large customers</li>
                <li>Sales terms that seem unusually favorable compared to standard contracts</li>
                <li>Customer AR balances that age significantly beyond normal terms</li>
                <li>Sales reps with authority to negotiate non-standard terms without approval</li>
            </ul>
            <h4 class="text-pl-neon-green">Detection Techniques</h4>
            <ul class="detect">
                <li>Directly confirm revenue terms with customers — ask for their copy of the agreement</li>
                <li>Review all credit memos issued in the 60 days after period end</li>
                <li>Inspect contract files for attachments, addenda, email chains modifying terms</li>
                <li>Interview sales reps — what promises were made to close the deal?</li>
                <li>Analyze AR aging for customers with large period-end balances</li>
            </ul>
            <h4 class="text-pl-neon-amber">CFE Exam Tip</h4>
            <ul class="tip">
                <li>Side letters are a classic Sunbeam / Lucent-style scheme</li>
                <li>Key concept: revenue recognized only when performance obligation is satisfied (ASC 606)</li>
                <li>ACFE Fraud Tree: Financial Statement Fraud → Fictitious or Premature Revenue</li>
            </ul>
        `
    },
    {
        id: 11, type: "case", schemeGroup: "FR", code: "FR3",
        category: "Financial Reporting",
        title: "Revenue Recognition — Premature Delivery",
        description: "Products shipped before the customer's requested delivery date or before an order was even received, solely to record revenue in the current period.",
        date: "ACFE RMT",
        content: `
            <p><strong>Definition:</strong> Management pressures the warehouse to ship product ahead of schedule to book the sale in the current period, even though the customer did not request or expect early delivery.</p>
            <h4 class="text-pl-neon-pink">Red Flags</h4>
            <ul class="red">
                <li>Unusual spike in shipments in the last days of a reporting period</li>
                <li>Customer complaints about receiving goods they didn't order yet</li>
                <li>Goods returned or refused by customers shortly after period end</li>
                <li>Shipping dates earlier than the customer's stated need-by date</li>
            </ul>
            <h4 class="text-pl-neon-green">Detection Techniques</h4>
            <ul class="detect">
                <li>Compare shipping/delivery dates to customer purchase orders and requested delivery dates</li>
                <li>Analyze the distribution of shipments across the quarter — is there end-of-period clustering?</li>
                <li>Review customer returns in the first 30 days after period close</li>
                <li>Confirm with customers that they acknowledged receipt and acceptance</li>
            </ul>
            <h4 class="text-pl-neon-amber">CFE Exam Tip</h4>
            <ul class="tip">
                <li>Revenue requires customer acceptance — delivery alone may not suffice under ASC 606</li>
                <li>Key test: cutoff analysis — compare invoice date to actual ship/delivery date</li>
                <li>ACFE Fraud Tree: Financial Statement Fraud → Premature Revenue Recognition</li>
            </ul>
        `
    },
    {
        id: 12, type: "case", schemeGroup: "FR", code: "FR4",
        category: "Financial Reporting",
        title: "Revenue Recognition — Partial Shipments",
        description: "Revenue is recorded for the full order value when only a portion of the goods have been shipped.",
        date: "ACFE RMT",
        content: `
            <p><strong>Definition:</strong> An invoice is raised for the complete order, but the warehouse has only shipped part of it. Revenue is overstated by the value of unshipped goods.</p>
            <h4 class="text-pl-neon-pink">Red Flags</h4>
            <ul class="red">
                <li>Invoice quantities exceed quantities on shipping documents</li>
                <li>Customer disputes or deductions related to undelivered items</li>
                <li>Backlog items that remain open at period end but revenue already booked</li>
                <li>Unusually high fill rates claimed at period end</li>
            </ul>
            <h4 class="text-pl-neon-green">Detection Techniques</h4>
            <ul class="detect">
                <li>Match invoiced quantities to bill of lading / packing slip quantities line by line</li>
                <li>Reconcile period-end backlog to unfulfilled order quantities</li>
                <li>Confirm delivery quantities directly with customers' receiving departments</li>
                <li>Review inventory deductions — did stock reduce by the invoiced amount?</li>
            </ul>
            <h4 class="text-pl-neon-amber">CFE Exam Tip</h4>
            <ul class="tip">
                <li>Revenue per unit should match units physically transferred to customer</li>
                <li>Key document: bill of lading is the primary evidence of delivery</li>
                <li>ACFE Fraud Tree: Financial Statement Fraud → Premature Revenue Recognition</li>
            </ul>
        `
    },
    {
        id: 13, type: "case", schemeGroup: "FR", code: "FR5",
        category: "Financial Reporting",
        title: "Revenue Recognition — Late Shipments Post Period-End",
        description: "Revenue recorded in the current period for goods that were physically shipped only after the books were officially closed.",
        date: "ACFE RMT",
        content: `
            <p><strong>Definition:</strong> The books are nominally closed, but shipments continue to go out and get recorded as if they occurred before cutoff — a hard-cutoff violation.</p>
            <h4 class="text-pl-neon-pink">Red Flags</h4>
            <ul class="red">
                <li>Invoice dates differ from shipping document dates by days or weeks</li>
                <li>Warehouse activity logs show shipments after the official close date</li>
                <li>Customers' receiving timestamps post-date the period end</li>
                <li>Unusually large last-day-of-period shipping volumes</li>
            </ul>
            <h4 class="text-pl-neon-green">Detection Techniques</h4>
            <ul class="detect">
                <li>Select a sample of period-end invoices and trace to bill of lading — verify date</li>
                <li>Obtain warehouse shipping logs and compare to accounting records</li>
                <li>Confirm delivery dates with customers' accounts payable departments</li>
                <li>Review the first week of next period for returns or credits reversing current-period sales</li>
            </ul>
            <h4 class="text-pl-neon-amber">CFE Exam Tip</h4>
            <ul class="tip">
                <li>Cutoff testing: always inspect the last 5 days before and first 5 days after period end</li>
                <li>Key evidence: bill of lading date vs. invoice date vs. customer receipt date</li>
                <li>ACFE Fraud Tree: Financial Statement Fraud → Improper Revenue Recognition</li>
            </ul>
        `
    },
    {
        id: 14, type: "case", schemeGroup: "FR", code: "FR6",
        category: "Financial Reporting",
        title: "Revenue Recognition — Holding Books Open",
        description: "Accounting records are kept open beyond the official period end to capture additional revenue from the next period into the current one.",
        date: "ACFE RMT",
        content: `
            <p><strong>Definition:</strong> Management instructs accounting staff to continue posting transactions after the period is nominally closed, artificially boosting reported revenue for the period under pressure.</p>
            <h4 class="text-pl-neon-pink">Red Flags</h4>
            <ul class="red">
                <li>Transactions dated in the prior period but entered days later</li>
                <li>System logs showing period remains "open" after announced close date</li>
                <li>Sudden jump in last-day revenue compared to historical daily averages</li>
                <li>Mismatch between shipping records and invoice dates</li>
            </ul>
            <h4 class="text-pl-neon-green">Detection Techniques</h4>
            <ul class="detect">
                <li>Review system access logs — when was the period formally locked?</li>
                <li>Compare transaction entry dates to transaction dates for period-end sample</li>
                <li>Analyze daily revenue distribution — flag statistical outliers on last day</li>
                <li>Reconcile opening balance of next period to closing balance of prior period</li>
            </ul>
            <h4 class="text-pl-neon-amber">CFE Exam Tip</h4>
            <ul class="tip">
                <li>This is a management-level fraud — requires override of normal close procedures</li>
                <li>Key control: automated period locks with IT audit trail</li>
                <li>ACFE Fraud Tree: Financial Statement Fraud → Improper Revenue Recognition</li>
            </ul>
        `
    },
    {
        id: 15, type: "case", schemeGroup: "FR", code: "FR7",
        category: "Financial Reporting",
        title: "Manipulation of Liabilities — Unrecorded Vendor Invoices",
        description: "Known vendor invoices are deliberately excluded from the books to understate liabilities and overstate net income.",
        date: "ACFE RMT",
        content: `
            <p><strong>Definition:</strong> Management or AP staff intentionally omit received invoices from the accounting records at period end, making the company appear more profitable and less indebted than it actually is.</p>
            <h4 class="text-pl-neon-pink">Red Flags</h4>
            <ul class="red">
                <li>Declining AP balances despite growing operational activity</li>
                <li>Vendor complaints about invoices not being processed</li>
                <li>Large payments to vendors in the first week of the new period for prior services</li>
                <li>AP aging shows unusually short days-payable outstanding</li>
                <li>Invoices received before period end that have no accrual in the books</li>
            </ul>
            <h4 class="text-pl-neon-green">Detection Techniques</h4>
            <ul class="detect">
                <li>Search for unrecorded liabilities: review invoices received but unpaid after close</li>
                <li>Confirm outstanding balances directly with key vendors</li>
                <li>Analyze first-30-days subsequent disbursements — do they relate to the prior period?</li>
                <li>Match receiving reports to vendor invoices — are there unmatched receipts?</li>
                <li>Compare AP turnover ratio to prior periods and industry benchmarks</li>
            </ul>
            <h4 class="text-pl-neon-amber">CFE Exam Tip</h4>
            <ul class="tip">
                <li>Understated liabilities = one half of the liability understatement / expense understatement scheme</li>
                <li>Key audit procedure: search for unrecorded liabilities (SUL) — standard at period end</li>
                <li>ACFE Fraud Tree: Financial Statement Fraud → Concealed Liabilities & Expenses</li>
            </ul>
        `
    },
    {
        id: 16, type: "case", schemeGroup: "FR", code: "FR8",
        category: "Financial Reporting",
        title: "Revenue Recognition — Manipulation of Secondary Revenue Streams",
        description: "Service contracts, support fees, maintenance, or other secondary revenue streams are manipulated to inflate reported results.",
        date: "ACFE RMT",
        content: `
            <p><strong>Definition:</strong> When product revenue is hard to inflate further, management turns to ancillary streams — service contracts, extended warranties, SaaS renewals, support fees — and applies aggressive or fictitious recognition.</p>
            <h4 class="text-pl-neon-pink">Red Flags</h4>
            <ul class="red">
                <li>Service revenue growing faster than product revenue without explanation</li>
                <li>Unusual movements in deferred revenue balances</li>
                <li>Service contract terms that don't match standard offerings</li>
                <li>Large one-time service invoices near period end with no prior history</li>
            </ul>
            <h4 class="text-pl-neon-green">Detection Techniques</h4>
            <ul class="detect">
                <li>Analyze service revenue as a percentage of product revenue over time</li>
                <li>Review deferred revenue rollforward — are release amounts reasonable?</li>
                <li>Inspect service contract terms against revenue recognition policy</li>
                <li>Confirm service delivery with customers — what was actually provided?</li>
                <li>Compare service margins to prior periods and industry norms</li>
            </ul>
            <h4 class="text-pl-neon-amber">CFE Exam Tip</h4>
            <ul class="tip">
                <li>Under ASC 606, each performance obligation must be satisfied before revenue is recognized</li>
                <li>Key concept: stand-alone selling price allocation for multi-element arrangements</li>
                <li>ACFE Fraud Tree: Financial Statement Fraud → Improper Revenue Recognition</li>
            </ul>
        `
    },
    {
        id: 17, type: "case", schemeGroup: "FR", code: "FR9",
        category: "Financial Reporting",
        title: "Revenue Recognition — Backdating Sales Agreements",
        description: "Sales contracts are dated in a prior reporting period to allow revenue to be recognized earlier than when the transaction actually occurred.",
        date: "ACFE RMT",
        content: `
            <p><strong>Definition:</strong> A contract signed in period 2 is manually dated as if it were signed in period 1 — moving revenue backward in time to meet targets or beat analyst expectations.</p>
            <h4 class="text-pl-neon-pink">Red Flags</h4>
            <ul class="red">
                <li>Contract dates clustering at the end of reporting periods</li>
                <li>Electronic document metadata (creation date, digital signature) inconsistent with printed date</li>
                <li>Customer denies having signed the contract on the stated date</li>
                <li>Salesperson was on vacation on the alleged contract date</li>
                <li>PDF document properties showing creation date after the signed date</li>
            </ul>
            <h4 class="text-pl-neon-green">Detection Techniques</h4>
            <ul class="detect">
                <li>Inspect electronic metadata of contract files (right-click → Properties → creation date)</li>
                <li>Confirm contract signing dates directly with the customer</li>
                <li>Review DocuSign/electronic signature completion certificates for timestamps</li>
                <li>Analyze distribution of contract dates across the quarter — look for end-of-period spikes</li>
                <li>Cross-check salesperson travel/leave records against contract dates</li>
            </ul>
            <h4 class="text-pl-neon-amber">CFE Exam Tip</h4>
            <ul class="tip">
                <li>Document metadata is powerful digital evidence — often overlooked by perpetrators</li>
                <li>Key technique: digital forensics on contract files to extract metadata</li>
                <li>ACFE Fraud Tree: Financial Statement Fraud → Fictitious or Premature Revenue</li>
            </ul>
        `
    },
    {
        id: 18, type: "case", schemeGroup: "FR", code: "FR10",
        category: "Financial Reporting",
        title: "Revenue Recognition — Channel Stuffing",
        description: "Excessive inventory is pushed onto distributors or retailers beyond their ability to sell, often with undisclosed right of return, to inflate reported revenue.",
        date: "ACFE RMT",
        content: `
            <p><strong>Definition:</strong> The company ships more product to distributors than they can reasonably sell, recognizing revenue upon shipment, while secretly agreeing to take the unsold goods back — a concealed contingent liability.</p>
            <h4 class="text-pl-neon-pink">Red Flags</h4>
            <ul class="red">
                <li>Rapid growth in distributor inventory levels relative to their own sell-through</li>
                <li>Unusually generous credit terms offered to distributors at period end</li>
                <li>High return rates or large credit memos issued shortly after period close</li>
                <li>Sales incentive programs that reward volume over sell-through</li>
                <li>Side letters granting right of return not disclosed to auditors</li>
            </ul>
            <h4 class="text-pl-neon-green">Detection Techniques</h4>
            <ul class="detect">
                <li>Obtain distributor inventory data and compute channel inventory days on hand</li>
                <li>Compare distributor purchase volumes to their end-customer sell-through rates</li>
                <li>Review return and credit memo volumes in the period after close</li>
                <li>Inspect distributor contracts and correspondence for hidden return rights</li>
                <li>Confirm terms with distributors independently — ask what agreements they have</li>
            </ul>
            <h4 class="text-pl-neon-amber">CFE Exam Tip</h4>
            <ul class="tip">
                <li>Classic case: Bristol-Myers Squibb channel stuffing settlement ($150M, 2004)</li>
                <li>Key concept: revenue cannot be recognized if right of return is significant and unestimated</li>
                <li>ACFE Fraud Tree: Financial Statement Fraud → Improper Revenue Recognition</li>
            </ul>
        `
    },
    {
        id: 19, type: "case", schemeGroup: "FR", code: "FR11",
        category: "Financial Reporting",
        title: "Disclosures — Improper or Inadequate Disclosure of Material Facts",
        description: "Management omits or obscures material information from financial statement disclosures — contingencies, related parties, significant events.",
        date: "ACFE RMT",
        content: `
            <p><strong>Definition:</strong> Financial statements may be technically accurate in numbers but misleading because significant qualitative information — pending litigation, related-party transactions, going concern risks — has been omitted or buried.</p>
            <h4 class="text-pl-neon-pink">Red Flags</h4>
            <ul class="red">
                <li>Pending litigation mentioned in board minutes but absent from footnotes</li>
                <li>Related-party transactions visible in the ledger but not in disclosures</li>
                <li>Significant subsequent events not disclosed</li>
                <li>Contingent liabilities described vaguely without quantification</li>
                <li>Changes in accounting policy without adequate explanation</li>
            </ul>
            <h4 class="text-pl-neon-green">Detection Techniques</h4>
            <ul class="detect">
                <li>Send legal letter confirmations to all outside counsel — list all pending matters</li>
                <li>Read board and audit committee minutes for undisclosed issues</li>
                <li>Compare disclosure checklist requirements to actual footnotes</li>
                <li>Identify related parties in the ledger and trace to disclosures</li>
                <li>Review subsequent events through the date the financial statements are issued</li>
            </ul>
            <h4 class="text-pl-neon-amber">CFE Exam Tip</h4>
            <ul class="tip">
                <li>Omission can be just as fraudulent as falsification</li>
                <li>Key standard: ASC 855 (Subsequent Events), ASC 850 (Related Party Disclosures)</li>
                <li>ACFE Fraud Tree: Financial Statement Fraud → Improper Disclosures</li>
            </ul>
        `
    },
    {
        id: 20, type: "case", schemeGroup: "FR", code: "FR12",
        category: "Financial Reporting",
        title: "Revenue Recognition — Improper Bill-and-Hold Arrangements",
        description: "Revenue recognized for goods that are still physically held by the seller under a purported bill-and-hold arrangement that doesn't meet accounting criteria.",
        date: "ACFE RMT",
        content: `
            <p><strong>Definition:</strong> Bill-and-hold is legitimate when strict criteria are met. Fraud occurs when management applies it to transactions where the customer hasn't requested it, the goods aren't separately identified, or there's no substantive reason for the arrangement.</p>
            <h4 class="text-pl-neon-pink">Red Flags</h4>
            <ul class="red">
                <li>Revenue recognized for goods still sitting in the company's warehouse</li>
                <li>No written customer request for bill-and-hold treatment</li>
                <li>Goods not physically segregated or labeled for the specific customer</li>
                <li>Customer unaware of the bill-and-hold arrangement</li>
                <li>Arrangement created only at period end with no business rationale</li>
            </ul>
            <h4 class="text-pl-neon-green">Detection Techniques</h4>
            <ul class="detect">
                <li>Verify all bill-and-hold criteria under ASC 606-10-55-83 are documented</li>
                <li>Physically inspect warehouse — are billed goods identified and segregated?</li>
                <li>Confirm bill-and-hold arrangement directly with the customer in writing</li>
                <li>Review the pattern of bill-and-hold usage — does it spike at period end?</li>
                <li>Check that customer has been invoiced and has acknowledged the obligation to pay</li>
            </ul>
            <h4 class="text-pl-neon-amber">CFE Exam Tip</h4>
            <ul class="tip">
                <li>ASC 606 criteria: customer requested it, goods identified, goods ready to transfer, cannot be used elsewhere</li>
                <li>Classic case: Sunbeam Corporation — improper bill-and-hold a central element</li>
                <li>ACFE Fraud Tree: Financial Statement Fraud → Improper Revenue Recognition</li>
            </ul>
        `
    },
    {
        id: 21, type: "case", schemeGroup: "FR", code: "FR13",
        category: "Financial Reporting",
        title: "Revenue Recognition — Roundtrip Transactions",
        description: "Two parties simultaneously record offsetting transactions to artificially inflate revenue for one or both entities with no real economic substance.",
        date: "ACFE RMT",
        content: `
            <p><strong>Definition:</strong> Company A pays Company B $1M for "services." Company B immediately pays Company A $1M for "services." Both book $1M in revenue. No value was created — it's a circular cash flow designed to inflate top-line results.</p>
            <h4 class="text-pl-neon-pink">Red Flags</h4>
            <ul class="red">
                <li>Two simultaneous transactions with the same counterparty that offset each other</li>
                <li>Revenue from a related party or a new counterparty with no prior business history</li>
                <li>No identifiable deliverable or economic rationale for the transactions</li>
                <li>Transactions that are mirror images of each other in timing and amount</li>
            </ul>
            <h4 class="text-pl-neon-green">Detection Techniques</h4>
            <ul class="detect">
                <li>Identify counterparties who appear in both AR and AP within a short window</li>
                <li>Search for transactions of equal value on the same or adjacent dates with the same entity</li>
                <li>Review the economic substance — what was actually delivered or received?</li>
                <li>Examine cash flow: did cash actually leave and return, netting to zero?</li>
                <li>Review related-party disclosures for undisclosed business relationships</li>
            </ul>
            <h4 class="text-pl-neon-amber">CFE Exam Tip</h4>
            <ul class="tip">
                <li>Classic example: Qwest Communications roundtrip transactions with other telecoms</li>
                <li>Key test: does this transaction have economic substance beyond the accounting entry?</li>
                <li>ACFE Fraud Tree: Financial Statement Fraud → Fictitious Revenues</li>
            </ul>
        `
    },

    // ── NON-FINANCIAL ──────────────────────────────────────────────
    {
        id: 22, type: "case", schemeGroup: "NF", code: "NF1",
        category: "Non-Financial Misstatements",
        title: "Quality — Material Testing Results Altered",
        description: "Quality control test results are falsified or altered to avoid product failures, regulatory non-compliance, or production shutdowns.",
        date: "ACFE RMT",
        content: `
            <p><strong>Definition:</strong> Lab technicians or QC supervisors change test results to show passing grades for products that actually failed, often under management pressure to avoid costly delays or recalls.</p>
            <h4 class="text-pl-neon-pink">Red Flags</h4>
            <ul class="red">
                <li>Unusually high pass rates on difficult or critical quality tests</li>
                <li>Test result corrections without supervisor approval or explanation</li>
                <li>Missing original test documents (only photocopies available)</li>
                <li>Results always landing precisely at or just above the minimum threshold</li>
                <li>Employee complaints about pressure to pass certain batches</li>
            </ul>
            <h4 class="text-pl-neon-green">Detection Techniques</h4>
            <ul class="detect">
                <li>Independent re-testing of retained samples from flagged batches</li>
                <li>Statistical analysis of test result distributions — look for digit preference or threshold clustering</li>
                <li>Review testing logs for alterations, erasures, or date inconsistencies</li>
                <li>Compare your results to industry benchmarks for the same product type</li>
                <li>Interview QC staff anonymously about workplace pressures</li>
            </ul>
            <h4 class="text-pl-neon-amber">CFE Exam Tip</h4>
            <ul class="tip">
                <li>Non-financial fraud can carry criminal liability (product safety, environmental, FDA)</li>
                <li>Key technique: digit analysis — fraudsters tend to pick round or "safe" numbers</li>
                <li>ACFE Fraud Tree: Non-Financial Misstatements → Quality Reporting</li>
            </ul>
        `
    },
    {
        id: 23, type: "case", schemeGroup: "NF", code: "NF2",
        category: "Non-Financial Misstatements",
        title: "Compliance — Environmental, Health & Safety Reporting",
        description: "EHS reports submitted to regulators or management are falsified to conceal non-compliance with environmental or safety regulations.",
        date: "ACFE RMT",
        content: `
            <p><strong>Definition:</strong> Organizations facing regulatory scrutiny manipulate emissions data, safety incident logs, or inspection records to appear compliant when they are not — avoiding fines, shutdowns, or reputational damage.</p>
            <h4 class="text-pl-neon-pink">Red Flags</h4>
            <ul class="red">
                <li>Reported metrics consistently at or just below regulatory thresholds</li>
                <li>No independent verification of self-reported compliance data</li>
                <li>Employee safety complaints that don't appear in official incident logs</li>
                <li>Data that shows suspiciously little variation over time</li>
                <li>Reports prepared by the same person who is responsible for the activity being reported</li>
            </ul>
            <h4 class="text-pl-neon-green">Detection Techniques</h4>
            <ul class="detect">
                <li>Compare self-reported data to third-party environmental monitoring data</li>
                <li>Conduct independent sampling and testing of emissions or waste streams</li>
                <li>Interview employees about actual site conditions vs. what's reported</li>
                <li>Review incident investigation records — compare to OSHA log</li>
                <li>Analyze historical trends for statistical anomalies or improbable consistency</li>
            </ul>
            <h4 class="text-pl-neon-amber">CFE Exam Tip</h4>
            <ul class="tip">
                <li>EHS fraud can result in criminal prosecution of individuals, not just the organization</li>
                <li>Key principle: third-party verification as a control over self-reporting</li>
                <li>ACFE Fraud Tree: Non-Financial Misstatements → Regulatory Reporting</li>
            </ul>
        `
    },
    {
        id: 24, type: "case", schemeGroup: "NF", code: "NF3",
        category: "Non-Financial Misstatements",
        title: "Quality — Employee Certification Test Score Tampering",
        description: "Scores on professional certification or qualification exams are altered to show credentials that employees did not legitimately earn.",
        date: "ACFE RMT",
        content: `
            <p><strong>Definition:</strong> HR staff, supervisors, or employees change test scores, completion records, or training logs to fraudulently certify staff — often to meet contractual or regulatory staffing requirements.</p>
            <h4 class="text-pl-neon-pink">Red Flags</h4>
            <ul class="red">
                <li>Pass rates on difficult certifications far exceeding industry norms</li>
                <li>Score corrections or changes without documented authorization</li>
                <li>Original test booklets or answer sheets unavailable (only summary records)</li>
                <li>All employees passing on the first attempt with perfect or near-perfect scores</li>
                <li>Certifications issued by the same person administering the exam</li>
            </ul>
            <h4 class="text-pl-neon-green">Detection Techniques</h4>
            <ul class="detect">
                <li>Verify certification records directly with the issuing body (ACFE, CPA board, etc.)</li>
                <li>Request original answer sheets or test data and compare to recorded scores</li>
                <li>Statistical analysis of score distribution — look for improbable clustering at passing threshold</li>
                <li>Re-administer a sample of certifications to currently certified staff</li>
                <li>Segregate exam administration from scoring and record-keeping</li>
            </ul>
            <h4 class="text-pl-neon-amber">CFE Exam Tip</h4>
            <ul class="tip">
                <li>This is a form of non-financial misstatement often tied to contract compliance fraud (NF4)</li>
                <li>Key control: third-party proctoring + verification with certifying body</li>
                <li>ACFE Fraud Tree: Non-Financial Misstatements → Personnel Qualifications</li>
            </ul>
        `
    },
    {
        id: 25, type: "case", schemeGroup: "NF", code: "NF4",
        category: "Non-Financial Misstatements",
        title: "Compliance — False Reporting on Contracts",
        description: "Organizations submit false compliance certifications or reports to satisfy contractual or regulatory requirements.",
        date: "ACFE RMT",
        content: `
            <p><strong>Definition:</strong> A company certifies compliance with contract terms (safety standards, staffing levels, environmental requirements) without the underlying reality supporting the certification — to avoid penalties or maintain contract status.</p>
            <h4 class="text-pl-neon-pink">Red Flags</h4>
            <ul class="red">
                <li>Compliance certifications issued on time despite no visible compliance activity</li>
                <li>Contract penalties consistently avoided through last-minute certifications</li>
                <li>One person responsible for both performing and certifying compliance</li>
                <li>Underlying documentation cannot be produced when requested</li>
                <li>Employees indicate certifications are "just paperwork"</li>
            </ul>
            <h4 class="text-pl-neon-green">Detection Techniques</h4>
            <ul class="detect">
                <li>Trace compliance certifications back to supporting evidence (test logs, inspection reports)</li>
                <li>Conduct unannounced site visits to verify compliance conditions on the ground</li>
                <li>Interview employees involved in the compliance process at multiple levels</li>
                <li>Review contractual compliance requirements and map to controls in place</li>
                <li>Confirm status with the contracting party or regulator independently</li>
            </ul>
            <h4 class="text-pl-neon-amber">CFE Exam Tip</h4>
            <ul class="tip">
                <li>False certifications to government contracts can trigger False Claims Act liability (US)</li>
                <li>Key concept: the certification is only as good as the underlying process it attests to</li>
                <li>ACFE Fraud Tree: Non-Financial Misstatements → Regulatory / Contractual Reporting</li>
            </ul>
        `
    },
    {
        id: 26, type: "case", schemeGroup: "NF", code: "NF5",
        category: "Non-Financial Misstatements",
        title: "Overstated or False Employee Qualifications",
        description: "Employees falsify educational degrees, certifications, work experience, or professional credentials on hiring documents.",
        date: "ACFE RMT",
        content: `
            <p><strong>Definition:</strong> A candidate or current employee fabricates or inflates academic credentials, professional certifications, or prior employment history — either to get hired or to meet ongoing contractual staffing requirements.</p>
            <h4 class="text-pl-neon-pink">Red Flags</h4>
            <ul class="red">
                <li>Credentials from institutions that cannot be verified or that don't exist</li>
                <li>Dates or titles on resume inconsistent with other known facts</li>
                <li>Unusually rapid career advancement without clear explanation</li>
                <li>Reluctance to provide original documents or direct contact for references</li>
                <li>License or certification number doesn't match issuing body's records</li>
            </ul>
            <h4 class="text-pl-neon-green">Detection Techniques</h4>
            <ul class="detect">
                <li>Verify degrees directly with universities (registrar offices)</li>
                <li>Confirm professional certifications with issuing bodies (ACFE, CPA, CFA)</li>
                <li>Conduct reference checks with direct supervisors, not HR departments</li>
                <li>Use third-party background check services for all new hires above a threshold</li>
                <li>For regulated roles: verify licenses with the relevant professional board</li>
            </ul>
            <h4 class="text-pl-neon-amber">CFE Exam Tip</h4>
            <ul class="tip">
                <li>Background checks are a preventive control — most effective before hiring</li>
                <li>Key risk: fake credentials in safety-critical roles (engineers, pilots, healthcare)</li>
                <li>ACFE Fraud Tree: Non-Financial Misstatements → Personnel Qualifications</li>
            </ul>
        `
    },
    {
        id: 27, type: "case", schemeGroup: "NF", code: "NF6",
        category: "Non-Financial Misstatements",
        title: "Altered Productivity Reports",
        description: "Operational or performance metrics are falsified to show that production targets, KPIs, or bonus thresholds have been met.",
        date: "ACFE RMT",
        content: `
            <p><strong>Definition:</strong> Supervisors or employees manipulate output reports, productivity logs, or KPI dashboards to show performance that hasn't been achieved — driven by bonus pressure, fear of consequences, or competitive targets.</p>
            <h4 class="text-pl-neon-pink">Red Flags</h4>
            <ul class="red">
                <li>Productivity consistently at exactly the target — no natural variation</li>
                <li>Sudden unexplained improvement in metrics without operational change</li>
                <li>Reported output cannot be reconciled to raw materials consumed</li>
                <li>Employees informally acknowledge that reported numbers are inflated</li>
                <li>Metrics improve just before performance review periods</li>
            </ul>
            <h4 class="text-pl-neon-green">Detection Techniques</h4>
            <ul class="detect">
                <li>Independently verify reported metrics against observable physical output</li>
                <li>Reconcile productivity reports to input records (materials, hours, machine time)</li>
                <li>Statistical analysis: real-world data has natural variance — too-perfect data is suspicious</li>
                <li>Cross-check reported metrics against customer delivery records or inventory movements</li>
                <li>Conduct unannounced operational observations during the reporting period</li>
            </ul>
            <h4 class="text-pl-neon-amber">CFE Exam Tip</h4>
            <ul class="tip">
                <li>Performance pressure is the #1 driver of non-financial fraud (Fraud Triangle: pressure)</li>
                <li>Key concept: KPIs should be independently verified, not self-reported</li>
                <li>ACFE Fraud Tree: Non-Financial Misstatements → Operational Reporting</li>
            </ul>
        `
    },

    {
        id: 28, type: "tutorial", schemeGroup: "AM", code: "MOD1",
        category: "CFE Exam Module",
        title: "Fraud Schemes and Financial Crimes — Section Overview",
        description: "Section 1 of 3 on the CFE exam (120 questions, 2.5h). Ties together the ACFE Fraud Tree (AM/FR/IAC/NF) with core accounting concepts and ratio analysis.",
        date: "CFE Module",
        content: `<h4>What this section covers</h4>
            <ul>
                <li>The ACFE Fraud Tree: Asset Misappropriation, Financial Statement Fraud, Corruption, Non-Financial Misstatements</li>
                <li>Core accounting concepts: AR/AP, journal entries, ASC 606 revenue recognition</li>
                <li>Key detection ratios: DSO, DPO, AR-to-Sales, inventory turnover</li>
            </ul>
            <h4 class="text-pl-neon-blue">Where to study it here</h4>
            <ul class="detect">
                <li>Schemes tab — filter by AM / FR / IAC / NF for the full scheme catalogue</li>
                <li>Glossary → "Fraud Schemes" and "Accounting & Audit" categories</li>
                <li>Real Cases tab for how these schemes played out in practice</li>
            </ul>
            <h4 class="text-pl-neon-amber">CFE Exam Tip</h4>
            <ul class="tip">
                <li>Learn the ACFE Fraud Tree structure cold — most questions map directly to a branch</li>
                <li>Know which ratio flags which scheme type (rising DSO → fictitious sales, falling DPO → unrecorded liabilities)</li>
            </ul>
        `
    },
    {
        id: 29, type: "tutorial", schemeGroup: "IAC", code: "MOD2",
        category: "CFE Exam Module",
        title: "Fraud Investigations and Legal Issues — Section Overview",
        description: "Section 2 of 3 on the CFE exam (120 questions, 2.5h). Combines investigative technique with the legal/regulatory framework fraud examiners must operate within.",
        date: "CFE Module",
        content: `<h4>What this section covers</h4>
            <ul>
                <li>Interview techniques: PEACE, Cognitive Interview, WZ, SUE</li>
                <li>Document and digital forensics: metadata analysis, backdating detection</li>
                <li>Data analytics: Benford's Law, gap analysis, duplicate detection</li>
                <li>Indirect proof methods: Net Worth, Expenditure, Bank Deposits Method</li>
                <li>FCPA and UK Bribery Act — anti-bribery/corruption law</li>
                <li>Sarbanes-Oxley (SOX) — post-Enron financial reporting law</li>
                <li>False Claims Act and qui tam whistleblower provisions</li>
                <li>EU regulatory framework: GDPR, AML Directives, EU Whistleblower Directive</li>
            </ul>
            <h4 class="text-pl-neon-blue">Where to study it here</h4>
            <ul class="detect">
                <li>Investigation tab — all five topic filters</li>
                <li>Glossary → "Investigation Tech.", "Legal & Compliance" and "EU Regulatory" categories</li>
            </ul>
            <h4 class="text-pl-neon-amber">CFE Exam Tip</h4>
            <ul class="tip">
                <li>Know when to use each interview technique — witness vs. suspect vs. resistant source</li>
                <li>The three indirect methods (Net Worth/Expenditure/Bank Deposits) are commonly confused — know the formula for each</li>
                <li>Know which law applies to which jurisdiction — FCPA is US-only, UK Bribery Act has no facilitation payment exception</li>
                <li>SOX 302/404/806 are frequently tested individually — know what each section actually requires</li>
            </ul>
        `
    },
    {
        id: 30, type: "tutorial", schemeGroup: "NF", code: "MOD3",
        category: "CFE Exam Module",
        title: "Fraud Prevention and Deterrence — Section Overview",
        description: "Section 3 of 3 on the CFE exam (70 questions, 1.5h). Covers the ACFE's fraud risk management framework: the Fraud Triangle, internal controls, ethics culture, and prevention programs.",
        date: "CFE Module",
        content: `<h4>What this section covers</h4>
            <ul>
                <li>Cressey's Fraud Triangle: pressure, opportunity, rationalization</li>
                <li>COSO Internal Control framework — five components</li>
                <li>Tip hotlines — the single most effective detection method per ACFE's Report to the Nations</li>
                <li>Ethics culture and anti-fraud programs</li>
            </ul>
            <h4 class="text-pl-neon-blue">Where to study it here</h4>
            <ul class="detect">
                <li>Prevention tab — Internal Controls, Culture & Ethics, Programs & Tools</li>
                <li>Glossary → "ACFE Framework" category for the Fraud Triangle and RTTN</li>
            </ul>
            <h4 class="text-pl-neon-amber">CFE Exam Tip</h4>
            <ul class="tip">
                <li>Tips catch ~43% of fraud per the ACFE RTTN — know this statistic, it's tested often</li>
                <li>COSO's five components are frequently tested by name — Control Environment, Risk Assessment, Control Activities, Information & Communication, Monitoring</li>
            </ul>
        `
    }

    // ← ADD YOUR OWN CASES HERE. Comma after the } above, then paste your block.
];

const glossaryData = [
    // ── ACFE FRAMEWORK ──
    { term: "ACFE", cat: "ACFE", full: "Association of Certified Fraud Examiners", def: "The global anti-fraud professional body, founded in 1988. Issues the CFE credential, publishes the biennial Report to the Nations on Occupational Fraud & Abuse." },
    { term: "CFE", cat: "ACFE", full: "Certified Fraud Examiner", def: "Professional credential issued by ACFE. Requires passing a 4-part exam: Financial Transactions & Fraud Schemes · Law · Investigation · Fraud Prevention & Deterrence." },
    { term: "Fraud Tree", cat: "ACFE", full: "ACFE Occupational Fraud Classification System", def: "The ACFE's official taxonomy of occupational fraud schemes, organized into three branches: Asset Misappropriation (AM), Financial Statement Fraud (FR), and Corruption (IAC/NF)." },
    { term: "AM", cat: "ACFE", full: "Asset Misappropriation", def: "The most common fraud category (89% of cases per ACFE). Involves theft or misuse of an organization's assets — cash, inventory, or other non-cash assets." },
    { term: "FR", cat: "ACFE", full: "Financial Statement Fraud / Financial Reporting", def: "Intentional misstatement or omission of material information in financial statements. Least common but highest median loss ($593K per ACFE 2024)." },
    { term: "IAC", cat: "ACFE", full: "Improper Acts & Corruption", def: "Schemes where an employee misuses their position to gain benefit at the organization's expense — bribery, conflicts of interest, illegal gratuities, economic extortion." },
    { term: "NF", cat: "ACFE", full: "Non-Financial Misstatements", def: "Fraud involving falsification of non-financial data: quality test results, employee credentials, EHS reports, productivity metrics, contract compliance certifications." },
    { term: "Fraud Triangle", cat: "ACFE", full: "Cressey's Fraud Triangle", def: "Donald Cressey's model: three conditions must be present for fraud to occur — Pressure (motivation), Opportunity (weak controls), Rationalization (mental justification). Core concept for CFE exam." },
    { term: "RTTN", cat: "ACFE", full: "Report to the Nations", def: "ACFE's biennial global study on occupational fraud. Key data source for CFE exam: median fraud loss, detection methods, industry benchmarks, fraud duration statistics." },
    { term: "OFI", cat: "ACFE", full: "Occupational Fraud & Abuse", def: "Fraud committed by employees against their own employers. Distinct from external fraud (e.g., customer fraud). The focus of the ACFE's research and the CFE exam." },

    // ── FRAUD SCHEMES ──
    { term: "Skimming", cat: "SCHEMES", full: "Cash Skimming", def: "Off-book theft: cash is stolen BEFORE it is recorded in the accounting system. Leaves no direct accounting trail. Hardest to detect — requires analytical procedures and customer confirmations." },
    { term: "Larceny", cat: "SCHEMES", full: "Cash Larceny", def: "On-book theft: cash is stolen AFTER it has been recorded. Creates an accounting discrepancy that shows up in reconciliations. Easier to detect than skimming." },
    { term: "Billing Scheme", cat: "SCHEMES", full: "Fictitious / Phony Vendor Billing", def: "Employee creates a shell vendor and submits invoices for goods/services never delivered. Most common fraudulent disbursement scheme. Key red flag: vendor address matches employee address." },
    { term: "Check Tampering", cat: "SCHEMES", full: "Check Tampering Scheme", def: "Employee intercepts, forges, or alters a company check. Methods: forged maker (signature), forged endorsement, altered payee, altered amount. Key control: positive pay with bank." },
    { term: "Expense Fraud", cat: "SCHEMES", full: "Expense Reimbursement Fraud", def: "Employee submits false, inflated, or duplicate expense claims. Types: fictitious expenses, overstated amounts, personal expenses, duplicate submissions." },
    { term: "Channel Stuffing", cat: "SCHEMES", full: "Channel Stuffing / Trade Loading", def: "Pushing excess inventory to distributors beyond their sales capacity to inflate reported revenue. Revenue is overstated; a right-of-return liability is concealed. Classic Sunbeam, Bristol-Myers case." },
    { term: "Bill-and-Hold", cat: "SCHEMES", full: "Bill-and-Hold Revenue Manipulation", def: "Revenue recognized for goods still held by the seller, purportedly at customer's request. Legitimate only if strict ASC 606 criteria are met. Fraudulent when criteria are fabricated." },
    { term: "Roundtrip", cat: "SCHEMES", full: "Roundtrip / Circular Transaction", def: "Two entities simultaneously record equal and offsetting transactions — both book revenue with no real economic activity. Famous case: Qwest Communications ($1B+)." },
    { term: "Backdating", cat: "SCHEMES", full: "Backdating Sales Agreements", def: "Contracts or invoices are dated in a prior period to recognize revenue earlier. Electronic metadata (creation date, DocuSign timestamps) is key forensic evidence to detect this." },
    { term: "Side Letter", cat: "SCHEMES", full: "Side Letter / Side Agreement", def: "An undisclosed agreement that modifies the terms of a recorded sale — granting rights of return, extended payment, or price reductions. Invalidates revenue recognition. Lucent Technologies case." },
    { term: "Cutoff Fraud", cat: "SCHEMES", full: "Revenue Cutoff Manipulation", def: "Recording revenue in the wrong period — either early (premature) or by holding books open past period end. Detected via cutoff testing: compare invoice dates to shipping/delivery dates." },
    { term: "Ghost Employee", cat: "SCHEMES", full: "Ghost Employee / Payroll Fraud", def: "A fictitious employee is added to payroll, or a terminated employee's record is kept active. Paychecks go to the fraudster. Key control: HR/payroll segregation, periodic headcount verification." },
    { term: "Conflict of Interest", cat: "SCHEMES", full: "Undisclosed Conflict of Interest", def: "An employee has a hidden financial relationship with a vendor/customer and steers business to benefit themselves. Not always illegal — but undisclosed = fraud. Detected via vendor-employee data matching." },
    { term: "Commercial Bribery", cat: "SCHEMES", full: "Commercial Bribery / Illegal Gratuity", def: "Bribery = value given BEFORE a decision to influence it. Gratuity = value given AFTER a decision as a reward. Both are corruption. Key distinction tested on the CFE exam." },

    // ── ACCOUNTING & AUDIT ──
    { term: "AR", cat: "ACCOUNTING", full: "Accounts Receivable", def: "Money owed to the company by customers for goods/services already delivered. Key fraud metric: AR-to-Sales ratio — if AR grows faster than revenue, may indicate fictitious sales." },
    { term: "AP", cat: "ACCOUNTING", full: "Accounts Payable", def: "Money the company owes to vendors. Key fraud area: unrecorded AP (to understate liabilities), fictitious AP (billing schemes). Days Payable Outstanding (DPO) is a key analytical ratio." },
    { term: "JE", cat: "ACCOUNTING", full: "Journal Entry", def: "A manual accounting record that debits one account and credits another. High-risk area for fraud — auditors must test JEs under ISA 240 / AS 2401. Red flags: posted by unusual users, late at night, round numbers." },
    { term: "GAAP", cat: "ACCOUNTING", full: "Generally Accepted Accounting Principles", def: "US accounting standards set by FASB. Govern how transactions must be recorded and reported. Financial statement fraud often involves departures from GAAP — especially revenue recognition rules." },
    { term: "IFRS", cat: "ACCOUNTING", full: "International Financial Reporting Standards", def: "Global accounting standards issued by IASB, used in 140+ countries. Similar to GAAP but differences exist in revenue recognition, lease accounting, and financial instruments." },
    { term: "ASC 606", cat: "ACCOUNTING", full: "ASC 606 — Revenue from Contracts with Customers", def: "The primary US GAAP revenue recognition standard. Five-step model: (1) identify contract, (2) identify performance obligations, (3) determine transaction price, (4) allocate price, (5) recognize when obligation satisfied." },
    { term: "SUL", cat: "ACCOUNTING", full: "Search for Unrecorded Liabilities", def: "Standard audit procedure: review post-period disbursements and vendor confirmations to find liabilities that existed at period end but were not recorded. Detects FR7-type schemes." },
    { term: "PO", cat: "ACCOUNTING", full: "Purchase Order", def: "An official document issued by a buyer to a seller, authorizing a purchase. Key control document — fraud is detected by comparing POs to invoices and receiving reports (three-way match)." },
    { term: "BOL", cat: "ACCOUNTING", full: "Bill of Lading", def: "A legal document between shipper and carrier confirming goods were received for shipment. Primary evidence of delivery for revenue recognition. Key document in cutoff testing." },
    { term: "Three-Way Match", cat: "ACCOUNTING", full: "Three-Way Invoice Matching", def: "AP control: match Purchase Order → Receiving Report → Vendor Invoice before payment. Prevents payment for goods not ordered or not received. Defeats most billing schemes." },
    { term: "DPO", cat: "ACCOUNTING", full: "Days Payable Outstanding", def: "AP ÷ (COGS / 365). Measures how long a company takes to pay vendors. Declining DPO may signal unrecorded liabilities scheme (FR7) — company appears to pay faster than it actually does." },
    { term: "DSO", cat: "ACCOUNTING", full: "Days Sales Outstanding", def: "AR ÷ (Revenue / 365). Measures how long to collect receivables. Rising DSO may indicate fictitious sales (FR scheme) — fake revenue that will never be collected." },
    { term: "KPI", cat: "ACCOUNTING", full: "Key Performance Indicator", def: "A quantifiable metric used to evaluate performance. Fraud risk: KPIs linked to bonuses create pressure to manipulate (NF6 — altered productivity reports). KPIs should be independently verified." },
    { term: "Deferred Revenue", cat: "ACCOUNTING", full: "Deferred Revenue / Contract Liability", def: "Cash received from customers before the service or product is delivered. A liability on the balance sheet. Manipulation: releasing deferred revenue early to boost current-period income." },

    // ── LEGAL & COMPLIANCE ──
    { term: "FCPA", cat: "LEGAL", full: "Foreign Corrupt Practices Act (US, 1977)", def: "US law prohibiting American companies and individuals from bribing foreign government officials. Two provisions: anti-bribery and books & records. Enforced by DOJ and SEC. Key CFE exam topic." },
    { term: "UK Bribery Act", cat: "LEGAL", full: "UK Bribery Act 2010", def: "Stricter than FCPA — covers public AND private sector bribery, no facilitation payment exception. Applies to any company doing business in the UK. Creates corporate liability for failure to prevent bribery." },
    { term: "SOX", cat: "LEGAL", full: "Sarbanes-Oxley Act (US, 2002)", def: "US law enacted after Enron/WorldCom scandals. Key provisions: Section 302 (CEO/CFO certify financial statements), Section 404 (internal control over financial reporting), Section 806 (whistleblower protection)." },
    { term: "FCA", cat: "LEGAL", full: "False Claims Act (US)", def: "US law creating liability for false claims submitted to the government. Key provision: qui tam — whistleblowers can file suit on behalf of the government and receive a portion of recovered funds." },
    { term: "COI", cat: "LEGAL", full: "Conflict of Interest", def: "A situation where an employee's personal interests potentially conflict with their professional duties. Not always illegal — but must be disclosed. Undisclosed COI = fraud (IAC2)." },
    { term: "AML", cat: "LEGAL", full: "Anti-Money Laundering", def: "Laws and procedures to prevent criminals from disguising illegally obtained funds. Three stages of money laundering: Placement → Layering → Integration. Related to fraud proceeds." },
    { term: "EHS", cat: "LEGAL", full: "Environmental, Health & Safety", def: "Regulatory framework governing workplace safety, environmental emissions, and health standards. EHS reporting fraud (NF2) involves falsifying data submitted to regulators like OSHA or the EPA." },
    { term: "Qui Tam", cat: "LEGAL", full: "Qui Tam Provision (False Claims Act)", def: "Latin: 'who as well.' Allows private individuals (relators/whistleblowers) to sue on behalf of the government for false claims and receive 15–30% of recovered funds." },
    { term: "COSO", cat: "LEGAL", full: "Committee of Sponsoring Organizations", def: "Framework for internal control. COSO's Internal Control — Integrated Framework defines five components: Control Environment, Risk Assessment, Control Activities, Information & Communication, Monitoring." },

    // ── INVESTIGATION TECHNIQUES ──
    { term: "Benford's Law", cat: "TECHNIQUES", full: "Benford's Law / First-Digit Law", def: "Statistical phenomenon: in naturally occurring datasets, the leading digit is '1' about 30% of the time, '2' about 17%, etc. Fraudsters invent numbers that deviate from this pattern. Powerful tool for detecting fabricated JEs or invoices." },
    { term: "Data Analytics", cat: "TECHNIQUES", full: "Computer-Assisted Audit Techniques (CAATs)", def: "Using software (ACL/Galvanize, IDEA, Excel, Python) to analyze 100% of a data population rather than samples. Key procedures: duplicate detection, gap analysis, stratification, Benford's Law analysis." },
    { term: "Duplicate Detection", cat: "TECHNIQUES", full: "Duplicate Payment / Duplicate Submission Analysis", def: "Identify the same invoice paid twice, or the same expense submitted in two reports. Match on: vendor + amount + date, or invoice number across periods. Catches both error and fraud." },
    { term: "Cutoff Testing", cat: "TECHNIQUES", full: "Revenue / Expense Cutoff Testing", def: "Audit procedure testing whether transactions are recorded in the correct period. Select sample of transactions near period end; verify dates on source documents match accounting records." },
    { term: "Vendor Master Audit", cat: "TECHNIQUES", full: "Vendor Master File Review", def: "Systematic analysis of the vendor database to detect fictitious vendors. Key checks: duplicate addresses/bank accounts, matches to employee data, vendors with no tax ID, recently added vendors with large payments." },
    { term: "Digital Forensics", cat: "TECHNIQUES", full: "Computer / Digital Forensics", def: "Examination of electronic evidence — email metadata, document creation dates, login logs, deleted files. Key in backdating schemes: PDF properties, DocuSign certificates, email timestamps reveal true chronology." },
    { term: "Tip Hotline", cat: "TECHNIQUES", full: "Anonymous Fraud Tip Hotline", def: "The most effective fraud detection method per ACFE Report to the Nations — tips catch ~43% of fraud cases. Organizations with hotlines detect fraud faster and with lower losses than those without." },
    { term: "Ratio Analysis", cat: "TECHNIQUES", full: "Financial Ratio Analysis for Fraud Detection", def: "Key ratios: AR/Sales (fictitious revenue), AP/COGS (unrecorded liabilities), inventory turnover (theft). Compare current ratios to prior periods, budgets, and industry benchmarks to identify anomalies." },
    { term: "Gap Analysis", cat: "TECHNIQUES", full: "Sequence Gap Analysis", def: "Identify missing numbers in sequential series — check numbers, receipt numbers, invoice numbers. Missing sequences may indicate destroyed records, skimming, or check fraud." },
    { term: "Net Worth Method", cat: "TECHNIQUES", full: "Net Worth / Expenditure Analysis", def: "Indirect proof method: compare a suspect's known income to their assets and spending. If they spent more than they earned, the difference may represent fraud proceeds. Used in criminal prosecutions." },
    { term: "Surprise Audit", cat: "TECHNIQUES", full: "Surprise / Unannounced Audit", def: "Audit conducted without advance notice — especially effective for cash counts, inventory, and payroll testing. Prevents the fraudster from preparing or concealing the scheme before the auditors arrive." },

    // ── EU REGULATORY ──
    { term: "EU Whistleblower Directive", cat: "EU", full: "Directive (EU) 2019/1937 on the Protection of Whistleblowers", def: "EU law requiring companies with 50+ employees to establish secure internal reporting channels for fraud and misconduct. Prohibits retaliation against whistleblowers. Transposed into national law across all EU member states by 2023. Stronger than US SOX 806 in scope." },
    { term: "OLAF", cat: "EU", full: "European Anti-Fraud Office (Office européen de lutte antifraude)", def: "EU body that investigates fraud, corruption, and serious misconduct involving EU institutions and funds (e.g., EU structural funds, CAP subsidies, customs duties). Reports findings to national prosecutors. Key reference if your work touches EU-funded projects." },
    { term: "6AMLD", cat: "EU", full: "6th EU Anti-Money Laundering Directive (2018/1673)", def: "Expanded the list of 22 predicate offences for money laundering to explicitly include cybercrime and tax crimes. Extended criminal liability to legal entities (companies), not just individuals. Minimum 4-year prison term. Key for fraud investigators working in AML." },
    { term: "5AMLD", cat: "EU", full: "5th EU Anti-Money Laundering Directive (2018/843)", def: "Extended AML rules to crypto asset providers, prepaid cards, and art dealers. Mandatory public beneficial ownership registers in each EU member state. Enhanced due diligence for high-risk third countries. Strengthened FIU powers." },
    { term: "EU PIF Directive", cat: "EU", full: "PIF Directive (EU) 2017/1371 — Protection of EU Financial Interests", def: "Requires EU member states to criminalize fraud against EU budget — false declarations, document forgery, money laundering of EU funds. Establishes minimum prison sentences. Applies to EU grants, subsidies, procurement. OLAF's legal backbone." },
    { term: "GDPR", cat: "EU", full: "General Data Protection Regulation (EU) 2016/679", def: "Governs collection and processing of personal data in the EU. Critical for fraud investigations: limits what employee data can be accessed, how long it can be retained, and requires legal basis for processing. Violations can invalidate evidence or expose the investigator to liability." },
    { term: "EU MAR", cat: "EU", full: "EU Market Abuse Regulation (596/2014)", def: "Prohibits insider trading, market manipulation, and unlawful disclosure of inside information across EU financial markets. Replaced the Market Abuse Directive (MAD). Applies to all trading venues in the EU. Relevant for FR-type fraud in listed companies." },
    { term: "CSRD", cat: "EU", full: "Corporate Sustainability Reporting Directive (EU) 2022/2464", def: "Requires large EU companies to report on ESG (Environmental, Social, Governance) factors under mandatory standards (ESRS). Expands non-financial reporting obligations — connects directly to NF-type fraud schemes (NF1, NF2, NF4). Auditors must verify sustainability reports." },
    { term: "EPPO", cat: "EU", full: "European Public Prosecutor's Office", def: "EU body operational since 2021 that investigates and prosecutes crimes affecting the EU budget — fraud, corruption, money laundering of EU funds. Has jurisdiction in 22 EU member states. Cooperates with OLAF. Key escalation path for major EU fraud cases." },
    { term: "UNCAC", cat: "EU", full: "UN Convention Against Corruption (2003)", def: "Global anti-corruption treaty signed by 190 countries. Covers bribery, embezzlement, trading in influence, and obstruction of justice. Forms the international legal backbone alongside FCPA and UK Bribery Act. Relevant for IAC schemes with cross-border elements." },
    { term: "EU Procurement Directive", cat: "EU", full: "Directive 2014/24/EU on Public Procurement", def: "Governs how EU public authorities must award contracts. Requires transparent competitive tendering above thresholds. Fraud red flags: unjustified sole-source awards, bid rigging (coordinated bids), splitting contracts to stay below thresholds. Key for IAC2/IAC1 investigations in public sector." },
    { term: "FIU", cat: "EU", full: "Financial Intelligence Unit", def: "National body (in each EU state) that receives Suspicious Activity Reports (SARs) from banks, notaries, accountants, and other obliged entities under AML rules. Analyzes reports and shares intelligence with law enforcement. Example: Slovakia's FIFO (Finančná spravodajská jednotka)." },
    { term: "AMLD", cat: "EU", full: "EU Anti-Money Laundering Directives (4th–6th)", def: "Successive EU directives (2015/849, 2018/843, 2018/1673) transposed into each member state's national law. Introduced the risk-based approach, UBO registers, crypto-asset obligations, and harmonized ML predicate offences. Being replaced by the AMLR from 2027." },
    { term: "AMLR", cat: "EU", full: "EU Anti-Money Laundering Regulation (EU) 2024/1624", def: "A directly-applicable EU regulation — unlike a directive, it needs no national transposition. Replaces most of AMLD4-6's substantive rules from 2027, creating one AML rulebook across all member states." },
    { term: "AMLA", cat: "EU", full: "EU Anti-Money Laundering Authority (Frankfurt)", def: "New EU-level supervisor, operational from 2025/fully staffed by 2028, directly supervising the ~40 riskiest cross-border financial institutions and coordinating national FIUs." },
    { term: "Wwft", cat: "EU", full: "Wet ter Voorkoming van Witwassen en Financieren van Terrorisme (Netherlands)", def: "The Netherlands' national AML/CFT law transposing the EU AMLDs. Reporting threshold is 'unusual transaction' (ongebruikelijke transactie) to FIU-Nederland — a lower, more mechanical bar than the US 'suspicious activity' standard." },
    { term: "STOR", cat: "EU", full: "Suspicious Transaction and Order Report", def: "Mandatory report under EU MAR filed with the national competent authority (e.g., Luxembourg's CSSF, Slovakia's NBS) when a firm reasonably suspects an order or transaction constitutes insider dealing or market manipulation." },
    { term: "CSSF", cat: "EU", full: "Commission de Surveillance du Secteur Financier (Luxembourg)", def: "Luxembourg's financial sector regulator, supervising banks, investment fund managers, and funds — including their AML/CFT compliance under CSSF Regulation 12-02. Central to Luxembourg's outsized fund administration industry." },
    { term: "RBE", cat: "EU", full: "Registre des Bénéficiaires Effectifs (Luxembourg UBO Register)", def: "Luxembourg's beneficial ownership register (Law of 13 Jan 2019). Public access was suspended after the 2022 CJEU Sovim ruling struck down AMLD5's general-public-access rule; access is now restricted to authorities, obligated professionals, and those showing legitimate interest." },
    { term: "RR / RC", cat: "EU", full: "Responsable du Respect / Responsable du Contrôle (Luxembourg)", def: "Luxembourg's two-tier AML/CFT governance roles under CSSF Regulation 12-02: the RR is the senior manager ultimately accountable for compliance; the RC is the operational compliance officer who monitors day-to-day adherence and reports to the RR." },
    { term: "DORA", cat: "EU", full: "Digital Operational Resilience Act (EU) 2022/2554", def: "EU regulation requiring financial entities to manage ICT risk, test operational resilience (incl. threat-led penetration testing), and report major ICT incidents — including cyber-enabled fraud breaches — within strict timelines. Applies since January 2025." },
    { term: "EU Whistleblower Directive", cat: "EU", full: "Directive (EU) 2019/1937 on Whistleblower Protection", def: "Sets an EU-wide floor for whistleblower protection covering breaches of EU law (AML, financial services, EU-budget fraud, etc.). Requires internal reporting channels at companies with 50+ employees and reverses the burden of proof in retaliation claims. Unlike US Dodd-Frank, it does not mandate financial bounties." }
];

const caseStudies = [
    {
        id: "cs1", schemeGroup: "FR",
        company: "Enron Corporation", country: "USA", year: "2001",
        loss: "$74B in shareholder value destroyed",
        perpetrators: "Jeffrey Skilling (CEO), Andrew Fastow (CFO), Kenneth Lay (Chairman)",
        codes: ["FR1","FR8","FR11"],
        summary: "The largest corporate fraud in US history at the time. Enron used off-balance-sheet Special Purpose Entities (SPEs) to hide $1B+ in debt, mark-to-market accounting on unbuilt pipelines, and fabricated revenue from energy trading.",
        what_happened: `<p>Enron was the darling of Wall Street — named "America's Most Innovative Company" by Fortune for 6 consecutive years. Behind the scenes:</p>
            <ul class="red"><li>CFO Andrew Fastow created 3,000+ SPEs (shell entities) to hide billions in debt off the balance sheet</li>
            <li>Mark-to-market accounting allowed Enron to book projected profits from multi-decade contracts <em>immediately</em> — then "adjust" them upward each quarter</li>
            <li>Energy trading revenue was fabricated through round-trip transactions with counterparties</li>
            <li>Fastow personally earned $30M+ in management fees from the SPEs he was supposed to be managing on behalf of Enron</li></ul>`,
        how_caught: `<p><strong>The tip came from a journalist.</strong> In March 2001, Bethany McLean at Fortune wrote "Is Enron Overpriced?" — she couldn't understand how Enron made money from its filings. Then in August 2001, VP Sherron Watkins sent an anonymous memo to Kenneth Lay warning of accounting irregularities. When Enron restated earnings in October 2001, eliminating $586M in profits, the stock collapsed. SEC launched an investigation. Arthur Andersen — Enron's auditor — shredded documents.</p>`,
        techniques: `<ul class="detect"><li><strong>Analytical procedures:</strong> Bethany McLean noticed Enron's ROA and cash flows didn't match reported profits — a classic FR red flag</li>
            <li><strong>Whistleblower interview:</strong> Sherron Watkins's memo provided a roadmap of the fraud to investigators</li>
            <li><strong>SPE structure analysis:</strong> Forensic accountants traced ownership of SPEs back to Fastow personally</li>
            <li><strong>Bank confirmations:</strong> Revealed that "assets" on Enron's books were actually guaranteed by Enron itself — circular</li>
            <li><strong>Document examination:</strong> Despite Andersen's shredding, electronic copies survived and were recovered</li></ul>`,
        cfe_takeaway: `<ul class="tip"><li>Enron = the reason SOX Section 302/404 exists — CEO/CFO must now personally certify financial statements</li>
            <li>SPEs are legitimate — fraud was in non-disclosure of Enron's guarantees (FR11)</li>
            <li>Mark-to-market is legitimate — fraud was in using unrealistic estimates</li>
            <li>Key lesson: when you can't understand how a company makes money from its public filings — that is a red flag</li>
            <li>Arthur Andersen's collapse shows auditor independence failures enable fraud</li></ul>`
    },
    {
        id: "cs2", schemeGroup: "FR",
        company: "WorldCom", country: "USA", year: "2002",
        loss: "$180B bankruptcy — largest in US history at the time",
        perpetrators: "Bernie Ebbers (CEO), Scott Sullivan (CFO), David Myers (Controller)",
        codes: ["FR1","FR7"],
        summary: "WorldCom inflated assets by $11B+ by improperly capitalizing normal operating expenses as capital assets — converting costs that should have reduced profit into assets on the balance sheet. Caught by an internal auditor working in secret.",
        what_happened: `<p>WorldCom was the #2 US long-distance carrier. From 1999–2002, management needed to show consistent earnings to support the stock price used for acquisitions. The scheme was deceptively simple:</p>
            <ul class="red"><li>Line costs (fees paid to other telecoms to use their networks) were operating expenses — they should have reduced profit immediately</li>
            <li>Instead, CFO Sullivan directed them to be <em>capitalized</em> — treated as assets depreciated over years — inflating EBITDA by billions</li>
            <li>$3.8B in expenses were hidden in capital expenditure accounts in 2001 alone</li>
            <li>Management called it "prepaid capacity" — a fictitious accounting category</li>
            <li>Total fraud: $11B+, executed through thousands of journal entries</li></ul>`,
        how_caught: `<p><strong>Internal auditor Cynthia Cooper cracked it — working at night to avoid detection.</strong> In 2002, Cooper's team noticed unusually large capital expenditure entries that didn't match approved projects. When they asked Controller David Myers for documentation, he told them to stop. Instead, Cooper worked covertly with her small team after hours, pulling data, tracing journal entries, and building the case. Within weeks she had found $3.8B in improper capitalizations. She reported directly to the Audit Committee — bypassing management. The board called the FBI.</p>`,
        techniques: `<ul class="detect"><li><strong>Journal entry analysis:</strong> Cooper's team filtered all large JEs to capital accounts and found entries with no supporting project documentation</li>
            <li><strong>Ratio analysis:</strong> Capital expenditure as % of revenue was wildly inconsistent with industry — a clear analytical red flag</li>
            <li><strong>Vouching:</strong> Traced JE amounts back to source documents — found "prepaid capacity" had no contracts, invoices, or business rationale</li>
            <li><strong>Trend analysis:</strong> Line costs as % of revenue had been declining impossibly — in reality they were being moved to the balance sheet</li>
            <li><strong>Bypassing management:</strong> Reporting to Audit Committee directly, not the CFO — critical when management is the perpetrator</li></ul>`,
        cfe_takeaway: `<ul class="tip"><li>WorldCom = why internal audit must have direct access to the Audit Committee, independent of management</li>
            <li>Capitalization vs. expensing is a key FR manipulation — always compare capex/revenue ratio to peers</li>
            <li>Cynthia Cooper is an ACFE Fraud Fighter Hall of Fame inductee — her story is in the exam</li>
            <li>Key exam concept: <em>asset overstatement</em> through improper capitalization = FR7 variant</li>
            <li>SOX Section 301 requires Audit Committee to have direct whistleblower reporting channel — WorldCom is why</li></ul>`
    },
    {
        id: "cs3", schemeGroup: "FR",
        company: "Wirecard AG", country: "Germany / EU", year: "2020",
        loss: "€12.5B market cap; €3.2B in bank debt; 5,400 employees affected",
        perpetrators: "Markus Braun (CEO, arrested), Jan Marsalek (COO, fled — still at large), Stephan von Erffa (accounting head)",
        codes: ["FR1","FR2","FR11"],
        summary: "Germany's biggest post-war financial fraud. Wirecard, a DAX-listed fintech, fabricated €1.9B in cash balances supposedly held in escrow accounts in the Philippines. The accounts didn't exist. Revenue from its Third Party Acquiring business was largely fictitious. Exposed by FT journalism that BaFin tried to suppress.",
        what_happened: `<p>Wirecard was a payments processor that rose from obscurity to a €24B DAX company, briefly valued above Deutsche Bank. Behind the scenes:</p>
            <ul class="red"><li>€1.9B in cash supposedly held in two Philippine banks (BDO and BPI) as escrow for its TPA business — the banks confirmed no such accounts existed</li>
            <li>Third Party Acquiring (TPA) revenue — supposedly from high-risk merchants processed through Asian partners — was largely fabricated. Partners received money from Wirecard and returned it as "revenue"</li>
            <li>Forged documents including bank statements and audit confirmations were provided to auditor EY for years</li>
            <li>COO Jan Marsalek is suspected of GRU (Russian intelligence) connections — fraud may have been cover for intelligence operations</li>
            <li>BaFin (German regulator) filed criminal complaints against FT journalists investigating Wirecard instead of investigating Wirecard itself</li></ul>`,
        how_caught: `<p><strong>FT journalist Dan McCrum spent 4 years exposing Wirecard despite legal threats and a smear campaign.</strong> McCrum published "The House of Wirecard" series starting 2015. Each article was met with lawsuits and BaFin investigations — of the journalists. The breaking point: KPMG's special audit in 2020 couldn't verify the TPA revenue. Then EY refused to sign off on 2019 accounts without bank confirmations. When EY contacted the Philippine banks directly, both denied the accounts existed. Wirecard collapsed within days. Braun was arrested. Marsalek fled to Russia.</p>`,
        techniques: `<ul class="detect"><li><strong>Independent bank confirmations:</strong> The technique that broke the case — EY finally contacted Philippine banks directly and got denials in writing</li>
            <li><strong>Investigative journalism as OSINT:</strong> McCrum tracked payment flows, interviewed former employees, and obtained leaked documents</li>
            <li><strong>Document forensics:</strong> Forged bank statements had metadata inconsistencies and formatting errors visible on close inspection</li>
            <li><strong>Analytical anomalies:</strong> Wirecard's reported margins were implausibly high for a payments processor; cash balances grew while operating cash flow was weak</li>
            <li><strong>Whistleblower intelligence:</strong> Multiple Wirecard employees provided McCrum with internal documents over years</li>
            <li><strong>Third-party verification failure:</strong> KPMG's special audit couldn't get any independent confirmation of the TPA business</li></ul>`,
        cfe_takeaway: `<ul class="tip"><li>Wirecard = the EU's defining fraud case. Directly drove reform of BaFin, EU audit regulation, and short-selling rules</li>
            <li>Key lesson: auditor independence is meaningless if the auditor accepts client-provided confirmations — always confirm <em>directly</em> with the bank</li>
            <li>Regulator capture: BaFin attacking journalists instead of the company is a major governance failure — red flag in itself</li>
            <li>Jan Marsalek is still at large as of 2026 — Interpol red notice active</li>
            <li>CFE relevance: FR11 (non-disclosure), FR1 (JE manipulation), roundtrip revenue (FR13)</li></ul>`
    },
    {
        id: "cs4", schemeGroup: "AM",
        company: "Bernard L. Madoff Investment Securities", country: "USA", year: "2008",
        loss: "$17B in actual principal lost; $65B in fabricated account statements",
        perpetrators: "Bernie Madoff (founder) — sentenced to 150 years. Several family members and employees also convicted.",
        codes: ["AM5","FR11"],
        summary: "The largest Ponzi scheme in history. Madoff ran a fake investment advisory business for 17+ years — no actual trading, just fabricated statements. New investors' money paid out old investors' 'returns.' Collapsed when 2008 crisis triggered $7B in redemption requests he couldn't cover.",
        what_happened: `<p>Madoff ran a legitimate market-making business on one floor and a fraudulent investment advisory on another. For 17+ years:</p>
            <ul class="red"><li>Claimed to use a "split-strike conversion" options strategy — in reality, no trades were ever executed</li>
            <li>Monthly statements showed steady 10–12% annual returns regardless of market conditions — statistically impossible</li>
            <li>Used a tiny 3-person accounting firm (Friehling & Horowitz) to "audit" a $65B fund — firm had one active accountant aged 78</li>
            <li>Refused to give investors electronic access to accounts; insisted on paper statements only</li>
            <li>Operated through a single DTC account — investigators later found it had been dormant for years</li>
            <li>Victims included banks, hedge funds, charities, Holocaust survivors, and pension funds across 45 countries</li></ul>`,
        how_caught: `<p><strong>Harry Markopolos, a rival fund manager, submitted detailed SEC tips in 2000, 2001, 2005, and 2007 — all ignored.</strong> His 2005 submission was titled "The World's Largest Hedge Fund is a Fraud" and mathematically proved the returns were impossible. The SEC conducted two examinations of Madoff and found nothing — because they only asked Madoff for documents, then verified documents with Madoff. The scheme collapsed in December 2008 when the financial crisis triggered $7B in simultaneous redemption requests. Madoff's sons turned him in after he confessed to them.</p>`,
        techniques: `<ul class="detect"><li><strong>Statistical / quantitative analysis:</strong> Markopolos showed that Madoff's reported strategy could not generate those returns — the options volume needed didn't even exist in the market</li>
            <li><strong>Independent broker confirmation:</strong> Markopolos verified Madoff's claimed trades with exchanges — no such trades were on record</li>
            <li><strong>Auditor quality review:</strong> A 3-person firm auditing a $65B fund is itself a massive red flag — due diligence should always review auditor size and capacity</li>
            <li><strong>Custody verification:</strong> Madoff served as his own custodian — a fundamental conflict. Independent custody is a basic investor protection</li>
            <li><strong>Whistleblower tip analysis:</strong> SEC failed to follow through — the institutional lesson is that tips must be investigated with independent verification, not by asking the subject</li></ul>`,
        cfe_takeaway: `<ul class="tip"><li>Madoff = the definitive Ponzi scheme case. Know the three elements: fabricated returns, new money pays old investors, collapse when net redemptions exceed new inflows</li>
            <li>Key control failure: no independent custody + no credible auditor = no verification possible</li>
            <li>Markopolos's SEC submissions are published — reading them is the best lesson in quantitative fraud detection</li>
            <li>CFE exam: Ponzi scheme classified as <em>investment fraud</em> — related to skimming concept (AM) but in investment context</li>
            <li>SEC's failure led to the Dodd-Frank whistleblower bounty program (10–30% of sanctions over $1M)</li></ul>`
    },
    {
        id: "cs5", schemeGroup: "FR",
        company: "HealthSouth Corporation", country: "USA", year: "2003",
        loss: "$2.7B in overstated earnings over 7 years",
        perpetrators: "Richard Scrushy (CEO) — acquitted criminally, convicted civilly. 15 CFOs and senior executives pleaded guilty.",
        codes: ["FR1","FR7"],
        summary: "HealthSouth inflated earnings by $2.7B through thousands of fictitious journal entries. Seventeen CFOs participated over 7 years. Each quarter, accountants were told to 'fix it' — meaning make up entries to hit Wall Street targets. Called 'entries that never were' by participants.",
        what_happened: `<p>HealthSouth was the largest US provider of outpatient surgery and rehabilitation. CEO Richard Scrushy demanded the company hit analyst earnings estimates every quarter. When real results fell short:</p>
            <ul class="red"><li>CFO would calculate the "hole" — the gap between actual and expected earnings</li>
            <li>Accounting staff would create fictitious journal entries to fill the hole — debiting assets, crediting revenue or reducing expense accounts</li>
            <li>Called internally "filling the gap" or "entries that never were" — participants knew they were fake</li>
            <li>Over 7 years, 17 different CFOs rotated through — each was told the scheme on their first day and given a choice to participate or leave</li>
            <li>Scrushy had armed guards at his office and allegedly threatened employees who refused to cooperate</li></ul>`,
        how_caught: `<p><strong>An FBI wire tap triggered by a suspicious wire transfer unraveled everything.</strong> In 2002, a HealthSouth treasurer made a suspicious $2.5M wire transfer that triggered a bank Suspicious Activity Report (SAR). The FBI began investigating. They flipped CFO William Owens — he agreed to wear a wire and recorded Scrushy directing the fraud. FBI also worked with the SEC. All 15 CFOs who had participated pleaded guilty. Scrushy was acquitted in his criminal trial (first CEO acquitted under SOX in 2005) — but convicted in a separate civil bribery case related to Alabama governor corruption.</p>`,
        techniques: `<ul class="detect"><li><strong>SAR investigation:</strong> The initial trigger was a bank SAR — shows the importance of AML monitoring as a fraud detection tool</li>
            <li><strong>Undercover operation / wire:</strong> FBI used a cooperating witness (CFO Owens) wearing a wire — producing direct recorded evidence of Scrushy directing the fraud</li>
            <li><strong>Journal entry analysis:</strong> After the FBI referral, SEC traced thousands of round-number, unsupported JEs all posted near quarter-end</li>
            <li><strong>Ratio analysis:</strong> HealthSouth's margins were implausibly stable and always slightly above analyst estimates — a statistical impossibility in a real business</li>
            <li><strong>Cooperation strategy:</strong> Flipping lower-level participants against senior management is a core investigation technique — 15 out of 17 CFOs cooperated</li></ul>`,
        cfe_takeaway: `<ul class="tip"><li>HealthSouth = the textbook example of top-management tone creating systemic fraud culture</li>
            <li>Key exam concept: <em>earnings management</em> — when every quarter hits exactly the target, that itself is a red flag (zero variance is statistically impossible)</li>
            <li>SARs are a fraud detection trigger — AML monitoring catches non-AML fraud too</li>
            <li>Scrushy's criminal acquittal shows that recorded evidence alone may not convict — jury selection and courtroom strategy matter</li>
            <li>CFE exam: FR1 (inappropriate JEs) is the primary scheme; FR7 (concealed expenses via false debits to assets)</li></ul>`
    },
    {
        id: "cs6", schemeGroup: "FR",
        company: "Satyam Computer Services", country: "India", year: "2009",
        loss: "$1.47B in fabricated cash; stock fell 78% in one trading session",
        perpetrators: "Ramalinga Raju (Chairman & CEO) — confessed; sentenced to 7 years. CFO Vadlamani Srinivas also convicted.",
        codes: ["FR1","FR11"],
        summary: "Called 'India's Enron.' Satyam's chairman fabricated $1.47B in cash balances for 7 years using forged bank statements, fake fixed deposit receipts, and inflated accounts receivable. Uniquely — he confessed himself, via a letter to the board, when his attempt to cover the fraud through a related-party acquisition collapsed.",
        what_happened: `<p>Satyam was India's 4th largest IT company, listed on NYSE. From 2003 onward:</p>
            <ul class="red"><li>Raju inflated cash balances each quarter by creating fake bank statements and fixed deposit receipts — at peak, $1.47B of $1.6B in reported cash was fictitious</li>
            <li>Accrued interest on the fake deposits was also fabricated each quarter to maintain consistency</li>
            <li>Revenue was inflated by ~$100M/year through fake invoices to fictional clients</li>
            <li>The fraud began small and "snowballed" — Raju later said it was "like riding a tiger, not knowing how to get off"</li>
            <li>Auditor PricewaterhouseCoopers India failed to independently confirm cash balances for 9 years</li>
            <li>December 2008: Raju tried to use Satyam's fake cash to acquire his own family's real estate companies (Maytas = Satyam reversed). Shareholders revolted, share price collapsed. He could no longer hide the gap.</li></ul>`,
        how_caught: `<p><strong>Raju confessed in writing.</strong> On January 7, 2009, he sent a letter to the board of directors admitting the fraud in detail — explaining the fabricated cash, the fake invoices, and the "snowball" growth of the scheme. He then surrendered to police. Subsequent forensic audit by KPMG and Deloitte confirmed the full extent. PwC India partners were arrested and later convicted for negligence. Satyam was acquired by Tech Mahindra, which restored it.</p>`,
        techniques: `<ul class="detect"><li><strong>Independent bank confirmation (the control that failed):</strong> PwC accepted bank balance certificates provided BY Satyam management instead of confirming directly with banks — the most basic audit failure</li>
            <li><strong>Forensic cash audit:</strong> After the confession, KPMG contacted all banks directly and received written confirmations that the accounts either didn't exist or had negligible balances</li>
            <li><strong>Fixed deposit verification:</strong> Investigators contacted the Reserve Bank of India to verify FD certificates — all fabricated</li>
            <li><strong>Revenue testing:</strong> Client confirmations of receivables revealed that several "clients" didn't exist or had no contract with Satyam</li>
            <li><strong>Document metadata:</strong> Forged bank statements had formatting inconsistencies and print artifacts inconsistent with genuine bank documents</li></ul>`,
        cfe_takeaway: `<ul class="tip"><li>Satyam = the case that proves bank confirmations MUST go directly from auditor to bank — never through the client</li>
            <li>Key lesson: audit confirmations sent to addresses <em>provided by the client</em> are worthless — the client can intercept and forge them</li>
            <li>The "snowball" confession is a key behavioral indicator — perpetrators often describe the fraud as growing beyond their control</li>
            <li>CFE exam: FR11 (false disclosures of cash), FR1 (JE manipulation to record fake interest income)</li>
            <li>India enacted the Companies Act 2013 in direct response to Satyam — requiring independent directors and audit committee oversight</li></ul>`
    }
];

const lawTopics = [
    {
        "id": "law1",
        "code": "LAW-01",
        "cat": "ELEMENTS",
        "jur": "General / Common Law",
        "sphere": "Legal Fundamentals",
        "title": "The Four Legal Elements of Fraud & Standards of Proof",
        "description": "Under common law and statutory jurisprudence, fraud requires proving four distinct elements. Understanding the gap between civil and criminal standards is essential for court admissibility.",
        "content": "<p><strong>The Four Universal Legal Elements of Fraud:</strong></p>\n            <ul class=\"detect\">\n                <li><strong>1. Material False Statement:</strong> A representation of an existing fact (not mere opinion or puffery) that is substantially false and significant enough to affect a decision.</li>\n                <li><strong>2. Knowledge / Scienter:</strong> The perpetrator knew the representation was false at the time it was made, or acted with reckless disregard for the truth.</li>\n                <li><strong>3. Reliance:</strong> The victim reasonably relied upon the false representation when acting or parting with property/funds.</li>\n                <li><strong>4. Financial Damages:</strong> The victim suffered actual economic harm or injury as a direct, proximate result of the reliance.</li>\n            </ul>\n            <h4>Civil vs. Criminal Standards of Proof</h4>\n            <ul class=\"red\">\n                <li><strong>Criminal Prosecution:</strong> Burden rests on the government; standard is <em>Beyond a Reasonable Doubt</em> (~99% certainty). Penalties include incarceration, statutory fines, and mandatory criminal restitution.</li>\n                <li><strong>Civil Litigation:</strong> Brought by private plaintiffs/victims; standard is <em>Preponderance of the Evidence</em> (>50% probability) or in some jurisdictions <em>Clear and Convincing Evidence</em> (~75%). Remedies include actual damages, punitive damages, and equitable asset recovery.</li>\n            </ul>\n            <h4>CFE Exam Tip</h4>\n            <ul class=\"tip\">\n                <li>Lack of damages = No fraud. If an employee submits a fraudulent invoice, but Accounts Payable catches it before issuing payment, the legal tort of civil fraud is incomplete (though attempted criminal fraud or wire fraud may still apply).</li>\n                <li>Circumstantial evidence is the primary tool to prove <em>Scienter</em> (state of mind). Perpetrators rarely sign written admissions of corrupt intent beforehand.</li>\n            </ul>"
    },
    {
        "id": "law2",
        "code": "LAW-02",
        "cat": "STATUTES",
        "jur": "🇺🇸 United States",
        "sphere": "Corporate Governance / Financial Reporting",
        "title": "Sarbanes-Oxley Act of 2002 (SOX) — Forensic Mandates",
        "description": "Enacted following Enron and WorldCom, SOX fundamentally altered corporate governance, internal controls, and executive liability for financial fraud.",
        "content": "<p><strong>Core SOX Sections Every CFE Must Master:</strong></p>\n            <ul class=\"detect\">\n                <li><strong>Section 302 (Corporate Responsibility for Financial Reports):</strong> CEO and CFO must personally certify every quarterly (10-Q) and annual (10-K) report. They certify that financial statements fairly present in all material respects the financial condition, and that internal controls were reviewed within the last 90 days.</li>\n                <li><strong>Section 404 (Management Assessment of Internal Controls):</strong> Management must establish, maintain, and assess an adequate Internal Control over Financial Reporting (ICFR) structure. Annual reports must contain an internal control report and an independent auditor attestation.</li>\n                <li><strong>Section 802 (Criminal Penalties for Altering Documents):</strong> Imposes fines and up to <strong>20 years imprisonment</strong> for knowingly altering, destroying, mutilating, concealing, or falsifying any record with the intent to impede or obstruct an ongoing or contemplated federal investigation.</li>\n                <li><strong>Section 906 (Corporate Fraud Accountability):</strong> Criminal penalties for willfully certifying financial statements known not to comply with SOX: up to <strong>$5,000,000 fine and 20 years in prison</strong>.</li>\n            </ul>\n            <h4>Audit Committee Independence Mandate</h4>\n            <ul class=\"red\">\n                <li>Public companies must maintain an Audit Committee comprised solely of independent directors.</li>\n                <li>At least one member must be a verified \"Financial Expert\" (GAAP, audit committee, internal accounting controls experience).</li>\n                <li>Audit Committee must establish confidential, anonymous whistleblower intake mechanisms for accounting complaints.</li>\n            </ul>\n            <h4>CFE Exam Tip</h4>\n            <ul class=\"tip\">\n                <li>SOX applies to all SEC-registered public companies, including foreign private issuers listed on US stock exchanges.</li>\n                <li>Section 802 applies even before a formal subpoena is served: destroying files when an investigation is merely \"contemplated\" constitutes criminal obstruction of justice.</li>\n            </ul>"
    },
    {
        "id": "law3",
        "code": "LAW-03",
        "cat": "STATUTES",
        "jur": "🇺🇸 US + 🇬🇧 UK (comparative)",
        "sphere": "Anti-Corruption / Bribery",
        "title": "Foreign Corrupt Practices Act (FCPA) & UK Bribery Act 2010",
        "description": "The primary statutes governing cross-border anti-corruption enforcement. Significant jurisdictional and structural differences dictate international compliance.",
        "content": "<p><strong>FCPA (15 U.S.C. §§ 78dd-1, et seq.) — Two Core Provisions:</strong></p>\n            <ul class=\"detect\">\n                <li><strong>1. Anti-Bribery Provisions:</strong> Prohibits corruptly paying, offering, or promising anything of value to any foreign official, foreign political party, or candidate to influence an official act or obtain/retain business.</li>\n                <li><strong>2. Books and Records & Internal Controls Provisions:</strong> Requires issuers to maintain books, records, and accounts that accurately and fairly reflect transactions in reasonable detail, and devise internal accounting controls preventing off-the-books slush funds.</li>\n            </ul>\n            <h4>FCPA vs. UK Bribery Act 2010 Comparison</h4>\n            <table class=\"cheatsheet-table text-xs mb-3\">\n                <thead><tr><th>Feature</th><th>US FCPA</th><th>UK Bribery Act 2010</th></tr></thead>\n                <tbody>\n                    <tr><td><strong>Scope of Bribery</strong></td><td>Public foreign officials only</td><td>Public officials AND commercial (private) bribery</td></tr>\n                    <tr><td><strong>Facilitation Payments (\"Grease\")</strong></td><td>Narrow affirmative defense for routine governmental actions</td><td><strong>Strictly illegal</strong> (zero tolerance/no exception)</td></tr>\n                    <tr><td><strong>Corporate Liability</strong></td><td>Respondeat superior / direct complicity</td><td>Section 7: Strict liability for \"failure to prevent bribery\"</td></tr>\n                    <tr><td><strong>Defense Available</strong></td><td>Bona fide business expenses; lawful under local written law</td><td>Proof of \"Adequate Procedures\" in place to prevent bribery</td></tr>\n                </tbody>\n            </table>\n            <h4>CFE Exam Tip</h4>\n            <ul class=\"tip\">\n                <li>Under the FCPA, a \"foreign official\" is broadly defined: includes employees of state-owned enterprises (SOEs), public universities, and municipal transit agencies (e.g., doctors at state-run hospitals).</li>\n                <li>FCPA accounting provisions can be violated even if no actual bribe was paid — maintaining an unrecorded \"cash box\" or misclassifying payments as \"consulting fees\" is an independent statutory violation.</li>\n            </ul>"
    },
    {
        "id": "law4",
        "code": "LAW-04",
        "cat": "EVIDENCE",
        "jur": "🇺🇸 United States (federal courts)",
        "sphere": "Evidence / Admissibility",
        "title": "Federal Rules of Evidence (FRE) & Business Records Exception",
        "description": "Rules governing the admissibility of accounting books, digital records, and physical evidence in federal and state judicial proceedings.",
        "content": "<p><strong>Key Federal Rules of Evidence in Fraud Prosecutions:</strong></p>\n            <ul class=\"detect\">\n                <li><strong>FRE 803(6) — Records of a Regularly Conducted Activity (Business Records Exception):</strong> Hearsay is generally inadmissible, but corporate accounting ledgers, bank statements, and vendor invoices are admissible if established by the custodian of records:\n                    <ul class=\"list-disc list-inside ml-4 mt-1 text-text-muted\">\n                        <li>The record was made at or near the time by — or from information transmitted by — someone with firsthand knowledge;</li>\n                        <li>The record was kept in the regular course of business activity;</li>\n                        <li>Making the record was a regular business practice;</li>\n                        <li>Neither source of information nor circumstances indicate a lack of trustworthiness.</li>\n                    </ul>\n                </li>\n                <li><strong>FRE 1002 — Best Evidence Rule:</strong> Requires the original writing, recording, or photograph to prove its content, unless an exception applies (e.g., originals lost/destroyed without bad faith under FRE 1004). Certified bitstream digital duplicates satisfy this rule.</li>\n                <li><strong>FRE 901 — Authenticating or Identifying Evidence:</strong> Proponent must produce evidence sufficient to support a finding that the item is what the proponent claims it is (chain of custody receipts, forensic disk image hashes).</li>\n            </ul>\n            <h4>CFE Exam Tip</h4>\n            <ul class=\"tip\">\n                <li>Investigative reports prepared specifically for litigation do NOT qualify as business records under FRE 803(6) because they are not created in the ordinary course of regular business operations; they are evaluated under work product doctrines.</li>\n                <li>Chain of custody is required whenever physical or digital evidence is subject to tampering, substitution, or volatile alteration.</li>\n            </ul>"
    },
    {
        "id": "law5",
        "code": "LAW-05",
        "cat": "RIGHTS",
        "jur": "🇺🇸 United States",
        "sphere": "Constitutional Rights / Workplace Investigations",
        "title": "Constitutional Protections & Workplace Searches",
        "description": "How the Fourth, Fifth, and Sixth Amendments apply to fraud examiners in private corporate settings versus public/government inquiries.",
        "content": "<p><strong>Private Employer vs. Government State Action:</strong></p>\n            <ul class=\"detect\">\n                <li><strong>Fourth Amendment (Unreasonable Searches & Seizures):</strong> Restricts ONLY government entities and law enforcement. A private employer or private CFE does NOT violate the Fourth Amendment by searching an employee's desk, company computer, or vehicle on company property.</li>\n                <li><strong>Exceptions:</strong> If private investigators act at the explicit direction, instigation, or control of law enforcement, they become \"agents of the state\" and Fourth Amendment limits attach.</li>\n            </ul>\n            <h4>Workplace Expectation of Privacy</h4>\n            <ul class=\"red\">\n                <li>Employees may claim a common law invasion of privacy tort unless the employer has eliminated the \"reasonable expectation of privacy\" through clear, signed electronic communication policies.</li>\n                <li><strong>Best Practice:</strong> Prominently display system login banners: <em>\"This system is property of OmniCorp. Users have no expectation of privacy. All communications and files are subject to monitoring and retrieval without notice.\"</em></li>\n            </ul>\n            <h4>Fifth Amendment in Corporate Inquiries</h4>\n            <ul class=\"detect\">\n                <li>Private sector employees cannot invoke the Fifth Amendment right to remain silent to shield their jobs. An employee who refuses to answer questions during a legitimate internal fraud investigation may be terminated for cause (insubordination).</li>\n            </ul>\n            <h4>CFE Exam Tip</h4>\n            <ul class=\"tip\">\n                <li>Corporations do not possess a Fifth Amendment privilege against self-incrimination! The privilege is purely personal to natural individuals. A corporate custodian cannot refuse to produce corporate records on Fifth Amendment grounds.</li>\n            </ul>"
    },
    {
        "id": "law6",
        "code": "LAW-06",
        "cat": "RIGHTS",
        "jur": "🇺🇸 United States (public sector)",
        "sphere": "Public Employee Rights",
        "title": "Public Employee Rights: Garrity vs. Miranda vs. Kalkines",
        "description": "The legal framework governing internal interviews of government and municipal employees where administrative discipline overlaps with criminal jeopardy.",
        "content": "<p><strong>Core Legal Doctrines in Public Sector Inquiries:</strong></p>\n            <ul class=\"detect\">\n                <li><strong>Miranda Warnings (Miranda v. Arizona, 1966):</strong> Required ONLY when two conditions are met simultaneously: <strong>(1) Custody</strong> (formal arrest or restraint on freedom of movement) and <strong>(2) Interrogation</strong> conducted by law enforcement officers. Internal corporate interviews never require Miranda warnings.</li>\n                <li><strong>Garrity Rights (Garrity v. New Jersey, 1967):</strong> Protects public employees from being compelled to incriminate themselves. If a public employee is threatened with termination for refusing to answer questions, their statements are deemed coerced and CANNOT be used against them in a subsequent criminal prosecution.</li>\n                <li><strong>Kalkines Warning (Kalkines v. United States, 1973):</strong> When a public agency grants the employee \"use and derivative-use immunity\" from criminal prosecution, the employee is required to answer questions regarding their official duties or face termination. Statements can be used for administrative firing, but never in criminal court.</li>\n            </ul>\n            <h4>Comparison Table</h4>\n            <table class=\"cheatsheet-table text-xs mb-3\">\n                <thead><tr><th>Warning</th><th>Setting</th><th>Immunity Granted?</th><th>Can Employee Be Fired for Silence?</th></tr></thead>\n                <tbody>\n                    <tr><td><strong>Miranda</strong></td><td>Custodial Police Interrogation</td><td>No</td><td>No (Constitutional Right)</td></tr>\n                    <tr><td><strong>Garrity</strong></td><td>Public Employer Inquest</td><td>No (Coerced statements suppressed)</td><td>No (Without immunity)</td></tr>\n                    <tr><td><strong>Kalkines</strong></td><td>Public Employer + Formal Immunity</td><td><strong>Yes (Criminal Use Immunity)</strong></td><td><strong>Yes (Mandatory to answer)</strong></td></tr>\n                </tbody>\n            </table>\n            <h4>CFE Exam Tip</h4>\n            <ul class=\"tip\">\n                <li>If a public employee is questioned without a Garrity/Kalkines clarification and confesses under perceived threat of dismissal, the confession will be suppressed in criminal court under the Fifth Amendment.</li>\n            </ul>"
    },
    {
        "id": "law7",
        "code": "LAW-07",
        "cat": "EVIDENCE",
        "jur": "🇺🇸 United States (varies by state)",
        "sphere": "Expert Witness Standards",
        "title": "Expert Witness Testimony Standards (Daubert, Frye & Kumho Tire)",
        "description": "The admissibility thresholds governing forensic accountants and fraud examiners serving as expert witnesses in federal and state courts.",
        "content": "<p><strong>Fact Witness vs. Expert Witness:</strong></p>\n            <ul class=\"detect\">\n                <li><strong>Fact Witness (Percipient):</strong> Testifies only to personal observations, contemporaneous events, and authenticated documents (FRE 602). Cannot offer opinions.</li>\n                <li><strong>Expert Witness (FRE 702):</strong> Permitted to testify in the form of an opinion if scientific, technical, or specialized knowledge will help the trier of fact understand evidence or determine a fact in issue.</li>\n            </ul>\n            <h4>The Daubert Trilogy Framework</h4>\n            <ul class=\"red\">\n                <li><strong>Frye Standard (Frye v. United States, 1923):</strong> Old rule still used in several state courts (NY, CA, IL). Scientific technique must be \"generally accepted\" within the relevant scientific community.</li>\n                <li><strong>Daubert v. Merrell Dow (1993):</strong> The trial judge acts as an active <strong>gatekeeper</strong>. 4 Non-Exclusive Factors:\n                    <ul class=\"list-disc list-inside ml-4 mt-1 text-text-muted\">\n                        <li>Whether the theory or technique can be (and has been) tested;</li>\n                        <li>Whether it has been subjected to peer review and publication;</li>\n                        <li>Known or potential error rate and standards controlling operation;</li>\n                        <li>General acceptance in the relevant scientific community.</li>\n                    </ul>\n                </li>\n                <li><strong>Kumho Tire Co. v. Carmichael (1999):</strong> Explicitly extended the Daubert gatekeeper requirement to <strong>non-scientific specialized technical experts</strong> — including CFEs, forensic economists, and valuation experts.</li>\n            </ul>\n            <h4>CFE Exam Tip</h4>\n            <ul class=\"tip\">\n                <li>Even certified experts will be disqualified if their methodology is speculative or lacks testable empirical foundation (e.g., using unverified Benford distributions on arbitrary datasets without error calibration).</li>\n            </ul>"
    },
    {
        "id": "law8",
        "code": "LAW-08",
        "cat": "ETHICS",
        "jur": "🇺🇸 United States (common-law privilege doctrine)",
        "sphere": "Legal Privilege / Investigation Protocol",
        "title": "Attorney-Client Privilege, Work Product & The Kovel Doctrine",
        "description": "Legal mechanisms protecting investigative workpapers, forensic audits, and interview memoranda from discovery by opposing counsel.",
        "content": "<p><strong>Core Legal Protections:</strong></p>\n            <ul class=\"detect\">\n                <li><strong>Attorney-Client Privilege:</strong> Protects confidential communications made between an attorney and their client for the purpose of obtaining or providing legal advice. Absolute privilege unless waived.</li>\n                <li><strong>Work Product Doctrine (FRCP 26(b)(3)):</strong> Protects documents and tangible things prepared in anticipation of litigation or for trial by or for another party or its representative. Qualified privilege (can be overcome upon showing of substantial need and undue hardship).</li>\n                <li><strong>Kovel Doctrine (United States v. Kovel, 1961):</strong> Extends attorney-client privilege to non-attorney experts (e.g., CFEs, forensic accountants) retained directly by legal counsel to translate and interpret complex financial records so counsel can render legal advice.</li>\n            </ul>\n            <h4>How to Preserve Privilege (Engagement Protocols)</h4>\n            <ul class=\"red\">\n                <li>The CFE must be retained <strong>directly by external or in-house legal counsel</strong>, NOT by management or the Chief Internal Auditor.</li>\n                <li>The engagement letter must explicitly state that the CFE is retained to assist counsel in rendering legal advice in anticipation of litigation.</li>\n                <li>All workpapers, draft memos, and interview transcripts must be labeled: <em>\"CONFIDENTIAL: ATTORNEY-CLIENT PRIVILEGED & ATTORNEY WORK PRODUCT\"</em>.</li>\n                <li>Invoices must be submitted directly to counsel.</li>\n            </ul>\n            <h4>CFE Exam Tip</h4>\n            <ul class=\"tip\">\n                <li>Sharing an investigative report with outside independent financial statement auditors typically <strong>waives the attorney-client privilege</strong> regarding the entire subject matter!</li>\n            </ul>"
    },
    {
        "id": "law9",
        "code": "LAW-09",
        "cat": "STATUTES",
        "jur": "🇺🇸 United States",
        "sphere": "Whistleblower Incentives",
        "title": "Whistleblower Laws, Dodd-Frank SEC Bounty & Qui Tam (FCA)",
        "description": "Statutory frameworks incentivizing whistleblower tips, financial bounty programs, and anti-retaliation protections.",
        "content": "<p><strong>Key Federal Whistleblower Programs:</strong></p>\n            <ul class=\"detect\">\n                <li><strong>False Claims Act (31 U.S.C. § 3729) — Qui Tam Provisions:</strong> Allows private individuals (\"relators\") to file civil lawsuits on behalf of the federal government against entities that defraud government programs (Medicare, defense procurement).\n                    <ul class=\"list-disc list-inside ml-4 mt-1 text-text-muted\">\n                        <li>FCA imposes treble damages (3x actual loss) plus statutory penalties per false claim.</li>\n                        <li>Whistleblower receives <strong>15% to 30%</strong> of the total government recovery.</li>\n                    </ul>\n                </li>\n                <li><strong>Dodd-Frank Wall Street Reform Act (2010):</strong> Established the SEC Whistleblower Office.\n                    <ul class=\"list-disc list-inside ml-4 mt-1 text-text-muted\">\n                        <li>Eligible whistleblowers who voluntarily provide original information leading to successful enforcement actions over $1,000,000 receive <strong>10% to 30%</strong> of collected monetary sanctions.</li>\n                        <li>Robust anti-retaliation provisions: immediate federal court remedy, reinstatement, and double back-pay plus interest.</li>\n                    </ul>\n                </li>\n            </ul>\n            <h4>CFE Exam Tip</h4>\n            <ul class=\"tip\">\n                <li>Under Dodd-Frank, individuals whose primary job function involves compliance, internal audit, or forensic investigation are generally excluded from receiving SEC bounties unless: (1) disclosure is necessary to prevent substantial injury, (2) the entity is impeding the investigation, or (3) 120 days have passed since reporting internally.</li>\n            </ul>"
    },
    {
        "id": "law10",
        "code": "LAW-10",
        "cat": "ETHICS",
        "jur": "🌐 Global / Professional (ACFE membership)",
        "sphere": "Professional Ethics",
        "title": "ACFE Code of Professional Ethics (The 7 Mandatory Rules)",
        "description": "The binding ethical canons governing all Certified Fraud Examiners. Violations lead to formal disciplinary trials and revocation of the credential.",
        "content": "<p><strong>The Seven Mandatory Canons of the ACFE Code of Ethics:</strong></p>\n            <ul class=\"detect\">\n                <li><strong>Rule 1 (Integrity & Objectivity):</strong> An examiner shall not commit any discreditable act and shall maintain objectivity in the discharge of professional obligations.</li>\n                <li><strong>Rule 2 (Professional Competence):</strong> An examiner shall only undertake engagements they can reasonably expect to complete with professional competence.</li>\n                <li><strong>Rule 3 (Due Professional Care):</strong> An examiner shall adequately plan and supervise professional engagements and conduct examinations with thoroughness.</li>\n                <li><strong>Rule 4 (Full Disclosure of Findings):</strong> An examiner shall reveal all material facts discovered during an examination which, if omitted, would distort the report or conceal information.</li>\n                <li><strong>Rule 5 (Confidentiality):</strong> An examiner shall not disclose any confidential information without proper authorization, except in response to formal legal process.</li>\n                <li><strong>RULE 6 (THE ABSOLUTE OPINION BAN — HIGHEST YIELD):</strong> An examiner <strong>shall NOT express an opinion on the guilt or innocence</strong> of any suspect or party to an investigation! Guilt is a legal adjudication reserved solely for the court.</li>\n                <li><strong>Rule 7 (Compliance with ACFE Standards):</strong> An examiner shall continually strive to increase competence and adhere to the Standards for Consulting Services.</li>\n            </ul>\n            <h4>CFE Exam Tip</h4>\n            <ul class=\"tip\">\n                <li>On the CFE exam, any question asking if an examiner may write in their report: <em>\"Arthur Vance is guilty of embezzlement\"</em> has only ONE correct answer: <strong>NO, NEVER</strong>. The report must state: <em>\"Arthur Vance transferred $482,000 to an account in his name without authorization.\"</em></li>\n            </ul>"
    },
    {
        "id": "law11",
        "code": "LAW-11",
        "cat": "EVIDENCE",
        "jur": "🇬🇧 UK / Commonwealth (used internationally)",
        "sphere": "Civil Asset Recovery",
        "title": "Civil Asset Recovery & Pre-Judgment Injunctions (Mareva & Anton Piller)",
        "description": "Extraordinary equitable remedies in civil fraud litigation used to freeze stolen assets and seize evidence before the perpetrator can dissipate or destroy them.",
        "content": "<p><strong>High-Stakes Pre-Judgment Equitable Orders:</strong></p>\n            <ul class=\"detect\">\n                <li><strong>Mareva Injunction (Asset Freezing Order):</strong> An emergency, ex parte (without prior notice) court order restraining the defendant from disposing of, transferring, or hiding assets up to the value of the plaintiff's claim, both domestically and worldwide.\n                    <ul class=\"list-disc list-inside ml-4 mt-1 text-text-muted\">\n                        <li>Requirements: Plaintiff must prove an arguable case, demonstrate a real risk of asset dissipation, and make full and frank disclosure.</li>\n                    </ul>\n                </li>\n                <li><strong>Anton Piller Order (Civil Search Order):</strong> An emergency order allowing plaintiff's legal team to enter the defendant's premises unannounced to inspect and seize evidence, documents, and digital storage devices.\n                    <ul class=\"list-disc list-inside ml-4 mt-1 text-text-muted\">\n                        <li>Prevents destruction of smoking-gun proof in computer hard drives, notebooks, or offshore bank files.</li>\n                    </ul>\n                </li>\n                <li><strong>Letters Rogatory (Hague Convention):</strong> Formal request from a court to a foreign court for judicial assistance to compel witness testimony or obtain bank records located in foreign jurisdictions.</li>\n            </ul>\n            <h4>CFE Exam Tip</h4>\n            <ul class=\"tip\">\n                <li>In civil recovery, speed is paramount. Once a fraudster learns they are under suspicion, the median time to transfer funds into offshore shell accounts or cryptocurrency mixers is less than 48 hours.</li>\n            </ul>"
    },
    {
        "id": "law12",
        "code": "LAW-12",
        "cat": "STATUTES",
        "jur": "🇺🇸 United States",
        "sphere": "Securities / Insider Trading",
        "title": "Securities Fraud, Insider Trading (Rule 10b-5) & Market Manipulation",
        "description": "The regulatory framework governing securities violations under the Securities Exchange Act of 1934.",
        "content": "<p><strong>SEC Rule 10b-5 (Employment of Manipulative and Deceptive Devices):</strong></p>\n            <ul class=\"detect\">\n                <li>Unlawful to employ any device, scheme, or artifice to defraud; make any untrue statement of a material fact; or engage in any act or practice that operates as a fraud in connection with the purchase or sale of any security.</li>\n                <li>Requires proving <strong>Scienter</strong> — intentional misconduct or extreme recklessness (negligence is insufficient for Rule 10b-5).</li>\n            </ul>\n            <h4>Insider Trading Legal Theories</h4>\n            <ul class=\"red\">\n                <li><strong>Classical Theory:</strong> Corporate insider (officer, director, employee) trades company stock using material non-public information (MNPI) in breach of fiduciary duty to shareholders.</li>\n                <li><strong>Misappropriation Theory (United States v. O'Hagan, 1997):</strong> An outsider (lawyer, consultant, printer) trades stock using MNPI entrusted to them in confidence by the source, deceiving the source of the confidential information.</li>\n                <li><strong>Tipping Liability (Dirks v. SEC):</strong> Tipper is liable if they breached a duty for personal benefit (financial or reputational); tippee is liable if they knew or should have known the information was disclosed in breach of duty.</li>\n            </ul>\n            <h4>CFE Exam Tip</h4>\n            <ul class=\"tip\">\n                <li>Information is \"material\" under securities law if there is a substantial likelihood that a reasonable investor would consider it important in deciding whether to buy, sell, or hold securities.</li>\n            </ul>"
    },
];

const euTopics = [
    {
        "id": "eu1",
        "code": "EU-01",
        "cat": "EUWIDE",
        "title": "EU Anti-Money Laundering Directives (AMLD4–6) & the Incoming AMLR/AMLA",
        "description": "The evolving EU AML legal architecture: four directives transposed into national law, now being replaced by a single directly-applicable regulation and a new EU-level supervisor.",
        "content": "<p><strong>From Directives to a Single Rulebook:</strong></p>\n            <ul class=\"detect\">\n                <li><strong>AMLD4 (2015/849):</strong> Introduced the risk-based approach, UBO (ultimate beneficial owner) registers, and simplified/enhanced due diligence tiers.</li>\n                <li><strong>AMLD5 (2018/843):</strong> Extended obligated entities to crypto-asset exchanges and wallet providers, lowered prepaid card anonymity thresholds, and originally opened UBO registers to the general public.</li>\n                <li><strong>AMLD6 (2018/1673):</strong> Harmonized 22 predicate offences for money laundering across member states, extended criminal liability to legal persons, and set minimum 4-year imprisonment for the most serious ML offences.</li>\n                <li><strong>AMLR (Regulation (EU) 2024/1624):</strong> A directly-applicable regulation (no national transposition needed) replacing most of AMLD4-6's substantive rules from 2027 — ends the patchwork of divergent national implementations.</li>\n                <li><strong>AMLA (EU AML Authority, Frankfurt):</strong> New supervisory body directly supervising the ~40 riskiest cross-border financial institutions from 2028, plus coordinating national FIUs (Financial Intelligence Units).</li>\n            </ul>\n            <h4>Important Correction: UBO Registers Are No Longer Fully Public</h4>\n            <ul class=\"red\">\n                <li>The CJEU (Joined Cases C-37/20 & C-601/20, <em>WM and Sovim SA v Luxembourg Business Registers</em>, Nov 2022) ruled that AMLD5's general-public-access provision violated privacy rights under the EU Charter. Member states — including Luxembourg — suspended open public access; access is now limited to authorities, AML/CFT-obligated professionals, and those showing a \"legitimate interest.\" See EU-07 for the Luxembourg-specific timeline.</li>\n            </ul>\n            <h4>Practitioner Tip</h4>\n            <ul class=\"tip\">\n                <li>Don't assume a UBO register is a free public lookup anymore — check each member state's current access regime (Slovakia's RPVS remains broadly accessible; Luxembourg's RBE now requires a demonstrated professional/legitimate interest).</li>\n            </ul>"
    },
    {
        "id": "eu2",
        "code": "EU-02",
        "cat": "EUWIDE",
        "title": "EU Market Abuse Regulation (MAR) — Insider Dealing & Market Manipulation",
        "description": "Regulation (EU) 596/2014 — the EU's direct equivalent to SEC Rule 10b-5, but broader in scope and directly applicable across all member states.",
        "content": "<p><strong>MAR's Three Prohibited Behaviors:</strong></p>\n            <ul class=\"detect\">\n                <li><strong>Insider Dealing (Art. 8):</strong> Using inside information to acquire or dispose of financial instruments, or cancelling/amending an order based on inside information.</li>\n                <li><strong>Unlawful Disclosure (Art. 10):</strong> Disclosing inside information to another person outside the normal exercise of employment, profession, or duties.</li>\n                <li><strong>Market Manipulation (Art. 12):</strong> Includes transactions giving false/misleading signals on supply, demand, or price; securing an abnormal price level; and disseminating false information through media (including social media).</li>\n            </ul>\n            <h4>MAR vs. US Rule 10b-5</h4>\n            <table class=\"cheatsheet-table text-xs mb-3\">\n                <thead><tr><th>Feature</th><th>US Rule 10b-5</th><th>EU MAR</th></tr></thead>\n                <tbody>\n                    <tr><td><strong>Scope</strong></td><td>Fraud \"in connection with\" a securities purchase/sale</td><td>Broader: covers attempted manipulation, cancelled orders, and commodity derivatives linked to spot contracts</td></tr>\n                    <tr><td><strong>Suspicious Transaction Reporting</strong></td><td>No universal mandatory STOR regime</td><td>Mandatory STOR (Suspicious Transaction and Order Report) to the national competent authority (e.g., Slovakia's NBS, Luxembourg's CSSF)</td></tr>\n                    <tr><td><strong>Issuer Obligation</strong></td><td>Reg FD (fair disclosure)</td><td>Art. 17: immediate public disclosure of inside information, with narrow delay conditions</td></tr>\n                </tbody>\n            </table>\n            <h4>Practitioner Tip</h4>\n            <ul class=\"tip\">\n                <li>MAR applies to instruments traded on any EU trading venue, MTF, or OTF — not just regulated markets — so it reaches a much wider set of issuers than US securities law reaches via Rule 10b-5.</li>\n            </ul>"
    },
    {
        "id": "eu3",
        "code": "EU-03",
        "cat": "NL",
        "title": "Dutch Wwft — Wet ter Voorkoming van Witwassen en Financieren van Terrorisme",
        "description": "The Netherlands' national AML/CFT law, transposing the EU AML Directives — the statute an AML analyst at a Dutch bank or PSP actually works under day to day.",
        "content": "<p><strong>Core Wwft Obligations for Obligated Institutions:</strong></p>\n            <ul class=\"detect\">\n                <li><strong>Client Due Diligence (Cliëntenonderzoek):</strong> Identify and verify the customer and any UBO holding &gt;25% ownership/control before establishing a business relationship.</li>\n                <li><strong>Ongoing Monitoring:</strong> Transactions must be monitored against the customer's known risk profile for the duration of the relationship, not just at onboarding.</li>\n                <li><strong>Unusual Transaction Reporting (Ongebruikelijke Transacties):</strong> Reported to the FIU-Nederland — note the Dutch threshold is \"unusual,\" a lower bar than the US \"suspicious\" standard, deliberately designed to give the FIU more raw data to triage.</li>\n                <li><strong>PEP Screening:</strong> Politically Exposed Persons automatically require Enhanced Due Diligence (EDD), regardless of transaction risk otherwise.</li>\n            </ul>\n            <h4>Wwft vs. US BSA/FinCEN Framework</h4>\n            <ul class=\"red\">\n                <li>Reporting standard: Dutch \"unusual\" (objective, indicator-list-driven) vs. US \"suspicious\" (subjective, institution's own judgment) — a frequently misunderstood distinction in EU/US comparative AML interviews.</li>\n                <li>Supervision: De Nederlandsche Bank (DNB) and the AFM supervise Wwft compliance for banks/insurers and investment firms respectively — there is no single supervisor equivalent to FinCEN.</li>\n            </ul>\n            <h4>Practitioner Tip</h4>\n            <ul class=\"tip\">\n                <li>If interviewing for a Dutch compliance role, be ready to explain the difference between an \"ongebruikelijke transactie\" (unusual transaction, reported to FIU-NL) and a \"verdachte transactie\" (suspicious transaction) — Wwft's reporting duty is triggered by the former, a lower and more mechanical threshold than a US SAR filing decision.</li>\n            </ul>"
    },
    {
        "id": "eu4",
        "code": "EU-04",
        "cat": "EUWIDE",
        "title": "EU Whistleblower Protection Directive (2019/1937)",
        "description": "The EU-wide floor for whistleblower protection across all member states, covering breaches of EU law including AML, fraud against the EU budget, and financial services regulation.",
        "content": "<p><strong>Core Protections Mandated Across All Member States:</strong></p>\n            <ul class=\"detect\">\n                <li><strong>Scope:</strong> Covers reports on breaches of EU law in public procurement, financial services, AML/CFT, product safety, environmental protection, public health, and protection of the EU's financial interests.</li>\n                <li><strong>Three-Tier Reporting Channels:</strong> Internal reporting (companies with 50+ employees must maintain a channel), external reporting (to a national competent authority), and public disclosure (protected only if internal/external channels failed or retaliation risk is imminent).</li>\n                <li><strong>Anti-Retaliation:</strong> Prohibits dismissal, demotion, negative performance reviews, and reputational damage; reverses the burden of proof — the employer must prove an adverse action was NOT retaliation.</li>\n                <li><strong>Confidentiality:</strong> The whistleblower's identity must be kept confidential unless they consent, or disclosure is a necessary and proportionate obligation under EU/national law.</li>\n            </ul>\n            <h4>Directive vs. National Implementation</h4>\n            <ul class=\"red\">\n                <li>This is a Directive, not a Regulation — each member state transposed it into national law with local variations (e.g., Slovakia's Zákon č. 54/2019 Z. z. predates and was later aligned with the EU Directive; Luxembourg's Law of 16 May 2023).</li>\n                <li>Unlike US Dodd-Frank/SEC bounties, the EU Directive does NOT mandate a financial reward system — protection is the primary mechanism, not monetary incentive.</li>\n            </ul>\n            <h4>Practitioner Tip</h4>\n            <ul class=\"tip\">\n                <li>Compare directly with the ACFE Code Rule 5 (Confidentiality, LAW-10) and the Dodd-Frank whistleblower bounty (LAW-09) — same underlying goal (surface fraud early), three different mechanisms: US pays for tips, EU protects the tipper, ACFE ethically binds the examiner's own conduct.</li>\n            </ul>"
    },
    {
        "id": "eu5",
        "code": "EU-05",
        "cat": "EUWIDE",
        "title": "DORA — Digital Operational Resilience Act (Regulation (EU) 2022/2554)",
        "description": "The EU's ICT risk management framework for the financial sector — relevant to fraud examination because ICT incidents (including fraud-enabling breaches) now carry mandatory regulatory reporting duties.",
        "content": "<p><strong>Core DORA Pillars:</strong></p>\n            <ul class=\"detect\">\n                <li><strong>ICT Risk Management (Art. 6):</strong> Financial entities must maintain a documented ICT risk management framework, reviewed at least annually.</li>\n                <li><strong>ICT Incident Reporting (Art. 17):</strong> Major ICT-related incidents — including those enabling fraud, such as a breach that facilitates account takeover — must be classified and reported to the competent authority within tight statutory timelines.</li>\n                <li><strong>Digital Operational Resilience Testing (Art. 24):</strong> Includes Threat-Led Penetration Testing (TLPT, Art. 26) for the largest/most critical entities.</li>\n                <li><strong>Third-Party ICT Risk (Art. 28):</strong> Requires a Register of Information on all ICT third-party providers and imposes oversight on \"critical\" providers (CTPPs) designated at EU level.</li>\n            </ul>\n            <h4>Why a Fraud Examiner Should Care</h4>\n            <ul class=\"red\">\n                <li>A cyber-enabled fraud scheme (e.g., Business Email Compromise, credential-stuffing account takeover) at a regulated EU financial entity may now trigger a DUAL reporting obligation: an internal fraud/SAR process AND a DORA major-incident notification, on separate clocks.</li>\n                <li>Weak third-party ICT oversight (Art. 28) is itself a fraud risk indicator — vendors with poor access controls are a common vector for account-takeover and BEC schemes.</li>\n            </ul>\n            <h4>Practitioner Tip</h4>\n            <ul class=\"tip\">\n                <li>DORA has applied since January 17, 2025 across the EU financial sector (banks, insurers, investment firms, crypto-asset service providers) — it is now a standard interview topic for compliance/fraud roles at EU financial institutions.</li>\n            </ul>"
    },
    {
        "id": "eu6",
        "code": "EU-06",
        "cat": "EUWIDE",
        "title": "GDPR Constraints on Fraud Investigations (Regulation (EU) 2016/679)",
        "description": "Investigating a suspect means processing their personal data — GDPR doesn't block fraud investigations, but it imposes real procedural constraints a US-trained examiner may not anticipate.",
        "content": "<p><strong>Where GDPR Intersects With Investigative Technique:</strong></p>\n            <ul class=\"detect\">\n                <li><strong>Lawful Basis (Art. 6):</strong> Processing a suspect's data during an internal investigation typically relies on \"legitimate interests\" (Art. 6(1)(f)) — but this requires a documented balancing test against the subject's rights, not a blanket assumption.</li>\n                <li><strong>Data Minimization (Art. 5(1)(c)):</strong> Investigators may only collect data relevant and necessary to the specific suspected fraud — broad, exploratory monitoring of an employee's full email history \"just in case\" is a GDPR violation even if the employer owns the mailbox.</li>\n                <li><strong>Data Subject Access Requests (Art. 15):</strong> A suspect under investigation can, in principle, request a copy of personal data held about them — including investigative notes — though national law often allows temporary restriction under Art. 23 while the investigation is active.</li>\n                <li><strong>Cross-Border Transfer:</strong> Moving evidence containing personal data (e.g., emails, HR files) outside the EEA to a US-based parent company or e-discovery vendor requires a valid transfer mechanism (adequacy decision, SCCs, or equivalent).</li>\n            </ul>\n            <h4>US vs. EU Contrast</h4>\n            <ul class=\"red\">\n                <li>US workplace investigations (see LAW-05, Constitutional Protections) turn mainly on \"reasonable expectation of privacy\" and employer policy banners. EU investigations must additionally satisfy GDPR's affirmative lawful-basis and proportionality requirements — a signed monitoring policy alone does not make broad surveillance lawful.</li>\n            </ul>\n            <h4>Practitioner Tip</h4>\n            <ul class=\"tip\">\n                <li>Before broad e-discovery or forensic imaging of an EU-based employee's device, document the specific suspected scheme, the minimum data set needed, and the legitimate-interest balancing test — this record is what withstands a later regulator or works-council challenge.</li>\n            </ul>"
    },
    {
        "id": "eu7",
        "code": "EU-07",
        "cat": "LU",
        "title": "Luxembourg AML/CFT Framework — Law of 12 November 2004 & CSSF Regulation 12-02",
        "description": "Luxembourg's core AML/CFT statute and its financial-sector implementing regulation, supervised by the CSSF — the framework governing the country's outsized fund administration and private banking industry.",
        "content": "<p><strong>The Two Core Texts:</strong></p>\n            <ul class=\"detect\">\n                <li><strong>Law of 12 November 2004</strong> (as amended) — Luxembourg's primary AML/CFT statute, transposing the successive EU AMLDs into national law and defining obligated professionals, CDD duties, and criminal penalties.</li>\n                <li><strong>CSSF Regulation No 12-02 of 14 December 2012</strong> (as amended, incl. Reg. 20-05) — the detailed implementing rules for entities supervised by the CSSF (Commission de Surveillance du Secteur Financier): banks, investment fund managers, and the investment funds themselves.</li>\n            </ul>\n            <h4>The RR/RC Governance Model — a Luxembourg-Specific Structure</h4>\n            <ul class=\"red\">\n                <li><strong>RR (Responsable du Respect des obligations):</strong> A member of senior management or the authorized management ultimately responsible for AML/CFT compliance.</li>\n                <li><strong>RC (Responsable du Contrôle du respect des obligations):</strong> The operational compliance officer who monitors day-to-day AML/CFT compliance and reports to the RR.</li>\n                <li><strong>Summary Report RC (SRRC):</strong> An annual report the RC prepares and the RR submits to the CSSF under Art. 42(7) of Regulation 12-02, within 5 months of the entity's year-end.</li>\n            </ul>\n            <h4>Practitioner Tip</h4>\n            <ul class=\"tip\">\n                <li>Luxembourg's fund industry (the world's 2nd-largest after the US) means AML/CFT roles there are heavily concentrated in fund administration and depositary banks, not retail banking — the risk typology skews toward investor-level CDD and source-of-wealth for institutional/HNW subscribers, not consumer transaction monitoring.</li>\n            </ul>"
    },
    {
        "id": "eu8",
        "code": "EU-08",
        "cat": "LU",
        "title": "Luxembourg UBO Register (RBE) — Post-Sovim Access Restrictions",
        "description": "The Registre des Bénéficiaires Effectifs, and the 2022 CJEU ruling that forced Luxembourg (and every other member state) to roll back public access to it.",
        "content": "<p><strong>The RBE (Registre des Bénéficiaires Effectifs):</strong></p>\n            <ul class=\"detect\">\n                <li>Established by the Law of 13 January 2019, requiring Luxembourg legal entities to declare their beneficial owner(s) — natural persons holding, directly or indirectly, more than 25% of shares/voting rights, or otherwise exercising control.</li>\n                <li>Managed by the LBR (Luxembourg Business Registers), the same body that runs the RCS (Registre de Commerce et des Sociétés) company registry.</li>\n            </ul>\n            <h4>The Sovim Ruling and What Changed</h4>\n            <ul class=\"red\">\n                <li><strong>CJEU, Joined Cases C-37/20 & C-601/20 (WM and Sovim SA v Luxembourg Business Registers, Nov. 2022):</strong> The Court struck down AMLD5's requirement that member states give the general public unrestricted access to UBO data, holding it disproportionately infringed the right to privacy and data protection under Arts. 7 & 8 of the EU Charter.</li>\n                <li>Luxembourg immediately suspended online public access to the RBE following the ruling.</li>\n                <li>A new Luxembourg law restoring controlled access entered into force <strong>1 February 2025</strong>: access is now limited to competent authorities, AML/CFT-obligated professionals (in the course of CDD), and any person able to demonstrate a \"legitimate interest\" (e.g., investigative journalists, NGOs).</li>\n            </ul>\n            <h4>Practitioner Tip</h4>\n            <ul class=\"tip\">\n                <li>This is a genuinely EU-wide change, not a Luxembourg quirk — every member state had to restrict its UBO register after Sovim. When OSINT-ing a Luxembourg entity's beneficial owner today, expect to need a demonstrable professional/legitimate-interest basis rather than a free anonymous lookup, unlike Slovakia's RPVS which remains broadly open.</li>\n            </ul>"
    }
];

const preventionTopics = [
    {
        id:"prev1", code:"PREV-1", cat:"CONTROLS",
        title:"COSO Internal Control Framework",
        description:"The global standard for designing and evaluating internal control systems. Five interlocking components that together reduce the opportunity for fraud.",
        content:`<p><strong>COSO 2013 Framework — 5 Components:</strong></p>
            <ul class="detect"><li><strong>1. Control Environment:</strong> The foundation. Tone at the top, ethical values, organizational structure, HR policies. If management lacks integrity, all other controls are undermined.</li>
            <li><strong>2. Risk Assessment:</strong> Identifying and analyzing risks that may prevent objectives. Includes fraud risk assessment. Management must consider how fraud could occur.</li>
            <li><strong>3. Control Activities:</strong> The specific policies and procedures that mitigate risks — authorizations, reconciliations, segregation of duties, physical security, IT controls.</li>
            <li><strong>4. Information & Communication:</strong> Relevant information must be identified, captured, and communicated in a form and timeframe that enables people to carry out their responsibilities.</li>
            <li><strong>5. Monitoring Activities:</strong> Ongoing evaluations and separate evaluations to ascertain whether controls are present and functioning. Internal audit is a key monitoring activity.</li></ul>
            <h4>CFE Exam Tip</h4>
            <ul class="tip"><li>COSO is the framework behind SOX Section 404 — management must assess COSO components annually</li>
            <li>Fraud occurs when one or more components fails — most often: Control Environment (bad tone) + Control Activities (weak SOD)</li>
            <li>Know all 5 components and their relationship to the Fraud Triangle's "Opportunity" leg</li></ul>`
    },
    {
        id:"prev2", code:"PREV-2", cat:"CONTROLS",
        title:"Segregation of Duties (SOD)",
        description:"The single most powerful preventive control against fraud — separating incompatible functions so no one person can commit AND conceal fraud.",
        content:`<p><strong>Core principle:</strong> No single individual should have control over all phases of a transaction. Specifically, separate:</p>
            <ul class="detect"><li><strong>Authorization:</strong> Approving a transaction (e.g., approving a purchase)</li>
            <li><strong>Custody:</strong> Physical control of assets (e.g., handling cash or checks)</li>
            <li><strong>Recording:</strong> Entering the transaction in the books</li>
            <li><strong>Reconciliation:</strong> Comparing records to physical assets or external statements</li></ul>
            <h4>Classic SOD Violations That Enable Fraud</h4>
            <ul class="red"><li>Same person adds vendors to master file AND approves invoices → billing scheme (AM2)</li>
            <li>Same person handles cash receipts AND posts payments to customer accounts → skimming (AM5)</li>
            <li>Same person prepares checks AND reconciles the bank account → check tampering (AM4)</li>
            <li>CFO also controls the accounting system with no independent review → JE fraud (FR1)</li></ul>
            <h4>Small Organization Problem</h4>
            <ul class="tip"><li>SOD is expensive in small organizations — compensating controls: owner review of bank statements, surprise audits, mandatory vacation (forces someone else to do the job)</li>
            <li>Key exam concept: <em>compensating controls</em> substitute for SOD when full separation isn't practical</li></ul>`
    },
    {
        id:"prev3", code:"PREV-3", cat:"CONTROLS",
        title:"Preventive vs Detective Controls",
        description:"Two categories of controls that work together — preventive controls stop fraud before it happens; detective controls identify fraud after it occurs.",
        content:`<p><strong>Preventive Controls</strong> — stop the fraud before it starts:</p>
            <ul class="detect"><li>Segregation of duties</li>
            <li>Pre-employment background checks</li>
            <li>Required authorizations and approvals</li>
            <li>Physical access controls (locked inventory, restricted areas)</li>
            <li>IT access controls (role-based permissions, password policies)</li>
            <li>Ethics training and code of conduct acknowledgment</li></ul>
            <p><strong>Detective Controls</strong> — identify fraud after it has occurred:</p>
            <ul class="red"><li>Internal audit and surprise cash counts</li>
            <li>Bank reconciliations</li>
            <li>Whistleblower hotlines</li>
            <li>Variance analysis and ratio monitoring</li>
            <li>Management review of exception reports</li>
            <li>External audit</li></ul>
            <h4>CFE Exam Tip</h4>
            <ul class="tip"><li>Prevention is always preferable to detection — but no preventive control is 100% effective</li>
            <li>ACFE RTTN data: detective controls reduce fraud duration; preventive controls reduce frequency</li>
            <li>Key exam question type: classify a given control as preventive or detective</li></ul>`
    },
    {
        id:"prev4", code:"PREV-4", cat:"CULTURE",
        title:"Tone at the Top & Ethical Culture",
        description:"The control environment starts with leadership — management's behavior, values, and attitudes set the ethical tone for the entire organization.",
        content:`<p><strong>Why tone matters:</strong> ACFE RTTN consistently shows that organizations with weak ethical culture experience higher fraud frequency and larger losses. The Fraud Triangle's "Rationalization" leg is weakened by a strong ethical culture — it becomes harder for employees to convince themselves that fraud is acceptable.</p>
            <h4>Elements of Effective Tone at the Top</h4>
            <ul class="detect"><li>Leadership visibly models ethical behavior — consistent between stated values and actions</li>
            <li>Ethics violations are disciplined regardless of seniority — no "golden employees"</li>
            <li>Performance pressure is balanced — unrealistic targets create fraud pressure (Fraud Triangle: Pressure)</li>
            <li>Open-door policy for reporting concerns without fear of retaliation</li>
            <li>Management takes whistleblower complaints seriously and investigates promptly</li></ul>
            <h4>Warning Signs of Poor Tone</h4>
            <ul class="red"><li>Management overrides controls "just this once"</li>
            <li>Employees who raise concerns are marginalized or dismissed</li>
            <li>Ethics code exists but is never enforced</li>
            <li>Pressure to "make the numbers" at any cost (HealthSouth, Enron)</li>
            <li>Senior executives receive special treatment that ordinary employees do not</li></ul>`
    },
    {
        id:"prev5", code:"PREV-5", cat:"PROGRAMS",
        title:"Whistleblower Programs & Hotlines",
        description:"The single most effective fraud detection method per every ACFE Report to the Nations — tips catch more fraud than audits, management review, and accident combined.",
        content:`<p><strong>ACFE RTTN 2024 Key Statistics:</strong></p>
            <ul class="detect"><li>43% of fraud cases are detected via tips</li>
            <li>Organizations with hotlines detect fraud 50% faster than those without</li>
            <li>Median loss is significantly lower when fraud is detected by tip vs. accident</li>
            <li>More than half of tips come from employees — external tips (customers, vendors) also significant</li></ul>
            <h4>Designing an Effective Program</h4>
            <ul class="tip"><li><strong>Anonymity:</strong> Must be genuinely anonymous — third-party hotline provider is best practice</li>
            <li><strong>Multiple channels:</strong> Phone, web form, email, in-person — remove barriers</li>
            <li><strong>Non-retaliation policy:</strong> Must be real, not just stated. Retaliation = program failure.</li>
            <li><strong>Response protocol:</strong> Every tip must be documented, assessed, and acted upon</li>
            <li><strong>Communication:</strong> Employees must know the hotline exists and how to use it</li></ul>
            <h4>Legal Framework</h4>
            <ul class="detect"><li><strong>EU Whistleblower Directive 2019/1937:</strong> Mandatory internal reporting channels for companies 50+ employees</li>
            <li><strong>SOX Section 301:</strong> Audit committee must establish procedures for receiving anonymous complaints</li>
            <li><strong>Dodd-Frank:</strong> SEC whistleblower bounty — 10–30% of sanctions over $1M for tips leading to enforcement</li></ul>`
    },
    {
        id:"prev6", code:"PREV-6", cat:"PROGRAMS",
        title:"Fraud Risk Assessment",
        description:"A systematic process to identify, prioritize, and respond to the fraud risks specific to your organization — the foundation of a fraud prevention program.",
        content:`<p><strong>Why a separate fraud risk assessment?</strong> General business risk assessments often miss fraud because they focus on operational and financial risks, not intentional wrongdoing. Fraud risk assessment asks: "How could someone steal from us?"</p>
            <h4>Process Steps (ACFE / COSO aligned)</h4>
            <ul class="detect"><li><strong>1. Identify:</strong> Brainstorm all schemes that could occur given the organization's industry, processes, and controls. Use the ACFE Fraud Tree as a checklist.</li>
            <li><strong>2. Likelihood:</strong> For each scheme, assess how likely it is given existing controls and culture</li>
            <li><strong>3. Significance:</strong> What would the financial and reputational impact be?</li>
            <li><strong>4. Residual risk:</strong> After existing controls, what risk remains?</li>
            <li><strong>5. Response:</strong> For high residual risks — add controls, increase monitoring, or accept the risk</li></ul>
            <h4>Common Fraud Risk Factors by Industry</h4>
            <ul class="tip"><li><strong>Retail:</strong> Cash skimming, inventory theft, return fraud</li>
            <li><strong>Healthcare:</strong> Billing fraud, kickbacks, credential fraud (NF5)</li>
            <li><strong>Financial services:</strong> Investment fraud, money laundering, account takeover</li>
            <li><strong>Construction/Government contracts:</strong> Bid rigging, procurement fraud (IAC1/IAC2), false certifications (NF4)</li></ul>`
    },
    {
        id:"prev7", code:"PREV-7", cat:"PROGRAMS",
        title:"Proactive Fraud Auditing",
        description:"Designing audit procedures specifically to detect fraud — not just errors — by targeting high-risk accounts and transactions with skepticism built in.",
        content:`<p><strong>Reactive vs Proactive:</strong> Traditional auditing verifies financial statement accuracy. Proactive fraud auditing assumes fraud may be present and designs tests to find it.</p>
            <h4>Proactive Techniques</h4>
            <ul class="detect"><li><strong>Continuous monitoring:</strong> Automated rules that flag anomalies in real time — e.g., vendor added and paid same day, JEs posted after midnight, expense over policy limit</li>
            <li><strong>100% population testing:</strong> Using data analytics to test all transactions, not samples — every invoice, every JE, every expense report</li>
            <li><strong>Surprise audits:</strong> Unannounced cash counts, inventory counts, payroll headcount — removes preparation time for fraudsters</li>
            <li><strong>Fraud-specific analytical procedures:</strong> Benford's Law, threshold analysis, duplicate detection — designed to find fraud patterns, not just errors</li>
            <li><strong>Vendor audits:</strong> Right-to-audit clauses; periodic on-site verification of vendor operations</li></ul>
            <h4>CFE Exam Tip</h4>
            <ul class="tip"><li>ACFE RTTN: proactive data monitoring detected fraud in ~6% of cases but reduced median loss by 54% when it did</li>
            <li>Key concept: fraud auditing is different from financial auditing — it requires professional skepticism and adversarial thinking</li></ul>`
    },
    {
        id:"prev8", code:"PREV-8", cat:"CULTURE",
        title:"Background Checks & Pre-Employment Screening",
        description:"The most cost-effective fraud prevention measure — verifying that the person you are hiring is who they claim to be, before they have access to your assets.",
        content:`<p><strong>What to verify:</strong></p>
            <ul class="detect"><li><strong>Identity:</strong> Government-issued ID, right to work verification</li>
            <li><strong>Education:</strong> Contact universities directly — do not accept certificates from the applicant (NF5)</li>
            <li><strong>Professional credentials:</strong> Verify with issuing body (ACFE, CPA board, law bar, medical license board)</li>
            <li><strong>Employment history:</strong> Contact former employers directly — particularly final employers. Ask: "Would you rehire this person?"</li>
            <li><strong>Criminal record:</strong> Subject to local data protection law (GDPR in EU limits this)</li>
            <li><strong>Civil litigation / bankruptcy:</strong> Public records — financial stress is a Fraud Triangle pressure indicator</li>
            <li><strong>Reference checks:</strong> Speak to people NOT listed as references — LinkedIn connections, mutual industry contacts</li></ul>
            <h4>EU / GDPR Considerations</h4>
            <ul class="tip"><li>GDPR restricts processing criminal record data without explicit legal basis</li>
            <li>Credit checks on employees require clear justification (financial role, fiduciary responsibility)</li>
            <li>All screening must be proportionate to the role and disclosed to the candidate</li></ul>`
    },
    {
        id:"prev9", code:"PREV-9", cat:"PROGRAMS",
        title:"Ethics & Compliance Program Design",
        description:"A code of conduct that employees actually follow — not a document that lives in a drawer. Effective programs reduce rationalization (the third leg of the Fraud Triangle).",
        content:`<p><strong>Elements of an effective ethics & compliance program:</strong></p>
            <ul class="detect"><li><strong>Code of conduct:</strong> Clear, readable, specific about prohibited behaviors. Signed acknowledgment annually.</li>
            <li><strong>Ethics training:</strong> Not a one-time video — scenario-based, refreshed annually, management participates visibly</li>
            <li><strong>Conflict of interest disclosure:</strong> Annual COI declaration for all employees in positions of trust</li>
            <li><strong>Gifts & entertainment policy:</strong> Specific thresholds, prior approval for anything above threshold, log maintained</li>
            <li><strong>Third-party due diligence:</strong> Vendors, agents, and intermediaries screened before engagement (anti-bribery compliance)</li>
            <li><strong>Disciplinary framework:</strong> Consistent consequences for violations — zero-tolerance for fraud, regardless of seniority</li></ul>
            <h4>Measuring Program Effectiveness</h4>
            <ul class="tip"><li>Survey employees annually: "Do you feel comfortable reporting concerns without fear of retaliation?" Low scores = cultural problem</li>
            <li>Track hotline usage — too few reports may mean employees don't trust the system</li>
            <li>Monitor discipline consistency — are similar violations receiving similar consequences?</li></ul>`
    },
    {
        id:"prev10", code:"PREV-10", cat:"CONTROLS",
        title:"IT Controls & Access Management",
        description:"Technology-based controls that restrict, monitor, and log access to financial systems — a critical layer in preventing and detecting fraud in modern organizations.",
        content:`<p><strong>Key IT control categories:</strong></p>
            <h4>Access Controls</h4>
            <ul class="detect"><li><strong>Role-based access control (RBAC):</strong> Users can only access functions their job requires — AP clerk cannot access vendor master file</li>
            <li><strong>Privileged access management:</strong> System admins with override capability are a high fraud risk — their access must be logged and reviewed</li>
            <li><strong>User access reviews:</strong> Quarterly review of who has access to what — remove terminated employees immediately</li>
            <li><strong>Multi-factor authentication:</strong> Especially for financial systems and remote access</li></ul>
            <h4>Audit Trails & Logging</h4>
            <ul class="detect"><li>All financial system transactions should generate an immutable audit log: user ID, timestamp, what changed, what it changed from</li>
            <li>Logs should be stored separately from the system — so a compromised system admin cannot delete logs</li>
            <li>Review logs for: after-hours activity, unusual volumes, access to restricted functions</li></ul>
            <h4>CFE Exam Tip</h4>
            <ul class="tip"><li>IT controls = general controls (infrastructure) + application controls (within specific systems)</li>
            <li>Key concept: system-generated audit trails are more reliable than manual controls because they cannot be overridden without leaving a trace</li></ul>`
    }
];

const cfeScenarioQuestions = [
    // ── SECTION 1: FRAUD SCHEMES AND FINANCIAL CRIMES (120 Qs Standard) ──
    {
        "id": "sc01",
        "domain": "Fraud Schemes and Financial Crimes",
        "q": "An Accounts Payable clerk notices that several invoices from a new IT consulting vendor contain consecutive invoice numbers (Invoice #101, #102, #103), describe services vaguely as 'professional advisory expedite', and list a mailing address that is a commercial PO Box. Furthermore, payment amounts are clustered between $9,400 and $9,850. The company's approval policy requires dual signatures for disbursements of $10,000 or greater. What scheme is most likely occurring?",
        "options": [
            "Cash Larceny through register skimming",
            "A Shell Company billing scheme with threshold avoidance",
            "An Accounts Receivable lapping scheme",
            "A ghost employee payroll diversion"
        ],
        "correct": "A Shell Company billing scheme with threshold avoidance",
        "explain": "Consecutive invoice numbers from a brand-new entity, PO box addresses, vague service descriptions, and amounts deliberately clustered just below managerial dual-signature limits ($9,400–$9,850 vs. $10,000) are classic hallmarks of a Shell Company billing scheme under Fraudulent Disbursements."
    },
    {
        "id": "sc02",
        "domain": "Fraud Schemes and Financial Crimes",
        "q": "A cashier in a retail store intercepts incoming customer cash payments for merchandise at the point of sale, pockets the cash, and never enters the sale into the cash register or point-of-sale terminal. No register tape entry or journal entry is created. Which classification on the ACFE Fraud Tree applies to this theft?",
        "options": [
            "Cash Larceny",
            "Skimming",
            "Check Tampering",
            "Kiting"
        ],
        "correct": "Skimming",
        "explain": "Skimming is the theft of cash BEFORE it is recorded in the accounting system ('off-book'). Cash Larceny, by contrast, is the theft of cash AFTER it has already entered the accounting records ('on-book')."
    },
    {
        "id": "sc03",
        "domain": "Fraud Schemes and Financial Crimes",
        "q": "During a competitive municipal tender for highway construction, three participating contractors secretly agree in advance that Contractor A will submit a low bid of $4.2M, while Contractors B and C intentionally submit inflated bids of $4.8M and $5.1M with subtle technical omissions designed to ensure disqualification. Which procurement fraud scheme has been committed?",
        "options": [
            "Complementary Bidding (Bid Rigging)",
            "Product Substitution",
            "Defective Pricing under Truth in Negotiations",
            "Cost Mischarging"
        ],
        "correct": "Complementary Bidding (Bid Rigging)",
        "explain": "Complementary bidding (also known as courtesy, cover, or shadow bidding) occurs when conspirators submit bids that are intentionally too high or contain disqualifying flaws to create the illusion of genuine competitive tendering while guaranteeing a designated co-conspirator wins the award."
    },
    {
        "id": "sc04",
        "domain": "Fraud Schemes and Financial Crimes",
        "q": "The corporate controller of a multinational firm receives an urgent email appearing to originate from the CEO's personal account requesting an immediate wire transfer of $850,000 to an offshore escrow agent to secure an 'unannounced acquisition'. The email insists on absolute secrecy. Forensic inspection reveals the sending domain is 'acme-corp.co' rather than the legitimate 'acme-corp.com'. What specific cyberfraud attack is this?",
        "options": [
            "Business Email Compromise (BEC) / CEO Fraud",
            "SQL Injection Database Harvest",
            "Ransomware Double Extortion",
            "Distributed Denial of Service (DDoS)"
        ],
        "correct": "Business Email Compromise (BEC) / CEO Fraud",
        "explain": "Business Email Compromise (BEC) relies on social engineering, look-alike domain spoofing, and artificial executive urgency to bypass internal multi-party approval controls and trick financial personnel into wiring corporate funds to fraudster-controlled accounts."
    },
    {
        "id": "sc05",
        "domain": "Fraud Schemes and Financial Crimes",
        "q": "A corrupt mortgage broker colludes with a real estate appraiser to originate a $650,000 residential loan on a property that does not actually exist (a fictitious address on undeveloped swampland). All closing documents, title deeds, and borrower credit profiles were completely fabricated. What specific banking fraud term defines this?",
        "options": [
            "Air Loan",
            "Silent Second Mortgage",
            "Reverse Mortgage Churning",
            "Loan Flipping"
        ],
        "correct": "Air Loan",
        "explain": "An 'air loan' is a fraudulent financial institution scheme where both the collateral property and the borrower are completely fictitious or non-existent, leaving the financial institution with no underlying physical asset to foreclose upon when payments cease."
    },
    {
        "id": "sc06",
        "domain": "Fraud Schemes and Financial Crimes",
        "q": "A medical clinic routinely bills insurers using individual CPT procedure codes for routine blood panels, liver function assays, and metabolic screens separately, rather than billing the single comprehensive laboratory panel code that covers all three at a discounted package rate. What health care billing scheme does this represent?",
        "options": [
            "Unbundling (Fragmenting)",
            "Upcoding",
            "Ghost Patient Billing",
            "Durable Medical Equipment Rent Churn"
        ],
        "correct": "Unbundling (Fragmenting)",
        "explain": "Unbundling (or 'fragmenting') is the practice of submitting multiple separate billing codes for individual component procedures that are properly billed under a single comprehensive bundled code, resulting in a higher total reimbursement from the insurer or government program."
    },
    {
        "id": "sc07",
        "domain": "Fraud Schemes and Financial Crimes",
        "q": "To meet aggressive Wall Street quarterly consensus earnings targets, a software enterprise ships hardware appliances and server units to public warehouses near the end of the fourth quarter, booking 100% of revenue immediately, despite knowing customers have not ordered the equipment and have the unrestricted contractual right to return it without penalty. Which revenue recognition scheme is this?",
        "options": [
            "Channel Stuffing and Bill-and-Hold Violation",
            "Lapping of Accounts Receivable",
            "Kiting of Cash Drafts",
            "Improper Asset Depreciation"
        ],
        "correct": "Channel Stuffing and Bill-and-Hold Violation",
        "explain": "Channel stuffing involves forcing excess products down a distribution channel near period-end to book premature or fictitious revenues. Bill-and-hold transactions violate GAAP/IFRS revenue recognition unless specific stringent criteria (custodial risk transfer, customer request, fixed delivery schedule) are rigorously met."
    },
    {
        "id": "sc08",
        "domain": "Fraud Schemes and Financial Crimes",
        "q": "An investment firm promises clients guaranteed monthly returns of 8% through a proprietary 'algorithmic foreign exchange arbitrage strategy'. In reality, no trades take place; returns paid to early investors are entirely funded by capital contributed by newer investors. What is the fundamental mathematical reason such schemes inevitably collapse?",
        "options": [
            "The geometric progression of required new investor capital outstrips available capital pool liquidity.",
            "Federal Reserve interest rate adjustments automatically cancel forex liquidity pools.",
            "SEC Rule 144 imposes mandatory 2-year holding periods on currency arbitrage.",
            "Sarbanes-Oxley Section 302 mandates quarterly independent cash reconciliation."
        ],
        "correct": "The geometric progression of required new investor capital outstrips available capital pool liquidity.",
        "explain": "Ponzi schemes are mathematically unsustainable because the capital required to pay guaranteed returns grows geometrically with each investor tier. When the inflow of new participants slows down, the perpetrator cannot honor redemption requests, causing an immediate catastrophic collapse."
    },
    {
        "id": "sc09",
        "domain": "Fraud Schemes and Financial Crimes",
        "q": "A warehouse supervisor notices inventory records are reconciling cleanly on paper, but physical stock counts are deficient by $180,000. Investigation shows the warehouse manager has been entering journal transactions writing off active merchandise as 'damaged, water-soaked, or scrap' before physically loading the goods into a personal pickup truck for resale. Under the ACFE Fraud Tree, how is this classified?",
        "options": [
            "Inventory Misuse",
            "Inventory Larceny via Fraudulent Write-off",
            "Purchasing & Receiving Fraud",
            "Fictitious Sales"
        ],
        "correct": "Inventory Larceny via Fraudulent Write-off",
        "explain": "Inventory larceny involves the outright physical theft of company merchandise. Fraudulent write-offs (classifying good inventory as scrap, damaged, or obsolete) is the primary accounting concealment method used by perpetrators with write-off authority to eliminate shrinkage variances."
    },
    {
        "id": "sc10",
        "domain": "Fraud Schemes and Financial Crimes",
        "q": "A company treasurer deposits a check drawn on Bank A into Bank B. Before the check clears Bank A, the treasurer writes a check on Bank B and deposits it back into Bank A, artificially inflating the ledger balances of both accounts to conceal an overdraft or generate temporary interest-free loans. What scheme is being operated?",
        "options": [
            "Check Kiting",
            "Altered Payee Tampering",
            "Forged Endorsement",
            "Fictitious Vendor Disbursement"
        ],
        "correct": "Check Kiting",
        "explain": "Check kiting exploits the 'float' time between financial institutions by exchanging non-existent balances between multiple accounts, creating the false appearance of liquidity and substantial ledger balances in accounts that have zero legitimate funds."
    },

    // ── SECTION 2: FRAUD INVESTIGATIONS AND LEGAL ISSUES (120 Qs Standard) ──
    {
        "id": "sc11",
        "domain": "Fraud Investigations and Legal Issues",
        "q": "During an internal corporate fraud investigation, in-house counsel interviews a senior logistics director suspected of receiving kickbacks. Before asking substantive questions, counsel states: 'I am the attorney for ACME Corporation. I represent the company, not you individually. Our discussion is protected by the company's attorney-client privilege, which belongs solely to the company, and the company alone may choose to waive it and disclose our discussion to law enforcement.' What mandatory legal warning did counsel administer?",
        "options": [
            "Upjohn Warning (Corporate Miranda)",
            "Garrity Administrative Warning",
            "Kalkines Immunity Warning",
            "Weingarten Union Warning"
        ],
        "correct": "Upjohn Warning (Corporate Miranda)",
        "explain": "Under Upjohn Co. v. United States (1981), corporate counsel must clarify to employees that counsel represents the corporate entity, not the individual, and that the privilege belongs to and can be unilaterally waived by the company. Failure to give an Upjohn warning can lead to the employee claiming personal privilege or disqualifying counsel."
    },
    {
        "id": "sc12",
        "domain": "Fraud Investigations and Legal Issues",
        "q": "A CFE is using the Net Worth Method to prove an organized crime target received $420,000 in illicit funds. The examiner establishes: Starting Net Worth (Year 1) = $150,000; Ending Net Worth (Year 2) = $450,000; Known Legitimate Salary = $60,000; Documented Personal Living Expenses during Year 2 = $90,000. Under the ACFE Net Worth formula, what is the Calculated Unexplained (Illicit) Income for Year 2?",
        "options": [
            "$330,000",
            "$300,000",
            "$390,000",
            "$240,000"
        ],
        "correct": "$330,000",
        "explain": "Net Worth Increase = $450,000 - $150,000 = $300,000. Total Income Required = Net Worth Increase ($300,000) + Living Expenses ($90,000) = $390,000. Unexplained Income = Total Income Required ($390,000) - Known Legitimate Income ($60,000) = $330,000."
    },
    {
        "id": "sc13",
        "domain": "Fraud Investigations and Legal Issues",
        "q": "In an admission-seeking interview, the CFE has developed the theme that the suspect embezzled funds not out of greed, but because of overwhelming medical bills for an ailing child. The suspect's resistance is breaking down. Which of the following represents the proper formulation of an 'Alternative Question' to secure the initial admission?",
        "options": [
            "\"Did you steal the $75,000 or did your assistant help you steal it?\"",
            "\"Did you use the money to pay for your child's urgent medical care, or did you just squander it on lavish gambling and luxury vacations?\"",
            "\"Do you admit to grand larceny under state criminal code Section 402?\"",
            "\"If you don't confess right now, will you sign this affidavit prepared by legal?\""
        ],
        "correct": "\"Did you use the money to pay for your child's urgent medical care, or did you just squander it on lavish gambling and luxury vacations?\"",
        "explain": "The Alternative Question in the Reid/ACFE methodology offers the suspect two choices for committing the act: one morally acceptable / face-saving reason, and one socially repulsive reason. Both options imply guilt, but choosing the face-saving alternative allows the suspect to make the first crucial admission with less shame."
    },
    {
        "id": "sc14",
        "domain": "Fraud Investigations and Legal Issues",
        "q": "A forensic investigator arrives at a corporate crime scene where a suspect's desktop computer is currently powered on and actively executing unknown scripts. According to RFC 3227 and digital forensic evidence collection standards, what is the correct Order of Volatility for capturing evidence?",
        "options": [
            "Hard disk drive → CD-ROM/backup tapes → RAM → Network routing tables",
            "Registers and CPU cache → Physical memory (RAM) → Network state and routing tables → Temporary file systems → Disk storage",
            "Power down immediately by pulling the electrical plug → Photograph desk → Clone disk",
            "Backup cloud account → Print event logs → Image hard drive"
        ],
        "correct": "Registers and CPU cache → Physical memory (RAM) → Network state and routing tables → Temporary file systems → Disk storage",
        "explain": "RFC 3227 mandates capturing digital evidence in order from most volatile (data lost immediately upon power disruption) to least volatile: CPU cache/registers → RAM (containing active encryption keys, network connections, running malware) → Network state → Hard disks → Archival backups."
    },
    {
        "id": "sc15",
        "domain": "Fraud Investigations and Legal Issues",
        "q": "At a criminal fraud trial, the prosecution calls a Certified Fraud Examiner to introduce internal accounts payable ledger records. The defense objects on hearsay grounds. Under Federal Rule of Evidence 803(6) (Records of a Regularly Conducted Activity), which foundation must be established for the documents to be admissible?",
        "options": [
            "The records were prepared specifically in anticipation of litigation by outside counsel.",
            "The records were made at or near the time by someone with knowledge, kept in the course of a regularly conducted business activity, and making the record was a regular practice.",
            "The original author of every single ledger entry must testify in court in person.",
            "The records must have been certified by an independent Grand Jury foreman."
        ],
        "correct": "The records were made at or near the time by someone with knowledge, kept in the course of a regularly conducted business activity, and making the record was a regular practice.",
        "explain": "Under FRE 803(6), the business records hearsay exception requires testimony of the custodian or qualified witness proving: (1) made at or near the time by someone with knowledge, (2) kept in the ordinary course of business, (3) regular practice of the entity to make such records, and (4) absence of untrustworthiness."
    },
    {
        "id": "sc16",
        "domain": "Fraud Investigations and Legal Issues",
        "q": "In federal court, the defense challenges the admissibility of a CFE's financial anomaly detection algorithm and statistical extrapolation model. Under the landmark Daubert v. Merrell Dow Pharmaceuticals standard, which four criteria will the trial judge evaluate to determine if the expert's methodology is reliable?",
        "options": [
            "Years of professional experience, university degrees, hourly billing rate, and client testimonials.",
            "Whether the technique can be/has been tested, subjected to peer review and publication, known or potential error rate, and general acceptance in the relevant scientific community.",
            "Whether the expert is a licensed attorney, CPA, private investigator, and notary public.",
            "Whether the algorithm was patented, copyrighted, proprietary, and approved by the Department of Justice."
        ],
        "correct": "Whether the technique can be/has been tested, subjected to peer review and publication, known or potential error rate, and general acceptance in the relevant scientific community.",
        "explain": "The Daubert standard (Rule 702) assigns the judge a 'gatekeeper' role assessing: (1) testability / falsifiability of the theory, (2) peer review and publication, (3) known or potential rate of error and existence of operational standards, and (4) general acceptance within the relevant discipline."
    },
    {
        "id": "sc17",
        "domain": "Fraud Investigations and Legal Issues",
        "q": "A multinational corporation uncovers evidence that its Chief Financial Officer has transferred $14 million in embezzled corporate funds to offshore shell company bank accounts in Switzerland and the Cayman Islands. Counsel advises filing an ex parte emergency application in court to freeze the CFO's worldwide assets before the defendant can dissipate the funds. What legal remedy is this?",
        "options": [
            "A Mareva Injunction (Freezing Order)",
            "An Anton Piller Search Order",
            "A Writ of Habeas Corpus",
            "A Subpoena Ad Testificandum"
        ],
        "correct": "A Mareva Injunction (Freezing Order)",
        "explain": "A Mareva injunction (also known as a freezing order) is an extraordinary equitable in personam court order that restrains a defendant from dissipating, transferring, or hiding assets worldwide pending the trial of a commercial dispute."
    },
    {
        "id": "sc18",
        "domain": "Fraud Investigations and Legal Issues",
        "q": "Under Federal Rule of Evidence 704(b) and ACFE Code of Professional Ethics Article 6, what restriction is placed on an expert witness testifying in a criminal fraud trial regarding the defendant's mental state?",
        "options": [
            "The expert cannot state any mathematical calculations of total monetary loss.",
            "The expert must not state an opinion or conclusion as to whether the defendant did or did not have the requisite mental state or intent (the 'ultimate issue' of guilt).",
            "The expert is prohibited from referencing accounting records unless notarized.",
            "The expert cannot testify unless they witnessed the crime take place in person."
        ],
        "correct": "The expert must not state an opinion or conclusion as to whether the defendant did or did not have the requisite mental state or intent (the 'ultimate issue' of guilt).",
        "explain": "FRE 704(b) strictly prohibits an expert witness in a criminal case from testifying as to whether the defendant possessed the mental state or condition constituting an element of the crime (such as criminal intent or scienter). Intent is the 'ultimate issue' reserved strictly for the jury."
    },
    {
        "id": "sc19",
        "domain": "Fraud Investigations and Legal Issues",
        "q": "During a fraud investigation of a municipal vendor, the lead CFE discovers evidence that the subject has been using multiple shell corporations to deposit proceeds of public corruption into foreign bank accounts, convert them into commercial real estate, and integrate them into legitimate revenue-generating hotels. What are the three classic stages of Money Laundering represented here?",
        "options": [
            "Origination, Underwriting, Securitization",
            "Placement, Layering, Integration",
            "Conversion, Embezzlement, Distribution",
            "Concealment, Falsification, Avoidance"
        ],
        "correct": "Placement, Layering, Integration",
        "explain": "The three universally recognized stages of money laundering under FATF and ACFE standards are: (1) Placement (introducing illegal cash into the financial system), (2) Layering (distancing funds through complex wire transfers and shell companies), and (3) Integration (re-entering the clean economy as legitimate assets)."
    },
    {
        "id": "sc20",
        "domain": "Fraud Investigations and Legal Issues",
        "q": "A private corporate investigator conducting an internal theft inquiry in an office suspects a worker of stealing computer parts. The investigator enters the employee's locked personal briefcase located under their desk without consent, opens it, and discovers stolen memory modules. Can the employee successfully suppress this evidence in a subsequent criminal prosecution based on the Fourth Amendment?",
        "options": [
            "Yes, because personal briefcases are protected by reasonable expectations of privacy everywhere.",
            "No, because the Fourth Amendment protects against unreasonable government searches and does not apply to purely private searches unless the investigator acted as an instrument or agent of the government.",
            "Yes, under the federal exclusionary rule of Mapp v. Ohio.",
            "No, because employees waive all personal constitutional rights upon entering corporate premises."
        ],
        "correct": "No, because the Fourth Amendment protects against unreasonable government searches and does not apply to purely private searches unless the investigator acted as an instrument or agent of the government.",
        "explain": "The Fourth Amendment applies solely to governmental action (law enforcement). Evidence obtained by a purely private security investigator or employer, even if unlawful under civil tort law (trespass), is not subject to the constitutional exclusionary rule in a criminal trial unless law enforcement directed or participated in the search."
    },

    // ── SECTION 3: FRAUD PREVENTION AND DETERRENCE (70 Qs Standard) ──
    {
        "id": "sc21",
        "domain": "Fraud Prevention and Deterrence",
        "q": "In the COSO 2013 Internal Control Integrated Framework, 17 codified principles support the 5 core components. Which principle explicitly mandates that an organization must consider the potential for fraud in assessing risks to the achievement of objectives?",
        "options": [
            "Principle 1 (Commitment to Integrity and Ethical Values)",
            "Principle 8 (Assess Fraud Risk)",
            "Principle 12 (Deploy Control Activities Through Policies)",
            "Principle 16 (Conduct Ongoing and Separate Evaluations)"
        ],
        "correct": "Principle 8 (Assess Fraud Risk)",
        "explain": "COSO 2013 Principle 8 (within the Risk Assessment component) states: 'The organization considers the potential for fraud in assessing risks to the achievement of objectives.' It explicitly requires management to evaluate fraud risks including fraudulent financial reporting, asset misappropriation, corruption, and management override."
    },
    {
        "id": "sc22",
        "domain": "Fraud Prevention and Deterrence",
        "q": "Under AU-C Section 240 (and PCAOB AS 2401 / SAS 99), Consideration of Fraud in a Financial Statement Audit, which audit procedure is mandatory for independent financial auditors in response to the universal risk of management override of controls?",
        "options": [
            "Examining journal entries and other adjustments for evidence of possible material misstatement due to fraud.",
            "Interviewing 100% of non-exempt hourly employees.",
            "Administering polygraph tests to the Board of Directors.",
            "Performing physical surveillance of the CEO's residence."
        ],
        "correct": "Examining journal entries and other adjustments for evidence of possible material misstatement due to fraud.",
        "explain": "AU-C 240 states that management override is a universal risk present in all organizations. Auditors are therefore required to: (1) test the appropriateness of journal entries and adjustments made in preparing financial statements, (2) review accounting estimates for biases, and (3) evaluate the business rationale for significant unusual transactions."
    },
    {
        "id": "sc23",
        "domain": "Fraud Prevention and Deterrence",
        "q": "Criminologist Donald Cressey's classic Fraud Triangle identifies Pressure, Opportunity, and Rationalization. In 2004, Wolfe and Hermanson proposed the 'Fraud Diamond' framework. Which fourth critical dimension did they add to explain why certain individuals are actually able to pull off complex corporate crimes?",
        "options": [
            "Greed",
            "Capability (Skills, Position, Ego, Stress Resilience)",
            "Coercion",
            "Predication"
        ],
        "correct": "Capability (Skills, Position, Ego, Stress Resilience)",
        "explain": "Wolfe and Hermanson's Fraud Diamond added 'Capability': the perpetrator must possess the technical skills, organizational position, intellect, ego, and ability to deal with stress and deceive others to convert an opportunity into actual successful execution."
    },
    {
        "id": "sc24",
        "domain": "Fraud Prevention and Deterrence",
        "q": "A prospective client offers to hire a Certified Fraud Examiner to investigate an alleged employee embezzlement. The client proposes an engagement fee structure where the CFE will receive a baseline hourly rate plus a contingency fee bonus equal to 20% of whatever monetary recovery is recovered from the employee. How must the CFE respond under the ACFE Code of Professional Ethics?",
        "options": [
            "Accept the offer immediately, as contingency fees are standard incentive structures.",
            "Decline the contingency fee arrangement, as Article 2 / Professional Standards prohibit contingency fees that impair independence or appear to purchase favorable investigative findings.",
            "Accept, provided the arrangement is disclosed to the employee during the interview.",
            "Accept only if the bonus is paid in company equity rather than cash."
        ],
        "correct": "Decline the contingency fee arrangement, as Article 2 / Professional Standards prohibit contingency fees that impair independence or appear to purchase favorable investigative findings.",
        "explain": "CFE Professional Standards and ethics prohibit contingency fee arrangements in fraud examinations where the compensation is tied to findings of guilt or recovery outcomes, as it creates an inherent financial conflict of interest and destroys the examiner's fundamental objectivity."
    },
    {
        "id": "sc25",
        "domain": "Fraud Prevention and Deterrence",
        "q": "The ACFE Code of Professional Ethics Article 7 mandates strict confidentiality regarding client and employer information. Under which circumstance is a CFE legally and ethically permitted to disclose confidential client investigative workpapers without the client's express permission?",
        "options": [
            "When a rival consulting firm offers a higher fee for market intelligence.",
            "Pursuant to a valid subpoena or lawful court order from a court of competent jurisdiction.",
            "When the examiner discusses the case socially with fellow CFE colleagues.",
            "Whenever the examiner personally believes the suspect deserves public shaming."
        ],
        "correct": "Pursuant to a valid subpoena or lawful court order from a court of competent jurisdiction.",
        "explain": "Article 7 states: 'An examiner shall not disclose any confidential information without the consent of the client or employer, or unless required by law.' Compliance with a valid subpoena, court order, or statutory summons is a recognized legal exception to the confidentiality duty."
    },
    {
        "id": "sc26",
        "domain": "Fraud Prevention and Deterrence",
        "q": "A mid-sized banking institution implements an internal anti-fraud policy requiring all commercial lending officers and wire transfer operators to take a minimum of five consecutive business days of mandatory vacation annually, during which their system access is completely revoked and their duties performed by another employee. Which primary fraud risk does this policy mitigate?",
        "options": [
            "Software licensing non-compliance",
            "Long-term concealment of ongoing unauthorized schemes (such as lapping or unauthorized trading) that require daily personal manipulation to avoid detection",
            "Sexual harassment claims in accounting",
            "Physical burglary of branch vaults"
        ],
        "correct": "Long-term concealment of ongoing unauthorized schemes (such as lapping or unauthorized trading) that require daily personal manipulation to avoid detection",
        "explain": "Mandatory uninterrupted vacations with complete access revocation prevent perpetrators from continuously maintaining multi-period concealment schemes (like accounts receivable lapping, check kiting, or unauthorized loan renewals). In their absence, substitute workers naturally discover anomalies."
    },
    {
        "id": "sc27",
        "domain": "Fraud Prevention and Deterrence",
        "q": "In a comprehensive Fraud Risk Assessment (FRA), what is the correct sequence of steps recommended by the ACFE and COSO Fraud Risk Management Guide?",
        "options": [
            "Implement software → Fire suspicious employees → Conduct risk survey → Report to press",
            "Identify inherent fraud risks → Assess likelihood and significance → Evaluate existing anti-fraud controls → Determine residual fraud risks → Formulate risk responses",
            "Calculate net income → File SARs → Retain criminal defense counsel → Draft ethics policy",
            "Audit balance sheet → Publish quarterly earnings → Inspect warehouses → Hire CFE"
        ],
        "correct": "Identify inherent fraud risks → Assess likelihood and significance → Evaluate existing anti-fraud controls → Determine residual fraud risks → Formulate risk responses",
        "explain": "The ACFE/COSO FRA methodology follows a systematic risk hierarchy: (1) Inherent Risk Identification, (2) Assessment of Likelihood and Impact, (3) Evaluation of Existing Mitigating Controls, (4) Identification of Residual Risk gaps, and (5) Implementation of Actionable Treatment Responses (mitigate, transfer, avoid, accept)."
    },
    {
        "id": "sc28",
        "domain": "Fraud Prevention and Deterrence",
        "q": "Research conducted by Hollinger and Clark ('Theft by Employees', surveying over 10,000 workers) concluded that the vast majority of employee workplace theft and property deviance is driven primarily by which factor?",
        "options": [
            "Severe personal indebtedness caused by casino gambling",
            "Job dissatisfaction, perceived economic injustice, and feelings of mistreatment by the employer",
            "Direct criminal gang infiltration of corporate departments",
            "Lack of formal college degrees among line workers"
        ],
        "correct": "Job dissatisfaction, perceived economic injustice, and feelings of mistreatment by the employer",
        "explain": "The seminal Hollinger and Clark study discovered that employee theft was not primarily correlated with personal finances, but rather with workplace dissatisfaction and perceived injustice. Employees who felt exploited or unappreciated rationalized theft as informal compensation to 'even the score'."
    },
    {
        "id": "sc29",
        "domain": "Fraud Prevention and Deterrence",
        "q": "According to Sarbanes-Oxley Act of 2002 (SOX) Section 301, what specific mandatory governance mechanism must the Audit Committee of every publicly traded company establish regarding accounting and auditing concerns?",
        "options": [
            "Procedures for the receipt, retention, and treatment of complaints regarding accounting, internal controls, or auditing matters, including confidential, anonymous employee submissions.",
            "A mandatory 50% dividend payout policy to common shareholders.",
            "A requirement that all internal audit reports be published on the company website.",
            "Annual polygraph screening for all accounting staff."
        ],
        "correct": "Procedures for the receipt, retention, and treatment of complaints regarding accounting, internal controls, or auditing matters, including confidential, anonymous employee submissions.",
        "explain": "SOX Section 301 mandates that independent audit committees establish procedures for receiving and processing whistleblower reports concerning accounting and auditing issues, ensuring that employees can submit concerns on a confidential, anonymous basis without fear of retaliation."
    },
    {
        "id": "sc30",
        "domain": "Fraud Prevention and Deterrence",
        "q": "Article 1 of the ACFE Code of Professional Ethics states: 'An examiner shall at all times demonstrate commitment to professionalism and diligence in the performance of his or her duties.' If a CFE signs off on an extensive corporate embezzlement report without personally verifying the primary bank wire confirmation documents, relying solely on unverified summaries provided by a suspect's assistant, what ethical standard has been violated?",
        "options": [
            "Due Professional Care and Diligence (Article 1 & 5)",
            "The Miranda Custodial Admissibility Rule",
            "The Fourth Amendment Search Standard",
            "The Sarbanes-Oxley Whistleblower Safe Harbor"
        ],
        "correct": "Due Professional Care and Diligence (Article 1 & 5)",
        "explain": "ACFE Code of Professional Ethics Article 1 (diligence) and Article 5 (reasonable and competent evidential basis) require examiners to independently verify evidence and obtain sufficient factual foundation before drawing conclusions. Relying blindly on uncorroborated third-party hearsay violates due professional care."
    }
];

const fraudTree = [
    {
        branch: "Corruption", color: "var(--c-rose)", groups: [
            { name: "Conflicts of Interest", leaves: [
                { name: "Purchasing Schemes", def: "Employee has an undisclosed financial interest in a vendor and steers purchasing decisions to benefit it.", code: null },
                { name: "Sales Schemes", def: "Employee has an undisclosed financial interest in a customer and grants them improper favorable terms.", code: "IAC2" }
            ]},
            { name: "Bribery", leaves: [
                { name: "Invoice Kickbacks", def: "Vendor pays an employee a percentage of inflated invoices they approved.", code: null },
                { name: "Bid Rigging", def: "Employee manipulates a competitive bidding process to favor a particular vendor.", code: null },
                { name: "Bribery of Government Officials", def: "Payment to a public official to influence an official act or decision.", code: "IAC1" },
                { name: "Commercial Bribery", def: "Payment between private parties before a decision, to influence it improperly.", code: "IAC3" }
            ]},
            { name: "Illegal Gratuities", leaves: [
                { name: "Illegal Gratuities", def: "Value given after a decision has already been made, as an improper reward.", code: "IAC3" }
            ]},
            { name: "Economic Extortion", leaves: [
                { name: "Economic Extortion", def: "Employee demands payment from a vendor/contractor as a condition of doing business, or to avoid harm.", code: null }
            ]}
        ]
    },
    {
        branch: "Asset Misappropriation", color: "var(--c-sage)", groups: [
            { name: "Cash — Larceny", leaves: [
                { name: "Larceny of Cash on Hand", def: "Outright theft of cash already recorded in the books, e.g. from a register or safe.", code: null },
                { name: "Larceny from Deposit", def: "Cash is stolen after being recorded but before or during the bank deposit process.", code: null }
            ]},
            { name: "Cash — Skimming — Sales", leaves: [
                { name: "Unrecorded Sales", def: "A sale is made but never entered into the accounting system, and the cash is taken.", code: "AM5" },
                { name: "Understated Sales", def: "A sale is recorded, but for a lower amount than actually collected.", code: null },
                { name: "Theft of Checks Received via Mail", def: "Incoming customer payments are intercepted and diverted before being logged.", code: null }
            ]},
            { name: "Cash — Skimming — Receivables", leaves: [
                { name: "Write-off Schemes", def: "A receivable is falsely written off as uncollectible after the employee pockets the payment.", code: null },
                { name: "Lapping Schemes", def: "Payments from one customer are stolen and covered by applying a later customer's payment to the first account.", code: null },
                { name: "Unconcealed Receivables Skimming", def: "Payments are stolen with no attempt made to hide the resulting discrepancy in the books.", code: null }
            ]},
            { name: "Cash — Skimming — Other", leaves: [
                { name: "Refunds and Other Skimming", def: "Cash refunds or other off-book cash streams are diverted before being recorded.", code: null }
            ]},
            { name: "Cash — Fraudulent Disbursements — Billing Schemes", leaves: [
                { name: "Shell Company Schemes", def: "Employee sets up a fake vendor and submits invoices for goods/services never delivered.", code: "AM2" },
                { name: "Non-Accomplice Vendor Schemes", def: "Invoices from a real vendor are manipulated or duplicated without that vendor's knowledge.", code: null },
                { name: "Personal Purchases Schemes", def: "Personal purchases are run through company accounts and paid for as if they were business expenses.", code: null }
            ]},
            { name: "Cash — Fraudulent Disbursements — Payroll Schemes", leaves: [
                { name: "Ghost Employees", def: "A fictitious or terminated employee is kept active on payroll and the paychecks are diverted.", code: null },
                { name: "Commission Schemes", def: "Sales or commission figures are falsified to inflate an employee's commission payout.", code: null },
                { name: "Workers' Compensation Schemes", def: "A false workers' compensation claim is filed for an injury that didn't occur or is exaggerated.", code: null },
                { name: "Falsified Wages", def: "Hours worked or pay rates are manipulated to inflate a paycheck.", code: null }
            ]},
            { name: "Cash — Fraudulent Disbursements — Expense Reimbursement Schemes", leaves: [
                { name: "Mischaracterized Expenses", def: "A personal expense is submitted disguised as a legitimate business expense.", code: "AM4" },
                { name: "Overstated Expenses", def: "A real business expense is submitted for reimbursement at an inflated amount.", code: null },
                { name: "Fictitious Expenses", def: "An expense report is submitted for an expense that was never actually incurred.", code: null },
                { name: "Multiple Reimbursements", def: "The same expense is submitted for reimbursement more than once.", code: null }
            ]},
            { name: "Cash — Fraudulent Disbursements — Check Tampering", leaves: [
                { name: "Forged Maker", def: "An employee forges an authorized signature on a company check.", code: "AM4" },
                { name: "Forged Endorsement", def: "A check is intercepted and the payee's endorsement is forged to cash or deposit it.", code: null },
                { name: "Altered Payee", def: "The payee name on a legitimately issued check is changed after signing.", code: null },
                { name: "Concealed Checks", def: "A fraudulent check is slipped into a batch of legitimate checks for signature.", code: null },
                { name: "Authorized Maker", def: "An employee with legitimate signing authority writes fraudulent checks to themselves.", code: null }
            ]},
            { name: "Cash — Fraudulent Disbursements — Register Disbursements", leaves: [
                { name: "False Refunds", def: "A fake refund transaction is entered at the register and the cash is taken.", code: null },
                { name: "False Voids", def: "A completed sale is voided after the customer leaves, and the cash is pocketed.", code: null }
            ]},
            { name: "Cash — Modern Extension (not part of the classic tree)", leaves: [
                { name: "Cyber-Enabled Cash Theft", def: "Phishing or business email compromise is used to trigger a fraudulent wire transfer.", code: "AM1" }
            ]},
            { name: "Inventory & All Other Assets — Misuse", leaves: [
                { name: "Misuse", def: "Company assets are used for personal purposes without authorization.", code: null }
            ]},
            { name: "Inventory & All Other Assets — Larceny", leaves: [
                { name: "Asset Requisitions and Transfers", def: "Internal paperwork is used to move assets out of inventory under false pretenses.", code: null },
                { name: "False Sales and Shipping", def: "A fake sale is documented to justify shipping inventory out to an accomplice.", code: null },
                { name: "Purchasing and Receiving Schemes", def: "Received goods are falsely marked as short or damaged, and the difference is stolen.", code: null },
                { name: "Unconcealed Larceny", def: "Inventory or assets are simply taken with no attempt to hide the theft in the records.", code: "AM3" }
            ]}
        ]
    },
    {
        branch: "Financial Statement Fraud", color: "var(--c-blue)", groups: [
            { name: "Overstatements — Timing Differences", leaves: [
                { name: "Premature Revenue Recognition", def: "Revenue is recorded before delivery/performance obligations are actually satisfied.", code: "FR3" },
                { name: "Partial Shipment Recognition", def: "Full revenue is recognized on an order that has only been partially shipped.", code: "FR4" },
                { name: "Late Shipment / Books Held Open", def: "The accounting period is kept open past its close to capture later sales as if earlier.", code: "FR5" },
                { name: "Backdating Sales Agreements", def: "Contracts are dated in a prior period to justify earlier revenue recognition.", code: "FR9" },
                { name: "Channel Stuffing", def: "Distributors are pushed excess inventory beyond real demand to inflate reported revenue.", code: "FR10" },
                { name: "Improper Bill-and-Hold", def: "Revenue is recognized for goods the seller still physically holds, without meeting bill-and-hold criteria.", code: "FR12" }
            ]},
            { name: "Overstatements — Fictitious Revenues", leaves: [
                { name: "Fictitious/Roundtrip Revenue", def: "Revenue is recorded for a sale that has no real economic substance.", code: "FR13" },
                { name: "Side Letters", def: "An undisclosed side agreement grants return rights or concessions that invalidate recognized revenue.", code: "FR2" },
                { name: "Manipulated Secondary Revenue Streams", def: "Non-core revenue lines are manipulated to mask weakness in core operations.", code: "FR8" }
            ]},
            { name: "Overstatements — Concealed Liabilities/Expenses", leaves: [
                { name: "Unrecorded Vendor Invoices", def: "Known liabilities are deliberately left off the books to inflate net income.", code: "FR7" },
                { name: "Inappropriate Journal Entries", def: "Manual entries are used to move or hide amounts outside normal transaction flows.", code: "FR1" }
            ]},
            { name: "Overstatements — Other", leaves: [
                { name: "Improper Asset Valuations", def: "Assets are valued above their true worth (inventory, receivables, goodwill).", code: null },
                { name: "Improper Disclosures", def: "Material facts required for a fair presentation are omitted or misstated in the notes.", code: "FR11" }
            ]},
            { name: "Understatements (less common, often tax-motivated)", leaves: [
                { name: "Deferred/Understated Revenues", def: "Revenue is deliberately pushed to a later period or hidden entirely.", code: null },
                { name: "Overstated Liabilities/Expenses", def: "Expenses or liabilities are inflated to reduce reported income, often for tax purposes.", code: null }
            ]}
        ]
    },
    {
        branch: "Non-Financial Misstatements (this site's extension — not part of the classic ACFE tree)", color: "var(--c-gold)", groups: [
            { name: "Quality & Compliance", leaves: [
                { name: "Test Result Falsification", def: "Material or product test results are altered to show false compliance.", code: "NF1" },
                { name: "Employee Qualification Test Tampering", def: "Certification or qualification test scores are altered or fabricated.", code: "NF3" },
                { name: "EHS Compliance Reporting Fraud", def: "Environmental, health & safety data submitted to regulators is falsified.", code: "NF2" },
                { name: "Contract Compliance False Reporting", def: "False reports of compliance with contractual obligations are submitted.", code: "NF4" }
            ]},
            { name: "Operational Metrics", leaves: [
                { name: "Employee Qualification/Credential Fraud", def: "Employee credentials or qualifications are misrepresented.", code: "NF5" },
                { name: "Productivity/KPI Report Falsification", def: "Operational KPIs are manipulated, often under bonus/incentive pressure.", code: "NF6" }
            ]}
        ]
    }
];
