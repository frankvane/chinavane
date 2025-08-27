import{j as e,r as d}from"./index-Cnne2xOM.js";import{a as g}from"./index-NIGUFBhG.js";import{C as j}from"./ComponentTemplate-iqsAHbUA.js";const y=()=>{const[o,p]=d.useState("posts"),[i,c]=d.useState(!1),[s,l]=d.useState(null),n={posts:{name:"Posts API 实例",baseURL:"https://jsonplaceholder.typicode.com",timeout:5e3,headers:{"Content-Type":"application/json"},description:"用于处理文章相关的 API 请求",color:"bg-blue-100 border-blue-300",textColor:"text-blue-800",features:["文章列表获取","文章详情查询","文章创建更新"],endpoint:"/posts",testData:{title:"Test Post",body:"This is a test post",userId:1}},users:{name:"Users API 实例",baseURL:"https://jsonplaceholder.typicode.com",timeout:8e3,headers:{"Content-Type":"application/json","X-User-Agent":"MyApp/1.0"},description:"专门处理用户相关的 API 请求",color:"bg-green-100 border-green-300",textColor:"text-green-800",features:["用户信息管理","用户认证","权限控制"],endpoint:"/users",testData:{name:"Test User",email:"test@example.com",phone:"123-456-7890"}},photos:{name:"Photos API 实例",baseURL:"https://jsonplaceholder.typicode.com",timeout:15e3,headers:{"Content-Type":"application/json",Accept:"application/json"},description:"处理图片和媒体文件相关的 API 请求",color:"bg-purple-100 border-purple-300",textColor:"text-purple-800",features:["图片上传下载","缩略图生成","媒体文件管理"],endpoint:"/photos",testData:{title:"Test Photo",url:"https://via.placeholder.com/600/92c952",thumbnailUrl:"https://via.placeholder.com/150/92c952"}}},m=async()=>{c(!0),l(null);const t=n[o],r=Date.now();try{const u=(await g.create({baseURL:t.baseURL,timeout:t.timeout,headers:t.headers}).get(`${t.endpoint}?_limit=5`)).data,b=Date.now();l({success:!0,data:u.slice(0,3),responseTime:b-r,totalCount:u.length})}catch(x){const h=Date.now();l({success:!1,error:x instanceof Error?x.message:"Unknown error",responseTime:h-r})}finally{c(!1)}},a=n[o];return e.jsxs("div",{className:"space-y-4",children:[e.jsx("div",{className:"flex space-x-2 mb-4",children:Object.entries(n).map(([t,r])=>e.jsx("button",{onClick:()=>p(t),className:`px-4 py-2 rounded text-sm ${o===t?"bg-blue-500 text-white":"bg-gray-200 text-gray-700 hover:bg-gray-300"}`,children:r.name},t))}),e.jsxs("div",{className:`border-2 p-4 rounded-lg ${a.color}`,children:[e.jsx("h4",{className:`font-semibold mb-2 ${a.textColor}`,children:a.name}),e.jsx("p",{className:`text-sm mb-4 ${a.textColor}`,children:a.description}),e.jsxs("div",{className:"bg-white p-4 rounded border",children:[e.jsxs("div",{className:"grid grid-cols-1 lg:grid-cols-2 gap-4",children:[e.jsxs("div",{children:[e.jsx("h5",{className:"font-medium text-gray-800 mb-2",children:"配置信息"}),e.jsxs("div",{className:"space-y-2",children:[e.jsxs("div",{children:[e.jsx("span",{className:"text-xs text-gray-600",children:"Base URL:"}),e.jsx("div",{className:"p-2 bg-gray-50 rounded text-sm font-mono",children:a.baseURL})]}),e.jsxs("div",{children:[e.jsx("span",{className:"text-xs text-gray-600",children:"Timeout:"}),e.jsxs("div",{className:"p-2 bg-gray-50 rounded text-sm",children:[a.timeout,"ms"]})]})]})]}),e.jsxs("div",{children:[e.jsx("h5",{className:"font-medium text-gray-800 mb-2",children:"请求头"}),e.jsx("div",{className:"space-y-1",children:Object.entries(a.headers).map(([t,r])=>e.jsxs("div",{className:"flex text-sm",children:[e.jsxs("span",{className:"text-gray-600 w-24 flex-shrink-0",children:[t,":"]}),e.jsx("span",{className:"font-mono text-gray-800 break-all",children:r})]},t))})]})]}),e.jsxs("div",{className:"mt-4",children:[e.jsx("h5",{className:"font-medium text-gray-800 mb-2",children:"特性"}),e.jsx("div",{className:"flex flex-wrap gap-2",children:a.features.map((t,r)=>e.jsx("span",{className:"px-2 py-1 bg-gray-100 text-gray-700 text-xs rounded",children:t},r))})]}),e.jsx("div",{className:"border-t pt-4 mt-4",children:e.jsx("button",{onClick:m,disabled:i,className:`w-full py-2 px-4 rounded font-medium ${i?"bg-gray-400 text-white cursor-not-allowed":"bg-blue-500 text-white hover:bg-blue-600"}`,children:i?"测试中...":`测试 ${a.name}`})}),s&&e.jsxs("div",{className:`p-3 rounded border mt-4 ${s.success?"bg-green-50 border-green-200":"bg-red-50 border-red-200"}`,children:[e.jsxs("div",{className:"flex items-center justify-between mb-2",children:[e.jsx("span",{className:`font-medium ${s.success?"text-green-800":"text-red-800"}`,children:s.success?"✅ 请求成功":"❌ 请求失败"}),e.jsxs("span",{className:"text-sm text-gray-600",children:["响应时间: ",s.responseTime,"ms"]})]}),s.success?e.jsxs("div",{className:"text-sm text-green-700",children:[e.jsxs("div",{className:"mb-2",children:["成功获取 ",s.totalCount," 条数据，显示前 3 条："]}),e.jsx("div",{className:"bg-white p-2 rounded border max-h-32 overflow-y-auto",children:e.jsx("pre",{className:"text-xs font-mono",children:JSON.stringify(s.data,null,2)})})]}):e.jsxs("div",{className:"text-sm text-red-700",children:["错误信息: ",s.error]})]})]})]})]})},N=()=>{const[o,p]=d.useState("basic"),[i,c]=d.useState(""),s={basic:{title:"基础配置",code:`const apiInstance = axios.create({
  baseURL: 'https://api.example.com',
  timeout: 5000
});`,description:"最简单的实例创建方式"},advanced:{title:"高级配置",code:`const apiInstance = axios.create({
  baseURL: process.env.REACT_APP_API_URL,
  timeout: 10000,
  headers: {
    'Content-Type': 'application/json',
    'X-Requested-With': 'XMLHttpRequest'
  },
  withCredentials: true,
  validateStatus: (status) => status < 500
});`,description:"包含完整配置选项的实例"}},l=()=>{const n=new Date().toLocaleTimeString();c(`✅ 实例创建成功！(${n})`),setTimeout(()=>c(""),3e3)};return e.jsxs("div",{className:"space-y-4",children:[e.jsx("div",{className:"flex space-x-2 mb-4",children:Object.entries(s).map(([n,m])=>e.jsx("button",{onClick:()=>p(n),className:`px-4 py-2 rounded text-sm ${o===n?"bg-green-500 text-white":"bg-gray-200 text-gray-700 hover:bg-gray-300"}`,children:m.title},n))}),e.jsxs("div",{className:"bg-gray-50 p-4 rounded-lg border",children:[e.jsx("h4",{className:"font-semibold mb-2",children:s[o].title}),e.jsx("p",{className:"text-sm text-gray-600 mb-3",children:s[o].description}),e.jsx("pre",{className:"bg-gray-900 text-green-400 p-4 rounded text-sm overflow-x-auto",children:e.jsx("code",{children:s[o].code})}),e.jsx("button",{onClick:l,className:"mt-3 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 text-sm",children:"创建实例"}),i&&e.jsx("div",{className:"mt-3 p-2 bg-green-100 border border-green-300 rounded text-green-800 text-sm",children:i})]})]})},C=()=>e.jsx(j,{title:"实例层",description:"学习如何创建不同用途的 axios 实例，包括业务 API、文件上传、第三方服务等，实现请求的分类管理。",overview:e.jsx("div",{className:"space-y-4",children:e.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-6",children:[e.jsxs("div",{className:"bg-blue-50 p-4 rounded-lg border border-blue-200",children:[e.jsx("h3",{className:"font-semibold text-blue-800 mb-2",children:"🎯 核心概念"}),e.jsxs("ul",{className:"text-sm text-blue-700 space-y-1",children:[e.jsx("li",{children:"• axios.create() 创建独立实例"}),e.jsx("li",{children:"• 不同实例服务不同用途"}),e.jsx("li",{children:"• 实例间配置相互独立"}),e.jsx("li",{children:"• 支持个性化拦截器"})]})]}),e.jsxs("div",{className:"bg-green-50 p-4 rounded-lg border border-green-200",children:[e.jsx("h3",{className:"font-semibold text-green-800 mb-2",children:"✨ 主要优势"}),e.jsxs("ul",{className:"text-sm text-green-700 space-y-1",children:[e.jsx("li",{children:"• 避免全局配置冲突"}),e.jsx("li",{children:"• 提高代码可维护性"}),e.jsx("li",{children:"• 支持不同认证方式"}),e.jsx("li",{children:"• 便于错误处理分类"})]})]}),e.jsxs("div",{className:"bg-yellow-50 p-4 rounded-lg border border-yellow-200",children:[e.jsx("h3",{className:"font-semibold text-yellow-800 mb-2",children:"🎪 适用场景"}),e.jsxs("ul",{className:"text-sm text-yellow-700 space-y-1",children:[e.jsx("li",{children:"• 多个 API 服务调用"}),e.jsx("li",{children:"• 不同认证机制需求"}),e.jsx("li",{children:"• 文件上传下载功能"}),e.jsx("li",{children:"• 第三方服务集成"})]})]}),e.jsxs("div",{className:"bg-red-50 p-4 rounded-lg border border-red-200",children:[e.jsx("h3",{className:"font-semibold text-red-800 mb-2",children:"⚠️ 注意事项"}),e.jsxs("ul",{className:"text-sm text-red-700 space-y-1",children:[e.jsx("li",{children:"• 避免创建过多实例"}),e.jsx("li",{children:"• 合理设置超时时间"}),e.jsx("li",{children:"• 注意内存泄漏问题"}),e.jsx("li",{children:"• 统一错误处理策略"})]})]})]})}),examples:[{title:"不同类型实例对比",component:e.jsx(y,{}),description:"展示业务 API、文件上传、第三方服务三种不同类型的实例配置",observationPoints:["点击不同实例类型，观察配置参数的差异","注意文件上传实例的超时时间更长","第三方 API 实例使用了不同的认证方式"],keyPoints:["业务 API 实例专注于核心功能，配置相对简单","文件上传实例需要更长的超时时间和特殊的 Content-Type","第三方 API 实例需要独立的认证和错误处理","每个实例都有自己的特性和优化点"],commonTraps:["所有请求使用同一个实例","文件上传使用普通实例导致超时","第三方 API 认证信息混用"],solutions:["根据用途创建专门的实例","为文件上传设置更长的超时时间","为每个第三方服务创建独立实例"],codeExample:{title:"多实例创建示例",code:`// utils/request.ts
import axios from 'axios';

// Posts API 实例
export const postsAPI = axios.create({
  baseURL: 'https://jsonplaceholder.typicode.com/posts',
  timeout: 5000,
  headers: {
    'Content-Type': 'application/json'
  }
});

// Users API 实例
export const usersAPI = axios.create({
  baseURL: 'https://jsonplaceholder.typicode.com/users',
  timeout: 8000,
  headers: {
    'Content-Type': 'application/json'
  }
});

// Photos API 实例
export const photosAPI = axios.create({
  baseURL: 'https://jsonplaceholder.typicode.com/photos',
  timeout: 15000,
  headers: {
    'Accept': 'application/json'
  }
});`,language:"typescript",highlights:[5,14,22]}},{title:"实例创建配置",component:e.jsx(N,{}),description:"演示基础和高级两种实例创建方式",observationPoints:["切换基础和高级配置，观察代码复杂度的变化","点击'创建实例'按钮，模拟实例创建过程","注意高级配置包含了更多的选项"],keyPoints:["基础配置适合简单场景，只需要 baseURL 和 timeout","高级配置包含更多选项，适合复杂业务场景","validateStatus 可以自定义状态码验证逻辑","withCredentials 控制是否发送 cookies"],commonTraps:["配置过于复杂导致难以维护","忘记设置必要的请求头","validateStatus 设置不当导致错误处理异常"],solutions:["根据实际需求选择合适的配置复杂度","使用 TypeScript 定义配置接口","为常用配置创建工厂函数"],codeExample:{title:"实例工厂函数",code:`// utils/instanceFactory.ts
import axios, { AxiosInstance, AxiosRequestConfig } from 'axios';

interface CreateInstanceOptions {
  baseURL: string;
  timeout?: number;
  headers?: Record<string, string>;
  withCredentials?: boolean;
}

// 实例工厂函数
export const createInstance = (options: CreateInstanceOptions): AxiosInstance => {
  const config: AxiosRequestConfig = {
    baseURL: options.baseURL,
    timeout: options.timeout || 5000,
    headers: {
      'Content-Type': 'application/json',
      ...options.headers
    },
    withCredentials: options.withCredentials || false
  };
  
  return axios.create(config);
};

// 使用工厂函数创建实例
export const apiInstance = createInstance({
  baseURL: 'https://jsonplaceholder.typicode.com',
  timeout: 10000,
  withCredentials: true
});`,language:"typescript",highlights:[12,23,27]}}],tutorial:{concepts:["axios.create() 方法的作用和原理","实例配置选项的含义和用法","不同业务场景的实例设计","实例间的隔离和独立性","实例的生命周期管理"],steps:["分析项目中的不同请求类型","设计各类型实例的配置参数","使用 axios.create() 创建实例","为每个实例配置专门的拦截器","导出实例供业务代码使用","测试各实例的功能和性能"],tips:["为每种用途创建专门的实例，避免配置冲突","文件上传实例需要设置更长的超时时间","第三方 API 实例应该有独立的错误处理","使用 TypeScript 为实例配置定义类型","考虑使用工厂模式创建相似的实例"]},interview:{questions:[{question:"为什么要创建多个 axios 实例而不是使用一个全局实例？",answer:"创建多个实例可以避免配置冲突，每个实例可以有自己的 baseURL、超时时间、请求头等配置。这样可以为不同的 API 服务、不同的业务场景提供专门优化的配置，提高代码的可维护性和可扩展性。"},{question:"文件上传实例和普通 API 实例有什么区别？",answer:"文件上传实例通常需要更长的超时时间（如 30 秒），Content-Type 设置为 multipart/form-data，可能需要上传进度监控。而普通 API 实例超时时间较短（5-10 秒），Content-Type 为 application/json。"},{question:"如何管理多个实例的配置？",answer:"可以使用配置文件统一管理，或者创建实例工厂函数。通过 TypeScript 定义配置接口，使用环境变量管理不同环境的配置，避免硬编码。还可以考虑使用配置中心或者配置管理工具。"},{question:"实例创建后如何添加拦截器？",answer:"可以在创建实例后使用 instance.interceptors.request.use() 和 instance.interceptors.response.use() 添加拦截器。每个实例的拦截器是独立的，不会影响其他实例。"}],keyPoints:["axios.create() 创建独立的实例，避免全局配置冲突","不同用途的实例需要不同的配置参数","文件上传实例需要特殊的超时和 Content-Type 设置","第三方 API 实例需要独立的认证和错误处理","使用工厂模式可以简化实例创建过程"]},bestPractices:{dos:["根据不同用途创建专门的实例","为文件上传设置更长的超时时间","使用 TypeScript 定义实例配置类型","通过环境变量管理实例配置","为每个实例添加专门的拦截器","使用工厂函数创建相似的实例"],donts:["不要创建过多不必要的实例","不要在实例配置中硬编码敏感信息","不要忽略实例的内存管理","不要让不同实例的配置相互影响","不要在所有场景都使用同一个实例"],patterns:["工厂模式：创建实例的工厂函数","单例模式：确保特定实例的唯一性","策略模式：根据场景选择不同实例","适配器模式：为第三方 API 创建适配实例"]}});export{C as default};
