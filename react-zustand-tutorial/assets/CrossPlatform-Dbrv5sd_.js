import{j as e}from"./index-BWM6UHr8.js";import{d as m}from"./middleware-CPUTVaT6.js";import{c as l,C as p}from"./ComponentTemplate-ClBHhBQ8.js";const u={platformName:"web",now:()=>typeof performance<"u"&&performance.now?performance.now():Date.now(),getItem:t=>{try{return typeof localStorage>"u"?null:localStorage.getItem(t)}catch{return null}},setItem:(t,r)=>{try{if(typeof localStorage>"u")return;localStorage.setItem(t,r)}catch{}},removeItem:t=>{try{if(typeof localStorage>"u")return;localStorage.removeItem(t)}catch{}}},d="cp-store",y=(t=u)=>l()(m((r,a)=>({counter:0,theme:"light",lastHydratedAt:void 0,increment:()=>r(n=>({counter:n.counter+1})),setTheme:n=>r({theme:n}),hydrateFromStorage:async()=>{const n=await Promise.resolve(t.getItem(d));if(n)try{const s=JSON.parse(n);r({counter:typeof s.counter=="number"?s.counter:0,theme:s.theme==="dark"?"dark":"light",lastHydratedAt:t.now()})}catch{}},saveToStorage:async()=>{const{counter:n,theme:s}=a(),o=JSON.stringify({counter:n,theme:s});await Promise.resolve(t.setItem(d,o))}}),{name:"CPStore"})),c=y(),g=()=>{const t=c(a=>a.hydrateFromStorage),r=c(a=>a.lastHydratedAt);return e.jsxs("div",{className:"space-y-3",children:[e.jsx("button",{className:"px-3 py-1 rounded text-sm bg-indigo-500 text-white hover:bg-indigo-600",onClick:()=>t(),children:"从存储恢复（Hydrate）"}),e.jsxs("div",{className:"text-xs text-gray-600",children:["最近一次恢复时间：",r?`${Math.round(r)} ms`:"—"]})]})},h=()=>{const t=c(o=>o.counter),r=c(o=>o.theme),a=c(o=>o.increment),n=c(o=>o.setTheme),s=c(o=>o.saveToStorage);return e.jsxs("div",{className:"space-y-3",children:[e.jsxs("div",{className:"flex items-center gap-2",children:[e.jsx("span",{className:"text-sm text-gray-600",children:"主题："}),e.jsx("button",{onClick:()=>n("light"),className:`px-3 py-1 rounded text-sm ${r==="light"?"bg-indigo-500 text-white":"bg-gray-200"}`,children:"Light"}),e.jsx("button",{onClick:()=>n("dark"),className:`px-3 py-1 rounded text-sm ${r==="dark"?"bg-indigo-500 text-white":"bg-gray-200"}`,children:"Dark"})]}),e.jsxs("div",{className:"flex items-center gap-3",children:[e.jsxs("span",{className:"text-sm text-gray-600",children:["计数：",t]}),e.jsx("button",{onClick:a,className:"px-3 py-1 rounded text-sm bg-green-500 text-white hover:bg-green-600",children:"+1"}),e.jsx("button",{onClick:()=>s(),className:"px-3 py-1 rounded text-sm bg-slate-600 text-white hover:bg-slate-700",children:"保存到存储"})]}),e.jsx("div",{className:"text-xs text-gray-500",children:"此示例模拟 Web/Native 通用：存储与时间由适配器抽象。"})]})},i=`import type { CPStore, PlatformAdapter } from "../types";

import { create } from "zustand";
import { devtools } from "zustand/middleware";

const webAdapter: PlatformAdapter = {
  platformName: "web",
  now: () =>
    typeof performance !== "undefined" && performance.now
      ? performance.now()
      : Date.now(),
  getItem: (key) => {
    try {
      if (typeof localStorage === "undefined") return null;
      return localStorage.getItem(key);
    } catch {
      return null;
    }
  },
  setItem: (key, value) => {
    try {
      if (typeof localStorage === "undefined") return;
      localStorage.setItem(key, value);
    } catch {
      // ignore storage write error
    }
  },
  removeItem: (key) => {
    try {
      if (typeof localStorage === "undefined") return;
      localStorage.removeItem(key);
    } catch {
      // ignore storage remove error
    }
  },
};

const STORAGE_KEY = "cp-store";

export const createCPStore = (adapter: PlatformAdapter = webAdapter) =>
  create<CPStore>()(
    devtools(
      (set, get) => ({
        counter: 0,
        theme: "light",
        lastHydratedAt: undefined,
        increment: () => set((s) => ({ counter: s.counter + 1 })),
        setTheme: (t) => set({ theme: t }),
        hydrateFromStorage: async () => {
          const raw = await Promise.resolve(adapter.getItem(STORAGE_KEY));
          if (!raw) return;
          try {
            const parsed = JSON.parse(raw) as Partial<CPStore>;
            set({
              counter: typeof parsed.counter === "number" ? parsed.counter : 0,
              theme: parsed.theme === "dark" ? "dark" : "light",
              lastHydratedAt: adapter.now(),
            });
          } catch {
            // ignore parse error
          }
        },
        saveToStorage: async () => {
          const { counter, theme } = get();
          const payload = JSON.stringify({ counter, theme });
          await Promise.resolve(adapter.setItem(STORAGE_KEY, payload));
        },
      }),
      { name: "CPStore" }
    )
  );

export const useCPStore = createCPStore();
export type { PlatformAdapter };
`,x=`import React from "react";\r
import { useCPStore } from "../stores/cpStore";\r
\r
const BasicHydrationDemo: React.FC = () => {\r
  const hydrate = useCPStore((s) => s.hydrateFromStorage);\r
  const lastHydratedAt = useCPStore((s) => s.lastHydratedAt);\r
\r
  return (\r
    <div className="space-y-3">\r
      <button\r
        className="px-3 py-1 rounded text-sm bg-indigo-500 text-white hover:bg-indigo-600"\r
        onClick={() => hydrate()}\r
      >\r
        从存储恢复（Hydrate）\r
      </button>\r
      <div className="text-xs text-gray-600">\r
        最近一次恢复时间：\r
        {lastHydratedAt ? \`\${Math.round(lastHydratedAt)} ms\` : "—"}\r
      </div>\r
    </div>\r
  );\r
};\r
\r
export default BasicHydrationDemo;\r
`,S=`import React from "react";\r
import { useCPStore } from "../stores/cpStore";\r
\r
const SaveAndCounterDemo: React.FC = () => {\r
  const counter = useCPStore((s) => s.counter);\r
  const theme = useCPStore((s) => s.theme);\r
  const increment = useCPStore((s) => s.increment);\r
  const setTheme = useCPStore((s) => s.setTheme);\r
  const save = useCPStore((s) => s.saveToStorage);\r
\r
  return (\r
    <div className="space-y-3">\r
      <div className="flex items-center gap-2">\r
        <span className="text-sm text-gray-600">主题：</span>\r
        <button\r
          onClick={() => setTheme("light")}\r
          className={\`px-3 py-1 rounded text-sm \${\r
            theme === "light" ? "bg-indigo-500 text-white" : "bg-gray-200"\r
          }\`}\r
        >\r
          Light\r
        </button>\r
        <button\r
          onClick={() => setTheme("dark")}\r
          className={\`px-3 py-1 rounded text-sm \${\r
            theme === "dark" ? "bg-indigo-500 text-white" : "bg-gray-200"\r
          }\`}\r
        >\r
          Dark\r
        </button>\r
      </div>\r
      <div className="flex items-center gap-3">\r
        <span className="text-sm text-gray-600">计数：{counter}</span>\r
        <button\r
          onClick={increment}\r
          className="px-3 py-1 rounded text-sm bg-green-500 text-white hover:bg-green-600"\r
        >\r
          +1\r
        </button>\r
        <button\r
          onClick={() => save()}\r
          className="px-3 py-1 rounded text-sm bg-slate-600 text-white hover:bg-slate-700"\r
        >\r
          保存到存储\r
        </button>\r
      </div>\r
      <div className="text-xs text-gray-500">\r
        此示例模拟 Web/Native 通用：存储与时间由适配器抽象。\r
      </div>\r
    </div>\r
  );\r
};\r
\r
export default SaveAndCounterDemo;\r
`,A=()=>e.jsx(p,{title:"跨平台（Web / React Native）通用 Store",description:"用适配器（Adapter）抽象环境差异（时间与存储），实现 Web 与 React Native 共享的 Zustand store 模式。",overview:[{title:"核心概念",items:["Adapter 抽象平台差异：时间源（now）与存储（get/set/remove）。","Store 逻辑与 UI 解耦，平台仅提供适配器实现。","Hydration：从存储恢复初始状态。","持久化：将部分状态保存到存储。","保持最小共享面：仅抽象必要能力，避免平台耦合。"]},{title:"主要优势",items:["同一业务逻辑可在 Web/Native 共享。","测试简单：可注入 Mock Adapter。","可维护性高：平台差异集中在 Adapter。","可渐进替换：不同端逐步接入新能力。","与持久化/并发/选择器等特性兼容。"]},{title:"适用场景",items:["跨端产品（Web + RN）。","SDK/微前端等需要被多端复用的状态模块。","需要离线能力与恢复的业务。","需要注入平台依赖（存储、时间、传感器等）的场景。","希望统一调试与开发体验。"]},{title:"注意事项",items:["避免将 DOM/平台 API 直接写入 Store。","Adapter 仅暴露必要能力，防止泄露具体平台细节。","错误处理要健壮：存储失败/JSON 解析失败等。","定义稳定的序列化格式，便于版本演进。","必要时提供迁移逻辑（版本号 + 迁移函数）。"]}],examples:[{title:"主题/计数 + 持久化",component:e.jsx(h,{}),description:"切换主题、计数 +1，并保存到适配器存储中。",observationPoints:["保存后刷新页面可通过 Hydrate 恢复状态。","切换主题/计数变化后，未保存前刷新不会保留（验证持久化边界）。","多次保存后数据是否一致、是否存在覆盖问题。","在隐身模式或禁用存储时的降级表现。","devtools 中动作轨迹是否清晰（increment/setTheme/save）。"],keyPoints:["仅保存必要字段（避免冗余）。","持久化与 UI 行为解耦（动作即数据）。","存储 I/O 失败要有兜底与提示策略。","序列化格式保持稳定，便于未来迁移。","适配器可替换（Web localStorage / RN AsyncStorage）。"],codeExample:{code:`${S}

${i}`,title:"Save Demo + Store"}},{title:"从存储恢复（Hydration）",component:e.jsx(g,{}),description:"点击按钮从适配器存储中恢复，记录恢复时间（ms）。",observationPoints:["首次点击若无数据，不会报错（默认值回退）。","恢复后显示最近一次恢复时间（ms），可用于性能对比。","恢复后的界面与 devtools 中的状态是否一致。","刷新后再次 Hydate 是否与保存的数据完全一致。","在解析失败或数据缺失时，是否保持页面可用。"],keyPoints:["adapter.getItem 的结果需要健壮解析（try/catch + 默认值）。","将恢复时间记入状态，便于观察端上性能差异。","Hydration 与 UI 渲染解耦，避免阻塞交互。","数据 Schema 稳定，可随版本演进做迁移。","支持注入 Mock Adapter 以覆盖异常分支。"],codeExample:{code:`${x}

${i}`,title:"Hydration Demo + Store"}}],tutorial:{concepts:["平台适配器（Adapter）模式。","存储抽象：localStorage / AsyncStorage / SecureStore。","时间抽象：performance.now / Date.now。","Hydration 与持久化策略。","单测：注入 Mock Adapter 实现。"],steps:["定义 Adapter 接口与 Store 的状态/动作。","在 Web 端提供默认 Adapter 实现。","实现 hydrate/save 动作与错误兜底。","在 RN 端实现 AsyncStorage 版本的 Adapter。","用同一套组件验证两端逻辑一致性。"],tips:["尽量让 Store 无平台引用，仅通过 Adapter 获取能力。","优先最小集合抽象，避免过度设计。","定义清晰的序列化 Schema，方便迁移。","对于易失败操作（I/O）做好 try/catch 与降级。","配合 devtools 观察跨端行为一致性。"]},interview:{questions:[{question:"为何需要 Adapter 模式？",answer:"隔离平台差异，复用核心业务逻辑，降低耦合与维护成本。"},{question:"如何在 RN 中复用该 Store？",answer:"实现 PlatformAdapter 的 RN 版本（基于 AsyncStorage），以此创建同一个 Store。"},{question:"Hydration 失败如何处理？",answer:"捕获解析/存储异常，提供默认值并记录恢复时间便于排查。"},{question:"如何做版本迁移？",answer:"在持久化数据中加入版本号，按需做迁移。"},{question:"如何测试不同平台行为？",answer:"注入 Mock Adapter 并编写单测覆盖边界情况。"}],keyPoints:["平台差异 → Adapter；业务逻辑 → Store。","健壮的序列化与错误处理。","可测试性与可维护性提升。","与持久化/并发/选择器协作良好。","跨端一致的用户体验与调试方式。"]},bestPractices:{dos:["统一抽象平台能力，保持 Store 与 UI 解耦。","使用 devtools 追踪跨端行为。","最小必要持久化，避免保存无关状态。","明确序列化 Schema 并留好迁移位。","通过注入 Mock Adapter 提升可测试性。"],donts:["不要在 Store 中直接调用平台 API。","不要把所有状态都持久化。","不要忽视错误处理与降级路径。","不要让 Adapter 过度暴露平台细节。","不要将平台相关逻辑散落在组件中。"],patterns:["Adapter 模式解耦平台差异。","Hydration + Save 的最小持久化闭环。","以注入方式实现可测试性。","跨端一致的调试（devtools）。"]}});export{A as default};
