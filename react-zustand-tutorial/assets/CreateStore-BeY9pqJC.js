import{r as i,R as d,j as e}from"./index-BWM6UHr8.js";import{c as u,C as l}from"./ComponentTemplate-ClBHhBQ8.js";const m=u(t=>({count:0,increment:()=>t(s=>({count:s.count+1})),decrement:()=>t(s=>({count:s.count-1})),reset:()=>t({count:0})})),p=()=>{const[t,s]=i.useState(0),{count:n,increment:r,decrement:o,reset:c}=m();return d.useEffect(()=>{s(a=>a+1)},[n]),e.jsxs("div",{className:"p-6 bg-white rounded-lg shadow-md",children:[e.jsxs("div",{className:"flex justify-between items-center mb-4",children:[e.jsx("h3",{className:"text-lg font-semibold text-gray-800",children:"基础计数器"}),e.jsxs("span",{className:"text-sm text-gray-500",children:["渲染次数: ",t]})]}),e.jsxs("div",{className:"text-center",children:[e.jsx("div",{className:"text-4xl font-bold text-blue-600 mb-6",children:n}),e.jsxs("div",{className:"flex gap-3 justify-center",children:[e.jsx("button",{onClick:o,className:"px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600 transition-colors",children:"-1"}),e.jsx("button",{onClick:c,className:"px-4 py-2 bg-gray-500 text-white rounded hover:bg-gray-600 transition-colors",children:"重置"}),e.jsx("button",{onClick:r,className:"px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600 transition-colors",children:"+1"})]})]}),e.jsxs("div",{className:"mt-4 p-3 bg-blue-50 rounded text-sm text-blue-800",children:[e.jsx("p",{children:e.jsx("strong",{children:"观察要点："})}),e.jsxs("ul",{className:"list-disc list-inside mt-1 space-y-1",children:[e.jsx("li",{children:"点击按钮观察计数值的实时变化"}),e.jsx("li",{children:"注意右上角渲染次数的变化"}),e.jsx("li",{children:"每次状态更新都会触发组件重新渲染"})]})]})]})},x=`import React, { useState } from 'react';

import { useCounterStore } from '../stores/counterStore';

const BasicCounterDemo: React.FC = () => {
  const [renderCount, setRenderCount] = useState(0);

  // 从 Zustand store 中获取状态和方法
  const { count, increment, decrement, reset } = useCounterStore();

  // 更新渲染次数
  React.useEffect(() => {
    setRenderCount(prev => prev + 1);
  }, [count]); // 只在 count 变化时更新渲染次数

  return (
    <div className="p-6 bg-white rounded-lg shadow-md">
      <div className="flex justify-between items-center mb-4">
        <h3 className="text-lg font-semibold text-gray-800">基础计数器</h3>
        <span className="text-sm text-gray-500">渲染次数: {renderCount}</span>
      </div>

      <div className="text-center">
        <div className="text-4xl font-bold text-blue-600 mb-6">
          {count}
        </div>

        <div className="flex gap-3 justify-center">
          <button
            onClick={decrement}
            className="px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600 transition-colors"
          >
            -1
          </button>

          <button
            onClick={reset}
            className="px-4 py-2 bg-gray-500 text-white rounded hover:bg-gray-600 transition-colors"
          >
            重置
          </button>

          <button
            onClick={increment}
            className="px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600 transition-colors"
          >
            +1
          </button>
        </div>
      </div>

      <div className="mt-4 p-3 bg-blue-50 rounded text-sm text-blue-800">
        <p><strong>观察要点：</strong></p>
        <ul className="list-disc list-inside mt-1 space-y-1">
          <li>点击按钮观察计数值的实时变化</li>
          <li>注意右上角渲染次数的变化</li>
          <li>每次状态更新都会触发组件重新渲染</li>
        </ul>
      </div>
    </div>
  );
};

export default BasicCounterDemo;`,b=`import { create } from "zustand";
import { CounterState } from "../types";

// 创建 Zustand Store
export const useCounterStore = create<CounterState>((set) => ({
  // 初始状态
  count: 0,

  // 增加计数
  increment: () => set((state) => ({ count: state.count + 1 })),

  // 减少计数
  decrement: () => set((state) => ({ count: state.count - 1 })),

  // 重置计数
  reset: () => set({ count: 0 }),
}));
`,g=`// Counter Store 相关类型定义
export interface CounterState {
  count: number;
  increment: () => void;
  decrement: () => void;
  reset: () => void;
}
`,y=()=>e.jsx(l,{title:"创建 Store (create)",description:"学习如何使用 Zustand 的 create 函数创建状态管理 store。掌握基本语法、状态定义和方法创建等核心概念。",overview:[{title:"核心概念",items:["create 函数的基本用法","状态和方法的定义","TypeScript 类型支持","set 函数的使用方式"]},{title:"主要优势",items:["简洁的 API 设计","自动类型推断","无需 Provider 包装","轻量级实现"]},{title:"适用场景",items:["全局状态管理","组件间状态共享","复杂业务逻辑","状态持久化需求"]},{title:"注意事项",items:["状态更新的不可变性","避免在 set 中直接修改状态","合理设计状态结构","注意类型定义的准确性"]}],examples:[{title:"基础计数器 Store",component:e.jsx(p,{}),description:"演示最基础的 Zustand store 创建和使用，包含状态定义和基本操作方法",observationPoints:["点击按钮观察计数值的实时变化","注意右上角渲染次数的变化","每次状态更新都会触发使用该状态的组件重新渲染","多个按钮操作同一个 store 状态"],keyPoints:["create 函数返回一个 React Hook","set 函数用于更新状态，支持函数式更新","状态和方法都定义在同一个对象中","TypeScript 提供完整的类型支持"],commonTraps:["直接修改状态对象而不使用 set 函数","在 set 函数中进行异步操作","忘记定义 TypeScript 类型","状态结构设计过于复杂"],solutions:["始终使用 set 函数更新状态","将异步逻辑放在 action 方法中","为 store 定义清晰的 TypeScript 接口","保持状态结构简单和扁平"],preCode:[{title:"types 定义",code:g},{title:"Store 定义",code:b}],codeExample:{code:x,title:"基础计数器组件实现"}}],tutorial:{concepts:["create 函数是 Zustand 的核心 API，用于创建状态管理 store","工厂函数接收 set、get、store 参数，返回状态对象","set 函数用于更新状态，支持部分更新和函数式更新","TypeScript 支持通过泛型提供完整的类型安全","创建的 store 是一个 React Hook，可以在组件中直接使用"],steps:["从 zustand 包中导入 create 函数","定义 store 的 TypeScript 接口（可选但推荐）","调用 create 函数，传入工厂函数","在工厂函数中定义初始状态和方法","使用 set 函数更新状态","导出创建的 hook 供组件使用"],tips:["使用 TypeScript 定义清晰的状态接口","保持状态结构简单和扁平","将相关的状态和方法组织在同一个 store 中","使用描述性的方法名称","利用 set 函数的函数式更新避免状态竞争"]},interview:{questions:[{question:"Zustand 的 create 函数和 Redux 的 createStore 有什么区别？",answer:"Zustand 的 create 函数更加简洁，不需要 reducer 和 action 的概念，直接在 store 中定义方法。不需要 Provider 包装，返回的是 React Hook。而 Redux 需要定义 action、reducer，使用 Provider 包装应用，API 更复杂。"},{question:"set 函数支持哪些更新方式？",answer:"set 函数支持三种更新方式：1) 对象合并：set({count: 1})；2) 函数式更新：set(state => ({count: state.count + 1}))；3) 完全替换：set(newState, true)。函数式更新可以避免状态竞争问题。"},{question:"为什么 Zustand store 不需要 Provider？",answer:"因为 Zustand 使用模块级别的状态管理，store 是一个独立的模块，不依赖 React Context。每个 store 都是一个独立的状态容器，可以直接在任何组件中导入和使用，无需通过组件树传递。"},{question:"如何在 Zustand store 中处理异步操作？",answer:"可以在 action 方法中直接使用 async/await，或者使用 Promise。set 函数本身是同步的，但可以在异步操作完成后调用 set 更新状态。例如：async fetchData() { const data = await api.getData(); set({data}); }"}],keyPoints:["create 函数是 Zustand 的核心 API","返回的是 React Hook，可以直接在组件中使用","set 函数支持多种更新方式","不需要 Provider 和复杂的设置","TypeScript 支持提供完整的类型安全"]},bestPractices:{dos:["使用 TypeScript 定义清晰的状态接口","保持状态结构简单和扁平","使用描述性的方法名称","将相关的状态和方法组织在同一个 store 中","使用函数式更新避免状态竞争","在组件外部创建和导出 store"],donts:["不要在组件内部创建 store","不要直接修改状态对象","不要在 set 函数中进行复杂的异步操作","不要创建过于复杂的状态结构","不要忘记导出创建的 hook"],patterns:["单一职责：每个 store 负责特定的业务领域","状态归一化：避免嵌套过深的状态结构","方法封装：将状态操作封装为具体的方法","类型安全：使用 TypeScript 确保类型正确性"]}});export{y as default};
