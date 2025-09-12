import{j as o}from"./index-BWM6UHr8.js";import{d as u}from"./middleware-CPUTVaT6.js";import{c as a}from"./ComponentTemplate-ClBHhBQ8.js";const s=a()(u(e=>({count:0,inc:()=>e(n=>({count:n.count+1})),dec:()=>e(n=>({count:n.count-1})),add:n=>e(t=>({count:t.count+n})),incAsync:async(n=300)=>{await new Promise(t=>setTimeout(t,n)),e(t=>({count:t.count+1}))}}),{name:"ZustandCounter"})),l=()=>{const e=s(r=>r.count),n=s(r=>r.inc),t=s(r=>r.dec),c=s(r=>r.incAsync);return o.jsxs("div",{className:"flex items-center gap-2",children:[o.jsx("button",{className:"px-3 py-1 rounded bg-gray-200",onClick:t,children:"-"}),o.jsx("span",{className:"w-12 text-center",children:e}),o.jsx("button",{className:"px-3 py-1 rounded bg-gray-200",onClick:n,children:"+"}),o.jsx("button",{className:"px-3 py-1 rounded bg-indigo-500 text-white",onClick:()=>c(300),children:"+ async"})]})},p=`import React from "react";\r
import { useZCounterStore } from "../stores/zCounterStore";\r
\r
const ZustandCounterDemo: React.FC = () => {\r
  const count = useZCounterStore((s) => s.count);\r
  const inc = useZCounterStore((s) => s.inc);\r
  const dec = useZCounterStore((s) => s.dec);\r
  const incAsync = useZCounterStore((s) => s.incAsync);\r
\r
  return (\r
    <div className="flex items-center gap-2">\r
      <button className="px-3 py-1 rounded bg-gray-200" onClick={dec}>\r
        -\r
      </button>\r
      <span className="w-12 text-center">{count}</span>\r
      <button className="px-3 py-1 rounded bg-gray-200" onClick={inc}>\r
        +\r
      </button>\r
      <button\r
        className="px-3 py-1 rounded bg-indigo-500 text-white"\r
        onClick={() => incAsync(300)}\r
      >\r
        + async\r
      </button>\r
    </div>\r
  );\r
};\r
\r
export default ZustandCounterDemo;\r
`,C=`import { create } from "zustand";\r
import { devtools } from "zustand/middleware";\r
\r
interface ZCounterState {\r
  count: number;\r
}\r
\r
interface ZCounterActions {\r
  inc: () => void;\r
  dec: () => void;\r
  add: (n: number) => void;\r
  incAsync: (delayMs?: number) => Promise<void>;\r
}\r
\r
export type ZCounterStore = ZCounterState & ZCounterActions;\r
\r
export const useZCounterStore = create<ZCounterStore>()(\r
  devtools(\r
    (set) => ({\r
      count: 0,\r
      inc: () => set((s) => ({ count: s.count + 1 })),\r
      dec: () => set((s) => ({ count: s.count - 1 })),\r
      add: (n) => set((s) => ({ count: s.count + n })),\r
      incAsync: async (delayMs = 300) => {\r
        await new Promise((r) => setTimeout(r, delayMs));\r
        set((s) => ({ count: s.count + 1 }));\r
      },\r
    }),\r
    { name: "ZustandCounter" }\r
  )\r
);\r
`;export{l as Z,p as a,C as z};
