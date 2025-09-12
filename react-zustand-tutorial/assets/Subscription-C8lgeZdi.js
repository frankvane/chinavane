import{R as d,j as t}from"./index-BWM6UHr8.js";import{c as x,C as g}from"./ComponentTemplate-ClBHhBQ8.js";let S=1;const n=x(e=>({connected:!1,messages:[],connect:()=>e({connected:!0}),disconnect:()=>e({connected:!1}),pushMessage:r=>e(o=>({messages:[{id:S++,ts:Date.now(),...r},...o.messages].slice(0,50)})),clear:()=>e({messages:[]})})),p=e=>e.connected,b=e=>e.messages,f=e=>e.messages.length,v=()=>{const e=n(p),r=n(b),o=n(s=>s.connect),c=n(s=>s.disconnect),a=n(s=>s.clear);return d.useEffect(()=>{const s=n.subscribe((i,m)=>{i.connected!==m.connected&&console.log("[SUBSCRIBE] connected change:",m.connected,"->",i.connected)});return()=>s()},[]),t.jsxs("div",{className:"space-y-3",children:[t.jsxs("div",{className:"flex gap-2",children:[t.jsx("button",{className:"px-3 py-1 rounded bg-green-600 text-white",onClick:o,disabled:e,children:"连接"}),t.jsx("button",{className:"px-3 py-1 rounded bg-gray-600 text-white",onClick:c,disabled:!e,children:"断开"}),t.jsx("button",{className:"px-3 py-1 rounded bg-amber-600 text-white",onClick:a,children:"清空消息"})]}),t.jsxs("div",{className:"text-sm text-gray-700",children:["状态：",e?"已连接":"未连接"]}),t.jsxs("ul",{className:"text-sm rounded border divide-y max-h-48 overflow-auto",children:[r.map(s=>t.jsxs("li",{className:"p-2 flex items-center justify-between",children:[t.jsxs("span",{className:"font-mono text-xs text-gray-500",children:["#",s.id]}),t.jsx("span",{className:{info:"text-gray-800",warn:"text-orange-700",error:"text-red-700"}[s.type],children:s.text}),t.jsx("span",{className:"text-gray-400 text-xs",children:new Date(s.ts).toLocaleTimeString()})]},s.id)),r.length===0&&t.jsx("li",{className:"p-3 text-gray-500",children:"暂无消息"})]})]})},h=()=>{const e=n(p),r=n(b),o=n(c=>c.pushMessage);return d.useEffect(()=>{if(!e)return;const c=setInterval(()=>{const a=["Hello","World","Zustand","Subscribe","Message"],s=a[Math.floor(Math.random()*a.length)],i=["info","warn","error"][Math.floor(Math.random()*3)];o({text:s,type:i})},1200);return()=>clearInterval(c)},[e,o]),t.jsxs("div",{className:"space-y-3",children:[t.jsxs("div",{className:"text-sm text-gray-700",children:["外部源模拟：",e?"接收中...":"未连接"]}),t.jsxs("div",{className:"text-xs text-gray-500",children:["最新：",r[0]?`${r[0].text} (${r[0].type})`:"—"]})]})},y=()=>{const e=n(f);return d.useEffect(()=>{const r=n.subscribe((o,c)=>{const a=o.messages.length,s=c.messages.length;a!==s&&console.log("[SUBSCRIBE] length:",s,"->",a)});return()=>r()},[]),t.jsxs("div",{className:"text-sm text-gray-700",children:["未读条数：",e]})},M=`import {\r
  selectConnected,\r
  selectMessages,\r
  useSubscriptionStore,\r
} from "../stores/subscriptionStore";\r
\r
import React from "react";\r
\r
const BasicSubscribeDemo: React.FC = () => {\r
  const connected = useSubscriptionStore(selectConnected);\r
  const messages = useSubscriptionStore(selectMessages);\r
  const connect = useSubscriptionStore((s) => s.connect);\r
  const disconnect = useSubscriptionStore((s) => s.disconnect);\r
  const clear = useSubscriptionStore((s) => s.clear);\r
\r
  React.useEffect(() => {\r
    const unsub = useSubscriptionStore.subscribe((state, prev) => {\r
      if (state.connected !== prev.connected) {\r
        console.log(\r
          "[SUBSCRIBE] connected change:",\r
          prev.connected,\r
          "->",\r
          state.connected\r
        );\r
      }\r
    });\r
    return () => unsub();\r
  }, []);\r
\r
  return (\r
    <div className="space-y-3">\r
      <div className="flex gap-2">\r
        <button\r
          className="px-3 py-1 rounded bg-green-600 text-white"\r
          onClick={connect}\r
          disabled={connected}\r
        >\r
          连接\r
        </button>\r
        <button\r
          className="px-3 py-1 rounded bg-gray-600 text-white"\r
          onClick={disconnect}\r
          disabled={!connected}\r
        >\r
          断开\r
        </button>\r
        <button\r
          className="px-3 py-1 rounded bg-amber-600 text-white"\r
          onClick={clear}\r
        >\r
          清空消息\r
        </button>\r
      </div>\r
      <div className="text-sm text-gray-700">\r
        状态：{connected ? "已连接" : "未连接"}\r
      </div>\r
      <ul className="text-sm rounded border divide-y max-h-48 overflow-auto">\r
        {messages.map((m) => (\r
          <li key={m.id} className="p-2 flex items-center justify-between">\r
            <span className="font-mono text-xs text-gray-500">#{m.id}</span>\r
            <span\r
              className={\r
                {\r
                  info: "text-gray-800",\r
                  warn: "text-orange-700",\r
                  error: "text-red-700",\r
                }[m.type]\r
              }\r
            >\r
              {m.text}\r
            </span>\r
            <span className="text-gray-400 text-xs">\r
              {new Date(m.ts).toLocaleTimeString()}\r
            </span>\r
          </li>\r
        ))}\r
        {messages.length === 0 && (\r
          <li className="p-3 text-gray-500">暂无消息</li>\r
        )}\r
      </ul>\r
    </div>\r
  );\r
};\r
\r
export default BasicSubscribeDemo;\r
`,N=`import {\r
  selectConnected,\r
  selectMessages,\r
  useSubscriptionStore,\r
} from "../stores/subscriptionStore";\r
\r
import React from "react";\r
\r
const ExternalSourceDemo: React.FC = () => {\r
  const connected = useSubscriptionStore(selectConnected);\r
  const messages = useSubscriptionStore(selectMessages);\r
  const pushMessage = useSubscriptionStore((s) => s.pushMessage);\r
\r
  React.useEffect(() => {\r
    if (!connected) return;\r
    const timer = setInterval(() => {\r
      const pool = ["Hello", "World", "Zustand", "Subscribe", "Message"];\r
      const text = pool[Math.floor(Math.random() * pool.length)];\r
      const type = (["info", "warn", "error"] as const)[\r
        Math.floor(Math.random() * 3)\r
      ];\r
      pushMessage({ text, type });\r
    }, 1200);\r
    return () => clearInterval(timer);\r
  }, [connected, pushMessage]);\r
\r
  return (\r
    <div className="space-y-3">\r
      <div className="text-sm text-gray-700">\r
        外部源模拟：{connected ? "接收中..." : "未连接"}\r
      </div>\r
      <div className="text-xs text-gray-500">\r
        最新：{messages[0] ? \`\${messages[0].text} (\${messages[0].type})\` : "—"}\r
      </div>\r
    </div>\r
  );\r
};\r
\r
export default ExternalSourceDemo;\r
`,w=`import {\r
  selectUnreadCount,\r
  useSubscriptionStore,\r
} from "../stores/subscriptionStore";\r
\r
import React from "react";\r
\r
const SelectiveSubscribeDemo: React.FC = () => {\r
  const unread = useSubscriptionStore(selectUnreadCount);\r
\r
  React.useEffect(() => {\r
    const unsub = useSubscriptionStore.subscribe((state, prev) => {\r
      const nv = state.messages.length;\r
      const ov = prev.messages.length;\r
      if (nv !== ov) {\r
        console.log("[SUBSCRIBE] length:", ov, "->", nv);\r
      }\r
    });\r
    return () => unsub();\r
  }, []);\r
\r
  return <div className="text-sm text-gray-700">未读条数：{unread}</div>;\r
};\r
\r
export default SelectiveSubscribeDemo;\r
`,l=`import type { FeedMessage, SubscriptionState } from "../types";

import { create } from "zustand";

let idSeq = 1;

export const useSubscriptionStore = create<SubscriptionState>((set) => ({
  connected: false,
  messages: [],

  connect: () => set({ connected: true }),
  disconnect: () => set({ connected: false }),

  pushMessage: (msg) =>
    set((state) => {
      const next: FeedMessage = { id: idSeq++, ts: Date.now(), ...msg };
      const messages = [next, ...state.messages].slice(0, 50);
      return { messages };
    }),

  clear: () => set({ messages: [] }),
}));

export const selectConnected = (s: SubscriptionState) => s.connected;
export const selectMessages = (s: SubscriptionState) => s.messages;
export const selectUnreadCount = (s: SubscriptionState) => s.messages.length;
`,u=`export interface FeedMessage {
  id: number;
  type: "info" | "warn" | "error";
  text: string;
  ts: number;
}

export interface SubscriptionState {
  connected: boolean;
  messages: FeedMessage[];
  connect: () => void;
  disconnect: () => void;
  pushMessage: (msg: Omit<FeedMessage, "id" | "ts">) => void;
  clear: () => void;
}

export type SubSelector<T> = (s: SubscriptionState) => T;
`,E=()=>t.jsx(g,{title:"订阅模式（subscribe）",description:"演示如何在组件内外通过 subscribe 监听 store 变化，支持选择器订阅、外部事件源驱动、以及高性能的选择性监听，延续章节一的不可变更新与选择器最佳实践。",overview:[{title:"核心概念",items:["subscribe 可在组件外/内监听 store 变化，返回取消订阅函数，适合横切关注点和非 UI 副作用。","可监听整个 state 或通过选择器监听片段变化，支持高性能的选择性订阅。","保持不可变更新，便于订阅比较与调试，配合 DevTools 可追踪每次状态变更。","subscribe 回调中避免直接 setState，推荐先比较再触发副作用，防止循环。","可与 WebSocket、Service Worker、日志、埋点等外部系统集成，实现跨域响应。","订阅逻辑与渲染逻辑解耦：渲染使用 useStore，副作用使用 subscribe。","选择器订阅应返回原始值或稳定引用，必要时配合浅比较。"]},{title:"主要优势",items:["支持非 React 环境（如 WebSocket/Service）监听，扩展性强。","更细粒度的变化响应，减少不必要渲染，提升性能。","与中间件/外部源组合灵活，便于扩展和横切关注点管理。","可用于日志记录、埋点、告警、自动保存等场景，增强业务能力。","渲染订阅与副作用订阅解耦，提升代码可维护性。","便于灰度发布/A-B Test 数据采集。","可与持久化/缓存策略配合实现恢复与回放。"]},{title:"适用场景",items:["外部数据源推送（WebSocket、EventSource、定时器等）","组件外业务逻辑/服务层对状态的观察与编排（如自动保存、告警）","对特定字段变更进行副作用触发（如阈值告警、自动刷新）","性能敏感的选择性订阅（仅订阅某字段或片段）","日志、埋点、监控等横切关注点的实现。","联动多个 store 的跨域编排（组件/服务层实现）。"]},{title:"注意事项",items:["务必在 useEffect 或初始化流程中注册并在清理时取消订阅，防止内存泄漏。","避免在订阅回调里直接 setState 造成循环更新，推荐先比较再触发。","选择器订阅应返回原始值或稳定引用，避免每次新对象导致频繁触发。","外部源与 store 解耦，组件负责编排流程，store 只负责数据和纯逻辑。","跨 store 监听建议放在组件/服务层，避免 store 互相引用导致耦合。","对高频推送做节流/批处理，避免抖动与卡顿。","订阅中的副作用要可中止/可清理，避免悬挂任务。"]}],examples:[{title:"基础订阅（组件内）",component:t.jsx(v,{}),description:"在组件中注册订阅监听 connected 字段变化，并提供连接/断开/清空操作。",observationPoints:["在 useEffect 中注册订阅并返回取消函数，防止泄漏","只在 connected 变化时打印日志，避免多余输出","按钮禁用逻辑由订阅的状态驱动（connected）","消息列表限制长度，避免无限增长内存","多次切换连接可观察订阅效果"],keyPoints:["subscribe 回调拿到 state 与 prev，可比较差异","选择器在组件渲染中使用，订阅在副作用中管理","保持不可变更新，便于比较与调试","把副作用留在组件层，store 专注数据与纯逻辑","订阅注册/清理与组件生命周期对齐"],commonTraps:["未清理订阅导致重复监听与内存泄漏","在订阅回调中 setState 触发循环更新","选择器返回新对象导致订阅每次都触发","在 store 内直接订阅另一个 store 导致耦合","在订阅内执行耗时任务阻塞线程"],solutions:["始终在 useEffect 返回中取消订阅","在订阅回调中先比较再执行副作用，避免无谓触发","选择器返回原始值或稳定引用；必要时浅比较","跨 store 监听放在组件/服务层完成，避免 store 互引","在订阅中使用节流/队列处理昂贵任务"],preCode:[{title:"类型定义",code:u},{title:"Store 定义",code:l}],codeExample:{title:"基础订阅组件实现",code:M}},{title:"外部源驱动（连接后推送消息）",component:t.jsx(h,{}),description:"模拟连接后由外部源定时推送消息，通过 action 写入 store。",observationPoints:["连接状态决定外部源是否启动（useEffect 依赖 connected）","仅使用 pushMessage 修改 store，外部源与 store 解耦","消息上屏限制长度，避免无限增长","最新一条消息优先展示，便于确认数据链路"],keyPoints:["外部源使用组件 effect 编排，store 提供纯动作","避免在 store 中开定时器，职责保持清晰","action 命名语义化：pushMessage/clear","可与 devtools/persist 等中间件组合调试","对推送频率进行节流或批处理"],commonTraps:["将外部源逻辑塞进 store，难以测试和复用","未清理 interval 导致多重定时器","消息结构与类型缺失导致展示异常","推送频率过高引发性能问题","在外部源里直接操作 DOM 或副作用"],solutions:["把外部源留在组件/服务层，store 保持纯净","在 effect 返回中清理 interval/订阅","定义明确的 FeedMessage 类型并限制队列长度","必要时做采样/节流与批处理写入","在 action 内仅做纯数据写入，不做副作用"],preCode:[{title:"类型定义",code:u},{title:"Store 定义",code:l}],codeExample:{title:"外部源驱动组件实现",code:N}},{title:"选择性订阅（仅关注条数）",component:t.jsx(y,{}),description:"通过 subscribe(state, prev) 比较前后长度，仅在变化时输出日志。",observationPoints:["订阅函数手动比较 state 与 prev 的差异","只输出条数变化日志，减少噪音","渲染层继续用选择器获取原始值（unread）","可拓展为阈值告警、埋点等场景","在高频推送时依然稳定"],keyPoints:["在订阅里做最小对比，控制副作用触发","避免返回新对象的选择器，降低订阅频率","组件渲染订阅解耦（useStore vs subscribe）","与多 store 可组合：组件层做跨域编排","必要时使用浅比较或自定义比较函数"],commonTraps:["订阅逻辑直接 setState 造成环","用 selector 返回对象导致每次都触发","在 store 内做跨域订阅导致耦合与循环","忽略清理导致多重监听","在订阅中做同步重任务影响帧率"],solutions:["先比较变化再执行副作用，必要时做节流/防抖","返回原始类型（number/boolean/string）做选择器结果","跨域监听放在组件或服务层，显式传参调用 action","始终返回取消函数清理订阅","将重任务转移到 requestIdleCallback/worker"],preCode:[{title:"类型定义",code:u},{title:"Store 定义",code:l}],codeExample:{title:"选择性订阅组件实现",code:w}}],tutorial:{concepts:["subscribe 可用于组件外监听，与 useStore 互补","不可变更新让订阅比较更可靠","选择器应返回原始类型或稳定引用，避免无谓触发","渲染订阅与副作用订阅解耦，结构更清晰","与外部源/中间件/服务层组合的可扩展性"],steps:["定义 store 与类型（状态/动作/消息结构）","在组件中通过 useEffect 注册订阅并清理","将外部源逻辑放在组件/服务层，调用 action 写入","通过最小对比触发副作用并保持渲染订阅解耦","用 DevTools/日志验证订阅触发点与顺序"],tips:["订阅内避免直接 setState，必要时比较后再触发","限制列表长度，格式化显示时间/文本","对频繁事件做节流/批量入队，避免抖动","在路由切换/卸载时确保取消订阅"]},interview:{questions:[{question:"subscribe 与 useStore 的区别与使用场景？",answer:"useStore 用于渲染订阅，驱动 UI；subscribe 用于组件外/横切副作用监听，驱动日志、外部源编排等。二者可并用并解耦。"},{question:"如何避免 subscribe 造成的循环更新？",answer:"不要在订阅回调里直接 setState；先比较新旧值，只在变化时触发副作用；必要时做节流/防抖；把 UI 更新留在组件层。"},{question:"如何设计外部源推送？",answer:"在组件/服务层启动和清理定时器或流，调用 store 的纯动作写入；限制队列长度；类型明确；必要时采样与批处理。"},{question:"如何做跨多个 store 的联动？",answer:"将联动逻辑放在组件/服务层，使用选择器与明确的 action，避免 store 互订阅造成耦合。"}],keyPoints:["渲染订阅与副作用订阅解耦","选择器返回原始值，清晰可比","订阅注册与清理成对出现","外部源与 store 解耦，动作语义明确","高频事件节流/批处理策略"]},bestPractices:{dos:["在 useEffect 中注册订阅并清理","选择器返回原始值或稳定引用，必要时浅比较","限制队列长度与格式化展示数据","将外部源逻辑放在组件/服务层，store 保持纯净","用 DevTools/日志确认订阅时序与副作用触发"],donts:["不要在订阅里直接 setState 造成循环更新","不要让选择器返回新对象导致每次触发","不要在 store 内部启动不可控的外部源","不要忽略取消订阅，避免泄漏"],patterns:["渲染订阅（useStore）+ 副作用订阅（subscribe）分层","原始值选择器 + 不可变更新","外部源编排在组件/服务层 + store 纯动作写入","节流/批处理 + 日志观测"]}});export{E as default};
