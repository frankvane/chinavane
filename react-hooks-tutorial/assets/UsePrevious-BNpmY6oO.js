import{r as o,j as e}from"./index-CKH9Ek1I.js";import{C as m}from"./ComponentTemplate-B8dTsNLj.js";function c(s){const i=o.useRef();return o.useEffect(()=>{i.current=s}),i.current}const v=()=>{const[s,i]=o.useState({id:1,name:"张三",age:25}),t=c(s),[u,d]=o.useState([]),n=r=>{const a={...s,...r};d(l=>[...l,{current:a,previous:s}]),i(a)};return e.jsxs("div",{className:"p-6 bg-white rounded-lg shadow-sm border",children:[e.jsx("h3",{className:"text-lg font-semibold mb-4",children:"高级 usePrevious 示例"}),e.jsxs("div",{className:"space-y-4",children:[e.jsxs("div",{className:"grid grid-cols-2 gap-4",children:[e.jsxs("div",{className:"p-4 bg-blue-50 rounded",children:[e.jsx("h4",{className:"font-medium mb-2",children:"当前用户"}),e.jsxs("div",{className:"text-sm space-y-1",children:[e.jsxs("div",{children:["ID: ",s.id]}),e.jsxs("div",{children:["姓名: ",s.name]}),e.jsxs("div",{children:["年龄: ",s.age]})]})]}),e.jsxs("div",{className:"p-4 bg-gray-50 rounded",children:[e.jsx("h4",{className:"font-medium mb-2",children:"上一次的用户"}),e.jsxs("div",{className:"text-sm space-y-1",children:[e.jsxs("div",{children:["ID: ",(t==null?void 0:t.id)??"无"]}),e.jsxs("div",{children:["姓名: ",(t==null?void 0:t.name)??"无"]}),e.jsxs("div",{children:["年龄: ",(t==null?void 0:t.age)??"无"]})]})]})]}),e.jsxs("div",{className:"flex space-x-2",children:[e.jsx("button",{onClick:()=>n({name:s.name==="张三"?"李四":"张三"}),className:"px-3 py-1 bg-blue-500 text-white rounded text-sm hover:bg-blue-600",children:"切换姓名"}),e.jsx("button",{onClick:()=>n({age:s.age+1}),className:"px-3 py-1 bg-green-500 text-white rounded text-sm hover:bg-green-600",children:"增加年龄"}),e.jsx("button",{onClick:()=>n({id:s.id+1}),className:"px-3 py-1 bg-purple-500 text-white rounded text-sm hover:bg-purple-600",children:"更新ID"})]}),u.length>0&&e.jsxs("div",{className:"mt-4",children:[e.jsx("h4",{className:"font-medium mb-2",children:"变更历史"}),e.jsx("div",{className:"max-h-32 overflow-y-auto space-y-1",children:u.slice(-3).map((r,a)=>e.jsxs("div",{className:"text-xs p-2 bg-gray-100 rounded",children:["变更 ",u.length-2+a,": ",JSON.stringify(r.previous)," → ",JSON.stringify(r.current)]},a))})]})]})]})},p=`import React, { useState } from 'react';
import { usePrevious } from './usePreviousHook';

/**
 * 高级 usePrevious 演示组件
 * 展示在复杂对象和历史记录场景中的应用
 */
const AdvancedUsePreviousDemo: React.FC = () => {
  const [user, setUser] = useState({ id: 1, name: '张三', age: 25 });
  const previousUser = usePrevious(user);
  const [history, setHistory] = useState<Array<{ current: any; previous: any }>>([]);

  const updateUser = (updates: Partial<typeof user>) => {
    const newUser = { ...user, ...updates };
    setHistory(prev => [...prev, { current: newUser, previous: user }]);
    setUser(newUser);
  };

  return (
    <div className="p-6 bg-white rounded-lg shadow-sm border">
      <h3 className="text-lg font-semibold mb-4">高级 usePrevious 示例</h3>
      
      <div className="space-y-4">
        <div className="grid grid-cols-2 gap-4">
          <div className="p-4 bg-blue-50 rounded">
            <h4 className="font-medium mb-2">当前用户</h4>
            <div className="text-sm space-y-1">
              <div>ID: {user.id}</div>
              <div>姓名: {user.name}</div>
              <div>年龄: {user.age}</div>
            </div>
          </div>
          
          <div className="p-4 bg-gray-50 rounded">
            <h4 className="font-medium mb-2">上一次的用户</h4>
            <div className="text-sm space-y-1">
              <div>ID: {previousUser?.id ?? '无'}</div>
              <div>姓名: {previousUser?.name ?? '无'}</div>
              <div>年龄: {previousUser?.age ?? '无'}</div>
            </div>
          </div>
        </div>
        
        <div className="flex space-x-2">
          <button
            onClick={() => updateUser({ name: user.name === '张三' ? '李四' : '张三' })}
            className="px-3 py-1 bg-blue-500 text-white rounded text-sm hover:bg-blue-600"
          >
            切换姓名
          </button>
          <button
            onClick={() => updateUser({ age: user.age + 1 })}
            className="px-3 py-1 bg-green-500 text-white rounded text-sm hover:bg-green-600"
          >
            增加年龄
          </button>
          <button
            onClick={() => updateUser({ id: user.id + 1 })}
            className="px-3 py-1 bg-purple-500 text-white rounded text-sm hover:bg-purple-600"
          >
            更新ID
          </button>
        </div>
        
        {history.length > 0 && (
          <div className="mt-4">
            <h4 className="font-medium mb-2">变更历史</h4>
            <div className="max-h-32 overflow-y-auto space-y-1">
              {history.slice(-3).map((item, index) => (
                <div key={index} className="text-xs p-2 bg-gray-100 rounded">
                  变更 {history.length - 2 + index}: {JSON.stringify(item.previous)} → {JSON.stringify(item.current)}
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default AdvancedUsePreviousDemo;`,x=()=>{const[s,i]=o.useState(0),[t,u]=o.useState("张三"),d=c(s),n=c(t);return e.jsxs("div",{className:"p-6 bg-white rounded-lg shadow-sm border",children:[e.jsx("h3",{className:"text-lg font-semibold mb-4",children:"基础 usePrevious 示例"}),e.jsxs("div",{className:"space-y-4",children:[e.jsxs("div",{className:"flex items-center space-x-4",children:[e.jsxs("span",{children:["计数器: ",s]}),e.jsx("button",{onClick:()=>i(r=>r+1),className:"px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600",children:"增加"}),e.jsxs("span",{className:"text-gray-600",children:["上一次的值: ",d??"无"]})]}),e.jsxs("div",{className:"flex items-center space-x-4",children:[e.jsxs("span",{children:["姓名: ",t]}),e.jsx("button",{onClick:()=>u(t==="张三"?"李四":"张三"),className:"px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600",children:"切换姓名"}),e.jsxs("span",{className:"text-gray-600",children:["上一次的值: ",n??"无"]})]})]})]})},h=`import React, { useState } from 'react';
import { usePrevious } from './usePreviousHook';

/**
 * 基础 usePrevious 演示组件
 * 展示如何使用 usePrevious Hook 来获取上一次渲染时的值
 */
const BasicUsePreviousDemo: React.FC = () => {
  const [count, setCount] = useState(0);
  const [name, setName] = useState('张三');
  const previousCount = usePrevious(count);
  const previousName = usePrevious(name);

  return (
    <div className="p-6 bg-white rounded-lg shadow-sm border">
      <h3 className="text-lg font-semibold mb-4">基础 usePrevious 示例</h3>
      
      <div className="space-y-4">
        <div className="flex items-center space-x-4">
          <span>计数器: {count}</span>
          <button
            onClick={() => setCount(c => c + 1)}
            className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
          >
            增加
          </button>
          <span className="text-gray-600">
            上一次的值: {previousCount ?? '无'}
          </span>
        </div>
        
        <div className="flex items-center space-x-4">
          <span>姓名: {name}</span>
          <button
            onClick={() => setName(name === '张三' ? '李四' : '张三')}
            className="px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600"
          >
            切换姓名
          </button>
          <span className="text-gray-600">
            上一次的值: {previousName ?? '无'}
          </span>
        </div>
      </div>
    </div>
  );
};

export default BasicUsePreviousDemo;`,f=()=>e.jsx(m,{title:"usePrevious",description:"获取状态或属性的上一次值的自定义 Hook",overview:[{title:"核心概念",items:["历史值追踪","useRef 存储","渲染时更新","类型安全"]},{title:"主要优势",items:["简单易用","TypeScript 支持","轻量级实现","通用性强"]},{title:"适用场景",items:["值变化比较","撤销重做","动画过渡","表单验证"]},{title:"注意事项",items:["首次返回 undefined","仅存储上一次值","对象引用相等","大对象性能"]}],examples:[{title:"基础用法",component:e.jsx(x,{}),description:"展示 usePrevious 的基本使用方法",observationPoints:["观察每次状态更新时，上一次值的显示","注意首次渲染时上一次值为 '无'","不同类型的值都可以使用 usePrevious 追踪"],keyPoints:["usePrevious 在每次渲染后更新存储的值","返回的是上一次渲染时的值","支持泛型，可以用于任何类型"],codeExample:{code:h,language:"typescript",highlights:"2,3,4,5,6"}},{title:"高级应用",component:e.jsx(v,{}),description:"展示 usePrevious 在复杂场景中的应用",observationPoints:["观察对象类型值的上一次状态追踪","查看变更历史记录的实现","注意对象引用的变化检测"],keyPoints:["可以追踪复杂对象的变化","结合其他状态可以实现历史记录","适合实现比较和回滚功能"],codeExample:{code:p,language:"typescript",highlights:"3,4,7,8,9,10,11,12,13,14,15,16,17,18,19"}}],tutorial:{concepts:["usePrevious 的核心原理是使用 useRef 存储上一次的值","useEffect 在每次渲染后更新 ref 的值","返回的是当前 ref.current，即上一次的值","首次渲染时 ref.current 为 undefined"],steps:["创建一个 useRef 来存储上一次的值","使用 useEffect 在每次渲染后更新 ref.current","返回 ref.current 作为上一次的值","在组件中调用 usePrevious 并传入要追踪的值"],tips:["可以结合 useMemo 来优化对象比较的性能","对于复杂对象，考虑使用深度比较","可以扩展为 usePreviousArray 来存储多个历史值","在 TypeScript 中使用泛型确保类型安全"]},interview:{questions:[{question:"usePrevious Hook 的实现原理是什么？",answer:"usePrevious 使用 useRef 来存储上一次的值。在每次组件渲染时，useEffect 会在渲染完成后将当前值存储到 ref.current 中，而 Hook 返回的是 ref.current，即上一次渲染时的值。这样就实现了对上一次值的追踪。"},{question:"为什么 usePrevious 首次渲染时返回 undefined？",answer:"因为 useRef 初始化时 ref.current 为 undefined，而 useEffect 是在渲染完成后才执行的。所以在首次渲染时，useEffect 还没有执行，ref.current 仍然是 undefined，因此返回 undefined。"},{question:"usePrevious 与 useState 的区别是什么？",answer:"useState 管理当前状态并触发重新渲染，而 usePrevious 只是追踪值的变化历史，不会触发渲染。usePrevious 依赖于其他状态的变化来更新，它本身是一个只读的历史值追踪器。"},{question:"如何优化 usePrevious 在处理大型对象时的性能？",answer:"可以结合 useMemo 来避免不必要的对象创建，使用浅比较或深比较来判断对象是否真正发生了变化，或者只追踪对象的特定属性而不是整个对象。对于频繁变化的大型对象，考虑使用 useCallback 来优化比较函数。"},{question:"usePrevious 在什么场景下最有用？",answer:"usePrevious 在需要比较当前值与上一次值的场景中最有用，比如：实现动画过渡效果、表单验证中检测值的变化、实现撤销/重做功能、性能监控中追踪状态变化、以及需要基于值变化触发特定逻辑的场景。"}],keyPoints:["usePrevious 使用 useRef 和 useEffect 实现值的历史追踪","首次渲染时返回 undefined，之后返回上一次的值","不会触发组件重新渲染，是一个只读的追踪器","支持任何类型的值，包括原始类型和对象","可以与其他 Hooks 结合实现复杂的状态管理","在处理大型对象时需要考虑性能优化","适合实现比较、动画、历史记录等功能","TypeScript 中使用泛型确保类型安全"]},bestPractices:{dos:["使用 TypeScript 泛型确保类型安全","对于复杂对象考虑使用 useMemo 优化","在比较对象时注意引用相等性","结合其他 Hooks 实现更复杂的功能","为首次渲染的 undefined 情况提供默认处理","在动画场景中使用 usePrevious 实现平滑过渡","用于表单验证中的值变化检测","实现撤销/重做功能时的历史状态管理","在性能监控中追踪关键状态的变化","结合 useCallback 优化比较函数的性能"],donts:["不要用 usePrevious 来管理需要触发渲染的状态","不要在 usePrevious 中存储大量的历史数据","不要忽略首次渲染时的 undefined 情况","不要在每次渲染时创建新的对象引用","不要将 usePrevious 用于频繁变化的大型对象","不要在 usePrevious 的基础上实现复杂的状态逻辑","不要忘记处理对象比较的边界情况","不要在循环或条件语句中调用 usePrevious","不要将 usePrevious 作为主要的状态管理方案","不要在 usePrevious 中进行副作用操作"],patterns:["值变化检测模式：比较当前值与上一次值","动画过渡模式：基于值变化实现平滑动画","历史记录模式：结合数组状态存储变化历史","条件渲染模式：基于值变化控制组件显示","性能监控模式：追踪关键指标的变化","表单验证模式：检测字段值的变化","撤销重做模式：实现操作的回滚功能","比较高亮模式：突出显示发生变化的内容","渐进加载模式：基于状态变化触发数据加载","调试追踪模式：在开发中追踪状态变化"]}});export{f as default};
