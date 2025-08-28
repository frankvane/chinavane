var f=Object.defineProperty;var N=(n,t,s)=>t in n?f(n,t,{enumerable:!0,configurable:!0,writable:!0,value:s}):n[t]=s;var v=(n,t,s)=>N(n,typeof t!="symbol"?t+"":t,s);import{j as e,r as y}from"./index-Bi_r7QuH.js";import{C as T}from"./ComponentTemplate-C5EWLtXX.js";var C=(n=>(n[n.LOW=1]="LOW",n[n.NORMAL=2]="NORMAL",n[n.HIGH=3]="HIGH",n[n.URGENT=4]="URGENT",n))(C||{});class q{constructor(){v(this,"queue",[]);v(this,"running",new Map);v(this,"maxConcurrency",3);v(this,"taskIdCounter",0)}addRequest(t,s={},a=2){return new Promise((r,d)=>{const i=new AbortController,u={id:`task-${++this.taskIdCounter}`,url:t,options:{...s,signal:i.signal},priority:a,timestamp:Date.now(),resolve:r,reject:d,controller:i};this.insertTask(u),this.processQueue()})}insertTask(t){let s=this.queue.length;for(let a=0;a<this.queue.length;a++){const r=this.queue[a];if(t.priority>r.priority||t.priority===r.priority&&t.timestamp<r.timestamp){s=a;break}}this.queue.splice(s,0,t)}async processQueue(){for(;this.queue.length>0&&this.running.size<this.maxConcurrency;){const t=this.queue.shift();this.running.set(t.id,t),this.executeTask(t).finally(()=>{this.running.delete(t.id),setTimeout(()=>this.processQueue(),0)})}}async executeTask(t){try{const s=await fetch(t.url,t.options);t.resolve(s)}catch(s){t.reject(s)}}cancelByPriority(t){let s=0;return this.queue=this.queue.filter(a=>a.priority===t?(a.controller.abort(),a.reject(new Error("Request canceled by priority")),s++,!1):!0),this.running.forEach((a,r)=>{a.priority===t&&(a.controller.abort(),a.reject(new Error("Request canceled by priority")),this.running.delete(r),s++)}),s}getQueueStatus(){const t={1:0,2:0,3:0,4:0};return this.queue.forEach(s=>{t[s.priority]++}),{queueLength:this.queue.length,runningCount:this.running.size,priorityCount:t,maxConcurrency:this.maxConcurrency}}setMaxConcurrency(t){this.maxConcurrency=t,this.processQueue()}clearQueue(){const t=this.queue.length;return this.queue.forEach(s=>{s.controller.abort(),s.reject(new Error("Queue cleared"))}),this.queue=[],t}}const c=new q,S=()=>{var k,b,p,g;const[n,t]=y.useState([]),[s,a]=y.useState({}),r=l=>{t(h=>[...h.slice(-9),`${new Date().toLocaleTimeString()}: ${l}`])},d=()=>{a(c.getQueueStatus())},i=async(l,h)=>{const x=C[l];r(`添加${h}请求 (优先级: ${x})`);try{const j=await c.addRequest(`https://jsonplaceholder.typicode.com/posts/${Math.floor(Math.random()*100)+1}`,{method:"GET"},l);r(`${h}请求完成 (优先级: ${x})`)}catch(j){j.name==="AbortError"||j.message.includes("canceled")?r(`${h}请求被取消 (优先级: ${x})`):r(`${h}请求失败 (优先级: ${x})`)}d()},u=l=>{const h=C[l],x=c.cancelByPriority(l);r(`取消${h}优先级请求，共取消 ${x} 个`),d()};return y.useEffect(()=>{const l=setInterval(d,500);return()=>clearInterval(l)},[]),e.jsxs("div",{className:"space-y-4",children:[e.jsxs("div",{className:"grid grid-cols-2 gap-4",children:[e.jsxs("div",{className:"space-y-2",children:[e.jsx("h4",{className:"font-medium",children:"添加请求"}),e.jsxs("div",{className:"space-y-2",children:[e.jsx("button",{onClick:()=>i(1,"低优先级"),className:"w-full px-3 py-1 bg-gray-500 text-white rounded hover:bg-gray-600",children:"添加低优先级请求"}),e.jsx("button",{onClick:()=>i(2,"普通"),className:"w-full px-3 py-1 bg-blue-500 text-white rounded hover:bg-blue-600",children:"添加普通请求"}),e.jsx("button",{onClick:()=>i(3,"高优先级"),className:"w-full px-3 py-1 bg-orange-500 text-white rounded hover:bg-orange-600",children:"添加高优先级请求"}),e.jsx("button",{onClick:()=>i(4,"紧急"),className:"w-full px-3 py-1 bg-red-500 text-white rounded hover:bg-red-600",children:"添加紧急请求"})]})]}),e.jsxs("div",{className:"space-y-2",children:[e.jsx("h4",{className:"font-medium",children:"取消请求"}),e.jsxs("div",{className:"space-y-2",children:[e.jsx("button",{onClick:()=>u(1),className:"w-full px-3 py-1 bg-gray-600 text-white rounded hover:bg-gray-700",children:"取消低优先级"}),e.jsx("button",{onClick:()=>u(2),className:"w-full px-3 py-1 bg-blue-600 text-white rounded hover:bg-blue-700",children:"取消普通请求"}),e.jsx("button",{onClick:()=>u(3),className:"w-full px-3 py-1 bg-orange-600 text-white rounded hover:bg-orange-700",children:"取消高优先级"}),e.jsx("button",{onClick:()=>u(4),className:"w-full px-3 py-1 bg-red-600 text-white rounded hover:bg-red-700",children:"取消紧急请求"})]})]})]}),e.jsxs("div",{className:"bg-blue-50 p-3 rounded",children:[e.jsx("h4",{className:"font-medium mb-2",children:"队列状态"}),e.jsxs("div",{className:"grid grid-cols-2 gap-4 text-sm",children:[e.jsxs("div",{children:[e.jsxs("div",{children:["队列长度: ",s.queueLength||0]}),e.jsxs("div",{children:["运行中: ",s.runningCount||0]}),e.jsxs("div",{children:["最大并发: ",s.maxConcurrency||3]})]}),e.jsxs("div",{children:[e.jsxs("div",{children:["紧急: ",((k=s.priorityCount)==null?void 0:k[4])||0]}),e.jsxs("div",{children:["高优先级: ",((b=s.priorityCount)==null?void 0:b[3])||0]}),e.jsxs("div",{children:["普通: ",((p=s.priorityCount)==null?void 0:p[2])||0]}),e.jsxs("div",{children:["低优先级: ",((g=s.priorityCount)==null?void 0:g[1])||0]})]})]})]}),e.jsxs("div",{className:"bg-gray-50 p-3 rounded max-h-40 overflow-y-auto",children:[e.jsx("h4",{className:"font-medium mb-2",children:"请求日志"}),n.map((l,h)=>e.jsx("div",{className:"text-sm text-gray-700",children:l},h))]})]})},L=()=>{var l,h,x,j;const[n,t]=y.useState([]),[s,a]=y.useState({}),[r,d]=y.useState(3),i=o=>{t(m=>[...m.slice(-9),`${new Date().toLocaleTimeString()}: ${o}`])},u=()=>{a(c.getQueueStatus())},k=()=>{i("模拟用户操作：添加紧急请求"),Array.from({length:3},(o,m)=>c.addRequest(`https://jsonplaceholder.typicode.com/posts/${m+1}`,{method:"GET"},4).then(()=>i(`用户操作请求 ${m+1} 完成`)).catch(()=>i(`用户操作请求 ${m+1} 失败`))),u()},b=()=>{i("模拟后台任务：添加低优先级请求"),Array.from({length:5},(o,m)=>c.addRequest(`https://jsonplaceholder.typicode.com/posts/${m+10}`,{method:"GET"},1).then(()=>i(`后台任务 ${m+1} 完成`)).catch(()=>i(`后台任务 ${m+1} 失败`))),u()},p=o=>{d(o),c.setMaxConcurrency(o),i(`调整并发数为: ${o}`),u()},g=()=>{const o=c.clearQueue();i(`清空队列，取消 ${o} 个请求`),u()};return y.useEffect(()=>{const o=setInterval(u,500);return()=>clearInterval(o)},[]),e.jsxs("div",{className:"space-y-4",children:[e.jsxs("div",{className:"grid grid-cols-2 gap-4",children:[e.jsxs("div",{className:"space-y-2",children:[e.jsx("h4",{className:"font-medium",children:"场景模拟"}),e.jsx("button",{onClick:k,className:"w-full px-3 py-1 bg-red-500 text-white rounded hover:bg-red-600",children:"用户操作 (紧急)"}),e.jsx("button",{onClick:b,className:"w-full px-3 py-1 bg-gray-500 text-white rounded hover:bg-gray-600",children:"后台任务 (低优先级)"}),e.jsx("button",{onClick:g,className:"w-full px-3 py-1 bg-red-600 text-white rounded hover:bg-red-700",children:"清空队列"})]}),e.jsxs("div",{className:"space-y-2",children:[e.jsx("h4",{className:"font-medium",children:"并发控制"}),e.jsxs("div",{className:"space-y-2",children:[e.jsxs("div",{className:"text-sm text-gray-600",children:["当前并发数: ",r]}),e.jsx("div",{className:"flex gap-1",children:[1,2,3,5].map(o=>e.jsx("button",{onClick:()=>p(o),className:`px-2 py-1 rounded text-sm ${r===o?"bg-blue-500 text-white":"bg-gray-200 text-gray-700 hover:bg-gray-300"}`,children:o},o))})]})]})]}),e.jsxs("div",{className:"bg-green-50 p-3 rounded",children:[e.jsx("h4",{className:"font-medium mb-2",children:"队列状态"}),e.jsxs("div",{className:"grid grid-cols-3 gap-4 text-sm",children:[e.jsxs("div",{children:[e.jsxs("div",{children:["队列: ",s.queueLength||0]}),e.jsxs("div",{children:["运行: ",s.runningCount||0]})]}),e.jsxs("div",{children:[e.jsxs("div",{children:["紧急: ",((l=s.priorityCount)==null?void 0:l[4])||0]}),e.jsxs("div",{children:["高: ",((h=s.priorityCount)==null?void 0:h[3])||0]})]}),e.jsxs("div",{children:[e.jsxs("div",{children:["普通: ",((x=s.priorityCount)==null?void 0:x[2])||0]}),e.jsxs("div",{children:["低: ",((j=s.priorityCount)==null?void 0:j[1])||0]})]})]})]}),e.jsxs("div",{className:"bg-gray-50 p-3 rounded max-h-40 overflow-y-auto",children:[e.jsx("h4",{className:"font-medium mb-2",children:"操作日志"}),n.map((o,m)=>e.jsx("div",{className:"text-sm text-gray-700",children:o},m))]})]})},w=()=>{const[n,t]=y.useState([]),[s,a]=y.useState({}),r=p=>{t(g=>[...g.slice(-9),`${new Date().toLocaleTimeString()}: ${p}`])},d=()=>{a(c.getQueueStatus())},i=()=>{r("页面加载：关键资源优先"),c.addRequest("https://jsonplaceholder.typicode.com/users/1",{method:"GET"},4).then(()=>r("用户信息加载完成 (紧急)")).catch(()=>r("用户信息加载失败")),c.addRequest("https://jsonplaceholder.typicode.com/posts/1",{method:"GET"},3).then(()=>r("页面内容加载完成 (高)")).catch(()=>r("页面内容加载失败")),c.addRequest("https://jsonplaceholder.typicode.com/comments?postId=1",{method:"GET"},2).then(()=>r("评论加载完成 (普通)")).catch(()=>r("评论加载失败")),d()},u=()=>{r("用户交互：立即响应"),c.addRequest("https://jsonplaceholder.typicode.com/posts/2",{method:"GET"},4).then(()=>r("用户点击响应完成 (紧急)")).catch(()=>r("用户点击响应失败")),d()},k=()=>{r("数据分析：后台处理"),Array.from({length:3},(p,g)=>c.addRequest(`https://jsonplaceholder.typicode.com/albums/${g+1}`,{method:"GET"},1).then(()=>r(`分析任务 ${g+1} 完成 (低)`)).catch(()=>r(`分析任务 ${g+1} 失败`))),d()},b=()=>{r("搜索请求：高优先级"),c.addRequest("https://jsonplaceholder.typicode.com/posts?q=search",{method:"GET"},3).then(()=>r("搜索结果加载完成 (高)")).catch(()=>r("搜索请求失败")),d()};return y.useEffect(()=>{const p=setInterval(d,500);return()=>clearInterval(p)},[]),e.jsxs("div",{className:"space-y-4",children:[e.jsxs("div",{className:"grid grid-cols-2 gap-4",children:[e.jsxs("div",{className:"space-y-2",children:[e.jsx("h4",{className:"font-medium",children:"页面场景"}),e.jsx("button",{onClick:i,className:"w-full px-3 py-1 bg-blue-500 text-white rounded hover:bg-blue-600",children:"页面加载"}),e.jsx("button",{onClick:u,className:"w-full px-3 py-1 bg-red-500 text-white rounded hover:bg-red-600",children:"用户交互"})]}),e.jsxs("div",{className:"space-y-2",children:[e.jsx("h4",{className:"font-medium",children:"后台场景"}),e.jsx("button",{onClick:b,className:"w-full px-3 py-1 bg-orange-500 text-white rounded hover:bg-orange-600",children:"搜索请求"}),e.jsx("button",{onClick:k,className:"w-full px-3 py-1 bg-gray-500 text-white rounded hover:bg-gray-600",children:"数据分析"})]})]}),e.jsxs("div",{className:"bg-purple-50 p-3 rounded",children:[e.jsx("h4",{className:"font-medium mb-2",children:"优先级说明"}),e.jsxs("div",{className:"grid grid-cols-2 gap-4 text-sm",children:[e.jsxs("div",{children:[e.jsxs("div",{className:"flex items-center gap-2",children:[e.jsx("div",{className:"w-3 h-3 bg-red-500 rounded"}),e.jsx("span",{children:"紧急：用户交互、关键资源"})]}),e.jsxs("div",{className:"flex items-center gap-2",children:[e.jsx("div",{className:"w-3 h-3 bg-orange-500 rounded"}),e.jsx("span",{children:"高：搜索、页面内容"})]})]}),e.jsxs("div",{children:[e.jsxs("div",{className:"flex items-center gap-2",children:[e.jsx("div",{className:"w-3 h-3 bg-blue-500 rounded"}),e.jsx("span",{children:"普通：次要内容、评论"})]}),e.jsxs("div",{className:"flex items-center gap-2",children:[e.jsx("div",{className:"w-3 h-3 bg-gray-500 rounded"}),e.jsx("span",{children:"低：分析、统计、预加载"})]})]})]})]}),e.jsxs("div",{className:"bg-gray-50 p-3 rounded max-h-40 overflow-y-auto",children:[e.jsx("h4",{className:"font-medium mb-2",children:"场景日志"}),n.map((p,g)=>e.jsx("div",{className:"text-sm text-gray-700",children:p},g))]})]})},P=()=>e.jsx(T,{title:"请求优先级",description:"通过优先级调度机制，确保重要请求优先执行，提升用户体验",overview:e.jsxs("div",{className:"space-y-4",children:[e.jsxs("div",{children:[e.jsx("h3",{className:"text-lg font-semibold mb-2",children:"核心概念"}),e.jsxs("ul",{className:"list-disc list-inside space-y-1 text-gray-700",children:[e.jsxs("li",{children:[e.jsx("strong",{children:"优先级队列"}),"：按优先级和时间顺序管理请求"]}),e.jsxs("li",{children:[e.jsx("strong",{children:"动态调度"}),"：高优先级请求可以插队执行"]}),e.jsxs("li",{children:[e.jsx("strong",{children:"并发控制"}),"：限制同时执行的请求数量"]}),e.jsxs("li",{children:[e.jsx("strong",{children:"智能取消"}),"：可按优先级批量取消请求"]})]})]}),e.jsxs("div",{children:[e.jsx("h3",{className:"text-lg font-semibold mb-2",children:"优先级分类"}),e.jsxs("ul",{className:"list-disc list-inside space-y-1 text-gray-700",children:[e.jsxs("li",{children:[e.jsx("strong",{children:"紧急 (URGENT)"}),"：用户交互、关键业务操作"]}),e.jsxs("li",{children:[e.jsx("strong",{children:"高 (HIGH)"}),"：搜索、页面主要内容加载"]}),e.jsxs("li",{children:[e.jsx("strong",{children:"普通 (NORMAL)"}),"：一般内容、次要功能"]}),e.jsxs("li",{children:[e.jsx("strong",{children:"低 (LOW)"}),"：分析统计、预加载、后台任务"]})]})]}),e.jsxs("div",{children:[e.jsx("h3",{className:"text-lg font-semibold mb-2",children:"主要优势"}),e.jsxs("ul",{className:"list-disc list-inside space-y-1 text-gray-700",children:[e.jsx("li",{children:"提升关键操作的响应速度"}),e.jsx("li",{children:"合理分配网络资源和带宽"}),e.jsx("li",{children:"改善用户感知性能"}),e.jsx("li",{children:"支持复杂业务场景的需求"})]})]}),e.jsxs("div",{children:[e.jsx("h3",{className:"text-lg font-semibold mb-2",children:"适用场景"}),e.jsxs("ul",{className:"list-disc list-inside space-y-1 text-gray-700",children:[e.jsx("li",{children:"页面加载时的资源优先级管理"}),e.jsx("li",{children:"用户交互的即时响应需求"}),e.jsx("li",{children:"后台任务与前台操作的协调"}),e.jsx("li",{children:"网络条件受限时的资源调度"})]})]})]}),examples:[{title:"基础优先级管理",component:e.jsx(S,{}),description:"演示不同优先级请求的调度和管理",codeExample:{title:"基础优先级队列管理器实现",code:`// 优先级枚举定义
enum Priority {
  LOW = 1,
  NORMAL = 2,
  HIGH = 3,
  URGENT = 4,
}

// 请求任务接口
interface RequestTask {
  id: string;
  url: string;
  options: RequestInit;
  priority: Priority;
  timestamp: number;
  resolve: (value: Response) => void;
  reject: (reason: any) => void;
  controller: AbortController;
}

// 优先级队列管理器
class PriorityQueueManager {
  private queue: RequestTask[] = [];
  private running: Map<string, RequestTask> = new Map();
  private maxConcurrency: number = 3;
  private taskIdCounter: number = 0;

  // 添加请求到优先级队列
  addRequest(
    url: string,
    options: RequestInit = {},
    priority: Priority = Priority.NORMAL
  ): Promise<Response> {
    return new Promise((resolve, reject) => {
      const controller = new AbortController();
      const task: RequestTask = {
        id: \`task-\${++this.taskIdCounter}\`,
        url,
        options: { ...options, signal: controller.signal },
        priority,
        timestamp: Date.now(),
        resolve,
        reject,
        controller,
      };

      this.insertTask(task);
      this.processQueue();
    });
  }

  // 按优先级插入任务
  private insertTask(newTask: RequestTask) {
    let insertIndex = this.queue.length;
    
    // 找到正确的插入位置（优先级高的在前，相同优先级按时间排序）
    for (let i = 0; i < this.queue.length; i++) {
      const existingTask = this.queue[i];
      
      if (newTask.priority > existingTask.priority || 
          (newTask.priority === existingTask.priority && 
           newTask.timestamp < existingTask.timestamp)) {
        insertIndex = i;
        break;
      }
    }
    
    this.queue.splice(insertIndex, 0, newTask);
  }

  // 处理队列
  private async processQueue() {
    while (this.queue.length > 0 && this.running.size < this.maxConcurrency) {
      const task = this.queue.shift()!;
      this.running.set(task.id, task);
      
      // 异步执行任务
      this.executeTask(task).finally(() => {
        this.running.delete(task.id);
        this.processQueue(); // 继续处理队列
      });
    }
  }

  // 执行单个任务
  private async executeTask(task: RequestTask) {
    try {
      const response = await fetch(task.url, task.options);
      task.resolve(response);
    } catch (error) {
      task.reject(error);
    }
  }

  // 按优先级取消请求
  cancelByPriority(priority: Priority): number {
    let canceledCount = 0;
    
    // 取消队列中的请求
    this.queue = this.queue.filter(task => {
      if (task.priority === priority) {
        task.controller.abort();
        task.reject(new Error('Request canceled by priority'));
        canceledCount++;
        return false;
      }
      return true;
    });
    
    // 取消运行中的请求
    this.running.forEach(task => {
      if (task.priority === priority) {
        task.controller.abort();
        canceledCount++;
      }
    });
    
    return canceledCount;
  }

  // 获取队列状态
  getQueueStatus() {
    const priorityCount = { [Priority.LOW]: 0, [Priority.NORMAL]: 0, [Priority.HIGH]: 0, [Priority.URGENT]: 0 };
    
    this.queue.forEach(task => {
      priorityCount[task.priority]++;
    });
    
    return {
      queueLength: this.queue.length,
      runningCount: this.running.size,
      priorityCount,
      maxConcurrency: this.maxConcurrency
    };
  }

  // 设置最大并发数
  setMaxConcurrency(max: number) {
    this.maxConcurrency = Math.max(1, max);
    this.processQueue();
  }

  // 清空队列
  clearQueue(): number {
    const canceledCount = this.queue.length;
    
    this.queue.forEach(task => {
      task.controller.abort();
      task.reject(new Error('Queue cleared'));
    });
    
    this.queue = [];
    return canceledCount;
  }
}

// 全局优先级管理器实例
const globalPriorityManager = new PriorityQueueManager();

// 使用示例
const handleAddRequest = (priority: Priority) => {
  globalPriorityManager.addRequest(
    'https://jsonplaceholder.typicode.com/posts/1',
    { method: 'GET' },
    priority
  ).then(() => {
    console.log(\`Priority \${priority} request completed\`);
  }).catch(error => {
    console.error(\`Priority \${priority} request failed:\`, error);
  });
};

// React组件中使用
const PriorityComponent: React.FC = () => {
  const [queueStatus, setQueueStatus] = useState<any>({});
  
  useEffect(() => {
    const interval = setInterval(() => {
      setQueueStatus(globalPriorityManager.getQueueStatus());
    }, 500);
    
    return () => clearInterval(interval);
  }, []);
  
  return (
    <div>
      <button onClick={() => handleAddRequest(Priority.URGENT)}>紧急请求</button>
      <button onClick={() => handleAddRequest(Priority.HIGH)}>高优先级</button>
      <button onClick={() => handleAddRequest(Priority.NORMAL)}>普通请求</button>
      <button onClick={() => handleAddRequest(Priority.LOW)}>低优先级</button>
      
      <div>队列状态: {queueStatus.queueLength || 0} 等待, {queueStatus.runningCount || 0} 运行中</div>
    </div>
  );
};`,language:"typescript",highlights:[2,9,16,23,29,34,47,51,56,65,68,75,85,90,105,113,125,133,140,147,154,161,168,175]},observationPoints:["高优先级请求会插队到队列前面","相同优先级按时间顺序执行","可以按优先级批量取消请求","队列状态实时显示各优先级的请求数量"],keyPoints:["优先级队列使用插入排序维护顺序","并发控制限制同时执行的请求数","取消操作只影响指定优先级的请求","状态监控提供详细的队列信息"],commonTraps:["优先级设置不合理导致饥饿问题","没有考虑请求的执行时间","并发数设置过高或过低"],solutions:["合理设计优先级分级策略","考虑请求的预估执行时间","根据网络条件动态调整并发数"],importantTips:["紧急请求会立即插队到队列最前面","低优先级请求可能会被延后执行","取消操作会影响队列中和运行中的请求"]},{title:"动态优先级调度",component:e.jsx(L,{}),description:"演示动态调整优先级和并发控制",codeExample:`// 动态优先级调度管理器
class DynamicPriorityScheduler {
  private priorityManager: PriorityQueueManager;
  private userActionQueue: string[] = [];
  private backgroundTasks: string[] = [];
  private schedulerLog: string[] = [];

  constructor() {
    this.priorityManager = new PriorityQueueManager();
  }

  // 处理用户操作（最高优先级）
  handleUserAction(actionType: string) {
    const timestamp = new Date().toLocaleTimeString();
    this.addLog(\`[\${timestamp}] 用户操作: \${actionType}\`);
    
    // 用户操作使用紧急优先级
    this.priorityManager.addRequest(
      \`https://jsonplaceholder.typicode.com/users/\${Math.floor(Math.random() * 10) + 1}\`,
      { method: 'GET' },
      Priority.URGENT
    ).then(() => {
      this.addLog(\`用户操作 \${actionType} 完成\`);
      this.userActionQueue.push(\`\${actionType} - 完成\`);
    }).catch(error => {
      this.addLog(\`用户操作 \${actionType} 失败: \${error.message}\`);
    });
  }

  // 启动后台任务（低优先级）
  startBackgroundTask(taskName: string) {
    const timestamp = new Date().toLocaleTimeString();
    this.addLog(\`[\${timestamp}] 后台任务: \${taskName}\`);
    
    // 后台任务使用低优先级
    this.priorityManager.addRequest(
      \`https://jsonplaceholder.typicode.com/posts/\${Math.floor(Math.random() * 100) + 1}\`,
      { method: 'GET' },
      Priority.LOW
    ).then(() => {
      this.addLog(\`后台任务 \${taskName} 完成\`);
      this.backgroundTasks.push(\`\${taskName} - 完成\`);
    }).catch(error => {
      if (error.name === 'AbortError') {
        this.addLog(\`后台任务 \${taskName} 被取消\`);
      } else {
        this.addLog(\`后台任务 \${taskName} 失败: \${error.message}\`);
      }
    });
  }

  // 动态调整并发数
  adjustConcurrency(newConcurrency: number) {
    const oldConcurrency = this.priorityManager.getQueueStatus().maxConcurrency;
    this.priorityManager.setMaxConcurrency(newConcurrency);
    
    this.addLog(\`并发数调整: \${oldConcurrency} -> \${newConcurrency}\`);
  }

  // 取消低优先级任务
  cancelLowPriorityTasks() {
    const canceledCount = this.priorityManager.cancelByPriority(Priority.LOW);
    this.addLog(\`取消了 \${canceledCount} 个低优先级任务\`);
    return canceledCount;
  }

  // 清空所有队列
  clearAllQueues() {
    const canceledCount = this.priorityManager.clearQueue();
    this.addLog(\`清空队列，取消了 \${canceledCount} 个任务\`);
    
    // 清空本地记录
    this.userActionQueue = [];
    this.backgroundTasks = [];
    
    return canceledCount;
  }

  // 获取调度器状态
  getSchedulerStatus() {
    const queueStatus = this.priorityManager.getQueueStatus();
    
    return {
      ...queueStatus,
      userActions: this.userActionQueue.slice(-5), // 最近5个用户操作
      backgroundTasks: this.backgroundTasks.slice(-5), // 最近5个后台任务
      logs: this.schedulerLog.slice(-8) // 最近8条日志
    };
  }

  // 添加日志
  private addLog(message: string) {
    this.schedulerLog.push(message);
    if (this.schedulerLog.length > 20) {
      this.schedulerLog.shift(); // 保持最新20条日志
    }
  }

  // 批量启动后台任务
  batchStartBackgroundTasks() {
    const tasks = ['数据同步', '缓存清理', '日志上传', '性能分析'];
    
    tasks.forEach((task, index) => {
      setTimeout(() => {
        this.startBackgroundTask(task);
      }, index * 200); // 间隔200ms启动
    });
    
    this.addLog(\`批量启动 \${tasks.length} 个后台任务\`);
  }
}

// 全局动态调度器实例
const dynamicScheduler = new DynamicPriorityScheduler();

// 模拟用户操作
const simulateUserActions = () => {
  const actions = ['点击按钮', '搜索查询', '页面跳转', '表单提交'];
  const randomAction = actions[Math.floor(Math.random() * actions.length)];
  
  dynamicScheduler.handleUserAction(randomAction);
};

// React组件中使用
const DynamicSchedulerComponent: React.FC = () => {
  const [schedulerStatus, setSchedulerStatus] = useState<any>({});
  const [concurrency, setConcurrency] = useState(3);
  
  useEffect(() => {
    const interval = setInterval(() => {
      setSchedulerStatus(dynamicScheduler.getSchedulerStatus());
    }, 500);
    
    return () => clearInterval(interval);
  }, []);
  
  const handleConcurrencyChange = (newValue: number) => {
    setConcurrency(newValue);
    dynamicScheduler.adjustConcurrency(newValue);
  };
  
  return (
    <div>
      <div>
        <button onClick={simulateUserActions}>模拟用户操作</button>
        <button onClick={() => dynamicScheduler.batchStartBackgroundTasks()}>
          启动后台任务
        </button>
        <button onClick={() => dynamicScheduler.cancelLowPriorityTasks()}>
          取消低优先级
        </button>
        <button onClick={() => dynamicScheduler.clearAllQueues()}>
          清空队列
        </button>
      </div>
      
      <div>
        <label>并发数: </label>
        <input 
          type="range" 
          min="1" 
          max="6" 
          value={concurrency}
          onChange={(e) => handleConcurrencyChange(Number(e.target.value))}
        />
        <span>{concurrency}</span>
      </div>
      
      <div>
        队列状态: {schedulerStatus.queueLength || 0} 等待, 
        {schedulerStatus.runningCount || 0} 运行中
      </div>
    </div>
  );
};`,highlights:[11,13,17,19,30,32,35,37,49,51,57,59,63,65,75,77,90,92],observationPoints:["用户操作会添加紧急优先级请求","后台任务使用低优先级避免影响用户体验","并发数可以动态调整影响执行速度","清空队列会取消所有等待中的请求"],keyPoints:["用户操作应该使用最高优先级","后台任务使用低优先级避免阻塞","并发数影响整体执行效率","队列管理支持批量操作"],commonTraps:["所有请求都设置为高优先级","并发数设置不当影响性能","没有区分用户操作和后台任务"],solutions:["严格按业务重要性设置优先级","根据设备性能调整并发数","明确区分前台和后台操作"],importantTips:["用户操作的紧急请求会立即执行","后台任务不会影响用户交互的响应","并发数调整会立即影响队列处理速度"]},{title:"实际应用场景",component:e.jsx(w,{}),description:"演示真实业务场景中的优先级应用",codeExample:{title:"真实业务场景优先级管理器实现",code:`// 真实业务场景优先级管理器
class RealWorldPriorityManager {
  private priorityManager: PriorityQueueManager;
  private pageLoadTasks: Array<{name: string, status: string}> = [];
  private userInteractions: Array<{action: string, timestamp: string}> = [];
  private backgroundAnalytics: Array<{task: string, status: string}> = [];
  private scenarioLog: string[] = [];

  constructor() {
    this.priorityManager = new PriorityQueueManager();
  }

  // 模拟页面加载场景
  simulatePageLoad() {
    this.addLog('开始页面加载场景');
    this.pageLoadTasks = [];
    
    // 1. 用户信息 - 紧急优先级（关键业务数据）
    this.loadResource('用户信息', Priority.URGENT, '/api/user/profile')
      .then(() => this.updateTaskStatus('用户信息', '完成'))
      .catch(() => this.updateTaskStatus('用户信息', '失败'));
    
    // 2. 页面主要内容 - 高优先级
    this.loadResource('页面内容', Priority.HIGH, '/api/page/content')
      .then(() => this.updateTaskStatus('页面内容', '完成'))
      .catch(() => this.updateTaskStatus('页面内容', '失败'));
    
    // 3. 次要内容 - 普通优先级
    this.loadResource('评论列表', Priority.NORMAL, '/api/comments')
      .then(() => this.updateTaskStatus('评论列表', '完成'))
      .catch(() => this.updateTaskStatus('评论列表', '失败'));
    
    // 4. 广告内容 - 低优先级
    this.loadResource('广告内容', Priority.LOW, '/api/ads')
      .then(() => this.updateTaskStatus('广告内容', '完成'))
      .catch(() => this.updateTaskStatus('广告内容', '失败'));
  }

  // 加载资源
  private loadResource(name: string, priority: Priority, endpoint: string) {
    this.pageLoadTasks.push({ name, status: '加载中' });
    
    return this.priorityManager.addRequest(
      \`https://jsonplaceholder.typicode.com\${endpoint.replace('/api', '')}\`,
      { method: 'GET' },
      priority
    );
  }

  // 更新任务状态
  private updateTaskStatus(taskName: string, status: string) {
    const task = this.pageLoadTasks.find(t => t.name === taskName);
    if (task) {
      task.status = status;
      this.addLog(\`\${taskName}: \${status}\`);
    }
  }

  // 处理用户交互
  handleUserInteraction(action: string) {
    const timestamp = new Date().toLocaleTimeString();
    this.addLog(\`用户交互: \${action}\`);
    
    this.userInteractions.unshift({ action, timestamp });
    if (this.userInteractions.length > 5) {
      this.userInteractions.pop();
    }
    
    // 用户交互使用紧急优先级
    this.priorityManager.addRequest(
      \`https://jsonplaceholder.typicode.com/posts/\${Math.floor(Math.random() * 10) + 1}\`,
      { method: 'GET' },
      Priority.URGENT
    ).then(() => {
      this.addLog(\`用户交互 \${action} 响应完成\`);
    }).catch(error => {
      this.addLog(\`用户交互 \${action} 响应失败\`);
    });
  }

  // 执行搜索请求
  performSearch(query: string) {
    this.addLog(\`搜索查询: \${query}\`);
    
    // 搜索使用高优先级保证用户体验
    this.priorityManager.addRequest(
      \`https://jsonplaceholder.typicode.com/posts?q=\${encodeURIComponent(query)}\`,
      { method: 'GET' },
      Priority.HIGH
    ).then(() => {
      this.addLog(\`搜索 "\${query}" 完成\`);
    }).catch(error => {
      this.addLog(\`搜索 "\${query}" 失败\`);
    });
  }

  // 启动数据分析任务
  startAnalyticsTasks() {
    const analyticsTasks = [
      { name: '用户行为分析', endpoint: '/analytics/behavior' },
      { name: '性能监控', endpoint: '/analytics/performance' },
      { name: '错误统计', endpoint: '/analytics/errors' },
      { name: '访问统计', endpoint: '/analytics/visits' }
    ];
    
    this.addLog('启动数据分析任务');
    this.backgroundAnalytics = [];
    
    analyticsTasks.forEach((task, index) => {
      this.backgroundAnalytics.push({ task: task.name, status: '等待中' });
      
      // 延迟启动，避免影响用户体验
      setTimeout(() => {
        this.backgroundAnalytics[index].status = '执行中';
        
        // 分析任务使用低优先级
        this.priorityManager.addRequest(
          \`https://jsonplaceholder.typicode.com/posts/\${index + 1}\`,
          { method: 'GET' },
          Priority.LOW
        ).then(() => {
          this.backgroundAnalytics[index].status = '完成';
          this.addLog(\`\${task.name} 分析完成\`);
        }).catch(error => {
          if (error.name === 'AbortError') {
            this.backgroundAnalytics[index].status = '已取消';
            this.addLog(\`\${task.name} 被取消\`);
          } else {
            this.backgroundAnalytics[index].status = '失败';
            this.addLog(\`\${task.name} 分析失败\`);
          }
        });
      }, index * 300); // 间隔300ms启动
    });
  }

  // 取消后台分析任务
  cancelAnalyticsTasks() {
    const canceledCount = this.priorityManager.cancelByPriority(Priority.LOW);
    this.addLog(\`取消了 \${canceledCount} 个分析任务\`);
    
    // 更新状态
    this.backgroundAnalytics.forEach(task => {
      if (task.status === '执行中' || task.status === '等待中') {
        task.status = '已取消';
      }
    });
    
    return canceledCount;
  }

  // 获取场景状态
  getScenarioStatus() {
    const queueStatus = this.priorityManager.getQueueStatus();
    
    return {
      ...queueStatus,
      pageLoadTasks: [...this.pageLoadTasks],
      userInteractions: [...this.userInteractions],
      backgroundAnalytics: [...this.backgroundAnalytics],
      logs: this.scenarioLog.slice(-6)
    };
  }

  // 添加日志
  private addLog(message: string) {
    const timestamp = new Date().toLocaleTimeString();
    this.scenarioLog.push(\`[\${timestamp}] \${message}\`);
    if (this.scenarioLog.length > 15) {
      this.scenarioLog.shift();
    }
  }

  // 重置场景
  resetScenario() {
    this.priorityManager.clearQueue();
    this.pageLoadTasks = [];
    this.userInteractions = [];
    this.backgroundAnalytics = [];
    this.scenarioLog = [];
    this.addLog('场景已重置');
  }
}

// 全局场景管理器实例
const realWorldManager = new RealWorldPriorityManager();

// React组件中使用
const RealWorldComponent: React.FC = () => {
  const [scenarioStatus, setScenarioStatus] = useState<any>({});
  
  useEffect(() => {
    const interval = setInterval(() => {
      setScenarioStatus(realWorldManager.getScenarioStatus());
    }, 500);
    
    return () => clearInterval(interval);
  }, []);
  
  const userActions = ['点击商品', '添加购物车', '查看详情', '收藏商品'];
  const searchQueries = ['手机', '笔记本', '耳机', '键盘'];
  
  return (
    <div>
      <div>
        <button onClick={() => realWorldManager.simulatePageLoad()}>
          模拟页面加载
        </button>
        <button onClick={() => {
          const randomAction = userActions[Math.floor(Math.random() * userActions.length)];
          realWorldManager.handleUserInteraction(randomAction);
        }}>
          用户交互
        </button>
        <button onClick={() => {
          const randomQuery = searchQueries[Math.floor(Math.random() * searchQueries.length)];
          realWorldManager.performSearch(randomQuery);
        }}>
          搜索请求
        </button>
        <button onClick={() => realWorldManager.startAnalyticsTasks()}>
          数据分析
        </button>
        <button onClick={() => realWorldManager.cancelAnalyticsTasks()}>
          取消分析
        </button>
        <button onClick={() => realWorldManager.resetScenario()}>
          重置场景
        </button>
      </div>
      
      <div>
        队列状态: {scenarioStatus.queueLength || 0} 等待, 
        {scenarioStatus.runningCount || 0} 运行中
      </div>
    </div>
  );
};`,language:"typescript",highlights:[2,9,13,18,24,28,33,39,47,53,59,67,72,78,85,91,97,103,109,115,121,127,133,139]},observationPoints:["页面加载时关键资源优先执行","用户交互获得最高优先级响应","搜索请求使用高优先级保证体验","数据分析使用低优先级后台执行"],keyPoints:["页面加载的资源有明确的优先级划分","用户交互需要立即响应","搜索等核心功能使用高优先级","分析统计等后台任务使用低优先级"],commonTraps:["所有页面资源使用相同优先级","后台任务优先级设置过高","没有考虑用户感知的重要性"],solutions:["根据资源重要性分级处理","后台任务使用最低优先级","优先保证用户可感知的操作"],importantTips:["页面加载时用户信息和内容会优先加载","用户点击操作会立即得到响应","数据分析任务在后台静默执行"]}],tutorial:{concepts:["优先级是请求调度的核心依据","队列使用堆或排序数组维护优先级顺序","并发控制限制同时执行的请求数量","动态调度允许高优先级请求插队","取消机制支持按优先级批量操作"],steps:["定义优先级枚举和请求任务接口","实现优先级队列的插入和排序逻辑","添加并发控制和任务执行机制","实现按优先级的取消和状态查询","集成到实际业务场景中使用"],tips:["优先级分级不宜过多，4-5级足够","考虑请求的业务重要性而非技术实现","并发数应根据设备性能和网络条件调整","避免低优先级请求长期饥饿","提供队列状态监控便于调试和优化"]},interview:{questions:[{question:"如何实现请求的优先级调度？",answer:"通过维护一个优先级队列，使用堆或排序数组结构。新请求根据优先级和时间戳插入到正确位置，执行时从队列头部取出最高优先级的请求。结合并发控制限制同时执行的请求数量。"},{question:"如何避免低优先级请求饥饿？",answer:"可以采用老化机制，随时间推移提升等待时间长的请求优先级；或者保证低优先级请求的最小执行比例；还可以设置超时机制，超时的低优先级请求自动提升优先级。"},{question:"优先级如何与其他请求管理机制结合？",answer:"优先级可以与缓存、去重、分组等机制结合。例如：高优先级请求可以绕过缓存直接执行；相同优先级的重复请求可以去重；同一分组内的请求可以使用相同优先级。"},{question:"如何设计合理的优先级分级？",answer:"应该基于业务重要性而非技术实现。通常分为4-5级：紧急（用户交互）、高（核心功能）、普通（一般内容）、低（后台任务）。每级应有明确的使用场景和判断标准。"}],keyPoints:["优先级调度是提升用户体验的重要手段","队列数据结构是实现优先级调度的基础","并发控制与优先级调度需要协调配合","避免饥饿问题是优先级系统的关键考虑","优先级设计应该基于业务价值而非技术复杂度"]},bestPractices:{dos:["根据业务重要性合理设置优先级","为用户交互操作设置最高优先级","后台任务使用低优先级避免阻塞","提供队列状态监控和调试信息","考虑网络条件动态调整并发数","实现防饥饿机制保护低优先级请求"],donts:["不要所有请求都使用高优先级","不要忽略低优先级请求的饥饿问题","不要设置过多的优先级分级","不要忽略并发数对性能的影响","不要在优先级设计中混入技术因素"],patterns:["用户优先模式：用户操作始终获得最高优先级","分层加载模式：页面资源按重要性分级加载","后台静默模式：分析统计等任务使用最低优先级","动态调整模式：根据网络状况调整优先级策略","时间衰减模式：等待时间长的请求逐步提升优先级"]}});export{P as default};
