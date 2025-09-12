import{r as u,j as e}from"./index-BWM6UHr8.js";import{c as f,C as v}from"./ComponentTemplate-ClBHhBQ8.js";const b=()=>Math.random().toString(36).slice(2),h=["wss://ws.ifelse.io","wss://echo.websocket.events","wss://demos.kaazing.com/echo"],l=f((o,d)=>{let n=null;const r=(t,s)=>o({status:t,lastError:s}),g=()=>{const t=n;t&&(t.onopen=()=>r("connected"),t.onerror=s=>{const c=(s==null?void 0:s.message)||"WebSocket error";r("error",c)},t.onclose=s=>{const c=s.reason||`code ${s.code}`;o({status:"disconnected",lastError:c})},t.onmessage=s=>{const c=typeof s.data=="string"?s.data:"[binary]",m={id:b(),text:c,ts:Date.now(),direction:"received"};o(p=>({messages:[...p.messages,m]}))})},i=t=>{try{o({url:t,messages:[],lastError:void 0}),r("connecting"),n==null||n.close(),n=new WebSocket(t),g()}catch(s){r("error",s.message)}};return{url:h[0],status:"disconnected",messages:[],connect:t=>{const s=d().url,c=t?[t]:[s,...h.filter(m=>m!==s)];i(c[0])},disconnect:()=>{n==null||n.close(),n=null,r("disconnected")},send:t=>{const s=n;if(!s||s.readyState!==WebSocket.OPEN)return;s.send(t);const c={id:b(),text:t,ts:Date.now(),direction:"sent"};o(m=>({messages:[...m.messages,c]}))},clearMessages:()=>o({messages:[]})}}),w=()=>{const o=l(t=>t.status),d=l(t=>t.url),n=l(t=>t.connect),r=l(t=>t.disconnect),[g,i]=u.useState(d);return u.useEffect(()=>{i(d)},[d]),e.jsxs("div",{className:"space-y-3",children:[e.jsxs("div",{className:"flex items-center gap-2",children:[e.jsx("span",{className:"text-sm text-gray-600",children:"当前状态："}),e.jsx("span",{className:`px-2 py-0.5 rounded text-sm ${o==="connected"?"bg-green-100 text-green-700":o==="connecting"?"bg-yellow-100 text-yellow-700":o==="error"?"bg-red-100 text-red-700":"bg-gray-100 text-gray-700"}`,children:o})]}),e.jsxs("div",{className:"flex flex-wrap gap-2",children:[e.jsx("input",{value:g,onChange:t=>i(t.target.value),className:"px-3 py-1 border rounded w-80"}),e.jsx("button",{onClick:()=>n(g),className:"px-3 py-1 rounded bg-blue-500 text-white hover:bg-blue-600 text-sm",children:"连接"}),e.jsx("button",{onClick:r,className:"px-3 py-1 rounded bg-gray-500 text-white hover:bg-gray-600 text-sm",children:"断开"})]}),e.jsx("p",{className:"text-xs text-gray-500",children:"默认使用公共 echo WS：wss://echo.websocket.events"})]})},N=()=>{const o=l(a=>a.status),d=l(a=>a.send),n=l(a=>a.messages),[r,g]=u.useState("Hello WebSocket"),[i,t]=u.useState(!1),[s,c]=u.useState(null),[m,p]=u.useState(""),S=o!=="connected";u.useEffect(()=>{if(!s)return;if(n.some(x=>x.direction==="received"&&x.text===s.text&&x.ts>=s.ts)){p("✅ 已收到回显"),c(null);const x=setTimeout(()=>p(""),1500);return()=>clearTimeout(x)}},[n,s]);const y=u.useMemo(()=>S?"未连接":s?"已发送，等待回显…":i?"发送中…":"就绪",[S,i,s]);return e.jsxs("div",{className:"space-y-3",children:[e.jsxs("div",{className:"flex items-center gap-2",children:[e.jsx("span",{className:"text-sm text-gray-600",children:"发送内容："}),e.jsx("input",{value:r,onChange:a=>g(a.target.value),className:"px-3 py-1 border rounded w-80"})]}),e.jsxs("div",{className:"flex items-center gap-3",children:[e.jsx("button",{disabled:S||!r.trim()||i,onClick:async()=>{if(!r.trim())return;t(!0);const a=r,x=Date.now();try{d(a),c({text:a,ts:x}),p("✈️ 已发送"),g("")}finally{setTimeout(()=>t(!1),200)}},className:`px-3 py-1 rounded text-sm ${S||!r.trim()||i?"bg-gray-300 cursor-not-allowed":"bg-indigo-500 text-white hover:bg-indigo-600"}`,children:i?"发送中…":"发送"}),e.jsxs("span",{className:"text-xs text-gray-500",children:[y,m?` · ${m}`:""]})]}),e.jsx("p",{className:"text-xs text-gray-500",children:"连接成功后可发送消息，echo 服务会原样返回。建议先在上方“基础连接/断开”中连接。"})]})},k=()=>{const o=l(n=>n.messages),d=l(n=>n.clearMessages);return e.jsxs("div",{className:"space-y-3",children:[e.jsxs("div",{className:"flex items-center justify-between",children:[e.jsx("h4",{className:"font-medium",children:"消息时间线"}),e.jsx("button",{onClick:d,className:"px-3 py-1 rounded bg-red-500 text-white hover:bg-red-600 text-sm",children:"清空"})]}),e.jsx("div",{className:"max-h-56 overflow-auto border rounded p-2 bg-white",children:o.length===0?e.jsx("p",{className:"text-sm text-gray-500",children:"暂无消息"}):e.jsx("ul",{className:"space-y-1 text-sm",children:o.map(n=>e.jsxs("li",{className:`px-2 py-1 rounded border ${n.direction==="sent"?"bg-blue-50 border-blue-200":"bg-green-50 border-green-200"}`,children:[e.jsxs("span",{className:"text-gray-500 mr-2",children:["[",new Date(n.ts).toLocaleTimeString(),"]"]}),e.jsx("span",{className:"mr-2",children:n.direction==="sent"?"发送":"接收"}),e.jsx("span",{className:"font-mono break-all",children:n.text})]},n.id))})})]})},W=`import React, { useEffect, useState } from 'react';
import { useWSStore } from '../stores/wsStore';

const BasicConnectDemo: React.FC = () => {
  const status = useWSStore((s) => s.status);
  const url = useWSStore((s) => s.url);
  const connect = useWSStore((s) => s.connect);
  const disconnect = useWSStore((s) => s.disconnect);

  const [input, setInput] = useState(url);

  useEffect(() => {
    setInput(url);
  }, [url]);

  return (
    <div className="space-y-3">
      <div className="flex items-center gap-2">
        <span className="text-sm text-gray-600">当前状态：</span>
        <span className={\`px-2 py-0.5 rounded text-sm \${status === 'connected' ? 'bg-green-100 text-green-700' : status === 'connecting' ? 'bg-yellow-100 text-yellow-700' : status === 'error' ? 'bg-red-100 text-red-700' : 'bg-gray-100 text-gray-700'}\`}>{status}</span>
      </div>
      <div className="flex flex-wrap gap-2">
        <input value={input} onChange={(e) => setInput(e.target.value)} className="px-3 py-1 border rounded w-80" />
        <button onClick={() => connect(input)} className="px-3 py-1 rounded bg-blue-500 text-white hover:bg-blue-600 text-sm">连接</button>
        <button onClick={disconnect} className="px-3 py-1 rounded bg-gray-500 text-white hover:bg-gray-600 text-sm">断开</button>
      </div>
      <p className="text-xs text-gray-500">默认使用公共 echo WS：wss://echo.websocket.events</p>
    </div>
  );
};

export default BasicConnectDemo;
`,E=`import React, { useEffect, useMemo, useState } from 'react';
import { useWSStore } from '../stores/wsStore';

const SendEchoDemo: React.FC = () => {
  const status = useWSStore((s) => s.status);
  const send = useWSStore((s) => s.send);
  const messages = useWSStore((s) => s.messages);
  const [text, setText] = useState('Hello WebSocket');
  const [isSending, setIsSending] = useState(false);
  const [pendingEcho, setPendingEcho] = useState<{ text: string; ts: number } | null>(null);
  const [hint, setHint] = useState<string>('');

  const disabled = status !== 'connected';

  useEffect(() => {
    if (!pendingEcho) return;
    const ok = messages.some((m) => m.direction === 'received' && m.text === pendingEcho.text && m.ts >= pendingEcho.ts);
    if (ok) {
      setHint('✅ 已收到回显');
      setPendingEcho(null);
      const t = setTimeout(() => setHint(''), 1500);
      return () => clearTimeout(t);
    }
  }, [messages, pendingEcho]);

  const statusTip = useMemo(() => {
    if (disabled) return '未连接';
    if (pendingEcho) return '已发送，等待回显…';
    if (isSending) return '发送中…';
    return '就绪';
  }, [disabled, isSending, pendingEcho]);

  return (
    <div className="space-y-3">
      <div className="flex items-center gap-2">
        <span className="text-sm text-gray-600">发送内容：</span>
        <input value={text} onChange={(e) => setText(e.target.value)} className="px-3 py-1 border rounded w-80" />
      </div>
      <div className="flex items-center gap-3">
        <button
          disabled={disabled || !text.trim() || isSending}
          onClick={async () => {
            if (!text.trim()) return;
            setIsSending(true);
            const payload = text;
            const ts = Date.now();
            try {
              send(payload);
              setPendingEcho({ text: payload, ts });
              setHint('✈️ 已发送');
              setText('');
            } finally {
              setTimeout(() => setIsSending(false), 200);
            }
          }}
          className={\`px-3 py-1 rounded text-sm \${disabled || !text.trim() || isSending ? 'bg-gray-300 cursor-not-allowed' : 'bg-indigo-500 text-white hover:bg-indigo-600'}\`}
        >
          {isSending ? '发送中…' : '发送'}
        </button>
        <span className="text-xs text-gray-500">{statusTip}{hint ? \` · \${hint}\` : ''}</span>
      </div>
      <p className="text-xs text-gray-500">连接成功后可发送消息，echo 服务会原样返回。建议先在上方“基础连接/断开”中连接。</p>
    </div>
  );
};

export default SendEchoDemo;
`,j=`import type { WSMessage, WSStatus, WSStore } from "../types";
import { create } from "zustand";

const genId = () => Math.random().toString(36).slice(2);

// 一些常用的公共 echo WS 端点（按优先级）
const FALLBACK_URLS = [
  "wss://ws.ifelse.io",
  "wss://echo.websocket.events",
  "wss://demos.kaazing.com/echo",
];

export const useWSStore = create<WSStore>((set, get) => {
  let socket: WebSocket | null = null;

  const setStatus = (status: WSStatus, err?: string) => set({ status, lastError: err });

  const attach = () => {
    const s = socket;
    if (!s) return;
    s.onopen = () => setStatus("connected");
    s.onerror = (ev) => {
      const msg = (ev as unknown as { message?: string })?.message || "WebSocket error";
      setStatus("error", msg);
    };
    s.onclose = (ev) => {
      const reason = ev.reason || \`code \${ev.code}\`;
      set({ status: "disconnected", lastError: reason });
    };
    s.onmessage = (ev) => {
      const text = typeof ev.data === "string" ? ev.data : "[binary]";
      const msg: WSMessage = { id: genId(), text, ts: Date.now(), direction: "received" };
      set((st) => ({ messages: [...st.messages, msg] }));
    };
  };

  const openSocket = (target: string) => {
    try {
      set({ url: target, messages: [], lastError: undefined });
      setStatus("connecting");
      socket?.close();
      socket = new WebSocket(target);      attach();
    } catch (e) {
      setStatus("error", (e as Error).message);
    }
  };

  return {
    url: FALLBACK_URLS[0],
    status: "disconnected",
    messages: [],

    connect: (url?: string) => {
      // 优先使用用户输入，否则使用当前 url，再否则使用候选列表第一个
      const current = get().url;
      const candidates = url ? [url] : [current, ...FALLBACK_URLS.filter((u) => u !== current)];
      // 依次尝试，直到有一个成功（由 UI 观察 connected），错误由 onclose/onerror 填充 lastError
      openSocket(candidates[0]);
    },

    disconnect: () => {
      socket?.close();
      socket = null;
      setStatus("disconnected");
    },

    send: (text: string) => {
      const s = socket;
      if (!s || s.readyState !== WebSocket.OPEN) return;
      s.send(text);
      const msg: WSMessage = { id: genId(), text, ts: Date.now(), direction: "sent" };
      set((st) => ({ messages: [...st.messages, msg] }));
    },

    clearMessages: () => set({ messages: [] }),
  };
});
`,C=`import React from 'react';
import { useWSStore } from '../stores/wsStore';

const TimelineDemo: React.FC = () => {
  const messages = useWSStore((s) => s.messages);
  const clear = useWSStore((s) => s.clearMessages);

  return (
    <div className="space-y-3">
      <div className="flex items-center justify-between">
        <h4 className="font-medium">消息时间线</h4>
        <button onClick={clear} className="px-3 py-1 rounded bg-red-500 text-white hover:bg-red-600 text-sm">清空</button>
      </div>
      <div className="max-h-56 overflow-auto border rounded p-2 bg-white">
        {messages.length === 0 ? (
          <p className="text-sm text-gray-500">暂无消息</p>
        ) : (
          <ul className="space-y-1 text-sm">
            {messages.map((m) => (
              <li key={m.id} className={\`px-2 py-1 rounded border \${m.direction === 'sent' ? 'bg-blue-50 border-blue-200' : 'bg-green-50 border-green-200'}\`}>
                <span className="text-gray-500 mr-2">[{new Date(m.ts).toLocaleTimeString()}]</span>
                <span className="mr-2">{m.direction === 'sent' ? '发送' : '接收'}</span>
                <span className="font-mono break-all">{m.text}</span>
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
};

export default TimelineDemo;
`,I=`export interface WSMessage {
  id: string;
  text: string;
  ts: number; // epoch milliseconds
  direction: 'sent' | 'received';
}

export type WSStatus = 'disconnected' | 'connecting' | 'connected' | 'error';

export interface WSState {
  url: string;
  status: WSStatus;
  messages: WSMessage[];
  lastError?: string;
}

export interface WSActions {
  connect: (url?: string) => void;
  disconnect: () => void;
  send: (text: string) => void;
  clearMessages: () => void;
}

export type WSStore = WSState & WSActions;
`,L=()=>e.jsx(v,{title:"WebSocket 状态管理",description:"使用 Zustand 管理 WebSocket：连接/断开、消息发送/接收、错误与状态管理；示例基于公共 echo WebSocket 服务。",overview:[{title:"核心概念",items:["连接状态：disconnected/connecting/connected/error（用受限枚举）。","消息模型：id/text/ts/direction（sent/received），统一时间线。","副作用集中：连接/事件绑定/清理统一在 store 管理。","可配置 URL：支持自定义公共 WS 地址与候选回退。","错误归一：将 onerror/onclose 信息收敛为 lastError 与状态迁移。","幂等与释放：重复 connect 时应先断开旧连接，清理监听与引用。"]},{title:"主要优势",items:["解耦视图：组件专注展示，逻辑驻留在 store。","可测性强：动作与状态可模拟，易于单测与可视化验证。","可替换性：快速切换公共 echo 服务与生产网关。","可观测：统一时间线便于回放与问题定位。","可扩展：易加心跳、重连、鉴权、多频道等能力。","性能友好：组件以选择器订阅最小切片，减少重渲染。"]},{title:"适用场景",items:["聊天/通知/弹幕等实时推送。","行情/监控/仪表盘等高频更新。","多人协作与白板同步。","游戏与实时互动。","IoT 设备状态上报与指令下发。","需要跨页共享连接状态的应用。"]},{title:"注意事项",items:["公共 echo 服务仅用于演示，生产需鉴权、限流与重连策略。","断开时务必关闭 socket 并移除事件监听，防止内存泄漏。","发送前校验连接状态并禁用按钮，提升可用性与健壮性。","处理非文本与大报文（可增加二进制/JSON 解析与截断）。","跨页/卸载清理：在页面切换或卸载时确保断开连接。","错误透明：记录 lastError 并在 UI 中透出可诊断信息。"]}],examples:[{title:"基础连接/断开",component:e.jsx(w,{}),description:"连接到公共 echo 服务，并演示连接状态切换。",observationPoints:["连接按钮后状态是否从 connecting 变为 connected。","断开后是否回到 disconnected。","错误时是否进入 error 并显示 lastError。"],keyPoints:["connect(url?) 会重建连接并重置消息列表。","统一 onopen/onclose/onerror/onmessage 绑定。","重复连接前先清理旧实例，避免悬挂监听。"],codeExample:{code:W,title:"BasicConnectDemo.tsx"}},{title:"发送/回显",component:e.jsx(N,{}),description:"发送任意文本，echo 服务会原样返回。",observationPoints:["未连接时发送按钮应禁用。","发送后时间线新增“发送”与“接收”的两条记录。","UI 有发送中/等待回显/收到回显的状态提示。"],keyPoints:["send(text) 会写入发送消息并交给 socket 发送。","收到消息追加到时间线（direction=received）。","输入框校验与发送反馈可提升可用性。"],codeExample:{code:E,title:"SendEchoDemo.tsx"}},{title:"消息时间线",component:e.jsx(k,{}),description:"查看收发消息的完整时间线，支持清空。",observationPoints:["时间线按 ts 顺序显示消息。","点击清空后消息列表清零。","方向标识与时间戳清晰可辨。"],keyPoints:["统一数据结构便于渲染与追踪。","清空动作不影响连接状态。","可扩展过滤/搜索与导出能力。"],codeExample:{code:C,title:"TimelineDemo.tsx"}},{title:"Store 源码速览",component:e.jsx("div",{className:"text-sm text-gray-600",children:"右侧为关键实现，包含连接、断开、发送、事件绑定与错误处理。"}),description:"核心 store 与类型定义代码片段。",observationPoints:["connect/disconnect 的资源释放与重入保护。","onmessage/onerror/onclose 三者的状态迁移是否一致。","是否存在多处重复绑定或遗漏解除。"],keyPoints:["通过受控状态暴露连接状态与错误。","使用统一的消息结构写入时间线。"],codeExample:{code:`${I}

${j}`,title:"types + wsStore"}}],tutorial:{concepts:["连接生命周期：connect → open → message/close/error → disconnect。","状态驱动 UI：组件订阅 status/messages 渲染。","副作用封装：集中管理事件、错误和清理。","受限枚举：用状态机思维约束状态迁移。","幂等清理：重复连接前先断开旧连接与监听。","可替换后端：抽象 URL 与回退列表，便于切换服务。"],steps:["定义 WSStore 类型（状态/消息/动作）。","实现 wsStore：connect/disconnect/send/clearMessages。","绑定 socket 事件并在状态中维护 messages。","实现错误捕获并透出 lastError 与 status。","在组件中以选择器订阅最小切片以减少重渲染。","使用公共 echo 服务验证收发流程与 UI 反馈。"],tips:["断开时记得关闭 socket 并置空引用。","收到非字符串数据时给出占位标记或安全解析 JSON。","必要时可扩展重连/心跳策略与指数退避。","发送前做空字符串/最大长度校验与去抖。","在生产环境增加鉴权/签名与断线重试策略。","为时间线提供筛选与清空能力，避免无限增长。"]},interview:{questions:[{question:"为什么要把 WebSocket 放到 store？",answer:"解耦组件与连接逻辑，统一管理生命周期与状态，便于测试与复用。"},{question:"如何避免内存泄漏？",answer:"disconnect 时移除事件、关闭 socket 并清空引用；在组件卸载时做清理。"},{question:"如何支持多个频道或 URL？",answer:"将 url 作为状态或参数，按需创建独立 store 或在单 store 中用 map 维护多个连接。"},{question:"如何设计重连策略？",answer:"使用心跳检测 + 指数退避重连，限制最大重试次数并在 UI 暴露状态。"},{question:"如何处理大报文与二进制？",answer:"约定消息格式，区分文本/二进制，必要时使用流式解析与截断显示。"},{question:"如何降低组件重渲染？",answer:"使用选择器订阅最小状态切片，必要时使用浅比较或 memo。"}],keyPoints:["集中式生命周期与副作用管理。","状态机化的连接状态与清晰的状态迁移。","错误与异常路径的统一可观测性。","最小切片订阅与性能优化策略。","可扩展的重连/心跳/鉴权/多实例方案。","良好的清理与资源释放习惯。"]},bestPractices:{dos:["用受限枚举表示连接状态并覆盖所有迁移路径。","组件以选择器订阅最小切片，避免不必要渲染。","发送前校验连接状态与输入合法性。","统一收敛错误信息便于诊断与展示。","为连接与消息处理编写单元测试或集成测试。","提供清空时间线与错误重置的能力。"],donts:["不要在多个地方重复绑定事件监听。","不要忽略 onerror/onclose 带来的状态迁移。","不要让组件直接持有 socket 引用（集中在 store）。","不要在未连接状态下尝试发送消息。","不要无限增长消息数组而无管理。","不要忽视跨页卸载时的连接清理。"],patterns:["echo 验证：用公共 echo 服务快速验证收发流程。","timeline：统一消息结构方便渲染与调试。","facade：对外暴露 connect/send/disconnect 等最小 API。","retry/backoff：心跳 + 指数退避的稳定连接策略。","selector：以选择器组合派生 UI 所需的状态。","observer：用订阅与时间线实现可观察性与追踪。"]}});export{L as default};
