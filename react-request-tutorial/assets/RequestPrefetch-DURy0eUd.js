var C=Object.defineProperty;var M=(a,t,s)=>t in a?C(a,t,{enumerable:!0,configurable:!0,writable:!0,value:s}):a[t]=s;var u=(a,t,s)=>M(a,typeof t!="symbol"?t+"":t,s);import{j as e,r as l}from"./index-Bi_r7QuH.js";import{C as E}from"./ComponentTemplate-C5EWLtXX.js";class S{constructor(){u(this,"items",new Map);u(this,"loadingQueue",new Set);u(this,"observers",new Map);u(this,"hoverTimers",new Map);u(this,"listeners",new Set);u(this,"stats",{total:0,success:0,error:0,cached:0,avgLoadTime:0});this.setupIdleCallback()}async prefetch(t,s="immediate",r={},c){const n=this.generateId(t),d={maxConcurrent:3,timeout:5e3,retryCount:2,retryDelay:1e3,priority:5,cacheTime:5*60*1e3,staleTime:1*60*1e3,enabled:!0,...r},o={id:n,url:t,options:c,config:d,status:"pending",timestamp:Date.now(),retryCount:0};switch(this.items.set(n,o),this.stats.total++,this.notifyListeners(),s){case"immediate":await this.executeImmediate(n);break;case"idle":this.scheduleIdle(n);break}return n}async executeImmediate(t){const s=this.items.get(t);if(!(!s||!s.config.enabled)){if(this.loadingQueue.size>=s.config.maxConcurrent){setTimeout(()=>this.executeImmediate(t),100);return}await this.loadItem(s)}}scheduleIdle(t){"requestIdleCallback"in window?window.requestIdleCallback(()=>{this.executeImmediate(t)}):setTimeout(()=>this.executeImmediate(t),0)}setupHoverPrefetch(t,s,r=200,c){const n=()=>{const o=setTimeout(async()=>{await this.prefetch(s,"manual",c)},r),h=this.generateId(s);this.hoverTimers.set(h,o)},d=()=>{const o=this.generateId(s),h=this.hoverTimers.get(o);h&&(clearTimeout(h),this.hoverTimers.delete(o))};return t.addEventListener("mouseenter",n),t.addEventListener("mouseleave",d),()=>{t.removeEventListener("mouseenter",n),t.removeEventListener("mouseleave",d);const o=this.generateId(s),h=this.hoverTimers.get(o);h&&(clearTimeout(h),this.hoverTimers.delete(o))}}setupVisibilityPrefetch(t,s,r){const c=new IntersectionObserver(d=>{d.forEach(o=>{o.isIntersecting&&this.prefetch(s,"manual",r)})},{threshold:.1});c.observe(t);const n=this.generateId(s);return this.observers.set(n,c),()=>{c.disconnect(),this.observers.delete(n)}}async trigger(t){const s=this.items.get(t);s&&await this.loadItem(s)}getData(t){const s=this.generateId(t),r=this.items.get(s);if(!r)return null;const c=Date.now(),n=c-r.timestamp>r.config.staleTime;return c-r.timestamp>r.config.cacheTime?(this.items.delete(s),null):(n&&r.config.enabled&&this.executeImmediate(s),r.status==="success"&&r.data||null)}isLoading(t){const s=this.generateId(t);return this.loadingQueue.has(s)}getItems(){return Array.from(this.items.values())}clear(t){if(t){const s=this.generateId(t);this.items.delete(s),this.loadingQueue.delete(s)}else this.items.clear(),this.loadingQueue.clear();this.notifyListeners()}clearExpired(){const t=Date.now(),s=[];this.items.forEach((r,c)=>{t-r.timestamp>r.config.cacheTime&&s.push(c)}),s.forEach(r=>{this.items.delete(r),this.loadingQueue.delete(r)}),s.length>0&&this.notifyListeners()}getStats(){const t=Array.from(this.items.values()),s=t.filter(r=>r.loadTime).map(r=>r.loadTime);return{...this.stats,cached:t.filter(r=>r.status==="success").length,avgLoadTime:s.length>0?Math.round(s.reduce((r,c)=>r+c,0)/s.length):0}}resetStats(){this.stats={total:0,success:0,error:0,cached:0,avgLoadTime:0}}addListener(t){this.listeners.add(t)}removeListener(t){this.listeners.delete(t)}destroy(){this.items.clear(),this.loadingQueue.clear(),this.observers.forEach(t=>t.disconnect()),this.observers.clear(),this.hoverTimers.forEach(t=>clearTimeout(t)),this.hoverTimers.clear(),this.listeners.clear()}async loadItem(t){if(this.loadingQueue.has(t.id))return;this.loadingQueue.add(t.id),t.status="loading";const s=Date.now();this.notifyListeners();try{const r=new AbortController,c=setTimeout(()=>r.abort(),t.config.timeout),n=await fetch(t.url,{...t.options,signal:r.signal});if(clearTimeout(c),!n.ok)throw new Error(`HTTP ${n.status}: ${n.statusText}`);const d=await n.json();t.status="success",t.data=d,t.loadTime=Date.now()-s,t.timestamp=Date.now(),this.stats.success++}catch(r){if(t.error=r,t.retryCount<t.config.retryCount){t.retryCount++,setTimeout(()=>{this.loadingQueue.delete(t.id),this.loadItem(t)},t.config.retryDelay*Math.pow(2,t.retryCount));return}t.status="error",this.stats.error++}finally{this.loadingQueue.delete(t.id),this.notifyListeners()}}setupIdleCallback(){if("requestIdleCallback"in window){const t=()=>{this.clearExpired(),window.requestIdleCallback(t,{timeout:5e3})};window.requestIdleCallback(t)}else setInterval(()=>this.clearExpired(),3e4)}generateId(t){return btoa(t).replace(/[^a-zA-Z0-9]/g,"")}notifyListeners(){const t=Array.from(this.items.values());this.listeners.forEach(s=>{try{s(t)}catch(r){console.error("Prefetch listener error:",r)}})}}const f=()=>{const[a]=l.useState(()=>new S),[t,s]=l.useState([]),[r,c]=l.useState(a.getStats()),[n,d]=l.useState("immediate"),[o,h]=l.useState("https://jsonplaceholder.typicode.com/posts/1"),[v,b]=l.useState(!1),p=l.useRef(null),x=l.useRef(null),m=l.useCallback(()=>{c(a.getStats())},[a]);l.useEffect(()=>{const i=I=>{s(I)};a.addListener(i),s(a.getItems());const g=setInterval(m,1e3);return()=>{a.removeListener(i),clearInterval(g)}},[a,m]),l.useEffect(()=>{if(p.current)return a.setupHoverPrefetch(p.current,"https://jsonplaceholder.typicode.com/posts/2",300)},[a]),l.useEffect(()=>{if(x.current)return a.setupVisibilityPrefetch(x.current,"https://jsonplaceholder.typicode.com/posts/3")},[a]);const y=l.useCallback(async()=>{if(o){b(!0);try{await a.prefetch(o,n,{timeout:5e3,retryCount:2,cacheTime:5*60*1e3}),m()}catch(i){alert(`预取失败: ${i instanceof Error?i.message:"未知错误"}`)}finally{b(!1)}}},[a,o,n,m]),j=l.useCallback(i=>{const g=a.getData(i);alert(g?`获取到数据: ${JSON.stringify(g,null,2)}`:"没有可用的预取数据")},[a]),w=l.useCallback(()=>{a.clear(),m()},[a,m]),T=l.useCallback(()=>{a.resetStats(),m()},[a,m]);l.useEffect(()=>()=>a.destroy(),[a]);const P=i=>{switch(i){case"success":return"text-green-600";case"error":return"text-red-600";case"loading":return"text-blue-600";default:return"text-gray-600"}},N=i=>{switch(i){case"success":return"bg-green-100";case"error":return"bg-red-100";case"loading":return"bg-blue-100";default:return"bg-gray-100"}};return e.jsx("div",{className:"space-y-4",children:e.jsxs("div",{className:"bg-white p-6 rounded-lg border",children:[e.jsx("h3",{className:"text-lg font-semibold mb-4",children:"预取策略演示"}),e.jsxs("div",{className:"grid grid-cols-1 lg:grid-cols-2 gap-6",children:[e.jsxs("div",{className:"space-y-4",children:[e.jsxs("div",{children:[e.jsx("h4",{className:"font-medium text-gray-900 mb-2",children:"手动预取"}),e.jsxs("div",{className:"space-y-2",children:[e.jsx("input",{type:"text",value:o,onChange:i=>h(i.target.value),placeholder:"请求URL",className:"w-full p-2 border border-gray-300 rounded-md"}),e.jsxs("select",{value:n,onChange:i=>d(i.target.value),className:"w-full p-2 border border-gray-300 rounded-md",children:[e.jsx("option",{value:"immediate",children:"立即预取"}),e.jsx("option",{value:"idle",children:"空闲预取"}),e.jsx("option",{value:"manual",children:"手动预取"})]}),e.jsx("button",{onClick:y,disabled:v||!o,className:"w-full px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 disabled:bg-gray-400",children:v?"预取中...":"开始预取"})]})]}),e.jsxs("div",{children:[e.jsx("h4",{className:"font-medium text-gray-900 mb-2",children:"悬停预取演示"}),e.jsxs("div",{ref:p,className:"p-4 border-2 border-dashed border-gray-300 rounded-md text-center cursor-pointer hover:border-blue-500 hover:bg-blue-50",children:["悬停此区域300ms后触发预取",e.jsx("br",{}),e.jsx("span",{className:"text-sm text-gray-500",children:"URL: /posts/2"})]})]}),e.jsxs("div",{children:[e.jsx("h4",{className:"font-medium text-gray-900 mb-2",children:"可见性预取演示"}),e.jsxs("div",{className:"h-32 overflow-y-auto border border-gray-300 rounded-md",children:[e.jsx("div",{className:"h-20 bg-gray-100 flex items-center justify-center",children:"滚动到下方触发预取"}),e.jsx("div",{ref:x,className:"h-20 bg-yellow-100 flex items-center justify-center",children:"可见时触发预取 (/posts/3)"}),e.jsx("div",{className:"h-20 bg-gray-100 flex items-center justify-center",children:"底部内容"})]})]}),e.jsxs("div",{className:"flex space-x-2",children:[e.jsx("button",{onClick:w,className:"flex-1 px-4 py-2 bg-red-600 text-white rounded-md hover:bg-red-700",children:"清除所有"}),e.jsx("button",{onClick:T,className:"flex-1 px-4 py-2 bg-gray-600 text-white rounded-md hover:bg-gray-700",children:"重置统计"})]})]}),e.jsxs("div",{className:"space-y-4",children:[e.jsxs("div",{children:[e.jsx("h4",{className:"font-medium text-gray-900 mb-2",children:"预取统计"}),e.jsxs("div",{className:"bg-gray-50 p-4 rounded-md space-y-2",children:[e.jsxs("div",{className:"flex justify-between",children:[e.jsx("span",{className:"text-sm text-gray-600",children:"总数:"}),e.jsx("span",{className:"text-sm font-medium",children:r.total})]}),e.jsxs("div",{className:"flex justify-between",children:[e.jsx("span",{className:"text-sm text-gray-600",children:"成功:"}),e.jsx("span",{className:"text-sm font-medium text-green-600",children:r.success})]}),e.jsxs("div",{className:"flex justify-between",children:[e.jsx("span",{className:"text-sm text-gray-600",children:"失败:"}),e.jsx("span",{className:"text-sm font-medium text-red-600",children:r.error})]}),e.jsxs("div",{className:"flex justify-between",children:[e.jsx("span",{className:"text-sm text-gray-600",children:"已缓存:"}),e.jsx("span",{className:"text-sm font-medium text-blue-600",children:r.cached})]}),e.jsxs("div",{className:"flex justify-between",children:[e.jsx("span",{className:"text-sm text-gray-600",children:"平均加载时间:"}),e.jsxs("span",{className:"text-sm font-medium",children:[r.avgLoadTime,"ms"]})]})]})]}),e.jsxs("div",{children:[e.jsx("h4",{className:"font-medium text-gray-900 mb-2",children:"预取项列表"}),e.jsx("div",{className:"bg-gray-50 p-4 rounded-md max-h-80 overflow-y-auto",children:t.length===0?e.jsx("div",{className:"text-sm text-gray-500 text-center py-4",children:"暂无预取项"}):e.jsx("div",{className:"space-y-2",children:t.map((i,g)=>e.jsxs("div",{className:"p-3 bg-white rounded border",children:[e.jsxs("div",{className:"flex items-center justify-between mb-2",children:[e.jsxs("div",{className:"flex items-center space-x-2",children:[e.jsxs("span",{className:"text-xs bg-blue-100 text-blue-800 px-2 py-1 rounded",children:["#",g+1]}),e.jsx("span",{className:`text-xs px-2 py-1 rounded ${N(i.status)} ${P(i.status)}`,children:i.status})]}),e.jsx("button",{onClick:()=>j(i.url),disabled:i.status!=="success",className:"px-2 py-1 text-xs bg-green-600 text-white rounded hover:bg-green-700 disabled:bg-gray-400",children:"获取数据"})]}),e.jsx("div",{className:"text-sm text-gray-700 mb-1 truncate",children:i.url}),e.jsxs("div",{className:"flex justify-between text-xs text-gray-500",children:[e.jsx("span",{children:i.loadTime?`${i.loadTime}ms`:"-"}),e.jsx("span",{children:i.retryCount>0?`重试: ${i.retryCount}`:""}),e.jsx("span",{children:new Date(i.timestamp).toLocaleTimeString()})]}),i.error&&e.jsx("div",{className:"mt-2 text-xs text-red-600 bg-red-50 p-2 rounded",children:i.error.message})]},i.id))})})]})]})]})]})})},q=()=>{const a={title:"请求预取管理器实现",language:"typescript",code:`// 请求预取管理器
class RequestPrefetchManager {
  private items: Map<string, PrefetchItem> = new Map();
  private loadingQueue: Set<string> = new Set();
  private observers: Map<string, IntersectionObserver> = new Map();

  // 添加预取项
  async prefetch(
    url: string,
    strategy: PrefetchStrategy = 'immediate',
    config: Partial<PrefetchConfig> = {},
    options?: RequestInit
  ): Promise<string> {
    const id = this.generateId(url);
    const fullConfig: PrefetchConfig = {
      maxConcurrent: 3,
      timeout: 5000,
      retryCount: 2,
      retryDelay: 1000,
      priority: 5,
      cacheTime: 5 * 60 * 1000,
      staleTime: 1 * 60 * 1000,
      enabled: true,
      ...config
    };

    const item: PrefetchItem = {
      id, url, options, config: fullConfig,
      status: 'pending', timestamp: Date.now(), retryCount: 0
    };

    this.items.set(id, item);

    // 根据策略执行预取
    switch (strategy) {
      case 'immediate':
        await this.executeImmediate(id);
        break;
      case 'idle':
        this.scheduleIdle(id);
        break;
      case 'hover':
      case 'visible':
      case 'manual':
        // 需要外部触发
        break;
    }

    return id;
  }

  // 设置悬停预取
  setupHoverPrefetch(
    element: HTMLElement,
    url: string,
    delay: number = 200,
    config?: Partial<PrefetchConfig>
  ): () => void {
    const handleMouseEnter = () => {
      const timer = setTimeout(async () => {
        await this.prefetch(url, 'manual', config);
      }, delay);

      const id = this.generateId(url);
      this.hoverTimers.set(id, timer);
    };

    const handleMouseLeave = () => {
      const id = this.generateId(url);
      const timer = this.hoverTimers.get(id);
      if (timer) {
        clearTimeout(timer);
        this.hoverTimers.delete(id);
      }
    };

    element.addEventListener('mouseenter', handleMouseEnter);
    element.addEventListener('mouseleave', handleMouseLeave);

    return () => {
      element.removeEventListener('mouseenter', handleMouseEnter);
      element.removeEventListener('mouseleave', handleMouseLeave);
    };
  }

  // 设置可见性预取
  setupVisibilityPrefetch(
    element: HTMLElement,
    url: string,
    config?: Partial<PrefetchConfig>
  ): () => void {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            this.prefetch(url, 'manual', config);
          }
        });
      },
      { threshold: 0.1 }
    );

    observer.observe(element);
    return () => observer.disconnect();
  }

  // 获取预取数据
  getData(url: string): any {
    const id = this.generateId(url);
    const item = this.items.get(id);

    if (!item) return null;

    const now = Date.now();
    const isStale = now - item.timestamp > item.config.staleTime;
    const isExpired = now - item.timestamp > item.config.cacheTime;

    if (isExpired) {
      this.items.delete(id);
      return null;
    }

    if (isStale && item.config.enabled) {
      // 后台刷新过期数据
      this.executeImmediate(id);
    }

    return item.status === 'success' ? item.data : null;
  }
}`,highlights:[8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45,46,47,48,49,50,51,52,53,54,55,56,57,58,59,60,61,62,63,64,65,66,67,68,69,70,71,72,73,74,75,76,77,78,79,80,81,82,83,84,85,86,87,88,89,90,91,92,93,94,95,96,97,98,99,100,101,102,103,104,105,106,107,108,109,110]};return e.jsx(E,{title:"请求预取",description:"实现智能的请求预取机制，支持多种预取策略和缓存管理，提升用户体验。",overview:e.jsxs("div",{className:"space-y-4",children:[e.jsxs("div",{className:"bg-blue-50 p-6 rounded-lg",children:[e.jsx("h3",{className:"text-lg font-semibold text-blue-900 mb-3",children:"🔍 核心概念"}),e.jsxs("ul",{className:"space-y-2 text-blue-800",children:[e.jsxs("li",{children:[e.jsx("strong",{children:"预取策略:"})," 根据用户行为和场景选择合适的预取时机"]}),e.jsxs("li",{children:[e.jsx("strong",{children:"缓存管理:"})," 智能的数据缓存和过期处理机制"]}),e.jsxs("li",{children:[e.jsx("strong",{children:"并发控制:"})," 限制同时进行的预取请求数量"]}),e.jsxs("li",{children:[e.jsx("strong",{children:"优先级调度:"})," 根据重要性安排预取任务的执行顺序"]})]})]}),e.jsxs("div",{className:"bg-green-50 p-6 rounded-lg",children:[e.jsx("h3",{className:"text-lg font-semibold text-green-900 mb-3",children:"✨ 主要优势"}),e.jsxs("ul",{className:"space-y-2 text-green-800",children:[e.jsxs("li",{children:[e.jsx("strong",{children:"性能提升:"})," 提前加载数据，减少用户等待时间"]}),e.jsxs("li",{children:[e.jsx("strong",{children:"用户体验:"})," 页面切换更流畅，交互响应更快"]}),e.jsxs("li",{children:[e.jsx("strong",{children:"带宽优化:"})," 智能预测用户需求，避免无效请求"]}),e.jsxs("li",{children:[e.jsx("strong",{children:"缓存利用:"})," 有效利用浏览器缓存，减少重复请求"]})]})]}),e.jsxs("div",{className:"bg-yellow-50 p-6 rounded-lg",children:[e.jsx("h3",{className:"text-lg font-semibold text-yellow-900 mb-3",children:"🎯 适用场景"}),e.jsxs("ul",{className:"space-y-2 text-yellow-800",children:[e.jsxs("li",{children:[e.jsx("strong",{children:"单页应用:"})," 路由切换前预加载页面数据"]}),e.jsxs("li",{children:[e.jsx("strong",{children:"列表页面:"})," 悬停时预加载详情页数据"]}),e.jsxs("li",{children:[e.jsx("strong",{children:"分页内容:"})," 预加载下一页或相邻页面"]}),e.jsxs("li",{children:[e.jsx("strong",{children:"媒体资源:"})," 预加载图片、视频等媒体文件"]})]})]}),e.jsxs("div",{className:"bg-red-50 p-6 rounded-lg",children:[e.jsx("h3",{className:"text-lg font-semibold text-red-900 mb-3",children:"⚠️ 注意事项"}),e.jsxs("ul",{className:"space-y-2 text-red-800",children:[e.jsxs("li",{children:[e.jsx("strong",{children:"带宽消耗:"})," 避免过度预取造成不必要的流量消耗"]}),e.jsxs("li",{children:[e.jsx("strong",{children:"内存管理:"})," 及时清理过期缓存，防止内存泄漏"]}),e.jsxs("li",{children:[e.jsx("strong",{children:"用户偏好:"})," 考虑用户的网络环境和数据套餐"]}),e.jsxs("li",{children:[e.jsx("strong",{children:"服务器压力:"})," 控制预取频率，避免给服务器造成压力"]})]})]})]}),examples:[{title:"预取策略演示",component:e.jsx(f,{}),description:"演示不同的预取策略，包括立即预取、空闲预取、悬停预取和可见性预取。",observationPoints:["立即预取会在调用后立即开始加载","空闲预取利用浏览器空闲时间执行","悬停预取在鼠标悬停一定时间后触发","可见性预取在元素进入视口时触发","预取的数据会被缓存，可以直接获取使用"],keyPoints:["不同策略适用于不同的使用场景","预取管理器会自动处理并发控制","缓存数据有过期时间和刷新机制","支持重试机制处理网络错误","提供详细的统计信息和状态监控"],commonTraps:["过度预取导致带宽浪费","没有设置合理的缓存过期时间","忽略并发请求的数量限制","预取失败后没有重试机制"],solutions:["根据用户行为模式选择预取策略","设置合理的缓存时间和刷新策略","限制同时进行的预取请求数量","实现指数退避的重试机制"],codeExample:a},{title:"智能预取策略演示",component:e.jsx(f,{}),description:"展示基于用户行为、时间模式和热门内容的智能预取策略",observationPoints:["观察不同策略的预取准确率","注意时间段对预取内容的影响","查看用户行为预测的效果","观察预取对整体性能的提升"],keyPoints:["用户行为预测可以提高预取准确率","时间段预取适应用户的使用习惯","热门内容预取提升整体用户体验","多策略组合可以获得最佳效果"],commonTraps:["智能预取需要收集足够的用户行为数据","预取策略需要根据应用特性进行调整","要平衡预取准确率和资源消耗","定期评估和优化预取策略的效果"],solutions:["建立完善的用户行为数据收集机制","实现可配置的预取策略参数","添加预取效果监控和评估系统","提供预取策略的A/B测试功能"],codeExample:{title:"智能预取策略实现",language:"typescript",code:`// 智能预取策略管理器
class SmartPrefetchManager {
  private behaviorTracker: Map<string, UserBehavior> = new Map();
  private timePatterns: Map<string, TimePattern> = new Map();
  private popularContent: Map<string, PopularityScore> = new Map();
  private prefetchManager: RequestPrefetchManager;

  constructor() {
    this.prefetchManager = new RequestPrefetchManager();
    this.initializePatterns();
  }

  // 基于用户行为预测预取
  predictivePrefetch(userId: string, currentPage: string): void {
    const behavior = this.behaviorTracker.get(userId);
    if (!behavior) return;

    // 分析用户历史行为
    const predictions = this.analyzeBehaviorPatterns(behavior, currentPage);
    
    predictions.forEach(prediction => {
      if (prediction.confidence > 0.7) {
        this.prefetchManager.prefetch(
          prediction.url,
          'idle',
          { priority: this.calculatePriority(prediction) }
        );
      }
    });
  }

  // 时间段预取策略
  timeBasedPrefetch(timeSlot: string): void {
    const pattern = this.timePatterns.get(timeSlot);
    if (!pattern) return;

    pattern.popularUrls.forEach(url => {
      this.prefetchManager.prefetch(
        url,
        'idle',
        { 
          priority: pattern.priority,
          cacheTime: pattern.cacheTime 
        }
      );
    });
  }

  // 热门内容预取
  popularContentPrefetch(): void {
    const sortedContent = Array.from(this.popularContent.entries())
      .sort(([,a], [,b]) => b.score - a.score)
      .slice(0, 10);

    sortedContent.forEach(([url, score]) => {
      if (score.score > 0.8) {
        this.prefetchManager.prefetch(
          url,
          'immediate',
          { priority: 10, cacheTime: 30 * 60 * 1000 }
        );
      }
    });
  }

  // 分析行为模式
  private analyzeBehaviorPatterns(
    behavior: UserBehavior, 
    currentPage: string
  ): Prediction[] {
    const predictions: Prediction[] = [];
    
    // 基于页面转换历史
    const transitions = behavior.pageTransitions[currentPage] || [];
    transitions.forEach(transition => {
      predictions.push({
        url: transition.targetPage,
        confidence: transition.probability,
        reason: 'page_transition'
      });
    });

    // 基于时间模式
    const currentHour = new Date().getHours();
    const timePattern = behavior.timePatterns[currentHour];
    if (timePattern) {
      timePattern.commonPages.forEach(page => {
        predictions.push({
          url: page,
          confidence: timePattern.confidence,
          reason: 'time_pattern'
        });
      });
    }

    return predictions;
  }
}`,highlights:[14,20,26,35,41,50,56,65,71,85]}},{title:"预取性能对比演示",component:e.jsx(f,{}),description:"对比启用和未启用预取时的性能差异，展示预取的实际效果",observationPoints:["比较启用和未启用预取的响应时间","观察预取对总体性能的影响","注意预取的性能提升幅度","查看不同场景下的性能表现"],keyPoints:["预取可以显著减少响应时间","性能提升效果与预取准确率相关","预取在高延迟网络环境下效果更明显","合理的预取策略能平衡性能和资源消耗"],commonTraps:["过度预取导致带宽和内存浪费","预取时机不当影响用户体验","没有考虑网络状况的变化","缺乏预取效果的监控和评估"],solutions:["实现自适应的预取策略","添加网络状况监控","提供预取效果的实时统计","支持用户自定义预取设置"],codeExample:{title:"预取性能监控实现",language:"typescript",code:`// 预取性能监控器
class PrefetchPerformanceMonitor {
  private metrics: Map<string, PerformanceMetric> = new Map();
  private baseline: Map<string, number> = new Map();
  private observers: PerformanceObserver[] = [];

  constructor() {
    this.initializeObservers();
  }

  // 记录预取性能
  recordPrefetchMetric(url: string, startTime: number, endTime: number, hit: boolean): void {
    const metric = this.metrics.get(url) || {
      totalRequests: 0,
      cacheHits: 0,
      averageLoadTime: 0,
      prefetchSavings: 0,
      lastUpdated: Date.now()
    };

    metric.totalRequests++;
    if (hit) {
      metric.cacheHits++;
      const savings = this.baseline.get(url) || 0;
      metric.prefetchSavings += savings;
    }

    const loadTime = endTime - startTime;
    metric.averageLoadTime = (
      (metric.averageLoadTime * (metric.totalRequests - 1)) + loadTime
    ) / metric.totalRequests;

    this.metrics.set(url, metric);
  }

  // 计算性能提升
  calculatePerformanceGain(): PerformanceReport {
    let totalSavings = 0;
    let totalRequests = 0;
    let cacheHitRate = 0;

    this.metrics.forEach(metric => {
      totalSavings += metric.prefetchSavings;
      totalRequests += metric.totalRequests;
      cacheHitRate += metric.cacheHits;
    });

    return {
      averageTimeSaved: totalRequests > 0 ? totalSavings / totalRequests : 0,
      cacheHitRate: totalRequests > 0 ? cacheHitRate / totalRequests : 0,
      totalRequests,
      performanceImprovement: this.calculateImprovement()
    };
  }

  // 生成性能报告
  generateReport(): DetailedReport {
    const report = this.calculatePerformanceGain();
    const urlMetrics = Array.from(this.metrics.entries())
      .map(([url, metric]) => ({
        url,
        ...metric,
        hitRate: metric.cacheHits / metric.totalRequests,
        efficiency: metric.prefetchSavings / metric.totalRequests
      }))
      .sort((a, b) => b.efficiency - a.efficiency);

    return {
      ...report,
      urlBreakdown: urlMetrics,
      recommendations: this.generateRecommendations(urlMetrics)
    };
  }

  // 实时性能监控
  startRealTimeMonitoring(callback: (metrics: RealTimeMetrics) => void): void {
    const interval = setInterval(() => {
      const currentMetrics = this.calculateCurrentMetrics();
      callback(currentMetrics);
    }, 1000);

    // 清理函数
    return () => clearInterval(interval);
  }
}`,highlights:[12,22,33,40,48,55,65,72]}}],tutorial:{concepts:["预取是一种性能优化技术，通过提前加载可能需要的资源来提升用户体验","预取策略需要平衡性能提升和资源消耗","缓存管理是预取系统的重要组成部分","并发控制防止过多请求影响性能","智能预测用户行为是预取成功的关键"],steps:["分析用户行为模式，确定预取需求","设计预取项的数据结构","实现不同的预取策略","添加缓存管理和过期机制","实现并发控制和优先级调度","添加重试机制和错误处理","集成网络状态监控","实现统计和监控功能","优化性能和用户体验"],tips:["使用Intersection Observer API实现可见性预取","利用requestIdleCallback在空闲时执行预取","考虑用户的网络环境调整预取策略","使用Service Worker实现更强大的预取功能","监控预取的命中率和效果","提供用户控制预取行为的选项"]},interview:{questions:[{question:"什么是请求预取？有哪些常见的预取策略？",answer:"请求预取是指在用户实际需要数据之前提前加载资源的技术。常见策略包括：1) 立即预取：调用后立即执行；2) 空闲预取：利用浏览器空闲时间；3) 悬停预取：鼠标悬停时触发；4) 可见性预取：元素进入视口时触发；5) 路径预取：根据用户导航路径预测；6) 智能预取：基于机器学习预测用户行为。"},{question:"如何实现智能的预取缓存管理？",answer:"智能缓存管理的关键要素：1) 过期策略：设置TTL和stale-while-revalidate；2) 存储限制：LRU/LFU等淘汰算法；3) 优先级：根据重要性和使用频率排序；4) 预测算法：分析用户行为模式；5) 网络感知：根据网络状况调整策略；6) 统计监控：跟踪命中率和性能指标；7) 自适应：根据效果动态调整参数。"},{question:"预取技术可能带来哪些问题？如何解决？",answer:"主要问题和解决方案：1) 带宽浪费：通过用户行为分析和智能预测减少无效预取；2) 服务器压力：实现并发控制和频率限制；3) 内存占用：及时清理过期缓存，设置存储上限；4) 用户体验：在低网速时禁用预取，提供用户控制选项；5) 数据一致性：实现缓存失效和更新机制；6) 隐私问题：避免预取敏感或个人数据。"},{question:"如何评估预取策略的效果？",answer:"效果评估指标：1) 命中率：预取数据被实际使用的比例；2) 响应时间：用户请求的平均响应时间减少；3) 带宽利用率：预取流量与总流量的比例；4) 用户体验指标：页面加载时间、交互响应时间；5) 缓存效率：缓存命中率和存储利用率；6) 成本效益：性能提升与资源消耗的比值；7) A/B测试：对比启用和禁用预取的效果差异。"}],keyPoints:["预取是重要的性能优化技术，需要平衡效果和成本","选择合适的预取策略需要分析具体的使用场景","缓存管理是预取系统成功的关键因素","并发控制和优先级调度确保系统稳定性","用户行为分析是智能预取的基础","持续监控和优化预取策略的效果"]},bestPractices:{dos:["根据用户行为模式选择合适的预取策略","实现智能的缓存管理和过期机制","设置合理的并发限制和优先级","监控预取效果并持续优化","考虑用户的网络环境和设备性能","提供用户控制预取行为的选项","实现渐进式的预取功能","使用现代浏览器API提升预取效果"],donts:["不要过度预取造成带宽浪费","不要忽略预取失败的处理","不要在移动网络下激进预取","不要预取敏感或个人数据","不要忽略缓存的内存占用","不要设置过长的缓存时间","不要忽略服务器的承载能力","不要在所有场景下都启用预取"],patterns:["预测性预取：基于用户行为预测需要的资源","渐进式预取：从重要到次要逐步预取","自适应预取：根据网络和设备条件调整","批量预取：将相关资源打包预取","延迟预取：在合适的时机延迟执行","条件预取：满足特定条件时才执行","优先级预取：按重要性排序执行","缓存预热：应用启动时预加载核心数据"]}})};export{q as default};
