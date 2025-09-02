import{r as a,j as e}from"./index-D5aG88J3.js";import{C as j}from"./ComponentTemplate-DZf1RTVD.js";const w=(s=0)=>{const[i,n]=a.useState(s),t=a.useCallback(()=>{n(l=>l+1)},[]),r=a.useCallback(()=>{n(l=>l-1)},[]),c=a.useCallback(()=>{n(s)},[s]),d=a.useCallback(l=>{n(l)},[]);return{count:i,increment:t,decrement:r,reset:c,setValue:d}},p=(s=0,i={})=>{const{min:n,max:t,step:r=1,onIncrement:c,onDecrement:d,onChange:l}=i,[o,m]=a.useState(s),b=a.useRef(o);a.useEffect(()=>{b.current!==o&&l&&l(o),b.current=o},[o,l]);const h=a.useCallback(()=>{m(u=>{const x=u+r,g=t!==void 0?Math.min(x,t):x;return g!==u&&c&&c(g),g})},[r,t,c]),v=a.useCallback(()=>{m(u=>{const x=u-r,g=n!==void 0?Math.max(x,n):x;return g!==u&&d&&d(g),g})},[r,n,d]),y=a.useCallback(()=>{m(s)},[s]),N=a.useCallback(u=>{const x=Math.max(n??-1/0,Math.min(t??1/0,u));m(x)},[n,t]),f=t===void 0||o<t,C=n===void 0||o>n;return{count:o,increment:h,decrement:v,reset:y,setValue:N,canIncrement:f,canDecrement:C}},k=()=>{const[s,i]=a.useState([]),n=p(5,{min:0,max:10,step:2,onChange:t=>{const r=new Date().toLocaleTimeString();i(c=>[...c.slice(-4),`${r}: 值变化为 ${t}`])},onIncrement:t=>{console.log("递增到:",t)},onDecrement:t=>{console.log("递减到:",t)}});return e.jsx("div",{className:"space-y-6",children:e.jsxs("div",{className:"bg-white p-6 rounded-lg border border-gray-200",children:[e.jsx("h3",{className:"text-lg font-semibold mb-4",children:"高级计数器 (范围: 0-10, 步长: 2)"}),e.jsxs("div",{className:"text-center mb-6",children:[e.jsx("div",{className:"text-4xl font-bold text-purple-600 mb-2",children:n.count}),e.jsx("div",{className:"text-sm text-gray-500",children:"当前计数值"}),e.jsx("div",{className:"mt-4 w-full bg-gray-200 rounded-full h-2",children:e.jsx("div",{className:"bg-purple-600 h-2 rounded-full transition-all duration-300",style:{width:`${n.count/10*100}%`}})})]}),e.jsxs("div",{className:"flex flex-wrap gap-2 justify-center mb-4",children:[e.jsxs("button",{onClick:n.increment,disabled:!n.canIncrement,className:`px-4 py-2 rounded transition-colors ${n.canIncrement?"bg-green-500 text-white hover:bg-green-600":"bg-gray-300 text-gray-500 cursor-not-allowed"}`,children:["+2 递增 ",!n.canIncrement&&"(已达上限)"]}),e.jsxs("button",{onClick:n.decrement,disabled:!n.canDecrement,className:`px-4 py-2 rounded transition-colors ${n.canDecrement?"bg-red-500 text-white hover:bg-red-600":"bg-gray-300 text-gray-500 cursor-not-allowed"}`,children:["-2 递减 ",!n.canDecrement&&"(已达下限)"]}),e.jsx("button",{onClick:n.reset,className:"px-4 py-2 bg-gray-500 text-white rounded hover:bg-gray-600 transition-colors",children:"重置到5"}),e.jsx("button",{onClick:()=>n.setValue(Math.floor(Math.random()*11)),className:"px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition-colors",children:"随机设置"})]}),e.jsxs("div",{className:"grid grid-cols-2 gap-4 mb-4",children:[e.jsxs("div",{className:"bg-green-50 p-3 rounded border border-green-200",children:[e.jsx("div",{className:"text-sm font-medium text-green-800",children:"可以递增"}),e.jsx("div",{className:"text-lg font-bold text-green-600",children:n.canIncrement?"是":"否"})]}),e.jsxs("div",{className:"bg-red-50 p-3 rounded border border-red-200",children:[e.jsx("div",{className:"text-sm font-medium text-red-800",children:"可以递减"}),e.jsx("div",{className:"text-lg font-bold text-red-600",children:n.canDecrement?"是":"否"})]})]}),s.length>0&&e.jsxs("div",{className:"bg-gray-50 p-3 rounded border",children:[e.jsx("div",{className:"text-sm font-medium text-gray-700 mb-2",children:"变化日志："}),e.jsx("div",{className:"space-y-1",children:s.map((t,r)=>e.jsx("div",{className:"text-xs text-gray-600 font-mono",children:t},r))})]})]})})},I=`import React, { useState } from "react";\r
\r
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";\r
import { tomorrow } from "react-syntax-highlighter/dist/esm/styles/prism";\r
import { useAdvancedCounter } from "./useCounterHook";\r
\r
const AdvancedCounterDemo: React.FC = () => {\r
  const [logs, setLogs] = useState<string[]>([]);\r
\r
  const counter = useAdvancedCounter(5, {\r
    min: 0,\r
    max: 10,\r
    step: 2,\r
    onChange: (value) => {\r
      const timestamp = new Date().toLocaleTimeString();\r
      setLogs((prev) => [...prev.slice(-4), \`\${timestamp}: 值变化为 \${value}\`]);\r
    },\r
    onIncrement: (value) => {\r
      console.log("递增到:", value);\r
    },\r
    onDecrement: (value) => {\r
      console.log("递减到:", value);\r
    },\r
  });\r
\r
  return (\r
    <div className="space-y-6">\r
      <div className="bg-white p-6 rounded-lg border border-gray-200">\r
        <h3 className="text-lg font-semibold mb-4">\r
          高级计数器 (范围: 0-10, 步长: 2)\r
        </h3>\r
\r
        <div className="text-center mb-6">\r
          <div className="text-4xl font-bold text-purple-600 mb-2">\r
            {counter.count}\r
          </div>\r
          <div className="text-sm text-gray-500">当前计数值</div>\r
\r
          {/* 进度条显示 */}\r
          <div className="mt-4 w-full bg-gray-200 rounded-full h-2">\r
            <div\r
              className="bg-purple-600 h-2 rounded-full transition-all duration-300"\r
              style={{ width: \`\${(counter.count / 10) * 100}%\` }}\r
            />\r
          </div>\r
        </div>\r
\r
        <div className="flex flex-wrap gap-2 justify-center mb-4">\r
          <button\r
            onClick={counter.increment}\r
            disabled={!counter.canIncrement}\r
            className={\`px-4 py-2 rounded transition-colors \${\r
              counter.canIncrement\r
                ? "bg-green-500 text-white hover:bg-green-600"\r
                : "bg-gray-300 text-gray-500 cursor-not-allowed"\r
            }\`}\r
          >\r
            +2 递增 {!counter.canIncrement && "(已达上限)"}\r
          </button>\r
          <button\r
            onClick={counter.decrement}\r
            disabled={!counter.canDecrement}\r
            className={\`px-4 py-2 rounded transition-colors \${\r
              counter.canDecrement\r
                ? "bg-red-500 text-white hover:bg-red-600"\r
                : "bg-gray-300 text-gray-500 cursor-not-allowed"\r
            }\`}\r
          >\r
            -2 递减 {!counter.canDecrement && "(已达下限)"}\r
          </button>\r
          <button\r
            onClick={counter.reset}\r
            className="px-4 py-2 bg-gray-500 text-white rounded hover:bg-gray-600 transition-colors"\r
          >\r
            重置到5\r
          </button>\r
          <button\r
            onClick={() => counter.setValue(Math.floor(Math.random() * 11))}\r
            className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition-colors"\r
          >\r
            随机设置\r
          </button>\r
        </div>\r
\r
        <div className="grid grid-cols-2 gap-4 mb-4">\r
          <div className="bg-green-50 p-3 rounded border border-green-200">\r
            <div className="text-sm font-medium text-green-800">可以递增</div>\r
            <div className="text-lg font-bold text-green-600">\r
              {counter.canIncrement ? "是" : "否"}\r
            </div>\r
          </div>\r
          <div className="bg-red-50 p-3 rounded border border-red-200">\r
            <div className="text-sm font-medium text-red-800">可以递减</div>\r
            <div className="text-lg font-bold text-red-600">\r
              {counter.canDecrement ? "是" : "否"}\r
            </div>\r
          </div>\r
        </div>\r
\r
        {logs.length > 0 && (\r
          <div className="bg-gray-50 p-3 rounded border">\r
            <div className="text-sm font-medium text-gray-700 mb-2">\r
              变化日志：\r
            </div>\r
            <div className="space-y-1">\r
              {logs.map((log, index) => (\r
                <div key={index} className="text-xs text-gray-600 font-mono">\r
                  {log}\r
                </div>\r
              ))}\r
            </div>\r
          </div>\r
        )}\r
      </div>\r
    </div>\r
  );\r
};\r
\r
export default AdvancedCounterDemo;\r
`,D=()=>{const s=w(0),[i,n]=a.useState([]),t=(o,m)=>{const b=new Date().toLocaleTimeString();n(h=>[...h.slice(-4),`${b}: ${o} - 当前值: ${m}`])},r=()=>{s.increment(),t("递增",s.count+1)},c=()=>{s.decrement(),t("递减",s.count-1)},d=()=>{s.reset(),t("重置",0)},l=()=>{const o=Math.floor(Math.random()*100);s.setValue(o),t("设置值",o)};return e.jsx("div",{className:"space-y-6",children:e.jsxs("div",{className:"bg-white p-6 rounded-lg border border-gray-200",children:[e.jsx("h3",{className:"text-lg font-semibold mb-4",children:"基础计数器"}),e.jsxs("div",{className:"text-center mb-6",children:[e.jsx("div",{className:"text-4xl font-bold text-blue-600 mb-2",children:s.count}),e.jsx("div",{className:"text-sm text-gray-500",children:"当前计数值"})]}),e.jsxs("div",{className:"flex flex-wrap gap-2 justify-center mb-4",children:[e.jsx("button",{onClick:r,className:"px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600 transition-colors",children:"+1 递增"}),e.jsx("button",{onClick:c,className:"px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600 transition-colors",children:"-1 递减"}),e.jsx("button",{onClick:d,className:"px-4 py-2 bg-gray-500 text-white rounded hover:bg-gray-600 transition-colors",children:"重置"}),e.jsx("button",{onClick:l,className:"px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition-colors",children:"随机设置"})]}),i.length>0&&e.jsxs("div",{className:"bg-gray-50 p-3 rounded border",children:[e.jsx("div",{className:"text-sm font-medium text-gray-700 mb-2",children:"操作日志："}),e.jsx("div",{className:"space-y-1",children:i.map((o,m)=>e.jsx("div",{className:"text-xs text-gray-600 font-mono",children:o},m))})]})]})})},S=`import React, { useState } from "react";

import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { tomorrow } from "react-syntax-highlighter/dist/esm/styles/prism";
import { useCounter } from "./useCounterHook";

const BasicCounterDemo: React.FC = () => {
  const counter = useCounter(0);
  const [logs, setLogs] = useState<string[]>([]);

  const addLog = (action: string, value: number) => {
    const timestamp = new Date().toLocaleTimeString();
    setLogs((prev) => [
      ...prev.slice(-4),
      \`\${timestamp}: \${action} - 当前值: \${value}\`,
    ]);
  };

  const handleIncrement = () => {
    counter.increment();
    addLog("递增", counter.count + 1);
  };

  const handleDecrement = () => {
    counter.decrement();
    addLog("递减", counter.count - 1);
  };

  const handleReset = () => {
    counter.reset();
    addLog("重置", 0);
  };

  const handleSetValue = () => {
    const randomValue = Math.floor(Math.random() * 100);
    counter.setValue(randomValue);
    addLog("设置值", randomValue);
  };

  return (
    <div className="space-y-6">
      <div className="bg-white p-6 rounded-lg border border-gray-200">
        <h3 className="text-lg font-semibold mb-4">基础计数器</h3>

        <div className="text-center mb-6">
          <div className="text-4xl font-bold text-blue-600 mb-2">
            {counter.count}
          </div>
          <div className="text-sm text-gray-500">当前计数值</div>
        </div>

        <div className="flex flex-wrap gap-2 justify-center mb-4">
          <button
            onClick={handleIncrement}
            className="px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600 transition-colors"
          >
            +1 递增
          </button>
          <button
            onClick={handleDecrement}
            className="px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600 transition-colors"
          >
            -1 递减
          </button>
          <button
            onClick={handleReset}
            className="px-4 py-2 bg-gray-500 text-white rounded hover:bg-gray-600 transition-colors"
          >
            重置
          </button>
          <button
            onClick={handleSetValue}
            className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition-colors"
          >
            随机设置
          </button>
        </div>

        {logs.length > 0 && (
          <div className="bg-gray-50 p-3 rounded border">
            <div className="text-sm font-medium text-gray-700 mb-2">
              操作日志：
            </div>
            <div className="space-y-1">
              {logs.map((log, index) => (
                <div key={index} className="text-xs text-gray-600 font-mono">
                  {log}
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default BasicCounterDemo;
`,$=()=>{const[s,i]=a.useState([{id:1,name:"iPhone 15",price:999,stock:5},{id:2,name:"MacBook Pro",price:1999,stock:3},{id:3,name:"AirPods Pro",price:249,stock:10}]),n=({item:t})=>{const r=p(0,{min:0,max:t.stock,onChange:d=>{console.log(`${t.name} 数量变化为: ${d}`)}}),c=r.count*t.price;return e.jsxs("div",{className:"bg-white p-4 rounded-lg border border-gray-200",children:[e.jsxs("div",{className:"flex justify-between items-start mb-3",children:[e.jsxs("div",{children:[e.jsx("h4",{className:"font-semibold text-gray-800",children:t.name}),e.jsxs("p",{className:"text-sm text-gray-600",children:["$",t.price," / 件"]}),e.jsxs("p",{className:"text-xs text-gray-500",children:["库存: ",t.stock," 件"]})]}),e.jsxs("div",{className:"text-right",children:[e.jsxs("div",{className:"text-lg font-bold text-blue-600",children:["$",c.toLocaleString()]}),e.jsx("div",{className:"text-xs text-gray-500",children:"总价"})]})]}),e.jsxs("div",{className:"flex items-center justify-between",children:[e.jsxs("div",{className:"flex items-center space-x-2",children:[e.jsx("button",{onClick:r.decrement,disabled:!r.canDecrement,className:`w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold ${r.canDecrement?"bg-red-500 text-white hover:bg-red-600":"bg-gray-200 text-gray-400 cursor-not-allowed"}`,children:"-"}),e.jsx("div",{className:"w-12 text-center",children:e.jsx("span",{className:"text-lg font-semibold",children:r.count})}),e.jsx("button",{onClick:r.increment,disabled:!r.canIncrement,className:`w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold ${r.canIncrement?"bg-green-500 text-white hover:bg-green-600":"bg-gray-200 text-gray-400 cursor-not-allowed"}`,children:"+"})]}),e.jsxs("div",{className:"flex space-x-2",children:[e.jsx("button",{onClick:()=>r.setValue(t.stock),disabled:r.count===t.stock,className:"px-3 py-1 text-xs bg-blue-500 text-white rounded hover:bg-blue-600 disabled:bg-gray-300 disabled:cursor-not-allowed",children:"最大"}),e.jsx("button",{onClick:r.reset,disabled:r.count===0,className:"px-3 py-1 text-xs bg-gray-500 text-white rounded hover:bg-gray-600 disabled:bg-gray-300 disabled:cursor-not-allowed",children:"清空"})]})]}),r.count>0&&e.jsx("div",{className:"mt-2 text-xs text-green-600",children:"✓ 已添加到购物车"})]})};return s.reduce((t,r)=>t,0),e.jsxs("div",{className:"space-y-6",children:[e.jsxs("div",{className:"bg-gradient-to-r from-blue-50 to-purple-50 p-6 rounded-lg border",children:[e.jsx("h3",{className:"text-lg font-semibold mb-4",children:"购物车计数器"}),e.jsx("p",{className:"text-sm text-gray-600 mb-4",children:"每个商品都有独立的计数器，支持库存限制和数量控制。"}),e.jsx("div",{className:"space-y-4",children:s.map(t=>e.jsx(n,{item:t},t.id))})]}),e.jsxs("div",{className:"bg-gray-50 p-4 rounded-lg",children:[e.jsx("h4",{className:"font-medium text-gray-800 mb-2",children:"使用场景"}),e.jsxs("div",{className:"text-sm text-gray-600 space-y-1",children:[e.jsxs("p",{children:["• ",e.jsx("strong",{children:"电商购物车"}),"：商品数量选择，库存限制"]}),e.jsxs("p",{children:["• ",e.jsx("strong",{children:"表单数值输入"}),"：年龄、数量等数值输入控制"]}),e.jsxs("p",{children:["• ",e.jsx("strong",{children:"游戏计分"}),"：分数统计，等级控制"]}),e.jsxs("p",{children:["• ",e.jsx("strong",{children:"设置面板"}),"：音量、亮度等数值调节"]})]})]})]})},P=`import React, { useState } from 'react';
import { useAdvancedCounter } from './useCounterHook';

const ShoppingCartDemo: React.FC = () => {
  const [cartItems, setCartItems] = useState([
    { id: 1, name: 'iPhone 15', price: 999, stock: 5 },
    { id: 2, name: 'MacBook Pro', price: 1999, stock: 3 },
    { id: 3, name: 'AirPods Pro', price: 249, stock: 10 }
  ]);

  const CartItem: React.FC<{ item: typeof cartItems[0] }> = ({ item }) => {
    const counter = useAdvancedCounter(0, {
      min: 0,
      max: item.stock,
      onChange: (value) => {
        console.log(\`\${item.name} 数量变化为: \${value}\`);
      }
    });

    const totalPrice = counter.count * item.price;

    return (
      <div className="bg-white p-4 rounded-lg border border-gray-200">
        <div className="flex justify-between items-start mb-3">
          <div>
            <h4 className="font-semibold text-gray-800">{item.name}</h4>
            <p className="text-sm text-gray-600">\${item.price} / 件</p>
            <p className="text-xs text-gray-500">库存: {item.stock} 件</p>
          </div>
          <div className="text-right">
            <div className="text-lg font-bold text-blue-600">
              \${totalPrice.toLocaleString()}
            </div>
            <div className="text-xs text-gray-500">总价</div>
          </div>
        </div>

        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <button
              onClick={counter.decrement}
              disabled={!counter.canDecrement}
              className={\`w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold \${
                counter.canDecrement
                  ? 'bg-red-500 text-white hover:bg-red-600'
                  : 'bg-gray-200 text-gray-400 cursor-not-allowed'
              }\`}
            >
              -
            </button>
            
            <div className="w-12 text-center">
              <span className="text-lg font-semibold">{counter.count}</span>
            </div>
            
            <button
              onClick={counter.increment}
              disabled={!counter.canIncrement}
              className={\`w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold \${
                counter.canIncrement
                  ? 'bg-green-500 text-white hover:bg-green-600'
                  : 'bg-gray-200 text-gray-400 cursor-not-allowed'
              }\`}
            >
              +
            </button>
          </div>

          <div className="flex space-x-2">
            <button
              onClick={() => counter.setValue(item.stock)}
              disabled={counter.count === item.stock}
              className="px-3 py-1 text-xs bg-blue-500 text-white rounded hover:bg-blue-600 disabled:bg-gray-300 disabled:cursor-not-allowed"
            >
              最大
            </button>
            <button
              onClick={counter.reset}
              disabled={counter.count === 0}
              className="px-3 py-1 text-xs bg-gray-500 text-white rounded hover:bg-gray-600 disabled:bg-gray-300 disabled:cursor-not-allowed"
            >
              清空
            </button>
          </div>
        </div>

        {counter.count > 0 && (
          <div className="mt-2 text-xs text-green-600">
            ✓ 已添加到购物车
          </div>
        )}
      </div>
    );
  };

  const totalItems = cartItems.reduce((sum, item) => {
    // 这里我们需要获取每个商品的计数，但由于组件隔离，我们用模拟数据
    return sum;
  }, 0);

  return (
    <div className="space-y-6">
      <div className="bg-gradient-to-r from-blue-50 to-purple-50 p-6 rounded-lg border">
        <h3 className="text-lg font-semibold mb-4">购物车计数器</h3>
        <p className="text-sm text-gray-600 mb-4">
          每个商品都有独立的计数器，支持库存限制和数量控制。
        </p>
        
        <div className="space-y-4">
          {cartItems.map(item => (
            <CartItem key={item.id} item={item} />
          ))}
        </div>
      </div>

      <div className="bg-gray-50 p-4 rounded-lg">
        <h4 className="font-medium text-gray-800 mb-2">使用场景</h4>
        <div className="text-sm text-gray-600 space-y-1">
          <p>• <strong>电商购物车</strong>：商品数量选择，库存限制</p>
          <p>• <strong>表单数值输入</strong>：年龄、数量等数值输入控制</p>
          <p>• <strong>游戏计分</strong>：分数统计，等级控制</p>
          <p>• <strong>设置面板</strong>：音量、亮度等数值调节</p>
        </div>
      </div>
    </div>
  );
};

export default ShoppingCartDemo;`,R=()=>e.jsx(j,{title:"useCounter - 计数器Hook",description:"useCounter 是一个用于管理数值状态的自定义 Hook，提供递增、递减、重置等操作，支持范围限制、步长控制和回调功能。",overview:[{title:"核心概念",items:["数值状态管理","基础操作方法","范围控制","步长控制"]},{title:"主要优势",items:["简化数值操作","边界安全","回调支持","性能优化"]},{title:"适用场景",items:["购物车数量","表单控件","游戏开发","设置面板"]},{title:"注意事项",items:["边界处理","步长设置","回调函数","初始值范围"]}],examples:[{title:"基础计数器演示",component:e.jsx(D,{}),description:"展示 useCounter 的基本功能，包括递增、递减、重置和直接设置值。",observationPoints:["点击递增/递减按钮时，数值会相应变化","重置按钮会将计数器恢复到初始值","随机设置会将计数器设置为随机值","所有操作都会记录在日志中，便于观察状态变化"],keyPoints:["useCounter 返回 count 值和操作方法","increment() 和 decrement() 用于递增和递减","reset() 恢复到初始值","setValue(number) 直接设置值"],commonTraps:["忘记设置合适的初始值","在渲染函数中直接调用操作方法","没有考虑数值溢出的情况"],solutions:["根据业务需求设置合理的初始值","在事件处理函数中调用操作方法","使用高级版本的 useCounter 设置边界限制"],importantTips:["基础版本适用于简单的计数场景","所有操作方法都使用 useCallback 优化性能","支持负数和小数的计数"],codeExample:{title:"基础计数器演示",code:S,highlights:"8,13,18,23"}},{title:"高级计数器演示",component:e.jsx(k,{}),description:"展示 useAdvancedCounter 的高级功能，包括范围限制、步长控制和回调。",observationPoints:["计数器被限制在 0-10 的范围内","每次递增/递减的步长为 2","到达边界时按钮会被禁用","进度条直观显示当前值的位置","值变化时会触发回调函数"],keyPoints:["支持 min 和 max 范围限制","可自定义 step 步长","提供 canIncrement 和 canDecrement 状态","支持 onChange、onIncrement、onDecrement 回调"],commonTraps:["设置的最小值大于最大值","步长设置为负数或零","在回调函数中修改计数器状态造成循环"],solutions:["验证边界值的合理性","确保步长为正数","避免在回调中直接修改当前计数器"],importantTips:["高级版本提供了更多的控制能力","边界检查是自动进行的","回调函数可用于日志记录和副作用处理"],codeExample:{title:"高级计数器演示",code:I,highlights:"16,27,38,48,52,58,59"}},{title:"购物车计数器演示",component:e.jsx($,{}),description:"展示在购物车场景中使用 useCounter 管理商品数量。",observationPoints:["每个商品都有独立的计数器实例","库存限制防止超量选择","实时计算商品总价","提供快捷操作：最大数量、清空","视觉反馈显示添加状态"],keyPoints:["多个计数器实例可以独立工作","结合业务逻辑进行库存控制","可以与其他状态管理结合使用","提供良好的用户交互体验"],commonTraps:["忘记处理库存为零的情况","没有同步购物车总数","状态更新时机不当"],solutions:["在计数器选项中设置正确的最大值","使用上层状态管理同步总数","合理使用 useEffect 处理副作用"],importantTips:["实际项目中通常需要与后端 API 同步","考虑添加防抖处理频繁操作","提供清晰的视觉反馈提升用户体验"],codeExample:{highlights:"30,49,105,115,125,140,155",title:"购物车计数器演示",code:P}}],tutorial:{concepts:["useCounter 是一个专门用于数值状态管理的自定义 Hook","基础版本提供简单的递增、递减、重置功能","高级版本增加了范围限制、步长控制、回调等功能","使用 useCallback 优化性能，避免不必要的重渲染","适用于各种需要数值操作的场景"],steps:["定义 useCounter Hook，接收初始值参数","使用 useState 管理数值状态","创建 increment 和 decrement 函数","创建 reset 和 setValue 函数","使用 useCallback 优化函数引用","高级版本添加边界检查和回调支持","返回状态值和所有操作方法"],tips:["根据使用场景选择基础版本或高级版本","合理设置初始值、最小值、最大值和步长","使用 TypeScript 提供更好的类型安全","在复杂场景中结合其他 Hook 使用","考虑性能优化，避免不必要的重渲染"]},interview:{questions:[{question:"useCounter 相比直接使用 useState 有什么优势？",answer:"useCounter 封装了常见的数值操作逻辑，提供了统一的 API 接口，减少了样板代码。它还提供了边界检查、步长控制、回调支持等高级功能，使用 useCallback 优化性能，并且代码更加语义化和易于维护。"},{question:"如何实现一个支持范围限制的 useCounter？",answer:"可以在 useCounter 中添加 min 和 max 参数，在 increment 和 decrement 方法中使用 Math.min 和 Math.max 进行边界检查。同时提供 canIncrement 和 canDecrement 状态，让组件能够根据边界状态禁用相应的操作按钮。"},{question:"useCounter 在什么场景下最有用？",answer:"useCounter 在以下场景最有用：1) 购物车商品数量管理；2) 表单中的数值输入控制；3) 游戏中的分数、生命值管理；4) 设置面板中的参数调节；5) 分页组件的页码控制。任何需要数值递增递减操作的场景都适用。"},{question:"如何处理 useCounter 的性能优化？",answer:"主要通过以下方式优化：1) 使用 useCallback 缓存所有操作方法；2) 避免在渲染函数中直接调用操作方法；3) 对于频繁变化的场景，考虑添加防抖处理；4) 在复杂组件中使用 React.memo 避免不必要的重渲染；5) 合理设置依赖数组，避免过度更新。"},{question:"useCounter 如何与表单库集成？",answer:"与表单库集成时需要：1) 将 useCounter 的值同步到表单状态中；2) 监听表单的重置事件，同步重置计数器；3) 在表单验证中考虑数值范围的验证；4) 可以创建适配器组件，将 useCounter 包装成表单控件；5) 处理表单提交时的数值格式化。"}],keyPoints:["useCounter 简化了数值状态的管理，提供完整的操作接口","高级版本支持范围限制、步长控制和回调功能","使用 useCallback 优化性能，避免不必要的重渲染","适用于购物车、表单、游戏、设置等多种场景","可以与其他 Hook 和状态管理库很好地集成"]},bestPractices:{dos:["根据业务需求设置合理的初始值和边界","在事件处理函数中调用操作方法","使用 TypeScript 提供类型安全","为复杂场景选择高级版本的 useCounter","结合 useCallback 优化性能","提供清晰的 UI 反馈显示当前状态","在购物车等场景中正确处理库存限制"],donts:["不要在渲染函数中直接调用操作方法","不要设置不合理的边界值（min > max）","不要在回调函数中创建循环依赖","不要忽略边界状态的 UI 处理","不要过度使用 useCounter，简单场景直接用 useState","不要忘记处理异步操作中的状态同步","不要在每次渲染时创建新的回调函数"],patterns:["购物车模式：使用 useCounter 管理商品数量，结合库存限制","表单控件模式：在数值输入框中使用 useCounter 提供递增递减按钮","游戏计分模式：使用 useCounter 管理分数、等级等数值","设置面板模式：用于音量、亮度等参数的调节控制","分页控制模式：使用 useCounter 管理当前页码","步骤导航模式：在多步骤流程中使用 useCounter 管理当前步骤","计时器模式：结合 useEffect 实现倒计时或正计时功能"]}});export{R as default};
