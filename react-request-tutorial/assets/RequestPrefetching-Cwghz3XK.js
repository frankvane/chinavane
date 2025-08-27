var y=Object.defineProperty;var b=(i,s,a)=>s in i?y(i,s,{enumerable:!0,configurable:!0,writable:!0,value:a}):i[s]=a;var f=(i,s,a)=>b(i,typeof s!="symbol"?s+"":s,a);import{j as e,r as l}from"./index-Cnne2xOM.js";import{C as j}from"./ComponentTemplate-iqsAHbUA.js";class v{constructor(s={}){f(this,"cache",new Map);f(this,"prefetchQueue",[]);f(this,"isProcessing",!1);f(this,"config");f(this,"observers",new Set);this.config={maxCacheSize:100,cacheTimeout:5*60*1e3,maxConcurrentPrefetch:3,prefetchDelay:100,priorityLevels:["high","medium","low"],...s}}getCachedData(s){const a=this.cache.get(s);return!a||this.isExpired(a)?null:(a.lastAccessed=Date.now(),a.accessCount++,a.data)}smartPrefetch(s){s.forEach(a=>{this.generatePrefetchTasks(a).forEach(o=>this.addPrefetchTask(o))})}generatePrefetchTasks(s){const a=[];switch(s.type){case"sequential":s.urls.forEach((c,o)=>{a.push({key:`${s.name}_${o}`,url:c,priority:s.priority||"medium",delay:o*(s.delay||0),fetcher:s.fetcher})});break;case"parallel":s.urls.forEach((c,o)=>{a.push({key:`${s.name}_${o}`,url:c,priority:s.priority||"medium",delay:0,fetcher:s.fetcher})});break;case"conditional":s.condition&&s.condition()&&s.urls.forEach((c,o)=>{a.push({key:`${s.name}_${o}`,url:c,priority:s.priority||"medium",delay:0,fetcher:s.fetcher})});break}return a}async processQueue(){if(this.isProcessing||this.prefetchQueue.length===0)return;this.isProcessing=!0;const s=[];for(;this.prefetchQueue.length>0&&s.length<this.config.maxConcurrentPrefetch;){const a=this.prefetchQueue.shift();s.push(this.executePrefetchTask(a))}await Promise.allSettled(s),this.isProcessing=!1,this.prefetchQueue.length>0&&setTimeout(()=>this.processQueue(),this.config.prefetchDelay)}async executePrefetchTask(s){try{s.delay&&s.delay>0&&await new Promise(m=>setTimeout(m,s.delay));const a=Date.now(),c=await this.performFetch(s),o=Date.now()-a,p={key:s.key,data:c,timestamp:Date.now(),lastAccessed:Date.now(),accessCount:0,size:this.estimateSize(c),fetchDuration:o};this.addToCache(p),this.notifyObservers("prefetch_success",{task:s,entry:p})}catch(a){s.retryCount=(s.retryCount||0)+1,s.retryCount<3?this.prefetchQueue.unshift(s):this.notifyObservers("prefetch_error",{task:s,error:a})}}async performFetch(s){if(s.fetcher)return await s.fetcher(s.url);if(await new Promise(a=>setTimeout(a,100+Math.random()*200)),Math.random()>.9)throw new Error(`Failed to fetch ${s.url}`);return{url:s.url,data:`Data for ${s.url}`,timestamp:Date.now(),size:Math.floor(Math.random()*1e4)+1e3}}addToCache(s){this.cache.size>=this.config.maxCacheSize&&this.evictCache(),this.cache.set(s.key,s)}evictCache(){const s=Array.from(this.cache.entries());s.sort((c,o)=>c[1].lastAccessed-o[1].lastAccessed);const a=Math.ceil(this.cache.size*.2);for(let c=0;c<a;c++)this.cache.delete(s[c][0])}isExpired(s){return Date.now()-s.timestamp>this.config.cacheTimeout}getPriorityValue(s){const a=this.config.priorityLevels.indexOf(s);return a===-1?0:this.config.priorityLevels.length-a}sortQueue(){this.prefetchQueue.sort((s,a)=>{const c=this.getPriorityValue(a.priority)-this.getPriorityValue(s.priority);return c!==0?c:s.timestamp-a.timestamp})}estimateSize(s){return JSON.stringify(s).length}addObserver(s){this.observers.add(s)}removeObserver(s){this.observers.delete(s)}notifyObservers(s,a){this.observers.forEach(c=>{c[s]&&c[s](a)})}getStats(){const s=Array.from(this.cache.values()),a=s.reduce((o,p)=>o+p.size,0),c=s.reduce((o,p)=>o+p.accessCount,0)/s.length||0;return{cacheSize:this.cache.size,queueSize:this.prefetchQueue.length,totalCacheSize:a,avgAccessCount:c,hitRate:this.calculateHitRate(),isProcessing:this.isProcessing}}calculateHitRate(){const a=Array.from(this.cache.values()).reduce((c,o)=>c+o.accessCount,0);return a>0?a/(a+this.prefetchQueue.length)*100:0}cleanup(){this.cache.clear(),this.prefetchQueue=[],this.observers.clear(),this.isProcessing=!1}}const N=()=>{const[i]=l.useState(()=>new v),[s,a]=l.useState({cacheSize:0,queueSize:0,totalCacheSize:0,avgAccessCount:0,hitRate:0,isProcessing:!1}),[c,o]=l.useState([]),[p,m]=l.useState([]),u=l.useCallback(()=>{const t=i.getStats();a(t);const r=Array.from(i.cache.values()).sort((n,d)=>d.lastAccessed-n.lastAccessed).slice(0,10);m(r)},[i]);l.useEffect(()=>{const t={prefetch_success:n=>{o(d=>[{id:n.task.key,type:"prefetch",status:"success",url:n.task.url,timestamp:Date.now(),duration:n.entry.fetchDuration},...d.slice(0,9)])},prefetch_error:n=>{o(d=>[{id:n.task.key,type:"prefetch",status:"error",url:n.task.url,timestamp:Date.now(),error:n.error.message},...d.slice(0,9)])}};i.addObserver(t);const r=setInterval(u,500);return()=>{clearInterval(r),i.removeObserver(t),i.cleanup()}},[i,u]);const g=l.useCallback((t="medium")=>{const r=`task_${Date.now()}_${Math.random().toString(36).substr(2,5)}`,n=`/api/data/${r}`;i.addPrefetchTask({key:r,url:n,priority:t}),u()},[i,u]),h=l.useCallback(t=>{const r=i.getCachedData(t);o(r?n=>[{id:`get_${Date.now()}`,type:"cache_hit",status:"success",url:t,timestamp:Date.now(),data:JSON.stringify(r).substring(0,100)+"..."},...n.slice(0,9)]:n=>[{id:`get_${Date.now()}`,type:"cache_miss",status:"miss",url:t,timestamp:Date.now()},...n.slice(0,9)]),u()},[i,u]),x=l.useCallback(()=>{const t=[{name:"user_data",type:"parallel",urls:["/api/user/profile","/api/user/settings","/api/user/preferences"],priority:"high"},{name:"dashboard_data",type:"sequential",urls:["/api/dashboard/summary","/api/dashboard/charts","/api/dashboard/notifications"],priority:"medium",delay:100}];i.smartPrefetch(t),u()},[i,u]);return e.jsx("div",{className:"space-y-6",children:e.jsxs("div",{className:"bg-white p-6 rounded-lg shadow-sm border",children:[e.jsx("h3",{className:"text-lg font-semibold mb-4",children:"预取控制面板"}),e.jsxs("div",{className:"grid grid-cols-3 gap-4 mb-6",children:[e.jsxs("div",{className:"bg-blue-50 p-4 rounded-lg",children:[e.jsx("div",{className:"text-2xl font-bold text-blue-600",children:s.cacheSize}),e.jsx("div",{className:"text-sm text-blue-500",children:"缓存条目"})]}),e.jsxs("div",{className:"bg-green-50 p-4 rounded-lg",children:[e.jsx("div",{className:"text-2xl font-bold text-green-600",children:s.queueSize}),e.jsx("div",{className:"text-sm text-green-500",children:"队列任务"})]}),e.jsxs("div",{className:"bg-orange-50 p-4 rounded-lg",children:[e.jsxs("div",{className:"text-2xl font-bold text-orange-600",children:[s.hitRate.toFixed(1),"%"]}),e.jsx("div",{className:"text-sm text-orange-500",children:"命中率"})]})]}),e.jsxs("div",{className:"flex gap-4 mb-6",children:[e.jsx("button",{onClick:()=>g("high"),className:"px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600 transition-colors",children:"高优先级预取"}),e.jsx("button",{onClick:()=>g("medium"),className:"px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition-colors",children:"中优先级预取"}),e.jsx("button",{onClick:()=>g("low"),className:"px-4 py-2 bg-gray-500 text-white rounded hover:bg-gray-600 transition-colors",children:"低优先级预取"}),e.jsx("button",{onClick:x,className:"px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600 transition-colors",children:"智能预取"})]}),e.jsxs("div",{className:"grid grid-cols-2 gap-6",children:[e.jsxs("div",{children:[e.jsx("h4",{className:"font-medium mb-3",children:"缓存条目"}),e.jsx("div",{className:"max-h-64 overflow-y-auto space-y-2",children:p.map((t,r)=>e.jsx("div",{className:"p-3 bg-gray-50 rounded border",children:e.jsxs("div",{className:"flex justify-between items-start",children:[e.jsxs("div",{className:"flex-1",children:[e.jsx("div",{className:"font-mono text-sm",children:t.key}),e.jsxs("div",{className:"text-xs text-gray-500",children:["访问次数: ",t.accessCount," | 大小: ",t.size,"B"]})]}),e.jsx("button",{onClick:()=>h(t.key),className:"px-2 py-1 text-xs bg-blue-100 text-blue-600 rounded hover:bg-blue-200",children:"获取"})]})},r))})]}),e.jsxs("div",{children:[e.jsx("h4",{className:"font-medium mb-3",children:"请求记录"}),e.jsx("div",{className:"max-h-64 overflow-y-auto space-y-2",children:c.map(t=>e.jsxs("div",{className:`p-3 rounded border-l-4 ${t.type==="prefetch"?t.status==="success"?"bg-green-50 border-green-400":"bg-red-50 border-red-400":t.type==="cache_hit"?"bg-blue-50 border-blue-400":"bg-yellow-50 border-yellow-400"}`,children:[e.jsxs("div",{className:"flex justify-between items-start",children:[e.jsxs("div",{children:[e.jsx("div",{className:"text-sm font-medium",children:t.type}),e.jsx("div",{className:"font-mono text-xs",children:t.url}),e.jsx("div",{className:"text-xs text-gray-500",children:new Date(t.timestamp).toLocaleTimeString()})]}),e.jsx("div",{className:`px-2 py-1 rounded text-xs font-medium ${t.status==="success"?"bg-green-100 text-green-800":t.status==="error"?"bg-red-100 text-red-800":"bg-yellow-100 text-yellow-800"}`,children:t.status})]}),t.duration&&e.jsxs("div",{className:"mt-1 text-xs text-gray-600",children:["耗时: ",t.duration,"ms"]}),t.error&&e.jsxs("div",{className:"mt-1 text-xs text-red-600",children:["错误: ",t.error]})]},t.id))})]})]})]})})},w=()=>{const[i]=l.useState(()=>new v({maxCacheSize:50,cacheTimeout:18e4,maxConcurrentPrefetch:5})),[s,a]=l.useState({userBehavior:!0,timeBasedPrefetch:!0,popularContent:!0,predictivePrefetch:!1}),[c,o]=l.useState({prefetchAccuracy:0,bandwidthSaved:0,userExperienceScore:0,cacheEfficiency:0}),[p,m]=l.useState([]),u=l.useCallback(()=>{const t=[{action:"view_profile",prefetch:["/api/user/posts","/api/user/followers"]},{action:"browse_feed",prefetch:["/api/feed/recommended","/api/feed/trending"]},{action:"search",prefetch:["/api/search/suggestions","/api/search/history"]},{action:"view_post",prefetch:["/api/post/comments","/api/post/related"]}],r=t[Math.floor(Math.random()*t.length)];if(s.userBehavior){const n={name:`behavior_${r.action}`,type:"parallel",urls:r.prefetch,priority:"high"};i.smartPrefetch([n]),m(d=>[{id:Date.now(),strategy:"User Behavior",action:r.action,urls:r.prefetch,timestamp:Date.now(),accuracy:Math.random()*100},...d.slice(0,9)])}},[i,s.userBehavior]),g=l.useCallback(()=>{if(!s.timeBasedPrefetch)return;const t=new Date().getHours();let r=[];t>=9&&t<=17?r=["/api/work/tasks","/api/work/calendar","/api/work/notifications"]:t>=18&&t<=22?r=["/api/entertainment/videos","/api/entertainment/games","/api/entertainment/social"]:r=["/api/news/headlines","/api/weather/forecast"];const n={name:"time_based",type:"sequential",urls:r,priority:"medium",delay:200};i.smartPrefetch([n]),m(d=>[{id:Date.now(),strategy:"Time-based",action:`${t}:00 prefetch`,urls:r,timestamp:Date.now(),accuracy:70+Math.random()*20},...d.slice(0,9)])},[i,s.timeBasedPrefetch]),h=l.useCallback(()=>{if(!s.popularContent)return;const r=["/api/trending/posts","/api/trending/topics","/api/trending/users","/api/popular/videos","/api/popular/articles"].sort(()=>Math.random()-.5).slice(0,3),n={name:"popular_content",type:"parallel",urls:r,priority:"medium"};i.smartPrefetch([n]),m(d=>[{id:Date.now(),strategy:"Popular Content",action:"trending prefetch",urls:r,timestamp:Date.now(),accuracy:60+Math.random()*30},...d.slice(0,9)])},[i,s.popularContent]),x=l.useCallback(()=>{const t=i.getStats();o({prefetchAccuracy:75+Math.random()*20,bandwidthSaved:t.hitRate*.8,userExperienceScore:Math.min(95,t.hitRate+Math.random()*10),cacheEfficiency:t.cacheSize/50*100})},[i]);return l.useEffect(()=>{const t=[setInterval(u,3e3),setInterval(g,5e3),setInterval(h,4e3),setInterval(x,1e3)];return()=>{t.forEach(clearInterval),i.cleanup()}},[u,g,h,x,i]),e.jsxs("div",{className:"space-y-6",children:[e.jsxs("div",{className:"bg-white p-6 rounded-lg shadow-sm border",children:[e.jsx("h3",{className:"text-lg font-semibold mb-4",children:"智能预取策略"}),e.jsxs("div",{className:"grid grid-cols-2 gap-6 mb-6",children:[e.jsxs("div",{className:"space-y-4",children:[e.jsxs("div",{className:"flex items-center space-x-2",children:[e.jsx("input",{type:"checkbox",id:"user-behavior",checked:s.userBehavior,onChange:t=>a(r=>({...r,userBehavior:t.target.checked})),className:"rounded"}),e.jsx("label",{htmlFor:"user-behavior",className:"text-sm font-medium",children:"用户行为预测"})]}),e.jsxs("div",{className:"flex items-center space-x-2",children:[e.jsx("input",{type:"checkbox",id:"time-based",checked:s.timeBasedPrefetch,onChange:t=>a(r=>({...r,timeBasedPrefetch:t.target.checked})),className:"rounded"}),e.jsx("label",{htmlFor:"time-based",className:"text-sm font-medium",children:"时间段预取"})]})]}),e.jsxs("div",{className:"space-y-4",children:[e.jsxs("div",{className:"flex items-center space-x-2",children:[e.jsx("input",{type:"checkbox",id:"popular-content",checked:s.popularContent,onChange:t=>a(r=>({...r,popularContent:t.target.checked})),className:"rounded"}),e.jsx("label",{htmlFor:"popular-content",className:"text-sm font-medium",children:"热门内容预取"})]}),e.jsxs("div",{className:"flex items-center space-x-2",children:[e.jsx("input",{type:"checkbox",id:"predictive",checked:s.predictivePrefetch,onChange:t=>a(r=>({...r,predictivePrefetch:t.target.checked})),className:"rounded"}),e.jsx("label",{htmlFor:"predictive",className:"text-sm font-medium",children:"机器学习预测"})]})]})]})]}),e.jsxs("div",{className:"bg-white p-6 rounded-lg shadow-sm border",children:[e.jsx("h3",{className:"text-lg font-semibold mb-4",children:"预取效果分析"}),e.jsxs("div",{className:"grid grid-cols-4 gap-4 mb-6",children:[e.jsxs("div",{className:"bg-blue-50 p-4 rounded-lg",children:[e.jsxs("div",{className:"text-2xl font-bold text-blue-600",children:[c.prefetchAccuracy.toFixed(1),"%"]}),e.jsx("div",{className:"text-sm text-blue-500",children:"预取准确率"})]}),e.jsxs("div",{className:"bg-green-50 p-4 rounded-lg",children:[e.jsxs("div",{className:"text-2xl font-bold text-green-600",children:[c.bandwidthSaved.toFixed(1),"%"]}),e.jsx("div",{className:"text-sm text-green-500",children:"带宽节省"})]}),e.jsxs("div",{className:"bg-orange-50 p-4 rounded-lg",children:[e.jsx("div",{className:"text-2xl font-bold text-orange-600",children:c.userExperienceScore.toFixed(1)}),e.jsx("div",{className:"text-sm text-orange-500",children:"用户体验评分"})]}),e.jsxs("div",{className:"bg-purple-50 p-4 rounded-lg",children:[e.jsxs("div",{className:"text-2xl font-bold text-purple-600",children:[c.cacheEfficiency.toFixed(1),"%"]}),e.jsx("div",{className:"text-sm text-purple-500",children:"缓存效率"})]})]}),e.jsxs("div",{className:"space-y-2",children:[e.jsx("h4",{className:"font-medium",children:"预取历史"}),e.jsx("div",{className:"max-h-64 overflow-y-auto space-y-2",children:p.map(t=>e.jsx("div",{className:"p-3 bg-gray-50 rounded border",children:e.jsxs("div",{className:"flex justify-between items-start",children:[e.jsxs("div",{children:[e.jsxs("div",{className:"flex items-center space-x-2",children:[e.jsx("span",{className:"font-medium text-sm",children:t.strategy}),e.jsx("span",{className:"text-xs bg-blue-100 text-blue-600 px-2 py-1 rounded",children:t.action})]}),e.jsxs("div",{className:"text-xs text-gray-500 mt-1",children:["URLs: ",t.urls.join(", ")]})]}),e.jsxs("div",{className:"text-right",children:[e.jsxs("div",{className:"text-sm font-medium text-green-600",children:[t.accuracy.toFixed(1),"%"]}),e.jsx("div",{className:"text-xs text-gray-500",children:new Date(t.timestamp).toLocaleTimeString()})]})]})},t.id))})]})]})]})},P=()=>{const[i,s]=l.useState(!0),[a,c]=l.useState([]),[o,p]=l.useState(!1),[m]=l.useState(()=>new v),u=l.useCallback(async(h,x)=>{const t=Date.now();return x&&m.getCachedData(h)?(await new Promise(n=>setTimeout(n,5)),Date.now()-t):(await new Promise(r=>setTimeout(r,200+Math.random()*300)),Date.now()-t)},[m]),g=l.useCallback(async()=>{if(o)return;p(!0);const h=["/api/test/data1","/api/test/data2","/api/test/data3","/api/test/data4","/api/test/data5"];i&&(h.map(d=>({key:d,url:d,priority:"high"})).forEach(d=>m.addPrefetchTask(d)),await new Promise(d=>setTimeout(d,1e3)));const x=[];for(const n of h){const d=await u(n,i);x.push({url:n,responseTime:d,usePrefetch:i,timestamp:Date.now()})}const t=x.reduce((n,d)=>n+d.responseTime,0)/x.length,r=x.reduce((n,d)=>n+d.responseTime,0);c(n=>[{id:Date.now(),usePrefetch:i,avgResponseTime:t,totalTime:r,requestCount:x.length,timestamp:Date.now(),results:x},...n.slice(0,9)]),p(!1)},[o,i,u,m]);return l.useEffect(()=>()=>m.cleanup(),[m]),e.jsx("div",{className:"space-y-6",children:e.jsxs("div",{className:"bg-white p-6 rounded-lg shadow-sm border",children:[e.jsx("h3",{className:"text-lg font-semibold mb-4",children:"性能对比测试"}),e.jsxs("div",{className:"flex items-center space-x-4 mb-6",children:[e.jsxs("div",{className:"flex items-center space-x-2",children:[e.jsx("input",{type:"checkbox",id:"enable-prefetch",checked:i,onChange:h=>s(h.target.checked),className:"rounded"}),e.jsx("label",{htmlFor:"enable-prefetch",className:"text-sm font-medium",children:"启用预取"})]}),e.jsx("button",{onClick:g,disabled:o,className:"px-6 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition-colors disabled:opacity-50",children:o?"测试中...":"运行性能测试"})]}),a.length>0&&e.jsxs("div",{className:"space-y-4",children:[e.jsx("h4",{className:"font-medium",children:"测试结果"}),a.map(h=>e.jsxs("div",{className:"p-4 bg-gray-50 rounded-lg",children:[e.jsxs("div",{className:"flex justify-between items-start mb-3",children:[e.jsx("div",{children:e.jsxs("div",{className:"flex items-center space-x-2",children:[e.jsx("span",{className:`px-2 py-1 rounded text-xs font-medium ${h.usePrefetch?"bg-green-100 text-green-800":"bg-red-100 text-red-800"}`,children:h.usePrefetch?"启用预取":"未启用预取"}),e.jsx("span",{className:"text-sm text-gray-500",children:new Date(h.timestamp).toLocaleTimeString()})]})}),e.jsxs("div",{className:"text-right",children:[e.jsxs("div",{className:"text-lg font-bold text-blue-600",children:[h.avgResponseTime.toFixed(0),"ms"]}),e.jsx("div",{className:"text-sm text-gray-500",children:"平均响应时间"})]})]}),e.jsxs("div",{className:"grid grid-cols-3 gap-4 text-sm",children:[e.jsxs("div",{children:[e.jsx("div",{className:"font-medium",children:"总耗时"}),e.jsxs("div",{className:"text-orange-600",children:[h.totalTime,"ms"]})]}),e.jsxs("div",{children:[e.jsx("div",{className:"font-medium",children:"请求数量"}),e.jsx("div",{className:"text-purple-600",children:h.requestCount})]}),e.jsxs("div",{children:[e.jsx("div",{className:"font-medium",children:"性能提升"}),e.jsx("div",{className:"text-green-600",children:h.usePrefetch?"85%":"0%"})]})]})]},h.id))]})]})})},T=()=>{const i={title:"请求预取管理器实现",language:"typescript",code:`// 请求预取管理器
class RequestPrefetchingManager {
  private cache: Map<string, CacheEntry> = new Map();
  private prefetchQueue: PrefetchTask[] = [];
  private isProcessing = false;
  private config: PrefetchConfig;

  constructor(config: PrefetchConfig = {}) {
    this.config = {
      maxCacheSize: 100,
      cacheTimeout: 5 * 60 * 1000, // 5分钟
      maxConcurrentPrefetch: 3,
      prefetchDelay: 100,
      priorityLevels: ['high', 'medium', 'low'],
      ...config
    };
  }

  // 添加预取任务
  addPrefetchTask(task: PrefetchTask): void {
    // 检查是否已经在缓存中
    if (this.cache.has(task.key)) {
      const entry = this.cache.get(task.key)!;
      if (!this.isExpired(entry)) {
        return; // 已经缓存且未过期
      }
    }

    this.prefetchQueue.push({
      ...task,
      timestamp: Date.now(),
      retryCount: 0
    });

    this.sortQueue();
    this.processQueue();
  }

  // 智能预取
  smartPrefetch(patterns: PrefetchPattern[]): void {
    patterns.forEach(pattern => {
      const tasks = this.generatePrefetchTasks(pattern);
      tasks.forEach(task => this.addPrefetchTask(task));
    });
  }
}`,highlights:[20,35,45,55]};return e.jsx(j,{title:"请求预取 (Request Prefetching)",description:"通过预先获取可能需要的数据来提升用户体验和应用性能",overview:e.jsxs("div",{className:"space-y-4",children:[e.jsx("h3",{className:"text-lg font-semibold",children:"核心概念"}),e.jsxs("ul",{className:"list-disc list-inside space-y-2 text-gray-700",children:[e.jsxs("li",{children:[e.jsx("strong",{children:"预测性加载"}),"：基于用户行为和模式预先获取数据"]}),e.jsxs("li",{children:[e.jsx("strong",{children:"智能缓存"}),"：高效的缓存管理和淘汰策略"]}),e.jsxs("li",{children:[e.jsx("strong",{children:"优先级调度"}),"：根据重要性和紧急程度调度预取任务"]}),e.jsxs("li",{children:[e.jsx("strong",{children:"自适应策略"}),"：根据网络状况和用户行为动态调整预取策略"]})]}),e.jsx("h3",{className:"text-lg font-semibold mt-6",children:"主要优势"}),e.jsxs("ul",{className:"list-disc list-inside space-y-2 text-gray-700",children:[e.jsx("li",{children:"显著减少用户等待时间，提升体验"}),e.jsx("li",{children:"充分利用空闲时间和带宽资源"}),e.jsx("li",{children:"支持离线访问和弱网络环境"}),e.jsx("li",{children:"智能预测用户需求，提高命中率"}),e.jsx("li",{children:"提供详细的性能分析和优化建议"})]}),e.jsx("h3",{className:"text-lg font-semibold mt-6",children:"适用场景"}),e.jsxs("ul",{className:"list-disc list-inside space-y-2 text-gray-700",children:[e.jsx("li",{children:"内容丰富的应用和网站"}),e.jsx("li",{children:"用户行为可预测的场景"}),e.jsx("li",{children:"移动应用和弱网络环境"}),e.jsx("li",{children:"需要快速响应的交互场景"}),e.jsx("li",{children:"大量静态资源的应用"})]}),e.jsx("h3",{className:"text-lg font-semibold mt-6",children:"注意事项"}),e.jsxs("ul",{className:"list-disc list-inside space-y-2 text-gray-700",children:[e.jsx("li",{children:"预取可能消耗额外的带宽和存储"}),e.jsx("li",{children:"需要准确的预测算法避免无效预取"}),e.jsx("li",{children:"要考虑用户的数据使用限制"}),e.jsx("li",{children:"缓存管理需要合理的淘汰策略"}),e.jsx("li",{children:"预取失败时需要优雅降级"})]})]}),examples:[{title:"基础预取演示",component:e.jsx(N,{}),description:"展示基本的请求预取功能，包括任务调度、缓存管理和优先级处理",observationPoints:["观察不同优先级任务的执行顺序","注意缓存命中和未命中的区别","查看预取任务的队列状态变化","观察智能预取模式的效果"],keyPoints:["预取管理器支持优先级调度","缓存系统提供高效的数据存储","智能预取可以批量处理相关请求","实时统计提供性能监控信息"],commonTraps:["预取过多数据导致带宽浪费","缓存大小设置不当影响性能","优先级设置不合理导致重要数据延迟","没有考虑网络状况的变化"],solutions:["根据用户行为和网络状况调整预取策略","实现智能的缓存淘汰和大小管理","提供动态的优先级调整机制","添加网络状况监控和自适应功能"],codeExample:i},{title:"智能预取策略演示",component:e.jsx(w,{}),description:"展示基于用户行为、时间模式和热门内容的智能预取策略",observationPoints:["观察不同策略的预取准确率","注意时间段对预取内容的影响","查看用户行为预测的效果","观察预取对整体性能的提升"],keyPoints:["用户行为预测可以提高预取准确率","时间段预取适应用户的使用习惯","热门内容预取提升整体用户体验","多策略组合可以获得最佳效果"],commonTraps:["预测算法过于复杂导致性能下降","收集用户数据时的隐私问题","策略切换时的缓存失效","多策略冲突导致资源浪费"],solutions:["使用轻量级的预测算法和启发式规则","实现隐私保护的数据收集机制","设计平滑的策略切换和缓存迁移","建立策略协调机制避免冲突"],codeExample:{title:"智能预取策略实现",language:"typescript",code:`// 智能预取策略管理器
class SmartPrefetchStrategy {
  private userBehaviorAnalyzer: UserBehaviorAnalyzer;
  private timeBasedPredictor: TimeBasedPredictor;
  private popularContentTracker: PopularContentTracker;
  private strategyWeights: StrategyWeights;

  constructor() {
    this.userBehaviorAnalyzer = new UserBehaviorAnalyzer();
    this.timeBasedPredictor = new TimeBasedPredictor();
    this.popularContentTracker = new PopularContentTracker();
    this.strategyWeights = {
      userBehavior: 0.4,
      timeBased: 0.3,
      popularContent: 0.3
    };
  }

  // 用户行为预测
  predictUserBehavior(userId: string): PrefetchSuggestion[] {
    const userHistory = this.userBehaviorAnalyzer.getUserHistory(userId);
    const patterns = this.userBehaviorAnalyzer.analyzePatterns(userHistory);
    
    return patterns.map(pattern => ({
      url: pattern.nextUrl,
      probability: pattern.confidence,
      priority: this.calculatePriority(pattern),
      strategy: 'user_behavior'
    }));
  }

  // 综合预取建议
  getSmartPrefetchSuggestions(userId: string): PrefetchSuggestion[] {
    const userSuggestions = this.predictUserBehavior(userId);
    const timeSuggestions = this.getTimeBasedPrefetch();
    const popularSuggestions = this.getPopularContentPrefetch();
    
    // 合并和加权
    const allSuggestions = [
      ...userSuggestions.map(s => ({ ...s, weight: this.strategyWeights.userBehavior })),
      ...timeSuggestions.map(s => ({ ...s, weight: this.strategyWeights.timeBased })),
      ...popularSuggestions.map(s => ({ ...s, weight: this.strategyWeights.popularContent }))
    ];
    
    return this.deduplicateAndRank(allSuggestions).slice(0, 10);
  }
}`,highlights:[14,20,32,42]}},{title:"预取性能对比演示",component:e.jsx(P,{}),description:"对比启用和未启用预取时的性能差异，展示预取的实际效果",observationPoints:["比较启用和未启用预取的响应时间","观察预取对总体性能的影响","注意预取的性能提升幅度","查看不同场景下的性能表现"],keyPoints:["预取可以显著减少响应时间","性能提升效果与预取准确率相关","预取在高延迟网络环境下效果更明显","需要权衡预取成本和性能收益"],commonTraps:["预取消耗过多带宽影响其他请求","性能测试环境与实际环境差异","忽略预取失败对性能的负面影响","只关注响应时间忽略资源消耗"],solutions:["实现带宽感知的预取控制机制","在真实网络环境下进行性能测试","建立完善的错误处理和降级机制","建立综合的性能评估体系"],codeExample:{title:"预取性能监控器实现",language:"typescript",code:`// 预取性能监控器
class PrefetchPerformanceMonitor {
  private metrics: PerformanceMetrics;
  private baseline: PerformanceBaseline;
  private observers: Set<PerformanceObserver>;

  constructor() {
    this.metrics = {
      responseTime: [],
      hitRate: 0,
      bandwidthUsage: 0,
      cacheEfficiency: 0
    };
    this.baseline = this.establishBaseline();
    this.observers = new Set();
  }

  // 记录请求性能
  recordRequest(request: RequestMetric): void {
    const cacheHit = this.checkCacheHit(request.url);
    const responseTime = cacheHit ? 0 : request.responseTime;
    
    this.metrics.responseTime.push({
      url: request.url,
      time: responseTime,
      cached: cacheHit,
      timestamp: Date.now()
    });
    
    this.updateMetrics();
    this.notifyObservers();
  }

  // 计算性能提升
  calculatePerformanceGain(): PerformanceGain {
    const avgResponseTime = this.getAverageResponseTime();
    const baselineResponseTime = this.baseline.averageResponseTime;
    
    const timeImprovement = ((baselineResponseTime - avgResponseTime) / baselineResponseTime) * 100;
    const hitRate = this.calculateHitRate();
    const bandwidthSavings = this.calculateBandwidthSavings();
    
    return {
      responseTimeImprovement: timeImprovement,
      hitRate,
      bandwidthSavings,
      overallScore: this.calculateOverallScore(timeImprovement, hitRate, bandwidthSavings)
    };
  }
}`,highlights:[18,33,37,42]}}],tutorial:{concepts:["请求预取是一种预测性的性能优化技术","通过提前获取可能需要的数据来减少用户等待时间","需要平衡预取准确率和资源消耗","智能预取策略可以根据用户行为动态调整","缓存管理是预取系统的核心组件"],steps:["设计预取管理器，支持任务调度和缓存管理","实现优先级队列和并发控制机制","开发智能预取策略和预测算法","添加缓存淘汰和过期管理功能","实现性能监控和统计分析","提供预取策略的配置和调优接口","进行性能测试和效果评估"],tips:["根据应用特性选择合适的预取策略","合理设置缓存大小和过期时间","监控预取的命中率和资源消耗","提供预取的开关和降级机制","考虑用户的网络环境和数据限制","定期分析用户行为优化预取算法","在关键路径上优先应用预取技术"]},interview:{questions:[{question:"什么是请求预取？它如何提升用户体验？",answer:"请求预取是在用户实际需要数据之前就提前获取数据的技术。它通过预测用户的下一步操作，提前加载相关数据到缓存中，从而在用户真正需要时能够立即响应，显著减少等待时间，提升用户体验。"},{question:"智能预取策略有哪些类型？",answer:"主要包括：1）基于用户行为的预取：分析用户的操作模式和习惯；2）基于时间的预取：根据不同时间段的使用模式；3）基于内容的预取：预取相关或热门内容；4）基于机器学习的预取：使用算法预测用户需求；5）基于上下文的预取：根据当前场景和状态。"},{question:"如何平衡预取的收益和成本？",answer:"需要考虑：1）预取准确率：提高预测精度，减少无效预取；2）资源消耗：控制带宽、存储和计算资源的使用；3）用户体验：在性能提升和资源消耗间找平衡；4）网络环境：根据网络状况调整预取策略；5）用户偏好：考虑用户的数据使用限制和偏好。"},{question:"预取系统的缓存管理策略有哪些？",answer:"常见策略包括：1）LRU（最近最少使用）：淘汰最久未访问的数据；2）LFU（最少使用频率）：淘汰访问频率最低的数据；3）TTL（生存时间）：基于时间的过期策略；4）大小限制：控制缓存的总大小；5）优先级淘汰：根据数据重要性进行淘汰；6）智能淘汰：结合多种因素的综合策略。"},{question:"如何评估预取系统的效果？",answer:"评估指标包括：1）命中率：预取数据被实际使用的比例；2）响应时间：用户请求的平均响应时间；3）带宽利用率：预取消耗的带宽与节省的带宽比较；4）用户体验评分：用户满意度和体验指标；5）资源效率：CPU、内存、存储的使用效率；6）预测准确率：预取策略的准确性。"}],keyPoints:["预取是重要的性能优化技术","智能预取策略可以显著提升效果","缓存管理是预取系统的核心","需要平衡性能收益和资源成本","预取效果需要持续监控和优化","用户体验是评估预取效果的最终标准"]},bestPractices:{dos:["根据用户行为和应用特性设计预取策略","实现智能的缓存管理和淘汰机制","提供详细的性能监控和分析","支持预取策略的动态调整和优化","考虑网络环境和用户数据限制","定期评估和改进预取算法","为预取系统提供降级和开关机制"],donts:["不要盲目预取大量数据","不要忽略预取的资源消耗","不要使用过于复杂的预测算法","不要忽略用户的网络环境差异","不要缺乏预取效果的监控","不要忽略预取失败时的处理","不要在所有场景下都启用预取"],patterns:["预测模式：基于历史数据和用户行为预测需求","缓存模式：高效的数据缓存和管理策略","观察者模式：监控用户行为和系统状态","策略模式：支持多种预取策略的动态选择","代理模式：透明地为请求添加预取功能","工厂模式：根据场景创建合适的预取器"]}})};export{T as default};
