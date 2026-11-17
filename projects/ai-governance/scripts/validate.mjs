import fs from 'node:fs';
import path from 'node:path';
import assert from 'node:assert/strict';
import {fileURLToPath} from 'node:url';
const root=path.resolve(path.dirname(fileURLToPath(import.meta.url)),'..');
const m=JSON.parse(fs.readFileSync(path.join(root,'data/case-study.json'),'utf8'));
const report=JSON.parse(fs.readFileSync(path.join(root,'evidence/control-checks.json'),'utf8'));
const unique=list=>assert.equal(new Set(list.map(x=>x.id)).size,list.length,'Duplicate IDs');
for(const list of [m.systems,m.gaps,m.controls,m.risks,report.results])unique(list);
assert.equal(m.gaps.length,12);assert.equal(m.risks.length,10);assert.equal(m.systems.length,4);
assert.equal(m.gaps.filter(g=>g.baseline==='Missing').length,8);
assert.equal(m.gaps.filter(g=>g.baseline==='Partial').length,4);
const controls=new Map(m.controls.map(c=>[c.id,c]));
const risks=new Map(m.risks.map(r=>[r.id,r]));
for(const g of m.gaps){assert(controls.has(g.control),g.id+' has unknown control');for(const id of g.risks)assert(risks.has(id),g.id+' has unknown risk');}
for(const r of m.risks){
  assert.equal(r.inherent,r.l*r.i,r.id+' inherent calculation');assert.equal(r.target,r.tl*r.ti,r.id+' target calculation');
  assert(r.target<=r.inherent,r.id+' invalid target');assert(r.proof.length>20,r.id+' lacks validation evidence');
  assert(r.status.startsWith('Open'),r.id+' has unsupported closure');
  for(const id of r.controls){assert(controls.has(id),r.id+' has unknown control');assert(r.day>=controls.get(id).day,r.id+' treatment due before linked control');}
}
assert.equal(m.risks.filter(r=>r.inherent>=13).length,7);
assert.equal(report.passed,report.total);assert.equal(report.failed,0);assert.equal(report.results.length,report.total);
for(const s of m.systems)for(const r of s.risks)assert(risks.has(r),s.id+' has unknown risk');
let checked=0;
const files=[];function walk(dir){for(const entry of fs.readdirSync(dir,{withFileTypes:true})){const file=path.join(dir,entry.name);entry.isDirectory()?walk(file):files.push(file);}}walk(root);
for(const file of files.filter(f=>/\.(html|md)$/.test(f))){
 const text=fs.readFileSync(file,'utf8');
 const refs=file.endsWith('.html')?[...text.matchAll(/(?:href|src)="([^"]+)"/g)].map(x=>x[1]):[...text.matchAll(/\]\(([^)]+)\)/g)].map(x=>x[1]);
 for(const ref of refs){if(/^(https?:|#|mailto:|data:)/.test(ref))continue;const resolved=path.resolve(path.dirname(file),ref.split('#')[0]);assert(resolved.startsWith(root),file+' links outside project');assert(fs.existsSync(resolved),path.relative(root,file)+' has broken link '+ref);checked++;}
}
const pdf=fs.readFileSync(path.join(root,'NexaReach_AI_Governance_Brief.pdf'));
assert.equal((pdf.toString('latin1').match(/\/Type\s*\/Page\b/g)||[]).length,4,'Brief must have 4 pages');
console.log(`Validated IDs, risk scoring, treatment deadlines, control evidence, ${checked} local links and the four-page PDF.`);
