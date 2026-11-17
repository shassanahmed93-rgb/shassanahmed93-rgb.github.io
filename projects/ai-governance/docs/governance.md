# AI governance charter and acceptable use

Status: **project artifact complete; organizational adoption unverified**. Version 1.0. Proposed sponsor: COO. Review: quarterly and on material AI change. Applies to all assumed employees, freelancers, systems and client work. No signatures or real approvals are claimed.

## Ownership and decision rights

| Role | Responsibility |
| --- | --- |
| COO | Accountable sponsor; approves releases and time-bound residual-risk acceptance with the risk owner |
| GRC Lead | Maintains charter, inventory, register, exception log, training and monthly review |
| Privacy Lead | Approves data routes, vendor processing/retention terms and privacy/transfer assessment |
| Engineering / IT Leads | Implement identity, scoped connectors, logs, tests, pause and recovery |
| Marketing / Client Services Leads | Approve factual claims, rights, targeting, FAQ sources and customer remedies |
| Finance Lead | Owns independent payee verification and dual payment approval |
| All personnel / freelancers | Use approved tools, protect inputs and report unsafe outputs or requests |

## Mandatory use rules

1. Register every AI use case and obtain approval before use. Record owner, purpose, provider/model version, data, affected people, permissions, tests, lifecycle status and next review. No personal AI account for client work.
2. Use minimum necessary data. Public facts and approved brand material are allowed; internal data requires an approved enterprise processing route. Raw customer lists, passwords, API keys, special-category/sensitive personal data and client confidential material are restricted in this case-study scope. De-identification must be reviewed for re-identification risk.
3. Use individual work identities with SSO/MFA, managed patched devices, encryption and a password manager. Give freelancers client-scoped access with an expiry date. Revoke sessions and credentials at offboarding; review privileged access monthly.
4. Treat prompts, retrieved documents and model outputs as untrusted. Give assistants read-only tools. Never rely on an instruction in a prompt as authorization. Payments, payee changes, ad-spend changes, bulk outreach and sensitive profiling are prohibited AI actions in this scope.
5. AI output is a draft. A different authorized reviewer verifies claims against sources and checks rights, consent, likeness and contextual disclosure. Bind sign-off to an output hash/revision; any edit invalidates it. The production system must authenticate the reviewer and prevent self-approval.
6. No sensitive-attribute targeting or unreviewed proxies. Verify campaign consent and appropriate use; assess subgroup harms with representative data and relevant people. Provide a human contact to contest or correct outcomes. An unexplained harmful disparity blocks release; there is no universal fairness score.
7. Review suppliers before use: processing roles, training reuse, retention/deletion, hosting/transfer locations, subprocessors, security, incident notice and exit. Re-review on material change and at least annually. Configure no-training/minimal-retention options where available and verify them.
8. Record decisions, tests, versions and approvals with least-access logging. Proposed demo decision-metadata retention is 90 days, subject to privacy/contract review; production retention must be justified and approved. Do not log raw prompts or sensitive client content by default.
9. Complete AI onboarding before access and a quarterly refresher covering confidential inputs, hallucinations, prompt injection and voice/video impersonation. Verify unusual financial instructions through a known independent channel; voice recognition alone is insufficient.
10. Report suspected exposure, unsafe output or impersonation immediately through the approved internal route. Anyone may request an emergency pause. IT disables affected integrations; restart needs Engineering, Privacy (if data affected) and the business owner.

## Release and exception record

Required fields: use-case ID; model/provider/config version; data classification; linked risks; tested controls; unresolved issues; reviewer identity; exact output/config hash; COO and risk-owner decision; approval timestamp; expiry; rollback owner. No release while High/Critical risks remain or a mandatory criterion fails.

Exceptions cannot authorize prohibited data or actions. Other exceptions need rationale, compensating controls, accountable owner, COO + risk-owner approval and an expiry of at most 30 days. Escalate expired exceptions; record closure evidence. No exceptions or residual risks have been approved in this project.
