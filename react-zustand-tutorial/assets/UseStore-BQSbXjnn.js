import{r as a,R as i,j as e}from"./index-BWM6UHr8.js";import{c as m,C as b}from"./ComponentTemplate-ClBHhBQ8.js";const o=m((n,r)=>({count:0,step:1,history:[],lastUpdated:null,increment:()=>n(t=>({count:t.count+1,history:[...t.history,t.count+1],lastUpdated:new Date})),decrement:()=>n(t=>({count:t.count-1,history:[...t.history,t.count-1],lastUpdated:new Date})),reset:()=>n({count:0,history:[0],lastUpdated:new Date}),setStep:t=>n({step:t}),incrementByStep:()=>{const{count:t,step:s}=r();n({count:t+s,history:[...r().history,t+s],lastUpdated:new Date})},decrementByStep:()=>{const{count:t,step:s}=r();n({count:t-s,history:[...r().history,t-s],lastUpdated:new Date})},clearHistory:()=>n({history:[]})})),h=n=>n.count,d=n=>n.step,g=n=>n.history,y=n=>n.count>0,v=()=>{const[n,r]=a.useState(0),t=o();return i.useEffect(()=>{r(s=>s+1)},[t]),e.jsxs("div",{className:"p-6 bg-white rounded-lg shadow-md",children:[e.jsxs("div",{className:"flex justify-between items-center mb-4",children:[e.jsx("h3",{className:"text-lg font-semibold text-gray-800",children:"基础 Store 使用"}),e.jsxs("span",{className:"text-sm text-gray-500",children:["渲染次数: ",n]})]}),e.jsxs("div",{className:"grid grid-cols-2 gap-4 mb-6",children:[e.jsxs("div",{className:"p-4 bg-blue-50 rounded",children:[e.jsx("h4",{className:"font-semibold text-blue-800 mb-2",children:"当前状态"}),e.jsxs("div",{className:"space-y-2 text-sm",children:[e.jsxs("div",{children:["计数:"," ",e.jsx("span",{className:"font-bold text-blue-600",children:t.count})]}),e.jsxs("div",{children:["步长:"," ",e.jsx("span",{className:"font-bold text-blue-600",children:t.step})]}),e.jsxs("div",{children:["历史记录数:"," ",e.jsx("span",{className:"font-bold text-blue-600",children:t.history.length})]}),e.jsxs("div",{children:["最后更新:"," ",e.jsx("span",{className:"font-bold text-blue-600",children:t.lastUpdated?t.lastUpdated.toLocaleTimeString():"未更新"})]})]})]}),e.jsxs("div",{className:"p-4 bg-green-50 rounded",children:[e.jsx("h4",{className:"font-semibold text-green-800 mb-2",children:"历史记录"}),e.jsx("div",{className:"max-h-20 overflow-y-auto text-sm",children:t.history.length>0?e.jsx("div",{className:"flex flex-wrap gap-1",children:t.history.slice(-10).map((s,l)=>e.jsx("span",{className:"px-2 py-1 bg-green-200 rounded text-xs",children:s},l))}):e.jsx("span",{className:"text-gray-500",children:"暂无历史记录"})})]})]}),e.jsxs("div",{className:"space-y-3",children:[e.jsxs("div",{className:"flex gap-2",children:[e.jsx("button",{onClick:t.decrement,className:"px-3 py-2 bg-red-500 text-white rounded hover:bg-red-600 transition-colors",children:"-1"}),e.jsx("button",{onClick:t.reset,className:"px-3 py-2 bg-gray-500 text-white rounded hover:bg-gray-600 transition-colors",children:"重置"}),e.jsx("button",{onClick:t.increment,className:"px-3 py-2 bg-green-500 text-white rounded hover:bg-green-600 transition-colors",children:"+1"})]}),e.jsxs("div",{className:"flex gap-2 items-center",children:[e.jsx("label",{className:"text-sm font-medium",children:"步长:"}),e.jsx("input",{type:"number",value:t.step,onChange:s=>t.setStep(Number(s.target.value)),className:"w-16 px-2 py-1 border rounded text-center",min:"1"}),e.jsxs("button",{onClick:t.decrementByStep,className:"px-3 py-2 bg-orange-500 text-white rounded hover:bg-orange-600 transition-colors",children:["-",t.step]}),e.jsxs("button",{onClick:t.incrementByStep,className:"px-3 py-2 bg-purple-500 text-white rounded hover:bg-purple-600 transition-colors",children:["+",t.step]})]}),e.jsx("button",{onClick:t.clearHistory,className:"px-3 py-2 bg-yellow-500 text-white rounded hover:bg-yellow-600 transition-colors",children:"清空历史"})]}),e.jsxs("div",{className:"mt-4 p-3 bg-red-50 border border-red-200 rounded text-sm text-red-800",children:[e.jsx("p",{children:e.jsx("strong",{children:"⚠️ 注意："})}),e.jsxs("ul",{className:"list-disc list-inside mt-1 space-y-1",children:[e.jsx("li",{children:"这种方式会订阅整个 store，任何状态变化都会触发重新渲染"}),e.jsx("li",{children:"观察右上角的渲染次数，每次操作都会增加"}),e.jsx("li",{children:"在实际项目中应该使用选择器来优化性能"})]})]})]})},N=`import React, { useState } from "react";

import { useExtendedCounterStore } from "../stores/counterStore";

const BasicStoreUsageDemo: React.FC = () => {
  const [renderCount, setRenderCount] = useState(0);

  // 读取整个 store 状态（不推荐的方式）
  const wholeStore = useExtendedCounterStore();

  // 更新渲染次数
  React.useEffect(() => {
    setRenderCount((prev) => prev + 1);
  }, [wholeStore]); // 只在 store 状态变化时更新渲染次数

  return (
    <div className="p-6 bg-white rounded-lg shadow-md">
      <div className="flex justify-between items-center mb-4">
        <h3 className="text-lg font-semibold text-gray-800">基础 Store 使用</h3>
        <span className="text-sm text-gray-500">渲染次数: {renderCount}</span>
      </div>

      <div className="grid grid-cols-2 gap-4 mb-6">
        <div className="p-4 bg-blue-50 rounded">
          <h4 className="font-semibold text-blue-800 mb-2">当前状态</h4>
          <div className="space-y-2 text-sm">
            <div>
              计数:{" "}
              <span className="font-bold text-blue-600">
                {wholeStore.count}
              </span>
            </div>
            <div>
              步长:{" "}
              <span className="font-bold text-blue-600">{wholeStore.step}</span>
            </div>
            <div>
              历史记录数:{" "}
              <span className="font-bold text-blue-600">
                {wholeStore.history.length}
              </span>
            </div>
            <div>
              最后更新:{" "}
              <span className="font-bold text-blue-600">
                {wholeStore.lastUpdated
                  ? wholeStore.lastUpdated.toLocaleTimeString()
                  : "未更新"}
              </span>
            </div>
          </div>
        </div>

        <div className="p-4 bg-green-50 rounded">
          <h4 className="font-semibold text-green-800 mb-2">历史记录</h4>
          <div className="max-h-20 overflow-y-auto text-sm">
            {wholeStore.history.length > 0 ? (
              <div className="flex flex-wrap gap-1">
                {wholeStore.history.slice(-10).map((value, index) => (
                  <span
                    key={index}
                    className="px-2 py-1 bg-green-200 rounded text-xs"
                  >
                    {value}
                  </span>
                ))}
              </div>
            ) : (
              <span className="text-gray-500">暂无历史记录</span>
            )}
          </div>
        </div>
      </div>

      <div className="space-y-3">
        <div className="flex gap-2">
          <button
            onClick={wholeStore.decrement}
            className="px-3 py-2 bg-red-500 text-white rounded hover:bg-red-600 transition-colors"
          >
            -1
          </button>

          <button
            onClick={wholeStore.reset}
            className="px-3 py-2 bg-gray-500 text-white rounded hover:bg-gray-600 transition-colors"
          >
            重置
          </button>

          <button
            onClick={wholeStore.increment}
            className="px-3 py-2 bg-green-500 text-white rounded hover:bg-green-600 transition-colors"
          >
            +1
          </button>
        </div>

        <div className="flex gap-2 items-center">
          <label className="text-sm font-medium">步长:</label>
          <input
            type="number"
            value={wholeStore.step}
            onChange={(e) => wholeStore.setStep(Number(e.target.value))}
            className="w-16 px-2 py-1 border rounded text-center"
            min="1"
          />
          <button
            onClick={wholeStore.decrementByStep}
            className="px-3 py-2 bg-orange-500 text-white rounded hover:bg-orange-600 transition-colors"
          >
            -{wholeStore.step}
          </button>
          <button
            onClick={wholeStore.incrementByStep}
            className="px-3 py-2 bg-purple-500 text-white rounded hover:bg-purple-600 transition-colors"
          >
            +{wholeStore.step}
          </button>
        </div>

        <button
          onClick={wholeStore.clearHistory}
          className="px-3 py-2 bg-yellow-500 text-white rounded hover:bg-yellow-600 transition-colors"
        >
          清空历史
        </button>
      </div>

      <div className="mt-4 p-3 bg-red-50 border border-red-200 rounded text-sm text-red-800">
        <p>
          <strong>⚠️ 注意：</strong>
        </p>
        <ul className="list-disc list-inside mt-1 space-y-1">
          <li>这种方式会订阅整个 store，任何状态变化都会触发重新渲染</li>
          <li>观察右上角的渲染次数，每次操作都会增加</li>
          <li>在实际项目中应该使用选择器来优化性能</li>
        </ul>
      </div>
    </div>
  );
};

export default BasicStoreUsageDemo;
`,S=()=>{const[n,r]=a.useState(0),t=o(h);return i.useEffect(()=>{r(s=>s+1)},[t]),e.jsxs("div",{className:"p-4 bg-blue-50 border border-blue-200 rounded",children:[e.jsxs("div",{className:"flex justify-between items-center mb-2",children:[e.jsx("h4",{className:"font-semibold text-blue-800",children:"计数显示"}),e.jsxs("span",{className:"text-xs text-blue-600",children:["渲染: ",n]})]}),e.jsx("div",{className:"text-2xl font-bold text-blue-600",children:t}),e.jsx("p",{className:"text-xs text-blue-700 mt-1",children:"只订阅 count 状态"})]})},w=()=>{const[n,r]=a.useState(0),t=o(d);return i.useEffect(()=>{r(s=>s+1)},[t]),e.jsxs("div",{className:"p-4 bg-green-50 border border-green-200 rounded",children:[e.jsxs("div",{className:"flex justify-between items-center mb-2",children:[e.jsx("h4",{className:"font-semibold text-green-800",children:"步长显示"}),e.jsxs("span",{className:"text-xs text-green-600",children:["渲染: ",n]})]}),e.jsx("div",{className:"text-2xl font-bold text-green-600",children:t}),e.jsx("p",{className:"text-xs text-green-700 mt-1",children:"只订阅 step 状态"})]})},j=()=>{const[n,r]=a.useState(0),t=o(g);return i.useEffect(()=>{r(s=>s+1)},[t]),e.jsxs("div",{className:"p-4 bg-purple-50 border border-purple-200 rounded",children:[e.jsxs("div",{className:"flex justify-between items-center mb-2",children:[e.jsx("h4",{className:"font-semibold text-purple-800",children:"历史记录"}),e.jsxs("span",{className:"text-xs text-purple-600",children:["渲染: ",n]})]}),e.jsxs("div",{className:"text-sm text-purple-700",children:["总数: ",e.jsx("span",{className:"font-bold",children:t.length})]}),e.jsx("div",{className:"max-h-16 overflow-y-auto mt-1",children:t.slice(-5).map((s,l)=>e.jsx("span",{className:"inline-block px-1 py-0.5 bg-purple-200 rounded text-xs mr-1 mb-1",children:s},l))}),e.jsx("p",{className:"text-xs text-purple-700 mt-1",children:"只订阅 history 状态"})]})},f=()=>{const[n,r]=a.useState(0),t=o(y);return i.useEffect(()=>{r(s=>s+1)},[t]),e.jsxs("div",{className:"p-4 bg-yellow-50 border border-yellow-200 rounded",children:[e.jsxs("div",{className:"flex justify-between items-center mb-2",children:[e.jsx("h4",{className:"font-semibold text-yellow-800",children:"状态显示"}),e.jsxs("span",{className:"text-xs text-yellow-600",children:["渲染: ",n]})]}),e.jsx("div",{className:`text-lg font-bold ${t?"text-green-600":"text-red-600"}`,children:t?"正数 ✓":"非正数 ✗"}),e.jsx("p",{className:"text-xs text-yellow-700 mt-1",children:"使用计算选择器"})]})},C=()=>{const{increment:n,decrement:r,reset:t,setStep:s,incrementByStep:l,decrementByStep:p,clearHistory:u}=o(),c=o(d);return e.jsxs("div",{className:"p-6 bg-white rounded-lg shadow-md",children:[e.jsx("h3",{className:"text-lg font-semibold text-gray-800 mb-4",children:"选择器性能优化演示"}),e.jsxs("div",{className:"grid grid-cols-2 gap-4 mb-6",children:[e.jsx(S,{}),e.jsx(w,{}),e.jsx(j,{}),e.jsx(f,{})]}),e.jsxs("div",{className:"space-y-3",children:[e.jsxs("div",{className:"flex gap-2",children:[e.jsx("button",{onClick:r,className:"px-3 py-2 bg-red-500 text-white rounded hover:bg-red-600 transition-colors",children:"-1"}),e.jsx("button",{onClick:t,className:"px-3 py-2 bg-gray-500 text-white rounded hover:bg-gray-600 transition-colors",children:"重置"}),e.jsx("button",{onClick:n,className:"px-3 py-2 bg-green-500 text-white rounded hover:bg-green-600 transition-colors",children:"+1"})]}),e.jsxs("div",{className:"flex gap-2 items-center",children:[e.jsx("label",{className:"text-sm font-medium",children:"步长:"}),e.jsx("input",{type:"number",value:c,onChange:x=>s(Number(x.target.value)),className:"w-16 px-2 py-1 border rounded text-center",min:"1"}),e.jsxs("button",{onClick:p,className:"px-3 py-2 bg-orange-500 text-white rounded hover:bg-orange-600 transition-colors",children:["-",c]}),e.jsxs("button",{onClick:l,className:"px-3 py-2 bg-purple-500 text-white rounded hover:bg-purple-600 transition-colors",children:["+",c]})]}),e.jsx("button",{onClick:u,className:"px-3 py-2 bg-yellow-500 text-white rounded hover:bg-yellow-600 transition-colors",children:"清空历史"})]}),e.jsxs("div",{className:"mt-4 p-3 bg-green-50 border border-green-200 rounded text-sm text-green-800",children:[e.jsx("p",{children:e.jsx("strong",{children:"✅ 性能优化效果："})}),e.jsxs("ul",{className:"list-disc list-inside mt-1 space-y-1",children:[e.jsx("li",{children:"每个组件只订阅需要的状态，减少不必要的重新渲染"}),e.jsx("li",{children:"观察各组件的渲染次数，只有相关状态变化时才会重新渲染"}),e.jsx("li",{children:'例如：修改步长时，只有"步长显示"组件会重新渲染'}),e.jsx("li",{children:"使用选择器可以显著提升应用性能"})]})]})]})},D=`import React, { useState } from "react";\r
import {\r
  selectCount,\r
  selectHistory,\r
  selectIsPositive,\r
  selectStep,\r
  useExtendedCounterStore,\r
} from "../stores/counterStore";\r
\r
// 只订阅计数值的组件\r
const CountDisplay: React.FC = () => {\r
  const [renderCount, setRenderCount] = useState(0);\r
  const count = useExtendedCounterStore(selectCount);\r
\r
  React.useEffect(() => {\r
    setRenderCount((prev) => prev + 1);\r
  }, [count]);\r
\r
  return (\r
    <div className="p-4 bg-blue-50 border border-blue-200 rounded">\r
      <div className="flex justify-between items-center mb-2">\r
        <h4 className="font-semibold text-blue-800">计数显示</h4>\r
        <span className="text-xs text-blue-600">渲染: {renderCount}</span>\r
      </div>\r
      <div className="text-2xl font-bold text-blue-600">{count}</div>\r
      <p className="text-xs text-blue-700 mt-1">只订阅 count 状态</p>\r
    </div>\r
  );\r
};\r
\r
// 只订阅步长的组件\r
const StepDisplay: React.FC = () => {\r
  const [renderCount, setRenderCount] = useState(0);\r
  const step = useExtendedCounterStore(selectStep);\r
\r
  React.useEffect(() => {\r
    setRenderCount((prev) => prev + 1);\r
  }, [step]);\r
\r
  return (\r
    <div className="p-4 bg-green-50 border border-green-200 rounded">\r
      <div className="flex justify-between items-center mb-2">\r
        <h4 className="font-semibold text-green-800">步长显示</h4>\r
        <span className="text-xs text-green-600">渲染: {renderCount}</span>\r
      </div>\r
      <div className="text-2xl font-bold text-green-600">{step}</div>\r
      <p className="text-xs text-green-700 mt-1">只订阅 step 状态</p>\r
    </div>\r
  );\r
};\r
\r
// 只订阅历史记录的组件\r
const HistoryDisplay: React.FC = () => {\r
  const [renderCount, setRenderCount] = useState(0);\r
  const history = useExtendedCounterStore(selectHistory);\r
\r
  React.useEffect(() => {\r
    setRenderCount((prev) => prev + 1);\r
  }, [history]);\r
\r
  return (\r
    <div className="p-4 bg-purple-50 border border-purple-200 rounded">\r
      <div className="flex justify-between items-center mb-2">\r
        <h4 className="font-semibold text-purple-800">历史记录</h4>\r
        <span className="text-xs text-purple-600">渲染: {renderCount}</span>\r
      </div>\r
      <div className="text-sm text-purple-700">\r
        总数: <span className="font-bold">{history.length}</span>\r
      </div>\r
      <div className="max-h-16 overflow-y-auto mt-1">\r
        {history.slice(-5).map((value, index) => (\r
          <span\r
            key={index}\r
            className="inline-block px-1 py-0.5 bg-purple-200 rounded text-xs mr-1 mb-1"\r
          >\r
            {value}\r
          </span>\r
        ))}\r
      </div>\r
      <p className="text-xs text-purple-700 mt-1">只订阅 history 状态</p>\r
    </div>\r
  );\r
};\r
\r
// 使用计算选择器的组件\r
const StatusDisplay: React.FC = () => {\r
  const [renderCount, setRenderCount] = useState(0);\r
  const isPositive = useExtendedCounterStore(selectIsPositive);\r
\r
  React.useEffect(() => {\r
    setRenderCount((prev) => prev + 1);\r
  }, [isPositive]);\r
\r
  return (\r
    <div className="p-4 bg-yellow-50 border border-yellow-200 rounded">\r
      <div className="flex justify-between items-center mb-2">\r
        <h4 className="font-semibold text-yellow-800">状态显示</h4>\r
        <span className="text-xs text-yellow-600">渲染: {renderCount}</span>\r
      </div>\r
      <div\r
        className={\`text-lg font-bold \${\r
          isPositive ? "text-green-600" : "text-red-600"\r
        }\`}\r
      >\r
        {isPositive ? "正数 ✓" : "非正数 ✗"}\r
      </div>\r
      <p className="text-xs text-yellow-700 mt-1">使用计算选择器</p>\r
    </div>\r
  );\r
};\r
\r
// 主演示组件\r
const SelectorDemo: React.FC = () => {\r
  const {\r
    increment,\r
    decrement,\r
    reset,\r
    setStep,\r
    incrementByStep,\r
    decrementByStep,\r
    clearHistory,\r
  } = useExtendedCounterStore();\r
  const step = useExtendedCounterStore(selectStep);\r
\r
  return (\r
    <div className="p-6 bg-white rounded-lg shadow-md">\r
      <h3 className="text-lg font-semibold text-gray-800 mb-4">\r
        选择器性能优化演示\r
      </h3>\r
\r
      {/* 显示组件 */}\r
      <div className="grid grid-cols-2 gap-4 mb-6">\r
        <CountDisplay />\r
        <StepDisplay />\r
        <HistoryDisplay />\r
        <StatusDisplay />\r
      </div>\r
\r
      {/* 控制按钮 */}\r
      <div className="space-y-3">\r
        <div className="flex gap-2">\r
          <button\r
            onClick={decrement}\r
            className="px-3 py-2 bg-red-500 text-white rounded hover:bg-red-600 transition-colors"\r
          >\r
            -1\r
          </button>\r
\r
          <button\r
            onClick={reset}\r
            className="px-3 py-2 bg-gray-500 text-white rounded hover:bg-gray-600 transition-colors"\r
          >\r
            重置\r
          </button>\r
\r
          <button\r
            onClick={increment}\r
            className="px-3 py-2 bg-green-500 text-white rounded hover:bg-green-600 transition-colors"\r
          >\r
            +1\r
          </button>\r
        </div>\r
\r
        <div className="flex gap-2 items-center">\r
          <label className="text-sm font-medium">步长:</label>\r
          <input\r
            type="number"\r
            value={step}\r
            onChange={(e) => setStep(Number(e.target.value))}\r
            className="w-16 px-2 py-1 border rounded text-center"\r
            min="1"\r
          />\r
          <button\r
            onClick={decrementByStep}\r
            className="px-3 py-2 bg-orange-500 text-white rounded hover:bg-orange-600 transition-colors"\r
          >\r
            -{step}\r
          </button>\r
          <button\r
            onClick={incrementByStep}\r
            className="px-3 py-2 bg-purple-500 text-white rounded hover:bg-purple-600 transition-colors"\r
          >\r
            +{step}\r
          </button>\r
        </div>\r
\r
        <button\r
          onClick={clearHistory}\r
          className="px-3 py-2 bg-yellow-500 text-white rounded hover:bg-yellow-600 transition-colors"\r
        >\r
          清空历史\r
        </button>\r
      </div>\r
\r
      <div className="mt-4 p-3 bg-green-50 border border-green-200 rounded text-sm text-green-800">\r
        <p>\r
          <strong>✅ 性能优化效果：</strong>\r
        </p>\r
        <ul className="list-disc list-inside mt-1 space-y-1">\r
          <li>每个组件只订阅需要的状态，减少不必要的重新渲染</li>\r
          <li>观察各组件的渲染次数，只有相关状态变化时才会重新渲染</li>\r
          <li>例如：修改步长时，只有"步长显示"组件会重新渲染</li>\r
          <li>使用选择器可以显著提升应用性能</li>\r
        </ul>\r
      </div>\r
    </div>\r
  );\r
};\r
\r
export default SelectorDemo;\r
`,R=`import {
  BooleanSelector,
  CountSelector,
  DateSelector,
  ExtendedCounterState,
  HistorySelector,
  StepSelector,
} from "../types";

import { create } from "zustand";

// 创建扩展的计数器 Store
export const useExtendedCounterStore = create<ExtendedCounterState>(
  (set, get) => ({
    // 初始状态
    count: 0,
    step: 1,
    history: [],
    lastUpdated: null,

    // 基础操作
    increment: () =>
      set((state) => ({
        count: state.count + 1,
        history: [...state.history, state.count + 1],
        lastUpdated: new Date(),
      })),

    decrement: () =>
      set((state) => ({
        count: state.count - 1,
        history: [...state.history, state.count - 1],
        lastUpdated: new Date(),
      })),

    reset: () =>
      set({
        count: 0,
        history: [0],
        lastUpdated: new Date(),
      }),

    // 扩展操作
    setStep: (step: number) => set({ step }),

    incrementByStep: () => {
      const { count, step } = get();
      set({
        count: count + step,
        history: [...get().history, count + step],
        lastUpdated: new Date(),
      });
    },

    decrementByStep: () => {
      const { count, step } = get();
      set({
        count: count - step,
        history: [...get().history, count - step],
        lastUpdated: new Date(),
      });
    },

    clearHistory: () => set({ history: [] }),
  })
);

// 演示选择器的使用
export const selectCount: CountSelector = (state) => state.count;
export const selectStep: StepSelector = (state) => state.step;
export const selectHistory: HistorySelector = (state) => state.history;
export const selectLastUpdated: DateSelector = (state) => state.lastUpdated;
export const selectIsPositive: BooleanSelector = (state) => state.count > 0;
export const selectHistoryLength: (state: ExtendedCounterState) => number = (
  state
) => state.history.length;
`,U=()=>e.jsx(b,{title:"读取状态 (useStore)",description:"学习如何从 Zustand store 中读取状态。掌握基本读取方式、选择器优化和性能最佳实践。",overview:[{title:"核心概念",items:["useStore 是 Zustand 读取状态的主入口，支持全量订阅和选择器订阅。","选择器函数可精确订阅片段，减少无关渲染，提升性能。","选择器应返回原始值或稳定引用，避免新对象导致频繁渲染。","Zustand 自动管理订阅和取消订阅，组件卸载时无需手动清理。","配合 DevTools 可追踪每次状态变更，便于调试和性能分析。"]},{title:"主要优势",items:["简单直观的状态读取和订阅机制，易于上手。","选择器优化后可显著降低重渲染次数，提升交互性能。","TypeScript 类型推断友好，减少类型错误。","可与 DevTools、Persist、Middleware 等中间件无缝集成。","支持多 store 并存，灵活应对复杂业务。"]},{title:"适用场景",items:["组件状态显示与交互","条件渲染与派生状态计算","性能敏感的高频交互页面","需要拆分订阅、减少渲染的复杂组件树"]},{title:"注意事项",items:["避免订阅整个 store，优先使用选择器。","选择器应定义在组件外部，保持引用稳定。","不要在选择器中做副作用或复杂计算。","选择器返回对象时需配合 shallow 比较。","监控组件渲染次数，及时优化性能瓶颈。"]}],examples:[{title:"基础状态读取",component:e.jsx(v,{}),description:"演示最基础的 store 状态读取方式，展示订阅整个 store 的效果和问题",observationPoints:["点击任意按钮观察右上角渲染次数的变化","注意每次状态更新都会触发组件重新渲染","观察历史记录和其他状态的实时更新","体验订阅整个 store 的性能影响"],keyPoints:["useStore() 不带参数会订阅整个 store","任何状态变化都会触发组件重新渲染","可以直接访问 store 中的所有状态和方法","这种方式在复杂应用中可能导致性能问题"],commonTraps:["订阅整个 store 导致不必要的重新渲染","在大型应用中造成性能瓶颈","忽视组件的渲染优化","不理解状态订阅机制"],solutions:["使用选择器只订阅需要的状态","合理拆分组件和状态","监控组件渲染次数","理解 Zustand 的订阅机制"],preCode:[{title:"扩展的计数器 Store",code:R,description:"包含更多状态和操作的扩展计数器 store"}],codeExample:{code:N,title:"基础状态读取组件实现"}},{title:"选择器性能优化",component:e.jsx(C,{}),description:"演示如何使用选择器优化性能，只订阅需要的状态片段",observationPoints:["点击不同按钮，观察各个子组件的渲染次数变化","修改步长时，只有'步长显示'组件会重新渲染","点击计数按钮时，只有相关组件会重新渲染","对比选择器优化前后的性能差异"],keyPoints:["选择器函数用于选择 store 中的特定状态","只有选择的状态发生变化时组件才会重新渲染","可以在选择器中进行简单的状态计算","选择器应该保持引用稳定性"],commonTraps:["在选择器中进行复杂计算","选择器函数引用不稳定","过度拆分选择器","忽视选择器的性能影响"],solutions:["保持选择器简单和纯净","将选择器定义在组件外部","合理平衡选择器的粒度","使用 useMemo 优化复杂选择器"],importantTips:["选择器函数应该是纯函数，避免副作用","可以将常用选择器导出供多个组件使用","选择器的返回值会进行浅比较来决定是否重新渲染","复杂的派生状态计算应该使用 useMemo"],codeExample:{code:D,title:"选择器优化演示组件"}}],tutorial:{concepts:["useStore hook 是访问 Zustand store 状态的主要方式","选择器函数用于选择 store 中的特定状态片段","Zustand 使用浅比较来决定是否触发组件重新渲染","合理使用选择器可以显著提升应用性能","状态订阅是自动的，组件卸载时会自动取消订阅"],steps:["在组件中调用 useStore hook","选择读取整个 store 或使用选择器","定义选择器函数选择特定状态","在组件中使用选择的状态","监控组件渲染性能","根据需要优化选择器策略"],tips:["优先使用选择器而不是订阅整个 store","将选择器函数定义在组件外部保持引用稳定","使用 TypeScript 为选择器提供类型安全","监控组件渲染次数来评估性能","合理拆分组件以最大化选择器的效果"]},interview:{questions:[{question:"useStore() 和 useStore(selector) 有什么区别？",answer:"useStore() 不带参数会订阅整个 store，任何状态变化都会触发重新渲染。useStore(selector) 使用选择器只订阅特定状态，只有选择的状态变化时才会重新渲染，性能更好。"},{question:"如何编写高效的选择器函数？",answer:"选择器应该是纯函数，保持简单和快速。避免在选择器中进行复杂计算，保持引用稳定性（定义在组件外部），返回最小必要的状态片段。对于复杂计算，应该在组件中使用 useMemo。"},{question:"Zustand 如何决定是否重新渲染组件？",answer:"Zustand 使用 Object.is() 进行浅比较。对于选择器返回的值，如果与上次的值不同（浅比较），就会触发组件重新渲染。这就是为什么选择器应该返回原始值或稳定的引用。"},{question:"什么时候应该拆分选择器？",answer:"当组件只需要 store 中的部分状态时，应该使用选择器。如果一个组件需要多个不相关的状态片段，可以考虑拆分成多个组件，每个组件使用自己的选择器，或者使用多个 useStore 调用。"}],keyPoints:["选择器是 Zustand 性能优化的关键","浅比较决定是否重新渲染","选择器应该保持简单和纯净","合理的组件拆分可以最大化选择器效果","状态订阅是自动管理的"]},bestPractices:{dos:["优先使用选择器而不是订阅整个 store","将选择器函数定义在组件外部","保持选择器简单和纯净","监控组件渲染性能","合理拆分组件以优化订阅","使用 TypeScript 提供类型安全"],donts:["不要在选择器中进行复杂计算","不要在组件内部定义选择器函数","不要忽视组件渲染性能","不要过度拆分选择器","不要在选择器中包含副作用"],patterns:["选择器模式：为常用状态片段定义专用选择器","组件拆分：将大组件拆分为专注的小组件","性能监控：使用渲染计数器监控性能","类型安全：使用 TypeScript 定义选择器类型"]}});export{U as default};
