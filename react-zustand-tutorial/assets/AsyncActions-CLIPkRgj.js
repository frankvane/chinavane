import{R as g,j as e}from"./index-BWM6UHr8.js";import{d as m}from"./middleware-CPUTVaT6.js";import{c as u,C as p}from"./ComponentTemplate-ClBHhBQ8.js";const x="https://jsonplaceholder.typicode.com/users",h=r=>{let t=null;return{users:[],loading:!1,error:void 0,lastFetchedAt:void 0,fetchUsers:async()=>{t&&t.abort(),t=new AbortController,r({loading:!0,error:void 0});try{const s=await fetch(x,{signal:t.signal});if(!s.ok)throw new Error(`HTTP ${s.status}`);const n=await s.json();r({users:n,loading:!1,lastFetchedAt:Date.now()})}catch(s){if((s==null?void 0:s.name)==="AbortError"){r({loading:!1});return}r({error:(s==null?void 0:s.message)||"网络错误",loading:!1})}},cancelOngoing:()=>{t&&t.abort(),t=null,r({loading:!1})}}},o=u(m(h,{name:"AsyncUsersStore"})),f=r=>r.users,i=r=>r.loading,d=r=>r.error,U=r=>r.lastFetchedAt,b=()=>{const r=o(c=>c.fetchUsers),t=o(c=>c.cancelOngoing),a=o(c=>c.loading),[l,s]=g.useState(""),n=()=>{t(),s("已中断当前请求"),setTimeout(()=>s(""),1200)};return e.jsxs("div",{className:"space-y-3",children:[e.jsxs("div",{className:"flex gap-2 items-center",children:[e.jsx("button",{className:"px-3 py-1 bg-indigo-600 text-white rounded",onClick:r,disabled:a,children:a?"请求中...":"发起请求"}),e.jsx("button",{className:"px-3 py-1 bg-red-600 text-white rounded",onClick:n,children:"中断请求"}),l&&e.jsx("span",{className:"text-xs text-gray-500",children:l})]}),e.jsx("div",{className:"text-xs text-gray-500",children:"说明：每次发起新请求会自动中断上一次请求，避免旧请求覆盖新数据。"})]})},y=()=>{const r=o(f),t=o(i),a=o(d),l=o(U),s=o(n=>n.fetchUsers);return e.jsxs("div",{className:"space-y-3",children:[e.jsxs("div",{className:"flex gap-2",children:[e.jsx("button",{className:"px-3 py-1 bg-blue-600 text-white rounded",onClick:s,disabled:t,children:t?"加载中...":"加载用户列表"}),l&&e.jsxs("span",{className:"text-xs text-gray-500",children:["上次拉取：",new Date(l).toLocaleTimeString()]})]}),a&&e.jsxs("div",{className:"text-sm text-red-600",children:["错误：",a]}),e.jsx("ul",{className:"list-disc pl-6 text-sm",children:r.map(n=>e.jsxs("li",{children:[n.name," - ",n.email]},n.id))})]})},v=()=>{const r=o(i),t=o(d),a=o(l=>l.fetchUsers);return e.jsxs("div",{className:"space-y-3",children:[e.jsxs("div",{className:"flex gap-2 items-center",children:[e.jsx("button",{className:"px-3 py-1 bg-blue-600 text-white rounded",onClick:a,disabled:r,children:r?"加载中...":"重新加载"}),r&&e.jsx("span",{className:"text-xs text-gray-500",children:"正在请求，请稍候..."})]}),t?e.jsxs("div",{className:"text-sm text-red-600",children:["请求失败：",t]}):e.jsx("div",{className:"text-sm text-green-700",children:"暂无错误"})]})},A=`import {\r
  selectError,\r
  selectLastFetchedAt,\r
  selectLoading,\r
  selectUsers,\r
  useUsersStore,\r
} from "../stores/usersStore";\r
\r
import React from "react";\r
\r
const BasicFetchDemo: React.FC = () => {\r
  const users = useUsersStore(selectUsers);\r
  const loading = useUsersStore(selectLoading);\r
  const error = useUsersStore(selectError);\r
  const last = useUsersStore(selectLastFetchedAt);\r
  const fetchUsers = useUsersStore((s) => s.fetchUsers);\r
\r
  return (\r
    <div className="space-y-3">\r
      <div className="flex gap-2">\r
        <button\r
          className="px-3 py-1 bg-blue-600 text-white rounded"\r
          onClick={fetchUsers}\r
          disabled={loading}\r
        >\r
          {loading ? "加载中..." : "加载用户列表"}\r
        </button>\r
        {last && (\r
          <span className="text-xs text-gray-500">\r
            上次拉取：{new Date(last).toLocaleTimeString()}\r
          </span>\r
        )}\r
      </div>\r
      {error && <div className="text-sm text-red-600">错误：{error}</div>}\r
      <ul className="list-disc pl-6 text-sm">\r
        {users.map((u) => (\r
          <li key={u.id}>\r
            {u.name} - {u.email}\r
          </li>\r
        ))}\r
      </ul>\r
    </div>\r
  );\r
};\r
\r
export default BasicFetchDemo;\r
`,S=`import type { AsyncUsersState, User } from "../types";\r
import { StateCreator, create } from "zustand";\r
\r
import { devtools } from "zustand/middleware";\r
\r
const API_URL = "https://jsonplaceholder.typicode.com/users";\r
\r
const creator: StateCreator<AsyncUsersState> = (set) => {\r
  let controller: AbortController | null = null;\r
\r
  const fetchUsers = async () => {\r
    if (controller) controller.abort();\r
    controller = new AbortController();\r
    set({ loading: true, error: undefined });\r
    try {\r
      const res = await fetch(API_URL, { signal: controller.signal });\r
      if (!res.ok) throw new Error(\`HTTP \${res.status}\`);\r
      const data = (await res.json()) as User[];\r
      set({ users: data, loading: false, lastFetchedAt: Date.now() });\r
    } catch (e: any) {\r
      if (e?.name === "AbortError") {\r
        set({ loading: false });\r
        return;\r
      }\r
      set({ error: e?.message || "网络错误", loading: false });\r
    }\r
  };\r
\r
  const cancelOngoing = () => {\r
    if (controller) controller.abort();\r
    controller = null;\r
    set({ loading: false });\r
  };\r
\r
  return {\r
    users: [],\r
    loading: false,\r
    error: undefined,\r
    lastFetchedAt: undefined,\r
    fetchUsers,\r
    cancelOngoing,\r
  };\r
};\r
\r
export const useUsersStore = create(\r
  devtools<AsyncUsersState>(creator, { name: "AsyncUsersStore" })\r
);\r
\r
export const selectUsers = (s: AsyncUsersState) => s.users;\r
export const selectLoading = (s: AsyncUsersState) => s.loading;\r
export const selectError = (s: AsyncUsersState) => s.error;\r
export const selectLastFetchedAt = (s: AsyncUsersState) => s.lastFetchedAt;\r
`,w=`export interface User {
  id: number;
  name: string;
  email: string;
}

export interface AsyncUsersState {
  users: User[];
  loading: boolean;
  error?: string;
  lastFetchedAt?: number;
  fetchUsers: () => Promise<void>;
  cancelOngoing: () => void;
}

export type UsersSelector<T> = (s: AsyncUsersState) => T;
`,N=()=>e.jsx(p,{title:"异步 action",description:"演示如何在 Zustand 中编写带加载/错误控制、请求中断与 DevTools 观察的异步 action，保持函数纯净与状态可预测。",overview:[{title:"核心概念",items:["在 store 中编写异步 action，统一管理 loading、error、数据与时间戳，确保状态流动可控且可追踪。","使用 AbortController 实现请求中断与竞态控制，防止旧请求覆盖新数据，提升数据一致性。","所有异步副作用都集中在 store 层，组件只负责触发 action 和渲染视图，降低组件复杂度。","不可变更新配合 DevTools 观察状态变化，便于调试、回溯和性能分析。","组件与 store 解耦，便于测试、复用和维护。","提供统一的错误处理与重试策略，并对错误文案做语义化与本地化。","通过选择器订阅最小必要数据，避免全量订阅导致的重复渲染。"]},{title:"主要优势",items:["业务逻辑收敛于 store，组件更轻、更专注于 UI 展示。","统一的 loading/error 管理模式，易于复用和全局处理。","可中断的请求，避免竞态条件下数据回退或闪烁。","更易测试与调试，配合 DevTools 可追踪每一次状态变更。","异步流程标准化，减少样板代码和重复逻辑。","行为可观测（日志、埋点、审计），有助于定位线上问题。","更好地支持 SSR/CSR 切换与缓存策略。"]},{title:"适用场景",items:["列表、详情、分页、搜索等 IO 密集型页面，需统一 loading/error 管理。","需要强一致性的竞态控制（如搜索框连打、表单多次提交）。","全局数据拉取并在多处复用，避免重复请求和状态分散。","需要统一错误处理和重试机制的场景。","需要对异步流程进行监控、埋点或日志记录。","离线/弱网环境下的可恢复与状态回放。"]},{title:"注意事项",items:["在 action 中 catch 错误并写入 error 字段，不要静默失败，保证 UI 有反馈。","注意区分中断异常（AbortError）与网络错误，分别处理用户提示和流程控制。","避免在组件层重复实现相同的请求逻辑，应提升到 store 层统一管理。","异步 action 应保证幂等性，避免多次触发导致状态错乱。","合理设置 loading 状态，防止按钮重复点击导致并发请求。","防止内存泄漏：及时清理 abort controller、timeout、interval。","对成功/失败路径都要归位 loading，确保流程闭环。"]}],examples:[{title:"基础拉取（loading/error）",component:e.jsx(y,{}),description:"点击按钮触发异步请求，展示加载/错误状态与结果列表。",observationPoints:["点击后立即进入 loading=true，按钮禁用，防止重复请求。","请求失败时 error 有值且 loading=false，UI 显示错误提示。","成功返回后 users 写入 store 并记录时间戳，页面自动刷新。","多次点击可观察 loading/error 状态切换和数据变化。","DevTools 可追踪 action 调用和状态流转全过程。","错误清空后再次请求，状态恢复正确。"],keyPoints:["统一在 store 管理 loading/error/data，组件只关心视图与触发 action。","异步 action 必须处理所有分支（成功、失败、异常），保证状态一致。","组件通过选择器订阅 loading/error，避免全量订阅。","配合 DevTools 观察异步流程和状态变化，便于调试。","异步 action 命名清晰，便于团队协作和维护。","为时间戳等元信息留出字段，便于缓存与刷新策略。"],commonTraps:["在多个组件里重复写同一套 fetch 逻辑，导致维护困难。","只处理成功不处理错误，导致 UI 卡死或无反馈。","未正确关闭 loading，导致按钮一直禁用。","请求结果未做幂等处理，导致数据错乱。","未捕获异常，导致页面崩溃或数据丢失。","直接在组件里发请求，难以复用与测试。"],solutions:["提升到 store 并复用同一 action，减少重复代码。","在 catch 中按场景写入 error 并关闭 loading，保证 UI 可用。","所有异步 action 都应有 finally 分支归位 loading。","对错误信息做统一处理和本地化，提升用户体验。","配合 DevTools 监控异步流程，及时发现和修复问题。","在 store 维护元信息（lastFetchedAt）以支持刷新策略。"],preCode:[{title:"类型定义",code:w},{title:"Store 定义",code:S}],codeExample:{title:"基础拉取组件",code:A}},{title:"请求中断与竞态控制",component:e.jsx(b,{}),description:"每次发起新请求会中断上一次，避免旧请求覆盖新数据。",observationPoints:["连续点击只保留最后一次请求的结果，旧请求被中断不会写入数据。","被中断的请求不会写入错误（忽略 AbortError），UI 保持稳定。","DevTools 可观察到 abort 动作和状态流转。","竞态场景下数据始终保持最新，避免回退或闪烁。","中断逻辑对用户无感知，体验流畅。","取消后 loading 立即归位，按钮解禁。"],keyPoints:["AbortController 限制并发、避免竞态，保证数据一致性。","状态写入只在有效响应时发生，防止旧数据覆盖新数据。","中断异常（AbortError）应被静默处理，不提示用户。","每次请求前先 abort 旧请求，保证只处理最后一次响应。","竞态控制逻辑应封装在 store 层，组件无需关心。","对取消/失败做差异化处理，避免误导用户。"],commonTraps:["未中断旧请求导致数据闪烁或回退，用户体验差。","错误地把 AbortError 当成失败提示用户，造成误导。","竞态控制逻辑分散在多个组件，难以维护。","未正确清理 abort controller，导致内存泄漏。","请求响应顺序未做校验，导致数据错乱。","取消后仍保持 loading=true，导致按钮长期禁用。"],solutions:["新请求前先 abort 旧请求，保证只处理最新响应。","区分 AbortError 与网络错误，分别处理用户提示和流程控制。","竞态控制逻辑集中在 store 层，便于维护和复用。","每次请求都新建 AbortController，避免复用旧实例。","对所有异步 action 做异常捕获和归位处理。","在取消路径中显式 set({loading:false})。"]},{title:"加载/错误 UX 模式",component:e.jsx(v,{}),description:"演示重试按钮与进行中提示的模式，保持可用性。",observationPoints:["loading 态下按钮禁用，防止重复点击和并发请求。","错误态提供重试操作，用户可快速恢复。","错误信息清晰提示，便于定位和修复。","重试后 loading/error 状态自动归位，体验流畅。","DevTools 可追踪重试流程和状态变化。","弱网场景下的反馈与可用性（提示与退避）。"],keyPoints:["loading/error 统一可复用的 UI 规范，提升一致性。","按钮禁用 + 轻提示组合，防止误操作。","重试逻辑应归位 loading/error，保证流程闭环。","错误信息应本地化和语义化，提升用户体验。","重试次数可做限制，防止死循环。","对致命错误与可重试错误做区分处理。"],commonTraps:["loading 中仍可重复点击导致雪崩和并发请求。","错误态无反馈，用户不知所措。","重试后未归位 loading/error，导致 UI 卡死。","错误提示过于技术化，用户无法理解。","重试逻辑分散在多个组件，难以维护。","忽略退避/节流，导致过度请求。"],solutions:["根据 loading 禁用按钮，防止重复请求。","为 error 提供清晰提示与重试机制，提升可用性。","重试逻辑归位 loading/error，保证流程闭环。","错误信息做本地化和语义化处理。","重试逻辑集中在 store 层，便于维护和复用。","为重试增加退避策略与最大次数限制。"]}],tutorial:{concepts:["异步 action 统一管理 IO 与状态写入，提升一致性和可维护性。","AbortController 抑制竞态与并发，保证数据一致性。","DevTools 追踪状态变化与动作，便于调试和回溯。","组件只负责触发 action 和渲染视图，降低复杂度。","所有副作用都集中在 store 层，便于测试和复用。","以选择器订阅最小必要数据，减少渲染。","为关键流程记录时间戳/来源等元数据，便于观察与缓存。"],steps:["在 types 定义数据结构与状态字段（loading/error/时间戳），保证类型安全。","在 store 实现 fetchUsers/cancelOngoing，集成 DevTools 便于调试。","在组件中只调用 action 并渲染视图，避免重复逻辑。","通过选择器订阅 loading/error，提升性能和可维护性。","对所有异步 action 做异常捕获和归位处理，保证流程闭环。","设计错误提示与重试策略，并提供清空错误的能力。","对多请求场景按 key/域划分 flags，保持清晰边界。"],tips:["注意中断异常与网络错误的区分处理，分别做用户提示和流程控制。","将公共 IO 提取为 service，Store 只组织流程与写入，提升复用性。","对错误信息做人性化展示，不泄露实现细节。","配合 DevTools 监控异步流程，及时发现和修复问题。","所有异步 action 都应有 finally 分支归位 loading，防止 UI 卡死。","对大列表/高频场景做节流/去抖与批处理。","在取消路径同样归位 loading，避免长期禁用。"]},interview:{questions:[{question:"为什么要在 store 层编写异步 action？",answer:"集中管理 IO 与状态、降低组件复杂度、便于复用与测试、统一错误处理和竞态控制。"},{question:"如何避免请求竞态覆盖新数据？",answer:"使用 AbortController：新请求前 abort 旧请求，或维护请求 token 只采纳最后一次响应，保证数据一致性。"},{question:"如何区分 AbortError 与网络错误？",answer:"AbortError 属于主动中断不提示用户，网络错误需要明确反馈与重试，提升用户体验。"},{question:"如何保证 loading/error 状态的正确归位？",answer:"所有异步 action 都应有 finally 分支归位 loading，catch 分支写入 error，保证 UI 可用。"},{question:"如何提升异步 action 的可维护性？",answer:"统一命名、类型安全、集中管理、配合 DevTools 监控，便于团队协作和问题定位。"},{question:"哪些场景适合重试与退避？",answer:"临时性错误（超时、502）可重试并退避；权限/业务错误应直接提示并引导用户。"}],keyPoints:["Store 负责流程编排与状态写入，组件只触发 action 与渲染 UI。","中断/竞态控制是异步稳定性的关键，保证数据一致性。","所有异步 action 都应有异常捕获和归位处理，防止 UI 卡死。","配合 DevTools 监控异步流程，及时发现和修复问题。","类型安全和统一命名提升可维护性和协作效率。","重试/退避策略与用户体验设计。"]},bestPractices:{dos:["在 store 中集中处理 loading/error/data，提升一致性和可维护性。","为异步动作命名并接入 DevTools，便于排查和调试。","使用中断/去重策略避免竞态，保证数据一致性。","所有异步 action 都应有 finally 分支归位 loading，防止 UI 卡死。","对错误信息做统一处理和本地化，提升用户体验。","将公共 IO 提取为 service，Store 只组织流程与写入，提升复用性。","为关键请求记录时间戳/来源等元信息。"],donts:["不要在多个组件中复制粘贴相同 IO 逻辑，避免维护困难。","不要忽略错误处理或把 AbortError 当失败，防止误导用户。","不要在组件层重复实现相同的请求逻辑，应提升到 store 层统一管理。","不要在异步 action 中遗漏 finally 分支，防止 loading 卡死。","不要在 store 内部直接操作 DOM 或副作用，应保持纯净。","不要全量订阅大对象，避免无谓渲染。"],patterns:["store 异步 action + 组件只读 + DevTools 追踪，提升可维护性。","AbortController 中断 + 只采用最新响应，保证数据一致性。","统一 loading/error 管理 + finally 归位，提升用户体验。","公共 IO 提取为 service，Store 只组织流程与写入，提升复用性。","选择器精确订阅 + 不可变更新，降低渲染成本。"]}});export{N as default};
