var M=Object.defineProperty;var D=(l,s,r)=>s in l?M(l,s,{enumerable:!0,configurable:!0,writable:!0,value:r}):l[s]=r;var g=(l,s,r)=>D(l,typeof s!="symbol"?s+"":s,r);import{j as e,r as c}from"./index-Cnne2xOM.js";import{C as z}from"./ComponentTemplate-iqsAHbUA.js";class F{constructor(s={}){g(this,"config");g(this,"entries",[]);g(this,"buffer",[]);g(this,"flushTimer");g(this,"listeners",new Set);g(this,"stats");g(this,"levelPriority",{debug:0,info:1,warn:2,error:3,fatal:4});this.config={enabled:!0,level:"info",maxEntries:1e3,bufferSize:50,flushInterval:5e3,includeStack:!0,includeMetadata:!0,sensitiveFields:["password","token","authorization","cookie"],formatters:[this.createDefaultFormatter()],transports:[this.createConsoleTransport()],filters:[],...s},this.stats=this.initializeStats(),this.config.enabled&&this.startFlushTimer()}debug(s,r,t="general"){this.log("debug",s,r,t)}info(s,r,t="general"){this.log("info",s,r,t)}warn(s,r,t="general"){this.log("warn",s,r,t)}error(s,r,t,i="general"){this.log("error",s,{...t,error:r},i)}fatal(s,r,t,i="general"){this.log("fatal",s,{...t,error:r},i)}logRequestStart(s,r,t,i){this.log("info",`Request started: ${t} ${r}`,{...i,requestId:s,url:r,method:t,phase:"start"},"request")}logRequestSuccess(s,r,t,i,n,d){this.log("info",`Request completed: ${t} ${r} - ${i} (${n}ms)`,{...d,requestId:s,url:r,method:t,statusCode:i,duration:n,phase:"success"},"request")}logRequestError(s,r,t,i,n,d){this.log("error",`Request failed: ${t} ${r}`,{...d,requestId:s,url:r,method:t,error:i,duration:n,phase:"error"},"request")}logRequestRetry(s,r,t,i,n,d){this.log("warn",`Request retry: ${t} ${r} (attempt ${i}) - ${n}`,{...d,requestId:s,url:r,method:t,retryCount:i,reason:n,phase:"retry"},"request")}logCacheOperation(s,r,t){const i=s==="hit"?"debug":"info";this.log(i,`Cache ${s}: ${r}`,{...t,operation:s,key:r},"cache")}logPerformance(s,r,t="ms",i){this.log("info",`Performance: ${s} = ${r}${t}`,{...i,metric:s,value:r,unit:t},"performance")}logSecurity(s,r,t){const i=r==="critical"?"fatal":r==="high"?"error":r==="medium"?"warn":"info";this.log(i,`Security event: ${s}`,{...t,event:s,severity:r},"security")}log(s,r,t,i="general"){if(!this.config.enabled||!this.shouldLog(s))return;const n={id:this.generateId(),timestamp:Date.now(),level:s,message:r,category:i,...this.extractRequestInfo(t),metadata:this.config.includeMetadata?this.sanitizeMetadata(t):void 0,tags:this.extractTags(t),...this.extractTraceInfo(t)};this.applyFilters(n)&&this.addEntry(n)}addEntry(s){this.buffer.push(s),this.updateStats(s),this.buffer.length>=this.config.bufferSize&&this.flush(),this.notifyListeners([s])}async flush(){if(this.buffer.length===0)return;const s=[...this.buffer];if(this.buffer=[],this.entries.push(...s),this.entries.length>this.config.maxEntries){const r=this.entries.length-this.config.maxEntries;this.entries.splice(0,r)}await this.sendToTransports(s)}async sendToTransports(s){const r=this.config.transports.filter(t=>t.enabled).map(async t=>{const i=s.filter(n=>this.levelPriority[n.level]>=this.levelPriority[t.level]);if(i.length>0)try{await t.send(i)}catch(n){console.error(`Transport ${t.name} failed:`,n)}});await Promise.allSettled(r)}shouldLog(s){return this.levelPriority[s]>=this.levelPriority[this.config.level]}applyFilters(s){return this.config.filters.every(r=>r.filter(s))}extractRequestInfo(s){return s?{requestId:s.requestId,url:s.url,method:s.method,statusCode:s.statusCode,duration:s.duration,userId:s.userId,sessionId:s.sessionId}:{}}extractTraceInfo(s){return s?{traceId:s.traceId,spanId:s.spanId}:{}}extractTags(s){if(!(!s||!s.tags))return Array.isArray(s.tags)?s.tags:[s.tags]}sanitizeMetadata(s){if(!s)return;const r={...s};return this.config.sensitiveFields.forEach(t=>{t in r&&(r[t]="[REDACTED]")}),r}updateStats(s){if(this.stats.total++,this.stats.byLevel[s.level]++,this.stats.byCategory[s.category]=(this.stats.byCategory[s.category]||0)+1,(s.level==="error"||s.level==="fatal")&&(this.stats.recentErrors.push(s),this.stats.recentErrors.length>10&&this.stats.recentErrors.shift()),s.duration){const i=this.stats.avgDuration*(this.stats.total-1)+s.duration;this.stats.avgDuration=i/this.stats.total}this.stats.errorRate=(this.stats.byLevel.error+this.stats.byLevel.fatal)/this.stats.total*100;const r=Math.floor(s.timestamp/6e4)*6e4,t=this.stats.timeline.find(i=>i.timestamp===r);t?t.count++:(this.stats.timeline.push({timestamp:r,count:1,level:s.level}),this.stats.timeline.length>60&&this.stats.timeline.shift()),this.stats.topCategories=Object.entries(this.stats.byCategory).sort(([,i],[,n])=>n-i).slice(0,10).map(([i,n])=>({category:i,count:n}))}initializeStats(){return{total:0,byLevel:{debug:0,info:0,warn:0,error:0,fatal:0},byCategory:{},errorRate:0,avgDuration:0,recentErrors:[],topCategories:[],timeline:[]}}startFlushTimer(){this.flushTimer=setInterval(()=>{this.flush()},this.config.flushInterval)}notifyListeners(s){this.listeners.forEach(r=>{try{r(s)}catch(t){console.error("Log listener error:",t)}})}generateId(){return`${Date.now()}_${Math.random().toString(36).substr(2,9)}`}createDefaultFormatter(){return{name:"default",format:s=>{const r=new Date(s.timestamp).toISOString(),t=s.level.toUpperCase().padEnd(5),i=s.category.padEnd(10);let n=`[${r}] ${t} ${i} ${s.message}`;return s.requestId&&(n+=` [${s.requestId}]`),s.duration&&(n+=` (${s.duration}ms)`),s.metadata&&Object.keys(s.metadata).length>0&&(n+=` ${JSON.stringify(s.metadata)}`),n}}}createConsoleTransport(){return{name:"console",level:"debug",enabled:!0,send:async s=>{s.forEach(r=>{const t=this.config.formatters[0].format(r);switch(r.level){case"debug":console.debug(t);break;case"info":console.info(t);break;case"warn":console.warn(t);break;case"error":case"fatal":console.error(t);break}})}}}getEntries(s,r,t){let i=this.entries;return r&&(i=i.filter(n=>n.level===r)),t&&(i=i.filter(n=>n.category===t)),s?i.slice(-s):i}getStats(){return{...this.stats}}search(s,r={}){let t=this.entries;if(r.startTime&&(t=t.filter(i=>i.timestamp>=r.startTime)),r.endTime&&(t=t.filter(i=>i.timestamp<=r.endTime)),r.level&&(t=t.filter(i=>i.level===r.level)),r.category&&(t=t.filter(i=>i.category===r.category)),s){const i=s.toLowerCase();t=t.filter(n=>n.message.toLowerCase().includes(i)||n.category.toLowerCase().includes(i)||n.requestId&&n.requestId.toLowerCase().includes(i)||n.url&&n.url.toLowerCase().includes(i))}return r.limit?t.slice(-r.limit):t}export(s="json"){switch(s){case"json":return JSON.stringify(this.entries,null,2);case"csv":const r=["timestamp","level","category","message","requestId","url","method","statusCode","duration"],t=this.entries.map(i=>[new Date(i.timestamp).toISOString(),i.level,i.category,i.message,i.requestId||"",i.url||"",i.method||"",i.statusCode||"",i.duration||""]);return[r,...t].map(i=>i.join(",")).join(`
`);case"txt":return this.entries.map(i=>this.config.formatters[0].format(i)).join(`
`);default:return JSON.stringify(this.entries,null,2)}}clear(){this.entries=[],this.buffer=[],this.stats=this.initializeStats()}addListener(s){this.listeners.add(s)}removeListener(s){this.listeners.delete(s)}addTransport(s){this.config.transports.push(s)}removeTransport(s){const r=this.config.transports.findIndex(t=>t.name===s);return r>=0?(this.config.transports.splice(r,1),!0):!1}addFilter(s){this.config.filters.push(s)}removeFilter(s){const r=this.config.filters.findIndex(t=>t.name===s);return r>=0?(this.config.filters.splice(r,1),!0):!1}updateConfig(s){this.config={...this.config,...s},!this.config.enabled&&this.flushTimer?(clearInterval(this.flushTimer),this.flushTimer=void 0):this.config.enabled&&!this.flushTimer&&this.startFlushTimer()}destroy(){this.flushTimer&&clearInterval(this.flushTimer),this.flush(),this.clear(),this.listeners.clear()}}const O=()=>{const[l]=c.useState(()=>new F({enabled:!0,level:"debug",maxEntries:500,bufferSize:10,flushInterval:2e3,includeStack:!0,includeMetadata:!0})),[s,r]=c.useState([]),[t,i]=c.useState(l.getStats()),[n,d]=c.useState({level:"",category:"",search:""}),[b,S]=c.useState(!1),m=c.useRef(),x=c.useCallback(()=>{const a=l.getEntries(50,n.level||void 0,n.category||void 0);r(a),i(l.getStats())},[l,n]);c.useEffect(()=>{const a=()=>{x()};return l.addListener(a),x(),()=>{l.removeListener(a)}},[l,x]);const L=c.useCallback(()=>{const a=["/api/users","/api/posts","/api/comments","/api/products"],o=["GET","POST","PUT","DELETE"],h=["request","cache","performance","security","general"],f=["debug","info","warn","error"],u=a[Math.floor(Math.random()*a.length)],p=o[Math.floor(Math.random()*o.length)],j=h[Math.floor(Math.random()*h.length)],y=f[Math.floor(Math.random()*f.length)],R=`req_${Date.now()}_${Math.random().toString(36).substr(2,6)}`,T={debug:[`Debug info for ${p} ${u}`,"Cache lookup performed","Validation passed"],info:[`${p} ${u} completed successfully`,"Cache hit for key","User authenticated"],warn:[`Slow response for ${p} ${u}`,"Cache miss for key","Rate limit approaching"],error:[`${p} ${u} failed`,"Database connection error","Authentication failed"]},w=T[y][Math.floor(Math.random()*T[y].length)],N={requestId:R,url:u,method:p,userId:Math.floor(Math.random()*1e3),sessionId:`sess_${Math.random().toString(36).substr(2,8)}`,duration:Math.floor(Math.random()*2e3)+50,statusCode:y==="error"?500:200};switch(y){case"debug":l.debug(w,N,j);break;case"info":l.info(w,N,j);break;case"warn":l.warn(w,N,j);break;case"error":l.error(w,new Error("Simulated error"),N,j);break}},[l]),$=c.useCallback(()=>{b?(m.current&&clearInterval(m.current),S(!1)):(m.current=setInterval(L,1e3),S(!0))},[b,L]),v=c.useCallback(a=>{const o=`req_${Date.now()}_${Math.random().toString(36).substr(2,6)}`;switch(a){case"request":l.logRequestStart(o,"/api/test","GET",{userId:123}),setTimeout(()=>{l.logRequestSuccess(o,"/api/test","GET",200,150,{responseSize:1024})},150);break;case"error":l.logRequestError(o,"/api/error","POST",new Error("Network timeout"),5e3,{retry:3});break;case"cache":l.logCacheOperation("hit","user:123",{ttl:3600});break;case"performance":l.logPerformance("response_time",Math.floor(Math.random()*1e3)+100,"ms",{endpoint:"/api/slow"});break;case"security":l.logSecurity("Failed login attempt","medium",{ip:"192.168.1.100",userAgent:"Mozilla/5.0"});break}},[l]),k=c.useCallback(()=>{l.clear(),x()},[l,x]),C=c.useCallback(a=>{const o=l.export(a),h=new Blob([o],{type:"text/plain"}),f=URL.createObjectURL(h),u=document.createElement("a");u.href=f,u.download=`logs.${a}`,u.click(),URL.revokeObjectURL(f)},[l]);c.useEffect(()=>()=>{m.current&&clearInterval(m.current),l.destroy()},[l]);const q=a=>{switch(a){case"debug":return"text-gray-600 bg-gray-100";case"info":return"text-blue-600 bg-blue-100";case"warn":return"text-yellow-600 bg-yellow-100";case"error":return"text-red-600 bg-red-100";case"fatal":return"text-red-800 bg-red-200";default:return"text-gray-600 bg-gray-100"}},E=a=>{switch(a){case"request":return"text-green-600 bg-green-100";case"cache":return"text-purple-600 bg-purple-100";case"performance":return"text-orange-600 bg-orange-100";case"security":return"text-red-600 bg-red-100";default:return"text-gray-600 bg-gray-100"}},I=c.useMemo(()=>{let a=s;if(n.search){const o=n.search.toLowerCase();a=a.filter(h=>h.message.toLowerCase().includes(o)||h.category.toLowerCase().includes(o)||h.requestId&&h.requestId.toLowerCase().includes(o))}return a},[s,n.search]);return e.jsx("div",{className:"space-y-4",children:e.jsxs("div",{className:"bg-white p-6 rounded-lg border",children:[e.jsx("h3",{className:"text-lg font-semibold mb-4",children:"请求日志演示"}),e.jsxs("div",{className:"grid grid-cols-1 lg:grid-cols-4 gap-6",children:[e.jsxs("div",{className:"space-y-4",children:[e.jsxs("div",{children:[e.jsx("h4",{className:"font-medium text-gray-900 mb-2",children:"操作控制"}),e.jsxs("div",{className:"space-y-2",children:[e.jsx("button",{onClick:$,className:`w-full px-4 py-2 rounded-md text-white ${b?"bg-red-600 hover:bg-red-700":"bg-green-600 hover:bg-green-700"}`,children:b?"停止日志":"开始日志"}),e.jsxs("div",{className:"grid grid-cols-2 gap-2",children:[e.jsx("button",{onClick:()=>v("request"),className:"px-3 py-2 text-sm bg-blue-600 text-white rounded-md hover:bg-blue-700",children:"请求日志"}),e.jsx("button",{onClick:()=>v("error"),className:"px-3 py-2 text-sm bg-red-600 text-white rounded-md hover:bg-red-700",children:"错误日志"}),e.jsx("button",{onClick:()=>v("cache"),className:"px-3 py-2 text-sm bg-purple-600 text-white rounded-md hover:bg-purple-700",children:"缓存日志"}),e.jsx("button",{onClick:()=>v("security"),className:"px-3 py-2 text-sm bg-orange-600 text-white rounded-md hover:bg-orange-700",children:"安全日志"})]}),e.jsx("button",{onClick:k,className:"w-full px-4 py-2 bg-gray-600 text-white rounded-md hover:bg-gray-700",children:"清空日志"})]})]}),e.jsxs("div",{children:[e.jsx("h4",{className:"font-medium text-gray-900 mb-2",children:"过滤器"}),e.jsxs("div",{className:"space-y-2",children:[e.jsxs("div",{children:[e.jsx("label",{className:"block text-sm text-gray-600 mb-1",children:"日志级别"}),e.jsxs("select",{value:n.level,onChange:a=>d(o=>({...o,level:a.target.value})),className:"w-full p-2 border border-gray-300 rounded-md text-sm",children:[e.jsx("option",{value:"",children:"全部"}),e.jsx("option",{value:"debug",children:"Debug"}),e.jsx("option",{value:"info",children:"Info"}),e.jsx("option",{value:"warn",children:"Warn"}),e.jsx("option",{value:"error",children:"Error"}),e.jsx("option",{value:"fatal",children:"Fatal"})]})]}),e.jsxs("div",{children:[e.jsx("label",{className:"block text-sm text-gray-600 mb-1",children:"分类"}),e.jsxs("select",{value:n.category,onChange:a=>d(o=>({...o,category:a.target.value})),className:"w-full p-2 border border-gray-300 rounded-md text-sm",children:[e.jsx("option",{value:"",children:"全部"}),e.jsx("option",{value:"request",children:"Request"}),e.jsx("option",{value:"cache",children:"Cache"}),e.jsx("option",{value:"performance",children:"Performance"}),e.jsx("option",{value:"security",children:"Security"}),e.jsx("option",{value:"general",children:"General"})]})]}),e.jsxs("div",{children:[e.jsx("label",{className:"block text-sm text-gray-600 mb-1",children:"搜索"}),e.jsx("input",{type:"text",value:n.search,onChange:a=>d(o=>({...o,search:a.target.value})),placeholder:"搜索日志内容...",className:"w-full p-2 border border-gray-300 rounded-md text-sm"})]})]})]}),e.jsxs("div",{children:[e.jsx("h4",{className:"font-medium text-gray-900 mb-2",children:"导出"}),e.jsxs("div",{className:"space-y-2",children:[e.jsx("button",{onClick:()=>C("json"),className:"w-full px-3 py-2 text-sm bg-indigo-600 text-white rounded-md hover:bg-indigo-700",children:"导出 JSON"}),e.jsx("button",{onClick:()=>C("csv"),className:"w-full px-3 py-2 text-sm bg-indigo-600 text-white rounded-md hover:bg-indigo-700",children:"导出 CSV"}),e.jsx("button",{onClick:()=>C("txt"),className:"w-full px-3 py-2 text-sm bg-indigo-600 text-white rounded-md hover:bg-indigo-700",children:"导出 TXT"})]})]})]}),e.jsxs("div",{className:"space-y-4",children:[e.jsxs("div",{children:[e.jsx("h4",{className:"font-medium text-gray-900 mb-2",children:"统计信息"}),e.jsxs("div",{className:"bg-gray-50 p-4 rounded-md space-y-2",children:[e.jsxs("div",{className:"grid grid-cols-2 gap-2 text-sm",children:[e.jsxs("div",{className:"flex justify-between",children:[e.jsx("span",{className:"text-gray-600",children:"总计:"}),e.jsx("span",{className:"font-medium",children:t.total})]}),e.jsxs("div",{className:"flex justify-between",children:[e.jsx("span",{className:"text-gray-600",children:"错误率:"}),e.jsxs("span",{className:"font-medium text-red-600",children:[t.errorRate.toFixed(1),"%"]})]}),e.jsxs("div",{className:"flex justify-between",children:[e.jsx("span",{className:"text-gray-600",children:"平均耗时:"}),e.jsxs("span",{className:"font-medium",children:[Math.round(t.avgDuration),"ms"]})]})]}),e.jsxs("div",{className:"border-t pt-2",children:[e.jsx("div",{className:"text-sm text-gray-600 mb-1",children:"按级别统计:"}),e.jsx("div",{className:"space-y-1",children:Object.entries(t.byLevel).map(([a,o])=>e.jsxs("div",{className:"flex justify-between text-xs",children:[e.jsx("span",{className:`px-2 py-1 rounded ${q(a)}`,children:a}),e.jsx("span",{className:"font-medium",children:o})]},a))})]}),e.jsxs("div",{className:"border-t pt-2",children:[e.jsx("div",{className:"text-sm text-gray-600 mb-1",children:"热门分类:"}),e.jsx("div",{className:"space-y-1",children:t.topCategories.slice(0,5).map(({category:a,count:o})=>e.jsxs("div",{className:"flex justify-between text-xs",children:[e.jsx("span",{className:`px-2 py-1 rounded ${E(a)}`,children:a}),e.jsx("span",{className:"font-medium",children:o})]},a))})]})]})]}),e.jsxs("div",{children:[e.jsxs("h4",{className:"font-medium text-gray-900 mb-2",children:["最近错误 (",t.recentErrors.length,")"]}),e.jsx("div",{className:"bg-red-50 p-4 rounded-md max-h-40 overflow-y-auto",children:t.recentErrors.length===0?e.jsx("div",{className:"text-sm text-gray-500 text-center py-2",children:"暂无错误"}):e.jsx("div",{className:"space-y-2",children:t.recentErrors.slice().reverse().map(a=>e.jsxs("div",{className:"bg-white p-2 rounded border text-xs",children:[e.jsxs("div",{className:"flex items-center justify-between mb-1",children:[e.jsx("span",{className:`px-2 py-1 rounded ${q(a.level)}`,children:a.level}),e.jsx("span",{className:"text-gray-500",children:new Date(a.timestamp).toLocaleTimeString()})]}),e.jsx("div",{className:"text-gray-700 truncate",children:a.message}),a.url&&e.jsxs("div",{className:"text-gray-500",children:[a.method," ",a.url]})]},a.id))})})]})]}),e.jsx("div",{className:"lg:col-span-2 space-y-4",children:e.jsxs("div",{children:[e.jsxs("h4",{className:"font-medium text-gray-900 mb-2",children:["日志条目 (",I.length,")"]}),e.jsx("div",{className:"bg-gray-50 p-4 rounded-md max-h-96 overflow-y-auto",children:I.length===0?e.jsx("div",{className:"text-sm text-gray-500 text-center py-4",children:"暂无日志条目"}):e.jsx("div",{className:"space-y-2",children:I.slice().reverse().map(a=>e.jsxs("div",{className:"bg-white p-3 rounded border",children:[e.jsxs("div",{className:"flex items-center justify-between mb-2",children:[e.jsxs("div",{className:"flex items-center space-x-2",children:[e.jsx("span",{className:`px-2 py-1 text-xs rounded ${q(a.level)}`,children:a.level}),e.jsx("span",{className:`px-2 py-1 text-xs rounded ${E(a.category)}`,children:a.category}),a.requestId&&e.jsx("span",{className:"px-2 py-1 text-xs bg-gray-100 text-gray-600 rounded font-mono",children:a.requestId})]}),e.jsx("span",{className:"text-xs text-gray-500",children:new Date(a.timestamp).toLocaleTimeString()})]}),e.jsx("div",{className:"text-sm text-gray-800 mb-2",children:a.message}),(a.url||a.duration)&&e.jsxs("div",{className:"flex items-center space-x-4 text-xs text-gray-600",children:[a.url&&e.jsxs("span",{children:[a.method," ",a.url]}),a.statusCode&&e.jsx("span",{className:a.statusCode>=400?"text-red-600":"text-green-600",children:a.statusCode}),a.duration&&e.jsxs("span",{children:[a.duration,"ms"]})]}),a.metadata&&Object.keys(a.metadata).length>0&&e.jsxs("details",{className:"mt-2",children:[e.jsx("summary",{className:"text-xs text-gray-500 cursor-pointer hover:text-gray-700",children:"元数据"}),e.jsx("pre",{className:"mt-1 text-xs bg-gray-100 p-2 rounded overflow-x-auto",children:JSON.stringify(a.metadata,null,2)})]})]},a.id))})})]})})]})]})})},A=()=>{const l={title:"请求日志器实现",language:"typescript",code:`// 请求日志器
class RequestLogger {
  private config: LoggingConfig;
  private entries: LogEntry[] = [];
  private buffer: LogEntry[] = [];
  private stats: LogStats;

  constructor(config: Partial<LoggingConfig> = {}) {
    this.config = {
      enabled: true,
      level: 'info',
      maxEntries: 1000,
      bufferSize: 50,
      flushInterval: 5000,
      includeStack: true,
      includeMetadata: true,
      sensitiveFields: ['password', 'token', 'authorization'],
      formatters: [this.createDefaultFormatter()],
      transports: [this.createConsoleTransport()],
      filters: [],
      ...config
    };

    this.stats = this.initializeStats();
    if (this.config.enabled) {
      this.startFlushTimer();
    }
  }

  // 记录请求开始
  logRequestStart(
    requestId: string,
    url: string,
    method: string,
    metadata?: Record<string, any>
  ): void {
    this.log('info', \`Request started: \${method} \${url}\`, {
      ...metadata,
      requestId, url, method,
      phase: 'start'
    }, 'request');
  }

  // 记录请求成功
  logRequestSuccess(
    requestId: string,
    url: string,
    method: string,
    statusCode: number,
    duration: number,
    metadata?: Record<string, any>
  ): void {
    this.log('info', \`Request completed: \${method} \${url} - \${statusCode} (\${duration}ms)\`, {
      ...metadata,
      requestId, url, method, statusCode, duration,
      phase: 'success'
    }, 'request');
  }

  // 通用日志记录
  private log(
    level: LogLevel,
    message: string,
    metadata?: Record<string, any>,
    category: string = 'general'
  ): void {
    if (!this.config.enabled || !this.shouldLog(level)) {
      return;
    }

    const entry: LogEntry = {
      id: this.generateId(),
      timestamp: Date.now(),
      level, message, category,
      ...this.extractRequestInfo(metadata),
      metadata: this.config.includeMetadata ? this.sanitizeMetadata(metadata) : undefined,
      tags: this.extractTags(metadata),
      ...this.extractTraceInfo(metadata)
    };

    // 应用过滤器
    if (!this.applyFilters(entry)) {
      return;
    }

    this.addEntry(entry);
  }

  // 清理敏感数据
  private sanitizeMetadata(metadata?: Record<string, any>): Record<string, any> | undefined {
    if (!metadata) return undefined;

    const sanitized = { ...metadata };

    this.config.sensitiveFields.forEach(field => {
      if (field in sanitized) {
        sanitized[field] = '[REDACTED]';
      }
    });

    return sanitized;
  }

  // 刷新缓冲区
  private async flush(): Promise<void> {
    if (this.buffer.length === 0) return;

    const entries = [...this.buffer];
    this.buffer = [];

    // 添加到主存储
    this.entries.push(...entries);

    // 保持存储大小
    if (this.entries.length > this.config.maxEntries) {
      const excess = this.entries.length - this.config.maxEntries;
      this.entries.splice(0, excess);
    }

    // 发送到传输器
    await this.sendToTransports(entries);
  }

  // 搜索日志
  search(query: string, options: {
    level?: LogLevel;
    category?: string;
    startTime?: number;
    endTime?: number;
    limit?: number;
  } = {}): LogEntry[] {
    let results = this.entries;

    // 时间范围过滤
    if (options.startTime) {
      results = results.filter(entry => entry.timestamp >= options.startTime!);
    }

    // 文本搜索
    if (query) {
      const lowerQuery = query.toLowerCase();
      results = results.filter(entry =>
        entry.message.toLowerCase().includes(lowerQuery) ||
        entry.category.toLowerCase().includes(lowerQuery) ||
        (entry.requestId && entry.requestId.toLowerCase().includes(lowerQuery))
      );
    }

    return options.limit ? results.slice(-options.limit) : results;
  }
}`,highlights:[25,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45,46,47,48,49,50,51,52,53,54,55,56,57,58,59,60,61,62,63,64,65,66,67,68,69,70,71,72,73,74,75,76,77,78,79,80,81,82,83,84,85,86,87,88,89,90,91,92,93,94,95,96,97,98,99,100]};return e.jsx(z,{title:"请求日志",description:"实现完整的请求日志系统，包括日志记录、格式化、传输和分析功能。",overview:e.jsxs("div",{className:"space-y-4",children:[e.jsxs("div",{className:"bg-blue-50 p-6 rounded-lg",children:[e.jsx("h3",{className:"text-lg font-semibold text-blue-900 mb-3",children:"📝 核心概念"}),e.jsxs("ul",{className:"space-y-2 text-blue-800",children:[e.jsxs("li",{children:[e.jsx("strong",{children:"结构化日志:"})," 使用统一的数据结构记录日志信息"]}),e.jsxs("li",{children:[e.jsx("strong",{children:"分级记录:"})," 支持不同级别的日志记录和过滤"]}),e.jsxs("li",{children:[e.jsx("strong",{children:"缓冲机制:"})," 使用缓冲区提高日志记录性能"]}),e.jsxs("li",{children:[e.jsx("strong",{children:"传输器:"})," 支持多种日志传输和存储方式"]})]})]}),e.jsxs("div",{className:"bg-green-50 p-6 rounded-lg",children:[e.jsx("h3",{className:"text-lg font-semibent text-green-900 mb-3",children:"✨ 主要优势"}),e.jsxs("ul",{className:"space-y-2 text-green-800",children:[e.jsxs("li",{children:[e.jsx("strong",{children:"高性能:"})," 异步缓冲机制减少性能影响"]}),e.jsxs("li",{children:[e.jsx("strong",{children:"可扩展:"})," 支持自定义格式化器和传输器"]}),e.jsxs("li",{children:[e.jsx("strong",{children:"安全性:"})," 自动过滤敏感信息保护隐私"]}),e.jsxs("li",{children:[e.jsx("strong",{children:"可搜索:"})," 提供强大的日志搜索和过滤功能"]})]})]}),e.jsxs("div",{className:"bg-yellow-50 p-6 rounded-lg",children:[e.jsx("h3",{className:"text-lg font-semibold text-yellow-900 mb-3",children:"🎯 适用场景"}),e.jsxs("ul",{className:"space-y-2 text-yellow-800",children:[e.jsxs("li",{children:[e.jsx("strong",{children:"调试诊断:"})," 记录详细的请求执行过程"]}),e.jsxs("li",{children:[e.jsx("strong",{children:"性能分析:"})," 分析请求性能和响应时间"]}),e.jsxs("li",{children:[e.jsx("strong",{children:"错误追踪:"})," 记录和分析系统错误"]}),e.jsxs("li",{children:[e.jsx("strong",{children:"审计合规:"})," 满足安全审计和合规要求"]})]})]}),e.jsxs("div",{className:"bg-red-50 p-6 rounded-lg",children:[e.jsx("h3",{className:"text-lg font-semibold text-red-900 mb-3",children:"⚠️ 注意事项"}),e.jsxs("ul",{className:"space-y-2 text-red-800",children:[e.jsxs("li",{children:[e.jsx("strong",{children:"性能影响:"})," 过度日志记录可能影响系统性能"]}),e.jsxs("li",{children:[e.jsx("strong",{children:"存储成本:"})," 大量日志数据需要考虑存储成本"]}),e.jsxs("li",{children:[e.jsx("strong",{children:"隐私保护:"})," 避免记录敏感用户信息"]}),e.jsxs("li",{children:[e.jsx("strong",{children:"日志轮转:"})," 实现日志文件的定期清理和归档"]})]})]})]}),examples:[{title:"请求日志演示",component:e.jsx(O,{}),description:"演示完整的请求日志系统，包括日志记录、过滤、搜索和导出功能。",observationPoints:["实时显示不同级别和分类的日志","支持按级别、分类和关键词过滤","提供详细的日志统计信息","显示最近的错误日志","支持多种格式的日志导出"],keyPoints:["日志器自动记录和分类各种事件","使用缓冲机制提高记录性能","支持敏感信息的自动过滤","提供强大的搜索和过滤功能","实现了完整的日志统计分析"],commonTraps:["记录过多日志影响系统性能","日志中包含敏感信息泄露","缺少日志轮转导致存储溢出","日志格式不统一难以分析"],solutions:["使用合适的日志级别和采样率","配置敏感字段自动过滤","实现自动的日志清理机制","使用统一的日志格式和结构"],codeExample:l}],tutorial:{concepts:["日志级别用于控制记录的详细程度","结构化日志便于后续的分析和处理","缓冲机制可以提高日志记录的性能","传输器负责将日志发送到不同的目标","过滤器可以控制哪些日志被记录"],steps:["设计日志条目的数据结构","实现不同级别的日志记录方法","创建日志缓冲和刷新机制","实现敏感信息的自动过滤","添加日志格式化器","实现日志传输器","添加日志搜索和过滤功能","实现日志统计和分析","添加日志导出功能","优化性能和内存使用"],tips:["合理设置日志级别避免过度记录","使用异步处理减少性能影响","定期清理过期日志释放存储空间","配置敏感字段列表保护隐私","使用结构化格式便于后续分析","实现日志采样减少存储压力","配置多个传输器实现日志备份"]},interview:{questions:[{question:"如何设计一个高性能的日志系统？",answer:"高性能日志系统需要考虑：1) 使用异步缓冲机制减少I/O阻塞；2) 实现日志分级和采样控制记录量；3) 使用内存池减少对象创建开销；4) 批量写入提高吞吐量；5) 合理设置缓冲区大小平衡内存和性能。"},{question:"日志系统如何保护敏感信息？",answer:"保护敏感信息的方法：1) 配置敏感字段列表自动过滤；2) 使用数据脱敏技术处理敏感数据；3) 实现字段级别的访问控制；4) 对日志进行加密存储和传输；5) 定期审计日志内容确保合规。"},{question:"如何实现分布式系统的日志追踪？",answer:"分布式日志追踪需要：1) 使用TraceID和SpanID关联请求链路；2) 在服务间传递追踪上下文；3) 统一日志格式和时间戳；4) 实现日志聚合和关联分析；5) 提供可视化的链路追踪界面。"},{question:"日志系统的存储策略有哪些？",answer:"常见存储策略：1) 按时间分片存储便于管理；2) 按日志级别分离存储优化查询；3) 使用压缩算法减少存储空间；4) 实现冷热数据分层存储；5) 配置自动清理策略控制存储成本。"},{question:"如何监控和告警日志系统？",answer:"日志系统监控包括：1) 监控日志产生速率和存储使用率；2) 设置错误日志数量阈值告警；3) 监控日志传输延迟和丢失率；4) 检查日志格式和完整性；5) 实现日志系统自身的健康检查。"}],keyPoints:["日志级别控制记录的详细程度和性能影响","结构化日志格式便于后续分析和处理","异步缓冲机制是高性能日志的关键","敏感信息过滤是日志安全的重要保障","日志轮转和清理策略控制存储成本","分布式追踪需要统一的标识和格式","多传输器设计提供灵活的日志输出","日志搜索和分析功能提升运维效率"]},bestPractices:{dos:["使用合适的日志级别控制记录详细程度","实现异步缓冲机制提高记录性能","配置敏感字段自动过滤保护隐私","使用结构化格式便于后续分析","实现日志轮转和自动清理机制","添加请求ID关联相关日志条目","记录关键的性能指标和错误信息","提供日志搜索和过滤功能","实现多种传输器支持不同输出","监控日志系统自身的健康状态"],donts:["不要在生产环境记录过多调试日志","不要在日志中记录密码等敏感信息","不要使用同步I/O影响主线程性能","不要忽略日志存储空间的管理","不要使用不一致的日志格式","不要在循环中频繁记录相同日志","不要忽略日志传输的错误处理","不要在日志中包含用户的个人信息","不要设置过小的缓冲区影响性能","不要忘记处理日志系统的异常情况"],patterns:["观察者模式: 实现日志事件的监听和通知","策略模式: 支持不同的日志格式化策略","装饰器模式: 为日志添加额外的元数据","工厂模式: 创建不同类型的传输器","单例模式: 确保全局唯一的日志器实例","责任链模式: 实现日志过滤器链","模板方法模式: 定义日志处理的标准流程","适配器模式: 适配不同的日志输出格式","代理模式: 实现日志的延迟加载和缓存","建造者模式: 构建复杂的日志配置"]}})};export{A as default};
