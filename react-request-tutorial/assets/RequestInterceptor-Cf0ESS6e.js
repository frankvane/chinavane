import{r as u,j as e}from"./index-C7SuDyTR.js";import{C as b}from"./ComponentTemplate-BzrYXZsv.js";const h=()=>{const[o,r]=u.useState([]),[a,l]=u.useState(1),c=()=>`req_${Date.now()}_${Math.random().toString(36).substr(2,9)}`,i=(t,m)=>{const s={id:c(),type:t,content:m,timestamp:new Date().toLocaleTimeString()};r(p=>[s,...p.slice(0,9)])},d=()=>{const t=c(),m={userId:123,filters:{status:"active",page:1},metadata:{source:"web"}},s=`🆔 生成请求 ID: ${t}`,p=`📋 深拷贝参数: ${JSON.stringify(m)}`,g=`🚀 发送请求到 https://jsonplaceholder.typicode.com/posts (ID: ${t})`;console.log(`%c[请求拦截器] ${s}`,"color: #3b82f6; font-weight: bold;"),console.log(`%c[请求拦截器] ${p}`,"color: #f59e0b; font-weight: bold;"),console.log(`%c[请求拦截器] ${g}`,"color: #10b981; font-weight: bold;"),i("request",s),i("clone",p),i("request",g),l(x=>x+1)},n=()=>{r([]),l(1)};return e.jsxs("div",{className:"space-y-4",children:[e.jsxs("div",{className:"flex justify-between items-center",children:[e.jsx("h4",{className:"font-semibold text-gray-800",children:"请求处理演示"}),e.jsxs("div",{className:"space-x-2",children:[e.jsxs("button",{onClick:d,className:"px-4 py-2 bg-blue-500 text-white rounded text-sm hover:bg-blue-600",children:["发送请求 #",a]}),e.jsx("button",{onClick:n,className:"px-4 py-2 bg-gray-500 text-white rounded text-sm hover:bg-gray-600",children:"清除日志"})]})]}),e.jsxs("div",{className:"bg-gray-900 text-green-400 p-4 rounded-lg font-mono text-sm",children:[e.jsx("div",{className:"mb-2 text-green-300",children:"📊 请求拦截器日志:"}),o.length===0?e.jsx("div",{className:"text-gray-500",children:"等待请求..."}):e.jsx("div",{className:"space-y-1 max-h-64 overflow-y-auto",children:o.map(t=>e.jsxs("div",{className:"flex items-start space-x-2",children:[e.jsxs("span",{className:"text-gray-500 text-xs",children:["[",t.timestamp,"]"]}),e.jsx("span",{className:t.type==="request"?"text-blue-400":"text-yellow-400",children:t.content})]},t.id))})]}),e.jsxs("div",{className:"bg-yellow-50 p-4 rounded-lg border border-yellow-200",children:[e.jsx("h5",{className:"font-medium text-yellow-800 mb-2",children:"💡 处理说明"}),e.jsxs("ul",{className:"text-sm text-yellow-700 space-y-1",children:[e.jsxs("li",{children:["• ",e.jsx("strong",{children:"请求 ID:"})," 为每个请求生成唯一标识符，便于日志追踪"]}),e.jsxs("li",{children:["• ",e.jsx("strong",{children:"深拷贝参数:"})," 避免原始数据被意外修改"]}),e.jsxs("li",{children:["• ",e.jsx("strong",{children:"统一处理:"})," 在拦截器中统一添加公共参数"]})]})]})]})},v=`import React, { useState } from "react";

// 请求 ID 和参数处理演示
const RequestProcessingDemo: React.FC = () => {
  const [logs, setLogs] = useState<
    Array<{
      id: string;
      type: "request" | "clone";
      content: string;
      timestamp: string;
    }>
  >([]);
  const [requestCounter, setRequestCounter] = useState(1);

  const generateRequestId = () => {
    return \`req_\${Date.now()}_\${Math.random().toString(36).substr(2, 9)}\`;
  };

  const addLog = (type: "request" | "clone", content: string) => {
    const newLog = {
      id: generateRequestId(),
      type,
      content,
      timestamp: new Date().toLocaleTimeString(),
    };
    setLogs((prev) => [newLog, ...prev.slice(0, 9)]);
  };

  const simulateRequestWithProcessing = () => {
    const requestId = generateRequestId();
    const originalData = {
      userId: 123,
      filters: { status: "active", page: 1 },
      metadata: { source: "web" },
    };

    // 模拟请求拦截器处理
    const requestIdLog = \`🆔 生成请求 ID: \${requestId}\`;
    const cloneLog = \`📋 深拷贝参数: \${JSON.stringify(originalData)}\`;
    const sendLog = \`🚀 发送请求到 https://jsonplaceholder.typicode.com/posts (ID: \${requestId})\`;

    // 在控制台输出日志
    console.log(
      \`%c[请求拦截器] \${requestIdLog}\`,
      "color: #3b82f6; font-weight: bold;"
    );
    console.log(
      \`%c[请求拦截器] \${cloneLog}\`,
      "color: #f59e0b; font-weight: bold;"
    );
    console.log(
      \`%c[请求拦截器] \${sendLog}\`,
      "color: #10b981; font-weight: bold;"
    );

    // 在页面上显示日志
    addLog("request", requestIdLog);
    addLog("clone", cloneLog);
    addLog("request", sendLog);

    setRequestCounter((prev) => prev + 1);
  };

  const clearLogs = () => {
    setLogs([]);
    setRequestCounter(1);
  };

  return (
    <div className="space-y-4">
      <div className="flex justify-between items-center">
        <h4 className="font-semibold text-gray-800">请求处理演示</h4>
        <div className="space-x-2">
          <button
            onClick={simulateRequestWithProcessing}
            className="px-4 py-2 bg-blue-500 text-white rounded text-sm hover:bg-blue-600"
          >
            发送请求 #{requestCounter}
          </button>
          <button
            onClick={clearLogs}
            className="px-4 py-2 bg-gray-500 text-white rounded text-sm hover:bg-gray-600"
          >
            清除日志
          </button>
        </div>
      </div>

      <div className="bg-gray-900 text-green-400 p-4 rounded-lg font-mono text-sm">
        <div className="mb-2 text-green-300">📊 请求拦截器日志:</div>
        {logs.length === 0 ? (
          <div className="text-gray-500">等待请求...</div>
        ) : (
          <div className="space-y-1 max-h-64 overflow-y-auto">
            {logs.map((log) => (
              <div key={log.id} className="flex items-start space-x-2">
                <span className="text-gray-500 text-xs">[{log.timestamp}]</span>
                <span
                  className={
                    log.type === "request" ? "text-blue-400" : "text-yellow-400"
                  }
                >
                  {log.content}
                </span>
              </div>
            ))}
          </div>
        )}
      </div>

      <div className="bg-yellow-50 p-4 rounded-lg border border-yellow-200">
        <h5 className="font-medium text-yellow-800 mb-2">💡 处理说明</h5>
        <ul className="text-sm text-yellow-700 space-y-1">
          <li>
            • <strong>请求 ID:</strong> 为每个请求生成唯一标识符，便于日志追踪
          </li>
          <li>
            • <strong>深拷贝参数:</strong> 避免原始数据被意外修改
          </li>
          <li>
            • <strong>统一处理:</strong> 在拦截器中统一添加公共参数
          </li>
        </ul>
      </div>
    </div>
  );
};

export default RequestProcessingDemo;`,y=()=>{const[o,r]=u.useState("eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9..."),[a,l]=u.useState([]),[c,i]=u.useState(1),d=n=>{const m={id:c,url:n,hasToken:!!o,timestamp:new Date().toLocaleTimeString()};l(s=>[m,...s.slice(0,4)]),i(s=>s+1)};return e.jsxs("div",{className:"space-y-4",children:[e.jsxs("div",{className:"bg-blue-50 p-4 rounded-lg border border-blue-200",children:[e.jsx("h4",{className:"font-semibold text-blue-800 mb-3",children:"Token 管理"}),e.jsxs("div",{className:"space-y-3",children:[e.jsxs("div",{children:[e.jsx("label",{className:"block text-sm font-medium text-gray-700 mb-1",children:"当前 Token:"}),e.jsxs("div",{className:"flex space-x-2",children:[e.jsx("input",{type:"text",value:o,onChange:n=>r(n.target.value),className:"flex-1 p-2 border border-gray-300 rounded text-sm font-mono",placeholder:"输入 JWT Token"}),e.jsx("button",{onClick:()=>r(""),className:"px-3 py-2 bg-red-500 text-white rounded text-sm hover:bg-red-600",children:"清除"})]})]}),e.jsxs("div",{className:"flex space-x-2",children:[e.jsx("button",{onClick:()=>d("https://jsonplaceholder.typicode.com/users"),className:"px-4 py-2 bg-blue-500 text-white rounded text-sm hover:bg-blue-600",children:"请求用户列表"}),e.jsx("button",{onClick:()=>d("https://jsonplaceholder.typicode.com/posts"),className:"px-4 py-2 bg-green-500 text-white rounded text-sm hover:bg-green-600",children:"请求文章数据"}),e.jsx("button",{onClick:()=>d("https://jsonplaceholder.typicode.com/todos"),className:"px-4 py-2 bg-purple-500 text-white rounded text-sm hover:bg-purple-600",children:"请求待办事项"})]})]})]}),e.jsxs("div",{className:"bg-white border rounded-lg",children:[e.jsx("div",{className:"p-4 border-b bg-gray-50",children:e.jsx("h4",{className:"font-semibold text-gray-800",children:"请求记录"})}),e.jsx("div",{className:"p-4",children:a.length===0?e.jsx("p",{className:"text-gray-500 text-center py-4",children:"暂无请求记录"}):e.jsx("div",{className:"space-y-2",children:a.map(n=>e.jsx("div",{className:`p-3 rounded border ${n.hasToken?"bg-green-50 border-green-200":"bg-red-50 border-red-200"}`,children:e.jsxs("div",{className:"flex items-center justify-between",children:[e.jsxs("div",{className:"flex items-center space-x-3",children:[e.jsxs("span",{className:"text-sm font-mono text-gray-600",children:["#",n.id]}),e.jsx("span",{className:"font-medium",children:n.url}),e.jsx("span",{className:`px-2 py-1 rounded text-xs ${n.hasToken?"bg-green-100 text-green-800":"bg-red-100 text-red-800"}`,children:n.hasToken?"✅ 已注入 Token":"❌ 缺少 Token"})]}),e.jsx("span",{className:"text-sm text-gray-500",children:n.timestamp})]})},n.id))})})]})]})},N=`import React, { useState } from "react";

// Token 注入演示
const TokenInjectionDemo: React.FC = () => {
  const [token, setToken] = useState("eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...");
  const [requests, setRequests] = useState<
    Array<{ id: number; url: string; hasToken: boolean; timestamp: string }>
  >([]);
  const [requestId, setRequestId] = useState(1);

  const simulateRequest = (url: string) => {
    const hasToken = !!token;
    const newRequest = {
      id: requestId,
      url,
      hasToken,
      timestamp: new Date().toLocaleTimeString(),
    };

    setRequests((prev) => [newRequest, ...prev.slice(0, 4)]);
    setRequestId((prev) => prev + 1);
  };

  return (
    <div className="space-y-4">
      <div className="bg-blue-50 p-4 rounded-lg border border-blue-200">
        <h4 className="font-semibold text-blue-800 mb-3">Token 管理</h4>
        <div className="space-y-3">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              当前 Token:
            </label>
            <div className="flex space-x-2">
              <input
                type="text"
                value={token}
                onChange={(e) => setToken(e.target.value)}
                className="flex-1 p-2 border border-gray-300 rounded text-sm font-mono"
                placeholder="输入 JWT Token"
              />
              <button
                onClick={() => setToken("")}
                className="px-3 py-2 bg-red-500 text-white rounded text-sm hover:bg-red-600"
              >
                清除
              </button>
            </div>
          </div>

          <div className="flex space-x-2">
            <button
              onClick={() =>
                simulateRequest("https://jsonplaceholder.typicode.com/users")
              }
              className="px-4 py-2 bg-blue-500 text-white rounded text-sm hover:bg-blue-600"
            >
              请求用户列表
            </button>
            <button
              onClick={() =>
                simulateRequest("https://jsonplaceholder.typicode.com/posts")
              }
              className="px-4 py-2 bg-green-500 text-white rounded text-sm hover:bg-green-600"
            >
              请求文章数据
            </button>
            <button
              onClick={() =>
                simulateRequest("https://jsonplaceholder.typicode.com/todos")
              }
              className="px-4 py-2 bg-purple-500 text-white rounded text-sm hover:bg-purple-600"
            >
              请求待办事项
            </button>
          </div>
        </div>
      </div>

      <div className="bg-white border rounded-lg">
        <div className="p-4 border-b bg-gray-50">
          <h4 className="font-semibold text-gray-800">请求记录</h4>
        </div>
        <div className="p-4">
          {requests.length === 0 ? (
            <p className="text-gray-500 text-center py-4">暂无请求记录</p>
          ) : (
            <div className="space-y-2">
              {requests.map((request) => (
                <div
                  key={request.id}
                  className={\`p-3 rounded border \${
                    request.hasToken
                      ? "bg-green-50 border-green-200"
                      : "bg-red-50 border-red-200"
                  }\`}
                >
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-3">
                      <span className="text-sm font-mono text-gray-600">
                        #{request.id}
                      </span>
                      <span className="font-medium">{request.url}</span>
                      <span
                        className={\`px-2 py-1 rounded text-xs \${
                          request.hasToken
                            ? "bg-green-100 text-green-800"
                            : "bg-red-100 text-red-800"
                        }\`}
                      >
                        {request.hasToken ? "✅ 已注入 Token" : "❌ 缺少 Token"}
                      </span>
                    </div>
                    <span className="text-sm text-gray-500">
                      {request.timestamp}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default TokenInjectionDemo;`,q=()=>{const o=[{title:"核心概念",items:["请求拦截器自动处理","Token 自动注入机制","请求 ID 生成与追踪","参数深拷贝保护"]},{title:"主要优势",items:["减少重复代码编写","统一认证处理逻辑","便于请求日志追踪","保护原始数据安全"]},{title:"适用场景",items:["需要认证的 API 调用","请求日志和监控","参数预处理需求","统一请求格式化"]},{title:"注意事项",items:["避免拦截器逻辑过重","注意异步操作处理","防止无限循环调用","合理处理错误情况"]}],r=[{title:"Token 自动注入",component:e.jsx(y,{}),description:"演示如何在请求拦截器中自动注入认证 Token",observationPoints:["修改 Token 输入框，观察后续请求的 Token 注入状态","清除 Token 后发送请求，观察缺少认证的提示","每个请求都会显示是否成功注入 Token"],keyPoints:["请求拦截器会在每个请求发送前自动执行","可以从 localStorage 或状态管理中获取 Token","Token 过期时需要自动刷新或跳转登录","不同的 API 可能需要不同的认证方式"],commonTraps:["Token 过期后没有自动处理","在拦截器中进行同步的 Token 获取","忘记处理 Token 不存在的情况"],solutions:["实现 Token 自动刷新机制","使用异步拦截器处理 Token 获取","为不同实例设置不同的认证策略"],codeExample:{title:"Token 注入拦截器",code:N}},{title:"请求 ID 和参数处理",component:e.jsx(h,{}),description:"演示请求 ID 生成和参数深拷贝的处理过程",observationPoints:["点击发送请求，观察控制台中的处理日志","注意每个请求都会生成唯一的请求 ID","参数会被深拷贝以保护原始数据"],keyPoints:["请求 ID 有助于日志追踪和问题排查","深拷贝参数可以避免原始数据被修改","可以在拦截器中添加公共参数","时间戳可以用于请求去重和缓存"],commonTraps:["直接修改原始请求参数","请求 ID 生成算法不够唯一","在拦截器中执行耗时操作"],solutions:["使用深拷贝或不可变数据结构","结合时间戳和随机数生成唯一 ID","将复杂逻辑移到拦截器外部"],codeExample:{title:"请求处理拦截器",code:v}}],a={concepts:["axios 请求拦截器的工作原理","拦截器函数的参数和返回值","Token 获取和注入的最佳实践","请求 ID 生成算法设计","参数深拷贝的必要性和实现"],steps:["创建 axios 实例","使用 interceptors.request.use() 添加拦截器","在拦截器中获取和注入 Token","生成唯一的请求 ID","对请求参数进行深拷贝","添加公共参数和元数据","处理拦截器中的错误情况"],tips:["拦截器应该保持轻量，避免复杂的业务逻辑","使用异步拦截器处理 Token 刷新等异步操作","为不同的实例设置不同的拦截器","在开发环境可以添加详细的日志输出","考虑使用 TypeScript 为拦截器参数定义类型"]},l={questions:[{question:"请求拦截器的执行时机是什么？",answer:"请求拦截器在请求发送到服务器之前执行，可以修改请求配置、添加请求头、处理请求参数等。它是 axios 请求生命周期中的第一个环节。"},{question:"如何在请求拦截器中处理异步操作？",answer:"可以返回一个 Promise，axios 会等待 Promise 解析后再发送请求。例如：return new Promise((resolve) => { /* 异步操作 */ resolve(config); })。这常用于 Token 刷新等场景。"},{question:"为什么要对请求参数进行深拷贝？",answer:"深拷贝可以避免原始数据被意外修改，特别是在多个请求共享同一个参数对象时。这样可以确保每个请求的参数都是独立的，避免数据污染。"},{question:"请求拦截器中如何处理错误？",answer:"在拦截器的第二个参数（错误处理函数）中处理错误，通常返回 Promise.reject(error) 将错误传递给下一个处理环节。也可以在这里进行错误日志记录。"}],keyPoints:["请求拦截器在请求发送前执行，可以修改请求配置","Token 注入是请求拦截器的常见用途","请求 ID 有助于日志追踪和问题排查","深拷贝参数可以避免数据污染","拦截器支持异步操作，可以处理 Token 刷新等场景"]},c={dos:["保持拦截器逻辑简单和高效","使用异步拦截器处理 Token 刷新","为每个请求生成唯一的追踪 ID","对请求参数进行深拷贝保护","在开发环境添加详细日志","合理处理拦截器中的错误"],donts:["不要在拦截器中执行复杂的业务逻辑","不要忽略拦截器的错误处理","不要在拦截器中进行同步的耗时操作","不要直接修改原始请求参数","不要在拦截器中创建无限循环"],patterns:["装饰器模式：为请求添加额外功能","责任链模式：多个拦截器按顺序处理","策略模式：根据条件选择不同的处理策略","观察者模式：监听请求状态变化"]};return e.jsx(b,{title:"请求拦截器",description:"学习如何使用 axios 请求拦截器自动注入 Token、生成请求 ID、深拷贝参数等通用处理逻辑。",overview:o,examples:r,tutorial:a,interview:l,bestPractices:c})};export{q as default};
