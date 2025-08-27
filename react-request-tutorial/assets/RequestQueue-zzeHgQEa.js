var C=Object.defineProperty;var q=(i,s,n)=>s in i?C(i,s,{enumerable:!0,configurable:!0,writable:!0,value:n}):i[s]=n;var f=(i,s,n)=>q(i,typeof s!="symbol"?s+"":s,n);import{j as e,r as u}from"./index-Cnne2xOM.js";import{C as M}from"./ComponentTemplate-iqsAHbUA.js";import{a as P}from"./index-NIGUFBhG.js";class S{constructor(s=3){f(this,"queue",[]);f(this,"running",new Map);f(this,"maxConcurrency",3);f(this,"networkType","fast");f(this,"listeners",new Set);f(this,"taskIdCounter",0);f(this,"completedTasks",[]);f(this,"runningTasks",new Map);this.maxConcurrency=s,this.detectNetworkType()}detectNetworkType(){if(navigator.onLine){const s=navigator.connection;if(s){const n=s.effectiveType;n==="slow-2g"||n==="2g"?(this.networkType="slow",this.maxConcurrency=1):n==="3g"?(this.networkType="fast",this.maxConcurrency=3):(this.networkType="fast",this.maxConcurrency=5)}}else this.networkType="offline",this.maxConcurrency=0}addTask(s,n="GET",o={}){const{params:p,data:y,priority:m=5,retryCount:x=0}=o,h=`task_${++this.taskIdCounter}`,g={id:h,url:s,method:n,params:p,data:y,priority:m,status:"pending",retryCount:x};return this.insertByPriority(g),this.notifyListeners(),this.processQueue(),h}insertByPriority(s){let n=this.queue.length;for(let o=0;o<this.queue.length;o++)if(this.queue[o].priority>s.priority){n=o;break}this.queue.splice(n,0,s)}async processQueue(){if(this.networkType!=="offline")for(;this.running.size<this.maxConcurrency&&this.queue.length>0;){const s=this.queue.shift();if(!s)break;s.status="running",s.startTime=Date.now(),this.runningTasks.set(s.id,s),this.notifyListeners();const n=this.executeTask(s);this.running.set(s.id,n),n.finally(()=>{this.running.delete(s.id),this.runningTasks.delete(s.id),this.notifyListeners(),this.processQueue()})}}async executeTask(s){try{const n=await P({method:s.method,url:s.url,params:s.params,data:s.data,timeout:this.networkType==="slow"?1e4:5e3});s.status="completed",s.result=n.data,s.endTime=Date.now(),this.completedTasks.push(s),this.notifyListeners()}catch(n){s.status="failed",s.error=n.message,s.endTime=Date.now(),s.retryCount&&s.retryCount>0?(s.retryCount--,s.status="pending",s.startTime=void 0,s.endTime=void 0,s.error=void 0,setTimeout(()=>{this.insertByPriority(s),this.processQueue()},1e3)):(this.completedTasks.push(s),this.notifyListeners())}}setMaxConcurrency(s){this.maxConcurrency=s,this.processQueue()}setNetworkType(s){switch(this.networkType=s,s){case"slow":this.maxConcurrency=1;break;case"fast":this.maxConcurrency=5;break;case"offline":this.maxConcurrency=0;break}this.processQueue()}getStatus(){const s=[...this.queue,...Array.from(this.running.keys()).map(n=>this.getAllTasks().find(o=>o.id===n))];return{pending:this.queue.length,running:this.running.size,maxConcurrency:this.maxConcurrency,networkType:this.networkType,tasks:s}}getAllTasks(){return[...this.completedTasks,...this.queue,...Array.from(this.runningTasks.values())]}clear(){this.queue=[],this.completedTasks=[],this.running.clear(),this.runningTasks.clear(),this.notifyListeners()}pause(){this.maxConcurrency=0}resume(){this.detectNetworkType(),this.processQueue()}addListener(s){this.listeners.add(s)}removeListener(s){this.listeners.delete(s)}notifyListeners(){this.listeners.forEach(s=>s())}}const b=new S,D=()=>{const[i,s]=u.useState(b.getStatus()),[n,o]=u.useState([]),[p,y]=u.useState(3),[m,x]=u.useState("fast"),h=u.useCallback(()=>{const r=b.getStatus();s(r),o(b.getAllTasks().slice(-10))},[]);u.useEffect(()=>(b.addListener(h),h(),()=>{b.removeListener(h)}),[h]);const g=(r=5)=>{const c=Math.floor(Math.random()*100)+1;b.addTask(`https://jsonplaceholder.typicode.com/posts/${c}`,"GET",{priority:r,retryCount:1})},j=()=>{for(let r=0;r<5;r++)g(Math.floor(Math.random()*10)+1)},k=r=>{y(r),b.setMaxConcurrency(r)},t=r=>{x(r),b.setNetworkType(r)},l=()=>{b.clear()},d=r=>{switch(r){case"pending":return"text-yellow-600 bg-yellow-50";case"running":return"text-blue-600 bg-blue-50";case"completed":return"text-green-600 bg-green-50";case"failed":return"text-red-600 bg-red-50";default:return"text-gray-600 bg-gray-50"}},a=r=>{switch(r){case"pending":return"⏳";case"running":return"🔄";case"completed":return"✅";case"failed":return"❌";default:return"❓"}};return e.jsx("div",{className:"space-y-6",children:e.jsxs("div",{className:"bg-white p-6 rounded-lg border border-gray-200",children:[e.jsx("h3",{className:"text-lg font-semibold text-gray-800 mb-4",children:"基础请求队列"}),e.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-6",children:[e.jsxs("div",{className:"space-y-4",children:[e.jsxs("div",{className:"flex flex-wrap gap-2",children:[e.jsx("button",{onClick:()=>g(1),className:"px-3 py-2 bg-red-500 text-white rounded hover:bg-red-600 text-sm",children:"高优先级任务"}),e.jsx("button",{onClick:()=>g(5),className:"px-3 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 text-sm",children:"普通任务"}),e.jsx("button",{onClick:()=>g(9),className:"px-3 py-2 bg-gray-500 text-white rounded hover:bg-gray-600 text-sm",children:"低优先级任务"}),e.jsx("button",{onClick:j,className:"px-3 py-2 bg-purple-500 text-white rounded hover:bg-purple-600 text-sm",children:"批量添加"})]}),e.jsxs("div",{className:"space-y-3",children:[e.jsxs("div",{children:[e.jsxs("label",{className:"block text-sm font-medium text-gray-700 mb-1",children:["最大并发数: ",p]}),e.jsx("input",{type:"range",min:"1",max:"10",value:p,onChange:r=>k(Number(r.target.value)),className:"w-full"})]}),e.jsxs("div",{children:[e.jsx("label",{className:"block text-sm font-medium text-gray-700 mb-1",children:"网络类型"}),e.jsxs("select",{value:m,onChange:r=>t(r.target.value),className:"w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500",children:[e.jsx("option",{value:"fast",children:"快速网络 (并发5)"}),e.jsx("option",{value:"slow",children:"慢速网络 (并发1)"}),e.jsx("option",{value:"offline",children:"离线模式 (并发0)"})]})]})]}),e.jsxs("div",{className:"bg-gray-50 p-3 rounded text-sm",children:[e.jsx("h4",{className:"font-semibold mb-2",children:"队列状态"}),e.jsxs("p",{children:["等待中:"," ",e.jsx("span",{className:"font-mono text-yellow-600",children:i.pending})]}),e.jsxs("p",{children:["执行中:"," ",e.jsx("span",{className:"font-mono text-blue-600",children:i.running})]}),e.jsxs("p",{children:["最大并发:"," ",e.jsx("span",{className:"font-mono text-green-600",children:i.maxConcurrency})]}),e.jsxs("p",{children:["网络状态:"," ",e.jsx("span",{className:"font-mono text-purple-600",children:i.networkType})]})]}),e.jsx("button",{onClick:l,className:"px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600",children:"清空队列"}),e.jsxs("div",{className:"text-sm text-gray-500",children:[e.jsx("p",{children:"🚀 高优先级任务会优先执行"}),e.jsx("p",{children:"⚡ 并发数根据网络状态自动调整"}),e.jsx("p",{children:"🔄 失败任务会自动重试一次"})]})]}),e.jsxs("div",{className:"space-y-2",children:[e.jsx("h4",{className:"font-semibold text-gray-700",children:"任务列表"}),e.jsx("div",{className:"bg-gray-50 rounded-lg p-3 h-80 overflow-y-auto",children:n.length===0?e.jsx("p",{className:"text-gray-500 text-sm",children:"暂无任务"}):n.map(r=>{var c;return e.jsxs("div",{className:"mb-3 p-2 bg-white rounded border",children:[e.jsxs("div",{className:"flex items-center justify-between mb-1",children:[e.jsx("span",{className:"font-mono text-xs",children:r.id}),e.jsxs("div",{className:"flex items-center gap-2",children:[e.jsxs("span",{className:"text-xs px-1 py-0.5 bg-gray-200 rounded",children:["P",r.priority]}),e.jsxs("span",{className:`px-2 py-1 rounded text-xs ${d(r.status)}`,children:[a(r.status)," ",r.status]})]})]}),e.jsxs("div",{className:"text-xs text-gray-500 mb-1",children:[r.method," ",r.url.split("/").pop()]}),r.status==="completed"&&r.result&&e.jsxs("div",{className:"text-xs text-green-700",children:["标题: ",(c=r.result.title)==null?void 0:c.substring(0,25),"..."]}),r.status==="failed"&&e.jsxs("div",{className:"text-xs text-red-600",children:["错误: ",r.error]}),r.startTime&&e.jsx("div",{className:"text-xs text-gray-400 mt-1",children:r.endTime?`耗时: ${r.endTime-r.startTime}ms`:`开始: ${new Date(r.startTime).toLocaleTimeString()}`})]},r.id)})})]})]})]})})},R=()=>{const[i,s]=u.useState([]),[n,o]=u.useState(!1),[p,y]=u.useState(0),m=2,x=(t,l)=>{const d={id:`priority_${Date.now()}_${Math.random().toString(36).substr(2,9)}`,name:t,priority:l,status:"waiting",addedAt:Date.now()};s(a=>[...a,d].sort((c,w)=>c.status==="processing"&&w.status!=="processing"?-1:w.status==="processing"&&c.status!=="processing"||c.status==="completed"&&w.status!=="completed"?1:w.status==="completed"&&c.status!=="completed"?-1:c.priority-w.priority))},h=u.useCallback(()=>{if(n)return;const t=i.filter(a=>a.status==="waiting"),l=i.filter(a=>a.status==="processing");if(t.length===0||l.length>=m)return;const d=t[0];d&&(o(!0),s(a=>a.map(r=>r.id===d.id?{...r,status:"processing",startedAt:Date.now()}:r)),y(a=>a+1),setTimeout(()=>{s(a=>a.map(r=>r.id===d.id?{...r,status:"completed",completedAt:Date.now()}:r)),y(a=>a-1),o(!1)},2e3+Math.random()*3e3))},[i,n,m]);u.useEffect(()=>{const t=setInterval(()=>{h()},1e3);return()=>clearInterval(t)},[h]);const g=()=>{s([]),y(0)},j=(t,l)=>t==="processing"?"border-blue-500 bg-blue-50":t==="completed"?"border-green-500 bg-green-50":l<=2?"border-red-500 bg-red-50":l<=5?"border-yellow-500 bg-yellow-50":"border-gray-500 bg-gray-50",k=t=>t<=2?"🔴 紧急":t<=5?"🟡 普通":"🔵 低优先级";return e.jsx("div",{className:"space-y-6",children:e.jsxs("div",{className:"bg-white p-6 rounded-lg border border-gray-200",children:[e.jsx("h3",{className:"text-lg font-semibold text-gray-800 mb-4",children:"优先级队列演示"}),e.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-6",children:[e.jsxs("div",{className:"space-y-4",children:[e.jsxs("div",{className:"flex flex-wrap gap-2",children:[e.jsx("button",{onClick:()=>x("紧急任务",1),className:"px-3 py-2 bg-red-500 text-white rounded hover:bg-red-600 text-sm",children:"添加紧急任务"}),e.jsx("button",{onClick:()=>x("普通任务",5),className:"px-3 py-2 bg-yellow-500 text-white rounded hover:bg-yellow-600 text-sm",children:"添加普通任务"}),e.jsx("button",{onClick:()=>x("低优先级",9),className:"px-3 py-2 bg-gray-500 text-white rounded hover:bg-gray-600 text-sm",children:"添加低优先级"})]}),e.jsxs("div",{className:"bg-gray-50 p-3 rounded text-sm",children:[e.jsx("h4",{className:"font-semibold mb-2",children:"处理状态"}),e.jsxs("p",{children:["等待任务:"," ",e.jsx("span",{className:"font-mono text-yellow-600",children:i.filter(t=>t.status==="waiting").length})]}),e.jsxs("p",{children:["处理中:"," ",e.jsx("span",{className:"font-mono text-blue-600",children:p})]}),e.jsxs("p",{children:["已完成:"," ",e.jsx("span",{className:"font-mono text-green-600",children:i.filter(t=>t.status==="completed").length})]}),e.jsxs("p",{children:["最大并发:"," ",e.jsx("span",{className:"font-mono text-purple-600",children:m})]})]}),e.jsx("button",{onClick:g,className:"px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600",children:"清空任务"}),e.jsxs("div",{className:"text-sm text-gray-500",children:[e.jsx("p",{children:"🔴 紧急任务优先级最高"}),e.jsx("p",{children:"🟡 普通任务按添加顺序处理"}),e.jsx("p",{children:"🔵 低优先级任务最后处理"}),e.jsx("p",{children:"⚡ 最多同时处理2个任务"})]})]}),e.jsxs("div",{className:"space-y-2",children:[e.jsx("h4",{className:"font-semibold text-gray-700",children:"任务队列"}),e.jsx("div",{className:"bg-gray-50 rounded-lg p-3 h-80 overflow-y-auto",children:i.length===0?e.jsx("p",{className:"text-gray-500 text-sm",children:"暂无任务"}):i.map(t=>e.jsxs("div",{className:`mb-2 p-3 rounded border-2 ${j(t.status,t.priority)}`,children:[e.jsxs("div",{className:"flex items-center justify-between mb-1",children:[e.jsx("span",{className:"font-semibold text-sm",children:t.name}),e.jsx("span",{className:"text-xs",children:k(t.priority)})]}),e.jsxs("div",{className:"text-xs text-gray-600 mb-1",children:["状态:"," ",t.status==="waiting"?"等待中":t.status==="processing"?"处理中...":"已完成"]}),e.jsxs("div",{className:"text-xs text-gray-500",children:[t.status==="waiting"&&`等待时间: ${Math.floor((Date.now()-t.addedAt)/1e3)}s`,t.status==="processing"&&t.startedAt&&`处理中: ${Math.floor((Date.now()-t.startedAt)/1e3)}s`,t.status==="completed"&&t.startedAt&&t.completedAt&&`耗时: ${Math.floor((t.completedAt-t.startedAt)/1e3)}s`]})]},t.id))})]})]})]})})},Q=()=>{const[i,s]=u.useState({type:"fast",speed:10,latency:50,concurrency:5}),[n,o]=u.useState([]),[p,y]=u.useState({queued:0,loading:0,completed:0,failed:0}),m=t=>{let l,d,a;switch(t){case"slow":l=1,d=500,a=1;break;case"fast":l=50,d=20,a=8;break;case"offline":l=0,d=0,a=0;break}s({type:t,speed:l,latency:d,concurrency:a})},x=(t=100)=>{const l={id:`req_${Date.now()}_${Math.random().toString(36).substr(2,5)}`,status:"queued",startTime:Date.now(),size:t};o(d=>[l,...d.slice(0,19)])};u.useEffect(()=>{const l=setInterval(async()=>{const d=n.filter(c=>c.status==="queued"),a=n.filter(c=>c.status==="loading");if(i.type==="offline"||a.length>=i.concurrency)return;d.slice(0,i.concurrency-a.length).forEach(c=>{o(T=>T.map(v=>v.id===c.id?{...v,status:"loading"}:v));const w=Math.max(1e3,c.size/i.speed*100+i.latency);setTimeout(()=>{const T=Math.random()>.1;o(v=>v.map(N=>N.id===c.id?{...N,status:T?"success":"error",endTime:Date.now()}:N))},w)})},500);return()=>clearInterval(l)},[n,i]),u.useEffect(()=>{y({queued:n.filter(t=>t.status==="queued").length,loading:n.filter(t=>t.status==="loading").length,completed:n.filter(t=>t.status==="success").length,failed:n.filter(t=>t.status==="error").length})},[n]);const h=()=>{o([])},g=()=>{for(let t=0;t<10;t++)x(Math.floor(Math.random()*500)+50)},j=t=>{switch(t){case"queued":return"text-yellow-600 bg-yellow-50";case"loading":return"text-blue-600 bg-blue-50";case"success":return"text-green-600 bg-green-50";case"error":return"text-red-600 bg-red-50";default:return"text-gray-600 bg-gray-50"}},k=t=>{switch(t){case"fast":return"text-green-600 bg-green-50";case"slow":return"text-yellow-600 bg-yellow-50";case"offline":return"text-red-600 bg-red-50";default:return"text-gray-600 bg-gray-50"}};return e.jsx("div",{className:"space-y-6",children:e.jsxs("div",{className:"bg-white p-6 rounded-lg border border-gray-200",children:[e.jsx("h3",{className:"text-lg font-semibold text-gray-800 mb-4",children:"网络自适应队列"}),e.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-6",children:[e.jsxs("div",{className:"space-y-4",children:[e.jsxs("div",{className:"space-y-2",children:[e.jsx("label",{className:"block text-sm font-medium text-gray-700",children:"网络状态模拟"}),e.jsxs("div",{className:"flex gap-2",children:[e.jsx("button",{onClick:()=>m("fast"),className:`px-3 py-2 rounded text-sm ${i.type==="fast"?"bg-green-500 text-white":"bg-gray-200 text-gray-700 hover:bg-gray-300"}`,children:"快速网络"}),e.jsx("button",{onClick:()=>m("slow"),className:`px-3 py-2 rounded text-sm ${i.type==="slow"?"bg-yellow-500 text-white":"bg-gray-200 text-gray-700 hover:bg-gray-300"}`,children:"慢速网络"}),e.jsx("button",{onClick:()=>m("offline"),className:`px-3 py-2 rounded text-sm ${i.type==="offline"?"bg-red-500 text-white":"bg-gray-200 text-gray-700 hover:bg-gray-300"}`,children:"离线模式"})]})]}),e.jsxs("div",{className:`p-3 rounded border ${k(i.type)}`,children:[e.jsx("h4",{className:"font-semibold mb-2",children:"当前网络状态"}),e.jsxs("p",{children:["类型: ",i.type]}),e.jsxs("p",{children:["速度: ",i.speed," Mbps"]}),e.jsxs("p",{children:["延迟: ",i.latency," ms"]}),e.jsxs("p",{children:["并发数: ",i.concurrency]})]}),e.jsxs("div",{className:"flex gap-2",children:[e.jsx("button",{onClick:()=>x(),className:"px-3 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 text-sm",children:"添加请求"}),e.jsx("button",{onClick:g,className:"px-3 py-2 bg-purple-500 text-white rounded hover:bg-purple-600 text-sm",children:"批量添加"}),e.jsx("button",{onClick:h,className:"px-3 py-2 bg-gray-500 text-white rounded hover:bg-gray-600 text-sm",children:"清空"})]}),e.jsxs("div",{className:"bg-gray-50 p-3 rounded text-sm",children:[e.jsx("h4",{className:"font-semibold mb-2",children:"队列统计"}),e.jsxs("p",{children:["排队中:"," ",e.jsx("span",{className:"font-mono text-yellow-600",children:p.queued})]}),e.jsxs("p",{children:["处理中:"," ",e.jsx("span",{className:"font-mono text-blue-600",children:p.loading})]}),e.jsxs("p",{children:["已完成:"," ",e.jsx("span",{className:"font-mono text-green-600",children:p.completed})]}),e.jsxs("p",{children:["失败:"," ",e.jsx("span",{className:"font-mono text-red-600",children:p.failed})]})]}),e.jsxs("div",{className:"text-sm text-gray-500",children:[e.jsx("p",{children:"🌐 并发数根据网络状态自动调整"}),e.jsx("p",{children:"⚡ 快速网络支持更多并发请求"}),e.jsx("p",{children:"🐌 慢速网络限制并发避免拥塞"}),e.jsx("p",{children:"📴 离线模式暂停所有请求"})]})]}),e.jsxs("div",{className:"space-y-2",children:[e.jsx("h4",{className:"font-semibold text-gray-700",children:"请求列表"}),e.jsx("div",{className:"bg-gray-50 rounded-lg p-3 h-80 overflow-y-auto",children:n.length===0?e.jsx("p",{className:"text-gray-500 text-sm",children:"暂无请求"}):n.map(t=>e.jsxs("div",{className:"mb-2 p-2 bg-white rounded border",children:[e.jsxs("div",{className:"flex items-center justify-between mb-1",children:[e.jsx("span",{className:"font-mono text-xs",children:t.id.split("_")[1]}),e.jsx("span",{className:`px-2 py-1 rounded text-xs ${j(t.status)}`,children:t.status})]}),e.jsxs("div",{className:"text-xs text-gray-500 mb-1",children:["大小: ",t.size,"KB"]}),e.jsxs("div",{className:"text-xs text-gray-400",children:[t.status==="loading"&&`处理中: ${Math.floor((Date.now()-t.startTime)/1e3)}s`,t.endTime&&`耗时: ${Math.floor((t.endTime-t.startTime)/1e3)}s`,t.status==="queued"&&`等待: ${Math.floor((Date.now()-t.startTime)/1e3)}s`]})]},t.id))})]})]})]})})},B=()=>e.jsx(M,{title:"请求队列",description:"学习如何实现请求队列管理，通过控制并发数量、优先级调度和网络自适应，优化应用的网络请求性能和用户体验。",overview:e.jsx("div",{className:"space-y-4",children:e.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-6",children:[e.jsxs("div",{className:"bg-blue-50 p-4 rounded-lg border border-blue-200",children:[e.jsx("h3",{className:"font-semibold text-blue-800 mb-2",children:"🎯 核心概念"}),e.jsxs("ul",{className:"text-sm text-blue-700 space-y-1",children:[e.jsx("li",{children:"• 并发控制和队列管理"}),e.jsx("li",{children:"• 优先级调度和任务排序"}),e.jsx("li",{children:"• 网络状态自适应并发数"}),e.jsx("li",{children:"• 请求重试和错误处理"})]})]}),e.jsxs("div",{className:"bg-green-50 p-4 rounded-lg border border-green-200",children:[e.jsx("h3",{className:"font-semibold text-green-800 mb-2",children:"✨ 主要优势"}),e.jsxs("ul",{className:"text-sm text-green-700 space-y-1",children:[e.jsx("li",{children:"• 避免请求过载和服务器压力"}),e.jsx("li",{children:"• 提升关键请求的响应速度"}),e.jsx("li",{children:"• 根据网络状况优化性能"}),e.jsx("li",{children:"• 提供更好的用户体验"})]})]}),e.jsxs("div",{className:"bg-yellow-50 p-4 rounded-lg border border-yellow-200",children:[e.jsx("h3",{className:"font-semibold text-yellow-800 mb-2",children:"🎪 适用场景"}),e.jsxs("ul",{className:"text-sm text-yellow-700 space-y-1",children:[e.jsx("li",{children:"• 大量数据请求的批处理"}),e.jsx("li",{children:"• 图片和文件的并发下载"}),e.jsx("li",{children:"• API 调用频率限制"}),e.jsx("li",{children:"• 移动端弱网环境优化"})]})]}),e.jsxs("div",{className:"bg-red-50 p-4 rounded-lg border border-red-200",children:[e.jsx("h3",{className:"font-semibold text-red-800 mb-2",children:"⚠️ 注意事项"}),e.jsxs("ul",{className:"text-sm text-red-700 space-y-1",children:[e.jsx("li",{children:"• 合理设置并发数避免过载"}),e.jsx("li",{children:"• 优先级设计要符合业务需求"}),e.jsx("li",{children:"• 考虑请求超时和重试策略"}),e.jsx("li",{children:"• 监控队列状态防止积压"})]})]})]})}),examples:[{title:"基础请求队列",component:e.jsx(D,{}),description:"演示基础的请求队列管理，包括并发控制、优先级调度和网络状态自适应。",codeExample:{title:"基础请求队列管理器实现",code:`// 请求队列管理器实现
class RequestQueueManager {
  private queue: RequestTask[] = [];
  private running: Map<string, Promise<any>> = new Map();
  private maxConcurrency: number = 3;
  private networkType: NetworkType = "fast";
  private listeners: Set<() => void> = new Set();
  private taskIdCounter = 0;

  constructor(maxConcurrency: number = 3) {
    this.maxConcurrency = maxConcurrency;
    this.detectNetworkType();
  }

  // 添加任务到队列
  addTask(
    url: string,
    method: string = "GET",
    options: {
      params?: any;
      data?: any;
      priority?: number;
      retryCount?: number;
    } = {}
  ): string {
    const task: RequestTask = {
      id: \`task-\${++this.taskIdCounter}\`,
      url,
      method,
      params: options.params,
      data: options.data,
      priority: options.priority || 5,
      status: "pending",
      retryCount: options.retryCount || 0,
    };

    this.insertByPriority(task);
    this.processQueue();
    this.notifyListeners();
    return task.id;
  }

  // 按优先级插入任务
  private insertByPriority(task: RequestTask) {
    let inserted = false;
    for (let i = 0; i < this.queue.length; i++) {
      if (task.priority < this.queue[i].priority) {
        this.queue.splice(i, 0, task);
        inserted = true;
        break;
      }
    }
    if (!inserted) {
      this.queue.push(task);
    }
  }

  // 处理队列
  private async processQueue() {
    while (this.queue.length > 0 && this.running.size < this.maxConcurrency) {
      const task = this.queue.shift()!;
      const promise = this.executeTask(task);
      this.running.set(task.id, promise);
      
      promise.finally(() => {
        this.running.delete(task.id);
        this.processQueue();
        this.notifyListeners();
      });
    }
  }

  // 执行任务
  private async executeTask(task: RequestTask): Promise<void> {
    task.status = "running";
    task.startTime = Date.now();
    this.notifyListeners();

    try {
      const response = await axios({
        url: task.url,
        method: task.method as any,
        params: task.params,
        data: task.data,
        timeout: this.networkType === "slow" ? 10000 : 5000,
      });
      
      task.result = response.data;
      task.status = "completed";
    } catch (error: any) {
      task.error = error.message;
      task.status = "failed";
      
      // 重试逻辑
      if (task.retryCount! < 1) {
        task.retryCount!++;
        task.status = "pending";
        this.insertByPriority(task);
      }
    } finally {
      task.endTime = Date.now();
      this.notifyListeners();
    }
  }

  // 设置网络类型
  setNetworkType(type: NetworkType) {
    this.networkType = type;
    
    // 根据网络类型调整并发数
    switch (type) {
      case "slow":
        this.maxConcurrency = 1;
        break;
      case "fast":
        this.maxConcurrency = 5;
        break;
      case "offline":
        this.maxConcurrency = 0;
        break;
    }
    
    this.notifyListeners();
  }
}`,language:"typescript",highlights:[3,4,5,6,7,8,12,13,17,28,29,39,40,41,45,46,58,59,62,63,66,67,73,74,77,82,83,89,90,95,96,101,102,103,104,105,106,107,108,109,110,111,112]},observationPoints:["调整并发数滑块，观察同时处理的请求数量变化","添加不同优先级任务，观察高优先级任务优先执行","切换网络类型，观察并发数自动调整","失败的任务会自动重试一次"],keyPoints:["并发数控制避免请求过载","优先级队列确保重要任务优先处理","网络状态自适应调整并发策略","任务状态跟踪和执行时间统计"],commonTraps:["并发数设置过高导致服务器压力","优先级设计不合理影响用户体验","没有考虑网络状况的动态调整","队列积压导致内存使用过高"],solutions:["根据服务器能力和网络状况设置合理并发数","基于业务重要性设计优先级策略","实现网络状态检测和自适应调整","设置队列大小限制和清理机制"],importantTips:["慢速网络建议并发数为1，快速网络可以设置为5-8","优先级数字越小表示优先级越高","队列会自动处理任务，无需手动触发"]},{title:"优先级队列演示",component:e.jsx(R,{}),description:"展示优先级队列的工作原理，高优先级任务会优先得到处理资源。",codeExample:{title:"优先级队列管理器实现",code:`// 优先级队列的核心实现
class PriorityQueueManager {
  private queue: RequestTask[] = [];
  private running: Map<string, RequestTask> = new Map();
  private maxConcurrency: number = 2;

  // 按优先级插入任务（数字越小优先级越高）
  private insertByPriority(task: RequestTask) {
    let inserted = false;
    for (let i = 0; i < this.queue.length; i++) {
      if (task.priority < this.queue[i].priority) {
        this.queue.splice(i, 0, task);
        inserted = true;
        break;
      }
    }
    if (!inserted) {
      this.queue.push(task);
    }
  }

  // 添加任务到优先级队列
  addTask(url: string, priority: number = 5): string {
    const task: RequestTask = {
      id: \`priority-task-\${Date.now()}\`,
      url,
      method: "GET",
      priority,
      status: "pending",
      timestamp: Date.now(),
    };

    this.insertByPriority(task);
    this.processQueue();
    return task.id;
  }

  // 处理队列 - 总是选择优先级最高的任务
  private async processQueue() {
    while (this.queue.length > 0 && this.running.size < this.maxConcurrency) {
      const task = this.queue.shift()!; // 取出优先级最高的任务
      this.running.set(task.id, task);
      
      task.status = "running";
      task.startTime = Date.now();
      
      // 模拟请求执行
      this.executeTask(task).finally(() => {
        this.running.delete(task.id);
        this.processQueue(); // 继续处理队列
      });
    }
  }

  // 执行任务
  private async executeTask(task: RequestTask): Promise<void> {
    try {
      // 模拟网络请求
      await new Promise(resolve => {
        setTimeout(resolve, Math.random() * 2000 + 1000);
      });
      
      task.status = "completed";
      task.endTime = Date.now();
    } catch (error) {
      task.status = "failed";
      task.error = "Request failed";
    }
  }

  // 获取队列状态
  getQueueStatus() {
    return {
      pending: this.queue.length,
      running: this.running.size,
      queue: [...this.queue].sort((a, b) => a.priority - b.priority),
      runningTasks: Array.from(this.running.values()),
    };
  }
}`,language:"typescript",highlights:[8,10,18,20,23,25,32,34,38,40,53,55,67,69]},observationPoints:["添加不同优先级任务，观察处理顺序","紧急任务会立即获得处理机会","同时最多处理2个任务，体现并发控制","任务处理时间和等待时间的统计显示"],keyPoints:["优先级队列自动排序任务","高优先级任务优先获得处理资源","并发限制确保系统稳定性","实时状态更新和时间统计"],commonTraps:["低优先级任务可能长时间等待","优先级设置不当导致饥饿问题","并发控制不当影响处理效率","任务状态管理复杂度增加"],solutions:["设置优先级老化机制避免饥饿","合理划分优先级等级","动态调整并发数适应负载","使用状态机简化任务管理"],importantTips:["紧急任务适用于用户交互相关的请求","普通任务适用于数据加载和更新","低优先级任务适用于预加载和缓存"]},{title:"网络自适应队列",component:e.jsx(Q,{}),description:"根据网络状况自动调整并发策略，在不同网络环境下优化请求处理。",codeExample:{title:"网络自适应队列管理器实现",code:`// 网络自适应队列管理器
class NetworkAdaptiveQueueManager {
  private queue: RequestTask[] = [];
  private running: Map<string, Promise<any>> = new Map();
  private maxConcurrency: number = 3;
  private networkType: NetworkType = "fast";
  private listeners: Set<() => void> = new Set();

  constructor() {
    this.detectNetworkType();
    this.setupNetworkListener();
  }

  // 检测网络类型
  private detectNetworkType() {
    if (!navigator.onLine) {
      this.networkType = "offline";
      return;
    }

    const connection = (navigator as any).connection;
    if (connection) {
      const effectiveType = connection.effectiveType;
      if (effectiveType === "slow-2g" || effectiveType === "2g") {
        this.networkType = "slow";
      } else if (effectiveType === "3g") {
        this.networkType = "fast";
      } else {
        this.networkType = "fast";
      }
    }
    
    this.adjustConcurrencyByNetwork();
  }

  // 根据网络类型调整并发数
  private adjustConcurrencyByNetwork() {
    switch (this.networkType) {
      case "slow":
        this.maxConcurrency = 1; // 慢速网络限制并发
        break;
      case "fast":
        this.maxConcurrency = 5; // 快速网络增加并发
        break;
      case "offline":
        this.maxConcurrency = 0; // 离线模式暂停处理
        break;
    }
    
    this.notifyListeners();
  }

  // 设置网络监听器
  private setupNetworkListener() {
    window.addEventListener("online", () => {
      this.detectNetworkType();
      this.processQueue(); // 恢复处理队列
    });
    
    window.addEventListener("offline", () => {
      this.networkType = "offline";
      this.adjustConcurrencyByNetwork();
    });
  }

  // 添加任务（考虑网络状况）
  addTask(url: string, priority: number = 5): string {
    const task: RequestTask = {
      id: \`network-task-\${Date.now()}\`,
      url,
      method: "GET",
      priority,
      status: "pending",
      timestamp: Date.now(),
    };

    if (this.networkType === "offline") {
      task.status = "pending";
      // 离线时任务进入队列等待
    }

    this.queue.push(task);
    this.processQueue();
    return task.id;
  }

  // 处理队列（网络自适应）
  private async processQueue() {
    if (this.networkType === "offline") {
      return; // 离线时不处理队列
    }

    while (this.queue.length > 0 && this.running.size < this.maxConcurrency) {
      const task = this.queue.shift()!;
      const promise = this.executeTask(task);
      this.running.set(task.id, promise);
      
      promise.finally(() => {
        this.running.delete(task.id);
        this.processQueue();
      });
    }
  }

  // 执行任务（根据网络调整超时）
  private async executeTask(task: RequestTask): Promise<void> {
    task.status = "running";
    task.startTime = Date.now();
    
    const timeout = this.networkType === "slow" ? 10000 : 5000;
    
    try {
      await new Promise((resolve, reject) => {
        const timer = setTimeout(() => {
          resolve(\`Response for \${task.url}\`);
        }, Math.random() * 2000 + 1000);
        
        // 网络超时处理
        setTimeout(() => {
          clearTimeout(timer);
          reject(new Error("Network timeout"));
        }, timeout);
      });
      
      task.status = "completed";
    } catch (error: any) {
      task.status = "failed";
      task.error = error.message;
    } finally {
      task.endTime = Date.now();
      this.notifyListeners();
    }
  }
}`,language:"typescript",highlights:[14,16,22,24,35,37,51,53,62,64,79,81,95,97]},observationPoints:["切换网络状态，观察并发数和处理策略变化","快速网络支持更多并发请求","慢速网络限制并发避免拥塞","离线模式暂停所有请求处理"],keyPoints:["网络状态检测和分类","自适应并发数调整策略","请求大小和处理时间估算","网络状况变化的实时响应"],commonTraps:["网络检测不准确导致策略错误","并发数调整过于频繁影响稳定性","没有考虑请求大小的影响","离线状态处理不当"],solutions:["使用多种指标综合判断网络状况","设置调整阈值避免频繁变化","根据请求大小动态调整处理时间","实现离线队列和重连机制"],importantTips:["网络自适应特别适用于移动端应用","可以结合用户设置提供手动控制选项","监控网络状况变化有助于用户体验优化"]}],tutorial:{concepts:["**并发控制**：限制同时执行的请求数量，避免系统过载","**优先级队列**：根据任务重要性排序，确保关键任务优先处理","**网络自适应**：根据网络状况动态调整并发策略","**任务调度**：管理任务的生命周期和执行顺序","**重试机制**：处理失败任务的重新执行策略","**状态管理**：跟踪任务状态和队列统计信息"],steps:["设计请求任务的数据结构和状态定义","实现优先级队列的插入和排序算法","建立并发控制机制，限制同时执行的任务数","集成网络状态检测和自适应调整逻辑","实现任务调度器，自动处理队列中的任务","添加重试机制和错误处理策略","提供队列状态监控和统计功能"],tips:["并发数设置要考虑服务器能力和网络带宽","优先级设计要基于业务需求和用户体验","网络检测可以结合多种指标提高准确性","任务超时时间要根据网络状况动态调整","队列大小要设置上限避免内存溢出","提供手动控制选项增强用户体验"]},interview:{questions:[{question:"什么是请求队列？为什么需要控制并发数？",answer:"请求队列是管理和调度网络请求的机制，通过队列数据结构组织待处理的请求。需要控制并发数的原因：1) **服务器保护**：避免大量并发请求导致服务器过载；2) **网络优化**：防止网络拥塞影响请求质量；3) **资源管理**：合理分配客户端的网络和计算资源；4) **用户体验**：确保关键请求能够及时响应。"},{question:"如何实现优先级队列？优先级如何设计？",answer:"优先级队列实现：1) **数据结构**：使用堆或有序数组存储任务；2) **插入策略**：新任务按优先级插入到合适位置；3) **调度算法**：总是选择优先级最高的任务执行。优先级设计原则：数字越小优先级越高，1-紧急（用户交互），2-5-普通（数据加载），6-10-低优先级（预加载）。还要考虑优先级老化避免饥饿问题。"},{question:"如何根据网络状况调整并发策略？",answer:"网络自适应策略：1) **状态检测**：通过 navigator.connection API 获取网络类型和速度；2) **分类标准**：slow-2g/2g为慢速(并发1)，3g为中速(并发3)，4g/wifi为快速(并发5-8)；3) **动态调整**：监听网络变化事件，实时调整并发数；4) **降级处理**：离线时暂停队列，恢复时重新开始。还要考虑请求大小、延迟等因素。"},{question:"请求队列如何处理失败和重试？",answer:"失败处理策略：1) **错误分类**：区分网络错误、服务器错误、超时等；2) **重试策略**：指数退避、固定间隔或立即重试；3) **重试限制**：设置最大重试次数避免无限循环；4) **优先级调整**：失败任务可以降低优先级或移到队列末尾；5) **错误上报**：记录失败原因用于监控和调试。重试时要考虑网络状况和错误类型。"}],keyPoints:["并发控制是请求队列的核心功能","优先级设计要基于业务需求和用户体验","网络自适应能显著提升不同环境下的性能","任务调度算法影响整体处理效率","重试机制要平衡成功率和资源消耗","队列状态监控有助于性能优化和问题诊断"]},bestPractices:{dos:["根据服务器能力设置合理的并发数限制","基于业务重要性设计优先级策略","实现网络状态检测和自适应调整","为不同类型的请求设置不同的超时时间","实现智能重试机制处理失败请求","提供队列状态监控和统计功能","设置队列大小上限防止内存溢出","考虑用户体验提供手动控制选项"],donts:["不要设置过高的并发数导致服务器压力","不要忽略优先级设计导致重要任务延迟","不要在所有网络环境下使用相同策略","不要让队列无限增长消耗内存","不要对所有错误都进行重试","不要忽略任务超时和清理机制","不要在生产环境中忽略性能监控","不要让低优先级任务永远得不到执行"],patterns:["**生产者-消费者模式**：任务生产和消费的解耦","**优先级队列模式**：基于重要性的任务调度","**限流模式**：控制请求频率和并发数","**断路器模式**：处理服务不可用的情况","**重试模式**：智能处理失败请求","**适配器模式**：适应不同网络环境","**观察者模式**：队列状态变化通知"]}});export{B as default};
