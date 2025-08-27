var E=Object.defineProperty;var I=(o,t,s)=>t in o?E(o,t,{enumerable:!0,configurable:!0,writable:!0,value:s}):o[t]=s;var m=(o,t,s)=>I(o,typeof t!="symbol"?t+"":t,s);import{j as e,r as l}from"./index-Cnne2xOM.js";import{C as R}from"./ComponentTemplate-iqsAHbUA.js";class D{constructor(t,s={}){m(this,"baseURL");m(this,"defaultOptions");this.baseURL=t,this.defaultOptions=s}async create(){const t={baseURL:this.baseURL,options:{...this.defaultOptions},abortController:new AbortController,created:Date.now(),requestCount:0,lastError:null};return await new Promise(s=>setTimeout(s,100+Math.random()*200)),t}async validate(t){var i;if(!t||(i=t.abortController)!=null&&i.signal.aborted)return!1;const s=5*60*1e3;return!(Date.now()-t.created>s||t.requestCount>0&&(t.lastError?1:0)/t.requestCount>.5)}async destroy(t){t&&t.abortController&&t.abortController.abort(),await new Promise(s=>setTimeout(s,50))}async reset(t){t&&(t.abortController=new AbortController,t.lastError=null)}}class z{constructor(t,s={}){m(this,"config");m(this,"factory");m(this,"connections",new Map);m(this,"waitingQueue",[]);m(this,"stats");m(this,"evictionTimer");m(this,"destroyed",!1);this.factory=t,this.config={maxSize:10,minSize:2,maxIdleTime:5*60*1e3,maxWaitTime:10*1e3,validateOnBorrow:!0,validateOnReturn:!0,testOnIdle:!0,evictionInterval:30*1e3,...s},this.stats={totalConnections:0,activeConnections:0,idleConnections:0,totalBorrowed:0,totalReturned:0,totalCreated:0,totalDestroyed:0,borrowWaitTime:0,avgBorrowTime:0,maxBorrowTime:0,errorRate:0},this.startEviction(),this.ensureMinConnections()}async borrowConnection(){if(this.destroyed)throw new Error("Pool has been destroyed");const t=Date.now();try{const s=await this.getIdleConnection();if(s){const i=Date.now()-t;return this.updateBorrowStats(i),s}if(this.connections.size<this.config.maxSize){const i=await this.createConnection(),c=Date.now()-t;return this.updateBorrowStats(c),i}return await this.waitForConnection(t)}catch(s){throw new Error(`Failed to borrow connection: ${s instanceof Error?s.message:"Unknown error"}`)}}async returnConnection(t){if(this.destroyed){await this.destroyConnection(t);return}try{if(this.config.validateOnReturn&&!await this.factory.validate(t.connection)){await this.destroyConnection(t);return}if(await this.factory.reset(t.connection),t.borrowed=!1,t.lastUsed=Date.now(),this.stats.totalReturned++,this.updateStats(),this.waitingQueue.length>0){const s=this.waitingQueue.shift();t.borrowed=!0,t.borrowCount++,this.stats.totalBorrowed++,s.resolve(t)}}catch(s){console.error("Error returning connection:",s),await this.destroyConnection(t)}}getStats(){return this.updateStats(),{...this.stats}}getPoolState(){const t=Array.from(this.connections.values());return{total:t.length,active:t.filter(s=>s.borrowed).length,idle:t.filter(s=>!s.borrowed).length,waiting:this.waitingQueue.length,connections:t.map(s=>({id:s.id,borrowed:s.borrowed,valid:s.valid,age:Date.now()-s.created,idleTime:s.borrowed?0:Date.now()-s.lastUsed,borrowCount:s.borrowCount,errorCount:s.errorCount}))}}async clear(){for(;this.waitingQueue.length>0;)this.waitingQueue.shift().reject(new Error("Pool is being cleared"));const t=Array.from(this.connections.values());await Promise.all(t.map(s=>this.destroyConnection(s))),this.resetStats()}async destroy(){this.destroyed=!0,this.evictionTimer&&clearInterval(this.evictionTimer),await this.clear()}async warmUp(){const t=Math.min(this.config.minSize,this.config.maxSize),s=[];for(let i=this.connections.size;i<t;i++)s.push(this.createConnection().then(()=>{}));await Promise.all(s)}async getIdleConnection(){for(const t of this.connections.values())if(!t.borrowed&&t.valid){if(this.config.validateOnBorrow&&!await this.factory.validate(t.connection)){await this.destroyConnection(t);continue}return t.borrowed=!0,t.lastUsed=Date.now(),t.borrowCount++,this.stats.totalBorrowed++,t}return null}async createConnection(){const t=await this.factory.create(),s={id:this.generateId(),connection:t,created:Date.now(),lastUsed:Date.now(),borrowed:!0,valid:!0,borrowCount:1,errorCount:0};return this.connections.set(s.id,s),this.stats.totalCreated++,this.stats.totalBorrowed++,this.updateStats(),s}async waitForConnection(t){return new Promise((s,i)=>{const c=setTimeout(()=>{const a=this.waitingQueue.findIndex(r=>r.resolve===s);a!==-1&&this.waitingQueue.splice(a,1),i(new Error("Wait timeout"))},this.config.maxWaitTime);this.waitingQueue.push({resolve:a=>{clearTimeout(c);const r=Date.now()-t;this.updateBorrowStats(r),s(a)},reject:a=>{clearTimeout(c),i(a)},timestamp:Date.now()})})}async destroyConnection(t){try{await this.factory.destroy(t.connection)}catch(s){console.error("Error destroying connection:",s)}this.connections.delete(t.id),this.stats.totalDestroyed++,this.updateStats()}startEviction(){this.evictionTimer=setInterval(()=>{this.evictIdleConnections()},this.config.evictionInterval)}async evictIdleConnections(){const t=Date.now(),s=[];for(const r of this.connections.values())if(!r.borrowed){if(t-r.lastUsed>this.config.maxIdleTime){s.push(r);continue}if(this.config.testOnIdle)try{await this.factory.validate(r.connection)||s.push(r)}catch{s.push(r)}}const i=this.connections.size-s.length,c=Math.max(0,i-this.config.minSize),a=s.slice(0,c);await Promise.all(a.map(r=>this.destroyConnection(r)))}async ensureMinConnections(){for(;this.connections.size<this.config.minSize&&!this.destroyed;)try{const t=await this.createConnection();t.borrowed=!1}catch(t){console.error("Error creating minimum connections:",t);break}}updateBorrowStats(t){this.stats.borrowWaitTime+=t,this.stats.maxBorrowTime=Math.max(this.stats.maxBorrowTime,t),this.stats.totalBorrowed>0&&(this.stats.avgBorrowTime=this.stats.borrowWaitTime/this.stats.totalBorrowed)}updateStats(){const t=Array.from(this.connections.values());this.stats.totalConnections=t.length,this.stats.activeConnections=t.filter(c=>c.borrowed).length,this.stats.idleConnections=t.filter(c=>!c.borrowed).length;const s=t.reduce((c,a)=>c+a.errorCount,0),i=t.reduce((c,a)=>c+a.borrowCount,0);this.stats.errorRate=i>0?s/i:0}resetStats(){this.stats={totalConnections:0,activeConnections:0,idleConnections:0,totalBorrowed:0,totalReturned:0,totalCreated:0,totalDestroyed:0,borrowWaitTime:0,avgBorrowTime:0,maxBorrowTime:0,errorRate:0}}generateId(){return`conn_${Date.now()}_${Math.random().toString(36).substr(2,9)}`}}const B=()=>{const[o]=l.useState(()=>{const n=new D("https://jsonplaceholder.typicode.com");return new z(n,{maxSize:5,minSize:2,maxIdleTime:3e4,maxWaitTime:5e3,validateOnBorrow:!0,evictionInterval:1e4})}),[t,s]=l.useState(o.getStats()),[i,c]=l.useState(o.getPoolState()),[a,r]=l.useState([]),[y,x]=l.useState(!1),[f,v]=l.useState({maxSize:5,minSize:2,concurrentRequests:3}),h=l.useCallback(()=>{s(o.getStats()),c(o.getPoolState())},[o]);l.useEffect(()=>{const n=setInterval(h,1e3);return()=>clearInterval(n)},[h]);const b=l.useCallback(async n=>{const g={id:n,type:"request",status:"borrowing",startTime:Date.now()};r(w=>[...w,g]);try{const w=await o.borrowConnection();if(r(u=>u.map(d=>d.id===n?{...d,status:"executing"}:d)),await new Promise(u=>setTimeout(u,1e3+Math.random()*2e3)),Math.random()<.1)throw new Error("Request failed");await o.returnConnection(w),r(u=>u.map(d=>d.id===n?{...d,status:"completed",endTime:Date.now()}:d))}catch(w){r(u=>u.map(d=>d.id===n?{...d,status:"error",endTime:Date.now(),error:w instanceof Error?w.message:"Unknown error"}:d))}},[o]),p=l.useCallback(async()=>{const n=`req_${Date.now()}_${Math.random().toString(36).substr(2,4)}`;await b(n),h()},[b,h]),j=l.useCallback(async()=>{x(!0);try{const n=Array.from({length:f.concurrentRequests},(g,w)=>{const u=`batch_${Date.now()}_${w}`;return b(u)});await Promise.all(n)}finally{x(!1),h()}},[f.concurrentRequests,b,h]),C=l.useCallback(async()=>{x(!0);try{await o.warmUp()}finally{x(!1),h()}},[o,h]),N=l.useCallback(async()=>{x(!0);try{await o.clear(),r([])}finally{x(!1),h()}},[o,h]),T=l.useCallback(()=>{r([])},[]);l.useEffect(()=>()=>o.destroy(),[o]);const S=n=>{switch(n){case"completed":return"text-green-600";case"error":return"text-red-600";case"executing":return"text-blue-600";case"borrowing":return"text-yellow-600";default:return"text-gray-600"}},P=n=>{switch(n){case"completed":return"bg-green-100";case"error":return"bg-red-100";case"executing":return"bg-blue-100";case"borrowing":return"bg-yellow-100";default:return"bg-gray-100"}};return e.jsx("div",{className:"space-y-4",children:e.jsxs("div",{className:"bg-white p-6 rounded-lg border",children:[e.jsx("h3",{className:"text-lg font-semibold mb-4",children:"请求池管理演示"}),e.jsxs("div",{className:"grid grid-cols-1 lg:grid-cols-2 gap-6",children:[e.jsxs("div",{className:"space-y-4",children:[e.jsxs("div",{children:[e.jsx("h4",{className:"font-medium text-gray-900 mb-2",children:"池配置"}),e.jsxs("div",{className:"space-y-2",children:[e.jsxs("div",{children:[e.jsx("label",{className:"block text-sm text-gray-600 mb-1",children:"最大连接数"}),e.jsx("input",{type:"number",value:f.maxSize,onChange:n=>v(g=>({...g,maxSize:parseInt(n.target.value)||1})),min:"1",max:"20",className:"w-full p-2 border border-gray-300 rounded-md"})]}),e.jsxs("div",{children:[e.jsx("label",{className:"block text-sm text-gray-600 mb-1",children:"最小连接数"}),e.jsx("input",{type:"number",value:f.minSize,onChange:n=>v(g=>({...g,minSize:parseInt(n.target.value)||0})),min:"0",max:f.maxSize,className:"w-full p-2 border border-gray-300 rounded-md"})]}),e.jsxs("div",{children:[e.jsx("label",{className:"block text-sm text-gray-600 mb-1",children:"并发请求数"}),e.jsx("input",{type:"number",value:f.concurrentRequests,onChange:n=>v(g=>({...g,concurrentRequests:parseInt(n.target.value)||1})),min:"1",max:"10",className:"w-full p-2 border border-gray-300 rounded-md"})]})]})]}),e.jsxs("div",{children:[e.jsx("h4",{className:"font-medium text-gray-900 mb-2",children:"操作"}),e.jsxs("div",{className:"space-y-2",children:[e.jsxs("div",{className:"flex space-x-2",children:[e.jsx("button",{onClick:p,disabled:y,className:"flex-1 px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 disabled:bg-gray-400",children:"单个请求"}),e.jsx("button",{onClick:j,disabled:y,className:"flex-1 px-4 py-2 bg-green-600 text-white rounded-md hover:bg-green-700 disabled:bg-gray-400",children:"并发请求"})]}),e.jsxs("div",{className:"flex space-x-2",children:[e.jsx("button",{onClick:C,disabled:y,className:"flex-1 px-4 py-2 bg-yellow-600 text-white rounded-md hover:bg-yellow-700 disabled:bg-gray-400",children:"预热池"}),e.jsx("button",{onClick:N,disabled:y,className:"flex-1 px-4 py-2 bg-red-600 text-white rounded-md hover:bg-red-700 disabled:bg-gray-400",children:"清空池"})]}),e.jsx("button",{onClick:T,className:"w-full px-4 py-2 bg-gray-600 text-white rounded-md hover:bg-gray-700",children:"清空操作记录"})]})]}),e.jsxs("div",{children:[e.jsx("h4",{className:"font-medium text-gray-900 mb-2",children:"池统计"}),e.jsxs("div",{className:"bg-gray-50 p-4 rounded-md space-y-2",children:[e.jsxs("div",{className:"flex justify-between",children:[e.jsx("span",{className:"text-sm text-gray-600",children:"总连接数:"}),e.jsx("span",{className:"text-sm font-medium",children:t.totalConnections})]}),e.jsxs("div",{className:"flex justify-between",children:[e.jsx("span",{className:"text-sm text-gray-600",children:"活跃连接:"}),e.jsx("span",{className:"text-sm font-medium text-blue-600",children:t.activeConnections})]}),e.jsxs("div",{className:"flex justify-between",children:[e.jsx("span",{className:"text-sm text-gray-600",children:"空闲连接:"}),e.jsx("span",{className:"text-sm font-medium text-green-600",children:t.idleConnections})]}),e.jsxs("div",{className:"flex justify-between",children:[e.jsx("span",{className:"text-sm text-gray-600",children:"总借用:"}),e.jsx("span",{className:"text-sm font-medium",children:t.totalBorrowed})]}),e.jsxs("div",{className:"flex justify-between",children:[e.jsx("span",{className:"text-sm text-gray-600",children:"总归还:"}),e.jsx("span",{className:"text-sm font-medium",children:t.totalReturned})]}),e.jsxs("div",{className:"flex justify-between",children:[e.jsx("span",{className:"text-sm text-gray-600",children:"平均借用时间:"}),e.jsxs("span",{className:"text-sm font-medium",children:[Math.round(t.avgBorrowTime),"ms"]})]}),e.jsxs("div",{className:"flex justify-between",children:[e.jsx("span",{className:"text-sm text-gray-600",children:"错误率:"}),e.jsxs("span",{className:"text-sm font-medium text-red-600",children:[(t.errorRate*100).toFixed(1),"%"]})]})]})]})]}),e.jsxs("div",{className:"space-y-4",children:[e.jsxs("div",{children:[e.jsxs("h4",{className:"font-medium text-gray-900 mb-2",children:["连接状态 (",i.total,")"]}),e.jsx("div",{className:"bg-gray-50 p-4 rounded-md max-h-40 overflow-y-auto",children:i.connections.length===0?e.jsx("div",{className:"text-sm text-gray-500 text-center py-2",children:"无连接"}):e.jsx("div",{className:"space-y-2",children:i.connections.map(n=>e.jsxs("div",{className:"bg-white p-2 rounded border",children:[e.jsxs("div",{className:"flex items-center justify-between mb-1",children:[e.jsx("span",{className:"text-xs font-mono text-gray-600",children:n.id.slice(-8)}),e.jsx("span",{className:`px-2 py-1 text-xs rounded ${n.borrowed?"bg-blue-100 text-blue-600":"bg-green-100 text-green-600"}`,children:n.borrowed?"使用中":"空闲"})]}),e.jsxs("div",{className:"text-xs text-gray-500 space-y-1",children:[e.jsxs("div",{children:["年龄: ",Math.round(n.age/1e3),"s"]}),e.jsxs("div",{children:["空闲: ",Math.round(n.idleTime/1e3),"s"]}),e.jsxs("div",{children:["使用次数: ",n.borrowCount]})]})]},n.id))})})]}),e.jsxs("div",{children:[e.jsxs("h4",{className:"font-medium text-gray-900 mb-2",children:["操作记录 (",a.length,")"]}),e.jsx("div",{className:"bg-gray-50 p-4 rounded-md max-h-60 overflow-y-auto",children:a.length===0?e.jsx("div",{className:"text-sm text-gray-500 text-center py-2",children:"暂无操作记录"}):e.jsxs("div",{className:"space-y-1",children:[a.slice(-20).reverse().map(n=>e.jsxs("div",{className:"flex items-center justify-between text-sm",children:[e.jsxs("div",{className:"flex items-center space-x-2 flex-1",children:[e.jsx("span",{className:`px-2 py-1 text-xs rounded ${P(n.status)} ${S(n.status)}`,children:n.status}),e.jsx("span",{className:"text-xs text-gray-600 font-mono",children:n.id.slice(-8)})]}),e.jsx("div",{className:"text-xs text-gray-500",children:n.endTime?`${n.endTime-n.startTime}ms`:"..."})]},n.id)),a.length>20&&e.jsxs("div",{className:"text-xs text-gray-500 text-center pt-2",children:["还有 ",a.length-20," 条记录..."]})]})})]})]})]})]})})},O=()=>{const o={title:"请求池实现",language:"typescript",code:`// 请求池管理器
class RequestPool {
  private config: PoolConfig;
  private factory: ConnectionFactory;
  private connections: Map<string, PooledConnection> = new Map();
  private waitingQueue: Array<{
    resolve: (connection: PooledConnection) => void;
    reject: (error: Error) => void;
    timestamp: number;
  }> = [];

  constructor(factory: ConnectionFactory, config: Partial<PoolConfig> = {}) {
    this.factory = factory;
    this.config = {
      maxSize: 10,
      minSize: 2,
      maxIdleTime: 5 * 60 * 1000,
      maxWaitTime: 10 * 1000,
      validateOnBorrow: true,
      validateOnReturn: true,
      testOnIdle: true,
      evictionInterval: 30 * 1000,
      ...config
    };

    this.startEviction();
    this.ensureMinConnections();
  }

  // 借用连接
  async borrowConnection(): Promise<PooledConnection> {
    if (this.destroyed) {
      throw new Error('Pool has been destroyed');
    }

    const startTime = Date.now();

    // 尝试获取空闲连接
    const connection = await this.getIdleConnection();
    if (connection) {
      return connection;
    }

    // 如果没有空闲连接且未达到最大数量，创建新连接
    if (this.connections.size < this.config.maxSize) {
      return await this.createConnection();
    }

    // 等待连接可用
    return await this.waitForConnection(startTime);
  }

  // 归还连接
  async returnConnection(connection: PooledConnection): Promise<void> {
    // 验证连接
    if (this.config.validateOnReturn) {
      const isValid = await this.factory.validate(connection.connection);
      if (!isValid) {
        await this.destroyConnection(connection);
        return;
      }
    }

    // 重置连接状态
    await this.factory.reset(connection.connection);

    connection.borrowed = false;
    connection.lastUsed = Date.now();

    // 处理等待队列
    if (this.waitingQueue.length > 0) {
      const waiter = this.waitingQueue.shift()!;
      connection.borrowed = true;
      waiter.resolve(connection);
    }
  }

  // 获取空闲连接
  private async getIdleConnection(): Promise<PooledConnection | null> {
    for (const connection of this.connections.values()) {
      if (!connection.borrowed && connection.valid) {
        if (this.config.validateOnBorrow) {
          const isValid = await this.factory.validate(connection.connection);
          if (!isValid) {
            await this.destroyConnection(connection);
            continue;
          }
        }

        connection.borrowed = true;
        connection.lastUsed = Date.now();
        return connection;
      }
    }
    return null;
  }

  // 清理空闲连接
  private async evictIdleConnections(): Promise<void> {
    const now = Date.now();
    const connectionsToEvict: PooledConnection[] = [];

    for (const connection of this.connections.values()) {
      if (!connection.borrowed) {
        const idleTime = now - connection.lastUsed;

        // 检查是否超过最大空闲时间
        if (idleTime > this.config.maxIdleTime) {
          connectionsToEvict.push(connection);
          continue;
        }

        // 测试空闲连接
        if (this.config.testOnIdle) {
          const isValid = await this.factory.validate(connection.connection);
          if (!isValid) {
            connectionsToEvict.push(connection);
          }
        }
      }
    }

    // 确保不低于最小连接数
    const currentIdle = this.connections.size - connectionsToEvict.length;
    const maxEvict = Math.max(0, currentIdle - this.config.minSize);
    const toEvict = connectionsToEvict.slice(0, maxEvict);

    await Promise.all(toEvict.map(conn => this.destroyConnection(conn)));
  }
}`,highlights:[25,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45,46,47,48,49,50,51,52,53,54,55,56,57,58,59,60,61,62,63,64,65,66,67,68,69,70,71,72,73,74,75,76,77,78,79,80,81,82,83,84,85,86,87,88,89,90,91,92,93,94,95,96,97,98,99,100]};return e.jsx(R,{title:"请求池管理",description:"实现高效的连接池管理，支持连接复用、生命周期管理和资源优化。",overview:e.jsxs("div",{className:"space-y-4",children:[e.jsxs("div",{className:"bg-blue-50 p-6 rounded-lg",children:[e.jsx("h3",{className:"text-lg font-semibold text-blue-900 mb-3",children:"🔍 核心概念"}),e.jsxs("ul",{className:"space-y-2 text-blue-800",children:[e.jsxs("li",{children:[e.jsx("strong",{children:"连接池:"})," 预先创建和管理一组可复用的连接"]}),e.jsxs("li",{children:[e.jsx("strong",{children:"连接复用:"})," 避免频繁创建和销毁连接的开销"]}),e.jsxs("li",{children:[e.jsx("strong",{children:"生命周期管理:"})," 管理连接的创建、使用、空闲和销毁"]}),e.jsxs("li",{children:[e.jsx("strong",{children:"资源优化:"})," 合理分配和回收网络资源"]})]})]}),e.jsxs("div",{className:"bg-green-50 p-6 rounded-lg",children:[e.jsx("h3",{className:"text-lg font-semibold text-green-900 mb-3",children:"✨ 主要优势"}),e.jsxs("ul",{className:"space-y-2 text-green-800",children:[e.jsxs("li",{children:[e.jsx("strong",{children:"性能提升:"})," 减少连接建立和销毁的开销"]}),e.jsxs("li",{children:[e.jsx("strong",{children:"资源控制:"})," 限制并发连接数，避免资源耗尽"]}),e.jsxs("li",{children:[e.jsx("strong",{children:"连接复用:"})," 提高连接利用率，减少网络延迟"]}),e.jsxs("li",{children:[e.jsx("strong",{children:"自动管理:"})," 自动处理连接的生命周期和清理"]})]})]}),e.jsxs("div",{className:"bg-yellow-50 p-6 rounded-lg",children:[e.jsx("h3",{className:"text-lg font-semibold text-yellow-900 mb-3",children:"🎯 适用场景"}),e.jsxs("ul",{className:"space-y-2 text-yellow-800",children:[e.jsxs("li",{children:[e.jsx("strong",{children:"高频请求:"})," 需要频繁发送HTTP请求的应用"]}),e.jsxs("li",{children:[e.jsx("strong",{children:"数据库连接:"})," 数据库连接池管理"]}),e.jsxs("li",{children:[e.jsx("strong",{children:"微服务调用:"})," 服务间的连接复用"]}),e.jsxs("li",{children:[e.jsx("strong",{children:"长连接管理:"})," WebSocket等长连接的池化管理"]})]})]}),e.jsxs("div",{className:"bg-red-50 p-6 rounded-lg",children:[e.jsx("h3",{className:"text-lg font-semibold text-red-900 mb-3",children:"⚠️ 注意事项"}),e.jsxs("ul",{className:"space-y-2 text-red-800",children:[e.jsxs("li",{children:[e.jsx("strong",{children:"池大小设置:"})," ","根据并发需求合理设置最大和最小连接数"]}),e.jsxs("li",{children:[e.jsx("strong",{children:"连接验证:"})," 定期验证连接的有效性"]}),e.jsxs("li",{children:[e.jsx("strong",{children:"超时处理:"})," 设置合理的获取连接超时时间"]}),e.jsxs("li",{children:[e.jsx("strong",{children:"资源清理:"})," 确保连接正确释放和清理"]})]})]})]}),examples:[{title:"请求池管理演示",component:e.jsx(B,{}),description:"演示请求池的连接管理功能，包括连接借用、归还、生命周期管理和统计监控。",observationPoints:["池会自动维护最小连接数","连接可以被多个请求复用","空闲连接会被定期清理","并发请求会排队等待可用连接","统计信息显示池的使用情况"],keyPoints:["连接池自动管理连接的生命周期","支持连接验证和自动清理","提供完整的统计和监控功能","实现了高效的连接复用机制","包含等待队列和超时处理"],commonTraps:["池大小设置不合理导致性能问题","连接泄漏导致资源耗尽","没有连接验证导致使用无效连接","忽略连接的超时和清理"],solutions:["根据并发需求动态调整池大小","实现完整的连接生命周期管理","添加连接验证和健康检查","设置合理的超时和清理策略"],codeExample:o}],tutorial:{concepts:["连接池是预先创建和管理连接的容器","连接复用避免了频繁的创建和销毁开销","生命周期管理确保连接的正确使用","资源限制防止系统过载","自动清理维护池的健康状态"],steps:["设计连接和池的数据结构","实现连接工厂接口","创建连接池管理器","实现连接借用和归还逻辑","添加连接验证和清理机制","实现等待队列和超时处理","添加统计和监控功能","处理异常和错误情况","优化性能和资源使用","测试各种使用场景"],tips:["根据应用特点设置合理的池参数","实现连接的健康检查机制","监控池的使用情况和性能指标","考虑连接的预热和懒加载","处理连接异常和网络中断","提供池状态的可视化监控"]},interview:{questions:[{question:"什么是连接池？为什么需要连接池？",answer:"连接池是预先创建和管理一组可复用连接的容器。需要连接池的原因：1) 性能优化：避免频繁创建和销毁连接的开销；2) 资源控制：限制并发连接数，防止资源耗尽；3) 连接复用：提高连接利用率，减少网络延迟；4) 管理简化：统一管理连接的生命周期；5) 稳定性：避免连接数过多导致的系统不稳定。"},{question:"如何设计一个高效的连接池？",answer:"高效连接池的设计要点：1) 池参数：合理设置最大、最小连接数和超时时间；2) 生命周期：管理连接的创建、借用、归还、清理；3) 验证机制：借用和归还时验证连接有效性；4) 等待队列：处理连接不足时的请求排队；5) 自动清理：定期清理空闲和无效连接；6) 监控统计：提供使用情况和性能指标；7) 异常处理：处理连接异常和网络中断。"},{question:"连接池中的连接验证有哪些策略？",answer:"连接验证策略包括：1) 借用时验证：获取连接时检查有效性，确保可用；2) 归还时验证：归还连接时检查状态，决定是否保留；3) 空闲时验证：定期检查空闲连接，清理无效连接；4) 心跳检测：定期发送心跳包检查连接状态；5) 超时检测：检查连接是否超过最大生存时间；6) 错误计数：统计连接错误次数，超过阈值则销毁；7) 健康检查：执行特定的健康检查逻辑。"},{question:"如何处理连接池中的异常情况？",answer:"异常处理策略：1) 连接创建失败：重试机制、降级策略、错误上报；2) 连接验证失败：销毁无效连接、创建新连接；3) 获取连接超时：队列管理、超时处理、负载均衡；4) 网络中断：连接重建、故障转移、状态恢复；5) 资源泄漏：连接跟踪、自动回收、监控告警；6) 池满异常：动态扩容、请求拒绝、优先级处理；7) 系统过载：熔断机制、限流策略、资源保护。"}],keyPoints:["连接池是高性能应用的重要基础设施","合理的池参数设置直接影响性能","连接验证确保池中连接的可用性","生命周期管理是连接池的核心","监控和统计帮助优化池的使用","异常处理确保系统的稳定性"]},bestPractices:{dos:["根据并发需求合理设置池的大小参数","实现完整的连接生命周期管理","添加连接验证和健康检查机制","提供详细的统计和监控功能","实现优雅的连接获取和释放","处理各种异常和边界情况","定期清理空闲和无效连接","监控池的使用情况和性能指标"],donts:["不要设置过大的池导致资源浪费","不要忽略连接的验证和清理","不要忘记处理连接获取超时","不要在高并发下使用同步操作","不要忽略连接的错误处理","不要缺少池状态的监控","不要在所有场景使用相同配置","不要忽略连接池的预热和关闭"],patterns:["对象池模式：通用的资源池化管理","工厂模式：统一的连接创建接口","代理模式：透明的连接使用代理","观察者模式：池状态变化的通知","策略模式：不同的验证和清理策略","单例模式：全局唯一的池实例","装饰器模式：连接功能的增强","适配器模式：不同连接类型的适配"]}})};export{O as default};
