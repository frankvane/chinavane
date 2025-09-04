import{r as a,j as e,R as x}from"./index-H7t66yxh.js";import{C as b}from"./ComponentTemplate-bNJaV0ol.js";const y=r=>{const n=x.useRef(0);return n.current+=1,console.log(`${r} 渲染次数: ${n.current}`),n.current},N=async(r,n=1e3)=>{switch(console.log(`开始获取数据: ${r}`),await new Promise(l=>setTimeout(l,n)),r){case"/api/users":return{users:Array.from({length:8},(l,t)=>({id:t+1,name:`用户 ${t+1}`,email:`user${t+1}@example.com`,avatar:`https://api.dicebear.com/7.x/avataaars/svg?seed=${t+1}`,role:t%3===0?"管理员":t%2===0?"编辑":"用户",status:t%4===0?"离线":"在线",lastActive:new Date(Date.now()-Math.random()*864e5).toISOString()})),total:8,timestamp:new Date().toISOString()};case"/api/posts":return{posts:Array.from({length:6},(l,t)=>({id:t+1,title:`文章标题 ${t+1}`,content:`这是文章 ${t+1} 的内容摘要，展示了服务端组件的数据获取能力...`,author:`作者 ${t+1}`,tags:["React","服务端组件","性能优化"][t%3],publishedAt:new Date(Date.now()-Math.random()*7*864e5).toISOString(),likes:Math.floor(Math.random()*100),comments:Math.floor(Math.random()*50)})),total:6,timestamp:new Date().toISOString()};case"/api/analytics":return{pageViews:Math.floor(Math.random()*1e5)+5e4,uniqueVisitors:Math.floor(Math.random()*2e4)+1e4,bounceRate:Math.floor(Math.random()*30)+20,avgSessionDuration:Math.floor(Math.random()*300)+120,topPages:[{path:"/",views:Math.floor(Math.random()*1e4)+5e3},{path:"/about",views:Math.floor(Math.random()*5e3)+2e3},{path:"/products",views:Math.floor(Math.random()*8e3)+3e3},{path:"/contact",views:Math.floor(Math.random()*3e3)+1e3}],recentActivity:Array.from({length:5},(l,t)=>({id:t+1,user:`用户${t+1}`,action:["登录","查看页面","下载文件","提交表单","注销"][t],timestamp:new Date(Date.now()-Math.random()*36e5).toISOString()})),timestamp:new Date().toISOString()};default:throw new Error(`未知的API端点: ${r}`)}},f=a.memo(()=>{const r=y("ServerUserList"),[n,l]=a.useState(null),[t,c]=a.useState(!0),[s,m]=a.useState(null);return a.useEffect(()=>{console.log("ServerUserList: 开始获取用户数据"),N("/api/users",1500).then(i=>{console.log("ServerUserList: 用户数据获取成功",i),l(i),c(!1)}).catch(i=>{console.error("ServerUserList: 用户数据获取失败",i),m(i.message),c(!1)})},[]),t?e.jsxs("div",{className:"space-y-4",children:[e.jsx("div",{className:"text-sm text-blue-600 mb-2",children:"👥 服务端用户加载中..."}),Array.from({length:6},(i,d)=>e.jsxs("div",{className:"animate-pulse flex items-center space-x-4 p-4 bg-gray-50 rounded-lg",children:[e.jsx("div",{className:"w-12 h-12 bg-gray-300 rounded-full"}),e.jsxs("div",{className:"flex-1 space-y-2",children:[e.jsx("div",{className:"h-4 bg-gray-300 rounded w-3/4"}),e.jsx("div",{className:"h-3 bg-gray-300 rounded w-1/2"})]}),e.jsx("div",{className:"w-16 h-6 bg-gray-300 rounded"})]},d))]}):s?e.jsxs("div",{className:"p-4 bg-red-50 border border-red-200 rounded-lg",children:[e.jsx("div",{className:"text-red-800 font-semibold mb-2",children:"数据加载失败"}),e.jsx("div",{className:"text-red-600 text-sm",children:s})]}):e.jsxs("div",{className:"space-y-4",children:[e.jsxs("div",{className:"flex items-center justify-between",children:[e.jsx("h3",{className:"font-semibold text-gray-800",children:"用户列表 (服务端渲染)"}),e.jsxs("span",{className:"text-sm text-gray-500",children:["渲染: ",r]})]}),e.jsx("div",{className:"grid gap-4",children:n==null?void 0:n.users.map(i=>e.jsxs("div",{className:"flex items-center space-x-4 p-4 bg-white border border-gray-200 rounded-lg hover:shadow-md transition-shadow",onClick:()=>console.log(`点击用户: ${i.name}`),children:[e.jsx("img",{src:i.avatar,alt:i.name,className:"w-12 h-12 rounded-full",onLoad:()=>console.log(`用户头像加载完成: ${i.name}`)}),e.jsxs("div",{className:"flex-1",children:[e.jsxs("div",{className:"flex items-center space-x-2",children:[e.jsx("h4",{className:"font-medium text-gray-800",children:i.name}),e.jsx("span",{className:`text-xs px-2 py-1 rounded-full ${i.status==="在线"?"bg-green-100 text-green-800":"bg-gray-100 text-gray-800"}`,children:i.status})]}),e.jsx("p",{className:"text-sm text-gray-600",children:i.email}),e.jsxs("p",{className:"text-xs text-gray-500",children:["最后活跃: ",new Date(i.lastActive).toLocaleString()]})]}),e.jsx("div",{className:"text-right",children:e.jsx("span",{className:`text-sm px-3 py-1 rounded-full ${i.role==="管理员"?"bg-purple-100 text-purple-800":i.role==="编辑"?"bg-blue-100 text-blue-800":"bg-gray-100 text-gray-800"}`,children:i.role})})]},i.id))}),e.jsxs("div",{className:"mt-4 p-3 bg-green-50 border border-green-200 rounded-lg",children:[e.jsxs("div",{className:"flex items-center justify-between text-sm",children:[e.jsxs("span",{className:"text-green-700",children:["数据获取时间: ",new Date(n==null?void 0:n.timestamp).toLocaleString()]}),e.jsxs("span",{className:"text-green-700",children:["总用户数: ",n==null?void 0:n.total]})]}),e.jsx("div",{className:"mt-2",children:e.jsx("p",{className:"text-sm text-green-700",children:"数据在服务端预取，首屏加载更快，SEO友好"})})]})]})}),S=r=>{const n=x.useRef(0);return n.current+=1,console.log(`${r} 渲染次数: ${n.current}`),n.current},j=async(r,n=1e3)=>{switch(console.log(`开始获取数据: ${r}`),await new Promise(l=>setTimeout(l,n)),r){case"/api/posts":return{posts:Array.from({length:6},(l,t)=>({id:t+1,title:`文章标题 ${t+1}`,content:`这是文章 ${t+1} 的内容摘要，展示了服务端组件的数据获取能力...`,author:`作者 ${t+1}`,tags:["React","服务端组件","性能优化"][t%3],publishedAt:new Date(Date.now()-Math.random()*7*864e5).toISOString(),likes:Math.floor(Math.random()*100),comments:Math.floor(Math.random()*50)})),total:6,timestamp:new Date().toISOString()};default:throw new Error(`未知的API端点: ${r}`)}},w=a.memo(()=>{const r=S("ServerPostList"),[n,l]=a.useState(null),[t,c]=a.useState(!0);return a.useEffect(()=>{console.log("ServerPostList: 开始获取文章数据"),j("/api/posts",1200).then(s=>{console.log("ServerPostList: 文章数据获取成功",s),l(s),c(!1)}).catch(s=>{console.error("ServerPostList: 文章数据获取失败",s),c(!1)})},[]),t?e.jsxs("div",{className:"space-y-4",children:[e.jsx("div",{className:"text-sm text-blue-600 mb-2",children:"📝 服务端文章加载中..."}),Array.from({length:4},(s,m)=>e.jsxs("div",{className:"animate-pulse p-4 bg-gray-50 rounded-lg",children:[e.jsx("div",{className:"h-4 bg-gray-300 rounded w-3/4 mb-2"}),e.jsx("div",{className:"h-3 bg-gray-300 rounded w-full mb-2"}),e.jsx("div",{className:"h-3 bg-gray-300 rounded w-2/3"})]},m))]}):e.jsxs("div",{className:"space-y-4",children:[e.jsxs("div",{className:"flex items-center justify-between",children:[e.jsx("h3",{className:"font-semibold text-gray-800",children:"最新文章 (服务端渲染)"}),e.jsxs("span",{className:"text-sm text-gray-500",children:["渲染: ",r]})]}),e.jsx("div",{className:"grid gap-4",children:n==null?void 0:n.posts.map(s=>e.jsxs("article",{className:"p-4 bg-white border border-gray-200 rounded-lg shadow-sm hover:shadow-md transition-shadow",children:[e.jsxs("div",{className:"flex justify-between items-start mb-2",children:[e.jsx("h4",{className:"font-medium text-gray-800 hover:text-blue-600 cursor-pointer",onClick:()=>console.log(`点击文章: ${s.title}`),children:s.title}),e.jsx("span",{className:"text-xs bg-blue-100 text-blue-800 px-2 py-1 rounded",children:s.tags})]}),e.jsx("p",{className:"text-sm text-gray-600 mb-3",children:s.content}),e.jsxs("div",{className:"flex items-center justify-between text-xs text-gray-500",children:[e.jsxs("div",{className:"flex items-center space-x-4",children:[e.jsxs("span",{children:["作者: ",s.author]}),e.jsx("span",{children:new Date(s.publishedAt).toLocaleDateString()})]}),e.jsxs("div",{className:"flex items-center space-x-3",children:[e.jsxs("span",{className:"flex items-center space-x-1",children:[e.jsx("span",{children:"👍"}),e.jsx("span",{children:s.likes})]}),e.jsxs("span",{className:"flex items-center space-x-1",children:[e.jsx("span",{children:"💬"}),e.jsx("span",{children:s.comments})]})]})]})]},s.id))})]})}),C=r=>{const n=x.useRef(0);return n.current+=1,console.log(`${r} 渲染次数: ${n.current}`),n.current},M=async(r,n=1e3)=>{switch(console.log(`开始获取数据: ${r}`),await new Promise(l=>setTimeout(l,n)),r){case"/api/analytics":return{pageViews:Math.floor(Math.random()*1e5)+5e4,uniqueVisitors:Math.floor(Math.random()*2e4)+1e4,bounceRate:Math.floor(Math.random()*30)+20,avgSessionDuration:Math.floor(Math.random()*300)+120,topPages:[{path:"/",views:Math.floor(Math.random()*1e4)+5e3},{path:"/about",views:Math.floor(Math.random()*5e3)+2e3},{path:"/products",views:Math.floor(Math.random()*8e3)+3e3},{path:"/contact",views:Math.floor(Math.random()*3e3)+1e3}],recentActivity:Array.from({length:5},(l,t)=>({id:t+1,user:`用户${t+1}`,action:["登录","查看页面","下载文件","提交表单","注销"][t],timestamp:new Date(Date.now()-Math.random()*36e5).toISOString()})),timestamp:new Date().toISOString()};default:throw new Error(`未知的API端点: ${r}`)}},$=a.memo(()=>{const r=C("ServerAnalytics"),[n,l]=a.useState(null),[t,c]=a.useState(!0);return a.useEffect(()=>{console.log("ServerAnalytics: 开始获取分析数据"),M("/api/analytics",800).then(s=>{console.log("ServerAnalytics: 分析数据获取成功",s),l(s),c(!1)}).catch(s=>{console.error("ServerAnalytics: 分析数据获取失败",s),c(!1)})},[]),t?e.jsxs("div",{className:"space-y-4",children:[e.jsx("div",{className:"text-sm text-blue-600 mb-2",children:"📊 服务端分析数据加载中..."}),e.jsx("div",{className:"grid grid-cols-2 md:grid-cols-4 gap-4",children:Array.from({length:4},(s,m)=>e.jsxs("div",{className:"animate-pulse p-4 bg-gray-50 rounded-lg",children:[e.jsx("div",{className:"h-8 bg-gray-300 rounded mb-2"}),e.jsx("div",{className:"h-4 bg-gray-300 rounded w-2/3"})]},m))})]}):e.jsxs("div",{className:"space-y-6",children:[e.jsxs("div",{className:"flex items-center justify-between",children:[e.jsx("h3",{className:"font-semibold text-gray-800",children:"网站分析 (服务端渲染)"}),e.jsxs("span",{className:"text-sm text-gray-500",children:["渲染: ",r]})]}),e.jsxs("div",{className:"grid grid-cols-2 md:grid-cols-4 gap-4",children:[e.jsxs("div",{className:"p-4 bg-white border border-gray-200 rounded-lg hover:shadow-md transition-shadow",onClick:()=>console.log("点击页面浏览量卡片"),children:[e.jsx("div",{className:"text-2xl font-bold text-blue-600",children:n==null?void 0:n.pageViews.toLocaleString()}),e.jsx("div",{className:"text-sm text-gray-600",children:"页面浏览量"})]}),e.jsxs("div",{className:"p-4 bg-white border border-gray-200 rounded-lg hover:shadow-md transition-shadow",onClick:()=>console.log("点击独立访客卡片"),children:[e.jsx("div",{className:"text-2xl font-bold text-green-600",children:n==null?void 0:n.uniqueVisitors.toLocaleString()}),e.jsx("div",{className:"text-sm text-gray-600",children:"独立访客"})]}),e.jsxs("div",{className:"p-4 bg-white border border-gray-200 rounded-lg hover:shadow-md transition-shadow",children:[e.jsxs("div",{className:"text-2xl font-bold text-orange-600",children:[n==null?void 0:n.bounceRate,"%"]}),e.jsx("div",{className:"text-sm text-gray-600",children:"跳出率"})]}),e.jsxs("div",{className:"p-4 bg-white border border-gray-200 rounded-lg hover:shadow-md transition-shadow",children:[e.jsxs("div",{className:"text-2xl font-bold text-purple-600",children:[n==null?void 0:n.avgSessionDuration,"s"]}),e.jsx("div",{className:"text-sm text-gray-600",children:"平均会话时长"})]})]}),e.jsxs("div",{className:"p-4 bg-white border border-gray-200 rounded-lg",children:[e.jsx("h4",{className:"font-semibold text-gray-800 mb-3",children:"热门页面"}),e.jsx("div",{className:"space-y-2",children:n==null?void 0:n.topPages.map((s,m)=>e.jsxs("div",{className:"flex justify-between items-center hover:bg-gray-50 p-2 rounded",onClick:()=>console.log(`点击热门页面: ${s.path}`),children:[e.jsx("span",{className:"text-sm text-gray-600",children:s.path}),e.jsxs("span",{className:"text-sm font-medium text-gray-800",children:[s.views.toLocaleString()," 次访问"]})]},s.path))})]}),e.jsxs("div",{className:"p-4 bg-white border border-gray-200 rounded-lg",children:[e.jsx("h4",{className:"font-semibold text-gray-800 mb-3",children:"最近活动"}),e.jsx("div",{className:"space-y-2",children:n==null?void 0:n.recentActivity.map(s=>e.jsxs("div",{className:"flex justify-between items-center text-sm hover:bg-gray-50 p-2 rounded",onClick:()=>console.log(`点击活动: ${s.action} by ${s.user}`),children:[e.jsxs("div",{className:"flex items-center space-x-2",children:[e.jsx("span",{className:"text-gray-600",children:s.action}),e.jsxs("span",{className:"text-gray-500",children:["by ",s.user]})]}),e.jsx("span",{className:"text-gray-500",children:new Date(s.timestamp).toLocaleTimeString()})]},s.id))})]})]})}),k=r=>{const n=x.useRef(0);return n.current+=1,console.log(`${r} 渲染次数: ${n.current}`),n.current},R=()=>{const r=k("BasicServerComponentExample"),[n,l]=a.useState("users"),[t,c]=a.useState(0),s=a.useCallback(()=>{console.log("刷新服务端组件数据"),c(d=>d+1)},[]),m=a.useCallback(d=>{console.log(`切换到标签页: ${d}`),l(d)},[]),i=a.useMemo(()=>[{key:"users",label:"用户列表",icon:"👥"},{key:"posts",label:"文章列表",icon:"📝"},{key:"analytics",label:"数据分析",icon:"📊"}],[]);return e.jsxs("div",{className:"space-y-6",children:[e.jsxs("div",{className:"text-sm text-gray-500 mb-2",children:["渲染次数: ",r]}),e.jsxs("div",{className:"flex items-center justify-between",children:[e.jsx("div",{className:"flex space-x-1 bg-gray-100 p-1 rounded-lg",children:i.map(d=>e.jsxs("button",{onClick:()=>m(d.key),className:`flex items-center space-x-2 px-4 py-2 rounded-md text-sm font-medium transition-colors ${n===d.key?"bg-white text-blue-600 shadow-sm":"text-gray-600 hover:text-gray-800"}`,children:[e.jsx("span",{children:d.icon}),e.jsx("span",{children:d.label})]},d.key))}),e.jsxs("button",{onClick:s,className:"flex items-center space-x-2 px-3 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 text-sm transition-colors",children:[e.jsx("span",{children:"🔄"}),e.jsx("span",{children:"刷新"})]})]}),e.jsx("div",{className:"min-h-96",children:e.jsxs(a.Suspense,{fallback:e.jsx("div",{className:"flex items-center justify-center py-12",children:e.jsxs("div",{className:"flex items-center space-x-3",children:[e.jsx("div",{className:"animate-spin rounded-full h-6 w-6 border-b-2 border-blue-600"}),e.jsx("span",{className:"text-gray-600",children:"加载服务端数据中..."})]})}),children:[n==="users"&&e.jsx(f,{},`users-${t}`),n==="posts"&&e.jsx(w,{},`posts-${t}`),n==="analytics"&&e.jsx($,{},`analytics-${t}`)]})}),e.jsxs("div",{className:"p-4 bg-blue-50 border border-blue-200 rounded-lg",children:[e.jsx("h4",{className:"font-semibold text-blue-800 mb-2",children:"服务端组件特点"}),e.jsxs("ul",{className:"text-sm text-blue-700 space-y-1",children:[e.jsx("li",{children:"• 在服务端执行，减少客户端JavaScript包大小"}),e.jsx("li",{children:"• 可以直接访问服务端资源（数据库、文件系统等）"}),e.jsx("li",{children:"• 提供更好的SEO和首屏加载性能"}),e.jsx("li",{children:"• 与客户端组件可以无缝集成"})]})]})]})},D=`import React, { Suspense, useCallback, useMemo, useState } from "react";
import ServerUserList from "./ServerUserList";
import ServerPostList from "./ServerPostList";
import ServerAnalytics from "./ServerAnalytics";

// 自定义Hook：跟踪组件渲染次数
const useRenderCount = (componentName: string) => {
  const renderCount = React.useRef(0);
  renderCount.current += 1;
  console.log(\`\${componentName} 渲染次数: \${renderCount.current}\`);
  return renderCount.current;
};

// 基础服务端组件示例
const BasicServerComponentExample: React.FC = () => {
  const renderCount = useRenderCount("BasicServerComponentExample");
  const [selectedTab, setSelectedTab] = useState<
    "users" | "posts" | "analytics"
  >("users");
  const [refreshKey, setRefreshKey] = useState(0);

  const handleRefresh = useCallback(() => {
    // ← 重点：使用useCallback优化
    console.log("刷新服务端组件数据"); // ← 重点：刷新日志
    setRefreshKey((prev) => prev + 1);
  }, []);

  const handleTabChange = useCallback(
    (tab: "users" | "posts" | "analytics") => {
      // ← 重点：使用useCallback优化
      console.log(\`切换到标签页: \${tab}\`); // ← 重点：标签切换日志
      setSelectedTab(tab);
    },
    []
  );

  const tabs = useMemo(
    () => [
      // ← 重点：使用useMemo优化
      { key: "users" as const, label: "用户列表", icon: "👥" },
      { key: "posts" as const, label: "文章列表", icon: "📝" },
      { key: "analytics" as const, label: "数据分析", icon: "📊" },
    ],
    []
  );

  return (
    <div className="space-y-6">
      <div className="text-sm text-gray-500 mb-2">渲染次数: {renderCount}</div>

      {/* 标签页导航 */}
      <div className="flex items-center justify-between">
        <div className="flex space-x-1 bg-gray-100 p-1 rounded-lg">
          {tabs.map((tab) => (
            <button
              key={tab.key}
              onClick={() => handleTabChange(tab.key)}
              className={\`flex items-center space-x-2 px-4 py-2 rounded-md text-sm font-medium transition-colors \${
                selectedTab === tab.key
                  ? "bg-white text-blue-600 shadow-sm"
                  : "text-gray-600 hover:text-gray-800"
              }\`}
            >
              <span>{tab.icon}</span>
              <span>{tab.label}</span>
            </button>
          ))}
        </div>

        <button
          onClick={handleRefresh}
          className="flex items-center space-x-2 px-3 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 text-sm transition-colors"
        >
          <span>🔄</span>
          <span>刷新</span>
        </button>
      </div>

      {/* 内容区域 */}
      <div className="min-h-96">
        <Suspense
          fallback={
            // ← 重点：Suspense处理异步加载
            <div className="flex items-center justify-center py-12">
              <div className="flex items-center space-x-3">
                <div className="animate-spin rounded-full h-6 w-6 border-b-2 border-blue-600"></div>
                <span className="text-gray-600">加载服务端数据中...</span>
              </div>
            </div>
          }
        >
          {selectedTab === "users" && (
            <ServerUserList key={\`users-\${refreshKey}\`} />
          )}
          {selectedTab === "posts" && (
            <ServerPostList key={\`posts-\${refreshKey}\`} />
          )}
          {selectedTab === "analytics" && (
            <ServerAnalytics key={\`analytics-\${refreshKey}\`} />
          )}
        </Suspense>
      </div>

      <div className="p-4 bg-blue-50 border border-blue-200 rounded-lg">
        <h4 className="font-semibold text-blue-800 mb-2">服务端组件特点</h4>
        <ul className="text-sm text-blue-700 space-y-1">
          <li>• 在服务端执行，减少客户端JavaScript包大小</li>
          <li>• 可以直接访问服务端资源（数据库、文件系统等）</li>
          <li>• 提供更好的SEO和首屏加载性能</li>
          <li>• 与客户端组件可以无缝集成</li>
        </ul>
      </div>
    </div>
  );
};

export default BasicServerComponentExample;`,E=r=>{const n=x.useRef(0);return n.current+=1,console.log(`${r} 渲染次数: ${n.current}`),n.current},A=()=>{const r=E("HybridRenderingExample"),[n,l]=a.useState(null),[t,c]=a.useState(0),[s,m]=a.useState(null);a.useEffect(()=>{console.log("HybridRenderingExample: 获取客户端数据");const u=setTimeout(()=>{const o={timestamp:new Date().toISOString(),sessionId:Math.random().toString(36).substr(2,9),userAgent:navigator.userAgent.split(" ")[0],screenSize:`${window.screen.width}x${window.screen.height}`,timezone:Intl.DateTimeFormat().resolvedOptions().timeZone};console.log("HybridRenderingExample: 客户端数据获取完成",o),l(o)},500);return()=>clearTimeout(u)},[t]);const i=a.useCallback(()=>{console.log("HybridRenderingExample: 客户端交互触发"),c(u=>u+1)},[]),d=a.useCallback(u=>{console.log(`HybridRenderingExample: 选择用户 ${u}`),m(u===s?null:u)},[s]);return e.jsxs("div",{className:"space-y-6",children:[e.jsxs("div",{className:"text-sm text-gray-500 mb-2",children:["渲染次数: ",r]}),e.jsxs("div",{className:"grid md:grid-cols-2 gap-6",children:[e.jsxs("div",{className:"space-y-4",children:[e.jsxs("div",{className:"flex items-center space-x-2",children:[e.jsx("div",{className:"w-3 h-3 bg-green-500 rounded-full"}),e.jsx("h3",{className:"font-semibold text-gray-800",children:"服务端渲染内容"})]}),e.jsx(a.Suspense,{fallback:e.jsx("div",{className:"animate-pulse space-y-3",children:Array.from({length:3},(u,o)=>e.jsx("div",{className:"h-16 bg-gray-200 rounded"},o))}),children:e.jsx("div",{className:"space-y-3",children:Array.from({length:5},(u,o)=>e.jsxs("div",{onClick:()=>d(o),className:`p-3 border rounded-lg cursor-pointer transition-colors ${s===o?"border-blue-500 bg-blue-50":"border-gray-200 hover:border-gray-300"}`,children:[e.jsxs("div",{className:"flex items-center space-x-3",children:[e.jsx("div",{className:"w-8 h-8 bg-gray-300 rounded-full"}),e.jsxs("div",{children:[e.jsxs("div",{className:"font-medium text-gray-800",children:["服务端用户 ",o+1]}),e.jsxs("div",{className:"text-sm text-gray-600",children:["user",o+1,"@server.com"]})]})]}),s===o&&e.jsx("div",{className:"mt-2 p-2 bg-white rounded text-sm",children:e.jsx("p",{className:"text-gray-600",children:"这是服务端预渲染的用户详情信息..."})})]},o))})})]}),e.jsxs("div",{className:"space-y-4",children:[e.jsxs("div",{className:"flex items-center space-x-2",children:[e.jsx("div",{className:"w-3 h-3 bg-blue-500 rounded-full"}),e.jsx("h3",{className:"font-semibold text-gray-800",children:"客户端交互内容"})]}),e.jsxs("div",{className:"space-y-3",children:[e.jsxs("button",{onClick:i,className:"w-full px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition-colors",children:["客户端交互 (点击次数: ",t,")"]}),n?e.jsxs("div",{className:"p-4 bg-gray-50 border border-gray-200 rounded-lg",children:[e.jsx("h4",{className:"font-semibold text-gray-800 mb-2",children:"客户端信息"}),e.jsxs("div",{className:"space-y-1 text-sm text-gray-600",children:[e.jsxs("div",{children:["时间戳: ",new Date(n.timestamp).toLocaleString()]}),e.jsxs("div",{children:["会话ID: ",n.sessionId]}),e.jsxs("div",{children:["浏览器: ",n.userAgent]}),e.jsxs("div",{children:["屏幕尺寸: ",n.screenSize]}),e.jsxs("div",{children:["时区: ",n.timezone]})]})]}):e.jsx("div",{className:"p-4 bg-gray-50 border border-gray-200 rounded-lg",children:e.jsxs("div",{className:"animate-pulse",children:[e.jsx("div",{className:"h-4 bg-gray-300 rounded mb-2"}),e.jsx("div",{className:"h-3 bg-gray-300 rounded mb-1"}),e.jsx("div",{className:"h-3 bg-gray-300 rounded mb-1"}),e.jsx("div",{className:"h-3 bg-gray-300 rounded"})]})}),e.jsxs("div",{className:"p-3 bg-yellow-50 border border-yellow-200 rounded-lg",children:[e.jsx("h4",{className:"font-semibold text-yellow-800 mb-1",children:"实时状态"}),e.jsxs("div",{className:"text-sm text-yellow-700",children:[e.jsxs("div",{children:["当前时间: ",new Date().toLocaleTimeString()]}),e.jsxs("div",{children:["交互次数: ",t]}),e.jsxs("div",{children:["选中用户:"," ",s!==null?`用户 ${s+1}`:"无"]})]})]})]})]})]}),e.jsxs("div",{className:"p-4 bg-purple-50 border border-purple-200 rounded-lg",children:[e.jsx("h4",{className:"font-semibold text-purple-800 mb-2",children:"混合渲染优势"}),e.jsxs("ul",{className:"text-sm text-purple-700 space-y-1",children:[e.jsx("li",{children:"• 服务端组件提供快速的首屏加载和SEO优化"}),e.jsx("li",{children:"• 客户端组件处理用户交互和动态状态"}),e.jsx("li",{children:"• 两者可以无缝集成，各自发挥优势"}),e.jsx("li",{children:"• 减少客户端JavaScript包大小"})]})]})]})},L=`import React, { Suspense, useCallback, useEffect, useState } from "react";

// 自定义Hook：跟踪组件渲染次数
const useRenderCount = (componentName: string) => {
  const renderCount = React.useRef(0);
  renderCount.current += 1;
  console.log(\`\${componentName} 渲染次数: \${renderCount.current}\`);
  return renderCount.current;
};

// 混合渲染示例
const HybridRenderingExample: React.FC = () => {
  const renderCount = useRenderCount("HybridRenderingExample");
  const [clientData, setClientData] = useState<any>(null);
  const [interactionCount, setInteractionCount] = useState(0);
  const [selectedUser, setSelectedUser] = useState<number | null>(null);

  // 客户端数据获取
  useEffect(() => {
    console.log("HybridRenderingExample: 获取客户端数据"); // ← 重点：客户端数据获取日志
    const timer = setTimeout(() => {
      const data = {
        // ← 重点：客户端特有数据
        timestamp: new Date().toISOString(),
        sessionId: Math.random().toString(36).substr(2, 9),
        userAgent: navigator.userAgent.split(" ")[0],
        screenSize: \`\${window.screen.width}x\${window.screen.height}\`,
        timezone: Intl.DateTimeFormat().resolvedOptions().timeZone,
      };
      console.log("HybridRenderingExample: 客户端数据获取完成", data); // ← 重点：成功日志
      setClientData(data);
    }, 500);

    return () => clearTimeout(timer);
  }, [interactionCount]);

  const handleInteraction = useCallback(() => {
    // ← 重点：使用useCallback优化
    console.log("HybridRenderingExample: 客户端交互触发"); // ← 重点：交互日志
    setInteractionCount((prev) => prev + 1);
  }, []);

  const handleUserSelect = useCallback(
    (userId: number) => {
      // ← 重点：使用useCallback优化
      console.log(\`HybridRenderingExample: 选择用户 \${userId}\`); // ← 重点：用户选择日志
      setSelectedUser(userId === selectedUser ? null : userId);
    },
    [selectedUser]
  );

  return (
    <div className="space-y-6">
      <div className="text-sm text-gray-500 mb-2">渲染次数: {renderCount}</div>

      <div className="grid md:grid-cols-2 gap-6">
        {/* 服务端渲染部分 */}
        <div className="space-y-4">
          <div className="flex items-center space-x-2">
            <div className="w-3 h-3 bg-green-500 rounded-full"></div>
            <h3 className="font-semibold text-gray-800">服务端渲染内容</h3>
          </div>

          <Suspense
            fallback={
              // ← 重点：Suspense处理服务端组件
              <div className="animate-pulse space-y-3">
                {Array.from({ length: 3 }, (_, i) => (
                  <div key={i} className="h-16 bg-gray-200 rounded"></div>
                ))}
              </div>
            }
          >
            <div className="space-y-3">
              {Array.from({ length: 5 }, (_, i) => (
                <div
                  key={i}
                  onClick={() => handleUserSelect(i)}
                  className={\`p-3 border rounded-lg cursor-pointer transition-colors \${
                    selectedUser === i
                      ? "border-blue-500 bg-blue-50"
                      : "border-gray-200 hover:border-gray-300"
                  }\`}
                >
                  <div className="flex items-center space-x-3">
                    <div className="w-8 h-8 bg-gray-300 rounded-full"></div>
                    <div>
                      <div className="font-medium text-gray-800">
                        服务端用户 {i + 1}
                      </div>
                      <div className="text-sm text-gray-600">
                        user{i + 1}@server.com
                      </div>
                    </div>
                  </div>
                  {selectedUser === i && (
                    <div className="mt-2 p-2 bg-white rounded text-sm">
                      <p className="text-gray-600">
                        这是服务端预渲染的用户详情信息...
                      </p>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </Suspense>
        </div>

        {/* 客户端渲染部分 */}
        <div className="space-y-4">
          <div className="flex items-center space-x-2">
            <div className="w-3 h-3 bg-blue-500 rounded-full"></div>
            <h3 className="font-semibold text-gray-800">客户端交互内容</h3>
          </div>

          <div className="space-y-3">
            <button
              onClick={handleInteraction}
              className="w-full px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition-colors"
            >
              客户端交互 (点击次数: {interactionCount})
            </button>

            {clientData ? (
              <div className="p-4 bg-gray-50 border border-gray-200 rounded-lg">
                <h4 className="font-semibold text-gray-800 mb-2">客户端信息</h4>
                <div className="space-y-1 text-sm text-gray-600">
                  <div>
                    时间戳: {new Date(clientData.timestamp).toLocaleString()}
                  </div>
                  <div>会话ID: {clientData.sessionId}</div>
                  <div>浏览器: {clientData.userAgent}</div>
                  <div>屏幕尺寸: {clientData.screenSize}</div>
                  <div>时区: {clientData.timezone}</div>
                </div>
              </div>
            ) : (
              <div className="p-4 bg-gray-50 border border-gray-200 rounded-lg">
                <div className="animate-pulse">
                  <div className="h-4 bg-gray-300 rounded mb-2"></div>
                  <div className="h-3 bg-gray-300 rounded mb-1"></div>
                  <div className="h-3 bg-gray-300 rounded mb-1"></div>
                  <div className="h-3 bg-gray-300 rounded"></div>
                </div>
              </div>
            )}

            <div className="p-3 bg-yellow-50 border border-yellow-200 rounded-lg">
              <h4 className="font-semibold text-yellow-800 mb-1">实时状态</h4>
              <div className="text-sm text-yellow-700">
                <div>当前时间: {new Date().toLocaleTimeString()}</div>
                <div>交互次数: {interactionCount}</div>
                <div>
                  选中用户:{" "}
                  {selectedUser !== null ? \`用户 \${selectedUser + 1}\` : "无"}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="p-4 bg-purple-50 border border-purple-200 rounded-lg">
        <h4 className="font-semibold text-purple-800 mb-2">混合渲染优势</h4>
        <ul className="text-sm text-purple-700 space-y-1">
          <li>• 服务端组件提供快速的首屏加载和SEO优化</li>
          <li>• 客户端组件处理用户交互和动态状态</li>
          <li>• 两者可以无缝集成，各自发挥优势</li>
          <li>• 减少客户端JavaScript包大小</li>
        </ul>
      </div>
    </div>
  );
};

export default HybridRenderingExample;`,P=r=>{const n=x.useRef(0);return n.current+=1,console.log(`${r} 渲染次数: ${n.current}`),n.current},I=()=>{const r=P("PerformanceComparisonExample"),[n,l]=a.useState("server"),[t,c]=a.useState(0),[s,m]=a.useState(0),i=a.useCallback(o=>{console.log(`PerformanceComparisonExample: 切换渲染模式到 ${o}`);const p=performance.now();l(o),setTimeout(()=>{const h=performance.now()-p;console.log(`PerformanceComparisonExample: ${o} 模式加载完成，耗时 ${h.toFixed(2)}ms`),c(h);const v={server:Math.random()*50+20,client:Math.random()*200+100,hybrid:Math.random()*100+50};m(v[o])},Math.random()*1e3+500)},[]),d=a.useMemo(()=>[{key:"server",label:"服务端渲染",icon:"🖥️",description:"在服务端预渲染，快速首屏加载",pros:["首屏加载快","SEO友好","减少客户端负担"],cons:["服务端压力大","交互性有限"]},{key:"client",label:"客户端渲染",icon:"💻",description:"在客户端动态渲染，交互更强",pros:["交互更强","动态更新","服务端压力小"],cons:["首屏加载慢","SEO不友好","客户端负担重"]},{key:"hybrid",label:"混合渲染",icon:"🔄",description:"结合两者优势，平衡性能和交互",pros:["平衡性能","灵活性高","最佳用户体验"],cons:["复杂度高","需要精心设计"]}],[]),u=d.find(o=>o.key===n);return e.jsxs("div",{className:"space-y-6",children:[e.jsxs("div",{className:"text-sm text-gray-500 mb-2",children:["渲染次数: ",r]}),e.jsx("div",{className:"grid md:grid-cols-3 gap-4",children:d.map(o=>e.jsxs("div",{onClick:()=>i(o.key),className:`p-4 border rounded-lg cursor-pointer transition-all ${n===o.key?"border-blue-500 bg-blue-50 shadow-md":"border-gray-200 hover:border-gray-300 hover:shadow-sm"}`,children:[e.jsxs("div",{className:"flex items-center space-x-2 mb-2",children:[e.jsx("span",{className:"text-2xl",children:o.icon}),e.jsx("h3",{className:"font-semibold text-gray-800",children:o.label})]}),e.jsx("p",{className:"text-sm text-gray-600 mb-3",children:o.description}),e.jsxs("div",{className:"space-y-2",children:[e.jsxs("div",{children:[e.jsx("h4",{className:"text-xs font-semibold text-green-700 mb-1",children:"优势:"}),e.jsx("ul",{className:"text-xs text-green-600 space-y-1",children:o.pros.map((p,g)=>e.jsxs("li",{children:["• ",p]},g))})]}),e.jsxs("div",{children:[e.jsx("h4",{className:"text-xs font-semibold text-red-700 mb-1",children:"劣势:"}),e.jsx("ul",{className:"text-xs text-red-600 space-y-1",children:o.cons.map((p,g)=>e.jsxs("li",{children:["• ",p]},g))})]})]})]},o.key))}),e.jsxs("div",{className:"p-4 bg-white border border-gray-200 rounded-lg",children:[e.jsxs("h3",{className:"font-semibold text-gray-800 mb-4",children:["当前模式: ",u.label]}),e.jsxs("div",{className:"grid md:grid-cols-4 gap-4",children:[e.jsxs("div",{className:"text-center",children:[e.jsxs("div",{className:"text-2xl font-bold text-blue-600",children:[t.toFixed(2),"ms"]}),e.jsx("div",{className:"text-sm text-gray-600",children:"加载时间"})]}),e.jsxs("div",{className:"text-center",children:[e.jsxs("div",{className:"text-2xl font-bold text-green-600",children:[s.toFixed(1),"KB"]}),e.jsx("div",{className:"text-sm text-gray-600",children:"数据大小"})]}),e.jsxs("div",{className:"text-center",children:[e.jsx("div",{className:"text-2xl font-bold text-orange-600",children:n==="server"?"95":n==="client"?"75":"88"}),e.jsx("div",{className:"text-sm text-gray-600",children:"SEO分数"})]}),e.jsxs("div",{className:"text-center",children:[e.jsx("div",{className:"text-2xl font-bold text-purple-600",children:n==="server"?"70":n==="client"?"95":"85"}),e.jsx("div",{className:"text-sm text-gray-600",children:"交互性分数"})]})]}),e.jsxs("div",{className:"mt-4 p-3 bg-gray-50 rounded-lg",children:[e.jsx("h4",{className:"font-semibold text-gray-800 mb-2",children:"性能建议"}),e.jsxs("p",{className:"text-sm text-gray-600",children:[n==="server"&&"适合内容展示和SEO要求高的页面，建议配合客户端组件处理交互。",n==="client"&&"适合交互密集的应用，建议优化首屏加载和SEO。",n==="hybrid"&&"最佳实践：静态内容使用服务端渲染，动态交互使用客户端渲染。"]})]})]}),e.jsxs("div",{className:"p-4 bg-indigo-50 border border-indigo-200 rounded-lg",children:[e.jsx("h4",{className:"font-semibold text-indigo-800 mb-2",children:"性能优化要点"}),e.jsxs("ul",{className:"text-sm text-indigo-700 space-y-1",children:[e.jsx("li",{children:"• 根据内容特性选择合适的渲染模式"}),e.jsx("li",{children:"• 使用Suspense和流式渲染优化用户体验"}),e.jsx("li",{children:"• 实现适当的缓存策略减少服务端压力"}),e.jsx("li",{children:"• 监控和分析不同模式的性能表现"})]})]})]})},T=`import React, { useCallback, useMemo, useState } from "react";

// 自定义Hook：跟踪组件渲染次数
const useRenderCount = (componentName: string) => {
  const renderCount = React.useRef(0);
  renderCount.current += 1;
  console.log(\`\${componentName} 渲染次数: \${renderCount.current}\`);
  return renderCount.current;
};

// 性能对比示例
const PerformanceComparisonExample: React.FC = () => {
  const renderCount = useRenderCount("PerformanceComparisonExample");
  const [mode, setMode] = useState<"server" | "client" | "hybrid">("server");
  const [loadTime, setLoadTime] = useState<number>(0);
  const [dataSize, setDataSize] = useState<number>(0);

  const handleModeChange = useCallback(
    (newMode: "server" | "client" | "hybrid") => {
      // ← 重点：使用useCallback优化
      console.log(\`PerformanceComparisonExample: 切换渲染模式到 \${newMode}\`); // ← 重点：模式切换日志
      const startTime = performance.now(); // ← 重点：性能测量开始
      setMode(newMode);

      // 模拟不同模式的加载时间和数据大小
      setTimeout(() => {
        const endTime = performance.now();
        const duration = endTime - startTime;
        console.log(
          \`PerformanceComparisonExample: \${newMode} 模式加载完成，耗时 \${duration.toFixed(
            2
          )}ms\`
        ); // ← 重点：性能日志
        setLoadTime(duration);

        // 模拟不同模式的数据大小
        const sizes = {
          server: Math.random() * 50 + 20, // 20-70KB
          client: Math.random() * 200 + 100, // 100-300KB
          hybrid: Math.random() * 100 + 50, // 50-150KB
        };
        setDataSize(sizes[newMode]);
      }, Math.random() * 1000 + 500);
    },
    []
  );

  const modes = useMemo(
    () => [
      // ← 重点：使用useMemo优化
      {
        key: "server" as const,
        label: "服务端渲染",
        icon: "🖥️",
        description: "在服务端预渲染，快速首屏加载",
        pros: ["首屏加载快", "SEO友好", "减少客户端负担"],
        cons: ["服务端压力大", "交互性有限"],
      },
      {
        key: "client" as const,
        label: "客户端渲染",
        icon: "💻",
        description: "在客户端动态渲染，交互更强",
        pros: ["交互更强", "动态更新", "服务端压力小"],
        cons: ["首屏加载慢", "SEO不友好", "客户端负担重"],
      },
      {
        key: "hybrid" as const,
        label: "混合渲染",
        icon: "🔄",
        description: "结合两者优势，平衡性能和交互",
        pros: ["平衡性能", "灵活性高", "最佳用户体验"],
        cons: ["复杂度高", "需要精心设计"],
      },
    ],
    []
  );

  const currentMode = modes.find((m) => m.key === mode)!;

  return (
    <div className="space-y-6">
      <div className="text-sm text-gray-500 mb-2">渲染次数: {renderCount}</div>

      {/* 模式选择 */}
      <div className="grid md:grid-cols-3 gap-4">
        {modes.map((modeOption) => (
          <div
            key={modeOption.key}
            onClick={() => handleModeChange(modeOption.key)}
            className={\`p-4 border rounded-lg cursor-pointer transition-all \${
              mode === modeOption.key
                ? "border-blue-500 bg-blue-50 shadow-md"
                : "border-gray-200 hover:border-gray-300 hover:shadow-sm"
            }\`}
          >
            <div className="flex items-center space-x-2 mb-2">
              <span className="text-2xl">{modeOption.icon}</span>
              <h3 className="font-semibold text-gray-800">
                {modeOption.label}
              </h3>
            </div>
            <p className="text-sm text-gray-600 mb-3">
              {modeOption.description}
            </p>

            <div className="space-y-2">
              <div>
                <h4 className="text-xs font-semibold text-green-700 mb-1">
                  优势:
                </h4>
                <ul className="text-xs text-green-600 space-y-1">
                  {modeOption.pros.map((pro, index) => (
                    <li key={index}>• {pro}</li>
                  ))}
                </ul>
              </div>

              <div>
                <h4 className="text-xs font-semibold text-red-700 mb-1">
                  劣势:
                </h4>
                <ul className="text-xs text-red-600 space-y-1">
                  {modeOption.cons.map((con, index) => (
                    <li key={index}>• {con}</li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* 性能指标 */}
      <div className="p-4 bg-white border border-gray-200 rounded-lg">
        <h3 className="font-semibold text-gray-800 mb-4">
          当前模式: {currentMode.label}
        </h3>

        <div className="grid md:grid-cols-4 gap-4">
          <div className="text-center">
            <div className="text-2xl font-bold text-blue-600">
              {loadTime.toFixed(2)}ms
            </div>
            <div className="text-sm text-gray-600">加载时间</div>
          </div>

          <div className="text-center">
            <div className="text-2xl font-bold text-green-600">
              {dataSize.toFixed(1)}KB
            </div>
            <div className="text-sm text-gray-600">数据大小</div>
          </div>

          <div className="text-center">
            <div className="text-2xl font-bold text-orange-600">
              {mode === "server" ? "95" : mode === "client" ? "75" : "88"}
            </div>
            <div className="text-sm text-gray-600">SEO分数</div>
          </div>

          <div className="text-center">
            <div className="text-2xl font-bold text-purple-600">
              {mode === "server" ? "70" : mode === "client" ? "95" : "85"}
            </div>
            <div className="text-sm text-gray-600">交互性分数</div>
          </div>
        </div>

        <div className="mt-4 p-3 bg-gray-50 rounded-lg">
          <h4 className="font-semibold text-gray-800 mb-2">性能建议</h4>
          <p className="text-sm text-gray-600">
            {mode === "server" &&
              "适合内容展示和SEO要求高的页面，建议配合客户端组件处理交互。"}
            {mode === "client" && "适合交互密集的应用，建议优化首屏加载和SEO。"}
            {mode === "hybrid" &&
              "最佳实践：静态内容使用服务端渲染，动态交互使用客户端渲染。"}
          </p>
        </div>
      </div>

      <div className="p-4 bg-indigo-50 border border-indigo-200 rounded-lg">
        <h4 className="font-semibold text-indigo-800 mb-2">性能优化要点</h4>
        <ul className="text-sm text-indigo-700 space-y-1">
          <li>• 根据内容特性选择合适的渲染模式</li>
          <li>• 使用Suspense和流式渲染优化用户体验</li>
          <li>• 实现适当的缓存策略减少服务端压力</li>
          <li>• 监控和分析不同模式的性能表现</li>
        </ul>
      </div>
    </div>
  );
};

export default PerformanceComparisonExample;`,O=`import React, { memo, useEffect, useState } from "react";\r
\r
// 自定义Hook：跟踪组件渲染次数\r
const useRenderCount = (componentName: string) => {\r
  const renderCount = React.useRef(0);\r
  renderCount.current += 1;\r
  console.log(\`\${componentName} 渲染次数: \${renderCount.current}\`);\r
  return renderCount.current;\r
};\r
\r
// 模拟服务端数据获取\r
const fetchServerData = async (\r
  endpoint: string,\r
  delay: number = 1000\r
): Promise<any> => {\r
  console.log(\`开始获取数据: \${endpoint}\`);\r
  \r
  // 模拟网络延迟\r
  await new Promise((resolve) => setTimeout(resolve, delay));\r
  \r
  // 模拟不同的API响应\r
  switch (endpoint) {\r
    case "/api/analytics":\r
      return {\r
        pageViews: Math.floor(Math.random() * 100000) + 50000,\r
        uniqueVisitors: Math.floor(Math.random() * 20000) + 10000,\r
        bounceRate: Math.floor(Math.random() * 30) + 20,\r
        avgSessionDuration: Math.floor(Math.random() * 300) + 120,\r
        topPages: [\r
          { path: "/", views: Math.floor(Math.random() * 10000) + 5000 },\r
          { path: "/about", views: Math.floor(Math.random() * 5000) + 2000 },\r
          { path: "/products", views: Math.floor(Math.random() * 8000) + 3000 },\r
          { path: "/contact", views: Math.floor(Math.random() * 3000) + 1000 },\r
        ],\r
        recentActivity: Array.from({ length: 5 }, (_, i) => ({\r
          id: i + 1,\r
          user: \`用户\${i + 1}\`,\r
          action: ["登录", "查看页面", "下载文件", "提交表单", "注销"][i],\r
          timestamp: new Date(\r
            Date.now() - Math.random() * 3600000\r
          ).toISOString(),\r
        })),\r
        timestamp: new Date().toISOString(),\r
      };\r
    default:\r
      throw new Error(\`未知的API端点: \${endpoint}\`);\r
  }\r
};\r
\r
// 模拟服务端组件 - 分析数据\r
const ServerAnalytics: React.FC = memo(() => {\r
  const renderCount = useRenderCount("ServerAnalytics");\r
  const [data, setData] = useState<any>(null);\r
  const [loading, setLoading] = useState(true);\r
\r
  useEffect(() => {\r
    console.log("ServerAnalytics: 开始获取分析数据"); // ← 重点：数据获取日志\r
    fetchServerData("/api/analytics", 800) // ← 重点：服务端数据获取\r
      .then((result) => {\r
        console.log("ServerAnalytics: 分析数据获取成功", result); // ← 重点：成功日志\r
        setData(result);\r
        setLoading(false);\r
      })\r
      .catch((err) => {\r
        console.error("ServerAnalytics: 分析数据获取失败", err); // ← 重点：错误日志\r
        setLoading(false);\r
      });\r
  }, []);\r
\r
  if (loading) {\r
    return (\r
      <div className="space-y-4">\r
        <div className="text-sm text-blue-600 mb-2">\r
          📊 服务端分析数据加载中...\r
        </div>\r
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">\r
          {Array.from({ length: 4 }, (_, i) => (\r
            <div key={i} className="animate-pulse p-4 bg-gray-50 rounded-lg">\r
              <div className="h-8 bg-gray-300 rounded mb-2"></div>\r
              <div className="h-4 bg-gray-300 rounded w-2/3"></div>\r
            </div>\r
          ))}\r
        </div>\r
      </div>\r
    );\r
  }\r
\r
  return (\r
    <div className="space-y-6">\r
      <div className="flex items-center justify-between">\r
        <h3 className="font-semibold text-gray-800">网站分析 (服务端渲染)</h3>\r
        <span className="text-sm text-gray-500">渲染: {renderCount}</span>\r
      </div>\r
\r
      {/* 统计卡片 */}\r
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">\r
        <div\r
          className="p-4 bg-white border border-gray-200 rounded-lg hover:shadow-md transition-shadow"\r
          onClick={() => console.log("点击页面浏览量卡片")} // ← 重点：交互日志\r
        >\r
          <div className="text-2xl font-bold text-blue-600">\r
            {data?.pageViews.toLocaleString()}\r
          </div>\r
          <div className="text-sm text-gray-600">页面浏览量</div>\r
        </div>\r
\r
        <div\r
          className="p-4 bg-white border border-gray-200 rounded-lg hover:shadow-md transition-shadow"\r
          onClick={() => console.log("点击独立访客卡片")} // ← 重点：交互日志\r
        >\r
          <div className="text-2xl font-bold text-green-600">\r
            {data?.uniqueVisitors.toLocaleString()}\r
          </div>\r
          <div className="text-sm text-gray-600">独立访客</div>\r
        </div>\r
\r
        <div className="p-4 bg-white border border-gray-200 rounded-lg hover:shadow-md transition-shadow">\r
          <div className="text-2xl font-bold text-orange-600">\r
            {data?.bounceRate}%\r
          </div>\r
          <div className="text-sm text-gray-600">跳出率</div>\r
        </div>\r
\r
        <div className="p-4 bg-white border border-gray-200 rounded-lg hover:shadow-md transition-shadow">\r
          <div className="text-2xl font-bold text-purple-600">\r
            {data?.avgSessionDuration}s\r
          </div>\r
          <div className="text-sm text-gray-600">平均会话时长</div>\r
        </div>\r
      </div>\r
\r
      {/* 热门页面 */}\r
      <div className="p-4 bg-white border border-gray-200 rounded-lg">\r
        <h4 className="font-semibold text-gray-800 mb-3">热门页面</h4>\r
        <div className="space-y-2">\r
          {data?.topPages.map((page: any, index: number) => (\r
            <div\r
              key={page.path}\r
              className="flex justify-between items-center hover:bg-gray-50 p-2 rounded"\r
              onClick={() => console.log(\`点击热门页面: \${page.path}\`)} // ← 重点：交互日志\r
            >\r
              <span className="text-sm text-gray-600">{page.path}</span>\r
              <span className="text-sm font-medium text-gray-800">\r
                {page.views.toLocaleString()} 次访问\r
              </span>\r
            </div>\r
          ))}\r
        </div>\r
      </div>\r
\r
      {/* 最近活动 */}\r
      <div className="p-4 bg-white border border-gray-200 rounded-lg">\r
        <h4 className="font-semibold text-gray-800 mb-3">最近活动</h4>\r
        <div className="space-y-2">\r
          {data?.recentActivity.map((activity: any) => (\r
            <div\r
              key={activity.id}\r
              className="flex justify-between items-center text-sm hover:bg-gray-50 p-2 rounded"\r
              onClick={() =>\r
                console.log(\`点击活动: \${activity.action} by \${activity.user}\`)\r
              } // ← 重点：交互日志\r
            >\r
              <div className="flex items-center space-x-2">\r
                <span className="text-gray-600">{activity.action}</span>\r
                <span className="text-gray-500">by {activity.user}</span>\r
              </div>\r
              <span className="text-gray-500">\r
                {new Date(activity.timestamp).toLocaleTimeString()}\r
              </span>\r
            </div>\r
          ))}\r
        </div>\r
      </div>\r
    </div>\r
  );\r
});\r
\r
export default ServerAnalytics;`,U=`import React, { memo, useEffect, useState } from "react";

// 自定义Hook：跟踪组件渲染次数
const useRenderCount = (componentName: string) => {
  const renderCount = React.useRef(0);
  renderCount.current += 1;
  console.log(\`\${componentName} 渲染次数: \${renderCount.current}\`);
  return renderCount.current;
};

// 模拟服务端数据获取
const fetchServerData = async (
  endpoint: string,
  delay: number = 1000
): Promise<any> => {
  console.log(\`开始获取数据: \${endpoint}\`);
  
  // 模拟网络延迟
  await new Promise((resolve) => setTimeout(resolve, delay));
  
  // 模拟不同的API响应
  switch (endpoint) {
    case "/api/posts":
      return {
        posts: Array.from({ length: 6 }, (_, i) => ({
          id: i + 1,
          title: \`文章标题 \${i + 1}\`,
          content: \`这是文章 \${i + 1} 的内容摘要，展示了服务端组件的数据获取能力...\`,
          author: \`作者 \${i + 1}\`,
          tags: ["React", "服务端组件", "性能优化"][i % 3],
          publishedAt: new Date(
            Date.now() - Math.random() * 7 * 86400000
          ).toISOString(),
          likes: Math.floor(Math.random() * 100),
          comments: Math.floor(Math.random() * 50),
        })),
        total: 6,
        timestamp: new Date().toISOString(),
      };
    default:
      throw new Error(\`未知的API端点: \${endpoint}\`);
  }
};

// 模拟服务端组件 - 文章列表
const ServerPostList: React.FC = memo(() => {
  const renderCount = useRenderCount("ServerPostList");
  const [data, setData] = useState<any>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    console.log("ServerPostList: 开始获取文章数据"); // ← 重点：数据获取日志
    fetchServerData("/api/posts", 1200) // ← 重点：服务端数据获取
      .then((result) => {
        console.log("ServerPostList: 文章数据获取成功", result); // ← 重点：成功日志
        setData(result);
        setLoading(false);
      })
      .catch((err) => {
        console.error("ServerPostList: 文章数据获取失败", err); // ← 重点：错误日志
        setLoading(false);
      });
  }, []);

  if (loading) {
    return (
      <div className="space-y-4">
        <div className="text-sm text-blue-600 mb-2">📝 服务端文章加载中...</div>
        {Array.from({ length: 4 }, (_, i) => (
          <div key={i} className="animate-pulse p-4 bg-gray-50 rounded-lg">
            <div className="h-4 bg-gray-300 rounded w-3/4 mb-2"></div>
            <div className="h-3 bg-gray-300 rounded w-full mb-2"></div>
            <div className="h-3 bg-gray-300 rounded w-2/3"></div>
          </div>
        ))}
      </div>
    );
  }

  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between">
        <h3 className="font-semibold text-gray-800">最新文章 (服务端渲染)</h3>
        <span className="text-sm text-gray-500">渲染: {renderCount}</span>
      </div>

      <div className="grid gap-4">
        {data?.posts.map((post: any) => (
          <article
            key={post.id}
            className="p-4 bg-white border border-gray-200 rounded-lg shadow-sm hover:shadow-md transition-shadow"
          >
            <div className="flex justify-between items-start mb-2">
              <h4
                className="font-medium text-gray-800 hover:text-blue-600 cursor-pointer"
                onClick={() => console.log(\`点击文章: \${post.title}\`)} // ← 重点：交互日志
              >
                {post.title}
              </h4>
              <span className="text-xs bg-blue-100 text-blue-800 px-2 py-1 rounded">
                {post.tags}
              </span>
            </div>

            <p className="text-sm text-gray-600 mb-3">{post.content}</p>

            <div className="flex items-center justify-between text-xs text-gray-500">
              <div className="flex items-center space-x-4">
                <span>作者: {post.author}</span>
                <span>{new Date(post.publishedAt).toLocaleDateString()}</span>
              </div>
              <div className="flex items-center space-x-3">
                <span className="flex items-center space-x-1">
                  <span>👍</span>
                  <span>{post.likes}</span>
                </span>
                <span className="flex items-center space-x-1">
                  <span>💬</span>
                  <span>{post.comments}</span>
                </span>
              </div>
            </div>
          </article>
        ))}
      </div>
    </div>
  );
});

export default ServerPostList;`,H=`import React, { memo, useEffect, useState } from "react";

// 自定义Hook：跟踪组件渲染次数
const useRenderCount = (componentName: string) => {
  const renderCount = React.useRef(0);
  renderCount.current += 1;
  console.log(\`\${componentName} 渲染次数: \${renderCount.current}\`);
  return renderCount.current;
};

// 模拟服务端数据获取
const fetchServerData = async (
  endpoint: string,
  delay: number = 1000
): Promise<any> => {
  console.log(\`开始获取数据: \${endpoint}\`);
  
  // 模拟网络延迟
  await new Promise((resolve) => setTimeout(resolve, delay));
  
  // 模拟不同的API响应
  switch (endpoint) {
    case "/api/users":
      return {
        users: Array.from({ length: 8 }, (_, i) => ({
          id: i + 1,
          name: \`用户 \${i + 1}\`,
          email: \`user\${i + 1}@example.com\`,
          avatar: \`https://api.dicebear.com/7.x/avataaars/svg?seed=\${i + 1}\`,
          role: i % 3 === 0 ? "管理员" : i % 2 === 0 ? "编辑" : "用户",
          status: i % 4 === 0 ? "离线" : "在线",
          lastActive: new Date(
            Date.now() - Math.random() * 86400000
          ).toISOString(),
        })),
        total: 8,
        timestamp: new Date().toISOString(),
      };
    case "/api/posts":
      return {
        posts: Array.from({ length: 6 }, (_, i) => ({
          id: i + 1,
          title: \`文章标题 \${i + 1}\`,
          content: \`这是文章 \${i + 1} 的内容摘要，展示了服务端组件的数据获取能力...\`,
          author: \`作者 \${i + 1}\`,
          tags: ["React", "服务端组件", "性能优化"][i % 3],
          publishedAt: new Date(
            Date.now() - Math.random() * 7 * 86400000
          ).toISOString(),
          likes: Math.floor(Math.random() * 100),
          comments: Math.floor(Math.random() * 50),
        })),
        total: 6,
        timestamp: new Date().toISOString(),
      };
    case "/api/analytics":
      return {
        pageViews: Math.floor(Math.random() * 100000) + 50000,
        uniqueVisitors: Math.floor(Math.random() * 20000) + 10000,
        bounceRate: Math.floor(Math.random() * 30) + 20,
        avgSessionDuration: Math.floor(Math.random() * 300) + 120,
        topPages: [
          { path: "/", views: Math.floor(Math.random() * 10000) + 5000 },
          { path: "/about", views: Math.floor(Math.random() * 5000) + 2000 },
          { path: "/products", views: Math.floor(Math.random() * 8000) + 3000 },
          { path: "/contact", views: Math.floor(Math.random() * 3000) + 1000 },
        ],
        recentActivity: Array.from({ length: 5 }, (_, i) => ({
          id: i + 1,
          user: \`用户\${i + 1}\`,
          action: ["登录", "查看页面", "下载文件", "提交表单", "注销"][i],
          timestamp: new Date(
            Date.now() - Math.random() * 3600000
          ).toISOString(),
        })),
        timestamp: new Date().toISOString(),
      };
    default:
      throw new Error(\`未知的API端点: \${endpoint}\`);
  }
};

// 模拟服务端组件 - 用户列表
const ServerUserList: React.FC = memo(() => {
  const renderCount = useRenderCount("ServerUserList");
  const [data, setData] = useState<any>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    console.log("ServerUserList: 开始获取用户数据"); // ← 重点：数据获取日志
    fetchServerData("/api/users", 1500) // ← 重点：服务端数据获取
      .then((result) => {
        console.log("ServerUserList: 用户数据获取成功", result); // ← 重点：成功日志
        setData(result);
        setLoading(false);
      })
      .catch((err) => {
        console.error("ServerUserList: 用户数据获取失败", err); // ← 重点：错误日志
        setError(err.message);
        setLoading(false);
      });
  }, []);

  if (loading) {
    return (
      <div className="space-y-4">
        <div className="text-sm text-blue-600 mb-2">👥 服务端用户加载中...</div>
        {Array.from({ length: 6 }, (_, i) => (
          <div key={i} className="animate-pulse flex items-center space-x-4 p-4 bg-gray-50 rounded-lg">
            <div className="w-12 h-12 bg-gray-300 rounded-full"></div>
            <div className="flex-1 space-y-2">
              <div className="h-4 bg-gray-300 rounded w-3/4"></div>
              <div className="h-3 bg-gray-300 rounded w-1/2"></div>
            </div>
            <div className="w-16 h-6 bg-gray-300 rounded"></div>
          </div>
        ))}
      </div>
    );
  }

  if (error) {
    return (
      <div className="p-4 bg-red-50 border border-red-200 rounded-lg">
        <div className="text-red-800 font-semibold mb-2">数据加载失败</div>
        <div className="text-red-600 text-sm">{error}</div>
      </div>
    );
  }

  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between">
        <h3 className="font-semibold text-gray-800">用户列表 (服务端渲染)</h3>
        <span className="text-sm text-gray-500">渲染: {renderCount}</span>
      </div>

      <div className="grid gap-4">
        {data?.users.map((user: any) => (
          <div
            key={user.id}
            className="flex items-center space-x-4 p-4 bg-white border border-gray-200 rounded-lg hover:shadow-md transition-shadow"
            onClick={() => console.log(\`点击用户: \${user.name}\`)} // ← 重点：交互日志
          >
            <img
              src={user.avatar}
              alt={user.name}
              className="w-12 h-12 rounded-full"
              onLoad={() => console.log(\`用户头像加载完成: \${user.name}\`)} // ← 重点：图片加载日志
            />
            <div className="flex-1">
              <div className="flex items-center space-x-2">
                <h4 className="font-medium text-gray-800">{user.name}</h4>
                <span
                  className={\`text-xs px-2 py-1 rounded-full \${
                    user.status === "在线"
                      ? "bg-green-100 text-green-800"
                      : "bg-gray-100 text-gray-800"
                  }\`}
                >
                  {user.status}
                </span>
              </div>
              <p className="text-sm text-gray-600">{user.email}</p>
              <p className="text-xs text-gray-500">
                最后活跃: {new Date(user.lastActive).toLocaleString()}
              </p>
            </div>
            <div className="text-right">
              <span
                className={\`text-sm px-3 py-1 rounded-full \${
                  user.role === "管理员"
                    ? "bg-purple-100 text-purple-800"
                    : user.role === "编辑"
                    ? "bg-blue-100 text-blue-800"
                    : "bg-gray-100 text-gray-800"
                }\`}
              >
                {user.role}
              </span>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-4 p-3 bg-green-50 border border-green-200 rounded-lg">
        <div className="flex items-center justify-between text-sm">
          <span className="text-green-700">
            数据获取时间: {new Date(data?.timestamp).toLocaleString()}
          </span>
          <span className="text-green-700">总用户数: {data?.total}</span>
        </div>
        <div className="mt-2">
          <p className="text-sm text-green-700">
            数据在服务端预取，首屏加载更快，SEO友好
          </p>
        </div>
      </div>
    </div>
  );
});

export default ServerUserList;`,_={title:"React 服务端组件 (Server Components)",subtitle:"Server Components Advanced Rendering",description:"React 服务端组件是在服务端执行的组件，可以直接访问服务端资源，提供更好的性能和SEO优化。",overview:[{title:"核心概念",items:["服务端组件在服务端执行，减少客户端JavaScript包大小","可以直接访问数据库、文件系统等服务端资源","与客户端组件可以无缝集成，形成混合渲染架构","通过流式渲染和Suspense提供更好的用户体验"]},{title:"主要优势",items:["更快的首屏加载时间和更好的SEO优化","减少客户端JavaScript包大小和运行时开销","直接访问服务端资源，无需API调用","自动代码分割和按需加载"]},{title:"适用场景",items:["内容展示页面：博客、新闻、产品目录等","数据密集型应用：仪表板、报表、分析页面","SEO要求高的页面：首页、产品详情、文章页面","需要服务端数据预取的复杂应用"]},{title:"注意事项",items:["需要支持服务端组件的框架（如Next.js 13+）","不能使用浏览器专有API和事件处理","需要合理设计客户端和服务端组件的边界","考虑服务端渲染的缓存和性能优化策略"]}],tutorial:{concepts:["React Server Components：在服务器端渲染的组件，减少客户端JavaScript包大小","零客户端JavaScript：服务器组件不会发送到客户端，完全在服务器执行","数据获取优化：直接在服务器组件中访问数据库和API，无需客户端请求","混合渲染：服务器组件和客户端组件可以无缝组合使用","性能优势：减少网络请求、降低客户端负载、提升首屏加载速度"],steps:["理解服务器组件与传统SSR的区别和优势","学习如何创建和使用服务器组件","掌握服务器组件中的数据获取模式","了解服务器组件与客户端组件的交互方式","实践混合渲染架构的设计和实现","优化服务器组件的性能和用户体验"],tips:["服务器组件不能使用useState、useEffect等客户端Hook","可以直接在服务器组件中使用async/await进行数据获取","服务器组件和客户端组件通过props进行数据传递","合理划分服务器组件和客户端组件的边界","利用服务器组件减少客户端JavaScript包大小"]},interview:{questions:[{question:"React Server Components与传统SSR有什么区别？",answer:"传统SSR是将整个页面在服务器渲染成HTML后发送给客户端，然后在客户端进行水合。而React Server Components是组件级别的服务器渲染，服务器组件完全在服务器执行，不会发送JavaScript到客户端，可以与客户端组件混合使用，提供更细粒度的渲染控制。"},{question:"服务器组件有哪些限制？",answer:"服务器组件不能使用客户端特有的API，如useState、useEffect、事件处理器等。不能访问浏览器API如localStorage、document等。不能使用仅在客户端运行的第三方库。但可以使用async/await、直接访问数据库、调用服务器端API等。"},{question:"如何在服务器组件和客户端组件之间传递数据？",answer:"通过props进行数据传递。服务器组件可以将数据作为props传递给客户端组件，客户端组件也可以通过props接收服务器组件的数据。需要注意的是，传递的数据必须是可序列化的，不能传递函数或复杂对象。"},{question:"服务器组件的性能优势体现在哪里？",answer:"减少客户端JavaScript包大小，因为服务器组件不会发送到客户端；减少网络请求，可以直接在服务器获取数据；提升首屏加载速度，服务器渲染的内容可以立即显示；降低客户端设备负载，复杂计算在服务器完成。"}],keyPoints:["服务器组件在服务器执行，不会增加客户端JavaScript包大小","可以直接在服务器组件中访问数据库和后端API","服务器组件和客户端组件可以无缝组合使用","通过props在服务器组件和客户端组件之间传递数据","合理使用服务器组件可以显著提升应用性能"]},bestPractices:{dos:["在服务器组件中直接进行数据获取和处理","将静态内容和数据密集型组件设计为服务器组件","合理划分服务器组件和客户端组件的职责","利用服务器组件减少客户端JavaScript包大小","在服务器组件中使用async/await处理异步操作","通过props在组件间传递序列化数据"],donts:["不要在服务器组件中使用客户端Hook","不要在服务器组件中访问浏览器API","不要传递不可序列化的数据给客户端组件","不要在服务器组件中添加事件处理器","不要过度使用服务器组件影响交互性"],patterns:["数据获取模式：在服务器组件中直接查询数据库","混合渲染模式：服务器组件负责数据，客户端组件负责交互","组件组合模式：服务器组件包含客户端组件","性能优化模式：将重计算逻辑放在服务器组件中","渐进增强模式：基础功能用服务器组件，增强功能用客户端组件"]}},J=()=>e.jsx(b,{..._,examples:[{title:"基础服务端组件示例",component:e.jsx(R,{}),description:"展示基础的服务端组件功能，包括数据获取、标签页切换和刷新机制。",observationPoints:["观察服务端数据的预取和渲染过程","注意Suspense如何处理异步加载状态","查看控制台中的数据获取和渲染日志","体验不同标签页之间的切换效果"],keyPoints:["服务端组件在服务端执行，减少客户端负担","使用Suspense处理异步数据加载","数据在服务端预取，提供更快的首屏加载","支持标签页切换和数据刷新功能"],commonTraps:["在服务端组件中使用浏览器专有API","混淆服务端组件和客户端组件的使用场景","没有正确处理异步数据加载状态","忽略服务端渲染的缓存策略"],solutions:["明确区分服务端和客户端组件的职责","使用Suspense和ErrorBoundary处理异步状态","实现适当的数据缓存和更新机制","合理设计组件的渲染边界"],importantTips:["服务端组件可以直接访问数据库和文件系统","使用流式渲染可以进一步优化用户体验","注意服务端和客户端的数据同步问题","考虑实现增量静态再生成(ISR)优化性能"],preCode:[{title:"ServerUserList",code:H},{title:"ServerPostList",code:U},{title:"ServerAnalytics",code:O}],codeExample:{title:"基础服务端组件示例",code:D}},{title:"混合渲染示例",component:e.jsx(A,{}),description:"展示服务端组件和客户端组件的混合使用，结合两者的优势。",observationPoints:["观察服务端渲染内容的快速加载","体验客户端交互的实时响应","注意两种渲染模式的无缝集成","查看客户端特有数据的动态更新"],keyPoints:["服务端组件处理静态内容和数据预取","客户端组件处理用户交互和动态状态","两者可以在同一页面中无缝集成","实现最佳的性能和用户体验平衡"],commonTraps:["在服务端组件中处理用户交互","在客户端组件中进行大量数据预取","没有合理划分组件边界","忽略数据传递和状态管理"],solutions:["明确定义服务端和客户端组件的职责","使用props进行数据传递和通信","实现合适的状态管理策略","优化组件的渲染性能"],importantTips:["左侧展示服务端预渲染的用户列表","右侧展示客户端实时交互和状态","注意观察两者的加载时机和性能差异","混合渲染是现代React应用的最佳实践"],codeExample:{title:"混合渲染示例",code:L}},{title:"性能对比示例",component:e.jsx(I,{}),description:"对比不同渲染模式的性能特点，帮助选择最适合的渲染策略。",observationPoints:["切换不同渲染模式观察性能指标变化","注意加载时间和数据大小的差异","观察SEO分数和交互性分数的权衡","体验不同模式的用户体验差异"],keyPoints:["服务端渲染：快速首屏，SEO友好，交互有限","客户端渲染：交互强，动态更新，首屏较慢","混合渲染：平衡性能和交互，复杂度较高","根据应用特点选择合适的渲染策略"],commonTraps:["盲目选择渲染模式而不考虑应用特点","忽略性能监控和优化","没有实现适当的缓存策略","过度优化导致复杂度增加"],solutions:["根据内容特性和用户需求选择渲染模式","实现性能监控和分析系统","使用适当的缓存和优化策略","保持架构的简洁性和可维护性"],importantTips:["性能指标会根据选择的模式实时更新","注意观察不同模式的优劣势对比","实际项目中需要根据具体需求权衡选择","可以在同一应用中混合使用多种渲染模式"],codeExample:{title:"性能对比示例",code:T}}]});export{J as default};
