var w=Object.defineProperty;var S=(a,t,n)=>t in a?w(a,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):a[t]=n;var c=(a,t,n)=>S(a,typeof t!="symbol"?t+"":t,n);import{r as d,j as e}from"./index-C7SuDyTR.js";import{C as A}from"./ComponentTemplate-BzrYXZsv.js";class Q{constructor(t={}){c(this,"config");c(this,"runningTasks",new Map);c(this,"pendingQueue",[]);c(this,"completedTasks",[]);c(this,"listeners",new Set);c(this,"abortControllers",new Map);c(this,"stats",{total:0,completed:0,failed:0,cancelled:0,avgDuration:0,maxConcurrentReached:0});this.config={maxConcurrent:3,queueSize:50,timeout:1e4,retryDelay:1e3,priorityEnabled:!0,fairScheduling:!1,...t}}async addTask(t,n,i=5,r,o=2){const u={id:this.generateId(),url:t,options:n,priority:i,timeout:r||this.config.timeout,retryCount:0,maxRetries:o,status:"pending"};if(this.pendingQueue.length>=this.config.queueSize)throw new Error("Queue is full");return this.pendingQueue.push(u),this.stats.total++,this.config.priorityEnabled&&this.sortQueue(),this.notifyListeners(),this.processQueue(),u.id}async addBatchTasks(t){const n=[];for(const i of t)try{const r=await this.addTask(i.url,i.options,i.priority,i.timeout,i.maxRetries);n.push(r)}catch(r){console.warn("Failed to add task:",r)}return n}cancelTask(t){if(this.runningTasks.get(t)){const r=this.abortControllers.get(t);if(r)return r.abort(),!0}const i=this.pendingQueue.findIndex(r=>r.id===t);if(i!==-1){const r=this.pendingQueue[i];return r.status="cancelled",this.pendingQueue.splice(i,1),this.completedTasks.push(r),this.stats.cancelled++,this.notifyListeners(),!0}return!1}cancelAll(){for(const[,t]of this.abortControllers.entries())t.abort();for(const t of this.pendingQueue)t.status="cancelled",this.completedTasks.push(t),this.stats.cancelled++;this.pendingQueue=[],this.notifyListeners()}pause(){}resume(){this.processQueue()}getTaskStatus(t){const n=this.runningTasks.get(t);if(n)return n;const i=this.pendingQueue.find(o=>o.id===t);return i||this.completedTasks.find(o=>o.id===t)||null}getAllTasks(){return{running:Array.from(this.runningTasks.values()),pending:[...this.pendingQueue],completed:[...this.completedTasks]}}getStats(){const t=this.completedTasks.filter(i=>i.duration!==void 0),n=t.length>0?Math.round(t.reduce((i,r)=>i+(r.duration||0),0)/t.length):0;return{...this.stats,running:this.runningTasks.size,pending:this.pendingQueue.length,avgDuration:n,maxConcurrentReached:Math.max(this.stats.maxConcurrentReached,this.runningTasks.size)}}resetStats(){this.stats={total:0,completed:0,failed:0,cancelled:0,avgDuration:0,maxConcurrentReached:0},this.completedTasks=[]}updateConfig(t){this.config={...this.config,...t},t.priorityEnabled!==void 0&&this.sortQueue()}addListener(t){this.listeners.add(t)}removeListener(t){this.listeners.delete(t)}destroy(){this.cancelAll(),this.listeners.clear()}async processQueue(){for(;this.pendingQueue.length>0&&this.runningTasks.size<this.config.maxConcurrent;){const t=this.pendingQueue.shift();await this.executeTask(t)}}async executeTask(t){t.status="running",t.startTime=Date.now(),this.runningTasks.set(t.id,t),this.stats.maxConcurrentReached=Math.max(this.stats.maxConcurrentReached,this.runningTasks.size);const n=new AbortController;this.abortControllers.set(t.id,n),this.notifyListeners();try{const i=setTimeout(()=>{n.abort()},t.timeout);if(await new Promise(u=>setTimeout(u,Math.random()*2e3+500)),n.signal.aborted)throw new Error("Task was cancelled");const r=await fetch(t.url,{...t.options,signal:n.signal});if(clearTimeout(i),!r.ok)throw new Error(`HTTP ${r.status}: ${r.statusText}`);const o=await r.json();t.status="success",t.result=o,t.endTime=Date.now(),t.duration=t.endTime-t.startTime,this.stats.completed++}catch(i){if(t.retryCount<t.maxRetries&&!n.signal.aborted){t.retryCount++,t.status="pending",this.runningTasks.delete(t.id),this.abortControllers.delete(t.id),setTimeout(()=>{this.pendingQueue.unshift(t),this.processQueue()},this.config.retryDelay*Math.pow(2,t.retryCount-1));return}t.status=n.signal.aborted?"cancelled":"error",t.error=i,t.endTime=Date.now(),t.duration=t.endTime-t.startTime,t.status==="error"?this.stats.failed++:this.stats.cancelled++}finally{this.runningTasks.delete(t.id),this.abortControllers.delete(t.id),this.completedTasks.push(t),this.completedTasks.length>100&&this.completedTasks.splice(0,this.completedTasks.length-100),this.notifyListeners(),this.processQueue()}}sortQueue(){this.config.fairScheduling?this.pendingQueue.sort((t,n)=>t.priority!==n.priority?n.priority-t.priority:(t.startTime||0)-(n.startTime||0)):this.pendingQueue.sort((t,n)=>t.priority!==n.priority?n.priority-t.priority:(t.startTime||0)-(n.startTime||0))}generateId(){return`task_${Date.now()}_${Math.random().toString(36).substr(2,9)}`}notifyListeners(){const t=[...Array.from(this.runningTasks.values()),...this.pendingQueue,...this.completedTasks];this.listeners.forEach(n=>{try{n(t)}catch(i){console.error("Error in task listener:",i)}})}}const z=()=>{const[a]=d.useState(()=>new Q);d.useState([]);const[t,n]=d.useState({maxConcurrent:3,queueSize:50,timeout:1e4,retryDelay:1e3,priorityEnabled:!0,fairScheduling:!1}),[i,r]=d.useState(a.getStats()),[o,u]=d.useState(!1),m=d.useRef(null),[l,v]=d.useState({running:[],pending:[],completed:[]}),g=()=>{const s=a.getAllTasks();v(s),r(a.getStats())};d.useEffect(()=>(a.addListener(g),g(),()=>{a.removeListener(g),a.destroy(),m.current&&clearInterval(m.current)}),[a]);const h=(s,x)=>{const p={...t,[s]:x};n(p),a.updateConfig(p)},b=async()=>{try{const s=["https://jsonplaceholder.typicode.com/posts/1","https://jsonplaceholder.typicode.com/posts/2","https://jsonplaceholder.typicode.com/posts/3","https://jsonplaceholder.typicode.com/users/1","https://jsonplaceholder.typicode.com/users/2","https://jsonplaceholder.typicode.com/albums/1","https://jsonplaceholder.typicode.com/albums/2","https://jsonplaceholder.typicode.com/photos/1"],x=s[Math.floor(Math.random()*s.length)],p=Math.floor(Math.random()*10)+1;await a.addTask(x,{},p)}catch(s){console.error("添加任务失败:",s)}},N=async()=>{try{const s=Array.from({length:5},(x,p)=>({url:`https://jsonplaceholder.typicode.com/posts/${p+1}`,priority:Math.floor(Math.random()*10)+1}));await a.addBatchTasks(s)}catch(s){console.error("批量添加任务失败:",s)}},k=()=>{o?(m.current&&(clearInterval(m.current),m.current=null),u(!1)):(m.current=setInterval(()=>{b()},2e3),u(!0))},y=s=>{a.cancelTask(s)},T=()=>{a.cancelAll()},C=()=>{a.resetStats(),g()},f=s=>{switch(s){case"pending":return"#ffa500";case"running":return"#007bff";case"success":return"#28a745";case"error":return"#dc3545";case"cancelled":return"#6c757d";default:return"#6c757d"}},j=s=>s?`${s}ms`:"-";return e.jsxs("div",{className:"concurrency-control-demo",children:[e.jsx("style",{children:`
        .concurrency-control-demo {
          padding: 20px;
          font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
        }
        
        .demo-section {
          margin-bottom: 30px;
          padding: 20px;
          border: 1px solid #e0e0e0;
          border-radius: 8px;
          background: #f9f9f9;
        }
        
        .demo-title {
          font-size: 18px;
          font-weight: bold;
          margin-bottom: 15px;
          color: #333;
        }
        
        .config-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
          gap: 15px;
          margin-bottom: 20px;
        }
        
        .config-item {
          display: flex;
          flex-direction: column;
        }
        
        .config-item label {
          font-weight: 500;
          margin-bottom: 5px;
          color: #555;
        }
        
        .config-item input {
          padding: 8px;
          border: 1px solid #ddd;
          border-radius: 4px;
          font-size: 14px;
        }
        
        .config-item input[type="checkbox"] {
          width: auto;
        }
        
        .controls {
          display: flex;
          gap: 10px;
          flex-wrap: wrap;
          margin-bottom: 20px;
        }
        
        .btn {
          padding: 8px 16px;
          border: none;
          border-radius: 4px;
          cursor: pointer;
          font-size: 14px;
          transition: background-color 0.2s;
        }
        
        .btn-primary {
          background: #007bff;
          color: white;
        }
        
        .btn-primary:hover {
          background: #0056b3;
        }
        
        .btn-success {
          background: #28a745;
          color: white;
        }
        
        .btn-success:hover {
          background: #1e7e34;
        }
        
        .btn-warning {
          background: #ffc107;
          color: #212529;
        }
        
        .btn-warning:hover {
          background: #e0a800;
        }
        
        .btn-danger {
          background: #dc3545;
          color: white;
        }
        
        .btn-danger:hover {
          background: #c82333;
        }
        
        .btn-secondary {
          background: #6c757d;
          color: white;
        }
        
        .btn-secondary:hover {
          background: #545b62;
        }
        
        .stats-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(120px, 1fr));
          gap: 15px;
          margin-bottom: 20px;
        }
        
        .stat-item {
          text-align: center;
          padding: 15px;
          background: white;
          border-radius: 8px;
          box-shadow: 0 2px 4px rgba(0,0,0,0.1);
        }
        
        .stat-value {
          font-size: 24px;
          font-weight: bold;
          color: #007bff;
        }
        
        .stat-label {
          font-size: 12px;
          color: #666;
          margin-top: 5px;
        }
        
        .tasks-container {
          display: grid;
          grid-template-columns: 1fr 1fr 1fr;
          gap: 20px;
        }
        
        .task-list {
          background: white;
          border-radius: 8px;
          padding: 15px;
          box-shadow: 0 2px 4px rgba(0,0,0,0.1);
        }
        
        .task-list-title {
          font-weight: bold;
          margin-bottom: 10px;
          padding-bottom: 5px;
          border-bottom: 2px solid #eee;
        }
        
        .task-item {
          padding: 10px;
          margin-bottom: 8px;
          border-radius: 4px;
          border-left: 4px solid;
          background: #f8f9fa;
          font-size: 12px;
        }
        
        .task-header {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-bottom: 5px;
        }
        
        .task-id {
          font-weight: bold;
          font-size: 11px;
        }
        
        .task-priority {
          background: #007bff;
          color: white;
          padding: 2px 6px;
          border-radius: 10px;
          font-size: 10px;
        }
        
        .task-url {
          color: #666;
          margin-bottom: 5px;
          word-break: break-all;
        }
        
        .task-meta {
          display: flex;
          justify-content: space-between;
          font-size: 10px;
          color: #888;
        }
        
        .task-actions {
          margin-top: 5px;
        }
        
        .btn-sm {
          padding: 2px 6px;
          font-size: 10px;
        }
        
        .empty-state {
          text-align: center;
          color: #999;
          font-style: italic;
          padding: 20px;
        }
        
        @media (max-width: 768px) {
          .tasks-container {
            grid-template-columns: 1fr;
          }
          
          .config-grid {
            grid-template-columns: 1fr;
          }
          
          .stats-grid {
            grid-template-columns: repeat(2, 1fr);
          }
        }
      `}),e.jsxs("div",{className:"demo-section",children:[e.jsx("div",{className:"demo-title",children:"并发控制配置"}),e.jsxs("div",{className:"config-grid",children:[e.jsxs("div",{className:"config-item",children:[e.jsx("label",{children:"最大并发数"}),e.jsx("input",{type:"number",min:"1",max:"10",value:t.maxConcurrent,onChange:s=>h("maxConcurrent",parseInt(s.target.value))})]}),e.jsxs("div",{className:"config-item",children:[e.jsx("label",{children:"队列大小"}),e.jsx("input",{type:"number",min:"1",max:"100",value:t.queueSize,onChange:s=>h("queueSize",parseInt(s.target.value))})]}),e.jsxs("div",{className:"config-item",children:[e.jsx("label",{children:"超时时间 (ms)"}),e.jsx("input",{type:"number",min:"1000",max:"30000",step:"1000",value:t.timeout,onChange:s=>h("timeout",parseInt(s.target.value))})]}),e.jsxs("div",{className:"config-item",children:[e.jsx("label",{children:"重试延迟 (ms)"}),e.jsx("input",{type:"number",min:"100",max:"5000",step:"100",value:t.retryDelay,onChange:s=>h("retryDelay",parseInt(s.target.value))})]}),e.jsx("div",{className:"config-item",children:e.jsxs("label",{children:[e.jsx("input",{type:"checkbox",checked:t.priorityEnabled,onChange:s=>h("priorityEnabled",s.target.checked)}),"启用优先级"]})}),e.jsx("div",{className:"config-item",children:e.jsxs("label",{children:[e.jsx("input",{type:"checkbox",checked:t.fairScheduling,onChange:s=>h("fairScheduling",s.target.checked)}),"公平调度"]})})]})]}),e.jsxs("div",{className:"demo-section",children:[e.jsx("div",{className:"demo-title",children:"任务控制"}),e.jsxs("div",{className:"controls",children:[e.jsx("button",{className:"btn btn-primary",onClick:b,children:"添加单个任务"}),e.jsx("button",{className:"btn btn-success",onClick:N,children:"批量添加任务"}),e.jsx("button",{className:`btn ${o?"btn-warning":"btn-success"}`,onClick:k,children:o?"停止自动添加":"开始自动添加"}),e.jsx("button",{className:"btn btn-danger",onClick:T,children:"取消所有任务"}),e.jsx("button",{className:"btn btn-secondary",onClick:C,children:"重置统计"})]})]}),e.jsxs("div",{className:"demo-section",children:[e.jsx("div",{className:"demo-title",children:"统计信息"}),e.jsxs("div",{className:"stats-grid",children:[e.jsxs("div",{className:"stat-item",children:[e.jsx("div",{className:"stat-value",children:i.total}),e.jsx("div",{className:"stat-label",children:"总任务数"})]}),e.jsxs("div",{className:"stat-item",children:[e.jsx("div",{className:"stat-value",children:i.running}),e.jsx("div",{className:"stat-label",children:"运行中"})]}),e.jsxs("div",{className:"stat-item",children:[e.jsx("div",{className:"stat-value",children:i.pending}),e.jsx("div",{className:"stat-label",children:"等待中"})]}),e.jsxs("div",{className:"stat-item",children:[e.jsx("div",{className:"stat-value",children:i.completed}),e.jsx("div",{className:"stat-label",children:"已完成"})]}),e.jsxs("div",{className:"stat-item",children:[e.jsx("div",{className:"stat-value",children:i.failed}),e.jsx("div",{className:"stat-label",children:"失败"})]}),e.jsxs("div",{className:"stat-item",children:[e.jsx("div",{className:"stat-value",children:i.cancelled}),e.jsx("div",{className:"stat-label",children:"已取消"})]}),e.jsxs("div",{className:"stat-item",children:[e.jsx("div",{className:"stat-value",children:i.avgDuration}),e.jsx("div",{className:"stat-label",children:"平均耗时(ms)"})]}),e.jsxs("div",{className:"stat-item",children:[e.jsx("div",{className:"stat-value",children:i.maxConcurrentReached}),e.jsx("div",{className:"stat-label",children:"最大并发"})]})]})]}),e.jsxs("div",{className:"demo-section",children:[e.jsx("div",{className:"demo-title",children:"任务状态"}),e.jsxs("div",{className:"tasks-container",children:[e.jsxs("div",{className:"task-list",children:[e.jsxs("div",{className:"task-list-title",children:["运行中 (",l.running.length,")"]}),l.running.length===0?e.jsx("div",{className:"empty-state",children:"暂无运行中的任务"}):l.running.map(s=>e.jsxs("div",{className:"task-item",style:{borderLeftColor:f(s.status)},children:[e.jsxs("div",{className:"task-header",children:[e.jsx("span",{className:"task-id",children:s.id.slice(-8)}),e.jsxs("span",{className:"task-priority",children:["P",s.priority]})]}),e.jsx("div",{className:"task-url",children:s.url}),e.jsxs("div",{className:"task-meta",children:[e.jsxs("span",{children:["重试: ",s.retryCount,"/",s.maxRetries]}),e.jsxs("span",{children:["耗时: ",j(s.duration)]})]}),e.jsx("div",{className:"task-actions",children:e.jsx("button",{className:"btn btn-danger btn-sm",onClick:()=>y(s.id),children:"取消"})})]},s.id))]}),e.jsxs("div",{className:"task-list",children:[e.jsxs("div",{className:"task-list-title",children:["等待中 (",l.pending.length,")"]}),l.pending.length===0?e.jsx("div",{className:"empty-state",children:"暂无等待中的任务"}):l.pending.slice(0,10).map(s=>e.jsxs("div",{className:"task-item",style:{borderLeftColor:f(s.status)},children:[e.jsxs("div",{className:"task-header",children:[e.jsx("span",{className:"task-id",children:s.id.slice(-8)}),e.jsxs("span",{className:"task-priority",children:["P",s.priority]})]}),e.jsx("div",{className:"task-url",children:s.url}),e.jsx("div",{className:"task-meta",children:e.jsxs("span",{children:["重试: ",s.retryCount,"/",s.maxRetries]})}),e.jsx("div",{className:"task-actions",children:e.jsx("button",{className:"btn btn-danger btn-sm",onClick:()=>y(s.id),children:"取消"})})]},s.id)),l.pending.length>10&&e.jsxs("div",{className:"empty-state",children:["还有 ",l.pending.length-10," 个任务..."]})]}),e.jsxs("div",{className:"task-list",children:[e.jsxs("div",{className:"task-list-title",children:["已完成 (",l.completed.length,")"]}),l.completed.length===0?e.jsx("div",{className:"empty-state",children:"暂无已完成的任务"}):l.completed.slice(-10).reverse().map(s=>e.jsxs("div",{className:"task-item",style:{borderLeftColor:f(s.status)},children:[e.jsxs("div",{className:"task-header",children:[e.jsx("span",{className:"task-id",children:s.id.slice(-8)}),e.jsxs("span",{className:"task-priority",children:["P",s.priority]})]}),e.jsx("div",{className:"task-url",children:s.url}),e.jsxs("div",{className:"task-meta",children:[e.jsxs("span",{children:["状态: ",s.status]}),e.jsxs("span",{children:["耗时: ",j(s.duration)]})]}),s.error&&e.jsxs("div",{style:{color:"#dc3545",fontSize:"10px",marginTop:"5px"},children:["错误: ",s.error.message]})]},s.id))]})]})]})]})},R=()=>e.jsx(A,{title:"请求并发控制",description:"学习如何在前端应用中实现高效的请求并发控制，包括并发限制、队列管理、优先级调度和任务取消等核心功能。",overview:[{title:"核心概念",items:["并发控制：限制同时执行的请求数量，避免资源过度消耗","任务队列：管理等待执行的请求，支持优先级排序","重试机制：自动重试失败的请求，提高成功率","取消机制：支持取消正在执行或等待的任务","统计监控：实时监控任务执行状态和性能指标"]},{title:"主要优势",items:["资源优化：避免同时发起过多请求导致的性能问题","用户体验：通过优先级调度确保重要请求优先执行","错误处理：智能重试机制提高请求成功率","可控性：支持动态调整并发参数和取消任务","监控能力：提供详细的执行统计和状态监控"]},{title:"适用场景",items:["批量数据上传：控制文件上传的并发数量","图片预加载：限制同时加载的图片数量","API批量调用：避免同时调用过多API接口","数据同步：控制数据同步任务的并发执行","资源下载：管理多个资源的下载队列"]},{title:"注意事项",items:["合理设置并发数：根据服务器性能和网络条件调整","优先级设计：为不同类型的请求设置合适的优先级","内存管理：及时清理已完成的任务，避免内存泄漏","错误处理：设置合理的重试次数和超时时间","用户反馈：提供清晰的任务状态和进度反馈"]}],examples:[{title:"并发控制演示",component:e.jsx(z,{}),description:"这个演示展示了完整的请求并发控制系统，包括配置管理、任务调度、状态监控等功能。",observationPoints:["观察不同并发数设置对任务执行的影响","注意优先级调度如何影响任务执行顺序","查看任务状态的实时变化和统计信息","测试任务取消和重试机制的效果","体验自动添加任务时的队列管理"],keyPoints:["并发控制器管理所有任务的生命周期","支持动态调整并发参数和调度策略","提供完整的任务状态监控和统计","实现了优雅的任务取消和重试机制","队列管理确保任务按优先级有序执行"],commonTraps:["并发数设置过高导致服务器压力过大","没有合理的超时和重试机制","忽略任务取消时的资源清理","队列大小无限制导致内存泄漏","缺乏错误处理和用户反馈"],solutions:["根据服务器性能动态调整并发数","设置合理的超时时间和重试策略","使用AbortController正确取消请求","限制队列大小并定期清理已完成任务","提供详细的状态反馈和错误信息"],importantTips:["合理的并发数通常在3-6之间，具体取决于应用场景","优先级调度可以显著提升用户体验","重试机制应该使用指数退避策略","任务取消要确保相关资源得到正确释放","统计信息有助于优化并发控制策略"]}],tutorial:{concepts:["并发控制的基本原理和实现方式","任务队列的设计和优先级调度算法","AbortController的使用和请求取消机制","重试策略的设计和指数退避算法","性能监控和统计数据的收集方法"],steps:["设计并发控制器的基本架构和接口","实现任务队列和优先级调度机制","添加请求执行和生命周期管理","集成取消机制和超时处理","实现重试策略和错误处理","添加统计监控和状态反馈","优化性能和内存使用"],tips:["使用Map和Set数据结构提高查找效率","合理使用setTimeout实现延迟和重试","利用Promise.race实现超时控制","使用事件监听器模式实现状态通知","定期清理已完成任务避免内存泄漏"]},interview:{questions:[{question:"如何实现一个高效的请求并发控制器？",answer:"实现并发控制器需要考虑几个关键点：1) 使用队列管理等待任务，Map管理运行任务；2) 实现优先级调度算法；3) 使用AbortController支持任务取消；4) 设计重试机制和超时处理；5) 提供统计监控和状态反馈。核心是平衡性能和资源使用。"},{question:"并发控制中的优先级调度有什么作用？",answer:"优先级调度确保重要任务优先执行，提升用户体验。实现方式包括：1) 为任务分配优先级数值；2) 队列按优先级排序；3) 支持公平调度避免低优先级任务饥饿；4) 动态调整优先级；5) 考虑任务等待时间。合理的优先级策略能显著改善应用响应性。"},{question:"如何处理并发请求中的错误和重试？",answer:"错误处理和重试策略包括：1) 区分可重试和不可重试错误；2) 使用指数退避算法避免服务器压力；3) 设置最大重试次数防止无限重试；4) 记录错误信息用于调试；5) 提供用户友好的错误反馈。重试机制要平衡成功率和性能。"},{question:"并发控制器如何避免内存泄漏？",answer:"避免内存泄漏的策略：1) 限制已完成任务列表的大小；2) 定期清理过期任务；3) 正确取消和清理AbortController；4) 移除事件监听器；5) 使用WeakMap存储临时数据。关键是及时释放不再需要的资源和引用。"}],keyPoints:["并发控制是前端性能优化的重要手段","合理的队列管理和调度策略至关重要","任务取消和错误处理需要特别关注","统计监控有助于优化并发策略","要平衡性能、用户体验和资源使用"]},bestPractices:{dos:["根据应用场景设置合适的并发数限制","为不同类型的请求设置优先级","实现完善的错误处理和重试机制","提供清晰的任务状态和进度反馈","定期监控和优化并发控制策略","使用AbortController正确取消请求","限制队列大小防止内存泄漏"],donts:["不要设置过高的并发数导致服务器压力","不要忽略任务取消时的资源清理","不要无限制地重试失败的请求","不要在队列中积累过多已完成任务","不要忽略网络状况对并发策略的影响","不要缺乏用户反馈和错误提示","不要在生产环境中使用过于复杂的调度算法"],patterns:["生产者-消费者模式：队列管理和任务执行分离","观察者模式：状态变化通知和监听","策略模式：不同的调度和重试策略","工厂模式：创建不同类型的任务","装饰器模式：为任务添加额外功能","状态机模式：管理任务的生命周期","命令模式：封装任务操作和撤销"]}});export{R as default};
