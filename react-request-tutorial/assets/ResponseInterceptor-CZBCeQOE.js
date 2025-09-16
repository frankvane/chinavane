import{r as m,j as e}from"./index-C7SuDyTR.js";import{C as y}from"./ComponentTemplate-BzrYXZsv.js";const v=()=>{const[l,u]=m.useState(null),[p,g]=m.useState(null),[o,a]=m.useState([]),c=n=>{let t;const r=[];switch(n){case"user":t={code:200,message:"success",data:{user_id:123,user_name:"john_doe",created_at:"2024-01-15T10:30:00Z",is_active:1}};break;case"list":t={code:200,message:"success",data:{items:[{id:1,name:"Item 1",price:"19.99"},{id:2,name:"Item 2",price:"29.99"}],total_count:2,page_size:10}};break;case"nested":t={code:200,message:"success",data:{user_profile:{basic_info:{first_name:"John",last_name:"Doe"},settings:{theme_mode:"dark",notification_enabled:1}}}};break}u(t),r.push("📥 接收原始响应数据");const s=x(t,r);g(s),a(r)},x=(n,t)=>{t.push("🔄 开始数据格式化处理");const r=n.data;t.push("📤 提取 data 字段");const s=d(r);t.push("🐪 字段名转换为驼峰格式");const b=i(s);return t.push("🔢 数据类型标准化处理"),t.push("✅ 数据格式化完成"),b},d=n=>Array.isArray(n)?n.map(d):n!==null&&typeof n=="object"?Object.keys(n).reduce((t,r)=>{const s=r.replace(/_([a-z])/g,(b,h)=>h.toUpperCase());return t[s]=d(n[r]),t},{}):n,i=n=>Array.isArray(n)?n.map(i):n!==null&&typeof n=="object"?Object.keys(n).reduce((t,r)=>{let s=n[r];return typeof s=="string"&&/^\d+(\.\d+)?$/.test(s)?s=parseFloat(s):s===1||s==="1"?s=!0:s===0||s==="0"?s=!1:typeof s=="string"&&/\d{4}-\d{2}-\d{2}T\d{2}:\d{2}:\d{2}/.test(s)?s=new Date(s):typeof s=="object"&&(s=i(s)),t[r]=s,t},{}):n;return e.jsxs("div",{className:"space-y-4",children:[e.jsxs("div",{className:"flex justify-between items-center",children:[e.jsx("h4",{className:"font-semibold text-gray-800",children:"数据格式化演示"}),e.jsxs("div",{className:"space-x-2",children:[e.jsx("button",{onClick:()=>c("user"),className:"px-3 py-2 bg-blue-500 text-white rounded text-sm hover:bg-blue-600",children:"用户数据"}),e.jsx("button",{onClick:()=>c("list"),className:"px-3 py-2 bg-green-500 text-white rounded text-sm hover:bg-green-600",children:"列表数据"}),e.jsx("button",{onClick:()=>c("nested"),className:"px-3 py-2 bg-purple-500 text-white rounded text-sm hover:bg-purple-600",children:"嵌套数据"})]})]}),o.length>0&&e.jsxs("div",{className:"bg-gray-900 text-green-400 p-4 rounded-lg font-mono text-sm",children:[e.jsx("div",{className:"mb-2 text-green-300",children:"📊 数据处理日志:"}),e.jsx("div",{className:"space-y-1",children:o.map((n,t)=>e.jsx("div",{className:"text-blue-400",children:n},t))})]}),l&&p&&e.jsxs("div",{className:"grid grid-cols-1 lg:grid-cols-2 gap-4",children:[e.jsxs("div",{className:"bg-red-50 p-4 rounded-lg border border-red-200",children:[e.jsx("h5",{className:"font-medium text-red-800 mb-2",children:"📥 原始响应数据"}),e.jsx("pre",{className:"text-xs text-red-700 overflow-auto max-h-64",children:JSON.stringify(l,null,2)})]}),e.jsxs("div",{className:"bg-green-50 p-4 rounded-lg border border-green-200",children:[e.jsx("h5",{className:"font-medium text-green-800 mb-2",children:"✨ 格式化后数据"}),e.jsx("pre",{className:"text-xs text-green-700 overflow-auto max-h-64",children:JSON.stringify(p,null,2)})]})]})]})},f=`import React, { useState } from "react";

// 数据格式化演示
const DataFormattingDemo: React.FC = () => {
  const [originalData, setOriginalData] = useState<any>(null);
  const [formattedData, setFormattedData] = useState<any>(null);
  const [processingLog, setProcessingLog] = useState<string[]>([]);

  const simulateApiResponse = (responseType: "user" | "list" | "nested") => {
    let mockResponse;
    const logs: string[] = [];

    switch (responseType) {
      case "user":
        mockResponse = {
          code: 200,
          message: "success",
          data: {
            user_id: 123,
            user_name: "john_doe",
            created_at: "2024-01-15T10:30:00Z",
            is_active: 1,
          },
        };
        break;
      case "list":
        mockResponse = {
          code: 200,
          message: "success",
          data: {
            items: [
              { id: 1, name: "Item 1", price: "19.99" },
              { id: 2, name: "Item 2", price: "29.99" },
            ],
            total_count: 2,
            page_size: 10,
          },
        };
        break;
      case "nested":
        mockResponse = {
          code: 200,
          message: "success",
          data: {
            user_profile: {
              basic_info: {
                first_name: "John",
                last_name: "Doe",
              },
              settings: {
                theme_mode: "dark",
                notification_enabled: 1,
              },
            },
          },
        };
        break;
    }

    setOriginalData(mockResponse);
    logs.push("📥 接收原始响应数据");

    // 模拟数据格式化处理
    const formatted = formatResponseData(mockResponse, logs);
    setFormattedData(formatted);

    setProcessingLog(logs);
  };

  const formatResponseData = (response: any, logs: string[]) => {
    logs.push("🔄 开始数据格式化处理");

    // 提取 data 字段
    const data = response.data;
    logs.push("📤 提取 data 字段");

    // 转换字段名（下划线转驼峰）
    const formatted = convertKeysToCamelCase(data);
    logs.push("🐪 字段名转换为驼峰格式");

    // 数据类型转换
    const processed = processDataTypes(formatted);
    logs.push("🔢 数据类型标准化处理");

    logs.push("✅ 数据格式化完成");
    return processed;
  };

  const convertKeysToCamelCase = (obj: any): any => {
    if (Array.isArray(obj)) {
      return obj.map(convertKeysToCamelCase);
    } else if (obj !== null && typeof obj === "object") {
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

  const processDataTypes = (obj: any): any => {
    if (Array.isArray(obj)) {
      return obj.map(processDataTypes);
    } else if (obj !== null && typeof obj === "object") {
      return Object.keys(obj).reduce((result, key) => {
        let value = obj[key];

        // 转换数字字符串为数字
        if (typeof value === "string" && /^\\d+(\\.\\d+)?$/.test(value)) {
          value = parseFloat(value);
        }
        // 转换布尔值
        else if (value === 1 || value === "1") {
          value = true;
        } else if (value === 0 || value === "0") {
          value = false;
        }
        // 转换日期字符串
        else if (
          typeof value === "string" &&
          /\\d{4}-\\d{2}-\\d{2}T\\d{2}:\\d{2}:\\d{2}/.test(value)
        ) {
          value = new Date(value);
        }
        // 递归处理嵌套对象
        else if (typeof value === "object") {
          value = processDataTypes(value);
        }

        result[key] = value;
        return result;
      }, {} as any);
    }
    return obj;
  };

  return (
    <div className="space-y-4">
      <div className="flex justify-between items-center">
        <h4 className="font-semibold text-gray-800">数据格式化演示</h4>
        <div className="space-x-2">
          <button
            onClick={() => simulateApiResponse("user")}
            className="px-3 py-2 bg-blue-500 text-white rounded text-sm hover:bg-blue-600"
          >
            用户数据
          </button>
          <button
            onClick={() => simulateApiResponse("list")}
            className="px-3 py-2 bg-green-500 text-white rounded text-sm hover:bg-green-600"
          >
            列表数据
          </button>
          <button
            onClick={() => simulateApiResponse("nested")}
            className="px-3 py-2 bg-purple-500 text-white rounded text-sm hover:bg-purple-600"
          >
            嵌套数据
          </button>
        </div>
      </div>

      {processingLog.length > 0 && (
        <div className="bg-gray-900 text-green-400 p-4 rounded-lg font-mono text-sm">
          <div className="mb-2 text-green-300">📊 数据处理日志:</div>
          <div className="space-y-1">
            {processingLog.map((log, index) => (
              <div key={index} className="text-blue-400">
                {log}
              </div>
            ))}
          </div>
        </div>
      )}

      {originalData && formattedData && (
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
          <div className="bg-red-50 p-4 rounded-lg border border-red-200">
            <h5 className="font-medium text-red-800 mb-2">📥 原始响应数据</h5>
            <pre className="text-xs text-red-700 overflow-auto max-h-64">
              {JSON.stringify(originalData, null, 2)}
            </pre>
          </div>
          <div className="bg-green-50 p-4 rounded-lg border border-green-200">
            <h5 className="font-medium text-green-800 mb-2">✨ 格式化后数据</h5>
            <pre className="text-xs text-green-700 overflow-auto max-h-64">
              {JSON.stringify(formattedData, null, 2)}
            </pre>
          </div>
        </div>
      )}
    </div>
  );
};

export default DataFormattingDemo;`,N=()=>{const[l,u]=m.useState([]),[p,g]=m.useState(1),o=(a,c)=>{const x=a>=200&&a<300?"success":"error",d={id:p,status:a,message:c,timestamp:new Date().toLocaleTimeString(),type:x};u(i=>[d,...i.slice(0,4)]),g(i=>i+1)};return e.jsxs("div",{className:"space-y-4",children:[e.jsxs("div",{className:"bg-blue-50 p-4 rounded-lg border border-blue-200",children:[e.jsx("h4",{className:"font-semibold text-blue-800 mb-3",children:"模拟 API 响应"}),e.jsxs("div",{className:"grid grid-cols-2 md:grid-cols-4 gap-2",children:[e.jsx("button",{onClick:()=>o(200,"请求成功"),className:"px-3 py-2 bg-green-500 text-white rounded text-sm hover:bg-green-600",children:"200 成功"}),e.jsx("button",{onClick:()=>o(401,"未授权访问"),className:"px-3 py-2 bg-red-500 text-white rounded text-sm hover:bg-red-600",children:"401 未授权"}),e.jsx("button",{onClick:()=>o(403,"权限不足"),className:"px-3 py-2 bg-orange-500 text-white rounded text-sm hover:bg-orange-600",children:"403 禁止"}),e.jsx("button",{onClick:()=>o(500,"服务器错误"),className:"px-3 py-2 bg-purple-500 text-white rounded text-sm hover:bg-purple-600",children:"500 错误"})]})]}),e.jsxs("div",{className:"bg-white border rounded-lg",children:[e.jsx("div",{className:"p-4 border-b bg-gray-50",children:e.jsx("h4",{className:"font-semibold text-gray-800",children:"响应处理记录"})}),e.jsx("div",{className:"p-4",children:l.length===0?e.jsx("p",{className:"text-gray-500 text-center py-4",children:"暂无响应记录"}):e.jsx("div",{className:"space-y-2",children:l.map(a=>e.jsx("div",{className:`p-3 rounded border ${a.type==="success"?"bg-green-50 border-green-200":"bg-red-50 border-red-200"}`,children:e.jsxs("div",{className:"flex items-center justify-between",children:[e.jsxs("div",{className:"flex items-center space-x-3",children:[e.jsxs("span",{className:"text-sm font-mono text-gray-600",children:["#",a.id]}),e.jsx("span",{className:`px-2 py-1 rounded text-xs font-medium ${a.type==="success"?"bg-green-100 text-green-800":"bg-red-100 text-red-800"}`,children:a.status}),e.jsx("span",{className:"font-medium",children:a.message}),e.jsx("span",{className:`text-xs ${a.type==="success"?"text-green-600":"text-red-600"}`,children:a.type==="success"?"✅ 正常处理":"❌ 错误拦截"})]}),e.jsx("span",{className:"text-sm text-gray-500",children:a.timestamp})]})},a.id))})})]}),e.jsxs("div",{className:"bg-yellow-50 p-4 rounded-lg border border-yellow-200",children:[e.jsx("h5",{className:"font-medium text-yellow-800 mb-2",children:"💡 错误处理说明"}),e.jsxs("ul",{className:"text-sm text-yellow-700 space-y-1",children:[e.jsxs("li",{children:["• ",e.jsx("strong",{children:"2xx:"})," 成功响应，正常返回数据"]}),e.jsxs("li",{children:["• ",e.jsx("strong",{children:"401:"})," 未授权，自动跳转登录页面"]}),e.jsxs("li",{children:["• ",e.jsx("strong",{children:"403:"})," 权限不足，显示权限错误提示"]}),e.jsxs("li",{children:["• ",e.jsx("strong",{children:"5xx:"})," 服务器错误，显示通用错误信息"]})]})]})]})},j=`import React, { useState } from "react";

// 统一错误处理演示
const ErrorHandlingDemo: React.FC = () => {
  const [responses, setResponses] = useState<
    Array<{
      id: number;
      status: number;
      message: string;
      timestamp: string;
      type: "success" | "error";
    }>
  >([]);
  const [requestId, setRequestId] = useState(1);

  const simulateResponse = (status: number, message: string) => {
    const type: "success" | "error" = status >= 200 && status < 300 ? "success" : "error";
    const newResponse = {
      id: requestId,
      status,
      message,
      timestamp: new Date().toLocaleTimeString(),
      type,
    };

    setResponses((prev) => [newResponse, ...prev.slice(0, 4)]);
    setRequestId((prev) => prev + 1);
  };

  return (
    <div className="space-y-4">
      <div className="bg-blue-50 p-4 rounded-lg border border-blue-200">
        <h4 className="font-semibold text-blue-800 mb-3">模拟 API 响应</h4>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-2">
          <button
            onClick={() => simulateResponse(200, "请求成功")}
            className="px-3 py-2 bg-green-500 text-white rounded text-sm hover:bg-green-600"
          >
            200 成功
          </button>
          <button
            onClick={() => simulateResponse(401, "未授权访问")}
            className="px-3 py-2 bg-red-500 text-white rounded text-sm hover:bg-red-600"
          >
            401 未授权
          </button>
          <button
            onClick={() => simulateResponse(403, "权限不足")}
            className="px-3 py-2 bg-orange-500 text-white rounded text-sm hover:bg-orange-600"
          >
            403 禁止
          </button>
          <button
            onClick={() => simulateResponse(500, "服务器错误")}
            className="px-3 py-2 bg-purple-500 text-white rounded text-sm hover:bg-purple-600"
          >
            500 错误
          </button>
        </div>
      </div>

      <div className="bg-white border rounded-lg">
        <div className="p-4 border-b bg-gray-50">
          <h4 className="font-semibold text-gray-800">响应处理记录</h4>
        </div>
        <div className="p-4">
          {responses.length === 0 ? (
            <p className="text-gray-500 text-center py-4">暂无响应记录</p>
          ) : (
            <div className="space-y-2">
              {responses.map((response) => (
                <div
                  key={response.id}
                  className={\`p-3 rounded border \${
                    response.type === "success"
                      ? "bg-green-50 border-green-200"
                      : "bg-red-50 border-red-200"
                  }\`}
                >
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-3">
                      <span className="text-sm font-mono text-gray-600">
                        #{response.id}
                      </span>
                      <span
                        className={\`px-2 py-1 rounded text-xs font-medium \${
                          response.type === "success"
                            ? "bg-green-100 text-green-800"
                            : "bg-red-100 text-red-800"
                        }\`}
                      >
                        {response.status}
                      </span>
                      <span className="font-medium">{response.message}</span>
                      <span
                        className={\`text-xs \${
                          response.type === "success"
                            ? "text-green-600"
                            : "text-red-600"
                        }\`}
                      >
                        {response.type === "success"
                          ? "✅ 正常处理"
                          : "❌ 错误拦截"}
                      </span>
                    </div>
                    <span className="text-sm text-gray-500">
                      {response.timestamp}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>

      <div className="bg-yellow-50 p-4 rounded-lg border border-yellow-200">
        <h5 className="font-medium text-yellow-800 mb-2">💡 错误处理说明</h5>
        <ul className="text-sm text-yellow-700 space-y-1">
          <li>
            • <strong>2xx:</strong> 成功响应，正常返回数据
          </li>
          <li>
            • <strong>401:</strong> 未授权，自动跳转登录页面
          </li>
          <li>
            • <strong>403:</strong> 权限不足，显示权限错误提示
          </li>
          <li>
            • <strong>5xx:</strong> 服务器错误，显示通用错误信息
          </li>
        </ul>
      </div>
    </div>
  );
};

export default ErrorHandlingDemo;`,w=[{title:"核心概念",items:["响应拦截器统一处理所有响应数据","根据 HTTP 状态码分类处理错误","对响应数据进行格式化和标准化","统一封装错误信息，便于前端处理"]},{title:"主要优势",items:["统一错误处理逻辑，提升代码一致性","自动进行数据格式转换，简化前端开发","减少重复代码，提高开发效率","便于维护和扩展全局响应逻辑"]},{title:"适用场景",items:["后端 API 响应格式不统一","需要全局统一错误处理的项目","需要对响应数据进行统一格式化的场景","需要统一管理状态码和异常处理的应用"]},{title:"注意事项",items:["避免在拦截器中过度处理业务逻辑","注意错误处理的优先级和覆盖范围","保持数据转换逻辑的一致性和健壮性","合理处理网络异常和特殊情况"]}],k=[{title:"统一错误处理",component:e.jsx(N,{}),description:"演示如何在响应拦截器中根据状态码进行统一错误处理",observationPoints:["点击不同状态码按钮，观察错误处理的不同策略","注意成功响应和错误响应的不同处理方式","观察错误信息的统一格式化"],keyPoints:["响应拦截器会在收到响应后立即执行","可以根据状态码进行不同的处理策略","401 错误通常需要跳转到登录页面","5xx 错误需要显示用户友好的错误信息"],commonTraps:["没有区分不同类型的错误","错误处理逻辑过于复杂","忘记处理网络错误等异常情况"],solutions:["建立错误码映射表","使用策略模式处理不同错误","实现错误重试机制"],codeExample:{title:"统一错误处理实现",code:j}},{title:"数据格式化处理",component:e.jsx(v,{}),description:"演示如何在响应拦截器中进行数据格式标准化处理",observationPoints:["点击不同数据类型按钮，观察数据转换过程","注意原始数据和格式化后数据的差异","观察字段名从下划线转换为驼峰格式","注意数据类型的自动转换（字符串转数字、布尔值等）"],keyPoints:["统一数据格式可以简化前端处理逻辑","字段名转换（下划线转驼峰）符合前端命名规范","数据类型转换可以避免类型错误","日期字符串自动转换为 Date 对象"],commonTraps:["过度转换导致数据丢失","转换逻辑不够健壮","没有考虑嵌套对象的处理"],solutions:["使用递归处理嵌套数据","添加数据验证和容错机制","保留原始数据的备份"],codeExample:{title:"数据格式化处理实现",code:f}}],D={concepts:["axios 响应拦截器的工作原理","HTTP 状态码的分类和处理策略","数据格式标准化的必要性","错误处理的最佳实践","数据类型转换的实现方法"],steps:["创建 axios 实例","使用 interceptors.response.use() 添加拦截器","在成功回调中处理正常响应","在错误回调中处理异常响应","实现数据格式标准化","添加错误分类处理逻辑","测试各种响应场景"],tips:["响应拦截器应该保持数据处理的一致性","错误处理要考虑用户体验","数据转换要保证健壮性","合理使用 TypeScript 类型定义","在开发环境可以保留详细的错误信息"]},R={questions:[{question:"响应拦截器的执行时机是什么？",answer:"响应拦截器在收到服务器响应后、Promise 解析之前执行。成功的响应（2xx 状态码）会进入第一个回调函数，失败的响应会进入第二个回调函数。"},{question:"如何在响应拦截器中处理不同的 HTTP 状态码？",answer:"在错误回调函数中通过 error.response.status 获取状态码，然后使用 switch 语句或策略模式进行分类处理。例如 401 跳转登录，403 显示权限错误，5xx 显示服务器错误。"},{question:"为什么要在响应拦截器中进行数据格式化？",answer:"统一数据格式可以简化前端处理逻辑，避免在每个组件中重复处理。常见的格式化包括字段名转换（下划线转驼峰）、数据类型转换、提取嵌套数据等。"},{question:"响应拦截器中如何处理网络错误？",answer:"网络错误时 error.response 为 undefined，需要单独处理。通常显示网络连接错误提示，并可以实现自动重试机制。"}],keyPoints:["响应拦截器在收到响应后执行，可以统一处理响应数据","根据 HTTP 状态码进行分类错误处理","数据格式标准化可以简化前端处理逻辑","错误处理要考虑用户体验和业务需求","网络错误需要单独处理和提示"]},T={dos:["统一处理所有响应数据，避免在各个组件中重复处理","根据 HTTP 状态码分类处理错误，提升用户体验","对响应数据进行格式化，保持前端数据结构一致性","为网络错误和异常情况提供友好的提示","合理使用 TypeScript 类型定义响应数据结构","在开发环境下保留详细的错误日志，便于调试","对嵌套数据和特殊字段进行递归处理和校验"],donts:["不要在拦截器中过度处理业务逻辑，应保持关注点单一","不要忽略网络错误和无响应的异常情况","不要在拦截器中直接操作 UI 或跳转页面","不要对所有响应一刀切，需根据业务需求灵活处理","不要遗漏对嵌套对象和数组的格式化处理","不要在生产环境暴露详细错误信息"],patterns:["统一错误处理模式：集中处理所有 HTTP 错误和异常","数据格式化模式：将后端数据结构转换为前端友好格式","状态码映射模式：通过映射表管理不同状态码的处理策略","递归转换模式：对嵌套对象和数组递归格式化字段名","策略模式：根据不同错误类型采用不同处理策略"]},S=()=>e.jsx(y,{title:"响应拦截器",description:"学习如何使用 axios 响应拦截器进行统一错误处理、数据格式化、状态码处理等响应数据的统一处理。",overview:w,examples:k,tutorial:D,interview:R,bestPractices:T});export{S as default};
