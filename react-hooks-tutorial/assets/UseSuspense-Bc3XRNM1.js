import{j as e,R as f,r as t}from"./index-CKH9Ek1I.js";import{C as v}from"./ComponentTemplate-B8dTsNLj.js";const c=new Map;function b(s,n){if(c.has(n))return c.get(n);let r="pending",a,i;const u=s().then(m=>{r="success",a=m}).catch(m=>{r="error",i=m}),o={read(){if(r==="pending")throw u;if(r==="error")throw i;return a},status:r,invalidate(){c.delete(n)}};return c.set(n,o),o}const N=s=>{c.delete(s)},S=s=>new Promise((n,r)=>{setTimeout(()=>{s===999?r(new Error("用户不存在")):n({id:s,name:`用户 ${s}`,email:`user${s}@example.com`,avatar:`https://api.dicebear.com/7.x/avataaars/svg?seed=${s}`})},Math.random()*1e3+500)}),j=s=>new Promise((n,r)=>{setTimeout(()=>{s===999?r(new Error("文章不存在")):n({id:s,title:`文章标题 ${s}`,content:`这是文章 ${s} 的内容。Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.`,author:`作者 ${s}`})},Math.random()*800+300)}),h=({userId:s})=>{const r=b(()=>S(s),`user-${s}`).read();return e.jsx("div",{className:"bg-white p-6 rounded-lg shadow-md",children:e.jsxs("div",{className:"flex items-center space-x-4",children:[e.jsx("img",{src:r.avatar,alt:r.name,className:"w-16 h-16 rounded-full"}),e.jsxs("div",{children:[e.jsx("h3",{className:"text-xl font-semibold",children:r.name}),e.jsx("p",{className:"text-gray-600",children:r.email}),e.jsxs("p",{className:"text-sm text-gray-500",children:["ID: ",r.id]})]})]})})},g=({postId:s})=>{const r=b(()=>j(s),`post-${s}`).read();return e.jsxs("div",{className:"bg-white p-6 rounded-lg shadow-md mt-4",children:[e.jsx("h4",{className:"text-lg font-semibold mb-2",children:r.title}),e.jsx("p",{className:"text-gray-700 mb-2",children:r.content}),e.jsxs("p",{className:"text-sm text-gray-500",children:["作者: ",r.author]})]})},d=({message:s="加载中..."})=>e.jsx("div",{className:"flex items-center justify-center p-8",children:e.jsxs("div",{className:"flex items-center space-x-3",children:[e.jsx("div",{className:"animate-spin rounded-full h-6 w-6 border-b-2 border-blue-500"}),e.jsx("span",{className:"text-gray-600",children:s})]})});class l extends f.Component{constructor(n){super(n),this.state={hasError:!1}}static getDerivedStateFromError(n){return{hasError:!0,error:n}}componentDidCatch(n,r){console.error("ErrorBoundary caught an error:",n,r)}render(){var n;return this.state.hasError?this.props.fallback||e.jsxs("div",{className:"p-6 bg-red-50 border border-red-200 rounded-lg",children:[e.jsx("h3",{className:"text-lg font-semibold text-red-800 mb-2",children:"出现错误"}),e.jsx("p",{className:"text-red-600 mb-4",children:((n=this.state.error)==null?void 0:n.message)||"未知错误"}),e.jsx("button",{onClick:()=>this.setState({hasError:!1,error:void 0}),className:"px-4 py-2 bg-red-600 text-white rounded hover:bg-red-700 transition-colors",children:"重试"})]}):this.props.children}}const y=()=>{const[s,n]=t.useState(1),r=()=>{N(`user-${s}`),n(s)};return e.jsxs("div",{className:"space-y-4",children:[e.jsxs("div",{className:"flex items-center space-x-4",children:[e.jsx("label",{className:"font-medium",children:"选择用户:"}),e.jsxs("select",{value:s,onChange:a=>n(Number(a.target.value)),className:"px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500",children:[e.jsx("option",{value:1,children:"用户 1"}),e.jsx("option",{value:2,children:"用户 2"}),e.jsx("option",{value:3,children:"用户 3"}),e.jsx("option",{value:999,children:"错误用户 (测试错误)"})]}),e.jsx("button",{onClick:r,className:"px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 transition-colors",children:"刷新数据"})]}),e.jsx(l,{children:e.jsx(t.Suspense,{fallback:e.jsx(d,{message:"正在加载用户信息..."}),children:e.jsx(h,{userId:s})})})]})},I=()=>{const[s,n]=t.useState(1),[r,a]=t.useState(!1);return e.jsxs("div",{className:"space-y-4",children:[e.jsxs("div",{className:"flex items-center space-x-4",children:[e.jsx("label",{className:"font-medium",children:"选择用户:"}),e.jsxs("select",{value:s,onChange:i=>n(Number(i.target.value)),className:"px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500",children:[e.jsx("option",{value:1,children:"用户 1"}),e.jsx("option",{value:2,children:"用户 2"}),e.jsx("option",{value:3,children:"用户 3"})]}),e.jsxs("button",{onClick:()=>a(!r),className:"px-4 py-2 bg-green-500 text-white rounded-md hover:bg-green-600 transition-colors",children:[r?"隐藏":"显示","文章"]})]}),e.jsx(l,{children:e.jsxs(t.Suspense,{fallback:e.jsx(d,{message:"正在加载用户信息..."}),children:[e.jsx(h,{userId:s}),r&&e.jsx(l,{children:e.jsxs(t.Suspense,{fallback:e.jsx(d,{message:"正在加载文章内容..."}),children:[e.jsx(g,{postId:s}),e.jsx(g,{postId:s+10})]})})]})})]})},w=()=>{const[s,n]=t.useState(1),[r,a]=t.useTransition(),i=t.useDeferredValue(s),u=o=>{a(()=>{n(o)})};return e.jsxs("div",{className:"space-y-4",children:[e.jsxs("div",{className:"flex items-center space-x-4",children:[e.jsx("label",{className:"font-medium",children:"选择用户:"}),e.jsx("div",{className:"flex space-x-2",children:[1,2,3,4].map(o=>e.jsxs("button",{onClick:()=>u(o),className:`px-4 py-2 rounded-md transition-colors ${s===o?"bg-blue-500 text-white":"bg-gray-200 text-gray-700 hover:bg-gray-300"}`,disabled:r,children:["用户 ",o]},o))}),r&&e.jsxs("div",{className:"flex items-center space-x-2",children:[e.jsx("div",{className:"animate-spin rounded-full h-4 w-4 border-b-2 border-blue-500"}),e.jsx("span",{className:"text-sm text-gray-600",children:"切换中..."})]})]}),e.jsx("div",{className:"bg-gray-50 p-4 rounded-lg",children:e.jsxs("div",{className:"grid grid-cols-2 gap-4 text-sm",children:[e.jsxs("div",{children:[e.jsx("span",{className:"font-medium",children:"当前选择:"})," 用户 ",s]}),e.jsxs("div",{children:[e.jsx("span",{className:"font-medium",children:"延迟值:"})," 用户 ",i]}),e.jsxs("div",{children:[e.jsx("span",{className:"font-medium",children:"过渡状态:"})," ",e.jsx("span",{className:r?"text-orange-600":"text-green-600",children:r?"进行中":"完成"})]}),e.jsxs("div",{children:[e.jsx("span",{className:"font-medium",children:"渲染状态:"})," ",e.jsx("span",{className:"text-blue-600",children:s===i?"同步":"延迟"})]})]})}),e.jsx(l,{children:e.jsx(t.Suspense,{fallback:e.jsx(d,{message:"正在加载用户信息..."}),children:e.jsx(h,{userId:i})})})]})},R=`import React, { Suspense, useState } from 'react';
import { UserResource } from './ResourceComponents';
import { LoadingSpinner, ErrorBoundary } from './UIComponents';
import { clearCache } from './resourceUtils';

export const BasicSuspenseDemo: React.FC = () => {
  const [userId, setUserId] = useState(1);

  const refreshData = () => {
    clearCache(\`user-\${userId}\`);
    // 强制重新渲染
    setUserId(userId);
  };

  return (
    <div className="space-y-4">
      <div className="flex items-center space-x-4">
        <label className="font-medium">选择用户:</label>
        <select
          value={userId}
          onChange={(e) => setUserId(Number(e.target.value))}
          className="px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
        >
          <option value={1}>用户 1</option>
          <option value={2}>用户 2</option>
          <option value={3}>用户 3</option>
          <option value={999}>错误用户 (测试错误)</option>
        </select>
        <button
          onClick={refreshData}
          className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 transition-colors"
        >
          刷新数据
        </button>
      </div>

      <ErrorBoundary>
        <Suspense fallback={<LoadingSpinner message="正在加载用户信息..." />}>
          <UserResource userId={userId} />
        </Suspense>
      </ErrorBoundary>
    </div>
  );
};`,C=`import React, { Suspense, useState } from 'react';
import { UserResource, PostResource } from './ResourceComponents';
import { LoadingSpinner, ErrorBoundary } from './UIComponents';

export const NestedSuspenseDemo: React.FC = () => {
  const [userId, setUserId] = useState(1);
  const [showPosts, setShowPosts] = useState(false);

  return (
    <div className="space-y-4">
      <div className="flex items-center space-x-4">
        <label className="font-medium">选择用户:</label>
        <select
          value={userId}
          onChange={(e) => setUserId(Number(e.target.value))}
          className="px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
        >
          <option value={1}>用户 1</option>
          <option value={2}>用户 2</option>
          <option value={3}>用户 3</option>
        </select>
        <button
          onClick={() => setShowPosts(!showPosts)}
          className="px-4 py-2 bg-green-500 text-white rounded-md hover:bg-green-600 transition-colors"
        >
          {showPosts ? '隐藏' : '显示'}文章
        </button>
      </div>

      {/* 外层 Suspense - 用户信息 */}
      <ErrorBoundary>
        <Suspense fallback={<LoadingSpinner message="正在加载用户信息..." />}>
          <UserResource userId={userId} />
          
          {/* 内层 Suspense - 文章内容 */}
          {showPosts && (
            <ErrorBoundary>
              <Suspense fallback={<LoadingSpinner message="正在加载文章内容..." />}>
                <PostResource postId={userId} />
                <PostResource postId={userId + 10} />
              </Suspense>
            </ErrorBoundary>
          )}
        </Suspense>
      </ErrorBoundary>
    </div>
  );
};`,p=`import React from 'react';
import { createResource } from './resourceUtils';
import { fetchUserData, fetchPostData } from './mockData';

// 用户资源组件
export const UserResource: React.FC<{ userId: number }> = ({ userId }) => {
  const resource = createResource(
    () => fetchUserData(userId),
    \`user-\${userId}\`
  );
  const user = resource.read();

  return (
    <div className="bg-white p-6 rounded-lg shadow-md">
      <div className="flex items-center space-x-4">
        <img
          src={user.avatar}
          alt={user.name}
          className="w-16 h-16 rounded-full"
        />
        <div>
          <h3 className="text-xl font-semibold">{user.name}</h3>
          <p className="text-gray-600">{user.email}</p>
          <p className="text-sm text-gray-500">ID: {user.id}</p>
        </div>
      </div>
    </div>
  );
};

// 文章资源组件
export const PostResource: React.FC<{ postId: number }> = ({ postId }) => {
  const resource = createResource(
    () => fetchPostData(postId),
    \`post-\${postId}\`
  );
  const post = resource.read();

  return (
    <div className="bg-white p-6 rounded-lg shadow-md mt-4">
      <h4 className="text-lg font-semibold mb-2">{post.title}</h4>
      <p className="text-gray-700 mb-2">{post.content}</p>
      <p className="text-sm text-gray-500">作者: {post.author}</p>
    </div>
  );
};`,U=`import React, { Suspense, useState, useTransition, useDeferredValue } from 'react';
import { UserResource } from './ResourceComponents';
import { LoadingSpinner, ErrorBoundary } from './UIComponents';

export const TransitionSuspenseDemo: React.FC = () => {
  const [userId, setUserId] = useState(1);
  const [isPending, startTransition] = useTransition();
  const deferredUserId = useDeferredValue(userId);

  const handleUserChange = (newUserId: number) => {
    startTransition(() => {
      setUserId(newUserId);
    });
  };

  return (
    <div className="space-y-4">
      <div className="flex items-center space-x-4">
        <label className="font-medium">选择用户:</label>
        <div className="flex space-x-2">
          {[1, 2, 3, 4].map((id) => (
            <button
              key={id}
              onClick={() => handleUserChange(id)}
              className={\`px-4 py-2 rounded-md transition-colors \${
                userId === id
                  ? 'bg-blue-500 text-white'
                  : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
              }\`}
              disabled={isPending}
            >
              用户 {id}
            </button>
          ))}
        </div>
        {isPending && (
          <div className="flex items-center space-x-2">
            <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-blue-500"></div>
            <span className="text-sm text-gray-600">切换中...</span>
          </div>
        )}
      </div>

      <div className="bg-gray-50 p-4 rounded-lg">
        <div className="grid grid-cols-2 gap-4 text-sm">
          <div>
            <span className="font-medium">当前选择:</span> 用户 {userId}
          </div>
          <div>
            <span className="font-medium">延迟值:</span> 用户 {deferredUserId}
          </div>
          <div>
            <span className="font-medium">过渡状态:</span>{' '}
            <span className={isPending ? 'text-orange-600' : 'text-green-600'}>
              {isPending ? '进行中' : '完成'}
            </span>
          </div>
          <div>
            <span className="font-medium">渲染状态:</span>{' '}
            <span className="text-blue-600">
              {userId === deferredUserId ? '同步' : '延迟'}
            </span>
          </div>
        </div>
      </div>

      <ErrorBoundary>
        <Suspense fallback={<LoadingSpinner message="正在加载用户信息..." />}>
          <UserResource userId={deferredUserId} />
        </Suspense>
      </ErrorBoundary>
    </div>
  );
};`,x=`import React from 'react';

// 加载指示器组件
export const LoadingSpinner: React.FC<{ message?: string }> = ({
  message = "加载中...",
}) => (
  <div className="flex items-center justify-center p-8">
    <div className="flex items-center space-x-3">
      <div className="animate-spin rounded-full h-6 w-6 border-b-2 border-blue-500"></div>
      <span className="text-gray-600">{message}</span>
    </div>
  </div>
);

// 错误边界组件
export class ErrorBoundary extends React.Component<
  { children: React.ReactNode; fallback?: React.ReactNode },
  { hasError: boolean; error?: Error }
> {
  constructor(props: any) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error: Error) {
    return { hasError: true, error };
  }

  componentDidCatch(error: Error, errorInfo: React.ErrorInfo) {
    console.error('ErrorBoundary caught an error:', error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      return (
        this.props.fallback || (
          <div className="p-6 bg-red-50 border border-red-200 rounded-lg">
            <h3 className="text-lg font-semibold text-red-800 mb-2">
              出现错误
            </h3>
            <p className="text-red-600 mb-4">
              {this.state.error?.message || '未知错误'}
            </p>
            <button
              onClick={() => this.setState({ hasError: false, error: undefined })}
              className="px-4 py-2 bg-red-600 text-white rounded hover:bg-red-700 transition-colors"
            >
              重试
            </button>
          </div>
        )
      );
    }

    return this.props.children;
  }
}`,E=`// 模拟异步数据获取函数\r
export const fetchUserData = (\r
  userId: number\r
): Promise<{ id: number; name: string; email: string; avatar: string }> => {\r
  return new Promise((resolve, reject) => {\r
    setTimeout(() => {\r
      if (userId === 999) {\r
        reject(new Error("用户不存在"));\r
      } else {\r
        resolve({\r
          id: userId,\r
          name: \`用户 \${userId}\`,\r
          email: \`user\${userId}@example.com\`,\r
          avatar: \`https://api.dicebear.com/7.x/avataaars/svg?seed=\${userId}\`,\r
        });\r
      }\r
    }, Math.random() * 1000 + 500);\r
  });\r
};\r
\r
export const fetchPostData = (\r
  postId: number\r
): Promise<{ id: number; title: string; content: string; author: string }> => {\r
  return new Promise((resolve, reject) => {\r
    setTimeout(() => {\r
      if (postId === 999) {\r
        reject(new Error("文章不存在"));\r
      } else {\r
        resolve({\r
          id: postId,\r
          title: \`文章标题 \${postId}\`,\r
          content: \`这是文章 \${postId} 的内容。Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.\`,\r
          author: \`作者 \${postId}\`,\r
        });\r
      }\r
    }, Math.random() * 800 + 300);\r
  });\r
};`,P=`// 资源缓存
const resourceCache = new Map<string, any>();

// 创建可挂起的资源
export function createResource<T>(promiseFactory: () => Promise<T>, key: string) {
  if (resourceCache.has(key)) {
    return resourceCache.get(key);
  }

  let status = 'pending';
  let result: T;
  let error: any;

  const promise = promiseFactory()
    .then((data) => {
      status = 'success';
      result = data;
    })
    .catch((err) => {
      status = 'error';
      error = err;
    });

  const resource = {
    read() {
      if (status === 'pending') {
        throw promise; // 挂起组件
      }
      if (status === 'error') {
        throw error;
      }
      return result;
    },
    status,
    invalidate() {
      resourceCache.delete(key);
    },
  };

  resourceCache.set(key, resource);
  return resource;
}

// 清除所有缓存
export const clearAllCache = () => {
  resourceCache.clear();
};

// 清除特定缓存
export const clearCache = (key: string) => {
  resourceCache.delete(key);
};`,T=()=>e.jsx(v,{title:"Suspense 并发特性",description:"学习 React Suspense 的使用方法，实现优雅的异步数据加载和并发渲染。",overview:[{title:"核心概念",items:["Suspense 异步边界","资源挂起机制","并发渲染特性","错误边界处理"]},{title:"主要优势",items:["声明式的异步数据处理","更好的用户体验","简化异步状态管理","支持并发渲染优化"]},{title:"适用场景",items:["数据获取和加载状态","代码分割和懒加载","图片和资源加载","复杂的异步操作"]},{title:"注意事项",items:["需要 React 18+ 版本支持","必须配合错误边界使用","理解资源的生命周期","合理设计 fallback UI"]}],examples:[{title:"基础 Suspense 演示",component:e.jsx(y,{}),description:"展示 Suspense 的基本用法，包括数据加载和错误处理。",observationPoints:["切换用户 ID 时会显示加载状态","数据加载完成后自动显示用户信息","刷新数据会重新触发加载过程","错误边界会捕获和处理异常"],keyPoints:["Suspense 组件提供 fallback UI","资源通过抛出 Promise 来挂起渲染","ErrorBoundary 处理异步错误","缓存机制避免重复请求"],commonTraps:["忘记使用 ErrorBoundary 包装","fallback UI 设计不合理","资源缓存策略不当","在服务端渲染中使用 Suspense"],solutions:["始终使用 ErrorBoundary 包装 Suspense","设计有意义的加载状态 UI","实现合理的缓存和失效策略","考虑 SSR 兼容性"],importantTips:["选择不同用户 ID 会触发新的数据加载","刷新按钮会清除缓存并重新加载数据","加载过程中会显示 fallback UI","错误发生时会显示错误信息和重试按钮"],preCode:[{title:"mockData",code:E},{title:"ResourceComponents",code:p},{title:"UIComponents",code:x},{title:"resourceUtils",code:P}],codeExample:{title:"基础 Suspense 演示",code:R}},{title:"嵌套 Suspense 演示",component:e.jsx(I,{}),description:"展示嵌套 Suspense 的使用，实现分层的数据加载。",observationPoints:["用户信息和文章内容可以独立加载","内层 Suspense 不会影响外层已加载的内容","可以选择性显示文章内容","每层都有独立的加载状态"],keyPoints:["嵌套 Suspense 支持分层加载","内层挂起不影响外层内容","可以实现渐进式数据展示","每层都有独立的 fallback UI"],preCode:[{title:"ResourceComponents",code:p},{title:"UIComponents",code:x}],codeExample:{title:"嵌套 Suspense 演示",code:C}},{title:"Transition + Suspense 演示",component:e.jsx(w,{}),description:"展示 useTransition 与 Suspense 的结合使用，实现平滑的状态切换。",observationPoints:["切换用户时显示过渡状态而非加载状态","useDeferredValue 延迟更新提升体验","isPending 状态指示过渡进行中","用户界面保持响应性"],keyPoints:["useTransition 包装状态更新","useDeferredValue 延迟值更新","isPending 指示过渡状态","提升用户交互体验"],preCode:[{title:"ResourceComponents",code:p},{title:"UIComponents",code:x}],codeExample:{title:"Transition + Suspense 演示",code:U}}],tutorial:{concepts:["Suspense 是 React 的异步渲染边界","组件可以通过抛出 Promise 来挂起渲染","fallback UI 在挂起期间显示","ErrorBoundary 处理异步操作中的错误","并发特性提升用户体验"],steps:["创建可挂起的资源对象","在组件中读取资源数据","使用 Suspense 包装组件","添加 ErrorBoundary 处理错误","结合 Transition 优化体验","实现资源缓存和管理"],tips:["始终使用 ErrorBoundary 包装 Suspense","设计有意义的 fallback UI","合理使用嵌套 Suspense","结合 useTransition 优化体验","考虑资源的缓存策略"]},interview:{questions:[{question:"Suspense 的工作原理是什么？",answer:"工作原理：1) 组件通过抛出 Promise 来挂起渲染；2) Suspense 捕获 Promise 并显示 fallback UI；3) Promise 解决后重新渲染组件；4) 错误通过 ErrorBoundary 处理；5) 支持嵌套和并发渲染。"},{question:"如何创建可挂起的资源？",answer:"创建方法：1) 封装异步操作为资源对象；2) 实现 read() 方法；3) 根据状态抛出 Promise 或返回数据；4) 添加缓存和失效机制；5) 处理错误状态；6) 提供资源管理方法。"},{question:"Suspense 与传统异步处理的区别？",answer:"主要区别：1) 声明式 vs 命令式；2) 组件挂起 vs 状态管理；3) 自动 fallback vs 手动加载状态；4) 并发渲染支持；5) 更好的用户体验；6) 简化的错误处理。"},{question:"如何优化 Suspense 的性能？",answer:"优化策略：1) 合理的资源缓存；2) 预加载关键资源；3) 使用 useTransition 优化切换；4) 嵌套 Suspense 分层加载；5) 避免过度挂起；6) 优化 fallback UI 性能。"}],keyPoints:["Suspense 是 React 并发特性的核心","声明式的异步数据处理方式","需要配合 ErrorBoundary 使用","支持嵌套和分层加载","与 Transition 结合提升体验"]},bestPractices:{dos:["使用 ErrorBoundary 包装 Suspense","设计有意义的 fallback UI","实现合理的资源缓存","结合 useTransition 优化体验","考虑嵌套 Suspense 的使用"],donts:["不要忘记错误处理","不要过度使用 Suspense","不要忽视 fallback UI 设计","不要在 SSR 中不当使用","不要忽视资源管理"],patterns:["资源创建和管理模式","嵌套 Suspense 模式","Transition + Suspense 模式","错误边界处理模式","资源缓存策略模式"]}});export{T as default};
