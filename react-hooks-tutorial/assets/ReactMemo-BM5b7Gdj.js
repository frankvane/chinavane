import{R as b,j as e,r as o}from"./index-nevtk0dH.js";import{C as h}from"./ComponentTemplate-CQT_cNgc.js";let d=0;const N=({name:s,age:r,onUpdate:n})=>(d++,e.jsxs("div",{className:"p-4 border border-gray-300 rounded-lg bg-red-50",children:[e.jsxs("h4",{className:"font-semibold text-red-800 mb-2",children:["普通组件 (渲染次数: ",d,")"]}),e.jsxs("p",{className:"text-gray-700",children:["姓名: ",s,", 年龄: ",r]}),e.jsx("button",{onClick:n,className:"mt-2 px-3 py-1 bg-red-500 text-white rounded hover:bg-red-600",children:"更新信息"})]}));let p=0;const i=b.memo(({name:s,age:r,onUpdate:n})=>(p++,e.jsxs("div",{className:"p-4 border border-gray-300 rounded-lg bg-green-50",children:[e.jsxs("h4",{className:"font-semibold text-green-800 mb-2",children:["Memo 组件 (渲染次数: ",p,")"]}),e.jsxs("p",{className:"text-gray-700",children:["姓名: ",s,", 年龄: ",r]}),e.jsx("button",{onClick:n,className:"mt-2 px-3 py-1 bg-green-500 text-white rounded hover:bg-green-600",children:"更新信息"})]})));let u=0;const v=b.memo(({user:s,settings:r})=>(u++,e.jsxs("div",{className:"p-4 border border-gray-300 rounded-lg bg-blue-50",children:[e.jsxs("h4",{className:"font-semibold text-blue-800 mb-2",children:["自定义比较组件 (渲染次数: ",u,")"]}),e.jsxs("div",{className:"text-gray-700 space-y-1",children:[e.jsxs("p",{children:["ID: ",s.id]}),e.jsxs("p",{children:["姓名: ",s.name]}),e.jsxs("p",{children:["年龄: ",s.age]}),e.jsxs("p",{children:["邮箱: ",s.email]}),e.jsxs("p",{children:["主题: ",r.theme]}),e.jsxs("p",{children:["语言: ",r.language]})]})]})),(s,r)=>s.user.id===r.user.id&&s.settings.theme===r.settings.theme),C=()=>{const[s,r]=o.useState(0),[n,a]=o.useState({name:"张三",age:25}),m=o.useCallback(()=>{a(l=>({name:l.name==="张三"?"李四":"张三",age:l.age===25?30:25}))},[]);return e.jsx("div",{className:"space-y-6",children:e.jsxs("div",{className:"bg-gray-50 p-4 rounded-lg",children:[e.jsx("h3",{className:"text-lg font-semibold mb-4",children:"基础 React.memo 演示"}),e.jsxs("div",{className:"space-y-4",children:[e.jsxs("div",{className:"flex gap-4",children:[e.jsxs("button",{onClick:()=>r(s+1),className:"px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600",children:["无关更新 (count: ",s,")"]}),e.jsx("p",{className:"text-sm text-gray-600 self-center",children:"点击此按钮不会影响子组件的 props，观察哪个组件会重新渲染"})]}),e.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-4",children:[e.jsx(N,{name:n.name,age:n.age,onUpdate:m}),e.jsx(i,{name:n.name,age:n.age,onUpdate:m})]}),e.jsxs("div",{className:"bg-yellow-50 p-3 rounded border border-yellow-200",children:[e.jsx("h4",{className:"font-semibold text-yellow-800 mb-2",children:"观察要点："}),e.jsxs("ul",{className:"text-yellow-700 text-sm space-y-1",children:[e.jsx("li",{children:'• 点击"无关更新"按钮时，只有普通组件会重新渲染'}),e.jsx("li",{children:"• React.memo 组件会跳过渲染，渲染次数保持不变"}),e.jsx("li",{children:'• 点击"更新信息"按钮时，两个组件都会重新渲染'}),e.jsx("li",{children:"• 这展示了 React.memo 的性能优化效果"})]})]})]})]})})},j=()=>{const[s,r]=o.useState(0),[n,a]=o.useState({name:"王五",age:28}),m=()=>{a(c=>({name:c.name==="王五"?"赵六":"王五",age:c.age===28?35:28}))},l=o.useCallback(()=>{a(c=>({name:c.name==="王五"?"赵六":"王五",age:c.age===28?35:28}))},[]),t=o.useMemo(()=>(console.log("执行复杂计算..."),n.name.length*n.age),[n.name,n.age]);return e.jsx("div",{className:"space-y-6",children:e.jsxs("div",{className:"bg-gray-50 p-4 rounded-lg",children:[e.jsx("h3",{className:"text-lg font-semibold mb-4",children:"函数引用问题演示"}),e.jsxs("div",{className:"space-y-4",children:[e.jsxs("div",{className:"flex gap-4",children:[e.jsxs("button",{onClick:()=>r(s+1),className:"px-4 py-2 bg-purple-500 text-white rounded hover:bg-purple-600",children:["触发父组件渲染 (count: ",s,")"]}),e.jsx("p",{className:"text-sm text-gray-600 self-center",children:"观察左右两个组件的渲染行为差异"})]}),e.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-4",children:[e.jsxs("div",{className:"space-y-2",children:[e.jsx("h4",{className:"font-semibold text-red-600",children:"❌ 错误示例"}),e.jsx(i,{name:n.name,age:n.age,onUpdate:m}),e.jsx("p",{className:"text-xs text-red-600",children:"每次渲染都创建新函数，memo 失效"})]}),e.jsxs("div",{className:"space-y-2",children:[e.jsx("h4",{className:"font-semibold text-green-600",children:"✅ 正确示例"}),e.jsx(i,{name:n.name,age:n.age,onUpdate:l}),e.jsx("p",{className:"text-xs text-green-600",children:"使用 useCallback 缓存函数，memo 正常工作"})]})]}),e.jsxs("div",{className:"bg-blue-50 p-3 rounded border border-blue-200",children:[e.jsxs("h4",{className:"font-semibold text-blue-800 mb-2",children:["useMemo 缓存计算结果: ",t]}),e.jsx("p",{className:"text-blue-700 text-sm",children:"只有当 name 或 age 变化时才会重新计算"})]}),e.jsxs("div",{className:"bg-orange-50 p-3 rounded border border-orange-200",children:[e.jsx("h4",{className:"font-semibold text-orange-800 mb-2",children:"观察要点："}),e.jsxs("ul",{className:"text-orange-700 text-sm space-y-1",children:[e.jsx("li",{children:"• 左侧组件每次都重新渲染，因为每次都传入新的函数引用"}),e.jsx("li",{children:"• 右侧组件使用 useCallback 缓存函数，memo 正常工作"}),e.jsx("li",{children:"• useMemo 用于缓存复杂的计算结果"}),e.jsx("li",{children:"• 正确的依赖数组确保缓存的有效性"})]})]})]})]})})},y=()=>{const[s,r]=o.useState(0),[n,a]=o.useState({id:1,name:"自定义用户",age:30,email:"user@example.com"}),[m,l]=o.useState({theme:"light",language:"zh-CN"});return e.jsx("div",{className:"space-y-6",children:e.jsxs("div",{className:"bg-gray-50 p-4 rounded-lg",children:[e.jsx("h3",{className:"text-lg font-semibold mb-4",children:"自定义比较函数演示"}),e.jsxs("div",{className:"space-y-4",children:[e.jsxs("div",{className:"grid grid-cols-2 md:grid-cols-3 gap-2",children:[e.jsxs("button",{onClick:()=>a(t=>({...t,age:t.age+1})),className:"px-3 py-2 bg-gray-500 text-white rounded hover:bg-gray-600 text-sm",children:["更新年龄 (",n.age,")"]}),e.jsx("button",{onClick:()=>a(t=>({...t,email:t.email==="user@example.com"?"new@example.com":"user@example.com"})),className:"px-3 py-2 bg-gray-500 text-white rounded hover:bg-gray-600 text-sm",children:n.email==="user@example.com"?"更改为新邮箱":"已改邮箱"}),e.jsx("button",{onClick:()=>l(t=>({...t,language:t.language==="zh-CN"?"en-US":"zh-CN"})),className:"px-3 py-2 bg-gray-500 text-white rounded hover:bg-gray-600 text-sm",children:m.language==="zh-CN"?"中文":"英文"}),e.jsxs("button",{onClick:()=>l(t=>({...t,theme:t.theme==="light"?"dark":"light"})),className:"px-3 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 text-sm",children:["更新主题 (",m.theme,") ⚡"]}),e.jsxs("button",{onClick:()=>a(t=>({...t,id:t.id+1})),className:"px-3 py-2 bg-red-500 text-white rounded hover:bg-red-600 text-sm",children:["更新ID (",n.id,") ⚡"]}),e.jsxs("button",{onClick:()=>r(s+1),className:"px-3 py-2 bg-purple-500 text-white rounded hover:bg-purple-600 text-sm",children:["父组件渲染 (",s,")"]})]}),e.jsx(v,{user:n,settings:m}),e.jsxs("div",{className:"bg-indigo-50 p-3 rounded border border-indigo-200",children:[e.jsx("h4",{className:"font-semibold text-indigo-800 mb-2",children:"自定义比较逻辑："}),e.jsxs("div",{className:"text-indigo-700 text-sm space-y-1",children:[e.jsxs("p",{children:["• ⚡ 只有 ",e.jsx("strong",{children:"user.id"})," 或"," ",e.jsx("strong",{children:"settings.theme"})," 变化时组件才重新渲染"]}),e.jsx("p",{children:"• 其他属性变化（age、email、language）不会触发重新渲染"}),e.jsx("p",{children:"• 父组件渲染也不会影响子组件"})]})]}),e.jsxs("div",{className:"bg-green-50 p-3 rounded border border-green-200",children:[e.jsx("h4",{className:"font-semibold text-green-800 mb-2",children:"观察要点："}),e.jsxs("ul",{className:"text-green-700 text-sm space-y-1",children:[e.jsx("li",{children:"• 只有 user.id 或 settings.theme 变化时组件才重新渲染"}),e.jsx("li",{children:"• 其他属性变化（age、email、language）不会触发重新渲染"}),e.jsx("li",{children:"• 自定义比较函数提供了精确的控制"}),e.jsx("li",{children:"• 可以根据业务需求选择关键属性进行比较"})]})]})]})]})})},g=`import React from "react";\r
import { NormalComponentProps, CustomMemoProps } from "./types";\r
\r
// 普通组件的渲染计数器\r
let normalRenderCount = 0;\r
\r
// 普通组件 - 每次父组件更新都会重新渲染\r
export const NormalComponent: React.FC<NormalComponentProps> = ({\r
  name,\r
  age,\r
  onUpdate,\r
}) => {\r
  normalRenderCount++;\r
\r
  return (\r
    <div className="p-4 border border-gray-300 rounded-lg bg-red-50">\r
      <h4 className="font-semibold text-red-800 mb-2">\r
        普通组件 (渲染次数: {normalRenderCount})\r
      </h4>\r
      <p className="text-gray-700">\r
        姓名: {name}, 年龄: {age}\r
      </p>\r
      <button\r
        onClick={onUpdate}\r
        className="mt-2 px-3 py-1 bg-red-500 text-white rounded hover:bg-red-600"\r
      >\r
        更新信息\r
      </button>\r
    </div>\r
  );\r
};\r
\r
// memo 组件的渲染计数器\r
let memoRenderCount = 0;\r
\r
// 使用 React.memo 的组件 - 只有 props 变化时才重新渲染\r
export const MemoComponent = React.memo<NormalComponentProps>(\r
  ({ name, age, onUpdate }) => {\r
    memoRenderCount++;\r
\r
    return (\r
      <div className="p-4 border border-gray-300 rounded-lg bg-green-50">\r
        <h4 className="font-semibold text-green-800 mb-2">\r
          Memo 组件 (渲染次数: {memoRenderCount})\r
        </h4>\r
        <p className="text-gray-700">\r
          姓名: {name}, 年龄: {age}\r
        </p>\r
        <button\r
          onClick={onUpdate}\r
          className="mt-2 px-3 py-1 bg-green-500 text-white rounded hover:bg-green-600"\r
        >\r
          更新信息\r
        </button>\r
      </div>\r
    );\r
  }\r
);\r
\r
// 自定义 memo 组件的渲染计数器\r
let customMemoRenderCount = 0;\r
\r
// 使用自定义比较函数的 React.memo 组件\r
export const CustomMemoComponent = React.memo<CustomMemoProps>(\r
  ({ user, settings }) => {\r
    customMemoRenderCount++;\r
\r
    return (\r
      <div className="p-4 border border-gray-300 rounded-lg bg-blue-50">\r
        <h4 className="font-semibold text-blue-800 mb-2">\r
          自定义比较组件 (渲染次数: {customMemoRenderCount})\r
        </h4>\r
        <div className="text-gray-700 space-y-1">\r
          <p>ID: {user.id}</p>\r
          <p>姓名: {user.name}</p>\r
          <p>年龄: {user.age}</p>\r
          <p>邮箱: {user.email}</p>\r
          <p>主题: {settings.theme}</p>\r
          <p>语言: {settings.language}</p>\r
        </div>\r
      </div>\r
    );\r
  },\r
  // 自定义比较函数：只有 user.id 或 settings.theme 变化时才重新渲染\r
  (prevProps, nextProps) => {\r
    return (\r
      prevProps.user.id === nextProps.user.id &&\r
      prevProps.settings.theme === nextProps.settings.theme\r
    );\r
  }\r
);`,x=`import React, { useCallback, useState } from "react";
import { NormalComponent, MemoComponent } from "./BaseComponents";

// 基础 React.memo 演示组件
export const BasicMemoDemo: React.FC = () => {
  const [count, setCount] = useState(0);
  const [userInfo, setUserInfo] = useState({ name: "张三", age: 25 });

  // 使用 useCallback 缓存函数，确保 memo 组件不会因为函数引用变化而重新渲染
  const handleUpdate = useCallback(() => {
    setUserInfo((prev) => ({
      name: prev.name === "张三" ? "李四" : "张三",
      age: prev.age === 25 ? 30 : 25,
    }));
  }, []);

  return (
    <div className="space-y-6">
      <div className="bg-gray-50 p-4 rounded-lg">
        <h3 className="text-lg font-semibold mb-4">基础 React.memo 演示</h3>
        <div className="space-y-4">
          <div className="flex gap-4">
            <button
              onClick={() => setCount(count + 1)}
              className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
            >
              无关更新 (count: {count})
            </button>
            <p className="text-sm text-gray-600 self-center">
              点击此按钮不会影响子组件的 props，观察哪个组件会重新渲染
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <NormalComponent
              name={userInfo.name}
              age={userInfo.age}
              onUpdate={handleUpdate}
            />
            <MemoComponent
              name={userInfo.name}
              age={userInfo.age}
              onUpdate={handleUpdate}
            />
          </div>

          <div className="bg-yellow-50 p-3 rounded border border-yellow-200">
            <h4 className="font-semibold text-yellow-800 mb-2">观察要点：</h4>
            <ul className="text-yellow-700 text-sm space-y-1">
              <li>• 点击"无关更新"按钮时，只有普通组件会重新渲染</li>
              <li>• React.memo 组件会跳过渲染，渲染次数保持不变</li>
              <li>• 点击"更新信息"按钮时，两个组件都会重新渲染</li>
              <li>• 这展示了 React.memo 的性能优化效果</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};`,R=`import React, { useState } from "react";

import { CustomMemoComponent } from "./BaseComponents";

// 自定义比较函数演示组件
export const CustomCompareDemo: React.FC = () => {
  const [count, setCount] = useState(0);
  const [user, setUser] = useState({
    id: 1,
    name: "自定义用户",
    age: 30,
    email: "user@example.com",
  });
  const [settings, setSettings] = useState({
    theme: "light",
    language: "zh-CN",
  });

  return (
    <div className="space-y-6">
      <div className="bg-gray-50 p-4 rounded-lg">
        <h3 className="text-lg font-semibold mb-4">自定义比较函数演示</h3>
        <div className="space-y-4">
          <div className="grid grid-cols-2 md:grid-cols-3 gap-2">
            <button
              onClick={() =>
                setUser((prev) => ({ ...prev, age: prev.age + 1 }))
              }
              className="px-3 py-2 bg-gray-500 text-white rounded hover:bg-gray-600 text-sm"
            >
              更新年龄 ({user.age})
            </button>
            <button
              onClick={() =>
                setUser((prev) => ({
                  ...prev,
                  email:
                    prev.email === "user@example.com"
                      ? "new@example.com"
                      : "user@example.com",
                }))
              }
              className="px-3 py-2 bg-gray-500 text-white rounded hover:bg-gray-600 text-sm"
            >
              {user.email === "user@example.com" ? "更改为新邮箱" : "已改邮箱"}
            </button>
            <button
              onClick={() =>
                setSettings((prev) => ({
                  ...prev,
                  language: prev.language === "zh-CN" ? "en-US" : "zh-CN",
                }))
              }
              className="px-3 py-2 bg-gray-500 text-white rounded hover:bg-gray-600 text-sm"
            >
              {settings.language === "zh-CN" ? "中文" : "英文"}
            </button>
            <button
              onClick={() =>
                setSettings((prev) => ({
                  ...prev,
                  theme: prev.theme === "light" ? "dark" : "light",
                }))
              }
              className="px-3 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 text-sm"
            >
              更新主题 ({settings.theme}) ⚡
            </button>
            <button
              onClick={() => setUser((prev) => ({ ...prev, id: prev.id + 1 }))}
              className="px-3 py-2 bg-red-500 text-white rounded hover:bg-red-600 text-sm"
            >
              更新ID ({user.id}) ⚡
            </button>
            <button
              onClick={() => setCount(count + 1)}
              className="px-3 py-2 bg-purple-500 text-white rounded hover:bg-purple-600 text-sm"
            >
              父组件渲染 ({count})
            </button>
          </div>

          <CustomMemoComponent user={user} settings={settings} />

          <div className="bg-indigo-50 p-3 rounded border border-indigo-200">
            <h4 className="font-semibold text-indigo-800 mb-2">
              自定义比较逻辑：
            </h4>
            <div className="text-indigo-700 text-sm space-y-1">
              <p>
                • ⚡ 只有 <strong>user.id</strong> 或{" "}
                <strong>settings.theme</strong> 变化时组件才重新渲染
              </p>
              <p>• 其他属性变化（age、email、language）不会触发重新渲染</p>
              <p>• 父组件渲染也不会影响子组件</p>
            </div>
          </div>

          <div className="bg-green-50 p-3 rounded border border-green-200">
            <h4 className="font-semibold text-green-800 mb-2">观察要点：</h4>
            <ul className="text-green-700 text-sm space-y-1">
              <li>• 只有 user.id 或 settings.theme 变化时组件才重新渲染</li>
              <li>• 其他属性变化（age、email、language）不会触发重新渲染</li>
              <li>• 自定义比较函数提供了精确的控制</li>
              <li>• 可以根据业务需求选择关键属性进行比较</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};
`,f=`import React, { useCallback, useMemo, useState } from "react";
import { MemoComponent } from "./BaseComponents";

// 函数引用问题演示组件
export const FunctionReferenceDemo: React.FC = () => {
  const [count, setCount] = useState(0);
  const [userInfo, setUserInfo] = useState({ name: "王五", age: 28 });

  // 错误示例：每次渲染都创建新的函数，导致 memo 失效
  const handleUpdateWrong = () => {
    setUserInfo((prev) => ({
      name: prev.name === "王五" ? "赵六" : "王五",
      age: prev.age === 28 ? 35 : 28,
    }));
  };

  // 正确示例：使用 useCallback 缓存函数引用
  const handleUpdateRight = useCallback(() => {
    setUserInfo((prev) => ({
      name: prev.name === "王五" ? "赵六" : "王五",
      age: prev.age === 28 ? 35 : 28,
    }));
  }, []);

  // 使用 useMemo 缓存复杂计算结果
  const expensiveValue = useMemo(() => {
    console.log("执行复杂计算...");
    return userInfo.name.length * userInfo.age;
  }, [userInfo.name, userInfo.age]);

  return (
    <div className="space-y-6">
      <div className="bg-gray-50 p-4 rounded-lg">
        <h3 className="text-lg font-semibold mb-4">函数引用问题演示</h3>
        <div className="space-y-4">
          <div className="flex gap-4">
            <button
              onClick={() => setCount(count + 1)}
              className="px-4 py-2 bg-purple-500 text-white rounded hover:bg-purple-600"
            >
              触发父组件渲染 (count: {count})
            </button>
            <p className="text-sm text-gray-600 self-center">
              观察左右两个组件的渲染行为差异
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="space-y-2">
              <h4 className="font-semibold text-red-600">❌ 错误示例</h4>
              <MemoComponent
                name={userInfo.name}
                age={userInfo.age}
                onUpdate={handleUpdateWrong} // 每次都是新的函数引用
              />
              <p className="text-xs text-red-600">
                每次渲染都创建新函数，memo 失效
              </p>
            </div>

            <div className="space-y-2">
              <h4 className="font-semibold text-green-600">✅ 正确示例</h4>
              <MemoComponent
                name={userInfo.name}
                age={userInfo.age}
                onUpdate={handleUpdateRight} // 使用 useCallback 缓存
              />
              <p className="text-xs text-green-600">
                使用 useCallback 缓存函数，memo 正常工作
              </p>
            </div>
          </div>

          <div className="bg-blue-50 p-3 rounded border border-blue-200">
            <h4 className="font-semibold text-blue-800 mb-2">
              useMemo 缓存计算结果: {expensiveValue}
            </h4>
            <p className="text-blue-700 text-sm">
              只有当 name 或 age 变化时才会重新计算
            </p>
          </div>

          <div className="bg-orange-50 p-3 rounded border border-orange-200">
            <h4 className="font-semibold text-orange-800 mb-2">观察要点：</h4>
            <ul className="text-orange-700 text-sm space-y-1">
              <li>• 左侧组件每次都重新渲染，因为每次都传入新的函数引用</li>
              <li>• 右侧组件使用 useCallback 缓存函数，memo 正常工作</li>
              <li>• useMemo 用于缓存复杂的计算结果</li>
              <li>• 正确的依赖数组确保缓存的有效性</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};`,k=`// React.memo 相关组件的类型定义\r
\r
// 普通组件和 memo 组件的 props 接口\r
export interface NormalComponentProps {\r
  name: string;\r
  age: number;\r
  onUpdate: () => void;\r
}\r
\r
// 自定义比较组件的 props 接口\r
export interface CustomMemoProps {\r
  user: {\r
    id: number;\r
    name: string;\r
    age: number;\r
    email: string;\r
  };\r
  settings: {\r
    theme: string;\r
    language: string;\r
  };\r
}`,U=()=>e.jsx(h,{title:"React.memo - 组件记忆化",description:"React.memo 是一个高阶组件，用于优化函数组件的性能。它通过记忆化组件的渲染结果，在 props 没有变化时跳过重新渲染，从而提升应用性能。",overview:e.jsx("div",{className:"space-y-4",children:e.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-6",children:[e.jsxs("div",{className:"bg-blue-50 p-4 rounded-lg border border-blue-200",children:[e.jsx("h3",{className:"font-semibold text-blue-800 mb-2",children:"🎯 核心概念"}),e.jsxs("ul",{className:"text-sm text-blue-700 space-y-1",children:[e.jsx("li",{children:"• 记忆化组件渲染结果"}),e.jsx("li",{children:"• 浅比较 props 变化"}),e.jsx("li",{children:"• 自定义比较函数"}),e.jsx("li",{children:"• 性能优化机制"})]})]}),e.jsxs("div",{className:"bg-green-50 p-4 rounded-lg border border-green-200",children:[e.jsx("h3",{className:"font-semibold text-green-800 mb-2",children:"✨ 主要优势"}),e.jsxs("ul",{className:"text-sm text-green-700 space-y-1",children:[e.jsx("li",{children:"• 跳过不必要的渲染"}),e.jsx("li",{children:"• 简单易用的 API"}),e.jsx("li",{children:"• 灵活的比较控制"}),e.jsx("li",{children:"• 向后兼容性好"})]})]}),e.jsxs("div",{className:"bg-yellow-50 p-4 rounded-lg border border-yellow-200",children:[e.jsx("h3",{className:"font-semibold text-yellow-800 mb-2",children:"🎪 适用场景"}),e.jsxs("ul",{className:"text-sm text-yellow-700 space-y-1",children:[e.jsx("li",{children:"• 纯展示组件优化"}),e.jsx("li",{children:"• 列表项组件渲染"}),e.jsx("li",{children:"• 复杂计算组件"}),e.jsx("li",{children:"• 频繁更新场景"})]})]}),e.jsxs("div",{className:"bg-red-50 p-4 rounded-lg border border-red-200",children:[e.jsx("h3",{className:"font-semibold text-red-800 mb-2",children:"⚠️ 注意事项"}),e.jsxs("ul",{className:"text-sm text-red-700 space-y-1",children:[e.jsx("li",{children:"• 避免函数引用变化"}),e.jsx("li",{children:"• 避免对象引用变化"}),e.jsx("li",{children:"• 不要过度使用"}),e.jsx("li",{children:"• 注意比较成本"})]})]})]})}),examples:[{title:"基础 React.memo 演示",component:e.jsx(C,{}),description:"对比普通组件和使用 React.memo 的组件在渲染性能上的差异。",observationPoints:["点击'无关更新'按钮时，只有普通组件会重新渲染","React.memo 组件会跳过渲染，渲染次数保持不变","点击'更新信息'按钮时，两个组件都会重新渲染","这展示了 React.memo 的性能优化效果"],keyPoints:["React.memo 会对 props 进行浅比较","只有 props 发生变化时才会重新渲染","可以显著减少不必要的渲染次数","适用于纯展示组件的性能优化"],commonTraps:["在 JSX 中直接创建对象或数组","在 render 方法中创建新的函数","不正确使用内联样式对象"],solutions:["使用 useMemo 缓存复杂对象","使用 useCallback 缓存函数","将对象定义在组件外部"],importantTips:["左侧组件每次都会重新渲染，因为每次都创建了新的对象引用","右侧组件使用了 React.memo，只有在 props 变化时才会重新渲染"],preCode:[{title:"NormalComponent & MemoComponent",code:g}],codeExample:{title:"React.memo 示例代码",code:x}},{title:"函数引用问题演示",component:e.jsx(j,{}),description:"展示函数引用对 React.memo 效果的影响，以及如何使用 useCallback 解决。",observationPoints:["左侧组件每次都重新渲染，因为每次都传入新的函数引用","右侧组件使用 useCallback 缓存函数，memo 正常工作","useMemo 用于缓存复杂的计算结果","正确的依赖数组确保缓存的有效性"],keyPoints:["每次渲染创建新函数会导致 React.memo 失效","useCallback 可以缓存函数引用","useMemo 可以缓存复杂计算结果","依赖数组决定何时重新创建缓存"],commonTraps:["忘记使用 useCallback 缓存事件处理函数","在 JSX 中使用箭头函数","依赖数组设置不正确"],solutions:["使用 useCallback 包装所有传递给子组件的函数","将函数定义移到组件外部或使用 useCallback","仔细检查和设置依赖数组"],importantTips:["函数引用的稳定性是 React.memo 正常工作的关键","useCallback 和 useMemo 是 React.memo 的最佳搭档"],preCode:[{title:"BasicMemoDemo",code:x}],codeExample:{title:"函数引用问题演示代码",code:f}},{title:"自定义比较函数演示",component:e.jsx(y,{}),description:"展示如何使用自定义比较函数来精确控制组件的重新渲染时机。",observationPoints:["只有 user.id 或 settings.theme 变化时组件才重新渲染","其他属性变化（age、email、language）不会触发重新渲染","自定义比较函数提供了精确的控制","可以根据业务需求选择关键属性进行比较"],keyPoints:["自定义比较函数接收 prevProps 和 nextProps 参数","返回 true 表示 props 相等，跳过渲染","返回 false 表示 props 不同，需要重新渲染","可以实现比浅比较更精确的控制"],commonTraps:["比较函数逻辑过于复杂影响性能","忘记比较某些重要属性","比较函数的返回值逻辑错误"],solutions:["保持比较函数的简单和高效","明确哪些属性变化需要重新渲染","仔细测试比较函数的逻辑"],importantTips:["自定义比较函数适用于复杂 props 结构的场景","比较函数本身也有性能成本，需要权衡使用"],preCode:[{title:"types",code:k},{title:"CustomMemoComponent",code:g}],codeExample:{title:"自定义比较函数示例代码",code:R}}],tutorial:{concepts:["React.memo 是一个高阶组件，用于优化函数组件性能","通过记忆化组件渲染结果，在 props 未变化时跳过重新渲染","默认使用浅比较来判断 props 是否发生变化","可以提供自定义比较函数来精确控制重新渲染时机","需要配合 useCallback 和 useMemo 来确保引用稳定性"],steps:["使用 React.memo 包装需要优化的函数组件","确保传递给组件的 props 引用稳定","使用 useCallback 缓存事件处理函数","使用 useMemo 缓存复杂对象和计算结果","根据需要提供自定义比较函数","测试和验证性能优化效果"],tips:["不是所有组件都需要使用 React.memo，要根据实际情况判断","函数和对象的引用稳定性是 memo 生效的关键","自定义比较函数要保持简单，避免复杂逻辑","使用 React DevTools Profiler 来测量性能改善","在列表渲染和复杂组件树中效果更明显","配合 useCallback 和 useMemo 使用效果更佳"]},interview:{questions:[{question:"React.memo 的工作原理是什么？",answer:"React.memo 是一个高阶组件，它会记忆化组件的渲染结果。当组件的 props 没有发生变化时，React.memo 会跳过组件的重新渲染，直接返回上次渲染的结果。它默认使用浅比较来判断 props 是否发生变化，也可以提供自定义比较函数来精确控制重新渲染的时机。"},{question:"什么情况下 React.memo 会失效？",answer:"React.memo 失效的常见情况：1) 每次渲染都创建新的函数引用作为 props；2) 每次渲染都创建新的对象或数组作为 props；3) 使用内联对象或箭头函数；4) props 中包含不稳定的引用。解决方法是使用 useCallback 缓存函数，使用 useMemo 缓存对象，或将稳定的值移到组件外部。"},{question:"如何正确使用自定义比较函数？",answer:"自定义比较函数的使用要点：1) 函数接收 prevProps 和 nextProps 两个参数；2) 返回 true 表示 props 相等，跳过渲染；返回 false 表示需要重新渲染；3) 只比较对渲染结果有影响的关键属性；4) 保持比较逻辑简单高效；5) 避免在比较函数中执行复杂计算；6) 确保比较逻辑的正确性，避免遗漏重要属性。"},{question:"React.memo 与 useMemo 的区别是什么？",answer:"React.memo 和 useMemo 的区别：1) 作用对象不同 - React.memo 用于组件，useMemo 用于值；2) 使用方式不同 - React.memo 是高阶组件，useMemo 是 Hook；3) 比较机制不同 - React.memo 比较 props，useMemo 比较依赖数组；4) 返回结果不同 - React.memo 返回组件，useMemo 返回计算值；5) 使用场景不同 - React.memo 用于组件性能优化，useMemo 用于计算结果缓存。"},{question:"何时应该使用 React.memo？",answer:"应该使用 React.memo 的场景：1) 纯展示组件，只依赖 props 进行渲染；2) 组件渲染成本较高，包含复杂计算或大量 DOM 操作；3) 父组件频繁更新但子组件 props 相对稳定；4) 列表中的项组件，避免整个列表重新渲染；5) 组件树较深，需要阻止不必要的向下传播。不应过度使用，简单组件的 memo 开销可能大于收益。"}],keyPoints:["React.memo 通过记忆化优化组件渲染性能","默认使用浅比较，可提供自定义比较函数","函数和对象引用的稳定性是关键","需要配合 useCallback 和 useMemo 使用","适用于纯展示组件和渲染成本高的组件","不应过度使用，要根据实际性能需求判断"]},bestPractices:{dos:["在纯展示组件和渲染成本高的组件中使用 React.memo","使用 useCallback 缓存传递给子组件的函数","使用 useMemo 缓存传递给子组件的复杂对象","保持自定义比较函数的简单和高效","使用 React DevTools Profiler 测量性能改善","在列表渲染中合理使用 memo 优化性能","确保比较函数覆盖所有影响渲染的属性","将稳定的值和函数定义在组件外部"],donts:["不要在所有组件中盲目使用 React.memo","不要在 JSX 中使用内联函数和对象","不要忘记使用 useCallback 缓存事件处理函数","不要在比较函数中执行复杂的计算逻辑","不要忽略函数和对象引用的稳定性","不要过度优化简单的展示组件","不要在比较函数中遗漏重要属性","不要依赖 memo 解决所有性能问题"],patterns:["组件记忆化模式 - 使用 React.memo 包装纯展示组件","引用稳定化模式 - 配合 useCallback 和 useMemo 确保引用稳定","自定义比较模式 - 根据业务需求实现精确的比较逻辑","列表优化模式 - 在列表项组件中使用 memo 避免不必要渲染","深度优化模式 - 在组件树中合理使用 memo 阻止渲染传播","性能测量模式 - 使用工具测量和验证优化效果","条件记忆化模式 - 根据组件复杂度决定是否使用 memo","组合优化模式 - 结合多种优化技术提升整体性能"]}});export{U as default};
