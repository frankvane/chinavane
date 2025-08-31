import{r as t,j as e}from"./index-DPG_OKoV.js";import{C as T}from"./ComponentTemplate-HXLvd6Xe.js";const D=()=>{const a=t.useRef(null),o=t.useRef(null),n=t.useRef(null),[i,l]=t.useState([]),c=b=>{const s=new Date().toLocaleTimeString();l(r=>[...r,`[${s}] ${b}`])},m=()=>{a.current&&(a.current.focus(),c("输入框已聚焦"))},p=()=>{a.current&&(a.current.value="",c("输入框已清空"))},g=()=>{o.current&&(o.current.select(),c("文本区域已全选"))},x=()=>{n.current&&(n.current.scrollTop=0,c("容器已滚动到顶部"))},d=()=>{n.current&&(n.current.scrollTop=n.current.scrollHeight,c("容器已滚动到底部"))},u=()=>{l([])};return e.jsxs("div",{className:"space-y-6",children:[e.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-6",children:[e.jsxs("div",{className:"space-y-4",children:[e.jsx("h4",{className:"text-lg font-semibold text-gray-800",children:"输入框引用"}),e.jsxs("div",{className:"space-y-2",children:[e.jsx("input",{ref:a,type:"text",placeholder:"这是一个输入框",className:"w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"}),e.jsxs("div",{className:"flex gap-2",children:[e.jsx("button",{onClick:m,className:"px-3 py-1 bg-blue-500 text-white rounded hover:bg-blue-600 transition-colors",children:"聚焦输入框"}),e.jsx("button",{onClick:p,className:"px-3 py-1 bg-red-500 text-white rounded hover:bg-red-600 transition-colors",children:"清空输入框"})]})]})]}),e.jsxs("div",{className:"space-y-4",children:[e.jsx("h4",{className:"text-lg font-semibold text-gray-800",children:"文本区域引用"}),e.jsxs("div",{className:"space-y-2",children:[e.jsx("textarea",{ref:o,placeholder:"这是一个文本区域，可以输入多行文本",rows:3,className:"w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 resize-none",defaultValue:"这是一些示例文本\\n可以选中全部内容\\n试试点击下面的按钮"}),e.jsx("button",{onClick:g,className:"px-3 py-1 bg-green-500 text-white rounded hover:bg-green-600 transition-colors",children:"全选文本"})]})]})]}),e.jsxs("div",{className:"space-y-4",children:[e.jsx("h4",{className:"text-lg font-semibold text-gray-800",children:"滚动容器引用"}),e.jsx("div",{ref:n,className:"h-32 overflow-y-auto border border-gray-300 rounded-md p-4 bg-gray-50",children:e.jsx("div",{className:"space-y-2",children:Array.from({length:20},(b,s)=>e.jsxs("div",{className:"p-2 bg-white rounded border",children:["滚动项目 ",s+1," - 这是一个可滚动的容器，包含多个项目"]},s))})}),e.jsxs("div",{className:"flex gap-2",children:[e.jsx("button",{onClick:x,className:"px-3 py-1 bg-purple-500 text-white rounded hover:bg-purple-600 transition-colors",children:"滚动到顶部"}),e.jsx("button",{onClick:d,className:"px-3 py-1 bg-purple-500 text-white rounded hover:bg-purple-600 transition-colors",children:"滚动到底部"})]})]}),e.jsxs("div",{className:"space-y-4",children:[e.jsxs("div",{className:"flex justify-between items-center",children:[e.jsx("h4",{className:"text-lg font-semibold text-gray-800",children:"操作日志"}),e.jsx("button",{onClick:u,className:"px-3 py-1 bg-gray-500 text-white rounded hover:bg-gray-600 transition-colors text-sm",children:"清空日志"})]}),e.jsx("div",{className:"h-32 overflow-y-auto border border-gray-300 rounded-md p-3 bg-gray-50",children:i.length===0?e.jsx("p",{className:"text-gray-500 text-sm",children:"暂无操作日志"}):e.jsx("div",{className:"space-y-1",children:i.map((b,s)=>e.jsx("div",{className:"text-sm text-gray-700 font-mono",children:b},s))})})]}),e.jsx("div",{className:"mt-4 p-4 bg-blue-50 border border-blue-200 rounded-md",children:e.jsxs("p",{className:"text-sm text-blue-800",children:[e.jsx("strong",{children:"提示："}),"useRef 可以获取 DOM 元素的直接引用，允许我们调用原生 DOM 方法如 focus()、select()、scrollTo() 等。 这在需要命令式操作 DOM 时非常有用。"]})})]})},S=`import React, { useRef, useState } from 'react';

const DOMRefDemo: React.FC = () => {
  const inputRef = useRef<HTMLInputElement>(null);
  const textareaRef = useRef<HTMLTextAreaElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const [logs, setLogs] = useState<string[]>([]);

  const addLog = (message: string) => {
    const timestamp = new Date().toLocaleTimeString();
    setLogs(prev => [...prev, \`[\${timestamp}] \${message}\`]);
  };

  const focusInput = () => {
    if (inputRef.current) {
      inputRef.current.focus();
      addLog('输入框已聚焦');
    }
  };

  const clearInput = () => {
    if (inputRef.current) {
      inputRef.current.value = '';
      addLog('输入框已清空');
    }
  };

  const selectAllTextarea = () => {
    if (textareaRef.current) {
      textareaRef.current.select();
      addLog('文本区域已全选');
    }
  };

  const scrollToTop = () => {
    if (containerRef.current) {
      containerRef.current.scrollTop = 0;
      addLog('容器已滚动到顶部');
    }
  };

  const scrollToBottom = () => {
    if (containerRef.current) {
      containerRef.current.scrollTop = containerRef.current.scrollHeight;
      addLog('容器已滚动到底部');
    }
  };

  const clearLogs = () => {
    setLogs([]);
  };

  return (
    <div className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* 输入框操作 */}
        <div className="space-y-4">
          <h4 className="text-lg font-semibold text-gray-800">输入框引用</h4>
          <div className="space-y-2">
            <input
              ref={inputRef}
              type="text"
              placeholder="这是一个输入框"
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <div className="flex gap-2">
              <button
                onClick={focusInput}
                className="px-3 py-1 bg-blue-500 text-white rounded hover:bg-blue-600 transition-colors"
              >
                聚焦输入框
              </button>
              <button
                onClick={clearInput}
                className="px-3 py-1 bg-red-500 text-white rounded hover:bg-red-600 transition-colors"
              >
                清空输入框
              </button>
            </div>
          </div>
        </div>

        {/* 文本区域操作 */}
        <div className="space-y-4">
          <h4 className="text-lg font-semibold text-gray-800">文本区域引用</h4>
          <div className="space-y-2">
            <textarea
              ref={textareaRef}
              placeholder="这是一个文本区域，可以输入多行文本"
              rows={3}
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 resize-none"
              defaultValue="这是一些示例文本\\n可以选中全部内容\\n试试点击下面的按钮"
            />
            <button
              onClick={selectAllTextarea}
              className="px-3 py-1 bg-green-500 text-white rounded hover:bg-green-600 transition-colors"
            >
              全选文本
            </button>
          </div>
        </div>
      </div>

      {/* 滚动容器操作 */}
      <div className="space-y-4">
        <h4 className="text-lg font-semibold text-gray-800">滚动容器引用</h4>
        <div
          ref={containerRef}
          className="h-32 overflow-y-auto border border-gray-300 rounded-md p-4 bg-gray-50"
        >
          <div className="space-y-2">
            {Array.from({ length: 20 }, (_, i) => (
              <div key={i} className="p-2 bg-white rounded border">
                滚动项目 {i + 1} - 这是一个可滚动的容器，包含多个项目
              </div>
            ))}
          </div>
        </div>
        <div className="flex gap-2">
          <button
            onClick={scrollToTop}
            className="px-3 py-1 bg-purple-500 text-white rounded hover:bg-purple-600 transition-colors"
          >
            滚动到顶部
          </button>
          <button
            onClick={scrollToBottom}
            className="px-3 py-1 bg-purple-500 text-white rounded hover:bg-purple-600 transition-colors"
          >
            滚动到底部
          </button>
        </div>
      </div>

      {/* 操作日志 */}
      <div className="space-y-4">
        <div className="flex justify-between items-center">
          <h4 className="text-lg font-semibold text-gray-800">操作日志</h4>
          <button
            onClick={clearLogs}
            className="px-3 py-1 bg-gray-500 text-white rounded hover:bg-gray-600 transition-colors text-sm"
          >
            清空日志
          </button>
        </div>
        <div className="h-32 overflow-y-auto border border-gray-300 rounded-md p-3 bg-gray-50">
          {logs.length === 0 ? (
            <p className="text-gray-500 text-sm">暂无操作日志</p>
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

      <div className="mt-4 p-4 bg-blue-50 border border-blue-200 rounded-md">
        <p className="text-sm text-blue-800">
          <strong>提示：</strong>
          useRef 可以获取 DOM 元素的直接引用，允许我们调用原生 DOM 方法如 focus()、select()、scrollTo() 等。
          这在需要命令式操作 DOM 时非常有用。
        </p>
      </div>
    </div>
  );
};

export default DOMRefDemo;`,y=a=>{const o=t.useRef(),n=o.current;return t.useEffect(()=>{o.current=a}),n},I=()=>{const[a,o]=t.useState(0),[n,i]=t.useState("React"),[l,c]=t.useState([]),m=y(a),p=y(n),g=m!==void 0?a-m:0,x=p!==void 0?n.length-p.length:0,d=()=>{const r=a+1;o(r),c(h=>[...h,`计数器增加: ${a} → ${r} (变化: +1)`])},u=()=>{const r=a-1;o(r),c(h=>[...h,`计数器减少: ${a} → ${r} (变化: -1)`])},b=()=>{const r=n==="React"?"Reacts":"React";i(r);const h=r.length-n.length;c(v=>[...v,`名称变化: "${n}" → "${r}" (长度变化: ${h>=0?"+":""}${h})`])},s=()=>{o(0),i("React"),c([])};return e.jsx("div",{className:"min-h-screen bg-gray-50 p-6",children:e.jsxs("div",{className:"max-w-4xl mx-auto",children:[e.jsx("h1",{className:"text-3xl font-bold text-gray-800 mb-8",children:"前一个值追踪演示"}),e.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-6",children:[e.jsxs("div",{className:"bg-white p-6 rounded-lg shadow-md",children:[e.jsx("h2",{className:"text-xl font-semibold text-gray-700 mb-4",children:"计数器"}),e.jsxs("div",{className:"flex items-center justify-between mb-4",children:[e.jsxs("div",{className:"text-lg",children:[e.jsx("span",{className:"font-medium",children:"当前计数: "}),e.jsx("span",{className:"font-bold text-blue-600",children:a})]}),e.jsxs("div",{className:"text-lg",children:[e.jsx("span",{className:"font-medium",children:"前一个计数: "}),e.jsx("span",{className:"font-bold text-green-600",children:m!==void 0?m:"-"})]})]}),e.jsxs("div",{className:"text-lg mb-4",children:[e.jsx("span",{className:"font-medium",children:"变化值: "}),e.jsxs("span",{className:`font-bold ${g>0?"text-green-600":g<0?"text-red-600":"text-gray-600"}`,children:[g>0?"+":"",g]})]}),e.jsxs("div",{className:"flex space-x-3",children:[e.jsx("button",{onClick:d,className:"px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition",children:"增加"}),e.jsx("button",{onClick:u,className:"px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600 transition",children:"减少"})]})]}),e.jsxs("div",{className:"bg-white p-6 rounded-lg shadow-md",children:[e.jsx("h2",{className:"text-xl font-semibold text-gray-700 mb-4",children:"名称"}),e.jsxs("div",{className:"flex items-center justify-between mb-4",children:[e.jsxs("div",{className:"text-lg",children:[e.jsx("span",{className:"font-medium",children:"当前名称: "}),e.jsxs("span",{className:"font-bold text-blue-600",children:['"',n,'"']})]}),e.jsxs("div",{className:"text-lg",children:[e.jsx("span",{className:"font-medium",children:"前一个名称: "}),e.jsx("span",{className:"font-bold text-green-600",children:p!==void 0?`"${p}"`:"-"})]})]}),e.jsxs("div",{className:"text-lg mb-4",children:[e.jsx("span",{className:"font-medium",children:"当前长度: "}),e.jsx("span",{className:"font-bold text-blue-600",children:n.length})]}),e.jsxs("div",{className:"text-lg mb-4",children:[e.jsx("span",{className:"font-medium",children:"长度变化: "}),e.jsxs("span",{className:`font-bold ${x>0?"text-green-600":x<0?"text-red-600":"text-gray-600"}`,children:[x>0?"+":"",x]})]}),e.jsx("button",{onClick:b,className:"px-4 py-2 bg-purple-500 text-white rounded hover:bg-purple-600 transition",children:"切换名称"})]})]}),e.jsxs("div",{className:"mt-8 bg-white p-6 rounded-lg shadow-md",children:[e.jsxs("div",{className:"flex justify-between items-center mb-4",children:[e.jsx("h2",{className:"text-xl font-semibold text-gray-700",children:"变化日志"}),e.jsx("button",{onClick:s,className:"px-4 py-2 bg-gray-500 text-white rounded hover:bg-gray-600 transition",children:"重置"})]}),e.jsx("div",{className:"h-64 overflow-y-auto border border-gray-200 rounded p-4 bg-gray-50",children:l.length===0?e.jsx("p",{className:"text-gray-500 text-center py-8",children:"暂无变化记录"}):l.map((r,h)=>e.jsx("div",{className:"text-sm text-gray-700 bg-white p-3 rounded border border-gray-200 mb-2",children:r},h))})]})]})})},L=`import React, { useEffect, useRef, useState } from "react";

// 正确的 usePrevious Hook
const usePrevious = <T,>(value: T): T | undefined => {
  const ref = useRef<T>();

  // 在渲染期间保存当前 ref 的值
  const previousValue = ref.current;

  // 在渲染后更新 ref
  useEffect(() => {
    ref.current = value;
  });

  return previousValue;
};

const PreviousValueDemo: React.FC = () => {
  const [count, setCount] = useState<number>(0);
  const [name, setName] = useState<string>("React");
  const [logs, setLogs] = useState<string[]>([]);

  // 获取前一个值
  const prevCount = usePrevious(count);
  const prevName = usePrevious(name);

  // 计算变化值
  const countChange = prevCount !== undefined ? count - prevCount : 0;
  const nameLengthChange =
    prevName !== undefined ? name.length - prevName.length : 0;

  // 处理计数器增加
  const handleIncrement = () => {
    const newCount = count + 1;
    setCount(newCount);
    setLogs((prev) => [
      ...prev,
      \`计数器增加: \${count} → \${newCount} (变化: +1)\`,
    ]);
  };

  // 处理计数器减少
  const handleDecrement = () => {
    const newCount = count - 1;
    setCount(newCount);
    setLogs((prev) => [
      ...prev,
      \`计数器减少: \${count} → \${newCount} (变化: -1)\`,
    ]);
  };

  // 处理名称切换
  const toggleName = () => {
    const newName = name === "React" ? "Reacts" : "React";
    setName(newName);
    const lengthChange = newName.length - name.length;
    setLogs((prev) => [
      ...prev,
      \`名称变化: "\${name}" → "\${newName}" (长度变化: \${
        lengthChange >= 0 ? "+" : ""
      }\${lengthChange})\`,
    ]);
  };

  // 重置所有状态
  const handleReset = () => {
    setCount(0);
    setName("React");
    setLogs([]);
  };

  return (
    <div className="min-h-screen bg-gray-50 p-6">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl font-bold text-gray-800 mb-8">
          前一个值追踪演示
        </h1>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* 计数器部分 */}
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h2 className="text-xl font-semibold text-gray-700 mb-4">计数器</h2>

            <div className="flex items-center justify-between mb-4">
              <div className="text-lg">
                <span className="font-medium">当前计数: </span>
                <span className="font-bold text-blue-600">{count}</span>
              </div>
              <div className="text-lg">
                <span className="font-medium">前一个计数: </span>
                <span className="font-bold text-green-600">
                  {prevCount !== undefined ? prevCount : "-"}
                </span>
              </div>
            </div>

            <div className="text-lg mb-4">
              <span className="font-medium">变化值: </span>
              <span
                className={\`font-bold \${
                  countChange > 0
                    ? "text-green-600"
                    : countChange < 0
                    ? "text-red-600"
                    : "text-gray-600"
                }\`}
              >
                {countChange > 0 ? "+" : ""}
                {countChange}
              </span>
            </div>

            <div className="flex space-x-3">
              <button
                onClick={handleIncrement}
                className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition"
              >
                增加
              </button>
              <button
                onClick={handleDecrement}
                className="px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600 transition"
              >
                减少
              </button>
            </div>
          </div>

          {/* 名称部分 */}
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h2 className="text-xl font-semibold text-gray-700 mb-4">名称</h2>

            <div className="flex items-center justify-between mb-4">
              <div className="text-lg">
                <span className="font-medium">当前名称: </span>
                <span className="font-bold text-blue-600">"{name}"</span>
              </div>
              <div className="text-lg">
                <span className="font-medium">前一个名称: </span>
                <span className="font-bold text-green-600">
                  {prevName !== undefined ? \`"\${prevName}"\` : "-"}
                </span>
              </div>
            </div>

            <div className="text-lg mb-4">
              <span className="font-medium">当前长度: </span>
              <span className="font-bold text-blue-600">{name.length}</span>
            </div>

            <div className="text-lg mb-4">
              <span className="font-medium">长度变化: </span>
              <span
                className={\`font-bold \${
                  nameLengthChange > 0
                    ? "text-green-600"
                    : nameLengthChange < 0
                    ? "text-red-600"
                    : "text-gray-600"
                }\`}
              >
                {nameLengthChange > 0 ? "+" : ""}
                {nameLengthChange}
              </span>
            </div>

            <button
              onClick={toggleName}
              className="px-4 py-2 bg-purple-500 text-white rounded hover:bg-purple-600 transition"
            >
              切换名称
            </button>
          </div>
        </div>

        {/* 日志部分 */}
        <div className="mt-8 bg-white p-6 rounded-lg shadow-md">
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-xl font-semibold text-gray-700">变化日志</h2>
            <button
              onClick={handleReset}
              className="px-4 py-2 bg-gray-500 text-white rounded hover:bg-gray-600 transition"
            >
              重置
            </button>
          </div>

          <div className="h-64 overflow-y-auto border border-gray-200 rounded p-4 bg-gray-50">
            {logs.length === 0 ? (
              <p className="text-gray-500 text-center py-8">暂无变化记录</p>
            ) : (
              logs.map((log, index) => (
                <div
                  key={index}
                  className="text-sm text-gray-700 bg-white p-3 rounded border border-gray-200 mb-2"
                >
                  {log}
                </div>
              ))
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default PreviousValueDemo;
`,k=()=>{const[a,o]=t.useState(0),[n,i]=t.useState(!1),[l,c]=t.useState(!1),[m,p]=t.useState(0),[g,x]=t.useState([]),d=t.useRef(null),u=t.useRef(null),b=t.useRef(null),s=t.useRef(null),r=t.useRef(0),h=()=>{n||(i(!0),c(!1),b.current=Date.now(),x(f=>[...f,`计时器开始于 ${new Date().toLocaleTimeString()}`]),d.current=setInterval(()=>{o(f=>f+1)},1e3))},v=()=>{!n||l||(c(!0),s.current=Date.now(),p(0),d.current&&(clearInterval(d.current),d.current=null),x(f=>[...f,`计时器暂停于 ${new Date().toLocaleTimeString()}`]),u.current=setInterval(()=>{s.current&&p(Math.floor((Date.now()-s.current)/1e3))},1e3))},R=()=>{!n||!l||(c(!1),s.current&&(r.current+=Date.now()-s.current),u.current&&(clearInterval(u.current),u.current=null),x(f=>[...f,`计时器恢复于 ${new Date().toLocaleTimeString()}`]),d.current=setInterval(()=>{o(f=>f+1)},1e3))},j=()=>{if(!n)return;i(!1),c(!1),d.current&&(clearInterval(d.current),d.current=null),u.current&&(clearInterval(u.current),u.current=null);let f=0;b.current&&(f=Math.floor((Date.now()-b.current-r.current)/1e3)),x(N=>[...N,`计时器停止于 ${new Date().toLocaleTimeString()}，总运行时间: ${f}秒`]),o(0),p(0),b.current=null,s.current=null,r.current=0};t.useEffect(()=>()=>{d.current&&clearInterval(d.current),u.current&&clearInterval(u.current)},[]);const w=()=>n&&!l?"bg-green-500":l?"bg-yellow-500":"bg-red-500",C=()=>n&&!l?"运行中":l?"已暂停":"已停止";return e.jsxs("div",{className:"max-w-4xl mx-auto p-6 bg-white rounded-lg shadow-lg",children:[e.jsx("h1",{className:"text-3xl font-bold text-center mb-8 text-gray-800",children:"useRef 定时器管理演示"}),e.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-8",children:[e.jsxs("div",{className:"bg-gray-50 p-6 rounded-lg border border-gray-200",children:[e.jsx("h2",{className:"text-xl font-semibold mb-4 text-gray-700",children:"计时器控制"}),e.jsxs("div",{className:"flex items-center justify-center mb-6",children:[e.jsx("div",{className:"text-6xl font-bold text-blue-600",children:a}),e.jsxs("div",{className:"ml-4 flex flex-col items-center",children:[e.jsx("div",{className:`w-4 h-4 rounded-full ${w()} mb-1`}),e.jsx("span",{className:"text-sm text-gray-600",children:C()})]})]}),l&&e.jsxs("div",{className:"text-center mb-4 text-yellow-600 font-medium",children:["已暂停 ",m," 秒"]}),e.jsxs("div",{className:"grid grid-cols-2 gap-3",children:[e.jsx("button",{onClick:h,disabled:n,className:`py-2 px-4 rounded-md font-medium ${n?"bg-gray-300 text-gray-500 cursor-not-allowed":"bg-green-500 text-white hover:bg-green-600"}`,children:"开始"}),e.jsx("button",{onClick:v,disabled:!n||l,className:`py-2 px-4 rounded-md font-medium ${!n||l?"bg-gray-300 text-gray-500 cursor-not-allowed":"bg-yellow-500 text-white hover:bg-yellow-600"}`,children:"暂停"}),e.jsx("button",{onClick:R,disabled:!n||!l,className:`py-2 px-4 rounded-md font-medium ${!n||!l?"bg-gray-300 text-gray-500 cursor-not-allowed":"bg-blue-500 text-white hover:bg-blue-600"}`,children:"恢复"}),e.jsx("button",{onClick:j,disabled:!n,className:`py-2 px-4 rounded-md font-medium ${n?"bg-red-500 text-white hover:bg-red-600":"bg-gray-300 text-gray-500 cursor-not-allowed"}`,children:"停止"})]}),e.jsxs("div",{className:"mt-6 bg-blue-50 rounded-lg p-4 border border-blue-100",children:[e.jsx("h3",{className:"font-semibold text-blue-800 mb-2",children:"useRef 定时器管理要点："}),e.jsxs("ul",{className:"list-disc pl-5 space-y-1 text-blue-700",children:[e.jsx("li",{children:"在 useEffect 的清理函数中清理定时器"}),e.jsx("li",{children:"创建新定时器前先清理旧的"}),e.jsx("li",{children:"使用 ref 而不是 state 存储定时器 ID"}),e.jsx("li",{children:"检查 ref.current 是否存在再进行操作"})]})]})]}),e.jsxs("div",{className:"bg-gray-50 p-6 rounded-lg border border-gray-200",children:[e.jsx("h2",{className:"text-xl font-semibold mb-4 text-gray-700",children:"操作日志"}),e.jsx("div",{className:"h-80 overflow-y-auto bg-white p-4 rounded border border-gray-200",children:g.length===0?e.jsx("p",{className:"text-gray-500 text-center py-8",children:"暂无操作记录"}):e.jsx("ul",{className:"space-y-2",children:g.map((f,N)=>e.jsx("li",{className:"text-sm p-2 bg-gray-50 rounded border border-gray-100",children:f},N))})}),e.jsxs("div",{className:"mt-4 flex justify-between",children:[e.jsxs("span",{className:"text-sm text-gray-500",children:["共 ",g.length," 条记录"]}),e.jsx("button",{onClick:()=>x([]),disabled:g.length===0,className:`text-sm px-3 py-1 rounded ${g.length===0?"bg-gray-200 text-gray-400 cursor-not-allowed":"bg-gray-200 text-gray-600 hover:bg-gray-300"}`,children:"清空日志"})]})]})]})]})},$=`import React, { useEffect, useRef, useState } from "react";

const TimerRefDemo: React.FC = () => {
  const [count, setCount] = useState(0);
  const [isRunning, setIsRunning] = useState(false);
  const [isPaused, setIsPaused] = useState(false);
  const [pausedDuration, setPausedDuration] = useState(0);
  const [logs, setLogs] = useState<string[]>([]);
  const intervalRef = useRef<NodeJS.Timeout | null>(null);
  const pauseIntervalRef = useRef<NodeJS.Timeout | null>(null);
  const startTimeRef = useRef<number | null>(null);
  const pausedTimeRef = useRef<number | null>(null);
  const totalPausedTimeRef = useRef<number>(0);

  // 开始计时器
  const startTimer = () => {
    if (isRunning) return;

    setIsRunning(true);
    setIsPaused(false);
    startTimeRef.current = Date.now();

    setLogs((prev) => [
      ...prev,
      \`计时器开始于 \${new Date().toLocaleTimeString()}\`,
    ]);

    intervalRef.current = setInterval(() => {
      setCount((prev) => prev + 1);
    }, 1000);
  };

  // 暂停计时器
  const pauseTimer = () => {
    if (!isRunning || isPaused) return;

    setIsPaused(true);
    pausedTimeRef.current = Date.now();
    setPausedDuration(0);

    if (intervalRef.current) {
      clearInterval(intervalRef.current);
      intervalRef.current = null;
    }

    setLogs((prev) => [
      ...prev,
      \`计时器暂停于 \${new Date().toLocaleTimeString()}\`,
    ]);

    // 启动暂停计时器
    pauseIntervalRef.current = setInterval(() => {
      if (pausedTimeRef.current) {
        setPausedDuration(
          Math.floor((Date.now() - pausedTimeRef.current) / 1000)
        );
      }
    }, 1000);
  };

  // 恢复计时器
  const resumeTimer = () => {
    if (!isRunning || !isPaused) return;

    setIsPaused(false);

    if (pausedTimeRef.current) {
      totalPausedTimeRef.current += Date.now() - pausedTimeRef.current;
    }

    if (pauseIntervalRef.current) {
      clearInterval(pauseIntervalRef.current);
      pauseIntervalRef.current = null;
    }

    setLogs((prev) => [
      ...prev,
      \`计时器恢复于 \${new Date().toLocaleTimeString()}\`,
    ]);

    intervalRef.current = setInterval(() => {
      setCount((prev) => prev + 1);
    }, 1000);
  };

  // 停止计时器
  const stopTimer = () => {
    if (!isRunning) return;

    setIsRunning(false);
    setIsPaused(false);

    if (intervalRef.current) {
      clearInterval(intervalRef.current);
      intervalRef.current = null;
    }

    if (pauseIntervalRef.current) {
      clearInterval(pauseIntervalRef.current);
      pauseIntervalRef.current = null;
    }

    let totalRunTime = 0;
    if (startTimeRef.current) {
      totalRunTime = Math.floor(
        (Date.now() - startTimeRef.current - totalPausedTimeRef.current) / 1000
      );
    }

    setLogs((prev) => [
      ...prev,
      \`计时器停止于 \${new Date().toLocaleTimeString()}，总运行时间: \${totalRunTime}秒\`,
    ]);

    // 重置状态
    setCount(0);
    setPausedDuration(0);
    startTimeRef.current = null;
    pausedTimeRef.current = null;
    totalPausedTimeRef.current = 0;
  };

  // 清理所有定时器
  useEffect(() => {
    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current);
      if (pauseIntervalRef.current) clearInterval(pauseIntervalRef.current);
    };
  }, []);

  // 获取状态指示灯颜色
  const getStatusColor = () => {
    if (isRunning && !isPaused) return "bg-green-500";
    if (isPaused) return "bg-yellow-500";
    return "bg-red-500";
  };

  // 获取状态文本
  const getStatusText = () => {
    if (isRunning && !isPaused) return "运行中";
    if (isPaused) return "已暂停";
    return "已停止";
  };

  return (
    <div className="max-w-4xl mx-auto p-6 bg-white rounded-lg shadow-lg">
      <h1 className="text-3xl font-bold text-center mb-8 text-gray-800">
        useRef 定时器管理演示
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* 左侧：计时器控制面板 */}
        <div className="bg-gray-50 p-6 rounded-lg border border-gray-200">
          <h2 className="text-xl font-semibold mb-4 text-gray-700">
            计时器控制
          </h2>

          <div className="flex items-center justify-center mb-6">
            <div className="text-6xl font-bold text-blue-600">{count}</div>
            <div className="ml-4 flex flex-col items-center">
              <div
                className={\`w-4 h-4 rounded-full \${getStatusColor()} mb-1\`}
              ></div>
              <span className="text-sm text-gray-600">{getStatusText()}</span>
            </div>
          </div>

          {isPaused && (
            <div className="text-center mb-4 text-yellow-600 font-medium">
              已暂停 {pausedDuration} 秒
            </div>
          )}

          <div className="grid grid-cols-2 gap-3">
            <button
              onClick={startTimer}
              disabled={isRunning}
              className={\`py-2 px-4 rounded-md font-medium \${
                isRunning
                  ? "bg-gray-300 text-gray-500 cursor-not-allowed"
                  : "bg-green-500 text-white hover:bg-green-600"
              }\`}
            >
              开始
            </button>

            <button
              onClick={pauseTimer}
              disabled={!isRunning || isPaused}
              className={\`py-2 px-4 rounded-md font-medium \${
                !isRunning || isPaused
                  ? "bg-gray-300 text-gray-500 cursor-not-allowed"
                  : "bg-yellow-500 text-white hover:bg-yellow-600"
              }\`}
            >
              暂停
            </button>

            <button
              onClick={resumeTimer}
              disabled={!isRunning || !isPaused}
              className={\`py-2 px-4 rounded-md font-medium \${
                !isRunning || !isPaused
                  ? "bg-gray-300 text-gray-500 cursor-not-allowed"
                  : "bg-blue-500 text-white hover:bg-blue-600"
              }\`}
            >
              恢复
            </button>

            <button
              onClick={stopTimer}
              disabled={!isRunning}
              className={\`py-2 px-4 rounded-md font-medium \${
                !isRunning
                  ? "bg-gray-300 text-gray-500 cursor-not-allowed"
                  : "bg-red-500 text-white hover:bg-red-600"
              }\`}
            >
              停止
            </button>
          </div>

          <div className="mt-6 bg-blue-50 rounded-lg p-4 border border-blue-100">
            <h3 className="font-semibold text-blue-800 mb-2">
              useRef 定时器管理要点：
            </h3>
            <ul className="list-disc pl-5 space-y-1 text-blue-700">
              <li>在 useEffect 的清理函数中清理定时器</li>
              <li>创建新定时器前先清理旧的</li>
              <li>使用 ref 而不是 state 存储定时器 ID</li>
              <li>检查 ref.current 是否存在再进行操作</li>
            </ul>
          </div>
        </div>

        {/* 右侧：操作日志 */}
        <div className="bg-gray-50 p-6 rounded-lg border border-gray-200">
          <h2 className="text-xl font-semibold mb-4 text-gray-700">操作日志</h2>

          <div className="h-80 overflow-y-auto bg-white p-4 rounded border border-gray-200">
            {logs.length === 0 ? (
              <p className="text-gray-500 text-center py-8">暂无操作记录</p>
            ) : (
              <ul className="space-y-2">
                {logs.map((log, index) => (
                  <li
                    key={index}
                    className="text-sm p-2 bg-gray-50 rounded border border-gray-100"
                  >
                    {log}
                  </li>
                ))}
              </ul>
            )}
          </div>

          <div className="mt-4 flex justify-between">
            <span className="text-sm text-gray-500">
              共 {logs.length} 条记录
            </span>
            <button
              onClick={() => setLogs([])}
              disabled={logs.length === 0}
              className={\`text-sm px-3 py-1 rounded \${
                logs.length === 0
                  ? "bg-gray-200 text-gray-400 cursor-not-allowed"
                  : "bg-gray-200 text-gray-600 hover:bg-gray-300"
              }\`}
            >
              清空日志
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TimerRefDemo;
`,P=()=>{const[a,o]=t.useState(0),n=t.useRef(0),i=t.useRef(0),[l,c]=t.useState([]);n.current+=1;const m=s=>{const r=new Date().toLocaleTimeString();c(h=>[...h,`[${r}] ${s}`])},p=()=>{o(s=>s+1),m(`状态计数增加到 ${a+1}，组件将重新渲染`)},g=()=>{i.current+=1,m(`ref 计数增加到 ${i.current}，组件不会重新渲染`)},x=()=>{m(`当前 ref 值: ${i.current}`)},d=()=>{o(i.current),m(`将 ref 值 ${i.current} 同步到状态`)},u=()=>{o(0),i.current=0,n.current=0,m("重置所有计数器")},b=()=>{c([])};return e.jsxs("div",{className:"space-y-6",children:[e.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-6",children:[e.jsxs("div",{className:"space-y-4",children:[e.jsx("h4",{className:"text-lg font-semibold text-gray-800",children:"useState 计数器"}),e.jsxs("div",{className:"p-4 bg-blue-50 border border-blue-200 rounded-md",children:[e.jsxs("div",{className:"text-2xl font-bold text-blue-800 mb-2",children:["状态值: ",a]}),e.jsxs("div",{className:"text-sm text-blue-600",children:["渲染次数: ",n.current]}),e.jsx("button",{onClick:p,className:"mt-3 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition-colors",children:"增加状态计数 (触发渲染)"})]})]}),e.jsxs("div",{className:"space-y-4",children:[e.jsx("h4",{className:"text-lg font-semibold text-gray-800",children:"useRef 计数器"}),e.jsxs("div",{className:"p-4 bg-green-50 border border-green-200 rounded-md",children:[e.jsxs("div",{className:"text-2xl font-bold text-green-800 mb-2",children:["Ref 值: ",i.current]}),e.jsx("div",{className:"text-sm text-green-600",children:"不触发重新渲染"}),e.jsxs("div",{className:"mt-3 space-x-2",children:[e.jsx("button",{onClick:g,className:"px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600 transition-colors",children:"增加 ref 计数"}),e.jsx("button",{onClick:x,className:"px-4 py-2 bg-yellow-500 text-white rounded hover:bg-yellow-600 transition-colors",children:"显示 ref 值"})]})]})]})]}),e.jsxs("div",{className:"flex flex-wrap gap-2",children:[e.jsx("button",{onClick:d,className:"px-4 py-2 bg-purple-500 text-white rounded hover:bg-purple-600 transition-colors",children:"同步 ref 到状态"}),e.jsx("button",{onClick:u,className:"px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600 transition-colors",children:"重置所有"}),e.jsx("button",{onClick:b,className:"px-4 py-2 bg-gray-500 text-white rounded hover:bg-gray-600 transition-colors",children:"清空日志"})]}),e.jsxs("div",{className:"space-y-4",children:[e.jsx("h4",{className:"text-lg font-semibold text-gray-800",children:"操作日志"}),e.jsx("div",{className:"h-40 overflow-y-auto border border-gray-300 rounded-md p-3 bg-gray-50",children:l.length===0?e.jsx("p",{className:"text-gray-500 text-sm",children:"暂无操作日志"}):e.jsx("div",{className:"space-y-1",children:l.map((s,r)=>e.jsx("div",{className:"text-sm text-gray-700 font-mono",children:s},r))})})]}),e.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-4",children:[e.jsxs("div",{className:"p-4 bg-blue-50 border border-blue-200 rounded-md",children:[e.jsx("h5",{className:"font-semibold text-blue-800 mb-2",children:"useState 特点"}),e.jsxs("ul",{className:"text-sm text-blue-700 space-y-1",children:[e.jsx("li",{children:"• 状态变化会触发组件重新渲染"}),e.jsx("li",{children:"• 适合存储影响 UI 的数据"}),e.jsx("li",{children:"• 每次渲染都会获得最新值"}),e.jsx("li",{children:"• 异步更新，可能有延迟"})]})]}),e.jsxs("div",{className:"p-4 bg-green-50 border border-green-200 rounded-md",children:[e.jsx("h5",{className:"font-semibold text-green-800 mb-2",children:"useRef 特点"}),e.jsxs("ul",{className:"text-sm text-green-700 space-y-1",children:[e.jsx("li",{children:"• 值变化不会触发重新渲染"}),e.jsx("li",{children:"• 适合存储不影响 UI 的数据"}),e.jsx("li",{children:"• 在渲染间保持引用稳定"}),e.jsx("li",{children:"• 同步更新，立即生效"})]})]})]}),e.jsx("div",{className:"mt-4 p-4 bg-yellow-50 border border-yellow-200 rounded-md",children:e.jsxs("p",{className:"text-sm text-yellow-800",children:[e.jsx("strong",{children:"重要提示："}),"useRef 存储的值变化不会触发重新渲染，所以在界面上看到的 ref 值可能不是最新的。 只有当组件因其他原因重新渲染时，才会显示 ref 的最新值。"]})})]})},M=`import React, { useRef, useState } from "react";

const ValueStorageDemo: React.FC = () => {
  const [stateCount, setStateCount] = useState(0);
  const renderCountRef = useRef(0);
  const refCount = useRef(0);
  const [logs, setLogs] = useState<string[]>([]);

  // 每次渲染时增加渲染计数（使用 ref 避免死循环）
  renderCountRef.current += 1;

  const addLog = (message: string) => {
    const timestamp = new Date().toLocaleTimeString();
    setLogs((prev) => [...prev, \`[\${timestamp}] \${message}\`]);
  };

  const incrementState = () => {
    setStateCount((prev) => prev + 1);
    addLog(\`状态计数增加到 \${stateCount + 1}，组件将重新渲染\`);
  };

  const incrementRef = () => {
    refCount.current += 1;
    addLog(\`ref 计数增加到 \${refCount.current}，组件不会重新渲染\`);
  };

  const showRefValue = () => {
    addLog(\`当前 ref 值: \${refCount.current}\`);
  };

  const syncRefToState = () => {
    setStateCount(refCount.current);
    addLog(\`将 ref 值 \${refCount.current} 同步到状态\`);
  };

  const resetAll = () => {
    setStateCount(0);
    refCount.current = 0;
    renderCountRef.current = 0;
    addLog("重置所有计数器");
  };

  const clearLogs = () => {
    setLogs([]);
  };

  return (
    <div className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* 状态计数器 */}
        <div className="space-y-4">
          <h4 className="text-lg font-semibold text-gray-800">
            useState 计数器
          </h4>
          <div className="p-4 bg-blue-50 border border-blue-200 rounded-md">
            <div className="text-2xl font-bold text-blue-800 mb-2">
              状态值: {stateCount}
            </div>
            <div className="text-sm text-blue-600">
              渲染次数: {renderCountRef.current}
            </div>
            <button
              onClick={incrementState}
              className="mt-3 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition-colors"
            >
              增加状态计数 (触发渲染)
            </button>
          </div>
        </div>

        {/* Ref 计数器 */}
        <div className="space-y-4">
          <h4 className="text-lg font-semibold text-gray-800">useRef 计数器</h4>
          <div className="p-4 bg-green-50 border border-green-200 rounded-md">
            <div className="text-2xl font-bold text-green-800 mb-2">
              Ref 值: {refCount.current}
            </div>
            <div className="text-sm text-green-600">不触发重新渲染</div>
            <div className="mt-3 space-x-2">
              <button
                onClick={incrementRef}
                className="px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600 transition-colors"
              >
                增加 ref 计数
              </button>
              <button
                onClick={showRefValue}
                className="px-4 py-2 bg-yellow-500 text-white rounded hover:bg-yellow-600 transition-colors"
              >
                显示 ref 值
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* 操作按钮 */}
      <div className="flex flex-wrap gap-2">
        <button
          onClick={syncRefToState}
          className="px-4 py-2 bg-purple-500 text-white rounded hover:bg-purple-600 transition-colors"
        >
          同步 ref 到状态
        </button>
        <button
          onClick={resetAll}
          className="px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600 transition-colors"
        >
          重置所有
        </button>
        <button
          onClick={clearLogs}
          className="px-4 py-2 bg-gray-500 text-white rounded hover:bg-gray-600 transition-colors"
        >
          清空日志
        </button>
      </div>

      {/* 操作日志 */}
      <div className="space-y-4">
        <h4 className="text-lg font-semibold text-gray-800">操作日志</h4>
        <div className="h-40 overflow-y-auto border border-gray-300 rounded-md p-3 bg-gray-50">
          {logs.length === 0 ? (
            <p className="text-gray-500 text-sm">暂无操作日志</p>
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

      {/* 对比说明 */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="p-4 bg-blue-50 border border-blue-200 rounded-md">
          <h5 className="font-semibold text-blue-800 mb-2">useState 特点</h5>
          <ul className="text-sm text-blue-700 space-y-1">
            <li>• 状态变化会触发组件重新渲染</li>
            <li>• 适合存储影响 UI 的数据</li>
            <li>• 每次渲染都会获得最新值</li>
            <li>• 异步更新，可能有延迟</li>
          </ul>
        </div>
        <div className="p-4 bg-green-50 border border-green-200 rounded-md">
          <h5 className="font-semibold text-green-800 mb-2">useRef 特点</h5>
          <ul className="text-sm text-green-700 space-y-1">
            <li>• 值变化不会触发重新渲染</li>
            <li>• 适合存储不影响 UI 的数据</li>
            <li>• 在渲染间保持引用稳定</li>
            <li>• 同步更新，立即生效</li>
          </ul>
        </div>
      </div>

      <div className="mt-4 p-4 bg-yellow-50 border border-yellow-200 rounded-md">
        <p className="text-sm text-yellow-800">
          <strong>重要提示：</strong>
          useRef 存储的值变化不会触发重新渲染，所以在界面上看到的 ref
          值可能不是最新的。 只有当组件因其他原因重新渲染时，才会显示 ref
          的最新值。
        </p>
      </div>
    </div>
  );
};

export default ValueStorageDemo;
`,V=()=>e.jsx(T,{title:"useRef Hook",description:"useRef 是 React 提供的一个 Hook，用于创建可变的引用对象，主要用于访问 DOM 元素、存储不触发重新渲染的值，以及在组件渲染间保持数据引用。",overview:e.jsx("div",{className:"space-y-4",children:e.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-6",children:[e.jsxs("div",{className:"bg-blue-50 p-4 rounded-lg border border-blue-200",children:[e.jsx("h3",{className:"font-semibold text-blue-800 mb-2",children:"🎯 核心概念"}),e.jsxs("ul",{className:"text-sm text-blue-700 space-y-1",children:[e.jsx("li",{children:"• 可变引用对象"}),e.jsx("li",{children:"• DOM 元素访问"}),e.jsx("li",{children:"• 值存储不触发渲染"}),e.jsx("li",{children:"• 引用稳定性保证"})]})]}),e.jsxs("div",{className:"bg-green-50 p-4 rounded-lg border border-green-200",children:[e.jsx("h3",{className:"font-semibold text-green-800 mb-2",children:"✨ 主要优势"}),e.jsxs("ul",{className:"text-sm text-green-700 space-y-1",children:[e.jsx("li",{children:"• 直接 DOM 操作"}),e.jsx("li",{children:"• 性能优化不触发渲染"}),e.jsx("li",{children:"• 数据持久化保存"}),e.jsx("li",{children:"• 资源管理便捷"})]})]}),e.jsxs("div",{className:"bg-yellow-50 p-4 rounded-lg border border-yellow-200",children:[e.jsx("h3",{className:"font-semibold text-yellow-800 mb-2",children:"🎪 适用场景"}),e.jsxs("ul",{className:"text-sm text-yellow-700 space-y-1",children:[e.jsx("li",{children:"• DOM 元素操作"}),e.jsx("li",{children:"• 定时器资源存储"}),e.jsx("li",{children:"• 前值追踪保持"}),e.jsx("li",{children:"• 第三方库实例"})]})]}),e.jsxs("div",{className:"bg-red-50 p-4 rounded-lg border border-red-200",children:[e.jsx("h3",{className:"font-semibold text-red-800 mb-2",children:"⚠️ 注意事项"}),e.jsxs("ul",{className:"text-sm text-red-700 space-y-1",children:[e.jsx("li",{children:"• 修改不触发渲染"}),e.jsx("li",{children:"• 避免渲染期间操作"}),e.jsx("li",{children:"• 手动管理资源清理"}),e.jsx("li",{children:"• 检查引用存在性"})]})]})]})}),examples:[{title:"DOM 引用操作",component:e.jsx(D,{}),description:"演示如何使用 useRef 获取 DOM 元素引用，并调用原生 DOM 方法进行操作",observationPoints:['点击"聚焦输入框"按钮，观察输入框获得焦点','点击"清空输入框"按钮，观察输入框内容被清空','点击"全选文本"按钮，观察文本区域内容被全选',"点击滚动按钮，观察容器的滚动行为","查看操作日志了解每次 DOM 操作的执行情况"],keyPoints:["useRef 可以获取 DOM 元素的直接引用","通过 ref.current 访问 DOM 元素","可以调用原生 DOM 方法如 focus()、select()、scrollTo()","适合需要命令式操作 DOM 的场景"],commonTraps:["忘记检查 ref.current 是否存在","在组件渲染期间操作 DOM","过度使用 ref 进行 DOM 操作而忽略声明式方式"],solutions:["始终检查 ref.current 的存在性","在事件处理器中进行 DOM 操作","优先使用 React 的声明式方式，只在必要时使用 ref"],codeExample:{code:S,highlights:[8,15,22],title:"useRef DOM 引用操作实现"}},{title:"值存储对比",component:e.jsx(P,{}),description:"对比 useState 和 useRef 在值存储方面的差异，理解何时使用 ref",observationPoints:['点击"增加状态计数"按钮，观察组件重新渲染和渲染次数增加','点击"增加 ref 计数"按钮，观察 ref 值变化但组件不重新渲染','点击"显示 ref 值"按钮，在控制台查看当前 ref 值','点击"同步 ref 到状态"按钮，观察 ref 值同步到状态并触发渲染',"注意渲染次数的变化规律"],keyPoints:["useState 的状态变化会触发组件重新渲染","useRef 的值变化不会触发重新渲染","ref 适合存储不影响 UI 的数据","可以通过状态更新来显示 ref 的最新值"],commonTraps:["期望修改 ref 后 UI 自动更新","在需要触发渲染的场景使用 ref","忘记 ref 值变化不会反映在 UI 上"],solutions:["理解 ref 和 state 的不同用途","需要 UI 更新时使用 useState","通过状态更新来同步显示 ref 值"],codeExample:{code:M,highlights:[10,18,25],title:"useRef 值存储对比实现"}},{title:"前一个值追踪",component:e.jsx(I,{}),description:"演示如何使用 useRef 追踪状态的前一个值，实现值变化的对比",observationPoints:["修改计数器值，观察前一个值的显示","修改名称输入，观察名称变化的追踪","查看变化日志了解值的变化过程","注意自定义 Hook 如何简化前值追踪逻辑"],keyPoints:["useRef 可以在渲染间保持数据引用","结合 useEffect 可以追踪值的变化","可以封装成自定义 Hook 复用逻辑","适合实现值变化的对比和动画"],commonTraps:["在渲染期间更新 ref 值","忘记在 useEffect 中更新前值","过度使用前值追踪影响性能"],solutions:["在 useEffect 中更新 ref 值","使用自定义 Hook 封装逻辑","只在必要时追踪前值"],codeExample:{code:L,highlights:[12,20,28],title:"useRef 前一个值追踪实现"}},{title:"定时器引用管理",component:e.jsx(k,{}),description:"演示如何使用 useRef 管理定时器引用，确保正确的资源清理",observationPoints:["点击开始按钮启动定时器，观察计数自动增加","点击停止按钮停止定时器，观察计数停止变化","点击重置按钮重置计数器和定时器状态","注意按钮的启用/禁用状态变化","查看操作日志了解定时器的生命周期"],keyPoints:["useRef 可以存储定时器 ID 等引用","在组件卸载时需要清理定时器","ref 在组件重新渲染时保持引用稳定","适合管理需要手动清理的资源"],commonTraps:["忘记清理定时器导致内存泄漏","在状态中存储定时器 ID","重复创建定时器而不清理旧的"],solutions:["使用 useRef 存储定时器 ID","在 useEffect 清理函数中清理定时器","在创建新定时器前清理旧的"],codeExample:{code:$,highlights:[14,22,30],title:"useRef 定时器引用管理实现"}}],tutorial:{concepts:["useRef 的基本语法和返回值结构","DOM 引用的创建和使用方法","ref 与 state 在值存储方面的区别","使用 ref 追踪前一个值的技巧","ref 在资源管理中的应用场景"],steps:["从 React 中导入 useRef Hook","调用 useRef 创建引用对象并设置初始值","将 ref 对象绑定到 JSX 元素或存储值","通过 ref.current 访问和修改引用的值","在适当的时机清理 ref 中的资源","结合其他 Hook 实现复杂的引用逻辑"],tips:["使用 TypeScript 为 ref 定义准确的类型","始终检查 ref.current 是否存在再使用","避免在渲染期间读写 ref.current","使用自定义 Hook 封装常用的 ref 逻辑","在组件卸载时清理 ref 中的资源引用"]},interview:{questions:[{question:"useRef 和 useState 有什么区别？",answer:"useRef 返回一个可变的引用对象，修改 ref.current 不会触发组件重新渲染，适合存储不影响渲染的数据。useState 返回状态值和更新函数，状态变化会触发重新渲染，适合存储影响 UI 的数据。"},{question:"什么时候应该使用 useRef？",answer:"1) 需要直接访问 DOM 元素时；2) 存储不需要触发重新渲染的值时；3) 保存定时器、订阅等需要清理的资源引用时；4) 追踪前一个值或在渲染间保持数据引用时。"},{question:"如何正确清理 useRef 中的资源？",answer:"在 useEffect 的清理函数中清理资源，比如 clearInterval、removeEventListener 等。确保在组件卸载时清理所有通过 ref 存储的资源引用，防止内存泄漏。"},{question:"为什么不能在渲染期间修改 ref.current？",answer:"渲染函数应该是纯函数，不应该有副作用。在渲染期间修改 ref 可能导致不一致的行为和难以调试的问题。应该在事件处理器或 useEffect 中修改 ref.current。"}],keyPoints:["useRef 创建可变的引用对象","ref.current 的修改不会触发重新渲染","适合 DOM 操作和资源管理","在渲染间保持数据引用的稳定性","需要手动管理资源的清理"]},bestPractices:{dos:["为 ref 定义准确的 TypeScript 类型","在访问 ref.current 前检查其存在性","在事件处理器或 useEffect 中修改 ref","使用 ref 管理需要清理的资源","创建自定义 Hook 封装常用的 ref 逻辑","在组件卸载时清理 ref 中的资源"],donts:["不要在渲染期间读写 ref.current","不要期望修改 ref 后组件自动更新","不要忘记清理 ref 中的资源引用","不要将应该用 state 的数据存储在 ref 中","不要过度依赖 ref 进行组件通信"],patterns:["DOM 引用模式：直接操作 DOM 元素","资源管理模式：存储和清理外部资源","前值追踪模式：比较状态变化","实例存储模式：保存第三方库实例"]}});export{V as default};
