import{r as s,j as e}from"./index-CKH9Ek1I.js";import{C as P}from"./ComponentTemplate-B8dTsNLj.js";function T(a,m){const[i,j]=s.useState(a);return s.useEffect(()=>{const l=setTimeout(()=>{j(a)},m);return()=>{clearTimeout(l)}},[a,m]),i}function E(a,m,i={}){const[j,l]=s.useState(a),[N,d]=s.useState(!1),u=s.useRef(null),c=s.useRef(null),g=s.useRef(0),x=s.useRef(0),h=s.useRef(!0),{leading:v=!1,trailing:y=!0,maxWait:n}=i,o=s.useCallback(()=>{l(a),d(!1),x.current=Date.now()},[a]),w=s.useCallback(()=>{x.current=Date.now(),v?o():d(!0)},[v,o]),C=s.useCallback(p=>{const $=p-g.current,L=p-x.current,R=m-$;return n!==void 0?Math.min(R,n-L):R},[m,n]),b=s.useCallback(p=>{const $=p-g.current,L=p-x.current;return g.current===0||$>=m||$<0||n!==void 0&&L>=n},[m,n]),D=s.useCallback(()=>{u.current=null,y&&g.current!==0?o():d(!1),g.current=0},[y,o]),k=s.useCallback(()=>{const p=Date.now();if(b(p))D();else{const $=C(p);u.current=setTimeout(k,$)}},[b,D,C]),r=s.useCallback(()=>{u.current&&(clearTimeout(u.current),u.current=null),c.current&&(clearTimeout(c.current),c.current=null),g.current=0,x.current=0,h.current=!0,d(!1)},[]),S=s.useCallback(()=>{u.current&&(o(),r())},[o,r]);return s.useEffect(()=>{const p=Date.now();return g.current=p,b(p)&&(h.current&&(h.current=!1,w()),n!==void 0&&(c.current=setTimeout(()=>{N&&o()},n))),!u.current&&y&&(u.current=setTimeout(k,m)),()=>{u.current&&clearTimeout(u.current),c.current&&clearTimeout(c.current)}},[a,m,b,w,y,k,n,N,o]),{debouncedValue:j,isPending:N,cancel:r,flush:S}}const z=()=>{const[a,m]=s.useState(""),[i,j]=s.useState(500),[l,N]=s.useState(!1),[d,u]=s.useState(!0),[c,g]=s.useState(void 0),{debouncedValue:x,isPending:h,cancel:v,flush:y}=E(a,i,{leading:l,trailing:d,maxWait:c}),[n,o]=s.useState([]),[w,C]=s.useState([]),b=t=>{const f=new Date().toLocaleTimeString();o(V=>[...V.slice(-9),`${f}: ${t}`])},D=t=>{const f=new Date().toLocaleTimeString();C(V=>[...V.slice(-9),`${f}: ${t}`])};s.useEffect(()=>{x&&D(`API调用: 搜索 "${x}"`)},[x]);const k=t=>{m(t),b(`输入: "${t}"`)},r=()=>{v(),b("取消防抖")},S=()=>{y(),b("立即执行防抖")},p=t=>{j(t),b(`延迟改为: ${t}ms`)},$=t=>{N(t),b(`${t?"启用":"禁用"}前缘执行`)},L=t=>{u(t),b(`${t?"启用":"禁用"}后缘执行`)},R=t=>{const f=t===""?void 0:Number(t);g(f),b(`最大等待时间: ${f?f+"ms":"无限制"}`)},A=()=>{m(""),o([]),C([]),v(),b("清空所有内容")},I=()=>{o([]),C([])};return e.jsxs("div",{className:"p-6 bg-white rounded-lg border border-gray-200",children:[e.jsxs("div",{className:"flex items-center justify-between mb-4",children:[e.jsx("h3",{className:"text-lg font-semibold text-gray-800",children:"高级防抖演示"}),e.jsxs("div",{className:"space-x-2",children:[e.jsx("button",{onClick:r,disabled:!h,className:"px-3 py-1 bg-orange-500 text-white rounded text-sm hover:bg-orange-600 disabled:opacity-50 disabled:cursor-not-allowed transition-colors",children:"取消防抖"}),e.jsx("button",{onClick:S,disabled:!h,className:"px-3 py-1 bg-green-500 text-white rounded text-sm hover:bg-green-600 disabled:opacity-50 disabled:cursor-not-allowed transition-colors",children:"立即执行"}),e.jsx("button",{onClick:A,className:"px-3 py-1 bg-red-500 text-white rounded text-sm hover:bg-red-600 transition-colors",children:"清空所有"}),e.jsx("button",{onClick:I,className:"px-3 py-1 bg-gray-500 text-white rounded text-sm hover:bg-gray-600 transition-colors",children:"清空日志"})]})]}),e.jsxs("div",{className:"grid grid-cols-1 lg:grid-cols-2 gap-6",children:[e.jsxs("div",{className:"space-y-4",children:[e.jsxs("div",{children:[e.jsx("label",{className:"block text-sm font-medium text-gray-700 mb-2",children:"搜索输入:"}),e.jsx("input",{type:"text",value:a,onChange:t=>k(t.target.value),placeholder:"输入搜索内容...",className:"w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"}),e.jsxs("div",{className:"flex items-center justify-between mt-1",children:[e.jsxs("p",{className:"text-sm text-gray-600",children:['当前输入: "',a,'"']}),e.jsxs("div",{className:`flex items-center space-x-2 px-2 py-1 rounded text-xs ${h?"bg-yellow-100 text-yellow-800":"bg-green-100 text-green-800"}`,children:[e.jsx("div",{className:`w-2 h-2 rounded-full ${h?"bg-yellow-500 animate-pulse":"bg-green-500"}`}),e.jsx("span",{children:h?"等待中":"已同步"})]})]})]}),e.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-4",children:[e.jsxs("div",{children:[e.jsxs("label",{className:"block text-sm font-medium text-gray-700 mb-2",children:["延迟时间: ",i,"ms"]}),e.jsx("input",{type:"range",min:"100",max:"2000",step:"100",value:i,onChange:t=>p(Number(t.target.value)),className:"w-full"})]}),e.jsxs("div",{children:[e.jsx("label",{className:"block text-sm font-medium text-gray-700 mb-2",children:"最大等待时间 (ms):"}),e.jsx("input",{type:"number",value:c||"",onChange:t=>R(t.target.value),placeholder:"无限制",min:"100",step:"100",className:"w-full px-3 py-1 border border-gray-300 rounded text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"})]})]}),e.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-4",children:[e.jsxs("label",{className:"flex items-center space-x-2",children:[e.jsx("input",{type:"checkbox",checked:l,onChange:t=>$(t.target.checked),className:"text-blue-500 focus:ring-blue-500"}),e.jsx("span",{className:"text-sm text-gray-700",children:"前缘执行 (立即执行第一次)"})]}),e.jsxs("label",{className:"flex items-center space-x-2",children:[e.jsx("input",{type:"checkbox",checked:d,onChange:t=>L(t.target.checked),className:"text-blue-500 focus:ring-blue-500"}),e.jsx("span",{className:"text-sm text-gray-700",children:"后缘执行 (延迟后执行)"})]})]}),e.jsxs("div",{className:"p-3 bg-purple-50 rounded border border-purple-200",children:[e.jsx("h4",{className:"font-semibold text-purple-800 mb-2",children:"防抖状态:"}),e.jsxs("div",{className:"text-sm text-purple-700 space-y-1",children:[e.jsxs("p",{children:[e.jsx("strong",{children:"原始值:"}),' "',a,'"']}),e.jsxs("p",{children:[e.jsx("strong",{children:"防抖值:"}),' "',x,'"']}),e.jsxs("p",{children:[e.jsx("strong",{children:"等待状态:"})," ",h?"等待中":"已完成"]}),e.jsxs("p",{children:[e.jsx("strong",{children:"配置:"}),l&&" 前缘",d&&" 后缘",c&&` 最大${c}ms`]})]})]})]}),e.jsxs("div",{className:"space-y-4",children:[e.jsxs("div",{children:[e.jsx("h4",{className:"font-semibold text-gray-700 mb-3",children:"操作日志:"}),e.jsx("div",{className:"bg-gray-50 rounded-lg p-3 h-40 overflow-y-auto",children:n.length===0?e.jsx("p",{className:"text-gray-500 text-sm",children:"开始操作查看日志"}):e.jsx("div",{className:"space-y-1",children:n.map((t,f)=>e.jsx("div",{className:"text-sm font-mono text-gray-700",children:t},f))})})]}),e.jsxs("div",{children:[e.jsx("h4",{className:"font-semibold text-gray-700 mb-3",children:"API调用记录:"}),e.jsx("div",{className:"bg-blue-50 rounded-lg p-3 h-32 overflow-y-auto",children:w.length===0?e.jsx("p",{className:"text-blue-500 text-sm",children:"暂无API调用"}):e.jsx("div",{className:"space-y-1",children:w.map((t,f)=>e.jsx("div",{className:"text-sm font-mono text-blue-700",children:t},f))})})]}),e.jsxs("div",{className:"p-3 bg-teal-50 rounded border border-teal-200",children:[e.jsx("h4",{className:"font-semibold text-teal-800 mb-2",children:"配置说明:"}),e.jsxs("ul",{className:"text-sm text-teal-700 space-y-1",children:[e.jsxs("li",{children:[e.jsx("strong",{children:"前缘执行:"})," 第一次变化时立即执行"]}),e.jsxs("li",{children:[e.jsx("strong",{children:"后缘执行:"})," 延迟时间后执行"]}),e.jsxs("li",{children:[e.jsx("strong",{children:"最大等待:"})," 超过此时间强制执行"]}),e.jsxs("li",{children:[e.jsx("strong",{children:"取消:"})," 取消等待中的执行"]}),e.jsxs("li",{children:[e.jsx("strong",{children:"立即执行:"})," 跳过等待立即执行"]})]})]})]})]}),e.jsx("div",{className:"mt-4 p-3 bg-cyan-50 rounded border border-cyan-200",children:e.jsx("p",{className:"text-sm text-cyan-800",children:"💡 高级防抖提供了更多控制选项：前缘/后缘执行、最大等待时间、手动取消和立即执行，适用于复杂的交互场景。"})})]})},W=`import React, { useState, useEffect } from 'react';
import { useAdvancedDebounce } from './useDebounceHook';

const AdvancedDebounceDemo: React.FC = () => {
  const [inputValue, setInputValue] = useState('');
  const [delay, setDelay] = useState(500);
  const [leading, setLeading] = useState(false);
  const [trailing, setTrailing] = useState(true);
  const [maxWait, setMaxWait] = useState<number | undefined>(undefined);
  
  const { debouncedValue, isPending, cancel, flush } = useAdvancedDebounce(
    inputValue,
    delay,
    { leading, trailing, maxWait }
  );
  
  const [logs, setLogs] = useState<string[]>([]);
  const [apiCalls, setApiCalls] = useState<string[]>([]);

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
    if (debouncedValue) {
      addApiCall(\`API调用: 搜索 "\${debouncedValue}"\`);
    }
  }, [debouncedValue]);

  const handleInputChange = (value: string) => {
    setInputValue(value);
    addLog(\`输入: "\${value}"\`);
  };

  const handleCancel = () => {
    cancel();
    addLog('取消防抖');
  };

  const handleFlush = () => {
    flush();
    addLog('立即执行防抖');
  };

  const handleDelayChange = (newDelay: number) => {
    setDelay(newDelay);
    addLog(\`延迟改为: \${newDelay}ms\`);
  };

  const handleLeadingChange = (checked: boolean) => {
    setLeading(checked);
    addLog(\`\${checked ? '启用' : '禁用'}前缘执行\`);
  };

  const handleTrailingChange = (checked: boolean) => {
    setTrailing(checked);
    addLog(\`\${checked ? '启用' : '禁用'}后缘执行\`);
  };

  const handleMaxWaitChange = (value: string) => {
    const numValue = value === '' ? undefined : Number(value);
    setMaxWait(numValue);
    addLog(\`最大等待时间: \${numValue ? numValue + 'ms' : '无限制'}\`);
  };

  const clearAll = () => {
    setInputValue('');
    setLogs([]);
    setApiCalls([]);
    cancel();
    addLog('清空所有内容');
  };

  const clearLogs = () => {
    setLogs([]);
    setApiCalls([]);
  };

  return (
    <div className="p-6 bg-white rounded-lg border border-gray-200">
      <div className="flex items-center justify-between mb-4">
        <h3 className="text-lg font-semibold text-gray-800">高级防抖演示</h3>
        <div className="space-x-2">
          <button
            onClick={handleCancel}
            disabled={!isPending}
            className="px-3 py-1 bg-orange-500 text-white rounded text-sm hover:bg-orange-600 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
          >
            取消防抖
          </button>
          <button
            onClick={handleFlush}
            disabled={!isPending}
            className="px-3 py-1 bg-green-500 text-white rounded text-sm hover:bg-green-600 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
          >
            立即执行
          </button>
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
              搜索输入:
            </label>
            <input
              type="text"
              value={inputValue}
              onChange={(e) => handleInputChange(e.target.value)}
              placeholder="输入搜索内容..."
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            />
            <div className="flex items-center justify-between mt-1">
              <p className="text-sm text-gray-600">
                当前输入: "{inputValue}"
              </p>
              <div className={\`flex items-center space-x-2 px-2 py-1 rounded text-xs \${
                isPending ? 'bg-yellow-100 text-yellow-800' : 'bg-green-100 text-green-800'
              }\`}>
                <div className={\`w-2 h-2 rounded-full \${
                  isPending ? 'bg-yellow-500 animate-pulse' : 'bg-green-500'
                }\`} />
                <span>{isPending ? '等待中' : '已同步'}</span>
              </div>
            </div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                延迟时间: {delay}ms
              </label>
              <input
                type="range"
                min="100"
                max="2000"
                step="100"
                value={delay}
                onChange={(e) => handleDelayChange(Number(e.target.value))}
                className="w-full"
              />
            </div>
            
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                最大等待时间 (ms):
              </label>
              <input
                type="number"
                value={maxWait || ''}
                onChange={(e) => handleMaxWaitChange(e.target.value)}
                placeholder="无限制"
                min="100"
                step="100"
                className="w-full px-3 py-1 border border-gray-300 rounded text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
            </div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <label className="flex items-center space-x-2">
              <input
                type="checkbox"
                checked={leading}
                onChange={(e) => handleLeadingChange(e.target.checked)}
                className="text-blue-500 focus:ring-blue-500"
              />
              <span className="text-sm text-gray-700">前缘执行 (立即执行第一次)</span>
            </label>
            
            <label className="flex items-center space-x-2">
              <input
                type="checkbox"
                checked={trailing}
                onChange={(e) => handleTrailingChange(e.target.checked)}
                className="text-blue-500 focus:ring-blue-500"
              />
              <span className="text-sm text-gray-700">后缘执行 (延迟后执行)</span>
            </label>
          </div>
          
          <div className="p-3 bg-purple-50 rounded border border-purple-200">
            <h4 className="font-semibold text-purple-800 mb-2">防抖状态:</h4>
            <div className="text-sm text-purple-700 space-y-1">
              <p><strong>原始值:</strong> "{inputValue}"</p>
              <p><strong>防抖值:</strong> "{debouncedValue}"</p>
              <p><strong>等待状态:</strong> {isPending ? '等待中' : '已完成'}</p>
              <p><strong>配置:</strong> 
                {leading && ' 前缘'}
                {trailing && ' 后缘'}
                {maxWait && \` 最大\${maxWait}ms\`}
              </p>
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
          
          <div className="p-3 bg-teal-50 rounded border border-teal-200">
            <h4 className="font-semibold text-teal-800 mb-2">配置说明:</h4>
            <ul className="text-sm text-teal-700 space-y-1">
              <li><strong>前缘执行:</strong> 第一次变化时立即执行</li>
              <li><strong>后缘执行:</strong> 延迟时间后执行</li>
              <li><strong>最大等待:</strong> 超过此时间强制执行</li>
              <li><strong>取消:</strong> 取消等待中的执行</li>
              <li><strong>立即执行:</strong> 跳过等待立即执行</li>
            </ul>
          </div>
        </div>
      </div>
      
      <div className="mt-4 p-3 bg-cyan-50 rounded border border-cyan-200">
        <p className="text-sm text-cyan-800">
          💡 高级防抖提供了更多控制选项：前缘/后缘执行、最大等待时间、手动取消和立即执行，适用于复杂的交互场景。
        </p>
      </div>
    </div>
  );
};

export default AdvancedDebounceDemo;`,M=()=>{const[a,m]=s.useState(""),[i,j]=s.useState(500),l=T(a,i),[N,d]=s.useState([]),[u,c]=s.useState([]),g=n=>{const o=new Date().toLocaleTimeString();d(w=>[...w.slice(-9),`${o}: ${n}`])};s.useEffect(()=>{if(l){g(`执行搜索: "${l}"`);const n=[`${l} 相关结果 1`,`${l} 相关结果 2`,`${l} 相关结果 3`,`关于 ${l} 的信息`,`${l} 最新动态`].filter(()=>Math.random()>.3);c(n)}else c([])},[l]);const x=n=>{m(n),g(`输入变化: "${n}"`)},h=n=>{j(n),g(`延迟时间改为: ${n}ms`)},v=()=>{m(""),d([]),c([]),g("清空所有内容")},y=()=>{d([])};return e.jsxs("div",{className:"p-6 bg-white rounded-lg border border-gray-200",children:[e.jsxs("div",{className:"flex items-center justify-between mb-4",children:[e.jsx("h3",{className:"text-lg font-semibold text-gray-800",children:"基础防抖演示"}),e.jsxs("div",{className:"space-x-2",children:[e.jsx("button",{onClick:v,className:"px-3 py-1 bg-red-500 text-white rounded text-sm hover:bg-red-600 transition-colors",children:"清空所有"}),e.jsx("button",{onClick:y,className:"px-3 py-1 bg-gray-500 text-white rounded text-sm hover:bg-gray-600 transition-colors",children:"清空日志"})]})]}),e.jsxs("div",{className:"grid grid-cols-1 lg:grid-cols-2 gap-6",children:[e.jsxs("div",{className:"space-y-4",children:[e.jsxs("div",{children:[e.jsx("label",{className:"block text-sm font-medium text-gray-700 mb-2",children:"搜索输入 (实时变化):"}),e.jsx("input",{type:"text",value:a,onChange:n=>x(n.target.value),placeholder:"输入搜索内容...",className:"w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"}),e.jsxs("p",{className:"text-sm text-gray-600 mt-1",children:['当前输入: "',a,'" (',a.length," 字符)"]})]}),e.jsxs("div",{children:[e.jsxs("label",{className:"block text-sm font-medium text-gray-700 mb-2",children:["防抖延迟时间: ",i,"ms"]}),e.jsxs("div",{className:"space-y-2",children:[e.jsx("input",{type:"range",min:"100",max:"2000",step:"100",value:i,onChange:n=>h(Number(n.target.value)),className:"w-full"}),e.jsxs("div",{className:"flex justify-between text-xs text-gray-500",children:[e.jsx("span",{children:"100ms"}),e.jsx("span",{children:"1000ms"}),e.jsx("span",{children:"2000ms"})]})]})]}),e.jsxs("div",{className:"p-3 bg-blue-50 rounded border border-blue-200",children:[e.jsx("h4",{className:"font-semibold text-blue-800 mb-2",children:"防抖后的值:"}),e.jsxs("div",{className:"text-blue-700",children:[e.jsxs("p",{className:"font-mono text-lg",children:['"',l,'"']}),e.jsx("p",{className:"text-sm mt-1",children:a===l?"✅ 已同步":`⏳ 等待 ${i}ms 后更新`})]})]}),e.jsxs("div",{className:"border border-gray-200 rounded-lg",children:[e.jsx("div",{className:"bg-gray-50 px-3 py-2 border-b border-gray-200",children:e.jsx("h4",{className:"font-semibold text-gray-700",children:"搜索结果"})}),e.jsx("div",{className:"p-3 min-h-[150px]",children:l?u.length===0?e.jsx("p",{className:"text-gray-500 text-sm text-center py-8",children:"没有找到相关结果"}):e.jsx("div",{className:"space-y-2",children:u.map((n,o)=>e.jsx("div",{className:"p-2 bg-gray-50 rounded hover:bg-gray-100 transition-colors",children:e.jsx("p",{className:"text-gray-800",children:n})},o))}):e.jsx("p",{className:"text-gray-500 text-sm text-center py-8",children:"输入搜索内容查看结果"})})]})]}),e.jsxs("div",{children:[e.jsx("h4",{className:"font-semibold text-gray-700 mb-3",children:"操作日志:"}),e.jsx("div",{className:"bg-gray-50 rounded-lg p-3 min-h-[200px]",children:N.length===0?e.jsx("p",{className:"text-gray-500 text-sm",children:"开始输入查看日志"}):e.jsx("div",{className:"space-y-1 max-h-60 overflow-y-auto",children:N.map((n,o)=>e.jsx("div",{className:"text-sm font-mono text-gray-700",children:n},o))})}),e.jsxs("div",{className:"mt-4 p-3 bg-green-50 rounded border border-green-200",children:[e.jsx("h4",{className:"font-semibold text-green-800 mb-2",children:"防抖状态:"}),e.jsxs("div",{className:"text-sm text-green-700 space-y-1",children:[e.jsxs("p",{children:[e.jsx("strong",{children:"原始值:"}),' "',a,'"']}),e.jsxs("p",{children:[e.jsx("strong",{children:"防抖值:"}),' "',l,'"']}),e.jsxs("p",{children:[e.jsx("strong",{children:"延迟时间:"})," ",i,"ms"]}),e.jsxs("p",{children:[e.jsx("strong",{children:"状态:"})," ",a===l?"已同步":"等待中"]})]})]}),e.jsxs("div",{className:"mt-4 p-3 bg-yellow-50 rounded border border-yellow-200",children:[e.jsx("h4",{className:"font-semibold text-yellow-800 mb-2",children:"使用说明:"}),e.jsxs("ul",{className:"text-sm text-yellow-700 space-y-1",children:[e.jsx("li",{children:"• 快速输入时，只有最后一次输入会触发搜索"}),e.jsx("li",{children:"• 调整延迟时间观察防抖效果"}),e.jsx("li",{children:"• 防抖可以减少API调用次数"}),e.jsx("li",{children:"• 适用于搜索、自动保存等场景"})]})]})]})]}),e.jsx("div",{className:"mt-4 p-3 bg-indigo-50 rounded border border-indigo-200",children:e.jsx("p",{className:"text-sm text-indigo-800",children:"💡 useDebounce 将频繁变化的值延迟更新，只有在指定时间内没有新变化时才更新，有效减少不必要的操作。"})})]})},q=`import React, { useState, useEffect } from 'react';\r
import { useDebounce } from './useDebounceHook';\r
\r
const BasicDebounceDemo: React.FC = () => {\r
  const [inputValue, setInputValue] = useState('');\r
  const [delay, setDelay] = useState(500);\r
  const debouncedValue = useDebounce(inputValue, delay);\r
  const [logs, setLogs] = useState<string[]>([]);\r
  const [searchResults, setSearchResults] = useState<string[]>([]);\r
\r
  const addLog = (message: string) => {\r
    const timestamp = new Date().toLocaleTimeString();\r
    setLogs(prev => [...prev.slice(-9), \`\${timestamp}: \${message}\`]);\r
  };\r
\r
  // 模拟搜索API调用\r
  useEffect(() => {\r
    if (debouncedValue) {\r
      addLog(\`执行搜索: "\${debouncedValue}"\`);\r
      // 模拟API调用\r
      const mockResults = [\r
        \`\${debouncedValue} 相关结果 1\`,\r
        \`\${debouncedValue} 相关结果 2\`,\r
        \`\${debouncedValue} 相关结果 3\`,\r
        \`关于 \${debouncedValue} 的信息\`,\r
        \`\${debouncedValue} 最新动态\`\r
      ].filter(() => Math.random() > 0.3);\r
      setSearchResults(mockResults);\r
    } else {\r
      setSearchResults([]);\r
    }\r
  }, [debouncedValue]);\r
\r
  const handleInputChange = (value: string) => {\r
    setInputValue(value);\r
    addLog(\`输入变化: "\${value}"\`);\r
  };\r
\r
  const handleDelayChange = (newDelay: number) => {\r
    setDelay(newDelay);\r
    addLog(\`延迟时间改为: \${newDelay}ms\`);\r
  };\r
\r
  const clearAll = () => {\r
    setInputValue('');\r
    setLogs([]);\r
    setSearchResults([]);\r
    addLog('清空所有内容');\r
  };\r
\r
  const clearLogs = () => {\r
    setLogs([]);\r
  };\r
\r
  return (\r
    <div className="p-6 bg-white rounded-lg border border-gray-200">\r
      <div className="flex items-center justify-between mb-4">\r
        <h3 className="text-lg font-semibold text-gray-800">基础防抖演示</h3>\r
        <div className="space-x-2">\r
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
              搜索输入 (实时变化):\r
            </label>\r
            <input\r
              type="text"\r
              value={inputValue}\r
              onChange={(e) => handleInputChange(e.target.value)}\r
              placeholder="输入搜索内容..."\r
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"\r
            />\r
            <p className="text-sm text-gray-600 mt-1">\r
              当前输入: "{inputValue}" ({inputValue.length} 字符)\r
            </p>\r
          </div>\r
          \r
          <div>\r
            <label className="block text-sm font-medium text-gray-700 mb-2">\r
              防抖延迟时间: {delay}ms\r
            </label>\r
            <div className="space-y-2">\r
              <input\r
                type="range"\r
                min="100"\r
                max="2000"\r
                step="100"\r
                value={delay}\r
                onChange={(e) => handleDelayChange(Number(e.target.value))}\r
                className="w-full"\r
              />\r
              <div className="flex justify-between text-xs text-gray-500">\r
                <span>100ms</span>\r
                <span>1000ms</span>\r
                <span>2000ms</span>\r
              </div>\r
            </div>\r
          </div>\r
          \r
          <div className="p-3 bg-blue-50 rounded border border-blue-200">\r
            <h4 className="font-semibold text-blue-800 mb-2">防抖后的值:</h4>\r
            <div className="text-blue-700">\r
              <p className="font-mono text-lg">"{debouncedValue}"</p>\r
              <p className="text-sm mt-1">\r
                {inputValue === debouncedValue ? \r
                  '✅ 已同步' : \r
                  \`⏳ 等待 \${delay}ms 后更新\`\r
                }\r
              </p>\r
            </div>\r
          </div>\r
          \r
          <div className="border border-gray-200 rounded-lg">\r
            <div className="bg-gray-50 px-3 py-2 border-b border-gray-200">\r
              <h4 className="font-semibold text-gray-700">搜索结果</h4>\r
            </div>\r
            <div className="p-3 min-h-[150px]">\r
              {!debouncedValue ? (\r
                <p className="text-gray-500 text-sm text-center py-8">\r
                  输入搜索内容查看结果\r
                </p>\r
              ) : searchResults.length === 0 ? (\r
                <p className="text-gray-500 text-sm text-center py-8">\r
                  没有找到相关结果\r
                </p>\r
              ) : (\r
                <div className="space-y-2">\r
                  {searchResults.map((result, index) => (\r
                    <div key={index} className="p-2 bg-gray-50 rounded hover:bg-gray-100 transition-colors">\r
                      <p className="text-gray-800">{result}</p>\r
                    </div>\r
                  ))}\r
                </div>\r
              )}\r
            </div>\r
          </div>\r
        </div>\r
        \r
        <div>\r
          <h4 className="font-semibold text-gray-700 mb-3">操作日志:</h4>\r
          <div className="bg-gray-50 rounded-lg p-3 min-h-[200px]">\r
            {logs.length === 0 ? (\r
              <p className="text-gray-500 text-sm">开始输入查看日志</p>\r
            ) : (\r
              <div className="space-y-1 max-h-60 overflow-y-auto">\r
                {logs.map((log, index) => (\r
                  <div key={index} className="text-sm font-mono text-gray-700">\r
                    {log}\r
                  </div>\r
                ))}\r
              </div>\r
            )}\r
          </div>\r
          \r
          <div className="mt-4 p-3 bg-green-50 rounded border border-green-200">\r
            <h4 className="font-semibold text-green-800 mb-2">防抖状态:</h4>\r
            <div className="text-sm text-green-700 space-y-1">\r
              <p><strong>原始值:</strong> "{inputValue}"</p>\r
              <p><strong>防抖值:</strong> "{debouncedValue}"</p>\r
              <p><strong>延迟时间:</strong> {delay}ms</p>\r
              <p><strong>状态:</strong> {inputValue === debouncedValue ? '已同步' : '等待中'}</p>\r
            </div>\r
          </div>\r
          \r
          <div className="mt-4 p-3 bg-yellow-50 rounded border border-yellow-200">\r
            <h4 className="font-semibold text-yellow-800 mb-2">使用说明:</h4>\r
            <ul className="text-sm text-yellow-700 space-y-1">\r
              <li>• 快速输入时，只有最后一次输入会触发搜索</li>\r
              <li>• 调整延迟时间观察防抖效果</li>\r
              <li>• 防抖可以减少API调用次数</li>\r
              <li>• 适用于搜索、自动保存等场景</li>\r
            </ul>\r
          </div>\r
        </div>\r
      </div>\r
      \r
      <div className="mt-4 p-3 bg-indigo-50 rounded border border-indigo-200">\r
        <p className="text-sm text-indigo-800">\r
          💡 useDebounce 将频繁变化的值延迟更新，只有在指定时间内没有新变化时才更新，有效减少不必要的操作。\r
        </p>\r
      </div>\r
    </div>\r
  );\r
};\r
\r
export default BasicDebounceDemo;`,F=()=>{const[a,m]=s.useState(""),[i,j]=s.useState(""),[l,N]=s.useState({width:0,height:0}),d=T(a,300),u=T(i,1e3),c=T(l,200),[g,x]=s.useState([]),[h,v]=s.useState("saved"),[y,n]=s.useState([]),o=r=>{const S=new Date().toLocaleTimeString();n(p=>[...p.slice(-9),`${S}: ${r}`])};s.useEffect(()=>{if(d){o(`执行搜索: "${d}"`);const r=[`${d} - 相关文章`,`${d} - 用户指南`,`${d} - 最佳实践`,`关于 ${d} 的讨论`,`${d} - 案例研究`].filter(()=>Math.random()>.4);x(r)}else x([])},[d]),s.useEffect(()=>{i&&u===i&&(v("saving"),o(`自动保存: ${i.length} 字符`),setTimeout(()=>{v("saved"),o("保存完成")},500))},[u,i]),s.useEffect(()=>{const r=()=>{N({width:window.innerWidth,height:window.innerHeight})};return r(),window.addEventListener("resize",r),()=>window.removeEventListener("resize",r)},[]),s.useEffect(()=>{c.width>0&&o(`窗口大小变化: ${c.width}x${c.height}`)},[c]);const w=r=>{m(r),r!==d&&o(`搜索输入: "${r}"`)},C=r=>{j(r),v("unsaved"),r!==u&&o(`内容修改: ${r.length} 字符`)},b=()=>{n([])},D=()=>{switch(h){case"saved":return"text-green-600";case"saving":return"text-yellow-600";case"unsaved":return"text-red-600";default:return"text-gray-600"}},k=()=>{switch(h){case"saved":return"✅ 已保存";case"saving":return"💾 保存中...";case"unsaved":return"⚠️ 未保存";default:return"状态未知"}};return e.jsxs("div",{className:"p-6 bg-white rounded-lg border border-gray-200",children:[e.jsxs("div",{className:"flex items-center justify-between mb-4",children:[e.jsx("h3",{className:"text-lg font-semibold text-gray-800",children:"实际应用演示"}),e.jsx("button",{onClick:b,className:"px-3 py-1 bg-gray-500 text-white rounded text-sm hover:bg-gray-600 transition-colors",children:"清空日志"})]}),e.jsxs("div",{className:"grid grid-cols-1 lg:grid-cols-2 gap-6",children:[e.jsxs("div",{className:"space-y-6",children:[e.jsxs("div",{className:"border border-gray-200 rounded-lg p-4",children:[e.jsx("h4",{className:"font-semibold text-gray-800 mb-3",children:"🔍 实时搜索"}),e.jsx("input",{type:"text",value:a,onChange:r=>w(r.target.value),placeholder:"输入搜索关键词...",className:"w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent mb-3"}),e.jsxs("div",{className:"text-sm text-gray-600 mb-3",children:[e.jsxs("p",{children:['输入值: "',a,'"']}),e.jsxs("p",{children:['防抖值: "',d,'"']}),e.jsx("p",{children:"延迟: 300ms"})]}),e.jsx("div",{className:"max-h-32 overflow-y-auto",children:g.length===0?e.jsx("p",{className:"text-gray-500 text-sm",children:"输入关键词开始搜索"}):e.jsx("div",{className:"space-y-1",children:g.map((r,S)=>e.jsx("div",{className:"p-2 bg-blue-50 rounded text-sm",children:r},S))})})]}),e.jsxs("div",{className:"border border-gray-200 rounded-lg p-4",children:[e.jsxs("div",{className:"flex items-center justify-between mb-3",children:[e.jsx("h4",{className:"font-semibold text-gray-800",children:"💾 自动保存编辑器"}),e.jsx("span",{className:`text-sm font-medium ${D()}`,children:k()})]}),e.jsx("textarea",{value:i,onChange:r=>C(r.target.value),placeholder:"输入内容，1秒后自动保存...",rows:4,className:"w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent resize-none mb-3"}),e.jsxs("div",{className:"text-sm text-gray-600",children:[e.jsxs("p",{children:["当前内容: ",i.length," 字符"]}),e.jsxs("p",{children:["防抖内容: ",u.length," 字符"]}),e.jsx("p",{children:"延迟: 1000ms"})]})]}),e.jsxs("div",{className:"border border-gray-200 rounded-lg p-4",children:[e.jsx("h4",{className:"font-semibold text-gray-800 mb-3",children:"📐 窗口大小监听"}),e.jsxs("div",{className:"text-sm text-gray-600 space-y-1",children:[e.jsxs("p",{children:["当前大小: ",l.width," x ",l.height]}),e.jsxs("p",{children:["防抖大小: ",c.width," x ",c.height]}),e.jsx("p",{children:"延迟: 200ms"}),e.jsx("p",{className:"text-xs text-gray-500 mt-2",children:"💡 调整浏览器窗口大小查看防抖效果"})]})]})]}),e.jsxs("div",{children:[e.jsx("h4",{className:"font-semibold text-gray-700 mb-3",children:"操作日志:"}),e.jsx("div",{className:"bg-gray-50 rounded-lg p-3 h-96 overflow-y-auto",children:y.length===0?e.jsx("p",{className:"text-gray-500 text-sm",children:"开始操作查看日志"}):e.jsx("div",{className:"space-y-1",children:y.map((r,S)=>e.jsx("div",{className:"text-sm font-mono text-gray-700",children:r},S))})}),e.jsxs("div",{className:"mt-4 p-3 bg-emerald-50 rounded border border-emerald-200",children:[e.jsx("h4",{className:"font-semibold text-emerald-800 mb-2",children:"应用场景:"}),e.jsxs("ul",{className:"text-sm text-emerald-700 space-y-1",children:[e.jsxs("li",{children:["• ",e.jsx("strong",{children:"搜索:"})," 减少API调用，提升用户体验"]}),e.jsxs("li",{children:["• ",e.jsx("strong",{children:"自动保存:"})," 避免频繁保存，减轻服务器压力"]}),e.jsxs("li",{children:["• ",e.jsx("strong",{children:"窗口事件:"})," 优化resize等高频事件处理"]}),e.jsxs("li",{children:["• ",e.jsx("strong",{children:"表单验证:"})," 延迟验证，避免输入时频繁提示"]})]})]})]})]}),e.jsx("div",{className:"mt-4 p-3 bg-violet-50 rounded border border-violet-200",children:e.jsx("p",{className:"text-sm text-violet-800",children:"💡 防抖在实际应用中非常有用：搜索建议、自动保存、窗口事件处理等场景都能显著提升性能和用户体验。"})})]})},H=`import React, { useEffect, useState } from "react";\r
\r
import { useDebounce } from "./useDebounceHook";\r
\r
const PracticalDemo: React.FC = () => {\r
  const [searchTerm, setSearchTerm] = useState("");\r
  const [autoSaveContent, setAutoSaveContent] = useState("");\r
  const [resizeInfo, setResizeInfo] = useState({ width: 0, height: 0 });\r
\r
  const debouncedSearchTerm = useDebounce(searchTerm, 300);\r
  const debouncedAutoSave = useDebounce(autoSaveContent, 1000);\r
  const debouncedResize = useDebounce(resizeInfo, 200);\r
\r
  const [searchResults, setSearchResults] = useState<string[]>([]);\r
  const [saveStatus, setSaveStatus] = useState<"saved" | "saving" | "unsaved">(\r
    "saved"\r
  );\r
  const [logs, setLogs] = useState<string[]>([]);\r
\r
  const addLog = (message: string) => {\r
    const timestamp = new Date().toLocaleTimeString();\r
    setLogs((prev) => [...prev.slice(-9), \`\${timestamp}: \${message}\`]);\r
  };\r
\r
  // 搜索功能\r
  useEffect(() => {\r
    if (debouncedSearchTerm) {\r
      addLog(\`执行搜索: "\${debouncedSearchTerm}"\`);\r
      const mockResults = [\r
        \`\${debouncedSearchTerm} - 相关文章\`,\r
        \`\${debouncedSearchTerm} - 用户指南\`,\r
        \`\${debouncedSearchTerm} - 最佳实践\`,\r
        \`关于 \${debouncedSearchTerm} 的讨论\`,\r
        \`\${debouncedSearchTerm} - 案例研究\`,\r
      ].filter(() => Math.random() > 0.4);\r
      setSearchResults(mockResults);\r
    } else {\r
      setSearchResults([]);\r
    }\r
  }, [debouncedSearchTerm]);\r
\r
  // 自动保存功能\r
  useEffect(() => {\r
    if (autoSaveContent && debouncedAutoSave === autoSaveContent) {\r
      setSaveStatus("saving");\r
      addLog(\`自动保存: \${autoSaveContent.length} 字符\`);\r
\r
      // 模拟保存API调用\r
      setTimeout(() => {\r
        setSaveStatus("saved");\r
        addLog("保存完成");\r
      }, 500);\r
    }\r
  }, [debouncedAutoSave, autoSaveContent]);\r
\r
  // 窗口大小变化监听\r
  useEffect(() => {\r
    const handleResize = () => {\r
      setResizeInfo({\r
        width: window.innerWidth,\r
        height: window.innerHeight,\r
      });\r
    };\r
\r
    handleResize(); // 初始化\r
    window.addEventListener("resize", handleResize);\r
    return () => window.removeEventListener("resize", handleResize);\r
  }, []);\r
\r
  // 处理防抖后的窗口大小变化\r
  useEffect(() => {\r
    if (debouncedResize.width > 0) {\r
      addLog(\r
        \`窗口大小变化: \${debouncedResize.width}x\${debouncedResize.height}\`\r
      );\r
    }\r
  }, [debouncedResize]);\r
\r
  const handleSearchChange = (value: string) => {\r
    setSearchTerm(value);\r
    if (value !== debouncedSearchTerm) {\r
      addLog(\`搜索输入: "\${value}"\`);\r
    }\r
  };\r
\r
  const handleContentChange = (value: string) => {\r
    setAutoSaveContent(value);\r
    setSaveStatus("unsaved");\r
    if (value !== debouncedAutoSave) {\r
      addLog(\`内容修改: \${value.length} 字符\`);\r
    }\r
  };\r
\r
  const clearLogs = () => {\r
    setLogs([]);\r
  };\r
\r
  const getSaveStatusColor = () => {\r
    switch (saveStatus) {\r
      case "saved":\r
        return "text-green-600";\r
      case "saving":\r
        return "text-yellow-600";\r
      case "unsaved":\r
        return "text-red-600";\r
      default:\r
        return "text-gray-600";\r
    }\r
  };\r
\r
  const getSaveStatusText = () => {\r
    switch (saveStatus) {\r
      case "saved":\r
        return "✅ 已保存";\r
      case "saving":\r
        return "💾 保存中...";\r
      case "unsaved":\r
        return "⚠️ 未保存";\r
      default:\r
        return "状态未知";\r
    }\r
  };\r
\r
  return (\r
    <div className="p-6 bg-white rounded-lg border border-gray-200">\r
      <div className="flex items-center justify-between mb-4">\r
        <h3 className="text-lg font-semibold text-gray-800">实际应用演示</h3>\r
        <button\r
          onClick={clearLogs}\r
          className="px-3 py-1 bg-gray-500 text-white rounded text-sm hover:bg-gray-600 transition-colors"\r
        >\r
          清空日志\r
        </button>\r
      </div>\r
\r
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">\r
        <div className="space-y-6">\r
          {/* 搜索功能 */}\r
          <div className="border border-gray-200 rounded-lg p-4">\r
            <h4 className="font-semibold text-gray-800 mb-3">🔍 实时搜索</h4>\r
            <input\r
              type="text"\r
              value={searchTerm}\r
              onChange={(e) => handleSearchChange(e.target.value)}\r
              placeholder="输入搜索关键词..."\r
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent mb-3"\r
            />\r
            <div className="text-sm text-gray-600 mb-3">\r
              <p>输入值: "{searchTerm}"</p>\r
              <p>防抖值: "{debouncedSearchTerm}"</p>\r
              <p>延迟: 300ms</p>\r
            </div>\r
            <div className="max-h-32 overflow-y-auto">\r
              {searchResults.length === 0 ? (\r
                <p className="text-gray-500 text-sm">输入关键词开始搜索</p>\r
              ) : (\r
                <div className="space-y-1">\r
                  {searchResults.map((result, index) => (\r
                    <div key={index} className="p-2 bg-blue-50 rounded text-sm">\r
                      {result}\r
                    </div>\r
                  ))}\r
                </div>\r
              )}\r
            </div>\r
          </div>\r
\r
          {/* 自动保存功能 */}\r
          <div className="border border-gray-200 rounded-lg p-4">\r
            <div className="flex items-center justify-between mb-3">\r
              <h4 className="font-semibold text-gray-800">💾 自动保存编辑器</h4>\r
              <span className={\`text-sm font-medium \${getSaveStatusColor()}\`}>\r
                {getSaveStatusText()}\r
              </span>\r
            </div>\r
            <textarea\r
              value={autoSaveContent}\r
              onChange={(e) => handleContentChange(e.target.value)}\r
              placeholder="输入内容，1秒后自动保存..."\r
              rows={4}\r
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent resize-none mb-3"\r
            />\r
            <div className="text-sm text-gray-600">\r
              <p>当前内容: {autoSaveContent.length} 字符</p>\r
              <p>防抖内容: {debouncedAutoSave.length} 字符</p>\r
              <p>延迟: 1000ms</p>\r
            </div>\r
          </div>\r
\r
          {/* 窗口大小监听 */}\r
          <div className="border border-gray-200 rounded-lg p-4">\r
            <h4 className="font-semibold text-gray-800 mb-3">\r
              📐 窗口大小监听\r
            </h4>\r
            <div className="text-sm text-gray-600 space-y-1">\r
              <p>\r
                当前大小: {resizeInfo.width} x {resizeInfo.height}\r
              </p>\r
              <p>\r
                防抖大小: {debouncedResize.width} x {debouncedResize.height}\r
              </p>\r
              <p>延迟: 200ms</p>\r
              <p className="text-xs text-gray-500 mt-2">\r
                💡 调整浏览器窗口大小查看防抖效果\r
              </p>\r
            </div>\r
          </div>\r
        </div>\r
\r
        <div>\r
          <h4 className="font-semibold text-gray-700 mb-3">操作日志:</h4>\r
          <div className="bg-gray-50 rounded-lg p-3 h-96 overflow-y-auto">\r
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
\r
          <div className="mt-4 p-3 bg-emerald-50 rounded border border-emerald-200">\r
            <h4 className="font-semibold text-emerald-800 mb-2">应用场景:</h4>\r
            <ul className="text-sm text-emerald-700 space-y-1">\r
              <li>\r
                • <strong>搜索:</strong> 减少API调用，提升用户体验\r
              </li>\r
              <li>\r
                • <strong>自动保存:</strong> 避免频繁保存，减轻服务器压力\r
              </li>\r
              <li>\r
                • <strong>窗口事件:</strong> 优化resize等高频事件处理\r
              </li>\r
              <li>\r
                • <strong>表单验证:</strong> 延迟验证，避免输入时频繁提示\r
              </li>\r
            </ul>\r
          </div>\r
        </div>\r
      </div>\r
\r
      <div className="mt-4 p-3 bg-violet-50 rounded border border-violet-200">\r
        <p className="text-sm text-violet-800">\r
          💡\r
          防抖在实际应用中非常有用：搜索建议、自动保存、窗口事件处理等场景都能显著提升性能和用户体验。\r
        </p>\r
      </div>\r
    </div>\r
  );\r
};\r
\r
export default PracticalDemo;\r
`,G=()=>e.jsx(P,{title:"useDebounce",description:"自定义 Hook，用于防抖处理。它将频繁变化的值延迟更新，只有在指定时间内没有新变化时才更新，有效减少不必要的操作，提升应用性能。",overview:[{title:"核心功能",items:["延迟值更新，减少频繁操作","自动清理定时器，避免内存泄漏","支持动态调整延迟时间","提供高级控制选项"]},{title:"主要优势",items:["减少API调用次数","提升应用性能","改善用户体验","降低服务器压力"]},{title:"适用场景",items:["搜索建议和实时搜索","自动保存功能","窗口resize等高频事件","表单验证和输入处理"]},{title:"注意事项",items:["合理设置延迟时间","考虑用户体验和响应性","处理组件卸载时的清理","避免过度防抖影响交互"]}],examples:[{title:"基础防抖演示",component:e.jsx(M,{}),description:"演示 useDebounce 的基本用法，包括搜索防抖和延迟时间调整",observationPoints:["快速输入时，观察防抖值的延迟更新","调整延迟时间，观察防抖效果的变化","注意搜索只在防抖值变化时触发","查看操作日志中的时间差异","观察输入值和防抖值的同步状态"],keyPoints:["useDebounce 延迟值的更新","只有在指定时间内没有新变化时才更新","有效减少API调用次数","自动清理定时器避免内存泄漏"],commonTraps:["延迟时间设置过长影响用户体验","延迟时间设置过短失去防抖效果","忘记处理组件卸载时的清理"],solutions:["根据具体场景合理设置延迟时间","搜索建议300-500ms，自动保存1000ms","useEffect 返回清理函数"],codeExample:{title:"基础 useDebounce 实现",code:q,language:"typescript",highlights:"7,8,9,10,12,13,14,15,25,26,27,28,29"}},{title:"高级防抖演示",component:e.jsx(z,{}),description:"演示高级防抖功能，包括前缘/后缘执行、最大等待时间、手动控制等",observationPoints:["启用前缘执行，观察第一次输入的立即响应","设置最大等待时间，观察强制执行机制","使用取消和立即执行按钮控制防抖行为","观察等待状态的实时变化","比较不同配置下的执行时机"],keyPoints:["前缘执行：第一次变化时立即执行","后缘执行：延迟时间后执行","最大等待时间：防止无限延迟","手动控制：取消和立即执行"],commonTraps:["前缘和后缘都禁用导致不执行","最大等待时间设置不当","忘记处理isPending状态"],solutions:["至少启用前缘或后缘执行之一","最大等待时间应大于延迟时间","根据isPending状态提供用户反馈"],codeExample:{title:"高级防抖实现",code:W,language:"typescript",highlights:"4,5,6,7,16,17,18,21,22,23,24,25,26,29,30,31,32,33,37,38,39,48,49,50,51,52,53,54"}},{title:"实际应用演示",component:e.jsx(F,{}),description:"演示防抖在实际应用中的使用场景：搜索、自动保存、窗口事件处理",observationPoints:["搜索框快速输入时，只有最后的输入会触发搜索","编辑器内容变化时，1秒后自动保存","调整浏览器窗口大小，观察防抖后的尺寸更新","注意不同场景使用不同的延迟时间","观察保存状态的实时变化"],keyPoints:["搜索使用300ms延迟，平衡响应性和性能","自动保存使用1000ms延迟，避免频繁保存","窗口事件使用200ms延迟，优化高频事件","不同场景需要不同的防抖策略"],commonTraps:["所有场景使用相同的延迟时间","忘记处理防抖期间的用户反馈","没有考虑网络延迟和用户体验"],solutions:["根据具体场景调整延迟时间","提供loading状态和进度反馈","结合用户行为和网络状况优化"],codeExample:{title:"实际应用示例",code:H,language:"typescript",highlights:"4,6,7,8,9,10,25,28,29,30,31,32,33,34,55,57,58,59,60,61,68,69,70,71"}}],tutorial:{concepts:["防抖的基本原理：延迟执行，重复触发时重置定时器","useState 和 useEffect 的组合使用","定时器的创建和清理机制","前缘执行和后缘执行的区别","最大等待时间的作用和实现"],steps:["创建状态存储防抖后的值","使用 useEffect 监听原始值的变化","设置定时器延迟更新防抖值","在清理函数中清除定时器","添加高级功能：前缘执行、最大等待等","提供手动控制方法：取消和立即执行"],tips:["根据具体场景选择合适的延迟时间","搜索建议300-500ms，自动保存1000ms","高频事件（如resize）使用较短延迟","提供用户反馈显示防抖状态","考虑网络延迟和用户体验平衡"]},interview:{questions:[{question:"防抖和节流的区别是什么？",answer:"防抖是延迟执行，在指定时间内如果再次触发则重新计时；节流是限制执行频率，在指定时间内最多执行一次。防抖适用于搜索建议、自动保存等场景，节流适用于滚动、resize等高频事件。"},{question:"useDebounce 如何避免内存泄漏？",answer:"通过 useEffect 的清理函数清除定时器。每次依赖项变化时，会先执行清理函数清除之前的定时器，然后设置新的定时器。组件卸载时也会自动执行清理函数。"},{question:"如何选择合适的防抖延迟时间？",answer:"需要平衡用户体验和性能：搜索建议300-500ms，自动保存1000ms，表单验证500ms，窗口resize 200ms。太短失去防抖效果，太长影响用户体验。可以根据用户行为数据和网络状况动态调整。"},{question:"前缘执行和后缘执行分别适用于什么场景？",answer:"前缘执行适用于需要立即响应的场景，如按钮点击防抖；后缘执行适用于延迟处理的场景，如搜索建议。可以同时启用两者，实现首次立即执行，后续延迟执行的效果。"},{question:"如何实现可取消的防抖？",answer:"通过 useRef 存储定时器引用，提供 cancel 方法清除定时器并重置状态。同时提供 flush 方法立即执行防抖函数。这样可以在用户操作或组件卸载时手动控制防抖行为。"},{question:"防抖在什么情况下可能失效？",answer:"1. 组件重新渲染导致防抖重置；2. 依赖项变化频繁；3. 延迟时间设置不当；4. 没有正确处理异步操作。解决方案是使用 useCallback 缓存函数，合理设置依赖项，选择合适的延迟时间。"}],keyPoints:["防抖延迟执行，节流限制频率","通过清理函数避免内存泄漏","根据场景选择合适的延迟时间","提供用户反馈显示防抖状态","高级防抖支持更多控制选项"]},bestPractices:{dos:["根据具体场景选择合适的延迟时间","在 useEffect 清理函数中清除定时器","为用户提供防抖状态反馈","结合 useCallback 优化性能","考虑网络延迟和用户体验平衡","使用 TypeScript 提供类型安全"],donts:["不要对所有场景使用相同的延迟时间","不要忘记处理组件卸载时的清理","不要设置过长的延迟时间影响用户体验","不要在防抖期间阻塞用户界面","不要忽略防抖状态的用户反馈","不要在每次渲染时创建新的防抖实例"],patterns:["搜索防抖模式：300-500ms延迟，提供即时反馈","自动保存模式：1000ms延迟，显示保存状态","事件防抖模式：200ms延迟，优化高频事件","表单验证模式：500ms延迟，避免输入时频繁提示","API调用防抖：根据网络状况动态调整延迟","组合防抖模式：前缘+后缘执行，兼顾响应性和性能"]}});export{G as default};
