import{j as e,r as m}from"./index-Cnne2xOM.js";import{C as j}from"./ComponentTemplate-iqsAHbUA.js";const y=()=>{const[i,p]=m.useState([]),[x,u]=m.useState(1),l=(a,c)=>{const h=a>=200&&a<300?"success":"error",d={id:x,status:a,message:c,timestamp:new Date().toLocaleTimeString(),type:h};p(o=>[d,...o.slice(0,4)]),u(o=>o+1)};return e.jsxs("div",{className:"space-y-4",children:[e.jsxs("div",{className:"bg-blue-50 p-4 rounded-lg border border-blue-200",children:[e.jsx("h4",{className:"font-semibold text-blue-800 mb-3",children:"模拟 API 响应"}),e.jsxs("div",{className:"grid grid-cols-2 md:grid-cols-4 gap-2",children:[e.jsx("button",{onClick:()=>l(200,"请求成功"),className:"px-3 py-2 bg-green-500 text-white rounded text-sm hover:bg-green-600",children:"200 成功"}),e.jsx("button",{onClick:()=>l(401,"未授权访问"),className:"px-3 py-2 bg-red-500 text-white rounded text-sm hover:bg-red-600",children:"401 未授权"}),e.jsx("button",{onClick:()=>l(403,"权限不足"),className:"px-3 py-2 bg-orange-500 text-white rounded text-sm hover:bg-orange-600",children:"403 禁止"}),e.jsx("button",{onClick:()=>l(500,"服务器错误"),className:"px-3 py-2 bg-purple-500 text-white rounded text-sm hover:bg-purple-600",children:"500 错误"})]})]}),e.jsxs("div",{className:"bg-white border rounded-lg",children:[e.jsx("div",{className:"p-4 border-b bg-gray-50",children:e.jsx("h4",{className:"font-semibold text-gray-800",children:"响应处理记录"})}),e.jsx("div",{className:"p-4",children:i.length===0?e.jsx("p",{className:"text-gray-500 text-center py-4",children:"暂无响应记录"}):e.jsx("div",{className:"space-y-2",children:i.map(a=>e.jsx("div",{className:`p-3 rounded border ${a.type==="success"?"bg-green-50 border-green-200":"bg-red-50 border-red-200"}`,children:e.jsxs("div",{className:"flex items-center justify-between",children:[e.jsxs("div",{className:"flex items-center space-x-3",children:[e.jsxs("span",{className:"text-sm font-mono text-gray-600",children:["#",a.id]}),e.jsx("span",{className:`px-2 py-1 rounded text-xs font-medium ${a.type==="success"?"bg-green-100 text-green-800":"bg-red-100 text-red-800"}`,children:a.status}),e.jsx("span",{className:"font-medium",children:a.message}),e.jsx("span",{className:`text-xs ${a.type==="success"?"text-green-600":"text-red-600"}`,children:a.type==="success"?"✅ 正常处理":"❌ 错误拦截"})]}),e.jsx("span",{className:"text-sm text-gray-500",children:a.timestamp})]})},a.id))})})]}),e.jsxs("div",{className:"bg-yellow-50 p-4 rounded-lg border border-yellow-200",children:[e.jsx("h5",{className:"font-medium text-yellow-800 mb-2",children:"💡 错误处理说明"}),e.jsxs("ul",{className:"text-sm text-yellow-700 space-y-1",children:[e.jsxs("li",{children:["• ",e.jsx("strong",{children:"2xx:"})," 成功响应，正常返回数据"]}),e.jsxs("li",{children:["• ",e.jsx("strong",{children:"401:"})," 未授权，自动跳转登录页面"]}),e.jsxs("li",{children:["• ",e.jsx("strong",{children:"403:"})," 权限不足，显示权限错误提示"]}),e.jsxs("li",{children:["• ",e.jsx("strong",{children:"5xx:"})," 服务器错误，显示通用错误信息"]})]})]})]})},f=()=>{const[i,p]=m.useState(null),[x,u]=m.useState(null),[l,a]=m.useState([]),c=t=>{let r;const n=[];switch(t){case"user":r={code:200,message:"success",data:{user_id:123,user_name:"john_doe",created_at:"2024-01-15T10:30:00Z",is_active:1}};break;case"list":r={code:200,message:"success",data:{items:[{id:1,name:"Item 1",price:"19.99"},{id:2,name:"Item 2",price:"29.99"}],total_count:2,page_size:10}};break;case"nested":r={code:200,message:"success",data:{user_profile:{basic_info:{first_name:"John",last_name:"Doe"},settings:{theme_mode:"dark",notification_enabled:1}}}};break}p(r),n.push("📥 接收原始响应数据");const s=h(r,n);u(s),a(n)},h=(t,r)=>{r.push("🔄 开始数据格式化处理");const n=t.data;r.push("📤 提取 data 字段");const s=d(n);r.push("🐪 字段名转换为驼峰格式");const g=o(s);return r.push("🔢 数据类型标准化处理"),r.push("✅ 数据格式化完成"),g},d=t=>Array.isArray(t)?t.map(d):t!==null&&typeof t=="object"?Object.keys(t).reduce((r,n)=>{const s=n.replace(/_([a-z])/g,(g,b)=>b.toUpperCase());return r[s]=d(t[n]),r},{}):t,o=t=>Array.isArray(t)?t.map(o):t!==null&&typeof t=="object"?Object.keys(t).reduce((r,n)=>{let s=t[n];return typeof s=="string"&&/^\d+(\.\d+)?$/.test(s)?s=parseFloat(s):s===1||s==="1"?s=!0:s===0||s==="0"?s=!1:typeof s=="string"&&/\d{4}-\d{2}-\d{2}T\d{2}:\d{2}:\d{2}/.test(s)?s=new Date(s):typeof s=="object"&&(s=o(s)),r[n]=s,r},{}):t;return e.jsxs("div",{className:"space-y-4",children:[e.jsxs("div",{className:"flex justify-between items-center",children:[e.jsx("h4",{className:"font-semibold text-gray-800",children:"数据格式化演示"}),e.jsxs("div",{className:"space-x-2",children:[e.jsx("button",{onClick:()=>c("user"),className:"px-3 py-2 bg-blue-500 text-white rounded text-sm hover:bg-blue-600",children:"用户数据"}),e.jsx("button",{onClick:()=>c("list"),className:"px-3 py-2 bg-green-500 text-white rounded text-sm hover:bg-green-600",children:"列表数据"}),e.jsx("button",{onClick:()=>c("nested"),className:"px-3 py-2 bg-purple-500 text-white rounded text-sm hover:bg-purple-600",children:"嵌套数据"})]})]}),l.length>0&&e.jsxs("div",{className:"bg-gray-900 text-green-400 p-4 rounded-lg font-mono text-sm",children:[e.jsx("div",{className:"mb-2 text-green-300",children:"📊 数据处理日志:"}),e.jsx("div",{className:"space-y-1",children:l.map((t,r)=>e.jsx("div",{className:"text-blue-400",children:t},r))})]}),i&&x&&e.jsxs("div",{className:"grid grid-cols-1 lg:grid-cols-2 gap-4",children:[e.jsxs("div",{className:"bg-red-50 p-4 rounded-lg border border-red-200",children:[e.jsx("h5",{className:"font-medium text-red-800 mb-2",children:"📥 原始响应数据"}),e.jsx("pre",{className:"text-xs text-red-700 overflow-auto max-h-64",children:JSON.stringify(i,null,2)})]}),e.jsxs("div",{className:"bg-green-50 p-4 rounded-lg border border-green-200",children:[e.jsx("h5",{className:"font-medium text-green-800 mb-2",children:"✨ 格式化后数据"}),e.jsx("pre",{className:"text-xs text-green-700 overflow-auto max-h-64",children:JSON.stringify(x,null,2)})]})]})]})},w=()=>e.jsx(j,{title:"响应拦截器",description:"学习如何使用 axios 响应拦截器进行统一错误处理、数据格式化、状态码处理等响应数据的统一处理。",overview:e.jsx("div",{className:"space-y-4",children:e.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-6",children:[e.jsxs("div",{className:"bg-blue-50 p-4 rounded-lg border border-blue-200",children:[e.jsx("h3",{className:"font-semibold text-blue-800 mb-2",children:"🎯 核心概念"}),e.jsxs("ul",{className:"text-sm text-blue-700 space-y-1",children:[e.jsx("li",{children:"• 响应拦截器统一处理"}),e.jsx("li",{children:"• HTTP 状态码分类处理"}),e.jsx("li",{children:"• 数据格式标准化"}),e.jsx("li",{children:"• 错误信息统一封装"})]})]}),e.jsxs("div",{className:"bg-green-50 p-4 rounded-lg border border-green-200",children:[e.jsx("h3",{className:"font-semibold text-green-800 mb-2",children:"✨ 主要优势"}),e.jsxs("ul",{className:"text-sm text-green-700 space-y-1",children:[e.jsx("li",{children:"• 统一错误处理逻辑"}),e.jsx("li",{children:"• 自动数据格式转换"}),e.jsx("li",{children:"• 减少重复代码编写"}),e.jsx("li",{children:"• 提升开发效率"})]})]}),e.jsxs("div",{className:"bg-yellow-50 p-4 rounded-lg border border-yellow-200",children:[e.jsx("h3",{className:"font-semibold text-yellow-800 mb-2",children:"🎪 适用场景"}),e.jsxs("ul",{className:"text-sm text-yellow-700 space-y-1",children:[e.jsx("li",{children:"• API 响应格式不统一"}),e.jsx("li",{children:"• 需要统一错误处理"}),e.jsx("li",{children:"• 数据格式转换需求"}),e.jsx("li",{children:"• 状态码统一管理"})]})]}),e.jsxs("div",{className:"bg-red-50 p-4 rounded-lg border border-red-200",children:[e.jsx("h3",{className:"font-semibold text-red-800 mb-2",children:"⚠️ 注意事项"}),e.jsxs("ul",{className:"text-sm text-red-700 space-y-1",children:[e.jsx("li",{children:"• 避免过度处理响应数据"}),e.jsx("li",{children:"• 注意错误处理的优先级"}),e.jsx("li",{children:"• 保持数据转换的一致性"}),e.jsx("li",{children:"• 合理处理异常情况"})]})]})]})}),examples:[{title:"统一错误处理",component:e.jsx(y,{}),description:"演示如何在响应拦截器中根据状态码进行统一错误处理",observationPoints:["点击不同状态码按钮，观察错误处理的不同策略","注意成功响应和错误响应的不同处理方式","观察错误信息的统一格式化"],keyPoints:["响应拦截器会在收到响应后立即执行","可以根据状态码进行不同的处理策略","401 错误通常需要跳转到登录页面","5xx 错误需要显示用户友好的错误信息"],commonTraps:["没有区分不同类型的错误","错误处理逻辑过于复杂","忘记处理网络错误等异常情况"],solutions:["建立错误码映射表","使用策略模式处理不同错误","实现错误重试机制"],codeExample:{title:"错误处理实现",code:`// utils/request.ts
import axios from 'axios';
import { message } from 'antd';
import { history } from '@/utils/history';

const apiInstance = axios.create({
  baseURL: 'https://jsonplaceholder.typicode.com',
  timeout: 5000
});

// 响应拦截器
apiInstance.interceptors.response.use(
  (response) => {
    // 2xx 状态码会进入这里
    return response.data;
  },
  (error) => {
    // 非 2xx 状态码会进入这里
    const { response } = error;
    
    if (response) {
      switch (response.status) {
        case 401:
          message.error('登录已过期，请重新登录');
          history.push('/login');
          break;
        case 403:
          message.error('权限不足，无法访问');
          break;
        case 500:
          message.error('服务器错误，请稍后重试');
          break;
        default:
          message.error(response.data?.message || '请求失败');
      }
    } else {
      message.error('网络错误，请检查网络连接');
    }
    
    return Promise.reject(error);
  }
);`,language:"typescript",highlights:[11,20,22,25,28,31]}},{title:"数据格式化处理",component:e.jsx(f,{}),description:"演示如何在响应拦截器中进行数据格式标准化处理",observationPoints:["点击不同数据类型按钮，观察数据转换过程","注意原始数据和格式化后数据的差异","观察字段名从下划线转换为驼峰格式","注意数据类型的自动转换（字符串转数字、布尔值等）"],keyPoints:["统一数据格式可以简化前端处理逻辑","字段名转换（下划线转驼峰）符合前端命名规范","数据类型转换可以避免类型错误","日期字符串自动转换为 Date 对象"],commonTraps:["过度转换导致数据丢失","转换逻辑不够健壮","没有考虑嵌套对象的处理"],solutions:["使用递归处理嵌套数据","添加数据验证和容错机制","保留原始数据的备份"],codeExample:{title:"数据格式化实现",code:`// utils/request.ts
import axios from 'axios';

const apiInstance = axios.create({
  baseURL: process.env.REACT_APP_API_URL,
  timeout: 5000
});

// 字段名转换（下划线转驼峰）
const convertKeysToCamelCase = (obj: any): any => {
  if (Array.isArray(obj)) {
    return obj.map(convertKeysToCamelCase);
  } else if (obj !== null && typeof obj === 'object') {
    return Object.keys(obj).reduce((result, key) => {
      const camelKey = key.replace(/_([a-z])/g, (_, letter) => 
        letter.toUpperCase()
      );
      result[camelKey] = convertKeysToCamelCase(obj[key]);
      return result;
    }, {} as any);
  }
  return obj;
};

// 数据类型处理
const processDataTypes = (obj: any): any => {
  if (Array.isArray(obj)) {
    return obj.map(processDataTypes);
  } else if (obj !== null && typeof obj === 'object') {
    return Object.keys(obj).reduce((result, key) => {
      let value = obj[key];
      
      // 数字字符串转数字
      if (typeof value === 'string' && /^\\d+(\\.\\d+)?$/.test(value)) {
        value = parseFloat(value);
      }
      // 布尔值转换
      else if (value === 1 || value === '1') {
        value = true;
      } else if (value === 0 || value === '0') {
        value = false;
      }
      
      result[key] = typeof value === 'object' ? 
        processDataTypes(value) : value;
      return result;
    }, {} as any);
  }
  return obj;
};

// 响应拦截器
apiInstance.interceptors.response.use(
  (response) => {
    let data = response.data;
    
    // 提取实际数据
    if (data.code === 200 && data.data) {
      data = data.data;
    }
    
    // 数据格式化
    data = convertKeysToCamelCase(data);
    data = processDataTypes(data);
    
    return data;
  },
  (error) => Promise.reject(error)
);`,language:"typescript",highlights:[10,25,34,37,50,58,59]}}],tutorial:{concepts:["axios 响应拦截器的工作原理","HTTP 状态码的分类和处理策略","数据格式标准化的必要性","错误处理的最佳实践","数据类型转换的实现方法"],steps:["创建 axios 实例","使用 interceptors.response.use() 添加拦截器","在成功回调中处理正常响应","在错误回调中处理异常响应","实现数据格式标准化","添加错误分类处理逻辑","测试各种响应场景"],tips:["响应拦截器应该保持数据处理的一致性","错误处理要考虑用户体验","数据转换要保证健壮性","合理使用 TypeScript 类型定义","在开发环境可以保留详细的错误信息"]},interview:{questions:[{question:"响应拦截器的执行时机是什么？",answer:"响应拦截器在收到服务器响应后、Promise 解析之前执行。成功的响应（2xx 状态码）会进入第一个回调函数，失败的响应会进入第二个回调函数。"},{question:"如何在响应拦截器中处理不同的 HTTP 状态码？",answer:"在错误回调函数中通过 error.response.status 获取状态码，然后使用 switch 语句或策略模式进行分类处理。例如 401 跳转登录，403 显示权限错误，5xx 显示服务器错误。"},{question:"为什么要在响应拦截器中进行数据格式化？",answer:"统一数据格式可以简化前端处理逻辑，避免在每个组件中重复处理。常见的格式化包括字段名转换（下划线转驼峰）、数据类型转换、提取嵌套数据等。"},{question:"响应拦截器中如何处理网络错误？",answer:"网络错误时 error.response 为 undefined，需要单独处理。通常显示网络连接错误提示，并可以实现自动重试机制。"}],keyPoints:["响应拦截器在收到响应后执行，可以统一处理响应数据","根据 HTTP 状态码进行分类错误处理","数据格式标准化可以简化前端处理逻辑","错误处理要考虑用户体验和业务需求","网络错误需要单独处理和提示"]},bestPractices:{dos:["根据状态码进行分类错误处理","统一数据格式和字段命名规范","提供用户友好的错误提示","保持数据转换的一致性","合理处理网络异常情况","在开发环境保留详细错误信息"],donts:["不要过度处理响应数据","不要忽略网络错误的处理","不要在拦截器中执行复杂业务逻辑","不要破坏原始数据结构","不要忘记错误的向上传递"],patterns:["策略模式：根据状态码选择处理策略","适配器模式：统一不同 API 的数据格式","装饰器模式：为响应数据添加额外信息","责任链模式：多层错误处理机制"]}});export{w as default};
