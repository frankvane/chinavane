var E=Object.defineProperty;var D=(i,s,t)=>s in i?E(i,s,{enumerable:!0,configurable:!0,writable:!0,value:t}):i[s]=t;var u=(i,s,t)=>D(i,typeof s!="symbol"?s+"":s,t);import{j as e,r as o}from"./index-Bi_r7QuH.js";import{C as A}from"./ComponentTemplate-C5EWLtXX.js";class I{constructor(s={}){u(this,"config");u(this,"runningTasks",new Map);u(this,"pendingQueue",[]);u(this,"completedTasks",[]);u(this,"listeners",new Set);u(this,"abortControllers",new Map);u(this,"stats",{total:0,completed:0,failed:0,cancelled:0,avgDuration:0,maxConcurrentReached:0});this.config={maxConcurrent:3,queueSize:50,timeout:1e4,retryDelay:1e3,priorityEnabled:!0,fairScheduling:!1,...s}}async addTask(s,t,r=5,a,c=2){const h={id:this.generateId(),url:s,options:t,priority:r,timeout:a||this.config.timeout,retryCount:0,maxRetries:c,status:"pending"};if(this.pendingQueue.length>=this.config.queueSize)throw new Error("Queue is full");return this.pendingQueue.push(h),this.stats.total++,this.config.priorityEnabled&&this.sortQueue(),this.notifyListeners(),this.processQueue(),h.id}async addBatchTasks(s){const t=[];for(const r of s)try{const a=await this.addTask(r.url,r.options,r.priority,r.timeout,r.maxRetries);t.push(a)}catch(a){console.error("Failed to add task:",a)}return t}cancelTask(s){const t=this.runningTasks.get(s);if(t){const a=this.abortControllers.get(s);return a&&(a.abort(),this.abortControllers.delete(s)),t.status="cancelled",t.endTime=Date.now(),t.startTime&&(t.duration=t.endTime-t.startTime),this.runningTasks.delete(s),this.completedTasks.push(t),this.stats.cancelled++,this.notifyListeners(),this.processQueue(),!0}const r=this.pendingQueue.findIndex(a=>a.id===s);if(r!==-1){const a=this.pendingQueue.splice(r,1)[0];return a.status="cancelled",this.completedTasks.push(a),this.stats.cancelled++,this.notifyListeners(),!0}return!1}cancelAll(){this.runningTasks.forEach((t,r)=>{this.cancelTask(r)}),[...this.pendingQueue].forEach(t=>{this.cancelTask(t.id)})}pause(){}resume(){this.processQueue()}getTaskStatus(s){const t=this.runningTasks.get(s);if(t)return t;const r=this.pendingQueue.find(c=>c.id===s);if(r)return r;const a=this.completedTasks.find(c=>c.id===s);return a||null}getAllTasks(){return{running:Array.from(this.runningTasks.values()),pending:[...this.pendingQueue],completed:[...this.completedTasks]}}getStats(){const s=this.completedTasks.filter(t=>t.duration).map(t=>t.duration);return{...this.stats,running:this.runningTasks.size,pending:this.pendingQueue.length,avgDuration:s.length>0?Math.round(s.reduce((t,r)=>t+r,0)/s.length):0,maxConcurrentReached:Math.max(this.stats.maxConcurrentReached,this.runningTasks.size)}}resetStats(){this.stats={total:0,completed:0,failed:0,cancelled:0,avgDuration:0,maxConcurrentReached:0},this.completedTasks=[]}updateConfig(s){this.config={...this.config,...s},s.priorityEnabled!==void 0&&this.sortQueue(),this.processQueue()}addListener(s){this.listeners.add(s)}removeListener(s){this.listeners.delete(s)}destroy(){this.cancelAll(),this.listeners.clear(),this.abortControllers.clear()}async processQueue(){for(;this.pendingQueue.length>0&&this.runningTasks.size<this.config.maxConcurrent;){const s=this.pendingQueue.shift();await this.executeTask(s)}}async executeTask(s){s.status="running",s.startTime=Date.now(),this.runningTasks.set(s.id,s);const t=new AbortController;this.abortControllers.set(s.id,t),this.notifyListeners();try{const r=setTimeout(()=>{t.abort()},s.timeout),a=await fetch(s.url,{...s.options,signal:t.signal});if(clearTimeout(r),!a.ok)throw new Error(`HTTP ${a.status}: ${a.statusText}`);const c=await a.json();s.status="success",s.result=c,s.endTime=Date.now(),s.duration=s.endTime-s.startTime,this.stats.completed++}catch(r){if(s.error=r,s.retryCount<s.maxRetries&&!t.signal.aborted){s.retryCount++,s.status="pending",setTimeout(()=>{this.pendingQueue.unshift(s),this.config.priorityEnabled&&this.sortQueue(),this.processQueue()},this.config.retryDelay*Math.pow(2,s.retryCount-1)),this.runningTasks.delete(s.id),this.abortControllers.delete(s.id),this.notifyListeners();return}s.status=t.signal.aborted?"cancelled":"error",s.endTime=Date.now(),s.startTime&&(s.duration=s.endTime-s.startTime),s.status==="error"?this.stats.failed++:this.stats.cancelled++}finally{this.runningTasks.delete(s.id),this.abortControllers.delete(s.id),this.completedTasks.push(s),this.notifyListeners(),this.processQueue()}}sortQueue(){this.config.fairScheduling?this.pendingQueue.sort((s,t)=>s.priority!==t.priority?t.priority-s.priority:0):this.pendingQueue.sort((s,t)=>t.priority-s.priority)}generateId(){return`task_${Date.now()}_${Math.random().toString(36).substr(2,9)}`}notifyListeners(){const s=[...Array.from(this.runningTasks.values()),...this.pendingQueue,...this.completedTasks];this.listeners.forEach(t=>{try{t(s)}catch(r){console.error("Listener error:",r)}})}}const M=()=>{const[i]=o.useState(()=>new I({maxConcurrent:3,queueSize:20,timeout:8e3,priorityEnabled:!0})),[s,t]=o.useState([]),[r,a]=o.useState(i.getStats()),[c,h]=o.useState({maxConcurrent:3,priorityEnabled:!0,fairScheduling:!1}),[g,T]=o.useState("5"),[j,b]=o.useState(!1),d=o.useCallback(()=>{a(i.getStats())},[i]);o.useEffect(()=>{const n=x=>{t(x)};i.addListener(n);const l=setInterval(d,500);return()=>{i.removeListener(n),clearInterval(l)}},[i,d]),o.useEffect(()=>{i.updateConfig({maxConcurrent:c.maxConcurrent,priorityEnabled:c.priorityEnabled,fairScheduling:c.fairScheduling})},[i,c]);const p=o.useCallback(async(n=5)=>{try{const l=["https://jsonplaceholder.typicode.com/posts/1","https://jsonplaceholder.typicode.com/posts/2","https://jsonplaceholder.typicode.com/posts/3","https://jsonplaceholder.typicode.com/users/1","https://jsonplaceholder.typicode.com/users/2","https://jsonplaceholder.typicode.com/comments/1"],x=l[Math.floor(Math.random()*l.length)];await i.addTask(x,void 0,n,5e3,2),d()}catch(l){alert(`添加任务失败: ${l instanceof Error?l.message:"未知错误"}`)}},[i,d]),v=o.useCallback(async()=>{b(!0);try{const n=parseInt(g)||5,l=Array.from({length:n},(x,S)=>({url:`https://jsonplaceholder.typicode.com/posts/${S+1}`,priority:Math.floor(Math.random()*10)+1,maxRetries:2}));await i.addBatchTasks(l),d()}catch(n){alert(`批量添加失败: ${n instanceof Error?n.message:"未知错误"}`)}finally{b(!1)}},[i,g,d]),k=o.useCallback(()=>{i.cancelAll(),d()},[i,d]),C=o.useCallback(()=>{i.resetStats(),d()},[i,d]),N=o.useCallback(n=>{i.cancelTask(n),d()},[i,d]);o.useEffect(()=>()=>i.destroy(),[i]);const w=n=>{switch(n){case"success":return"text-green-600";case"error":return"text-red-600";case"running":return"text-blue-600";case"cancelled":return"text-gray-600";default:return"text-yellow-600"}},Q=n=>{switch(n){case"success":return"bg-green-100";case"error":return"bg-red-100";case"running":return"bg-blue-100";case"cancelled":return"bg-gray-100";default:return"bg-yellow-100"}},f=s.filter(n=>n.status==="running"),m=s.filter(n=>n.status==="pending"),y=s.filter(n=>["success","error","cancelled"].includes(n.status));return e.jsx("div",{className:"space-y-4",children:e.jsxs("div",{className:"bg-white p-6 rounded-lg border",children:[e.jsx("h3",{className:"text-lg font-semibold mb-4",children:"并发控制演示"}),e.jsxs("div",{className:"grid grid-cols-1 lg:grid-cols-2 gap-6",children:[e.jsxs("div",{className:"space-y-4",children:[e.jsxs("div",{children:[e.jsx("h4",{className:"font-medium text-gray-900 mb-2",children:"并发配置"}),e.jsxs("div",{className:"space-y-2",children:[e.jsxs("div",{children:[e.jsx("label",{className:"block text-sm text-gray-600 mb-1",children:"最大并发数"}),e.jsx("input",{type:"number",value:c.maxConcurrent,onChange:n=>h(l=>({...l,maxConcurrent:parseInt(n.target.value)||1})),min:"1",max:"10",className:"w-full p-2 border border-gray-300 rounded-md"})]}),e.jsxs("div",{className:"flex items-center space-x-4",children:[e.jsxs("label",{className:"flex items-center",children:[e.jsx("input",{type:"checkbox",checked:c.priorityEnabled,onChange:n=>h(l=>({...l,priorityEnabled:n.target.checked})),className:"mr-2"}),"启用优先级"]}),e.jsxs("label",{className:"flex items-center",children:[e.jsx("input",{type:"checkbox",checked:c.fairScheduling,onChange:n=>h(l=>({...l,fairScheduling:n.target.checked})),className:"mr-2"}),"公平调度"]})]})]})]}),e.jsxs("div",{children:[e.jsx("h4",{className:"font-medium text-gray-900 mb-2",children:"任务操作"}),e.jsxs("div",{className:"space-y-2",children:[e.jsxs("div",{className:"flex space-x-2",children:[e.jsx("button",{onClick:()=>p(1),className:"flex-1 px-3 py-2 bg-red-600 text-white rounded-md hover:bg-red-700 text-sm",children:"低优先级 (1)"}),e.jsx("button",{onClick:()=>p(5),className:"flex-1 px-3 py-2 bg-yellow-600 text-white rounded-md hover:bg-yellow-700 text-sm",children:"中优先级 (5)"}),e.jsx("button",{onClick:()=>p(10),className:"flex-1 px-3 py-2 bg-green-600 text-white rounded-md hover:bg-green-700 text-sm",children:"高优先级 (10)"})]}),e.jsxs("div",{className:"flex space-x-2",children:[e.jsx("input",{type:"number",value:g,onChange:n=>T(n.target.value),placeholder:"批量大小",min:"1",max:"20",className:"flex-1 p-2 border border-gray-300 rounded-md"}),e.jsx("button",{onClick:v,disabled:j,className:"px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 disabled:bg-gray-400",children:j?"添加中...":"批量添加"})]}),e.jsxs("div",{className:"flex space-x-2",children:[e.jsx("button",{onClick:k,className:"flex-1 px-4 py-2 bg-red-600 text-white rounded-md hover:bg-red-700",children:"取消所有"}),e.jsx("button",{onClick:C,className:"flex-1 px-4 py-2 bg-gray-600 text-white rounded-md hover:bg-gray-700",children:"重置统计"})]})]})]}),e.jsxs("div",{children:[e.jsx("h4",{className:"font-medium text-gray-900 mb-2",children:"统计信息"}),e.jsxs("div",{className:"bg-gray-50 p-4 rounded-md space-y-2",children:[e.jsxs("div",{className:"flex justify-between",children:[e.jsx("span",{className:"text-sm text-gray-600",children:"总任务数:"}),e.jsx("span",{className:"text-sm font-medium",children:r.total})]}),e.jsxs("div",{className:"flex justify-between",children:[e.jsx("span",{className:"text-sm text-gray-600",children:"运行中:"}),e.jsx("span",{className:"text-sm font-medium text-blue-600",children:r.running})]}),e.jsxs("div",{className:"flex justify-between",children:[e.jsx("span",{className:"text-sm text-gray-600",children:"等待中:"}),e.jsx("span",{className:"text-sm font-medium text-yellow-600",children:r.pending})]}),e.jsxs("div",{className:"flex justify-between",children:[e.jsx("span",{className:"text-sm text-gray-600",children:"已完成:"}),e.jsx("span",{className:"text-sm font-medium text-green-600",children:r.completed})]}),e.jsxs("div",{className:"flex justify-between",children:[e.jsx("span",{className:"text-sm text-gray-600",children:"失败:"}),e.jsx("span",{className:"text-sm font-medium text-red-600",children:r.failed})]}),e.jsxs("div",{className:"flex justify-between",children:[e.jsx("span",{className:"text-sm text-gray-600",children:"已取消:"}),e.jsx("span",{className:"text-sm font-medium text-gray-600",children:r.cancelled})]}),e.jsxs("div",{className:"flex justify-between",children:[e.jsx("span",{className:"text-sm text-gray-600",children:"平均耗时:"}),e.jsxs("span",{className:"text-sm font-medium",children:[r.avgDuration,"ms"]})]}),e.jsxs("div",{className:"flex justify-between",children:[e.jsx("span",{className:"text-sm text-gray-600",children:"最大并发:"}),e.jsx("span",{className:"text-sm font-medium",children:r.maxConcurrentReached})]})]})]})]}),e.jsxs("div",{className:"space-y-4",children:[e.jsxs("div",{children:[e.jsxs("h4",{className:"font-medium text-gray-900 mb-2",children:["运行中任务 (",f.length,")"]}),e.jsx("div",{className:"bg-blue-50 p-4 rounded-md max-h-32 overflow-y-auto",children:f.length===0?e.jsx("div",{className:"text-sm text-gray-500 text-center py-2",children:"无运行中任务"}):e.jsx("div",{className:"space-y-1",children:f.map(n=>e.jsxs("div",{className:"flex items-center justify-between text-sm",children:[e.jsxs("span",{className:"truncate flex-1",children:["优先级 ",n.priority]}),e.jsx("button",{onClick:()=>N(n.id),className:"ml-2 px-2 py-1 text-xs bg-red-600 text-white rounded hover:bg-red-700",children:"取消"})]},n.id))})})]}),e.jsxs("div",{children:[e.jsxs("h4",{className:"font-medium text-gray-900 mb-2",children:["等待队列 (",m.length,")"]}),e.jsx("div",{className:"bg-yellow-50 p-4 rounded-md max-h-32 overflow-y-auto",children:m.length===0?e.jsx("div",{className:"text-sm text-gray-500 text-center py-2",children:"队列为空"}):e.jsxs("div",{className:"space-y-1",children:[m.slice(0,10).map((n,l)=>e.jsxs("div",{className:"flex items-center justify-between text-sm",children:[e.jsxs("span",{className:"truncate flex-1",children:["#",l+1," 优先级 ",n.priority]}),e.jsx("button",{onClick:()=>N(n.id),className:"ml-2 px-2 py-1 text-xs bg-red-600 text-white rounded hover:bg-red-700",children:"取消"})]},n.id)),m.length>10&&e.jsxs("div",{className:"text-xs text-gray-500 text-center pt-2",children:["还有 ",m.length-10," 个任务..."]})]})})]}),e.jsxs("div",{children:[e.jsxs("h4",{className:"font-medium text-gray-900 mb-2",children:["最近完成 (",y.length,")"]}),e.jsx("div",{className:"bg-gray-50 p-4 rounded-md max-h-40 overflow-y-auto",children:y.length===0?e.jsx("div",{className:"text-sm text-gray-500 text-center py-2",children:"暂无完成任务"}):e.jsx("div",{className:"space-y-1",children:y.slice(-10).reverse().map(n=>e.jsxs("div",{className:"flex items-center justify-between text-sm",children:[e.jsxs("div",{className:"flex items-center space-x-2 flex-1",children:[e.jsx("span",{className:`px-2 py-1 text-xs rounded ${Q(n.status)} ${w(n.status)}`,children:n.status}),e.jsxs("span",{className:"text-xs text-gray-600",children:["优先级 ",n.priority]})]}),e.jsx("span",{className:"text-xs text-gray-500",children:n.duration?`${n.duration}ms`:"-"})]},n.id))})})]})]})]})]})})},z=()=>{const i={title:"并发控制器实现",language:"typescript",code:`// 并发控制器
class ConcurrencyController {
  private config: ConcurrencyConfig;
  private runningTasks: Map<string, ConcurrentTask> = new Map();
  private pendingQueue: ConcurrentTask[] = [];
  private abortControllers: Map<string, AbortController> = new Map();

  constructor(config: Partial<ConcurrencyConfig> = {}) {
    this.config = {
      maxConcurrent: 3,
      queueSize: 50,
      timeout: 10000,
      retryDelay: 1000,
      priorityEnabled: true,
      fairScheduling: false,
      ...config
    };
  }

  // 添加任务
  async addTask(
    url: string,
    options?: RequestInit,
    priority: number = 5,
    timeout?: number,
    maxRetries: number = 2
  ): Promise<string> {
    const task: ConcurrentTask = {
      id: this.generateId(),
      url, options, priority,
      timeout: timeout || this.config.timeout,
      retryCount: 0, maxRetries,
      status: 'pending'
    };

    // 检查队列大小限制
    if (this.pendingQueue.length >= this.config.queueSize) {
      throw new Error('Queue is full');
    }

    this.pendingQueue.push(task);

    // 按优先级排序
    if (this.config.priorityEnabled) {
      this.sortQueue();
    }

    this.processQueue();
    return task.id;
  }

  // 处理队列
  private async processQueue(): Promise<void> {
    while (
      this.pendingQueue.length > 0 &&
      this.runningTasks.size < this.config.maxConcurrent
    ) {
      const task = this.pendingQueue.shift()!;
      await this.executeTask(task);
    }
  }

  // 执行任务
  private async executeTask(task: ConcurrentTask): Promise<void> {
    task.status = 'running';
    task.startTime = Date.now();
    this.runningTasks.set(task.id, task);

    const controller = new AbortController();
    this.abortControllers.set(task.id, controller);

    try {
      const timeoutId = setTimeout(() => {
        controller.abort();
      }, task.timeout);

      const response = await fetch(task.url, {
        ...task.options,
        signal: controller.signal
      });

      clearTimeout(timeoutId);

      if (!response.ok) {
        throw new Error(\`HTTP \${response.status}: \${response.statusText}\`);
      }

      const result = await response.json();

      task.status = 'success';
      task.result = result;
      task.endTime = Date.now();
      task.duration = task.endTime - task.startTime!;
    } catch (error) {
      // 重试逻辑
      if (task.retryCount < task.maxRetries && !controller.signal.aborted) {
        task.retryCount++;
        task.status = 'pending';

        setTimeout(() => {
          this.pendingQueue.unshift(task);
          this.processQueue();
        }, this.config.retryDelay * Math.pow(2, task.retryCount - 1));

        return;
      }

      task.status = controller.signal.aborted ? 'cancelled' : 'error';
      task.error = error as Error;
    } finally {
      this.runningTasks.delete(task.id);
      this.abortControllers.delete(task.id);
      this.processQueue();
    }
  }
}`,highlights:[18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45,46,47,48,49,50,51,52,53,54,55,56,57,58,59,60,61,62,63,64,65,66,67,68,69,70,71,72,73,74,75,76,77,78,79,80,81,82,83,84,85,86,87,88,89,90,91,92,93,94,95,96,97,98,99,100]};return e.jsx(A,{title:"请求并发控制",description:"实现智能的请求并发控制，支持优先级调度、队列管理和资源限制。",overview:e.jsxs("div",{className:"space-y-4",children:[e.jsxs("div",{className:"bg-blue-50 p-6 rounded-lg",children:[e.jsx("h3",{className:"text-lg font-semibold text-blue-900 mb-3",children:"🔍 核心概念"}),e.jsxs("ul",{className:"space-y-2 text-blue-800",children:[e.jsxs("li",{children:[e.jsx("strong",{children:"并发限制:"})," ","控制同时执行的请求数量，避免资源过度消耗"]}),e.jsxs("li",{children:[e.jsx("strong",{children:"优先级调度:"})," 根据任务重要性安排执行顺序"]}),e.jsxs("li",{children:[e.jsx("strong",{children:"队列管理:"})," 管理等待执行的任务队列"]}),e.jsxs("li",{children:[e.jsx("strong",{children:"资源控制:"})," 合理分配网络和计算资源"]})]})]}),e.jsxs("div",{className:"bg-green-50 p-6 rounded-lg",children:[e.jsx("h3",{className:"text-lg font-semibold text-green-900 mb-3",children:"✨ 主要优势"}),e.jsxs("ul",{className:"space-y-2 text-green-800",children:[e.jsxs("li",{children:[e.jsx("strong",{children:"性能优化:"})," 避免过多并发请求导致的性能问题"]}),e.jsxs("li",{children:[e.jsx("strong",{children:"资源管理:"})," 合理利用网络带宽和服务器资源"]}),e.jsxs("li",{children:[e.jsx("strong",{children:"用户体验:"})," 重要请求优先处理，提升响应速度"]}),e.jsxs("li",{children:[e.jsx("strong",{children:"系统稳定:"})," 防止请求过载导致的系统崩溃"]})]})]}),e.jsxs("div",{className:"bg-yellow-50 p-6 rounded-lg",children:[e.jsx("h3",{className:"text-lg font-semibold text-yellow-900 mb-3",children:"🎯 适用场景"}),e.jsxs("ul",{className:"space-y-2 text-yellow-800",children:[e.jsxs("li",{children:[e.jsx("strong",{children:"批量操作:"})," 大量数据的批量上传或下载"]}),e.jsxs("li",{children:[e.jsx("strong",{children:"图片加载:"})," 图片墙或相册的并发加载控制"]}),e.jsxs("li",{children:[e.jsx("strong",{children:"API调用:"})," 多个API接口的并发调用管理"]}),e.jsxs("li",{children:[e.jsx("strong",{children:"文件处理:"})," 多文件上传的并发控制"]})]})]}),e.jsxs("div",{className:"bg-red-50 p-6 rounded-lg",children:[e.jsx("h3",{className:"text-lg font-semibold text-red-900 mb-3",children:"⚠️ 注意事项"}),e.jsxs("ul",{className:"space-y-2 text-red-800",children:[e.jsxs("li",{children:[e.jsx("strong",{children:"并发数设置:"})," 根据设备性能和网络条件合理设置"]}),e.jsxs("li",{children:[e.jsx("strong",{children:"队列大小:"})," 避免队列过大导致内存问题"]}),e.jsxs("li",{children:[e.jsx("strong",{children:"超时处理:"})," 设置合理的超时时间和重试机制"]}),e.jsxs("li",{children:[e.jsx("strong",{children:"错误处理:"})," 妥善处理并发请求中的错误情况"]})]})]})]}),examples:[{title:"并发控制演示",component:e.jsx(M,{}),description:"演示并发控制器的功能，包括任务添加、优先级调度、队列管理和统计监控。",observationPoints:["最大并发数限制了同时运行的任务数量","优先级高的任务会优先执行","队列中的任务按优先级排序","可以实时取消运行中或等待中的任务","统计信息显示系统的运行状态"],keyPoints:["并发控制器自动管理任务的执行顺序","支持动态调整并发配置参数","提供完整的任务生命周期管理","实现了公平调度和严格优先级两种模式","包含重试机制和错误处理"],commonTraps:["并发数设置过高导致性能问题","队列大小无限制导致内存泄漏","没有合理的超时和重试机制","忽略任务取消的清理工作"],solutions:["根据设备性能动态调整并发数","设置队列大小限制和清理机制","实现指数退避的重试策略","确保任务取消时正确清理资源"],codeExample:i}],tutorial:{concepts:["并发控制是管理多个异步操作同时执行的技术","优先级调度确保重要任务优先处理","队列管理维护任务的执行顺序","资源限制防止系统过载","任务生命周期管理确保系统稳定性"],steps:["设计并发任务的数据结构","实现任务队列和优先级排序","创建并发控制器管理执行","添加任务添加和取消功能","实现超时和重试机制","添加统计和监控功能","处理错误和异常情况","优化性能和资源使用","测试各种并发场景"],tips:["根据网络条件和设备性能调整并发数","使用AbortController实现任务取消","实现指数退避的重试策略","监控队列长度防止内存泄漏","提供任务进度和状态反馈","考虑实现任务优先级的动态调整"]},interview:{questions:[{question:"为什么需要并发控制？如何实现？",answer:"并发控制的必要性：1) 资源限制：避免过多请求消耗过多带宽和内存；2) 性能优化：防止并发过多导致的性能下降；3) 服务器保护：避免给服务器造成过大压力；4) 用户体验：确保重要请求优先处理。实现方法：使用队列管理待执行任务，设置最大并发数限制，实现优先级调度算法，添加超时和重试机制。"},{question:"如何设计一个高效的任务调度器？",answer:"高效调度器的设计要点：1) 数据结构：使用优先队列管理任务，Map存储运行中任务；2) 调度算法：支持优先级调度、公平调度、轮询调度；3) 资源管理：动态调整并发数，监控资源使用；4) 错误处理：重试机制、超时处理、任务取消；5) 性能优化：批量处理、懒加载、内存池；6) 监控统计：任务状态、执行时间、成功率。"},{question:"并发控制中的优先级调度如何实现？",answer:"优先级调度的实现方式：1) 严格优先级：高优先级任务总是先执行，可能导致低优先级任务饥饿；2) 公平调度：轮询不同优先级，确保所有任务都有执行机会；3) 动态优先级：根据等待时间动态提升优先级；4) 多级队列：不同优先级使用不同队列；5) 权重调度：根据权重分配执行时间片；6) 实时调度：支持实时任务的抢占式调度。"},{question:"如何处理并发请求中的错误和异常？",answer:"错误处理策略：1) 分类处理：网络错误、超时错误、业务错误分别处理；2) 重试机制：指数退避、最大重试次数、重试条件判断；3) 熔断器：连续失败时暂停请求，避免雪崩；4) 降级策略：失败时返回默认值或缓存数据；5) 错误传播：合理的错误冒泡和处理链；6) 监控告警：错误率监控、异常日志记录；7) 资源清理：确保失败任务正确释放资源。"}],keyPoints:["并发控制是高性能应用的重要组成部分","合理的并发数设置需要考虑多种因素","优先级调度确保重要任务优先处理","错误处理和重试机制提高系统可靠性","任务生命周期管理确保资源正确释放","监控和统计帮助优化系统性能"]},bestPractices:{dos:["根据设备性能和网络条件设置合理的并发数","实现完整的任务生命周期管理","使用优先级调度确保重要任务优先处理","添加超时和重试机制提高可靠性","监控队列长度和任务执行状态","提供任务取消和暂停功能","实现错误分类和处理策略","定期清理完成的任务避免内存泄漏"],donts:["不要设置过高的并发数导致性能问题","不要忽略队列大小的限制","不要忘记处理任务取消的资源清理","不要在所有场景下使用相同的并发策略","不要忽略网络状况对并发的影响","不要缺少错误处理和重试机制","不要忽略任务执行的监控和统计","不要在移动设备上使用过高的并发数"],patterns:["生产者-消费者模式：任务生产和消费分离","工作池模式：固定数量的工作线程处理任务","优先级队列模式：按重要性排序任务","令牌桶模式：控制任务执行的速率","熔断器模式：失败时暂停请求避免雪崩","重试模式：失败任务的自动重试","批处理模式：将相关任务批量处理","自适应模式：根据系统状态动态调整参数"]}})};export{z as default};
