import{R as u,j as s}from"./index-BWM6UHr8.js";import{c as p,C as d}from"./ComponentTemplate-ClBHhBQ8.js";import{d as x}from"./devtools-DEjYmio-.js";const a=p(x(e=>({count:0,step:1,user:{id:1,name:"Alice"},tags:[],increment:()=>e(t=>({count:t.count+t.step,tags:t.tags})),decrement:()=>e(t=>({count:t.count-t.step,tags:t.tags})),setStep:t=>e({step:t}),updateUserName:t=>e(r=>({user:{...r.user,name:t}})),addTag:t=>e(r=>({tags:[...r.tags,t]})),removeTag:t=>e(r=>({tags:r.tags.filter(n=>n!==t)}))}),{name:"SelectorOptimizationStore"})),g=e=>e.count,b=e=>e.step,S=e=>e.user.name,f=e=>e.user,j=()=>{const e=a(S),t=a(f),r=a(c=>c.updateUserName),[n,o]=u.useState("Alice");return s.jsxs("div",{className:"space-y-3",children:[s.jsxs("div",{className:"text-sm text-gray-700",children:["Primitive（name）：",e]}),s.jsxs("div",{className:"text-sm text-gray-700",children:["Object（user）：",t.name]}),s.jsxs("div",{className:"flex gap-2 items-center",children:[s.jsx("input",{className:"border px-2 py-1 rounded text-sm",value:n,onChange:c=>o(c.target.value)}),s.jsx("button",{className:"px-3 py-1 bg-blue-600 text-white rounded",onClick:()=>r(n),children:"更新名称"})]}),s.jsx("div",{className:"text-xs text-gray-500",children:"观察：更新名称会触发 Object 选择器订阅的组件更频繁更新。"})]})},i=e=>Symbol.iterator in e,l=e=>"entries"in e,m=(e,t)=>{const r=e instanceof Map?e:new Map(e.entries()),n=t instanceof Map?t:new Map(t.entries());if(r.size!==n.size)return!1;for(const[o,c]of r)if(!n.has(o)||!Object.is(c,n.get(o)))return!1;return!0},h=(e,t)=>{const r=e[Symbol.iterator](),n=t[Symbol.iterator]();let o=r.next(),c=n.next();for(;!o.done&&!c.done;){if(!Object.is(o.value,c.value))return!1;o=r.next(),c=n.next()}return!!o.done&&!!c.done};function v(e,t){return Object.is(e,t)?!0:typeof e!="object"||e===null||typeof t!="object"||t===null||Object.getPrototypeOf(e)!==Object.getPrototypeOf(t)?!1:i(e)&&i(t)?l(e)&&l(t)?m(e,t):h(e,t):m({entries:()=>Object.entries(e)},{entries:()=>Object.entries(t)})}function N(e){const t=u.useRef(void 0);return r=>{const n=e(r);return v(t.current,n)?t.current:t.current=n}}const y=()=>{const[e,t]=a(N(o=>[o.count,o.step])),r=a(o=>o.setStep),n=a(o=>o.increment);return s.jsxs("div",{className:"space-y-3",children:[s.jsxs("div",{className:"text-sm",children:["Count: ",e," | Step: ",t]}),s.jsxs("div",{className:"flex gap-2",children:[s.jsx("button",{className:"px-3 py-1 bg-gray-200 rounded",onClick:n,children:"+step"}),s.jsx("button",{className:"px-3 py-1 bg-indigo-600 text-white rounded",onClick:()=>r(t+1),children:"步长+1"}),s.jsx("button",{className:"px-3 py-1 bg-indigo-600 text-white rounded",onClick:()=>r(1),children:"重置步长=1"})]}),s.jsx("div",{className:"text-xs text-gray-500",children:"通过 shallow 对元组进行浅比较，仅当 tuple 内某个原始值变化时才触发渲染。"})]})},w=()=>{const e=a(g);return s.jsxs("div",{className:"text-sm",children:["Count: ",e]})},C=()=>{const e=a(b);return s.jsxs("div",{className:"text-sm",children:["Step: ",e]})},P=()=>{const e=a(n=>n.increment),t=a(n=>n.decrement),r=a(n=>n.setStep);return s.jsxs("div",{className:"space-y-3",children:[s.jsxs("div",{className:"flex gap-4",children:[s.jsx(w,{}),s.jsx(C,{})]}),s.jsxs("div",{className:"flex gap-2",children:[s.jsx("button",{className:"px-3 py-1 bg-gray-200 rounded",onClick:t,children:"-1"}),s.jsx("button",{className:"px-3 py-1 bg-gray-200 rounded",onClick:e,children:"+1"}),s.jsx("button",{className:"px-3 py-1 bg-indigo-600 text-white rounded",onClick:()=>r(5),children:"步长=5"}),s.jsx("button",{className:"px-3 py-1 bg-indigo-600 text-white rounded",onClick:()=>r(1),children:"步长=1"})]})]})},O=`import {\r
  selectUserName,\r
  selectUserObj,\r
  usePerfStore,\r
} from "../stores/perfStore";\r
\r
import React from "react";\r
\r
const PrimitiveVsObjectDemo: React.FC = () => {\r
  const userName = usePerfStore(selectUserName);\r
  const userObj = usePerfStore(selectUserObj); // anti-pattern\r
  const updateUserName = usePerfStore((s) => s.updateUserName);\r
\r
  const [input, setInput] = React.useState("Alice");\r
\r
  return (\r
    <div className="space-y-3">\r
      <div className="text-sm text-gray-700">Primitive（name）：{userName}</div>\r
      <div className="text-sm text-gray-700">\r
        Object（user）：{userObj.name}\r
      </div>\r
      <div className="flex gap-2 items-center">\r
        <input\r
          className="border px-2 py-1 rounded text-sm"\r
          value={input}\r
          onChange={(e) => setInput(e.target.value)}\r
        />\r
        <button\r
          className="px-3 py-1 bg-blue-600 text-white rounded"\r
          onClick={() => updateUserName(input)}\r
        >\r
          更新名称\r
        </button>\r
      </div>\r
      <div className="text-xs text-gray-500">\r
        观察：更新名称会触发 Object 选择器订阅的组件更频繁更新。\r
      </div>\r
    </div>\r
  );\r
};\r
\r
export default PrimitiveVsObjectDemo;\r
`,U=`import type { PerfCounterState } from "../types";\r
import { create } from "zustand";\r
import { devtools } from "../../../chapter1/middleware-basics/middleware/devtools";\r
\r
export const usePerfStore = create(\r
  devtools<PerfCounterState>(\r
    (set) => ({\r
      count: 0,\r
      step: 1,\r
      user: { id: 1, name: "Alice" },\r
      tags: [],\r
\r
      increment: () => set((s) => ({ count: s.count + s.step, tags: s.tags })),\r
      decrement: () => set((s) => ({ count: s.count - s.step, tags: s.tags })),\r
      setStep: (n) => set({ step: n }),\r
      updateUserName: (name) => set((s) => ({ user: { ...s.user, name } })),\r
      addTag: (t) => set((s) => ({ tags: [...s.tags, t] })),\r
      removeTag: (t) => set((s) => ({ tags: s.tags.filter((x) => x !== t) })),\r
    }),\r
    { name: "SelectorOptimizationStore" }\r
  )\r
);\r
\r
// primitive selectors\r
export const selectCount = (s: PerfCounterState) => s.count;\r
export const selectStep = (s: PerfCounterState) => s.step;\r
export const selectUserName = (s: PerfCounterState) => s.user.name;\r
export const selectTagsLen = (s: PerfCounterState) => s.tags.length;\r
\r
// anti-pattern: object selector (for demo only)\r
export const selectUserObj = (s: PerfCounterState) => s.user; // unstable reference on name change\r
`,k=`export interface PerfCounterState {
  count: number;
  step: number;
  user: { id: number; name: string };
  tags: string[];
  increment: () => void;
  decrement: () => void;
  setStep: (n: number) => void;
  updateUserName: (name: string) => void;
  addTag: (t: string) => void;
  removeTag: (t: string) => void;
}

export type NumSelector = (s: PerfCounterState) => number;
export type BoolSelector = (s: PerfCounterState) => boolean;
export type StringSelector = (s: PerfCounterState) => string;
`,V=()=>s.jsx(d,{title:"选择器优化（selector）",description:"围绕选择器的订阅粒度、稳定引用与浅比较优化，演示如何通过原始值、切片拆分与浅比较减少不必要渲染，延续章节一的最佳实践。",overview:[{title:"核心概念",items:["选择器应返回原始值或稳定引用，避免新对象/新数组","组件拆分 + 切片订阅，减少不相干的重渲染","对元组选择可使用浅比较（useShallow）降低渲染频率","不可变更新确保比较有效，便于调试与回溯","将昂贵派生转移到 store 或缓存层，避免在渲染期计算","为选择器命名（selectXxx）统一管理与复用","避免在选择器里产生副作用（IO/订阅/日志）"]},{title:"主要优势",items:["显著降低重渲染次数，提升交互性能","结构清晰，定位问题更容易","与 devtools 等配合，便于观察更新轨迹","可渐进式引入到现有项目","利于规模化维护：每个视图块有清晰的订阅边界","更稳定的渲染时序与更小的渲染面"]},{title:"适用场景",items:["高频输入/滚动/拖拽等对渲染敏感的页面","大型组件树中仅少量片段变化的场景","需要组合多个字段但又希望减少渲染的场景","数据透传层级较深，局部更新的业务模块","SSR/CSR 下追求一致的渲染稳定性"]},{title:"注意事项",items:["避免选择器返回临时对象/数组/函数","浅比较只适用于浅层原始值集合，不适合深嵌套对象","若选择器昂贵，可考虑增量维护或 memo 技术","不要在选择器内产生副作用（网络、日志、订阅）","对多字段组合优先拆分为原始选择器，再按需组合"]}],examples:[{title:"原始值 vs 对象选择器",component:s.jsx(j,{}),description:"对比返回原始值的稳定选择器与返回对象的反例，观察渲染差异。",observationPoints:["更新 user.name 时，原始值选择器只在值变化时渲染","对象选择器每次返回新引用，导致订阅者更频繁更新","使用 devtools 观察 action 与渲染次数差异","在慢网速/低端设备下差异更明显","禁用/开启 memo 对比渲染次数"],keyPoints:["选择器返回原始类型优先","对象型派生尽量拆分为多个原始选择器","必要时用 memo 技术稳定引用，但保持纯函数","将复合 UI 状态派生放在组件层 useMemo，不放在选择器","对对象/数组返回值进行去处置（避免作为订阅值）"],commonTraps:["选择器拼装新对象/数组","在选择器里做副作用或读取外部可变状态","将多个无关字段捆绑成一个对象返回","将昂贵计算放在选择器里且无缓存"],solutions:["返回 number/string/boolean 等原始类型","将副作用与 IO 放在 action/组件层","通过多个细粒度选择器代替一个大而全的对象","对昂贵计算做缓存或增量维护"],preCode:[{title:"类型定义",code:k},{title:"Store 定义",code:U}],codeExample:{title:"原始值 vs 对象选择器",code:O}},{title:"切片订阅与组件拆分",component:s.jsx(P,{}),description:"按 count 与 step 拆分订阅，按钮操作互不影响无关视图。",observationPoints:["CountView 只因 count 变化而渲染，StepView 同理","步长变更不触发 CountView 重新渲染","增减计数不触发 StepView 重新渲染","动作函数引用稳定时，视图更易于优化","父级状态变更不波及已拆分的子视图"],keyPoints:["小组件 + 精确订阅","不可变更新让比较有效且容易","事件只影响必要片段的订阅者","将通用 UI 逻辑拆分为独立组件，降低耦合","为视图块提供专属选择器并命名"],commonTraps:["大组件里集中读取多个字段导致频繁重渲染","在选择器里返回对象聚合多个字段","在父组件中组合过多状态，造成级联渲染","在子组件里再聚合对象作为订阅值"],solutions:["拆分组件，分别订阅原始字段","在 store 更新中集中维护必要派生，组件只读","把只与 UI 相关的状态放在组件内部的 useState","避免对象组合选择器，改为多个原始选择器"]},{title:"浅比较优化（useShallow）",component:s.jsx(y,{}),description:"对元组选择使用浅比较，减少渲染次数。",observationPoints:["Count 或 Step 任一改变才触发渲染","重复设置相同步长不会触发渲染","当 tuple 全是原始值时，shallow 效果最佳","与不使用 shallow 的对比更直观"],keyPoints:["useShallow 适合对少量原始字段聚合的订阅","注意仅浅层比较，避免传入深对象","组合超过 3-4 个字段时，考虑拆分或派生","稳定 selector 函数（useCallback）可进一步避免订阅器重建"],commonTraps:["元组中包含新对象/数组，导致每次比较失败","对可变对象使用 shallow 期望深比较，这会误判","selector 每次定义不同导致比较器频繁重建"],solutions:["仅放入原始值，或在 store 维护稳定引用","若需要深比较，请改为多个原始选择器或在组件层 memo","用 useCallback 稳定 selector 函数"]}],tutorial:{concepts:["选择器返回原始值/稳定引用减少渲染","切片订阅与组件拆分是优化的核心","浅比较适用于原始值聚合的订阅场景","昂贵派生应下沉到 store 或缓存并保持不可变","选择器命名与统一管理提升可维护性"],steps:["为每个视图块定义对应选择器（原始值优先）","按视图块拆分组件，分别使用 useStore(selector)","对元组或数组聚合使用 useShallow 控制渲染","使用 devtools 检查 action 与渲染次数，验证优化是否生效","将对象型派生拆解为多个原始 selector 并逐步替换","为昂贵派生建立缓存或在 store 做增量维护"],tips:["避免在选择器中创建新对象/数组/函数","对昂贵派生考虑在 action 中增量维护或组件层 memo","配合 devtools 分析渲染次数与更新路径","为 selector 命名（selectXxx），利于统一管理与复用","谨慎共享函数引用，保证动作函数的可测试性与纯净性","对 selector 做单元测试验证稳定性与正确性"]},interview:{questions:[{question:"为什么选择器应返回原始值或稳定引用？",answer:"返回新对象/数组每次都是新引用，订阅者会频繁更新；原始值或稳定引用能显著降低渲染。"},{question:"何时使用 useShallow？",answer:"当需要组合少量原始值（如 [count, step]）订阅时，使用 useShallow 进行浅比较以减少渲染；避免组合深对象。"},{question:"如何处理昂贵的派生计算？",answer:"将派生下沉到 store 的更新流程或添加缓存；必要时在组件层用 useMemo 包裹，确保输入稳定且无副作用。"},{question:"如何组织与命名选择器？",answer:"统一以 selectXxx 命名并集中导出，便于复用与测试；保证返回稳定且可预测。"}],keyPoints:["原始值选择器优先","组件拆分 + 切片订阅","浅比较用于小集合原始值的订阅","避免副作用选择器，保持纯函数","选择器命名与导出策略"]},bestPractices:{dos:["以 selectXxx 命名并返回原始类型","按视图切片拆分组件与订阅","对元组聚合使用 useShallow 控制渲染","用 devtools 观察渲染与状态变化","将复杂派生移出渲染期，必要时在 store 增量维护","为选择器编写单元测试保证稳定性"],donts:["不要在选择器中返回新对象/数组/函数","不要把大量字段聚合到单一选择器中","不要在选择器里做副作用或访问可变的外部状态","不要为 selector 频繁更换函数引用"],patterns:["原始值选择器 + 切片订阅 + 浅比较","不可变更新 + 渲染感知的组件拆分","昂贵派生下沉 + 组件层 memo（仅在必要时）","统一命名 + 集中导出 + 单测保障"]}});export{V as default};
