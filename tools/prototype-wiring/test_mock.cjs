const fs=require('fs'),vm=require('vm'),assert=require('assert');
const dir=__dirname+'/';
const plan=JSON.parse(fs.readFileSync(dir+'connections.json'));
const code=fs.readFileSync(dir+'code.js','utf8');
const clone=x=>JSON.parse(JSON.stringify(x));
function env(opts={}){
 const reports=[],store={},map=new Map();let writes=0;
 const page={id:'0:1',type:'PAGE',name:'Page 1',parent:null,flowStartingPoints:[],getPluginData:k=>store[k]||'',setPluginData:(k,v)=>store[k]=v,selection:[]};
 const frame=(id,name)=>{if(map.has(id))return map.get(id);const n={id,type:'FRAME',name,parent:page,visible:true};map.set(id,n);return n;};
 for(const c of plan.connections)frame(c.destinationNodeId,c.destinationFrameName);
 for(const c of plan.connections){
  let f=[...map.values()].find(n=>n.name===c.sourceFrameName);
  if(!f)f=frame('source-'+c.sourceFrameName,c.sourceFrameName);
  const node={id:c.sourceNodeId,type:c.sourceNodeId.startsWith('I')?'TEXT':'FRAME',name:c.controlName,parent:f,visible:true,reactions:[],async setReactionsAsync(r){writes++;if(opts.failId===this.id&&writes===opts.failAt)throw Error('simulated write error');this.reactions=clone(r);}};
  map.set(node.id,node);
 }
 const figma={editorType:'figma',fileKey:'sPgIIOhd8e5rJjf5piu6sD',currentPage:page,
 getNodeByIdAsync:async id=>map.get(id)||null,showUI(){},ui:{postMessage(m){if(m.type==='report')reports.push(m.report);}},viewport:{scrollAndZoomIntoView(){}}};
 vm.runInNewContext(code,{figma,__html__:'',Date,Map,Set,JSON,Array,String,Error,RegExp});
 return {figma,page,map,reports,store,get writes(){return writes},async run(type){await figma.ui.onmessage({type});return reports[reports.length-1]}};
}
(async()=>{
 let e=env();let r=await e.run('check');assert.equal(r.ok,true);assert.equal(r.ready,50);assert.equal(e.writes,0);
 r=await e.run('apply');assert.equal(r.phase,'applied');assert.equal(r.readBackVerified,50);assert.equal(e.writes,50);assert.equal(e.page.flowStartingPoints[0].nodeId,'2:4727');assert.equal(e.page.flowStartingPoints.length,6);
 r=await e.run('apply');assert.equal(r.phase,'already-complete');assert.equal(e.writes,50);
 r=await e.run('restore');assert.equal(r.phase,'restored');assert.equal(e.page.flowStartingPoints.length,0);assert([...e.map.values()].every(n=>!n.reactions||n.reactions.length===0));
 e=env();e.map.delete(plan.connections[0].sourceNodeId);r=await e.run('apply');assert.equal(r.ok,false);assert.equal(e.writes,0);
 e=env();e.map.get(plan.connections[0].sourceNodeId).name='Select / Disabled';r=await e.run('apply');assert.equal(r.ok,false);assert.equal(e.writes,0);
 e=env();e.map.get(plan.connections[0].sourceNodeId).reactions=[{trigger:{type:'ON_CLICK'},actions:[{type:'BACK'}]}];r=await e.run('apply');assert.equal(r.ok,false);assert.equal(e.writes,0);
 e=env({failId:plan.connections[6].sourceNodeId,failAt:7});r=await e.run('apply');assert.equal(r.phase,'error');assert([...e.map.values()].every(n=>!n.reactions||n.reactions.length===0));assert.equal(e.page.flowStartingPoints.length,0);
 e=env();await e.run('apply');e.map.get(plan.connections[0].sourceNodeId).reactions=[{trigger:{type:'ON_CLICK'},actions:[{type:'BACK'}]}];r=await e.run('restore');assert.equal(r.phase,'error');assert(r.message.includes('изменены после запуска'));assert.equal(e.map.get(plan.connections[0].sourceNodeId).reactions[0].actions[0].type,'BACK');
 e=env();e.figma.fileKey='other';r=await e.run('apply');assert.equal(r.phase,'error');assert.equal(e.writes,0);
 e=env();e.map.get(plan.connections[0].destinationNodeId).name='Wrong destination';r=await e.run('apply');assert.equal(r.ok,false);assert.equal(e.writes,0);
 e=env();const other={trigger:{type:'ON_HOVER'},actions:[{type:'BACK'}]};e.map.get(plan.connections[0].sourceNodeId).reactions=[other];await e.run('apply');assert.deepEqual(e.map.get(plan.connections[0].sourceNodeId).reactions[0],other);
 console.log('PASS: 11 checks — 50 writes/readback, 6 starts, idempotency, restore, missing/disabled/conflicting/wrong-file/wrong-name blocks, failure rollback, external-edit protection, nonclick preservation. Live Figma execution NOT RUN.');
})().catch(e=>{console.error(e);process.exit(1)});
