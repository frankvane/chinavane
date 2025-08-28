import{j as e,r as d}from"./index-Bi_r7QuH.js";import{a as f}from"./index-NIGUFBhG.js";import{C as N}from"./ComponentTemplate-C5EWLtXX.js";const v=()=>{const[t,b]=d.useState("development"),[i,x]=d.useState(!1),[o,a]=d.useState(null),c={development:{baseURL:"https://jsonplaceholder.typicode.com",timeout:1e4,debug:!0,color:"bg-blue-100 border-blue-300",textColor:"text-blue-800"},staging:{baseURL:"https://jsonplaceholder.typicode.com",timeout:8e3,debug:!1,color:"bg-yellow-100 border-yellow-300",textColor:"text-yellow-800"},production:{baseURL:"https://jsonplaceholder.typicode.com",timeout:5e3,debug:!1,color:"bg-green-100 border-green-300",textColor:"text-green-800"}},g=async()=>{x(!0),a(null);try{const s=c[t],l=Date.now(),n=(await f.create({baseURL:s.baseURL,timeout:s.timeout}).get("/posts/1")).data,u=Date.now();a({success:!0,data:n,responseTime:u-l,config:s}),s.debug&&console.log(`[${t.toUpperCase()}] Request successful:`,{url:`${s.baseURL}/posts/1`,responseTime:u-l,data:n})}catch(s){const l=Date.now();a({success:!1,error:s instanceof Error?s.message:"Unknown error",responseTime:l-Date.now()}),c[t].debug&&console.error(`[${t.toUpperCase()}] Request failed:`,s)}finally{x(!1)}},r=c[t];return e.jsxs("div",{className:"space-y-4",children:[e.jsx("div",{className:"flex space-x-2 mb-4",children:Object.keys(c).map(s=>e.jsx("button",{onClick:()=>b(s),className:`px-4 py-2 rounded capitalize ${t===s?"bg-blue-500 text-white":"bg-gray-200 text-gray-700 hover:bg-gray-300"}`,children:s},s))}),e.jsxs("div",{className:`border-2 p-4 rounded-lg ${r.color}`,children:[e.jsxs("h4",{className:`font-semibold mb-3 ${r.textColor}`,children:["当前环境：",t.toUpperCase()]}),e.jsxs("div",{className:"bg-white p-4 rounded border space-y-4",children:[e.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-4",children:[e.jsxs("div",{children:[e.jsx("label",{className:"block text-sm font-medium text-gray-700 mb-1",children:"Base URL"}),e.jsx("div",{className:"p-2 bg-gray-50 rounded text-sm font-mono",children:r.baseURL})]}),e.jsxs("div",{children:[e.jsx("label",{className:"block text-sm font-medium text-gray-700 mb-1",children:"Timeout (ms)"}),e.jsx("div",{className:"p-2 bg-gray-50 rounded text-sm",children:r.timeout})]}),e.jsxs("div",{children:[e.jsx("label",{className:"block text-sm font-medium text-gray-700 mb-1",children:"Debug Mode"}),e.jsx("div",{className:"p-2 bg-gray-50 rounded text-sm",children:r.debug?"✅ 启用":"❌ 禁用"})]}),e.jsxs("div",{children:[e.jsx("label",{className:"block text-sm font-medium text-gray-700 mb-1",children:"环境标识"}),e.jsx("div",{className:`p-2 rounded text-sm font-medium ${t==="development"?"bg-blue-100 text-blue-800":t==="staging"?"bg-yellow-100 text-yellow-800":"bg-green-100 text-green-800"}`,children:t.toUpperCase()})]})]}),e.jsx("div",{className:"border-t pt-4",children:e.jsx("button",{onClick:g,disabled:i,className:`w-full py-2 px-4 rounded font-medium ${i?"bg-gray-400 text-white cursor-not-allowed":"bg-blue-500 text-white hover:bg-blue-600"}`,children:i?"测试中...":"测试当前环境配置"})}),o&&e.jsxs("div",{className:`p-3 rounded border ${o.success?"bg-green-50 border-green-200":"bg-red-50 border-red-200"}`,children:[e.jsxs("div",{className:"flex items-center justify-between mb-2",children:[e.jsx("span",{className:`font-medium ${o.success?"text-green-800":"text-red-800"}`,children:o.success?"✅ 请求成功":"❌ 请求失败"}),e.jsxs("span",{className:"text-sm text-gray-600",children:["响应时间: ",o.responseTime,"ms"]})]}),o.success?e.jsxs("div",{className:"text-sm text-green-700",children:[e.jsx("div",{className:"font-medium mb-1",children:"获取到的数据:"}),e.jsxs("div",{className:"bg-white p-2 rounded border text-xs font-mono",children:[JSON.stringify(o.data,null,2).substring(0,200),"..."]}),r.debug&&e.jsx("div",{className:"mt-2 text-xs text-green-600",children:"💡 Debug 模式已启用，详细信息已输出到控制台"})]}):e.jsxs("div",{className:"text-sm text-red-700",children:["错误信息: ",o.error]})]})]})]})]})},R=()=>{const[t,b]=d.useState(5e3),[i,x]=d.useState(!1),[o,a]=d.useState(null),[c,g]=d.useState([]),r=async()=>{x(!0),a(null);const s=Date.now(),l=Date.now();try{const n=(await f.create({baseURL:"https://jsonplaceholder.typicode.com",timeout:t}).get("/posts")).data,p=Date.now()-s,h={success:!0,responseTime:p,dataLength:n.length,message:`✅ 请求成功 (耗时: ${p}ms, 获取 ${n.length} 条数据)`};a(h),g(y=>[{id:l,timeout:t,success:!0,responseTime:p,timestamp:new Date().toLocaleTimeString()},...y.slice(0,4)])}catch(m){const n=Date.now()-s,u=m instanceof Error&&m.name==="AbortError",p={success:!1,responseTime:n,isTimeout:u,message:u?`❌ 请求超时 (超时设置: ${t}ms, 实际耗时: ${n}ms)`:`❌ 请求失败: ${m instanceof Error?m.message:"Unknown error"}`};a(p),g(h=>[{id:l,timeout:t,success:!1,responseTime:n,timestamp:new Date().toLocaleTimeString()},...h.slice(0,4)])}finally{x(!1)}};return e.jsxs("div",{className:"space-y-4",children:[e.jsxs("div",{className:"flex items-center space-x-4",children:[e.jsx("label",{className:"text-sm font-medium text-gray-700",children:"超时设置 (ms):"}),e.jsx("input",{type:"range",min:"1000",max:"10000",step:"1000",value:t,onChange:s=>b(Number(s.target.value)),className:"flex-1"}),e.jsxs("span",{className:"text-sm font-mono bg-gray-100 px-2 py-1 rounded",children:[t,"ms"]})]}),e.jsx("button",{onClick:r,disabled:i,className:`w-full py-2 px-4 rounded font-medium ${i?"bg-gray-400 text-white cursor-not-allowed":"bg-blue-500 text-white hover:bg-blue-600"}`,children:i?"测试中...":"测试超时配置"}),o&&e.jsxs("div",{className:`p-3 rounded border ${o.success?"bg-green-50 border-green-200 text-green-800":"bg-red-50 border-red-200 text-red-800"}`,children:[e.jsx("div",{className:"font-medium mb-1",children:o.message}),o.success&&e.jsxs("div",{className:"text-sm text-green-600",children:["💡 成功获取到 ",o.dataLength," 条 posts 数据"]}),!o.success&&o.isTimeout&&e.jsx("div",{className:"text-sm text-red-600",children:"💡 可以尝试增加超时时间或检查网络连接"})]}),c.length>0&&e.jsxs("div",{className:"border-t pt-4",children:[e.jsx("h5",{className:"font-medium text-gray-800 mb-2",children:"请求历史记录"}),e.jsx("div",{className:"space-y-2",children:c.map(s=>e.jsx("div",{className:`p-2 rounded text-sm border ${s.success?"bg-green-50 border-green-200 text-green-700":"bg-red-50 border-red-200 text-red-700"}`,children:e.jsxs("div",{className:"flex justify-between items-center",children:[e.jsxs("span",{className:"font-medium",children:[s.success?"✅":"❌"," ",s.timestamp]}),e.jsxs("span",{className:"text-xs",children:[s.responseTime,"ms / ",s.timeout,"ms"]})]})},s.id))})]})]})},C=()=>e.jsx(N,{title:"全局配置层",description:"学习如何配置 axios 的全局参数，包括 baseURL、timeout、环境切换等核心功能，为整个应用的请求奠定基础。",overview:e.jsx("div",{className:"space-y-4",children:e.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-6",children:[e.jsxs("div",{className:"bg-blue-50 p-4 rounded-lg border border-blue-200",children:[e.jsx("h3",{className:"font-semibold text-blue-800 mb-2",children:"🎯 核心概念"}),e.jsxs("ul",{className:"text-sm text-blue-700 space-y-1",children:[e.jsx("li",{children:"• 全局配置统一管理"}),e.jsx("li",{children:"• 环境变量动态切换"}),e.jsx("li",{children:"• 超时时间合理设置"}),e.jsx("li",{children:"• 默认请求头配置"})]})]}),e.jsxs("div",{className:"bg-green-50 p-4 rounded-lg border border-green-200",children:[e.jsx("h3",{className:"font-semibold text-green-800 mb-2",children:"✨ 主要优势"}),e.jsxs("ul",{className:"text-sm text-green-700 space-y-1",children:[e.jsx("li",{children:"• 减少重复配置代码"}),e.jsx("li",{children:"• 统一请求行为标准"}),e.jsx("li",{children:"• 便于环境切换管理"}),e.jsx("li",{children:"• 提高开发效率"})]})]}),e.jsxs("div",{className:"bg-yellow-50 p-4 rounded-lg border border-yellow-200",children:[e.jsx("h3",{className:"font-semibold text-yellow-800 mb-2",children:"🎪 适用场景"}),e.jsxs("ul",{className:"text-sm text-yellow-700 space-y-1",children:[e.jsx("li",{children:"• 多环境部署项目"}),e.jsx("li",{children:"• 大型前端应用"}),e.jsx("li",{children:"• 团队协作开发"}),e.jsx("li",{children:"• API 接口统一管理"})]})]}),e.jsxs("div",{className:"bg-red-50 p-4 rounded-lg border border-red-200",children:[e.jsx("h3",{className:"font-semibold text-red-800 mb-2",children:"⚠️ 注意事项"}),e.jsxs("ul",{className:"text-sm text-red-700 space-y-1",children:[e.jsx("li",{children:"• 避免硬编码配置"}),e.jsx("li",{children:"• 合理设置超时时间"}),e.jsx("li",{children:"• 敏感信息环境变量"}),e.jsx("li",{children:"• 配置文件版本控制"})]})]})]})}),examples:[{title:"环境配置切换",component:e.jsx(v,{}),description:"演示如何根据不同环境（开发、测试、生产）动态切换 API 配置",observationPoints:["点击不同环境按钮，观察 baseURL、timeout 等配置的变化","注意开发环境启用了 debug 模式，生产环境则关闭","不同环境使用不同的颜色主题进行区分"],keyPoints:["使用环境变量管理不同环境的配置","开发环境可以设置较长的超时时间便于调试","生产环境应关闭 debug 模式提高性能","baseURL 应该根据环境动态设置"],commonTraps:["在代码中硬编码 API 地址","所有环境使用相同的超时设置","忘记在生产环境关闭 debug 模式"],solutions:["使用 .env 文件管理环境变量","根据环境类型设置不同的超时时间","通过构建工具自动切换环境配置"],codeExample:{title:"环境配置实现",code:`// config/request.ts
import axios from 'axios';

interface RequestConfig {
  baseURL: string;
  timeout: number;
  debug: boolean;
}

const configs: Record<string, RequestConfig> = {
  development: {
    baseURL: 'https://jsonplaceholder.typicode.com',
    timeout: 10000,
    debug: true
  },
  staging: {
    baseURL: 'https://jsonplaceholder.typicode.com', 
    timeout: 8000,
    debug: false
  },
  production: {
    baseURL: 'https://jsonplaceholder.typicode.com',
    timeout: 5000,
    debug: false
  }
};

// 获取当前环境配置
const getCurrentConfig = (): RequestConfig => {
  const env = process.env.NODE_ENV || 'development';
  return configs[env] || configs.development;
};

// 创建 axios 实例
const createApiInstance = () => {
  const config = getCurrentConfig();
  
  const instance = axios.create({
    baseURL: config.baseURL,
    timeout: config.timeout,
    headers: {
      'Content-Type': 'application/json'
    }
  });
  
  // 开发环境启用请求日志
  if (config.debug) {
    instance.interceptors.request.use(request => {
      console.log('🚀 Request:', request);
      return request;
    });
    
    instance.interceptors.response.use(response => {
      console.log('✅ Response:', response);
      return response;
    });
  }
  
  return instance;
};

export default createApiInstance();`,language:"typescript",highlights:[12,17,22,29,30,35,38,47,48]}},{title:"超时配置演示",component:e.jsx(R,{}),description:"演示不同超时设置对请求行为的影响",observationPoints:["调整超时滑块，观察不同超时设置的效果","点击'模拟请求'按钮，观察请求成功或超时的结果","注意请求耗时与超时设置的关系"],keyPoints:["合理的超时设置可以提升用户体验","不同类型的请求应设置不同的超时时间","超时后应该给用户明确的错误提示","可以根据网络环境动态调整超时时间"],commonTraps:["设置过短的超时时间导致正常请求失败","设置过长的超时时间影响用户体验","所有请求使用相同的超时设置"],solutions:["根据请求类型设置合适的超时时间","提供超时重试机制","根据网络状况动态调整超时设置"],codeExample:{title:"超时配置实现",code:`// utils/request.ts
import axios from 'axios';

// 创建 axios 实例
const request = axios.create({
  baseURL: 'https://jsonplaceholder.typicode.com',
  timeout: 5000, // 默认超时 5 秒
  headers: {
    'Content-Type': 'application/json'
  }
});

// 针对不同类型请求设置不同超时
const createRequestWithTimeout = (timeout: number) => {
  return axios.create({
    baseURL: 'https://jsonplaceholder.typicode.com',
    timeout,
    headers: {
      'Content-Type': 'application/json'
    }
  });
};

// 快速请求实例（1秒超时，适用于简单查询）
export const quickRequest = createRequestWithTimeout(1000);

// 普通请求实例（5秒超时，适用于常规 API）
export const normalRequest = createRequestWithTimeout(5000);

// 长时间请求实例（30秒超时，适用于复杂操作）
export const longRequest = createRequestWithTimeout(30000);

// 使用示例
export const fetchPosts = () => {
  return normalRequest.get('/posts');
};

export const fetchPostById = (id: number) => {
  return quickRequest.get(\`/posts/\${id}\`);
};

export const createPost = (data: any) => {
  return longRequest.post('/posts', data);
};

export default request;`,language:"typescript",highlights:[6,7,16,17,24,27,30,33,36,39,42]}}],tutorial:{concepts:["axios.create() 创建实例的基本用法","baseURL 的作用和配置方法","timeout 超时设置的重要性","环境变量在配置中的应用","默认请求头的统一设置"],steps:["安装 axios 依赖包","创建配置文件定义不同环境的参数","使用 axios.create() 创建请求实例","配置 baseURL、timeout 等全局参数","设置默认请求头信息","导出配置好的实例供全局使用"],tips:["使用 TypeScript 为配置对象定义类型","将敏感信息放在环境变量中而不是代码里","为不同类型的请求创建不同的实例","在开发环境可以设置较长的超时时间便于调试","使用配置文件统一管理所有环境的参数"]},interview:{questions:[{question:"为什么要使用 axios.create() 而不是直接使用 axios？",answer:"axios.create() 可以创建一个新的 axios 实例，每个实例可以有自己的配置。这样可以为不同的 API 服务创建不同的实例，避免全局配置冲突，提高代码的可维护性。"},{question:"如何在不同环境中切换 API 地址？",answer:"可以使用环境变量来管理不同环境的配置。通过 process.env.NODE_ENV 获取当前环境，然后根据环境加载对应的配置文件，或者使用 .env 文件定义环境变量。"},{question:"超时时间应该如何设置？",answer:"超时时间应该根据请求类型和网络环境来设置。一般 API 请求设置 5-10 秒，文件上传可以设置 30-60 秒。过短会导致正常请求失败，过长会影响用户体验。"},{question:"全局配置有哪些常见的参数？",answer:"常见参数包括：baseURL（API 基础地址）、timeout（超时时间）、headers（默认请求头）、withCredentials（是否携带 cookie）、responseType（响应数据类型）等。"}],keyPoints:["axios.create() 用于创建独立的请求实例","baseURL 统一管理 API 地址前缀","timeout 设置要考虑请求类型和用户体验","环境变量用于管理不同环境的配置","全局配置可以减少重复代码"]},bestPractices:{dos:["使用环境变量管理不同环境的配置","为不同类型的请求创建不同的实例","设置合理的超时时间","使用 TypeScript 定义配置类型","将配置文件单独管理","在开发环境启用详细的错误信息"],donts:["不要在代码中硬编码 API 地址","不要所有请求使用相同的超时设置","不要在生产环境暴露敏感信息","不要忽略错误处理配置","不要在全局配置中包含业务逻辑"],patterns:["配置工厂模式：根据环境创建不同配置","单例模式：确保配置实例的唯一性","策略模式：根据请求类型选择不同配置","建造者模式：逐步构建复杂的配置对象"]}});export{C as default};
