import{j as e,r as i}from"./index-Cnne2xOM.js";import{C as y}from"./ComponentTemplate-iqsAHbUA.js";const P=()=>{const[d,l]=i.useState([]),[a,o]=i.useState(!1),n=i.useRef(null),r=i.useCallback(t=>{l(c=>[...c,`${new Date().toLocaleTimeString()}: ${t}`])},[]),h=i.useCallback(()=>{l([])},[]),x=i.useCallback(async(t,c,u)=>{o(!0),n.current=new AbortController;try{r(`发起 ${t} 请求到 ${c}`),u&&r(`请求数据: ${JSON.stringify(u)}`),await new Promise((b,T)=>{var g;const j=setTimeout(b,1500);(g=n.current)==null||g.signal.addEventListener("abort",()=>{clearTimeout(j),T(new Error("请求已取消"))})});const m={data:t==="GET"?{id:1,name:"张三",email:"zhangsan@example.com"}:{success:!0},message:"请求成功",code:200};r(`✅ ${t} 请求成功`),r(`响应数据: ${JSON.stringify(m,null,2)}`)}catch(m){m instanceof Error&&r(`❌ ${t} 请求失败: ${m.message}`)}finally{o(!1),n.current=null}},[r]),s=i.useCallback(()=>{n.current&&(n.current.abort(),r("🚫 请求已取消"))},[r]),p=[{name:"GET",endpoint:"https://jsonplaceholder.typicode.com/users/1",color:"green"},{name:"POST",endpoint:"https://jsonplaceholder.typicode.com/posts",color:"blue",data:{title:"新文章",body:"文章内容",userId:1}},{name:"PUT",endpoint:"https://jsonplaceholder.typicode.com/posts/1",color:"yellow",data:{title:"更新文章",body:"更新内容",userId:1}},{name:"DELETE",endpoint:"https://jsonplaceholder.typicode.com/posts/1",color:"red"}];return e.jsx("div",{className:"space-y-6",children:e.jsxs("div",{className:"bg-white p-6 rounded-lg shadow-sm border",children:[e.jsx("h3",{className:"text-lg font-semibold mb-4",children:"HTTP 方法演示"}),e.jsx("div",{className:"grid grid-cols-2 md:grid-cols-4 gap-3 mb-4",children:p.map(t=>{const c={green:"bg-green-500 hover:bg-green-600",blue:"bg-blue-500 hover:bg-blue-600",yellow:"bg-yellow-500 hover:bg-yellow-600",red:"bg-red-500 hover:bg-red-600"};return e.jsx("button",{onClick:()=>x(t.name,t.endpoint,t.data),disabled:a,className:`px-3 py-2 text-white rounded disabled:opacity-50 text-sm ${c[t.color]}`,children:t.name},t.name)})}),e.jsxs("div",{className:"flex gap-2 mb-4",children:[e.jsx("button",{onClick:h,className:"px-4 py-2 bg-gray-500 text-white rounded hover:bg-gray-600",children:"清空日志"}),a&&e.jsx("button",{onClick:s,className:"px-4 py-2 bg-orange-500 text-white rounded hover:bg-orange-600",children:"取消请求"}),a&&e.jsxs("div",{className:"flex items-center text-blue-600",children:[e.jsx("div",{className:"animate-spin rounded-full h-4 w-4 border-b-2 border-blue-600 mr-2"}),"请求中..."]})]}),e.jsxs("div",{className:"bg-gray-50 p-4 rounded border max-h-64 overflow-y-auto",children:[e.jsx("h4",{className:"font-medium mb-2",children:"请求日志:"}),d.length===0?e.jsx("p",{className:"text-gray-500",children:"点击上方按钮发起 HTTP 请求..."}):e.jsx("div",{className:"space-y-1",children:d.map((t,c)=>e.jsx("div",{className:"text-sm font-mono text-gray-700",children:t},c))})]})]})})},f=()=>{const[d,l]=i.useState(""),[a,o]=i.useState(""),[n,r]=i.useState({user:!1,list:!1}),h=i.useCallback(async()=>{r(s=>({...s,user:!0})),l("正在获取用户信息...");try{await new Promise(p=>setTimeout(p,1e3)),l(`✅ 用户信息获取成功:
${JSON.stringify({data:{id:1,name:"张三",email:"zhangsan@example.com"},message:"获取成功",code:200}.data,null,2)}`)}catch(s){l(`❌ 获取失败: ${s}`)}finally{r(s=>({...s,user:!1}))}},[]),x=i.useCallback(async()=>{r(s=>({...s,list:!0})),o("正在获取用户列表...");try{await new Promise(p=>setTimeout(p,1200));const s={data:[{id:1,name:"张三",email:"zhangsan@example.com"},{id:2,name:"李四",email:"lisi@example.com"},{id:3,name:"王五",email:"wangwu@example.com"}],message:"获取成功",code:200};o(`✅ 用户列表获取成功 (${s.data.length} 条记录):
${JSON.stringify(s.data,null,2)}`)}catch(s){o(`❌ 获取失败: ${s}`)}finally{r(s=>({...s,list:!1}))}},[]);return e.jsx("div",{className:"space-y-6",children:e.jsxs("div",{className:"bg-white p-6 rounded-lg shadow-sm border",children:[e.jsx("h3",{className:"text-lg font-semibold mb-4",children:"TypeScript 泛型支持演示"}),e.jsxs("div",{className:"grid md:grid-cols-2 gap-6",children:[e.jsxs("div",{children:[e.jsx("h4",{className:"font-medium mb-3",children:"获取单个用户 (User)"}),e.jsx("button",{onClick:h,disabled:n.user,className:"px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 disabled:opacity-50 mb-3",children:n.user?"获取中...":"获取用户信息"}),e.jsx("div",{className:"bg-gray-50 p-3 rounded border min-h-[120px]",children:e.jsx("pre",{className:"text-sm text-gray-700 whitespace-pre-wrap",children:d||"点击按钮获取用户信息..."})})]}),e.jsxs("div",{children:[e.jsx("h4",{className:"font-medium mb-3",children:"获取用户列表 (User[])"}),e.jsx("button",{onClick:x,disabled:n.list,className:"px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600 disabled:opacity-50 mb-3",children:n.list?"获取中...":"获取用户列表"}),e.jsx("div",{className:"bg-gray-50 p-3 rounded border min-h-[120px]",children:e.jsx("pre",{className:"text-sm text-gray-700 whitespace-pre-wrap",children:a||"点击按钮获取用户列表..."})})]})]}),e.jsxs("div",{className:"mt-4 p-4 bg-blue-50 rounded",children:[e.jsx("h5",{className:"font-medium text-blue-800 mb-2",children:"💡 泛型优势:"}),e.jsxs("ul",{className:"text-sm text-blue-700 space-y-1",children:[e.jsxs("li",{children:["• ",e.jsx("strong",{children:"类型安全:"})," 编译时检查返回数据类型"]}),e.jsxs("li",{children:["• ",e.jsx("strong",{children:"智能提示:"})," IDE 提供准确的代码补全"]}),e.jsxs("li",{children:["• ",e.jsx("strong",{children:"重用性:"})," 同一个方法支持不同的数据类型"]}),e.jsxs("li",{children:["• ",e.jsx("strong",{children:"可维护性:"})," 类型变更时自动检测相关代码"]})]})]})]})})},N=()=>{const d=e.jsxs("div",{className:"space-y-4",children:[e.jsxs("div",{children:[e.jsx("h3",{className:"text-lg font-semibold mb-2",children:"核心概念"}),e.jsxs("ul",{className:"list-disc list-inside space-y-1 text-gray-700",children:[e.jsxs("li",{children:[e.jsx("strong",{children:"HTTP 方法封装"}),"：将原生的 fetch 或 axios 方法封装成更易用的 get、post、put、delete 方法"]}),e.jsxs("li",{children:[e.jsx("strong",{children:"TypeScript 泛型支持"}),"：为每个请求方法提供类型安全的返回值类型定义"]}),e.jsxs("li",{children:[e.jsx("strong",{children:"请求取消机制"}),"：支持单个请求取消和批量取消所有进行中的请求"]}),e.jsxs("li",{children:[e.jsx("strong",{children:"统一错误处理"}),"：在方法层统一处理 HTTP 错误和网络异常"]})]})]}),e.jsxs("div",{children:[e.jsx("h3",{className:"text-lg font-semibold mb-2",children:"主要优势"}),e.jsxs("ul",{className:"list-disc list-inside space-y-1 text-gray-700",children:[e.jsxs("li",{children:[e.jsx("strong",{children:"类型安全"}),"：TypeScript 泛型确保请求和响应数据的类型正确性"]}),e.jsxs("li",{children:[e.jsx("strong",{children:"使用简便"}),"：提供简洁的 API，隐藏底层实现复杂性"]}),e.jsxs("li",{children:[e.jsx("strong",{children:"功能完整"}),"：支持请求取消、错误处理、超时控制等完整功能"]}),e.jsxs("li",{children:[e.jsx("strong",{children:"易于扩展"}),"：可以轻松添加新的 HTTP 方法或功能增强"]})]})]}),e.jsxs("div",{children:[e.jsx("h3",{className:"text-lg font-semibold mb-2",children:"适用场景"}),e.jsxs("ul",{className:"list-disc list-inside space-y-1 text-gray-700",children:[e.jsxs("li",{children:[e.jsx("strong",{children:"RESTful API 调用"}),"：标准的 CRUD 操作和资源管理"]}),e.jsxs("li",{children:[e.jsx("strong",{children:"TypeScript 项目"}),"：需要严格类型检查的前端应用"]}),e.jsxs("li",{children:[e.jsx("strong",{children:"复杂交互场景"}),"：需要频繁取消请求的用户界面"]}),e.jsxs("li",{children:[e.jsx("strong",{children:"团队协作项目"}),"：需要统一 API 调用规范的大型项目"]})]})]}),e.jsxs("div",{children:[e.jsx("h3",{className:"text-lg font-semibold mb-2",children:"注意事项"}),e.jsxs("ul",{className:"list-disc list-inside space-y-1 text-gray-700",children:[e.jsxs("li",{children:[e.jsx("strong",{children:"内存泄漏"}),"：确保组件卸载时取消所有进行中的请求"]}),e.jsxs("li",{children:[e.jsx("strong",{children:"错误边界"}),"：合理处理网络错误，避免应用崩溃"]}),e.jsxs("li",{children:[e.jsx("strong",{children:"类型定义"}),"：保持接口类型定义与后端 API 的同步"]}),e.jsxs("li",{children:[e.jsx("strong",{children:"性能考虑"}),"：避免不必要的请求重复发送"]})]})]})]}),l=[{title:"HTTP 方法封装",component:e.jsx(P,{}),description:"演示 GET、POST、PUT、DELETE 等 HTTP 方法的封装和使用",observationPoints:["点击不同的 HTTP 方法按钮，观察请求的发送和响应过程","注意每种方法的请求参数和响应数据格式差异","观察请求取消功能的实现和效果"],keyPoints:["每种 HTTP 方法都有对应的封装函数","支持 AbortController 实现请求取消","统一的错误处理和响应格式"],commonTraps:["忘记处理请求取消的清理工作","没有统一的错误处理机制","缺乏请求和响应的类型定义"],solutions:["使用 AbortController 管理请求生命周期","在方法层统一处理 HTTP 状态码和错误","为每个 API 定义明确的 TypeScript 接口"],codeExample:{code:`// HTTP 方法封装示例
class ApiClient {
  private baseURL: string;
  private abortControllers: Map<string, AbortController> = new Map();

  async get<T>(url: string, config?: RequestConfig): Promise<ApiResponse<T>> {
    const controller = new AbortController();
    const requestId = this.generateRequestId();
    this.abortControllers.set(requestId, controller);

    try {
      const axiosInstance = axios.create({
        baseURL: this.baseURL,
        signal: controller.signal,
        ...config
      });
      
      const response = await axiosInstance.get(url);
      const data = response.data;
      return data as ApiResponse<T>;
    } finally {
      this.abortControllers.delete(requestId);
    }
  }

  // 取消所有请求
  cancelAllRequests(): void {
    this.abortControllers.forEach(controller => controller.abort());
    this.abortControllers.clear();
  }
}`,language:"typescript",highlightLines:[6,11,17,28]}},{title:"TypeScript 泛型支持",component:e.jsx(f,{}),description:"演示如何使用 TypeScript 泛型为 HTTP 方法提供类型安全",observationPoints:["观察不同数据类型（单个对象 vs 数组）的请求和响应","注意 TypeScript 如何提供类型检查和智能提示","查看响应数据的结构化展示"],keyPoints:["泛型 <T> 提供编译时类型检查","ApiResponse<T> 确保响应数据类型安全","支持复杂数据结构的类型定义"],commonTraps:["类型定义与实际 API 响应不匹配","忘记为复杂数据结构定义接口","过度使用 any 类型失去类型安全"],solutions:["使用工具自动生成 API 类型定义","建立完整的接口类型库","定期验证类型定义与 API 的一致性"],codeExample:{code:`// TypeScript 泛型支持示例
interface User {
  id: number;
  name: string;
  email: string;
}

interface ApiResponse<T> {
  data: T;
  message: string;
  code: number;
}

// 泛型方法定义
class TypedApiClient {
  async get<T>(url: string): Promise<ApiResponse<T>> {
    const response = await axios.get(url);
    return response.data as ApiResponse<T>;
  }

  async post<T, D = any>(url: string, data: D): Promise<ApiResponse<T>> {
    const response = await axios.post(url, data, {
      headers: { 'Content-Type': 'application/json' }
    });
    return response.data as ApiResponse<T>;
  }
}

// 使用示例
const api = new TypedApiClient();

// 类型安全的 API 调用
const user = await api.get<User>('/api/users/1');
const users = await api.get<User[]>('/api/users');
const result = await api.post<{success: boolean}, Partial<User>>('/api/users', {
  name: '新用户',
  email: 'newuser@example.com'
});`,language:"typescript",highlightLines:[8,16,21,33,34,35]}}],a={concepts:["方法层是请求封装的核心，提供统一的 HTTP 方法接口","TypeScript 泛型确保类型安全，提高开发效率和代码质量","AbortController 提供请求取消能力，避免内存泄漏","统一的错误处理机制简化异常情况的处理"],steps:["定义基础的 HTTP 方法接口（get、post、put、delete）","为每个方法添加 TypeScript 泛型支持","实现 AbortController 请求取消机制","建立统一的错误处理和响应格式","添加请求配置选项（超时、重试等）","实现批量请求取消功能"],tips:["使用 AbortController 管理请求生命周期，避免内存泄漏","为常用的 API 响应格式定义通用的泛型接口","在组件卸载时记得取消所有进行中的请求","使用 TypeScript 的联合类型处理多种可能的响应格式"]},o={questions:[{question:"如何设计一个支持 TypeScript 泛型的 HTTP 方法封装？",answer:"设计要点：1) 定义通用的 ApiResponse<T> 接口；2) 为每个 HTTP 方法添加泛型参数 <T>；3) 使用 Promise<ApiResponse<T>> 作为返回类型；4) 提供类型断言确保运行时类型安全；5) 建立完整的接口类型库。"},{question:"AbortController 在请求取消中的作用是什么？",answer:"AbortController 作用：1) 提供标准的请求取消机制；2) 避免组件卸载后的内存泄漏；3) 支持批量取消多个请求；4) 与 fetch API 原生集成；5) 可以设置超时自动取消；6) 提供取消事件监听能力。"},{question:"如何在方法层实现统一的错误处理？",answer:"统一错误处理策略：1) 在每个 HTTP 方法中捕获异常；2) 根据 HTTP 状态码分类处理错误；3) 统一错误响应格式；4) 提供错误重试机制；5) 记录错误日志用于调试；6) 向上层抛出标准化的错误对象。"},{question:"方法层与拦截器层的职责如何划分？",answer:"职责划分：方法层负责：HTTP 方法封装、泛型支持、请求取消、基础错误处理；拦截器层负责：全局配置注入、统一数据转换、跨请求的通用逻辑、全局错误拦截。方法层更关注单个请求的处理，拦截器层关注全局的请求处理。"}],keyPoints:["方法层是请求封装的核心，提供统一的 API 接口","TypeScript 泛型提供编译时类型检查和智能提示","AbortController 是现代浏览器标准的请求取消方案","统一错误处理简化异常情况的处理逻辑"]},n={dos:["为每个 HTTP 方法提供 TypeScript 泛型支持","使用 AbortController 实现请求取消功能","建立统一的 API 响应格式和错误处理","为常用数据类型定义完整的接口","在组件卸载时取消所有进行中的请求","提供请求配置选项（超时、重试等）","使用 Map 管理多个 AbortController","为复杂 API 提供专门的类型定义"],donts:["不要忽略请求取消的内存泄漏问题","不要在方法层处理业务逻辑","不要过度使用 any 类型","不要忘记处理网络异常和超时","不要让错误处理逻辑过于复杂","不要在每个方法中重复相同的逻辑","不要忽略 HTTP 状态码的处理"],patterns:["泛型模式（Generic Pattern）：使用 TypeScript 泛型提供类型安全","取消令牌模式（Cancellation Token Pattern）：使用 AbortController 管理请求生命周期","统一响应模式（Unified Response Pattern）：标准化 API 响应格式","错误处理模式（Error Handling Pattern）：统一异常处理和错误分类","配置对象模式（Options Object Pattern）：使用配置对象传递请求参数","工厂模式（Factory Pattern）：根据配置创建不同的 HTTP 客户端实例"]};return e.jsx(y,{title:"方法层",description:"学习如何封装 HTTP 方法，支持 TypeScript 泛型、请求取消和统一错误处理，构建类型安全的 API 调用层。",overview:d,examples:l,tutorial:a,interview:o,bestPractices:n})};export{N as default};
