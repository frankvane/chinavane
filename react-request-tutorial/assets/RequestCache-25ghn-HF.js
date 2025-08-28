var U=Object.defineProperty;var I=(i,s,t)=>s in i?U(i,s,{enumerable:!0,configurable:!0,writable:!0,value:t}):i[s]=t;var N=(i,s,t)=>I(i,typeof s!="symbol"?s+"":s,t);import{j as e,r}from"./index-Bi_r7QuH.js";import{C as M}from"./ComponentTemplate-C5EWLtXX.js";class k{constructor(s={}){N(this,"cache");N(this,"config");N(this,"stats");N(this,"cleanupTimer");N(this,"accessOrder");N(this,"frequencyMap");N(this,"insertOrder");this.cache=new Map,this.config={maxSize:100,maxMemory:10*1024*1024,defaultTTL:5*60*1e3,cleanupInterval:60*1e3,strategy:"LRU",...s},this.stats={hits:0,misses:0,size:0,memoryUsage:0,hitRate:0},this.accessOrder=[],this.frequencyMap=new Map,this.insertOrder=[],this.startCleanup()}set(s,t,n,h){const m=Date.now(),f=this.calculateSize(t);this.evictIfNeeded(f);const x={key:s,value:t,timestamp:m,ttl:n||this.config.defaultTTL,accessCount:0,lastAccessed:m,tags:h,size:f};this.cache.has(s)&&this.delete(s),this.cache.set(s,x),this.updateAccessStructures(s,"set"),this.updateStats()}get(s){const t=this.cache.get(s);return t?this.isExpired(t)?(this.delete(s),this.stats.misses++,this.updateHitRate(),null):(t.accessCount++,t.lastAccessed=Date.now(),this.updateAccessStructures(s,"get"),this.stats.hits++,this.updateHitRate(),t.value):(this.stats.misses++,this.updateHitRate(),null)}delete(s){return this.cache.get(s)?(this.cache.delete(s),this.removeFromAccessStructures(s),this.updateStats(),!0):!1}clear(){this.cache.clear(),this.accessOrder=[],this.frequencyMap.clear(),this.insertOrder=[],this.updateStats()}deleteByTag(s){let t=0;for(const[n,h]of this.cache.entries())h.tags&&h.tags.includes(s)&&(this.delete(n),t++);return t}has(s){const t=this.cache.get(s);return t?this.isExpired(t)?(this.delete(s),!1):!0:!1}keys(){const s=[];for(const[t,n]of this.cache.entries())this.isExpired(n)||s.push(t);return s}getStats(){return{...this.stats}}getItemInfo(s){const t=this.cache.get(s);return!t||this.isExpired(t)?null:{...t}}updateConfig(s){if(this.config={...this.config,...s},s.strategy){this.accessOrder=[],this.frequencyMap.clear(),this.insertOrder=[];for(const t of this.cache.keys())this.updateAccessStructures(t,"set")}}cleanup(){let s=0;for(const[t,n]of this.cache.entries())this.isExpired(n)&&(this.delete(t),s++);return s}destroy(){this.cleanupTimer&&clearInterval(this.cleanupTimer),this.clear()}isExpired(s){return s.ttl?Date.now()-s.timestamp>s.ttl:!1}calculateSize(s){try{return JSON.stringify(s).length*2}catch{return 1e3}}updateAccessStructures(s,t){switch(this.config.strategy){case"LRU":const n=this.accessOrder.indexOf(s);n>-1&&this.accessOrder.splice(n,1),this.accessOrder.push(s);break;case"LFU":if(t==="get"){const h=this.frequencyMap.get(s)||0;this.frequencyMap.set(s,h+1)}else this.frequencyMap.set(s,0);break;case"FIFO":t==="set"&&!this.insertOrder.includes(s)&&this.insertOrder.push(s);break}}removeFromAccessStructures(s){const t=this.accessOrder.indexOf(s);t>-1&&this.accessOrder.splice(t,1),this.frequencyMap.delete(s);const n=this.insertOrder.indexOf(s);n>-1&&this.insertOrder.splice(n,1)}evictIfNeeded(s){for(;this.cache.size>=this.config.maxSize;)this.evictOne();for(;this.stats.memoryUsage+s>this.config.maxMemory&&this.evictOne(););}evictOne(){let s=null;switch(this.config.strategy){case"LRU":s=this.accessOrder[0]||null;break;case"LFU":let t=1/0;for(const[n,h]of this.frequencyMap.entries())h<t&&(t=h,s=n);break;case"FIFO":s=this.insertOrder[0]||null;break}return s&&this.cache.has(s)?(this.delete(s),!0):!1}updateStats(){this.stats.size=this.cache.size;let s=0;for(const t of this.cache.values())s+=t.size||0;this.stats.memoryUsage=s,this.updateHitRate()}updateHitRate(){const s=this.stats.hits+this.stats.misses;this.stats.hitRate=s>0?this.stats.hits/s*100:0}startCleanup(){this.cleanupTimer=setInterval(()=>{this.cleanup()},this.config.cleanupInterval)}}const E=()=>{const[i]=r.useState(()=>new k({maxSize:10,defaultTTL:1e4,strategy:"LRU"})),[s,t]=r.useState(""),[n,h]=r.useState(""),[m,f]=r.useState("10000"),[x,p]=r.useState(""),[C,y]=r.useState(null),[d,b]=r.useState(i.getStats()),[g,T]=r.useState([]),o=r.useCallback(()=>{b(i.getStats()),T(i.keys())},[i]),a=r.useCallback(()=>{if(!(!s||!n)){try{const c=JSON.parse(n);i.set(s,c,parseInt(m)||void 0)}catch{i.set(s,n,parseInt(m)||void 0)}o(),t(""),h("")}},[i,s,n,m,o]),u=r.useCallback(()=>{if(!x)return;const c=i.get(x);y(c),o()},[i,x,o]),j=r.useCallback(c=>{i.delete(c),o()},[i,o]),w=r.useCallback(()=>{i.clear(),o(),y(null)},[i,o]),l=r.useCallback(()=>{const c=i.cleanup();alert(`清理了 ${c} 个过期项`),o()},[i,o]);return r.useEffect(()=>{const c=setInterval(o,1e3);return()=>clearInterval(c)},[o]),r.useEffect(()=>()=>i.destroy(),[i]),e.jsx("div",{className:"space-y-4",children:e.jsxs("div",{className:"bg-white p-6 rounded-lg border",children:[e.jsx("h3",{className:"text-lg font-semibold mb-4",children:"基础缓存操作"}),e.jsxs("div",{className:"grid grid-cols-1 lg:grid-cols-2 gap-6",children:[e.jsxs("div",{className:"space-y-4",children:[e.jsxs("div",{children:[e.jsx("h4",{className:"font-medium text-gray-900 mb-2",children:"设置缓存"}),e.jsxs("div",{className:"space-y-2",children:[e.jsx("input",{type:"text",value:s,onChange:c=>t(c.target.value),placeholder:"缓存键",className:"w-full p-2 border border-gray-300 rounded-md"}),e.jsx("textarea",{value:n,onChange:c=>h(c.target.value),placeholder:"缓存值（支持JSON格式）",className:"w-full p-2 border border-gray-300 rounded-md h-20"}),e.jsx("input",{type:"number",value:m,onChange:c=>f(c.target.value),placeholder:"TTL（毫秒）",className:"w-full p-2 border border-gray-300 rounded-md"}),e.jsx("button",{onClick:a,disabled:!s||!n,className:"w-full px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 disabled:bg-gray-400",children:"设置缓存"})]})]}),e.jsxs("div",{children:[e.jsx("h4",{className:"font-medium text-gray-900 mb-2",children:"获取缓存"}),e.jsxs("div",{className:"space-y-2",children:[e.jsx("input",{type:"text",value:x,onChange:c=>p(c.target.value),placeholder:"要获取的缓存键",className:"w-full p-2 border border-gray-300 rounded-md"}),e.jsx("button",{onClick:u,disabled:!x,className:"w-full px-4 py-2 bg-green-600 text-white rounded-md hover:bg-green-700 disabled:bg-gray-400",children:"获取缓存"}),C!==null&&e.jsxs("div",{className:"p-3 bg-gray-100 rounded-md",children:[e.jsx("div",{className:"text-sm font-medium text-gray-700 mb-1",children:"获取结果:"}),e.jsx("pre",{className:"text-sm text-gray-900 whitespace-pre-wrap",children:JSON.stringify(C,null,2)})]})]})]})]}),e.jsxs("div",{className:"space-y-4",children:[e.jsxs("div",{children:[e.jsxs("div",{className:"flex justify-between items-center mb-2",children:[e.jsx("h4",{className:"font-medium text-gray-900",children:"缓存统计"}),e.jsxs("div",{className:"flex space-x-2",children:[e.jsx("button",{onClick:l,className:"px-3 py-1 text-sm bg-yellow-600 text-white rounded hover:bg-yellow-700",children:"清理过期"}),e.jsx("button",{onClick:w,className:"px-3 py-1 text-sm bg-red-600 text-white rounded hover:bg-red-700",children:"清空缓存"})]})]}),e.jsxs("div",{className:"bg-gray-50 p-4 rounded-md space-y-2",children:[e.jsxs("div",{className:"flex justify-between",children:[e.jsx("span",{className:"text-sm text-gray-600",children:"缓存项数量:"}),e.jsx("span",{className:"text-sm font-medium",children:d.size})]}),e.jsxs("div",{className:"flex justify-between",children:[e.jsx("span",{className:"text-sm text-gray-600",children:"内存使用:"}),e.jsxs("span",{className:"text-sm font-medium",children:[(d.memoryUsage/1024).toFixed(2)," KB"]})]}),e.jsxs("div",{className:"flex justify-between",children:[e.jsx("span",{className:"text-sm text-gray-600",children:"命中次数:"}),e.jsx("span",{className:"text-sm font-medium",children:d.hits})]}),e.jsxs("div",{className:"flex justify-between",children:[e.jsx("span",{className:"text-sm text-gray-600",children:"未命中次数:"}),e.jsx("span",{className:"text-sm font-medium",children:d.misses})]}),e.jsxs("div",{className:"flex justify-between",children:[e.jsx("span",{className:"text-sm text-gray-600",children:"命中率:"}),e.jsxs("span",{className:"text-sm font-medium",children:[d.hitRate.toFixed(2),"%"]})]})]})]}),e.jsxs("div",{children:[e.jsx("h4",{className:"font-medium text-gray-900 mb-2",children:"缓存项列表"}),e.jsx("div",{className:"bg-gray-50 p-4 rounded-md max-h-64 overflow-y-auto",children:g.length===0?e.jsx("div",{className:"text-sm text-gray-500 text-center py-4",children:"暂无缓存项"}):e.jsx("div",{className:"space-y-2",children:g.map(c=>{const v=i.getItemInfo(c);return e.jsxs("div",{className:"flex items-center justify-between p-2 bg-white rounded border",children:[e.jsxs("div",{className:"flex-1",children:[e.jsx("div",{className:"text-sm font-medium text-gray-900",children:c}),v&&e.jsxs("div",{className:"text-xs text-gray-500",children:["访问次数: ",v.accessCount," | 剩余时间: ",v.ttl?Math.max(0,Math.ceil((v.ttl-(Date.now()-v.timestamp))/1e3)):"∞","s"]})]}),e.jsx("button",{onClick:()=>j(c),className:"px-2 py-1 text-xs bg-red-600 text-white rounded hover:bg-red-700",children:"删除"})]},c)})})})]})]})]})]})})},z=()=>{const[i,s]=r.useState("LRU"),[t,n]=r.useState(()=>new k({maxSize:5,strategy:"LRU"})),[h,m]=r.useState([]),[f,x]=r.useState([]),p=r.useCallback(()=>{x(t.keys())},[t]),C=r.useCallback(a=>{t.destroy();const u=new k({maxSize:5,strategy:a});n(u),s(a),m([]),x([])},[t]),y=r.useCallback((a,u,j)=>{m(w=>[...w,{type:a,key:u,value:j,timestamp:Date.now()}])},[]),d=r.useCallback((a,u)=>{t.set(a,u),y("SET",a,u),p()},[t,y,p]),b=r.useCallback(a=>{const u=t.get(a);y("GET",a,u),p()},[t,y,p]),g=r.useCallback(()=>{t.clear(),m([]),p()},[t,p]),T=r.useCallback(()=>{g(),setTimeout(()=>{[()=>d("A","Value A"),()=>d("B","Value B"),()=>d("C","Value C"),()=>d("D","Value D"),()=>d("E","Value E"),()=>b("A"),()=>b("B"),()=>d("F","Value F"),()=>b("C"),()=>d("G","Value G")].forEach((u,j)=>{setTimeout(u,j*1e3)})},100)},[g,d,b]);r.useEffect(()=>()=>t.destroy(),[t]);const o=a=>{switch(a){case"LRU":return"Least Recently Used - 淘汰最近最少使用的项";case"LFU":return"Least Frequently Used - 淘汰使用频率最低的项";case"FIFO":return"First In First Out - 淘汰最先进入的项";default:return""}};return e.jsx("div",{className:"space-y-4",children:e.jsxs("div",{className:"bg-white p-6 rounded-lg border",children:[e.jsx("h3",{className:"text-lg font-semibold mb-4",children:"缓存淘汰策略演示"}),e.jsxs("div",{className:"grid grid-cols-1 lg:grid-cols-2 gap-6",children:[e.jsxs("div",{className:"space-y-4",children:[e.jsxs("div",{children:[e.jsx("label",{className:"block text-sm font-medium text-gray-700 mb-2",children:"选择淘汰策略"}),e.jsx("div",{className:"space-y-2",children:["LRU","LFU","FIFO"].map(a=>e.jsxs("label",{className:"flex items-center",children:[e.jsx("input",{type:"radio",name:"strategy",value:a,checked:i===a,onChange:()=>C(a),className:"mr-2"}),e.jsxs("span",{className:"text-sm",children:[e.jsx("strong",{children:a})," - ",o(a)]})]},a))})]}),e.jsxs("div",{className:"p-4 bg-blue-50 rounded-lg",children:[e.jsxs("h4",{className:"font-medium text-blue-900 mb-2",children:["当前策略: ",i]}),e.jsx("p",{className:"text-sm text-blue-800",children:o(i)}),e.jsx("p",{className:"text-sm text-blue-700 mt-2",children:"缓存容量限制: 5个项目"})]}),e.jsxs("div",{className:"space-y-2",children:[e.jsx("button",{onClick:T,className:"w-full px-4 py-2 bg-green-600 text-white rounded-md hover:bg-green-700",children:"运行演示"}),e.jsx("button",{onClick:g,className:"w-full px-4 py-2 bg-gray-600 text-white rounded-md hover:bg-gray-700",children:"重置"})]}),e.jsxs("div",{children:[e.jsx("h4",{className:"font-medium text-gray-900 mb-2",children:"手动操作"}),e.jsx("div",{className:"flex space-x-2 mb-2",children:["A","B","C","D","E","F","G"].map(a=>e.jsxs("button",{onClick:()=>d(a,`Value ${a}`),className:"px-3 py-1 text-sm bg-blue-600 text-white rounded hover:bg-blue-700",children:["SET ",a]},a))}),e.jsx("div",{className:"flex space-x-2",children:["A","B","C","D","E","F","G"].map(a=>e.jsxs("button",{onClick:()=>b(a),className:"px-3 py-1 text-sm bg-green-600 text-white rounded hover:bg-green-700",children:["GET ",a]},a))})]})]}),e.jsxs("div",{className:"space-y-4",children:[e.jsxs("div",{children:[e.jsx("h4",{className:"font-medium text-gray-900 mb-2",children:"当前缓存状态"}),e.jsx("div",{className:"bg-gray-50 p-4 rounded-md",children:f.length===0?e.jsx("div",{className:"text-sm text-gray-500 text-center py-4",children:"缓存为空"}):e.jsx("div",{className:"space-y-2",children:f.map((a,u)=>{const j=t.getItemInfo(a);return e.jsxs("div",{className:"flex items-center justify-between p-2 bg-white rounded border",children:[e.jsxs("div",{className:"flex items-center space-x-2",children:[e.jsxs("span",{className:"text-xs bg-blue-100 text-blue-800 px-2 py-1 rounded",children:["#",u+1]}),e.jsx("span",{className:"font-medium",children:a})]}),j&&e.jsxs("div",{className:"text-xs text-gray-500",children:["访问: ",j.accessCount,"次"]})]},a)})})})]}),e.jsxs("div",{children:[e.jsx("h4",{className:"font-medium text-gray-900 mb-2",children:"操作历史"}),e.jsx("div",{className:"bg-gray-50 p-4 rounded-md max-h-64 overflow-y-auto",children:h.length===0?e.jsx("div",{className:"text-sm text-gray-500 text-center py-4",children:"暂无操作"}):e.jsx("div",{className:"space-y-1",children:h.slice(-10).map((a,u)=>e.jsxs("div",{className:"text-sm",children:[e.jsx("span",{className:`inline-block w-12 text-xs font-medium ${a.type==="SET"?"text-blue-600":"text-green-600"}`,children:a.type}),e.jsxs("span",{className:"text-gray-700",children:[a.key,a.type==="GET"&&a.value===null&&" (未命中)",a.type==="GET"&&a.value!==null&&" (命中)"]})]},u))})})]})]})]})]})})},H=()=>{const[i]=r.useState(()=>new k({maxSize:20,defaultTTL:3e4,strategy:"LRU"})),[s,t]=r.useState("https://jsonplaceholder.typicode.com/posts/1"),[n,h]=r.useState(!1),[m,f]=r.useState(null),[x,p]=r.useState(!1),[C,y]=r.useState([]),[d,b]=r.useState(i.getStats()),g=r.useCallback(()=>{b(i.getStats())},[i]),T=r.useCallback((l,c)=>`http_${l}_${JSON.stringify(c||{})}`,[]),o=r.useCallback(async(l,c)=>{const v=Date.now(),F=T(l,c),q=i.get(F);if(q){const S=Date.now()-v;return y(L=>[...L,{url:l,fromCache:!0,timestamp:Date.now(),duration:S}]),g(),{data:q,fromCache:!0}}try{const L=await(await fetch(l,c)).json();i.set(F,L,void 0,["http","api"]);const O=Date.now()-v;return y(R=>[...R,{url:l,fromCache:!1,timestamp:Date.now(),duration:O}]),g(),{data:L,fromCache:!1}}catch(S){throw S}},[i,T,g]),a=r.useCallback(async()=>{if(s){h(!0),f(null),p(!1);try{const l=await o(s);f(l.data),p(l.fromCache)}catch(l){f({error:l instanceof Error?l.message:"请求失败"}),p(!1)}finally{h(!1)}}},[s,o]),u=r.useCallback(()=>{i.deleteByTag("http"),g()},[i,g]),j=r.useCallback(()=>{y([])},[]),w=["https://jsonplaceholder.typicode.com/posts/1","https://jsonplaceholder.typicode.com/posts/2","https://jsonplaceholder.typicode.com/users/1","https://jsonplaceholder.typicode.com/users/2","https://jsonplaceholder.typicode.com/comments?postId=1"];return r.useEffect(()=>()=>i.destroy(),[i]),e.jsx("div",{className:"space-y-4",children:e.jsxs("div",{className:"bg-white p-6 rounded-lg border",children:[e.jsx("h3",{className:"text-lg font-semibold mb-4",children:"HTTP 请求缓存"}),e.jsxs("div",{className:"grid grid-cols-1 lg:grid-cols-2 gap-6",children:[e.jsxs("div",{className:"space-y-4",children:[e.jsxs("div",{children:[e.jsx("label",{className:"block text-sm font-medium text-gray-700 mb-2",children:"请求URL"}),e.jsx("input",{type:"text",value:s,onChange:l=>t(l.target.value),className:"w-full p-2 border border-gray-300 rounded-md",placeholder:"输入API URL"})]}),e.jsxs("div",{children:[e.jsx("label",{className:"block text-sm font-medium text-gray-700 mb-2",children:"预设URL"}),e.jsx("div",{className:"space-y-1",children:w.map((l,c)=>e.jsx("button",{onClick:()=>t(l),className:"block w-full text-left px-3 py-2 text-sm bg-gray-100 hover:bg-gray-200 rounded border",children:l},c))})]}),e.jsxs("div",{className:"flex space-x-2",children:[e.jsx("button",{onClick:a,disabled:n||!s,className:"flex-1 px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 disabled:bg-gray-400",children:n?"请求中...":"发起请求"}),e.jsx("button",{onClick:u,className:"px-4 py-2 bg-red-600 text-white rounded-md hover:bg-red-700",children:"清空缓存"})]}),m&&e.jsxs("div",{className:"space-y-2",children:[e.jsxs("div",{className:"flex items-center space-x-2",children:[e.jsx("span",{className:"text-sm font-medium text-gray-700",children:"响应来源:"}),e.jsx("span",{className:`text-sm px-2 py-1 rounded ${x?"bg-green-100 text-green-800":"bg-blue-100 text-blue-800"}`,children:x?"🚀 缓存":"🌐 网络"})]}),e.jsx("div",{className:"bg-gray-100 p-3 rounded-md max-h-64 overflow-y-auto",children:e.jsx("pre",{className:"text-sm text-gray-900 whitespace-pre-wrap",children:JSON.stringify(m,null,2)})})]})]}),e.jsxs("div",{className:"space-y-4",children:[e.jsxs("div",{children:[e.jsx("div",{className:"flex justify-between items-center mb-2",children:e.jsx("h4",{className:"font-medium text-gray-900",children:"缓存统计"})}),e.jsxs("div",{className:"bg-gray-50 p-4 rounded-md space-y-2",children:[e.jsxs("div",{className:"flex justify-between",children:[e.jsx("span",{className:"text-sm text-gray-600",children:"缓存项数量:"}),e.jsx("span",{className:"text-sm font-medium",children:d.size})]}),e.jsxs("div",{className:"flex justify-between",children:[e.jsx("span",{className:"text-sm text-gray-600",children:"命中次数:"}),e.jsx("span",{className:"text-sm font-medium text-green-600",children:d.hits})]}),e.jsxs("div",{className:"flex justify-between",children:[e.jsx("span",{className:"text-sm text-gray-600",children:"未命中次数:"}),e.jsx("span",{className:"text-sm font-medium text-red-600",children:d.misses})]}),e.jsxs("div",{className:"flex justify-between",children:[e.jsx("span",{className:"text-sm text-gray-600",children:"命中率:"}),e.jsxs("span",{className:"text-sm font-medium",children:[d.hitRate.toFixed(2),"%"]})]})]})]}),e.jsxs("div",{children:[e.jsxs("div",{className:"flex justify-between items-center mb-2",children:[e.jsx("h4",{className:"font-medium text-gray-900",children:"请求历史"}),e.jsx("button",{onClick:j,className:"px-2 py-1 text-xs bg-gray-600 text-white rounded hover:bg-gray-700",children:"清空历史"})]}),e.jsx("div",{className:"bg-gray-50 p-4 rounded-md max-h-64 overflow-y-auto",children:C.length===0?e.jsx("div",{className:"text-sm text-gray-500 text-center py-4",children:"暂无请求历史"}):e.jsx("div",{className:"space-y-2",children:C.slice(-10).reverse().map((l,c)=>e.jsxs("div",{className:"p-2 bg-white rounded border",children:[e.jsxs("div",{className:"flex items-center justify-between mb-1",children:[e.jsx("span",{className:`text-xs px-2 py-1 rounded ${l.fromCache?"bg-green-100 text-green-800":"bg-blue-100 text-blue-800"}`,children:l.fromCache?"缓存":"网络"}),e.jsxs("span",{className:"text-xs text-gray-500",children:[l.duration,"ms"]})]}),e.jsx("div",{className:"text-xs text-gray-700 truncate",children:l.url}),e.jsx("div",{className:"text-xs text-gray-500",children:new Date(l.timestamp).toLocaleTimeString()})]},c))})})]})]})]})]})})},K=()=>{const i={title:"缓存淘汰策略实现",language:"typescript",code:`// 缓存淘汰策略比较
class EvictionStrategyComparison {
  private lruCache: Map<string, any>;
  private lfuCache: Map<string, any>;
  private fifoCache: Map<string, any>;
  private accessOrder: string[]; // LRU使用
  private frequencyMap: Map<string, number>; // LFU使用
  private insertOrder: string[]; // FIFO使用
  private maxSize: number;

  constructor(maxSize: number = 3) {
    this.maxSize = maxSize;
    this.lruCache = new Map();
    this.lfuCache = new Map();
    this.fifoCache = new Map();
    this.accessOrder = [];
    this.frequencyMap = new Map();
    this.insertOrder = [];
  }

  // LRU策略：淘汰最近最少使用的项
  setLRU(key: string, value: any): void {
    if (this.lruCache.has(key)) {
      // 更新现有项的位置
      this.updateLRUAccess(key);
    } else {
      // 添加新项
      if (this.lruCache.size >= this.maxSize) {
        const lruKey = this.accessOrder.shift()!;
        this.lruCache.delete(lruKey);
      }
      this.accessOrder.push(key);
    }
    this.lruCache.set(key, value);
  }

  // LFU策略：淘汰使用频率最低的项
  setLFU(key: string, value: any): void {
    if (this.lfuCache.has(key)) {
      // 增加访问频率
      this.frequencyMap.set(key, (this.frequencyMap.get(key) || 0) + 1);
    } else {
      // 添加新项
      if (this.lfuCache.size >= this.maxSize) {
        const lfuKey = this.findLFUKey();
        this.lfuCache.delete(lfuKey);
        this.frequencyMap.delete(lfuKey);
      }
      this.frequencyMap.set(key, 1);
    }
    this.lfuCache.set(key, value);
  }

  // FIFO策略：淘汰最先进入的项
  setFIFO(key: string, value: any): void {
    if (!this.fifoCache.has(key)) {
      if (this.fifoCache.size >= this.maxSize) {
        const fifoKey = this.insertOrder.shift()!;
        this.fifoCache.delete(fifoKey);
      }
      this.insertOrder.push(key);
    }
    this.fifoCache.set(key, value);
  }

  private updateLRUAccess(key: string): void {
    const index = this.accessOrder.indexOf(key);
    if (index > -1) {
      this.accessOrder.splice(index, 1);
      this.accessOrder.push(key);
    }
  }

  private findLFUKey(): string {
    let minFreq = Infinity;
    let lfuKey = '';
    for (const [key, freq] of this.frequencyMap.entries()) {
      if (freq < minFreq) {
        minFreq = freq;
        lfuKey = key;
      }
    }
    return lfuKey;
  }

  // 获取缓存状态
  getStatus() {
    return {
      lru: Array.from(this.lruCache.keys()),
      lfu: Array.from(this.lfuCache.keys()),
      fifo: Array.from(this.fifoCache.keys()),
      frequencies: Object.fromEntries(this.frequencyMap)
    };
  }
}`,highlights:[23,24,25,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45,46,47,48,49,50,51,52,53,54,55,56,57,58,59,60,61,62,63,64,65,66,67,68,69,70,71,72,73,74,75,76,77,78,79,80]},s={title:"HTTP请求缓存实现",language:"typescript",code:`// HTTP请求缓存管理器
class HTTPRequestCache {
  private cache: RequestCacheManager;
  private requestHistory: Array<{url: string, cached: boolean, timestamp: number}>;

  constructor() {
    this.cache = new RequestCacheManager({
      maxSize: 50,
      defaultTTL: 5 * 60 * 1000, // 5分钟
      strategy: 'LRU'
    });
    this.requestHistory = [];
  }

  // 缓存HTTP请求
  async request<T>(url: string, options?: RequestInit): Promise<T> {
    const cacheKey = this.generateCacheKey(url, options);
    
    // 尝试从缓存获取
    const cachedResponse = this.cache.get<T>(cacheKey);
    if (cachedResponse) {
      this.addToHistory(url, true);
      return cachedResponse;
    }

    // 发起网络请求
    try {
      const response = await fetch(url, options);
      if (!response.ok) {
        throw new Error(\`HTTP error! status: \${response.status}\`);
      }
      
      const data = await response.json();
      
      // 缓存响应数据
      this.cache.set(cacheKey, data, undefined, ['http-request']);
      this.addToHistory(url, false);
      
      return data;
    } catch (error) {
      this.addToHistory(url, false);
      throw error;
    }
  }

  // 生成缓存键
  private generateCacheKey(url: string, options?: RequestInit): string {
    const method = options?.method || 'GET';
    const body = options?.body ? JSON.stringify(options.body) : '';
    return \`\${method}:\${url}:\${body}\`;
  }

  // 添加到请求历史
  private addToHistory(url: string, cached: boolean): void {
    this.requestHistory.unshift({
      url,
      cached,
      timestamp: Date.now()
    });
    
    // 保持历史记录在合理范围内
    if (this.requestHistory.length > 20) {
      this.requestHistory = this.requestHistory.slice(0, 20);
    }
  }

  // 清理HTTP请求缓存
  clearHttpCache(): void {
    this.cache.deleteByTag('http-request');
  }

  // 获取缓存统计
  getStats() {
    return {
      cache: this.cache.getStats(),
      history: this.requestHistory
    };
  }
}`,highlights:[15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45,46,47,48,49,50,51,52,53,54,55,56,57,58,59,60,61,62,63,64,65,66,67,68,69,70]},t={title:"请求缓存管理器实现",language:"typescript",code:`// 请求缓存管理器
class RequestCacheManager {
  private cache: Map<string, CacheItem>;
  private config: CacheConfig;
  private stats: CacheStats;
  private accessOrder: string[]; // LRU使用
  private frequencyMap: Map<string, number>; // LFU使用

  constructor(config: Partial<CacheConfig> = {}) {
    this.cache = new Map();
    this.config = {
      maxSize: 100,
      maxMemory: 10 * 1024 * 1024, // 10MB
      defaultTTL: 5 * 60 * 1000, // 5分钟
      cleanupInterval: 60 * 1000, // 1分钟
      strategy: 'LRU',
      ...config
    };
    this.accessOrder = [];
    this.frequencyMap = new Map();
  }

  // 设置缓存
  set<T>(key: string, value: T, ttl?: number, tags?: string[]): void {
    const now = Date.now();
    const size = this.calculateSize(value);
    
    // 检查是否需要淘汰
    this.evictIfNeeded(size);
    
    const item: CacheItem<T> = {
      key,
      value,
      timestamp: now,
      ttl: ttl || this.config.defaultTTL,
      accessCount: 0,
      lastAccessed: now,
      tags,
      size
    };
    
    this.cache.set(key, item);
    this.updateAccessStructures(key, 'set');
  }

  // 获取缓存
  get<T>(key: string): T | null {
    const item = this.cache.get(key) as CacheItem<T> | undefined;
    
    if (!item || this.isExpired(item)) {
      this.stats.misses++;
      return null;
    }
    
    // 更新访问信息
    item.accessCount++;
    item.lastAccessed = Date.now();
    this.updateAccessStructures(key, 'get');
    
    this.stats.hits++;
    return item.value;
  }

  // 淘汰策略
  private evictIfNeeded(newItemSize: number): void {
    while (this.cache.size >= this.config.maxSize) {
      this.evictOne();
    }
  }

  // 淘汰一个项目
  private evictOne(): boolean {
    let keyToEvict: string | null = null;
    
    switch (this.config.strategy) {
      case 'LRU':
        keyToEvict = this.accessOrder[0] || null;
        break;
        
      case 'LFU':
        let minFreq = Infinity;
        for (const [key, freq] of this.frequencyMap.entries()) {
          if (freq < minFreq) {
            minFreq = freq;
            keyToEvict = key;
          }
        }
        break;
    }
    
    if (keyToEvict && this.cache.has(keyToEvict)) {
      this.delete(keyToEvict);
      return true;
    }
    
    return false;
  }
}`,highlights:[21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45,46,47,48,49,50,51,52,53,54,55,56,57,58,59,60,61,62,63,64,65,66,67,68,69,70,71,72,73,74,75,76,77,78,79,80]};return e.jsx(M,{title:"请求缓存管理",description:"实现高效的请求缓存系统，支持多种淘汰策略、TTL过期、内存管理和统计监控。",overview:e.jsxs("div",{className:"space-y-4",children:[e.jsxs("div",{className:"bg-blue-50 p-6 rounded-lg",children:[e.jsx("h3",{className:"text-lg font-semibold text-blue-900 mb-3",children:"🔍 核心概念"}),e.jsxs("ul",{className:"space-y-2 text-blue-800",children:[e.jsxs("li",{children:[e.jsx("strong",{children:"缓存策略:"})," LRU、LFU、FIFO等不同的缓存淘汰算法"]}),e.jsxs("li",{children:[e.jsx("strong",{children:"TTL管理:"})," 基于时间的缓存过期机制"]}),e.jsxs("li",{children:[e.jsx("strong",{children:"内存控制:"})," 限制缓存使用的内存大小"]}),e.jsxs("li",{children:[e.jsx("strong",{children:"统计监控:"})," 命中率、内存使用等性能指标"]})]})]}),e.jsxs("div",{className:"bg-green-50 p-6 rounded-lg",children:[e.jsx("h3",{className:"text-lg font-semibold text-green-900 mb-3",children:"✨ 主要优势"}),e.jsxs("ul",{className:"space-y-2 text-green-800",children:[e.jsxs("li",{children:[e.jsx("strong",{children:"性能提升:"})," 减少重复请求，提高响应速度"]}),e.jsxs("li",{children:[e.jsx("strong",{children:"带宽节省:"})," 减少网络流量和服务器负载"]}),e.jsxs("li",{children:[e.jsx("strong",{children:"用户体验:"})," 快速响应，减少等待时间"]}),e.jsxs("li",{children:[e.jsx("strong",{children:"资源优化:"})," 智能的内存和存储管理"]})]})]}),e.jsxs("div",{className:"bg-yellow-50 p-6 rounded-lg",children:[e.jsx("h3",{className:"text-lg font-semibold text-yellow-900 mb-3",children:"🎯 适用场景"}),e.jsxs("ul",{className:"space-y-2 text-yellow-800",children:[e.jsxs("li",{children:[e.jsx("strong",{children:"API请求:"})," 缓存频繁访问的API响应数据"]}),e.jsxs("li",{children:[e.jsx("strong",{children:"静态资源:"})," 缓存图片、文件等静态内容"]}),e.jsxs("li",{children:[e.jsx("strong",{children:"计算结果:"})," 缓存复杂计算的中间结果"]}),e.jsxs("li",{children:[e.jsx("strong",{children:"数据查询:"})," 缓存数据库查询结果"]})]})]}),e.jsxs("div",{className:"bg-red-50 p-6 rounded-lg",children:[e.jsx("h3",{className:"text-lg font-semibold text-red-900 mb-3",children:"⚠️ 注意事项"}),e.jsxs("ul",{className:"space-y-2 text-red-800",children:[e.jsxs("li",{children:[e.jsx("strong",{children:"数据一致性:"})," 确保缓存数据与源数据的一致性"]}),e.jsxs("li",{children:[e.jsx("strong",{children:"内存泄漏:"})," 及时清理过期和无用的缓存项"]}),e.jsxs("li",{children:[e.jsx("strong",{children:"缓存穿透:"})," 防止大量无效请求绕过缓存"]}),e.jsxs("li",{children:[e.jsx("strong",{children:"热点数据:"})," 合理处理热点数据的缓存策略"]})]})]})]}),examples:[{title:"基础缓存操作",component:e.jsx(E,{}),description:"演示缓存的基本操作，包括设置、获取、删除和统计信息。",observationPoints:["设置不同TTL的缓存项，观察过期行为","多次获取同一缓存项，观察命中率变化","缓存项会显示访问次数和剩余时间","手动清理可以移除过期的缓存项"],keyPoints:["缓存支持JSON格式的复杂数据结构","TTL过期机制确保数据的时效性","统计信息帮助监控缓存性能","支持手动清理和自动清理机制"],commonTraps:["忘记设置合适的TTL导致数据过期","缓存键命名不规范导致冲突","没有监控内存使用导致内存泄漏","过度依赖缓存忽略数据一致性"],solutions:["根据数据特性设置合理的TTL","建立统一的缓存键命名规范","定期监控和清理缓存使用情况","建立缓存更新和失效机制"],codeExample:t},{title:"缓存淘汰策略",component:e.jsx(z,{}),description:"比较LRU、LFU、FIFO三种缓存淘汰策略的行为差异。",observationPoints:["运行演示观察不同策略的淘汰行为","LRU策略会淘汰最近最少使用的项","LFU策略会淘汰使用频率最低的项","FIFO策略会淘汰最先进入的项"],keyPoints:["不同策略适用于不同的访问模式","LRU适合时间局部性强的场景","LFU适合访问频率差异大的场景","FIFO实现简单但效果可能不佳"],importantTips:["选择策略要考虑实际的访问模式","可以根据业务需求动态调整策略","监控不同策略的命中率表现","考虑策略切换的成本和收益"],codeExample:i},{title:"HTTP请求缓存",component:e.jsx(H,{}),description:"实际的HTTP请求缓存应用，展示网络请求的缓存优化效果。",observationPoints:["首次请求会从网络获取数据","重复请求会从缓存快速返回","请求历史显示缓存命中情况","缓存统计反映整体性能提升"],keyPoints:["HTTP缓存可以显著提升应用性能","缓存键应该包含URL和请求参数","支持按标签批量清理相关缓存","实时统计帮助评估缓存效果"],commonTraps:["缓存键设计不当导致缓存失效","没有考虑请求参数的影响","缓存时间设置不合理","忽略错误响应的缓存处理"],solutions:["设计完整的缓存键生成策略","包含所有影响响应的参数","根据数据更新频率设置TTL","区分成功和失败响应的缓存策略"],codeExample:s}],tutorial:{concepts:["缓存是提高应用性能的重要手段之一","合适的缓存策略可以显著减少网络请求","缓存管理需要平衡性能和内存使用","不同的淘汰策略适用于不同的访问模式","缓存的监控和统计对优化至关重要"],steps:["分析应用的数据访问模式","选择合适的缓存策略和配置","设计缓存键的命名规范","实现缓存的设置和获取逻辑","添加TTL和过期处理机制","实现缓存淘汰和内存管理","集成缓存统计和监控","测试和优化缓存性能","建立缓存维护和更新机制"],tips:["根据数据特性选择合适的TTL时间","使用标签系统方便批量管理缓存","定期监控缓存命中率和内存使用","考虑缓存预热和数据一致性问题","建立缓存失效和更新的触发机制","在开发环境中提供缓存调试工具"]},interview:{questions:[{question:"LRU、LFU、FIFO三种缓存淘汰策略有什么区别？",answer:"LRU(Least Recently Used)淘汰最近最少使用的项，适合时间局部性强的场景；LFU(Least Frequently Used)淘汰使用频率最低的项，适合访问频率差异大的场景；FIFO(First In First Out)淘汰最先进入的项，实现简单但可能不是最优选择。选择策略要根据实际的访问模式。"},{question:"如何设计一个高效的缓存系统？",answer:"高效缓存系统的设计要点：1) 选择合适的数据结构(如HashMap+双向链表)；2) 实现合理的淘汰策略；3) 设置适当的TTL和清理机制；4) 控制内存使用和缓存大小；5) 提供统计和监控功能；6) 考虑并发安全和数据一致性；7) 支持批量操作和标签管理。"},{question:"缓存穿透、缓存击穿、缓存雪崩是什么？如何解决？",answer:"缓存穿透：查询不存在的数据导致每次都查询数据库，解决方案是缓存空值或使用布隆过滤器；缓存击穿：热点数据过期导致大量请求直接访问数据库，解决方案是设置热点数据永不过期或使用互斥锁；缓存雪崩：大量缓存同时过期导致数据库压力激增，解决方案是设置随机过期时间或使用多级缓存。"},{question:"如何保证缓存与数据库的数据一致性？",answer:"数据一致性保证策略：1) Cache Aside模式：先更新数据库，再删除缓存；2) Write Through：同时更新缓存和数据库；3) Write Behind：先更新缓存，异步更新数据库；4) 使用消息队列实现最终一致性；5) 设置合理的TTL让数据自然过期；6) 使用版本号或时间戳检测数据变化。"},{question:"HTTP缓存有哪些策略？如何在前端实现？",answer:"HTTP缓存策略包括：1) 强缓存：通过Cache-Control和Expires控制；2) 协商缓存：通过ETag和Last-Modified验证；3) 前端实现可以使用：内存缓存、localStorage、sessionStorage、IndexedDB；4) 可以基于URL、请求参数、请求头生成缓存键；5) 支持TTL、LRU等策略；6) 提供缓存统计和清理功能。"}],keyPoints:["缓存是性能优化的重要手段，需要合理设计和使用","不同的淘汰策略适用于不同的访问模式和业务场景","TTL机制确保缓存数据的时效性，防止过期数据问题","内存管理和统计监控对缓存系统的稳定运行至关重要","缓存键的设计要考虑唯一性、可读性和管理便利性","数据一致性是缓存系统设计中的核心挑战之一"]},bestPractices:{dos:["根据业务场景选择合适的缓存策略和淘汰算法","设置合理的TTL时间，平衡性能和数据一致性","建立完善的缓存键命名规范和管理机制","实现缓存统计和监控，及时发现性能问题","提供缓存预热和批量操作功能","考虑缓存的并发安全和异常处理","定期清理过期和无用的缓存项","为不同类型的数据设置不同的缓存策略"],donts:["不要缓存频繁变化或敏感的数据","不要设置过长的TTL导致数据不一致","不要忽略缓存的内存使用和性能影响","不要在缓存中存储过大的对象","不要依赖缓存存储重要的业务数据","不要忽略缓存失效时的降级处理","不要在生产环境中禁用缓存清理机制","不要使用复杂的缓存键导致管理困难"],patterns:["Cache Aside模式：应用程序管理缓存和数据库的同步","Write Through模式：写入时同时更新缓存和数据库","Write Behind模式：先写缓存，异步写入数据库","Read Through模式：缓存未命中时自动加载数据","Refresh Ahead模式：在数据过期前主动刷新缓存","多级缓存模式：使用L1、L2等多级缓存提高命中率","分布式缓存模式：在多个节点间共享缓存数据","缓存预热模式：应用启动时预先加载热点数据"]}})};export{K as default};
