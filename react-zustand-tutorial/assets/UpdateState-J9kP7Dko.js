import{r as l,R as w,j as e}from"./index-BWM6UHr8.js";import{c as C,C as S}from"./ComponentTemplate-ClBHhBQ8.js";const m={count:0,message:"Hello Zustand!",isLoading:!1,user:{id:1,name:"John Doe",email:"john@example.com",age:25},todos:[{id:1,text:"学习 Zustand",completed:!1,priority:"high"},{id:2,text:"构建示例应用",completed:!1,priority:"medium"}],settings:{theme:"light",notifications:!0,language:"zh-CN"}},y=C(s=>({...m,increment:()=>s(t=>({count:t.count+1})),decrement:()=>s(t=>({count:t.count-1})),setCount:t=>s({count:t}),updateMessage:t=>s({message:t}),toggleLoading:()=>s(t=>({isLoading:!t.isLoading})),updateUser:t=>s(n=>({user:{...n.user,...t}})),updateUserName:t=>s(n=>({user:{...n.user,name:t}})),updateUserAge:t=>s(n=>({user:{...n.user,age:t}})),addTodo:(t,n="medium")=>s(r=>({todos:[...r.todos,{id:Math.max(...r.todos.map(o=>o.id),0)+1,text:t,completed:!1,priority:n}]})),toggleTodo:t=>s(n=>({todos:n.todos.map(r=>r.id===t?{...r,completed:!r.completed}:r)})),deleteTodo:t=>s(n=>({todos:n.todos.filter(r=>r.id!==t)})),updateTodo:(t,n)=>s(r=>({todos:r.todos.map(o=>o.id===t?{...o,...n}:o)})),clearCompletedTodos:()=>s(t=>({todos:t.todos.filter(n=>!n.completed)})),updateTheme:t=>s(n=>({settings:{...n.settings,theme:t}})),toggleNotifications:()=>s(t=>({settings:{...t.settings,notifications:!t.settings.notifications}})),updateLanguage:t=>s(n=>({settings:{...n.settings,language:t}})),updateSettings:t=>s(n=>({settings:{...n.settings,...t}})),batchUpdate:t=>s(n=>{const r={};return t.count!==void 0&&(r.count=t.count),t.message!==void 0&&(r.message=t.message),t.user!==void 0&&(r.user={...n.user,...t.user}),r}),reset:()=>s(m),resetUser:()=>s({user:m.user}),resetTodos:()=>s({todos:m.todos})})),T=()=>{const[s,t]=l.useState(0),[n,r]=l.useState(""),{count:o,message:c,isLoading:d,increment:g,decrement:u,setCount:x,updateMessage:h,toggleLoading:b}=y();w.useEffect(()=>{t(i=>i+1)},[o,c,d]);const v=()=>{const i=parseInt(n);isNaN(i)||(x(i),r(""))},p=()=>{n.trim()&&(h(n.trim()),r(""))};return e.jsxs("div",{className:"p-6 bg-white rounded-lg shadow-md",children:[e.jsxs("div",{className:"flex justify-between items-center mb-4",children:[e.jsx("h3",{className:"text-lg font-semibold text-gray-800",children:"基础状态更新"}),e.jsxs("span",{className:"text-sm text-gray-500",children:["渲染次数: ",s]})]}),e.jsxs("div",{className:"mb-6 p-4 bg-blue-50 rounded-lg",children:[e.jsx("h4",{className:"font-semibold text-blue-800 mb-3",children:"数值更新"}),e.jsxs("div",{className:"flex items-center gap-4 mb-3",children:[e.jsx("span",{className:"text-2xl font-bold text-blue-600",children:o}),e.jsxs("div",{className:"flex gap-2",children:[e.jsx("button",{onClick:u,className:"px-3 py-1 bg-red-500 text-white rounded hover:bg-red-600 transition-colors",children:"-1"}),e.jsx("button",{onClick:g,className:"px-3 py-1 bg-green-500 text-white rounded hover:bg-green-600 transition-colors",children:"+1"})]})]}),e.jsxs("div",{className:"flex gap-2",children:[e.jsx("input",{type:"number",value:n,onChange:i=>r(i.target.value),placeholder:"设置具体数值",className:"flex-1 px-3 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500"}),e.jsx("button",{onClick:v,className:"px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition-colors",children:"设置"})]})]}),e.jsxs("div",{className:"mb-6 p-4 bg-green-50 rounded-lg",children:[e.jsx("h4",{className:"font-semibold text-green-800 mb-3",children:"文本更新"}),e.jsxs("div",{className:"mb-3",children:[e.jsx("span",{className:"text-sm text-green-700",children:"当前消息: "}),e.jsx("span",{className:"font-medium text-green-800",children:c})]}),e.jsxs("div",{className:"flex gap-2",children:[e.jsx("input",{type:"text",value:n,onChange:i=>r(i.target.value),placeholder:"输入新消息",className:"flex-1 px-3 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-green-500",onKeyPress:i=>i.key==="Enter"&&p()}),e.jsx("button",{onClick:p,className:"px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600 transition-colors",children:"更新"})]})]}),e.jsxs("div",{className:"p-4 bg-yellow-50 rounded-lg",children:[e.jsx("h4",{className:"font-semibold text-yellow-800 mb-3",children:"布尔值更新"}),e.jsxs("div",{className:"flex items-center gap-4",children:[e.jsx("span",{className:"text-sm text-yellow-700",children:"加载状态:"}),e.jsxs("div",{className:"flex items-center gap-2",children:[e.jsx("span",{className:`px-2 py-1 rounded text-sm font-medium ${d?"bg-orange-200 text-orange-800":"bg-gray-200 text-gray-800"}`,children:d?"加载中...":"空闲"}),e.jsx("button",{onClick:b,className:"px-3 py-1 bg-yellow-500 text-white rounded hover:bg-yellow-600 transition-colors",children:"切换"})]})]})]}),e.jsxs("div",{className:"mt-4 p-3 bg-blue-50 border border-blue-200 rounded text-sm text-blue-800",children:[e.jsx("p",{children:e.jsx("strong",{children:"💡 观察要点："})}),e.jsxs("ul",{className:"list-disc list-inside mt-1 space-y-1",children:[e.jsx("li",{children:"每次状态更新都会触发组件重新渲染"}),e.jsx("li",{children:"set 函数支持直接设置值和函数式更新"}),e.jsx("li",{children:"不同类型的状态（数值、字符串、布尔值）更新方式"}),e.jsx("li",{children:"状态更新是不可变的，不会修改原始状态对象"})]})]})]})},U=`import React, { useState } from 'react';
import { useUpdateStore } from '../stores/updateStore';

const BasicUpdateDemo: React.FC = () => {
  const [renderCount, setRenderCount] = useState(0);
  const [inputValue, setInputValue] = useState('');
  
  // 从 store 获取状态和方法
  const {
    count,
    message,
    isLoading,
    increment,
    decrement,
    setCount,
    updateMessage,
    toggleLoading,
  } = useUpdateStore();
  
  // 更新渲染次数
  React.useEffect(() => {
    setRenderCount(prev => prev + 1);
  }, [count, message, isLoading]);
  
  const handleSetCount = () => {
    const value = parseInt(inputValue);
    if (!isNaN(value)) {
      setCount(value);
      setInputValue('');
    }
  };
  
  const handleUpdateMessage = () => {
    if (inputValue.trim()) {
      updateMessage(inputValue.trim());
      setInputValue('');
    }
  };

  return (
    <div className="p-6 bg-white rounded-lg shadow-md">
      <div className="flex justify-between items-center mb-4">
        <h3 className="text-lg font-semibold text-gray-800">基础状态更新</h3>
        <span className="text-sm text-gray-500">渲染次数: {renderCount}</span>
      </div>
      
      {/* 计数器部分 */}
      <div className="mb-6 p-4 bg-blue-50 rounded-lg">
        <h4 className="font-semibold text-blue-800 mb-3">数值更新</h4>
        <div className="flex items-center gap-4 mb-3">
          <span className="text-2xl font-bold text-blue-600">{count}</span>
          <div className="flex gap-2">
            <button
              onClick={decrement}
              className="px-3 py-1 bg-red-500 text-white rounded hover:bg-red-600 transition-colors"
            >
              -1
            </button>
            <button
              onClick={increment}
              className="px-3 py-1 bg-green-500 text-white rounded hover:bg-green-600 transition-colors"
            >
              +1
            </button>
          </div>
        </div>
        
        <div className="flex gap-2">
          <input
            type="number"
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            placeholder="设置具体数值"
            className="flex-1 px-3 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <button
            onClick={handleSetCount}
            className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition-colors"
          >
            设置
          </button>
        </div>
      </div>
      
      {/* 消息部分 */}
      <div className="mb-6 p-4 bg-green-50 rounded-lg">
        <h4 className="font-semibold text-green-800 mb-3">文本更新</h4>
        <div className="mb-3">
          <span className="text-sm text-green-700">当前消息: </span>
          <span className="font-medium text-green-800">{message}</span>
        </div>
        
        <div className="flex gap-2">
          <input
            type="text"
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            placeholder="输入新消息"
            className="flex-1 px-3 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-green-500"
            onKeyPress={(e) => e.key === 'Enter' && handleUpdateMessage()}
          />
          <button
            onClick={handleUpdateMessage}
            className="px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600 transition-colors"
          >
            更新
          </button>
        </div>
      </div>
      
      {/* 布尔值部分 */}
      <div className="p-4 bg-yellow-50 rounded-lg">
        <h4 className="font-semibold text-yellow-800 mb-3">布尔值更新</h4>
        <div className="flex items-center gap-4">
          <span className="text-sm text-yellow-700">加载状态:</span>
          <div className="flex items-center gap-2">
            <span className={\`px-2 py-1 rounded text-sm font-medium \${
              isLoading 
                ? 'bg-orange-200 text-orange-800' 
                : 'bg-gray-200 text-gray-800'
            }\`}>
              {isLoading ? '加载中...' : '空闲'}
            </span>
            <button
              onClick={toggleLoading}
              className="px-3 py-1 bg-yellow-500 text-white rounded hover:bg-yellow-600 transition-colors"
            >
              切换
            </button>
          </div>
        </div>
      </div>
      
      <div className="mt-4 p-3 bg-blue-50 border border-blue-200 rounded text-sm text-blue-800">
        <p><strong>💡 观察要点：</strong></p>
        <ul className="list-disc list-inside mt-1 space-y-1">
          <li>每次状态更新都会触发组件重新渲染</li>
          <li>set 函数支持直接设置值和函数式更新</li>
          <li>不同类型的状态（数值、字符串、布尔值）更新方式</li>
          <li>状态更新是不可变的，不会修改原始状态对象</li>
        </ul>
      </div>
    </div>
  );
};

export default BasicUpdateDemo;`,k=()=>{const[s,t]=l.useState(""),[n,r]=l.useState(""),[o,c]=l.useState(""),[d,g]=l.useState("medium"),{user:u,todos:x,updateUserName:h,updateUserAge:b,addTodo:v,toggleTodo:p,deleteTodo:i,clearCompletedTodos:j}=y();return e.jsxs("div",{className:"p-4 bg-white rounded-lg shadow",children:[e.jsx("h4",{className:"text-base font-semibold text-gray-800 mb-3",children:"对象与数组的不可变更新（极简）"}),e.jsxs("div",{className:"grid grid-cols-2 gap-4",children:[e.jsxs("div",{className:"p-3 bg-purple-50 rounded",children:[e.jsx("h5",{className:"font-medium text-purple-800 mb-2",children:"对象更新"}),e.jsxs("div",{className:"text-sm mb-2",children:[e.jsxs("div",{children:["姓名：",u.name]}),e.jsxs("div",{children:["年龄：",u.age]})]}),e.jsxs("div",{className:"flex gap-2 mb-2",children:[e.jsx("input",{className:"flex-1 px-2 py-1 border rounded",placeholder:"新姓名",value:s,onChange:a=>t(a.target.value)}),e.jsx("button",{className:"px-3 py-1 bg-purple-600 text-white rounded",onClick:()=>{s.trim()&&(h(s.trim()),t(""))},children:"更新姓名"})]}),e.jsxs("div",{className:"flex gap-2",children:[e.jsx("input",{className:"flex-1 px-2 py-1 border rounded",placeholder:"新年龄",value:n,onChange:a=>r(a.target.value)}),e.jsx("button",{className:"px-3 py-1 bg-purple-600 text-white rounded",onClick:()=>{const a=parseInt(n);!isNaN(a)&&a>0&&(b(a),r(""))},children:"更新年龄"})]})]}),e.jsxs("div",{className:"p-3 bg-green-50 rounded",children:[e.jsx("h5",{className:"font-medium text-green-800 mb-2",children:"数组更新"}),e.jsxs("div",{className:"flex gap-2 mb-2",children:[e.jsx("input",{className:"flex-1 px-2 py-1 border rounded",placeholder:"待办事项",value:o,onChange:a=>c(a.target.value)}),e.jsxs("select",{className:"px-2 py-1 border rounded",value:d,onChange:a=>g(a.target.value),children:[e.jsx("option",{value:"low",children:"低"}),e.jsx("option",{value:"medium",children:"中"}),e.jsx("option",{value:"high",children:"高"})]}),e.jsx("button",{className:"px-3 py-1 bg-green-600 text-white rounded",onClick:()=>{o.trim()&&(v(o.trim(),d),c(""))},children:"添加"})]}),e.jsx("div",{className:"flex gap-2 mb-2",children:e.jsx("button",{className:"px-3 py-1 bg-red-500 text-white rounded",onClick:j,children:"清除已完成"})}),e.jsx("div",{className:"max-h-36 overflow-y-auto space-y-1",children:x.map(a=>e.jsxs("div",{className:"flex items-center gap-2 p-2 bg-white rounded border",children:[e.jsx("input",{type:"checkbox",checked:a.completed,onChange:()=>p(a.id)}),e.jsx("span",{className:`flex-1 ${a.completed?"line-through text-gray-400":""}`,children:a.text}),e.jsx("span",{className:"text-xs px-2 py-0.5 rounded bg-gray-100",children:a.priority}),e.jsx("button",{className:"px-2 py-1 bg-red-500 text-white rounded text-xs",onClick:()=>i(a.id),children:"删除"})]},a.id))})]})]}),e.jsxs("div",{className:"mt-3 p-2 bg-yellow-50 rounded text-xs text-yellow-800 border border-yellow-200",children:[e.jsxs("div",{children:["对象：","{ ...obj, key: value }"]}),e.jsxs("div",{children:["数组添加：","[...list, item]"]}),e.jsx("div",{children:"数组修改：map"}),e.jsx("div",{children:"数组删除：filter"})]})]})},L=`import React, { useState } from "react";\r
\r
import type { Todo } from "../types";\r
import { useUpdateStore } from "../stores/updateStore";\r
\r
const ObjectArrayUpdateDemo: React.FC = () => {\r
  const [name, setName] = useState("");\r
  const [age, setAge] = useState("");\r
  const [todoText, setTodoText] = useState("");\r
  const [priority, setPriority] = useState<Todo["priority"]>("medium");\r
\r
  const {\r
    user,\r
    todos,\r
    updateUserName,\r
    updateUserAge,\r
    addTodo,\r
    toggleTodo,\r
    deleteTodo,\r
    clearCompletedTodos,\r
  } = useUpdateStore();\r
\r
  return (\r
    <div className="p-4 bg-white rounded-lg shadow">\r
      <h4 className="text-base font-semibold text-gray-800 mb-3">\r
        对象与数组的不可变更新（极简）\r
      </h4>\r
\r
      <div className="grid grid-cols-2 gap-4">\r
        <div className="p-3 bg-purple-50 rounded">\r
          <h5 className="font-medium text-purple-800 mb-2">对象更新</h5>\r
          <div className="text-sm mb-2">\r
            <div>姓名：{user.name}</div>\r
            <div>年龄：{user.age}</div>\r
          </div>\r
          <div className="flex gap-2 mb-2">\r
            <input\r
              className="flex-1 px-2 py-1 border rounded"\r
              placeholder="新姓名"\r
              value={name}\r
              onChange={(e) => setName(e.target.value)}\r
            />\r
            <button\r
              className="px-3 py-1 bg-purple-600 text-white rounded"\r
              onClick={() => {\r
                if (name.trim()) {\r
                  updateUserName(name.trim());\r
                  setName("");\r
                }\r
              }}\r
            >\r
              更新姓名\r
            </button>\r
          </div>\r
          <div className="flex gap-2">\r
            <input\r
              className="flex-1 px-2 py-1 border rounded"\r
              placeholder="新年龄"\r
              value={age}\r
              onChange={(e) => setAge(e.target.value)}\r
            />\r
            <button\r
              className="px-3 py-1 bg-purple-600 text-white rounded"\r
              onClick={() => {\r
                const n = parseInt(age);\r
                if (!isNaN(n) && n > 0) {\r
                  updateUserAge(n);\r
                  setAge("");\r
                }\r
              }}\r
            >\r
              更新年龄\r
            </button>\r
          </div>\r
        </div>\r
\r
        <div className="p-3 bg-green-50 rounded">\r
          <h5 className="font-medium text-green-800 mb-2">数组更新</h5>\r
          <div className="flex gap-2 mb-2">\r
            <input\r
              className="flex-1 px-2 py-1 border rounded"\r
              placeholder="待办事项"\r
              value={todoText}\r
              onChange={(e) => setTodoText(e.target.value)}\r
            />\r
            <select\r
              className="px-2 py-1 border rounded"\r
              value={priority}\r
              onChange={(e) => setPriority(e.target.value as Todo["priority"])}\r
            >\r
              <option value="low">低</option>\r
              <option value="medium">中</option>\r
              <option value="high">高</option>\r
            </select>\r
            <button\r
              className="px-3 py-1 bg-green-600 text-white rounded"\r
              onClick={() => {\r
                if (todoText.trim()) {\r
                  addTodo(todoText.trim(), priority);\r
                  setTodoText("");\r
                }\r
              }}\r
            >\r
              添加\r
            </button>\r
          </div>\r
          <div className="flex gap-2 mb-2">\r
            <button\r
              className="px-3 py-1 bg-red-500 text-white rounded"\r
              onClick={clearCompletedTodos}\r
            >\r
              清除已完成\r
            </button>\r
          </div>\r
          <div className="max-h-36 overflow-y-auto space-y-1">\r
            {todos.map((t) => (\r
              <div\r
                key={t.id}\r
                className="flex items-center gap-2 p-2 bg-white rounded border"\r
              >\r
                <input\r
                  type="checkbox"\r
                  checked={t.completed}\r
                  onChange={() => toggleTodo(t.id)}\r
                />\r
                <span\r
                  className={\`flex-1 \${\r
                    t.completed ? "line-through text-gray-400" : ""\r
                  }\`}\r
                >\r
                  {t.text}\r
                </span>\r
                <span className="text-xs px-2 py-0.5 rounded bg-gray-100">\r
                  {t.priority}\r
                </span>\r
                <button\r
                  className="px-2 py-1 bg-red-500 text-white rounded text-xs"\r
                  onClick={() => deleteTodo(t.id)}\r
                >\r
                  删除\r
                </button>\r
              </div>\r
            ))}\r
          </div>\r
        </div>\r
      </div>\r
\r
      <div className="mt-3 p-2 bg-yellow-50 rounded text-xs text-yellow-800 border border-yellow-200">\r
        <div>对象：{\`{ ...obj, key: value }\`}</div>\r
        <div>数组添加：{\`[...list, item]\`}</div>\r
        <div>数组修改：map</div>\r
        <div>数组删除：filter</div>\r
      </div>\r
    </div>\r
  );\r
};\r
\r
export default ObjectArrayUpdateDemo;\r
`,f=`// 用户信息接口
export interface User {
  id: number;
  name: string;
  email: string;
  age: number;
}

// 待办事项接口
export interface Todo {
  id: number;
  text: string;
  completed: boolean;
  priority: "low" | "medium" | "high";
}

// 设置接口
export interface Settings {
  theme: "light" | "dark";
  notifications: boolean;
  language: string;
}

// Store 状态与操作接口（供外部复用）
export interface UpdateState {
  // 基础状态
  count: number;
  message: string;
  isLoading: boolean;

  // 复杂状态
  user: User;
  todos: Todo[];
  settings: Settings;

  // 基础更新方法
  increment: () => void;
  decrement: () => void;
  setCount: (count: number) => void;
  updateMessage: (message: string) => void;
  toggleLoading: () => void;

  // 对象更新方法
  updateUser: (updates: Partial<User>) => void;
  updateUserName: (name: string) => void;
  updateUserAge: (age: number) => void;

  // 数组更新方法
  addTodo: (text: string, priority?: Todo["priority"]) => void;
  toggleTodo: (id: number) => void;
  deleteTodo: (id: number) => void;
  updateTodo: (id: number, updates: Partial<Todo>) => void;
  clearCompletedTodos: () => void;

  // 嵌套对象更新方法
  updateTheme: (theme: "light" | "dark") => void;
  toggleNotifications: () => void;
  updateLanguage: (language: string) => void;
  updateSettings: (updates: Partial<Settings>) => void;

  // 批量更新方法
  batchUpdate: (updates: {
    count?: number;
    message?: string;
    user?: Partial<User>;
  }) => void;

  // 重置方法
  reset: () => void;
  resetUser: () => void;
  resetTodos: () => void;
}
`,N=`import type { UpdateState } from "../types";\r
import { create } from "zustand";\r
\r
// 初始状态\r
const initialState = {\r
  count: 0,\r
  message: "Hello Zustand!",\r
  isLoading: false,\r
  user: {\r
    id: 1,\r
    name: "John Doe",\r
    email: "john@example.com",\r
    age: 25,\r
  },\r
  todos: [\r
    {\r
      id: 1,\r
      text: "学习 Zustand",\r
      completed: false,\r
      priority: "high" as const,\r
    },\r
    {\r
      id: 2,\r
      text: "构建示例应用",\r
      completed: false,\r
      priority: "medium" as const,\r
    },\r
  ],\r
  settings: {\r
    theme: "light" as const,\r
    notifications: true,\r
    language: "zh-CN",\r
  },\r
};\r
\r
// 创建 store\r
export const useUpdateStore = create<UpdateState>((set) => ({\r
  ...initialState,\r
\r
  // 基础更新方法\r
  increment: () => set((state) => ({ count: state.count + 1 })),\r
  decrement: () => set((state) => ({ count: state.count - 1 })),\r
  setCount: (count) => set({ count }),\r
  updateMessage: (message) => set({ message }),\r
  toggleLoading: () => set((state) => ({ isLoading: !state.isLoading })),\r
\r
  // 对象更新方法 - 使用展开运算符\r
  updateUser: (updates) =>\r
    set((state) => ({\r
      user: { ...state.user, ...updates },\r
    })),\r
  updateUserName: (name) =>\r
    set((state) => ({\r
      user: { ...state.user, name },\r
    })),\r
  updateUserAge: (age) =>\r
    set((state) => ({\r
      user: { ...state.user, age },\r
    })),\r
\r
  // 数组更新方法\r
  addTodo: (text, priority = "medium") =>\r
    set((state) => ({\r
      todos: [\r
        ...state.todos,\r
        {\r
          id: Math.max(...state.todos.map((t) => t.id), 0) + 1,\r
          text,\r
          completed: false,\r
          priority,\r
        },\r
      ],\r
    })),\r
\r
  toggleTodo: (id) =>\r
    set((state) => ({\r
      todos: state.todos.map((todo) =>\r
        todo.id === id ? { ...todo, completed: !todo.completed } : todo\r
      ),\r
    })),\r
\r
  deleteTodo: (id) =>\r
    set((state) => ({\r
      todos: state.todos.filter((todo) => todo.id !== id),\r
    })),\r
\r
  updateTodo: (id, updates) =>\r
    set((state) => ({\r
      todos: state.todos.map((todo) =>\r
        todo.id === id ? { ...todo, ...updates } : todo\r
      ),\r
    })),\r
\r
  clearCompletedTodos: () =>\r
    set((state) => ({\r
      todos: state.todos.filter((todo) => !todo.completed),\r
    })),\r
\r
  // 嵌套对象更新方法\r
  updateTheme: (theme) =>\r
    set((state) => ({\r
      settings: { ...state.settings, theme },\r
    })),\r
\r
  toggleNotifications: () =>\r
    set((state) => ({\r
      settings: {\r
        ...state.settings,\r
        notifications: !state.settings.notifications,\r
      },\r
    })),\r
\r
  updateLanguage: (language) =>\r
    set((state) => ({\r
      settings: { ...state.settings, language },\r
    })),\r
\r
  updateSettings: (updates) =>\r
    set((state) => ({\r
      settings: { ...state.settings, ...updates },\r
    })),\r
\r
  // 批量更新方法\r
  batchUpdate: (updates) =>\r
    set((state) => {\r
      const newState: any = {};\r
\r
      if (updates.count !== undefined) {\r
        newState.count = updates.count;\r
      }\r
\r
      if (updates.message !== undefined) {\r
        newState.message = updates.message;\r
      }\r
\r
      if (updates.user !== undefined) {\r
        newState.user = { ...state.user, ...updates.user };\r
      }\r
\r
      return newState;\r
    }),\r
\r
  // 重置方法\r
  reset: () => set(initialState),\r
  resetUser: () => set({ user: initialState.user }),\r
  resetTodos: () => set({ todos: initialState.todos }),\r
}));\r
\r
// 选择器\r
export const selectCount = (state: UpdateState) => state.count;\r
export const selectUser = (state: UpdateState) => state.user;\r
export const selectTodos = (state: UpdateState) => state.todos;\r
export const selectCompletedTodos = (state: UpdateState) =>\r
  state.todos.filter((todo) => todo.completed);\r
export const selectPendingTodos = (state: UpdateState) =>\r
  state.todos.filter((todo) => !todo.completed);\r
export const selectSettings = (state: UpdateState) => state.settings;\r
export const selectTheme = (state: UpdateState) => state.settings.theme;\r
`,R=()=>e.jsx(S,{title:"状态更新 (Update State)",description:"在 @/create-store 与 @/use-store 的基础上，演示 Zustand 中推荐的状态更新方式（对象与数组不可变更新、函数式更新）。",overview:[{title:"核心概念",items:["set 函数的对象合并更新与函数式更新","不可变更新原则","对象和数组的正确更新方法"]},{title:"主要优势",items:["简洁的更新语法","自动状态合并","函数式更新支持"]},{title:"适用场景",items:["简单状态值更新","复杂对象状态管理","数组数据操作"]},{title:"注意事项",items:["避免直接修改状态对象","正确处理嵌套对象更新","选择器按需订阅（承接 use-store）"]}],examples:[{title:"基础状态更新",component:e.jsx(T,{}),description:"演示 Zustand 中最基础的状态更新操作，包括简单值更新、对象更新和布尔值切换",observationPoints:["点击按钮观察计数器、消息和加载状态的实时变化","注意右上角渲染次数的变化，每次状态更新都会触发重渲染","观察不同类型状态值的更新方式","注意 set 函数的不同调用方式"],keyPoints:["对象合并更新与函数式更新的适用场景","批量更新相关字段一次完成，减少中间渲染","按需订阅：组件只订阅使用到的字段","使用稳定 id 管理数组元素，便于 map/filter"],commonTraps:["直接修改状态（push/直接赋值嵌套属性）导致引用未变","在 set 回调中做副作用（发请求/打印等）","数组以索引为 key 导致错误渲染","将组件订阅到整个 store，造成过度重渲染"],solutions:["始终使用 set，不直接改原对象/数组","将副作用放到 action 外层或专门的异步流程","数组操作统一以 id 为主键：map/filter","使用选择器精确订阅并拆分组件"],preCode:[{title:"类型定义",code:f},{title:"Store 定义",code:N}],codeExample:{code:U,title:"基础状态更新组件实现"}},{title:"对象与数组的不可变更新",component:e.jsx(k,{}),description:"基于 use-store 的延伸，演示对象与数组的最小不可变更新写法",observationPoints:["对象单字段更新与批量更新","数组的添加、修改、删除","保持引用不变的写法避免额外渲染"],keyPoints:["对象：{ ...obj, key: value } / 嵌套：set(state => ({ obj: { ...state.obj, key: value } }))","数组添加：[...list, item]；修改：list.map；删除：list.filter","引用稳定：避免返回新对象/数组包裹（除非必要）","批量更新：set(state => ({ a: nextA, b: nextB }))"],commonTraps:["直接修改状态（push/直接赋值嵌套属性）导致引用未变","在 set 回调中做副作用（发请求/打印等）","数组以索引为 key 导致错误渲染","将组件订阅到整个 store，造成过度重渲染"],solutions:["始终使用 set，不直接改原对象/数组","将副作用放到 action 外层或专门的异步流程","数组操作统一以 id 为主键：map/filter","使用选择器精确订阅并拆分组件"],preCode:[{title:"类型定义",code:f},{title:"Store 定义",code:N}],codeExample:{code:L,title:"对象/数组不可变更新（极简）"}}],tutorial:{concepts:["set 支持对象合并与函数式更新（基于最新 state 计算）","不可变更新：返回新对象/数组，避免直接修改引用","对象更新：展开运算符；数组更新：map/filter/slice/concat","选择器与拆分组件：只订阅必要字段以降低重渲染","批量更新：一次性更新相关字段，减少渲染次数","动作语义化：在 store 内封装清晰的 action 方法"],steps:["从 use-store 的计数/步长示例出发，准备最小 store","对象合并更新：set({ field: value })","函数式更新：set(state => ({ ...state, field: next }))","嵌套对象：按层展开 {...state.nested, key: value }","数组添加/修改/删除：[...arr, item] / arr.map / arr.filter","批量更新：set(state => ({ a: nextA, b: nextB }))","校验渲染：使用选择器只触发相关组件重渲染"],tips:["避免在 set 回调里产生副作用（如发请求/日志）","以 id 作为数组元素主键，便于 map/filter","用函数式更新化解快速连点/并发触发带来的旧值问题","更新对象/数组前先想清楚最小变更面，避免不必要引用变化","结合 shallow 比较与结构拆分，进一步减少渲染"]},interview:{questions:[{question:"为什么推荐函数式更新？",answer:"可基于最新 state 计算下一状态，避免并发或连续操作导致的旧值问题；语法简洁且更安全。"},{question:"如何不可变地更新嵌套对象？",answer:"按层展开：set(state => ({ nested: { ...state.nested, key: value } }))，不要直接修改嵌套引用。"},{question:"数组的增删改分别如何写？",answer:"新增：[...arr, item]；修改：arr.map(it => it.id===id ? { ...it, ...patch } : it)；删除：arr.filter(it => it.id!==id)。"},{question:"批量更新的价值是什么？",answer:"合并多处相关变更为一次 set，降低渲染次数与中间状态闪烁。"},{question:"为什么组件不应订阅整个 store？",answer:"整 store 订阅会让任意字段变化都触发渲染。只订阅必要字段可显著减少重渲染。"}],keyPoints:["不可变更新是避免意外渲染与状态污染的基础","函数式更新能消除竞态，确保使用到最新 state","选择器只订阅需要的字段，配合精细更新更高效","批量更新使渲染更可控、体验更稳定"]},bestPractices:{dos:["使用 set 的对象合并或函数式更新","使用展开运算符与 map/filter/slice/concat 保持不可变性","在 store 中封装语义化 action（如 updateUserName / clearCompleted）","在组件中使用选择器按需订阅，必要时配合 shallow","对数组操作始终以 id 为主键，避免索引依赖"],donts:["不要直接修改 state（如 push、直接赋值嵌套属性）","不要在更新函数中执行副作用","不要让组件订阅整个 store 导致过度渲染","不要一次性引入与章节目标无关的复杂模式（保持聚焦）"],patterns:["对象：{ ...obj, key: value } / set(state => ({ obj: { ...state.obj, key: value } }))","数组：添加 [...list, item]，修改 list.map，删除 list.filter","函数式更新：set(state => ({ ...state, key: next }))","批量更新：set(state => ({ a: nextA, b: nextB }))"]}});export{R as default};
