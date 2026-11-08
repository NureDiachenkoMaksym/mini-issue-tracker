const PLAN = {"status": "planned_not_wired", "mainStartingFrameNodeId": "2:4727", "connections": [{"sourceNodeId": "I2:6368;2:6346", "sourceFrameName": "S-02-A", "controlName": "Important Issues", "trigger": "ON_CLICK", "actionType": "NAVIGATE", "destinationNodeId": "2:4842", "destinationFrameName": "S-02-B", "condition": ""}, {"sourceNodeId": "2:4853", "sourceFrameName": "S-02-B", "controlName": "All Issues", "trigger": "ON_CLICK", "actionType": "NAVIGATE", "destinationNodeId": "2:4727", "destinationFrameName": "S-02-A", "condition": ""}, {"sourceNodeId": "I2:6169;2:5830", "sourceFrameName": "S-02-A", "controlName": "Title", "trigger": "ON_CLICK", "actionType": "NAVIGATE", "destinationNodeId": "5:525", "destinationFrameName": "S-03-003 · Member A · from All", "condition": "ISS-003 title; viewer remains Member A"}, {"sourceNodeId": "2:6249", "sourceFrameName": "S-02-A", "controlName": "Create Issue", "trigger": "ON_CLICK", "actionType": "NAVIGATE", "destinationNodeId": "5:631", "destinationFrameName": "M-01-PREFILLED · from All", "condition": "Prefilled simulated modal; Navigate, not Open overlay"}, {"sourceNodeId": "5:530", "sourceFrameName": "S-03-003 · Member A · from All", "controlName": "Return to Issues List", "trigger": "ON_CLICK", "actionType": "NAVIGATE", "destinationNodeId": "2:4727", "destinationFrameName": "S-02-A", "condition": ""}, {"sourceNodeId": "5:670", "sourceFrameName": "M-01-PREFILLED · from All", "controlName": "Cancel", "trigger": "ON_CLICK", "actionType": "NAVIGATE", "destinationNodeId": "2:4727", "destinationFrameName": "S-02-A", "condition": "No creation; restore calling tab"}, {"sourceNodeId": "5:671", "sourceFrameName": "M-01-PREFILLED · from All", "controlName": "Create", "trigger": "ON_CLICK", "actionType": "NAVIGATE", "destinationNodeId": "5:427", "destinationFrameName": "S-03-NEW", "condition": "Valid prefilled Title + Description; fixture creates ISS-009"}, {"sourceNodeId": "5:432", "sourceFrameName": "S-03-NEW", "controlName": "Return to Issues List", "trigger": "ON_CLICK", "actionType": "NAVIGATE", "destinationNodeId": "5:1412", "destinationFrameName": "S-02-A · after ISS-009 creation", "condition": "Preserve new record and originating tab"}, {"sourceNodeId": "5:567", "sourceFrameName": "S-03-003 · Member A · from All", "controlName": "Add Comment", "trigger": "ON_CLICK", "actionType": "NAVIGATE", "destinationNodeId": "5:868", "destinationFrameName": "S-03-003 · Comment validation · from All", "condition": "Empty comment"}, {"sourceNodeId": "5:565", "sourceFrameName": "S-03-003 · Member A · from All", "controlName": "Multiline input", "trigger": "ON_CLICK", "actionType": "NAVIGATE", "destinationNodeId": "5:922", "destinationFrameName": "S-03-003 · Comment draft-success · from All", "condition": "Simulated prefill, not live typing"}, {"sourceNodeId": "5:908", "sourceFrameName": "S-03-003 · Comment validation · from All", "controlName": "Multiline input", "trigger": "ON_CLICK", "actionType": "NAVIGATE", "destinationNodeId": "5:922", "destinationFrameName": "S-03-003 · Comment draft-success · from All", "condition": "Simulated prefill"}, {"sourceNodeId": "5:964", "sourceFrameName": "S-03-003 · Comment draft-success · from All", "controlName": "Add Comment", "trigger": "ON_CLICK", "actionType": "NAVIGATE", "destinationNodeId": "5:976", "destinationFrameName": "S-03-003 · Comment saved · from All", "condition": "Success fixture"}, {"sourceNodeId": "5:1073", "sourceFrameName": "S-03-003 · Comment draft-failure · from All", "controlName": "Add Comment", "trigger": "ON_CLICK", "actionType": "NAVIGATE", "destinationNodeId": "5:1085", "destinationFrameName": "S-03-003 · Comment error · from All", "condition": "Independent failure fixture; no newly saved entry"}, {"sourceNodeId": "5:1128", "sourceFrameName": "S-03-003 · Comment error · from All", "controlName": "Add Comment", "trigger": "ON_CLICK", "actionType": "NAVIGATE", "destinationNodeId": "5:976", "destinationFrameName": "S-03-003 · Comment saved · from All", "condition": "Simulated successful retry"}, {"sourceNodeId": "5:873", "sourceFrameName": "S-03-003 · Comment validation · from All", "controlName": "Return to Issues List", "trigger": "ON_CLICK", "actionType": "NAVIGATE", "destinationNodeId": "2:4727", "destinationFrameName": "S-02-A", "condition": ""}, {"sourceNodeId": "5:927", "sourceFrameName": "S-03-003 · Comment draft-success · from All", "controlName": "Return to Issues List", "trigger": "ON_CLICK", "actionType": "NAVIGATE", "destinationNodeId": "2:4727", "destinationFrameName": "S-02-A", "condition": ""}, {"sourceNodeId": "5:981", "sourceFrameName": "S-03-003 · Comment saved · from All", "controlName": "Return to Issues List", "trigger": "ON_CLICK", "actionType": "NAVIGATE", "destinationNodeId": "2:4727", "destinationFrameName": "S-02-A", "condition": ""}, {"sourceNodeId": "5:1036", "sourceFrameName": "S-03-003 · Comment draft-failure · from All", "controlName": "Return to Issues List", "trigger": "ON_CLICK", "actionType": "NAVIGATE", "destinationNodeId": "2:4727", "destinationFrameName": "S-02-A", "condition": ""}, {"sourceNodeId": "5:1090", "sourceFrameName": "S-03-003 · Comment error · from All", "controlName": "Return to Issues List", "trigger": "ON_CLICK", "actionType": "NAVIGATE", "destinationNodeId": "2:4727", "destinationFrameName": "S-02-A", "condition": ""}, {"sourceNodeId": "I2:6125;2:5830", "sourceFrameName": "S-02-B", "controlName": "Title", "trigger": "ON_CLICK", "actionType": "NAVIGATE", "destinationNodeId": "5:578", "destinationFrameName": "S-03-003 · Member A · from Important", "condition": "ISS-003 title; viewer remains Member A"}, {"sourceNodeId": "2:6247", "sourceFrameName": "S-02-B", "controlName": "Create Issue", "trigger": "ON_CLICK", "actionType": "NAVIGATE", "destinationNodeId": "5:759", "destinationFrameName": "M-01-PREFILLED · from Important", "condition": "Prefilled simulated modal; Navigate, not Open overlay"}, {"sourceNodeId": "5:583", "sourceFrameName": "S-03-003 · Member A · from Important", "controlName": "Return to Issues List", "trigger": "ON_CLICK", "actionType": "NAVIGATE", "destinationNodeId": "2:4842", "destinationFrameName": "S-02-B", "condition": ""}, {"sourceNodeId": "5:798", "sourceFrameName": "M-01-PREFILLED · from Important", "controlName": "Cancel", "trigger": "ON_CLICK", "actionType": "NAVIGATE", "destinationNodeId": "2:4842", "destinationFrameName": "S-02-B", "condition": "No creation; restore calling tab"}, {"sourceNodeId": "5:799", "sourceFrameName": "M-01-PREFILLED · from Important", "controlName": "Create", "trigger": "ON_CLICK", "actionType": "NAVIGATE", "destinationNodeId": "5:476", "destinationFrameName": "S-03-NEW · from Important", "condition": "Valid prefilled Title + Description; fixture creates ISS-009"}, {"sourceNodeId": "5:481", "sourceFrameName": "S-03-NEW · from Important", "controlName": "Return to Issues List", "trigger": "ON_CLICK", "actionType": "NAVIGATE", "destinationNodeId": "5:1537", "destinationFrameName": "S-02-B · after ISS-009 creation", "condition": "Preserve new record and originating tab"}, {"sourceNodeId": "5:620", "sourceFrameName": "S-03-003 · Member A · from Important", "controlName": "Add Comment", "trigger": "ON_CLICK", "actionType": "NAVIGATE", "destinationNodeId": "5:1140", "destinationFrameName": "S-03-003 · Comment validation · from Important", "condition": "Empty comment"}, {"sourceNodeId": "5:618", "sourceFrameName": "S-03-003 · Member A · from Important", "controlName": "Multiline input", "trigger": "ON_CLICK", "actionType": "NAVIGATE", "destinationNodeId": "5:1194", "destinationFrameName": "S-03-003 · Comment draft-success · from Important", "condition": "Simulated prefill, not live typing"}, {"sourceNodeId": "5:1180", "sourceFrameName": "S-03-003 · Comment validation · from Important", "controlName": "Multiline input", "trigger": "ON_CLICK", "actionType": "NAVIGATE", "destinationNodeId": "5:1194", "destinationFrameName": "S-03-003 · Comment draft-success · from Important", "condition": "Simulated prefill"}, {"sourceNodeId": "5:1236", "sourceFrameName": "S-03-003 · Comment draft-success · from Important", "controlName": "Add Comment", "trigger": "ON_CLICK", "actionType": "NAVIGATE", "destinationNodeId": "5:1248", "destinationFrameName": "S-03-003 · Comment saved · from Important", "condition": "Success fixture"}, {"sourceNodeId": "5:1345", "sourceFrameName": "S-03-003 · Comment draft-failure · from Important", "controlName": "Add Comment", "trigger": "ON_CLICK", "actionType": "NAVIGATE", "destinationNodeId": "5:1357", "destinationFrameName": "S-03-003 · Comment error · from Important", "condition": "Independent failure fixture; no newly saved entry"}, {"sourceNodeId": "5:1400", "sourceFrameName": "S-03-003 · Comment error · from Important", "controlName": "Add Comment", "trigger": "ON_CLICK", "actionType": "NAVIGATE", "destinationNodeId": "5:1248", "destinationFrameName": "S-03-003 · Comment saved · from Important", "condition": "Simulated successful retry"}, {"sourceNodeId": "5:1145", "sourceFrameName": "S-03-003 · Comment validation · from Important", "controlName": "Return to Issues List", "trigger": "ON_CLICK", "actionType": "NAVIGATE", "destinationNodeId": "2:4842", "destinationFrameName": "S-02-B", "condition": ""}, {"sourceNodeId": "5:1199", "sourceFrameName": "S-03-003 · Comment draft-success · from Important", "controlName": "Return to Issues List", "trigger": "ON_CLICK", "actionType": "NAVIGATE", "destinationNodeId": "2:4842", "destinationFrameName": "S-02-B", "condition": ""}, {"sourceNodeId": "5:1253", "sourceFrameName": "S-03-003 · Comment saved · from Important", "controlName": "Return to Issues List", "trigger": "ON_CLICK", "actionType": "NAVIGATE", "destinationNodeId": "2:4842", "destinationFrameName": "S-02-B", "condition": ""}, {"sourceNodeId": "5:1308", "sourceFrameName": "S-03-003 · Comment draft-failure · from Important", "controlName": "Return to Issues List", "trigger": "ON_CLICK", "actionType": "NAVIGATE", "destinationNodeId": "2:4842", "destinationFrameName": "S-02-B", "condition": ""}, {"sourceNodeId": "5:1362", "sourceFrameName": "S-03-003 · Comment error · from Important", "controlName": "Return to Issues List", "trigger": "ON_CLICK", "actionType": "NAVIGATE", "destinationNodeId": "2:4842", "destinationFrameName": "S-02-B", "condition": ""}, {"sourceNodeId": "I5:1420;2:6346", "sourceFrameName": "S-02-A · after ISS-009 creation", "controlName": "Important Issues", "trigger": "ON_CLICK", "actionType": "NAVIGATE", "destinationNodeId": "5:1537", "destinationFrameName": "S-02-B · after ISS-009 creation", "condition": "ISS-009 remains excluded: Not Set priority"}, {"sourceNodeId": "5:1547", "sourceFrameName": "S-02-B · after ISS-009 creation", "controlName": "All Issues", "trigger": "ON_CLICK", "actionType": "NAVIGATE", "destinationNodeId": "5:1412", "destinationFrameName": "S-02-A · after ISS-009 creation", "condition": "Retain all nine records"}, {"sourceNodeId": "I5:1526;2:5830", "sourceFrameName": "S-02-A · after ISS-009 creation", "controlName": "Title", "trigger": "ON_CLICK", "actionType": "NAVIGATE", "destinationNodeId": "5:427", "destinationFrameName": "S-03-NEW", "condition": ""}, {"sourceNodeId": "2:6309", "sourceFrameName": "M-01", "controlName": "Cancel", "trigger": "ON_CLICK", "actionType": "NAVIGATE", "destinationNodeId": "2:4727", "destinationFrameName": "S-02-A", "condition": "Existing empty All-origin modal"}, {"sourceNodeId": "2:6319", "sourceFrameName": "M-01", "controlName": "Create", "trigger": "ON_CLICK", "actionType": "NAVIGATE", "destinationNodeId": "2:5190", "destinationFrameName": "M-01 · Missing Title and Description", "condition": "Both empty; no new issue"}, {"sourceNodeId": "2:6305", "sourceFrameName": "M-01 · Missing Title and Description", "controlName": "Cancel", "trigger": "ON_CLICK", "actionType": "NAVIGATE", "destinationNodeId": "2:4727", "destinationFrameName": "S-02-A", "condition": ""}, {"sourceNodeId": "5:1573", "sourceFrameName": "O-ASSIGN-READY", "controlName": "Apply Assignee", "trigger": "ON_CLICK", "actionType": "NAVIGATE", "destinationNodeId": "5:1588", "destinationFrameName": "O-ASSIGN-SAVED", "condition": "Lead stays Lead; current assignee becomes Member A"}, {"sourceNodeId": "5:1600", "sourceFrameName": "O-ASSIGN-SAVED", "controlName": "Apply Priority", "trigger": "ON_CLICK", "actionType": "NAVIGATE", "destinationNodeId": "5:1610", "destinationFrameName": "O-PRIORITY-SAVED", "condition": "Lead stays Lead; priority becomes High"}, {"sourceNodeId": "5:1652", "sourceFrameName": "O-STATUS-OPEN", "controlName": "Apply Status", "trigger": "ON_CLICK", "actionType": "NAVIGATE", "destinationNodeId": "5:1655", "destinationFrameName": "O-STATUS-IN-PROGRESS", "condition": "ISS-001; Member A; Open → In Progress"}, {"sourceNodeId": "5:1675", "sourceFrameName": "O-STATUS-IN-PROGRESS", "controlName": "Apply Status", "trigger": "ON_CLICK", "actionType": "NAVIGATE", "destinationNodeId": "5:1678", "destinationFrameName": "O-STATUS-RESOLVED-CLOSE", "condition": "ISS-001; Member A; In Progress → Resolved"}, {"sourceNodeId": "5:1698", "sourceFrameName": "O-STATUS-RESOLVED-CLOSE", "controlName": "Apply Status", "trigger": "ON_CLICK", "actionType": "NAVIGATE", "destinationNodeId": "5:1701", "destinationFrameName": "O-STATUS-CLOSED", "condition": "ISS-001; Member A; Resolved → Closed"}, {"sourceNodeId": "5:1696", "sourceFrameName": "O-STATUS-RESOLVED-CLOSE", "controlName": "Select Status", "trigger": "ON_CLICK", "actionType": "NAVIGATE", "destinationNodeId": "5:1728", "destinationFrameName": "O-STATUS-RESOLVED-REOPEN", "condition": "Simulate choosing In Progress; current status remains Resolved"}, {"sourceNodeId": "5:1746", "sourceFrameName": "O-STATUS-RESOLVED-REOPEN", "controlName": "Select Status", "trigger": "ON_CLICK", "actionType": "NAVIGATE", "destinationNodeId": "5:1678", "destinationFrameName": "O-STATUS-RESOLVED-CLOSE", "condition": "Simulate choosing Closed; current status remains Resolved"}, {"sourceNodeId": "5:1748", "sourceFrameName": "O-STATUS-RESOLVED-REOPEN", "controlName": "Apply Status", "trigger": "ON_CLICK", "actionType": "NAVIGATE", "destinationNodeId": "5:1655", "destinationFrameName": "O-STATUS-IN-PROGRESS", "condition": "ISS-001; Member A; Resolved → In Progress"}]};

