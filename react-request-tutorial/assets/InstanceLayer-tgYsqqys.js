import{r as l,j as e}from"./index-C7SuDyTR.js";import{C as h}from"./ComponentTemplate-BzrYXZsv.js";import{a as v}from"./index-NIGUFBhG.js";const y=()=>{const[s,m]=l.useState("posts"),[i,c]=l.useState(!1),[t,d]=l.useState(null),o={posts:{name:"Posts API 实例",baseURL:"https://jsonplaceholder.typicode.com",timeout:5e3,headers:{"Content-Type":"application/json"},description:"用于处理文章相关的 API 请求",color:"bg-blue-100 border-blue-300",textColor:"text-blue-800",features:["文章列表获取","文章详情查询","文章创建更新"],endpoint:"/posts",testData:{title:"Test Post",body:"This is a test post",userId:1}},users:{name:"Users API 实例",baseURL:"https://jsonplaceholder.typicode.com",timeout:8e3,headers:{"Content-Type":"application/json","X-User-Agent":"MyApp/1.0"},description:"专门处理用户相关的 API 请求",color:"bg-green-100 border-green-300",textColor:"text-green-800",features:["用户信息管理","用户认证","权限控制"],endpoint:"/users",testData:{name:"Test User",email:"test@example.com",phone:"123-456-7890"}},photos:{name:"Photos API 实例",baseURL:"https://jsonplaceholder.typicode.com",timeout:15e3,headers:{"Content-Type":"application/json",Accept:"application/json"},description:"处理图片和媒体文件相关的 API 请求",color:"bg-purple-100 border-purple-300",textColor:"text-purple-800",features:["图片上传下载","缩略图生成","媒体文件管理"],endpoint:"/photos",testData:{title:"Test Photo",url:"https://via.placeholder.com/600/92c952",thumbnailUrl:"https://via.placeholder.com/150/92c952"}}},p=async()=>{c(!0),d(null);const n=o[s],r=Date.now();try{const g=(await v.create({baseURL:n.baseURL,timeout:n.timeout,headers:n.headers}).get(`${n.endpoint}?_limit=5`)).data,b=Date.now();d({success:!0,data:g.slice(0,3),responseTime:b-r,totalCount:g.length})}catch(u){const x=Date.now();d({success:!1,error:u instanceof Error?u.message:"Unknown error",responseTime:x-r})}finally{c(!1)}},a=o[s];return e.jsxs("div",{className:"space-y-4",children:[e.jsx("div",{className:"flex space-x-2 mb-4",children:Object.entries(o).map(([n,r])=>e.jsx("button",{onClick:()=>m(n),className:`px-4 py-2 rounded text-sm ${s===n?"bg-blue-500 text-white":"bg-gray-200 text-gray-700 hover:bg-gray-300"}`,children:r.name},n))}),e.jsxs("div",{className:`border-2 p-4 rounded-lg ${a.color}`,children:[e.jsx("h4",{className:`font-semibold mb-2 ${a.textColor}`,children:a.name}),e.jsx("p",{className:`text-sm mb-4 ${a.textColor}`,children:a.description}),e.jsxs("div",{className:"bg-white p-4 rounded border",children:[e.jsxs("div",{className:"grid grid-cols-1 lg:grid-cols-2 gap-4",children:[e.jsxs("div",{children:[e.jsx("h5",{className:"font-medium text-gray-800 mb-2",children:"配置信息"}),e.jsxs("div",{className:"space-y-2",children:[e.jsxs("div",{children:[e.jsx("span",{className:"text-xs text-gray-600",children:"Base URL:"}),e.jsx("div",{className:"p-2 bg-gray-50 rounded text-sm font-mono",children:a.baseURL})]}),e.jsxs("div",{children:[e.jsx("span",{className:"text-xs text-gray-600",children:"Timeout:"}),e.jsxs("div",{className:"p-2 bg-gray-50 rounded text-sm",children:[a.timeout,"ms"]})]})]})]}),e.jsxs("div",{children:[e.jsx("h5",{className:"font-medium text-gray-800 mb-2",children:"请求头"}),e.jsx("div",{className:"space-y-1",children:Object.entries(a.headers).map(([n,r])=>e.jsxs("div",{className:"flex text-sm",children:[e.jsxs("span",{className:"text-gray-600 w-24 flex-shrink-0",children:[n,":"]}),e.jsx("span",{className:"font-mono text-gray-800 break-all",children:r})]},n))})]})]}),e.jsxs("div",{className:"mt-4",children:[e.jsx("h5",{className:"font-medium text-gray-800 mb-2",children:"特性"}),e.jsx("div",{className:"flex flex-wrap gap-2",children:a.features.map((n,r)=>e.jsx("span",{className:"px-2 py-1 bg-gray-100 text-gray-700 text-xs rounded",children:n},r))})]}),e.jsx("div",{className:"border-t pt-4 mt-4",children:e.jsx("button",{onClick:p,disabled:i,className:`w-full py-2 px-4 rounded font-medium ${i?"bg-gray-400 text-white cursor-not-allowed":"bg-blue-500 text-white hover:bg-blue-600"}`,children:i?"测试中...":`测试 ${a.name}`})}),t&&e.jsxs("div",{className:`p-3 rounded border mt-4 ${t.success?"bg-green-50 border-green-200":"bg-red-50 border-red-200"}`,children:[e.jsxs("div",{className:"flex items-center justify-between mb-2",children:[e.jsx("span",{className:`font-medium ${t.success?"text-green-800":"text-red-800"}`,children:t.success?"✅ 请求成功":"❌ 请求失败"}),e.jsxs("span",{className:"text-sm text-gray-600",children:["响应时间: ",t.responseTime,"ms"]})]}),t.success?e.jsxs("div",{className:"text-sm text-green-700",children:[e.jsxs("div",{className:"mb-2",children:["成功获取 ",t.totalCount," 条数据，显示前 3 条："]}),e.jsx("div",{className:"bg-white p-2 rounded border max-h-32 overflow-y-auto",children:e.jsx("pre",{className:"text-xs font-mono",children:JSON.stringify(t.data,null,2)})})]}):e.jsxs("div",{className:"text-sm text-red-700",children:["错误信息: ",t.error]})]})]})]})]})},f=()=>{const[s,m]=l.useState("basic"),[i,c]=l.useState(""),t={basic:{title:"基础配置",code:`const apiInstance = axios.create({
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
});`,description:"包含完整配置选项的实例"}},d=()=>{const o=new Date().toLocaleTimeString();c(`✅ 实例创建成功！(${o})`),setTimeout(()=>c(""),3e3)};return e.jsxs("div",{className:"space-y-4",children:[e.jsx("div",{className:"flex space-x-2 mb-4",children:Object.entries(t).map(([o,p])=>e.jsx("button",{onClick:()=>m(o),className:`px-4 py-2 rounded text-sm ${s===o?"bg-green-500 text-white":"bg-gray-200 text-gray-700 hover:bg-gray-300"}`,children:p.title},o))}),e.jsxs("div",{className:"bg-gray-50 p-4 rounded-lg border",children:[e.jsx("h4",{className:"font-semibold mb-2",children:t[s].title}),e.jsx("p",{className:"text-sm text-gray-600 mb-3",children:t[s].description}),e.jsx("pre",{className:"bg-gray-900 text-green-400 p-4 rounded text-sm overflow-x-auto",children:e.jsx("code",{children:t[s].code})}),e.jsx("button",{onClick:d,className:"mt-3 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 text-sm",children:"创建实例"}),i&&e.jsx("div",{className:"mt-3 p-2 bg-green-100 border border-green-300 rounded text-green-800 text-sm",children:i})]})]})},N=`import React, { useState } from "react";
import axios from "axios";

// 不同实例类型演示
const InstanceTypesDemo: React.FC = () => {
  const [activeInstance, setActiveInstance] = useState<
    "posts" | "users" | "photos"
  >("posts");
  const [isRequesting, setIsRequesting] = useState(false);
  const [requestResult, setRequestResult] = useState<any>(null);

  const instances = {
    posts: {
      name: "Posts API 实例",
      baseURL: "https://jsonplaceholder.typicode.com",
      timeout: 5000,
      headers: {
        "Content-Type": "application/json",
      },
      description: "用于处理文章相关的 API 请求",
      color: "bg-blue-100 border-blue-300",
      textColor: "text-blue-800",
      features: ["文章列表获取", "文章详情查询", "文章创建更新"],
      endpoint: "/posts",
      testData: { title: "Test Post", body: "This is a test post", userId: 1 },
    },
    users: {
      name: "Users API 实例",
      baseURL: "https://jsonplaceholder.typicode.com",
      timeout: 8000,
      headers: {
        "Content-Type": "application/json",
        "X-User-Agent": "MyApp/1.0",
      },
      description: "专门处理用户相关的 API 请求",
      color: "bg-green-100 border-green-300",
      textColor: "text-green-800",
      features: ["用户信息管理", "用户认证", "权限控制"],
      endpoint: "/users",
      testData: {
        name: "Test User",
        email: "test@example.com",
        phone: "123-456-7890",
      },
    },
    photos: {
      name: "Photos API 实例",
      baseURL: "https://jsonplaceholder.typicode.com",
      timeout: 15000,
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      description: "处理图片和媒体文件相关的 API 请求",
      color: "bg-purple-100 border-purple-300",
      textColor: "text-purple-800",
      features: ["图片上传下载", "缩略图生成", "媒体文件管理"],
      endpoint: "/photos",
      testData: {
        title: "Test Photo",
        url: "https://via.placeholder.com/600/92c952",
        thumbnailUrl: "https://via.placeholder.com/150/92c952",
      },
    },
  };

  // 测试当前实例
  const testCurrentInstance = async () => {
    setIsRequesting(true);
    setRequestResult(null);

    const currentConfig = instances[activeInstance];
    const startTime = Date.now();

    try {
      // 使用 axios 发起请求
      const axiosInstance = axios.create({
        baseURL: currentConfig.baseURL,
        timeout: currentConfig.timeout,
        headers: currentConfig.headers,
      });

      const response = await axiosInstance.get(
        \`\${currentConfig.endpoint}?_limit=5\`
      );
      const data = response.data;
      const endTime = Date.now();

      setRequestResult({
        success: true,
        data: data.slice(0, 3), // 只显示前3条数据
        responseTime: endTime - startTime,
        totalCount: data.length,
      });
    } catch (error) {
      const endTime = Date.now();
      setRequestResult({
        success: false,
        error: error instanceof Error ? error.message : "Unknown error",
        responseTime: endTime - startTime,
      });
    } finally {
      setIsRequesting(false);
    }
  };

  const currentInstance = instances[activeInstance];

  return (
    <div className="space-y-4">
      <div className="flex space-x-2 mb-4">
        {Object.entries(instances).map(([key, instance]) => (
          <button
            key={key}
            onClick={() => setActiveInstance(key as keyof typeof instances)}
            className={\`px-4 py-2 rounded text-sm \${
              activeInstance === key
                ? "bg-blue-500 text-white"
                : "bg-gray-200 text-gray-700 hover:bg-gray-300"
            }\`}
          >
            {instance.name}
          </button>
        ))}
      </div>

      <div className={\`border-2 p-4 rounded-lg \${currentInstance.color}\`}>
        <h4 className={\`font-semibold mb-2 \${currentInstance.textColor}\`}>
          {currentInstance.name}
        </h4>
        <p className={\`text-sm mb-4 \${currentInstance.textColor}\`}>
          {currentInstance.description}
        </p>

        <div className="bg-white p-4 rounded border">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
            <div>
              <h5 className="font-medium text-gray-800 mb-2">配置信息</h5>
              <div className="space-y-2">
                <div>
                  <span className="text-xs text-gray-600">Base URL:</span>
                  <div className="p-2 bg-gray-50 rounded text-sm font-mono">
                    {currentInstance.baseURL}
                  </div>
                </div>
                <div>
                  <span className="text-xs text-gray-600">Timeout:</span>
                  <div className="p-2 bg-gray-50 rounded text-sm">
                    {currentInstance.timeout}ms
                  </div>
                </div>
              </div>
            </div>

            <div>
              <h5 className="font-medium text-gray-800 mb-2">请求头</h5>
              <div className="space-y-1">
                {Object.entries(currentInstance.headers).map(([key, value]) => (
                  <div key={key} className="flex text-sm">
                    <span className="text-gray-600 w-24 flex-shrink-0">
                      {key}:
                    </span>
                    <span className="font-mono text-gray-800 break-all">
                      {value}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="mt-4">
            <h5 className="font-medium text-gray-800 mb-2">特性</h5>
            <div className="flex flex-wrap gap-2">
              {currentInstance.features.map((feature, index) => (
                <span
                  key={index}
                  className="px-2 py-1 bg-gray-100 text-gray-700 text-xs rounded"
                >
                  {feature}
                </span>
              ))}
            </div>
          </div>

          <div className="border-t pt-4 mt-4">
            <button
              onClick={testCurrentInstance}
              disabled={isRequesting}
              className={\`w-full py-2 px-4 rounded font-medium \${
                isRequesting
                  ? "bg-gray-400 text-white cursor-not-allowed"
                  : "bg-blue-500 text-white hover:bg-blue-600"
              }\`}
            >
              {isRequesting ? "测试中..." : \`测试 \${currentInstance.name}\`}
            </button>
          </div>

          {requestResult && (
            <div
              className={\`p-3 rounded border mt-4 \${
                requestResult.success
                  ? "bg-green-50 border-green-200"
                  : "bg-red-50 border-red-200"
              }\`}
            >
              <div className="flex items-center justify-between mb-2">
                <span
                  className={\`font-medium \${
                    requestResult.success ? "text-green-800" : "text-red-800"
                  }\`}
                >
                  {requestResult.success ? "✅ 请求成功" : "❌ 请求失败"}
                </span>
                <span className="text-sm text-gray-600">
                  响应时间: {requestResult.responseTime}ms
                </span>
              </div>

              {requestResult.success ? (
                <div className="text-sm text-green-700">
                  <div className="mb-2">
                    成功获取 {requestResult.totalCount} 条数据，显示前 3 条：
                  </div>
                  <div className="bg-white p-2 rounded border max-h-32 overflow-y-auto">
                    <pre className="text-xs font-mono">
                      {JSON.stringify(requestResult.data, null, 2)}
                    </pre>
                  </div>
                </div>
              ) : (
                <div className="text-sm text-red-700">
                  错误信息: {requestResult.error}
                </div>
              )}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default InstanceTypesDemo;`,I=`import React, { useState } from "react";

// 实例创建演示
const InstanceCreationDemo: React.FC = () => {
  const [selectedConfig, setSelectedConfig] = useState<"basic" | "advanced">(
    "basic"
  );
  const [createdInstance, setCreatedInstance] = useState<string>("");

  const configs = {
    basic: {
      title: "基础配置",
      code: \`const apiInstance = axios.create({
  baseURL: 'https://api.example.com',
  timeout: 5000
});\`,
      description: "最简单的实例创建方式",
    },
    advanced: {
      title: "高级配置",
      code: \`const apiInstance = axios.create({
  baseURL: process.env.REACT_APP_API_URL,
  timeout: 10000,
  headers: {
    'Content-Type': 'application/json',
    'X-Requested-With': 'XMLHttpRequest'
  },
  withCredentials: true,
  validateStatus: (status) => status < 500
});\`,
      description: "包含完整配置选项的实例",
    },
  };

  const handleCreateInstance = () => {
    const timestamp = new Date().toLocaleTimeString();
    setCreatedInstance(\`✅ 实例创建成功！(\${timestamp})\`);
    setTimeout(() => setCreatedInstance(""), 3000);
  };

  return (
    <div className="space-y-4">
      <div className="flex space-x-2 mb-4">
        {Object.entries(configs).map(([key, config]) => (
          <button
            key={key}
            onClick={() => setSelectedConfig(key as keyof typeof configs)}
            className={\`px-4 py-2 rounded text-sm \${
              selectedConfig === key
                ? "bg-green-500 text-white"
                : "bg-gray-200 text-gray-700 hover:bg-gray-300"
            }\`}
          >
            {config.title}
          </button>
        ))}
      </div>

      <div className="bg-gray-50 p-4 rounded-lg border">
        <h4 className="font-semibold mb-2">{configs[selectedConfig].title}</h4>
        <p className="text-sm text-gray-600 mb-3">
          {configs[selectedConfig].description}
        </p>

        <pre className="bg-gray-900 text-green-400 p-4 rounded text-sm overflow-x-auto">
          <code>{configs[selectedConfig].code}</code>
        </pre>

        <button
          onClick={handleCreateInstance}
          className="mt-3 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 text-sm"
        >
          创建实例
        </button>

        {createdInstance && (
          <div className="mt-3 p-2 bg-green-100 border border-green-300 rounded text-green-800 text-sm">
            {createdInstance}
          </div>
        )}
      </div>
    </div>
  );
};

export default InstanceCreationDemo;`,w=()=>{const s=[{title:"核心概念",items:["实例是 Axios 的核心概念，允许创建具有特定配置的独立请求客户端","每个实例可以有自己的 baseURL、headers、timeout 等配置","实例之间相互独立，不会影响全局 axios 配置","支持继承和覆盖配置，提供灵活的配置管理"]},{title:"主要优势",items:["配置隔离：不同服务使用独立配置，避免相互干扰","代码复用：相同配置的请求可以共享实例","维护性强：集中管理特定服务的配置","扩展性好：易于添加新的服务实例"]},{title:"适用场景",items:["多服务架构：需要调用不同的 API 服务","环境切换：开发、测试、生产环境使用不同配置","认证隔离：不同服务需要不同的认证方式","超时控制：不同类型请求需要不同的超时设置"]},{title:"注意事项",items:["实例配置会覆盖全局配置","请求级配置优先级最高","合理规划实例数量，避免过度创建","注意内存管理，及时清理不用的实例"]}];return e.jsx(h,{title:"实例层 (Instance Layer)",description:"学习如何创建和配置 Axios 实例，实现不同 API 服务的独立配置管理",overview:s,examples:[{title:"实例类型对比",component:e.jsx(y,{}),description:"演示不同类型的 Axios 实例配置和使用方式",observationPoints:["切换不同实例时，观察配置信息的变化（baseURL、timeout、headers）","点击测试按钮时，注意不同实例的请求行为和响应时间","观察每个实例的特性标签，了解其适用场景"],keyPoints:["每个实例都有独立的配置，互不影响","baseURL 决定了请求的基础地址","timeout 设置影响请求的超时行为","headers 可以为特定实例设置专用请求头"],commonTraps:["忘记设置 baseURL 导致请求路径错误","timeout 设置过短导致请求频繁超时","headers 配置错误导致服务器拒绝请求","实例配置冲突导致意外的请求行为"],solutions:["使用环境变量管理不同环境的 baseURL","根据接口特性合理设置 timeout 值","统一管理常用的 headers 配置","建立实例配置的命名规范和文档"],importantTips:["Posts 实例适合处理内容管理相关的 API","Users 实例包含了用户认证相关的特殊配置","Photos 实例针对媒体文件设置了更长的超时时间"],codeExample:{title:"实例类型配置代码",code:N}},{title:"实例创建配置",component:e.jsx(f,{}),description:"学习如何创建和配置 Axios 实例的不同方式",observationPoints:["切换基础配置和高级配置，观察代码差异","点击创建实例按钮，观察实例创建的反馈","注意高级配置中包含的额外选项"],keyPoints:["axios.create() 是创建实例的标准方法","基础配置包含最必要的选项","高级配置提供更多的控制选项","配置对象支持所有 axios 的配置选项"],commonTraps:["配置选项拼写错误导致配置无效","环境变量未正确设置导致 baseURL 为空","validateStatus 配置不当导致正常响应被当作错误","withCredentials 设置错误导致跨域问题"],solutions:["使用 TypeScript 获得配置选项的类型提示","建立配置验证机制确保必要选项存在","为不同环境创建配置模板","使用配置工厂函数统一创建实例"],importantTips:["基础配置适合简单的 API 调用场景","高级配置包含了生产环境常用的选项","validateStatus 可以自定义成功状态码的判断逻辑"],codeExample:{title:"实例创建配置代码",code:I}}],tutorial:{concepts:["实例 (Instance)：具有特定配置的 axios 客户端","配置继承：实例配置 > 请求配置 > 默认配置","配置隔离：不同实例之间的配置相互独立","工厂模式：使用 axios.create() 创建实例"],steps:["使用 axios.create() 方法创建实例","传入配置对象设置 baseURL、timeout 等选项","为不同的 API 服务创建专用实例","在实例上调用 get、post 等方法发起请求","根据需要添加拦截器和错误处理"],tips:["为每个微服务或 API 创建独立的实例","使用环境变量管理不同环境的配置","合理设置 timeout 避免请求hang住","统一管理实例的创建和配置","考虑使用配置工厂函数提高代码复用性"]},interview:{questions:[{question:"什么是 Axios 实例？为什么要使用实例？",answer:"Axios 实例是通过 axios.create() 创建的具有特定配置的独立客户端。使用实例的好处包括：1) 配置隔离，不同服务使用独立配置；2) 代码复用，相同配置的请求共享实例；3) 维护性强，集中管理特定服务的配置；4) 扩展性好，易于添加新服务。"},{question:"如何创建 Axios 实例？有哪些常用配置选项？",answer:"使用 axios.create(config) 创建实例。常用配置包括：baseURL（基础URL）、timeout（超时时间）、headers（默认请求头）、withCredentials（跨域凭证）、validateStatus（状态码验证）、transformRequest/Response（数据转换）等。"},{question:"实例配置的优先级是怎样的？",answer:"配置优先级从高到低：请求级配置 > 实例配置 > 全局默认配置。这意味着在发起请求时传入的配置会覆盖实例配置，实例配置会覆盖全局配置。"},{question:"在什么场景下应该创建多个实例？",answer:"应该在以下场景创建多个实例：1) 调用不同的 API 服务；2) 不同环境需要不同配置；3) 不同的认证方式；4) 不同的超时要求；5) 不同的数据格式处理需求。"}],keyPoints:["实例提供了配置隔离和代码复用的能力","axios.create() 是创建实例的标准方法","实例配置会覆盖全局配置但不影响其他实例","合理的实例设计能提高代码的可维护性","实例支持所有 axios 的配置选项和方法"]},bestPractices:{dos:["为不同的 API 服务创建专用实例","使用环境变量管理配置信息","建立实例的命名规范和文档","合理设置 timeout 和 retry 策略","使用 TypeScript 提供类型安全","集中管理实例的创建和配置"],donts:["不要为每个请求都创建新实例","不要在实例配置中硬编码敏感信息","不要忽略错误处理和超时设置","不要让实例配置过于复杂","不要在组件中直接创建实例"],patterns:["工厂模式：使用工厂函数创建配置化的实例","单例模式：为特定服务创建单一实例","配置模式：使用配置对象管理实例选项","适配器模式：为不同 API 创建适配层","装饰器模式：为实例添加通用功能"]}})};export{w as default};
