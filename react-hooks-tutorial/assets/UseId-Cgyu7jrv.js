import{r as n,j as e}from"./index-DPG_OKoV.js";import{C as N}from"./ComponentTemplate-HXLvd6Xe.js";const j=()=>{const[s,c]=n.useState(""),[r,l]=n.useState(""),[a,m]=n.useState(""),x=n.useId(),b=n.useId(),p=n.useId(),[h,u]=n.useState([]),d=t=>{const g=new Date().toLocaleTimeString();u(v=>[...v.slice(-5),`${g}: ${t}`])},o=t=>{t.preventDefault(),d(`表单提交 - 姓名: ${s}, 邮箱: ${r}`)},I=()=>{u([])},i=()=>{d(`生成的 ID - 姓名: ${x}, 邮箱: ${b}, 密码: ${p}`)};return e.jsxs("div",{className:"p-6 bg-white rounded-lg border border-gray-200",children:[e.jsxs("div",{className:"flex items-center justify-between mb-4",children:[e.jsx("h3",{className:"text-lg font-semibold text-gray-800",children:"表单字段 ID 生成"}),e.jsxs("div",{className:"space-x-2",children:[e.jsx("button",{onClick:i,className:"px-3 py-1 bg-blue-500 text-white rounded text-sm hover:bg-blue-600 transition-colors",children:"显示 ID"}),e.jsx("button",{onClick:I,className:"px-3 py-1 bg-gray-500 text-white rounded text-sm hover:bg-gray-600 transition-colors",children:"清空日志"})]})]}),e.jsxs("div",{className:"grid grid-cols-1 lg:grid-cols-2 gap-6",children:[e.jsxs("div",{children:[e.jsxs("form",{onSubmit:o,className:"space-y-4",children:[e.jsxs("div",{children:[e.jsx("label",{htmlFor:x,className:"block text-sm font-medium text-gray-700 mb-1",children:"姓名:"}),e.jsx("input",{id:x,type:"text",value:s,onChange:t=>c(t.target.value),className:"w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent",placeholder:"请输入您的姓名"}),e.jsxs("p",{className:"text-xs text-gray-500 mt-1",children:["ID: ",x]})]}),e.jsxs("div",{children:[e.jsx("label",{htmlFor:b,className:"block text-sm font-medium text-gray-700 mb-1",children:"邮箱:"}),e.jsx("input",{id:b,type:"email",value:r,onChange:t=>l(t.target.value),className:"w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent",placeholder:"请输入您的邮箱"}),e.jsxs("p",{className:"text-xs text-gray-500 mt-1",children:["ID: ",b]})]}),e.jsxs("div",{children:[e.jsx("label",{htmlFor:p,className:"block text-sm font-medium text-gray-700 mb-1",children:"密码:"}),e.jsx("input",{id:p,type:"password",value:a,onChange:t=>m(t.target.value),className:"w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent",placeholder:"请输入密码"}),e.jsxs("p",{className:"text-xs text-gray-500 mt-1",children:["ID: ",p]})]}),e.jsx("button",{type:"submit",className:"w-full px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 transition-colors",children:"提交表单"})]}),e.jsxs("div",{className:"mt-4 p-3 bg-blue-50 rounded border border-blue-200",children:[e.jsx("h4",{className:"font-semibold text-blue-800 mb-2",children:"表单数据:"}),e.jsxs("div",{className:"text-sm text-blue-700 space-y-1",children:[e.jsxs("p",{children:[e.jsx("strong",{children:"姓名:"})," ",s||"(未填写)"]}),e.jsxs("p",{children:[e.jsx("strong",{children:"邮箱:"})," ",r||"(未填写)"]}),e.jsxs("p",{children:[e.jsx("strong",{children:"密码:"})," ",a?"*".repeat(a.length):"(未填写)"]})]})]})]}),e.jsxs("div",{children:[e.jsx("h4",{className:"font-semibold text-gray-700 mb-3",children:"操作日志:"}),e.jsx("div",{className:"bg-gray-50 rounded-lg p-3 min-h-[300px]",children:h.length===0?e.jsx("p",{className:"text-gray-500 text-sm",children:"填写表单或点击按钮查看日志"}):e.jsx("div",{className:"space-y-1 max-h-60 overflow-y-auto",children:h.map((t,g)=>e.jsx("div",{className:"text-sm font-mono text-gray-700 break-all",children:t},g))})})]})]}),e.jsx("div",{className:"mt-4 p-3 bg-green-50 rounded border border-green-200",children:e.jsx("p",{className:"text-sm text-green-800",children:"💡 每个 useId() 调用都会生成一个唯一的 ID，确保表单字段的 label 和 input 正确关联。"})})]})},y=({data:s,isActive:c,onSelect:r})=>{const l=n.useId(),a=n.useId();return e.jsxs(e.Fragment,{children:[e.jsx("button",{id:l,role:"tab","aria-selected":c,"aria-controls":a,onClick:r,className:`px-4 py-2 text-sm font-medium rounded-t-lg transition-colors ${c?"bg-blue-500 text-white border-b-2 border-blue-500":"bg-gray-100 text-gray-700 hover:bg-gray-200"}`,children:s.title}),c&&e.jsxs("div",{id:a,role:"tabpanel","aria-labelledby":l,className:"mt-2 p-4 bg-white border border-gray-200 rounded-b-lg",children:[e.jsx("p",{className:"text-gray-700",children:s.content}),e.jsxs("div",{className:"mt-2 text-xs text-gray-500",children:[e.jsxs("p",{children:["Tab ID: ",l]}),e.jsxs("p",{children:["Panel ID: ",a]})]})]})]})},D=()=>{var u;const[s,c]=n.useState(0),[r,l]=n.useState([]),a=[{id:"1",title:"首页",content:"这是首页的内容。useId 为每个标签页生成了唯一的 ID，确保无障碍访问的正确性。"},{id:"2",title:"产品",content:"这是产品页面的内容。每个标签页都有独立的 tab 和 panel ID，支持屏幕阅读器等辅助技术。"},{id:"3",title:"关于",content:"这是关于页面的内容。useId 确保了即使在服务端渲染环境下，ID 也保持一致性。"}],m=n.useId(),x=d=>{const o=new Date().toLocaleTimeString();l(I=>[...I.slice(-5),`${o}: ${d}`])},b=(d,o)=>{c(d),x(`切换到标签页: ${o}`)},p=()=>{l([])},h=()=>{x(`容器组 ID: ${m}`)};return e.jsxs("div",{className:"p-6 bg-white rounded-lg border border-gray-200",children:[e.jsxs("div",{className:"flex items-center justify-between mb-4",children:[e.jsx("h3",{className:"text-lg font-semibold text-gray-800",children:"复杂组件 ID 管理"}),e.jsxs("div",{className:"space-x-2",children:[e.jsx("button",{onClick:h,className:"px-3 py-1 bg-purple-500 text-white rounded text-sm hover:bg-purple-600 transition-colors",children:"显示容器 ID"}),e.jsx("button",{onClick:p,className:"px-3 py-1 bg-gray-500 text-white rounded text-sm hover:bg-gray-600 transition-colors",children:"清空日志"})]})]}),e.jsxs("div",{className:"grid grid-cols-1 lg:grid-cols-2 gap-6",children:[e.jsxs("div",{children:[e.jsxs("div",{role:"tablist","aria-labelledby":m,className:"space-y-2",children:[e.jsxs("h4",{id:m,className:"font-semibold text-gray-700 mb-3",children:["标签页导航 (ID: ",m,")"]}),e.jsx("div",{className:"flex space-x-1 border-b border-gray-200",children:a.map((d,o)=>e.jsx(y,{data:d,isActive:s===o,onSelect:()=>b(o,d.title)},d.id))}),e.jsx("div",{className:"min-h-[200px]",children:a.map((d,o)=>s===o&&e.jsx(y,{data:d,isActive:!0,onSelect:()=>{}},`panel-${d.id}`))})]}),e.jsxs("div",{className:"mt-4 p-3 bg-yellow-50 rounded border border-yellow-200",children:[e.jsx("h4",{className:"font-semibold text-yellow-800 mb-2",children:"当前状态:"}),e.jsxs("div",{className:"text-sm text-yellow-700 space-y-1",children:[e.jsxs("p",{children:[e.jsx("strong",{children:"活动标签页:"})," ",(u=a[s])==null?void 0:u.title]}),e.jsxs("p",{children:[e.jsx("strong",{children:"标签页索引:"})," ",s]}),e.jsxs("p",{children:[e.jsx("strong",{children:"容器组 ID:"})," ",m]})]})]})]}),e.jsxs("div",{children:[e.jsx("h4",{className:"font-semibold text-gray-700 mb-3",children:"操作日志:"}),e.jsx("div",{className:"bg-gray-50 rounded-lg p-3 min-h-[300px]",children:r.length===0?e.jsx("p",{className:"text-gray-500 text-sm",children:"点击标签页查看操作日志"}):e.jsx("div",{className:"space-y-1 max-h-60 overflow-y-auto",children:r.map((d,o)=>e.jsx("div",{className:"text-sm font-mono text-gray-700 break-all",children:d},o))})}),e.jsxs("div",{className:"mt-4 p-3 bg-blue-50 rounded border border-blue-200",children:[e.jsx("h4",{className:"font-semibold text-blue-800 mb-2",children:"无障碍访问特性:"}),e.jsxs("ul",{className:"text-sm text-blue-700 space-y-1",children:[e.jsx("li",{children:"• 每个标签页都有唯一的 ID"}),e.jsx("li",{children:"• 使用 aria-controls 关联标签和面板"}),e.jsx("li",{children:'• 支持 role="tab" 和 role="tabpanel"'}),e.jsx("li",{children:"• 屏幕阅读器友好"})]})]})]})]}),e.jsx("div",{className:"mt-4 p-3 bg-purple-50 rounded border border-purple-200",children:e.jsx("p",{className:"text-sm text-purple-800",children:"💡 useId 为每个组件实例生成唯一 ID，即使在复杂的组件树中也能保证 ID 的唯一性和一致性。"})})]})},f=({item:s,onRemove:c})=>{const r=n.useId(),l=n.useId(),a=n.useId();return e.jsxs("div",{id:r,className:"flex items-center justify-between p-3 bg-white border border-gray-200 rounded-lg",children:[e.jsxs("div",{className:"flex-1",children:[e.jsx("div",{className:"flex items-center space-x-4",children:e.jsxs("div",{children:[e.jsx("label",{id:l,className:"text-sm font-medium text-gray-700",children:s.name}),e.jsx("p",{id:a,className:"text-xs text-gray-500",children:s.value})]})}),e.jsx("div",{className:"text-xs text-gray-400 mt-1",children:e.jsxs("span",{children:["项目 ID: ",r," | 标签 ID: ",l," | 值 ID: ",a]})})]}),e.jsx("button",{onClick:()=>c(s.id),className:"px-2 py-1 bg-red-100 text-red-600 rounded text-sm hover:bg-red-200 transition-colors","aria-describedby":l,children:"删除"})]})},w=()=>{var I;const[s,c]=n.useState([]),[r,l]=n.useState([]),a=n.useId(),m=n.useId(),x=n.useId(),b=i=>{const t=new Date().toLocaleTimeString();l(g=>[...g.slice(-7),`${t}: ${i}`])},p=()=>{const i={id:`item-${Date.now()}`,name:`项目 ${s.length+1}`,value:`值 ${Math.floor(Math.random()*1e3)}`};c(t=>[...t,i]),b(`添加项目: ${i.name}`)},h=i=>{const t=s.find(g=>g.id===i);c(g=>g.filter(v=>v.id!==i)),b(`删除项目: ${t==null?void 0:t.name}`)},u=()=>{c([]),b("清空所有项目")},d=()=>{l([])},o=()=>{b(`组件 ID - 表单: ${a}, 列表: ${m}, 按钮: ${x}`)};return e.jsxs("div",{className:"p-6 bg-white rounded-lg border border-gray-200",children:[e.jsxs("div",{className:"flex items-center justify-between mb-4",children:[e.jsx("h3",{className:"text-lg font-semibold text-gray-800",children:"SSR 兼容性演示"}),e.jsxs("div",{className:"space-x-2",children:[e.jsx("button",{onClick:o,className:"px-3 py-1 bg-indigo-500 text-white rounded text-sm hover:bg-indigo-600 transition-colors",children:"显示组件 ID"}),e.jsx("button",{onClick:d,className:"px-3 py-1 bg-gray-500 text-white rounded text-sm hover:bg-gray-600 transition-colors",children:"清空日志"})]})]}),e.jsxs("div",{className:"grid grid-cols-1 lg:grid-cols-2 gap-6",children:[e.jsxs("div",{children:[e.jsxs("form",{id:a,className:"space-y-4",children:[e.jsxs("div",{className:"flex items-center justify-between",children:[e.jsxs("h4",{className:"font-semibold text-gray-700",children:["动态列表管理 (表单 ID: ",a,")"]}),e.jsxs("div",{className:"space-x-2",children:[e.jsx("button",{id:x,type:"button",onClick:p,className:"px-3 py-2 bg-green-500 text-white rounded text-sm hover:bg-green-600 transition-colors",children:"添加项目"}),e.jsx("button",{type:"button",onClick:u,className:"px-3 py-2 bg-red-500 text-white rounded text-sm hover:bg-red-600 transition-colors",children:"清空列表"})]})]}),e.jsx("div",{id:m,className:"space-y-2 min-h-[200px] max-h-[300px] overflow-y-auto border border-gray-200 rounded-lg p-3",children:s.length===0?e.jsx("p",{className:"text-gray-500 text-sm text-center py-8",children:'点击"添加项目"开始创建列表项'}):s.map(i=>e.jsx(f,{item:i,onRemove:h},i.id))}),e.jsxs("div",{className:"text-xs text-gray-500",children:[e.jsxs("p",{children:["列表 ID: ",m]}),e.jsxs("p",{children:["添加按钮 ID: ",x]})]})]}),e.jsxs("div",{className:"mt-4 p-3 bg-green-50 rounded border border-green-200",children:[e.jsx("h4",{className:"font-semibold text-green-800 mb-2",children:"列表统计:"}),e.jsxs("div",{className:"text-sm text-green-700 space-y-1",children:[e.jsxs("p",{children:[e.jsx("strong",{children:"项目总数:"})," ",s.length]}),e.jsxs("p",{children:[e.jsx("strong",{children:"最新项目:"})," ",((I=s[s.length-1])==null?void 0:I.name)||"无"]})]})]})]}),e.jsxs("div",{children:[e.jsx("h4",{className:"font-semibold text-gray-700 mb-3",children:"操作日志:"}),e.jsx("div",{className:"bg-gray-50 rounded-lg p-3 min-h-[300px]",children:r.length===0?e.jsx("p",{className:"text-gray-500 text-sm",children:"添加或删除项目查看日志"}):e.jsx("div",{className:"space-y-1 max-h-60 overflow-y-auto",children:r.map((i,t)=>e.jsx("div",{className:"text-sm font-mono text-gray-700 break-all",children:i},t))})}),e.jsxs("div",{className:"mt-4 p-3 bg-orange-50 rounded border border-orange-200",children:[e.jsx("h4",{className:"font-semibold text-orange-800 mb-2",children:"SSR 优势:"}),e.jsxs("ul",{className:"text-sm text-orange-700 space-y-1",children:[e.jsx("li",{children:"• 服务端和客户端 ID 保持一致"}),e.jsx("li",{children:"• 避免水合(hydration)不匹配"}),e.jsx("li",{children:"• 支持嵌套组件的 ID 生成"}),e.jsx("li",{children:"• 自动处理 ID 冲突"})]})]})]})]}),e.jsx("div",{className:"mt-4 p-3 bg-indigo-50 rounded border border-indigo-200",children:e.jsx("p",{className:"text-sm text-indigo-800",children:"💡 useId 生成的 ID 在服务端渲染和客户端渲染之间保持一致，避免了水合不匹配的问题。"})})]})},S=`import React, { useState, useId } from 'react';

// 基础用法演示 - 表单字段 ID 生成
const BasicUsageDemo: React.FC = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  
  // 为每个表单字段生成唯一 ID
  const nameId = useId();
  const emailId = useId();
  const passwordId = useId();
  
  const [logs, setLogs] = useState<string[]>([]);

  const addLog = (message: string) => {
    const timestamp = new Date().toLocaleTimeString();
    setLogs(prev => [...prev.slice(-5), \`\${timestamp}: \${message}\`]);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    addLog(\`表单提交 - 姓名: \${name}, 邮箱: \${email}\`);
  };

  const clearLogs = () => {
    setLogs([]);
  };

  const showIds = () => {
    addLog(\`生成的 ID - 姓名: \${nameId}, 邮箱: \${emailId}, 密码: \${passwordId}\`);
  };

  return (
    <div className="p-6 bg-white rounded-lg border border-gray-200">
      <div className="flex items-center justify-between mb-4">
        <h3 className="text-lg font-semibold text-gray-800">表单字段 ID 生成</h3>
        <div className="space-x-2">
          <button
            onClick={showIds}
            className="px-3 py-1 bg-blue-500 text-white rounded text-sm hover:bg-blue-600 transition-colors"
          >
            显示 ID
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
        <div>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label htmlFor={nameId} className="block text-sm font-medium text-gray-700 mb-1">
                姓名:
              </label>
              <input
                id={nameId}
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                placeholder="请输入您的姓名"
              />
              <p className="text-xs text-gray-500 mt-1">ID: {nameId}</p>
            </div>
            
            <div>
              <label htmlFor={emailId} className="block text-sm font-medium text-gray-700 mb-1">
                邮箱:
              </label>
              <input
                id={emailId}
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                placeholder="请输入您的邮箱"
              />
              <p className="text-xs text-gray-500 mt-1">ID: {emailId}</p>
            </div>
            
            <div>
              <label htmlFor={passwordId} className="block text-sm font-medium text-gray-700 mb-1">
                密码:
              </label>
              <input
                id={passwordId}
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                placeholder="请输入密码"
              />
              <p className="text-xs text-gray-500 mt-1">ID: {passwordId}</p>
            </div>
            
            <button
              type="submit"
              className="w-full px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 transition-colors"
            >
              提交表单
            </button>
          </form>
          
          <div className="mt-4 p-3 bg-blue-50 rounded border border-blue-200">
            <h4 className="font-semibold text-blue-800 mb-2">表单数据:</h4>
            <div className="text-sm text-blue-700 space-y-1">
              <p><strong>姓名:</strong> {name || '(未填写)'}</p>
              <p><strong>邮箱:</strong> {email || '(未填写)'}</p>
              <p><strong>密码:</strong> {password ? '*'.repeat(password.length) : '(未填写)'}</p>
            </div>
          </div>
        </div>
        
        <div>
          <h4 className="font-semibold text-gray-700 mb-3">操作日志:</h4>
          <div className="bg-gray-50 rounded-lg p-3 min-h-[300px]">
            {logs.length === 0 ? (
              <p className="text-gray-500 text-sm">填写表单或点击按钮查看日志</p>
            ) : (
              <div className="space-y-1 max-h-60 overflow-y-auto">
                {logs.map((log, index) => (
                  <div key={index} className="text-sm font-mono text-gray-700 break-all">
                    {log}
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
      
      <div className="mt-4 p-3 bg-green-50 rounded border border-green-200">
        <p className="text-sm text-green-800">
          💡 每个 useId() 调用都会生成一个唯一的 ID，确保表单字段的 label 和 input 正确关联。
        </p>
      </div>
    </div>
  );
};

export default BasicUsageDemo;`,C=`import React, { useState, useId } from 'react';

// 标签页数据接口
interface TabData {
  id: string;
  title: string;
  content: string;
}

// 标签页组件
const TabComponent: React.FC<{ data: TabData; isActive: boolean; onSelect: () => void }> = ({ data, isActive, onSelect }) => {
  const tabId = useId();
  const panelId = useId();
  
  return (
    <>
      <button
        id={tabId}
        role="tab"
        aria-selected={isActive}
        aria-controls={panelId}
        onClick={onSelect}
        className={\`px-4 py-2 text-sm font-medium rounded-t-lg transition-colors \${
          isActive
            ? 'bg-blue-500 text-white border-b-2 border-blue-500'
            : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
        }\`}
      >
        {data.title}
      </button>
      {isActive && (
        <div
          id={panelId}
          role="tabpanel"
          aria-labelledby={tabId}
          className="mt-2 p-4 bg-white border border-gray-200 rounded-b-lg"
        >
          <p className="text-gray-700">{data.content}</p>
          <div className="mt-2 text-xs text-gray-500">
            <p>Tab ID: {tabId}</p>
            <p>Panel ID: {panelId}</p>
          </div>
        </div>
      )}
    </>
  );
};

// 复杂组件演示 - 多标签页管理
const ComplexComponentDemo: React.FC = () => {
  const [activeTab, setActiveTab] = useState(0);
  const [logs, setLogs] = useState<string[]>([]);
  
  const tabsData: TabData[] = [
    {
      id: '1',
      title: '首页',
      content: '这是首页的内容。useId 为每个标签页生成了唯一的 ID，确保无障碍访问的正确性。'
    },
    {
      id: '2',
      title: '产品',
      content: '这是产品页面的内容。每个标签页都有独立的 tab 和 panel ID，支持屏幕阅读器等辅助技术。'
    },
    {
      id: '3',
      title: '关于',
      content: '这是关于页面的内容。useId 确保了即使在服务端渲染环境下，ID 也保持一致性。'
    }
  ];
  
  const containerGroupId = useId();
  
  const addLog = (message: string) => {
    const timestamp = new Date().toLocaleTimeString();
    setLogs(prev => [...prev.slice(-5), \`\${timestamp}: \${message}\`]);
  };
  
  const handleTabSelect = (index: number, title: string) => {
    setActiveTab(index);
    addLog(\`切换到标签页: \${title}\`);
  };
  
  const clearLogs = () => {
    setLogs([]);
  };
  
  const showContainerInfo = () => {
    addLog(\`容器组 ID: \${containerGroupId}\`);
  };
  
  return (
    <div className="p-6 bg-white rounded-lg border border-gray-200">
      <div className="flex items-center justify-between mb-4">
        <h3 className="text-lg font-semibold text-gray-800">复杂组件 ID 管理</h3>
        <div className="space-x-2">
          <button
            onClick={showContainerInfo}
            className="px-3 py-1 bg-purple-500 text-white rounded text-sm hover:bg-purple-600 transition-colors"
          >
            显示容器 ID
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
        <div>
          <div
            role="tablist"
            aria-labelledby={containerGroupId}
            className="space-y-2"
          >
            <h4 id={containerGroupId} className="font-semibold text-gray-700 mb-3">
              标签页导航 (ID: {containerGroupId})
            </h4>
            
            <div className="flex space-x-1 border-b border-gray-200">
              {tabsData.map((tab, index) => (
                <TabComponent
                  key={tab.id}
                  data={tab}
                  isActive={activeTab === index}
                  onSelect={() => handleTabSelect(index, tab.title)}
                />
              ))}
            </div>
            
            <div className="min-h-[200px]">
              {tabsData.map((tab, index) => (
                activeTab === index && (
                  <TabComponent
                    key={\`panel-\${tab.id}\`}
                    data={tab}
                    isActive={true}
                    onSelect={() => {}}
                  />
                )
              ))}
            </div>
          </div>
          
          <div className="mt-4 p-3 bg-yellow-50 rounded border border-yellow-200">
            <h4 className="font-semibold text-yellow-800 mb-2">当前状态:</h4>
            <div className="text-sm text-yellow-700 space-y-1">
              <p><strong>活动标签页:</strong> {tabsData[activeTab]?.title}</p>
              <p><strong>标签页索引:</strong> {activeTab}</p>
              <p><strong>容器组 ID:</strong> {containerGroupId}</p>
            </div>
          </div>
        </div>
        
        <div>
          <h4 className="font-semibold text-gray-700 mb-3">操作日志:</h4>
          <div className="bg-gray-50 rounded-lg p-3 min-h-[300px]">
            {logs.length === 0 ? (
              <p className="text-gray-500 text-sm">点击标签页查看操作日志</p>
            ) : (
              <div className="space-y-1 max-h-60 overflow-y-auto">
                {logs.map((log, index) => (
                  <div key={index} className="text-sm font-mono text-gray-700 break-all">
                    {log}
                  </div>
                ))}
              </div>
            )}
          </div>
          
          <div className="mt-4 p-3 bg-blue-50 rounded border border-blue-200">
            <h4 className="font-semibold text-blue-800 mb-2">无障碍访问特性:</h4>
            <ul className="text-sm text-blue-700 space-y-1">
              <li>• 每个标签页都有唯一的 ID</li>
              <li>• 使用 aria-controls 关联标签和面板</li>
              <li>• 支持 role="tab" 和 role="tabpanel"</li>
              <li>• 屏幕阅读器友好</li>
            </ul>
          </div>
        </div>
      </div>
      
      <div className="mt-4 p-3 bg-purple-50 rounded border border-purple-200">
        <p className="text-sm text-purple-800">
          💡 useId 为每个组件实例生成唯一 ID，即使在复杂的组件树中也能保证 ID 的唯一性和一致性。
        </p>
      </div>
    </div>
  );
};

export default ComplexComponentDemo;`,k=`import React, { useState, useId } from 'react';

// 列表项组件
const ListItem: React.FC<{
  item: { id: string; name: string; value: string };
  onRemove: (id: string) => void;
}> = ({ item, onRemove }) => {
  const itemId = useId();
  const labelId = useId();
  const valueId = useId();
  
  return (
    <div
      id={itemId}
      className="flex items-center justify-between p-3 bg-white border border-gray-200 rounded-lg"
    >
      <div className="flex-1">
        <div className="flex items-center space-x-4">
          <div>
            <label id={labelId} className="text-sm font-medium text-gray-700">
              {item.name}
            </label>
            <p id={valueId} className="text-xs text-gray-500">
              {item.value}
            </p>
          </div>
        </div>
        <div className="text-xs text-gray-400 mt-1">
          <span>项目 ID: {itemId} | 标签 ID: {labelId} | 值 ID: {valueId}</span>
        </div>
      </div>
      <button
        onClick={() => onRemove(item.id)}
        className="px-2 py-1 bg-red-100 text-red-600 rounded text-sm hover:bg-red-200 transition-colors"
        aria-describedby={labelId}
      >
        删除
      </button>
    </div>
  );
};

// 服务端渲染兼容性演示
const SSRCompatibilityDemo: React.FC = () => {
  const [items, setItems] = useState<Array<{ id: string; name: string; value: string }>>([]);
  const [logs, setLogs] = useState<string[]>([]);
  
  // 为组件生成稳定的 ID
  const formId = useId();
  const listId = useId();
  const addButtonId = useId();
  
  const addLog = (message: string) => {
    const timestamp = new Date().toLocaleTimeString();
    setLogs(prev => [...prev.slice(-7), \`\${timestamp}: \${message}\`]);
  };
  
  const addItem = () => {
    const newItem = {
      id: \`item-\${Date.now()}\`,
      name: \`项目 \${items.length + 1}\`,
      value: \`值 \${Math.floor(Math.random() * 1000)}\`
    };
    setItems(prev => [...prev, newItem]);
    addLog(\`添加项目: \${newItem.name}\`);
  };
  
  const removeItem = (id: string) => {
    const item = items.find(item => item.id === id);
    setItems(prev => prev.filter(item => item.id !== id));
    addLog(\`删除项目: \${item?.name}\`);
  };
  
  const clearItems = () => {
    setItems([]);
    addLog('清空所有项目');
  };
  
  const clearLogs = () => {
    setLogs([]);
  };
  
  const showComponentIds = () => {
    addLog(\`组件 ID - 表单: \${formId}, 列表: \${listId}, 按钮: \${addButtonId}\`);
  };
  
  return (
    <div className="p-6 bg-white rounded-lg border border-gray-200">
      <div className="flex items-center justify-between mb-4">
        <h3 className="text-lg font-semibold text-gray-800">SSR 兼容性演示</h3>
        <div className="space-x-2">
          <button
            onClick={showComponentIds}
            className="px-3 py-1 bg-indigo-500 text-white rounded text-sm hover:bg-indigo-600 transition-colors"
          >
            显示组件 ID
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
        <div>
          <form id={formId} className="space-y-4">
            <div className="flex items-center justify-between">
              <h4 className="font-semibold text-gray-700">
                动态列表管理 (表单 ID: {formId})
              </h4>
              <div className="space-x-2">
                <button
                  id={addButtonId}
                  type="button"
                  onClick={addItem}
                  className="px-3 py-2 bg-green-500 text-white rounded text-sm hover:bg-green-600 transition-colors"
                >
                  添加项目
                </button>
                <button
                  type="button"
                  onClick={clearItems}
                  className="px-3 py-2 bg-red-500 text-white rounded text-sm hover:bg-red-600 transition-colors"
                >
                  清空列表
                </button>
              </div>
            </div>
            
            <div
              id={listId}
              className="space-y-2 min-h-[200px] max-h-[300px] overflow-y-auto border border-gray-200 rounded-lg p-3"
            >
              {items.length === 0 ? (
                <p className="text-gray-500 text-sm text-center py-8">
                  点击"添加项目"开始创建列表项
                </p>
              ) : (
                items.map((item) => {
                  // 每个列表项都有自己的 useId
                  return <ListItem key={item.id} item={item} onRemove={removeItem} />;
                })
              )}
            </div>
            
            <div className="text-xs text-gray-500">
              <p>列表 ID: {listId}</p>
              <p>添加按钮 ID: {addButtonId}</p>
            </div>
          </form>
          
          <div className="mt-4 p-3 bg-green-50 rounded border border-green-200">
            <h4 className="font-semibold text-green-800 mb-2">列表统计:</h4>
            <div className="text-sm text-green-700 space-y-1">
              <p><strong>项目总数:</strong> {items.length}</p>
              <p><strong>最新项目:</strong> {items[items.length - 1]?.name || '无'}</p>
            </div>
          </div>
        </div>
        
        <div>
          <h4 className="font-semibold text-gray-700 mb-3">操作日志:</h4>
          <div className="bg-gray-50 rounded-lg p-3 min-h-[300px]">
            {logs.length === 0 ? (
              <p className="text-gray-500 text-sm">添加或删除项目查看日志</p>
            ) : (
              <div className="space-y-1 max-h-60 overflow-y-auto">
                {logs.map((log, index) => (
                  <div key={index} className="text-sm font-mono text-gray-700 break-all">
                    {log}
                  </div>
                ))}
              </div>
            )}
          </div>
          
          <div className="mt-4 p-3 bg-orange-50 rounded border border-orange-200">
            <h4 className="font-semibold text-orange-800 mb-2">SSR 优势:</h4>
            <ul className="text-sm text-orange-700 space-y-1">
              <li>• 服务端和客户端 ID 保持一致</li>
              <li>• 避免水合(hydration)不匹配</li>
              <li>• 支持嵌套组件的 ID 生成</li>
              <li>• 自动处理 ID 冲突</li>
            </ul>
          </div>
        </div>
      </div>
      
      <div className="mt-4 p-3 bg-indigo-50 rounded border border-indigo-200">
        <p className="text-sm text-indigo-800">
          💡 useId 生成的 ID 在服务端渲染和客户端渲染之间保持一致，避免了水合不匹配的问题。
        </p>
      </div>
    </div>
  );
};

export default SSRCompatibilityDemo;`,R=()=>e.jsx(N,{title:"useId",description:"React 18 中新增的 Hook，用于生成在服务端和客户端之间保持一致的唯一 ID。它主要用于无障碍访问属性，解决了服务端渲染中 ID 不一致的问题。",overview:e.jsx("div",{className:"space-y-4",children:e.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-6",children:[e.jsxs("div",{className:"bg-blue-50 p-4 rounded-lg border border-blue-200",children:[e.jsx("h3",{className:"font-semibold text-blue-800 mb-2",children:"🎯 核心概念"}),e.jsxs("ul",{className:"text-sm text-blue-700 space-y-1",children:[e.jsx("li",{children:"• 生成唯一且稳定的 ID"}),e.jsx("li",{children:"• 服务端和客户端 ID 一致"}),e.jsx("li",{children:"• 主要用于无障碍访问"}),e.jsx("li",{children:"• 避免水合不匹配问题"})]})]}),e.jsxs("div",{className:"bg-green-50 p-4 rounded-lg border border-green-200",children:[e.jsx("h3",{className:"font-semibold text-green-800 mb-2",children:"✨ 主要优势"}),e.jsxs("ul",{className:"text-sm text-green-700 space-y-1",children:[e.jsx("li",{children:"• SSR 友好的 ID 生成"}),e.jsx("li",{children:"• 自动处理 ID 冲突"}),e.jsx("li",{children:"• 支持嵌套组件"}),e.jsx("li",{children:"• 无需手动管理 ID"})]})]}),e.jsxs("div",{className:"bg-yellow-50 p-4 rounded-lg border border-yellow-200",children:[e.jsx("h3",{className:"font-semibold text-yellow-800 mb-2",children:"🎪 适用场景"}),e.jsxs("ul",{className:"text-sm text-yellow-700 space-y-1",children:[e.jsx("li",{children:"• 表单字段的 label 关联"}),e.jsx("li",{children:"• 无障碍访问属性设置"}),e.jsx("li",{children:"• 复杂组件的 ID 管理"}),e.jsx("li",{children:"• 服务端渲染应用"})]})]}),e.jsxs("div",{className:"bg-red-50 p-4 rounded-lg border border-red-200",children:[e.jsx("h3",{className:"font-semibold text-red-800 mb-2",children:"⚠️ 注意事项"}),e.jsxs("ul",{className:"text-sm text-red-700 space-y-1",children:[e.jsx("li",{children:"• 不要用于 key 属性"}),e.jsx("li",{children:"• 避免在条件渲染中使用"}),e.jsx("li",{children:"• 不要用于样式选择器"}),e.jsx("li",{children:"• 仅在 React 18+ 中可用"})]})]})]})}),examples:[{title:"表单字段 ID 生成",component:e.jsx(j,{}),description:"演示如何使用 useId 为表单字段生成唯一 ID，确保 label 和 input 的正确关联",observationPoints:["查看每个表单字段下方显示的唯一 ID","点击 label 标签，观察对应的 input 是否获得焦点",'点击"显示 ID"按钮查看所有生成的 ID',"填写表单并提交，观察数据收集过程","注意每次组件重新渲染时 ID 保持不变"],keyPoints:["每个 useId() 调用生成唯一的 ID","ID 在组件生命周期内保持稳定","正确关联 label 和 input 元素","支持无障碍访问标准"],commonTraps:["在循环中使用 useId 作为 key","在条件渲染中调用 useId","手动拼接或修改生成的 ID"],solutions:["为每个需要 ID 的元素单独调用 useId","在组件顶层调用 useId，避免条件调用","直接使用生成的 ID，不要修改"],codeExample:{code:S,highlights:[10,20,30],title:"表单字段 ID 生成源码"}},{title:"复杂组件 ID 管理",component:e.jsx(D,{}),description:"演示在复杂组件中使用 useId 管理多个元素的 ID，支持无障碍访问",observationPoints:["点击不同的标签页，观察内容切换","查看每个标签页显示的 Tab ID 和 Panel ID",'点击"显示容器 ID"查看容器的唯一标识',"使用屏幕阅读器测试无障碍访问功能","观察 aria-controls 和 aria-labelledby 的正确关联"],keyPoints:["每个组件实例都有独立的 ID","支持复杂的无障碍访问结构","ID 在组件树中保持唯一性","正确实现 ARIA 属性关联"],commonTraps:["在不同组件间共享 ID","忘记设置 ARIA 属性","ID 命名不规范"],solutions:["为每个需要 ID 的组件调用 useId","正确设置 aria-controls 和 aria-labelledby","遵循无障碍访问最佳实践"],codeExample:{code:C,highlights:[12,22,32],title:"复杂组件 ID 管理源码"}},{title:"SSR 兼容性演示",component:e.jsx(w,{}),description:"演示 useId 在服务端渲染环境下的兼容性，确保 ID 的一致性",observationPoints:['点击"添加项目"创建动态列表项',"观察每个列表项显示的多个 ID",'点击"显示组件 ID"查看组件级别的 ID',"删除项目，观察 ID 的变化情况","注意 ID 在页面刷新后保持一致性"],keyPoints:["服务端和客户端 ID 保持一致","避免水合不匹配问题","支持动态组件的 ID 生成","自动处理嵌套组件的 ID 冲突"],commonTraps:["在服务端渲染中使用随机 ID","忽略水合不匹配警告","在客户端动态修改 ID"],solutions:["使用 useId 替代随机 ID 生成","确保服务端和客户端渲染逻辑一致","避免在客户端修改生成的 ID"],codeExample:{code:k,highlights:[15,25,35],title:"SSR 兼容性演示源码"}}],tutorial:{concepts:["useId 的基本语法和返回值","服务端渲染中的 ID 一致性问题","无障碍访问中的 ID 使用规范","与传统 ID 生成方式的区别","在复杂组件中的 ID 管理策略"],steps:["从 React 中导入 useId Hook","在组件中调用 useId() 生成唯一 ID","将生成的 ID 用于 HTML 元素的 id 属性","设置相关的 ARIA 属性进行关联","确保在组件顶层调用，避免条件调用","测试服务端渲染的兼容性"],tips:["每个需要唯一 ID 的元素都应该单独调用 useId","不要将 useId 生成的 ID 用作 React 的 key 属性","避免在循环或条件语句中调用 useId","生成的 ID 不需要人类可读，专注于唯一性","在服务端渲染应用中优先使用 useId 而不是随机 ID"]},interview:{questions:[{question:"useId 的主要作用是什么？",answer:"useId 用于生成在服务端和客户端之间保持一致的唯一 ID。它主要解决了服务端渲染中 ID 不一致导致的水合不匹配问题，特别适用于无障碍访问属性的设置。"},{question:"为什么不能用 useId 生成的 ID 作为 key？",answer:"useId 生成的 ID 在组件的整个生命周期内保持稳定，但 React 的 key 需要在列表项之间保持唯一且稳定的标识。useId 无法保证在不同组件实例间的唯一性，可能导致 key 冲突。"},{question:"useId 如何解决服务端渲染的问题？",answer:"在传统方法中，服务端和客户端可能生成不同的随机 ID，导致水合不匹配。useId 使用确定性算法，基于组件在树中的位置生成 ID，确保服务端和客户端生成相同的 ID。"},{question:"什么时候应该使用 useId？",answer:"主要用于：1) 表单字段的 label 和 input 关联；2) 无障碍访问属性设置；3) 复杂组件的内部元素标识；4) 服务端渲染应用中需要稳定 ID 的场景。避免用于样式选择器或业务逻辑标识。"}],keyPoints:["生成在 SSR 中一致的唯一 ID","主要用于无障碍访问属性","不能用作 React key 属性","避免在条件渲染中调用","仅在 React 18+ 中可用"]},bestPractices:{dos:["在组件顶层调用 useId","为每个需要 ID 的元素单独调用","用于 label、input 的关联","设置 ARIA 属性时使用","在服务端渲染应用中使用","保持 ID 的原始形式不变"],donts:["不要用作 React key 属性","不要在循环中调用 useId","不要在条件渲染中调用","不要修改生成的 ID","不要用于 CSS 选择器","不要用于业务逻辑标识"],patterns:["表单关联模式：label 和 input 的 ID 关联","无障碍访问模式：ARIA 属性的 ID 设置","组件标识模式：复杂组件的内部元素标识","SSR 兼容模式：服务端渲染友好的 ID 生成"]}});export{R as default};
