import{j as e,r as a}from"./index-CKwi3pR7.js";import{C as D}from"./ComponentTemplate-CukjZkuC.js";const T=()=>{const[i,h]=a.useState({renderCount:0,lastRenderTime:0,totalRenderTime:0,averageRenderTime:0}),g=a.useCallback(()=>{const d=performance.now();return()=>{const n=performance.now()-d;h(l=>{const u=l.renderCount+1,c=l.totalRenderTime+n;return{renderCount:u,lastRenderTime:n,totalRenderTime:c,averageRenderTime:c/u}})}},[]),x=a.useCallback(()=>{h({renderCount:0,lastRenderTime:0,totalRenderTime:0,averageRenderTime:0})},[]);return{metrics:i,recordRender:g,resetMetrics:x}},P=()=>{const[i,h]=a.useState("unoptimized"),[g,x]=a.useState(0),[d,f]=a.useState({id:1,name:"Route A",data:[]}),n=({data:c})=>{const{metrics:o,recordRender:y}=T();a.useEffect(()=>y());const m={...c,processed:!0,timestamp:Date.now()},b=()=>{console.log("Clicked:",m)};return e.jsxs("div",{className:"p-4 border rounded",children:[e.jsx("h4",{className:"font-semibold mb-2",children:"未优化路由组件"}),e.jsxs("div",{className:"text-sm space-y-1 mb-3",children:[e.jsxs("div",{children:["渲染次数: ",e.jsx("span",{className:"font-mono text-red-600",children:o.renderCount})]}),e.jsxs("div",{children:["最后渲染时间: ",e.jsxs("span",{className:"font-mono text-red-600",children:[o.lastRenderTime.toFixed(2),"ms"]})]}),e.jsxs("div",{children:["平均渲染时间: ",e.jsxs("span",{className:"font-mono text-red-600",children:[o.averageRenderTime.toFixed(2),"ms"]})]})]}),e.jsx("div",{className:"bg-gray-50 p-2 rounded text-xs mb-2",children:e.jsxs("div",{children:["数据: ",JSON.stringify(m)]})}),e.jsx("button",{onClick:b,className:"px-3 py-1 bg-red-500 text-white rounded hover:bg-red-600 text-sm",children:"点击处理数据"})]})},l=a.memo(({data:c})=>{const{metrics:o,recordRender:y}=T();a.useEffect(()=>y());const m=a.useMemo(()=>({...c,processed:!0,timestamp:Date.now()}),[c]),b=a.useCallback(()=>{console.log("Clicked:",m)},[m]);return e.jsxs("div",{className:"p-4 border rounded",children:[e.jsx("h4",{className:"font-semibold mb-2",children:"优化后路由组件"}),e.jsxs("div",{className:"text-sm space-y-1 mb-3",children:[e.jsxs("div",{children:["渲染次数: ",e.jsx("span",{className:"font-mono text-green-600",children:o.renderCount})]}),e.jsxs("div",{children:["最后渲染时间: ",e.jsxs("span",{className:"font-mono text-green-600",children:[o.lastRenderTime.toFixed(2),"ms"]})]}),e.jsxs("div",{children:["平均渲染时间: ",e.jsxs("span",{className:"font-mono text-green-600",children:[o.averageRenderTime.toFixed(2),"ms"]})]})]}),e.jsx("div",{className:"bg-gray-50 p-2 rounded text-xs mb-2",children:e.jsxs("div",{children:["数据: ",JSON.stringify(m)]})}),e.jsx("button",{onClick:b,className:"px-3 py-1 bg-green-500 text-white rounded hover:bg-green-600 text-sm",children:"点击处理数据"})]})}),u=()=>{x(c=>c+1),Math.random()>.7&&f(c=>({...c,data:[...c.data,`item-${Date.now()}`]}))};return e.jsxs("div",{className:"border rounded-lg overflow-hidden",children:[e.jsxs("div",{className:"bg-gray-100 p-4",children:[e.jsx("h3",{className:"font-semibold mb-3",children:"路由组件性能优化对比"}),e.jsxs("div",{className:"flex items-center justify-between mb-4",children:[e.jsxs("div",{className:"flex gap-2",children:[e.jsx("button",{onClick:()=>h("unoptimized"),className:`px-3 py-2 rounded text-sm ${i==="unoptimized"?"bg-red-500 text-white":"bg-white border hover:bg-gray-50"}`,children:"未优化组件"}),e.jsx("button",{onClick:()=>h("optimized"),className:`px-3 py-2 rounded text-sm ${i==="optimized"?"bg-green-500 text-white":"bg-white border hover:bg-gray-50"}`,children:"优化后组件"}),e.jsx("button",{onClick:()=>h("comparison"),className:`px-3 py-2 rounded text-sm ${i==="comparison"?"bg-blue-500 text-white":"bg-white border hover:bg-gray-50"}`,children:"对比显示"})]}),e.jsxs("div",{className:"flex items-center gap-2",children:[e.jsxs("span",{className:"text-sm text-gray-600",children:["更新次数: ",g]}),e.jsx("button",{onClick:u,className:"px-3 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 text-sm",children:"触发更新"})]})]})]}),e.jsxs("div",{className:"p-4",children:[i==="unoptimized"&&e.jsx(n,{data:d}),i==="optimized"&&e.jsx(l,{data:d}),i==="comparison"&&e.jsxs("div",{className:"grid md:grid-cols-2 gap-4",children:[e.jsx(n,{data:d}),e.jsx(l,{data:d})]}),e.jsxs("div",{className:"mt-6 bg-yellow-50 p-4 rounded",children:[e.jsx("h4",{className:"font-semibold text-yellow-800 mb-2",children:"性能分析："}),e.jsxs("ul",{className:"text-sm text-yellow-700 space-y-1",children:[e.jsxs("li",{children:["• ",e.jsx("strong",{children:"React.memo:"})," 防止props未变化时的不必要重渲染"]}),e.jsxs("li",{children:["• ",e.jsx("strong",{children:"useMemo:"})," 缓存计算结果，避免每次渲染重新计算"]}),e.jsxs("li",{children:["• ",e.jsx("strong",{children:"useCallback:"})," 缓存函数引用，防止子组件不必要更新"]}),e.jsxs("li",{children:["• ",e.jsx("strong",{children:"渲染次数:"})," 优化后组件的渲染次数明显减少"]}),e.jsxs("li",{children:["• ",e.jsx("strong",{children:"渲染时间:"})," 缓存机制减少了计算开销"]})]})]})]})]})},M=()=>{const[i,h]=a.useState(new Set),[g,x]=a.useState(new Set),[d,f]=a.useState({}),[n,l]=a.useState({}),[u,c]=a.useState("/home"),o=[{name:"home",route:"/home",size:45,description:"首页组件"},{name:"products",route:"/products",size:120,description:"产品列表"},{name:"dashboard",route:"/dashboard",size:200,description:"仪表板"},{name:"analytics",route:"/analytics",size:350,description:"数据分析"},{name:"admin",route:"/admin",size:180,description:"管理后台"},{name:"reports",route:"/reports",size:280,description:"报表系统"}],y=async(s,t)=>{if(i.has(s))return;x(p=>new Set([...p,s]));const r=performance.now(),j=Math.random()*1e3+t*5;await new Promise(p=>setTimeout(p,j));const S=performance.now()-r;h(p=>new Set([...p,s])),x(p=>{const z=new Set(p);return z.delete(s),z}),f(p=>({...p,[s]:t})),l(p=>({...p,[s]:S}))},m=async(s,t,r)=>{c(s),await y(t,r)},b=async(s,t)=>{await y(s,t)},N=()=>{h(new Set),x(new Set),f({}),l({}),c("/home")},k=Object.values(d).reduce((s,t)=>s+t,0),w=o.length,C=i.size,R=Object.keys(n).length>0?Object.values(n).reduce((s,t)=>s+t,0)/Object.keys(n).length:0;return e.jsxs("div",{className:"border rounded-lg overflow-hidden",children:[e.jsxs("div",{className:"bg-gray-100 p-4",children:[e.jsx("h3",{className:"font-semibold mb-3",children:"代码分割和懒加载演示"}),e.jsxs("div",{className:"grid grid-cols-2 md:grid-cols-4 gap-4 mb-4",children:[e.jsxs("div",{className:"bg-white p-3 rounded text-center",children:[e.jsxs("div",{className:"text-2xl font-bold text-blue-600",children:[C,"/",w]}),e.jsx("div",{className:"text-sm text-gray-600",children:"已加载代码块"})]}),e.jsxs("div",{className:"bg-white p-3 rounded text-center",children:[e.jsxs("div",{className:"text-2xl font-bold text-green-600",children:[k,"KB"]}),e.jsx("div",{className:"text-sm text-gray-600",children:"已加载大小"})]}),e.jsxs("div",{className:"bg-white p-3 rounded text-center",children:[e.jsxs("div",{className:"text-2xl font-bold text-orange-600",children:[R.toFixed(0),"ms"]}),e.jsx("div",{className:"text-sm text-gray-600",children:"平均加载时间"})]}),e.jsxs("div",{className:"bg-white p-3 rounded text-center",children:[e.jsx("div",{className:"text-2xl font-bold text-purple-600",children:g.size}),e.jsx("div",{className:"text-sm text-gray-600",children:"加载中"})]})]}),e.jsxs("div",{className:"flex justify-between items-center mb-4",children:[e.jsxs("div",{className:"text-sm text-gray-600",children:["当前路由: ",e.jsx("code",{className:"bg-white px-2 py-1 rounded",children:u})]}),e.jsxs("div",{className:"flex gap-2",children:[e.jsx("button",{onClick:()=>{o.forEach(s=>{i.has(s.name)||b(s.name,s.size)})},className:"px-3 py-1 bg-green-500 text-white rounded hover:bg-green-600 text-sm",children:"预加载所有"}),e.jsx("button",{onClick:N,className:"px-3 py-1 bg-gray-500 text-white rounded hover:bg-gray-600 text-sm",children:"重置演示"})]})]})]}),e.jsxs("div",{className:"p-4",children:[e.jsx("div",{className:"grid md:grid-cols-2 lg:grid-cols-3 gap-4 mb-6",children:o.map(s=>{const t=i.has(s.name),r=g.has(s.name),j=n[s.name],v=u===s.route;return e.jsxs("div",{className:`p-4 rounded border transition-all ${v?"bg-blue-50 border-blue-200 shadow-md":"bg-white border-gray-200"}`,children:[e.jsxs("div",{className:"flex items-center justify-between mb-2",children:[e.jsx("h4",{className:"font-medium",children:s.description}),e.jsx("span",{className:`px-2 py-1 rounded text-xs ${t?"bg-green-100 text-green-800":r?"bg-yellow-100 text-yellow-800":"bg-gray-100 text-gray-600"}`,children:r?"加载中":t?"已加载":"未加载"})]}),e.jsxs("div",{className:"text-sm text-gray-600 mb-3",children:[e.jsxs("div",{children:["代码块: ",s.name,".js"]}),e.jsxs("div",{children:["大小: ",s.size,"KB"]}),e.jsxs("div",{children:["路由: ",s.route]}),j&&e.jsxs("div",{className:"text-green-600",children:["加载时间: ",j.toFixed(0),"ms"]})]}),e.jsxs("div",{className:"flex gap-2",children:[e.jsx("button",{onClick:()=>m(s.route,s.name,s.size),disabled:r,className:`flex-1 px-3 py-2 rounded text-sm transition-colors ${r?"bg-gray-300 text-gray-500 cursor-not-allowed":v?"bg-blue-500 text-white":"bg-blue-100 text-blue-700 hover:bg-blue-200"}`,children:r?e.jsxs("div",{className:"flex items-center justify-center",children:[e.jsx("div",{className:"animate-spin rounded-full h-4 w-4 border-b-2 border-blue-600 mr-2"}),"加载中"]}):"访问路由"}),!t&&!r&&e.jsx("button",{onClick:()=>b(s.name,s.size),className:"px-3 py-2 bg-green-100 text-green-700 rounded hover:bg-green-200 text-sm",children:"预加载"})]})]},s.name)})}),e.jsxs("div",{className:"mb-4",children:[e.jsxs("div",{className:"flex justify-between items-center mb-2",children:[e.jsx("span",{className:"text-sm font-medium",children:"整体加载进度"}),e.jsxs("span",{className:"text-sm text-gray-600",children:[Math.round(C/w*100),"%"]})]}),e.jsx("div",{className:"w-full bg-gray-200 rounded-full h-2",children:e.jsx("div",{className:"bg-blue-600 h-2 rounded-full transition-all duration-300",style:{width:`${C/w*100}%`}})})]}),e.jsxs("div",{className:"bg-blue-50 p-4 rounded",children:[e.jsx("h4",{className:"font-semibold text-blue-800 mb-2",children:"代码分割优化建议："}),e.jsxs("ul",{className:"text-sm text-blue-700 space-y-1",children:[e.jsxs("li",{children:["• ",e.jsx("strong",{children:"按路由分割:"})," 每个路由对应一个代码块，实现按需加载"]}),e.jsxs("li",{children:["• ",e.jsx("strong",{children:"预加载策略:"})," 预加载用户可能访问的关键路由"]}),e.jsxs("li",{children:["• ",e.jsx("strong",{children:"缓存优化:"})," 利用浏览器缓存避免重复加载"]}),e.jsxs("li",{children:["• ",e.jsx("strong",{children:"大小控制:"})," 控制单个代码块大小，避免过大或过小"]}),e.jsxs("li",{children:["• ",e.jsx("strong",{children:"依赖分析:"})," 提取公共依赖到单独的vendor chunk"]}),e.jsxs("li",{children:["• ",e.jsx("strong",{children:"加载反馈:"})," 提供加载状态和进度反馈"]})]})]})]})]})},$=()=>{const[i,h]=a.useState("none"),[g,x]=a.useState({}),[d,f]=a.useState("/dashboard"),[n,l]=a.useState({hits:0,misses:0,size:0}),u={"/dashboard":{title:"仪表板",data:Array.from({length:100},(s,t)=>`Dashboard Item ${t+1}`)},"/analytics":{title:"数据分析",data:Array.from({length:200},(s,t)=>`Analytics Data ${t+1}`)},"/reports":{title:"报表",data:Array.from({length:150},(s,t)=>`Report ${t+1}`)},"/users":{title:"用户管理",data:Array.from({length:80},(s,t)=>`User ${t+1}`)}},c=async s=>{if(i!=="none"&&g[s])return l(r=>({...r,hits:r.hits+1})),g[s];l(r=>({...r,misses:r.misses+1})),await new Promise(r=>setTimeout(r,Math.random()*1e3+500));const t=u[s]||{title:"未知页面",data:[]};if(i==="memory")x(r=>{const j={...r,[s]:t};return l(v=>({...v,size:Object.keys(j).length})),j});else if(i==="persistent"){const r=`route_cache_${s}`;localStorage.setItem(r,JSON.stringify(t)),x(j=>{const v={...j,[s]:t};return l(S=>({...S,size:Object.keys(v).length})),v})}return t},[o,y]=a.useState(null),[m,b]=a.useState(!1),N=async s=>{f(s),b(!0);try{const t=await c(s);y(t)}catch(t){console.error("Failed to load route data:",t)}finally{b(!1)}},k=()=>{x({}),l({hits:0,misses:0,size:0}),Object.keys(u).forEach(s=>{localStorage.removeItem(`route_cache_${s}`)})},w=s=>{h(s),k()};a.useEffect(()=>{N(d)},[]);const C=Object.keys(u),R=n.hits+n.misses>0?(n.hits/(n.hits+n.misses)*100).toFixed(1):"0";return e.jsxs("div",{className:"border rounded-lg overflow-hidden",children:[e.jsxs("div",{className:"bg-gray-100 p-4",children:[e.jsx("h3",{className:"font-semibold mb-3",children:"路由缓存策略演示"}),e.jsxs("div",{className:"mb-4",children:[e.jsx("h4",{className:"text-sm font-medium mb-2",children:"缓存策略："}),e.jsx("div",{className:"flex gap-2",children:[{key:"none",label:"无缓存",color:"gray"},{key:"memory",label:"内存缓存",color:"blue"},{key:"persistent",label:"持久化缓存",color:"green"}].map(s=>e.jsx("button",{onClick:()=>w(s.key),className:`px-3 py-2 rounded text-sm ${i===s.key?`bg-${s.color}-500 text-white`:"bg-white border hover:bg-gray-50"}`,children:s.label},s.key))})]}),e.jsxs("div",{className:"grid grid-cols-2 md:grid-cols-4 gap-4 mb-4",children:[e.jsxs("div",{className:"bg-white p-3 rounded text-center",children:[e.jsx("div",{className:"text-2xl font-bold text-green-600",children:n.hits}),e.jsx("div",{className:"text-sm text-gray-600",children:"缓存命中"})]}),e.jsxs("div",{className:"bg-white p-3 rounded text-center",children:[e.jsx("div",{className:"text-2xl font-bold text-red-600",children:n.misses}),e.jsx("div",{className:"text-sm text-gray-600",children:"缓存未命中"})]}),e.jsxs("div",{className:"bg-white p-3 rounded text-center",children:[e.jsxs("div",{className:"text-2xl font-bold text-blue-600",children:[R,"%"]}),e.jsx("div",{className:"text-sm text-gray-600",children:"命中率"})]}),e.jsxs("div",{className:"bg-white p-3 rounded text-center",children:[e.jsx("div",{className:"text-2xl font-bold text-purple-600",children:n.size}),e.jsx("div",{className:"text-sm text-gray-600",children:"缓存条目"})]})]}),e.jsxs("div",{className:"flex justify-between items-center",children:[e.jsx("div",{className:"flex gap-2",children:C.map(s=>e.jsx("button",{onClick:()=>N(s),disabled:m,className:`px-3 py-2 rounded text-sm transition-colors ${d===s?"bg-blue-500 text-white":m?"bg-gray-300 text-gray-500 cursor-not-allowed":"bg-white border hover:bg-gray-50"}`,children:s.replace("/","")},s))}),e.jsx("button",{onClick:k,className:"px-3 py-1 bg-red-500 text-white rounded hover:bg-red-600 text-sm",children:"清除缓存"})]})]}),e.jsxs("div",{className:"p-4",children:[e.jsxs("div",{className:"mb-4",children:[e.jsx("strong",{children:"当前路由:"}),e.jsx("code",{className:"ml-2 bg-gray-100 px-2 py-1 rounded",children:d}),g[d]&&e.jsx("span",{className:"ml-2 px-2 py-1 bg-green-100 text-green-800 rounded text-sm",children:"已缓存"})]}),m?e.jsxs("div",{className:"flex items-center justify-center h-32",children:[e.jsx("div",{className:"animate-spin rounded-full h-8 w-8 border-b-2 border-blue-600 mr-3"}),e.jsx("span",{children:"加载路由数据中..."})]}):o?e.jsxs("div",{className:"bg-gray-50 p-4 rounded",children:[e.jsx("h4",{className:"font-semibold mb-2",children:o.title}),e.jsxs("div",{className:"text-sm text-gray-600 mb-2",children:["数据条目: ",o.data.length]}),e.jsxs("div",{className:"max-h-32 overflow-y-auto bg-white p-2 rounded border",children:[o.data.slice(0,10).map((s,t)=>e.jsx("div",{className:"text-sm py-1",children:s},t)),o.data.length>10&&e.jsxs("div",{className:"text-sm text-gray-500 py-1",children:["... 还有 ",o.data.length-10," 条数据"]})]})]}):e.jsx("div",{className:"text-center text-gray-500 h-32 flex items-center justify-center",children:"请选择一个路由查看数据"}),e.jsxs("div",{className:"mt-6 bg-yellow-50 p-4 rounded",children:[e.jsx("h4",{className:"font-semibold text-yellow-800 mb-2",children:"缓存策略对比："}),e.jsxs("div",{className:"grid md:grid-cols-3 gap-4 text-sm",children:[e.jsxs("div",{children:[e.jsx("h5",{className:"font-medium text-yellow-800 mb-1",children:"无缓存"}),e.jsxs("ul",{className:"text-yellow-700 space-y-1",children:[e.jsx("li",{children:"• 每次都重新获取数据"}),e.jsx("li",{children:"• 网络请求多，加载慢"}),e.jsx("li",{children:"• 适合实时性要求高的场景"})]})]}),e.jsxs("div",{children:[e.jsx("h5",{className:"font-medium text-yellow-800 mb-1",children:"内存缓存"}),e.jsxs("ul",{className:"text-yellow-700 space-y-1",children:[e.jsx("li",{children:"• 数据存储在内存中"}),e.jsx("li",{children:"• 页面刷新后缓存丢失"}),e.jsx("li",{children:"• 适合会话期间的数据缓存"})]})]}),e.jsxs("div",{children:[e.jsx("h5",{className:"font-medium text-yellow-800 mb-1",children:"持久化缓存"}),e.jsxs("ul",{className:"text-yellow-700 space-y-1",children:[e.jsx("li",{children:"• 数据持久化存储"}),e.jsx("li",{children:"• 页面刷新后缓存仍然有效"}),e.jsx("li",{children:"• 适合相对稳定的数据"})]})]})]})]})]})]})},E=()=>e.jsx(D,{title:"传统模式 - 性能优化",description:"深入探讨React Router传统模式的性能优化技术：组件优化、代码分割、缓存策略等，提升应用的加载速度和用户体验。",overview:e.jsxs("div",{className:"space-y-4",children:[e.jsxs("div",{className:"grid md:grid-cols-2 gap-6",children:[e.jsxs("div",{className:"bg-blue-50 p-4 rounded-lg",children:[e.jsx("h3",{className:"font-semibold text-blue-800 mb-2",children:"🚀 优化技术"}),e.jsxs("ul",{className:"space-y-1 text-sm text-blue-700",children:[e.jsxs("li",{children:["• ",e.jsx("strong",{children:"组件优化:"})," React.memo、useMemo、useCallback"]}),e.jsxs("li",{children:["• ",e.jsx("strong",{children:"代码分割:"})," 动态导入和懒加载"]}),e.jsxs("li",{children:["• ",e.jsx("strong",{children:"缓存策略:"})," 内存缓存和持久化缓存"]}),e.jsxs("li",{children:["• ",e.jsx("strong",{children:"预加载:"})," 关键路由的预加载"]}),e.jsxs("li",{children:["• ",e.jsx("strong",{children:"Bundle优化:"})," 代码块大小控制"]}),e.jsxs("li",{children:["• ",e.jsx("strong",{children:"性能监控:"})," 渲染性能分析"]})]})]}),e.jsxs("div",{className:"bg-green-50 p-4 rounded-lg",children:[e.jsx("h3",{className:"font-semibold text-green-800 mb-2",children:"📈 性能收益"}),e.jsxs("ul",{className:"space-y-1 text-sm text-green-700",children:[e.jsx("li",{children:"• 减少不必要的组件重渲染"}),e.jsx("li",{children:"• 降低初始包大小和加载时间"}),e.jsx("li",{children:"• 提升路由切换的响应速度"}),e.jsx("li",{children:"• 减少网络请求和带宽消耗"}),e.jsx("li",{children:"• 改善移动设备上的性能表现"}),e.jsx("li",{children:"• 提升整体用户体验"})]})]})]}),e.jsxs("div",{className:"bg-yellow-50 p-4 rounded-lg",children:[e.jsx("h3",{className:"font-semibold text-yellow-800 mb-2",children:"⚡ 优化原则"}),e.jsxs("ul",{className:"space-y-1 text-sm text-yellow-700",children:[e.jsx("li",{children:"• 测量优先：先测量性能瓶颈，再进行针对性优化"}),e.jsx("li",{children:"• 渐进优化：从影响最大的优化点开始，逐步改进"}),e.jsx("li",{children:"• 平衡权衡：在性能、复杂度和维护性之间找到平衡"}),e.jsx("li",{children:"• 用户体验：优化应该以提升用户体验为最终目标"}),e.jsx("li",{children:"• 持续监控：建立性能监控机制，及时发现性能问题"})]})]})]}),examples:[{title:"路由组件性能优化",component:e.jsx(P,{}),description:"对比展示未优化和优化后的路由组件性能差异",observationPoints:["未优化组件每次更新都会重新渲染，渲染次数较多","优化后组件使用React.memo避免不必要的重渲染","useMemo缓存计算结果，减少重复计算开销","useCallback缓存函数引用，防止子组件更新"],keyPoints:["React.memo进行浅比较，props未变化时跳过渲染","useMemo缓存复杂计算结果，依赖项变化时才重新计算","useCallback缓存函数引用，避免每次渲染创建新函数","性能监控帮助量化优化效果"],commonTraps:["过度使用memo导致比较开销大于渲染开销","useMemo和useCallback的依赖项设置不正确","在render中创建对象和函数引用"],solutions:["只对渲染开销大的组件使用memo","正确设置依赖项数组，避免过度或不足","将稳定的对象和函数提取到组件外部"],codeExample:{title:"路由组件优化实现",code:`import React, { memo, useMemo, useCallback } from 'react';

// 未优化的路由组件
function UnoptimizedRoute({ data, onUpdate }) {
  // 每次渲染都创建新对象（性能问题）
  const processedData = {
    ...data,
    processed: true,
    timestamp: Date.now()
  };
  
  // 每次渲染都创建新函数（性能问题）
  const handleClick = () => {
    onUpdate(processedData);
  };
  
  return (
    <div>
      <h3>{processedData.title}</h3>
      <button onClick={handleClick}>更新数据</button>
    </div>
  );
}

// 优化后的路由组件
const OptimizedRoute = memo(({ data, onUpdate }) => {
  // 使用useMemo缓存处理后的数据
  const processedData = useMemo(() => ({
    ...data,
    processed: true,
    timestamp: Date.now()
  }), [data]);
  
  // 使用useCallback缓存事件处理函数
  const handleClick = useCallback(() => {
    onUpdate(processedData);
  }, [processedData, onUpdate]);
  
  return (
    <div>
      <h3>{processedData.title}</h3>
      <button onClick={handleClick}>更新数据</button>
    </div>
  );
});

// 自定义比较函数（可选）
const OptimizedRouteWithCustomCompare = memo(({ data, onUpdate }) => {
  // 组件实现...
}, (prevProps, nextProps) => {
  // 自定义比较逻辑
  return prevProps.data.id === nextProps.data.id &&
         prevProps.data.version === nextProps.data.version;
});`,language:"typescript",highlights:[23,25,31,44]}},{title:"代码分割和懒加载",component:e.jsx(M,{}),description:"演示路由级别的代码分割和按需加载实现",observationPoints:["不同大小的代码块加载时间不同，大文件加载更慢","已加载的代码块再次访问时无需重新加载","预加载功能可以提前加载可能访问的代码块","加载进度和统计信息帮助了解优化效果"],keyPoints:["React.lazy()实现组件的动态导入","Suspense提供加载状态的优雅处理","代码分割减少初始包大小","预加载策略平衡性能和用户体验"],commonTraps:["过度分割导致网络请求过多","忘记添加Suspense包装器","懒加载组件的错误处理不当"],solutions:["合理规划代码分割粒度，避免过小的chunk","使用ErrorBoundary处理懒加载错误","实现智能预加载策略"],codeExample:{title:"代码分割配置",code:`import { lazy, Suspense } from 'react';
import { Routes, Route } from 'react-router-dom';

// 懒加载路由组件
const HomePage = lazy(() => import('./pages/HomePage'));
const ProductsPage = lazy(() => 
  import(/* webpackChunkName: "products" */ './pages/ProductsPage')
);
const DashboardPage = lazy(() => 
  import(/* webpackChunkName: "dashboard" */ './pages/DashboardPage')
);

// 预加载函数
const preloadRoute = (routeComponent: () => Promise<any>) => {
  routeComponent();
};

// 路由配置
function AppRoutes() {
  // 预加载关键路由
  useEffect(() => {
    // 在空闲时间预加载
    if ('requestIdleCallback' in window) {
      requestIdleCallback(() => {
        preloadRoute(() => import('./pages/DashboardPage'));
      });
    }
  }, []);
  
  return (
    <Suspense fallback={
      <div className="flex items-center justify-center h-64">
        <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-blue-600"></div>
        <span className="ml-2">加载中...</span>
      </div>
    }>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/products" element={<ProductsPage />} />
        <Route path="/dashboard" element={<DashboardPage />} />
      </Routes>
    </Suspense>
  );
}

// Webpack配置优化
// webpack.config.js
module.exports = {
  optimization: {
    splitChunks: {
      chunks: 'all',
      cacheGroups: {
        vendor: {
          test: /[\\/]node_modules[\\/]/,
          name: 'vendors',
          chunks: 'all',
        },
        common: {
          name: 'common',
          minChunks: 2,
          chunks: 'all',
          enforce: true
        }
      }
    }
  }
};`,language:"typescript",highlights:[4,6,14,22,30,47]}},{title:"路由缓存策略",component:e.jsx($,{}),description:"展示不同缓存策略对路由数据加载性能的影响",observationPoints:["无缓存模式每次都重新获取数据，加载时间较长","内存缓存模式在会话期间有效，命中率较高","持久化缓存跨会话有效，但需要考虑数据时效性","缓存命中率直接影响用户体验"],keyPoints:["内存缓存适合会话期间的临时数据","持久化缓存适合相对稳定的数据","缓存策略需要考虑数据的时效性","缓存命中率是衡量缓存效果的重要指标"],commonTraps:["缓存过期数据导致显示错误信息","缓存占用过多内存影响性能","没有合适的缓存失效机制"],solutions:["设置合理的缓存过期时间","实现缓存大小限制和LRU策略","提供手动刷新和缓存清除功能"],codeExample:{title:"路由缓存实现",code:`import { useState, useEffect } from 'react';

// 缓存管理类
class RouteCache {
  private memoryCache = new Map<string, any>();
  private cacheTimestamps = new Map<string, number>();
  private maxSize = 50;
  private ttl = 5 * 60 * 1000; // 5分钟
  
  // 获取缓存数据
  get(key: string): any | null {
    // 检查内存缓存
    if (this.memoryCache.has(key)) {
      const timestamp = this.cacheTimestamps.get(key);
      if (timestamp && Date.now() - timestamp < this.ttl) {
        return this.memoryCache.get(key);
      } else {
        // 缓存过期，清除
        this.memoryCache.delete(key);
        this.cacheTimestamps.delete(key);
      }
    }
    
    // 检查持久化缓存
    try {
      const cached = localStorage.getItem(\`route_cache_\${key}\`);
      if (cached) {
        const { data, timestamp } = JSON.parse(cached);
        if (Date.now() - timestamp < this.ttl) {
          // 恢复到内存缓存
          this.set(key, data);
          return data;
        } else {
          localStorage.removeItem(\`route_cache_\${key}\`);
        }
      }
    } catch (error) {
      console.warn('Failed to read from cache:', error);
    }
    
    return null;
  }
  
  // 设置缓存数据
  set(key: string, data: any, persistent = false): void {
    // 内存缓存大小限制
    if (this.memoryCache.size >= this.maxSize) {
      const firstKey = this.memoryCache.keys().next().value;
      this.memoryCache.delete(firstKey);
      this.cacheTimestamps.delete(firstKey);
    }
    
    this.memoryCache.set(key, data);
    this.cacheTimestamps.set(key, Date.now());
    
    // 持久化缓存
    if (persistent) {
      try {
        localStorage.setItem(\`route_cache_\${key}\`, JSON.stringify({
          data,
          timestamp: Date.now()
        }));
      } catch (error) {
        console.warn('Failed to write to cache:', error);
      }
    }
  }
  
  // 清除缓存
  clear(): void {
    this.memoryCache.clear();
    this.cacheTimestamps.clear();
    
    // 清除持久化缓存
    Object.keys(localStorage)
      .filter(key => key.startsWith('route_cache_'))
      .forEach(key => localStorage.removeItem(key));
  }
}

// 使用缓存的Hook
function useCachedRouteData(route: string) {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [cache] = useState(() => new RouteCache());
  
  const fetchData = async (route: string) => {
    // 尝试从缓存获取
    const cachedData = cache.get(route);
    if (cachedData) {
      setData(cachedData);
      return cachedData;
    }
    
    setLoading(true);
    try {
      // 模拟API调用
      const response = await fetch(\`/api/routes\${route}\`);
      const newData = await response.json();
      
      // 缓存数据
      cache.set(route, newData, true);
      setData(newData);
      
      return newData;
    } catch (error) {
      console.error('Failed to fetch route data:', error);
      throw error;
    } finally {
      setLoading(false);
    }
  };
  
  return { data, loading, fetchData, clearCache: () => cache.clear() };
}`,language:"typescript",highlights:[10,25,44,75,80,91]}}],tutorial:{concepts:["组件优化：使用React.memo、useMemo、useCallback减少不必要的渲染","代码分割：通过动态导入将应用拆分为多个代码块","懒加载：按需加载路由组件，减少初始包大小","缓存策略：合理使用内存缓存和持久化缓存提升性能","预加载：在适当时机预加载可能访问的路由","性能监控：建立性能指标监控和分析机制"],steps:["分析应用的性能瓶颈和优化机会","识别渲染频繁和计算复杂的组件","应用React.memo、useMemo、useCallback优化组件","设计合理的代码分割策略","实现路由组件的懒加载","建立缓存机制和策略","实现预加载和性能监控","测试和验证优化效果"],tips:["优化前先测量，确定真正的性能瓶颈","不要过度优化，平衡性能和复杂度","合理设置依赖项数组，避免过度或不足","考虑用户的网络环境和设备性能","建立性能监控机制，持续跟踪优化效果","定期审查和更新优化策略"]},interview:{questions:[{question:"React Router应用中有哪些常见的性能优化技术？",answer:"主要优化技术包括：1) 组件优化：使用React.memo防止不必要重渲染，useMemo缓存计算结果，useCallback缓存函数引用；2) 代码分割：使用React.lazy()和动态导入实现路由级别的代码分割；3) 缓存策略：实现路由数据的内存缓存和持久化缓存；4) 预加载：在适当时机预加载关键路由；5) Bundle优化：控制代码块大小，提取公共依赖。"},{question:"如何实现有效的路由级代码分割？有什么注意事项？",answer:"实现方法：1) 使用React.lazy()包装路由组件；2) 用Suspense提供加载状态；3) 使用webpack魔法注释控制chunk命名；4) 注意事项：避免过度分割导致请求过多；合理控制chunk大小；添加ErrorBoundary处理加载错误；考虑预加载策略；监控bundle大小和加载性能；提供友好的加载状态反馈。"},{question:"路由缓存策略如何设计？需要考虑哪些因素？",answer:"缓存策略设计要点：1) 缓存类型：内存缓存适合会话期间数据，持久化缓存适合稳定数据；2) 过期机制：设置合理的TTL，实现缓存失效；3) 大小限制：防止缓存占用过多内存，实现LRU策略；4) 数据一致性：考虑缓存更新和同步；5) 错误处理：缓存读写失败的降级方案；6) 用户控制：提供手动刷新和清除缓存功能。"},{question:"如何监控和分析React Router应用的性能？",answer:"性能监控方案：1) 渲染性能：监控组件渲染次数和时间，使用React DevTools Profiler；2) 路由性能：监控路由切换时间，代码块加载时间；3) 缓存效果：统计缓存命中率，分析缓存效果；4) Bundle分析：使用webpack-bundle-analyzer分析包大小；5) 用户体验：监控首屏时间，路由响应时间；6) 实时监控：集成性能监控服务，建立告警机制。"},{question:"在大型应用中如何平衡性能优化和开发效率？",answer:"平衡策略：1) 渐进优化：先解决影响最大的性能问题，避免过早优化；2) 自动化工具：使用ESLint规则、性能预算等自动化检查；3) 性能基准：建立性能基准和目标，定期评估；4) 团队规范：制定性能优化的最佳实践和代码规范；5) 监控反馈：建立性能监控和反馈机制；6) 技术债务：定期评估和偿还性能相关的技术债务。"}],keyPoints:["掌握React Router应用的性能优化技术","理解代码分割和懒加载的实现原理","熟悉缓存策略的设计和实现","了解性能监控和分析方法","掌握性能优化的最佳实践","理解性能优化与开发效率的平衡"]},bestPractices:{dos:["优化前先测量性能，确定真正的瓶颈","合理使用React.memo、useMemo、useCallback","实现路由级别的代码分割和懒加载","建立有效的缓存策略和过期机制","提供友好的加载状态和错误处理","建立性能监控和分析机制","定期审查和更新优化策略"],donts:["不要过度优化，避免不必要的复杂度","不要忽略依赖项数组的正确设置","不要过度分割代码导致请求过多","不要缓存过期或错误的数据","不要忽略错误处理和降级方案","不要在没有测量的情况下进行优化","不要忽略移动设备的性能特点"],patterns:["组件级优化：React.memo + useMemo + useCallback组合使用","路由级优化：代码分割 + 懒加载 + 预加载策略","数据级优化：缓存策略 + 数据预取 + 状态管理","监控驱动：性能监控 + 分析优化 + 持续改进","用户体验：加载状态 + 错误处理 + 渐进增强"]},codeExamples:[{title:"完整的性能优化配置",code:`// 性能优化配置文件
// performance.config.ts
export const performanceConfig = {
  // 代码分割配置
  codeSplitting: {
    chunkSizeLimit: 250000, // 250KB
    maxAsyncRequests: 30,
    maxInitialRequests: 30,
    cacheGroups: {
      vendor: {
        test: /[\\/]node_modules[\\/]/,
        name: 'vendors',
        chunks: 'all',
        priority: 10
      },
      common: {
        name: 'common',
        minChunks: 2,
        chunks: 'all',
        priority: 5
      }
    }
  },
  
  // 缓存配置
  cache: {
    ttl: 5 * 60 * 1000, // 5分钟
    maxSize: 50,
    strategy: 'memory' as 'none' | 'memory' | 'persistent'
  },
  
  // 预加载配置
  preload: {
    enabled: true,
    routes: ['/dashboard', '/analytics'],
    delay: 2000 // 2秒后开始预加载
  },
  
  // 监控配置
  monitoring: {
    enabled: true,
    sampleRate: 0.1, // 10%采样率
    thresholds: {
      renderTime: 16, // 16ms
      loadTime: 3000, // 3秒
      cacheHitRate: 0.8 // 80%
    }
  }
};

// 性能优化工具类
export class PerformanceOptimizer {
  private static instance: PerformanceOptimizer;
  private cache = new Map<string, any>();
  private metrics = {
    renders: 0,
    cacheHits: 0,
    cacheMisses: 0
  };
  
  static getInstance(): PerformanceOptimizer {
    if (!this.instance) {
      this.instance = new PerformanceOptimizer();
    }
    return this.instance;
  }
  
  // 性能监控装饰器
  measurePerformance(target: any, propertyName: string, descriptor: PropertyDescriptor) {
    const method = descriptor.value;
    
    descriptor.value = function (...args: any[]) {
      const start = performance.now();
      const result = method.apply(this, args);
      const end = performance.now();
      
      console.log(\`\${propertyName} 执行时间: \${end - start}ms\`);
      return result;
    };
    
    return descriptor;
  }
  
  // 智能预加载
  async preloadRoutes(routes: string[]) {
    const preloadPromises = routes.map(route => {
      return import(/* webpackChunkName: "[request]" */ \`../pages\${route}\`);
    });
    
    try {
      await Promise.all(preloadPromises);
      console.log('预加载完成:', routes);
    } catch (error) {
      console.warn('预加载失败:', error);
    }
  }
  
  // 获取性能报告
  getPerformanceReport() {
    const cacheHitRate = this.metrics.cacheHits / 
      (this.metrics.cacheHits + this.metrics.cacheMisses);
    
    return {
      totalRenders: this.metrics.renders,
      cacheHitRate: isNaN(cacheHitRate) ? 0 : cacheHitRate,
      cacheSize: this.cache.size,
      memoryUsage: (performance as any).memory?.usedJSHeapSize || 0
    };
  }
}`,language:"typescript",highlights:[8,25,35,55,70,85]}]});export{E as default};
