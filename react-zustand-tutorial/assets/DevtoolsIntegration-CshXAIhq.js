import{r as u,j as e}from"./index-BWM6UHr8.js";import{d as j}from"./middleware-CPUTVaT6.js";import{c as T,C}from"./ComponentTemplate-ClBHhBQ8.js";const N={count:0,step:1,history:[0],lastAction:"init",timestamp:Date.now()},o=T()(j(s=>({...N,increment:()=>s(t=>({count:t.count+1,history:[...t.history,t.count+1],lastAction:"increment",timestamp:Date.now()}),!1,"increment"),decrement:()=>s(t=>({count:t.count-1,history:[...t.history,t.count-1],lastAction:"decrement",timestamp:Date.now()}),!1,"decrement"),incrementByStep:()=>s(t=>({count:t.count+t.step,history:[...t.history,t.count+t.step],lastAction:"incrementByStep",timestamp:Date.now()}),!1,"incrementByStep"),decrementByStep:()=>s(t=>({count:t.count-t.step,history:[...t.history,t.count-t.step],lastAction:"decrementByStep",timestamp:Date.now()}),!1,"decrementByStep"),setStep:t=>s({step:t,lastAction:"setStep",timestamp:Date.now()},!1,"setStep"),reset:()=>s({...N,timestamp:Date.now()},!1,"reset"),timeTravel:t=>s(a=>{const n=a.history.slice(0,t+1);return{count:n[n.length-1],history:n,lastAction:"timeTravel",timestamp:Date.now()}},!1,"timeTravel")}),{name:"DevtoolsCounterStore"})),g=s=>s.count,k=s=>s.step,A=s=>s.history,h=s=>s.lastAction,B=s=>s.timestamp,L=()=>{const s=o(g),t=o(h),a=o(B),{increment:n,decrement:c,incrementByStep:d,decrementByStep:m,setStep:l,reset:r}=o(),[x,y]=u.useState([]),[p,w]=u.useState(!0);u.useEffect(()=>{p&&t!=="init"&&y(i=>[...i,{action:t,timestamp:a,count:s}])},[t,a,s,p]);const D=()=>{y([])},f=i=>new Date(i).toLocaleTimeString();return e.jsx("div",{className:"space-y-4",children:e.jsxs("div",{className:"p-4 bg-green-50 border border-green-200 rounded-lg",children:[e.jsx("h3",{className:"text-lg font-semibold text-green-800 mb-2",children:"操作追踪演示"}),e.jsx("p",{className:"text-green-700 text-sm mb-4",children:"观察每个操作在 DevTools 中的记录，以及本地操作日志的同步。"}),e.jsxs("div",{className:"grid grid-cols-3 gap-4 mb-4",children:[e.jsxs("div",{className:"bg-white p-3 rounded border",children:[e.jsx("div",{className:"text-sm text-gray-600",children:"当前计数"}),e.jsx("div",{className:"text-2xl font-bold text-green-600",children:s})]}),e.jsxs("div",{className:"bg-white p-3 rounded border",children:[e.jsx("div",{className:"text-sm text-gray-600",children:"最后操作"}),e.jsx("div",{className:"text-lg font-medium text-green-600",children:t})]}),e.jsxs("div",{className:"bg-white p-3 rounded border",children:[e.jsx("div",{className:"text-sm text-gray-600",children:"操作次数"}),e.jsx("div",{className:"text-2xl font-bold text-blue-600",children:x.length})]})]}),e.jsx("div",{className:"bg-white p-3 rounded border mb-4",children:e.jsxs("div",{className:"flex items-center justify-between mb-2",children:[e.jsx("span",{className:"text-sm text-gray-600",children:"操作追踪"}),e.jsxs("div",{className:"flex gap-2",children:[e.jsx("button",{onClick:()=>w(!p),className:`px-3 py-1 text-xs rounded ${p?"bg-green-500 text-white":"bg-gray-300 text-gray-700"}`,children:p?"追踪中":"已暂停"}),e.jsx("button",{onClick:D,className:"px-3 py-1 bg-red-500 text-white text-xs rounded hover:bg-red-600",children:"清空日志"})]})]})}),e.jsx("div",{className:"space-y-2 mb-4",children:e.jsxs("div",{className:"flex gap-2 flex-wrap",children:[e.jsx("button",{onClick:n,className:"px-3 py-1 bg-blue-500 text-white rounded hover:bg-blue-600 text-sm",children:"+1"}),e.jsx("button",{onClick:c,className:"px-3 py-1 bg-red-500 text-white rounded hover:bg-red-600 text-sm",children:"-1"}),e.jsx("button",{onClick:d,className:"px-3 py-1 bg-green-500 text-white rounded hover:bg-green-600 text-sm",children:"+步长"}),e.jsx("button",{onClick:m,className:"px-3 py-1 bg-orange-500 text-white rounded hover:bg-orange-600 text-sm",children:"-步长"}),e.jsx("button",{onClick:()=>l(Math.floor(Math.random()*5)+1),className:"px-3 py-1 bg-purple-500 text-white rounded hover:bg-purple-600 text-sm",children:"随机步长"}),e.jsx("button",{onClick:r,className:"px-3 py-1 bg-gray-500 text-white rounded hover:bg-gray-600 text-sm",children:"重置"})]})}),e.jsxs("div",{className:"bg-white p-3 rounded border",children:[e.jsx("div",{className:"text-sm text-gray-600 mb-2",children:"操作日志"}),e.jsx("div",{className:"max-h-40 overflow-y-auto",children:x.length===0?e.jsx("div",{className:"text-gray-500 text-sm",children:"暂无操作记录"}):e.jsx("div",{className:"space-y-1",children:x.slice(-10).reverse().map((i,S)=>e.jsxs("div",{className:"flex justify-between items-center text-xs bg-gray-50 p-2 rounded",children:[e.jsx("span",{className:"font-medium text-gray-700",children:i.action}),e.jsxs("span",{className:"text-gray-500",children:["计数: ",i.count]}),e.jsx("span",{className:"text-gray-400",children:f(i.timestamp)})]},S))})})]})]})})},R=()=>{const s=o(g),t=o(k),a=o(h),{increment:n,decrement:c,incrementByStep:d,decrementByStep:m,setStep:l,reset:r}=o();return e.jsx("div",{className:"space-y-4",children:e.jsxs("div",{className:"p-4 bg-blue-50 border border-blue-200 rounded-lg",children:[e.jsx("h3",{className:"text-lg font-semibold text-blue-800 mb-2",children:"基础 DevTools 集成演示"}),e.jsx("p",{className:"text-blue-700 text-sm mb-4",children:"打开浏览器开发者工具，切换到 Redux 标签页，观察状态变化和时间旅行功能。"}),e.jsxs("div",{className:"grid grid-cols-2 gap-4 mb-4",children:[e.jsxs("div",{className:"bg-white p-3 rounded border",children:[e.jsx("div",{className:"text-sm text-gray-600",children:"当前计数"}),e.jsx("div",{className:"text-2xl font-bold text-blue-600",children:s})]}),e.jsxs("div",{className:"bg-white p-3 rounded border",children:[e.jsx("div",{className:"text-sm text-gray-600",children:"步长"}),e.jsx("div",{className:"text-2xl font-bold text-green-600",children:t})]})]}),e.jsxs("div",{className:"bg-white p-3 rounded border mb-4",children:[e.jsx("div",{className:"text-sm text-gray-600",children:"最后操作"}),e.jsx("div",{className:"text-lg font-medium text-purple-600",children:a})]}),e.jsxs("div",{className:"space-y-2",children:[e.jsxs("div",{className:"flex gap-2 flex-wrap",children:[e.jsx("button",{onClick:n,className:"px-3 py-1 bg-blue-500 text-white rounded hover:bg-blue-600 text-sm",children:"+1"}),e.jsx("button",{onClick:c,className:"px-3 py-1 bg-red-500 text-white rounded hover:bg-red-600 text-sm",children:"-1"}),e.jsxs("button",{onClick:d,className:"px-3 py-1 bg-green-500 text-white rounded hover:bg-green-600 text-sm",children:["+",t]}),e.jsxs("button",{onClick:m,className:"px-3 py-1 bg-orange-500 text-white rounded hover:bg-orange-600 text-sm",children:["-",t]}),e.jsx("button",{onClick:r,className:"px-3 py-1 bg-gray-500 text-white rounded hover:bg-gray-600 text-sm",children:"重置"})]}),e.jsxs("div",{className:"flex gap-2 items-center",children:[e.jsx("label",{className:"text-sm text-gray-600",children:"步长:"}),e.jsx("input",{type:"number",value:t,onChange:x=>l(Number(x.target.value)),className:"w-20 px-2 py-1 border rounded text-sm",min:"1",max:"10"})]})]})]})})},H=()=>{const s=o(g),t=o(A),a=o(h),{timeTravel:n,increment:c,decrement:d,reset:m}=o();return e.jsx("div",{className:"space-y-4",children:e.jsxs("div",{className:"p-4 bg-purple-50 border border-purple-200 rounded-lg",children:[e.jsx("h3",{className:"text-lg font-semibold text-purple-800 mb-2",children:"时间旅行演示"}),e.jsx("p",{className:"text-purple-700 text-sm mb-4",children:"在 DevTools 中点击任意历史状态，或使用下方按钮进行时间旅行。"}),e.jsxs("div",{className:"grid grid-cols-2 gap-4 mb-4",children:[e.jsxs("div",{className:"bg-white p-3 rounded border",children:[e.jsx("div",{className:"text-sm text-gray-600",children:"当前计数"}),e.jsx("div",{className:"text-2xl font-bold text-purple-600",children:s})]}),e.jsxs("div",{className:"bg-white p-3 rounded border",children:[e.jsx("div",{className:"text-sm text-gray-600",children:"历史长度"}),e.jsx("div",{className:"text-2xl font-bold text-indigo-600",children:t.length})]})]}),e.jsxs("div",{className:"bg-white p-3 rounded border mb-4",children:[e.jsx("div",{className:"text-sm text-gray-600",children:"最后操作"}),e.jsx("div",{className:"text-lg font-medium text-purple-600",children:a})]}),e.jsxs("div",{className:"bg-white p-3 rounded border mb-4",children:[e.jsx("div",{className:"text-sm text-gray-600 mb-2",children:"历史记录"}),e.jsx("div",{className:"max-h-32 overflow-y-auto",children:e.jsx("div",{className:"flex flex-wrap gap-1",children:t.map((l,r)=>e.jsx("button",{onClick:()=>n(r),className:`px-2 py-1 text-xs rounded ${r===t.length-1?"bg-purple-500 text-white":"bg-gray-200 text-gray-700 hover:bg-gray-300"}`,title:`回到第 ${r+1} 步: ${l}`,children:l},r))})})]}),e.jsxs("div",{className:"space-y-2",children:[e.jsxs("div",{className:"flex gap-2 flex-wrap",children:[e.jsx("button",{onClick:c,className:"px-3 py-1 bg-blue-500 text-white rounded hover:bg-blue-600 text-sm",children:"+1"}),e.jsx("button",{onClick:d,className:"px-3 py-1 bg-red-500 text-white rounded hover:bg-red-600 text-sm",children:"-1"}),e.jsx("button",{onClick:m,className:"px-3 py-1 bg-gray-500 text-white rounded hover:bg-gray-600 text-sm",children:"重置"})]}),e.jsx("div",{className:"text-xs text-gray-500",children:"提示：在 Redux DevTools 中点击任意历史状态可以回到该时刻"})]})]})})},P=`import React, { useState, useEffect } from 'react';
import { useDevtoolsStore, selectCount, selectLastAction, selectTimestamp } from '../stores/devtoolsStore';

interface ActionLog {
  action: string;
  timestamp: number;
  count: number;
}

const ActionTrackingDemo: React.FC = () => {
  const count = useDevtoolsStore(selectCount);
  const lastAction = useDevtoolsStore(selectLastAction);
  const timestamp = useDevtoolsStore(selectTimestamp);
  
  const { increment, decrement, incrementByStep, decrementByStep, setStep, reset } = useDevtoolsStore();
  
  const [actionLog, setActionLog] = useState<ActionLog[]>([]);
  const [isTracking, setIsTracking] = useState(true);

  // 监听状态变化，记录操作日志
  useEffect(() => {
    if (isTracking && lastAction !== 'init') {
      setActionLog(prev => [
        ...prev,
        {
          action: lastAction,
          timestamp,
          count,
        }
      ]);
    }
  }, [lastAction, timestamp, count, isTracking]);

  const clearLog = () => {
    setActionLog([]);
  };

  const formatTime = (timestamp: number) => {
    return new Date(timestamp).toLocaleTimeString();
  };

  return (
    <div className="space-y-4">
      <div className="p-4 bg-green-50 border border-green-200 rounded-lg">
        <h3 className="text-lg font-semibold text-green-800 mb-2">
          操作追踪演示
        </h3>
        <p className="text-green-700 text-sm mb-4">
          观察每个操作在 DevTools 中的记录，以及本地操作日志的同步。
        </p>
        
        <div className="grid grid-cols-3 gap-4 mb-4">
          <div className="bg-white p-3 rounded border">
            <div className="text-sm text-gray-600">当前计数</div>
            <div className="text-2xl font-bold text-green-600">{count}</div>
          </div>
          <div className="bg-white p-3 rounded border">
            <div className="text-sm text-gray-600">最后操作</div>
            <div className="text-lg font-medium text-green-600">{lastAction}</div>
          </div>
          <div className="bg-white p-3 rounded border">
            <div className="text-sm text-gray-600">操作次数</div>
            <div className="text-2xl font-bold text-blue-600">{actionLog.length}</div>
          </div>
        </div>

        {/* 控制面板 */}
        <div className="bg-white p-3 rounded border mb-4">
          <div className="flex items-center justify-between mb-2">
            <span className="text-sm text-gray-600">操作追踪</span>
            <div className="flex gap-2">
              <button
                onClick={() => setIsTracking(!isTracking)}
                className={\`px-3 py-1 text-xs rounded \${
                  isTracking 
                    ? 'bg-green-500 text-white' 
                    : 'bg-gray-300 text-gray-700'
                }\`}
              >
                {isTracking ? '追踪中' : '已暂停'}
              </button>
              <button
                onClick={clearLog}
                className="px-3 py-1 bg-red-500 text-white text-xs rounded hover:bg-red-600"
              >
                清空日志
              </button>
            </div>
          </div>
        </div>

        {/* 操作按钮 */}
        <div className="space-y-2 mb-4">
          <div className="flex gap-2 flex-wrap">
            <button
              onClick={increment}
              className="px-3 py-1 bg-blue-500 text-white rounded hover:bg-blue-600 text-sm"
            >
              +1
            </button>
            <button
              onClick={decrement}
              className="px-3 py-1 bg-red-500 text-white rounded hover:bg-red-600 text-sm"
            >
              -1
            </button>
            <button
              onClick={incrementByStep}
              className="px-3 py-1 bg-green-500 text-white rounded hover:bg-green-600 text-sm"
            >
              +步长
            </button>
            <button
              onClick={decrementByStep}
              className="px-3 py-1 bg-orange-500 text-white rounded hover:bg-orange-600 text-sm"
            >
              -步长
            </button>
            <button
              onClick={() => setStep(Math.floor(Math.random() * 5) + 1)}
              className="px-3 py-1 bg-purple-500 text-white rounded hover:bg-purple-600 text-sm"
            >
              随机步长
            </button>
            <button
              onClick={reset}
              className="px-3 py-1 bg-gray-500 text-white rounded hover:bg-gray-600 text-sm"
            >
              重置
            </button>
          </div>
        </div>

        {/* 操作日志 */}
        <div className="bg-white p-3 rounded border">
          <div className="text-sm text-gray-600 mb-2">操作日志</div>
          <div className="max-h-40 overflow-y-auto">
            {actionLog.length === 0 ? (
              <div className="text-gray-500 text-sm">暂无操作记录</div>
            ) : (
              <div className="space-y-1">
                {actionLog.slice(-10).reverse().map((log, index) => (
                  <div key={index} className="flex justify-between items-center text-xs bg-gray-50 p-2 rounded">
                    <span className="font-medium text-gray-700">{log.action}</span>
                    <span className="text-gray-500">计数: {log.count}</span>
                    <span className="text-gray-400">{formatTime(log.timestamp)}</span>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ActionTrackingDemo;
`,E=`import React from 'react';
import { useDevtoolsStore, selectCount, selectStep, selectLastAction } from '../stores/devtoolsStore';

const BasicDevtoolsDemo: React.FC = () => {
  const count = useDevtoolsStore(selectCount);
  const step = useDevtoolsStore(selectStep);
  const lastAction = useDevtoolsStore(selectLastAction);
  
  const {
    increment,
    decrement,
    incrementByStep,
    decrementByStep,
    setStep,
    reset,
  } = useDevtoolsStore();

  return (
    <div className="space-y-4">
      <div className="p-4 bg-blue-50 border border-blue-200 rounded-lg">
        <h3 className="text-lg font-semibold text-blue-800 mb-2">
          基础 DevTools 集成演示
        </h3>
        <p className="text-blue-700 text-sm mb-4">
          打开浏览器开发者工具，切换到 Redux 标签页，观察状态变化和时间旅行功能。
        </p>
        
        <div className="grid grid-cols-2 gap-4 mb-4">
          <div className="bg-white p-3 rounded border">
            <div className="text-sm text-gray-600">当前计数</div>
            <div className="text-2xl font-bold text-blue-600">{count}</div>
          </div>
          <div className="bg-white p-3 rounded border">
            <div className="text-sm text-gray-600">步长</div>
            <div className="text-2xl font-bold text-green-600">{step}</div>
          </div>
        </div>

        <div className="bg-white p-3 rounded border mb-4">
          <div className="text-sm text-gray-600">最后操作</div>
          <div className="text-lg font-medium text-purple-600">{lastAction}</div>
        </div>

        <div className="space-y-2">
          <div className="flex gap-2 flex-wrap">
            <button
              onClick={increment}
              className="px-3 py-1 bg-blue-500 text-white rounded hover:bg-blue-600 text-sm"
            >
              +1
            </button>
            <button
              onClick={decrement}
              className="px-3 py-1 bg-red-500 text-white rounded hover:bg-red-600 text-sm"
            >
              -1
            </button>
            <button
              onClick={incrementByStep}
              className="px-3 py-1 bg-green-500 text-white rounded hover:bg-green-600 text-sm"
            >
              +{step}
            </button>
            <button
              onClick={decrementByStep}
              className="px-3 py-1 bg-orange-500 text-white rounded hover:bg-orange-600 text-sm"
            >
              -{step}
            </button>
            <button
              onClick={reset}
              className="px-3 py-1 bg-gray-500 text-white rounded hover:bg-gray-600 text-sm"
            >
              重置
            </button>
          </div>
          
          <div className="flex gap-2 items-center">
            <label className="text-sm text-gray-600">步长:</label>
            <input
              type="number"
              value={step}
              onChange={(e) => setStep(Number(e.target.value))}
              className="w-20 px-2 py-1 border rounded text-sm"
              min="1"
              max="10"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default BasicDevtoolsDemo;
`,v=`import { create } from 'zustand';
import { devtools } from 'zustand/middleware';
import type { DevtoolsCounterState, DevtoolsStore } from '../types';

// 初始状态
const initialState: DevtoolsCounterState = {
  count: 0,
  step: 1,
  history: [0],
  lastAction: 'init',
  timestamp: Date.now(),
};

// 创建带 DevTools 集成的 store
export const useDevtoolsStore = create<DevtoolsStore>()(
  devtools(
    (set) => ({
      ...initialState,

      // 基础操作
      increment: () =>
        set(
          (state) => ({
            count: state.count + 1,
            history: [...state.history, state.count + 1],
            lastAction: 'increment',
            timestamp: Date.now(),
          }),
          false,
          'increment'
        ),

      decrement: () =>
        set(
          (state) => ({
            count: state.count - 1,
            history: [...state.history, state.count - 1],
            lastAction: 'decrement',
            timestamp: Date.now(),
          }),
          false,
          'decrement'
        ),

      // 按步长操作
      incrementByStep: () =>
        set(
          (state) => ({
            count: state.count + state.step,
            history: [...state.history, state.count + state.step],
            lastAction: 'incrementByStep',
            timestamp: Date.now(),
          }),
          false,
          'incrementByStep'
        ),

      decrementByStep: () =>
        set(
          (state) => ({
            count: state.count - state.step,
            history: [...state.history, state.count - state.step],
            lastAction: 'decrementByStep',
            timestamp: Date.now(),
          }),
          false,
          'decrementByStep'
        ),

      // 设置步长
      setStep: (step: number) =>
        set(
          { step, lastAction: 'setStep', timestamp: Date.now() },
          false,
          'setStep'
        ),

      // 重置
      reset: () =>
        set(
          {
            ...initialState,
            timestamp: Date.now(),
          },
          false,
          'reset'
        ),

      // 时间旅行
      timeTravel: (index: number) =>
        set(
          (state) => {
            const newHistory = state.history.slice(0, index + 1);
            return {
              count: newHistory[newHistory.length - 1],
              history: newHistory,
              lastAction: 'timeTravel',
              timestamp: Date.now(),
            };
          },
          false,
          'timeTravel'
        ),
    }),
    {
      name: 'DevtoolsCounterStore', // DevTools 中显示的名称
    }
  )
);

// 选择器
export const selectCount: (state: DevtoolsStore) => number = (state) => state.count;
export const selectStep: (state: DevtoolsStore) => number = (state) => state.step;
export const selectHistory: (state: DevtoolsStore) => number[] = (state) => state.history;
export const selectLastAction: (state: DevtoolsStore) => string = (state) => state.lastAction;
export const selectTimestamp: (state: DevtoolsStore) => number = (state) => state.timestamp;
`,$=`import React from 'react';
import { useDevtoolsStore, selectCount, selectHistory, selectLastAction } from '../stores/devtoolsStore';

const TimeTravelDemo: React.FC = () => {
  const count = useDevtoolsStore(selectCount);
  const history = useDevtoolsStore(selectHistory);
  const lastAction = useDevtoolsStore(selectLastAction);
  
  const { timeTravel, increment, decrement, reset } = useDevtoolsStore();

  return (
    <div className="space-y-4">
      <div className="p-4 bg-purple-50 border border-purple-200 rounded-lg">
        <h3 className="text-lg font-semibold text-purple-800 mb-2">
          时间旅行演示
        </h3>
        <p className="text-purple-700 text-sm mb-4">
          在 DevTools 中点击任意历史状态，或使用下方按钮进行时间旅行。
        </p>
        
        <div className="grid grid-cols-2 gap-4 mb-4">
          <div className="bg-white p-3 rounded border">
            <div className="text-sm text-gray-600">当前计数</div>
            <div className="text-2xl font-bold text-purple-600">{count}</div>
          </div>
          <div className="bg-white p-3 rounded border">
            <div className="text-sm text-gray-600">历史长度</div>
            <div className="text-2xl font-bold text-indigo-600">{history.length}</div>
          </div>
        </div>

        <div className="bg-white p-3 rounded border mb-4">
          <div className="text-sm text-gray-600">最后操作</div>
          <div className="text-lg font-medium text-purple-600">{lastAction}</div>
        </div>

        {/* 历史记录 */}
        <div className="bg-white p-3 rounded border mb-4">
          <div className="text-sm text-gray-600 mb-2">历史记录</div>
          <div className="max-h-32 overflow-y-auto">
            <div className="flex flex-wrap gap-1">
              {history.map((value, index) => (
                <button
                  key={index}
                  onClick={() => timeTravel(index)}
                  className={\`px-2 py-1 text-xs rounded \${
                    index === history.length - 1
                      ? 'bg-purple-500 text-white'
                      : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
                  }\`}
                  title={\`回到第 \${index + 1} 步: \${value}\`}
                >
                  {value}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* 操作按钮 */}
        <div className="space-y-2">
          <div className="flex gap-2 flex-wrap">
            <button
              onClick={increment}
              className="px-3 py-1 bg-blue-500 text-white rounded hover:bg-blue-600 text-sm"
            >
              +1
            </button>
            <button
              onClick={decrement}
              className="px-3 py-1 bg-red-500 text-white rounded hover:bg-red-600 text-sm"
            >
              -1
            </button>
            <button
              onClick={reset}
              className="px-3 py-1 bg-gray-500 text-white rounded hover:bg-gray-600 text-sm"
            >
              重置
            </button>
          </div>
          
          <div className="text-xs text-gray-500">
            提示：在 Redux DevTools 中点击任意历史状态可以回到该时刻
          </div>
        </div>
      </div>
    </div>
  );
};

export default TimeTravelDemo;
`,b=`// DevTools 集成演示的类型定义

export interface DevtoolsCounterState {
  count: number;
  step: number;
  history: number[];
  lastAction: string;
  timestamp: number;
}

export interface DevtoolsActions {
  increment: () => void;
  decrement: () => void;
  incrementByStep: () => void;
  decrementByStep: () => void;
  setStep: (step: number) => void;
  reset: () => void;
  timeTravel: (index: number) => void;
}

// 选择器类型
export type NumberSelector = (state: DevtoolsCounterState) => number;
export type StringSelector = (state: DevtoolsCounterState) => string;
export type NumberArraySelector = (state: DevtoolsCounterState) => number[];

// 组合状态类型
export type DevtoolsStore = DevtoolsCounterState & DevtoolsActions;
`,M=()=>e.jsx(C,{title:"DevTools 集成",description:"演示 Zustand 与 Redux DevTools 的深度集成，包括状态可视化、时间旅行、操作追踪等调试功能，提升开发体验。",overview:[{title:"核心概念",items:["使用 zustand/middleware 的 devtools 中间件","为每个 action 提供有意义的名称便于调试","支持时间旅行功能，可回溯任意历史状态","状态变化可视化，便于理解数据流","操作历史记录与性能分析","与 Redux DevTools 扩展无缝集成","支持多 store 实例的独立调试"]},{title:"主要优势",items:["强大的调试能力，快速定位状态问题","时间旅行让复杂 bug 复现变得简单","可视化状态变化，提升开发效率","与现有 Redux 生态工具兼容","支持热重载与状态持久化调试","团队协作中便于问题沟通与复现"]},{title:"适用场景",items:["复杂状态逻辑的调试与优化","团队开发中的问题排查","状态管理性能分析与优化","用户行为复现与问题定位","新功能开发中的状态验证","生产环境问题的本地复现"]},{title:"注意事项",items:["仅在开发环境启用，避免生产环境性能影响","为 action 提供清晰的命名规范","注意状态序列化，避免循环引用","大型应用考虑状态分片避免 DevTools 卡顿","敏感数据需要脱敏处理"]}],examples:[{title:"基础 DevTools 集成",component:e.jsx(R,{}),description:"展示基本的 DevTools 集成，观察状态变化和操作记录。",observationPoints:["打开浏览器 DevTools，切换到 Redux 标签页","每次操作都会在 DevTools 中显示对应的 action","状态变化实时反映在 DevTools 中","可以查看完整的操作历史记录","支持 action 的展开与折叠查看"],keyPoints:["使用 devtools 中间件包装 store","为每个 action 提供有意义的名称","状态变化自动同步到 DevTools","支持 action 的详细参数查看","便于理解状态更新的完整流程"],commonTraps:["忘记为 action 提供名称，导致调试困难","在生产环境启用 DevTools 影响性能","状态包含不可序列化的数据","action 名称过于简单或重复"],solutions:["统一 action 命名规范，使用动词+名词格式","使用环境变量控制 DevTools 启用","确保状态数据可序列化，避免函数或循环引用","为复杂 action 提供详细的参数说明"],preCode:[{title:"类型定义",code:b},{title:"Store 定义",code:v}],codeExample:{title:"基础演示组件",code:E}},{title:"时间旅行功能",component:e.jsx(H,{}),description:"演示时间旅行功能，可以回溯到任意历史状态。",observationPoints:["在 DevTools 中点击任意历史状态可以回到该时刻","历史记录按钮可以直接进行时间旅行","时间旅行后可以继续正常操作","历史记录会显示每个状态的详细信息","支持前进和后退操作"],keyPoints:["时间旅行让复杂 bug 复现变得简单","可以观察状态变化的完整时间线","支持任意时刻的状态回溯","便于理解状态变化的因果关系","提高调试效率和问题定位准确性"],commonTraps:["时间旅行后忘记当前状态已改变","历史记录过多导致 DevTools 性能问题","时间旅行操作本身也会产生新的 action","复杂状态的时间旅行可能产生副作用"],solutions:["在时间旅行后明确当前状态位置","合理控制历史记录数量，必要时清理","区分时间旅行操作和正常业务操作","确保时间旅行操作的可逆性"],preCode:[{title:"类型定义",code:b},{title:"Store 定义",code:v}],codeExample:{title:"时间旅行演示组件",code:$}},{title:"操作追踪与分析",component:e.jsx(L,{}),description:"展示操作追踪功能，分析用户行为和状态变化模式。",observationPoints:["每个操作都会记录详细的时间戳和参数","可以暂停和恢复操作追踪","操作日志与 DevTools 记录保持同步","支持操作日志的清理和导出","可以分析操作频率和模式"],keyPoints:["操作追踪帮助理解用户行为模式","时间戳记录便于性能分析","支持操作日志的灵活管理","便于复现和调试复杂问题","为产品优化提供数据支持"],commonTraps:["操作日志过多导致内存占用过大","敏感操作信息泄露到日志中","追踪功能影响正常业务性能","日志格式不统一难以分析"],solutions:["设置合理的日志保留策略","对敏感信息进行脱敏处理","使用异步日志记录避免阻塞","统一日志格式便于后续分析"],preCode:[{title:"类型定义",code:b},{title:"Store 定义",code:v}],codeExample:{title:"操作追踪演示组件",code:P}}],tutorial:{concepts:["DevTools 中间件集成与配置","Action 命名规范与调试友好性","时间旅行功能的实现与使用","状态序列化与性能考虑","多环境下的 DevTools 管理"],steps:["安装 Redux DevTools 浏览器扩展","使用 devtools 中间件包装 store","为每个 action 提供清晰的名称","配置 store 名称便于多实例区分","在开发环境启用，生产环境禁用","使用时间旅行功能调试复杂问题"],tips:["为 action 使用动词+名词的命名规范","复杂 action 可以包含更多调试信息","使用环境变量控制 DevTools 启用状态","定期清理历史记录避免性能问题","为敏感数据添加脱敏处理","利用 DevTools 的性能分析功能"]},interview:{questions:[{question:"如何在 Zustand 中集成 Redux DevTools？",answer:"使用 zustand/middleware 的 devtools 中间件包装 store，为每个 action 提供名称，配置 store 名称便于区分。"},{question:"时间旅行功能有什么实际价值？",answer:"可以回溯到任意历史状态，便于复现复杂 bug，理解状态变化的时间线，提高调试效率。"},{question:"DevTools 集成需要注意哪些性能问题？",answer:"仅在开发环境启用，避免生产环境性能影响；控制历史记录数量；确保状态数据可序列化。"},{question:"如何为 action 设计好的命名规范？",answer:"使用动词+名词格式，如 'increment'、'setUser'、'updateProfile'，避免过于简单或重复的名称。"}],keyPoints:["DevTools 中间件配置与 action 命名","时间旅行功能的实现与使用场景","性能考虑与环境管理","调试友好的状态设计"]},bestPractices:{dos:["为每个 action 提供清晰的命名","使用环境变量控制 DevTools 启用","确保状态数据可序列化","合理控制历史记录数量","为复杂 action 提供详细参数","利用 DevTools 进行性能分析"],donts:["不要在生产环境启用 DevTools","不要使用不可序列化的状态数据","不要忽略 action 命名的重要性","不要让历史记录无限增长"],patterns:["DevTools 中间件 + 清晰 action 命名","环境变量控制 + 性能优化","时间旅行 + 操作追踪","状态序列化 + 调试友好设计"]}});export{M as default};
