import{r as i,j as e,R as u}from"./index-CbVlrJMN.js";import{C as R}from"./ComponentTemplate-BnvJNrWP.js";const C=a=>{const t=u.useRef(0);return t.current+=1,u.useEffect(()=>{console.log(`${a} rendered ${t.current} times`)}),t.current},y=(a,t="")=>{const r=[];for(let n=0;n<a;n++){const s={id:n,name:`商品 ${n}`,category:n%3===0?"电子":n%3===1?"服装":"食品",price:Math.floor(Math.random()*1e3)+10,description:`这是商品 ${n} 的详细描述信息`};(!t||s.name.includes(t)||s.category.includes(t))&&r.push(s)}return r};i.memo(({count:a})=>{const t=C("SlowComponent"),r=i.useMemo(()=>{let n=0;for(let s=0;s<a*1e5;s++)n+=Math.random();return n.toFixed(2)},[a]);return e.jsxs("div",{className:"p-4 bg-red-50 border border-red-200 rounded",children:[e.jsxs("p",{className:"text-sm text-red-600",children:["慢速组件 (渲染次数: ",t,")"]}),e.jsxs("p",{className:"text-xs text-gray-600",children:["计算结果: ",r]})]})});const V=()=>{const[a,t]=i.useState(""),[r,n]=i.useState(()=>y(5e3)),[s,c]=i.useTransition(),o=C("BasicTransitionExample"),N=i.useCallback(d=>{t(d),c(()=>{const g=y(5e3,d);n(g)})},[]);return e.jsxs("div",{className:"space-y-6",children:[e.jsxs("div",{className:"bg-blue-50 p-4 rounded-lg",children:[e.jsx("h4",{className:"font-semibold text-blue-800 mb-2",children:"状态信息"}),e.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-3 gap-4 text-sm",children:[e.jsxs("div",{children:[e.jsx("span",{className:"font-medium",children:"组件渲染次数:"}),e.jsx("span",{className:"ml-2 text-blue-600",children:o})]}),e.jsxs("div",{children:[e.jsx("span",{className:"font-medium",children:"搜索关键词:"}),e.jsx("span",{className:"ml-2 text-blue-600",children:a||"无"})]}),e.jsxs("div",{children:[e.jsx("span",{className:"font-medium",children:"加载状态:"}),e.jsx("span",{className:`ml-2 ${s?"text-orange-600":"text-green-600"}`,children:s?"处理中...":"完成"})]})]})]}),e.jsxs("div",{children:[e.jsx("label",{className:"block text-sm font-medium text-gray-700 mb-2",children:"商品搜索（紧急更新）"}),e.jsx("input",{type:"text",value:a,onChange:d=>N(d.target.value),placeholder:"输入商品名称或分类...",className:"w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"}),e.jsx("p",{className:"text-xs text-gray-500 mt-1",children:"输入保持流畅响应，列表更新使用 transition"})]}),e.jsxs("div",{className:`transition-opacity duration-200 ${s?"opacity-50":"opacity-100"}`,children:[e.jsxs("h4",{className:"font-semibold text-gray-800 mb-3",children:["商品列表 (",r.length," 项)",s&&e.jsx("span",{className:"text-orange-600 ml-2",children:"更新中..."})]}),e.jsx("div",{className:"grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 max-h-96 overflow-y-auto",children:r.slice(0,50).map(d=>e.jsxs("div",{className:"bg-white p-3 border border-gray-200 rounded-lg shadow-sm",children:[e.jsx("h5",{className:"font-medium text-gray-800",children:d.name}),e.jsx("p",{className:"text-sm text-gray-600",children:d.category}),e.jsxs("p",{className:"text-sm font-semibold text-green-600",children:["¥",d.price]}),e.jsx("p",{className:"text-xs text-gray-500 mt-1 truncate",children:d.description})]},d.id))}),r.length>50&&e.jsxs("p",{className:"text-sm text-gray-500 mt-2",children:["显示前50项，共",r.length,"项"]})]}),e.jsxs("div",{className:"bg-gray-50 p-4 rounded-lg",children:[e.jsx("h4",{className:"font-semibold text-gray-800 mb-2",children:"使用说明"}),e.jsxs("ul",{className:"text-sm text-gray-600 space-y-1",children:[e.jsx("li",{children:"• 搜索输入使用紧急更新，保持流畅响应"}),e.jsx("li",{children:"• 列表过滤使用 startTransition 包装，避免阻塞输入"}),e.jsx("li",{children:"• isPending 状态提供视觉反馈"}),e.jsx("li",{children:"• 大量数据渲染不会影响用户交互"})]})]})]})},$=`import React, {
  memo,
  startTransition,
  useCallback,
  useMemo,
  useState,
  useTransition,
} from "react";

// 自定义Hook：跟踪组件渲染次数
const useRenderCount = (componentName: string) => {
  const renderCount = React.useRef(0);
  renderCount.current += 1;
  
  React.useEffect(() => {
    console.log(\`\${componentName} rendered \${renderCount.current} times\`);
  });
  
  return renderCount.current;
};

// 生成大量数据的函数
const generateLargeList = (count: number, filter: string = "") => {
  const items = [];
  for (let i = 0; i < count; i++) {
    const item = {
      id: i,
      name: \`商品 \${i}\`,
      category: i % 3 === 0 ? "电子" : i % 3 === 1 ? "服装" : "食品",
      price: Math.floor(Math.random() * 1000) + 10,
      description: \`这是商品 \${i} 的详细描述信息\`,
    };
    if (!filter || item.name.includes(filter) || item.category.includes(filter)) {
      items.push(item);
    }
  }
  return items;
};

// 慢速组件：模拟计算密集型操作
const SlowComponent: React.FC<{ count: number }> = memo(({ count }) => {
  const renderCount = useRenderCount("SlowComponent");
  
  // 模拟耗时计算
  const expensiveValue = useMemo(() => {
    let result = 0;
    for (let i = 0; i < count * 100000; i++) {
      result += Math.random();
    }
    return result.toFixed(2);
  }, [count]);

  return (
    <div className="p-4 bg-red-50 border border-red-200 rounded">
      <p className="text-sm text-red-600">慢速组件 (渲染次数: {renderCount})</p>
      <p className="text-xs text-gray-600">计算结果: {expensiveValue}</p>
    </div>
  );
});

/**
 * useTransition 基础示例
 * 
 * 功能说明：
 * - 演示 useTransition 的基本用法
 * - 区分紧急更新（搜索输入）和非紧急更新（列表渲染）
 * - 使用 isPending 状态提供用户反馈
 * - 展示并发特性对用户体验的改善
 * 
 * 核心特性：
 * - startTransition 包装非紧急更新
 * - isPending 状态指示加载状态
 * - 保持输入响应性
 * - 优化大量数据渲染性能
 */
const BasicTransitionExample: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [filteredItems, setFilteredItems] = useState(() => generateLargeList(5000));
  const [isPending, startTransition] = useTransition();
  const renderCount = useRenderCount("BasicTransitionExample");

  // 处理搜索输入（紧急更新）
  const handleSearch = useCallback((value: string) => {
    // 立即更新搜索输入（紧急更新）
    setSearchTerm(value);
    
    // 将列表过滤标记为非紧急更新
    startTransition(() => {
      const filtered = generateLargeList(5000, value);
      setFilteredItems(filtered);
    });
  }, []);

  return (
    <div className="space-y-6">
      {/* 状态信息 */}
      <div className="bg-blue-50 p-4 rounded-lg">
        <h4 className="font-semibold text-blue-800 mb-2">状态信息</h4>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm">
          <div>
            <span className="font-medium">组件渲染次数:</span>
            <span className="ml-2 text-blue-600">{renderCount}</span>
          </div>
          <div>
            <span className="font-medium">搜索关键词:</span>
            <span className="ml-2 text-blue-600">{searchTerm || "无"}</span>
          </div>
          <div>
            <span className="font-medium">加载状态:</span>
            <span className={\`ml-2 \${isPending ? 'text-orange-600' : 'text-green-600'}\`}>
              {isPending ? "处理中..." : "完成"}
            </span>
          </div>
        </div>
      </div>

      {/* 搜索输入 */}
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-2">
          商品搜索（紧急更新）
        </label>
        <input
          type="text"
          value={searchTerm}
          onChange={(e) => handleSearch(e.target.value)}
          placeholder="输入商品名称或分类..."
          className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        <p className="text-xs text-gray-500 mt-1">
          输入保持流畅响应，列表更新使用 transition
        </p>
      </div>

      {/* 商品列表 */}
      <div className={\`transition-opacity duration-200 \${isPending ? 'opacity-50' : 'opacity-100'}\`}>
        <h4 className="font-semibold text-gray-800 mb-3">
          商品列表 ({filteredItems.length} 项)
          {isPending && <span className="text-orange-600 ml-2">更新中...</span>}
        </h4>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 max-h-96 overflow-y-auto">
          {filteredItems.slice(0, 50).map((item) => (
            <div key={item.id} className="bg-white p-3 border border-gray-200 rounded-lg shadow-sm">
              <h5 className="font-medium text-gray-800">{item.name}</h5>
              <p className="text-sm text-gray-600">{item.category}</p>
              <p className="text-sm font-semibold text-green-600">¥{item.price}</p>
              <p className="text-xs text-gray-500 mt-1 truncate">{item.description}</p>
            </div>
          ))}
        </div>
        {filteredItems.length > 50 && (
          <p className="text-sm text-gray-500 mt-2">
            显示前50项，共{filteredItems.length}项
          </p>
        )}
      </div>

      {/* 使用说明 */}
      <div className="bg-gray-50 p-4 rounded-lg">
        <h4 className="font-semibold text-gray-800 mb-2">使用说明</h4>
        <ul className="text-sm text-gray-600 space-y-1">
          <li>• 搜索输入使用紧急更新，保持流畅响应</li>
          <li>• 列表过滤使用 startTransition 包装，避免阻塞输入</li>
          <li>• isPending 状态提供视觉反馈</li>
          <li>• 大量数据渲染不会影响用户交互</li>
        </ul>
      </div>
    </div>
  );
};

export default BasicTransitionExample;`,w=a=>{const t=u.useRef(0);return t.current+=1,u.useEffect(()=>{console.log(`${a} rendered ${t.current} times`)}),t.current},j=(a,t="")=>{const r=[];for(let n=0;n<a;n++){const s={id:n,name:`商品 ${n}`,category:n%3===0?"电子":n%3===1?"服装":"食品",price:Math.floor(Math.random()*1e3)+10,description:`这是商品 ${n} 的详细描述信息`};(!t||s.name.includes(t)||s.category.includes(t))&&r.push(s)}return r},M=i.memo(({count:a})=>{const t=w("SlowComponent"),r=i.useMemo(()=>{let n=0;for(let s=0;s<a*1e5;s++)n+=Math.random();return n.toFixed(2)},[a]);return e.jsxs("div",{className:"p-4 bg-red-50 border border-red-200 rounded",children:[e.jsxs("p",{className:"text-sm text-red-600",children:["慢速组件 (渲染次数: ",t,")"]}),e.jsxs("p",{className:"text-xs text-gray-600",children:["计算结果: ",r]})]})}),L=()=>{const[a,t]=i.useState(0),[r,n]=i.useState(()=>j(5e3)),[s,c]=i.useTransition(),[o,N]=i.useState(""),d=i.useDeferredValue(o),[g,S]=i.useState(!1),[b,P]=i.useState(10),T=w("ConcurrentFeaturesExample"),D=i.useCallback(()=>{t(l=>l+1)},[]),I=i.useCallback(()=>{c(()=>{const l=j(5e3);n(l)})},[]),x=i.useMemo(()=>(console.log("执行数据过滤，关键词:",d),r.filter(l=>!d||l.name.includes(d)||l.category.includes(d))),[r,d]),[p,v]=i.useState(1),f=20,h=Math.ceil(x.length/f),k=x.slice((p-1)*f,p*f),m=o!==d;return e.jsxs("div",{className:"space-y-6",children:[e.jsxs("div",{className:"bg-gradient-to-r from-blue-50 to-purple-50 p-6 rounded-lg",children:[e.jsx("h4",{className:"font-semibold text-gray-800 mb-4",children:"并发特性状态监控"}),e.jsxs("div",{className:"grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4 text-sm",children:[e.jsxs("div",{className:"bg-white p-3 rounded shadow-sm",children:[e.jsx("span",{className:"block font-medium text-gray-700",children:"组件渲染"}),e.jsx("span",{className:"text-lg font-bold text-blue-600",children:T})]}),e.jsxs("div",{className:"bg-white p-3 rounded shadow-sm",children:[e.jsx("span",{className:"block font-medium text-gray-700",children:"紧急计数"}),e.jsx("span",{className:"text-lg font-bold text-green-600",children:a})]}),e.jsxs("div",{className:"bg-white p-3 rounded shadow-sm",children:[e.jsx("span",{className:"block font-medium text-gray-700",children:"数据状态"}),e.jsx("span",{className:`text-lg font-bold ${s?"text-orange-600":"text-green-600"}`,children:s?"更新中":"就绪"})]}),e.jsxs("div",{className:"bg-white p-3 rounded shadow-sm",children:[e.jsx("span",{className:"block font-medium text-gray-700",children:"搜索状态"}),e.jsx("span",{className:`text-lg font-bold ${m?"text-orange-600":"text-green-600"}`,children:m?"搜索中":"同步"})]}),e.jsxs("div",{className:"bg-white p-3 rounded shadow-sm",children:[e.jsx("span",{className:"block font-medium text-gray-700",children:"数据总量"}),e.jsx("span",{className:"text-lg font-bold text-purple-600",children:r.length})]}),e.jsxs("div",{className:"bg-white p-3 rounded shadow-sm",children:[e.jsx("span",{className:"block font-medium text-gray-700",children:"过滤结果"}),e.jsx("span",{className:"text-lg font-bold text-indigo-600",children:x.length})]})]})]}),e.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4",children:[e.jsxs("div",{className:"bg-green-50 p-4 rounded-lg",children:[e.jsx("h5",{className:"font-semibold text-green-800 mb-3",children:"紧急更新"}),e.jsx("button",{onClick:D,className:"w-full px-4 py-2 bg-green-600 text-white rounded hover:bg-green-700 transition-colors",children:"计数器 +1"}),e.jsx("p",{className:"text-xs text-green-600 mt-2",children:"立即响应，不受其他操作影响"})]}),e.jsxs("div",{className:"bg-blue-50 p-4 rounded-lg",children:[e.jsx("h5",{className:"font-semibold text-blue-800 mb-3",children:"非紧急更新"}),e.jsx("button",{onClick:I,disabled:s,className:"w-full px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 disabled:opacity-50 disabled:cursor-not-allowed transition-colors",children:s?"生成中...":"生成数据"}),e.jsx("p",{className:"text-xs text-blue-600 mt-2",children:"使用 transition，不阻塞紧急更新"})]}),e.jsxs("div",{className:"bg-purple-50 p-4 rounded-lg",children:[e.jsx("h5",{className:"font-semibold text-purple-800 mb-3",children:"延迟搜索"}),e.jsx("input",{type:"text",value:o,onChange:l=>N(l.target.value),placeholder:"搜索商品...",className:"w-full px-3 py-2 text-sm border border-purple-300 rounded focus:outline-none focus:ring-2 focus:ring-purple-500"}),e.jsx("p",{className:"text-xs text-purple-600 mt-2",children:"输入流畅，搜索延迟优化"})]}),e.jsxs("div",{className:"bg-red-50 p-4 rounded-lg",children:[e.jsx("h5",{className:"font-semibold text-red-800 mb-3",children:"慢速组件"}),e.jsxs("div",{className:"space-y-2",children:[e.jsxs("label",{className:"flex items-center text-sm",children:[e.jsx("input",{type:"checkbox",checked:g,onChange:l=>S(l.target.checked),className:"mr-2"}),"显示慢速组件"]}),e.jsx("input",{type:"range",min:"1",max:"50",value:b,onChange:l=>P(Number(l.target.value)),className:"w-full"}),e.jsxs("p",{className:"text-xs text-red-600",children:["计算强度: ",b]})]})]})]}),g&&e.jsxs("div",{className:"bg-red-50 p-4 rounded-lg",children:[e.jsx("h5",{className:"font-semibold text-red-800 mb-3",children:"慢速组件演示"}),e.jsx(M,{count:b}),e.jsx("p",{className:"text-xs text-red-600 mt-2",children:"注意：即使慢速组件在渲染，紧急更新仍然保持响应"})]}),e.jsxs("div",{className:`transition-all duration-300 ${s||m?"opacity-60":"opacity-100"}`,children:[e.jsxs("div",{className:"flex items-center justify-between mb-4",children:[e.jsxs("h4",{className:"font-semibold text-gray-800",children:["商品数据 (",x.length," 项)",(s||m)&&e.jsxs("span",{className:"text-orange-600 ml-2",children:[s&&"数据更新中",m&&"搜索中",s&&m&&" | "]})]}),h>1&&e.jsxs("div",{className:"flex items-center space-x-2",children:[e.jsx("button",{onClick:()=>v(l=>Math.max(1,l-1)),disabled:p===1,className:"px-3 py-1 text-sm bg-gray-200 rounded disabled:opacity-50",children:"上一页"}),e.jsxs("span",{className:"text-sm text-gray-600",children:[p," / ",h]}),e.jsx("button",{onClick:()=>v(l=>Math.min(h,l+1)),disabled:p===h,className:"px-3 py-1 text-sm bg-gray-200 rounded disabled:opacity-50",children:"下一页"})]})]}),e.jsx("div",{className:"grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4",children:k.map(l=>e.jsxs("div",{className:"bg-white p-3 border border-gray-200 rounded-lg shadow-sm hover:shadow-md transition-shadow",children:[e.jsx("h5",{className:"font-medium text-gray-800",children:l.name}),e.jsx("p",{className:"text-sm text-gray-600",children:l.category}),e.jsxs("p",{className:"text-sm font-semibold text-green-600",children:["¥",l.price]}),e.jsx("p",{className:"text-xs text-gray-500 mt-1 truncate",children:l.description})]},l.id))}),x.length===0&&d&&e.jsxs("div",{className:"text-center py-12 text-gray-500",children:[e.jsx("p",{className:"text-lg",children:"未找到匹配的商品"}),e.jsx("p",{className:"text-sm",children:"尝试其他关键词或清空搜索"})]})]}),e.jsxs("div",{className:"bg-gray-50 p-6 rounded-lg",children:[e.jsx("h4",{className:"font-semibold text-gray-800 mb-4",children:"并发特性组合优势"}),e.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-3 gap-6 text-sm text-gray-600",children:[e.jsxs("div",{children:[e.jsx("h5",{className:"font-medium text-gray-700 mb-2",children:"useTransition 优势："}),e.jsxs("ul",{className:"space-y-1",children:[e.jsx("li",{children:"• 紧急更新始终优先响应"}),e.jsx("li",{children:"• 非紧急更新不阻塞用户交互"}),e.jsx("li",{children:"• 提供 isPending 状态反馈"}),e.jsx("li",{children:"• 适用于大量数据处理"})]})]}),e.jsxs("div",{children:[e.jsx("h5",{className:"font-medium text-gray-700 mb-2",children:"useDeferredValue 优势："}),e.jsxs("ul",{className:"space-y-1",children:[e.jsx("li",{children:"• 保持输入框流畅响应"}),e.jsx("li",{children:"• 延迟昂贵的搜索计算"}),e.jsx("li",{children:"• 避免频繁的重新计算"}),e.jsx("li",{children:"• 提供搜索状态反馈"})]})]}),e.jsxs("div",{children:[e.jsx("h5",{className:"font-medium text-gray-700 mb-2",children:"组合使用效果："}),e.jsxs("ul",{className:"space-y-1",children:[e.jsx("li",{children:"• 处理复杂交互场景"}),e.jsx("li",{children:"• 多层次的性能优化"}),e.jsx("li",{children:"• 完整的用户体验"}),e.jsx("li",{children:"• 灵活的优先级控制"})]})]})]})]}),e.jsxs("div",{className:"bg-yellow-50 p-4 rounded-lg",children:[e.jsx("h4",{className:"font-semibold text-yellow-800 mb-2",children:"交互测试说明"}),e.jsxs("ul",{className:"text-sm text-yellow-700 space-y-1",children:[e.jsx("li",{children:'• 点击"计数器 +1"观察紧急更新的立即响应'}),e.jsx("li",{children:'• 点击"生成数据"时继续点击计数器，观察不被阻塞'}),e.jsx("li",{children:"• 快速输入搜索关键词，观察输入的流畅性"}),e.jsx("li",{children:"• 开启慢速组件，测试在计算密集时的响应性"}),e.jsx("li",{children:"• 观察各种状态指示器的实时反馈"})]})]})]})},E=`import React, {\r
  memo,\r
  startTransition,\r
  useCallback,\r
  useDeferredValue,\r
  useMemo,\r
  useState,\r
  useTransition,\r
} from "react";\r
\r
// 自定义Hook：跟踪组件渲染次数\r
const useRenderCount = (componentName: string) => {\r
  const renderCount = React.useRef(0);\r
  renderCount.current += 1;\r
  \r
  React.useEffect(() => {\r
    console.log(\`\${componentName} rendered \${renderCount.current} times\`);\r
  });\r
  \r
  return renderCount.current;\r
};\r
\r
// 生成大量数据的函数\r
const generateLargeList = (count: number, filter: string = "") => {\r
  const items = [];\r
  for (let i = 0; i < count; i++) {\r
    const item = {\r
      id: i,\r
      name: \`商品 \${i}\`,\r
      category: i % 3 === 0 ? "电子" : i % 3 === 1 ? "服装" : "食品",\r
      price: Math.floor(Math.random() * 1000) + 10,\r
      description: \`这是商品 \${i} 的详细描述信息\`,\r
    };\r
    if (!filter || item.name.includes(filter) || item.category.includes(filter)) {\r
      items.push(item);\r
    }\r
  }\r
  return items;\r
};\r
\r
// 慢速组件：模拟计算密集型操作\r
const SlowComponent: React.FC<{ count: number }> = memo(({ count }) => {\r
  const renderCount = useRenderCount("SlowComponent");\r
  \r
  // 模拟耗时计算\r
  const expensiveValue = useMemo(() => {\r
    let result = 0;\r
    for (let i = 0; i < count * 100000; i++) {\r
      result += Math.random();\r
    }\r
    return result.toFixed(2);\r
  }, [count]);\r
\r
  return (\r
    <div className="p-4 bg-red-50 border border-red-200 rounded">\r
      <p className="text-sm text-red-600">慢速组件 (渲染次数: {renderCount})</p>\r
      <p className="text-xs text-gray-600">计算结果: {expensiveValue}</p>\r
    </div>\r
  );\r
});\r
\r
/**\r
 * 并发特性组合应用示例\r
 * \r
 * 功能说明：\r
 * - 综合使用 useTransition 和 useDeferredValue\r
 * - 处理复杂的用户交互场景\r
 * - 展示不同更新类型的优先级处理\r
 * - 提供完整的用户反馈机制\r
 * \r
 * 核心特性：\r
 * - 紧急更新：计数器操作\r
 * - 非紧急更新：数据生成和处理\r
 * - 延迟搜索：搜索输入优化\r
 * - 慢速组件：性能影响演示\r
 * - 多种状态反馈：加载、搜索、同步状态\r
 */\r
const ConcurrentFeaturesExample: React.FC = () => {\r
  // 紧急状态：计数器（立即响应）\r
  const [urgentCounter, setUrgentCounter] = useState(0);\r
  \r
  // 非紧急状态：大量数据\r
  const [dataList, setDataList] = useState(() => generateLargeList(5000));\r
  const [isPending, startTransition] = useTransition();\r
  \r
  // 搜索相关状态\r
  const [searchInput, setSearchInput] = useState("");\r
  const deferredSearchInput = useDeferredValue(searchInput);\r
  \r
  // 慢速组件控制\r
  const [showSlowComponent, setShowSlowComponent] = useState(false);\r
  const [slowComponentCount, setSlowComponentCount] = useState(10);\r
  \r
  const renderCount = useRenderCount("ConcurrentFeaturesExample");\r
\r
  // 紧急更新：计数器操作\r
  const handleUrgentIncrement = useCallback(() => {\r
    setUrgentCounter(prev => prev + 1);\r
  }, []);\r
\r
  // 非紧急更新：生成新数据\r
  const handleGenerateData = useCallback(() => {\r
    startTransition(() => {\r
      const newData = generateLargeList(5000);\r
      setDataList(newData);\r
    });\r
  }, []);\r
\r
  // 基于延迟搜索值过滤数据\r
  const filteredData = useMemo(() => {\r
    console.log("执行数据过滤，关键词:", deferredSearchInput);\r
    return dataList.filter(item => \r
      !deferredSearchInput || \r
      item.name.includes(deferredSearchInput) || \r
      item.category.includes(deferredSearchInput)\r
    );\r
  }, [dataList, deferredSearchInput]);\r
\r
  // 分页显示数据\r
  const [currentPage, setCurrentPage] = useState(1);\r
  const itemsPerPage = 20;\r
  const totalPages = Math.ceil(filteredData.length / itemsPerPage);\r
  const paginatedData = filteredData.slice(\r
    (currentPage - 1) * itemsPerPage,\r
    currentPage * itemsPerPage\r
  );\r
\r
  // 检查搜索同步状态\r
  const isSearchStale = searchInput !== deferredSearchInput;\r
\r
  return (\r
    <div className="space-y-6">\r
      {/* 状态监控面板 */}\r
      <div className="bg-gradient-to-r from-blue-50 to-purple-50 p-6 rounded-lg">\r
        <h4 className="font-semibold text-gray-800 mb-4">并发特性状态监控</h4>\r
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4 text-sm">\r
          <div className="bg-white p-3 rounded shadow-sm">\r
            <span className="block font-medium text-gray-700">组件渲染</span>\r
            <span className="text-lg font-bold text-blue-600">{renderCount}</span>\r
          </div>\r
          <div className="bg-white p-3 rounded shadow-sm">\r
            <span className="block font-medium text-gray-700">紧急计数</span>\r
            <span className="text-lg font-bold text-green-600">{urgentCounter}</span>\r
          </div>\r
          <div className="bg-white p-3 rounded shadow-sm">\r
            <span className="block font-medium text-gray-700">数据状态</span>\r
            <span className={\`text-lg font-bold \${isPending ? 'text-orange-600' : 'text-green-600'}\`}>\r
              {isPending ? '更新中' : '就绪'}\r
            </span>\r
          </div>\r
          <div className="bg-white p-3 rounded shadow-sm">\r
            <span className="block font-medium text-gray-700">搜索状态</span>\r
            <span className={\`text-lg font-bold \${isSearchStale ? 'text-orange-600' : 'text-green-600'}\`}>\r
              {isSearchStale ? '搜索中' : '同步'}\r
            </span>\r
          </div>\r
          <div className="bg-white p-3 rounded shadow-sm">\r
            <span className="block font-medium text-gray-700">数据总量</span>\r
            <span className="text-lg font-bold text-purple-600">{dataList.length}</span>\r
          </div>\r
          <div className="bg-white p-3 rounded shadow-sm">\r
            <span className="block font-medium text-gray-700">过滤结果</span>\r
            <span className="text-lg font-bold text-indigo-600">{filteredData.length}</span>\r
          </div>\r
        </div>\r
      </div>\r
\r
      {/* 控制面板 */}\r
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">\r
        {/* 紧急更新控制 */}\r
        <div className="bg-green-50 p-4 rounded-lg">\r
          <h5 className="font-semibold text-green-800 mb-3">紧急更新</h5>\r
          <button\r
            onClick={handleUrgentIncrement}\r
            className="w-full px-4 py-2 bg-green-600 text-white rounded hover:bg-green-700 transition-colors"\r
          >\r
            计数器 +1\r
          </button>\r
          <p className="text-xs text-green-600 mt-2">\r
            立即响应，不受其他操作影响\r
          </p>\r
        </div>\r
\r
        {/* 非紧急更新控制 */}\r
        <div className="bg-blue-50 p-4 rounded-lg">\r
          <h5 className="font-semibold text-blue-800 mb-3">非紧急更新</h5>\r
          <button\r
            onClick={handleGenerateData}\r
            disabled={isPending}\r
            className="w-full px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"\r
          >\r
            {isPending ? '生成中...' : '生成数据'}\r
          </button>\r
          <p className="text-xs text-blue-600 mt-2">\r
            使用 transition，不阻塞紧急更新\r
          </p>\r
        </div>\r
\r
        {/* 延迟搜索控制 */}\r
        <div className="bg-purple-50 p-4 rounded-lg">\r
          <h5 className="font-semibold text-purple-800 mb-3">延迟搜索</h5>\r
          <input\r
            type="text"\r
            value={searchInput}\r
            onChange={(e) => setSearchInput(e.target.value)}\r
            placeholder="搜索商品..."\r
            className="w-full px-3 py-2 text-sm border border-purple-300 rounded focus:outline-none focus:ring-2 focus:ring-purple-500"\r
          />\r
          <p className="text-xs text-purple-600 mt-2">\r
            输入流畅，搜索延迟优化\r
          </p>\r
        </div>\r
\r
        {/* 慢速组件控制 */}\r
        <div className="bg-red-50 p-4 rounded-lg">\r
          <h5 className="font-semibold text-red-800 mb-3">慢速组件</h5>\r
          <div className="space-y-2">\r
            <label className="flex items-center text-sm">\r
              <input\r
                type="checkbox"\r
                checked={showSlowComponent}\r
                onChange={(e) => setShowSlowComponent(e.target.checked)}\r
                className="mr-2"\r
              />\r
              显示慢速组件\r
            </label>\r
            <input\r
              type="range"\r
              min="1"\r
              max="50"\r
              value={slowComponentCount}\r
              onChange={(e) => setSlowComponentCount(Number(e.target.value))}\r
              className="w-full"\r
            />\r
            <p className="text-xs text-red-600">\r
              计算强度: {slowComponentCount}\r
            </p>\r
          </div>\r
        </div>\r
      </div>\r
\r
      {/* 慢速组件展示 */}\r
      {showSlowComponent && (\r
        <div className="bg-red-50 p-4 rounded-lg">\r
          <h5 className="font-semibold text-red-800 mb-3">慢速组件演示</h5>\r
          <SlowComponent count={slowComponentCount} />\r
          <p className="text-xs text-red-600 mt-2">\r
            注意：即使慢速组件在渲染，紧急更新仍然保持响应\r
          </p>\r
        </div>\r
      )}\r
\r
      {/* 数据展示区域 */}\r
      <div className={\`transition-all duration-300 \${\r
        isPending || isSearchStale ? 'opacity-60' : 'opacity-100'\r
      }\`}>\r
        <div className="flex items-center justify-between mb-4">\r
          <h4 className="font-semibold text-gray-800">\r
            商品数据 ({filteredData.length} 项)\r
            {(isPending || isSearchStale) && (\r
              <span className="text-orange-600 ml-2">\r
                {isPending && '数据更新中'}\r
                {isSearchStale && '搜索中'}\r
                {isPending && isSearchStale && ' | '}\r
              </span>\r
            )}\r
          </h4>\r
          \r
          {/* 分页控制 */}\r
          {totalPages > 1 && (\r
            <div className="flex items-center space-x-2">\r
              <button\r
                onClick={() => setCurrentPage(prev => Math.max(1, prev - 1))}\r
                disabled={currentPage === 1}\r
                className="px-3 py-1 text-sm bg-gray-200 rounded disabled:opacity-50"\r
              >\r
                上一页\r
              </button>\r
              <span className="text-sm text-gray-600">\r
                {currentPage} / {totalPages}\r
              </span>\r
              <button\r
                onClick={() => setCurrentPage(prev => Math.min(totalPages, prev + 1))}\r
                disabled={currentPage === totalPages}\r
                className="px-3 py-1 text-sm bg-gray-200 rounded disabled:opacity-50"\r
              >\r
                下一页\r
              </button>\r
            </div>\r
          )}\r
        </div>\r
\r
        {/* 商品列表 */}\r
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">\r
          {paginatedData.map((item) => (\r
            <div key={item.id} className="bg-white p-3 border border-gray-200 rounded-lg shadow-sm hover:shadow-md transition-shadow">\r
              <h5 className="font-medium text-gray-800">{item.name}</h5>\r
              <p className="text-sm text-gray-600">{item.category}</p>\r
              <p className="text-sm font-semibold text-green-600">¥{item.price}</p>\r
              <p className="text-xs text-gray-500 mt-1 truncate">{item.description}</p>\r
            </div>\r
          ))}\r
        </div>\r
\r
        {filteredData.length === 0 && deferredSearchInput && (\r
          <div className="text-center py-12 text-gray-500">\r
            <p className="text-lg">未找到匹配的商品</p>\r
            <p className="text-sm">尝试其他关键词或清空搜索</p>\r
          </div>\r
        )}\r
      </div>\r
\r
      {/* 并发特性说明 */}\r
      <div className="bg-gray-50 p-6 rounded-lg">\r
        <h4 className="font-semibold text-gray-800 mb-4">并发特性组合优势</h4>\r
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-sm text-gray-600">\r
          <div>\r
            <h5 className="font-medium text-gray-700 mb-2">useTransition 优势：</h5>\r
            <ul className="space-y-1">\r
              <li>• 紧急更新始终优先响应</li>\r
              <li>• 非紧急更新不阻塞用户交互</li>\r
              <li>• 提供 isPending 状态反馈</li>\r
              <li>• 适用于大量数据处理</li>\r
            </ul>\r
          </div>\r
          <div>\r
            <h5 className="font-medium text-gray-700 mb-2">useDeferredValue 优势：</h5>\r
            <ul className="space-y-1">\r
              <li>• 保持输入框流畅响应</li>\r
              <li>• 延迟昂贵的搜索计算</li>\r
              <li>• 避免频繁的重新计算</li>\r
              <li>• 提供搜索状态反馈</li>\r
            </ul>\r
          </div>\r
          <div>\r
            <h5 className="font-medium text-gray-700 mb-2">组合使用效果：</h5>\r
            <ul className="space-y-1">\r
              <li>• 处理复杂交互场景</li>\r
              <li>• 多层次的性能优化</li>\r
              <li>• 完整的用户体验</li>\r
              <li>• 灵活的优先级控制</li>\r
            </ul>\r
          </div>\r
        </div>\r
      </div>\r
\r
      {/* 使用说明 */}\r
      <div className="bg-yellow-50 p-4 rounded-lg">\r
        <h4 className="font-semibold text-yellow-800 mb-2">交互测试说明</h4>\r
        <ul className="text-sm text-yellow-700 space-y-1">\r
          <li>• 点击"计数器 +1"观察紧急更新的立即响应</li>\r
          <li>• 点击"生成数据"时继续点击计数器，观察不被阻塞</li>\r
          <li>• 快速输入搜索关键词，观察输入的流畅性</li>\r
          <li>• 开启慢速组件，测试在计算密集时的响应性</li>\r
          <li>• 观察各种状态指示器的实时反馈</li>\r
        </ul>\r
      </div>\r
    </div>\r
  );\r
};\r
\r
export default ConcurrentFeaturesExample;`,F=a=>{const t=u.useRef(0);return t.current+=1,u.useEffect(()=>{console.log(`${a} rendered ${t.current} times`)}),t.current},U=(a,t="")=>{const r=[];for(let n=0;n<a;n++){const s={id:n,name:`商品 ${n}`,category:n%3===0?"电子":n%3===1?"服装":"食品",price:Math.floor(Math.random()*1e3)+10,description:`这是商品 ${n} 的详细描述信息`};(!t||s.name.includes(t)||s.category.includes(t))&&r.push(s)}return r},B=()=>{const[a,t]=i.useState(""),r=i.useDeferredValue(a),n=F("DeferredValueExample"),s=i.useMemo(()=>(console.log("执行搜索计算，关键词:",r),U(5e3,r)),[r]),c=a!==r;return e.jsxs("div",{className:"space-y-6",children:[e.jsxs("div",{className:"bg-green-50 p-4 rounded-lg",children:[e.jsx("h4",{className:"font-semibold text-green-800 mb-2",children:"状态信息"}),e.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 text-sm",children:[e.jsxs("div",{children:[e.jsx("span",{className:"font-medium",children:"组件渲染次数:"}),e.jsx("span",{className:"ml-2 text-green-600",children:n})]}),e.jsxs("div",{children:[e.jsx("span",{className:"font-medium",children:"当前输入值:"}),e.jsx("span",{className:"ml-2 text-green-600",children:a||"无"})]}),e.jsxs("div",{children:[e.jsx("span",{className:"font-medium",children:"延迟搜索值:"}),e.jsx("span",{className:"ml-2 text-green-600",children:r||"无"})]}),e.jsxs("div",{children:[e.jsx("span",{className:"font-medium",children:"同步状态:"}),e.jsx("span",{className:`ml-2 ${c?"text-orange-600":"text-green-600"}`,children:c?"搜索中...":"已同步"})]})]})]}),e.jsxs("div",{children:[e.jsx("label",{className:"block text-sm font-medium text-gray-700 mb-2",children:"实时搜索（useDeferredValue优化）"}),e.jsx("input",{type:"text",value:a,onChange:o=>t(o.target.value),placeholder:"输入商品名称或分类进行搜索...",className:"w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"}),e.jsxs("div",{className:"flex items-center justify-between mt-2",children:[e.jsx("p",{className:"text-xs text-gray-500",children:"输入保持流畅，搜索基于延迟值进行"}),c&&e.jsxs("div",{className:"flex items-center text-xs text-orange-600",children:[e.jsx("div",{className:"animate-spin rounded-full h-3 w-3 border-b-2 border-orange-600 mr-1"}),"搜索中..."]})]})]}),e.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-4",children:[e.jsxs("div",{className:"bg-blue-50 p-4 rounded-lg",children:[e.jsx("h5",{className:"font-semibold text-blue-800 mb-2",children:"当前输入值"}),e.jsxs("p",{className:"text-lg font-mono text-blue-600",children:['"',a,'"']}),e.jsx("p",{className:"text-xs text-blue-500 mt-1",children:"立即更新，保持输入响应性"})]}),e.jsxs("div",{className:"bg-purple-50 p-4 rounded-lg",children:[e.jsx("h5",{className:"font-semibold text-purple-800 mb-2",children:"延迟搜索值"}),e.jsxs("p",{className:"text-lg font-mono text-purple-600",children:['"',r,'"']}),e.jsx("p",{className:"text-xs text-purple-500 mt-1",children:"延迟更新，用于昂贵的搜索计算"})]})]}),e.jsxs("div",{className:`transition-opacity duration-200 ${c?"opacity-50":"opacity-100"}`,children:[e.jsxs("h4",{className:"font-semibold text-gray-800 mb-3",children:["搜索结果 (",s.length," 项)",c&&e.jsx("span",{className:"text-orange-600 ml-2",children:"更新中..."})]}),e.jsx("div",{className:"grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 max-h-96 overflow-y-auto",children:s.slice(0,30).map(o=>e.jsxs("div",{className:"bg-white p-3 border border-gray-200 rounded-lg shadow-sm",children:[e.jsx("h5",{className:"font-medium text-gray-800",children:o.name}),e.jsx("p",{className:"text-sm text-gray-600",children:o.category}),e.jsxs("p",{className:"text-sm font-semibold text-green-600",children:["¥",o.price]}),e.jsx("p",{className:"text-xs text-gray-500 mt-1 truncate",children:o.description})]},o.id))}),s.length>30&&e.jsxs("p",{className:"text-sm text-gray-500 mt-2",children:["显示前30项，共",s.length,"项"]}),s.length===0&&r&&e.jsxs("div",{className:"text-center py-8 text-gray-500",children:[e.jsx("p",{children:"未找到匹配的商品"}),e.jsx("p",{className:"text-sm",children:"尝试其他关键词"})]})]}),e.jsxs("div",{className:"bg-gray-50 p-4 rounded-lg",children:[e.jsx("h4",{className:"font-semibold text-gray-800 mb-2",children:"性能优化说明"}),e.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-4 text-sm text-gray-600",children:[e.jsxs("div",{children:[e.jsx("h5",{className:"font-medium text-gray-700 mb-1",children:"传统方式问题："}),e.jsxs("ul",{className:"space-y-1",children:[e.jsx("li",{children:"• 每次输入都触发昂贵的搜索计算"}),e.jsx("li",{children:"• 输入可能出现卡顿和延迟"}),e.jsx("li",{children:"• 用户体验不佳"})]})]}),e.jsxs("div",{children:[e.jsx("h5",{className:"font-medium text-gray-700 mb-1",children:"useDeferredValue优势："}),e.jsxs("ul",{className:"space-y-1",children:[e.jsx("li",{children:"• 输入保持流畅响应"}),e.jsx("li",{children:"• 搜索计算基于延迟值进行"}),e.jsx("li",{children:"• 提供适当的视觉反馈"}),e.jsx("li",{children:"• 显著改善用户体验"})]})]})]})]}),e.jsxs("div",{className:"bg-yellow-50 p-4 rounded-lg",children:[e.jsx("h4",{className:"font-semibold text-yellow-800 mb-2",children:"使用说明"}),e.jsxs("ul",{className:"text-sm text-yellow-700 space-y-1",children:[e.jsx("li",{children:"• 快速输入文字观察两个值的差异"}),e.jsx("li",{children:"• 注意输入框始终保持流畅响应"}),e.jsx("li",{children:"• 搜索结果基于延迟值计算，避免频繁重计算"}),e.jsx("li",{children:"• 视觉反馈帮助用户理解当前搜索状态"})]})]})]})},q=`import React, {
  memo,
  useDeferredValue,
  useMemo,
  useState,
} from "react";

// 自定义Hook：跟踪组件渲染次数
const useRenderCount = (componentName: string) => {
  const renderCount = React.useRef(0);
  renderCount.current += 1;
  
  React.useEffect(() => {
    console.log(\`\${componentName} rendered \${renderCount.current} times\`);
  });
  
  return renderCount.current;
};

// 生成大量数据的函数
const generateLargeList = (count: number, filter: string = "") => {
  const items = [];
  for (let i = 0; i < count; i++) {
    const item = {
      id: i,
      name: \`商品 \${i}\`,
      category: i % 3 === 0 ? "电子" : i % 3 === 1 ? "服装" : "食品",
      price: Math.floor(Math.random() * 1000) + 10,
      description: \`这是商品 \${i} 的详细描述信息\`,
    };
    if (!filter || item.name.includes(filter) || item.category.includes(filter)) {
      items.push(item);
    }
  }
  return items;
};

/**
 * useDeferredValue 搜索优化示例
 * 
 * 功能说明：
 * - 演示 useDeferredValue 的基本用法
 * - 优化搜索体验，保持输入响应性
 * - 延迟昂贵的搜索计算
 * - 提供搜索状态的视觉反馈
 * 
 * 核心特性：
 * - useDeferredValue 延迟值的更新
 * - 保持输入框的流畅响应
 * - 搜索结果基于延迟值计算
 * - 视觉反馈显示同步状态
 */
const DeferredValueExample: React.FC = () => {
  const [searchInput, setSearchInput] = useState("");
  const deferredSearchInput = useDeferredValue(searchInput);
  const renderCount = useRenderCount("DeferredValueExample");

  // 基于延迟值进行昂贵的搜索计算
  const searchResults = useMemo(() => {
    console.log("执行搜索计算，关键词:", deferredSearchInput);
    return generateLargeList(5000, deferredSearchInput);
  }, [deferredSearchInput]);

  // 检查值是否同步
  const isStale = searchInput !== deferredSearchInput;

  return (
    <div className="space-y-6">
      {/* 状态信息 */}
      <div className="bg-green-50 p-4 rounded-lg">
        <h4 className="font-semibold text-green-800 mb-2">状态信息</h4>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 text-sm">
          <div>
            <span className="font-medium">组件渲染次数:</span>
            <span className="ml-2 text-green-600">{renderCount}</span>
          </div>
          <div>
            <span className="font-medium">当前输入值:</span>
            <span className="ml-2 text-green-600">{searchInput || "无"}</span>
          </div>
          <div>
            <span className="font-medium">延迟搜索值:</span>
            <span className="ml-2 text-green-600">{deferredSearchInput || "无"}</span>
          </div>
          <div>
            <span className="font-medium">同步状态:</span>
            <span className={\`ml-2 \${isStale ? 'text-orange-600' : 'text-green-600'}\`}>
              {isStale ? "搜索中..." : "已同步"}
            </span>
          </div>
        </div>
      </div>

      {/* 搜索输入 */}
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-2">
          实时搜索（useDeferredValue优化）
        </label>
        <input
          type="text"
          value={searchInput}
          onChange={(e) => setSearchInput(e.target.value)}
          placeholder="输入商品名称或分类进行搜索..."
          className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
        />
        <div className="flex items-center justify-between mt-2">
          <p className="text-xs text-gray-500">
            输入保持流畅，搜索基于延迟值进行
          </p>
          {isStale && (
            <div className="flex items-center text-xs text-orange-600">
              <div className="animate-spin rounded-full h-3 w-3 border-b-2 border-orange-600 mr-1"></div>
              搜索中...
            </div>
          )}
        </div>
      </div>

      {/* 值对比显示 */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="bg-blue-50 p-4 rounded-lg">
          <h5 className="font-semibold text-blue-800 mb-2">当前输入值</h5>
          <p className="text-lg font-mono text-blue-600">
            "{searchInput}"
          </p>
          <p className="text-xs text-blue-500 mt-1">
            立即更新，保持输入响应性
          </p>
        </div>
        <div className="bg-purple-50 p-4 rounded-lg">
          <h5 className="font-semibold text-purple-800 mb-2">延迟搜索值</h5>
          <p className="text-lg font-mono text-purple-600">
            "{deferredSearchInput}"
          </p>
          <p className="text-xs text-purple-500 mt-1">
            延迟更新，用于昂贵的搜索计算
          </p>
        </div>
      </div>

      {/* 搜索结果 */}
      <div className={\`transition-opacity duration-200 \${isStale ? 'opacity-50' : 'opacity-100'}\`}>
        <h4 className="font-semibold text-gray-800 mb-3">
          搜索结果 ({searchResults.length} 项)
          {isStale && <span className="text-orange-600 ml-2">更新中...</span>}
        </h4>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 max-h-96 overflow-y-auto">
          {searchResults.slice(0, 30).map((item) => (
            <div key={item.id} className="bg-white p-3 border border-gray-200 rounded-lg shadow-sm">
              <h5 className="font-medium text-gray-800">{item.name}</h5>
              <p className="text-sm text-gray-600">{item.category}</p>
              <p className="text-sm font-semibold text-green-600">¥{item.price}</p>
              <p className="text-xs text-gray-500 mt-1 truncate">{item.description}</p>
            </div>
          ))}
        </div>
        {searchResults.length > 30 && (
          <p className="text-sm text-gray-500 mt-2">
            显示前30项，共{searchResults.length}项
          </p>
        )}
        {searchResults.length === 0 && deferredSearchInput && (
          <div className="text-center py-8 text-gray-500">
            <p>未找到匹配的商品</p>
            <p className="text-sm">尝试其他关键词</p>
          </div>
        )}
      </div>

      {/* 性能对比说明 */}
      <div className="bg-gray-50 p-4 rounded-lg">
        <h4 className="font-semibold text-gray-800 mb-2">性能优化说明</h4>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm text-gray-600">
          <div>
            <h5 className="font-medium text-gray-700 mb-1">传统方式问题：</h5>
            <ul className="space-y-1">
              <li>• 每次输入都触发昂贵的搜索计算</li>
              <li>• 输入可能出现卡顿和延迟</li>
              <li>• 用户体验不佳</li>
            </ul>
          </div>
          <div>
            <h5 className="font-medium text-gray-700 mb-1">useDeferredValue优势：</h5>
            <ul className="space-y-1">
              <li>• 输入保持流畅响应</li>
              <li>• 搜索计算基于延迟值进行</li>
              <li>• 提供适当的视觉反馈</li>
              <li>• 显著改善用户体验</li>
            </ul>
          </div>
        </div>
      </div>

      {/* 使用说明 */}
      <div className="bg-yellow-50 p-4 rounded-lg">
        <h4 className="font-semibold text-yellow-800 mb-2">使用说明</h4>
        <ul className="text-sm text-yellow-700 space-y-1">
          <li>• 快速输入文字观察两个值的差异</li>
          <li>• 注意输入框始终保持流畅响应</li>
          <li>• 搜索结果基于延迟值计算，避免频繁重计算</li>
          <li>• 视觉反馈帮助用户理解当前搜索状态</li>
        </ul>
      </div>
    </div>
  );
};

export default DeferredValueExample;`,G={title:"React 并发特性 (Concurrent Features)",subtitle:"Concurrent Features Performance Optimization",description:"React 18引入的并发特性，包括useTransition和useDeferredValue，用于优化用户体验和应用性能。",overview:[{title:"核心概念",items:["时间切片：将渲染工作分解为小块，避免阻塞主线程","优先级调度：区分紧急和非紧急更新","可中断渲染：高优先级任务可以中断低优先级渲染","自动批处理：自动合并多个状态更新","Suspense增强：更好的异步数据处理"]},{title:"主要特性",items:["useTransition：标记非紧急更新，避免阻塞用户交互","useDeferredValue：延迟值的更新，保持输入响应性","startTransition：包装耗时的状态更新操作","isPending：提供过渡状态的用户反馈"]},{title:"适用场景",items:["大量数据渲染和复杂列表处理","实时搜索和过滤功能优化","复杂表单和用户输入处理","数据可视化和图表渲染","需要保持响应性的重计算场景"]},{title:"注意事项",items:["不是所有更新都需要使用并发特性","紧急更新（如用户输入）应该立即响应","需要提供适当的加载状态和视觉反馈","避免过度使用可能影响性能"]}],tutorial:{concepts:["时间切片：React将渲染工作分解为小块，避免长时间阻塞主线程","优先级调度：紧急更新（用户输入）优先于非紧急更新（数据渲染）","可中断渲染：高优先级任务可以中断正在进行的低优先级渲染","useTransition：提供isPending状态和startTransition函数","useDeferredValue：延迟值的更新，保持输入响应性"],steps:["识别应用中的紧急和非紧急更新操作","使用useTransition包装耗时的状态更新","利用isPending状态提供用户反馈","使用useDeferredValue优化搜索和过滤场景","结合useMemo缓存昂贵的计算结果","测试和优化并发特性的使用效果"],tips:["不要对所有更新都使用并发特性，只在需要时使用","紧急更新如用户输入应该立即响应，不要包装在transition中","使用isPending状态提供视觉反馈，改善用户体验","延迟值主要用于优化昂贵的计算或渲染操作","可以组合使用多种并发特性，但要避免过度复杂化"]},interview:{questions:[{question:"什么是React的并发特性？它解决了什么问题？",answer:"React并发特性是React 18引入的新功能，包括时间切片、优先级调度等。它解决了长时间渲染阻塞UI的问题，通过将渲染工作分解为小块，让高优先级任务（如用户输入）能够中断低优先级任务（如数据渲染），保持应用的响应性。"},{question:"useTransition和useDeferredValue有什么区别？",answer:"useTransition用于标记非紧急的状态更新，返回isPending状态和startTransition函数。useDeferredValue用于延迟值的更新，主要优化昂贵的计算。useTransition控制更新的优先级，useDeferredValue控制值的更新时机。"},{question:"什么时候应该使用并发特性？",answer:"当应用有大量数据渲染、复杂计算或可能阻塞UI的操作时使用。典型场景包括：实时搜索、大列表渲染、数据可视化、复杂表单处理等。关键是区分紧急更新（用户输入）和非紧急更新（数据处理）。"},{question:"如何避免并发特性的常见陷阱？",answer:"避免对所有更新都使用transition；确保紧急更新立即响应；提供isPending状态的用户反馈；不要在transition中执行同步阻塞操作；合理使用useMemo缓存计算结果；避免过度使用导致复杂性增加。"}],keyPoints:["并发特性不是性能银弹，需要根据实际场景合理使用","紧急更新和非紧急更新的区分是使用并发特性的关键","isPending状态是提供良好用户体验的重要工具","并发特性可以组合使用，但要保持代码的简洁性","需要充分测试以确保并发特性的正确使用"]},bestPractices:{dos:["只对耗时的非紧急更新使用startTransition","使用isPending状态提供加载指示和用户反馈","结合useMemo缓存昂贵的计算结果","为延迟值提供适当的视觉反馈","在大数据量场景中优先考虑并发特性","保持紧急更新的立即响应性"],donts:["不要对所有状态更新都使用transition","不要在transition中执行同步阻塞操作","不要忽略isPending状态的用户反馈","不要过度使用导致代码复杂化","不要将用户输入等紧急更新包装在transition中"],patterns:["搜索优化模式：输入使用普通状态，搜索结果使用延迟值","列表渲染模式：用户操作立即响应，列表更新使用transition","数据处理模式：UI交互保持响应，数据计算使用并发特性","状态反馈模式：使用isPending提供加载状态和进度指示","组合使用模式：同时使用useTransition和useDeferredValue处理复杂场景"]},examples:[{title:"useTransition 基础用法",component:e.jsx(V,{}),description:"展示如何使用useTransition处理非紧急更新，避免阻塞用户交互。",observationPoints:["紧急更新（计数器）立即响应，不受列表渲染影响","非紧急更新（列表渲染）使用transition，避免阻塞UI","isPending状态提供用户反馈","搜索输入保持流畅响应"],keyPoints:["useTransition返回isPending状态和startTransition函数","startTransition将状态更新标记为非紧急","紧急更新始终优先于非紧急更新","适用于大量数据渲染场景"],commonTraps:["对所有更新都使用transition","忘记提供isPending状态的用户反馈","在transition中执行同步阻塞操作"],solutions:["只对耗时的非紧急更新使用transition","使用isPending状态提供加载指示","确保transition中的操作是异步的"],importantTips:["紧急更新如用户输入应该立即响应","使用isPending状态提供视觉反馈","transition适用于可以延迟的更新操作"],codeExample:{title:"useTransition 基础用法",code:$}},{title:"useDeferredValue 搜索优化",component:e.jsx(B,{}),description:"使用useDeferredValue优化搜索体验，保持输入响应性。",observationPoints:["输入框保持流畅响应，不会因搜索计算而卡顿","延迟值与当前输入值可能不同步","搜索结果基于延迟值计算，避免频繁重计算","视觉反馈显示搜索状态"],keyPoints:["useDeferredValue延迟值的更新","保持输入响应性，延迟昂贵的计算","适用于搜索、过滤等场景","可以与视觉反馈结合使用"],commonTraps:["对所有值都使用useDeferredValue","忘记处理值不同步的情况","在延迟值计算中执行副作用"],solutions:["只对昂贵计算的值使用useDeferredValue","提供视觉反馈表示延迟状态","在useMemo中使用延迟值进行计算"],importantTips:["延迟值主要用于优化昂贵的计算或渲染","输入值和延迟值可能不同步，需要处理这种情况","结合useMemo使用效果更佳"],codeExample:{title:"useDeferredValue 搜索优化",code:q}},{title:"并发特性组合应用",component:e.jsx(L,{}),description:"综合使用多种并发特性处理复杂的用户交互场景。",observationPoints:["紧急更新（计数器）始终立即响应","非紧急更新（数据生成）使用transition避免阻塞","搜索输入使用延迟值优化","慢速组件展示渲染阻塞效果","多种状态提供完整的用户反馈"],keyPoints:["可以同时使用useTransition和useDeferredValue","不同类型的更新有不同的优先级","组合使用可以处理复杂交互场景","需要合理的状态管理和用户反馈"],commonTraps:["过度使用并发特性导致复杂性增加","忽略不同更新类型的优先级","缺少适当的用户反馈机制"],solutions:["根据实际需求选择合适的并发特性","明确区分紧急和非紧急更新","提供清晰的状态指示和用户反馈"],importantTips:["并发特性可以组合使用，但要避免过度复杂化","始终保持紧急更新的响应性","提供适当的视觉反馈帮助用户理解当前状态"],codeExample:{title:"并发特性组合应用",code:E}}]},O=()=>e.jsx(R,{...G});export{O as default};
