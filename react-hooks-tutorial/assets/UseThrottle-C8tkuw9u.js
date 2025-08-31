import{r as t,j as e}from"./index-DPG_OKoV.js";import{C as A}from"./ComponentTemplate-HXLvd6Xe.js";function D(r,g){const[m,y]=t.useState(r),n=t.useRef(0),h=t.useRef(null);return t.useEffect(()=>{const o=Date.now(),u=o-n.current;if(u>=g)y(r),n.current=o;else{h.current&&clearTimeout(h.current);const s=g-u;h.current=setTimeout(()=>{y(r),n.current=Date.now(),h.current=null},s)}return()=>{h.current&&clearTimeout(h.current)}},[r,g]),m}function Y(r,g,m={}){const[y,n]=t.useState(r),[h,o]=t.useState(!1),u=t.useRef(0),s=t.useRef(null),i=t.useRef(r),c=t.useRef(!1),{leading:p=!0,trailing:N=!0}=m,b=t.useCallback(v=>{n(v),u.current=Date.now(),o(!1)},[]),f=t.useCallback(()=>{s.current&&(clearTimeout(s.current),s.current=null),c.current=!1,o(!1)},[]),j=t.useCallback(()=>{s.current&&(clearTimeout(s.current),s.current=null,c.current&&b(i.current)),c.current=!1},[b]);return t.useEffect(()=>{i.current=r;const x=Date.now()-u.current;if(s.current&&(clearTimeout(s.current),s.current=null),!(!p&&!N)){if(u.current===0||x>=g)p?(b(r),c.current=!1,N&&(o(!0),c.current=!0)):N&&(o(!0),c.current=!0,s.current=setTimeout(()=>{c.current&&b(i.current),c.current=!1,s.current=null},g));else if(o(!0),N){c.current=!0;const d=g-x;s.current=setTimeout(()=>{c.current&&b(i.current),c.current=!1,s.current=null},Math.max(d,0))}return()=>{s.current&&clearTimeout(s.current)}}},[r,g,p,N,b]),{throttledValue:y,isThrottling:h,cancel:f,flush:j}}const V=()=>{const[r,g]=t.useState(""),[m,y]=t.useState(1e3),[n,h]=t.useState(!0),[o,u]=t.useState(!0),{throttledValue:s,isThrottling:i,cancel:c,flush:p}=Y(r,m,{leading:n,trailing:o}),[N,b]=t.useState([]),[f,j]=t.useState([]),v=l=>{const S=new Date().toLocaleTimeString();b(L=>[...L.slice(-9),`${S}: ${l}`])},x=l=>{const S=new Date().toLocaleTimeString();j(L=>[...L.slice(-9),`${S}: ${l}`])};t.useEffect(()=>{s!=null&&x(`API调用: 处理 "${s}"`)},[s]);const d=l=>{g(l),v(`输入: "${l}"`)},w=()=>{c(),v("取消节流")},k=()=>{p(),v("立即执行节流")},a=l=>{y(l),v(`延迟改为: ${l}ms`)},C=l=>{h(l),v(`${l?"启用":"禁用"}前缘执行`)},T=l=>{u(l),v(`${l?"启用":"禁用"}后缘执行`)},E=()=>{g(""),c(),v("清空所有内容"),setTimeout(()=>{b([]),j([])},100)},$=()=>{b([]),j([])};return e.jsxs("div",{className:"p-6 bg-white rounded-lg border border-gray-200",children:[e.jsxs("div",{className:"flex items-center justify-between mb-4",children:[e.jsx("h3",{className:"text-lg font-semibold text-gray-800",children:"高级节流演示"}),e.jsxs("div",{className:"space-x-2",children:[e.jsx("button",{onClick:w,disabled:!i,className:"px-3 py-1 bg-orange-500 text-white rounded text-sm hover:bg-orange-600 disabled:opacity-50 disabled:cursor-not-allowed transition-colors",children:"取消节流"}),e.jsx("button",{onClick:k,disabled:!i,className:"px-3 py-1 bg-green-500 text-white rounded text-sm hover:bg-green-600 disabled:opacity-50 disabled:cursor-not-allowed transition-colors",children:"立即执行"}),e.jsx("button",{onClick:E,className:"px-3 py-1 bg-red-500 text-white rounded text-sm hover:bg-red-600 transition-colors",children:"清空所有"}),e.jsx("button",{onClick:$,className:"px-3 py-1 bg-gray-500 text-white rounded text-sm hover:bg-gray-600 transition-colors",children:"清空日志"})]})]}),e.jsxs("div",{className:"grid grid-cols-1 lg:grid-cols-2 gap-6",children:[e.jsxs("div",{className:"space-y-4",children:[e.jsxs("div",{children:[e.jsx("label",{className:"block text-sm font-medium text-gray-700 mb-2",children:"输入内容:"}),e.jsx("input",{type:"text",value:r,onChange:l=>d(l.target.value),placeholder:"输入内容测试节流...",className:"w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"}),e.jsxs("div",{className:"flex items-center justify-between mt-1",children:[e.jsxs("p",{className:"text-sm text-gray-600",children:['当前输入: "',r,'"']}),e.jsxs("div",{className:`flex items-center space-x-2 px-2 py-1 rounded text-xs ${i?"bg-yellow-100 text-yellow-800":"bg-green-100 text-green-800"}`,children:[e.jsx("div",{className:`w-2 h-2 rounded-full ${i?"bg-yellow-500 animate-pulse":"bg-green-500"}`}),e.jsx("span",{children:i?"节流中":"可执行"})]})]})]}),e.jsxs("div",{children:[e.jsxs("label",{className:"block text-sm font-medium text-gray-700 mb-2",children:["节流间隔: ",m,"ms"]}),e.jsx("input",{type:"range",min:"200",max:"3000",step:"200",value:m,onChange:l=>a(Number(l.target.value)),className:"w-full"}),e.jsxs("div",{className:"flex justify-between text-xs text-gray-500 mt-1",children:[e.jsx("span",{children:"200ms"}),e.jsx("span",{children:"1500ms"}),e.jsx("span",{children:"3000ms"})]})]}),e.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-4",children:[e.jsxs("label",{className:"flex items-center space-x-2",children:[e.jsx("input",{type:"checkbox",checked:n,onChange:l=>C(l.target.checked),className:"text-blue-500 focus:ring-blue-500"}),e.jsx("span",{className:"text-sm text-gray-700",children:"前缘执行 (立即执行第一次)"})]}),e.jsxs("label",{className:"flex items-center space-x-2",children:[e.jsx("input",{type:"checkbox",checked:o,onChange:l=>T(l.target.checked),className:"text-blue-500 focus:ring-blue-500"}),e.jsx("span",{className:"text-sm text-gray-700",children:"后缘执行 (间隔后执行)"})]})]}),e.jsxs("div",{className:"p-3 bg-purple-50 rounded border border-purple-200",children:[e.jsx("h4",{className:"font-semibold text-purple-800 mb-2",children:"节流状态:"}),e.jsxs("div",{className:"text-sm text-purple-700 space-y-1",children:[e.jsxs("p",{children:[e.jsx("strong",{children:"原始值:"}),' "',r,'"']}),e.jsxs("p",{children:[e.jsx("strong",{children:"节流值:"}),' "',s,'"']}),e.jsxs("p",{children:[e.jsx("strong",{children:"节流状态:"})," ",i?"节流中":"可执行"]}),e.jsxs("p",{children:[e.jsx("strong",{children:"配置:"}),n&&" 前缘",o&&" 后缘",!n&&!o&&" 无执行"]})]})]})]}),e.jsxs("div",{className:"space-y-4",children:[e.jsxs("div",{children:[e.jsx("h4",{className:"font-semibold text-gray-700 mb-3",children:"操作日志:"}),e.jsx("div",{className:"bg-gray-50 rounded-lg p-3 h-40 overflow-y-auto",children:N.length===0?e.jsx("p",{className:"text-gray-500 text-sm",children:"开始操作查看日志"}):e.jsx("div",{className:"space-y-1",children:N.map((l,S)=>e.jsx("div",{className:"text-sm font-mono text-gray-700",children:l},S))})})]}),e.jsxs("div",{children:[e.jsx("h4",{className:"font-semibold text-gray-700 mb-3",children:"API调用记录:"}),e.jsx("div",{className:"bg-blue-50 rounded-lg p-3 h-32 overflow-y-auto",children:f.length===0?e.jsx("p",{className:"text-blue-500 text-sm",children:"暂无API调用"}):e.jsx("div",{className:"space-y-1",children:f.map((l,S)=>e.jsx("div",{className:"text-sm font-mono text-blue-700",children:l},S))})})]}),e.jsxs("div",{className:"p-3 bg-teal-50 rounded border border-teal-200",children:[e.jsx("h4",{className:"font-semibold text-teal-800 mb-2",children:"配置说明:"}),e.jsxs("ul",{className:"text-sm text-teal-700 space-y-1",children:[e.jsxs("li",{children:[e.jsx("strong",{children:"前缘执行:"})," 第一次变化时立即执行"]}),e.jsxs("li",{children:[e.jsx("strong",{children:"后缘执行:"})," 间隔时间后执行最后一次"]}),e.jsxs("li",{children:[e.jsx("strong",{children:"取消:"})," 取消等待中的后缘执行"]}),e.jsxs("li",{children:[e.jsx("strong",{children:"立即执行:"})," 跳过等待立即执行"]}),e.jsxs("li",{children:[e.jsx("strong",{children:"节流状态:"})," 显示当前是否在节流期间"]})]})]})]})]}),e.jsx("div",{className:"mt-4 p-3 bg-cyan-50 rounded border border-cyan-200",children:e.jsx("p",{className:"text-sm text-cyan-800",children:"💡 高级节流提供了前缘/后缘执行控制、手动取消和立即执行功能，适用于需要精确控制执行时机的复杂场景。"})})]})},I=`import React, { useState, useEffect } from 'react';\r
import { useAdvancedThrottle } from './useThrottleHook';\r
\r
const AdvancedThrottleDemo: React.FC = () => {\r
  const [inputValue, setInputValue] = useState('');\r
  const [delay, setDelay] = useState(1000);\r
  const [leading, setLeading] = useState(true);\r
  const [trailing, setTrailing] = useState(true);\r
  \r
  const { throttledValue, isThrottling, cancel, flush } = useAdvancedThrottle(\r
    inputValue,\r
    delay,\r
    { leading, trailing }\r
  );\r
  \r
  const [logs, setLogs] = useState<string[]>([]);\r
  const [apiCalls, setApiCalls] = useState<string[]>([]);\r
\r
  const addLog = (message: string) => {\r
    const timestamp = new Date().toLocaleTimeString();\r
    setLogs(prev => [...prev.slice(-9), \`\${timestamp}: \${message}\`]);\r
  };\r
\r
  const addApiCall = (message: string) => {\r
    const timestamp = new Date().toLocaleTimeString();\r
    setApiCalls(prev => [...prev.slice(-9), \`\${timestamp}: \${message}\`]);\r
  };\r
\r
  // 模拟API调用\r
  useEffect(() => {\r
    if (throttledValue !== undefined && throttledValue !== null) {\r
      addApiCall(\`API调用: 处理 "\${throttledValue}"\`);\r
    }\r
  }, [throttledValue]);\r
\r
  const handleInputChange = (value: string) => {\r
    setInputValue(value);\r
    addLog(\`输入: "\${value}"\`);\r
  };\r
\r
  const handleCancel = () => {\r
    cancel();\r
    addLog('取消节流');\r
  };\r
\r
  const handleFlush = () => {\r
    flush();\r
    addLog('立即执行节流');\r
  };\r
\r
  const handleDelayChange = (newDelay: number) => {\r
    setDelay(newDelay);\r
    addLog(\`延迟改为: \${newDelay}ms\`);\r
  };\r
\r
  const handleLeadingChange = (checked: boolean) => {\r
    setLeading(checked);\r
    addLog(\`\${checked ? '启用' : '禁用'}前缘执行\`);\r
  };\r
\r
  const handleTrailingChange = (checked: boolean) => {\r
    setTrailing(checked);\r
    addLog(\`\${checked ? '启用' : '禁用'}后缘执行\`);\r
  };\r
\r
  const clearAll = () => {\r
    setInputValue('');\r
    cancel();\r
    addLog('清空所有内容');\r
    // 延迟清空日志，确保"清空所有内容"的日志能被看到\r
    setTimeout(() => {\r
      setLogs([]);\r
      setApiCalls([]);\r
    }, 100);\r
  };\r
\r
  const clearLogs = () => {\r
    setLogs([]);\r
    setApiCalls([]);\r
  };\r
\r
  return (\r
    <div className="p-6 bg-white rounded-lg border border-gray-200">\r
      <div className="flex items-center justify-between mb-4">\r
        <h3 className="text-lg font-semibold text-gray-800">高级节流演示</h3>\r
        <div className="space-x-2">\r
          <button\r
            onClick={handleCancel}\r
            disabled={!isThrottling}\r
            className="px-3 py-1 bg-orange-500 text-white rounded text-sm hover:bg-orange-600 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"\r
          >\r
            取消节流\r
          </button>\r
          <button\r
            onClick={handleFlush}\r
            disabled={!isThrottling}\r
            className="px-3 py-1 bg-green-500 text-white rounded text-sm hover:bg-green-600 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"\r
          >\r
            立即执行\r
          </button>\r
          <button\r
            onClick={clearAll}\r
            className="px-3 py-1 bg-red-500 text-white rounded text-sm hover:bg-red-600 transition-colors"\r
          >\r
            清空所有\r
          </button>\r
          <button\r
            onClick={clearLogs}\r
            className="px-3 py-1 bg-gray-500 text-white rounded text-sm hover:bg-gray-600 transition-colors"\r
          >\r
            清空日志\r
          </button>\r
        </div>\r
      </div>\r
      \r
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">\r
        <div className="space-y-4">\r
          <div>\r
            <label className="block text-sm font-medium text-gray-700 mb-2">\r
              输入内容:\r
            </label>\r
            <input\r
              type="text"\r
              value={inputValue}\r
              onChange={(e) => handleInputChange(e.target.value)}\r
              placeholder="输入内容测试节流..."\r
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"\r
            />\r
            <div className="flex items-center justify-between mt-1">\r
              <p className="text-sm text-gray-600">\r
                当前输入: "{inputValue}"\r
              </p>\r
              <div className={\`flex items-center space-x-2 px-2 py-1 rounded text-xs \${\r
                isThrottling ? 'bg-yellow-100 text-yellow-800' : 'bg-green-100 text-green-800'\r
              }\`}>\r
                <div className={\`w-2 h-2 rounded-full \${\r
                  isThrottling ? 'bg-yellow-500 animate-pulse' : 'bg-green-500'\r
                }\`} />\r
                <span>{isThrottling ? '节流中' : '可执行'}</span>\r
              </div>\r
            </div>\r
          </div>\r
          \r
          <div>\r
            <label className="block text-sm font-medium text-gray-700 mb-2">\r
              节流间隔: {delay}ms\r
            </label>\r
            <input\r
              type="range"\r
              min="200"\r
              max="3000"\r
              step="200"\r
              value={delay}\r
              onChange={(e) => handleDelayChange(Number(e.target.value))}\r
              className="w-full"\r
            />\r
            <div className="flex justify-between text-xs text-gray-500 mt-1">\r
              <span>200ms</span>\r
              <span>1500ms</span>\r
              <span>3000ms</span>\r
            </div>\r
          </div>\r
          \r
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">\r
            <label className="flex items-center space-x-2">\r
              <input\r
                type="checkbox"\r
                checked={leading}\r
                onChange={(e) => handleLeadingChange(e.target.checked)}\r
                className="text-blue-500 focus:ring-blue-500"\r
              />\r
              <span className="text-sm text-gray-700">前缘执行 (立即执行第一次)</span>\r
            </label>\r
            \r
            <label className="flex items-center space-x-2">\r
              <input\r
                type="checkbox"\r
                checked={trailing}\r
                onChange={(e) => handleTrailingChange(e.target.checked)}\r
                className="text-blue-500 focus:ring-blue-500"\r
              />\r
              <span className="text-sm text-gray-700">后缘执行 (间隔后执行)</span>\r
            </label>\r
          </div>\r
          \r
          <div className="p-3 bg-purple-50 rounded border border-purple-200">\r
            <h4 className="font-semibold text-purple-800 mb-2">节流状态:</h4>\r
            <div className="text-sm text-purple-700 space-y-1">\r
              <p><strong>原始值:</strong> "{inputValue}"</p>\r
              <p><strong>节流值:</strong> "{throttledValue}"</p>\r
              <p><strong>节流状态:</strong> {isThrottling ? '节流中' : '可执行'}</p>\r
              <p><strong>配置:</strong> \r
                {leading && ' 前缘'}\r
                {trailing && ' 后缘'}\r
                {!leading && !trailing && ' 无执行'}\r
              </p>\r
            </div>\r
          </div>\r
        </div>\r
        \r
        <div className="space-y-4">\r
          <div>\r
            <h4 className="font-semibold text-gray-700 mb-3">操作日志:</h4>\r
            <div className="bg-gray-50 rounded-lg p-3 h-40 overflow-y-auto">\r
              {logs.length === 0 ? (\r
                <p className="text-gray-500 text-sm">开始操作查看日志</p>\r
              ) : (\r
                <div className="space-y-1">\r
                  {logs.map((log, index) => (\r
                    <div key={index} className="text-sm font-mono text-gray-700">\r
                      {log}\r
                    </div>\r
                  ))}\r
                </div>\r
              )}\r
            </div>\r
          </div>\r
          \r
          <div>\r
            <h4 className="font-semibold text-gray-700 mb-3">API调用记录:</h4>\r
            <div className="bg-blue-50 rounded-lg p-3 h-32 overflow-y-auto">\r
              {apiCalls.length === 0 ? (\r
                <p className="text-blue-500 text-sm">暂无API调用</p>\r
              ) : (\r
                <div className="space-y-1">\r
                  {apiCalls.map((call, index) => (\r
                    <div key={index} className="text-sm font-mono text-blue-700">\r
                      {call}\r
                    </div>\r
                  ))}\r
                </div>\r
              )}\r
            </div>\r
          </div>\r
          \r
          <div className="p-3 bg-teal-50 rounded border border-teal-200">\r
            <h4 className="font-semibold text-teal-800 mb-2">配置说明:</h4>\r
            <ul className="text-sm text-teal-700 space-y-1">\r
              <li><strong>前缘执行:</strong> 第一次变化时立即执行</li>\r
              <li><strong>后缘执行:</strong> 间隔时间后执行最后一次</li>\r
              <li><strong>取消:</strong> 取消等待中的后缘执行</li>\r
              <li><strong>立即执行:</strong> 跳过等待立即执行</li>\r
              <li><strong>节流状态:</strong> 显示当前是否在节流期间</li>\r
            </ul>\r
          </div>\r
        </div>\r
      </div>\r
      \r
      <div className="mt-4 p-3 bg-cyan-50 rounded border border-cyan-200">\r
        <p className="text-sm text-cyan-800">\r
          💡 高级节流提供了前缘/后缘执行控制、手动取消和立即执行功能，适用于需要精确控制执行时机的复杂场景。\r
        </p>\r
      </div>\r
    </div>\r
  );\r
};\r
\r
export default AdvancedThrottleDemo;`,R=()=>{const[r,g]=t.useState(""),[m,y]=t.useState(1e3),n=D(r,m),[h,o]=t.useState([]),[u,s]=t.useState([]),[i,c]=t.useState(0),p=D(i,500),[N,b]=t.useState(0),f=a=>{const C=new Date().toLocaleTimeString();o(T=>[...T.slice(-9),`${C}: ${a}`])},j=a=>{const C=new Date().toLocaleTimeString();s(T=>[...T.slice(-9),`${C}: ${a}`])};t.useEffect(()=>{n&&j(`API调用: 处理 "${n}"`)},[n]),t.useEffect(()=>{p!==N&&p>0&&(j(`按钮处理: 第 ${p} 次点击`),b(p))},[p,N]);const v=a=>{g(a),f(`输入变化: "${a}"`)},x=()=>{const a=i+1;c(a),f(`按钮点击: 第 ${a} 次`)},d=a=>{y(a),f(`延迟时间改为: ${a}ms`)},w=()=>{g(""),c(0),b(0),o([]),s([])},k=()=>{o([]),s([])};return e.jsxs("div",{className:"p-6 bg-white rounded-lg border border-gray-200",children:[e.jsxs("div",{className:"flex items-center justify-between mb-4",children:[e.jsx("h3",{className:"text-lg font-semibold text-gray-800",children:"基础节流演示"}),e.jsxs("div",{className:"space-x-2",children:[e.jsx("button",{onClick:w,className:"px-3 py-1 bg-red-500 text-white rounded text-sm hover:bg-red-600 transition-colors",children:"清空所有"}),e.jsx("button",{onClick:k,className:"px-3 py-1 bg-gray-500 text-white rounded text-sm hover:bg-gray-600 transition-colors",children:"清空日志"})]})]}),e.jsxs("div",{className:"grid grid-cols-1 lg:grid-cols-2 gap-6",children:[e.jsxs("div",{className:"space-y-4",children:[e.jsxs("div",{children:[e.jsx("label",{className:"block text-sm font-medium text-gray-700 mb-2",children:"文本输入 (节流处理):"}),e.jsx("input",{type:"text",value:r,onChange:a=>v(a.target.value),placeholder:"快速输入文本...",className:"w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"}),e.jsxs("p",{className:"text-sm text-gray-600 mt-1",children:['当前输入: "',r,'" (',r.length," 字符)"]})]}),e.jsxs("div",{children:[e.jsxs("label",{className:"block text-sm font-medium text-gray-700 mb-2",children:["节流延迟时间: ",m,"ms"]}),e.jsxs("div",{className:"space-y-2",children:[e.jsx("input",{type:"range",min:"200",max:"3000",step:"200",value:m,onChange:a=>d(Number(a.target.value)),className:"w-full"}),e.jsxs("div",{className:"flex justify-between text-xs text-gray-500",children:[e.jsx("span",{children:"200ms"}),e.jsx("span",{children:"1500ms"}),e.jsx("span",{children:"3000ms"})]})]})]}),e.jsxs("div",{className:"p-3 bg-blue-50 rounded border border-blue-200",children:[e.jsx("h4",{className:"font-semibold text-blue-800 mb-2",children:"节流后的值:"}),e.jsxs("div",{className:"text-blue-700",children:[e.jsxs("p",{className:"font-mono text-lg",children:['"',n,'"']}),e.jsx("p",{className:"text-sm mt-1",children:r===n?"✅ 已同步":`⏳ 节流中，等待 ${m}ms 间隔`})]})]}),e.jsxs("div",{className:"border border-gray-200 rounded-lg p-4",children:[e.jsx("h4",{className:"font-semibold text-gray-700 mb-3",children:"按钮点击节流测试:"}),e.jsxs("div",{className:"space-y-3",children:[e.jsx("button",{onClick:x,className:"w-full px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600 transition-colors font-medium",children:"快速点击测试 (节流500ms)"}),e.jsxs("div",{className:"grid grid-cols-2 gap-4 text-sm",children:[e.jsxs("div",{className:"p-2 bg-gray-50 rounded",children:[e.jsx("p",{className:"font-medium text-gray-700",children:"实际点击次数:"}),e.jsx("p",{className:"text-xl font-bold text-gray-900",children:i})]}),e.jsxs("div",{className:"p-2 bg-green-50 rounded",children:[e.jsx("p",{className:"font-medium text-green-700",children:"节流处理次数:"}),e.jsx("p",{className:"text-xl font-bold text-green-900",children:p})]})]})]})]})]}),e.jsxs("div",{className:"space-y-4",children:[e.jsxs("div",{children:[e.jsx("h4",{className:"font-semibold text-gray-700 mb-3",children:"操作日志:"}),e.jsx("div",{className:"bg-gray-50 rounded-lg p-3 h-40 overflow-y-auto",children:h.length===0?e.jsx("p",{className:"text-gray-500 text-sm",children:"开始操作查看日志"}):e.jsx("div",{className:"space-y-1",children:h.map((a,C)=>e.jsx("div",{className:"text-sm font-mono text-gray-700",children:a},C))})})]}),e.jsxs("div",{children:[e.jsx("h4",{className:"font-semibold text-gray-700 mb-3",children:"API调用记录:"}),e.jsx("div",{className:"bg-blue-50 rounded-lg p-3 h-32 overflow-y-auto",children:u.length===0?e.jsx("p",{className:"text-blue-500 text-sm",children:"暂无API调用"}):e.jsx("div",{className:"space-y-1",children:u.map((a,C)=>e.jsx("div",{className:"text-sm font-mono text-blue-700",children:a},C))})})]}),e.jsxs("div",{className:"p-3 bg-green-50 rounded border border-green-200",children:[e.jsx("h4",{className:"font-semibold text-green-800 mb-2",children:"节流状态:"}),e.jsxs("div",{className:"text-sm text-green-700 space-y-1",children:[e.jsxs("p",{children:[e.jsx("strong",{children:"原始值:"}),' "',r,'"']}),e.jsxs("p",{children:[e.jsx("strong",{children:"节流值:"}),' "',n,'"']}),e.jsxs("p",{children:[e.jsx("strong",{children:"延迟时间:"})," ",m,"ms"]}),e.jsxs("p",{children:[e.jsx("strong",{children:"点击统计:"})," ",i," → ",p]})]})]}),e.jsxs("div",{className:"p-3 bg-yellow-50 rounded border border-yellow-200",children:[e.jsx("h4",{className:"font-semibold text-yellow-800 mb-2",children:"使用说明:"}),e.jsxs("ul",{className:"text-sm text-yellow-700 space-y-1",children:[e.jsx("li",{children:"• 节流限制执行频率，在指定时间内最多执行一次"}),e.jsx("li",{children:"• 适用于滚动、resize、按钮点击等高频事件"}),e.jsx("li",{children:"• 与防抖不同，节流会定期执行而不是延迟执行"}),e.jsx("li",{children:"• 可以有效减少资源消耗和提升性能"})]})]})]})]}),e.jsx("div",{className:"mt-4 p-3 bg-indigo-50 rounded border border-indigo-200",children:e.jsx("p",{className:"text-sm text-indigo-800",children:"💡 useThrottle 限制函数执行频率，确保在指定时间间隔内最多执行一次，有效控制高频操作的性能影响。"})})]})},P=`import React, { useState, useEffect } from 'react';
import { useThrottle } from './useThrottleHook';

const BasicThrottleDemo: React.FC = () => {
  const [inputValue, setInputValue] = useState('');
  const [delay, setDelay] = useState(1000);
  const throttledValue = useThrottle(inputValue, delay);
  const [logs, setLogs] = useState<string[]>([]);
  const [apiCalls, setApiCalls] = useState<string[]>([]);
  const [clickCount, setClickCount] = useState(0);
  const throttledClickCount = useThrottle(clickCount, 500);
  const [lastThrottledCount, setLastThrottledCount] = useState(0);

  const addLog = (message: string) => {
    const timestamp = new Date().toLocaleTimeString();
    setLogs(prev => [...prev.slice(-9), \`\${timestamp}: \${message}\`]);
  };

  const addApiCall = (message: string) => {
    const timestamp = new Date().toLocaleTimeString();
    setApiCalls(prev => [...prev.slice(-9), \`\${timestamp}: \${message}\`]);
  };

  // 模拟API调用
  useEffect(() => {
    if (throttledValue) {
      addApiCall(\`API调用: 处理 "\${throttledValue}"\`);
    }
  }, [throttledValue]);

  // 模拟按钮点击处理
  useEffect(() => {
    // 只有当 throttledClickCount 真正发生变化时才记录API调用
    if (throttledClickCount !== lastThrottledCount && throttledClickCount > 0) {
      addApiCall(\`按钮处理: 第 \${throttledClickCount} 次点击\`);
      setLastThrottledCount(throttledClickCount);
    }
  }, [throttledClickCount, lastThrottledCount]);

  const handleInputChange = (value: string) => {
    setInputValue(value);
    addLog(\`输入变化: "\${value}"\`);
  };

  const handleButtonClick = () => {
    const newCount = clickCount + 1;
    setClickCount(newCount);
    addLog(\`按钮点击: 第 \${newCount} 次\`);
  };

  const handleDelayChange = (newDelay: number) => {
    setDelay(newDelay);
    addLog(\`延迟时间改为: \${newDelay}ms\`);
  };

  const clearAll = () => {
    setInputValue('');
    setClickCount(0);
    setLastThrottledCount(0);
    setLogs([]);
    setApiCalls([]);
    // 不在清空后立即添加日志，保持真正的"清空所有"
  };

  const clearLogs = () => {
    setLogs([]);
    setApiCalls([]);
  };

  return (
    <div className="p-6 bg-white rounded-lg border border-gray-200">
      <div className="flex items-center justify-between mb-4">
        <h3 className="text-lg font-semibold text-gray-800">基础节流演示</h3>
        <div className="space-x-2">
          <button
            onClick={clearAll}
            className="px-3 py-1 bg-red-500 text-white rounded text-sm hover:bg-red-600 transition-colors"
          >
            清空所有
          </button>
          <button
            onClick={clearLogs}
            className="px-3 py-1 bg-gray-500 text-white rounded text-sm hover:bg-gray-600 transition-colors"
          >
            清空日志
          </button>
        </div>
      </div>
      
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              文本输入 (节流处理):
            </label>
            <input
              type="text"
              value={inputValue}
              onChange={(e) => handleInputChange(e.target.value)}
              placeholder="快速输入文本..."
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            />
            <p className="text-sm text-gray-600 mt-1">
              当前输入: "{inputValue}" ({inputValue.length} 字符)
            </p>
          </div>
          
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              节流延迟时间: {delay}ms
            </label>
            <div className="space-y-2">
              <input
                type="range"
                min="200"
                max="3000"
                step="200"
                value={delay}
                onChange={(e) => handleDelayChange(Number(e.target.value))}
                className="w-full"
              />
              <div className="flex justify-between text-xs text-gray-500">
                <span>200ms</span>
                <span>1500ms</span>
                <span>3000ms</span>
              </div>
            </div>
          </div>
          
          <div className="p-3 bg-blue-50 rounded border border-blue-200">
            <h4 className="font-semibold text-blue-800 mb-2">节流后的值:</h4>
            <div className="text-blue-700">
              <p className="font-mono text-lg">"{throttledValue}"</p>
              <p className="text-sm mt-1">
                {inputValue === throttledValue ? 
                  '✅ 已同步' : 
                  \`⏳ 节流中，等待 \${delay}ms 间隔\`
                }
              </p>
            </div>
          </div>
          
          <div className="border border-gray-200 rounded-lg p-4">
            <h4 className="font-semibold text-gray-700 mb-3">按钮点击节流测试:</h4>
            <div className="space-y-3">
              <button
                onClick={handleButtonClick}
                className="w-full px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600 transition-colors font-medium"
              >
                快速点击测试 (节流500ms)
              </button>
              <div className="grid grid-cols-2 gap-4 text-sm">
                <div className="p-2 bg-gray-50 rounded">
                  <p className="font-medium text-gray-700">实际点击次数:</p>
                  <p className="text-xl font-bold text-gray-900">{clickCount}</p>
                </div>
                <div className="p-2 bg-green-50 rounded">
                  <p className="font-medium text-green-700">节流处理次数:</p>
                  <p className="text-xl font-bold text-green-900">{throttledClickCount}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        <div className="space-y-4">
          <div>
            <h4 className="font-semibold text-gray-700 mb-3">操作日志:</h4>
            <div className="bg-gray-50 rounded-lg p-3 h-40 overflow-y-auto">
              {logs.length === 0 ? (
                <p className="text-gray-500 text-sm">开始操作查看日志</p>
              ) : (
                <div className="space-y-1">
                  {logs.map((log, index) => (
                    <div key={index} className="text-sm font-mono text-gray-700">
                      {log}
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>
          
          <div>
            <h4 className="font-semibold text-gray-700 mb-3">API调用记录:</h4>
            <div className="bg-blue-50 rounded-lg p-3 h-32 overflow-y-auto">
              {apiCalls.length === 0 ? (
                <p className="text-blue-500 text-sm">暂无API调用</p>
              ) : (
                <div className="space-y-1">
                  {apiCalls.map((call, index) => (
                    <div key={index} className="text-sm font-mono text-blue-700">
                      {call}
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>
          
          <div className="p-3 bg-green-50 rounded border border-green-200">
            <h4 className="font-semibold text-green-800 mb-2">节流状态:</h4>
            <div className="text-sm text-green-700 space-y-1">
              <p><strong>原始值:</strong> "{inputValue}"</p>
              <p><strong>节流值:</strong> "{throttledValue}"</p>
              <p><strong>延迟时间:</strong> {delay}ms</p>
              <p><strong>点击统计:</strong> {clickCount} → {throttledClickCount}</p>
            </div>
          </div>
          
          <div className="p-3 bg-yellow-50 rounded border border-yellow-200">
            <h4 className="font-semibold text-yellow-800 mb-2">使用说明:</h4>
            <ul className="text-sm text-yellow-700 space-y-1">
              <li>• 节流限制执行频率，在指定时间内最多执行一次</li>
              <li>• 适用于滚动、resize、按钮点击等高频事件</li>
              <li>• 与防抖不同，节流会定期执行而不是延迟执行</li>
              <li>• 可以有效减少资源消耗和提升性能</li>
            </ul>
          </div>
        </div>
      </div>
      
      <div className="mt-4 p-3 bg-indigo-50 rounded border border-indigo-200">
        <p className="text-sm text-indigo-800">
          💡 useThrottle 限制函数执行频率，确保在指定时间间隔内最多执行一次，有效控制高频操作的性能影响。
        </p>
      </div>
    </div>
  );
};

export default BasicThrottleDemo;`,H=()=>{const[r,g]=t.useState(0),[m,y]=t.useState("none"),n=D(r,100),[h,o]=t.useState([]),[u,s]=t.useState({totalScrollEvents:0,throttledEvents:0,maxScrollY:0}),i=t.useRef(0),c=x=>{const d=new Date().toLocaleTimeString();o(w=>[...w.slice(-19),`${d}: ${x}`])};t.useEffect(()=>{const x=()=>{const d=window.scrollY;g(d),s(w=>({...w,totalScrollEvents:w.totalScrollEvents+1,maxScrollY:Math.max(w.maxScrollY,d)})),d>i.current?y("down"):d<i.current&&y("up"),i.current=d,c(`滚动事件: Y=${d}px`)};return window.addEventListener("scroll",x,{passive:!0}),()=>window.removeEventListener("scroll",x)},[]),t.useEffect(()=>{n!==void 0&&(s(x=>({...x,throttledEvents:x.throttledEvents+1})),c(`节流处理: Y=${n}px`))},[n]);const p=()=>{o([])},N=()=>{s({totalScrollEvents:0,throttledEvents:0,maxScrollY:0}),p()},b=()=>{window.scrollTo({top:0,behavior:"smooth"})},f=()=>{window.scrollTo({top:document.body.scrollHeight,behavior:"smooth"})},j=()=>{switch(m){case"up":return"⬆️";case"down":return"⬇️";default:return"⏸️"}},v=()=>{switch(m){case"up":return"text-blue-600";case"down":return"text-green-600";default:return"text-gray-600"}};return e.jsxs("div",{className:"p-6 bg-white rounded-lg border border-gray-200",children:[e.jsxs("div",{className:"flex items-center justify-between mb-4",children:[e.jsx("h3",{className:"text-lg font-semibold text-gray-800",children:"滚动节流演示"}),e.jsxs("div",{className:"space-x-2",children:[e.jsx("button",{onClick:b,className:"px-3 py-1 bg-blue-500 text-white rounded text-sm hover:bg-blue-600 transition-colors",children:"回到顶部"}),e.jsx("button",{onClick:f,className:"px-3 py-1 bg-green-500 text-white rounded text-sm hover:bg-green-600 transition-colors",children:"滚动到底部"}),e.jsx("button",{onClick:N,className:"px-3 py-1 bg-red-500 text-white rounded text-sm hover:bg-red-600 transition-colors",children:"重置统计"}),e.jsx("button",{onClick:p,className:"px-3 py-1 bg-gray-500 text-white rounded text-sm hover:bg-gray-600 transition-colors",children:"清空日志"})]})]}),e.jsxs("div",{className:"grid grid-cols-1 lg:grid-cols-2 gap-6",children:[e.jsxs("div",{className:"space-y-4",children:[e.jsxs("div",{className:"grid grid-cols-2 gap-4",children:[e.jsxs("div",{className:"p-4 bg-blue-50 rounded-lg border border-blue-200",children:[e.jsx("h4",{className:"font-semibold text-blue-800 mb-2",children:"实时滚动位置"}),e.jsxs("div",{className:"text-2xl font-bold text-blue-900",children:[r,"px"]}),e.jsxs("div",{className:`text-sm font-medium ${v()}`,children:[j()," ",m==="none"?"静止":m==="up"?"向上":"向下"]})]}),e.jsxs("div",{className:"p-4 bg-green-50 rounded-lg border border-green-200",children:[e.jsx("h4",{className:"font-semibold text-green-800 mb-2",children:"节流滚动位置"}),e.jsxs("div",{className:"text-2xl font-bold text-green-900",children:[n,"px"]}),e.jsx("div",{className:"text-sm text-green-700",children:"延迟: 100ms"})]})]}),e.jsxs("div",{className:"p-4 bg-yellow-50 rounded-lg border border-yellow-200",children:[e.jsx("h4",{className:"font-semibold text-yellow-800 mb-3",children:"滚动统计"}),e.jsxs("div",{className:"grid grid-cols-3 gap-4 text-sm",children:[e.jsxs("div",{children:[e.jsx("p",{className:"text-yellow-700 font-medium",children:"总滚动事件:"}),e.jsx("p",{className:"text-xl font-bold text-yellow-900",children:u.totalScrollEvents})]}),e.jsxs("div",{children:[e.jsx("p",{className:"text-yellow-700 font-medium",children:"节流处理次数:"}),e.jsx("p",{className:"text-xl font-bold text-yellow-900",children:u.throttledEvents})]}),e.jsxs("div",{children:[e.jsx("p",{className:"text-yellow-700 font-medium",children:"最大滚动距离:"}),e.jsxs("p",{className:"text-xl font-bold text-yellow-900",children:[u.maxScrollY,"px"]})]})]}),e.jsx("div",{className:"mt-3 p-2 bg-yellow-100 rounded",children:e.jsxs("p",{className:"text-sm text-yellow-800",children:[e.jsx("strong",{children:"节流效率:"})," ",u.totalScrollEvents>0?`${((1-u.throttledEvents/u.totalScrollEvents)*100).toFixed(1)}%`:"0%"," 的事件被节流过滤"]})})]}),e.jsxs("div",{className:"p-4 bg-purple-50 rounded-lg border border-purple-200",children:[e.jsx("h4",{className:"font-semibold text-purple-800 mb-2",children:"滚动进度"}),e.jsxs("div",{className:"space-y-2",children:[e.jsxs("div",{className:"flex justify-between text-sm text-purple-700",children:[e.jsx("span",{children:"页面进度"}),e.jsxs("span",{children:[(r/(document.body.scrollHeight-window.innerHeight)*100||0).toFixed(1),"%"]})]}),e.jsx("div",{className:"w-full bg-purple-200 rounded-full h-2",children:e.jsx("div",{className:"bg-purple-600 h-2 rounded-full transition-all duration-300",style:{width:`${r/(document.body.scrollHeight-window.innerHeight)*100||0}%`}})})]})]})]}),e.jsxs("div",{className:"space-y-4",children:[e.jsxs("div",{children:[e.jsx("h4",{className:"font-semibold text-gray-700 mb-3",children:"滚动日志 (最近20条):"}),e.jsx("div",{className:"bg-gray-50 rounded-lg p-3 h-64 overflow-y-auto",children:h.length===0?e.jsx("p",{className:"text-gray-500 text-sm",children:"滚动页面查看日志"}):e.jsx("div",{className:"space-y-1",children:h.map((x,d)=>e.jsx("div",{className:"text-xs font-mono text-gray-700",children:x},d))})})]}),e.jsxs("div",{className:"p-3 bg-emerald-50 rounded border border-emerald-200",children:[e.jsx("h4",{className:"font-semibold text-emerald-800 mb-2",children:"节流优势:"}),e.jsxs("ul",{className:"text-sm text-emerald-700 space-y-1",children:[e.jsx("li",{children:"• 减少滚动事件处理次数，提升性能"}),e.jsx("li",{children:"• 避免频繁的DOM操作和计算"}),e.jsx("li",{children:"• 降低CPU使用率，改善用户体验"}),e.jsx("li",{children:"• 特别适用于复杂的滚动监听逻辑"})]})]}),e.jsxs("div",{className:"p-3 bg-orange-50 rounded border border-orange-200",children:[e.jsx("h4",{className:"font-semibold text-orange-800 mb-2",children:"使用建议:"}),e.jsxs("ul",{className:"text-sm text-orange-700 space-y-1",children:[e.jsx("li",{children:"• 滚动事件建议使用100-200ms节流"}),e.jsx("li",{children:"• resize事件建议使用200-300ms节流"}),e.jsx("li",{children:"• 鼠标移动事件建议使用16-50ms节流"}),e.jsx("li",{children:"• 根据具体需求调整节流间隔"})]})]})]})]}),e.jsxs("div",{className:"mt-8 space-y-4",children:[e.jsxs("div",{className:"p-4 bg-gray-100 rounded",children:[e.jsx("h4",{className:"font-semibold mb-2",children:"滚动测试区域"}),e.jsx("p",{className:"text-gray-700",children:"滚动页面查看节流效果。下面是一些填充内容，让页面有足够的高度进行滚动测试。"})]}),Array.from({length:20},(x,d)=>e.jsxs("div",{className:"p-4 bg-gradient-to-r from-blue-50 to-purple-50 rounded border",children:[e.jsxs("h5",{className:"font-medium text-gray-800",children:["测试内容块 ",d+1]}),e.jsxs("p",{className:"text-gray-600 mt-2",children:["这是第 ",d+1," 个内容块。滚动时会触发滚动事件，通过节流可以减少事件处理次数，提升页面性能。 节流确保在指定时间间隔内最多执行一次处理函数，避免过度频繁的操作。"]})]},d))]}),e.jsx("div",{className:"mt-4 p-3 bg-violet-50 rounded border border-violet-200",children:e.jsx("p",{className:"text-sm text-violet-800",children:"💡 滚动节流是性能优化的重要手段，特别是在处理复杂滚动逻辑时，可以显著减少计算量和提升用户体验。"})})]})},z=`import React, { useState, useEffect, useRef } from 'react';\r
import { useThrottle } from './useThrottleHook';\r
\r
const ScrollThrottleDemo: React.FC = () => {\r
  const [scrollY, setScrollY] = useState(0);\r
  const [scrollDirection, setScrollDirection] = useState<'up' | 'down' | 'none'>('none');\r
  const throttledScrollY = useThrottle(scrollY, 100);\r
  const [logs, setLogs] = useState<string[]>([]);\r
  const [scrollStats, setScrollStats] = useState({\r
    totalScrollEvents: 0,\r
    throttledEvents: 0,\r
    maxScrollY: 0\r
  });\r
  const lastScrollYRef = useRef(0);\r
\r
  const addLog = (message: string) => {\r
    const timestamp = new Date().toLocaleTimeString();\r
    setLogs(prev => [...prev.slice(-19), \`\${timestamp}: \${message}\`]);\r
  };\r
\r
  // 监听滚动事件\r
  useEffect(() => {\r
    const handleScroll = () => {\r
      const currentScrollY = window.scrollY;\r
      setScrollY(currentScrollY);\r
      \r
      // 更新统计信息\r
      setScrollStats(prev => ({\r
        ...prev,\r
        totalScrollEvents: prev.totalScrollEvents + 1,\r
        maxScrollY: Math.max(prev.maxScrollY, currentScrollY)\r
      }));\r
      \r
      // 判断滚动方向\r
      if (currentScrollY > lastScrollYRef.current) {\r
        setScrollDirection('down');\r
      } else if (currentScrollY < lastScrollYRef.current) {\r
        setScrollDirection('up');\r
      }\r
      lastScrollYRef.current = currentScrollY;\r
      \r
      addLog(\`滚动事件: Y=\${currentScrollY}px\`);\r
    };\r
\r
    window.addEventListener('scroll', handleScroll, { passive: true });\r
    return () => window.removeEventListener('scroll', handleScroll);\r
  }, []);\r
\r
  // 处理节流后的滚动\r
  useEffect(() => {\r
    if (throttledScrollY !== undefined) {\r
      setScrollStats(prev => ({\r
        ...prev,\r
        throttledEvents: prev.throttledEvents + 1\r
      }));\r
      addLog(\`节流处理: Y=\${throttledScrollY}px\`);\r
    }\r
  }, [throttledScrollY]);\r
\r
  const clearLogs = () => {\r
    setLogs([]);\r
  };\r
\r
  const resetStats = () => {\r
    setScrollStats({\r
      totalScrollEvents: 0,\r
      throttledEvents: 0,\r
      maxScrollY: 0\r
    });\r
    clearLogs();\r
  };\r
\r
  const scrollToTop = () => {\r
    window.scrollTo({ top: 0, behavior: 'smooth' });\r
  };\r
\r
  const scrollToBottom = () => {\r
    window.scrollTo({ top: document.body.scrollHeight, behavior: 'smooth' });\r
  };\r
\r
  const getDirectionIcon = () => {\r
    switch (scrollDirection) {\r
      case 'up': return '⬆️';\r
      case 'down': return '⬇️';\r
      default: return '⏸️';\r
    }\r
  };\r
\r
  const getDirectionColor = () => {\r
    switch (scrollDirection) {\r
      case 'up': return 'text-blue-600';\r
      case 'down': return 'text-green-600';\r
      default: return 'text-gray-600';\r
    }\r
  };\r
\r
  return (\r
    <div className="p-6 bg-white rounded-lg border border-gray-200">\r
      <div className="flex items-center justify-between mb-4">\r
        <h3 className="text-lg font-semibold text-gray-800">滚动节流演示</h3>\r
        <div className="space-x-2">\r
          <button\r
            onClick={scrollToTop}\r
            className="px-3 py-1 bg-blue-500 text-white rounded text-sm hover:bg-blue-600 transition-colors"\r
          >\r
            回到顶部\r
          </button>\r
          <button\r
            onClick={scrollToBottom}\r
            className="px-3 py-1 bg-green-500 text-white rounded text-sm hover:bg-green-600 transition-colors"\r
          >\r
            滚动到底部\r
          </button>\r
          <button\r
            onClick={resetStats}\r
            className="px-3 py-1 bg-red-500 text-white rounded text-sm hover:bg-red-600 transition-colors"\r
          >\r
            重置统计\r
          </button>\r
          <button\r
            onClick={clearLogs}\r
            className="px-3 py-1 bg-gray-500 text-white rounded text-sm hover:bg-gray-600 transition-colors"\r
          >\r
            清空日志\r
          </button>\r
        </div>\r
      </div>\r
      \r
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">\r
        <div className="space-y-4">\r
          <div className="grid grid-cols-2 gap-4">\r
            <div className="p-4 bg-blue-50 rounded-lg border border-blue-200">\r
              <h4 className="font-semibold text-blue-800 mb-2">实时滚动位置</h4>\r
              <div className="text-2xl font-bold text-blue-900">{scrollY}px</div>\r
              <div className={\`text-sm font-medium \${getDirectionColor()}\`}>\r
                {getDirectionIcon()} {scrollDirection === 'none' ? '静止' : scrollDirection === 'up' ? '向上' : '向下'}\r
              </div>\r
            </div>\r
            \r
            <div className="p-4 bg-green-50 rounded-lg border border-green-200">\r
              <h4 className="font-semibold text-green-800 mb-2">节流滚动位置</h4>\r
              <div className="text-2xl font-bold text-green-900">{throttledScrollY}px</div>\r
              <div className="text-sm text-green-700">\r
                延迟: 100ms\r
              </div>\r
            </div>\r
          </div>\r
          \r
          <div className="p-4 bg-yellow-50 rounded-lg border border-yellow-200">\r
            <h4 className="font-semibold text-yellow-800 mb-3">滚动统计</h4>\r
            <div className="grid grid-cols-3 gap-4 text-sm">\r
              <div>\r
                <p className="text-yellow-700 font-medium">总滚动事件:</p>\r
                <p className="text-xl font-bold text-yellow-900">{scrollStats.totalScrollEvents}</p>\r
              </div>\r
              <div>\r
                <p className="text-yellow-700 font-medium">节流处理次数:</p>\r
                <p className="text-xl font-bold text-yellow-900">{scrollStats.throttledEvents}</p>\r
              </div>\r
              <div>\r
                <p className="text-yellow-700 font-medium">最大滚动距离:</p>\r
                <p className="text-xl font-bold text-yellow-900">{scrollStats.maxScrollY}px</p>\r
              </div>\r
            </div>\r
            <div className="mt-3 p-2 bg-yellow-100 rounded">\r
              <p className="text-sm text-yellow-800">\r
                <strong>节流效率:</strong> {scrollStats.totalScrollEvents > 0 ? \r
                  \`\${((1 - scrollStats.throttledEvents / scrollStats.totalScrollEvents) * 100).toFixed(1)}%\` : \r
                  '0%'\r
                } 的事件被节流过滤\r
              </p>\r
            </div>\r
          </div>\r
          \r
          <div className="p-4 bg-purple-50 rounded-lg border border-purple-200">\r
            <h4 className="font-semibold text-purple-800 mb-2">滚动进度</h4>\r
            <div className="space-y-2">\r
              <div className="flex justify-between text-sm text-purple-700">\r
                <span>页面进度</span>\r
                <span>{((scrollY / (document.body.scrollHeight - window.innerHeight)) * 100 || 0).toFixed(1)}%</span>\r
              </div>\r
              <div className="w-full bg-purple-200 rounded-full h-2">\r
                <div \r
                  className="bg-purple-600 h-2 rounded-full transition-all duration-300"\r
                  style={{ \r
                    width: \`\${((scrollY / (document.body.scrollHeight - window.innerHeight)) * 100 || 0)}%\` \r
                  }}\r
                />\r
              </div>\r
            </div>\r
          </div>\r
        </div>\r
        \r
        <div className="space-y-4">\r
          <div>\r
            <h4 className="font-semibold text-gray-700 mb-3">滚动日志 (最近20条):</h4>\r
            <div className="bg-gray-50 rounded-lg p-3 h-64 overflow-y-auto">\r
              {logs.length === 0 ? (\r
                <p className="text-gray-500 text-sm">滚动页面查看日志</p>\r
              ) : (\r
                <div className="space-y-1">\r
                  {logs.map((log, index) => (\r
                    <div key={index} className="text-xs font-mono text-gray-700">\r
                      {log}\r
                    </div>\r
                  ))}\r
                </div>\r
              )}\r
            </div>\r
          </div>\r
          \r
          <div className="p-3 bg-emerald-50 rounded border border-emerald-200">\r
            <h4 className="font-semibold text-emerald-800 mb-2">节流优势:</h4>\r
            <ul className="text-sm text-emerald-700 space-y-1">\r
              <li>• 减少滚动事件处理次数，提升性能</li>\r
              <li>• 避免频繁的DOM操作和计算</li>\r
              <li>• 降低CPU使用率，改善用户体验</li>\r
              <li>• 特别适用于复杂的滚动监听逻辑</li>\r
            </ul>\r
          </div>\r
          \r
          <div className="p-3 bg-orange-50 rounded border border-orange-200">\r
            <h4 className="font-semibold text-orange-800 mb-2">使用建议:</h4>\r
            <ul className="text-sm text-orange-700 space-y-1">\r
              <li>• 滚动事件建议使用100-200ms节流</li>\r
              <li>• resize事件建议使用200-300ms节流</li>\r
              <li>• 鼠标移动事件建议使用16-50ms节流</li>\r
              <li>• 根据具体需求调整节流间隔</li>\r
            </ul>\r
          </div>\r
        </div>\r
      </div>\r
      \r
      {/* 添加一些内容让页面可以滚动 */}\r
      <div className="mt-8 space-y-4">\r
        <div className="p-4 bg-gray-100 rounded">\r
          <h4 className="font-semibold mb-2">滚动测试区域</h4>\r
          <p className="text-gray-700">滚动页面查看节流效果。下面是一些填充内容，让页面有足够的高度进行滚动测试。</p>\r
        </div>\r
        {Array.from({ length: 20 }, (_, i) => (\r
          <div key={i} className="p-4 bg-gradient-to-r from-blue-50 to-purple-50 rounded border">\r
            <h5 className="font-medium text-gray-800">测试内容块 {i + 1}</h5>\r
            <p className="text-gray-600 mt-2">\r
              这是第 {i + 1} 个内容块。滚动时会触发滚动事件，通过节流可以减少事件处理次数，提升页面性能。\r
              节流确保在指定时间间隔内最多执行一次处理函数，避免过度频繁的操作。\r
            </p>\r
          </div>\r
        ))}\r
      </div>\r
      \r
      <div className="mt-4 p-3 bg-violet-50 rounded border border-violet-200">\r
        <p className="text-sm text-violet-800">\r
          💡 滚动节流是性能优化的重要手段，特别是在处理复杂滚动逻辑时，可以显著减少计算量和提升用户体验。\r
        </p>\r
      </div>\r
    </div>\r
  );\r
};\r
\r
export default ScrollThrottleDemo;`,q=()=>e.jsx(A,{title:"useThrottle",description:"自定义 Hook，用于节流处理。它限制函数执行频率，确保在指定时间间隔内最多执行一次，有效控制高频操作对性能的影响。",overview:e.jsxs("div",{className:"space-y-4",children:[e.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-6",children:[e.jsxs("div",{className:"bg-blue-50 p-4 rounded-lg border border-blue-200",children:[e.jsx("h3",{className:"font-semibold text-blue-800 mb-2",children:"🎯 核心功能"}),e.jsxs("ul",{className:"text-sm text-blue-700 space-y-1",children:[e.jsx("li",{children:"• 限制函数执行频率"}),e.jsx("li",{children:"• 在指定时间间隔内最多执行一次"}),e.jsx("li",{children:"• 支持前缘和后缘执行控制"}),e.jsx("li",{children:"• 提供手动取消和立即执行"})]})]}),e.jsxs("div",{className:"bg-green-50 p-4 rounded-lg border border-green-200",children:[e.jsx("h3",{className:"font-semibold text-green-800 mb-2",children:"✨ 主要优势"}),e.jsxs("ul",{className:"text-sm text-green-700 space-y-1",children:[e.jsx("li",{children:"• 显著提升高频事件性能"}),e.jsx("li",{children:"• 减少CPU使用率"}),e.jsx("li",{children:"• 改善用户体验流畅度"}),e.jsx("li",{children:"• 降低资源消耗"})]})]}),e.jsxs("div",{className:"bg-yellow-50 p-4 rounded-lg border border-yellow-200",children:[e.jsx("h3",{className:"font-semibold text-yellow-800 mb-2",children:"🎪 适用场景"}),e.jsxs("ul",{className:"text-sm text-yellow-700 space-y-1",children:[e.jsx("li",{children:"• 滚动事件监听"}),e.jsx("li",{children:"• 窗口resize事件"}),e.jsx("li",{children:"• 按钮防重复点击"}),e.jsx("li",{children:"• 鼠标移动事件"})]})]}),e.jsxs("div",{className:"bg-red-50 p-4 rounded-lg border border-red-200",children:[e.jsx("h3",{className:"font-semibold text-red-800 mb-2",children:"⚠️ 注意事项"}),e.jsxs("ul",{className:"text-sm text-red-700 space-y-1",children:[e.jsx("li",{children:"• 合理设置节流间隔时间"}),e.jsx("li",{children:"• 区分节流和防抖的使用场景"}),e.jsx("li",{children:"• 考虑用户交互的响应性"}),e.jsx("li",{children:"• 处理组件卸载时的清理"})]})]})]}),e.jsxs("div",{className:"p-4 bg-indigo-50 rounded-lg border border-indigo-200",children:[e.jsx("h3",{className:"font-semibold text-indigo-800 mb-2",children:"🔄 节流 vs 防抖"}),e.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-4 text-sm",children:[e.jsxs("div",{children:[e.jsx("h4",{className:"font-medium text-indigo-700 mb-1",children:"节流 (Throttle)"}),e.jsxs("ul",{className:"text-indigo-600 space-y-1",children:[e.jsx("li",{children:"• 限制执行频率"}),e.jsx("li",{children:"• 定期执行，不会无限延迟"}),e.jsx("li",{children:"• 适用于滚动、resize等高频事件"}),e.jsx("li",{children:"• 保证一定的执行频率"})]})]}),e.jsxs("div",{children:[e.jsx("h4",{className:"font-medium text-indigo-700 mb-1",children:"防抖 (Debounce)"}),e.jsxs("ul",{className:"text-indigo-600 space-y-1",children:[e.jsx("li",{children:"• 延迟执行"}),e.jsx("li",{children:"• 重复触发时重置定时器"}),e.jsx("li",{children:"• 适用于搜索、自动保存等场景"}),e.jsx("li",{children:"• 只执行最后一次操作"})]})]})]})]})]}),examples:[{title:"基础节流演示",component:e.jsx(R,{}),description:"演示 useThrottle 的基本用法，包括文本输入节流和按钮点击节流",codeExample:{code:P,language:"typescript",highlights:"9, 10, 12, 13, 15, 16, 17, 19, 20, 21, 23, 24, 25"},observationPoints:["快速输入文本时，观察节流值的定期更新","快速点击按钮，观察实际点击次数和节流处理次数的差异","调整节流间隔时间，观察更新频率的变化","注意节流不会无限延迟，会定期执行","对比输入值和节流值的同步状态"],keyPoints:["useThrottle 限制函数执行频率","在指定时间间隔内最多执行一次","不会无限延迟，保证定期执行","有效减少高频操作的性能影响"],commonTraps:["节流间隔设置过长影响响应性","节流间隔设置过短失去优化效果","混淆节流和防抖的使用场景"],solutions:["根据事件类型选择合适的间隔时间","滚动事件100-200ms，resize事件200-300ms","理解节流定期执行，防抖延迟执行的区别"]},{title:"高级节流演示",component:e.jsx(V,{}),description:"演示高级节流功能，包括前缘/后缘执行控制和手动操作",codeExample:{code:I,language:"typescript",highlights:"14, 15, 16, 17, 18, 19, 20, 21, 22, 29, 30, 31, 32, 33, 39, 40, 41, 42, 43"},observationPoints:["启用前缘执行，观察第一次输入的立即响应","禁用前缘执行，观察延迟执行的效果","使用取消和立即执行按钮控制节流行为","观察节流状态的实时变化","比较不同配置下的执行时机"],keyPoints:["前缘执行：第一次变化时立即执行","后缘执行：间隔时间后执行最后一次","手动控制：取消和立即执行","节流状态：显示当前是否在节流期间"],commonTraps:["前缘和后缘都禁用导致不执行","忘记处理isThrottling状态","不理解前缘和后缘的执行时机"],solutions:["至少启用前缘或后缘执行之一","根据isThrottling状态提供用户反馈","理解前缘立即执行，后缘延迟执行的机制"]},{title:"滚动节流演示",component:e.jsx(H,{}),description:"演示滚动事件的节流处理，优化滚动性能",codeExample:{code:z,language:"typescript",highlights:"15, 16, 17, 18, 19, 20, 21, 22, 23, 37, 38, 39, 40, 41, 43, 44, 45, 46, 47, 49, 50, 51, 52, 53"},observationPoints:["滚动页面时，观察实时滚动位置和节流位置的差异","查看滚动统计中的事件过滤效率","注意滚动方向的实时检测","观察滚动进度条的流畅更新","对比总滚动事件和节流处理次数"],keyPoints:["滚动事件是典型的高频事件","节流可以显著减少事件处理次数","100ms节流间隔适合滚动监听","提供滚动统计和性能分析"],commonTraps:["滚动事件处理过于频繁影响性能","节流间隔过长导致滚动不流畅","忘记在组件卸载时清理事件监听"],solutions:["使用节流优化滚动事件处理","选择合适的节流间隔（100-200ms）","在useEffect清理函数中移除事件监听"]}],tutorial:{concepts:["节流的基本原理：限制执行频率，在指定时间间隔内最多执行一次","前缘执行和后缘执行的区别和应用场景","节流与防抖的区别：节流定期执行，防抖延迟执行","高频事件优化的重要性和方法","性能监控和统计分析的实现"],steps:["创建状态存储节流后的值和节流状态","使用 useRef 记录上次执行时间","在 useEffect 中计算时间间隔","根据时间间隔决定立即执行或延迟执行","添加前缘和后缘执行控制","提供手动取消和立即执行方法"],tips:["根据事件类型选择合适的节流间隔","滚动事件100-200ms，resize事件200-300ms","鼠标移动事件16-50ms（接近屏幕刷新率）","提供节流状态反馈给用户","结合性能监控分析节流效果"]},interview:{questions:[{question:"节流和防抖的区别是什么？分别适用于什么场景？",answer:"节流限制执行频率，在指定时间间隔内最多执行一次，会定期执行；防抖延迟执行，重复触发时重置定时器，只执行最后一次。节流适用于滚动、resize等高频事件；防抖适用于搜索建议、自动保存等需要等待用户停止操作的场景。"},{question:"如何选择合适的节流间隔时间？",answer:"需要平衡性能和用户体验：滚动事件100-200ms，resize事件200-300ms，鼠标移动16-50ms（接近60fps），按钮点击300-500ms。间隔太短失去优化效果，太长影响响应性。可以根据具体业务需求和性能测试结果调整。"},{question:"useThrottle 如何实现前缘和后缘执行？",answer:"前缘执行：第一次触发时立即执行，然后开始计时；后缘执行：在节流间隔结束时执行最后一次操作。可以同时启用两者，实现首次立即响应，后续定期更新的效果。通过时间戳比较和定时器实现。"},{question:"节流在什么情况下可能失效？如何避免？",answer:"1. 组件重新渲染导致节流重置；2. 时间计算错误；3. 定时器清理不当。解决方案：使用useRef保持引用稳定，正确计算时间间隔，在清理函数中清除定时器，使用useCallback缓存函数。"},{question:"如何监控和分析节流的性能效果？",answer:"通过统计原始事件次数和节流处理次数，计算过滤效率；监控执行时间和CPU使用率；使用Performance API测量性能指标；提供可视化的统计信息帮助调优节流参数。"}],keyPoints:["节流限制频率，防抖延迟执行","根据事件类型选择合适的间隔时间","前缘执行立即响应，后缘执行定期更新","通过性能监控验证优化效果","正确处理定时器和事件监听的清理"]},bestPractices:{dos:["根据事件类型选择合适的节流间隔","为高频事件（滚动、resize）使用节流","提供节流状态的用户反馈","结合性能监控分析优化效果","在组件卸载时清理定时器和事件监听","使用 TypeScript 提供类型安全"],donts:["不要对所有事件使用相同的节流间隔","不要混淆节流和防抖的使用场景","不要设置过长的间隔影响用户体验","不要忘记处理前缘和后缘执行的配置","不要忽略节流状态的反馈","不要在每次渲染时创建新的节流实例"],patterns:["滚动节流模式：100-200ms间隔，优化滚动监听","resize节流模式：200-300ms间隔，优化窗口变化处理","按钮节流模式：300-500ms间隔，防止重复点击","鼠标移动节流：16-50ms间隔，接近屏幕刷新率","API调用节流：根据服务器性能调整间隔","组合节流模式：前缘+后缘执行，兼顾响应性和完整性"]}});export{q as default};
