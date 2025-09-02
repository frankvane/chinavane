import{r as d,j as e}from"./index-CKH9Ek1I.js";import{C as I}from"./ComponentTemplate-B8dTsNLj.js";function v(o=!1){const[h,n]=d.useState(o),r=d.useCallback(()=>{n(a=>!a)},[]),g=d.useCallback(a=>{n(typeof a=="boolean"?a:t=>!t)},[]);return[h,r,g]}function C(o=!1,h={}){const{onToggle:n,disabled:r=!1,resetOnDisabled:g=!1}=h,[a,t]=d.useState(o),c=d.useCallback(()=>{if(r)return;const l=!a;t(l),n==null||n(l)},[a,r,n]),s=d.useCallback(()=>{r||a||(t(!0),n==null||n(!0))},[a,r,n]),x=d.useCallback(()=>{r||a&&(t(!1),n==null||n(!1))},[a,r,n]),m=d.useCallback(l=>{r||a!==l&&(t(l),n==null||n(l))},[a,r,n]),N=d.useCallback(()=>{r&&!g||a!==o&&(t(o),n==null||n(o))},[a,o,r,g,n]);return{value:a,toggle:c,setTrue:s,setFalse:x,setValue:m,reset:N,disabled:r}}const R=()=>{const[o,h]=d.useState([]),[n,r]=d.useState(!1),g=l=>{const u=new Date().toLocaleTimeString();h(f=>[...f.slice(-9),`${u}: ${l}`])},a=C(!1,{onToggle:l=>g(`模态框 ${l?"打开":"关闭"}`),disabled:n}),t=C(!0,{onToggle:l=>g(`侧边栏 ${l?"展开":"收起"}`),disabled:n}),c=C(!0,{onToggle:l=>g(`通知 ${l?"开启":"关闭"}`),disabled:n,resetOnDisabled:!0}),s=C(!1,{onToggle:l=>g(`主题切换到 ${l?"深色":"浅色"} 模式`),disabled:n}),x=()=>{r(l=>{const u=!l;return g(`控制状态: ${u?"禁用":"启用"}`),u})},m=()=>{a.reset(),t.reset(),c.reset(),s.reset(),g("重置所有状态")},N=()=>{h([])};return e.jsxs("div",{className:`p-6 rounded-lg border transition-colors duration-300 ${s.value?"bg-gray-800 border-gray-600 text-white":"bg-white border-gray-200 text-gray-800"}`,children:[e.jsxs("div",{className:"flex items-center justify-between mb-4",children:[e.jsxs("h3",{className:"text-lg font-semibold",children:["高级切换演示",n&&e.jsx("span",{className:"ml-2 px-2 py-1 bg-red-500 text-white text-xs rounded",children:"已禁用"})]}),e.jsxs("div",{className:"space-x-2",children:[e.jsx("button",{onClick:x,className:`px-3 py-1 rounded text-sm transition-colors ${n?s.value?"bg-green-600 text-white hover:bg-green-500":"bg-green-500 text-white hover:bg-green-600":s.value?"bg-red-600 text-white hover:bg-red-500":"bg-red-500 text-white hover:bg-red-600"}`,children:n?"启用控制":"禁用控制"}),e.jsx("button",{onClick:m,className:`px-3 py-1 rounded text-sm transition-colors ${s.value?"bg-gray-600 text-white hover:bg-gray-500":"bg-gray-500 text-white hover:bg-gray-600"}`,children:"重置所有"}),e.jsx("button",{onClick:N,className:`px-3 py-1 rounded text-sm transition-colors ${s.value?"bg-blue-600 text-white hover:bg-blue-500":"bg-blue-500 text-white hover:bg-blue-600"}`,children:"清空日志"})]})]}),e.jsxs("div",{className:"grid grid-cols-1 lg:grid-cols-2 gap-6",children:[e.jsxs("div",{className:"space-y-4",children:[e.jsxs("div",{className:`p-4 rounded-lg border transition-colors ${s.value?"bg-gray-700 border-gray-600":"bg-blue-50 border-blue-200"}`,children:[e.jsx("h4",{className:`font-semibold mb-3 ${s.value?"text-blue-300":"text-blue-800"}`,children:"模态框控制"}),e.jsxs("div",{className:"space-y-3",children:[e.jsxs("div",{className:"flex items-center justify-between",children:[e.jsx("span",{className:`text-sm ${s.value?"text-gray-300":"text-blue-700"}`,children:"模态框状态:"}),e.jsxs("div",{className:"space-x-2",children:[e.jsx("button",{onClick:a.setTrue,disabled:a.disabled||a.value,className:`px-2 py-1 text-xs rounded transition-colors ${a.disabled||a.value?"bg-gray-300 text-gray-500 cursor-not-allowed":s.value?"bg-green-600 text-white hover:bg-green-500":"bg-green-500 text-white hover:bg-green-600"}`,children:"打开"}),e.jsx("button",{onClick:a.toggle,disabled:a.disabled,className:`px-3 py-1 text-xs rounded transition-colors ${a.disabled?"bg-gray-300 text-gray-500 cursor-not-allowed":s.value?"bg-blue-600 text-white hover:bg-blue-500":"bg-blue-500 text-white hover:bg-blue-600"}`,children:"切换"}),e.jsx("button",{onClick:a.setFalse,disabled:a.disabled||!a.value,className:`px-2 py-1 text-xs rounded transition-colors ${a.disabled||!a.value?"bg-gray-300 text-gray-500 cursor-not-allowed":s.value?"bg-red-600 text-white hover:bg-red-500":"bg-red-500 text-white hover:bg-red-600"}`,children:"关闭"})]})]}),a.value&&e.jsx("div",{className:"fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50",children:e.jsxs("div",{className:`p-6 rounded-lg max-w-md w-full mx-4 ${s.value?"bg-gray-800 text-white":"bg-white text-gray-800"}`,children:[e.jsx("h5",{className:"text-lg font-semibold mb-3",children:"示例模态框"}),e.jsx("p",{className:"text-sm mb-4",children:"这是一个由 useAdvancedToggle 控制的模态框。它支持多种操作方式： 直接设置、切换、重置等。"}),e.jsx("div",{className:"flex justify-end space-x-2",children:e.jsx("button",{onClick:a.setFalse,className:`px-3 py-1 text-sm rounded transition-colors ${s.value?"bg-gray-600 text-white hover:bg-gray-500":"bg-gray-500 text-white hover:bg-gray-600"}`,children:"关闭"})})]})})]})]}),e.jsxs("div",{className:`p-4 rounded-lg border transition-colors ${s.value?"bg-gray-700 border-gray-600":"bg-green-50 border-green-200"}`,children:[e.jsx("h4",{className:`font-semibold mb-3 ${s.value?"text-green-300":"text-green-800"}`,children:"侧边栏控制"}),e.jsxs("div",{className:"space-y-3",children:[e.jsxs("div",{className:"flex items-center justify-between",children:[e.jsx("span",{className:`text-sm ${s.value?"text-gray-300":"text-green-700"}`,children:"侧边栏状态:"}),e.jsx("button",{onClick:t.toggle,disabled:t.disabled,className:`px-3 py-1 text-xs rounded transition-colors ${t.disabled?"bg-gray-300 text-gray-500 cursor-not-allowed":s.value?"bg-green-600 text-white hover:bg-green-500":"bg-green-500 text-white hover:bg-green-600"}`,children:t.value?"收起":"展开"})]}),e.jsx("div",{className:"relative",children:e.jsxs("div",{className:`h-32 border-2 border-dashed rounded transition-all duration-300 ${s.value?"border-gray-500":"border-green-300"} ${t.value?"pl-20":"pl-2"}`,children:[e.jsx("div",{className:`absolute left-0 top-0 h-full transition-all duration-300 rounded-l ${s.value?"bg-gray-600 border-gray-500":"bg-green-200 border-green-300"} ${t.value?"w-16 border-r-2":"w-0 overflow-hidden"}`,children:e.jsx("div",{className:`p-2 text-xs ${s.value?"text-gray-300":"text-green-800"}`,children:"侧边栏"})}),e.jsxs("div",{className:`p-3 text-sm ${s.value?"text-gray-300":"text-green-700"}`,children:["主内容区域",e.jsx("br",{}),"侧边栏状态: ",t.value?"展开":"收起"]})]})})]})]}),e.jsxs("div",{className:`p-4 rounded-lg border transition-colors ${s.value?"bg-gray-700 border-gray-600":"bg-purple-50 border-purple-200"}`,children:[e.jsx("h4",{className:`font-semibold mb-3 ${s.value?"text-purple-300":"text-purple-800"}`,children:"通知控制"}),e.jsxs("div",{className:"space-y-3",children:[e.jsxs("div",{className:"flex items-center justify-between",children:[e.jsx("span",{className:`text-sm ${s.value?"text-gray-300":"text-purple-700"}`,children:"通知设置:"}),e.jsxs("label",{className:"relative inline-flex items-center cursor-pointer",children:[e.jsx("input",{type:"checkbox",checked:c.value,onChange:c.toggle,disabled:c.disabled,className:"sr-only peer"}),e.jsx("div",{className:`relative w-11 h-6 rounded-full peer transition-colors ${c.disabled?"bg-gray-400 cursor-not-allowed":c.value?"bg-purple-500":s.value?"bg-gray-600":"bg-gray-300"} peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-purple-300`,children:e.jsx("div",{className:`absolute top-[2px] left-[2px] bg-white border border-gray-300 rounded-full h-5 w-5 transition-transform ${c.value?"translate-x-full border-white":""}`})}),e.jsx("span",{className:`ml-2 text-sm ${s.value?"text-gray-300":"text-purple-700"}`,children:c.value?"开启":"关闭"})]})]}),e.jsx("div",{className:`p-2 rounded text-xs ${s.value?"bg-gray-600 text-gray-300":"bg-purple-100 text-purple-700"}`,children:e.jsxs("p",{children:[e.jsx("strong",{children:"resetOnDisabled:"})," 当控制被禁用时，此开关会自动重置到初始状态。"]})})]})]})]}),e.jsxs("div",{className:"space-y-4",children:[e.jsxs("div",{className:`p-4 rounded-lg border transition-colors ${s.value?"bg-gray-700 border-gray-600":"bg-yellow-50 border-yellow-200"}`,children:[e.jsx("h4",{className:`font-semibold mb-3 ${s.value?"text-yellow-300":"text-yellow-800"}`,children:"主题控制"}),e.jsxs("div",{className:"space-y-3",children:[e.jsxs("div",{className:"flex items-center justify-between",children:[e.jsx("span",{className:`text-sm ${s.value?"text-gray-300":"text-yellow-700"}`,children:"当前主题:"}),e.jsxs("button",{onClick:s.toggle,disabled:s.disabled,className:`px-3 py-1 text-xs rounded transition-colors flex items-center space-x-1 ${s.disabled?"bg-gray-300 text-gray-500 cursor-not-allowed":s.value?"bg-yellow-600 text-white hover:bg-yellow-500":"bg-gray-700 text-white hover:bg-gray-800"}`,children:[e.jsx("span",{children:s.value?"☀️":"🌙"}),e.jsx("span",{children:s.value?"切换到浅色":"切换到深色"})]})]}),e.jsx("div",{className:`p-3 rounded border-l-4 ${s.value?"bg-gray-600 border-yellow-400 text-gray-200":"bg-yellow-100 border-yellow-400 text-yellow-800"}`,children:e.jsxs("p",{className:"text-sm",children:["🎨 主题切换演示了 useAdvancedToggle 如何与 UI 状态联动。 当前使用的是 ",e.jsx("strong",{children:s.value?"深色":"浅色"})," 主题。"]})})]})]}),e.jsxs("div",{children:[e.jsx("h4",{className:`font-semibold mb-3 ${s.value?"text-gray-300":"text-gray-700"}`,children:"状态总览:"}),e.jsx("div",{className:`rounded-lg p-3 transition-colors ${s.value?"bg-gray-700":"bg-gray-50"}`,children:e.jsxs("div",{className:"space-y-2 text-sm",children:[e.jsxs("div",{className:"flex justify-between items-center",children:[e.jsx("span",{className:s.value?"text-gray-300":"text-gray-700",children:"模态框:"}),e.jsx("span",{className:`font-bold ${a.value?"text-green-500":s.value?"text-red-400":"text-red-600"}`,children:a.value?"✓ 打开":"✗ 关闭"})]}),e.jsxs("div",{className:"flex justify-between items-center",children:[e.jsx("span",{className:s.value?"text-gray-300":"text-gray-700",children:"侧边栏:"}),e.jsx("span",{className:`font-bold ${t.value?"text-green-500":s.value?"text-red-400":"text-red-600"}`,children:t.value?"✓ 展开":"✗ 收起"})]}),e.jsxs("div",{className:"flex justify-between items-center",children:[e.jsx("span",{className:s.value?"text-gray-300":"text-gray-700",children:"通知:"}),e.jsx("span",{className:`font-bold ${c.value?"text-green-500":s.value?"text-red-400":"text-red-600"}`,children:c.value?"✓ 开启":"✗ 关闭"})]}),e.jsxs("div",{className:"flex justify-between items-center",children:[e.jsx("span",{className:s.value?"text-gray-300":"text-gray-700",children:"主题:"}),e.jsx("span",{className:`font-bold ${s.value?"text-purple-400":"text-yellow-600"}`,children:s.value?"🌙 深色":"☀️ 浅色"})]}),e.jsxs("div",{className:"flex justify-between items-center",children:[e.jsx("span",{className:s.value?"text-gray-300":"text-gray-700",children:"控制状态:"}),e.jsx("span",{className:`font-bold ${n?s.value?"text-red-400":"text-red-600":"text-green-500"}`,children:n?"✗ 禁用":"✓ 启用"})]})]})})]}),e.jsxs("div",{children:[e.jsx("h4",{className:`font-semibold mb-3 ${s.value?"text-gray-300":"text-gray-700"}`,children:"操作日志:"}),e.jsx("div",{className:`rounded-lg p-3 h-32 overflow-y-auto transition-colors ${s.value?"bg-gray-700":"bg-blue-50"}`,children:o.length===0?e.jsx("p",{className:`text-sm ${s.value?"text-gray-400":"text-blue-500"}`,children:"开始操作查看日志"}):e.jsx("div",{className:"space-y-1",children:o.map((l,u)=>e.jsx("div",{className:`text-sm font-mono ${s.value?"text-gray-300":"text-blue-700"}`,children:l},u))})})]}),e.jsxs("div",{className:`p-3 rounded border transition-colors ${s.value?"bg-cyan-900 border-cyan-700":"bg-cyan-50 border-cyan-200"}`,children:[e.jsx("h4",{className:`font-semibold mb-2 ${s.value?"text-cyan-300":"text-cyan-800"}`,children:"高级特性:"}),e.jsxs("ul",{className:`text-sm space-y-1 ${s.value?"text-cyan-200":"text-cyan-700"}`,children:[e.jsx("li",{children:"• onToggle 回调函数"}),e.jsx("li",{children:"• disabled 禁用控制"}),e.jsx("li",{children:"• resetOnDisabled 禁用时重置"}),e.jsx("li",{children:"• 多种设置方法"})]})]})]})]}),e.jsx("div",{className:`mt-4 p-3 rounded border transition-colors ${s.value?"bg-emerald-900 border-emerald-700":"bg-emerald-50 border-emerald-200"}`,children:e.jsx("p",{className:`text-sm ${s.value?"text-emerald-200":"text-emerald-800"}`,children:"💡 高级 useToggle 提供了更多控制选项，包括回调函数、禁用状态、重置功能等，适用于复杂的交互场景。"})})]})},H=`import React, { useState } from 'react';
import { useAdvancedToggle } from './useToggleHook';

const AdvancedToggleDemo: React.FC = () => {
  const [logs, setLogs] = useState<string[]>([]);
  const [isDisabled, setIsDisabled] = useState(false);

  const addLog = (message: string) => {
    const timestamp = new Date().toLocaleTimeString();
    setLogs(prev => [...prev.slice(-9), \`\${timestamp}: \${message}\`]);
  };

  const modalToggle = useAdvancedToggle(false, {
    onToggle: (value) => addLog(\`模态框 \${value ? '打开' : '关闭'}\`),
    disabled: isDisabled
  });

  const sidebarToggle = useAdvancedToggle(true, {
    onToggle: (value) => addLog(\`侧边栏 \${value ? '展开' : '收起'}\`),
    disabled: isDisabled
  });

  const notificationToggle = useAdvancedToggle(true, {
    onToggle: (value) => addLog(\`通知 \${value ? '开启' : '关闭'}\`),
    disabled: isDisabled,
    resetOnDisabled: true
  });

  const themeToggle = useAdvancedToggle(false, {
    onToggle: (value) => addLog(\`主题切换到 \${value ? '深色' : '浅色'} 模式\`),
    disabled: isDisabled
  });

  const handleDisabledToggle = () => {
    setIsDisabled(prev => {
      const newValue = !prev;
      addLog(\`控制状态: \${newValue ? '禁用' : '启用'}\`);
      return newValue;
    });
  };

  const resetAll = () => {
    modalToggle.reset();
    sidebarToggle.reset();
    notificationToggle.reset();
    themeToggle.reset();
    addLog('重置所有状态');
  };

  const clearLogs = () => {
    setLogs([]);
  };

  return (
    <div className={\`p-6 rounded-lg border transition-colors duration-300 \${
      themeToggle.value 
        ? 'bg-gray-800 border-gray-600 text-white' 
        : 'bg-white border-gray-200 text-gray-800'
    }\`}>
      <div className="flex items-center justify-between mb-4">
        <h3 className="text-lg font-semibold">
          高级切换演示
          {isDisabled && (
            <span className="ml-2 px-2 py-1 bg-red-500 text-white text-xs rounded">
              已禁用
            </span>
          )}
        </h3>
        <div className="space-x-2">
          <button
            onClick={handleDisabledToggle}
            className={\`px-3 py-1 rounded text-sm transition-colors \${
              isDisabled
                ? themeToggle.value
                  ? 'bg-green-600 text-white hover:bg-green-500'
                  : 'bg-green-500 text-white hover:bg-green-600'
                : themeToggle.value
                ? 'bg-red-600 text-white hover:bg-red-500'
                : 'bg-red-500 text-white hover:bg-red-600'
            }\`}
          >
            {isDisabled ? '启用控制' : '禁用控制'}
          </button>
          <button
            onClick={resetAll}
            className={\`px-3 py-1 rounded text-sm transition-colors \${
              themeToggle.value
                ? 'bg-gray-600 text-white hover:bg-gray-500'
                : 'bg-gray-500 text-white hover:bg-gray-600'
            }\`}
          >
            重置所有
          </button>
          <button
            onClick={clearLogs}
            className={\`px-3 py-1 rounded text-sm transition-colors \${
              themeToggle.value
                ? 'bg-blue-600 text-white hover:bg-blue-500'
                : 'bg-blue-500 text-white hover:bg-blue-600'
            }\`}
          >
            清空日志
          </button>
        </div>
      </div>
      
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="space-y-4">
          <div className={\`p-4 rounded-lg border transition-colors \${
            themeToggle.value 
              ? 'bg-gray-700 border-gray-600' 
              : 'bg-blue-50 border-blue-200'
          }\`}>
            <h4 className={\`font-semibold mb-3 \${
              themeToggle.value ? 'text-blue-300' : 'text-blue-800'
            }\`}>模态框控制</h4>
            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <span className={\`text-sm \${
                  themeToggle.value ? 'text-gray-300' : 'text-blue-700'
                }\`}>模态框状态:</span>
                <div className="space-x-2">
                  <button
                    onClick={modalToggle.setTrue}
                    disabled={modalToggle.disabled || modalToggle.value}
                    className={\`px-2 py-1 text-xs rounded transition-colors \${
                      modalToggle.disabled || modalToggle.value
                        ? 'bg-gray-300 text-gray-500 cursor-not-allowed'
                        : themeToggle.value
                        ? 'bg-green-600 text-white hover:bg-green-500'
                        : 'bg-green-500 text-white hover:bg-green-600'
                    }\`}
                  >
                    打开
                  </button>
                  <button
                    onClick={modalToggle.toggle}
                    disabled={modalToggle.disabled}
                    className={\`px-3 py-1 text-xs rounded transition-colors \${
                      modalToggle.disabled
                        ? 'bg-gray-300 text-gray-500 cursor-not-allowed'
                        : themeToggle.value
                        ? 'bg-blue-600 text-white hover:bg-blue-500'
                        : 'bg-blue-500 text-white hover:bg-blue-600'
                    }\`}
                  >
                    切换
                  </button>
                  <button
                    onClick={modalToggle.setFalse}
                    disabled={modalToggle.disabled || !modalToggle.value}
                    className={\`px-2 py-1 text-xs rounded transition-colors \${
                      modalToggle.disabled || !modalToggle.value
                        ? 'bg-gray-300 text-gray-500 cursor-not-allowed'
                        : themeToggle.value
                        ? 'bg-red-600 text-white hover:bg-red-500'
                        : 'bg-red-500 text-white hover:bg-red-600'
                    }\`}
                  >
                    关闭
                  </button>
                </div>
              </div>
              
              {modalToggle.value && (
                <div className={\`fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50\`}>
                  <div className={\`p-6 rounded-lg max-w-md w-full mx-4 \${
                    themeToggle.value ? 'bg-gray-800 text-white' : 'bg-white text-gray-800'
                  }\`}>
                    <h5 className="text-lg font-semibold mb-3">示例模态框</h5>
                    <p className="text-sm mb-4">
                      这是一个由 useAdvancedToggle 控制的模态框。它支持多种操作方式：
                      直接设置、切换、重置等。
                    </p>
                    <div className="flex justify-end space-x-2">
                      <button
                        onClick={modalToggle.setFalse}
                        className={\`px-3 py-1 text-sm rounded transition-colors \${
                          themeToggle.value
                            ? 'bg-gray-600 text-white hover:bg-gray-500'
                            : 'bg-gray-500 text-white hover:bg-gray-600'
                        }\`}
                      >
                        关闭
                      </button>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
          
          <div className={\`p-4 rounded-lg border transition-colors \${
            themeToggle.value 
              ? 'bg-gray-700 border-gray-600' 
              : 'bg-green-50 border-green-200'
          }\`}>
            <h4 className={\`font-semibold mb-3 \${
              themeToggle.value ? 'text-green-300' : 'text-green-800'
            }\`}>侧边栏控制</h4>
            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <span className={\`text-sm \${
                  themeToggle.value ? 'text-gray-300' : 'text-green-700'
                }\`}>侧边栏状态:</span>
                <button
                  onClick={sidebarToggle.toggle}
                  disabled={sidebarToggle.disabled}
                  className={\`px-3 py-1 text-xs rounded transition-colors \${
                    sidebarToggle.disabled
                      ? 'bg-gray-300 text-gray-500 cursor-not-allowed'
                      : themeToggle.value
                      ? 'bg-green-600 text-white hover:bg-green-500'
                      : 'bg-green-500 text-white hover:bg-green-600'
                  }\`}
                >
                  {sidebarToggle.value ? '收起' : '展开'}
                </button>
              </div>
              
              <div className="relative">
                <div className={\`h-32 border-2 border-dashed rounded transition-all duration-300 \${
                  themeToggle.value 
                    ? 'border-gray-500' 
                    : 'border-green-300'
                } \${
                  sidebarToggle.value ? 'pl-20' : 'pl-2'
                }\`}>
                  <div className={\`absolute left-0 top-0 h-full transition-all duration-300 rounded-l \${
                    themeToggle.value 
                      ? 'bg-gray-600 border-gray-500' 
                      : 'bg-green-200 border-green-300'
                  } \${
                    sidebarToggle.value ? 'w-16 border-r-2' : 'w-0 overflow-hidden'
                  }\`}>
                    <div className={\`p-2 text-xs \${
                      themeToggle.value ? 'text-gray-300' : 'text-green-800'
                    }\`}>
                      侧边栏
                    </div>
                  </div>
                  <div className={\`p-3 text-sm \${
                    themeToggle.value ? 'text-gray-300' : 'text-green-700'
                  }\`}>
                    主内容区域
                    <br />
                    侧边栏状态: {sidebarToggle.value ? '展开' : '收起'}
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          <div className={\`p-4 rounded-lg border transition-colors \${
            themeToggle.value 
              ? 'bg-gray-700 border-gray-600' 
              : 'bg-purple-50 border-purple-200'
          }\`}>
            <h4 className={\`font-semibold mb-3 \${
              themeToggle.value ? 'text-purple-300' : 'text-purple-800'
            }\`}>通知控制</h4>
            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <span className={\`text-sm \${
                  themeToggle.value ? 'text-gray-300' : 'text-purple-700'
                }\`}>通知设置:</span>
                <label className="relative inline-flex items-center cursor-pointer">
                  <input
                    type="checkbox"
                    checked={notificationToggle.value}
                    onChange={notificationToggle.toggle}
                    disabled={notificationToggle.disabled}
                    className="sr-only peer"
                  />
                  <div className={\`relative w-11 h-6 rounded-full peer transition-colors \${
                    notificationToggle.disabled
                      ? 'bg-gray-400 cursor-not-allowed'
                      : notificationToggle.value 
                      ? 'bg-purple-500' 
                      : themeToggle.value ? 'bg-gray-600' : 'bg-gray-300'
                  } peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-purple-300\`}>
                    <div className={\`absolute top-[2px] left-[2px] bg-white border border-gray-300 rounded-full h-5 w-5 transition-transform \${
                      notificationToggle.value ? 'translate-x-full border-white' : ''
                    }\`}></div>
                  </div>
                  <span className={\`ml-2 text-sm \${
                    themeToggle.value ? 'text-gray-300' : 'text-purple-700'
                  }\`}>
                    {notificationToggle.value ? '开启' : '关闭'}
                  </span>
                </label>
              </div>
              
              <div className={\`p-2 rounded text-xs \${
                themeToggle.value 
                  ? 'bg-gray-600 text-gray-300' 
                  : 'bg-purple-100 text-purple-700'
              }\`}>
                <p><strong>resetOnDisabled:</strong> 当控制被禁用时，此开关会自动重置到初始状态。</p>
              </div>
            </div>
          </div>
        </div>
        
        <div className="space-y-4">
          <div className={\`p-4 rounded-lg border transition-colors \${
            themeToggle.value 
              ? 'bg-gray-700 border-gray-600' 
              : 'bg-yellow-50 border-yellow-200'
          }\`}>
            <h4 className={\`font-semibold mb-3 \${
              themeToggle.value ? 'text-yellow-300' : 'text-yellow-800'
            }\`}>主题控制</h4>
            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <span className={\`text-sm \${
                  themeToggle.value ? 'text-gray-300' : 'text-yellow-700'
                }\`}>当前主题:</span>
                <button
                  onClick={themeToggle.toggle}
                  disabled={themeToggle.disabled}
                  className={\`px-3 py-1 text-xs rounded transition-colors flex items-center space-x-1 \${
                    themeToggle.disabled
                      ? 'bg-gray-300 text-gray-500 cursor-not-allowed'
                      : themeToggle.value
                      ? 'bg-yellow-600 text-white hover:bg-yellow-500'
                      : 'bg-gray-700 text-white hover:bg-gray-800'
                  }\`}
                >
                  <span>{themeToggle.value ? '☀️' : '🌙'}</span>
                  <span>{themeToggle.value ? '切换到浅色' : '切换到深色'}</span>
                </button>
              </div>
              
              <div className={\`p-3 rounded border-l-4 \${
                themeToggle.value 
                  ? 'bg-gray-600 border-yellow-400 text-gray-200' 
                  : 'bg-yellow-100 border-yellow-400 text-yellow-800'
              }\`}>
                <p className="text-sm">
                  🎨 主题切换演示了 useAdvancedToggle 如何与 UI 状态联动。
                  当前使用的是 <strong>{themeToggle.value ? '深色' : '浅色'}</strong> 主题。
                </p>
              </div>
            </div>
          </div>
          
          <div>
            <h4 className={\`font-semibold mb-3 \${
              themeToggle.value ? 'text-gray-300' : 'text-gray-700'
            }\`}>状态总览:</h4>
            <div className={\`rounded-lg p-3 transition-colors \${
              themeToggle.value ? 'bg-gray-700' : 'bg-gray-50'
            }\`}>
              <div className="space-y-2 text-sm">
                <div className="flex justify-between items-center">
                  <span className={themeToggle.value ? 'text-gray-300' : 'text-gray-700'}>
                    模态框:
                  </span>
                  <span className={\`font-bold \${
                    modalToggle.value 
                      ? 'text-green-500' 
                      : themeToggle.value ? 'text-red-400' : 'text-red-600'
                  }\`}>
                    {modalToggle.value ? '✓ 打开' : '✗ 关闭'}
                  </span>
                </div>
                <div className="flex justify-between items-center">
                  <span className={themeToggle.value ? 'text-gray-300' : 'text-gray-700'}>
                    侧边栏:
                  </span>
                  <span className={\`font-bold \${
                    sidebarToggle.value 
                      ? 'text-green-500' 
                      : themeToggle.value ? 'text-red-400' : 'text-red-600'
                  }\`}>
                    {sidebarToggle.value ? '✓ 展开' : '✗ 收起'}
                  </span>
                </div>
                <div className="flex justify-between items-center">
                  <span className={themeToggle.value ? 'text-gray-300' : 'text-gray-700'}>
                    通知:
                  </span>
                  <span className={\`font-bold \${
                    notificationToggle.value 
                      ? 'text-green-500' 
                      : themeToggle.value ? 'text-red-400' : 'text-red-600'
                  }\`}>
                    {notificationToggle.value ? '✓ 开启' : '✗ 关闭'}
                  </span>
                </div>
                <div className="flex justify-between items-center">
                  <span className={themeToggle.value ? 'text-gray-300' : 'text-gray-700'}>
                    主题:
                  </span>
                  <span className={\`font-bold \${
                    themeToggle.value 
                      ? 'text-purple-400' 
                      : 'text-yellow-600'
                  }\`}>
                    {themeToggle.value ? '🌙 深色' : '☀️ 浅色'}
                  </span>
                </div>
                <div className="flex justify-between items-center">
                  <span className={themeToggle.value ? 'text-gray-300' : 'text-gray-700'}>
                    控制状态:
                  </span>
                  <span className={\`font-bold \${
                    isDisabled 
                      ? themeToggle.value ? 'text-red-400' : 'text-red-600'
                      : 'text-green-500'
                  }\`}>
                    {isDisabled ? '✗ 禁用' : '✓ 启用'}
                  </span>
                </div>
              </div>
            </div>
          </div>
          
          <div>
            <h4 className={\`font-semibold mb-3 \${
              themeToggle.value ? 'text-gray-300' : 'text-gray-700'
            }\`}>操作日志:</h4>
            <div className={\`rounded-lg p-3 h-32 overflow-y-auto transition-colors \${
              themeToggle.value ? 'bg-gray-700' : 'bg-blue-50'
            }\`}>
              {logs.length === 0 ? (
                <p className={\`text-sm \${
                  themeToggle.value ? 'text-gray-400' : 'text-blue-500'
                }\`}>开始操作查看日志</p>
              ) : (
                <div className="space-y-1">
                  {logs.map((log, index) => (
                    <div key={index} className={\`text-sm font-mono \${
                      themeToggle.value ? 'text-gray-300' : 'text-blue-700'
                    }\`}>
                      {log}
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>
          
          <div className={\`p-3 rounded border transition-colors \${
            themeToggle.value 
              ? 'bg-cyan-900 border-cyan-700' 
              : 'bg-cyan-50 border-cyan-200'
          }\`}>
            <h4 className={\`font-semibold mb-2 \${
              themeToggle.value ? 'text-cyan-300' : 'text-cyan-800'
            }\`}>高级特性:</h4>
            <ul className={\`text-sm space-y-1 \${
              themeToggle.value ? 'text-cyan-200' : 'text-cyan-700'
            }\`}>
              <li>• onToggle 回调函数</li>
              <li>• disabled 禁用控制</li>
              <li>• resetOnDisabled 禁用时重置</li>
              <li>• 多种设置方法</li>
            </ul>
          </div>
        </div>
      </div>
      
      <div className={\`mt-4 p-3 rounded border transition-colors \${
        themeToggle.value 
          ? 'bg-emerald-900 border-emerald-700' 
          : 'bg-emerald-50 border-emerald-200'
      }\`}>
        <p className={\`text-sm \${
          themeToggle.value ? 'text-emerald-200' : 'text-emerald-800'
        }\`}>
          💡 高级 useToggle 提供了更多控制选项，包括回调函数、禁用状态、重置功能等，适用于复杂的交互场景。
        </p>
      </div>
    </div>
  );
};

export default AdvancedToggleDemo;`,O=()=>{const[o,h,n]=v(!0),[r,g,a]=v(!1),[t,c,s]=v(!1),[x,m,N]=v(!1),[l,u,f]=v(!1),[y,p,$]=v(!0),[k,D]=d.useState([]),i=d.useCallback(w=>{const M=new Date().toLocaleTimeString();D(P=>[...P.slice(-9),`[${M}] ${w}`])},[]),b=d.useCallback(()=>{h(),i(`内容可见性切换为: ${o?"隐藏":"显示"}`)},[h,o,i]),j=d.useCallback(()=>{g(),i(`功能状态切换为: ${r?"禁用":"启用"}`)},[g,r,i]),T=d.useCallback(()=>{c(),i(`主题模式切换为: ${t?"浅色":"深色"}模式`)},[c,t,i]),A=d.useCallback(()=>{m(),i(`面板状态切换为: ${x?"收起":"展开"}`)},[m,x,i]),E=d.useCallback(()=>{l||(u(),i("开始加载..."),setTimeout(()=>{f(!1),i("加载完成")},2e3))},[l,u,f,i]),V=d.useCallback(()=>{p(),i(`通知设置切换为: ${y?"关闭":"开启"}`)},[p,y,i]),L=d.useCallback(w=>{n(w),i(`直接设置内容可见性为: ${w?"显示":"隐藏"}`)},[n,i]),S=d.useCallback(w=>{s(w),i(`直接设置主题模式为: ${w?"深色":"浅色"}模式`)},[s,i]),F=d.useCallback(()=>{n(!0),a(!1),s(!1),N(!1),f(!1),$(!0),D([]),i("所有状态已重置为默认值")},[n,a,s,N,f,$,i]);return e.jsxs("div",{className:`p-6 rounded-lg transition-colors duration-300 ${t?"bg-gray-800 text-white":"bg-white text-gray-900"}`,children:[e.jsxs("div",{className:"flex justify-between items-center mb-6",children:[e.jsx("h3",{className:`text-xl font-bold ${t?"text-white":"text-gray-900"}`,children:"useToggle 基础用法演示"}),e.jsx("button",{onClick:F,className:`px-4 py-2 rounded transition-colors ${t?"bg-purple-600 text-white hover:bg-purple-500":"bg-purple-500 text-white hover:bg-purple-600"}`,children:"重置所有"})]}),e.jsxs("div",{className:"grid grid-cols-1 lg:grid-cols-2 gap-6",children:[e.jsxs("div",{className:"space-y-4",children:[e.jsxs("div",{className:`p-4 rounded-lg border transition-colors ${t?"bg-gray-700 border-gray-600":"bg-blue-50 border-blue-200"}`,children:[e.jsx("h4",{className:`font-semibold mb-3 ${t?"text-blue-300":"text-blue-800"}`,children:"基础切换控制"}),e.jsxs("div",{className:"space-y-3",children:[e.jsxs("div",{className:"flex items-center justify-between",children:[e.jsx("span",{className:`text-sm ${t?"text-gray-300":"text-blue-700"}`,children:"内容可见性:"}),e.jsxs("div",{className:"flex space-x-2",children:[e.jsx("button",{onClick:()=>L(!0),disabled:o,className:`px-3 py-1 text-xs rounded transition-colors ${o?"bg-gray-300 text-gray-500 cursor-not-allowed":t?"bg-green-600 text-white hover:bg-green-500":"bg-green-500 text-white hover:bg-green-600"}`,children:"显示"}),e.jsx("button",{onClick:b,className:`px-3 py-1 text-xs rounded transition-colors ${t?"bg-blue-600 text-white hover:bg-blue-500":"bg-blue-500 text-white hover:bg-blue-600"}`,children:"切换"}),e.jsx("button",{onClick:()=>L(!1),disabled:!o,className:`px-3 py-1 text-xs rounded transition-colors ${o?t?"bg-red-600 text-white hover:bg-red-500":"bg-red-500 text-white hover:bg-red-600":"bg-gray-300 text-gray-500 cursor-not-allowed"}`,children:"隐藏"})]})]}),o&&e.jsx("div",{className:`p-3 rounded border-l-4 transition-all duration-300 ${t?"bg-gray-600 border-blue-400 text-gray-200":"bg-blue-100 border-blue-400 text-blue-800"}`,children:e.jsx("p",{className:"text-sm",children:"🎉 这是一个可切换显示的内容区域！useToggle 让状态管理变得简单。"})}),e.jsxs("div",{className:"flex items-center justify-between",children:[e.jsx("span",{className:`text-sm ${t?"text-gray-300":"text-blue-700"}`,children:"功能状态:"}),e.jsxs("label",{className:"flex items-center space-x-2 cursor-pointer",children:[e.jsx("input",{type:"checkbox",checked:r,onChange:j,className:"text-blue-500 focus:ring-blue-500"}),e.jsx("span",{className:`text-sm ${t?"text-gray-300":"text-blue-700"}`,children:r?"已启用":"已禁用"})]})]}),e.jsxs("div",{className:"flex items-center justify-between",children:[e.jsx("span",{className:`text-sm ${t?"text-gray-300":"text-blue-700"}`,children:"主题模式:"}),e.jsxs("div",{className:"flex items-center space-x-2",children:[e.jsx("button",{onClick:()=>S(!1),disabled:!t,className:`px-2 py-1 text-xs rounded transition-colors ${t?"bg-yellow-500 text-white hover:bg-yellow-600":"bg-gray-300 text-gray-500 cursor-not-allowed"}`,children:"☀️ 浅色"}),e.jsx("button",{onClick:T,className:`px-3 py-1 text-xs rounded transition-colors ${t?"bg-blue-600 text-white hover:bg-blue-500":"bg-blue-500 text-white hover:bg-blue-600"}`,children:"切换"}),e.jsx("button",{onClick:()=>S(!0),disabled:t,className:`px-2 py-1 text-xs rounded transition-colors ${t?"bg-gray-300 text-gray-500 cursor-not-allowed":"bg-gray-700 text-white hover:bg-gray-800"}`,children:"🌙 深色"})]})]})]})]}),e.jsxs("div",{className:`p-4 rounded-lg border transition-colors ${t?"bg-gray-700 border-gray-600":"bg-green-50 border-green-200"}`,children:[e.jsx("h4",{className:`font-semibold mb-3 ${t?"text-green-300":"text-green-800"}`,children:"交互式控制"}),e.jsxs("div",{className:"space-y-3",children:[e.jsxs("div",{children:[e.jsxs("div",{className:"flex items-center justify-between mb-2",children:[e.jsx("span",{className:`text-sm ${t?"text-gray-300":"text-green-700"}`,children:"可展开面板:"}),e.jsx("button",{onClick:A,className:`px-3 py-1 text-xs rounded transition-colors ${t?"bg-green-600 text-white hover:bg-green-500":"bg-green-500 text-white hover:bg-green-600"}`,children:x?"收起":"展开"})]}),e.jsx("div",{className:`overflow-hidden transition-all duration-300 ${x?"max-h-32 opacity-100":"max-h-0 opacity-0"}`,children:e.jsx("div",{className:`p-3 rounded border transition-colors ${t?"bg-gray-600 border-gray-500 text-gray-200":"bg-green-100 border-green-300 text-green-800"}`,children:e.jsx("p",{className:"text-sm",children:"📋 这是一个可展开的面板内容。useToggle 可以轻松控制UI元素的显示状态， 配合CSS过渡效果可以创建流畅的用户体验。"})})})]}),e.jsxs("div",{className:"flex items-center justify-between",children:[e.jsx("span",{className:`text-sm ${t?"text-gray-300":"text-green-700"}`,children:"加载状态:"}),e.jsxs("button",{onClick:E,disabled:l,className:`px-3 py-1 text-xs rounded transition-colors flex items-center space-x-1 ${l?"bg-gray-300 text-gray-500 cursor-not-allowed":t?"bg-orange-600 text-white hover:bg-orange-500":"bg-orange-500 text-white hover:bg-orange-600"}`,children:[l&&e.jsx("div",{className:"animate-spin rounded-full h-3 w-3 border-b-2 border-white"}),e.jsx("span",{children:l?"加载中...":"开始加载"})]})]}),e.jsxs("div",{className:"flex items-center justify-between",children:[e.jsx("span",{className:`text-sm ${t?"text-gray-300":"text-green-700"}`,children:"通知设置:"}),e.jsxs("label",{className:"relative inline-flex items-center cursor-pointer",children:[e.jsx("input",{type:"checkbox",checked:y,onChange:V,className:"sr-only peer"}),e.jsx("div",{className:`relative w-11 h-6 rounded-full peer transition-colors ${y?"bg-green-500":t?"bg-gray-600":"bg-gray-300"} peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-green-300`,children:e.jsx("div",{className:`absolute top-[2px] left-[2px] bg-white border border-gray-300 rounded-full h-5 w-5 transition-transform ${y?"translate-x-full border-white":""}`})}),e.jsx("span",{className:`ml-2 text-sm ${t?"text-gray-300":"text-green-700"}`,children:y?"开启":"关闭"})]})]})]})]})]}),e.jsxs("div",{className:"space-y-4",children:[e.jsxs("div",{children:[e.jsx("h4",{className:`font-semibold mb-3 ${t?"text-gray-300":"text-gray-700"}`,children:"当前状态:"}),e.jsx("div",{className:`rounded-lg p-3 transition-colors ${t?"bg-gray-700":"bg-gray-50"}`,children:e.jsxs("div",{className:"grid grid-cols-2 gap-3 text-sm",children:[e.jsxs("div",{className:`p-2 rounded ${t?"bg-gray-600":"bg-white"}`,children:[e.jsx("p",{className:`font-medium ${t?"text-blue-300":"text-blue-800"}`,children:"内容可见:"}),e.jsx("p",{className:`text-lg font-bold ${o?"text-green-500":t?"text-red-400":"text-red-600"}`,children:o?"✓ 显示":"✗ 隐藏"})]}),e.jsxs("div",{className:`p-2 rounded ${t?"bg-gray-600":"bg-white"}`,children:[e.jsx("p",{className:`font-medium ${t?"text-blue-300":"text-blue-800"}`,children:"功能状态:"}),e.jsx("p",{className:`text-lg font-bold ${r?"text-green-500":t?"text-red-400":"text-red-600"}`,children:r?"✓ 启用":"✗ 禁用"})]}),e.jsxs("div",{className:`p-2 rounded ${t?"bg-gray-600":"bg-white"}`,children:[e.jsx("p",{className:`font-medium ${t?"text-blue-300":"text-blue-800"}`,children:"主题模式:"}),e.jsx("p",{className:`text-lg font-bold ${t?"text-purple-400":"text-yellow-600"}`,children:t?"🌙 深色":"☀️ 浅色"})]}),e.jsxs("div",{className:`p-2 rounded ${t?"bg-gray-600":"bg-white"}`,children:[e.jsx("p",{className:`font-medium ${t?"text-blue-300":"text-blue-800"}`,children:"面板状态:"}),e.jsx("p",{className:`text-lg font-bold ${x?"text-green-500":t?"text-gray-400":"text-gray-600"}`,children:x?"📂 展开":"📁 收起"})]}),e.jsxs("div",{className:`p-2 rounded ${t?"bg-gray-600":"bg-white"}`,children:[e.jsx("p",{className:`font-medium ${t?"text-blue-300":"text-blue-800"}`,children:"加载状态:"}),e.jsx("p",{className:`text-lg font-bold ${l?"text-orange-500":t?"text-gray-400":"text-gray-600"}`,children:l?"⏳ 加载中":"✅ 就绪"})]}),e.jsxs("div",{className:`p-2 rounded ${t?"bg-gray-600":"bg-white"}`,children:[e.jsx("p",{className:`font-medium ${t?"text-blue-300":"text-blue-800"}`,children:"通知设置:"}),e.jsx("p",{className:`text-lg font-bold ${y?"text-green-500":t?"text-red-400":"text-red-600"}`,children:y?"🔔 开启":"🔕 关闭"})]})]})})]}),e.jsxs("div",{children:[e.jsx("h4",{className:`font-semibold mb-3 ${t?"text-gray-300":"text-gray-700"}`,children:"操作日志:"}),e.jsx("div",{className:`rounded-lg p-3 h-40 overflow-y-auto transition-colors ${t?"bg-gray-700":"bg-blue-50"}`,children:k.length===0?e.jsx("p",{className:`text-sm ${t?"text-gray-400":"text-blue-500"}`,children:"开始操作查看日志"}):e.jsx("div",{className:"space-y-1",children:k.map((w,M)=>e.jsx("div",{className:`text-sm font-mono ${t?"text-gray-300":"text-blue-700"}`,children:w},M))})})]}),e.jsxs("div",{className:`p-3 rounded border transition-colors ${t?"bg-yellow-900 border-yellow-700":"bg-yellow-50 border-yellow-200"}`,children:[e.jsx("h4",{className:`font-semibold mb-2 ${t?"text-yellow-300":"text-yellow-800"}`,children:"使用说明:"}),e.jsxs("ul",{className:`text-sm space-y-1 ${t?"text-yellow-200":"text-yellow-700"}`,children:[e.jsx("li",{children:"• useToggle 返回 [value, toggle, setValue]"}),e.jsx("li",{children:"• toggle() 切换布尔值状态"}),e.jsx("li",{children:"• setValue(boolean) 直接设置值"}),e.jsx("li",{children:"• 支持初始值设置"})]})]})]})]}),e.jsx("div",{className:`mt-4 p-3 rounded border transition-colors ${t?"bg-indigo-900 border-indigo-700":"bg-indigo-50 border-indigo-200"}`,children:e.jsx("p",{className:`text-sm ${t?"text-indigo-200":"text-indigo-800"}`,children:"💡 useToggle 是最常用的自定义 Hook 之一，它简化了布尔状态的管理，特别适用于开关、显示/隐藏、启用/禁用等场景。"})})]})},U=`import React, { useState, useCallback } from 'react';
import { useToggle } from './useToggleHook';

const BasicToggleDemo: React.FC = () => {
  // 使用 useToggle Hook 管理多个布尔状态
  const [isVisible, toggleVisible, setVisible] = useToggle(true);
  const [isEnabled, toggleEnabled, setEnabled] = useToggle(false);
  const [isDarkMode, toggleDarkMode, setDarkMode] = useToggle(false);
  const [isExpanded, toggleExpanded, setExpanded] = useToggle(false);
  const [isLoading, toggleLoading, setLoading] = useToggle(false);
  const [notifications, toggleNotifications, setNotifications] = useToggle(true);
  
  // 操作日志状态
  const [logs, setLogs] = useState<string[]>([]);
  
  // 添加日志的辅助函数
  const addLog = useCallback((action: string) => {
    const timestamp = new Date().toLocaleTimeString();
    setLogs(prev => [...prev.slice(-9), \`[\${timestamp}] \${action}\`]);
  }, []);
  
  // 处理各种切换操作
  const handleVisibleToggle = useCallback(() => {
    toggleVisible();
    addLog(\`内容可见性切换为: \${!isVisible ? '显示' : '隐藏'}\`);
  }, [toggleVisible, isVisible, addLog]);
  
  const handleEnabledToggle = useCallback(() => {
    toggleEnabled();
    addLog(\`功能状态切换为: \${!isEnabled ? '启用' : '禁用'}\`);
  }, [toggleEnabled, isEnabled, addLog]);
  
  const handleDarkModeToggle = useCallback(() => {
    toggleDarkMode();
    addLog(\`主题模式切换为: \${!isDarkMode ? '深色' : '浅色'}模式\`);
  }, [toggleDarkMode, isDarkMode, addLog]);
  
  const handleExpandToggle = useCallback(() => {
    toggleExpanded();
    addLog(\`面板状态切换为: \${!isExpanded ? '展开' : '收起'}\`);
  }, [toggleExpanded, isExpanded, addLog]);
  
  const handleLoadingToggle = useCallback(() => {
    if (!isLoading) {
      toggleLoading();
      addLog('开始加载...');
      // 模拟异步操作
      setTimeout(() => {
        setLoading(false);
        addLog('加载完成');
      }, 2000);
    }
  }, [isLoading, toggleLoading, setLoading, addLog]);
  
  const handleNotificationsToggle = useCallback(() => {
    toggleNotifications();
    addLog(\`通知设置切换为: \${!notifications ? '开启' : '关闭'}\`);
  }, [toggleNotifications, notifications, addLog]);
  
  // 直接设置值的处理函数
  const handleSetVisible = useCallback((value: boolean) => {
    setVisible(value);
    addLog(\`直接设置内容可见性为: \${value ? '显示' : '隐藏'}\`);
  }, [setVisible, addLog]);
  
  const handleSetDarkMode = useCallback((value: boolean) => {
    setDarkMode(value);
    addLog(\`直接设置主题模式为: \${value ? '深色' : '浅色'}模式\`);
  }, [setDarkMode, addLog]);
  
  // 重置所有状态
  const handleResetAll = useCallback(() => {
    setVisible(true);
    setEnabled(false);
    setDarkMode(false);
    setExpanded(false);
    setLoading(false);
    setNotifications(true);
    setLogs([]);
    addLog('所有状态已重置为默认值');
  }, [setVisible, setEnabled, setDarkMode, setExpanded, setLoading, setNotifications, addLog]);
  
  return (
    <div className={\`p-6 rounded-lg transition-colors duration-300 \${
      isDarkMode 
        ? 'bg-gray-800 text-white' 
        : 'bg-white text-gray-900'
    }\`}>
      <div className="flex justify-between items-center mb-6">
        <h3 className={\`text-xl font-bold \${
          isDarkMode ? 'text-white' : 'text-gray-900'
        }\`}>useToggle 基础用法演示</h3>
        <button
          onClick={handleResetAll}
          className={\`px-4 py-2 rounded transition-colors \${
            isDarkMode
              ? 'bg-purple-600 text-white hover:bg-purple-500'
              : 'bg-purple-500 text-white hover:bg-purple-600'
          }\`}
        >
          重置所有
        </button>
      </div>
      
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="space-y-4">
          <div className={\`p-4 rounded-lg border transition-colors \${
            isDarkMode 
              ? 'bg-gray-700 border-gray-600' 
              : 'bg-blue-50 border-blue-200'
          }\`}>
            <h4 className={\`font-semibold mb-3 \${
              isDarkMode ? 'text-blue-300' : 'text-blue-800'
            }\`}>基础切换控制</h4>
            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <span className={\`text-sm \${
                  isDarkMode ? 'text-gray-300' : 'text-blue-700'
                }\`}>内容可见性:</span>
                <div className="flex space-x-2">
                  <button
                    onClick={() => handleSetVisible(true)}
                    disabled={isVisible}
                    className={\`px-3 py-1 text-xs rounded transition-colors \${
                      isVisible
                        ? 'bg-gray-300 text-gray-500 cursor-not-allowed'
                        : isDarkMode
                        ? 'bg-green-600 text-white hover:bg-green-500'
                        : 'bg-green-500 text-white hover:bg-green-600'
                    }\`}
                  >
                    显示
                  </button>
                  <button
                    onClick={handleVisibleToggle}
                    className={\`px-3 py-1 text-xs rounded transition-colors \${
                      isDarkMode
                        ? 'bg-blue-600 text-white hover:bg-blue-500'
                        : 'bg-blue-500 text-white hover:bg-blue-600'
                    }\`}
                  >
                    切换
                  </button>
                  <button
                    onClick={() => handleSetVisible(false)}
                    disabled={!isVisible}
                    className={\`px-3 py-1 text-xs rounded transition-colors \${
                      !isVisible
                        ? 'bg-gray-300 text-gray-500 cursor-not-allowed'
                        : isDarkMode
                        ? 'bg-red-600 text-white hover:bg-red-500'
                        : 'bg-red-500 text-white hover:bg-red-600'
                    }\`}
                  >
                    隐藏
                  </button>
                </div>
              </div>
              
              {isVisible && (
                <div className={\`p-3 rounded border-l-4 transition-all duration-300 \${
                  isDarkMode 
                    ? 'bg-gray-600 border-blue-400 text-gray-200' 
                    : 'bg-blue-100 border-blue-400 text-blue-800'
                }\`}>
                  <p className="text-sm">
                    🎉 这是一个可切换显示的内容区域！useToggle 让状态管理变得简单。
                  </p>
                </div>
              )}
              
              <div className="flex items-center justify-between">
                <span className={\`text-sm \${
                  isDarkMode ? 'text-gray-300' : 'text-blue-700'
                }\`}>功能状态:</span>
                <label className="flex items-center space-x-2 cursor-pointer">
                  <input
                    type="checkbox"
                    checked={isEnabled}
                    onChange={handleEnabledToggle}
                    className="text-blue-500 focus:ring-blue-500"
                  />
                  <span className={\`text-sm \${
                    isDarkMode ? 'text-gray-300' : 'text-blue-700'
                  }\`}>
                    {isEnabled ? '已启用' : '已禁用'}
                  </span>
                </label>
              </div>
              
              <div className="flex items-center justify-between">
                <span className={\`text-sm \${
                  isDarkMode ? 'text-gray-300' : 'text-blue-700'
                }\`}>主题模式:</span>
                <div className="flex items-center space-x-2">
                  <button
                    onClick={() => handleSetDarkMode(false)}
                    disabled={!isDarkMode}
                    className={\`px-2 py-1 text-xs rounded transition-colors \${
                      !isDarkMode
                        ? 'bg-gray-300 text-gray-500 cursor-not-allowed'
                        : 'bg-yellow-500 text-white hover:bg-yellow-600'
                    }\`}
                  >
                    ☀️ 浅色
                  </button>
                  <button
                    onClick={handleDarkModeToggle}
                    className={\`px-3 py-1 text-xs rounded transition-colors \${
                      isDarkMode
                        ? 'bg-blue-600 text-white hover:bg-blue-500'
                        : 'bg-blue-500 text-white hover:bg-blue-600'
                    }\`}
                  >
                    切换
                  </button>
                  <button
                    onClick={() => handleSetDarkMode(true)}
                    disabled={isDarkMode}
                    className={\`px-2 py-1 text-xs rounded transition-colors \${
                      isDarkMode
                        ? 'bg-gray-300 text-gray-500 cursor-not-allowed'
                        : 'bg-gray-700 text-white hover:bg-gray-800'
                    }\`}
                  >
                    🌙 深色
                  </button>
                </div>
              </div>
            </div>
          </div>
          
          <div className={\`p-4 rounded-lg border transition-colors \${
            isDarkMode 
              ? 'bg-gray-700 border-gray-600' 
              : 'bg-green-50 border-green-200'
          }\`}>
            <h4 className={\`font-semibold mb-3 \${
              isDarkMode ? 'text-green-300' : 'text-green-800'
            }\`}>交互式控制</h4>
            <div className="space-y-3">
              <div>
                <div className="flex items-center justify-between mb-2">
                  <span className={\`text-sm \${
                    isDarkMode ? 'text-gray-300' : 'text-green-700'
                  }\`}>可展开面板:</span>
                  <button
                    onClick={handleExpandToggle}
                    className={\`px-3 py-1 text-xs rounded transition-colors \${
                      isDarkMode
                        ? 'bg-green-600 text-white hover:bg-green-500'
                        : 'bg-green-500 text-white hover:bg-green-600'
                    }\`}
                  >
                    {isExpanded ? '收起' : '展开'}
                  </button>
                </div>
                
                <div className={\`overflow-hidden transition-all duration-300 \${
                  isExpanded ? 'max-h-32 opacity-100' : 'max-h-0 opacity-0'
                }\`}>
                  <div className={\`p-3 rounded border transition-colors \${
                    isDarkMode 
                      ? 'bg-gray-600 border-gray-500 text-gray-200' 
                      : 'bg-green-100 border-green-300 text-green-800'
                  }\`}>
                    <p className="text-sm">
                      📋 这是一个可展开的面板内容。useToggle 可以轻松控制UI元素的显示状态，
                      配合CSS过渡效果可以创建流畅的用户体验。
                    </p>
                  </div>
                </div>
              </div>
              
              <div className="flex items-center justify-between">
                <span className={\`text-sm \${
                  isDarkMode ? 'text-gray-300' : 'text-green-700'
                }\`}>加载状态:</span>
                <button
                  onClick={handleLoadingToggle}
                  disabled={isLoading}
                  className={\`px-3 py-1 text-xs rounded transition-colors flex items-center space-x-1 \${
                    isLoading
                      ? 'bg-gray-300 text-gray-500 cursor-not-allowed'
                      : isDarkMode
                      ? 'bg-orange-600 text-white hover:bg-orange-500'
                      : 'bg-orange-500 text-white hover:bg-orange-600'
                  }\`}
                >
                  {isLoading && (
                    <div className="animate-spin rounded-full h-3 w-3 border-b-2 border-white"></div>
                  )}
                  <span>{isLoading ? '加载中...' : '开始加载'}</span>
                </button>
              </div>
              
              <div className="flex items-center justify-between">
                <span className={\`text-sm \${
                  isDarkMode ? 'text-gray-300' : 'text-green-700'
                }\`}>通知设置:</span>
                <label className="relative inline-flex items-center cursor-pointer">
                  <input
                    type="checkbox"
                    checked={notifications}
                    onChange={handleNotificationsToggle}
                    className="sr-only peer"
                  />
                  <div className={\`relative w-11 h-6 rounded-full peer transition-colors \${
                    notifications 
                      ? 'bg-green-500' 
                      : isDarkMode ? 'bg-gray-600' : 'bg-gray-300'
                  } peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-green-300\`}>
                    <div className={\`absolute top-[2px] left-[2px] bg-white border border-gray-300 rounded-full h-5 w-5 transition-transform \${
                      notifications ? 'translate-x-full border-white' : ''
                    }\`}></div>
                  </div>
                  <span className={\`ml-2 text-sm \${
                    isDarkMode ? 'text-gray-300' : 'text-green-700'
                  }\`}>
                    {notifications ? '开启' : '关闭'}
                  </span>
                </label>
              </div>
            </div>
          </div>
        </div>
        
        <div className="space-y-4">
          <div>
            <h4 className={\`font-semibold mb-3 \${
              isDarkMode ? 'text-gray-300' : 'text-gray-700'
            }\`}>当前状态:</h4>
            <div className={\`rounded-lg p-3 transition-colors \${
              isDarkMode ? 'bg-gray-700' : 'bg-gray-50'
            }\`}>
              <div className="grid grid-cols-2 gap-3 text-sm">
                <div className={\`p-2 rounded \${
                  isDarkMode ? 'bg-gray-600' : 'bg-white'
                }\`}>
                  <p className={\`font-medium \${
                    isDarkMode ? 'text-blue-300' : 'text-blue-800'
                  }\`}>内容可见:</p>
                  <p className={\`text-lg font-bold \${
                    isVisible 
                      ? 'text-green-500' 
                      : isDarkMode ? 'text-red-400' : 'text-red-600'
                  }\`}>
                    {isVisible ? '✓ 显示' : '✗ 隐藏'}
                  </p>
                </div>
                <div className={\`p-2 rounded \${
                  isDarkMode ? 'bg-gray-600' : 'bg-white'
                }\`}>
                  <p className={\`font-medium \${
                    isDarkMode ? 'text-blue-300' : 'text-blue-800'
                  }\`}>功能状态:</p>
                  <p className={\`text-lg font-bold \${
                    isEnabled 
                      ? 'text-green-500' 
                      : isDarkMode ? 'text-red-400' : 'text-red-600'
                  }\`}>
                    {isEnabled ? '✓ 启用' : '✗ 禁用'}
                  </p>
                </div>
                <div className={\`p-2 rounded \${
                  isDarkMode ? 'bg-gray-600' : 'bg-white'
                }\`}>
                  <p className={\`font-medium \${
                    isDarkMode ? 'text-blue-300' : 'text-blue-800'
                  }\`}>主题模式:</p>
                  <p className={\`text-lg font-bold \${
                    isDarkMode 
                      ? 'text-purple-400' 
                      : 'text-yellow-600'
                  }\`}>
                    {isDarkMode ? '🌙 深色' : '☀️ 浅色'}
                  </p>
                </div>
                <div className={\`p-2 rounded \${
                  isDarkMode ? 'bg-gray-600' : 'bg-white'
                }\`}>
                  <p className={\`font-medium \${
                    isDarkMode ? 'text-blue-300' : 'text-blue-800'
                  }\`}>面板状态:</p>
                  <p className={\`text-lg font-bold \${
                    isExpanded 
                      ? 'text-green-500' 
                      : isDarkMode ? 'text-gray-400' : 'text-gray-600'
                  }\`}>
                    {isExpanded ? '📂 展开' : '📁 收起'}
                  </p>
                </div>
                <div className={\`p-2 rounded \${
                  isDarkMode ? 'bg-gray-600' : 'bg-white'
                }\`}>
                  <p className={\`font-medium \${
                    isDarkMode ? 'text-blue-300' : 'text-blue-800'
                  }\`}>加载状态:</p>
                  <p className={\`text-lg font-bold \${
                    isLoading 
                      ? 'text-orange-500' 
                      : isDarkMode ? 'text-gray-400' : 'text-gray-600'
                  }\`}>
                    {isLoading ? '⏳ 加载中' : '✅ 就绪'}
                  </p>
                </div>
                <div className={\`p-2 rounded \${
                  isDarkMode ? 'bg-gray-600' : 'bg-white'
                }\`}>
                  <p className={\`font-medium \${
                    isDarkMode ? 'text-blue-300' : 'text-blue-800'
                  }\`}>通知设置:</p>
                  <p className={\`text-lg font-bold \${
                    notifications 
                      ? 'text-green-500' 
                      : isDarkMode ? 'text-red-400' : 'text-red-600'
                  }\`}>
                    {notifications ? '🔔 开启' : '🔕 关闭'}
                  </p>
                </div>
              </div>
            </div>
          </div>
          
          <div>
            <h4 className={\`font-semibold mb-3 \${
              isDarkMode ? 'text-gray-300' : 'text-gray-700'
            }\`}>操作日志:</h4>
            <div className={\`rounded-lg p-3 h-40 overflow-y-auto transition-colors \${
              isDarkMode ? 'bg-gray-700' : 'bg-blue-50'
            }\`}>
              {logs.length === 0 ? (
                <p className={\`text-sm \${
                  isDarkMode ? 'text-gray-400' : 'text-blue-500'
                }\`}>开始操作查看日志</p>
              ) : (
                <div className="space-y-1">
                  {logs.map((log, index) => (
                    <div key={index} className={\`text-sm font-mono \${
                      isDarkMode ? 'text-gray-300' : 'text-blue-700'
                    }\`}>
                      {log}
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>
          
          <div className={\`p-3 rounded border transition-colors \${
            isDarkMode 
              ? 'bg-yellow-900 border-yellow-700' 
              : 'bg-yellow-50 border-yellow-200'
          }\`}>
            <h4 className={\`font-semibold mb-2 \${
              isDarkMode ? 'text-yellow-300' : 'text-yellow-800'
            }\`}>使用说明:</h4>
            <ul className={\`text-sm space-y-1 \${
              isDarkMode ? 'text-yellow-200' : 'text-yellow-700'
            }\`}>
              <li>• useToggle 返回 [value, toggle, setValue]</li>
              <li>• toggle() 切换布尔值状态</li>
              <li>• setValue(boolean) 直接设置值</li>
              <li>• 支持初始值设置</li>
            </ul>
          </div>
        </div>
      </div>
      
      <div className={\`mt-4 p-3 rounded border transition-colors \${
        isDarkMode 
          ? 'bg-indigo-900 border-indigo-700' 
          : 'bg-indigo-50 border-indigo-200'
      }\`}>
        <p className={\`text-sm \${
          isDarkMode ? 'text-indigo-200' : 'text-indigo-800'
        }\`}>
          💡 useToggle 是最常用的自定义 Hook 之一，它简化了布尔状态的管理，特别适用于开关、显示/隐藏、启用/禁用等场景。
        </p>
      </div>
    </div>
  );
};

export default BasicToggleDemo;`,q=()=>{const[o,h]=v(!1),[n,r]=v(!1),[g,a]=v(!1),[t,c]=v(!1),[s,x]=v(!0),[m,N]=v(!1),[l,u]=d.useState({username:"",password:"",email:"",phone:""}),[f,y]=d.useState([]),p=b=>{const j=new Date().toLocaleTimeString();y(T=>[...T,`[${j}] ${b}`])},$=(b,j)=>{u(T=>({...T,[b]:j})),p(`输入字段: ${b} = ${j}`)},k=async b=>{b.preventDefault(),i&&(h(),p("开始提交表单..."),setTimeout(()=>{h(),p("表单提交成功!"),u({username:"",password:"",email:"",phone:""}),a(!1),c(!1),p("表单已重置")},2e3))},D=()=>{u({username:"",password:"",email:"",phone:""}),a(!1),c(!1),r(!1),x(!0),N(!1),y([]),p("表单已完全重置")},i=l.username&&l.password&&l.email&&t;return e.jsxs("div",{className:"space-y-6",children:[e.jsxs("div",{className:"bg-white rounded-lg shadow-md p-6",children:[e.jsxs("div",{className:"flex items-center justify-between mb-4",children:[e.jsx("h3",{className:"text-lg font-semibold text-gray-800",children:"表单控制演示"}),e.jsxs("div",{className:"flex space-x-2",children:[e.jsx("button",{onClick:()=>{N(),p(`高级模式: ${m?"关闭":"开启"}`)},className:`px-3 py-1 rounded text-sm font-medium transition-colors ${m?"bg-purple-500 text-white":"bg-gray-200 text-gray-700 hover:bg-gray-300"}`,children:m?"🔧 高级模式":"🔧 基础模式"}),e.jsx("button",{onClick:D,className:"px-3 py-1 bg-red-500 text-white rounded text-sm font-medium hover:bg-red-600 transition-colors",children:"重置表单"})]})]}),e.jsxs("form",{onSubmit:k,className:"space-y-4",children:[e.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-4",children:[e.jsxs("div",{children:[e.jsx("label",{className:"block text-sm font-medium text-gray-700 mb-1",children:"用户名 *"}),e.jsx("input",{type:"text",value:l.username,onChange:b=>$("username",b.target.value),disabled:o,className:"w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 disabled:bg-gray-100",placeholder:"请输入用户名"})]}),e.jsxs("div",{children:[e.jsx("label",{className:"block text-sm font-medium text-gray-700 mb-1",children:"密码 *"}),e.jsxs("div",{className:"relative",children:[e.jsx("input",{type:n?"text":"password",value:l.password,onChange:b=>$("password",b.target.value),disabled:o,className:"w-full px-3 py-2 pr-10 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 disabled:bg-gray-100",placeholder:"请输入密码"}),e.jsx("button",{type:"button",onClick:()=>{r(),p(`密码可见性: ${n?"隐藏":"显示"}`)},disabled:o,className:"absolute right-2 top-1/2 transform -translate-y-1/2 text-gray-500 hover:text-gray-700 disabled:opacity-50",children:n?"👁️":"👁️‍🗨️"})]})]}),e.jsxs("div",{children:[e.jsx("label",{className:"block text-sm font-medium text-gray-700 mb-1",children:"邮箱 *"}),e.jsx("input",{type:"email",value:l.email,onChange:b=>$("email",b.target.value),disabled:o,className:"w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 disabled:bg-gray-100",placeholder:"请输入邮箱"})]}),m&&e.jsxs("div",{children:[e.jsx("label",{className:"block text-sm font-medium text-gray-700 mb-1",children:"手机号"}),e.jsx("input",{type:"tel",value:l.phone,onChange:b=>$("phone",b.target.value),disabled:o,className:"w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 disabled:bg-gray-100",placeholder:"请输入手机号"})]})]}),e.jsx("div",{className:"space-y-3",children:e.jsxs("div",{className:"flex flex-wrap gap-4",children:[e.jsxs("label",{className:"flex items-center space-x-2 cursor-pointer",children:[e.jsx("input",{type:"checkbox",checked:g,onChange:()=>{a(),p(`记住我: ${g?"关闭":"开启"}`)},disabled:o,className:"text-blue-500 focus:ring-blue-500"}),e.jsx("span",{className:"text-sm text-gray-700",children:"记住我"})]}),e.jsxs("label",{className:"flex items-center space-x-2 cursor-pointer",children:[e.jsx("input",{type:"checkbox",checked:t,onChange:()=>{c(),p(`服务条款: ${t?"不同意":"同意"}`)},disabled:o,className:"text-green-500 focus:ring-green-500"}),e.jsx("span",{className:"text-sm text-green-700",children:"同意服务条款 *"})]}),m&&e.jsxs("label",{className:"flex items-center space-x-2 cursor-pointer",children:[e.jsx("input",{type:"checkbox",checked:s,onChange:()=>{x(),p(`通知设置: ${s?"关闭":"开启"}`)},disabled:o,className:"text-green-500 focus:ring-green-500"}),e.jsx("span",{className:"text-sm text-green-700",children:"启用邮件通知"})]})]})}),e.jsxs("div",{className:"flex items-center justify-between",children:[e.jsx("div",{className:`text-sm ${i?"text-green-600":"text-red-600"}`,children:i?"✓ 表单验证通过":"✗ 请完善必填信息"}),e.jsx("button",{type:"submit",disabled:!i||o,className:`px-6 py-2 rounded-md font-medium transition-colors ${!i||o?"bg-gray-300 text-gray-500 cursor-not-allowed":"bg-blue-500 text-white hover:bg-blue-600"}`,children:o?"提交中...":"提交表单"})]})]})]}),e.jsxs("div",{className:"space-y-4",children:[e.jsxs("div",{children:[e.jsx("h4",{className:"font-semibold text-gray-700 mb-3",children:"表单状态:"}),e.jsx("div",{className:"bg-gray-50 rounded-lg p-3",children:e.jsxs("div",{className:"grid grid-cols-2 gap-3 text-sm",children:[e.jsxs("div",{className:"p-2 bg-white rounded",children:[e.jsx("p",{className:"font-medium text-blue-800",children:"密码可见:"}),e.jsx("p",{className:`text-lg font-bold ${n?"text-green-500":"text-red-600"}`,children:n?"✓ 显示":"✗ 隐藏"})]}),e.jsxs("div",{className:"p-2 bg-white rounded",children:[e.jsx("p",{className:"font-medium text-blue-800",children:"记住我:"}),e.jsx("p",{className:`text-lg font-bold ${g?"text-green-500":"text-red-600"}`,children:g?"✓ 开启":"✗ 关闭"})]}),e.jsxs("div",{className:"p-2 bg-white rounded",children:[e.jsx("p",{className:"font-medium text-blue-800",children:"服务条款:"}),e.jsx("p",{className:`text-lg font-bold ${t?"text-green-500":"text-red-600"}`,children:t?"✓ 同意":"✗ 未同意"})]}),e.jsxs("div",{className:"p-2 bg-white rounded",children:[e.jsx("p",{className:"font-medium text-blue-800",children:"提交状态:"}),e.jsx("p",{className:`text-lg font-bold ${o?"text-orange-500":"text-gray-600"}`,children:o?"⏳ 提交中":"✅ 就绪"})]}),m&&e.jsxs(e.Fragment,{children:[e.jsxs("div",{className:"p-2 bg-white rounded",children:[e.jsx("p",{className:"font-medium text-blue-800",children:"通知设置:"}),e.jsx("p",{className:`text-lg font-bold ${s?"text-green-500":"text-red-600"}`,children:s?"✓ 开启":"✗ 关闭"})]}),e.jsxs("div",{className:"p-2 bg-white rounded",children:[e.jsx("p",{className:"font-medium text-blue-800",children:"模式:"}),e.jsx("p",{className:"text-lg font-bold text-purple-600",children:"🔧 高级模式"})]})]})]})})]}),e.jsxs("div",{children:[e.jsx("h4",{className:"font-semibold text-gray-700 mb-3",children:"表单数据:"}),e.jsx("div",{className:"bg-gray-50 rounded-lg p-3",children:e.jsx("pre",{className:"text-sm text-gray-700 font-mono",children:JSON.stringify({username:l.username||"(空)",password:l.password?"***":"(空)",email:l.email||"(空)",phone:l.phone||"(空)",rememberMe:g,agreeTerms:t,enableNotifications:s,isAdvancedMode:m},null,2)})})]}),e.jsxs("div",{children:[e.jsx("h4",{className:"font-semibold text-gray-700 mb-3",children:"操作日志:"}),e.jsx("div",{className:"bg-blue-50 rounded-lg p-3 h-40 overflow-y-auto",children:f.length===0?e.jsx("p",{className:"text-sm text-blue-500",children:"开始操作查看日志"}):e.jsx("div",{className:"space-y-1",children:f.map((b,j)=>e.jsx("div",{className:"text-sm font-mono text-blue-700",children:b},j))})})]}),e.jsxs("div",{className:"p-3 bg-yellow-50 border border-yellow-200 rounded",children:[e.jsx("h4",{className:"font-semibold text-yellow-800 mb-2",children:"表单特性:"}),e.jsxs("ul",{className:"text-sm text-yellow-700 space-y-1",children:[e.jsx("li",{children:"• 密码显示/隐藏切换"}),e.jsx("li",{children:"• 表单验证状态管理"}),e.jsx("li",{children:"• 提交状态控制"}),e.jsx("li",{children:"• 高级模式切换"})]})]})]}),e.jsx("div",{className:"mt-4 p-3 bg-indigo-50 border border-indigo-200 rounded",children:e.jsx("p",{className:"text-sm text-indigo-800",children:"💡 在表单中使用 useToggle 可以简化各种开关状态的管理，如密码可见性、记住我选项、服务条款同意等。"})})]})},B=`import React, { useState } from 'react';
import { useToggle, useAdvancedToggle } from './useToggleHook';

const FormControlDemo: React.FC = () => {
  const [isSubmitting, toggleSubmitting] = useToggle(false);
  const [showPassword, togglePassword] = useToggle(false);
  const [rememberMe, toggleRememberMe] = useToggle(false);
  const [agreeTerms, toggleAgreeTerms] = useToggle(false);
  const [enableNotifications, toggleNotifications] = useToggle(true);
  const [isAdvancedMode, toggleAdvancedMode] = useToggle(false);
  
  const [formData, setFormData] = useState({
    username: '',
    password: '',
    email: '',
    phone: ''
  });
  
  const [logs, setLogs] = useState<string[]>([]);
  
  const addLog = (message: string) => {
    const timestamp = new Date().toLocaleTimeString();
    setLogs(prev => [...prev, \`[\${timestamp}] \${message}\`]);
  };
  
  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
    addLog(\`输入字段: \${field} = \${value}\`);
  };
  
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!isFormValid) return;
    
    toggleSubmitting();
    addLog('开始提交表单...');
    
    // 模拟提交过程
    setTimeout(() => {
      toggleSubmitting();
      addLog('表单提交成功!');
      
      // 重置表单
      setFormData({ username: '', password: '', email: '', phone: '' });
      toggleRememberMe(false);
      toggleAgreeTerms(false);
      addLog('表单已重置');
    }, 2000);
  };
  
  const resetForm = () => {
    setFormData({ username: '', password: '', email: '', phone: '' });
    toggleRememberMe(false);
    toggleAgreeTerms(false);
    togglePassword(false);
    toggleNotifications(true);
    toggleAdvancedMode(false);
    setLogs([]);
    addLog('表单已完全重置');
  };
  
  const isFormValid = formData.username && formData.password && formData.email && agreeTerms;
  
  return (
    <div className="space-y-6">
      <div className="bg-white rounded-lg shadow-md p-6">
        <div className="flex items-center justify-between mb-4">
          <h3 className="text-lg font-semibold text-gray-800">表单控制演示</h3>
          <div className="flex space-x-2">
            <button
              onClick={() => {
                toggleAdvancedMode();
                addLog(\`高级模式: \${!isAdvancedMode ? '开启' : '关闭'}\`);
              }}
              className={\`px-3 py-1 rounded text-sm font-medium transition-colors \${
                isAdvancedMode
                  ? 'bg-purple-500 text-white'
                  : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
              }\`}
            >
              {isAdvancedMode ? '🔧 高级模式' : '🔧 基础模式'}
            </button>
            <button
              onClick={resetForm}
              className="px-3 py-1 bg-red-500 text-white rounded text-sm font-medium hover:bg-red-600 transition-colors"
            >
              重置表单
            </button>
          </div>
        </div>
        
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                用户名 *
              </label>
              <input
                type="text"
                value={formData.username}
                onChange={(e) => handleInputChange('username', e.target.value)}
                disabled={isSubmitting}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 disabled:bg-gray-100"
                placeholder="请输入用户名"
              />
            </div>
            
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                密码 *
              </label>
              <div className="relative">
                <input
                  type={showPassword ? 'text' : 'password'}
                  value={formData.password}
                  onChange={(e) => handleInputChange('password', e.target.value)}
                  disabled={isSubmitting}
                  className="w-full px-3 py-2 pr-10 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 disabled:bg-gray-100"
                  placeholder="请输入密码"
                />
                <button
                  type="button"
                  onClick={() => {
                    togglePassword();
                    addLog(\`密码可见性: \${!showPassword ? '显示' : '隐藏'}\`);
                  }}
                  disabled={isSubmitting}
                  className="absolute right-2 top-1/2 transform -translate-y-1/2 text-gray-500 hover:text-gray-700 disabled:opacity-50"
                >
                  {showPassword ? '👁️' : '👁️‍🗨️'}
                </button>
              </div>
            </div>
            
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                邮箱 *
              </label>
              <input
                type="email"
                value={formData.email}
                onChange={(e) => handleInputChange('email', e.target.value)}
                disabled={isSubmitting}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 disabled:bg-gray-100"
                placeholder="请输入邮箱"
              />
            </div>
            
            {isAdvancedMode && (
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  手机号
                </label>
                <input
                  type="tel"
                  value={formData.phone}
                  onChange={(e) => handleInputChange('phone', e.target.value)}
                  disabled={isSubmitting}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 disabled:bg-gray-100"
                  placeholder="请输入手机号"
                />
              </div>
            )}
          </div>
          
          <div className="space-y-3">
            <div className="flex flex-wrap gap-4">
              <label className="flex items-center space-x-2 cursor-pointer">
                <input
                  type="checkbox"
                  checked={rememberMe}
                  onChange={() => {
                    toggleRememberMe();
                    addLog(\`记住我: \${!rememberMe ? '开启' : '关闭'}\`);
                  }}
                  disabled={isSubmitting}
                  className="text-blue-500 focus:ring-blue-500"
                />
                <span className="text-sm text-gray-700">记住我</span>
              </label>
              
              <label className="flex items-center space-x-2 cursor-pointer">
                <input
                  type="checkbox"
                  checked={agreeTerms}
                  onChange={() => {
                    toggleAgreeTerms();
                    addLog(\`服务条款: \${!agreeTerms ? '同意' : '不同意'}\`);
                  }}
                  disabled={isSubmitting}
                  className="text-green-500 focus:ring-green-500"
                />
                <span className="text-sm text-green-700">同意服务条款 *</span>
              </label>
              
              {isAdvancedMode && (
                <label className="flex items-center space-x-2 cursor-pointer">
                  <input
                    type="checkbox"
                    checked={enableNotifications}
                    onChange={() => {
                      toggleNotifications();
                      addLog(\`通知设置: \${!enableNotifications ? '开启' : '关闭'}\`);
                    }}
                    disabled={isSubmitting}
                    className="text-green-500 focus:ring-green-500"
                  />
                  <span className="text-sm text-green-700">启用邮件通知</span>
                </label>
              )}
            </div>
          </div>
          
          <div className="flex items-center justify-between">
            <div className={\`text-sm \${
              isFormValid ? 'text-green-600' : 'text-red-600'
            }\`}>
              {isFormValid ? '✓ 表单验证通过' : '✗ 请完善必填信息'}
            </div>
            
            <button
              type="submit"
              disabled={!isFormValid || isSubmitting}
              className={\`px-6 py-2 rounded-md font-medium transition-colors \${
                !isFormValid || isSubmitting
                  ? 'bg-gray-300 text-gray-500 cursor-not-allowed'
                  : 'bg-blue-500 text-white hover:bg-blue-600'
              }\`}
            >
              {isSubmitting ? '提交中...' : '提交表单'}
            </button>
          </div>
        </form>
      </div>
      
      <div className="space-y-4">
        <div>
          <h4 className="font-semibold text-gray-700 mb-3">表单状态:</h4>
          <div className="bg-gray-50 rounded-lg p-3">
            <div className="grid grid-cols-2 gap-3 text-sm">
              <div className="p-2 bg-white rounded">
                <p className="font-medium text-blue-800">密码可见:</p>
                <p className={\`text-lg font-bold \${
                  showPassword ? 'text-green-500' : 'text-red-600'
                }\`}>
                  {showPassword ? '✓ 显示' : '✗ 隐藏'}
                </p>
              </div>
              <div className="p-2 bg-white rounded">
                <p className="font-medium text-blue-800">记住我:</p>
                <p className={\`text-lg font-bold \${
                  rememberMe ? 'text-green-500' : 'text-red-600'
                }\`}>
                  {rememberMe ? '✓ 开启' : '✗ 关闭'}
                </p>
              </div>
              <div className="p-2 bg-white rounded">
                <p className="font-medium text-blue-800">服务条款:</p>
                <p className={\`text-lg font-bold \${
                  agreeTerms ? 'text-green-500' : 'text-red-600'
                }\`}>
                  {agreeTerms ? '✓ 同意' : '✗ 未同意'}
                </p>
              </div>
              <div className="p-2 bg-white rounded">
                <p className="font-medium text-blue-800">提交状态:</p>
                <p className={\`text-lg font-bold \${
                  isSubmitting ? 'text-orange-500' : 'text-gray-600'
                }\`}>
                  {isSubmitting ? '⏳ 提交中' : '✅ 就绪'}
                </p>
              </div>
              {isAdvancedMode && (
                <>
                  <div className="p-2 bg-white rounded">
                    <p className="font-medium text-blue-800">通知设置:</p>
                    <p className={\`text-lg font-bold \${
                      enableNotifications ? 'text-green-500' : 'text-red-600'
                    }\`}>
                      {enableNotifications ? '✓ 开启' : '✗ 关闭'}
                    </p>
                  </div>
                  <div className="p-2 bg-white rounded">
                    <p className="font-medium text-blue-800">模式:</p>
                    <p className="text-lg font-bold text-purple-600">
                      🔧 高级模式
                    </p>
                  </div>
                </>
              )}
            </div>
          </div>
        </div>
        
        <div>
          <h4 className="font-semibold text-gray-700 mb-3">表单数据:</h4>
          <div className="bg-gray-50 rounded-lg p-3">
            <pre className="text-sm text-gray-700 font-mono">
{JSON.stringify({
  username: formData.username || '(空)',
  password: formData.password ? '***' : '(空)',
  email: formData.email || '(空)',
  phone: formData.phone || '(空)',
  rememberMe,
  agreeTerms,
  enableNotifications,
  isAdvancedMode
}, null, 2)}
            </pre>
          </div>
        </div>
        
        <div>
          <h4 className="font-semibold text-gray-700 mb-3">操作日志:</h4>
          <div className="bg-blue-50 rounded-lg p-3 h-40 overflow-y-auto">
            {logs.length === 0 ? (
              <p className="text-sm text-blue-500">开始操作查看日志</p>
            ) : (
              <div className="space-y-1">
                {logs.map((log, index) => (
                  <div key={index} className="text-sm font-mono text-blue-700">
                    {log}
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
        
        <div className="p-3 bg-yellow-50 border border-yellow-200 rounded">
          <h4 className="font-semibold text-yellow-800 mb-2">表单特性:</h4>
          <ul className="text-sm text-yellow-700 space-y-1">
            <li>• 密码显示/隐藏切换</li>
            <li>• 表单验证状态管理</li>
            <li>• 提交状态控制</li>
            <li>• 高级模式切换</li>
          </ul>
        </div>
      </div>
      
      <div className="mt-4 p-3 bg-indigo-50 border border-indigo-200 rounded">
        <p className="text-sm text-indigo-800">
          💡 在表单中使用 useToggle 可以简化各种开关状态的管理，如密码可见性、记住我选项、服务条款同意等。
        </p>
      </div>
    </div>
  );
};

export default FormControlDemo;`,G=()=>e.jsx(I,{title:"useToggle Hook",description:"用于管理布尔状态的自定义Hook，提供切换和直接设置功能",overview:[{title:"核心概念",items:["布尔状态切换","直接设置值","初始值配置","回调支持"]},{title:"主要优势",items:["简化代码","类型安全","性能优化","灵活配置"]},{title:"适用场景",items:["UI 控制","功能开关","表单控制","状态管理"]},{title:"注意事项",items:["初始值设置","回调时机","状态同步","性能考虑"]}],examples:[{title:"基础切换演示",component:e.jsx(O,{}),description:"展示 useToggle Hook 的基本用法，包括各种常见的切换场景",observationPoints:["点击切换按钮时，状态会在 true/false 之间切换","可以通过 setValue 直接设置特定的布尔值","所有状态变化都会记录在操作日志中","支持主题切换，展示实际应用场景"],keyPoints:["useToggle 返回 [value, toggle, setValue] 三个元素","toggle() 函数用于切换布尔值","setValue(boolean) 用于直接设置值","支持设置初始值","useAdvancedToggle 提供更多控制方法和回调支持"],commonTraps:["忘记处理初始值可能导致意外的默认状态","在条件渲染中使用时要注意状态的一致性","多个组件使用同一个 toggle 时可能产生状态冲突"],solutions:["明确设置合适的初始值","使用状态提升来管理共享的 toggle 状态","为不同的功能使用独立的 useToggle 实例"],importantTips:["useToggle 非常适合管理 UI 的显示/隐藏状态","可以配合 CSS 过渡效果创建流畅的用户体验","在表单中使用时要注意与表单验证的配合"],codeExample:{title:"基础切换演示",code:U,language:"typescript",highlights:"15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30"}},{title:"高级切换演示",component:e.jsx(R,{}),description:"展示 useAdvancedToggle Hook 的高级功能，包括回调、禁用状态等",observationPoints:["支持状态变化时的回调函数","可以设置禁用状态，禁用时无法切换","支持禁用时重置状态的配置","提供更多的控制方法：setTrue、setFalse、reset"],keyPoints:["useAdvancedToggle 提供更丰富的 API","支持 onToggle 回调函数","可以通过 disabled 选项禁用切换","resetOnDisabled 选项控制禁用时是否重置"],commonTraps:["回调函数中的依赖可能导致无限循环","禁用状态的逻辑可能与业务逻辑冲突","重置功能可能意外清除用户的操作"],solutions:["正确设置回调函数的依赖数组","清晰定义禁用状态的业务规则","在重置前给用户适当的提示"],importantTips:["高级版本适合需要复杂状态控制的场景","回调函数可以用于状态变化的副作用处理","禁用功能在表单验证中特别有用"],codeExample:{title:"高级切换演示",code:H,language:"typescript",highlights:"20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35"}},{title:"表单控制演示",component:e.jsx(q,{}),description:"展示 useToggle 在表单控制中的实际应用",observationPoints:["密码显示/隐藏切换功能","表单验证状态的动态控制","提交状态的管理和UI反馈","高级模式的条件显示"],keyPoints:["useToggle 在表单中的多种应用场景","状态变化与表单验证的结合","用户体验的优化技巧","条件渲染的最佳实践"],commonTraps:["表单重置时忘记重置 toggle 状态","提交过程中的状态管理混乱","验证逻辑与 toggle 状态不同步"],solutions:["统一管理所有表单相关的状态","使用明确的状态机来管理提交流程","确保验证逻辑与UI状态保持一致"],importantTips:["表单中的 toggle 状态要与表单数据保持同步","提交状态的管理对用户体验很重要","考虑使用防抖来优化频繁的状态切换"],codeExample:{title:"表单控制应用示例",code:B,language:"typescript",highlights:"9, 12, 15, 16, 17, 18, 19, 20, 21, 22, 26, 27, 36, 40, 41, 42, 43, 44, 59, 60, 64, 65, 66, 67, 72, 73, 74, 75, 81, 88, 89, 90"}}],tutorial:{concepts:["useToggle 是一个用于管理布尔状态的自定义 Hook","它简化了常见的开关、显示/隐藏等状态管理","提供了切换和直接设置两种状态更新方式","高级版本支持回调函数和禁用控制"],steps:["导入 useToggle Hook","调用 Hook 并设置初始值","解构返回的状态值和控制函数","在组件中使用状态值进行条件渲染","使用控制函数响应用户交互","根据需要配置高级选项"],tips:["为不同的功能使用独立的 useToggle 实例","合理设置初始值以符合业务逻辑","在复杂场景中考虑使用 useAdvancedToggle","配合 CSS 过渡效果提升用户体验","在表单中使用时注意与验证逻辑的配合"]},interview:{questions:[{question:"useToggle Hook 的基本用法是什么？",answer:"useToggle 接受一个可选的初始布尔值，返回一个数组：[当前值, 切换函数, 设置函数]。切换函数用于在 true/false 之间切换，设置函数用于直接设置特定值。"},{question:"useToggle 和 useState 相比有什么优势？",answer:"useToggle 专门为布尔状态设计，提供了更简洁的 API。它内置了切换逻辑，减少了重复代码，并且提供了更好的语义化。对于简单的开关状态，useToggle 比 useState 更直观。"},{question:"什么时候应该使用 useAdvancedToggle？",answer:"当需要状态变化回调、禁用控制、或者更多控制方法时使用 useAdvancedToggle。它适合复杂的业务场景，如表单验证、权限控制等需要额外逻辑的情况。"},{question:"如何在多个组件间共享 toggle 状态？",answer:"可以将 useToggle 提升到父组件中，然后通过 props 传递给子组件。或者使用 Context API 来共享状态。对于复杂的状态管理，也可以考虑使用状态管理库。"},{question:"useToggle 的性能优化策略有哪些？",answer:"useToggle 内部使用 useCallback 优化函数引用，避免不必要的重渲染。在使用时，避免在渲染函数中创建新的回调函数，合理使用 React.memo 来优化子组件。"}],keyPoints:["useToggle 简化了布尔状态的管理","提供切换和直接设置两种操作方式","高级版本支持回调和禁用控制","适合 UI 控制、表单管理等场景","内置性能优化，使用 useCallback"]},bestPractices:{dos:["为不同功能使用独立的 useToggle 实例","设置合适的初始值以符合业务逻辑","在复杂场景中使用 useAdvancedToggle","配合 CSS 过渡效果提升用户体验","在表单中合理管理 toggle 状态","使用语义化的变量名描述状态用途"],donts:["不要在渲染函数中创建新的回调函数","不要忽略初始值的设置","不要在多个组件中重复创建相同的状态","不要忘记处理异步操作中的状态管理","不要在回调函数中创建无限循环"],patterns:["状态提升：将共享的 toggle 状态提升到父组件","条件渲染：基于 toggle 状态进行组件的条件显示","状态机：使用多个 toggle 状态构建简单的状态机","防抖优化：对频繁的 toggle 操作进行防抖处理","回调模式：使用 useAdvancedToggle 的回调处理副作用"]}});export{G as default};
