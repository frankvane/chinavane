import{r as g,j as e}from"./index-BWM6UHr8.js";import{c as z,C as Q}from"./ComponentTemplate-ClBHhBQ8.js";import{d as J}from"./middleware-CPUTVaT6.js";const V=n=>(a,t,s)=>n((...o)=>{const[c,...l]=o;return typeof c=="function"?c(a,t,s):a(...o)},t,s),y=(n,a)=>{switch(a.type){case"INCREMENT":return{...n,count:n.count+(a.payload||n.step),lastAction:"INCREMENT"};case"DECREMENT":return{...n,count:n.count-(a.payload||n.step),lastAction:"DECREMENT"};case"RESET":return{...n,count:0,lastAction:"RESET"};case"SET_STEP":return{...n,step:a.payload};case"SET_LOADING":return{...n,isLoading:a.payload};case"SET_ERROR":return{...n,error:a.payload};default:return n}},R=(n,a)=>{switch(a.type){case"LOGIN_START":return{...n,isLoading:!0,error:void 0};case"LOGIN_SUCCESS":return{...n,user:a.payload,isAuthenticated:!0,isLoading:!1,error:void 0};case"LOGIN_FAILURE":return{...n,user:void 0,isAuthenticated:!1,isLoading:!1,error:a.payload};case"LOGOUT":return{...n,user:void 0,isAuthenticated:!1,isLoading:!1,error:void 0};case"CLEAR_ERROR":return{...n,error:void 0};default:return n}},b=(n,a)=>{switch(a.type){case"FETCH_TODOS_START":return{...n,isLoading:!0,error:void 0};case"FETCH_TODOS_SUCCESS":return{...n,todos:a.payload,isLoading:!1,error:void 0};case"FETCH_TODOS_FAILURE":return{...n,isLoading:!1,error:a.payload};case"ADD_TODO":const t={id:Date.now().toString(),ext:a.payload,completed:!1,createdAt:new Date};return{...n,todos:[...n.todos,t]};case"TOGGLE_TODO":return{...n,todos:n.todos.map(s=>s.id===a.payload?{...s,completed:!s.completed}:s)};case"DELETE_TODO":return{...n,todos:n.todos.filter(s=>s.id!==a.payload)};case"SET_FILTER":return{...n,filter:a.payload};case"CLEAR_COMPLETED":return{...n,todos:n.todos.filter(s=>!s.completed)};default:return n}},Y=z()(J(V((n,a)=>({counter:{count:0,step:1,isLoading:!1},user:{isAuthenticated:!1,isLoading:!1},todos:{todos:[],filter:"all",isLoading:!1},incrementCounter:t=>{const s=a(),o=y(s.counter,{type:"INCREMENT",payload:t});n({counter:o})},decrementCounter:t=>{const s=a(),o=y(s.counter,{type:"DECREMENT",payload:t});n({counter:o})},resetCounter:()=>{const t=a(),s=y(t.counter,{type:"RESET"});n({counter:s})},setCounterStep:t=>{const s=a(),o=y(s.counter,{type:"SET_STEP",payload:t});n({counter:o})},asyncIncrement:async(t=1e3)=>{const s=a(),o=y(s.counter,{type:"SET_LOADING",payload:!0});n({counter:o});try{await new Promise(r=>setTimeout(r,t));const c=a(),l=y(c.counter,{type:"INCREMENT"});n({counter:{...l,isLoading:!1}})}catch{const l=a(),r=y(l.counter,{type:"SET_ERROR",payload:"异步操作失败"});n({counter:{...r,isLoading:!1}})}},loginUser:async t=>{const s=a(),o=R(s.user,{type:"LOGIN_START"});n({user:o});try{if(await new Promise(c=>setTimeout(c,1500)),t.username==="admin"&&t.password==="password"){const c=R(a().user,{type:"LOGIN_SUCCESS",payload:{id:"1",name:"管理员",email:"admin@example.com"}});n({user:c})}else throw new Error("用户名或密码错误")}catch(c){const l=R(a().user,{type:"LOGIN_FAILURE",payload:c instanceof Error?c.message:"登录失败"});n({user:l})}},logoutUser:()=>{const t=a(),s=R(t.user,{type:"LOGOUT"});n({user:s})},clearUserError:()=>{const t=a(),s=R(t.user,{type:"CLEAR_ERROR"});n({user:s})},fetchTodos:async()=>{const t=a(),s=b(t.todos,{type:"FETCH_TODOS_START"});n({todos:s});try{await new Promise(l=>setTimeout(l,1e3));const o=[{id:"1",ext:"学习 Zustand",completed:!1,createdAt:new Date},{id:"2",ext:"实现 Redux 中间件兼容",completed:!0,createdAt:new Date},{id:"3",ext:"编写测试用例",completed:!1,createdAt:new Date}],c=b(a().todos,{type:"FETCH_TODOS_SUCCESS",payload:o});n({todos:c})}catch(o){const c=b(a().todos,{type:"FETCH_TODOS_FAILURE",payload:o instanceof Error?o.message:"获取待办事项失败"});n({todos:c})}},addTodo:t=>{const s=a(),o=b(s.todos,{type:"ADD_TODO",payload:t});n({todos:o})},toggleTodo:t=>{const s=a(),o=b(s.todos,{type:"TOGGLE_TODO",payload:t});n({todos:o})},deleteTodo:t=>{const s=a(),o=b(s.todos,{type:"DELETE_TODO",payload:t});n({todos:o})},setTodoFilter:t=>{const s=a(),o=b(s.todos,{type:"SET_FILTER",payload:t});n({todos:o})},clearCompletedTodos:()=>{const t=a(),s=b(t.todos,{type:"CLEAR_COMPLETED"});n({todos:s})}})),{name:"thunk-store"})),X=n=>(a,t,s)=>{const o={effects:new Map,running:!1,takeEvery:(r,m)=>{o.effects.set(r,m),console.log(`[Saga] 注册 effect: ${r}`)},start:()=>{o.running=!0,console.log("[Saga] 启动")},stop:()=>{o.running=!1,console.log("[Saga] 停止")},handleAction:r=>{if(!o.running)return;console.log(`[Saga] 处理 action: ${r.type}`,r);const m=o.effects.get(r.type);m&&m(r,{getState:t,dispatch:a})}},l={...n(a,t,s)};return Object.keys(l).forEach(r=>{if(typeof l[r]=="function"&&!r.startsWith("_")&&!r.includes("Saga")){const m=l[r];l[r]=(...N)=>{const E=m(...N),C={type:r.toUpperCase(),payload:N[0]};return o.handleAction(C),E}}}),{...l,saga:o}},W=z()(J(X((n,a)=>({counter:{count:0,step:1,isLoading:!1},user:{isAuthenticated:!1,isLoading:!1},todos:{todos:[],filter:"all",isLoading:!1},incrementCounter:t=>{n(s=>({counter:{...s.counter,count:s.counter.count+(t||s.counter.step),lastAction:"INCREMENT"}}))},decrementCounter:t=>{n(s=>({counter:{...s.counter,count:s.counter.count-(t||s.counter.step),lastAction:"DECREMENT"}}))},resetCounter:()=>{n(t=>({counter:{...t.counter,count:0,lastAction:"RESET"}}))},setCounterStep:t=>{n(s=>({counter:{...s.counter,step:t}}))},asyncIncrement:async(t=1e3)=>{n(s=>({counter:{...s.counter,isLoading:!0}}));try{await new Promise(s=>setTimeout(s,t)),n(s=>({counter:{...s.counter,count:s.counter.count+s.counter.step,lastAction:"ASYNC_INCREMENT",isLoading:!1}}))}catch{n(o=>({counter:{...o.counter,error:"异步操作失败",isLoading:!1}}))}},loginUser:async t=>{n(s=>({user:{...s.user,isLoading:!0,error:void 0}}));try{if(await new Promise(s=>setTimeout(s,1500)),t.username==="admin"&&t.password==="password")n(s=>({user:{user:{id:"1",name:"管理员",email:"admin@example.com"},isAuthenticated:!0,isLoading:!1,error:void 0}}));else throw new Error("用户名或密码错误")}catch(s){n(o=>({user:{...o.user,user:void 0,isAuthenticated:!1,isLoading:!1,error:s instanceof Error?s.message:"登录失败"}}))}},logoutUser:()=>{n(t=>({user:{user:void 0,isAuthenticated:!1,isLoading:!1,error:void 0}}))},clearUserError:()=>{n(t=>({user:{...t.user,error:void 0}}))},fetchTodos:async()=>{n(t=>({todos:{...t.todos,isLoading:!0,error:void 0}}));try{await new Promise(s=>setTimeout(s,1e3));const t=[{id:"1",ext:"学习 Zustand Saga",completed:!1,createdAt:new Date},{id:"2",ext:"实现 Redux-Saga 兼容",completed:!0,createdAt:new Date},{id:"3",ext:"编写 Effect 测试",completed:!1,createdAt:new Date}];n(s=>({todos:{...s.todos,todos:t,isLoading:!1,error:void 0}}))}catch(t){n(s=>({todos:{...s.todos,isLoading:!1,error:t instanceof Error?t.message:"获取待办事项失败"}}))}},addTodo:t=>{const s={id:Date.now().toString(),ext:t,completed:!1,createdAt:new Date};n(o=>({todos:{...o.todos,todos:[...o.todos.todos,s]}}))},toggleTodo:t=>{n(s=>({todos:{...s.todos,todos:s.todos.todos.map(o=>o.id===t?{...o,completed:!o.completed}:o)}}))},deleteTodo:t=>{n(s=>({todos:{...s.todos,todos:s.todos.todos.filter(o=>o.id!==t)}}))},setTodoFilter:t=>{n(s=>({todos:{...s.todos,filter:t}}))},clearCompletedTodos:()=>{n(t=>({todos:{...t.todos,todos:t.todos.todos.filter(s=>!s.completed)}}))},startSaga:()=>{const t=a();t.saga&&t.saga.start()},stopSaga:()=>{const t=a();t.saga&&t.saga.stop()},registerEffect:(t,s)=>{const o=a();o.saga&&o.saga.takeEvery(t,s)}})),{name:"saga-store"})),ee=()=>{var c;const[n,a]=g.useState("comparison"),t=Y(),s=W(),o=[{feature:"异步操作处理",thunk:"使用 thunk 函数，直接处理异步逻辑",saga:"使用 effect，通过 takeEvery/takeLatest 处理",advantage:"Thunk 更简单直接，Saga 更灵活"},{feature:"副作用管理",thunk:"在 action creator 中直接处理",saga:"通过 effect 集中管理副作用",advantage:"Saga 更适合复杂的副作用场景"},{feature:"测试友好性",thunk:"容易测试，函数式编程",saga:"需要模拟 generator 函数",advantage:"Thunk 测试更简单"},{feature:"学习曲线",thunk:"学习成本低，概念简单",saga:"需要理解 generator 和 effect",advantage:"Thunk 更容易上手"},{feature:"调试体验",thunk:"调试简单，调用栈清晰",saga:"调试复杂，需要理解执行流程",advantage:"Thunk 调试更容易"},{feature:"取消操作",thunk:"需要手动实现取消逻辑",saga:"内置取消机制，支持 race",advantage:"Saga 取消操作更强大"},{feature:"并发控制",thunk:"需要手动管理并发",saga:"内置并发控制，支持 takeLatest",advantage:"Saga 并发控制更完善"},{feature:"代码组织",thunk:"逻辑分散在各个 action 中",saga:"集中管理，逻辑清晰",advantage:"Saga 代码组织更好"}];return e.jsxs("div",{className:"space-y-6",children:[e.jsxs("div",{className:"bg-white p-6 rounded-lg shadow",children:[e.jsxs("div",{className:"flex space-x-4 mb-4",children:[e.jsx("button",{onClick:()=>a("thunk"),className:`px-4 py-2 rounded ${n==="thunk"?"bg-blue-500 text-white":"bg-gray-200"}`,children:"Thunk 模式"}),e.jsx("button",{onClick:()=>a("saga"),className:`px-4 py-2 rounded ${n==="saga"?"bg-blue-500 text-white":"bg-gray-200"}`,children:"Saga 模式"}),e.jsx("button",{onClick:()=>a("comparison"),className:`px-4 py-2 rounded ${n==="comparison"?"bg-blue-500 text-white":"bg-gray-200"}`,children:"对比分析"})]}),n==="thunk"&&e.jsxs("div",{className:"space-y-4",children:[e.jsx("h3",{className:"text-lg font-semibold",children:"Thunk 模式特点"}),e.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-4",children:[e.jsxs("div",{className:"bg-green-50 p-4 rounded",children:[e.jsx("h4",{className:"font-medium text-green-800 mb-2",children:"优点"}),e.jsxs("ul",{className:"text-sm text-green-700 space-y-1",children:[e.jsx("li",{children:"• 学习成本低，概念简单"}),e.jsx("li",{children:"• 调试容易，调用栈清晰"}),e.jsx("li",{children:"• 测试友好，函数式编程"}),e.jsx("li",{children:"• 与现有代码集成简单"}),e.jsx("li",{children:"• 性能开销小"})]})]}),e.jsxs("div",{className:"bg-red-50 p-4 rounded",children:[e.jsx("h4",{className:"font-medium text-red-800 mb-2",children:"缺点"}),e.jsxs("ul",{className:"text-sm text-red-700 space-y-1",children:[e.jsx("li",{children:"• 复杂副作用难以管理"}),e.jsx("li",{children:"• 取消操作需要手动实现"}),e.jsx("li",{children:"• 并发控制需要额外处理"}),e.jsx("li",{children:"• 代码可能分散在各个地方"}),e.jsx("li",{children:"• 复杂场景下可维护性差"})]})]})]}),e.jsxs("div",{className:"bg-blue-50 p-4 rounded",children:[e.jsx("h4",{className:"font-medium text-blue-800 mb-2",children:"适用场景"}),e.jsx("p",{className:"text-sm text-blue-700",children:"简单的异步操作、API 调用、表单提交等场景。适合中小型项目或团队对 Redux 生态不熟悉的情况。"})]})]}),n==="saga"&&e.jsxs("div",{className:"space-y-4",children:[e.jsx("h3",{className:"text-lg font-semibold",children:"Saga 模式特点"}),e.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-4",children:[e.jsxs("div",{className:"bg-green-50 p-4 rounded",children:[e.jsx("h4",{className:"font-medium text-green-800 mb-2",children:"优点"}),e.jsxs("ul",{className:"text-sm text-green-700 space-y-1",children:[e.jsx("li",{children:"• 强大的副作用管理能力"}),e.jsx("li",{children:"• 内置取消和并发控制"}),e.jsx("li",{children:"• 代码组织清晰，逻辑集中"}),e.jsx("li",{children:"• 支持复杂的异步流程"}),e.jsx("li",{children:"• 可测试性强（虽然复杂）"})]})]}),e.jsxs("div",{className:"bg-red-50 p-4 rounded",children:[e.jsx("h4",{className:"font-medium text-red-800 mb-2",children:"缺点"}),e.jsxs("ul",{className:"text-sm text-red-700 space-y-1",children:[e.jsx("li",{children:"• 学习曲线陡峭"}),e.jsx("li",{children:"• 调试复杂，需要理解执行流程"}),e.jsx("li",{children:"• 需要理解 generator 函数"}),e.jsx("li",{children:"• 性能开销相对较大"}),e.jsx("li",{children:"• 过度工程化的风险"})]})]})]}),e.jsxs("div",{className:"bg-blue-50 p-4 rounded",children:[e.jsx("h4",{className:"font-medium text-blue-800 mb-2",children:"适用场景"}),e.jsx("p",{className:"text-sm text-blue-700",children:"复杂的异步流程、需要取消操作、并发控制、长时间运行的副作用等场景。适合大型项目或复杂业务逻辑。"})]})]}),n==="comparison"&&e.jsxs("div",{className:"space-y-4",children:[e.jsx("h3",{className:"text-lg font-semibold",children:"详细对比"}),e.jsx("div",{className:"overflow-x-auto",children:e.jsxs("table",{className:"w-full border-collapse border border-gray-300",children:[e.jsx("thead",{children:e.jsxs("tr",{className:"bg-gray-50",children:[e.jsx("th",{className:"border border-gray-300 px-4 py-2 text-left",children:"特性"}),e.jsx("th",{className:"border border-gray-300 px-4 py-2 text-left",children:"Thunk"}),e.jsx("th",{className:"border border-gray-300 px-4 py-2 text-left",children:"Saga"}),e.jsx("th",{className:"border border-gray-300 px-4 py-2 text-left",children:"优势"})]})}),e.jsx("tbody",{children:o.map((l,r)=>e.jsxs("tr",{className:r%2===0?"bg-white":"bg-gray-50",children:[e.jsx("td",{className:"border border-gray-300 px-4 py-2 font-medium",children:l.feature}),e.jsx("td",{className:"border border-gray-300 px-4 py-2 text-sm",children:l.thunk}),e.jsx("td",{className:"border border-gray-300 px-4 py-2 text-sm",children:l.saga}),e.jsx("td",{className:"border border-gray-300 px-4 py-2 text-sm text-blue-600",children:l.advantage})]},r))})]})})]})]}),e.jsxs("div",{className:"bg-white p-6 rounded-lg shadow",children:[e.jsx("h3",{className:"text-lg font-semibold mb-4",children:"实时状态对比"}),e.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-6",children:[e.jsxs("div",{className:"space-y-4",children:[e.jsx("h4",{className:"font-medium text-blue-600",children:"Thunk Store 状态"}),e.jsx("div",{className:"bg-gray-50 p-4 rounded",children:e.jsx("pre",{className:"text-sm overflow-x-auto",children:JSON.stringify({counter:t.counter,user:{isAuthenticated:t.user.isAuthenticated,isLoading:t.user.isLoading,hasError:!!t.user.error},todos:{count:t.todos.todos.length,filter:t.todos.filter,isLoading:t.todos.isLoading,hasError:!!t.todos.error}},null,2)})})]}),e.jsxs("div",{className:"space-y-4",children:[e.jsx("h4",{className:"font-medium text-green-600",children:"Saga Store 状态"}),e.jsx("div",{className:"bg-gray-50 p-4 rounded",children:e.jsx("pre",{className:"text-sm overflow-x-auto",children:JSON.stringify({counter:s.counter,user:{isAuthenticated:s.user.isAuthenticated,isLoading:s.user.isLoading,hasError:!!s.user.error},todos:{count:s.todos.todos.length,filter:s.todos.filter,isLoading:s.todos.isLoading,hasError:!!s.todos.error},saga:{running:((c=s.saga)==null?void 0:c.running)||!1}},null,2)})})]})]})]}),e.jsxs("div",{className:"bg-white p-6 rounded-lg shadow",children:[e.jsx("h3",{className:"text-lg font-semibold mb-4",children:"选择建议"}),e.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-6",children:[e.jsxs("div",{className:"bg-blue-50 p-4 rounded",children:[e.jsx("h4",{className:"font-medium text-blue-800 mb-2",children:"选择 Thunk 的情况"}),e.jsxs("ul",{className:"text-sm text-blue-700 space-y-1",children:[e.jsx("li",{children:"• 项目规模较小或中等"}),e.jsx("li",{children:"• 团队对 Redux 生态不熟悉"}),e.jsx("li",{children:"• 异步操作相对简单"}),e.jsx("li",{children:"• 需要快速开发和迭代"}),e.jsx("li",{children:"• 对性能要求较高"}),e.jsx("li",{children:"• 调试和测试要求简单"})]})]}),e.jsxs("div",{className:"bg-green-50 p-4 rounded",children:[e.jsx("h4",{className:"font-medium text-green-800 mb-2",children:"选择 Saga 的情况"}),e.jsxs("ul",{className:"text-sm text-green-700 space-y-1",children:[e.jsx("li",{children:"• 项目规模较大且复杂"}),e.jsx("li",{children:"• 需要复杂的异步流程控制"}),e.jsx("li",{children:"• 需要取消操作和并发控制"}),e.jsx("li",{children:"• 团队有 Redux 生态经验"}),e.jsx("li",{children:"• 需要长时间运行的副作用"}),e.jsx("li",{children:"• 对代码组织有较高要求"})]})]})]})]})]})},te=()=>{var $,H;const{counter:n,user:a,todos:t,incrementCounter:s,decrementCounter:o,resetCounter:c,setCounterStep:l,asyncIncrement:r,loginUser:m,logoutUser:N,clearUserError:E,fetchTodos:A,addTodo:C,toggleTodo:U,deleteTodo:I,setTodoFilter:f,clearCompletedTodos:F,startSaga:S,stopSaga:j,registerEffect:x,saga:i}=W(),[k,M]=g.useState(1),[v,O]=g.useState(""),[D,_]=g.useState(""),[T,u]=g.useState(""),[G,L]=g.useState([]);g.useEffect(()=>(i&&(console.log("[SagaDemo] 注册 effects"),x("INCREMENTCOUNTER",(d,{getState:w})=>{const p=`[Effect] 计数器增加: ${w().counter.count}`;console.log(p),L(h=>[...h,p])}),x("LOGINUSER",(d,{getState:w})=>{var h;const p=`[Effect] 用户登录尝试: ${((h=d.payload)==null?void 0:h.username)||"未知用户"}`;console.log(p),L(K=>[...K,p])}),x("ADDTODO",(d,{getState:w})=>{const p=`[Effect] 添加待办事项: ${d.payload}`;console.log(p),L(h=>[...h,p])}),x("ASYNCINCREMENT",(d,{getState:w})=>{const p="[Effect] 异步计数器操作开始";console.log(p),L(h=>[...h,p])}),S()),()=>{i&&j()}),[i,x,S,j]);const B=t.todos.filter(d=>{switch(t.filter){case"active":return!d.completed;case"completed":return d.completed;default:return!0}});return e.jsxs("div",{className:"space-y-6",children:[e.jsxs("div",{className:"bg-white p-6 rounded-lg shadow",children:[e.jsx("h3",{className:"text-lg font-semibold mb-4",children:"Saga 控制面板"}),e.jsxs("div",{className:"space-y-4",children:[e.jsxs("div",{className:"flex items-center space-x-4",children:[e.jsx("span",{className:"text-sm",children:"Saga 状态:"}),e.jsx("span",{className:`px-2 py-1 rounded text-sm ${i!=null&&i.running?"bg-green-100 text-green-800":"bg-red-100 text-red-800"}`,children:i!=null&&i.running?"运行中":"已停止"}),e.jsx("button",{onClick:i!=null&&i.running?j:S,className:`px-3 py-1 rounded text-sm ${i!=null&&i.running?"bg-red-500 text-white hover:bg-red-600":"bg-green-500 text-white hover:bg-green-600"}`,children:i!=null&&i.running?"停止":"启动"})]}),e.jsxs("div",{className:"space-y-2",children:[e.jsx("h4",{className:"font-medium",children:"Effect 日志:"}),e.jsx("div",{className:"bg-gray-100 p-3 rounded max-h-32 overflow-y-auto",children:G.length===0?e.jsx("p",{className:"text-gray-500 text-sm",children:"暂无日志"}):G.map((d,w)=>e.jsx("div",{className:"text-sm font-mono",children:d},w))}),e.jsx("button",{onClick:()=>L([]),className:"px-3 py-1 bg-gray-500 text-white rounded hover:bg-gray-600 text-sm",children:"清空日志"})]})]})]}),e.jsxs("div",{className:"bg-white p-6 rounded-lg shadow",children:[e.jsx("h3",{className:"text-lg font-semibold mb-4",children:"计数器 (Saga 模式)"}),e.jsxs("div",{className:"space-y-4",children:[e.jsxs("div",{className:"flex items-center space-x-4",children:[e.jsxs("span",{className:"text-2xl font-bold",children:["计数: ",n.count]}),n.isLoading&&e.jsx("span",{className:"text-blue-500",children:"加载中..."}),n.error&&e.jsx("span",{className:"text-red-500",children:n.error})]}),e.jsxs("div",{className:"flex items-center space-x-2",children:[e.jsx("label",{className:"text-sm",children:"步长:"}),e.jsx("input",{type:"number",value:k,onChange:d=>M(Number(d.target.value)),className:"border rounded px-2 py-1 w-20"}),e.jsx("button",{onClick:()=>l(k),className:"px-3 py-1 bg-blue-500 text-white rounded hover:bg-blue-600",children:"设置步长"})]}),e.jsxs("div",{className:"flex space-x-2",children:[e.jsxs("button",{onClick:()=>s(),className:"px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600",children:["+",n.step]}),e.jsxs("button",{onClick:()=>o(),className:"px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600",children:["-",n.step]}),e.jsx("button",{onClick:()=>c(),className:"px-4 py-2 bg-gray-500 text-white rounded hover:bg-gray-600",children:"重置"}),e.jsxs("button",{onClick:()=>r(2e3),className:"px-4 py-2 bg-purple-500 text-white rounded hover:bg-purple-600",children:["异步 +",n.step," (2秒)"]})]}),n.lastAction&&e.jsxs("p",{className:"text-sm text-gray-600",children:["最后操作: ",n.lastAction]})]})]}),e.jsxs("div",{className:"bg-white p-6 rounded-lg shadow",children:[e.jsx("h3",{className:"text-lg font-semibold mb-4",children:"用户认证 (Saga 模式)"}),e.jsx("div",{className:"space-y-4",children:a.isAuthenticated?e.jsxs("div",{className:"space-y-2",children:[e.jsxs("p",{className:"text-green-600",children:["已登录: ",($=a.user)==null?void 0:$.name]}),e.jsxs("p",{className:"text-sm text-gray-600",children:["邮箱: ",(H=a.user)==null?void 0:H.email]}),e.jsx("button",{onClick:N,className:"px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600",children:"登出"})]}):e.jsxs("div",{className:"space-y-4",children:[e.jsxs("div",{className:"space-y-2",children:[e.jsx("input",{type:"text",placeholder:"用户名",value:v,onChange:d=>O(d.target.value),className:"w-full border rounded px-3 py-2"}),e.jsx("input",{type:"password",placeholder:"密码",value:D,onChange:d=>_(d.target.value),className:"w-full border rounded px-3 py-2"})]}),e.jsxs("div",{className:"flex space-x-2",children:[e.jsx("button",{onClick:()=>m({username:v,password:D}),disabled:a.isLoading,className:"px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 disabled:opacity-50",children:a.isLoading?"登录中...":"登录"}),a.error&&e.jsx("button",{onClick:E,className:"px-4 py-2 bg-gray-500 text-white rounded hover:bg-gray-600",children:"清除错误"})]}),a.error&&e.jsx("p",{className:"text-red-500 text-sm",children:a.error}),e.jsx("p",{className:"text-sm text-gray-600",children:"测试账号: admin / password"})]})})]}),e.jsxs("div",{className:"bg-white p-6 rounded-lg shadow",children:[e.jsx("h3",{className:"text-lg font-semibold mb-4",children:"待办事项 (Saga 模式)"}),e.jsxs("div",{className:"space-y-4",children:[e.jsxs("div",{className:"flex space-x-2",children:[e.jsx("button",{onClick:A,disabled:t.isLoading,className:"px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 disabled:opacity-50",children:t.isLoading?"加载中...":"获取待办事项"}),e.jsx("button",{onClick:F,className:"px-4 py-2 bg-orange-500 text-white rounded hover:bg-orange-600",children:"清除已完成"})]}),e.jsxs("div",{className:"flex space-x-2",children:[e.jsx("input",{type:"text",placeholder:"添加新待办事项",value:T,onChange:d=>u(d.target.value),className:"flex-1 border rounded px-3 py-2"}),e.jsx("button",{onClick:()=>{T.trim()&&(C(T.trim()),u(""))},className:"px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600",children:"添加"})]}),e.jsxs("div",{className:"flex space-x-2",children:[e.jsx("button",{onClick:()=>f("all"),className:`px-3 py-1 rounded ${t.filter==="all"?"bg-blue-500 text-white":"bg-gray-200"}`,children:"全部"}),e.jsx("button",{onClick:()=>f("active"),className:`px-3 py-1 rounded ${t.filter==="active"?"bg-blue-500 text-white":"bg-gray-200"}`,children:"进行中"}),e.jsx("button",{onClick:()=>f("completed"),className:`px-3 py-1 rounded ${t.filter==="completed"?"bg-blue-500 text-white":"bg-gray-200"}`,children:"已完成"})]}),t.error&&e.jsx("p",{className:"text-red-500 text-sm",children:t.error}),e.jsx("div",{className:"space-y-2",children:B.map(d=>e.jsxs("div",{className:"flex items-center space-x-2 p-2 border rounded",children:[e.jsx("input",{type:"checkbox",checked:d.completed,onChange:()=>U(d.id),className:"rounded"}),e.jsx("span",{className:`flex-1 ${d.completed?"line-through text-gray-500":""}`,children:d.ext}),e.jsx("button",{onClick:()=>I(d.id),className:"px-2 py-1 bg-red-500 text-white rounded hover:bg-red-600 text-sm",children:"删除"})]},d.id))})]})]})]})},ne=()=>{var _,T;const{counter:n,user:a,todos:t,incrementCounter:s,decrementCounter:o,resetCounter:c,setCounterStep:l,asyncIncrement:r,loginUser:m,logoutUser:N,clearUserError:E,fetchTodos:A,addTodo:C,toggleTodo:U,deleteTodo:I,setTodoFilter:f,clearCompletedTodos:F}=Y(),[S,j]=g.useState(1),[x,i]=g.useState(""),[k,M]=g.useState(""),[v,O]=g.useState(""),D=t.todos.filter(u=>{switch(t.filter){case"active":return!u.completed;case"completed":return u.completed;default:return!0}});return e.jsxs("div",{className:"space-y-6",children:[e.jsxs("div",{className:"bg-white p-6 rounded-lg shadow",children:[e.jsx("h3",{className:"text-lg font-semibold mb-4",children:"计数器 (Thunk 模式)"}),e.jsxs("div",{className:"space-y-4",children:[e.jsxs("div",{className:"flex items-center space-x-4",children:[e.jsxs("span",{className:"text-2xl font-bold",children:["计数: ",n.count]}),n.isLoading&&e.jsx("span",{className:"text-blue-500",children:"加载中..."}),n.error&&e.jsx("span",{className:"text-red-500",children:n.error})]}),e.jsxs("div",{className:"flex items-center space-x-2",children:[e.jsx("label",{className:"text-sm",children:"步长:"}),e.jsx("input",{type:"number",value:S,onChange:u=>j(Number(u.target.value)),className:"border rounded px-2 py-1 w-20"}),e.jsx("button",{onClick:()=>l(S),className:"px-3 py-1 bg-blue-500 text-white rounded hover:bg-blue-600",children:"设置步长"})]}),e.jsxs("div",{className:"flex spae-x-2",children:[e.jsxs("button",{onClick:()=>s(),className:"px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600",children:["+",n.step]}),e.jsxs("button",{onClick:()=>o(),className:"px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600",children:["-",n.step]}),e.jsx("button",{onClick:()=>c(),className:"px-4 py-2 bg-gray-500 text-white rounded hover:bg-gray-600",children:"重置"}),e.jsxs("button",{onClick:()=>r(2e3),className:"px-4 py-2 bg-purple-500 text-white rounded hover:bg-purple-600",children:["异步 +",n.step," (2秒)"]})]}),n.lastAction&&e.jsxs("p",{className:"text-sm text-gray-600",children:["最后操作: ",n.lastAction]})]})]}),e.jsxs("div",{className:"bg-white p-6 rounded-lg shadow",children:[e.jsx("h3",{className:"text-lg font-semibold mb-4",children:"用户认证 (Thunk 模式)"}),e.jsx("div",{className:"space-y-4",children:a.isAuthenticated?e.jsxs("div",{className:"space-y-2",children:[e.jsxs("p",{className:"text-green-600",children:["已登录: ",(_=a.user)==null?void 0:_.name]}),e.jsxs("p",{className:"text-sm text-gray-600",children:["邮箱: ",(T=a.user)==null?void 0:T.email]}),e.jsx("button",{onClick:N,className:"px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600",children:"登出"})]}):e.jsxs("div",{className:"space-y-4",children:[e.jsxs("div",{className:"space-y-2",children:[e.jsx("input",{type:"text",placeholder:"用户名",value:x,onChange:u=>i(u.target.value),className:"w-full border rounded px-3 py-2"}),e.jsx("input",{type:"password",placeholder:"密码",value:k,onChange:u=>M(u.target.value),className:"w-full border rounded px-3 py-2"})]}),e.jsxs("div",{className:"flex space-x-2",children:[e.jsx("button",{onClick:()=>m({username:x,password:k}),disabled:a.isLoading,className:"px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 disabled:opacity-50",children:a.isLoading?"登录中...":"登录"}),a.error&&e.jsx("button",{onClick:E,className:"px-4 py-2 bg-gray-500 text-white rounded hover:bg-gray-600",children:"清除错误"})]}),a.error&&e.jsx("p",{className:"text-red-500 text-sm",children:a.error}),e.jsx("p",{className:"text-sm text-gray-600",children:"测试账号: admin / password"})]})})]}),e.jsxs("div",{className:"bg-white p-6 rounded-lg shadow",children:[e.jsx("h3",{className:"text-lg font-semibold mb-4",children:"待办事项 (Thunk 模式)"}),e.jsxs("div",{className:"space-y-4",children:[e.jsxs("div",{className:"flex space-x-2",children:[e.jsx("button",{onClick:A,disabled:t.isLoading,className:"px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 disabled:opacity-50",children:t.isLoading?"加载中...":"获取待办事项"}),e.jsx("button",{onClick:F,className:"px-4 py-2 bg-orange-500 text-white rounded hover:bg-orange-600",children:"清除已完成"})]}),e.jsxs("div",{className:"flex space-x-2",children:[e.jsx("input",{type:"text",placeholder:"添加新待办事项",value:v,onChange:u=>O(u.target.value),className:"flex-1 border rounded px-3 py-2"}),e.jsx("button",{onClick:()=>{v.trim()&&(C(v.trim()),O(""))},className:"px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600",children:"添加"})]}),e.jsxs("div",{className:"flex space-x-2",children:[e.jsx("button",{onClick:()=>f("all"),className:`px-3 py-1 rounded ${t.filter==="all"?"bg-blue-500 text-white":"bg-gray-200"}`,children:"全部"}),e.jsx("button",{onClick:()=>f("active"),className:`px-3 py-1 rounded ${t.filter==="active"?"bg-blue-500 text-white":"bg-gray-200"}`,children:"进行中"}),e.jsx("button",{onClick:()=>f("completed"),className:`px-3 py-1 rounded ${t.filter==="completed"?"bg-blue-500 text-white":"bg-gray-200"}`,children:"已完成"})]}),t.error&&e.jsx("p",{className:"text-red-500 text-sm",children:t.error}),e.jsx("div",{className:"space-y-2",children:D.map(u=>e.jsxs("div",{className:"flex items-center space-x-2 p-2 border rounded",children:[e.jsx("input",{type:"checkbox",checked:u.completed,onChange:()=>U(u.id),className:"rounded"}),e.jsx("span",{className:`flex-1 ${u.completed?"line-through text-gray-500":""}`,children:u.ext}),e.jsx("button",{onClick:()=>I(u.id),className:"px-2 py-1 bg-red-500 text-white rounded hover:bg-red-600 text-sm",children:"删除"})]},u.id))})]})]})]})},se=`import React, { useState } from 'react';
import { useThunkStore } from '../stores/thunkStore';
import { useSagaStore } from '../stores/sagaStore';

const MiddlewareComparisonDemo: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'thunk' | 'saga' | 'comparison'>('comparison');
  
  const thunkStore = useThunkStore();
  const sagaStore = useSagaStore();

  const comparisonData = [
    {
      feature: '异步操作处理',
      thunk: '使用 thunk 函数，直接处理异步逻辑',
      saga: '使用 effect，通过 takeEvery/takeLatest 处理',
      advantage: 'Thunk 更简单直接，Saga 更灵活'
    },
    {
      feature: '副作用管理',
      thunk: '在 action creator 中直接处理',
      saga: '通过 effect 集中管理副作用',
      advantage: 'Saga 更适合复杂的副作用场景'
    },
    {
      feature: '测试友好性',
      thunk: '容易测试，函数式编程',
      saga: '需要模拟 generator 函数',
      advantage: 'Thunk 测试更简单'
    },
    {
      feature: '学习曲线',
      thunk: '学习成本低，概念简单',
      saga: '需要理解 generator 和 effect',
      advantage: 'Thunk 更容易上手'
    },
    {
      feature: '调试体验',
      thunk: '调试简单，调用栈清晰',
      saga: '调试复杂，需要理解执行流程',
      advantage: 'Thunk 调试更容易'
    },
    {
      feature: '取消操作',
      thunk: '需要手动实现取消逻辑',
      saga: '内置取消机制，支持 race',
      advantage: 'Saga 取消操作更强大'
    },
    {
      feature: '并发控制',
      thunk: '需要手动管理并发',
      saga: '内置并发控制，支持 takeLatest',
      advantage: 'Saga 并发控制更完善'
    },
    {
      feature: '代码组织',
      thunk: '逻辑分散在各个 action 中',
      saga: '集中管理，逻辑清晰',
      advantage: 'Saga 代码组织更好'
    }
  ];

  return (
    <div className="space-y-6">
      {/* 标签页切换 */}
      <div className="bg-white p-6 rounded-lg shadow">
        <div className="flex space-x-4 mb-4">
          <button
            onClick={() => setActiveTab('thunk')}
            className={\`px-4 py-2 rounded \${
              activeTab === 'thunk' ? 'bg-blue-500 text-white' : 'bg-gray-200'
            }\`}
          >
            Thunk 模式
          </button>
          <button
            onClick={() => setActiveTab('saga')}
            className={\`px-4 py-2 rounded \${
              activeTab === 'saga' ? 'bg-blue-500 text-white' : 'bg-gray-200'
            }\`}
          >
            Saga 模式
          </button>
          <button
            onClick={() => setActiveTab('comparison')}
            className={\`px-4 py-2 rounded \${
              activeTab === 'comparison' ? 'bg-blue-500 text-white' : 'bg-gray-200'
            }\`}
          >
            对比分析
          </button>
        </div>

        {activeTab === 'thunk' && (
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Thunk 模式特点</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="bg-green-50 p-4 rounded">
                <h4 className="font-medium text-green-800 mb-2">优点</h4>
                <ul className="text-sm text-green-700 space-y-1">
                  <li>• 学习成本低，概念简单</li>
                  <li>• 调试容易，调用栈清晰</li>
                  <li>• 测试友好，函数式编程</li>
                  <li>• 与现有代码集成简单</li>
                  <li>• 性能开销小</li>
                </ul>
              </div>
              <div className="bg-red-50 p-4 rounded">
                <h4 className="font-medium text-red-800 mb-2">缺点</h4>
                <ul className="text-sm text-red-700 space-y-1">
                  <li>• 复杂副作用难以管理</li>
                  <li>• 取消操作需要手动实现</li>
                  <li>• 并发控制需要额外处理</li>
                  <li>• 代码可能分散在各个地方</li>
                  <li>• 复杂场景下可维护性差</li>
                </ul>
              </div>
            </div>
            
            <div className="bg-blue-50 p-4 rounded">
              <h4 className="font-medium text-blue-800 mb-2">适用场景</h4>
              <p className="text-sm text-blue-700">
                简单的异步操作、API 调用、表单提交等场景。适合中小型项目或团队对 Redux 生态不熟悉的情况。
              </p>
            </div>
          </div>
        )}

        {activeTab === 'saga' && (
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Saga 模式特点</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="bg-green-50 p-4 rounded">
                <h4 className="font-medium text-green-800 mb-2">优点</h4>
                <ul className="text-sm text-green-700 space-y-1">
                  <li>• 强大的副作用管理能力</li>
                  <li>• 内置取消和并发控制</li>
                  <li>• 代码组织清晰，逻辑集中</li>
                  <li>• 支持复杂的异步流程</li>
                  <li>• 可测试性强（虽然复杂）</li>
                </ul>
              </div>
              <div className="bg-red-50 p-4 rounded">
                <h4 className="font-medium text-red-800 mb-2">缺点</h4>
                <ul className="text-sm text-red-700 space-y-1">
                  <li>• 学习曲线陡峭</li>
                  <li>• 调试复杂，需要理解执行流程</li>
                  <li>• 需要理解 generator 函数</li>
                  <li>• 性能开销相对较大</li>
                  <li>• 过度工程化的风险</li>
                </ul>
              </div>
            </div>
            
            <div className="bg-blue-50 p-4 rounded">
              <h4 className="font-medium text-blue-800 mb-2">适用场景</h4>
              <p className="text-sm text-blue-700">
                复杂的异步流程、需要取消操作、并发控制、长时间运行的副作用等场景。适合大型项目或复杂业务逻辑。
              </p>
            </div>
          </div>
        )}

        {activeTab === 'comparison' && (
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">详细对比</h3>
            <div className="overflow-x-auto">
              <table className="w-full border-collapse border border-gray-300">
                <thead>
                  <tr className="bg-gray-50">
                    <th className="border border-gray-300 px-4 py-2 text-left">特性</th>
                    <th className="border border-gray-300 px-4 py-2 text-left">Thunk</th>
                    <th className="border border-gray-300 px-4 py-2 text-left">Saga</th>
                    <th className="border border-gray-300 px-4 py-2 text-left">优势</th>
                  </tr>
                </thead>
                <tbody>
                  {comparisonData.map((item, index) => (
                    <tr key={index} className={index % 2 === 0 ? 'bg-white' : 'bg-gray-50'}>
                      <td className="border border-gray-300 px-4 py-2 font-medium">
                        {item.feature}
                      </td>
                      <td className="border border-gray-300 px-4 py-2 text-sm">
                        {item.thunk}
                      </td>
                      <td className="border border-gray-300 px-4 py-2 text-sm">
                        {item.saga}
                      </td>
                      <td className="border border-gray-300 px-4 py-2 text-sm text-blue-600">
                        {item.advantage}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        )}
      </div>

      {/* 实时状态对比 */}
      <div className="bg-white p-6 rounded-lg shadow">
        <h3 className="text-lg font-semibold mb-4">实时状态对比</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="space-y-4">
            <h4 className="font-medium text-blue-600">Thunk Store 状态</h4>
            <div className="bg-gray-50 p-4 rounded">
              <pre className="text-sm overflow-x-auto">
                {JSON.stringify({
                  counter: thunkStore.counter,
                  user: {
                    isAuthenticated: thunkStore.user.isAuthenticated,
                    isLoading: thunkStore.user.isLoading,
                    hasError: !!thunkStore.user.error
                  },
                  todos: {
                    count: thunkStore.todos.todos.length,
                    filter: thunkStore.todos.filter,
                    isLoading: thunkStore.todos.isLoading,
                    hasError: !!thunkStore.todos.error
                  }
                }, null, 2)}
              </pre>
            </div>
          </div>
          
          <div className="space-y-4">
            <h4 className="font-medium text-green-600">Saga Store 状态</h4>
            <div className="bg-gray-50 p-4 rounded">
              <pre className="text-sm overflow-x-auto">
                {JSON.stringify({
                  counter: sagaStore.counter,
                  user: {
                    isAuthenticated: sagaStore.user.isAuthenticated,
                    isLoading: sagaStore.user.isLoading,
                    hasError: !!sagaStore.user.error
                  },
                  todos: {
                    count: sagaStore.todos.todos.length,
                    filter: sagaStore.todos.filter,
                    isLoading: sagaStore.todos.isLoading,
                    hasError: !!sagaStore.todos.error
                  },
                  saga: {
                    running: sagaStore.saga?.running || false
                  }
                }, null, 2)}
              </pre>
            </div>
          </div>
        </div>
      </div>

      {/* 选择建议 */}
      <div className="bg-white p-6 rounded-lg shadow">
        <h3 className="text-lg font-semibold mb-4">选择建议</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-blue-50 p-4 rounded">
            <h4 className="font-medium text-blue-800 mb-2">选择 Thunk 的情况</h4>
            <ul className="text-sm text-blue-700 space-y-1">
              <li>• 项目规模较小或中等</li>
              <li>• 团队对 Redux 生态不熟悉</li>
              <li>• 异步操作相对简单</li>
              <li>• 需要快速开发和迭代</li>
              <li>• 对性能要求较高</li>
              <li>• 调试和测试要求简单</li>
            </ul>
          </div>
          
          <div className="bg-green-50 p-4 rounded">
            <h4 className="font-medium text-green-800 mb-2">选择 Saga 的情况</h4>
            <ul className="text-sm text-green-700 space-y-1">
              <li>• 项目规模较大且复杂</li>
              <li>• 需要复杂的异步流程控制</li>
              <li>• 需要取消操作和并发控制</li>
              <li>• 团队有 Redux 生态经验</li>
              <li>• 需要长时间运行的副作用</li>
              <li>• 对代码组织有较高要求</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MiddlewareComparisonDemo;
`,ae=`import React, { useState, useEffect } from 'react';
import { useSagaStore } from '../stores/sagaStore';

const SagaDemo: React.FC = () => {
  const {
    counter,
    user,
    todos,
    incrementCounter,
    decrementCounter,
    resetCounter,
    setCounterStep,
    asyncIncrement,
    loginUser,
    logoutUser,
    clearUserError,
    fetchTodos,
    addTodo,
    toggleTodo,
    deleteTodo,
    setTodoFilter,
    clearCompletedTodos,
    startSaga,
    stopSaga,
    registerEffect,
    saga,
  } = useSagaStore();

  const [step, setStep] = useState(1);
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [newTodo, setNewTodo] = useState('');
  const [effectLog, setEffectLog] = useState<string[]>([]);

  // 注册 effects
  useEffect(() => {
    if (saga) {
      console.log('[SagaDemo] 注册 effects');
      
      // 注册计数器 effect - 修复 action 类型匹配
      registerEffect('INCREMENTCOUNTER', (action: any, { getState }: any) => {
        const log = \`[Effect] 计数器增加: \${getState().counter.count}\`;
        console.log(log);
        setEffectLog(prev => [...prev, log]);
      });

      // 注册用户登录 effect
      registerEffect('LOGINUSER', (action: any, { getState }: any) => {
        const log = \`[Effect] 用户登录尝试: \${action.payload?.username || '未知用户'}\`;
        console.log(log);
        setEffectLog(prev => [...prev, log]);
      });

      // 注册待办事项 effect
      registerEffect('ADDTODO', (action: any, { getState }: any) => {
        const log = \`[Effect] 添加待办事项: \${action.payload}\`;
        console.log(log);
        setEffectLog(prev => [...prev, log]);
      });

      // 注册异步操作 effect
      registerEffect('ASYNCINCREMENT', (action: any, { getState }: any) => {
        const log = \`[Effect] 异步计数器操作开始\`;
        console.log(log);
        setEffectLog(prev => [...prev, log]);
      });

      // 启动 saga
      startSaga();
    }

    return () => {
      if (saga) {
        stopSaga();
      }
    };
  }, [saga, registerEffect, startSaga, stopSaga]);

  const filteredTodos = todos.todos.filter(todo => {
    switch (todos.filter) {
      case 'active':
        return !todo.completed;
      case 'completed':
        return todo.completed;
      default:
        return true;
    }
  });

  return (
    <div className="space-y-6">
      {/* Saga 控制面板 */}
      <div className="bg-white p-6 rounded-lg shadow">
        <h3 className="text-lg font-semibold mb-4">Saga 控制面板</h3>
        <div className="space-y-4">
          <div className="flex items-center space-x-4">
            <span className="text-sm">Saga 状态:</span>
            <span className={\`px-2 py-1 rounded text-sm \${
              saga?.running ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'
            }\`}>
              {saga?.running ? '运行中' : '已停止'}
            </span>
            <button
              onClick={saga?.running ? stopSaga : startSaga}
              className={\`px-3 py-1 rounded text-sm \${
                saga?.running 
                  ? 'bg-red-500 text-white hover:bg-red-600' 
                  : 'bg-green-500 text-white hover:bg-green-600'
              }\`}
            >
              {saga?.running ? '停止' : '启动'}
            </button>
          </div>
          
          <div className="space-y-2">
            <h4 className="font-medium">Effect 日志:</h4>
            <div className="bg-gray-100 p-3 rounded max-h-32 overflow-y-auto">
              {effectLog.length === 0 ? (
                <p className="text-gray-500 text-sm">暂无日志</p>
              ) : (
                effectLog.map((log, index) => (
                  <div key={index} className="text-sm font-mono">
                    {log}
                  </div>
                ))
              )}
            </div>
            <button
              onClick={() => setEffectLog([])}
              className="px-3 py-1 bg-gray-500 text-white rounded hover:bg-gray-600 text-sm"
            >
              清空日志
            </button>
          </div>
        </div>
      </div>

      {/* 计数器部分 */}
      <div className="bg-white p-6 rounded-lg shadow">
        <h3 className="text-lg font-semibold mb-4">计数器 (Saga 模式)</h3>
        <div className="space-y-4">
          <div className="flex items-center space-x-4">
            <span className="text-2xl font-bold">计数: {counter.count}</span>
            {counter.isLoading && <span className="text-blue-500">加载中...</span>}
            {counter.error && <span className="text-red-500">{counter.error}</span>}
          </div>
          
          <div className="flex items-center space-x-2">
            <label className="text-sm">步长:</label>
            <input
              type="number"
              value={step}
              onChange={(e) => setStep(Number(e.target.value))}
              className="border rounded px-2 py-1 w-20"
            />
            <button
              onClick={() => setCounterStep(step)}
              className="px-3 py-1 bg-blue-500 text-white rounded hover:bg-blue-600"
            >
              设置步长
            </button>
          </div>

          <div className="flex space-x-2">
            <button
              onClick={() => incrementCounter()}
              className="px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600"
            >
              +{counter.step}
            </button>
            <button
              onClick={() => decrementCounter()}
              className="px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600"
            >
              -{counter.step}
            </button>
            <button
              onClick={() => resetCounter()}
              className="px-4 py-2 bg-gray-500 text-white rounded hover:bg-gray-600"
            >
              重置
            </button>
            <button
              onClick={() => asyncIncrement(2000)}
              className="px-4 py-2 bg-purple-500 text-white rounded hover:bg-purple-600"
            >
              异步 +{counter.step} (2秒)
            </button>
          </div>
          
          {counter.lastAction && (
            <p className="text-sm text-gray-600">最后操作: {counter.lastAction}</p>
          )}
        </div>
      </div>

      {/* 用户认证部分 */}
      <div className="bg-white p-6 rounded-lg shadow">
        <h3 className="text-lg font-semibold mb-4">用户认证 (Saga 模式)</h3>
        <div className="space-y-4">
          {user.isAuthenticated ? (
            <div className="space-y-2">
              <p className="text-green-600">已登录: {user.user?.name}</p>
              <p className="text-sm text-gray-600">邮箱: {user.user?.email}</p>
              <button
                onClick={logoutUser}
                className="px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600"
              >
                登出
              </button>
            </div>
          ) : (
            <div className="space-y-4">
              <div className="space-y-2">
                <input
                  type="text"
                  placeholder="用户名"
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                  className="w-full border rounded px-3 py-2"
                />
                <input
                  type="password"
                  placeholder="密码"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="w-full border rounded px-3 py-2"
                />
              </div>
              <div className="flex space-x-2">
                <button
                  onClick={() => loginUser({ username, password })}
                  disabled={user.isLoading}
                  className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 disabled:opacity-50"
                >
                  {user.isLoading ? '登录中...' : '登录'}
                </button>
                {user.error && (
                  <button
                    onClick={clearUserError}
                    className="px-4 py-2 bg-gray-500 text-white rounded hover:bg-gray-600"
                  >
                    清除错误
                  </button>
                )}
              </div>
              {user.error && (
                <p className="text-red-500 text-sm">{user.error}</p>
              )}
              <p className="text-sm text-gray-600">
                测试账号: admin / password
              </p>
            </div>
          )}
        </div>
      </div>

      {/* 待办事项部分 */}
      <div className="bg-white p-6 rounded-lg shadow">
        <h3 className="text-lg font-semibold mb-4">待办事项 (Saga 模式)</h3>
        <div className="space-y-4">
          <div className="flex space-x-2">
            <button
              onClick={fetchTodos}
              disabled={todos.isLoading}
              className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 disabled:opacity-50"
            >
              {todos.isLoading ? '加载中...' : '获取待办事项'}
            </button>
            <button
              onClick={clearCompletedTodos}
              className="px-4 py-2 bg-orange-500 text-white rounded hover:bg-orange-600"
            >
              清除已完成
            </button>
          </div>

          <div className="flex space-x-2">
            <input
              type="text"
              placeholder="添加新待办事项"
              value={newTodo}
              onChange={(e) => setNewTodo(e.target.value)}
              className="flex-1 border rounded px-3 py-2"
            />
            <button
              onClick={() => {
                if (newTodo.trim()) {
                  addTodo(newTodo.trim());
                  setNewTodo('');
                }
              }}
              className="px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600"
            >
              添加
            </button>
          </div>

          <div className="flex space-x-2">
            <button
              onClick={() => setTodoFilter('all')}
              className={\`px-3 py-1 rounded \${
                todos.filter === 'all' ? 'bg-blue-500 text-white' : 'bg-gray-200'
              }\`}
            >
              全部
            </button>
            <button
              onClick={() => setTodoFilter('active')}
              className={\`px-3 py-1 rounded \${
                todos.filter === 'active' ? 'bg-blue-500 text-white' : 'bg-gray-200'
              }\`}
            >
              进行中
            </button>
            <button
              onClick={() => setTodoFilter('completed')}
              className={\`px-3 py-1 rounded \${
                todos.filter === 'completed' ? 'bg-blue-500 text-white' : 'bg-gray-200'
              }\`}
            >
              已完成
            </button>
          </div>

          {todos.error && (
            <p className="text-red-500 text-sm">{todos.error}</p>
          )}

          <div className="space-y-2">
            {filteredTodos.map((todo) => (
              <div
                key={todo.id}
                className="flex items-center space-x-2 p-2 border rounded"
              >
                <input
                  type="checkbox"
                  checked={todo.completed}
                  onChange={() => toggleTodo(todo.id)}
                  className="rounded"
                />
                <span
                  className={\`flex-1 \${
                    todo.completed ? 'line-through text-gray-500' : ''
                  }\`}
                >
                  {todo.ext}
                </span>
                <button
                  onClick={() => deleteTodo(todo.id)}
                  className="px-2 py-1 bg-red-500 text-white rounded hover:bg-red-600 text-sm"
                >
                  删除
                </button>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default SagaDemo;
`,Z=`import { create } from 'zustand';
import { devtools } from 'zustand/middleware';
import { CounterState, UserState, TodoState, ThunkState, CounterAction, UserAction, TodoAction, Todo } from '../types';

// 创建 Saga 中间件
const sagaMiddleware = <T>(
  config: any
) => (set: any, get: any, api: any) => {
  // 添加 saga 功能
  const saga = {
    effects: new Map(),
    running: false,
    
    // 注册 effect
    takeEvery: (actionType: string, effect: Function) => {
      saga.effects.set(actionType, effect);
      console.log(\`[Saga] 注册 effect: \${actionType}\`);
    },
    
    // 启动 saga
    start: () => {
      saga.running = true;
      console.log('[Saga] 启动');
    },
    
    // 停止 saga
    stop: () => {
      saga.running = false;
      console.log('[Saga] 停止');
    },
    
    // 处理 action
    handleAction: (action: any) => {
      if (!saga.running) return;
      
      console.log(\`[Saga] 处理 action: \${action.type}\`, action);
      const effect = saga.effects.get(action.type);
      if (effect) {
        effect(action, { getState: get, dispatch: set });
      }
    },
  };

  const store = config(set, get, api);
  
  // 包装原始方法以支持 saga
  const wrappedStore = { ...store };
  
  // 重写所有方法以支持 saga
  Object.keys(wrappedStore).forEach(key => {
    if (typeof wrappedStore[key] === 'function' && !key.startsWith('_') && !key.includes('Saga')) {
      const originalMethod = wrappedStore[key];
      wrappedStore[key] = (...args: any[]) => {
        const result = originalMethod(...args);
        
        // 触发 saga effects - 修复 action 类型转换
        const actionType = key.toUpperCase();
        const action = { type: actionType, payload: args[0] };
        saga.handleAction(action);
        
        return result;
      };
    }
  });
  
  return {
    ...wrappedStore,
    saga, // 确保 saga 对象被正确暴露
  };
};

// 创建 Saga Store
export const useSagaStore = create<ThunkState & { saga: any }>()(
  devtools(
    sagaMiddleware((set, get) => ({
      // 初始状态
      counter: {
        count: 0,
        step: 1,
        isLoading: false,
      },
      user: {
        isAuthenticated: false,
        isLoading: false,
      },
      todos: {
        todos: [],
        filter: 'all',
        isLoading: false,
      },

      // 计数器 actions
      incrementCounter: (payload?: number) => {
        set((state) => ({
          counter: {
            ...state.counter,
            count: state.counter.count + (payload || state.counter.step),
            lastAction: 'INCREMENT',
          },
        }));
      },

      decrementCounter: (payload?: number) => {
        set((state) => ({
          counter: {
            ...state.counter,
            count: state.counter.count - (payload || state.counter.step),
            lastAction: 'DECREMENT',
          },
        }));
      },

      resetCounter: () => {
        set((state) => ({
          counter: {
            ...state.counter,
            count: 0,
            lastAction: 'RESET',
          },
        }));
      },

      setCounterStep: (step: number) => {
        set((state) => ({
          counter: {
            ...state.counter,
            step,
          },
        }));
      },

      // 异步计数器操作
      asyncIncrement: async (delay: number = 1000) => {
        set((state) => ({
          counter: { ...state.counter, isLoading: true },
        }));

        try {
          await new Promise(resolve => setTimeout(resolve, delay));
          set((state) => ({
            counter: {
              ...state.counter,
              count: state.counter.count + state.counter.step,
              lastAction: 'ASYNC_INCREMENT',
              isLoading: false,
            },
          }));
        } catch (error) {
          set((state) => ({
            counter: {
              ...state.counter,
              error: '异步操作失败',
              isLoading: false,
            },
          }));
        }
      },

      // 用户 actions
      loginUser: async (credentials: { username: string; password: string }) => {
        set((state) => ({
          user: { ...state.user, isLoading: true, error: undefined },
        }));

        try {
          await new Promise(resolve => setTimeout(resolve, 1500));
          
          if (credentials.username === 'admin' && credentials.password === 'password') {
            set((state) => ({
              user: {
                user: {
                  id: '1',
                  name: '管理员',
                  email: 'admin@example.com',
                },
                isAuthenticated: true,
                isLoading: false,
                error: undefined,
              },
            }));
          } else {
            throw new Error('用户名或密码错误');
          }
        } catch (error) {
          set((state) => ({
            user: {
              ...state.user,
              user: undefined,
              isAuthenticated: false,
              isLoading: false,
              error: error instanceof Error ? error.message : '登录失败',
            },
          }));
        }
      },

      logoutUser: () => {
        set((state) => ({
          user: {
            user: undefined,
            isAuthenticated: false,
            isLoading: false,
            error: undefined,
          },
        }));
      },

      clearUserError: () => {
        set((state) => ({
          user: { ...state.user, error: undefined },
        }));
      },

      // 待办事项 actions
      fetchTodos: async () => {
        set((state) => ({
          todos: { ...state.todos, isLoading: true, error: undefined },
        }));

        try {
          await new Promise(resolve => setTimeout(resolve, 1000));
          
          const mockTodos: Todo[] = [
            {
              id: '1',
              ext: '学习 Zustand Saga',
              completed: false,
              createdAt: new Date(),
            },
            {
              id: '2',
              ext: '实现 Redux-Saga 兼容',
              completed: true,
              createdAt: new Date(),
            },
            {
              id: '3',
              ext: '编写 Effect 测试',
              completed: false,
              createdAt: new Date(),
            },
          ];

          set((state) => ({
            todos: {
              ...state.todos,
              todos: mockTodos,
              isLoading: false,
              error: undefined,
            },
          }));
        } catch (error) {
          set((state) => ({
            todos: {
              ...state.todos,
              isLoading: false,
              error: error instanceof Error ? error.message : '获取待办事项失败',
            },
          }));
        }
      },

      addTodo: (ext: string) => {
        const newTodo: Todo = {
          id: Date.now().toString(),
          ext,
          completed: false,
          createdAt: new Date(),
        };
        
        set((state) => ({
          todos: {
            ...state.todos,
            todos: [...state.todos.todos, newTodo],
          },
        }));
      },

      toggleTodo: (id: string) => {
        set((state) => ({
          todos: {
            ...state.todos,
            todos: state.todos.todos.map(todo =>
              todo.id === id ? { ...todo, completed: !todo.completed } : todo
            ),
          },
        }));
      },

      deleteTodo: (id: string) => {
        set((state) => ({
          todos: {
            ...state.todos,
            todos: state.todos.todos.filter(todo => todo.id !== id),
          },
        }));
      },

      setTodoFilter: (filter: 'all' | 'active' | 'completed') => {
        set((state) => ({
          todos: { ...state.todos, filter },
        }));
      },

      clearCompletedTodos: () => {
        set((state) => ({
          todos: {
            ...state.todos,
            todos: state.todos.todos.filter(todo => !todo.completed),
          },
        }));
      },

      // Saga 相关方法
      startSaga: () => {
        const currentState = get();
        if (currentState.saga) {
          currentState.saga.start();
        }
      },

      stopSaga: () => {
        const currentState = get();
        if (currentState.saga) {
          currentState.saga.stop();
        }
      },

      // 注册 effect
      registerEffect: (actionType: string, effect: Function) => {
        const currentState = get();
        if (currentState.saga) {
          currentState.saga.takeEvery(actionType, effect);
        }
      },
    })),
    {
      name: 'saga-store',
    }
  )
);
`,oe=`import React, { useState } from 'react';
import { useThunkStore } from '../stores/thunkStore';

const ThunkDemo: React.FC = () => {
  const {
    counter,
    user,
    todos,
    incrementCounter,
    decrementCounter,
    resetCounter,
    setCounterStep,
    asyncIncrement,
    loginUser,
    logoutUser,
    clearUserError,
    fetchTodos,
    addTodo,
    toggleTodo,
    deleteTodo,
    setTodoFilter,
    clearCompletedTodos,
  } = useThunkStore();

  const [step, setStep] = useState(1);
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [newTodo, setNewTodo] = useState('');

  const filteredTodos = todos.todos.filter(todo => {
    switch (todos.filter) {
      case 'active':
        return !todo.completed;
      case 'completed':
        return todo.completed;
      default:
        return true;
    }
  });

  return (
    <div className="space-y-6">
      {/* 计数器部分 */}
      <div className="bg-white p-6 rounded-lg shadow">
        <h3 className="text-lg font-semibold mb-4">计数器 (Thunk 模式)</h3>
        <div className="space-y-4">
          <div className="flex items-center space-x-4">
            <span className="text-2xl font-bold">计数: {counter.count}</span>
            {counter.isLoading && <span className="text-blue-500">加载中...</span>}
            {counter.error && <span className="text-red-500">{counter.error}</span>}
          </div>
          
          <div className="flex items-center space-x-2">
            <label className="text-sm">步长:</label>
            <input
              type="number"
              value={step}
              onChange={(e) => setStep(Number(e.target.value))}
              className="border rounded px-2 py-1 w-20"
            />
            <button
              onClick={() => setCounterStep(step)}
              className="px-3 py-1 bg-blue-500 text-white rounded hover:bg-blue-600"
            >
              设置步长
            </button>
          </div>

          <div className="flex spae-x-2">
            <button
              onClick={() => incrementCounter()}
              className="px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600"
            >
              +{counter.step}
            </button>
            <button
              onClick={() => decrementCounter()}
              className="px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600"
            >
              -{counter.step}
            </button>
            <button
              onClick={() => resetCounter()}
              className="px-4 py-2 bg-gray-500 text-white rounded hover:bg-gray-600"
            >
              重置
            </button>
            <button
              onClick={() => asyncIncrement(2000)}
              className="px-4 py-2 bg-purple-500 text-white rounded hover:bg-purple-600"
            >
              异步 +{counter.step} (2秒)
            </button>
          </div>
          
          {counter.lastAction && (
            <p className="text-sm text-gray-600">最后操作: {counter.lastAction}</p>
          )}
        </div>
      </div>

      {/* 用户认证部分 */}
      <div className="bg-white p-6 rounded-lg shadow">
        <h3 className="text-lg font-semibold mb-4">用户认证 (Thunk 模式)</h3>
        <div className="space-y-4">
          {user.isAuthenticated ? (
            <div className="space-y-2">
              <p className="text-green-600">已登录: {user.user?.name}</p>
              <p className="text-sm text-gray-600">邮箱: {user.user?.email}</p>
              <button
                onClick={logoutUser}
                className="px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600"
              >
                登出
              </button>
            </div>
          ) : (
            <div className="space-y-4">
              <div className="space-y-2">
                <input
                  type="text"
                  placeholder="用户名"
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                  className="w-full border rounded px-3 py-2"
                />
                <input
                  type="password"
                  placeholder="密码"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="w-full border rounded px-3 py-2"
                />
              </div>
              <div className="flex space-x-2">
                <button
                  onClick={() => loginUser({ username, password })}
                  disabled={user.isLoading}
                  className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 disabled:opacity-50"
                >
                  {user.isLoading ? '登录中...' : '登录'}
                </button>
                {user.error && (
                  <button
                    onClick={clearUserError}
                    className="px-4 py-2 bg-gray-500 text-white rounded hover:bg-gray-600"
                  >
                    清除错误
                  </button>
                )}
              </div>
              {user.error && (
                <p className="text-red-500 text-sm">{user.error}</p>
              )}
              <p className="text-sm text-gray-600">
                测试账号: admin / password
              </p>
            </div>
          )}
        </div>
      </div>

      {/* 待办事项部分 */}
      <div className="bg-white p-6 rounded-lg shadow">
        <h3 className="text-lg font-semibold mb-4">待办事项 (Thunk 模式)</h3>
        <div className="space-y-4">
          <div className="flex space-x-2">
            <button
              onClick={fetchTodos}
              disabled={todos.isLoading}
              className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 disabled:opacity-50"
            >
              {todos.isLoading ? '加载中...' : '获取待办事项'}
            </button>
            <button
              onClick={clearCompletedTodos}
              className="px-4 py-2 bg-orange-500 text-white rounded hover:bg-orange-600"
            >
              清除已完成
            </button>
          </div>

          <div className="flex space-x-2">
            <input
              type="text"
              placeholder="添加新待办事项"
              value={newTodo}
              onChange={(e) => setNewTodo(e.target.value)}
              className="flex-1 border rounded px-3 py-2"
            />
            <button
              onClick={() => {
                if (newTodo.trim()) {
                  addTodo(newTodo.trim());
                  setNewTodo('');
                }
              }}
              className="px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600"
            >
              添加
            </button>
          </div>

          <div className="flex space-x-2">
            <button
              onClick={() => setTodoFilter('all')}
              className={\`px-3 py-1 rounded \${
                todos.filter === 'all' ? 'bg-blue-500 text-white' : 'bg-gray-200'
              }\`}
            >
              全部
            </button>
            <button
              onClick={() => setTodoFilter('active')}
              className={\`px-3 py-1 rounded \${
                todos.filter === 'active' ? 'bg-blue-500 text-white' : 'bg-gray-200'
              }\`}
            >
              进行中
            </button>
            <button
              onClick={() => setTodoFilter('completed')}
              className={\`px-3 py-1 rounded \${
                todos.filter === 'completed' ? 'bg-blue-500 text-white' : 'bg-gray-200'
              }\`}
            >
              已完成
            </button>
          </div>

          {todos.error && (
            <p className="text-red-500 text-sm">{todos.error}</p>
          )}

          <div className="space-y-2">
            {filteredTodos.map((todo) => (
              <div
                key={todo.id}
                className="flex items-center space-x-2 p-2 border rounded"
              >
                <input
                  type="checkbox"
                  checked={todo.completed}
                  onChange={() => toggleTodo(todo.id)}
                  className="rounded"
                />
                <span
                  className={\`flex-1 \${
                    todo.completed ? 'line-through text-gray-500' : ''
                  }\`}
                >
                  {todo.ext}
                </span>
                <button
                  onClick={() => deleteTodo(todo.id)}
                  className="px-2 py-1 bg-red-500 text-white rounded hover:bg-red-600 text-sm"
                >
                  删除
                </button>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ThunkDemo;
`,q=`import { create } from 'zustand';
import { subscribeWithSelector } from 'zustand/middleware';
import { devtools } from 'zustand/middleware';
import { CounterState, UserState, TodoState, ThunkState, CounterAction, UserAction, TodoAction, Todo } from '../types';

// 创建 Thunk 中间件
const thunkMiddleware = <T>(
  config: any
) => (set: any, get: any, api: any) =>
  config(
    (...args: any[]) => {
      const [type, ...rest] = args;
      if (typeof type === 'function') {
        // 如果是函数，则执行 thunk
        return type(set, get, api);
      }
      // 否则按正常 action 处理
      return set(...args);
    },
    get,
    api
  );

// 计数器 reducer
const counterReducer = (state: CounterState, action: CounterAction): CounterState => {
  switch (action.type) {
    case 'INCREMENT':
      return {
        ...state,
        count: state.count + (action.payload || state.step),
        lastAction: 'INCREMENT',
      };
    case 'DECREMENT':
      return {
        ...state,
        count: state.count - (action.payload || state.step),
        lastAction: 'DECREMENT',
      };
    case 'RESET':
      return {
        ...state,
        count: 0,
        lastAction: 'RESET',
      };
    case 'SET_STEP':
      return {
        ...state,
        step: action.payload,
      };
    case 'SET_LOADING':
      return {
        ...state,
        isLoading: action.payload,
      };
    case 'SET_ERROR':
      return {
        ...state,
        error: action.payload,
      };
    default:
      return state;
  }
};

// 用户 reducer
const userReducer = (state: UserState, action: UserAction): UserState => {
  switch (action.type) {
    case 'LOGIN_START':
      return {
        ...state,
        isLoading: true,
        error: undefined,
      };
    case 'LOGIN_SUCCESS':
      return {
        ...state,
        user: action.payload,
        isAuthenticated: true,
        isLoading: false,
        error: undefined,
      };
    case 'LOGIN_FAILURE':
      return {
        ...state,
        user: undefined,
        isAuthenticated: false,
        isLoading: false,
        error: action.payload,
      };
    case 'LOGOUT':
      return {
        ...state,
        user: undefined,
        isAuthenticated: false,
        isLoading: false,
        error: undefined,
      };
    case 'CLEAR_ERROR':
      return {
        ...state,
        error: undefined,
      };
    default:
      return state;
  }
};

// 待办事项 reducer
const todoReducer = (state: TodoState, action: TodoAction): TodoState => {
  switch (action.type) {
    case 'FETCH_TODOS_START':
      return {
        ...state,
        isLoading: true,
        error: undefined,
      };
    case 'FETCH_TODOS_SUCCESS':
      return {
        ...state,
        todos: action.payload,
        isLoading: false,
        error: undefined,
      };
    case 'FETCH_TODOS_FAILURE':
      return {
        ...state,
        isLoading: false,
        error: action.payload,
      };
    case 'ADD_TODO':
      const newTodo: Todo = {
        id: Date.now().toString(),
        ext: action.payload,
        completed: false,
        createdAt: new Date(),
      };
      return {
        ...state,
        todos: [...state.todos, newTodo],
      };
    case 'TOGGLE_TODO':
      return {
        ...state,
        todos: state.todos.map(todo =>
          todo.id === action.payload
            ? { ...todo, completed: !todo.completed }
            : todo
        ),
      };
    case 'DELETE_TODO':
      return {
        ...state,
        todos: state.todos.filter(todo => todo.id !== action.payload),
      };
    case 'SET_FILTER':
      return {
        ...state,
        filter: action.payload,
      };
    case 'CLEAR_COMPLETED':
      return {
        ...state,
        todos: state.todos.filter(todo => !todo.completed),
      };
    default:
      return state;
  }
};

// 创建 Thunk Store
export const useThunkStore = create<ThunkState>()(
  devtools(
    thunkMiddleware((set, get) => ({
      // 初始状态
      counter: {
        count: 0,
        step: 1,
        isLoading: false,
      },
      user: {
        isAuthenticated: false,
        isLoading: false,
      },
      todos: {
        todos: [],
        filter: 'all',
        isLoading: false,
      },

      // 计数器 actions
      incrementCounter: (payload?: number) => {
        const currentState = get();
        const newCounterState = counterReducer(currentState.counter, { type: 'INCREMENT', payload });
        set({ counter: newCounterState });
      },

      decrementCounter: (payload?: number) => {
        const currentState = get();
        const newCounterState = counterReducer(currentState.counter, { type: 'DECREMENT', payload });
        set({ counter: newCounterState });
      },

      resetCounter: () => {
        const currentState = get();
        const newCounterState = counterReducer(currentState.counter, { type: 'RESET' });
        set({ counter: newCounterState });
      },

      setCounterStep: (step: number) => {
        const currentState = get();
        const newCounterState = counterReducer(currentState.counter, { type: 'SET_STEP', payload: step });
        set({ counter: newCounterState });
      },

      // 异步计数器操作
      asyncIncrement: async (delay: number = 1000) => {
        const currentState = get();
        const newCounterState = counterReducer(currentState.counter, { type: 'SET_LOADING', payload: true });
        set({ counter: newCounterState });

        try {
          await new Promise(resolve => setTimeout(resolve, delay));
          const updatedState = get();
          const finalCounterState = counterReducer(updatedState.counter, { type: 'INCREMENT' });
          set({ counter: { ...finalCounterState, isLoading: false } });
        } catch (error) {
          const errorState = get();
          const errorCounterState = counterReducer(errorState.counter, { 
            type: 'SET_ERROR', 
            payload: '异步操作失败' 
          });
          set({ counter: { ...errorCounterState, isLoading: false } });
        }
      },

      // 用户 actions
      loginUser: async (credentials: { username: string; password: string }) => {
        const currentState = get();
        const newUserState = userReducer(currentState.user, { type: 'LOGIN_START' });
        set({ user: newUserState });

        try {
          // 模拟 API 调用
          await new Promise(resolve => setTimeout(resolve, 1500));
          
          if (credentials.username === 'admin' && credentials.password === 'password') {
            const successState = userReducer(get().user, {
              type: 'LOGIN_SUCCESS',
              payload: {
                id: '1',
                name: '管理员',
                email: 'admin@example.com',
              },
            });
            set({ user: successState });
          } else {
            throw new Error('用户名或密码错误');
          }
        } catch (error) {
          const errorState = userReducer(get().user, {
            type: 'LOGIN_FAILURE',
            payload: error instanceof Error ? error.message : '登录失败',
          });
          set({ user: errorState });
        }
      },

      logoutUser: () => {
        const currentState = get();
        const newUserState = userReducer(currentState.user, { type: 'LOGOUT' });
        set({ user: newUserState });
      },

      clearUserError: () => {
        const currentState = get();
        const newUserState = userReducer(currentState.user, { type: 'CLEAR_ERROR' });
        set({ user: newUserState });
      },

      // 待办事项 actions
      fetchTodos: async () => {
        const currentState = get();
        const newTodoState = todoReducer(currentState.todos, { type: 'FETCH_TODOS_START' });
        set({ todos: newTodoState });

        try {
          // 模拟 API 调用
          await new Promise(resolve => setTimeout(resolve, 1000));
          
          const mockTodos: Todo[] = [
            {
              id: '1',
              ext: '学习 Zustand',
              completed: false,
              createdAt: new Date(),
            },
            {
              id: '2',
              ext: '实现 Redux 中间件兼容',
              completed: true,
              createdAt: new Date(),
            },
            {
              id: '3',
              ext: '编写测试用例',
              completed: false,
              createdAt: new Date(),
            },
          ];

          const successState = todoReducer(get().todos, {
            type: 'FETCH_TODOS_SUCCESS',
            payload: mockTodos,
          });
          set({ todos: successState });
        } catch (error) {
          const errorState = todoReducer(get().todos, {
            type: 'FETCH_TODOS_FAILURE',
            payload: error instanceof Error ? error.message : '获取待办事项失败',
          });
          set({ todos: errorState });
        }
      },

      addTodo: (ext: string) => {
        const currentState = get();
        const newTodoState = todoReducer(currentState.todos, { type: 'ADD_TODO', payload: ext });
        set({ todos: newTodoState });
      },

      toggleTodo: (id: string) => {
        const currentState = get();
        const newTodoState = todoReducer(currentState.todos, { type: 'TOGGLE_TODO', payload: id });
        set({ todos: newTodoState });
      },

      deleteTodo: (id: string) => {
        const currentState = get();
        const newTodoState = todoReducer(currentState.todos, { type: 'DELETE_TODO', payload: id });
        set({ todos: newTodoState });
      },

      setTodoFilter: (filter: 'all' | 'active' | 'completed') => {
        const currentState = get();
        const newTodoState = todoReducer(currentState.todos, { type: 'SET_FILTER', payload: filter });
        set({ todos: newTodoState });
      },

      clearCompletedTodos: () => {
        const currentState = get();
        const newTodoState = todoReducer(currentState.todos, { type: 'CLEAR_COMPLETED' });
        set({ todos: newTodoState });
      },
    })),
    {
      name: 'thunk-store',
    }
  )
);
`,P=`// Redux 中间件兼容相关类型定义

// 基础状态接口
export interface CounterState {
  count: number;
  step: number;
  lastAction?: string;
  isLoading: boolean;
  error?: string;
}

// 异步操作状态
export interface AsyncState {
  isLoading: boolean;
  error?: string;
  data?: any;
}

// 用户状态
export interface UserState {
  user?: {
    id: string;
    name: string;
    email: string;
  };
  isAuthenticated: boolean;
  isLoading: boolean;
  error?: string;
}

// 待办事项状态
export interface TodoState {
  todos: Todo[];
  filter: 'all' | 'active' | 'completed';
  isLoading: boolean;
  error?: string;
}

export interface Todo {
  id: string;
  ext: string;
  completed: boolean;
  createdAt: Date;
}

// Thunk 相关类型
export interface ThunkState {
  counter: CounterState;
  user: UserState;
  todos: TodoState;
}

// Action 类型
export type CounterAction = 
  | { type: 'INCREMENT'; payload?: number }
  | { type: 'DECREMENT'; payload?: number }
  | { type: 'RESET' }
  | { type: 'SET_STEP'; payload: number }
  | { type: 'SET_LOADING'; payload: boolean }
  | { type: 'SET_ERROR'; payload: string | undefined };

export type UserAction =
  | { type: 'LOGIN_START' }
  | { type: 'LOGIN_SUCCESS'; payload: { id: string; name: string; email: string } }
  | { type: 'LOGIN_FAILURE'; payload: string }
  | { type: 'LOGOUT' }
  | { type: 'CLEAR_ERROR' };

export type TodoAction =
  | { type: 'FETCH_TODOS_START' }
  | { type: 'FETCH_TODOS_SUCCESS'; payload: Todo[] }
  | { type: 'FETCH_TODOS_FAILURE'; payload: string }
  | { type: 'ADD_TODO'; payload: string }
  | { type: 'TOGGLE_TODO'; payload: string }
  | { type: 'DELETE_TODO'; payload: string }
  | { type: 'SET_FILTER'; payload: 'all' | 'active' | 'completed' }
  | { type: 'CLEAR_COMPLETED' };

// 中间件类型
export interface MiddlewareConfig {
  enableThunk: boolean;
  enableSaga: boolean;
  enableLogger: boolean;
  enableDevtools: boolean;
}

// 异步操作函数类型
export type AsyncAction<T = any> = (
  dispatch: (action: any) => void,
  getState: () => ThunkState
) => Promise<T>;

// Saga 相关类型
export interface SagaConfig {
  takeEvery: boolean;
  takeLatest: boolean;
  debounce?: number;
  throttle?: number;
}

// 日志配置
export interface LoggerConfig {
  level: 'debug' | 'info' | 'warn' | 'error';
  collapsed: boolean;
  diff: boolean;
  duration: boolean;
}
`,le=()=>e.jsx(Q,{title:"Redux 中间件兼容",description:"演示如何在 Zustand 中实现 Redux 中间件兼容，包括 Thunk 和 Saga 模式，让开发者可以平滑迁移或混合使用不同的状态管理方案。",overview:[{title:"核心概念",items:["实现 Redux Thunk 风格的异步操作处理","模拟 Redux-Saga 的 effect 和 generator 模式","保持 Zustand 的简洁性和性能优势","支持 Redux DevTools 集成和调试","提供平滑的迁移路径和兼容性","支持混合使用多种状态管理方案","保持类型安全和开发体验"]},{title:"主要优势",items:["降低从 Redux 迁移到 Zustand 的成本","保持团队现有的开发习惯和模式","支持渐进式迁移和混合使用","提供熟悉的调试和测试体验","保持 Zustand 的性能和简洁性","支持复杂的异步流程控制","与现有 Redux 生态工具兼容"]},{title:"适用场景",items:["从 Redux 迁移到 Zustand 的项目","需要保持 Redux 开发模式的团队","混合使用多种状态管理方案","复杂的异步流程和副作用管理","需要 Redux 生态工具支持的项目","大型项目的渐进式重构"]},{title:"注意事项",items:["理解 Thunk 和 Saga 的适用场景","避免过度工程化和复杂性","保持代码的一致性和可维护性","考虑团队的学习成本和迁移成本","合理选择中间件模式","注意性能影响和调试复杂度"]}],examples:[{title:"Thunk 模式实现",component:e.jsx(ne,{}),description:"演示 Redux Thunk 风格的异步操作处理，使用 reducer 模式和 action creator。",observationPoints:["观察计数器、用户认证和待办事项的异步操作","注意 loading 状态和错误处理","查看 Redux DevTools 中的 action 记录","体验 reducer 模式的状态更新","观察异步操作的执行流程"],keyPoints:["使用 reducer 函数处理状态更新","实现 action creator 模式","支持异步操作和错误处理","保持 Redux 的开发习惯","与 DevTools 完美集成"],commonTraps:["忘记处理 loading 和 error 状态","reducer 函数过于复杂","异步操作没有适当的错误处理","action 类型定义不完整"],solutions:["为每个异步操作添加 loading 和 error 状态","保持 reducer 函数的纯净性","使用 try-catch 处理异步错误","定义完整的 action 类型系统"],preCode:[{title:"类型定义",code:P},{title:"Thunk Store",code:q}],codeExample:{title:"Thunk 演示组件",code:oe}},{title:"Saga 模式实现",component:e.jsx(te,{}),description:"演示 Redux-Saga 风格的 effect 处理，支持 takeEvery 和副作用管理。",observationPoints:["观察 Saga 控制面板的状态","查看 effect 日志记录","体验 takeEvery 模式的效果","观察副作用的管理方式","对比与 Thunk 模式的区别"],keyPoints:["实现 effect 注册和执行机制","支持 takeEvery 模式","提供副作用集中管理","支持 Saga 的启动和停止","保持 generator 函数的概念"],commonTraps:["effect 注册时机不正确","忘记启动 Saga 实例","effect 函数过于复杂","没有适当的清理机制"],solutions:["在组件挂载时注册 effect","确保 Saga 正确启动","保持 effect 函数的简洁性","在组件卸载时清理资源"],preCode:[{title:"类型定义",code:P},{title:"Saga Store",code:Z}],codeExample:{title:"Saga 演示组件",code:ae}},{title:"中间件对比分析",component:e.jsx(ee,{}),description:"详细对比 Thunk 和 Saga 模式的特点、优缺点和适用场景。",observationPoints:["查看详细的特性对比表格","了解两种模式的优缺点","观察实时状态对比","参考选择建议和适用场景","理解不同场景下的最佳选择"],keyPoints:["Thunk 模式简单直接，适合简单场景","Saga 模式功能强大，适合复杂场景","根据项目规模和复杂度选择","考虑团队技能和学习成本","保持代码的一致性和可维护性"],commonTraps:["盲目选择复杂的 Saga 模式","在简单场景中使用过度工程化","不考虑团队的学习成本","没有统一的中间件选择标准"],solutions:["根据实际需求选择合适的模式","保持简单性原则","考虑团队技能和项目需求","建立统一的中间件选择标准"],preCode:[{title:"类型定义",code:P},{title:"Thunk Store",code:q},{title:"Saga Store",code:Z}],codeExample:{title:"对比分析组件",code:se}}],tutorial:{concepts:["Redux Thunk 模式在 Zustand 中的实现","Redux-Saga 模式在 Zustand 中的模拟","中间件兼容性的设计原则","异步操作和副作用管理","迁移策略和最佳实践"],steps:["理解 Redux 中间件的工作原理","设计 Zustand 兼容的中间件接口","实现 Thunk 风格的异步操作","模拟 Saga 的 effect 机制","集成 DevTools 和调试功能","建立迁移和混合使用策略"],tips:["保持 Zustand 的简洁性，避免过度复杂化","为不同场景选择合适的中间件模式","建立统一的代码规范和最佳实践","考虑团队技能和项目需求","提供充分的文档和示例","定期评估和优化中间件实现"]},interview:{questions:[{question:"如何在 Zustand 中实现 Redux Thunk 兼容？",answer:"通过创建 thunk 中间件，包装 store 的 set 方法，支持函数类型的 action，并使用 reducer 模式处理状态更新。"},{question:"Saga 模式相比 Thunk 有什么优势？",answer:"Saga 提供更强大的副作用管理、内置的取消和并发控制、更清晰的代码组织，适合复杂的异步流程。"},{question:"什么时候应该选择 Thunk 而不是 Saga？",answer:"项目规模较小、异步操作简单、团队对 Redux 生态不熟悉、需要快速开发和迭代时选择 Thunk。"},{question:"如何确保中间件兼容的代码质量？",answer:"建立统一的代码规范、充分的类型定义、完整的测试覆盖、清晰的文档说明，并定期进行代码审查。"}],keyPoints:["Thunk 和 Saga 模式的实现原理","中间件兼容性的设计原则","异步操作和副作用管理","迁移策略和最佳实践"]},bestPractices:{dos:["根据项目需求选择合适的中间件模式","保持代码的一致性和可维护性","提供充分的类型定义和文档","建立统一的开发规范和最佳实践","考虑团队技能和学习成本","定期评估和优化中间件实现"],donts:["不要盲目选择复杂的中间件模式","不要忽略团队的学习成本","不要过度工程化简单场景","不要忽视代码质量和维护性"],patterns:["Thunk 模式 + reducer 函数","Saga 模式 + effect 管理","中间件兼容 + 渐进式迁移","统一规范 + 最佳实践"]}});export{le as default};
