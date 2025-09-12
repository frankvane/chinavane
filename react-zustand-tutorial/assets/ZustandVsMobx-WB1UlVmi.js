import{j as e}from"./index-BWM6UHr8.js";import{C as t}from"./ComponentTemplate-ClBHhBQ8.js";import{a as o,z as s,Z as r}from"./zCounterStore-hIDJFRJU.js";import"./middleware-CPUTVaT6.js";const n=`// MobX counter example (for comparison)
import { makeAutoObservable } from 'mobx';
import { observer } from 'mobx-react-lite';

class CounterStore {
  count = 0;
  constructor() {
    makeAutoObservable(this);
  }
  inc() { this.count += 1; }
  dec() { this.count -= 1; }
  add(n) { this.count += n; }
  async incAsync(delayMs = 300) {
    await new Promise(r => setTimeout(r, delayMs));
    this.count += 1;
  }
}

const store = new CounterStore();

const Counter = observer(() => (
  <div>
    <button onClick={() => store.dec()}>-</button>
    <span>{store.count}</span>
    <button onClick={() => store.inc()}>+</button>
    <button onClick={() => store.incAsync(300)}>+ async</button>
  </div>
));
`,d=()=>e.jsx(t,{title:"Zustand vs MobX",description:"对比响应式（MobX）与选择器订阅（Zustand）的差异：心智模型、样板、可预测性与团队协作。",overview:[{title:"核心概念",items:["Zustand：函数式 store + selector 精准订阅，避免无关渲染。","MobX：响应式依赖收集，基于 observable/observer 自动追踪使用点。","Zustand 以显式订阅边界换取可预测渲染。","MobX 以透明响应式带来便捷，但需注意隐式依赖。","两者都可与 TypeScript/DevTools 协作。"]},{title:"主要优势",items:["Zustand：样板少、精准订阅、与 React 心智贴近。","MobX：响应式开发效率高，代码量少，易于快速构建。","Zustand：中间件按需接入（devtools/persist）。","MobX：对面向对象/响应式思维友好。","两者均可与 React Query 边界协作。"]},{title:"适用场景",items:["Zustand：需要精确控制渲染/性能敏感的交互页面。","MobX：原生偏响应式思维、表单/编辑器类双向数据流。","混合：局部使用 MobX 做复杂表单，整体状态以 Zustand 管理。","与 React Query 配合：服务器状态交给 Query，UI 交互交给本地 store。","团队已有经验与偏好。"]},{title:"注意事项",items:["Zustand：避免订阅整个 store，使用稳定 selector。","MobX：注意隐式依赖，避免无意的订阅扩大与渲染。","避免把服务端数据复制到 UI store（双份真相）。","明确模块边界与命名，配合 devtools/Profiler 观测。","选择适合团队的心智模型。"]}],examples:[{title:"Zustand 计数器（带异步）",component:e.jsx(r,{}),description:"最小可用示例：同步/异步更新，配合 devtools 观察。",observationPoints:["inc/dec/add/async 是否只影响必要组件（精准订阅）","devtools 中动作轨迹是否清晰","选择器是否只订阅必要切片"],keyPoints:["极简创建与使用（无需 Provider）","中间件按需接入（devtools/persist）","选择器订阅最小切片，减少重渲染"],preCode:[{title:"Zustand Store",code:s,description:"计数器 store 定义（含 devtools 与异步）"}],codeExample:{code:o,title:"Zustand 计数器组件"}},{title:"MobX 对等示例（仅代码对比）",component:e.jsx("div",{className:"text-sm text-gray-600",children:"右侧代码仅用于对比响应式心智与样板量，未在本页实际运行。"}),description:"展示 MobX 的 observable/store 与 observer 组件用法，便于与左侧示例对照。",observationPoints:["自动追踪依赖的便捷与隐式性","与 Zustand 显式 selector 的边界对比"],keyPoints:["响应式心智适合表单/编辑器/面板联动","需关注隐式依赖带来的渲染边界不清"],codeExample:{code:n,title:"MobX 计数器（对比）"}}],tutorial:{concepts:["响应式依赖收集 vs 选择器订阅","副作用与异步：方法内直接处理 vs 专用中间件","渲染可预测性与隐式依赖","中间件与调试（devtools/Profiler）","与 React Query 的边界"],steps:["分别以最小计数器实现两种方式","加入异步与调试，观察复杂度变化","评估团队心智与代码风格匹配度","明确两者与数据层的边界","形成可迁移与共存策略"],tips:["Zustand 优先 selector 减少重渲染","MobX 注意避免无意依赖与过度响应","以小样本试点，逐步推广","类型与测试保障一致性","结合 devtools/Profiler 观测优化"]},interview:{questions:[{question:"何时选择 Zustand？",answer:"需要精准订阅、控制渲染与简化样板的小中型场景。"},{question:"何时选择 MobX？",answer:"对响应式建模友好、表单/编辑器类业务、面板联动较多的场景。"},{question:"如何避免隐式依赖陷阱？",answer:"梳理依赖、拆分 store、使用 observer 时控制粒度。"},{question:"如何共存？",answer:"局部用 MobX 做复杂 UI 域，整体状态用 Zustand 管理，边界清晰。"},{question:"怎么与 React Query 协作？",answer:"服务器状态交给 React Query，UI 交互与派生交给本地 store。"}],keyPoints:["基于团队心智与业务形态选择。","响应式与选择器订阅的权衡。","渲染可预测性与调试便利性。","与服务端状态明确边界。","可共存与可迁移。"]},bestPractices:{dos:["基于场景与团队选择工具，而非一刀切","Zustand 使用 selector 减少重渲染","MobX 控制 observer 粒度，避免隐式大范围订阅","明确 UI 状态与服务端状态的边界","配合 devtools/Profiler 做观测与优化"],donts:["不要复制服务端数据到 UI store","不要过度全局化一切状态","不要忽视类型与测试","不要引入不必要中间件/装饰器","不要在没有边界约定时混用"],patterns:["选择器模式（Zustand）","响应式 observable/store + observer（MobX）","双轨并存：局部响应式，整体显式订阅","React Query + UI Store 协作边界"]}});export{d as default};
