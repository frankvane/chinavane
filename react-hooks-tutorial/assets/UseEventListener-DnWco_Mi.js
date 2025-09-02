import{r as s,j as e}from"./index-CKH9Ek1I.js";import{C as x}from"./ComponentTemplate-B8dTsNLj.js";function o(n,r,a){const c=s.useRef();s.useEffect(()=>{c.current=r},[r]),s.useEffect(()=>{const t=a||window;if(!(t!=null&&t.addEventListener))return;const d=i=>{c.current&&c.current(i)};return t.addEventListener(n,d),()=>{t.removeEventListener(n,d)}},[n,a])}const v=()=>{const[n,r]=s.useState(0),[a,c]=s.useState(0),[t,d]=s.useState(navigator.onLine),i=s.useRef(null),[l,u]=s.useState(0);return o("click",()=>{u(m=>m+1)},i.current),o("click",()=>{r(m=>m+1)}),o("scroll",()=>{c(window.pageYOffset)}),o("online",()=>{d(!0)}),o("offline",()=>{d(!1)}),e.jsxs("div",{className:"p-6 bg-white rounded-lg shadow-sm border",children:[e.jsx("h3",{className:"text-lg font-semibold mb-4",children:"高级 useEventListener 示例"}),e.jsxs("div",{className:"space-y-4",children:[e.jsxs("div",{className:"grid grid-cols-2 gap-4",children:[e.jsxs("div",{className:"p-4 bg-blue-50 rounded",children:[e.jsx("h4",{className:"font-medium mb-2",children:"全局点击计数"}),e.jsx("p",{className:"text-2xl font-bold text-blue-600",children:n}),e.jsx("p",{className:"text-xs text-gray-600 mt-1",children:"点击页面任意位置"})]}),e.jsxs("div",{className:"p-4 bg-green-50 rounded",children:[e.jsx("h4",{className:"font-medium mb-2",children:"滚动位置"}),e.jsxs("p",{className:"text-2xl font-bold text-green-600",children:[a,"px"]}),e.jsx("p",{className:"text-xs text-gray-600 mt-1",children:"滚动页面查看变化"})]})]}),e.jsxs("div",{ref:i,className:"p-6 bg-orange-100 border-2 border-orange-300 rounded cursor-pointer hover:bg-orange-200 transition-colors",children:[e.jsx("h4",{className:"font-medium mb-2",children:"特定元素监听"}),e.jsxs("p",{className:"text-lg font-bold text-orange-600",children:["这个盒子被点击了 ",l," 次"]}),e.jsx("p",{className:"text-xs text-gray-600 mt-1",children:"点击这个盒子（不会影响全局计数）"})]}),e.jsxs("div",{className:"p-4 bg-gray-50 rounded",children:[e.jsx("h4",{className:"font-medium mb-2",children:"网络状态监听"}),e.jsxs("div",{className:"flex items-center space-x-2",children:[e.jsx("div",{className:`w-3 h-3 rounded-full ${t?"bg-green-500":"bg-red-500"}`}),e.jsx("span",{className:`font-medium ${t?"text-green-600":"text-red-600"}`,children:t?"在线":"离线"})]}),e.jsx("p",{className:"text-xs text-gray-600 mt-1",children:"断开网络连接查看状态变化"})]})]})]})},p=`import React, { useState, useRef } from 'react';
import useEventListener from './useEventListenerHook';

const AdvancedEventListenerDemo: React.FC = () => {
  const [clickCount, setClickCount] = useState(0);
  const [scrollPosition, setScrollPosition] = useState(0);
  const [isOnline, setIsOnline] = useState(navigator.onLine);
  const boxRef = useRef<HTMLDivElement>(null);
  const [boxClicks, setBoxClicks] = useState(0);

  // 监听特定元素的点击
  useEventListener('click', () => {
    setBoxClicks(prev => prev + 1);
  }, boxRef.current);

  // 监听全局点击
  useEventListener('click', () => {
    setClickCount(prev => prev + 1);
  });

  // 监听滚动
  useEventListener('scroll', () => {
    setScrollPosition(window.pageYOffset);
  });

  // 监听网络状态
  useEventListener('online', () => {
    setIsOnline(true);
  });

  useEventListener('offline', () => {
    setIsOnline(false);
  });

  return (
    <div className="p-6 bg-white rounded-lg shadow-sm border">
      <h3 className="text-lg font-semibold mb-4">高级 useEventListener 示例</h3>
      
      <div className="space-y-4">
        <div className="grid grid-cols-2 gap-4">
          <div className="p-4 bg-blue-50 rounded">
            <h4 className="font-medium mb-2">全局点击计数</h4>
            <p className="text-2xl font-bold text-blue-600">{clickCount}</p>
            <p className="text-xs text-gray-600 mt-1">
              点击页面任意位置
            </p>
          </div>
          
          <div className="p-4 bg-green-50 rounded">
            <h4 className="font-medium mb-2">滚动位置</h4>
            <p className="text-2xl font-bold text-green-600">{scrollPosition}px</p>
            <p className="text-xs text-gray-600 mt-1">
              滚动页面查看变化
            </p>
          </div>
        </div>
        
        <div
          ref={boxRef}
          className="p-6 bg-orange-100 border-2 border-orange-300 rounded cursor-pointer hover:bg-orange-200 transition-colors"
        >
          <h4 className="font-medium mb-2">特定元素监听</h4>
          <p className="text-lg font-bold text-orange-600">
            这个盒子被点击了 {boxClicks} 次
          </p>
          <p className="text-xs text-gray-600 mt-1">
            点击这个盒子（不会影响全局计数）
          </p>
        </div>
        
        <div className="p-4 bg-gray-50 rounded">
          <h4 className="font-medium mb-2">网络状态监听</h4>
          <div className="flex items-center space-x-2">
            <div className={\`w-3 h-3 rounded-full \${
              isOnline ? 'bg-green-500' : 'bg-red-500'
            }\`}></div>
            <span className={\`font-medium \${
              isOnline ? 'text-green-600' : 'text-red-600'
            }\`}>
              {isOnline ? '在线' : '离线'}
            </span>
          </div>
          <p className="text-xs text-gray-600 mt-1">
            断开网络连接查看状态变化
          </p>
        </div>
      </div>
    </div>
  );
};

export default AdvancedEventListenerDemo;`,h=()=>{const[n,r]=s.useState({width:0,height:0}),[a,c]=s.useState({x:0,y:0}),[t,d]=s.useState("");return o("resize",()=>{r({width:window.innerWidth,height:window.innerHeight})}),o("mousemove",i=>{const l=i;c({x:l.clientX,y:l.clientY})}),o("keydown",i=>{d(i.key)}),s.useEffect(()=>{r({width:window.innerWidth,height:window.innerHeight})},[]),e.jsxs("div",{className:"p-6 bg-white rounded-lg shadow-sm border",children:[e.jsx("h3",{className:"text-lg font-semibold mb-4",children:"基础 useEventListener 示例"}),e.jsxs("div",{className:"space-y-4",children:[e.jsxs("div",{className:"p-4 bg-blue-50 rounded",children:[e.jsx("h4",{className:"font-medium mb-2",children:"窗口大小监听"}),e.jsxs("p",{className:"text-sm",children:["宽度: ",n.width,"px, 高度: ",n.height,"px"]}),e.jsx("p",{className:"text-xs text-gray-600 mt-1",children:"调整浏览器窗口大小查看变化"})]}),e.jsxs("div",{className:"p-4 bg-green-50 rounded",children:[e.jsx("h4",{className:"font-medium mb-2",children:"鼠标位置监听"}),e.jsxs("p",{className:"text-sm",children:["X: ",a.x,"px, Y: ",a.y,"px"]}),e.jsx("p",{className:"text-xs text-gray-600 mt-1",children:"移动鼠标查看坐标变化"})]}),e.jsxs("div",{className:"p-4 bg-purple-50 rounded",children:[e.jsx("h4",{className:"font-medium mb-2",children:"键盘监听"}),e.jsxs("p",{className:"text-sm",children:["最后按下的键: ",t||"无"]}),e.jsx("p",{className:"text-xs text-gray-600 mt-1",children:"按任意键查看效果"})]})]})]})},g=`import React, { useState, useEffect } from 'react';
import useEventListener from './useEventListenerHook';

const BasicEventListenerDemo: React.FC = () => {
  const [windowSize, setWindowSize] = useState({ width: 0, height: 0 });
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [keyPressed, setKeyPressed] = useState<string>('');

  // 监听窗口大小变化
  useEventListener('resize', () => {
    setWindowSize({
      width: window.innerWidth,
      height: window.innerHeight
    });
  });

  // 监听鼠标移动
  useEventListener('mousemove', (event) => {
    const mouseEvent = event as MouseEvent;
    setMousePosition({
      x: mouseEvent.clientX,
      y: mouseEvent.clientY
    });
  });

  // 监听键盘按键
  useEventListener('keydown', (event) => {
    const keyEvent = event as KeyboardEvent;
    setKeyPressed(keyEvent.key);
  });

  // 初始化窗口大小
  useEffect(() => {
    setWindowSize({
      width: window.innerWidth,
      height: window.innerHeight
    });
  }, []);

  return (
    <div className="p-6 bg-white rounded-lg shadow-sm border">
      <h3 className="text-lg font-semibold mb-4">基础 useEventListener 示例</h3>
      
      <div className="space-y-4">
        <div className="p-4 bg-blue-50 rounded">
          <h4 className="font-medium mb-2">窗口大小监听</h4>
          <p className="text-sm">
            宽度: {windowSize.width}px, 高度: {windowSize.height}px
          </p>
          <p className="text-xs text-gray-600 mt-1">
            调整浏览器窗口大小查看变化
          </p>
        </div>
        
        <div className="p-4 bg-green-50 rounded">
          <h4 className="font-medium mb-2">鼠标位置监听</h4>
          <p className="text-sm">
            X: {mousePosition.x}px, Y: {mousePosition.y}px
          </p>
          <p className="text-xs text-gray-600 mt-1">
            移动鼠标查看坐标变化
          </p>
        </div>
        
        <div className="p-4 bg-purple-50 rounded">
          <h4 className="font-medium mb-2">键盘监听</h4>
          <p className="text-sm">
            最后按下的键: {keyPressed || '无'}
          </p>
          <p className="text-xs text-gray-600 mt-1">
            按任意键查看效果
          </p>
        </div>
      </div>
    </div>
  );
};

export default BasicEventListenerDemo;`,b=()=>e.jsx(x,{title:"useEventListener",description:"简化事件监听器管理的自定义 Hook",overview:[{title:"核心概念",items:["事件监听管理","自动添加移除","内存泄漏防护","类型安全"]},{title:"主要优势",items:["自动生命周期","防止内存泄漏","TypeScript 支持","多目标监听"]},{title:"适用场景",items:["窗口事件监听","键盘快捷键","鼠标交互","网络状态"]},{title:"注意事项",items:["函数缓存机制","自动清理","目标元素选择","事件类型正确"]}],examples:[{title:"基础用法",component:e.jsx(h,{}),description:"展示 useEventListener 的基本使用方法",codeExample:{code:g,language:"typescript",highlights:"14,15,16,17,19,20,21,22,24,25,26,27,28,29,30,32,33,34,35,37,38,39,40,41"},observationPoints:["观察窗口大小变化时的实时更新","注意鼠标移动时坐标的变化","按键时键盘事件的捕获"],keyPoints:["useEventListener 自动管理事件监听器","支持多种类型的事件监听","组件卸载时自动清理监听器"]},{title:"高级应用",component:e.jsx(v,{}),description:"展示 useEventListener 在复杂场景中的应用",codeExample:{code:p,language:"typescript",highlights:"19,20,21,24,25,26,27,30,31,32,33,34,35,36,39,40,43,44,47,48,49,50,51,52,53,54,57,58,59,60,61,62,65,66,67,68,69,70,71,72,73,74,75,76,77"},observationPoints:["观察全局点击与特定元素点击的区别","查看滚动事件的实时监听","注意网络状态变化的监听效果"],keyPoints:["可以同时监听多个不同的事件","支持特定 DOM 元素的事件监听","适合实现复杂的交互功能"]}],tutorial:{concepts:["useEventListener 封装了 addEventListener 和 removeEventListener","使用 useRef 缓存事件处理函数，避免重复绑定","useEffect 负责事件监听器的添加和清理","支持泛型类型，提供类型安全的 DOM 元素引用"],steps:["使用 useRef 创建处理函数的引用","在 useEffect 中更新处理函数引用","在另一个 useEffect 中添加和移除事件监听器","在组件中调用 useEventListener 并传入事件名和处理函数"],tips:["使用 TypeScript 泛型确保 DOM 元素类型安全","处理函数会被自动缓存，避免性能问题","可以传入 null 作为元素参数来监听 window 事件","注意事件类型转换，确保访问正确的事件属性"]},interview:{questions:[{question:"useEventListener Hook 解决了什么问题？",answer:"useEventListener 解决了手动管理事件监听器的复杂性问题。它自动处理事件监听器的添加和移除，防止内存泄漏，避免重复绑定，并提供了类型安全的事件处理方式。这样开发者就不需要在每个组件中重复编写 addEventListener 和 removeEventListener 的逻辑。"},{question:"为什么要使用 useRef 来缓存事件处理函数？",answer:"使用 useRef 缓存事件处理函数是为了避免在每次渲染时重新绑定事件监听器。如果直接使用传入的 handler 函数，每次组件重新渲染时 handler 的引用可能会发生变化，导致 useEffect 重新执行，频繁地移除和添加事件监听器，影响性能。"},{question:"useEventListener 如何处理组件卸载时的清理？",answer:"useEventListener 通过 useEffect 的清理函数来处理组件卸载时的清理。在 useEffect 中返回一个函数，该函数会在组件卸载或依赖项变化时执行，调用 removeEventListener 来移除事件监听器，确保不会造成内存泄漏。"},{question:"如何在 useEventListener 中处理不同类型的事件？",answer:"useEventListener 接受泛型参数来处理不同类型的 DOM 元素，事件处理函数接收 Event 类型参数。在具体使用时，可以通过类型断言（如 event as MouseEvent）来访问特定事件类型的属性。这样既保持了灵活性，又提供了类型安全。"},{question:"useEventListener 与直接使用 addEventListener 的区别？",answer:"主要区别在于：1) useEventListener 自动管理生命周期，无需手动清理；2) 提供了函数缓存机制，避免重复绑定；3) 集成了 React Hooks 的特性，如依赖项管理；4) 提供了更好的 TypeScript 支持；5) 代码更简洁，减少了样板代码。"}],keyPoints:["useEventListener 自动管理事件监听器的生命周期","使用 useRef 缓存处理函数，避免重复绑定","支持监听 window 对象或特定 DOM 元素","提供 TypeScript 泛型支持，确保类型安全","组件卸载时自动清理，防止内存泄漏","可以同时使用多个 useEventListener 监听不同事件","处理函数的依赖项变化会自动更新监听器","适合封装复杂的事件处理逻辑"]},bestPractices:{dos:["使用 TypeScript 泛型确保类型安全","为不同类型的事件使用适当的类型断言","在处理函数中使用 useCallback 优化性能","监听特定元素时确保元素引用的正确性","为复杂的事件处理逻辑创建专门的 Hook","在开发环境中添加事件监听的调试信息","使用防抖或节流来优化高频事件","为事件处理函数提供错误边界保护","在必要时使用 passive 选项优化性能","为键盘事件提供可访问性支持"],donts:["不要在事件处理函数中进行重型计算","不要忘记处理事件对象的类型转换","不要在循环或条件语句中使用 useEventListener","不要监听过多的高频事件影响性能","不要在事件处理函数中直接修改 DOM","不要忽略事件的浏览器兼容性","不要在事件处理函数中进行异步操作而不处理错误","不要使用 useEventListener 来替代所有的事件处理","不要在事件处理函数中创建新的对象引用","不要忘记在必要时阻止事件的默认行为"],patterns:["全局事件监听模式：监听 window 级别的事件","元素特定监听模式：监听特定 DOM 元素的事件","键盘快捷键模式：实现应用级快捷键功能","窗口状态监听模式：监听窗口大小、焦点等状态","网络状态监听模式：监听在线/离线状态变化","滚动监听模式：实现滚动相关的交互效果","鼠标跟踪模式：实现鼠标位置相关的功能","触摸事件模式：处理移动端的触摸交互","拖拽监听模式：实现拖拽功能的事件处理","组合事件模式：同时监听多个相关事件"]}});export{b as default};
