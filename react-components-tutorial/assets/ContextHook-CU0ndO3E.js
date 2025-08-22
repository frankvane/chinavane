import{j as e,r as s}from"./index-MmCcWZhd.js";import{C as T}from"./ComponentTemplate-DoUPe1QN.js";const H=s.createContext(void 0),W=({children:o})=>{const[c,t]=s.useState(0),d=s.useCallback(()=>t(a=>a+1),[]),h=s.useCallback(()=>t(a=>a-1),[]),u=s.useCallback(()=>t(0),[]),i=s.useMemo(()=>({count:c,increment:d,decrement:h,reset:u,setCount:t}),[c,d,h,u]);return e.jsxs(H.Provider,{value:i,children:[" ",o]})},P=()=>{const o=s.useContext(H);if(o===void 0)throw new Error("useCounter must be used within a CounterProvider");return o},M=s.createContext(void 0),I=({children:o})=>{const[c,t]=s.useState([]),[d,h]=s.useState("disconnected"),u=s.useRef(null),i=s.useRef(null),a=s.useCallback(()=>{var v;((v=u.current)==null?void 0:v.readyState)!==WebSocket.OPEN&&(h("connecting"),setTimeout(()=>{h("connected");const j={id:Date.now().toString(),text:"欢迎来到聊天室！",timestamp:new Date,sender:"System",type:"system"};t(f=>[...f,j]);const C=setInterval(()=>{const f=["你好！有什么可以帮助你的吗？","今天天气不错呢！","你在做什么有趣的项目吗？","需要任何技术支持吗？","希望你今天过得愉快！"],w=f[Math.floor(Math.random()*f.length)],n={id:Date.now().toString(),text:w,timestamp:new Date,sender:"Bot",type:"bot"};t(r=>[...r,n])},1e4);return()=>clearInterval(C)},1e3))},[]),x=s.useCallback(()=>{u.current&&(u.current.close(),u.current=null),h("disconnected"),i.current&&(clearTimeout(i.current),i.current=null)},[]),p=s.useCallback(()=>{x(),setTimeout(a,1e3)},[a,x]),l=s.useCallback((v,j)=>{if(d!=="connected"){console.warn("WebSocket is not connected");return}const C={id:Date.now().toString(),text:v,timestamp:new Date,sender:j,type:"user"};t(f=>[...f,C])},[d]),b=s.useCallback(()=>{t([])},[]),g=d==="connected";s.useEffect(()=>(a(),x),[a,x]);const k=s.useMemo(()=>({messages:c,connectionStatus:d,sendMessage:l,clearMessages:b,reconnect:p,isConnected:g}),[c,d,l,b,p,g]);return e.jsx(M.Provider,{value:k,children:o})},B=()=>{const o=s.useContext(M);if(o===void 0)throw new Error("useWebSocket must be used within a WebSocketProvider");return o},F=s.createContext(void 0),D=({children:o,initialValues:c={}})=>{const[t,d]=s.useState({}),[h,u]=s.useState(!1),i=s.useMemo(()=>{const n={};return Object.keys(t).forEach(r=>{n[r]=t[r].value}),n},[t]),a=s.useMemo(()=>{const n={};return Object.keys(t).forEach(r=>{t[r].error&&(n[r]=t[r].error)}),n},[t]),x=s.useMemo(()=>{const n={};return Object.keys(t).forEach(r=>{n[r]=t[r].touched}),n},[t]),p=s.useMemo(()=>Object.keys(t).every(n=>!t[n].error),[t]),l=s.useCallback((n,r=[])=>{d(m=>m[n]?m:{...m,[n]:{value:c[n]||"",error:void 0,touched:!1,validators:r}})},[c]),b=s.useCallback((n,r)=>{d(m=>({...m,[n]:{...m[n],value:r}}))},[]),g=s.useCallback((n,r)=>{d(m=>({...m,[n]:{...m[n],error:r}}))},[]),k=s.useCallback((n,r)=>{d(m=>({...m,[n]:{...m[n],touched:r}}))},[]),v=s.useCallback(n=>{const r=t[n];if(!r)return;let m;for(const S of r.validators)if(m=S(r.value),m)break;g(n,m||"")},[t,g]),j=s.useCallback(()=>{let n=!0;return Object.keys(t).forEach(r=>{const m=t[r];let S;for(const R of m.validators)if(S=R(m.value),S)break;S?(n=!1,g(r,S)):g(r,"")}),n},[t,g]),C=s.useCallback(()=>{d(n=>{const r={};return Object.keys(n).forEach(m=>{r[m]={...n[m],value:c[m]||"",error:void 0,touched:!1}}),r})},[c]),f=s.useCallback(async n=>{if(!h){u(!0);try{if(j())await n(i);else throw new Error("表单验证失败")}catch(r){throw console.error("Form submission error:",r),r}finally{u(!1)}}},[h,j,i]),w=s.useMemo(()=>({values:i,errors:a,touched:x,isValid:p,isSubmitting:h,setValue:b,setError:g,setTouched:k,validateField:v,validateForm:j,resetForm:C,submitForm:f,registerField:l}),[i,a,x,p,h,b,g,k,v,j,C,f,l]);return e.jsx(F.Provider,{value:w,children:o})},E=()=>{const o=s.useContext(F);if(o===void 0)throw new Error("useForm must be used within a FormProvider");return o},N=(o,c=[])=>{const{values:t,errors:d,touched:h,setValue:u,setTouched:i,validateField:a,registerField:x}=E();s.useEffect(()=>{x(o,c)},[o,c,x]);const p=t[o]||"",l=d[o],b=h[o],g=s.useCallback(v=>{u(o,v)},[o,u]),k=s.useCallback(()=>{i(o,!0),a(o)},[o,i,a]);return{value:p,error:l,touched:b,onChange:g,onBlur:k,hasError:!!(l&&b)}},y={required:(o="此字段为必填项")=>c=>{if(!c||typeof c=="string"&&c.trim()==="")return o},minLength:(o,c)=>t=>{if(t&&t.length<o)return c||`最少需要${o}个字符`},email:(o="请输入有效的邮箱地址")=>c=>{if(c&&!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(c))return o},pattern:(o,c)=>t=>{if(t&&!o.test(t))return c}},V=()=>{const o=()=>{const{count:t,increment:d,decrement:h,reset:u,setCount:i}=P(),[a,x]=s.useState(""),p=()=>{const l=parseInt(a);isNaN(l)||(i(l),x(""))};return e.jsxs("div",{className:"space-y-4",children:[e.jsxs("div",{className:"text-center",children:[e.jsx("div",{className:"text-6xl font-bold text-blue-600 mb-4",children:t}),e.jsxs("div",{className:"flex justify-center space-x-2",children:[e.jsx("button",{onClick:h,className:"px-4 py-2 bg-red-600 text-white rounded hover:bg-red-700",children:"-1"}),e.jsx("button",{onClick:u,className:"px-4 py-2 bg-gray-600 text-white rounded hover:bg-gray-700",children:"重置"}),e.jsx("button",{onClick:d,className:"px-4 py-2 bg-green-600 text-white rounded hover:bg-green-700",children:"+1"})]})]}),e.jsxs("div",{className:"flex items-center space-x-2",children:[e.jsx("input",{type:"number",value:a,onChange:l=>x(l.target.value),placeholder:"设置数值",className:"flex-1 px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"}),e.jsx("button",{onClick:p,className:"px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700",children:"设置"})]})]})},c=()=>{const{count:t}=P();return e.jsxs("div",{className:"p-4 bg-gray-50 border border-gray-200 rounded-lg",children:[e.jsx("h4",{className:"font-semibold text-gray-800 mb-2",children:"统计信息"}),e.jsxs("div",{className:"grid grid-cols-2 gap-4 text-sm",children:[e.jsxs("div",{children:[e.jsx("span",{className:"text-gray-600",children:"当前值:"}),e.jsx("span",{className:"ml-2 font-medium",children:t})]}),e.jsxs("div",{children:[e.jsx("span",{className:"text-gray-600",children:"绝对值:"}),e.jsx("span",{className:"ml-2 font-medium",children:Math.abs(t)})]}),e.jsxs("div",{children:[e.jsx("span",{className:"text-gray-600",children:"是否为正数:"}),e.jsx("span",{className:"ml-2 font-medium",children:t>0?"是":"否"})]}),e.jsxs("div",{children:[e.jsx("span",{className:"text-gray-600",children:"是否为偶数:"}),e.jsx("span",{className:"ml-2 font-medium",children:t%2===0?"是":"否"})]})]})]})};return e.jsxs(W,{children:[" ",e.jsxs("div",{className:"space-y-6",children:[e.jsx(o,{}),e.jsx(c,{}),e.jsxs("div",{className:"p-4 bg-blue-50 border border-blue-200 rounded-lg",children:[e.jsx("h4",{className:"font-semibold text-blue-800 mb-2",children:"useContext Hook 特点"}),e.jsxs("ul",{className:"text-sm text-blue-700 space-y-1",children:[e.jsx("li",{children:"• 简洁的API，直接返回Context值"}),e.jsx("li",{children:"• 只能在函数组件中使用"}),e.jsx("li",{children:"• 自动订阅Context变化"}),e.jsx("li",{children:"• 需要在Provider内部使用"})]})]})]})]})},A=()=>{const o=()=>{const{messages:c,connectionStatus:t,sendMessage:d,clearMessages:h,reconnect:u,isConnected:i}=B(),[a,x]=s.useState(""),[p,l]=s.useState("用户"),b=s.useRef(null),g=()=>{b.current&&(b.current.scrollTop=b.current.scrollHeight)};s.useEffect(()=>{g()},[c]);const k=C=>{C.preventDefault(),a.trim()&&i&&(d(a.trim(),p),x(""))},v=()=>{switch(t){case"connected":return"text-green-600";case"connecting":return"text-yellow-600";case"disconnected":return"text-gray-600";case"error":return"text-red-600";default:return"text-gray-600"}},j=()=>{switch(t){case"connected":return"🟢";case"connecting":return"🟡";case"disconnected":return"⚪";case"error":return"🔴";default:return"⚪"}};return e.jsxs("div",{className:"space-y-4",children:[e.jsxs("div",{className:"flex items-center justify-between p-3 bg-white border border-gray-200 rounded-lg",children:[e.jsxs("div",{className:"flex items-center space-x-2",children:[e.jsx("span",{children:j()}),e.jsxs("span",{className:`font-medium ${v()}`,children:[t==="connected"&&"已连接",t==="connecting"&&"连接中...",t==="disconnected"&&"未连接",t==="error"&&"连接错误"]})]}),e.jsxs("div",{className:"flex space-x-2",children:[e.jsx("input",{type:"text",value:p,onChange:C=>l(C.target.value),placeholder:"用户名",className:"px-2 py-1 border border-gray-300 rounded text-sm focus:outline-none focus:ring-1 focus:ring-blue-500"}),e.jsx("button",{onClick:u,className:"px-3 py-1 bg-blue-600 text-white rounded text-sm hover:bg-blue-700",children:"重连"}),e.jsx("button",{onClick:h,className:"px-3 py-1 bg-red-600 text-white rounded text-sm hover:bg-red-700",children:"清空"})]})]}),e.jsx("div",{ref:b,className:"h-64 overflow-y-auto p-4 bg-gray-50 border border-gray-200 rounded-lg",children:c.length===0?e.jsxs("div",{className:"text-center text-gray-500 mt-8",children:[e.jsx("div",{className:"text-4xl mb-2",children:"💬"}),e.jsx("p",{children:"暂无消息"})]}):e.jsx("div",{className:"space-y-2",children:c.map(C=>{const f=C.type==="user",w=C.type==="system";return C.type,e.jsx("div",{className:`flex ${f?"justify-end":"justify-start"}`,children:e.jsxs("div",{className:`max-w-xs lg:max-w-md px-3 py-2 rounded-lg ${f?"bg-blue-600 text-white":w?"bg-gray-600 text-white":"bg-white border border-gray-300"}`,children:[e.jsxs("div",{className:"flex items-center space-x-2 mb-1",children:[e.jsx("span",{className:"text-xs font-medium",children:f?"你":C.sender}),e.jsx("span",{className:"text-xs opacity-75",children:C.timestamp.toLocaleTimeString()})]}),e.jsx("p",{className:"text-sm",children:C.text})]})},C.id)})})}),e.jsxs("form",{onSubmit:k,className:"flex space-x-2",children:[e.jsx("input",{type:"text",value:a,onChange:C=>x(C.target.value),placeholder:i?"输入消息...":"连接中，请稍候...",disabled:!i,className:"flex-1 px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500 disabled:bg-gray-100"}),e.jsx("button",{type:"submit",disabled:!i||!a.trim(),className:"px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 disabled:bg-gray-400 disabled:cursor-not-allowed",children:"发送"})]}),e.jsxs("div",{className:"p-4 bg-green-50 border border-green-200 rounded-lg",children:[e.jsx("h4",{className:"font-semibold text-green-800 mb-2",children:"WebSocket Hook 特点"}),e.jsxs("ul",{className:"text-sm text-green-700 space-y-1",children:[e.jsx("li",{children:"• 封装复杂的WebSocket连接逻辑"}),e.jsx("li",{children:"• 提供连接状态管理"}),e.jsx("li",{children:"• 自动处理重连和错误"}),e.jsx("li",{children:"• 消息队列和状态同步"})]})]})]})};return e.jsx(I,{children:e.jsx(o,{})})},q=()=>{const o=()=>{const{submitForm:c,resetForm:t,isSubmitting:d,isValid:h}=E(),u=N("username",[y.required("用户名不能为空"),y.minLength(3,"用户名至少3个字符")]),i=N("email",[y.required("邮箱不能为空"),y.email("请输入有效的邮箱地址")]),a=N("password",[y.required("密码不能为空"),y.minLength(6,"密码至少6个字符")]),x=N("confirmPassword",[y.required("请确认密码"),l=>{if(l!==a.value)return"两次输入的密码不一致"}]),p=async l=>{l.preventDefault();try{await c(async b=>{console.log("提交表单数据:",b),await new Promise(g=>setTimeout(g,2e3)),alert("注册成功！")})}catch(b){console.error("提交失败:",b),alert("提交失败，请重试")}};return e.jsxs("div",{className:"space-y-6",children:[e.jsxs("form",{onSubmit:p,className:"space-y-4",children:[e.jsxs("div",{children:[e.jsx("label",{className:"block text-sm font-medium text-gray-700 mb-1",children:"用户名"}),e.jsx("input",{type:"text",value:u.value,onChange:l=>u.onChange(l.target.value),onBlur:u.onBlur,className:`w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 ${u.hasError?"border-red-300 focus:ring-red-500":"border-gray-300 focus:ring-blue-500"}`,placeholder:"请输入用户名"}),u.hasError&&e.jsx("p",{className:"mt-1 text-sm text-red-600",children:u.error})]}),e.jsxs("div",{children:[e.jsx("label",{className:"block text-sm font-medium text-gray-700 mb-1",children:"邮箱"}),e.jsx("input",{type:"email",value:i.value,onChange:l=>i.onChange(l.target.value),onBlur:i.onBlur,className:`w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 ${i.hasError?"border-red-300 focus:ring-red-500":"border-gray-300 focus:ring-blue-500"}`,placeholder:"请输入邮箱地址"}),i.hasError&&e.jsx("p",{className:"mt-1 text-sm text-red-600",children:i.error})]}),e.jsxs("div",{children:[e.jsx("label",{className:"block text-sm font-medium text-gray-700 mb-1",children:"密码"}),e.jsx("input",{type:"password",value:a.value,onChange:l=>a.onChange(l.target.value),onBlur:a.onBlur,className:`w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 ${a.hasError?"border-red-300 focus:ring-red-500":"border-gray-300 focus:ring-blue-500"}`,placeholder:"请输入密码"}),a.hasError&&e.jsx("p",{className:"mt-1 text-sm text-red-600",children:a.error})]}),e.jsxs("div",{children:[e.jsx("label",{className:"block text-sm font-medium text-gray-700 mb-1",children:"确认密码"}),e.jsx("input",{type:"password",value:x.value,onChange:l=>x.onChange(l.target.value),onBlur:x.onBlur,className:`w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 ${x.hasError?"border-red-300 focus:ring-red-500":"border-gray-300 focus:ring-blue-500"}`,placeholder:"请再次输入密码"}),x.hasError&&e.jsx("p",{className:"mt-1 text-sm text-red-600",children:x.error})]}),e.jsxs("div",{className:"flex space-x-4",children:[e.jsx("button",{type:"submit",disabled:!h||d,className:"flex-1 px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 disabled:bg-gray-400 disabled:cursor-not-allowed",children:d?"提交中...":"注册"}),e.jsx("button",{type:"button",onClick:t,className:"px-4 py-2 bg-gray-600 text-white rounded-md hover:bg-gray-700",children:"重置"})]})]}),e.jsxs("div",{className:"p-4 bg-purple-50 border border-purple-200 rounded-lg",children:[e.jsx("h4",{className:"font-semibold text-purple-800 mb-2",children:"表单Hook 特点"}),e.jsxs("ul",{className:"text-sm text-purple-700 space-y-1",children:[e.jsx("li",{children:"• 统一的表单状态管理"}),e.jsx("li",{children:"• 字段级别的验证和错误处理"}),e.jsx("li",{children:"• 自动的表单提交状态管理"}),e.jsx("li",{children:"• 灵活的验证器组合"}),e.jsx("li",{children:"• 支持异步提交和错误处理"})]})]})]})};return e.jsx(D,{initialValues:{username:"",email:"",password:"",confirmPassword:""},children:e.jsx(o,{})})},L=()=>{const o={title:"Context Hook (useContext)",description:"useContext是React提供的Hook，用于在函数组件中消费Context数据。它提供了简洁的API来访问Context值，相比Context.Consumer更加直观和易用。",overview:e.jsxs("div",{className:"space-y-4",children:[e.jsxs("div",{children:[e.jsx("h3",{className:"text-lg font-semibold mb-2",children:"核心概念"}),e.jsx("p",{className:"text-gray-700",children:"useContext是React提供的Hook，用于在函数组件中消费Context数据。它接收一个Context对象作为参数， 返回该Context的当前值。相比于Context.Consumer，useContext提供了更简洁的API。"})]}),e.jsxs("div",{children:[e.jsx("h3",{className:"text-lg font-semibold mb-2",children:"主要优势"}),e.jsxs("ul",{className:"list-disc list-inside space-y-1 text-gray-700",children:[e.jsx("li",{children:"简洁的API - 直接返回Context值，无需render props"}),e.jsx("li",{children:"类型安全 - 支持TypeScript类型推断和检查"}),e.jsx("li",{children:"自动订阅 - 自动订阅Context变化并重新渲染"}),e.jsx("li",{children:"Hook组合 - 可以与其他Hook组合使用"}),e.jsx("li",{children:"自定义封装 - 可以创建自定义Hook封装复杂逻辑"})]})]}),e.jsxs("div",{children:[e.jsx("h3",{className:"text-lg font-semibold mb-2",children:"适用场景"}),e.jsxs("ul",{className:"list-disc list-inside space-y-1 text-gray-700",children:[e.jsx("li",{children:"函数组件中消费Context数据"}),e.jsx("li",{children:"创建自定义Hook封装Context逻辑"}),e.jsx("li",{children:"简化Context数据的访问"}),e.jsx("li",{children:"与其他Hook组合实现复杂功能"}),e.jsx("li",{children:"实现跨组件的状态管理"})]})]}),e.jsxs("div",{children:[e.jsx("h3",{className:"text-lg font-semibold mb-2",children:"使用限制"}),e.jsxs("ul",{className:"list-disc list-inside space-y-1 text-gray-700",children:[e.jsx("li",{children:"只能在函数组件中使用"}),e.jsx("li",{children:"必须在对应的Provider内部使用"}),e.jsx("li",{children:"Context值变化会导致所有消费组件重新渲染"}),e.jsx("li",{children:"需要处理Context不存在的错误情况"}),e.jsx("li",{children:"不支持条件调用，必须在组件顶层调用"})]})]})]}),examples:[{title:"示例1：基础计数器Hook",description:"展示如何使用useContext创建简单的计数器功能，包含状态管理和操作方法",component:e.jsx(V,{}),observationPoints:["useContext直接返回Context值，无需render props","自定义Hook封装Context逻辑，提供更好的API","Provider组件管理状态和提供Context值","多个组件可以共享同一个Context状态"],keyPoints:["useContext(Context)直接返回Context的当前值","必须在Provider内部使用，否则会抛出错误","使用useMemo和useCallback优化性能","自定义Hook提供更好的封装和错误处理"],commonTraps:["忘记在Provider内部使用Hook","没有处理Context不存在的错误情况","Context值频繁变化导致性能问题","在条件语句中调用useContext"],solutions:["在自定义Hook中添加错误检查和处理","使用useMemo包装Context值避免不必要的重渲染","将频繁变化和稳定的数据分离到不同Context","确保Hook在组件顶层调用"],importantTips:["useContext必须接收Context对象本身，不是Consumer或Provider","Context值变化时，所有使用该Context的组件都会重新渲染","创建自定义Hook可以提供更好的API和错误处理","使用TypeScript可以获得更好的类型安全"],codeExample:{title:"基础计数器Hook实现",code:`// 创建Context
const CounterContext = createContext<CounterContextType | undefined>(undefined); // ← 重点：创建Context

// Provider组件
const CounterProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [count, setCount] = useState(0); // ← 重点：状态管理
  
  // 使用useCallback优化函数
  const increment = useCallback(() => setCount(prev => prev + 1), []); // ← 重点：性能优化
  const decrement = useCallback(() => setCount(prev => prev - 1), []);
  const reset = useCallback(() => setCount(0), []);
  
  // 使用useMemo优化Context值
  const value = useMemo(() => ({
    count,
    increment,
    decrement,
    reset,
    setCount
  }), [count, increment, decrement, reset]); // ← 重点：避免不必要的重渲染
  
  return (
    <CounterContext.Provider value={value}> {/* ← 重点：提供Context值 */}
      {children}
    </CounterContext.Provider>
  );
};

// 自定义Hook
const useCounter = () => {
  const context = useContext(CounterContext); // ← 重点：使用useContext Hook
  if (context === undefined) {
    throw new Error('useCounter must be used within a CounterProvider'); // ← 重点：错误处理
  }
  return context;
};

// 使用Hook的组件
const CounterDisplay: React.FC = () => {
  const { count, increment, decrement, reset } = useCounter(); // ← 重点：使用自定义Hook
  
  return (
    <div>
      <div>Count: {count}</div>
      <button onClick={increment}>+1</button>
      <button onClick={decrement}>-1</button>
      <button onClick={reset}>Reset</button>
    </div>
  );
};`,language:"tsx",highlights:[2,6,9,16,25,30,32,38]}},{title:"示例2：WebSocket聊天Hook",description:"使用useContext管理WebSocket连接和消息状态，展示复杂异步状态管理",component:e.jsx(A,{}),observationPoints:["Hook封装复杂的WebSocket连接逻辑","自动管理连接状态和消息队列","提供重连和错误处理机制","实时消息同步和状态更新"],keyPoints:["使用useRef存储WebSocket实例和定时器引用","useEffect处理连接建立和清理副作用","状态机模式管理连接状态","函数式状态更新确保数据一致性"],commonTraps:["忘记清理WebSocket连接和定时器","状态更新竞态条件导致数据不一致","内存泄漏和事件监听器未清理","重连逻辑导致的无限循环"],solutions:["在useEffect中返回清理函数","使用函数式状态更新避免闭包陷阱","使用useRef存储可变引用","添加重连次数限制和指数退避"],importantTips:["WebSocket连接是副作用，需要在useEffect中处理","使用useRef存储不需要触发重渲染的值","清理函数确保组件卸载时释放资源","状态机模式可以更好地管理复杂状态"],codeExample:{title:"WebSocket Hook实现",code:`// WebSocket Provider组件
const WebSocketProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [messages, setMessages] = useState<Message[]>([]);
  const [connectionStatus, setConnectionStatus] = useState<'connecting' | 'connected' | 'disconnected' | 'error'>('disconnected');
  const wsRef = useRef<WebSocket | null>(null); // ← 重点：使用useRef存储WebSocket引用
  const reconnectTimeoutRef = useRef<NodeJS.Timeout | null>(null);
  
  // 连接函数
  const connect = useCallback(() => {
    if (wsRef.current?.readyState === WebSocket.OPEN) {
      return;
    }
    
    setConnectionStatus('connecting');
    
    // 模拟WebSocket连接
    setTimeout(() => {
      setConnectionStatus('connected'); // ← 重点：状态更新
      
      // 模拟接收系统消息
      const systemMessage: Message = {
        id: Date.now().toString(),
        text: '欢迎来到聊天室！',
        timestamp: new Date(),
        sender: 'System',
        type: 'system'
      };
      setMessages(prev => [...prev, systemMessage]); // ← 重点：函数式状态更新
    }, 1000);
  }, []);
  
  // 自动连接
  useEffect(() => {
    connect();
    return disconnect; // ← 重点：清理副作用
  }, [connect, disconnect]);
  
  // 发送消息函数
  const sendMessage = useCallback((text: string, sender: string) => {
    if (connectionStatus !== 'connected') {
      console.warn('WebSocket is not connected');
      return;
    }
    
    const message: Message = {
      id: Date.now().toString(),
      text,
      timestamp: new Date(),
      sender,
      type: 'user'
    };
    
    setMessages(prev => [...prev, message]);
  }, [connectionStatus]);
  
  // Context值优化
  const value = useMemo(() => ({
    messages,
    connectionStatus,
    sendMessage,
    clearMessages,
    reconnect,
    isConnected
  }), [messages, connectionStatus, sendMessage, clearMessages, reconnect, isConnected]);
  
  return (
    <WebSocketContext.Provider value={value}>
      {children}
    </WebSocketContext.Provider>
  );
};

// WebSocket自定义Hook
const useWebSocket = () => {
  const context = useContext(WebSocketContext);
  if (context === undefined) {
    throw new Error('useWebSocket must be used within a WebSocketProvider');
  }
  return context;
};`,language:"tsx",highlights:[5,18,28,34,38,53]}},{title:"示例3：表单管理Hook",description:"实现复杂的表单状态管理和验证功能，包含字段级别的Hook和验证器",component:e.jsx(q,{}),observationPoints:["统一的表单状态管理和验证","字段级别的Hook提供细粒度控制","自动的表单提交状态管理","灵活的验证器组合和错误处理"],keyPoints:["复杂状态使用useReducer或多个useState管理","派生状态使用useMemo计算避免重复计算","字段级别的Hook提供更好的封装","异步提交处理和错误状态管理"],commonTraps:["表单状态过于复杂导致性能问题","验证逻辑分散在多个组件中","异步提交时的状态竞态条件","字段依赖关系处理不当"],solutions:["使用useMemo优化派生状态计算","集中管理验证逻辑和错误状态","使用isSubmitting状态防止重复提交","在验证器中处理字段依赖关系"],importantTips:["表单状态管理需要考虑性能和复杂度平衡","字段级别的Hook可以提供更好的用户体验","验证器函数应该是纯函数，便于测试","异步提交需要处理加载状态和错误情况"],codeExample:{title:"表单管理Hook实现",code:`// 表单Provider组件
const FormProvider: React.FC<{ 
  children: React.ReactNode; 
  initialValues?: Record<string, any> 
}> = ({ children, initialValues = {} }) => {
  const [formState, setFormState] = useState<FormState>({}); // ← 重点：复杂状态管理
  const [isSubmitting, setIsSubmitting] = useState(false);
  
  // 计算派生状态
  const values = useMemo(() => {
    const result: Record<string, any> = {};
    Object.keys(formState).forEach(key => {
      result[key] = formState[key].value;
    });
    return result;
  }, [formState]); // ← 重点：派生状态计算
  
  // 验证单个字段
  const validateField = useCallback((name: string) => {
    const field = formState[name];
    if (!field) return;
    
    let error: string | undefined;
    
    for (const validator of field.validators) {
      error = validator(field.value); // ← 重点：字段验证
      if (error) break;
    }
    
    setError(name, error || '');
  }, [formState, setError]);
  
  // 提交表单
  const submitForm = useCallback(async (onSubmit: (values: Record<string, any>) => Promise<void>) => {
    if (isSubmitting) return;
    
    setIsSubmitting(true); // ← 重点：提交状态管理
    
    try {
      const isFormValid = validateForm();
      
      if (isFormValid) {
        await onSubmit(values); // ← 重点：异步提交处理
      } else {
        throw new Error('表单验证失败');
      }
    } catch (error) {
      console.error('Form submission error:', error);
      throw error;
    } finally {
      setIsSubmitting(false);
    }
  }, [isSubmitting, validateForm, values]);
};

// 表单字段Hook
const useFormField = (name: string, validators: Array<(value: any) => string | undefined> = []) => {
  const { values, errors, touched, setValue, setTouched, validateField, registerField } = useForm();
  
  useEffect(() => {
    registerField(name, validators); // ← 重点：自动注册字段
  }, [name, validators, registerField]);
  
  const value = values[name] || '';
  const error = errors[name];
  const isTouched = touched[name];
  
  const onChange = useCallback((newValue: any) => {
    setValue(name, newValue);
  }, [name, setValue]);
  
  const onBlur = useCallback(() => {
    setTouched(name, true);
    validateField(name);
  }, [name, setTouched, validateField]);
  
  return {
    value,
    error,
    touched: isTouched,
    onChange,
    onBlur,
    hasError: Boolean(error && isTouched)
  };
};`,language:"tsx",highlights:[6,16,26,37,42,56]}}],tutorial:{concepts:["useContext接收Context对象作为参数，返回Context的当前值","useContext只能在函数组件中使用，必须在组件顶层调用","useContext自动订阅Context变化，Context值改变时组件会重新渲染","自定义Hook可以封装useContext逻辑，提供更好的API和错误处理","Context值变化会导致所有消费组件重新渲染，需要注意性能优化"],steps:["创建Context对象：使用createContext创建Context，定义类型接口","创建Provider组件：管理状态并提供Context值给子组件","在函数组件中调用useContext：传入Context对象获取当前值","处理Context不存在的错误：检查返回值并抛出有意义的错误","创建自定义Hook：封装useContext逻辑和额外的业务逻辑","优化性能：使用useMemo和useCallback避免不必要的重渲染"],tips:["创建自定义Hook封装useContext逻辑，提供更好的开发体验","在自定义Hook中添加错误处理，确保在正确的Provider内使用","使用TypeScript提供类型安全，避免运行时错误","合理使用useMemo和useCallback优化Context值，避免不必要的重渲染","避免在Context中存储频繁变化的数据，考虑拆分多个Context","考虑将相关的Hook组合使用，提供更完整的功能"]},interview:{questions:[{question:"useContext和Context.Consumer有什么区别？",answer:"主要区别包括：1) API形式 - useContext是Hook，提供简洁的函数调用API；Consumer使用render props模式，代码更冗长；2) 使用限制 - useContext只能在函数组件中使用；Consumer可以在类组件和函数组件中使用；3) 错误处理 - useContext需要额外的错误处理逻辑；Consumer可以在JSX中直接处理；4) 性能 - useContext性能略好，避免了额外的组件层级；5) 可读性 - useContext代码更简洁直观，Consumer嵌套较深时可读性较差。"},{question:"如何创建自定义Hook来封装useContext？",answer:"创建自定义Hook的步骤：1) 在Hook内部调用useContext(Context)获取Context值；2) 添加Context不存在的错误处理，抛出有意义的错误信息；3) 提供额外的业务逻辑和计算属性，如派生状态、操作方法等；4) 使用useMemo和useCallback优化性能，避免不必要的重渲染；5) 返回组件需要的数据和方法。示例：const useCounter = () => { const context = useContext(CounterContext); if (!context) throw new Error('useCounter must be used within CounterProvider'); return context; };"},{question:"useContext的性能优化策略有哪些？",answer:"性能优化策略包括：1) Context值优化 - 使用useMemo包装Context值，避免每次渲染都创建新对象；2) 拆分Context - 将频繁变化和稳定的数据分离到不同Context中；3) 组件优化 - 使用React.memo包装消费组件，减少不必要的重渲染；4) 选择性订阅 - 创建多个小的Context而不是一个大的Context；5) 回调函数优化 - 使用useCallback包装传递给Context的函数；6) 派生状态 - 在消费组件中使用useMemo计算派生状态，而不是在Context中计算。"},{question:"useContext在什么情况下会导致性能问题？",answer:"性能问题的常见情况：1) Context值频繁变化 - 每次Context值变化都会导致所有消费组件重新渲染；2) Context值是对象或数组 - 每次渲染都创建新的引用，导致不必要的重渲染；3) 过多的消费组件 - 大量组件订阅同一个Context，变化时影响范围过大；4) 深层嵌套 - Context变化需要遍历整个组件树；5) 复杂计算 - 在Context中进行复杂计算，影响所有消费组件的性能；6) 缺乏优化 - 没有使用useMemo、useCallback等优化手段。解决方案是合理拆分Context、优化Context值、使用React.memo等。"},{question:"如何处理useContext的错误情况？",answer:"错误处理的最佳实践：1) 类型检查 - 使用TypeScript定义Context类型，编译时发现错误；2) 运行时检查 - 在自定义Hook中检查Context值是否存在；3) 错误边界 - 使用Error Boundary捕获Context相关的错误；4) 默认值 - 为Context提供合理的默认值，避免undefined错误；5) 开发工具 - 使用React DevTools检查Context的提供和消费情况；6) 测试覆盖 - 编写测试确保Context在各种情况下都能正常工作。示例：if (context === undefined) { throw new Error('Hook must be used within Provider'); }"}],keyPoints:["useContext是React提供的Hook，用于在函数组件中消费Context数据","useContext接收Context对象作为参数，返回Context的当前值","useContext只能在函数组件中使用，必须在组件顶层调用","Context值变化时，所有使用该Context的组件都会重新渲染","自定义Hook可以封装useContext逻辑，提供更好的API和错误处理","使用useMemo和useCallback优化Context值，避免不必要的重渲染","合理拆分Context可以减少性能问题和提高代码可维护性","错误处理是使用useContext的重要环节，确保在正确的Provider内使用"]},bestPractices:{dos:["创建自定义Hook封装useContext逻辑，提供更好的开发体验","在自定义Hook中添加错误处理，确保Context存在","使用TypeScript定义Context类型，提供类型安全","使用useMemo和useCallback优化Context值，避免不必要的重渲染","合理拆分Context，将相关数据组织在一起","为Context提供有意义的默认值","使用React.memo优化消费组件，减少重渲染","在Provider组件中集中管理状态和业务逻辑","使用派生状态减少Context中的冗余数据","编写测试确保Context功能的正确性"],donts:["不要在条件语句或循环中调用useContext","不要忘记在Provider内部使用useContext","不要在Context中存储频繁变化的数据","不要创建过于复杂的Context结构","不要在每次渲染时创建新的Context值对象","不要忽略Context变化对性能的影响","不要在Context中进行复杂的同步计算","不要将不相关的数据放在同一个Context中","不要忘记处理Context不存在的错误情况","不要过度使用Context，简单的props传递可能更合适"],patterns:["Provider模式：创建Provider组件管理状态并提供Context值","自定义Hook模式：封装useContext逻辑，提供更好的API","错误处理模式：在Hook中检查Context存在性并抛出有意义的错误","性能优化模式：使用useMemo和useCallback优化Context值","Context拆分模式：将不同类型的数据分离到不同的Context","派生状态模式：在消费组件中计算派生状态，而不是在Context中","组合Hook模式：将多个相关的Hook组合使用，提供完整功能","状态机模式：使用useReducer管理复杂的Context状态","异步处理模式：在Context中处理异步操作和加载状态","测试模式：为Context创建测试工具和模拟Provider"]}};return e.jsx(T,{...o})};export{L as default};
