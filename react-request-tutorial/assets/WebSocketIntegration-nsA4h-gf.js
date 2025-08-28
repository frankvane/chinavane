var k=Object.defineProperty;var C=(s,t,i)=>t in s?k(s,t,{enumerable:!0,configurable:!0,writable:!0,value:i}):s[t]=i;var x=(s,t,i)=>C(s,typeof t!="symbol"?t+"":t,i);import{j as e,r as c}from"./index-Bi_r7QuH.js";import{C as W}from"./ComponentTemplate-C5EWLtXX.js";class f{constructor(t){x(this,"ws",null);x(this,"config");x(this,"messageQueue",[]);x(this,"listeners",new Map);x(this,"reconnectTimer",null);x(this,"heartbeatTimer",null);x(this,"reconnectCount",0);x(this,"onStateChange");x(this,"onMessage");x(this,"onError");this.config={reconnectAttempts:5,reconnectInterval:3e3,heartbeatInterval:3e4,messageQueueSize:100,autoReconnect:!0,...t}}connect(){return new Promise((t,i)=>{try{this.ws=new WebSocket(this.config.url,this.config.protocols),this.ws.onopen=a=>{var m;console.log("WebSocket连接已建立"),this.reconnectCount=0,this.startHeartbeat(),(m=this.onStateChange)==null||m.call(this,1),t()},this.ws.onmessage=a=>{var m;try{let o,u="message";try{o=JSON.parse(a.data),u=o.type||"message"}catch{o={content:a.data,raw:!0},u="text"}const r={id:this.generateId(),type:u,data:o,timestamp:Date.now(),direction:"received"};this.addToQueue(r),(m=this.onMessage)==null||m.call(this,r);const b=this.listeners.get(r.type);b&&b.forEach(g=>g(r.data))}catch(o){console.error("处理WebSocket消息失败:",o)}},this.ws.onclose=a=>{var m;console.log("WebSocket连接已关闭:",a.code,a.reason),this.stopHeartbeat(),(m=this.onStateChange)==null||m.call(this,3),this.config.autoReconnect&&this.reconnectCount<(this.config.reconnectAttempts||5)&&this.scheduleReconnect()},this.ws.onerror=a=>{var m;console.error("WebSocket错误:",a),(m=this.onError)==null||m.call(this,a),i(a)}}catch(a){i(a)}})}send(t,i){var a,m;if(((a=this.ws)==null?void 0:a.readyState)===1){const o={type:t,data:i,timestamp:Date.now()};this.ws.send(JSON.stringify(o));const u={id:this.generateId(),type:t,data:o,timestamp:Date.now(),direction:"sent"};return this.addToQueue(u),(m=this.onMessage)==null||m.call(this,u),!0}return!1}subscribe(t,i){return this.listeners.has(t)||this.listeners.set(t,new Set),this.listeners.get(t).add(i),()=>{const a=this.listeners.get(t);a&&(a.delete(i),a.size===0&&this.listeners.delete(t))}}disconnect(){this.config.autoReconnect=!1,this.stopHeartbeat(),this.clearReconnectTimer(),this.ws&&(this.ws.close(1e3,"正常关闭"),this.ws=null)}getState(){var t;return((t=this.ws)==null?void 0:t.readyState)??3}getMessageHistory(){return[...this.messageQueue]}setStateChangeListener(t){this.onStateChange=t}setMessageListener(t){this.onMessage=t}setErrorListener(t){this.onError=t}addToQueue(t){this.messageQueue.push(t);const i=this.config.messageQueueSize||100;this.messageQueue.length>i&&(this.messageQueue=this.messageQueue.slice(-i))}scheduleReconnect(){this.reconnectCount++;const t=this.config.reconnectInterval||3e3;console.log(`${t}ms后尝试第${this.reconnectCount}次重连...`),this.reconnectTimer=setTimeout(()=>{this.connect().catch(i=>{console.error("重连失败:",i)})},t)}clearReconnectTimer(){this.reconnectTimer&&(clearTimeout(this.reconnectTimer),this.reconnectTimer=null)}startHeartbeat(){const t=this.config.heartbeatInterval||3e4;this.heartbeatTimer=setInterval(()=>{var i;((i=this.ws)==null?void 0:i.readyState)===1&&this.send("ping",{timestamp:Date.now()})},t)}stopHeartbeat(){this.heartbeatTimer&&(clearInterval(this.heartbeatTimer),this.heartbeatTimer=null)}generateId(){return Math.random().toString(36).substr(2,9)}}const M=()=>{const[s]=c.useState(()=>new f({url:"wss://echo.websocket.org",autoReconnect:!0,reconnectAttempts:3})),[t,i]=c.useState(3),[a,m]=c.useState([]),[o,u]=c.useState(""),[r,b]=c.useState(!1);c.useEffect(()=>(s.setStateChangeListener(i),s.setMessageListener(d=>{m(n=>[...n.slice(-19),d])}),()=>{s.disconnect()}),[s]);const g=c.useCallback(async()=>{b(!0);try{await s.connect()}catch(d){console.error("连接失败:",d)}finally{b(!1)}},[s]),N=c.useCallback(()=>{s.disconnect()},[s]),h=c.useCallback(()=>{o.trim()&&(s.send("message",{content:o,sender:"client",timestamp:new Date().toISOString()})?u(""):alert("发送失败：WebSocket未连接"))},[s,o]),l=d=>{switch(d){case 0:return"连接中";case 1:return"已连接";case 2:return"关闭中";case 3:return"已关闭";default:return"未知"}},v=d=>{switch(d){case 0:return"text-yellow-600";case 1:return"text-green-600";case 2:return"text-orange-600";case 3:return"text-red-600";default:return"text-gray-600"}};return e.jsx("div",{className:"space-y-6",children:e.jsxs("div",{className:"bg-white p-6 rounded-lg shadow-sm border",children:[e.jsx("h3",{className:"text-lg font-semibold mb-4",children:"基础WebSocket连接"}),e.jsxs("div",{className:"grid grid-cols-2 gap-6",children:[e.jsxs("div",{className:"space-y-4",children:[e.jsxs("div",{children:[e.jsx("h4",{className:"font-medium mb-3",children:"连接控制"}),e.jsxs("div",{className:"space-y-3",children:[e.jsxs("div",{className:"flex items-center space-x-2",children:[e.jsx("span",{className:"text-sm font-medium",children:"状态:"}),e.jsx("span",{className:`font-medium ${v(t)}`,children:l(t)})]}),e.jsxs("div",{className:"flex space-x-2",children:[e.jsx("button",{onClick:g,disabled:t===1||r,className:"px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600 disabled:bg-gray-300 disabled:cursor-not-allowed transition-colors",children:r?"连接中...":"连接"}),e.jsx("button",{onClick:N,disabled:t===3,className:"px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600 disabled:bg-gray-300 disabled:cursor-not-allowed transition-colors",children:"断开"})]})]})]}),e.jsxs("div",{children:[e.jsx("h4",{className:"font-medium mb-3",children:"发送消息"}),e.jsxs("div",{className:"space-y-2",children:[e.jsx("input",{type:"text",value:o,onChange:d=>u(d.target.value),onKeyPress:d=>d.key==="Enter"&&h(),placeholder:"输入消息内容",className:"w-full px-3 py-2 border rounded-md",disabled:t!==1}),e.jsx("button",{onClick:h,disabled:t!==1||!o.trim(),className:"w-full px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 disabled:bg-gray-300 disabled:cursor-not-allowed transition-colors",children:"发送消息"})]})]}),e.jsxs("div",{children:[e.jsx("h4",{className:"font-medium mb-3",children:"快速测试"}),e.jsxs("div",{className:"space-y-2",children:[e.jsx("button",{onClick:()=>s.send("ping",{timestamp:Date.now()}),disabled:t!==1,className:"w-full px-4 py-2 bg-purple-500 text-white rounded hover:bg-purple-600 disabled:bg-gray-300 disabled:cursor-not-allowed transition-colors",children:"发送Ping"}),e.jsx("button",{onClick:()=>s.send("test",{message:"Hello WebSocket!",random:Math.random()}),disabled:t!==1,className:"w-full px-4 py-2 bg-indigo-500 text-white rounded hover:bg-indigo-600 disabled:bg-gray-300 disabled:cursor-not-allowed transition-colors",children:"发送测试数据"})]})]})]}),e.jsxs("div",{children:[e.jsx("h4",{className:"font-medium mb-3",children:"消息历史 (最新20条)"}),e.jsx("div",{className:"max-h-96 overflow-y-auto border rounded-lg",children:a.length>0?e.jsx("div",{className:"space-y-1 p-2",children:a.map(d=>e.jsxs("div",{className:`p-2 rounded text-xs ${d.direction==="sent"?"bg-blue-50 border-l-2 border-blue-400":"bg-green-50 border-l-2 border-green-400"}`,children:[e.jsxs("div",{className:"flex justify-between items-center mb-1",children:[e.jsxs("span",{className:`font-medium ${d.direction==="sent"?"text-blue-600":"text-green-600"}`,children:[d.direction==="sent"?"发送":"接收"," -"," ",d.type]}),e.jsx("span",{className:"text-gray-500",children:new Date(d.timestamp).toLocaleTimeString()})]}),e.jsx("div",{className:"bg-white p-2 rounded border",children:e.jsx("pre",{className:"text-xs overflow-x-auto",children:JSON.stringify(d.data,null,2)})})]},d.id))}):e.jsxs("div",{className:"p-4 text-center text-gray-500",children:["暂无消息记录",e.jsx("br",{}),e.jsx("small",{children:"连接WebSocket后开始通信"})]})})]})]})]})})},T=()=>{const[s]=c.useState(()=>new f({url:"wss://echo.websocket.org",autoReconnect:!0})),[t,i]=c.useState(3),[a,m]=c.useState(new Map),[o,u]=c.useState(new Map),[r,b]=c.useState(""),g=c.useRef(new Map);c.useEffect(()=>(s.setStateChangeListener(i),()=>{g.current.forEach(n=>n()),s.disconnect()}),[s]);const N=c.useCallback(async()=>{try{await s.connect()}catch(n){console.error("连接失败:",n)}},[s]),h=c.useCallback(n=>{if(a.has(n))return;const S=s.subscribe(n,y=>{u(p=>{const w=new Map(p),j=w.get(n)||[];return w.set(n,[...j.slice(-9),{data:y,timestamp:Date.now()}]),w}),m(p=>new Map(p.set(n,0)))});g.current.set(n,S),m(y=>new Map(y.set(n,0)))},[s,a]),l=c.useCallback(n=>{const S=g.current.get(n);S&&(S(),g.current.delete(n)),m(y=>{const p=new Map(y);return p.delete(n),p}),u(y=>{const p=new Map(y);return p.delete(n),p})},[]),v=c.useCallback(()=>{r.trim()&&(h(r.trim()),b(""))},[r,h]),d=c.useCallback(n=>{s.send(n,{message:`Test message for ${n}`,timestamp:new Date().toISOString(),random:Math.random()})},[s]);return e.jsx("div",{className:"space-y-6",children:e.jsxs("div",{className:"bg-white p-6 rounded-lg shadow-sm border",children:[e.jsx("h3",{className:"text-lg font-semibold mb-4",children:"消息订阅管理"}),e.jsxs("div",{className:"grid grid-cols-3 gap-6",children:[e.jsxs("div",{className:"space-y-4",children:[e.jsxs("div",{children:[e.jsx("h4",{className:"font-medium mb-3",children:"连接状态"}),e.jsxs("div",{className:"space-y-2",children:[e.jsxs("div",{className:"text-sm",children:["状态:"," ",e.jsx("span",{className:t===1?"text-green-600":"text-red-600",children:t===1?"已连接":"未连接"})]}),e.jsx("button",{onClick:N,disabled:t===1,className:"w-full px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600 disabled:bg-gray-300 disabled:cursor-not-allowed transition-colors",children:"连接WebSocket"})]})]}),e.jsxs("div",{children:[e.jsx("h4",{className:"font-medium mb-3",children:"添加订阅"}),e.jsxs("div",{className:"space-y-2",children:[e.jsx("input",{type:"text",value:r,onChange:n=>b(n.target.value),onKeyPress:n=>n.key==="Enter"&&v(),placeholder:"消息类型 (如: chat, notification)",className:"w-full px-3 py-2 border rounded-md"}),e.jsx("button",{onClick:v,disabled:!r.trim(),className:"w-full px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 disabled:bg-gray-300 disabled:cursor-not-allowed transition-colors",children:"添加订阅"})]})]}),e.jsxs("div",{children:[e.jsx("h4",{className:"font-medium mb-3",children:"快速订阅"}),e.jsx("div",{className:"space-y-2",children:["message","notification","ping","chat","system"].map(n=>e.jsxs("button",{onClick:()=>h(n),disabled:a.has(n),className:"w-full px-3 py-2 bg-purple-500 text-white rounded hover:bg-purple-600 disabled:bg-gray-300 disabled:cursor-not-allowed transition-colors text-sm",children:["订阅 ",n]},n))})]})]}),e.jsxs("div",{children:[e.jsx("h4",{className:"font-medium mb-3",children:"当前订阅"}),e.jsxs("div",{className:"space-y-2 max-h-96 overflow-y-auto",children:[Array.from(a.entries()).map(([n,S])=>e.jsxs("div",{className:"flex items-center justify-between p-2 border rounded",children:[e.jsxs("div",{children:[e.jsx("div",{className:"font-medium text-sm",children:n}),e.jsxs("div",{className:"text-xs text-gray-600",children:["收到 ",S," 条消息"]})]}),e.jsxs("div",{className:"flex space-x-1",children:[e.jsx("button",{onClick:()=>d(n),disabled:t!==1,className:"px-2 py-1 bg-green-500 text-white text-xs rounded hover:bg-green-600 disabled:bg-gray-300",children:"测试"}),e.jsx("button",{onClick:()=>l(n),className:"px-2 py-1 bg-red-500 text-white text-xs rounded hover:bg-red-600",children:"取消"})]})]},n)),a.size===0&&e.jsx("div",{className:"text-center text-gray-500 py-4",children:"暂无订阅"})]})]}),e.jsxs("div",{children:[e.jsx("h4",{className:"font-medium mb-3",children:"消息内容"}),e.jsxs("div",{className:"space-y-2 max-h-96 overflow-y-auto",children:[Array.from(o.entries()).map(([n,S])=>e.jsxs("div",{className:"border rounded p-2",children:[e.jsxs("div",{className:"font-medium text-sm mb-2 text-blue-600",children:[n," (",S.length,")"]}),e.jsx("div",{className:"space-y-1",children:S.slice(-3).map((y,p)=>e.jsxs("div",{className:"bg-gray-50 p-2 rounded text-xs",children:[e.jsx("div",{className:"text-gray-500 mb-1",children:new Date(y.timestamp).toLocaleTimeString()}),e.jsx("pre",{className:"overflow-x-auto",children:JSON.stringify(y.data,null,2)})]},p))})]},n)),o.size===0&&e.jsx("div",{className:"text-center text-gray-500 py-4",children:"暂无消息"})]})]})]})]})})},L=()=>{const[s]=c.useState(()=>new f({url:"wss://echo.websocket.org",autoReconnect:!0,reconnectAttempts:5,reconnectInterval:2e3,heartbeatInterval:1e4})),[t,i]=c.useState(3),[a,m]=c.useState([]),[o,u]=c.useState({autoReconnect:!0,reconnectAttempts:5,reconnectInterval:2e3,heartbeatInterval:1e4}),r=c.useCallback(l=>{const v=new Date().toLocaleTimeString();m(d=>[...d.slice(-19),`[${v}] ${l}`])},[]);c.useEffect(()=>(s.setStateChangeListener(l=>{switch(i(l),l){case 0:r("正在连接WebSocket...");break;case 1:r("WebSocket连接成功");break;case 2:r("WebSocket连接关闭中...");break;case 3:r("WebSocket连接已关闭");break}}),s.setErrorListener(l=>{r(`WebSocket错误: ${l.type}`)}),()=>{s.disconnect()}),[s,r]);const b=c.useCallback(async()=>{r("开始连接...");try{await s.connect()}catch(l){r(`连接失败: ${l}`)}},[s,r]),g=c.useCallback(()=>{r("手动断开连接"),s.disconnect()},[s,r]),N=c.useCallback(()=>{r("模拟网络问题 - 强制关闭连接"),s.getState()===1&&(s.disconnect(),setTimeout(()=>{o.autoReconnect&&(r("自动重连机制启动..."),b())},1e3))},[s,o.autoReconnect,r,b]),h=c.useCallback(l=>{u(v=>({...v,...l})),r(`配置已更新: ${JSON.stringify(l)}`)},[r]);return e.jsx("div",{className:"space-y-6",children:e.jsxs("div",{className:"bg-white p-6 rounded-lg shadow-sm border",children:[e.jsx("h3",{className:"text-lg font-semibold mb-4",children:"自动重连机制"}),e.jsxs("div",{className:"grid grid-cols-3 gap-6",children:[e.jsxs("div",{className:"space-y-4",children:[e.jsxs("div",{children:[e.jsx("h4",{className:"font-medium mb-3",children:"连接控制"}),e.jsxs("div",{className:"space-y-2",children:[e.jsxs("div",{className:"text-sm",children:["状态:"," ",e.jsx("span",{className:t===1?"text-green-600":"text-red-600",children:t===1?"已连接":"未连接"})]}),e.jsx("button",{onClick:b,disabled:t===1,className:"w-full px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600 disabled:bg-gray-300 disabled:cursor-not-allowed transition-colors",children:"连接"}),e.jsx("button",{onClick:g,disabled:t===3,className:"w-full px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600 disabled:bg-gray-300 disabled:cursor-not-allowed transition-colors",children:"断开"}),e.jsx("button",{onClick:N,disabled:t!==1,className:"w-full px-4 py-2 bg-orange-500 text-white rounded hover:bg-orange-600 disabled:bg-gray-300 disabled:cursor-not-allowed transition-colors",children:"模拟网络问题"})]})]}),e.jsxs("div",{children:[e.jsx("h4",{className:"font-medium mb-3",children:"重连配置"}),e.jsxs("div",{className:"space-y-3",children:[e.jsx("div",{children:e.jsxs("label",{className:"flex items-center space-x-2",children:[e.jsx("input",{type:"checkbox",checked:o.autoReconnect,onChange:l=>h({autoReconnect:l.target.checked}),className:"rounded"}),e.jsx("span",{className:"text-sm",children:"启用自动重连"})]})}),e.jsxs("div",{children:[e.jsx("label",{className:"block text-sm font-medium mb-1",children:"重连次数"}),e.jsx("input",{type:"number",value:o.reconnectAttempts,onChange:l=>h({reconnectAttempts:parseInt(l.target.value)||5}),min:"1",max:"10",className:"w-full px-3 py-2 border rounded-md"})]}),e.jsxs("div",{children:[e.jsx("label",{className:"block text-sm font-medium mb-1",children:"重连间隔 (ms)"}),e.jsx("input",{type:"number",value:o.reconnectInterval,onChange:l=>h({reconnectInterval:parseInt(l.target.value)||2e3}),min:"1000",max:"10000",step:"1000",className:"w-full px-3 py-2 border rounded-md"})]}),e.jsxs("div",{children:[e.jsx("label",{className:"block text-sm font-medium mb-1",children:"心跳间隔 (ms)"}),e.jsx("input",{type:"number",value:o.heartbeatInterval,onChange:l=>h({heartbeatInterval:parseInt(l.target.value)||1e4}),min:"5000",max:"60000",step:"5000",className:"w-full px-3 py-2 border rounded-md"})]})]})]})]}),e.jsxs("div",{children:[e.jsx("h4",{className:"font-medium mb-3",children:"连接日志"}),e.jsx("div",{className:"max-h-96 overflow-y-auto border rounded-lg p-2",children:a.length>0?e.jsx("div",{className:"space-y-1",children:a.map((l,v)=>e.jsx("div",{className:"text-xs font-mono p-1 bg-gray-50 rounded",children:l},v))}):e.jsx("div",{className:"text-center text-gray-500 py-4",children:"暂无日志"})})]}),e.jsxs("div",{children:[e.jsx("h4",{className:"font-medium mb-3",children:"功能说明"}),e.jsxs("div",{className:"space-y-3 text-sm",children:[e.jsxs("div",{className:"p-3 bg-blue-50 rounded",children:[e.jsx("div",{className:"font-medium text-blue-800 mb-1",children:"自动重连"}),e.jsx("div",{className:"text-blue-700",children:"连接断开时自动尝试重新连接，支持配置重连次数和间隔时间。"})]}),e.jsxs("div",{className:"p-3 bg-green-50 rounded",children:[e.jsx("div",{className:"font-medium text-green-800 mb-1",children:"心跳检测"}),e.jsx("div",{className:"text-green-700",children:"定期发送心跳包检测连接状态，及时发现连接异常。"})]}),e.jsxs("div",{className:"p-3 bg-yellow-50 rounded",children:[e.jsx("div",{className:"font-medium text-yellow-800 mb-1",children:"状态监控"}),e.jsx("div",{className:"text-yellow-700",children:"实时监控连接状态变化，提供详细的连接日志。"})]}),e.jsxs("div",{className:"p-3 bg-purple-50 rounded",children:[e.jsx("div",{className:"font-medium text-purple-800 mb-1",children:"错误处理"}),e.jsx("div",{className:"text-purple-700",children:"完善的错误处理机制，支持网络异常恢复。"})]})]})]})]})]})})},P=()=>{const s={title:"WebSocket管理器实现",language:"typescript",code:`// WebSocket管理器
class WebSocketManager {
  private ws: WebSocket | null = null;
  private config: WebSocketConfig;
  private messageQueue: WebSocketMessage[] = [];
  private listeners: Map<string, Set<(data: any) => void>> = new Map();
  private reconnectTimer: NodeJS.Timeout | null = null;
  private heartbeatTimer: NodeJS.Timeout | null = null;

  constructor(config: WebSocketConfig) {
    this.config = {
      reconnectAttempts: 5,
      reconnectInterval: 3000,
      heartbeatInterval: 30000,
      messageQueueSize: 100,
      autoReconnect: true,
      ...config
    };
  }

  // 连接WebSocket
  connect(): Promise<void> {
    return new Promise((resolve, reject) => {
      this.ws = new WebSocket(this.config.url, this.config.protocols);

      this.ws.onopen = (event) => {
        this.reconnectCount = 0;
        this.startHeartbeat();
        this.onStateChange?.(WebSocketState.OPEN);
        resolve();
      };

      this.ws.onmessage = (event) => {
        const data = JSON.parse(event.data);
        const message: WebSocketMessage = {
          id: this.generateId(),
          type: data.type || 'message',
          data: data,
          timestamp: Date.now(),
          direction: 'received'
        };

        this.addToQueue(message);
        this.onMessage?.(message);

        // 触发类型监听器
        const listeners = this.listeners.get(message.type);
        if (listeners) {
          listeners.forEach(listener => listener(message.data));
        }
      };

      this.ws.onclose = (event) => {
        this.stopHeartbeat();
        this.onStateChange?.(WebSocketState.CLOSED);

        if (this.config.autoReconnect && this.reconnectCount < this.config.reconnectAttempts) {
          this.scheduleReconnect();
        }
      };
    });
  }

  // 发送消息
  send(type: string, data: any): boolean {
    if (this.ws?.readyState === WebSocketState.OPEN) {
      const message = { type, data, timestamp: Date.now() };
      this.ws.send(JSON.stringify(message));
      return true;
    }
    return false;
  }

  // 订阅消息类型
  subscribe(type: string, listener: (data: any) => void): () => void {
    if (!this.listeners.has(type)) {
      this.listeners.set(type, new Set());
    }

    this.listeners.get(type)!.add(listener);

    // 返回取消订阅函数
    return () => {
      const listeners = this.listeners.get(type);
      if (listeners) {
        listeners.delete(listener);
        if (listeners.size === 0) {
          this.listeners.delete(type);
        }
      }
    };
  }
}`,highlights:[10,23,34,62]};return e.jsx(W,{title:"WebSocket集成 (WebSocket Integration)",description:"实时双向通信的WebSocket连接管理和消息处理系统",overview:e.jsxs("div",{className:"space-y-4",children:[e.jsx("h3",{className:"text-lg font-semibold",children:"核心概念"}),e.jsxs("ul",{className:"list-disc list-inside space-y-2 text-gray-700",children:[e.jsxs("li",{children:[e.jsx("strong",{children:"WebSocket协议"}),"：基于TCP的全双工通信协议，支持实时数据传输"]}),e.jsxs("li",{children:[e.jsx("strong",{children:"连接管理"}),"：自动连接、断开检测、状态监控和错误处理"]}),e.jsxs("li",{children:[e.jsx("strong",{children:"消息系统"}),"：类型化消息、订阅机制和消息队列管理"]}),e.jsxs("li",{children:[e.jsx("strong",{children:"自动重连"}),"：网络异常时的自动重连机制和策略配置"]}),e.jsxs("li",{children:[e.jsx("strong",{children:"心跳检测"}),"：定期发送心跳包维持连接活跃状态"]})]}),e.jsx("h3",{className:"text-lg font-semibold mt-6",children:"主要优势"}),e.jsxs("ul",{className:"list-disc list-inside space-y-2 text-gray-700",children:[e.jsx("li",{children:"实时双向通信，延迟极低"}),e.jsx("li",{children:"完善的连接管理和错误恢复机制"}),e.jsx("li",{children:"灵活的消息订阅和分发系统"}),e.jsx("li",{children:"自动重连和心跳检测保证连接稳定"}),e.jsx("li",{children:"支持消息历史记录和状态监控"})]}),e.jsx("h3",{className:"text-lg font-semibold mt-6",children:"适用场景"}),e.jsxs("ul",{className:"list-disc list-inside space-y-2 text-gray-700",children:[e.jsx("li",{children:"实时聊天和即时通讯应用"}),e.jsx("li",{children:"实时数据推送和通知系统"}),e.jsx("li",{children:"在线协作和多人编辑工具"}),e.jsx("li",{children:"实时监控和数据可视化"}),e.jsx("li",{children:"在线游戏和实时交互应用"})]}),e.jsx("h3",{className:"text-lg font-semibold mt-6",children:"注意事项"}),e.jsxs("ul",{className:"list-disc list-inside space-y-2 text-gray-700",children:[e.jsx("li",{children:"WebSocket连接需要服务器端支持"}),e.jsx("li",{children:"移动网络环境下连接可能不稳定"}),e.jsx("li",{children:"需要处理连接断开和重连逻辑"}),e.jsx("li",{children:"消息顺序和可靠性需要应用层保证"}),e.jsx("li",{children:"防火墙和代理可能影响连接"})]})]}),examples:[{title:"基础WebSocket连接",component:e.jsx(M,{}),description:"展示WebSocket的基本连接、消息发送和接收功能",observationPoints:["观察连接状态的实时变化","注意消息的发送和接收过程","查看消息历史记录的格式","观察连接失败时的错误处理"],keyPoints:["WebSocket提供全双工通信能力","连接状态需要实时监控和处理","消息格式需要统一和标准化","支持多种类型的消息传输"],commonTraps:["未处理连接断开的情况","消息格式不统一导致解析错误","忽略连接状态检查直接发送消息","未实现错误处理和重试机制"],solutions:["实现完善的连接状态管理","定义统一的消息格式和协议","发送消息前检查连接状态","添加错误处理和自动重连机制"],codeExample:s},{title:"消息订阅管理",component:e.jsx(T,{}),description:"展示基于消息类型的订阅和分发机制",observationPoints:["观察不同消息类型的订阅过程","注意消息分发到对应订阅者","查看订阅统计和消息计数","观察取消订阅的清理过程"],keyPoints:["支持按消息类型进行订阅","自动分发消息到对应订阅者","提供订阅管理和统计功能","支持动态添加和移除订阅"],importantTips:["订阅者需要及时清理避免内存泄漏","消息类型要有明确的命名规范","支持一个消息类型多个订阅者","订阅统计有助于监控系统状态"],codeExample:{title:"消息订阅管理实现",language:"typescript",code:`// 消息订阅管理演示
const MessageSubscriptionDemo: React.FC = () => {
  const [wsManager, setWsManager] = useState<WebSocketManager | null>(null);
  const [connectionState, setConnectionState] = useState<WebSocketState>(WebSocketState.CLOSED);
  const [subscriptions, setSubscriptions] = useState<Map<string, number>>(new Map());
  const [messagesByType, setMessagesByType] = useState<Record<string, WebSocketMessage[]>>({});
  const messageTypes = ['chat', 'notification', 'system', 'broadcast'];

  // 连接WebSocket
  const connectWebSocket = useCallback(async () => {
    const manager = new WebSocketManager({
      url: 'ws://localhost:8080',
      autoReconnect: true,
      reconnectAttempts: 5,
      heartbeatInterval: 30000
    });

    manager.setStateChangeListener(setConnectionState);
    manager.setMessageListener((message) => {
      setMessagesByType(prev => ({
        ...prev,
        [message.type]: [...(prev[message.type] || []), message].slice(-10)
      }));
    });

    try {
      await manager.connect();
      setWsManager(manager);
    } catch (error) {
      console.error('WebSocket连接失败:', error);
    }
  }, []);

  // 订阅消息类型
  const subscribeToType = useCallback((type: string) => {
    if (!wsManager) return;

    const unsubscribe = wsManager.subscribe(type, (data) => {
      console.log(\`收到\${type}类型消息:\`, data);
    });

    setSubscriptions(prev => {
      const newMap = new Map(prev);
      newMap.set(type, (newMap.get(type) || 0) + 1);
      return newMap;
    });

    // 返回取消订阅函数
    return unsubscribe;
  }, [wsManager]);

  // 取消订阅
  const unsubscribeFromType = useCallback((type: string) => {
    setSubscriptions(prev => {
      const newMap = new Map(prev);
      const count = newMap.get(type) || 0;
      if (count > 1) {
        newMap.set(type, count - 1);
      } else {
        newMap.delete(type);
      }
      return newMap;
    });
  }, []);

  // 发送测试消息
  const sendTestMessage = useCallback((type: string) => {
    if (!wsManager || connectionState !== WebSocketState.OPEN) return;

    const testData = {
      chat: { user: 'Alice', message: 'Hello everyone!' },
      notification: { title: '新消息', content: '您有一条新的通知' },
      system: { event: 'user_login', userId: '12345' },
      broadcast: { announcement: '系统将在5分钟后维护' }
    };

    wsManager.send(type, testData[type as keyof typeof testData]);
  }, [wsManager, connectionState]);

  return (
    <div className="space-y-4">
      <div className="flex gap-2">
        <button onClick={connectWebSocket} disabled={connectionState !== WebSocketState.CLOSED}>
          {connectionState === WebSocketState.CLOSED ? '连接WebSocket' : '已连接'}
        </button>
        <div className={\`px-2 py-1 rounded text-sm \${connectionState === WebSocketState.OPEN ? 'bg-green-100 text-green-800' : 'bg-gray-100 text-gray-800'}\`}>
          状态: {WebSocketState[connectionState]}
        </div>
      </div>

      {/* 订阅管理 */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {messageTypes.map(type => (
          <div key={type} className="p-4 border rounded">
            <h4 className="font-medium mb-2">{type}</h4>
            <div className="text-sm text-gray-600 mb-2">
              订阅数: {subscriptions.get(type) || 0}
            </div>
            <div className="space-y-1">
              <button
                onClick={() => subscribeToType(type)}
                disabled={connectionState !== WebSocketState.OPEN}
                className="w-full text-xs px-2 py-1 bg-blue-500 text-white rounded disabled:bg-gray-300"
              >
                订阅
              </button>
              <button
                onClick={() => unsubscribeFromType(type)}
                disabled={!subscriptions.has(type)}
                className="w-full text-xs px-2 py-1 bg-red-500 text-white rounded disabled:bg-gray-300"
              >
                取消订阅
              </button>
              <button
                onClick={() => sendTestMessage(type)}
                disabled={connectionState !== WebSocketState.OPEN}
                className="w-full text-xs px-2 py-1 bg-green-500 text-white rounded disabled:bg-gray-300"
              >
                发送测试
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* 消息显示 */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {messageTypes.map(type => (
          <div key={type} className="border rounded p-4">
            <h4 className="font-medium mb-2">{type} 消息 ({(messagesByType[type] || []).length})</h4>
            <div className="max-h-32 overflow-y-auto space-y-1">
              {(messagesByType[type] || []).map((message, index) => (
                <div key={index} className="text-xs p-2 bg-gray-50 rounded">
                  <div className="flex justify-between">
                    <span className={\`font-medium \${message.direction === 'sent' ? 'text-blue-600' : 'text-green-600'}\`}>
                      {message.direction === 'sent' ? '发送' : '接收'}
                    </span>
                    <span className="text-gray-500">
                      {new Date(message.timestamp).toLocaleTimeString()}
                    </span>
                  </div>
                  <div className="mt-1">{JSON.stringify(message.data)}</div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};`,highlights:[3,10,18,34,47,61,73]}},{title:"自动重连机制",component:e.jsx(L,{}),description:"展示网络异常时的自动重连和心跳检测功能",observationPoints:["观察网络问题模拟的重连过程","注意重连配置参数的影响","查看连接日志的详细记录","观察心跳检测的工作机制"],keyPoints:["自动检测连接断开并尝试重连","支持配置重连次数和间隔时间","心跳检测维持连接活跃状态","详细的连接日志便于问题诊断"],importantTips:["重连间隔要合理避免频繁重连","心跳间隔要平衡性能和及时性","重连次数限制防止无限重连","连接日志有助于问题排查"],codeExample:{title:"自动重连机制实现",language:"typescript",code:`// 自动重连机制演示
const AutoReconnectDemo: React.FC = () => {
  const [wsManager, setWsManager] = useState<WebSocketManager | null>(null);
  const [connectionState, setConnectionState] = useState<WebSocketState>(WebSocketState.CLOSED);
  const [connectionLogs, setConnectionLogs] = useState<string[]>([]);
  const [reconnectConfig, setReconnectConfig] = useState({
    enabled: true,
    maxAttempts: 5,
    interval: 3000,
    heartbeatInterval: 30000
  });

  // 添加连接日志
  const addLog = useCallback((message: string) => {
    const timestamp = new Date().toLocaleTimeString();
    setConnectionLogs(prev => [...prev, \`[\${timestamp}] \${message}\`].slice(-20));
  }, []);

  // 连接WebSocket
  const connectWithReconnect = useCallback(async () => {
    addLog('开始连接WebSocket...');

    const manager = new WebSocketManager({
      url: 'ws://localhost:8080',
      autoReconnect: reconnectConfig.enabled,
      reconnectAttempts: reconnectConfig.maxAttempts,
      reconnectInterval: reconnectConfig.interval,
      heartbeatInterval: reconnectConfig.heartbeatInterval
    });

    manager.setStateChangeListener((state) => {
      setConnectionState(state);
      const stateNames = {
        [WebSocketState.CONNECTING]: '连接中',
        [WebSocketState.OPEN]: '已连接',
        [WebSocketState.CLOSING]: '关闭中',
        [WebSocketState.CLOSED]: '已关闭'
      };
      addLog(\`连接状态变更: \${stateNames[state]}\`);
    });

    manager.setErrorListener((error) => {
      addLog(\`连接错误: \${error.type}\`);
    });

    // 监听重连事件
    manager.setMessageListener((message) => {
      if (message.type === 'reconnect_attempt') {
        addLog(\`重连尝试 #\${message.data.attempt}/\${reconnectConfig.maxAttempts}\`);
      } else if (message.type === 'heartbeat') {
        addLog('发送心跳包');
      }
    });

    try {
      await manager.connect();
      setWsManager(manager);
      addLog('WebSocket连接成功');
    } catch (error) {
      addLog(\`连接失败: \${error}\`);
    }
  }, [reconnectConfig, addLog]);

  // 模拟网络问题
  const simulateNetworkIssue = useCallback(() => {
    if (wsManager) {
      addLog('模拟网络中断...');
      wsManager.disconnect();

      // 模拟网络恢复后自动重连
      setTimeout(() => {
        addLog('网络恢复，触发自动重连');
        if (reconnectConfig.enabled) {
          connectWithReconnect();
        }
      }, 2000);
    }
  }, [wsManager, reconnectConfig.enabled, connectWithReconnect, addLog]);

  // 手动重连
  const manualReconnect = useCallback(() => {
    if (wsManager) {
      wsManager.disconnect();
    }
    setTimeout(() => {
      connectWithReconnect();
    }, 1000);
  }, [wsManager, connectWithReconnect]);

  return (
    <div className="space-y-4">
      {/* 重连配置 */}
      <div className="p-4 border rounded">
        <h4 className="font-medium mb-3">重连配置</h4>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          <label className="flex items-center gap-2">
            <input
              type="checkbox"
              checked={reconnectConfig.enabled}
              onChange={(e) => setReconnectConfig(prev => ({ ...prev, enabled: e.target.checked }))}
            />
            <span className="text-sm">启用自动重连</span>
          </label>
          <div>
            <label className="block text-sm mb-1">最大重连次数</label>
            <input
              type="number"
              min="1"
              max="10"
              value={reconnectConfig.maxAttempts}
              onChange={(e) => setReconnectConfig(prev => ({ ...prev, maxAttempts: parseInt(e.target.value) }))}
              className="w-full px-2 py-1 border rounded text-sm"
            />
          </div>
          <div>
            <label className="block text-sm mb-1">重连间隔(ms)</label>
            <input
              type="number"
              min="1000"
              max="10000"
              step="1000"
              value={reconnectConfig.interval}
              onChange={(e) => setReconnectConfig(prev => ({ ...prev, interval: parseInt(e.target.value) }))}
              className="w-full px-2 py-1 border rounded text-sm"
            />
          </div>
          <div>
            <label className="block text-sm mb-1">心跳间隔(ms)</label>
            <input
              type="number"
              min="10000"
              max="60000"
              step="5000"
              value={reconnectConfig.heartbeatInterval}
              onChange={(e) => setReconnectConfig(prev => ({ ...prev, heartbeatInterval: parseInt(e.target.value) }))}
              className="w-full px-2 py-1 border rounded text-sm"
            />
          </div>
        </div>
      </div>

      {/* 控制按钮 */}
      <div className="flex gap-2">
        <button
          onClick={connectWithReconnect}
          disabled={connectionState === WebSocketState.OPEN}
          className="px-4 py-2 bg-blue-500 text-white rounded disabled:bg-gray-300"
        >
          连接
        </button>
        <button
          onClick={simulateNetworkIssue}
          disabled={connectionState !== WebSocketState.OPEN}
          className="px-4 py-2 bg-orange-500 text-white rounded disabled:bg-gray-300"
        >
          模拟网络问题
        </button>
        <button
          onClick={manualReconnect}
          className="px-4 py-2 bg-green-500 text-white rounded"
        >
          手动重连
        </button>
        <div className={\`px-3 py-2 rounded text-sm \${connectionState === WebSocketState.OPEN ? 'bg-green-100 text-green-800' : 'bg-gray-100 text-gray-800'}\`}>
          状态: {WebSocketState[connectionState]}
        </div>
      </div>

      {/* 连接日志 */}
      <div className="p-4 border rounded">
        <h4 className="font-medium mb-3">连接日志</h4>
        <div className="max-h-64 overflow-y-auto bg-gray-50 p-3 rounded text-sm font-mono">
          {connectionLogs.length > 0 ? (
            connectionLogs.map((log, index) => (
              <div key={index} className="mb-1">{log}</div>
            ))
          ) : (
            <div className="text-gray-500">暂无日志</div>
          )}
        </div>
      </div>
    </div>
  );
};`,highlights:[3,14,19,30,41,58,72,85]}}],tutorial:{concepts:["WebSocket是HTML5标准的一部分，提供全双工通信","连接建立后客户端和服务器可以随时发送数据","WebSocket使用ws://或wss://协议进行连接","消息可以是文本或二进制数据","连接状态包括CONNECTING、OPEN、CLOSING、CLOSED","需要处理网络异常和连接断开的情况"],steps:["设计WebSocket连接管理器的基础架构","实现连接建立、消息发送和接收功能","添加连接状态监控和事件处理","实现消息类型化和订阅分发机制","添加自动重连和心跳检测功能","实现消息队列和历史记录管理","添加错误处理和日志记录功能","优化性能和内存使用"],tips:["使用Promise包装WebSocket连接过程","实现统一的消息格式和协议","添加连接状态的实时监控","使用Map管理消息类型订阅","实现指数退避的重连策略","定期清理消息历史避免内存泄漏","添加连接质量监控和统计","考虑移动网络的特殊情况"]},interview:{questions:[{question:"WebSocket与HTTP请求有什么区别？",answer:"主要区别包括：1）通信方式：WebSocket是全双工通信，HTTP是请求-响应模式；2）连接持久性：WebSocket保持长连接，HTTP通常是短连接；3）开销：WebSocket建立连接后开销很小，HTTP每次请求都有完整的头部；4）实时性：WebSocket支持服务器主动推送，HTTP需要客户端轮询；5）协议：WebSocket使用ws://或wss://，HTTP使用http://或https://。"},{question:"如何处理WebSocket连接断开的情况？",answer:"处理连接断开需要：1）监听onclose和onerror事件；2）实现自动重连机制，使用指数退避策略；3）添加重连次数限制避免无限重连；4）在重连期间缓存待发送的消息；5）提供连接状态给用户界面；6）实现心跳检测及时发现连接异常；7）处理网络切换等特殊情况。"},{question:"WebSocket的消息订阅机制如何实现？",answer:"消息订阅机制实现包括：1）定义消息类型和格式标准；2）使用Map存储消息类型到监听器的映射；3）实现subscribe方法添加监听器；4）在收到消息时根据类型分发给对应监听器；5）提供unsubscribe方法移除监听器；6）支持一个类型多个监听器；7）及时清理监听器避免内存泄漏。"},{question:"WebSocket的性能优化有哪些方面？",answer:"性能优化包括：1）消息批处理：合并多个小消息减少网络开销；2）消息压缩：对大消息进行压缩传输；3）连接池：复用连接减少建立开销；4）心跳优化：合理设置心跳间隔；5）消息队列：限制队列大小避免内存溢出；6）事件处理：使用异步处理避免阻塞；7）错误处理：快速失败和恢复机制。"}],keyPoints:["WebSocket提供全双工实时通信能力","连接管理和状态监控是关键","自动重连机制保证连接稳定性","消息订阅系统提高开发效率","心跳检测维持连接活跃状态","错误处理和日志记录很重要"]},bestPractices:{dos:["实现完善的连接状态管理","添加自动重连和心跳检测","使用统一的消息格式和协议","实现消息类型化和订阅机制","添加错误处理和日志记录","限制消息队列大小避免内存泄漏","提供连接质量监控和统计","考虑移动网络的特殊情况"],donts:["不要忽略连接状态检查","不要无限制地重连尝试","不要在连接断开时继续发送消息","不要忽略消息格式的统一性","不要忘记清理事件监听器","不要设置过短的心跳间隔","不要忽略错误处理和异常情况","不要在生产环境使用不安全的连接"],patterns:["连接管理器模式：统一管理WebSocket连接","观察者模式：实现消息订阅和分发","状态机模式：管理连接状态转换","重试模式：实现自动重连机制","心跳模式：维持连接活跃状态","消息队列模式：缓存和管理消息","工厂模式：创建不同类型的消息","装饰器模式：增强消息处理功能"]}})};export{P as default};
