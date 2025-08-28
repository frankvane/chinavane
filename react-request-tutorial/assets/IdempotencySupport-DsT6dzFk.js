var T=Object.defineProperty;var q=(c,s,t)=>s in c?T(c,s,{enumerable:!0,configurable:!0,writable:!0,value:t}):c[s]=t;var w=(c,s,t)=>q(c,typeof s!="symbol"?s+"":s,t);import{j as e,r as l}from"./index-Bi_r7QuH.js";import{C as k}from"./ComponentTemplate-C5EWLtXX.js";class N{static generateKey(s,t,r,a,n){const i={method:s.toUpperCase(),url:t.toLowerCase(),params:r?this.sortObject(r):null,body:a?this.sortObject(a):null,userId:n||"anonymous"},g=JSON.stringify(i);return this.hashString(g)}static generateClientKey(){const s=Date.now(),t=Math.random().toString(36).substring(2,15);return`client_${s}_${t}`}static sortObject(s){if(s===null||typeof s!="object")return s;if(Array.isArray(s))return s.map(a=>this.sortObject(a));const t=Object.keys(s).sort(),r={};for(const a of t)r[a]=this.sortObject(s[a]);return r}static hashString(s){let t=0;for(let r=0;r<s.length;r++){const a=s.charCodeAt(r);t=(t<<5)-t+a,t=t&t}return Math.abs(t).toString(36)}}class v{constructor(s){w(this,"requestCache",new Map);w(this,"ttl",3e5);w(this,"maxCacheSize",1e3);s!=null&&s.ttl&&(this.ttl=s.ttl),s!=null&&s.maxCacheSize&&(this.maxCacheSize=s.maxCacheSize),setInterval(()=>this.cleanup(),6e4)}async executeIdempotentRequest(s,t){const r=performance.now(),a=this.requestCache.get(s);if(a){if(a.status==="completed")return{result:a.result,isFromCache:!0,executionTime:performance.now()-r};if(a.status==="pending"&&a.promise)return{result:await a.promise,isFromCache:!0,executionTime:performance.now()-r};a.status==="failed"&&this.requestCache.delete(s)}const n=this.executeRequest(t);this.requestCache.set(s,{result:null,timestamp:Date.now(),status:"pending",promise:n});try{const i=await n;return this.requestCache.set(s,{result:i,timestamp:Date.now(),status:"completed"}),{result:i,isFromCache:!1,executionTime:performance.now()-r}}catch(i){throw this.requestCache.set(s,{result:i,timestamp:Date.now(),status:"failed"}),i}}async executeRequest(s){return await s()}cleanup(){const s=Date.now(),t=[];if(this.requestCache.forEach((r,a)=>{s-r.timestamp>this.ttl&&t.push(a)}),t.forEach(r=>{this.requestCache.delete(r)}),this.requestCache.size>this.maxCacheSize){const r=Array.from(this.requestCache.entries()).sort((n,i)=>n[1].timestamp-i[1].timestamp),a=this.requestCache.size-this.maxCacheSize;for(let n=0;n<a;n++)this.requestCache.delete(r[n][0])}}getStats(){let s=0,t=0,r=0;return this.requestCache.forEach(a=>{switch(a.status){case"pending":s++;break;case"completed":t++;break;case"failed":r++;break}}),{cacheSize:this.requestCache.size,ttl:this.ttl,maxCacheSize:this.maxCacheSize,pendingRequests:s,completedRequests:t,failedRequests:r}}clear(){this.requestCache.clear()}delete(s){return this.requestCache.delete(s)}}class b{static async processPayment(s,t){if(this.requestCount++,await new Promise(r=>setTimeout(r,1e3+Math.random()*2e3)),Math.random()<.1)throw new Error("支付处理失败");return{transactionId:`txn_${Date.now()}_${this.requestCount}`,amount:s,userId:t,timestamp:Date.now(),status:"success"}}static async createOrder(s){if(this.requestCount++,await new Promise(t=>setTimeout(t,800+Math.random()*1200)),Math.random()<.05)throw new Error("订单创建失败");return{orderId:`order_${Date.now()}_${this.requestCount}`,productId:s.productId,quantity:s.quantity,userId:s.userId,totalAmount:s.quantity*99.99,timestamp:Date.now()}}static getRequestCount(){return this.requestCount}static resetRequestCount(){this.requestCount=0}}w(b,"requestCount",0);const I=()=>{const[c]=l.useState(()=>new v),[s,t]=l.useState([]),[r,a]=l.useState(c.getStats()),[n,i]=l.useState(!1),g=l.useCallback(async()=>{const x="user123",h=N.generateKey("POST","/api/payment",{amount:100,userId:x}),d=Date.now();t(m=>[{id:d,type:"支付处理",idempotencyKey:h,isFromCache:!1,executionTime:0,status:"pending"},...m.slice(0,9)]),i(!0);try{const{result:m,isFromCache:u,executionTime:p}=await c.executeIdempotentRequest(h,()=>b.processPayment(100,x));t(y=>y.map(j=>j.id===d?{...j,result:m,isFromCache:u,executionTime:p,status:"success"}:j))}catch(m){t(u=>u.map(p=>p.id===d?{...p,status:"error",error:m instanceof Error?m.message:"未知错误"}:p))}finally{i(!1),a(c.getStats())}},[c]),C=l.useCallback(async()=>{const o={productId:"prod123",quantity:2,userId:"user123"},x=N.generateKey("POST","/api/orders",o),h=Date.now();t(d=>[{id:h,type:"订单创建",idempotencyKey:x,isFromCache:!1,executionTime:0,status:"pending"},...d.slice(0,9)]),i(!0);try{const{result:d,isFromCache:m,executionTime:u}=await c.executeIdempotentRequest(x,()=>b.createOrder(o));t(p=>p.map(y=>y.id===h?{...y,result:d,isFromCache:m,executionTime:u,status:"success"}:y))}catch(d){t(m=>m.map(u=>u.id===h?{...u,status:"error",error:d instanceof Error?d.message:"未知错误"}:u))}finally{i(!1),a(c.getStats())}},[c]),f=l.useCallback(()=>{c.clear(),b.resetRequestCount(),t([]),a(c.getStats())},[c]);return e.jsx("div",{className:"space-y-6",children:e.jsxs("div",{className:"bg-white p-6 rounded-lg shadow-sm border",children:[e.jsx("h3",{className:"text-lg font-semibold mb-4",children:"幂等性请求演示"}),e.jsxs("div",{className:"flex flex-wrap gap-3 mb-6",children:[e.jsx("button",{onClick:g,disabled:n,className:"px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition-colors disabled:opacity-50",children:n?"处理中...":"执行支付"}),e.jsx("button",{onClick:C,disabled:n,className:"px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600 transition-colors disabled:opacity-50",children:n?"处理中...":"创建订单"}),e.jsx("button",{onClick:f,className:"px-4 py-2 bg-gray-500 text-white rounded hover:bg-gray-600 transition-colors",children:"清空缓存"})]}),e.jsxs("div",{className:"grid grid-cols-2 md:grid-cols-4 gap-4 mb-6",children:[e.jsxs("div",{className:"bg-blue-50 p-4 rounded-lg",children:[e.jsx("h4",{className:"font-medium text-blue-900 mb-2",children:"缓存大小"}),e.jsx("p",{className:"text-2xl font-bold text-blue-600",children:r.cacheSize})]}),e.jsxs("div",{className:"bg-green-50 p-4 rounded-lg",children:[e.jsx("h4",{className:"font-medium text-green-900 mb-2",children:"已完成"}),e.jsx("p",{className:"text-2xl font-bold text-green-600",children:r.completedRequests})]}),e.jsxs("div",{className:"bg-yellow-50 p-4 rounded-lg",children:[e.jsx("h4",{className:"font-medium text-yellow-900 mb-2",children:"进行中"}),e.jsx("p",{className:"text-2xl font-bold text-yellow-600",children:r.pendingRequests})]}),e.jsxs("div",{className:"bg-red-50 p-4 rounded-lg",children:[e.jsx("h4",{className:"font-medium text-red-900 mb-2",children:"失败"}),e.jsx("p",{className:"text-2xl font-bold text-red-600",children:r.failedRequests})]})]}),e.jsxs("div",{className:"space-y-3",children:[e.jsx("h4",{className:"font-medium",children:"请求历史"}),s.length===0?e.jsx("p",{className:"text-gray-500 text-center py-8",children:"暂无请求记录"}):s.map(o=>e.jsxs("div",{className:`p-4 rounded-lg border ${o.status==="success"?"bg-green-50 border-green-200":o.status==="error"?"bg-red-50 border-red-200":"bg-yellow-50 border-yellow-200"}`,children:[e.jsxs("div",{className:"flex items-center justify-between mb-2",children:[e.jsxs("div",{className:"flex items-center space-x-2",children:[e.jsx("span",{className:`px-2 py-1 rounded text-sm font-medium ${o.status==="success"?"bg-green-100 text-green-800":o.status==="error"?"bg-red-100 text-red-800":"bg-yellow-100 text-yellow-800"}`,children:o.status==="success"?"✓ 成功":o.status==="error"?"✗ 失败":"⏳ 处理中"}),e.jsx("span",{className:"font-medium",children:o.type}),o.isFromCache&&e.jsx("span",{className:"px-2 py-1 bg-purple-100 text-purple-800 rounded text-sm",children:"缓存命中"})]}),e.jsxs("span",{className:"text-sm text-gray-500",children:[o.executionTime.toFixed(2),"ms"]})]}),e.jsxs("div",{className:"text-sm space-y-1",children:[e.jsxs("div",{children:[e.jsx("strong",{children:"幂等性键:"})," ",o.idempotencyKey]}),o.result&&e.jsxs("div",{children:[e.jsx("strong",{children:"结果:"})," ",JSON.stringify(o.result,null,2).substring(0,100),"..."]}),o.error&&e.jsxs("div",{className:"text-red-600",children:[e.jsx("strong",{children:"错误:"})," ",o.error]})]})]},o.id))]})]})})},S=()=>{const[c]=l.useState(()=>new v),[s,t]=l.useState([]),[r,a]=l.useState(!1),n=l.useCallback(async i=>{a(!0);const g=Date.now(),C=b.getRequestCount(),f=performance.now(),o={amount:50,userId:"concurrent_user"},x=N.generateKey("POST","/api/payment",o),h=Array.from({length:i},()=>c.executeIdempotentRequest(x,()=>b.processPayment(o.amount,o.userId)));try{const d=await Promise.all(h),m=performance.now(),u=b.getRequestCount(),p=d.filter(j=>j.isFromCache).length,y=u-C;t(j=>[{batchId:g,requestCount:i,cacheHits:p,totalTime:Math.round(m-f),actualApiCalls:y},...j.slice(0,4)])}catch(d){console.error("并发测试失败:",d)}finally{a(!1)}},[c]);return e.jsx("div",{className:"space-y-6",children:e.jsxs("div",{className:"bg-white p-6 rounded-lg shadow-sm border",children:[e.jsx("h3",{className:"text-lg font-semibent mb-4",children:"并发请求测试"}),e.jsxs("div",{className:"flex flex-wrap gap-3 mb-6",children:[e.jsx("button",{onClick:()=>n(5),disabled:r,className:"px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition-colors disabled:opacity-50",children:r?"运行中...":"5个并发请求"}),e.jsx("button",{onClick:()=>n(10),disabled:r,className:"px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600 transition-colors disabled:opacity-50",children:r?"运行中...":"10个并发请求"}),e.jsx("button",{onClick:()=>n(20),disabled:r,className:"px-4 py-2 bg-purple-500 text-white rounded hover:bg-purple-600 transition-colors disabled:opacity-50",children:r?"运行中...":"20个并发请求"})]}),e.jsxs("div",{className:"space-y-3",children:[e.jsx("h4",{className:"font-medium",children:"并发测试结果"}),s.length===0?e.jsx("p",{className:"text-gray-500 text-center py-8",children:"暂无测试结果"}):s.map(i=>e.jsxs("div",{className:"p-4 bg-gray-50 rounded-lg",children:[e.jsxs("div",{className:"grid grid-cols-2 md:grid-cols-4 gap-4",children:[e.jsxs("div",{children:[e.jsx("div",{className:"text-sm text-gray-600",children:"请求数量"}),e.jsx("div",{className:"text-lg font-semibold",children:i.requestCount})]}),e.jsxs("div",{children:[e.jsx("div",{className:"text-sm text-gray-600",children:"缓存命中"}),e.jsx("div",{className:"text-lg font-semibold text-green-600",children:i.cacheHits})]}),e.jsxs("div",{children:[e.jsx("div",{className:"text-sm text-gray-600",children:"实际API调用"}),e.jsx("div",{className:"text-lg font-semibold text-blue-600",children:i.actualApiCalls})]}),e.jsxs("div",{children:[e.jsx("div",{className:"text-sm text-gray-600",children:"总耗时"}),e.jsxs("div",{className:"text-lg font-semibold",children:[i.totalTime,"ms"]})]})]}),e.jsxs("div",{className:"mt-2 text-sm text-gray-600",children:["效率提升:"," ",i.requestCount>1?`${((i.requestCount-i.actualApiCalls)/i.requestCount*100).toFixed(1)}%`:"0%"]})]},i.batchId))]})]})})},P=()=>{const[c,s]=l.useState([]),t=l.useCallback((n,i,g,C,f,o)=>{const x=N.generateKey(i,g,C,f,o);s(h=>[{id:Date.now(),description:n,method:i,url:g,params:C,body:f,userId:o,generatedKey:x},...h.slice(0,9)])},[]),r=l.useCallback(()=>{const n=N.generateClientKey();s(i=>[{id:Date.now(),description:"客户端生成的唯一键",method:"CLIENT",url:"N/A",generatedKey:n},...i.slice(0,9)])},[]),a=l.useCallback(()=>{s([])},[]);return e.jsx("div",{className:"space-y-6",children:e.jsxs("div",{className:"bg-white p-6 rounded-lg shadow-sm border",children:[e.jsx("h3",{className:"text-lg font-semibold mb-4",children:"幂等性键生成策略"}),e.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-4 mb-6",children:[e.jsx("button",{onClick:()=>t("支付请求","POST","/api/payment",{amount:100},{cardNumber:"****1234"},"user123"),className:"px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition-colors",children:"生成支付键"}),e.jsx("button",{onClick:()=>t("订单创建","POST","/api/orders",void 0,{productId:"prod123",quantity:2},"user456"),className:"px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600 transition-colors",children:"生成订单键"}),e.jsx("button",{onClick:()=>t("用户信息更新","PUT","/api/users/123",void 0,{name:"John Doe",email:"john@example.com"}),className:"px-4 py-2 bg-purple-500 text-white rounded hover:bg-purple-600 transition-colors",children:"生成更新键"}),e.jsx("button",{onClick:r,className:"px-4 py-2 bg-orange-500 text-white rounded hover:bg-orange-600 transition-colors",children:"生成客户端键"})]}),e.jsx("button",{onClick:a,className:"px-4 py-2 bg-gray-500 text-white rounded hover:bg-gray-600 transition-colors mb-6",children:"清空示例"}),e.jsxs("div",{className:"space-y-3",children:[e.jsx("h4",{className:"font-medium",children:"生成的幂等性键"}),c.length===0?e.jsx("p",{className:"text-gray-500 text-center py-8",children:"暂无生成示例"}):c.map(n=>e.jsxs("div",{className:"p-4 bg-gray-50 rounded-lg",children:[e.jsxs("div",{className:"flex justify-between items-start mb-2",children:[e.jsxs("div",{children:[e.jsx("div",{className:"font-medium",children:n.description}),e.jsxs("div",{className:"text-sm text-gray-600",children:[n.method," ",n.url]})]}),e.jsx("div",{className:"text-sm text-gray-500",children:new Date(n.id).toLocaleTimeString()})]}),e.jsxs("div",{className:"text-sm space-y-1",children:[n.params&&e.jsxs("div",{children:[e.jsx("strong",{children:"参数:"})," ",JSON.stringify(n.params)]}),n.body&&e.jsxs("div",{children:[e.jsx("strong",{children:"请求体:"})," ",JSON.stringify(n.body)]}),n.userId&&e.jsxs("div",{children:[e.jsx("strong",{children:"用户ID:"})," ",n.userId]}),e.jsxs("div",{className:"bg-white p-2 rounded border",children:[e.jsx("strong",{children:"幂等性键:"})," ",e.jsx("code",{className:"text-blue-600",children:n.generatedKey})]})]})]},n.id))]})]})})},K=()=>{const c={title:"幂等性支持实现",code:`// 幂等性管理器
class IdempotencyManager {
  private requestCache: Map<string, {
    result: unknown;
    timestamp: number;
    status: 'pending' | 'completed' | 'failed';
    promise?: Promise<unknown>;
  }> = new Map();

  // 执行幂等性请求
  async executeIdempotentRequest<T>(
    idempotencyKey: string,
    requestFn: () => Promise<T>
  ): Promise<{
    result: T;
    isFromCache: boolean;
    executionTime: number;
  }> {
    // 检查缓存
    const cached = this.requestCache.get(idempotencyKey);

    if (cached) {
      if (cached.status === 'completed') {
        return {
          result: cached.result as T,
          isFromCache: true,
          executionTime: 0
        };
      }

      if (cached.status === 'pending' && cached.promise) {
        // 等待正在进行的请求
        const result = await cached.promise as T;
        return { result, isFromCache: true, executionTime: 0 };
      }
    }

    // 执行新请求
    const promise = requestFn();
    this.requestCache.set(idempotencyKey, {
      result: null,
      timestamp: Date.now(),
      status: 'pending',
      promise
    });

    const result = await promise;
    this.requestCache.set(idempotencyKey, {
      result,
      timestamp: Date.now(),
      status: 'completed'
    });

    return { result, isFromCache: false, executionTime: 0 };
  }
}`,language:"typescript",highlights:[11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45,46,47,48,49,50]},s={title:"并发请求处理实现",code:`// 并发请求测试
const testConcurrentRequests = async () => {
  const manager = new IdempotencyManager();
  const requestCount = 20;
  const idempotencyKey = 'concurrent-test-key';
  
  // 创建多个相同的并发请求
  const promises = Array.from({ length: requestCount }, (_, index) => 
    manager.executeIdempotentRequest(
      idempotencyKey,
      () => MockApiService.processPayment(100, 'user123')
    ).then(result => ({
      requestId: index + 1,
      ...result
    }))
  );
  
  // 等待所有请求完成
  const results = await Promise.all(promises);
  
  // 统计结果
  const cacheHits = results.filter(r => r.isFromCache).length;
  const actualApiCalls = requestCount - cacheHits;
  
  console.log(\`并发请求测试结果:\`);
  console.log(\`总请求数: \${requestCount}\`);
  console.log(\`缓存命中: \${cacheHits}\`);
  console.log(\`实际API调用: \${actualApiCalls}\`);
  
  return {
    requestCount,
    cacheHits,
    actualApiCalls,
    results
  };
};`,language:"typescript",highlights:[8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25]},t={title:"幂等性键生成策略",code:`// 幂等性键生成器
class IdempotencyKeyGenerator {
  // 基于请求内容生成键
  static generateKey(
    method: string,
    url: string,
    params?: Record<string, unknown>,
    body?: Record<string, unknown>,
    userId?: string
  ): string {
    const keyData = {
      method: method.toUpperCase(),
      url,
      params: this.sortObject(params),
      body: this.sortObject(body),
      userId
    };
    
    const keyString = JSON.stringify(keyData);
    return this.hashString(keyString);
  }
  
  // 客户端生成唯一键
  static generateClientKey(): string {
    const timestamp = Date.now();
    const random = Math.random().toString(36).substring(2);
    return \`client_\${timestamp}_\${random}\`;
  }
  
  // 对象属性排序（确保键的一致性）
  private static sortObject(obj: unknown): unknown {
    if (obj === null || obj === undefined) {
      return obj;
    }
    
    if (Array.isArray(obj)) {
      return obj.map(item => this.sortObject(item));
    }
    
    if (typeof obj === 'object') {
      const sorted: Record<string, unknown> = {};
      Object.keys(obj as Record<string, unknown>)
        .sort()
        .forEach(key => {
          sorted[key] = this.sortObject((obj as Record<string, unknown>)[key]);
        });
      return sorted;
    }
    
    return obj;
  }
}`,language:"typescript",highlights:[4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,23,24,25,26,27]};return e.jsx(k,{title:"幂等性支持",description:"通过幂等性键确保相同请求只执行一次，防止重复操作和数据不一致",overview:e.jsxs("div",{className:"space-y-4",children:[e.jsx("h3",{className:"text-lg font-semibold",children:"核心概念"}),e.jsxs("ul",{className:"list-disc list-inside space-y-2 text-gray-700",children:[e.jsxs("li",{children:[e.jsx("strong",{children:"幂等性："}),"多次执行相同操作的结果与执行一次的结果相同"]}),e.jsxs("li",{children:[e.jsx("strong",{children:"幂等性键："}),"基于请求内容生成的唯一标识符"]}),e.jsxs("li",{children:[e.jsx("strong",{children:"请求缓存："}),"存储已执行请求的结果，避免重复执行"]}),e.jsxs("li",{children:[e.jsx("strong",{children:"并发控制："}),"处理同时到达的相同请求，确保只执行一次"]})]}),e.jsx("h3",{className:"text-lg font-semibold mt-6",children:"主要优势"}),e.jsxs("ul",{className:"list-disc list-inside space-y-2 text-gray-700",children:[e.jsxs("li",{children:[e.jsx("strong",{children:"数据一致性："}),"防止重复操作导致的数据不一致"]}),e.jsxs("li",{children:[e.jsx("strong",{children:"性能优化："}),"避免重复执行相同的耗时操作"]}),e.jsxs("li",{children:[e.jsx("strong",{children:"用户体验："}),"防止用户重复点击导致的问题"]}),e.jsxs("li",{children:[e.jsx("strong",{children:"系统稳定："}),"减少不必要的资源消耗和系统负载"]})]}),e.jsx("h3",{className:"text-lg font-semibold mt-6",children:"适用场景"}),e.jsxs("ul",{className:"list-disc list-inside space-y-2 text-gray-700",children:[e.jsxs("li",{children:[e.jsx("strong",{children:"支付处理："}),"防止重复扣款和重复支付"]}),e.jsxs("li",{children:[e.jsx("strong",{children:"订单创建："}),"避免重复下单和库存问题"]}),e.jsxs("li",{children:[e.jsx("strong",{children:"数据修改："}),"确保更新操作的一致性"]}),e.jsxs("li",{children:[e.jsx("strong",{children:"文件上传："}),"防止重复上传相同文件"]})]}),e.jsx("h3",{className:"text-lg font-semibold mt-6",children:"注意事项"}),e.jsxs("ul",{className:"list-disc list-inside space-y-2 text-gray-700",children:[e.jsxs("li",{children:[e.jsx("strong",{children:"键生成策略："}),"确保相同请求生成相同的键"]}),e.jsxs("li",{children:[e.jsx("strong",{children:"缓存管理："}),"合理设置TTL和清理策略"]}),e.jsxs("li",{children:[e.jsx("strong",{children:"并发处理："}),"正确处理同时到达的相同请求"]}),e.jsxs("li",{children:[e.jsx("strong",{children:"错误处理："}),"失败的请求应该允许重试"]})]})]}),examples:[{title:"基础幂等性演示",component:e.jsx(I,{}),description:"演示基本的幂等性请求处理，包括缓存命中和重复请求检测",observationPoints:["多次点击'执行支付'按钮，观察相同请求的缓存命中情况","注意第一次请求的执行时间较长，后续相同请求立即返回缓存结果","观察统计信息中各种状态请求的数量变化"],keyPoints:["相同的请求参数会生成相同的幂等性键","已完成的请求会直接返回缓存结果","正在进行的请求会等待完成而不是重复执行"],commonTraps:["幂等性键生成不稳定，相同请求产生不同的键","缓存无限增长导致内存泄漏","并发请求处理不当导致重复执行"],solutions:["使用稳定的键生成算法，对对象属性进行排序","设置合理的TTL和最大缓存大小","使用Promise缓存处理并发请求"],codeExample:c},{title:"并发请求测试",component:e.jsx(S,{}),description:"测试多个相同请求并发执行时的幂等性处理效果",observationPoints:["并发执行多个相同请求时，只有一个实际的API调用","其他请求都会等待第一个请求完成并返回相同结果","观察缓存命中率和实际API调用次数的对比"],keyPoints:["并发的相同请求只会执行一次实际操作","所有并发请求都会得到相同的结果","显著减少了服务器负载和响应时间"],commonTraps:["并发请求处理不当导致重复执行","Promise缓存管理错误导致内存泄漏","缺乏适当的错误处理机制"],solutions:["使用Promise缓存处理并发请求","实现适当的清理和超时机制","添加完善的错误处理和重试逻辑"],importantTips:["并发请求会共享同一个Promise实例","第一个请求失败时其他请求也会失败","合理设置并发请求的超时时间"],codeExample:s},{title:"键生成策略演示",component:e.jsx(P,{}),description:"展示不同类型请求的幂等性键生成策略和规则",observationPoints:["相同的请求参数总是生成相同的幂等性键","不同的请求参数会生成不同的幂等性键","客户端生成的键具有时间戳和随机性"],keyPoints:["基于请求内容的键确保相同操作的一致性","客户端生成的键适用于需要强制唯一性的场景","键生成算法需要考虑参数顺序和数据类型"],commonTraps:["对象属性顺序不一致导致不同的键","浮点数精度问题影响键的稳定性","忽略数据类型差异导致键冲突"],solutions:["对对象属性进行排序确保一致性","使用固定精度处理浮点数","在键生成时考虑数据类型信息"],importantTips:["相同的请求内容必须生成相同的键","键生成算法要考虑所有相关参数","客户端键适用于强制唯一性场景"],codeExample:t}],tutorial:{concepts:["幂等性是指多次执行相同操作的结果与执行一次的结果相同的特性","幂等性键是基于请求内容生成的唯一标识符，用于识别相同的请求","请求缓存存储已执行请求的结果，避免重复执行相同操作","并发控制确保同时到达的相同请求只执行一次","TTL（生存时间）机制防止缓存无限增长和过期数据问题"],steps:["创建IdempotencyManager实例，配置缓存参数","为每个请求生成幂等性键（基于方法、URL、参数等）","检查缓存中是否存在相同键的请求结果","如果存在且已完成，直接返回缓存结果","如果正在进行，等待该请求完成","如果不存在，执行新请求并缓存结果","定期清理过期的缓存条目"],tips:["幂等性键应该包含所有影响结果的请求参数","对象属性需要排序以确保键的一致性","设置合理的缓存TTL，平衡性能和数据新鲜度","失败的请求应该允许重试，不应该永久缓存","在高并发场景下使用Promise缓存避免重复执行"]},interview:{questions:[{question:"什么是幂等性？为什么在API设计中很重要？",answer:"幂等性是指多次执行相同操作的结果与执行一次的结果相同的特性。在API设计中很重要因为：1）防止重复操作导致的数据不一致；2）提高系统的可靠性和容错性；3）简化客户端的重试逻辑；4）减少不必要的资源消耗。常见的幂等操作包括GET、PUT、DELETE，而POST通常不是幂等的。"},{question:"如何设计一个有效的幂等性键生成策略？",answer:"有效的幂等性键生成策略应该考虑：1）包含所有影响结果的参数（方法、URL、请求体、用户ID等）；2）确保相同请求总是生成相同的键（对象属性排序、数据类型标准化）；3）键的唯一性和冲突概率；4）键的长度和性能考虑；5）安全性（避免敏感信息泄露）。可以使用哈希算法（如SHA-256）或组合多个字段来生成键。"},{question:"如何处理幂等性实现中的并发问题？",answer:"处理并发问题的方法：1）使用Promise缓存，让后续相同请求等待第一个请求完成；2）实现分布式锁确保同一时间只有一个请求在执行；3）使用原子操作和事务确保数据一致性；4）设计合理的重试和超时机制；5）考虑使用消息队列串行化处理相同请求。关键是确保相同的请求在任何时候都只执行一次。"},{question:"幂等性缓存的TTL应该如何设置？",answer:"TTL设置需要平衡多个因素：1）业务特性：支付等关键操作可能需要较长TTL（几小时到几天），查询操作可能只需要几分钟；2）数据变化频率：频繁变化的数据需要较短TTL；3）系统资源：内存限制影响可缓存的数据量；4）用户体验：过短的TTL可能导致重复执行，过长可能返回过期数据。通常设置为几分钟到几小时，并提供手动清除机制。"},{question:"在微服务架构中如何实现分布式幂等性？",answer:"分布式幂等性实现方案：1）使用分布式缓存（Redis）存储幂等性键和结果；2）在数据库层面使用唯一约束防止重复插入；3）实现分布式锁确保全局唯一性；4）使用消息队列的幂等性特性；5）在API网关层统一处理幂等性；6）设计幂等性令牌机制，客户端先获取令牌再执行操作。关键是确保所有服务实例共享相同的幂等性状态。"}],keyPoints:["幂等性是确保系统可靠性和数据一致性的重要机制","幂等性键的生成策略直接影响系统的正确性和性能","并发控制是幂等性实现中的关键技术挑战","合理的缓存管理策略平衡性能和资源使用","分布式环境下的幂等性需要考虑一致性和可用性"]},bestPractices:{dos:["基于请求内容生成稳定的幂等性键","对请求参数进行排序和标准化处理","使用Promise缓存处理并发的相同请求","设置合理的缓存TTL和大小限制","为失败的请求提供重试机制","实现完善的缓存清理和监控机制","在关键业务操作中强制使用幂等性"],donts:["不要在幂等性键中包含时间戳等变化的值","不要忽略对象属性顺序对键生成的影响","不要永久缓存失败的请求结果","不要在幂等性键中包含敏感信息","不要忽略缓存的内存管理和清理","不要在所有操作中盲目使用幂等性","不要忽略分布式环境下的一致性问题"],patterns:["单例模式：IdempotencyManager确保全局唯一的缓存管理","策略模式：支持不同的键生成和缓存策略","装饰器模式：为现有请求添加幂等性功能","观察者模式：监控缓存状态和清理事件","工厂模式：根据请求类型创建不同的幂等性处理器","代理模式：透明地为请求添加幂等性支持"]}})};export{K as default};
