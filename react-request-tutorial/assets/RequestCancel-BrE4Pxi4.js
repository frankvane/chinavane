var w=Object.defineProperty;var A=(a,s,r)=>s in a?w(a,s,{enumerable:!0,configurable:!0,writable:!0,value:r}):a[s]=r;var R=(a,s,r)=>A(a,typeof s!="symbol"?s+"":s,r);import{j as e,r as i}from"./index-Cnne2xOM.js";import{C as I}from"./ComponentTemplate-iqsAHbUA.js";import{a as j}from"./index-NIGUFBhG.js";class S{constructor(){R(this,"activeRequests",new Map);R(this,"requestCounter",0)}createRequest(s){const r=s||`request_${++this.requestCounter}`,n=new AbortController;return this.activeRequests.set(r,n),{requestId:r,abortController:n}}cancelRequest(s){const r=this.activeRequests.get(s);return r?(r.abort(),this.activeRequests.delete(s),!0):!1}cancelAllRequests(){const s=this.activeRequests.size;return this.activeRequests.forEach(r=>r.abort()),this.activeRequests.clear(),s}completeRequest(s){this.activeRequests.delete(s)}getActiveRequestCount(){return this.activeRequests.size}getActiveRequestIds(){return Array.from(this.activeRequests.keys())}}const d=new S,C=async(a,s,r=0)=>{const{requestId:n,abortController:u}=d.createRequest(s);try{r>0&&await new Promise(o=>setTimeout(o,r));const c=await j.get(a,{signal:u.signal});return d.completeRequest(n),{data:c.data,requestId:n,cancelled:!1}}catch(c){throw d.completeRequest(n),j.isCancel(c)?{cancelled:!0,requestId:n,message:"Request cancelled"}:{cancelled:!1,requestId:n,error:c}}},$=()=>{const[a,s]=i.useState(!1),[r,n]=i.useState(null),[u,c]=i.useState(""),[o,x]=i.useState(""),[q,v]=i.useState(0),t=()=>{v(d.getActiveRequestCount())},l=async(b,h=2e3)=>{s(!0),c(""),n(null);const y=`https://jsonplaceholder.typicode.com/posts/${b}`,{requestId:m,abortController:f}=d.createRequest();x(m),t();try{h>0&&await new Promise(N=>setTimeout(N,h));const p=await j.get(y,{signal:f.signal});d.completeRequest(m),n(p.data)}catch(p){d.completeRequest(m),j.isCancel(p)?c("请求已取消"):c("请求失败: "+(p.message||"未知错误"))}finally{s(!1),t()}},g=()=>{o&&(d.cancelRequest(o)&&(c("请求已手动取消"),s(!1)),t())};return i.useEffect(()=>{t()},[]),e.jsx("div",{className:"space-y-6",children:e.jsxs("div",{className:"bg-white p-6 rounded-lg border border-gray-200",children:[e.jsx("h3",{className:"text-lg font-semibold text-gray-800 mb-4",children:"单个请求取消"}),e.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-6",children:[e.jsxs("div",{className:"space-y-4",children:[e.jsxs("div",{className:"flex flex-wrap gap-2",children:[e.jsx("button",{onClick:()=>l(1,3e3),disabled:a,className:"px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 disabled:opacity-50",children:"慢请求 (3秒)"}),e.jsx("button",{onClick:()=>l(2,5e3),disabled:a,className:"px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600 disabled:opacity-50",children:"超慢请求 (5秒)"})]}),e.jsx("div",{className:"flex gap-2",children:e.jsx("button",{onClick:g,disabled:!a,className:"px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600 disabled:opacity-50",children:"取消请求"})}),e.jsxs("div",{className:"text-sm text-gray-600",children:["活跃请求数:"," ",e.jsx("span",{className:"font-mono font-semibold",children:q})]})]}),e.jsxs("div",{className:"space-y-4",children:[a&&e.jsxs("div",{className:"flex items-center gap-2 text-blue-600",children:[e.jsx("div",{className:"animate-spin rounded-full h-4 w-4 border-b-2 border-blue-600"}),e.jsxs("span",{children:["请求进行中... (ID: ",o,")"]})]}),u&&e.jsx("div",{className:"p-3 bg-red-50 border border-red-200 rounded text-red-700",children:u}),r&&e.jsxs("div",{className:"p-3 bg-green-50 border border-green-200 rounded",children:[e.jsx("h4",{className:"font-semibold text-green-800",children:"请求成功"}),e.jsxs("p",{className:"text-sm text-green-700 mt-1",children:["标题: ",r.title]}),e.jsxs("p",{className:"text-xs text-green-600 mt-1",children:["ID: ",r.id]})]})]})]})]})})},E=()=>{const[a,s]=i.useState([]),[r,n]=i.useState(0),u=()=>{n(d.getActiveRequestCount())},c=async()=>{const t=[1,2,3,4,5],l=t.map(g=>({id:`batch_${g}`,status:"loading",startTime:Date.now()}));s(l),u(),t.forEach(async(g,b)=>{try{const h=`https://jsonplaceholder.typicode.com/posts/${g}`,y=(b+1)*1e3,m=await C(h,`batch_${g}`,y);s(f=>f.map(p=>p.id===`batch_${g}`?{...p,status:"success",data:m.data}:p))}catch(h){s(y=>y.map(m=>m.id===`batch_${g}`?{...m,status:h.cancelled?"cancelled":"error",error:h.cancelled?"已取消":"请求失败"}:m))}finally{u()}})},o=()=>{d.cancelAllRequests(),s(t=>t.map(l=>l.status==="loading"?{...l,status:"cancelled",error:"批量取消"}:l)),u()},x=()=>{s([]),u()};i.useEffect(()=>{u()},[]);const q=t=>{switch(t){case"loading":return"text-blue-600 bg-blue-50";case"success":return"text-green-600 bg-green-50";case"error":return"text-red-600 bg-red-50";case"cancelled":return"text-orange-600 bg-orange-50";default:return"text-gray-600 bg-gray-50"}},v=t=>{switch(t){case"loading":return"⏳";case"success":return"✅";case"error":return"❌";case"cancelled":return"🚫";default:return"❓"}};return e.jsx("div",{className:"space-y-6",children:e.jsxs("div",{className:"bg-white p-6 rounded-lg border border-gray-200",children:[e.jsx("h3",{className:"text-lg font-semibold text-gray-800 mb-4",children:"批量请求取消"}),e.jsxs("div",{className:"space-y-4",children:[e.jsxs("div",{className:"flex gap-2",children:[e.jsx("button",{onClick:c,disabled:r>0,className:"px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 disabled:opacity-50",children:"发起批量请求"}),e.jsx("button",{onClick:o,disabled:r===0,className:"px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600 disabled:opacity-50",children:"取消所有请求"}),e.jsx("button",{onClick:x,className:"px-4 py-2 bg-gray-500 text-white rounded hover:bg-gray-600",children:"清空结果"})]}),e.jsxs("div",{className:"text-sm text-gray-600",children:["活跃请求数:"," ",e.jsx("span",{className:"font-mono font-semibold",children:r})]}),a.length>0&&e.jsx("div",{className:"grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4",children:a.map(t=>e.jsxs("div",{className:"border border-gray-200 rounded-lg p-4",children:[e.jsxs("div",{className:"flex items-center justify-between mb-2",children:[e.jsx("span",{className:"font-mono text-sm",children:t.id}),e.jsxs("span",{className:`px-2 py-1 rounded text-xs ${q(t.status)}`,children:[v(t.status)," ",t.status]})]}),t.status==="loading"&&e.jsxs("div",{className:"flex items-center gap-2 text-blue-600",children:[e.jsx("div",{className:"animate-spin rounded-full h-3 w-3 border-b-2 border-blue-600"}),e.jsx("span",{className:"text-xs",children:"请求中..."})]}),t.status==="success"&&t.data&&e.jsx("div",{className:"text-xs text-gray-600",children:e.jsxs("p",{className:"truncate",children:["标题: ",t.data.title]})}),(t.status==="error"||t.status==="cancelled")&&e.jsx("div",{className:"text-xs text-red-600",children:t.error}),e.jsxs("div",{className:"text-xs text-gray-400 mt-2",children:["耗时: ",((Date.now()-t.startTime)/1e3).toFixed(1),"s"]})]},t.id))})]})]})})},P=()=>{const[a,s]=i.useState(!1),[r,n]=i.useState([]),[u,c]=i.useState(0),o=(t,l="info")=>{const g=new Date().toLocaleTimeString();n(b=>[{time:g,message:t,type:l},...b.slice(0,9)])},x=()=>{c(d.getActiveRequestCount())},q=async()=>{s(!0),o("模拟页面加载，发起多个请求...","info"),[1,2,3,4,5].map(async t=>{try{const l=`https://jsonplaceholder.typicode.com/posts/${t}`;await C(l,`page_${t}`,3e3),o(`请求 ${t} 完成`,"success")}catch(l){l.cancelled?o(`请求 ${t} 被取消`,"warning"):o(`请求 ${t} 失败`,"warning")}}),x(),setTimeout(()=>{const t=d.cancelAllRequests();o(`页面切换，取消了 ${t} 个活跃请求`,"warning"),s(!1),x()},2e3)},v=()=>{n([])};return i.useEffect(()=>(x(),()=>{d.cancelAllRequests()}),[]),e.jsx("div",{className:"space-y-6",children:e.jsxs("div",{className:"bg-white p-6 rounded-lg border border-gray-200",children:[e.jsx("h3",{className:"text-lg font-semibold text-gray-800 mb-4",children:"页面切换时取消请求"}),e.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-6",children:[e.jsxs("div",{className:"space-y-4",children:[e.jsx("button",{onClick:q,disabled:a,className:"px-4 py-2 bg-purple-500 text-white rounded hover:bg-purple-600 disabled:opacity-50",children:a?"模拟中...":"模拟页面切换"}),e.jsx("button",{onClick:v,className:"px-4 py-2 bg-gray-500 text-white rounded hover:bg-gray-600",children:"清空日志"}),e.jsxs("div",{className:"text-sm text-gray-600",children:["活跃请求数:"," ",e.jsx("span",{className:"font-mono font-semibold",children:u})]}),e.jsxs("div",{className:"text-sm text-gray-500",children:[e.jsx("p",{children:"💡 此演示模拟了页面切换时自动取消所有活跃请求的场景"}),e.jsx("p",{children:"🔄 点击按钮后会发起5个长时间请求，2秒后自动取消"})]})]}),e.jsxs("div",{className:"space-y-2",children:[e.jsx("h4",{className:"font-semibold text-gray-700",children:"操作日志"}),e.jsx("div",{className:"bg-gray-50 rounded-lg p-3 h-64 overflow-y-auto",children:r.length===0?e.jsx("p",{className:"text-gray-500 text-sm",children:"暂无日志"}):r.map((t,l)=>e.jsxs("div",{className:"text-sm mb-1",children:[e.jsxs("span",{className:"text-gray-400 font-mono",children:["[",t.time,"]"]}),e.jsx("span",{className:`ml-2 ${t.type==="success"?"text-green-600":t.type==="warning"?"text-orange-600":"text-blue-600"}`,children:t.message})]},l))})]})]})]})})},D=()=>e.jsx(I,{title:"请求取消",description:"学习如何实现请求取消机制，包括 AbortController API、单个请求取消、批量取消和页面切换时的全局取消，提升应用性能和用户体验。",overview:e.jsx("div",{className:"space-y-4",children:e.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-6",children:[e.jsxs("div",{className:"bg-blue-50 p-4 rounded-lg border border-blue-200",children:[e.jsx("h3",{className:"font-semibold text-blue-800 mb-2",children:"🎯 核心概念"}),e.jsxs("ul",{className:"text-sm text-blue-700 space-y-1",children:[e.jsx("li",{children:"• AbortController 和 AbortSignal API"}),e.jsx("li",{children:"• 请求生命周期管理和状态跟踪"}),e.jsx("li",{children:"• 取消令牌模式和请求标识"}),e.jsx("li",{children:"• 内存泄漏防护和资源清理"})]})]}),e.jsxs("div",{className:"bg-green-50 p-4 rounded-lg border border-green-200",children:[e.jsx("h3",{className:"font-semibold text-green-800 mb-2",children:"✨ 主要优势"}),e.jsxs("ul",{className:"text-sm text-green-700 space-y-1",children:[e.jsx("li",{children:"• 避免无效请求浪费带宽资源"}),e.jsx("li",{children:"• 防止过期响应覆盖新数据"}),e.jsx("li",{children:"• 提升应用响应速度和稳定性"}),e.jsx("li",{children:"• 减少服务器负载和网络拥塞"})]})]}),e.jsxs("div",{className:"bg-yellow-50 p-4 rounded-lg border border-yellow-200",children:[e.jsx("h3",{className:"font-semibold text-yellow-800 mb-2",children:"🎪 适用场景"}),e.jsxs("ul",{className:"text-sm text-yellow-700 space-y-1",children:[e.jsx("li",{children:"• 搜索输入框的实时查询"}),e.jsx("li",{children:"• 页面切换时的请求清理"}),e.jsx("li",{children:"• 长时间运行的数据加载"}),e.jsx("li",{children:"• 用户主动取消的操作"})]})]}),e.jsxs("div",{className:"bg-red-50 p-4 rounded-lg border border-red-200",children:[e.jsx("h3",{className:"font-semibold text-red-800 mb-2",children:"⚠️ 注意事项"}),e.jsxs("ul",{className:"text-sm text-red-700 space-y-1",children:[e.jsx("li",{children:"• 正确处理取消异常和错误状态"}),e.jsx("li",{children:"• 避免取消已完成的请求"}),e.jsx("li",{children:"• 注意清理定时器和事件监听"}),e.jsx("li",{children:"• 考虑用户体验和反馈提示"})]})]})]})}),examples:[{title:"单个请求取消",component:e.jsx($,{}),description:"演示如何取消单个正在进行的请求，包括慢请求和超慢请求的取消操作。",observationPoints:["点击慢请求或超慢请求按钮，观察请求状态和加载动画","在请求进行中点击取消按钮，观察请求立即停止","活跃请求数会实时更新，显示当前正在进行的请求数量","取消的请求会显示相应的错误信息和状态"],keyPoints:["AbortController 提供了标准的请求取消机制","每个请求都有唯一的 ID 用于标识和管理","取消请求会触发 AbortError 异常","请求管理器跟踪所有活跃请求的状态"],commonTraps:["忘记处理 AbortError 导致未捕获异常","取消已完成的请求导致状态混乱","没有清理请求引用导致内存泄漏","重复取消同一个请求"],solutions:["使用 axios.isCancel() 检查取消状态","在请求完成后及时清理引用","实现请求状态管理和生命周期跟踪","添加请求 ID 验证和重复检查"],importantTips:["取消请求不会阻止网络传输，但会忽略响应","合理设置请求超时时间配合取消机制","考虑用户体验，提供清晰的取消反馈"],codeExample:{title:"完整的请求取消实现",language:"typescript",highlights:[15,16,25,26,35,36,45,46,55,56,65,66,75,76,85,86],description:"展示完整的请求取消机制，包括 RequestManager 类和 cancellableRequest 函数",code:`// 请求管理器类
class RequestManager {
  private activeRequests: Map<string, AbortController> = new Map();
  private requestCounter = 0;

  // 创建新请求
  createRequest(id?: string): {
    requestId: string;
    abortController: AbortController;
  } {
    const requestId = id || \`request_\${++this.requestCounter}\`;
    const abortController = new AbortController();

    // 将请求添加到活跃请求映射中
    this.activeRequests.set(requestId, abortController);
    return { requestId, abortController };
  }

  // 取消单个请求
  cancelRequest(requestId: string): boolean {
    const controller = this.activeRequests.get(requestId);
    if (controller) {
      // 调用 abort() 方法取消请求
      controller.abort();
      this.activeRequests.delete(requestId);
      return true;
    }
    return false;
  }

  // 取消所有请求
  cancelAllRequests(): number {
    const count = this.activeRequests.size;
    this.activeRequests.forEach((controller) => controller.abort());
    this.activeRequests.clear();
    return count;
  }

  // 完成请求时清理
  completeRequest(requestId: string): void {
    this.activeRequests.delete(requestId);
  }

  // 获取活跃请求数量
  getActiveRequestCount(): number {
    return this.activeRequests.size;
  }
}

// 全局请求管理器实例
const requestManager = new RequestManager();

// 可取消的请求函数 - 核心实现
const cancellableRequest = async (
  url: string,
  requestId?: string,
  delay: number = 0
): Promise<{ data: any; requestId: string; cancelled: boolean }> => {
  const { requestId: id, abortController } =
    requestManager.createRequest(requestId);

  try {
    // 添加延迟模拟慢请求
    if (delay > 0) {
      await new Promise((resolve) => setTimeout(resolve, delay));
    }

    // 发起请求并传入取消信号
    const response = await axios.get(url, {
      signal: abortController.signal,
    });

    requestManager.completeRequest(id);
    return { data: response.data, requestId: id, cancelled: false };
  } catch (error) {
    requestManager.completeRequest(id);
    // 检查是否为取消错误
    if (axios.isCancel(error)) {
      throw { cancelled: true, requestId: id, message: "Request cancelled" };
    }
    throw { cancelled: false, requestId: id, error };
  }
};

// 组件中的使用示例
const makeRequest = async (postId: number, delay: number = 2000) => {
  const url = \`https://jsonplaceholder.typicode.com/posts/\${postId}\`;
  const { requestId: id, abortController } = requestManager.createRequest();
  
  try {
    const response = await axios.get(url, {
      signal: abortController.signal // 传入取消信号
    });
    
    requestManager.completeRequest(id);
    return response.data;
  } catch (error) {
    requestManager.completeRequest(id);
    if (axios.isCancel(error)) {
      throw { cancelled: true, message: "Request cancelled" };
    }
    throw error;
  }
};`}},{title:"批量请求取消",component:e.jsx(E,{}),description:"演示如何管理和取消多个并发请求，包括批量发起和批量取消操作。",observationPoints:["点击发起批量请求，观察5个请求同时开始执行","每个请求有不同的延迟时间，模拟真实场景","点击取消所有请求，观察所有进行中的请求立即停止","请求状态用不同颜色和图标表示，便于区分"],keyPoints:["请求管理器统一管理所有活跃请求","支持按 ID 取消单个请求或批量取消","每个请求都有独立的状态和错误处理","实时显示请求进度和耗时统计"],commonTraps:["并发请求过多导致浏览器限制","批量取消时状态更新不及时","请求完成和取消的竞态条件","内存中积累过多请求历史"],solutions:["控制并发请求数量，使用队列管理","使用状态管理确保 UI 同步更新","正确处理请求完成和取消的时序","定期清理已完成的请求记录"],importantTips:["批量操作特别适用于数据同步和批量上传","考虑实现请求优先级和依赖关系","监控网络状况，动态调整并发数"],codeExample:{title:"批量请求管理与取消",language:"typescript",highlights:[18,19,20,28,29,30,40,41,42,52,53,54],description:"展示如何管理多个并发请求并支持批量取消，包括状态跟踪和错误处理",code:`// 批量请求状态类型
interface BatchRequest {
  id: string;
  status: "loading" | "success" | "error" | "cancelled";
  data?: any;
  error?: string;
  startTime: number;
}

// 批量请求管理
const startBatchRequests = async () => {
  const postIds = [1, 2, 3, 4, 5];
  const newRequests = postIds.map((id) => ({
    id: \`batch_\${id}\`,
    status: "loading" as const,
    startTime: Date.now(),
  }));

  // 初始化请求状态
  setRequests(newRequests);
  updateActiveCount();

  // 并发发起多个请求
  postIds.forEach(async (postId, index) => {
    try {
      const url = \`https://jsonplaceholder.typicode.com/posts/\${postId}\`;
      const delay = (index + 1) * 1000; // 不同延迟
      
      // 使用 cancellableRequest 发起可取消请求
      const response = await cancellableRequest(
        url,
        \`batch_\${postId}\`,
        delay
      );

      // 更新成功状态
      setRequests((prev) =>
        prev.map((req) =>
          req.id === \`batch_\${postId}\`
            ? { ...req, status: "success", data: response.data }
            : req
        )
      );
    } catch (err: any) {
      // 处理请求错误或取消
      setRequests((prev) =>
        prev.map((req) =>
          req.id === \`batch_\${postId}\`
            ? {
                ...req,
                status: err.cancelled ? "cancelled" : "error",
                error: err.cancelled ? "已取消" : "请求失败",
              }
            : req
        )
      );
    } finally {
      updateActiveCount();
    }
  });
};

// 批量取消所有请求 - 核心功能
const cancelAllRequests = () => {
  // 调用请求管理器的批量取消方法
  const cancelledCount = requestManager.cancelAllRequests();
  
  // 更新UI状态
  setRequests((prev) =>
    prev.map((req) =>
      req.status === "loading"
        ? { ...req, status: "cancelled", error: "批量取消" }
        : req
    )
  );
  
  updateActiveCount();
  console.log(\`已取消 \${cancelledCount} 个活跃请求\`);
};`}},{title:"页面切换时取消",component:e.jsx(P,{}),description:"演示页面切换或组件卸载时自动取消所有活跃请求的机制。",observationPoints:["点击模拟页面切换，观察多个长时间请求开始执行","2秒后自动触发页面切换，所有活跃请求被取消","操作日志实时显示请求的发起、完成和取消状态","活跃请求数在页面切换后归零"],keyPoints:["useEffect 清理函数确保组件卸载时取消请求","全局请求管理器提供统一的取消接口","页面切换时的资源清理是性能优化的关键","日志记录有助于调试和监控请求状态"],commonTraps:["忘记在组件卸载时清理请求","页面切换过快导致状态混乱","清理时机不当影响正常请求","内存泄漏和事件监听器未清理"],solutions:["使用 useEffect 返回清理函数","实现防抖机制避免频繁切换","区分正常完成和主动取消的请求","建立完整的资源清理机制"],importantTips:["页面切换取消是 SPA 应用的最佳实践","考虑保存重要请求的状态用于恢复","结合路由守卫实现更精细的控制"],codeExample:{title:"页面切换时的请求清理机制",language:"typescript",highlights:[12,13,14,22,23,24,32,33,34,42,43,44,52,53,54],description:"展示完整的页面切换请求清理机制，包括日志记录和生命周期管理",code:`// 日志类型定义
interface LogEntry {
  time: string;
  message: string;
  type: "info" | "success" | "warning";
}

// 页面切换演示组件
const PageSwitchDemo: React.FC = () => {
  const [isSimulating, setIsSimulating] = useState(false);
  const [logs, setLogs] = useState<LogEntry[]>([]);
  const [activeCount, setActiveCount] = useState(0);

  // 添加日志记录
  const addLog = (
    message: string,
    type: "info" | "success" | "warning" = "info"
  ) => {
    const time = new Date().toLocaleTimeString();
    setLogs((prev) => [{ time, message, type }, ...prev.slice(0, 9)]);
  };

  // 更新活跃请求数
  const updateActiveCount = () => {
    setActiveCount(requestManager.getActiveRequestCount());
  };

  // 模拟页面切换场景
  const simulatePageSwitch = async () => {
    setIsSimulating(true);
    addLog("模拟页面加载，发起多个请求...", "info");

    // 发起多个长时间请求
    const requests = [1, 2, 3, 4, 5].map(async (id) => {
      try {
        const url = \`https://jsonplaceholder.typicode.com/posts/\${id}\`;
        await cancellableRequest(url, \`page_\${id}\`, 3000);
        addLog(\`请求 \${id} 完成\`, "success");
      } catch (err: any) {
        if (err.cancelled) {
          addLog(\`请求 \${id} 被取消\`, "warning");
        } else {
          addLog(\`请求 \${id} 失败\`, "warning");
        }
      }
    });

    updateActiveCount();

    // 模拟2秒后页面切换 - 关键清理逻辑
    setTimeout(() => {
      const cancelledCount = requestManager.cancelAllRequests();
      addLog(\`页面切换，取消了 \${cancelledCount} 个活跃请求\`, "warning");
      setIsSimulating(false);
      updateActiveCount();
    }, 2000);
  };

  // 组件生命周期清理 - 重要的内存泄漏防护
  useEffect(() => {
    updateActiveCount();
    
    // 组件卸载时的清理函数
    return () => {
      requestManager.cancelAllRequests();
    };
  }, []);

  return (
    <div className="space-y-4">
      <div className="flex gap-2">
        <button 
          onClick={simulatePageSwitch} 
          disabled={isSimulating}
          className="px-4 py-2 bg-purple-500 text-white rounded"
        >
          {isSimulating ? "模拟中..." : "模拟页面切换"}
        </button>
      </div>
      
      <div className="text-sm text-gray-600">
        活跃请求数: <span className="font-mono">{activeCount}</span>
      </div>
      
      <div className="bg-gray-50 rounded-lg p-3 h-32 overflow-y-auto">
        {logs.map((log, index) => (
          <div key={index} className="text-sm mb-1">
            <span className="text-gray-400">[{log.time}]</span>
            <span className={\`ml-2 \${
              log.type === "success" ? "text-green-600" :
              log.type === "warning" ? "text-orange-600" : "text-blue-600"
            }\`}>
              {log.message}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};`}}],tutorial:{concepts:["**AbortController API**：现代浏览器提供的标准请求取消接口","**AbortSignal 信号**：传递给请求的取消信号，支持事件监听","**请求生命周期**：从创建到完成或取消的完整过程管理","**取消令牌模式**：为每个请求分配唯一标识符便于管理","**资源清理机制**：确保取消的请求不会造成内存泄漏","**状态同步更新**：UI 状态与请求状态的实时同步"],steps:["创建 RequestManager 类管理所有活跃请求","为每个请求生成唯一 ID 和 AbortController","实现单个请求取消和批量取消方法","在 axios 请求中传入 AbortSignal","正确处理 AbortError 和请求完成状态","在组件卸载时清理所有活跃请求"],tips:["使用 axios.isCancel() 检查是否为取消错误","为请求设置合理的超时时间作为备选方案","考虑实现请求重试机制配合取消功能","在开发工具中监控网络请求的取消状态","对于重要操作，提供用户确认取消的机制","结合 loading 状态提供良好的用户反馈"]},interview:{questions:[{question:"AbortController 是什么？它是如何工作的？",answer:"AbortController 是 Web API 提供的请求取消接口。工作原理：1) 创建 AbortController 实例；2) 将其 signal 属性传给 fetch 或 axios；3) 调用 abort() 方法取消请求；4) 请求会抛出 AbortError 异常。它基于观察者模式，signal 对象监听 abort 事件，当调用 abort() 时通知所有监听者。"},{question:"如何在 React 中正确处理请求取消？",answer:"React 中处理请求取消的最佳实践：1) 在 useEffect 中发起请求；2) 返回清理函数调用 abort()；3) 使用 useState 管理请求状态；4) 用 try-catch 捕获 AbortError；5) 检查组件是否已卸载再更新状态。关键是确保组件卸载时取消所有活跃请求，避免内存泄漏和状态更新错误。"},{question:"页面切换时为什么要取消请求？如何实现？",answer:"页面切换时取消请求的原因：1) 避免无效响应覆盖新页面数据；2) 节省带宽和服务器资源；3) 防止内存泄漏；4) 提升应用性能。实现方式：1) 全局请求管理器跟踪活跃请求；2) 路由切换时调用批量取消；3) 组件卸载时清理请求；4) 使用 beforeunload 事件处理页面关闭。"},{question:"请求取消和请求超时有什么区别？",answer:"主要区别：1) **触发方式**：取消是主动调用 abort()，超时是时间到达自动触发；2) **错误类型**：取消抛出 AbortError，超时抛出 TimeoutError；3) **使用场景**：取消用于用户主动停止或页面切换，超时用于网络异常保护；4) **实现机制**：取消基于 AbortController，超时基于 setTimeout；5) **资源释放**：取消立即释放，超时等待超时时间。两者可以结合使用提供更好的用户体验。"}],keyPoints:["AbortController 是现代浏览器的标准 API，兼容性良好","请求取消不会阻止网络传输，但会忽略响应结果","正确的错误处理是请求取消机制的关键部分","页面切换时的请求清理是 SPA 应用的最佳实践","请求管理器模式有助于统一管理复杂的请求状态","结合 loading 状态和用户反馈提升交互体验"]},bestPractices:{dos:["为每个请求创建独立的 AbortController 实例","在组件卸载时清理所有活跃请求","使用唯一 ID 标识和管理请求","正确处理 AbortError 和其他异常","实现请求状态的实时更新和同步","提供清晰的用户反馈和取消按钮","结合超时机制提供双重保护","监控和记录请求的取消情况"],donts:["不要重复取消已经完成的请求","不要忘记清理请求引用和事件监听","不要在请求取消后继续更新组件状态","不要忽略 AbortError 的异常处理","不要在全局范围内滥用请求取消","不要取消关键的业务请求如支付","不要在取消请求后立即发起相同请求","不要依赖请求取消作为唯一的错误处理机制"],patterns:["**请求管理器模式**：统一管理所有请求的生命周期","**取消令牌模式**：为请求分配唯一标识符便于管理","**清理函数模式**：useEffect 返回清理函数处理资源释放","**状态机模式**：明确定义请求的各种状态转换","**观察者模式**：AbortSignal 基于事件监听实现取消通知","**工厂模式**：统一创建带取消功能的请求实例","**装饰器模式**：为现有请求函数添加取消能力"]}});export{D as default};
