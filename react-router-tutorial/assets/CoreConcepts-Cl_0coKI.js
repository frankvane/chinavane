import{j as e,r as i}from"./index-CKwi3pR7.js";import{C as d}from"./ComponentTemplate-CukjZkuC.js";const c=()=>{const[t,r]=i.useState("browser"),[o,a]=i.useState("/"),n=[{path:"/",label:"首页",content:"首页内容",color:"bg-blue-100"},{path:"/about",label:"关于",content:"关于页面",color:"bg-green-100"},{path:"/contact",label:"联系",content:"联系页面",color:"bg-purple-100"}],l=n.find(s=>s.path===o)||n[0],u=()=>{const s="https://example.com";switch(t){case"browser":return`${s}${o}`;case"hash":return`${s}/#${o}`;case"memory":return`${s} (内存路由，URL不变)`;default:return s}};return e.jsxs("div",{className:"space-y-4",children:[e.jsxs("div",{className:"flex space-x-2 mb-4",children:[e.jsx("button",{onClick:()=>r("browser"),className:`px-4 py-2 rounded ${t==="browser"?"bg-blue-500 text-white":"bg-gray-200 text-gray-700 hover:bg-gray-300"}`,children:"BrowserRouter"}),e.jsx("button",{onClick:()=>r("hash"),className:`px-4 py-2 rounded ${t==="hash"?"bg-blue-500 text-white":"bg-gray-200 text-gray-700 hover:bg-gray-300"}`,children:"HashRouter"}),e.jsx("button",{onClick:()=>r("memory"),className:`px-4 py-2 rounded ${t==="memory"?"bg-blue-500 text-white":"bg-gray-200 text-gray-700 hover:bg-gray-300"}`,children:"MemoryRouter"})]}),e.jsxs("div",{className:"border-2 border-dashed border-gray-300 p-4 rounded-lg",children:[e.jsxs("h4",{className:"font-semibold mb-2",children:["当前使用：",t,"Router"]}),e.jsxs("div",{className:"p-4 border rounded-lg bg-gray-50",children:[e.jsxs("div",{className:"mb-4",children:[e.jsx("h5",{className:"font-semibold mb-2",children:"模拟路由信息："}),e.jsxs("div",{className:"bg-white p-3 rounded border text-sm",children:[e.jsxs("p",{children:[e.jsx("strong",{children:"URL显示:"})," ",u()]}),e.jsxs("p",{children:[e.jsx("strong",{children:"当前路径:"})," ",o]}),e.jsxs("p",{children:[e.jsx("strong",{children:"Router类型:"})," ",t,"Router"]})]})]}),e.jsx("div",{className:"space-x-2 mb-4",children:n.map(s=>e.jsx("button",{onClick:()=>a(s.path),className:`px-3 py-1 rounded hover:opacity-80 ${s.path==="/"?"bg-blue-500 text-white":s.path==="/about"?"bg-green-500 text-white":"bg-purple-500 text-white"}`,children:s.label},s.path))}),e.jsx("div",{className:`p-3 rounded ${l.color}`,children:l.content})]})]})]})},h=()=>{const[t,r]=i.useState("/home"),o=[{path:"/home",element:"🏠 欢迎来到首页",color:"text-blue-600",label:"首页"},{path:"/products",element:"📦 产品列表页面",color:"text-green-600",label:"产品"},{path:"/products/123",element:"📋 产品详情页面 (ID: 123)",color:"text-yellow-600",label:"产品详情"},{path:"/admin",element:"⚙️ 管理后台（支持嵌套路由）",color:"text-red-600",label:"管理后台"}],n=(()=>{const l=o.find(u=>u.path===t);return l||(t.startsWith("/products/")?{path:t,element:`📋 产品详情页面 (ID: ${t.split("/")[2]})`,color:"text-yellow-600",label:"产品详情"}:t.startsWith("/admin/")?{path:t,element:"⚙️ 管理后台（支持嵌套路由）",color:"text-red-600",label:"管理后台"}:{path:t,element:"❌ 404 - 页面未找到",color:"text-gray-500",label:"404"})})();return e.jsxs("div",{className:"p-4 border rounded-lg bg-gray-50",children:[e.jsxs("nav",{className:"mb-4 space-x-2",children:[e.jsx("button",{onClick:()=>r("/home"),className:"px-3 py-1 bg-blue-500 text-white rounded hover:bg-blue-600",children:"首页"}),e.jsx("button",{onClick:()=>r("/products"),className:"px-3 py-1 bg-green-500 text-white rounded hover:bg-green-600",children:"产品"}),e.jsx("button",{onClick:()=>r("/products/123"),className:"px-3 py-1 bg-yellow-500 text-white rounded hover:bg-yellow-600",children:"产品详情"}),e.jsx("button",{onClick:()=>r("/admin"),className:"px-3 py-1 bg-red-500 text-white rounded hover:bg-red-600",children:"管理后台"}),e.jsx("button",{onClick:()=>r("/unknown"),className:"px-3 py-1 bg-gray-500 text-white rounded hover:bg-gray-600",children:"404测试"})]}),e.jsxs("div",{className:"bg-white p-4 rounded border",children:[e.jsxs("div",{className:"mb-2 text-sm text-gray-600",children:[e.jsx("strong",{children:"当前路径:"})," ",t]}),e.jsx("div",{className:`text-lg ${n.color}`,children:n.element})]})]})},m=()=>{const[t,r]=i.useState("/dashboard"),o=({children:n})=>e.jsxs("div",{className:"border rounded-lg overflow-hidden",children:[e.jsxs("header",{className:"bg-blue-500 text-white p-3",children:[e.jsx("h3",{className:"font-semibold",children:"网站布局"}),e.jsxs("nav",{className:"mt-2 space-x-2",children:[e.jsx("button",{onClick:()=>r("/dashboard"),className:`px-2 py-1 rounded text-sm hover:bg-blue-700 ${t==="/dashboard"?"bg-blue-700":"bg-blue-600"}`,children:"仪表板"}),e.jsx("button",{onClick:()=>r("/dashboard/profile"),className:`px-2 py-1 rounded text-sm hover:bg-blue-700 ${t==="/dashboard/profile"?"bg-blue-700":"bg-blue-600"}`,children:"个人资料"}),e.jsx("button",{onClick:()=>r("/dashboard/settings"),className:`px-2 py-1 rounded text-sm hover:bg-blue-700 ${t==="/dashboard/settings"?"bg-blue-700":"bg-blue-600"}`,children:"设置"})]})]}),e.jsx("main",{className:"p-4 bg-gray-50",children:e.jsxs("div",{className:"bg-white p-3 rounded border",children:[e.jsx("h4",{className:"font-medium mb-2",children:"内容区域（Outlet渲染位置）："}),e.jsxs("div",{className:"mb-2 text-sm text-gray-600",children:[e.jsx("strong",{children:"当前路径:"})," ",t]}),n]})})]}),a=()=>{switch(t){case"/dashboard":return e.jsx("div",{className:"text-blue-600",children:"📊 仪表板首页 (index路由)"});case"/dashboard/profile":return e.jsx("div",{className:"text-green-600",children:"👤 个人资料页面"});case"/dashboard/settings":return e.jsx("div",{className:"text-purple-600",children:"⚙️ 设置页面"});default:return e.jsx("div",{className:"text-gray-500",children:"❌ 页面未找到"})}};return e.jsx(o,{children:a()})},b=()=>e.jsx(d,{title:"传统模式 - 核心概念",description:"掌握React Router传统模式的核心概念：BrowserRouter、HashRouter、MemoryRouter、Routes、Route和Outlet的基本用法和应用场景。",overview:e.jsx("div",{className:"space-y-4",children:e.jsxs("div",{className:"grid md:grid-cols-2 gap-6",children:[e.jsxs("div",{className:"bg-blue-50 p-4 rounded-lg",children:[e.jsx("h3",{className:"font-semibold text-blue-800 mb-2",children:"🔑 核心概念"}),e.jsxs("ul",{className:"space-y-1 text-sm text-blue-700",children:[e.jsxs("li",{children:["• ",e.jsx("strong",{children:"BrowserRouter:"})," 使用HTML5 History API的路由器"]}),e.jsxs("li",{children:["• ",e.jsx("strong",{children:"HashRouter:"})," 使用URL hash的路由器"]}),e.jsxs("li",{children:["• ",e.jsx("strong",{children:"MemoryRouter:"})," 内存中的路由器，用于测试"]}),e.jsxs("li",{children:["• ",e.jsx("strong",{children:"Routes:"})," 路由配置容器"]}),e.jsxs("li",{children:["• ",e.jsx("strong",{children:"Route:"})," 单个路由定义"]}),e.jsxs("li",{children:["• ",e.jsx("strong",{children:"Outlet:"})," 嵌套路由的渲染位置"]})]})]}),e.jsxs("div",{className:"bg-green-50 p-4 rounded-lg",children:[e.jsx("h3",{className:"font-semibold text-green-800 mb-2",children:"✨ 主要优势"}),e.jsxs("ul",{className:"space-y-1 text-sm text-green-700",children:[e.jsx("li",{children:"• 声明式路由配置，直观易懂"}),e.jsx("li",{children:"• JSX语法，与React组件无缝集成"}),e.jsx("li",{children:"• 支持嵌套路由和布局组件"}),e.jsx("li",{children:"• 灵活的路由匹配规则"}),e.jsx("li",{children:"• 良好的TypeScript支持"})]})]}),e.jsxs("div",{className:"bg-yellow-50 p-4 rounded-lg",children:[e.jsx("h3",{className:"font-semibold text-yellow-800 mb-2",children:"🎯 适用场景"}),e.jsxs("ul",{className:"space-y-1 text-sm text-yellow-700",children:[e.jsx("li",{children:"• 中小型单页应用"}),e.jsx("li",{children:"• 路由结构相对简单的项目"}),e.jsx("li",{children:"• 需要快速原型开发"}),e.jsx("li",{children:"• 团队对JSX配置方式熟悉"}),e.jsx("li",{children:"• 不需要复杂数据预加载"})]})]}),e.jsxs("div",{className:"bg-red-50 p-4 rounded-lg",children:[e.jsx("h3",{className:"font-semibold text-red-800 mb-2",children:"⚠️ 注意事项"}),e.jsxs("ul",{className:"space-y-1 text-sm text-red-700",children:[e.jsx("li",{children:"• 数据获取需要在组件内手动处理"}),e.jsx("li",{children:"• 缺乏内置的加载状态管理"}),e.jsx("li",{children:"• 错误边界需要手动配置"}),e.jsx("li",{children:"• 大型应用可能配置复杂"}),e.jsx("li",{children:"• 性能优化需要额外工作"})]})]})]})}),examples:[{title:"Router类型对比",component:e.jsx(c,{}),description:"演示BrowserRouter、HashRouter和MemoryRouter的区别",observationPoints:["切换不同的Router类型，观察URL的变化模式","BrowserRouter使用正常的URL路径（/about）","HashRouter在URL中使用hash（/#/about）","MemoryRouter不会改变浏览器URL，适合测试环境"],keyPoints:["BrowserRouter需要服务器支持，适合生产环境","HashRouter兼容性好，适合静态部署","MemoryRouter主要用于测试和非浏览器环境","选择Router类型要考虑部署环境和需求"],codeExample:{title:"Router类型配置",code:`// BrowserRouter - 使用HTML5 History API
import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </BrowserRouter>
  );
}

// HashRouter - 使用URL hash
import { HashRouter } from 'react-router-dom';

function App() {
  return (
    <HashRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </HashRouter>
  );
}

// MemoryRouter - 内存路由，用于测试
import { MemoryRouter } from 'react-router-dom';

function App() {
  return (
    <MemoryRouter initialEntries={['/dashboard']}>
      <Routes>
        <Route path="/dashboard" element={<Dashboard />} />
      </Routes>
    </MemoryRouter>
  );
}`,language:"typescript",highlights:[2,9,16,23]}},{title:"Routes和Route基本用法",component:e.jsx(h,{}),description:"演示Routes容器和Route路由定义的基本用法",observationPoints:["点击不同的导航链接，观察路由匹配和组件渲染","动态路由参数（/products/:id）的匹配","通配符路由（*）处理404情况","嵌套路由（/admin/*）的匹配模式"],keyPoints:["Routes是路由配置的容器组件","Route定义单个路由的路径和对应组件","支持动态参数和通配符匹配","路由按定义顺序进行匹配"],codeExample:{title:"Routes和Route配置",code:`import { Routes, Route, Link } from 'react-router-dom';

function App() {
  return (
    <div>
      <nav>
        <Link to="/home">首页</Link>
        <Link to="/products">产品</Link>
        <Link to="/products/123">产品详情</Link>
      </nav>
      
      <Routes>
        {/* 精确匹配 */}
        <Route path="/home" element={<Home />} />
        
        {/* 动态参数 */}
        <Route path="/products/:id" element={<ProductDetail />} />
        
        {/* 嵌套路由 */}
        <Route path="/admin/*" element={<AdminLayout />} />
        
        {/* 通配符路由 - 404页面 */}
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
}`,language:"typescript",highlights:[12,14,17,20,23]}},{title:"Outlet嵌套路由",component:e.jsx(m,{}),description:"演示Outlet在嵌套路由中的作用和用法",observationPoints:["点击导航链接，观察Outlet位置的内容变化","布局组件保持不变，只有Outlet内容更新","index路由作为默认子路由的渲染","嵌套路由的URL结构（/dashboard/profile）"],keyPoints:["Outlet是嵌套路由的渲染占位符","父路由组件定义布局，子路由在Outlet中渲染","index路由是默认的子路由","支持多层嵌套路由结构"],commonTraps:["忘记在父组件中添加Outlet导致子路由无法渲染","嵌套路由路径配置错误","index路由和具名路由的混淆"],solutions:["确保父路由组件包含<Outlet />组件","检查嵌套路由的路径配置是否正确","理解index路由是默认匹配的子路由"],codeExample:{title:"Outlet嵌套路由配置",code:`import { Routes, Route, Outlet, Link } from 'react-router-dom';

// 布局组件
function Layout() {
  return (
    <div>
      <header>
        <nav>
          <Link to="/dashboard">仪表板</Link>
          <Link to="/dashboard/profile">个人资料</Link>
          <Link to="/dashboard/settings">设置</Link>
        </nav>
      </header>
      
      <main>
        {/* 子路由在这里渲染 */}
        <Outlet />
      </main>
    </div>
  );
}

function App() {
  return (
    <Routes>
      {/* 父路由 */}
      <Route path="/dashboard" element={<Layout />}>
        {/* index路由 - 默认子路由 */}
        <Route index element={<Dashboard />} />
        
        {/* 具名子路由 */}
        <Route path="profile" element={<Profile />} />
        <Route path="settings" element={<Settings />} />
      </Route>
    </Routes>
  );
}`,language:"typescript",highlights:[17,26,28,31,32]}}],tutorial:{concepts:["Router是React Router的核心，决定路由的运行模式","Routes容器管理所有路由配置，提供路由匹配逻辑","Route定义单个路由，包含路径和对应的组件","Outlet是嵌套路由的关键，提供子路由的渲染位置","JSX声明式配置让路由结构清晰直观"],steps:["选择合适的Router类型（BrowserRouter/HashRouter/MemoryRouter）","使用Routes容器包装所有路由配置","定义Route组件，设置path和element属性","对于嵌套路由，在父组件中添加Outlet","配置index路由作为默认子路由","添加通配符路由处理404情况"],tips:["生产环境推荐使用BrowserRouter，需要服务器支持","静态部署或兼容性要求高时使用HashRouter","测试环境可以使用MemoryRouter","路由定义顺序很重要，更具体的路由应该放在前面","使用TypeScript时为Route组件提供类型定义"]},interview:{questions:[{question:"BrowserRouter和HashRouter有什么区别？",answer:"BrowserRouter使用HTML5 History API，URL更美观（/about），但需要服务器支持；HashRouter使用URL hash（/#/about），兼容性更好，适合静态部署。BrowserRouter适合生产环境，HashRouter适合简单部署场景。"},{question:"什么是Outlet，它在嵌套路由中的作用是什么？",answer:"Outlet是React Router提供的组件，用作嵌套路由的渲染占位符。父路由组件通过Outlet指定子路由的渲染位置，实现布局组件和内容组件的分离。子路由匹配时会在Outlet位置渲染对应组件。"},{question:"如何处理404页面？",answer:"使用通配符路由（path='*'）作为最后一个Route，当所有其他路由都不匹配时，会渲染404组件。通配符路由应该放在Routes的最后，因为路由按定义顺序匹配。"},{question:"index路由是什么？",answer:"index路由是嵌套路由中的默认子路由，当访问父路由路径时自动渲染。例如，访问/dashboard时，如果有index路由，会渲染该路由对应的组件。index路由不需要指定path属性。"}],keyPoints:["掌握不同Router类型的使用场景和区别","理解Routes和Route的配置方式","熟练使用Outlet实现嵌套路由","了解路由匹配的优先级和规则","掌握动态路由和通配符路由的用法"]},bestPractices:{dos:["根据部署环境选择合适的Router类型","使用嵌套路由实现布局和内容分离","为动态路由提供合理的参数验证","使用index路由提供默认页面","添加通配符路由处理未匹配的路径","保持路由结构清晰和层次分明"],donts:["不要在生产环境使用MemoryRouter","不要忘记在嵌套路由父组件中添加Outlet","不要将具体路由放在通配符路由之后","不要过度嵌套路由，影响性能和维护","不要在路由配置中包含业务逻辑"],patterns:["布局路由模式：使用嵌套路由实现共享布局","模块路由模式：按功能模块组织路由结构","守卫路由模式：在路由层面实现权限控制","懒加载模式：结合React.lazy实现代码分割","重定向模式：使用Navigate组件实现路由重定向"]}});export{b as default};
