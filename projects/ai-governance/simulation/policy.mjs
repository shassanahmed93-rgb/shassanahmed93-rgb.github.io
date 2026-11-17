// Educational metadata gate only. No model, authentication or content detection.
const systems = new Set(['AI-01', 'AI-02', 'AI-03', 'AI-04']);
const actions = new Set(['draft', 'publish', 'crm_write', 'payment', 'spend_change', 'outreach', 'sensitive_targeting']);
const approvedTools = new Set(['enterprise-ai']);
const allowedReviewers = new Set(['marketing-reviewer', 'operations-reviewer']);
export function evaluate(request) {
  const deny = reason => ({ decision: 'DENY', reason });
  if (!request || typeof request !== 'object' || Array.isArray(request)) return deny('INVALID_METADATA');
  const r = request;
  if (!systems.has(r.system) || !actions.has(r.action) || !['public', 'internal', 'restricted'].includes(r.classification)
      || typeof r.tool !== 'string' || typeof r.paused !== 'boolean'
      || typeof r.requester !== 'string' || !r.requester.trim()
      || typeof r.revision !== 'string' || !r.revision.trim()) return deny('INVALID_METADATA');
  if (r.paused) return deny('EMERGENCY_PAUSE');
  if (!approvedTools.has(r.tool)) return deny('UNAPPROVED_TOOL');
  if (r.classification === 'restricted') return deny('RESTRICTED_DATA');
  if (['payment', 'spend_change', 'outreach', 'sensitive_targeting'].includes(r.action)) return deny('PROHIBITED_ACTION');
  if (r.action === 'publish' && r.system !== 'AI-01') return deny('OUT_OF_SCOPE_ACTION');
  if (r.action === 'crm_write' && r.system !== 'AI-02') return deny('OUT_OF_SCOPE_ACTION');
  if (r.action !== 'draft') {
    const a = r.approval;
    if (!a || typeof a !== 'object' || a.approved !== true) return deny('HUMAN_APPROVAL_REQUIRED');
    if (!allowedReviewers.has(a.role) || (r.action === 'publish' && a.role !== 'marketing-reviewer')
        || (r.action === 'crm_write' && a.role !== 'operations-reviewer')) return deny('UNAUTHORIZED_REVIEWER');
    if (typeof a.reviewer !== 'string' || !a.reviewer.trim() || a.reviewer === r.requester) return deny('INDEPENDENT_REVIEW_REQUIRED');
    if (a.revision !== r.revision) return deny('STALE_APPROVAL');
  }
  return { decision: 'ALLOW', reason: r.action === 'draft' ? 'APPROVED_DRAFT_ONLY' : 'REVIEWED_ACTION' };
}
