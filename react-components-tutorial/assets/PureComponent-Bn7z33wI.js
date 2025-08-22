import{j as e,r as s,R as h}from"./index-B_BA6J2H.js";import{C as x}from"./ComponentTemplate-CRmS-rAK.js";const b=({name:n,age:t})=>(console.log("普通组件渲染"),e.jsxs("div",{className:"p-3 border border-gray-300 rounded bg-red-50",children:[e.jsx("h4",{className:"font-semibold text-red-700",children:"普通组件"}),e.jsxs("p",{children:["姓名: ",n,", 年龄: ",t]})]})),C=s.memo(({name:n,age:t})=>(console.log("纯组件渲染"),e.jsxs("div",{className:"p-3 border border-green-300 rounded bg-green-50",children:[e.jsx("h4",{className:"font-semibold text-green-700",children:"纯组件 (memo)"}),e.jsxs("p",{children:["姓名: ",n,", 年龄: ",t]})]}))),j=()=>{const[n,t]=s.useState("张三"),[r,l]=s.useState(25),[m,c]=s.useState(0);return e.jsxs("div",{className:"space-y-4",children:[e.jsxs("div",{className:"flex space-x-4",children:[e.jsx("button",{onClick:()=>t(n==="张三"?"李四":"张三"),className:"px-3 py-1 bg-blue-600 text-white rounded hover:bg-blue-700",children:"切换姓名"}),e.jsx("button",{onClick:()=>l(r===25?30:25),className:"px-3 py-1 bg-green-600 text-white rounded hover:bg-green-700",children:"切换年龄"}),e.jsxs("button",{onClick:()=>c(m+1),className:"px-3 py-1 bg-gray-600 text-white rounded hover:bg-gray-700",children:["无关状态 (",m,")"]})]}),e.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-4",children:[e.jsx(b,{name:n,age:r}),e.jsx(C,{name:n,age:r})]}),e.jsx("p",{className:"text-sm text-gray-600",children:'打开控制台查看渲染日志。点击"无关状态"按钮，观察两个组件的渲染行为差异。'})]})};class v extends s.Component{render(){console.log("普通类组件渲染");const{name:t,age:r}=this.props;return e.jsxs("div",{className:"p-3 border border-gray-300 rounded bg-red-50",children:[e.jsx("h4",{className:"font-semibold text-red-700",children:"普通类组件"}),e.jsxs("p",{children:["姓名: ",t,", 年龄: ",r]})]})}}class y extends s.PureComponent{render(){console.log("纯类组件渲染");const{name:t,age:r}=this.props;return e.jsxs("div",{className:"p-3 border border-green-300 rounded bg-green-50",children:[e.jsx("h4",{className:"font-semibold text-green-700",children:"纯类组件 (PureComponent)"}),e.jsxs("p",{children:["姓名: ",t,", 年龄: ",r]})]})}}const f=()=>{const[n,t]=s.useState("张三"),[r,l]=s.useState(25),[m,c]=s.useState(0);return e.jsxs("div",{className:"space-y-4",children:[e.jsxs("div",{className:"flex space-x-4",children:[e.jsx("button",{onClick:()=>t(n==="张三"?"李四":"张三"),className:"px-3 py-1 bg-blue-600 text-white rounded hover:bg-blue-700",children:"切换姓名"}),e.jsx("button",{onClick:()=>l(r===25?30:25),className:"px-3 py-1 bg-green-600 text-white rounded hover:bg-green-700",children:"切换年龄"}),e.jsxs("button",{onClick:()=>c(m+1),className:"px-3 py-1 bg-gray-600 text-white rounded hover:bg-gray-700",children:["无关状态 (",m,")"]})]}),e.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-4",children:[e.jsx(v,{name:n,age:r}),e.jsx(y,{name:n,age:r})]}),e.jsx("p",{className:"text-sm text-gray-600",children:"打开控制台查看渲染日志。对比普通类组件和纯类组件的渲染行为。"})]})},N=({item:n})=>{const t=s.useRef(0);return t.current+=1,console.log(`普通组件-${n.id} 渲染`,t.current),e.jsxs("div",{className:"p-2 border border-red-200 rounded bg-red-50",children:[e.jsx("span",{children:n.value}),e.jsxs("span",{className:"ml-2 text-xs text-red-600",children:["(渲染: ",t.current,")"]})]})},P=s.memo(({item:n})=>{const t=s.useRef(0);return t.current+=1,console.log(`纯组件-${n.id} 渲染`,t.current),e.jsxs("div",{className:"p-2 border border-green-200 rounded bg-green-50",children:[e.jsx("span",{children:n.value}),e.jsxs("span",{className:"ml-2 text-xs text-green-600",children:["(渲染: ",t.current,")"]})]})},(n,t)=>n.item.value===t.item.value),k=()=>{const[n]=s.useState(Array.from({length:100},(i,o)=>({id:o,value:`Item ${o}`}))),[t,r]=s.useState(""),[l,m]=s.useState(0),c=s.useMemo(()=>n.filter(i=>i.value.toLowerCase().includes(t.toLowerCase())).slice(0,10),[n,t]);return e.jsxs("div",{className:"space-y-4",children:[e.jsxs("div",{className:"flex space-x-4",children:[e.jsx("input",{type:"text",value:t,onChange:i=>r(i.target.value),placeholder:"过滤项目...",className:"px-3 py-1 border border-gray-300 rounded"}),e.jsxs("button",{onClick:()=>m(l+1),className:"px-3 py-1 bg-purple-600 text-white rounded hover:bg-purple-700",children:["触发重新渲染 (",l,")"]})]}),e.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-4",children:[e.jsxs("div",{children:[e.jsx("h4",{className:"font-semibold mb-2 text-red-700",children:"普通组件列表"}),e.jsx("div",{className:"space-y-1 max-h-60 overflow-y-auto",children:c.map(i=>e.jsx(N,{item:i},i.id))})]}),e.jsxs("div",{children:[e.jsx("h4",{className:"font-semibold mb-2 text-green-700",children:"纯组件列表"}),e.jsx("div",{className:"space-y-1 max-h-60 overflow-y-auto",children:c.map(i=>e.jsx(P,{item:i},i.id))})]})]}),e.jsx("p",{className:"text-sm text-gray-600",children:'打开控制台查看渲染日志。点击"触发重新渲染"按钮，观察性能差异。'})]})},R=s.memo(({user:n,settings:t})=>(console.log("浅比较组件渲染"),e.jsxs("div",{className:"p-3 border border-blue-300 rounded bg-blue-50",children:[e.jsx("h4",{className:"font-semibold text-blue-700",children:"浅比较组件"}),e.jsxs("p",{children:["用户: ",n.name,", 年龄: ",n.profile.age]}),e.jsxs("p",{children:["主题: ",t.theme]}),e.jsxs("p",{className:"text-xs text-blue-500 mt-1",children:["最后渲染时间: ",new Date().toLocaleTimeString()]})]}))),w=s.memo(({user:n,settings:t})=>(console.log("深比较组件渲染"),e.jsxs("div",{className:"p-3 border border-green-300 rounded bg-green-50",children:[e.jsx("h4",{className:"font-semibold text-green-700",children:"深比较组件"}),e.jsxs("p",{children:["用户: ",n.name,", 年龄: ",n.profile.age]}),e.jsxs("p",{children:["主题: ",t.theme]}),e.jsxs("p",{className:"text-xs text-green-500 mt-1",children:["最后渲染时间: ",new Date().toLocaleTimeString()]})]})),(n,t)=>{const r=n.user.name===t.user.name&&n.user.profile.age===t.user.profile.age&&n.user.profile.city===t.user.profile.city,l=n.settings.theme===t.settings.theme&&n.settings.notifications===t.settings.notifications;return r&&l}),S=()=>{const[n,t]=s.useState({name:"张三",profile:{age:25,city:"北京"}}),[r,l]=s.useState({theme:"light",notifications:!0}),[m,c]=s.useState(0),i=()=>{c(o=>o+1),t(o=>({...o}))};return e.jsxs("div",{className:"space-y-4",children:[e.jsxs("div",{className:"flex flex-wrap gap-2",children:[e.jsx("button",{onClick:()=>t(o=>({...o,name:o.name==="张三"?"李四":"张三"})),className:"px-3 py-1 bg-blue-600 text-white rounded hover:bg-blue-700",children:"更新姓名"}),e.jsx("button",{onClick:()=>t(o=>({...o,profile:{...o.profile,age:o.profile.age===25?30:25}})),className:"px-3 py-1 bg-green-600 text-white rounded hover:bg-green-700",children:"更新年龄"}),e.jsx("button",{onClick:()=>l(o=>({...o,theme:o.theme==="light"?"dark":"light"})),className:"px-3 py-1 bg-purple-600 text-white rounded hover:bg-purple-700",children:"切换主题"}),e.jsxs("button",{onClick:i,className:"px-3 py-1 bg-gray-600 text-white rounded hover:bg-gray-700",children:["仅更新引用 (",m,")"]})]}),e.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-4",children:[e.jsx(R,{user:n,settings:r}),e.jsx(w,{user:n,settings:r})]}),e.jsxs("div",{className:"text-sm text-gray-600",children:[e.jsx("p",{children:"打开控制台查看渲染日志。浅比较组件在嵌套对象变化时可能无法检测到变化。"}),e.jsx("p",{className:"mt-2",children:"观察点击不同按钮时两个组件的渲染行为差异："}),e.jsxs("ul",{className:"list-disc pl-5 mt-1",children:[e.jsx("li",{children:"更新姓名/年龄/主题：两个组件都会更新"}),e.jsx("li",{children:'点击"仅更新引用"：浅比较组件会重新渲染，深比较组件不会'})]})]})]})},I=s.memo(({product:n,highlight:t})=>(console.log(`ProductCard ${n.id} 渲染`),e.jsxs("div",{className:`p-3 border rounded ${t?"border-yellow-400 bg-yellow-50":"border-gray-300 bg-white"}`,children:[e.jsx("h4",{className:"font-semibold",children:n.name}),e.jsxs("p",{className:"text-gray-600",children:["$",n.price]}),e.jsx("p",{className:"text-sm text-gray-500",children:n.category}),n.metadata&&e.jsxs("p",{className:"text-xs text-gray-400",children:["更新时间:"," ",new Date(n.metadata.lastUpdated).toLocaleTimeString()]})]})),(n,t)=>n.product.name===t.product.name&&n.product.price===t.product.price&&n.highlight===t.highlight),L=()=>{const[n,t]=s.useState([{id:1,name:"iPhone",price:999,category:"electronics"},{id:2,name:"Book",price:29,category:"books"},{id:3,name:"Shirt",price:49,category:"clothing"}]),[r,l]=s.useState("name"),[m,c]=s.useState(0),i=a=>{t(d=>d.map(p=>p.id===a?{...p,price:p.price+10}:p))},o=()=>{c(a=>a+1),t(a=>a.map(d=>({...d,metadata:{lastUpdated:Date.now(),version:m+1}})))},u=()=>{t([{id:1,name:"iPhone",price:999,category:"electronics"},{id:2,name:"Book",price:29,category:"books"},{id:3,name:"Shirt",price:49,category:"clothing"}])},g=h.useMemo(()=>[...n].sort((a,d)=>r==="price"?a.price-d.price:a.name.localeCompare(d.name)),[n,r]);return e.jsxs("div",{className:"space-y-4",children:[e.jsxs("div",{className:"flex flex-wrap gap-2",children:[e.jsxs("button",{onClick:()=>l(r==="name"?"price":"name"),className:"px-3 py-1 bg-blue-600 text-white rounded hover:bg-blue-700",children:["排序: ",r==="name"?"按名称":"按价格"]}),e.jsx("button",{onClick:()=>i(1),className:"px-3 py-1 bg-green-600 text-white rounded hover:bg-green-700",children:"iPhone +$10"}),e.jsx("button",{onClick:()=>i(2),className:"px-3 py-1 bg-green-500 text-white rounded hover:bg-green-600",children:"Book +$10"}),e.jsxs("button",{onClick:o,className:"px-3 py-1 bg-purple-600 text-white rounded hover:bg-purple-700",children:["添加元数据 (v",m,")"]}),e.jsx("button",{onClick:u,className:"px-3 py-1 bg-gray-600 text-white rounded hover:bg-gray-700",children:"重置数据"})]}),e.jsx("div",{className:"grid grid-cols-1 md:grid-cols-3 gap-4",children:g.map(a=>e.jsx(I,{product:a,highlight:a.price>100},`${a.id}_${a.price}`))}),e.jsxs("div",{className:"p-4 border border-gray-200 rounded bg-gray-50",children:[e.jsx("h4",{className:"font-semibold text-gray-800 mb-2",children:"行为说明"}),e.jsxs("ul",{className:"list-disc pl-5 space-y-1 text-sm text-gray-600",children:[e.jsxs("li",{children:[e.jsx("span",{className:"font-medium",children:"更新价格："}),"会重新渲染对应产品卡片（price变化）"]}),e.jsxs("li",{children:[e.jsx("span",{className:"font-medium",children:"添加元数据："}),"不会重新渲染卡片（比较函数忽略metadata）"]}),e.jsxs("li",{children:[e.jsx("span",{className:"font-medium",children:"排序："}),"不会导致重新渲染（只是顺序变化）"]}),e.jsxs("li",{children:[e.jsx("span",{className:"font-medium",children:"高亮逻辑："}),"价格超过$100的产品会有黄色高亮"]})]}),e.jsx("p",{className:"mt-2 text-sm text-gray-500",children:"打开控制台查看详细渲染日志，观察自定义比较函数的效果。"})]})]})},T=()=>{const n={title:"纯组件 (Pure Components)",description:"纯组件是React中的性能优化技术，通过浅比较props和state来避免不必要的重新渲染。React.memo是函数组件的纯组件实现，而React.PureComponent是类组件的纯组件基类。",overview:e.jsxs("div",{className:"space-y-4",children:[e.jsxs("div",{children:[e.jsx("h3",{className:"text-lg font-semibold mb-2",children:"核心概念"}),e.jsx("p",{className:"text-gray-700",children:"纯组件是React中的性能优化技术，通过浅比较props和state来避免不必要的重新渲染。 React.memo是函数组件的纯组件实现，而React.PureComponent是类组件的纯组件基类。"})]}),e.jsxs("div",{children:[e.jsx("h3",{className:"text-lg font-semibold mb-2",children:"主要优势"}),e.jsxs("ul",{className:"list-disc list-inside space-y-1 text-gray-700",children:[e.jsx("li",{children:"性能优化 - 自动跳过不必要的重新渲染，提升应用性能"}),e.jsx("li",{children:"简单易用 - 只需使用React.memo包装组件或继承PureComponent"}),e.jsx("li",{children:"浅比较 - 自动比较props和state的第一层属性"}),e.jsx("li",{children:"自定义比较 - React.memo支持自定义比较函数"}),e.jsx("li",{children:"向后兼容 - 不影响组件的正常功能和API"})]})]}),e.jsxs("div",{children:[e.jsx("h3",{className:"text-lg font-semibold mb-2",children:"适用场景"}),e.jsxs("ul",{className:"list-disc list-inside space-y-1 text-gray-700",children:[e.jsx("li",{children:"展示型组件 - props变化频率较低的纯展示组件"}),e.jsx("li",{children:"列表项组件 - 大量重复渲染的列表项优化"}),e.jsx("li",{children:"复杂计算组件 - 渲染成本较高的组件"}),e.jsx("li",{children:"深层嵌套组件 - 避免父组件更新导致的连锁重渲染"}),e.jsx("li",{children:"稳定props组件 - props结构相对稳定的组件"})]})]}),e.jsxs("div",{children:[e.jsx("h3",{className:"text-lg font-semibold mb-2",children:"注意事项"}),e.jsxs("ul",{className:"list-disc list-inside space-y-1 text-gray-700",children:[e.jsx("li",{children:"浅比较限制 - 只比较第一层属性，深层对象变化可能被忽略"}),e.jsx("li",{children:"比较成本 - 对于简单组件，比较成本可能超过渲染成本"}),e.jsx("li",{children:"引用相等性 - 避免在render中创建新对象或函数作为props"}),e.jsx("li",{children:"自定义比较 - 复杂的比较逻辑可能影响性能"}),e.jsx("li",{children:"调试困难 - 可能使组件行为变得不够直观"})]})]})]}),examples:[{title:"示例1：函数组件纯组件对比",description:"使用React.memo对比普通函数组件和纯函数组件的渲染行为",component:e.jsx(j,{}),observationPoints:["普通组件在父组件每次更新时都会重新渲染","纯组件只有在props实际变化时才会重新渲染","React.memo包装函数组件实现纯组件功能","浅比较检查props的第一层属性是否变化"],keyPoints:["React.memo是函数组件的纯组件实现方式","浅比较只检查props的第一层属性变化","可以显著减少不必要的重新渲染"],commonTraps:["在render中创建新对象或函数作为props","误以为纯组件会进行深比较","对所有组件盲目使用纯组件优化"],solutions:["使用useMemo和useCallback缓存对象和函数","理解浅比较的限制，必要时使用自定义比较","只对渲染成本较高的组件使用纯组件优化"],importantTips:["React.memo通过浅比较props来决定是否重新渲染组件","纯组件优化适用于props变化频率较低的展示型组件","避免在父组件render中创建新对象，这会导致纯组件失效"],codeExample:{title:"函数组件纯组件实现",code:`// 普通函数组件
const RegularComponent: React.FC<{ name: string; age: number }> = ({
  name,
  age,
}) => {
  console.log("普通组件渲染");
  return (
    <div className="p-3 border border-gray-300 rounded bg-red-50">
      <h4 className="font-semibold text-red-700">普通组件</h4>
      <p>姓名: {name}, 年龄: {age}</p>
    </div>
  );
};

// 使用React.memo包装的纯组件
const MemoizedComponent = memo<{ name: string; age: number }>(
  ({ name, age }) => {
    console.log("纯组件渲染");  // ← 重点：只有props变化时才执行
    return (
      <div className="p-3 border border-green-300 rounded bg-green-50">
        <h4 className="font-semibold text-green-700">纯组件 (memo)</h4>
        <p>姓名: {name}, 年龄: {age}</p>  {/* ← 重点：浅比较优化 */}
      </div>
    );
  }
);`,language:"typescript",highlights:[15,17,19,23],description:"使用React.memo包装函数组件，通过浅比较props实现性能优化。"}},{title:"示例2：类组件纯组件对比",description:"使用React.PureComponent对比普通类组件和纯类组件的渲染行为",component:e.jsx(f,{}),observationPoints:["普通类组件在父组件每次更新时都会重新渲染","PureComponent会自动进行浅比较，只有props变化时才重新渲染","PureComponent是类组件的内置优化方案","控制台日志可以清晰显示渲染行为差异"],keyPoints:["PureComponent继承自Component，内置了shouldComponentUpdate优化","自动进行props和state的浅比较","适用于props和state相对稳定的类组件"],commonTraps:["在render中创建新对象或函数作为props","误以为PureComponent会进行深比较","忽略state变化也会触发浅比较"],solutions:["将对象和函数定义在组件外部或使用实例方法","理解浅比较的工作原理和限制","合理设计state结构，避免不必要的嵌套"],importantTips:["PureComponent是类组件性能优化的标准方案","相比手动实现shouldComponentUpdate，PureComponent更安全可靠","现代React开发中，函数组件+React.memo是更推荐的方案"],codeExample:{title:"类组件纯组件实现",code:`// 普通类组件
class RegularClassComponent extends Component<{ name: string; age: number }> {
  render() {
    console.log('普通类组件渲染');
    const { name, age } = this.props;
    return (
      <div className="p-3 border border-gray-300 rounded bg-red-50">
        <h4 className="font-semibold text-red-700">普通类组件</h4>
        <p>姓名: {name}, 年龄: {age}</p>
      </div>
    );
  }
}

// 纯类组件
class PureClassComponent extends PureComponent<{ name: string; age: number }> {  // ← 重点：继承PureComponent
  render() {
    console.log('纯类组件渲染');  // ← 重点：只有props变化时才执行
    const { name, age } = this.props;
    return (
      <div className="p-3 border border-green-300 rounded bg-green-50">
        <h4 className="font-semibold text-green-700">纯类组件 (PureComponent)</h4>
        <p>姓名: {name}, 年龄: {age}</p>  {/* ← 重点：自动浅比较优化 */}
      </div>
    );
  }
}`,language:"typescript",highlights:[16,23],description:"PureComponent自动实现浅比较优化，无需手动编写shouldComponentUpdate。"}},{title:"示例3：性能对比示例",description:"在列表渲染中观察纯组件的性能优势",component:e.jsx(k,{}),observationPoints:["列表项组件使用纯组件优化可以显著提升性能","普通组件在父组件更新时全部重新渲染","纯组件只有在自身props变化时才重新渲染","渲染计数器可以直观显示渲染次数差异"],keyPoints:["列表渲染是纯组件优化的典型应用场景","大量组件的重复渲染会显著影响性能","纯组件可以有效减少不必要的渲染"],commonTraps:["列表项的key值不稳定导致优化失效","父组件传递不稳定的props给列表项","忽略了渲染计数器的性能监控价值"],solutions:["使用稳定的key值，通常是数据的唯一标识","避免在父组件中创建新对象作为props","使用React DevTools Profiler监控性能"],importantTips:["列表渲染中的纯组件优化可以带来显著的性能提升","渲染计数器是调试和验证优化效果的有效工具","大型列表应该优先考虑使用纯组件优化"],codeExample:{title:"列表项纯组件优化",code:`// 普通列表项组件
const RegularListItem: React.FC<{ item: { id: number; value: string } }> = ({
  item,
}) => {
  const renderCount = useRenderCount(\`普通组件-\${item.id}\`);
  return (
    <div className="p-2 border border-gray-300 rounded bg-red-50 mb-1">
      <span className="font-medium">{item.value}</span>
      <span className="ml-2 text-sm text-gray-600">
        (渲染: {renderCount})  {/* ← 重点：每次父组件更新都会增加 */}
      </span>
    </div>
  );
};

// 纯组件列表项
const PureListItem = memo<{ item: { id: number; value: string } }>(
  ({ item }) => {  // ← 重点：memo优化
    const renderCount = useRenderCount(\`纯组件-\${item.id}\`);
    return (
      <div className="p-2 border border-green-300 rounded bg-green-50 mb-1">
        <span className="font-medium">{item.value}</span>
        <span className="ml-2 text-sm text-gray-600">
          (渲染: {renderCount})  {/* ← 重点：只有item变化时才增加 */}
        </span>
      </div>
    );
  },
  (prev, next) => prev.item.value === next.item.value  // ← 重点：自定义比较函数
);`,language:"typescript",highlights:[5,9,15,17,19,23,27],description:"在列表渲染中使用纯组件优化，通过自定义比较函数实现精确控制。"}},{title:"示例4：复杂Props处理",description:"处理嵌套对象props时的浅比较限制",component:e.jsx(S,{}),observationPoints:["浅比较只检查props的第一层属性","嵌套对象的变化可能不会被浅比较检测到","自定义比较函数可以实现深比较","深比较的性能成本需要权衡"],keyPoints:["理解浅比较的限制和适用场景","自定义比较函数提供更灵活的控制","深比较需要考虑性能成本"],commonTraps:["误以为纯组件会自动进行深比较","在自定义比较函数中执行昂贵操作","忽略嵌套对象变化导致的渲染问题"],solutions:["保持props结构扁平，避免深层嵌套","使用不可变数据结构或immutable库","合理使用自定义比较函数"],importantTips:["浅比较只检查第一层属性，嵌套对象变化可能被忽略","自定义比较函数可以实现深比较，但要注意性能成本","保持props结构简单是纯组件优化的最佳实践"],codeExample:{title:"自定义比较函数",code:`// 浅比较组件（默认行为）
const ShallowComponent = memo<{ user: any; settings: any }>(
  ({ user, settings }) => {
    const renderCount = useRenderCount("浅比较组件");
    return (
      <div className="p-3 border border-red-300 rounded bg-red-50">
        <h4 className="font-semibold text-red-700">浅比较组件</h4>
        <p>用户: {user.name}, 年龄: {user.profile.age}</p>  {/* ← 重点：嵌套属性变化可能被忽略 */}
        <p>主题: {settings.theme}</p>
        <p className="text-sm text-gray-600">渲染次数: {renderCount}</p>
      </div>
    );
  }
);

// 深比较组件（自定义比较）
const DeepComponent = memo<{ user: any; settings: any }>(
  ({ user, settings }) => {
    const renderCount = useRenderCount("深比较组件");
    return (
      <div className="p-3 border border-green-300 rounded bg-green-50">
        <h4 className="font-semibold text-green-700">深比较组件</h4>
        <p>用户: {user.name}, 年龄: {user.profile.age}</p>
        <p>主题: {settings.theme}</p>
        <p className="text-sm text-gray-600">渲染次数: {renderCount}</p>
      </div>
    );
  },
  (prevProps, nextProps) => {  // ← 重点：自定义比较函数
    // 深比较实现
    return (
      prevProps.user.name === nextProps.user.name &&
      prevProps.user.profile.age === nextProps.user.profile.age &&  // ← 重点：深层属性比较
      prevProps.settings.theme === nextProps.settings.theme
    );
  }
);`,language:"typescript",highlights:[2,8,15,17,25,27,30,32],description:"使用自定义比较函数实现深比较，精确检测嵌套对象的变化。"}},{title:"示例5：自定义比较策略",description:"实现只关心特定属性变化的自定义比较逻辑",component:e.jsx(L,{}),observationPoints:["自定义比较函数可以只关心特定属性","忽略不重要的属性变化可以进一步优化性能","比较逻辑应该简单高效","返回true表示props相等，跳过渲染"],keyPoints:["自定义比较提供精确的渲染控制","可以忽略不影响渲染的属性变化","比较函数的性能直接影响优化效果"],commonTraps:["比较函数返回值含义与shouldComponentUpdate相反","在比较函数中执行复杂或昂贵的操作","忽略了重要属性的变化检测"],solutions:["明确比较函数的返回值含义","保持比较逻辑简单高效","仔细考虑哪些属性变化需要重新渲染"],importantTips:["自定义比较函数返回true表示props相等，跳过渲染","只比较影响渲染结果的关键属性可以进一步优化性能","比较函数应该保持简单高效，避免复杂的计算逻辑"],codeExample:{title:"选择性属性比较",code:`// 只关心特定属性的自定义比较
const ProductCard = memo<{
  product: any;
  highlight?: boolean;
}>(
  ({ product, highlight }) => {
    const renderCount = useRenderCount(\`产品卡片-\${product.id}\`);
    return (
      <div
        className={\`p-3 border rounded \${
          highlight
            ? "border-yellow-400 bg-yellow-50"  // ← 重点：高亮状态
            : "border-gray-300 bg-white"
        }\`}
      >
        <h4 className="font-semibold">{product.name}</h4>
        <p className="text-green-600 font-medium">\${product.price}</p>  {/* ← 重点：只关心name和price */}
        <p className="text-sm text-gray-600">{product.category}</p>
        <p className="text-xs text-gray-500">渲染次数: {renderCount}</p>
      </div>
    );
  },
  (prevProps, nextProps) => {  // ← 重点：自定义比较函数
    // 只比较我们关心的属性
    return (
      prevProps.product.name === nextProps.product.name &&  // ← 重点：比较name
      prevProps.product.price === nextProps.product.price &&  // ← 重点：比较price
      prevProps.highlight === nextProps.highlight  // ← 重点：比较highlight
      // 注意：忽略了product.metadata等其他属性
    );
  }
);`,language:"typescript",highlights:[2,8,13,18,24,27,28,29],description:"自定义比较函数只关心特定属性，忽略不影响渲染的属性变化。"}}],codeExamples:[{title:"基础纯组件实现",code:`// 使用React.memo包装函数组件
const PureComponent = memo(({ name, age }) => {  // ← 重点：memo包装
  console.log('PureComponent 渲染');
  return (
    <div>
      <h3>纯组件</h3>
      <p>姓名: {name}, 年龄: {age}</p>
    </div>
  );
});  // ← 重点：自动浅比较props

// 类组件版本
class PureClassComponent extends PureComponent {  // ← 重点：继承PureComponent
  render() {
    const { name, age } = this.props;
    console.log('PureClassComponent 渲染');
    return (
      <div>
        <h3>纯类组件</h3>
        <p>姓名: {name}, 年龄: {age}</p>
      </div>
    );
  }
}`,language:"typescript",description:"使用React.memo包装函数组件或继承PureComponent类实现纯组件。"},{title:"自定义比较函数",code:`// 自定义比较逻辑的纯组件
const CustomCompareComponent = memo(({ user, settings }) => {
  return (
    <div>
      <p>用户: {user.name}</p>
      <p>年龄: {user.profile.age}</p>
      <p>主题: {settings.theme}</p>
    </div>
  );
}, (prevProps, nextProps) => {  // ← 重点：自定义比较函数
  // 返回true表示props相等，跳过渲染
  // 返回false表示props不同，需要重新渲染
  return (
    prevProps.user.name === nextProps.user.name &&  // ← 重点：比较用户名
    prevProps.user.profile.age === nextProps.user.profile.age &&  // ← 重点：比较年龄
    prevProps.settings.theme === nextProps.settings.theme  // ← 重点：比较主题
  );
});`,language:"typescript",description:"使用自定义比较函数实现精确的props比较逻辑。"},{title:"性能优化最佳实践",code:`// 避免在render中创建新对象
const ParentComponent = () => {
  const [count, setCount] = useState(0);

  // ❌ 错误：每次渲染都创建新对象
  const badStyle = { color: 'red', fontSize: '16px' };

  // ✅ 正确：使用useMemo缓存对象
  const goodStyle = useMemo(() => ({  // ← 重点：useMemo缓存
    color: 'red',
    fontSize: '16px'
  }), []);

  // ❌ 错误：每次渲染都创建新函数
  const badHandler = () => console.log('clicked');

  // ✅ 正确：使用useCallback缓存函数
  const goodHandler = useCallback(() => {  // ← 重点：useCallback缓存
    console.log('clicked');
  }, []);

  return (
    <div>
      <PureChildComponent
        style={goodStyle}  // ← 重点：传递稳定的对象引用
        onClick={goodHandler}  // ← 重点：传递稳定的函数引用
      />
    </div>
  );
};`,language:"typescript",description:"使用useMemo和useCallback避免在render中创建新对象，确保纯组件优化生效。"},{title:"列表渲染优化",code:`// 列表项纯组件优化
const ListItem = memo(({ item, onUpdate }) => {  // ← 重点：memo优化列表项
  console.log(\`ListItem \${item.id} 渲染\`);

  return (
    <div className="list-item">
      <h4>{item.title}</h4>
      <p>{item.description}</p>
      <button onClick={() => onUpdate(item.id)}>  // ← 重点：使用稳定的回调
        更新
      </button>
    </div>
  );
});

// 列表容器组件
const ItemList = () => {
  const [items, setItems] = useState([...]);

  // ✅ 使用useCallback确保回调函数引用稳定
  const handleUpdate = useCallback((id) => {  // ← 重点：稳定的回调函数
    setItems(prev => prev.map(item =>
      item.id === id ? { ...item, updated: true } : item
    ));
  }, []);

  return (
    <div>
      {items.map(item => (
        <ListItem
          key={item.id}  // ← 重点：稳定的key值
          item={item}
          onUpdate={handleUpdate}  // ← 重点：传递稳定的回调
        />
      ))}
    </div>
  );
};`,language:"typescript",description:"在列表渲染中使用纯组件优化，确保key值和回调函数的稳定性。"}],tutorial:{concepts:["纯组件通过浅比较props和state来避免不必要的重新渲染","React.memo是函数组件的纯组件实现，React.PureComponent是类组件的基类","浅比较只检查第一层属性，嵌套对象的变化可能被忽略","自定义比较函数可以实现更精确的比较逻辑","纯组件优化适用于props变化频率较低的展示型组件"],steps:["识别优化目标：找出渲染频繁但props变化较少的组件","应用纯组件：使用React.memo包装函数组件或继承PureComponent","避免新对象：使用useMemo和useCallback缓存对象和函数","测试效果：使用React DevTools Profiler测量性能提升","处理复杂props：必要时实现自定义比较函数","监控性能：持续监控和调整优化策略","文档记录：记录优化决策和效果，便于团队维护"],tips:["不要对所有组件都使用纯组件，只优化真正需要的组件","保持props结构简单扁平，避免深层嵌套对象","使用useMemo和useCallback确保传递给纯组件的props引用稳定","自定义比较函数要简单高效，避免复杂的计算逻辑","使用React DevTools Profiler验证优化效果","在列表渲染中优先考虑使用纯组件优化"]},interview:{questions:[{question:"React.PureComponent 和 React.Component 的区别是什么？",answer:`React.PureComponent 和 React.Component 的主要区别在于 shouldComponentUpdate 的实现。React.PureComponent 自动实现了浅比较优化，而 React.Component 默认总是重新渲染。

**核心差异：**

- **React.Component**：默认的 shouldComponentUpdate 总是返回 true，每次 setState 或父组件更新都会重新渲染
- **React.PureComponent**：自动实现了 shouldComponentUpdate，对 props 和 state 进行浅比较
- **浅比较机制**：只比较第一层属性的引用是否相等，使用 Object.is() 进行比较
- **性能优势**：可以避免不必要的重新渲染，特别适用于展示型组件

**使用场景对比：**

\`\`\`javascript
// 普通组件 - 每次都重新渲染
class RegularComponent extends Component {
  render() {
    console.log('重新渲染'); // 每次父组件更新都会执行
    return <div>{this.props.name}</div>;
  }
}

// 纯组件 - 只有 props 变化时才重新渲染
class PureComponentExample extends PureComponent {
  render() {
    console.log('重新渲染'); // 只有 name 变化时才执行
    return <div>{this.props.name}</div>;
  }
}
\`\`\``},{question:"React.memo 的第二个参数有什么作用？如何正确使用？",answer:`React.memo 的第二个参数是自定义比较函数（areEqual），用于精确控制组件的重新渲染逻辑。这个函数让开发者可以实现比默认浅比较更复杂的比较策略。

**函数签名和返回值：**

\`\`\`javascript
const MyComponent = React.memo(Component, (prevProps, nextProps) => {
  // 返回 true：props 相等，跳过重新渲染
  // 返回 false：props 不同，需要重新渲染
  return prevProps.id === nextProps.id && prevProps.name === nextProps.name;
});
\`\`\`

**注意事项：**

- **返回值含义**：与 shouldComponentUpdate 相反，true 表示不需要更新
- **性能考虑**：比较函数本身不应该有复杂的计算逻辑
- **引用比较**：可以实现深比较，但要注意性能开销

**实际应用场景：**

1. **选择性比较**：只比较关键 props
2. **深比较**：处理嵌套对象的变化
3. **复杂逻辑**：基于业务规则的比较
4. **性能优化**：避免昂贵的重新渲染`},{question:"什么情况下不应该使用纯组件？为什么？",answer:`虽然纯组件是重要的性能优化手段，但并非所有场景都适用。错误使用可能导致性能下降或功能异常。

**不适用的场景：**

**1. 高频变化的 props**
\`\`\`javascript
// ❌ 不适合：props 频繁变化
const Timer = memo(({ timestamp }) => {
  return <div>{new Date(timestamp).toLocaleString()}</div>;
});
// 每秒都更新 timestamp，memo 的比较开销大于渲染开销
\`\`\`

**2. 复杂嵌套对象**
\`\`\`javascript
// ❌ 不适合：浅比较无法检测深层变化
const UserProfile = memo(({ user }) => {
  return <div>{user.profile.settings.theme}</div>;
});
// user.profile.settings.theme 变化时，浅比较检测不到
\`\`\`

**3. 渲染成本极低的组件**
\`\`\`javascript
// ❌ 不适合：组件过于简单
const SimpleText = memo(({ text }) => <span>{text}</span>);
// 比较开销可能大于渲染开销
\`\`\`

**4. 依赖副作用的组件**
\`\`\`javascript
// ❌ 不适合：需要每次都执行副作用
const AnalyticsComponent = memo(({ event }) => {
  useEffect(() => {
    analytics.track(event); // 需要每次都执行
  });
  return null;
});
\`\`\``},{question:"如何避免纯组件优化失效？有哪些最佳实践？",answer:`纯组件优化失效通常是由于 props 引用不稳定导致的。掌握正确的模式和技巧是关键。

**核心原则：保持 props 引用稳定**

**1. 避免内联对象和函数**
\`\`\`javascript
// ❌ 错误：每次渲染都创建新对象
function Parent() {
  return (
    <PureChild 
      style={{ color: 'red' }} // 新对象引用
      onClick={() => console.log('click')} // 新函数引用
    />
  );
}

// ✅ 正确：使用稳定引用
const STYLE = { color: 'red' };
function Parent() {
  const handleClick = useCallback(() => {
    console.log('click');
  }, []);

  return (
    <PureChild 
      style={STYLE}
      onClick={handleClick}
    />
  );
}
\`\`\`

**2. 合理使用 useMemo 和 useCallback**
\`\`\`javascript
function Parent({ items, filter }) {
  // ✅ 缓存计算结果
  const filteredItems = useMemo(() => {
    return items.filter(item => item.category === filter);
  }, [items, filter]);

  // ✅ 缓存事件处理函数
  const handleItemClick = useCallback((id) => {
    // 处理点击事件
  }, []);

  return (
    <PureItemList 
      items={filteredItems}
      onItemClick={handleItemClick}
    />
  );
}
\`\`\`

**3. 列表渲染优化**
\`\`\`javascript
// ✅ 稳定的 key 和 props
function ItemList({ items }) {
  return items.map(item => (
    <PureItem
      key={item.id} // 稳定的 key
      item={item}
      onUpdate={handleUpdate} // 稳定的回调
    />
  ));
}
\`\`\``},{question:"React.memo 和 useMemo 的区别是什么？什么时候使用哪个？",answer:`React.memo 和 useMemo 都是性能优化工具，但作用对象和使用场景完全不同。理解它们的区别对于正确的性能优化至关重要。

**核心区别：**

| 特性 | React.memo | useMemo |
|------|------------|---------|
| **作用对象** | 整个组件 | 计算值/对象 |
| **优化目标** | 避免组件重新渲染 | 避免重复计算 |
| **使用位置** | 组件定义时 | 组件内部 |
| **返回值** | 优化后的组件 | 缓存的值 |

**React.memo 使用场景：**
\`\`\`javascript
// 优化整个组件的重新渲染
const ExpensiveComponent = memo(({ data }) => {
  // 复杂的渲染逻辑
  return (
    <div>
      {data.map(item => (
        <ComplexItem key={item.id} item={item} />
      ))}
    </div>
  );
});
\`\`\`

**useMemo 使用场景：**
\`\`\`javascript
function Component({ items, filter }) {
  // 优化昂贵的计算
  const expensiveValue = useMemo(() => {
    return items
      .filter(item => item.category === filter)
      .sort((a, b) => a.priority - b.priority)
      .slice(0, 10);
  }, [items, filter]);

  // 优化对象引用稳定性
  const config = useMemo(() => ({
    theme: 'dark',
    layout: 'grid'
  }), []);

  return <ExpensiveComponent data={expensiveValue} config={config} />;
}
\`\`\`

**组合使用模式：**
\`\`\`javascript
// 父组件使用 useMemo 优化 props
function Parent({ rawData }) {
  const processedData = useMemo(() => {
    return rawData.map(item => ({
      ...item,
      displayName: \`\${item.firstName} \${item.lastName}\`
    }));
  }, [rawData]);

  return <MemoizedChild data={processedData} />;
}

// 子组件使用 memo 避免重新渲染
const MemoizedChild = memo(({ data }) => {
  return (
    <div>
      {data.map(item => (
        <div key={item.id}>{item.displayName}</div>
      ))}
    </div>
  );
});
\`\`\``},{question:"如何在大型列表中正确使用纯组件优化？",answer:`大型列表是纯组件优化最能发挥作用的场景之一。正确的优化策略可以显著提升性能，但也需要注意一些关键点。

**基础优化模式：**
\`\`\`javascript
// 列表项组件优化
const ListItem = memo(({ item, onUpdate, onDelete }) => {
  console.log(\`ListItem \${item.id} 渲染\`);
  
  return (
    <div className="list-item">
      <h4>{item.title}</h4>
      <p>{item.description}</p>
      <button onClick={() => onUpdate(item.id)}>更新</button>
      <button onClick={() => onDelete(item.id)}>删除</button>
    </div>
  );
});

// 列表容器组件
function ItemList({ items }) {
  // ✅ 使用 useCallback 确保回调函数引用稳定
  const handleUpdate = useCallback((id) => {
    setItems(prev => prev.map(item =>
      item.id === id ? { ...item, updated: true } : item
    ));
  }, []);

  const handleDelete = useCallback((id) => {
    setItems(prev => prev.filter(item => item.id !== id));
  }, []);

  return (
    <div>
      {items.map(item => (
        <ListItem
          key={item.id} // ✅ 稳定的 key
          item={item}
          onUpdate={handleUpdate} // ✅ 稳定的回调
          onDelete={handleDelete}
        />
      ))}
    </div>
  );
}
\`\`\`

**高级优化技巧：**

**1. 自定义比较函数**
\`\`\`javascript
const ListItem = memo(({ item, isSelected, onSelect }) => {
  return (
    <div 
      className={isSelected ? 'selected' : ''}
      onClick={() => onSelect(item.id)}
    >
      {item.title}
    </div>
  );
}, (prevProps, nextProps) => {
  // 只比较关键属性
  return (
    prevProps.item.id === nextProps.item.id &&
    prevProps.item.title === nextProps.item.title &&
    prevProps.isSelected === nextProps.isSelected
  );
});
\`\`\`

**2. 虚拟化结合纯组件**
\`\`\`javascript
import { FixedSizeList as List } from 'react-window';

const VirtualizedItem = memo(({ index, style, data }) => {
  const item = data[index];
  return (
    <div style={style}>
      <ListItem item={item} />
    </div>
  );
});

function VirtualizedList({ items }) {
  return (
    <List
      height={600}
      itemCount={items.length}
      itemSize={80}
      itemData={items}
    >
      {VirtualizedItem}
    </List>
  );
}
\`\`\``},{question:"纯组件的浅比较是如何实现的？有什么限制？",answer:`理解浅比较的实现原理对于正确使用纯组件至关重要。浅比较的限制也决定了我们需要采用特定的编程模式。

**浅比较实现原理：**

\`\`\`javascript
// React 内部浅比较的简化实现
function shallowEqual(objA, objB) {
  if (Object.is(objA, objB)) {
    return true;
  }

  if (typeof objA !== 'object' || objA === null ||
      typeof objB !== 'object' || objB === null) {
    return false;
  }

  const keysA = Object.keys(objA);
  const keysB = Object.keys(objB);

  if (keysA.length !== keysB.length) {
    return false;
  }

  // 只比较第一层属性
  for (let i = 0; i < keysA.length; i++) {
    const key = keysA[i];
    if (!objB.hasOwnProperty(key) || 
        !Object.is(objA[key], objB[key])) {
      return false;
    }
  }

  return true;
}
\`\`\`

**浅比较的限制：**

**1. 嵌套对象变化检测不到**
\`\`\`javascript
const user1 = { name: 'John', profile: { age: 25 } };
const user2 = { name: 'John', profile: { age: 26 } };

// 浅比较结果：false（profile 引用不同）
// 但如果是：
user1.profile.age = 26; // 修改原对象
const user2 = user1;
// 浅比较结果：true（引用相同），但实际内容已变化
\`\`\`

**2. 数组内容变化**
\`\`\`javascript
const items1 = [{ id: 1, name: 'A' }];
const items2 = [{ id: 1, name: 'B' }]; // 内容不同但结构相同

// 浅比较：false（数组引用不同）
// 但无法检测到具体哪个元素变化
\`\`\`

**3. 函数和对象的引用比较**
\`\`\`javascript
// ❌ 每次都是新引用
function Parent() {
  return (
    <PureChild 
      onClick={() => {}} // 新函数引用
      style={{ color: 'red' }} // 新对象引用
    />
  );
}

// ✅ 稳定引用
const STYLE = { color: 'red' };
function Parent() {
  const handleClick = useCallback(() => {}, []);
  return <PureChild onClick={handleClick} style={STYLE} />;
}
\`\`\`

**应对策略：**

1. **使用不可变数据结构**
2. **合理使用 useMemo/useCallback**
3. **自定义比较函数处理复杂场景**
4. **保持 props 结构扁平化**`}],keyPoints:["**浅比较机制**：React.memo 和 PureComponent 都使用 Object.is() 进行第一层属性比较，不会递归比较嵌套对象","**引用稳定性**：避免在 render 中创建新对象、数组或函数，这会导致每次都产生新的引用，使优化失效","**性能权衡**：比较成本 vs 渲染成本，只有当渲染成本高于比较成本时，纯组件优化才有意义","**适用场景**：纯组件最适合展示型组件、列表项组件、以及 props 相对稳定的组件","**Hook 配合**：合理使用 useMemo、useCallback、useState 的函数式更新来保持引用稳定","**自定义比较**：通过 React.memo 的第二个参数可以实现深比较、选择性比较等高级优化策略","**调试技巧**：使用 React DevTools Profiler 和 console.log 来验证组件是否按预期跳过渲染","**常见陷阱**：内联样式对象、箭头函数、每次渲染创建的配置对象都会破坏优化效果","**列表优化**：在大型列表中，纯组件配合稳定的 key 和回调函数可以显著提升性能","**不可变数据**：配合 Immutable.js、Immer 等库可以更好地利用浅比较的优势","**组件拆分**：将频繁变化的部分和稳定的部分拆分成不同组件，提高优化效果","**批量更新**：React 18 的自动批处理特性与纯组件优化相结合，可以进一步提升性能"]},bestPractices:{dos:["对渲染成本较高的展示型组件使用纯组件优化","在列表渲染中使用纯组件优化列表项性能","使用 useMemo 和 useCallback 缓存传递给纯组件的对象和函数","保持 props 结构简单，避免深层嵌套对象","使用稳定的 key 值，特别是在列表渲染中","合理使用不可变数据结构提升比较效率"],donts:["不要在 render 方法中创建新对象或数组作为 props","不要在 render 方法中创建新函数作为 props","不要对 props 频繁变化的组件使用纯组件优化","不要忽略纯组件的比较开销，确保优化有实际价值","不要在纯组件中使用不稳定的内联样式对象"],patterns:["使用 React.memo 包装函数组件实现纯组件","使用 useMemo 缓存复杂计算结果和对象","使用 useCallback 缓存事件处理函数","使用自定义比较函数实现深比较或选择性比较","结合 Immutable.js 或 immer 实现不可变数据更新","列表优化模式 - 在列表渲染中使用纯组件优化列表项","缓存优化模式 - 使用 useMemo/useCallback 缓存 props","自定义比较模式 - 实现精确的 props 比较逻辑","性能监控模式 - 使用工具测量和验证优化效果","渐进优化模式 - 从性能瓶颈组件开始逐步优化","组件库优化模式 - 在可复用组件中合理使用纯组件","深比较模式 - 处理复杂嵌套对象的比较需求"]}};return e.jsx(x,{...n})};export{T as default};
