import{r as l,j as e,R as P}from"./index-D5aG88J3.js";import{C as T}from"./ComponentTemplate-DZf1RTVD.js";const u=s=>new Promise(t=>setTimeout(t,s)),U=s=>Array.from({length:s},(t,n)=>({id:n+1,name:`用户 ${n+1}`,email:`user${n+1}@example.com`,avatar:`https://api.dicebear.com/7.x/avataaars/svg?seed=${n}`,department:["技术部","产品部","设计部","运营部"][n%4],role:["开发工程师","产品经理","设计师","运营专员"][n%4],joinDate:new Date(2020+Math.floor(n/100),n%12,n%28+1).toISOString().split("T")[0],status:["active","inactive","pending"][n%3]})),C=s=>{const t=["React 18 新特性详解","TypeScript 最佳实践","前端性能优化指南","Webpack 配置优化","CSS-in-JS 解决方案对比","GraphQL vs REST API","微前端架构实践","Node.js 服务端开发"],n=["React","TypeScript","性能优化","Webpack","CSS","GraphQL","微前端","Node.js"];return Array.from({length:s},(i,a)=>({id:a+1,title:t[a%t.length],content:`这是第 ${a+1} 篇文章的内容。文章详细介绍了相关技术的核心概念、实践方法和最佳实践。内容包括基础知识、进阶技巧、实际案例分析等多个方面。`,author:`作者 ${a%10+1}`,publishDate:new Date(2023,a%12,a%28+1).toISOString().split("T")[0],tags:[n[a%n.length],n[(a+1)%n.length]],likes:Math.floor(Math.random()*1e3),comments:Math.floor(Math.random()*100)}))},D=async(s=1,t=20)=>{await u(1e3+Math.random()*1e3);const n=U(1e3),i=(s-1)*t;return{users:n.slice(i,i+t),total:n.length}},R=async(s="",t=1)=>{await u(800+Math.random()*800);const n=C(500),i=s?n.filter(c=>c.title.toLowerCase().includes(s.toLowerCase())||c.content.toLowerCase().includes(s.toLowerCase())||c.tags.some(o=>o.toLowerCase().includes(s.toLowerCase()))):n,a=(t-1)*10;return{posts:i.slice(a,a+10),total:i.length}},L=l.lazy(async()=>(await u(1500),{default:({user:s})=>e.jsx("div",{className:"p-4 bg-white border border-gray-200 rounded-lg shadow-sm",children:e.jsxs("div",{className:"flex items-center space-x-4",children:[e.jsx("img",{src:s.avatar,alt:s.name,className:"w-16 h-16 rounded-full"}),e.jsxs("div",{className:"flex-1",children:[e.jsx("h3",{className:"text-lg font-semibold text-gray-900",children:s.name}),e.jsx("p",{className:"text-sm text-gray-600",children:s.email}),e.jsxs("div",{className:"flex items-center space-x-4 mt-2",children:[e.jsx("span",{className:"text-xs bg-blue-100 text-blue-800 px-2 py-1 rounded",children:s.department}),e.jsx("span",{className:"text-xs bg-green-100 text-green-800 px-2 py-1 rounded",children:s.role}),e.jsx("span",{className:`text-xs px-2 py-1 rounded ${s.status==="active"?"bg-green-100 text-green-800":s.status==="inactive"?"bg-red-100 text-red-800":"bg-yellow-100 text-yellow-800"}`,children:s.status})]}),e.jsxs("p",{className:"text-xs text-gray-500 mt-1",children:["入职时间: ",s.joinDate]})]})]})})})),k=l.lazy(async()=>(await u(1200),{default:({post:s})=>e.jsxs("div",{className:"p-4 bg-white border border-gray-200 rounded-lg shadow-sm hover:shadow-md transition-shadow",children:[e.jsx("h3",{className:"text-lg font-semibold text-gray-900 mb-2",children:s.title}),e.jsx("p",{className:"text-sm text-gray-600 mb-3 line-clamp-3",children:s.content}),e.jsxs("div",{className:"flex items-center justify-between text-xs text-gray-500 mb-3",children:[e.jsxs("span",{children:["作者: ",s.author]}),e.jsx("span",{children:s.publishDate})]}),e.jsxs("div",{className:"flex items-center justify-between",children:[e.jsx("div",{className:"flex space-x-2",children:s.tags.map(t=>e.jsx("span",{className:"text-xs bg-blue-100 text-blue-800 px-2 py-1 rounded",children:t},t))}),e.jsxs("div",{className:"flex items-center space-x-4 text-xs text-gray-500",children:[e.jsxs("span",{children:["👍 ",s.likes]}),e.jsxs("span",{children:["💬 ",s.comments]})]})]})]})})),I=({onUserSelect:s})=>{const[t,n]=l.useState([]),[i,a]=l.useState(!0);return l.useEffect(()=>{D(1,10).then(({users:r})=>{n(r),a(!1)})},[]),i?e.jsx("div",{className:"space-y-2",children:Array.from({length:5}).map((r,c)=>e.jsx("div",{className:"animate-pulse",children:e.jsxs("div",{className:"flex items-center space-x-3 p-3 bg-gray-100 rounded",children:[e.jsx("div",{className:"w-10 h-10 bg-gray-300 rounded-full"}),e.jsxs("div",{className:"flex-1",children:[e.jsx("div",{className:"h-4 bg-gray-300 rounded w-3/4 mb-2"}),e.jsx("div",{className:"h-3 bg-gray-300 rounded w-1/2"})]})]})},c))}):e.jsx("div",{className:"space-y-2",children:t.map(r=>e.jsxs("div",{className:"flex items-center space-x-3 p-3 bg-gray-50 hover:bg-gray-100 rounded cursor-pointer transition-colors",onClick:()=>s(r),children:[e.jsx("img",{src:r.avatar,alt:r.name,className:"w-10 h-10 rounded-full"}),e.jsxs("div",{className:"flex-1",children:[e.jsx("h4",{className:"font-medium text-gray-900",children:r.name}),e.jsx("p",{className:"text-sm text-gray-600",children:r.department})]})]},r.id))})},V=()=>{const[s,t]=l.useState(null),[n,i]=l.useState(!1),a=c=>{t(c),i(!0)},r=()=>{i(!1),t(null)};return e.jsxs("div",{className:"space-y-6",children:[e.jsxs("div",{children:[e.jsx("h3",{className:"text-lg font-semibold mb-4",children:"用户列表"}),e.jsx("div",{className:"bg-white p-4 rounded-lg border border-gray-200",children:e.jsx(I,{onUserSelect:a})})]}),n&&s&&e.jsxs("div",{children:[e.jsxs("div",{className:"flex items-center justify-between mb-4",children:[e.jsx("h3",{className:"text-lg font-semibold",children:"用户详情 (Suspense 加载)"}),e.jsx("button",{onClick:r,className:"px-3 py-1 text-sm bg-gray-200 hover:bg-gray-300 rounded transition-colors",children:"关闭"})]}),e.jsx(l.Suspense,{fallback:e.jsx("div",{className:"p-8 bg-white border border-gray-200 rounded-lg",children:e.jsxs("div",{className:"flex items-center justify-center space-x-2",children:[e.jsx("div",{className:"animate-spin rounded-full h-6 w-6 border-b-2 border-blue-600"}),e.jsx("span",{className:"text-gray-600",children:"正在加载用户详情..."})]})}),children:e.jsx(L,{user:s})})]}),e.jsxs("div",{className:"bg-blue-50 p-6 rounded-lg",children:[e.jsx("h4",{className:"text-lg font-semibold text-blue-900 mb-3",children:"🔄 Suspense 基础功能"}),e.jsxs("div",{className:"space-y-3 text-sm text-blue-800",children:[e.jsxs("div",{className:"flex items-start space-x-2",children:[e.jsx("span",{className:"font-medium",children:"1. 懒加载:"}),e.jsx("span",{children:"支持组件的按需加载，减少初始包大小"})]}),e.jsxs("div",{className:"flex items-start space-x-2",children:[e.jsx("span",{className:"font-medium",children:"2. 加载状态:"}),e.jsx("span",{children:"提供统一的加载状态管理和 fallback UI"})]}),e.jsxs("div",{className:"flex items-start space-x-2",children:[e.jsx("span",{className:"font-medium",children:"3. 错误边界:"}),e.jsx("span",{children:"与 ErrorBoundary 配合处理加载错误"})]}),e.jsxs("div",{className:"flex items-start space-x-2",children:[e.jsx("span",{className:"font-medium",children:"4. 嵌套支持:"}),e.jsx("span",{children:"支持多层嵌套的 Suspense 边界"})]})]})]})]})},q=({query:s})=>{const t=l.useDeferredValue(s),n=l.useRef(0);n.current++;const i=P.useMemo(()=>{const a=performance.now(),r=[];for(let o=0;o<1e4;o++)t&&o.toString().includes(t)?r.push(o):t||r.push(o);const c=performance.now();return console.log(`计算耗时: ${c-a}ms`),r.slice(0,100)},[t]);return e.jsxs("div",{className:"bg-gray-50 p-4 rounded-lg",children:[e.jsxs("div",{className:"flex items-center justify-between mb-3",children:[e.jsx("h4",{className:"font-medium text-gray-900",children:"大量计算演示"}),e.jsxs("span",{className:"text-xs text-gray-500",children:["渲染次数: ",n.current]})]}),e.jsxs("div",{className:"text-sm text-gray-600 mb-2",children:['查询词: "',t,'" (使用 useDeferredValue 优化)']}),e.jsx("div",{className:"grid grid-cols-10 gap-1 max-h-32 overflow-y-auto",children:i.map(a=>e.jsx("div",{className:"text-xs p-1 bg-white border rounded text-center",children:a},a))})]})},z=()=>{const[s,t]=l.useState(""),[n,i]=l.useState([]),[a,r]=l.useState(!1),[c,o]=l.useTransition(),m=l.useDeferredValue(s),x=l.useRef(0),[g,y]=l.useState({totalSearches:0,lastSearchTime:0});x.current++;const b=async d=>{const p=performance.now();r(!0);try{const{posts:j}=await R(d);i(j);const S=performance.now();y(w=>({totalSearches:w.totalSearches+1,lastSearchTime:S-p}))}finally{r(!1)}},N=d=>{t(d),o(()=>{d.trim()?b(d):i([])})};return l.useEffect(()=>{m!==s&&console.log("延迟更新:",{current:s,deferred:m})},[s,m]),e.jsxs("div",{className:"space-y-6",children:[e.jsxs("div",{className:"bg-green-50 p-4 rounded-lg",children:[e.jsx("h4",{className:"font-medium text-green-900 mb-2",children:"📊 性能统计"}),e.jsxs("div",{className:"grid grid-cols-3 gap-4 text-sm",children:[e.jsxs("div",{className:"text-center",children:[e.jsx("div",{className:"text-lg font-semibold text-green-700",children:x.current}),e.jsx("div",{className:"text-green-600",children:"组件渲染次数"})]}),e.jsxs("div",{className:"text-center",children:[e.jsx("div",{className:"text-lg font-semibold text-green-700",children:g.totalSearches}),e.jsx("div",{className:"text-green-600",children:"搜索次数"})]}),e.jsxs("div",{className:"text-center",children:[e.jsxs("div",{className:"text-lg font-semibold text-green-700",children:[g.lastSearchTime.toFixed(0),"ms"]}),e.jsx("div",{className:"text-green-600",children:"上次搜索耗时"})]})]})]}),e.jsxs("div",{children:[e.jsx("h3",{className:"text-lg font-semibold mb-4",children:"文章搜索 (并发特性演示)"}),e.jsxs("div",{className:"space-y-3",children:[e.jsx("input",{type:"text",value:s,onChange:d=>N(d.target.value),placeholder:"搜索文章标题、内容或标签...",className:"w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"}),e.jsxs("div",{className:"flex items-center space-x-4 text-sm text-gray-600",children:[e.jsxs("span",{children:["useTransition 状态: ",c?"⏳ 处理中":"✅ 空闲"]}),e.jsxs("span",{children:['当前查询: "',s,'"']}),e.jsxs("span",{children:['延迟查询: "',m,'"']})]})]})]}),e.jsxs("div",{children:[e.jsx("h4",{className:"font-medium mb-3",children:"搜索结果"}),a&&e.jsxs("div",{className:"flex items-center space-x-2 text-gray-600 mb-4",children:[e.jsx("div",{className:"animate-spin rounded-full h-4 w-4 border-b-2 border-blue-600"}),e.jsx("span",{children:"搜索中..."})]}),e.jsx(l.Suspense,{fallback:e.jsx("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-4",children:Array.from({length:4}).map((d,p)=>e.jsx("div",{className:"animate-pulse",children:e.jsxs("div",{className:"p-4 bg-gray-100 rounded-lg",children:[e.jsx("div",{className:"h-4 bg-gray-300 rounded w-3/4 mb-2"}),e.jsx("div",{className:"h-3 bg-gray-300 rounded w-full mb-2"}),e.jsx("div",{className:"h-3 bg-gray-300 rounded w-2/3"})]})},p))}),children:e.jsx("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-4",children:n.map(d=>e.jsx(k,{post:d},d.id))})}),n.length===0&&s&&!a&&e.jsx("div",{className:"text-center py-8 text-gray-500",children:"没有找到相关文章"})]}),e.jsx(q,{query:s}),e.jsxs("div",{className:"bg-purple-50 p-6 rounded-lg",children:[e.jsx("h4",{className:"text-lg font-semibold text-purple-900 mb-3",children:"⚡ 并发特性功能"}),e.jsxs("div",{className:"space-y-4 text-sm text-purple-800",children:[e.jsxs("div",{children:[e.jsx("h5",{className:"font-medium mb-2",children:"useTransition"}),e.jsxs("ul",{className:"space-y-1 ml-4",children:[e.jsx("li",{children:"• 将状态更新标记为非紧急，避免阻塞用户交互"}),e.jsx("li",{children:"• 提供 isPending 状态，用于显示加载指示器"}),e.jsx("li",{children:"• 适用于数据获取、复杂计算等耗时操作"})]})]}),e.jsxs("div",{children:[e.jsx("h5",{className:"font-medium mb-2",children:"useDeferredValue"}),e.jsxs("ul",{className:"space-y-1 ml-4",children:[e.jsx("li",{children:"• 延迟更新值，优先处理更重要的更新"}),e.jsx("li",{children:"• 适用于搜索、过滤等频繁变化的场景"}),e.jsx("li",{children:"• 与 useTransition 配合使用效果更佳"})]})]}),e.jsxs("div",{children:[e.jsx("h5",{className:"font-medium mb-2",children:"时间切片 (Time Slicing)"}),e.jsxs("ul",{className:"space-y-1 ml-4",children:[e.jsx("li",{children:"• 将长时间运行的任务分解为小块"}),e.jsx("li",{children:"• 保持应用响应性，避免页面卡顿"}),e.jsx("li",{children:"• 自动优先级调度，确保用户体验"})]})]}),e.jsxs("div",{children:[e.jsx("h5",{className:"font-medium mb-2",children:"优先级调度"}),e.jsxs("ul",{className:"space-y-1 ml-4",children:[e.jsx("li",{children:"• 用户交互 > 数据更新 > 后台任务"}),e.jsx("li",{children:"• 智能中断和恢复低优先级任务"}),e.jsx("li",{children:"• 确保关键更新及时响应"})]})]})]})]})]})},Q=`import React, { Suspense, useEffect, useState } from "react";

import { LazyUserProfile } from "./LazyComponents";
import { User } from "./types";
import { fetchUsers } from "./utils";

// 用户列表组件
const UserList: React.FC<{
  onUserSelect: (user: User) => void;
}> = ({ onUserSelect }) => {
  const [users, setUsers] = useState<User[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchUsers(1, 10).then(({ users }) => {
      setUsers(users);
      setLoading(false);
    });
  }, []);

  if (loading) {
    return (
      <div className="space-y-2">
        {Array.from({ length: 5 }).map((_, i) => (
          <div key={i} className="animate-pulse">
            <div className="flex items-center space-x-3 p-3 bg-gray-100 rounded">
              <div className="w-10 h-10 bg-gray-300 rounded-full"></div>
              <div className="flex-1">
                <div className="h-4 bg-gray-300 rounded w-3/4 mb-2"></div>
                <div className="h-3 bg-gray-300 rounded w-1/2"></div>
              </div>
            </div>
          </div>
        ))}
      </div>
    );
  }

  return (
    <div className="space-y-2">
      {users.map((user) => (
        <div
          key={user.id}
          className="flex items-center space-x-3 p-3 bg-gray-50 hover:bg-gray-100 rounded cursor-pointer transition-colors"
          onClick={() => onUserSelect(user)}
        >
          <img
            src={user.avatar}
            alt={user.name}
            className="w-10 h-10 rounded-full"
          />
          <div className="flex-1">
            <h4 className="font-medium text-gray-900">{user.name}</h4>
            <p className="text-sm text-gray-600">{user.department}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

// 基础 Suspense 演示组件
export const BasicSuspenseDemo: React.FC = () => {
  const [selectedUser, setSelectedUser] = useState<User | null>(null);
  const [showProfile, setShowProfile] = useState(false);

  const handleUserSelect = (user: User) => {
    setSelectedUser(user);
    setShowProfile(true);
  };

  const handleCloseProfile = () => {
    setShowProfile(false);
    setSelectedUser(null);
  };

  return (
    <div className="space-y-6">
      {/* 用户列表 */}
      <div>
        <h3 className="text-lg font-semibold mb-4">用户列表</h3>
        <div className="bg-white p-4 rounded-lg border border-gray-200">
          <UserList onUserSelect={handleUserSelect} />
        </div>
      </div>

      {/* 用户详情 - Suspense 演示 */}
      {showProfile && selectedUser && (
        <div>
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-lg font-semibold">用户详情 (Suspense 加载)</h3>
            <button
              onClick={handleCloseProfile}
              className="px-3 py-1 text-sm bg-gray-200 hover:bg-gray-300 rounded transition-colors"
            >
              关闭
            </button>
          </div>
          <Suspense
            fallback={
              <div className="p-8 bg-white border border-gray-200 rounded-lg">
                <div className="flex items-center justify-center space-x-2">
                  <div className="animate-spin rounded-full h-6 w-6 border-b-2 border-blue-600"></div>
                  <span className="text-gray-600">正在加载用户详情...</span>
                </div>
              </div>
            }
          >
            <LazyUserProfile user={selectedUser} />
          </Suspense>
        </div>
      )}

      {/* Suspense 基础功能介绍 */}
      <div className="bg-blue-50 p-6 rounded-lg">
        <h4 className="text-lg font-semibold text-blue-900 mb-3">
          🔄 Suspense 基础功能
        </h4>
        <div className="space-y-3 text-sm text-blue-800">
          <div className="flex items-start space-x-2">
            <span className="font-medium">1. 懒加载:</span>
            <span>支持组件的按需加载，减少初始包大小</span>
          </div>
          <div className="flex items-start space-x-2">
            <span className="font-medium">2. 加载状态:</span>
            <span>提供统一的加载状态管理和 fallback UI</span>
          </div>
          <div className="flex items-start space-x-2">
            <span className="font-medium">3. 错误边界:</span>
            <span>与 ErrorBoundary 配合处理加载错误</span>
          </div>
          <div className="flex items-start space-x-2">
            <span className="font-medium">4. 嵌套支持:</span>
            <span>支持多层嵌套的 Suspense 边界</span>
          </div>
        </div>
      </div>
    </div>
  );
};
`,E=`import React, {
  Suspense,
  useDeferredValue,
  useEffect,
  useRef,
  useState,
  useTransition,
} from "react";

import { LazyPostCard } from "./LazyComponents";
import { Post } from "./types";
import { fetchPosts } from "./utils";

// 模拟大量计算的组件
const ExpensiveList: React.FC<{ query: string }> = ({ query }) => {
  const deferredQuery = useDeferredValue(query);
  const renderCount = useRef(0);
  renderCount.current++;

  // 模拟大量计算
  const items = React.useMemo(() => {
    const start = performance.now();
    const result = [];
    for (let i = 0; i < 10000; i++) {
      if (deferredQuery && i.toString().includes(deferredQuery)) {
        result.push(i);
      } else if (!deferredQuery) {
        result.push(i);
      }
    }
    const end = performance.now();
    console.log(\`计算耗时: \${end - start}ms\`);
    return result.slice(0, 100); // 只显示前100个
  }, [deferredQuery]);

  return (
    <div className="bg-gray-50 p-4 rounded-lg">
      <div className="flex items-center justify-between mb-3">
        <h4 className="font-medium text-gray-900">大量计算演示</h4>
        <span className="text-xs text-gray-500">
          渲染次数: {renderCount.current}
        </span>
      </div>
      <div className="text-sm text-gray-600 mb-2">
        查询词: "{deferredQuery}" (使用 useDeferredValue 优化)
      </div>
      <div className="grid grid-cols-10 gap-1 max-h-32 overflow-y-auto">
        {items.map((item) => (
          <div
            key={item}
            className="text-xs p-1 bg-white border rounded text-center"
          >
            {item}
          </div>
        ))}
      </div>
    </div>
  );
};

// 并发特性演示组件
export const ConcurrencyFeaturesDemo: React.FC = () => {
  const [query, setQuery] = useState("");
  const [posts, setPosts] = useState<Post[]>([]);
  const [loading, setLoading] = useState(false);
  const [isPending, startTransition] = useTransition();
  const deferredQuery = useDeferredValue(query);
  const renderCount = useRef(0);
  const [searchStats, setSearchStats] = useState({
    totalSearches: 0,
    lastSearchTime: 0,
  });

  renderCount.current++;

  // 搜索文章
  const searchPosts = async (searchQuery: string) => {
    const start = performance.now();
    setLoading(true);
    try {
      const { posts } = await fetchPosts(searchQuery);
      setPosts(posts);
      const end = performance.now();
      setSearchStats((prev) => ({
        totalSearches: prev.totalSearches + 1,
        lastSearchTime: end - start,
      }));
    } finally {
      setLoading(false);
    }
  };

  // 使用 useTransition 处理搜索
  const handleSearch = (value: string) => {
    setQuery(value);
    startTransition(() => {
      if (value.trim()) {
        searchPosts(value);
      } else {
        setPosts([]);
      }
    });
  };

  // 延迟搜索处理
  useEffect(() => {
    if (deferredQuery !== query) {
      console.log("延迟更新:", { current: query, deferred: deferredQuery });
    }
  }, [query, deferredQuery]);

  return (
    <div className="space-y-6">
      {/* 性能统计 */}
      <div className="bg-green-50 p-4 rounded-lg">
        <h4 className="font-medium text-green-900 mb-2">📊 性能统计</h4>
        <div className="grid grid-cols-3 gap-4 text-sm">
          <div className="text-center">
            <div className="text-lg font-semibold text-green-700">
              {renderCount.current}
            </div>
            <div className="text-green-600">组件渲染次数</div>
          </div>
          <div className="text-center">
            <div className="text-lg font-semibold text-green-700">
              {searchStats.totalSearches}
            </div>
            <div className="text-green-600">搜索次数</div>
          </div>
          <div className="text-center">
            <div className="text-lg font-semibold text-green-700">
              {searchStats.lastSearchTime.toFixed(0)}ms
            </div>
            <div className="text-green-600">上次搜索耗时</div>
          </div>
        </div>
      </div>

      {/* 搜索输入 */}
      <div>
        <h3 className="text-lg font-semibold mb-4">文章搜索 (并发特性演示)</h3>
        <div className="space-y-3">
          <input
            type="text"
            value={query}
            onChange={(e) => handleSearch(e.target.value)}
            placeholder="搜索文章标题、内容或标签..."
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          />
          <div className="flex items-center space-x-4 text-sm text-gray-600">
            <span>
              useTransition 状态: {isPending ? "⏳ 处理中" : "✅ 空闲"}
            </span>
            <span>当前查询: "{query}"</span>
            <span>延迟查询: "{deferredQuery}"</span>
          </div>
        </div>
      </div>

      {/* 搜索结果 */}
      <div>
        <h4 className="font-medium mb-3">搜索结果</h4>
        {loading && (
          <div className="flex items-center space-x-2 text-gray-600 mb-4">
            <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-blue-600"></div>
            <span>搜索中...</span>
          </div>
        )}
        <Suspense
          fallback={
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {Array.from({ length: 4 }).map((_, i) => (
                <div key={i} className="animate-pulse">
                  <div className="p-4 bg-gray-100 rounded-lg">
                    <div className="h-4 bg-gray-300 rounded w-3/4 mb-2"></div>
                    <div className="h-3 bg-gray-300 rounded w-full mb-2"></div>
                    <div className="h-3 bg-gray-300 rounded w-2/3"></div>
                  </div>
                </div>
              ))}
            </div>
          }
        >
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {posts.map((post) => (
              <LazyPostCard key={post.id} post={post} />
            ))}
          </div>
        </Suspense>
        {posts.length === 0 && query && !loading && (
          <div className="text-center py-8 text-gray-500">没有找到相关文章</div>
        )}
      </div>

      {/* 大量计算演示 */}
      <ExpensiveList query={query} />

      {/* 并发特性功能介绍 */}
      <div className="bg-purple-50 p-6 rounded-lg">
        <h4 className="text-lg font-semibold text-purple-900 mb-3">
          ⚡ 并发特性功能
        </h4>
        <div className="space-y-4 text-sm text-purple-800">
          <div>
            <h5 className="font-medium mb-2">useTransition</h5>
            <ul className="space-y-1 ml-4">
              <li>• 将状态更新标记为非紧急，避免阻塞用户交互</li>
              <li>• 提供 isPending 状态，用于显示加载指示器</li>
              <li>• 适用于数据获取、复杂计算等耗时操作</li>
            </ul>
          </div>
          <div>
            <h5 className="font-medium mb-2">useDeferredValue</h5>
            <ul className="space-y-1 ml-4">
              <li>• 延迟更新值，优先处理更重要的更新</li>
              <li>• 适用于搜索、过滤等频繁变化的场景</li>
              <li>• 与 useTransition 配合使用效果更佳</li>
            </ul>
          </div>
          <div>
            <h5 className="font-medium mb-2">时间切片 (Time Slicing)</h5>
            <ul className="space-y-1 ml-4">
              <li>• 将长时间运行的任务分解为小块</li>
              <li>• 保持应用响应性，避免页面卡顿</li>
              <li>• 自动优先级调度，确保用户体验</li>
            </ul>
          </div>
          <div>
            <h5 className="font-medium mb-2">优先级调度</h5>
            <ul className="space-y-1 ml-4">
              <li>• 用户交互 &gt; 数据更新 &gt; 后台任务</li>
              <li>• 智能中断和恢复低优先级任务</li>
              <li>• 确保关键更新及时响应</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};
`,h=`import { Post, User } from "./types";

import { delay } from "./utils";
import { lazy } from "react";

// 懒加载用户详情组件
export const LazyUserProfile = lazy(async () => {
  await delay(1500); // 模拟组件加载时间
  return {
    default: ({ user }: { user: User }) => (
      <div className="p-4 bg-white border border-gray-200 rounded-lg shadow-sm">
        <div className="flex items-center space-x-4">
          <img
            src={user.avatar}
            alt={user.name}
            className="w-16 h-16 rounded-full"
          />
          <div className="flex-1">
            <h3 className="text-lg font-semibold text-gray-900">{user.name}</h3>
            <p className="text-sm text-gray-600">{user.email}</p>
            <div className="flex items-center space-x-4 mt-2">
              <span className="text-xs bg-blue-100 text-blue-800 px-2 py-1 rounded">
                {user.department}
              </span>
              <span className="text-xs bg-green-100 text-green-800 px-2 py-1 rounded">
                {user.role}
              </span>
              <span
                className={\`text-xs px-2 py-1 rounded \${
                  user.status === "active"
                    ? "bg-green-100 text-green-800"
                    : user.status === "inactive"
                    ? "bg-red-100 text-red-800"
                    : "bg-yellow-100 text-yellow-800"
                }\`}
              >
                {user.status}
              </span>
            </div>
            <p className="text-xs text-gray-500 mt-1">
              入职时间: {user.joinDate}
            </p>
          </div>
        </div>
      </div>
    ),
  };
});

// 懒加载文章卡片组件
export const LazyPostCard = lazy(async () => {
  await delay(1200); // 模拟组件加载时间
  return {
    default: ({ post }: { post: Post }) => (
      <div className="p-4 bg-white border border-gray-200 rounded-lg shadow-sm hover:shadow-md transition-shadow">
        <h3 className="text-lg font-semibold text-gray-900 mb-2">
          {post.title}
        </h3>
        <p className="text-sm text-gray-600 mb-3 line-clamp-3">
          {post.content}
        </p>
        <div className="flex items-center justify-between text-xs text-gray-500 mb-3">
          <span>作者: {post.author}</span>
          <span>{post.publishDate}</span>
        </div>
        <div className="flex items-center justify-between">
          <div className="flex space-x-2">
            {post.tags.map((tag) => (
              <span
                key={tag}
                className="text-xs bg-blue-100 text-blue-800 px-2 py-1 rounded"
              >
                {tag}
              </span>
            ))}
          </div>
          <div className="flex items-center space-x-4 text-xs text-gray-500">
            <span>👍 {post.likes}</span>
            <span>💬 {post.comments}</span>
          </div>
        </div>
      </div>
    ),
  };
});
`,f=`// 模拟数据类型\r
export interface User {\r
  id: number;\r
  name: string;\r
  email: string;\r
  avatar: string;\r
  department: string;\r
  role: string;\r
  joinDate: string;\r
  status: "active" | "inactive" | "pending";\r
}\r
\r
export interface Post {\r
  id: number;\r
  title: string;\r
  content: string;\r
  author: string;\r
  publishDate: string;\r
  tags: string[];\r
  likes: number;\r
  comments: number;\r
}\r
`,v=`import { Post, User } from "./types";

// 模拟 API 延迟
export const delay = (ms: number) =>
  new Promise((resolve) => setTimeout(resolve, ms));

// 模拟数据生成
export const generateUsers = (count: number): User[] => {
  return Array.from({ length: count }, (_, i) => ({
    id: i + 1,
    name: \`用户 \${i + 1}\`,
    email: \`user\${i + 1}@example.com\`,
    avatar: \`https://api.dicebear.com/7.x/avataaars/svg?seed=\${i}\`,
    department: ["技术部", "产品部", "设计部", "运营部"][i % 4],
    role: ["开发工程师", "产品经理", "设计师", "运营专员"][i % 4],
    joinDate: new Date(2020 + Math.floor(i / 100), i % 12, (i % 28) + 1)
      .toISOString()
      .split("T")[0],
    status: ["active", "inactive", "pending"][i % 3] as User["status"],
  }));
};

export const generatePosts = (count: number): Post[] => {
  const titles = [
    "React 18 新特性详解",
    "TypeScript 最佳实践",
    "前端性能优化指南",
    "Webpack 配置优化",
    "CSS-in-JS 解决方案对比",
    "GraphQL vs REST API",
    "微前端架构实践",
    "Node.js 服务端开发",
  ];

  const tags = [
    "React",
    "TypeScript",
    "性能优化",
    "Webpack",
    "CSS",
    "GraphQL",
    "微前端",
    "Node.js",
  ];

  return Array.from({ length: count }, (_, i) => ({
    id: i + 1,
    title: titles[i % titles.length],
    content: \`这是第 \${
      i + 1
    } 篇文章的内容。文章详细介绍了相关技术的核心概念、实践方法和最佳实践。内容包括基础知识、进阶技巧、实际案例分析等多个方面。\`,
    author: \`作者 \${(i % 10) + 1}\`,
    publishDate: new Date(2023, i % 12, (i % 28) + 1)
      .toISOString()
      .split("T")[0],
    tags: [tags[i % tags.length], tags[(i + 1) % tags.length]],
    likes: Math.floor(Math.random() * 1000),
    comments: Math.floor(Math.random() * 100),
  }));
};

// 数据获取函数
export const fetchUsers = async (
  page: number = 1,
  pageSize: number = 20
): Promise<{ users: User[]; total: number }> => {
  await delay(1000 + Math.random() * 1000); // 模拟网络延迟
  const allUsers = generateUsers(1000);
  const startIndex = (page - 1) * pageSize;
  const users = allUsers.slice(startIndex, startIndex + pageSize);
  return { users, total: allUsers.length };
};

export const fetchPosts = async (
  query: string = "",
  page: number = 1
): Promise<{ posts: Post[]; total: number }> => {
  await delay(800 + Math.random() * 800); // 模拟网络延迟
  const allPosts = generatePosts(500);
  const filteredPosts = query
    ? allPosts.filter(
        (post) =>
          post.title.toLowerCase().includes(query.toLowerCase()) ||
          post.content.toLowerCase().includes(query.toLowerCase()) ||
          post.tags.some((tag) =>
            tag.toLowerCase().includes(query.toLowerCase())
          )
      )
    : allPosts;

  const startIndex = (page - 1) * 10;
  const posts = filteredPosts.slice(startIndex, startIndex + 10);
  return { posts, total: filteredPosts.length };
};
`,A=()=>e.jsx(T,{title:"Suspense 与并发特性",description:"React 18 引入了强大的并发特性，包括 Suspense、useTransition 和 useDeferredValue。本节展示如何使用这些特性优化应用性能，实现更好的用户体验，包括懒加载、时间切片和优先级调度。",overview:[{title:"核心概念",items:["Suspense异步处理","并发渲染机制","时间切片技术","优先级调度"]},{title:"主要优势",items:["更好的用户体验","智能按需加载","性能优化提升","渐进式增强"]},{title:"适用场景",items:["代码分割懒加载","异步数据获取","实时搜索功能","复杂交互界面"]},{title:"注意事项",items:["需要React 18+支持","学习成本较高","调试复杂性增加","第三方库兼容性"]}],examples:[{title:"基础 Suspense",component:e.jsx(V,{}),description:"展示 Suspense 的基础用法，包括懒加载组件和加载状态处理。",observationPoints:["点击用户列表中的用户会触发懒加载的用户详情组件","Suspense 会显示 fallback UI 直到组件加载完成","懒加载组件只在需要时才会被下载和执行","可以嵌套多个 Suspense 边界处理不同的加载状态"],keyPoints:["使用 React.lazy() 创建懒加载组件","Suspense 组件包装懒加载组件并提供 fallback","支持嵌套 Suspense 边界","与错误边界配合处理加载失败"],commonTraps:["懒加载组件必须是默认导出","Suspense 边界位置影响用户体验","网络错误可能导致组件加载失败","过度的代码分割可能增加网络请求"],solutions:["确保懒加载组件使用 export default","在合适的层级设置 Suspense 边界","配合错误边界处理加载失败","合理规划代码分割策略"],importantTips:["Suspense 只能捕获子组件树中的 Promise","fallback UI 应该提供有意义的加载提示","可以使用多个 Suspense 边界实现渐进式加载","懒加载组件的加载时机由 React 控制"],preCode:[{title:"types",code:f},{title:"LazyComponent",code:h},{title:"utils",code:v}],codeExample:{title:"基础 Suspense 演示",code:Q}},{title:"并发特性",component:e.jsx(z,{}),description:"展示 useTransition 和 useDeferredValue 的并发特性，优化用户交互体验。",observationPoints:["输入搜索关键词时，界面保持响应性，不会出现卡顿","useTransition 将搜索标记为非紧急更新","useDeferredValue 延迟昂贵计算的更新","渲染统计显示并发特性对性能的影响"],keyPoints:["useTransition 区分紧急和非紧急更新","useDeferredValue 延迟值的更新","isPending 状态指示非紧急更新进行中","时间切片避免长任务阻塞主线程"],commonTraps:["过度使用 startTransition 可能延迟重要更新","useDeferredValue 的延迟可能导致不一致状态","并发特性在开发模式下可能表现不同","第三方库可能不兼容并发模式"],solutions:["只对真正非紧急的更新使用 startTransition","合理设计状态结构，避免不一致","在生产环境中测试并发特性","检查第三方库的并发模式兼容性"],importantTips:["并发特性是可选的，可以逐步采用","用户输入应该始终是高优先级的","大量计算应该使用 useDeferredValue 优化","并发渲染可能改变组件的执行顺序"],preCode:[{title:"types",code:f},{title:"LazyComponent",code:h},{title:"utils",code:v}],codeExample:{title:"并发特性演示",code:E}}],tutorial:{concepts:["React 18 并发模式的工作原理","Suspense 的数据获取模式","useTransition 的使用场景和最佳实践","useDeferredValue 的优化策略","时间切片和优先级调度机制","并发特性与现有代码的兼容性"],steps:["升级到 React 18 并启用并发模式","使用 React.lazy() 创建懒加载组件","添加 Suspense 边界并设计 fallback UI","识别非紧急更新，使用 useTransition 优化","对昂贵计算使用 useDeferredValue 延迟更新","配合错误边界处理加载和渲染错误","测试并发特性在不同场景下的表现","监控性能指标，验证优化效果","逐步迁移现有组件到并发模式"],tips:["从叶子组件开始逐步采用并发特性","使用 React DevTools Profiler 分析性能","在真实设备上测试用户体验","保持 fallback UI 的一致性和有用性","合理设置 Suspense 边界的粒度","监控并发特性对应用性能的影响"]},interview:{questions:[{question:"什么是 React 18 的并发特性？它解决了什么问题？",answer:"React 18 的并发特性包括时间切片、优先级调度、Suspense 和新的 Hooks（useTransition、useDeferredValue）。它解决了：1) 长任务阻塞主线程导致界面卡顿；2) 用户交互响应延迟；3) 大量数据渲染性能问题；4) 代码分割和懒加载的复杂性。通过并发渲染，React 可以中断和恢复渲染工作，优先处理用户交互。"},{question:"useTransition 和 useDeferredValue 有什么区别？",answer:"useTransition 和 useDeferredValue 都用于优化性能，但用途不同：useTransition 用于标记非紧急的状态更新，返回 isPending 状态和 startTransition 函数；useDeferredValue 用于延迟值的更新，返回一个延迟版本的值。useTransition 适合处理用户操作触发的更新，useDeferredValue 适合优化昂贵的计算和渲染。"},{question:"Suspense 如何与数据获取配合使用？",answer:"Suspense 可以与支持 Suspense 的数据获取库配合使用：1) 数据获取库抛出 Promise；2) Suspense 捕获 Promise 并显示 fallback；3) Promise 解决后重新渲染组件。这种模式称为 'Render-as-You-Fetch'，相比传统的 'Fetch-on-Render' 模式，可以更早开始数据获取，提升性能。"},{question:"如何在现有项目中逐步采用并发特性？",answer:"逐步采用策略：1) 升级到 React 18，使用 createRoot API；2) 从叶子组件开始添加 Suspense 边界；3) 识别性能瓶颈，使用 useTransition 优化非紧急更新；4) 对昂贵计算使用 useDeferredValue；5) 使用 React DevTools 监控性能；6) 确保第三方库兼容性；7) 在生产环境中逐步启用并发特性。"},{question:"并发模式对组件生命周期有什么影响？",answer:"并发模式的影响：1) 渲染阶段可能被中断和重新开始，render 方法可能被多次调用；2) 副作用应该放在 useEffect 中，不要在渲染阶段执行；3) 某些生命周期方法（如 componentWillMount）已被废弃；4) 需要确保组件是纯函数，避免副作用；5) 状态更新可能被批处理或延迟；6) 需要重新考虑组件的设计模式。"}],keyPoints:["并发特性是 React 18 的核心功能，向后兼容","Suspense 不仅用于懒加载，还可以处理数据获取","useTransition 区分紧急和非紧急更新","useDeferredValue 延迟昂贵计算的更新","时间切片保持界面响应性","并发渲染可能改变组件的执行顺序","需要确保组件和第三方库的兼容性","性能优化应该基于实际测量结果"]},bestPractices:{dos:["使用 createRoot API 启用并发特性","在合适的层级设置 Suspense 边界","对非紧急更新使用 useTransition","对昂贵计算使用 useDeferredValue","提供有意义的 fallback UI","配合错误边界处理加载失败","使用 React DevTools 监控性能","在真实设备上测试用户体验","逐步迁移现有组件到并发模式","保持组件的纯函数特性"],donts:["不要过度使用 startTransition","不要在渲染阶段执行副作用","不要忽略第三方库的兼容性","不要过度细分 Suspense 边界","不要依赖组件的执行顺序","不要在并发模式下使用已废弃的生命周期","不要忽略性能监控和测试","不要一次性迁移所有组件","不要在 fallback UI 中执行副作用","不要假设并发特性总是提升性能"],patterns:["渐进式加载：使用 Suspense 实现组件和数据的按需加载","优先级调度：根据用户交互优先级调度更新","时间切片：将长任务分解为小块，保持响应性","错误边界：配合 Suspense 处理加载失败","缓存模式：结合数据获取库实现智能缓存","批处理：自动批处理状态更新，减少渲染次数","中断恢复：允许高优先级任务中断低优先级任务","预加载：提前加载可能需要的组件和数据","降级处理：在不支持并发特性的环境中提供降级方案","监控模式：实时监控并发特性的性能影响"]}});export{A as default};
