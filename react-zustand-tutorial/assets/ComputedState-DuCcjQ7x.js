import{R as j,j as e}from"./index-BWM6UHr8.js";import{c as f,C as D}from"./ComponentTemplate-ClBHhBQ8.js";const s=f((t,r)=>({count:0,step:1,history:[],lastUpdated:null,increment:()=>t(n=>({count:n.count+1,history:[...n.history,n.count+1],lastUpdated:new Date})),decrement:()=>t(n=>({count:n.count-1,history:[...n.history,n.count-1],lastUpdated:new Date})),reset:()=>t({count:0,history:[0],lastUpdated:new Date}),setStep:n=>t({step:n}),incrementByStep:()=>{const{count:n,step:a}=r();t({count:n+a,history:[...r().history,n+a],lastUpdated:new Date})},decrementByStep:()=>{const{count:n,step:a}=r();t({count:n-a,history:[...r().history,n-a],lastUpdated:new Date})},clearHistory:()=>t({history:[]})})),P=t=>t.count,k=t=>t.step,U=t=>t.history,T=t=>t.history.length,B=t=>t.count>0,H=t=>t.count%2===0,R=t=>t.history.length===0?0:Math.round(t.history.reduce((r,n)=>r+n,0)/t.history.length*100)/100,p=t=>t.count===0?"零":t.count>0?"正数":"负数",d=({title:t,children:r})=>e.jsxs("div",{className:"p-4 bg-gray-50 rounded border",children:[e.jsx("div",{className:"text-sm font-medium text-gray-700 mb-2",children:t}),r]}),I=()=>{const t=s(c=>c.count),r=s(c=>c.increment),n=s(c=>c.decrement),a=j.useMemo(()=>({label:t>0?"正":"非正"}),[t]),i=s(p);return e.jsxs("div",{className:"p-6 bg-white rounded-lg shadow-md",children:[e.jsxs("div",{className:"mb-3 text-sm text-gray-700",children:["当前计数：",e.jsx("span",{className:"font-semibold",children:t})]}),e.jsxs("div",{className:"flex gap-2 mb-4",children:[e.jsx("button",{onClick:n,className:"px-3 py-2 bg-red-500 text白 rounded",children:"-1"}),e.jsx("button",{onClick:r,className:"px-3 py-2 bg-green-600 text白 rounded",children:"+1"})]}),e.jsxs("div",{className:"grid md:grid-cols-2 gap-4",children:[e.jsxs(d,{title:"反例：返回新对象的选择器 (总是新引用)",children:[e.jsxs("div",{className:"text-sm",children:["bad.label：",e.jsx("span",{className:"font-semibold",children:a.label})]}),e.jsx("div",{className:"mt-2 text-xs text-red-600",children:"问题：若用于订阅，将因每次新引用导致频繁或无限渲染。"})]}),e.jsxs(d,{title:"正确：返回原始类型的选择器",children:[e.jsxs("div",{className:"text-sm",children:["statusText：",e.jsx("span",{className:"font-semibold",children:i})]}),e.jsx("div",{className:"mt-2 text-xs text-green-700",children:"优势：返回原始类型，只有值变化时才渲染。"})]})]})]})},l=({label:t,value:r})=>e.jsxs("div",{className:"p-3 bg-gray-50 rounded border",children:[e.jsx("div",{className:"text-xs text-gray-500",children:t}),e.jsx("div",{className:"text-lg font-semibold text-gray-800",children:r})]}),E=()=>{const t=s(P),r=s(k),n=s(U),a=s(T),i=s(B),c=s(H),x=s(R),b=s(p),v=s(o=>o.increment),y=s(o=>o.decrement),g=s(o=>o.reset),h=s(o=>o.setStep),S=s(o=>o.incrementByStep),C=s(o=>o.decrementByStep),N=s(o=>o.clearHistory);return e.jsxs("div",{className:"p-6 bg-white rounded-lg shadow-md",children:[e.jsxs("div",{className:"grid grid-cols-2 md:grid-cols-4 gap-3 mb-4",children:[e.jsx(l,{label:"计数",value:t}),e.jsx(l,{label:"步长",value:r}),e.jsx(l,{label:"历史条数",value:a}),e.jsx(l,{label:"历史均值",value:x}),e.jsx(l,{label:"是否正数",value:i?"是":"否"}),e.jsx(l,{label:"是否偶数",value:c?"是":"否"}),e.jsx(l,{label:"状态文本",value:b})]}),e.jsxs("div",{className:"flex gap-2 mb-3",children:[e.jsx("button",{onClick:y,className:"px-3 py-2 bg-red-500 text-white rounded",children:"-1"}),e.jsx("button",{onClick:g,className:"px-3 py-2 bg-gray-500 text-white rounded",children:"重置"}),e.jsx("button",{onClick:v,className:"px-3 py-2 bg-green-600 text-white rounded",children:"+1"})]}),e.jsxs("div",{className:"flex items-center gap-2 mb-3",children:[e.jsx("span",{className:"text-sm",children:"步长"}),e.jsx("input",{type:"number",className:"w-16 px-2 py-1 border rounded text-center",value:r,min:1,onChange:o=>h(Number(o.target.value))}),e.jsxs("button",{onClick:C,className:"px-3 py-2 bg-orange-500 text-white rounded",children:["-",r]}),e.jsxs("button",{onClick:S,className:"px-3 py-2 bg-purple-600 text-white rounded",children:["+",r]})]}),e.jsx("div",{className:"mb-2",children:e.jsx("button",{onClick:N,className:"px-3 py-2 bg-yellow-500 text-white rounded",children:"清空历史"})}),e.jsxs("div",{className:"p-3 bg-gray-50 rounded border text-xs text-gray-600",children:[e.jsx("div",{className:"mb-1",children:"最近历史（最多 8 条）："}),e.jsx("div",{className:"flex flex-wrap gap-1",children:n.slice(-8).map((o,w)=>e.jsx("span",{className:"px-2 py-1 bg-white rounded border",children:o},w))})]})]})},M=`import {
  selectStatusText,
  useComputedCounterStore,
} from "../stores/counterStore";

import React from "react";

const Panel: React.FC<{ title: string; children: React.ReactNode }> = ({
  title,
  children,
}) => (
  <div className="p-4 bg-gray-50 rounded border">
    <div className="text-sm font-medium text-gray-700 mb-2">{title}</div>
    {children}
  </div>
);

const BadVsGoodSelectorDemo: React.FC = () => {
  const count = useComputedCounterStore((s) => s.count);
  const increment = useComputedCounterStore((s) => s.increment);
  const decrement = useComputedCounterStore((s) => s.decrement);

  // 安全对比：用 count 原始值在组件内构造“坏对象”（每次都新引用），不作为选择器订阅
  const badNow = React.useMemo(
    () => ({ label: count > 0 ? "正" : "非正" }),
    [count]
  );

  // 错误示例（请勿这样写）：直接用返回新对象的选择器进行订阅
  // const badObj = useComputedCounterStore((s) => ({ label: s.count > 0 ? "正" : "非正" }));
  // 问题：每次渲染都返回新对象引用，导致订阅该选择器的组件每次都重渲染，甚至引发更新循环

  // 错误示例（请勿这样写）：在订阅中返回新对象并本地 setState 计数
  // React.useEffect(() => {
  //   const unsub = (useComputedCounterStore as any).subscribe(
  //     (state: any) => ({ label: state.count > 0 ? "正" : "非正" }),
  //     () => setTick((t) => t + 1)
  //   );
  //   return () => unsub();
  // }, []);
  // 问题：监听的是不稳定的新引用，配合 setState 容易触发“Maximum update depth exceeded”

  // 正确：通过选择器返回原始类型，作为订阅值
  const goodNow = useComputedCounterStore(selectStatusText);

  return (
    <div className="p-6 bg-white rounded-lg shadow-md">
      <div className="mb-3 text-sm text-gray-700">
        当前计数：<span className="font-semibold">{count}</span>
      </div>
      <div className="flex gap-2 mb-4">
        <button
          onClick={decrement}
          className="px-3 py-2 bg-red-500 text白 rounded"
        >
          -1
        </button>
        <button
          onClick={increment}
          className="px-3 py-2 bg-green-600 text白 rounded"
        >
          +1
        </button>
      </div>

      <div className="grid md:grid-cols-2 gap-4">
        <Panel title="反例：返回新对象的选择器 (总是新引用)">
          <div className="text-sm">
            bad.label：<span className="font-semibold">{badNow.label}</span>
          </div>
          <div className="mt-2 text-xs text-red-600">
            问题：若用于订阅，将因每次新引用导致频繁或无限渲染。
          </div>
        </Panel>
        <Panel title="正确：返回原始类型的选择器">
          <div className="text-sm">
            statusText：<span className="font-semibold">{goodNow}</span>
          </div>
          <div className="mt-2 text-xs text-green-700">
            优势：返回原始类型，只有值变化时才渲染。
          </div>
        </Panel>
      </div>
    </div>
  );
};

export default BadVsGoodSelectorDemo;
`,L=`import {\r
  selectAverageHistory,\r
  selectCount,\r
  selectHistory,\r
  selectHistoryLength,\r
  selectIsEven,\r
  selectIsPositive,\r
  selectStatusText,\r
  selectStep,\r
  useComputedCounterStore,\r
} from "../stores/counterStore";\r
\r
import React from "react";\r
\r
const Stat: React.FC<{ label: string; value: React.ReactNode }> = ({\r
  label,\r
  value,\r
}) => (\r
  <div className="p-3 bg-gray-50 rounded border">\r
    <div className="text-xs text-gray-500">{label}</div>\r
    <div className="text-lg font-semibold text-gray-800">{value}</div>\r
  </div>\r
);\r
\r
const ComputedSelectorsDemo: React.FC = () => {\r
  const count = useComputedCounterStore(selectCount);\r
  const step = useComputedCounterStore(selectStep);\r
  const history = useComputedCounterStore(selectHistory);\r
  const historyLen = useComputedCounterStore(selectHistoryLength);\r
  const positive = useComputedCounterStore(selectIsPositive);\r
  const even = useComputedCounterStore(selectIsEven);\r
  const avg = useComputedCounterStore(selectAverageHistory);\r
  const statusText = useComputedCounterStore(selectStatusText);\r
\r
  const increment = useComputedCounterStore((s) => s.increment);\r
  const decrement = useComputedCounterStore((s) => s.decrement);\r
  const reset = useComputedCounterStore((s) => s.reset);\r
  const setStep = useComputedCounterStore((s) => s.setStep);\r
  const incStep = useComputedCounterStore((s) => s.incrementByStep);\r
  const decStep = useComputedCounterStore((s) => s.decrementByStep);\r
  const clear = useComputedCounterStore((s) => s.clearHistory);\r
\r
  return (\r
    <div className="p-6 bg-white rounded-lg shadow-md">\r
      <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mb-4">\r
        <Stat label="计数" value={count} />\r
        <Stat label="步长" value={step} />\r
        <Stat label="历史条数" value={historyLen} />\r
        <Stat label="历史均值" value={avg} />\r
        <Stat label="是否正数" value={positive ? "是" : "否"} />\r
        <Stat label="是否偶数" value={even ? "是" : "否"} />\r
        <Stat label="状态文本" value={statusText} />\r
      </div>\r
\r
      <div className="flex gap-2 mb-3">\r
        <button\r
          onClick={decrement}\r
          className="px-3 py-2 bg-red-500 text-white rounded"\r
        >\r
          -1\r
        </button>\r
        <button\r
          onClick={reset}\r
          className="px-3 py-2 bg-gray-500 text-white rounded"\r
        >\r
          重置\r
        </button>\r
        <button\r
          onClick={increment}\r
          className="px-3 py-2 bg-green-600 text-white rounded"\r
        >\r
          +1\r
        </button>\r
      </div>\r
\r
      <div className="flex items-center gap-2 mb-3">\r
        <span className="text-sm">步长</span>\r
        <input\r
          type="number"\r
          className="w-16 px-2 py-1 border rounded text-center"\r
          value={step}\r
          min={1}\r
          onChange={(e) => setStep(Number(e.target.value))}\r
        />\r
        <button\r
          onClick={decStep}\r
          className="px-3 py-2 bg-orange-500 text-white rounded"\r
        >\r
          -{step}\r
        </button>\r
        <button\r
          onClick={incStep}\r
          className="px-3 py-2 bg-purple-600 text-white rounded"\r
        >\r
          +{step}\r
        </button>\r
      </div>\r
\r
      <div className="mb-2">\r
        <button\r
          onClick={clear}\r
          className="px-3 py-2 bg-yellow-500 text-white rounded"\r
        >\r
          清空历史\r
        </button>\r
      </div>\r
\r
      <div className="p-3 bg-gray-50 rounded border text-xs text-gray-600">\r
        <div className="mb-1">最近历史（最多 8 条）：</div>\r
        <div className="flex flex-wrap gap-1">\r
          {history.slice(-8).map((v, i) => (\r
            <span key={i} className="px-2 py-1 bg-white rounded border">\r
              {v}\r
            </span>\r
          ))}\r
        </div>\r
      </div>\r
    </div>\r
  );\r
};\r
\r
export default ComputedSelectorsDemo;\r
`,u=`import type {\r
  BooleanSelector,\r
  ComputedCounterState,\r
  DateSelector,\r
  NumberSelector,\r
  StringSelector,\r
} from "../types";\r
\r
import { create } from "zustand";\r
\r
export const useComputedCounterStore = create<ComputedCounterState>(\r
  (set, get) => ({\r
    count: 0,\r
    step: 1,\r
    history: [],\r
    lastUpdated: null,\r
\r
    increment: () =>\r
      set((state) => ({\r
        count: state.count + 1,\r
        history: [...state.history, state.count + 1],\r
        lastUpdated: new Date(),\r
      })),\r
\r
    decrement: () =>\r
      set((state) => ({\r
        count: state.count - 1,\r
        history: [...state.history, state.count - 1],\r
        lastUpdated: new Date(),\r
      })),\r
\r
    reset: () =>\r
      set({\r
        count: 0,\r
        history: [0],\r
        lastUpdated: new Date(),\r
      }),\r
\r
    setStep: (step: number) => set({ step }),\r
\r
    incrementByStep: () => {\r
      const { count, step } = get();\r
      set({\r
        count: count + step,\r
        history: [...get().history, count + step],\r
        lastUpdated: new Date(),\r
      });\r
    },\r
\r
    decrementByStep: () => {\r
      const { count, step } = get();\r
      set({\r
        count: count - step,\r
        history: [...get().history, count - step],\r
        lastUpdated: new Date(),\r
      });\r
    },\r
\r
    clearHistory: () => set({ history: [] }),\r
  })\r
);\r
\r
// base selectors\r
export const selectCount: NumberSelector = (s) => s.count;\r
export const selectStep: NumberSelector = (s) => s.step;\r
export const selectHistory: (s: ComputedCounterState) => number[] = (s) =>\r
  s.history;\r
export const selectHistoryLength: NumberSelector = (s) => s.history.length;\r
export const selectLastUpdated: DateSelector = (s) => s.lastUpdated;\r
\r
// computed selectors (pure functions)\r
export const selectIsPositive: BooleanSelector = (s) => s.count > 0;\r
export const selectIsEven: BooleanSelector = (s) => s.count % 2 === 0;\r
export const selectSumHistory: NumberSelector = (s) =>\r
  s.history.reduce((a, b) => a + b, 0);\r
export const selectAverageHistory: NumberSelector = (s) =>\r
  s.history.length === 0\r
    ? 0\r
    : Math.round(\r
        (s.history.reduce((a, b) => a + b, 0) / s.history.length) * 100\r
      ) / 100;\r
export const selectStatusText: StringSelector = (s) =>\r
  s.count === 0 ? "零" : s.count > 0 ? "正数" : "负数";\r
`,m=`export interface ComputedCounterState {\r
  count: number;\r
  step: number;\r
  history: number[];\r
  lastUpdated: Date | null;\r
\r
  increment: () => void;\r
  decrement: () => void;\r
  reset: () => void;\r
  setStep: (step: number) => void;\r
  incrementByStep: () => void;\r
  decrementByStep: () => void;\r
  clearHistory: () => void;\r
}\r
\r
// Selectors\r
export type NumberSelector = (state: ComputedCounterState) => number;\r
export type BooleanSelector = (state: ComputedCounterState) => boolean;\r
export type DateSelector = (state: ComputedCounterState) => Date | null;\r
export type StringSelector = (state: ComputedCounterState) => string;\r
`,G=()=>e.jsx(D,{title:"计算状态 (Computed State)",description:"基于 create-store / use-store / update-state 的基础，演示如何用选择器组合/派生出计算值，做到按需订阅与高可读的业务表达。",overview:[{title:"核心概念",items:["选择器是纯函数：接收 state 返回派生值","拆分订阅：只订阅需要的片段与计算结果","计算与更新解耦：action 只做更新，selector 只做计算"]},{title:"适用场景",items:["统计类数据（总数、均值、最值等）","状态标签/文案派生（如正/负/零）","复杂展示层逻辑（最小化渲染范围）"]},{title:"注意事项",items:["保持选择器纯净，不做副作用","避免选择器返回新对象/新数组（除非必要）","名称语义化：selectXxx 表达清楚含义"]}],examples:[{title:"计算选择器演示",component:e.jsx(E,{}),description:"演示 count/step/history 的基础状态与 isPositive/isEven/avg/statusText 的派生值",observationPoints:["修改 count/step，观察计算字段的变化","组件仅因所订阅的选择器变化而渲染","历史数据只展示末尾若干条，减少 DOM 负担"],keyPoints:["派生值放在选择器层：selectIsPositive/selectAverageHistory","尽量返回原始类型，避免新引用导致不必要渲染","用小组件拆分展示 + 选择器精确订阅"],commonTraps:["选择器返回新对象/数组，每次都是新引用导致重渲染","在选择器内引入副作用或访问外部可变数据"],solutions:["尽可能返回 number/string/boolean 等原始类型","将副作用与 IO 放在 action 或组件效果中"],importantTips:["避免在选择器中返回新对象/数组；需要集合时可返回长度、id 集等原始派生","对昂贵计算可在 action 中维护增量或使用 memo 技术（保持纯函数）","选择器命名统一以 select 前缀，便于在代码搜索与复用"],preCode:[{title:"类型定义",code:m},{title:"Store 定义",code:u}],codeExample:{title:"演示组件实现",code:L}},{title:"反例对比：不稳定引用 vs 原始类型",component:e.jsx(I,{}),description:"对比返回新对象的错误选择器与返回原始类型的正确选择器对渲染次数的影响",observationPoints:["点击计数按钮，观察 Bad 与 Good 的视觉表现差异","Bad 使用新对象引用，可能导致组件频繁更新","Good 返回原始类型，仅在值变化时触发更新","在浏览器性能面板中对比两者的 re-render 频率","思考如何将对象型派生拆分为多个原始型选择器"],keyPoints:["避免选择器返回新建对象/数组","原始类型或稳定引用有助于降低渲染","为对象型派生提供拆分选择器（如 selectLabel/selectColor）","必要时用轻量缓存技术（memo）稳定引用","将复杂派生下沉到 store 层，组件只拿最终结果"],commonTraps:["选择器中拼装新对象/数组（每次新引用）","在订阅回调中 setState 统计渲染次数导致更新循环","在选择器里读取可变外部状态（时间/随机数/全局变量）","将昂贵计算放在选择器且每次重复计算","选择器返回临时闭包函数或内联方法"],solutions:["返回原始类型；对象型可拆为多个原始返回的选择器","对昂贵计算引入增量维护或 memo，避免每次全量计算","使用 shallow 或稳定引用减少无关重渲染","将副作用与 IO 移出选择器（放到 action/组件 effect）","对选择器做单元测试，保证纯函数与可复用"],preCode:[{title:"类型定义",code:m},{title:"Store 定义",code:u}],codeExample:{title:"反例对比组件实现",code:M}}],tutorial:{concepts:["选择器是纯函数，不应产生副作用或依赖外部可变状态","组件通过 useStore(selector) 只订阅 selector 返回值","将展示层的计算下沉到选择器，组件保持简洁"],steps:["定义基础 store（count/step/history/actions）","实现基础选择器（count/step/history/length/lastUpdated）","实现计算选择器（isPositive/isEven/avg/statusText）","在组件中按需订阅对应选择器，并拆分小组件"],tips:["优先返回原始类型，必要时配合浅比较","命名上以 select 前缀开头，明确职责","列表类展示限制条数/分页以降低 DOM 压力"]},interview:{questions:[{question:"为什么计算逻辑建议放进选择器而非组件？",answer:"使组件保持展示职责，避免重复逻辑；并能更好地按需订阅，减少渲染范围。选择器可复用，便于单元测试，且与状态更新解耦。"},{question:"选择器返回新对象/数组会有什么问题？",answer:"每次渲染都产生新引用，导致订阅该选择器的组件始终重新渲染。即使内容相同，引用不同也会触发重渲染，影响性能。"},{question:"如何优化昂贵的选择器计算？",answer:"1) 在 action 中维护增量状态；2) 使用 memo 技术缓存结果；3) 拆分复杂计算为多个简单选择器；4) 避免在每次订阅时重复计算。"},{question:"选择器与 useMemo 的区别是什么？",answer:"选择器是 store 层的纯函数，可跨组件复用；useMemo 是组件层的缓存，依赖组件生命周期。选择器更适合状态派生，useMemo 适合组件内计算。"},{question:"什么时候需要拆分选择器？",answer:"当单个选择器返回复杂对象时，应拆分为多个原始类型选择器。例如：selectUserInfo 拆分为 selectUserName、selectUserAge、selectUserEmail。"},{question:"如何测试选择器的正确性？",answer:"编写单元测试，传入不同 state 验证返回值。测试边界情况、空值处理、计算精度等。选择器作为纯函数，测试相对简单且可靠。"}],keyPoints:["选择器纯函数、无副作用，便于测试与复用","尽量返回原始类型，避免新引用导致重渲染","结合组件拆分实现最小渲染范围","昂贵计算考虑增量维护或 memo 缓存","复杂对象派生应拆分为多个简单选择器","选择器命名规范统一，便于团队协作"]},bestPractices:{dos:["用 selectXxx 命名选择器并保持语义清晰","把展示层的计算下沉到选择器，组件更薄","限制列表展示数量或做分页","为复杂计算提供增量维护或缓存机制","将对象型派生拆分为多个原始类型选择器","使用 TypeScript 严格类型检查选择器返回值","为选择器编写单元测试，确保纯函数特性","在团队中统一选择器命名规范和代码风格"],donts:["不要在选择器中做副作用或访问外部可变状态","不要让选择器返回总是新建的对象/数组","不要在选择器中调用 API 或进行异步操作","不要在选择器中修改传入的 state 参数","不要在选择器中使用随机数、时间戳等不稳定的值","不要将组件特有的逻辑放在选择器中","不要在选择器中直接操作 DOM 或浏览器 API","不要忽略选择器的性能影响，特别是大数据集计算"],patterns:["数值派生：sum/avg/max/min 等统计类","布尔派生：isPositive/isEven/isEmpty 等标志位","文本派生：statusText/label 等 UI 文案","数组派生：length/first/last 等集合操作","对象派生：拆分为多个原始类型选择器","条件派生：基于状态的条件判断和分支逻辑","格式化派生：日期格式化、数字格式化等展示逻辑","过滤派生：基于条件的数组过滤和筛选"]}});export{G as default};
