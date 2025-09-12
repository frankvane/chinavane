import{r as p,j as e}from"./index-BWM6UHr8.js";import{c as f,C as y}from"./ComponentTemplate-ClBHhBQ8.js";const k=window.requestIdleCallback||(n=>window.setTimeout(()=>n({timeRemaining:()=>0,didTimeout:!0}),1)),C=window.cancelIdleCallback||window.clearTimeout,x=f(n=>{let t=null,s=0,d=1e3,u=0,c=0,a=[];const m=()=>{t=k(()=>{const l=Math.min(d,s-c),o=c;for(let i=0;i<l;i++){const h=o+i+1;a.push({id:h,label:`Item ${h}`})}if(c+=l,n({items:a,isChunking:!0,chunkProgress:Math.round(c/s*100)}),c<s)m();else{const i=Math.max(0,Math.round(performance.now()-u));n({isChunking:!1,lastGenChunkMs:i}),t=null}})};return{items:[],lastGenMs:void 0,isChunking:!1,chunkProgress:0,lastGenChunkMs:void 0,generateItems:l=>{const o=performance.now(),i=Array.from({length:l},(b,g)=>({id:g+1,label:`Item ${g+1}`})),h=performance.now();n({items:i,lastGenMs:Math.max(0,Math.round(h-o))})},generateItemsChunked:(l,o=1e3)=>{t&&(C(t),t=null),s=Math.max(0,l),d=Math.max(1,o),c=0,a=[],u=performance.now(),n({items:[],isChunking:!0,chunkProgress:0,lastGenChunkMs:void 0}),m()},cancelChunk:()=>{t&&(C(t),t=null),n({isChunking:!1})}}}),v=()=>{const n=x(a=>a.items),[t,s]=p.useState(""),d=p.useDeferredValue(t),{filtered:u,ms:c}=p.useMemo(()=>{const a=performance.now(),m=d.trim().toLowerCase();let l=m?n.filter(i=>i.label.toLowerCase().includes(m)):n;l=l.slice(0,500);const o=performance.now();return{filtered:l,ms:Math.max(0,Math.round(o-a))}},[n,d]);return e.jsxs("div",{className:"space-y-3",children:[e.jsxs("div",{className:"flex items-center gap-2",children:[e.jsx("span",{className:"text-sm text-gray-600",children:"搜索："}),e.jsx("input",{value:t,onChange:a=>s(a.target.value),className:"px-3 py-1 border rounded w-64",placeholder:"输入关键字过滤"}),e.jsxs("span",{className:"text-xs text-gray-500",children:["useDeferredValue 保持输入流畅；过滤耗时：",c," ms"]})]}),e.jsxs("div",{className:"h-48 overflow-auto border rounded p-2 bg-white",children:[u.map(a=>e.jsx("div",{className:"text-xs text-gray-700",children:a.label},a.id)),u.length===0&&e.jsx("div",{className:"text-xs text-gray-400",children:"没有匹配项"})]})]})};function M(n){let t="pending",s;const d=n().then(u=>{t="success",s=u},u=>{t="error",s=u});return{read(){if(t==="pending")throw d;if(t==="error")throw s;return s}}}const N=({resource:n,ms:t})=>{const s=n.read();return e.jsxs("div",{className:"text-sm text-green-700",children:["数据加载完成：",s,e.jsxs("span",{className:"ml-2 text-gray-500 text-xs",children:["耗时：",t," ms"]})]})},S=()=>{const n=x(o=>o.generateItems),t=x(o=>o.items.length),[s,d]=p.useState(1e3),[u,c]=p.useState(null),[a,m]=p.useState(null),l=p.useMemo(()=>Number.isFinite(s)&&s>=0,[s]);return e.jsxs("div",{className:"space-y-3",children:[e.jsxs("div",{className:"flex items-center gap-2",children:[e.jsx("span",{className:"text-sm text-gray-600",children:"模拟延迟(ms)："}),e.jsx("input",{type:"number",value:s,onChange:o=>d(Number(o.target.value)||0),className:"px-3 py-1 border rounded w-32"}),e.jsx("button",{className:"px-3 py-1 rounded text-sm bg-indigo-500 text-white hover:bg-indigo-600 disabled:bg-gray-300 disabled:cursor-not-allowed",onClick:()=>{const o=performance.now();m(null),c(M(()=>new Promise(i=>setTimeout(()=>{const h=performance.now();m(Math.max(0,Math.round(h-o))),i(`服务端数据（${s}ms）`)},s))))},disabled:!l,children:"开始加载（手动）"}),e.jsx("button",{className:"px-3 py-1 rounded text-sm bg-gray-200 hover:bg-gray-300",onClick:()=>{c(null),m(null)},children:"清空结果"}),e.jsx("button",{className:"px-3 py-1 rounded text-sm bg-green-500 text-white hover:bg-green-600",onClick:()=>n(5e3),children:"生成本地数据（观察并发）"})]}),e.jsxs("div",{className:"text-xs text-gray-500",children:["当前本地数据：",t," 条（列表展示请看上方 Transition / Deferred 示例）",a!=null&&e.jsxs("span",{className:"ml-2",children:["最近一次加载耗时：",a," ms"]})]}),u?e.jsx(p.Suspense,{fallback:e.jsx("div",{className:"text-xs text-gray-500",children:"加载中…（通过 Suspense 占位）"}),children:e.jsx(N,{resource:u,ms:a??0})}):e.jsx("div",{className:"text-xs text-gray-500",children:"未开始加载。点击“开始加载（手动）”以触发异步请求。"})]})},w=()=>{const n=x(r=>r.items),t=x(r=>r.lastGenMs),s=x(r=>r.isChunking),d=x(r=>r.chunkProgress??0),u=x(r=>r.lastGenChunkMs),c=x(r=>r.generateItems),a=x(r=>r.generateItemsChunked),m=x(r=>r.cancelChunk),[l,o]=p.useTransition(),[i,h]=p.useState(1e4),[b,g]=p.useState(0);return e.jsxs("div",{className:"space-y-3",children:[e.jsxs("div",{className:"flex items-center gap-2",children:[e.jsx("span",{className:"text-sm text-gray-600",children:"生成数量："}),e.jsx("input",{type:"number",value:i,onChange:r=>h(Number(r.target.value)||0),className:"px-3 py-1 border rounded w-32"}),e.jsx("button",{className:"px-3 py-1 rounded text-sm bg-indigo-500 text-white hover:bg-indigo-600",onClick:()=>c(i),children:"立即生成"}),e.jsx("button",{className:"px-3 py-1 rounded text-sm bg-green-500 text-white hover:bg-green-600",onClick:()=>o(()=>c(i)),children:"并发生成（Transition）"}),e.jsx("button",{className:"px-3 py-1 rounded text-sm bg-amber-500 text-white hover:bg-amber-600",onClick:()=>a(i,1e3),children:"分片生成（可交互）"}),s?e.jsxs(e.Fragment,{children:[e.jsxs("span",{className:"text-xs text-amber-700",children:["进度：",d,"%"]}),e.jsx("button",{className:"px-2 py-1 rounded text-xs bg-gray-200 hover:bg-gray-300",onClick:m,children:"取消"})]}):u!=null&&e.jsxs("span",{className:"text-xs text-gray-500",children:["分片总耗时：",u," ms"]})]}),e.jsxs("div",{className:"flex items-center gap-2",children:[e.jsx("button",{className:"px-3 py-1 rounded text-sm bg-slate-500 text-white hover:bg-slate-600",onClick:()=>g(r=>r+1),children:"点我自增（检验交互）"}),e.jsxs("span",{className:"text-xs text-gray-500",children:["点击次数：",b]})]}),e.jsxs("div",{className:"text-xs text-gray-500",children:["当前数据：",n.length," 条；最近一次生成耗时：",t??"-"," ms"]}),l&&e.jsx("p",{className:"text-xs text-gray-500",children:"渲染大量节点中…（UI 保持可交互）"}),e.jsxs("div",{className:"h-48 overflow-auto border rounded p-2 bg-white",children:[n.slice(0,200).map(r=>e.jsx("div",{className:"text-xs text-gray-700",children:r.label},r.id)),n.length>200&&e.jsxs("div",{className:"text-xs text-gray-400 mt-1",children:["… 仅显示前 200 条，共 ",n.length," 条"]})]})]})},j=`import React, { useDeferredValue, useMemo, useState } from "react";\r
\r
import { useCMStore } from "../stores/cmStore";\r
\r
const DeferredSearchDemo: React.FC = () => {\r
  const items = useCMStore((s) => s.items);\r
  const [query, setQuery] = useState("");\r
  const deferredQuery = useDeferredValue(query);\r
\r
  const { filtered, ms } = useMemo(() => {\r
    const t0 = performance.now();\r
    const q = deferredQuery.trim().toLowerCase();\r
    let result = q\r
      ? items.filter((i) => i.label.toLowerCase().includes(q))\r
      : items;\r
    result = result.slice(0, 500);\r
    const t1 = performance.now();\r
    return { filtered: result, ms: Math.max(0, Math.round(t1 - t0)) };\r
  }, [items, deferredQuery]);\r
\r
  return (\r
    <div className="space-y-3">\r
      <div className="flex items-center gap-2">\r
        <span className="text-sm text-gray-600">搜索：</span>\r
        <input\r
          value={query}\r
          onChange={(e) => setQuery(e.target.value)}\r
          className="px-3 py-1 border rounded w-64"\r
          placeholder="输入关键字过滤"\r
        />\r
        <span className="text-xs text-gray-500">\r
          useDeferredValue 保持输入流畅；过滤耗时：{ms} ms\r
        </span>\r
      </div>\r
      <div className="h-48 overflow-auto border rounded p-2 bg-white">\r
        {filtered.map((it) => (\r
          <div key={it.id} className="text-xs text-gray-700">\r
            {it.label}\r
          </div>\r
        ))}\r
        {filtered.length === 0 && (\r
          <div className="text-xs text-gray-400">没有匹配项</div>\r
        )}\r
      </div>\r
    </div>\r
  );\r
};\r
\r
export default DeferredSearchDemo;\r
`,I=`import type { CMItem, CMStore } from "../types";

import { create } from "zustand";

// polyfill requestIdleCallback
const ric: (
  cb: (deadline: { timeRemaining: () => number; didTimeout: boolean }) => void
) => number =
  (window as any).requestIdleCallback ||
  ((cb: any) =>
    window.setTimeout(
      () => cb({ timeRemaining: () => 0, didTimeout: true }),
      1
    ));
const cic: (id: number) => void =
  (window as any).cancelIdleCallback || window.clearTimeout;

export const useCMStore = create<CMStore>((set) => {
  let chunkJob: number | null = null;
  let targetCount = 0;
  let chunkSizeInner = 1000;
  let startTs = 0;
  let produced = 0;
  let buffer: CMItem[] = [];

  const runChunk = () => {
    chunkJob = ric(() => {
      const remaining = Math.min(chunkSizeInner, targetCount - produced);
      const base = produced;
      for (let i = 0; i < remaining; i++) {
        const id = base + i + 1;
        buffer.push({ id, label: \`Item \${id}\` });
      }
      produced += remaining;

      // flush
      set({
        items: buffer,
        isChunking: true,
        chunkProgress: Math.round((produced / targetCount) * 100),
      });

      if (produced < targetCount) {
        runChunk();
      } else {
        const ms = Math.max(0, Math.round(performance.now() - startTs));
        set({ isChunking: false, lastGenChunkMs: ms });
        chunkJob = null;
      }
    });
  };

  return {
    items: [],
    lastGenMs: undefined,
    isChunking: false,
    chunkProgress: 0,
    lastGenChunkMs: undefined,

    generateItems: (count: number) => {
      const t0 = performance.now();
      const data: CMItem[] = Array.from({ length: count }, (_, i) => ({
        id: i + 1,
        label: \`Item \${i + 1}\`,
      }));
      const t1 = performance.now();
      set({ items: data, lastGenMs: Math.max(0, Math.round(t1 - t0)) });
    },

    generateItemsChunked: (count: number, chunkSize = 1000) => {
      // cancel any running job
      if (chunkJob) {
        cic(chunkJob);
        chunkJob = null;
      }
      targetCount = Math.max(0, count);
      chunkSizeInner = Math.max(1, chunkSize);
      produced = 0;
      buffer = [];
      startTs = performance.now();
      set({
        items: [],
        isChunking: true,
        chunkProgress: 0,
        lastGenChunkMs: undefined,
      });
      runChunk();
    },

    cancelChunk: () => {
      if (chunkJob) {
        cic(chunkJob);
        chunkJob = null;
      }
      set({ isChunking: false });
    },
  };
});
`,T=`import React, { Suspense, useMemo, useState } from "react";\r
import { useCMStore } from "../stores/cmStore";\r
\r
// 简易资源包装器\r
function createResource<T>(loader: () => Promise<T>) {\r
  let status: "pending" | "success" | "error" = "pending";\r
  let result: any;\r
  const promise = loader().then(\r
    (r) => {\r
      status = "success";\r
      result = r;\r
    },\r
    (e) => {\r
      status = "error";\r
      result = e;\r
    }\r
  );\r
  return {\r
    read() {\r
      if (status === "pending") throw promise;\r
      if (status === "error") throw result;\r
      return result as T;\r
    },\r
  };\r
}\r
\r
const DataView: React.FC<{\r
  resource: ReturnType<typeof createResource<string>>;\r
  ms: number;\r
}> = ({ resource, ms }) => {\r
  const data = resource.read();\r
  return (\r
    <div className="text-sm text-green-700">\r
      数据加载完成：{data}\r
      <span className="ml-2 text-gray-500 text-xs">耗时：{ms} ms</span>\r
    </div>\r
  );\r
};\r
\r
const SuspenseResourceDemo: React.FC = () => {\r
  const generateItems = useCMStore((s) => s.generateItems);\r
  const itemsCount = useCMStore((s) => s.items.length);\r
  const [delay, setDelay] = useState(1000);\r
  const [resource, setResource] = useState<ReturnType<\r
    typeof createResource<string>\r
  > | null>(null);\r
  const [loadMs, setLoadMs] = useState<number | null>(null);\r
  const canLoad = useMemo(() => Number.isFinite(delay) && delay >= 0, [delay]);\r
\r
  return (\r
    <div className="space-y-3">\r
      <div className="flex items-center gap-2">\r
        <span className="text-sm text-gray-600">模拟延迟(ms)：</span>\r
        <input\r
          type="number"\r
          value={delay}\r
          onChange={(e) => setDelay(Number(e.target.value) || 0)}\r
          className="px-3 py-1 border rounded w-32"\r
        />\r
        <button\r
          className="px-3 py-1 rounded text-sm bg-indigo-500 text-white hover:bg-indigo-600 disabled:bg-gray-300 disabled:cursor-not-allowed"\r
          onClick={() => {\r
            const t0 = performance.now();\r
            setLoadMs(null);\r
            setResource(\r
              createResource<string>(\r
                () =>\r
                  new Promise((resolve) =>\r
                    setTimeout(() => {\r
                      const t1 = performance.now();\r
                      setLoadMs(Math.max(0, Math.round(t1 - t0)));\r
                      resolve(\`服务端数据（\${delay}ms）\`);\r
                    }, delay)\r
                  )\r
              )\r
            );\r
          }}\r
          disabled={!canLoad}\r
        >\r
          开始加载（手动）\r
        </button>\r
        <button\r
          className="px-3 py-1 rounded text-sm bg-gray-200 hover:bg-gray-300"\r
          onClick={() => {\r
            setResource(null);\r
            setLoadMs(null);\r
          }}\r
        >\r
          清空结果\r
        </button>\r
        <button\r
          className="px-3 py-1 rounded text-sm bg-green-500 text-white hover:bg-green-600"\r
          onClick={() => generateItems(5000)}\r
        >\r
          生成本地数据（观察并发）\r
        </button>\r
      </div>\r
      <div className="text-xs text-gray-500">\r
        当前本地数据：{itemsCount} 条（列表展示请看上方 Transition / Deferred\r
        示例）\r
        {loadMs != null && (\r
          <span className="ml-2">最近一次加载耗时：{loadMs} ms</span>\r
        )}\r
      </div>\r
      {resource ? (\r
        <Suspense\r
          fallback={\r
            <div className="text-xs text-gray-500">\r
              加载中…（通过 Suspense 占位）\r
            </div>\r
          }\r
        >\r
          <DataView resource={resource} ms={loadMs ?? 0} />\r
        </Suspense>\r
      ) : (\r
        <div className="text-xs text-gray-500">\r
          未开始加载。点击“开始加载（手动）”以触发异步请求。\r
        </div>\r
      )}\r
    </div>\r
  );\r
};\r
\r
export default SuspenseResourceDemo;\r
`,D=`import React, { useState, useTransition } from "react";\r
\r
import { useCMStore } from "../stores/cmStore";\r
\r
const TransitionDemo: React.FC = () => {\r
  const items = useCMStore((s) => s.items);\r
  const lastGenMs = useCMStore((s) => s.lastGenMs);\r
  const isChunking = useCMStore((s) => s.isChunking);\r
  const chunkProgress = useCMStore((s) => s.chunkProgress ?? 0);\r
  const lastGenChunkMs = useCMStore((s) => s.lastGenChunkMs);\r
  const generateItems = useCMStore((s) => s.generateItems);\r
  const generateItemsChunked = useCMStore((s) => s.generateItemsChunked);\r
  const cancelChunk = useCMStore((s) => s.cancelChunk);\r
  const [isPending, startTransition] = useTransition();\r
  const [count, setCount] = useState(10000);\r
  const [tapCount, setTapCount] = useState(0);\r
\r
  return (\r
    <div className="space-y-3">\r
      <div className="flex items-center gap-2">\r
        <span className="text-sm text-gray-600">生成数量：</span>\r
        <input\r
          type="number"\r
          value={count}\r
          onChange={(e) => setCount(Number(e.target.value) || 0)}\r
          className="px-3 py-1 border rounded w-32"\r
        />\r
        <button\r
          className="px-3 py-1 rounded text-sm bg-indigo-500 text-white hover:bg-indigo-600"\r
          onClick={() => generateItems(count)}\r
        >\r
          立即生成\r
        </button>\r
        <button\r
          className="px-3 py-1 rounded text-sm bg-green-500 text-white hover:bg-green-600"\r
          onClick={() => startTransition(() => generateItems(count))}\r
        >\r
          并发生成（Transition）\r
        </button>\r
        <button\r
          className="px-3 py-1 rounded text-sm bg-amber-500 text-white hover:bg-amber-600"\r
          onClick={() => generateItemsChunked(count, 1000)}\r
        >\r
          分片生成（可交互）\r
        </button>\r
        {isChunking ? (\r
          <>\r
            <span className="text-xs text-amber-700">\r
              进度：{chunkProgress}%\r
            </span>\r
            <button\r
              className="px-2 py-1 rounded text-xs bg-gray-200 hover:bg-gray-300"\r
              onClick={cancelChunk}\r
            >\r
              取消\r
            </button>\r
          </>\r
        ) : (\r
          lastGenChunkMs != null && (\r
            <span className="text-xs text-gray-500">\r
              分片总耗时：{lastGenChunkMs} ms\r
            </span>\r
          )\r
        )}\r
      </div>\r
      <div className="flex items-center gap-2">\r
        <button\r
          className="px-3 py-1 rounded text-sm bg-slate-500 text-white hover:bg-slate-600"\r
          onClick={() => setTapCount((v) => v + 1)}\r
        >\r
          点我自增（检验交互）\r
        </button>\r
        <span className="text-xs text-gray-500">点击次数：{tapCount}</span>\r
      </div>\r
      <div className="text-xs text-gray-500">\r
        当前数据：{items.length} 条；最近一次生成耗时：{lastGenMs ?? "-"} ms\r
      </div>\r
      {isPending && (\r
        <p className="text-xs text-gray-500">\r
          渲染大量节点中…（UI 保持可交互）\r
        </p>\r
      )}\r
      <div className="h-48 overflow-auto border rounded p-2 bg-white">\r
        {items.slice(0, 200).map((it) => (\r
          <div key={it.id} className="text-xs text-gray-700">\r
            {it.label}\r
          </div>\r
        ))}\r
        {items.length > 200 && (\r
          <div className="text-xs text-gray-400 mt-1">\r
            … 仅显示前 200 条，共 {items.length} 条\r
          </div>\r
        )}\r
      </div>\r
    </div>\r
  );\r
};\r
\r
export default TransitionDemo;\r
`,P=`export interface CMItem {
  id: number;
  label: string;
}

export interface CMState {
  items: CMItem[];
  lastGenMs?: number;
  // chunked generation
  isChunking?: boolean;
  chunkProgress?: number; // 0-100
  lastGenChunkMs?: number;
}

export interface CMActions {
  generateItems: (count: number) => void;
  generateItemsChunked: (count: number, chunkSize?: number) => void;
  cancelChunk: () => void;
}

export type CMStore = CMState & CMActions;
`,q=()=>e.jsx(y,{title:"React 18 并发能力与 Zustand",description:"演示 useTransition、useDeferredValue 与 Suspense 在 Zustand 项目中的实战用法，保持输入流畅、分离紧急/非紧急更新，优化大数据渲染体验。",overview:[{title:"核心概念",items:["Transition：将非紧急更新标记为可中断，保持交互顺滑。","DeferredValue：推迟昂贵计算的消费，输入不被阻塞。","Suspense：等待异步数据加载并提供统一的 fallback。","Zustand 负责状态，React 并发负责调度与渲染。","以选择器订阅最小切片，避免无关重渲染。","分片生成：通过空闲时间/微任务切分大更新，提升响应。","可观测性：用计时与进度展示直观比较并发与普通模式。"]},{title:"主要优势",items:["在大列表渲染与过滤时明显提升交互体验。","输入保持顺滑，重任务在后台并发执行。","解耦副作用与渲染时序，结构更清晰。","与 Zustand 组合，逻辑与 UI 关注点分离。","可逐步引入，无需大规模改造。","支持进度与取消，用户感知更友好。","可与 Suspense/骨架屏配合优化加载感知。"]},{title:"适用场景",items:["大列表生成与过滤。","复杂计算或慢查询的 UI 响应优化。","远程数据加载与骨架屏/占位过渡。","需要区分紧急与非紧急更新的交互。","搜索框输入 + 结果列表过滤等组合场景。","表格导入/批量处理的前端展示。","逐步渲染/分页/无限滚动的交互。"]},{title:"注意事项",items:["Transition 并非加速计算，而是避免阻塞交互。","DeferredValue 推迟消费而非推迟数据源更新。","Suspense 需搭配能抛 Promise 的资源层。","避免在选择器中做重计算，重计算放 useMemo。","对大数据渲染限制首屏数量，渐进展示。","长任务尽量可取消/有进度，避免黑盒等待。","度量指标（ms/进度/交互计数）帮助判断优化效果。"]}],examples:[{title:"Transition：并发生成大列表",component:e.jsx(w,{}),description:"对比“立即生成”与“并发生成”，观察 UI 的可交互性差异。",observationPoints:["并发生成时按钮与输入仍可用。","isPending 仅用于渲染提示，不阻塞交互。","分片生成时进度可见，可随时取消。"],keyPoints:["startTransition 将更新标记为非紧急。","Zustand 更新触发渲染，但可被调度为可中断。","分片生成利用空闲时间片，交互更顺滑。"],codeExample:{code:D,title:"TransitionDemo.tsx"}},{title:"DeferredValue：流畅搜索",component:e.jsx(v,{}),description:"输入用即时值，过滤用延迟值，避免每次敲击都触发昂贵过滤。",observationPoints:["快速输入时不会卡顿。","结果展示稍后更新，且最多显示 500 条。","实时显示过滤耗时（ms）。"],keyPoints:["useDeferredValue 推迟结果消费。","昂贵计算放在 useMemo，依赖延迟值。","监控耗时来评估优化收益。"],codeExample:{code:j,title:"DeferredSearchDemo.tsx"}},{title:"Suspense：异步数据占位",component:e.jsx(S,{}),description:"使用自定义资源包装器模拟服务端延迟，配合 Suspense fallback。",observationPoints:["fallback 只在数据未就绪时显示。","本地生成数据与远端加载互不阻塞交互。","展示最近一次加载耗时（ms）。"],keyPoints:["资源 read() 未就绪抛 Promise，触发 Suspense。","Zustand 可与 Suspense 并行使用，职责清晰。","手动触发加载便于观察占位与耗时。"],codeExample:{code:T,title:"SuspenseResourceDemo.tsx"}},{title:"Store/Types 源码速览",component:e.jsx("div",{className:"text-sm text-gray-600",children:"简单 store + types，支撑并发示例数据。"}),codeExample:{code:`${P}

${I}`,title:"types + cmStore"}}],tutorial:{concepts:["将耗时更新标记为非紧急：startTransition。","推迟昂贵计算消费：useDeferredValue。","等待异步数据：Suspense + 资源抛 Promise。","Zustand 负责数据；React 并发负责调度。","以选择器订阅最小切片，减少重渲染。","分片生成与进度/取消设计。","用耗时与交互计数进行客观评估。"],steps:["创建 cmStore 与类型，提供 generateItems。","实现 TransitionDemo：对比立即与并发更新。","实现 DeferredSearchDemo：输入即时，过滤延迟。","实现 SuspenseResourceDemo：资源包装器 + fallback。","在 store 中加入计时 lastGenMs、分片进度与取消。","页面中展示计时、进度、交互计数对比体验。"],tips:["在渲染密集列表时限制首屏渲染数量。","大计算放 useMemo，并配合延迟值。","Transition 适合用户可感知的滞后渲染。","Suspense 仅负责等待，不负责数据管理。","保持 UI 可交互优先的设计原则。","对于慢任务提供可取消与可视化进度。"]},interview:{questions:[{question:"Transition 解决了什么问题？",answer:"让非紧急更新可中断，避免阻塞用户输入与交互。"},{question:"DeferredValue 的使用场景？",answer:"输入联动昂贵计算或过滤时，推迟消费保持输入流畅。"},{question:"Suspense 如何与 Zustand 协作？",answer:"Zustand 管状态，Suspense 管异步等待；两者职责清晰、互不耦合。"},{question:"如何避免选择器中的重计算？",answer:"将重计算放到 useMemo，并保持选择器只返回原子切片。"},{question:"并发特性能否提升运算速度？",answer:"不会，它提升的是交互体验与调度，而非计算本身。"},{question:"什么时候选用分片生成？",answer:"当数据量极大且需保持 UI 可交互时，分片生成 + 进度/取消能显著提升体验。"}],keyPoints:["React 并发聚焦“流畅交互”，而非“更快计算”。","Zustand + 选择器减少无关渲染，协同并发效果。","Suspense 需要资源层配合（抛 Promise）。","DeferredValue 适合输入与结果解耦。","Transition 用于区分紧急/非紧急更新。","分片生成适合超大数据量的渐进渲染与可取消。"]},bestPractices:{dos:["使用 startTransition 包裹大规模状态更新。","对昂贵筛选使用 useDeferredValue + useMemo。","限制列表首屏渲染条数，渐进显示。","选择器订阅最小切片以降低渲染压力。","在 Suspense 中提供清晰的 fallback。","为长任务提供进度与取消操作。"],donts:["不要把所有更新都当作紧急更新。","不要在选择器中做重计算或副作用。","不要一次渲染完整大列表而无分页/限制。","不要将 Suspense 当作数据管理工具。","不要忽视输入与渲染的节流/去抖。","不要在大数据场景忽视可观测性（ms/进度）。"],patterns:["并发列表：生成/过滤解耦且可中断。","资源包装：read 抛 Promise 触发 Suspense。","渐进渲染：首屏限制 + 滚动加载。","选择器模式：稳定切片 + memo 派生。","分片生成：空闲时间切片 + 进度/取消。","度量驱动：以耗时/帧率/交互次数评估优化。"]}});export{q as default};
