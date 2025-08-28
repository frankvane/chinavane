import{j as e,r}from"./index-Bi_r7QuH.js";import{C as N}from"./ComponentTemplate-C5EWLtXX.js";const w=()=>{const[c,u]=r.useState([]),[a,t]=r.useState(!1),[d,g]=r.useState(null),[x,v]=r.useState([]),i=r.useCallback(n=>{v(m=>[...m.slice(-4),`${new Date().toLocaleTimeString()}: ${n}`])},[]),o=r.useCallback(async()=>{t(!0),g(null),i("📡 开始获取用户数据...");try{await new Promise(m=>setTimeout(m,1e3)),u([{id:1,name:"张三",email:"zhangsan@example.com",status:"active"},{id:2,name:"李四",email:"lisi@example.com",status:"active"},{id:3,name:"王五",email:"wangwu@example.com",status:"inactive"}]),i("✅ 用户数据获取成功")}catch(n){const m=n instanceof Error?n.message:"未知错误";g(m),i(`❌ 获取失败: ${m}`)}finally{t(!1)}},[i]),b=r.useCallback(()=>{i("🔄 手动刷新数据"),o()},[o,i]);return e.jsx("div",{className:"space-y-4",children:e.jsxs("div",{className:"bg-blue-50 p-4 rounded-lg border border-blue-200",children:[e.jsx("h4",{className:"font-semibold text-blue-800 mb-3",children:"传统封装方案"}),e.jsxs("div",{className:"grid grid-cols-2 gap-4",children:[e.jsxs("div",{className:"space-y-3",children:[e.jsxs("div",{className:"flex space-x-2",children:[e.jsx("button",{onClick:o,disabled:a,className:"px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 disabled:bg-gray-300 disabled:cursor-not-allowed transition-colors",children:a?"加载中...":"获取用户"}),e.jsx("button",{onClick:b,disabled:a,className:"px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600 disabled:bg-gray-300 disabled:cursor-not-allowed transition-colors",children:"刷新数据"})]}),e.jsxs("div",{className:"text-sm space-y-1",children:[e.jsxs("div",{children:["状态: ",e.jsx("span",{className:a?"text-yellow-600":"text-green-600",children:a?"加载中":"就绪"})]}),e.jsxs("div",{children:["用户数量: ",e.jsx("span",{className:"font-medium",children:c.length})]}),d&&e.jsxs("div",{className:"text-red-600",children:["错误: ",d]})]})]}),e.jsxs("div",{children:[e.jsx("h5",{className:"font-medium mb-2",children:"操作日志"}),e.jsx("div",{className:"bg-white p-2 rounded border text-xs space-y-1 max-h-24 overflow-y-auto",children:x.length>0?x.map((n,m)=>e.jsx("div",{className:"text-gray-600",children:n},m)):e.jsx("div",{className:"text-gray-400",children:"暂无日志"})})]})]}),c.length>0&&e.jsxs("div",{className:"mt-4",children:[e.jsx("h5",{className:"font-medium mb-2",children:"用户列表"}),e.jsx("div",{className:"bg-white p-3 rounded border",children:c.map(n=>e.jsxs("div",{className:"flex justify-between items-center py-1 border-b last:border-b-0",children:[e.jsxs("span",{className:"text-sm",children:[n.name," (",n.email,")"]}),e.jsx("span",{className:`text-xs px-2 py-1 rounded ${n.status==="active"?"bg-green-100 text-green-800":"bg-gray-100 text-gray-800"}`,children:n.status==="active"?"活跃":"非活跃"})]},n.id))})]})]})})},S=()=>{const[c,u]=r.useState([]),[a,t]=r.useState(!1),[d,g]=r.useState(!1),[x,v]=r.useState(null),[i,o]=r.useState([]),[b,n]=r.useState("invalid"),m=r.useRef(null),p=r.useCallback(h=>{o(y=>[...y.slice(-4),`${new Date().toLocaleTimeString()}: ${h}`])},[]),s=r.useCallback(async(h=!1)=>{h||t(!0),g(!0),v(null),p(h?"🔄 后台刷新数据...":"📡 获取用户数据...");try{await new Promise(f=>setTimeout(f,800)),u([{id:1,name:"张三",email:"zhangsan@example.com",status:"active"},{id:2,name:"李四",email:"lisi@example.com",status:"active"},{id:3,name:"王五",email:"wangwu@example.com",status:"inactive"},{id:4,name:"赵六",email:"zhaoliu@example.com",status:"active"}]),n("fresh"),p("✅ 数据获取成功，缓存已更新"),m.current&&clearTimeout(m.current),m.current=setTimeout(()=>{n("stale"),p("⚠️ 缓存已过期，数据可能不是最新")},5e3)}catch(y){const f=y instanceof Error?y.message:"未知错误";v(f),p(`❌ 获取失败: ${f}`)}finally{t(!1),g(!1)}},[p]),l=r.useCallback(()=>{p("🔄 手动重新获取数据"),s(!0)},[s,p]),j=r.useCallback(()=>{n("invalid"),p("🗑️ 缓存已失效")},[p]);return r.useEffect(()=>()=>{m.current&&clearTimeout(m.current)},[]),e.jsx("div",{className:"space-y-4",children:e.jsxs("div",{className:"bg-purple-50 p-4 rounded-lg border border-purple-200",children:[e.jsx("h4",{className:"font-semibold text-purple-800 mb-3",children:"React Query 方案"}),e.jsxs("div",{className:"grid grid-cols-2 gap-4",children:[e.jsxs("div",{className:"space-y-3",children:[e.jsxs("div",{className:"flex space-x-2",children:[e.jsx("button",{onClick:()=>s(),disabled:a,className:"px-4 py-2 bg-purple-500 text-white rounded hover:bg-purple-600 disabled:bg-gray-300 disabled:cursor-not-allowed transition-colors",children:a?"加载中...":"获取用户"}),e.jsx("button",{onClick:l,disabled:d,className:"px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600 disabled:bg-gray-300 disabled:cursor-not-allowed transition-colors",children:d?"刷新中...":"重新获取"}),e.jsx("button",{onClick:j,className:"px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600 transition-colors",children:"失效缓存"})]}),e.jsxs("div",{className:"text-sm space-y-1",children:[e.jsxs("div",{children:["加载状态: ",e.jsx("span",{className:a?"text-yellow-600":"text-green-600",children:a?"初始加载":"就绪"})]}),e.jsxs("div",{children:["获取状态: ",e.jsx("span",{className:d?"text-blue-600":"text-gray-600",children:d?"后台获取中":"空闲"})]}),e.jsxs("div",{children:["缓存状态: ",e.jsx("span",{className:b==="fresh"?"text-green-600":b==="stale"?"text-yellow-600":"text-red-600",children:b==="fresh"?"新鲜":b==="stale"?"过期":"无效"})]}),e.jsxs("div",{children:["用户数量: ",e.jsx("span",{className:"font-medium",children:c.length})]}),x&&e.jsxs("div",{className:"text-red-600",children:["错误: ",x]})]})]}),e.jsxs("div",{children:[e.jsx("h5",{className:"font-medium mb-2",children:"操作日志"}),e.jsx("div",{className:"bg-white p-2 rounded border text-xs space-y-1 max-h-24 overflow-y-auto",children:i.length>0?i.map((h,y)=>e.jsx("div",{className:"text-gray-600",children:h},y)):e.jsx("div",{className:"text-gray-400",children:"暂无日志"})})]})]}),c.length>0&&e.jsxs("div",{className:"mt-4",children:[e.jsx("h5",{className:"font-medium mb-2",children:"用户列表 (带缓存)"}),e.jsx("div",{className:"bg-white p-3 rounded border",children:c.map(h=>e.jsxs("div",{className:"flex justify-between items-center py-1 border-b last:border-b-0",children:[e.jsxs("span",{className:"text-sm",children:[h.name," (",h.email,")"]}),e.jsx("span",{className:`text-xs px-2 py-1 rounded ${h.status==="active"?"bg-green-100 text-green-800":"bg-gray-100 text-gray-800"}`,children:h.status==="active"?"活跃":"非活跃"})]},h.id))})]})]})})},k=()=>{const[c,u]=r.useState([]),[a,t]=r.useState(new Set),[d,g]=r.useState([]),[x,v]=r.useState("traditional"),i=r.useRef(null),o=r.useCallback(s=>{g(l=>[...l.slice(-4),`${new Date().toLocaleTimeString()}: ${s}`])},[]),b=r.useCallback(s=>{a.has(s)||(t(l=>new Set([...l,s])),o(`📡 订阅消息类型: ${s}`),i.current||(i.current=setInterval(()=>{const l={id:Math.random().toString(36).substr(2,9),type:Array.from(a)[Math.floor(Math.random()*a.size)]||s,content:`消息内容 ${Math.floor(Math.random()*1e3)}`,timestamp:Date.now()};u(j=>[...j.slice(-9),l]),o(`📨 收到消息: ${l.type}`)},2e3)))},[a,o]),n=r.useCallback(s=>{a.has(s)||(t(l=>new Set([...l,s])),o(`🔌 实时订阅: ${s}`),setTimeout(()=>{const l={id:Math.random().toString(36).substr(2,9),type:s,content:`实时消息 ${Math.floor(Math.random()*1e3)}`,timestamp:Date.now()};u(j=>[...j.slice(-9),l]),o(`⚡ 实时接收: ${l.type}`)},500))},[a,o]),m=r.useCallback(s=>{t(l=>{const j=new Set(l);return j.delete(s),j}),o(`🚫 取消订阅: ${s}`),a.size<=1&&i.current&&(clearInterval(i.current),i.current=null)},[a,o]),p=r.useCallback(()=>{u([]),o("🗑️ 清空消息")},[o]);return r.useEffect(()=>()=>{i.current&&clearInterval(i.current)},[]),e.jsx("div",{className:"space-y-4",children:e.jsxs("div",{className:"bg-indigo-50 p-4 rounded-lg border border-indigo-200",children:[e.jsx("h4",{className:"font-semibold text-indigo-800 mb-3",children:"消息订阅管理对比"}),e.jsxs("div",{className:"grid grid-cols-2 gap-4",children:[e.jsxs("div",{className:"space-y-3",children:[e.jsxs("div",{className:"flex space-x-2 mb-3",children:[e.jsx("button",{onClick:()=>v("traditional"),className:`px-3 py-1 rounded text-sm transition-colors ${x==="traditional"?"bg-indigo-500 text-white":"bg-gray-200 text-gray-700 hover:bg-gray-300"}`,children:"传统轮询"}),e.jsx("button",{onClick:()=>v("modern"),className:`px-3 py-1 rounded text-sm transition-colors ${x==="modern"?"bg-indigo-500 text-white":"bg-gray-200 text-gray-700 hover:bg-gray-300"}`,children:"实时推送"})]}),e.jsx("div",{className:"flex flex-wrap gap-2",children:["chat","notification","system","alert"].map(s=>e.jsxs("button",{onClick:()=>x==="traditional"?b(s):n(s),disabled:a.has(s),className:"px-3 py-1 bg-blue-500 text-white rounded text-sm hover:bg-blue-600 disabled:bg-gray-300 disabled:cursor-not-allowed transition-colors",children:["订阅 ",s]},s))}),e.jsxs("div",{className:"text-sm space-y-1",children:[e.jsxs("div",{children:["订阅方式: ",e.jsx("span",{className:"font-medium",children:x==="traditional"?"轮询 (2秒间隔)":"实时推送"})]}),e.jsxs("div",{children:["活跃订阅: ",e.jsx("span",{className:"font-medium",children:a.size})]}),e.jsxs("div",{children:["消息数量: ",e.jsx("span",{className:"font-medium",children:c.length})]})]}),e.jsx("div",{className:"flex space-x-2",children:e.jsx("button",{onClick:p,className:"px-3 py-1 bg-red-500 text-white rounded text-sm hover:bg-red-600 transition-colors",children:"清空消息"})}),a.size>0&&e.jsxs("div",{children:[e.jsx("h6",{className:"text-sm font-medium mb-1",children:"当前订阅:"}),e.jsx("div",{className:"flex flex-wrap gap-1",children:Array.from(a).map(s=>e.jsxs("span",{onClick:()=>m(s),className:"px-2 py-1 bg-indigo-100 text-indigo-800 rounded text-xs cursor-pointer hover:bg-indigo-200 transition-colors",children:[s," ×"]},s))})]})]}),e.jsxs("div",{children:[e.jsx("h5",{className:"font-medium mb-2",children:"操作日志"}),e.jsx("div",{className:"bg-white p-2 rounded border text-xs space-y-1 max-h-24 overflow-y-auto",children:d.length>0?d.map((s,l)=>e.jsx("div",{className:"text-gray-600",children:s},l)):e.jsx("div",{className:"text-gray-400",children:"暂无日志"})})]})]}),c.length>0&&e.jsxs("div",{className:"mt-4",children:[e.jsx("h5",{className:"font-medium mb-2",children:"消息列表 (最新10条)"}),e.jsx("div",{className:"bg-white p-3 rounded border max-h-32 overflow-y-auto",children:c.map(s=>e.jsxs("div",{className:"flex justify-between items-center py-1 border-b last:border-b-0",children:[e.jsxs("div",{className:"text-sm",children:[e.jsxs("span",{className:"font-medium text-indigo-600",children:["[",s.type,"]"]}),e.jsx("span",{className:"ml-2",children:s.content})]}),e.jsx("span",{className:"text-xs text-gray-500",children:new Date(s.timestamp).toLocaleTimeString()})]},s.id))})]})]})})},C=()=>{const c=[{name:"传统封装",bundleSize:"~5KB",learningCurve:"Low",performance:"Good",caching:!1,realtime:!1,offline:!1,devtools:!1,pros:["简单易懂","完全控制","轻量级","无依赖"],cons:["手动管理状态","重复代码多","缺乏缓存","错误处理复杂"]},{name:"React Query",bundleSize:"~39KB",learningCurve:"Medium",performance:"Best",caching:!0,realtime:!0,offline:!0,devtools:!0,pros:["强大缓存","自动重试","后台更新","优秀开发工具"],cons:["学习成本","包体积大","配置复杂","过度工程化"]},{name:"SWR",bundleSize:"~4.2KB",learningCurve:"Low",performance:"Better",caching:!0,realtime:!0,offline:!1,devtools:!1,pros:["轻量级","简单API","自动重验证","TypeScript友好"],cons:["功能有限","缓存策略简单","离线支持弱","生态较小"]},{name:"Apollo Client",bundleSize:"~33KB",learningCurve:"High",performance:"Best",caching:!0,realtime:!0,offline:!0,devtools:!0,pros:["GraphQL专用","智能缓存","实时订阅","完整生态"],cons:["仅限GraphQL","学习成本高","配置复杂","包体积大"]}],u=t=>{switch(t){case"Best":return"text-green-600 bg-green-100";case"Better":return"text-blue-600 bg-blue-100";case"Good":return"text-yellow-600 bg-yellow-100";default:return"text-gray-600 bg-gray-100"}},a=t=>{switch(t){case"Low":return"text-green-600 bg-green-100";case"Medium":return"text-yellow-600 bg-yellow-100";case"High":return"text-red-600 bg-red-100";default:return"text-gray-600 bg-gray-100"}};return e.jsx("div",{className:"space-y-4",children:e.jsxs("div",{className:"bg-gray-50 p-4 rounded-lg border",children:[e.jsx("h4",{className:"font-semibold text-gray-800 mb-4",children:"解决方案对比表"}),e.jsx("div",{className:"overflow-x-auto",children:e.jsxs("table",{className:"w-full text-sm border-collapse",children:[e.jsx("thead",{children:e.jsxs("tr",{className:"bg-gray-100",children:[e.jsx("th",{className:"border p-2 text-left font-medium",children:"解决方案"}),e.jsx("th",{className:"border p-2 text-center font-medium",children:"包大小"}),e.jsx("th",{className:"border p-2 text-center font-medium",children:"学习成本"}),e.jsx("th",{className:"border p-2 text-center font-medium",children:"性能"}),e.jsx("th",{className:"border p-2 text-center font-medium",children:"缓存"}),e.jsx("th",{className:"border p-2 text-center font-medium",children:"实时"}),e.jsx("th",{className:"border p-2 text-center font-medium",children:"离线"}),e.jsx("th",{className:"border p-2 text-center font-medium",children:"开发工具"})]})}),e.jsx("tbody",{children:c.map((t,d)=>e.jsxs("tr",{className:"hover:bg-gray-50",children:[e.jsx("td",{className:"border p-2 font-medium",children:t.name}),e.jsx("td",{className:"border p-2 text-center",children:t.bundleSize}),e.jsx("td",{className:"border p-2 text-center",children:e.jsx("span",{className:`px-2 py-1 rounded text-xs ${a(t.learningCurve)}`,children:t.learningCurve})}),e.jsx("td",{className:"border p-2 text-center",children:e.jsx("span",{className:`px-2 py-1 rounded text-xs ${u(t.performance)}`,children:t.performance})}),e.jsx("td",{className:"border p-2 text-center",children:t.caching?"✅":"❌"}),e.jsx("td",{className:"border p-2 text-center",children:t.realtime?"✅":"❌"}),e.jsx("td",{className:"border p-2 text-center",children:t.offline?"✅":"❌"}),e.jsx("td",{className:"border p-2 text-center",children:t.devtools?"✅":"❌"})]},d))})]})}),e.jsx("div",{className:"mt-6 grid grid-cols-2 gap-4",children:c.map((t,d)=>e.jsxs("div",{className:"bg-white p-3 rounded border",children:[e.jsx("h5",{className:"font-medium text-gray-800 mb-2",children:t.name}),e.jsxs("div",{className:"grid grid-cols-2 gap-2 text-xs",children:[e.jsxs("div",{children:[e.jsx("h6",{className:"font-medium text-green-700 mb-1",children:"优势:"}),e.jsx("ul",{className:"space-y-1",children:t.pros.map((g,x)=>e.jsxs("li",{className:"text-green-600",children:["• ",g]},x))})]}),e.jsxs("div",{children:[e.jsx("h6",{className:"font-medium text-red-700 mb-1",children:"劣势:"}),e.jsx("ul",{className:"space-y-1",children:t.cons.map((g,x)=>e.jsxs("li",{className:"text-red-600",children:["• ",g]},x))})]})]})]},d))})]})})},R=()=>{const c=e.jsxs("div",{className:"space-y-4",children:[e.jsxs("div",{children:[e.jsx("h3",{className:"text-lg font-semibold mb-2",children:"核心概念"}),e.jsxs("ul",{className:"list-disc list-inside space-y-1 text-gray-700",children:[e.jsxs("li",{children:[e.jsx("strong",{children:"传统封装"}),"：基于原生 fetch/axios 的手动状态管理和错误处理"]}),e.jsxs("li",{children:[e.jsx("strong",{children:"React Query"}),"：强大的服务端状态管理库，提供缓存、同步、更新等功能"]}),e.jsxs("li",{children:[e.jsx("strong",{children:"SWR"}),"：轻量级的数据获取库，专注于缓存和重验证"]}),e.jsxs("li",{children:[e.jsx("strong",{children:"Apollo Client"}),"：专为 GraphQL 设计的全功能客户端"]})]})]}),e.jsxs("div",{children:[e.jsx("h3",{className:"text-lg font-semibold mb-2",children:"主要优势"}),e.jsxs("ul",{className:"list-disc list-inside space-y-1 text-gray-700",children:[e.jsxs("li",{children:[e.jsx("strong",{children:"性能优化"}),"：现代解决方案提供智能缓存和后台更新机制"]}),e.jsxs("li",{children:[e.jsx("strong",{children:"开发体验"}),"：减少样板代码，提供强大的开发工具和调试功能"]}),e.jsxs("li",{children:[e.jsx("strong",{children:"用户体验"}),"：支持乐观更新、离线模式和实时同步"]}),e.jsxs("li",{children:[e.jsx("strong",{children:"维护性"}),"：统一的状态管理和错误处理机制"]})]})]}),e.jsxs("div",{children:[e.jsx("h3",{className:"text-lg font-semibold mb-2",children:"适用场景"}),e.jsxs("ul",{className:"list-disc list-inside space-y-1 text-gray-700",children:[e.jsxs("li",{children:[e.jsx("strong",{children:"简单项目"}),"：传统封装适合小型项目和简单的 API 调用"]}),e.jsxs("li",{children:[e.jsx("strong",{children:"复杂应用"}),"：React Query 适合需要复杂缓存策略的大型应用"]}),e.jsxs("li",{children:[e.jsx("strong",{children:"轻量需求"}),"：SWR 适合需要基础缓存功能的中小型项目"]}),e.jsxs("li",{children:[e.jsx("strong",{children:"GraphQL 项目"}),"：Apollo Client 是 GraphQL 应用的最佳选择"]})]})]}),e.jsxs("div",{children:[e.jsx("h3",{className:"text-lg font-semibold mb-2",children:"注意事项"}),e.jsxs("ul",{className:"list-disc list-inside space-y-1 text-gray-700",children:[e.jsxs("li",{children:[e.jsx("strong",{children:"学习成本"}),"：现代解决方案需要时间学习其概念和最佳实践"]}),e.jsxs("li",{children:[e.jsx("strong",{children:"包大小"}),"：考虑项目的包大小限制和性能要求"]}),e.jsxs("li",{children:[e.jsx("strong",{children:"团队技能"}),"：选择团队熟悉或愿意学习的技术栈"]}),e.jsxs("li",{children:[e.jsx("strong",{children:"项目需求"}),"：根据实际需求选择合适的解决方案，避免过度工程化"]})]})]})]}),u=[{title:"传统封装 vs React Query",component:e.jsxs("div",{className:"grid grid-cols-1 lg:grid-cols-2 gap-6",children:[e.jsx(w,{}),e.jsx(S,{})]}),description:"对比传统手动状态管理与 React Query 的自动缓存和后台更新机制",observationPoints:["观察传统方案需要手动管理 loading、error、data 状态","注意 React Query 提供的缓存状态和后台刷新功能","对比两种方案的用户体验差异，特别是重复请求的处理","观察 React Query 的智能缓存策略和自动失效机制"],keyPoints:["传统方案需要大量样板代码来管理异步状态","React Query 自动处理缓存、重试、后台更新等复杂逻辑","现代解决方案提供更好的用户体验和开发体验","缓存机制可以显著减少不必要的网络请求"],commonTraps:["传统方案容易出现竞态条件和内存泄漏","手动管理缓存容易导致数据不一致","缺乏统一的错误处理和重试机制","重复的状态管理代码难以维护"],solutions:["使用现代数据获取库来减少样板代码","建立统一的缓存策略和失效机制","实现自动重试和错误恢复机制","采用声明式的数据获取方式"],codeExample:{title:"传统封装 vs React Query 代码对比",code:`// 传统封装方式
const UserList = () => {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const fetchUsers = async () => {
    setLoading(true);
    setError(null);
    try {
      const response = await fetch('/api/users');
      const data = await response.json();
      setUsers(data);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchUsers();
  }, []);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;
  return <div>{/* render users */}</div>;
};

// React Query 方式
import { useQuery } from '@tanstack/react-query';

const UserList = () => {
  const { 
    data: users, 
    isLoading, 
    error, 
    refetch 
  } = useQuery({
    queryKey: ['users'],
    queryFn: () => fetch('/api/users').then(res => res.json()),
    staleTime: 5 * 60 * 1000, // 5分钟
    cacheTime: 10 * 60 * 1000, // 10分钟
    retry: 3,
    refetchOnWindowFocus: true
  });

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error: {error.message}</div>;
  return <div>{/* render users */}</div>;
};`,language:"typescript",highlights:[7,8,9,32,33,34,35,36,37,38,39]}},{title:"消息订阅管理对比",component:e.jsx(k,{}),description:"对比传统轮询与现代实时推送在消息订阅管理中的应用",observationPoints:["切换不同的订阅方式，观察消息接收的时效性差异","注意传统轮询的资源消耗和延迟问题","观察实时推送的即时性和资源效率","对比两种方案的订阅管理复杂度"],keyPoints:["传统轮询简单但效率低，存在延迟和资源浪费","实时推送提供即时性，但需要更复杂的连接管理","现代方案支持更精细的订阅控制和错误处理","选择合适的方案需要考虑实时性要求和系统复杂度"],commonTraps:["轮询频率设置不当导致性能问题或延迟过高","WebSocket 连接管理不当导致内存泄漏","缺乏重连机制和错误恢复策略","订阅状态管理混乱，导致重复订阅或遗漏"],solutions:["根据业务需求选择合适的实时通信方案","实现健壮的连接管理和自动重连机制","建立统一的订阅状态管理系统","提供优雅的降级策略和错误处理"],codeExample:{title:"消息订阅实现对比",code:`// 传统轮询方式
class TraditionalMessageService {
  private intervals: Map<string, NodeJS.Timeout> = new Map();
  
  subscribe(messageType: string, callback: (data: any) => void) {
    const interval = setInterval(async () => {
      try {
        const response = await fetch(\`/api/messages/\${messageType}\`);
        const messages = await response.json();
        messages.forEach(callback);
      } catch (error) {
        console.error('轮询失败:', error);
      }
    }, 2000); // 每2秒轮询一次
    
    this.intervals.set(messageType, interval);
  }
  
  unsubscribe(messageType: string) {
    const interval = this.intervals.get(messageType);
    if (interval) {
      clearInterval(interval);
      this.intervals.delete(messageType);
    }
  }
}

// 现代 WebSocket 方式
class ModernMessageService {
  private ws: WebSocket | null = null;
  private subscriptions: Map<string, Set<(data: any) => void>> = new Map();
  
  connect() {
    this.ws = new WebSocket('wss://api.example.com/messages');
    
    this.ws.onmessage = (event) => {
      const { type, data } = JSON.parse(event.data);
      const callbacks = this.subscriptions.get(type);
      if (callbacks) {
        callbacks.forEach(callback => callback(data));
      }
    };
    
    this.ws.onclose = () => {
      // 自动重连逻辑
      setTimeout(() => this.connect(), 3000);
    };
  }
  
  subscribe(messageType: string, callback: (data: any) => void) {
    if (!this.subscriptions.has(messageType)) {
      this.subscriptions.set(messageType, new Set());
      // 发送订阅请求
      this.ws?.send(JSON.stringify({ action: 'subscribe', type: messageType }));
    }
    this.subscriptions.get(messageType)!.add(callback);
  }
  
  unsubscribe(messageType: string, callback: (data: any) => void) {
    const callbacks = this.subscriptions.get(messageType);
    if (callbacks) {
      callbacks.delete(callback);
      if (callbacks.size === 0) {
        this.subscriptions.delete(messageType);
        // 发送取消订阅请求
        this.ws?.send(JSON.stringify({ action: 'unsubscribe', type: messageType }));
      }
    }
  }
}`,language:"typescript",highlights:[6,13,32,34,41,46,49]}},{title:"性能与功能对比",component:e.jsx(C,{}),description:"全面对比不同解决方案的性能指标、功能特性和适用场景",observationPoints:["对比各方案的包大小对项目体积的影响","注意学习成本与项目复杂度的权衡","观察不同方案的功能覆盖范围","分析各方案的优势和劣势对项目的影响"],keyPoints:["包大小与功能丰富度通常成正比","学习成本需要与长期维护收益平衡","选择方案要考虑团队技能和项目需求","没有银弹，每种方案都有其适用场景"],importantTips:["小型项目可以选择传统封装或 SWR，避免过度工程化","大型应用推荐 React Query，其强大的缓存和状态管理能力值得学习成本","GraphQL 项目首选 Apollo Client，其专业性和生态完整性无可替代","团队技能和维护能力是选择技术方案的重要考虑因素"]}],a={concepts:["理解不同数据获取方案的核心理念和设计哲学","掌握各方案的优势、劣势和适用场景","学会根据项目需求选择合适的技术方案","了解现代前端应用中数据管理的最佳实践"],steps:["分析项目需求：数据复杂度、实时性要求、离线支持等","评估团队能力：技术栈熟悉度、学习意愿、维护能力","考虑技术约束：包大小限制、性能要求、兼容性需求","选择合适方案：权衡功能需求与实现复杂度","制定迁移计划：如果需要从传统方案升级到现代方案","建立最佳实践：统一团队的数据获取和状态管理规范"],tips:["从简单开始，根据需求逐步升级技术方案","重视开发体验，好的工具能显著提高开发效率","考虑长期维护成本，不要只看短期开发速度","保持技术方案的一致性，避免在同一项目中混用多种方案"]},t={questions:[{question:"如何选择合适的数据获取方案？",answer:"选择标准：1) 项目规模和复杂度 - 小项目用传统封装，大项目用 React Query；2) 团队技能水平 - 考虑学习成本和维护能力；3) 性能要求 - 是否需要缓存、离线支持、实时更新；4) 技术栈 - GraphQL 项目选 Apollo Client，REST API 选 React Query 或 SWR；5) 包大小限制 - 移动端或性能敏感应用考虑 SWR。"},{question:"React Query 相比传统方案有什么优势？",answer:"主要优势：1) 自动缓存管理 - 智能的缓存策略和失效机制；2) 后台更新 - 自动在后台刷新数据保持最新；3) 乐观更新 - 提供更好的用户体验；4) 错误处理 - 统一的错误处理和重试机制；5) 开发工具 - 强大的调试和监控功能；6) 减少样板代码 - 大幅简化异步状态管理。"},{question:"什么情况下应该使用传统封装而不是现代方案？",answer:"适用场景：1) 简单项目 - API 调用少且逻辑简单；2) 包大小敏感 - 对包体积有严格限制；3) 团队技能 - 团队不熟悉现代方案且学习时间有限；4) 特殊需求 - 需要完全自定义的缓存或状态管理逻辑；5) 遗留系统 - 与现有架构集成成本过高；6) 原型开发 - 快速验证想法的临时项目。"},{question:"如何处理不同数据获取方案的迁移？",answer:"迁移策略：1) 渐进式迁移 - 新功能使用新方案，旧功能逐步重构；2) 并行运行 - 两套方案同时存在，确保稳定性；3) 数据层抽象 - 建立统一的数据访问接口；4) 测试覆盖 - 确保迁移过程中功能正确性；5) 性能监控 - 对比迁移前后的性能指标；6) 团队培训 - 确保团队掌握新方案的使用方法。"}],keyPoints:["没有完美的解决方案，只有最适合的方案","技术选择要考虑项目全生命周期的成本","现代方案通常提供更好的开发体验和用户体验","团队技能和维护能力是技术选择的重要因素"]},d={dos:["根据项目实际需求选择技术方案，避免过度工程化","考虑团队的技术水平和学习能力","重视长期维护成本和技术债务","建立统一的数据获取和错误处理规范","使用 TypeScript 确保类型安全","实施渐进式迁移策略，降低风险","监控性能指标，持续优化用户体验","投资开发工具和调试环境"],donts:["不要盲目追求最新技术，忽视项目实际需求","不要在同一项目中混用多种数据获取方案","不要忽视包大小对性能的影响","不要低估现代方案的学习成本","不要在没有充分测试的情况下进行大规模迁移","不要忽视错误处理和边界情况","不要过度依赖第三方库而忽视基础知识"],patterns:["适配器模式（Adapter Pattern）：统一不同数据源的访问接口","策略模式（Strategy Pattern）：根据场景选择不同的数据获取策略","观察者模式（Observer Pattern）：实现数据变更的响应式更新","缓存模式（Cache Pattern）：实现智能的数据缓存和失效机制","重试模式（Retry Pattern）：处理网络错误和临时故障","断路器模式（Circuit Breaker Pattern）：防止级联故障","批处理模式（Batch Pattern）：优化多个请求的性能"]};return e.jsx(N,{title:"对比总结：传统封装 vs 现代解决方案",description:"全面对比传统 API 封装与 React Query、SWR、Apollo Client 等现代数据获取方案的优劣势、适用场景和选择策略。",overview:c,examples:u,tutorial:a,interview:t,bestPractices:d})};export{R as default};
