import{j as e,r}from"./index-MmCcWZhd.js";import{C as f}from"./ComponentTemplate-DoUPe1QN.js";const h=s=>{const a=r.useRef(0);return a.current+=1,r.useEffect(()=>{console.log(`${s} 渲染第 ${a.current} 次`)}),a.current},p=(s,a="")=>Array.from({length:s},(t,c)=>({id:c,name:`商品 ${c+1}`,description:`这是第 ${c+1} 个商品的详细描述`,category:["电子产品","图书","服装","家居","运动"][c%5],price:Math.floor(Math.random()*1e3)+10,inStock:Math.random()>.3})).filter(t=>a===""||t.name.toLowerCase().includes(a.toLowerCase())||t.category.toLowerCase().includes(a.toLowerCase())),N=r.memo(({count:s})=>{const a=h("慢速组件"),t=performance.now();for(;performance.now()-t<3;);return e.jsx("div",{className:"p-3 bg-yellow-50 border border-yellow-200 rounded",children:e.jsxs("span",{className:"text-sm text-yellow-800",children:["慢速组件 (计数: ",s,", 渲染: ",a,")"]})})}),w=()=>{const[s,a]=r.useTransition(),[t,c]=r.useState(0),[l,o]=r.useState([]),[i,x]=r.useState(""),u=h("BasicTransitionExample"),m=()=>{c(n=>n+1),a(()=>{o(p(5e3,i))})},g=n=>{x(n),a(()=>{o(p(5e3,n))})};return e.jsxs("div",{className:"space-y-4",children:[e.jsxs("div",{className:"flex items-center space-x-4",children:[e.jsxs("button",{onClick:m,className:"px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700",children:["更新列表 (点击次数: ",t,")"]}),e.jsx("input",{type:"text",value:i,onChange:n=>g(n.target.value),placeholder:"搜索商品...",className:"px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"}),s&&e.jsxs("div",{className:"flex items-center space-x-2 text-blue-600",children:[e.jsx("div",{className:"animate-spin rounded-full h-4 w-4 border-b-2 border-blue-600"}),e.jsx("span",{className:"text-sm",children:"更新中..."})]})]}),e.jsx("div",{className:"p-3 bg-blue-50 border border-blue-200 rounded",children:e.jsxs("p",{className:"text-sm text-blue-800",children:["组件渲染次数: ",u," | 列表项数量: ",l.length]})}),e.jsx("div",{className:"grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 max-h-96 overflow-y-auto",children:l.slice(0,50).map(n=>e.jsxs("div",{className:"p-3 bg-white border border-gray-200 rounded-lg shadow-sm",children:[e.jsx("h4",{className:"font-semibold text-gray-800",children:n.name}),e.jsx("p",{className:"text-sm text-gray-600 mb-2",children:n.description}),e.jsxs("div",{className:"flex justify-between items-center",children:[e.jsx("span",{className:"text-xs bg-gray-100 px-2 py-1 rounded",children:n.category}),e.jsxs("span",{className:"font-medium text-green-600",children:["$",n.price]})]}),e.jsx("div",{className:"mt-2",children:e.jsx("span",{className:`text-xs px-2 py-1 rounded ${n.inStock?"bg-green-100 text-green-800":"bg-red-100 text-red-800"}`,children:n.inStock?"有库存":"缺货"})})]},n.id))}),e.jsxs("div",{className:"p-4 bg-green-50 border border-green-200 rounded-lg",children:[e.jsx("h4",{className:"font-semibold text-green-800 mb-2",children:"useTransition 特点"}),e.jsxs("ul",{className:"text-sm text-green-700 space-y-1",children:[e.jsx("li",{children:"• 紧急更新（计数器）立即响应，不会被阻塞"}),e.jsx("li",{children:"• 非紧急更新（列表渲染）使用transition，避免阻塞UI"}),e.jsx("li",{children:"• isPending状态提供用户反馈"}),e.jsx("li",{children:"• 保持用户交互的响应性"})]})]})]})},C=()=>{const[s,a]=r.useState(""),t=r.useDeferredValue(s),c=h("DeferredValueExample"),l=r.useMemo(()=>t?p(3e3).filter(x=>x.name.toLowerCase().includes(t.toLowerCase())||x.category.toLowerCase().includes(t.toLowerCase())).slice(0,100):[],[t]),o=s!==t;return e.jsxs("div",{className:"space-y-4",children:[e.jsxs("div",{className:"space-y-2",children:[e.jsxs("label",{className:"block text-sm font-medium text-gray-700",children:["搜索商品 (组件渲染次数: ",c,")"]}),e.jsx("input",{type:"text",value:s,onChange:i=>a(i.target.value),placeholder:"输入搜索关键词...",className:"w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"}),e.jsxs("div",{className:"flex items-center space-x-4 text-sm",children:[e.jsxs("span",{children:["当前输入: ",e.jsx("code",{className:"bg-gray-100 px-1 rounded",children:s})]}),e.jsxs("span",{children:["延迟值:"," ",e.jsx("code",{className:"bg-gray-100 px-1 rounded",children:t})]}),o&&e.jsxs("span",{className:"text-orange-600 flex items-center space-x-1",children:[e.jsx("div",{className:"animate-spin rounded-full h-3 w-3 border-b-2 border-orange-600"}),e.jsx("span",{children:"更新中..."})]})]})]}),e.jsx("div",{className:`transition-opacity duration-200 ${o?"opacity-50":"opacity-100"}`,children:l.length>0?e.jsxs("div",{className:"space-y-2",children:[e.jsxs("h3",{className:"font-semibold text-gray-800",children:["搜索结果 (",l.length," 项)"]}),e.jsx("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-3 max-h-64 overflow-y-auto",children:l.map(i=>e.jsx("div",{className:"p-3 bg-white border border-gray-200 rounded",children:e.jsxs("div",{className:"flex justify-between items-start",children:[e.jsxs("div",{children:[e.jsx("h4",{className:"font-medium text-gray-800",children:i.name}),e.jsx("p",{className:"text-sm text-gray-600",children:i.category})]}),e.jsxs("span",{className:"text-green-600 font-medium",children:["$",i.price]})]})},i.id))})]}):t?e.jsxs("div",{className:"text-center py-8 text-gray-500",children:[e.jsx("div",{className:"text-4xl mb-2",children:"🔍"}),e.jsx("p",{children:"未找到匹配的商品"})]}):e.jsxs("div",{className:"text-center py-8 text-gray-500",children:[e.jsx("div",{className:"text-4xl mb-2",children:"💡"}),e.jsx("p",{children:"开始输入以搜索商品"})]})}),e.jsxs("div",{className:"p-4 bg-green-50 border border-green-200 rounded-lg",children:[e.jsx("h4",{className:"font-semibold text-green-800 mb-2",children:"useDeferredValue 特点"}),e.jsxs("ul",{className:"text-sm text-green-700 space-y-1",children:[e.jsx("li",{children:"• 延迟非紧急值的更新，保持输入响应性"}),e.jsx("li",{children:"• 自动处理值的同步，无需手动管理"}),e.jsx("li",{children:"• 适用于搜索、过滤等场景"}),e.jsx("li",{children:"• 可以与视觉反馈结合使用"})]})]})]})},T=()=>{const[s,a]=r.useTransition(),[t,c]=r.useState(0),[l,o]=r.useState([]),[i,x]=r.useState(""),u=r.useDeferredValue(i),[m,g]=r.useState(!1),n=h("ConcurrentFeaturesExample"),b=()=>{c(d=>d+1)},j=()=>{a(()=>{o(p(8e3))})},y=r.useMemo(()=>u?l.filter(d=>d.name.toLowerCase().includes(u.toLowerCase())||d.category.toLowerCase().includes(u.toLowerCase())).slice(0,20):l.slice(0,20),[l,u]),v=i!==u;return e.jsxs("div",{className:"space-y-6",children:[e.jsxs("div",{className:"p-4 bg-gray-50 border border-gray-200 rounded-lg",children:[e.jsxs("h3",{className:"font-semibold text-gray-800 mb-3",children:["并发特性控制面板 (渲染次数: ",n,")"]}),e.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4",children:[e.jsxs("div",{className:"space-y-2",children:[e.jsx("label",{className:"block text-sm font-medium text-gray-700",children:"紧急更新"}),e.jsxs("button",{onClick:b,className:"w-full px-3 py-2 bg-red-600 text-white rounded hover:bg-red-700",children:["计数: ",t]}),e.jsx("p",{className:"text-xs text-gray-600",children:"立即响应，不会被阻塞"})]}),e.jsxs("div",{className:"space-y-2",children:[e.jsx("label",{className:"block text-sm font-medium text-gray-700",children:"非紧急更新"}),e.jsx("button",{onClick:j,disabled:s,className:"w-full px-3 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 disabled:bg-gray-400",children:s?"更新中...":`生成数据 (${l.length})`}),e.jsx("p",{className:"text-xs text-gray-600",children:"使用transition，不阻塞UI"})]}),e.jsxs("div",{className:"space-y-2",children:[e.jsx("label",{className:"block text-sm font-medium text-gray-700",children:"延迟搜索"}),e.jsx("input",{type:"text",value:i,onChange:d=>x(d.target.value),placeholder:"搜索数据...",className:"w-full px-2 py-1 text-sm border border-gray-300 rounded focus:outline-none focus:ring-1 focus:ring-blue-500"}),e.jsx("p",{className:"text-xs text-gray-600",children:v?"搜索中...":"搜索完成"})]}),e.jsxs("div",{className:"space-y-2",children:[e.jsx("label",{className:"block text-sm font-medium text-gray-700",children:"慢速组件"}),e.jsx("button",{onClick:()=>g(!m),className:`w-full px-3 py-2 text-white rounded ${m?"bg-yellow-600 hover:bg-yellow-700":"bg-gray-600 hover:bg-gray-700"}`,children:m?"隐藏":"显示"}),e.jsx("p",{className:"text-xs text-gray-600",children:"测试渲染阻塞效果"})]})]})]}),m&&e.jsx(N,{count:t}),e.jsx("div",{className:`transition-opacity duration-200 ${s||v?"opacity-60":"opacity-100"}`,children:y.length>0?e.jsxs("div",{className:"space-y-3",children:[e.jsxs("h3",{className:"font-semibold text-gray-800",children:["数据列表 (",y.length," 项)"]}),e.jsx("div",{className:"grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 max-h-64 overflow-y-auto",children:y.map(d=>e.jsxs("div",{className:"p-3 bg-white border border-gray-200 rounded shadow-sm",children:[e.jsx("h4",{className:"font-medium text-gray-800",children:d.name}),e.jsx("p",{className:"text-sm text-gray-600",children:d.category}),e.jsxs("p",{className:"text-green-600 font-medium",children:["$",d.price]})]},d.id))})]}):l.length===0?e.jsxs("div",{className:"text-center py-8 text-gray-500",children:[e.jsx("div",{className:"text-4xl mb-2",children:"📦"}),e.jsx("p",{children:'点击"生成数据"开始'})]}):e.jsxs("div",{className:"text-center py-8 text-gray-500",children:[e.jsx("div",{className:"text-4xl mb-2",children:"🔍"}),e.jsx("p",{children:"未找到匹配的商品"})]})}),e.jsxs("div",{className:"p-4 bg-purple-50 border border-purple-200 rounded-lg",children:[e.jsx("h4",{className:"font-semibold text-purple-800 mb-2",children:"并发特性组合优势"}),e.jsxs("ul",{className:"text-sm text-purple-700 space-y-1",children:[e.jsx("li",{children:"• useTransition处理大量数据更新，避免阻塞UI"}),e.jsx("li",{children:"• useDeferredValue优化搜索体验，保持输入流畅"}),e.jsx("li",{children:"• 紧急更新（如按钮点击）始终优先响应"}),e.jsx("li",{children:"• 视觉反馈帮助用户理解当前状态"}),e.jsx("li",{children:"• 组合使用可以处理复杂的用户交互场景"})]})]})]})},L=()=>{const s={title:"并发组件 (Concurrent Features)",description:"React 18引入的并发特性，包括useTransition和useDeferredValue，用于优化用户体验和应用性能。",overview:e.jsxs("div",{className:"space-y-4",children:[e.jsxs("div",{children:[e.jsx("h3",{className:"text-lg font-semibold text-gray-800 mb-2",children:"概念"}),e.jsx("p",{className:"text-gray-600",children:"并发特性是React 18的核心功能，允许React中断、暂停和恢复渲染工作，以保持应用的响应性。 主要包括useTransition和useDeferredValue两个Hook，用于处理非紧急更新和优化用户交互体验。"})]}),e.jsxs("div",{children:[e.jsx("h3",{className:"text-lg font-semibold text-gray-800 mb-2",children:"核心特性"}),e.jsxs("ul",{className:"list-disc list-inside text-gray-600 space-y-1",children:[e.jsx("li",{children:"时间切片：将渲染工作分解为小块，避免阻塞主线程"}),e.jsx("li",{children:"优先级调度：区分紧急和非紧急更新"}),e.jsx("li",{children:"可中断渲染：高优先级任务可以中断低优先级渲染"}),e.jsx("li",{children:"自动批处理：自动合并多个状态更新"}),e.jsx("li",{children:"Suspense增强：更好的异步数据处理"})]})]}),e.jsxs("div",{children:[e.jsx("h3",{className:"text-lg font-semibold text-gray-800 mb-2",children:"使用场景"}),e.jsxs("ul",{className:"list-disc list-inside text-gray-600 space-y-1",children:[e.jsx("li",{children:"大量数据渲染和复杂列表"}),e.jsx("li",{children:"实时搜索和过滤功能"}),e.jsx("li",{children:"复杂表单和用户输入处理"}),e.jsx("li",{children:"数据可视化和图表渲染"}),e.jsx("li",{children:"需要保持响应性的重计算场景"})]})]}),e.jsxs("div",{children:[e.jsx("h3",{className:"text-lg font-semibold text-gray-800 mb-2",children:"最佳实践"}),e.jsxs("ul",{className:"list-disc list-inside text-gray-600 space-y-1",children:[e.jsx("li",{children:"识别紧急和非紧急更新"}),e.jsx("li",{children:"合理使用useTransition包装耗时操作"}),e.jsx("li",{children:"使用useDeferredValue优化搜索体验"}),e.jsx("li",{children:"提供适当的加载状态和视觉反馈"}),e.jsx("li",{children:"避免过度使用并发特性"})]})]})]}),examples:[{title:"useTransition 基础用法",description:"展示如何使用useTransition处理非紧急更新，避免阻塞用户交互",component:e.jsx(w,{}),observationPoints:["紧急更新（计数器）立即响应，不受列表渲染影响","非紧急更新（列表渲染）使用transition，避免阻塞UI","isPending状态提供用户反馈","搜索输入保持流畅响应"],keyPoints:["useTransition返回isPending状态和startTransition函数","startTransition将状态更新标记为非紧急","紧急更新始终优先于非紧急更新","适用于大量数据渲染场景"],commonTraps:["对所有更新都使用transition","忘记提供isPending状态的用户反馈","在transition中执行同步阻塞操作"],solutions:["只对耗时的非紧急更新使用transition","使用isPending状态提供加载指示","确保transition中的操作是异步的"],importantTips:["紧急更新如用户输入应该立即响应","使用isPending状态提供视觉反馈","transition适用于可以延迟的更新操作"],codeExample:{title:"useTransition基础实现",code:`const BasicTransitionExample: React.FC = () => {
  const [isPending, startTransition] = useTransition();  // ← 重点：获取transition状态和函数
  const [count, setCount] = useState(0);
  const [list, setList] = useState<any[]>([]);
  const [filter, setFilter] = useState("");

  const handleUpdateList = () => {
    // 紧急更新：立即更新计数器
    setCount((prev) => prev + 1);  // ← 重点：紧急更新不使用transition

    // 非紧急更新：使用transition更新列表
    startTransition(() => {  // ← 重点：包装非紧急更新
      setList(generateLargeList(5000, filter));
    });
  };

  const handleFilterChange = (newFilter: string) => {
    setFilter(newFilter);  // ← 重点：输入响应是紧急更新

    // 使用transition进行过滤，避免阻塞输入
    startTransition(() => {  // ← 重点：搜索是非紧急更新
      setList(generateLargeList(5000, newFilter));
    });
  };

  return (
    <div className="space-y-4">
      <div className="flex items-center space-x-4">
        <button onClick={handleUpdateList}>
          更新列表 (点击次数: {count})
        </button>

        <input
          type="text"
          value={filter}
          onChange={(e) => handleFilterChange(e.target.value)}
          placeholder="搜索商品..."
        />

        {isPending && (  // ← 重点：使用isPending提供用户反馈
          <div className="flex items-center space-x-2 text-blue-600">
            <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-blue-600"></div>
            <span className="text-sm">更新中...</span>
          </div>
        )}
      </div>

      {/* 渲染列表 */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {list.slice(0, 50).map((item) => (
          <div key={item.id} className="p-3 bg-white border rounded">
            <h4>{item.name}</h4>
            <p>{item.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};`,language:"typescript",highlights:[2,9,12,17,20,36],description:"useTransition的基本用法，区分紧急和非紧急更新，提供用户反馈。"}},{title:"useDeferredValue 搜索优化",description:"使用useDeferredValue优化搜索体验，保持输入响应性",component:e.jsx(C,{}),observationPoints:["输入框保持流畅响应，不会因搜索计算而卡顿","延迟值与当前输入值可能不同步","搜索结果基于延迟值计算，避免频繁重计算","视觉反馈显示搜索状态"],keyPoints:["useDeferredValue延迟值的更新","保持输入响应性，延迟昂贵的计算","适用于搜索、过滤等场景","可以与视觉反馈结合使用"],commonTraps:["对所有值都使用useDeferredValue","忘记处理值不同步的情况","在延迟值计算中执行副作用"],solutions:["只对昂贵计算的值使用useDeferredValue","提供视觉反馈表示延迟状态","在useMemo中使用延迟值进行计算"],importantTips:["延迟值主要用于优化昂贵的计算或渲染","输入值和延迟值可能不同步，需要处理这种情况","结合useMemo使用效果更佳"],codeExample:{title:"useDeferredValue搜索优化",code:`const DeferredValueExample: React.FC = () => {
  const [query, setQuery] = useState("");
  const deferredQuery = useDeferredValue(query);  // ← 重点：创建延迟值

  // 模拟搜索结果
  const searchResults = useMemo(() => {  // ← 重点：使用延迟值进行计算
    if (!deferredQuery) return [];

    // 模拟复杂搜索逻辑
    const results = generateLargeList(3000).filter(
      (item) =>
        item.name.toLowerCase().includes(deferredQuery.toLowerCase()) ||  // ← 重点：基于延迟值搜索
        item.category.toLowerCase().includes(deferredQuery.toLowerCase())
    );

    return results.slice(0, 100);
  }, [deferredQuery]);  // ← 重点：依赖延迟值而非原始值

  const isStale = query !== deferredQuery;  // ← 重点：检测值是否同步

  return (
    <div className="space-y-4">
      <div className="space-y-2">
        <input
          type="text"
          value={query}  // ← 重点：输入框绑定原始值
          onChange={(e) => setQuery(e.target.value)}
          placeholder="输入搜索关键词..."
        />

        <div className="flex items-center space-x-4 text-sm">
          <span>当前输入: <code>{query}</code></span>
          <span>延迟值: <code>{deferredQuery}</code></span>
          {isStale && (  // ← 重点：显示延迟状态
            <span className="text-orange-600 flex items-center space-x-1">
              <div className="animate-spin rounded-full h-3 w-3 border-b-2 border-orange-600"></div>
              <span>更新中...</span>
            </span>
          )}
        </div>
      </div>

      <div className={\`transition-opacity duration-200 \${
        isStale ? "opacity-50" : "opacity-100"  // ← 重点：视觉反馈
      }\`}>
        {searchResults.length > 0 ? (
          <div className="space-y-2">
            <h3>搜索结果 ({searchResults.length} 项)</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
              {searchResults.map((item) => (
                <div key={item.id} className="p-3 bg-white border rounded">
                  <h4>{item.name}</h4>
                  <p>{item.category}</p>
                </div>
              ))}
            </div>
          </div>
        ) : deferredQuery ? (
          <div className="text-center py-8 text-gray-500">
            <p>未找到匹配的商品</p>
          </div>
        ) : (
          <div className="text-center py-8 text-gray-500">
            <p>开始输入以搜索商品</p>
          </div>
        )}
      </div>
    </div>
  );
};`,language:"typescript",highlights:[3,6,12,17,19,26,34,42],description:"useDeferredValue优化搜索体验，保持输入流畅性，延迟昂贵的搜索计算。"}},{title:"并发特性组合应用",description:"综合使用多种并发特性处理复杂的用户交互场景",component:e.jsx(T,{}),observationPoints:["紧急更新（计数器）始终立即响应","非紧急更新（数据生成）使用transition避免阻塞","搜索输入使用延迟值优化","慢速组件展示渲染阻塞效果","多种状态提供完整的用户反馈"],keyPoints:["可以同时使用useTransition和useDeferredValue","不同类型的更新有不同的优先级","组合使用可以处理复杂交互场景","需要合理的状态管理和用户反馈"],commonTraps:["过度使用并发特性导致复杂性增加","忽略不同更新类型的优先级","缺少适当的用户反馈机制"],solutions:["根据实际需求选择合适的并发特性","明确区分紧急和非紧急更新","提供清晰的状态指示和用户反馈"],importantTips:["并发特性可以组合使用，但要避免过度复杂化","始终保持紧急更新的响应性","提供适当的视觉反馈帮助用户理解当前状态"],codeExample:{title:"并发特性组合使用",code:`const ConcurrentFeaturesExample: React.FC = () => {
  const [isPending, startTransition] = useTransition();  // ← 重点：transition状态管理
  const [urgentCount, setUrgentCount] = useState(0);
  const [heavyData, setHeavyData] = useState<any[]>([]);
  const [searchTerm, setSearchTerm] = useState("");
  const deferredSearchTerm = useDeferredValue(searchTerm);  // ← 重点：延迟搜索值

  // 紧急更新：立即响应
  const handleUrgentUpdate = () => {
    setUrgentCount((prev) => prev + 1);  // ← 重点：紧急更新不使用transition
  };

  // 非紧急更新：使用transition
  const handleHeavyUpdate = () => {
    startTransition(() => {  // ← 重点：包装耗时操作
      setHeavyData(generateLargeList(8000));
    });
  };

  // 搜索结果（使用deferred value）
  const filteredData = useMemo(() => {
    if (!deferredSearchTerm) return heavyData.slice(0, 20);

    return heavyData
      .filter(
        (item) =>
          item.name.toLowerCase().includes(deferredSearchTerm.toLowerCase()) ||  // ← 重点：基于延迟值过滤
          item.category.toLowerCase().includes(deferredSearchTerm.toLowerCase())
      )
      .slice(0, 20);
  }, [heavyData, deferredSearchTerm]);  // ← 重点：依赖延迟值

  const isSearchStale = searchTerm !== deferredSearchTerm;  // ← 重点：检测搜索状态

  return (
    <div className="space-y-6">
      {/* 控制面板 */}
      <div className="p-4 bg-gray-50 border border-gray-200 rounded-lg">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {/* 紧急更新 */}
          <div className="space-y-2">
            <button
              onClick={handleUrgentUpdate}  // ← 重点：紧急更新处理
              className="w-full px-3 py-2 bg-red-600 text-white rounded"
            >
              计数: {urgentCount}
            </button>
            <p className="text-xs text-gray-600">立即响应，不会被阻塞</p>
          </div>

          {/* 非紧急更新 */}
          <div className="space-y-2">
            <button
              onClick={handleHeavyUpdate}  // ← 重点：非紧急更新处理
              disabled={isPending}  // ← 重点：基于pending状态禁用
              className="w-full px-3 py-2 bg-blue-600 text-white rounded disabled:bg-gray-400"
            >
              {isPending ? "更新中..." : \`生成数据 (\${heavyData.length})\`}
            </button>
            <p className="text-xs text-gray-600">使用transition，不阻塞UI</p>
          </div>

          {/* 搜索输入 */}
          <div className="space-y-2">
            <input
              type="text"
              value={searchTerm}  // ← 重点：绑定原始搜索值
              onChange={(e) => setSearchTerm(e.target.value)}
              placeholder="搜索数据..."
            />
            <p className="text-xs text-gray-600">
              {isSearchStale ? "搜索中..." : "搜索完成"}  // ← 重点：搜索状态反馈
            </p>
          </div>
        </div>
      </div>

      {/* 数据展示区域 */}
      <div className={\`transition-opacity duration-200 \${
        isPending || isSearchStale ? "opacity-60" : "opacity-100"  // ← 重点：组合状态的视觉反馈
      }\`}>
        {filteredData.length > 0 ? (
          <div className="space-y-3">
            <h3>数据列表 ({filteredData.length} 项)</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
              {filteredData.map((item) => (
                <div key={item.id} className="p-3 bg-white border rounded">
                  <h4>{item.name}</h4>
                  <p>{item.category}</p>
                </div>
              ))}
            </div>
          </div>
        ) : (
          <div className="text-center py-8 text-gray-500">
            <p>点击"生成数据"开始</p>
          </div>
        )}
      </div>
    </div>
  );
};`,language:"typescript",highlights:[2,6,10,15,27,31,33,43,51,62,66,71],description:"组合使用useTransition和useDeferredValue处理复杂交互场景，提供完整的用户体验。"}}],tutorial:{concepts:["useTransition返回isPending状态和startTransition函数","startTransition将状态更新标记为非紧急","useDeferredValue延迟值的更新，保持输入响应性","并发特性不会阻塞紧急更新","可以组合使用多种并发特性"],steps:["识别应用中的紧急和非紧急更新","使用useTransition包装耗时的状态更新","使用useDeferredValue优化搜索和过滤","添加适当的加载状态和视觉反馈","测试和优化并发特性的使用效果","监控应用性能和用户体验改善"],tips:["不是所有更新都需要使用并发特性","紧急更新（如用户输入）应该立即响应","使用isPending状态提供用户反馈","合理使用视觉提示表示延迟状态","避免过度使用transition，可能影响性能","在开发工具中监控并发特性的效果"]},interview:{questions:[{question:"React 18的并发特性解决了什么问题？",answer:"主要解决的问题：1) 长时间运行的渲染阻塞用户交互；2) 无法区分更新的优先级；3) 搜索等场景的输入延迟；4) 大量数据渲染导致的卡顿。并发特性通过时间切片、优先级调度和可中断渲染来解决这些问题，保持应用的响应性。"},{question:"useTransition和useDeferredValue有什么区别？",answer:"主要区别：1) useTransition用于包装状态更新，useDeferredValue用于延迟值的使用；2) useTransition提供isPending状态，useDeferredValue不提供；3) useTransition适用于触发更新的场景，useDeferredValue适用于消费值的场景；4) useTransition可以包装多个状态更新，useDeferredValue只处理单个值。"},{question:"什么时候应该使用并发特性？",answer:"适合使用的场景：1) 大量数据渲染和复杂列表；2) 实时搜索和过滤功能；3) 复杂计算和数据处理；4) 需要保持响应性的重渲染。不适合的场景：1) 简单的状态更新；2) 已经很快的操作；3) 紧急的用户交互反馈；4) 可能导致用户困惑的延迟。"},{question:"如何测试和调试并发特性？",answer:"测试和调试方法：1) 使用React DevTools的Profiler查看渲染性能；2) 使用浏览器的Performance工具监控主线程阻塞；3) 添加console.log跟踪更新顺序；4) 使用React的Concurrent Features DevTools；5) 进行用户体验测试，确保改善效果；6) 监控应用的整体性能指标。"},{question:"并发特性对现有代码有什么影响？",answer:"对现有代码的影响：1) 大部分现有代码无需修改；2) 需要识别和重构耗时的状态更新；3) 可能需要调整错误边界和Suspense的使用；4) 某些依赖更新顺序的代码可能需要修改；5) 需要重新考虑组件的渲染优化策略；6) 测试用例可能需要更新以适应异步渲染。"}],keyPoints:["useTransition用于标记非紧急更新","useDeferredValue用于延迟值的更新","并发特性不会阻塞紧急更新","需要提供适当的用户反馈","不是所有更新都需要使用并发特性","要测试和监控性能改善效果"]},bestPractices:{dos:["识别应用中的紧急和非紧急更新","使用useTransition包装耗时操作","使用useDeferredValue优化搜索体验","提供适当的加载状态和视觉反馈","测试并发特性的实际效果","监控应用性能和用户体验"],donts:["不要对所有更新都使用并发特性","不要忽略紧急更新的响应性","不要忘记提供用户反馈","不要过度依赖并发特性解决性能问题","不要在不需要的地方使用transition","不要忽略现有代码的兼容性"],patterns:["搜索优化 - 使用useDeferredValue优化搜索体验","列表渲染 - 使用useTransition处理大量数据","表单处理 - 区分输入响应和验证更新","数据可视化 - 优化图表和复杂渲染","实时更新 - 平衡实时性和性能","用户反馈 - 提供适当的加载和状态提示"]}};return e.jsx(f,{...s})};export{L as default};
