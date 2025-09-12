import{j as t}from"./index-BWM6UHr8.js";import{C as e}from"./ComponentTemplate-ClBHhBQ8.js";import{z as o,a as s,Z as n}from"./zCounterStore-hIDJFRJU.js";import"./middleware-CPUTVaT6.js";const u=`// Redux Toolkit counter example (for comparison)
import { configureStore, createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { Provider, useDispatch, useSelector } from 'react-redux';

const incAsync = createAsyncThunk('counter/incAsync', async (delayMs = 300) => {
  await new Promise((r) => setTimeout(r, delayMs));
  return 1;
});

const counterSlice = createSlice({
  name: 'counter',
  initialState: { count: 0 },
  reducers: {
    inc: (state) => { state.count += 1; },
    dec: (state) => { state.count -= 1; },
    add: (state, action) => { state.count += action.payload; },
  },
  extraReducers: (builder) => {
    builder.addCase(incAsync.fulfilled, (state, action) => {
      state.count += action.payload;
    });
  }
});

const store = configureStore({ reducer: { counter: counterSlice.reducer } });

const Counter = () => {
  const dispatch = useDispatch();
  const count = useSelector((s) => s.counter.count);
  return (
    <div>
      <button onClick={() => dispatch(counterSlice.actions.dec())}>-</button>
      <span>{count}</span>
      <button onClick={() => dispatch(counterSlice.actions.inc())}>+</button>
      <button onClick={() => dispatch(incAsync(300))}>+ async</button>
    </div>
  );
};
`,d=()=>t.jsx(e,{title:"Zustand vs Redux",description:"对比两者在 API 复杂度、心智负担、可扩展性与生态支持上的差异，并给出不同规模场景下的选型建议。",overview:[{title:"核心概念",items:["Zustand：极简、无样板、通过 selector 精准订阅。","Redux：单向数据流、严格可预测、生态成熟（RTK）。","Zustand 默认无中间件约束，按需组合 devtools/persist 等。","Redux 强调不可变数据与序列化，便于时间旅行与回放。","两者都能与 TypeScript 良好配合，但心智与样板不同。"]},{title:"主要优势",items:["Zustand 上手快、样板少、灵活度高。","Redux 规范严格、工具链完善、适合复杂团队协作。","两者均可与 React Query 协作：其管服务端状态，UI 交互交给本地 store。","devtools 支持良好，便于观测与问题回溯。","可渐进迁移：局部尝试，不必一次性切换。"]},{title:"适用场景",items:["小中型项目：Zustand 更快上手，代码量更少。","大型/合规审计/复杂流程：Redux/RTK 更有体系化约束。","渐进式演进：可在局部用 Zustand，核心域使用 Redux。","与 React Query 等数据层搭配时，Zustand 管 UI 交互状态。","教育/团队背景：已有 Redux 经验则 RTK 上手更快。"]},{title:"注意事项",items:["Zustand 中注意 selector 精准订阅与浅比较避免重渲染。","Redux 中注意 action 粒度与不可变更新带来的样板。","在两者中都要避免过度全局化状态。","结合 devtools 明确动作语义，便于排查。","不要把服务端数据复制进 UI store，避免双份真相。"]}],examples:[{title:"Zustand 计数器（带异步）",component:t.jsx(n,{}),description:"最小可用示例：同步 + 异步更新，配合 devtools 观察变化。",observationPoints:["操作 inc/dec/add/async 是否只影响必要组件。","devtools 中动作轨迹是否清晰。","选择器是否只订阅必要切片。"],keyPoints:["极简创建与使用（无 Provider）。","按需中间件（devtools/persist）可插拔。","TS 类型推断友好。"],codeExample:{code:`${o}

${s}`,title:"Zustand 计数器"}},{title:"Redux（RTK）对等示例（仅代码对比）",component:t.jsx("div",{className:"text-sm text-gray-600",children:"右侧代码仅用于对比样板量与心智模型，未在本页实际运行。"}),description:"展示 Redux Toolkit 的切片、异步 thunk 与使用方式，便于与左侧示例对照。",observationPoints:["观察 action/reducer 样板与异步 thunk 模式。","对照 devtools 时间旅行与可回放优势。"],keyPoints:["更强约束与更重样板。","生态与工具链完善（RTK Query、时间旅行等）。"],codeExample:{code:u,title:"Redux Toolkit 计数器"}}],tutorial:{concepts:["状态粒度与订阅策略（selector vs connect/hooks）。","异步与副作用（Zustand 中直接写 action；Redux 使用 thunk/saga/observable）。","不可变更新与可预测性。","中间件/插件体系（devtools、persist、logger…）。","与数据获取库（React Query）边界划分。"],steps:["用最小计数器分别实现两种方案。","加入异步与中间件，观察复杂度变化。","在 devtools 中观察动作轨迹与回放体验。","评估团队现状（经验、规模、约束）选择方案。","形成边界约定（UI 状态 vs 服务器状态）。"],tips:["不要把所有状态都放全局；本地优先。","Zustand 优先选择器订阅；Redux 保持不可变更新。","明确中间件使用目的，避免无谓复杂度。","以小样本先行试点，再逐步推广。","搭配类型系统完善约束与可维护性。"]},interview:{questions:[{question:"何时选择 Zustand？",answer:"小中型、迭代快、样板成本敏感、配合 React Query 管理 UI 交互状态。"},{question:"何时选择 Redux？",answer:"大团队/强合规/复杂管控诉求，需要时间旅行与严格约束的场景。"},{question:"如何共存？",answer:"核心域使用 Redux，边缘功能/局部页面用 Zustand，边界清晰。"},{question:"如何避免过度全局？",answer:"优先本地状态，跨组件共享且稳定再全局化。"},{question:"怎么与 React Query 协作？",answer:"服务器状态交给 React Query，UI 交互与派生交给 Zustand/Redux。"}],keyPoints:["基于规模与约束选型。","中间件与生态差异。","不可变/预测性与学习成本权衡。","与数据层清晰分界。","可共存、可迁移。"]},bestPractices:{dos:["基于场景与团队选择工具，而非一刀切。","Zustand 使用选择器减少重渲染。","Redux 使用 RTK 简化样板与不可变更新。","保持 UI 状态与服务端状态的清晰边界。","配合 devtools/Profiler 做观测与优化。"],donts:["不要把服务端数据复制到 UI store。","不要过度全局化一切状态。","不要忽视类型与测试。","不要引入不必要的中间件。","不要在没有边界约定的情况下混用。"],patterns:["选择器模式（Zustand）。","Slice/Thunk 模式（Redux/RTK）。","双轨并存：核心域 Redux，周边用 Zustand。","React Query + UI Store 协作边界。"]}});export{d as default};
