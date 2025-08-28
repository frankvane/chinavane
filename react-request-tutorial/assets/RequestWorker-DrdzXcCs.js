var Q=Object.defineProperty;var q=(n,s,r)=>s in n?Q(n,s,{enumerable:!0,configurable:!0,writable:!0,value:r}):n[s]=r;var u=(n,s,r)=>q(n,typeof s!="symbol"?s+"":s,r);import{j as e,r as o}from"./index-Bi_r7QuH.js";import{C as D}from"./ComponentTemplate-C5EWLtXX.js";class p{static async processTask(s){const{type:r,data:t}=s;switch(r){case"http-request":return await p.processHttpRequest(t);case"data-processing":return await p.processData(t);case"image-processing":return await p.processImage(t);case"calculation":return await p.processCalculation(t);default:throw new Error(`Unknown task type: ${r}`)}}static async processHttpRequest(s){const{url:r,options:t={}}=s;if(await new Promise(i=>setTimeout(i,500+Math.random()*1e3)),Math.random()<.1)throw new Error("Network error");return{status:200,data:{message:"Request completed",url:r,timestamp:Date.now()}}}static async processData(s){const{items:r=[]}=s;return await new Promise(t=>setTimeout(t,200+r.length*10)),{processed:r.length,result:r.map((t,i)=>({...t,processed:!0,index:i}))}}static async processImage(s){const{width:r=100,height:t=100,format:i="jpeg"}=s,l=Math.max(1e3,r*t/1e3);return await new Promise(c=>setTimeout(c,l)),{width:r,height:t,format:i,size:r*t*3,processed:!0}}static async processCalculation(s){const{operation:r,numbers:t=[]}=s;await new Promise(l=>setTimeout(l,100+t.length*5));let i;switch(r){case"sum":i=t.reduce((l,c)=>l+c,0);break;case"multiply":i=t.reduce((l,c)=>l*c,1);break;case"average":i=t.reduce((l,c)=>l+c,0)/t.length;break;default:throw new Error(`Unknown operation: ${r}`)}return{operation:r,result:i,count:t.length}}}class E{constructor(s={}){u(this,"config");u(this,"workers",new Map);u(this,"taskQueue",[]);u(this,"activeTasks",new Map);u(this,"completedTasks",[]);u(this,"stats");u(this,"listeners",new Set);u(this,"processingInterval");u(this,"destroyed",!1);this.config={maxWorkers:4,taskTimeout:3e4,retryDelay:1e3,maxQueueSize:100,enablePriority:!0,enableRetry:!0,...s},this.stats={totalTasks:0,completedTasks:0,failedTasks:0,cancelledTasks:0,activeWorkers:0,idleWorkers:0,queueLength:0,avgProcessTime:0,maxProcessTime:0,throughput:0},this.initializeWorkers(),this.startProcessing()}async addTask(s,r,t=5,i,l=2){if(this.destroyed)throw new Error("Worker manager has been destroyed");if(this.taskQueue.length>=this.config.maxQueueSize)throw new Error("Task queue is full");const c={id:this.generateId(),type:s,data:r,priority:t,timeout:i||this.config.taskTimeout,retryCount:0,maxRetries:l,status:"pending"};return this.taskQueue.push(c),this.stats.totalTasks++,this.config.enablePriority&&this.sortTaskQueue(),this.notifyListeners(),c.id}async addBatchTasks(s){const r=[];for(const t of s)try{const i=await this.addTask(t.type,t.data,t.priority,t.timeout,t.maxRetries);r.push(i)}catch(i){console.error("Failed to add task:",i)}return r}cancelTask(s){const r=this.taskQueue.findIndex(i=>i.id===s);if(r!==-1){const i=this.taskQueue.splice(r,1)[0];return i.status="cancelled",i.endTime=Date.now(),this.completedTasks.push(i),this.stats.cancelledTasks++,this.notifyListeners(),!0}const t=this.activeTasks.get(s);if(t){if(t.status="cancelled",t.endTime=Date.now(),t.startTime&&(t.duration=t.endTime-t.startTime),this.activeTasks.delete(s),this.completedTasks.push(t),this.stats.cancelledTasks++,t.workerId){const i=this.workers.get(t.workerId);i&&(i.status="idle",i.currentTask=void 0,i.lastActive=Date.now())}return this.notifyListeners(),!0}return!1}getTaskStatus(s){const r=this.activeTasks.get(s);if(r)return r;const t=this.taskQueue.find(l=>l.id===s);if(t)return t;const i=this.completedTasks.find(l=>l.id===s);return i||null}getAllTasks(){return{queue:[...this.taskQueue],active:Array.from(this.activeTasks.values()),completed:[...this.completedTasks]}}getWorkerStates(){return Array.from(this.workers.values())}getStats(){return this.updateStats(),{...this.stats}}clear(){[...this.taskQueue,...Array.from(this.activeTasks.values())].forEach(s=>{this.cancelTask(s.id)}),this.taskQueue=[],this.activeTasks.clear(),this.completedTasks=[],this.resetStats(),this.notifyListeners()}destroy(){this.destroyed=!0,this.processingInterval&&clearInterval(this.processingInterval),this.clear(),this.workers.clear(),this.listeners.clear()}addListener(s){this.listeners.add(s)}removeListener(s){this.listeners.delete(s)}initializeWorkers(){for(let s=0;s<this.config.maxWorkers;s++){const r={id:`worker_${s}`,status:"idle",tasksCompleted:0,tasksError:0,created:Date.now(),lastActive:Date.now()};this.workers.set(r.id,r)}}startProcessing(){this.processingInterval=setInterval(()=>{this.processTaskQueue()},100)}async processTaskQueue(){if(this.destroyed||this.taskQueue.length===0)return;const s=Array.from(this.workers.values()).find(t=>t.status==="idle");if(!s)return;const r=this.taskQueue.shift();r&&await this.assignTaskToWorker(r,s)}async assignTaskToWorker(s,r){s.status="processing",s.startTime=Date.now(),s.workerId=r.id,r.status="busy",r.currentTask=s.id,r.lastActive=Date.now(),this.activeTasks.set(s.id,s),this.notifyListeners();try{const t=new Promise((c,g)=>{setTimeout(()=>g(new Error("Task timeout")),s.timeout)}),i=p.processTask(s),l=await Promise.race([i,t]);s.status="completed",s.result=l,s.endTime=Date.now(),s.duration=s.endTime-s.startTime,r.tasksCompleted++,this.stats.completedTasks++}catch(t){s.error=t instanceof Error?t.message:"Unknown error",this.config.enableRetry&&s.retryCount<s.maxRetries?(s.retryCount++,s.status="pending",s.startTime=void 0,s.workerId=void 0,setTimeout(()=>{this.destroyed||(this.taskQueue.unshift(s),this.config.enablePriority&&this.sortTaskQueue())},this.config.retryDelay*Math.pow(2,s.retryCount-1)),this.activeTasks.delete(s.id)):(s.status="failed",s.endTime=Date.now(),s.startTime&&(s.duration=s.endTime-s.startTime),r.tasksError++,this.stats.failedTasks++,this.activeTasks.delete(s.id),this.completedTasks.push(s))}finally{s.status!=="pending"&&(r.status="idle",r.currentTask=void 0,r.lastActive=Date.now(),(s.status==="completed"||s.status==="failed")&&(this.activeTasks.delete(s.id),this.completedTasks.push(s))),this.notifyListeners()}}sortTaskQueue(){this.taskQueue.sort((s,r)=>s.priority!==r.priority?r.priority-s.priority:0)}updateStats(){this.stats.queueLength=this.taskQueue.length,this.stats.activeWorkers=Array.from(this.workers.values()).filter(t=>t.status==="busy").length,this.stats.idleWorkers=Array.from(this.workers.values()).filter(t=>t.status==="idle").length;const s=this.completedTasks.filter(t=>t.duration);if(s.length>0){const t=s.reduce((i,l)=>i+l.duration,0);this.stats.avgProcessTime=Math.round(t/s.length),this.stats.maxProcessTime=Math.max(...s.map(i=>i.duration))}const r=this.completedTasks.filter(t=>t.endTime&&Date.now()-t.endTime<6e4);this.stats.throughput=r.length/60}resetStats(){this.stats={totalTasks:0,completedTasks:0,failedTasks:0,cancelledTasks:0,activeWorkers:0,idleWorkers:this.workers.size,queueLength:0,avgProcessTime:0,maxProcessTime:0,throughput:0}}notifyListeners(){this.listeners.forEach(s=>{try{s()}catch(r){console.error("Listener error:",r)}})}generateId(){return`task_${Date.now()}_${Math.random().toString(36).substr(2,9)}`}}const I=()=>{const[n]=o.useState(()=>new E({maxWorkers:3,taskTimeout:1e4,retryDelay:1e3,maxQueueSize:50,enablePriority:!0,enableRetry:!0})),[s,r]=o.useState(n.getAllTasks()),[t,i]=o.useState(n.getWorkerStates()),[l,c]=o.useState(n.getStats()),[g,k]=o.useState(!1),[h,y]=o.useState({taskType:"http-request",priority:5,batchSize:5}),d=o.useCallback(()=>{r(n.getAllTasks()),i(n.getWorkerStates()),c(n.getStats())},[n]);o.useEffect(()=>{n.addListener(d);const a=setInterval(d,1e3);return()=>{n.removeListener(d),clearInterval(a)}},[n,d]);const v=o.useCallback(async()=>{try{const a={"http-request":{url:"https://api.example.com/data",method:"GET"},"data-processing":{items:Array.from({length:100},(m,x)=>({id:x,value:Math.random()}))},"image-processing":{width:800,height:600,format:"jpeg"},calculation:{operation:"sum",numbers:Array.from({length:1e3},()=>Math.random())}}[h.taskType]||{};await n.addTask(h.taskType,a,h.priority),d()}catch(a){alert(`添加任务失败: ${a instanceof Error?a.message:"未知错误"}`)}},[n,h,d]),b=o.useCallback(async()=>{k(!0);try{const a=Array.from({length:h.batchSize},(m,x)=>{const j=["http-request","data-processing","image-processing","calculation"],T=j[x%j.length],C={"http-request":{url:`https://api.example.com/data/${x}`,method:"GET"},"data-processing":{items:Array.from({length:50+x*10},(A,S)=>({id:S,value:Math.random()}))},"image-processing":{width:400+x*100,height:300+x*75,format:"jpeg"},calculation:{operation:["sum","multiply","average"][x%3],numbers:Array.from({length:500+x*100},()=>Math.random())}}[T]||{};return{type:T,data:C,priority:Math.floor(Math.random()*10)+1}});await n.addBatchTasks(a),d()}catch(a){alert(`批量添加失败: ${a instanceof Error?a.message:"未知错误"}`)}finally{k(!1)}},[n,h.batchSize,d]),f=o.useCallback(a=>{n.cancelTask(a),d()},[n,d]),w=o.useCallback(()=>{n.clear(),d()},[n,d]);o.useEffect(()=>()=>n.destroy(),[n]);const N=a=>{switch(a){case"completed":return"text-green-600";case"failed":return"text-red-600";case"processing":return"text-blue-600";case"cancelled":return"text-gray-600";default:return"text-yellow-600"}},W=a=>{switch(a){case"completed":return"bg-green-100";case"failed":return"bg-red-100";case"processing":return"bg-blue-100";case"cancelled":return"bg-gray-100";default:return"bg-yellow-100"}},P=a=>{switch(a){case"busy":return"text-blue-600 bg-blue-100";case"idle":return"text-green-600 bg-green-100";case"error":return"text-red-600 bg-red-100";default:return"text-gray-600 bg-gray-100"}};return e.jsx("div",{className:"space-y-4",children:e.jsxs("div",{className:"bg-white p-6 rounded-lg border",children:[e.jsx("h3",{className:"text-lg font-semibold mb-4",children:"工作线程管理演示"}),e.jsxs("div",{className:"grid grid-cols-1 lg:grid-cols-2 gap-6",children:[e.jsxs("div",{className:"space-y-4",children:[e.jsxs("div",{children:[e.jsx("h4",{className:"font-medium text-gray-900 mb-2",children:"任务配置"}),e.jsxs("div",{className:"space-y-2",children:[e.jsxs("div",{children:[e.jsx("label",{className:"block text-sm text-gray-600 mb-1",children:"任务类型"}),e.jsxs("select",{value:h.taskType,onChange:a=>y(m=>({...m,taskType:a.target.value})),className:"w-full p-2 border border-gray-300 rounded-md",children:[e.jsx("option",{value:"http-request",children:"HTTP请求"}),e.jsx("option",{value:"data-processing",children:"数据处理"}),e.jsx("option",{value:"image-processing",children:"图像处理"}),e.jsx("option",{value:"calculation",children:"数值计算"})]})]}),e.jsxs("div",{children:[e.jsx("label",{className:"block text-sm text-gray-600 mb-1",children:"优先级 (1-10)"}),e.jsx("input",{type:"number",value:h.priority,onChange:a=>y(m=>({...m,priority:parseInt(a.target.value)||1})),min:"1",max:"10",className:"w-full p-2 border border-gray-300 rounded-md"})]}),e.jsxs("div",{children:[e.jsx("label",{className:"block text-sm text-gray-600 mb-1",children:"批量大小"}),e.jsx("input",{type:"number",value:h.batchSize,onChange:a=>y(m=>({...m,batchSize:parseInt(a.target.value)||1})),min:"1",max:"20",className:"w-full p-2 border border-gray-300 rounded-md"})]})]})]}),e.jsxs("div",{children:[e.jsx("h4",{className:"font-medium text-gray-900 mb-2",children:"操作"}),e.jsxs("div",{className:"space-y-2",children:[e.jsxs("div",{className:"flex space-x-2",children:[e.jsx("button",{onClick:v,disabled:g,className:"flex-1 px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 disabled:bg-gray-400",children:"添加任务"}),e.jsx("button",{onClick:b,disabled:g,className:"flex-1 px-4 py-2 bg-green-600 text-white rounded-md hover:bg-green-700 disabled:bg-gray-400",children:g?"添加中...":"批量添加"})]}),e.jsx("button",{onClick:w,className:"w-full px-4 py-2 bg-red-600 text-white rounded-md hover:bg-red-700",children:"清空所有任务"})]})]}),e.jsxs("div",{children:[e.jsx("h4",{className:"font-medium text-gray-900 mb-2",children:"统计信息"}),e.jsxs("div",{className:"bg-gray-50 p-4 rounded-md space-y-2",children:[e.jsxs("div",{className:"flex justify-between",children:[e.jsx("span",{className:"text-sm text-gray-600",children:"总任务数:"}),e.jsx("span",{className:"text-sm font-medium",children:l.totalTasks})]}),e.jsxs("div",{className:"flex justify-between",children:[e.jsx("span",{className:"text-sm text-gray-600",children:"队列长度:"}),e.jsx("span",{className:"text-sm font-medium text-yellow-600",children:l.queueLength})]}),e.jsxs("div",{className:"flex justify-between",children:[e.jsx("span",{className:"text-sm text-gray-600",children:"活跃工作线程:"}),e.jsx("span",{className:"text-sm font-medium text-blue-600",children:l.activeWorkers})]}),e.jsxs("div",{className:"flex justify-between",children:[e.jsx("span",{className:"text-sm text-gray-600",children:"空闲工作线程:"}),e.jsx("span",{className:"text-sm font-medium text-green-600",children:l.idleWorkers})]}),e.jsxs("div",{className:"flex justify-between",children:[e.jsx("span",{className:"text-sm text-gray-600",children:"已完成:"}),e.jsx("span",{className:"text-sm font-medium text-green-600",children:l.completedTasks})]}),e.jsxs("div",{className:"flex justify-between",children:[e.jsx("span",{className:"text-sm text-gray-600",children:"失败:"}),e.jsx("span",{className:"text-sm font-medium text-red-600",children:l.failedTasks})]}),e.jsxs("div",{className:"flex justify-between",children:[e.jsx("span",{className:"text-sm text-gray-600",children:"平均处理时间:"}),e.jsxs("span",{className:"text-sm font-medium",children:[l.avgProcessTime,"ms"]})]}),e.jsxs("div",{className:"flex justify-between",children:[e.jsx("span",{className:"text-sm text-gray-600",children:"吞吐量:"}),e.jsxs("span",{className:"text-sm font-medium",children:[l.throughput.toFixed(1),"/s"]})]})]})]})]}),e.jsxs("div",{className:"space-y-4",children:[e.jsxs("div",{children:[e.jsx("h4",{className:"font-medium text-gray-900 mb-2",children:"工作线程状态"}),e.jsx("div",{className:"bg-gray-50 p-4 rounded-md space-y-2",children:t.map(a=>e.jsxs("div",{className:"bg-white p-3 rounded border",children:[e.jsxs("div",{className:"flex items-center justify-between mb-2",children:[e.jsx("span",{className:"text-sm font-medium",children:a.id}),e.jsx("span",{className:`px-2 py-1 text-xs rounded ${P(a.status)}`,children:a.status})]}),e.jsxs("div",{className:"text-xs text-gray-500 space-y-1",children:[e.jsxs("div",{children:["完成任务: ",a.tasksCompleted]}),e.jsxs("div",{children:["错误任务: ",a.tasksError]}),a.currentTask&&e.jsxs("div",{children:["当前任务: ",a.currentTask.slice(-8)]})]})]},a.id))})]}),e.jsxs("div",{children:[e.jsxs("h4",{className:"font-medium text-gray-900 mb-2",children:["任务队列 (",s.queue.length,")"]}),e.jsx("div",{className:"bg-yellow-50 p-4 rounded-md max-h-32 overflow-y-auto",children:s.queue.length===0?e.jsx("div",{className:"text-sm text-gray-500 text-center py-2",children:"队列为空"}):e.jsxs("div",{className:"space-y-1",children:[s.queue.slice(0,10).map((a,m)=>e.jsxs("div",{className:"flex items-center justify-between text-sm",children:[e.jsxs("div",{className:"flex items-center space-x-2 flex-1",children:[e.jsxs("span",{className:"text-xs text-gray-600",children:["#",m+1]}),e.jsx("span",{className:"text-xs",children:a.type}),e.jsxs("span",{className:"text-xs text-blue-600",children:["P",a.priority]})]}),e.jsx("button",{onClick:()=>f(a.id),className:"px-2 py-1 text-xs bg-red-600 text-white rounded hover:bg-red-700",children:"取消"})]},a.id)),s.queue.length>10&&e.jsxs("div",{className:"text-xs text-gray-500 text-center pt-2",children:["还有 ",s.queue.length-10," 个任务..."]})]})})]}),e.jsxs("div",{children:[e.jsxs("h4",{className:"font-medium text-gray-900 mb-2",children:["处理中任务 (",s.active.length,")"]}),e.jsx("div",{className:"bg-blue-50 p-4 rounded-md max-h-32 overflow-y-auto",children:s.active.length===0?e.jsx("div",{className:"text-sm text-gray-500 text-center py-2",children:"无处理中任务"}):e.jsx("div",{className:"space-y-1",children:s.active.map(a=>e.jsxs("div",{className:"flex items-center justify-between text-sm",children:[e.jsxs("div",{className:"flex items-center space-x-2 flex-1",children:[e.jsx("span",{className:"text-xs",children:a.type}),e.jsxs("span",{className:"text-xs text-blue-600",children:["P",a.priority]}),e.jsx("span",{className:"text-xs text-gray-600",children:a.workerId})]}),e.jsx("button",{onClick:()=>f(a.id),className:"px-2 py-1 text-xs bg-red-600 text-white rounded hover:bg-red-700",children:"取消"})]},a.id))})})]}),e.jsxs("div",{children:[e.jsxs("h4",{className:"font-medium text-gray-900 mb-2",children:["最近完成 (",s.completed.length,")"]}),e.jsx("div",{className:"bg-gray-50 p-4 rounded-md max-h-40 overflow-y-auto",children:s.completed.length===0?e.jsx("div",{className:"text-sm text-gray-500 text-center py-2",children:"暂无完成任务"}):e.jsx("div",{className:"space-y-1",children:s.completed.slice(-10).reverse().map(a=>e.jsxs("div",{className:"flex items-center justify-between text-sm",children:[e.jsxs("div",{className:"flex items-center space-x-2 flex-1",children:[e.jsx("span",{className:`px-2 py-1 text-xs rounded ${W(a.status)} ${N(a.status)}`,children:a.status}),e.jsx("span",{className:"text-xs",children:a.type}),e.jsxs("span",{className:"text-xs text-blue-600",children:["P",a.priority]})]}),e.jsx("span",{className:"text-xs text-gray-500",children:a.duration?`${a.duration}ms`:"-"})]},a.id))})})]})]})]})]})})},z=()=>{const n={title:"工作线程管理器实现",language:"typescript",code:`// 工作线程管理器
class WorkerManager {
  private config: WorkerConfig;
  private workers: Map<string, WorkerState> = new Map();
  private taskQueue: WorkerTask[] = [];
  private activeTasks: Map<string, WorkerTask> = new Map();
  private completedTasks: WorkerTask[] = [];

  constructor(config: Partial<WorkerConfig> = {}) {
    this.config = {
      maxWorkers: 4,
      taskTimeout: 30000,
      retryDelay: 1000,
      maxQueueSize: 100,
      enablePriority: true,
      enableRetry: true,
      ...config
    };

    this.initializeWorkers();
    this.startProcessing();
  }

  // 添加任务
  async addTask(
    type: string,
    data: any,
    priority: number = 5,
    timeout?: number,
    maxRetries: number = 2
  ): Promise<string> {
    if (this.taskQueue.length >= this.config.maxQueueSize) {
      throw new Error('Task queue is full');
    }

    const task: WorkerTask = {
      id: this.generateId(),
      type, data, priority,
      timeout: timeout || this.config.taskTimeout,
      retryCount: 0, maxRetries,
      status: 'pending'
    };

    this.taskQueue.push(task);

    if (this.config.enablePriority) {
      this.sortTaskQueue();
    }

    return task.id;
  }

  // 处理任务队列
  private async processTaskQueue(): Promise<void> {
    if (this.taskQueue.length === 0) return;

    // 找到空闲的工作线程
    const idleWorker = Array.from(this.workers.values())
      .find(worker => worker.status === 'idle');

    if (!idleWorker) return;

    // 获取下一个任务
    const task = this.taskQueue.shift();
    if (!task) return;

    // 分配任务给工作线程
    await this.assignTaskToWorker(task, idleWorker);
  }

  // 分配任务给工作线程
  private async assignTaskToWorker(task: WorkerTask, worker: WorkerState): Promise<void> {
    task.status = 'processing';
    task.startTime = Date.now();
    task.workerId = worker.id;

    worker.status = 'busy';
    worker.currentTask = task.id;

    this.activeTasks.set(task.id, task);

    try {
      // 设置超时
      const timeoutPromise = new Promise((_, reject) => {
        setTimeout(() => reject(new Error('Task timeout')), task.timeout);
      });

      // 处理任务
      const resultPromise = TaskProcessor.processTask(task);
      const result = await Promise.race([resultPromise, timeoutPromise]);

      // 任务成功完成
      task.status = 'completed';
      task.result = result;
      task.endTime = Date.now();
      task.duration = task.endTime - task.startTime!;

      worker.tasksCompleted++;
    } catch (error) {
      // 检查是否需要重试
      if (this.config.enableRetry && task.retryCount < task.maxRetries) {
        task.retryCount++;
        task.status = 'pending';

        // 延迟后重新加入队列
        setTimeout(() => {
          this.taskQueue.unshift(task);
          this.sortTaskQueue();
        }, this.config.retryDelay * Math.pow(2, task.retryCount - 1));
      } else {
        // 标记为失败
        task.status = 'failed';
        task.error = error instanceof Error ? error.message : 'Unknown error';
        worker.tasksError++;
      }
    } finally {
      // 释放工作线程
      worker.status = 'idle';
      worker.currentTask = undefined;

      if (task.status !== 'pending') {
        this.activeTasks.delete(task.id);
        this.completedTasks.push(task);
      }
    }
  }
}`,highlights:[20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45,46,47,48,49,50,51,52,53,54,55,56,57,58,59,60,61,62,63,64,65,66,67,68,69,70,71,72,73,74,75,76,77,78,79,80,81,82,83,84,85,86,87,88,89,90,91,92,93,94,95,96,97,98,99,100]};return e.jsx(D,{title:"请求工作线程",description:"实现多线程任务处理，支持任务调度、优先级管理和并行执行。",overview:e.jsxs("div",{className:"space-y-4",children:[e.jsxs("div",{className:"bg-blue-50 p-6 rounded-lg",children:[e.jsx("h3",{className:"text-lg font-semibold text-blue-900 mb-3",children:"🔍 核心概念"}),e.jsxs("ul",{className:"space-y-2 text-blue-800",children:[e.jsxs("li",{children:[e.jsx("strong",{children:"工作线程:"})," 独立的执行环境，可并行处理任务"]}),e.jsxs("li",{children:[e.jsx("strong",{children:"任务调度:"})," 智能分配任务给可用的工作线程"]}),e.jsxs("li",{children:[e.jsx("strong",{children:"优先级管理:"})," 根据任务重要性安排执行顺序"]}),e.jsxs("li",{children:[e.jsx("strong",{children:"并行执行:"})," 多个任务同时在不同线程中执行"]})]})]}),e.jsxs("div",{className:"bg-green-50 p-6 rounded-lg",children:[e.jsx("h3",{className:"text-lg font-semibold text-green-900 mb-3",children:"✨ 主要优势"}),e.jsxs("ul",{className:"space-y-2 text-green-800",children:[e.jsxs("li",{children:[e.jsx("strong",{children:"性能提升:"})," 充分利用多核CPU的并行处理能力"]}),e.jsxs("li",{children:[e.jsx("strong",{children:"响应性:"})," 避免主线程阻塞，保持UI响应"]}),e.jsxs("li",{children:[e.jsx("strong",{children:"资源利用:"})," 合理分配计算资源，提高效率"]}),e.jsxs("li",{children:[e.jsx("strong",{children:"任务隔离:"})," 任务间相互独立，错误不会传播"]})]})]}),e.jsxs("div",{className:"bg-yellow-50 p-6 rounded-lg",children:[e.jsx("h3",{className:"text-lg font-semibold text-yellow-900 mb-3",children:"🎯 适用场景"}),e.jsxs("ul",{className:"space-y-2 text-yellow-800",children:[e.jsxs("li",{children:[e.jsx("strong",{children:"计算密集:"})," 大量数值计算或数据处理任务"]}),e.jsxs("li",{children:[e.jsx("strong",{children:"图像处理:"})," 图片压缩、滤镜、格式转换等"]}),e.jsxs("li",{children:[e.jsx("strong",{children:"数据分析:"})," 大数据集的统计分析和处理"]}),e.jsxs("li",{children:[e.jsx("strong",{children:"批量操作:"})," 文件处理、数据导入导出等"]})]})]}),e.jsxs("div",{className:"bg-red-50 p-6 rounded-lg",children:[e.jsx("h3",{className:"text-lg font-semibold text-red-900 mb-3",children:"⚠️ 注意事项"}),e.jsxs("ul",{className:"space-y-2 text-red-800",children:[e.jsxs("li",{children:[e.jsx("strong",{children:"线程数量:"})," 根据CPU核心数合理设置工作线程数"]}),e.jsxs("li",{children:[e.jsx("strong",{children:"内存管理:"})," 注意任务数据的内存占用"]}),e.jsxs("li",{children:[e.jsx("strong",{children:"错误处理:"})," 妥善处理工作线程中的异常"]}),e.jsxs("li",{children:[e.jsx("strong",{children:"数据传输:"})," 考虑主线程与工作线程间的数据传输开销"]})]})]})]}),examples:[{title:"工作线程管理演示",component:e.jsx(I,{}),description:"演示工作线程管理器的功能，包括任务分配、优先级调度、并行执行和状态监控。",observationPoints:["工作线程会自动处理队列中的任务","高优先级任务会优先被分配","多个任务可以并行执行","失败的任务会自动重试","实时显示工作线程的状态"],keyPoints:["工作线程管理器自动调度任务执行","支持多种类型的任务处理","实现了完整的重试和错误处理机制","提供详细的执行统计和监控","支持任务的动态取消和清理"],commonTraps:["工作线程数量设置不当影响性能","任务数据过大导致传输开销","没有合理的超时和重试机制","忽略工作线程的错误处理"],solutions:["根据CPU核心数设置合理的线程数","优化任务数据结构减少传输开销","实现指数退避的重试策略","添加完整的异常处理和恢复机制"],codeExample:n}],tutorial:{concepts:["工作线程提供独立的JavaScript执行环境","任务调度器负责分配任务给可用线程","优先级队列确保重要任务优先处理","并行执行充分利用多核CPU性能","错误隔离防止单个任务影响整体系统"],steps:["设计任务和工作线程的数据结构","实现任务处理器和调度逻辑","创建工作线程管理器","实现任务队列和优先级排序","添加任务分配和执行机制","实现超时和重试处理","添加统计和监控功能","处理异常和错误情况","优化性能和资源使用","测试各种并发场景"],tips:["根据设备性能调整工作线程数量","合理设计任务数据结构减少传输开销","实现任务的优先级和超时机制","监控工作线程的健康状态","提供任务执行的进度反馈","考虑实现任务的暂停和恢复功能"]},interview:{questions:[{question:"什么是Web Worker？它解决了什么问题？",answer:"Web Worker是浏览器提供的多线程API，允许在后台线程中执行JavaScript代码。解决的问题：1) 主线程阻塞：避免计算密集任务阻塞UI；2) 并行处理：充分利用多核CPU性能；3) 响应性：保持用户界面的流畅性；4) 任务隔离：错误不会影响主线程；5) 资源利用：合理分配计算资源。Web Worker通过消息传递与主线程通信，实现真正的并行执行。"},{question:"如何设计一个高效的任务调度系统？",answer:"高效任务调度系统的设计要点：1) 调度策略：优先级调度、公平调度、轮询调度；2) 负载均衡：任务均匀分配给工作线程；3) 资源管理：动态调整线程数量和资源分配；4) 队列管理：支持优先级队列和批处理；5) 错误处理：重试机制、故障转移、错误隔离；6) 监控统计：任务执行时间、成功率、资源使用；7) 性能优化：任务预处理、结果缓存、批量操作。"},{question:"工作线程中的任务优先级如何实现？",answer:"任务优先级的实现方式：1) 优先级队列：使用堆或有序数组维护任务顺序；2) 多级队列：不同优先级使用不同队列；3) 动态优先级：根据等待时间和重要性动态调整；4) 抢占式调度：高优先级任务可以中断低优先级任务；5) 时间片轮转：同优先级任务轮流执行；6) 权重分配：根据优先级分配不同的执行时间；7) 饥饿预防：确保低优先级任务也能得到执行机会。"},{question:"如何处理工作线程中的错误和异常？",answer:"工作线程错误处理策略：1) 错误捕获：try-catch包装任务执行代码；2) 错误分类：区分网络错误、计算错误、系统错误；3) 重试机制：指数退避、最大重试次数、重试条件；4) 故障转移：任务重新分配给其他线程；5) 错误上报：记录错误日志、发送错误通知；6) 线程恢复：重启异常线程、清理资源；7) 降级策略：返回默认值或缓存结果；8) 监控告警：错误率监控、性能指标跟踪。"}],keyPoints:["工作线程是实现并行计算的重要技术","任务调度器是工作线程系统的核心","优先级管理确保重要任务优先处理","错误处理和重试机制提高系统可靠性","性能监控帮助优化系统效率","合理的线程数量设置直接影响性能"]},bestPractices:{dos:["根据CPU核心数合理设置工作线程数量","实现完整的任务生命周期管理","使用优先级队列管理任务执行顺序","添加超时和重试机制提高可靠性","监控工作线程的状态和性能","优化任务数据结构减少传输开销","实现错误隔离和恢复机制","提供任务执行的进度反馈"],donts:["不要创建过多的工作线程消耗资源","不要在工作线程间传输大量数据","不要忽略工作线程的错误处理","不要在所有场景使用相同的调度策略","不要忘记清理已完成的任务","不要缺少任务执行的超时控制","不要忽略工作线程的生命周期管理","不要在移动设备上使用过多线程"],patterns:["生产者-消费者模式：任务生产和消费分离","工作池模式：固定数量的工作线程处理任务","管道模式：任务按阶段在不同线程中处理","分治模式：大任务分解为小任务并行处理","主从模式：主线程调度，从线程执行","发布-订阅模式：任务状态变化的通知","状态机模式：管理任务的状态转换","策略模式：不同类型任务的处理策略"]}})};export{z as default};
