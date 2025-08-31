import{r as d,R as m,j as e}from"./index-DPG_OKoV.js";import{C as g}from"./ComponentTemplate-HXLvd6Xe.js";const p=()=>{const[s,t]=d.useState(0),[i,o]=d.useState(0),r=m.useRef(0);r.current+=1,m.useEffect(()=>{o(r.current)},[]);const u=()=>{o(r.current)};return e.jsxs("div",{className:"p-6 bg-white rounded-lg border border-gray-200",children:[e.jsxs("div",{className:"flex items-center justify-between mb-4",children:[e.jsx("h3",{className:"text-lg font-semibold text-gray-800",children:"基础计数器"}),e.jsxs("div",{className:"flex items-center gap-2",children:[e.jsxs("span",{className:"text-sm text-gray-500",children:["渲染次数: ",i]}),e.jsx("button",{onClick:u,className:"px-2 py-1 bg-blue-500 text-white text-xs rounded hover:bg-blue-600 transition-colors",children:"更新"})]})]}),e.jsxs("div",{className:"text-center space-y-4",children:[e.jsx("div",{className:"text-4xl font-bold text-blue-600",children:s}),e.jsxs("div",{className:"flex justify-center space-x-3",children:[e.jsx("button",{onClick:()=>t(s-1),className:"px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600 transition-colors",children:"-1"}),e.jsx("button",{onClick:()=>t(0),className:"px-4 py-2 bg-gray-500 text-white rounded hover:bg-gray-600 transition-colors",children:"重置"}),e.jsx("button",{onClick:()=>t(s+1),className:"px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600 transition-colors",children:"+1"})]})]})]})},h=`import React, { useState } from "react";\r
\r
// 基础计数器示例\r
const BasicCounterDemo: React.FC = () => {\r
  const [count, setCount] = useState(0);\r
  const [renderCount, setRenderCount] = useState(0);\r
  const renderCountRef = React.useRef(0);\r
\r
  // 每次渲染时增加渲染计数（使用 useRef 避免死循环）\r
  renderCountRef.current += 1;\r
\r
  // 使用 useEffect 更新显示的渲染计数（避免在渲染过程中调用 setState）\r
  React.useEffect(() => {\r
    setRenderCount(renderCountRef.current);\r
  }, []); // 只在组件挂载时执行一次，避免死循环\r
\r
  // 手动更新渲染次数的函数\r
  const updateRenderCount = () => {\r
    setRenderCount(renderCountRef.current);\r
  };\r
\r
  return (\r
    <div className="p-6 bg-white rounded-lg border border-gray-200">\r
      <div className="flex items-center justify-between mb-4">\r
        <h3 className="text-lg font-semibold text-gray-800">基础计数器</h3>\r
        <div className="flex items-center gap-2">\r
          <span className="text-sm text-gray-500">渲染次数: {renderCount}</span>\r
          <button\r
            onClick={updateRenderCount}\r
            className="px-2 py-1 bg-blue-500 text-white text-xs rounded hover:bg-blue-600 transition-colors"\r
          >\r
            更新\r
          </button>\r
        </div>\r
      </div>\r
\r
      <div className="text-center space-y-4">\r
        <div className="text-4xl font-bold text-blue-600">{count}</div>\r
\r
        <div className="flex justify-center space-x-3">\r
          <button\r
            onClick={() => setCount(count - 1)}\r
            className="px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600 transition-colors"\r
          >\r
            -1\r
          </button>\r
          <button\r
            onClick={() => setCount(0)}\r
            className="px-4 py-2 bg-gray-500 text-white rounded hover:bg-gray-600 transition-colors"\r
          >\r
            重置\r
          </button>\r
          <button\r
            onClick={() => setCount(count + 1)}\r
            className="px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600 transition-colors"\r
          >\r
            +1\r
          </button>\r
        </div>\r
      </div>\r
    </div>\r
  );\r
};\r
\r
export default BasicCounterDemo;\r
`,v=()=>{const[s,t]=d.useState(0),[i,o]=d.useState([]),r=n=>{const c=new Date().toLocaleTimeString();o(b=>[...b,`${c}: ${n}`])},u=()=>{t(s+1),r(`直接更新: ${s} -> ${s+1}`)},x=()=>{t(n=>{const c=n+1;return r(`函数式更新: ${n} -> ${c}`),c})},a=()=>{r("开始批量更新..."),t(n=>n+1),t(n=>n+1),t(n=>n+1),r("批量更新完成")},l=()=>{o([])};return e.jsxs("div",{className:"p-6 bg-white rounded-lg border border-gray-200",children:[e.jsxs("div",{className:"flex items-center justify-between mb-4",children:[e.jsx("h3",{className:"text-lg font-semibold text-gray-800",children:"函数式更新"}),e.jsx("div",{className:"text-2xl font-bold text-purple-600",children:s})]}),e.jsxs("div",{className:"flex flex-wrap gap-2 mb-4",children:[e.jsx("button",{onClick:u,className:"px-4 py-2 bg-orange-500 text-white rounded hover:bg-orange-600 transition-colors",children:"直接更新 +1"}),e.jsx("button",{onClick:x,className:"px-4 py-2 bg-purple-500 text-white rounded hover:bg-purple-600 transition-colors",children:"函数式更新 +1"}),e.jsx("button",{onClick:a,className:"px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition-colors",children:"批量更新 +3"}),e.jsx("button",{onClick:()=>t(0),className:"px-4 py-2 bg-gray-500 text-white rounded hover:bg-gray-600 transition-colors",children:"重置"}),e.jsx("button",{onClick:l,className:"px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600 transition-colors",children:"清空日志"})]}),e.jsxs("div",{className:"bg-gray-50 rounded-lg p-4 max-h-40 overflow-y-auto",children:[e.jsx("h4",{className:"font-semibold text-gray-800 mb-2",children:"更新日志:"}),i.length===0?e.jsx("p",{className:"text-gray-500 text-sm",children:"暂无日志"}):e.jsx("div",{className:"space-y-1",children:i.map((n,c)=>e.jsx("div",{className:"text-sm text-gray-700 font-mono",children:n},c))})]})]})},N=`import React, { useState } from "react";

// 函数式更新示例
const FunctionalUpdateDemo: React.FC = () => {
  const [count, setCount] = useState(0);
  const [logs, setLogs] = useState<string[]>([]);

  const addLog = (message: string) => {
    const timestamp = new Date().toLocaleTimeString();
    setLogs((prev) => [...prev, \`\${timestamp}: \${message}\`]);
  };

  // 直接更新（可能有问题）
  const incrementDirect = () => {
    setCount(count + 1);
    addLog(\`直接更新: \${count} -> \${count + 1}\`);
  };

  // 函数式更新（推荐）
  const incrementFunctional = () => {
    setCount((prev) => {
      const newValue = prev + 1;
      addLog(\`函数式更新: \${prev} -> \${newValue}\`);
      return newValue;
    });
  };

  // 批量更新测试
  const batchUpdate = () => {
    addLog("开始批量更新...");
    // 这些更新会被 React 批处理
    setCount((prev) => prev + 1);
    setCount((prev) => prev + 1);
    setCount((prev) => prev + 1);
    addLog("批量更新完成");
  };

  const clearLogs = () => {
    setLogs([]);
  };

  return (
    <div className="p-6 bg-white rounded-lg border border-gray-200">
      <div className="flex items-center justify-between mb-4">
        <h3 className="text-lg font-semibold text-gray-800">函数式更新</h3>
        <div className="text-2xl font-bold text-purple-600">{count}</div>
      </div>

      <div className="flex flex-wrap gap-2 mb-4">
        <button
          onClick={incrementDirect}
          className="px-4 py-2 bg-orange-500 text-white rounded hover:bg-orange-600 transition-colors"
        >
          直接更新 +1
        </button>
        <button
          onClick={incrementFunctional}
          className="px-4 py-2 bg-purple-500 text-white rounded hover:bg-purple-600 transition-colors"
        >
          函数式更新 +1
        </button>
        <button
          onClick={batchUpdate}
          className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition-colors"
        >
          批量更新 +3
        </button>
        <button
          onClick={() => setCount(0)}
          className="px-4 py-2 bg-gray-500 text-white rounded hover:bg-gray-600 transition-colors"
        >
          重置
        </button>
        <button
          onClick={clearLogs}
          className="px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600 transition-colors"
        >
          清空日志
        </button>
      </div>

      <div className="bg-gray-50 rounded-lg p-4 max-h-40 overflow-y-auto">
        <h4 className="font-semibold text-gray-800 mb-2">更新日志:</h4>
        {logs.length === 0 ? (
          <p className="text-gray-500 text-sm">暂无日志</p>
        ) : (
          <div className="space-y-1">
            {logs.map((log, index) => (
              <div key={index} className="text-sm text-gray-700 font-mono">
                {log}
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default FunctionalUpdateDemo;
`,y=()=>{const[s,t]=d.useState(()=>{console.log("🔥 执行昂贵的初始化计算...");let a=0;for(let l=0;l<1e6;l++)a+=Math.random();return Math.floor(a)}),[i,o]=d.useState(Math.floor(Math.random()*1e3)),r=m.useRef(0);r.current+=1;const u=()=>{console.log("🔄 重新生成普通值"),o(Math.floor(Math.random()*1e3))},x=()=>{console.log("🔄 重新生成昂贵值"),t(()=>{console.log("🔥 重新执行昂贵计算...");let a=0;for(let l=0;l<1e6;l++)a+=Math.random();return Math.floor(a)})};return e.jsxs("div",{className:"p-6 bg-white rounded-lg border border-gray-200",children:[e.jsxs("div",{className:"flex items-center justify-between mb-4",children:[e.jsx("h3",{className:"text-lg font-semibold text-gray-800",children:"惰性初始化对比"}),e.jsxs("span",{className:"text-sm text-gray-500",children:["渲染次数: ",r.current]})]}),e.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-4",children:[e.jsxs("div",{className:"p-4 bg-blue-50 rounded-lg border border-blue-200",children:[e.jsx("h4",{className:"font-semibold text-blue-800 mb-2",children:"惰性初始化值"}),e.jsx("div",{className:"text-2xl font-bold text-blue-600 mb-3",children:s}),e.jsx("button",{onClick:x,className:"px-3 py-1 bg-blue-500 text-white rounded text-sm hover:bg-blue-600 transition-colors",children:"重新计算"}),e.jsx("p",{className:"text-xs text-blue-600 mt-2",children:"初始化函数只在首次渲染时执行"})]}),e.jsxs("div",{className:"p-4 bg-green-50 rounded-lg border border-green-200",children:[e.jsx("h4",{className:"font-semibold text-green-800 mb-2",children:"普通初始化值"}),e.jsx("div",{className:"text-2xl font-bold text-green-600 mb-3",children:i}),e.jsx("button",{onClick:u,className:"px-3 py-1 bg-green-500 text-white rounded text-sm hover:bg-green-600 transition-colors",children:"重新生成"}),e.jsx("p",{className:"text-xs text-green-600 mt-2",children:"每次渲染都会重新计算初始值"})]})]}),e.jsx("div",{className:"mt-4 p-3 bg-yellow-50 rounded border border-yellow-200",children:e.jsx("p",{className:"text-sm text-yellow-800",children:"💡 打开浏览器控制台查看初始化函数的执行情况"})})]})},f=`import React, { useState } from "react";\r
\r
// 惰性初始化示例\r
const LazyInitializationDemo: React.FC = () => {\r
  // 惰性初始化：只在首次渲染时执行\r
  const [expensiveValue, setExpensiveValue] = useState(() => {\r
    console.log("🔥 执行昂贵的初始化计算...");\r
    // 模拟昂贵的计算\r
    let result = 0;\r
    for (let i = 0; i < 1000000; i++) {\r
      result += Math.random();\r
    }\r
    return Math.floor(result);\r
  });\r
\r
  const [normalValue, setNormalValue] = useState(\r
    Math.floor(Math.random() * 1000)\r
  );\r
\r
  // 使用 ref 来追踪渲染次数，避免死循环\r
  const renderCountRef = React.useRef(0);\r
  renderCountRef.current += 1;\r
\r
  const regenerateNormal = () => {\r
    console.log("🔄 重新生成普通值");\r
    setNormalValue(Math.floor(Math.random() * 1000));\r
  };\r
\r
  const regenerateExpensive = () => {\r
    console.log("🔄 重新生成昂贵值");\r
    setExpensiveValue(() => {\r
      console.log("🔥 重新执行昂贵计算...");\r
      let result = 0;\r
      for (let i = 0; i < 1000000; i++) {\r
        result += Math.random();\r
      }\r
      return Math.floor(result);\r
    });\r
  };\r
\r
  return (\r
    <div className="p-6 bg-white rounded-lg border border-gray-200">\r
      <div className="flex items-center justify-between mb-4">\r
        <h3 className="text-lg font-semibold text-gray-800">惰性初始化对比</h3>\r
        <span className="text-sm text-gray-500">\r
          渲染次数: {renderCountRef.current}\r
        </span>\r
      </div>\r
\r
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">\r
        <div className="p-4 bg-blue-50 rounded-lg border border-blue-200">\r
          <h4 className="font-semibold text-blue-800 mb-2">惰性初始化值</h4>\r
          <div className="text-2xl font-bold text-blue-600 mb-3">\r
            {expensiveValue}\r
          </div>\r
          <button\r
            onClick={regenerateExpensive}\r
            className="px-3 py-1 bg-blue-500 text-white rounded text-sm hover:bg-blue-600 transition-colors"\r
          >\r
            重新计算\r
          </button>\r
          <p className="text-xs text-blue-600 mt-2">\r
            初始化函数只在首次渲染时执行\r
          </p>\r
        </div>\r
\r
        <div className="p-4 bg-green-50 rounded-lg border border-green-200">\r
          <h4 className="font-semibold text-green-800 mb-2">普通初始化值</h4>\r
          <div className="text-2xl font-bold text-green-600 mb-3">\r
            {normalValue}\r
          </div>\r
          <button\r
            onClick={regenerateNormal}\r
            className="px-3 py-1 bg-green-500 text-white rounded text-sm hover:bg-green-600 transition-colors"\r
          >\r
            重新生成\r
          </button>\r
          <p className="text-xs text-green-600 mt-2">\r
            每次渲染都会重新计算初始值\r
          </p>\r
        </div>\r
      </div>\r
\r
      <div className="mt-4 p-3 bg-yellow-50 rounded border border-yellow-200">\r
        <p className="text-sm text-yellow-800">\r
          💡 打开浏览器控制台查看初始化函数的执行情况\r
        </p>\r
      </div>\r
    </div>\r
  );\r
};\r
\r
export default LazyInitializationDemo;\r
`,C=()=>e.jsx(g,{title:"useState",description:"React 最基础的状态管理 Hook，用于在函数组件中添加状态。掌握基本用法、惰性初始化和函数式更新等核心概念。",overview:e.jsx("div",{className:"space-y-4",children:e.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-6",children:[e.jsxs("div",{className:"bg-blue-50 p-4 rounded-lg border border-blue-200",children:[e.jsx("h3",{className:"font-semibold text-blue-800 mb-2",children:"🎯 核心概念"}),e.jsxs("ul",{className:"text-sm text-blue-700 space-y-1",children:[e.jsx("li",{children:"• 状态声明和更新"}),e.jsx("li",{children:"• 惰性初始化优化"}),e.jsx("li",{children:"• 函数式更新模式"}),e.jsx("li",{children:"• 状态批处理机制"})]})]}),e.jsxs("div",{className:"bg-green-50 p-4 rounded-lg border border-green-200",children:[e.jsx("h3",{className:"font-semibold text-green-800 mb-2",children:"✨ 主要优势"}),e.jsxs("ul",{className:"text-sm text-green-700 space-y-1",children:[e.jsx("li",{children:"• 简单直观的 API"}),e.jsx("li",{children:"• 自动触发重新渲染"}),e.jsx("li",{children:"• 支持任意数据类型"}),e.jsx("li",{children:"• 性能优化选项"})]})]}),e.jsxs("div",{className:"bg-yellow-50 p-4 rounded-lg border border-yellow-200",children:[e.jsx("h3",{className:"font-semibold text-yellow-800 mb-2",children:"🎪 适用场景"}),e.jsxs("ul",{className:"text-sm text-yellow-700 space-y-1",children:[e.jsx("li",{children:"• 组件内部状态管理"}),e.jsx("li",{children:"• 表单输入控制"}),e.jsx("li",{children:"• UI 交互状态"}),e.jsx("li",{children:"• 简单数据缓存"})]})]}),e.jsxs("div",{className:"bg-red-50 p-4 rounded-lg border border-red-200",children:[e.jsx("h3",{className:"font-semibold text-red-800 mb-2",children:"⚠️ 注意事项"}),e.jsxs("ul",{className:"text-sm text-red-700 space-y-1",children:[e.jsx("li",{children:"• 状态更新是异步的"}),e.jsx("li",{children:"• 避免直接修改状态"}),e.jsx("li",{children:"• 注意闭包陷阱"}),e.jsx("li",{children:"• 合理使用惰性初始化"})]})]})]})}),examples:[{title:"基础计数器",component:e.jsx(p,{}),description:"演示 useState 的基本用法，包括状态声明、读取和更新",observationPoints:["点击按钮观察计数值的变化","注意每次状态更新都会触发组件重新渲染","观察右上角的渲染次数变化"],keyPoints:["useState 返回一个数组，包含当前状态值和更新函数","状态更新会触发组件重新渲染","可以传入任意类型的初始值","更新函数的命名通常以 'set' 开头"],commonTraps:["直接修改状态值而不使用 setter 函数","在同一个事件处理函数中多次调用 setter","忘记状态更新是异步的"],solutions:["始终使用 setter 函数更新状态","使用函数式更新处理连续更新","理解 React 的批处理机制"],codeExample:{code:h,highlights:[5,10,15],title:"基础 useState 计数器实现"}},{title:"惰性初始化",component:e.jsx(y,{}),description:"演示惰性初始化的性能优化效果，避免每次渲染都执行昂贵的计算",observationPoints:["打开浏览器控制台，观察初始化函数的执行时机","点击重新计算按钮，对比两种初始化方式的差异","注意惰性初始化只在组件首次渲染时执行一次"],keyPoints:["惰性初始化使用函数作为 useState 的参数","初始化函数只在组件首次渲染时执行","适用于初始值计算成本较高的场景","可以避免不必要的性能开销"],commonTraps:["误用惰性初始化，传入函数调用而不是函数本身","在不需要的场景下使用惰性初始化","初始化函数中包含副作用"],solutions:["传入函数引用而不是函数调用结果","只在初始值计算昂贵时使用惰性初始化","保持初始化函数的纯净性"],codeExample:{code:f,highlights:[7,13,18],title:"惰性初始化 useState 实现"}},{title:"函数式更新",component:e.jsx(v,{}),description:"演示函数式更新的优势，解决闭包陷阱和批量更新问题",observationPoints:["对比直接更新和函数式更新的行为差异","观察批量更新时的状态变化","查看更新日志了解每次更新的详细信息"],keyPoints:["函数式更新接收前一个状态作为参数","可以避免闭包陷阱问题","适用于基于前一个状态计算新状态的场景","React 会自动批处理多个状态更新"],commonTraps:["在异步操作中使用直接更新","连续多次调用 setter 时使用直接更新","不理解 React 的批处理机制"],solutions:["在需要基于前一个状态更新时使用函数式更新","理解并利用 React 的自动批处理","在异步场景中优先使用函数式更新"],codeExample:{code:N,highlights:[8,14,20],title:"函数式更新 useState 实现"}}],tutorial:{concepts:["useState 的基本语法和返回值结构","状态更新的异步特性和批处理机制","惰性初始化的使用场景和性能优化","函数式更新解决闭包陷阱问题","状态不可变性原则和正确的更新方式"],steps:["从 React 中导入 useState Hook","在组件中调用 useState 并传入初始值","解构返回的数组获取状态值和更新函数","在事件处理函数中调用更新函数","根据需要使用惰性初始化或函数式更新","确保遵循状态不可变性原则"],tips:["使用 TypeScript 为状态定义明确的类型","更新函数的命名遵循 'set + 状态名' 的约定","对于复杂对象状态，考虑使用 useReducer","利用 React DevTools 调试状态变化","在性能敏感场景下合理使用惰性初始化"]},interview:{questions:[{question:"useState 和类组件的 this.state 有什么区别？",answer:"useState 每个状态都是独立的变量，而 this.state 是一个对象。useState 的更新函数会完全替换状态值，而 setState 会合并状态对象。useState 支持惰性初始化和函数式更新，API 更简洁。"},{question:"什么时候应该使用惰性初始化？",answer:"当初始状态的计算成本较高时，比如复杂的数学运算、从 localStorage 读取数据、或者需要调用函数来生成初始值。惰性初始化确保这些昂贵的操作只在组件首次渲染时执行一次。"},{question:"为什么推荐使用函数式更新？",answer:"函数式更新可以避免闭包陷阱，确保总是基于最新的状态值进行更新。特别是在异步操作、事件处理函数或者需要连续更新状态的场景中，函数式更新更加可靠。"},{question:"React 如何处理多个 useState 更新？",answer:"React 会自动批处理在同一个事件处理函数中的多个状态更新，这意味着多个 setState 调用只会触发一次重新渲染。在 React 18 中，这种批处理扩展到了 Promise、setTimeout 等异步操作中。"}],keyPoints:["useState 是最基础的状态管理 Hook","状态更新是异步的，会触发重新渲染","惰性初始化可以优化性能","函数式更新可以避免闭包陷阱","React 会自动批处理状态更新"]},bestPractices:{dos:["使用解构赋值获取状态值和更新函数","遵循状态不可变性原则","在需要时使用惰性初始化优化性能","使用函数式更新避免闭包问题","为状态变量选择描述性的名称","使用 TypeScript 定义状态类型"],donts:["不要直接修改状态值","不要在渲染过程中调用状态更新函数","不要过度使用惰性初始化","不要在 useState 的初始化函数中包含副作用","不要忽视状态更新的异步特性"],patterns:["状态提升：将共享状态提升到父组件","状态分割：将复杂状态拆分为多个简单状态","状态派生：基于现有状态计算派生状态","状态重置：通过 key 属性重置组件状态"]}});export{C as default};
