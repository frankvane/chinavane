var S=Object.defineProperty;var E=(n,s,t)=>s in n?S(n,s,{enumerable:!0,configurable:!0,writable:!0,value:t}):n[s]=t;var d=(n,s,t)=>E(n,typeof s!="symbol"?s+"":s,t);import{j as e,r as l}from"./index-Cnne2xOM.js";import{C as k}from"./ComponentTemplate-iqsAHbUA.js";class D{constructor(s={},t={}){d(this,"nodes",new Map);d(this,"cdnConfig");d(this,"warmupConfig");d(this,"cache",new Map);d(this,"listeners",new Set);d(this,"warmupInterval");d(this,"healthCheckInterval");this.cdnConfig={enableEdgeCache:!0,cacheStrategy:"lru",maxCacheSize:100,ttl:5*60*1e3,compressionEnabled:!0,prefetchEnabled:!0,geoRouting:!0,...s},this.warmupConfig={enabled:!0,urls:[],interval:30*1e3,concurrency:3,retryCount:2,healthCheck:!0,...t},this.initializeEdgeNodes(),this.startHealthCheck(),this.warmupConfig.enabled&&this.startWarmup()}initializeEdgeNodes(){[{id:"edge-us-west",region:"US West",endpoint:"https://us-west.edge.example.com",latency:50,load:.3,status:"active",capabilities:["cache","compute","cdn"],lastHealthCheck:Date.now()},{id:"edge-us-east",region:"US East",endpoint:"https://us-east.edge.example.com",latency:45,load:.5,status:"active",capabilities:["cache","compute","cdn"],lastHealthCheck:Date.now()},{id:"edge-eu-central",region:"EU Central",endpoint:"https://eu-central.edge.example.com",latency:80,load:.2,status:"active",capabilities:["cache","cdn"],lastHealthCheck:Date.now()},{id:"edge-asia-pacific",region:"Asia Pacific",endpoint:"https://ap.edge.example.com",latency:120,load:.7,status:"maintenance",capabilities:["cache"],lastHealthCheck:Date.now()-6e4}].forEach(t=>this.nodes.set(t.id,t))}selectOptimalNode(s){const t=Array.from(this.nodes.values()).filter(i=>i.status==="active");if(t.length===0)return null;const a=t.map(i=>({node:i,score:this.calculateNodeScore(i,s)}));return a.sort((i,c)=>c.score-i.score),a[0].node}calculateNodeScore(s,t){let a=100;if(a-=s.latency/10*.4,a-=s.load*100*.3,t&&this.cdnConfig.geoRouting){const i=this.calculateGeoScore(s.region,t);a+=i*.2}return a+=s.capabilities.length*5*.1,Math.max(0,a)}calculateGeoScore(s,t){const i={"US West":["california","oregon","washington","nevada"],"US East":["new york","florida","virginia","massachusetts"],"EU Central":["germany","france","netherlands","belgium"],"Asia Pacific":["japan","singapore","australia","korea"]}[s]||[],c=t.toLowerCase();return i.some(h=>c.includes(h))?50:0}async edgeRequest(s,t={}){const a=this.generateCacheKey(s,t);if(this.cdnConfig.enableEdgeCache){const c=this.getFromCache(a);if(c)return{data:c,fromCache:!0,node:"cache"}}const i=this.selectOptimalNode();if(!i)throw new Error("No active edge nodes available");try{const c=Date.now();await new Promise(u=>setTimeout(u,i.latency+Math.random()*50));const h=this.generateMockResponse(s),m=Date.now()-c;return this.updateNodeStats(i.id,m,!0),this.cdnConfig.enableEdgeCache&&this.setCache(a,h,this.cdnConfig.ttl),{data:h,fromCache:!1,node:i.region,duration:m}}catch(c){throw this.updateNodeStats(i.id,0,!1),c}}generateMockResponse(s){return{"https://api.example.com/data":{id:Math.floor(Math.random()*1e3),message:"Hello from edge node!",timestamp:new Date().toISOString(),cached:!1},"https://api.example.com/popular-content":{posts:[{id:1,title:"Popular Post 1",views:1500},{id:2,title:"Popular Post 2",views:1200}],total:2},"https://api.example.com/trending-posts":{trending:[{id:3,title:"Trending Now",score:95},{id:4,title:"Hot Topic",score:88}]},"https://api.example.com/user-preferences":{theme:"dark",language:"zh-CN",notifications:!0}}[s]||{url:s,data:"Mock response data",timestamp:new Date().toISOString(),nodeProcessed:!0}}buildEdgeUrl(s,t){const a=new URL(t);return`${s}/proxy${a.pathname}${a.search}`}generateCacheKey(s,t){const a=t.method||"GET",i=JSON.stringify(t.headers||{});return`${a}:${s}:${i}`}getFromCache(s){const t=this.cache.get(s);return t?Date.now()-t.timestamp>t.ttl?(this.cache.delete(s),null):t.data:null}setCache(s,t,a){if(this.cache.size>=this.cdnConfig.maxCacheSize){const i=this.cache.keys().next().value;this.cache.delete(i)}this.cache.set(s,{data:t,timestamp:Date.now(),ttl:a})}async warmupRequests(){if(!this.warmupConfig.enabled||this.warmupConfig.urls.length===0)return;const s=this.warmupConfig.urls.map(async t=>{try{return await this.edgeRequest(t),{url:t,success:!0}}catch(a){return{url:t,success:!1,error:a.message}}});await Promise.allSettled(s),this.notifyListeners()}startWarmup(){this.warmupInterval=setInterval(()=>{this.warmupRequests()},this.warmupConfig.interval)}startHealthCheck(){this.healthCheckInterval=setInterval(()=>{this.performHealthCheck()},3e4)}async performHealthCheck(){const s=Array.from(this.nodes.values()).map(async t=>{try{const a=Date.now(),i=await fetch(`${t.endpoint}/health`,{method:"GET",timeout:5e3}),c=Date.now()-a;i.ok?(t.status="active",t.latency=c,t.lastHealthCheck=Date.now()):t.status="inactive"}catch{t.status="inactive"}});await Promise.allSettled(s),this.notifyListeners()}updateNodeStats(s,t,a){const i=this.nodes.get(s);i&&(a?(i.load=Math.max(0,i.load-.1),i.latency=(i.latency+t)/2):i.load=Math.min(1,i.load+.2))}getEdgeNodes(){return Array.from(this.nodes.values())}getCacheStats(){const s=Date.now();let t=0,a=0;for(const[i,c]of this.cache.entries())s-c.timestamp>c.ttl?a++:t++;return{totalEntries:this.cache.size,validEntries:t,expiredEntries:a,hitRate:t/(t+a)||0,maxSize:this.cdnConfig.maxCacheSize}}cleanupCache(){const s=Date.now();for(const[t,a]of this.cache.entries())s-a.timestamp>a.ttl&&this.cache.delete(t)}addListener(s){this.listeners.add(s)}removeListener(s){this.listeners.delete(s)}notifyListeners(){this.listeners.forEach(s=>s())}destroy(){this.warmupInterval&&clearInterval(this.warmupInterval),this.healthCheckInterval&&clearInterval(this.healthCheckInterval),this.listeners.clear(),this.cache.clear()}}const R=()=>{const[n]=l.useState(()=>new D({enableEdgeCache:!0,cacheStrategy:"lru",maxCacheSize:50,ttl:12e4,compressionEnabled:!0,prefetchEnabled:!0,geoRouting:!0},{enabled:!0,urls:["https://api.example.com/popular-content","https://api.example.com/trending-posts","https://api.example.com/user-preferences"],interval:15e3,concurrency:2,retryCount:1})),[s,t]=l.useState([]),[a,i]=l.useState({}),[c,h]=l.useState([]),[m,u]=l.useState(!1),[g,f]=l.useState("https://api.example.com/data"),[b,j]=l.useState("california"),o=l.useCallback(()=>{t(n.getEdgeNodes()),i(n.getCacheStats())},[n]);l.useEffect(()=>(n.addListener(o),o(),()=>{n.removeListener(o),n.destroy()}),[n,o]);const y=l.useCallback(async()=>{u(!0);try{const r=Date.now(),p=await n.edgeRequest(g),x=Date.now()-r,N={id:Date.now(),url:g,...p,totalTime:x,timestamp:new Date().toLocaleTimeString()};h(w=>[N,...w.slice(0,9)]),o()}catch(r){const p={id:Date.now(),url:g,error:r.message,timestamp:new Date().toLocaleTimeString()};h(x=>[p,...x.slice(0,9)])}finally{u(!1)}},[n,g,o]),v=l.useCallback(async()=>{u(!0);try{await n.warmupRequests(),o()}catch(r){console.error("Warmup failed:",r)}finally{u(!1)}},[n,o]),C=l.useCallback(()=>{n.cleanupCache(),o()},[n,o]);return e.jsx("div",{className:"space-y-6",children:e.jsxs("div",{className:"bg-white p-6 rounded-lg border",children:[e.jsx("h3",{className:"text-lg font-semibold mb-4",children:"边缘计算管理演示"}),e.jsxs("div",{className:"grid grid-cols-1 lg:grid-cols-2 gap-6",children:[e.jsxs("div",{className:"space-y-4",children:[e.jsxs("div",{children:[e.jsx("h4",{className:"font-medium text-gray-900 mb-2",children:"请求配置"}),e.jsxs("div",{className:"space-y-2",children:[e.jsxs("div",{children:[e.jsx("label",{className:"block text-sm text-gray-600 mb-1",children:"请求URL"}),e.jsx("input",{type:"text",value:g,onChange:r=>f(r.target.value),className:"w-full p-2 border border-gray-300 rounded-md",placeholder:"输入API URL"})]}),e.jsxs("div",{children:[e.jsx("label",{className:"block text-sm text-gray-600 mb-1",children:"用户位置"}),e.jsxs("select",{value:b,onChange:r=>j(r.target.value),className:"w-full p-2 border border-gray-300 rounded-md",children:[e.jsx("option",{value:"california",children:"California (US West)"}),e.jsx("option",{value:"new york",children:"New York (US East)"}),e.jsx("option",{value:"germany",children:"Germany (EU Central)"}),e.jsx("option",{value:"japan",children:"Japan (Asia Pacific)"})]})]})]})]}),e.jsxs("div",{className:"flex gap-2",children:[e.jsx("button",{onClick:y,disabled:m,className:"flex-1 bg-blue-500 hover:bg-blue-600 disabled:bg-gray-400 text-white px-4 py-2 rounded-md transition-colors",children:m?"请求中...":"边缘请求"}),e.jsx("button",{onClick:v,disabled:m,className:"flex-1 bg-green-500 hover:bg-green-600 disabled:bg-gray-400 text-white px-4 py-2 rounded-md transition-colors",children:"预热请求"}),e.jsx("button",{onClick:C,className:"bg-orange-500 hover:bg-orange-600 text-white px-4 py-2 rounded-md transition-colors",children:"清理缓存"})]})]}),e.jsxs("div",{children:[e.jsx("h4",{className:"font-medium text-gray-900 mb-2",children:"边缘节点状态"}),e.jsx("div",{className:"space-y-2 max-h-64 overflow-y-auto",children:s.map(r=>e.jsxs("div",{className:"p-3 bg-gray-50 rounded-md",children:[e.jsxs("div",{className:"flex justify-between items-center mb-1",children:[e.jsx("span",{className:"font-medium text-sm",children:r.region}),e.jsx("span",{className:`px-2 py-1 rounded-full text-xs ${r.status==="active"?"bg-green-100 text-green-800":r.status==="inactive"?"bg-red-100 text-red-800":"bg-yellow-100 text-yellow-800"}`,children:r.status})]}),e.jsxs("div",{className:"text-xs text-gray-600 space-y-1",children:[e.jsxs("div",{children:["延迟: ",r.latency,"ms"]}),e.jsxs("div",{children:["负载: ",(r.load*100).toFixed(1),"%"]}),e.jsxs("div",{children:["能力: ",r.capabilities.join(", ")]})]})]},r.id))})]})]}),e.jsxs("div",{className:"mt-6",children:[e.jsx("h4",{className:"font-medium text-gray-900 mb-2",children:"缓存统计"}),e.jsxs("div",{className:"grid grid-cols-2 md:grid-cols-5 gap-4",children:[e.jsxs("div",{className:"bg-blue-50 p-3 rounded-md",children:[e.jsx("div",{className:"text-sm text-blue-600",children:"总条目"}),e.jsx("div",{className:"text-lg font-semibold text-blue-900",children:a.totalEntries||0})]}),e.jsxs("div",{className:"bg-green-50 p-3 rounded-md",children:[e.jsx("div",{className:"text-sm text-green-600",children:"有效条目"}),e.jsx("div",{className:"text-lg font-semibold text-green-900",children:a.validEntries||0})]}),e.jsxs("div",{className:"bg-red-50 p-3 rounded-md",children:[e.jsx("div",{className:"text-sm text-red-600",children:"过期条目"}),e.jsx("div",{className:"text-lg font-semibold text-red-900",children:a.expiredEntries||0})]}),e.jsxs("div",{className:"bg-purple-50 p-3 rounded-md",children:[e.jsx("div",{className:"text-sm text-purple-600",children:"命中率"}),e.jsxs("div",{className:"text-lg font-semibold text-purple-900",children:[((a.hitRate||0)*100).toFixed(1),"%"]})]}),e.jsxs("div",{className:"bg-gray-50 p-3 rounded-md",children:[e.jsx("div",{className:"text-sm text-gray-600",children:"最大容量"}),e.jsx("div",{className:"text-lg font-semibold text-gray-900",children:a.maxSize||0})]})]})]}),e.jsxs("div",{className:"mt-6",children:[e.jsx("h4",{className:"font-medium text-gray-900 mb-2",children:"请求结果 (最近10条)"}),e.jsx("div",{className:"space-y-2 max-h-64 overflow-y-auto",children:c.length===0?e.jsx("div",{className:"text-gray-500 text-center py-4",children:"暂无请求记录"}):c.map(r=>e.jsxs("div",{className:"p-3 bg-gray-50 rounded-md",children:[e.jsxs("div",{className:"flex justify-between items-start mb-1",children:[e.jsx("span",{className:"text-sm font-medium truncate flex-1 mr-2",children:r.url}),e.jsx("span",{className:"text-xs text-gray-500",children:r.timestamp})]}),r.error?e.jsxs("div",{className:"text-xs text-red-600",children:["错误: ",r.error]}):e.jsxs("div",{className:"text-xs text-gray-600 space-y-1",children:[e.jsxs("div",{children:["节点: ",r.node," | 耗时: ",r.totalTime,"ms"]}),e.jsxs("div",{className:"flex items-center gap-2",children:[e.jsx("span",{className:`px-2 py-1 rounded-full ${r.fromCache?"bg-green-100 text-green-800":"bg-blue-100 text-blue-800"}`,children:r.fromCache?"缓存命中":"边缘请求"}),r.duration&&e.jsxs("span",{className:"text-gray-500",children:["边缘耗时: ",r.duration,"ms"]})]})]})]},r.id))})]})]})})},U=()=>{const n={title:"边缘计算管理器实现",language:"typescript",code:`// 边缘计算管理器
class EdgeComputingManager {
  private nodes: Map<string, EdgeNode> = new Map();
  private cdnConfig: CDNConfig;
  private warmupConfig: WarmupConfig;
  private cache: Map<string, { data: any; timestamp: number; ttl: number }> = new Map();

  constructor(
    cdnConfig: Partial<CDNConfig> = {},
    warmupConfig: Partial<WarmupConfig> = {}
  ) {
    this.cdnConfig = {
      enableEdgeCache: true,
      cacheStrategy: 'lru',
      maxCacheSize: 100,
      ttl: 5 * 60 * 1000,
      compressionEnabled: true,
      prefetchEnabled: true,
      geoRouting: true,
      ...cdnConfig
    };

    this.initializeEdgeNodes();
    this.startHealthCheck();
    if (this.warmupConfig.enabled) {
      this.startWarmup();
    }
  }

  // 选择最优边缘节点
  selectOptimalNode(userLocation?: string): EdgeNode | null {
    const activeNodes = Array.from(this.nodes.values())
      .filter(node => node.status === 'active');

    if (activeNodes.length === 0) return null;

    // 基于延迟和负载的综合评分
    const scoredNodes = activeNodes.map(node => ({
      node,
      score: this.calculateNodeScore(node, userLocation)
    }));

    scoredNodes.sort((a, b) => b.score - a.score);
    return scoredNodes[0].node;
  }

  // 边缘缓存请求
  async edgeRequest(url: string, options: RequestInit = {}): Promise<any> {
    const cacheKey = this.generateCacheKey(url, options);
    
    // 检查缓存
    if (this.cdnConfig.enableEdgeCache) {
      const cached = this.getFromCache(cacheKey);
      if (cached) {
        return { data: cached, fromCache: true, node: 'cache' };
      }
    }

    // 选择最优节点
    const optimalNode = this.selectOptimalNode();
    if (!optimalNode) {
      throw new Error('No active edge nodes available');
    }

    try {
      const startTime = Date.now();
      const edgeUrl = this.buildEdgeUrl(optimalNode.endpoint, url);
      
      const requestOptions = {
        ...options,
        headers: {
          ...options.headers,
          ...(this.cdnConfig.compressionEnabled && {
            'Accept-Encoding': 'gzip, deflate, br'
          })
        }
      };

      const response = await fetch(edgeUrl, requestOptions);
      const data = await response.json();
      const duration = Date.now() - startTime;

      // 更新节点统计和缓存响应
      this.updateNodeStats(optimalNode.id, duration, true);
      if (this.cdnConfig.enableEdgeCache) {
        this.setCache(cacheKey, data, this.cdnConfig.ttl);
      }

      return { data, fromCache: false, node: optimalNode.region, duration };
    } catch (error) {
      this.updateNodeStats(optimalNode.id, 0, false);
      throw error;
    }
  }

  // 请求预热
  async warmupRequests(): Promise<void> {
    if (!this.warmupConfig.enabled || this.warmupConfig.urls.length === 0) {
      return;
    }

    const promises = this.warmupConfig.urls.map(async (url) => {
      try {
        await this.edgeRequest(url);
        return { url, success: true };
      } catch (error) {
        return { url, success: false, error: error.message };
      }
    });

    await Promise.allSettled(promises);
    this.notifyListeners();
  }
}`,highlights:[30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45,46,47,48,49,50,51,52,53,54,55,56,57,58,59,60,61,62,63,64,65,66,67,68,69,70,71,72,73,74,75,76,77,78,79,80,81,82,83,84,85,86,87,88,89,90,91,92,93,94,95,96,97,98,99,100]};return e.jsx(k,{title:"边缘计算优化",description:"实现边缘计算、CDN加速和请求预热等高级优化技术，提升全球用户访问体验。",overview:e.jsxs("div",{className:"space-y-4",children:[e.jsxs("div",{className:"bg-blue-50 p-6 rounded-lg",children:[e.jsx("h3",{className:"text-lg font-semibold text-blue-900 mb-3",children:"🔍 核心概念"}),e.jsxs("ul",{className:"space-y-2 text-blue-800",children:[e.jsxs("li",{children:[e.jsx("strong",{children:"边缘计算:"})," 将计算和存储资源部署到靠近用户的边缘节点"]}),e.jsxs("li",{children:[e.jsx("strong",{children:"CDN加速:"})," 通过内容分发网络加速静态资源访问"]}),e.jsxs("li",{children:[e.jsx("strong",{children:"请求预热:"})," 提前缓存热点数据，减少用户等待时间"]}),e.jsxs("li",{children:[e.jsx("strong",{children:"智能路由:"})," 基于地理位置和网络状况选择最优节点"]})]})]}),e.jsxs("div",{className:"bg-green-50 p-6 rounded-lg",children:[e.jsx("h3",{className:"text-lg font-semibold text-green-900 mb-3",children:"✨ 主要优势"}),e.jsxs("ul",{className:"space-y-2 text-green-800",children:[e.jsxs("li",{children:[e.jsx("strong",{children:"延迟降低:"})," 就近访问边缘节点，显著减少网络延迟"]}),e.jsxs("li",{children:[e.jsx("strong",{children:"带宽优化:"})," 减少回源请求，节省带宽成本"]}),e.jsxs("li",{children:[e.jsx("strong",{children:"可用性提升:"})," 多节点冗余，提高服务可用性"]}),e.jsxs("li",{children:[e.jsx("strong",{children:"用户体验:"})," 全球用户享受一致的高速访问体验"]})]})]}),e.jsxs("div",{className:"bg-yellow-50 p-6 rounded-lg",children:[e.jsx("h3",{className:"text-lg font-semibold text-yellow-900 mb-3",children:"🎯 适用场景"}),e.jsxs("ul",{className:"space-y-2 text-yellow-800",children:[e.jsxs("li",{children:[e.jsx("strong",{children:"全球应用:"})," 面向全球用户的Web应用和API服务"]}),e.jsxs("li",{children:[e.jsx("strong",{children:"静态资源:"})," 图片、视频、CSS、JS等静态文件分发"]}),e.jsxs("li",{children:[e.jsx("strong",{children:"实时数据:"})," 需要低延迟的实时数据访问"]}),e.jsxs("li",{children:[e.jsx("strong",{children:"高并发:"})," 大流量、高并发的应用场景"]})]})]}),e.jsxs("div",{className:"bg-red-50 p-6 rounded-lg",children:[e.jsx("h3",{className:"text-lg font-semibold text-red-900 mb-3",children:"⚠️ 注意事项"}),e.jsxs("ul",{className:"space-y-2 text-red-800",children:[e.jsxs("li",{children:[e.jsx("strong",{children:"数据一致性:"})," 确保边缘缓存与源数据的一致性"]}),e.jsxs("li",{children:[e.jsx("strong",{children:"成本控制:"})," 合理配置缓存策略，控制存储成本"]}),e.jsxs("li",{children:[e.jsx("strong",{children:"安全防护:"})," 边缘节点的安全防护和访问控制"]}),e.jsxs("li",{children:[e.jsx("strong",{children:"监控告警:"})," 完善的节点监控和故障告警机制"]})]})]})]}),examples:[{title:"边缘计算管理演示",component:e.jsx(R,{}),description:"演示边缘计算管理器的功能，包括节点选择、缓存管理、请求预热和性能监控。",observationPoints:["系统会自动选择最优的边缘节点处理请求","缓存命中的请求响应速度明显更快","不同地理位置会影响节点选择策略","预热功能可以提前缓存热点数据","节点健康检查确保服务可用性"],keyPoints:["边缘节点选择基于延迟、负载和地理位置综合评分","支持LRU缓存策略和TTL过期机制","实现了智能的地理路由和负载均衡","提供完整的节点健康检查和故障转移","支持请求预热和缓存预加载功能"],commonTraps:["缓存策略配置不当导致命中率低","节点选择算法过于简单影响性能","缺少健康检查导致请求失败","预热频率过高消耗过多资源"],solutions:["根据业务特点优化缓存TTL和容量配置","实现多维度的节点评分算法","添加完善的健康检查和故障恢复机制","合理设置预热间隔和并发数限制"],codeExample:n}],tutorial:{concepts:["边缘计算将计算资源部署到网络边缘，靠近数据源和用户","CDN通过全球分布的节点缓存内容，加速用户访问","请求预热通过提前加载热点数据减少首次访问延迟","智能路由基于多种因素选择最优的服务节点","缓存策略决定数据的存储时间和淘汰规则"],steps:["初始化边缘节点配置和CDN参数","实现节点健康检查和状态监控","开发智能路由算法选择最优节点","构建缓存管理系统支持多种策略","实现请求预热和缓存预加载","添加性能监控和统计分析","优化故障转移和恢复机制"],tips:["根据用户地理分布合理部署边缘节点","使用多维度评分算法优化节点选择","实现渐进式缓存预热避免突发负载","监控缓存命中率并动态调整策略","设置合理的超时和重试机制","定期清理过期缓存释放存储空间"]},interview:{questions:[{question:"边缘计算与传统云计算有什么区别？",answer:"边缘计算与传统云计算的主要区别：1) 位置：边缘计算在网络边缘，云计算在中心化数据中心；2) 延迟：边缘计算延迟更低，云计算延迟相对较高；3) 带宽：边缘计算减少带宽消耗，云计算需要更多带宽；4) 处理能力：边缘计算处理能力有限，云计算处理能力强大；5) 适用场景：边缘计算适合实时性要求高的场景，云计算适合复杂计算任务。"},{question:"如何设计高效的CDN缓存策略？",answer:"高效CDN缓存策略的设计要点：1) 缓存分层：L1缓存（热点数据）、L2缓存（温数据）、L3缓存（冷数据）；2) TTL设置：根据数据更新频率设置合理的过期时间；3) 缓存预热：提前加载预期的热点内容；4) 智能淘汰：LRU、LFU等算法结合业务特点；5) 压缩优化：启用gzip、brotli等压缩算法；6) 版本控制：通过版本号或ETag管理缓存更新。"},{question:"边缘节点的选择算法应该考虑哪些因素？",answer:"边缘节点选择算法的考虑因素：1) 网络延迟：RTT、丢包率等网络质量指标；2) 地理距离：用户与节点的物理距离；3) 节点负载：CPU、内存、带宽使用率；4) 节点能力：支持的功能和服务类型；5) 历史性能：节点的稳定性和可靠性记录；6) 成本因素：不同节点的使用成本；7) 法规遵循：数据主权和合规要求；8) 动态权重：根据实时状况调整权重。"}],keyPoints:["边缘计算是现代Web应用性能优化的重要技术","CDN缓存策略直接影响用户体验和成本控制","智能路由算法是边缘计算系统的核心","请求预热可以显著提升首次访问性能","节点健康监控确保服务的高可用性","合理的缓存管理策略平衡性能和资源消耗"]},bestPractices:{dos:["根据用户分布和业务需求部署边缘节点","实现多维度的节点选择和负载均衡算法","使用分层缓存策略优化存储效率","添加完善的监控和告警机制","实现渐进式预热避免突发负载","定期进行缓存清理和优化","设置合理的超时和重试策略","考虑数据一致性和安全性要求"],donts:["不要忽视节点的健康检查和故障处理","不要设置过长的缓存TTL影响数据新鲜度","不要在所有场景使用相同的缓存策略","不要忽略边缘节点的安全防护","不要过度预热消耗过多资源","不要缺少缓存命中率的监控","不要忽视不同地区的法规要求","不要在移动网络环境下使用过大的缓存"],patterns:["边缘优先模式：优先使用边缘节点，回源作为备选","分层缓存模式：多级缓存提高命中率","智能路由模式：动态选择最优节点","预热模式：提前加载热点数据","故障转移模式：节点故障时自动切换","压缩传输模式：减少带宽消耗","版本控制模式：管理缓存更新和一致性","监控反馈模式：基于监控数据优化策略"]}})};export{U as default};
