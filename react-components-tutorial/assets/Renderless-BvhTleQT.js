import{j as e,r as i}from"./index-MmCcWZhd.js";import{C as y}from"./ComponentTemplate-DoUPe1QN.js";const N=({condition:s,children:r,fallback:n=null})=>s?e.jsx(e.Fragment,{children:r}):e.jsx(e.Fragment,{children:n}),p=({role:s,requiredRole:r,children:n,fallback:t=null})=>(Array.isArray(r)?r.includes(s):s===r)?e.jsx(e.Fragment,{children:n}):e.jsx(e.Fragment,{children:t}),v=({data:s,loading:r=!1,error:n=null,children:t})=>{const a=!s||Array.isArray(s)&&s.length===0;return e.jsx(e.Fragment,{children:t({data:s,loading:r,error:n,isEmpty:a})})};function f({fetcher:s,dependencies:r=[],children:n}){const[t,a]=i.useState(null),[l,c]=i.useState(!0),[d,m]=i.useState(null),h=async()=>{try{c(!0),m(null);const o=await s();a(o)}catch(o){m(o instanceof Error?o:new Error("Unknown error"))}finally{c(!1)}};return i.useEffect(()=>{h()},r),e.jsx(e.Fragment,{children:n({data:t,loading:l,error:d,refetch:h})})}function C({initialState:s,children:r}){const[n,t]=i.useState(s),a=()=>{t(s)};return e.jsx(e.Fragment,{children:r({state:n,setState:t,resetState:a})})}function k({initialValues:s,validate:r,children:n}){const[t,a]=i.useState(s),[l,c]=i.useState({}),d=r?r(t):{},m=Object.keys(d).length===0,h=(x,u)=>{a(b=>({...b,[x]:u}))},o=x=>{c(u=>({...u,[x]:!0}))},j=()=>{a(s),c({})};return e.jsx(e.Fragment,{children:n({values:t,errors:d,touched:l,isValid:m,setValue:h,setTouched:o,reset:j})})}const g=({children:s,enhance:r})=>e.jsx(e.Fragment,{children:i.Children.map(s,(n,t)=>i.isValidElement(n)?r(n,t):n)}),R=({onChildClick:s,children:r})=>e.jsx(g,{enhance:(n,t)=>i.cloneElement(n,{...n.props,onClick:a=>{n.props.onClick&&n.props.onClick(a),s(t,n.props)}}),children:r}),E=({className:s,children:r})=>e.jsx(g,{enhance:(n,t)=>{const a=n.props.className||"";return i.cloneElement(n,{...n.props,className:`${a} ${s}`.trim()})},children:r}),S=()=>{const[s,r]=i.useState(!1),[n,t]=i.useState("guest");return e.jsxs("div",{className:"space-y-4",children:[e.jsxs("div",{className:"bg-gray-50 p-4 rounded-lg mb-4",children:[e.jsx("h4",{className:"font-medium mb-2",children:"条件渲染示例"}),e.jsx("p",{className:"text-sm text-gray-600",children:"根据登录状态和用户角色动态显示不同的内容。"})]}),e.jsxs("div",{className:"flex space-x-4",children:[e.jsx("button",{onClick:()=>r(!s),className:`px-4 py-2 rounded ${s?"bg-red-500 text-white":"bg-green-500 text-white"}`,children:s?"登出":"登录"}),e.jsxs("select",{value:n,onChange:a=>t(a.target.value),className:"px-3 py-2 border border-gray-300 rounded",children:[e.jsx("option",{value:"guest",children:"访客"}),e.jsx("option",{value:"user",children:"用户"}),e.jsx("option",{value:"admin",children:"管理员"})]})]}),e.jsx(N,{condition:s,fallback:e.jsx("div",{className:"bg-red-50 border border-red-200 p-4 rounded",children:e.jsx("div",{className:"text-red-700",children:"❌ 请先登录以访问系统"})}),children:e.jsxs("div",{className:"bg-green-50 border border-green-200 p-4 rounded",children:[e.jsx("h4",{className:"font-medium text-green-800 mb-2",children:"✅ 欢迎回来！"}),e.jsxs("p",{className:"text-green-700 mb-3",children:["当前角色: ",n]}),e.jsx(p,{role:n,requiredRole:["admin","user"],fallback:e.jsx("div",{className:"bg-gray-100 p-3 rounded",children:e.jsx("p",{className:"text-gray-600",children:"🔒 访客权限有限，只能浏览基础内容"})}),children:e.jsx("div",{className:"bg-blue-50 p-3 rounded mb-2",children:e.jsx("p",{className:"text-blue-700",children:"🎯 您可以访问用户功能区域"})})}),e.jsx(p,{role:n,requiredRole:"admin",fallback:e.jsx("div",{className:"bg-yellow-50 p-3 rounded",children:e.jsx("p",{className:"text-yellow-700",children:"⚠️ 管理员功能需要更高权限"})}),children:e.jsx("div",{className:"bg-purple-50 p-3 rounded",children:e.jsx("p",{className:"text-purple-700",children:"👑 您拥有管理员权限，可以访问所有功能"})})})]})})]})},w=()=>{const s=[{id:1,name:"张三",email:"zhangsan@example.com",role:"admin"},{id:2,name:"李四",email:"lisi@example.com",role:"user"},{id:3,name:"王五",email:"wangwu@example.com",role:"user"}];return e.jsxs("div",{className:"space-y-6",children:[e.jsxs("div",{className:"bg-gray-50 p-4 rounded-lg mb-4",children:[e.jsx("h4",{className:"font-medium mb-2",children:"数据注入示例"}),e.jsx("p",{className:"text-sm text-gray-600",children:"通过无渲染组件将数据和状态注入到子组件中。"})]}),e.jsxs("div",{children:[e.jsx("h5",{className:"font-medium mb-2",children:"静态数据注入示例"}),e.jsx(v,{data:s,children:({data:r,loading:n,error:t,isEmpty:a})=>e.jsxs("div",{className:"bg-white border border-gray-200 rounded-lg p-4",children:[n&&e.jsx("div",{className:"text-blue-600",children:"📊 加载中..."}),t&&e.jsxs("div",{className:"text-red-500",children:["❌ 错误: ",t.message]}),a&&e.jsx("div",{className:"text-gray-500",children:"📭 暂无数据"}),!n&&!t&&!a&&e.jsxs("div",{children:[e.jsxs("div",{className:"text-sm text-gray-600 mb-3",children:["共 ",r.length," 条用户记录"]}),e.jsx("div",{className:"space-y-2",children:r.map(l=>e.jsxs("div",{className:"bg-gray-50 p-3 rounded flex justify-between items-center",children:[e.jsxs("div",{children:[e.jsx("div",{className:"font-medium",children:l.name}),e.jsx("div",{className:"text-sm text-gray-600",children:l.email})]}),e.jsx("div",{className:"text-xs px-2 py-1 bg-blue-100 text-blue-700 rounded",children:l.role})]},l.id))})]})]})})]}),e.jsxs("div",{children:[e.jsx("h5",{className:"font-medium mb-2",children:"异步数据加载示例"}),e.jsx(f,{fetcher:async()=>(await new Promise(r=>setTimeout(r,1500)),s.slice(0,2)),children:({data:r,loading:n,error:t,refetch:a})=>e.jsxs("div",{className:"bg-white border border-gray-200 rounded-lg p-4",children:[n&&e.jsxs("div",{className:"flex items-center text-blue-600",children:[e.jsx("div",{className:"animate-spin rounded-full h-4 w-4 border-b-2 border-blue-600 mr-2"}),e.jsx("span",{children:"🔄 异步加载中..."})]}),t&&e.jsxs("div",{className:"text-red-500",children:["❌ 加载失败: ",t.message,e.jsx("button",{onClick:a,className:"ml-2 px-2 py-1 text-xs bg-red-100 text-red-700 rounded hover:bg-red-200",children:"重试"})]}),r&&!n&&e.jsxs("div",{children:[e.jsxs("div",{className:"flex justify-between items-center mb-3",children:[e.jsxs("span",{className:"text-sm text-gray-600",children:["✅ 异步加载完成，共 ",r.length," 条记录"]}),e.jsx("button",{onClick:a,className:"px-2 py-1 text-xs bg-blue-100 text-blue-700 rounded hover:bg-blue-200",children:"🔄 刷新"})]}),e.jsx("div",{className:"space-y-2",children:r.map(l=>e.jsxs("div",{className:"bg-blue-50 p-3 rounded",children:[e.jsx("div",{className:"font-medium",children:l.name}),e.jsx("div",{className:"text-sm text-gray-600",children:l.email})]},l.id))})]})]})})]})]})},P=()=>e.jsxs("div",{className:"space-y-6",children:[e.jsxs("div",{className:"bg-gray-50 p-4 rounded-lg mb-4",children:[e.jsx("h4",{className:"font-medium mb-2",children:"状态管理示例"}),e.jsx("p",{className:"text-sm text-gray-600",children:"通过无渲染组件管理复杂的状态逻辑。"})]}),e.jsxs("div",{children:[e.jsx("h5",{className:"font-medium mb-2",children:"通用状态管理示例"}),e.jsx(C,{initialState:{count:0,step:1},children:({state:s,setState:r,resetState:n})=>e.jsxs("div",{className:"bg-white border border-gray-200 rounded-lg p-4",children:[e.jsxs("div",{className:"flex items-center space-x-4 mb-4",children:[e.jsx("span",{className:"text-2xl font-bold text-blue-600",children:s.count}),e.jsxs("span",{className:"text-sm text-gray-600",children:["步长: ",s.step]})]}),e.jsxs("div",{className:"flex space-x-2 mb-4",children:[e.jsxs("button",{onClick:()=>r(t=>({...t,count:t.count-t.step})),className:"px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600",children:["-",s.step]}),e.jsxs("button",{onClick:()=>r(t=>({...t,count:t.count+t.step})),className:"px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600",children:["+",s.step]}),e.jsx("button",{onClick:n,className:"px-4 py-2 bg-gray-500 text-white rounded hover:bg-gray-600",children:"🔄 重置"})]}),e.jsxs("div",{className:"flex items-center space-x-2",children:[e.jsx("label",{className:"text-sm font-medium",children:"调整步长:"}),e.jsx("input",{type:"number",value:s.step,onChange:t=>r(a=>({...a,step:parseInt(t.target.value)||1})),className:"w-20 px-2 py-1 border border-gray-300 rounded text-sm",min:"1"})]})]})})]}),e.jsxs("div",{children:[e.jsx("h5",{className:"font-medium mb-2",children:"表单状态管理示例"}),e.jsx(k,{initialValues:{username:"",email:""},validate:s=>{const r={};return s.username||(r.username="用户名不能为空"),s.email?/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(s.email)||(r.email="邮箱格式不正确"):r.email="邮箱不能为空",r},children:({values:s,errors:r,touched:n,isValid:t,setValue:a,setTouched:l,reset:c})=>e.jsx("div",{className:"bg-white border border-gray-200 rounded-lg p-4",children:e.jsxs("div",{className:"space-y-4",children:[e.jsxs("div",{children:[e.jsx("input",{type:"text",placeholder:"用户名",value:s.username,onChange:d=>a("username",d.target.value),onBlur:()=>l("username"),className:"w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"}),n.username&&r.username&&e.jsxs("div",{className:"text-red-500 text-xs mt-1",children:["❌ ",r.username]})]}),e.jsxs("div",{children:[e.jsx("input",{type:"email",placeholder:"邮箱",value:s.email,onChange:d=>a("email",d.target.value),onBlur:()=>l("email"),className:"w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"}),n.email&&r.email&&e.jsxs("div",{className:"text-red-500 text-xs mt-1",children:["❌ ",r.email]})]}),e.jsxs("div",{className:"flex justify-between items-center pt-2",children:[e.jsxs("div",{className:"text-sm",children:["表单状态: ",t?"✅ 有效":"❌ 无效"]}),e.jsx("button",{onClick:c,className:"px-3 py-1 bg-gray-300 text-gray-700 rounded text-sm hover:bg-gray-400",children:"🔄 重置表单"})]})]})})})]})]}),T=()=>{const[s,r]=i.useState([]),n=(t,a)=>{const l=`点击了第${t+1}个按钮: ${a.children}`;r(c=>[...c.slice(-4),l])};return e.jsxs("div",{className:"space-y-6",children:[e.jsxs("div",{className:"bg-gray-50 p-4 rounded-lg mb-4",children:[e.jsx("h4",{className:"font-medium mb-2",children:"子组件增强示例"}),e.jsx("p",{className:"text-sm text-gray-600",children:"通过无渲染组件增强子组件的功能，如添加点击追踪、样式注入等。"})]}),e.jsxs("div",{children:[e.jsx("h5",{className:"font-medium mb-2",children:"点击追踪示例"}),e.jsxs("div",{className:"bg-white border border-gray-200 rounded-lg p-4",children:[e.jsxs(R,{onChildClick:n,children:[e.jsx("button",{className:"px-4 py-2 bg-blue-500 text-white rounded mr-2 hover:bg-blue-600",children:"按钮 1"}),e.jsx("button",{className:"px-4 py-2 bg-green-500 text-white rounded mr-2 hover:bg-green-600",children:"按钮 2"}),e.jsx("button",{className:"px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600",children:"按钮 3"})]}),s.length>0&&e.jsxs("div",{className:"mt-4 p-3 bg-gray-50 rounded border",children:[e.jsx("h6",{className:"font-medium mb-2 text-gray-700",children:"📊 点击日志:"}),e.jsx("div",{className:"space-y-1",children:s.map((t,a)=>e.jsxs("div",{className:"text-sm text-gray-600 flex items-center",children:[e.jsx("span",{className:"text-blue-500 mr-2",children:"•"}),t]},a))})]})]})]}),e.jsxs("div",{children:[e.jsx("h5",{className:"font-medium mb-2",children:"样式注入示例"}),e.jsxs("div",{className:"bg-white border border-gray-200 rounded-lg p-4",children:[e.jsxs("div",{className:"mb-4",children:[e.jsx("h6",{className:"text-sm font-medium mb-2 text-gray-700",children:"原始按钮:"}),e.jsx("button",{className:"px-4 py-2 bg-gray-300 text-gray-700 rounded mr-2",children:"普通按钮"}),e.jsx("button",{className:"px-4 py-2 bg-blue-500 text-white rounded",children:"蓝色按钮"})]}),e.jsxs("div",{children:[e.jsx("h6",{className:"text-sm font-medium mb-2 text-gray-700",children:"注入样式后 (添加阴影和悬停效果):"}),e.jsxs(E,{className:"shadow-lg hover:shadow-xl transition-all duration-200 hover:scale-105 transform",children:[e.jsx("button",{className:"px-4 py-2 bg-gray-300 text-gray-700 rounded mr-2",children:"增强按钮"}),e.jsx("button",{className:"px-4 py-2 bg-blue-500 text-white rounded",children:"增强蓝色按钮"})]})]})]})]})]})},F=()=>{const s={title:"无渲染组件 (Renderless Components)",description:"无渲染组件是一种React设计模式，专注于逻辑复用而不关心UI渲染。它们通过render props或children函数的方式，将状态和行为注入到子组件中，实现逻辑与视图的完全分离。",overview:e.jsxs("div",{className:"space-y-4",children:[e.jsxs("div",{children:[e.jsx("h3",{className:"text-lg font-semibold mb-2",children:"核心概念"}),e.jsx("p",{className:"text-gray-700",children:"无渲染组件是一种React设计模式，专注于逻辑复用而不关心UI渲染。它们通过render props或children函数的方式， 将状态和行为注入到子组件中，实现逻辑与视图的完全分离。这种模式让组件的逻辑可以在不同的UI实现之间复用。"})]}),e.jsxs("div",{children:[e.jsx("h3",{className:"text-lg font-semibold mb-2",children:"主要优势"}),e.jsxs("ul",{className:"list-disc list-inside space-y-1 text-gray-700",children:[e.jsx("li",{children:"逻辑复用 - 将复杂的状态逻辑从UI中抽离，实现跨组件复用"}),e.jsx("li",{children:"关注点分离 - 逻辑组件专注业务逻辑，UI组件专注视觉呈现"}),e.jsx("li",{children:"灵活性高 - 同一套逻辑可以适配多种不同的UI实现"}),e.jsx("li",{children:"测试友好 - 逻辑和UI可以独立测试，提高测试覆盖率"}),e.jsx("li",{children:"可组合性 - 多个无渲染组件可以轻松组合使用"})]})]}),e.jsxs("div",{children:[e.jsx("h3",{className:"text-lg font-semibold mb-2",children:"适用场景"}),e.jsxs("ul",{className:"list-disc list-inside space-y-1 text-gray-700",children:[e.jsx("li",{children:"状态管理 - 复杂的状态逻辑需要在多个组件间复用"}),e.jsx("li",{children:"数据获取 - 异步数据加载和缓存逻辑的抽象"}),e.jsx("li",{children:"表单处理 - 表单验证、提交等逻辑的统一管理"}),e.jsx("li",{children:"权限控制 - 基于角色的访问控制逻辑"}),e.jsx("li",{children:"条件渲染 - 复杂的条件判断和渲染逻辑"})]})]}),e.jsxs("div",{children:[e.jsx("h3",{className:"text-lg font-semibold mb-2",children:"实现方式"}),e.jsxs("ul",{className:"list-disc list-inside space-y-1 text-gray-700",children:[e.jsx("li",{children:"Render Props - 通过函数prop接收渲染逻辑"}),e.jsx("li",{children:"Children Function - 使用children作为函数来传递渲染逻辑"}),e.jsx("li",{children:"Higher-Order Components - 通过HOC包装组件注入逻辑"}),e.jsx("li",{children:"Custom Hooks - 使用Hook抽象逻辑（现代推荐方式）"})]})]})]}),examples:[{title:"示例1：条件渲染组件",description:"基于条件和权限控制的无渲染组件实现",component:e.jsx(S,{}),observationPoints:["Conditional组件根据condition prop决定渲染children还是fallback","Permission组件基于角色权限控制内容的显示","无渲染组件不产生额外的DOM结构","逻辑完全与UI分离，可以复用到任何场景"],keyPoints:["无渲染组件通过children函数或render props传递渲染逻辑","组件内部只处理逻辑，不关心具体的UI实现","可以轻松组合多个无渲染组件实现复杂功能"],commonTraps:["过度使用无渲染组件导致组件层级过深","在render函数中创建新的函数导致性能问题","逻辑过于复杂时反而降低了代码可读性"],solutions:["合理评估是否需要使用无渲染组件","使用useCallback缓存传递给无渲染组件的函数","保持无渲染组件的逻辑简单清晰"],importantTips:["无渲染组件的核心是逻辑复用，而不是UI复用","适合将复杂的状态逻辑从UI组件中抽离","现代React开发中，Custom Hooks通常是更好的选择"],codeExample:{title:"条件渲染无渲染组件实现",code:`// 条件渲染无渲染组件
interface ConditionalProps {
  condition: boolean;  // ← 重点：条件判断的核心prop
  children: ReactNode;
  fallback?: ReactNode;  // ← 重点：条件不满足时的备选内容
}

const Conditional: React.FC<ConditionalProps> = ({
  condition,
  children,
  fallback = null
}) => {
  return condition ? <>{children}</> : <>{fallback}</>;  // ← 重点：纯逻辑判断，无UI结构
};

// 权限控制无渲染组件
interface PermissionProps {
  role: string;
  requiredRole: string | string[];  // ← 重点：支持单个或多个角色
  children: ReactNode;
  fallback?: ReactNode;
}

const Permission: React.FC<PermissionProps> = ({
  role,
  requiredRole,
  children,
  fallback = null
}) => {
  const hasPermission = Array.isArray(requiredRole)   // ← 重点：权限判断逻辑
    ? requiredRole.includes(role)
    : role === requiredRole;

  return hasPermission ? <>{children}</> : <>{fallback}</>;
};`,language:"typescript",highlights:[3,5,12,17,25,26,27],description:"无渲染组件专注于逻辑处理，通过条件判断控制内容渲染，不产生额外DOM结构。"}},{title:"示例2：数据注入组件",description:"通过无渲染组件注入数据和异步状态管理",component:e.jsx(w,{}),observationPoints:["DataProvider组件将数据状态注入到children函数中","AsyncData组件处理异步数据加载的完整生命周期","子组件通过函数参数接收数据和状态","loading、error、data等状态被统一管理"],keyPoints:["数据获取逻辑与UI展示完全分离","异步状态管理被封装在无渲染组件中","子组件只需关心如何展示数据，不需要处理加载状态"],commonTraps:["在children函数中进行复杂的数据处理","忘记处理loading和error状态","异步操作没有正确清理导致内存泄漏"],solutions:["保持children函数的纯净，只做UI渲染","在无渲染组件中统一处理所有异步状态","使用useEffect的清理函数避免内存泄漏"],importantTips:["数据注入是无渲染组件的经典应用场景","异步状态管理应该在无渲染组件中统一处理","children函数应该保持纯净，只负责UI渲染"],codeExample:{title:"数据注入无渲染组件实现",code:`// 数据提供者无渲染组件
interface DataProviderProps {
  data: any;
  loading?: boolean;
  error?: Error | null;
  children: (props: {  // ← 重点：children作为函数接收数据状态
    data: any;
    loading: boolean;
    error: Error | null;
    isEmpty: boolean;
  }) => ReactNode;
}

const DataProvider: React.FC<DataProviderProps> = ({
  data,
  loading = false,  // 默认值
  error = null,     // 默认值
  children
}) => {
  const isEmpty = !data || (Array.isArray(data) && data.length === 0);  // ← 重点：数据状态计算
  return <>{children({ data, loading, error, isEmpty })}</>;
};

// 异步数据无渲染组件
function AsyncData<T>({
  fetcher,  // ← 重点：数据获取函数
  dependencies = [],
  children
}: AsyncDataProps<T>) {
  const [data, setData] = useState<T | null>(null);
  const [loading, setLoading] = useState(true);  // ← 重点：异步状态管理
  const [error, setError] = useState<Error | null>(null);

  const fetchData = async () => {
    try {
      setLoading(true);
      setError(null);
      const result = await fetcher();  // ← 重点：执行异步数据获取
      setData(result);
    } catch (err) {
      setError(err instanceof Error ? err : new Error('Unknown error'));
    } finally {
      setLoading(false);
    }
  };

  return <>{children({ data, loading, error, refetch: fetchData })}</>;
}`,language:"typescript",highlights:[6,19,20,25,30,31,37,45],description:"数据注入组件将数据获取逻辑封装，通过children函数向子组件提供数据和状态。"}},{title:"示例3：状态管理组件",description:"通用状态管理和表单状态处理的无渲染组件",component:e.jsx(P,{}),observationPoints:["StateManager提供通用的状态管理能力","FormState专门处理表单相关的状态和验证","状态逻辑完全封装在无渲染组件中","子组件通过函数参数获得状态操作方法"],keyPoints:["状态管理逻辑与UI组件完全分离","表单验证逻辑被统一封装和复用","提供了丰富的状态操作方法"],commonTraps:["状态结构设计不合理导致频繁更新","验证逻辑过于复杂影响性能","忘记重置状态导致数据残留"],solutions:["合理设计状态结构，避免不必要的嵌套","使用useMemo优化复杂的验证计算","提供reset方法确保状态可以正确重置"],importantTips:["状态管理是无渲染组件的重要应用领域","表单处理逻辑应该统一封装以提高复用性","状态操作方法应该保持简单和一致性"],codeExample:{title:"状态管理无渲染组件实现",code:`// 通用状态管理无渲染组件
interface StateManagerProps<T> {
  initialState: T;  // ← 重点：泛型支持任意状态类型
  children: (props: {
    state: T;
    setState: React.Dispatch<React.SetStateAction<T>>;
    resetState: () => void;  // ← 重点：提供重置功能
  }) => ReactNode;
}

function StateManager<T>({
  initialState,
  children
}: StateManagerProps<T>) {
  const [state, setState] = useState<T>(initialState);

  const resetState = () => {
    setState(initialState);  // ← 重点：重置到初始状态
  };

  return <>{children({ state, setState, resetState })}</>;
}

// 表单状态管理无渲染组件
function FormState<T extends Record<string, any>>({
  initialValues,
  validate,  // ← 重点：可选的验证函数
  children
}: FormStateProps<T>) {
  const [values, setValues] = useState<T>(initialValues);
  const [touched, setTouchedState] = useState<Partial<Record<keyof T, boolean>>>({});

  const errors = validate ? validate(values) : {};  // ← 重点：动态验证
  const isValid = Object.keys(errors).length === 0;

  const setValue = (field: keyof T, value: any) => {
    setValues(prev => ({ ...prev, [field]: value }));  // ← 重点：字段级更新
  };

  return <>{children({ values, errors, touched, isValid, setValue, setTouched, reset })}</>;
}`,language:"typescript",highlights:[3,7,18,27,33,34,37,40],description:"状态管理组件提供通用的状态操作能力，支持泛型和自定义验证逻辑。"}},{title:"示例4：子组件增强组件",description:"通过无渲染组件增强子组件功能，如点击追踪和样式注入",component:e.jsx(T,{}),observationPoints:["ChildrenEnhancer遍历并增强所有子组件","ClickTracker为子组件添加点击事件追踪","StyleInjector为子组件注入额外的CSS类","原有的组件功能和事件处理保持不变"],keyPoints:["子组件增强是无渲染组件的高级应用","通过cloneElement为子组件注入新的props","保持原有功能的同时添加新的能力"],commonTraps:["过度使用cloneElement导致性能问题","破坏了原有组件的事件处理逻辑","增强逻辑过于复杂难以维护"],solutions:["只在必要时使用子组件增强模式","确保增强逻辑不会覆盖原有的事件处理","保持增强逻辑的简单和可预测性"],importantTips:["子组件增强适用于需要批量修改子组件行为的场景","使用cloneElement时要小心处理原有的props","这种模式在现代React中应该谨慎使用"],codeExample:{title:"子组件增强无渲染组件实现",code:`// 子组件增强器基础组件
interface ChildrenEnhancerProps {
  children: ReactNode;
  enhance: (child: React.ReactElement, index: number) => React.ReactElement;  // ← 重点：增强函数
}

const ChildrenEnhancer: React.FC<ChildrenEnhancerProps> = ({
  children,
  enhance
}) => {
  return (
    <>
      {Children.map(children, (child, index) => {  // ← 重点：遍历所有子组件
        if (isValidElement(child)) {
          return enhance(child, index);  // ← 重点：应用增强逻辑
        }
        return child;
      })}
    </>
  );
};

// 点击追踪增强组件
const ClickTracker: React.FC<ClickTrackerProps> = ({
  onChildClick,
  children
}) => {
  return (
    <ChildrenEnhancer
      enhance={(child, index) => {
        return cloneElement(child, {  // ← 重点：克隆并增强子组件
          ...child.props,
          onClick: (e: React.MouseEvent) => {
            if (child.props.onClick) child.props.onClick(e);  // ← 重点：保持原有事件
            onChildClick(index, child.props);  // ← 重点：添加追踪逻辑
          }
        });
      }}
    >
      {children}
    </ChildrenEnhancer>
  );
};`,language:"typescript",highlights:[4,13,15,30,33,34],description:"子组件增强器通过cloneElement为子组件注入新功能，同时保持原有行为不变。"}}],tutorial:{concepts:["无渲染组件专注于逻辑复用而不关心UI渲染，通过render props或children函数将状态和行为注入到子组件中","核心思想是将'做什么'（逻辑）与'怎么显示'（UI）完全分离，实现最大程度的代码复用","主要实现方式包括Render Props模式和Children Function模式","与HOC相比，无渲染组件通过函数参数明确传递数据，避免了props命名冲突问题"],steps:["定义组件接口：明确需要哪些输入参数，以及children函数的签名","实现逻辑处理：在组件内部实现所有的业务逻辑，包括状态管理、事件处理、副作用等","调用和使用：通过children函数接收逻辑组件提供的状态和方法，实现具体的UI渲染"],tips:["保持逻辑组件的单一职责，避免承担过多功能","使用TypeScript确保类型安全和更好的开发体验","考虑性能优化，使用React.memo、useCallback和useMemo避免不必要的重渲染","提供合理的默认值和错误处理机制","现代React开发中，Custom Hooks通常是更好的选择"]},interview:{questions:[{question:"什么是无渲染组件？它解决了什么问题？",answer:"无渲染组件是专注于逻辑复用而不关心UI渲染的React组件，通过render props或children函数将状态和行为注入到子组件，解决了逻辑与UI耦合的问题，实现了关注点分离，提高了代码的复用性和可测试性。"},{question:"无渲染组件与HOC有什么区别？",answer:"HOC是函数，返回增强后的组件；无渲染组件是普通组件，通过children函数传递逻辑。HOC可能存在props命名冲突；无渲染组件通过函数参数明确传递数据。HOC适合简单的逻辑增强；无渲染组件适合复杂的状态逻辑复用。"},{question:"无渲染组件与自定义Hook的区别？",answer:"无渲染组件是React组件，参与组件树；Hook是JavaScript函数，不参与组件树。无渲染组件通过render props传递数据；Hook通过返回值传递数据。现代React开发中，Hook通常是更好的选择。"},{question:"如何优化无渲染组件的性能？",answer:"使用React.memo包装组件避免不必要的重渲染，使用useCallback缓存传递给children的函数，使用useMemo缓存复杂的计算结果，避免在render中创建新的函数或对象。"}],keyPoints:["无渲染组件的核心是逻辑复用，而不是UI复用","通过render props或children函数实现逻辑与UI的分离","适合将复杂的状态逻辑从UI组件中抽离","需要注意性能优化，避免不必要的重渲染","现代React开发中，Custom Hooks通常是更好的选择"]},bestPractices:{dos:["保持单一职责：每个无渲染组件应该只负责一个特定的逻辑功能","使用TypeScript：为无渲染组件提供完整的类型定义，确保类型安全","性能优化：使用React.memo、useCallback和useMemo优化性能","错误边界处理：妥善处理错误情况，提供合理的错误状态和恢复机制","提供默认值：为所有可选参数提供合理的默认值，提高组件的易用性","清理副作用：确保在组件卸载时正确清理定时器、订阅和异步操作"],donts:["过度抽象：不要为了抽象而抽象，简单的逻辑不需要无渲染组件","在render中创建函数：避免在render方法中创建新的函数，这会导致子组件不必要的重渲染","忽略错误处理：不要忽略异步操作的错误处理，这会导致应用崩溃或用户体验差"],patterns:["Render Props：通过render prop传递渲染逻辑，是无渲染组件的经典实现方式","Children Function：使用children作为函数，是现代React中更常用的方式","Custom Hooks：现代React开发中，Custom Hooks通常是更好的选择"]}};return e.jsx(y,{...s})};export{F as default};
