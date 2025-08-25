import{j as e,r as g}from"./index-CKwi3pR7.js";import{C as h}from"./ComponentTemplate-CukjZkuC.js";const x=()=>{const[l,c]=g.useState("/home"),[a,d]=g.useState(["/home"]),o=t=>{c(t),d(i=>[...i,t])},n=[{path:"/home",title:"首页",icon:"🏠",color:"text-blue-600"},{path:"/products",title:"产品",icon:"📦",color:"text-green-600"},{path:"/about",title:"关于",icon:"ℹ️",color:"text-purple-600"},{path:"/contact",title:"联系",icon:"📞",color:"text-orange-600"}];return e.jsxs("div",{className:"border rounded-lg overflow-hidden",children:[e.jsxs("div",{className:"bg-gray-100 p-4",children:[e.jsx("h3",{className:"font-semibold mb-3",children:"导航演示"}),e.jsxs("div",{className:"mb-4",children:[e.jsx("h4",{className:"text-sm font-medium mb-2",children:"Link 组件（普通导航）："}),e.jsx("div",{className:"flex flex-wrap gap-2",children:n.map(t=>e.jsxs("button",{onClick:()=>o(t.path),className:"px-3 py-1 bg-blue-500 text-white rounded hover:bg-blue-600 transition-colors text-sm",children:[t.icon," ",t.title]},t.path))})]}),e.jsxs("div",{className:"mb-4",children:[e.jsx("h4",{className:"text-sm font-medium mb-2",children:"NavLink 组件（带激活状态）："}),e.jsx("div",{className:"flex flex-wrap gap-2",children:n.map(t=>e.jsxs("button",{onClick:()=>o(t.path),className:`px-3 py-1 rounded transition-colors text-sm ${l===t.path?"bg-green-500 text-white font-semibold":"bg-gray-200 text-gray-700 hover:bg-gray-300"}`,children:[t.icon," ",t.title]},`nav-${t.path}`))})]})]}),e.jsxs("div",{className:"p-4",children:[e.jsxs("div",{className:"mb-3",children:[e.jsx("strong",{children:"当前路径:"})," ",e.jsx("code",{className:"bg-gray-100 px-2 py-1 rounded",children:l})]}),e.jsx("div",{className:"bg-white border rounded p-3",children:(()=>{const t=n.find(i=>i.path===l);return t?e.jsxs("div",{className:`${t.color} text-center py-4`,children:[e.jsx("div",{className:"text-3xl mb-2",children:t.icon}),e.jsxs("div",{className:"text-lg font-semibold",children:[t.title,"页面"]}),e.jsxs("div",{className:"text-sm text-gray-600 mt-1",children:["路径: ",t.path]})]}):e.jsxs("div",{className:"text-gray-500 text-center py-4",children:[e.jsx("div",{className:"text-3xl mb-2",children:"❌"}),e.jsx("div",{children:"页面未找到"})]})})()}),e.jsxs("div",{className:"mt-3",children:[e.jsx("strong",{children:"导航历史:"}),e.jsx("div",{className:"text-sm text-gray-600 mt-1",children:a.join(" → ")})]})]})]})},u=()=>{const[l,c]=g.useState("/dashboard"),[a,d]=g.useState(["初始页面: /dashboard"]),o=(i,s)=>{const r=s!=null&&s.replace?"replace":"push";c(i),d(m=>[...m,`${r}: ${i}${s!=null&&s.state?` (带状态: ${JSON.stringify(s.state)})`:""}`])},n=()=>{d(i=>[...i,"back: 返回上一页"])},t=()=>{d(i=>[...i,"forward: 前进到下一页"])};return e.jsxs("div",{className:"border rounded-lg overflow-hidden",children:[e.jsxs("div",{className:"bg-gray-100 p-4",children:[e.jsx("h3",{className:"font-semibold mb-3",children:"useNavigate 编程式导航"}),e.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-4",children:[e.jsxs("div",{children:[e.jsx("h4",{className:"text-sm font-medium mb-2",children:"基本导航："}),e.jsxs("div",{className:"space-y-2",children:[e.jsx("button",{onClick:()=>o("/profile"),className:"w-full px-3 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 text-sm",children:"navigate('/profile')"}),e.jsx("button",{onClick:()=>o("/settings"),className:"w-full px-3 py-2 bg-green-500 text-white rounded hover:bg-green-600 text-sm",children:"navigate('/settings')"})]})]}),e.jsxs("div",{children:[e.jsx("h4",{className:"text-sm font-medium mb-2",children:"高级导航："}),e.jsxs("div",{className:"space-y-2",children:[e.jsxs("button",{onClick:()=>o("/admin",{replace:!0}),className:"w-full px-3 py-2 bg-purple-500 text-white rounded hover:bg-purple-600 text-sm",children:["navigate('/admin', ","{replace: true}",")"]}),e.jsxs("button",{onClick:()=>o("/user/123",{state:{from:"dashboard"}}),className:"w-full px-3 py-2 bg-orange-500 text-white rounded hover:bg-orange-600 text-sm",children:["navigate('/user/123', ","{state: {...}}",")"]})]})]})]}),e.jsxs("div",{className:"mt-4",children:[e.jsx("h4",{className:"text-sm font-medium mb-2",children:"历史导航："}),e.jsxs("div",{className:"flex gap-2",children:[e.jsx("button",{onClick:n,className:"px-3 py-2 bg-gray-500 text-white rounded hover:bg-gray-600 text-sm",children:"← 后退"}),e.jsx("button",{onClick:t,className:"px-3 py-2 bg-gray-500 text-white rounded hover:bg-gray-600 text-sm",children:"前进 →"})]})]})]}),e.jsxs("div",{className:"p-4",children:[e.jsxs("div",{className:"mb-3",children:[e.jsx("strong",{children:"当前路径:"})," ",e.jsx("code",{className:"bg-gray-100 px-2 py-1 rounded",children:l})]}),e.jsxs("div",{children:[e.jsx("strong",{children:"导航日志:"}),e.jsx("div",{className:"mt-2 bg-gray-50 p-3 rounded max-h-32 overflow-y-auto",children:a.map((i,s)=>e.jsxs("div",{className:"text-sm text-gray-700 font-mono",children:[s+1,". ",i]},s))})]})]})]})},v=()=>{const[l,c]=g.useState("/login"),[a,d]=g.useState(!1),[o,n]=g.useState(["访问 /login"]),t=s=>{c(s),s==="/admin"&&!a?setTimeout(()=>{c("/login"),n(r=>[...r,`访问 ${s}`,"未登录，重定向到 /login"])},100):s==="/login"&&a?setTimeout(()=>{c("/dashboard"),n(r=>[...r,`访问 ${s}`,"已登录，重定向到 /dashboard"])},100):n(r=>[...r,`访问 ${s}`])},i=()=>{d(!a),n(s=>[...s,`${a?"登出":"登录"}操作`])};return e.jsxs("div",{className:"border rounded-lg overflow-hidden",children:[e.jsxs("div",{className:"bg-gray-100 p-4",children:[e.jsx("h3",{className:"font-semibold mb-3",children:"Navigate 重定向演示"}),e.jsx("div",{className:"mb-4 p-3 bg-white rounded border",children:e.jsxs("div",{className:"flex items-center justify-between",children:[e.jsxs("span",{className:"text-sm",children:["登录状态:",e.jsx("span",{className:`font-semibold ${a?"text-green-600":"text-red-600"}`,children:a?"已登录":"未登录"})]}),e.jsx("button",{onClick:i,className:`px-3 py-1 rounded text-sm ${a?"bg-red-500 text-white hover:bg-red-600":"bg-green-500 text-white hover:bg-green-600"}`,children:a?"登出":"登录"})]})}),e.jsxs("div",{className:"grid grid-cols-2 md:grid-cols-4 gap-2",children:[e.jsx("button",{onClick:()=>t("/home"),className:"px-3 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 text-sm",children:"首页"}),e.jsx("button",{onClick:()=>t("/login"),className:"px-3 py-2 bg-gray-500 text-white rounded hover:bg-gray-600 text-sm",children:"登录页"}),e.jsx("button",{onClick:()=>t("/dashboard"),className:"px-3 py-2 bg-green-500 text-white rounded hover:bg-green-600 text-sm",children:"仪表板"}),e.jsx("button",{onClick:()=>t("/admin"),className:"px-3 py-2 bg-purple-500 text-white rounded hover:bg-purple-600 text-sm",children:"管理后台"})]})]}),e.jsxs("div",{className:"p-4",children:[e.jsxs("div",{className:"mb-3",children:[e.jsx("strong",{children:"当前页面:"})," ",e.jsx("code",{className:"bg-gray-100 px-2 py-1 rounded",children:l})]}),e.jsxs("div",{children:[e.jsx("strong",{children:"重定向日志:"}),e.jsx("div",{className:"mt-2 bg-gray-50 p-3 rounded max-h-32 overflow-y-auto",children:o.map((s,r)=>e.jsxs("div",{className:"text-sm text-gray-700",children:[r+1,". ",s]},r))})]})]})]})},b=()=>e.jsx(h,{title:"传统模式 - 导航与跳转",description:"掌握React Router传统模式中的各种导航方式：Link、NavLink声明式导航，useNavigate编程式导航，以及Navigate重定向组件的使用方法和最佳实践。",overview:e.jsxs("div",{className:"space-y-4",children:[e.jsxs("div",{className:"grid md:grid-cols-2 gap-6",children:[e.jsxs("div",{className:"bg-blue-50 p-4 rounded-lg",children:[e.jsx("h3",{className:"font-semibold text-blue-800 mb-2",children:"🔑 核心概念"}),e.jsxs("ul",{className:"space-y-1 text-sm text-blue-700",children:[e.jsxs("li",{children:["• ",e.jsx("strong",{children:"Link:"})," 声明式导航组件，替代传统a标签"]}),e.jsxs("li",{children:["• ",e.jsx("strong",{children:"NavLink:"})," 带激活状态的导航组件"]}),e.jsxs("li",{children:["• ",e.jsx("strong",{children:"useNavigate:"})," 编程式导航Hook"]}),e.jsxs("li",{children:["• ",e.jsx("strong",{children:"Navigate:"})," 声明式重定向组件"]}),e.jsxs("li",{children:["• ",e.jsx("strong",{children:"useLocation:"})," 获取当前位置信息"]}),e.jsxs("li",{children:["• ",e.jsx("strong",{children:"useParams:"})," 获取路由参数"]})]})]}),e.jsxs("div",{className:"bg-green-50 p-4 rounded-lg",children:[e.jsx("h3",{className:"font-semibold text-green-800 mb-2",children:"✨ 主要优势"}),e.jsxs("ul",{className:"space-y-1 text-sm text-green-700",children:[e.jsx("li",{children:"• 单页应用导航，无页面刷新"}),e.jsx("li",{children:"• 支持浏览器前进后退按钮"}),e.jsx("li",{children:"• 自动处理路由状态管理"}),e.jsx("li",{children:"• 支持编程式和声明式导航"}),e.jsx("li",{children:"• 内置激活状态和样式控制"}),e.jsx("li",{children:"• 支持路由守卫和权限控制"})]})]})]}),e.jsxs("div",{className:"bg-yellow-50 p-4 rounded-lg",children:[e.jsx("h3",{className:"font-semibold text-yellow-800 mb-2",children:"⚠️ 注意事项"}),e.jsxs("ul",{className:"space-y-1 text-sm text-yellow-700",children:[e.jsx("li",{children:"• Link组件会阻止默认的页面刷新行为"}),e.jsx("li",{children:"• NavLink的激活状态基于路径匹配规则"}),e.jsx("li",{children:"• useNavigate返回的函数在组件卸载后不应调用"}),e.jsx("li",{children:"• Navigate组件会在渲染时立即执行重定向"}),e.jsx("li",{children:"• 编程式导航支持历史记录操作（replace、go等）"})]})]})]}),examples:[{title:"Link和NavLink基础用法",component:e.jsx(x,{}),description:"演示Link和NavLink组件的基本使用方法和区别",observationPoints:["Link组件提供基本的导航功能，点击后跳转到指定路径","NavLink组件在Link基础上增加了激活状态显示","当前激活的NavLink会应用特殊的样式（绿色背景）","导航历史记录了所有的路径跳转过程"],keyPoints:["Link组件替代传统的a标签，避免页面刷新","NavLink支持activeClassName和activeStyle属性","可以通过isActive函数自定义激活状态判断逻辑","所有导航都会更新浏览器的历史记录"],commonTraps:["在Link中使用onClick阻止默认行为可能导致导航失效","NavLink的激活状态匹配可能不符合预期","在循环中使用Link时忘记添加key属性"],solutions:["使用to属性而不是href进行路径跳转","通过end属性控制NavLink的精确匹配","使用函数形式的className或style进行动态样式控制"],codeExample:{title:"Link和NavLink使用示例",code:`import { Link, NavLink } from 'react-router-dom';

// 基本Link使用
function Navigation() {
  return (
    <nav>
      {/* 基本导航链接 */}
      <Link to="/home">首页</Link>
      <Link to="/products">产品</Link>
      
      {/* 带激活状态的导航 */}
      <NavLink 
        to="/home" 
        className={({ isActive }) => 
          isActive ? 'active-link' : 'normal-link'
        }
      >
        首页
      </NavLink>
      
      {/* 精确匹配 */}
      <NavLink to="/products" end>
        产品
      </NavLink>
      
      {/* 自定义激活判断 */}
      <NavLink 
        to="/admin"
        className={({ isActive, isPending }) => {
          if (isPending) return 'pending';
          if (isActive) return 'active';
          return 'normal';
        }}
      >
        管理后台
      </NavLink>
    </nav>
  );
}`,language:"typescript",highlights:[8,11,18,21,26]}},{title:"useNavigate编程式导航",component:e.jsx(u,{}),description:"演示useNavigate Hook的各种用法和导航选项",observationPoints:["基本导航会在历史记录中添加新条目","replace选项会替换当前历史记录条目","可以在导航时传递state数据","支持数字参数进行历史记录前进后退"],keyPoints:["useNavigate返回一个导航函数","支持字符串路径和选项对象参数","replace选项用于替换而非添加历史记录","state选项用于传递页面间的数据"],commonTraps:["在组件卸载后调用navigate函数","忘记处理导航过程中的异步状态","过度使用replace导致用户无法后退"],solutions:["在useEffect清理函数中取消导航操作","使用loading状态处理导航过程","合理使用push和replace模式"],codeExample:{title:"useNavigate使用示例",code:`import { useNavigate, useLocation } from 'react-router-dom';

function MyComponent() {
  const navigate = useNavigate();
  const location = useLocation();
  
  // 基本导航
  const goToProfile = () => {
    navigate('/profile');
  };
  
  // 替换当前历史记录
  const redirectToLogin = () => {
    navigate('/login', { replace: true });
  };
  
  // 带状态导航
  const goToUserDetail = (userId: string) => {
    navigate(\`/user/\${userId}\`, {
      state: { from: location.pathname }
    });
  };
  
  // 历史记录操作
  const goBack = () => navigate(-1);
  const goForward = () => navigate(1);
  
  // 条件导航
  const handleSubmit = async (data: any) => {
    try {
      await submitData(data);
      navigate('/success');
    } catch (error) {
      navigate('/error', { 
        state: { error: error.message } 
      });
    }
  };
  
  return (
    <div>
      <button onClick={goToProfile}>查看资料</button>
      <button onClick={redirectToLogin}>重定向登录</button>
      <button onClick={goBack}>返回</button>
    </div>
  );
}`,language:"typescript",highlights:[8,13,18,25,29]}},{title:"Navigate重定向组件",component:e.jsx(v,{}),description:"演示Navigate组件的重定向功能和权限控制应用",observationPoints:["未登录访问管理后台会自动重定向到登录页","已登录访问登录页会自动重定向到仪表板","重定向操作会记录在导航日志中","登录状态变化会影响后续的访问权限"],keyPoints:["Navigate组件在渲染时执行重定向","支持replace属性控制历史记录行为","常用于权限控制和路由守卫","可以结合条件渲染实现复杂的重定向逻辑"],commonTraps:["在循环或条件中多次渲染Navigate组件","Navigate组件的重定向逻辑过于复杂","忘记处理重定向过程中的loading状态"],solutions:["使用条件渲染确保Navigate只渲染一次","将复杂的重定向逻辑移到路由配置层","使用Suspense处理重定向过程的loading"],codeExample:{title:"Navigate重定向示例",code:`import { Navigate, useAuth } from 'react-router-dom';

// 权限路由组件
function ProtectedRoute({ children }: { children: React.ReactNode }) {
  const { isAuthenticated } = useAuth();
  
  if (!isAuthenticated) {
    return <Navigate to="/login" replace />;
  }
  
  return <>{children}</>;
}

// 登录重定向
function LoginPage() {
  const { isAuthenticated } = useAuth();
  
  if (isAuthenticated) {
    return <Navigate to="/dashboard" replace />;
  }
  
  return <LoginForm />;
}

// 条件重定向
function ConditionalRedirect() {
  const { user, loading } = useAuth();
  
  if (loading) {
    return <div>Loading...</div>;
  }
  
  if (!user) {
    return <Navigate to="/login" />;
  }
  
  if (user.role === 'admin') {
    return <Navigate to="/admin" />;
  }
  
  return <Navigate to="/dashboard" />;
}

// 在路由配置中使用
function App() {
  return (
    <Routes>
      <Route path="/login" element={<LoginPage />} />
      <Route 
        path="/admin" 
        element={
          <ProtectedRoute>
            <AdminPanel />
          </ProtectedRoute>
        } 
      />
    </Routes>
  );
}`,language:"typescript",highlights:[7,18,33,36,47]}}],tutorial:{concepts:["Link组件：声明式导航的基础组件，用于创建导航链接","NavLink组件：带激活状态的导航组件，支持样式和类名控制","useNavigate Hook：编程式导航的核心Hook，返回导航函数","Navigate组件：声明式重定向组件，在渲染时执行跳转","导航选项：replace、state等选项控制导航行为","历史记录：浏览器历史记录的管理和操作方法"],steps:["安装并导入所需的导航组件和Hook","使用Link组件替代传统的a标签创建导航","使用NavLink组件创建带激活状态的导航菜单","通过useNavigate Hook实现编程式导航逻辑","使用Navigate组件实现条件重定向和权限控制","结合路由参数和状态实现复杂的导航场景","处理导航过程中的loading和错误状态","优化导航性能和用户体验"],tips:["优先使用声明式导航（Link/NavLink），编程式导航用于复杂逻辑","NavLink的激活状态可以通过函数形式进行精确控制","使用replace选项避免在重定向时产生无用的历史记录","通过state选项在页面间传递临时数据","合理使用Navigate组件避免无限重定向循环","在异步操作中使用导航时要处理组件卸载的情况"]},interview:{questions:[{question:"Link和NavLink组件有什么区别？什么时候使用哪个？",answer:"Link是基础的导航组件，提供路由跳转功能；NavLink在Link基础上增加了激活状态支持，可以根据当前路径自动应用激活样式。在需要显示当前页面状态的导航菜单中使用NavLink，其他普通链接使用Link。"},{question:"useNavigate和Navigate组件的使用场景有什么不同？",answer:"useNavigate用于编程式导航，适合在事件处理、异步操作完成后等场景中使用；Navigate组件用于声明式重定向，适合在组件渲染时根据条件进行重定向，如权限控制、登录状态检查等。"},{question:"如何实现路由守卫和权限控制？",answer:"可以通过高阶组件包装需要保护的路由，在组件内部检查用户权限，未授权时使用Navigate组件重定向到登录页。也可以在路由配置层面使用条件渲染来控制路由访问。"},{question:"导航时如何传递数据？有哪些方式？",answer:"主要有三种方式：1) URL参数（params）- 通过路径传递；2) 查询参数（search）- 通过URL查询字符串；3) 状态（state）- 通过navigate的state选项传递，不会显示在URL中，适合传递敏感或临时数据。"},{question:"如何处理导航过程中的异步操作和错误？",answer:"可以使用loading状态管理导航过程，在异步操作完成后调用navigate。对于错误情况，可以导航到错误页面并通过state传递错误信息。还要注意在组件卸载时取消未完成的导航操作。"}],keyPoints:["掌握声明式和编程式导航的区别和使用场景","理解NavLink激活状态的匹配规则和自定义方法","熟悉导航选项（replace、state）的作用和使用时机","了解如何实现路由守卫和权限控制","掌握在导航中传递和获取数据的各种方式","理解浏览器历史记录的管理和操作方法"]},bestPractices:{dos:["使用Link/NavLink替代传统a标签进行SPA内导航","在导航菜单中使用NavLink显示当前页面状态","使用replace选项避免在重定向时产生无用历史记录","通过state选项传递页面间的临时数据","在权限控制中合理使用Navigate组件","处理异步导航操作中的loading和错误状态","使用条件渲染避免不必要的重定向"],donts:["不要在Link的onClick中阻止默认行为","不要过度使用replace模式影响用户后退体验","不要在组件卸载后调用navigate函数","不要创建无限重定向循环","不要在Navigate组件中包含复杂的重定向逻辑","不要忽略导航过程中的用户体验","不要在URL中传递敏感信息"],patterns:["导航守卫模式：使用高阶组件包装受保护的路由","条件重定向模式：根据用户状态进行智能重定向","面包屑导航模式：使用路由信息生成导航路径","标签页导航模式：使用NavLink实现标签页切换","向导导航模式：使用编程式导航实现多步骤流程","返回上页模式：使用历史记录实现智能返回"]}});export{b as default};
