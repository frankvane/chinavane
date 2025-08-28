var U=Object.defineProperty;var _=(l,t,s)=>t in l?U(l,t,{enumerable:!0,configurable:!0,writable:!0,value:s}):l[t]=s;var y=(l,t,s)=>_(l,typeof t!="symbol"?t+"":t,s);import{j as e,r as u}from"./index-Bi_r7QuH.js";import{C as H}from"./ComponentTemplate-C5EWLtXX.js";class O{constructor(t={}){y(this,"config");y(this,"events",[]);y(this,"metrics",[]);y(this,"alertRules",new Map);y(this,"alerts",[]);y(this,"listeners",new Set);y(this,"metricsInterval");y(this,"cleanupInterval");y(this,"responseTimes",[]);y(this,"requestCounts",{});y(this,"errorCounts",{});this.config={enabled:!0,sampleRate:1,maxEvents:1e3,maxMetrics:100,alertEnabled:!0,reportInterval:5e3,retentionPeriod:24*60*60*1e3,...t},this.config.enabled&&(this.startMetricsCollection(),this.startCleanup())}recordRequestStart(t,s,n){if(!this.config.enabled||Math.random()>this.config.sampleRate)return"";const i={id:this.generateId(),type:"request",url:t,method:s,timestamp:Date.now(),metadata:n};return this.addEvent(i),this.updateRequestCounts(t,s),i.id}recordRequestSuccess(t,s,n,i,m,c){if(!this.config.enabled)return;const v={id:this.generateId(),type:"response",url:s,method:n,status:i,duration:m,timestamp:Date.now(),metadata:c};this.addEvent(v),this.responseTimes.push(m),this.responseTimes.length>1e3&&(this.responseTimes=this.responseTimes.slice(-500))}recordRequestError(t,s,n,i,m,c){if(!this.config.enabled)return;const v={id:this.generateId(),type:"error",url:s,method:n,error:i,duration:m,timestamp:Date.now(),metadata:c};this.addEvent(v),this.updateErrorCounts(s,n,i)}recordRequestTimeout(t,s,n,i,m){if(!this.config.enabled)return;const c={id:this.generateId(),type:"timeout",url:s,method:n,duration:i,timestamp:Date.now(),metadata:m};this.addEvent(c),this.updateErrorCounts(s,n,"timeout")}recordRequestRetry(t,s,n,i,m){if(!this.config.enabled)return;const c={id:this.generateId(),type:"retry",url:s,method:n,timestamp:Date.now(),metadata:{...m,retryCount:i}};this.addEvent(c)}recordCacheHit(t,s,n,i){if(!this.config.enabled)return;const m={id:this.generateId(),type:"cache",url:t,method:s,timestamp:Date.now(),metadata:{...i,cacheType:n,hit:!0}};this.addEvent(m)}addAlertRule(t){const s={...t,id:this.generateId()};return this.alertRules.set(s.id,s),s.id}removeAlertRule(t){return this.alertRules.delete(t)}updateAlertRule(t,s){const n=this.alertRules.get(t);return n?(this.alertRules.set(t,{...n,...s}),!0):!1}getAlertRules(){return Array.from(this.alertRules.values())}acknowledgeAlert(t){const s=this.alerts.find(n=>n.id===t);return s?(s.acknowledged=!0,this.notifyListeners({type:"alert_acknowledged",alert:s}),!0):!1}resolveAlert(t){const s=this.alerts.find(n=>n.id===t);return s?(s.resolved=!0,this.notifyListeners({type:"alert_resolved",alert:s}),!0):!1}getCurrentMetrics(){return this.calculateMetrics()}getHistoricalMetrics(t=50){return this.metrics.slice(-t)}getEvents(t=100,s){let n=this.events;return s&&(n=n.filter(i=>i.type===s)),n.slice(-t)}getAlerts(t=!1){return this.alerts.filter(s=>s.resolved===t)}getReport(t=60*60*1e3){const n=Date.now()-t,i=this.events.filter(a=>a.timestamp>=n),m=this.metrics.filter(a=>a.timestamp>=n),c=this.calculateMetrics(i),v={};i.filter(a=>a.type==="error").forEach(a=>{a.error&&(v[a.error]=(v[a.error]||0)+1)});const w=Object.entries(v).sort(([,a],[,d])=>d-a).slice(0,10).map(([a,d])=>({error:a,count:d})),p={};i.forEach(a=>{if(a.type==="response"&&a.duration){const d=`${a.method} ${a.url}`;p[d]||(p[d]={count:0,totalTime:0}),p[d].count++,p[d].totalTime+=a.duration}});const R=Object.entries(p).sort(([,a],[,d])=>d.count-a.count).slice(0,10).map(([a,d])=>({url:a,count:d.count,avgTime:Math.round(d.totalTime/d.count)})),f=m.map(a=>({timestamp:a.timestamp,metrics:a}));return{summary:c,topErrors:w,topEndpoints:R,timeline:f}}clear(){this.events=[],this.metrics=[],this.alerts=[],this.responseTimes=[],this.requestCounts={},this.errorCounts={},this.notifyListeners({type:"cleared"})}destroy(){this.config.enabled=!1,this.metricsInterval&&clearInterval(this.metricsInterval),this.cleanupInterval&&clearInterval(this.cleanupInterval),this.clear(),this.listeners.clear()}addListener(t){this.listeners.add(t)}removeListener(t){this.listeners.delete(t)}addEvent(t){this.events.push(t),this.events.length>this.config.maxEvents&&(this.events=this.events.slice(-Math.floor(this.config.maxEvents*.8))),this.notifyListeners({type:"event",event:t})}updateRequestCounts(t,s){const n=`${s} ${t}`;this.requestCounts[n]=(this.requestCounts[n]||0)+1}updateErrorCounts(t,s,n){const i=`${s} ${t}`;this.errorCounts[i]=(this.errorCounts[i]||0)+1}calculateMetrics(t){const s=t||this.events,n=Date.now(),i=n-60*1e3,m=n-1e3,c=s.filter(o=>o.timestamp>=i),v=s.filter(o=>o.timestamp>=m),w=c.filter(o=>o.type==="request"),p=c.filter(o=>o.type==="response"),R=c.filter(o=>o.type==="error"||o.type==="timeout"),f=c.filter(o=>o.type==="retry"),a=w.length,d=p.length,x=R.length,E=Math.max(0,a-d-x),g=p.map(o=>o.duration).filter(o=>o!==void 0).sort((o,P)=>o-P),I=g.length>0?Math.round(g.reduce((o,P)=>o+P,0)/g.length):0,A=g.length>0?g[0]:0,S=g.length>0?g[g.length-1]:0,$=Math.floor(g.length*.95),k=Math.floor(g.length*.99),D=g.length>0&&g[$]||0,r=g.length>0&&g[k]||0,h=a>0?x/a*100:0,b=c.filter(o=>o.type==="timeout"),N=a>0?b.length/a*100:0,q=a>0?f.length/a*100:0,M=v.filter(o=>o.type==="request").length,T=w.length,j=Math.round(this.events.length/this.config.maxEvents*100),C=Math.round(Math.random()*20+h/2),L=Math.round(I/10);return{totalRequests:a,successRequests:d,failedRequests:x,pendingRequests:E,avgResponseTime:I,minResponseTime:A,maxResponseTime:S,p95ResponseTime:D,p99ResponseTime:r,errorRate:Math.round(h*100)/100,timeoutRate:Math.round(N*100)/100,retryRate:Math.round(q*100)/100,requestsPerSecond:M,requestsPerMinute:T,memoryUsage:j,cpuUsage:C,networkUsage:L,timestamp:n}}checkAlerts(t){if(this.config.alertEnabled)for(const s of this.alertRules.values()){if(!s.enabled)continue;const n=t[s.metric];let i=!1;switch(s.operator){case">":i=n>s.threshold;break;case"<":i=n<s.threshold;break;case">=":i=n>=s.threshold;break;case"<=":i=n<=s.threshold;break;case"==":i=n===s.threshold;break;case"!=":i=n!==s.threshold;break}if(i&&!this.alerts.find(c=>c.ruleId===s.id&&!c.resolved)){const c={id:this.generateId(),ruleId:s.id,ruleName:s.name,metric:s.metric,value:n,threshold:s.threshold,severity:s.severity,message:`${s.name}: ${s.metric} is ${n} (threshold: ${s.threshold})`,timestamp:Date.now(),acknowledged:!1,resolved:!1};this.alerts.push(c),this.notifyListeners({type:"alert_triggered",alert:c})}}}startMetricsCollection(){this.metricsInterval=setInterval(()=>{const t=this.calculateMetrics();this.metrics.push(t),this.metrics.length>this.config.maxMetrics&&(this.metrics=this.metrics.slice(-Math.floor(this.config.maxMetrics*.8))),this.checkAlerts(t),this.notifyListeners({type:"metrics",metrics:t})},this.config.reportInterval)}startCleanup(){this.cleanupInterval=setInterval(()=>{const t=Date.now(),s=t-this.config.retentionPeriod;this.events=this.events.filter(i=>i.timestamp>=s),this.metrics=this.metrics.filter(i=>i.timestamp>=s);const n=t-24*60*60*1e3;this.alerts=this.alerts.filter(i=>!i.resolved||i.timestamp>=n)},60*60*1e3)}notifyListeners(t){this.listeners.forEach(s=>{try{s(t)}catch(n){console.error("Listener error:",n)}})}generateId(){return`${Date.now()}_${Math.random().toString(36).substr(2,9)}`}}const z=()=>{const[l]=u.useState(()=>new O({enabled:!0,sampleRate:1,maxEvents:500,maxMetrics:50,alertEnabled:!0,reportInterval:2e3})),[t,s]=u.useState(l.getCurrentMetrics()),[n,i]=u.useState([]),[m,c]=u.useState([]),[v,w]=u.useState([]),[p,R]=u.useState(!1),[f,a]=u.useState({requestInterval:1e3,errorRate:10,timeoutRate:5}),d=u.useRef(),x=u.useCallback(()=>{s(l.getCurrentMetrics()),i(l.getEvents(20)),c(l.getAlerts()),w(l.getAlertRules())},[l]);u.useEffect(()=>{const r=h=>{(h.type==="metrics"||h.type==="event"||h.type==="alert_triggered")&&x()};return l.addListener(r),x(),()=>{l.removeListener(r)}},[l,x]);const E=u.useCallback(async()=>{const r=["/api/users","/api/posts","/api/comments","/api/products","/api/orders"],h=["GET","POST","PUT","DELETE"],b=r[Math.floor(Math.random()*r.length)],N=h[Math.floor(Math.random()*h.length)],q=l.recordRequestStart(b,N,{userAgent:"Demo Client",userId:Math.floor(Math.random()*1e3)}),M=Math.random()*2e3+100;await new Promise(j=>setTimeout(j,M));const T=Math.random()*100;if(T<f.timeoutRate)l.recordRequestTimeout(q,b,N,M,{timeout:5e3});else if(T<f.errorRate){const j=["Network Error","Server Error","Validation Error","Auth Error"],C=j[Math.floor(Math.random()*j.length)];l.recordRequestError(q,b,N,C,M,{statusCode:500})}else{const j=[200,201,204],C=j[Math.floor(Math.random()*j.length)];l.recordRequestSuccess(q,b,N,C,M,{responseSize:Math.floor(Math.random()*1e4)}),Math.random()<.3&&l.recordCacheHit(b,N,"memory",{cacheKey:`${N}:${b}`})}},[l,f]),g=u.useCallback(()=>{p?(d.current&&clearInterval(d.current),R(!1)):(d.current=setInterval(()=>{E()},f.requestInterval),R(!0))},[p,E,f.requestInterval]),I=u.useCallback(()=>{const r=[{name:"错误率过高",metric:"errorRate",operator:">",threshold:20,duration:3e4,enabled:!0,severity:"high",description:"当错误率超过20%时触发告警"},{name:"响应时间过长",metric:"avgResponseTime",operator:">",threshold:1e3,duration:6e4,enabled:!0,severity:"medium",description:"当平均响应时间超过1秒时触发告警"},{name:"CPU使用率过高",metric:"cpuUsage",operator:">",threshold:80,duration:12e4,enabled:!0,severity:"critical",description:"当CPU使用率超过80%时触发告警"}],h=r[Math.floor(Math.random()*r.length)];l.addAlertRule(h),x()},[l,x]),A=u.useCallback(r=>{l.acknowledgeAlert(r),x()},[l,x]),S=u.useCallback(r=>{l.resolveAlert(r),x()},[l,x]),$=u.useCallback(()=>{l.clear(),x()},[l,x]);u.useEffect(()=>()=>{d.current&&clearInterval(d.current),l.destroy()},[l]);const k=r=>{switch(r){case"critical":return"text-red-800 bg-red-100";case"high":return"text-red-700 bg-red-50";case"medium":return"text-yellow-700 bg-yellow-50";case"low":return"text-blue-700 bg-blue-50";default:return"text-gray-700 bg-gray-50"}},D=r=>{switch(r){case"request":return"text-blue-600 bg-blue-100";case"response":return"text-green-600 bg-green-100";case"error":return"text-red-600 bg-red-100";case"timeout":return"text-orange-600 bg-orange-100";case"retry":return"text-yellow-600 bg-yellow-100";case"cache":return"text-purple-600 bg-purple-100";default:return"text-gray-600 bg-gray-100"}};return e.jsx("div",{className:"space-y-4",children:e.jsxs("div",{className:"bg-white p-6 rounded-lg border",children:[e.jsx("h3",{className:"text-lg font-semibold mb-4",children:"请求监控演示"}),e.jsxs("div",{className:"grid grid-cols-1 lg:grid-cols-3 gap-6",children:[e.jsxs("div",{className:"space-y-4",children:[e.jsxs("div",{children:[e.jsx("h4",{className:"font-medium text-gray-900 mb-2",children:"模拟配置"}),e.jsxs("div",{className:"space-y-2",children:[e.jsxs("div",{children:[e.jsx("label",{className:"block text-sm text-gray-600 mb-1",children:"请求间隔 (ms)"}),e.jsx("input",{type:"number",value:f.requestInterval,onChange:r=>a(h=>({...h,requestInterval:parseInt(r.target.value)||1e3})),min:"100",max:"5000",className:"w-full p-2 border border-gray-300 rounded-md"})]}),e.jsxs("div",{children:[e.jsx("label",{className:"block text-sm text-gray-600 mb-1",children:"错误率 (%)"}),e.jsx("input",{type:"number",value:f.errorRate,onChange:r=>a(h=>({...h,errorRate:parseInt(r.target.value)||0})),min:"0",max:"100",className:"w-full p-2 border border-gray-300 rounded-md"})]}),e.jsxs("div",{children:[e.jsx("label",{className:"block text-sm text-gray-600 mb-1",children:"超时率 (%)"}),e.jsx("input",{type:"number",value:f.timeoutRate,onChange:r=>a(h=>({...h,timeoutRate:parseInt(r.target.value)||0})),min:"0",max:"100",className:"w-full p-2 border border-gray-300 rounded-md"})]})]})]}),e.jsxs("div",{children:[e.jsx("h4",{className:"font-medium text-gray-900 mb-2",children:"操作"}),e.jsxs("div",{className:"space-y-2",children:[e.jsx("button",{onClick:g,className:`w-full px-4 py-2 rounded-md text-white ${p?"bg-red-600 hover:bg-red-700":"bg-green-600 hover:bg-green-700"}`,children:p?"停止模拟":"开始模拟"}),e.jsx("button",{onClick:E,disabled:p,className:"w-full px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 disabled:bg-gray-400",children:"单次请求"}),e.jsx("button",{onClick:I,className:"w-full px-4 py-2 bg-yellow-600 text-white rounded-md hover:bg-yellow-700",children:"添加告警规则"}),e.jsx("button",{onClick:$,className:"w-full px-4 py-2 bg-red-600 text-white rounded-md hover:bg-red-700",children:"清空数据"})]})]}),e.jsxs("div",{children:[e.jsx("h4",{className:"font-medium text-gray-900 mb-2",children:"实时指标"}),e.jsx("div",{className:"bg-gray-50 p-4 rounded-md space-y-2",children:e.jsxs("div",{className:"grid grid-cols-2 gap-2 text-sm",children:[e.jsxs("div",{className:"flex justify-between",children:[e.jsx("span",{className:"text-gray-600",children:"总请求:"}),e.jsx("span",{className:"font-medium",children:t.totalRequests})]}),e.jsxs("div",{className:"flex justify-between",children:[e.jsx("span",{className:"text-gray-600",children:"成功:"}),e.jsx("span",{className:"font-medium text-green-600",children:t.successRequests})]}),e.jsxs("div",{className:"flex justify-between",children:[e.jsx("span",{className:"text-gray-600",children:"失败:"}),e.jsx("span",{className:"font-medium text-red-600",children:t.failedRequests})]}),e.jsxs("div",{className:"flex justify-between",children:[e.jsx("span",{className:"text-gray-600",children:"待处理:"}),e.jsx("span",{className:"font-medium text-yellow-600",children:t.pendingRequests})]}),e.jsxs("div",{className:"flex justify-between",children:[e.jsx("span",{className:"text-gray-600",children:"错误率:"}),e.jsxs("span",{className:"font-medium text-red-600",children:[t.errorRate.toFixed(1),"%"]})]}),e.jsxs("div",{className:"flex justify-between",children:[e.jsx("span",{className:"text-gray-600",children:"平均响应:"}),e.jsxs("span",{className:"font-medium",children:[t.avgResponseTime,"ms"]})]}),e.jsxs("div",{className:"flex justify-between",children:[e.jsx("span",{className:"text-gray-600",children:"P95响应:"}),e.jsxs("span",{className:"font-medium",children:[t.p95ResponseTime,"ms"]})]}),e.jsxs("div",{className:"flex justify-between",children:[e.jsx("span",{className:"text-gray-600",children:"QPS:"}),e.jsx("span",{className:"font-medium",children:t.requestsPerSecond})]})]})})]})]}),e.jsxs("div",{className:"space-y-4",children:[e.jsxs("div",{children:[e.jsxs("h4",{className:"font-medium text-gray-900 mb-2",children:["告警规则 (",v.length,")"]}),e.jsx("div",{className:"bg-gray-50 p-4 rounded-md max-h-40 overflow-y-auto",children:v.length===0?e.jsx("div",{className:"text-sm text-gray-500 text-center py-2",children:"暂无告警规则"}):e.jsx("div",{className:"space-y-2",children:v.map(r=>e.jsxs("div",{className:"bg-white p-3 rounded border",children:[e.jsxs("div",{className:"flex items-center justify-between mb-1",children:[e.jsx("span",{className:"text-sm font-medium",children:r.name}),e.jsx("span",{className:`px-2 py-1 text-xs rounded ${k(r.severity)}`,children:r.severity})]}),e.jsxs("div",{className:"text-xs text-gray-500",children:[r.metric," ",r.operator," ",r.threshold]})]},r.id))})})]}),e.jsxs("div",{children:[e.jsxs("h4",{className:"font-medium text-gray-900 mb-2",children:["活跃告警 (",m.filter(r=>!r.resolved).length,")"]}),e.jsx("div",{className:"bg-red-50 p-4 rounded-md max-h-40 overflow-y-auto",children:m.filter(r=>!r.resolved).length===0?e.jsx("div",{className:"text-sm text-gray-500 text-center py-2",children:"暂无活跃告警"}):e.jsx("div",{className:"space-y-2",children:m.filter(r=>!r.resolved).map(r=>e.jsxs("div",{className:"bg-white p-3 rounded border",children:[e.jsxs("div",{className:"flex items-center justify-between mb-2",children:[e.jsx("span",{className:"text-sm font-medium",children:r.ruleName}),e.jsx("span",{className:`px-2 py-1 text-xs rounded ${k(r.severity)}`,children:r.severity})]}),e.jsx("div",{className:"text-xs text-gray-600 mb-2",children:r.message}),e.jsxs("div",{className:"flex space-x-2",children:[!r.acknowledged&&e.jsx("button",{onClick:()=>A(r.id),className:"px-2 py-1 text-xs bg-yellow-600 text-white rounded hover:bg-yellow-700",children:"确认"}),e.jsx("button",{onClick:()=>S(r.id),className:"px-2 py-1 text-xs bg-green-600 text-white rounded hover:bg-green-700",children:"解决"})]})]},r.id))})})]}),e.jsxs("div",{children:[e.jsx("h4",{className:"font-medium text-gray-900 mb-2",children:"资源使用"}),e.jsxs("div",{className:"bg-gray-50 p-4 rounded-md space-y-2",children:[e.jsxs("div",{className:"flex justify-between items-center",children:[e.jsx("span",{className:"text-sm text-gray-600",children:"内存使用:"}),e.jsxs("div",{className:"flex items-center space-x-2",children:[e.jsx("div",{className:"w-20 bg-gray-200 rounded-full h-2",children:e.jsx("div",{className:"bg-blue-600 h-2 rounded-full",style:{width:`${Math.min(100,t.memoryUsage)}%`}})}),e.jsxs("span",{className:"text-sm font-medium",children:[t.memoryUsage,"%"]})]})]}),e.jsxs("div",{className:"flex justify-between items-center",children:[e.jsx("span",{className:"text-sm text-gray-600",children:"CPU使用:"}),e.jsxs("div",{className:"flex items-center space-x-2",children:[e.jsx("div",{className:"w-20 bg-gray-200 rounded-full h-2",children:e.jsx("div",{className:"bg-green-600 h-2 rounded-full",style:{width:`${Math.min(100,t.cpuUsage)}%`}})}),e.jsxs("span",{className:"text-sm font-medium",children:[t.cpuUsage,"%"]})]})]}),e.jsxs("div",{className:"flex justify-between items-center",children:[e.jsx("span",{className:"text-sm text-gray-600",children:"网络使用:"}),e.jsxs("div",{className:"flex items-center space-x-2",children:[e.jsx("div",{className:"w-20 bg-gray-200 rounded-full h-2",children:e.jsx("div",{className:"bg-purple-600 h-2 rounded-full",style:{width:`${Math.min(100,t.networkUsage)}%`}})}),e.jsxs("span",{className:"text-sm font-medium",children:[t.networkUsage,"%"]})]})]})]})]})]}),e.jsx("div",{className:"space-y-4",children:e.jsxs("div",{children:[e.jsxs("h4",{className:"font-medium text-gray-900 mb-2",children:["最近事件 (",n.length,")"]}),e.jsx("div",{className:"bg-gray-50 p-4 rounded-md max-h-80 overflow-y-auto",children:n.length===0?e.jsx("div",{className:"text-sm text-gray-500 text-center py-2",children:"暂无事件"}):e.jsx("div",{className:"space-y-1",children:n.slice().reverse().map(r=>e.jsxs("div",{className:"bg-white p-2 rounded border text-xs",children:[e.jsxs("div",{className:"flex items-center justify-between mb-1",children:[e.jsx("span",{className:`px-2 py-1 rounded ${D(r.type)}`,children:r.type}),e.jsx("span",{className:"text-gray-500",children:new Date(r.timestamp).toLocaleTimeString()})]}),e.jsxs("div",{className:"text-gray-700",children:[r.method," ",r.url]}),r.status&&e.jsxs("div",{className:"text-gray-500",children:["状态: ",r.status]}),r.duration&&e.jsxs("div",{className:"text-gray-500",children:["耗时: ",r.duration,"ms"]}),r.error&&e.jsxs("div",{className:"text-red-600",children:["错误: ",r.error]})]},r.id))})})]})})]})]})})},Q=()=>{const l={title:"请求监控器实现",language:"typescript",code:`// 请求监控器
class RequestMonitor {
  private config: MonitoringConfig;
  private events: MonitoringEvent[] = [];
  private metrics: MonitoringMetrics[] = [];
  private alertRules: Map<string, AlertRule> = new Map();
  private alerts: Alert[] = [];

  constructor(config: Partial<MonitoringConfig> = {}) {
    this.config = {
      enabled: true,
      sampleRate: 1.0,
      maxEvents: 1000,
      maxMetrics: 100,
      alertEnabled: true,
      reportInterval: 5000,
      retentionPeriod: 24 * 60 * 60 * 1000,
      ...config
    };

    if (this.config.enabled) {
      this.startMetricsCollection();
      this.startCleanup();
    }
  }

  // 记录请求开始
  recordRequestStart(url: string, method: string, metadata?: Record<string, any>): string {
    if (!this.config.enabled || Math.random() > this.config.sampleRate) {
      return '';
    }

    const event: MonitoringEvent = {
      id: this.generateId(),
      type: 'request',
      url, method,
      timestamp: Date.now(),
      metadata
    };

    this.addEvent(event);
    this.updateRequestCounts(url, method);

    return event.id;
  }

  // 记录请求成功
  recordRequestSuccess(
    requestId: string,
    url: string,
    method: string,
    status: number,
    duration: number,
    metadata?: Record<string, any>
  ): void {
    const event: MonitoringEvent = {
      id: this.generateId(),
      type: 'response',
      url, method, status, duration,
      timestamp: Date.now(),
      metadata
    };

    this.addEvent(event);
    this.responseTimes.push(duration);
  }

  // 计算指标
  private calculateMetrics(events?: MonitoringEvent[]): MonitoringMetrics {
    const eventList = events || this.events;
    const now = Date.now();
    const oneMinuteAgo = now - 60 * 1000;

    // 过滤最近的事件
    const recentEvents = eventList.filter(e => e.timestamp >= oneMinuteAgo);

    // 请求指标
    const requestEvents = recentEvents.filter(e => e.type === 'request');
    const responseEvents = recentEvents.filter(e => e.type === 'response');
    const errorEvents = recentEvents.filter(e => e.type === 'error' || e.type === 'timeout');

    const totalRequests = requestEvents.length;
    const successRequests = responseEvents.length;
    const failedRequests = errorEvents.length;

    // 性能指标
    const responseTimes = responseEvents
      .map(e => e.duration!)
      .filter(d => d !== undefined)
      .sort((a, b) => a - b);

    const avgResponseTime = responseTimes.length > 0
      ? Math.round(responseTimes.reduce((sum, time) => sum + time, 0) / responseTimes.length)
      : 0;

    // 错误指标
    const errorRate = totalRequests > 0 ? (failedRequests / totalRequests) * 100 : 0;

    return {
      totalRequests,
      successRequests,
      failedRequests,
      avgResponseTime,
      errorRate: Math.round(errorRate * 100) / 100,
      // ... 其他指标
      timestamp: now
    };
  }

  // 检查告警
  private checkAlerts(metrics: MonitoringMetrics): void {
    if (!this.config.alertEnabled) return;

    for (const rule of this.alertRules.values()) {
      if (!rule.enabled) continue;

      const value = metrics[rule.metric] as number;
      let triggered = false;

      switch (rule.operator) {
        case '>':
          triggered = value > rule.threshold;
          break;
        case '<':
          triggered = value < rule.threshold;
          break;
        // ... 其他操作符
      }

      if (triggered) {
        const alert: Alert = {
          id: this.generateId(),
          ruleId: rule.id,
          ruleName: rule.name,
          metric: rule.metric,
          value, threshold: rule.threshold,
          severity: rule.severity,
          message: \`\${rule.name}: \${rule.metric} is \${value} (threshold: \${rule.threshold})\`,
          timestamp: Date.now(),
          acknowledged: false,
          resolved: false
        };

        this.alerts.push(alert);
        this.notifyListeners({ type: 'alert_triggered', alert });
      }
    }
  }
}`,highlights:[25,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45,46,47,48,49,50,51,52,53,54,55,56,57,58,59,60,61,62,63,64,65,66,67,68,69,70,71,72,73,74,75,76,77,78,79,80,81,82,83,84,85,86,87,88,89,90,91,92,93,94,95,96,97,98,99,100]};return e.jsx(H,{title:"请求监控",description:"实现全面的请求监控系统，包括性能指标收集、告警管理和实时监控。",overview:e.jsxs("div",{className:"space-y-4",children:[e.jsxs("div",{className:"bg-blue-50 p-6 rounded-lg",children:[e.jsx("h3",{className:"text-lg font-semibold text-blue-900 mb-3",children:"🔍 核心概念"}),e.jsxs("ul",{className:"space-y-2 text-blue-800",children:[e.jsxs("li",{children:[e.jsx("strong",{children:"指标收集:"})," 自动收集请求的各种性能和状态指标"]}),e.jsxs("li",{children:[e.jsx("strong",{children:"实时监控:"})," 持续监控系统状态和性能表现"]}),e.jsxs("li",{children:[e.jsx("strong",{children:"告警管理:"})," 基于规则的自动告警和通知机制"]}),e.jsxs("li",{children:[e.jsx("strong",{children:"数据分析:"})," 提供详细的统计分析和趋势报告"]})]})]}),e.jsxs("div",{className:"bg-green-50 p-6 rounded-lg",children:[e.jsx("h3",{className:"text-lg font-semibold text-green-900 mb-3",children:"✨ 主要优势"}),e.jsxs("ul",{className:"space-y-2 text-green-800",children:[e.jsxs("li",{children:[e.jsx("strong",{children:"全面监控:"})," 覆盖请求生命周期的各个阶段"]}),e.jsxs("li",{children:[e.jsx("strong",{children:"实时反馈:"})," 即时发现和响应系统异常"]}),e.jsxs("li",{children:[e.jsx("strong",{children:"智能告警:"})," 基于阈值和规则的智能告警"]}),e.jsxs("li",{children:[e.jsx("strong",{children:"性能优化:"})," 提供性能瓶颈分析和优化建议"]})]})]}),e.jsxs("div",{className:"bg-yellow-50 p-6 rounded-lg",children:[e.jsx("h3",{className:"text-lg font-semibold text-yellow-900 mb-3",children:"🎯 适用场景"}),e.jsxs("ul",{className:"space-y-2 text-yellow-800",children:[e.jsxs("li",{children:[e.jsx("strong",{children:"生产环境:"})," 监控生产系统的健康状态"]}),e.jsxs("li",{children:[e.jsx("strong",{children:"性能调优:"})," 识别和解决性能瓶颈"]}),e.jsxs("li",{children:[e.jsx("strong",{children:"故障排查:"})," 快速定位和诊断问题"]}),e.jsxs("li",{children:[e.jsx("strong",{children:"容量规划:"})," 基于历史数据进行容量规划"]})]})]}),e.jsxs("div",{className:"bg-red-50 p-6 rounded-lg",children:[e.jsx("h3",{className:"text-lg font-semibold text-red-900 mb-3",children:"⚠️ 注意事项"}),e.jsxs("ul",{className:"space-y-2 text-red-800",children:[e.jsxs("li",{children:[e.jsx("strong",{children:"采样率:"})," 合理设置采样率避免性能影响"]}),e.jsxs("li",{children:[e.jsx("strong",{children:"数据存储:"})," 控制监控数据的存储量和保留期"]}),e.jsxs("li",{children:[e.jsx("strong",{children:"告警疲劳:"})," 避免过多无效告警影响响应效率"]}),e.jsxs("li",{children:[e.jsx("strong",{children:"隐私保护:"})," 确保敏感数据不被记录和泄露"]})]})]})]}),examples:[{title:"请求监控演示",component:e.jsx(z,{}),description:"演示完整的请求监控系统，包括指标收集、实时监控、告警管理和数据分析。",observationPoints:["实时显示各种性能和状态指标","自动记录和分类不同类型的事件","基于规则触发告警通知","提供详细的事件历史记录","显示系统资源使用情况"],keyPoints:["监控器自动收集和分析请求数据","支持多种类型的监控指标","实现了完整的告警规则和通知机制","提供实时的性能和状态监控","支持历史数据的查询和分析"],commonTraps:["监控数据过多影响系统性能","告警规则设置不当导致误报","缺少数据清理机制导致内存泄漏","忽略监控数据的隐私保护"],solutions:["使用采样率控制监控数据量","合理设置告警阈值和持续时间","实现自动的数据清理和归档","过滤敏感信息避免隐私泄露"],codeExample:l}],tutorial:{concepts:["监控指标包括性能、错误、吞吐量等多个维度","事件记录提供详细的请求生命周期信息","告警规则基于阈值和条件自动触发","实时监控确保系统状态的及时反馈","数据分析帮助识别趋势和模式"],steps:["设计监控指标和事件的数据结构","实现事件记录和指标计算逻辑","创建监控器和配置管理","实现告警规则和触发机制","添加实时数据收集和更新","实现数据清理和保留策略","添加监控数据的查询接口","实现告警的确认和解决流程","优化性能和资源使用","测试各种监控场景"],tips:["合理设置采样率平衡监控精度和性能","使用异步处理避免阻塞主线程","实现监控数据的批量处理和上报","定期清理过期数据释放内存","监控告警规则的有效性和准确性"]},interview:{questions:[{question:"如何设计一个高效的请求监控系统？",answer:"需要考虑：1) 监控指标的选择和定义；2) 数据收集的采样策略；3) 实时处理和存储机制；4) 告警规则和通知系统；5) 性能影响的最小化；6) 数据的查询和分析接口。"},{question:"监控系统如何处理大量的监控数据？",answer:"通过：1) 采样率控制数据量；2) 异步批量处理；3) 数据聚合和压缩；4) 分级存储策略；5) 定期清理过期数据；6) 使用时间窗口统计；7) 实现数据的分片和分布式存储。"},{question:"如何避免监控告警的误报和漏报？",answer:"需要：1) 合理设置告警阈值；2) 使用多维度指标判断；3) 实现告警的去重和聚合；4) 设置告警的持续时间要求；5) 建立告警的确认和反馈机制；6) 定期评估和调整告警规则。"},{question:"监控系统的性能优化策略有哪些？",answer:"包括：1) 异步数据处理；2) 批量操作减少开销；3) 内存池和对象复用；4) 数据压缩和序列化优化；5) 索引和查询优化；6) 缓存热点数据；7) 分布式处理和负载均衡。"}],keyPoints:["监控系统需要平衡监控精度和系统性能","告警规则应该基于业务需求和历史数据","数据存储和查询需要考虑时间序列特性","监控数据的隐私和安全保护很重要","实时性和准确性是监控系统的核心要求"]},bestPractices:{dos:["设计合理的监控指标体系","使用采样和聚合减少数据量","实现分级告警和通知机制","提供直观的监控仪表板","建立监控数据的备份和恢复","定期评估监控系统的有效性","实现监控数据的自动清理","保护敏感信息不被监控记录"],donts:["不要监控所有请求影响性能","不要设置过于敏感的告警阈值","不要忽略监控数据的存储成本","不要在监控中记录敏感数据","不要让监控系统成为性能瓶颈","不要忽略告警的处理和跟踪","不要缺少监控系统的监控","不要过度依赖单一监控指标"],patterns:["观察者模式：实现事件的发布和订阅","策略模式：支持不同的告警策略","工厂模式：创建不同类型的监控器","装饰器模式：为请求添加监控功能","责任链模式：处理告警的传递和处理","状态模式：管理监控系统的不同状态","模板方法模式：定义监控流程的框架","单例模式：确保监控器的唯一实例"]}})};export{Q as default};
