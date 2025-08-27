var j=Object.defineProperty;var b=(n,t,s)=>t in n?j(n,t,{enumerable:!0,configurable:!0,writable:!0,value:s}):n[t]=s;var p=(n,t,s)=>b(n,typeof t!="symbol"?t+"":t,s);import{j as e,r as m}from"./index-Cnne2xOM.js";import{C as v}from"./ComponentTemplate-iqsAHbUA.js";class N{constructor(){p(this,"storage",new Map);p(this,"cache",new Map);p(this,"syncQueue",[]);p(this,"networkStatus",{online:navigator.onLine});p(this,"syncInProgress",!1);p(this,"listeners",new Set);p(this,"storageKey","offline_requests");p(this,"cacheKey","offline_cache");this.initializeStorage(),this.setupNetworkListeners(),this.setupPeriodicSync()}initializeStorage(){try{const t=localStorage.getItem(this.storageKey);t&&JSON.parse(t).forEach(a=>{this.storage.set(a.id,a),a.status==="pending"&&this.syncQueue.push(a)});const s=localStorage.getItem(this.cacheKey);s&&JSON.parse(s).forEach(a=>{a.expiry>Date.now()&&this.cache.set(a.key,a)})}catch(t){console.error("Failed to initialize offline storage:",t)}}setupNetworkListeners(){if(window.addEventListener("online",this.handleOnline.bind(this)),window.addEventListener("offline",this.handleOffline.bind(this)),"connection"in navigator){const t=navigator.connection;t==null||t.addEventListener("change",this.handleConnectionChange.bind(this)),this.updateNetworkStatus()}}setupPeriodicSync(){setInterval(()=>{this.networkStatus.online&&this.syncQueue.length>0&&this.syncPendingRequests()},3e4)}handleOnline(){this.networkStatus.online=!0,this.updateNetworkStatus(),this.notifyListeners(),this.syncPendingRequests()}handleOffline(){this.networkStatus.online=!1,this.updateNetworkStatus(),this.notifyListeners()}handleConnectionChange(){this.updateNetworkStatus(),this.notifyListeners()}updateNetworkStatus(){if("connection"in navigator){const t=navigator.connection;this.networkStatus={online:navigator.onLine,effectiveType:t==null?void 0:t.effectiveType,downlink:t==null?void 0:t.downlink,rtt:t==null?void 0:t.rtt}}else this.networkStatus={online:navigator.onLine}}notifyListeners(){this.listeners.forEach(t=>t(this.networkStatus))}addNetworkListener(t){return this.listeners.add(t),()=>this.listeners.delete(t)}getSyncQueueStatus(){return{total:this.syncQueue.length,pending:this.syncQueue.filter(t=>t.status==="pending").length,syncing:this.syncQueue.filter(t=>t.status==="syncing").length,failed:this.syncQueue.filter(t=>t.status==="failed").length}}getCacheStats(){return{size:this.cache.size,totalSize:Array.from(this.cache.values()).reduce((t,s)=>t+JSON.stringify(s.data).length,0)}}async request(t){const{url:s,method:i,headers:a={},body:d,priority:h="medium",cacheFirst:u=!1,cacheTTL:x=3e5}=t,y=this.getCacheKey(s,i,d);if(u||!this.networkStatus.online){const c=this.getFromCache(y);if(c)return{data:c.data,fromCache:!0}}if(this.networkStatus.online)try{const c=await this.executeRequest({url:s,method:i,headers:a,body:d});if(i.toLowerCase()==="get"&&c.ok){const g=await c.json();return this.setCache(y,g,x,c.headers.get("etag"),c.headers.get("last-modified")),{data:g,fromCache:!1}}return{data:await c.json(),fromCache:!1}}catch(c){const g=this.getFromCache(y);if(g)return{data:g.data,fromCache:!0,error:c};throw c}if(i.toLowerCase()!=="get"){const c=this.generateId(),g={id:c,url:s,method:i,headers:a,body:d,timestamp:Date.now(),retryCount:0,priority:h,status:"pending"};return this.storage.set(c,g),this.syncQueue.push(g),this.persistStorage(),{requestId:c,queued:!0}}const f=this.getFromCache(y);if(f)return{data:f.data,fromCache:!0};throw new Error("No cached data available for offline request")}getMockData(t,s,i){if(t.includes("/api/users")){if(s.toLowerCase()==="get")return{users:[{id:1,name:"Alice Johnson",email:"alice@example.com",status:"active"},{id:2,name:"Bob Smith",email:"bob@example.com",status:"active"},{id:3,name:"Charlie Brown",email:"charlie@example.com",status:"inactive"}],total:3,page:1,limit:10};if(s.toLowerCase()==="post")return{id:Date.now(),...i,status:"active",createdAt:new Date().toISOString()}}return t.includes("/api/posts")?{posts:[{id:1,title:"离线支持最佳实践",content:"如何实现可靠的离线功能...",author:"Alice"},{id:2,title:"缓存策略详解",content:"不同缓存策略的优缺点...",author:"Bob"}],total:2}:{message:"请求成功",timestamp:Date.now(),data:i||{}}}async executeRequest(t){const{url:s,method:i,headers:a,body:d}=t;await new Promise(u=>setTimeout(u,Math.random()*500+200));const h=this.getMockData(s,i,d);return{ok:!0,status:200,statusText:"OK",headers:{get:u=>u==="etag"?`"${Date.now()}"`:u==="last-modified"?new Date().toUTCString():null},json:async()=>h}}async syncPendingRequests(){if(!(this.syncInProgress||!this.networkStatus.online)){this.syncInProgress=!0;try{const t=[...this.syncQueue].sort((s,i)=>{const a={high:3,medium:2,low:1};return a[i.priority]-a[s.priority]});for(const s of t)try{s.status="syncing";const i=await this.executeRequest({url:s.url,method:s.method,headers:s.headers,body:s.body});if(i.ok)s.status="synced",this.removeFromSyncQueue(s.id);else throw new Error(`HTTP ${i.status}: ${i.statusText}`)}catch{s.retryCount++,s.status="failed",s.retryCount<3?s.status="pending":this.removeFromSyncQueue(s.id)}}finally{this.syncInProgress=!1,this.persistStorage()}}}removeFromSyncQueue(t){this.syncQueue=this.syncQueue.filter(s=>s.id!==t),this.storage.delete(t)}getCacheKey(t,s,i){const a=i?JSON.stringify(i):"";return`${s.toUpperCase()}_${t}_${a}`}getFromCache(t){const s=this.cache.get(t);return s&&s.expiry>Date.now()?s:(s&&this.cache.delete(t),null)}setCache(t,s,i,a,d){const h={key:t,data:s,timestamp:Date.now(),expiry:Date.now()+i,etag:a||void 0,lastModified:d||void 0};this.cache.set(t,h),this.persistCache()}persistStorage(){try{const t=Array.from(this.storage.values());localStorage.setItem(this.storageKey,JSON.stringify(t))}catch(t){console.error("Failed to persist offline storage:",t)}}persistCache(){try{const t=Array.from(this.cache.values());localStorage.setItem(this.cacheKey,JSON.stringify(t))}catch(t){console.error("Failed to persist cache:",t)}}generateId(){return Math.random().toString(36).substr(2,9)+Date.now().toString(36)}getNetworkStatus(){return{...this.networkStatus}}clearCache(){this.cache.clear(),localStorage.removeItem(this.cacheKey)}clearSyncQueue(){this.syncQueue=[],this.storage.clear(),localStorage.removeItem(this.storageKey)}}const C=()=>{const[n]=m.useState(()=>new N),[t,s]=m.useState({online:navigator.onLine}),[i,a]=m.useState([]),[d,h]=m.useState(null),[u,x]=m.useState({total:0,pending:0,syncing:0,failed:0}),[y,f]=m.useState({size:0,totalSize:0});m.useEffect(()=>{const r=n.addNetworkListener(s);s(n.getNetworkStatus());const o=()=>{x(n.getSyncQueueStatus()),f(n.getCacheStats())};o();const l=setInterval(o,1e3);return()=>{r(),clearInterval(l)}},[n]);const c=m.useCallback(async()=>{h("get");const r=Math.random().toString(36).substr(2,9);try{const o=await n.request({url:"/api/users",method:"GET",cacheFirst:!0,cacheTTL:3e5});a(l=>[...l.slice(-9),{id:r,type:"GET /api/users",status:o.fromCache?"cached":"success",timestamp:Date.now(),data:o.data||{users:[{id:1,name:"Alice"},{id:2,name:"Bob"}]}}])}catch(o){a(l=>[...l.slice(-9),{id:r,type:"GET /api/users",status:"error",timestamp:Date.now(),error:o.message}])}finally{h(null)}},[n]),g=m.useCallback(async()=>{h("post");const r=Math.random().toString(36).substr(2,9);try{const o=await n.request({url:"/api/users",method:"POST",body:{name:`User ${Date.now()}`,email:`user${Date.now()}@example.com`},priority:"high"});a(l=>[...l.slice(-9),{id:r,type:"POST /api/users",status:o.queued?"queued":"success",timestamp:Date.now(),data:o.queued?{requestId:o.requestId}:o.data}])}catch(o){a(l=>[...l.slice(-9),{id:r,type:"POST /api/users",status:"error",timestamp:Date.now(),error:o.message}])}finally{h(null)}},[n]),w=m.useCallback(async()=>{h("sync");try{const r=n.getSyncQueueStatus();if(r.pending===0){const o={id:Date.now().toString(),type:"SYNC_INFO",status:"没有待同步的请求",timestamp:Date.now(),data:{message:"当前没有离线请求需要同步"}};a(l=>[o,...l])}else{await n.syncPendingRequests();const o=n.getSyncQueueStatus(),l={id:Date.now().toString(),type:"SYNC_RESULT",status:"同步完成",timestamp:Date.now(),data:{synced:r.pending-o.pending,failed:o.failed,message:`成功同步 ${r.pending-o.pending} 个请求${o.failed>0?`，${o.failed} 个失败`:""}`}};a(S=>[l,...S])}x(n.getSyncQueueStatus()),f(n.getCacheStats())}catch(r){console.error("同步失败:",r);const o={id:Date.now().toString(),type:"SYNC_ERROR",status:"同步失败",timestamp:Date.now(),error:r instanceof Error?r.message:"未知错误"};a(l=>[o,...l])}finally{h(null)}},[n]);return e.jsx("div",{className:"space-y-6",children:e.jsxs("div",{className:"bg-white p-6 rounded-lg shadow-sm border",children:[e.jsx("h3",{className:"text-lg font-semibold mb-4",children:"基础离线支持"}),e.jsxs("div",{className:"grid grid-cols-3 gap-6",children:[e.jsxs("div",{className:"space-y-4",children:[e.jsxs("div",{children:[e.jsx("h4",{className:"font-medium mb-3",children:"网络状态"}),e.jsxs("div",{className:"p-3 bg-gray-50 rounded",children:[e.jsxs("div",{className:"flex items-center space-x-2 mb-2",children:[e.jsx("div",{className:`w-3 h-3 rounded-full ${t.online?"bg-green-500":"bg-red-500"}`}),e.jsx("span",{className:"font-medium",children:t.online?"在线":"离线"})]}),t.effectiveType&&e.jsxs("div",{className:"text-sm text-gray-600",children:[e.jsxs("div",{children:["连接类型: ",t.effectiveType]}),t.downlink&&e.jsxs("div",{children:["下行速度: ",t.downlink," Mbps"]}),t.rtt&&e.jsxs("div",{children:["延迟: ",t.rtt," ms"]})]})]})]}),e.jsxs("div",{children:[e.jsx("h4",{className:"font-medium mb-3",children:"同步队列状态"}),e.jsx("div",{className:"p-3 bg-gray-50 rounded",children:e.jsxs("div",{className:"grid grid-cols-2 gap-2 text-sm",children:[e.jsxs("div",{children:["待同步:"," ",e.jsx("span",{className:"font-mono",children:u.pending})]}),e.jsxs("div",{children:["同步中:"," ",e.jsx("span",{className:"font-mono",children:u.syncing})]}),e.jsxs("div",{children:["总计: ",e.jsx("span",{className:"font-mono",children:u.total})]}),e.jsxs("div",{children:["失败:"," ",e.jsx("span",{className:"font-mono text-red-600",children:u.failed})]})]})})]}),e.jsxs("div",{children:[e.jsx("h4",{className:"font-medium mb-3",children:"缓存统计"}),e.jsx("div",{className:"p-3 bg-blue-50 rounded",children:e.jsxs("div",{className:"text-sm",children:[e.jsxs("div",{children:["缓存项: ",e.jsx("span",{className:"font-mono",children:y.size})]}),e.jsxs("div",{children:["总大小:"," ",e.jsxs("span",{className:"font-mono",children:[(y.totalSize/1024).toFixed(1),"KB"]})]})]})})]}),e.jsxs("div",{children:[e.jsx("h4",{className:"font-medium mb-3",children:"操作"}),e.jsxs("div",{className:"space-y-2",children:[e.jsx("button",{onClick:c,disabled:d==="get",className:"w-full px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 disabled:bg-gray-300 disabled:cursor-not-allowed transition-colors",children:d==="get"?"请求中...":"GET 请求"}),e.jsx("button",{onClick:g,disabled:d==="post",className:"w-full px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600 disabled:bg-gray-300 disabled:cursor-not-allowed transition-colors",children:d==="post"?"请求中...":"POST 请求"}),e.jsx("button",{onClick:w,disabled:d==="sync",className:"w-full px-4 py-2 bg-purple-500 text-white rounded hover:bg-purple-600 disabled:bg-gray-300 disabled:cursor-not-allowed transition-colors",children:d==="sync"?"同步中...":"手动同步"})]})]})]}),e.jsxs("div",{className:"col-span-2",children:[e.jsx("h4",{className:"font-medium mb-3",children:"请求历史"}),e.jsx("div",{className:"max-h-80 overflow-y-auto border rounded-lg",children:i.length>0?e.jsx("div",{className:"space-y-2 p-2",children:i.map(r=>e.jsxs("div",{className:"p-3 bg-gray-50 rounded",children:[e.jsxs("div",{className:"flex justify-between items-center mb-2",children:[e.jsx("span",{className:"font-medium text-blue-600",children:r.type}),e.jsx("span",{className:`px-2 py-1 rounded text-xs ${r.status==="success"?"bg-green-100 text-green-600":r.status==="cached"?"bg-blue-100 text-blue-600":r.status==="queued"?"bg-yellow-100 text-yellow-600":"bg-red-100 text-red-600"}`,children:r.status==="success"?"成功":r.status==="cached"?"缓存":r.status==="queued"?"队列":"错误"})]}),e.jsx("div",{className:"text-xs text-gray-500 mb-2",children:new Date(r.timestamp).toLocaleTimeString()}),r.data&&e.jsx("div",{className:"text-xs bg-white p-2 rounded border",children:e.jsx("pre",{className:"whitespace-pre-wrap",children:JSON.stringify(r.data,null,2)})}),r.error&&e.jsx("div",{className:"text-xs text-red-600 bg-red-50 p-2 rounded",children:r.error})]},r.id))}):e.jsxs("div",{className:"p-4 text-center text-gray-500",children:["暂无请求记录",e.jsx("br",{}),e.jsx("small",{children:"执行请求后显示历史记录"})]})})]})]})]})})},I=()=>{const n={title:"离线支持实现",language:"typescript",code:`// 离线支持管理器
class OfflineSupportManager {
  private storage: Map<string, OfflineStorageItem> = new Map();
  private cache: Map<string, CacheItem> = new Map();
  private syncQueue: OfflineStorageItem[] = [];
  private networkStatus: NetworkStatus = { online: navigator.onLine };

  constructor() {
    this.initializeStorage();
    this.setupNetworkListeners();
    this.setupPeriodicSync();
  }

  // 执行请求（支持离线）
  async request(config: {
    url: string;
    method: string;
    headers?: Record<string, string>;
    body?: any;
    priority?: 'high' | 'medium' | 'low';
    cacheFirst?: boolean;
    cacheTTL?: number;
  }) {
    const { url, method, cacheFirst = false } = config;
    const cacheKey = this.getCacheKey(url, method, config.body);

    // 缓存优先策略
    if (cacheFirst || !this.networkStatus.online) {
      const cached = this.getFromCache(cacheKey);
      if (cached) {
        return { data: cached.data, fromCache: true };
      }
    }

    // 在线时直接请求
    if (this.networkStatus.online) {
      try {
        const response = await this.executeRequest(config);

        // 缓存GET请求的响应
        if (method.toLowerCase() === 'get' && response.ok) {
          const data = await response.json();
          this.setCache(cacheKey, data, config.cacheTTL || 300000);
          return { data, fromCache: false };
        }

        return { data: await response.json(), fromCache: false };
      } catch (error) {
        // 网络错误时尝试从缓存获取
        const cached = this.getFromCache(cacheKey);
        if (cached) {
          return { data: cached.data, fromCache: true, error };
        }
        throw error;
      }
    }

    // 离线时存储请求
    if (method.toLowerCase() !== 'get') {
      const requestId = this.generateId();
      const offlineRequest: OfflineStorageItem = {
        id: requestId,
        url: config.url,
        method: config.method,
        headers: config.headers || {},
        body: config.body,
        timestamp: Date.now(),
        retryCount: 0,
        priority: config.priority || 'medium',
        status: 'pending'
      };

      this.storage.set(requestId, offlineRequest);
      this.syncQueue.push(offlineRequest);
      this.persistStorage();

      return { requestId, queued: true };
    }

    throw new Error('No cached data available for offline request');
  }

  // 同步待处理请求
  async syncPendingRequests() {
    if (this.syncInProgress || !this.networkStatus.online) {
      return;
    }

    this.syncInProgress = true;

    try {
      // 按优先级排序
      const sortedQueue = [...this.syncQueue].sort((a, b) => {
        const priorityOrder = { high: 3, medium: 2, low: 1 };
        return priorityOrder[b.priority] - priorityOrder[a.priority];
      });

      for (const request of sortedQueue) {
        try {
          request.status = 'syncing';

          const response = await this.executeRequest({
            url: request.url,
            method: request.method,
            headers: request.headers,
            body: request.body
          });

          if (response.ok) {
            request.status = 'synced';
            this.removeFromSyncQueue(request.id);
          } else {
            throw new Error(\`HTTP \${response.status}: \${response.statusText}\`);
          }
        } catch (error) {
          request.retryCount++;
          request.status = 'failed';

          // 重试逻辑
          if (request.retryCount < 3) {
            request.status = 'pending';
          } else {
            this.removeFromSyncQueue(request.id);
          }
        }
      }
    } finally {
      this.syncInProgress = false;
      this.persistStorage();
    }
  }
}`,highlights:[15,25,35,45,55,65,75,85,95]};return e.jsx(v,{title:"离线支持",description:"离线支持是现代Web应用的重要特性，它允许应用在网络不可用时继续工作，并在网络恢复时自动同步数据。",overview:e.jsxs("div",{className:"space-y-4",children:[e.jsxs("div",{children:[e.jsx("h3",{className:"text-lg font-semibold mb-2",children:"核心概念"}),e.jsxs("ul",{className:"space-y-2 text-gray-700",children:[e.jsxs("li",{children:[e.jsx("strong",{children:"离线存储："}),"将未发送的请求存储在本地，等待网络恢复后同步"]}),e.jsxs("li",{children:[e.jsx("strong",{children:"缓存策略："}),"智能缓存响应数据，在离线时提供数据访问"]}),e.jsxs("li",{children:[e.jsx("strong",{children:"网络检测："}),"实时监控网络状态变化，自动切换工作模式"]}),e.jsxs("li",{children:[e.jsx("strong",{children:"同步机制："}),"网络恢复时自动同步离线期间的操作"]}),e.jsxs("li",{children:[e.jsx("strong",{children:"冲突解决："}),"处理离线期间可能产生的数据冲突"]})]})]}),e.jsxs("div",{children:[e.jsx("h3",{className:"text-lg font-semibold mb-2",children:"主要优势"}),e.jsxs("ul",{className:"space-y-2 text-gray-700",children:[e.jsxs("li",{children:[e.jsx("strong",{children:"用户体验："}),"即使在网络不稳定时也能正常使用应用"]}),e.jsxs("li",{children:[e.jsx("strong",{children:"数据完整性："}),"确保用户操作不会因网络问题而丢失"]}),e.jsxs("li",{children:[e.jsx("strong",{children:"性能提升："}),"缓存机制减少不必要的网络请求"]}),e.jsxs("li",{children:[e.jsx("strong",{children:"可靠性："}),"提高应用在各种网络环境下的可用性"]}),e.jsxs("li",{children:[e.jsx("strong",{children:"移动友好："}),"特别适合移动设备的不稳定网络环境"]})]})]}),e.jsxs("div",{children:[e.jsx("h3",{className:"text-lg font-semibold mb-2",children:"适用场景"}),e.jsxs("ul",{className:"space-y-2 text-gray-700",children:[e.jsxs("li",{children:[e.jsx("strong",{children:"移动应用："}),"需要在弱网络环境下正常工作的应用"]}),e.jsxs("li",{children:[e.jsx("strong",{children:"表单应用："}),"用户填写表单时避免数据丢失"]}),e.jsxs("li",{children:[e.jsx("strong",{children:"内容应用："}),"新闻、博客等内容型应用的离线阅读"]}),e.jsxs("li",{children:[e.jsx("strong",{children:"协作应用："}),"多人协作时的离线编辑和同步"]}),e.jsxs("li",{children:[e.jsx("strong",{children:"数据收集："}),"现场数据收集应用的离线支持"]})]})]}),e.jsxs("div",{children:[e.jsx("h3",{className:"text-lg font-semibold mb-2",children:"注意事项"}),e.jsxs("ul",{className:"space-y-2 text-gray-700",children:[e.jsxs("li",{children:[e.jsx("strong",{children:"存储限制："}),"浏览器本地存储有容量限制"]}),e.jsxs("li",{children:[e.jsx("strong",{children:"数据冲突："}),"需要处理离线期间的数据冲突"]}),e.jsxs("li",{children:[e.jsx("strong",{children:"安全性："}),"本地存储的数据安全性考虑"]}),e.jsxs("li",{children:[e.jsx("strong",{children:"同步策略："}),"合理的同步时机和频率设计"]}),e.jsxs("li",{children:[e.jsx("strong",{children:"用户提示："}),"清晰的离线状态和同步进度提示"]})]})]})]}),examples:[{title:"基础离线支持",component:e.jsx(C,{}),description:"演示基本的离线请求存储、缓存和同步功能。",observationPoints:["观察网络状态显示，包括在线/离线状态和连接质量信息",'在线时点击"GET 请求"按钮，观察数据缓存和响应','在线时点击"POST 请求"按钮，观察请求的直接执行',"离线时执行请求，观察请求如何被存储到队列中",'网络恢复后点击"手动同步"或等待自动同步'],keyPoints:["GET请求会被自动缓存，离线时可以从缓存获取数据","POST/PUT/DELETE等修改请求在离线时会被存储到同步队列","网络状态变化会被实时监控和响应","同步队列按优先级排序，确保重要请求优先处理"],commonTraps:["缓存数据过期时间设置不合理","同步队列过大导致性能问题","网络状态检测不准确","离线数据与服务器数据冲突"],solutions:["根据数据特性设置合适的缓存TTL","限制同步队列大小，实现队列清理机制","结合多种网络检测方法提高准确性","实现数据冲突检测和解决策略"],importantTips:["网络状态面板显示了详细的连接信息，包括连接类型和网络质量","请求历史记录展示了不同状态的请求：成功、缓存、队列、错误","离线时的POST请求会显示队列状态，网络恢复后会自动同步"],codeExample:n}],tutorial:{concepts:["离线支持是Progressive Web App (PWA)的核心特性之一","Service Worker是实现离线功能的主要技术，但也可以用JavaScript实现基础功能","缓存策略包括Cache First、Network First、Stale While Revalidate等","同步机制需要考虑网络恢复时的批量处理和错误重试","数据冲突解决可以采用Last Write Wins、Merge、User Choice等策略","离线状态的用户界面设计需要清晰地传达当前状态和操作结果"],steps:["实现网络状态监控，监听online/offline事件和连接变化","设计离线存储结构，包括请求队列和响应缓存","实现请求拦截器，根据网络状态选择处理策略","开发缓存管理机制，包括数据存储、过期和清理","构建同步队列系统，支持优先级和重试机制","实现数据冲突检测和解决策略","设计离线状态的用户界面和交互反馈","添加性能监控和错误处理机制"],tips:["使用localStorage或IndexedDB存储离线数据，注意存储容量限制","实现智能的缓存策略，平衡数据新鲜度和离线可用性","设计合理的同步时机，避免频繁的网络请求","提供清晰的离线状态指示和同步进度反馈","考虑数据压缩和增量同步以提高效率","实现优雅的降级策略，确保核心功能在离线时可用","测试各种网络环境，包括慢网络和不稳定连接","考虑用户隐私，合理处理本地存储的敏感数据"]},interview:{questions:[{question:"如何实现Web应用的离线支持？",answer:"实现离线支持主要包括：1) 使用Service Worker拦截网络请求；2) 实现缓存策略，存储关键资源和数据；3) 监控网络状态变化；4) 设计离线时的数据存储和同步机制；5) 处理离线期间的用户操作；6) 实现网络恢复后的数据同步；7) 提供离线状态的用户界面反馈。"},{question:"离线应用的缓存策略有哪些？",answer:"主要缓存策略包括：1) Cache First：优先从缓存获取，适合静态资源；2) Network First：优先从网络获取，适合动态数据；3) Cache Only：仅从缓存获取，适合离线模式；4) Network Only：仅从网络获取，适合实时数据；5) Stale While Revalidate：返回缓存数据同时更新缓存；6) Cache Then Network：先返回缓存，再更新网络数据。"},{question:"如何处理离线期间的数据冲突？",answer:"数据冲突处理策略包括：1) Last Write Wins：最后写入的数据获胜，简单但可能丢失数据；2) First Write Wins：第一次写入的数据获胜；3) Merge Strategy：智能合并冲突数据；4) User Choice：让用户选择保留哪个版本；5) Timestamp Based：基于时间戳决定；6) Version Control：使用版本号进行冲突检测；7) Field Level Merge：字段级别的合并策略。"},{question:"离线同步的最佳实践是什么？",answer:"离线同步最佳实践包括：1) 实现增量同步，只同步变化的数据；2) 使用优先级队列，重要操作优先同步；3) 实现指数退避重试机制；4) 批量处理同步请求，减少网络开销；5) 提供同步进度反馈；6) 实现冲突检测和解决机制；7) 考虑网络质量，调整同步策略；8) 实现同步失败的降级处理。"},{question:"Service Worker在离线支持中的作用是什么？",answer:"Service Worker的作用包括：1) 拦截网络请求，实现缓存策略；2) 管理应用缓存，存储关键资源；3) 实现后台同步，在网络恢复时同步数据；4) 处理推送通知；5) 提供离线页面和功能；6) 实现应用更新机制；7) 管理缓存版本和清理；8) 提供网络状态监控和响应。"}],keyPoints:["离线支持是现代Web应用提升用户体验的重要特性","Service Worker是实现离线功能的核心技术","合适的缓存策略是离线支持成功的关键","数据同步和冲突解决需要仔细设计和测试","用户界面应该清晰地反映离线状态和同步进度","性能和存储限制是实现离线支持时的重要考虑因素"]},bestPractices:{dos:["实现智能的缓存策略，平衡数据新鲜度和可用性","提供清晰的离线状态指示和用户反馈","设计合理的数据同步机制和冲突解决策略","优化本地存储使用，避免超出浏览器限制","实现渐进式离线功能，核心功能优先","测试各种网络环境和边界情况","考虑用户隐私和数据安全","实现优雅的错误处理和恢复机制"],donts:["不要缓存过多不必要的数据","不要忽略数据冲突的处理","不要在离线时隐藏所有功能","不要忽略本地存储的安全性","不要实现过于复杂的同步逻辑","不要忽略网络状态的准确检测","不要忘记清理过期的缓存数据","不要忽略离线功能的性能影响"],patterns:["使用Cache-Aside模式管理数据缓存","实现Command模式存储离线操作","使用Observer模式监听网络状态变化","实现Strategy模式选择不同的缓存策略","使用Queue模式管理同步任务","实现Retry模式处理同步失败","使用State模式管理离线/在线状态","实现Facade模式简化离线功能接口"]}})};export{I as default};
