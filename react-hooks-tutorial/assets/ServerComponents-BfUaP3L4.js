import{r as i,j as e}from"./index-nevtk0dH.js";import{C as j}from"./ComponentTemplate-CQT_cNgc.js";const x={users:[{id:1,name:"张三",email:"zhangsan@example.com",role:"admin",lastLogin:"2024-01-15"},{id:2,name:"李四",email:"lisi@example.com",role:"user",lastLogin:"2024-01-14"},{id:3,name:"王五",email:"wangwu@example.com",role:"user",lastLogin:"2024-01-13"},{id:4,name:"赵六",email:"zhaoliu@example.com",role:"moderator",lastLogin:"2024-01-12"}],posts:[{id:1,title:"React 18 新特性",content:"React 18 带来了许多激动人心的新特性...",authorId:1,publishDate:"2024-01-10",views:1250},{id:2,title:"TypeScript 最佳实践",content:"TypeScript 在现代前端开发中的应用...",authorId:2,publishDate:"2024-01-08",views:890},{id:3,title:"Next.js 服务端渲染",content:"Next.js 提供了强大的 SSR 功能...",authorId:1,publishDate:"2024-01-05",views:2100},{id:4,title:"CSS-in-JS 解决方案",content:"现代 CSS-in-JS 库的对比和选择...",authorId:3,publishDate:"2024-01-03",views:670}],comments:[{id:1,postId:1,authorId:2,content:"很好的文章，学到了很多！",createDate:"2024-01-11"},{id:2,postId:1,authorId:3,content:"期待更多关于 React 18 的内容",createDate:"2024-01-11"},{id:3,postId:2,authorId:1,content:"TypeScript 确实很重要",createDate:"2024-01-09"},{id:4,postId:3,authorId:4,content:"Next.js 的 SSR 真的很强大",createDate:"2024-01-06"}]},N={fetchUsers:()=>new Promise(n=>{setTimeout(()=>n([...x.users]),800)}),fetchPosts:()=>new Promise(n=>{setTimeout(()=>n([...x.posts]),1e3)}),fetchComments:n=>new Promise(t=>{setTimeout(()=>{const a=x.comments.filter(s=>s.postId===n);t(a)},600)}),fetchUserById:n=>new Promise(t=>{setTimeout(()=>{const a=x.users.find(s=>s.id===n)||null;t(a)},400)})};function y(n,t=[]){const[a,s]=i.useState(null),[l,d]=i.useState(!0),[m,o]=i.useState(null);return i.useEffect(()=>{let r=!1;return d(!0),o(null),(async()=>{try{const c=await n();r||s(c)}catch(c){r||o(c instanceof Error?c.message:"获取数据失败")}finally{r||d(!1)}})(),()=>{r=!0}},t),{data:a,loading:l,error:m}}function w(n,t,a){const[s,l]=i.useState(a||null),[d,m]=i.useState(!1),[o,r]=i.useState(!a),[h,c]=i.useState(null);return i.useEffect(()=>{m(!0),a?r(!1):t().then(l).catch(v=>{c(v instanceof Error?v.message:"获取数据失败")}).finally(()=>r(!1))},[n]),{data:s,loading:o,error:h,isHydrated:d,isSSR:!d&&!!a}}const f=()=>{const{data:n,loading:t,error:a}=y(N.fetchUsers);return t?e.jsx("div",{className:"p-4 bg-gray-50 rounded-lg",children:e.jsx("div",{className:"animate-pulse space-y-4",children:[1,2,3,4].map(s=>e.jsxs("div",{className:"flex items-center space-x-4",children:[e.jsx("div",{className:"w-12 h-12 bg-gray-200 rounded-full"}),e.jsxs("div",{className:"flex-1 space-y-2",children:[e.jsx("div",{className:"h-4 bg-gray-200 rounded w-3/4"}),e.jsx("div",{className:"h-3 bg-gray-200 rounded w-1/2"})]})]},s))})}):a?e.jsx("div",{className:"p-4 bg-red-50 border border-red-200 rounded-lg",children:e.jsxs("p",{className:"text-red-600",children:["错误: ",a]})}):e.jsxs("div",{className:"space-y-4",children:[e.jsx("h3",{className:"text-lg font-semibold",children:"用户列表"}),n==null?void 0:n.map(s=>e.jsx("div",{className:"p-4 bg-white border rounded-lg",children:e.jsxs("div",{className:"flex items-center justify-between",children:[e.jsxs("div",{children:[e.jsx("h4",{className:"font-medium",children:s.name}),e.jsx("p",{className:"text-sm text-gray-600",children:s.email})]}),e.jsxs("div",{className:"text-right",children:[e.jsx("span",{className:`px-2 py-1 rounded text-xs ${s.role==="admin"?"bg-red-100 text-red-800":s.role==="moderator"?"bg-yellow-100 text-yellow-800":"bg-green-100 text-green-800"}`,children:s.role}),e.jsxs("p",{className:"text-xs text-gray-500 mt-1",children:["最后登录: ",s.lastLogin]})]})]})},s.id))]})},S=()=>{const[n,t]=i.useState("ssr"),a=n==="ssr"?x.users.slice(0,2):void 0,{data:s,loading:l,error:d,isHydrated:m,isSSR:o}=w("users",N.fetchUsers,a);return e.jsxs("div",{className:"max-w-lg mx-auto p-4 bg-gray-50 rounded-lg",children:[e.jsx("h3",{className:"text-lg font-semibold mb-4",children:"SSR vs CSR 演示"}),e.jsxs("div",{className:"mb-4",children:[e.jsxs("div",{className:"flex space-x-2 mb-3",children:[e.jsx("button",{onClick:()=>t("ssr"),className:`px-3 py-1 rounded text-sm ${n==="ssr"?"bg-blue-500 text-white":"bg-white border hover:bg-gray-50"}`,children:"SSR 模式"}),e.jsx("button",{onClick:()=>t("csr"),className:`px-3 py-1 rounded text-sm ${n==="csr"?"bg-blue-500 text-white":"bg-white border hover:bg-gray-50"}`,children:"CSR 模式"})]}),e.jsxs("div",{className:"p-3 bg-blue-50 rounded text-sm",children:[e.jsx("h4",{className:"font-semibold mb-2",children:"当前状态:"}),e.jsxs("div",{className:"space-y-1 text-xs",children:[e.jsxs("div",{children:["渲染模式: ",n.toUpperCase()]}),e.jsxs("div",{children:["是否水合: ",m?"是":"否"]}),e.jsxs("div",{children:["是否 SSR: ",o?"是":"否"]}),e.jsxs("div",{children:["加载状态: ",l?"加载中":"完成"]})]})]})]}),l&&e.jsxs("div",{className:"flex items-center justify-center p-4",children:[e.jsx("div",{className:"animate-spin rounded-full h-6 w-6 border-b-2 border-blue-500 mr-2"}),e.jsx("span",{className:"text-gray-600",children:"加载用户数据..."})]}),d&&e.jsx("div",{className:"p-3 bg-red-50 border border-red-200 rounded",children:e.jsxs("p",{className:"text-red-600 text-sm",children:["错误: ",d]})}),s&&e.jsxs("div",{className:"space-y-2",children:[e.jsx("h4",{className:"font-semibold",children:"用户数据:"}),s.map(r=>e.jsxs("div",{className:"p-2 bg-white border rounded text-sm",children:[e.jsx("div",{className:"font-medium",children:r.name}),e.jsx("div",{className:"text-gray-600",children:r.email})]},r.id))]})]})},R=()=>{const[n,t]=i.useState("traditional");return e.jsxs("div",{className:"max-w-4xl mx-auto p-4 bg-white rounded-lg border",children:[e.jsx("h3",{className:"text-lg font-semibold mb-4",children:"传统组件 vs 服务端组件"}),e.jsxs("div",{className:"flex space-x-2 mb-4",children:[e.jsx("button",{onClick:()=>t("traditional"),className:`px-4 py-2 rounded ${n==="traditional"?"bg-blue-500 text-white":"bg-gray-100 hover:bg-gray-200"}`,children:"传统客户端组件"}),e.jsx("button",{onClick:()=>t("server"),className:`px-4 py-2 rounded ${n==="server"?"bg-green-500 text-white":"bg-gray-100 hover:bg-gray-200"}`,children:"服务端组件模拟"})]}),e.jsxs("div",{className:"grid grid-cols-1 lg:grid-cols-2 gap-6",children:[e.jsxs("div",{className:"space-y-4",children:[e.jsx("h4",{className:"font-semibold",children:"特性对比"}),e.jsxs("div",{className:"space-y-3",children:[e.jsxs("div",{className:"p-3 bg-gray-50 rounded",children:[e.jsx("h5",{className:"font-medium text-sm mb-2",children:"数据获取"}),e.jsxs("div",{className:"text-xs space-y-1",children:[e.jsxs("div",{className:"flex justify-between",children:[e.jsx("span",{children:"传统组件:"}),e.jsx("span",{className:"text-orange-600",children:"客户端 useEffect"})]}),e.jsxs("div",{className:"flex justify-between",children:[e.jsx("span",{children:"服务端组件:"}),e.jsx("span",{className:"text-green-600",children:"服务端预取"})]})]})]}),e.jsxs("div",{className:"p-3 bg-gray-50 rounded",children:[e.jsx("h5",{className:"font-medium text-sm mb-2",children:"性能特点"}),e.jsxs("div",{className:"text-xs space-y-1",children:[e.jsxs("div",{className:"flex justify-between",children:[e.jsx("span",{children:"首屏加载:"}),e.jsx("span",{className:n==="traditional"?"text-orange-600":"text-green-600",children:n==="traditional"?"较慢":"较快"})]}),e.jsxs("div",{className:"flex justify-between",children:[e.jsx("span",{children:"交互性:"}),e.jsx("span",{className:n==="traditional"?"text-green-600":"text-orange-600",children:n==="traditional"?"完全交互":"有限交互"})]})]})]}),e.jsxs("div",{className:"p-3 bg-gray-50 rounded",children:[e.jsx("h5",{className:"font-medium text-sm mb-2",children:"Bundle 大小"}),e.jsxs("div",{className:"text-xs space-y-1",children:[e.jsxs("div",{className:"flex justify-between",children:[e.jsx("span",{children:"JavaScript:"}),e.jsx("span",{className:n==="traditional"?"text-orange-600":"text-green-600",children:n==="traditional"?"较大":"较小"})]}),e.jsxs("div",{className:"flex justify-between",children:[e.jsx("span",{children:"依赖库:"}),e.jsx("span",{className:n==="traditional"?"text-orange-600":"text-green-600",children:n==="traditional"?"客户端":"服务端"})]})]})]})]})]}),e.jsxs("div",{className:"space-y-4",children:[e.jsx("h4",{className:"font-semibold",children:"实际演示"}),n==="traditional"?e.jsx("div",{className:"space-y-3",children:e.jsx(f,{})}):e.jsxs("div",{className:"space-y-3",children:[e.jsxs("div",{className:"p-3 bg-green-50 border border-green-200 rounded",children:[e.jsx("h5",{className:"font-semibold text-green-800 mb-2",children:"服务端组件特性"}),e.jsxs("ul",{className:"text-sm text-green-700 space-y-1",children:[e.jsx("li",{children:"• 数据在服务端预取"}),e.jsx("li",{children:"• 减少客户端 JavaScript"}),e.jsx("li",{children:"• 更快的首屏渲染"}),e.jsx("li",{children:"• 自动代码分割"})]})]}),e.jsx(S,{})]})]})]})]})},b=`import React, { useState } from "react";
import { mockAPI, serverData } from "./mockData";

import { useSSRData } from "./hooks";

// SSR 数据演示组件
export const SSRDataDemo: React.FC = () => {
  const [selectedMode, setSelectedMode] = useState<"ssr" | "csr">("ssr");

  // 模拟 SSR 预取的数据
  const ssrUsers =
    selectedMode === "ssr" ? serverData.users.slice(0, 2) : undefined;

  const {
    data: users,
    loading,
    error,
    isHydrated,
    isSSR,
  } = useSSRData("users", mockAPI.fetchUsers, ssrUsers);

  return (
    <div className="max-w-lg mx-auto p-4 bg-gray-50 rounded-lg">
      <h3 className="text-lg font-semibold mb-4">SSR vs CSR 演示</h3>

      <div className="mb-4">
        <div className="flex space-x-2 mb-3">
          <button
            onClick={() => setSelectedMode("ssr")}
            className={\`px-3 py-1 rounded text-sm \${
              selectedMode === "ssr"
                ? "bg-blue-500 text-white"
                : "bg-white border hover:bg-gray-50"
            }\`}
          >
            SSR 模式
          </button>
          <button
            onClick={() => setSelectedMode("csr")}
            className={\`px-3 py-1 rounded text-sm \${
              selectedMode === "csr"
                ? "bg-blue-500 text-white"
                : "bg-white border hover:bg-gray-50"
            }\`}
          >
            CSR 模式
          </button>
        </div>

        <div className="p-3 bg-blue-50 rounded text-sm">
          <h4 className="font-semibold mb-2">当前状态:</h4>
          <div className="space-y-1 text-xs">
            <div>渲染模式: {selectedMode.toUpperCase()}</div>
            <div>是否水合: {isHydrated ? "是" : "否"}</div>
            <div>是否 SSR: {isSSR ? "是" : "否"}</div>
            <div>加载状态: {loading ? "加载中" : "完成"}</div>
          </div>
        </div>
      </div>

      {loading && (
        <div className="flex items-center justify-center p-4">
          <div className="animate-spin rounded-full h-6 w-6 border-b-2 border-blue-500 mr-2"></div>
          <span className="text-gray-600">加载用户数据...</span>
        </div>
      )}

      {error && (
        <div className="p-3 bg-red-50 border border-red-200 rounded">
          <p className="text-red-600 text-sm">错误: {error}</p>
        </div>
      )}

      {users && (
        <div className="space-y-2">
          <h4 className="font-semibold">用户数据:</h4>
          {users.map((user) => (
            <div key={user.id} className="p-2 bg-white border rounded text-sm">
              <div className="font-medium">{user.name}</div>
              <div className="text-gray-600">{user.email}</div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};
`,D=`import React, { useState } from "react";
import { UserList } from "./UserList";
import { SSRDataDemo } from "./SSRDataDemo";

// 服务端组件对比演示
export const ServerComponentComparison: React.FC = () => {
  const [activeTab, setActiveTab] = useState<"traditional" | "server">(
    "traditional"
  );

  return (
    <div className="max-w-4xl mx-auto p-4 bg-white rounded-lg border">
      <h3 className="text-lg font-semibold mb-4">传统组件 vs 服务端组件</h3>

      <div className="flex space-x-2 mb-4">
        <button
          onClick={() => setActiveTab("traditional")}
          className={\`px-4 py-2 rounded \${
            activeTab === "traditional"
              ? "bg-blue-500 text-white"
              : "bg-gray-100 hover:bg-gray-200"
          }\`}
        >
          传统客户端组件
        </button>
        <button
          onClick={() => setActiveTab("server")}
          className={\`px-4 py-2 rounded \${
            activeTab === "server"
              ? "bg-green-500 text-white"
              : "bg-gray-100 hover:bg-gray-200"
          }\`}
        >
          服务端组件模拟
        </button>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="space-y-4">
          <h4 className="font-semibold">特性对比</h4>
          <div className="space-y-3">
            <div className="p-3 bg-gray-50 rounded">
              <h5 className="font-medium text-sm mb-2">数据获取</h5>
              <div className="text-xs space-y-1">
                <div className="flex justify-between">
                  <span>传统组件:</span>
                  <span className="text-orange-600">客户端 useEffect</span>
                </div>
                <div className="flex justify-between">
                  <span>服务端组件:</span>
                  <span className="text-green-600">服务端预取</span>
                </div>
              </div>
            </div>

            <div className="p-3 bg-gray-50 rounded">
              <h5 className="font-medium text-sm mb-2">性能特点</h5>
              <div className="text-xs space-y-1">
                <div className="flex justify-between">
                  <span>首屏加载:</span>
                  <span
                    className={
                      activeTab === "traditional"
                        ? "text-orange-600"
                        : "text-green-600"
                    }
                  >
                    {activeTab === "traditional" ? "较慢" : "较快"}
                  </span>
                </div>
                <div className="flex justify-between">
                  <span>交互性:</span>
                  <span
                    className={
                      activeTab === "traditional"
                        ? "text-green-600"
                        : "text-orange-600"
                    }
                  >
                    {activeTab === "traditional" ? "完全交互" : "有限交互"}
                  </span>
                </div>
              </div>
            </div>

            <div className="p-3 bg-gray-50 rounded">
              <h5 className="font-medium text-sm mb-2">Bundle 大小</h5>
              <div className="text-xs space-y-1">
                <div className="flex justify-between">
                  <span>JavaScript:</span>
                  <span
                    className={
                      activeTab === "traditional"
                        ? "text-orange-600"
                        : "text-green-600"
                    }
                  >
                    {activeTab === "traditional" ? "较大" : "较小"}
                  </span>
                </div>
                <div className="flex justify-between">
                  <span>依赖库:</span>
                  <span
                    className={
                      activeTab === "traditional"
                        ? "text-orange-600"
                        : "text-green-600"
                    }
                  >
                    {activeTab === "traditional" ? "客户端" : "服务端"}
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="space-y-4">
          <h4 className="font-semibold">实际演示</h4>
          {activeTab === "traditional" ? (
            <div className="space-y-3">
              <UserList />
            </div>
          ) : (
            <div className="space-y-3">
              <div className="p-3 bg-green-50 border border-green-200 rounded">
                <h5 className="font-semibold text-green-800 mb-2">
                  服务端组件特性
                </h5>
                <ul className="text-sm text-green-700 space-y-1">
                  <li>• 数据在服务端预取</li>
                  <li>• 减少客户端 JavaScript</li>
                  <li>• 更快的首屏渲染</li>
                  <li>• 自动代码分割</li>
                </ul>
              </div>
              <SSRDataDemo />
            </div>
          )}
        </div>
      </div>
    </div>
  );
};`,g=`import React from "react";
import { mockAPI } from "./mockData";
import { useServerData } from "./hooks";

// 用户列表组件（模拟服务端组件）
export const UserList: React.FC = () => {
  const { data: users, loading, error } = useServerData(mockAPI.fetchUsers);

  if (loading) {
    return (
      <div className="p-4 bg-gray-50 rounded-lg">
        <div className="animate-pulse space-y-4">
          {[1, 2, 3, 4].map((i) => (
            <div key={i} className="flex items-center space-x-4">
              <div className="w-12 h-12 bg-gray-200 rounded-full"></div>
              <div className="flex-1 space-y-2">
                <div className="h-4 bg-gray-200 rounded w-3/4"></div>
                <div className="h-3 bg-gray-200 rounded w-1/2"></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="p-4 bg-red-50 border border-red-200 rounded-lg">
        <p className="text-red-600">错误: {error}</p>
      </div>
    );
  }

  return (
    <div className="space-y-4">
      <h3 className="text-lg font-semibold">用户列表</h3>
      {users?.map((user) => (
        <div key={user.id} className="p-4 bg-white border rounded-lg">
          <div className="flex items-center justify-between">
            <div>
              <h4 className="font-medium">{user.name}</h4>
              <p className="text-sm text-gray-600">{user.email}</p>
            </div>
            <div className="text-right">
              <span
                className={\`px-2 py-1 rounded text-xs \${
                  user.role === "admin"
                    ? "bg-red-100 text-red-800"
                    : user.role === "moderator"
                    ? "bg-yellow-100 text-yellow-800"
                    : "bg-green-100 text-green-800"
                }\`}
              >
                {user.role}
              </span>
              <p className="text-xs text-gray-500 mt-1">
                最后登录: {user.lastLogin}
              </p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};
`,u=`import { useEffect, useState } from "react";

// 模拟服务端组件数据获取 Hook
export function useServerData<T>(fetcher: () => Promise<T>, deps: any[] = []) {
  const [data, setData] = useState<T | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    let isCancelled = false;
    setLoading(true);
    setError(null);

    const fetchData = async () => {
      try {
        const result = await fetcher();
        if (!isCancelled) {
          setData(result);
        }
      } catch (err) {
        if (!isCancelled) {
          setError(err instanceof Error ? err.message : "获取数据失败");
        }
      } finally {
        if (!isCancelled) {
          setLoading(false);
        }
      }
    };

    fetchData();

    return () => {
      isCancelled = true;
    };
  }, deps);

  return { data, loading, error };
}

// 模拟 SSR 数据预取 Hook
export function useSSRData<T>(
  key: string,
  fetcher: () => Promise<T>,
  initialData?: T
) {
  const [data, setData] = useState<T | null>(initialData || null);
  const [isHydrated, setIsHydrated] = useState(false);
  const [loading, setLoading] = useState(!initialData);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    // 客户端水合
    setIsHydrated(true);

    if (!initialData) {
      // 客户端数据获取
      fetcher()
        .then(setData)
        .catch((err) => {
          setError(err instanceof Error ? err.message : "获取数据失败");
        })
        .finally(() => setLoading(false));
    } else {
      setLoading(false);
    }
  }, [key]);

  return {
    data,
    loading,
    error,
    isHydrated,
    isSSR: !isHydrated && !!initialData,
  };
}
`,p=`// 模拟服务端数据
export const serverData = {
  users: [
    {
      id: 1,
      name: "张三",
      email: "zhangsan@example.com",
      role: "admin",
      lastLogin: "2024-01-15",
    },
    {
      id: 2,
      name: "李四",
      email: "lisi@example.com",
      role: "user",
      lastLogin: "2024-01-14",
    },
    {
      id: 3,
      name: "王五",
      email: "wangwu@example.com",
      role: "user",
      lastLogin: "2024-01-13",
    },
    {
      id: 4,
      name: "赵六",
      email: "zhaoliu@example.com",
      role: "moderator",
      lastLogin: "2024-01-12",
    },
  ],
  posts: [
    {
      id: 1,
      title: "React 18 新特性",
      content: "React 18 带来了许多激动人心的新特性...",
      authorId: 1,
      publishDate: "2024-01-10",
      views: 1250,
    },
    {
      id: 2,
      title: "TypeScript 最佳实践",
      content: "TypeScript 在现代前端开发中的应用...",
      authorId: 2,
      publishDate: "2024-01-08",
      views: 890,
    },
    {
      id: 3,
      title: "Next.js 服务端渲染",
      content: "Next.js 提供了强大的 SSR 功能...",
      authorId: 1,
      publishDate: "2024-01-05",
      views: 2100,
    },
    {
      id: 4,
      title: "CSS-in-JS 解决方案",
      content: "现代 CSS-in-JS 库的对比和选择...",
      authorId: 3,
      publishDate: "2024-01-03",
      views: 670,
    },
  ],
  comments: [
    {
      id: 1,
      postId: 1,
      authorId: 2,
      content: "很好的文章，学到了很多！",
      createDate: "2024-01-11",
    },
    {
      id: 2,
      postId: 1,
      authorId: 3,
      content: "期待更多关于 React 18 的内容",
      createDate: "2024-01-11",
    },
    {
      id: 3,
      postId: 2,
      authorId: 1,
      content: "TypeScript 确实很重要",
      createDate: "2024-01-09",
    },
    {
      id: 4,
      postId: 3,
      authorId: 4,
      content: "Next.js 的 SSR 真的很强大",
      createDate: "2024-01-06",
    },
  ],
};

// 模拟 API 调用
export const mockAPI = {
  fetchUsers: (): Promise<typeof serverData.users> => {
    return new Promise((resolve) => {
      setTimeout(() => resolve([...serverData.users]), 800);
    });
  },

  fetchPosts: (): Promise<typeof serverData.posts> => {
    return new Promise((resolve) => {
      setTimeout(() => resolve([...serverData.posts]), 1000);
    });
  },

  fetchComments: (postId: number): Promise<typeof serverData.comments> => {
    return new Promise((resolve) => {
      setTimeout(() => {
        const comments = serverData.comments.filter((c) => c.postId === postId);
        resolve(comments);
      }, 600);
    });
  },

  fetchUserById: (
    userId: number
  ): Promise<(typeof serverData.users)[0] | null> => {
    return new Promise((resolve) => {
      setTimeout(() => {
        const user = serverData.users.find((u) => u.id === userId) || null;
        resolve(user);
      }, 400);
    });
  },
};`,T=()=>e.jsx(j,{title:"服务端组件",description:"学习 React 服务端组件的概念和实现，理解 SSR、RSC 的区别和应用场景。",overview:e.jsx("div",{className:"space-y-4",children:e.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-6",children:[e.jsxs("div",{className:"bg-blue-50 p-4 rounded-lg border border-blue-200",children:[e.jsx("h3",{className:"font-semibold text-blue-800 mb-2",children:"🎯 核心概念"}),e.jsxs("ul",{className:"text-sm text-blue-700 space-y-1",children:[e.jsx("li",{children:"• 服务端组件(RSC)"}),e.jsx("li",{children:"• 客户端组件"}),e.jsx("li",{children:"• 服务端渲染(SSR)"}),e.jsx("li",{children:"• 水合(Hydration)"})]})]}),e.jsxs("div",{className:"bg-green-50 p-4 rounded-lg border border-green-200",children:[e.jsx("h3",{className:"font-semibold text-green-800 mb-2",children:"✨ 主要优势"}),e.jsxs("ul",{className:"text-sm text-green-700 space-y-1",children:[e.jsx("li",{children:"• 减少客户端bundle大小"}),e.jsx("li",{children:"• 更快的首屏加载"}),e.jsx("li",{children:"• 更好的SEO支持"}),e.jsx("li",{children:"• 自动代码分割优化"})]})]}),e.jsxs("div",{className:"bg-yellow-50 p-4 rounded-lg border border-yellow-200",children:[e.jsx("h3",{className:"font-semibold text-yellow-800 mb-2",children:"🎪 适用场景"}),e.jsxs("ul",{className:"text-sm text-yellow-700 space-y-1",children:[e.jsx("li",{children:"• 静态内容展示"}),e.jsx("li",{children:"• 数据密集型应用"}),e.jsx("li",{children:"• SEO要求高的页面"}),e.jsx("li",{children:"• 性能敏感的应用"})]})]}),e.jsxs("div",{className:"bg-red-50 p-4 rounded-lg border border-red-200",children:[e.jsx("h3",{className:"font-semibold text-red-800 mb-2",children:"⚠️ 注意事项"}),e.jsxs("ul",{className:"text-sm text-red-700 space-y-1",children:[e.jsx("li",{children:"• 需要Next.js 13+支持"}),e.jsx("li",{children:"• 理解客户端服务端边界"}),e.jsx("li",{children:"• 合理设计组件架构"}),e.jsx("li",{children:"• 考虑数据获取策略"})]})]})]})}),examples:[{title:"传统客户端组件演示",component:e.jsx(f,{}),description:"展示传统的客户端数据获取和渲染方式。",observationPoints:["组件挂载后通过 useEffect 获取数据","显示加载状态直到数据返回","所有逻辑都在客户端执行","需要等待 JavaScript 加载和执行"],keyPoints:["使用 useEffect 进行数据获取","客户端状态管理","完全的交互性支持","较大的 JavaScript bundle"],commonTraps:["首屏加载时间较长","SEO 支持不佳","JavaScript bundle 过大","网络请求瀑布效应"],solutions:["使用 SSR 或 SSG 预渲染","实现代码分割","优化数据获取策略","使用服务端组件"],importantTips:["观察加载状态的显示过程","注意数据获取的时机","所有渲染都在客户端完成","支持完整的 React 特性"],preCode:[{title:"mockData",code:p},{title:"hooks",code:u}],codeExample:{title:"传统客户端组件演示",code:g}},{title:"SSR 数据预取演示",component:e.jsx(S,{}),description:"展示 SSR 模式下的数据预取和客户端水合过程。",observationPoints:["SSR 模式下数据立即可用","CSR 模式需要等待数据加载","水合状态的变化过程","不同模式下的性能差异"],keyPoints:["SSR 提供初始数据","客户端水合过程","更快的首屏渲染","更好的用户体验"],preCode:[{title:"mockData",code:p},{title:"hooks",code:u}],codeExample:{title:"SSR 数据预取演示",code:b}},{title:"服务端组件对比",component:e.jsx(R,{}),description:"对比传统客户端组件和服务端组件的特性和优势。",observationPoints:["切换不同模式查看差异","对比性能特点和适用场景","理解各自的优势和限制","观察实际的渲染效果"],keyPoints:["服务端组件减少客户端负担","传统组件提供完整交互性","不同的数据获取策略","各有适用的场景"],preCode:[{title:"mockData",code:p},{title:"hooks",code:u},{title:"UserList",code:g},{title:"SSRData",code:b}],codeExample:{title:"服务端组件对比",code:D}}],tutorial:{concepts:["服务端组件在服务器上运行，减少客户端 JavaScript","客户端组件提供交互性和状态管理","SSR 在服务器生成 HTML，提升首屏性能","水合过程让静态 HTML 变为交互式应用","合理的架构设计平衡性能和功能"],steps:["理解服务端组件和客户端组件的区别","设计合适的组件架构","实现数据获取策略","处理服务端和客户端的边界","优化性能和用户体验","测试和部署应用"],tips:["明确哪些组件需要交互性","合理使用 'use client' 指令","优化数据获取和缓存","考虑 SEO 和性能需求","测试不同网络条件下的表现"]},interview:{questions:[{question:"服务端组件和传统 SSR 的区别是什么？",answer:"主要区别：1) RSC 是组件级别的服务端渲染；2) 可以混合服务端和客户端组件；3) 自动代码分割和优化；4) 更细粒度的控制；5) 减少客户端 JavaScript；6) 支持流式渲染。"},{question:"如何决定使用服务端组件还是客户端组件？",answer:"决策因素：1) 是否需要交互性（事件处理、状态）；2) 是否使用浏览器 API；3) 数据获取的复杂度；4) SEO 需求；5) 性能要求；6) 开发和维护成本。一般静态内容用服务端组件，交互功能用客户端组件。"},{question:"服务端组件的性能优势体现在哪里？",answer:"性能优势：1) 减少客户端 JavaScript bundle；2) 更快的首屏渲染；3) 服务端数据获取更快；4) 自动代码分割；5) 减少网络请求；6) 更好的缓存策略；7) 流式渲染支持。"},{question:"如何处理服务端组件的数据获取？",answer:"数据获取策略：1) 直接在组件中 await 异步操作；2) 使用数据库或 API 调用；3) 实现适当的缓存策略；4) 处理错误和边界情况；5) 考虑数据的实时性需求；6) 优化查询性能。"}],keyPoints:["服务端组件是 React 的重要发展方向","需要合适的框架支持（如 Next.js 13+）","平衡性能和功能是关键","理解客户端和服务端的边界","考虑 SEO 和用户体验"]},bestPractices:{dos:["明确组件的运行环境需求","合理设计组件架构","优化数据获取策略","考虑 SEO 和性能需求","测试不同场景下的表现"],donts:["不要在服务端组件中使用浏览器 API","不要过度使用客户端组件","不要忽视错误处理","不要忽视缓存策略","不要忽视用户体验"],patterns:["服务端组件 + 客户端组件混合模式","数据获取和缓存模式","错误边界处理模式","流式渲染模式","SEO 优化模式"]}});export{T as default};
