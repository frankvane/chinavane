import{j as e,r as c,R as f}from"./index-CKH9Ek1I.js";import{C as v}from"./ComponentTemplate-B8dTsNLj.js";const y=`import React, { useState } from 'react';
import { useSelector, useDispatch } from './context';
import { AppState, Post } from './types';

// 渲染计数器 Hook
function useRenderCount(componentName: string) {
  const renderCount = React.useRef(0);
  renderCount.current += 1;
  
  React.useEffect(() => {
    console.log(\`\${componentName} 渲染次数: \${renderCount.current}\`);
  });
  
  return renderCount.current;
}

// 用户信息组件 - 只订阅用户状态
export function UserProfile() {
  const user = useSelector((state: AppState) => state.user);
  const dispatch = useDispatch();
  const renderCount = useRenderCount('UserProfile');
  
  const updateUser = () => {
    dispatch({
      type: 'UPDATE_USER',
      payload: {
        name: \`用户 \${Date.now().toString().slice(-4)}\`,
        email: \`user\${Date.now().toString().slice(-4)}@example.com\`
      }
    });
  };
  
  return (
    <div className="component-card">
      <h3>用户信息 (渲染: {renderCount})</h3>
      <div className="user-info">
        <img src={user.avatar} alt="头像" className="avatar" />
        <div>
          <p><strong>姓名:</strong> {user.name}</p>
          <p><strong>邮箱:</strong> {user.email}</p>
        </div>
      </div>
      <button onClick={updateUser} className="btn btn-primary">
        更新用户信息
      </button>
    </div>
  );
}

// 主题设置组件 - 只订阅主题状态
export function ThemeSettings() {
  const theme = useSelector((state: AppState) => state.theme);
  const dispatch = useDispatch();
  const renderCount = useRenderCount('ThemeSettings');
  
  const toggleTheme = () => {
    dispatch({ type: 'TOGGLE_THEME' });
  };
  
  return (
    <div className={\`component-card theme-\${theme}\`}>
      <h3>主题设置 (渲染: {renderCount})</h3>
      <p>当前主题: <strong>{theme === 'light' ? '浅色' : '深色'}</strong></p>
      <button onClick={toggleTheme} className="btn btn-secondary">
        切换主题
      </button>
    </div>
  );
}

// 文章列表组件 - 只订阅文章状态
export function PostList() {
  const posts = useSelector((state: AppState) => state.posts);
  const dispatch = useDispatch();
  const renderCount = useRenderCount('PostList');
  const [newPostTitle, setNewPostTitle] = useState('');
  
  const addPost = () => {
    if (newPostTitle.trim()) {
      const newPost: Post = {
        id: Date.now(),
        title: newPostTitle,
        content: \`这是《\${newPostTitle}》的内容\`,
        author: '当前用户'
      };
      dispatch({ type: 'ADD_POST', payload: newPost });
      setNewPostTitle('');
    }
  };
  
  return (
    <div className="component-card">
      <h3>文章列表 (渲染: {renderCount})</h3>
      <div className="post-input">
        <input
          type="text"
          value={newPostTitle}
          onChange={(e) => setNewPostTitle(e.target.value)}
          placeholder="输入文章标题"
          className="input"
        />
        <button onClick={addPost} className="btn btn-success">
          添加文章
        </button>
      </div>
      <div className="posts">
        {posts.map(post => (
          <div key={post.id} className="post-item">
            <h4>{post.title}</h4>
            <p>{post.content}</p>
            <small>作者: {post.author}</small>
          </div>
        ))}
      </div>
    </div>
  );
}

// 加载指示器组件 - 只订阅加载状态
export function LoadingIndicator() {
  const loading = useSelector((state: AppState) => state.loading);
  const dispatch = useDispatch();
  const renderCount = useRenderCount('LoadingIndicator');
  
  const toggleLoading = () => {
    dispatch({ type: 'TOGGLE_LOADING' });
  };
  
  return (
    <div className="component-card">
      <h3>加载状态 (渲染: {renderCount})</h3>
      <div className="loading-status">
        {loading ? (
          <div className="loading-spinner">
            <div className="spinner"></div>
            <span>加载中...</span>
          </div>
        ) : (
          <span className="status-idle">空闲状态</span>
        )}
      </div>
      <button onClick={toggleLoading} className="btn btn-warning">
        切换加载状态
      </button>
    </div>
  );
}

// 完整状态组件 - 订阅整个状态（用于对比）
export function FullStateComponent() {
  const fullState = useSelector((state: AppState) => state);
  const renderCount = useRenderCount('FullStateComponent');
  
  return (
    <div className="component-card full-state">
      <h3>完整状态组件 (渲染: {renderCount})</h3>
      <p className="warning">
        ⚠️ 此组件订阅了整个状态，任何状态变化都会导致重新渲染
      </p>
      <div className="state-summary">
        <p><strong>用户:</strong> {fullState.user.name}</p>
        <p><strong>主题:</strong> {fullState.theme}</p>
        <p><strong>文章数:</strong> {fullState.posts.length}</p>
        <p><strong>加载中:</strong> {fullState.loading ? '是' : '否'}</p>
      </div>
    </div>
  );
}`,w=`import React, { createContext, useContext, useEffect, useState, useRef } from 'react';\r
import { StateManager, Selector } from './types';\r
import { store } from './store';\r
\r
// 创建 Context\r
const StoreContext = createContext<StateManager | null>(null);\r
\r
// Provider 组件\r
export function StoreProvider({ children }: { children: React.ReactNode }) {\r
  return (\r
    <StoreContext.Provider value={store}>\r
      {children}\r
    </StoreContext.Provider>\r
  );\r
}\r
\r
// 自定义 Hook：使用选择器订阅状态\r
export function useSelector<T>(selector: Selector<T>): T {\r
  const storeManager = useContext(StoreContext);\r
  \r
  if (!storeManager) {\r
    throw new Error('useSelector must be used within a StoreProvider');\r
  }\r
  \r
  // 获取初始值\r
  const [selectedState, setSelectedState] = useState(() => selector(storeManager.getState()));\r
  const selectorRef = useRef(selector);\r
  const selectedStateRef = useRef(selectedState);\r
  \r
  // 更新 ref\r
  selectorRef.current = selector;\r
  selectedStateRef.current = selectedState;\r
  \r
  useEffect(() => {\r
    // 订阅状态变化\r
    const unsubscribe = storeManager.subscribe(\r
      selectorRef.current,\r
      () => {\r
        const newValue = selectorRef.current(storeManager.getState());\r
        setSelectedState(newValue);\r
      }\r
    );\r
    \r
    return unsubscribe;\r
  }, [storeManager]);\r
  \r
  return selectedState;\r
}\r
\r
// 自定义 Hook：获取 dispatch 函数\r
export function useDispatch() {\r
  const storeManager = useContext(StoreContext);\r
  \r
  if (!storeManager) {\r
    throw new Error('useDispatch must be used within a StoreProvider');\r
  }\r
  \r
  return storeManager.dispatch;\r
}`,j={user:{id:1,name:"John Doe",email:"john@example.com",avatar:"./assets/avatar.jpg"},theme:"light",posts:[{id:1,title:"第一篇文章",content:"这是第一篇文章的内容",author:"John Doe"},{id:2,title:"第二篇文章",content:"这是第二篇文章的内容",author:"John Doe"}],loading:!1};function k(t,r){switch(r.type){case"UPDATE_USER":return{...t,user:{...t.user,...r.payload}};case"TOGGLE_THEME":return{...t,theme:t.theme==="light"?"dark":"light"};case"ADD_POST":return{...t,posts:[...t.posts,r.payload]};case"TOGGLE_LOADING":return{...t,loading:!t.loading};default:return t}}function C(t,r){if(t===r)return!0;if(t==null||r==null||typeof t!="object"||typeof r!="object")return!1;const n=Object.keys(t),s=Object.keys(r);if(n.length!==s.length)return!1;for(const o of n)if(!s.includes(o)||t[o]!==r[o])return!1;return!0}function P(){let t=j;const r=new Map;return{getState:()=>t,dispatch:i=>{const a=k(t,i);a!==t&&(t=a,r.forEach((l,d)=>{const p=d(t);l.forEach(({callback:g,lastValue:h},S)=>{C(p,h)||(l[S].lastValue=p,g())})}))},subscribe:(i,a)=>{const l=i(t);r.has(i)||r.set(i,[]);const d=r.get(i),p={callback:a,lastValue:l};return d.push(p),()=>{const g=d.indexOf(p);g>-1&&(d.splice(g,1),d.length===0&&r.delete(i))}}}}const N=P(),b=c.createContext(null);function T({children:t}){return e.jsx(b.Provider,{value:N,children:t})}function u(t){const r=c.useContext(b);if(!r)throw new Error("useSelector must be used within a StoreProvider");const[n,s]=c.useState(()=>t(r.getState())),o=c.useRef(t),i=c.useRef(n);return o.current=t,i.current=n,c.useEffect(()=>r.subscribe(o.current,()=>{const l=o.current(r.getState());s(l)}),[r]),n}function x(){const t=c.useContext(b);if(!t)throw new Error("useDispatch must be used within a StoreProvider");return t.dispatch}function m(t){const r=f.useRef(0);return r.current+=1,f.useEffect(()=>{console.log(`${t} 渲染次数: ${r.current}`)}),r.current}function E(){const t=u(o=>o.user),r=x(),n=m("UserProfile"),s=()=>{r({type:"UPDATE_USER",payload:{name:`用户 ${Date.now().toString().slice(-4)}`,email:`user${Date.now().toString().slice(-4)}@example.com`}})};return e.jsxs("div",{className:"component-card",children:[e.jsxs("h3",{children:["用户信息 (渲染: ",n,")"]}),e.jsxs("div",{className:"user-info",children:[e.jsx("img",{src:t.avatar,alt:"头像",className:"avatar"}),e.jsxs("div",{children:[e.jsxs("p",{children:[e.jsx("strong",{children:"姓名:"})," ",t.name]}),e.jsxs("p",{children:[e.jsx("strong",{children:"邮箱:"})," ",t.email]})]})]}),e.jsx("button",{onClick:s,className:"btn btn-primary",children:"更新用户信息"})]})}function R(){const t=u(o=>o.theme),r=x(),n=m("ThemeSettings"),s=()=>{r({type:"TOGGLE_THEME"})};return e.jsxs("div",{className:`component-card theme-${t}`,children:[e.jsxs("h3",{children:["主题设置 (渲染: ",n,")"]}),e.jsxs("p",{children:["当前主题: ",e.jsx("strong",{children:t==="light"?"浅色":"深色"})]}),e.jsx("button",{onClick:s,className:"btn btn-secondary",children:"切换主题"})]})}function D(){const t=u(a=>a.posts),r=x(),n=m("PostList"),[s,o]=c.useState(""),i=()=>{if(s.trim()){const a={id:Date.now(),title:s,content:`这是《${s}》的内容`,author:"当前用户"};r({type:"ADD_POST",payload:a}),o("")}};return e.jsxs("div",{className:"component-card",children:[e.jsxs("h3",{children:["文章列表 (渲染: ",n,")"]}),e.jsxs("div",{className:"post-input",children:[e.jsx("input",{type:"text",value:s,onChange:a=>o(a.target.value),placeholder:"输入文章标题",className:"input"}),e.jsx("button",{onClick:i,className:"btn btn-success",children:"添加文章"})]}),e.jsx("div",{className:"posts",children:t.map(a=>e.jsxs("div",{className:"post-item",children:[e.jsx("h4",{children:a.title}),e.jsx("p",{children:a.content}),e.jsxs("small",{children:["作者: ",a.author]})]},a.id))})]})}function A(){const t=u(o=>o.loading),r=x(),n=m("LoadingIndicator"),s=()=>{r({type:"TOGGLE_LOADING"})};return e.jsxs("div",{className:"component-card",children:[e.jsxs("h3",{children:["加载状态 (渲染: ",n,")"]}),e.jsx("div",{className:"loading-status",children:t?e.jsxs("div",{className:"loading-spinner",children:[e.jsx("div",{className:"spinner"}),e.jsx("span",{children:"加载中..."})]}):e.jsx("span",{className:"status-idle",children:"空闲状态"})}),e.jsx("button",{onClick:s,className:"btn btn-warning",children:"切换加载状态"})]})}function L(){const t=u(n=>n),r=m("FullStateComponent");return e.jsxs("div",{className:"component-card full-state",children:[e.jsxs("h3",{children:["完整状态组件 (渲染: ",r,")"]}),e.jsx("p",{className:"warning",children:"⚠️ 此组件订阅了整个状态，任何状态变化都会导致重新渲染"}),e.jsxs("div",{className:"state-summary",children:[e.jsxs("p",{children:[e.jsx("strong",{children:"用户:"})," ",t.user.name]}),e.jsxs("p",{children:[e.jsx("strong",{children:"主题:"})," ",t.theme]}),e.jsxs("p",{children:[e.jsx("strong",{children:"文章数:"})," ",t.posts.length]}),e.jsxs("p",{children:[e.jsx("strong",{children:"加载中:"})," ",t.loading?"是":"否"]})]})]})}function M(){return e.jsx(T,{children:e.jsxs("div",{className:"selector-pattern-demo",children:[e.jsx("style",{children:`
          .selector-pattern-demo {
            padding: 20px;
            font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
          }
          
          .demo-grid {
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
            gap: 20px;
            margin-bottom: 30px;
          }
          
          .component-card {
            border: 2px solid #e1e5e9;
            border-radius: 8px;
            padding: 20px;
            background: #ffffff;
            box-shadow: 0 2px 4px rgba(0,0,0,0.1);
            transition: all 0.3s ease;
          }
          
          .component-card:hover {
            border-color: #007bff;
            box-shadow: 0 4px 8px rgba(0,0,0,0.15);
          }
          
          .component-card h3 {
            margin: 0 0 15px 0;
            color: #333;
            font-size: 18px;
            border-bottom: 2px solid #f0f0f0;
            padding-bottom: 8px;
          }
          
          .theme-dark {
            background: #2d3748;
            color: white;
            border-color: #4a5568;
          }
          
          .theme-dark h3 {
            color: white;
            border-bottom-color: #4a5568;
          }
          
          .user-info {
            display: flex;
            align-items: center;
            gap: 15px;
            margin-bottom: 15px;
          }
          
          .avatar {
            width: 50px;
            height: 50px;
            border-radius: 50%;
            object-fit: cover;
            border: 2px solid #ddd;
          }
          
          .user-info div p {
            margin: 5px 0;
            font-size: 14px;
          }
          
          .post-input {
            display: flex;
            gap: 10px;
            margin-bottom: 15px;
          }
          
          .input {
            flex: 1;
            padding: 8px 12px;
            border: 1px solid #ddd;
            border-radius: 4px;
            font-size: 14px;
          }
          
          .input:focus {
            outline: none;
            border-color: #007bff;
            box-shadow: 0 0 0 2px rgba(0,123,255,0.25);
          }
          
          .posts {
            max-height: 200px;
            overflow-y: auto;
          }
          
          .post-item {
            border: 1px solid #eee;
            border-radius: 4px;
            padding: 12px;
            margin-bottom: 10px;
            background: #f9f9f9;
          }
          
          .post-item h4 {
            margin: 0 0 8px 0;
            color: #333;
            font-size: 16px;
          }
          
          .post-item p {
            margin: 0 0 8px 0;
            color: #666;
            font-size: 14px;
          }
          
          .post-item small {
            color: #999;
            font-size: 12px;
          }
          
          .loading-status {
            margin-bottom: 15px;
            padding: 15px;
            border-radius: 4px;
            text-align: center;
          }
          
          .loading-spinner {
            display: flex;
            align-items: center;
            justify-content: center;
            gap: 10px;
            color: #007bff;
          }
          
          .spinner {
            width: 20px;
            height: 20px;
            border: 2px solid #f3f3f3;
            border-top: 2px solid #007bff;
            border-radius: 50%;
            animation: spin 1s linear infinite;
          }
          
          @keyframes spin {
            0% { transform: rotate(0deg); }
            100% { transform: rotate(360deg); }
          }
          
          .status-idle {
            color: #28a745;
            font-weight: bold;
          }
          
          .btn {
            padding: 8px 16px;
            border: none;
            border-radius: 4px;
            cursor: pointer;
            font-size: 14px;
            font-weight: 500;
            transition: all 0.2s ease;
          }
          
          .btn:hover {
            transform: translateY(-1px);
            box-shadow: 0 2px 4px rgba(0,0,0,0.2);
          }
          
          .btn-primary {
            background: #007bff;
            color: white;
          }
          
          .btn-primary:hover {
            background: #0056b3;
          }
          
          .btn-secondary {
            background: #6c757d;
            color: white;
          }
          
          .btn-secondary:hover {
            background: #545b62;
          }
          
          .btn-success {
            background: #28a745;
            color: white;
          }
          
          .btn-success:hover {
            background: #1e7e34;
          }
          
          .btn-warning {
            background: #ffc107;
            color: #212529;
          }
          
          .btn-warning:hover {
            background: #e0a800;
          }
          
          .full-state {
            border-color: #dc3545;
            background: #fff5f5;
          }
          
          .warning {
            color: #dc3545;
            font-weight: bold;
            margin-bottom: 15px;
            padding: 10px;
            background: #f8d7da;
            border: 1px solid #f5c6cb;
            border-radius: 4px;
          }
          
          .state-summary p {
            margin: 8px 0;
            font-size: 14px;
          }
          
          .observation-points {
            background: #e7f3ff;
            border: 1px solid #b3d9ff;
            border-radius: 8px;
            padding: 20px;
            margin-bottom: 20px;
          }
          
          .observation-points h3 {
            color: #0066cc;
            margin-bottom: 15px;
          }
          
          .observation-points ul {
            margin: 0;
            padding-left: 20px;
          }
          
          .observation-points li {
            margin-bottom: 8px;
            line-height: 1.5;
          }
        `}),e.jsxs("div",{className:"observation-points",children:[e.jsx("h3",{children:"🔍 观察要点"}),e.jsxs("ul",{children:[e.jsxs("li",{children:['点击"更新用户信息"时，只有 ',e.jsx("strong",{children:"UserProfile"})," 和 ",e.jsx("strong",{children:"FullStateComponent"})," 会重新渲染"]}),e.jsxs("li",{children:['点击"切换主题"时，只有 ',e.jsx("strong",{children:"ThemeSettings"})," 和 ",e.jsx("strong",{children:"FullStateComponent"})," 会重新渲染"]}),e.jsxs("li",{children:['点击"添加文章"时，只有 ',e.jsx("strong",{children:"PostList"})," 和 ",e.jsx("strong",{children:"FullStateComponent"})," 会重新渲染"]}),e.jsxs("li",{children:['点击"切换加载状态"时，只有 ',e.jsx("strong",{children:"LoadingIndicator"})," 和 ",e.jsx("strong",{children:"FullStateComponent"})," 会重新渲染"]}),e.jsxs("li",{children:[e.jsx("strong",{children:"FullStateComponent"})," 订阅了整个状态，所以任何变化都会导致它重新渲染"]}),e.jsx("li",{children:"打开浏览器控制台查看渲染日志"})]})]}),e.jsxs("div",{className:"demo-grid",children:[e.jsx(E,{}),e.jsx(R,{}),e.jsx(D,{}),e.jsx(A,{}),e.jsx(L,{})]})]})})}const O=`import React from 'react';\r
import { StoreProvider } from './context';\r
import {\r
  UserProfile,\r
  ThemeSettings,\r
  PostList,\r
  LoadingIndicator,\r
  FullStateComponent\r
} from './components';\r
\r
export function SelectorPatternDemo() {\r
  return (\r
    <StoreProvider>\r
      <div className="selector-pattern-demo">\r
        <style>{\`\r
          .selector-pattern-demo {\r
            padding: 20px;\r
            font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;\r
          }\r
          \r
          .demo-grid {\r
            display: grid;\r
            grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));\r
            gap: 20px;\r
            margin-bottom: 30px;\r
          }\r
          \r
          .component-card {\r
            border: 2px solid #e1e5e9;\r
            border-radius: 8px;\r
            padding: 20px;\r
            background: #ffffff;\r
            box-shadow: 0 2px 4px rgba(0,0,0,0.1);\r
            transition: all 0.3s ease;\r
          }\r
          \r
          .component-card:hover {\r
            border-color: #007bff;\r
            box-shadow: 0 4px 8px rgba(0,0,0,0.15);\r
          }\r
          \r
          .component-card h3 {\r
            margin: 0 0 15px 0;\r
            color: #333;\r
            font-size: 18px;\r
            border-bottom: 2px solid #f0f0f0;\r
            padding-bottom: 8px;\r
          }\r
          \r
          .theme-dark {\r
            background: #2d3748;\r
            color: white;\r
            border-color: #4a5568;\r
          }\r
          \r
          .theme-dark h3 {\r
            color: white;\r
            border-bottom-color: #4a5568;\r
          }\r
          \r
          .user-info {\r
            display: flex;\r
            align-items: center;\r
            gap: 15px;\r
            margin-bottom: 15px;\r
          }\r
          \r
          .avatar {\r
            width: 50px;\r
            height: 50px;\r
            border-radius: 50%;\r
            object-fit: cover;\r
            border: 2px solid #ddd;\r
          }\r
          \r
          .user-info div p {\r
            margin: 5px 0;\r
            font-size: 14px;\r
          }\r
          \r
          .post-input {\r
            display: flex;\r
            gap: 10px;\r
            margin-bottom: 15px;\r
          }\r
          \r
          .input {\r
            flex: 1;\r
            padding: 8px 12px;\r
            border: 1px solid #ddd;\r
            border-radius: 4px;\r
            font-size: 14px;\r
          }\r
          \r
          .input:focus {\r
            outline: none;\r
            border-color: #007bff;\r
            box-shadow: 0 0 0 2px rgba(0,123,255,0.25);\r
          }\r
          \r
          .posts {\r
            max-height: 200px;\r
            overflow-y: auto;\r
          }\r
          \r
          .post-item {\r
            border: 1px solid #eee;\r
            border-radius: 4px;\r
            padding: 12px;\r
            margin-bottom: 10px;\r
            background: #f9f9f9;\r
          }\r
          \r
          .post-item h4 {\r
            margin: 0 0 8px 0;\r
            color: #333;\r
            font-size: 16px;\r
          }\r
          \r
          .post-item p {\r
            margin: 0 0 8px 0;\r
            color: #666;\r
            font-size: 14px;\r
          }\r
          \r
          .post-item small {\r
            color: #999;\r
            font-size: 12px;\r
          }\r
          \r
          .loading-status {\r
            margin-bottom: 15px;\r
            padding: 15px;\r
            border-radius: 4px;\r
            text-align: center;\r
          }\r
          \r
          .loading-spinner {\r
            display: flex;\r
            align-items: center;\r
            justify-content: center;\r
            gap: 10px;\r
            color: #007bff;\r
          }\r
          \r
          .spinner {\r
            width: 20px;\r
            height: 20px;\r
            border: 2px solid #f3f3f3;\r
            border-top: 2px solid #007bff;\r
            border-radius: 50%;\r
            animation: spin 1s linear infinite;\r
          }\r
          \r
          @keyframes spin {\r
            0% { transform: rotate(0deg); }\r
            100% { transform: rotate(360deg); }\r
          }\r
          \r
          .status-idle {\r
            color: #28a745;\r
            font-weight: bold;\r
          }\r
          \r
          .btn {\r
            padding: 8px 16px;\r
            border: none;\r
            border-radius: 4px;\r
            cursor: pointer;\r
            font-size: 14px;\r
            font-weight: 500;\r
            transition: all 0.2s ease;\r
          }\r
          \r
          .btn:hover {\r
            transform: translateY(-1px);\r
            box-shadow: 0 2px 4px rgba(0,0,0,0.2);\r
          }\r
          \r
          .btn-primary {\r
            background: #007bff;\r
            color: white;\r
          }\r
          \r
          .btn-primary:hover {\r
            background: #0056b3;\r
          }\r
          \r
          .btn-secondary {\r
            background: #6c757d;\r
            color: white;\r
          }\r
          \r
          .btn-secondary:hover {\r
            background: #545b62;\r
          }\r
          \r
          .btn-success {\r
            background: #28a745;\r
            color: white;\r
          }\r
          \r
          .btn-success:hover {\r
            background: #1e7e34;\r
          }\r
          \r
          .btn-warning {\r
            background: #ffc107;\r
            color: #212529;\r
          }\r
          \r
          .btn-warning:hover {\r
            background: #e0a800;\r
          }\r
          \r
          .full-state {\r
            border-color: #dc3545;\r
            background: #fff5f5;\r
          }\r
          \r
          .warning {\r
            color: #dc3545;\r
            font-weight: bold;\r
            margin-bottom: 15px;\r
            padding: 10px;\r
            background: #f8d7da;\r
            border: 1px solid #f5c6cb;\r
            border-radius: 4px;\r
          }\r
          \r
          .state-summary p {\r
            margin: 8px 0;\r
            font-size: 14px;\r
          }\r
          \r
          .observation-points {\r
            background: #e7f3ff;\r
            border: 1px solid #b3d9ff;\r
            border-radius: 8px;\r
            padding: 20px;\r
            margin-bottom: 20px;\r
          }\r
          \r
          .observation-points h3 {\r
            color: #0066cc;\r
            margin-bottom: 15px;\r
          }\r
          \r
          .observation-points ul {\r
            margin: 0;\r
            padding-left: 20px;\r
          }\r
          \r
          .observation-points li {\r
            margin-bottom: 8px;\r
            line-height: 1.5;\r
          }\r
        \`}</style>\r
        \r
        <div className="observation-points">\r
          <h3>🔍 观察要点</h3>\r
          <ul>\r
            <li>点击"更新用户信息"时，只有 <strong>UserProfile</strong> 和 <strong>FullStateComponent</strong> 会重新渲染</li>\r
            <li>点击"切换主题"时，只有 <strong>ThemeSettings</strong> 和 <strong>FullStateComponent</strong> 会重新渲染</li>\r
            <li>点击"添加文章"时，只有 <strong>PostList</strong> 和 <strong>FullStateComponent</strong> 会重新渲染</li>\r
            <li>点击"切换加载状态"时，只有 <strong>LoadingIndicator</strong> 和 <strong>FullStateComponent</strong> 会重新渲染</li>\r
            <li><strong>FullStateComponent</strong> 订阅了整个状态，所以任何变化都会导致它重新渲染</li>\r
            <li>打开浏览器控制台查看渲染日志</li>\r
          </ul>\r
        </div>\r
        \r
        <div className="demo-grid">\r
          <UserProfile />\r
          <ThemeSettings />\r
          <PostList />\r
          <LoadingIndicator />\r
          <FullStateComponent />\r
        </div>\r
      </div>\r
    </StoreProvider>\r
  );\r
}`,U=`import {
  AppState,
  Selector,
  StateAction,
  StateManager,
  Subscriber,
} from "./types";

// 初始状态
const initialState: AppState = {
  user: {
    id: 1,
    name: "John Doe",
    email: "john@example.com",
    avatar: "./assets/avatar.jpg",
  },
  theme: "light",
  posts: [
    {
      id: 1,
      title: "第一篇文章",
      content: "这是第一篇文章的内容",
      author: "John Doe",
    },
    {
      id: 2,
      title: "第二篇文章",
      content: "这是第二篇文章的内容",
      author: "John Doe",
    },
  ],
  loading: false,
};

// 状态更新函数
function reducer(state: AppState, action: StateAction): AppState {
  switch (action.type) {
    case "UPDATE_USER":
      return {
        ...state,
        user: { ...state.user, ...action.payload },
      };
    case "TOGGLE_THEME":
      return {
        ...state,
        theme: state.theme === "light" ? "dark" : "light",
      };
    case "ADD_POST":
      return {
        ...state,
        posts: [...state.posts, action.payload],
      };
    case "TOGGLE_LOADING":
      return {
        ...state,
        loading: !state.loading,
      };
    default:
      return state;
  }
}

// 浅比较函数
function shallowEqual(a: any, b: any): boolean {
  if (a === b) return true;
  if (a == null || b == null) return false;
  if (typeof a !== "object" || typeof b !== "object") return false;

  const keysA = Object.keys(a);
  const keysB = Object.keys(b);

  if (keysA.length !== keysB.length) return false;

  for (const key of keysA) {
    if (!keysB.includes(key) || a[key] !== b[key]) {
      return false;
    }
  }

  return true;
}

// 创建状态管理器
export function createStore(): StateManager {
  let state = initialState;
  const subscriptions = new Map<
    Selector<any>,
    { callback: Subscriber; lastValue: any }[]
  >();

  const getState = () => state;

  const dispatch = (action: StateAction) => {
    const newState = reducer(state, action);
    if (newState === state) return; // 状态没有变化

    state = newState;

    // 通知订阅者
    subscriptions.forEach((subscribers, selector) => {
      const newValue = selector(state);

      subscribers.forEach(({ callback, lastValue }, index) => {
        if (!shallowEqual(newValue, lastValue)) {
          subscribers[index].lastValue = newValue;
          callback();
        }
      });
    });
  };

  const subscribe = (selector: Selector<any>, callback: Subscriber) => {
    const currentValue = selector(state);

    if (!subscriptions.has(selector)) {
      subscriptions.set(selector, []);
    }

    const subscribers = subscriptions.get(selector)!;
    const subscription = { callback, lastValue: currentValue };
    subscribers.push(subscription);

    // 返回取消订阅函数
    return () => {
      const index = subscribers.indexOf(subscription);
      if (index > -1) {
        subscribers.splice(index, 1);
        if (subscribers.length === 0) {
          subscriptions.delete(selector);
        }
      }
    };
  };

  return { getState, dispatch, subscribe };
}

// 全局状态管理器实例
export const store = createStore();
`,G=`// 应用状态类型定义\r
export interface User {\r
  id: number;\r
  name: string;\r
  email: string;\r
  avatar: string;\r
}\r
\r
export interface Post {\r
  id: number;\r
  title: string;\r
  content: string;\r
  author: string;\r
}\r
\r
export interface AppState {\r
  user: User;\r
  theme: 'light' | 'dark';\r
  posts: Post[];\r
  loading: boolean;\r
}\r
\r
// 状态更新动作类型\r
export type StateAction = \r
  | { type: 'UPDATE_USER'; payload: Partial<User> }\r
  | { type: 'TOGGLE_THEME' }\r
  | { type: 'ADD_POST'; payload: Post }\r
  | { type: 'TOGGLE_LOADING' };\r
\r
// 选择器函数类型\r
export type Selector<T> = (state: AppState) => T;\r
\r
// 订阅者类型\r
export type Subscriber = () => void;\r
\r
// 状态管理器接口\r
export interface StateManager {\r
  getState: () => AppState;\r
  dispatch: (action: StateAction) => void;\r
  subscribe: (selector: Selector<any>, callback: Subscriber) => () => void;\r
}`,F=()=>e.jsx(v,{title:"Selector 模式优化",description:"学习如何使用 Selector 模式来精确订阅状态的特定部分，避免不必要的重新渲染。",overview:[{title:"核心概念",items:["Selector 模式","精确订阅","状态切片","浅比较优化"]},{title:"主要优势",items:["减少不必要的重新渲染","提高组件性能","降低内存使用","提升代码可维护性"]},{title:"适用场景",items:["复杂的全局状态管理","大型应用的状态优化","频繁更新的状态数据","需要精确控制渲染的场景"]},{title:"注意事项",items:["选择器纯函数","避免复杂计算","缓存选择器结果","引用稳定性"]}],examples:[{title:"Selector 模式对比演示",component:e.jsx(M,{}),description:"对比精确订阅和全量订阅在重新渲染方面的差异。",observationPoints:["点击不同的更新按钮，观察各组件的渲染次数变化","精确订阅的组件只在相关数据变化时才重新渲染","全量订阅的组件在任何状态变化时都会重新渲染","这展示了 Selector 模式的性能优化效果"],keyPoints:["Selector 函数应该返回组件真正需要的最小数据集","避免在选择器中创建新的对象或数组","可以结合 useMemo 进一步优化性能","选择器应该是纯函数，不应有副作用"],commonTraps:["在选择器中创建新的对象引用","选择器返回的数据过于复杂","忘记使用 useMemo 缓存计算结果","选择器函数不稳定导致频繁重新计算"],solutions:["使用稳定的选择器函数引用","合理拆分选择器的粒度","使用 useMemo 缓存复杂的选择器结果","创建可重用的选择器函数"],importantTips:["用户信息组件只在用户名或邮箱变化时重新渲染","主题设置组件只在主题变化时重新渲染","文章列表组件只在文章数据变化时重新渲染","全量订阅组件在任何状态变化时都会重新渲染（性能较差）"],preCode:[{title:"Types",code:G},{title:"Store",code:U},{title:"Context",code:w},{title:"Components",code:y}],codeExample:{title:"Selector Pattern",code:O}}],tutorial:{concepts:["Selector 模式是一种从复杂状态中选择特定数据的设计模式","通过精确订阅，组件只在相关数据变化时才重新渲染","选择器函数应该是纯函数，给定相同输入总是返回相同输出","可以创建可重用的选择器函数来提高代码复用性","结合 useMemo 可以进一步优化选择器的性能"],steps:["分析组件真正需要的数据","创建精确的选择器函数","在组件中使用选择器订阅数据","测试组件的重新渲染行为","优化选择器的性能（如使用 useMemo）","创建可重用的选择器函数库"],tips:["选择器应该返回组件需要的最小数据集","避免在选择器中进行复杂的计算或转换","使用 TypeScript 为选择器提供类型安全","考虑创建选择器的组合和派生","定期审查和优化选择器的性能"]},interview:{questions:[{question:"什么是 Selector 模式？它解决了什么问题？",answer:"Selector 模式是一种从复杂状态中选择特定数据的设计模式。它解决了组件订阅过多不相关数据导致的不必要重新渲染问题，通过精确订阅提高了应用性能。"},{question:"如何实现一个高效的选择器？",answer:"高效的选择器应该：1) 是纯函数；2) 返回最小必要的数据集；3) 避免创建新的对象引用；4) 使用 useMemo 缓存复杂计算；5) 保持引用稳定性。"},{question:"Selector 模式与 Redux 的关系是什么？",answer:"Redux 广泛使用了 Selector 模式，通过 useSelector hook 让组件精确订阅 store 中的特定数据。这个模式也可以应用到其他状态管理方案中，如 Context API。"},{question:"如何避免选择器的常见陷阱？",answer:"常见陷阱包括：在选择器中创建新对象、选择器不稳定、过度复杂的选择逻辑。解决方案是使用稳定的选择器引用、合理的数据结构设计、适当的 memoization。"}],keyPoints:["Selector 模式通过精确订阅减少不必要的重新渲染","选择器函数应该是纯函数且引用稳定","合理的选择器粒度是性能优化的关键","可以结合 useMemo 进一步优化性能","适用于复杂状态管理和大型应用"]},bestPractices:{dos:["创建精确的、最小化的选择器","使用纯函数作为选择器","合理使用 useMemo 缓存选择器结果","创建可重用的选择器函数库","为选择器提供 TypeScript 类型"],donts:["不要在选择器中创建新的对象引用","不要让选择器过于复杂","不要忘记考虑选择器的引用稳定性","不要过度订阅不相关的数据","不要在选择器中执行副作用"],patterns:["基础选择器 + 派生选择器的组合模式","选择器工厂函数模式","带参数的选择器模式","选择器缓存和 memoization 模式","选择器测试和验证模式"]}});export{F as default};
