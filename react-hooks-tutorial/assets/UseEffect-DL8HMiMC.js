import{r as t,j as e}from"./index-DPG_OKoV.js";import{C as v}from"./ComponentTemplate-HXLvd6Xe.js";const h=()=>{const[n,i]=t.useState(0),[o,m]=t.useState("React Hooks"),[s,a]=t.useState(0),c=t.useRef(0);c.current+=1,t.useEffect(()=>{a(c.current)},[]);const x=()=>{a(c.current)};return t.useEffect(()=>{document.title=`${o} - Count: ${n}`,console.log("📄 文档标题已更新:",document.title)},[o,n]),e.jsxs("div",{className:"p-6 bg-white rounded-lg border border-gray-200",children:[e.jsxs("div",{className:"flex items-center justify-between mb-4",children:[e.jsx("h3",{className:"text-lg font-semibold text-gray-800",children:"基础副作用"}),e.jsxs("div",{className:"flex items-center gap-2",children:[e.jsxs("span",{className:"text-sm text-gray-500",children:["渲染次数: ",s]}),e.jsx("button",{onClick:x,className:"px-2 py-1 bg-blue-500 text-white text-xs rounded hover:bg-blue-600 transition-colors",children:"更新"})]})]}),e.jsxs("div",{className:"space-y-4",children:[e.jsxs("div",{className:"flex items-center space-x-4",children:[e.jsx("label",{className:"text-sm font-medium text-gray-700",children:"页面标题:"}),e.jsx("input",{type:"text",value:o,onChange:f=>m(f.target.value),className:"px-3 py-1 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"})]}),e.jsxs("div",{className:"flex items-center space-x-4",children:[e.jsx("span",{className:"text-sm font-medium text-gray-700",children:"计数:"}),e.jsx("div",{className:"text-2xl font-bold text-blue-600",children:n}),e.jsx("button",{onClick:()=>i(n+1),className:"px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition-colors",children:"+1"}),e.jsx("button",{onClick:()=>i(0),className:"px-4 py-2 bg-gray-500 text-white rounded hover:bg-gray-600 transition-colors",children:"重置"})]})]})]})},N=`import React, { useEffect, useRef, useState } from "react";

const BasicEffectDemo: React.FC = () => {
  const [count, setCount] = useState(0);
  const [title, setTitle] = useState("React Hooks");
  const [renderCount, setRenderCount] = useState(0);

  // 每次渲染时增加渲染计数（使用 useRef 避免死循环）
  const renderCountRef = useRef(0);
  renderCountRef.current += 1;

  // 使用 useEffect 更新显示的渲染计数（避免在渲染过程中调用 setState）
  useEffect(() => {
    setRenderCount(renderCountRef.current);
  }, []);

  // 手动更新渲染次数的函数
  const updateRenderCount = () => {
    setRenderCount(renderCountRef.current);
  };

  // 副作用：更新文档标题
  useEffect(() => {
    document.title = \`\${title} - Count: \${count}\`;
    console.log("📄 文档标题已更新:", document.title);
  }, [title, count]); // 依赖数组

  return (
    <div className="p-6 bg-white rounded-lg border border-gray-200">
      <div className="flex items-center justify-between mb-4">
        <h3 className="text-lg font-semibold text-gray-800">基础副作用</h3>
        <div className="flex items-center gap-2">
          <span className="text-sm text-gray-500">渲染次数: {renderCount}</span>
          <button
            onClick={updateRenderCount}
            className="px-2 py-1 bg-blue-500 text-white text-xs rounded hover:bg-blue-600 transition-colors"
          >
            更新
          </button>
        </div>
      </div>

      <div className="space-y-4">
        <div className="flex items-center space-x-4">
          <label className="text-sm font-medium text-gray-700">页面标题:</label>
          <input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className="px-3 py-1 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        <div className="flex items-center space-x-4">
          <span className="text-sm font-medium text-gray-700">计数:</span>
          <div className="text-2xl font-bold text-blue-600">{count}</div>
          <button
            onClick={() => setCount(count + 1)}
            className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition-colors"
          >
            +1
          </button>
          <button
            onClick={() => setCount(0)}
            className="px-4 py-2 bg-gray-500 text-white rounded hover:bg-gray-600 transition-colors"
          >
            重置
          </button>
        </div>
      </div>
    </div>
  );
};

export default BasicEffectDemo;
`,y=()=>{const[n,i]=t.useState(!1),[o,m]=t.useState(0),[s,a]=t.useState([]),c=t.useCallback(d=>{const g=new Date().toLocaleTimeString();a(r=>[...r.slice(-4),`${g}: ${d}`])},[]);t.useEffect(()=>{let d=null;return n&&(c("⏰ 定时器启动"),d=setInterval(()=>{m(g=>g+1)},1e3)),()=>{d&&(clearInterval(d),c("🧹 定时器清理"))}},[n,c]);const x=()=>{i(!n)},f=()=>{m(0),i(!1)},l=()=>{a([])};return e.jsxs("div",{className:"p-6 bg-white rounded-lg border border-gray-200",children:[e.jsxs("div",{className:"flex items-center justify-between mb-4",children:[e.jsx("h3",{className:"text-lg font-semibold text-gray-800",children:"清理函数示例"}),e.jsxs("div",{className:"text-2xl font-bold text-green-600",children:[o,"s"]})]}),e.jsxs("div",{className:"flex flex-wrap gap-2 mb-4",children:[e.jsx("button",{onClick:x,className:`px-4 py-2 text-white rounded transition-colors ${n?"bg-red-500 hover:bg-red-600":"bg-green-500 hover:bg-green-600"}`,children:n?"停止":"开始"}),e.jsx("button",{onClick:f,className:"px-4 py-2 bg-gray-500 text-white rounded hover:bg-gray-600 transition-colors",children:"重置"}),e.jsx("button",{onClick:l,className:"px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition-colors",children:"清空日志"})]}),e.jsxs("div",{className:"bg-gray-50 rounded-lg p-4",children:[e.jsx("h4",{className:"font-semibold text-gray-800 mb-2",children:"执行日志:"}),s.length===0?e.jsx("p",{className:"text-gray-500 text-sm",children:"暂无日志"}):e.jsx("div",{className:"space-y-1",children:s.map((d,g)=>e.jsx("div",{className:"text-sm text-gray-700 font-mono",children:d},g))})]})]})},j=`import React, { useState, useEffect, useCallback } from 'react';

const CleanupDemo: React.FC = () => {
  const [isActive, setIsActive] = useState(false);
  const [time, setTime] = useState(0);
  const [logs, setLogs] = useState<string[]>([]);

  const addLog = useCallback((message: string) => {
    const timestamp = new Date().toLocaleTimeString();
    setLogs(prev => [...prev.slice(-4), \`\${timestamp}: \${message}\`]);
  }, []);

  useEffect(() => {
    let interval: NodeJS.Timeout | null = null;

    if (isActive) {
      addLog('⏰ 定时器启动');
      interval = setInterval(() => {
        setTime(prev => prev + 1);
      }, 1000);
    }

    // 清理函数
    return () => {
      if (interval) {
        clearInterval(interval);
        addLog('🧹 定时器清理');
      }
    };
  }, [isActive, addLog]); // 依赖 isActive 和 addLog

  const toggle = () => {
    setIsActive(!isActive);
  };

  const reset = () => {
    setTime(0);
    setIsActive(false);
  };

  const clearLogs = () => {
    setLogs([]);
  };

  return (
    <div className="p-6 bg-white rounded-lg border border-gray-200">
      <div className="flex items-center justify-between mb-4">
        <h3 className="text-lg font-semibold text-gray-800">清理函数示例</h3>
        <div className="text-2xl font-bold text-green-600">{time}s</div>
      </div>

      <div className="flex flex-wrap gap-2 mb-4">
        <button
          onClick={toggle}
          className={\`px-4 py-2 text-white rounded transition-colors \${
            isActive
              ? 'bg-red-500 hover:bg-red-600'
              : 'bg-green-500 hover:bg-green-600'
          }\`}
        >
          {isActive ? '停止' : '开始'}
        </button>
        <button
          onClick={reset}
          className="px-4 py-2 bg-gray-500 text-white rounded hover:bg-gray-600 transition-colors"
        >
          重置
        </button>
        <button
          onClick={clearLogs}
          className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition-colors"
        >
          清空日志
        </button>
      </div>

      <div className="bg-gray-50 rounded-lg p-4">
        <h4 className="font-semibold text-gray-800 mb-2">执行日志:</h4>
        {logs.length === 0 ? (
          <p className="text-gray-500 text-sm">暂无日志</p>
        ) : (
          <div className="space-y-1">
            {logs.map((log, index) => (
              <div key={index} className="text-sm text-gray-700 font-mono">
                {log}
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default CleanupDemo;`,C=()=>{const[n,i]=t.useState(0),[o,m]=t.useState([]),s=t.useRef(null),a=t.useCallback(u=>{const b=new Date().toLocaleTimeString();m(p=>[...p.slice(-4),`${b}: ${u}`])},[]),c=()=>{s.current&&clearInterval(s.current),a("🐛 启动有问题的定时器"),s.current=setInterval(()=>{console.log("Bad interval - count:",n),i(n+1)},1e3)},x=()=>{s.current&&clearInterval(s.current),a("✅ 启动正确的定时器"),s.current=setInterval(()=>{i(u=>(console.log("Good interval - prev:",u),u+1))},1e3)},f=t.useRef(n);f.current=n;const l=()=>{s.current&&clearInterval(s.current),a("🔗 启动使用 ref 的定时器"),s.current=setInterval(()=>{const u=f.current;console.log("Ref interval - current:",u),i(u+1)},1e3)},d=()=>{s.current&&(clearInterval(s.current),s.current=null,a("⏹️ 定时器已停止"))},g=()=>{d(),i(0),a("🔄 计数器已重置")},r=()=>{m([])};return t.useEffect(()=>()=>{s.current&&clearInterval(s.current)},[]),e.jsxs("div",{className:"p-6 bg-white rounded-lg border border-gray-200",children:[e.jsxs("div",{className:"flex items-center justify-between mb-4",children:[e.jsx("h3",{className:"text-lg font-semibold text-gray-800",children:"防闭包陷阱"}),e.jsx("div",{className:"text-3xl font-bold text-purple-600",children:n})]}),e.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-3 gap-2 mb-4",children:[e.jsx("button",{onClick:c,className:"px-3 py-2 bg-red-500 text-white rounded hover:bg-red-600 transition-colors text-sm",children:"🐛 有问题的定时器"}),e.jsx("button",{onClick:x,className:"px-3 py-2 bg-green-500 text-white rounded hover:bg-green-600 transition-colors text-sm",children:"✅ 函数式更新"}),e.jsx("button",{onClick:l,className:"px-3 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition-colors text-sm",children:"🔗 使用 ref"})]}),e.jsxs("div",{className:"flex gap-2 mb-4",children:[e.jsx("button",{onClick:d,className:"px-4 py-2 bg-orange-500 text-white rounded hover:bg-orange-600 transition-colors",children:"停止定时器"}),e.jsx("button",{onClick:g,className:"px-4 py-2 bg-gray-500 text-white rounded hover:bg-gray-600 transition-colors",children:"重置"}),e.jsx("button",{onClick:r,className:"px-4 py-2 bg-purple-500 text-white rounded hover:bg-purple-600 transition-colors",children:"清空日志"})]}),e.jsxs("div",{className:"bg-gray-50 rounded-lg p-4",children:[e.jsx("h4",{className:"font-semibold text-gray-800 mb-2",children:"执行日志:"}),o.length===0?e.jsx("p",{className:"text-gray-500 text-sm",children:"暂无日志"}):e.jsx("div",{className:"space-y-1",children:o.map((u,b)=>e.jsx("div",{className:"text-sm text-gray-700 font-mono",children:u},b))})]}),e.jsx("div",{className:"mt-4 p-3 bg-red-50 rounded border border-red-200",children:e.jsx("p",{className:"text-sm text-red-800",children:"⚠️ 打开浏览器控制台观察不同方案的执行效果，注意闭包陷阱的问题"})})]})},E=`import React, { useState, useEffect, useRef, useCallback } from 'react';

const ClosureTrapDemo: React.FC = () => {
  const [count, setCount] = useState(0);
  const [logs, setLogs] = useState<string[]>([]);
  const intervalRef = useRef<NodeJS.Timeout | null>(null);

  const addLog = useCallback((message: string) => {
    const timestamp = new Date().toLocaleTimeString();
    setLogs(prev => [...prev.slice(-4), \`\${timestamp}: \${message}\`]);
  }, []);

  // ❌ 错误示例：闭包陷阱
  const startBadInterval = () => {
    if (intervalRef.current) clearInterval(intervalRef.current);

    addLog('🐛 启动有问题的定时器');
    intervalRef.current = setInterval(() => {
      // 这里的 count 永远是启动时的值（闭包陷阱）
      console.log('Bad interval - count:', count);
      setCount(count + 1); // 总是基于初始值增加
    }, 1000);
  };

  // ✅ 正确示例：使用函数式更新
  const startGoodInterval = () => {
    if (intervalRef.current) clearInterval(intervalRef.current);

    addLog('✅ 启动正确的定时器');
    intervalRef.current = setInterval(() => {
      setCount(prev => {
        console.log('Good interval - prev:', prev);
        return prev + 1; // 基于最新值增加
      });
    }, 1000);
  };

  // ✅ 另一种解决方案：使用 useRef
  const countRef = useRef(count);
  countRef.current = count;

  const startRefInterval = () => {
    if (intervalRef.current) clearInterval(intervalRef.current);

    addLog('🔗 启动使用 ref 的定时器');
    intervalRef.current = setInterval(() => {
      const currentCount = countRef.current;
      console.log('Ref interval - current:', currentCount);
      setCount(currentCount + 1);
    }, 1000);
  };

  const stopInterval = () => {
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
      intervalRef.current = null;
      addLog('⏹️ 定时器已停止');
    }
  };

  const reset = () => {
    stopInterval();
    setCount(0);
    addLog('🔄 计数器已重置');
  };

  const clearLogs = () => {
    setLogs([]);
  };

  // 组件卸载时清理
  useEffect(() => {
    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
      }
    };
  }, []);

  return (
    <div className="p-6 bg-white rounded-lg border border-gray-200">
      <div className="flex items-center justify-between mb-4">
        <h3 className="text-lg font-semibold text-gray-800">防闭包陷阱</h3>
        <div className="text-3xl font-bold text-purple-600">{count}</div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-2 mb-4">
        <button
          onClick={startBadInterval}
          className="px-3 py-2 bg-red-500 text-white rounded hover:bg-red-600 transition-colors text-sm"
        >
          🐛 有问题的定时器
        </button>
        <button
          onClick={startGoodInterval}
          className="px-3 py-2 bg-green-500 text-white rounded hover:bg-green-600 transition-colors text-sm"
        >
          ✅ 函数式更新
        </button>
        <button
          onClick={startRefInterval}
          className="px-3 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition-colors text-sm"
        >
          🔗 使用 ref
        </button>
      </div>

      <div className="flex gap-2 mb-4">
        <button
          onClick={stopInterval}
          className="px-4 py-2 bg-orange-500 text-white rounded hover:bg-orange-600 transition-colors"
        >
          停止定时器
        </button>
        <button
          onClick={reset}
          className="px-4 py-2 bg-gray-500 text-white rounded hover:bg-gray-600 transition-colors"
        >
          重置
        </button>
        <button
          onClick={clearLogs}
          className="px-4 py-2 bg-purple-500 text-white rounded hover:bg-purple-600 transition-colors"
        >
          清空日志
        </button>
      </div>

      <div className="bg-gray-50 rounded-lg p-4">
        <h4 className="font-semibold text-gray-800 mb-2">执行日志:</h4>
        {logs.length === 0 ? (
          <p className="text-gray-500 text-sm">暂无日志</p>
        ) : (
          <div className="space-y-1">
            {logs.map((log, index) => (
              <div key={index} className="text-sm text-gray-700 font-mono">
                {log}
              </div>
            ))}
          </div>
        )}
      </div>

      <div className="mt-4 p-3 bg-red-50 rounded border border-red-200">
        <p className="text-sm text-red-800">
          ⚠️ 打开浏览器控制台观察不同方案的执行效果，注意闭包陷阱的问题
        </p>
      </div>
    </div>
  );
};

export default ClosureTrapDemo;`,R=()=>{const[n,i]=t.useState(0),[o,m]=t.useState("React"),[s,a]=t.useState([]),c=t.useRef(0),x=t.useRef(null),f=t.useRef(0);c.current+=1,t.useEffect(()=>{var r;(r=x.current)==null||r.scrollIntoView({behavior:"smooth"})},[s]);const l=t.useCallback(r=>{const u=new Date().toISOString().substr(11,8);a(b=>[...b.slice(-9),{id:++f.current,timestamp:u,message:r}])},[]);t.useEffect(()=>{l("🚀 空依赖数组 - 组件挂载")},[l]),t.useEffect(()=>{l(`📊 依赖 count - 当前值: ${n}`)},[n,l]),t.useEffect(()=>{l(`👤 依赖 name - 当前值: ${o}`)},[o,l]),t.useEffect(()=>{l(`🔗 依赖多个值 - count: ${n}, name: ${o}`)},[n,o,l]);const d=t.useCallback(()=>{a([])},[]),g=t.useCallback(()=>{l(`🔄 手动更新 - 渲染次数: ${c.current}`)},[l]);return e.jsxs("div",{className:"p-6 bg-white rounded-lg border border-gray-200 shadow-sm",children:[e.jsxs("div",{className:"flex items-center justify-between mb-4",children:[e.jsx("h3",{className:"text-lg font-semibold text-gray-800",children:"依赖数组示例"}),e.jsxs("div",{className:"flex items-center gap-2",children:[e.jsxs("span",{className:"text-sm text-gray-500",children:["渲染次数: ",c.current]}),e.jsx("button",{onClick:g,className:"px-2 py-1 bg-blue-500 text-white text-xs rounded hover:bg-blue-600 transition-colors",children:"添加日志"})]})]}),e.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-4 mb-4",children:[e.jsxs("div",{className:"space-y-3",children:[e.jsxs("div",{className:"flex items-center space-x-3",children:[e.jsx("label",{className:"text-sm font-medium text-gray-700 w-16",children:"计数:"}),e.jsx("div",{className:"text-xl font-bold text-blue-600",children:n}),e.jsx("button",{onClick:()=>i(r=>r+1),className:"px-3 py-1 bg-blue-500 text-white rounded text-sm hover:bg-blue-600 transition-colors",children:"+1"})]}),e.jsxs("div",{className:"flex items-center space-x-3",children:[e.jsx("label",{className:"text-sm font-medium text-gray-700 w-16",children:"名称:"}),e.jsx("input",{type:"text",value:o,onChange:r=>m(r.target.value),className:"px-2 py-1 border border-gray-300 rounded text-sm focus:outline-none focus:ring-2 focus:ring-green-500",placeholder:"输入名称"})]})]}),e.jsx("div",{className:"flex items-center justify-center",children:e.jsx("button",{onClick:d,className:"px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600 transition-colors",children:"清空日志"})})]}),e.jsxs("div",{className:"bg-gray-50 rounded-lg p-4 max-h-60 overflow-y-auto",children:[e.jsx("h4",{className:"font-semibold text-gray-800 mb-2",children:"Effect 执行日志:"}),s.length===0?e.jsx("p",{className:"text-gray-500 text-sm",children:"暂无日志"}):e.jsxs("div",{className:"space-y-1",children:[s.map(r=>e.jsxs("div",{className:"text-sm text-gray-700 font-mono flex items-baseline",children:[e.jsxs("span",{className:"text-gray-500 mr-2",children:["[",r.timestamp,"]"]}),e.jsx("span",{children:r.message})]},r.id)),e.jsx("div",{ref:x})]})]}),e.jsx("div",{className:"mt-4 p-3 bg-yellow-50 rounded border border-yellow-200",children:e.jsx("p",{className:"text-sm text-yellow-800",children:"💡 观察不同依赖数组配置下 useEffect 的执行时机。日志最多保留10条。"})})]})},w=`import React, { useCallback, useEffect, useRef, useState } from "react";

interface EffectLog {
  id: number;
  timestamp: string;
  message: string;
}

const DependencyDemo: React.FC = () => {
  const [count, setCount] = useState(0);
  const [name, setName] = useState("React");
  const [effectLogs, setEffectLogs] = useState<EffectLog[]>([]);
  const renderCountRef = useRef(0);
  const logsEndRef = useRef<HTMLDivElement>(null);
  const logIdRef = useRef(0);

  renderCountRef.current += 1;

  // 自动滚动到底部
  useEffect(() => {
    logsEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [effectLogs]);

  // 抽象出的日志记录函数
  const addEffectLog = useCallback((message: string) => {
    const timestamp = new Date().toISOString().substr(11, 8);
    setEffectLogs((prev) => [
      ...prev.slice(-9), // 保留最近10条日志
      { id: ++logIdRef.current, timestamp, message },
    ]);
  }, []);

  // 空依赖数组 - 只在挂载时执行
  useEffect(() => {
    addEffectLog("🚀 空依赖数组 - 组件挂载");
  }, [addEffectLog]);

  // 依赖 count - 只在 count 变化时执行
  useEffect(() => {
    addEffectLog(\`📊 依赖 count - 当前值: \${count}\`);
  }, [count, addEffectLog]);

  // 依赖 name - 只在 name 变化时执行
  useEffect(() => {
    addEffectLog(\`👤 依赖 name - 当前值: \${name}\`);
  }, [name, addEffectLog]);

  // 依赖多个值
  useEffect(() => {
    addEffectLog(\`🔗 依赖多个值 - count: \${count}, name: \${name}\`);
  }, [count, name, addEffectLog]);

  const clearLogs = useCallback(() => {
    setEffectLogs([]);
  }, []);

  const addManualLog = useCallback(() => {
    addEffectLog(\`🔄 手动更新 - 渲染次数: \${renderCountRef.current}\`);
  }, [addEffectLog]);

  return (
    <div className="p-6 bg-white rounded-lg border border-gray-200 shadow-sm">
      <div className="flex items-center justify-between mb-4">
        <h3 className="text-lg font-semibold text-gray-800">依赖数组示例</h3>
        <div className="flex items-center gap-2">
          <span className="text-sm text-gray-500">
            渲染次数: {renderCountRef.current}
          </span>
          <button
            onClick={addManualLog}
            className="px-2 py-1 bg-blue-500 text-white text-xs rounded hover:bg-blue-600 transition-colors"
          >
            添加日志
          </button>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
        <div className="space-y-3">
          <div className="flex items-center space-x-3">
            <label className="text-sm font-medium text-gray-700 w-16">
              计数:
            </label>
            <div className="text-xl font-bold text-blue-600">{count}</div>
            <button
              onClick={() => setCount((c) => c + 1)}
              className="px-3 py-1 bg-blue-500 text-white rounded text-sm hover:bg-blue-600 transition-colors"
            >
              +1
            </button>
          </div>

          <div className="flex items-center space-x-3">
            <label className="text-sm font-medium text-gray-700 w-16">
              名称:
            </label>
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="px-2 py-1 border border-gray-300 rounded text-sm focus:outline-none focus:ring-2 focus:ring-green-500"
              placeholder="输入名称"
            />
          </div>
        </div>

        <div className="flex items-center justify-center">
          <button
            onClick={clearLogs}
            className="px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600 transition-colors"
          >
            清空日志
          </button>
        </div>
      </div>

      <div className="bg-gray-50 rounded-lg p-4 max-h-60 overflow-y-auto">
        <h4 className="font-semibold text-gray-800 mb-2">Effect 执行日志:</h4>
        {effectLogs.length === 0 ? (
          <p className="text-gray-500 text-sm">暂无日志</p>
        ) : (
          <div className="space-y-1">
            {effectLogs.map((log) => (
              <div
                key={log.id}
                className="text-sm text-gray-700 font-mono flex items-baseline"
              >
                <span className="text-gray-500 mr-2">[{log.timestamp}]</span>
                <span>{log.message}</span>
              </div>
            ))}
            <div ref={logsEndRef} />
          </div>
        )}
      </div>

      <div className="mt-4 p-3 bg-yellow-50 rounded border border-yellow-200">
        <p className="text-sm text-yellow-800">
          💡 观察不同依赖数组配置下 useEffect 的执行时机。日志最多保留10条。
        </p>
      </div>
    </div>
  );
};

export default DependencyDemo;
`,I=()=>e.jsx(v,{title:"useEffect",description:"React 中处理副作用的 Hook，用于执行数据获取、订阅、手动 DOM 操作等副作用操作。掌握依赖数组、清理函数和防闭包陷阱等核心概念。",overview:e.jsx("div",{className:"space-y-4",children:e.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-6",children:[e.jsxs("div",{className:"bg-blue-50 p-4 rounded-lg border border-blue-200",children:[e.jsx("h3",{className:"font-semibold text-blue-800 mb-2",children:"🎯 核心概念"}),e.jsxs("ul",{className:"text-sm text-blue-700 space-y-1",children:[e.jsx("li",{children:"• 副作用处理机制"}),e.jsx("li",{children:"• 依赖数组控制执行时机"}),e.jsx("li",{children:"• 清理函数防止内存泄漏"}),e.jsx("li",{children:"• 生命周期方法的替代"})]})]}),e.jsxs("div",{className:"bg-green-50 p-4 rounded-lg border border-green-200",children:[e.jsx("h3",{className:"font-semibold text-green-800 mb-2",children:"✨ 主要优势"}),e.jsxs("ul",{className:"text-sm text-green-700 space-y-1",children:[e.jsx("li",{children:"• 统一的副作用处理方式"}),e.jsx("li",{children:"• 精确的执行时机控制"}),e.jsx("li",{children:"• 自动清理机制"}),e.jsx("li",{children:"• 更好的逻辑复用"})]})]}),e.jsxs("div",{className:"bg-yellow-50 p-4 rounded-lg border border-yellow-200",children:[e.jsx("h3",{className:"font-semibold text-yellow-800 mb-2",children:"🎪 适用场景"}),e.jsxs("ul",{className:"text-sm text-yellow-700 space-y-1",children:[e.jsx("li",{children:"• 数据获取和 API 调用"}),e.jsx("li",{children:"• 事件监听器的添加和移除"}),e.jsx("li",{children:"• 定时器的创建和清理"}),e.jsx("li",{children:"• DOM 操作和样式更新"})]})]}),e.jsxs("div",{className:"bg-red-50 p-4 rounded-lg border border-red-200",children:[e.jsx("h3",{className:"font-semibold text-red-800 mb-2",children:"⚠️ 注意事项"}),e.jsxs("ul",{className:"text-sm text-red-700 space-y-1",children:[e.jsx("li",{children:"• 正确设置依赖数组"}),e.jsx("li",{children:"• 避免闭包陷阱"}),e.jsx("li",{children:"• 及时清理副作用"}),e.jsx("li",{children:"• 防止无限循环"})]})]})]})}),examples:[{title:"基础副作用",component:e.jsx(h,{}),description:"演示 useEffect 的基本用法，包括副作用执行和依赖数组的使用",observationPoints:["修改输入框内容，观察浏览器标签页标题的变化","点击计数按钮，观察标题中计数的更新","打开浏览器控制台查看副作用执行的日志","注意渲染次数和副作用执行的关系"],keyPoints:["useEffect 在每次渲染完成后执行","依赖数组控制副作用的执行时机","只有依赖项发生变化时才会重新执行","可以在一个组件中使用多个 useEffect"],commonTraps:["忘记设置依赖数组导致每次渲染都执行","依赖数组中遗漏必要的依赖项","在副作用中直接修改依赖的状态"],solutions:["根据副作用的需求正确设置依赖数组","使用 ESLint 插件检查依赖项","避免在副作用中创建无限循环"],codeExample:{code:N,highlights:[8,15,22],title:"基础 useEffect 副作用实现"}},{title:"清理函数",component:e.jsx(y,{}),description:"演示如何使用清理函数防止内存泄漏，正确处理定时器、事件监听器等资源",observationPoints:["点击开始/停止按钮，观察定时器的启动和清理","查看执行日志了解清理函数的调用时机","注意组件重新渲染时清理函数的执行"],keyPoints:["清理函数在副作用重新执行前调用","清理函数在组件卸载时调用","用于清理定时器、事件监听器、订阅等","返回的清理函数会在适当时机自动执行"],commonTraps:["忘记清理定时器导致内存泄漏","忘记移除事件监听器","异步操作完成后尝试更新已卸载的组件"],solutions:["始终在 useEffect 中返回清理函数","使用标志位检查组件是否已卸载","正确处理异步操作的清理"],codeExample:{code:j,highlights:[10,18,25],title:"useEffect 清理函数实现"}},{title:"依赖数组",component:e.jsx(R,{}),description:"演示不同依赖数组配置对 useEffect 执行时机的影响",observationPoints:["修改计数和名称，观察不同 useEffect 的执行情况","注意无依赖数组的 useEffect 每次渲染都执行","观察空依赖数组的 useEffect 只在挂载时执行一次","查看执行日志了解各种依赖配置的行为"],keyPoints:["无依赖数组：每次渲染后都执行","空依赖数组：只在挂载时执行一次","有依赖项：只在依赖项变化时执行","多个依赖项：任一依赖项变化都会执行"],commonTraps:["遗漏必要的依赖项导致闭包陷阱","添加不必要的依赖项导致频繁执行","依赖项是对象或数组时的引用比较问题"],solutions:["使用 ESLint 规则检查依赖项","合理拆分 useEffect 避免依赖过多","使用 useMemo 和 useCallback 稳定引用"],codeExample:{code:w,highlights:[12,20,28],title:"useEffect 依赖数组实现"}},{title:"防闭包陷阱",component:e.jsx(C,{}),description:"演示闭包陷阱问题及其解决方案，包括函数式更新和 useRef",observationPoints:["尝试不同的定时器启动方式，观察计数行为的差异","打开浏览器控制台查看每种方案的执行日志","注意有问题的定时器总是基于初始值增加","对比函数式更新和 useRef 两种解决方案"],keyPoints:["闭包陷阱：副作用中捕获的是创建时的状态值","函数式更新：总是基于最新的状态值","useRef：提供可变的引用来访问最新值","依赖数组：正确添加依赖可以避免闭包问题"],commonTraps:["在定时器中直接使用状态变量","忘记在依赖数组中添加使用的状态","异步操作中使用过期的状态值"],solutions:["使用函数式更新获取最新状态","使用 useRef 存储最新值的引用","正确设置依赖数组重新创建副作用"],codeExample:{code:E,highlights:[14,22,30],title:"useEffect 闭包陷阱解决方案实现"}}],tutorial:{concepts:["useEffect 的执行时机和生命周期对应关系","依赖数组的三种配置方式及其影响","清理函数的作用和调用时机","闭包陷阱的产生原因和解决方案","副作用的分类和最佳实践"],steps:["从 React 中导入 useEffect Hook","在组件中调用 useEffect 并传入副作用函数","根据需要设置依赖数组控制执行时机","在副作用函数中返回清理函数（如需要）","确保依赖数组包含所有使用的变量","测试组件的挂载、更新和卸载行为"],tips:["使用 ESLint 插件 exhaustive-deps 检查依赖项","将相关的副作用逻辑组织在同一个 useEffect 中","使用多个 useEffect 分离不同关注点","在开发环境中利用 React DevTools 调试副作用","注意 React 18 的严格模式会双重执行副作用"]},interview:{questions:[{question:"useEffect 和类组件的生命周期方法有什么对应关系？",answer:"useEffect 可以模拟多个生命周期方法：空依赖数组相当于 componentDidMount，有依赖数组相当于 componentDidUpdate，清理函数相当于 componentWillUnmount。但 useEffect 的思维模式是基于数据同步而不是生命周期。"},{question:"什么是闭包陷阱，如何避免？",answer:"闭包陷阱是指副作用函数中捕获的状态值是创建时的值，而不是最新值。解决方案包括：1) 使用函数式更新；2) 使用 useRef 存储最新值；3) 正确设置依赖数组让副作用重新创建。"},{question:"为什么需要清理函数？",answer:"清理函数用于清理副作用产生的资源，防止内存泄漏。比如清理定时器、移除事件监听器、取消网络请求等。清理函数在副作用重新执行前和组件卸载时调用。"},{question:"依赖数组应该如何正确设置？",answer:"依赖数组应该包含副作用中使用的所有来自组件作用域的变量（props、state、其他变量）。使用 ESLint 规则可以自动检查。空数组表示只执行一次，无数组表示每次渲染都执行。"}],keyPoints:["useEffect 在渲染完成后异步执行","依赖数组控制副作用的执行时机","清理函数防止内存泄漏和副作用冲突","闭包陷阱是常见问题，需要正确处理","一个组件可以使用多个 useEffect 分离关注点"]},bestPractices:{dos:["根据副作用的性质正确设置依赖数组","使用清理函数清理副作用产生的资源","使用函数式更新避免闭包陷阱","将不相关的副作用分离到不同的 useEffect 中","使用 ESLint 规则检查依赖项的完整性","在副作用中处理异步操作的取消"],donts:["不要在副作用中直接修改 DOM（除非必要）","不要忘记清理定时器和事件监听器","不要在依赖数组中遗漏必要的依赖项","不要在副作用中创建无限循环","不要在副作用中进行昂贵的同步计算"],patterns:["数据获取模式：在 useEffect 中调用 API","事件监听模式：添加和清理事件监听器","定时器模式：创建和清理定时器","订阅模式：订阅和取消订阅外部数据源"]}});export{I as default};
