var A=Object.defineProperty;var F=(r,t,i)=>t in r?A(r,t,{enumerable:!0,configurable:!0,writable:!0,value:i}):r[t]=i;var f=(r,t,i)=>F(r,typeof t!="symbol"?t+"":t,i);import{j as e,r as a}from"./index-Bi_r7QuH.js";import{C as H}from"./ComponentTemplate-C5EWLtXX.js";class P{constructor(t){f(this,"eventSource",null);f(this,"config");f(this,"eventQueue",[]);f(this,"listeners",new Map);f(this,"reconnectTimer",null);f(this,"reconnectCount",0);f(this,"onStateChange");f(this,"onEvent");f(this,"onError");this.config={withCredentials:!1,reconnectTime:3e3,maxReconnectAttempts:5,autoReconnect:!0,eventTypes:["message"],...t}}connect(){return new Promise((t,i)=>{var m,c;try{const h=new URL(this.config.url);this.config.headers&&Object.entries(this.config.headers).forEach(([d,u])=>{h.searchParams.append(d,u)}),this.eventSource=new EventSource(h.toString(),{withCredentials:this.config.withCredentials}),(m=this.onStateChange)==null||m.call(this,0),this.eventSource.onopen=d=>{var u;console.log("SSE连接已建立"),this.reconnectCount=0,(u=this.onStateChange)==null||u.call(this,1),t()},this.eventSource.onmessage=d=>{this.handleEvent("message",d)},this.eventSource.onerror=d=>{var u,o,N;console.error("SSE连接错误:",d),(u=this.onError)==null||u.call(this,d),((o=this.eventSource)==null?void 0:o.readyState)===EventSource.CLOSED&&((N=this.onStateChange)==null||N.call(this,2),this.config.autoReconnect&&this.reconnectCount<(this.config.maxReconnectAttempts||5)&&this.scheduleReconnect()),i(d)},(c=this.config.eventTypes)==null||c.forEach(d=>{d!=="message"&&this.eventSource.addEventListener(d,u=>{this.handleEvent(d,u)})})}catch(h){i(h)}})}handleEvent(t,i){var m;try{let c;try{c=JSON.parse(i.data)}catch{c=i.data}const h={id:i.lastEventId||this.generateId(),type:t,data:c,timestamp:Date.now(),retry:this.config.reconnectTime};this.addToQueue(h),(m=this.onEvent)==null||m.call(this,h);const d=this.listeners.get(t);d&&d.forEach(o=>o(h));const u=this.listeners.get("*");u&&u.forEach(o=>o(h))}catch(c){console.error("处理SSE事件失败:",c)}}subscribe(t,i){return this.listeners.has(t)||this.listeners.set(t,new Set),this.listeners.get(t).add(i),t!=="message"&&t!=="*"&&this.eventSource&&this.eventSource.addEventListener(t,m=>{this.handleEvent(t,m)}),()=>{const m=this.listeners.get(t);m&&(m.delete(i),m.size===0&&this.listeners.delete(t))}}disconnect(){var t;this.config.autoReconnect=!1,this.clearReconnectTimer(),this.eventSource&&(this.eventSource.close(),this.eventSource=null,(t=this.onStateChange)==null||t.call(this,2))}getState(){if(!this.eventSource)return 2;switch(this.eventSource.readyState){case EventSource.CONNECTING:return 0;case EventSource.OPEN:return 1;case EventSource.CLOSED:return 2;default:return 2}}getEventHistory(){return[...this.eventQueue]}setStateChangeListener(t){this.onStateChange=t}setEventListener(t){this.onEvent=t}setErrorListener(t){this.onError=t}addToQueue(t){this.eventQueue.push(t);const i=100;this.eventQueue.length>i&&(this.eventQueue=this.eventQueue.slice(-i))}scheduleReconnect(){this.reconnectCount++;const t=this.config.reconnectTime||3e3;console.log(`${t}ms后尝试第${this.reconnectCount}次重连...`),this.reconnectTimer=setTimeout(()=>{this.connect().catch(i=>{console.error("SSE重连失败:",i)})},t)}clearReconnectTimer(){this.reconnectTimer&&(clearTimeout(this.reconnectTimer),this.reconnectTimer=null)}generateId(){return Math.random().toString(36).substr(2,9)}}class ${constructor(){f(this,"clients",new Set);f(this,"intervalId",null);f(this,"eventCounter",0)}start(){this.intervalId||(this.intervalId=setInterval(()=>{this.broadcast()},2e3))}stop(){this.intervalId&&(clearInterval(this.intervalId),this.intervalId=null)}addClient(t){return this.clients.add(t),()=>{this.clients.delete(t)}}broadcast(){const t=[{type:"message",data:{message:`系统消息 #${++this.eventCounter}`,timestamp:new Date().toISOString(),priority:"normal"}},{type:"notification",data:{title:"新通知",content:`通知内容 #${this.eventCounter}`,timestamp:new Date().toISOString()}},{type:"update",data:{version:"1.0."+this.eventCounter,changes:["修复bug","新增功能","性能优化"],timestamp:new Date().toISOString()}}],i=t[Math.floor(Math.random()*t.length)],m=`event: ${i.type}
data: ${JSON.stringify(i.data)}

`;this.clients.forEach(c=>{c(m)})}sendCustomEvent(t,i){const m=`event: ${t}
data: ${JSON.stringify(i)}

`;this.clients.forEach(c=>{c(m)})}}const U=()=>{const[r]=a.useState(()=>new $),[t]=a.useState(()=>new P({url:"http://localhost:3001/events",autoReconnect:!0,maxReconnectAttempts:3,eventTypes:["message","notification","update"]})),[i,m]=a.useState(2),[c,h]=a.useState([]),[d,u]=a.useState(!1),[o,N]=a.useState(!1);a.useEffect(()=>(t.setStateChangeListener(m),t.setEventListener(l=>{h(E=>[...E.slice(-19),l])}),()=>{t.disconnect(),r.stop()}),[t,r]);const v=a.useCallback(()=>{r.start(),N(!0)},[r]),R=a.useCallback(()=>{r.stop(),N(!1)},[r]),y=a.useCallback(async()=>{u(!0);try{await new Promise((l,E)=>{if(!o){E(new Error("服务器未启动"));return}setTimeout(()=>{m(1);const w=r.addClient(s=>{const p=s.split(`
`);let S="message",T="";if(p.forEach(n=>{n.startsWith("event:")?S=n.substring(6).trim():n.startsWith("data:")&&(T=n.substring(5).trim())}),T)try{const n=JSON.parse(T),g={id:Math.random().toString(36).substr(2,9),type:S,data:n,timestamp:Date.now()};h(x=>[...x.slice(-19),g])}catch(n){console.error("解析SSE数据失败:",n)}});t.mockCleanup=w,l()},1e3)})}catch(l){console.error("连接失败:",l),alert("连接失败: "+l.message)}finally{u(!1)}},[t,r,o]),L=a.useCallback(()=>{m(2),t.mockCleanup&&(t.mockCleanup(),delete t.mockCleanup)},[t]),k=a.useCallback((l,E)=>{o&&r.sendCustomEvent(l,E)},[r,o]),D=l=>{switch(l){case 0:return"连接中";case 1:return"已连接";case 2:return"已关闭";default:return"未知"}},I=l=>{switch(l){case 0:return"text-yellow-600";case 1:return"text-green-600";case 2:return"text-red-600";default:return"text-gray-600"}};return e.jsx("div",{className:"space-y-6",children:e.jsxs("div",{className:"bg-white p-6 rounded-lg shadow-sm border",children:[e.jsx("h3",{className:"text-lg font-semibold mb-4",children:"基础SSE连接"}),e.jsxs("div",{className:"grid grid-cols-2 gap-6",children:[e.jsxs("div",{className:"space-y-4",children:[e.jsxs("div",{children:[e.jsx("h4",{className:"font-medium mb-3",children:"服务器控制"}),e.jsxs("div",{className:"space-y-3",children:[e.jsxs("div",{className:"flex items-center space-x-2",children:[e.jsx("span",{className:"text-sm font-medium",children:"服务器:"}),e.jsx("span",{className:`font-medium ${o?"text-green-600":"text-red-600"}`,children:o?"运行中":"已停止"})]}),e.jsxs("div",{className:"flex space-x-2",children:[e.jsx("button",{onClick:v,disabled:o,className:"px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600 disabled:bg-gray-300 disabled:cursor-not-allowed transition-colors",children:"启动服务器"}),e.jsx("button",{onClick:R,disabled:!o,className:"px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600 disabled:bg-gray-300 disabled:cursor-not-allowed transition-colors",children:"停止服务器"})]})]})]}),e.jsxs("div",{children:[e.jsx("h4",{className:"font-medium mb-3",children:"连接控制"}),e.jsxs("div",{className:"space-y-3",children:[e.jsxs("div",{className:"flex items-center space-x-2",children:[e.jsx("span",{className:"text-sm font-medium",children:"状态:"}),e.jsx("span",{className:`font-medium ${I(i)}`,children:D(i)})]}),e.jsxs("div",{className:"flex space-x-2",children:[e.jsx("button",{onClick:y,disabled:i===1||d||!o,className:"px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 disabled:bg-gray-300 disabled:cursor-not-allowed transition-colors",children:d?"连接中...":"连接SSE"}),e.jsx("button",{onClick:L,disabled:i===2,className:"px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600 disabled:bg-gray-300 disabled:cursor-not-allowed transition-colors",children:"断开连接"})]})]})]}),e.jsxs("div",{children:[e.jsx("h4",{className:"font-medium mb-3",children:"发送测试事件"}),e.jsxs("div",{className:"space-y-2",children:[e.jsx("button",{onClick:()=>k("alert",{level:"warning",message:"这是一个警告消息",timestamp:new Date().toISOString()}),disabled:!o,className:"w-full px-4 py-2 bg-yellow-500 text-white rounded hover:bg-yellow-600 disabled:bg-gray-300 disabled:cursor-not-allowed transition-colors",children:"发送警告事件"}),e.jsx("button",{onClick:()=>k("data",{temperature:Math.round(Math.random()*40),humidity:Math.round(Math.random()*100),timestamp:new Date().toISOString()}),disabled:!o,className:"w-full px-4 py-2 bg-purple-500 text-white rounded hover:bg-purple-600 disabled:bg-gray-300 disabled:cursor-not-allowed transition-colors",children:"发送数据事件"}),e.jsx("button",{onClick:()=>k("status",{system:"online",users:Math.floor(Math.random()*1e3),load:Math.random().toFixed(2),timestamp:new Date().toISOString()}),disabled:!o,className:"w-full px-4 py-2 bg-indigo-500 text-white rounded hover:bg-indigo-600 disabled:bg-gray-300 disabled:cursor-not-allowed transition-colors",children:"发送状态事件"})]})]})]}),e.jsxs("div",{children:[e.jsx("h4",{className:"font-medium mb-3",children:"事件历史 (最新20条)"}),e.jsx("div",{className:"max-h-96 overflow-y-auto border rounded-lg",children:c.length>0?e.jsx("div",{className:"space-y-1 p-2",children:c.map(l=>e.jsxs("div",{className:`p-2 rounded text-xs border-l-2 ${l.type==="message"?"bg-blue-50 border-blue-400":l.type==="notification"?"bg-green-50 border-green-400":l.type==="update"?"bg-purple-50 border-purple-400":l.type==="alert"?"bg-yellow-50 border-yellow-400":l.type==="data"?"bg-indigo-50 border-indigo-400":l.type==="status"?"bg-pink-50 border-pink-400":"bg-gray-50 border-gray-400"}`,children:[e.jsxs("div",{className:"flex justify-between items-center mb-1",children:[e.jsx("span",{className:`font-medium ${l.type==="message"?"text-blue-600":l.type==="notification"?"text-green-600":l.type==="update"?"text-purple-600":l.type==="alert"?"text-yellow-600":l.type==="data"?"text-indigo-600":l.type==="status"?"text-pink-600":"text-gray-600"}`,children:l.type}),e.jsx("span",{className:"text-gray-500",children:new Date(l.timestamp).toLocaleTimeString()})]}),e.jsx("div",{className:"bg-white p-2 rounded border",children:e.jsx("pre",{className:"text-xs overflow-x-auto",children:JSON.stringify(l.data,null,2)})})]},l.id))}):e.jsxs("div",{className:"p-4 text-center text-gray-500",children:["暂无事件记录",e.jsx("br",{}),e.jsx("small",{children:"启动服务器并连接SSE后开始接收事件"})]})})]})]})]})})},W=()=>{const[r]=a.useState(()=>new $),[t]=a.useState(()=>new P({url:"http://localhost:3001/events",autoReconnect:!0,eventTypes:["message","notification","update","alert","data","status"]})),[i,m]=a.useState(2),[c,h]=a.useState([]),[d,u]=a.useState([]),[o,N]=a.useState(new Set(["message","notification"])),[v,R]=a.useState(!1),y=["message","notification","update","alert","data","status"];a.useEffect(()=>(t.setStateChangeListener(m),t.setEventListener(s=>{h(p=>[...p.slice(-49),s])}),()=>{t.disconnect(),r.stop()}),[t,r]),a.useEffect(()=>{o.size===0?u(c):u(c.filter(s=>o.has(s.type)))},[c,o]);const L=a.useCallback(()=>{r.start(),R(!0)},[r]),k=a.useCallback(async()=>{if(!v){alert("请先启动服务器");return}try{await new Promise(s=>{setTimeout(()=>{m(1);const p=r.addClient(S=>{const T=S.split(`
`);let n="message",g="";if(T.forEach(x=>{x.startsWith("event:")?n=x.substring(6).trim():x.startsWith("data:")&&(g=x.substring(5).trim())}),g)try{const x=JSON.parse(g),j={id:Math.random().toString(36).substr(2,9),type:n,data:x,timestamp:Date.now()};h(b=>[...b.slice(-49),j])}catch(x){console.error("解析SSE数据失败:",x)}});t.mockCleanup=p,s()},500)})}catch(s){console.error("连接失败:",s)}},[t,r,v]),D=a.useCallback(s=>{N(p=>{const S=new Set(p);return S.has(s)?S.delete(s):S.add(s),S})},[]),I=a.useCallback(()=>{N(new Set(y))},[y]),l=a.useCallback(()=>{N(new Set)},[]),E=s=>({message:"bg-blue-100 text-blue-800",notification:"bg-green-100 text-green-800",update:"bg-purple-100 text-purple-800",alert:"bg-yellow-100 text-yellow-800",data:"bg-indigo-100 text-indigo-800",status:"bg-pink-100 text-pink-800"})[s]||"bg-gray-100 text-gray-800",w=s=>c.filter(p=>p.type===s).length;return e.jsx("div",{className:"space-y-6",children:e.jsxs("div",{className:"bg-white p-6 rounded-lg shadow-sm border",children:[e.jsx("h3",{className:"text-lg font-semibold mb-4",children:"事件过滤和分类"}),e.jsxs("div",{className:"grid grid-cols-3 gap-6",children:[e.jsxs("div",{className:"space-y-4",children:[e.jsxs("div",{children:[e.jsx("h4",{className:"font-medium mb-3",children:"连接控制"}),e.jsxs("div",{className:"space-y-2",children:[e.jsxs("div",{className:"text-sm",children:["服务器:"," ",e.jsx("span",{className:v?"text-green-600":"text-red-600",children:v?"运行中":"已停止"})]}),e.jsxs("div",{className:"text-sm",children:["连接:"," ",e.jsx("span",{className:i===1?"text-green-600":"text-red-600",children:i===1?"已连接":"未连接"})]}),e.jsx("button",{onClick:L,disabled:v,className:"w-full px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600 disabled:bg-gray-300 disabled:cursor-not-allowed transition-colors",children:"启动服务器"}),e.jsx("button",{onClick:k,disabled:i===1||!v,className:"w-full px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 disabled:bg-gray-300 disabled:cursor-not-allowed transition-colors",children:"连接SSE"})]})]}),e.jsxs("div",{children:[e.jsx("h4",{className:"font-medium mb-3",children:"事件过滤器"}),e.jsxs("div",{className:"space-y-2",children:[e.jsxs("div",{className:"flex space-x-2",children:[e.jsx("button",{onClick:I,className:"px-3 py-1 bg-gray-500 text-white text-sm rounded hover:bg-gray-600 transition-colors",children:"全选"}),e.jsx("button",{onClick:l,className:"px-3 py-1 bg-gray-500 text-white text-sm rounded hover:bg-gray-600 transition-colors",children:"全不选"})]}),e.jsx("div",{className:"space-y-1",children:y.map(s=>e.jsxs("label",{className:"flex items-center space-x-2 cursor-pointer",children:[e.jsx("input",{type:"checkbox",checked:o.has(s),onChange:()=>D(s),className:"rounded"}),e.jsx("span",{className:`px-2 py-1 rounded text-xs font-medium ${E(s)}`,children:s}),e.jsxs("span",{className:"text-xs text-gray-500",children:["(",w(s),")"]})]},s))})]})]}),e.jsxs("div",{children:[e.jsx("h4",{className:"font-medium mb-3",children:"统计信息"}),e.jsxs("div",{className:"space-y-2 text-sm",children:[e.jsxs("div",{className:"flex justify-between",children:[e.jsx("span",{children:"总事件数:"}),e.jsx("span",{className:"font-medium",children:c.length})]}),e.jsxs("div",{className:"flex justify-between",children:[e.jsx("span",{children:"过滤后:"}),e.jsx("span",{className:"font-medium",children:d.length})]}),e.jsxs("div",{className:"flex justify-between",children:[e.jsx("span",{children:"活跃过滤器:"}),e.jsx("span",{className:"font-medium",children:o.size})]})]})]})]}),e.jsxs("div",{children:[e.jsx("h4",{className:"font-medium mb-3",children:"事件类型分布"}),e.jsx("div",{className:"space-y-2",children:y.map(s=>{const p=w(s),S=c.length>0?(p/c.length*100).toFixed(1):"0";return e.jsxs("div",{className:"space-y-1",children:[e.jsxs("div",{className:"flex justify-between items-center",children:[e.jsx("span",{className:`px-2 py-1 rounded text-xs font-medium ${E(s)}`,children:s}),e.jsxs("span",{className:"text-sm text-gray-600",children:[p," (",S,"%)"]})]}),e.jsx("div",{className:"w-full bg-gray-200 rounded-full h-2",children:e.jsx("div",{className:`h-2 rounded-full transition-all duration-300 ${s==="message"?"bg-blue-500":s==="notification"?"bg-green-500":s==="update"?"bg-purple-500":s==="alert"?"bg-yellow-500":s==="data"?"bg-indigo-500":s==="status"?"bg-pink-500":"bg-gray-500"}`,style:{width:`${S}%`}})})]},s)})})]}),e.jsxs("div",{children:[e.jsx("h4",{className:"font-medium mb-3",children:"过滤后的事件 (最新20条)"}),e.jsx("div",{className:"max-h-96 overflow-y-auto border rounded-lg",children:d.length>0?e.jsx("div",{className:"space-y-1 p-2",children:d.slice(-20).map(s=>e.jsxs("div",{className:`p-2 rounded text-xs border-l-2 ${s.type==="message"?"bg-blue-50 border-blue-400":s.type==="notification"?"bg-green-50 border-green-400":s.type==="update"?"bg-purple-50 border-purple-400":s.type==="alert"?"bg-yellow-50 border-yellow-400":s.type==="data"?"bg-indigo-50 border-indigo-400":s.type==="status"?"bg-pink-50 border-pink-400":"bg-gray-50 border-gray-400"}`,children:[e.jsxs("div",{className:"flex justify-between items-center mb-1",children:[e.jsx("span",{className:`px-2 py-1 rounded text-xs font-medium ${E(s.type)}`,children:s.type}),e.jsx("span",{className:"text-gray-500",children:new Date(s.timestamp).toLocaleTimeString()})]}),e.jsx("div",{className:"bg-white p-1 rounded border text-xs",children:e.jsx("pre",{className:"overflow-x-auto",children:JSON.stringify(s.data,null,2)})})]},s.id))}):e.jsx("div",{className:"p-4 text-center text-gray-500",children:o.size===0?"请选择要显示的事件类型":"暂无匹配的事件"})})]})]})]})})},J=()=>{var s,p,S,T;const[r]=a.useState(()=>new $),[t]=a.useState(()=>new P({url:"http://localhost:3001/stream",autoReconnect:!0,eventTypes:["metrics","logs","alerts"]})),[i,m]=a.useState(2),[c,h]=a.useState([]),[d,u]=a.useState([]),[o,N]=a.useState([]),[v,R]=a.useState(!1),y=a.useRef(null);a.useEffect(()=>{t.setStateChangeListener(m);const n=t.subscribe("metrics",j=>{h(b=>[...b.slice(-19),j.data])}),g=t.subscribe("logs",j=>{u(b=>[...b.slice(-19),j.data])}),x=t.subscribe("alerts",j=>{N(b=>[...b.slice(-9),j.data])});return()=>{n(),g(),x(),t.disconnect(),r.stop(),y.current&&clearInterval(y.current)}},[t,r]);const L=a.useCallback(()=>{r.start(),R(!0),y.current=setInterval(()=>{if(r.sendCustomEvent("metrics",{cpu:Math.random()*100,memory:Math.random()*100,disk:Math.random()*100,network:Math.random()*1e3,timestamp:Date.now()}),Math.random()>.7){const n=["INFO","WARN","ERROR","DEBUG"],g=["User login successful","Database connection established","Cache miss for key: user_123","API request processed","Background job completed"];r.sendCustomEvent("logs",{level:n[Math.floor(Math.random()*n.length)],message:g[Math.floor(Math.random()*g.length)],timestamp:Date.now(),source:"application"})}if(Math.random()>.9){const n=["HIGH_CPU","LOW_MEMORY","DISK_FULL","NETWORK_ERROR"];r.sendCustomEvent("alerts",{type:n[Math.floor(Math.random()*n.length)],severity:Math.random()>.5?"HIGH":"MEDIUM",message:"System resource threshold exceeded",timestamp:Date.now()})}},1e3)},[r]),k=a.useCallback(()=>{r.stop(),R(!1),y.current&&(clearInterval(y.current),y.current=null)},[r]),D=a.useCallback(async()=>{if(!v){alert("请先启动服务器");return}try{await new Promise(n=>{setTimeout(()=>{m(1);const g=r.addClient(x=>{const j=x.split(`
`);let b="message",M="";if(j.forEach(C=>{C.startsWith("event:")?b=C.substring(6).trim():C.startsWith("data:")&&(M=C.substring(5).trim())}),M)try{const C=JSON.parse(M);b==="metrics"?h(O=>[...O.slice(-19),C]):b==="logs"?u(O=>[...O.slice(-19),C]):b==="alerts"&&N(O=>[...O.slice(-9),C])}catch(C){console.error("解析SSE数据失败:",C)}});t.mockCleanup=g,n()},500)})}catch(n){console.error("连接失败:",n)}},[t,r,v]),I=()=>c.length===0?null:c[c.length-1],l=n=>{switch(n){case"ERROR":return"text-red-600 bg-red-50";case"WARN":return"text-yellow-600 bg-yellow-50";case"INFO":return"text-blue-600 bg-blue-50";case"DEBUG":return"text-gray-600 bg-gray-50";default:return"text-gray-600 bg-gray-50"}},E=n=>{switch(n){case"HIGH":return"text-red-600 bg-red-50 border-red-200";case"MEDIUM":return"text-yellow-600 bg-yellow-50 border-yellow-200";case"LOW":return"text-green-600 bg-green-50 border-green-200";default:return"text-gray-600 bg-gray-50 border-gray-200"}},w=I();return e.jsx("div",{className:"space-y-6",children:e.jsxs("div",{className:"bg-white p-6 rounded-lg shadow-sm border",children:[e.jsx("h3",{className:"text-lg font-semibold mb-4",children:"实时数据流监控"}),e.jsxs("div",{className:"grid grid-cols-4 gap-4 mb-6",children:[e.jsxs("div",{className:"space-y-2",children:[e.jsx("h4",{className:"font-medium",children:"服务器控制"}),e.jsxs("div",{className:"text-sm",children:["状态:"," ",e.jsx("span",{className:v?"text-green-600":"text-red-600",children:v?"运行中":"已停止"})]}),e.jsxs("div",{className:"space-y-1",children:[e.jsx("button",{onClick:L,disabled:v,className:"w-full px-3 py-2 bg-green-500 text-white text-sm rounded hover:bg-green-600 disabled:bg-gray-300 disabled:cursor-not-allowed transition-colors",children:"启动服务器"}),e.jsx("button",{onClick:k,disabled:!v,className:"w-full px-3 py-2 bg-red-500 text-white text-sm rounded hover:bg-red-600 disabled:bg-gray-300 disabled:cursor-not-allowed transition-colors",children:"停止服务器"})]})]}),e.jsxs("div",{className:"space-y-2",children:[e.jsx("h4",{className:"font-medium",children:"连接状态"}),e.jsxs("div",{className:"text-sm",children:["SSE:"," ",e.jsx("span",{className:i===1?"text-green-600":"text-red-600",children:i===1?"已连接":"未连接"})]}),e.jsx("button",{onClick:D,disabled:i===1||!v,className:"w-full px-3 py-2 bg-blue-500 text-white text-sm rounded hover:bg-blue-600 disabled:bg-gray-300 disabled:cursor-not-allowed transition-colors",children:"连接SSE"})]}),e.jsxs("div",{className:"space-y-2",children:[e.jsx("h4",{className:"font-medium",children:"数据统计"}),e.jsxs("div",{className:"text-sm space-y-1",children:[e.jsxs("div",{children:["指标: ",c.length]}),e.jsxs("div",{children:["日志: ",d.length]}),e.jsxs("div",{children:["告警: ",o.length]})]})]}),e.jsxs("div",{className:"space-y-2",children:[e.jsx("h4",{className:"font-medium",children:"实时指标"}),w?e.jsxs("div",{className:"text-sm space-y-1",children:[e.jsxs("div",{children:["CPU: ",(s=w.cpu)==null?void 0:s.toFixed(1),"%"]}),e.jsxs("div",{children:["内存: ",(p=w.memory)==null?void 0:p.toFixed(1),"%"]}),e.jsxs("div",{children:["磁盘: ",(S=w.disk)==null?void 0:S.toFixed(1),"%"]}),e.jsxs("div",{children:["网络: ",(T=w.network)==null?void 0:T.toFixed(0)," KB/s"]})]}):e.jsx("div",{className:"text-sm text-gray-500",children:"暂无数据"})]})]}),e.jsxs("div",{className:"grid grid-cols-3 gap-4",children:[e.jsxs("div",{children:[e.jsx("h4",{className:"font-medium mb-3",children:"系统指标"}),e.jsx("div",{className:"max-h-64 overflow-y-auto border rounded-lg p-2",children:c.length>0?e.jsx("div",{className:"space-y-2",children:c.slice(-10).map((n,g)=>{var x,j,b,M;return e.jsxs("div",{className:"p-2 bg-gray-50 rounded text-xs",children:[e.jsxs("div",{className:"grid grid-cols-2 gap-2",children:[e.jsxs("div",{children:["CPU: ",(x=n.cpu)==null?void 0:x.toFixed(1),"%"]}),e.jsxs("div",{children:["内存: ",(j=n.memory)==null?void 0:j.toFixed(1),"%"]}),e.jsxs("div",{children:["磁盘: ",(b=n.disk)==null?void 0:b.toFixed(1),"%"]}),e.jsxs("div",{children:["网络: ",(M=n.network)==null?void 0:M.toFixed(0)," KB/s"]})]}),e.jsx("div",{className:"text-gray-500 mt-1",children:new Date(n.timestamp).toLocaleTimeString()})]},g)})}):e.jsx("div",{className:"text-center text-gray-500 py-4",children:"暂无指标数据"})})]}),e.jsxs("div",{children:[e.jsx("h4",{className:"font-medium mb-3",children:"系统日志"}),e.jsx("div",{className:"max-h-64 overflow-y-auto border rounded-lg p-2",children:d.length>0?e.jsx("div",{className:"space-y-1",children:d.slice(-15).map((n,g)=>e.jsxs("div",{className:`p-2 rounded text-xs ${l(n.level)}`,children:[e.jsxs("div",{className:"flex justify-between items-center",children:[e.jsx("span",{className:"font-medium",children:n.level}),e.jsx("span",{className:"text-gray-500",children:new Date(n.timestamp).toLocaleTimeString()})]}),e.jsx("div",{className:"mt-1",children:n.message}),e.jsxs("div",{className:"text-gray-500 text-xs mt-1",children:["来源: ",n.source]})]},g))}):e.jsx("div",{className:"text-center text-gray-500 py-4",children:"暂无日志数据"})})]}),e.jsxs("div",{children:[e.jsx("h4",{className:"font-medium mb-3",children:"系统告警"}),e.jsx("div",{className:"max-h-64 overflow-y-auto border rounded-lg p-2",children:o.length>0?e.jsx("div",{className:"space-y-2",children:o.slice(-8).map((n,g)=>e.jsxs("div",{className:`p-2 rounded text-xs border ${E(n.severity)}`,children:[e.jsxs("div",{className:"flex justify-between items-center mb-1",children:[e.jsx("span",{className:"font-medium",children:n.type}),e.jsx("span",{className:"font-medium",children:n.severity})]}),e.jsx("div",{className:"mb-1",children:n.message}),e.jsx("div",{className:"text-gray-500 text-xs",children:new Date(n.timestamp).toLocaleTimeString()})]},g))}):e.jsx("div",{className:"text-center text-gray-500 py-4",children:"暂无告警数据"})})]})]})]})})},G=()=>{const r={title:"SSE管理器实现",language:"typescript",code:`// SSE管理器
class SSEManager {
  private eventSource: EventSource | null = null;
  private config: SSEConfig;
  private eventQueue: SSEEvent[] = [];
  private listeners: Map<string, Set<(event: SSEEvent) => void>> = new Map();

  constructor(config: SSEConfig) {
    this.config = {
      withCredentials: false,
      reconnectTime: 3000,
      maxReconnectAttempts: 5,
      autoReconnect: true,
      eventTypes: ['message'],
      ...config
    };
  }

  // 连接SSE
  connect(): Promise<void> {
    return new Promise((resolve, reject) => {
      const url = new URL(this.config.url);
      if (this.config.headers) {
        Object.entries(this.config.headers).forEach(([key, value]) => {
          url.searchParams.append(key, value);
        });
      }

      this.eventSource = new EventSource(url.toString(), {
        withCredentials: this.config.withCredentials
      });

      this.eventSource.onopen = (event) => {
        this.reconnectCount = 0;
        this.onStateChange?.(SSEState.OPEN);
        resolve();
      };

      this.eventSource.onmessage = (event) => {
        this.handleEvent('message', event);
      };

      this.eventSource.onerror = (event) => {
        if (this.eventSource?.readyState === EventSource.CLOSED) {
          this.onStateChange?.(SSEState.CLOSED);

          if (this.config.autoReconnect && this.reconnectCount < this.config.maxReconnectAttempts) {
            this.scheduleReconnect();
          }
        }
      };

      // 注册自定义事件类型
      this.config.eventTypes?.forEach(eventType => {
        if (eventType !== 'message') {
          this.eventSource!.addEventListener(eventType, (event) => {
            this.handleEvent(eventType, event as MessageEvent);
          });
        }
      });
    });
  }

  // 订阅事件类型
  subscribe(eventType: string, listener: (event: SSEEvent) => void): () => void {
    if (!this.listeners.has(eventType)) {
      this.listeners.set(eventType, new Set());
    }

    this.listeners.get(eventType)!.add(listener);

    // 返回取消订阅函数
    return () => {
      const listeners = this.listeners.get(eventType);
      if (listeners) {
        listeners.delete(listener);
        if (listeners.size === 0) {
          this.listeners.delete(eventType);
        }
      }
    };
  }
}`,highlights:[8,20,33,62]};return e.jsx(H,{title:"SSE支持 (Server-Sent Events Support)",description:"基于HTTP的单向实时数据推送和事件流处理系统",overview:e.jsxs("div",{className:"space-y-4",children:[e.jsx("h3",{className:"text-lg font-semibold",children:"核心概念"}),e.jsxs("ul",{className:"list-disc list-inside space-y-2 text-gray-700",children:[e.jsxs("li",{children:[e.jsx("strong",{children:"Server-Sent Events"}),"：基于HTTP的服务器推送技术，支持实时数据流"]}),e.jsxs("li",{children:[e.jsx("strong",{children:"事件流"}),"：持续的HTTP连接，服务器可以随时推送事件数据"]}),e.jsxs("li",{children:[e.jsx("strong",{children:"事件类型"}),"：支持多种自定义事件类型和数据格式"]}),e.jsxs("li",{children:[e.jsx("strong",{children:"自动重连"}),"：连接断开时的自动重连机制和错误处理"]}),e.jsxs("li",{children:[e.jsx("strong",{children:"事件订阅"}),"：基于事件类型的订阅和分发系统"]})]}),e.jsx("h3",{className:"text-lg font-semibold mt-6",children:"主要优势"}),e.jsxs("ul",{className:"list-disc list-inside space-y-2 text-gray-700",children:[e.jsx("li",{children:"基于标准HTTP协议，兼容性好"}),e.jsx("li",{children:"服务器主动推送，实时性高"}),e.jsx("li",{children:"支持自动重连和错误恢复"}),e.jsx("li",{children:"简单易用，开发成本低"}),e.jsx("li",{children:"支持多种事件类型和数据格式"})]}),e.jsx("h3",{className:"text-lg font-semibold mt-6",children:"适用场景"}),e.jsxs("ul",{className:"list-disc list-inside space-y-2 text-gray-700",children:[e.jsx("li",{children:"实时数据监控和仪表板"}),e.jsx("li",{children:"系统日志和事件流"}),e.jsx("li",{children:"股票价格、体育比分等实时更新"}),e.jsx("li",{children:"聊天应用的消息推送"}),e.jsx("li",{children:"进度条和状态更新"})]}),e.jsx("h3",{className:"text-lg font-semibold mt-6",children:"注意事项"}),e.jsxs("ul",{className:"list-disc list-inside space-y-2 text-gray-700",children:[e.jsx("li",{children:"单向通信，客户端无法向服务器发送数据"}),e.jsx("li",{children:"连接数限制，浏览器对同域名连接有限制"}),e.jsx("li",{children:"需要处理网络中断和重连逻辑"}),e.jsx("li",{children:"服务器需要正确设置CORS和缓存头"}),e.jsx("li",{children:"移动端网络切换时需要特殊处理"})]})]}),examples:[{title:"基础SSE连接",component:e.jsx(U,{}),description:"演示SSE的基本连接、事件接收和服务器控制功能",observationPoints:["启动模拟服务器后才能建立SSE连接","连接建立后开始接收各种类型的事件数据","事件按时间顺序显示，包含类型、数据和时间戳","可以发送自定义事件测试不同的数据格式","连接状态实时更新，显示当前连接状态"],keyPoints:["SSE基于HTTP长连接实现服务器推送","支持多种事件类型和自定义数据格式","事件数据采用JSON格式便于解析和处理","连接状态管理包括连接中、已连接、已关闭","模拟服务器演示了SSE的基本工作原理"],commonTraps:["忘记启动服务器就尝试连接","没有正确处理JSON解析错误","事件监听器没有正确清理导致内存泄漏","连接状态更新不及时","事件数据格式不一致"],solutions:["连接前检查服务器状态","使用try-catch包装JSON解析","在组件卸载时清理所有监听器","使用状态回调及时更新连接状态","定义统一的事件数据接口"],importantTips:["SSE连接是单向的，只能接收服务器数据","浏览器会自动处理基本的重连逻辑","事件ID可用于断线重连时的数据同步","服务器需要设置正确的Content-Type头"],codeExample:{title:"基础SSE连接实现",language:"typescript",code:`// 基础SSE连接演示
const BasicSSEDemo: React.FC = () => {
  const [sseManager, setSSEManager] = useState<SSEManager | null>(null);
  const [connectionState, setConnectionState] = useState<SSEState>(SSEState.CLOSED);
  const [events, setEvents] = useState<SSEEvent[]>([]);
  const [serverRunning, setServerRunning] = useState(false);
  const mockServer = useRef<MockSSEServer>(new MockSSEServer());

  // 启动模拟服务器
  const startServer = useCallback(() => {
    mockServer.current.start();
    setServerRunning(true);
  }, []);

  // 连接SSE
  const connectSSE = useCallback(async () => {
    if (!serverRunning) {
      alert('请先启动模拟服务器');
      return;
    }

    const manager = new SSEManager({
      url: 'http://localhost:3001/events',
      autoReconnect: true,
      reconnectTime: 3000,
      maxReconnectAttempts: 5,
      eventTypes: ['message', 'notification', 'update', 'alert']
    });

    manager.setStateChangeListener(setConnectionState);
    manager.setEventListener((event) => {
      setEvents(prev => [...prev, event].slice(-50));
    });

    try {
      await manager.connect();
      setSSEManager(manager);
    } catch (error) {
      console.error('SSE连接失败:', error);
    }
  }, [serverRunning]);

  return (
    <div className="space-y-4">
      <div className="flex gap-2">
        <button onClick={startServer} disabled={serverRunning}>
          {serverRunning ? '服务器运行中' : '启动模拟服务器'}
        </button>
        <button onClick={connectSSE} disabled={!serverRunning}>
          连接SSE
        </button>
      </div>
      
      <div className="p-4 border rounded">
        <h4>连接状态: {SSEState[connectionState]}</h4>
        <div className="mt-2">
          <h5>接收到的事件:</h5>
          {events.map((event, index) => (
            <div key={index} className="text-sm border-b py-1">
              [{event.type}] {JSON.stringify(event.data)} - {new Date(event.timestamp).toLocaleTimeString()}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};`,highlights:[3,11,17,22,31,36]}},{title:"事件过滤和分类",component:e.jsx(W,{}),description:"演示如何过滤和分类不同类型的SSE事件",observationPoints:["可以选择性显示特定类型的事件","事件类型分布图显示各类型事件的比例","过滤器实时生效，立即更新显示结果","统计信息显示总事件数和过滤后的数量","不同事件类型使用不同的颜色标识"],keyPoints:["事件过滤基于事件类型进行分类","支持多选过滤器和全选/全不选操作","实时统计各类型事件的数量和比例","过滤逻辑在客户端执行，响应速度快","可视化展示帮助理解事件分布情况"],commonTraps:["过滤器状态管理复杂容易出错","事件类型硬编码不够灵活","统计计算没有考虑性能优化","颜色映射不够直观","过滤后的事件列表没有及时更新"],solutions:["使用Set数据结构管理过滤器状态","从配置或服务器动态获取事件类型","使用useMemo优化统计计算","定义语义化的颜色映射规则","使用useEffect监听过滤器变化"],importantTips:["过滤器只影响显示，不影响数据接收","事件历史保存在内存中，注意控制大小","颜色编码有助于快速识别事件类型","统计信息可以帮助分析系统行为"],codeExample:{title:"事件过滤和分类实现",language:"typescript",code:`// 事件过滤和分类演示
const EventFilterDemo: React.FC = () => {
  const [events, setEvents] = useState<SSEEvent[]>([]);
  const [selectedTypes, setSelectedTypes] = useState<Set<string>>(new Set(['message', 'notification', 'update', 'alert']));
  const eventTypes = ['message', 'notification', 'update', 'alert'];

  // 过滤后的事件列表
  const filteredEvents = useMemo(() => {
    return events.filter(event => selectedTypes.has(event.type));
  }, [events, selectedTypes]);

  // 事件类型统计
  const eventStats = useMemo(() => {
    const stats = eventTypes.reduce((acc, type) => {
      acc[type] = events.filter(e => e.type === type).length;
      return acc;
    }, {} as Record<string, number>);
    return stats;
  }, [events, eventTypes]);

  // 切换事件类型过滤
  const toggleEventType = useCallback((type: string) => {
    setSelectedTypes(prev => {
      const newSet = new Set(prev);
      if (newSet.has(type)) {
        newSet.delete(type);
      } else {
        newSet.add(type);
      }
      return newSet;
    });
  }, []);

  // 全选/全不选
  const toggleAll = useCallback(() => {
    if (selectedTypes.size === eventTypes.length) {
      setSelectedTypes(new Set());
    } else {
      setSelectedTypes(new Set(eventTypes));
    }
  }, [selectedTypes.size, eventTypes]);

  // 获取事件类型颜色
  const getEventTypeColor = (type: string) => {
    const colors = {
      message: 'bg-blue-100 text-blue-800',
      notification: 'bg-green-100 text-green-800',
      update: 'bg-yellow-100 text-yellow-800',
      alert: 'bg-red-100 text-red-800'
    };
    return colors[type as keyof typeof colors] || 'bg-gray-100 text-gray-800';
  };

  return (
    <div className="space-y-4">
      {/* 过滤器控制 */}
      <div className="p-4 border rounded">
        <div className="flex items-center gap-2 mb-2">
          <button onClick={toggleAll} className="text-sm px-2 py-1 border rounded">
            {selectedTypes.size === eventTypes.length ? '全不选' : '全选'}
          </button>
        </div>
        <div className="flex gap-2">
          {eventTypes.map(type => (
            <label key={type} className="flex items-center gap-1">
              <input
                type="checkbox"
                checked={selectedTypes.has(type)}
                onChange={() => toggleEventType(type)}
              />
              <span className={\`px-2 py-1 rounded text-xs \${getEventTypeColor(type)}\`}>
                {type} ({eventStats[type] || 0})
              </span>
            </label>
          ))}
        </div>
      </div>

      {/* 事件列表 */}
      <div className="p-4 border rounded max-h-64 overflow-y-auto">
        <h4>过滤后的事件 ({filteredEvents.length}/{events.length})</h4>
        {filteredEvents.map((event, index) => (
          <div key={index} className={\`p-2 rounded mb-1 \${getEventTypeColor(event.type)}\`}>
            <div className="flex justify-between">
              <span className="font-medium">[{event.type}]</span>
              <span className="text-xs">{new Date(event.timestamp).toLocaleTimeString()}</span>
            </div>
            <div className="text-sm mt-1">{JSON.stringify(event.data)}</div>
          </div>
        ))}
      </div>
    </div>
  );
};`,highlights:[4,8,13,22,34,42,56]}},{title:"实时数据流监控",component:e.jsx(J,{}),description:"演示实时监控系统指标、日志和告警的完整场景",observationPoints:["系统指标每秒更新，显示CPU、内存等实时数据","日志事件随机生成，模拟真实的系统日志","告警事件较少但优先级高，需要特别关注","不同数据流使用独立的订阅和显示区域","实时指标面板显示最新的系统状态"],keyPoints:["使用事件订阅机制分别处理不同类型的数据","实时数据流需要控制数据量避免内存溢出","不同优先级的数据使用不同的显示策略","监控面板提供系统状态的直观展示","数据生成频率可以根据需要调整"],commonTraps:["数据更新频率过高导致性能问题","没有限制历史数据大小导致内存泄漏","事件订阅没有正确取消","UI更新过于频繁影响用户体验","告警数据没有突出显示"],solutions:["合理设置数据更新间隔","使用滑动窗口限制历史数据大小","在组件卸载时取消所有订阅","使用防抖或节流优化UI更新","为告警数据设计特殊的视觉样式"],importantTips:["实时监控需要平衡数据精度和性能","不同类型的数据需要不同的处理策略","告警数据通常需要持久化存储","监控系统本身也需要监控和告警"],codeExample:{title:"实时数据流监控实现",language:"typescript",code:`// 实时数据流监控演示
const RealTimeStreamDemo: React.FC = () => {
  const [sseManager, setSSEManager] = useState<SSEManager | null>(null);
  const [metrics, setMetrics] = useState<any>(null);
  const [logs, setLogs] = useState<any[]>([]);
  const [alerts, setAlerts] = useState<any[]>([]);
  const [isConnected, setIsConnected] = useState(false);

  // 连接实时数据流
  const connectStream = useCallback(async () => {
    const manager = new SSEManager({
      url: 'http://localhost:3001/monitoring',
      autoReconnect: true,
      eventTypes: ['metrics', 'log', 'alert']
    });

    // 订阅系统指标
    manager.subscribe('metrics', (event) => {
      setMetrics(event.data);
    });

    // 订阅系统日志
    manager.subscribe('log', (event) => {
      setLogs(prev => [...prev, event.data].slice(-15)); // 保留最近15条
    });

    // 订阅系统告警
    manager.subscribe('alert', (event) => {
      setAlerts(prev => [...prev, event.data].slice(-8)); // 保留最近8条
    });

    manager.setStateChangeListener((state) => {
      setIsConnected(state === SSEState.OPEN);
    });

    try {
      await manager.connect();
      setSSEManager(manager);
    } catch (error) {
      console.error('连接失败:', error);
    }
  }, []);

  // 获取日志级别颜色
  const getLogLevelColor = (level: string) => {
    const colors = {
      INFO: 'bg-blue-50 border-blue-200',
      WARN: 'bg-yellow-50 border-yellow-200',
      ERROR: 'bg-red-50 border-red-200',
      DEBUG: 'bg-gray-50 border-gray-200'
    };
    return colors[level as keyof typeof colors] || 'bg-gray-50 border-gray-200';
  };

  // 获取告警严重程度颜色
  const getAlertSeverityColor = (severity: string) => {
    const colors = {
      LOW: 'bg-green-50 border-green-200',
      MEDIUM: 'bg-yellow-50 border-yellow-200',
      HIGH: 'bg-orange-50 border-orange-200',
      CRITICAL: 'bg-red-50 border-red-200'
    };
    return colors[severity as keyof typeof colors] || 'bg-gray-50 border-gray-200';
  };

  return (
    <div className="space-y-4">
      <div className="flex gap-2">
        <button onClick={connectStream} disabled={isConnected}>
          {isConnected ? '已连接' : '连接监控流'}
        </button>
        <div className={\`px-2 py-1 rounded text-sm \${isConnected ? 'bg-green-100 text-green-800' : 'bg-gray-100 text-gray-800'}\`}>
          状态: {isConnected ? '已连接' : '未连接'}
        </div>
      </div>

      {/* 实时指标面板 */}
      {metrics && (
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          <div className="p-4 border rounded text-center">
            <div className="text-2xl font-bold text-blue-600">{metrics.cpu}%</div>
            <div className="text-sm text-gray-600">CPU使用率</div>
          </div>
          <div className="p-4 border rounded text-center">
            <div className="text-2xl font-bold text-green-600">{metrics.memory}%</div>
            <div className="text-sm text-gray-600">内存使用率</div>
          </div>
          <div className="p-4 border rounded text-center">
            <div className="text-2xl font-bold text-purple-600">{metrics.disk}%</div>
            <div className="text-sm text-gray-600">磁盘使用率</div>
          </div>
          <div className="p-4 border rounded text-center">
            <div className="text-2xl font-bold text-orange-600">{metrics.network}</div>
            <div className="text-sm text-gray-600">网络流量(MB/s)</div>
          </div>
        </div>
      )}

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {/* 系统日志 */}
        <div>
          <h4 className="font-medium mb-3">系统日志</h4>
          <div className="max-h-64 overflow-y-auto border rounded-lg p-2">
            {logs.map((log, index) => (
              <div key={index} className={\`p-2 rounded text-xs mb-1 \${getLogLevelColor(log.level)}\`}>
                <div className="flex justify-between items-center">
                  <span className="font-medium">{log.level}</span>
                  <span className="text-gray-500">{new Date(log.timestamp).toLocaleTimeString()}</span>
                </div>
                <div className="mt-1">{log.message}</div>
              </div>
            ))}
          </div>
        </div>

        {/* 系统告警 */}
        <div>
          <h4 className="font-medium mb-3">系统告警</h4>
          <div className="max-h-64 overflow-y-auto border rounded-lg p-2">
            {alerts.map((alert, index) => (
              <div key={index} className={\`p-2 rounded text-xs mb-1 \${getAlertSeverityColor(alert.severity)}\`}>
                <div className="flex justify-between items-center mb-1">
                  <span className="font-medium">{alert.type}</span>
                  <span className="font-medium">{alert.severity}</span>
                </div>
                <div className="mb-1">{alert.message}</div>
                <div className="text-gray-500 text-xs">{new Date(alert.timestamp).toLocaleTimeString()}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};`,highlights:[3,10,17,22,27,32,43,62]}}],codeExamples:[{title:"SSE管理器实现",code:r,language:"typescript",highlightLines:[15,25,35,45,55]}],tutorial:{concepts:["SSE (Server-Sent Events) 是HTML5标准的一部分，提供服务器向客户端推送数据的能力","基于HTTP协议，使用长连接保持服务器与客户端的通信通道","事件流格式简单，使用纯文本格式传输事件数据","支持自定义事件类型，可以根据业务需要定义不同的事件","浏览器提供原生的EventSource API，使用简单","支持自动重连机制，网络中断后可以自动恢复连接"],steps:["创建SSE配置对象，包含URL、重连设置、事件类型等","实例化SSE管理器，传入配置参数","调用connect方法建立与服务器的连接","使用subscribe方法订阅感兴趣的事件类型","在事件回调中处理接收到的数据","实现连接状态监听，处理连接、断开等状态变化","在组件卸载时调用disconnect方法清理资源"],tips:["服务器端需要设置正确的Content-Type: text/event-stream","使用事件ID可以实现断线重连时的数据同步","合理设置重连间隔，避免对服务器造成压力","在移动端需要处理网络切换导致的连接中断","使用心跳机制检测连接是否正常","对于大量数据流，考虑使用WebSocket替代SSE"]},interview:{questions:[{question:"SSE与WebSocket有什么区别？",answer:"SSE是单向通信，只能服务器向客户端推送数据；WebSocket是双向通信，支持客户端和服务器互相发送数据。SSE基于HTTP协议，实现简单；WebSocket是独立协议，功能更强大但复杂度更高。SSE有浏览器连接数限制；WebSocket没有此限制。"},{question:"如何处理SSE连接的错误和重连？",answer:"监听onerror事件处理连接错误；检查readyState判断连接状态；实现指数退避算法控制重连间隔；设置最大重连次数避免无限重连；使用事件ID实现断线重连时的数据同步；在网络状态变化时主动重连。"},{question:"SSE在生产环境中需要注意什么？",answer:"服务器需要正确设置CORS头支持跨域；配置反向代理支持长连接；监控连接数量避免资源耗尽；实现客户端连接管理和清理；处理移动端网络切换；设置合适的超时和心跳机制；考虑负载均衡对长连接的影响。"},{question:"如何优化SSE的性能？",answer:"控制事件推送频率避免过载；使用事件过滤减少不必要的数据传输；实现客户端数据缓存和去重；合理设置连接池大小；使用CDN加速静态资源；监控内存使用避免泄漏；在高并发场景考虑使用消息队列。"}],keyPoints:["SSE适合服务器主动推送数据的场景","基于HTTP协议，兼容性和部署简单","支持自动重连和错误恢复机制","事件类型和数据格式灵活可定制","需要考虑连接数限制和资源管理","在移动端需要特殊的网络处理"]},bestPractices:{dos:["使用事件类型对不同数据进行分类","实现完善的错误处理和重连机制","控制事件推送频率避免性能问题","在组件卸载时正确清理连接和监听器","使用心跳机制检测连接健康状态","为不同优先级的事件设计不同的处理策略"],donts:["不要忽略连接状态的管理和监控","不要在高频数据场景滥用SSE","不要忘记处理JSON解析错误","不要让事件历史数据无限增长","不要在不支持SSE的环境中强制使用","不要忽略服务器端的资源限制"],patterns:["事件订阅模式：基于事件类型的订阅和分发机制","状态管理模式：统一管理连接状态和事件数据","重连策略模式：实现指数退避的重连算法","数据流模式：处理连续的实时数据流","过滤器模式：客户端事件过滤和分类","监控模式：实时监控系统状态和性能指标"]}})};export{G as default};
