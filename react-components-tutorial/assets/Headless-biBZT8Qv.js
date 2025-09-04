import{r as t,j as e}from"./index-H7t66yxh.js";import{C as d}from"./ComponentTemplate-bNJaV0ol.js";const g=({initialValue:n=0,step:o=1}={})=>{const[s,r]=t.useState(n),a=t.useCallback(()=>{r(i=>i+o)},[o]),l=t.useCallback(()=>{r(i=>i-o)},[o]),c=t.useCallback(()=>{r(n)},[n]);return{count:s,increment:a,decrement:l,reset:c}},p=(n=!1)=>{const[o,s]=t.useState(n),r=t.useCallback(()=>{s(c=>!c)},[]),a=t.useCallback(()=>{s(!0)},[]),l=t.useCallback(()=>{s(!1)},[]);return{isOn:o,toggle:r,turnOn:a,turnOff:l}},m=()=>{const n=g({initialValue:0,step:1});return e.jsxs("div",{className:"space-y-4",children:[e.jsxs("div",{className:"text-center",children:[e.jsx("div",{className:"text-4xl font-bold text-blue-600 mb-4",children:n.count}),e.jsxs("div",{className:"space-x-2",children:[e.jsx("button",{onClick:n.decrement,className:"px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600",children:"-1"}),e.jsx("button",{onClick:n.increment,className:"px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600",children:"+1"}),e.jsx("button",{onClick:n.reset,className:"px-4 py-2 bg-gray-500 text-white rounded hover:bg-gray-600",children:"重置"})]})]}),e.jsxs("div",{className:"border-t pt-4",children:[e.jsx("h4",{className:"text-lg font-semibold mb-2",children:"相同逻辑，不同样式："}),e.jsxs("div",{className:"flex items-center justify-center space-x-4 p-4 bg-gray-50 rounded",children:[e.jsx("button",{onClick:n.decrement,className:"w-8 h-8 rounded-full bg-red-100 text-red-600 hover:bg-red-200",children:"−"}),e.jsx("span",{className:"text-2xl font-mono bg-white px-3 py-1 rounded border",children:n.count}),e.jsx("button",{onClick:n.increment,className:"w-8 h-8 rounded-full bg-green-100 text-green-600 hover:bg-green-200",children:"+"})]})]})]})},b=()=>{const n=p(!1);return e.jsxs("div",{className:"space-y-4",children:[e.jsxs("div",{className:"text-center",children:[e.jsxs("div",{className:"mb-4",children:[e.jsx("span",{className:"text-lg",children:"状态: "}),e.jsx("span",{className:`font-bold ${n.isOn?"text-green-600":"text-red-600"}`,children:n.isOn?"开启":"关闭"})]}),e.jsxs("div",{className:"space-x-2",children:[e.jsx("button",{onClick:n.toggle,className:`px-4 py-2 rounded ${n.isOn?"bg-green-500 hover:bg-green-600 text-white":"bg-gray-500 hover:bg-gray-600 text-white"}`,children:"切换"}),e.jsx("button",{onClick:n.turnOn,className:"px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600",children:"开启"}),e.jsx("button",{onClick:n.turnOff,className:"px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600",children:"关闭"})]})]}),e.jsxs("div",{className:"border-t pt-4",children:[e.jsx("h4",{className:"text-lg font-semibold mb-2",children:"开关样式："}),e.jsxs("div",{className:"flex items-center justify-center space-x-4",children:[e.jsx("span",{children:"关闭"}),e.jsx("button",{onClick:n.toggle,className:`relative inline-flex h-6 w-11 items-center rounded-full transition-colors ${n.isOn?"bg-green-500":"bg-gray-300"}`,children:e.jsx("span",{className:`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${n.isOn?"translate-x-6":"translate-x-1"}`})}),e.jsx("span",{children:"开启"})]})]})]})},u=`import { useCallback, useState } from "react";\r
\r
// 计数器Hook的类型定义\r
export interface UseCounterProps {\r
  initialValue?: number;\r
  step?: number;\r
}\r
\r
export interface UseCounterReturn {\r
  count: number;\r
  increment: () => void;\r
  decrement: () => void;\r
  reset: () => void;\r
}\r
\r
// 简单的计数器Hook\r
export const useCounter = ({\r
  initialValue = 0,\r
  step = 1,\r
}: UseCounterProps = {}): UseCounterReturn => {\r
  const [count, setCount] = useState(initialValue);\r
\r
  const increment = useCallback(() => {\r
    setCount((prev) => prev + step);\r
  }, [step]);\r
\r
  const decrement = useCallback(() => {\r
    setCount((prev) => prev - step);\r
  }, [step]);\r
\r
  const reset = useCallback(() => {\r
    setCount(initialValue);\r
  }, [initialValue]);\r
\r
  return {\r
    count,\r
    increment,\r
    decrement,\r
    reset,\r
  };\r
};\r
\r
// 切换Hook的类型定义\r
export interface UseToggleReturn {\r
  isOn: boolean;\r
  toggle: () => void;\r
  turnOn: () => void;\r
  turnOff: () => void;\r
}\r
\r
// 简单的切换Hook\r
export const useToggle = (initialValue = false): UseToggleReturn => {\r
  const [isOn, setIsOn] = useState(initialValue);\r
\r
  const toggle = useCallback(() => {\r
    setIsOn((prev) => !prev);\r
  }, []);\r
\r
  const turnOn = useCallback(() => {\r
    setIsOn(true);\r
  }, []);\r
\r
  const turnOff = useCallback(() => {\r
    setIsOn(false);\r
  }, []);\r
\r
  return {\r
    isOn,\r
    toggle,\r
    turnOn,\r
    turnOff,\r
  };\r
};`,x=`import React from "react";
import { useCounter } from "./hooks";

// 计数器示例组件
export const CounterExample: React.FC = () => {
  const counter = useCounter({ initialValue: 0, step: 1 });

  return (
    <div className="space-y-4">
      <div className="text-center">
        <div className="text-4xl font-bold text-blue-600 mb-4">
          {counter.count}
        </div>
        <div className="space-x-2">
          <button
            onClick={counter.decrement}
            className="px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600"
          >
            -1
          </button>
          <button
            onClick={counter.increment}
            className="px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600"
          >
            +1
          </button>
          <button
            onClick={counter.reset}
            className="px-4 py-2 bg-gray-500 text-white rounded hover:bg-gray-600"
          >
            重置
          </button>
        </div>
      </div>

      {/* 同一个Hook，不同的UI */}
      <div className="border-t pt-4">
        <h4 className="text-lg font-semibold mb-2">相同逻辑，不同样式：</h4>
        <div className="flex items-center justify-center space-x-4 p-4 bg-gray-50 rounded">
          <button
            onClick={counter.decrement}
            className="w-8 h-8 rounded-full bg-red-100 text-red-600 hover:bg-red-200"
          >
            −
          </button>
          <span className="text-2xl font-mono bg-white px-3 py-1 rounded border">
            {counter.count}
          </span>
          <button
            onClick={counter.increment}
            className="w-8 h-8 rounded-full bg-green-100 text-green-600 hover:bg-green-200"
          >
            +
          </button>
        </div>
      </div>
    </div>
  );
};`,k=`import React from "react";
import { useToggle } from "./hooks";

// 切换开关示例组件
export const ToggleExample: React.FC = () => {
  const toggle = useToggle(false);

  return (
    <div className="space-y-4">
      <div className="text-center">
        <div className="mb-4">
          <span className="text-lg">状态: </span>
          <span
            className={\`font-bold \${
              toggle.isOn ? "text-green-600" : "text-red-600"
            }\`}
          >
            {toggle.isOn ? "开启" : "关闭"}
          </span>
        </div>

        <div className="space-x-2">
          <button
            onClick={toggle.toggle}
            className={\`px-4 py-2 rounded \${
              toggle.isOn
                ? "bg-green-500 hover:bg-green-600 text-white"
                : "bg-gray-500 hover:bg-gray-600 text-white"
            }\`}
          >
            切换
          </button>
          <button
            onClick={toggle.turnOn}
            className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
          >
            开启
          </button>
          <button
            onClick={toggle.turnOff}
            className="px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600"
          >
            关闭
          </button>
        </div>
      </div>

      {/* 同一个Hook，开关样式 */}
      <div className="border-t pt-4">
        <h4 className="text-lg font-semibold mb-2">开关样式：</h4>
        <div className="flex items-center justify-center space-x-4">
          <span>关闭</span>
          <button
            onClick={toggle.toggle}
            className={\`relative inline-flex h-6 w-11 items-center rounded-full transition-colors \${
              toggle.isOn ? "bg-green-500" : "bg-gray-300"
            }\`}
          >
            <span
              className={\`inline-block h-4 w-4 transform rounded-full bg-white transition-transform \${
                toggle.isOn ? "translate-x-6" : "translate-x-1"
              }\`}
            />
          </button>
          <span>开启</span>
        </div>
      </div>
    </div>
  );
};`,C=()=>e.jsx(d,{title:"无头组件 (Headless Components)",description:"无头组件是一种设计模式，将组件的逻辑和状态管理与UI渲染分离。它们提供功能和行为，但不包含任何UI元素，让开发者可以完全控制组件的外观。",overview:[{title:"核心概念",items:["无头组件通过自定义Hook提供组件逻辑，而将UI渲染完全交给使用者决定","这种模式实现了逻辑与视图的完全分离，提高了代码的复用性和灵活性","Hook只返回状态和方法，不包含任何UI元素","使用者可以根据需求自由设计UI样式和交互方式"]},{title:"主要优势",items:["逻辑与UI完全分离，提高代码复用性","开发者拥有完全的样式控制权","更容易进行单元测试","支持多种UI实现方式"]},{title:"适用场景",items:["设计系统中的基础组件","需要多种样式变体的组件","复杂的交互逻辑组件","第三方组件库的核心组件"]},{title:"注意事项",items:["需要合理设计Hook的API，确保易用性","要考虑性能优化，使用useCallback等优化手段","需要提供完善的TypeScript类型定义","要保持Hook的单一职责原则"]}],examples:[{title:"计数器Hook",component:e.jsx(m,{}),description:"展示如何使用useCounter Hook创建不同样式的计数器组件，同一个逻辑可以应用到多种UI实现。",observationPoints:["观察两个计数器使用相同的Hook但呈现不同的UI样式","注意计数器的状态管理和方法调用","查看如何通过配置参数控制计数器行为"],keyPoints:["useCounter Hook封装了所有计数逻辑","UI组件只负责渲染和用户交互","支持初始值和步长配置","提供增加、减少、重置等方法"],commonTraps:["在Hook中包含UI相关代码","忘记使用useCallback优化方法","Hook承担过多职责","缺少TypeScript类型定义"],solutions:["保持Hook纯粹，只处理逻辑和状态","使用useCallback优化所有方法","遵循单一职责原则","提供完整的TypeScript接口定义"],importantTips:["无头组件适合需要高度定制化的场景","Hook的API设计要简洁易用","考虑提供合理的默认值","注意性能优化和内存泄漏"],preCode:[{title:"Hooks",code:u}],codeExample:{title:"计数器示例",code:x}},{title:"切换开关Hook",component:e.jsx(b,{}),description:"展示如何使用useToggle Hook管理布尔状态，可以创建各种开关、切换按钮等UI组件。",observationPoints:["观察切换状态的不同UI表现形式","注意状态变化的即时反馈","查看如何用同一个Hook实现不同的交互方式"],keyPoints:["useToggle Hook管理布尔状态","提供切换、开启、关闭等方法","支持初始状态配置","可以实现各种开关UI组件"],commonTraps:["状态更新逻辑过于复杂","缺少状态变化的回调处理","忘记优化切换方法","没有考虑受控和非受控模式"],solutions:["保持状态逻辑简单明了","提供状态变化的回调选项","使用useCallback优化所有方法","支持受控和非受控两种模式"],importantTips:["切换Hook适合各种开关场景","可以扩展支持多状态切换","考虑添加状态变化动画","注意无障碍访问性支持"],preCode:[{title:"Hooks",code:u}],codeExample:{title:"切换开关示例",code:k}}],tutorial:{concepts:["无头组件将逻辑与UI完全分离，通过自定义Hook提供功能","Hook只返回状态和方法，不包含任何UI元素","使用者可以根据需求自由设计UI样式和交互方式","通过TypeScript接口确保类型安全和良好的开发体验"],steps:["定义Hook的输入参数和返回值的TypeScript接口","使用useState管理组件的内部状态","使用useCallback优化方法，避免不必要的重新渲染","返回状态和方法，让使用者自由组合UI","在组件中调用Hook，获取状态和方法进行UI渲染"],tips:["使用useCallback优化性能，避免不必要的重新渲染","提供合理的默认值，让Hook在简单场景下也能正常工作","使用TypeScript定义清晰的接口，提供良好的开发体验","保持Hook的单一职责，每个Hook只负责一个特定功能","考虑提供配置选项，让Hook更加灵活和可定制"]},interview:{questions:[{question:"什么是无头组件？它解决了什么问题？",answer:"无头组件是一种设计模式，将组件的逻辑和UI完全分离。它解决了传统组件样式耦合度高、复用性差的问题，让开发者可以在不同的UI实现中复用相同的逻辑。"},{question:"无头组件通常通过什么方式实现？",answer:"主要通过自定义Hook实现。Hook方式简洁现代，符合React函数组件的趋势，能够很好地封装状态逻辑并提供清晰的API。"},{question:"无头组件有什么优势？",answer:"主要优势包括：逻辑与UI完全分离提高复用性、开发者拥有完全的样式控制权、更容易进行单元测试、支持多种UI实现方式。"},{question:"什么时候应该使用无头组件？",answer:"适合在构建设计系统、需要多种样式变体的组件、复杂交互逻辑的组件，以及第三方组件库时使用。特别适合需要高度定制化的场景。"}],keyPoints:["无头组件实现逻辑与UI的完全分离","通过自定义Hook提供状态和方法","提高代码复用性和可维护性","给予开发者完全的样式控制权","更容易进行单元测试和逻辑验证"]},bestPractices:{dos:["使用TypeScript定义清晰的接口，提供良好的开发体验","使用useCallback优化性能，避免不必要的重新渲染","提供合理的默认值，让Hook在简单场景下也能正常工作","保持Hook的单一职责，每个Hook只负责一个特定功能","考虑提供配置选项，让Hook更加灵活和可定制"],donts:["不要在Hook中包含任何UI相关的代码或JSX","不要让Hook承担过多职责，保持功能单一","不要忘记使用useCallback优化方法","不要忽略TypeScript类型定义","不要在Hook中直接操作DOM，应该通过ref传递给使用者"],patterns:["自定义Hook模式：封装状态逻辑，返回状态和方法","配置对象模式：通过参数对象提供灵活的配置选项","回调优化模式：使用useCallback优化方法性能","类型安全模式：使用TypeScript确保接口的类型安全","默认值模式：为参数提供合理的默认值"]}});export{C as default};
