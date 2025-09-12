import{R as p,j as e}from"./index-BWM6UHr8.js";import{c,C as m}from"./ComponentTemplate-ClBHhBQ8.js";import{d as x}from"./middleware-CPUTVaT6.js";const i=c(x(t=>({profile:{name:"Alice",age:26,address:{city:"Shanghai",street:"Nanjing Rd"}},todos:[{id:1,text:"Learn Zustand",done:!0},{id:2,text:"Refactor selectors",done:!1}],updateProfile:r=>t(o=>({profile:{...o.profile,...r}})),updateAddress:r=>t(o=>({profile:{...o.profile,address:{...o.profile.address,...r}}})),addTodo:r=>t(o=>({todos:[...o.todos,{id:Date.now(),text:r,done:!1}]})),toggleTodo:r=>t(o=>({todos:o.todos.map(d=>d.id===r?{...d,done:!d.done}:d)})),removeTodo:r=>t(o=>({todos:o.todos.filter(d=>d.id!==r)}))}),{name:"NestedStateStore"})),u=t=>t.profile.name,f=t=>t.profile.age,g=t=>t.profile.address.city,y=t=>t.todos,v=()=>{const t=i(u),r=i(f),o=i(g),d=i(a=>a.updateProfile),l=i(a=>a.updateAddress),[n,s]=p.useState({name:t,age:r,city:o});return p.useEffect(()=>s({name:t,age:r,city:o}),[t,r,o]),e.jsxs("div",{className:"space-y-2",children:[e.jsxs("div",{className:"flex gap-2 items-center",children:[e.jsx("input",{className:"border px-2 py-1 rounded text-sm",value:n.name,onChange:a=>s({...n,name:a.target.value})}),e.jsx("input",{className:"border px-2 py-1 rounded text-sm w-20",type:"number",value:n.age,onChange:a=>s({...n,age:Number(a.target.value)})}),e.jsx("input",{className:"border px-2 py-1 rounded text-sm",value:n.city,onChange:a=>s({...n,city:a.target.value})}),e.jsx("button",{className:"px-3 py-1 bg-blue-600 text-white rounded",onClick:()=>{d({name:n.name,age:n.age}),l({city:n.city})},children:"保存"})]}),e.jsx("div",{className:"text-xs text-gray-500",children:"说明：Profile 与 Address 分别通过 updateProfile/updateAddress 进行不可变更新。"})]})},N=()=>{const t=i(y),r=i(s=>s.addTodo),o=i(s=>s.toggleTodo),d=i(s=>s.removeTodo),[l,n]=p.useState("");return e.jsxs("div",{className:"space-y-2",children:[e.jsxs("div",{className:"flex gap-2",children:[e.jsx("input",{className:"border px-2 py-1 rounded text-sm flex-1",value:l,onChange:s=>n(s.target.value),placeholder:"新增待办..."}),e.jsx("button",{className:"px-3 py-1 bg-green-600 text-white rounded",onClick:()=>{l.trim()&&(r(l.trim()),n(""))},children:"添加"})]}),e.jsx("ul",{className:"text-sm space-y-1",children:t.map(s=>e.jsxs("li",{className:"flex items-center gap-2",children:[e.jsxs("label",{className:"flex items-center gap-2 flex-1",children:[e.jsx("input",{type:"checkbox",checked:s.done,onChange:()=>o(s.id)}),e.jsx("span",{className:s.done?"line-through text-gray-400":"",children:s.text})]}),e.jsx("button",{className:"px-2 py-1 text-xs bg-red-50 text-red-700 rounded",onClick:()=>d(s.id),children:"删除"})]},s.id))})]})},T=`import type { NestedState } from "../types";\r
import { create } from "zustand";\r
import { devtools } from "zustand/middleware";\r
\r
export const useNestedStore = create(\r
  devtools<NestedState>(\r
    (set) => ({\r
      profile: {\r
        name: "Alice",\r
        age: 26,\r
        address: { city: "Shanghai", street: "Nanjing Rd" },\r
      },\r
      todos: [\r
        { id: 1, text: "Learn Zustand", done: true },\r
        { id: 2, text: "Refactor selectors", done: false },\r
      ],\r
\r
      updateProfile: (partial) =>\r
        set((s) => ({ profile: { ...s.profile, ...partial } })),\r
\r
      updateAddress: (partial) =>\r
        set((s) => ({\r
          profile: {\r
            ...s.profile,\r
            address: { ...s.profile.address, ...partial },\r
          },\r
        })),\r
\r
      addTodo: (text) =>\r
        set((s) => ({\r
          todos: [...s.todos, { id: Date.now(), text, done: false }],\r
        })),\r
\r
      toggleTodo: (id) =>\r
        set((s) => ({\r
          todos: s.todos.map((t) =>\r
            t.id === id ? { ...t, done: !t.done } : t\r
          ),\r
        })),\r
\r
      removeTodo: (id) =>\r
        set((s) => ({ todos: s.todos.filter((t) => t.id !== id) })),\r
    }),\r
    { name: "NestedStateStore" }\r
  )\r
);\r
\r
export const selectName = (s: NestedState) => s.profile.name;\r
export const selectAge = (s: NestedState) => s.profile.age;\r
export const selectCity = (s: NestedState) => s.profile.address.city;\r
export const selectTodos = (s: NestedState) => s.todos;\r
`,h=`export interface Address {
  city: string;
  street: string;
}

export interface Todo {
  id: number;
  text: string;
  done: boolean;
}

export interface Profile {
  name: string;
  age: number;
  address: Address;
}

export interface NestedState {
  profile: Profile;
  todos: Todo[];
  updateProfile: (partial: Partial<Profile>) => void;
  updateAddress: (partial: Partial<Address>) => void;
  addTodo: (text: string) => void;
  toggleTodo: (id: number) => void;
  removeTodo: (id: number) => void;
}

export type NestedSelector<T> = (s: NestedState) => T;
`,S=()=>e.jsx(m,{title:"嵌套状态管理",description:"演示对象/数组的不可变更新方式，对比常见陷阱并给出最佳实践，延续章节一的更新模式。",overview:[{title:"核心概念",items:["更新对象使用展开运算符，语义清晰且可追踪","更新数组使用 map/filter 等不可变方法","拆分选择器返回原始值，避免不必要渲染","配合 DevTools 观察每次状态变更","深层更新需逐层展开，确保引用发生变化","避免在选择器中拼装对象/数组，保持稳定引用","将复杂派生放在 store 或组件 memo 中维护"]},{title:"主要优势",items:["可回溯、可比较，便于调试与性能优化","减少误改引用导致的难定位 bug","与选择器优化协同降低重渲染","利于单元测试与时间旅行调试","清晰的更新路径与更小的渲染面"]},{title:"适用场景",items:["包含多层对象的资料编辑页面","包含列表项勾选/增删改的交互","需要部分字段更新且最小刷新范围的页面","需要精确追踪变更轨迹的业务模块"]},{title:"注意事项",items:["不要直接修改原对象/数组（push、直接赋值属性）","避免在选择器中构造新对象/数组","必要时在 store 内维护派生，组件只读","对大列表操作采用分页/批处理","确保 key 唯一，避免数组操作混乱"]}],examples:[{title:"Profile（对象）不可变更新",component:e.jsx(v,{}),description:"分别更新 profile 与 address，使用对象展开保持不可变。",observationPoints:["更新 name/age 不影响 address 引用","更新 city 仅影响 address 字段","保存后可在 DevTools 观察变更字段"],keyPoints:["对象更新使用展开叠加 partial","拆分 updateProfile/updateAddress 降低影响面","避免在组件里构造临时对象作为订阅值"],commonTraps:["直接赋值 s.profile.address.city = xxx","在选择器中拼装对象作为订阅值","把深层对象整体替换导致不必要渲染"],solutions:["使用 {...s.profile, ...partial} 与嵌套地址的二次展开","选择器只返回原始值（如 name/age/city）","仅在必要字段变化时更新对应层级"],preCode:[{title:"类型定义",code:h},{title:"Store 定义",code:T}]},{title:"Todos（数组）不可变更新",component:e.jsx(N,{}),description:"新增、切换勾选、删除使用不可变数组操作（map/filter/spread）。",observationPoints:["添加时使用 [...todos, item]，不直接 push","切换勾选使用 map 返回新数组","删除使用 filter 返回新数组","多次操作后引用变化可在 DevTools 中追踪"],keyPoints:["数组更新不要原地修改引用","搭配细粒度选择器减少渲染","保持元素 key 稳定以避免重排问题"],commonTraps:["直接修改数组元素或使用原地变更 API","以索引作为 key 导致 UI 异常"],solutions:["坚持 map/filter/spread 等不可变操作","使用稳定 id 作为 key"]}],tutorial:{concepts:["不可变更新 = 新对象/新数组 + 展开叠加","深层对象更新需要逐层展开","数组元素替换/删除返回新数组而非原地修改","选择器返回原始值，避免不稳定引用","复杂派生在 store 或 memo 中维护"],steps:["为每个嵌套块设计独立 action（如 updateAddress）","对象更新：{...old, ...partial}；数组更新：map/filter/spread","选择器仅返回原始值，避免不稳定引用","在 DevTools 验证更新路径与字段","为列表类操作准备稳定 id 与批处理策略"],tips:["必要时在 store 维护派生，组件层仅渲染","配合 DevTools 检查每次变更路径与字段","大数据集避免一次性全量更新，使用分页/虚拟列表","在选择器中不要返回对象/数组，避免频繁触发"]},interview:{questions:[{question:"为什么要不可变更新？",answer:"便于比较/时间旅行/渲染优化，降低隐式副作用风险。"},{question:"如何更新深层嵌套对象？",answer:"逐层展开：外层对象展开 + 内层对象展开，组合 partial。"},{question:"数组的新增/删除/替换如何避免重渲染？",answer:"使用 map/filter/spread 维护引用变化，选择器订阅原始字段并保持 key 稳定。"}],keyPoints:["对象展开/数组 map-filter 是基础模式","拆分 action 降低影响面与耦合","选择器返回原始值与稳定引用","为列表提供稳定 key 与批处理思路"]},bestPractices:{dos:["始终使用不可变方式更新对象/数组","将深层更新拆分为可复用 action","返回原始值选择器，避免不稳定引用","使用 DevTools 验证更新路径","为大列表准备分页/虚拟滚动/批处理"],donts:["不要直接修改原状态引用","不要在选择器中创建对象/数组","不要以索引作为 key 造成 UI 问题"],patterns:["对象展开 + 数组 map/filter/spread","按领域拆分 action + 细粒度选择器","复杂派生下沉（store）或局部 memo"]}});export{S as default};
