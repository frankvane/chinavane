import{j as e,r as l}from"./index-BWM6UHr8.js";import{c as u,C as x}from"./ComponentTemplate-ClBHhBQ8.js";const b=()=>typeof window>"u"?"light":window.matchMedia&&window.matchMedia("(prefers-color-scheme: dark)").matches?"dark":"light",d=()=>{try{const t=localStorage.getItem("ui.theme");if(t==="light"||t==="dark"||t==="system")return t}catch{}return"system"},y=()=>{try{const t=localStorage.getItem("ui.locale");if(t==="zh"||t==="en")return t}catch{}return"zh"},h=t=>{const o=t==="system"?b():t;document.documentElement.dataset.theme=o},r=u((t,o)=>({theme:d(),locale:y(),isSidebarOpen:!1,setTheme:s=>{t({theme:s});try{localStorage.setItem("ui.theme",s)}catch{}typeof document<"u"&&h(s)},toggleTheme:()=>{const s=o().theme,a=s==="light"?"dark":s==="dark"?"system":"light";o().setTheme(a)},setLocale:s=>{t({locale:s});try{localStorage.setItem("ui.locale",s)}catch{}},toggleSidebar:()=>t(s=>({isSidebarOpen:!s.isSidebarOpen}))}));if(typeof document<"u")try{const t=d();h(t)}catch{}const f={zh:{current:"当前语言",zh:"中文",en:"英文",tip:"切换后界面文案将随之变化",hello:"你好，世界！"},en:{current:"Current locale",zh:"Chinese",en:"English",tip:"UI copy will switch after toggling",hello:"Hello, world!"}},S=()=>{const t=r(a=>a.locale),o=r(a=>a.setLocale),s=f[t];return e.jsxs("div",{className:"space-y-4",children:[e.jsxs("div",{className:"flex items-center gap-2",children:[e.jsxs("span",{className:"text-sm text-gray-600",children:[s.current,"："]}),e.jsx("span",{className:"px-2 py-1 rounded bg-gray-100 text-gray-800 text-sm",children:t})]}),e.jsxs("div",{className:"flex flex-wrap gap-2",children:[e.jsx("button",{onClick:()=>o("zh"),className:"px-3 py-1 rounded bg-gray-200 hover:bg-gray-300 text-sm",children:s.zh}),e.jsx("button",{onClick:()=>o("en"),className:"px-3 py-1 rounded bg-blue-500 text-white hover:bg-blue-600 text-sm",children:s.en})]}),e.jsx("div",{className:"border rounded-lg p-4 bg-white",children:e.jsx("p",{className:"text-sm text-gray-700",children:s.hello})}),e.jsx("p",{className:"text-xs text-gray-500",children:"提示：可将 locale 与你的 i18n/t() 方案打通，这里仅为示例文案。"})]})},v=()=>{const t=r(s=>s.isSidebarOpen),o=r(s=>s.toggleSidebar);return e.jsxs("div",{className:"space-y-4",children:[e.jsxs("div",{className:"flex items-center gap-2",children:[e.jsx("span",{className:"text-sm text-gray-600",children:"侧边栏状态："}),e.jsx("span",{className:`px-2 py-1 rounded text-sm ${t?"bg-green-100 text-green-700":"bg-gray-100 text-gray-700"}`,children:t?"已打开":"已关闭"})]}),e.jsxs("div",{className:`border rounded-lg p-4 ${t?"bg-green-50 border-green-200":"bg-white"}`,children:[e.jsx("p",{className:"text-sm text-gray-700 mb-2",children:"这是一个示意侧边栏区域。"}),e.jsx("div",{className:"h-10 rounded border border-dashed flex items-center justify-center text-xs text-gray-500",children:t?"内容可见":"内容隐藏"})]}),e.jsx("button",{onClick:o,className:"px-3 py-1 rounded bg-indigo-500 text-white hover:bg-indigo-600 text-sm",children:t?"关闭侧边栏":"打开侧边栏"})]})},T=()=>{const t=r(n=>n.theme),o=r(n=>n.setTheme),s=r(n=>n.toggleTheme),[a,g]=l.useState(typeof document<"u"&&document.documentElement.dataset.theme||"light");l.useEffect(()=>{const n=()=>{g(document.documentElement.dataset.theme||"light")};n();const m=new MutationObserver(n);return m.observe(document.documentElement,{attributes:!0,attributeFilter:["data-theme"]}),()=>m.disconnect()},[]);const p=l.useMemo(()=>a==="dark"?"bg-gray-900 text-gray-100 border-gray-700":"bg-white text-gray-900 border-gray-200",[a]);return e.jsxs("div",{className:"space-y-4",children:[e.jsxs("div",{className:"flex flex-wrap items-center gap-2",children:[e.jsx("span",{className:"text-sm text-gray-600",children:"当前主题："}),e.jsx("span",{className:"px-2 py-1 rounded bg-gray-100 text-gray-800 text-sm",children:t}),e.jsxs("span",{className:"text-sm text-gray-400",children:["(生效：",a,")"]})]}),e.jsxs("div",{className:"flex flex-wrap gap-2",children:[e.jsx("button",{onClick:()=>o("light"),className:"px-3 py-1 rounded bg-gray-200 hover:bg-gray-300 text-sm",children:"浅色"}),e.jsx("button",{onClick:()=>o("dark"),className:"px-3 py-1 rounded bg-gray-800 text-white hover:bg-gray-700 text-sm",children:"深色"}),e.jsx("button",{onClick:()=>o("system"),className:"px-3 py-1 rounded bg-blue-500 text-white hover:bg-blue-600 text-sm",children:"跟随系统"}),e.jsx("button",{onClick:s,className:"px-3 py-1 rounded bg-purple-500 text-white hover:bg-purple-600 text-sm",children:"循环切换"})]}),e.jsxs("div",{className:`border rounded-lg p-4 transition-colors ${p}`,children:[e.jsx("h4",{className:"font-medium mb-1",children:"主题预览"}),e.jsx("p",{className:"text-sm opacity-80",children:"这是依据当前 data-theme 渲染的示例区域。"}),e.jsxs("div",{className:"mt-3 flex gap-2",children:[e.jsx("button",{className:"px-3 py-1 rounded bg-indigo-500 text-white text-sm",children:"主要按钮"}),e.jsx("button",{className:"px-3 py-1 rounded border text-sm",children:"次要按钮"})]})]}),e.jsx("p",{className:"text-xs text-gray-500",children:"提示：我们将有效主题写入 document.documentElement.dataset.theme，便于全局样式响应。"})]})},N=`import React from 'react';
import { useUIStore } from '../stores/uiStore';

const copy = {
  zh: {
    current: '当前语言', zh: '中文', en: '英文', tip: '切换后界面文案将随之变化',
    hello: '你好，世界！',
  },
  en: {
    current: 'Current locale', zh: 'Chinese', en: 'English', tip: 'UI copy will switch after toggling',
    hello: 'Hello, world!',
  },
};

const LocaleToggleDemo: React.FC = () => {
  const locale = useUIStore((s) => s.locale);
  const setLocale = useUIStore((s) => s.setLocale);
  const t = copy[locale];

  return (
    <div className="space-y-4">
      <div className="flex items-center gap-2">
        <span className="text-sm text-gray-600">{t.current}：</span>
        <span className="px-2 py-1 rounded bg-gray-100 text-gray-800 text-sm">{locale}</span>
      </div>

      <div className="flex flex-wrap gap-2">
        <button onClick={() => setLocale('zh')} className="px-3 py-1 rounded bg-gray-200 hover:bg-gray-300 text-sm">{t.zh}</button>
        <button onClick={() => setLocale('en')} className="px-3 py-1 rounded bg-blue-500 text-white hover:bg-blue-600 text-sm">{t.en}</button>
      </div>

      <div className="border rounded-lg p-4 bg-white">
        <p className="text-sm text-gray-700">{t.hello}</p>
      </div>

      <p className="text-xs text-gray-500">提示：可将 locale 与你的 i18n/t() 方案打通，这里仅为示例文案。</p>
    </div>
  );
};

export default LocaleToggleDemo;
`,w=`import React from 'react';
import { useUIStore } from '../stores/uiStore';

const SidebarToggleDemo: React.FC = () => {
  const isSidebarOpen = useUIStore((s) => s.isSidebarOpen);
  const toggleSidebar = useUIStore((s) => s.toggleSidebar);

  return (
    <div className="space-y-4">
      <div className="flex items-center gap-2">
        <span className="text-sm text-gray-600">侧边栏状态：</span>
        <span className={\`px-2 py-1 rounded text-sm \${isSidebarOpen ? 'bg-green-100 text-green-700' : 'bg-gray-100 text-gray-700'}\`}>
          {isSidebarOpen ? '已打开' : '已关闭'}
        </span>
      </div>

      <div className={\`border rounded-lg p-4 \${isSidebarOpen ? 'bg-green-50 border-green-200' : 'bg-white'}\`}>
        <p className="text-sm text-gray-700 mb-2">这是一个示意侧边栏区域。</p>
        <div className="h-10 rounded border border-dashed flex items-center justify-center text-xs text-gray-500">
          {isSidebarOpen ? '内容可见' : '内容隐藏'}
        </div>
      </div>

      <button onClick={toggleSidebar} className="px-3 py-1 rounded bg-indigo-500 text-white hover:bg-indigo-600 text-sm">
        {isSidebarOpen ? '关闭侧边栏' : '打开侧边栏'}
      </button>
    </div>
  );
};

export default SidebarToggleDemo;
`,c=`import { create } from 'zustand';
import type { UIStore, Theme, Locale } from '../types';

const getSystemTheme = (): Theme => {
  if (typeof window === 'undefined') return 'light';
  return window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
};

const loadTheme = (): Theme => {
  try {
    const t = localStorage.getItem('ui.theme');
    if (t === 'light' || t === 'dark' || t === 'system') return t;
  } catch {}
  return 'system';
};

const loadLocale = (): Locale => {
  try {
    const l = localStorage.getItem('ui.locale');
    if (l === 'zh' || l === 'en') return l;
  } catch {}
  return 'zh';
};

const applyTheme = (theme: Theme) => {
  const effective = theme === 'system' ? getSystemTheme() : theme;
  document.documentElement.dataset.theme = effective;
};

export const useUIStore = create<UIStore>((set, get) => ({
  theme: loadTheme(),
  locale: loadLocale(),
  isSidebarOpen: false,

  setTheme: (theme: Theme) => {
    set({ theme });
    try { localStorage.setItem('ui.theme', theme); } catch {}
    if (typeof document !== 'undefined') applyTheme(theme);
  },
  toggleTheme: () => {
    const current = get().theme;
    const next = current === 'light' ? 'dark' : current === 'dark' ? 'system' : 'light';
    get().setTheme(next);
  },
  setLocale: (locale: Locale) => {
    set({ locale });
    try { localStorage.setItem('ui.locale', locale); } catch {}
  },
  toggleSidebar: () => set((s) => ({ isSidebarOpen: !s.isSidebarOpen })),
}));

// 初始化时根据已存主题应用一次
if (typeof document !== 'undefined') {
  try {
    const saved = loadTheme();
    applyTheme(saved);
  } catch {}
}
`,I=`import React, { useEffect, useMemo, useState } from 'react';
import { useUIStore } from '../stores/uiStore';

const ThemeToggleDemo: React.FC = () => {
  const theme = useUIStore((s) => s.theme);
  const setTheme = useUIStore((s) => s.setTheme);
  const toggleTheme = useUIStore((s) => s.toggleTheme);

  const [effectiveTheme, setEffectiveTheme] = useState<string>(
    typeof document !== 'undefined' ? document.documentElement.dataset.theme || 'light' : 'light'
  );

  useEffect(() => {
    const update = () => {
      setEffectiveTheme(document.documentElement.dataset.theme || 'light');
    };
    update();
    const observer = new MutationObserver(update);
    observer.observe(document.documentElement, { attributes: true, attributeFilter: ['data-theme'] });
    return () => observer.disconnect();
  }, []);

  const previewClasses = useMemo(() => {
    return effectiveTheme === 'dark'
      ? 'bg-gray-900 text-gray-100 border-gray-700'
      : 'bg-white text-gray-900 border-gray-200';
  }, [effectiveTheme]);

  return (
    <div className="space-y-4">
      <div className="flex flex-wrap items-center gap-2">
        <span className="text-sm text-gray-600">当前主题：</span>
        <span className="px-2 py-1 rounded bg-gray-100 text-gray-800 text-sm">{theme}</span>
        <span className="text-sm text-gray-400">(生效：{effectiveTheme})</span>
      </div>

      <div className="flex flex-wrap gap-2">
        <button onClick={() => setTheme('light')} className="px-3 py-1 rounded bg-gray-200 hover:bg-gray-300 text-sm">浅色</button>
        <button onClick={() => setTheme('dark')} className="px-3 py-1 rounded bg-gray-800 text-white hover:bg-gray-700 text-sm">深色</button>
        <button onClick={() => setTheme('system')} className="px-3 py-1 rounded bg-blue-500 text-white hover:bg-blue-600 text-sm">跟随系统</button>
        <button onClick={toggleTheme} className="px-3 py-1 rounded bg-purple-500 text-white hover:bg-purple-600 text-sm">循环切换</button>
      </div>

      <div className={\`border rounded-lg p-4 transition-colors \${previewClasses}\`}>
        <h4 className="font-medium mb-1">主题预览</h4>
        <p className="text-sm opacity-80">这是依据当前 data-theme 渲染的示例区域。</p>
        <div className="mt-3 flex gap-2">
          <button className="px-3 py-1 rounded bg-indigo-500 text-white text-sm">主要按钮</button>
          <button className="px-3 py-1 rounded border text-sm">次要按钮</button>
        </div>
      </div>

      <p className="text-xs text-gray-500">提示：我们将有效主题写入 document.documentElement.dataset.theme，便于全局样式响应。</p>
    </div>
  );
};

export default ThemeToggleDemo;
`,i=`export type Theme = 'light' | 'dark' | 'system';
export type Locale = 'zh' | 'en';

export interface UIState {
  theme: Theme;
  locale: Locale;
  isSidebarOpen: boolean;
}

export interface UIActions {
  setTheme: (theme: Theme) => void;
  toggleTheme: () => void;
  setLocale: (locale: Locale) => void;
  toggleSidebar: () => void;
}

export type UIStore = UIState & UIActions;
`,k=()=>e.jsx(x,{title:"多语言/主题切换",description:"学习如何用轻量 UI Store 统一管理主题（浅色/深色/系统）、语言（中/英）与侧边栏开关；掌握 data-theme 同步、最小切片订阅与本地持久化。",overview:[{title:"核心概念",items:["UI Store 专注“呈现相关”的全局状态：theme、locale、isSidebarOpen。","Theme 支持 'light'/'dark'/'system'；'system' 模式解析系统偏好并写入 data-theme。","Locale 只存语言标识（'zh'|'en'），具体文案交给 i18n/t() 层。","Sidebar 只存开关布尔值，由宿主布局决定如何消费该状态。","通过选择器订阅最小切片，组件只在必要时重渲染。"]},{title:"主要优势",items:["避免在多页面重复实现切换逻辑，提升一致性与可维护性。","统一来源便于调试、时间旅行与问题定位（DevTools/日志）。","本地持久化 theme/locale，带来跨页面一致体验。","以 data-theme 作为样式总开关，兼容 Tailwind/原生 CSS。"]},{title:"适用场景",items:["需要全局统一的主题与语言配置。","多页面/多模块共享 UI 基础状态的项目。","主题或语言需要持久化保存的应用。"]},{title:"注意事项",items:["仅在浏览器端访问 window/document 与 localStorage（SSR 返回默认值）。","'system' 模式不应强行覆盖系统偏好，应解析后写入 data-theme。","避免在 UI Store 中混入业务表单或异步请求逻辑。"]}],examples:[{title:"主题切换演示",component:e.jsx(T,{}),description:"浅色/深色/系统主题切换，实时写入 documentElement.dataset.theme，并可视化预览。",observationPoints:["切换按钮与“有效主题”展示是否一致。","system 模式下调整系统主题，预览是否即时变化。"],keyPoints:["setTheme 与 toggleTheme 的职责差异。","data-theme 作为全局样式开关，利于 Tailwind/变量方案。"],commonTraps:["仅改状态未写 data-theme 导致页面无样式变化。","在 SSR 阶段访问 window/document 报错。"],solutions:["封装 applyTheme，在初始化与 setTheme 中统一调用。","判断 typeof window/document 后再执行 DOM 写入。"],preCode:[{code:c,title:"uiStore.ts"},{code:i,title:"types/index.ts"}],codeExample:{code:I,title:"ThemeToggleDemo.tsx"}},{title:"语言切换演示",component:e.jsx(S,{}),description:"中英文切换，展示 locale 与界面文案联动（可对接 i18n/t()）。",observationPoints:["切换语言后“你好，世界/Hello, world”是否即时变化。"],keyPoints:["UI Store 只存语言标识，文案解耦在 t() 层。"],commonTraps:["在渲染期间直接访问 localStorage 触发告警。"],solutions:["读写持久化放在 effect 或交互中，并加入 try/catch 兜底。"],preCode:[{code:c,title:"uiStore.ts"},{code:i,title:"types/index.ts"}],codeExample:{code:N,title:"LocaleToggleDemo.tsx"}},{title:"侧边栏开关演示",component:e.jsx(v,{}),description:"以最小原语 toggleSidebar 管理开关，布局层按需消费。",observationPoints:["点击按钮后，状态徽标与内容可见性是否同步变化。"],keyPoints:["布尔状态只描述是否打开，不关心布局细节。"],commonTraps:["在 UI Store 中混入布局计算/路由逻辑，导致不可维护。"],solutions:["将 UI Store 作为状态源，具体布局交给容器组件处理。"],preCode:[{code:c,title:"uiStore.ts"},{code:i,title:"types/index.ts"}],codeExample:{code:w,title:"SidebarToggleDemo.tsx"}}],tutorial:{concepts:["Theme/Locale/Sidebar 是 UI 层常见的全局状态原语。","'system' 主题需解析为生效主题并同步到 data-theme。","localStorage 持久化提升跨页面一致性与体验。"],steps:["定义 UIStore 类型（Theme/Locale/UIState/UIActions）。","实现 uiStore：setTheme/toggleTheme/setLocale/toggleSidebar。","封装 applyTheme：生效主题 -> documentElement.dataset.theme。","组件以选择器订阅最小切片，减少重渲染。","为可持久化状态提供 load/save，初始化时同步一次。"],tips:["初始化时立即同步主题至 data-theme，避免首屏闪烁。","仅在浏览器端访问 window/document 与 localStorage。","把 i18n 文案映射留给 t()，UI Store 不存整套文案。","以原语 API 组合复杂交互，保持 Store 简洁。"]},interview:{questions:[{question:"为什么把主题/语言放入 UI Store？",answer:"统一来源可在任意组件读取与修改，避免多处重复实现与状态不同步；同时利于持久化与调试（DevTools）。"},{question:"如何实现“跟随系统”的主题？",answer:"使用 matchMedia('(prefers-color-scheme: dark)') 读取系统偏好；在 'system' 模式下解析为 'light' 或 'dark' 才写入 data-theme。"},{question:"如何避免 SSR 报错？",answer:"将 DOM 与存储访问放在浏览器端执行，渲染期仅返回默认值；必要时在布局入口延迟同步。"},{question:"UI Store 与业务 Store 的分界？",answer:"UI Store 不持有业务数据与副作用，只提供呈现层需要的最小原语；业务数据放在各业务 Store。"}],keyPoints:["单一职责：UI 只管呈现原语。","可组合：上层用原语编排复杂交互。","可观测：统一来源便于调试与回溯。"]},bestPractices:{dos:["使用选择器订阅最小状态切片，降低重渲染。","仅在客户端环境操作 document/localStorage。","为可持久化的状态提供读写封装与兜底默认值。","在入口处初始化同步主题，提升首屏一致性。"],donts:["不要把业务数据/表单状态塞进 UI Store。","不要在渲染期间直接访问 localStorage。","不要在 UI Store 内散落 DOM 操作与复杂逻辑。"],patterns:["data-theme：根节点 data-attribute 统一驱动主题样式。","persist：localStorage 读写 + 初始化同步。","selector：按需订阅，减少渲染。","facade：用原语 API 在上层组合更复杂的交互。"]}});export{k as default};
