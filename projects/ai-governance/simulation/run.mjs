import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { evaluate } from './policy.mjs';
const root=path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const base={system:'AI-01',tool:'enterprise-ai',classification:'public',action:'draft',paused:false,requester:'author-01',revision:'draft-v1'};
const approval={approved:true,reviewer:'reviewer-02',role:'marketing-reviewer',revision:'draft-v1'};
const pub={...base,action:'publish',approval};
const cases=[
 ['T01','Public draft permitted',base,'ALLOW','APPROVED_DRAFT_ONLY',['C04','C08']],
 ['T02','Internal draft in approved tool',{...base,classification:'internal'},'ALLOW','APPROVED_DRAFT_ONLY',['C04']],
 ['T03','Restricted input denied',{...base,classification:'restricted'},'DENY','RESTRICTED_DATA',['C04']],
 ['T04','Personal tool denied',{...base,tool:'personal-ai'},'DENY','UNAPPROVED_TOOL',['C04']],
 ['T05','Public release needs review',{...base,action:'publish'},'DENY','HUMAN_APPROVAL_REQUIRED',['C07']],
 ['T06','Reviewed exact revision permitted',pub,'ALLOW','REVIEWED_ACTION',['C07']],
 ['T07','Changed output invalidates approval',{...pub,revision:'draft-v2'},'DENY','STALE_APPROVAL',['C07']],
 ['T08','Self approval denied',{...pub,approval:{...approval,reviewer:'author-01'}},'DENY','INDEPENDENT_REVIEW_REQUIRED',['C07']],
 ['T09','Wrong reviewer role denied',{...pub,approval:{...approval,role:'intern'}},'DENY','UNAUTHORIZED_REVIEWER',['C07']],
 ['T10','Payment denied despite sign-off',{...pub,action:'payment'},'DENY','PROHIBITED_ACTION',['C08']],
 ['T11','Ad spend change denied',{...pub,action:'spend_change'},'DENY','PROHIBITED_ACTION',['C08']],
 ['T12','Autonomous outreach denied',{...pub,action:'outreach'},'DENY','PROHIBITED_ACTION',['C08']],
 ['T13','Sensitive targeting denied',{...pub,action:'sensitive_targeting'},'DENY','PROHIBITED_ACTION',['C08']],
 ['T14','Pause overrides valid approval',{...pub,paused:true},'DENY','EMERGENCY_PAUSE',['C12']],
 ['T15','Unknown system denied',{...base,system:'AI-99'},'DENY','INVALID_METADATA',['C08']],
 ['T16','Unknown action denied',{...base,action:'export_all'},'DENY','INVALID_METADATA',['C08']],
 ['T17','Missing classification denied',{...base,classification:undefined},'DENY','INVALID_METADATA',['C04']],
 ['T18','CRM write requires review',{...base,system:'AI-02',action:'crm_write'},'DENY','HUMAN_APPROVAL_REQUIRED',['C07']],
 ['T19','Reviewed CRM write permitted',{...pub,system:'AI-02',action:'crm_write',approval:{...approval,role:'operations-reviewer'}},'ALLOW','REVIEWED_ACTION',['C07']],
 ['T20','FAQ assistant cannot publish',{...pub,system:'AI-03'},'DENY','OUT_OF_SCOPE_ACTION',['C08']],
 ['T21','False approval denied',{...pub,approval:{...approval,approved:false}},'DENY','HUMAN_APPROVAL_REQUIRED',['C07']],
 ['T22','No request denied',null,'DENY','INVALID_METADATA',['C08']],
 ['T23','Blank reviewer denied',{...pub,approval:{...approval,reviewer:' '}},'DENY','INDEPENDENT_REVIEW_REQUIRED',['C07']],
 ['T24','Missing pause flag fails closed',{...base,paused:undefined},'DENY','INVALID_METADATA',['C12']]
];
const results=cases.map(([id,name,input,decision,reason,controls])=>{const actual=evaluate(input);return {id,name,controls,expected:{decision,reason},actual,passed:actual.decision===decision&&actual.reason===reason};});
const runAt=new Date().toISOString();
const report={type:'Synthetic metadata policy checks',runAt,scope:'Selected logic for C04/C07/C08/C12 only; no model, identity provider or production system tested.',limitations:['Caller-supplied metadata and roles are trusted, not authenticated.','No PII, injection, deepfake, factuality or bias detection.','Local logs are editable; no immutable audit claim.','Passing cases do not validate residual risk targets or close operational gaps.'],total:results.length,passed:results.filter(r=>r.passed).length,failed:results.filter(r=>!r.passed).length,results};
fs.mkdirSync(path.join(root,'evidence'),{recursive:true});
fs.writeFileSync(path.join(root,'evidence/control-checks.json'),JSON.stringify(report,null,2)+'\n');
fs.writeFileSync(path.join(root,'evidence/decision-log.jsonl'),results.map(r=>JSON.stringify({runAt,caseId:r.id,...r.actual})).join('\n')+'\n');
console.log(`${report.passed}/${report.total} synthetic policy cases passed; ${report.failed} failed. Evidence written to evidence/.`);
if(report.failed)process.exitCode=1;
