import{r as s,j as e}from"./index-CKH9Ek1I.js";import{C as L}from"./ComponentTemplate-B8dTsNLj.js";const S=()=>{const[a,r]=s.useState(0),[o,b]=s.useState(()=>Array.from({length:1e3},(t,n)=>n)),[u,l]=s.useState([]),[c,v]=s.useState(0),g=s.useRef(0);g.current+=1;const x=t=>{const n=new Date().toLocaleTimeString();l(d=>[...d.slice(-9),`${n}: ${t}`])},m=()=>{console.log("🔴 执行昂贵计算 (无优化) - 每次渲染都执行");let n=0;for(let d=0;d<1e5;d++)n+=Math.random();return n},h=s.useMemo(()=>{console.log("🟢 执行昂贵计算 (使用 useMemo) - 只在依赖项变化时执行");let n=0;for(let d=0;d<1e5;d++)n+=Math.random();return v(d=>d+1),n},[o.length]);s.useEffect(()=>{c>0&&x("🟢 执行昂贵计算 (使用 useMemo) - 只在依赖项变化时执行")},[c]);const N=()=>{x("🔴 点击无优化按钮 - 每次渲染都创建新函数"),r(t=>t+1)},y=s.useCallback(()=>{x("🟢 点击优化按钮 - 函数被缓存，引用不变"),r(t=>t+1)},[]),i=()=>{x("📈 添加100项 - 这会触发 useMemo 重新计算"),b(t=>[...t,...Array.from({length:100},(n,d)=>t.length+d)])},p=()=>{x("📉 移除100项 - 这会触发 useMemo 重新计算"),b(t=>t.slice(0,-100))},f=()=>{l([])},C=()=>{r(0),b(Array.from({length:1e3},(t,n)=>n)),l([]),x("🔄 重置所有数据")};return e.jsxs("div",{className:"p-6 bg-white rounded-lg border border-gray-200",children:[e.jsxs("div",{className:"flex items-center justify-between mb-4",children:[e.jsx("h3",{className:"text-lg font-semibold text-gray-800",children:"性能对比演示"}),e.jsxs("div",{className:"flex space-x-2",children:[e.jsx("button",{onClick:f,className:"px-3 py-1 bg-gray-500 text-white rounded text-sm hover:bg-gray-600 transition-colors",children:"清空日志"}),e.jsx("button",{onClick:C,className:"px-3 py-1 bg-purple-500 text-white rounded text-sm hover:bg-purple-600 transition-colors",children:"重置所有"})]})]}),e.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-3 gap-4 mb-6",children:[e.jsxs("div",{className:"text-center p-3 bg-blue-50 rounded",children:[e.jsx("div",{className:"text-2xl font-bold text-blue-600 mb-1",children:a}),e.jsx("div",{className:"text-sm text-gray-500",children:"计数值"})]}),e.jsxs("div",{className:"text-center p-3 bg-green-50 rounded",children:[e.jsx("div",{className:"text-2xl font-bold text-green-600 mb-1",children:o.length}),e.jsx("div",{className:"text-sm text-gray-500",children:"数组长度"})]}),e.jsxs("div",{className:"text-center p-3 bg-purple-50 rounded",children:[e.jsx("div",{className:"text-2xl font-bold text-purple-600 mb-1",children:g.current}),e.jsx("div",{className:"text-sm text-gray-500",children:"渲染次数"})]})]}),e.jsxs("div",{className:"mb-6 p-4 bg-blue-50 rounded border border-blue-200",children:[e.jsx("h4",{className:"font-semibold text-blue-800 mb-2",children:"📋 操作指南"}),e.jsxs("div",{className:"text-sm text-blue-700 space-y-1",children:[e.jsxs("p",{children:["• ",e.jsx("strong",{children:"点击计数按钮"}),"：观察哪个计算会重新执行（查看日志）"]}),e.jsxs("p",{children:["• ",e.jsx("strong",{children:"添加/移除项"}),"：改变数组长度，触发 useMemo 重新计算"]}),e.jsxs("p",{children:["• ",e.jsx("strong",{children:"查看日志"}),"：实时显示每个操作和计算的执行情况"]})]})]}),e.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-6 mb-6",children:[e.jsxs("div",{className:"p-4 bg-red-50 rounded border border-red-200",children:[e.jsx("h4",{className:"font-semibold text-red-800 mb-3",children:"🔴 没有优化"}),e.jsxs("div",{className:"space-y-3",children:[e.jsxs("div",{className:"p-2 bg-white rounded border",children:[e.jsx("p",{className:"text-xs text-gray-600 mb-1",children:"计算结果 (每次渲染都执行):"}),e.jsx("p",{className:"text-lg font-mono text-red-700",children:m().toFixed(2)})]}),e.jsx("button",{onClick:N,className:"w-full px-3 py-2 bg-red-500 text-white rounded hover:bg-red-600 transition-colors font-medium",children:"增加计数 (无优化)"}),e.jsx("p",{className:"text-xs text-red-600 bg-red-100 p-2 rounded",children:"⚠️ 每次渲染都会执行昂贵计算和创建新函数"})]})]}),e.jsxs("div",{className:"p-4 bg-green-50 rounded border border-green-200",children:[e.jsx("h4",{className:"font-semibold text-green-800 mb-3",children:"🟢 使用优化"}),e.jsxs("div",{className:"space-y-3",children:[e.jsxs("div",{className:"p-2 bg-white rounded border",children:[e.jsx("p",{className:"text-xs text-gray-600 mb-1",children:"计算结果 (缓存，按需计算):"}),e.jsx("p",{className:"text-lg font-mono text-green-700",children:h.toFixed(2)})]}),e.jsx("button",{onClick:y,className:"w-full px-3 py-2 bg-green-500 text-white rounded hover:bg-green-600 transition-colors font-medium",children:"增加计数 (使用优化)"}),e.jsx("p",{className:"text-xs text-green-600 bg-green-100 p-2 rounded",children:"✅ 只有依赖项变化时才重新计算，函数被缓存"})]})]})]}),e.jsxs("div",{className:"flex justify-center space-x-3 mb-6",children:[e.jsx("button",{onClick:i,className:"px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition-colors font-medium",children:"📈 添加100项 (触发 useMemo)"}),e.jsx("button",{onClick:p,disabled:o.length===0,className:`px-4 py-2 rounded transition-colors font-medium ${o.length===0?"bg-gray-300 text-gray-500 cursor-not-allowed":"bg-orange-500 text-white hover:bg-orange-600"}`,children:"📉 移除100项 (触发 useMemo)"})]}),e.jsxs("div",{className:"bg-gray-900 rounded-lg p-4 mb-4",children:[e.jsxs("div",{className:"flex items-center justify-between mb-2",children:[e.jsx("h4",{className:"font-semibold text-green-400",children:"🖥️ 实时执行日志"}),e.jsx("span",{className:"text-xs text-gray-400",children:"最近10条记录"})]}),e.jsx("div",{className:"h-48 overflow-y-auto bg-black rounded p-2",children:u.length===0?e.jsx("p",{className:"text-gray-500 text-sm font-mono",children:"等待操作..."}):e.jsx("div",{className:"space-y-1",children:u.map((t,n)=>e.jsx("div",{className:"text-sm font-mono text-green-300",children:t},n))})})]}),e.jsxs("div",{className:"p-4 bg-yellow-50 rounded border border-yellow-200",children:[e.jsx("h4",{className:"font-semibold text-yellow-800 mb-2",children:"🎯 观察重点"}),e.jsxs("div",{className:"text-sm text-yellow-700 space-y-1",children:[e.jsxs("p",{children:["• ",e.jsx("strong",{children:"点击计数按钮"}),"：无优化版本每次都执行计算，优化版本使用缓存"]}),e.jsxs("p",{children:["• ",e.jsx("strong",{children:"添加/移除项"}),"：只有这时优化版本才会重新计算（依赖项变化）"]}),e.jsxs("p",{children:["• ",e.jsx("strong",{children:"查看控制台"}),"：同时在浏览器控制台查看详细日志"]})]})]})]})},R=`import React, { useCallback, useMemo, useState, useRef, useEffect } from 'react';

// 对比演示 - 展示使用和不使用优化的区别
const ComparisonDemo: React.FC = () => {
  const [count, setCount] = useState(0);
  const [items, setItems] = useState(() =>
    Array.from({ length: 1000 }, (_, i) => i)
  );
  const [logs, setLogs] = useState<string[]>([]);
  const [memoCalculationTrigger, setMemoCalculationTrigger] = useState(0);

  // 每次渲染增加计数
  const renderCountRef = useRef(0);
  renderCountRef.current += 1;

  // 添加日志的辅助函数
  const addLog = (message: string) => {
    const timestamp = new Date().toLocaleTimeString();
    setLogs((prev) => [...prev.slice(-9), \`\${timestamp}: \${message}\`]);
  };

  // 没有优化的昂贵计算 - 每次渲染都会执行
  const expensiveCalculationWithout = () => {
    const message = "🔴 执行昂贵计算 (无优化) - 每次渲染都执行";
    console.log(message);
    // 注意：这里不能调用 addLog，因为会导致状态更新和无限循环
    let result = 0;
    for (let i = 0; i < 100000; i++) {
      result += Math.random();
    }
    return result;
  };

  // 使用 useMemo 优化的计算 - 只有依赖项变化时才执行
  const expensiveCalculationWith = useMemo(() => {
    const message = "🟢 执行昂贵计算 (使用 useMemo) - 只在依赖项变化时执行";
    console.log(message);
    let result = 0;
    for (let i = 0; i < 100000; i++) {
      result += Math.random();
    }
    // 触发日志更新
    setMemoCalculationTrigger((prev) => prev + 1);
    return result;
  }, [items.length]); // 只有当 items 长度变化时才重新计算

  // 使用 useEffect 来处理 useMemo 的日志记录
  useEffect(() => {
    if (memoCalculationTrigger > 0) {
      addLog("🟢 执行昂贵计算 (使用 useMemo) - 只在依赖项变化时执行");
    }
  }, [memoCalculationTrigger]);

  // 没有优化的回调函数 - 每次渲染都创建新函数
  const handleClickWithout = () => {
    addLog("🔴 点击无优化按钮 - 每次渲染都创建新函数");
    setCount((prev) => prev + 1);
  };

  // 使用 useCallback 优化的回调函数
  const handleClickWith = useCallback(() => {
    addLog("🟢 点击优化按钮 - 函数被缓存，引用不变");
    setCount((prev) => prev + 1);
  }, []);

  const addItems = () => {
    addLog("📈 添加100项 - 这会触发 useMemo 重新计算");
    setItems((prev) => [
      ...prev,
      ...Array.from({ length: 100 }, (_, i) => prev.length + i),
    ]);
  };

  const removeItems = () => {
    addLog("📉 移除100项 - 这会触发 useMemo 重新计算");
    setItems((prev) => prev.slice(0, -100));
  };

  const clearLogs = () => {
    setLogs([]);
  };

  const resetAll = () => {
    setCount(0);
    setItems(Array.from({ length: 1000 }, (_, i) => i));
    setLogs([]);
    addLog("🔄 重置所有数据");
  };

  return (
    <div className="p-6 bg-white rounded-lg border border-gray-200">
      <div className="flex items-center justify-between mb-4">
        <h3 className="text-lg font-semibold text-gray-800">性能对比演示</h3>
        <div className="flex space-x-2">
          <button
            onClick={clearLogs}
            className="px-3 py-1 bg-gray-500 text-white rounded text-sm hover:bg-gray-600 transition-colors"
          >
            清空日志
          </button>
          <button
            onClick={resetAll}
            className="px-3 py-1 bg-purple-500 text-white rounded text-sm hover:bg-purple-600 transition-colors"
          >
            重置所有
          </button>
        </div>
      </div>

      {/* 状态显示 */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
        <div className="text-center p-3 bg-blue-50 rounded">
          <div className="text-2xl font-bold text-blue-600 mb-1">{count}</div>
          <div className="text-sm text-gray-500">计数值</div>
        </div>
        <div className="text-center p-3 bg-green-50 rounded">
          <div className="text-2xl font-bold text-green-600 mb-1">
            {items.length}
          </div>
          <div className="text-sm text-gray-500">数组长度</div>
        </div>
        <div className="text-center p-3 bg-purple-50 rounded">
          <div className="text-2xl font-bold text-purple-600 mb-1">
            {renderCountRef.current}
          </div>
          <div className="text-sm text-gray-500">渲染次数</div>
        </div>
      </div>

      {/* 操作说明 */}
      <div className="mb-6 p-4 bg-blue-50 rounded border border-blue-200">
        <h4 className="font-semibold text-blue-800 mb-2">📋 操作指南</h4>
        <div className="text-sm text-blue-700 space-y-1">
          <p>
            • <strong>点击计数按钮</strong>：观察哪个计算会重新执行（查看日志）
          </p>
          <p>
            • <strong>添加/移除项</strong>：改变数组长度，触发 useMemo 重新计算
          </p>
          <p>
            • <strong>查看日志</strong>：实时显示每个操作和计算的执行情况
          </p>
        </div>
      </div>

      {/* 对比演示 */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
        <div className="p-4 bg-red-50 rounded border border-red-200">
          <h4 className="font-semibold text-red-800 mb-3">🔴 没有优化</h4>
          <div className="space-y-3">
            <div className="p-2 bg-white rounded border">
              <p className="text-xs text-gray-600 mb-1">
                计算结果 (每次渲染都执行):
              </p>
              <p className="text-lg font-mono text-red-700">
                {expensiveCalculationWithout().toFixed(2)}
              </p>
            </div>
            <button
              onClick={handleClickWithout}
              className="w-full px-3 py-2 bg-red-500 text-white rounded hover:bg-red-600 transition-colors font-medium"
            >
              增加计数 (无优化)
            </button>
            <p className="text-xs text-red-600 bg-red-100 p-2 rounded">
              ⚠️ 每次渲染都会执行昂贵计算和创建新函数
            </p>
          </div>
        </div>

        <div className="p-4 bg-green-50 rounded border border-green-200">
          <h4 className="font-semibold text-green-800 mb-3">🟢 使用优化</h4>
          <div className="space-y-3">
            <div className="p-2 bg-white rounded border">
              <p className="text-xs text-gray-600 mb-1">
                计算结果 (缓存，按需计算):
              </p>
              <p className="text-lg font-mono text-green-700">
                {expensiveCalculationWith.toFixed(2)}
              </p>
            </div>
            <button
              onClick={handleClickWith}
              className="w-full px-3 py-2 bg-green-500 text-white rounded hover:bg-green-600 transition-colors font-medium"
            >
              增加计数 (使用优化)
            </button>
            <p className="text-xs text-green-600 bg-green-100 p-2 rounded">
              ✅ 只有依赖项变化时才重新计算，函数被缓存
            </p>
          </div>
        </div>
      </div>

      {/* 触发依赖项变化的按钮 */}
      <div className="flex justify-center space-x-3 mb-6">
        <button
          onClick={addItems}
          className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition-colors font-medium"
        >
          📈 添加100项 (触发 useMemo)
        </button>
        <button
          onClick={removeItems}
          disabled={items.length === 0}
          className={\`px-4 py-2 rounded transition-colors font-medium \${
            items.length === 0
              ? "bg-gray-300 text-gray-500 cursor-not-allowed"
              : "bg-orange-500 text-white hover:bg-orange-600"
          }\`}
        >
          📉 移除100项 (触发 useMemo)
        </button>
      </div>

      {/* 实时日志显示 */}
      <div className="bg-gray-900 rounded-lg p-4 mb-4">
        <div className="flex items-center justify-between mb-2">
          <h4 className="font-semibold text-green-400">🖥️ 实时执行日志</h4>
          <span className="text-xs text-gray-400">最近10条记录</span>
        </div>
        <div className="h-48 overflow-y-auto bg-black rounded p-2">
          {logs.length === 0 ? (
            <p className="text-gray-500 text-sm font-mono">等待操作...</p>
          ) : (
            <div className="space-y-1">
              {logs.map((log, index) => (
                <div key={index} className="text-sm font-mono text-green-300">
                  {log}
                </div>
              ))}
            </div>
          )}
        </div>
      </div>

      {/* 重点提示 */}
      <div className="p-4 bg-yellow-50 rounded border border-yellow-200">
        <h4 className="font-semibold text-yellow-800 mb-2">🎯 观察重点</h4>
        <div className="text-sm text-yellow-700 space-y-1">
          <p>
            • <strong>点击计数按钮</strong>
            ：无优化版本每次都执行计算，优化版本使用缓存
          </p>
          <p>
            • <strong>添加/移除项</strong>
            ：只有这时优化版本才会重新计算（依赖项变化）
          </p>
          <p>
            • <strong>查看控制台</strong>：同时在浏览器控制台查看详细日志
          </p>
        </div>
      </div>
    </div>
  );
};

export default ComparisonDemo;`,j=s.memo(({onClick:a,label:r,renderCount:o})=>(console.log(`${r} 子组件渲染`),e.jsxs("div",{className:"p-3 bg-blue-50 rounded border border-blue-200",children:[e.jsx("p",{className:"text-sm text-blue-800 mb-2",children:r}),e.jsxs("p",{className:"text-xs text-blue-600 mb-2",children:["渲染次数: ",o]}),e.jsx("button",{onClick:a,className:"px-3 py-1 bg-blue-500 text-white rounded text-sm hover:bg-blue-600 transition-colors",children:"点击我"})]}))),I=()=>{const[a,r]=s.useState(0),[o,b]=s.useState(0),[u,l]=s.useState({with:0,without:0}),[c,v]=s.useState([]),g=i=>{const p=new Date().toLocaleTimeString();v(f=>[...f.slice(-5),`${p}: ${i}`])},x=()=>{r(a+1),g("没有 useCallback 的按钮被点击"),l(i=>({...i,without:i.without+1}))},m=s.useCallback(()=>{r(i=>i+1),g("使用 useCallback 的按钮被点击"),l(i=>({...i,with:i.with+1}))},[]),h=()=>{b(i=>i+1),g("其他状态更新，观察子组件是否重新渲染")},N=()=>{v([])},y=()=>{l({with:0,without:0}),g("重置渲染计数")};return e.jsxs("div",{className:"p-6 bg-white rounded-lg border border-gray-200",children:[e.jsxs("div",{className:"flex items-center justify-between mb-4",children:[e.jsx("h3",{className:"text-lg font-semibold text-gray-800",children:"useCallback 性能优化"}),e.jsxs("div",{className:"flex space-x-2",children:[e.jsx("button",{onClick:y,className:"px-3 py-1 bg-gray-500 text-white rounded text-sm hover:bg-gray-600 transition-colors",children:"重置计数"}),e.jsx("button",{onClick:N,className:"px-3 py-1 bg-red-500 text-white rounded text-sm hover:bg-red-600 transition-colors",children:"清空日志"})]})]}),e.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-3 gap-4 mb-6",children:[e.jsxs("div",{className:"text-center",children:[e.jsx("div",{className:"text-2xl font-bold text-blue-600 mb-1",children:a}),e.jsx("div",{className:"text-sm text-gray-500",children:"计数值"})]}),e.jsxs("div",{className:"text-center",children:[e.jsx("div",{className:"text-2xl font-bold text-green-600 mb-1",children:o}),e.jsx("div",{className:"text-sm text-gray-500",children:"其他状态"})]}),e.jsx("div",{className:"text-center",children:e.jsx("button",{onClick:h,className:"px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600 transition-colors",children:"更新其他状态"})})]}),e.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-6 mb-6",children:[e.jsx(j,{onClick:x,label:"没有 useCallback",renderCount:u.without}),e.jsx(j,{onClick:m,label:"使用 useCallback",renderCount:u.with})]}),e.jsxs("div",{className:"bg-gray-50 rounded-lg p-4",children:[e.jsx("h4",{className:"font-semibold text-gray-800 mb-2",children:"操作日志:"}),c.length===0?e.jsx("p",{className:"text-gray-500 text-sm",children:"暂无日志"}):e.jsx("div",{className:"space-y-1 max-h-32 overflow-y-auto",children:c.map((i,p)=>e.jsx("div",{className:"text-sm text-gray-700 font-mono",children:i},p))})]}),e.jsx("div",{className:"mt-4 p-3 bg-yellow-50 rounded border border-yellow-200",children:e.jsx("p",{className:"text-sm text-yellow-800",children:'💡 点击"更新其他状态"按钮，观察哪个子组件会重新渲染。使用 useCallback 的组件不会重新渲染。'})})]})},$=`import React, { useCallback, useState } from 'react';
import ChildComponent from './ChildComponent';

// useCallback 演示
const UseCallbackDemo: React.FC = () => {
  const [count, setCount] = useState(0);
  const [otherState, setOtherState] = useState(0);
  const [renderCounts, setRenderCounts] = useState({ with: 0, without: 0 });
  const [logs, setLogs] = useState<string[]>([]);

  const addLog = (message: string) => {
    const timestamp = new Date().toLocaleTimeString();
    setLogs((prev) => [...prev.slice(-5), \`\${timestamp}: \${message}\`]);
  };

  // 没有使用 useCallback 的函数 - 每次渲染都会创建新函数
  const handleClickWithout = () => {
    setCount(count + 1);
    addLog("没有 useCallback 的按钮被点击");
    setRenderCounts((prev) => ({ ...prev, without: prev.without + 1 }));
  };

  // 使用 useCallback 的函数 - 只有依赖项变化时才创建新函数
  const handleClickWith = useCallback(() => {
    setCount((prev) => prev + 1);
    addLog("使用 useCallback 的按钮被点击");
    setRenderCounts((prev) => ({ ...prev, with: prev.with + 1 }));
  }, []); // 空依赖数组，函数永远不会重新创建

  const handleOtherStateChange = () => {
    setOtherState((prev) => prev + 1);
    addLog("其他状态更新，观察子组件是否重新渲染");
  };

  const clearLogs = () => {
    setLogs([]);
  };

  const resetCounts = () => {
    setRenderCounts({ with: 0, without: 0 });
    addLog("重置渲染计数");
  };

  return (
    <div className="p-6 bg-white rounded-lg border border-gray-200">
      <div className="flex items-center justify-between mb-4">
        <h3 className="text-lg font-semibold text-gray-800">
          useCallback 性能优化
        </h3>
        <div className="flex space-x-2">
          <button
            onClick={resetCounts}
            className="px-3 py-1 bg-gray-500 text-white rounded text-sm hover:bg-gray-600 transition-colors"
          >
            重置计数
          </button>
          <button
            onClick={clearLogs}
            className="px-3 py-1 bg-red-500 text-white rounded text-sm hover:bg-red-600 transition-colors"
          >
            清空日志
          </button>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
        <div className="text-center">
          <div className="text-2xl font-bold text-blue-600 mb-1">{count}</div>
          <div className="text-sm text-gray-500">计数值</div>
        </div>
        <div className="text-center">
          <div className="text-2xl font-bold text-green-600 mb-1">
            {otherState}
          </div>
          <div className="text-sm text-gray-500">其他状态</div>
        </div>
        <div className="text-center">
          <button
            onClick={handleOtherStateChange}
            className="px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600 transition-colors"
          >
            更新其他状态
          </button>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
        <ChildComponent
          onClick={handleClickWithout}
          label="没有 useCallback"
          renderCount={renderCounts.without}
        />
        <ChildComponent
          onClick={handleClickWith}
          label="使用 useCallback"
          renderCount={renderCounts.with}
        />
      </div>

      <div className="bg-gray-50 rounded-lg p-4">
        <h4 className="font-semibold text-gray-800 mb-2">操作日志:</h4>
        {logs.length === 0 ? (
          <p className="text-gray-500 text-sm">暂无日志</p>
        ) : (
          <div className="space-y-1 max-h-32 overflow-y-auto">
            {logs.map((log, index) => (
              <div key={index} className="text-sm text-gray-700 font-mono">
                {log}
              </div>
            ))}
          </div>
        )}
      </div>

      <div className="mt-4 p-3 bg-yellow-50 rounded border border-yellow-200">
        <p className="text-sm text-yellow-800">
          💡 点击"更新其他状态"按钮，观察哪个子组件会重新渲染。使用 useCallback
          的组件不会重新渲染。
        </p>
      </div>
    </div>
  );
};

export default UseCallbackDemo;`,T=s.memo(({items:a,filter:r,multiplier:o})=>{console.log("ExpensiveList 组件渲染");const b=s.useMemo(()=>{console.log("执行昂贵的计算...");let l=0;for(let c=0;c<1e6;c++)l+=c;return l*o},[o]),u=s.useMemo(()=>(console.log("处理列表数据..."),a.filter(l=>r==="even"?l%2===0:r==="odd"?l%2===1:!0).map(l=>l*o).slice(0,10)),[a,r,o]);return e.jsxs("div",{className:"p-4 bg-purple-50 rounded border border-purple-200",children:[e.jsx("h4",{className:"font-semibold text-purple-800 mb-2",children:"计算结果"}),e.jsxs("p",{className:"text-sm text-purple-700 mb-2",children:["昂贵计算结果: ",b.toLocaleString()]}),e.jsx("p",{className:"text-sm text-purple-700 mb-2",children:"处理后的列表 (前10项):"}),e.jsx("div",{className:"grid grid-cols-5 gap-1",children:u.map((l,c)=>e.jsx("div",{className:"px-2 py-1 bg-purple-100 rounded text-xs text-center",children:l},c))})]})}),D=()=>{const[a,r]=s.useState(()=>Array.from({length:100},(t,n)=>n+1)),[o,b]=s.useState("all"),[u,l]=s.useState(1),[c,v]=s.useState(0),[g,x]=s.useState([]),m=t=>{const n=new Date().toLocaleTimeString();x(d=>[...d.slice(-5),`${n}: ${t}`])},h=s.useMemo(()=>{console.log("计算统计信息..."),m("重新计算统计信息");const t=a.reduce((k,M)=>k+M,0),n=t/a.length,d=Math.max(...a),w=Math.min(...a);return{sum:t,average:n,max:d,min:w,count:a.length}},[a]),N=s.useMemo(()=>(console.log("过滤数据..."),m(`应用过滤器: ${o}`),a.filter(t=>o==="even"?t%2===0:o==="odd"?t%2===1:!0)),[a,o]),y=()=>{const t=Array.from({length:10},()=>Math.floor(Math.random()*100)+1);r(n=>[...n,...t]),m(`添加了 ${t.length} 个随机项`)},i=()=>{r([]),m("清空所有项")},p=()=>{r(Array.from({length:100},(t,n)=>n+1)),m("重置为初始数据")},f=()=>{v(t=>t+1),m("更新无关状态 (不应触发重新计算)")},C=()=>{x([])};return e.jsxs("div",{className:"p-6 bg-white rounded-lg border border-gray-200",children:[e.jsxs("div",{className:"flex items-center justify-between mb-4",children:[e.jsx("h3",{className:"text-lg font-semibold text-gray-800",children:"useMemo 性能优化"}),e.jsx("button",{onClick:C,className:"px-3 py-1 bg-red-500 text-white rounded text-sm hover:bg-red-600 transition-colors",children:"清空日志"})]}),e.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-6 mb-6",children:[e.jsxs("div",{className:"space-y-4",children:[e.jsxs("div",{children:[e.jsx("label",{className:"block text-sm font-medium text-gray-700 mb-2",children:"数据操作:"}),e.jsxs("div",{className:"flex flex-wrap gap-2",children:[e.jsx("button",{onClick:y,className:"px-3 py-1 bg-blue-500 text-white rounded text-sm hover:bg-blue-600 transition-colors",children:"添加随机项"}),e.jsx("button",{onClick:p,className:"px-3 py-1 bg-green-500 text-white rounded text-sm hover:bg-green-600 transition-colors",children:"重置数据"}),e.jsx("button",{onClick:i,className:"px-3 py-1 bg-red-500 text-white rounded text-sm hover:bg-red-600 transition-colors",children:"清空数据"})]})]}),e.jsxs("div",{children:[e.jsx("label",{className:"block text-sm font-medium text-gray-700 mb-2",children:"过滤器:"}),e.jsx("div",{className:"flex space-x-2",children:["all","even","odd"].map(t=>e.jsx("button",{onClick:()=>{b(t),m(`切换过滤器到: ${t}`)},className:`px-3 py-1 rounded text-sm transition-colors ${o===t?"bg-purple-500 text-white":"bg-gray-200 text-gray-700 hover:bg-gray-300"}`,children:t==="all"?"全部":t==="even"?"偶数":"奇数"},t))})]}),e.jsxs("div",{children:[e.jsxs("label",{className:"block text-sm font-medium text-gray-700 mb-2",children:["乘数: ",u]}),e.jsx("input",{type:"range",min:"1",max:"10",value:u,onChange:t=>{const n=Number(t.target.value);l(n),m(`设置乘数为: ${n}`)},className:"w-full"})]}),e.jsxs("div",{children:[e.jsxs("label",{className:"block text-sm font-medium text-gray-700 mb-2",children:["无关状态: ",c]}),e.jsx("button",{onClick:f,className:"px-3 py-1 bg-gray-500 text-white rounded text-sm hover:bg-gray-600 transition-colors",children:"更新无关状态"})]})]}),e.jsxs("div",{className:"space-y-4",children:[e.jsxs("div",{className:"p-4 bg-blue-50 rounded border border-blue-200",children:[e.jsx("h4",{className:"font-semibold text-blue-800 mb-2",children:"统计信息 (useMemo)"}),e.jsxs("div",{className:"grid grid-cols-2 gap-2 text-sm",children:[e.jsxs("div",{children:["总数: ",h.count]}),e.jsxs("div",{children:["总和: ",h.sum]}),e.jsxs("div",{children:["平均: ",h.average.toFixed(2)]}),e.jsxs("div",{children:["最大: ",h.max]}),e.jsxs("div",{children:["最小: ",h.min]}),e.jsxs("div",{children:["过滤后: ",N.length]})]})]}),e.jsx(T,{items:N,filter:o,multiplier:u})]})]}),e.jsxs("div",{className:"bg-gray-50 rounded-lg p-4",children:[e.jsx("h4",{className:"font-semibold text-gray-800 mb-2",children:"操作日志:"}),g.length===0?e.jsx("p",{className:"text-gray-500 text-sm",children:"暂无日志"}):e.jsx("div",{className:"space-y-1 max-h-32 overflow-y-auto",children:g.map((t,n)=>e.jsx("div",{className:"text-sm text-gray-700 font-mono",children:t},n))})]}),e.jsx("div",{className:"mt-4 p-3 bg-green-50 rounded border border-green-200",children:e.jsx("p",{className:"text-sm text-green-800",children:'💡 点击"更新无关状态"按钮，观察统计信息不会重新计算。useMemo 只有在依赖项变化时才重新计算。'})})]})},W=`import React, { useMemo, useState } from 'react';
import ExpensiveList from './ExpensiveList';

// useMemo 演示
const UseMemoDemo: React.FC = () => {
  const [items, setItems] = useState(() =>
    Array.from({ length: 100 }, (_, i) => i + 1)
  );
  const [filter, setFilter] = useState<"all" | "even" | "odd">("all");
  const [multiplier, setMultiplier] = useState(1);
  const [otherState, setOtherState] = useState(0);
  const [logs, setLogs] = useState<string[]>([]);

  const addLog = (message: string) => {
    const timestamp = new Date().toLocaleTimeString();
    setLogs((prev) => [...prev.slice(-5), \`\${timestamp}: \${message}\`]);
  };

  // 使用 useMemo 缓存复杂计算
  const statistics = useMemo(() => {
    console.log("计算统计信息...");
    addLog("重新计算统计信息");

    const sum = items.reduce((acc, item) => acc + item, 0);
    const average = sum / items.length;
    const max = Math.max(...items);
    const min = Math.min(...items);

    return { sum, average, max, min, count: items.length };
  }, [items]); // 只有 items 变化时才重新计算

  // 使用 useMemo 缓存过滤后的数据
  const filteredItems = useMemo(() => {
    console.log("过滤数据...");
    addLog(\`应用过滤器: \${filter}\`);

    return items.filter((item) => {
      if (filter === "even") return item % 2 === 0;
      if (filter === "odd") return item % 2 === 1;
      return true;
    });
  }, [items, filter]);

  const addRandomItems = () => {
    const newItems = Array.from(
      { length: 10 },
      () => Math.floor(Math.random() * 100) + 1
    );
    setItems((prev) => [...prev, ...newItems]);
    addLog(\`添加了 \${newItems.length} 个随机项\`);
  };

  const clearItems = () => {
    setItems([]);
    addLog("清空所有项");
  };

  const resetItems = () => {
    setItems(Array.from({ length: 100 }, (_, i) => i + 1));
    addLog("重置为初始数据");
  };

  const updateOtherState = () => {
    setOtherState((prev) => prev + 1);
    addLog("更新无关状态 (不应触发重新计算)");
  };

  const clearLogs = () => {
    setLogs([]);
  };

  return (
    <div className="p-6 bg-white rounded-lg border border-gray-200">
      <div className="flex items-center justify-between mb-4">
        <h3 className="text-lg font-semibold text-gray-800">
          useMemo 性能优化
        </h3>
        <button
          onClick={clearLogs}
          className="px-3 py-1 bg-red-500 text-white rounded text-sm hover:bg-red-600 transition-colors"
        >
          清空日志
        </button>
      </div>

      {/* 控制面板 */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
        <div className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              数据操作:
            </label>
            <div className="flex flex-wrap gap-2">
              <button
                onClick={addRandomItems}
                className="px-3 py-1 bg-blue-500 text-white rounded text-sm hover:bg-blue-600 transition-colors"
              >
                添加随机项
              </button>
              <button
                onClick={resetItems}
                className="px-3 py-1 bg-green-500 text-white rounded text-sm hover:bg-green-600 transition-colors"
              >
                重置数据
              </button>
              <button
                onClick={clearItems}
                className="px-3 py-1 bg-red-500 text-white rounded text-sm hover:bg-red-600 transition-colors"
              >
                清空数据
              </button>
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              过滤器:
            </label>
            <div className="flex space-x-2">
              {(["all", "even", "odd"] as const).map((filterType) => (
                <button
                  key={filterType}
                  onClick={() => {
                    setFilter(filterType);
                    addLog(\`切换过滤器到: \${filterType}\`);
                  }}
                  className={\`px-3 py-1 rounded text-sm transition-colors \${
                    filter === filterType
                      ? "bg-purple-500 text-white"
                      : "bg-gray-200 text-gray-700 hover:bg-gray-300"
                  }\`}
                >
                  {filterType === "all"
                    ? "全部"
                    : filterType === "even"
                    ? "偶数"
                    : "奇数"}
                </button>
              ))}
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              乘数: {multiplier}
            </label>
            <input
              type="range"
              min="1"
              max="10"
              value={multiplier}
              onChange={(e) => {
                const newMultiplier = Number(e.target.value);
                setMultiplier(newMultiplier);
                addLog(\`设置乘数为: \${newMultiplier}\`);
              }}
              className="w-full"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              无关状态: {otherState}
            </label>
            <button
              onClick={updateOtherState}
              className="px-3 py-1 bg-gray-500 text-white rounded text-sm hover:bg-gray-600 transition-colors"
            >
              更新无关状态
            </button>
          </div>
        </div>

        <div className="space-y-4">
          {/* 统计信息 */}
          <div className="p-4 bg-blue-50 rounded border border-blue-200">
            <h4 className="font-semibold text-blue-800 mb-2">
              统计信息 (useMemo)
            </h4>
            <div className="grid grid-cols-2 gap-2 text-sm">
              <div>总数: {statistics.count}</div>
              <div>总和: {statistics.sum}</div>
              <div>平均: {statistics.average.toFixed(2)}</div>
              <div>最大: {statistics.max}</div>
              <div>最小: {statistics.min}</div>
              <div>过滤后: {filteredItems.length}</div>
            </div>
          </div>

          {/* 计算密集型组件 */}
          <ExpensiveList
            items={filteredItems}
            filter={filter}
            multiplier={multiplier}
          />
        </div>
      </div>

      <div className="bg-gray-50 rounded-lg p-4">
        <h4 className="font-semibold text-gray-800 mb-2">操作日志:</h4>
        {logs.length === 0 ? (
          <p className="text-gray-500 text-sm">暂无日志</p>
        ) : (
          <div className="space-y-1 max-h-32 overflow-y-auto">
            {logs.map((log, index) => (
              <div key={index} className="text-sm text-gray-700 font-mono">
                {log}
              </div>
            ))}
          </div>
        )}
      </div>

      <div className="mt-4 p-3 bg-green-50 rounded border border-green-200">
        <p className="text-sm text-green-800">
          💡 点击"更新无关状态"按钮，观察统计信息不会重新计算。useMemo
          只有在依赖项变化时才重新计算。
        </p>
      </div>
    </div>
  );
};

export default UseMemoDemo;`,F=()=>e.jsx(L,{title:"useCallback & useMemo",description:"React 中用于性能优化的两个重要 Hook。useCallback 缓存函数引用，useMemo 缓存计算结果，避免不必要的重新计算和重新渲染，提升应用性能。",overview:[{title:"核心概念",items:["useCallback: 缓存函数引用","useMemo: 缓存计算结果","依赖项数组控制重新计算","避免不必要的重新渲染"]},{title:"主要优势",items:["减少不必要的重新计算","避免子组件无意义渲染","提升应用整体性能","优化用户体验"]},{title:"适用场景",items:["昂贵的计算操作","传递给子组件的函数","复杂的数据处理","频繁渲染的组件"]},{title:"注意事项",items:["不要过度使用，有内存开销","依赖项数组要准确","结合 React.memo 使用","避免在依赖项中使用对象"]}],examples:[{title:"useCallback 函数缓存",component:e.jsx(I,{}),description:"演示 useCallback 如何缓存函数引用，避免子组件不必要的重新渲染",observationPoints:["点击两个子组件的按钮，观察计数变化",'点击"更新其他状态"按钮，观察哪个子组件重新渲染',"没有使用 useCallback 的子组件会重新渲染","使用 useCallback 的子组件不会重新渲染","查看浏览器控制台的渲染日志"],keyPoints:["useCallback 返回一个 memoized 回调函数","只有依赖项变化时才会返回新函数","结合 React.memo 可以避免子组件重新渲染","适用于传递给子组件的事件处理函数"],commonTraps:["在每次渲染时创建新的函数引用","忘记使用 React.memo 包装子组件","依赖项数组设置不正确"],solutions:["使用 useCallback 缓存函数引用","用 React.memo 包装需要优化的子组件","正确设置依赖项数组"],codeExample:{code:$,highlights:[8,15,22],title:"useCallback 示例源码"}},{title:"useMemo 计算缓存",component:e.jsx(D,{}),description:"演示 useMemo 如何缓存昂贵的计算结果，避免不必要的重新计算",observationPoints:["添加或删除数据项，观察统计信息重新计算","切换过滤器，观察过滤逻辑重新执行",'点击"更新无关状态"，观察计算不会重新执行',"调整乘数滑块，观察计算密集型组件的重新计算","查看操作日志和浏览器控制台了解计算执行情况"],keyPoints:["useMemo 返回一个 memoized 值","只有依赖项变化时才会重新计算","适用于昂贵的计算操作","可以缓存复杂的数据处理结果"],commonTraps:["在每次渲染时执行昂贵的计算","依赖项数组遗漏必要的依赖","过度使用 useMemo 导致内存浪费"],solutions:["使用 useMemo 缓存计算结果","准确设置所有必要的依赖项","只在真正昂贵的计算中使用 useMemo"],codeExample:{code:W,highlights:[10,18,25],title:"useMemo 示例源码"}},{title:"性能对比演示",component:e.jsx(S,{}),description:"直观对比使用和不使用 useCallback/useMemo 的性能差异",observationPoints:['点击两个"增加计数"按钮，观察计算执行频率',"添加或移除数组项，观察哪些计算会重新执行","查看浏览器控制台的执行日志","注意渲染次数和计算执行次数的关系","对比优化前后的性能表现"],keyPoints:["没有优化时每次渲染都执行昂贵计算","使用优化后只在依赖项变化时计算","性能优化的效果在复杂应用中更明显","合理使用优化可以显著提升用户体验"],commonTraps:["过早或过度的性能优化","在简单计算中使用 useMemo","忽略优化带来的内存开销"],solutions:["先测量性能瓶颈再优化","只在真正需要时使用优化","平衡性能和内存使用"],codeExample:{code:R,highlights:[12,20,28],title:"性能对比示例源码"}}],tutorial:{concepts:["useCallback 和 useMemo 的基本语法","依赖项数组的作用和设置原则","React.memo 与 useCallback 的配合使用","性能优化的时机和场景判断","优化策略的权衡和最佳实践"],steps:["从 React 中导入 useCallback 和 useMemo","识别需要优化的昂贵计算或函数","使用 useMemo 包装昂贵的计算逻辑","使用 useCallback 包装传递给子组件的函数","正确设置依赖项数组","结合 React.memo 优化子组件渲染"],tips:["不要过度使用，优化也有成本","依赖项数组要包含所有使用的变量","使用 ESLint 插件检查依赖项","在性能分析工具中验证优化效果","优先优化真正的性能瓶颈"]},interview:{questions:[{question:"useCallback 和 useMemo 有什么区别？",answer:"useCallback 缓存函数引用，返回一个 memoized 回调函数；useMemo 缓存计算结果，返回一个 memoized 值。useCallback(fn, deps) 相当于 useMemo(() => fn, deps)。"},{question:"什么时候应该使用 useCallback 和 useMemo？",answer:"当存在性能问题时才使用：1) 昂贵的计算操作用 useMemo；2) 传递给子组件的函数用 useCallback；3) 创建复杂对象时用 useMemo；4) 结合 React.memo 避免不必要的重新渲染。"},{question:"依赖项数组应该如何设置？",answer:"依赖项数组应该包含回调函数或计算中使用的所有变量。遗漏依赖项可能导致闭包陷阱，包含不必要的依赖项会导致过度重新计算。建议使用 ESLint 插件自动检查。"},{question:"过度使用 useCallback 和 useMemo 有什么问题？",answer:"过度使用会带来额外的内存开销和比较成本。每个 memoized 值都需要存储在内存中，依赖项比较也需要时间。应该先测量性能瓶颈，只在真正需要时使用优化。"}],keyPoints:["useCallback 缓存函数，useMemo 缓存值","依赖项数组控制重新计算时机","结合 React.memo 实现最佳优化效果","避免过度优化，平衡性能和复杂度","优先解决真正的性能瓶颈"]},bestPractices:{dos:["在昂贵计算中使用 useMemo","为传递给子组件的函数使用 useCallback","正确设置依赖项数组","结合 React.memo 优化子组件","使用性能分析工具验证优化效果","建立性能监控和测试机制"],donts:["不要过度使用，造成不必要的复杂度","不要在简单计算中使用 useMemo","不要遗漏或错误设置依赖项","不要忽视优化带来的内存开销","不要在没有性能问题时盲目优化"],patterns:["计算缓存模式：使用 useMemo 缓存昂贵计算","函数缓存模式：使用 useCallback 缓存事件处理器","组件优化模式：结合 React.memo 避免重新渲染","依赖优化模式：精确控制重新计算时机"]}});export{F as default};