// Local plugin: exact IDs only; no network; no visual node mutations.
const BACKUP_KEY = 'mit-prototype-wiring-backup-v1';
const EXPECTED_FILE = 'sPgIIOhd8e5rJjf5piu6sD';
let busy = false;
const copy = value => JSON.parse(JSON.stringify(value));
const stable = value => JSON.stringify(value);
function normalized(s) { return String(s).replace(/[\u200B-\u200D\uFEFF]/g, '').replace(/\s+/g,' ').trim(); }
function matchesName(actual, expected) {
  actual=normalized(actual); expected=normalized(expected);
  return actual===expected || (actual.indexOf(expected)===0 && /^[\s·—–:/|(-]/.test(actual.slice(expected.length)));
}
function pageOf(node) { let p=node; while(p && p.type!=='PAGE')p=p.parent; return p; }
function inNamedSurface(node, name) {
  let p=node.parent;
  while(p && p.type!=='PAGE') {
    if((p.type==='FRAME'||p.type==='INSTANCE') && matchesName(p.name,name))return p;
    p=p.parent;
  }
  return null;
}
function disabledAncestor(node, surface) {
  let p=node;
  while(p && p!==surface) {
    if(/(?:^|[\s/|=·_-])(disabled|inactive)(?:$|[\s/|=·_-])/i.test(p.name))return true;
    if(p.visible===false)return true;
    p=p.parent;
  }
  return false;
}
function desired(c) {
  return {trigger:{type:'ON_CLICK'},actions:[{type:'NODE',destinationId:c.destinationNodeId,navigation:'NAVIGATE',transition:null}]};
}
function actionsOf(r) { return r.actions || (r.action?[r.action]:[]); }
function isDesired(r,c) {
  const a=actionsOf(r);
  return r.trigger && r.trigger.type==='ON_CLICK' && a.length===1 && a[0].type==='NODE' &&
    a[0].navigation==='NAVIGATE' && a[0].destinationId===c.destinationNodeId &&
    (a[0].transition==null) && !a[0].preserveScrollPosition;
}
function send(report) { figma.ui.postMessage({type:'report',report}); }
async function check() {
  if(figma.editorType!=='figma')throw Error('Откройте файл в режиме Figma Design.');
  if(figma.fileKey && figma.fileKey!==EXPECTED_FILE)throw Error('Это другой Figma-файл. Нужен исходный Mini Issue Tracker; копия меняет ID.');
  const page=figma.currentPage;
  const errors=[],warnings=[],rows=[];
  const ids=Array.from(new Set([PLAN.mainStartingFrameNodeId].concat(PLAN.connections.flatMap(c=>[c.sourceNodeId,c.destinationNodeId]))));
  const nodes=new Map();
  for(const id of ids) {
    try {nodes.set(id,await figma.getNodeByIdAsync(id));}
    catch(e){errors.push(id+': '+String(e.message||e));nodes.set(id,null);}
  }
  const main=nodes.get(PLAN.mainStartingFrameNodeId);
  if(!main || main.type!=='FRAME' || pageOf(main)!==page || !matchesName(main.name,'S-02-A'))errors.push('Основной S-02-A не найден на текущей странице.');
  for(let i=0;i<PLAN.connections.length;i++) {
    const c=PLAN.connections[i],src=nodes.get(c.sourceNodeId),dst=nodes.get(c.destinationNodeId);
    const issues=[];
    if(!src)issues.push('source node отсутствует');
    if(!dst)issues.push('destination отсутствует');
    if(src) {
      if(typeof src.setReactionsAsync!=='function')issues.push('source не поддерживает setReactionsAsync');
      if(pageOf(src)!==page)issues.push('source на другой странице');
      const surface=inNamedSurface(src,c.sourceFrameName);
      if(!surface)issues.push('source вне указанного frame '+c.sourceFrameName);
      if(disabledAncestor(src,surface))issues.push('source/ancestor disabled или invisible');
      // Only direct descendants of the declared product surface are targeted, never masters.
      let p=src;
      while(p && p!==surface){if(p.type==='COMPONENT'||p.type==='COMPONENT_SET')issues.push('source внутри master component');p=p.parent;}
      const clicks=(src.reactions||[]).filter(r=>r.trigger&&r.trigger.type==='ON_CLICK');
      if(clicks.length && !(clicks.length===1&&isDesired(clicks[0],c)))issues.push('есть другой ON_CLICK — перезапись запрещена');
    }
    if(dst) {
      if(dst.type!=='FRAME')issues.push('destination не FRAME');
      if(pageOf(dst)!==page)issues.push('destination на другой странице');
      if(!matchesName(dst.name,c.destinationFrameName))issues.push('имя destination не совпало: '+dst.name);
      if(dst.visible===false)issues.push('destination invisible');
    }
    if(issues.length)errors.push('Строка '+(i+1)+' ['+c.sourceNodeId+']: '+issues.join('; '));
    rows.push({row:i+1,source:c.sourceNodeId,control:c.controlName,from:c.sourceFrameName,to:c.destinationFrameName,
      destination:c.destinationNodeId,condition:c.condition,status:issues.length?'BLOCKED':(src.reactions||[]).some(r=>isDesired(r,c))?'ALREADY WIRED':'READY'});
  }
  warnings.push('50 строк — подготовленная симуляция, а не приложение/БД. Conditions — пояснения fixture, не runtime-условия.');
  warnings.push('Создание — NAVIGATE на full-screen modal fixtures, не Open overlay. Макеты не меняются; отличие от исходного overlay-контракта нужно отметить в отчёте.');
  warnings.push('Дополнительные сценарии ISS-003 status, ISS-009 comments, post-change lists и repeated creation таблицей не покрыты.');
  warnings.push('Редактирование вложенных instance nodes проверяется при записи; при ошибке выполняется откат.');
  const starts=[{nodeId:PLAN.mainStartingFrameNodeId,name:'01 · Main — All Issues'}];
  const extra=[['O-ASSIGN-READY','02 · Lead — Assignment & Priority'],['O-STATUS-OPEN','03 · Assignee — Status lifecycle'],
    ['S-03-003 · Comment draft-failure · from All','04 · Comment failure — All'],
    ['S-03-003 · Comment draft-failure · from Important','05 · Comment failure — Important'],['M-01','06 · Empty Create validation']];
  for(const [name,label] of extra) {
    const c=PLAN.connections.find(x=>x.sourceFrameName===name);
    const surface=c?inNamedSurface(nodes.get(c.sourceNodeId)||{},name):null;
    if(surface && surface.type==='FRAME')starts.push({nodeId:surface.id,name:label});
    else warnings.push('Дополнительный flow start не найден: '+name);
  }
  const report={phase:'check',ok:errors.length===0,pageId:page.id,total:rows.length,
    ready:rows.filter(x=>x.status==='READY').length,alreadyWired:rows.filter(x=>x.status==='ALREADY WIRED').length,
    errors,warnings,plannedStarts:starts,rows,livePrototypeTest:'NOT RUN'};
  return {report,page,nodes,starts};
}
function readBackup(page) { const s=page.getPluginData(BACKUP_KEY);return s?JSON.parse(s):null; }
async function restoreBackup(page,b,guard) {
  const problems=[],targets=[];
  if(!b || b.pageId!==page.id)throw Error('Резервная копия для этой страницы отсутствует.');
  for(const item of b.nodes) {
    const node=await figma.getNodeByIdAsync(item.id);
    if(!node || typeof node.setReactionsAsync!=='function'){problems.push('Узел недоступен: '+item.id);continue;}
    if(guard && item.after && stable(node.reactions)!==stable(item.after))problems.push('Связи изменены после запуска: '+item.id);
    targets.push({node,item});
  }
  if(guard && b.afterFlows && stable(page.flowStartingPoints)!==stable(b.afterFlows))problems.push('Flow starts изменены после запуска.');
  if(problems.length)throw Error(problems.join('\n')+'\nАвтоматическое восстановление остановлено.');
  const failures=[];
  for(let i=targets.length-1;i>=0;i--){try{await targets[i].node.setReactionsAsync(targets[i].item.before);}catch(e){failures.push(targets[i].item.id+': '+String(e.message||e));}}
  try {page.flowStartingPoints=copy(b.beforeFlows);}catch(e){failures.push('flowStartingPoints: '+String(e.message||e));}
  if(failures.length)throw Error('Откат не завершён:\n'+failures.join('\n'));
  page.setPluginData(BACKUP_KEY,'');
}
async function apply() {
  const ctx=await check();
  if(!ctx.report.ok){send(ctx.report);return;}
  const {page,nodes,starts}=ctx;
  const existing=readBackup(page);
  if(existing && ctx.report.ready>0)throw Error('Есть предыдущая резервная копия и отсутствующие связи. Сначала восстановите исходные связи, затем проверьте заново.');
  const merged=copy(page.flowStartingPoints||[]);
  // Main first; preserve unrelated existing starts and add only missing fixture roots.
  const nextFlows=[starts[0]].concat(merged.filter(x=>x.nodeId!==starts[0].nodeId));
  for(const s of starts.slice(1))if(!nextFlows.some(x=>x.nodeId===s.nodeId))nextFlows.push(s);
  const changes=PLAN.connections.filter(c=>!(nodes.get(c.sourceNodeId).reactions||[]).some(r=>isDesired(r,c)));
  if(existing && existing.afterFlows && stable(page.flowStartingPoints)!==stable(existing.afterFlows))throw Error('Flow starts изменены после предыдущего запуска. Плагин не будет их перезаписывать.');
  if(changes.length===0 && starts.every(s=>nextFlows.some(x=>x.nodeId===s.nodeId)) && stable(page.flowStartingPoints)===stable(nextFlows)){
    send(Object.assign(ctx.report,{phase:'already-complete',ok:true,message:'Все 50 связей уже записаны; изменений нет.'}));return;
  }
  const backup={version:1,pageId:page.id,createdAt:new Date().toISOString(),beforeFlows:copy(page.flowStartingPoints),nodes:[]};
  if(!existing)page.setPluginData(BACKUP_KEY,JSON.stringify(backup));
  try {
    for(const c of changes) {
      const node=nodes.get(c.sourceNodeId);
      const item={id:node.id,before:copy(node.reactions),after:null};
      backup.nodes.push(item);
      page.setPluginData(BACKUP_KEY,JSON.stringify(backup));
      await node.setReactionsAsync(copy(node.reactions).concat([desired(c)]));
      item.after=copy(node.reactions);
      if(!item.after.some(r=>isDesired(r,c)))throw Error('Не подтверждена записанная связь: '+node.id);
      page.setPluginData(BACKUP_KEY,JSON.stringify(backup));
    }
    page.flowStartingPoints=nextFlows;
    backup.afterFlows=copy(page.flowStartingPoints);
    page.setPluginData(BACKUP_KEY,JSON.stringify(existing||backup));
    const verify=await check();
    if(!verify.report.ok || verify.report.alreadyWired!==50)throw Error('Повторная проверка не подтвердила 50/50.');
    if(!page.flowStartingPoints.some(x=>x.nodeId===PLAN.mainStartingFrameNodeId))throw Error('Стартовая точка не записана.');
    figma.viewport.scrollAndZoomIntoView([nodes.get(PLAN.mainStartingFrameNodeId)]);
    page.selection=[nodes.get(PLAN.mainStartingFrameNodeId)];
    send(Object.assign(verify.report,{phase:'applied',ok:true,written:changes.length,readBackVerified:50,
      actualFlowStarts:copy(page.flowStartingPoints),message:'50/50 связей подтверждены чтением API. Нажмите Present и пройдите маршруты; кликабельные тесты ещё не выполнены.'}));
  } catch(e) {
    try {await restoreBackup(page,existing||backup,false);}
    catch(rollback){throw Error(String(e.message||e)+'\n'+String(rollback.message||rollback)+'\nИспользуйте Undo/версию до запуска; сохраните отчёт.');}
    throw Error(String(e.message||e)+'\nИзменения этого запуска отменены.');
  }
}
figma.showUI(__html__,{width:620,height:680,themeColors:true});
figma.ui.onmessage=async msg=>{
  if(busy)return;
  busy=true;figma.ui.postMessage({type:'busy',busy:true});
  try {
    if(msg.type==='check')send((await check()).report);
    else if(msg.type==='apply')await apply();
    else if(msg.type==='restore'){
      const page=figma.currentPage;await restoreBackup(page,readBackup(page),true);
      send({phase:'restored',ok:true,message:'Исходные связи и flow starts восстановлены. Макеты не изменены.'});
    }
  }catch(e){send({phase:'error',ok:false,message:String(e.message||e)});}
  finally{busy=false;figma.ui.postMessage({type:'busy',busy:false});}
};
