var N=Object.defineProperty;var T=(i,t,n)=>t in i?N(i,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):i[t]=n;var y=(i,t,n)=>T(i,typeof t!="symbol"?t+"":t,n);import{j as e,r as b}from"./index-Cnne2xOM.js";import{C}from"./ComponentTemplate-iqsAHbUA.js";class B{constructor(){y(this,"pendingRequests",new Map);y(this,"batchTimers",new Map);y(this,"state",{pendingRequests:[],processingBatches:0,completedBatches:0,mergedRequests:0,totalRequests:0});y(this,"listeners",new Set);y(this,"config",{batchSize:5,batchTimeout:100,maxWaitTime:1e3,enableMerging:!0})}subscribe(t){return this.listeners.add(t),()=>this.listeners.delete(t)}notify(){this.state.pendingRequests=Array.from(this.pendingRequests.values()).flat(),this.listeners.forEach(t=>t({...this.state}))}setConfig(t){this.config={...this.config,...t}}getConfig(){return{...this.config}}addRequest(t,n,d){return new Promise((m,u)=>{const r=`req-${Date.now()}-${Math.random().toString(36).substr(2,9)}`,l={id:r,key:t,params:n,resolve:m,reject:u,timestamp:Date.now(),timeout:this.config.maxWaitTime};if(this.state.totalRequests++,this.config.enableMerging){const o=(this.pendingRequests.get(t)||[]).find(s=>JSON.stringify(s.params)===JSON.stringify(n));if(o){this.state.mergedRequests++;const s=o.resolve,a=o.reject;o.resolve=c=>{s(c),m(c)},o.reject=c=>{a(c),u(c)},this.notify();return}}this.pendingRequests.has(t)||this.pendingRequests.set(t,[]),this.pendingRequests.get(t).push(l),this.pendingRequests.get(t).length>=this.config.batchSize?this.processBatch(t,d):this.setBatchTimer(t,d),setTimeout(()=>{const v=this.pendingRequests.get(t)||[],o=v.findIndex(s=>s.id===r);o!==-1&&(v.splice(o,1),u(new Error("Request timeout")),this.notify())},l.timeout),this.notify()})}setBatchTimer(t,n){const d=this.batchTimers.get(t);d&&clearTimeout(d);const m=setTimeout(()=>{this.processBatch(t,n)},this.config.batchTimeout);this.batchTimers.set(t,m)}async processBatch(t,n){const d=this.pendingRequests.get(t)||[];if(d.length===0)return;const m=this.batchTimers.get(t);m&&(clearTimeout(m),this.batchTimers.delete(t)),this.pendingRequests.delete(t),this.state.processingBatches++,this.notify();try{const u=d.map(l=>l.params),r=await n(u);d.forEach((l,x)=>{x<r.length?l.resolve(r[x]):l.reject(new Error("Batch result index out of bounds"))}),this.state.completedBatches++}catch(u){d.forEach(r=>{r.reject(u)})}finally{this.state.processingBatches--,this.notify()}}async flushAll(t){const d=Array.from(this.pendingRequests.keys()).map(m=>this.processBatch(m,u=>t(m,u)));await Promise.all(d)}getState(){return{...this.state}}clearAll(){this.batchTimers.forEach(t=>clearTimeout(t)),this.batchTimers.clear(),this.pendingRequests.forEach(t=>{t.forEach(n=>{n.reject(new Error("Batch cleared"))})}),this.pendingRequests.clear(),this.state={pendingRequests:[],processingBatches:0,completedBatches:0,mergedRequests:0,totalRequests:0},this.notify()}}const q=new B,S=b.createContext(null),L=({children:i})=>{const[t,n]=b.useState(q.getState());return b.useEffect(()=>q.subscribe(n),[]),e.jsx(S.Provider,{value:{manager:q,state:t},children:i})},R=()=>{const i=b.useContext(S);if(!i)throw new Error("useBatching must be used within BatchingProvider");return i},f=async i=>(await new Promise(t=>setTimeout(t,Math.random()*500+200)),i.map((t,n)=>({id:t.id||n,data:`批处理结果 ${t.id||n}`,timestamp:Date.now(),batchSize:i.length,processed:!0}))),w=async i=>(await new Promise(t=>setTimeout(t,Math.random()*300+100)),i.map(t=>({id:t,name:`用户 ${t}`,email:`user${t}@example.com`,avatar:`https://api.dicebear.com/7.x/avataaars/svg?seed=${t}`,lastLogin:new Date(Date.now()-Math.random()*864e5).toISOString()}))),P=()=>{const{manager:i,state:t}=R(),[n,d]=b.useState([]),[m,u]=b.useState([]),r=s=>{d(a=>[...a.slice(-9),`${new Date().toLocaleTimeString()}: ${s}`])},l=s=>{u(a=>[...a.slice(-9),s])},x=async()=>{r("发送单个请求");try{const s=await i.addRequest("api-call",{id:Date.now()},f);r(`单个请求完成: ${s.data}`),l(s)}catch(s){r(`请求失败: ${s.message}`)}},v=async()=>{r("发送多个请求（将被批处理）");const s=[];for(let a=1;a<=5;a++){const c=i.addRequest("api-call",{id:`batch-${Date.now()}-${a}`},f).then(g=>(r(`批处理请求 ${a} 完成: ${g.data}`),l(g),g)).catch(g=>{throw r(`批处理请求 ${a} 失败: ${g.message}`),g});s.push(c)}try{await Promise.all(s),r("所有批处理请求完成")}catch{r("部分批处理请求失败")}},o=async()=>{r("发送重复请求（将被合并）");const s={id:"duplicate-test"},a=[];for(let c=1;c<=3;c++){const g=i.addRequest("api-call",s,f).then(p=>(r(`重复请求 ${c} 完成: ${p.data}`),l(p),p)).catch(p=>{throw r(`重复请求 ${c} 失败: ${p.message}`),p});a.push(g)}try{await Promise.all(a),r("所有重复请求完成（共享结果）")}catch{r("重复请求失败")}};return e.jsxs("div",{className:"space-y-4",children:[e.jsxs("div",{className:"grid grid-cols-3 gap-4",children:[e.jsx("button",{onClick:x,className:"px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 text-sm",children:"发送单个请求"}),e.jsx("button",{onClick:v,className:"px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600 text-sm",children:"发送批处理请求"}),e.jsx("button",{onClick:o,className:"px-4 py-2 bg-purple-500 text-white rounded hover:bg-purple-600 text-sm",children:"发送重复请求"})]}),e.jsxs("div",{className:"grid grid-cols-2 gap-4",children:[e.jsxs("div",{className:"bg-blue-50 p-3 rounded",children:[e.jsx("h4",{className:"font-medium mb-2",children:"批处理状态"}),e.jsxs("div",{className:"text-sm text-gray-700 space-y-1",children:[e.jsxs("div",{children:["待处理请求: ",t.pendingRequests.length]}),e.jsxs("div",{children:["处理中批次: ",t.processingBatches]}),e.jsxs("div",{children:["已完成批次: ",t.completedBatches]}),e.jsxs("div",{children:["合并请求数: ",t.mergedRequests]}),e.jsxs("div",{children:["总请求数: ",t.totalRequests]})]})]}),e.jsxs("div",{className:"bg-green-50 p-3 rounded",children:[e.jsx("h4",{className:"font-medium mb-2",children:"配置信息"}),e.jsxs("div",{className:"text-sm text-gray-700 space-y-1",children:[e.jsxs("div",{children:["批处理大小: ",i.getConfig().batchSize]}),e.jsxs("div",{children:["批处理超时: ",i.getConfig().batchTimeout,"ms"]}),e.jsxs("div",{children:["最大等待时间: ",i.getConfig().maxWaitTime,"ms"]}),e.jsxs("div",{children:["启用合并: ",i.getConfig().enableMerging?"是":"否"]})]})]})]}),e.jsxs("div",{className:"grid grid-cols-2 gap-4",children:[e.jsxs("div",{className:"bg-gray-50 p-3 rounded max-h-40 overflow-y-auto",children:[e.jsx("h4",{className:"font-medium mb-2",children:"操作日志"}),n.map((s,a)=>e.jsx("div",{className:"text-sm text-gray-700 font-mono",children:s},a))]}),e.jsxs("div",{className:"bg-yellow-50 p-3 rounded max-h-40 overflow-y-auto",children:[e.jsx("h4",{className:"font-medium mb-2",children:"请求结果"}),m.map((s,a)=>e.jsxs("div",{className:"text-sm text-gray-700 mb-1",children:[e.jsx("div",{className:"font-medium",children:s.data}),e.jsxs("div",{className:"text-xs text-gray-500",children:["批次大小: ",s.batchSize]})]},a))]})]})]})},$=()=>{const{manager:i,state:t}=R(),[n,d]=b.useState(i.getConfig()),[m,u]=b.useState([]),r=o=>{u(s=>[...s.slice(-9),`${new Date().toLocaleTimeString()}: ${o}`])},l=()=>{i.setConfig(n),r(`配置已更新: 批次大小=${n.batchSize}, 超时=${n.batchTimeout}ms`)},x=async()=>{r(`测试批次大小 (${n.batchSize})`);const o=[];for(let s=1;s<=n.batchSize+2;s++){const a=i.addRequest("batch-size-test",{id:`size-test-${s}`},f).then(c=>(r(`批次测试 ${s}: ${c.data}`),c));o.push(a)}await Promise.all(o),r("批次大小测试完成")},v=async()=>{r(`测试批处理超时 (${n.batchTimeout}ms)`);for(let o=1;o<=2;o++)i.addRequest("timeout-test",{id:`timeout-test-${o}`},f).then(s=>{r(`超时测试 ${o}: ${s.data}`)});r("等待超时触发批处理...")};return e.jsxs("div",{className:"space-y-4",children:[e.jsxs("div",{className:"grid grid-cols-2 gap-4",children:[e.jsxs("div",{className:"space-y-3",children:[e.jsx("h4",{className:"font-medium",children:"批处理配置"}),e.jsxs("div",{className:"space-y-2",children:[e.jsxs("div",{children:[e.jsx("label",{className:"block text-sm font-medium mb-1",children:"批处理大小"}),e.jsx("input",{type:"number",min:"1",max:"20",value:n.batchSize,onChange:o=>d(s=>({...s,batchSize:Number(o.target.value)})),className:"w-full px-2 py-1 border rounded"})]}),e.jsxs("div",{children:[e.jsx("label",{className:"block text-sm font-medium mb-1",children:"批处理超时 (ms)"}),e.jsx("input",{type:"number",min:"50",max:"5000",step:"50",value:n.batchTimeout,onChange:o=>d(s=>({...s,batchTimeout:Number(o.target.value)})),className:"w-full px-2 py-1 border rounded"})]}),e.jsxs("div",{children:[e.jsx("label",{className:"block text-sm font-medium mb-1",children:"最大等待时间 (ms)"}),e.jsx("input",{type:"number",min:"500",max:"10000",step:"100",value:n.maxWaitTime,onChange:o=>d(s=>({...s,maxWaitTime:Number(o.target.value)})),className:"w-full px-2 py-1 border rounded"})]}),e.jsxs("div",{className:"flex items-center space-x-2",children:[e.jsx("input",{type:"checkbox",id:"enableMerging",checked:n.enableMerging,onChange:o=>d(s=>({...s,enableMerging:o.target.checked})),className:"rounded"}),e.jsx("label",{htmlFor:"enableMerging",className:"text-sm font-medium",children:"启用请求合并"})]}),e.jsx("button",{onClick:l,className:"w-full px-3 py-2 bg-green-500 text-white rounded hover:bg-green-600 text-sm",children:"应用配置"})]})]}),e.jsxs("div",{className:"space-y-3",children:[e.jsx("h4",{className:"font-medium",children:"配置测试"}),e.jsxs("div",{className:"space-y-2",children:[e.jsx("button",{onClick:x,className:"w-full px-3 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 text-sm",children:"测试批次大小"}),e.jsx("button",{onClick:v,className:"w-full px-3 py-2 bg-orange-500 text-white rounded hover:bg-orange-600 text-sm",children:"测试批处理超时"}),e.jsx("button",{onClick:()=>{i.clearAll(),r("已清除所有待处理请求")},className:"w-full px-3 py-2 bg-red-500 text-white rounded hover:bg-red-600 text-sm",children:"清除所有请求"})]})]})]}),e.jsxs("div",{className:"bg-purple-50 p-3 rounded",children:[e.jsx("h4",{className:"font-medium mb-2",children:"配置说明"}),e.jsxs("div",{className:"text-sm text-gray-700 space-y-1",children:[e.jsxs("div",{children:["• ",e.jsx("strong",{children:"批处理大小"}),": 达到此数量时立即处理批次"]}),e.jsxs("div",{children:["• ",e.jsx("strong",{children:"批处理超时"}),": 等待此时间后处理未满的批次"]}),e.jsxs("div",{children:["• ",e.jsx("strong",{children:"最大等待时间"}),": 单个请求的最大等待时间"]}),e.jsxs("div",{children:["• ",e.jsx("strong",{children:"启用请求合并"}),": 相同参数的请求会共享结果"]})]})]}),e.jsxs("div",{className:"bg-gray-50 p-3 rounded max-h-40 overflow-y-auto",children:[e.jsx("h4",{className:"font-medium mb-2",children:"配置日志"}),m.map((o,s)=>e.jsx("div",{className:"text-sm text-gray-700 font-mono",children:o},s))]})]})},M=()=>{const{manager:i}=R(),[t,n]=b.useState([]),[d,m]=b.useState([]),[u,r]=b.useState([]),l=a=>{m(c=>[...c.slice(-9),`${new Date().toLocaleTimeString()}: ${a}`])},x=async()=>{l("模拟用户列表页面 - 批量加载用户信息");const c=[1,2,3,4,5,6,7,8].map(async h=>{try{return await i.addRequest("fetch-users",h,w)}catch{return l(`用户 ${h} 加载失败`),null}}),p=(await Promise.all(c)).filter(h=>h!==null);n(p),l(`成功加载 ${p.length} 个用户信息`)},v=async()=>{l("模拟搜索建议 - 批量查询用户");const c=[10,11,12,13,14].map(async(g,p)=>{await new Promise(h=>setTimeout(h,p*100));try{const h=await i.addRequest("search-users",g,w);return l(`搜索建议 ${g}: ${h.name}`),h}catch{return l(`搜索建议 ${g} 失败`),null}});await Promise.all(c),l("搜索建议加载完成")},o=async()=>{if(u.length===0){l("请先选择要操作的用户");return}l(`批量操作 - 处理 ${u.length} 个用户`);const a=u.map(async c=>{try{const g=await i.addRequest("batch-operation",{userId:c,operation:"update"},async p=>(await new Promise(h=>setTimeout(h,200)),p.map(h=>({userId:h.userId,operation:h.operation,success:!0,timestamp:Date.now()}))));return l(`用户 ${c} 操作成功`),g}catch{return l(`用户 ${c} 操作失败`),null}});await Promise.all(a),l("批量操作完成")},s=a=>{r(c=>c.includes(a)?c.filter(g=>g!==a):[...c,a])};return e.jsxs("div",{className:"space-y-4",children:[e.jsxs("div",{className:"grid grid-cols-3 gap-4",children:[e.jsx("button",{onClick:x,className:"px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 text-sm",children:"加载用户列表"}),e.jsx("button",{onClick:v,className:"px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600 text-sm",children:"搜索建议"}),e.jsxs("button",{onClick:o,className:"px-4 py-2 bg-purple-500 text-white rounded hover:bg-purple-600 text-sm",children:["批量操作 (",u.length,")"]})]}),t.length>0&&e.jsxs("div",{className:"bg-white border rounded-lg p-4",children:[e.jsx("h4",{className:"font-medium mb-3",children:"用户列表 (点击选择)"}),e.jsx("div",{className:"grid grid-cols-4 gap-3",children:t.map(a=>e.jsx("div",{onClick:()=>s(a.id),className:`p-3 border rounded-lg cursor-pointer transition-colors ${u.includes(a.id)?"bg-blue-50 border-blue-300":"bg-gray-50 border-gray-200 hover:bg-gray-100"}`,children:e.jsxs("div",{className:"flex items-center space-x-2",children:[e.jsx("div",{className:"w-8 h-8 bg-gradient-to-r from-blue-400 to-purple-500 rounded-full flex items-center justify-center text-white text-sm font-medium",children:a.name.charAt(a.name.length-1)}),e.jsxs("div",{className:"flex-1 min-w-0",children:[e.jsx("div",{className:"text-sm font-medium truncate",children:a.name}),e.jsx("div",{className:"text-xs text-gray-500 truncate",children:a.email})]})]})},a.id))})]}),e.jsxs("div",{className:"bg-orange-50 p-3 rounded",children:[e.jsx("h4",{className:"font-medium mb-2",children:"应用场景说明"}),e.jsxs("div",{className:"text-sm text-gray-700 space-y-1",children:[e.jsxs("div",{children:[e.jsx("strong",{children:"用户列表加载"}),": 页面加载时批量获取用户信息"]}),e.jsxs("div",{children:[e.jsx("strong",{children:"搜索建议"}),": 用户输入时批量查询匹配用户"]}),e.jsxs("div",{children:[e.jsx("strong",{children:"批量操作"}),": 选中多个用户后执行批量更新"]}),e.jsxs("div",{children:[e.jsx("strong",{children:"请求合并"}),": 相同用户ID的请求会自动合并"]})]})]}),e.jsxs("div",{className:"bg-gray-50 p-3 rounded max-h-40 overflow-y-auto",children:[e.jsx("h4",{className:"font-medium mb-2",children:"操作日志"}),d.map((a,c)=>e.jsx("div",{className:"text-sm text-gray-700 font-mono",children:a},c))]})]})},k=()=>e.jsx(C,{title:"请求批处理",description:"通过批处理和合并机制优化多个请求的处理，提高性能和用户体验",overview:e.jsxs("div",{className:"space-y-4",children:[e.jsxs("div",{children:[e.jsx("h3",{className:"text-lg font-semibold mb-2",children:"核心概念"}),e.jsxs("ul",{className:"list-disc list-inside space-y-1 text-gray-700",children:[e.jsxs("li",{children:[e.jsx("strong",{children:"请求批处理"}),"：将多个请求合并为一个批次处理"]}),e.jsxs("li",{children:[e.jsx("strong",{children:"请求合并"}),"：相同参数的请求共享结果，避免重复"]}),e.jsxs("li",{children:[e.jsx("strong",{children:"批次配置"}),"：可配置批次大小、超时时间等参数"]}),e.jsxs("li",{children:[e.jsx("strong",{children:"自动触发"}),"：达到批次大小或超时时自动处理"]})]})]}),e.jsxs("div",{children:[e.jsx("h3",{className:"text-lg font-semibold mb-2",children:"主要优势"}),e.jsxs("ul",{className:"list-disc list-inside space-y-1 text-gray-700",children:[e.jsx("li",{children:"减少网络请求数量，提高性能"}),e.jsx("li",{children:"降低服务器负载和带宽消耗"}),e.jsx("li",{children:"避免重复请求，节省资源"}),e.jsx("li",{children:"提供灵活的批处理配置选项"})]})]}),e.jsxs("div",{children:[e.jsx("h3",{className:"text-lg font-semibold mb-2",children:"适用场景"}),e.jsxs("ul",{className:"list-disc list-inside space-y-1 text-gray-700",children:[e.jsx("li",{children:"用户列表页面的头像和信息加载"}),e.jsx("li",{children:"搜索建议的批量查询"}),e.jsx("li",{children:"批量数据更新和操作"}),e.jsx("li",{children:"图表数据的批量获取"})]})]}),e.jsxs("div",{children:[e.jsx("h3",{className:"text-lg font-semibold mb-2",children:"注意事项"}),e.jsxs("ul",{className:"list-disc list-inside space-y-1 text-gray-700",children:[e.jsx("li",{children:"合理设置批次大小和超时时间"}),e.jsx("li",{children:"考虑请求失败时的错误处理"}),e.jsx("li",{children:"注意批处理对用户体验的影响"}),e.jsx("li",{children:"确保服务端支持批处理接口"})]})]})]}),examples:[{title:"基础批处理功能",component:e.jsx(P,{}),description:"演示请求批处理的基本功能，包括单个请求、批处理和请求合并",observationPoints:["单个请求的立即处理","多个请求的批处理合并","重复请求的结果共享","批处理状态的实时更新"],keyPoints:["达到批次大小时立即处理批次","超时时间到达时处理未满批次","相同参数的请求会共享结果","提供详细的批处理状态统计"],commonTraps:["批次大小设置过大导致延迟","超时时间设置过短影响合并效果","没有处理批处理失败的情况"],solutions:["根据应用场景合理设置批次大小","平衡延迟和合并效果设置超时时间","实现完善的错误处理和重试机制"],importantTips:["批处理会引入一定的延迟","请求合并可以显著减少重复请求","配置参数需要根据实际场景调优"],codeExample:{title:"基础批处理管理器实现",code:`// 基础批处理管理器
class BasicBatchingManager {
  private pendingRequests: Map<string, BatchRequest[]> = new Map();
  private batchTimers: Map<string, NodeJS.Timeout> = new Map();
  private config = {
    batchSize: 5,
    batchTimeout: 100,
    maxWaitTime: 1000,
    enableMerging: true
  };
  private listeners = new Set<(state: any) => void>();
  private state = {
    pendingRequests: [],
    processingBatches: 0,
    completedBatches: 0,
    mergedRequests: 0,
    totalRequests: 0
  };

  // 添加请求到批处理队列
  addRequest<T>(key: string, params: any, requestFn: (batchParams: any[]) => Promise<T[]>): Promise<T> {
    return new Promise((resolve, reject) => {
      const requestId = \`req-\${Date.now()}-\${Math.random().toString(36).substr(2, 9)}\`;
      const request = {
        id: requestId,
        key,
        params,
        resolve,
        reject,
        timestamp: Date.now(),
        timeout: this.config.maxWaitTime
      };
      
      this.state.totalRequests++;
      
      // 检查请求合并
      if (this.config.enableMerging) {
        const existingRequests = this.pendingRequests.get(key) || [];
        const duplicateRequest = existingRequests.find(req => 
          JSON.stringify(req.params) === JSON.stringify(params)
        );
        
        if (duplicateRequest) {
          // 合并请求：共享结果
          this.state.mergedRequests++;
          const originalResolve = duplicateRequest.resolve;
          const originalReject = duplicateRequest.reject;
          
          duplicateRequest.resolve = (value: T) => {
            originalResolve(value);
            resolve(value);
          };
          
          duplicateRequest.reject = (error: any) => {
            originalReject(error);
            reject(error);
          };
          
          this.notify();
          return;
        }
      }
      
      // 添加新请求
      if (!this.pendingRequests.has(key)) {
        this.pendingRequests.set(key, []);
      }
      
      this.pendingRequests.get(key)!.push(request);
      this.updatePendingState();
      
      // 检查是否达到批次大小
      const requests = this.pendingRequests.get(key)!;
      if (requests.length >= this.config.batchSize) {
        this.processBatch(key, requestFn);
      } else {
        // 设置批处理定时器
        this.setBatchTimer(key, requestFn);
      }
    });
  }

  // 设置批处理定时器
  private setBatchTimer<T>(key: string, requestFn: (batchParams: any[]) => Promise<T[]>) {
    if (this.batchTimers.has(key)) {
      return; // 定时器已存在
    }
    
    const timer = setTimeout(() => {
      this.processBatch(key, requestFn);
    }, this.config.batchTimeout);
    
    this.batchTimers.set(key, timer);
  }

  // 处理批次
  private async processBatch<T>(key: string, requestFn: (batchParams: any[]) => Promise<T[]>) {
    const requests = this.pendingRequests.get(key) || [];
    if (requests.length === 0) return;
    
    // 清除定时器
    const timer = this.batchTimers.get(key);
    if (timer) {
      clearTimeout(timer);
      this.batchTimers.delete(key);
    }
    
    // 移除待处理请求
    this.pendingRequests.delete(key);
    this.state.processingBatches++;
    this.updatePendingState();
    this.notify();
    
    try {
      // 提取批处理参数
      const batchParams = requests.map(req => req.params);
      
      // 执行批处理请求
      const results = await requestFn(batchParams);
      
      // 分发结果
      requests.forEach((request, index) => {
        if (index < results.length) {
          request.resolve(results[index]);
        } else {
          request.reject(new Error('Batch result index out of bounds'));
        }
      });
      
      this.state.completedBatches++;
    } catch (error) {
      // 批处理失败，拒绝所有请求
      requests.forEach(request => {
        request.reject(error);
      });
    } finally {
      this.state.processingBatches--;
      this.notify();
    }
  }

  // 更新待处理状态
  private updatePendingState() {
    const allPending: BatchRequest[] = [];
    this.pendingRequests.forEach(requests => {
      allPending.push(...requests);
    });
    this.state.pendingRequests = allPending;
  }

  // 通知状态变更
  private notify() {
    this.listeners.forEach(listener => listener(this.state));
  }

  // 订阅状态变更
  subscribe(listener: (state: any) => void) {
    this.listeners.add(listener);
    return () => this.listeners.delete(listener);
  }

  // 获取当前状态
  getState() {
    return { ...this.state };
  }
}

// React Hook 封装
const useBasicBatching = () => {
  const [manager] = useState(() => new BasicBatchingManager());
  const [state, setState] = useState(manager.getState());

  useEffect(() => {
    const unsubscribe = manager.subscribe(setState);
    return unsubscribe;
  }, [manager]);

  return { manager, state };
};

// 组件使用示例
const BasicBatchingExample: React.FC = () => {
  const { manager, state } = useBasicBatching();
  const [results, setResults] = useState<any[]>([]);
  const [logs, setLogs] = useState<string[]>([]);

  const addLog = (message: string) => {
    setLogs(prev => [...prev.slice(-9), \`\${new Date().toLocaleTimeString()}: \${message}\`]);
  };

  // 模拟API调用
  const simulateApiCall = async (params: any[]): Promise<any[]> => {
    await new Promise(resolve => setTimeout(resolve, Math.random() * 500 + 200));
    return params.map((param, index) => ({
      id: param.id || index,
      data: \`批处理结果 \${param.id || index}\`,
      timestamp: Date.now(),
      batchSize: params.length,
      processed: true
    }));
  };

  // 发送单个请求
  const sendSingleRequest = async () => {
    addLog('发送单个请求');
    try {
      const result = await manager.addRequest(
        'api-call',
        { id: Date.now() },
        simulateApiCall
      );
      setResults(prev => [result, ...prev.slice(0, 9)]);
      addLog(\`单个请求完成: \${result.data}\`);
    } catch (error) {
      addLog('单个请求失败');
    }
  };

  // 发送批处理请求
  const sendMultipleRequests = async () => {
    addLog('发送批处理请求（5个）');
    const promises = Array.from({ length: 5 }, async (_, index) => {
      try {
        const result = await manager.addRequest(
          'api-call',
          { id: Date.now() + index },
          simulateApiCall
        );
        addLog(\`批处理请求 \${index + 1} 完成: \${result.data}\`);
        return result;
      } catch (error) {
        addLog(\`批处理请求 \${index + 1} 失败\`);
        return null;
      }
    });

    const results = await Promise.all(promises);
    const validResults = results.filter(Boolean);
    setResults(prev => [...validResults, ...prev.slice(0, 5)]);
  };

  // 发送重复请求
  const sendDuplicateRequests = async () => {
    addLog('发送重复请求（3个相同参数）');
    const duplicateId = Date.now();
    const promises = Array.from({ length: 3 }, async (_, index) => {
      try {
        const result = await manager.addRequest(
          'api-call',
          { id: duplicateId }, // 相同参数
          simulateApiCall
        );
        addLog(\`重复请求 \${index + 1} 完成: \${result.data}\`);
        return result;
      } catch (error) {
        addLog(\`重复请求 \${index + 1} 失败\`);
        return null;
      }
    });

    const results = await Promise.all(promises);
    const validResults = results.filter(Boolean);
    setResults(prev => [...validResults, ...prev.slice(0, 7)]);
  };

  return (
    <div className="space-y-4">
      <div className="grid grid-cols-3 gap-4">
        <button
          onClick={sendSingleRequest}
          className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 text-sm"
        >
          发送单个请求
        </button>
        <button
          onClick={sendMultipleRequests}
          className="px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600 text-sm"
        >
          发送批处理请求
        </button>
        <button
          onClick={sendDuplicateRequests}
          className="px-4 py-2 bg-purple-500 text-white rounded hover:bg-purple-600 text-sm"
        >
          发送重复请求
        </button>
      </div>
      
      <div className="grid grid-cols-2 gap-4">
        <div className="bg-blue-50 p-3 rounded">
          <h4 className="font-medium mb-2">批处理状态</h4>
          <div className="text-sm text-gray-700 space-y-1">
            <div>待处理请求: {state.pendingRequests.length}</div>
            <div>处理中批次: {state.processingBatches}</div>
            <div>已完成批次: {state.completedBatches}</div>
            <div>合并请求数: {state.mergedRequests}</div>
            <div>总请求数: {state.totalRequests}</div>
          </div>
        </div>
        
        <div className="bg-gray-50 p-3 rounded max-h-40 overflow-y-auto">
          <h4 className="font-medium mb-2">操作日志</h4>
          {logs.map((log, index) => (
            <div key={index} className="text-sm text-gray-700 font-mono">{log}</div>
          ))}
        </div>
      </div>
    </div>
  );
};`,language:"typescript",highlights:[22,24,26,28,30,32,34,36,38,40,42,44,46,48,50,52,58,60,66,68,74,76,78,80,86,88,94,96,102,104,110,112,118,120,126,128,134,136,142,144,150,152,158,160,166,168,174,176,182,184,190,192,198,200,206,208,214,216,222,224,230,232,238,240,246,248]},highlights:[22,24,26,28,30,32,34,36,38,40,42,44,46,48,50,52,58,60,66,68,74,76,78,80,86,88,94,96,102,104,110,112,118,120,126,128,134,136,142,144,150,152,158,160,166,168,174,176,182,184,190,192,198,200,206,208,214,216,222,224,230,232,238,240,246,248]},{title:"配置管理",component:e.jsx($,{}),description:"演示如何配置和测试批处理参数",observationPoints:["批次大小对处理时机的影响","超时时间对批处理行为的影响","请求合并开关的作用","配置变更的实时生效"],keyPoints:["批次大小决定何时触发批处理","超时时间控制最大等待延迟","最大等待时间防止请求无限等待","请求合并可以独立开关控制"],commonTraps:["批次大小设置不当影响性能","超时时间过长影响用户体验","没有考虑不同场景的配置需求"],solutions:["根据请求频率和延迟要求设置批次大小","平衡用户体验和批处理效果设置超时","为不同类型的请求提供独立配置"],importantTips:["推荐批次大小5-10，超时100-500ms","配置变更会影响后续的请求处理","测试功能可以验证配置的效果"],codeExample:{title:"配置管理批处理器实现",code:`// 配置管理批处理器
class ConfigurableBatchingManager {
  private pendingRequests: Map<string, BatchRequest[]> = new Map();
  private batchTimers: Map<string, NodeJS.Timeout> = new Map();
  private listeners = new Set<(state: any) => void>();
  private state = {
    pendingRequests: [],
    processingBatches: 0,
    completedBatches: 0,
    mergedRequests: 0,
    totalRequests: 0
  };
  
  // 默认配置
  private config: BatchConfig = {
    batchSize: 5,
    batchTimeout: 100,
    maxWaitTime: 1000,
    enableMerging: true
  };

  // 设置配置
  setConfig(newConfig: Partial<BatchConfig>) {
    this.config = { ...this.config, ...newConfig };
    this.notify();
  }

  // 获取配置
  getConfig(): BatchConfig {
    return { ...this.config };
  }

  // 添加请求（支持配置验证）
  addRequest<T>(key: string, params: any, requestFn: (batchParams: any[]) => Promise<T[]>): Promise<T> {
    return new Promise((resolve, reject) => {
      // 验证配置
      if (this.config.batchSize <= 0) {
        reject(new Error('批次大小必须大于0'));
        return;
      }
      
      if (this.config.batchTimeout < 0) {
        reject(new Error('批处理超时时间不能为负数'));
        return;
      }
      
      const requestId = \`req-\${Date.now()}-\${Math.random().toString(36).substr(2, 9)}\`;
      const request = {
        id: requestId,
        key,
        params,
        resolve,
        reject,
        timestamp: Date.now(),
        timeout: this.config.maxWaitTime
      };
      
      this.state.totalRequests++;
      
      // 检查请求合并（基于配置）
      if (this.config.enableMerging) {
        const existingRequests = this.pendingRequests.get(key) || [];
        const duplicateRequest = existingRequests.find(req => 
          JSON.stringify(req.params) === JSON.stringify(params)
        );
        
        if (duplicateRequest) {
          this.state.mergedRequests++;
          const originalResolve = duplicateRequest.resolve;
          const originalReject = duplicateRequest.reject;
          
          duplicateRequest.resolve = (value: T) => {
            originalResolve(value);
            resolve(value);
          };
          
          duplicateRequest.reject = (error: any) => {
            originalReject(error);
            reject(error);
          };
          
          this.notify();
          return;
        }
      }
      
      // 添加新请求
      if (!this.pendingRequests.has(key)) {
        this.pendingRequests.set(key, []);
      }
      
      this.pendingRequests.get(key)!.push(request);
      this.updatePendingState();
      
      // 检查批次大小（基于配置）
      const requests = this.pendingRequests.get(key)!;
      if (requests.length >= this.config.batchSize) {
        this.processBatch(key, requestFn);
      } else {
        this.setBatchTimer(key, requestFn);
      }
    });
  }

  // 设置批处理定时器（基于配置）
  private setBatchTimer<T>(key: string, requestFn: (batchParams: any[]) => Promise<T[]>) {
    if (this.batchTimers.has(key)) {
      return;
    }
    
    const timer = setTimeout(() => {
      this.processBatch(key, requestFn);
    }, this.config.batchTimeout);
    
    this.batchTimers.set(key, timer);
  }

  // 处理批次
  private async processBatch<T>(key: string, requestFn: (batchParams: any[]) => Promise<T[]>) {
    const requests = this.pendingRequests.get(key) || [];
    if (requests.length === 0) return;
    
    const timer = this.batchTimers.get(key);
    if (timer) {
      clearTimeout(timer);
      this.batchTimers.delete(key);
    }
    
    this.pendingRequests.delete(key);
    this.state.processingBatches++;
    this.updatePendingState();
    this.notify();
    
    try {
      const batchParams = requests.map(req => req.params);
      const results = await requestFn(batchParams);
      
      requests.forEach((request, index) => {
        if (index < results.length) {
          request.resolve(results[index]);
        } else {
          request.reject(new Error('Batch result index out of bounds'));
        }
      });
      
      this.state.completedBatches++;
    } catch (error) {
      requests.forEach(request => {
        request.reject(error);
      });
    } finally {
      this.state.processingBatches--;
      this.notify();
    }
  }

  // 测试配置效果
  async testConfiguration(testParams: { requestCount: number; delay: number }) {
    const startTime = Date.now();
    const promises: Promise<any>[] = [];
    
    for (let i = 0; i < testParams.requestCount; i++) {
      const promise = this.addRequest(
        'test-config',
        { id: i, timestamp: Date.now() },
        async (params) => {
          await new Promise(resolve => setTimeout(resolve, testParams.delay));
          return params.map((param, index) => ({
            id: param.id,
            result: \`测试结果 \${param.id}\`,
            batchSize: params.length,
            processed: true
          }));
        }
      );
      promises.push(promise);
      
      // 模拟请求间隔
      if (i < testParams.requestCount - 1) {
        await new Promise(resolve => setTimeout(resolve, 50));
      }
    }
    
    const results = await Promise.all(promises);
    const endTime = Date.now();
    
    return {
      totalTime: endTime - startTime,
      requestCount: testParams.requestCount,
      results: results.length,
      averageTime: (endTime - startTime) / testParams.requestCount,
      config: this.getConfig()
    };
  }

  // 重置统计
  resetStats() {
    this.state = {
      pendingRequests: [],
      processingBatches: 0,
      completedBatches: 0,
      mergedRequests: 0,
      totalRequests: 0
    };
    this.notify();
  }

  private updatePendingState() {
    const allPending: BatchRequest[] = [];
    this.pendingRequests.forEach(requests => {
      allPending.push(...requests);
    });
    this.state.pendingRequests = allPending;
  }

  private notify() {
    this.listeners.forEach(listener => listener(this.state));
  }

  subscribe(listener: (state: any) => void) {
    this.listeners.add(listener);
    return () => this.listeners.delete(listener);
  }

  getState() {
    return { ...this.state };
  }
}

// React Hook 封装
const useConfigurableBatching = () => {
  const [manager] = useState(() => new ConfigurableBatchingManager());
  const [state, setState] = useState(manager.getState());
  const [config, setConfig] = useState(manager.getConfig());

  useEffect(() => {
    const unsubscribe = manager.subscribe((newState) => {
      setState(newState);
      setConfig(manager.getConfig());
    });
    return unsubscribe;
  }, [manager]);

  const updateConfig = (newConfig: Partial<BatchConfig>) => {
    manager.setConfig(newConfig);
    setConfig(manager.getConfig());
  };

  return { manager, state, config, updateConfig };
};

// 组件使用示例
const ConfigurationExample: React.FC = () => {
  const { manager, state, config, updateConfig } = useConfigurableBatching();
  const [testResults, setTestResults] = useState<any[]>([]);
  const [logs, setLogs] = useState<string[]>([]);
  const [isTestRunning, setIsTestRunning] = useState(false);

  const addLog = (message: string) => {
    setLogs(prev => [...prev.slice(-9), \`\${new Date().toLocaleTimeString()}: \${message}\`]);
  };

  // 测试当前配置
  const testCurrentConfig = async () => {
    if (isTestRunning) return;
    
    setIsTestRunning(true);
    addLog(\`开始测试配置: 批次大小=\${config.batchSize}, 超时=\${config.batchTimeout}ms\`);
    
    try {
      const result = await manager.testConfiguration({
        requestCount: 8,
        delay: 200
      });
      
      setTestResults(prev => [result, ...prev.slice(0, 4)]);
      addLog(\`测试完成: 总时间=\${result.totalTime}ms, 平均时间=\${result.averageTime.toFixed(1)}ms\`);
    } catch (error) {
      addLog('测试失败');
    } finally {
      setIsTestRunning(false);
    }
  };

  // 重置统计
  const resetStats = () => {
    manager.resetStats();
    setTestResults([]);
    setLogs([]);
    addLog('统计数据已重置');
  };

  return (
    <div className="space-y-4">
      <div className="grid grid-cols-2 gap-4">
        <div className="bg-blue-50 p-3 rounded">
          <h4 className="font-medium mb-2">配置参数</h4>
          <div className="space-y-2">
            <div>
              <label className="block text-sm font-medium mb-1">批次大小</label>
              <input
                type="number"
                min="1"
                max="20"
                value={config.batchSize}
                onChange={(e) => updateConfig({ batchSize: parseInt(e.target.value) || 1 })}
                className="w-full px-2 py-1 border rounded text-sm"
              />
            </div>
            <div>
              <label className="block text-sm font-medium mb-1">超时时间(ms)</label>
              <input
                type="number"
                min="50"
                max="2000"
                value={config.batchTimeout}
                onChange={(e) => updateConfig({ batchTimeout: parseInt(e.target.value) || 50 })}
                className="w-full px-2 py-1 border rounded text-sm"
              />
            </div>
            <div>
              <label className="block text-sm font-medium mb-1">最大等待时间(ms)</label>
              <input
                type="number"
                min="500"
                max="5000"
                value={config.maxWaitTime}
                onChange={(e) => updateConfig({ maxWaitTime: parseInt(e.target.value) || 500 })}
                className="w-full px-2 py-1 border rounded text-sm"
              />
            </div>
            <div className="flex items-center">
              <input
                type="checkbox"
                checked={config.enableMerging}
                onChange={(e) => updateConfig({ enableMerging: e.target.checked })}
                className="mr-2"
              />
              <label className="text-sm font-medium">启用请求合并</label>
            </div>
          </div>
        </div>
        
        <div className="bg-green-50 p-3 rounded">
          <h4 className="font-medium mb-2">当前状态</h4>
          <div className="text-sm text-gray-700 space-y-1">
            <div>待处理请求: {state.pendingRequests.length}</div>
            <div>处理中批次: {state.processingBatches}</div>
            <div>已完成批次: {state.completedBatches}</div>
            <div>合并请求数: {state.mergedRequests}</div>
            <div>总请求数: {state.totalRequests}</div>
          </div>
        </div>
      </div>
      
      <div className="flex gap-2">
        <button
          onClick={testCurrentConfig}
          disabled={isTestRunning}
          className={\`px-4 py-2 rounded text-sm \${isTestRunning 
            ? 'bg-gray-300 text-gray-500 cursor-not-allowed' 
            : 'bg-blue-500 text-white hover:bg-blue-600'
          }\`}
        >
          {isTestRunning ? '测试中...' : '测试当前配置'}
        </button>
        <button
          onClick={resetStats}
          className="px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600 text-sm"
        >
          重置统计
        </button>
      </div>
      
      {testResults.length > 0 && (
        <div className="bg-yellow-50 p-3 rounded">
          <h4 className="font-medium mb-2">测试结果</h4>
          {testResults.map((result, index) => (
            <div key={index} className="text-sm text-gray-700 mb-2 p-2 bg-white rounded">
              <div className="grid grid-cols-2 gap-2">
                <div>总时间: {result.totalTime}ms</div>
                <div>平均时间: {result.averageTime.toFixed(1)}ms</div>
                <div>请求数量: {result.requestCount}</div>
                <div>批次大小: {result.config.batchSize}</div>
              </div>
            </div>
          ))}
        </div>
      )}
      
      <div className="bg-gray-50 p-3 rounded max-h-40 overflow-y-auto">
        <h4 className="font-medium mb-2">操作日志</h4>
        {logs.map((log, index) => (
          <div key={index} className="text-sm text-gray-700 font-mono">{log}</div>
        ))}
      </div>
    </div>
  );
};`,language:"typescript",highlights:[14,16,18,20,22,24,26,28,30,32,34,36,38,40,42,44,50,52,58,60,66,68,74,76,82,84,90,92,98,100,106,108,114,116,122,124,130,132,138,140,146,148,154,156,162,164,170,172,178,180,186,188,194,196,202,204,210,212,218,220,226,228,234,236,242,244,250,252,258,260,266,268,274,276,282,284,290,292,298,300,306,308,314,316,322,324,330,332,338,340,346,348]},highlights:[14,16,18,20,22,24,26,28,30,32,34,36,38,40,42,44,50,52,58,60,66,68,74,76,82,84,90,92,98,100,106,108,114,116,122,124,130,132,138,140,146,148,154,156,162,164,170,172,178,180,186,188,194,196,202,204,210,212,218,220,226,228,234,236,242,244,250,252,258,260,266,268,274,276,282,284,290,292,298,300,306,308,314,316,322,324,330,332,338,340,346,348]},{title:"实际应用场景",component:e.jsx(M,{}),description:"演示在真实应用中的批处理使用场景",observationPoints:["用户列表页面的批量数据加载","搜索建议的批量查询优化","批量操作的请求合并","用户交互的响应性能"],keyPoints:["页面加载时批量获取用户信息","搜索输入时智能批处理查询","批量操作减少服务器压力","请求合并避免重复数据获取"],commonTraps:["批处理延迟影响用户体验","没有考虑请求失败的处理","批量操作缺乏进度反馈"],solutions:["合理设置批处理参数平衡性能和体验","实现完善的错误处理和重试机制","提供批量操作的进度和状态反馈"],importantTips:["用户列表加载适合较大的批次大小","搜索建议需要较短的超时时间","批量操作要考虑用户的选择变化"],codeExample:{title:"真实业务场景批处理实现",code:`// 真实业务场景批处理管理器
class RealWorldBatchingManager {
  private managers: Map<string, RequestBatchingManager> = new Map();
  private globalStats = {
    totalRequests: 0,
    totalBatches: 0,
    averageResponseTime: 0,
    errorRate: 0,
    scenarios: new Map<string, any>()
  };
  private listeners = new Set<(stats: any) => void>();

  constructor() {
    // 为不同场景配置专门的批处理器
    this.initializeScenarios();
  }

  private initializeScenarios() {
    // 用户列表加载 - 大批次，长超时
    const userListManager = new RequestBatchingManager();
    userListManager.setConfig({
      batchSize: 10,
      batchTimeout: 300,
      maxWaitTime: 2000,
      enableMerging: true
    });
    this.managers.set('userList', userListManager);

    // 搜索建议 - 小批次，短超时，高合并率
    const searchManager = new RequestBatchingManager();
    searchManager.setConfig({
      batchSize: 3,
      batchTimeout: 50,
      maxWaitTime: 500,
      enableMerging: true
    });
    this.managers.set('search', searchManager);

    // 批量操作 - 中等批次，中等超时
    const batchOpManager = new RequestBatchingManager();
    batchOpManager.setConfig({
      batchSize: 5,
      batchTimeout: 200,
      maxWaitTime: 1500,
      enableMerging: false // 批量操作通常不合并
    });
    this.managers.set('batchOp', batchOpManager);

    // 数据同步 - 大批次，长超时，低优先级
    const syncManager = new RequestBatchingManager();
    syncManager.setConfig({
      batchSize: 20,
      batchTimeout: 1000,
      maxWaitTime: 5000,
      enableMerging: true
    });
    this.managers.set('sync', syncManager);
  }

  // 用户列表加载场景
  async loadUsers(userIds: number[]): Promise<User[]> {
    const manager = this.managers.get('userList')!;
    const promises = userIds.map(id => 
      manager.addRequest(
        'load-users',
        { userId: id, timestamp: Date.now() },
        async (batchParams) => {
          // 模拟批量用户数据加载
          const ids = batchParams.map(p => p.userId);
          await new Promise(resolve => setTimeout(resolve, 150));
          
          return ids.map(id => ({
            id,
            name: \`用户\${id}\`,
            email: \`user\${id}@example.com\`,
            avatar: \`/avatars/user\${id}.jpg\`,
            status: Math.random() > 0.8 ? 'offline' : 'online',
            lastLogin: new Date(Date.now() - Math.random() * 86400000).toISOString()
          }));
        }
      )
    );

    const results = await Promise.all(promises);
    this.updateStats('userList', results.length);
    return results;
  }

  // 搜索建议场景
  async getSearchSuggestions(query: string): Promise<string[]> {
    const manager = this.managers.get('search')!;
    
    return manager.addRequest(
      'search-suggestions',
      { query: query.toLowerCase().trim(), timestamp: Date.now() },
      async (batchParams) => {
        // 模拟批量搜索建议
        const queries = batchParams.map(p => p.query);
        await new Promise(resolve => setTimeout(resolve, 80));
        
        return queries.map(q => {
          const suggestions = [
            \`\${q} 教程\`,
            \`\${q} 实例\`,
            \`\${q} 最佳实践\`,
            \`\${q} 常见问题\`,
            \`\${q} 进阶指南\`
          ];
          return suggestions.slice(0, 3 + Math.floor(Math.random() * 3));
        });
      }
    );
  }

  // 批量操作场景
  async batchUpdateUsers(updates: UserUpdate[]): Promise<BatchUpdateResult[]> {
    const manager = this.managers.get('batchOp')!;
    const promises = updates.map(update => 
      manager.addRequest(
        'batch-update',
        { ...update, timestamp: Date.now() },
        async (batchParams) => {
          // 模拟批量更新操作
          await new Promise(resolve => setTimeout(resolve, 200));
          
          return batchParams.map(param => {
            const success = Math.random() > 0.1; // 90% 成功率
            return {
              id: param.userId,
              success,
              message: success ? '更新成功' : '更新失败',
              updatedFields: success ? param.fields : [],
              error: success ? null : '数据验证失败'
            };
          });
        }
      )
    );

    const results = await Promise.all(promises);
    this.updateStats('batchOp', results.length);
    return results;
  }

  // 数据同步场景
  async syncData(dataItems: DataItem[]): Promise<SyncResult[]> {
    const manager = this.managers.get('sync')!;
    const promises = dataItems.map(item => 
      manager.addRequest(
        'data-sync',
        { ...item, timestamp: Date.now() },
        async (batchParams) => {
          // 模拟数据同步
          await new Promise(resolve => setTimeout(resolve, 300));
          
          return batchParams.map(param => ({
            id: param.id,
            type: param.type,
            synced: true,
            syncTime: new Date().toISOString(),
            conflicts: Math.random() > 0.95 ? ['version_conflict'] : []
          }));
        }
      )
    );

    const results = await Promise.all(promises);
    this.updateStats('sync', results.length);
    return results;
  }

  // 获取场景统计
  getScenarioStats(scenario: string) {
    const manager = this.managers.get(scenario);
    if (!manager) return null;
    
    return {
      config: manager.getConfig(),
      state: manager.getState(),
      scenario: this.globalStats.scenarios.get(scenario) || {
        requestCount: 0,
        batchCount: 0,
        averageTime: 0,
        errorCount: 0
      }
    };
  }

  // 更新统计信息
  private updateStats(scenario: string, requestCount: number) {
    this.globalStats.totalRequests += requestCount;
    this.globalStats.totalBatches += 1;
    
    const scenarioStats = this.globalStats.scenarios.get(scenario) || {
      requestCount: 0,
      batchCount: 0,
      averageTime: 0,
      errorCount: 0
    };
    
    scenarioStats.requestCount += requestCount;
    scenarioStats.batchCount += 1;
    this.globalStats.scenarios.set(scenario, scenarioStats);
    
    this.notifyListeners();
  }

  // 重置所有统计
  resetAllStats() {
    this.globalStats = {
      totalRequests: 0,
      totalBatches: 0,
      averageResponseTime: 0,
      errorRate: 0,
      scenarios: new Map()
    };
    
    this.managers.forEach(manager => manager.clearAll());
    this.notifyListeners();
  }

  private notifyListeners() {
    this.listeners.forEach(listener => listener(this.globalStats));
  }

  subscribe(listener: (stats: any) => void) {
    this.listeners.add(listener);
    return () => this.listeners.delete(listener);
  }

  getGlobalStats() {
    return { ...this.globalStats };
  }
}

// 类型定义
interface User {
  id: number;
  name: string;
  email: string;
  avatar: string;
  status: 'online' | 'offline';
  lastLogin: string;
}

interface UserUpdate {
  userId: number;
  fields: Record<string, any>;
}

interface BatchUpdateResult {
  id: number;
  success: boolean;
  message: string;
  updatedFields: string[];
  error: string | null;
}

interface DataItem {
  id: string;
  type: string;
  data: any;
}

interface SyncResult {
  id: string;
  type: string;
  synced: boolean;
  syncTime: string;
  conflicts: string[];
}

// React Hook 封装
const useRealWorldBatching = () => {
  const [manager] = useState(() => new RealWorldBatchingManager());
  const [globalStats, setGlobalStats] = useState(manager.getGlobalStats());
  const [scenarioStats, setScenarioStats] = useState<Record<string, any>>({});

  useEffect(() => {
    const unsubscribe = manager.subscribe((stats) => {
      setGlobalStats(stats);
      
      // 更新各场景统计
      const scenarios = ['userList', 'search', 'batchOp', 'sync'];
      const newScenarioStats: Record<string, any> = {};
      scenarios.forEach(scenario => {
        newScenarioStats[scenario] = manager.getScenarioStats(scenario);
      });
      setScenarioStats(newScenarioStats);
    });
    return unsubscribe;
  }, [manager]);

  return { manager, globalStats, scenarioStats };
};

// 组件使用示例
const RealWorldExample: React.FC = () => {
  const { manager, globalStats, scenarioStats } = useRealWorldBatching();
  const [logs, setLogs] = useState<string[]>([]);
  const [isLoading, setIsLoading] = useState<Record<string, boolean>>({});
  const [results, setResults] = useState<Record<string, any>>({});

  const addLog = (message: string) => {
    setLogs(prev => [...prev.slice(-9), \`\${new Date().toLocaleTimeString()}: \${message}\`]);
  };

  // 测试用户列表加载
  const testUserList = async () => {
    if (isLoading.userList) return;
    
    setIsLoading(prev => ({ ...prev, userList: true }));
    addLog('开始加载用户列表...');
    
    try {
      const userIds = Array.from({ length: 8 }, (_, i) => i + 1);
      const users = await manager.loadUsers(userIds);
      setResults(prev => ({ ...prev, users }));
      addLog(\`用户列表加载完成，共\${users.length}个用户\`);
    } catch (error) {
      addLog('用户列表加载失败');
    } finally {
      setIsLoading(prev => ({ ...prev, userList: false }));
    }
  };

  // 测试搜索建议
  const testSearch = async () => {
    if (isLoading.search) return;
    
    setIsLoading(prev => ({ ...prev, search: true }));
    addLog('获取搜索建议...');
    
    try {
      const queries = ['React', 'Vue', 'Angular'];
      const suggestions = await Promise.all(
        queries.map(query => manager.getSearchSuggestions(query))
      );
      setResults(prev => ({ ...prev, suggestions }));
      addLog(\`搜索建议获取完成，共\${suggestions.flat().length}条建议\`);
    } catch (error) {
      addLog('搜索建议获取失败');
    } finally {
      setIsLoading(prev => ({ ...prev, search: false }));
    }
  };

  // 测试批量更新
  const testBatchUpdate = async () => {
    if (isLoading.batchOp) return;
    
    setIsLoading(prev => ({ ...prev, batchOp: true }));
    addLog('执行批量更新...');
    
    try {
      const updates: UserUpdate[] = [
        { userId: 1, fields: { name: '新用户1', email: 'new1@example.com' } },
        { userId: 2, fields: { name: '新用户2', status: 'offline' } },
        { userId: 3, fields: { avatar: '/new-avatar.jpg' } }
      ];
      const updateResults = await manager.batchUpdateUsers(updates);
      setResults(prev => ({ ...prev, updateResults }));
      const successCount = updateResults.filter(r => r.success).length;
      addLog(\`批量更新完成，成功\${successCount}/\${updateResults.length}\`);
    } catch (error) {
      addLog('批量更新失败');
    } finally {
      setIsLoading(prev => ({ ...prev, batchOp: false }));
    }
  };

  // 测试数据同步
  const testDataSync = async () => {
    if (isLoading.sync) return;
    
    setIsLoading(prev => ({ ...prev, sync: true }));
    addLog('开始数据同步...');
    
    try {
      const dataItems: DataItem[] = [
        { id: 'item1', type: 'user', data: { name: 'User 1' } },
        { id: 'item2', type: 'post', data: { title: 'Post 1' } },
        { id: 'item3', type: 'comment', data: { content: 'Comment 1' } }
      ];
      const syncResults = await manager.syncData(dataItems);
      setResults(prev => ({ ...prev, syncResults }));
      const syncedCount = syncResults.filter(r => r.synced).length;
      addLog(\`数据同步完成，成功\${syncedCount}/\${syncResults.length}\`);
    } catch (error) {
      addLog('数据同步失败');
    } finally {
      setIsLoading(prev => ({ ...prev, sync: false }));
    }
  };

  // 重置统计
  const resetStats = () => {
    manager.resetAllStats();
    setResults({});
    setLogs([]);
    addLog('所有统计数据已重置');
  };

  return (
    <div className="space-y-4">
      <div className="grid grid-cols-2 gap-4">
        <div className="bg-blue-50 p-3 rounded">
          <h4 className="font-medium mb-2">全局统计</h4>
          <div className="text-sm text-gray-700 space-y-1">
            <div>总请求数: {globalStats.totalRequests}</div>
            <div>总批次数: {globalStats.totalBatches}</div>
            <div>活跃场景: {globalStats.scenarios.size}</div>
          </div>
        </div>
        
        <div className="bg-green-50 p-3 rounded">
          <h4 className="font-medium mb-2">场景配置</h4>
          <div className="text-xs text-gray-600 space-y-1">
            <div>用户列表: 批次10, 超时300ms</div>
            <div>搜索建议: 批次3, 超时50ms</div>
            <div>批量操作: 批次5, 超时200ms</div>
            <div>数据同步: 批次20, 超时1000ms</div>
          </div>
        </div>
      </div>
      
      <div className="grid grid-cols-4 gap-2">
        <button
          onClick={testUserList}
          disabled={isLoading.userList}
          className={\`px-3 py-2 rounded text-sm \${
            isLoading.userList 
              ? 'bg-gray-300 text-gray-500 cursor-not-allowed' 
              : 'bg-blue-500 text-white hover:bg-blue-600'
          }\`}
        >
          {isLoading.userList ? '加载中...' : '用户列表'}
        </button>
        <button
          onClick={testSearch}
          disabled={isLoading.search}
          className={\`px-3 py-2 rounded text-sm \${
            isLoading.search 
              ? 'bg-gray-300 text-gray-500 cursor-not-allowed' 
              : 'bg-green-500 text-white hover:bg-green-600'
          }\`}
        >
          {isLoading.search ? '搜索中...' : '搜索建议'}
        </button>
        <button
          onClick={testBatchUpdate}
          disabled={isLoading.batchOp}
          className={\`px-3 py-2 rounded text-sm \${
            isLoading.batchOp 
              ? 'bg-gray-300 text-gray-500 cursor-not-allowed' 
              : 'bg-yellow-500 text-white hover:bg-yellow-600'
          }\`}
        >
          {isLoading.batchOp ? '更新中...' : '批量更新'}
        </button>
        <button
          onClick={testDataSync}
          disabled={isLoading.sync}
          className={\`px-3 py-2 rounded text-sm \${
            isLoading.sync 
              ? 'bg-gray-300 text-gray-500 cursor-not-allowed' 
              : 'bg-purple-500 text-white hover:bg-purple-600'
          }\`}
        >
          {isLoading.sync ? '同步中...' : '数据同步'}
        </button>
      </div>
      
      <button
        onClick={resetStats}
        className="px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600 text-sm"
      >
        重置统计
      </button>
      
      <div className="bg-gray-50 p-3 rounded max-h-40 overflow-y-auto">
        <h4 className="font-medium mb-2">操作日志</h4>
        {logs.map((log, index) => (
          <div key={index} className="text-sm text-gray-700 font-mono">{log}</div>
        ))}
      </div>
    </div>
  );
};`,language:"typescript",highlights:[14,16,18,20,22,24,26,28,30,32,34,36,38,40,42,44,50,52,58,60,66,68,74,76,82,84,90,92,98,100,106,108,114,116,122,124,130,132,138,140,146,148,154,156,162,164,170,172,178,180,186,188,194,196,202,204,210,212,218,220,226,228,234,236,242,244,250,252,258,260,266,268,274,276,282,284,290,292,298,300,306,308,314,316,322,324,330,332,338,340,346,348,354,356,362,364,370,372,378,380,386,388,394,396,402,404,410,412,418,420,426,428,434,436,442,444,450,452,458,460,466,468,474,476,482,484,490,492,498,500]},highlights:[14,16,18,20,22,24,26,28,30,32,34,36,38,40,42,44,50,52,58,60,66,68,74,76,82,84,90,92,98,100,106,108,114,116,122,124,130,132,138,140,146,148,154,156,162,164,170,172,178,180,186,188,194,196,202,204,210,212,218,220,226,228,234,236,242,244,250,252,258,260,266,268,274,276,282,284,290,292,298,300,306,308,314,316,322,324,330,332,338,340,346,348,354,356,362,364,370,372,378,380,386,388,394,396,402,404,410,412,418,420,426,428,434,436,442,444,450,452,458,460,466,468,474,476,482,484,490,492,498,500]}],tutorial:{concepts:["请求批处理是优化网络性能的重要技术","批处理可以显著减少网络请求数量","请求合并避免重复数据的获取","合理的配置是批处理成功的关键","批处理需要在性能和用户体验间平衡"],steps:["设计批处理请求的数据结构","实现请求队列和批次管理逻辑","添加请求合并和去重机制","实现批处理的触发和执行逻辑","创建配置管理和状态监控","集成到React应用中并提供Hook接口"],tips:["根据应用场景选择合适的批次大小","设置合理的超时时间平衡延迟和效果","实现完善的错误处理和重试机制","提供灵活的配置选项适应不同需求","监控批处理的性能和效果指标"]},interview:{questions:[{question:"请求批处理的核心原理是什么？",answer:"请求批处理的核心原理：1）收集一定时间内或数量的请求；2）将多个请求合并为一个批次；3）统一发送到服务端处理；4）将批处理结果分发给各个原始请求。这样可以减少网络往返次数，提高整体性能。关键是要平衡批次大小、等待时间和用户体验。"},{question:"如何实现请求的合并和去重？",answer:"请求合并实现：1）为每个请求生成唯一键（基于请求参数）；2）检查待处理队列中是否存在相同键的请求；3）如果存在，将新请求的回调函数绑定到现有请求；4）当批处理完成时，所有绑定的回调都会收到相同结果。这样避免了重复的网络请求和数据处理。"},{question:"批处理的触发机制有哪些？",answer:"批处理触发机制：1）数量触发：达到预设的批次大小时立即处理；2）时间触发：超过预设的等待时间后处理未满批次；3）手动触发：提供API强制处理所有待处理请求；4）优先级触发：高优先级请求可以提前触发批处理。多种机制结合使用可以在性能和响应性之间找到平衡。"},{question:"批处理在React应用中如何集成？",answer:"React集成方案：1）创建批处理管理器类封装核心逻辑；2）使用React Context提供全局批处理服务；3）创建自定义Hook简化组件中的使用；4）实现Provider组件管理批处理状态；5）提供配置接口允许动态调整参数；6）集成错误处理和状态监控功能。"}],keyPoints:["批处理通过合并请求减少网络开销","请求合并避免重复数据的获取","触发机制平衡性能和用户体验","配置管理提供灵活的优化选项","React集成提供便捷的使用接口"]},bestPractices:{dos:["根据应用场景合理设置批次大小","平衡延迟和合并效果设置超时时间","实现完善的错误处理和重试机制","提供灵活的配置选项适应不同需求","监控批处理的性能和效果指标","考虑服务端的批处理接口设计"],donts:["不要设置过大的批次大小影响响应性","不要忽略批处理失败的错误处理","不要在所有场景都使用相同配置","不要忘记处理请求超时的情况","不要忽略批处理对用户体验的影响"],patterns:["批处理模式：收集-合并-处理-分发","合并模式：基于键值去重相同请求","触发模式：多种条件触发批处理执行","配置模式：提供灵活的参数调整","监控模式：跟踪批处理的性能指标"]}}),z=()=>e.jsx(L,{children:e.jsx(k,{})});export{z as default};
