import{j as e}from"./index-BWM6UHr8.js";import{p as w,c as j}from"./middleware-CPUTVaT6.js";import{c as P,C as B}from"./ComponentTemplate-ClBHhBQ8.js";const o={count:0,step:1,theme:"light",settings:{autoSave:!0,notifications:!0,language:"zh-CN"},lastSaved:Date.now()},S=P()(w(n=>({...o,increment:()=>n(t=>({count:t.count+1,lastSaved:Date.now()})),decrement:()=>n(t=>({count:t.count-1,lastSaved:Date.now()})),incrementByStep:()=>n(t=>({count:t.count+t.step,lastSaved:Date.now()})),decrementByStep:()=>n(t=>({count:t.count-t.step,lastSaved:Date.now()})),setStep:t=>n({step:t,lastSaved:Date.now()}),toggleTheme:()=>n(t=>({theme:t.theme==="light"?"dark":"light",lastSaved:Date.now()})),updateSettings:t=>n(s=>({settings:{...s.settings,...t},lastSaved:Date.now()})),reset:()=>n({...o,lastSaved:Date.now()}),clearStorage:()=>{localStorage.removeItem("basic-persist-store"),n({...o,lastSaved:Date.now()})}}),{name:"basic-persist-store",storage:j(()=>localStorage)})),h=P()(w(n=>({...o,increment:()=>n(t=>({count:t.count+1,lastSaved:Date.now()})),decrement:()=>n(t=>({count:t.count-1,lastSaved:Date.now()})),incrementByStep:()=>n(t=>({count:t.count+t.step,lastSaved:Date.now()})),decrementByStep:()=>n(t=>({count:t.count-t.step,lastSaved:Date.now()})),setStep:t=>n({step:t,lastSaved:Date.now()}),toggleTheme:()=>n(t=>({theme:t.theme==="light"?"dark":"light",lastSaved:Date.now()})),updateSettings:t=>n(s=>({settings:{...s.settings,...t},lastSaved:Date.now()})),reset:()=>n({...o,lastSaved:Date.now()}),clearStorage:()=>{sessionStorage.removeItem("session-persist-store"),n({...o,lastSaved:Date.now()})}}),{name:"session-persist-store",storage:j(()=>sessionStorage)})),c=P()(w(n=>({...o,increment:()=>n(t=>({count:t.count+1,lastSaved:Date.now()})),decrement:()=>n(t=>({count:t.count-1,lastSaved:Date.now()})),incrementByStep:()=>n(t=>({count:t.count+t.step,lastSaved:Date.now()})),decrementByStep:()=>n(t=>({count:t.count-t.step,lastSaved:Date.now()})),setStep:t=>n({step:t,lastSaved:Date.now()}),toggleTheme:()=>n(t=>({theme:t.theme==="light"?"dark":"light",lastSaved:Date.now()})),updateSettings:t=>n(s=>({settings:{...s.settings,...t},lastSaved:Date.now()})),reset:()=>n({...o,lastSaved:Date.now()}),clearStorage:()=>{localStorage.removeItem("partial-persist-store"),n({...o,lastSaved:Date.now()})}}),{name:"partial-persist-store",storage:j(()=>localStorage),partialize:n=>({count:n.count,theme:n.theme,settings:n.settings})})),C=n=>n.count,f=n=>n.step,D=n=>n.theme,z=n=>n.settings,k=n=>n.lastSaved,L=()=>{const n=S(C),t=S(f),s=S(D),i=S(k),{increment:d,decrement:m,incrementByStep:p,decrementByStep:g,setStep:x,toggleTheme:u,reset:b,clearStorage:l}=S(),v=a=>new Date(a).toLocaleTimeString();return e.jsx("div",{className:"space-y-4",children:e.jsxs("div",{className:"p-4 bg-blue-50 border border-blue-200 rounded-lg",children:[e.jsx("h3",{className:"text-lg font-semibold text-blue-800 mb-2",children:"基础持久化演示 (localStorage)"}),e.jsx("p",{className:"text-blue-700 text-sm mb-4",children:"所有状态都会保存到 localStorage，刷新页面后状态会保持。"}),e.jsxs("div",{className:"grid grid-cols-2 gap-4 mb-4",children:[e.jsxs("div",{className:"bg-white p-3 rounded border",children:[e.jsx("div",{className:"text-sm text-gray-600",children:"当前计数"}),e.jsx("div",{className:"text-2xl font-bold text-blue-600",children:n})]}),e.jsxs("div",{className:"bg-white p-3 rounded border",children:[e.jsx("div",{className:"text-sm text-gray-600",children:"步长"}),e.jsx("div",{className:"text-2xl font-bold text-green-600",children:t})]})]}),e.jsxs("div",{className:"grid grid-cols-2 gap-4 mb-4",children:[e.jsxs("div",{className:"bg-white p-3 rounded border",children:[e.jsx("div",{className:"text-sm text-gray-600",children:"主题"}),e.jsx("div",{className:"text-lg font-medium text-purple-600 capitalize",children:s})]}),e.jsxs("div",{className:"bg-white p-3 rounded border",children:[e.jsx("div",{className:"text-sm text-gray-600",children:"最后保存"}),e.jsx("div",{className:"text-sm text-gray-500",children:v(i)})]})]}),e.jsxs("div",{className:"space-y-2",children:[e.jsxs("div",{className:"flex gap-2 flex-wrap",children:[e.jsx("button",{onClick:d,className:"px-3 py-1 bg-blue-500 text-white rounded hover:bg-blue-600 text-sm",children:"+1"}),e.jsx("button",{onClick:m,className:"px-3 py-1 bg-red-500 text-white rounded hover:bg-red-600 text-sm",children:"-1"}),e.jsxs("button",{onClick:p,className:"px-3 py-1 bg-green-500 text-white rounded hover:bg-green-600 text-sm",children:["+",t]}),e.jsxs("button",{onClick:g,className:"px-3 py-1 bg-orange-500 text-white rounded hover:bg-orange-600 text-sm",children:["-",t]}),e.jsx("button",{onClick:u,className:"px-3 py-1 bg-purple-500 text-white rounded hover:bg-purple-600 text-sm",children:"切换主题"}),e.jsx("button",{onClick:b,className:"px-3 py-1 bg-gray-500 text-white rounded hover:bg-gray-600 text-sm",children:"重置"}),e.jsx("button",{onClick:l,className:"px-3 py-1 bg-red-600 text-white rounded hover:bg-red-700 text-sm",children:"清空存储"})]}),e.jsxs("div",{className:"flex gap-2 items-center",children:[e.jsx("label",{className:"text-sm text-gray-600",children:"步长:"}),e.jsx("input",{type:"number",value:t,onChange:a=>x(Number(a.target.value)),className:"w-20 px-2 py-1 border rounded text-sm",min:"1",max:"10"})]})]}),e.jsx("div",{className:"mt-4 p-3 bg-yellow-50 border border-yellow-200 rounded",children:e.jsx("p",{className:"text-yellow-800 text-sm",children:'⚠️提示：修改状态后刷新页面，状态会自动恢复。点击"清空存储"后刷新页面会重置为初始状态。'})})]})})},R=()=>{const n=c(C),t=c(f),s=c(D),i=c(z),d=c(k),{increment:m,decrement:p,incrementByStep:g,decrementByStep:x,setStep:u,toggleTheme:b,updateSettings:l,reset:v,clearStorage:a}=c(),T=r=>new Date(r).toLocaleTimeString();return e.jsx("div",{className:"space-y-4",children:e.jsxs("div",{className:"p-4 bg-purple-50 border border-purple-200 rounded-lg",children:[e.jsx("h3",{className:"text-lg font-semibold text-purple-800 mb-2",children:"部分持久化演示 (只保存特定字段)"}),e.jsx("p",{className:"text-purple-700 text-sm mb-4",children:"只持久化 count、theme、settings，step 和 lastSaved 不会保存。"}),e.jsxs("div",{className:"grid grid-cols-2 gap-4 mb-4",children:[e.jsxs("div",{className:"bg-white p-3 rounded border",children:[e.jsx("div",{className:"text-sm text-gray-600",children:"当前计数"}),e.jsx("div",{className:"text-2xl font-bold text-purple-600",children:n})]}),e.jsxs("div",{className:"bg-white p-3 rounded border",children:[e.jsx("div",{className:"text-sm text-gray-600",children:"步长"}),e.jsx("div",{className:"text-2xl font-bold text-blue-600",children:t})]})]}),e.jsxs("div",{className:"grid grid-cols-2 gap-4 mb-4",children:[e.jsxs("div",{className:"bg-white p-3 rounded border",children:[e.jsx("div",{className:"text-sm text-gray-600",children:"主题"}),e.jsx("div",{className:"text-lg font-medium text-purple-600 capitalize",children:s})]}),e.jsxs("div",{className:"bg-white p-3 rounded border",children:[e.jsx("div",{className:"text-sm text-gray-600",children:"最后保存"}),e.jsx("div",{className:"text-sm text-gray-500",children:T(d)})]})]}),e.jsxs("div",{className:"bg-white p-3 rounded border mb-4",children:[e.jsx("div",{className:"text-sm text-gray-600 mb-2",children:"设置"}),e.jsxs("div",{className:"space-y-2",children:[e.jsxs("label",{className:"flex items-center gap-2",children:[e.jsx("input",{type:"checkbox",checked:i.autoSave,onChange:r=>l({autoSave:r.target.checked}),className:"rounded"}),e.jsx("span",{className:"text-sm",children:"自动保存"})]}),e.jsxs("label",{className:"flex items-center gap-2",children:[e.jsx("input",{type:"checkbox",checked:i.notifications,onChange:r=>l({notifications:r.target.checked}),className:"rounded"}),e.jsx("span",{className:"text-sm",children:"通知"})]}),e.jsxs("div",{className:"flex items-center gap-2",children:[e.jsx("span",{className:"text-sm",children:"语言:"}),e.jsxs("select",{value:i.language,onChange:r=>l({language:r.target.value}),className:"px-2 py-1 border rounded text-sm",children:[e.jsx("option",{value:"zh-CN",children:"中文"}),e.jsx("option",{value:"en-US",children:"English"}),e.jsx("option",{value:"ja-JP",children:"日本語"})]})]})]})]}),e.jsxs("div",{className:"space-y-2",children:[e.jsxs("div",{className:"flex gap-2 flex-wrap",children:[e.jsx("button",{onClick:m,className:"px-3 py-1 bg-blue-500 text-white rounded hover:bg-blue-600 text-sm",children:"+1"}),e.jsx("button",{onClick:p,className:"px-3 py-1 bg-red-500 text-white rounded hover:bg-red-600 text-sm",children:"-1"}),e.jsxs("button",{onClick:g,className:"px-3 py-1 bg-green-500 text-white rounded hover:bg-green-600 text-sm",children:["+",t]}),e.jsxs("button",{onClick:x,className:"px-3 py-1 bg-orange-500 text-white rounded hover:bg-orange-600 text-sm",children:["-",t]}),e.jsx("button",{onClick:b,className:"px-3 py-1 bg-purple-500 text-white rounded hover:bg-purple-600 text-sm",children:"切换主题"}),e.jsx("button",{onClick:v,className:"px-3 py-1 bg-gray-500 text-white rounded hover:bg-gray-600 text-sm",children:"重置"}),e.jsx("button",{onClick:a,className:"px-3 py-1 bg-red-600 text-white rounded hover:bg-red-700 text-sm",children:"清空存储"})]}),e.jsxs("div",{className:"flex gap-2 items-center",children:[e.jsx("label",{className:"text-sm text-gray-600",children:"步长:"}),e.jsx("input",{type:"number",value:t,onChange:r=>u(Number(r.target.value)),className:"w-20 px-2 py-1 border rounded text-sm",min:"1",max:"10"})]})]}),e.jsx("div",{className:"mt-4 p-3 bg-yellow-50 border border-yellow-200 rounded",children:e.jsx("p",{className:"text-yellow-800 text-sm",children:"⚠️ 提示：刷新页面后，count、theme、settings 会保持，但 step 和 lastSaved 会重置为初始值。"})})]})})},J=()=>{const n=h(C),t=h(f),s=h(D),i=h(k),{increment:d,decrement:m,incrementByStep:p,decrementByStep:g,setStep:x,toggleTheme:u,reset:b,clearStorage:l}=h(),v=a=>new Date(a).toLocaleTimeString();return e.jsx("div",{className:"space-y-4",children:e.jsxs("div",{className:"p-4 bg-green-50 border border-green-200 rounded-lg",children:[e.jsx("h3",{className:"text-lg font-semibold text-green-800 mb-2",children:"会话存储演示 (sessionStorage)"}),e.jsx("p",{className:"text-green-700 text-sm mb-4",children:"状态保存到 sessionStorage，关闭标签页后数据会丢失，但刷新页面会保持。"}),e.jsxs("div",{className:"grid grid-cols-2 gap-4 mb-4",children:[e.jsxs("div",{className:"bg-white p-3 rounded border",children:[e.jsx("div",{className:"text-sm text-gray-600",children:"当前计数"}),e.jsx("div",{className:"text-2xl font-bold text-green-600",children:n})]}),e.jsxs("div",{className:"bg-white p-3 rounded border",children:[e.jsx("div",{className:"text-sm text-gray-600",children:"步长"}),e.jsx("div",{className:"text-2xl font-bold text-blue-600",children:t})]})]}),e.jsxs("div",{className:"grid grid-cols-2 gap-4 mb-4",children:[e.jsxs("div",{className:"bg-white p-3 rounded border",children:[e.jsx("div",{className:"text-sm text-gray-600",children:"主题"}),e.jsx("div",{className:"text-lg font-medium text-purple-600 capitalize",children:s})]}),e.jsxs("div",{className:"bg-white p-3 rounded border",children:[e.jsx("div",{className:"text-sm text-gray-600",children:"最后保存"}),e.jsx("div",{className:"text-sm text-gray-500",children:v(i)})]})]}),e.jsxs("div",{className:"space-y-2",children:[e.jsxs("div",{className:"flex gap-2 flex-wrap",children:[e.jsx("button",{onClick:d,className:"px-3 py-1 bg-blue-500 text-white rounded hover:bg-blue-600 text-sm",children:"+1"}),e.jsx("button",{onClick:m,className:"px-3 py-1 bg-red-500 text-white rounded hover:bg-red-600 text-sm",children:"-1"}),e.jsxs("button",{onClick:p,className:"px-3 py-1 bg-green-500 text-white rounded hover:bg-green-600 text-sm",children:["+",t]}),e.jsxs("button",{onClick:g,className:"px-3 py-1 bg-orange-500 text-white rounded hover:bg-orange-600 text-sm",children:["-",t]}),e.jsx("button",{onClick:u,className:"px-3 py-1 bg-purple-500 text-white rounded hover:bg-purple-600 text-sm",children:"切换主题"}),e.jsx("button",{onClick:b,className:"px-3 py-1 bg-gray-500 text-white rounded hover:bg-gray-600 text-sm",children:"重置"}),e.jsx("button",{onClick:l,className:"px-3 py-1 bg-red-600 text-white rounded hover:bg-red-700 text-sm",children:"清空存储"})]}),e.jsxs("div",{className:"flex gap-2 items-center",children:[e.jsx("label",{className:"text-sm text-gray-600",children:"步长:"}),e.jsx("input",{type:"number",value:t,onChange:a=>x(Number(a.target.value)),className:"w-20 px-2 py-1 border rounded text-sm",min:"1",max:"10"})]})]}),e.jsx("div",{className:"mt-4 p-3 bg-yellow-50 border border-yellow-200 rounded",children:e.jsx("p",{className:"text-yellow-800 text-sm",children:"⚠️提示：刷新页面状态会保持，但关闭标签页后重新打开会重置。适合临时会话数据。"})})]})})},O=`import {
  selectCount,
  selectLastSaved,
  selectStep,
  selectTheme,
  useBasicPersistStore,
} from "../stores/persistStore";

import React from "react";

const BasicPersistDemo: React.FC = () => {
  const count = useBasicPersistStore(selectCount);
  const step = useBasicPersistStore(selectStep);
  const theme = useBasicPersistStore(selectTheme);
  const lastSaved = useBasicPersistStore(selectLastSaved);

  const {
    increment,
    decrement,
    incrementByStep,
    decrementByStep,
    setStep,
    toggleTheme,
    reset,
    clearStorage,
  } = useBasicPersistStore();

  const formatTime = (timestamp: number) => {
    return new Date(timestamp).toLocaleTimeString();
  };

  return (
    <div className="space-y-4">
      <div className="p-4 bg-blue-50 border border-blue-200 rounded-lg">
        <h3 className="text-lg font-semibold text-blue-800 mb-2">
          基础持久化演示 (localStorage)
        </h3>
        <p className="text-blue-700 text-sm mb-4">
          所有状态都会保存到 localStorage，刷新页面后状态会保持。
        </p>

        <div className="grid grid-cols-2 gap-4 mb-4">
          <div className="bg-white p-3 rounded border">
            <div className="text-sm text-gray-600">当前计数</div>
            <div className="text-2xl font-bold text-blue-600">{count}</div>
          </div>
          <div className="bg-white p-3 rounded border">
            <div className="text-sm text-gray-600">步长</div>
            <div className="text-2xl font-bold text-green-600">{step}</div>
          </div>
        </div>

        <div className="grid grid-cols-2 gap-4 mb-4">
          <div className="bg-white p-3 rounded border">
            <div className="text-sm text-gray-600">主题</div>
            <div className="text-lg font-medium text-purple-600 capitalize">
              {theme}
            </div>
          </div>
          <div className="bg-white p-3 rounded border">
            <div className="text-sm text-gray-600">最后保存</div>
            <div className="text-sm text-gray-500">{formatTime(lastSaved)}</div>
          </div>
        </div>

        <div className="space-y-2">
          <div className="flex gap-2 flex-wrap">
            <button
              onClick={increment}
              className="px-3 py-1 bg-blue-500 text-white rounded hover:bg-blue-600 text-sm"
            >
              +1
            </button>
            <button
              onClick={decrement}
              className="px-3 py-1 bg-red-500 text-white rounded hover:bg-red-600 text-sm"
            >
              -1
            </button>
            <button
              onClick={incrementByStep}
              className="px-3 py-1 bg-green-500 text-white rounded hover:bg-green-600 text-sm"
            >
              +{step}
            </button>
            <button
              onClick={decrementByStep}
              className="px-3 py-1 bg-orange-500 text-white rounded hover:bg-orange-600 text-sm"
            >
              -{step}
            </button>
            <button
              onClick={toggleTheme}
              className="px-3 py-1 bg-purple-500 text-white rounded hover:bg-purple-600 text-sm"
            >
              切换主题
            </button>
            <button
              onClick={reset}
              className="px-3 py-1 bg-gray-500 text-white rounded hover:bg-gray-600 text-sm"
            >
              重置
            </button>
            <button
              onClick={clearStorage}
              className="px-3 py-1 bg-red-600 text-white rounded hover:bg-red-700 text-sm"
            >
              清空存储
            </button>
          </div>

          <div className="flex gap-2 items-center">
            <label className="text-sm text-gray-600">步长:</label>
            <input
              type="number"
              value={step}
              onChange={(e) => setStep(Number(e.target.value))}
              className="w-20 px-2 py-1 border rounded text-sm"
              min="1"
              max="10"
            />
          </div>
        </div>

        <div className="mt-4 p-3 bg-yellow-50 border border-yellow-200 rounded">
          <p className="text-yellow-800 text-sm">
            ⚠️提示：修改状态后刷新页面，状态会自动恢复。点击"清空存储"后刷新页面会重置为初始状态。
          </p>
        </div>
      </div>
    </div>
  );
};

export default BasicPersistDemo;
`,E=`import {
  selectCount,
  selectLastSaved,
  selectSettings,
  selectStep,
  selectTheme,
  usePartialPersistStore,
} from "../stores/persistStore";

import React from "react";

const PartialPersistDemo: React.FC = () => {
  const count = usePartialPersistStore(selectCount);
  const step = usePartialPersistStore(selectStep);
  const theme = usePartialPersistStore(selectTheme);
  const settings = usePartialPersistStore(selectSettings);
  const lastSaved = usePartialPersistStore(selectLastSaved);

  const {
    increment,
    decrement,
    incrementByStep,
    decrementByStep,
    setStep,
    toggleTheme,
    updateSettings,
    reset,
    clearStorage,
  } = usePartialPersistStore();

  const formatTime = (timestamp: number) => {
    return new Date(timestamp).toLocaleTimeString();
  };

  return (
    <div className="space-y-4">
      <div className="p-4 bg-purple-50 border border-purple-200 rounded-lg">
        <h3 className="text-lg font-semibold text-purple-800 mb-2">
          部分持久化演示 (只保存特定字段)
        </h3>
        <p className="text-purple-700 text-sm mb-4">
          只持久化 count、theme、settings，step 和 lastSaved 不会保存。
        </p>

        <div className="grid grid-cols-2 gap-4 mb-4">
          <div className="bg-white p-3 rounded border">
            <div className="text-sm text-gray-600">当前计数</div>
            <div className="text-2xl font-bold text-purple-600">{count}</div>
          </div>
          <div className="bg-white p-3 rounded border">
            <div className="text-sm text-gray-600">步长</div>
            <div className="text-2xl font-bold text-blue-600">{step}</div>
          </div>
        </div>

        <div className="grid grid-cols-2 gap-4 mb-4">
          <div className="bg-white p-3 rounded border">
            <div className="text-sm text-gray-600">主题</div>
            <div className="text-lg font-medium text-purple-600 capitalize">
              {theme}
            </div>
          </div>
          <div className="bg-white p-3 rounded border">
            <div className="text-sm text-gray-600">最后保存</div>
            <div className="text-sm text-gray-500">{formatTime(lastSaved)}</div>
          </div>
        </div>

        {/* 设置面板 */}
        <div className="bg-white p-3 rounded border mb-4">
          <div className="text-sm text-gray-600 mb-2">设置</div>
          <div className="space-y-2">
            <label className="flex items-center gap-2">
              <input
                type="checkbox"
                checked={settings.autoSave}
                onChange={(e) => updateSettings({ autoSave: e.target.checked })}
                className="rounded"
              />
              <span className="text-sm">自动保存</span>
            </label>
            <label className="flex items-center gap-2">
              <input
                type="checkbox"
                checked={settings.notifications}
                onChange={(e) =>
                  updateSettings({ notifications: e.target.checked })
                }
                className="rounded"
              />
              <span className="text-sm">通知</span>
            </label>
            <div className="flex items-center gap-2">
              <span className="text-sm">语言:</span>
              <select
                value={settings.language}
                onChange={(e) => updateSettings({ language: e.target.value })}
                className="px-2 py-1 border rounded text-sm"
              >
                <option value="zh-CN">中文</option>
                <option value="en-US">English</option>
                <option value="ja-JP">日本語</option>
              </select>
            </div>
          </div>
        </div>

        <div className="space-y-2">
          <div className="flex gap-2 flex-wrap">
            <button
              onClick={increment}
              className="px-3 py-1 bg-blue-500 text-white rounded hover:bg-blue-600 text-sm"
            >
              +1
            </button>
            <button
              onClick={decrement}
              className="px-3 py-1 bg-red-500 text-white rounded hover:bg-red-600 text-sm"
            >
              -1
            </button>
            <button
              onClick={incrementByStep}
              className="px-3 py-1 bg-green-500 text-white rounded hover:bg-green-600 text-sm"
            >
              +{step}
            </button>
            <button
              onClick={decrementByStep}
              className="px-3 py-1 bg-orange-500 text-white rounded hover:bg-orange-600 text-sm"
            >
              -{step}
            </button>
            <button
              onClick={toggleTheme}
              className="px-3 py-1 bg-purple-500 text-white rounded hover:bg-purple-600 text-sm"
            >
              切换主题
            </button>
            <button
              onClick={reset}
              className="px-3 py-1 bg-gray-500 text-white rounded hover:bg-gray-600 text-sm"
            >
              重置
            </button>
            <button
              onClick={clearStorage}
              className="px-3 py-1 bg-red-600 text-white rounded hover:bg-red-700 text-sm"
            >
              清空存储
            </button>
          </div>

          <div className="flex gap-2 items-center">
            <label className="text-sm text-gray-600">步长:</label>
            <input
              type="number"
              value={step}
              onChange={(e) => setStep(Number(e.target.value))}
              className="w-20 px-2 py-1 border rounded text-sm"
              min="1"
              max="10"
            />
          </div>
        </div>

        <div className="mt-4 p-3 bg-yellow-50 border border-yellow-200 rounded">
          <p className="text-yellow-800 text-sm">
            ⚠️ 提示：刷新页面后，count、theme、settings 会保持，但 step 和
            lastSaved 会重置为初始值。
          </p>
        </div>
      </div>
    </div>
  );
};

export default PartialPersistDemo;
`,I=`import {
  selectCount,
  selectLastSaved,
  selectStep,
  selectTheme,
  useSessionPersistStore,
} from "../stores/persistStore";

import React from "react";

const SessionPersistDemo: React.FC = () => {
  const count = useSessionPersistStore(selectCount);
  const step = useSessionPersistStore(selectStep);
  const theme = useSessionPersistStore(selectTheme);
  const lastSaved = useSessionPersistStore(selectLastSaved);

  const {
    increment,
    decrement,
    incrementByStep,
    decrementByStep,
    setStep,
    toggleTheme,
    reset,
    clearStorage,
  } = useSessionPersistStore();

  const formatTime = (timestamp: number) => {
    return new Date(timestamp).toLocaleTimeString();
  };

  return (
    <div className="space-y-4">
      <div className="p-4 bg-green-50 border border-green-200 rounded-lg">
        <h3 className="text-lg font-semibold text-green-800 mb-2">
          会话存储演示 (sessionStorage)
        </h3>
        <p className="text-green-700 text-sm mb-4">
          状态保存到 sessionStorage，关闭标签页后数据会丢失，但刷新页面会保持。
        </p>

        <div className="grid grid-cols-2 gap-4 mb-4">
          <div className="bg-white p-3 rounded border">
            <div className="text-sm text-gray-600">当前计数</div>
            <div className="text-2xl font-bold text-green-600">{count}</div>
          </div>
          <div className="bg-white p-3 rounded border">
            <div className="text-sm text-gray-600">步长</div>
            <div className="text-2xl font-bold text-blue-600">{step}</div>
          </div>
        </div>

        <div className="grid grid-cols-2 gap-4 mb-4">
          <div className="bg-white p-3 rounded border">
            <div className="text-sm text-gray-600">主题</div>
            <div className="text-lg font-medium text-purple-600 capitalize">
              {theme}
            </div>
          </div>
          <div className="bg-white p-3 rounded border">
            <div className="text-sm text-gray-600">最后保存</div>
            <div className="text-sm text-gray-500">{formatTime(lastSaved)}</div>
          </div>
        </div>

        <div className="space-y-2">
          <div className="flex gap-2 flex-wrap">
            <button
              onClick={increment}
              className="px-3 py-1 bg-blue-500 text-white rounded hover:bg-blue-600 text-sm"
            >
              +1
            </button>
            <button
              onClick={decrement}
              className="px-3 py-1 bg-red-500 text-white rounded hover:bg-red-600 text-sm"
            >
              -1
            </button>
            <button
              onClick={incrementByStep}
              className="px-3 py-1 bg-green-500 text-white rounded hover:bg-green-600 text-sm"
            >
              +{step}
            </button>
            <button
              onClick={decrementByStep}
              className="px-3 py-1 bg-orange-500 text-white rounded hover:bg-orange-600 text-sm"
            >
              -{step}
            </button>
            <button
              onClick={toggleTheme}
              className="px-3 py-1 bg-purple-500 text-white rounded hover:bg-purple-600 text-sm"
            >
              切换主题
            </button>
            <button
              onClick={reset}
              className="px-3 py-1 bg-gray-500 text-white rounded hover:bg-gray-600 text-sm"
            >
              重置
            </button>
            <button
              onClick={clearStorage}
              className="px-3 py-1 bg-red-600 text-white rounded hover:bg-red-700 text-sm"
            >
              清空存储
            </button>
          </div>

          <div className="flex gap-2 items-center">
            <label className="text-sm text-gray-600">步长:</label>
            <input
              type="number"
              value={step}
              onChange={(e) => setStep(Number(e.target.value))}
              className="w-20 px-2 py-1 border rounded text-sm"
              min="1"
              max="10"
            />
          </div>
        </div>

        <div className="mt-4 p-3 bg-yellow-50 border border-yellow-200 rounded">
          <p className="text-yellow-800 text-sm">
            ⚠️提示：刷新页面状态会保持，但关闭标签页后重新打开会重置。适合临时会话数据。
          </p>
        </div>
      </div>
    </div>
  );
};

export default SessionPersistDemo;
`,N=`import { create } from 'zustand';
import { persist, createJSONStorage } from 'zustand/middleware';
import type { PersistCounterState, PersistStore } from '../types';

// 初始状态
const initialState: PersistCounterState = {
  count: 0,
  step: 1,
  theme: 'light',
  settings: {
    autoSave: true,
    notifications: true,
    language: 'zh-CN',
  },
  lastSaved: Date.now(),
};

// 1. 基础持久化 store (localStorage)
export const useBasicPersistStore = create<PersistStore>()(
  persist(
    (set) => ({
      ...initialState,

      increment: () =>
        set((state) => ({
          count: state.count + 1,
          lastSaved: Date.now(),
        })),

      decrement: () =>
        set((state) => ({
          count: state.count - 1,
          lastSaved: Date.now(),
        })),

      incrementByStep: () =>
        set((state) => ({
          count: state.count + state.step,
          lastSaved: Date.now(),
        })),

      decrementByStep: () =>
        set((state) => ({
          count: state.count - state.step,
          lastSaved: Date.now(),
        })),

      setStep: (step: number) =>
        set({ step, lastSaved: Date.now() }),

      toggleTheme: () =>
        set((state) => ({
          theme: state.theme === 'light' ? 'dark' : 'light',
          lastSaved: Date.now(),
        })),

      updateSettings: (newSettings) =>
        set((state) => ({
          settings: { ...state.settings, ...newSettings },
          lastSaved: Date.now(),
        })),

      reset: () =>
        set({
          ...initialState,
          lastSaved: Date.now(),
        }),

      clearStorage: () => {
        localStorage.removeItem('basic-persist-store');
        set({
          ...initialState,
          lastSaved: Date.now(),
        });
      },
    }),
    {
      name: 'basic-persist-store',
      storage: createJSONStorage(() => localStorage),
    }
  )
);

// 2. 会话存储 store (sessionStorage)
export const useSessionPersistStore = create<PersistStore>()(
  persist(
    (set) => ({
      ...initialState,

      increment: () =>
        set((state) => ({
          count: state.count + 1,
          lastSaved: Date.now(),
        })),

      decrement: () =>
        set((state) => ({
          count: state.count - 1,
          lastSaved: Date.now(),
        })),

      incrementByStep: () =>
        set((state) => ({
          count: state.count + state.step,
          lastSaved: Date.now(),
        })),

      decrementByStep: () =>
        set((state) => ({
          count: state.count - state.step,
          lastSaved: Date.now(),
        })),

      setStep: (step: number) =>
        set({ step, lastSaved: Date.now() }),

      toggleTheme: () =>
        set((state) => ({
          theme: state.theme === 'light' ? 'dark' : 'light',
          lastSaved: Date.now(),
        })),

      updateSettings: (newSettings) =>
        set((state) => ({
          settings: { ...state.settings, ...newSettings },
          lastSaved: Date.now(),
        })),

      reset: () =>
        set({
          ...initialState,
          lastSaved: Date.now(),
        }),

      clearStorage: () => {
        sessionStorage.removeItem('session-persist-store');
        set({
          ...initialState,
          lastSaved: Date.now(),
        });
      },
    }),
    {
      name: 'session-persist-store',
      storage: createJSONStorage(() => sessionStorage),
    }
  )
);

// 3. 部分持久化 store (只保存特定字段)
export const usePartialPersistStore = create<PersistStore>()(
  persist(
    (set) => ({
      ...initialState,

      increment: () =>
        set((state) => ({
          count: state.count + 1,
          lastSaved: Date.now(),
        })),

      decrement: () =>
        set((state) => ({
          count: state.count - 1,
          lastSaved: Date.now(),
        })),

      incrementByStep: () =>
        set((state) => ({
          count: state.count + state.step,
          lastSaved: Date.now(),
        })),

      decrementByStep: () =>
        set((state) => ({
          count: state.count - state.step,
          lastSaved: Date.now(),
        })),

      setStep: (step: number) =>
        set({ step, lastSaved: Date.now() }),

      toggleTheme: () =>
        set((state) => ({
          theme: state.theme === 'light' ? 'dark' : 'light',
          lastSaved: Date.now(),
        })),

      updateSettings: (newSettings) =>
        set((state) => ({
          settings: { ...state.settings, ...newSettings },
          lastSaved: Date.now(),
        })),

      reset: () =>
        set({
          ...initialState,
          lastSaved: Date.now(),
        }),

      clearStorage: () => {
        localStorage.removeItem('partial-persist-store');
        set({
          ...initialState,
          lastSaved: Date.now(),
        });
      },
    }),
    {
      name: 'partial-persist-store',
      storage: createJSONStorage(() => localStorage),
      // 只持久化 count, theme, settings，不持久化 step 和 lastSaved
      partialize: (state) => ({
        count: state.count,
        theme: state.theme,
        settings: state.settings,
      }),
    }
  )
);

// 选择器
export const selectCount: (state: PersistStore) => number = (state) => state.count;
export const selectStep: (state: PersistStore) => number = (state) => state.step;
export const selectTheme: (state: PersistStore) => string = (state) => state.theme;
export const selectSettings: (state: PersistStore) => PersistCounterState['settings'] = (state) => state.settings;
export const selectLastSaved: (state: PersistStore) => number = (state) => state.lastSaved;
`,y=`// 持久化存储演示的类型定义

export interface PersistCounterState {
  count: number;
  step: number;
  theme: 'light' | 'dark';
  settings: {
    autoSave: boolean;
    notifications: boolean;
    language: string;
  };
  lastSaved: number;
}

export interface PersistActions {
  increment: () => void;
  decrement: () => void;
  incrementByStep: () => void;
  decrementByStep: () => void;
  setStep: (step: number) => void;
  toggleTheme: () => void;
  updateSettings: (settings: Partial<PersistCounterState['settings']>) => void;
  reset: () => void;
  clearStorage: () => void;
}

// 选择器类型
export type NumberSelector = (state: PersistCounterState) => number;
export type StringSelector = (state: PersistCounterState) => string;
export type BooleanSelector = (state: PersistCounterState) => boolean;
export type ObjectSelector<T> = (state: PersistCounterState) => T;

// 组合状态类型
export type PersistStore = PersistCounterState & PersistActions;

// 持久化配置类型
export interface PersistConfig {
  name: string;
  storage: 'localStorage' | 'sessionStorage';
  partialize?: (state: PersistStore) => Partial<PersistStore>;
}
`,U=()=>e.jsx(B,{title:"持久化存储（persist）",description:"演示 Zustand 的持久化功能，包括 localStorage、sessionStorage 和部分字段持久化，实现状态在页面刷新后的自动恢复。",overview:[{title:"核心概念",items:["使用 zustand/middleware 的 persist 中间件","支持 localStorage 和 sessionStorage 两种存储方式","可配置部分字段持久化，避免敏感数据泄露","自动序列化/反序列化 JSON 数据","支持自定义存储引擎和序列化器","与 DevTools 等其他中间件完美兼容","提供存储清理和重置功能"]},{title:"主要优势",items:["用户刷新页面后状态自动恢复，提升用户体验","减少服务器请求，降低网络开销","支持离线状态管理，增强应用可用性","灵活的存储策略，适应不同业务需求","与现有状态管理逻辑无缝集成","支持多种存储后端，便于扩展"]},{title:"适用场景",items:["用户偏好设置和主题配置","表单草稿和临时数据保存","购物车和收藏夹等用户数据","应用配置和个性化设置","离线数据缓存和同步","多标签页状态共享"]},{title:"注意事项",items:["注意存储空间限制，避免存储过大数据","敏感数据需要加密或避免持久化","考虑数据版本兼容性和迁移策略","合理选择存储方式（localStorage vs sessionStorage）","处理存储失败和异常情况","注意跨域和隐私模式下的存储限制"]}],examples:[{title:"基础持久化 (localStorage)",component:e.jsx(L,{}),description:"演示完整的 localStorage 持久化，所有状态都会在页面刷新后保持。",observationPoints:["修改状态后刷新页面，所有数据都会恢复","关闭浏览器重新打开，数据依然保持","可以手动清空存储并重置状态","每次状态更新都会记录保存时间","支持多种数据类型（数字、字符串、对象）"],keyPoints:["使用 createJSONStorage 创建标准存储","配置 store 名称用于存储键值","所有状态字段都会自动持久化","提供清理存储的方法","与 DevTools 等其他中间件兼容"],commonTraps:["忘记配置存储名称导致数据混乱","存储过大的数据导致性能问题","没有处理存储失败的情况","敏感数据被意外持久化"],solutions:["为每个 store 设置唯一的名称","使用 partialize 限制存储字段","添加错误处理和降级策略","明确区分持久化和临时数据"],preCode:[{title:"类型定义",code:y},{title:"Store 定义",code:N}],codeExample:{title:"基础持久化演示",code:O}},{title:"会话存储 (sessionStorage)",component:e.jsx(J,{}),description:"演示 sessionStorage 持久化，数据在标签页关闭后丢失，但刷新页面会保持。",observationPoints:["刷新页面状态会保持","关闭标签页后重新打开会重置","适合临时会话数据","不会影响其他标签页的数据","浏览器关闭后数据完全清除"],keyPoints:["使用 sessionStorage 作为存储后端","适合临时和会话相关的数据","自动处理标签页生命周期","与 localStorage 使用方式相同","提供更好的隐私保护"],commonTraps:["误用 sessionStorage 存储重要数据","期望跨标签页共享数据","没有考虑标签页关闭的影响"],solutions:["明确区分持久化和会话数据","重要数据使用 localStorage","在文档中说明数据生命周期"],preCode:[{title:"类型定义",code:y},{title:"Store 定义",code:N}],codeExample:{title:"会话存储演示",code:I}},{title:"部分持久化 (partialize)",component:e.jsx(R,{}),description:"演示部分字段持久化，只保存特定字段，其他字段在刷新后重置。",observationPoints:["只有 count、theme、settings 会被保存","step 和 lastSaved 在刷新后重置","可以精确控制哪些数据需要持久化","减少存储空间和提升性能","避免敏感或临时数据的泄露"],keyPoints:["使用 partialize 函数选择存储字段","支持嵌套对象的部分持久化","未持久化的字段会使用初始值","提供更精细的存储控制","适合混合持久化需求"],commonTraps:["partialize 函数返回了错误的数据结构","忘记持久化重要字段","部分持久化导致状态不一致"],solutions:["仔细设计 partialize 函数","明确文档化持久化字段","测试刷新后的状态恢复"],preCode:[{title:"类型定义",code:y},{title:"Store 定义",code:N}],codeExample:{title:"部分持久化演示",code:E}}],tutorial:{concepts:["persist 中间件的基本配置和使用","localStorage 与 sessionStorage 的区别","partialize 函数的选择性持久化","存储引擎的自定义和扩展","持久化数据的版本管理和迁移"],steps:["导入 persist 中间件和 createJSONStorage","配置 store 名称和存储后端","使用 partialize 选择需要持久化的字段","添加存储清理和重置功能","测试刷新后的状态恢复","处理存储异常和降级策略"],tips:["为每个 store 设置唯一的存储名称","使用 partialize 避免存储敏感数据","考虑存储空间限制和性能影响","提供用户手动清理存储的选项","在开发环境使用 DevTools 观察存储变化","为持久化数据设计版本兼容性"]},interview:{questions:[{question:"localStorage 和 sessionStorage 有什么区别？",answer:"localStorage 数据持久保存直到手动清除，sessionStorage 数据在标签页关闭后自动清除。"},{question:"如何使用 partialize 实现部分持久化？",answer:"在 persist 配置中提供 partialize 函数，返回需要持久化的字段对象，未包含的字段不会保存。"},{question:"持久化存储有哪些性能考虑？",answer:"避免存储过大数据，使用 partialize 限制字段，考虑序列化开销，处理存储失败情况。"},{question:"如何处理持久化数据的版本兼容性？",answer:"设计数据迁移策略，使用版本号标识，提供默认值处理，在应用启动时检查数据格式。"}],keyPoints:["persist 中间件配置与存储选择","partialize 函数的选择性持久化","性能优化与存储限制","数据版本管理与迁移策略"]},bestPractices:{dos:["为每个 store 设置唯一的存储名称","使用 partialize 限制持久化字段","提供存储清理和重置功能","处理存储异常和降级情况","考虑数据版本兼容性","在文档中说明数据生命周期"],donts:["不要存储敏感或机密数据","不要存储过大的数据对象","不要忽略存储失败的处理","不要忘记测试刷新后的状态恢复"],patterns:["persist + partialize + 错误处理","localStorage + sessionStorage 混合使用","版本化数据 + 迁移策略","存储清理 + 用户控制"]}});export{U as default};
