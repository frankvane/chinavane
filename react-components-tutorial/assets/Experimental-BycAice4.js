var N=Object.defineProperty;var v=(n,r,i)=>r in n?N(n,r,{enumerable:!0,configurable:!0,writable:!0,value:i}):n[r]=i;var m=(n,r,i)=>v(n,typeof r!="symbol"?r+"":r,i);import{r as o,j as e,R as g}from"./index-H7t66yxh.js";import{C as j}from"./ComponentTemplate-bNJaV0ol.js";const S=n=>{const r=g.useRef(0);return r.current+=1,r.current},I=()=>{const n=["技术","设计","产品","营销","运营","数据"],r=["文章","视频","课程","工具","模板"];return Array.from({length:1e3},(i,t)=>({id:t+1,title:`${n[t%n.length]}${r[t%r.length]} ${t+1}`,content:`这是关于${n[t%n.length]}的${r[t%r.length]}内容，包含了丰富的知识和实践经验。`,category:n[t%n.length],type:r[t%r.length],views:Math.floor(Math.random()*1e4),likes:Math.floor(Math.random()*1e3)}))},E=o.memo(()=>{const n=S(),[r,i]=o.useState(""),[t,c]=o.useTransition(),s=o.useDeferredValue(r),u=o.useMemo(()=>I(),[]),l=o.useMemo(()=>s.trim()?u.filter(a=>a.title.toLowerCase().includes(s.toLowerCase())||a.content.toLowerCase().includes(s.toLowerCase())||a.category.toLowerCase().includes(s.toLowerCase())):[],[u,s]),p=a=>{const f=a.target.value;i(f),c(()=>{})};return e.jsx("div",{className:"space-y-4",children:e.jsxs("div",{className:"p-4 bg-yellow-50 border border-yellow-200 rounded",children:[e.jsx("h4",{className:"font-semibold text-yellow-800 mb-3",children:"并发特性综合应用"}),e.jsxs("div",{className:"space-y-3",children:[e.jsxs("div",{className:"relative",children:[e.jsx("input",{type:"text",value:r,onChange:p,placeholder:"搜索项目...",className:"w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-yellow-500 focus:border-transparent"}),t&&e.jsx("div",{className:"absolute right-2 top-2",children:e.jsx("div",{className:"animate-spin h-5 w-5 border-2 border-yellow-600 border-t-transparent rounded-full"})})]}),e.jsxs("div",{className:"flex flex-wrap gap-4 text-sm text-gray-600",children:[e.jsxs("span",{children:["搜索词: ",e.jsxs("span",{className:"font-medium text-gray-800",children:['"',r,'"']})]}),e.jsxs("span",{children:["延迟搜索词: ",e.jsxs("span",{className:"font-medium text-gray-800",children:['"',s,'"']})]}),e.jsxs("span",{children:["结果数量: ",e.jsx("span",{className:"font-medium text-yellow-600",children:l.length})]}),e.jsxs("span",{children:["状态: ",e.jsx("span",{className:`font-medium ${t?"text-yellow-600":"text-green-600"}`,children:t?"搜索中...":"空闲"})]})]}),e.jsx("div",{className:"max-h-80 overflow-y-auto border border-gray-200 rounded",children:l.length>0?e.jsxs("div",{className:"divide-y divide-gray-200",children:[l.slice(0,20).map(a=>e.jsx("div",{className:"p-3 hover:bg-gray-50 transition-colors",children:e.jsx("div",{className:"flex justify-between items-start",children:e.jsxs("div",{className:"flex-1",children:[e.jsx("h5",{className:"font-medium text-gray-900",children:a.title}),e.jsx("p",{className:"text-sm text-gray-600 mt-1",children:a.content}),e.jsxs("div",{className:"flex items-center gap-4 mt-2 text-xs text-gray-500",children:[e.jsx("span",{className:"bg-gray-100 px-2 py-1 rounded",children:a.category}),e.jsx("span",{className:"bg-blue-100 text-blue-700 px-2 py-1 rounded",children:a.type}),e.jsxs("span",{children:["👀 ",a.views]}),e.jsxs("span",{children:["❤️ ",a.likes]})]})]})})},a.id)),l.length>20&&e.jsxs("div",{className:"p-3 text-center text-sm text-gray-500 bg-gray-50",children:["还有 ",l.length-20," 个结果..."]})]}):s?e.jsxs("div",{className:"p-8 text-center text-gray-500",children:[e.jsx("div",{className:"text-4xl mb-2",children:"🔍"}),e.jsx("p",{children:"没有找到匹配的结果"}),e.jsx("p",{className:"text-sm mt-1",children:"尝试使用其他关键词搜索"})]}):e.jsxs("div",{className:"p-8 text-center text-gray-500",children:[e.jsx("div",{className:"text-4xl mb-2",children:"💡"}),e.jsx("p",{children:"请输入搜索关键词"}),e.jsx("p",{className:"text-sm mt-1",children:"支持搜索标题、内容和分类"})]})}),e.jsxs("div",{className:"bg-white p-3 rounded border",children:[e.jsx("h5",{className:"font-medium text-gray-800 mb-2",children:"性能监控"}),e.jsxs("div",{className:"grid grid-cols-2 md:grid-cols-4 gap-4 text-sm",children:[e.jsxs("div",{children:[e.jsx("span",{className:"text-gray-600",children:"渲染次数"}),e.jsx("p",{className:"font-semibold text-lg text-blue-600",children:n})]}),e.jsxs("div",{children:[e.jsx("span",{className:"text-gray-600",children:"数据总量"}),e.jsx("p",{className:"font-semibold text-lg text-green-600",children:u.length})]}),e.jsxs("div",{children:[e.jsx("span",{className:"text-gray-600",children:"搜索状态"}),e.jsx("p",{className:`font-semibold text-lg ${t?"text-yellow-600":"text-gray-600"}`,children:t?"处理中":"就绪"})]}),e.jsxs("div",{children:[e.jsx("span",{className:"text-gray-600",children:"同步状态"}),e.jsx("p",{className:`font-semibold text-lg ${r===s?"text-green-600":"text-orange-600"}`,children:r===s?"同步":"延迟"})]})]})]}),e.jsxs("div",{className:"text-xs text-gray-500 space-y-1",children:[e.jsx("p",{children:"⚡ useTransition 确保用户输入不会被搜索操作阻塞"}),e.jsx("p",{children:"🔄 useDeferredValue 延迟搜索词更新，避免频繁搜索"}),e.jsx("p",{children:"🎯 isPending 状态提供搜索进度反馈"}),e.jsx("p",{children:"🚀 并发特性让大数据量搜索保持界面响应性"})]})]})]})})}),w=`import React, { memo, useState, useMemo, useTransition, useDeferredValue } from "react";

// 自定义Hook：跟踪组件渲染次数
const useRenderCount = (componentName: string) => {
  const renderCount = React.useRef(0);
  renderCount.current += 1;
  return renderCount.current;
};

// 生成大量数据用于搜索演示
const generateSearchData = () => {
  const categories = ['技术', '设计', '产品', '营销', '运营', '数据'];
  const types = ['文章', '视频', '课程', '工具', '模板'];
  
  return Array.from({ length: 1000 }, (_, i) => ({
    id: i + 1,
    title: \`\${categories[i % categories.length]}\${types[i % types.length]} \${i + 1}\`,
    content: \`这是关于\${categories[i % categories.length]}的\${types[i % types.length]}内容，包含了丰富的知识和实践经验。\`,
    category: categories[i % categories.length],
    type: types[i % types.length],
    views: Math.floor(Math.random() * 10000),
    likes: Math.floor(Math.random() * 1000),
  }));
};

// 并发特性综合应用示例组件
const ConcurrentFeaturesExample: React.FC = memo(() => {
  const renderCount = useRenderCount("ConcurrentFeaturesExample");
  const [searchTerm, setSearchTerm] = useState('');
  const [isPending, startTransition] = useTransition();
  
  // 使用 useDeferredValue 延迟搜索词更新
  const deferredSearchTerm = useDeferredValue(searchTerm);
  
  // 生成搜索数据
  const searchData = useMemo(() => generateSearchData(), []);
  
  // 根据延迟的搜索词过滤结果
  const results = useMemo(() => {
    if (!deferredSearchTerm.trim()) return [];
    
    return searchData.filter(item => 
      item.title.toLowerCase().includes(deferredSearchTerm.toLowerCase()) ||
      item.content.toLowerCase().includes(deferredSearchTerm.toLowerCase()) ||
      item.category.toLowerCase().includes(deferredSearchTerm.toLowerCase())
    );
  }, [searchData, deferredSearchTerm]);

  // 处理搜索输入变化
  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    // 立即更新输入框显示（紧急更新）
    setSearchTerm(value);
    
    // 将搜索结果更新标记为非紧急
    startTransition(() => {
      // 这里的逻辑会被延迟执行，不会阻塞用户输入
      // 实际的搜索逻辑通过 useDeferredValue 处理
    });
  };

  return (
    <div className="space-y-4">
      <div className="p-4 bg-yellow-50 border border-yellow-200 rounded">
        <h4 className="font-semibold text-yellow-800 mb-3">并发特性综合应用</h4>
        <div className="space-y-3">
          {/* 搜索输入框 */}
          <div className="relative">
            <input
              type="text"
              value={searchTerm}
              onChange={handleSearchChange}
              placeholder="搜索项目..."
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-yellow-500 focus:border-transparent"
            />
            {isPending && (
              <div className="absolute right-2 top-2">
                <div className="animate-spin h-5 w-5 border-2 border-yellow-600 border-t-transparent rounded-full"></div>
              </div>
            )}
          </div>

          {/* 搜索状态信息 */}
          <div className="flex flex-wrap gap-4 text-sm text-gray-600">
            <span>搜索词: <span className="font-medium text-gray-800">"{searchTerm}"</span></span>
            <span>延迟搜索词: <span className="font-medium text-gray-800">"{deferredSearchTerm}"</span></span>
            <span>结果数量: <span className="font-medium text-yellow-600">{results.length}</span></span>
            <span>状态: <span className={\`font-medium \${isPending ? 'text-yellow-600' : 'text-green-600'}\`}>
              {isPending ? '搜索中...' : '空闲'}
            </span></span>
          </div>

          {/* 搜索结果 */}
          <div className="max-h-80 overflow-y-auto border border-gray-200 rounded">
            {results.length > 0 ? (
              <div className="divide-y divide-gray-200">
                {results.slice(0, 20).map((item) => (
                  <div key={item.id} className="p-3 hover:bg-gray-50 transition-colors">
                    <div className="flex justify-between items-start">
                      <div className="flex-1">
                        <h5 className="font-medium text-gray-900">{item.title}</h5>
                        <p className="text-sm text-gray-600 mt-1">{item.content}</p>
                        <div className="flex items-center gap-4 mt-2 text-xs text-gray-500">
                          <span className="bg-gray-100 px-2 py-1 rounded">{item.category}</span>
                          <span className="bg-blue-100 text-blue-700 px-2 py-1 rounded">{item.type}</span>
                          <span>👀 {item.views}</span>
                          <span>❤️ {item.likes}</span>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
                {results.length > 20 && (
                  <div className="p-3 text-center text-sm text-gray-500 bg-gray-50">
                    还有 {results.length - 20} 个结果...
                  </div>
                )}
              </div>
            ) : deferredSearchTerm ? (
              <div className="p-8 text-center text-gray-500">
                <div className="text-4xl mb-2">🔍</div>
                <p>没有找到匹配的结果</p>
                <p className="text-sm mt-1">尝试使用其他关键词搜索</p>
              </div>
            ) : (
              <div className="p-8 text-center text-gray-500">
                <div className="text-4xl mb-2">💡</div>
                <p>请输入搜索关键词</p>
                <p className="text-sm mt-1">支持搜索标题、内容和分类</p>
              </div>
            )}
          </div>

          {/* 性能信息 */}
          <div className="bg-white p-3 rounded border">
            <h5 className="font-medium text-gray-800 mb-2">性能监控</h5>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-sm">
              <div>
                <span className="text-gray-600">渲染次数</span>
                <p className="font-semibold text-lg text-blue-600">{renderCount}</p>
              </div>
              <div>
                <span className="text-gray-600">数据总量</span>
                <p className="font-semibold text-lg text-green-600">{searchData.length}</p>
              </div>
              <div>
                <span className="text-gray-600">搜索状态</span>
                <p className={\`font-semibold text-lg \${isPending ? 'text-yellow-600' : 'text-gray-600'}\`}>
                  {isPending ? '处理中' : '就绪'}
                </p>
              </div>
              <div>
                <span className="text-gray-600">同步状态</span>
                <p className={\`font-semibold text-lg \${
                  searchTerm === deferredSearchTerm ? 'text-green-600' : 'text-orange-600'
                }\`}>
                  {searchTerm === deferredSearchTerm ? '同步' : '延迟'}
                </p>
              </div>
            </div>
          </div>

          <div className="text-xs text-gray-500 space-y-1">
            <p>⚡ useTransition 确保用户输入不会被搜索操作阻塞</p>
            <p>🔄 useDeferredValue 延迟搜索词更新，避免频繁搜索</p>
            <p>🎯 isPending 状态提供搜索进度反馈</p>
            <p>🚀 并发特性让大数据量搜索保持界面响应性</p>
          </div>
        </div>
      </div>
    </div>
  );
});

export default ConcurrentFeaturesExample;`,C=n=>{const r=g.useRef(0);return r.current+=1,r.current},k=o.memo(()=>{const n=C(),r=o.useId(),i=o.useId(),t=o.useId(),c=o.useId(),[s,u]=o.useState({name:"",email:"",newsletter:!1,notifications:!1}),[l,p]=o.useState({}),a=()=>{const d={};return s.name.trim()||(d.name="姓名不能为空"),s.email.trim()?/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(s.email)||(d.email="请输入有效的邮箱地址"):d.email="邮箱不能为空",p(d),Object.keys(d).length===0},f=d=>{d.preventDefault(),a()&&alert(`表单提交成功！
姓名: ${s.name}
邮箱: ${s.email}
订阅设置: ${s.newsletter?"是":"否"}
通知设置: ${s.notifications?"是":"否"}`)},h=(d,y)=>{u(b=>({...b,[d]:y})),l[d]&&p(b=>({...b,[d]:""}))};return e.jsx("div",{className:"space-y-4",children:e.jsxs("div",{className:"p-4 bg-blue-50 border border-blue-200 rounded",children:[e.jsx("h4",{className:"font-semibold text-blue-800 mb-3",children:"useId Hook 基础用法"}),e.jsxs("form",{onSubmit:f,className:"space-y-4",children:[e.jsxs("div",{className:"space-y-3",children:[e.jsxs("div",{children:[e.jsxs("label",{htmlFor:r,className:"block text-sm font-medium text-gray-700",children:["姓名 ",e.jsx("span",{className:"text-red-500",children:"*"})]}),e.jsx("input",{id:r,type:"text",value:s.name,onChange:d=>h("name",d.target.value),className:`mt-1 block w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 ${l.name?"border-red-500":"border-gray-300"}`,placeholder:"请输入姓名","aria-invalid":!!l.name,"aria-describedby":l.name?`${r}-error`:void 0}),l.name&&e.jsx("p",{id:`${r}-error`,className:"mt-1 text-sm text-red-600",children:l.name})]}),e.jsxs("div",{children:[e.jsxs("label",{htmlFor:i,className:"block text-sm font-medium text-gray-700",children:["邮箱 ",e.jsx("span",{className:"text-red-500",children:"*"})]}),e.jsx("input",{id:i,type:"email",value:s.email,onChange:d=>h("email",d.target.value),className:`mt-1 block w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 ${l.email?"border-red-500":"border-gray-300"}`,placeholder:"请输入邮箱","aria-describedby":`${t} ${l.email?`${i}-error`:""}`,"aria-invalid":!!l.email}),e.jsx("p",{id:t,className:"mt-1 text-sm text-gray-500",children:"我们会保护您的邮箱隐私"}),l.email&&e.jsx("p",{id:`${i}-error`,className:"mt-1 text-sm text-red-600",children:l.email})]})]}),e.jsxs("fieldset",{className:"border border-gray-300 rounded p-3",children:[e.jsx("legend",{className:"px-2 text-sm font-medium text-gray-700",children:"偏好设置"}),e.jsxs("div",{className:"space-y-2",role:"group","aria-labelledby":c,children:[e.jsxs("div",{className:"flex items-center",children:[e.jsx("input",{id:`${c}-newsletter`,type:"checkbox",checked:s.newsletter,onChange:d=>h("newsletter",d.target.checked),className:"h-4 w-4 text-blue-600 border-gray-300 rounded focus:ring-2 focus:ring-blue-500"}),e.jsx("label",{htmlFor:`${c}-newsletter`,className:"ml-2 text-sm text-gray-700 cursor-pointer",children:"订阅新闻通讯"})]}),e.jsxs("div",{className:"flex items-center",children:[e.jsx("input",{id:`${c}-notifications`,type:"checkbox",checked:s.notifications,onChange:d=>h("notifications",d.target.checked),className:"h-4 w-4 text-blue-600 border-gray-300 rounded focus:ring-2 focus:ring-blue-500"}),e.jsx("label",{htmlFor:`${c}-notifications`,className:"ml-2 text-sm text-gray-700 cursor-pointer",children:"接收通知"})]})]})]}),e.jsxs("div",{className:"flex gap-3",children:[e.jsx("button",{type:"submit",className:"px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-colors",children:"提交表单"}),e.jsx("button",{type:"button",onClick:()=>{u({name:"",email:"",newsletter:!1,notifications:!1}),p({})},className:"px-4 py-2 bg-gray-300 text-gray-700 rounded-md hover:bg-gray-400 focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-offset-2 transition-colors",children:"重置表单"})]}),e.jsxs("div",{className:"bg-gray-50 p-3 rounded text-sm",children:[e.jsx("h5",{className:"font-medium text-gray-800 mb-2",children:"生成的 ID 信息"}),e.jsxs("div",{className:"space-y-1 text-gray-600",children:[e.jsxs("p",{children:["姓名输入框 ID: ",e.jsx("code",{className:"bg-gray-200 px-1 rounded",children:r})]}),e.jsxs("p",{children:["邮箱输入框 ID: ",e.jsx("code",{className:"bg-gray-200 px-1 rounded",children:i})]}),e.jsxs("p",{children:["描述文本 ID: ",e.jsx("code",{className:"bg-gray-200 px-1 rounded",children:t})]}),e.jsxs("p",{children:["分组 ID 前缀: ",e.jsx("code",{className:"bg-gray-200 px-1 rounded",children:c})]}),e.jsxs("p",{children:["渲染次数: ",e.jsx("span",{className:"font-medium",children:n})]})]})]}),e.jsxs("div",{className:"bg-green-50 p-3 rounded text-sm",children:[e.jsx("h5",{className:"font-medium text-green-800 mb-2",children:"当前表单数据"}),e.jsxs("div",{className:"space-y-1 text-green-700",children:[e.jsxs("p",{children:["姓名: ",e.jsx("span",{className:"font-medium",children:s.name||"(未填写)"})]}),e.jsxs("p",{children:["邮箱: ",e.jsx("span",{className:"font-medium",children:s.email||"(未填写)"})]}),e.jsxs("p",{children:["订阅新闻通讯: ",e.jsx("span",{className:"font-medium",children:s.newsletter?"是":"否"})]}),e.jsxs("p",{children:["接收通知: ",e.jsx("span",{className:"font-medium",children:s.notifications?"是":"否"})]})]})]}),e.jsxs("div",{className:"text-xs text-gray-500 space-y-1",children:[e.jsx("p",{children:"💡 每个 useId 调用都会生成唯一的标识符"}),e.jsx("p",{children:"🔒 ID 在服务端和客户端渲染时保持一致"}),e.jsx("p",{children:"♿ 适用于表单元素和无障碍功能的关联"}),e.jsx("p",{children:"🎯 表单具有完整的验证和交互功能"})]})]})]})})}),D=`import React, { memo, useId, useState } from "react";\r
\r
// 自定义Hook：跟踪组件渲染次数\r
const useRenderCount = (componentName: string) => {\r
  const renderCount = React.useRef(0);\r
  renderCount.current += 1;\r
  return renderCount.current;\r
};\r
\r
// useId Hook 示例组件\r
const UseIdExample: React.FC = memo(() => {\r
  const renderCount = useRenderCount("UseIdExample");\r
  const nameId = useId();\r
  const emailId = useId();\r
  const descriptionId = useId();\r
  const groupId = useId();\r
\r
  // 添加状态管理\r
  const [formData, setFormData] = useState({\r
    name: '',\r
    email: '',\r
    newsletter: false,\r
    notifications: false\r
  });\r
\r
  const [errors, setErrors] = useState<{[key: string]: string}>({});\r
\r
  // 表单验证\r
  const validateForm = () => {\r
    const newErrors: {[key: string]: string} = {};\r
    \r
    if (!formData.name.trim()) {\r
      newErrors.name = '姓名不能为空';\r
    }\r
    \r
    if (!formData.email.trim()) {\r
      newErrors.email = '邮箱不能为空';\r
    } else if (!/^[^\\s@]+@[^\\s@]+\\.[^\\s@]+$/.test(formData.email)) {\r
      newErrors.email = '请输入有效的邮箱地址';\r
    }\r
    \r
    setErrors(newErrors);\r
    return Object.keys(newErrors).length === 0;\r
  };\r
\r
  // 处理表单提交\r
  const handleSubmit = (e: React.FormEvent) => {\r
    e.preventDefault();\r
    if (validateForm()) {\r
      alert(\`表单提交成功！\\n姓名: \${formData.name}\\n邮箱: \${formData.email}\\n订阅设置: \${formData.newsletter ? '是' : '否'}\\n通知设置: \${formData.notifications ? '是' : '否'}\`);\r
    }\r
  };\r
\r
  // 处理输入变化\r
  const handleInputChange = (field: string, value: string | boolean) => {\r
    setFormData(prev => ({ ...prev, [field]: value }));\r
    // 清除对应字段的错误\r
    if (errors[field]) {\r
      setErrors(prev => ({ ...prev, [field]: '' }));\r
    }\r
  };\r
\r
  return (\r
    <div className="space-y-4">\r
      <div className="p-4 bg-blue-50 border border-blue-200 rounded">\r
        <h4 className="font-semibold text-blue-800 mb-3">useId Hook 基础用法</h4>\r
        <form onSubmit={handleSubmit} className="space-y-4">\r
          {/* 表单示例 */}\r
          <div className="space-y-3">\r
            <div>\r
              <label htmlFor={nameId} className="block text-sm font-medium text-gray-700">\r
                姓名 <span className="text-red-500">*</span>\r
              </label>\r
              <input\r
                id={nameId}\r
                type="text"\r
                value={formData.name}\r
                onChange={(e) => handleInputChange('name', e.target.value)}\r
                className={\`mt-1 block w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 \${\r
                  errors.name ? 'border-red-500' : 'border-gray-300'\r
                }\`}\r
                placeholder="请输入姓名"\r
                aria-invalid={!!errors.name}\r
                aria-describedby={errors.name ? \`\${nameId}-error\` : undefined}\r
              />\r
              {errors.name && (\r
                <p id={\`\${nameId}-error\`} className="mt-1 text-sm text-red-600">\r
                  {errors.name}\r
                </p>\r
              )}\r
            </div>\r
            <div>\r
              <label htmlFor={emailId} className="block text-sm font-medium text-gray-700">\r
                邮箱 <span className="text-red-500">*</span>\r
              </label>\r
              <input\r
                id={emailId}\r
                type="email"\r
                value={formData.email}\r
                onChange={(e) => handleInputChange('email', e.target.value)}\r
                className={\`mt-1 block w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 \${\r
                  errors.email ? 'border-red-500' : 'border-gray-300'\r
                }\`}\r
                placeholder="请输入邮箱"\r
                aria-describedby={\`\${descriptionId} \${errors.email ? \`\${emailId}-error\` : ''}\`}\r
                aria-invalid={!!errors.email}\r
              />\r
              <p id={descriptionId} className="mt-1 text-sm text-gray-500">\r
                我们会保护您的邮箱隐私\r
              </p>\r
              {errors.email && (\r
                <p id={\`\${emailId}-error\`} className="mt-1 text-sm text-red-600">\r
                  {errors.email}\r
                </p>\r
              )}\r
            </div>\r
          </div>\r
\r
          {/* 无障碍功能示例 */}\r
          <fieldset className="border border-gray-300 rounded p-3">\r
            <legend className="px-2 text-sm font-medium text-gray-700">偏好设置</legend>\r
            <div className="space-y-2" role="group" aria-labelledby={groupId}>\r
              <div className="flex items-center">\r
                <input\r
                  id={\`\${groupId}-newsletter\`}\r
                  type="checkbox"\r
                  checked={formData.newsletter}\r
                  onChange={(e) => handleInputChange('newsletter', e.target.checked)}\r
                  className="h-4 w-4 text-blue-600 border-gray-300 rounded focus:ring-2 focus:ring-blue-500"\r
                />\r
                <label htmlFor={\`\${groupId}-newsletter\`} className="ml-2 text-sm text-gray-700 cursor-pointer">\r
                  订阅新闻通讯\r
                </label>\r
              </div>\r
              <div className="flex items-center">\r
                <input\r
                  id={\`\${groupId}-notifications\`}\r
                  type="checkbox"\r
                  checked={formData.notifications}\r
                  onChange={(e) => handleInputChange('notifications', e.target.checked)}\r
                  className="h-4 w-4 text-blue-600 border-gray-300 rounded focus:ring-2 focus:ring-blue-500"\r
                />\r
                <label htmlFor={\`\${groupId}-notifications\`} className="ml-2 text-sm text-gray-700 cursor-pointer">\r
                  接收通知\r
                </label>\r
              </div>\r
            </div>\r
          </fieldset>\r
\r
          {/* 提交按钮 */}\r
          <div className="flex gap-3">\r
            <button\r
              type="submit"\r
              className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-colors"\r
            >\r
              提交表单\r
            </button>\r
            <button\r
              type="button"\r
              onClick={() => {\r
                setFormData({ name: '', email: '', newsletter: false, notifications: false });\r
                setErrors({});\r
              }}\r
              className="px-4 py-2 bg-gray-300 text-gray-700 rounded-md hover:bg-gray-400 focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-offset-2 transition-colors"\r
            >\r
              重置表单\r
            </button>\r
          </div>\r
\r
          {/* ID 信息展示 */}\r
          <div className="bg-gray-50 p-3 rounded text-sm">\r
            <h5 className="font-medium text-gray-800 mb-2">生成的 ID 信息</h5>\r
            <div className="space-y-1 text-gray-600">\r
              <p>姓名输入框 ID: <code className="bg-gray-200 px-1 rounded">{nameId}</code></p>\r
              <p>邮箱输入框 ID: <code className="bg-gray-200 px-1 rounded">{emailId}</code></p>\r
              <p>描述文本 ID: <code className="bg-gray-200 px-1 rounded">{descriptionId}</code></p>\r
              <p>分组 ID 前缀: <code className="bg-gray-200 px-1 rounded">{groupId}</code></p>\r
              <p>渲染次数: <span className="font-medium">{renderCount}</span></p>\r
            </div>\r
          </div>\r
\r
          {/* 当前表单数据 */}\r
          <div className="bg-green-50 p-3 rounded text-sm">\r
            <h5 className="font-medium text-green-800 mb-2">当前表单数据</h5>\r
            <div className="space-y-1 text-green-700">\r
              <p>姓名: <span className="font-medium">{formData.name || '(未填写)'}</span></p>\r
              <p>邮箱: <span className="font-medium">{formData.email || '(未填写)'}</span></p>\r
              <p>订阅新闻通讯: <span className="font-medium">{formData.newsletter ? '是' : '否'}</span></p>\r
              <p>接收通知: <span className="font-medium">{formData.notifications ? '是' : '否'}</span></p>\r
            </div>\r
          </div>\r
\r
          <div className="text-xs text-gray-500 space-y-1">\r
            <p>💡 每个 useId 调用都会生成唯一的标识符</p>\r
            <p>🔒 ID 在服务端和客户端渲染时保持一致</p>\r
            <p>♿ 适用于表单元素和无障碍功能的关联</p>\r
            <p>🎯 表单具有完整的验证和交互功能</p>\r
          </div>\r
        </form>\r
      </div>\r
    </div>\r
  );\r
});\r
\r
export default UseIdExample;`,R=n=>{const r=g.useRef(0);return r.current+=1,r.current},$=o.memo(()=>{const n=R(),[r,i]=o.useState("light"),[t,c]=o.useState(16),s=o.useRef(null);o.useInsertionEffect(()=>{s.current||(s.current=document.createElement("style"),s.current.id="dynamic-insertion-styles",document.head.appendChild(s.current));const a=`
      .insertion-demo-container {
        background-color: ${r==="dark"?"#1f2937":"#f9fafb"};
        color: ${r==="dark"?"#f9fafb":"#1f2937"};
        font-size: ${t}px;
        transition: all 0.3s ease;
        padding: 1rem;
        border-radius: 0.5rem;
        border: 2px solid ${r==="dark"?"#374151":"#e5e7eb"};
      }
      
      .insertion-demo-title {
        color: ${r==="dark"?"#60a5fa":"#2563eb"};
        font-weight: 600;
        margin-bottom: 0.75rem;
      }
      
      .insertion-demo-text {
        line-height: 1.6;
        margin-bottom: 0.5rem;
      }
      
      .insertion-demo-highlight {
        background-color: ${r==="dark"?"#fbbf24":"#fef3c7"};
        color: ${r==="dark"?"#1f2937":"#92400e"};
        padding: 0.25rem 0.5rem;
        border-radius: 0.25rem;
        font-weight: 500;
      }
    `;return s.current.textContent=a,()=>{s.current&&s.current.parentNode&&(s.current.parentNode.removeChild(s.current),s.current=null)}},[r,t]);const u=()=>{i(a=>a==="light"?"dark":"light")},l=()=>{c(a=>Math.min(a+2,24))},p=()=>{c(a=>Math.max(a-2,12))};return e.jsx("div",{className:"space-y-4",children:e.jsxs("div",{className:"p-4 bg-purple-50 border border-purple-200 rounded",children:[e.jsx("h4",{className:"font-semibold text-purple-800 mb-3",children:"useInsertionEffect Hook"}),e.jsxs("div",{className:"space-y-4",children:[e.jsxs("div",{className:"bg-white p-3 rounded border",children:[e.jsx("h5",{className:"font-medium text-gray-800 mb-3",children:"样式控制面板"}),e.jsxs("div",{className:"flex flex-wrap gap-2",children:[e.jsxs("button",{onClick:u,className:`px-3 py-2 rounded transition-colors ${r==="dark"?"bg-gray-800 text-white hover:bg-gray-700":"bg-gray-200 text-gray-800 hover:bg-gray-300"}`,children:["切换主题 (",r==="dark"?"深色":"浅色",")"]}),e.jsx("button",{onClick:p,disabled:t<=12,className:"px-3 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 disabled:opacity-50 disabled:cursor-not-allowed transition-colors",children:"字体 -"}),e.jsxs("span",{className:"px-3 py-2 bg-gray-100 rounded text-sm",children:[t,"px"]}),e.jsx("button",{onClick:l,disabled:t>=24,className:"px-3 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 disabled:opacity-50 disabled:cursor-not-allowed transition-colors",children:"字体 +"})]})]}),e.jsxs("div",{className:"insertion-demo-container",children:[e.jsx("h5",{className:"insertion-demo-title",children:"动态样式演示区域"}),e.jsxs("p",{className:"insertion-demo-text",children:["这个区域的样式是通过 ",e.jsx("span",{className:"insertion-demo-highlight",children:"useInsertionEffect"})," 动态插入的。"]}),e.jsx("p",{className:"insertion-demo-text",children:"当你切换主题或调整字体大小时，样式会在 DOM 变更前同步更新，避免样式闪烁。"}),e.jsxs("p",{className:"insertion-demo-text",children:["当前主题: ",e.jsx("span",{className:"insertion-demo-highlight",children:r==="dark"?"深色模式":"浅色模式"})]}),e.jsxs("p",{className:"insertion-demo-text",children:["当前字体大小: ",e.jsxs("span",{className:"insertion-demo-highlight",children:[t,"px"]})]})]}),e.jsxs("div",{className:"bg-white p-3 rounded border",children:[e.jsx("h5",{className:"font-medium text-gray-800 mb-2",children:"技术信息"}),e.jsxs("div",{className:"space-y-2 text-sm text-gray-600",children:[e.jsxs("p",{children:["样式元素 ID: ",e.jsx("code",{className:"bg-gray-200 px-1 rounded",children:"dynamic-insertion-styles"})]}),e.jsxs("p",{children:["插入位置: ",e.jsx("code",{className:"bg-gray-200 px-1 rounded",children:"document.head"})]}),e.jsxs("p",{children:["渲染次数: ",e.jsx("span",{className:"font-medium",children:n})]}),e.jsxs("p",{children:["执行时机: ",e.jsx("span",{className:"text-purple-600 font-medium",children:"DOM 变更前同步执行"})]})]})]}),e.jsxs("div",{className:"text-xs text-gray-500 space-y-1",children:[e.jsx("p",{children:"⚡ 样式在 DOM 变更前同步插入，避免闪烁"}),e.jsx("p",{children:"🎨 主要用于 CSS-in-JS 库的样式注入"}),e.jsx("p",{children:"⚠️ 会阻塞渲染，应谨慎使用"}),e.jsx("p",{children:"🔄 执行顺序：useInsertionEffect → useLayoutEffect → useEffect"})]})]})]})})}),T=`import React, { memo, useInsertionEffect, useState, useRef } from "react";

// 自定义Hook：跟踪组件渲染次数
const useRenderCount = (componentName: string) => {
  const renderCount = React.useRef(0);
  renderCount.current += 1;
  return renderCount.current;
};

// useInsertionEffect Hook 示例组件
const UseInsertionEffectExample: React.FC = memo(() => {
  const renderCount = useRenderCount("UseInsertionEffectExample");
  const [theme, setTheme] = useState<'light' | 'dark'>('light');
  const [fontSize, setFontSize] = useState(16);
  const styleElementRef = useRef<HTMLStyleElement | null>(null);

  // 使用 useInsertionEffect 动态插入样式
  useInsertionEffect(() => {
    // 创建或获取样式元素
    if (!styleElementRef.current) {
      styleElementRef.current = document.createElement('style');
      styleElementRef.current.id = 'dynamic-insertion-styles';
      document.head.appendChild(styleElementRef.current);
    }

    // 生成动态样式
    const styles = \`
      .insertion-demo-container {
        background-color: \${theme === 'dark' ? '#1f2937' : '#f9fafb'};
        color: \${theme === 'dark' ? '#f9fafb' : '#1f2937'};
        font-size: \${fontSize}px;
        transition: all 0.3s ease;
        padding: 1rem;
        border-radius: 0.5rem;
        border: 2px solid \${theme === 'dark' ? '#374151' : '#e5e7eb'};
      }
      
      .insertion-demo-title {
        color: \${theme === 'dark' ? '#60a5fa' : '#2563eb'};
        font-weight: 600;
        margin-bottom: 0.75rem;
      }
      
      .insertion-demo-text {
        line-height: 1.6;
        margin-bottom: 0.5rem;
      }
      
      .insertion-demo-highlight {
        background-color: \${theme === 'dark' ? '#fbbf24' : '#fef3c7'};
        color: \${theme === 'dark' ? '#1f2937' : '#92400e'};
        padding: 0.25rem 0.5rem;
        border-radius: 0.25rem;
        font-weight: 500;
      }
    \`;

    // 插入样式
    styleElementRef.current.textContent = styles;

    // 清理函数
    return () => {
      if (styleElementRef.current && styleElementRef.current.parentNode) {
        styleElementRef.current.parentNode.removeChild(styleElementRef.current);
        styleElementRef.current = null;
      }
    };
  }, [theme, fontSize]);

  const toggleTheme = () => {
    setTheme(prev => prev === 'light' ? 'dark' : 'light');
  };

  const increaseFontSize = () => {
    setFontSize(prev => Math.min(prev + 2, 24));
  };

  const decreaseFontSize = () => {
    setFontSize(prev => Math.max(prev - 2, 12));
  };

  return (
    <div className="space-y-4">
      <div className="p-4 bg-purple-50 border border-purple-200 rounded">
        <h4 className="font-semibold text-purple-800 mb-3">useInsertionEffect Hook</h4>
        <div className="space-y-4">
          {/* 控制面板 */}
          <div className="bg-white p-3 rounded border">
            <h5 className="font-medium text-gray-800 mb-3">样式控制面板</h5>
            <div className="flex flex-wrap gap-2">
              <button
                onClick={toggleTheme}
                className={\`px-3 py-2 rounded transition-colors \${
                  theme === 'dark'
                    ? 'bg-gray-800 text-white hover:bg-gray-700'
                    : 'bg-gray-200 text-gray-800 hover:bg-gray-300'
                }\`}
              >
                切换主题 ({theme === 'dark' ? '深色' : '浅色'})
              </button>
              <button
                onClick={decreaseFontSize}
                disabled={fontSize <= 12}
                className="px-3 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
              >
                字体 -
              </button>
              <span className="px-3 py-2 bg-gray-100 rounded text-sm">
                {fontSize}px
              </span>
              <button
                onClick={increaseFontSize}
                disabled={fontSize >= 24}
                className="px-3 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
              >
                字体 +
              </button>
            </div>
          </div>

          {/* 动态样式演示区域 */}
          <div className="insertion-demo-container">
            <h5 className="insertion-demo-title">动态样式演示区域</h5>
            <p className="insertion-demo-text">
              这个区域的样式是通过 <span className="insertion-demo-highlight">useInsertionEffect</span> 动态插入的。
            </p>
            <p className="insertion-demo-text">
              当你切换主题或调整字体大小时，样式会在 DOM 变更前同步更新，避免样式闪烁。
            </p>
            <p className="insertion-demo-text">
              当前主题: <span className="insertion-demo-highlight">{theme === 'dark' ? '深色模式' : '浅色模式'}</span>
            </p>
            <p className="insertion-demo-text">
              当前字体大小: <span className="insertion-demo-highlight">{fontSize}px</span>
            </p>
          </div>

          {/* 技术信息 */}
          <div className="bg-white p-3 rounded border">
            <h5 className="font-medium text-gray-800 mb-2">技术信息</h5>
            <div className="space-y-2 text-sm text-gray-600">
              <p>样式元素 ID: <code className="bg-gray-200 px-1 rounded">dynamic-insertion-styles</code></p>
              <p>插入位置: <code className="bg-gray-200 px-1 rounded">document.head</code></p>
              <p>渲染次数: <span className="font-medium">{renderCount}</span></p>
              <p>执行时机: <span className="text-purple-600 font-medium">DOM 变更前同步执行</span></p>
            </div>
          </div>

          <div className="text-xs text-gray-500 space-y-1">
            <p>⚡ 样式在 DOM 变更前同步插入，避免闪烁</p>
            <p>🎨 主要用于 CSS-in-JS 库的样式注入</p>
            <p>⚠️ 会阻塞渲染，应谨慎使用</p>
            <p>🔄 执行顺序：useInsertionEffect → useLayoutEffect → useEffect</p>
          </div>
        </div>
      </div>
    </div>
  );
});

export default UseInsertionEffectExample;`,F=n=>{const r=g.useRef(0);return r.current+=1,r.current};class H{constructor(){m(this,"listeners",new Set);m(this,"data",{count:0,timestamp:Date.now(),users:[]});m(this,"subscribe",r=>(this.listeners.add(r),()=>this.listeners.delete(r)));m(this,"getSnapshot",()=>this.data);m(this,"getServerSnapshot",()=>({count:0,timestamp:0,users:[]}));m(this,"increment",()=>{this.data={...this.data,count:this.data.count+1,timestamp:Date.now()},this.listeners.forEach(r=>r())});m(this,"addUser",r=>{this.data={...this.data,users:[...this.data.users,r],timestamp:Date.now()},this.listeners.forEach(i=>i())});m(this,"reset",()=>{this.data={count:0,timestamp:Date.now(),users:[]},this.listeners.forEach(r=>r())})}}const x=new H,M=o.memo(()=>{const n=F(),r=o.useSyncExternalStore(x.subscribe,x.getSnapshot,x.getServerSnapshot),i=o.useCallback(()=>{x.increment()},[]),t=o.useCallback(()=>{const s={id:Date.now(),name:`用户${r.users.length+1}`,email:`user${r.users.length+1}@example.com`};x.addUser(s)},[r.users.length]),c=o.useCallback(()=>{x.reset()},[]);return e.jsx("div",{className:"space-y-4",children:e.jsxs("div",{className:"p-4 bg-green-50 border border-green-200 rounded",children:[e.jsx("h4",{className:"font-semibold text-green-800 mb-3",children:"useSyncExternalStore Hook"}),e.jsxs("div",{className:"space-y-4",children:[e.jsxs("div",{className:"bg-white p-3 rounded border",children:[e.jsx("h5",{className:"font-medium text-gray-800 mb-2",children:"外部存储状态"}),e.jsxs("div",{className:"space-y-2 text-sm",children:[e.jsxs("p",{children:["计数: ",e.jsx("span",{className:"font-semibold text-green-600",children:r.count})]}),e.jsxs("p",{children:["时间戳: ",e.jsx("span",{className:"font-mono text-gray-600",children:new Date(r.timestamp).toLocaleTimeString()})]}),e.jsxs("p",{children:["用户数量: ",e.jsx("span",{className:"font-semibold text-blue-600",children:r.users.length})]})]})]}),e.jsxs("div",{className:"flex flex-wrap gap-2",children:[e.jsx("button",{onClick:i,className:"px-3 py-2 bg-green-600 text-white rounded hover:bg-green-700 transition-colors",children:"增加计数"}),e.jsx("button",{onClick:t,className:"px-3 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition-colors",children:"添加用户"}),e.jsx("button",{onClick:c,className:"px-3 py-2 bg-red-600 text-white rounded hover:bg-red-700 transition-colors",children:"重置数据"})]}),r.users.length>0&&e.jsxs("div",{className:"bg-white p-3 rounded border",children:[e.jsx("h5",{className:"font-medium text-gray-800 mb-2",children:"用户列表"}),e.jsx("div",{className:"space-y-2 max-h-32 overflow-y-auto",children:r.users.map(s=>e.jsxs("div",{className:"flex justify-between items-center p-2 bg-gray-50 rounded",children:[e.jsxs("div",{children:[e.jsx("p",{className:"font-medium text-sm",children:s.name}),e.jsx("p",{className:"text-xs text-gray-600",children:s.email})]}),e.jsxs("span",{className:"text-xs text-gray-500",children:["ID: ",s.id]})]},s.id))})]}),e.jsxs("div",{className:"bg-gray-50 p-3 rounded text-sm",children:[e.jsx("h5",{className:"font-medium text-gray-800 mb-2",children:"组件信息"}),e.jsxs("div",{className:"space-y-1 text-gray-600",children:[e.jsxs("p",{children:["渲染次数: ",e.jsx("span",{className:"font-medium",children:n})]}),e.jsxs("p",{children:["订阅状态: ",e.jsx("span",{className:"text-green-600 font-medium",children:"已连接"})]})]})]}),e.jsxs("div",{className:"text-xs text-gray-500 space-y-1",children:[e.jsx("p",{children:"🔄 外部存储状态变化时组件会自动重新渲染"}),e.jsx("p",{children:"⚡ 与 React 并发特性兼容，避免状态撕裂"}),e.jsx("p",{children:"🛡️ 自动处理订阅和取消订阅"})]})]})]})})}),P=`import React, { memo, useCallback, useSyncExternalStore } from "react";\r
\r
// 自定义Hook：跟踪组件渲染次数\r
const useRenderCount = (componentName: string) => {\r
  const renderCount = React.useRef(0);\r
  renderCount.current += 1;\r
  return renderCount.current;\r
};\r
\r
// 外部存储类\r
class ExternalStore {\r
  private listeners = new Set<() => void>();\r
  private data = {\r
    count: 0,\r
    timestamp: Date.now(),\r
    users: [] as { id: number; name: string; email: string }[],\r
  };\r
\r
  subscribe = (listener: () => void) => {\r
    this.listeners.add(listener);\r
    return () => this.listeners.delete(listener);\r
  };\r
\r
  getSnapshot = () => {\r
    return this.data;\r
  };\r
\r
  getServerSnapshot = () => {\r
    return { count: 0, timestamp: 0, users: [] };\r
  };\r
\r
  increment = () => {\r
    this.data = {\r
      ...this.data,\r
      count: this.data.count + 1,\r
      timestamp: Date.now(),\r
    };\r
    this.listeners.forEach((listener) => listener());\r
  };\r
\r
  addUser = (user: { id: number; name: string; email: string }) => {\r
    this.data = {\r
      ...this.data,\r
      users: [...this.data.users, user],\r
      timestamp: Date.now(),\r
    };\r
    this.listeners.forEach((listener) => listener());\r
  };\r
\r
  reset = () => {\r
    this.data = {\r
      count: 0,\r
      timestamp: Date.now(),\r
      users: [],\r
    };\r
    this.listeners.forEach((listener) => listener());\r
  };\r
}\r
\r
const externalStore = new ExternalStore();\r
\r
// useSyncExternalStore Hook 示例组件\r
const UseSyncExternalStoreExample: React.FC = memo(() => {\r
  const renderCount = useRenderCount("UseSyncExternalStoreExample");\r
  \r
  // 订阅外部存储\r
  const storeData = useSyncExternalStore(\r
    externalStore.subscribe,\r
    externalStore.getSnapshot,\r
    externalStore.getServerSnapshot\r
  );\r
\r
  const handleIncrement = useCallback(() => {\r
    externalStore.increment();\r
  }, []);\r
\r
  const handleAddUser = useCallback(() => {\r
    const newUser = {\r
      id: Date.now(),\r
      name: \`用户\${storeData.users.length + 1}\`,\r
      email: \`user\${storeData.users.length + 1}@example.com\`,\r
    };\r
    externalStore.addUser(newUser);\r
  }, [storeData.users.length]);\r
\r
  const handleReset = useCallback(() => {\r
    externalStore.reset();\r
  }, []);\r
\r
  return (\r
    <div className="space-y-4">\r
      <div className="p-4 bg-green-50 border border-green-200 rounded">\r
        <h4 className="font-semibold text-green-800 mb-3">useSyncExternalStore Hook</h4>\r
        <div className="space-y-4">\r
          {/* 存储状态展示 */}\r
          <div className="bg-white p-3 rounded border">\r
            <h5 className="font-medium text-gray-800 mb-2">外部存储状态</h5>\r
            <div className="space-y-2 text-sm">\r
              <p>计数: <span className="font-semibold text-green-600">{storeData.count}</span></p>\r
              <p>时间戳: <span className="font-mono text-gray-600">{new Date(storeData.timestamp).toLocaleTimeString()}</span></p>\r
              <p>用户数量: <span className="font-semibold text-blue-600">{storeData.users.length}</span></p>\r
            </div>\r
          </div>\r
\r
          {/* 操作按钮 */}\r
          <div className="flex flex-wrap gap-2">\r
            <button\r
              onClick={handleIncrement}\r
              className="px-3 py-2 bg-green-600 text-white rounded hover:bg-green-700 transition-colors"\r
            >\r
              增加计数\r
            </button>\r
            <button\r
              onClick={handleAddUser}\r
              className="px-3 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition-colors"\r
            >\r
              添加用户\r
            </button>\r
            <button\r
              onClick={handleReset}\r
              className="px-3 py-2 bg-red-600 text-white rounded hover:bg-red-700 transition-colors"\r
            >\r
              重置数据\r
            </button>\r
          </div>\r
\r
          {/* 用户列表 */}\r
          {storeData.users.length > 0 && (\r
            <div className="bg-white p-3 rounded border">\r
              <h5 className="font-medium text-gray-800 mb-2">用户列表</h5>\r
              <div className="space-y-2 max-h-32 overflow-y-auto">\r
                {storeData.users.map((user) => (\r
                  <div key={user.id} className="flex justify-between items-center p-2 bg-gray-50 rounded">\r
                    <div>\r
                      <p className="font-medium text-sm">{user.name}</p>\r
                      <p className="text-xs text-gray-600">{user.email}</p>\r
                    </div>\r
                    <span className="text-xs text-gray-500">ID: {user.id}</span>\r
                  </div>\r
                ))}\r
              </div>\r
            </div>\r
          )}\r
\r
          {/* 渲染信息 */}\r
          <div className="bg-gray-50 p-3 rounded text-sm">\r
            <h5 className="font-medium text-gray-800 mb-2">组件信息</h5>\r
            <div className="space-y-1 text-gray-600">\r
              <p>渲染次数: <span className="font-medium">{renderCount}</span></p>\r
              <p>订阅状态: <span className="text-green-600 font-medium">已连接</span></p>\r
            </div>\r
          </div>\r
\r
          <div className="text-xs text-gray-500 space-y-1">\r
            <p>🔄 外部存储状态变化时组件会自动重新渲染</p>\r
            <p>⚡ 与 React 并发特性兼容，避免状态撕裂</p>\r
            <p>🛡️ 自动处理订阅和取消订阅</p>\r
          </div>\r
        </div>\r
      </div>\r
    </div>\r
  );\r
});\r
\r
export default UseSyncExternalStoreExample;`,U={title:"React 实验性特性 (Experimental Features)",subtitle:"Experimental Features Advanced Hooks",description:"React 18+ 的实验性特性和 Hook，包括 ID 生成、外部存储同步、样式插入和并发特性等高级功能。",overview:[{title:"核心概念",items:["实验性特性是为了解决特定问题而设计的新 API","这些特性在 React 18 中已经稳定，提供更强大的工具","主要包括 useId、useSyncExternalStore、useInsertionEffect 等","与并发特性结合使用可以获得更好的性能表现"]},{title:"主要特性",items:["useId：生成稳定的唯一标识符，解决 SSR 水合问题","useSyncExternalStore：安全地订阅外部数据源，兼容并发渲染","useInsertionEffect：在 DOM 变更前同步插入样式，避免闪烁","useTransition：标记非紧急更新，保持界面响应性","useDeferredValue：延迟更新值，优化性能表现"]},{title:"适用场景",items:["表单元素和无障碍功能需要唯一 ID","与外部状态管理库（Redux、Zustand）集成","CSS-in-JS 库和动态样式管理","大数据量的搜索、过滤和排序操作","复杂用户界面的性能优化"]},{title:"重要提示",items:["这些特性在 React 18+ 中已经稳定可用","需要理解并发渲染的工作原理","注意浏览器兼容性和性能影响","遵循 React 官方的最佳实践指南"]}],tutorial:{concepts:["useId：生成稳定的唯一标识符，解决SSR水合问题","useSyncExternalStore：安全订阅外部数据源，兼容并发渲染","useInsertionEffect：在DOM变更前同步插入样式，避免闪烁","实验性特性：为特定问题设计的新API，在React 18中已稳定","并发兼容性：这些Hook与React并发特性完美配合"],steps:["了解每个实验性Hook的具体用途和适用场景","使用useId为表单元素和无障碍功能生成唯一标识","通过useSyncExternalStore集成外部状态管理库","在CSS-in-JS场景中合理使用useInsertionEffect","结合并发特性优化应用性能和用户体验","测试和验证实验性特性的使用效果"],tips:["useId主要用于无障碍属性，不要用作React key","useSyncExternalStore的subscribe函数要保持稳定引用","useInsertionEffect会阻塞渲染，应谨慎使用","实验性特性在React 18+中已经稳定可用","结合具体业务场景选择合适的Hook使用"]},interview:{questions:[{question:"useId Hook的主要用途是什么？为什么不能用作key？",answer:"useId主要用于生成唯一标识符，解决SSR水合问题，确保服务端和客户端渲染的ID一致。不能用作key是因为key需要在列表项之间保持稳定的关系，而useId每次调用都生成新的ID，会导致不必要的重新渲染。"},{question:"useSyncExternalStore解决了什么问题？",answer:"useSyncExternalStore解决了在React并发渲染中订阅外部数据源的安全性问题。它避免了状态撕裂现象，确保组件在并发渲染过程中能够安全地订阅和使用外部状态，主要用于与Redux、Zustand等状态管理库的集成。"},{question:"useInsertionEffect与useLayoutEffect有什么区别？",answer:"useInsertionEffect在DOM变更前同步执行，主要用于插入CSS样式，避免样式闪烁。useLayoutEffect在DOM变更后、浏览器绘制前执行，用于读取DOM布局。执行顺序是：useInsertionEffect → DOM变更 → useLayoutEffect → 浏览器绘制 → useEffect。"},{question:"什么时候应该使用这些实验性Hook？",answer:"useId用于需要唯一标识符的表单和无障碍场景；useSyncExternalStore用于集成外部状态管理库；useInsertionEffect用于CSS-in-JS库的样式注入。这些Hook都是为特定问题设计的，不应该滥用，要根据具体需求选择。"}],keyPoints:["实验性Hook在React 18中已经稳定，可以安全使用","每个Hook都有特定的使用场景，不要混用或滥用","useId解决SSR水合问题，useSyncExternalStore解决并发安全问题","useInsertionEffect主要为CSS-in-JS库设计，普通开发很少使用","这些Hook与并发特性配合使用能发挥最大效果"]},bestPractices:{dos:["使用useId为表单元素生成htmlFor和id属性","用useSyncExternalStore集成外部状态管理库","在useInsertionEffect中只插入关键CSS样式","确保useSyncExternalStore的subscribe函数稳定","为SSR场景提供合适的getServerSnapshot","结合并发特性优化用户体验"],donts:["不要将useId生成的值用作React key","不要在useInsertionEffect中执行非样式相关操作","不要让subscribe函数每次渲染都创建新实例","不要过度使用useInsertionEffect影响性能","不要忽略getServerSnapshot的实现"],patterns:["表单ID模式：使用useId为label和input建立关联","外部状态集成模式：useSyncExternalStore + 状态管理库","CSS-in-JS模式：useInsertionEffect + 动态样式注入","SSR兼容模式：提供服务端和客户端一致的数据快照","并发安全模式：结合并发特性使用实验性Hook"]}},J=()=>e.jsx(j,{...U,examples:[{title:"useId Hook 基础用法",component:e.jsx(k,{}),description:"生成唯一 ID，确保服务端和客户端渲染的一致性，解决 SSR 水合问题。",observationPoints:["每次调用 useId 都会生成不同的唯一标识符","ID 在服务端和客户端渲染时保持一致","适用于表单元素的 htmlFor 和 id 属性绑定","解决了组件复用时的 ID 冲突问题"],keyPoints:["useId 生成的 ID 在整个应用中是唯一的","每个组件实例的 useId 调用都会产生不同的 ID","ID 格式通常为 :r0:、:r1: 等形式","不应该用作 React key 属性"],commonTraps:["将 useId 生成的 ID 用作列表项的 key","在条件渲染中使用 useId 导致 ID 不稳定","手动拼接 useId 结果可能导致冲突"],solutions:["仅在需要唯一标识符的场景使用 useId","确保 useId 调用在组件的顶层","使用数据的唯一属性作为 key，而不是 useId"],importantTips:["useId 主要用于无障碍属性和表单元素关联","生成的 ID 在服务端渲染和客户端水合时保持一致","不要依赖 ID 的具体格式，它可能在不同版本中变化"],codeExample:{title:"useId Hook 基础用法",code:D}},{title:"useSyncExternalStore Hook",component:e.jsx(M,{}),description:"安全地订阅外部数据源，与 React 并发特性完美兼容。",observationPoints:["外部存储状态变化时组件会自动重新渲染","支持服务端渲染的快照功能","与 React 并发特性兼容，避免撕裂现象","订阅和取消订阅自动管理"],keyPoints:["subscribe 函数返回取消订阅的清理函数","getSnapshot 返回当前的存储状态","getServerSnapshot 用于服务端渲染","状态变化时会触发所有订阅者重新渲染"],commonTraps:["subscribe 函数每次渲染都创建新的实例","getSnapshot 返回不稳定的引用导致无限渲染","忘记实现 getServerSnapshot 导致 SSR 问题"],solutions:["使用 useCallback 稳定 subscribe 函数","确保 getSnapshot 返回稳定的引用","为 SSR 提供合适的服务端快照"],importantTips:["主要用于与外部状态管理库集成","解决了并发渲染中的状态撕裂问题","适合订阅浏览器 API 或第三方库的状态"],codeExample:{title:"useSyncExternalStore Hook",code:P}},{title:"useInsertionEffect Hook",component:e.jsx($,{}),description:"在 DOM 变更前同步插入样式，避免样式闪烁，适用于 CSS-in-JS 库。",observationPoints:["样式在 DOM 变更前同步插入，避免闪烁","执行时机早于 useLayoutEffect 和 useEffect","主要用于 CSS-in-JS 库的样式注入","会阻塞渲染，应谨慎使用"],keyPoints:["同步执行，会阻塞渲染过程","主要用于插入关键的 CSS 样式","执行顺序：useInsertionEffect → useLayoutEffect → useEffect","清理函数在组件卸载时执行"],commonTraps:["在 useInsertionEffect 中执行非样式相关的副作用","过度使用导致渲染性能问题","忘记清理插入的样式元素"],solutions:["仅用于关键样式的插入","保持副作用逻辑简单高效","正确实现清理函数"],importantTips:["主要为 CSS-in-JS 库设计","普通应用开发很少直接使用","会阻塞渲染，影响性能"],codeExample:{title:"useInsertionEffect Hook",code:T}},{title:"并发特性综合应用",component:e.jsx(E,{}),description:"结合 useTransition 和 useDeferredValue 优化大数据量的搜索体验。",observationPoints:["用户输入不会被搜索操作阻塞","搜索状态通过 isPending 反馈给用户","延迟值避免了频繁的搜索操作","大数据量处理时界面保持响应"],keyPoints:["useTransition 将更新标记为非紧急","useDeferredValue 延迟更新值的变化","isPending 状态指示后台更新进行中","并发特性提高用户体验"],commonTraps:["在 startTransition 中执行同步的紧急更新","过度使用导致界面更新延迟","忽略 isPending 状态的用户反馈"],solutions:["仅对非紧急更新使用 startTransition","合理平衡响应性和性能","提供适当的加载状态反馈"],importantTips:["适用于大数据量的搜索、过滤场景","需要 React 18+ 的并发特性支持","与 Suspense 结合使用效果更佳"],codeExample:{title:"并发特性综合应用",code:w}}]});export{J as default};
