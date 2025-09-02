import{r as t,j as e}from"./index-CKH9Ek1I.js";import{C as d}from"./ComponentTemplate-B8dTsNLj.js";const i=t.memo(({data:n,onClick:o})=>{const r=t.useRef(0);return r.current++,e.jsxs("div",{className:"p-4 border border-green-300 rounded-lg bg-green-50",children:[e.jsx("h4",{className:"font-semibold text-green-700",children:"Memo 优化组件"}),e.jsxs("p",{className:"text-sm text-gray-600",children:["渲染次数: ",r.current]}),e.jsxs("p",{className:"text-sm",children:["数据: ",JSON.stringify(n)]}),e.jsx("button",{onClick:o,className:"mt-2 px-3 py-1 bg-green-500 text-white rounded hover:bg-green-600",children:"点击我"})]})}),u=({data:n,onClick:o})=>{const r=t.useRef(0);return r.current++,e.jsxs("div",{className:"p-4 border border-red-300 rounded-lg bg-red-50",children:[e.jsx("h4",{className:"font-semibold text-red-700",children:"普通组件"}),e.jsxs("p",{className:"text-sm text-gray-600",children:["渲染次数: ",r.current]}),e.jsxs("p",{className:"text-sm",children:["数据: ",JSON.stringify(n)]}),e.jsx("button",{onClick:o,className:"mt-2 px-3 py-1 bg-red-500 text-white rounded hover:bg-red-600",children:"点击我"})]})},p=()=>{const[n,o]=t.useState(0),[r,m]=t.useState(0),a=t.useCallback(()=>{console.log("按钮被点击")},[]),l=t.useMemo(()=>({value:n}),[n]),c={value:n};return e.jsxs("div",{className:"space-y-6",children:[e.jsxs("div",{className:"bg-blue-50 p-4 rounded-lg",children:[e.jsx("h3",{className:"text-lg font-semibold mb-4",children:"控制面板"}),e.jsxs("div",{className:"flex gap-4",children:[e.jsxs("button",{onClick:()=>o(s=>s+1),className:"px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600",children:["更新数据 (count: ",n,")"]}),e.jsxs("button",{onClick:()=>m(s=>s+1),className:"px-4 py-2 bg-gray-500 text-white rounded hover:bg-gray-600",children:["无关更新 (unrelated: ",r,")"]})]})]}),e.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-6",children:[e.jsxs("div",{children:[e.jsx("h4",{className:"text-md font-semibold mb-2",children:"普通组件（每次都重新渲染）"}),e.jsx(u,{data:c,onClick:a})]}),e.jsxs("div",{children:[e.jsx("h4",{className:"text-md font-semibold mb-2",children:"Memo 优化组件（props 不变时跳过渲染）"}),e.jsx(i,{data:l,onClick:a})]})]})]})},b=`import { useCallback, useMemo, useState } from "react";\r
\r
import MemoizedComponent from "./MemoizedComponent";\r
import NormalComponent from "./NormalComponent";\r
\r
const AvoidRerenderDemo = () => {\r
  const [count, setCount] = useState(0);\r
  const [unrelatedState, setUnrelatedState] = useState(0);\r
\r
  // 使用 useCallback 缓存函数\r
  const handleClick = useCallback(() => {\r
    console.log("按钮被点击");\r
  }, []);\r
\r
  // 使用 useMemo 缓存对象\r
  const memoizedData = useMemo(() => ({ value: count }), [count]);\r
\r
  // 每次都创建新对象（会导致重新渲染）\r
  const normalData = { value: count };\r
\r
  return (\r
    <div className="space-y-6">\r
      <div className="bg-blue-50 p-4 rounded-lg">\r
        <h3 className="text-lg font-semibold mb-4">控制面板</h3>\r
        <div className="flex gap-4">\r
          <button\r
            onClick={() => setCount((c) => c + 1)}\r
            className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"\r
          >\r
            更新数据 (count: {count})\r
          </button>\r
          <button\r
            onClick={() => setUnrelatedState((s) => s + 1)}\r
            className="px-4 py-2 bg-gray-500 text-white rounded hover:bg-gray-600"\r
          >\r
            无关更新 (unrelated: {unrelatedState})\r
          </button>\r
        </div>\r
      </div>\r
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">\r
        <div>\r
          <h4 className="text-md font-semibold mb-2">\r
            普通组件（每次都重新渲染）\r
          </h4>\r
          <NormalComponent data={normalData} onClick={handleClick} />\r
        </div>\r
        <div>\r
          <h4 className="text-md font-semibold mb-2">\r
            Memo 优化组件（props 不变时跳过渲染）\r
          </h4>\r
          <MemoizedComponent data={memoizedData} onClick={handleClick} />\r
        </div>\r
      </div>\r
    </div>\r
  );\r
};\r
\r
export default AvoidRerenderDemo;\r
`,x=`import React, { memo, useRef } from "react";\r
\r
const MemoizedComponent = memo(\r
  ({ data, onClick }: { data: any; onClick: () => void }) => {\r
    const renderCount = useRef(0);\r
    renderCount.current++;\r
\r
    return (\r
      <div className="p-4 border border-green-300 rounded-lg bg-green-50">\r
        <h4 className="font-semibold text-green-700">Memo 优化组件</h4>\r
        <p className="text-sm text-gray-600">渲染次数: {renderCount.current}</p>\r
        <p className="text-sm">数据: {JSON.stringify(data)}</p>\r
        <button\r
          onClick={onClick}\r
          className="mt-2 px-3 py-1 bg-green-500 text-white rounded hover:bg-green-600"\r
        >\r
          点击我\r
        </button>\r
      </div>\r
    );\r
  }\r
);\r
\r
export default MemoizedComponent;\r
`,C=`import React, { useRef } from "react";\r
\r
const NormalComponent = ({\r
  data,\r
  onClick,\r
}: {\r
  data: any;\r
  onClick: () => void;\r
}) => {\r
  const renderCount = useRef(0);\r
  renderCount.current++;\r
\r
  return (\r
    <div className="p-4 border border-red-300 rounded-lg bg-red-50">\r
      <h4 className="font-semibold text-red-700">普通组件</h4>\r
      <p className="text-sm text-gray-600">渲染次数: {renderCount.current}</p>\r
      <p className="text-sm">数据: {JSON.stringify(data)}</p>\r
      <button\r
        onClick={onClick}\r
        className="mt-2 px-3 py-1 bg-red-500 text-white rounded hover:bg-red-600"\r
      >\r
        点击我\r
      </button>\r
    </div>\r
  );\r
};\r
\r
export default NormalComponent;\r
`,N=()=>e.jsx(d,{title:"避免不必要的重新渲染",description:"学习如何使用 React.memo、useCallback 和 useMemo 来避免组件的不必要重新渲染，提升应用性能。",overview:[{title:"核心概念",items:["React.memo 高阶组件优化","useCallback 缓存函数引用","useMemo 缓存计算结果","浅比较机制原理"]},{title:"主要优势",items:["减少不必要的组件重新渲染","提升应用整体性能","降低 CPU 使用率","改善用户体验"]},{title:"适用场景",items:["渲染开销较大的组件","频繁更新的父组件中的子组件","列表项组件","复杂的计算或数据处理"]},{title:"注意事项",items:["不要过度使用 memo","注意引用类型的比较问题","合理使用 useCallback 和 useMemo","考虑自定义比较函数的性能开销"]}],examples:[{title:"基础重新渲染对比",component:e.jsx(p,{}),description:"对比普通组件和使用 memo 优化的组件在重新渲染方面的差异。",observationPoints:["点击'无关更新'按钮时，只有普通组件会重新渲染（渲染次数增加）","Memo 优化组件会跳过渲染（渲染次数不变）","点击'更新数据'按钮时，两个组件都会重新渲染","这展示了 React.memo 的性能优化效果"],keyPoints:["React.memo 会对 props 进行浅比较","只有 props 发生变化时才会重新渲染","可以显著减少不必要的渲染次数","useCallback 和 useMemo 配合使用效果更佳"],commonTraps:["在 JSX 中直接创建对象或数组","在 render 方法中创建新的函数","不正确使用内联样式对象","过度使用 memo 导致性能下降"],solutions:["使用 useMemo 缓存复杂对象","使用 useCallback 缓存函数","将对象定义在组件外部","合理评估是否需要使用 memo"],importantTips:["左侧组件每次都会重新渲染，因为每次都创建了新的对象引用","右侧组件使用了 useMemo 缓存对象，只有在依赖项变化时才会重新渲染","useCallback 确保了函数引用的稳定性","合理使用这些优化手段可以显著提升应用性能"],preCode:[{title:"NormalComponent",code:C},{title:"MemoizedComponent",code:x}],codeExample:{title:"避免不必要的重新渲染",code:b}}],tutorial:{concepts:["React.memo 是一个高阶组件，用于优化函数组件的重新渲染","useCallback 用于缓存函数引用，避免每次渲染时创建新函数","useMemo 用于缓存计算结果或对象引用","浅比较只检查对象的第一层属性是否相等","深比较会递归检查对象的所有层级，但性能开销较大"],steps:["识别需要优化的组件（渲染频繁、计算复杂）","使用 React.memo 包装组件","使用 useCallback 缓存传递给子组件的函数","使用 useMemo 缓存传递给子组件的对象或数组","测试优化效果，确保性能提升","考虑是否需要自定义比较函数"],tips:["不要过度使用 memo，简单组件可能不需要优化","确保 useCallback 和 useMemo 的依赖项正确","使用 React DevTools Profiler 分析性能","注意引用类型的比较问题","考虑组件的实际渲染开销"]},interview:{questions:[{question:"React.memo 的工作原理是什么？",answer:"React.memo 是一个高阶组件，它会对组件的 props 进行浅比较。如果 props 没有变化，组件会跳过重新渲染，直接返回上次渲染的结果。这可以避免不必要的重新渲染，提升性能。"},{question:"什么时候应该使用 React.memo？",answer:"当组件渲染开销较大、props 变化频率较低、或者父组件频繁更新但子组件 props 很少变化时，应该考虑使用 React.memo。但不要过度使用，因为比较本身也有开销。"},{question:"useCallback 和 useMemo 的区别是什么？",answer:"useCallback 缓存函数引用，返回的是函数本身；useMemo 缓存计算结果，返回的是计算的值。useCallback(fn, deps) 等价于 useMemo(() => fn, deps)。"},{question:"如何避免 React.memo 失效？",answer:"避免在 JSX 中直接创建对象或数组，使用 useCallback 缓存函数，使用 useMemo 缓存对象，将不变的对象定义在组件外部，或者使用自定义比较函数。"}],keyPoints:["React.memo 进行浅比较，只检查 props 的第一层","useCallback 和 useMemo 需要正确设置依赖项","过度优化可能适得其反，要根据实际情况使用","可以使用自定义比较函数进行深度比较","性能优化要基于实际测量结果"]},bestPractices:{dos:["在渲染开销大的组件上使用 React.memo","使用 useCallback 缓存传递给子组件的函数","使用 useMemo 缓存复杂计算或对象创建","使用 React DevTools Profiler 分析性能","根据实际测量结果进行优化","确保 useCallback 和 useMemo 的依赖项正确","避免在 JSX 中直接创建对象、数组或函数"],donts:["不要在所有组件上都使用 memo，避免过度优化","不要在 JSX 中直接创建对象或数组","不要忘记设置正确的依赖项","不要过度优化简单组件，优化需有实际收益","不要忽视比较函数的性能开销","不要盲目追求优化，优先保证代码可读性和可维护性"],patterns:["组件 + memo + useCallback/useMemo 的组合模式","列表项组件的 memo 优化模式","复杂表单组件的性能优化模式","自定义比较函数的使用模式","条件性 memo 的使用模式"]}});export{N as default};
