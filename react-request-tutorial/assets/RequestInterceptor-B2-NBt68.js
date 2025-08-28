import{j as e,r as a}from"./index-Bi_r7QuH.js";import{C as g}from"./ComponentTemplate-C5EWLtXX.js";const b=()=>{const[n,r]=a.useState("eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9..."),[d,x]=a.useState([]),[m,l]=a.useState(1),i=s=>{const c={id:m,url:s,hasToken:!!n,timestamp:new Date().toLocaleTimeString()};x(o=>[c,...o.slice(0,4)]),l(o=>o+1)};return e.jsxs("div",{className:"space-y-4",children:[e.jsxs("div",{className:"bg-blue-50 p-4 rounded-lg border border-blue-200",children:[e.jsx("h4",{className:"font-semibold text-blue-800 mb-3",children:"Token 管理"}),e.jsxs("div",{className:"space-y-3",children:[e.jsxs("div",{children:[e.jsx("label",{className:"block text-sm font-medium text-gray-700 mb-1",children:"当前 Token:"}),e.jsxs("div",{className:"flex space-x-2",children:[e.jsx("input",{type:"text",value:n,onChange:s=>r(s.target.value),className:"flex-1 p-2 border border-gray-300 rounded text-sm font-mono",placeholder:"输入 JWT Token"}),e.jsx("button",{onClick:()=>r(""),className:"px-3 py-2 bg-red-500 text-white rounded text-sm hover:bg-red-600",children:"清除"})]})]}),e.jsxs("div",{className:"flex space-x-2",children:[e.jsx("button",{onClick:()=>i("https://jsonplaceholder.typicode.com/users"),className:"px-4 py-2 bg-blue-500 text-white rounded text-sm hover:bg-blue-600",children:"请求用户列表"}),e.jsx("button",{onClick:()=>i("https://jsonplaceholder.typicode.com/posts"),className:"px-4 py-2 bg-green-500 text-white rounded text-sm hover:bg-green-600",children:"请求文章数据"}),e.jsx("button",{onClick:()=>i("https://jsonplaceholder.typicode.com/todos"),className:"px-4 py-2 bg-purple-500 text-white rounded text-sm hover:bg-purple-600",children:"请求待办事项"})]})]})]}),e.jsxs("div",{className:"bg-white border rounded-lg",children:[e.jsx("div",{className:"p-4 border-b bg-gray-50",children:e.jsx("h4",{className:"font-semibold text-gray-800",children:"请求记录"})}),e.jsx("div",{className:"p-4",children:d.length===0?e.jsx("p",{className:"text-gray-500 text-center py-4",children:"暂无请求记录"}):e.jsx("div",{className:"space-y-2",children:d.map(s=>e.jsx("div",{className:`p-3 rounded border ${s.hasToken?"bg-green-50 border-green-200":"bg-red-50 border-red-200"}`,children:e.jsxs("div",{className:"flex items-center justify-between",children:[e.jsxs("div",{className:"flex items-center space-x-3",children:[e.jsxs("span",{className:"text-sm font-mono text-gray-600",children:["#",s.id]}),e.jsx("span",{className:"font-medium",children:s.url}),e.jsx("span",{className:`px-2 py-1 rounded text-xs ${s.hasToken?"bg-green-100 text-green-800":"bg-red-100 text-red-800"}`,children:s.hasToken?"✅ 已注入 Token":"❌ 缺少 Token"})]}),e.jsx("span",{className:"text-sm text-gray-500",children:s.timestamp})]})},s.id))})})]})]})},j=()=>{const[n,r]=a.useState([]),[d,x]=a.useState(1),m=()=>`req_${Date.now()}_${Math.random().toString(36).substr(2,9)}`,l=(t,c)=>{const o={id:m(),type:t,content:c,timestamp:new Date().toLocaleTimeString()};r(h=>[o,...h.slice(0,9)])},i=()=>{const t=m(),c={userId:123,filters:{status:"active",page:1},metadata:{source:"web"}},o=`🆔 生成请求 ID: ${t}`,h=`📋 深拷贝参数: ${JSON.stringify(c)}`,p=`🚀 发送请求到 https://jsonplaceholder.typicode.com/posts (ID: ${t})`;console.log(`%c[请求拦截器] ${o}`,"color: #3b82f6; font-weight: bold;"),console.log(`%c[请求拦截器] ${h}`,"color: #f59e0b; font-weight: bold;"),console.log(`%c[请求拦截器] ${p}`,"color: #10b981; font-weight: bold;"),l("request",o),l("clone",h),l("request",p),x(u=>u+1)},s=()=>{r([]),x(1)};return e.jsxs("div",{className:"space-y-4",children:[e.jsxs("div",{className:"flex justify-between items-center",children:[e.jsx("h4",{className:"font-semibold text-gray-800",children:"请求处理演示"}),e.jsxs("div",{className:"space-x-2",children:[e.jsxs("button",{onClick:i,className:"px-4 py-2 bg-blue-500 text-white rounded text-sm hover:bg-blue-600",children:["发送请求 #",d]}),e.jsx("button",{onClick:s,className:"px-4 py-2 bg-gray-500 text-white rounded text-sm hover:bg-gray-600",children:"清除日志"})]})]}),e.jsxs("div",{className:"bg-gray-900 text-green-400 p-4 rounded-lg font-mono text-sm",children:[e.jsx("div",{className:"mb-2 text-green-300",children:"📊 请求拦截器日志:"}),n.length===0?e.jsx("div",{className:"text-gray-500",children:"等待请求..."}):e.jsx("div",{className:"space-y-1 max-h-64 overflow-y-auto",children:n.map(t=>e.jsxs("div",{className:"flex items-start space-x-2",children:[e.jsxs("span",{className:"text-gray-500 text-xs",children:["[",t.timestamp,"]"]}),e.jsx("span",{className:t.type==="request"?"text-blue-400":"text-yellow-400",children:t.content})]},t.id))})]}),e.jsxs("div",{className:"bg-yellow-50 p-4 rounded-lg border border-yellow-200",children:[e.jsx("h5",{className:"font-medium text-yellow-800 mb-2",children:"💡 处理说明"}),e.jsxs("ul",{className:"text-sm text-yellow-700 space-y-1",children:[e.jsxs("li",{children:["• ",e.jsx("strong",{children:"请求 ID:"})," 为每个请求生成唯一标识符，便于日志追踪"]}),e.jsxs("li",{children:["• ",e.jsx("strong",{children:"深拷贝参数:"})," 避免原始数据被意外修改"]}),e.jsxs("li",{children:["• ",e.jsx("strong",{children:"统一处理:"})," 在拦截器中统一添加公共参数"]})]})]})]})},k=()=>e.jsx(g,{title:"请求拦截器",description:"学习如何使用 axios 请求拦截器自动注入 Token、生成请求 ID、深拷贝参数等通用处理逻辑。",overview:e.jsx("div",{className:"space-y-4",children:e.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-6",children:[e.jsxs("div",{className:"bg-blue-50 p-4 rounded-lg border border-blue-200",children:[e.jsx("h3",{className:"font-semibold text-blue-800 mb-2",children:"🎯 核心概念"}),e.jsxs("ul",{className:"text-sm text-blue-700 space-y-1",children:[e.jsx("li",{children:"• 请求拦截器自动处理"}),e.jsx("li",{children:"• Token 自动注入机制"}),e.jsx("li",{children:"• 请求 ID 生成与追踪"}),e.jsx("li",{children:"• 参数深拷贝保护"})]})]}),e.jsxs("div",{className:"bg-green-50 p-4 rounded-lg border border-green-200",children:[e.jsx("h3",{className:"font-semibold text-green-800 mb-2",children:"✨ 主要优势"}),e.jsxs("ul",{className:"text-sm text-green-700 space-y-1",children:[e.jsx("li",{children:"• 减少重复代码编写"}),e.jsx("li",{children:"• 统一认证处理逻辑"}),e.jsx("li",{children:"• 便于请求日志追踪"}),e.jsx("li",{children:"• 保护原始数据安全"})]})]}),e.jsxs("div",{className:"bg-yellow-50 p-4 rounded-lg border border-yellow-200",children:[e.jsx("h3",{className:"font-semibold text-yellow-800 mb-2",children:"🎪 适用场景"}),e.jsxs("ul",{className:"text-sm text-yellow-700 space-y-1",children:[e.jsx("li",{children:"• 需要认证的 API 调用"}),e.jsx("li",{children:"• 请求日志和监控"}),e.jsx("li",{children:"• 参数预处理需求"}),e.jsx("li",{children:"• 统一请求格式化"})]})]}),e.jsxs("div",{className:"bg-red-50 p-4 rounded-lg border border-red-200",children:[e.jsx("h3",{className:"font-semibold text-red-800 mb-2",children:"⚠️ 注意事项"}),e.jsxs("ul",{className:"text-sm text-red-700 space-y-1",children:[e.jsx("li",{children:"• 避免拦截器逻辑过重"}),e.jsx("li",{children:"• 注意异步操作处理"}),e.jsx("li",{children:"• 防止无限循环调用"}),e.jsx("li",{children:"• 合理处理错误情况"})]})]})]})}),examples:[{title:"Token 自动注入",component:e.jsx(b,{}),description:"演示如何在请求拦截器中自动注入认证 Token",observationPoints:["修改 Token 输入框，观察后续请求的 Token 注入状态","清除 Token 后发送请求，观察缺少认证的提示","每个请求都会显示是否成功注入 Token"],keyPoints:["请求拦截器会在每个请求发送前自动执行","可以从 localStorage 或状态管理中获取 Token","Token 过期时需要自动刷新或跳转登录","不同的 API 可能需要不同的认证方式"],commonTraps:["Token 过期后没有自动处理","在拦截器中进行同步的 Token 获取","忘记处理 Token 不存在的情况"],solutions:["实现 Token 自动刷新机制","使用异步拦截器处理 Token 获取","为不同实例设置不同的认证策略"],codeExample:{title:"Token 注入实现",code:`// utils/request.ts
import axios from 'axios';

const apiInstance = axios.create({
  baseURL: 'https://jsonplaceholder.typicode.com',
  timeout: 5000
});

// 请求拦截器
apiInstance.interceptors.request.use(
  (config) => {
    // 获取 Token
    const token = localStorage.getItem('access_token');

    if (token) {
      // 注入 Authorization 头
      config.headers.Authorization = \`Bearer \${token}\`;
    }

    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

export default apiInstance;`,language:"typescript",highlights:[10,13,16]}},{title:"请求 ID 和参数处理",component:e.jsx(j,{}),description:"演示请求 ID 生成和参数深拷贝的处理过程",observationPoints:["点击发送请求，观察控制台中的处理日志","注意每个请求都会生成唯一的请求 ID","参数会被深拷贝以保护原始数据"],keyPoints:["请求 ID 有助于日志追踪和问题排查","深拷贝参数可以避免原始数据被修改","可以在拦截器中添加公共参数","时间戳可以用于请求去重和缓存"],commonTraps:["直接修改原始请求参数","请求 ID 生成算法不够唯一","在拦截器中执行耗时操作"],solutions:["使用深拷贝或不可变数据结构","结合时间戳和随机数生成唯一 ID","将复杂逻辑移到拦截器外部"],codeExample:{title:"请求处理实现",code:`// utils/request.ts
import axios from 'axios';
import { cloneDeep } from 'lodash';

const apiInstance = axios.create({
  baseURL: process.env.REACT_APP_API_URL,
  timeout: 5000
});

// 生成请求 ID
const generateRequestId = () => {
  return \`req_\${Date.now()}_\${Math.random().toString(36).substr(2, 9)}\`;
};

// 请求拦截器
apiInstance.interceptors.request.use(
  (config) => {
    // 生成请求 ID
    const requestId = generateRequestId();
    config.headers['X-Request-ID'] = requestId;

    // 深拷贝参数（如果存在）
    if (config.data) {
      config.data = cloneDeep(config.data);
    }

    // 添加时间戳
    config.metadata = {
      requestId,
      timestamp: Date.now()
    };

    console.log(\`🚀 Request [\${requestId}]:\`, config.url);
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);`,language:"typescript",highlights:[11,18,23,28]}}],tutorial:{concepts:["axios 请求拦截器的工作原理","拦截器函数的参数和返回值","Token 获取和注入的最佳实践","请求 ID 生成算法设计","参数深拷贝的必要性和实现"],steps:["创建 axios 实例","使用 interceptors.request.use() 添加拦截器","在拦截器中获取和注入 Token","生成唯一的请求 ID","对请求参数进行深拷贝","添加公共参数和元数据","处理拦截器中的错误情况"],tips:["拦截器应该保持轻量，避免复杂的业务逻辑","使用异步拦截器处理 Token 刷新等异步操作","为不同的实例设置不同的拦截器","在开发环境可以添加详细的日志输出","考虑使用 TypeScript 为拦截器参数定义类型"]},interview:{questions:[{question:"请求拦截器的执行时机是什么？",answer:"请求拦截器在请求发送到服务器之前执行，可以修改请求配置、添加请求头、处理请求参数等。它是 axios 请求生命周期中的第一个环节。"},{question:"如何在请求拦截器中处理异步操作？",answer:"可以返回一个 Promise，axios 会等待 Promise 解析后再发送请求。例如：return new Promise((resolve) => { /* 异步操作 */ resolve(config); })。这常用于 Token 刷新等场景。"},{question:"为什么要对请求参数进行深拷贝？",answer:"深拷贝可以避免原始数据被意外修改，特别是在多个请求共享同一个参数对象时。这样可以确保每个请求的参数都是独立的，避免数据污染。"},{question:"请求拦截器中如何处理错误？",answer:"在拦截器的第二个参数（错误处理函数）中处理错误，通常返回 Promise.reject(error) 将错误传递给下一个处理环节。也可以在这里进行错误日志记录。"}],keyPoints:["请求拦截器在请求发送前执行，可以修改请求配置","Token 注入是请求拦截器的常见用途","请求 ID 有助于日志追踪和问题排查","深拷贝参数可以避免数据污染","拦截器支持异步操作，可以处理 Token 刷新等场景"]},bestPractices:{dos:["保持拦截器逻辑简单和高效","使用异步拦截器处理 Token 刷新","为每个请求生成唯一的追踪 ID","对请求参数进行深拷贝保护","在开发环境添加详细日志","合理处理拦截器中的错误"],donts:["不要在拦截器中执行复杂的业务逻辑","不要忽略拦截器的错误处理","不要在拦截器中进行同步的耗时操作","不要直接修改原始请求参数","不要在拦截器中创建无限循环"],patterns:["装饰器模式：为请求添加额外功能","责任链模式：多个拦截器按顺序处理","策略模式：根据条件选择不同的处理策略","观察者模式：监听请求状态变化"]}});export{k as default};
