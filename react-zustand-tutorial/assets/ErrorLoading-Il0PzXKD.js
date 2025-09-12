import{j as e,R as u}from"./index-BWM6UHr8.js";import{d as x}from"./middleware-CPUTVaT6.js";import{c as m,C as f}from"./ComponentTemplate-ClBHhBQ8.js";const t=m(x(o=>({loading:{},error:{},setLoading:(r,a)=>o(i=>({loading:{...i.loading,[r]:a}})),setError:(r,a)=>o(i=>({error:{...i.error,[r]:a}})),clear:r=>o(a=>r?{loading:{...a.loading,[r]:!1},error:{...a.error,[r]:void 0}}:{loading:{},error:{}})}),{name:"ErrorLoadingStore"})),c=o=>r=>!!r.loading[o],g=o=>r=>r.error[o],k=o=>new Promise(r=>setTimeout(r,o)),E=()=>{const o=t(c("users")),r=t(g("users")),a=t(n=>n.setLoading),i=t(n=>n.setError),l=t(n=>n.clear),d=async()=>{l("users"),a("users",!0);try{if(await k(800),Math.random()<.5)throw new Error("随机错误")}catch(n){i("users",(n==null?void 0:n.message)||"未知错误")}finally{a("users",!1)}};return e.jsxs("div",{className:"space-y-3",children:[e.jsxs("div",{className:"flex gap-2 items-center",children:[e.jsx("button",{className:"px-3 py-1 bg-blue-600 text-white rounded",onClick:d,disabled:o,children:o?"请求中...":"发起请求（50%失败）"}),e.jsx("button",{className:"px-3 py-1 bg-gray-200 rounded",onClick:()=>l("users"),children:"清空"})]}),r?e.jsxs("div",{className:"text-sm text-red-600",children:["错误：",r]}):e.jsx("div",{className:"text-sm text-green-700",children:"暂无错误"})]})},L=()=>{const o=t(c("users")),r=t(c("posts")),a=t(c("profile")),i=t(g("users")),l=t(g("posts")),d=t(g("profile")),n=t(s=>s.setLoading),y=t(s=>s.setError),p=t(s=>s.clear);return e.jsx("div",{className:"space-y-2",children:["users","posts","profile"].map(s=>e.jsxs("div",{className:"flex items-center gap-2",children:[e.jsx("span",{className:"w-16 text-sm",children:s}),e.jsx("button",{className:"px-2 py-1 text-xs bg-gray-200 rounded",onClick:()=>n(s,!0),children:"setLoading"}),e.jsx("button",{className:"px-2 py-1 text-xs bg-gray-200 rounded",onClick:()=>n(s,!1),children:"clearLoading"}),e.jsx("button",{className:"px-2 py-1 text-xs bg-gray-200 rounded",onClick:()=>y(s,"模拟错误"),children:"setError"}),e.jsx("button",{className:"px-2 py-1 text-xs bg-gray-200 rounded",onClick:()=>p(s),children:"clear"}),e.jsxs("span",{className:"text-xs text-gray-600",children:["loading:"," ",String(s==="users"?o:s==="posts"?r:a)," ","| error:"," ",(s==="users"?i:s==="posts"?l:d)||"-"]})]},s))})},h=o=>new Promise(r=>setTimeout(r,o)),b=()=>{const{setLoading:o,setError:r,clear:a}=t(),i=t(c("posts")),l=t(g("posts")),[d,n]=u.useState(null),y=async()=>{a("posts"),n(null),o("posts",!0);try{if(await h(600),Math.random()<.4)throw new Error("加载失败");n("加载成功：共 20 条")}catch(s){r("posts",(s==null?void 0:s.message)||"未知错误")}finally{o("posts",!1)}},p=()=>a("posts");return e.jsxs("div",{className:"space-y-3",children:[e.jsxs("div",{className:"flex items-center gap-2",children:[e.jsx("button",{className:"px-3 py-1 bg-indigo-600 text-white rounded",onClick:y,disabled:i,children:i?"请求中...":"执行一次"}),e.jsx("button",{className:"px-3 py-1 bg-gray-200 rounded",onClick:p,disabled:i,children:"清空错误"}),e.jsx("span",{className:`text-xs px-2 py-0.5 rounded ${i?"bg-yellow-100 text-yellow-800":"bg-green-100 text-green-800"}`,children:i?"loading=true":"loading=false"}),e.jsxs("span",{className:`text-xs px-2 py-0.5 rounded ${l?"bg-red-100 text-red-700":"bg-gray-100 text-gray-600"}`,children:["error: ",l||"-"]})]}),e.jsx("div",{className:"text-xs text-gray-500",children:"说明：集中管理 loading/error。开始时清空旧错误 → 设置 loading → 成功/失败分别处理 → finally 归位 loading。"}),d&&e.jsx("div",{className:"text-sm text-green-700",children:d})]})},v=`import { create } from "zustand";\r
import { devtools } from "zustand/middleware";\r
import type { ErrorLoadingState, RequestKey } from "../types";\r
\r
export const useErrorLoadingStore = create(\r
  devtools<ErrorLoadingState>(\r
    (set) => ({\r
      loading: {},\r
      error: {},\r
      setLoading: (key, v) =>\r
        set((s) => ({ loading: { ...s.loading, [key]: v } })),\r
      setError: (key, msg) =>\r
        set((s) => ({ error: { ...s.error, [key]: msg } })),\r
      clear: (key?: RequestKey) =>\r
        set((s) =>\r
          key\r
            ? {\r
                loading: { ...s.loading, [key]: false },\r
                error: { ...s.error, [key]: undefined },\r
              }\r
            : { loading: {}, error: {} }\r
        ),\r
    }),\r
    { name: "ErrorLoadingStore" }\r
  )\r
);\r
\r
export const selectLoadingBy = (k: RequestKey) => (s: ErrorLoadingState) =>\r
  !!s.loading[k];\r
export const selectErrorBy = (k: RequestKey) => (s: ErrorLoadingState) =>\r
  s.error[k];\r
`,j=`export type RequestKey = 'users' | 'posts' | 'profile';

export interface ErrorLoadingState {
  loading: Partial<Record<RequestKey, boolean>>;
  error: Partial<Record<RequestKey, string | undefined>>;
  setLoading: (key: RequestKey, v: boolean) => void;
  setError: (key: RequestKey, msg?: string) => void;
  clear: (key?: RequestKey) => void;
}

export type ELSelector<T> = (s: ErrorLoadingState) => T;
`,q=()=>e.jsx(f,{title:"错误与 loading 状态",description:"演示将 isLoading/error 集中到一个 store 中按 key 管理的通用模式，组件只需选择器订阅与触发动作。",overview:[{title:"核心概念",items:["为每类请求或模块定义唯一 key（users/posts/profile）","用 Partial<Record> 存储 loading/error 字典，统一读写","组件通过选择器订阅某个 key 的 loading/error","失败后保留错误信息并可清空恢复","对成功/失败路径一视同仁地归位 loading（finally）","提供统一的错误文案与本地化能力，提升体验","与 DevTools 联动，观察 flags 的变化轨迹"]},{title:"主要优势",items:["消除重复 loading/error 状态定义","统一处理逻辑，避免遗漏关闭 loading","更易扩展与复用，减少样板代码","多请求并发时依然可控，互不干扰","更清晰的边界与可观测性，便于排错","与异步 action/重试策略自然组合"]},{title:"适用场景",items:["页面有多处并发请求，需要统一的 UX 规范","中后台管理台列表/表单/批量操作","需要统一错误提示与重试机制的页面","渐进式重构，替代分散在组件内的 flags"]},{title:"注意事项",items:["区分 AbortError 与网络错误，不要误报","保证 key 的命名一致性，避免冲突","清空错误时同时考虑 loading 归位","避免订阅整个字典，使用精确选择器","对高频请求增加节流/退避，防止抖动"]}],examples:[{title:"基础 flags（单个 key）",component:e.jsx(E,{}),description:"集中设置/清空 users 的 loading 与 error，模拟 50% 失败率。",observationPoints:["按钮根据 loading 禁用","失败后显示错误信息，清空后复位","重复执行时状态切换明确可见","加载结束后按钮自动解禁"],keyPoints:["组件只关心订阅值与触发动作","统一在 store 里封装 setLoading/setError/clear","错误清空流程标准化","结合 DevTools 查看 flags 演进"],commonTraps:["在组件内分散管理多个 loading 字段","一次性订阅整个字典对象"],solutions:["集中到公共 store，并用 key 定位","用 selectLoadingBy/selectErrorBy 订阅单值"],preCode:[{title:"类型定义",code:j},{title:"Store 定义",code:v}]},{title:"多 key 独立管理",component:e.jsx(L,{}),description:"同时管理 users/posts/profile 的 flags，互不影响。",observationPoints:["任意 key 的变更不影响其他 key 的视图","不同 key 的错误可独立清除","loading 与 error 的组合状态一目了然"],keyPoints:["用 selector 精确订阅单 key 值","避免对象聚合选择器导致频繁渲染","按域划分 key，保持一致性"],commonTraps:["读取整个字典导致不必要渲染","重复 key 命名导致互相覆盖"],solutions:["使用 selectLoadingBy/selectErrorBy(k) 订阅单值","规范 key 的来源与命名（常量枚举）"]},{title:"与异步配合（示例）",component:e.jsx(b,{}),description:"演示与异步流程的协作：开始置 loading，失败置 error，最后还原 loading。",observationPoints:["清空旧错误再开始","失败与成功路径都能关闭 loading","错误信息清晰可见并可手动清空","弱网/抖动场景下依旧可用"],keyPoints:["减少样板代码，避免遗漏关闭","状态变化可观测、可追踪","与重试/退避策略自然组合"],commonTraps:["只在成功分支关闭 loading，失败时忘记关闭","错误不清空造成误导"],solutions:["统一 finally 中归位 loading","提供 clear(key) 来手动清理错误"]}],tutorial:{concepts:["集中 flags：loading/error 按 key 存储","选择器订阅：组件精确读取单 key","配合 finally 归位，避免遗漏","错误清空/本地化/分类（致命/可重试）","与 DevTools 协同观测"],steps:["设计 RequestKey 枚举与集中 store","实现 setLoading/setError/clear 行为","在组件中使用选择器与动作完成流程","在异步流程中先 clear 再 setLoading","在 catch/setError、finally/setLoading(false) 中闭环"],tips:["与 DevTools 配合观察 flags 变化","对错误文案做统一处理与本地化","高频请求配合节流/退避，避免卡顿","保证 key 命名唯一与稳定"]},interview:{questions:[{question:"为什么集中管理 loading/error？",answer:"减少重复状态与逻辑，统一 UX，避免遗漏。"},{question:"如何避免不必要渲染？",answer:"使用按 key 的选择器，只订阅必要值。"},{question:"与异步 action 如何组合？",answer:"在 action 中调用 setLoading/setError/clear 并 finally 归位，组件只订阅 flags 与数据。"},{question:"如何设计错误清空策略？",answer:"提供 clear(key) 与 clear() 全量清空，并在路由切换/重试时显式调用。"}],keyPoints:["集中式 flags + 精确订阅","finally 归位与清空策略","错误分类与本地化","与 DevTools 协同观测"]},bestPractices:{dos:["在公共 store 集中管理 flags","选择器原始值订阅","使用 finally 归位 loading","先 clear 再 setLoading，流程清晰","结合枚举/常量统一管理 key"],donts:["不要在多个组件重复实现相同的 flags 逻辑","不要订阅整个字典对象","不要忽略取消/失败路径的归位"],patterns:["集中 flags + selector 精确订阅","异步流程 try/catch/finally 标准化","错误清空 + 本地化 + 分类管理"]}});export{q as default};
