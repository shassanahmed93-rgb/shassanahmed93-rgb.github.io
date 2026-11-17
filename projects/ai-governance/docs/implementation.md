# Implementation, evidence and rollout

## What has been implemented in the project

The project contains a charter, four-system inventory, 12 findings with a control map, 10 evaluated risks, monitoring criteria and an incident/retirement playbook. A runnable local policy gate demonstrates selected decisions. This is a **documented governance implementation with simulated logic**, not a deployed organization-wide control environment.

| Control | Project evidence | Before operational closure |
| --- | --- | --- |
| C01 / G01 | Documented; deployment unverified | Day 15; GRC Lead; supply relevant deployment and test evidence |
| C02 / G02 | Documented; deployment unverified | Day 15; Operations Lead; supply relevant deployment and test evidence |
| C03 / G03 | Documented; deployment unverified | Day 30; GRC Lead; supply relevant deployment and test evidence |
| C04 / G04 | Documented + selected logic simulated | Day 30; Privacy Lead; supply relevant deployment and test evidence |
| C05 / G05 | Documented; deployment unverified | Day 45; Privacy Lead; supply relevant deployment and test evidence |
| C06 / G06 | Documented; deployment unverified | Day 30; IT Lead; supply relevant deployment and test evidence |
| C07 / G07 | Documented + selected logic simulated | Day 30; Marketing Lead; supply relevant deployment and test evidence |
| C08 / G08 | Documented + selected logic simulated | Day 45; Engineering Lead; supply relevant deployment and test evidence |
| C09 / G09 | Documented; deployment unverified | Day 60; Marketing Lead; supply relevant deployment and test evidence |
| C10 / G10 | Documented; deployment unverified | Day 60; Marketing Lead; supply relevant deployment and test evidence |
| C11 / G11 | Documented; deployment unverified | Day 60; Engineering Lead; supply relevant deployment and test evidence |
| C12 / G12 | Documented + selected logic simulated | Day 90; IT Lead; supply relevant deployment and test evidence |

Control traceability: [control map](../data/control-map.csv) → [gap assessment](../data/gap-assessment.csv) → [risk register](../data/risk-register.csv). Policy logic covers selected aspects of C04/C07/C08/C12 only; documentation covers the broader design. Technical checks do not prove all NIST outcomes are achieved.

## Demonstrated policy logic

Run `node simulation/run.mjs`. It evaluates synthetic requests with provider, data classification, action and approval metadata. Cases include restricted input, unapproved tools, public release without review, stale approval, self-approval, unauthorized reviewer, unsafe finance/spend actions, unsupported actions, invalid metadata and an emergency pause. It writes [control-checks.json](../evidence/control-checks.json) and a sanitized [decision-log.jsonl](../evidence/decision-log.jsonl). The generated report supplies the actual pass count.

The gate performs **no model inference or content inspection**. It trusts metadata and role declarations. It is not DLP, authentication, an approval service, an adversarial model evaluation or a deepfake detector. The local log is editable; it is not immutable. Production requires authenticated identities, output hashing, server-side policy enforcement, durable protected logging, telemetry and integration tests.

## Evaluation and monitoring plan (targets only)

| Metric | Definition | Target / cadence |
| --- | --- | --- |
| AI inventory coverage | Inventoried AI systems / discovered AI systems | 100% before use; Monthly and at onboarding |
| Independent release approval | Public releases with valid revision-bound sign-off / public releases | 100%; Each release |
| Restricted-data exposure | Confirmed restricted-data transmissions to an unapproved destination | 0; any event pauses the affected flow; Continuous alerts; weekly review |
| Grounded-answer review | Source-supported answers / 50 sampled FAQ answers; 0 critical false claims | At least 95%; failure blocks release; Before release, weekly and on changes |
| Targeting review | In-scope campaigns with consent/proxy/subgroup review / in-scope campaigns | 100%; unexplained harmful disparity blocks use; Each campaign and material change |
| Pause time | Minutes from validated alert to disabled affected AI integration | At most 15 minutes in a drill; Quarterly drill |

Before production, run representative factuality, privacy, injection and rights scenarios through the actual model and connectors. An independent reviewer must assess the evidence. The 50-answer factuality sample is an initial local acceptance rule, not statistical assurance. Targeting evaluation needs appropriate sample size and affected-user feedback; no fairness outcome is measured here. Record provider/model version, prompt/config hash, dataset version and reviewer for every evaluation. Re-run on changes.

## Prioritized 90-day rollout (relative to kickoff)

| Window | Deliverables | Gate / acceptance evidence |
| --- | --- | --- |
| Days 1–15 | Assign owners; freeze unsafe flows; inventory four systems; approve charter | COO/risk owners review scope; no High/Critical release |
| Days 16–30 | Approved tools; data rules; MFA/access; human review; finance callback; training | IdP records, data-route tests, publication approval and callback drill |
| Days 31–60 | Supplier checks; connector isolation; rights and targeting review; real-model evaluation | Vendor terms, permission tests, representative test results and stakeholder review |
| Days 61–90 | Monitoring; outage/incident drill; retirement test; reassess residual risk | Pause/recovery evidence; owner + COO decision with expiry; monthly review |

**Decision today:** documentation complete, selected local checks demonstrable, operational rollout pending. All risk acceptances and gap closures remain pending verification. No percentage risk-reduction or compliance score is claimed.

## AI incident, appeal and recovery playbook

1. **Triage and pause:** detect exposure, unsafe action, critical false claim, harmful targeting or impersonation. IT aims to disable the affected integration within 15 minutes of a validated alert; this is an untested target.
2. **Contain and preserve:** revoke tokens/sessions and pause scheduled publications. Preserve minimal access-controlled metadata, affected output/config versions and chronology. Avoid copying sensitive prompts into tickets.
3. **Assess impact:** Privacy/GRC and the business owner determine affected people, destinations and obligations. Finance verifies suspicious instructions using saved contact details. Legal/privacy review decides any notification requirements; no fixed legal deadline is assumed.
4. **Correct and communicate:** remove or correct public material, contact relevant clients/people as required, offer a human review/appeal and track remedy to closure. Pause related campaigns if the same fault could recur.
5. **Recover safely:** fix the cause, re-run representative tests and obtain Engineering, business-owner and relevant Privacy approval before re-enabling. Record what passed, remaining risks and restart authority.
6. **Learn or retire:** review within five business days as a proposed internal target. For retirement, disable connectors, revoke credentials, stop jobs, export necessary records, request/verify supplier deletion, assign a manual replacement and archive the decision.

## Next evidence required

Live identity/endpoint settings; approved vendor terms and retention configuration; privacy/rights/targeting review; actual model and connector test results; release workflow enforcement; protected monitoring records; pause/recovery drill; stakeholder consultation; documented, time-bound residual-risk decisions. Until then, target residual ratings remain unvalidated.
