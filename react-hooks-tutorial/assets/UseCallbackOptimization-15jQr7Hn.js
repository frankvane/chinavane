import{r as s,j as e}from"./index-D5aG88J3.js";import{C as w}from"./ComponentTemplate-DZf1RTVD.js";let v=0;const N=s.memo(({name:n,onClick:l,onUpdate:a})=>(v++,e.jsxs("div",{className:"p-3 border border-gray-300 rounded bg-gray-50",children:[e.jsxs("h4",{className:"font-medium text-gray-800",children:["子组件: ",n]}),e.jsxs("p",{className:"text-sm text-gray-600",children:["渲染次数: ",v]}),e.jsxs("div",{className:"mt-2 space-x-2",children:[e.jsx("button",{onClick:l,className:"px-3 py-1 bg-blue-500 text-white rounded hover:bg-blue-600 text-sm",children:"点击事件"}),a&&e.jsx("button",{onClick:()=>a("更新值"),className:"px-3 py-1 bg-green-500 text-white rounded hover:bg-green-600 text-sm",children:"更新事件"})]})]})));let y=0;const f=s.memo(({item:n,onToggle:l,onDelete:a})=>(y++,e.jsxs("div",{className:"flex items-center justify-between p-2 border border-gray-200 rounded bg-white",children:[e.jsxs("div",{className:"flex items-center space-x-2",children:[e.jsx("input",{type:"checkbox",checked:n.completed,onChange:()=>l(n.id),className:"rounded"}),e.jsx("span",{className:n.completed?"line-through text-gray-500":"text-gray-800",children:n.name})]}),e.jsxs("div",{className:"flex items-center space-x-2",children:[e.jsxs("span",{className:"text-xs text-gray-500",children:["渲染: ",y]}),e.jsx("button",{onClick:()=>a(n.id),className:"px-2 py-1 bg-red-500 text-white rounded hover:bg-red-600 text-xs",children:"删除"})]})]}))),I=()=>{v=0},S=()=>{const[n,l]=s.useState(0),[a,u]=s.useState("张三"),[c,m]=s.useState(0),b=()=>{console.log("点击事件（无 callback）"),alert(`Hello ${a}!`)},x=s.useCallback(()=>{console.log("点击事件（有 callback）"),alert(`Hello ${a}!`)},[a]),h=s.useCallback(p=>{console.log("更新事件（有 callback）",p),u(r=>`${r}-${p}`)},[]),g=()=>{I(),l(0),m(0)};return e.jsx("div",{className:"space-y-6",children:e.jsxs("div",{className:"bg-white p-6 rounded-lg border border-gray-200",children:[e.jsx("h3",{className:"text-lg font-semibold mb-4",children:"useCallback 基础对比"}),e.jsxs("div",{className:"mb-4 space-x-2 space-y-2",children:[e.jsxs("button",{onClick:()=>l(n+1),className:"px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600",children:["更新计数 (count: ",n,")"]}),e.jsxs("button",{onClick:()=>u(a==="张三"?"李四":"张三"),className:"px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600",children:["更新姓名 (name: ",a,")"]}),e.jsxs("button",{onClick:()=>m(c+1),className:"px-4 py-2 bg-purple-500 text-white rounded hover:bg-purple-600",children:["更新其他状态 (other: ",c,")"]}),e.jsx("button",{onClick:g,className:"px-4 py-2 bg-gray-500 text-white rounded hover:bg-gray-600",children:"重置计数"})]}),e.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-4",children:[e.jsxs("div",{className:"space-y-3",children:[e.jsx("h4",{className:"font-medium text-red-800",children:"❌ 不使用 useCallback"}),e.jsx(N,{name:"子组件A",onClick:b}),e.jsx("p",{className:"text-xs text-red-600",children:"每次父组件渲染都会创建新函数，导致子组件重新渲染"})]}),e.jsxs("div",{className:"space-y-3",children:[e.jsx("h4",{className:"font-medium text-green-800",children:"✅ 使用 useCallback"}),e.jsx(N,{name:"子组件B",onClick:x,onUpdate:h}),e.jsx("p",{className:"text-xs text-green-600",children:"函数引用稳定，子组件只在必要时重新渲染"})]})]}),e.jsxs("div",{className:"mt-4 p-3 bg-yellow-50 border border-yellow-200 rounded",children:[e.jsx("h4",{className:"font-medium text-yellow-800 mb-2",children:"观察要点："}),e.jsxs("ul",{className:"text-sm text-yellow-700 space-y-1",children:[e.jsx("li",{children:'• 点击"更新计数"或"更新其他状态"时，左侧子组件会重新渲染'}),e.jsx("li",{children:"• 右侧子组件使用了 useCallback，不会因为无关状态变化而重新渲染"}),e.jsx("li",{children:'• 点击"更新姓名"时，两个子组件都会重新渲染（因为依赖变化）'}),e.jsx("li",{children:"• 这展示了 useCallback 在优化子组件渲染方面的效果"})]})]})]})})},R=()=>{const[n,l]=s.useState([{id:1,name:"学习 React",completed:!1},{id:2,name:"学习 TypeScript",completed:!0},{id:3,name:"学习 Node.js",completed:!1}]),[a,u]=s.useState(""),[c,m]=s.useState("all"),b=t=>{l(i=>i.map(o=>o.id===t?{...o,completed:!o.completed}:o))},x=t=>{l(i=>i.filter(o=>o.id!==t))},h=s.useCallback(t=>{l(i=>i.map(o=>o.id===t?{...o,completed:!o.completed}:o))},[]),g=s.useCallback(t=>{l(i=>i.filter(o=>o.id!==t))},[]),p=s.useCallback(()=>{if(a.trim()){const t={id:Date.now(),name:a.trim(),completed:!1};l(i=>[...i,t]),u("")}},[a]),r=s.useMemo(()=>{switch(c){case"completed":return n.filter(t=>t.completed);case"active":return n.filter(t=>!t.completed);default:return n}},[n,c]),d=s.useMemo(()=>{const t=n.length,i=n.filter(j=>j.completed).length,o=t-i;return{total:t,completed:i,active:o}},[n]);return e.jsx("div",{className:"space-y-6",children:e.jsxs("div",{className:"bg-white p-6 rounded-lg border border-gray-200",children:[e.jsx("h3",{className:"text-lg font-semibold mb-4",children:"列表渲染优化"}),e.jsxs("div",{className:"mb-4 flex space-x-2",children:[e.jsx("input",{type:"text",placeholder:"添加新任务...",value:a,onChange:t=>u(t.target.value),onKeyPress:t=>t.key==="Enter"&&p(),className:"flex-1 px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"}),e.jsx("button",{onClick:p,className:"px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600",children:"添加"})]}),e.jsxs("div",{className:"mb-4 flex space-x-2",children:[e.jsxs("button",{onClick:()=>m("all"),className:`px-3 py-1 rounded text-sm ${c==="all"?"bg-blue-500 text-white":"bg-gray-200 text-gray-700"}`,children:["全部 (",d.total,")"]}),e.jsxs("button",{onClick:()=>m("active"),className:`px-3 py-1 rounded text-sm ${c==="active"?"bg-blue-500 text-white":"bg-gray-200 text-gray-700"}`,children:["未完成 (",d.active,")"]}),e.jsxs("button",{onClick:()=>m("completed"),className:`px-3 py-1 rounded text-sm ${c==="completed"?"bg-blue-500 text-white":"bg-gray-200 text-gray-700"}`,children:["已完成 (",d.completed,")"]})]}),e.jsxs("div",{className:"grid grid-cols-1 lg:grid-cols-2 gap-6",children:[e.jsxs("div",{children:[e.jsx("h4",{className:"font-medium text-red-800 mb-3",children:"❌ 不使用 useCallback"}),e.jsx("div",{className:"space-y-2 max-h-64 overflow-y-auto",children:r.map(t=>e.jsx(f,{item:t,onToggle:b,onDelete:x},`without-${t.id}`))}),e.jsx("p",{className:"text-xs text-red-600 mt-2",children:"每次父组件渲染都会创建新的事件处理函数"})]}),e.jsxs("div",{children:[e.jsx("h4",{className:"font-medium text-green-800 mb-3",children:"✅ 使用 useCallback"}),e.jsx("div",{className:"space-y-2 max-h-64 overflow-y-auto",children:r.map(t=>e.jsx(f,{item:t,onToggle:h,onDelete:g},`with-${t.id}`))}),e.jsx("p",{className:"text-xs text-green-600 mt-2",children:"事件处理函数引用稳定，减少不必要的重新渲染"})]})]}),e.jsxs("div",{className:"mt-4 p-3 bg-blue-50 border border-blue-200 rounded",children:[e.jsx("h4",{className:"font-medium text-blue-800 mb-2",children:"性能统计："}),e.jsxs("div",{className:"text-sm text-blue-700",children:[e.jsxs("p",{children:["总任务数: ",d.total," | 已完成: ",d.completed," | 未完成:"," ",d.active]}),e.jsx("p",{className:"text-xs mt-1",children:"观察列表项的渲染次数，右侧应该明显少于左侧"})]})]})]})})},U=()=>{const[n,l]=s.useState({name:"张三",email:"zhangsan@example.com"}),[a,u]=s.useState({theme:"light",language:"zh"}),[c,m]=s.useState(0),b=s.useCallback(()=>{console.log("当前用户:",n.name),alert(`用户信息: ${n.name} (${n.email})`)},[]),x=s.useCallback(()=>{m(r=>r+1)},[c,a]),h=s.useCallback(()=>{console.log("当前用户:",n.name),alert(`用户信息: ${n.name} (${n.email})`)},[n.name,n.email]),g=s.useCallback(()=>{m(r=>r+1)},[]),p=s.useCallback(()=>{const r=`${n.name} (${n.email})`,d=`主题: ${a.theme}, 语言: ${a.language}`,t=`${r} - ${d} - 计数: ${c}`;console.log("复杂操作结果:",t),alert(t)},[n.name,n.email,a.theme,a.language,c]);return e.jsx("div",{className:"space-y-6",children:e.jsxs("div",{className:"bg-white p-6 rounded-lg border border-gray-200",children:[e.jsx("h3",{className:"text-lg font-semibold mb-4",children:"useCallback 依赖陷阱"}),e.jsxs("div",{className:"mb-6 space-x-2 space-y-2",children:[e.jsxs("button",{onClick:()=>l(r=>({...r,name:r.name==="张三"?"李四":"张三"})),className:"px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600",children:["更新用户姓名 (",n.name,")"]}),e.jsx("button",{onClick:()=>l(r=>({...r,email:r.email==="zhangsan@example.com"?"lisi@example.com":"zhangsan@example.com"})),className:"px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600",children:"更新用户邮箱"}),e.jsxs("button",{onClick:()=>u(r=>({...r,theme:r.theme==="light"?"dark":"light"})),className:"px-4 py-2 bg-purple-500 text-white rounded hover:bg-purple-600",children:["切换主题 (",a.theme,")"]}),e.jsxs("button",{onClick:()=>m(r=>r+1),className:"px-4 py-2 bg-orange-500 text-white rounded hover:bg-orange-600",children:["增加计数器 (",c,")"]})]}),e.jsxs("div",{className:"space-y-4",children:[e.jsxs("div",{className:"p-4 bg-red-50 border border-red-200 rounded",children:[e.jsx("h4",{className:"font-medium text-red-800 mb-3",children:"❌ 错误示例"}),e.jsxs("div",{className:"space-x-2 space-y-2",children:[e.jsx("button",{onClick:b,className:"px-3 py-1 bg-red-500 text-white rounded text-sm hover:bg-red-600",children:"缺少依赖的用户更新"}),e.jsx("button",{onClick:x,className:"px-3 py-1 bg-red-500 text-white rounded text-sm hover:bg-red-600",children:"不必要依赖的计数器"})]}),e.jsx("p",{className:"text-xs text-red-600 mt-2",children:"左侧按钮可能显示过期的用户信息，右侧按钮会因为不必要的依赖而频繁重新创建"})]}),e.jsxs("div",{className:"p-4 bg-green-50 border border-green-200 rounded",children:[e.jsx("h4",{className:"font-medium text-green-800 mb-3",children:"✅ 正确示例"}),e.jsxs("div",{className:"space-x-2 space-y-2",children:[e.jsx("button",{onClick:h,className:"px-3 py-1 bg-green-500 text-white rounded text-sm hover:bg-green-600",children:"准确依赖的用户更新"}),e.jsx("button",{onClick:g,className:"px-3 py-1 bg-green-500 text-white rounded text-sm hover:bg-green-600",children:"函数式更新计数器"}),e.jsx("button",{onClick:p,className:"px-3 py-1 bg-green-500 text-white rounded text-sm hover:bg-green-600",children:"复杂操作"})]}),e.jsx("p",{className:"text-xs text-green-600 mt-2",children:"这些按钮都有正确的依赖处理，既保证了功能正确性，又优化了性能"})]})]}),e.jsxs("div",{className:"mt-4 p-3 bg-yellow-50 border border-yellow-200 rounded",children:[e.jsx("h4",{className:"font-medium text-yellow-800 mb-2",children:"观察要点："}),e.jsxs("ul",{className:"text-sm text-yellow-700 space-y-1",children:[e.jsxs("li",{children:["• ",e.jsx("strong",{children:"缺少依赖："}),'更新用户信息后，点击"缺少依赖的用户更新"可能显示旧信息']}),e.jsxs("li",{children:["• ",e.jsx("strong",{children:"不必要依赖："}),'"不必要依赖的计数器"会在任何状态变化时重新创建']}),e.jsxs("li",{children:["• ",e.jsx("strong",{children:"准确依赖："}),'"准确依赖的用户更新"总是显示最新的用户信息']}),e.jsxs("li",{children:["• ",e.jsx("strong",{children:"函数式更新："}),'"函数式更新计数器"避免了对 counter 的依赖']}),e.jsxs("li",{children:["• ",e.jsx("strong",{children:"复杂操作："}),"正确处理了多个依赖项的复杂业务逻辑"]})]})]})]})})},C=`import React, { memo } from "react";\r
import { ChildComponentProps, ListItemProps } from "./types";\r
\r
// 子组件渲染计数器\r
let childRenderCount = 0;\r
\r
// 子组件用于演示 useCallback 的效果\r
export const ChildComponent = memo<ChildComponentProps>(\r
  ({ name, onClick, onUpdate }) => {\r
    childRenderCount++;\r
\r
    return (\r
      <div className="p-3 border border-gray-300 rounded bg-gray-50">\r
        <h4 className="font-medium text-gray-800">子组件: {name}</h4>\r
        <p className="text-sm text-gray-600">渲染次数: {childRenderCount}</p>\r
        <div className="mt-2 space-x-2">\r
          <button\r
            onClick={onClick}\r
            className="px-3 py-1 bg-blue-500 text-white rounded hover:bg-blue-600 text-sm"\r
          >\r
            点击事件\r
          </button>\r
          {onUpdate && (\r
            <button\r
              onClick={() => onUpdate("更新值")}\r
              className="px-3 py-1 bg-green-500 text-white rounded hover:bg-green-600 text-sm"\r
            >\r
              更新事件\r
            </button>\r
          )}\r
        </div>\r
      </div>\r
    );\r
  }\r
);\r
\r
// 列表项渲染计数器\r
let listItemRenderCount = 0;\r
\r
// 列表项组件\r
export const ListItem = memo<ListItemProps>(({ item, onToggle, onDelete }) => {\r
  listItemRenderCount++;\r
\r
  return (\r
    <div className="flex items-center justify-between p-2 border border-gray-200 rounded bg-white">\r
      <div className="flex items-center space-x-2">\r
        <input\r
          type="checkbox"\r
          checked={item.completed}\r
          onChange={() => onToggle(item.id)}\r
          className="rounded"\r
        />\r
        <span\r
          className={\r
            item.completed ? "line-through text-gray-500" : "text-gray-800"\r
          }\r
        >\r
          {item.name}\r
        </span>\r
      </div>\r
      <div className="flex items-center space-x-2">\r
        <span className="text-xs text-gray-500">\r
          渲染: {listItemRenderCount}\r
        </span>\r
        <button\r
          onClick={() => onDelete(item.id)}\r
          className="px-2 py-1 bg-red-500 text-white rounded hover:bg-red-600 text-xs"\r
        >\r
          删除\r
        </button>\r
      </div>\r
    </div>\r
  );\r
});\r
\r
// 重置渲染计数器的工具函数\r
export const resetChildRenderCount = () => {\r
  childRenderCount = 0;\r
};\r
\r
export const resetListItemRenderCount = () => {\r
  listItemRenderCount = 0;\r
};`,$=`import React, { useCallback, useState } from "react";
import { ChildComponent, resetChildRenderCount } from "./BaseComponents";

// 基础 useCallback 演示
export const BasicUseCallbackDemo: React.FC = () => {
  const [count, setCount] = useState(0);
  const [name, setName] = useState("张三");
  const [otherState, setOtherState] = useState(0);

  // 不使用 useCallback 的函数（每次渲染都创建新函数）
  const handleClickWithoutCallback = () => {
    console.log("点击事件（无 callback）");
    alert(\`Hello \${name}!\`);
  };

  // 使用 useCallback 的函数（只有依赖变化时才创建新函数）
  const handleClickWithCallback = useCallback(() => {
    console.log("点击事件（有 callback）");
    alert(\`Hello \${name}!\`);
  }, [name]);

  // 复杂的事件处理函数
  const handleUpdateWithCallback = useCallback((value: string) => {
    console.log("更新事件（有 callback）", value);
    setName((prev) => \`\${prev}-\${value}\`);
  }, []);

  const resetCounts = () => {
    resetChildRenderCount();
    setCount(0);
    setOtherState(0);
  };

  return (
    <div className="space-y-6">
      <div className="bg-white p-6 rounded-lg border border-gray-200">
        <h3 className="text-lg font-semibold mb-4">useCallback 基础对比</h3>

        <div className="mb-4 space-x-2 space-y-2">
          <button
            onClick={() => setCount(count + 1)}
            className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
          >
            更新计数 (count: {count})
          </button>
          <button
            onClick={() => setName(name === "张三" ? "李四" : "张三")}
            className="px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600"
          >
            更新姓名 (name: {name})
          </button>
          <button
            onClick={() => setOtherState(otherState + 1)}
            className="px-4 py-2 bg-purple-500 text-white rounded hover:bg-purple-600"
          >
            更新其他状态 (other: {otherState})
          </button>
          <button
            onClick={resetCounts}
            className="px-4 py-2 bg-gray-500 text-white rounded hover:bg-gray-600"
          >
            重置计数
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="space-y-3">
            <h4 className="font-medium text-red-800">❌ 不使用 useCallback</h4>
            <ChildComponent
              name="子组件A"
              onClick={handleClickWithoutCallback}
            />
            <p className="text-xs text-red-600">
              每次父组件渲染都会创建新函数，导致子组件重新渲染
            </p>
          </div>

          <div className="space-y-3">
            <h4 className="font-medium text-green-800">✅ 使用 useCallback</h4>
            <ChildComponent
              name="子组件B"
              onClick={handleClickWithCallback}
              onUpdate={handleUpdateWithCallback}
            />
            <p className="text-xs text-green-600">
              函数引用稳定，子组件只在必要时重新渲染
            </p>
          </div>
        </div>

        <div className="mt-4 p-3 bg-yellow-50 border border-yellow-200 rounded">
          <h4 className="font-medium text-yellow-800 mb-2">观察要点：</h4>
          <ul className="text-sm text-yellow-700 space-y-1">
            <li>• 点击"更新计数"或"更新其他状态"时，左侧子组件会重新渲染</li>
            <li>
              • 右侧子组件使用了 useCallback，不会因为无关状态变化而重新渲染
            </li>
            <li>• 点击"更新姓名"时，两个子组件都会重新渲染（因为依赖变化）</li>
            <li>• 这展示了 useCallback 在优化子组件渲染方面的效果</li>
          </ul>
        </div>
      </div>
    </div>
  );
};`,D=`import React, { useCallback, useState } from "react";
import { User, Settings } from "./types";

// useCallback 依赖陷阱演示
export const CallbackDependencyDemo: React.FC = () => {
  const [user, setUser] = useState<User>({
    name: "张三",
    email: "zhangsan@example.com",
  });
  const [settings, setSettings] = useState<Settings>({
    theme: "light",
    language: "zh",
  });
  const [counter, setCounter] = useState(0);

  // ❌ 错误示例1：缺少依赖
  const handleUserUpdateMissingDep = useCallback(() => {
    console.log("当前用户:", user.name); // 使用了 user，但没有在依赖中声明
    alert(\`用户信息: \${user.name} (\${user.email})\`);
  }, []); // 依赖数组为空，但函数内部使用了 user

  // ❌ 错误示例2：不必要的依赖
  const handleCounterUpdateUnnecessaryDep = useCallback(() => {
    setCounter((prev) => prev + 1); // 使用函数式更新，不需要 counter 作为依赖
  }, [counter, settings]); // counter 和 settings 都是不必要的依赖

  // ✅ 正确示例1：准确的依赖
  const handleUserUpdateCorrectDep = useCallback(() => {
    console.log("当前用户:", user.name);
    alert(\`用户信息: \${user.name} (\${user.email})\`);
  }, [user.name, user.email]); // 只依赖实际使用的值

  // ✅ 正确示例2：使用函数式更新避免依赖
  const handleCounterUpdateFunctional = useCallback(() => {
    setCounter((prev) => prev + 1);
  }, []); // 使用函数式更新，无需依赖 counter

  // ✅ 正确示例3：复杂操作的正确依赖处理
  const handleComplexOperation = useCallback(() => {
    // 复杂的业务逻辑
    const userInfo = \`\${user.name} (\${user.email})\`;
    const themeInfo = \`主题: \${settings.theme}, 语言: \${settings.language}\`;
    const result = \`\${userInfo} - \${themeInfo} - 计数: \${counter}\`;
    
    console.log("复杂操作结果:", result);
    alert(result);
  }, [user.name, user.email, settings.theme, settings.language, counter]);

  return (
    <div className="space-y-6">
      <div className="bg-white p-6 rounded-lg border border-gray-200">
        <h3 className="text-lg font-semibold mb-4">useCallback 依赖陷阱</h3>

        {/* 控制按钮 */}
        <div className="mb-6 space-x-2 space-y-2">
          <button
            onClick={() =>
              setUser((prev) => ({
                ...prev,
                name: prev.name === "张三" ? "李四" : "张三",
              }))
            }
            className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
          >
            更新用户姓名 ({user.name})
          </button>
          <button
            onClick={() =>
              setUser((prev) => ({
                ...prev,
                email:
                  prev.email === "zhangsan@example.com"
                    ? "lisi@example.com"
                    : "zhangsan@example.com",
              }))
            }
            className="px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600"
          >
            更新用户邮箱
          </button>
          <button
            onClick={() =>
              setSettings((prev) => ({
                ...prev,
                theme: prev.theme === "light" ? "dark" : "light",
              }))
            }
            className="px-4 py-2 bg-purple-500 text-white rounded hover:bg-purple-600"
          >
            切换主题 ({settings.theme})
          </button>
          <button
            onClick={() => setCounter((prev) => prev + 1)}
            className="px-4 py-2 bg-orange-500 text-white rounded hover:bg-orange-600"
          >
            增加计数器 ({counter})
          </button>
        </div>

        {/* 示例对比 */}
        <div className="space-y-4">
          {/* 错误示例 */}
          <div className="p-4 bg-red-50 border border-red-200 rounded">
            <h4 className="font-medium text-red-800 mb-3">❌ 错误示例</h4>
            <div className="space-x-2 space-y-2">
              <button
                onClick={handleUserUpdateMissingDep}
                className="px-3 py-1 bg-red-500 text-white rounded text-sm hover:bg-red-600"
              >
                缺少依赖的用户更新
              </button>
              <button
                onClick={handleCounterUpdateUnnecessaryDep}
                className="px-3 py-1 bg-red-500 text-white rounded text-sm hover:bg-red-600"
              >
                不必要依赖的计数器
              </button>
            </div>
            <p className="text-xs text-red-600 mt-2">
              左侧按钮可能显示过期的用户信息，右侧按钮会因为不必要的依赖而频繁重新创建
            </p>
          </div>

          {/* 正确示例 */}
          <div className="p-4 bg-green-50 border border-green-200 rounded">
            <h4 className="font-medium text-green-800 mb-3">✅ 正确示例</h4>
            <div className="space-x-2 space-y-2">
              <button
                onClick={handleUserUpdateCorrectDep}
                className="px-3 py-1 bg-green-500 text-white rounded text-sm hover:bg-green-600"
              >
                准确依赖的用户更新
              </button>
              <button
                onClick={handleCounterUpdateFunctional}
                className="px-3 py-1 bg-green-500 text-white rounded text-sm hover:bg-green-600"
              >
                函数式更新计数器
              </button>
              <button
                onClick={handleComplexOperation}
                className="px-3 py-1 bg-green-500 text-white rounded text-sm hover:bg-green-600"
              >
                复杂操作
              </button>
            </div>
            <p className="text-xs text-green-600 mt-2">
              这些按钮都有正确的依赖处理，既保证了功能正确性，又优化了性能
            </p>
          </div>
        </div>

        <div className="mt-4 p-3 bg-yellow-50 border border-yellow-200 rounded">
          <h4 className="font-medium text-yellow-800 mb-2">观察要点：</h4>
          <ul className="text-sm text-yellow-700 space-y-1">
            <li>
              • <strong>缺少依赖：</strong>更新用户信息后，点击"缺少依赖的用户更新"可能显示旧信息
            </li>
            <li>
              • <strong>不必要依赖：</strong>"不必要依赖的计数器"会在任何状态变化时重新创建
            </li>
            <li>
              • <strong>准确依赖：</strong>"准确依赖的用户更新"总是显示最新的用户信息
            </li>
            <li>
              • <strong>函数式更新：</strong>"函数式更新计数器"避免了对 counter 的依赖
            </li>
            <li>
              • <strong>复杂操作：</strong>正确处理了多个依赖项的复杂业务逻辑
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};`,T=`import React, { useCallback, useMemo, useState } from "react";\r
import { ListItem } from "./BaseComponents";\r
import { TodoItem, FilterType } from "./types";\r
\r
// 列表优化演示\r
export const ListOptimizationDemo: React.FC = () => {\r
  const [items, setItems] = useState<TodoItem[]>([\r
    { id: 1, name: "学习 React", completed: false },\r
    { id: 2, name: "学习 TypeScript", completed: true },\r
    { id: 3, name: "学习 Node.js", completed: false },\r
  ]);\r
  const [newItemName, setNewItemName] = useState("");\r
  const [filter, setFilter] = useState<FilterType>("all");\r
\r
  // 不使用 useCallback 的事件处理函数\r
  const handleToggleWithoutCallback = (id: number) => {\r
    setItems((prev) =>\r
      prev.map((item) =>\r
        item.id === id ? { ...item, completed: !item.completed } : item\r
      )\r
    );\r
  };\r
\r
  const handleDeleteWithoutCallback = (id: number) => {\r
    setItems((prev) => prev.filter((item) => item.id !== id));\r
  };\r
\r
  // 使用 useCallback 的事件处理函数\r
  const handleToggleWithCallback = useCallback((id: number) => {\r
    setItems((prev) =>\r
      prev.map((item) =>\r
        item.id === id ? { ...item, completed: !item.completed } : item\r
      )\r
    );\r
  }, []);\r
\r
  const handleDeleteWithCallback = useCallback((id: number) => {\r
    setItems((prev) => prev.filter((item) => item.id !== id));\r
  }, []);\r
\r
  // 添加新项目\r
  const handleAddItem = useCallback(() => {\r
    if (newItemName.trim()) {\r
      const newItem: TodoItem = {\r
        id: Date.now(),\r
        name: newItemName.trim(),\r
        completed: false,\r
      };\r
      setItems((prev) => [...prev, newItem]);\r
      setNewItemName("");\r
    }\r
  }, [newItemName]);\r
\r
  // 过滤项目\r
  const filteredItems = useMemo(() => {\r
    switch (filter) {\r
      case "completed":\r
        return items.filter((item) => item.completed);\r
      case "active":\r
        return items.filter((item) => !item.completed);\r
      default:\r
        return items;\r
    }\r
  }, [items, filter]);\r
\r
  // 统计信息\r
  const stats = useMemo(() => {\r
    const total = items.length;\r
    const completed = items.filter((item) => item.completed).length;\r
    const active = total - completed;\r
    return { total, completed, active };\r
  }, [items]);\r
\r
  return (\r
    <div className="space-y-6">\r
      <div className="bg-white p-6 rounded-lg border border-gray-200">\r
        <h3 className="text-lg font-semibold mb-4">列表渲染优化</h3>\r
\r
        {/* 添加新项目 */}\r
        <div className="mb-4 flex space-x-2">\r
          <input\r
            type="text"\r
            placeholder="添加新任务..."\r
            value={newItemName}\r
            onChange={(e) => setNewItemName(e.target.value)}\r
            onKeyPress={(e) => e.key === "Enter" && handleAddItem()}\r
            className="flex-1 px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"\r
          />\r
          <button\r
            onClick={handleAddItem}\r
            className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"\r
          >\r
            添加\r
          </button>\r
        </div>\r
\r
        {/* 过滤器 */}\r
        <div className="mb-4 flex space-x-2">\r
          <button\r
            onClick={() => setFilter("all")}\r
            className={\`px-3 py-1 rounded text-sm \${\r
              filter === "all"\r
                ? "bg-blue-500 text-white"\r
                : "bg-gray-200 text-gray-700"\r
            }\`}\r
          >\r
            全部 ({stats.total})\r
          </button>\r
          <button\r
            onClick={() => setFilter("active")}\r
            className={\`px-3 py-1 rounded text-sm \${\r
              filter === "active"\r
                ? "bg-blue-500 text-white"\r
                : "bg-gray-200 text-gray-700"\r
            }\`}\r
          >\r
            未完成 ({stats.active})\r
          </button>\r
          <button\r
            onClick={() => setFilter("completed")}\r
            className={\`px-3 py-1 rounded text-sm \${\r
              filter === "completed"\r
                ? "bg-blue-500 text-white"\r
                : "bg-gray-200 text-gray-700"\r
            }\`}\r
          >\r
            已完成 ({stats.completed})\r
          </button>\r
        </div>\r
\r
        {/* 列表对比 */}\r
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">\r
          <div>\r
            <h4 className="font-medium text-red-800 mb-3">\r
              ❌ 不使用 useCallback\r
            </h4>\r
            <div className="space-y-2 max-h-64 overflow-y-auto">\r
              {filteredItems.map((item) => (\r
                <ListItem\r
                  key={\`without-\${item.id}\`}\r
                  item={item}\r
                  onToggle={handleToggleWithoutCallback}\r
                  onDelete={handleDeleteWithoutCallback}\r
                />\r
              ))}\r
            </div>\r
            <p className="text-xs text-red-600 mt-2">\r
              每次父组件渲染都会创建新的事件处理函数\r
            </p>\r
          </div>\r
\r
          <div>\r
            <h4 className="font-medium text-green-800 mb-3">\r
              ✅ 使用 useCallback\r
            </h4>\r
            <div className="space-y-2 max-h-64 overflow-y-auto">\r
              {filteredItems.map((item) => (\r
                <ListItem\r
                  key={\`with-\${item.id}\`}\r
                  item={item}\r
                  onToggle={handleToggleWithCallback}\r
                  onDelete={handleDeleteWithCallback}\r
                />\r
              ))}\r
            </div>\r
            <p className="text-xs text-green-600 mt-2">\r
              事件处理函数引用稳定，减少不必要的重新渲染\r
            </p>\r
          </div>\r
        </div>\r
\r
        <div className="mt-4 p-3 bg-blue-50 border border-blue-200 rounded">\r
          <h4 className="font-medium text-blue-800 mb-2">性能统计：</h4>\r
          <div className="text-sm text-blue-700">\r
            <p>\r
              总任务数: {stats.total} | 已完成: {stats.completed} | 未完成:{" "}\r
              {stats.active}\r
            </p>\r
            <p className="text-xs mt-1">\r
              观察列表项的渲染次数，右侧应该明显少于左侧\r
            </p>\r
          </div>\r
        </div>\r
      </div>\r
    </div>\r
  );\r
};`,k=`// 子组件属性接口
export interface ChildComponentProps {
  name: string;
  onClick: () => void;
  onUpdate?: (value: string) => void;
}

// 列表项属性接口
export interface ListItemProps {
  item: { id: number; name: string; completed: boolean };
  onToggle: (id: number) => void;
  onDelete: (id: number) => void;
}

// 任务项接口
export interface TodoItem {
  id: number;
  name: string;
  completed: boolean;
}

// 用户信息接口
export interface User {
  id: number;
  name: string;
  email: string;
}

// 设置信息接口
export interface Settings {
  theme: "light" | "dark";
  notifications: boolean;
}

// 过滤器类型
export type FilterType = "all" | "completed" | "active";`,E=()=>e.jsx(w,{title:"useCallback - 函数记忆化",description:"useCallback 是 React 提供的性能优化 Hook，用于缓存函数引用。它返回一个记忆化的回调函数，只有在依赖项发生变化时才会返回新的函数引用，从而避免子组件因为函数引用变化而不必要的重新渲染。",overview:[{title:"核心概念",items:["函数记忆化","引用稳定","依赖追踪","子组件优化"]},{title:"主要优势",items:["性能优化","引用稳定","内存优化","配合性强"]},{title:"适用场景",items:["事件处理","列表渲染","Effect 依赖","自定义 Hook"]},{title:"注意事项",items:["依赖数组","过度使用","闭包陷阱","内存开销"]}],examples:[{title:"基础 useCallback 演示",component:e.jsx(S,{}),description:"对比使用和不使用 useCallback 对子组件渲染性能的影响。",observationPoints:["点击'更新计数'或'更新其他状态'时，左侧子组件会重新渲染","右侧子组件使用了 useCallback，不会因为无关状态变化而重新渲染","点击'更新姓名'时，两个子组件都会重新渲染（因为依赖变化）","这展示了 useCallback 在优化子组件渲染方面的效果"],keyPoints:["useCallback 保持函数引用的稳定性","配合 React.memo 可以优化子组件渲染","只有依赖项变化时才创建新函数","适用于传递给子组件的事件处理函数"],commonTraps:["忘记使用 useCallback 缓存传递给子组件的函数","在 JSX 中直接定义事件处理函数","依赖数组设置不正确"],solutions:["对所有传递给子组件的函数使用 useCallback","将事件处理函数定义在组件内部并使用 useCallback","仔细检查函数中使用的所有变量"],importantTips:["左侧子组件每次父组件渲染都会重新渲染","右侧子组件只在必要时重新渲染，性能更优"],preCode:[{title:"Types",code:k},{title:"BaseComponents",code:C}],codeExample:{title:"基础 useCallback 演示",code:$}},{title:"列表渲染优化",component:e.jsx(R,{}),description:"展示在列表渲染场景中使用 useCallback 优化性能的效果。",observationPoints:["添加、删除、切换任务状态时观察渲染次数","左侧列表项会频繁重新渲染","右侧列表项只在必要时重新渲染","过滤器切换时观察性能差异"],keyPoints:["列表渲染是 useCallback 的典型应用场景","事件处理函数的稳定性影响整个列表的性能","使用函数式更新可以避免对状态的依赖","配合 useMemo 可以进一步优化列表过滤"],commonTraps:["每次渲染都创建新的事件处理函数","忘记对列表项组件使用 React.memo","依赖数组包含不必要的依赖"],solutions:["使用 useCallback 缓存所有事件处理函数","对列表项组件使用 React.memo 优化","使用函数式更新减少依赖"],importantTips:["在大型列表中，useCallback 的优化效果更加明显","观察列表项的渲染次数可以直观看到优化效果"],preCode:[{title:"Types",code:k},{title:"BaseComponents",code:C}],codeExample:{title:"列表渲染优化演示",code:T}},{title:"依赖数组陷阱演示",component:e.jsx(U,{}),description:"展示 useCallback 依赖数组的常见错误和最佳实践。",observationPoints:["'缺少依赖'的按钮可能显示过期的用户信息","'不必要依赖'的按钮会因为无关状态变化而重新创建","'准确依赖'的按钮只在必要时重新创建","函数式更新可以避免对状态的依赖"],keyPoints:["依赖数组必须包含函数中使用的所有变量","不应包含不必要的依赖项","函数式更新可以减少依赖","闭包陷阱会导致获取到过期的值"],commonTraps:["缺少必要的依赖项导致闭包陷阱","包含不必要的依赖导致过度重新创建","依赖整个对象而不是具体属性"],solutions:["使用 ESLint 规则检查依赖数组","优先使用函数式更新","依赖具体属性而不是整个对象"],importantTips:["依赖数组的准确性直接影响 useCallback 的效果","函数式更新是避免依赖问题的有效方法"],preCode:[{title:"Types",code:k},{title:"BaseComponents",code:C}],codeExample:{title:"依赖数组陷阱演示",code:D}}],tutorial:{concepts:["useCallback 用于缓存函数引用，避免不必要的重新创建","只有在依赖项发生变化时才会返回新的函数引用","主要用于优化传递给子组件的事件处理函数","配合 React.memo 可以显著提升组件渲染性能","依赖数组决定何时重新创建函数"],steps:["识别传递给子组件的事件处理函数","使用 useCallback 包装这些函数","正确设置依赖数组，包含函数中使用的所有变量","对接收函数 props 的子组件使用 React.memo","测试和验证性能优化效果","考虑使用函数式更新减少依赖"],tips:["不是所有函数都需要使用 useCallback","主要用于传递给子组件的函数","依赖数组要包含函数中使用的所有变量","使用函数式更新可以减少依赖","配合 React.memo 使用效果更佳","使用 ESLint 规则帮助检查依赖数组"]},interview:{questions:[{question:"useCallback 的工作原理是什么？",answer:"useCallback 会在组件渲染时检查依赖数组中的值是否发生变化。如果依赖没有变化，它会返回上次缓存的函数引用；如果依赖发生变化，它会返回新的函数引用并缓存起来。这样可以保持函数引用的稳定性，避免子组件因为函数引用变化而不必要的重新渲染。"},{question:"什么时候应该使用 useCallback？",answer:"应该在以下情况使用 useCallback：1) 传递给子组件的事件处理函数，特别是子组件使用了 React.memo；2) 作为其他 Hook（如 useEffect）的依赖项；3) 在列表渲染中传递给列表项的事件处理函数；4) 自定义 Hook 返回的函数。不应该在所有函数上都使用 useCallback，因为它本身也有开销。"},{question:"useCallback 的依赖数组有什么注意事项？",answer:"依赖数组的注意事项：1) 必须包含函数中使用的所有变量，否则会出现闭包陷阱；2) 不应包含不必要的依赖，会导致函数过度重新创建；3) 可以使用函数式更新来减少对状态的依赖；4) 优先依赖原始值而不是对象；5) 使用 ESLint 规则帮助检查依赖数组的正确性。"},{question:"useCallback 与 useMemo 的区别是什么？",answer:"useCallback 和 useMemo 的区别：1) 缓存内容不同 - useCallback 缓存函数，useMemo 缓存计算结果；2) 语法不同 - useCallback(fn, deps) 等价于 useMemo(() => fn, deps)；3) 使用场景不同 - useCallback 用于事件处理函数，useMemo 用于昂贵计算；4) 返回值不同 - useCallback 返回函数，useMemo 返回任意值。两者都是性能优化工具，经常配合使用。"},{question:"如何避免 useCallback 的常见陷阱？",answer:"避免 useCallback 陷阱的方法：1) 使用 ESLint 的 exhaustive-deps 规则检查依赖；2) 优先使用函数式更新（如 setState(prev => prev + 1)）来减少依赖；3) 将稳定的值移到组件外部；4) 避免在依赖数组中包含整个对象，应该依赖具体属性；5) 不要过度使用，只在真正需要的地方使用；6) 定期审查和优化依赖数组。"}],keyPoints:["useCallback 通过缓存函数引用来优化性能","主要用于传递给子组件的事件处理函数","依赖数组的准确性至关重要","配合 React.memo 使用效果更佳","函数式更新可以减少依赖","不应过度使用，要权衡成本和收益"]},bestPractices:{dos:["在传递给子组件的事件处理函数中使用 useCallback","正确设置依赖数组，包含所有使用的变量","配合 React.memo 优化子组件渲染","使用函数式更新减少对状态的依赖","在列表渲染的事件处理函数中使用 useCallback","使用 ESLint 规则检查依赖数组","优先依赖原始值而不是对象","定期审查和优化依赖数组"],donts:["不要在所有函数上都使用 useCallback","不要忘记在依赖数组中包含使用的变量","不要在依赖数组中包含不必要的依赖","不要依赖整个对象，应该依赖具体属性","不要在 useCallback 中执行副作用操作","不要忽略 useCallback 本身的性能开销","不要在简单的事件处理函数中使用 useCallback","不要忘记对接收函数 props 的子组件使用 React.memo"],patterns:["事件处理优化模式 - 缓存传递给子组件的事件处理函数","列表渲染优化模式 - 在列表项中使用稳定的事件处理函数","函数式更新模式 - 使用函数式更新减少依赖","依赖最小化模式 - 只依赖必要的变量","组合优化模式 - 与 React.memo 和 useMemo 配合使用","自定义 Hook 模式 - 在自定义 Hook 中返回稳定的函数","Effect 依赖模式 - 作为 useEffect 的稳定依赖","条件回调模式 - 根据条件决定是否重新创建函数"]}});export{E as default};
