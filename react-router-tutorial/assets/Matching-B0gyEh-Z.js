import{j as e,r as p,R as y}from"./index-CKwi3pR7.js";import{C as N}from"./ComponentTemplate-CukjZkuC.js";const v=()=>{const[r,o]=p.useState("/user/123"),[u,x]=p.useState(["/user/123"]),d=s=>{o(s),x(t=>[...t,s])},c=(s=>{const t=[{pattern:"/user/:id",regex:/^\/user\/(\d+)$/,keys:["id"]},{pattern:"/user/:id/posts/:postId",regex:/^\/user\/(\d+)\/posts\/(\d+)$/,keys:["id","postId"]},{pattern:"/category/:category/product/:productId",regex:/^\/category\/([^/]+)\/product\/(\d+)$/,keys:["category","productId"]},{pattern:"/search/:query?",regex:/^\/search(?:\/([^/]+))?$/,keys:["query"]}];for(const{pattern:a,regex:n,keys:j}of t){const i=s.match(n);if(i){const h={};return j.forEach((l,b)=>{h[l]=i[b+1]||""}),{pattern:a,params:h,matched:!0}}}return{pattern:"未匹配",params:{},matched:!1}})(r),m=["/user/123","/user/456/posts/789","/category/electronics/product/101","/search/react","/search","/invalid/path"];return e.jsxs("div",{className:"border rounded-lg overflow-hidden",children:[e.jsxs("div",{className:"bg-gray-100 p-4",children:[e.jsx("h3",{className:"font-semibold mb-3",children:"动态路由参数演示"}),e.jsxs("div",{className:"mb-4",children:[e.jsx("h4",{className:"text-sm font-medium mb-2",children:"测试路由："}),e.jsx("div",{className:"grid grid-cols-2 md:grid-cols-3 gap-2",children:m.map(s=>e.jsx("button",{onClick:()=>d(s),className:`px-3 py-2 rounded text-sm transition-colors ${r===s?"bg-blue-500 text-white":"bg-white border hover:bg-gray-50"}`,children:s},s))})]}),e.jsxs("div",{className:"mb-4",children:[e.jsx("h4",{className:"text-sm font-medium mb-2",children:"自定义路径："}),e.jsxs("div",{className:"flex gap-2",children:[e.jsx("input",{type:"text",value:r,onChange:s=>o(s.target.value),className:"flex-1 px-3 py-2 border rounded text-sm",placeholder:"输入路径，如：/user/123"}),e.jsx("button",{onClick:()=>d(r),className:"px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600 text-sm",children:"测试"})]})]})]}),e.jsxs("div",{className:"p-4",children:[e.jsxs("div",{className:"grid md:grid-cols-2 gap-4",children:[e.jsxs("div",{children:[e.jsx("h4",{className:"font-medium mb-2",children:"路径信息："}),e.jsxs("div",{className:"bg-gray-50 p-3 rounded space-y-2",children:[e.jsxs("div",{children:[e.jsx("strong",{children:"当前路径:"}),e.jsx("code",{className:"ml-2 bg-white px-2 py-1 rounded text-sm",children:r})]}),e.jsxs("div",{children:[e.jsx("strong",{children:"匹配模式:"}),e.jsx("code",{className:`ml-2 px-2 py-1 rounded text-sm ${c.matched?"bg-green-100 text-green-800":"bg-red-100 text-red-800"}`,children:c.pattern})]}),e.jsxs("div",{children:[e.jsx("strong",{children:"匹配状态:"}),e.jsx("span",{className:`ml-2 px-2 py-1 rounded text-sm ${c.matched?"bg-green-100 text-green-800":"bg-red-100 text-red-800"}`,children:c.matched?"✅ 匹配成功":"❌ 未匹配"})]})]})]}),e.jsxs("div",{children:[e.jsx("h4",{className:"font-medium mb-2",children:"参数解析："}),e.jsx("div",{className:"bg-gray-50 p-3 rounded",children:Object.keys(c.params).length>0?e.jsx("div",{className:"space-y-1",children:Object.entries(c.params).map(([s,t])=>e.jsxs("div",{className:"flex justify-between",children:[e.jsxs("span",{className:"font-medium",children:[s,":"]}),e.jsx("code",{className:"bg-white px-2 py-1 rounded text-sm",children:t||"(空值)"})]},s))}):e.jsx("div",{className:"text-gray-500 text-sm",children:"无参数"})})]})]}),e.jsxs("div",{className:"mt-4",children:[e.jsx("h4",{className:"font-medium mb-2",children:"测试历史："}),e.jsx("div",{className:"bg-gray-50 p-3 rounded max-h-24 overflow-y-auto",children:e.jsx("div",{className:"text-sm text-gray-600",children:u.join(" → ")})})]})]})]})},P=()=>{const[r,o]=p.useState(new URLSearchParams("q=react&category=tutorial&page=1")),[u,x]=p.useState(["q=react&category=tutorial&page=1"]),d=t=>{o(t),x(a=>[...a,t.toString()])},g=(t,a)=>{const n=new URLSearchParams(r);n.set(t,a),d(n)},c=t=>{const a=new URLSearchParams(r);a.delete(t),d(a)},m=()=>{d(new URLSearchParams)},s=[{label:"搜索页面",params:"q=javascript&category=programming&sort=date"},{label:"分页列表",params:"page=2&limit=20&order=desc"},{label:"筛选条件",params:"type=article&author=john&tags=react,hooks"},{label:"空参数",params:""}];return e.jsxs("div",{className:"border rounded-lg overflow-hidden",children:[e.jsxs("div",{className:"bg-gray-100 p-4",children:[e.jsx("h3",{className:"font-semibold mb-3",children:"查询参数处理演示"}),e.jsxs("div",{className:"mb-4",children:[e.jsx("h4",{className:"text-sm font-medium mb-2",children:"预设参数："}),e.jsx("div",{className:"grid grid-cols-2 md:grid-cols-4 gap-2",children:s.map(t=>e.jsx("button",{onClick:()=>d(new URLSearchParams(t.params)),className:"px-3 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 text-sm",children:t.label},t.label))})]}),e.jsxs("div",{className:"grid md:grid-cols-2 gap-4",children:[e.jsxs("div",{children:[e.jsx("h4",{className:"text-sm font-medium mb-2",children:"添加参数："}),e.jsxs("div",{className:"space-y-2",children:[e.jsx("button",{onClick:()=>g("filter","active"),className:"w-full px-3 py-2 bg-green-500 text-white rounded hover:bg-green-600 text-sm",children:"添加 filter=active"}),e.jsx("button",{onClick:()=>g("lang","zh-CN"),className:"w-full px-3 py-2 bg-green-500 text-white rounded hover:bg-green-600 text-sm",children:"添加 lang=zh-CN"})]})]}),e.jsxs("div",{children:[e.jsx("h4",{className:"text-sm font-medium mb-2",children:"删除参数："}),e.jsxs("div",{className:"space-y-2",children:[e.jsx("button",{onClick:()=>c("page"),className:"w-full px-3 py-2 bg-red-500 text-white rounded hover:bg-red-600 text-sm",children:"删除 page 参数"}),e.jsx("button",{onClick:m,className:"w-full px-3 py-2 bg-gray-500 text-white rounded hover:bg-gray-600 text-sm",children:"清空所有参数"})]})]})]})]}),e.jsxs("div",{className:"p-4",children:[e.jsxs("div",{className:"grid md:grid-cols-2 gap-4",children:[e.jsxs("div",{children:[e.jsx("h4",{className:"font-medium mb-2",children:"当前查询参数："}),e.jsxs("div",{className:"bg-gray-50 p-3 rounded",children:[e.jsxs("div",{className:"mb-2",children:[e.jsx("strong",{children:"URL:"}),e.jsxs("code",{className:"block mt-1 bg-white px-2 py-1 rounded text-sm break-all",children:["/search?",r.toString()]})]}),r.toString()?e.jsxs("div",{className:"space-y-1",children:[e.jsx("strong",{children:"参数列表："}),Array.from(r.entries()).map(([t,a],n)=>e.jsxs("div",{className:"flex justify-between items-center bg-white px-2 py-1 rounded",children:[e.jsxs("span",{className:"font-medium",children:[t,":"]}),e.jsx("span",{className:"text-sm",children:a}),e.jsx("button",{onClick:()=>c(t),className:"text-red-500 hover:text-red-700 text-xs",children:"✕"})]},n))]}):e.jsx("div",{className:"text-gray-500 text-sm",children:"无查询参数"})]})]}),e.jsxs("div",{children:[e.jsx("h4",{className:"font-medium mb-2",children:"常用操作："}),e.jsxs("div",{className:"bg-gray-50 p-3 rounded space-y-2 text-sm",children:[e.jsxs("div",{children:[e.jsx("strong",{children:"获取参数:"}),e.jsxs("code",{className:"block mt-1 bg-white px-2 py-1 rounded",children:[`searchParams.get('q') = "`,r.get("q")||"null",'"']})]}),e.jsxs("div",{children:[e.jsx("strong",{children:"检查存在:"}),e.jsxs("code",{className:"block mt-1 bg-white px-2 py-1 rounded",children:["searchParams.has('page') = ",r.has("page").toString()]})]}),e.jsxs("div",{children:[e.jsx("strong",{children:"获取所有值:"}),e.jsxs("code",{className:"block mt-1 bg-white px-2 py-1 rounded",children:["searchParams.getAll('tags') = [",r.getAll("tags").join(", "),"]"]})]})]})]})]}),e.jsxs("div",{className:"mt-4",children:[e.jsx("h4",{className:"font-medium mb-2",children:"操作历史："}),e.jsx("div",{className:"bg-gray-50 p-3 rounded max-h-24 overflow-y-auto",children:e.jsx("div",{className:"text-sm text-gray-600 space-y-1",children:u.map((t,a)=>e.jsxs("div",{children:[a+1,". ",t||"(空参数)"]},a))})})]})]})]})},R=()=>{const[r,o]=p.useState("/products/123"),[u,x]=p.useState([]),d=[{path:"/products/new",element:"NewProductPage",priority:1,type:"精确匹配"},{path:"/products/:id",element:"ProductDetailPage",priority:2,type:"动态参数"},{path:"/products/*",element:"ProductsLayout",priority:3,type:"通配符"},{path:"/admin/users/:id",element:"UserDetailPage",priority:1,type:"嵌套动态"},{path:"/admin/*",element:"AdminLayout",priority:2,type:"嵌套通配符"},{path:"*",element:"NotFoundPage",priority:99,type:"全局通配符"}],g=s=>{const t=[];for(const a of d){let n=!1,j={};if(a.path===s)n=!0;else if(a.path.includes(":")){const i=a.path.split("/"),h=s.split("/");if(i.length===h.length){n=!0;for(let l=0;l<i.length;l++)if(i[l].startsWith(":")){const b=i[l].slice(1);j={...j,[b]:h[l]}}else if(i[l]!==h[l]){n=!1;break}}}else if(a.path.endsWith("/*")){const i=a.path.slice(0,-2);n=s.startsWith(i)}else a.path==="*"&&(n=!0);if(t.push({...a,matched:n,params:j,matchType:n?"✅ 匹配":"❌ 不匹配"}),n&&t.length===1)break}return t},c=["/products/new","/products/123","/products/abc/details","/admin/users/456","/admin/settings","/unknown/path"],m=s=>{o(s),x(g(s))};return y.useEffect(()=>{m(r)},[]),e.jsxs("div",{className:"border rounded-lg overflow-hidden",children:[e.jsxs("div",{className:"bg-gray-100 p-4",children:[e.jsx("h3",{className:"font-semibold mb-3",children:"路由匹配优先级演示"}),e.jsxs("div",{className:"mb-4",children:[e.jsx("h4",{className:"text-sm font-medium mb-2",children:"测试路径："}),e.jsx("div",{className:"grid grid-cols-2 md:grid-cols-3 gap-2",children:c.map(s=>e.jsx("button",{onClick:()=>m(s),className:`px-3 py-2 rounded text-sm transition-colors ${r===s?"bg-blue-500 text-white":"bg-white border hover:bg-gray-50"}`,children:s},s))})]}),e.jsxs("div",{className:"flex gap-2",children:[e.jsx("input",{type:"text",value:r,onChange:s=>o(s.target.value),className:"flex-1 px-3 py-2 border rounded text-sm",placeholder:"输入测试路径"}),e.jsx("button",{onClick:()=>m(r),className:"px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600 text-sm",children:"测试匹配"})]})]}),e.jsxs("div",{className:"p-4",children:[e.jsx("h4",{className:"font-medium mb-3",children:"路由匹配结果："}),e.jsx("div",{className:"space-y-2",children:u.map((s,t)=>e.jsxs("div",{className:`p-3 rounded border ${s.matched?"bg-green-50 border-green-200":"bg-gray-50 border-gray-200"}`,children:[e.jsxs("div",{className:"flex items-center justify-between mb-2",children:[e.jsxs("div",{className:"flex items-center gap-2",children:[e.jsxs("span",{className:`px-2 py-1 rounded text-xs ${s.matched?"bg-green-100 text-green-800":"bg-gray-100 text-gray-600"}`,children:["优先级 ",s.priority]}),e.jsx("span",{className:`px-2 py-1 rounded text-xs ${s.matched?"bg-blue-100 text-blue-800":"bg-gray-100 text-gray-600"}`,children:s.type})]}),e.jsx("span",{className:`text-sm font-medium ${s.matched?"text-green-600":"text-gray-500"}`,children:s.matchType})]}),e.jsxs("div",{className:"grid md:grid-cols-3 gap-4 text-sm",children:[e.jsxs("div",{children:[e.jsx("strong",{children:"路由模式:"}),e.jsx("code",{className:"block mt-1 bg-white px-2 py-1 rounded",children:s.path})]}),e.jsxs("div",{children:[e.jsx("strong",{children:"组件:"}),e.jsx("code",{className:"block mt-1 bg-white px-2 py-1 rounded",children:s.element})]}),e.jsxs("div",{children:[e.jsx("strong",{children:"参数:"}),e.jsx("code",{className:"block mt-1 bg-white px-2 py-1 rounded",children:Object.keys(s.params).length>0?JSON.stringify(s.params):"无参数"})]})]})]},t))}),e.jsxs("div",{className:"mt-4 p-3 bg-blue-50 rounded",children:[e.jsx("h5",{className:"font-medium text-blue-800 mb-2",children:"匹配规则说明："}),e.jsxs("ul",{className:"text-sm text-blue-700 space-y-1",children:[e.jsx("li",{children:"• React Router 按照路由定义的顺序进行匹配"}),e.jsx("li",{children:"• 精确匹配优先级最高"}),e.jsx("li",{children:"• 动态参数路由次之"}),e.jsx("li",{children:"• 通配符路由优先级最低"}),e.jsx("li",{children:"• 找到第一个匹配的路由后停止匹配"})]})]})]})]})},S=()=>e.jsx(N,{title:"传统模式 - 路由匹配",description:"深入理解React Router传统模式中的路由匹配机制：动态路由参数、查询参数处理、路由匹配优先级和通配符路由的使用方法。",overview:e.jsxs("div",{className:"space-y-4",children:[e.jsxs("div",{className:"grid md:grid-cols-2 gap-6",children:[e.jsxs("div",{className:"bg-blue-50 p-4 rounded-lg",children:[e.jsx("h3",{className:"font-semibold text-blue-800 mb-2",children:"🔑 核心概念"}),e.jsxs("ul",{className:"space-y-1 text-sm text-blue-700",children:[e.jsxs("li",{children:["• ",e.jsx("strong",{children:"动态路由:"})," 使用:参数名定义可变路径段"]}),e.jsxs("li",{children:["• ",e.jsx("strong",{children:"查询参数:"})," URL中?后的键值对参数"]}),e.jsxs("li",{children:["• ",e.jsx("strong",{children:"路径参数:"})," 路由路径中的动态部分"]}),e.jsxs("li",{children:["• ",e.jsx("strong",{children:"通配符路由:"})," 使用*匹配任意路径"]}),e.jsxs("li",{children:["• ",e.jsx("strong",{children:"嵌套匹配:"})," 多层级路由的匹配规则"]}),e.jsxs("li",{children:["• ",e.jsx("strong",{children:"优先级:"})," 路由匹配的先后顺序"]})]})]}),e.jsxs("div",{className:"bg-green-50 p-4 rounded-lg",children:[e.jsx("h3",{className:"font-semibold text-green-800 mb-2",children:"✨ 主要优势"}),e.jsxs("ul",{className:"space-y-1 text-sm text-green-700",children:[e.jsx("li",{children:"• 灵活的URL结构设计"}),e.jsx("li",{children:"• 自动参数解析和类型转换"}),e.jsx("li",{children:"• 支持复杂的路由匹配规则"}),e.jsx("li",{children:"• 良好的SEO友好URL"}),e.jsx("li",{children:"• 直观的参数传递方式"}),e.jsx("li",{children:"• 支持可选参数和默认值"})]})]})]}),e.jsxs("div",{className:"bg-yellow-50 p-4 rounded-lg",children:[e.jsx("h3",{className:"font-semibold text-yellow-800 mb-2",children:"⚠️ 注意事项"}),e.jsxs("ul",{className:"space-y-1 text-sm text-yellow-700",children:[e.jsx("li",{children:"• 路由匹配按定义顺序进行，更具体的路由应放在前面"}),e.jsx("li",{children:"• 动态参数会匹配除/之外的任意字符"}),e.jsx("li",{children:"• 查询参数的变化不会触发路由重新匹配"}),e.jsx("li",{children:"• 通配符路由应放在路由配置的最后"}),e.jsx("li",{children:"• 参数值始终是字符串类型，需要手动类型转换"})]})]})]}),examples:[{title:"动态路由参数",component:e.jsx(v,{}),description:"演示动态路由参数的定义、匹配和解析过程",observationPoints:["不同的路径模式会匹配不同类型的URL结构","动态参数会自动解析为键值对对象","可选参数在URL中可以存在也可以不存在","无效路径会显示未匹配状态"],keyPoints:["使用:paramName语法定义动态参数","参数名可以在组件中通过useParams获取","支持多个动态参数的组合使用","可选参数使用?后缀标识"],commonTraps:["忘记处理参数不存在的情况","参数类型转换错误（都是字符串）","路由顺序导致的匹配问题"],solutions:["使用默认值处理可选参数","添加参数验证和类型转换","合理安排路由定义顺序"],codeExample:{title:"动态路由配置和使用",code:`import { Routes, Route, useParams } from 'react-router-dom';

// 用户详情组件
function UserDetail() {
  const { id } = useParams<{ id: string }>();
  
  return (
    <div>
      <h1>用户详情</h1>
      <p>用户ID: {id}</p>
    </div>
  );
}

// 用户文章组件
function UserPost() {
  const { id, postId } = useParams<{ id: string; postId: string }>();
  
  return (
    <div>
      <h1>用户文章</h1>
      <p>用户ID: {id}</p>
      <p>文章ID: {postId}</p>
    </div>
  );
}

// 搜索组件（可选参数）
function Search() {
  const { query } = useParams<{ query?: string }>();
  
  return (
    <div>
      <h1>搜索页面</h1>
      <p>搜索关键词: {query || '无'}</p>
    </div>
  );
}

// 路由配置
function App() {
  return (
    <Routes>
      {/* 基本动态路由 */}
      <Route path="/user/:id" element={<UserDetail />} />
      
      {/* 多参数动态路由 */}
      <Route path="/user/:id/posts/:postId" element={<UserPost />} />
      
      {/* 可选参数路由 */}
      <Route path="/search/:query?" element={<Search />} />
      
      {/* 通配符路由 */}
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}`,language:"typescript",highlights:[4,14,26,38,41,44]}},{title:"查询参数处理",component:e.jsx(P,{}),description:"演示URL查询参数的获取、设置和管理方法",observationPoints:["查询参数显示在URL的?后面，以&分隔","可以动态添加、删除和修改查询参数","URLSearchParams提供了完整的参数操作API","参数变化会实时反映在URL中"],keyPoints:["使用useSearchParams Hook管理查询参数","URLSearchParams提供get、set、delete等方法","查询参数变化不会触发路由重新匹配","支持同名参数的多个值"],commonTraps:["忘记调用setSearchParams更新URL","查询参数的类型转换问题","特殊字符的编码和解码"],solutions:["使用URLSearchParams的标准API","添加参数验证和默认值处理","使用encodeURIComponent处理特殊字符"],codeExample:{title:"查询参数管理示例",code:`import { useSearchParams } from 'react-router-dom';

function SearchPage() {
  const [searchParams, setSearchParams] = useSearchParams();
  
  // 获取查询参数
  const query = searchParams.get('q') || '';
  const page = parseInt(searchParams.get('page') || '1');
  const category = searchParams.get('category');
  
  // 更新查询参数
  const updateQuery = (newQuery: string) => {
    const params = new URLSearchParams(searchParams);
    if (newQuery) {
      params.set('q', newQuery);
    } else {
      params.delete('q');
    }
    setSearchParams(params);
  };
  
  // 更新分页
  const updatePage = (newPage: number) => {
    const params = new URLSearchParams(searchParams);
    params.set('page', newPage.toString());
    setSearchParams(params);
  };
  
  // 添加筛选条件
  const addFilter = (key: string, value: string) => {
    const params = new URLSearchParams(searchParams);
    params.set(key, value);
    setSearchParams(params);
  };
  
  // 清除所有参数
  const clearFilters = () => {
    setSearchParams({});
  };
  
  return (
    <div>
      <h1>搜索页面</h1>
      
      {/* 搜索输入 */}
      <input
        value={query}
        onChange={(e) => updateQuery(e.target.value)}
        placeholder="搜索关键词"
      />
      
      {/* 分页控制 */}
      <div>
        <button onClick={() => updatePage(page - 1)}>上一页</button>
        <span>第 {page} 页</span>
        <button onClick={() => updatePage(page + 1)}>下一页</button>
      </div>
      
      {/* 筛选条件 */}
      <select onChange={(e) => addFilter('category', e.target.value)}>
        <option value="">所有分类</option>
        <option value="tech">技术</option>
        <option value="design">设计</option>
      </select>
      
      {/* 清除筛选 */}
      <button onClick={clearFilters}>清除筛选</button>
    </div>
  );
}`,language:"typescript",highlights:[3,6,12,22,29,36]}},{title:"路由匹配优先级",component:e.jsx(R,{}),description:"演示不同类型路由的匹配优先级和规则",observationPoints:["精确匹配的路由优先级最高","动态参数路由会匹配对应的URL模式","通配符路由作为兜底匹配","路由匹配按定义顺序进行"],keyPoints:["React Router按路由定义顺序进行匹配","更具体的路由应该放在更通用的路由前面","通配符路由通常放在最后作为404页面","嵌套路由有自己的匹配作用域"],commonTraps:["通用路由放在具体路由前面导致匹配错误","忘记添加通配符路由处理404情况","嵌套路由的路径配置错误"],solutions:["合理安排路由定义顺序","使用精确匹配避免意外匹配","添加路由测试确保匹配逻辑正确"],codeExample:{title:"路由优先级配置示例",code:`import { Routes, Route } from 'react-router-dom';

function App() {
  return (
    <Routes>
      {/* 1. 精确匹配路由 - 优先级最高 */}
      <Route path="/products/new" element={<NewProduct />} />
      <Route path="/products/featured" element={<FeaturedProducts />} />
      
      {/* 2. 动态参数路由 - 次优先级 */}
      <Route path="/products/:id" element={<ProductDetail />} />
      <Route path="/user/:id/posts/:postId" element={<UserPost />} />
      
      {/* 3. 嵌套路由 */}
      <Route path="/admin" element={<AdminLayout />}>
        <Route index element={<AdminDashboard />} />
        <Route path="users" element={<UserManagement />} />
        <Route path="users/:id" element={<UserDetail />} />
        {/* 嵌套通配符 */}
        <Route path="*" element={<AdminNotFound />} />
      </Route>
      
      {/* 4. 通配符路由 - 优先级最低 */}
      <Route path="/products/*" element={<ProductsLayout />} />
      
      {/* 5. 全局通配符 - 404页面 */}
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}

// 错误的路由顺序示例
function BadExample() {
  return (
    <Routes>
      {/* ❌ 错误：通配符路由放在前面 */}
      <Route path="/products/*" element={<ProductsLayout />} />
      
      {/* 这些路由永远不会被匹配到 */}
      <Route path="/products/new" element={<NewProduct />} />
      <Route path="/products/:id" element={<ProductDetail />} />
    </Routes>
  );
}`,language:"typescript",highlights:[6,10,15,23,26,35]}}],tutorial:{concepts:["动态路由参数：使用:语法定义URL中的可变部分","查询参数：URL中?后的键值对，用于传递可选信息","路径参数：路由路径中的动态段，通过useParams获取","通配符匹配：使用*匹配任意路径，常用于404页面","路由优先级：React Router按定义顺序匹配路由","参数类型：所有路由参数都是字符串类型"],steps:["理解不同类型的路由参数和匹配规则","学习使用useParams Hook获取路径参数","掌握useSearchParams Hook管理查询参数","配置动态路由和嵌套路由结构","合理安排路由定义顺序避免匹配冲突","添加参数验证和类型转换逻辑","实现通配符路由处理未匹配的路径","测试路由匹配逻辑确保正确性"],tips:["将更具体的路由放在更通用的路由前面","使用TypeScript为路由参数添加类型定义","为可选参数提供默认值和验证逻辑","使用URLSearchParams API标准化查询参数操作","通配符路由应该放在路由配置的最后","考虑使用路由守卫验证参数的有效性"]},interview:{questions:[{question:"动态路由参数和查询参数有什么区别？分别适用于什么场景？",answer:"动态路由参数是URL路径的一部分，用于标识资源（如用户ID、文章ID），通过useParams获取；查询参数是URL中?后的键值对，用于传递可选的筛选、排序等信息，通过useSearchParams获取。动态参数适合RESTful API设计，查询参数适合搜索、分页等场景。"},{question:"React Router的路由匹配优先级是怎样的？如何避免匹配冲突？",answer:"React Router按路由定义的顺序进行匹配，找到第一个匹配的路由就停止。优先级从高到低：精确匹配 > 动态参数 > 通配符。避免冲突的方法：1) 将具体路由放在通用路由前面；2) 使用exact属性进行精确匹配；3) 合理使用嵌套路由；4) 通配符路由放在最后。"},{question:"如何处理路由参数的类型转换和验证？",answer:"路由参数都是字符串类型，需要手动转换：1) 使用parseInt、parseFloat转换数字；2) 使用JSON.parse处理复杂对象；3) 添加参数验证逻辑；4) 使用TypeScript定义参数类型；5) 考虑使用第三方库如yup进行验证；6) 为无效参数提供错误处理和默认值。"},{question:"嵌套路由的匹配规则是什么？如何正确配置嵌套路由？",answer:"嵌套路由的子路由路径是相对于父路由的，React Router会自动拼接完整路径。配置要点：1) 父路由组件必须包含<Outlet />；2) 子路由路径不需要包含父路径；3) 使用index路由作为默认子路由；4) 子路由的通配符只匹配当前层级；5) 注意路径的相对性和绝对性。"},{question:"如何实现复杂的URL结构和参数传递？",answer:"复杂URL结构实现方法：1) 多层嵌套路由处理层级关系；2) 组合使用路径参数和查询参数；3) 使用可选参数处理变长路径；4) 通过state传递不显示在URL中的数据；5) 使用hash参数处理页面内导航；6) 考虑URL长度限制和SEO友好性。"}],keyPoints:["理解动态路由参数和查询参数的区别和使用场景","掌握React Router的路由匹配优先级和规则","熟悉useParams和useSearchParams Hook的使用方法","了解如何处理路由参数的类型转换和验证","掌握嵌套路由的配置和匹配机制","理解通配符路由的作用和最佳实践"]},bestPractices:{dos:["使用语义化的路由参数名称提高代码可读性","为路由参数添加TypeScript类型定义","将具体的路由放在通用路由前面","使用查询参数传递可选的筛选和排序信息","为可选参数提供合理的默认值","添加参数验证确保数据的有效性","使用通配符路由处理404情况"],donts:["不要将通配符路由放在具体路由前面","不要忘记处理参数不存在的情况","不要在URL中传递敏感信息","不要忽略参数的类型转换","不要创建过于复杂的URL结构","不要在路由参数中使用特殊字符","不要忘记为嵌套路由添加Outlet组件"],patterns:["RESTful路由模式：/users/:id/posts/:postId","分页路由模式：/products?page=1&limit=20","搜索路由模式：/search?q=keyword&category=tech","嵌套资源模式：/admin/users/:id/permissions","可选参数模式：/articles/:slug?/comments","通配符兜底模式：最后添加*路由处理404"]}});export{S as default};
