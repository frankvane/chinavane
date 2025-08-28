var C=Object.defineProperty;var K=(c,s,t)=>s in c?C(c,s,{enumerable:!0,configurable:!0,writable:!0,value:t}):c[s]=t;var N=(c,s,t)=>K(c,typeof s!="symbol"?s+"":s,t);import{j as e,r as o}from"./index-Bi_r7QuH.js";import{C as S}from"./ComponentTemplate-C5EWLtXX.js";import{a as v}from"./index-NIGUFBhG.js";class T{constructor(){N(this,"pendingRequests",new Map);N(this,"requestHistory",new Map);N(this,"cacheTimeout",5e3)}generateRequestKey(s,t,u,i){const n=u?JSON.stringify(u):"",d=i?JSON.stringify(i):"";return`${s.toUpperCase()}:${t}:${n}:${d}`}isDuplicateRequest(s){return this.pendingRequests.has(s)}getCachedResult(s){const t=this.requestHistory.get(s);return t&&Date.now()-t.timestamp<this.cacheTimeout?t.result:(t&&this.requestHistory.delete(s),null)}async deduplicatedRequest(s,t,u={}){const{params:i,data:n,useCache:d=!0}=u,m=this.generateRequestKey(s,t,i,n);if(d){const a=this.getCachedResult(m);if(a!==null)return Promise.resolve(a)}if(this.isDuplicateRequest(m))return this.pendingRequests.get(m);const p=this.executeRequest(s,t,{params:i,data:n});this.pendingRequests.set(m,p);try{const a=await p;return d&&this.requestHistory.set(m,{timestamp:Date.now(),result:a}),a}finally{this.pendingRequests.delete(m)}}async executeRequest(s,t,u){const{params:i,data:n}=u;return(await v({method:s,url:t,params:i,data:n})).data}getStats(){return{pendingCount:this.pendingRequests.size,cachedCount:this.requestHistory.size,pendingKeys:Array.from(this.pendingRequests.keys()),cachedKeys:Array.from(this.requestHistory.keys())}}clearCache(){this.requestHistory.clear()}clear(){this.pendingRequests.clear(),this.requestHistory.clear()}}const h=new T,k=(c=300)=>{const s=o.useRef(null),t=o.useRef(new Map),u=o.useCallback((n,d)=>new Promise((m,p)=>{s.current&&clearTimeout(s.current),!t.current.has(d)&&(t.current.set(d,!0),s.current=setTimeout(async()=>{try{const a=await n();m(a)}catch(a){p(a)}finally{t.current.delete(d)}},c))}),[c]),i=o.useCallback(()=>{s.current&&clearTimeout(s.current),t.current.clear()},[]);return o.useEffect(()=>i,[i]),{debouncedRequest:u,cleanup:i}},P=()=>{const[c,s]=o.useState([]),[t,u]=o.useState(h.getStats()),i=o.useRef(0),n=()=>{u(h.getStats())},d=r=>{s(l=>[r,...l.slice(0,9)])},m=async(r,l=!0)=>{const j=`req_${++i.current}`,b=`https://jsonplaceholder.typicode.com/posts/${r}`,f=h.generateRequestKey("GET",b);if(h.isDuplicateRequest(f)){d({id:j,status:"duplicate",timestamp:Date.now(),requestKey:f.substring(0,50)+"..."}),n();return}d({id:j,status:"loading",timestamp:Date.now(),requestKey:f.substring(0,50)+"..."}),n();try{const g=await h.deduplicatedRequest("GET",b,{useCache:l});s(R=>R.map(q=>q.id===j?{...q,status:"success",data:g}:q))}catch(g){const R=typeof g=="object"&&g&&"message"in g?String(g.message):"未知错误";s(q=>q.map(w=>w.id===j?{...w,status:"error",error:R}:w))}finally{n()}},p=()=>{s([]),h.clear(),n()},a=()=>{h.clearCache(),n()};o.useEffect(()=>{const r=setInterval(n,1e3);return()=>clearInterval(r)},[]);const x=r=>{switch(r){case"loading":return"text-blue-600 bg-blue-50";case"success":return"text-green-600 bg-green-50";case"error":return"text-red-600 bg-red-50";case"duplicate":return"text-orange-600 bg-orange-50";default:return"text-gray-600 bg-gray-50"}},y=r=>{switch(r){case"loading":return"⏳";case"success":return"✅";case"error":return"❌";case"duplicate":return"🔄";default:return"❓"}};return e.jsx("div",{className:"space-y-6",children:e.jsxs("div",{className:"bg-white p-6 rounded-lg border border-gray-200",children:[e.jsx("h3",{className:"text-lg font-semibold text-gray-800 mb-4",children:"基础请求去重"}),e.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-6",children:[e.jsxs("div",{className:"space-y-4",children:[e.jsxs("div",{className:"flex flex-wrap gap-2",children:[e.jsx("button",{onClick:()=>m(1),className:"px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600",children:"请求 Post 1"}),e.jsx("button",{onClick:()=>m(2),className:"px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600",children:"请求 Post 2"}),e.jsx("button",{onClick:()=>m(1,!1),className:"px-4 py-2 bg-purple-500 text-white rounded hover:bg-purple-600",children:"无缓存请求"})]}),e.jsxs("div",{className:"flex gap-2",children:[e.jsx("button",{onClick:a,className:"px-4 py-2 bg-yellow-500 text-white rounded hover:bg-yellow-600",children:"清空缓存"}),e.jsx("button",{onClick:p,className:"px-4 py-2 bg-gray-500 text-white rounded hover:bg-gray-600",children:"清空结果"})]}),e.jsxs("div",{className:"bg-gray-50 p-3 rounded text-sm",children:[e.jsx("h4",{className:"font-semibold mb-2",children:"统计信息"}),e.jsxs("p",{children:["正在进行的请求:"," ",e.jsx("span",{className:"font-mono",children:t.pendingCount})]}),e.jsxs("p",{children:["缓存的结果:"," ",e.jsx("span",{className:"font-mono",children:t.cachedCount})]})]}),e.jsxs("div",{className:"text-sm text-gray-500",children:[e.jsx("p",{children:"💡 快速点击相同按钮观察去重效果"}),e.jsx("p",{children:"🔄 重复请求会被标记为 duplicate"}),e.jsx("p",{children:"⚡ 缓存的结果会立即返回"})]})]}),e.jsxs("div",{className:"space-y-2",children:[e.jsx("h4",{className:"font-semibold text-gray-700",children:"请求历史"}),e.jsx("div",{className:"bg-gray-50 rounded-lg p-3 h-80 overflow-y-auto",children:c.length===0?e.jsx("p",{className:"text-gray-500 text-sm",children:"暂无请求"}):c.map(r=>{var l;return e.jsxs("div",{className:"mb-3 p-2 bg-white rounded border",children:[e.jsxs("div",{className:"flex items-center justify-between mb-1",children:[e.jsx("span",{className:"font-mono text-xs",children:r.id}),e.jsxs("span",{className:`px-2 py-1 rounded text-xs ${x(r.status)}`,children:[y(r.status)," ",r.status]})]}),r.requestKey&&e.jsxs("div",{className:"text-xs text-gray-500 mb-1",children:["Key: ",r.requestKey]}),r.status==="success"&&!!r.data&&e.jsxs("div",{className:"text-xs text-green-700",children:["标题:"," ",(l=r.data.title)==null?void 0:l.substring(0,30),"..."]}),r.status==="error"&&e.jsxs("div",{className:"text-xs text-red-600",children:["错误: ",r.error]}),r.status==="duplicate"&&e.jsx("div",{className:"text-xs text-orange-600",children:"检测到重复请求，已忽略"}),e.jsx("div",{className:"text-xs text-gray-400 mt-1",children:new Date(r.timestamp).toLocaleTimeString()})]},r.id)})})]})]})]})})},D=()=>{const[c,s]=o.useState(""),[t,u]=o.useState([]),[i,n]=o.useState(!1),[d,m]=o.useState(0),[p,a]=o.useState(0),{debouncedRequest:x}=k(500),y=o.useCallback(async l=>{if(!l.trim()){u([]);return}m(b=>b+1),n(!0);const j="search:"+l;try{await x(async()=>{a(g=>g+1);const f=(await v.get("https://jsonplaceholder.typicode.com/posts",{params:{q:l}})).data.filter(g=>g.title.toLowerCase().includes(l.toLowerCase())||g.body.toLowerCase().includes(l.toLowerCase())).slice(0,5);u(f),n(!1)},j)}catch(b){console.error("Search error:",b),n(!1)}},[x]);o.useEffect(()=>{y(c)},[c,y]);const r=()=>{m(0),a(0),u([]),s("")};return e.jsx("div",{className:"space-y-6",children:e.jsxs("div",{className:"bg-white p-6 rounded-lg border border-gray-200",children:[e.jsx("h3",{className:"text-lg font-semibold text-gray-800 mb-4",children:"防抖去重搜索"}),e.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-6",children:[e.jsxs("div",{className:"space-y-4",children:[e.jsxs("div",{children:[e.jsx("label",{className:"block text-sm font-medium text-gray-700 mb-2",children:"搜索关键词"}),e.jsx("input",{type:"text",value:c,onChange:l=>s(l.target.value),placeholder:"输入搜索关键词...",className:"w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"})]}),e.jsxs("div",{className:"bg-gray-50 p-3 rounded text-sm",children:[e.jsx("h4",{className:"font-semibold mb-2",children:"统计信息"}),e.jsxs("p",{children:["触发的搜索次数:"," ",e.jsx("span",{className:"font-mono text-blue-600",children:d})]}),e.jsxs("p",{children:["实际请求次数:"," ",e.jsx("span",{className:"font-mono text-green-600",children:p})]}),e.jsxs("p",{children:["去重效率:"," ",e.jsxs("span",{className:"font-mono text-purple-600",children:[d>0?Math.round((1-p/d)*100):0,"%"]})]})]}),e.jsx("button",{onClick:r,className:"px-4 py-2 bg-gray-500 text-white rounded hover:bg-gray-600",children:"重置统计"}),e.jsxs("div",{className:"text-sm text-gray-500",children:[e.jsx("p",{children:"⌨️ 快速输入观察防抖效果"}),e.jsx("p",{children:"🔍 500ms 内的重复搜索会被去重"}),e.jsx("p",{children:"📊 统计显示去重效率"})]})]}),e.jsxs("div",{className:"space-y-2",children:[e.jsxs("div",{className:"flex items-center justify-between",children:[e.jsx("h4",{className:"font-semibold text-gray-700",children:"搜索结果"}),i&&e.jsxs("div",{className:"flex items-center gap-2 text-blue-600",children:[e.jsx("div",{className:"animate-spin rounded-full h-4 w-4 border-b-2 border-blue-600"}),e.jsx("span",{className:"text-sm",children:"搜索中..."})]})]}),e.jsx("div",{className:"bg-gray-50 rounded-lg p-3 h-80 overflow-y-auto",children:t.length===0&&!i?e.jsx("p",{className:"text-gray-500 text-sm",children:c?"没有找到相关结果":"请输入搜索关键词"}):t.map(l=>e.jsxs("div",{className:"mb-3 p-3 bg-white rounded border",children:[e.jsx("h5",{className:"font-semibold text-sm text-gray-800 mb-1",children:l.title}),e.jsx("p",{className:"text-xs text-gray-600 line-clamp-2",children:l.body}),e.jsxs("div",{className:"text-xs text-gray-400 mt-1",children:["ID: ",l.id]})]},l.id))})]})]})]})})},L=()=>{const[c,s]=o.useState(h.getStats()),[t,u]=o.useState([]),i=(a,x="info")=>{const y=new Date().toLocaleTimeString();u(r=>[{time:y,message:a,type:x},...r.slice(0,9)])},n=()=>{s(h.getStats())},d=async()=>{i("开始模拟多个重复请求...","info");const a=Array.from({length:5},(x,y)=>h.deduplicatedRequest("GET","https://jsonplaceholder.typicode.com/posts/1").then(()=>i(`请求 ${y+1} 完成`,"success")).catch(()=>i(`请求 ${y+1} 失败`,"warning")));n();try{await Promise.all(a),i("所有请求处理完成","success")}catch{i("部分请求失败","warning")}finally{n()}},m=()=>{h.clearCache(),i("全局缓存已清空","warning"),n()},p=()=>{h.clear(),u([]),i("所有数据已清空","warning"),n()};return o.useEffect(()=>{const a=setInterval(n,1e3);return()=>clearInterval(a)},[]),e.jsx("div",{className:"space-y-6",children:e.jsxs("div",{className:"bg-white p-6 rounded-lg border border-gray-200",children:[e.jsx("h3",{className:"text-lg font-semibold text-gray-800 mb-4",children:"全局去重管理"}),e.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-6",children:[e.jsxs("div",{className:"space-y-4",children:[e.jsxs("div",{className:"flex gap-2",children:[e.jsx("button",{onClick:d,className:"px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600",children:"模拟重复请求"}),e.jsx("button",{onClick:m,className:"px-4 py-2 bg-yellow-500 text-white rounded hover:bg-yellow-600",children:"清空缓存"}),e.jsx("button",{onClick:p,className:"px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600",children:"清空所有"})]}),e.jsxs("div",{className:"bg-gray-50 p-3 rounded text-sm",children:[e.jsx("h4",{className:"font-semibold mb-2",children:"全局统计"}),e.jsxs("p",{children:["正在进行:"," ",e.jsx("span",{className:"font-mono text-blue-600",children:c.pendingCount})]}),e.jsxs("p",{children:["缓存数量:"," ",e.jsx("span",{className:"font-mono text-green-600",children:c.cachedCount})]})]}),e.jsxs("div",{className:"bg-blue-50 p-3 rounded text-sm",children:[e.jsx("h4",{className:"font-semibold text-blue-800 mb-2",children:"活跃请求键"}),c.pendingKeys.length===0?e.jsx("p",{className:"text-blue-600",children:"无活跃请求"}):e.jsx("div",{className:"space-y-1",children:c.pendingKeys.map((a,x)=>e.jsxs("div",{className:"font-mono text-xs text-blue-700 break-all",children:[a.substring(0,60),"..."]},x))})]}),e.jsxs("div",{className:"text-sm text-gray-500",children:[e.jsx("p",{children:"🔄 点击模拟重复请求观察去重效果"}),e.jsx("p",{children:"📊 全局统计显示所有组件的请求状态"}),e.jsx("p",{children:"🗂️ 缓存在组件间共享"})]})]}),e.jsxs("div",{className:"space-y-2",children:[e.jsx("h4",{className:"font-semibold text-gray-700",children:"操作日志"}),e.jsx("div",{className:"bg-gray-50 rounded-lg p-3 h-80 overflow-y-auto",children:t.length===0?e.jsx("p",{className:"text-gray-500 text-sm",children:"暂无日志"}):e.jsx(e.Fragment,{children:t.map((a,x)=>e.jsxs("div",{className:"text-sm mb-1",children:[e.jsxs("span",{className:"text-gray-400 font-mono",children:["[",a.time,"]"]}),e.jsx("span",{className:`ml-2 ${a.type==="success"?"text-green-600":a.type==="warning"?"text-orange-600":"text-blue-600"}`,children:a.message})]},x))})})]})]})]})})},G=()=>e.jsx(S,{title:"请求去重",description:"学习如何实现请求去重机制，通过 requestKey 识别重复请求，避免不必要的网络开销，提升应用性能和用户体验。",overview:e.jsx("div",{className:"space-y-4",children:e.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-6",children:[e.jsxs("div",{className:"bg-blue-50 p-4 rounded-lg border border-blue-200",children:[e.jsx("h3",{className:"font-semibold text-blue-800 mb-2",children:"🎯 核心概念"}),e.jsxs("ul",{className:"text-sm text-blue-700 space-y-1",children:[e.jsx("li",{children:"• requestKey = method + url + params + data"}),e.jsx("li",{children:"• 请求去重和结果缓存机制"}),e.jsx("li",{children:"• 防抖去重和全局去重管理"}),e.jsx("li",{children:"• 请求状态跟踪和生命周期管理"})]})]}),e.jsxs("div",{className:"bg-green-50 p-4 rounded-lg border border-green-200",children:[e.jsx("h3",{className:"font-semibold text-green-800 mb-2",children:"✨ 主要优势"}),e.jsxs("ul",{className:"text-sm text-green-700 space-y-1",children:[e.jsx("li",{children:"• 减少不必要的网络请求"}),e.jsx("li",{children:"• 避免重复数据处理和渲染"}),e.jsx("li",{children:"• 提升应用响应速度"}),e.jsx("li",{children:"• 降低服务器负载压力"})]})]}),e.jsxs("div",{className:"bg-yellow-50 p-4 rounded-lg border border-yellow-200",children:[e.jsx("h3",{className:"font-semibold text-yellow-800 mb-2",children:"🎪 适用场景"}),e.jsxs("ul",{className:"text-sm text-yellow-700 space-y-1",children:[e.jsx("li",{children:"• 搜索框实时查询去重"}),e.jsx("li",{children:"• 按钮防重复点击"}),e.jsx("li",{children:"• 数据列表刷新去重"}),e.jsx("li",{children:"• 表单提交防重复"})]})]}),e.jsxs("div",{className:"bg-red-50 p-4 rounded-lg border border-red-200",children:[e.jsx("h3",{className:"font-semibold text-red-800 mb-2",children:"⚠️ 注意事项"}),e.jsxs("ul",{className:"text-sm text-red-700 space-y-1",children:[e.jsx("li",{children:"• 合理设置缓存过期时间"}),e.jsx("li",{children:"• 区分需要去重的请求类型"}),e.jsx("li",{children:"• 注意内存使用和清理"}),e.jsx("li",{children:"• 考虑并发安全和竞态条件"})]})]})]})}),examples:[{title:"基础请求去重",component:e.jsx(P,{}),description:"演示基于 requestKey 的请求去重机制，包括重复检测、结果缓存和统计信息。",observationPoints:["快速点击相同按钮，观察重复请求被标记为 duplicate","缓存的结果会立即返回，无需等待网络请求","统计信息实时显示正在进行和已缓存的请求数量","不同的请求参数会生成不同的 requestKey"],keyPoints:["requestKey 由 method、url、params、data 组成","相同 requestKey 的请求会被去重处理","缓存机制避免重复的网络请求","支持可选的缓存开关控制"],commonTraps:["requestKey 生成不准确导致误判","缓存时间过长导致数据过期","没有清理机制导致内存泄漏","忽略请求参数的顺序影响"],solutions:["标准化参数序列化方式","设置合理的缓存过期时间","实现定期清理和手动清理","对参数进行排序后序列化"],importantTips:["去重只针对相同的请求，不同参数不会去重","缓存结果可以显著提升用户体验","注意区分需要去重和不需要去重的场景"],codeExample:{title:"请求去重管理器实现",language:"typescript",highlights:[8,9,10,18,19,20,28,29,30,45,46,47,55,56,57],description:"展示完整的请求去重管理器，包括请求标识生成、重复检测和缓存机制",code:`class RequestDeduplicationManager {
  private pendingRequests: Map<string, Promise<unknown>> = new Map();
  private requestHistory: Map<string, { timestamp: number; result: unknown }> = new Map();
  private readonly cacheTimeout = 5000; // 5秒缓存

  generateRequestKey(
    method: string,
    url: string,
    params?: unknown,
    data?: unknown
  ): string {
    const paramsStr = params ? JSON.stringify(params) : "";
    const dataStr = data ? JSON.stringify(data) : "";
    return method.toUpperCase() + ":" + url + ":" + paramsStr + ":" + dataStr;
  }

  isDuplicateRequest(requestKey: string): boolean {
    return this.pendingRequests.has(requestKey);
  }

  getCachedResult(requestKey: string): unknown | null {
    const cached = this.requestHistory.get(requestKey);
    if (cached && Date.now() - cached.timestamp < this.cacheTimeout) {
      return cached.result;
    }
    if (cached) {
      this.requestHistory.delete(requestKey);
    }
    return null;
  }

  async deduplicatedRequest<T>(
    method: string,
    url: string,
    options: { params?: unknown; data?: unknown; useCache?: boolean } = {}
  ): Promise<T> {
    const { params, data, useCache = true } = options;
    const requestKey = this.generateRequestKey(method, url, params, data);

    if (useCache) {
      const cachedResult = this.getCachedResult(requestKey);
      if (cachedResult !== null) {
        return Promise.resolve(cachedResult as T);
      }
    }

    if (this.isDuplicateRequest(requestKey)) {
      return this.pendingRequests.get(requestKey)! as Promise<T>;
    }

    const requestPromise = this.executeRequest<T>(method, url, { params, data });
    this.pendingRequests.set(requestKey, requestPromise);

    try {
      const result = await requestPromise;
      if (useCache) {
        this.requestHistory.set(requestKey, { timestamp: Date.now(), result });
      }
      return result;
    } finally {
      this.pendingRequests.delete(requestKey);
    }
  }

  private async executeRequest<T>(
    method: string,
    url: string,
    options: { params?: unknown; data?: unknown }
  ): Promise<T> {
    const { params, data } = options;
    const response = await axios({ method: method as any, url, params, data });
    return response.data as T;
  }

  getStats() {
    return {
      pendingCount: this.pendingRequests.size,
      cachedCount: this.requestHistory.size,
      pendingKeys: Array.from(this.pendingRequests.keys()),
      cachedKeys: Array.from(this.requestHistory.keys()),
    };
  }

  clearCache() {
    this.requestHistory.clear();
  }

  clear() {
    this.pendingRequests.clear();
    this.requestHistory.clear();
  }
}`}},{title:"防抖去重搜索",component:e.jsx(D,{}),description:"结合防抖技术的搜索去重，避免用户快速输入时的频繁请求。",observationPoints:["快速输入搜索关键词，观察实际请求次数远少于触发次数","500ms 内的重复输入会被防抖处理","去重效率统计显示优化效果","搜索结果实时更新，用户体验良好"],keyPoints:["防抖延迟避免频繁触发请求","requestKey 确保相同搜索词不重复请求","统计信息展示去重优化效果","异步清理避免内存泄漏"],commonTraps:["防抖延迟设置过长影响用户体验","没有清理定时器导致内存泄漏","搜索关键词变化时没有取消之前的请求","防抖和去重逻辑冲突"],solutions:["根据用户习惯设置合理的防抖延迟","在组件卸载时清理所有定时器","使用 AbortController 取消过期请求","先防抖再去重的处理顺序"],importantTips:["防抖减少触发频率，去重避免重复请求","统计数据有助于评估优化效果","注意处理组件卸载时的清理工作"],codeExample:{title:"防抖去重Hook实现",language:"typescript",highlights:[8,9,10,18,19,20,28,29,30,38,39,40],description:"展示结合防抖技术的请求去重Hook，优化高频搜索场景",code:`const useDebounceDeduplication = (delay: number = 300) => {
  const timeoutRef = React.useRef<NodeJS.Timeout | null>(null);
  const pendingRequestsRef = React.useRef<Map<string, boolean>>(new Map());

  const debouncedRequest = React.useCallback(
    <T,>(requestFn: () => Promise<T>, requestKey: string): Promise<T | undefined> => {
      return new Promise((resolve, reject) => {
        if (timeoutRef.current) {
          clearTimeout(timeoutRef.current);
        }
        if (pendingRequestsRef.current.has(requestKey)) {
          return;
        }
        pendingRequestsRef.current.set(requestKey, true);
        timeoutRef.current = setTimeout(async () => {
          try {
            const result = await requestFn();
            resolve(result);
          } catch (error) {
            reject(error);
          } finally {
            pendingRequestsRef.current.delete(requestKey);
          }
        }, delay);
      });
    },
    [delay]
  );

  const cleanup = React.useCallback(() => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
    pendingRequestsRef.current.clear();
  }, []);

  React.useEffect(() => {
    return cleanup;
  }, [cleanup]);

  return { debouncedRequest, cleanup };
};`}},{title:"全局去重管理",component:e.jsx(L,{}),description:"全局去重管理器统一处理应用中所有的请求去重，提供统一的缓存和统计。",observationPoints:["点击模拟重复请求，观察5个相同请求只执行一次","全局统计显示所有组件的请求状态","活跃请求键实时显示正在进行的请求","操作日志记录所有去重相关的操作"],keyPoints:["全局管理器统一处理所有请求去重","跨组件共享缓存和去重逻辑","提供统一的统计和监控接口","支持全局清理和状态重置"],commonTraps:["全局状态管理复杂度增加","不同组件间的缓存冲突","内存使用量持续增长","缓存键命名冲突"],solutions:["设计清晰的状态管理架构","使用命名空间避免冲突","实现自动和手动清理机制","建立标准的键命名规范"],importantTips:["全局管理适用于大型应用的统一优化","注意平衡功能复杂度和维护成本","监控和日志有助于问题诊断"],codeExample:{title:"全局去重示例核心代码",language:"typescript",description:"展示一次性触发多个相同请求时如何被去重，以及全局统计更新。",code:`const simulateMultipleRequests = async () => {
  addLog("开始模拟多个重复请求...", "info");
  const requests = Array.from({ length: 5 }, (_, i) =>
    deduplicationManager
      .deduplicatedRequest(
        "GET",
        "https://jsonplaceholder.typicode.com/posts/1"
      )
      .then(() => addLog(\`请求 \${i + 1} 完成\`, "success"))
      .catch(() => addLog(\`请求 \${i + 1} 失败\`, "warning"))
  );
  updateGlobalStats();
  try {
    await Promise.all(requests);
    addLog("所有请求处理完成", "success");
  } catch {
    addLog("部分请求失败", "warning");
  } finally {
    updateGlobalStats();
  }
};`}}],tutorial:{concepts:["**请求标识 (requestKey)**：由请求方法、URL、参数和数据组成的唯一标识","**去重检测**：通过比较 requestKey 识别重复请求","**结果缓存**：存储请求结果避免重复网络调用","**防抖去重**：结合防抖技术减少高频操作的请求","**全局管理**：统一管理应用中所有的去重逻辑","**生命周期管理**：跟踪请求从发起到完成的整个过程"],steps:["设计 requestKey 生成算法，确保唯一性和一致性","实现去重检测逻辑，识别重复请求","建立结果缓存机制，设置合理的过期时间","集成防抖技术，优化高频操作场景","创建全局管理器，统一处理去重逻辑","添加统计和监控功能，评估优化效果"],tips:["requestKey 生成要考虑参数顺序和数据类型","缓存时间根据数据更新频率合理设置","防抖延迟要平衡用户体验和性能优化","定期清理缓存避免内存泄漏","为不同类型的请求设置不同的去重策略","使用统计数据评估和调整去重效果"]},interview:{questions:[{question:"什么是请求去重？为什么需要请求去重？",answer:"请求去重是指识别和避免发送重复的网络请求的技术。需要的原因：1) **性能优化**：减少不必要的网络开销；2) **用户体验**：避免重复加载和状态混乱；3) **服务器保护**：降低服务器负载；4) **数据一致性**：防止重复操作导致的数据问题。常见场景包括按钮防重复点击、搜索防抖、表单重复提交等。"},{question:"如何生成 requestKey？需要考虑哪些因素？",answer:"requestKey 生成需要考虑：1) **请求方法**：GET、POST 等；2) **URL 路径**：完整的请求地址；3) **查询参数**：URL 参数和请求参数；4) **请求体数据**：POST 请求的 body 内容。实现时要注意：参数排序保证一致性、数据序列化标准化、特殊字符处理、嵌套对象的深度比较。通常格式为：`${method}:${url}:${JSON.stringify(sortedParams)}:${JSON.stringify(sortedData)}`。"},{question:"请求去重和防抖有什么区别？如何结合使用？",answer:"主要区别：1) **触发机制**：去重基于请求内容，防抖基于时间间隔；2) **适用场景**：去重适用于相同请求，防抖适用于高频操作；3) **实现方式**：去重比较 requestKey，防抖使用定时器延迟。结合使用：先防抖减少触发频率，再去重避免重复请求。例如搜索场景：防抖避免每次输入都触发，去重确保相同搜索词不重复请求。"},{question:"如何处理请求去重的缓存管理？",answer:"缓存管理策略：1) **过期时间**：根据数据更新频率设置 TTL；2) **存储限制**：设置最大缓存数量，使用 LRU 淘汰；3) **清理机制**：定期清理过期缓存，手动清理接口；4) **内存监控**：监控缓存使用情况，防止内存泄漏。实现要点：缓存键标准化、异步清理避免阻塞、错误处理和降级策略、跨组件缓存共享机制。"}],keyPoints:["requestKey 的生成算法是去重机制的核心","缓存策略要平衡性能优化和内存使用","防抖去重结合使用效果更佳","全局管理有助于统一优化和监控","不同类型请求需要不同的去重策略","统计和监控是评估优化效果的重要手段"]},bestPractices:{dos:["为 requestKey 设计标准化的生成算法","根据业务场景设置合理的缓存时间","实现自动和手动的缓存清理机制","结合防抖技术优化高频操作","添加统计功能评估去重效果","为不同请求类型制定去重策略","实现错误处理和降级方案","监控内存使用避免泄漏"],donts:["不要对所有请求都进行去重处理","不要设置过长的缓存时间","不要忽略参数顺序对 requestKey 的影响","不要在去重逻辑中忽略错误处理","不要让缓存无限制增长","不要对实时性要求高的请求去重","不要忽略跨组件的缓存冲突","不要在生产环境中忽略性能监控"],patterns:["**单例管理器模式**：全局统一的去重管理器","**策略模式**：不同类型请求的去重策略","**装饰器模式**：为现有请求函数添加去重能力","**观察者模式**：请求状态变化的事件通知","**工厂模式**：统一创建带去重功能的请求","**缓存模式**：LRU 缓存和 TTL 过期机制","**防抖模式**：时间窗口内的请求合并"]}});export{G as default};
