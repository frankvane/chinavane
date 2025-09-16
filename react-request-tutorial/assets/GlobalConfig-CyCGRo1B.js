import{r as m,j as e}from"./index-C7SuDyTR.js";import{C as N}from"./ComponentTemplate-BzrYXZsv.js";import{a as y}from"./index-NIGUFBhG.js";const R=()=>{const[n,p]=m.useState("development"),[a,g]=m.useState(!1),[t,i]=m.useState(null),c={development:{baseURL:"https://jsonplaceholder.typicode.com",timeout:1e4,debug:!0,color:"bg-blue-100 border-blue-300",textColor:"text-blue-800"},staging:{baseURL:"https://jsonplaceholder.typicode.com",timeout:8e3,debug:!1,color:"bg-yellow-100 border-yellow-300",textColor:"text-yellow-800"},production:{baseURL:"https://jsonplaceholder.typicode.com",timeout:5e3,debug:!1,color:"bg-green-100 border-green-300",textColor:"text-green-800"}},x=async()=>{g(!0),i(null);try{const s=c[n],l=Date.now(),o=(await y.create({baseURL:s.baseURL,timeout:s.timeout}).get("/posts/1")).data,u=Date.now();i({success:!0,data:o,responseTime:u-l,config:s}),s.debug&&console.log(`[${n.toUpperCase()}] Request successful:`,{url:`${s.baseURL}/posts/1`,responseTime:u-l,data:o})}catch(s){const l=Date.now();i({success:!1,error:s instanceof Error?s.message:"Unknown error",responseTime:l-Date.now()}),c[n].debug&&console.error(`[${n.toUpperCase()}] Request failed:`,s)}finally{g(!1)}},r=c[n];return e.jsxs("div",{className:"space-y-4",children:[e.jsx("div",{className:"flex space-x-2 mb-4",children:Object.keys(c).map(s=>e.jsx("button",{onClick:()=>p(s),className:`px-4 py-2 rounded capitalize ${n===s?"bg-blue-500 text-white":"bg-gray-200 text-gray-700 hover:bg-gray-300"}`,children:s},s))}),e.jsxs("div",{className:`border-2 p-4 rounded-lg ${r.color}`,children:[e.jsxs("h4",{className:`font-semibold mb-3 ${r.textColor}`,children:["当前环境：",n.toUpperCase()]}),e.jsxs("div",{className:"bg-white p-4 rounded border space-y-4",children:[e.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-4",children:[e.jsxs("div",{children:[e.jsx("label",{className:"block text-sm font-medium text-gray-700 mb-1",children:"Base URL"}),e.jsx("div",{className:"p-2 bg-gray-50 rounded text-sm font-mono",children:r.baseURL})]}),e.jsxs("div",{children:[e.jsx("label",{className:"block text-sm font-medium text-gray-700 mb-1",children:"Timeout (ms)"}),e.jsx("div",{className:"p-2 bg-gray-50 rounded text-sm",children:r.timeout})]}),e.jsxs("div",{children:[e.jsx("label",{className:"block text-sm font-medium text-gray-700 mb-1",children:"Debug Mode"}),e.jsx("div",{className:"p-2 bg-gray-50 rounded text-sm",children:r.debug?"✅ 启用":"❌ 禁用"})]}),e.jsxs("div",{children:[e.jsx("label",{className:"block text-sm font-medium text-gray-700 mb-1",children:"环境标识"}),e.jsx("div",{className:`p-2 rounded text-sm font-medium ${n==="development"?"bg-blue-100 text-blue-800":n==="staging"?"bg-yellow-100 text-yellow-800":"bg-green-100 text-green-800"}`,children:n.toUpperCase()})]})]}),e.jsx("div",{className:"border-t pt-4",children:e.jsx("button",{onClick:x,disabled:a,className:`w-full py-2 px-4 rounded font-medium ${a?"bg-gray-400 text-white cursor-not-allowed":"bg-blue-500 text-white hover:bg-blue-600"}`,children:a?"测试中...":"测试当前环境配置"})}),t&&e.jsxs("div",{className:`p-3 rounded border ${t.success?"bg-green-50 border-green-200":"bg-red-50 border-red-200"}`,children:[e.jsxs("div",{className:"flex items-center justify-between mb-2",children:[e.jsx("span",{className:`font-medium ${t.success?"text-green-800":"text-red-800"}`,children:t.success?"✅ 请求成功":"❌ 请求失败"}),e.jsxs("span",{className:"text-sm text-gray-600",children:["响应时间: ",t.responseTime,"ms"]})]}),t.success?e.jsxs("div",{className:"text-sm text-green-700",children:[e.jsx("div",{className:"font-medium mb-1",children:"获取到的数据:"}),e.jsxs("div",{className:"bg-white p-2 rounded border text-xs font-mono",children:[JSON.stringify(t.data,null,2).substring(0,200),"..."]}),r.debug&&e.jsx("div",{className:"mt-2 text-xs text-green-600",children:"💡 Debug 模式已启用，详细信息已输出到控制台"})]}):e.jsxs("div",{className:"text-sm text-red-700",children:["错误信息: ",t.error]})]})]})]})]})},w=`import React, { useState } from "react";
import axios from "axios";

const EnvironmentConfigDemo: React.FC = () => {
  const [currentEnv, setCurrentEnv] = useState<
    "development" | "staging" | "production"
  >("development");
  const [isRequesting, setIsRequesting] = useState(false);
  const [requestResult, setRequestResult] = useState<any>(null);

  const envConfigs = {
    development: {
      baseURL: "https://jsonplaceholder.typicode.com",
      timeout: 10000,
      debug: true,
      color: "bg-blue-100 border-blue-300",
      textColor: "text-blue-800",
    },
    staging: {
      baseURL: "https://jsonplaceholder.typicode.com",
      timeout: 8000,
      debug: false,
      color: "bg-yellow-100 border-yellow-300",
      textColor: "text-yellow-800",
    },
    production: {
      baseURL: "https://jsonplaceholder.typicode.com",
      timeout: 5000,
      debug: false,
      color: "bg-green-100 border-green-300",
      textColor: "text-green-800",
    },
  };

  // 测试当前环境配置
  const testCurrentConfig = async () => {
    setIsRequesting(true);
    setRequestResult(null);

    try {
      const config = envConfigs[currentEnv];
      const startTime = Date.now();

      // 使用当前环境配置发起请求
      const axiosInstance = axios.create({
        baseURL: config.baseURL,
        timeout: config.timeout,
      });

      const response = await axiosInstance.get("/posts/1");
      const data = response.data;
      const endTime = Date.now();

      setRequestResult({
        success: true,
        data,
        responseTime: endTime - startTime,
        config,
      });

      if (config.debug) {
        console.log(\`[\${currentEnv.toUpperCase()}] Request successful:\`, {
          url: \`\${config.baseURL}/posts/1\`,
          responseTime: endTime - startTime,
          data,
        });
      }
    } catch (error) {
      const endTime = Date.now();
      setRequestResult({
        success: false,
        error: error instanceof Error ? error.message : "Unknown error",
        responseTime: endTime - Date.now(),
      });

      if (envConfigs[currentEnv].debug) {
        console.error(\`[\${currentEnv.toUpperCase()}] Request failed:\`, error);
      }
    } finally {
      setIsRequesting(false);
    }
  };

  const currentConfig = envConfigs[currentEnv];

  return (
    <div className="space-y-4">
      <div className="flex space-x-2 mb-4">
        {Object.keys(envConfigs).map((env) => (
          <button
            key={env}
            onClick={() => setCurrentEnv(env as keyof typeof envConfigs)}
            className={\`px-4 py-2 rounded capitalize \${
              currentEnv === env
                ? "bg-blue-500 text-white"
                : "bg-gray-200 text-gray-700 hover:bg-gray-300"
            }\`}
          >
            {env}
          </button>
        ))}
      </div>

      <div className={\`border-2 p-4 rounded-lg \${currentConfig.color}\`}>
        <h4 className={\`font-semibold mb-3 \${currentConfig.textColor}\`}>
          当前环境：{currentEnv.toUpperCase()}
        </h4>

        <div className="bg-white p-4 rounded border space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Base URL
              </label>
              <div className="p-2 bg-gray-50 rounded text-sm font-mono">
                {currentConfig.baseURL}
              </div>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Timeout (ms)
              </label>
              <div className="p-2 bg-gray-50 rounded text-sm">
                {currentConfig.timeout}
              </div>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Debug Mode
              </label>
              <div className="p-2 bg-gray-50 rounded text-sm">
                {currentConfig.debug ? "✅ 启用" : "❌ 禁用"}
              </div>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                环境标识
              </label>
              <div
                className={\`p-2 rounded text-sm font-medium \${
                  currentEnv === "development"
                    ? "bg-blue-100 text-blue-800"
                    : currentEnv === "staging"
                    ? "bg-yellow-100 text-yellow-800"
                    : "bg-green-100 text-green-800"
                }\`}
              >
                {currentEnv.toUpperCase()}
              </div>
            </div>
          </div>

          <div className="border-t pt-4">
            <button
              onClick={testCurrentConfig}
              disabled={isRequesting}
              className={\`w-full py-2 px-4 rounded font-medium \${
                isRequesting
                  ? "bg-gray-400 text-white cursor-not-allowed"
                  : "bg-blue-500 text-white hover:bg-blue-600"
              }\`}
            >
              {isRequesting ? "测试中..." : "测试当前环境配置"}
            </button>
          </div>

          {requestResult && (
            <div
              className={\`p-3 rounded border \${
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
                  <div className="font-medium mb-1">获取到的数据:</div>
                  <div className="bg-white p-2 rounded border text-xs font-mono">
                    {JSON.stringify(requestResult.data, null, 2).substring(
                      0,
                      200
                    )}
                    ...
                  </div>
                  {currentConfig.debug && (
                    <div className="mt-2 text-xs text-green-600">
                      💡 Debug 模式已启用，详细信息已输出到控制台
                    </div>
                  )}
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

export default EnvironmentConfigDemo;`,T=()=>{const[n,p]=m.useState(5e3),[a,g]=m.useState(!1),[t,i]=m.useState(null),[c,x]=m.useState([]),r=async()=>{g(!0),i(null);const s=Date.now(),l=Date.now();try{const o=(await y.create({baseURL:"https://jsonplaceholder.typicode.com",timeout:n}).get("/posts")).data,b=Date.now()-s,v={success:!0,responseTime:b,dataLength:o.length,message:`✅ 请求成功 (耗时: ${b}ms, 获取 ${o.length} 条数据)`};i(v),x(h=>[{id:l,timeout:n,success:!0,responseTime:b,timestamp:new Date().toLocaleTimeString()},...h.slice(0,4)])}catch(d){const o=Date.now()-s,u=d instanceof Error&&d.name==="AbortError",b={success:!1,responseTime:o,isTimeout:u,message:u?`❌ 请求超时 (超时设置: ${n}ms, 实际耗时: ${o}ms)`:`❌ 请求失败: ${d instanceof Error?d.message:"Unknown error"}`};i(b),x(v=>[{id:l,timeout:n,success:!1,responseTime:o,timestamp:new Date().toLocaleTimeString()},...v.slice(0,4)])}finally{g(!1)}};return e.jsxs("div",{className:"space-y-4",children:[e.jsxs("div",{className:"flex items-center space-x-4",children:[e.jsx("label",{className:"text-sm font-medium text-gray-700",children:"超时设置 (ms):"}),e.jsx("input",{type:"range",min:"1000",max:"10000",step:"1000",value:n,onChange:s=>p(Number(s.target.value)),className:"flex-1"}),e.jsxs("span",{className:"text-sm font-mono bg-gray-100 px-2 py-1 rounded",children:[n,"ms"]})]}),e.jsx("button",{onClick:r,disabled:a,className:`w-full py-2 px-4 rounded font-medium ${a?"bg-gray-400 text-white cursor-not-allowed":"bg-blue-500 text-white hover:bg-blue-600"}`,children:a?"测试中...":"测试超时配置"}),t&&e.jsxs("div",{className:`p-3 rounded border ${t.success?"bg-green-50 border-green-200 text-green-800":"bg-red-50 border-red-200 text-red-800"}`,children:[e.jsx("div",{className:"font-medium mb-1",children:t.message}),t.success&&e.jsxs("div",{className:"text-sm text-green-600",children:["💡 成功获取到 ",t.dataLength," 条 posts 数据"]}),!t.success&&t.isTimeout&&e.jsx("div",{className:"text-sm text-red-600",children:"💡 可以尝试增加超时时间或检查网络连接"})]}),c.length>0&&e.jsxs("div",{className:"border-t pt-4",children:[e.jsx("h5",{className:"font-medium text-gray-800 mb-2",children:"请求历史记录"}),e.jsx("div",{className:"space-y-2",children:c.map(s=>e.jsx("div",{className:`p-2 rounded text-sm border ${s.success?"bg-green-50 border-green-200 text-green-700":"bg-red-50 border-red-200 text-red-700"}`,children:e.jsxs("div",{className:"flex justify-between items-center",children:[e.jsxs("span",{className:"font-medium",children:[s.success?"✅":"❌"," ",s.timestamp]}),e.jsxs("span",{className:"text-xs",children:[s.responseTime,"ms / ",s.timeout,"ms"]})]})},s.id))})]})]})},j=`import React, { useState } from "react";
import axios from "axios";

const TimeoutConfigDemo: React.FC = () => {
  const [timeout, setTimeout] = useState(5000);
  const [isRequesting, setIsRequesting] = useState(false);
  const [result, setResult] = useState<any>(null);
  const [requestHistory, setRequestHistory] = useState<
    Array<{
      id: number;
      timeout: number;
      success: boolean;
      responseTime: number;
      timestamp: string;
    }>
  >([]);

  const testTimeout = async () => {
    setIsRequesting(true);
    setResult(null);

    const startTime = Date.now();
    const requestId = Date.now();

    try {
      // 使用 axios 实现超时控制
      const axiosInstance = axios.create({
        baseURL: "https://jsonplaceholder.typicode.com",
        timeout: timeout,
      });

      // 发起真实的 API 请求
      const response = await axiosInstance.get("/posts");
      const data = response.data;
      const endTime = Date.now();
      const responseTime = endTime - startTime;

      const successResult = {
        success: true,
        responseTime,
        dataLength: data.length,
        message: \`✅ 请求成功 (耗时: \${responseTime}ms, 获取 \${data.length} 条数据)\`,
      };

      setResult(successResult);

      // 添加到历史记录
      setRequestHistory((prev) => [
        {
          id: requestId,
          timeout,
          success: true,
          responseTime,
          timestamp: new Date().toLocaleTimeString(),
        },
        ...prev.slice(0, 4),
      ]); // 只保留最近5条记录
    } catch (error) {
      const endTime = Date.now();
      const responseTime = endTime - startTime;

      const isTimeout = error instanceof Error && error.name === "AbortError";
      const errorResult = {
        success: false,
        responseTime,
        isTimeout,
        message: isTimeout
          ? \`❌ 请求超时 (超时设置: \${timeout}ms, 实际耗时: \${responseTime}ms)\`
          : \`❌ 请求失败: \${
              error instanceof Error ? error.message : "Unknown error"
            }\`,
      };

      setResult(errorResult);

      // 添加到历史记录
      setRequestHistory((prev) => [
        {
          id: requestId,
          timeout,
          success: false,
          responseTime,
          timestamp: new Date().toLocaleTimeString(),
        },
        ...prev.slice(0, 4),
      ]);
    } finally {
      setIsRequesting(false);
    }
  };

  return (
    <div className="space-y-4">
      <div className="flex items-center space-x-4">
        <label className="text-sm font-medium text-gray-700">
          超时设置 (ms):
        </label>
        <input
          type="range"
          min="1000"
          max="10000"
          step="1000"
          value={timeout}
          onChange={(e) => setTimeout(Number(e.target.value))}
          className="flex-1"
        />
        <span className="text-sm font-mono bg-gray-100 px-2 py-1 rounded">
          {timeout}ms
        </span>
      </div>

      <button
        onClick={testTimeout}
        disabled={isRequesting}
        className={\`w-full py-2 px-4 rounded font-medium \${
          isRequesting
            ? "bg-gray-400 text-white cursor-not-allowed"
            : "bg-blue-500 text-white hover:bg-blue-600"
        }\`}
      >
        {isRequesting ? "测试中..." : "测试超时配置"}
      </button>

      {result && (
        <div
          className={\`p-3 rounded border \${
            result.success
              ? "bg-green-50 border-green-200 text-green-800"
              : "bg-red-50 border-red-200 text-red-800"
          }\`}
        >
          <div className="font-medium mb-1">{result.message}</div>
          {result.success && (
            <div className="text-sm text-green-600">
              💡 成功获取到 {result.dataLength} 条 posts 数据
            </div>
          )}
          {!result.success && result.isTimeout && (
            <div className="text-sm text-red-600">
              💡 可以尝试增加超时时间或检查网络连接
            </div>
          )}
        </div>
      )}

      {requestHistory.length > 0 && (
        <div className="border-t pt-4">
          <h5 className="font-medium text-gray-800 mb-2">请求历史记录</h5>
          <div className="space-y-2">
            {requestHistory.map((record) => (
              <div
                key={record.id}
                className={\`p-2 rounded text-sm border \${
                  record.success
                    ? "bg-green-50 border-green-200 text-green-700"
                    : "bg-red-50 border-red-200 text-red-700"
                }\`}
              >
                <div className="flex justify-between items-center">
                  <span className="font-medium">
                    {record.success ? "✅" : "❌"} {record.timestamp}
                  </span>
                  <span className="text-xs">
                    {record.responseTime}ms / {record.timeout}ms
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default TimeoutConfigDemo;`,C=[{title:"核心概念",items:["全局配置统一管理：通过 axios.create() 创建实例，统一管理所有请求的基础配置","环境变量动态切换：根据不同环境（开发、测试、生产）自动切换配置参数","超时时间合理设置：为不同类型的请求设置合适的超时时间，平衡性能和用户体验","默认请求头配置：统一设置 Content-Type、Accept 等常用请求头"]},{title:"主要优势",items:["减少重复配置代码，避免在每个请求中重复设置相同的配置参数","统一请求行为标准，确保所有请求遵循相同的配置规范","便于环境切换管理，通过环境变量轻松切换不同环境的配置","提高开发效率，开发者只需关注业务逻辑，无需重复配置"]},{title:"适用场景",items:["多环境部署项目：需要在开发、测试、生产环境间切换的项目","大型前端应用：包含大量 API 调用的复杂应用","团队协作开发：多人协作需要统一配置规范的项目","API 接口统一管理：需要集中管理所有 API 配置的场景"]},{title:"注意事项",items:["避免硬编码配置，使用环境变量而不是在代码中硬编码配置值","合理设置超时时间，根据请求类型和网络环境设置合适的超时时间","敏感信息环境变量，将 API 密钥等敏感信息放在环境变量中","配置文件版本控制，合理管理配置文件的版本控制和部署"]}],q=[{title:"环境配置切换",component:e.jsx(R,{}),description:"演示如何根据不同环境（开发、测试、生产）动态切换 API 配置",observationPoints:["点击不同环境按钮，观察 baseURL、timeout 等配置的变化","注意开发环境启用了 debug 模式，生产环境则关闭","不同环境使用不同的颜色主题进行区分"],keyPoints:["使用环境变量管理不同环境的配置","开发环境可以设置较长的超时时间便于调试","生产环境应关闭 debug 模式提高性能","baseURL 应该根据环境动态设置"],commonTraps:["在代码中硬编码 API 地址","所有环境使用相同的超时设置","忘记在生产环境关闭 debug 模式"],solutions:["使用 .env 文件管理环境变量","根据环境类型设置不同的超时时间","通过构建工具自动切换环境配置"],codeExample:{title:"环境配置切换演示",code:w}},{title:"超时配置演示",component:e.jsx(T,{}),description:"演示不同超时设置对请求行为的影响",observationPoints:["调整超时滑块，观察不同超时设置的效果","点击'模拟请求'按钮，观察请求成功或超时的结果","注意请求耗时与超时设置的关系"],keyPoints:["合理的超时设置可以提升用户体验","不同类型的请求应设置不同的超时时间","超时后应该给用户明确的错误提示","可以根据网络环境动态调整超时时间"],commonTraps:["设置过短的超时时间导致正常请求失败","设置过长的超时时间影响用户体验","所有请求使用相同的超时设置"],solutions:["根据请求类型设置合适的超时时间","提供超时重试机制","根据网络状况动态调整超时设置"],codeExample:{title:"超时配置演示",code:j}}],U={concepts:["axios.create() 创建实例的基本用法","baseURL 的作用和配置方法","timeout 超时设置的重要性","环境变量在配置中的应用","默认请求头的统一设置"],steps:["安装 axios 依赖包","创建配置文件定义不同环境的参数","使用 axios.create() 创建请求实例","配置 baseURL、timeout 等全局参数","设置默认请求头信息","导出配置好的实例供全局使用"],tips:["使用 TypeScript 为配置对象定义类型","将敏感信息放在环境变量中而不是代码里","为不同类型的请求创建不同的实例","在开发环境可以设置较长的超时时间便于调试","使用配置文件统一管理所有环境的参数"]},$={questions:[{question:"为什么要使用 axios.create() 而不是直接使用 axios？",answer:"axios.create() 可以创建一个新的 axios 实例，每个实例可以有自己的配置。这样可以为不同的 API 服务创建不同的实例，避免全局配置冲突，提高代码的可维护性。"},{question:"如何在不同环境中切换 API 地址？",answer:"可以使用环境变量来管理不同环境的配置。通过 process.env.NODE_ENV 获取当前环境，然后根据环境加载对应的配置文件，或者使用 .env 文件定义环境变量。"},{question:"超时时间应该如何设置？",answer:"超时时间应该根据请求类型和网络环境来设置。一般 API 请求设置 5-10 秒，文件上传可以设置 30-60 秒。过短会导致正常请求失败，过长会影响用户体验。"},{question:"全局配置有哪些常见的参数？",answer:"常见参数包括：baseURL（API 基础地址）、timeout（超时时间）、headers（默认请求头）、withCredentials（是否携带 cookie）、responseType（响应数据类型）等。"}],keyPoints:["axios.create() 用于创建独立的请求实例","baseURL 统一管理 API 地址前缀","timeout 设置要考虑请求类型和用户体验","环境变量用于管理不同环境的配置","全局配置可以减少重复代码"]},D={dos:["使用环境变量管理不同环境的配置","为不同类型的请求创建不同的实例","设置合理的超时时间","使用 TypeScript 定义配置类型","将配置文件单独管理","在开发环境启用详细的错误信息"],donts:["不要在代码中硬编码 API 地址","不要所有请求使用相同的超时设置","不要在生产环境暴露敏感信息","不要忽略错误处理配置","不要在全局配置中包含业务逻辑"],patterns:["配置工厂模式：根据环境创建不同配置","单例模式：确保配置实例的唯一性","策略模式：根据请求类型选择不同配置","建造者模式：逐步构建复杂的配置对象"]},k=()=>e.jsx(N,{title:"全局配置层",description:"学习如何配置 axios 的全局参数，包括 baseURL、timeout、环境切换等核心功能，为整个应用的请求奠定基础。",overview:C,examples:q,tutorial:U,interview:$,bestPractices:D});export{k as default};
