import{r as c,j as e}from"./index-DPG_OKoV.js";import{C as j}from"./ComponentTemplate-HXLvd6Xe.js";const y=(o=1e3)=>new Promise((a,r)=>{setTimeout(()=>{Math.random()>.1?a():r(new Error("网络错误"))},o)}),k=[{id:"1",title:"React 18 新特性",content:"探索 React 18 带来的并发特性和性能改进。",likes:12},{id:"2",title:"TypeScript 最佳实践",content:"如何在大型项目中有效使用 TypeScript。",likes:8},{id:"3",title:"前端性能优化",content:"提升 Web 应用性能的实用技巧和策略。",likes:15}];function T(o,a){const[r,g]=c.useState(o);return c.useEffect(()=>{g(o)},[o]),[r,b=>{g(p=>a(p,b))}]}const L=()=>{const[o,a]=c.useState([]),[r,g]=c.useState(""),[x,b]=c.useTransition(),[p,m]=T(o,(n,l)=>[...n,l]),u=c.useCallback(async n=>{if(!n.trim())return;const l={id:`temp-${Date.now()}`,text:n.trim(),timestamp:Date.now(),status:"sending",author:"用户"};b(()=>{m(l)});try{await y(1500),a(t=>[...t,{...l,status:"sent"}])}catch{a(s=>[...s,{...l,status:"failed"}])}},[m]),f=c.useCallback(async n=>{if(o.find(t=>t.id===n)){a(t=>t.map(s=>s.id===n?{...s,status:"sending"}:s));try{await y(1e3),a(t=>t.map(s=>s.id===n?{...s,status:"sent"}:s))}catch{a(s=>s.map(d=>d.id===n?{...d,status:"failed"}:d))}}},[o]),v=n=>{n.preventDefault(),r.trim()&&(u(r),g(""))},h=n=>{switch(n){case"sending":return"bg-blue-50 border-blue-200 text-blue-800";case"sent":return"bg-green-50 border-green-200 text-green-800";case"failed":return"bg-red-50 border-red-200 text-red-800";default:return"bg-gray-50 border-gray-200 text-gray-800"}},i=n=>{switch(n){case"sending":return e.jsx("div",{className:"w-3 h-3 border-2 border-blue-400 border-t-transparent rounded-full animate-spin"});case"sent":return e.jsx("span",{className:"text-green-500",children:"✓"});case"failed":return e.jsx("span",{className:"text-red-500",children:"✗"});default:return null}};return e.jsxs("div",{className:"max-w-md mx-auto bg-white rounded-lg border",children:[e.jsxs("div",{className:"p-4 border-b",children:[e.jsx("h3",{className:"text-lg font-semibold",children:"乐观更新聊天"}),e.jsx("p",{className:"text-sm text-gray-600",children:"消息立即显示，然后同步到服务器"})]}),e.jsx("div",{className:"h-64 overflow-y-auto p-4 space-y-3",children:p.length===0?e.jsx("div",{className:"text-center text-gray-500 text-sm",children:"还没有消息，发送第一条消息吧！"}):p.map(n=>e.jsxs("div",{className:`p-3 rounded-lg border ${h(n.status)}`,children:[e.jsxs("div",{className:"flex justify-between items-start mb-1",children:[e.jsx("span",{className:"font-medium text-sm",children:n.author}),e.jsxs("div",{className:"flex items-center space-x-2",children:[i(n.status),n.status==="failed"&&e.jsx("button",{onClick:()=>f(n.id),className:"text-xs text-red-600 hover:text-red-800 underline",children:"重试"})]})]}),e.jsx("p",{className:"text-sm",children:n.text}),e.jsx("div",{className:"text-xs text-gray-500 mt-1",children:new Date(n.timestamp).toLocaleTimeString()})]},n.id))}),e.jsx("form",{onSubmit:v,className:"p-4 border-t",children:e.jsxs("div",{className:"flex space-x-2",children:[e.jsx("input",{type:"text",value:r,onChange:n=>g(n.target.value),placeholder:"输入消息...",className:"flex-1 px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500",disabled:x}),e.jsx("button",{type:"submit",disabled:!r.trim()||x,className:"px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 disabled:opacity-50 disabled:cursor-not-allowed",children:"发送"})]})})]})},O=(o,a)=>{switch(a.type){case"add":return[...o,a.payload];case"toggle":return o.map(r=>r.id===a.payload.id?{...r,completed:!r.completed,status:"pending"}:r);case"delete":return o.filter(r=>r.id!==a.payload.id);case"update_status":return o.map(r=>r.id===a.payload.id?{...r,status:a.payload.status}:r);default:return o}},C=()=>{const[o,a]=c.useState([{id:"1",text:"学习 React 18 新特性",completed:!1,createdAt:Date.now()-36e5,status:"saved"},{id:"2",text:"实践 useOptimistic Hook",completed:!0,createdAt:Date.now()-18e5,status:"saved"}]),[r,g]=c.useState(""),[x,b]=c.useState(new Set),[p,m]=T(o,O),u=c.useCallback((t,s)=>{b(d=>{const w=new Set(d);return s?w.add(t):w.delete(t),w})},[]),f=c.useCallback(async t=>{if(!t.trim())return;const s={id:`temp-${Date.now()}`,text:t.trim(),completed:!1,createdAt:Date.now(),status:"pending"};u(s.id,!0),m({type:"add",payload:s});try{await y(1e3),a(d=>[...d,{...s,status:"saved"}])}catch{a(d=>[...d,{...s,status:"failed"}])}finally{u(s.id,!1)}},[m,u]),v=c.useCallback(async t=>{u(t,!0),m({type:"toggle",payload:{id:t}});try{await y(800),a(s=>s.map(d=>d.id===t?{...d,completed:!d.completed,status:"saved"}:d))}catch{a(s=>s.map(d=>d.id===t?{...d,status:"failed"}:d))}finally{u(t,!1)}},[m,u]),h=c.useCallback(async t=>{u(t,!0),m({type:"delete",payload:{id:t}});try{await y(600),a(s=>s.filter(d=>d.id!==t))}catch{const s=o.find(d=>d.id===t);s&&a(d=>[...d,{...s,status:"failed"}])}finally{u(t,!1)}},[m,o,u]),i=t=>{t.preventDefault(),r.trim()&&(f(r),g(""))},n=t=>{switch(t){case"pending":return"border-yellow-200 bg-yellow-50";case"saved":return"border-green-200 bg-green-50";case"failed":return"border-red-200 bg-red-50";default:return"border-gray-200 bg-white"}},l=(t,s)=>{if(x.has(s))return e.jsx("div",{className:"w-3 h-3 border-2 border-blue-400 border-t-transparent rounded-full animate-spin"});switch(t){case"pending":return e.jsx("div",{className:"w-3 h-3 border-2 border-yellow-400 border-t-transparent rounded-full animate-spin"});case"saved":return e.jsx("span",{className:"text-green-500 text-xs",children:"✓"});case"failed":return e.jsx("span",{className:"text-red-500 text-xs",children:"✗"});default:return null}};return e.jsxs("div",{className:"max-w-md mx-auto bg-white rounded-lg border",children:[e.jsxs("div",{className:"p-4 border-b",children:[e.jsx("h3",{className:"text-lg font-semibold",children:"乐观更新待办事项"}),e.jsx("p",{className:"text-sm text-gray-600",children:"操作立即生效，然后同步到服务器"})]}),e.jsx("form",{onSubmit:i,className:"p-4 border-b",children:e.jsxs("div",{className:"flex space-x-2",children:[e.jsx("input",{type:"text",value:r,onChange:t=>g(t.target.value),placeholder:"添加新的待办事项...",className:"flex-1 px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"}),e.jsx("button",{type:"submit",disabled:!r.trim(),className:"px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 disabled:opacity-50 disabled:cursor-not-allowed",children:"添加"})]})}),e.jsx("div",{className:"p-4",children:p.length===0?e.jsx("div",{className:"text-center text-gray-500 text-sm py-8",children:"还没有待办事项，添加一个吧！"}):e.jsx("div",{className:"space-y-2",children:p.map(t=>e.jsxs("div",{className:`p-3 rounded-lg border transition-colors ${n(t.status)} ${t.completed?"opacity-75":""}`,children:[e.jsxs("div",{className:"flex items-center justify-between",children:[e.jsxs("div",{className:"flex items-center space-x-3 flex-1",children:[e.jsx("input",{type:"checkbox",checked:t.completed,onChange:()=>v(t.id),disabled:x.has(t.id),className:"w-4 h-4 text-blue-600 rounded focus:ring-blue-500 disabled:opacity-50"}),e.jsx("span",{className:`flex-1 ${t.completed?"line-through text-gray-500":"text-gray-900"}`,children:t.text})]}),e.jsxs("div",{className:"flex items-center space-x-2",children:[l(t.status,t.id),e.jsx("button",{onClick:()=>h(t.id),disabled:x.has(t.id),className:"text-red-500 hover:text-red-700 text-sm disabled:opacity-50 disabled:cursor-not-allowed",title:"删除",children:"🗑️"})]})]}),e.jsxs("div",{className:"text-xs text-gray-500 mt-1",children:["创建于 ",new Date(t.createdAt).toLocaleString()]})]},t.id))})}),e.jsx("div",{className:"p-4 border-t bg-gray-50 text-xs text-gray-600",children:e.jsxs("div",{className:"flex justify-between",children:[e.jsxs("span",{children:["总计: ",p.length]}),e.jsxs("span",{children:["已完成: ",p.filter(t=>t.completed).length]})]})})]})},P=()=>{const[o]=c.useState(k),[a,r]=c.useState(new Set),[g,x]=c.useState(new Set),[b,p]=c.useTransition(),[m,u]=T(a,(i,n)=>{const l=new Set(i);return n.type==="toggle"&&(l.has(n.postId)?l.delete(n.postId):l.add(n.postId)),l}),f=c.useCallback(async i=>{const n=a.has(i);x(l=>new Set(l).add(i)),p(()=>{u({type:"toggle",postId:i})});try{await y(1200),r(l=>{const t=new Set(l);return n?t.delete(i):t.add(i),t})}catch{console.log("点赞操作失败")}finally{x(l=>{const t=new Set(l);return t.delete(i),t})}},[a,u]),v=i=>{const n=o.find(s=>s.id===i),l=(n==null?void 0:n.likes)||0,t=m.has(i)?1:0;return l+t},h=i=>m.has(i);return e.jsxs("div",{className:"max-w-lg mx-auto space-y-4",children:[e.jsx("h3",{className:"text-lg font-semibold",children:"乐观更新点赞功能"}),o.map(i=>e.jsxs("div",{className:"bg-white rounded-lg border p-4",children:[e.jsx("h4",{className:"font-semibold mb-2",children:i.title}),e.jsx("p",{className:"text-gray-600 text-sm mb-3",children:i.content}),e.jsxs("div",{className:"flex items-center justify-between",children:[e.jsxs("button",{onClick:()=>f(i.id),disabled:b,className:`flex items-center space-x-2 px-3 py-1 rounded transition-colors ${h(i.id)?"bg-red-100 text-red-600 hover:bg-red-200":"bg-gray-100 text-gray-600 hover:bg-gray-200"}`,children:[e.jsx("span",{className:h(i.id)?"❤️":"🤍",children:h(i.id)?"❤️":"🤍"}),e.jsx("span",{className:"text-sm font-medium",children:v(i.id)})]}),g.has(i.id)&&e.jsxs("div",{className:"flex items-center space-x-2 text-sm text-gray-500",children:[e.jsx("div",{className:"w-3 h-3 border-2 border-gray-400 border-t-transparent rounded-full animate-spin"}),e.jsx("span",{children:"更新中..."})]})]})]},i.id))]})},I=`import React, { useCallback, useState, useTransition } from "react";\r
import { mockPosts, simulateAPICall } from "./mockData";\r
import { useOptimisticState } from "./useOptimisticState";\r
\r
const OptimisticLikes: React.FC = () => {\r
  const [posts] = useState(mockPosts);\r
  const [userLikes, setUserLikes] = useState<Set<string>>(new Set());\r
  const [loadingPosts, setLoadingPosts] = useState<Set<string>>(new Set());\r
  const [isPending, startTransition] = useTransition();\r
\r
  // 使用自定义的 useOptimistic Hook 管理乐观点赞状态\r
  const [optimisticLikes, updateOptimisticLikes] = useOptimisticState(\r
    userLikes,\r
    (state: Set<string>, action: { type: "toggle"; postId: string }) => {\r
      const newSet = new Set(state);\r
      if (action.type === "toggle") {\r
        if (newSet.has(action.postId)) {\r
          newSet.delete(action.postId);\r
        } else {\r
          newSet.add(action.postId);\r
        }\r
      }\r
      return newSet;\r
    }\r
  );\r
\r
  const toggleLike = useCallback(\r
    async (postId: string) => {\r
      const isCurrentlyLiked = userLikes.has(postId);\r
\r
      // 添加加载状态\r
      setLoadingPosts((prev) => new Set(prev).add(postId));\r
\r
      // 乐观更新：立即切换点赞状态\r
      startTransition(() => {\r
        updateOptimisticLikes({ type: "toggle", postId });\r
      });\r
\r
      try {\r
        // 模拟API调用\r
        await simulateAPICall(1200);\r
\r
        // API调用成功，更新实际状态\r
        setUserLikes((prev) => {\r
          const newLikes = new Set(prev);\r
          if (isCurrentlyLiked) {\r
            newLikes.delete(postId);\r
          } else {\r
            newLikes.add(postId);\r
          }\r
          return newLikes;\r
        });\r
      } catch (error) {\r
        // API调用失败，乐观状态会自动回滚到实际状态\r
        console.log("点赞操作失败");\r
      } finally {\r
        // 移除加载状态\r
        setLoadingPosts((prev) => {\r
          const newSet = new Set(prev);\r
          newSet.delete(postId);\r
          return newSet;\r
        });\r
      }\r
    },\r
    [userLikes, updateOptimisticLikes]\r
  );\r
\r
  const getPostLikes = (postId: string) => {\r
    const post = posts.find((p) => p.id === postId);\r
    const baseCount = post?.likes || 0;\r
\r
    // 如果用户点赞了这个帖子，点赞数+1\r
    const userLikedCount = optimisticLikes.has(postId) ? 1 : 0;\r
    return baseCount + userLikedCount;\r
  };\r
\r
  const isLiked = (postId: string) => {\r
    return optimisticLikes.has(postId);\r
  };\r
\r
  return (\r
    <div className="max-w-lg mx-auto space-y-4">\r
      <h3 className="text-lg font-semibold">乐观更新点赞功能</h3>\r
\r
      {posts.map((post) => (\r
        <div key={post.id} className="bg-white rounded-lg border p-4">\r
          <h4 className="font-semibold mb-2">{post.title}</h4>\r
          <p className="text-gray-600 text-sm mb-3">{post.content}</p>\r
\r
          <div className="flex items-center justify-between">\r
            <button\r
              onClick={() => toggleLike(post.id)}\r
              disabled={isPending}\r
              className={\`flex items-center space-x-2 px-3 py-1 rounded transition-colors \${\r
                isLiked(post.id)\r
                  ? "bg-red-100 text-red-600 hover:bg-red-200"\r
                  : "bg-gray-100 text-gray-600 hover:bg-gray-200"\r
              }\`}\r
            >\r
              <span className={isLiked(post.id) ? "❤️" : "🤍"}>\r
                {isLiked(post.id) ? "❤️" : "🤍"}\r
              </span>\r
              <span className="text-sm font-medium">\r
                {getPostLikes(post.id)}\r
              </span>\r
            </button>\r
\r
            {loadingPosts.has(post.id) && (\r
              <div className="flex items-center space-x-2 text-sm text-gray-500">\r
                <div className="w-3 h-3 border-2 border-gray-400 border-t-transparent rounded-full animate-spin"></div>\r
                <span>更新中...</span>\r
              </div>\r
            )}\r
          </div>\r
        </div>\r
      ))}\r
    </div>\r
  );\r
};\r
\r
export default OptimisticLikes;`,M=`import React, { useCallback, useState, useTransition } from "react";
import { Message, simulateAPICall } from "./mockData";
import { useOptimisticState } from "./useOptimisticState";

const OptimisticMessaging: React.FC = () => {
  const [messages, setMessages] = useState<Message[]>([]);
  const [inputText, setInputText] = useState("");
  const [isPending, startTransition] = useTransition();

  // 使用自定义的 useOptimistic Hook
  const [optimisticMessages, addOptimisticMessage] = useOptimisticState(
    messages,
    (state: Message[], newMessage: Message) => [...state, newMessage]
  );

  const sendMessage = useCallback(
    async (text: string) => {
      if (!text.trim()) return;

      const tempMessage: Message = {
        id: \`temp-\${Date.now()}\`,
        text: text.trim(),
        timestamp: Date.now(),
        status: "sending",
        author: "用户",
      };

      // 乐观更新：立即添加消息到UI
      startTransition(() => {
        addOptimisticMessage(tempMessage);
      });

      try {
        // 模拟发送到服务器
        await simulateAPICall(1500);

        // 成功后更新实际状态
        setMessages((prev) => [
          ...prev,
          { ...tempMessage, status: "sent" },
        ]);
      } catch (error) {
        // 失败后更新状态为失败
        setMessages((prev) => [
          ...prev,
          { ...tempMessage, status: "failed" },
        ]);
      }
    },
    [addOptimisticMessage]
  );

  const retryMessage = useCallback(
    async (messageId: string) => {
      const message = messages.find((m) => m.id === messageId);
      if (!message) return;

      // 更新状态为发送中
      setMessages((prev) =>
        prev.map((m) =>
          m.id === messageId ? { ...m, status: "sending" } : m
        )
      );

      try {
        await simulateAPICall(1000);
        setMessages((prev) =>
          prev.map((m) =>
            m.id === messageId ? { ...m, status: "sent" } : m
          )
        );
      } catch (error) {
        setMessages((prev) =>
          prev.map((m) =>
            m.id === messageId ? { ...m, status: "failed" } : m
          )
        );
      }
    },
    [messages]
  );

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (inputText.trim()) {
      sendMessage(inputText);
      setInputText("");
    }
  };

  const getMessageStyle = (status: Message["status"]) => {
    switch (status) {
      case "sending":
        return "bg-blue-50 border-blue-200 text-blue-800";
      case "sent":
        return "bg-green-50 border-green-200 text-green-800";
      case "failed":
        return "bg-red-50 border-red-200 text-red-800";
      default:
        return "bg-gray-50 border-gray-200 text-gray-800";
    }
  };

  const getStatusIcon = (status: Message["status"]) => {
    switch (status) {
      case "sending":
        return (
          <div className="w-3 h-3 border-2 border-blue-400 border-t-transparent rounded-full animate-spin"></div>
        );
      case "sent":
        return <span className="text-green-500">✓</span>;
      case "failed":
        return <span className="text-red-500">✗</span>;
      default:
        return null;
    }
  };

  return (
    <div className="max-w-md mx-auto bg-white rounded-lg border">
      <div className="p-4 border-b">
        <h3 className="text-lg font-semibold">乐观更新聊天</h3>
        <p className="text-sm text-gray-600">消息立即显示，然后同步到服务器</p>
      </div>

      <div className="h-64 overflow-y-auto p-4 space-y-3">
        {optimisticMessages.length === 0 ? (
          <div className="text-center text-gray-500 text-sm">
            还没有消息，发送第一条消息吧！
          </div>
        ) : (
          optimisticMessages.map((message) => (
            <div
              key={message.id}
              className={\`p-3 rounded-lg border \${getMessageStyle(
                message.status
              )}\`}
            >
              <div className="flex justify-between items-start mb-1">
                <span className="font-medium text-sm">{message.author}</span>
                <div className="flex items-center space-x-2">
                  {getStatusIcon(message.status)}
                  {message.status === "failed" && (
                    <button
                      onClick={() => retryMessage(message.id)}
                      className="text-xs text-red-600 hover:text-red-800 underline"
                    >
                      重试
                    </button>
                  )}
                </div>
              </div>
              <p className="text-sm">{message.text}</p>
              <div className="text-xs text-gray-500 mt-1">
                {new Date(message.timestamp).toLocaleTimeString()}
              </div>
            </div>
          ))
        )}
      </div>

      <form onSubmit={handleSubmit} className="p-4 border-t">
        <div className="flex space-x-2">
          <input
            type="text"
            value={inputText}
            onChange={(e) => setInputText(e.target.value)}
            placeholder="输入消息..."
            className="flex-1 px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            disabled={isPending}
          />
          <button
            type="submit"
            disabled={!inputText.trim() || isPending}
            className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 disabled:opacity-50 disabled:cursor-not-allowed"
          >
            发送
          </button>
        </div>
      </form>
    </div>
  );
};

export default OptimisticMessaging;`,R=`import React, { useCallback, useState } from "react";
import { Todo, simulateAPICall } from "./mockData";

import { useOptimisticState } from "./useOptimisticState";

type TodoAction =
  | { type: "add"; payload: Todo }
  | { type: "toggle"; payload: { id: string } }
  | { type: "delete"; payload: { id: string } }
  | { type: "update_status"; payload: { id: string; status: Todo["status"] } };

const todoReducer = (state: Todo[], action: TodoAction): Todo[] => {
  switch (action.type) {
    case "add":
      return [...state, action.payload];
    case "toggle":
      return state.map((todo) =>
        todo.id === action.payload.id
          ? { ...todo, completed: !todo.completed, status: "pending" }
          : todo
      );
    case "delete":
      return state.filter((todo) => todo.id !== action.payload.id);
    case "update_status":
      return state.map((todo) =>
        todo.id === action.payload.id
          ? { ...todo, status: action.payload.status }
          : todo
      );
    default:
      return state;
  }
};

const OptimisticTodos: React.FC = () => {
  const [todos, setTodos] = useState<Todo[]>([
    {
      id: "1",
      text: "学习 React 18 新特性",
      completed: false,
      createdAt: Date.now() - 3600000,
      status: "saved",
    },
    {
      id: "2",
      text: "实践 useOptimistic Hook",
      completed: true,
      createdAt: Date.now() - 1800000,
      status: "saved",
    },
  ]);
  const [inputText, setInputText] = useState("");
  const [loadingStates, setLoadingStates] = useState<Set<string>>(new Set());

  // 使用自定义的 useOptimistic Hook
  const [optimisticTodos, updateOptimisticTodos] = useOptimisticState(
    todos,
    todoReducer
  );

  // 设置loading状态
  const setLoading = useCallback((id: string, isLoading: boolean) => {
    setLoadingStates((prev) => {
      const newSet = new Set(prev);
      if (isLoading) {
        newSet.add(id);
      } else {
        newSet.delete(id);
      }
      return newSet;
    });
  }, []);

  const addTodo = useCallback(
    async (text: string) => {
      if (!text.trim()) return;

      const newTodo: Todo = {
        id: \`temp-\${Date.now()}\`,
        text: text.trim(),
        completed: false,
        createdAt: Date.now(),
        status: "pending",
      };

      // 设置loading状态
      setLoading(newTodo.id, true);

      // 乐观更新：立即添加到UI
      updateOptimisticTodos({ type: "add", payload: newTodo });

      try {
        // 模拟保存到服务器
        await simulateAPICall(1000);

        // 成功后更新实际状态
        setTodos((prev) => [...prev, { ...newTodo, status: "saved" }]);
      } catch {
        // 失败后更新状态
        setTodos((prev) => [...prev, { ...newTodo, status: "failed" }]);
      } finally {
        // 清除loading状态
        setLoading(newTodo.id, false);
      }
    },
    [updateOptimisticTodos, setLoading]
  );

  const toggleTodo = useCallback(
    async (id: string) => {
      // 设置loading状态
      setLoading(id, true);

      // 乐观更新：立即切换状态
      updateOptimisticTodos({ type: "toggle", payload: { id } });

      try {
        // 模拟更新到服务器
        await simulateAPICall(800);

        // 成功后更新实际状态
        setTodos((prev) =>
          prev.map((todo) =>
            todo.id === id
              ? { ...todo, completed: !todo.completed, status: "saved" }
              : todo
          )
        );
      } catch {
        // 失败后恢复状态
        setTodos((prev) =>
          prev.map((todo) =>
            todo.id === id ? { ...todo, status: "failed" } : todo
          )
        );
      } finally {
        // 清除loading状态
        setLoading(id, false);
      }
    },
    [updateOptimisticTodos, setLoading]
  );

  const deleteTodo = useCallback(
    async (id: string) => {
      // 设置loading状态
      setLoading(id, true);

      // 乐观更新：立即删除
      updateOptimisticTodos({ type: "delete", payload: { id } });

      try {
        // 模拟从服务器删除
        await simulateAPICall(600);

        // 成功后更新实际状态
        setTodos((prev) => prev.filter((todo) => todo.id !== id));
      } catch {
        // 失败后恢复状态（重新添加）
        const todoToRestore = todos.find((todo) => todo.id === id);
        if (todoToRestore) {
          setTodos((prev) => [...prev, { ...todoToRestore, status: "failed" }]);
        }
      } finally {
        // 清除loading状态
        setLoading(id, false);
      }
    },
    [updateOptimisticTodos, todos, setLoading]
  );

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (inputText.trim()) {
      addTodo(inputText);
      setInputText("");
    }
  };

  const getStatusStyle = (status: Todo["status"]) => {
    switch (status) {
      case "pending":
        return "border-yellow-200 bg-yellow-50";
      case "saved":
        return "border-green-200 bg-green-50";
      case "failed":
        return "border-red-200 bg-red-50";
      default:
        return "border-gray-200 bg-white";
    }
  };

  const getStatusIcon = (status: Todo["status"], id: string) => {
    const isLoading = loadingStates.has(id);

    // 如果正在加载，显示蓝色旋转器
    if (isLoading) {
      return (
        <div className="w-3 h-3 border-2 border-blue-400 border-t-transparent rounded-full animate-spin"></div>
      );
    }

    // 根据状态显示不同的图标
    switch (status) {
      case "pending":
        // 只有在没有loading状态时才显示pending的黄色旋转器
        return (
          <div className="w-3 h-3 border-2 border-yellow-400 border-t-transparent rounded-full animate-spin"></div>
        );
      case "saved":
        return <span className="text-green-500 text-xs">✓</span>;
      case "failed":
        return <span className="text-red-500 text-xs">✗</span>;
      default:
        return null;
    }
  };

  return (
    <div className="max-w-md mx-auto bg-white rounded-lg border">
      <div className="p-4 border-b">
        <h3 className="text-lg font-semibold">乐观更新待办事项</h3>
        <p className="text-sm text-gray-600">操作立即生效，然后同步到服务器</p>
      </div>

      <form onSubmit={handleSubmit} className="p-4 border-b">
        <div className="flex space-x-2">
          <input
            type="text"
            value={inputText}
            onChange={(e) => setInputText(e.target.value)}
            placeholder="添加新的待办事项..."
            className="flex-1 px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <button
            type="submit"
            disabled={!inputText.trim()}
            className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 disabled:opacity-50 disabled:cursor-not-allowed"
          >
            添加
          </button>
        </div>
      </form>

      <div className="p-4">
        {optimisticTodos.length === 0 ? (
          <div className="text-center text-gray-500 text-sm py-8">
            还没有待办事项，添加一个吧！
          </div>
        ) : (
          <div className="space-y-2">
            {optimisticTodos.map((todo) => (
              <div
                key={todo.id}
                className={\`p-3 rounded-lg border transition-colors \${getStatusStyle(
                  todo.status
                )} \${todo.completed ? "opacity-75" : ""}\`}
              >
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-3 flex-1">
                    <input
                      type="checkbox"
                      checked={todo.completed}
                      onChange={() => toggleTodo(todo.id)}
                      disabled={loadingStates.has(todo.id)}
                      className="w-4 h-4 text-blue-600 rounded focus:ring-blue-500 disabled:opacity-50"
                    />
                    <span
                      className={\`flex-1 \${
                        todo.completed
                          ? "line-through text-gray-500"
                          : "text-gray-900"
                      }\`}
                    >
                      {todo.text}
                    </span>
                  </div>
                  <div className="flex items-center space-x-2">
                    {getStatusIcon(todo.status, todo.id)}
                    <button
                      onClick={() => deleteTodo(todo.id)}
                      disabled={loadingStates.has(todo.id)}
                      className="text-red-500 hover:text-red-700 text-sm disabled:opacity-50 disabled:cursor-not-allowed"
                      title="删除"
                    >
                      🗑️
                    </button>
                  </div>
                </div>
                <div className="text-xs text-gray-500 mt-1">
                  创建于 {new Date(todo.createdAt).toLocaleString()}
                </div>
              </div>
            ))}
          </div>
        )}
      </div>

      <div className="p-4 border-t bg-gray-50 text-xs text-gray-600">
        <div className="flex justify-between">
          <span>总计: {optimisticTodos.length}</span>
          <span>
            已完成: {optimisticTodos.filter((t) => t.completed).length}
          </span>
        </div>
      </div>
    </div>
  );
};

export default OptimisticTodos;
`,S=`// 模拟API调用函数
export const simulateAPICall = (delay: number = 1000): Promise<void> => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      // 模拟90%的成功率
      if (Math.random() > 0.1) {
        resolve();
      } else {
        reject(new Error('网络错误'));
      }
    }, delay);
  });
};

// 数据类型定义
export interface Message {
  id: string;
  text: string;
  timestamp: number;
  status: "sending" | "sent" | "failed";
  author: string;
}

export interface Todo {
  id: string;
  text: string;
  completed: boolean;
  createdAt: number;
  status: "pending" | "saved" | "failed";
}

export interface Like {
  id: string;
  postId: string;
  userId: string;
  timestamp: number;
}

// 模拟帖子数据
export const mockPosts = [
  {
    id: "1",
    title: "React 18 新特性",
    content: "探索 React 18 带来的并发特性和性能改进。",
    likes: 12,
  },
  {
    id: "2",
    title: "TypeScript 最佳实践",
    content: "如何在大型项目中有效使用 TypeScript。",
    likes: 8,
  },
  {
    id: "3",
    title: "前端性能优化",
    content: "提升 Web 应用性能的实用技巧和策略。",
    likes: 15,
  },
];`,N=`import { useEffect, useState } from "react";

// 兼容 React 18.3.1 的自定义 useOptimistic Hook
// 注意：这是一个简化版本，实际的 useOptimistic 在 React 19 中可用
export function useOptimisticState<T>(
  initialState: T,
  reducer: (state: T, action: any) => T
): [T, (action: any) => void] {
  const [state, setState] = useState(initialState);

  // 同步外部状态变化
  useEffect(() => {
    setState(initialState);
  }, [initialState]);

  const dispatch = (action: any) => {
    setState((prevState) => reducer(prevState, action));
  };

  return [state, dispatch];
}

// 导出 isPending 状态的 Hook
export function useOptimisticWithPending<T>(
  initialState: T,
  reducer: (state: T, action: any) => T
): [T, (action: any) => void, boolean] {
  const [state, setState] = useState(initialState);
  const [isPending, setIsPending] = useState(false);

  // 同步外部状态变化
  useEffect(() => {
    setState(initialState);
  }, [initialState]);

  const dispatch = (action: any) => {
    setIsPending(true);
    setState((prevState) => reducer(prevState, action));
    // 短暂延迟后重置pending状态
    setTimeout(() => setIsPending(false), 100);
  };

  return [state, dispatch, isPending];
}
`,$=()=>e.jsx(j,{title:"useOptimistic Hook",description:"学习 React 18 的 useOptimistic Hook，实现乐观更新提升用户体验。",overview:e.jsx("div",{className:"space-y-4",children:e.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-6",children:[e.jsxs("div",{className:"bg-blue-50 p-4 rounded-lg border border-blue-200",children:[e.jsx("h3",{className:"font-semibold text-blue-800 mb-2",children:"🎯 核心概念"}),e.jsxs("ul",{className:"text-sm text-blue-700 space-y-1",children:[e.jsx("li",{children:"• 乐观更新"}),e.jsx("li",{children:"• 用户体验"}),e.jsx("li",{children:"• 错误处理"}),e.jsx("li",{children:"• 状态同步"})]})]}),e.jsxs("div",{className:"bg-green-50 p-4 rounded-lg border border-green-200",children:[e.jsx("h3",{className:"font-semibold text-green-800 mb-2",children:"✨ 主要优势"}),e.jsxs("ul",{className:"text-sm text-green-700 space-y-1",children:[e.jsx("li",{children:"• 即时用户反馈"}),e.jsx("li",{children:"• 减少加载时间"}),e.jsx("li",{children:"• 提升应用响应"}),e.jsx("li",{children:"• 改善用户体验"})]})]}),e.jsxs("div",{className:"bg-yellow-50 p-4 rounded-lg border border-yellow-200",children:[e.jsx("h3",{className:"font-semibold text-yellow-800 mb-2",children:"🎪 适用场景"}),e.jsxs("ul",{className:"text-sm text-yellow-700 space-y-1",children:[e.jsx("li",{children:"• 聊天消息发送"}),e.jsx("li",{children:"• 点赞收藏交互"}),e.jsx("li",{children:"• 待办事项管理"}),e.jsx("li",{children:"• 表单数据更新"})]})]}),e.jsxs("div",{className:"bg-red-50 p-4 rounded-lg border border-red-200",children:[e.jsx("h3",{className:"font-semibold text-red-800 mb-2",children:"⚠️ 注意事项"}),e.jsxs("ul",{className:"text-sm text-red-700 space-y-1",children:[e.jsx("li",{children:"• React 18+ 支持"}),e.jsx("li",{children:"• 处理操作失败"}),e.jsx("li",{children:"• 网络错误恢复"}),e.jsx("li",{children:"• 保持状态一致"})]})]})]})}),examples:[{title:"乐观更新聊天",component:e.jsx(L,{}),description:"展示在聊天应用中使用乐观更新，消息立即显示然后同步到服务器。",observationPoints:["发送消息时立即显示在界面上","消息状态从发送中变为已发送","网络失败时显示重试选项","不同状态有不同的视觉反馈"],keyPoints:["useOptimistic 管理乐观状态","startTransition 包装乐观更新","错误处理和状态回滚","提供重试机制"],commonTraps:["忘记处理网络失败情况","乐观状态与实际状态不同步","没有提供适当的视觉反馈","重复提交相同的操作"],solutions:["实现完整的错误处理机制","确保状态同步的一致性","提供清晰的状态指示","添加防重复提交逻辑"],importantTips:["消息发送后立即显示，无需等待服务器响应","发送中的消息有特殊的样式和加载动画","失败的消息可以点击重试按钮重新发送","所有状态变化都有相应的视觉反馈"],preCode:[{title:"mockData",code:S},{title:"useOptimisticState",code:N}],codeExample:{title:"乐观更新聊天",code:M}},{title:"乐观更新待办事项",component:e.jsx(C,{}),description:"展示在待办事项应用中使用乐观更新，操作立即生效。",observationPoints:["添加、切换、删除操作立即生效","操作进行中显示待定状态","成功后显示确认标识","支持多种操作类型的乐观更新"],keyPoints:["使用 reducer 模式处理复杂状态","支持多种操作类型","提供操作状态的视觉反馈","错误时自动回滚状态"],preCode:[{title:"mockData",code:S},{title:"useOptimisticState",code:N}],codeExample:{title:"乐观更新待办事项",code:R}},{title:"乐观更新点赞",component:e.jsx(P,{}),description:"展示点赞功能的乐观更新，点击立即更新计数。",observationPoints:["点击点赞按钮立即更新计数","按钮状态立即切换","显示操作进行中的状态","网络延迟不影响用户体验"],keyPoints:["即时的用户反馈","状态切换的平滑过渡","计数的实时更新","良好的交互体验"],preCode:[{title:"mockData",code:S},{title:"useOptimisticState",code:N}],codeExample:{title:"乐观更新点赞",code:I}}],tutorial:{concepts:["乐观更新是一种 UI 模式，先更新界面再同步服务器","useOptimistic 提供了 React 官方的乐观更新支持","需要配合 useTransition 使用以获得最佳性能","必须处理操作失败时的状态回滚","适合用于用户交互频繁的场景"],steps:["使用 useOptimistic 创建乐观状态","定义状态更新的 reducer 函数","在用户操作时立即更新乐观状态","发起异步操作到服务器","根据结果更新实际状态或回滚","提供适当的错误处理和用户反馈"],tips:["始终使用 startTransition 包装乐观更新","为不同状态提供清晰的视觉反馈","实现完整的错误处理机制","考虑网络状况和用户体验","保持乐观状态与实际状态的一致性"]},interview:{questions:[{question:"useOptimistic 的工作原理是什么？",answer:"工作原理：1) 创建基于当前状态的乐观状态；2) 用户操作时立即更新乐观状态；3) 同时发起异步操作；4) 根据操作结果更新实际状态；5) 失败时回滚到原始状态；6) 提供状态同步机制。"},{question:"乐观更新的优势和风险是什么？",answer:"优势：1) 提供即时用户反馈；2) 减少感知延迟；3) 提升应用响应性；4) 改善用户体验。风险：1) 操作可能失败需要回滚；2) 状态不一致的可能性；3) 复杂的错误处理；4) 用户可能基于错误状态做决策。"},{question:"如何处理乐观更新的错误情况？",answer:"错误处理策略：1) 实现状态回滚机制；2) 提供清晰的错误提示；3) 支持重试操作；4) 记录失败的操作；5) 考虑离线场景；6) 提供手动同步选项；7) 监控和日志记录。"},{question:"什么场景适合使用乐观更新？",answer:"适用场景：1) 高频用户交互（点赞、评论）；2) 实时通信应用；3) 协作编辑工具；4) 社交媒体功能；5) 游戏状态更新；6) 表单提交。不适用：1) 关键业务操作；2) 金融交易；3) 不可逆操作；4) 需要强一致性的场景。"}],keyPoints:["useOptimistic 是 React 18 的新特性","需要配合 useTransition 使用","必须处理操作失败的情况","适合高频交互的场景","提升用户体验的重要工具"]},bestPractices:{dos:["使用 startTransition 包装乐观更新","提供清晰的状态视觉反馈","实现完整的错误处理机制","支持操作重试功能","保持状态的一致性"],donts:["不要忽视错误处理","不要在关键操作中使用","不要忘记状态回滚","不要过度使用乐观更新","不要忽视网络状况"],patterns:["乐观更新 + 错误回滚模式","状态同步和一致性模式","重试和恢复模式","离线优先模式","实时协作模式"]}});export{$ as default};
