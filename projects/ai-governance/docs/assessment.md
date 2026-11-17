# Assessment and risk method

## 1. Scope and assumptions

Fictional remote digital marketing agency providing paid advertising, creative production and customer engagement. The assumed team has 32 employees and 8 freelancers in Pakistan, United Kingdom and United States. The 18 invented clients are small retail and service businesses. The company uses cloud email/identity, CRM, advertising platforms, an enterprise AI API and workflow automation. These describe a scenario; no named supplier has been assessed.

Benefits sought are faster first drafts, reduced manual lead handling and consistent FAQ support. AI hiring decisions, credit decisions, sensitive profiling, payments and autonomous ad-spend changes are excluded. The project does not measure productivity gains.

### Data route and trust boundaries

Remote staff on managed devices → work identity → approved workspace → minimized inputs → enterprise AI service → draft → independent reviewer → authorized publishing or CRM action. Customer chat is untrusted input; it is restricted to a public FAQ source and cannot invoke account tools. Campaign reports are aggregate data. Prompt/output metadata is recorded without storing raw personal data in the demo.

At each boundary, the target design checks identity/access, data classification, supplier approval and intended action. Production integrations are not implemented. A local decision function demonstrates selected gates only.

### Affected people

Client customers may face privacy exposure or misleading claims; prospects may face exclusion or intrusive profiling; workers may face account theft or unclear responsibility; rights holders may face unlicensed copying. Review should include a client representative, accessibility perspective and people affected by targeting. No actual stakeholder consultation occurred.

## 2. Baseline workpapers (synthetic)

Assessment method: compare the invented interview notes, access snapshot, workflow sketch and procurement checklist in [baseline-workpapers.md](../evidence/baseline-workpapers.md) with the selected NIST outcomes. Record a finding only inside the fictional scenario. **Missing** = no relevant assumed process; **Partial** = some general process but no AI-specific evidence. No maturity percentage is calculated.

| Gap | Assumed observation | Mapping |
| --- | --- | --- |
| G01 Accountability | No named AI risk owner or approval route in assumed interviews. | GOVERN 2.1; GOVERN 2.3 |
| G02 AI inventory | Tool list omits owners, inputs, affected people and intended limits. | GOVERN 1.6; MAP 1.1 |
| G03 Shadow AI & training | Personal AI accounts allowed; no AI-specific onboarding material. | GOVERN 1.4; GOVERN 2.2 |
| G04 Data protection | General confidentiality policy exists; no prompt-data classification. | MEASURE 2.10 |
| G05 AI suppliers | Assumed procurement folder lacks AI training and deletion terms. | GOVERN 6.1; MANAGE 3.1 |
| G06 Remote access | MFA exists on email; AI and freelancer access not centrally governed. | MEASURE 2.7 |
| G07 Human review | Ad reviews are informal; no model-output approval record. | GOVERN 3.2; MAP 3.5 |
| G08 Agent permissions | Workflow proposal allows broad CRM and advertising connector scopes. | MEASURE 2.7; MANAGE 2.4 |
| G09 Targeting & fairness | No review of proxy attributes, consent scope or exclusion effects. | MEASURE 2.11 |
| G10 Content provenance | Creative assets have no recorded rights or synthetic-media review. | MAP 4.1; GOVERN 6.1 |
| G11 Evaluation & monitoring | No repeatable AI test set, version baseline or complaint monitoring. | MEASURE 2.1; MEASURE 2.4 |
| G12 Response & retirement | Generic incident plan has no AI pause, recall or vendor deletion steps. | MANAGE 2.4; MANAGE 4.1 |

The [gap register](../data/gap-assessment.csv) adds owners, linked risks, control IDs and deadlines relative to project kickoff. Completing a document does not close an operational gap.

## 3. Risk evaluation

The rating is a qualitative **12-month scenario estimate**, not an incident frequency measurement. Inherent risk assumes the proposed AI-specific controls are absent. Target residual risk assumes the stated treatments operate effectively. Existing email MFA and generic policies are insufficient evidence to lower the inherent rating.

**Score = likelihood × impact (1–25).** This local method is chosen for this exercise; NIST does not prescribe these thresholds.

| Score | Likelihood over 12 months | Impact: highest applicable harm |
| --- | --- | --- |
| 1 | Rare; exceptional conditions required | Minor internal rework; no personal harm |
| 2 | Unlikely; plausible isolated event | Limited reversible service or data issue |
| 3 | Possible under routine conditions | Material client disruption or privacy harm |
| 4 | Likely given repeated exposure | Major harm, campaign damage or broad disruption |
| 5 | Almost certain or repeatedly expected | Severe personal-data harm, financial loss or sustained loss of trust |

Bands: **1–4 Low; 5–12 Moderate; 13–19 High; 20–25 Critical.** The impact column is harm-based rather than a financial loss forecast. Scores are ordinal prioritization aids; multiplying them is not expected monetary loss. Each risk's rationale and required validation evidence appear in the [register](../data/risk-register.csv).

### Tolerance and decisions

- Critical (20–25): stop the affected use case until treatment and re-evaluation.
- High (13–19): no production release; owner must implement and test treatment.
- Moderate (5–12): conditional release only after tests pass and the COO plus risk owner record a time-bound acceptance (maximum 90 days).
- Low (1–4): owner may accept for up to 180 days; review monthly or on change.
- Regardless of score, prohibited targeting, confirmed data exposure or unauthorized external action blocks use.

All 10 risks remain open. The 7 High/Critical baseline risks require treatment; the proposed residuals of 5–10 are **targets**, not accepted or measured results. No fictional sign-off is presented as a real approval.

## 4. Reassessment triggers

Review monthly and before any model/provider change, new data category, connector permission, country of processing, public release pattern or meaningful complaint. Re-score after an incident or failed test. Archive the prior decision and model/configuration identifiers. A legal/privacy specialist must confirm actual processing roles, applicable privacy/marketing rules, consent, contracts, rights and transfer requirements before deployment.
