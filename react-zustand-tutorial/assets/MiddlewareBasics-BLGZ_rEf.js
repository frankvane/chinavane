import{j as e,r as f}from"./index-BWM6UHr8.js";import{d as k}from"./devtools-DEjYmio-.js";import{c as S,C as B}from"./ComponentTemplate-ClBHhBQ8.js";const L=(o,s)=>(r,l,u)=>o((...i)=>{const g=l();r(...i);const d=l();console.log("[LOGGER] State Update:",{prevState:g,nextState:d,timestamp:new Date().toISOString()})},l,u),F=(o,s)=>(r,l,u)=>o((...i)=>{const g=l();r(...i);const d=l();{let n="unknown action";try{const m=new Error().stack;if(m){const v=m.split(`
`);for(const t of v)if(t.includes("incrementByStep")){n="incrementByStep";break}else if(t.includes("decrementByStep")){n="decrementByStep";break}else if(t.includes("increment")){n="increment";break}else if(t.includes("decrement")){n="decrement";break}else if(t.includes("reset")){n="reset";break}else if(t.includes("setStep")){n="setStep";break}else if(t.includes("clearHistory")){n="clearHistory";break}else if(t.includes("clearLogs")){n="clearLogs";break}}}catch{}if(n==="unknown action"&&i.length>0){const m=i[0];if(typeof m=="function")n=m.name||"anonymous function";else if(typeof m=="object"&&m!==null){const v=Object.keys(m);v.length>0?n=`update: ${v.join(", ")}`:n="state update"}else n=String(m)}const a={timestamp:new Date,action:n,prevState:JSON.parse(JSON.stringify(g)),nextState:JSON.parse(JSON.stringify(d))},y=[...d.logs||[],a].slice(-20);r({logs:y}),console.log("[ENHANCED] Enhanced Log:",a)}},l,u),T=(o,s)=>(r,l,u)=>{const c=(s==null?void 0:s.storage)||localStorage,i=(s==null?void 0:s.name)||"zustand-store",g=c.getItem(i);let d={};if(g)try{const a=JSON.parse(g);d=s!=null&&s.partialize?s.partialize(a):a}catch(a){console.warn("Failed to parse saved state:",a)}return{...o((...a)=>{r(...a);const b=l(),y=s!=null&&s.partialize?s.partialize(b):b;try{c.setItem(i,JSON.stringify(y))}catch(m){console.warn("Failed to save state:",m)}},l,u),...d}},N=(o,s)=>({count:0,step:1,history:[],lastUpdated:null,logs:[],increment:()=>o(r=>({count:r.count+1,history:[...r.history,r.count+1],lastUpdated:new Date})),decrement:()=>o(r=>({count:r.count-1,history:[...r.history,r.count-1],lastUpdated:new Date})),reset:()=>o({count:0,history:[0],lastUpdated:new Date}),setStep:r=>o({step:r}),incrementByStep:()=>{const{count:r,step:l}=s();o({count:r+l,history:[...s().history,r+l],lastUpdated:new Date})},decrementByStep:()=>{const{count:r,step:l}=s();o({count:r-l,history:[...s().history,r-l],lastUpdated:new Date})},clearHistory:()=>o({history:[]}),clearLogs:()=>o({logs:[]})}),j=S(N),C=S(L(N)),x=S(k(N,{name:"Counter Store",enabled:!0})),h=S(T(N,{name:"counter-store",partialize:o=>({count:o.count,step:o.step,history:o.history})})),p=S(k(T(F(N),{name:"full-counter-store",partialize:o=>({count:o.count,step:o.step,history:o.history})}),{name:"Full Featured Counter",enabled:!0})),P=()=>{const o=j(i=>i.count),s=j(i=>i.increment),r=j(i=>i.decrement),l=C(i=>i.count),u=C(i=>i.increment),c=C(i=>i.decrement);return e.jsxs("div",{className:"p-6 bg-white rounded-lg shadow-md",children:[e.jsx("h4",{className:"text-lg font-semibold text-gray-800 mb-4",children:"基础中间件对比"}),e.jsxs("div",{className:"grid md:grid-cols-2 gap-6",children:[e.jsxs("div",{className:"p-4 bg-gray-50 rounded border",children:[e.jsx("h5",{className:"font-medium text-gray-700 mb-3",children:"基础 Store（无中间件）"}),e.jsx("div",{className:"text-2xl font-bold text-blue-600 mb-3",children:o}),e.jsxs("div",{className:"flex gap-2",children:[e.jsx("button",{onClick:r,className:"px-3 py-2 bg-red-500 text-white rounded hover:bg-red-600",children:"-1"}),e.jsx("button",{onClick:s,className:"px-3 py-2 bg-green-600 text-white rounded hover:bg-green-600",children:"+1"})]}),e.jsx("div",{className:"mt-2 text-xs text-gray-500",children:"无日志输出，状态变化静默"})]}),e.jsxs("div",{className:"p-4 bg-green-50 rounded border",children:[e.jsx("h5",{className:"font-medium text-green-700 mb-3",children:"日志中间件 Store"}),e.jsx("div",{className:"text-2xl font-bold text-green-600 mb-3",children:l}),e.jsxs("div",{className:"flex gap-2",children:[e.jsx("button",{onClick:c,className:"px-3 py-2 bg-red-500 text-white rounded hover:bg-red-600",children:"-1"}),e.jsx("button",{onClick:u,className:"px-3 py-2 bg-green-600 text-white rounded hover:bg-green-600",children:"+1"})]}),e.jsx("div",{className:"mt-2 text-xs text-green-600",children:"查看控制台，每次状态变化都有日志输出"})]})]}),e.jsx("div",{className:"mt-4 p-3 bg-yellow-50 rounded border border-yellow-200",children:e.jsxs("div",{className:"text-sm text-yellow-800",children:[e.jsx("strong",{children:"观察要点："}),e.jsxs("ul",{className:"mt-1 ml-4 list-disc",children:[e.jsx("li",{children:"基础 Store 状态变化无日志"}),e.jsx("li",{children:"日志中间件 Store 在控制台输出状态变化"}),e.jsx("li",{children:"两个 Store 状态独立，互不影响"}),e.jsx("li",{children:"中间件增强了 Store 的功能，但不改变核心 API"})]})]})})]})},I=()=>{const o=p(t=>t.count),s=p(t=>t.step),r=p(t=>t.history),l=p(t=>t.logs),u=p(t=>t.increment),c=p(t=>t.decrement),i=p(t=>t.incrementByStep),g=p(t=>t.decrementByStep),d=p(t=>t.setStep),n=p(t=>t.reset),a=p(t=>t.clearLogs),[b,y]=f.useState(!1);f.useEffect(()=>{y(!0)},[]);const m=()=>{localStorage.removeItem("full-counter-store"),window.location.reload()},v=t=>typeof t=="string"?t:t&&typeof t=="object"?`${t.action||"unknown"} - ${t.timestamp?new Date(t.timestamp).toLocaleTimeString():""}`:"unknown log";return e.jsxs("div",{className:"p-6 bg-white rounded-lg shadow-md",children:[e.jsx("h4",{className:"text-lg font-semibold text-gray-800 mb-4",children:"组合中间件演示"}),e.jsxs("div",{className:"grid md:grid-cols-3 gap-4",children:[e.jsxs("div",{className:"p-4 bg-gradient-to-br from-purple-50 to-pink-50 rounded border",children:[e.jsx("h5",{className:"font-medium text-purple-700 mb-3",children:"计数器"}),e.jsx("div",{className:"text-2xl font-bold text-purple-600 mb-3",children:o}),e.jsxs("div",{className:"text-sm text-gray-600 mb-3",children:["步长: ",e.jsx("span",{className:"font-semibold",children:s})]}),e.jsxs("div",{className:"space-y-2",children:[e.jsxs("div",{className:"flex gap-2",children:[e.jsx("button",{onClick:c,className:"px-3 py-2 bg-red-500 text-white rounded hover:bg-red-600",children:"-1"}),e.jsx("button",{onClick:u,className:"px-3 py-2 bg-green-600 text-white rounded hover:bg-green-600",children:"+1"})]}),e.jsxs("div",{className:"flex gap-2",children:[e.jsxs("button",{onClick:g,className:"px-3 py-2 bg-red-400 text-white rounded hover:bg-red-500",children:["-",s]}),e.jsxs("button",{onClick:i,className:"px-3 py-2 bg-green-500 text-white rounded hover:bg-green-600",children:["+",s]})]}),e.jsxs("div",{className:"flex gap-2",children:[e.jsx("button",{onClick:()=>d(1),className:"px-2 py-1 bg-gray-500 text-white rounded text-sm",children:"步长1"}),e.jsx("button",{onClick:()=>d(5),className:"px-2 py-1 bg-gray-500 text-white rounded text-sm",children:"步长5"})]}),e.jsx("button",{onClick:n,className:"w-full px-2 py-1 bg-orange-500 text-white rounded text-sm",children:"重置"})]})]}),e.jsxs("div",{className:"p-4 bg-gradient-to-br from-blue-50 to-cyan-50 rounded border",children:[e.jsx("h5",{className:"font-medium text-blue-700 mb-3",children:"历史记录"}),e.jsx("div",{className:"max-h-32 overflow-y-auto mb-3",children:r.length===0?e.jsx("div",{className:"text-gray-500 text-sm",children:"暂无历史"}):e.jsx("div",{className:"space-y-1",children:r.slice(-6).map((t,w)=>e.jsx("div",{className:"text-sm bg-white p-1 rounded",children:t},w))})}),e.jsx("div",{className:"text-xs text-gray-600",children:"最近 6 条记录"})]}),e.jsxs("div",{className:"p-4 bg-gradient-to-br from-green-50 to-emerald-50 rounded border",children:[e.jsx("h5",{className:"font-medium text-green-700 mb-3",children:"操作日志"}),e.jsx("div",{className:"max-h-32 overflow-y-auto mb-3",children:l.length===0?e.jsx("div",{className:"text-gray-500 text-sm",children:"暂无日志"}):e.jsx("div",{className:"space-y-1",children:l.slice(-6).map((t,w)=>e.jsx("div",{className:"text-xs bg-white p-1 rounded",children:v(t)},w))})}),e.jsx("div",{className:"flex gap-2",children:e.jsx("button",{onClick:a,className:"px-2 py-1 bg-red-400 text-white rounded text-xs",children:"清除日志"})})]})]}),e.jsxs("div",{className:"mt-4 p-3 bg-gradient-to-r from-yellow-50 to-orange-50 rounded border border-yellow-200",children:[e.jsxs("div",{className:"text-sm text-yellow-800",children:[e.jsx("strong",{children:"组合中间件功能："}),e.jsxs("ul",{className:"mt-1 ml-4 list-disc",children:[e.jsxs("li",{children:[e.jsx("strong",{children:"日志中间件："}),"控制台输出状态变化，内部记录操作日志"]}),e.jsxs("li",{children:[e.jsx("strong",{children:"持久化中间件："}),"自动保存 count、step、history 到 localStorage"]}),e.jsxs("li",{children:[e.jsx("strong",{children:"DevTools 中间件："}),"支持 Redux DevTools 调试和时间旅行"]}),e.jsxs("li",{children:[e.jsx("strong",{children:"中间件组合："}),"多个中间件按顺序执行，功能叠加"]}),e.jsxs("li",{children:[e.jsx("strong",{children:"步长操作："}),"设置步长后，+/- 按钮会按指定步长操作"]})]})]}),e.jsx("div",{className:"mt-2 flex gap-2",children:e.jsx("button",{onClick:m,className:"px-3 py-1 bg-red-500 text-white rounded text-sm hover:bg-red-600",children:"清除存储并刷新"})})]}),b&&e.jsxs("div",{className:"mt-3 p-2 bg-gray-100 rounded text-xs",children:[e.jsxs("div",{children:["localStorage: ",localStorage.getItem("full-counter-store")?"已保存":"无数据"]}),e.jsx("div",{className:"text-gray-500",children:"打开控制台查看日志输出，安装 Redux DevTools 查看状态变化"})]})]})},E=()=>{const o=x(n=>n.count),s=x(n=>n.step),r=x(n=>n.history),l=x(n=>n.increment),u=x(n=>n.decrement),c=x(n=>n.setStep),i=x(n=>n.reset),g=x(n=>n.incrementByStep),d=x(n=>n.decrementByStep);return e.jsxs("div",{className:"p-6 bg-white rounded-lg shadow-md",children:[e.jsx("h4",{className:"text-lg font-semibold text-gray-800 mb-4",children:"DevTools 中间件演示"}),e.jsxs("div",{className:"grid md:grid-cols-2 gap-6",children:[e.jsxs("div",{className:"p-4 bg-indigo-50 rounded border",children:[e.jsx("h5",{className:"font-medium text-indigo-700 mb-3",children:"计数器控制"}),e.jsx("div",{className:"text-2xl font-bold text-indigo-600 mb-3",children:o}),e.jsxs("div",{className:"text-sm text-gray-600 mb-3",children:["步长: ",e.jsx("span",{className:"font-semibold",children:s})]}),e.jsxs("div",{className:"space-y-2",children:[e.jsxs("div",{className:"flex gap-2",children:[e.jsx("button",{onClick:u,className:"px-3 py-2 bg-red-500 text-white rounded hover:bg-red-600",children:"-1"}),e.jsx("button",{onClick:l,className:"px-3 py-2 bg-green-600 text-white rounded hover:bg-green-600",children:"+1"})]}),e.jsxs("div",{className:"flex gap-2",children:[e.jsxs("button",{onClick:d,className:"px-3 py-2 bg-red-400 text-white rounded hover:bg-red-500",children:["-",s]}),e.jsxs("button",{onClick:g,className:"px-3 py-2 bg-green-500 text-white rounded hover:bg-green-600",children:["+",s]})]}),e.jsxs("div",{className:"flex gap-2",children:[e.jsx("button",{onClick:()=>c(1),className:"px-2 py-1 bg-gray-500 text-white rounded text-sm",children:"步长1"}),e.jsx("button",{onClick:()=>c(5),className:"px-2 py-1 bg-gray-500 text-white rounded text-sm",children:"步长5"}),e.jsx("button",{onClick:i,className:"px-2 py-1 bg-orange-500 text-white rounded text-sm",children:"重置"})]})]})]}),e.jsxs("div",{className:"p-4 bg-cyan-50 rounded border",children:[e.jsx("h5",{className:"font-medium text-cyan-700 mb-3",children:"历史记录"}),e.jsx("div",{className:"max-h-32 overflow-y-auto mb-3",children:r.length===0?e.jsx("div",{className:"text-gray-500 text-sm",children:"暂无历史记录"}):e.jsx("div",{className:"space-y-1",children:r.slice(-8).map((n,a)=>e.jsx("div",{className:"text-sm bg-white p-1 rounded",children:n},a))})}),e.jsx("div",{className:"text-xs text-gray-600",children:"显示最近 8 条记录"})]})]}),e.jsx("div",{className:"mt-4 p-3 bg-blue-50 rounded border border-blue-200",children:e.jsxs("div",{className:"text-sm text-blue-800",children:[e.jsx("strong",{children:"DevTools 使用说明："}),e.jsxs("ul",{className:"mt-1 ml-4 list-disc",children:[e.jsx("li",{children:"安装 Redux DevTools 浏览器扩展"}),e.jsx("li",{children:"打开浏览器开发者工具，切换到 Redux 标签"}),e.jsx("li",{children:"操作计数器，观察状态变化和 action 历史"}),e.jsx("li",{children:"可以时间旅行到任意历史状态"}),e.jsx("li",{children:"支持导入/导出状态快照"})]})]})}),e.jsxs("div",{className:"mt-3 p-2 bg-gray-100 rounded text-xs",children:[e.jsxs("div",{children:["当前状态: count=",o,", step=",s,", history.length=",r.length]}),e.jsx("div",{className:"text-gray-500",children:"每次操作都会在 DevTools 中记录，可以查看详细的状态变化过程"})]})]})},R=()=>{const o=h(a=>a.count),s=h(a=>a.step),r=h(a=>a.history),l=h(a=>a.incrementByStep),u=h(a=>a.decrementByStep),c=h(a=>a.setStep),i=h(a=>a.reset),[g,d]=f.useState(!1);f.useEffect(()=>{d(!0)},[]);const n=()=>{localStorage.removeItem("counter-store"),window.location.reload()};return e.jsxs("div",{className:"p-6 bg-white rounded-lg shadow-md",children:[e.jsx("h4",{className:"text-lg font-semibold text-gray-800 mb-4",children:"持久化中间件演示"}),e.jsxs("div",{className:"grid md:grid-cols-2 gap-6",children:[e.jsxs("div",{className:"p-4 bg-blue-50 rounded border",children:[e.jsx("h5",{className:"font-medium text-blue-700 mb-3",children:"计数器状态"}),e.jsx("div",{className:"text-2xl font-bold text-blue-600 mb-3",children:o}),e.jsxs("div",{className:"text-sm text-gray-600 mb-3",children:["步长: ",e.jsx("span",{className:"font-semibold",children:s})]}),e.jsxs("div",{className:"flex gap-2 mb-3",children:[e.jsxs("button",{onClick:u,className:"px-3 py-2 bg-red-500 text-white rounded hover:bg-red-600",children:["-",s]}),e.jsxs("button",{onClick:l,className:"px-3 py-2 bg-green-600 text-white rounded hover:bg-green-600",children:["+",s]})]}),e.jsxs("div",{className:"flex gap-2",children:[e.jsx("button",{onClick:()=>c(1),className:"px-2 py-1 bg-gray-500 text-white rounded text-sm",children:"步长1"}),e.jsx("button",{onClick:()=>c(5),className:"px-2 py-1 bg-gray-500 text-white rounded text-sm",children:"步长5"}),e.jsx("button",{onClick:i,className:"px-2 py-1 bg-orange-500 text-white rounded text-sm",children:"重置"})]})]}),e.jsxs("div",{className:"p-4 bg-purple-50 rounded border",children:[e.jsx("h5",{className:"font-medium text-purple-700 mb-3",children:"历史记录"}),e.jsx("div",{className:"max-h-32 overflow-y-auto mb-3",children:r.length===0?e.jsx("div",{className:"text-gray-500 text-sm",children:"暂无历史记录"}):e.jsx("div",{className:"space-y-1",children:r.slice(-10).map((a,b)=>e.jsx("div",{className:"text-sm bg-white p-1 rounded",children:a},b))})}),e.jsx("div",{className:"text-xs text-gray-600",children:"显示最近 10 条记录"})]})]}),e.jsxs("div",{className:"mt-4 p-3 bg-yellow-50 rounded border border-yellow-200",children:[e.jsxs("div",{className:"text-sm text-yellow-800",children:[e.jsx("strong",{children:"持久化测试："}),e.jsxs("ul",{className:"mt-1 ml-4 list-disc",children:[e.jsx("li",{children:"修改计数器状态后刷新页面，状态会自动恢复"}),e.jsx("li",{children:"只有 count、step、history 被持久化（partialize 配置）"}),e.jsx("li",{children:"lastUpdated 和 logs 不会被保存"}),e.jsx("li",{children:'点击"清除存储"按钮可重置所有数据'}),e.jsx("li",{children:"设置步长后，+/- 按钮会按指定步长操作"})]})]}),e.jsx("button",{onClick:n,className:"mt-2 px-3 py-1 bg-red-500 text-white rounded text-sm hover:bg-red-600",children:"清除存储并刷新"})]}),g&&e.jsx("div",{className:"mt-3 p-2 bg-gray-100 rounded text-xs",children:e.jsxs("div",{children:["localStorage 中的值: ",localStorage.getItem("counter-store")||"无"]})})]})},z=`import React from "react";
import { useBasicStore, useLoggedStore } from "../stores/counterStore";

const BasicMiddlewareDemo: React.FC = () => {
  const basicCount = useBasicStore((s) => s.count);
  const basicIncrement = useBasicStore((s) => s.increment);
  const basicDecrement = useBasicStore((s) => s.decrement);

  const loggedCount = useLoggedStore((s) => s.count);
  const loggedIncrement = useLoggedStore((s) => s.increment);
  const loggedDecrement = useLoggedStore((s) => s.decrement);

  return (
    <div className="p-6 bg-white rounded-lg shadow-md">
      <h4 className="text-lg font-semibold text-gray-800 mb-4">基础中间件对比</h4>
      
      <div className="grid md:grid-cols-2 gap-6">
        <div className="p-4 bg-gray-50 rounded border">
          <h5 className="font-medium text-gray-700 mb-3">基础 Store（无中间件）</h5>
          <div className="text-2xl font-bold text-blue-600 mb-3">{basicCount}</div>
          <div className="flex gap-2">
            <button
              onClick={basicDecrement}
              className="px-3 py-2 bg-red-500 text-white rounded hover:bg-red-600"
            >
              -1
            </button>
            <button
              onClick={basicIncrement}
              className="px-3 py-2 bg-green-600 text-white rounded hover:bg-green-600"
            >
              +1
            </button>
          </div>
          <div className="mt-2 text-xs text-gray-500">
            无日志输出，状态变化静默
          </div>
        </div>

        <div className="p-4 bg-green-50 rounded border">
          <h5 className="font-medium text-green-700 mb-3">日志中间件 Store</h5>
          <div className="text-2xl font-bold text-green-600 mb-3">{loggedCount}</div>
          <div className="flex gap-2">
            <button
              onClick={loggedDecrement}
              className="px-3 py-2 bg-red-500 text-white rounded hover:bg-red-600"
            >
              -1
            </button>
            <button
              onClick={loggedIncrement}
              className="px-3 py-2 bg-green-600 text-white rounded hover:bg-green-600"
            >
              +1
            </button>
          </div>
          <div className="mt-2 text-xs text-green-600">
            查看控制台，每次状态变化都有日志输出
          </div>
        </div>
      </div>

      <div className="mt-4 p-3 bg-yellow-50 rounded border border-yellow-200">
        <div className="text-sm text-yellow-800">
          <strong>观察要点：</strong>
          <ul className="mt-1 ml-4 list-disc">
            <li>基础 Store 状态变化无日志</li>
            <li>日志中间件 Store 在控制台输出状态变化</li>
            <li>两个 Store 状态独立，互不影响</li>
            <li>中间件增强了 Store 的功能，但不改变核心 API</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default BasicMiddlewareDemo;
`,M=`import React, { useEffect, useState } from "react";
import { useFullFeaturedStore } from "../stores/counterStore";

const CombinedMiddlewareDemo: React.FC = () => {
  const count = useFullFeaturedStore((s) => s.count);
  const step = useFullFeaturedStore((s) => s.step);
  const history = useFullFeaturedStore((s) => s.history);
  const logs = useFullFeaturedStore((s) => s.logs);
  const increment = useFullFeaturedStore((s) => s.increment);
  const decrement = useFullFeaturedStore((s) => s.decrement);
  const incrementByStep = useFullFeaturedStore((s) => s.incrementByStep);
  const decrementByStep = useFullFeaturedStore((s) => s.decrementByStep);
  const setStep = useFullFeaturedStore((s) => s.setStep);
  const reset = useFullFeaturedStore((s) => s.reset);
  const clearLogs = useFullFeaturedStore((s) => s.clearLogs);

  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  const clearStorage = () => {
    localStorage.removeItem("full-counter-store");
    window.location.reload();
  };

  // 格式化日志显示
  const formatLogEntry = (log: any) => {
    if (typeof log === 'string') {
      return log;
    }
    if (log && typeof log === 'object') {
      return \`\${log.action || 'unknown'} - \${log.timestamp ? new Date(log.timestamp).toLocaleTimeString() : ''}\`;
    }
    return 'unknown log';
  };

  return (
    <div className="p-6 bg-white rounded-lg shadow-md">
      <h4 className="text-lg font-semibold text-gray-800 mb-4">组合中间件演示</h4>
      
      <div className="grid md:grid-cols-3 gap-4">
        <div className="p-4 bg-gradient-to-br from-purple-50 to-pink-50 rounded border">
          <h5 className="font-medium text-purple-700 mb-3">计数器</h5>
          <div className="text-2xl font-bold text-purple-600 mb-3">{count}</div>
          <div className="text-sm text-gray-600 mb-3">
            步长: <span className="font-semibold">{step}</span>
          </div>
          <div className="space-y-2">
            <div className="flex gap-2">
              <button
                onClick={decrement}
                className="px-3 py-2 bg-red-500 text-white rounded hover:bg-red-600"
              >
                -1
              </button>
              <button
                onClick={increment}
                className="px-3 py-2 bg-green-600 text-white rounded hover:bg-green-600"
              >
                +1
              </button>
            </div>
            <div className="flex gap-2">
              <button
                onClick={decrementByStep}
                className="px-3 py-2 bg-red-400 text-white rounded hover:bg-red-500"
              >
                -{step}
              </button>
              <button
                onClick={incrementByStep}
                className="px-3 py-2 bg-green-500 text-white rounded hover:bg-green-600"
              >
                +{step}
              </button>
            </div>
            <div className="flex gap-2">
              <button
                onClick={() => setStep(1)}
                className="px-2 py-1 bg-gray-500 text-white rounded text-sm"
              >
                步长1
              </button>
              <button
                onClick={() => setStep(5)}
                className="px-2 py-1 bg-gray-500 text-white rounded text-sm"
              >
                步长5
              </button>
            </div>
            <button
              onClick={reset}
              className="w-full px-2 py-1 bg-orange-500 text-white rounded text-sm"
            >
              重置
            </button>
          </div>
        </div>

        <div className="p-4 bg-gradient-to-br from-blue-50 to-cyan-50 rounded border">
          <h5 className="font-medium text-blue-700 mb-3">历史记录</h5>
          <div className="max-h-32 overflow-y-auto mb-3">
            {history.length === 0 ? (
              <div className="text-gray-500 text-sm">暂无历史</div>
            ) : (
              <div className="space-y-1">
                {history.slice(-6).map((value, index) => (
                  <div key={index} className="text-sm bg-white p-1 rounded">
                    {value}
                  </div>
                ))}
              </div>
            )}
          </div>
          <div className="text-xs text-gray-600">
            最近 6 条记录
          </div>
        </div>

        <div className="p-4 bg-gradient-to-br from-green-50 to-emerald-50 rounded border">
          <h5 className="font-medium text-green-700 mb-3">操作日志</h5>
          <div className="max-h-32 overflow-y-auto mb-3">
            {logs.length === 0 ? (
              <div className="text-gray-500 text-sm">暂无日志</div>
            ) : (
              <div className="space-y-1">
                {logs.slice(-6).map((log, index) => (
                  <div key={index} className="text-xs bg-white p-1 rounded">
                    {formatLogEntry(log)}
                  </div>
                ))}
              </div>
            )}
          </div>
          <div className="flex gap-2">
            <button
              onClick={clearLogs}
              className="px-2 py-1 bg-red-400 text-white rounded text-xs"
            >
              清除日志
            </button>
          </div>
        </div>
      </div>

      <div className="mt-4 p-3 bg-gradient-to-r from-yellow-50 to-orange-50 rounded border border-yellow-200">
        <div className="text-sm text-yellow-800">
          <strong>组合中间件功能：</strong>
          <ul className="mt-1 ml-4 list-disc">
            <li><strong>日志中间件：</strong>控制台输出状态变化，内部记录操作日志</li>
            <li><strong>持久化中间件：</strong>自动保存 count、step、history 到 localStorage</li>
            <li><strong>DevTools 中间件：</strong>支持 Redux DevTools 调试和时间旅行</li>
            <li><strong>中间件组合：</strong>多个中间件按顺序执行，功能叠加</li>
            <li><strong>步长操作：</strong>设置步长后，+/- 按钮会按指定步长操作</li>
          </ul>
        </div>
        <div className="mt-2 flex gap-2">
          <button
            onClick={clearStorage}
            className="px-3 py-1 bg-red-500 text-white rounded text-sm hover:bg-red-600"
          >
            清除存储并刷新
          </button>
        </div>
      </div>

      {isClient && (
        <div className="mt-3 p-2 bg-gray-100 rounded text-xs">
          <div>localStorage: {localStorage.getItem("full-counter-store") ? "已保存" : "无数据"}</div>
          <div className="text-gray-500">
            打开控制台查看日志输出，安装 Redux DevTools 查看状态变化
          </div>
        </div>
      )}
    </div>
  );
};

export default CombinedMiddlewareDemo;
`,U=`import React from "react";\r
import { useDevtoolsStore } from "../stores/counterStore";\r
\r
const DevtoolsDemo: React.FC = () => {\r
  const count = useDevtoolsStore((s) => s.count);\r
  const step = useDevtoolsStore((s) => s.step);\r
  const history = useDevtoolsStore((s) => s.history);\r
  const increment = useDevtoolsStore((s) => s.increment);\r
  const decrement = useDevtoolsStore((s) => s.decrement);\r
  const setStep = useDevtoolsStore((s) => s.setStep);\r
  const reset = useDevtoolsStore((s) => s.reset);\r
  const incrementByStep = useDevtoolsStore((s) => s.incrementByStep);\r
  const decrementByStep = useDevtoolsStore((s) => s.decrementByStep);\r
\r
  return (\r
    <div className="p-6 bg-white rounded-lg shadow-md">\r
      <h4 className="text-lg font-semibold text-gray-800 mb-4">DevTools 中间件演示</h4>\r
      \r
      <div className="grid md:grid-cols-2 gap-6">\r
        <div className="p-4 bg-indigo-50 rounded border">\r
          <h5 className="font-medium text-indigo-700 mb-3">计数器控制</h5>\r
          <div className="text-2xl font-bold text-indigo-600 mb-3">{count}</div>\r
          <div className="text-sm text-gray-600 mb-3">\r
            步长: <span className="font-semibold">{step}</span>\r
          </div>\r
          \r
          <div className="space-y-2">\r
            <div className="flex gap-2">\r
              <button\r
                onClick={decrement}\r
                className="px-3 py-2 bg-red-500 text-white rounded hover:bg-red-600"\r
              >\r
                -1\r
              </button>\r
              <button\r
                onClick={increment}\r
                className="px-3 py-2 bg-green-600 text-white rounded hover:bg-green-600"\r
              >\r
                +1\r
              </button>\r
            </div>\r
            \r
            <div className="flex gap-2">\r
              <button\r
                onClick={decrementByStep}\r
                className="px-3 py-2 bg-red-400 text-white rounded hover:bg-red-500"\r
              >\r
                -{step}\r
              </button>\r
              <button\r
                onClick={incrementByStep}\r
                className="px-3 py-2 bg-green-500 text-white rounded hover:bg-green-600"\r
              >\r
                +{step}\r
              </button>\r
            </div>\r
            \r
            <div className="flex gap-2">\r
              <button\r
                onClick={() => setStep(1)}\r
                className="px-2 py-1 bg-gray-500 text-white rounded text-sm"\r
              >\r
                步长1\r
              </button>\r
              <button\r
                onClick={() => setStep(5)}\r
                className="px-2 py-1 bg-gray-500 text-white rounded text-sm"\r
              >\r
                步长5\r
              </button>\r
              <button\r
                onClick={reset}\r
                className="px-2 py-1 bg-orange-500 text-white rounded text-sm"\r
              >\r
                重置\r
              </button>\r
            </div>\r
          </div>\r
        </div>\r
\r
        <div className="p-4 bg-cyan-50 rounded border">\r
          <h5 className="font-medium text-cyan-700 mb-3">历史记录</h5>\r
          <div className="max-h-32 overflow-y-auto mb-3">\r
            {history.length === 0 ? (\r
              <div className="text-gray-500 text-sm">暂无历史记录</div>\r
            ) : (\r
              <div className="space-y-1">\r
                {history.slice(-8).map((value, index) => (\r
                  <div key={index} className="text-sm bg-white p-1 rounded">\r
                    {value}\r
                  </div>\r
                ))}\r
              </div>\r
            )}\r
          </div>\r
          <div className="text-xs text-gray-600">\r
            显示最近 8 条记录\r
          </div>\r
        </div>\r
      </div>\r
\r
      <div className="mt-4 p-3 bg-blue-50 rounded border border-blue-200">\r
        <div className="text-sm text-blue-800">\r
          <strong>DevTools 使用说明：</strong>\r
          <ul className="mt-1 ml-4 list-disc">\r
            <li>安装 Redux DevTools 浏览器扩展</li>\r
            <li>打开浏览器开发者工具，切换到 Redux 标签</li>\r
            <li>操作计数器，观察状态变化和 action 历史</li>\r
            <li>可以时间旅行到任意历史状态</li>\r
            <li>支持导入/导出状态快照</li>\r
          </ul>\r
        </div>\r
      </div>\r
\r
      <div className="mt-3 p-2 bg-gray-100 rounded text-xs">\r
        <div>当前状态: count={count}, step={step}, history.length={history.length}</div>\r
        <div className="text-gray-500">\r
          每次操作都会在 DevTools 中记录，可以查看详细的状态变化过程\r
        </div>\r
      </div>\r
    </div>\r
  );\r
};\r
\r
export default DevtoolsDemo;\r
`,A=`import { StateCreator } from 'zustand';

// 日志中间件
export const logger = <T>(
  config: StateCreator<T>,
  options?: { enabled?: boolean }
) => (set: any, get: any, api: any) => {
  const store = config(
    (...args: any[]) => {
      const prevState = get();
      set(...args);
      const nextState = get();
      
      if (options?.enabled !== false) {
        console.log('[LOGGER] State Update:', {
          prevState,
          nextState,
          timestamp: new Date().toISOString(),
        });
      }
    },
    get,
    api
  );

  return store;
};

// 增强版日志中间件 - 记录操作历史
export const enhancedLogger = <T>(
  config: StateCreator<T>,
  options?: { maxLogs?: number; enabled?: boolean }
) => (set: any, get: any, api: any) => {
  const maxLogs = options?.maxLogs || 50;
  
  const store = config(
    (...args: any[]) => {
      const prevState = get();
      set(...args);
      const nextState = get();
      
      if (options?.enabled !== false) {
        // 生成更好的 action 名称
        let actionName = 'unknown action';
        
        try {
          // 获取调用栈信息
          const stack = new Error().stack;
          if (stack) {
            const lines = stack.split('\\n');
            // 查找包含 action 名称的行
            for (const line of lines) {
              if (line.includes('incrementByStep')) {
                actionName = 'incrementByStep';
                break;
              } else if (line.includes('decrementByStep')) {
                actionName = 'decrementByStep';
                break;
              } else if (line.includes('increment')) {
                actionName = 'increment';
                break;
              } else if (line.includes('decrement')) {
                actionName = 'decrement';
                break;
              } else if (line.includes('reset')) {
                actionName = 'reset';
                break;
              } else if (line.includes('setStep')) {
                actionName = 'setStep';
                break;
              } else if (line.includes('clearHistory')) {
                actionName = 'clearHistory';
                break;
              } else if (line.includes('clearLogs')) {
                actionName = 'clearLogs';
                break;
              }
            }
          }
        } catch (e) {
          // 如果调用栈分析失败，使用原来的逻辑
        }
        
        // 如果调用栈分析没有找到，使用原来的逻辑
        if (actionName === 'unknown action' && args.length > 0) {
          const firstArg = args[0];
          
          // 如果是函数，尝试从函数名获取
          if (typeof firstArg === 'function') {
            actionName = firstArg.name || 'anonymous function';
          }
          // 如果是对象，尝试从对象属性获取
          else if (typeof firstArg === 'object' && firstArg !== null) {
            const keys = Object.keys(firstArg);
            if (keys.length > 0) {
              actionName = \`update: \${keys.join(', ')}\`;
            } else {
              actionName = 'state update';
            }
          }
          // 如果是字符串或其他类型
          else {
            actionName = String(firstArg);
          }
        }
        
        const logEntry = {
          timestamp: new Date(),
          action: actionName,
          prevState: JSON.parse(JSON.stringify(prevState)),
          nextState: JSON.parse(JSON.stringify(nextState)),
        };
        
        // 添加到日志数组
        const currentLogs = (nextState as any).logs || [];
        const newLogs = [...currentLogs, logEntry].slice(-maxLogs);
        
        // 更新日志
        set({ logs: newLogs });
        
        console.log('[ENHANCED] Enhanced Log:', logEntry);
      }
    },
    get,
    api
  );

  return store;
};
`,O=`import React, { useEffect, useState } from "react";
import { usePersistedStore } from "../stores/counterStore";

const PersistDemo: React.FC = () => {
  const count = usePersistedStore((s) => s.count);
  const step = usePersistedStore((s) => s.step);
  const history = usePersistedStore((s) => s.history);
  const incrementByStep = usePersistedStore((s) => s.incrementByStep);
  const decrementByStep = usePersistedStore((s) => s.decrementByStep);
  const setStep = usePersistedStore((s) => s.setStep);
  const reset = usePersistedStore((s) => s.reset);

  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  const clearStorage = () => {
    localStorage.removeItem("counter-store");
    window.location.reload();
  };

  return (
    <div className="p-6 bg-white rounded-lg shadow-md">
      <h4 className="text-lg font-semibold text-gray-800 mb-4">持久化中间件演示</h4>
      
      <div className="grid md:grid-cols-2 gap-6">
        <div className="p-4 bg-blue-50 rounded border">
          <h5 className="font-medium text-blue-700 mb-3">计数器状态</h5>
          <div className="text-2xl font-bold text-blue-600 mb-3">{count}</div>
          <div className="text-sm text-gray-600 mb-3">
            步长: <span className="font-semibold">{step}</span>
          </div>
          <div className="flex gap-2 mb-3">
            <button
              onClick={decrementByStep}
              className="px-3 py-2 bg-red-500 text-white rounded hover:bg-red-600"
            >
              -{step}
            </button>
            <button
              onClick={incrementByStep}
              className="px-3 py-2 bg-green-600 text-white rounded hover:bg-green-600"
            >
              +{step}
            </button>
          </div>
          <div className="flex gap-2">
            <button
              onClick={() => setStep(1)}
              className="px-2 py-1 bg-gray-500 text-white rounded text-sm"
            >
              步长1
            </button>
            <button
              onClick={() => setStep(5)}
              className="px-2 py-1 bg-gray-500 text-white rounded text-sm"
            >
              步长5
            </button>
            <button
              onClick={reset}
              className="px-2 py-1 bg-orange-500 text-white rounded text-sm"
            >
              重置
            </button>
          </div>
        </div>

        <div className="p-4 bg-purple-50 rounded border">
          <h5 className="font-medium text-purple-700 mb-3">历史记录</h5>
          <div className="max-h-32 overflow-y-auto mb-3">
            {history.length === 0 ? (
              <div className="text-gray-500 text-sm">暂无历史记录</div>
            ) : (
              <div className="space-y-1">
                {history.slice(-10).map((value, index) => (
                  <div key={index} className="text-sm bg-white p-1 rounded">
                    {value}
                  </div>
                ))}
              </div>
            )}
          </div>
          <div className="text-xs text-gray-600">
            显示最近 10 条记录
          </div>
        </div>
      </div>

      <div className="mt-4 p-3 bg-yellow-50 rounded border border-yellow-200">
        <div className="text-sm text-yellow-800">
          <strong>持久化测试：</strong>
          <ul className="mt-1 ml-4 list-disc">
            <li>修改计数器状态后刷新页面，状态会自动恢复</li>
            <li>只有 count、step、history 被持久化（partialize 配置）</li>
            <li>lastUpdated 和 logs 不会被保存</li>
            <li>点击"清除存储"按钮可重置所有数据</li>
            <li>设置步长后，+/- 按钮会按指定步长操作</li>
          </ul>
        </div>
        <button
          onClick={clearStorage}
          className="mt-2 px-3 py-1 bg-red-500 text-white rounded text-sm hover:bg-red-600"
        >
          清除存储并刷新
        </button>
      </div>

      {isClient && (
        <div className="mt-3 p-2 bg-gray-100 rounded text-xs">
          <div>localStorage 中的值: {localStorage.getItem("counter-store") || "无"}</div>
        </div>
      )}
    </div>
  );
};

export default PersistDemo;
`,J=`import { StateCreator } from 'zustand';

// 持久化中间件
export const persist = <T>(
  config: StateCreator<T>,
  options?: { 
    name: string; 
    storage?: Storage;
    partialize?: (state: T) => Partial<T>;
  }
) => (set: any, get: any, api: any) => {
  const storage = options?.storage || localStorage;
  const key = options?.name || 'zustand-store';
  
  // 从存储中恢复状态
  const savedState = storage.getItem(key);
  let initialState = {};
  
  if (savedState) {
    try {
      const parsed = JSON.parse(savedState);
      initialState = options?.partialize ? options.partialize(parsed) : parsed;
    } catch (error) {
      console.warn('Failed to parse saved state:', error);
    }
  }
  
  const store = config(
    (...args: any[]) => {
      set(...args);
      const currentState = get();
      
      // 保存到存储
      const stateToSave = options?.partialize 
        ? options.partialize(currentState)
        : currentState;
        
      try {
        storage.setItem(key, JSON.stringify(stateToSave));
      } catch (error) {
        console.warn('Failed to save state:', error);
      }
    },
    get,
    api
  );

  return { ...store, ...initialState };
};

// 会话存储中间件
export const sessionPersist = <T>(
  config: StateCreator<T>,
  options: { 
    name: string; 
    partialize?: (state: T) => Partial<T>;
  }
) => persist(config, { 
  name: options.name, 
  storage: sessionStorage,
  partialize: options.partialize
});
`,D=`import { create } from "zustand";
import { devtools } from "../middleware/devtools";
import { logger, enhancedLogger } from "../middleware/logger";
import { persist } from "../middleware/persist";
import type { MiddlewareCounterState } from "../types";

// 基础 store 配置
const baseStore = (set: any, get: any) => ({
  count: 0,
  step: 1,
  history: [],
  lastUpdated: null,
  logs: [],

  increment: () =>
    set((state: any) => ({
      count: state.count + 1,
      history: [...state.history, state.count + 1],
      lastUpdated: new Date(),
    })),

  decrement: () =>
    set((state: any) => ({
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
  clearLogs: () => set({ logs: [] }),
});

// 1. 基础 store（无中间件）
export const useBasicStore = create<MiddlewareCounterState>(baseStore);

// 2. 带日志中间件的 store
export const useLoggedStore = create<MiddlewareCounterState>(
  logger(baseStore, { enabled: true })
);

// 3. 带 DevTools 中间件的 store
export const useDevtoolsStore = create<MiddlewareCounterState>(
  devtools(baseStore, { name: "Counter Store", enabled: true })
);

// 4. 带持久化中间件的 store
export const usePersistedStore = create<MiddlewareCounterState>(
  persist(baseStore, { 
    name: "counter-store",
    partialize: (state: any) => ({
      count: state.count,
      step: state.step,
      history: state.history,
    })
  })
);

// 5. 组合多个中间件的 store
export const useFullFeaturedStore = create<MiddlewareCounterState>(
  devtools(
    persist(
      enhancedLogger(baseStore, { enabled: true, maxLogs: 20 }),
      { 
        name: "full-counter-store",
        partialize: (state: any) => ({
          count: state.count,
          step: state.step,
          history: state.history,
        })
      }
    ),
    { name: "Full Featured Counter", enabled: true }
  )
);

// 选择器
export const selectCount = (state: MiddlewareCounterState) => state.count;
export const selectStep = (state: MiddlewareCounterState) => state.step;
export const selectHistory = (state: MiddlewareCounterState) => state.history;
export const selectLastUpdated = (state: MiddlewareCounterState) => state.lastUpdated;
export const selectLogs = (state: MiddlewareCounterState) => state.logs;
export const selectIsPositive = (state: MiddlewareCounterState) => state.count > 0;
export const selectHistoryLength = (state: MiddlewareCounterState) => state.history.length;
`,H=`export interface MiddlewareCounterState {
  count: number;
  step: number;
  history: number[];
  lastUpdated: Date | null;
  logs: string[];

  increment: () => void;
  decrement: () => void;
  reset: () => void;
  setStep: (step: number) => void;
  incrementByStep: () => void;
  decrementByStep: () => void;
  clearHistory: () => void;
  clearLogs: () => void;
}

// 中间件相关类型
export interface LogEntry {
  timestamp: Date;
  action: string;
  prevState: any;
  nextState: any;
}

export interface PersistConfig {
  name: string;
  storage?: Storage;
  partialize?: (state: any) => any;
  onRehydrateStorage?: () => void;
}

export interface DevtoolsConfig {
  name?: string;
  enabled?: boolean;
}

// 选择器类型
export type NumberSelector = (state: MiddlewareCounterState) => number;
export type BooleanSelector = (state: MiddlewareCounterState) => boolean;
export type DateSelector = (state: MiddlewareCounterState) => Date | null;
export type StringArraySelector = (state: MiddlewareCounterState) => string[];
export type LogEntrySelector = (state: MiddlewareCounterState) => LogEntry[];
`,Z=()=>e.jsx(B,{title:"中间件基础 (Middleware Basics)",description:"基于前面章节的计数器示例，演示如何通过中间件增强 Zustand Store 的功能，包括日志记录、状态持久化、DevTools 集成等。",overview:[{title:"核心概念",items:["中间件是函数式编程中的高阶函数概念","中间件包装原始 store 配置，增强其功能","支持多个中间件组合，按顺序执行","中间件不改变核心 API，只增强功能"]},{title:"主要优势",items:["功能增强：为 Store 添加日志、持久化、调试等功能","代码复用：中间件可在多个 Store 间共享使用","组合灵活：支持多个中间件按需组合","开发体验：提供强大的调试和开发工具支持"]},{title:"适用场景",items:["开发调试：需要状态变化日志和 DevTools 支持","数据持久化：需要自动保存/恢复用户状态","性能监控：需要记录操作历史和性能指标","功能扩展：需要为 Store 添加额外功能而不改变 API"]},{title:"注意事项",items:["中间件应该是纯函数，无副作用","合理组合中间件，避免功能冲突","生产环境禁用调试相关中间件","持久化时使用 partialize 选择需要保存的字段"]}],examples:[{title:"基础中间件对比",component:e.jsx(P,{}),description:"对比无中间件的基础 Store 与带日志中间件的 Store，观察功能差异",observationPoints:["基础 Store 状态变化静默，无任何输出","日志中间件 Store 在控制台输出详细的状态变化信息","两个 Store 状态完全独立，互不影响","中间件增强了功能但不改变核心 API","观察控制台日志格式和内容"],keyPoints:["中间件是高阶函数，包装原始 store 配置","日志中间件记录状态变化的前后对比","中间件可以控制台输出或内部记录操作历史","中间件执行顺序：外层先执行，内层后执行","中间件配置选项可以控制功能开关"],commonTraps:["在中间件中直接修改 state 而不是通过 set 函数","中间件中引入副作用或异步操作","忘记处理中间件配置选项的默认值","中间件组合时顺序不当导致功能冲突","在生产环境忘记禁用调试中间件"],solutions:["始终通过 set 函数更新状态，保持不可变性","将副作用操作放在 action 中，中间件只做增强","为中间件配置提供合理的默认值和类型检查","按功能依赖关系正确排序中间件组合","使用环境变量控制中间件的启用状态"],importantTips:["中间件是函数式编程的体现，保持纯函数特性","日志中间件有助于开发调试，但要注意性能影响","中间件可以记录操作历史，便于问题排查","合理使用中间件配置选项，避免过度记录","中间件组合时考虑执行顺序和性能影响"],preCode:[{title:"类型定义",code:H},{title:"日志中间件",code:A}],codeExample:{title:"基础中间件演示",code:z}},{title:"持久化中间件演示",component:e.jsx(R,{}),description:"演示状态持久化中间件，自动保存和恢复状态到 localStorage",observationPoints:["修改计数器状态后刷新页面，状态会自动恢复","只有配置的字段（count、step、history）被持久化","lastUpdated 和 logs 等字段不会被保存","可以手动清除存储来重置状态","观察 localStorage 中的实际存储内容"],keyPoints:["持久化中间件自动处理状态的保存和恢复","partialize 配置可以选择性保存部分状态","支持不同的存储后端（localStorage、sessionStorage）","持久化失败时有错误处理和降级机制","状态恢复时会合并到初始状态中"],commonTraps:["持久化所有状态导致存储空间过大","忘记处理序列化/反序列化错误","持久化包含函数或不可序列化的数据","没有考虑存储空间限制和清理策略","持久化敏感数据到客户端存储"],solutions:["使用 partialize 只保存必要的状态字段","添加 try-catch 处理序列化错误","避免持久化函数、Date 对象等不可序列化数据","实现存储空间管理和数据清理机制","敏感数据加密后存储或使用服务端存储"],importantTips:["持久化是增强用户体验的重要功能","合理选择持久化的字段，避免存储膨胀","考虑不同浏览器的存储限制和兼容性","持久化中间件可以与其他中间件组合使用","生产环境注意持久化数据的版本兼容性"],preCode:[{title:"持久化中间件",code:J},{title:"Store 配置",code:D}],codeExample:{title:"持久化演示",code:O}},{title:"DevTools 中间件演示",component:e.jsx(E,{}),description:"演示 DevTools 中间件，集成 Redux DevTools 进行状态调试",observationPoints:["安装 Redux DevTools 浏览器扩展后可以看到状态变化","每次操作都会在 DevTools 中记录为独立的 action","支持时间旅行功能，可以回退到任意历史状态","可以导入/导出状态快照进行调试","DevTools 显示详细的状态变化过程"],keyPoints:["DevTools 中间件集成 Redux DevTools 扩展","自动记录每个状态变化为可调试的 action","支持时间旅行、状态快照等高级调试功能","只在开发环境启用，生产环境自动禁用","可以自定义 DevTools 的显示名称和配置"],commonTraps:["在生产环境忘记禁用 DevTools 中间件","DevTools 记录过多状态导致性能问题","没有安装 Redux DevTools 扩展导致功能不可用","状态变化过于频繁导致 DevTools 卡顿","忘记处理 DevTools 不可用的情况"],solutions:["使用环境变量控制 DevTools 中间件的启用","合理控制状态变化的频率和复杂度","提供降级方案，DevTools 不可用时使用普通 store","对频繁变化的状态进行节流或防抖处理","添加 DevTools 可用性检查和错误处理"],importantTips:["DevTools 是开发调试的强大工具","合理使用时间旅行功能进行状态调试","状态快照功能便于问题复现和分享","DevTools 中间件与其他中间件可以完美组合","生产环境务必禁用调试相关功能"],preCode:[{title:"DevTools 中间件",code:"// DevTools 中间件代码"},{title:"Store 配置",code:D}],codeExample:{title:"DevTools 演示",code:U}},{title:"组合中间件演示",component:e.jsx(I,{}),description:"演示多个中间件的组合使用，展示功能叠加效果",observationPoints:["同时具备日志、持久化、DevTools 三种功能","日志中间件在控制台输出状态变化","持久化中间件自动保存状态到 localStorage","DevTools 中间件支持 Redux DevTools 调试","三个中间件按顺序执行，功能完美叠加"],keyPoints:["多个中间件可以组合使用，功能叠加","中间件执行顺序：外层先执行，内层后执行","组合中间件时要注意功能兼容性","每个中间件都有独立的配置选项","组合后的 store 具备所有中间件的功能"],commonTraps:["中间件组合顺序不当导致功能冲突","多个中间件重复处理同一功能","中间件配置选项冲突或覆盖","组合后性能下降或内存泄漏","没有考虑中间件之间的依赖关系"],solutions:["按功能依赖关系正确排序中间件","避免功能重复的中间件组合","统一管理中间件配置，避免冲突","监控组合后的性能表现","明确中间件之间的接口和依赖"],importantTips:["中间件组合是 Zustand 的强大特性","合理组合中间件可以构建功能丰富的 store","注意中间件的执行顺序和性能影响","组合中间件时要考虑功能兼容性","生产环境要谨慎选择启用的中间件"],preCode:[{title:"所有中间件",code:"// 日志、持久化、DevTools 中间件"},{title:"组合 Store",code:D}],codeExample:{title:"组合中间件演示",code:M}}],tutorial:{concepts:["中间件是高阶函数，包装 store 配置增强功能","中间件不改变核心 API，只添加额外功能","支持多个中间件组合，按顺序执行","中间件应该是纯函数，避免副作用"],steps:["定义基础 store 配置（状态和 actions）","创建中间件函数，包装 store 配置","在 create 函数中应用中间件","配置中间件选项，控制功能行为","组合多个中间件，实现功能叠加"],tips:["中间件执行顺序：外层先执行，内层后执行","使用环境变量控制调试中间件的启用","持久化时使用 partialize 选择必要字段","合理组合中间件，避免功能冲突"]},interview:{questions:[{question:"什么是中间件？它在 Zustand 中的作用是什么？",answer:"中间件是高阶函数，包装 store 配置来增强功能。在 Zustand 中，中间件可以添加日志记录、状态持久化、DevTools 集成等功能，而不改变核心 API。"},{question:"如何组合多个中间件？执行顺序是怎样的？",answer:"多个中间件通过函数嵌套组合，执行顺序是外层先执行，内层后执行。例如：devtools(persist(logger(store)))，执行顺序是 logger → persist → devtools。"},{question:"持久化中间件中 partialize 的作用是什么？",answer:"partialize 用于选择性地保存部分状态，避免持久化所有数据。可以指定哪些字段需要保存，哪些字段不需要保存，减少存储空间占用。"},{question:"如何在生产环境禁用调试中间件？",answer:"使用环境变量控制中间件的启用状态，如 process.env.NODE_ENV === 'development'。或者通过中间件配置选项的 enabled 参数控制。"},{question:"中间件中应该避免哪些操作？",answer:"避免直接修改 state、引入副作用、异步操作、访问外部可变状态。中间件应该是纯函数，只做功能增强，不改变核心逻辑。"},{question:"如何自定义中间件？",answer:"中间件是高阶函数，接收 store 配置和选项，返回增强后的配置。需要正确处理 set、get、api 参数，并保持中间件的纯函数特性。"}],keyPoints:["中间件是高阶函数，包装 store 配置增强功能","支持多个中间件组合，按顺序执行","中间件应该是纯函数，避免副作用","合理使用配置选项控制中间件行为","生产环境要谨慎选择启用的中间件","中间件组合时要考虑功能兼容性"]},bestPractices:{dos:["使用中间件增强 store 功能，保持核心 API 不变","合理组合中间件，按功能依赖关系排序","使用 partialize 选择性持久化状态","通过环境变量控制调试中间件的启用","为中间件提供合理的默认配置","监控中间件对性能的影响"],donts:["不要在中间件中直接修改 state","不要在中间件中引入副作用或异步操作","不要在生产环境启用调试中间件","不要持久化所有状态，避免存储膨胀","不要忽略中间件执行顺序的影响","不要组合功能冲突的中间件"],patterns:["日志中间件：记录状态变化和操作历史","持久化中间件：自动保存/恢复状态","DevTools 中间件：集成调试工具","时间旅行中间件：支持状态历史回退","验证中间件：状态更新前进行验证","缓存中间件：缓存计算结果"]}});export{Z as default};
