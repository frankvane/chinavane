var b=Object.defineProperty;var y=(r,s,a)=>s in r?b(r,s,{enumerable:!0,configurable:!0,writable:!0,value:a}):r[s]=a;var d=(r,s,a)=>y(r,typeof s!="symbol"?s+"":s,a);import{j as e,r as t}from"./index-B_BA6J2H.js";import{C as S}from"./ComponentTemplate-CRmS-rAK.js";const g=r=>{const s=t.useRef(0);return s.current+=1,console.log(`${r} 渲染次数: ${s.current}`),s.current};class I{constructor(){d(this,"listeners",new Set);d(this,"data",{count:0,timestamp:Date.now(),users:[]});d(this,"subscribe",s=>(this.listeners.add(s),()=>this.listeners.delete(s)));d(this,"getSnapshot",()=>this.data);d(this,"getServerSnapshot",()=>this.data);d(this,"increment",()=>{this.data={...this.data,count:this.data.count+1,timestamp:Date.now()},this.listeners.forEach(s=>s())});d(this,"addUser",s=>{this.data={...this.data,users:[...this.data.users,s],timestamp:Date.now()},this.listeners.forEach(a=>a())});d(this,"reset",()=>{this.data={count:0,timestamp:Date.now(),users:[]},this.listeners.forEach(s=>s())})}}const p=new I,j=t.memo(()=>{const r=g("UseIdExample"),s=t.useId(),a=t.useId(),n=t.useId(),[u,c]=t.useState({name:"",email:"",description:""}),o=t.useCallback(l=>m=>{c(h=>({...h,[l]:m.target.value}))},[]);return e.jsx("div",{className:"space-y-4",children:e.jsxs("div",{className:"p-4 bg-blue-50 border border-blue-200 rounded",children:[e.jsx("h4",{className:"font-semibold text-blue-800 mb-3",children:"useId Hook 示例"}),e.jsxs("form",{className:"space-y-3",children:[e.jsxs("div",{children:[e.jsx("label",{htmlFor:s,className:"block text-sm font-medium text-gray-700",children:"姓名"}),e.jsx("input",{id:s,type:"text",value:u.name,onChange:o("name"),className:"mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md",placeholder:"请输入姓名"})]}),e.jsxs("div",{children:[e.jsx("label",{htmlFor:a,className:"block text-sm font-medium text-gray-700",children:"邮箱"}),e.jsx("input",{id:a,type:"email",value:u.email,onChange:o("email"),className:"mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md",placeholder:"请输入邮箱"})]}),e.jsxs("div",{children:[e.jsx("label",{htmlFor:n,className:"block text-sm font-medium text-gray-700",children:"描述"}),e.jsx("textarea",{id:n,value:u.description,onChange:o("description"),className:"mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md",rows:3,placeholder:"请输入描述"})]})]}),e.jsxs("div",{className:"mt-4 p-3 bg-gray-100 rounded",children:[e.jsx("p",{className:"text-sm text-gray-600",children:"生成的唯一ID："}),e.jsxs("ul",{className:"text-xs text-gray-500 mt-1",children:[e.jsxs("li",{children:["姓名ID: ",s]}),e.jsxs("li",{children:["邮箱ID: ",a]}),e.jsxs("li",{children:["描述ID: ",n]})]}),e.jsxs("p",{className:"text-xs text-gray-500 mt-2",children:["渲染次数: ",r]})]})]})})}),v=t.memo(()=>{const r=g("UseSyncExternalStoreExample"),s=t.useSyncExternalStore(p.subscribe,p.getSnapshot,p.getServerSnapshot),a=t.useCallback(()=>{const n={id:Date.now(),name:`用户${s.users.length+1}`,email:`user${s.users.length+1}@example.com`};p.addUser(n)},[s.users.length]);return e.jsx("div",{className:"space-y-4",children:e.jsxs("div",{className:"p-4 bg-green-50 border border-green-200 rounded",children:[e.jsx("h4",{className:"font-semibold text-green-800 mb-3",children:"useSyncExternalStore Hook 示例"}),e.jsxs("div",{className:"space-y-3",children:[e.jsxs("div",{className:"flex space-x-2",children:[e.jsx("button",{onClick:p.increment,className:"px-3 py-1 bg-green-600 text-white rounded hover:bg-green-700",children:"增加计数"}),e.jsx("button",{onClick:a,className:"px-3 py-1 bg-blue-600 text-white rounded hover:bg-blue-700",children:"添加用户"}),e.jsx("button",{onClick:p.reset,className:"px-3 py-1 bg-red-600 text-white rounded hover:bg-red-700",children:"重置"})]}),e.jsxs("div",{className:"p-3 bg-white border rounded",children:[e.jsx("p",{className:"font-medium",children:"外部存储状态："}),e.jsxs("p",{children:["计数: ",s.count]}),e.jsxs("p",{children:["时间戳: ",new Date(s.timestamp).toLocaleTimeString()]}),e.jsxs("p",{children:["用户数量: ",s.users.length]}),s.users.length>0&&e.jsxs("div",{className:"mt-2",children:[e.jsx("p",{className:"text-sm font-medium",children:"用户列表："}),e.jsx("ul",{className:"text-sm text-gray-600",children:s.users.map(n=>e.jsxs("li",{children:[n.name," (",n.email,")"]},n.id))})]})]}),e.jsxs("p",{className:"text-xs text-gray-500",children:["渲染次数: ",r]})]})]})})}),E=t.memo(()=>{const r=g("UseInsertionEffectExample"),[s,a]=t.useState("light"),[n,u]=t.useState("medium"),c=t.useId();return t.useInsertionEffect(()=>{const o=`dynamic-theme-${c}`;let l=document.getElementById(o);l||(l=document.createElement("style"),l.id=o,document.head.appendChild(l));const m={light:{background:"#ffffff",color:"#1f2937",border:"#d1d5db"},dark:{background:"#1f2937",color:"#f9fafb",border:"#4b5563"},blue:{background:"#dbeafe",color:"#1e40af",border:"#3b82f6"}},h={small:"14px",medium:"16px",large:"18px"},f=m[s],i=h[n];return l.textContent=`
      .dynamic-theme-${c} {
        background-color: ${f.background};
        color: ${f.color};
        border-color: ${f.border};
        font-size: ${i};
        transition: all 0.3s ease;
      }
    `,()=>{l&&l.parentNode&&l.parentNode.removeChild(l)}},[s,n,c]),e.jsx("div",{className:"space-y-4",children:e.jsxs("div",{className:"p-4 bg-purple-50 border border-purple-200 rounded",children:[e.jsx("h4",{className:"font-semibold text-purple-800 mb-3",children:"useInsertionEffect Hook 示例"}),e.jsxs("div",{className:"space-y-3",children:[e.jsxs("div",{className:"flex space-x-2",children:[e.jsxs("button",{onClick:()=>a(s==="light"?"dark":s==="dark"?"blue":"light"),className:"px-3 py-1 bg-purple-600 text-white rounded hover:bg-purple-700",children:["切换主题 (",s,")"]}),e.jsxs("button",{onClick:()=>u(n==="small"?"medium":n==="medium"?"large":"small"),className:"px-3 py-1 bg-indigo-600 text-white rounded hover:bg-indigo-700",children:["切换字体 (",n,")"]})]}),e.jsxs("div",{className:`p-4 border-2 rounded dynamic-theme-${c}`,children:[e.jsx("h5",{className:"font-semibold mb-2",children:"动态样式容器"}),e.jsx("p",{children:"这个容器的样式通过 useInsertionEffect 动态插入到 DOM 中。"}),e.jsxs("p",{children:["当前主题: ",s]}),e.jsxs("p",{children:["当前字体大小: ",n]}),e.jsx("p",{className:"mt-2 text-sm opacity-75",children:"useInsertionEffect 确保样式在 DOM 变更前插入，避免样式闪烁。"})]}),e.jsxs("p",{className:"text-xs text-gray-500",children:["渲染次数: ",r]})]})]})})}),N=t.memo(()=>{const r=g("ConcurrentFeaturesExample"),[s,a]=t.useTransition(),[n,u]=t.useState(""),c=t.useDeferredValue(n),[o,l]=t.useState([]),m=t.useMemo(()=>Array.from({length:1e3},(i,x)=>({id:x+1,title:`项目 ${x+1}`,content:`这是项目 ${x+1} 的详细描述内容，包含了相关的信息和数据。`})),[]),h=t.useCallback(i=>i.trim()?m.filter(x=>x.title.toLowerCase().includes(i.toLowerCase())||x.content.toLowerCase().includes(i.toLowerCase())):[],[m]);t.useEffect(()=>{a(()=>{const i=h(c);l(i)})},[c,h]);const f=t.useCallback(i=>{u(i.target.value)},[]);return e.jsx("div",{className:"space-y-4",children:e.jsxs("div",{className:"p-4 bg-yellow-50 border border-yellow-200 rounded",children:[e.jsx("h4",{className:"font-semibold text-yellow-800 mb-3",children:"并发特性综合应用"}),e.jsxs("div",{className:"space-y-3",children:[e.jsxs("div",{className:"relative",children:[e.jsx("input",{type:"text",value:n,onChange:f,placeholder:"搜索项目...",className:"w-full px-3 py-2 border border-gray-300 rounded-md"}),s&&e.jsx("div",{className:"absolute right-2 top-2",children:e.jsx("div",{className:"animate-spin h-5 w-5 border-2 border-yellow-600 border-t-transparent rounded-full"})})]}),e.jsxs("div",{className:"flex justify-between text-sm text-gray-600",children:[e.jsxs("span",{children:['搜索词: "',n,'"']}),e.jsxs("span",{children:['延迟搜索词: "',c,'"']}),e.jsxs("span",{children:["结果数量: ",o.length]})]}),e.jsx("div",{className:"max-h-60 overflow-y-auto border border-gray-200 rounded",children:o.length>0?e.jsxs("div",{className:"divide-y divide-gray-200",children:[o.slice(0,10).map(i=>e.jsxs("div",{className:"p-3",children:[e.jsx("h5",{className:"font-medium text-gray-900",children:i.title}),e.jsx("p",{className:"text-sm text-gray-600 mt-1",children:i.content})]},i.id)),o.length>10&&e.jsxs("div",{className:"p-3 text-center text-sm text-gray-500",children:["还有 ",o.length-10," 个结果..."]})]}):c?e.jsx("div",{className:"p-4 text-center text-gray-500",children:"没有找到匹配的结果"}):e.jsx("div",{className:"p-4 text-center text-gray-500",children:"请输入搜索关键词"})}),e.jsxs("div",{className:"text-xs text-gray-500 space-y-1",children:[e.jsxs("p",{children:["渲染次数: ",r]}),e.jsxs("p",{children:["状态: ",s?"搜索中...":"空闲"]}),e.jsx("p",{className:"text-yellow-700",children:"💡 useTransition 和 useDeferredValue 协同工作，确保搜索不会阻塞用户输入"})]})]})]})})}),w=()=>{const r={title:"实验性特性 (Experimental Features)",description:"React 18+ 的实验性特性和 Hook，包括 ID 生成、外部存储同步、样式插入和并发特性等高级功能。",overview:e.jsxs("div",{className:"space-y-4",children:[e.jsxs("div",{children:[e.jsx("h3",{className:"text-lg font-semibold text-gray-800 mb-2",children:"核心概念"}),e.jsx("p",{className:"text-gray-600",children:"React 的实验性特性是为了解决特定问题而设计的新 API，这些特性在 React 18 中已经稳定，为开发者提供了更强大的工具来处理复杂的用户界面需求。"})]}),e.jsxs("div",{children:[e.jsx("h3",{className:"text-lg font-semibold text-gray-800 mb-2",children:"主要特性"}),e.jsxs("ul",{className:"list-disc list-inside text-gray-600 space-y-1",children:[e.jsx("li",{children:"useId - 生成稳定的唯一标识符，解决 SSR 水合问题"}),e.jsx("li",{children:"useSyncExternalStore - 安全地订阅外部数据源，兼容并发渲染"}),e.jsx("li",{children:"useInsertionEffect - 在 DOM 变更前同步插入样式，避免闪烁"}),e.jsx("li",{children:"useTransition - 标记非紧急更新，保持界面响应性"}),e.jsx("li",{children:"useDeferredValue - 延迟更新值，优化性能表现"})]})]}),e.jsxs("div",{children:[e.jsx("h3",{className:"text-lg font-semibold text-gray-800 mb-2",children:"适用场景"}),e.jsxs("ul",{className:"list-disc list-inside text-gray-600 space-y-1",children:[e.jsx("li",{children:"表单元素和无障碍功能需要唯一 ID"}),e.jsx("li",{children:"与外部状态管理库（Redux、Zustand）集成"}),e.jsx("li",{children:"CSS-in-JS 库和动态样式管理"}),e.jsx("li",{children:"大数据量的搜索、过滤和排序操作"}),e.jsx("li",{children:"复杂用户界面的性能优化"})]})]}),e.jsxs("div",{children:[e.jsx("h3",{className:"text-lg font-semibold text-gray-800 mb-2",children:"重要提示"}),e.jsxs("ul",{className:"list-disc list-inside text-gray-600 space-y-1",children:[e.jsx("li",{children:"这些特性在 React 18+ 中已经稳定可用"}),e.jsx("li",{children:"需要理解并发渲染的工作原理"}),e.jsx("li",{children:"注意浏览器兼容性和性能影响"}),e.jsx("li",{children:"遵循 React 官方的最佳实践指南"})]})]})]}),examples:[{title:"示例1：useId Hook 基础用法",description:"生成唯一 ID，确保服务端和客户端渲染的一致性，解决 SSR 水合问题",component:e.jsx(j,{}),observationPoints:["每次调用 useId 都会生成不同的唯一标识符","ID 在服务端和客户端渲染时保持一致","适用于表单元素的 htmlFor 和 id 属性绑定","解决了组件复用时的 ID 冲突问题"],keyPoints:["useId 生成的 ID 在整个应用中是唯一的","每个组件实例的 useId 调用都会产生不同的 ID","ID 格式通常为 :r0:、:r1: 等形式","不应该用作 React key 属性"],commonTraps:["将 useId 生成的 ID 用作列表项的 key","在条件渲染中使用 useId 导致 ID 不稳定","手动拼接 useId 结果可能导致冲突"],solutions:["仅在需要唯一标识符的场景使用 useId","确保 useId 调用在组件的顶层","使用数据的唯一属性作为 key，而不是 useId"],importantTips:["useId 主要用于无障碍属性和表单元素关联","生成的 ID 在服务端渲染和客户端水合时保持一致","不要依赖 ID 的具体格式，它可能在不同版本中变化"],codeExample:{title:"useId 基础实现",code:`// 基础 useId 用法
const FormComponent: React.FC = () => {
  const nameId = useId();  // ← 重点：生成唯一ID
  const emailId = useId(); // ← 重点：每次调用生成不同ID
  const descriptionId = useId();
  
  return (
    <form>
      <div>
        <label htmlFor={nameId}>姓名</label>  {/* ← 重点：关联label和input */}
        <input id={nameId} type="text" />
      </div>
      
      <div>
        <label htmlFor={emailId}>邮箱</label>
        <input id={emailId} type="email" />
      </div>
      
      <div>
        <label htmlFor={descriptionId}>描述</label>
        <textarea id={descriptionId} />  {/* ← 重点：确保无障碍访问 */}
      </div>
    </form>
  );
};

// 组件复用时的ID唯一性
const App = () => {
  return (
    <div>
      <FormComponent />  {/* ← 重点：每个实例都有独立的ID */}
      <FormComponent />  {/* ← 重点：不会与上面的ID冲突 */}
    </div>
  );
};`,language:"typescript",highlights:[3,4,9,16,23,24],description:"useId 为每个组件实例生成唯一标识符，确保表单元素的正确关联。"}},{title:"示例2：useSyncExternalStore Hook",description:"安全地订阅外部数据源，与 React 并发特性完美兼容",component:e.jsx(v,{}),observationPoints:["外部存储状态变化时组件会自动重新渲染","支持服务端渲染的快照功能","与 React 并发特性兼容，避免撕裂现象","订阅和取消订阅自动管理"],keyPoints:["subscribe 函数返回取消订阅的清理函数","getSnapshot 返回当前的存储状态","getServerSnapshot 用于服务端渲染","状态变化时会触发所有订阅者重新渲染"],commonTraps:["subscribe 函数每次渲染都创建新的实例","getSnapshot 返回不稳定的引用导致无限渲染","忘记实现 getServerSnapshot 导致 SSR 问题"],solutions:["使用 useCallback 稳定 subscribe 函数","确保 getSnapshot 返回稳定的引用","为 SSR 提供合适的服务端快照"],importantTips:["主要用于与外部状态管理库集成","解决了并发渲染中的状态撕裂问题","适合订阅浏览器 API 或第三方库的状态"],codeExample:{title:"外部存储订阅实现",code:`// 外部存储类定义
class CounterStore {
  private count = 0;
  private listeners = new Set<() => void>();  // ← 重点：监听器集合
  
  subscribe = (listener: () => void) => {  // ← 重点：订阅方法
    this.listeners.add(listener);
    return () => this.listeners.delete(listener);  // ← 重点：返回清理函数
  };
  
  getSnapshot = () => this.count;  // ← 重点：获取当前状态
  
  increment = () => {
    this.count++;
    this.listeners.forEach(listener => listener());  // ← 重点：通知所有监听器
  };
}

const store = new CounterStore();

// 组件中使用
const Counter: React.FC = () => {
  const count = useSyncExternalStore(  // ← 重点：订阅外部存储
    store.subscribe,     // ← 重点：订阅函数
    store.getSnapshot,   // ← 重点：获取快照函数
    () => 0              // ← 重点：服务端快照（可选）
  );
  
  return (
    <div>
      <p>计数: {count}</p>
      <button onClick={store.increment}>增加</button>
    </div>
  );
};`,language:"typescript",highlights:[4,6,8,11,15,23,24,25,26],description:"useSyncExternalStore 安全地连接外部数据源与 React 组件。"}},{title:"示例3：useInsertionEffect Hook",description:"在 DOM 变更前同步插入样式，避免样式闪烁，适用于 CSS-in-JS 库",component:e.jsx(E,{}),observationPoints:["样式在 DOM 变更前同步插入，避免闪烁","执行时机早于 useLayoutEffect 和 useEffect","主要用于 CSS-in-JS 库的样式注入","会阻塞渲染，应谨慎使用"],keyPoints:["同步执行，会阻塞渲染过程","主要用于插入关键的 CSS 样式","执行顺序：useInsertionEffect → useLayoutEffect → useEffect","清理函数在组件卸载时执行"],commonTraps:["在 useInsertionEffect 中执行非样式相关的副作用","过度使用导致渲染性能问题","忘记清理插入的样式元素"],solutions:["仅用于关键样式的插入","保持副作用逻辑简单高效","正确实现清理函数"],importantTips:["主要为 CSS-in-JS 库设计","普通应用开发很少直接使用","会阻塞渲染，影响性能"],codeExample:{title:"动态样式插入",code:`const DynamicStyles: React.FC = () => {
  const [theme, setTheme] = useState('light');
  const componentId = useId();
  
  useInsertionEffect(() => {  // ← 重点：在DOM变更前执行
    const styleId = \`dynamic-theme-\${componentId}\`;
    let style = document.getElementById(styleId);  // ← 重点：查找已存在的样式
    
    if (!style) {
      style = document.createElement('style');  // ← 重点：创建样式元素
      style.id = styleId;
      document.head.appendChild(style);  // ← 重点：插入到head中
    }
    
    const themes = {
      light: 'background: white; color: black;',
      dark: 'background: black; color: white;'
    };
    
    style.textContent = \`.theme-\${componentId} { \${themes[theme]} }\`;  // ← 重点：设置样式内容
    
    return () => {  // ← 重点：清理函数
      if (style && style.parentNode) {
        style.parentNode.removeChild(style);  // ← 重点：移除样式元素
      }
    };
  }, [theme, componentId]);
  
  return (
    <div className={\`theme-\${componentId}\`}>  {/* ← 重点：应用动态样式 */}
      <button onClick={() => setTheme(theme === 'light' ? 'dark' : 'light')}>
        切换主题
      </button>
    </div>
  );
};`,language:"typescript",highlights:[5,7,10,12,20,22,24,30],description:"useInsertionEffect 确保样式在 DOM 变更前插入，避免样式闪烁。"}},{title:"示例4：并发特性综合应用",description:"结合 useTransition 和 useDeferredValue 优化大数据量的搜索体验",component:e.jsx(N,{}),observationPoints:["用户输入不会被搜索操作阻塞","搜索状态通过 isPending 反馈给用户","延迟值避免了频繁的搜索操作","大数据量处理时界面保持响应"],keyPoints:["useTransition 将更新标记为非紧急","useDeferredValue 延迟更新值的变化","isPending 状态指示后台更新进行中","并发特性提高用户体验"],commonTraps:["在 startTransition 中执行同步的紧急更新","过度使用导致界面更新延迟","忽略 isPending 状态的用户反馈"],solutions:["仅对非紧急更新使用 startTransition","合理平衡响应性和性能","提供适当的加载状态反馈"],importantTips:["适用于大数据量的搜索、过滤场景","需要 React 18+ 的并发特性支持","与 Suspense 结合使用效果更佳"],codeExample:{title:"并发搜索优化",code:`const SearchComponent: React.FC = () => {
  const [isPending, startTransition] = useTransition();  // ← 重点：并发状态管理
  const [searchTerm, setSearchTerm] = useState('');
  const deferredSearchTerm = useDeferredValue(searchTerm);  // ← 重点：延迟更新值
  const [results, setResults] = useState([]);
  
  // 昂贵的搜索操作
  const performExpensiveSearch = useCallback((term: string) => {
    // 模拟复杂搜索逻辑
    return mockData.filter(item => 
      item.title.toLowerCase().includes(term.toLowerCase())
    );
  }, [mockData]);
  
  // 处理搜索
  useEffect(() => {
    startTransition(() => {  // ← 重点：标记为非紧急更新
      const filteredResults = performExpensiveSearch(deferredSearchTerm);
      setResults(filteredResults);  // ← 重点：更新搜索结果
    });
  }, [deferredSearchTerm, performExpensiveSearch]);
  
  const handleSearchChange = useCallback((e) => {
    setSearchTerm(e.target.value);  // ← 重点：立即更新输入值
  }, []);
  
  return (
    <div>
      <input
        value={searchTerm}  {/* ← 重点：实时响应用户输入 */}
        onChange={handleSearchChange}
        placeholder="搜索..."
      />
      
      {isPending && <div>搜索中...</div>}  {/* ← 重点：显示加载状态 */}
      
      <div>
        {results.map(result => (
          <div key={result.id}>{result.title}</div>
        ))}
      </div>
    </div>
  );
};`,language:"typescript",highlights:[2,4,17,19,24,30,35],description:"并发特性确保用户输入响应性，同时优化大数据量搜索性能。"}}],tutorial:{concepts:["实验性特性是 React 为解决特定问题而设计的新 API","useId 解决了 SSR 水合和组件复用中的 ID 冲突问题","useSyncExternalStore 提供了与外部数据源的安全集成","useInsertionEffect 专为 CSS-in-JS 库的样式注入而设计","并发特性（useTransition、useDeferredValue）提高应用响应性","这些特性在 React 18+ 中已经稳定可用"],steps:["了解每个 Hook 的设计目的和适用场景","掌握基础用法和 API 参数含义","理解与传统方案相比的优势","学习在实际项目中的集成方式","处理边界情况和错误场景","优化性能和用户体验","关注 React 版本更新和最佳实践"],tips:["useId 主要用于无障碍属性，不要用作 React key","useSyncExternalStore 的订阅函数应该保持稳定引用","useInsertionEffect 会阻塞渲染，仅用于关键样式","并发特性需要合理平衡响应性和性能","结合多个 Hook 使用可以获得更好的效果","注意浏览器兼容性和 React 版本要求","遵循官方文档的最佳实践指南"]},interview:{questions:[{question:"useId Hook 解决了什么问题？它的使用场景是什么？",answer:"useId 主要解决：1) 服务端渲染和客户端水合时 ID 不一致的问题；2) 组件复用时 ID 冲突问题；3) 无障碍功能需要的唯一标识符。使用场景包括：表单元素的 label 和 input 关联、ARIA 属性、描述性元素的引用等。注意不要用作 React key 属性。"},{question:"useSyncExternalStore 与传统的外部状态订阅有什么区别？",answer:"useSyncExternalStore 的优势：1) 与 React 并发特性兼容，避免状态撕裂；2) 自动处理订阅和取消订阅；3) 支持服务端渲染快照；4) 提供一致的状态更新机制。传统方案可能在并发渲染中出现状态不一致，而 useSyncExternalStore 确保了状态的原子性更新。"},{question:"useInsertionEffect 与 useEffect、useLayoutEffect 有什么区别？",answer:"执行时机不同：useInsertionEffect（DOM 变更前同步执行）→ useLayoutEffect（DOM 变更后同步执行）→ useEffect（DOM 变更后异步执行）。useInsertionEffect 主要用于 CSS-in-JS 库插入样式，避免样式闪烁；useLayoutEffect 用于 DOM 测量和同步更新；useEffect 用于一般副作用。"},{question:"useTransition 和 useDeferredValue 如何协同工作优化性能？",answer:"协同机制：1) useTransition 将状态更新标记为非紧急，不会阻塞用户交互；2) useDeferredValue 延迟值的更新，减少不必要的渲染；3) 两者结合可以实现输入响应性和搜索性能的平衡；4) isPending 状态提供用户反馈；5) 适用于大数据量搜索、过滤等场景。"},{question:"在什么情况下应该使用这些实验性特性？有什么注意事项？",answer:"使用场景：1) useId 用于需要唯一标识符的表单和无障碍功能；2) useSyncExternalStore 用于外部状态管理库集成；3) useInsertionEffect 用于 CSS-in-JS 库；4) 并发特性用于大数据量操作优化。注意事项：确保 React 18+ 版本支持、理解并发渲染原理、注意浏览器兼容性、遵循官方最佳实践。"}],keyPoints:["实验性特性在 React 18+ 中已经稳定可用","useId 解决 SSR 水合和 ID 唯一性问题","useSyncExternalStore 兼容并发渲染，避免状态撕裂","useInsertionEffect 专为样式注入设计，会阻塞渲染","并发特性提高应用响应性和性能表现","需要理解并发渲染的工作原理和最佳实践"]},bestPractices:{dos:["在组件顶层调用 useId，确保 ID 稳定性","使用 useCallback 稳定 useSyncExternalStore 的订阅函数","仅在关键样式注入时使用 useInsertionEffect","合理使用 useTransition 标记非紧急更新","结合 useDeferredValue 优化搜索和过滤体验","为 isPending 状态提供适当的用户反馈","遵循 React 官方的并发特性最佳实践"],donts:["不要将 useId 生成的值用作 React key 属性","不要在 useSyncExternalStore 中使用不稳定的订阅函数","不要在 useInsertionEffect 中执行非样式相关的副作用","不要过度使用并发特性导致界面更新延迟","不要在 startTransition 中执行紧急的同步更新","不要忽略 isPending 状态的用户体验反馈","不要在不支持的 React 版本中使用这些特性"],patterns:["表单 ID 管理 - 使用 useId 确保标签和输入元素的正确关联","外部状态集成 - 使用 useSyncExternalStore 连接状态管理库","动态样式注入 - 使用 useInsertionEffect 避免样式闪烁","搜索优化 - 结合 useTransition 和 useDeferredValue 提升体验","加载状态反馈 - 利用 isPending 提供用户操作反馈","渐进增强 - 在现有应用中逐步引入并发特性"]}};return e.jsx(S,{...r})};export{w as default};
