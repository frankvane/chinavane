import{r as l,j as e}from"./index-C7SuDyTR.js";import{C as f}from"./ComponentTemplate-BzrYXZsv.js";import{a as g}from"./index-NIGUFBhG.js";const j=()=>{const[t,p]=l.useState(null),[a,m]=l.useState(null),[d,r]=l.useState(!1),b=async()=>{r(!0);try{const n={data:(await g.get("https://jsonplaceholder.typicode.com/users/1")).data,message:"用户信息获取成功",code:200};return p(n),n}catch(o){const n={data:{},message:`获取用户失败: ${o.message}`,code:500};return p(n),n}finally{r(!1)}},x=async()=>{r(!0);try{const n={data:(await g.get("https://jsonplaceholder.typicode.com/users?_limit=3")).data,message:"用户列表获取成功",code:200};return m(n),n}catch(o){const n={data:[],message:`获取用户列表失败: ${o.message}`,code:500};return m(n),n}finally{r(!1)}};return e.jsxs("div",{className:"space-y-6",children:[e.jsxs("div",{className:"flex gap-4",children:[e.jsx("button",{onClick:b,disabled:d,className:"bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-lg font-medium transition-colors disabled:opacity-50 disabled:cursor-not-allowed",children:"获取单个用户 (ApiResponse<User>)"}),e.jsx("button",{onClick:x,disabled:d,className:"bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded-lg font-medium transition-colors disabled:opacity-50 disabled:cursor-not-allowed",children:"获取用户列表 (ApiResponse<User[]>)"})]}),d&&e.jsxs("div",{className:"flex items-center gap-2 text-blue-600",children:[e.jsx("div",{className:"animate-spin rounded-full h-4 w-4 border-b-2 border-blue-600"}),e.jsx("span",{children:"请求进行中..."})]}),e.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-6",children:[e.jsxs("div",{className:"bg-gray-50 rounded-lg p-4",children:[e.jsx("h4",{className:"font-medium mb-3 text-gray-800",children:"单个用户结果 (ApiResponse<User>)"}),t?e.jsxs("div",{className:"space-y-3",children:[e.jsxs("div",{className:"bg-white p-3 rounded border",children:[e.jsx("div",{className:"text-sm text-gray-600 mb-2",children:"响应信息:"}),e.jsxs("div",{className:"text-sm",children:[e.jsxs("div",{children:["消息: ",t.message]}),e.jsxs("div",{children:["状态码: ",t.code]})]})]}),e.jsxs("div",{className:"bg-white p-3 rounded border",children:[e.jsx("div",{className:"text-sm text-gray-600 mb-2",children:"用户数据:"}),t.code===200?e.jsxs("div",{className:"text-sm space-y-1",children:[e.jsxs("div",{children:["ID: ",t.data.id]}),e.jsxs("div",{children:["姓名: ",t.data.name]}),e.jsxs("div",{children:["邮箱: ",t.data.email]})]}):e.jsx("div",{className:"text-red-500 text-sm",children:"请求失败"})]})]}):e.jsx("p",{className:"text-gray-500 text-sm",children:"暂无数据"})]}),e.jsxs("div",{className:"bg-gray-50 rounded-lg p-4",children:[e.jsx("h4",{className:"font-medium mb-3 text-gray-800",children:"用户列表结果 (ApiResponse<User[]>)"}),a?e.jsxs("div",{className:"space-y-3",children:[e.jsxs("div",{className:"bg-white p-3 rounded border",children:[e.jsx("div",{className:"text-sm text-gray-600 mb-2",children:"响应信息:"}),e.jsxs("div",{className:"text-sm",children:[e.jsxs("div",{children:["消息: ",a.message]}),e.jsxs("div",{children:["状态码: ",a.code]}),e.jsxs("div",{children:["数据长度: ",a.data.length]})]})]}),e.jsxs("div",{className:"bg-white p-3 rounded border",children:[e.jsx("div",{className:"text-sm text-gray-600 mb-2",children:"用户列表:"}),a.code===200?e.jsx("div",{className:"space-y-2",children:a.data.map(o=>e.jsxs("div",{className:"text-sm border-l-2 border-blue-200 pl-2",children:[e.jsxs("div",{children:["ID: ",o.id]}),e.jsxs("div",{children:["姓名: ",o.name]}),e.jsxs("div",{children:["邮箱: ",o.email]})]},o.id))}):e.jsx("div",{className:"text-red-500 text-sm",children:"请求失败"})]})]}):e.jsx("p",{className:"text-gray-500 text-sm",children:"暂无数据"})]})]}),e.jsxs("div",{className:"bg-blue-50 border border-blue-200 rounded-lg p-4",children:[e.jsx("h4",{className:"font-medium mb-2 text-blue-800",children:"TypeScript 类型说明"}),e.jsxs("div",{className:"text-sm text-blue-700 space-y-1",children:[e.jsxs("div",{children:["• ",e.jsx("code",{className:"bg-blue-100 px-1 rounded",children:"ApiResponse<User>"})," - 单个用户的 API 响应类型"]}),e.jsxs("div",{children:["• ",e.jsx("code",{className:"bg-blue-100 px-1 rounded",children:"ApiResponse<User[]>"})," - 用户数组的 API 响应类型"]}),e.jsxs("div",{children:["• 泛型 ",e.jsx("code",{className:"bg-blue-100 px-1 rounded",children:"<T>"})," 确保 data 字段的类型安全"]}),e.jsx("div",{children:"• TypeScript 编译时会检查类型匹配，提供智能提示"})]})]})]})},w=`import React, { useState } from "react";
import axios from "axios";

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

const GenericSupportDemo: React.FC = () => {
  const [userResult, setUserResult] = useState<ApiResponse<User> | null>(null);
  const [listResult, setListResult] = useState<ApiResponse<User[]> | null>(
    null
  );
  const [isLoading, setIsLoading] = useState(false);

  // 泛型 API 方法模拟
  const fetchUser = async (): Promise<ApiResponse<User>> => {
    setIsLoading(true);
    try {
      const response = await axios.get(
        "https://jsonplaceholder.typicode.com/users/1"
      );
      const apiResponse: ApiResponse<User> = {
        data: response.data,
        message: "用户信息获取成功",
        code: 200,
      };
      setUserResult(apiResponse);
      return apiResponse;
    } catch (error: any) {
      const errorResponse: ApiResponse<User> = {
        data: {} as User,
        message: \`获取用户失败: \${error.message}\`,
        code: 500,
      };
      setUserResult(errorResponse);
      return errorResponse;
    } finally {
      setIsLoading(false);
    }
  };

  const fetchUserList = async (): Promise<ApiResponse<User[]>> => {
    setIsLoading(true);
    try {
      const response = await axios.get(
        "https://jsonplaceholder.typicode.com/users?_limit=3"
      );
      const apiResponse: ApiResponse<User[]> = {
        data: response.data,
        message: "用户列表获取成功",
        code: 200,
      };
      setListResult(apiResponse);
      return apiResponse;
    } catch (error: any) {
      const errorResponse: ApiResponse<User[]> = {
        data: [],
        message: \`获取用户列表失败: \${error.message}\`,
        code: 500,
      };
      setListResult(errorResponse);
      return errorResponse;
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="space-y-6">
      {/* 操作按钮 */}
      <div className="flex gap-4">
        <button
          onClick={fetchUser}
          disabled={isLoading}
          className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-lg font-medium transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
        >
          获取单个用户 (ApiResponse&lt;User&gt;)
        </button>
        <button
          onClick={fetchUserList}
          disabled={isLoading}
          className="bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded-lg font-medium transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
        >
          获取用户列表 (ApiResponse&lt;User[]&gt;)
        </button>
      </div>

      {/* 加载状态 */}
      {isLoading && (
        <div className="flex items-center gap-2 text-blue-600">
          <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-blue-600"></div>
          <span>请求进行中...</span>
        </div>
      )}

      {/* 结果展示 */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* 单个用户结果 */}
        <div className="bg-gray-50 rounded-lg p-4">
          <h4 className="font-medium mb-3 text-gray-800">
            单个用户结果 (ApiResponse&lt;User&gt;)
          </h4>
          {userResult ? (
            <div className="space-y-3">
              <div className="bg-white p-3 rounded border">
                <div className="text-sm text-gray-600 mb-2">响应信息:</div>
                <div className="text-sm">
                  <div>消息: {userResult.message}</div>
                  <div>状态码: {userResult.code}</div>
                </div>
              </div>
              <div className="bg-white p-3 rounded border">
                <div className="text-sm text-gray-600 mb-2">用户数据:</div>
                {userResult.code === 200 ? (
                  <div className="text-sm space-y-1">
                    <div>ID: {userResult.data.id}</div>
                    <div>姓名: {userResult.data.name}</div>
                    <div>邮箱: {userResult.data.email}</div>
                  </div>
                ) : (
                  <div className="text-red-500 text-sm">请求失败</div>
                )}
              </div>
            </div>
          ) : (
            <p className="text-gray-500 text-sm">暂无数据</p>
          )}
        </div>

        {/* 用户列表结果 */}
        <div className="bg-gray-50 rounded-lg p-4">
          <h4 className="font-medium mb-3 text-gray-800">
            用户列表结果 (ApiResponse&lt;User[]&gt;)
          </h4>
          {listResult ? (
            <div className="space-y-3">
              <div className="bg-white p-3 rounded border">
                <div className="text-sm text-gray-600 mb-2">响应信息:</div>
                <div className="text-sm">
                  <div>消息: {listResult.message}</div>
                  <div>状态码: {listResult.code}</div>
                  <div>数据长度: {listResult.data.length}</div>
                </div>
              </div>
              <div className="bg-white p-3 rounded border">
                <div className="text-sm text-gray-600 mb-2">用户列表:</div>
                {listResult.code === 200 ? (
                  <div className="space-y-2">
                    {listResult.data.map((user) => (
                      <div key={user.id} className="text-sm border-l-2 border-blue-200 pl-2">
                        <div>ID: {user.id}</div>
                        <div>姓名: {user.name}</div>
                        <div>邮箱: {user.email}</div>
                      </div>
                    ))}
                  </div>
                ) : (
                  <div className="text-red-500 text-sm">请求失败</div>
                )}
              </div>
            </div>
          ) : (
            <p className="text-gray-500 text-sm">暂无数据</p>
          )}
        </div>
      </div>

      {/* TypeScript 类型说明 */}
      <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
        <h4 className="font-medium mb-2 text-blue-800">TypeScript 类型说明</h4>
        <div className="text-sm text-blue-700 space-y-1">
          <div>• <code className="bg-blue-100 px-1 rounded">ApiResponse&lt;User&gt;</code> - 单个用户的 API 响应类型</div>
          <div>• <code className="bg-blue-100 px-1 rounded">ApiResponse&lt;User[]&gt;</code> - 用户数组的 API 响应类型</div>
          <div>• 泛型 <code className="bg-blue-100 px-1 rounded">&lt;T&gt;</code> 确保 data 字段的类型安全</div>
          <div>• TypeScript 编译时会检查类型匹配，提供智能提示</div>
        </div>
      </div>
    </div>
  );
};

export default GenericSupportDemo;`,P=()=>{const[t,p]=l.useState([]),[a,m]=l.useState(!1),d=l.useRef(new Map),r=l.useCallback(s=>{p(i=>[s,...i])},[]),b=l.useCallback(()=>{p([])},[]),x=l.useCallback(async(s,i,h)=>{const v=`${s}-${Date.now()}`,y=new AbortController;d.current.set(v,y),m(!0);const T=Date.now();try{let c;const u={signal:y.signal,timeout:5e3};switch(s.toUpperCase()){case"GET":c=await g.get(`https://jsonplaceholder.typicode.com${i}`,u);break;case"POST":c=await g.post(`https://jsonplaceholder.typicode.com${i}`,h,u);break;case"PUT":c=await g.put(`https://jsonplaceholder.typicode.com${i}`,h,u);break;case"DELETE":c=await g.delete(`https://jsonplaceholder.typicode.com${i}`,u);break;default:throw new Error(`不支持的 HTTP 方法: ${s}`)}const R=Date.now()-T,N=`✅ ${s} ${i} - ${c.status} (${R}ms)
${JSON.stringify(c.data,null,2).substring(0,200)}...`;r(N)}catch(c){const u=Date.now()-T;c.name==="CanceledError"?r(`🚫 ${s} ${i} - 请求已取消 (${u}ms)`):r(`❌ ${s} ${i} - 错误: ${c.message} (${u}ms)`)}finally{m(!1),d.current.delete(v)}},[r]),o=l.useCallback(()=>{d.current.forEach(s=>{s.abort()}),d.current.clear(),r("🚫 所有请求已取消")},[r]),n=[{name:"GET",endpoint:"/users/1",color:"bg-green-500 hover:bg-green-600",description:"获取用户信息"},{name:"POST",endpoint:"/users",data:{name:"新用户",email:"user@example.com"},color:"bg-blue-500 hover:bg-blue-600",description:"创建新用户"},{name:"PUT",endpoint:"/users/1",data:{id:1,name:"更新用户",email:"updated@example.com"},color:"bg-yellow-500 hover:bg-yellow-600",description:"更新用户信息"},{name:"DELETE",endpoint:"/users/1",color:"bg-red-500 hover:bg-red-600",description:"删除用户"}];return e.jsxs("div",{className:"space-y-6",children:[e.jsx("div",{className:"grid grid-cols-2 md:grid-cols-4 gap-4",children:n.map(s=>e.jsxs("button",{onClick:()=>x(s.name,s.endpoint,s.data),disabled:a,className:`${s.color} text-white px-4 py-3 rounded-lg font-medium transition-colors disabled:opacity-50 disabled:cursor-not-allowed`,title:s.description,children:[s.name,e.jsx("div",{className:"text-xs mt-1 opacity-80",children:s.description})]},s.name))}),e.jsxs("div",{className:"flex gap-4",children:[e.jsx("button",{onClick:o,disabled:!a,className:"bg-gray-500 hover:bg-gray-600 text-white px-4 py-2 rounded-lg font-medium transition-colors disabled:opacity-50 disabled:cursor-not-allowed",children:"取消请求"}),e.jsx("button",{onClick:b,className:"bg-purple-500 hover:bg-purple-600 text-white px-4 py-2 rounded-lg font-medium transition-colors",children:"清空日志"})]}),a&&e.jsxs("div",{className:"flex items-center gap-2 text-blue-600",children:[e.jsx("div",{className:"animate-spin rounded-full h-4 w-4 border-b-2 border-blue-600"}),e.jsx("span",{children:"请求进行中..."})]}),e.jsxs("div",{className:"bg-gray-50 rounded-lg p-4",children:[e.jsx("h4",{className:"font-medium mb-3 text-gray-800",children:"请求日志"}),e.jsx("div",{className:"space-y-2 max-h-96 overflow-y-auto",children:t.length===0?e.jsx("p",{className:"text-gray-500 text-sm",children:"暂无请求记录"}):t.map((s,i)=>e.jsx("div",{className:"bg-white p-3 rounded border text-sm font-mono whitespace-pre-wrap",children:s},i))})]})]})},A=`import React, { useCallback, useRef, useState } from "react";
import axios from "axios";

// 接口定义已移除

const HttpMethodsDemo: React.FC = () => {
  const [responses, setResponses] = useState<string[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const abortControllersRef = useRef<Map<string, AbortController>>(new Map());

  const addResponse = useCallback((response: string) => {
    setResponses((prev) => [response, ...prev]);
  }, []);

  const clearResponses = useCallback(() => {
    setResponses([]);
  }, []);

  const simulateRequest = useCallback(
    async (method: string, endpoint: string, data?: any) => {
      const requestId = \`\${method}-\${Date.now()}\`;
      const abortController = new AbortController();
      abortControllersRef.current.set(requestId, abortController);

      setIsLoading(true);
      const startTime = Date.now();

      try {
        // 模拟不同的 HTTP 方法
        let response;
        const config = {
          signal: abortController.signal,
          timeout: 5000,
        };

        switch (method.toUpperCase()) {
          case "GET":
            response = await axios.get(
              \`https://jsonplaceholder.typicode.com\${endpoint}\`,
              config
            );
            break;
          case "POST":
            response = await axios.post(
              \`https://jsonplaceholder.typicode.com\${endpoint}\`,
              data,
              config
            );
            break;
          case "PUT":
            response = await axios.put(
              \`https://jsonplaceholder.typicode.com\${endpoint}\`,
              data,
              config
            );
            break;
          case "DELETE":
            response = await axios.delete(
              \`https://jsonplaceholder.typicode.com\${endpoint}\`,
              config
            );
            break;
          default:
            throw new Error(\`不支持的 HTTP 方法: \${method}\`);
        }

        const duration = Date.now() - startTime;
        const result = \`✅ \${method} \${endpoint} - \${response.status} (\${duration}ms)\\n\${JSON.stringify(
          response.data,
          null,
          2
        ).substring(0, 200)}...\`;
        addResponse(result);
      } catch (error: any) {
        const duration = Date.now() - startTime;
        if (error.name === "CanceledError") {
          addResponse(\`🚫 \${method} \${endpoint} - 请求已取消 (\${duration}ms)\`);
        } else {
          addResponse(
            \`❌ \${method} \${endpoint} - 错误: \${error.message} (\${duration}ms)\`
          );
        }
      } finally {
        setIsLoading(false);
        abortControllersRef.current.delete(requestId);
      }
    },
    [addResponse]
  );

  const cancelRequest = useCallback(() => {
    abortControllersRef.current.forEach((controller) => {
      controller.abort();
    });
    abortControllersRef.current.clear();
    addResponse("🚫 所有请求已取消");
  }, [addResponse]);

  const methods = [
    {
      name: "GET",
      endpoint: "/users/1",
      color: "bg-green-500 hover:bg-green-600",
      description: "获取用户信息",
    },
    {
      name: "POST",
      endpoint: "/users",
      data: { name: "新用户", email: "user@example.com" },
      color: "bg-blue-500 hover:bg-blue-600",
      description: "创建新用户",
    },
    {
      name: "PUT",
      endpoint: "/users/1",
      data: { id: 1, name: "更新用户", email: "updated@example.com" },
      color: "bg-yellow-500 hover:bg-yellow-600",
      description: "更新用户信息",
    },
    {
      name: "DELETE",
      endpoint: "/users/1",
      color: "bg-red-500 hover:bg-red-600",
      description: "删除用户",
    },
  ];

  return (
    <div className="space-y-6">
      {/* HTTP 方法按钮 */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {methods.map((method) => (
          <button
            key={method.name}
            onClick={() =>
              simulateRequest(method.name, method.endpoint, method.data)
            }
            disabled={isLoading}
            className={\`\${
              method.color
            } text-white px-4 py-3 rounded-lg font-medium transition-colors disabled:opacity-50 disabled:cursor-not-allowed\`}
            title={method.description}
          >
            {method.name}
            <div className="text-xs mt-1 opacity-80">{method.description}</div>
          </button>
        ))}
      </div>

      {/* 操作按钮 */}
      <div className="flex gap-4">
        <button
          onClick={cancelRequest}
          disabled={!isLoading}
          className="bg-gray-500 hover:bg-gray-600 text-white px-4 py-2 rounded-lg font-medium transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
        >
          取消请求
        </button>
        <button
          onClick={clearResponses}
          className="bg-purple-500 hover:bg-purple-600 text-white px-4 py-2 rounded-lg font-medium transition-colors"
        >
          清空日志
        </button>
      </div>

      {/* 请求状态 */}
      {isLoading && (
        <div className="flex items-center gap-2 text-blue-600">
          <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-blue-600"></div>
          <span>请求进行中...</span>
        </div>
      )}

      {/* 请求日志 */}
      <div className="bg-gray-50 rounded-lg p-4">
        <h4 className="font-medium mb-3 text-gray-800">请求日志</h4>
        <div className="space-y-2 max-h-96 overflow-y-auto">
          {responses.length === 0 ? (
            <p className="text-gray-500 text-sm">暂无请求记录</p>
          ) : (
            responses.map((response, index) => (
              <div
                key={index}
                className="bg-white p-3 rounded border text-sm font-mono whitespace-pre-wrap"
              >
                {response}
              </div>
            ))
          )}
        </div>
      </div>
    </div>
  );
};

export default HttpMethodsDemo;`,U=()=>{const t=[{title:"核心概念",items:["HTTP 方法封装：将原生的 fetch 或 axios 方法封装成更易用的 get、post、put、delete 方法","TypeScript 泛型支持：为每个请求方法提供类型安全的返回值类型定义","请求取消机制：支持单个请求取消和批量取消所有进行中的请求","统一错误处理：在方法层统一处理 HTTP 错误和网络异常"]},{title:"主要优势",items:["类型安全：TypeScript 泛型确保请求和响应数据的类型正确性","使用简便：提供简洁的 API，隐藏底层实现复杂性","功能完整：支持请求取消、错误处理、超时控制等完整功能","易于扩展：可以轻松添加新的 HTTP 方法或功能增强"]},{title:"适用场景",items:["RESTful API 调用：标准的 CRUD 操作和资源管理","TypeScript 项目：需要严格类型检查的前端应用","复杂交互场景：需要频繁取消请求的用户界面","团队协作项目：需要统一 API 调用规范的大型项目"]},{title:"注意事项",items:["内存泄漏：确保组件卸载时取消所有进行中的请求","错误边界：合理处理网络错误，避免应用崩溃","类型定义：保持接口类型定义与后端 API 的同步","性能考虑：避免不必要的请求重复发送"]}],p=[{title:"HTTP 方法封装",component:e.jsx(P,{}),description:"演示 GET、POST、PUT、DELETE 等 HTTP 方法的封装和使用",observationPoints:["点击不同的 HTTP 方法按钮，观察请求的发送和响应过程","注意每种方法的请求参数和响应数据格式差异","观察请求取消功能的实现和效果"],keyPoints:["每种 HTTP 方法都有对应的封装函数","支持 AbortController 实现请求取消","统一的错误处理和响应格式"],commonTraps:["忘记处理请求取消的清理工作","没有统一的错误处理机制","缺乏请求和响应的类型定义"],solutions:["使用 AbortController 管理请求生命周期","在方法层统一处理 HTTP 状态码和错误","为每个 API 定义明确的 TypeScript 接口"],codeExample:{title:"HTTP 方法封装实现",language:"typescript",code:A,highlightLines:[31,40,85,95]}},{title:"TypeScript 泛型支持",component:e.jsx(j,{}),description:"演示如何使用 TypeScript 泛型为 HTTP 方法提供类型安全",observationPoints:["观察不同数据类型（单个对象 vs 数组）的请求和响应","注意 TypeScript 如何提供类型检查和智能提示","查看响应数据的结构化展示"],keyPoints:["泛型 <T> 提供编译时类型检查","ApiResponse<T> 确保响应数据类型安全","支持复杂数据结构的类型定义"],commonTraps:["类型定义与实际 API 响应不匹配","忘记为复杂数据结构定义接口","过度使用 any 类型失去类型安全"],solutions:["使用工具自动生成 API 类型定义","建立完整的接口类型库","定期验证类型定义与 API 的一致性"],codeExample:{title:"TypeScript 泛型支持实现",language:"typescript",code:w,highlightLines:[15,23,30,50]}}],a={concepts:["方法层是请求封装的核心，提供统一的 HTTP 方法接口","TypeScript 泛型确保类型安全，提高开发效率和代码质量","AbortController 提供请求取消能力，避免内存泄漏","统一的错误处理机制简化异常情况的处理"],steps:["定义基础的 HTTP 方法接口（get、post、put、delete）","为每个方法添加 TypeScript 泛型支持","实现 AbortController 请求取消机制","建立统一的错误处理和响应格式","添加请求配置选项（超时、重试等）","实现批量请求取消功能"],tips:["使用 AbortController 管理请求生命周期，避免内存泄漏","为常用的 API 响应格式定义通用的泛型接口","在组件卸载时记得取消所有进行中的请求","使用 TypeScript 的联合类型处理多种可能的响应格式"]},m={questions:[{question:"如何设计一个支持 TypeScript 泛型的 HTTP 方法封装？",answer:"设计要点：1) 定义通用的 ApiResponse<T> 接口；2) 为每个 HTTP 方法添加泛型参数 <T>；3) 使用 Promise<ApiResponse<T>> 作为返回类型；4) 提供类型断言确保运行时类型安全；5) 建立完整的接口类型库。"},{question:"AbortController 在请求取消中的作用是什么？",answer:"AbortController 作用：1) 提供标准的请求取消机制；2) 避免组件卸载后的内存泄漏；3) 支持批量取消多个请求；4) 与 fetch API 原生集成；5) 可以设置超时自动取消；6) 提供取消事件监听能力。"},{question:"如何在方法层实现统一的错误处理？",answer:"统一错误处理策略：1) 在每个 HTTP 方法中捕获异常；2) 根据 HTTP 状态码分类处理错误；3) 统一错误响应格式；4) 提供错误重试机制；5) 记录错误日志用于调试；6) 向上层抛出标准化的错误对象。"},{question:"方法层与拦截器层的职责如何划分？",answer:"职责划分：方法层负责：HTTP 方法封装、泛型支持、请求取消、基础错误处理；拦截器层负责：全局配置注入、统一数据转换、跨请求的通用逻辑、全局错误拦截。方法层更关注单个请求的处理，拦截器层关注全局的请求处理。"}],keyPoints:["方法层是请求封装的核心，提供统一的 API 接口","TypeScript 泛型提供编译时类型检查和智能提示","AbortController 是现代浏览器标准的请求取消方案","统一错误处理简化异常情况的处理逻辑"]},d={dos:["为每个 HTTP 方法提供 TypeScript 泛型支持","使用 AbortController 实现请求取消功能","建立统一的 API 响应格式和错误处理","为常用数据类型定义完整的接口","在组件卸载时取消所有进行中的请求","提供请求配置选项（超时、重试等）","使用 Map 管理多个 AbortController","为复杂 API 提供专门的类型定义"],donts:["不要忽略请求取消的内存泄漏问题","不要在方法层处理业务逻辑","不要过度使用 any 类型","不要忘记处理网络异常和超时","不要让错误处理逻辑过于复杂","不要在每个方法中重复相同的逻辑","不要忽略 HTTP 状态码的处理"],patterns:["泛型模式（Generic Pattern）：使用 TypeScript 泛型提供类型安全","取消令牌模式（Cancellation Token Pattern）：使用 AbortController 管理请求生命周期","统一响应模式（Unified Response Pattern）：标准化 API 响应格式","错误处理模式（Error Handling Pattern）：统一异常处理和错误分类","配置对象模式（Options Object Pattern）：使用配置对象传递请求参数","工厂模式（Factory Pattern）：根据配置创建不同的 HTTP 客户端实例"]};return e.jsx(f,{title:"方法层",description:"学习如何封装 HTTP 方法，支持 TypeScript 泛型、请求取消和统一错误处理，构建类型安全的 API 调用层。",overview:t,examples:p,tutorial:a,interview:m,bestPractices:d})};export{U as default};
