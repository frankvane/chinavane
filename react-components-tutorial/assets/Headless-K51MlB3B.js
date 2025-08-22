import{j as e,r as s}from"./index-B_BA6J2H.js";import{C as u}from"./ComponentTemplate-CRmS-rAK.js";const d=({initialValue:t=0,step:n=1}={})=>{const[o,l]=s.useState(t),r=s.useCallback(()=>{l(a=>a+n)},[n]),i=s.useCallback(()=>{l(a=>a-n)},[n]),c=s.useCallback(()=>{l(t)},[t]);return{count:o,increment:r,decrement:i,reset:c}},x=(t=!1)=>{const[n,o]=s.useState(t),l=s.useCallback(()=>{o(c=>!c)},[]),r=s.useCallback(()=>{o(!0)},[]),i=s.useCallback(()=>{o(!1)},[]);return{isOn:n,toggle:l,turnOn:r,turnOff:i}},g=()=>{const t=d({initialValue:0,step:1});return e.jsxs("div",{className:"space-y-4",children:[e.jsxs("div",{className:"text-center",children:[e.jsx("div",{className:"text-4xl font-bold text-blue-600 mb-4",children:t.count}),e.jsxs("div",{className:"space-x-2",children:[e.jsx("button",{onClick:t.decrement,className:"px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600",children:"-1"}),e.jsx("button",{onClick:t.increment,className:"px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600",children:"+1"}),e.jsx("button",{onClick:t.reset,className:"px-4 py-2 bg-gray-500 text-white rounded hover:bg-gray-600",children:"重置"})]})]}),e.jsxs("div",{className:"border-t pt-4",children:[e.jsx("h4",{className:"text-lg font-semibold mb-2",children:"相同逻辑，不同样式："}),e.jsxs("div",{className:"flex items-center justify-center space-x-4 p-4 bg-gray-50 rounded",children:[e.jsx("button",{onClick:t.decrement,className:"w-8 h-8 rounded-full bg-red-100 text-red-600 hover:bg-red-200",children:"−"}),e.jsx("span",{className:"text-2xl font-mono bg-white px-3 py-1 rounded border",children:t.count}),e.jsx("button",{onClick:t.increment,className:"w-8 h-8 rounded-full bg-green-100 text-green-600 hover:bg-green-200",children:"+"})]})]})]})},b=()=>{const t=x(!1);return e.jsxs("div",{className:"space-y-4",children:[e.jsxs("div",{className:"text-center",children:[e.jsxs("div",{className:"mb-4",children:[e.jsx("span",{className:"text-lg",children:"状态: "}),e.jsx("span",{className:`font-bold ${t.isOn?"text-green-600":"text-red-600"}`,children:t.isOn?"开启":"关闭"})]}),e.jsxs("div",{className:"space-x-2",children:[e.jsx("button",{onClick:t.toggle,className:`px-4 py-2 rounded ${t.isOn?"bg-green-500 hover:bg-green-600 text-white":"bg-gray-500 hover:bg-gray-600 text-white"}`,children:"切换"}),e.jsx("button",{onClick:t.turnOn,className:"px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600",children:"开启"}),e.jsx("button",{onClick:t.turnOff,className:"px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600",children:"关闭"})]})]}),e.jsxs("div",{className:"border-t pt-4",children:[e.jsx("h4",{className:"text-lg font-semibold mb-2",children:"开关样式："}),e.jsxs("div",{className:"flex items-center justify-center space-x-4",children:[e.jsx("span",{children:"关闭"}),e.jsx("button",{onClick:t.toggle,className:`relative inline-flex h-6 w-11 items-center rounded-full transition-colors ${t.isOn?"bg-green-500":"bg-gray-300"}`,children:e.jsx("span",{className:`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${t.isOn?"translate-x-6":"translate-x-1"}`})}),e.jsx("span",{children:"开启"})]})]})]})},h=()=>e.jsx(u,{title:"无头组件 (Headless Components)",description:"无头组件是一种设计模式，将组件的逻辑和状态管理与UI渲染分离。它们提供功能和行为，但不包含任何UI元素，让开发者可以完全控制组件的外观。",overview:e.jsxs("div",{className:"space-y-4",children:[e.jsxs("div",{children:[e.jsx("h3",{className:"text-lg font-semibold mb-2",children:"核心概念"}),e.jsx("p",{className:"text-gray-700",children:"无头组件通过自定义Hook提供组件逻辑，而将UI渲染完全交给使用者决定。 这种模式实现了逻辑与视图的完全分离，提高了代码的复用性和灵活性。"})]}),e.jsxs("div",{children:[e.jsx("h3",{className:"text-lg font-semibold mb-2",children:"主要优势"}),e.jsxs("ul",{className:"list-disc list-inside text-gray-700 space-y-1",children:[e.jsx("li",{children:"逻辑与UI完全分离，提高代码复用性"}),e.jsx("li",{children:"开发者拥有完全的样式控制权"}),e.jsx("li",{children:"更容易进行单元测试"}),e.jsx("li",{children:"支持多种UI实现方式"})]})]}),e.jsxs("div",{children:[e.jsx("h3",{className:"text-lg font-semibold mb-2",children:"适用场景"}),e.jsxs("ul",{className:"list-disc list-inside text-gray-700 space-y-1",children:[e.jsx("li",{children:"设计系统中的基础组件"}),e.jsx("li",{children:"需要多种样式变体的组件"}),e.jsx("li",{children:"复杂的交互逻辑组件"}),e.jsx("li",{children:"第三方组件库的核心组件"})]})]})]}),examples:[{title:"计数器Hook",component:e.jsx(g,{}),description:"展示如何使用useCounter Hook创建不同样式的计数器组件，同一个逻辑可以应用到多种UI实现。",observationPoints:["观察两个计数器使用相同的Hook但呈现不同的UI样式","注意计数器的状态管理和方法调用","查看如何通过配置参数控制计数器行为"],keyPoints:["useCounter Hook封装了所有计数逻辑","UI组件只负责渲染和用户交互","支持初始值和步长配置","提供增加、减少、重置等方法"],codeExample:{code:`// 无头计数器Hook实现
interface UseCounterProps {
  initialValue?: number;
  step?: number;
}

interface UseCounterReturn {
  count: number;
  increment: () => void;
  decrement: () => void;
  reset: () => void;
}

const useCounter = ({ initialValue = 0, step = 1 }: UseCounterProps = {}): UseCounterReturn => {
  const [count, setCount] = useState(initialValue);
  
  const increment = useCallback(() => {
    setCount(prev => prev + step);
  }, [step]);
  
  const decrement = useCallback(() => {
    setCount(prev => prev - step);
  }, [step]);
  
  const reset = useCallback(() => {
    setCount(initialValue);
  }, [initialValue]);
  
  return {
    count,
    increment,
    decrement,
    reset
  };
};

// 使用示例
const CounterComponent = () => {
  const counter = useCounter({ initialValue: 0, step: 1 });
  
  return (
    <div>
      <span>{counter.count}</span>
      <button onClick={counter.increment}>+</button>
      <button onClick={counter.decrement}>-</button>
      <button onClick={counter.reset}>重置</button>
    </div>
  );
};`,highlights:[1,2,3,4,6,7,8,9,10,12,13,14,16,17,18,20,21,22,24,25,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45],description:"完整的无头计数器实现，包含类型定义、Hook逻辑和使用示例。重点关注逻辑与UI的分离。"}},{title:"切换开关Hook",component:e.jsx(b,{}),description:"展示如何使用useToggle Hook管理布尔状态，可以创建各种开关、切换按钮等UI组件。",observationPoints:["观察切换状态的不同UI表现形式","注意状态变化的即时反馈","查看如何用同一个Hook实现不同的交互方式"],keyPoints:["useToggle Hook管理布尔状态","提供切换、开启、关闭等方法","支持初始状态配置","可以实现各种开关UI组件"],codeExample:{code:`// 无头切换Hook实现
interface UseToggleReturn {
  isOn: boolean;
  toggle: () => void;
  turnOn: () => void;
  turnOff: () => void;
}

const useToggle = (initialValue = false): UseToggleReturn => {
  const [isOn, setIsOn] = useState(initialValue);
  
  const toggle = useCallback(() => {
    setIsOn(prev => !prev);
  }, []);
  
  const turnOn = useCallback(() => {
    setIsOn(true);
  }, []);
  
  const turnOff = useCallback(() => {
    setIsOn(false);
  }, []);
  
  return {
    isOn,
    toggle,
    turnOn,
    turnOff
  };
};

// 使用示例
const ToggleComponent = () => {
  const toggle = useToggle(false);
  
  return (
    <div>
      <span>状态: {toggle.isOn ? '开启' : '关闭'}</span>
      <button onClick={toggle.toggle}>切换</button>
      <button onClick={toggle.turnOn}>开启</button>
      <button onClick={toggle.turnOff}>关闭</button>
    </div>
  );
};`,highlights:[1,2,3,4,5,6,8,9,11,12,13,15,16,17,19,20,21,23,24,25,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40],description:"完整的无头切换Hook实现，包含类型定义、Hook逻辑和使用示例。重点关注状态管理的简洁性。"}}],tutorial:{concepts:["无头组件将逻辑与UI完全分离，通过自定义Hook提供功能","Hook只返回状态和方法，不包含任何UI元素","使用者可以根据需求自由设计UI样式和交互方式","通过TypeScript接口确保类型安全和良好的开发体验"],steps:["定义Hook的输入参数和返回值的TypeScript接口","使用useState管理组件的内部状态","使用useCallback优化方法，避免不必要的重新渲染","返回状态和方法，让使用者自由组合UI","在组件中调用Hook，获取状态和方法进行UI渲染"],tips:["使用useCallback优化性能，避免不必要的重新渲染","提供合理的默认值，让Hook在简单场景下也能正常工作","使用TypeScript定义清晰的接口，提供良好的开发体验","保持Hook的单一职责，每个Hook只负责一个特定功能","考虑提供配置选项，让Hook更加灵活和可定制"]},interview:{questions:[{question:"什么是无头组件？它解决了什么问题？",answer:"无头组件是一种设计模式，将组件的逻辑和UI完全分离。它解决了传统组件样式耦合度高、复用性差的问题，让开发者可以在不同的UI实现中复用相同的逻辑。"},{question:"无头组件通常通过什么方式实现？",answer:"主要通过自定义Hook实现。Hook方式简洁现代，符合React函数组件的趋势，能够很好地封装状态逻辑并提供清晰的API。"},{question:"无头组件有什么优势？",answer:"主要优势包括：逻辑与UI完全分离提高复用性、开发者拥有完全的样式控制权、更容易进行单元测试、支持多种UI实现方式。"},{question:"什么时候应该使用无头组件？",answer:"适合在构建设计系统、需要多种样式变体的组件、复杂交互逻辑的组件，以及第三方组件库时使用。特别适合需要高度定制化的场景。"}],keyPoints:["无头组件实现逻辑与UI的完全分离","通过自定义Hook提供状态和方法","提高代码复用性和可维护性","给予开发者完全的样式控制权","更容易进行单元测试和逻辑验证"]},bestPractices:{dos:["使用TypeScript定义清晰的接口，提供良好的开发体验","使用useCallback优化性能，避免不必要的重新渲染","提供合理的默认值，让Hook在简单场景下也能正常工作","保持Hook的单一职责，每个Hook只负责一个特定功能","考虑提供配置选项，让Hook更加灵活和可定制"],donts:["不要在Hook中包含任何UI相关的代码或JSX","不要让Hook承担过多职责，保持功能单一","不要忘记使用useCallback优化方法","不要忽略TypeScript类型定义","不要在Hook中直接操作DOM，应该通过ref传递给使用者"],patterns:["自定义Hook模式：封装状态逻辑，返回状态和方法","配置对象模式：通过参数对象提供灵活的配置选项","回调优化模式：使用useCallback优化方法性能","类型安全模式：使用TypeScript确保接口的类型安全","默认值模式：为参数提供合理的默认值"]}});export{h as default};
