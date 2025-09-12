import{j as e}from"./index-BWM6UHr8.js";import{c as a,C as l}from"./ComponentTemplate-ClBHhBQ8.js";import{d as p}from"./middleware-CPUTVaT6.js";const o=a()(p((t,n)=>({count:0,step:1,inc:()=>t(s=>({count:s.count+n().step})),setStep:s=>t({step:s})}),{name:"BestPracticesStore"})),d=()=>{const t=o(n=>n.count);return e.jsx("span",{className:"font-mono",children:t})},u=()=>{const t=o(n=>n.step);return e.jsx("span",{className:"font-mono",children:t})},x=()=>{const t=o(s=>s.setStep),n=o(s=>s.inc);return e.jsxs("div",{className:"space-y-3 text-sm",children:[e.jsxs("div",{className:"flex items-center gap-2",children:[e.jsx("span",{children:"Count:"}),e.jsx(d,{}),e.jsx("button",{onClick:n,className:"px-2 py-1 rounded bg-indigo-500 text-white",children:"+ step"})]}),e.jsxs("div",{className:"flex items-center gap-2",children:[e.jsx("span",{children:"Step:"}),e.jsx(u,{}),e.jsx("input",{type:"number",className:"px-2 py-1 border rounded w-20",defaultValue:1,onChange:s=>t(Number(s.target.value||1))})]}),e.jsx("p",{className:"text-xs text-gray-500",children:"良好实践：子组件用精准选择器订阅所需字段，避免互相影响的重渲染。"})]})},i=a((t,n)=>({theme:"light",toggleTheme:()=>t({theme:n().theme==="light"?"dark":"light"})})),c=a(t=>({items:0,addItem:()=>t(n=>({items:n.items+1}))})),g=()=>{const t=i(r=>r.theme),n=i(r=>r.toggleTheme),s=c(r=>r.items),m=c(r=>r.addItem);return e.jsxs("div",{className:"space-y-3 text-sm",children:[e.jsxs("div",{className:"flex items-center gap-2",children:[e.jsx("span",{children:"Theme:"}),e.jsx("span",{className:"font-mono",children:t}),e.jsx("button",{onClick:n,className:"px-2 py-1 rounded bg-slate-600 text-white",children:"Toggle"})]}),e.jsxs("div",{className:"flex items-center gap-2",children:[e.jsx("span",{children:"Items:"}),e.jsx("span",{className:"font-mono",children:s}),e.jsx("button",{onClick:m,className:"px-2 py-1 rounded bg-green-600 text-white",children:"+ item"})]}),e.jsx("p",{className:"text-xs text-gray-500",children:"良好实践：按领域拆分 store（UI/Domain），组件各取所需，降低耦合。"})]})},h=`import { create } from "zustand";\r
import { devtools } from "zustand/middleware";\r
\r
interface BPState {\r
  count: number;\r
  step: number;\r
}\r
\r
interface BPActions {\r
  inc: () => void;\r
  setStep: (n: number) => void;\r
}\r
\r
export type BPStore = BPState & BPActions;\r
\r
export const useBPStore = create<BPStore>()(\r
  devtools(\r
    (set, get) => ({\r
      count: 0,\r
      step: 1,\r
      inc: () => set((s) => ({ count: s.count + get().step })),\r
      setStep: (n: number) => set({ step: n }),\r
    }),\r
    { name: "BestPracticesStore" }\r
  )\r
);\r
`,S=`import React from "react";\r
import { useBPStore } from "../stores/bpStore";\r
\r
const CountView: React.FC = () => {\r
  const count = useBPStore((s) => s.count);\r
  return <span className="font-mono">{count}</span>;\r
};\r
\r
const StepView: React.FC = () => {\r
  const step = useBPStore((s) => s.step);\r
  return <span className="font-mono">{step}</span>;\r
};\r
\r
const GoodSelectorDemo: React.FC = () => {\r
  const setStep = useBPStore((s) => s.setStep);\r
  const inc = useBPStore((s) => s.inc);\r
\r
  return (\r
    <div className="space-y-3 text-sm">\r
      <div className="flex items-center gap-2">\r
        <span>Count:</span>\r
        <CountView />\r
        <button\r
          onClick={inc}\r
          className="px-2 py-1 rounded bg-indigo-500 text-white"\r
        >\r
          + step\r
        </button>\r
      </div>\r
      <div className="flex items-center gap-2">\r
        <span>Step:</span>\r
        <StepView />\r
        <input\r
          type="number"\r
          className="px-2 py-1 border rounded w-20"\r
          defaultValue={1}\r
          onChange={(e) => setStep(Number(e.target.value || 1))}\r
        />\r
      </div>\r
      <p className="text-xs text-gray-500">\r
        良好实践：子组件用精准选择器订阅所需字段，避免互相影响的重渲染。\r
      </p>\r
    </div>\r
  );\r
};\r
\r
export default GoodSelectorDemo;\r
`,v=`import React from "react";\r
import { create } from "zustand";\r
\r
// local split stores for demo purpose only\r
interface UIState {\r
  theme: "light" | "dark";\r
}\r
interface UIActions {\r
  toggleTheme: () => void;\r
}\r
const useUIStore = create<UIState & UIActions>((set, get) => ({\r
  theme: "light",\r
  toggleTheme: () => set({ theme: get().theme === "light" ? "dark" : "light" }),\r
}));\r
\r
interface DomainState {\r
  items: number;\r
}\r
interface DomainActions {\r
  addItem: () => void;\r
}\r
const useDomainStore = create<DomainState & DomainActions>((set) => ({\r
  items: 0,\r
  addItem: () => set((s) => ({ items: s.items + 1 })),\r
}));\r
\r
const SplitStoreDemo: React.FC = () => {\r
  const theme = useUIStore((s) => s.theme);\r
  const toggleTheme = useUIStore((s) => s.toggleTheme);\r
  const items = useDomainStore((s) => s.items);\r
  const addItem = useDomainStore((s) => s.addItem);\r
\r
  return (\r
    <div className="space-y-3 text-sm">\r
      <div className="flex items-center gap-2">\r
        <span>Theme:</span>\r
        <span className="font-mono">{theme}</span>\r
        <button\r
          onClick={toggleTheme}\r
          className="px-2 py-1 rounded bg-slate-600 text-white"\r
        >\r
          Toggle\r
        </button>\r
      </div>\r
      <div className="flex items-center gap-2">\r
        <span>Items:</span>\r
        <span className="font-mono">{items}</span>\r
        <button\r
          onClick={addItem}\r
          className="px-2 py-1 rounded bg-green-600 text-white"\r
        >\r
          + item\r
        </button>\r
      </div>\r
      <p className="text-xs text-gray-500">\r
        良好实践：按领域拆分 store（UI/Domain），组件各取所需，降低耦合。\r
      </p>\r
    </div>\r
  );\r
};\r
\r
export default SplitStoreDemo;\r
`,y=()=>e.jsx(l,{title:"Zustand 使用建议与最佳实践",description:"总结在不同规模项目中的实战经验：精准订阅、按领域拆分、边界清晰、与数据层协作等。",overview:[{title:"核心概念",items:["选择器订阅最小切片，减少重渲染。","按领域拆分 store，避免单体臃肿。","与 React Query 等数据层划清边界。","中间件按需接入（devtools/persist/logger）。","动作语义清晰，便于调试与回溯。"]},{title:"主要优势",items:["极简心智 + 强可塑性，适合快速迭代。","精准订阅带来更好的渲染性能。","模块化拆分便于团队协作与测试。","与生态工具（DevTools/Profiler）良好配合。","与并发特性/SSR/持久化等特性兼容。"]},{title:"适用场景",items:["中小型应用的全局 UI 状态与交互。","大型应用的局部域（避免单体 store）。","复杂页面的性能优化（高频交互）。","需要与 React Query 分层协作的页面。","需要清晰调试轨迹与回放能力的场景。"]},{title:"注意事项",items:["不要订阅整个 store；选择器保持纯净与稳定。","不要复制服务端数据到本地 store（双份真相）。","避免过度全局化，将状态留在使用处。","命名与动作语义清晰，配合 devtools。","持久化只保存必要字段，设计稳定的序列化格式。"]}],examples:[{title:"选择器：好 vs 坏（推荐写法）",component:e.jsx(x,{}),description:"子组件仅订阅自身所需的切片，互不影响渲染。",observationPoints:["修改 step 只影响 StepView，不触发 CountView。","点击 +step 只影响 CountView。"],keyPoints:["选择器返回原始值/稳定引用。","选择器在组件外定义，保持引用稳定。"],preCode:[{title:"Store 定义",code:h,description:"演示用计数/步长 store，含 devtools。"}],codeExample:{code:S,title:"GoodSelectorDemo"}},{title:"按领域拆分（UI/Domain）",component:e.jsx(g,{}),description:"UI 与业务状态分离，组件各取所需，降低耦合。",observationPoints:["切换主题不影响 items 订阅者。","新增 items 不影响 theme 订阅者。"],keyPoints:["按责任拆分 store，提升可维护性。","避免 monolithic 全家桶式大 store。"],codeExample:{code:v,title:"SplitStoreDemo"}}],tutorial:{concepts:["精准选择器是性能优化核心。","按领域拆分 store 的模块化设计。","与数据层（React Query）的边界划分。","中间件与调试工具的使用。","渐进式演进与迁移策略。"],steps:["为高频读写的组件引入选择器。","按领域拆分 store 并梳理依赖。","为关键动作命名并接入 devtools。","与 React Query 协作：服务端状态不复制到本地。","评估需要持久化的字段并定义序列化方案。"],tips:["尽量局部状态就地管理，全局仅存放跨组件所需。","选择器保持纯净和稳定，避免副作用。","用 Profiler/自定义计数观察渲染。","为 store 命名，便于 devtools 追踪。","按需接入 persist/logger，避免过度工程化。"]},interview:{questions:[{question:"如何减少组件重渲染？",answer:"使用选择器订阅最小切片，返回原始值或稳定引用；必要时结合 shallow。"},{question:"为什么不要复制服务端数据？",answer:"会产生双份真相与失效问题；让 React Query 管服务端状态，本地 store 管 UI 交互。"},{question:"如何拆分 store？",answer:"按领域/责任拆分，避免单体；导出独立 hooks 并在组件按需订阅。"},{question:"中间件如何选择？",answer:"以问题驱动：devtools 为观测，persist 为持久化，logger 为审计；避免滥用。"},{question:"如何做迁移？",answer:"以小步试点、加可观测性、保持边界清晰，逐步替换。"}],keyPoints:["选择器/边界/拆分是三大支柱。","以观测驱动优化（devtools/Profiler）。","与数据层清晰分界，避免双份真相。","渐进式演进，避免一次性重构。","类型与测试保障可维护性。"]},bestPractices:{dos:["优先选择器订阅而非全量订阅","按领域拆分 store，导出专用 hooks","动作语义清晰并接入 devtools","与 React Query 清晰分界","仅持久化必要字段并设计稳定序列化"],donts:["不要复制服务端数据到本地 store","不要过度全局化一切状态","不要在选择器中做副作用或重计算","不要将中间件滥用为默认标配","不要让 store 变成巨大单体"],patterns:["选择器模式：导出常用 selector 并复用","拆分模式：UI/Domain 独立 hooks + 组合","边界模式：React Query 管远端，Zustand 管 UI","观测模式：命名 store + devtools + Profiler"]}});export{y as default};
