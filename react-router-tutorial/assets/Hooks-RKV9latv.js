import{j as e,u as h,r as m,a as u,b as x,c as g}from"./index-CKwi3pR7.js";import{C as p}from"./ComponentTemplate-CukjZkuC.js";const v=()=>{const s=h(),[i,a]=m.useState([]),r=(o,l)=>{l==="replace"?s(o,{replace:!0}):s(o),a(t=>[...t,`${l}: ${o}`])},d=()=>{s(-1),a(o=>[...o,"back: -1"])},c=()=>{s(1),a(o=>[...o,"forward: +1"])};return e.jsxs("div",{className:"p-6 bg-white rounded-lg shadow-sm border",children:[e.jsx("h3",{className:"text-lg font-semibold mb-4",children:"useNavigate Hook 演示"}),e.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-6",children:[e.jsxs("div",{children:[e.jsx("h4",{className:"font-medium mb-3",children:"导航操作"}),e.jsxs("div",{className:"space-y-2",children:[e.jsx("button",{onClick:()=>r("/router/traditional/core-concepts","push"),className:"w-full px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition-colors",children:"Push 导航到核心概念"}),e.jsx("button",{onClick:()=>r("/router/traditional/navigation","replace"),className:"w-full px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600 transition-colors",children:"Replace 导航到导航组件"}),e.jsxs("div",{className:"flex gap-2",children:[e.jsx("button",{onClick:d,className:"flex-1 px-4 py-2 bg-gray-500 text-white rounded hover:bg-gray-600 transition-colors",children:"后退"}),e.jsx("button",{onClick:c,className:"flex-1 px-4 py-2 bg-gray-500 text-white rounded hover:bg-gray-600 transition-colors",children:"前进"})]})]})]}),e.jsxs("div",{children:[e.jsx("h4",{className:"font-medium mb-3",children:"导航历史"}),e.jsx("div",{className:"bg-gray-50 p-3 rounded max-h-40 overflow-y-auto",children:i.length===0?e.jsx("p",{className:"text-gray-500 text-sm",children:"暂无导航记录"}):e.jsx("ul",{className:"space-y-1",children:i.map((o,l)=>e.jsxs("li",{className:"text-sm font-mono",children:[l+1,". ",o]},l))})}),e.jsx("button",{onClick:()=>a([]),className:"mt-2 px-3 py-1 text-sm bg-red-500 text-white rounded hover:bg-red-600 transition-colors",children:"清空历史"})]})]})]})},j=()=>{const s=u(),[i,a]=m.useState([]);return m.useEffect(()=>{a(r=>[...r.slice(-4),{pathname:s.pathname,search:s.search,hash:s.hash,state:s.state,key:s.key,timestamp:new Date().toLocaleTimeString()}])},[s]),e.jsxs("div",{className:"p-6 bg-white rounded-lg shadow-sm border",children:[e.jsx("h3",{className:"text-lg font-semibold mb-4",children:"useLocation Hook 演示"}),e.jsxs("div",{className:"grid grid-cols-1 lg:grid-cols-2 gap-6",children:[e.jsxs("div",{children:[e.jsx("h4",{className:"font-medium mb-3",children:"当前位置信息"}),e.jsx("div",{className:"bg-gray-50 p-4 rounded",children:e.jsxs("div",{className:"space-y-2 text-sm",children:[e.jsxs("div",{children:[e.jsx("strong",{children:"pathname:"})," ",e.jsx("code",{className:"bg-white px-2 py-1 rounded",children:s.pathname})]}),e.jsxs("div",{children:[e.jsx("strong",{children:"search:"})," ",e.jsx("code",{className:"bg-white px-2 py-1 rounded",children:s.search||"(空)"})]}),e.jsxs("div",{children:[e.jsx("strong",{children:"hash:"})," ",e.jsx("code",{className:"bg-white px-2 py-1 rounded",children:s.hash||"(空)"})]}),e.jsxs("div",{children:[e.jsx("strong",{children:"state:"})," ",e.jsx("code",{className:"bg-white px-2 py-1 rounded",children:JSON.stringify(s.state)||"null"})]}),e.jsxs("div",{children:[e.jsx("strong",{children:"key:"})," ",e.jsx("code",{className:"bg-white px-2 py-1 rounded",children:s.key})]})]})})]}),e.jsxs("div",{children:[e.jsx("h4",{className:"font-medium mb-3",children:"位置变化历史"}),e.jsx("div",{className:"bg-gray-50 p-3 rounded max-h-60 overflow-y-auto",children:i.map((r,d)=>e.jsxs("div",{className:"mb-3 pb-3 border-b border-gray-200 last:border-b-0",children:[e.jsx("div",{className:"text-xs text-gray-500 mb-1",children:r.timestamp}),e.jsxs("div",{className:"text-sm",children:[e.jsxs("div",{children:[e.jsx("strong",{children:"路径:"})," ",r.pathname]}),r.search&&e.jsxs("div",{children:[e.jsx("strong",{children:"查询:"})," ",r.search]}),r.hash&&e.jsxs("div",{children:[e.jsx("strong",{children:"哈希:"})," ",r.hash]})]})]},d))})]})]})]})},b=()=>{const s=x(),i=h(),[a,r]=m.useState({id:"123",category:"electronics"}),d=()=>{i(`/router/traditional/hooks/user/${a.id}/category/${a.category}`)};return e.jsxs("div",{className:"p-6 bg-white rounded-lg shadow-sm border",children:[e.jsx("h3",{className:"text-lg font-semibold mb-4",children:"useParams Hook 演示"}),e.jsxs("div",{className:"grid grid-cols-1 lg:grid-cols-2 gap-6",children:[e.jsxs("div",{children:[e.jsx("h4",{className:"font-medium mb-3",children:"当前路由参数"}),e.jsx("div",{className:"bg-gray-50 p-4 rounded",children:Object.keys(s).length===0?e.jsx("p",{className:"text-gray-500 text-sm",children:"当前路由没有参数"}):e.jsx("div",{className:"space-y-2",children:Object.entries(s).map(([c,o])=>e.jsxs("div",{className:"text-sm",children:[e.jsxs("strong",{children:[c,":"]})," ",e.jsx("code",{className:"bg-white px-2 py-1 rounded ml-2",children:o})]},c))})})]}),e.jsxs("div",{children:[e.jsx("h4",{className:"font-medium mb-3",children:"模拟参数路由"}),e.jsxs("div",{className:"space-y-3",children:[e.jsxs("div",{children:[e.jsx("label",{className:"block text-sm font-medium mb-1",children:"用户ID:"}),e.jsx("input",{type:"text",value:a.id,onChange:c=>r(o=>({...o,id:c.target.value})),className:"w-full px-3 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500"})]}),e.jsxs("div",{children:[e.jsx("label",{className:"block text-sm font-medium mb-1",children:"分类:"}),e.jsxs("select",{value:a.category,onChange:c=>r(o=>({...o,category:c.target.value})),className:"w-full px-3 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500",children:[e.jsx("option",{value:"electronics",children:"电子产品"}),e.jsx("option",{value:"clothing",children:"服装"}),e.jsx("option",{value:"books",children:"图书"}),e.jsx("option",{value:"sports",children:"体育用品"})]})]}),e.jsx("button",{onClick:d,className:"w-full px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition-colors",children:"导航到参数路由"}),e.jsxs("div",{className:"text-sm text-gray-600",children:[e.jsx("strong",{children:"目标路由:"}),e.jsx("br",{}),e.jsxs("code",{className:"bg-gray-100 px-2 py-1 rounded",children:["/router/traditional/hooks/user/",a.id,"/category/",a.category]})]})]})]})]})]})},N=()=>{const[s,i]=g(),[a,r]=m.useState({key:"",value:""}),d=()=>{if(a.key&&a.value){const t=new URLSearchParams(s);t.set(a.key,a.value),i(t),r({key:"",value:""})}},c=t=>{const n=new URLSearchParams(s);n.delete(t),i(n)},o=()=>{i({})},l=Array.from(s.entries());return e.jsxs("div",{className:"p-6 bg-white rounded-lg shadow-sm border",children:[e.jsx("h3",{className:"text-lg font-semibold mb-4",children:"useSearchParams Hook 演示"}),e.jsxs("div",{className:"grid grid-cols-1 lg:grid-cols-2 gap-6",children:[e.jsxs("div",{children:[e.jsx("h4",{className:"font-medium mb-3",children:"当前查询参数"}),e.jsx("div",{className:"bg-gray-50 p-4 rounded min-h-32",children:l.length===0?e.jsx("p",{className:"text-gray-500 text-sm",children:"暂无查询参数"}):e.jsxs("div",{className:"space-y-2",children:[l.map(([t,n])=>e.jsxs("div",{className:"flex items-center justify-between bg-white p-2 rounded",children:[e.jsxs("div",{className:"text-sm",children:[e.jsxs("strong",{children:[t,":"]})," ",e.jsx("code",{className:"ml-2",children:n})]}),e.jsx("button",{onClick:()=>c(t),className:"px-2 py-1 text-xs bg-red-500 text-white rounded hover:bg-red-600 transition-colors",children:"删除"})]},t)),l.length>0&&e.jsx("button",{onClick:o,className:"w-full mt-3 px-3 py-2 text-sm bg-gray-500 text-white rounded hover:bg-gray-600 transition-colors",children:"清空所有参数"})]})})]}),e.jsxs("div",{children:[e.jsx("h4",{className:"font-medium mb-3",children:"添加查询参数"}),e.jsxs("div",{className:"space-y-3",children:[e.jsxs("div",{children:[e.jsx("label",{className:"block text-sm font-medium mb-1",children:"参数名:"}),e.jsx("input",{type:"text",value:a.key,onChange:t=>r(n=>({...n,key:t.target.value})),placeholder:"例如: page, sort, filter",className:"w-full px-3 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500"})]}),e.jsxs("div",{children:[e.jsx("label",{className:"block text-sm font-medium mb-1",children:"参数值:"}),e.jsx("input",{type:"text",value:a.value,onChange:t=>r(n=>({...n,value:t.target.value})),placeholder:"例如: 1, name, active",className:"w-full px-3 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500"})]}),e.jsx("button",{onClick:d,disabled:!a.key||!a.value,className:"w-full px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600 disabled:bg-gray-300 disabled:cursor-not-allowed transition-colors",children:"添加参数"}),e.jsxs("div",{className:"mt-4 p-3 bg-blue-50 rounded",children:[e.jsx("h5",{className:"text-sm font-medium mb-2",children:"快速添加示例:"}),e.jsx("div",{className:"flex flex-wrap gap-2",children:[{key:"page",value:"1"},{key:"sort",value:"name"},{key:"filter",value:"active"},{key:"limit",value:"10"}].map(t=>e.jsxs("button",{onClick:()=>{const n=new URLSearchParams(s);n.set(t.key,t.value),i(n)},className:"px-2 py-1 text-xs bg-blue-500 text-white rounded hover:bg-blue-600 transition-colors",children:[t.key,"=",t.value]},`${t.key}-${t.value}`))})]})]})]})]})]})},P=()=>{const s={title:"React Router Hooks",description:"深入学习 React Router 提供的各种 Hooks，掌握现代路由状态管理和导航控制技巧。",overview:e.jsxs("div",{className:"space-y-4",children:[e.jsxs("div",{className:"bg-blue-50 p-4 rounded-lg",children:[e.jsx("h3",{className:"font-semibold text-blue-800 mb-2",children:"🎯 核心概念"}),e.jsxs("ul",{className:"text-blue-700 space-y-1 text-sm",children:[e.jsxs("li",{children:["• ",e.jsx("strong",{children:"useNavigate:"})," 编程式导航控制"]}),e.jsxs("li",{children:["• ",e.jsx("strong",{children:"useLocation:"})," 获取当前位置信息"]}),e.jsxs("li",{children:["• ",e.jsx("strong",{children:"useParams:"})," 访问路由参数"]}),e.jsxs("li",{children:["• ",e.jsx("strong",{children:"useSearchParams:"})," 管理查询字符串"]})]})]}),e.jsxs("div",{className:"bg-green-50 p-4 rounded-lg",children:[e.jsx("h3",{className:"font-semibold text-green-800 mb-2",children:"✨ 主要优势"}),e.jsxs("ul",{className:"text-green-700 space-y-1 text-sm",children:[e.jsx("li",{children:"• 函数式组件友好的 API 设计"}),e.jsx("li",{children:"• 类型安全的路由状态访问"}),e.jsx("li",{children:"• 响应式的路由状态更新"}),e.jsx("li",{children:"• 简洁的编程式导航接口"})]})]}),e.jsxs("div",{className:"bg-yellow-50 p-4 rounded-lg",children:[e.jsx("h3",{className:"font-semibold text-yellow-800 mb-2",children:"🎯 适用场景"}),e.jsxs("ul",{className:"text-yellow-700 space-y-1 text-sm",children:[e.jsx("li",{children:"• 需要根据条件进行编程式导航"}),e.jsx("li",{children:"• 需要访问和处理路由参数"}),e.jsx("li",{children:"• 需要监听路由变化并执行副作用"}),e.jsx("li",{children:"• 需要动态管理查询参数"})]})]}),e.jsxs("div",{className:"bg-red-50 p-4 rounded-lg",children:[e.jsx("h3",{className:"font-semibold text-red-800 mb-2",children:"⚠️ 注意事项"}),e.jsxs("ul",{className:"text-red-700 space-y-1 text-sm",children:[e.jsx("li",{children:"• Hooks 只能在 Router 上下文中使用"}),e.jsx("li",{children:"• 避免在渲染过程中直接调用导航方法"}),e.jsx("li",{children:"• 注意路由参数的类型转换和验证"}),e.jsx("li",{children:"• 合理使用 replace 选项避免历史记录污染"})]})]})]}),examples:[{title:"useNavigate - 编程式导航",component:e.jsx(v,{}),description:"演示如何使用 useNavigate Hook 进行编程式导航，包括 push、replace 和历史记录操作。",observationPoints:["点击不同的导航按钮观察 URL 变化","注意 push 和 replace 的区别","观察后退/前进按钮的历史记录操作","查看右侧的导航历史记录"],keyPoints:["navigate(path) 默认使用 push 模式","navigate(path, { replace: true }) 使用 replace 模式","navigate(-1) 和 navigate(1) 用于历史记录导航","可以传递 state 数据到目标路由"],commonTraps:["在渲染过程中直接调用 navigate","忘记使用 replace 选项导致历史记录混乱","在组件卸载后调用 navigate"],solutions:["在事件处理器或 useEffect 中调用 navigate","根据业务需求选择合适的导航模式","使用 cleanup 函数或条件判断避免无效调用"],codeExample:{title:"useNavigate 基本用法",code:`import { useNavigate } from 'react-router-dom';

function MyComponent() {
  const navigate = useNavigate();
  
  const handleSubmit = (formData) => {
    // 提交成功后导航
    submitForm(formData).then(() => {
      navigate('/success', { 
        replace: true,
        state: { from: 'form' }
      });
    });
  };
  
  const goBack = () => {
    navigate(-1); // 返回上一页
  };
  
  return (
    <div>
      <button onClick={handleSubmit}>提交</button>
      <button onClick={goBack}>返回</button>
    </div>
  );
}`,language:"typescript",highlightLines:[4,7,8,9,10,14]}},{title:"useLocation - 位置信息获取",component:e.jsx(j,{}),description:"演示如何使用 useLocation Hook 获取当前路由的详细信息，包括路径、查询参数、哈希等。",observationPoints:["观察当前位置信息的实时更新","注意 pathname、search、hash 等属性","查看位置变化历史记录","观察 location.key 的唯一性"],keyPoints:["location.pathname 包含当前路径","location.search 包含查询字符串","location.hash 包含 URL 哈希","location.state 包含导航时传递的状态","location.key 是每个位置的唯一标识"],commonTraps:["直接修改 location 对象","忘记处理 location.state 可能为 null","在 useEffect 中忘记添加 location 依赖"],solutions:["使用 navigate 或 setSearchParams 更新位置","始终检查 state 是否存在","正确设置 useEffect 依赖数组"],codeExample:{title:"useLocation 监听路由变化",code:`import { useLocation, useEffect } from 'react-router-dom';

function RouteTracker() {
  const location = useLocation();
  
  useEffect(() => {
    // 路由变化时执行分析
    analytics.track('page_view', {
      path: location.pathname,
      search: location.search,
      referrer: location.state?.from
    });
  }, [location]);
  
  return (
    <div>
      <h2>当前页面: {location.pathname}</h2>
      {location.state?.message && (
        <p>消息: {location.state.message}</p>
      )}
    </div>
  );
}`,language:"typescript",highlightLines:[6,7,8,9,10,11,12,13,17,18,19]}},{title:"useParams - 路由参数访问",component:e.jsx(b,{}),description:"演示如何使用 useParams Hook 访问 URL 中的动态参数，支持多层嵌套参数。",observationPoints:["当前路由没有参数时的显示状态","修改参数值并导航观察参数变化","注意参数的类型都是字符串","观察目标路由的格式"],keyPoints:["useParams 返回当前路由的所有参数","参数值始终是字符串类型","参数名对应路由定义中的占位符","可以解构获取特定参数"],commonTraps:["假设参数是数字类型而不进行转换","没有处理参数不存在的情况","在路由定义中参数名不匹配"],solutions:["使用 Number() 或 parseInt() 转换数字参数","提供默认值或错误处理","确保路由定义与 useParams 使用一致"],codeExample:{title:"useParams 参数处理",code:`import { useParams } from 'react-router-dom';

// 路由定义: /user/:id/post/:postId
function UserPost() {
  const { id, postId } = useParams();
  
  // 类型转换和验证
  const userId = Number(id);
  const postIdNum = Number(postId);
  
  if (isNaN(userId) || isNaN(postIdNum)) {
    return <div>无效的参数</div>;
  }
  
  return (
    <div>
      <h2>用户 {userId} 的帖子 {postIdNum}</h2>
      {/* 使用参数获取数据 */}
    </div>
  );
}`,language:"typescript",highlightLines:[5,8,9,11,12,13,17]}},{title:"useSearchParams - 查询参数管理",component:e.jsx(N,{}),description:"演示如何使用 useSearchParams Hook 读取和更新 URL 查询参数，实现动态的参数管理。",observationPoints:["添加参数后观察 URL 的变化","删除单个参数和清空所有参数的效果","快速添加示例参数的便捷性","参数的实时同步更新"],keyPoints:["useSearchParams 返回 [searchParams, setSearchParams]","searchParams 是 URLSearchParams 实例","setSearchParams 可以接受对象或 URLSearchParams","参数变化会触发组件重新渲染"],commonTraps:["直接修改 searchParams 对象","忘记调用 setSearchParams 更新参数","参数值的类型处理不当"],solutions:["创建新的 URLSearchParams 实例进行修改","使用 setSearchParams 触发更新","对参数值进行适当的类型转换"],codeExample:{title:"useSearchParams 实用模式",code:`import { useSearchParams } from 'react-router-dom';

function ProductList() {
  const [searchParams, setSearchParams] = useSearchParams();
  
  // 获取参数
  const page = Number(searchParams.get('page')) || 1;
  const sort = searchParams.get('sort') || 'name';
  const filter = searchParams.get('filter') || '';
  
  // 更新参数的辅助函数
  const updateParams = (updates: Record<string, string>) => {
    const newParams = new URLSearchParams(searchParams);
    Object.entries(updates).forEach(([key, value]) => {
      if (value) {
        newParams.set(key, value);
      } else {
        newParams.delete(key);
      }
    });
    setSearchParams(newParams);
  };
  
  return (
    <div>
      <input 
        value={filter}
        onChange={(e) => updateParams({ filter: e.target.value, page: '1' })}
      />
      <select 
        value={sort}
        onChange={(e) => updateParams({ sort: e.target.value, page: '1' })}
      >
        <option value="name">按名称</option>
        <option value="price">按价格</option>
      </select>
    </div>
  );
}`,language:"typescript",highlightLines:[6,7,8,12,13,14,15,16,17,18,19,20,21,28,32]}}],tutorial:{concepts:["React Router Hooks 是基于 React Hooks 的路由状态管理 API","useNavigate 提供编程式导航功能，替代了类组件中的 history.push","useLocation 提供当前路由位置的详细信息，包括路径、查询参数等","useParams 用于访问 URL 中的动态参数，支持嵌套路由参数","useSearchParams 专门用于管理 URL 查询字符串参数","所有 Hooks 都必须在 Router 上下文中使用","Hooks 提供响应式的路由状态，状态变化会触发组件重新渲染"],steps:["确保组件在 Router 上下文中（BrowserRouter、HashRouter 等）","导入需要的 Hook：useNavigate、useLocation、useParams、useSearchParams","在函数组件中调用 Hook 获取路由状态或导航函数","使用 useNavigate 进行编程式导航，选择合适的导航模式","使用 useLocation 监听路由变化，在 useEffect 中处理副作用","使用 useParams 获取路由参数，注意类型转换和验证","使用 useSearchParams 管理查询参数，创建新实例进行修改","处理边界情况，如参数不存在、类型错误等"],tips:["使用 TypeScript 时可以为路由参数定义接口类型","在 useEffect 中正确设置依赖数组，避免无限循环","使用 replace 选项避免在表单提交后产生多余的历史记录","对于复杂的查询参数操作，可以封装自定义 Hook","使用 URLSearchParams 的方法进行参数操作，保持代码清晰","在导航前进行必要的数据验证和权限检查","合理使用 location.state 传递临时数据，避免 URL 过长"]},interview:{questions:[{question:"useNavigate 和传统的 history.push 有什么区别？",answer:"useNavigate 是 React Router v6 中的新 API，提供了更简洁的接口。主要区别：1) API 更简单，navigate(path) 替代 history.push(path)；2) 支持相对路径导航；3) 更好的 TypeScript 支持；4) 统一的选项参数格式；5) 自动处理 basename。"},{question:"如何在 useEffect 中正确使用路由 Hooks？",answer:"需要注意依赖数组的设置：1) useLocation 作为依赖监听路由变化；2) 避免在依赖数组中包含整个 location 对象，可以解构需要的属性；3) 使用 cleanup 函数清理副作用；4) 避免在 effect 中直接调用 navigate，应该通过事件处理器调用。"},{question:"useParams 获取的参数类型是什么？如何处理类型转换？",answer:"useParams 返回的所有参数都是 string | undefined 类型。处理方法：1) 使用 Number()、parseInt() 转换数字；2) 提供默认值处理 undefined；3) 进行类型验证和错误处理；4) 使用 TypeScript 时可以定义参数接口；5) 对于复杂类型可以使用 JSON.parse。"},{question:"useSearchParams 如何正确更新查询参数？",answer:"正确的更新方式：1) 创建新的 URLSearchParams 实例；2) 使用 set()、delete() 方法修改参数；3) 调用 setSearchParams 触发更新；4) 避免直接修改 searchParams 对象；5) 可以传递对象给 setSearchParams 进行批量更新；6) 注意参数值都是字符串类型。"},{question:"React Router Hooks 的性能考虑有哪些？",answer:"性能优化要点：1) 避免在渲染过程中调用导航方法；2) 合理使用 useMemo 缓存计算结果；3) 避免不必要的 location 依赖；4) 使用 replace 选项减少历史记录；5) 对于频繁变化的查询参数，考虑防抖处理；6) 避免在每次渲染时创建新的参数对象。"}],keyPoints:["所有 Router Hooks 都必须在 Router 上下文中使用","useNavigate 提供编程式导航，支持 push/replace 模式","useLocation 提供响应式的路由位置信息","useParams 用于访问动态路由参数，返回字符串类型","useSearchParams 专门管理 URL 查询参数","正确处理参数的类型转换和边界情况","在 useEffect 中合理使用路由状态作为依赖","避免在渲染过程中直接调用导航方法"]},bestPractices:{dos:["在事件处理器或 useEffect 中调用 navigate","使用 TypeScript 定义路由参数的类型接口","对路由参数进行类型转换和验证","使用 replace 选项避免历史记录污染","创建新的 URLSearchParams 实例进行参数修改","在 useEffect 中正确设置依赖数组","使用 location.state 传递临时数据","封装自定义 Hook 处理复杂的路由逻辑"],donts:["不要在渲染过程中直接调用 navigate","不要直接修改 location 或 searchParams 对象","不要忘记处理参数不存在的情况","不要在 useEffect 依赖数组中包含整个 location 对象","不要假设路由参数是特定类型而不进行转换","不要在组件卸载后调用导航方法","不要过度使用 location.state 传递大量数据","不要忽略路由 Hook 的上下文要求"],patterns:["路由守卫模式：在 useEffect 中检查权限并重定向","参数验证模式：封装参数获取和验证逻辑","查询参数管理模式：创建专门的参数管理 Hook","导航确认模式：在导航前进行用户确认","路由状态同步模式：将路由状态与组件状态同步","条件导航模式：根据条件选择不同的导航策略","路由分析模式：使用 useLocation 进行页面访问统计","深链接模式：通过 URL 参数恢复应用状态"]}};return e.jsx(p,{...s})};export{P as default};
