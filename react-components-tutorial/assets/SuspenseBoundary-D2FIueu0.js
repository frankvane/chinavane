import{j as e,r as t,R as h}from"./index-MmCcWZhd.js";import{C as z}from"./ComponentTemplate-DoUPe1QN.js";const j=s=>new Promise(n=>{setTimeout(()=>{n({id:s,name:`用户${s}`,email:`user${s}@example.com`})},Math.random()*2e3+1e3)}),P=s=>new Promise(n=>{setTimeout(()=>{n({id:s,title:`文章标题 ${s}`,content:`这是文章 ${s} 的内容。Lorem ipsum dolor sit amet, consectetur adipiscing elit.`})},Math.random()*1500+500)}),N=t.lazy(()=>new Promise(s=>{setTimeout(()=>{s({default:({userId:n})=>{const[a,o]=t.useState(null),[i,d]=t.useState(!0);if(h.useEffect(()=>{j(n).then(l=>{o(l),d(!1)})},[n]),i)throw j(n);return e.jsxs("div",{className:"p-4 bg-blue-50 border border-blue-200 rounded-lg",children:[e.jsx("h3",{className:"text-lg font-semibold text-blue-800 mb-2",children:"用户资料"}),e.jsxs("div",{className:"space-y-2 text-blue-700",children:[e.jsxs("p",{children:[e.jsx("strong",{children:"ID:"})," ",a.id]}),e.jsxs("p",{children:[e.jsx("strong",{children:"姓名:"})," ",a.name]}),e.jsxs("p",{children:[e.jsx("strong",{children:"邮箱:"})," ",a.email]})]})]})}})},1e3)})),L=t.lazy(()=>new Promise(s=>{setTimeout(()=>{s({default:({count:n})=>{const[a,o]=t.useState([]),[i,d]=t.useState(!0);if(h.useEffect(()=>{Promise.all(Array.from({length:n},(l,p)=>P(p+1))).then(l=>{o(l),d(!1)})},[n]),i)throw Promise.all(Array.from({length:n},(l,p)=>P(p+1)));return e.jsxs("div",{className:"space-y-3",children:[e.jsx("h3",{className:"text-lg font-semibold text-green-800",children:"文章列表"}),a.map(l=>e.jsxs("div",{className:"p-3 bg-green-50 border border-green-200 rounded",children:[e.jsx("h4",{className:"font-semibold text-green-800",children:l.title}),e.jsx("p",{className:"text-green-600 text-sm mt-1",children:l.content})]},l.id))]})}})},800)})),g=({message:s="加载中..."})=>e.jsx("div",{className:"flex items-center justify-center p-8",children:e.jsxs("div",{className:"flex items-center space-x-3",children:[e.jsx("div",{className:"animate-spin rounded-full h-6 w-6 border-b-2 border-blue-600"}),e.jsx("span",{className:"text-blue-600 font-medium",children:s})]})}),U=()=>e.jsxs("div",{className:"p-4 bg-gray-50 border border-gray-200 rounded-lg animate-pulse",children:[e.jsx("div",{className:"h-4 bg-gray-300 rounded w-3/4 mb-3"}),e.jsxs("div",{className:"space-y-2",children:[e.jsx("div",{className:"h-3 bg-gray-300 rounded w-full"}),e.jsx("div",{className:"h-3 bg-gray-300 rounded w-5/6"}),e.jsx("div",{className:"h-3 bg-gray-300 rounded w-4/6"})]})]}),R=({progress:s=0})=>e.jsxs("div",{className:"p-6 bg-purple-50 border border-purple-200 rounded-lg",children:[e.jsxs("div",{className:"text-center mb-4",children:[e.jsx("div",{className:"text-lg font-semibold text-purple-800",children:"加载中..."}),e.jsx("div",{className:"text-sm text-purple-600 mt-1",children:"请稍候，正在获取数据"})]}),e.jsx("div",{className:"w-full bg-purple-200 rounded-full h-2",children:e.jsx("div",{className:"bg-purple-600 h-2 rounded-full transition-all duration-300",style:{width:`${s}%`}})}),e.jsxs("div",{className:"text-center mt-2 text-sm text-purple-600",children:[s,"%"]})]}),C=()=>{const[s,n]=t.useState(!1),[a,o]=t.useState(1);return e.jsxs("div",{className:"space-y-4",children:[e.jsxs("div",{className:"flex items-center space-x-4",children:[e.jsx("button",{onClick:()=>n(!s),className:`px-4 py-2 rounded text-white ${s?"bg-red-600 hover:bg-red-700":"bg-blue-600 hover:bg-blue-700"}`,children:s?"隐藏用户":"显示用户"}),e.jsx("select",{value:a,onChange:i=>o(Number(i.target.value)),className:"px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500",children:[1,2,3,4,5].map(i=>e.jsxs("option",{value:i,children:["用户 ",i]},i))})]}),s&&e.jsx(t.Suspense,{fallback:e.jsx(g,{message:"正在加载用户资料..."}),children:e.jsx(N,{userId:a})})]})},D=()=>{const[s,n]=t.useState(!1),[a,o]=t.useState(3);return e.jsxs("div",{className:"space-y-4",children:[e.jsxs("div",{className:"flex items-center space-x-4",children:[e.jsx("button",{onClick:()=>n(!s),className:`px-4 py-2 rounded text-white ${s?"bg-red-600 hover:bg-red-700":"bg-green-600 hover:bg-green-700"}`,children:s?"隐藏内容":"显示内容"}),e.jsxs("div",{className:"flex items-center space-x-2",children:[e.jsx("label",{className:"text-sm text-gray-600",children:"文章数量:"}),e.jsx("input",{type:"range",min:"1",max:"5",value:a,onChange:i=>o(Number(i.target.value)),className:"w-20"}),e.jsx("span",{className:"text-sm text-gray-600",children:a})]})]}),s&&e.jsxs("div",{className:"border border-gray-200 rounded-lg p-4",children:[e.jsx("h3",{className:"text-lg font-semibold text-gray-800 mb-4",children:"嵌套Suspense示例"}),e.jsx(t.Suspense,{fallback:e.jsx(U,{}),children:e.jsxs("div",{className:"space-y-4",children:[e.jsxs("div",{className:"p-3 bg-yellow-50 border border-yellow-200 rounded",children:[e.jsx("h4",{className:"font-semibold text-yellow-800 mb-2",children:"外层组件已加载"}),e.jsx(t.Suspense,{fallback:e.jsx(g,{message:"正在加载文章列表..."}),children:e.jsx(L,{count:a})})]}),e.jsx(t.Suspense,{fallback:e.jsx(g,{message:"正在加载用户信息..."}),children:e.jsx(N,{userId:Math.floor(Math.random()*5)+1})})]})})]})]})},E=()=>{const[s,n]=t.useState(""),[a,o]=t.useState(!1),[i,d]=t.useTransition(),l=t.useDeferredValue(s),[p,f]=t.useState(0),k=({query:r})=>{const[b,x]=t.useState([]),[y,m]=t.useState(!0);if(h.useEffect(()=>{if(!r.trim()){x([]),m(!1);return}m(!0);const u=new Promise(S=>{let c=0;const T=setInterval(()=>{c+=10,f(c),c>=100&&(clearInterval(T),S(Array.from({length:Math.floor(Math.random()*5)+1},(I,v)=>({id:v+1,title:`${r} 相关结果 ${v+1}`,description:`这是关于 "${r}" 的搜索结果描述`}))))},100)});if(y)throw u},[r]),h.useEffect(()=>{if(!r.trim()){x([]),m(!1);return}const u=setTimeout(()=>{x(Array.from({length:Math.floor(Math.random()*5)+1},(S,c)=>({id:c+1,title:`${r} 相关结果 ${c+1}`,description:`这是关于 "${r}" 的搜索结果描述`}))),m(!1),f(0)},1500);return()=>clearTimeout(u)},[r]),y&&r.trim())throw new Promise(u=>{setTimeout(()=>{u(Array.from({length:Math.floor(Math.random()*5)+1},(S,c)=>({id:c+1,title:`${r} 相关结果 ${c+1}`,description:`这是关于 "${r}" 的搜索结果描述`})))},1500)});return r.trim()?e.jsxs("div",{className:"space-y-3",children:[e.jsxs("h4",{className:"font-semibold text-gray-800",children:["搜索结果 (共",b.length,"条)"]}),b.map(u=>e.jsxs("div",{className:"p-3 bg-indigo-50 border border-indigo-200 rounded",children:[e.jsx("h5",{className:"font-semibold text-indigo-800",children:u.title}),e.jsx("p",{className:"text-indigo-600 text-sm mt-1",children:u.description})]},u.id))]}):e.jsx("div",{className:"p-4 text-center text-gray-500",children:"请输入搜索关键词"})},w=r=>{n(r),d(()=>{o(!!r.trim())})};return e.jsxs("div",{className:"space-y-4",children:[e.jsxs("div",{className:"space-y-2",children:[e.jsx("label",{className:"block text-sm font-medium text-gray-700",children:"搜索关键词 (使用useTransition和useDeferredValue)"}),e.jsx("input",{type:"text",value:s,onChange:r=>w(r.target.value),placeholder:"输入搜索关键词...",className:"w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-indigo-500"}),i&&e.jsx("div",{className:"text-sm text-indigo-600",children:"🔄 正在处理搜索请求..."})]}),a&&e.jsx(t.Suspense,{fallback:e.jsx(R,{progress:p}),children:e.jsx(k,{query:l})})]})},M=()=>{const s={title:"Suspense边界 (Suspense Boundaries)",description:"Suspense是React的一个组件，用于在等待某些条件（如数据加载、代码分割）时显示加载状态，提供更好的用户体验。",overview:e.jsxs("div",{className:"space-y-4",children:[e.jsxs("div",{children:[e.jsx("h3",{className:"text-lg font-semibold text-gray-800 mb-2",children:"概念"}),e.jsx("p",{className:"text-gray-600",children:"Suspense允许组件在渲染之前等待某些条件，并在等待期间显示fallback UI。 它主要用于代码分割（lazy loading）和数据获取，是React并发特性的重要组成部分。"})]}),e.jsxs("div",{children:[e.jsx("h3",{className:"text-lg font-semibold text-gray-800 mb-2",children:"工作原理"}),e.jsxs("ul",{className:"list-disc list-inside text-gray-600 space-y-1",children:[e.jsx("li",{children:"当子组件抛出Promise时，Suspense捕获并显示fallback"}),e.jsx("li",{children:"Promise resolve后，重新渲染实际组件"}),e.jsx("li",{children:"支持嵌套使用，内层Suspense优先处理"}),e.jsx("li",{children:"与React.lazy()配合实现代码分割"})]})]}),e.jsxs("div",{children:[e.jsx("h3",{className:"text-lg font-semibold text-gray-800 mb-2",children:"主要用途"}),e.jsxs("ul",{className:"list-disc list-inside text-gray-600 space-y-1",children:[e.jsx("li",{children:"代码分割和懒加载组件"}),e.jsx("li",{children:"数据获取时的加载状态"}),e.jsx("li",{children:"异步组件的渲染控制"}),e.jsx("li",{children:"提升用户体验的加载界面"})]})]}),e.jsxs("div",{children:[e.jsx("h3",{className:"text-lg font-semibold text-gray-800 mb-2",children:"并发特性"}),e.jsxs("ul",{className:"list-disc list-inside text-gray-600 space-y-1",children:[e.jsx("li",{children:"useTransition - 标记非紧急更新"}),e.jsx("li",{children:"useDeferredValue - 延迟更新值"}),e.jsx("li",{children:"startTransition - 包装状态更新"}),e.jsx("li",{children:"支持可中断的渲染过程"})]})]})]}),examples:[{title:"基础Suspense使用",description:"展示基本的Suspense用法和懒加载组件",component:e.jsx(C,{}),observationPoints:['点击"显示用户"按钮时，Suspense会显示fallback UI',"懒加载组件完成加载后，fallback被实际组件替换","切换用户ID会重新触发加载过程","React.lazy()与Suspense配合实现代码分割"],keyPoints:["Suspense组件通过fallback prop定义加载状态","React.lazy()创建懒加载组件，首次渲染时抛出Promise","Promise resolve后，Suspense重新渲染显示实际组件","懒加载组件支持动态导入和按需加载"],commonTraps:["在Suspense外部使用懒加载组件会导致错误","fallback UI与实际内容尺寸差异过大导致布局跳动","忘记处理懒加载组件的加载失败情况","过度使用懒加载导致网络请求碎片化"],solutions:["确保懒加载组件被Suspense包装","设计与实际内容尺寸相近的fallback UI","结合ErrorBoundary处理加载失败","合理规划代码分割粒度，避免过度细分"],importantTips:["Suspense的fallback会在子组件抛出Promise时显示","懒加载组件只在首次使用时才会开始加载","可以通过预加载技术优化用户体验","开发环境下可能看不到明显的加载效果"],codeExample:{title:"基础Suspense实现",code:`import { Suspense, lazy } from 'react'; // ← 重点：导入Suspense和lazy

// 创建懒加载组件
const LazyUserProfile = lazy(() => { // ← 重点：使用lazy创建懒加载组件
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({
        default: ({ userId }) => {
          // 组件实现
          return <div>用户资料 {userId}</div>;
        }
      });
    }, 1000); // ← 重点：模拟加载延迟
  });
});

// 使用Suspense包装懒加载组件
const App = () => {
  const [showUser, setShowUser] = useState(false);

  return (
    <div>
      <button onClick={() => setShowUser(!showUser)}>
        {showUser ? '隐藏用户' : '显示用户'}
      </button>

      {showUser && (
        <Suspense fallback={<div>正在加载用户资料...</div>}> {/* ← 重点：fallback定义加载状态 */}
          <LazyUserProfile userId={1} /> {/* ← 重点：懒加载组件 */}
        </Suspense>
      )}
    </div>
  );
};`,language:"tsx",highlights:[1,4,13,25,26],description:"基础Suspense用法，展示如何使用React.lazy和Suspense实现组件懒加载"}},{title:"嵌套Suspense边界",description:"演示多层Suspense的嵌套使用和独立加载",component:e.jsx(D,{}),observationPoints:["外层Suspense控制整体页面框架的加载","内层Suspense独立控制各个组件的加载状态","不同组件可以并行加载，互不影响","内层Suspense优先处理，外层作为兜底"],keyPoints:["嵌套Suspense提供更细粒度的加载控制","每个Suspense边界独立管理其子组件的加载状态","内层Suspense的fallback优先于外层显示","支持不同部分的并行加载和独立错误处理"],commonTraps:["过度嵌套导致加载状态闪烁","嵌套层级过深影响代码可读性","忘记为每个层级提供合适的fallback","嵌套边界的错误处理逻辑混乱"],solutions:["合理规划嵌套层级，避免过度细分","为每个Suspense边界设计清晰的职责","提供层次化的fallback UI设计","建立统一的错误处理机制"],importantTips:["内层Suspense会拦截子组件抛出的Promise","外层Suspense只处理内层未捕获的Promise","嵌套结构有助于实现渐进式加载","可以通过嵌套实现不同优先级的加载策略"],codeExample:{title:"嵌套Suspense实现",code:`const NestedSuspenseExample = () => {
  return (
    <div>
      {/* 外层Suspense - 页面框架 */}
      <Suspense fallback={<div>加载页面框架...</div>}> {/* ← 重点：外层Suspense */}
        <PageLayout>
          <div>
            {/* 内层Suspense - 侧边栏 */}
            <Suspense fallback={<div>加载侧边栏...</div>}> {/* ← 重点：内层Suspense独立控制 */}
              <LazyPostList count={3} /> {/* ← 重点：懒加载组件 */}
            </Suspense>

            {/* 内层Suspense - 用户信息 */}
            <Suspense fallback={<div>加载用户信息...</div>}> {/* ← 重点：另一个独立的内层Suspense */}
              <LazyUserProfile userId={1} /> {/* ← 重点：并行加载的组件 */}
            </Suspense>
          </div>
        </PageLayout>
      </Suspense>
    </div>
  );
};

// 懒加载组件定义
const LazyPostList = lazy(() => import('./PostList')); // ← 重点：懒加载文章列表
const LazyUserProfile = lazy(() => import('./UserProfile')); // ← 重点：懒加载用户资料
const PageLayout = lazy(() => import('./PageLayout')); // ← 重点：懒加载页面布局`,language:"tsx",highlights:[5,9,10,14,15,24,25,26],description:"嵌套Suspense边界，展示多层级的独立加载控制和并行加载"}},{title:"并发特性集成",description:"结合useTransition和useDeferredValue的高级用法",component:e.jsx(E,{}),observationPoints:["useTransition将搜索更新标记为非紧急","useDeferredValue延迟搜索查询的更新","isPending状态指示非紧急更新的进行","Suspense配合并发特性提供流畅的用户体验"],keyPoints:["useTransition标记非紧急更新，保持界面响应性","useDeferredValue延迟值更新，减少不必要的渲染","startTransition包装的更新不会阻塞用户交互","并发特性与Suspense结合优化数据获取体验"],commonTraps:["滥用useTransition导致更新延迟过多","不理解useDeferredValue的延迟机制","忘记处理isPending状态的用户反馈","并发更新与Suspense边界的交互复杂"],solutions:["只对真正非紧急的更新使用useTransition","理解useDeferredValue的工作原理和适用场景","提供清晰的pending状态指示","建立清晰的并发更新和Suspense的协作模式"],importantTips:["useTransition适用于数据获取和搜索场景","useDeferredValue可以减少高频更新的性能影响","并发特性需要React 18+版本支持","合理使用并发特性可以显著提升用户体验"],codeExample:{title:"并发特性与Suspense集成",code:`import { useTransition, useDeferredValue, Suspense } from 'react'; // ← 重点：导入并发特性hooks

const SearchApp = () => {
  const [query, setQuery] = useState('');
  const [isPending, startTransition] = useTransition(); // ← 重点：useTransition标记非紧急更新
  const deferredQuery = useDeferredValue(query); // ← 重点：延迟查询值更新

  const handleSearch = (value) => {
    setQuery(value); // ← 重点：立即更新输入值
    startTransition(() => { // ← 重点：将搜索标记为非紧急更新
      // 触发搜索相关的状态更新
    });
  };

  return (
    <div>
      <input
        value={query}
        onChange={(e) => handleSearch(e.target.value)}
        placeholder="搜索..."
      />
      {isPending && <div>搜索中...</div>} {/* ← 重点：显示pending状态 */}

      <Suspense fallback={<SearchSkeleton />}> {/* ← 重点：Suspense处理异步搜索 */}
        <SearchResults query={deferredQuery} /> {/* ← 重点：使用延迟的查询值 */}
      </Suspense>
    </div>
  );
};

// 搜索结果组件
const SearchResults = ({ query }) => {
  if (!query.trim()) return <div>请输入搜索关键词</div>;

  // 如果数据未准备好，抛出Promise
  const results = useSuspenseQuery(query); // ← 重点：抛出Promise触发Suspense

  return (
    <div>
      {results.map(result => (
        <div key={result.id}>{result.title}</div>
      ))}
    </div>
  );
};`,language:"tsx",highlights:[1,5,6,9,10,22,24,25,34],description:"并发特性与Suspense的集成使用，实现流畅的搜索体验"}}],codeExamples:[{title:"基础Suspense用法",code:`import { Suspense, lazy } from 'react'; // ← 重点：导入Suspense和lazy

// 懒加载组件
const LazyComponent = lazy(() => import('./LazyComponent')); // ← 重点：使用lazy创建懒加载组件

// 加载中组件
const LoadingSpinner = () => (
  <div className="flex justify-center items-center p-4">
    <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-blue-600"></div>
    <span className="ml-2">加载中...</span>
  </div>
);

// 使用Suspense
const App = () => {
  return (
    <div>
      <h1>我的应用</h1>
      <Suspense fallback={<LoadingSpinner />}> {/* ← 重点：fallback定义加载状态 */}
        <LazyComponent /> {/* ← 重点：懒加载组件必须在Suspense内部 */}
      </Suspense>
    </div>
  );
};`,language:"tsx",highlights:[1,4,18,19],description:"基础的Suspense使用方式，配合React.lazy实现代码分割"},{title:"嵌套Suspense边界",code:`const NestedSuspenseExample = () => {
  return (
    <div>
      {/* 外层Suspense */}
      <Suspense fallback={<div>加载页面框架...</div>}> {/* ← 重点：外层Suspense边界 */}
        <PageLayout>
          <div>
            {/* 内层Suspense - 侧边栏 */}
            <Suspense fallback={<div>加载侧边栏...</div>}> {/* ← 重点：内层Suspense独立控制 */}
              <Sidebar /> {/* ← 重点：懒加载侧边栏组件 */}
            </Suspense>

            {/* 内层Suspense - 主内容 */}
            <Suspense fallback={<div>加载主内容...</div>}> {/* ← 重点：另一个独立的内层Suspense */}
              <MainContent /> {/* ← 重点：懒加载主内容组件 */}
            </Suspense>
          </div>
        </PageLayout>
      </Suspense>
    </div>
  );
};

// 每个组件可以独立加载
const Sidebar = lazy(() => import('./Sidebar')); // ← 重点：懒加载侧边栏
const MainContent = lazy(() => import('./MainContent')); // ← 重点：懒加载主内容
const PageLayout = lazy(() => import('./PageLayout')); // ← 重点：懒加载页面布局`,language:"tsx",highlights:[7,11,12,16,17,26,27,28],description:"嵌套Suspense允许不同部分独立加载，提供更细粒度的控制"},{title:"结合并发特性",code:`import { useTransition, useDeferredValue, Suspense } from 'react'; // ← 重点：导入并发特性hooks

const SearchApp = () => {
  const [query, setQuery] = useState('');
  const [isPending, startTransition] = useTransition(); // ← 重点：useTransition标记非紧急更新
  const deferredQuery = useDeferredValue(query); // ← 重点：延迟查询值更新

  const handleSearch = (value) => {
    setQuery(value); // ← 重点：立即更新输入值
    // 将搜索标记为非紧急更新
    startTransition(() => { // ← 重点：将搜索标记为非紧急更新
      // 触发搜索
    });
  };

  return (
    <div>
      <input
        value={query}
        onChange={(e) => handleSearch(e.target.value)}
        placeholder="搜索..."
      />
      {isPending && <div>搜索中...</div>} {/* ← 重点：显示pending状态 */}

      <Suspense fallback={<SearchSkeleton />}> {/* ← 重点：Suspense处理异步搜索 */}
        <SearchResults query={deferredQuery} /> {/* ← 重点：使用延迟的查询值 */}
      </Suspense>
    </div>
  );
};

// 搜索结果组件
const SearchResults = ({ query }) => {
  // 如果数据未准备好，抛出Promise
  const results = useSuspenseQuery(query); // ← 重点：抛出Promise触发Suspense

  return (
    <div>
      {results.map(result => (
        <div key={result.id}>{result.title}</div>
      ))}
    </div>
  );
};`,language:"tsx",highlights:[1,7,8,10,13,25,27,28,35],description:"结合useTransition和useDeferredValue实现更流畅的用户体验"}],tutorial:{concepts:["Suspense是React组件，用于处理异步渲染","fallback prop定义加载时显示的UI","子组件抛出Promise时触发Suspense","支持嵌套使用，提供细粒度控制","与React.lazy()配合实现代码分割"],steps:["使用React.lazy()创建懒加载组件","用Suspense包装需要异步加载的组件","提供合适的fallback加载UI","处理嵌套Suspense的加载顺序","结合并发特性优化用户体验","实现错误边界处理加载失败","优化加载状态的视觉设计"],tips:["fallback应该与实际内容尺寸相近","避免过多的嵌套Suspense导致闪烁","合理使用useTransition标记非紧急更新","考虑使用骨架屏提升加载体验","结合错误边界处理加载失败情况","在开发环境中测试各种网络条件"]},interview:{questions:[{question:"Suspense的工作原理是什么？",answer:"Suspense通过捕获子组件抛出的Promise来工作。当子组件需要异步数据时，它抛出一个Promise，Suspense捕获这个Promise并显示fallback UI。当Promise resolve后，Suspense重新渲染子组件显示实际内容。"},{question:"Suspense与React.lazy()如何配合使用？",answer:"React.lazy()返回一个懒加载组件，该组件在首次渲染时会抛出一个Promise（代表动态import）。Suspense捕获这个Promise并显示fallback，当组件加载完成后显示实际组件。这实现了代码分割和按需加载。"},{question:"嵌套Suspense有什么优势？",answer:"嵌套Suspense提供更细粒度的加载控制：1) 不同部分可以独立加载；2) 避免整个页面被单个慢组件阻塞；3) 提供更好的用户体验；4) 内层Suspense优先处理，外层作为兜底。"},{question:"useTransition和Suspense如何协作？",answer:"useTransition将状态更新标记为非紧急，允许React中断渲染。配合Suspense使用时，可以避免因数据获取导致的界面卡顿，保持界面响应性。startTransition包装的更新不会阻塞用户交互。"},{question:"Suspense的最佳实践有哪些？",answer:"最佳实践包括：1) 提供有意义的fallback UI；2) 合理使用嵌套避免过度细分；3) 结合错误边界处理失败情况；4) 使用骨架屏提升体验；5) 考虑加载状态的视觉连续性；6) 在不同网络条件下测试。"}],keyPoints:["Suspense通过捕获Promise实现异步渲染控制","主要用于代码分割和数据获取场景","支持嵌套使用，提供细粒度的加载控制","与并发特性结合提供更好的用户体验","fallback UI应该与实际内容保持一致性","需要配合错误边界处理加载失败情况"]},bestPractices:{dos:["为Suspense提供有意义的fallback UI","使用骨架屏匹配实际内容布局","合理嵌套Suspense避免过度细分","结合useTransition优化用户体验","配合错误边界处理加载失败","在不同网络条件下测试加载效果"],donts:["不要在Suspense内部使用try-catch捕获Promise","不要过度嵌套导致加载状态闪烁","不要忽略加载失败的错误处理","不要使用空的或无意义的fallback","不要在服务端渲染中使用未支持的特性","不要忘记考虑加载状态的可访问性"],patterns:["页面级Suspense - 整个页面的加载控制","组件级Suspense - 单个组件的异步加载","数据获取Suspense - 配合数据库查询使用","路由级Suspense - 页面切换时的加载状态","嵌套Suspense - 多层级的独立加载控制"]}};return e.jsx(z,{...s})};export{M as default};
