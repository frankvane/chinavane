import{j as e,r as h,R as N}from"./index-CKwi3pR7.js";import{C as y}from"./ComponentTemplate-CukjZkuC.js";const f=h.createContext({isAuthenticated:!1,user:null,login:()=>{},logout:()=>{}}),P=()=>{const[i,b]=h.useState(!1),[n,g]=h.useState(null),[p,m]=h.useState("/login"),[j,d]=h.useState(["访问 /login"]),v=s=>{b(!0),g(s),d(l=>[...l,`用户 ${s.name} 登录成功`])},u=()=>{b(!1),g(null),m("/login"),d(s=>[...s,"用户登出"])},t=s=>{m(s);const x={"/login":{requireAuth:!1,roles:[]},"/dashboard":{requireAuth:!0,roles:["user","admin"]},"/profile":{requireAuth:!0,roles:["user","admin"]},"/admin":{requireAuth:!0,roles:["admin"]},"/admin/users":{requireAuth:!0,roles:["admin"]},"/public":{requireAuth:!1,roles:[]}}[s];if(!x){d(r=>[...r,`访问 ${s} - 页面不存在，重定向到 /404`]),m("/404");return}if(x.requireAuth&&!i){d(r=>[...r,`访问 ${s} - 未登录，重定向到 /login`]),m("/login");return}if(x.roles.length>0&&n&&!x.roles.includes(n.role)){d(r=>[...r,`访问 ${s} - 权限不足，重定向到 /403`]),m("/403");return}d(r=>[...r,`访问 ${s} - 访问成功`])},c=[{id:"1",name:"普通用户",role:"user"},{id:"2",name:"管理员",role:"admin"}],a=[{path:"/public",label:"公开页面",icon:"🌍"},{path:"/login",label:"登录页面",icon:"🔐"},{path:"/dashboard",label:"仪表板",icon:"📊"},{path:"/profile",label:"个人资料",icon:"👤"},{path:"/admin",label:"管理后台",icon:"⚙️"},{path:"/admin/users",label:"用户管理",icon:"👥"}];return e.jsx(f.Provider,{value:{isAuthenticated:i,user:n,login:v,logout:u},children:e.jsxs("div",{className:"border rounded-lg overflow-hidden",children:[e.jsxs("div",{className:"bg-gray-100 p-4",children:[e.jsx("h3",{className:"font-semibold mb-3",children:"路由守卫和权限控制"}),e.jsxs("div",{className:"mb-4 p-3 bg-white rounded border",children:[e.jsxs("div",{className:"flex items-center justify-between mb-2",children:[e.jsxs("div",{children:[e.jsx("span",{className:"text-sm font-medium",children:"当前用户: "}),e.jsx("span",{className:`font-semibold ${i?"text-green-600":"text-red-600"}`,children:i?`${n==null?void 0:n.name} (${n==null?void 0:n.role})`:"未登录"})]}),i&&e.jsx("button",{onClick:u,className:"px-3 py-1 bg-red-500 text-white rounded hover:bg-red-600 text-sm",children:"登出"})]}),!i&&e.jsx("div",{className:"flex gap-2",children:c.map(s=>e.jsxs("button",{onClick:()=>v(s),className:"px-3 py-1 bg-green-500 text-white rounded hover:bg-green-600 text-sm",children:["登录为 ",s.name]},s.id))})]}),e.jsxs("div",{className:"mb-4",children:[e.jsx("h4",{className:"text-sm font-medium mb-2",children:"路由导航："}),e.jsx("div",{className:"grid grid-cols-2 md:grid-cols-3 gap-2",children:a.map(s=>e.jsxs("button",{onClick:()=>t(s.path),className:`px-3 py-2 rounded text-sm transition-colors ${p===s.path?"bg-blue-500 text-white":"bg-white border hover:bg-gray-50"}`,children:[s.icon," ",s.label]},s.path))})]})]}),e.jsxs("div",{className:"p-4",children:[e.jsxs("div",{className:"mb-4",children:[e.jsx("strong",{children:"当前页面:"}),e.jsx("code",{className:"ml-2 bg-gray-100 px-2 py-1 rounded",children:p})]}),e.jsx("div",{className:"bg-gray-50 p-4 rounded mb-4",children:(()=>{switch(p){case"/login":return e.jsxs("div",{className:"text-center",children:[e.jsx("div",{className:"text-3xl mb-2",children:"🔐"}),e.jsx("div",{className:"font-semibold",children:"登录页面"}),e.jsx("div",{className:"text-sm text-gray-600 mt-1",children:"请选择用户进行登录"})]});case"/dashboard":return e.jsxs("div",{className:"text-center",children:[e.jsx("div",{className:"text-3xl mb-2",children:"📊"}),e.jsx("div",{className:"font-semibold",children:"仪表板"}),e.jsxs("div",{className:"text-sm text-gray-600 mt-1",children:["欢迎, ",n==null?void 0:n.name,"!"]})]});case"/profile":return e.jsxs("div",{className:"text-center",children:[e.jsx("div",{className:"text-3xl mb-2",children:"👤"}),e.jsx("div",{className:"font-semibold",children:"个人资料"}),e.jsxs("div",{className:"text-sm text-gray-600 mt-1",children:["用户: ",n==null?void 0:n.name," (",n==null?void 0:n.role,")"]})]});case"/admin":return e.jsxs("div",{className:"text-center",children:[e.jsx("div",{className:"text-3xl mb-2",children:"⚙️"}),e.jsx("div",{className:"font-semibold",children:"管理后台"}),e.jsx("div",{className:"text-sm text-gray-600 mt-1",children:"管理员专用页面"})]});case"/admin/users":return e.jsxs("div",{className:"text-center",children:[e.jsx("div",{className:"text-3xl mb-2",children:"👥"}),e.jsx("div",{className:"font-semibold",children:"用户管理"}),e.jsx("div",{className:"text-sm text-gray-600 mt-1",children:"管理系统用户"})]});case"/public":return e.jsxs("div",{className:"text-center",children:[e.jsx("div",{className:"text-3xl mb-2",children:"🌍"}),e.jsx("div",{className:"font-semibold",children:"公开页面"}),e.jsx("div",{className:"text-sm text-gray-600 mt-1",children:"无需登录即可访问"})]});case"/403":return e.jsxs("div",{className:"text-center text-red-600",children:[e.jsx("div",{className:"text-3xl mb-2",children:"🚫"}),e.jsx("div",{className:"font-semibold",children:"403 - 权限不足"}),e.jsx("div",{className:"text-sm mt-1",children:"您没有访问此页面的权限"})]});case"/404":return e.jsxs("div",{className:"text-center text-gray-500",children:[e.jsx("div",{className:"text-3xl mb-2",children:"❌"}),e.jsx("div",{className:"font-semibold",children:"404 - 页面未找到"}),e.jsx("div",{className:"text-sm mt-1",children:"请求的页面不存在"})]});default:return e.jsxs("div",{className:"text-center text-gray-500",children:[e.jsx("div",{className:"text-3xl mb-2",children:"❓"}),e.jsx("div",{className:"font-semibold",children:"未知页面"})]})}})()}),e.jsxs("div",{children:[e.jsx("strong",{children:"访问日志:"}),e.jsx("div",{className:"mt-2 bg-gray-50 p-3 rounded max-h-32 overflow-y-auto",children:j.map((s,l)=>e.jsxs("div",{className:"text-sm text-gray-700",children:[l+1,". ",s]},l))})]})]})]})})},R=()=>{const[i,b]=h.useState(new Set),[n,g]=h.useState("/home"),[p,m]=h.useState({}),[j,d]=h.useState({}),v=async a=>{if(i.has(a))return;m(r=>({...r,[a]:!0}));const s=Date.now();await new Promise(r=>setTimeout(r,Math.random()*2e3+500));const x=Date.now()-s;b(r=>new Set([...r,a])),m(r=>({...r,[a]:!1})),d(r=>({...r,[a]:x}))},u=[{path:"/home",component:"HomePage",size:"45KB",description:"首页组件"},{path:"/products",component:"ProductsPage",size:"120KB",description:"产品列表页"},{path:"/dashboard",component:"DashboardPage",size:"200KB",description:"仪表板页面"},{path:"/analytics",component:"AnalyticsPage",size:"350KB",description:"数据分析页"},{path:"/admin",component:"AdminPage",size:"180KB",description:"管理后台"}],t=async(a,s)=>{g(a),await v(s)},c=()=>{b(new Set),m({}),d({}),g("/home")};return e.jsxs("div",{className:"border rounded-lg overflow-hidden",children:[e.jsxs("div",{className:"bg-gray-100 p-4",children:[e.jsx("h3",{className:"font-semibold mb-3",children:"懒加载路由演示"}),e.jsxs("div",{className:"mb-4 flex justify-between items-center",children:[e.jsxs("div",{className:"text-sm text-gray-600",children:["已加载组件: ",i.size,"/",u.length]}),e.jsx("button",{onClick:c,className:"px-3 py-1 bg-gray-500 text-white rounded hover:bg-gray-600 text-sm",children:"重置演示"})]}),e.jsx("div",{className:"grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3",children:u.map(a=>{const s=i.has(a.component),l=p[a.component],x=j[a.component];return e.jsxs("div",{className:`p-3 rounded border transition-colors ${n===a.path?"bg-blue-50 border-blue-200":"bg-white border-gray-200"}`,children:[e.jsxs("div",{className:"flex items-center justify-between mb-2",children:[e.jsx("span",{className:"font-medium text-sm",children:a.description}),e.jsx("span",{className:`px-2 py-1 rounded text-xs ${s?"bg-green-100 text-green-800":"bg-gray-100 text-gray-600"}`,children:s?"已加载":"未加载"})]}),e.jsxs("div",{className:"text-xs text-gray-500 mb-2",children:["组件: ",a.component," (",a.size,")"]}),x&&e.jsxs("div",{className:"text-xs text-green-600 mb-2",children:["加载时间: ",x,"ms"]}),e.jsx("button",{onClick:()=>t(a.path,a.component),disabled:l,className:`w-full px-3 py-2 rounded text-sm transition-colors ${l?"bg-gray-300 text-gray-500 cursor-not-allowed":n===a.path?"bg-blue-500 text-white":"bg-blue-100 text-blue-700 hover:bg-blue-200"}`,children:l?e.jsxs("div",{className:"flex items-center justify-center",children:[e.jsx("div",{className:"animate-spin rounded-full h-4 w-4 border-b-2 border-blue-600 mr-2"}),"加载中..."]}):`访问 ${a.path}`})]},a.path)})})]}),e.jsxs("div",{className:"p-4",children:[e.jsxs("div",{className:"mb-4",children:[e.jsx("strong",{children:"当前路由:"}),e.jsx("code",{className:"ml-2 bg-gray-100 px-2 py-1 rounded",children:n})]}),e.jsxs("div",{className:"grid md:grid-cols-3 gap-4 mb-4",children:[e.jsxs("div",{className:"bg-blue-50 p-3 rounded",children:[e.jsx("div",{className:"text-blue-800 font-semibold",children:"总组件数"}),e.jsx("div",{className:"text-2xl font-bold text-blue-600",children:u.length})]}),e.jsxs("div",{className:"bg-green-50 p-3 rounded",children:[e.jsx("div",{className:"text-green-800 font-semibold",children:"已加载"}),e.jsx("div",{className:"text-2xl font-bold text-green-600",children:i.size})]}),e.jsxs("div",{className:"bg-orange-50 p-3 rounded",children:[e.jsx("div",{className:"text-orange-800 font-semibold",children:"平均加载时间"}),e.jsxs("div",{className:"text-2xl font-bold text-orange-600",children:[Object.keys(j).length>0?Math.round(Object.values(j).reduce((a,s)=>a+s,0)/Object.keys(j).length):0,"ms"]})]})]}),e.jsxs("div",{className:"bg-yellow-50 p-3 rounded",children:[e.jsx("h5",{className:"font-medium text-yellow-800 mb-2",children:"懒加载优势："}),e.jsxs("ul",{className:"text-sm text-yellow-700 space-y-1",children:[e.jsx("li",{children:"• 减少初始包大小，提高首屏加载速度"}),e.jsx("li",{children:"• 按需加载组件，节省带宽和内存"}),e.jsx("li",{children:"• 提升用户体验，特别是在移动设备上"}),e.jsx("li",{children:"• 支持代码分割，便于缓存管理"})]})]})]})]})},w=()=>{const[i,b]=h.useState("/dashboard/projects/123/tasks/456"),[n,g]=h.useState(["/dashboard/projects/123/tasks/456"]),p={"":{label:"首页",icon:"🏠"},dashboard:{label:"仪表板",icon:"📊"},projects:{label:"项目",icon:"📁"},tasks:{label:"任务",icon:"✅"},users:{label:"用户",icon:"👥"},settings:{label:"设置",icon:"⚙️"},profile:{label:"个人资料",icon:"👤"}},m={123:{type:"project",name:"React Router 教程"},456:{type:"task",name:"编写路由文档"},789:{type:"user",name:"张三"},101:{type:"project",name:"Vue.js 项目"}},d=(t=>{const c=t.split("/").filter(Boolean),a=[];a.push({path:"/",label:p[""].label,icon:p[""].icon,isActive:!1});let s="";return c.forEach((l,x)=>{s+=`/${l}`;const r=x===c.length-1;if(/^\d+$/.test(l)){const o=m[l];a.push({path:s,label:o?o.name:`ID: ${l}`,icon:(o==null?void 0:o.type)==="project"?"📋":(o==null?void 0:o.type)==="task"?"📝":"🔗",isActive:r,isDynamic:!0})}else{const o=p[l];a.push({path:s,label:o?o.label:l,icon:o?o.icon:"📄",isActive:r})}}),a})(i),v=["/dashboard","/dashboard/projects","/dashboard/projects/123","/dashboard/projects/123/tasks","/dashboard/projects/123/tasks/456","/dashboard/users/789","/dashboard/settings/profile"],u=t=>{b(t),g(c=>[...c,t])};return e.jsxs("div",{className:"border rounded-lg overflow-hidden",children:[e.jsxs("div",{className:"bg-gray-100 p-4",children:[e.jsx("h3",{className:"font-semibold mb-3",children:"面包屑导航演示"}),e.jsxs("div",{className:"mb-4",children:[e.jsx("h4",{className:"text-sm font-medium mb-2",children:"测试路径："}),e.jsx("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-2",children:v.map(t=>e.jsx("button",{onClick:()=>u(t),className:`px-3 py-2 rounded text-sm text-left transition-colors ${i===t?"bg-blue-500 text-white":"bg-white border hover:bg-gray-50"}`,children:t},t))})]}),e.jsxs("div",{className:"flex gap-2",children:[e.jsx("input",{type:"text",value:i,onChange:t=>b(t.target.value),className:"flex-1 px-3 py-2 border rounded text-sm",placeholder:"输入路径，如：/dashboard/projects/123"}),e.jsx("button",{onClick:()=>u(i),className:"px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600 text-sm",children:"生成面包屑"})]})]}),e.jsxs("div",{className:"p-4",children:[e.jsxs("div",{className:"mb-4",children:[e.jsx("strong",{children:"当前路径:"}),e.jsx("code",{className:"ml-2 bg-gray-100 px-2 py-1 rounded",children:i})]}),e.jsxs("div",{className:"mb-4",children:[e.jsx("strong",{children:"面包屑导航:"}),e.jsx("nav",{className:"mt-2 flex items-center space-x-2 p-3 bg-gray-50 rounded",children:d.map((t,c)=>e.jsxs(N.Fragment,{children:[c>0&&e.jsx("span",{className:"text-gray-400",children:"/"}),e.jsxs("button",{onClick:()=>u(t.path),className:`flex items-center space-x-1 px-2 py-1 rounded text-sm transition-colors ${t.isActive?"bg-blue-100 text-blue-800 font-semibold cursor-default":"text-blue-600 hover:bg-blue-50"}`,disabled:t.isActive,children:[e.jsx("span",{children:t.icon}),e.jsx("span",{children:t.label})]})]},t.path))})]}),e.jsxs("div",{className:"grid md:grid-cols-2 gap-4 mb-4",children:[e.jsxs("div",{children:[e.jsx("strong",{children:"面包屑层级:"}),e.jsx("div",{className:"mt-2 space-y-1",children:d.map((t,c)=>e.jsxs("div",{className:"text-sm bg-white p-2 rounded border",children:[e.jsxs("div",{className:"flex justify-between items-center",children:[e.jsxs("span",{children:[c,". ",t.icon," ",t.label]}),e.jsx("span",{className:`px-2 py-1 rounded text-xs ${t.isActive?"bg-blue-100 text-blue-800":"bg-gray-100 text-gray-600"}`,children:t.isActive?"当前":"可点击"})]}),e.jsxs("div",{className:"text-xs text-gray-500 mt-1",children:["路径: ",t.path]})]},c))})]}),e.jsxs("div",{children:[e.jsx("strong",{children:"导航历史:"}),e.jsx("div",{className:"mt-2 bg-gray-50 p-3 rounded max-h-32 overflow-y-auto",children:n.map((t,c)=>e.jsxs("div",{className:"text-sm text-gray-700",children:[c+1,". ",t]},c))})]})]}),e.jsxs("div",{className:"bg-blue-50 p-3 rounded",children:[e.jsx("h5",{className:"font-medium text-blue-800 mb-2",children:"实现要点："}),e.jsxs("ul",{className:"text-sm text-blue-700 space-y-1",children:[e.jsx("li",{children:"• 解析URL路径生成面包屑层级结构"}),e.jsx("li",{children:"• 区分静态路由和动态参数"}),e.jsx("li",{children:"• 为动态参数提供友好的显示名称"}),e.jsx("li",{children:"• 支持点击面包屑进行导航"}),e.jsx("li",{children:"• 高亮显示当前页面位置"})]})]})]})]})},k=()=>e.jsx(y,{title:"传统模式 - 常见场景",description:"探索React Router传统模式在实际项目中的常见应用场景：路由守卫与权限控制、懒加载路由优化、面包屑导航实现等实用功能。",overview:e.jsxs("div",{className:"space-y-4",children:[e.jsxs("div",{className:"grid md:grid-cols-2 gap-6",children:[e.jsxs("div",{className:"bg-blue-50 p-4 rounded-lg",children:[e.jsx("h3",{className:"font-semibold text-blue-800 mb-2",children:"🔑 核心场景"}),e.jsxs("ul",{className:"space-y-1 text-sm text-blue-700",children:[e.jsxs("li",{children:["• ",e.jsx("strong",{children:"路由守卫:"})," 基于权限的路由访问控制"]}),e.jsxs("li",{children:["• ",e.jsx("strong",{children:"懒加载:"})," 按需加载路由组件优化性能"]}),e.jsxs("li",{children:["• ",e.jsx("strong",{children:"面包屑:"})," 显示当前页面在网站中的位置"]}),e.jsxs("li",{children:["• ",e.jsx("strong",{children:"权限控制:"})," 基于用户角色的页面访问"]}),e.jsxs("li",{children:["• ",e.jsx("strong",{children:"错误处理:"})," 404、403等错误页面处理"]}),e.jsxs("li",{children:["• ",e.jsx("strong",{children:"导航状态:"})," 加载状态和用户反馈"]})]})]}),e.jsxs("div",{className:"bg-green-50 p-4 rounded-lg",children:[e.jsx("h3",{className:"font-semibold text-green-800 mb-2",children:"✨ 实际价值"}),e.jsxs("ul",{className:"space-y-1 text-sm text-green-700",children:[e.jsx("li",{children:"• 提升应用安全性和用户体验"}),e.jsx("li",{children:"• 优化应用性能和加载速度"}),e.jsx("li",{children:"• 改善导航体验和用户引导"}),e.jsx("li",{children:"• 支持复杂的业务权限需求"}),e.jsx("li",{children:"• 提供完整的错误处理机制"}),e.jsx("li",{children:"• 增强应用的可用性和可访问性"})]})]})]}),e.jsxs("div",{className:"bg-yellow-50 p-4 rounded-lg",children:[e.jsx("h3",{className:"font-semibold text-yellow-800 mb-2",children:"⚠️ 实施要点"}),e.jsxs("ul",{className:"space-y-1 text-sm text-yellow-700",children:[e.jsx("li",{children:"• 路由守卫应该在路由配置层面实现，而不是在组件内部"}),e.jsx("li",{children:"• 懒加载需要合理的代码分割策略，避免过度分割"}),e.jsx("li",{children:"• 面包屑导航需要考虑动态路由和嵌套路由的处理"}),e.jsx("li",{children:"• 权限控制需要前后端配合，前端控制仅用于用户体验"}),e.jsx("li",{children:"• 错误页面应该提供有用的信息和导航选项"})]})]})]}),examples:[{title:"路由守卫和权限控制",component:e.jsx(P,{}),description:"演示基于用户角色的路由访问控制和权限验证",observationPoints:["未登录用户访问受保护路由会被重定向到登录页","普通用户无法访问管理员专用页面","权限验证失败会显示403错误页面","访问日志记录了所有的权限检查过程"],keyPoints:["路由守卫在路由层面进行权限检查","支持基于角色的访问控制（RBAC）","提供友好的错误页面和用户反馈","记录访问日志便于调试和审计"],commonTraps:["仅在前端进行权限控制，后端未做验证","权限检查逻辑过于复杂，影响性能","忘记处理权限变化时的路由更新"],solutions:["前后端权限控制相结合，前端仅用于用户体验","使用高阶组件或Hook简化权限检查逻辑","监听权限变化，及时更新路由状态"],codeExample:{title:"路由守卫实现",code:`import { Navigate, useAuth } from 'react-router-dom';

// 权限守卫组件
function ProtectedRoute({ 
  children, 
  requiredRoles = [] 
}: { 
  children: React.ReactNode;
  requiredRoles?: string[];
}) {
  const { isAuthenticated, user } = useAuth();
  
  // 检查登录状态
  if (!isAuthenticated) {
    return <Navigate to="/login" replace />;
  }
  
  // 检查角色权限
  if (requiredRoles.length > 0 && user) {
    const hasPermission = requiredRoles.some(role => 
      user.roles.includes(role)
    );
    
    if (!hasPermission) {
      return <Navigate to="/403" replace />;
    }
  }
  
  return <>{children}</>;
}

// 路由配置
function App() {
  return (
    <Routes>
      <Route path="/login" element={<LoginPage />} />
      
      {/* 需要登录的路由 */}
      <Route 
        path="/dashboard" 
        element={
          <ProtectedRoute>
            <Dashboard />
          </ProtectedRoute>
        } 
      />
      
      {/* 需要管理员权限的路由 */}
      <Route 
        path="/admin" 
        element={
          <ProtectedRoute requiredRoles={['admin']}>
            <AdminPanel />
          </ProtectedRoute>
        } 
      />
      
      <Route path="/403" element={<ForbiddenPage />} />
      <Route path="*" element={<NotFoundPage />} />
    </Routes>
  );
}`,language:"typescript",highlights:[4,13,18,35,43]}},{title:"懒加载路由优化",component:e.jsx(R,{}),description:"演示路由组件的懒加载实现和性能优化效果",observationPoints:["首次访问路由时会显示加载状态","已加载的组件再次访问时无需重新加载","不同组件的加载时间根据大小而变化","加载统计显示了懒加载的性能效果"],keyPoints:["使用React.lazy()实现组件懒加载","Suspense组件提供加载状态显示","代码分割减少初始包大小","按需加载提升应用性能"],commonTraps:["过度分割导致网络请求过多","忘记添加Suspense包装器","懒加载组件的错误处理不当"],solutions:["合理规划代码分割策略","使用ErrorBoundary处理懒加载错误","预加载关键路由组件"],codeExample:{title:"懒加载路由配置",code:`import { lazy, Suspense } from 'react';
import { Routes, Route } from 'react-router-dom';

// 懒加载组件
const HomePage = lazy(() => import('./pages/HomePage'));
const ProductsPage = lazy(() => import('./pages/ProductsPage'));
const DashboardPage = lazy(() => import('./pages/DashboardPage'));
const AdminPage = lazy(() => import('./pages/AdminPage'));

// 加载中组件
function LoadingSpinner() {
  return (
    <div className="flex items-center justify-center h-64">
      <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-blue-600"></div>
      <span className="ml-2">加载中...</span>
    </div>
  );
}

// 错误边界组件
class LazyLoadErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }
  
  static getDerivedStateFromError(error) {
    return { hasError: true };
  }
  
  render() {
    if (this.state.hasError) {
      return (
        <div className="text-center p-8">
          <h2>组件加载失败</h2>
          <button onClick={() => window.location.reload()}>
            重新加载
          </button>
        </div>
      );
    }
    
    return this.props.children;
  }
}

// 路由配置
function App() {
  return (
    <LazyLoadErrorBoundary>
      <Suspense fallback={<LoadingSpinner />}>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/products" element={<ProductsPage />} />
          <Route path="/dashboard" element={<DashboardPage />} />
          <Route path="/admin" element={<AdminPage />} />
        </Routes>
      </Suspense>
    </LazyLoadErrorBoundary>
  );
}`,language:"typescript",highlights:[4,10,20,44,46]}},{title:"面包屑导航实现",component:e.jsx(w,{}),description:"演示动态面包屑导航的生成和交互功能",observationPoints:["面包屑会根据当前路径自动生成层级结构","动态参数（如ID）会显示为友好的名称","点击面包屑可以快速导航到上级页面","当前页面在面包屑中会高亮显示"],keyPoints:["解析URL路径生成面包屑结构","区分静态路由段和动态参数","为动态参数提供友好的显示名称","支持点击导航和状态高亮"],commonTraps:["动态参数显示为原始ID而非友好名称","嵌套路由的面包屑层级错误","面包屑点击导航逻辑不正确"],solutions:["建立ID到名称的映射关系","正确解析嵌套路由结构","使用路由导航API确保正确跳转"],codeExample:{title:"面包屑导航实现",code:`import { useLocation, Link } from 'react-router-dom';

// 路由配置映射
const routeConfig = {
  dashboard: { label: '仪表板', icon: '📊' },
  projects: { label: '项目', icon: '📁' },
  tasks: { label: '任务', icon: '✅' },
  users: { label: '用户', icon: '👥' }
};

// 动态数据获取函数
const getDynamicLabel = async (id: string, type: string) => {
  // 模拟API调用
  const data = await fetchData(type, id);
  return data.name || \`ID: \${id}\`;
};

function Breadcrumb() {
  const location = useLocation();
  const [breadcrumbItems, setBreadcrumbItems] = useState([]);
  
  useEffect(() => {
    const generateBreadcrumb = async () => {
      const pathSegments = location.pathname.split('/').filter(Boolean);
      const items = [{ path: '/', label: '首页', icon: '🏠' }];
      
      let currentPath = '';
      
      for (let i = 0; i < pathSegments.length; i++) {
        const segment = pathSegments[i];
        currentPath += \`/\${segment}\`;
        
        // 检查是否是动态参数
        if (/^d+$/.test(segment)) {
          const prevSegment = pathSegments[i - 1];
          const label = await getDynamicLabel(segment, prevSegment);
          items.push({
            path: currentPath,
            label,
            icon: '🔗',
            isDynamic: true
          });
        } else {
          const config = routeConfig[segment];
          items.push({
            path: currentPath,
            label: config?.label || segment,
            icon: config?.icon || '📄'
          });
        }
      }
      
      setBreadcrumbItems(items);
    };
    
    generateBreadcrumb();
  }, [location.pathname]);
  
  return (
    <nav className="flex items-center space-x-2 p-3 bg-gray-50 rounded">
      {breadcrumbItems.map((item, index) => (
        <React.Fragment key={item.path}>
          {index > 0 && <span className="text-gray-400">/</span>}
          <Link
            to={item.path}
            className={\`flex items-center space-x-1 px-2 py-1 rounded text-sm \${
              index === breadcrumbItems.length - 1
                ? 'bg-blue-100 text-blue-800 font-semibold'
                : 'text-blue-600 hover:bg-blue-50'
            }\`}
          >
            <span>{item.icon}</span>
            <span>{item.label}</span>
          </Link>
        </React.Fragment>
      ))}
    </nav>
  );
}`,language:"typescript",highlights:[12,23,32,35,55]}}],tutorial:{concepts:["路由守卫：在路由层面进行权限验证和访问控制","懒加载：使用React.lazy()和Suspense实现按需加载","面包屑导航：显示当前页面在网站结构中的位置","权限控制：基于用户角色和权限的页面访问管理","错误处理：404、403等错误页面的友好显示","代码分割：将应用拆分为多个chunk提升性能"],steps:["分析应用的权限需求和用户角色体系","设计路由守卫组件和权限检查逻辑","实现懒加载路由和代码分割策略","创建面包屑导航组件和路径解析逻辑","添加错误边界和加载状态处理","集成权限管理和用户认证系统","优化用户体验和性能表现","测试各种场景和边界情况"],tips:["路由守卫应该尽早在路由配置中实现","懒加载需要合理的代码分割粒度","面包屑导航要考虑动态路由的处理","权限控制需要前后端配合实现","提供友好的加载状态和错误提示","考虑SEO和可访问性要求"]},interview:{questions:[{question:"如何实现基于角色的路由权限控制？有哪些最佳实践？",answer:"实现RBAC路由控制的方法：1) 创建ProtectedRoute组件包装需要权限的路由；2) 在组件中检查用户登录状态和角色权限；3) 未授权时重定向到登录或403页面；4) 使用高阶组件或Hook简化权限检查；5) 前后端权限验证相结合；6) 提供权限变化时的路由更新机制。"},{question:"React Router中如何实现懒加载？有什么注意事项？",answer:"懒加载实现方法：1) 使用React.lazy()动态导入组件；2) 用Suspense包装提供加载状态；3) 添加ErrorBoundary处理加载错误；4) 合理规划代码分割策略避免过度分割；5) 考虑预加载关键路由；6) 使用webpack的魔法注释控制chunk命名；7) 监控bundle大小和加载性能。"},{question:"面包屑导航的实现原理是什么？如何处理动态路由？",answer:"面包屑实现原理：1) 解析当前URL路径生成路径段数组；2) 为每个路径段匹配对应的标签和图标；3) 构建可点击的导航链接；4) 动态路由处理：检测数字ID等动态参数，通过API获取友好名称；5) 支持嵌套路由的层级显示；6) 高亮当前页面位置；7) 提供快速导航功能。"},{question:"在大型应用中如何组织和管理路由结构？",answer:"大型应用路由管理策略：1) 按功能模块组织路由配置；2) 使用嵌套路由实现布局复用；3) 实现路由懒加载和代码分割；4) 建立统一的权限控制机制；5) 使用路由中间件处理通用逻辑；6) 提供路由配置的类型定义；7) 实现路由监控和分析；8) 考虑SEO和首屏性能优化。"},{question:"如何处理路由相关的错误和异常情况？",answer:"路由错误处理方案：1) 使用通配符路由处理404情况；2) 实现权限错误的403页面；3) 添加ErrorBoundary捕获组件错误；4) 处理懒加载失败的重试机制；5) 提供网络错误的友好提示；6) 记录路由错误日志便于调试；7) 实现错误页面的导航恢复功能；8) 考虑离线状态的处理。"}],keyPoints:["掌握路由守卫和权限控制的实现方法","理解懒加载的原理和最佳实践","熟悉面包屑导航的设计和实现","了解大型应用的路由组织策略","掌握路由错误处理和用户体验优化","理解代码分割和性能优化技术"]},bestPractices:{dos:["在路由配置层面实现权限控制而非组件内部","合理规划懒加载的代码分割粒度","为动态路由参数提供友好的显示名称","添加完善的错误处理和加载状态","使用TypeScript增强路由配置的类型安全","实现路由预加载优化用户体验","提供清晰的导航层级和用户引导"],donts:["不要仅在前端进行权限控制","不要过度分割代码影响加载性能","不要忽略懒加载组件的错误处理","不要让面包屑导航过于复杂","不要忘记处理权限变化时的路由更新","不要在路由组件中包含过多的业务逻辑","不要忽略SEO和可访问性要求"],patterns:["守卫路由模式：使用高阶组件包装受保护的路由","懒加载模式：结合Suspense和ErrorBoundary的组件加载","面包屑模式：基于路由结构的导航层级显示","权限路由模式：基于角色的路由访问控制","错误处理模式：统一的路由错误处理和用户反馈","性能优化模式：代码分割和预加载策略"]}});export{k as default};
