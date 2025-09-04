import{r as d,j as e}from"./index-H7t66yxh.js";import{C as N}from"./ComponentTemplate-bNJaV0ol.js";function p(r=0,s={}){const{min:n,max:l,step:t=1}=s,[a,o]=d.useState(r),i=d.useCallback(()=>{o(c=>{const m=c+t;return l!==void 0?Math.min(m,l):m})},[t,l]),u=d.useCallback(()=>{o(c=>{const m=c-t;return n!==void 0?Math.max(m,n):m})},[t,n]),g=d.useCallback(()=>{o(r)},[r]),x=d.useCallback(c=>{o(c)},[]);return{count:a,increment:i,decrement:u,reset:g,set:x}}const f=()=>{const r=p(0,{min:0,max:10,step:1}),s=p(5,{step:2}),n=p(100,{min:50,max:150,step:5});return e.jsxs("div",{className:"space-y-6",children:[e.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-3 gap-4",children:[e.jsxs("div",{className:"p-4 border rounded-lg",children:[e.jsx("h4",{className:"font-semibold mb-3",children:"基础计数器 (0-10)"}),e.jsxs("div",{className:"text-center",children:[e.jsx("div",{className:"text-2xl font-bold mb-3 text-blue-600",children:r.count}),e.jsxs("div",{className:"flex gap-2 justify-center",children:[e.jsx("button",{onClick:r.decrement,className:"px-3 py-1 bg-red-500 text-white rounded hover:bg-red-600",disabled:r.count<=0,children:"-1"}),e.jsx("button",{onClick:r.increment,className:"px-3 py-1 bg-green-500 text-white rounded hover:bg-green-600",disabled:r.count>=10,children:"+1"})]}),e.jsxs("div",{className:"flex gap-2 justify-center mt-2",children:[e.jsx("button",{onClick:r.reset,className:"px-3 py-1 bg-gray-500 text-white rounded hover:bg-gray-600",children:"重置"}),e.jsx("button",{onClick:()=>r.set(5),className:"px-3 py-1 bg-blue-500 text-white rounded hover:bg-blue-600",children:"设为5"})]})]})]}),e.jsxs("div",{className:"p-4 border rounded-lg",children:[e.jsx("h4",{className:"font-semibold mb-3",children:"步长计数器 (步长=2)"}),e.jsxs("div",{className:"text-center",children:[e.jsx("div",{className:"text-2xl font-bold mb-3 text-green-600",children:s.count}),e.jsxs("div",{className:"flex gap-2 justify-center",children:[e.jsx("button",{onClick:s.decrement,className:"px-3 py-1 bg-red-500 text-white rounded hover:bg-red-600",children:"-2"}),e.jsx("button",{onClick:s.increment,className:"px-3 py-1 bg-green-500 text-white rounded hover:bg-green-600",children:"+2"})]}),e.jsxs("div",{className:"flex gap-2 justify-center mt-2",children:[e.jsx("button",{onClick:s.reset,className:"px-3 py-1 bg-gray-500 text-white rounded hover:bg-gray-600",children:"重置"}),e.jsx("button",{onClick:()=>s.set(10),className:"px-3 py-1 bg-blue-500 text-white rounded hover:bg-blue-600",children:"设为10"})]})]})]}),e.jsxs("div",{className:"p-4 border rounded-lg",children:[e.jsx("h4",{className:"font-semibold mb-3",children:"范围计数器 (50-150, 步长=5)"}),e.jsxs("div",{className:"text-center",children:[e.jsx("div",{className:"text-2xl font-bold mb-3 text-purple-600",children:n.count}),e.jsxs("div",{className:"flex gap-2 justify-center",children:[e.jsx("button",{onClick:n.decrement,className:"px-3 py-1 bg-red-500 text-white rounded hover:bg-red-600",disabled:n.count<=50,children:"-5"}),e.jsx("button",{onClick:n.increment,className:"px-3 py-1 bg-green-500 text-white rounded hover:bg-green-600",disabled:n.count>=150,children:"+5"})]}),e.jsxs("div",{className:"flex gap-2 justify-center mt-2",children:[e.jsx("button",{onClick:n.reset,className:"px-3 py-1 bg-gray-500 text-white rounded hover:bg-gray-600",children:"重置"}),e.jsx("button",{onClick:()=>n.set(100),className:"px-3 py-1 bg-blue-500 text-white rounded hover:bg-blue-600",children:"设为100"})]})]})]})]}),e.jsxs("div",{className:"text-sm text-gray-600 bg-gray-50 p-3 rounded",children:[e.jsx("strong",{children:"观察要点："}),"每个计数器都有独立的状态，展示了自定义Hook的状态隔离特性。不同的配置选项（最小值、最大值、步长）展示了Hook的灵活性。"]})]})};function b(r,s){const[n,l]=d.useState(()=>{try{const a=window.localStorage.getItem(r);return a?JSON.parse(a):s}catch(a){return console.error("Error reading localStorage:",a),s}});return[n,a=>{try{const o=a instanceof Function?a(n):a;l(o),window.localStorage.setItem(r,JSON.stringify(o))}catch(o){console.error("Error setting localStorage:",o)}}]}const y=()=>{const[r,s]=b("user-name",""),[n,l]=b("user-settings",{theme:"light",notifications:!0}),[t,a]=b("demo-count",0);return e.jsxs("div",{className:"space-y-6",children:[e.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-6",children:[e.jsxs("div",{className:"p-4 border rounded-lg",children:[e.jsx("h4",{className:"font-semibold mb-3",children:"字符串存储"}),e.jsxs("div",{className:"space-y-3",children:[e.jsx("input",{type:"text",value:r,onChange:o=>s(o.target.value),placeholder:"输入你的名字",className:"w-full px-3 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500"}),e.jsxs("p",{className:"text-sm text-gray-600",children:["存储的值:"," ",e.jsx("span",{className:"font-mono bg-gray-100 px-1 rounded",children:r||"(空)"})]}),e.jsx("button",{onClick:()=>s(""),className:"px-3 py-1 bg-red-500 text-white rounded hover:bg-red-600",children:"清空"})]})]}),e.jsxs("div",{className:"p-4 border rounded-lg",children:[e.jsx("h4",{className:"font-semibold mb-3",children:"对象存储"}),e.jsxs("div",{className:"space-y-3",children:[e.jsxs("div",{className:"flex items-center gap-2",children:[e.jsx("label",{className:"text-sm",children:"主题:"}),e.jsxs("select",{value:n.theme,onChange:o=>l({...n,theme:o.target.value}),className:"px-2 py-1 border rounded",children:[e.jsx("option",{value:"light",children:"浅色"}),e.jsx("option",{value:"dark",children:"深色"})]})]}),e.jsxs("div",{className:"flex items-center gap-2",children:[e.jsx("label",{className:"text-sm",children:"通知:"}),e.jsx("input",{type:"checkbox",checked:n.notifications,onChange:o=>l({...n,notifications:o.target.checked}),className:"rounded"})]}),e.jsxs("div",{className:"text-sm text-gray-600",children:[e.jsx("div",{children:"存储的设置:"}),e.jsx("pre",{className:"bg-gray-100 p-2 rounded text-xs mt-1",children:JSON.stringify(n,null,2)})]})]})]})]}),e.jsxs("div",{className:"p-4 border rounded-lg",children:[e.jsx("h4",{className:"font-semibold mb-3",children:"数字存储 (函数式更新)"}),e.jsxs("div",{className:"flex items-center gap-4",children:[e.jsxs("span",{className:"text-lg font-semibold",children:["计数: ",t]}),e.jsxs("div",{className:"flex gap-2",children:[e.jsx("button",{onClick:()=>a(o=>o+1),className:"px-3 py-1 bg-green-500 text-white rounded hover:bg-green-600",children:"+1"}),e.jsx("button",{onClick:()=>a(o=>o-1),className:"px-3 py-1 bg-red-500 text-white rounded hover:bg-red-600",children:"-1"}),e.jsx("button",{onClick:()=>a(0),className:"px-3 py-1 bg-gray-500 text-white rounded hover:bg-gray-600",children:"重置"})]})]})]}),e.jsxs("div",{className:"text-sm text-gray-600 bg-gray-50 p-3 rounded",children:[e.jsx("strong",{children:"观察要点："}),"刷新页面后数据仍然保持，展示了localStorage的持久化特性。支持字符串、对象、数字等不同类型的数据存储。"]})]})};function j(r){const[s,n]=d.useState({data:null,loading:!0,error:null}),l=d.useCallback(async()=>{n(t=>({...t,loading:!0,error:null}));try{await new Promise(a=>setTimeout(a,1e3));const t={users:["Alice","Bob","Charlie"],timestamp:new Date().toISOString()};n({data:t,loading:!1,error:null})}catch(t){n({data:null,loading:!1,error:t instanceof Error?t.message:"Unknown error"})}},[]);return d.useEffect(()=>{l()},[l]),{...s,refetch:l}}const k=()=>{const{data:r,loading:s,error:n,refetch:l}=j();return e.jsxs("div",{className:"space-y-4",children:[e.jsxs("div",{className:"flex items-center gap-4",children:[e.jsx("h4",{className:"font-semibold",children:"数据获取状态"}),e.jsx("button",{onClick:l,disabled:s,className:"px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 disabled:opacity-50",children:s?"获取中...":"重新获取"})]}),e.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-3 gap-4",children:[e.jsxs("div",{className:"p-4 border rounded-lg",children:[e.jsx("h5",{className:"font-medium mb-2",children:"加载状态"}),e.jsx("div",{className:`px-3 py-2 rounded text-center ${s?"bg-yellow-100 text-yellow-800":"bg-green-100 text-green-800"}`,children:s?"正在加载...":"加载完成"})]}),e.jsxs("div",{className:"p-4 border rounded-lg",children:[e.jsx("h5",{className:"font-medium mb-2",children:"错误状态"}),e.jsx("div",{className:`px-3 py-2 rounded text-center ${n?"bg-red-100 text-red-800":"bg-green-100 text-green-800"}`,children:n||"无错误"})]}),e.jsxs("div",{className:"p-4 border rounded-lg",children:[e.jsx("h5",{className:"font-medium mb-2",children:"数据状态"}),e.jsx("div",{className:`px-3 py-2 rounded text-center ${r?"bg-blue-100 text-blue-800":"bg-gray-100 text-gray-800"}`,children:r?"有数据":"无数据"})]})]}),r&&e.jsxs("div",{className:"p-4 border rounded-lg bg-gray-50",children:[e.jsx("h5",{className:"font-medium mb-2",children:"获取的数据"}),e.jsxs("div",{className:"space-y-2",children:[e.jsxs("div",{children:[e.jsx("strong",{children:"用户列表:"}),e.jsx("ul",{className:"list-disc list-inside ml-4",children:r.users.map((t,a)=>e.jsx("li",{children:t},a))})]}),e.jsxs("div",{children:[e.jsx("strong",{children:"时间戳:"})," ",r.timestamp]})]})]}),e.jsxs("div",{className:"text-sm text-gray-600 bg-gray-50 p-3 rounded",children:[e.jsx("strong",{children:"观察要点："}),"Hook管理了loading、error、data三个状态，提供了完整的异步操作状态管理。refetch方法允许手动重新获取数据。"]})]})};function v(r=!1){const[s,n]=d.useState(r),l=d.useCallback(()=>{n(a=>!a)},[]),t=d.useCallback(a=>{n(a)},[]);return[s,l,t]}const C=()=>{const[r,s,n]=v(!1),[l,t,a]=v(!0),[o,i,u]=v(!1);return e.jsxs("div",{className:"space-y-6",children:[e.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-3 gap-4",children:[e.jsxs("div",{className:"p-4 border rounded-lg",children:[e.jsx("h4",{className:"font-semibold mb-3",children:"可见性切换"}),e.jsxs("div",{className:"space-y-3",children:[e.jsxs("div",{className:"flex gap-2",children:[e.jsx("button",{onClick:s,className:"px-3 py-1 bg-blue-500 text-white rounded hover:bg-blue-600",children:"切换"}),e.jsx("button",{onClick:()=>n(!0),className:"px-3 py-1 bg-green-500 text-white rounded hover:bg-green-600",children:"显示"}),e.jsx("button",{onClick:()=>n(!1),className:"px-3 py-1 bg-red-500 text-white rounded hover:bg-red-600",children:"隐藏"})]}),r&&e.jsx("div",{className:"p-3 bg-blue-100 text-blue-800 rounded",children:"这是一个可切换显示的内容！"}),e.jsxs("p",{className:"text-sm text-gray-600",children:["状态: ",r?"显示":"隐藏"]})]})]}),e.jsxs("div",{className:"p-4 border rounded-lg",children:[e.jsx("h4",{className:"font-semibold mb-3",children:"启用状态切换"}),e.jsxs("div",{className:"space-y-3",children:[e.jsxs("div",{className:"flex gap-2",children:[e.jsx("button",{onClick:t,className:"px-3 py-1 bg-purple-500 text-white rounded hover:bg-purple-600",children:"切换状态"}),e.jsx("button",{onClick:()=>a(!0),className:"px-3 py-1 bg-green-500 text-white rounded hover:bg-green-600",children:"启用"}),e.jsx("button",{onClick:()=>a(!1),className:"px-3 py-1 bg-red-500 text-white rounded hover:bg-red-600",children:"禁用"})]}),e.jsx("button",{disabled:!l,className:`w-full px-3 py-2 rounded ${l?"bg-blue-500 text-white hover:bg-blue-600":"bg-gray-300 text-gray-500 cursor-not-allowed"}`,children:l?"功能已启用":"功能已禁用"}),e.jsxs("p",{className:"text-sm text-gray-600",children:["状态: ",l?"启用":"禁用"]})]})]}),e.jsxs("div",{className:"p-4 border rounded-lg",children:[e.jsx("h4",{className:"font-semibold mb-3",children:"主题切换"}),e.jsxs("div",{className:"space-y-3",children:[e.jsxs("div",{className:"flex gap-2",children:[e.jsx("button",{onClick:i,className:"px-3 py-1 bg-gray-800 text-white rounded hover:bg-gray-900",children:"切换主题"}),e.jsx("button",{onClick:()=>u(!1),className:"px-3 py-1 bg-yellow-500 text-white rounded hover:bg-yellow-600",children:"浅色"}),e.jsx("button",{onClick:()=>u(!0),className:"px-3 py-1 bg-gray-800 text-white rounded hover:bg-gray-900",children:"深色"})]}),e.jsxs("div",{className:`p-3 rounded transition-colors ${o?"bg-gray-800 text-white":"bg-yellow-100 text-yellow-800"}`,children:["当前主题: ",o?"深色模式":"浅色模式"]}),e.jsxs("p",{className:"text-sm text-gray-600",children:["状态: ",o?"深色":"浅色"]})]})]})]}),e.jsxs("div",{className:"text-sm text-gray-600 bg-gray-50 p-3 rounded",children:[e.jsx("strong",{children:"观察要点："}),"useToggle简化了布尔值状态的管理，提供了切换和直接设置两种操作方式。每个实例都有独立的状态。"]})]})};function w(r,s){const[n,l]=d.useState(r);return d.useEffect(()=>{const t=setTimeout(()=>{l(r)},s);return()=>{clearTimeout(t)}},[r,s]),n}const S=()=>{const[r,s]=d.useState(""),[n,l]=d.useState(500),t=w(r,n),a=["Apple","Banana","Cherry","Date","Elderberry","Fig","Grape","Honeydew","Kiwi","Lemon","Mango","Orange","Papaya","Quince","Raspberry"],o=t?a.filter(i=>i.toLowerCase().includes(t.toLowerCase())):a;return e.jsxs("div",{className:"space-y-6",children:[e.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-4",children:[e.jsxs("div",{className:"p-4 border rounded-lg",children:[e.jsx("h4",{className:"font-semibold mb-3",children:"搜索输入"}),e.jsx("input",{type:"text",value:r,onChange:i=>s(i.target.value),placeholder:"输入搜索关键词...",className:"w-full px-3 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500"}),e.jsxs("p",{className:"text-sm text-gray-600 mt-2",children:["当前输入:"," ",e.jsx("span",{className:"font-mono bg-gray-100 px-1 rounded",children:r||"(空)"})]})]}),e.jsxs("div",{className:"p-4 border rounded-lg",children:[e.jsx("h4",{className:"font-semibold mb-3",children:"防抖设置"}),e.jsxs("div",{className:"space-y-2",children:[e.jsxs("label",{className:"block text-sm font-medium",children:["延迟时间: ",n,"ms"]}),e.jsx("input",{type:"range",min:"100",max:"2000",step:"100",value:n,onChange:i=>l(Number(i.target.value)),className:"w-full"}),e.jsxs("div",{className:"flex justify-between text-xs text-gray-500",children:[e.jsx("span",{children:"100ms"}),e.jsx("span",{children:"2000ms"})]})]}),e.jsxs("p",{className:"text-sm text-gray-600 mt-2",children:["防抖值:"," ",e.jsx("span",{className:"font-mono bg-gray-100 px-1 rounded",children:t||"(空)"})]})]})]}),e.jsxs("div",{className:"p-4 border rounded-lg",children:[e.jsxs("h4",{className:"font-semibold mb-3",children:["搜索结果 (",o.length," 项)"]}),e.jsx("div",{className:"grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-2",children:o.map((i,u)=>e.jsx("div",{className:"px-3 py-2 bg-blue-100 text-blue-800 rounded text-center text-sm",children:i},u))}),o.length===0&&e.jsx("div",{className:"text-center text-gray-500 py-8",children:"没有找到匹配的结果"})]}),e.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-4",children:[e.jsxs("div",{className:"p-4 border rounded-lg bg-red-50",children:[e.jsx("h5",{className:"font-medium mb-2 text-red-800",children:"实时搜索 (无防抖)"}),e.jsx("p",{className:"text-sm text-red-600",children:"每次输入都会立即触发搜索，可能导致性能问题"}),e.jsxs("div",{className:"mt-2 text-xs font-mono bg-red-100 p-2 rounded",children:['搜索词: "',r,'"']})]}),e.jsxs("div",{className:"p-4 border rounded-lg bg-green-50",children:[e.jsx("h5",{className:"font-medium mb-2 text-green-800",children:"防抖搜索"}),e.jsxs("p",{className:"text-sm text-green-600",children:["等待用户停止输入",n,"ms后才触发搜索，优化性能"]}),e.jsxs("div",{className:"mt-2 text-xs font-mono bg-green-100 p-2 rounded",children:['搜索词: "',t,'"']})]})]}),e.jsxs("div",{className:"text-sm text-gray-600 bg-gray-50 p-3 rounded",children:[e.jsx("strong",{children:"观察要点："}),"防抖Hook延迟了值的更新，只有在指定时间内没有新的变化时才会更新。这在搜索、API调用等场景中非常有用。"]})]})};function h(r){const s=d.useRef();return d.useEffect(()=>{s.current=r}),s.current}const H=()=>{const[r,s]=d.useState(0),[n,l]=d.useState("Alice"),[t,a]=d.useState("blue"),o=h(r),i=h(n),u=h(t),g=["Alice","Bob","Charlie","Diana","Eve"],x=["blue","red","green","purple","orange"];return e.jsxs("div",{className:"space-y-6",children:[e.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-3 gap-4",children:[e.jsxs("div",{className:"p-4 border rounded-lg",children:[e.jsx("h4",{className:"font-semibold mb-3",children:"数字值变化"}),e.jsxs("div",{className:"space-y-3",children:[e.jsxs("div",{className:"text-center",children:[e.jsx("div",{className:"text-2xl font-bold text-blue-600 mb-2",children:r}),e.jsxs("div",{className:"flex gap-2 justify-center",children:[e.jsx("button",{onClick:()=>s(c=>c-1),className:"px-3 py-1 bg-red-500 text-white rounded hover:bg-red-600",children:"-1"}),e.jsx("button",{onClick:()=>s(c=>c+1),className:"px-3 py-1 bg-green-500 text-white rounded hover:bg-green-600",children:"+1"})]})]}),e.jsxs("div",{className:"text-sm space-y-1",children:[e.jsxs("div",{children:["当前值:"," ",e.jsx("span",{className:"font-mono bg-blue-100 px-1 rounded",children:r})]}),e.jsxs("div",{children:["前一个值:"," ",e.jsx("span",{className:"font-mono bg-gray-100 px-1 rounded",children:o!==void 0?o:"undefined"})]}),e.jsx("div",{className:"text-xs text-gray-500",children:o!==void 0&&e.jsxs("span",{children:["变化: ",r>o?"+":"",r-o]})})]})]})]}),e.jsxs("div",{className:"p-4 border rounded-lg",children:[e.jsx("h4",{className:"font-semibold mb-3",children:"字符串值变化"}),e.jsxs("div",{className:"space-y-3",children:[e.jsxs("div",{className:"text-center",children:[e.jsx("div",{className:"text-lg font-semibold text-green-600 mb-2",children:n}),e.jsx("div",{className:"flex flex-wrap gap-1 justify-center",children:g.map(c=>e.jsx("button",{onClick:()=>l(c),className:`px-2 py-1 text-xs rounded ${c===n?"bg-green-500 text-white":"bg-gray-200 hover:bg-gray-300"}`,children:c},c))})]}),e.jsxs("div",{className:"text-sm space-y-1",children:[e.jsxs("div",{children:["当前值:"," ",e.jsx("span",{className:"font-mono bg-green-100 px-1 rounded",children:n})]}),e.jsxs("div",{children:["前一个值:"," ",e.jsx("span",{className:"font-mono bg-gray-100 px-1 rounded",children:i!==void 0?i:"undefined"})]}),e.jsx("div",{className:"text-xs text-gray-500",children:i!==void 0&&i!==n&&e.jsxs("span",{children:['从 "',i,'" 变为 "',n,'"']})})]})]})]}),e.jsxs("div",{className:"p-4 border rounded-lg",children:[e.jsx("h4",{className:"font-semibold mb-3",children:"颜色值变化"}),e.jsxs("div",{className:"space-y-3",children:[e.jsxs("div",{className:"text-center",children:[e.jsx("div",{className:`w-16 h-16 mx-auto mb-2 rounded-full bg-${t}-500`}),e.jsx("div",{className:"flex flex-wrap gap-1 justify-center",children:x.map(c=>e.jsx("button",{onClick:()=>a(c),className:`w-6 h-6 rounded-full bg-${c}-500 border-2 ${c===t?"border-gray-800":"border-gray-300"}`,title:c},c))})]}),e.jsxs("div",{className:"text-sm space-y-1",children:[e.jsxs("div",{children:["当前颜色:"," ",e.jsx("span",{className:"font-mono bg-purple-100 px-1 rounded",children:t})]}),e.jsxs("div",{children:["前一个颜色:"," ",e.jsx("span",{className:"font-mono bg-gray-100 px-1 rounded",children:u!==void 0?u:"undefined"})]}),e.jsx("div",{className:"text-xs text-gray-500",children:u!==void 0&&u!==t&&e.jsxs("span",{children:["颜色从 ",u," 变为 ",t]})})]})]})]})]}),e.jsxs("div",{className:"p-4 border rounded-lg bg-gray-50",children:[e.jsx("h4",{className:"font-semibold mb-3",children:"动画效果演示"}),e.jsxs("div",{className:"flex items-center justify-center space-x-8",children:[e.jsxs("div",{className:"text-center",children:[e.jsx("div",{className:"text-sm text-gray-600 mb-1",children:"当前"}),e.jsx("div",{className:`w-20 h-20 rounded-lg bg-${t}-500 flex items-center justify-center text-white font-bold text-lg transition-all duration-300`,children:r}),e.jsx("div",{className:"text-sm mt-1 font-mono",children:n})]}),e.jsx("div",{className:"text-2xl text-gray-400",children:"→"}),e.jsxs("div",{className:"text-center",children:[e.jsx("div",{className:"text-sm text-gray-600 mb-1",children:"前一个"}),e.jsx("div",{className:`w-20 h-20 rounded-lg ${u?`bg-${u}-300`:"bg-gray-300"} flex items-center justify-center text-white font-bold text-lg opacity-60`,children:o!==void 0?o:"?"}),e.jsx("div",{className:"text-sm mt-1 font-mono",children:i!==void 0?i:"undefined"})]})]})]}),e.jsxs("div",{className:"text-sm text-gray-600 bg-gray-50 p-3 rounded",children:[e.jsx("strong",{children:"观察要点："}),"usePrevious Hook使用useRef存储前一个值，不会触发重新渲染。首次渲染时返回undefined，之后返回前一次的值。"]})]})},T=`import React from "react";\r
import { useCounter } from "./useCounter";\r
\r
const UseCounterExample: React.FC = () => {\r
  const counter1 = useCounter(0, { min: 0, max: 10, step: 1 });\r
  const counter2 = useCounter(5, { step: 2 });\r
  const counter3 = useCounter(100, { min: 50, max: 150, step: 5 });\r
\r
  return (\r
    <div className="space-y-6">\r
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">\r
        {/* 基础计数器 */}\r
        <div className="p-4 border rounded-lg">\r
          <h4 className="font-semibold mb-3">基础计数器 (0-10)</h4>\r
          <div className="text-center">\r
            <div className="text-2xl font-bold mb-3 text-blue-600">\r
              {counter1.count}\r
            </div>\r
            <div className="flex gap-2 justify-center">\r
              <button\r
                onClick={counter1.decrement}\r
                className="px-3 py-1 bg-red-500 text-white rounded hover:bg-red-600"\r
                disabled={counter1.count <= 0}\r
              >\r
                -1\r
              </button>\r
              <button\r
                onClick={counter1.increment}\r
                className="px-3 py-1 bg-green-500 text-white rounded hover:bg-green-600"\r
                disabled={counter1.count >= 10}\r
              >\r
                +1\r
              </button>\r
            </div>\r
            <div className="flex gap-2 justify-center mt-2">\r
              <button\r
                onClick={counter1.reset}\r
                className="px-3 py-1 bg-gray-500 text-white rounded hover:bg-gray-600"\r
              >\r
                重置\r
              </button>\r
              <button\r
                onClick={() => counter1.set(5)}\r
                className="px-3 py-1 bg-blue-500 text-white rounded hover:bg-blue-600"\r
              >\r
                设为5\r
              </button>\r
            </div>\r
          </div>\r
        </div>\r
\r
        {/* 步长计数器 */}\r
        <div className="p-4 border rounded-lg">\r
          <h4 className="font-semibold mb-3">步长计数器 (步长=2)</h4>\r
          <div className="text-center">\r
            <div className="text-2xl font-bold mb-3 text-green-600">\r
              {counter2.count}\r
            </div>\r
            <div className="flex gap-2 justify-center">\r
              <button\r
                onClick={counter2.decrement}\r
                className="px-3 py-1 bg-red-500 text-white rounded hover:bg-red-600"\r
              >\r
                -2\r
              </button>\r
              <button\r
                onClick={counter2.increment}\r
                className="px-3 py-1 bg-green-500 text-white rounded hover:bg-green-600"\r
              >\r
                +2\r
              </button>\r
            </div>\r
            <div className="flex gap-2 justify-center mt-2">\r
              <button\r
                onClick={counter2.reset}\r
                className="px-3 py-1 bg-gray-500 text-white rounded hover:bg-gray-600"\r
              >\r
                重置\r
              </button>\r
              <button\r
                onClick={() => counter2.set(10)}\r
                className="px-3 py-1 bg-blue-500 text-white rounded hover:bg-blue-600"\r
              >\r
                设为10\r
              </button>\r
            </div>\r
          </div>\r
        </div>\r
\r
        {/* 范围计数器 */}\r
        <div className="p-4 border rounded-lg">\r
          <h4 className="font-semibold mb-3">范围计数器 (50-150, 步长=5)</h4>\r
          <div className="text-center">\r
            <div className="text-2xl font-bold mb-3 text-purple-600">\r
              {counter3.count}\r
            </div>\r
            <div className="flex gap-2 justify-center">\r
              <button\r
                onClick={counter3.decrement}\r
                className="px-3 py-1 bg-red-500 text-white rounded hover:bg-red-600"\r
                disabled={counter3.count <= 50}\r
              >\r
                -5\r
              </button>\r
              <button\r
                onClick={counter3.increment}\r
                className="px-3 py-1 bg-green-500 text-white rounded hover:bg-green-600"\r
                disabled={counter3.count >= 150}\r
              >\r
                +5\r
              </button>\r
            </div>\r
            <div className="flex gap-2 justify-center mt-2">\r
              <button\r
                onClick={counter3.reset}\r
                className="px-3 py-1 bg-gray-500 text-white rounded hover:bg-gray-600"\r
              >\r
                重置\r
              </button>\r
              <button\r
                onClick={() => counter3.set(100)}\r
                className="px-3 py-1 bg-blue-500 text-white rounded hover:bg-blue-600"\r
              >\r
                设为100\r
              </button>\r
            </div>\r
          </div>\r
        </div>\r
      </div>\r
\r
      <div className="text-sm text-gray-600 bg-gray-50 p-3 rounded">\r
        <strong>观察要点：</strong>\r
        每个计数器都有独立的状态，展示了自定义Hook的状态隔离特性。不同的配置选项（最小值、最大值、步长）展示了Hook的灵活性。\r
      </div>\r
    </div>\r
  );\r
};\r
\r
export default UseCounterExample;\r
`,E=`import React, { useState } from "react";\r
import { useDebounce } from "./useDebounce";\r
\r
const UseDebounceExample: React.FC = () => {\r
  const [searchTerm, setSearchTerm] = useState("");\r
  const [delay, setDelay] = useState(500);\r
  const debouncedSearchTerm = useDebounce(searchTerm, delay);\r
\r
  // 模拟搜索结果\r
  const allItems = [\r
    "Apple",\r
    "Banana",\r
    "Cherry",\r
    "Date",\r
    "Elderberry",\r
    "Fig",\r
    "Grape",\r
    "Honeydew",\r
    "Kiwi",\r
    "Lemon",\r
    "Mango",\r
    "Orange",\r
    "Papaya",\r
    "Quince",\r
    "Raspberry",\r
  ];\r
\r
  const filteredItems = debouncedSearchTerm\r
    ? allItems.filter((item) =>\r
        item.toLowerCase().includes(debouncedSearchTerm.toLowerCase())\r
      )\r
    : allItems;\r
\r
  return (\r
    <div className="space-y-6">\r
      {/* 控制面板 */}\r
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">\r
        <div className="p-4 border rounded-lg">\r
          <h4 className="font-semibold mb-3">搜索输入</h4>\r
          <input\r
            type="text"\r
            value={searchTerm}\r
            onChange={(e) => setSearchTerm(e.target.value)}\r
            placeholder="输入搜索关键词..."\r
            className="w-full px-3 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500"\r
          />\r
          <p className="text-sm text-gray-600 mt-2">\r
            当前输入:{" "}\r
            <span className="font-mono bg-gray-100 px-1 rounded">\r
              {searchTerm || "(空)"}\r
            </span>\r
          </p>\r
        </div>\r
\r
        <div className="p-4 border rounded-lg">\r
          <h4 className="font-semibold mb-3">防抖设置</h4>\r
          <div className="space-y-2">\r
            <label className="block text-sm font-medium">\r
              延迟时间: {delay}ms\r
            </label>\r
            <input\r
              type="range"\r
              min="100"\r
              max="2000"\r
              step="100"\r
              value={delay}\r
              onChange={(e) => setDelay(Number(e.target.value))}\r
              className="w-full"\r
            />\r
            <div className="flex justify-between text-xs text-gray-500">\r
              <span>100ms</span>\r
              <span>2000ms</span>\r
            </div>\r
          </div>\r
          <p className="text-sm text-gray-600 mt-2">\r
            防抖值:{" "}\r
            <span className="font-mono bg-gray-100 px-1 rounded">\r
              {debouncedSearchTerm || "(空)"}\r
            </span>\r
          </p>\r
        </div>\r
      </div>\r
\r
      {/* 搜索结果 */}\r
      <div className="p-4 border rounded-lg">\r
        <h4 className="font-semibold mb-3">\r
          搜索结果 ({filteredItems.length} 项)\r
        </h4>\r
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-2">\r
          {filteredItems.map((item, index) => (\r
            <div\r
              key={index}\r
              className="px-3 py-2 bg-blue-100 text-blue-800 rounded text-center text-sm"\r
            >\r
              {item}\r
            </div>\r
          ))}\r
        </div>\r
        {filteredItems.length === 0 && (\r
          <div className="text-center text-gray-500 py-8">\r
            没有找到匹配的结果\r
          </div>\r
        )}\r
      </div>\r
\r
      {/* 状态对比 */}\r
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">\r
        <div className="p-4 border rounded-lg bg-red-50">\r
          <h5 className="font-medium mb-2 text-red-800">实时搜索 (无防抖)</h5>\r
          <p className="text-sm text-red-600">\r
            每次输入都会立即触发搜索，可能导致性能问题\r
          </p>\r
          <div className="mt-2 text-xs font-mono bg-red-100 p-2 rounded">\r
            搜索词: "{searchTerm}"\r
          </div>\r
        </div>\r
\r
        <div className="p-4 border rounded-lg bg-green-50">\r
          <h5 className="font-medium mb-2 text-green-800">防抖搜索</h5>\r
          <p className="text-sm text-green-600">\r
            等待用户停止输入{delay}ms后才触发搜索，优化性能\r
          </p>\r
          <div className="mt-2 text-xs font-mono bg-green-100 p-2 rounded">\r
            搜索词: "{debouncedSearchTerm}"\r
          </div>\r
        </div>\r
      </div>\r
\r
      <div className="text-sm text-gray-600 bg-gray-50 p-3 rounded">\r
        <strong>观察要点：</strong>\r
        防抖Hook延迟了值的更新，只有在指定时间内没有新的变化时才会更新。这在搜索、API调用等场景中非常有用。\r
      </div>\r
    </div>\r
  );\r
};\r
\r
export default UseDebounceExample;\r
`,V=`import React from "react";\r
import { useFetch } from "./useFetch";\r
\r
const UseFetchExample: React.FC = () => {\r
  const { data, loading, error, refetch } = useFetch<{\r
    users: string[];\r
    timestamp: string;\r
  }>("/api/users");\r
\r
  return (\r
    <div className="space-y-4">\r
      <div className="flex items-center gap-4">\r
        <h4 className="font-semibold">数据获取状态</h4>\r
        <button\r
          onClick={refetch}\r
          disabled={loading}\r
          className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 disabled:opacity-50"\r
        >\r
          {loading ? "获取中..." : "重新获取"}\r
        </button>\r
      </div>\r
\r
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">\r
        {/* 加载状态 */}\r
        <div className="p-4 border rounded-lg">\r
          <h5 className="font-medium mb-2">加载状态</h5>\r
          <div\r
            className={\`px-3 py-2 rounded text-center \${\r
              loading\r
                ? "bg-yellow-100 text-yellow-800"\r
                : "bg-green-100 text-green-800"\r
            }\`}\r
          >\r
            {loading ? "正在加载..." : "加载完成"}\r
          </div>\r
        </div>\r
\r
        {/* 错误状态 */}\r
        <div className="p-4 border rounded-lg">\r
          <h5 className="font-medium mb-2">错误状态</h5>\r
          <div\r
            className={\`px-3 py-2 rounded text-center \${\r
              error ? "bg-red-100 text-red-800" : "bg-green-100 text-green-800"\r
            }\`}\r
          >\r
            {error || "无错误"}\r
          </div>\r
        </div>\r
\r
        {/* 数据状态 */}\r
        <div className="p-4 border rounded-lg">\r
          <h5 className="font-medium mb-2">数据状态</h5>\r
          <div\r
            className={\`px-3 py-2 rounded text-center \${\r
              data ? "bg-blue-100 text-blue-800" : "bg-gray-100 text-gray-800"\r
            }\`}\r
          >\r
            {data ? "有数据" : "无数据"}\r
          </div>\r
        </div>\r
      </div>\r
\r
      {/* 数据展示 */}\r
      {data && (\r
        <div className="p-4 border rounded-lg bg-gray-50">\r
          <h5 className="font-medium mb-2">获取的数据</h5>\r
          <div className="space-y-2">\r
            <div>\r
              <strong>用户列表:</strong>\r
              <ul className="list-disc list-inside ml-4">\r
                {data.users.map((user, index) => (\r
                  <li key={index}>{user}</li>\r
                ))}\r
              </ul>\r
            </div>\r
            <div>\r
              <strong>时间戳:</strong> {data.timestamp}\r
            </div>\r
          </div>\r
        </div>\r
      )}\r
\r
      <div className="text-sm text-gray-600 bg-gray-50 p-3 rounded">\r
        <strong>观察要点：</strong>\r
        Hook管理了loading、error、data三个状态，提供了完整的异步操作状态管理。refetch方法允许手动重新获取数据。\r
      </div>\r
    </div>\r
  );\r
};\r
\r
export default UseFetchExample;\r
`,D=`import React from "react";\r
import { useLocalStorage } from "./useLocalStorage";\r
\r
const UseLocalStorageExample: React.FC = () => {\r
  const [name, setName] = useLocalStorage("user-name", "");\r
  const [settings, setSettings] = useLocalStorage("user-settings", {\r
    theme: "light",\r
    notifications: true,\r
  });\r
  const [count, setCount] = useLocalStorage("demo-count", 0);\r
\r
  return (\r
    <div className="space-y-6">\r
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">\r
        {/* 字符串存储 */}\r
        <div className="p-4 border rounded-lg">\r
          <h4 className="font-semibold mb-3">字符串存储</h4>\r
          <div className="space-y-3">\r
            <input\r
              type="text"\r
              value={name}\r
              onChange={(e) => setName(e.target.value)}\r
              placeholder="输入你的名字"\r
              className="w-full px-3 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500"\r
            />\r
            <p className="text-sm text-gray-600">\r
              存储的值:{" "}\r
              <span className="font-mono bg-gray-100 px-1 rounded">\r
                {name || "(空)"}\r
              </span>\r
            </p>\r
            <button\r
              onClick={() => setName("")}\r
              className="px-3 py-1 bg-red-500 text-white rounded hover:bg-red-600"\r
            >\r
              清空\r
            </button>\r
          </div>\r
        </div>\r
\r
        {/* 对象存储 */}\r
        <div className="p-4 border rounded-lg">\r
          <h4 className="font-semibold mb-3">对象存储</h4>\r
          <div className="space-y-3">\r
            <div className="flex items-center gap-2">\r
              <label className="text-sm">主题:</label>\r
              <select\r
                value={settings.theme}\r
                onChange={(e) =>\r
                  setSettings({ ...settings, theme: e.target.value })\r
                }\r
                className="px-2 py-1 border rounded"\r
              >\r
                <option value="light">浅色</option>\r
                <option value="dark">深色</option>\r
              </select>\r
            </div>\r
            <div className="flex items-center gap-2">\r
              <label className="text-sm">通知:</label>\r
              <input\r
                type="checkbox"\r
                checked={settings.notifications}\r
                onChange={(e) =>\r
                  setSettings({ ...settings, notifications: e.target.checked })\r
                }\r
                className="rounded"\r
              />\r
            </div>\r
            <div className="text-sm text-gray-600">\r
              <div>存储的设置:</div>\r
              <pre className="bg-gray-100 p-2 rounded text-xs mt-1">\r
                {JSON.stringify(settings, null, 2)}\r
              </pre>\r
            </div>\r
          </div>\r
        </div>\r
      </div>\r
\r
      {/* 数字存储 */}\r
      <div className="p-4 border rounded-lg">\r
        <h4 className="font-semibold mb-3">数字存储 (函数式更新)</h4>\r
        <div className="flex items-center gap-4">\r
          <span className="text-lg font-semibold">计数: {count}</span>\r
          <div className="flex gap-2">\r
            <button\r
              onClick={() => setCount((prev) => prev + 1)}\r
              className="px-3 py-1 bg-green-500 text-white rounded hover:bg-green-600"\r
            >\r
              +1\r
            </button>\r
            <button\r
              onClick={() => setCount((prev) => prev - 1)}\r
              className="px-3 py-1 bg-red-500 text-white rounded hover:bg-red-600"\r
            >\r
              -1\r
            </button>\r
            <button\r
              onClick={() => setCount(0)}\r
              className="px-3 py-1 bg-gray-500 text-white rounded hover:bg-gray-600"\r
            >\r
              重置\r
            </button>\r
          </div>\r
        </div>\r
      </div>\r
\r
      <div className="text-sm text-gray-600 bg-gray-50 p-3 rounded">\r
        <strong>观察要点：</strong>\r
        刷新页面后数据仍然保持，展示了localStorage的持久化特性。支持字符串、对象、数字等不同类型的数据存储。\r
      </div>\r
    </div>\r
  );\r
};\r
\r
export default UseLocalStorageExample;\r
`,P=`import React, { useState } from "react";\r
import { usePrevious } from "./usePrevious";\r
\r
const UsePreviousExample: React.FC = () => {\r
  const [count, setCount] = useState(0);\r
  const [name, setName] = useState("Alice");\r
  const [color, setColor] = useState("blue");\r
\r
  const previousCount = usePrevious(count);\r
  const previousName = usePrevious(name);\r
  const previousColor = usePrevious(color);\r
\r
  const names = ["Alice", "Bob", "Charlie", "Diana", "Eve"];\r
  const colors = ["blue", "red", "green", "purple", "orange"];\r
\r
  return (\r
    <div className="space-y-6">\r
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">\r
        {/* 数字值变化 */}\r
        <div className="p-4 border rounded-lg">\r
          <h4 className="font-semibold mb-3">数字值变化</h4>\r
          <div className="space-y-3">\r
            <div className="text-center">\r
              <div className="text-2xl font-bold text-blue-600 mb-2">\r
                {count}\r
              </div>\r
              <div className="flex gap-2 justify-center">\r
                <button\r
                  onClick={() => setCount((c) => c - 1)}\r
                  className="px-3 py-1 bg-red-500 text-white rounded hover:bg-red-600"\r
                >\r
                  -1\r
                </button>\r
                <button\r
                  onClick={() => setCount((c) => c + 1)}\r
                  className="px-3 py-1 bg-green-500 text-white rounded hover:bg-green-600"\r
                >\r
                  +1\r
                </button>\r
              </div>\r
            </div>\r
            <div className="text-sm space-y-1">\r
              <div>\r
                当前值:{" "}\r
                <span className="font-mono bg-blue-100 px-1 rounded">\r
                  {count}\r
                </span>\r
              </div>\r
              <div>\r
                前一个值:{" "}\r
                <span className="font-mono bg-gray-100 px-1 rounded">\r
                  {previousCount !== undefined ? previousCount : "undefined"}\r
                </span>\r
              </div>\r
              <div className="text-xs text-gray-500">\r
                {previousCount !== undefined && (\r
                  <span>\r
                    变化: {count > previousCount ? "+" : ""}\r
                    {count - previousCount}\r
                  </span>\r
                )}\r
              </div>\r
            </div>\r
          </div>\r
        </div>\r
\r
        {/* 字符串值变化 */}\r
        <div className="p-4 border rounded-lg">\r
          <h4 className="font-semibold mb-3">字符串值变化</h4>\r
          <div className="space-y-3">\r
            <div className="text-center">\r
              <div className="text-lg font-semibold text-green-600 mb-2">\r
                {name}\r
              </div>\r
              <div className="flex flex-wrap gap-1 justify-center">\r
                {names.map((n) => (\r
                  <button\r
                    key={n}\r
                    onClick={() => setName(n)}\r
                    className={\`px-2 py-1 text-xs rounded \${\r
                      n === name\r
                        ? "bg-green-500 text-white"\r
                        : "bg-gray-200 hover:bg-gray-300"\r
                    }\`}\r
                  >\r
                    {n}\r
                  </button>\r
                ))}\r
              </div>\r
            </div>\r
            <div className="text-sm space-y-1">\r
              <div>\r
                当前值:{" "}\r
                <span className="font-mono bg-green-100 px-1 rounded">\r
                  {name}\r
                </span>\r
              </div>\r
              <div>\r
                前一个值:{" "}\r
                <span className="font-mono bg-gray-100 px-1 rounded">\r
                  {previousName !== undefined ? previousName : "undefined"}\r
                </span>\r
              </div>\r
              <div className="text-xs text-gray-500">\r
                {previousName !== undefined && previousName !== name && (\r
                  <span>\r
                    从 "{previousName}" 变为 "{name}"\r
                  </span>\r
                )}\r
              </div>\r
            </div>\r
          </div>\r
        </div>\r
\r
        {/* 颜色值变化 */}\r
        <div className="p-4 border rounded-lg">\r
          <h4 className="font-semibold mb-3">颜色值变化</h4>\r
          <div className="space-y-3">\r
            <div className="text-center">\r
              <div\r
                className={\`w-16 h-16 mx-auto mb-2 rounded-full bg-\${color}-500\`}\r
              ></div>\r
              <div className="flex flex-wrap gap-1 justify-center">\r
                {colors.map((c) => (\r
                  <button\r
                    key={c}\r
                    onClick={() => setColor(c)}\r
                    className={\`w-6 h-6 rounded-full bg-\${c}-500 border-2 \${\r
                      c === color ? "border-gray-800" : "border-gray-300"\r
                    }\`}\r
                    title={c}\r
                  />\r
                ))}\r
              </div>\r
            </div>\r
            <div className="text-sm space-y-1">\r
              <div>\r
                当前颜色:{" "}\r
                <span className="font-mono bg-purple-100 px-1 rounded">\r
                  {color}\r
                </span>\r
              </div>\r
              <div>\r
                前一个颜色:{" "}\r
                <span className="font-mono bg-gray-100 px-1 rounded">\r
                  {previousColor !== undefined ? previousColor : "undefined"}\r
                </span>\r
              </div>\r
              <div className="text-xs text-gray-500">\r
                {previousColor !== undefined && previousColor !== color && (\r
                  <span>\r
                    颜色从 {previousColor} 变为 {color}\r
                  </span>\r
                )}\r
              </div>\r
            </div>\r
          </div>\r
        </div>\r
      </div>\r
\r
      {/* 动画效果演示 */}\r
      <div className="p-4 border rounded-lg bg-gray-50">\r
        <h4 className="font-semibold mb-3">动画效果演示</h4>\r
        <div className="flex items-center justify-center space-x-8">\r
          {/* 当前值 */}\r
          <div className="text-center">\r
            <div className="text-sm text-gray-600 mb-1">当前</div>\r
            <div\r
              className={\`w-20 h-20 rounded-lg bg-\${color}-500 flex items-center justify-center text-white font-bold text-lg transition-all duration-300\`}\r
            >\r
              {count}\r
            </div>\r
            <div className="text-sm mt-1 font-mono">{name}</div>\r
          </div>\r
\r
          {/* 箭头 */}\r
          <div className="text-2xl text-gray-400">→</div>\r
\r
          {/* 前一个值 */}\r
          <div className="text-center">\r
            <div className="text-sm text-gray-600 mb-1">前一个</div>\r
            <div\r
              className={\`w-20 h-20 rounded-lg \${\r
                previousColor ? \`bg-\${previousColor}-300\` : "bg-gray-300"\r
              } flex items-center justify-center text-white font-bold text-lg opacity-60\`}\r
            >\r
              {previousCount !== undefined ? previousCount : "?"}\r
            </div>\r
            <div className="text-sm mt-1 font-mono">\r
              {previousName !== undefined ? previousName : "undefined"}\r
            </div>\r
          </div>\r
        </div>\r
      </div>\r
\r
      <div className="text-sm text-gray-600 bg-gray-50 p-3 rounded">\r
        <strong>观察要点：</strong>\r
        usePrevious\r
        Hook使用useRef存储前一个值，不会触发重新渲染。首次渲染时返回undefined，之后返回前一次的值。\r
      </div>\r
    </div>\r
  );\r
};\r
\r
export default UsePreviousExample;\r
`,U=`import React from "react";\r
import { useToggle } from "./useToggle";\r
\r
const UseToggleExample: React.FC = () => {\r
  const [isVisible, toggleVisible, setVisible] = useToggle(false);\r
  const [isEnabled, toggleEnabled, setEnabled] = useToggle(true);\r
  const [isDarkMode, toggleDarkMode, setDarkMode] = useToggle(false);\r
\r
  return (\r
    <div className="space-y-6">\r
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">\r
        {/* 可见性切换 */}\r
        <div className="p-4 border rounded-lg">\r
          <h4 className="font-semibold mb-3">可见性切换</h4>\r
          <div className="space-y-3">\r
            <div className="flex gap-2">\r
              <button\r
                onClick={toggleVisible}\r
                className="px-3 py-1 bg-blue-500 text-white rounded hover:bg-blue-600"\r
              >\r
                切换\r
              </button>\r
              <button\r
                onClick={() => setVisible(true)}\r
                className="px-3 py-1 bg-green-500 text-white rounded hover:bg-green-600"\r
              >\r
                显示\r
              </button>\r
              <button\r
                onClick={() => setVisible(false)}\r
                className="px-3 py-1 bg-red-500 text-white rounded hover:bg-red-600"\r
              >\r
                隐藏\r
              </button>\r
            </div>\r
            {isVisible && (\r
              <div className="p-3 bg-blue-100 text-blue-800 rounded">\r
                这是一个可切换显示的内容！\r
              </div>\r
            )}\r
            <p className="text-sm text-gray-600">\r
              状态: {isVisible ? "显示" : "隐藏"}\r
            </p>\r
          </div>\r
        </div>\r
\r
        {/* 启用状态切换 */}\r
        <div className="p-4 border rounded-lg">\r
          <h4 className="font-semibold mb-3">启用状态切换</h4>\r
          <div className="space-y-3">\r
            <div className="flex gap-2">\r
              <button\r
                onClick={toggleEnabled}\r
                className="px-3 py-1 bg-purple-500 text-white rounded hover:bg-purple-600"\r
              >\r
                切换状态\r
              </button>\r
              <button\r
                onClick={() => setEnabled(true)}\r
                className="px-3 py-1 bg-green-500 text-white rounded hover:bg-green-600"\r
              >\r
                启用\r
              </button>\r
              <button\r
                onClick={() => setEnabled(false)}\r
                className="px-3 py-1 bg-red-500 text-white rounded hover:bg-red-600"\r
              >\r
                禁用\r
              </button>\r
            </div>\r
            <button\r
              disabled={!isEnabled}\r
              className={\`w-full px-3 py-2 rounded \${\r
                isEnabled\r
                  ? "bg-blue-500 text-white hover:bg-blue-600"\r
                  : "bg-gray-300 text-gray-500 cursor-not-allowed"\r
              }\`}\r
            >\r
              {isEnabled ? "功能已启用" : "功能已禁用"}\r
            </button>\r
            <p className="text-sm text-gray-600">\r
              状态: {isEnabled ? "启用" : "禁用"}\r
            </p>\r
          </div>\r
        </div>\r
\r
        {/* 主题切换 */}\r
        <div className="p-4 border rounded-lg">\r
          <h4 className="font-semibold mb-3">主题切换</h4>\r
          <div className="space-y-3">\r
            <div className="flex gap-2">\r
              <button\r
                onClick={toggleDarkMode}\r
                className="px-3 py-1 bg-gray-800 text-white rounded hover:bg-gray-900"\r
              >\r
                切换主题\r
              </button>\r
              <button\r
                onClick={() => setDarkMode(false)}\r
                className="px-3 py-1 bg-yellow-500 text-white rounded hover:bg-yellow-600"\r
              >\r
                浅色\r
              </button>\r
              <button\r
                onClick={() => setDarkMode(true)}\r
                className="px-3 py-1 bg-gray-800 text-white rounded hover:bg-gray-900"\r
              >\r
                深色\r
              </button>\r
            </div>\r
            <div\r
              className={\`p-3 rounded transition-colors \${\r
                isDarkMode\r
                  ? "bg-gray-800 text-white"\r
                  : "bg-yellow-100 text-yellow-800"\r
              }\`}\r
            >\r
              当前主题: {isDarkMode ? "深色模式" : "浅色模式"}\r
            </div>\r
            <p className="text-sm text-gray-600">\r
              状态: {isDarkMode ? "深色" : "浅色"}\r
            </p>\r
          </div>\r
        </div>\r
      </div>\r
\r
      <div className="text-sm text-gray-600 bg-gray-50 p-3 rounded">\r
        <strong>观察要点：</strong>\r
        useToggle简化了布尔值状态的管理，提供了切换和直接设置两种操作方式。每个实例都有独立的状态。\r
      </div>\r
    </div>\r
  );\r
};\r
\r
export default UseToggleExample;\r
`,R=`import { useCallback, useState } from "react";

interface UseCounterOptions {
  min?: number;
  max?: number;
  step?: number;
}

interface UseCounterReturn {
  count: number;
  increment: () => void;
  decrement: () => void;
  reset: () => void;
  set: (value: number) => void;
}

/**
 * 自定义计数器Hook
 * @param initialValue 初始值，默认为0
 * @param options 配置选项，包含最小值、最大值和步长
 * @returns 返回计数值和操作方法
 */
export function useCounter(
  initialValue: number = 0,
  options: UseCounterOptions = {}
): UseCounterReturn {
  const { min, max, step = 1 } = options;
  const [count, setCount] = useState(initialValue);

  const increment = useCallback(() => {
    setCount((prev) => {
      const newValue = prev + step;
      return max !== undefined ? Math.min(newValue, max) : newValue;
    });
  }, [step, max]);

  const decrement = useCallback(() => {
    setCount((prev) => {
      const newValue = prev - step;
      return min !== undefined ? Math.max(newValue, min) : newValue;
    });
  }, [step, min]);

  const reset = useCallback(() => {
    setCount(initialValue);
  }, [initialValue]);

  const set = useCallback((value: number) => {
    setCount(value);
  }, []);

  return { count, increment, decrement, reset, set };
}`,F=`import { useEffect, useState } from "react";

/**
 * 自定义防抖Hook
 * @param value 需要防抖的值
 * @param delay 延迟时间（毫秒）
 * @returns 返回防抖后的值
 */
export function useDebounce<T>(value: T, delay: number): T {
  const [debouncedValue, setDebouncedValue] = useState<T>(value);

  useEffect(() => {
    const handler = setTimeout(() => {
      setDebouncedValue(value);
    }, delay);

    return () => {
      clearTimeout(handler);
    };
  }, [value, delay]);

  return debouncedValue;
}`,I=`import { useCallback, useEffect, useState } from "react";

interface UseFetchState<T> {
  data: T | null;
  loading: boolean;
  error: string | null;
}

/**
 * 自定义数据获取Hook
 * @param url 请求的URL
 * @returns 返回数据状态和重新获取方法
 */
export function useFetch<T>(url: string): UseFetchState<T> & { refetch: () => void } {
  const [state, setState] = useState<UseFetchState<T>>({
    data: null,
    loading: true,
    error: null,
  });

  const fetchData = useCallback(async () => {
    setState((prev) => ({ ...prev, loading: true, error: null }));

    try {
      // 模拟网络延迟
      await new Promise((resolve) => setTimeout(resolve, 1000));
      const mockData = {
        users: ["Alice", "Bob", "Charlie"],
        timestamp: new Date().toISOString(),
      } as T;

      setState({
        data: mockData,
        loading: false,
        error: null,
      });
    } catch (error) {
      setState({
        data: null,
        loading: false,
        error: error instanceof Error ? error.message : "Unknown error",
      });
    }
  }, []);

  useEffect(() => {
    fetchData();
  }, [fetchData]);

  return {
    ...state,
    refetch: fetchData,
  };
}`,$=`import { useState } from "react";

/**
 * 自定义本地存储Hook
 * @param key localStorage的键名
 * @param initialValue 初始值
 * @returns 返回存储的值和设置函数
 */
export function useLocalStorage<T>(
  key: string,
  initialValue: T
): [T, (value: T | ((val: T) => T)) => void] {
  const [storedValue, setStoredValue] = useState<T>(() => {
    try {
      const item = window.localStorage.getItem(key);
      return item ? JSON.parse(item) : initialValue;
    } catch (error) {
      console.error("Error reading localStorage:", error);
      return initialValue;
    }
  });

  const setValue = (value: T | ((val: T) => T)) => {
    try {
      const valueToStore =
        value instanceof Function ? value(storedValue) : value;
      setStoredValue(valueToStore);
      window.localStorage.setItem(key, JSON.stringify(valueToStore));
    } catch (error) {
      console.error("Error setting localStorage:", error);
    }
  };

  return [storedValue, setValue];
}`,L=`import { useEffect, useRef } from "react";

/**
 * 自定义获取前一个值Hook
 * @param value 当前值
 * @returns 返回前一个值，首次渲染时返回undefined
 */
export function usePrevious<T>(value: T): T | undefined {
  const ref = useRef<T>();

  useEffect(() => {
    ref.current = value;
  });

  return ref.current;
}`,M=`import { useCallback, useState } from "react";

/**
 * 自定义切换状态Hook
 * @param initialValue 初始布尔值，默认为false
 * @returns 返回当前值、切换函数和设置函数
 */
export function useToggle(
  initialValue: boolean = false
): [boolean, () => void, (value: boolean) => void] {
  const [value, setValue] = useState(initialValue);

  const toggle = useCallback(() => {
    setValue((prev) => !prev);
  }, []);

  const set = useCallback((newValue: boolean) => {
    setValue(newValue);
  }, []);

  return [value, toggle, set];
}`,J=()=>e.jsx(N,{title:"自定义Hook模式",description:"学习如何创建和使用自定义Hook来封装和复用状态逻辑，提高代码的可维护性和可测试性。",overview:[{title:"核心概念",items:["自定义Hook是以'use'开头的JavaScript函数，可以调用其他Hook","它们让你在不同组件间复用状态逻辑，而不需要改变组件层次结构","每次调用自定义Hook都会获得独立的状态","自定义Hook可以接受参数并返回任何值"]},{title:"主要优势",items:["逻辑复用：将组件逻辑提取到可重用的函数中","关注点分离：将复杂组件的逻辑分解为更小的函数","易于测试：独立测试业务逻辑，不依赖组件渲染","代码组织清晰：提高代码可读性和可维护性","状态管理简化：封装复杂的状态逻辑"]},{title:"适用场景",items:["状态管理：管理复杂的组件状态","副作用处理：封装API调用、订阅等副作用","数据获取：处理加载状态、错误和数据缓存","表单处理：简化表单状态和验证","本地存储同步：在组件和localStorage之间同步数据","防抖节流：优化频繁触发的操作","动画控制：管理动画状态和计时"]},{title:"使用规则",items:["必须以'use'开头命名","只能在函数组件或其他Hook中调用","必须在组件的顶层调用，不能在循环或条件语句中","不要在普通JavaScript函数中调用Hook","遵循React Hook的依赖规则"]}],examples:[{title:"useCounter - 计数器Hook",component:e.jsx(f,{}),description:"封装计数器逻辑，支持边界限制和步长配置",observationPoints:["每个计数器实例都有独立的状态，展示了Hook的状态隔离特性","支持最小值、最大值和步长配置，展示了Hook的灵活性","使用useCallback优化回调函数，避免不必要的重新渲染","边界检查确保计数值在指定范围内"],keyPoints:["使用useState管理计数状态","useCallback优化回调函数性能","支持配置选项增强灵活性","返回对象包含状态和操作方法"],commonTraps:["忘记使用useCallback导致性能问题","边界检查逻辑不完整","初始值验证缺失"],solutions:["使用useCallback包装所有回调函数","在set方法中添加完整的边界检查","在Hook内部验证初始值的有效性"],preCode:[{title:"useCounter Hook实现",code:R}],codeExample:{title:"useCounter 示例组件",code:T}},{title:"useLocalStorage - 本地存储Hook",component:e.jsx(y,{}),description:"同步组件状态与localStorage，支持类型安全的读写操作",observationPoints:["刷新页面后数据仍然保持，展示了localStorage的持久化特性","支持字符串、对象、数组等不同类型的数据存储","自动处理JSON序列化和反序列化","包含错误处理机制，避免存储操作失败"],keyPoints:["使用泛型确保类型安全","初始化时从localStorage读取数据","自动同步状态变化到localStorage","包含完整的错误处理逻辑"],commonTraps:["忘记处理JSON解析错误","localStorage不可用时的降级处理","循环引用对象的序列化问题"],solutions:["使用try-catch包装所有localStorage操作","提供fallback机制处理存储不可用情况","避免存储包含循环引用的复杂对象"],preCode:[{title:"useLocalStorage Hook实现",code:$}],codeExample:{title:"useLocalStorage 示例组件",code:D}},{title:"useFetch - 数据获取Hook",component:e.jsx(k,{}),description:"封装异步数据获取逻辑，管理loading、error、data状态",observationPoints:["Hook管理了loading、error、data三个状态，提供完整的异步操作状态管理","refetch方法允许手动重新获取数据","自动处理网络延迟和错误情况","使用泛型支持不同类型的数据结构"],keyPoints:["使用useState管理异步状态","useEffect处理副作用和清理","useCallback优化重新获取函数","完整的错误处理和状态更新"],commonTraps:["忘记处理组件卸载时的状态更新","没有正确处理并发请求","缺少loading状态管理"],solutions:["使用cleanup函数或AbortController取消请求","实现请求去重或取消机制","在请求开始时立即设置loading状态"],preCode:[{title:"useFetch Hook实现",code:I}],codeExample:{title:"useFetch 示例组件",code:V}},{title:"useToggle - 切换状态Hook",component:e.jsx(C,{}),description:"简化布尔值状态的管理，提供切换和直接设置功能",observationPoints:["useToggle简化了布尔值状态的管理，提供了切换和直接设置两种操作方式","每个实例都有独立的状态，可以同时管理多个布尔值","返回元组格式，使用方便且符合React Hook惯例","使用useCallback优化回调函数性能"],keyPoints:["使用useState管理布尔状态","提供toggle和set两种操作方法","使用useCallback优化性能","返回元组格式便于解构使用"],commonTraps:["忘记使用useCallback导致不必要的重渲染","在条件语句中调用Hook","混淆toggle和set方法的使用场景"],solutions:["始终使用useCallback包装回调函数","确保Hook调用在组件顶层","根据需求选择合适的操作方法"],preCode:[{title:"useToggle Hook实现",code:M}],codeExample:{title:"useToggle 示例组件",code:U}},{title:"useDebounce - 防抖Hook",component:e.jsx(S,{}),description:"实现值的防抖处理，优化搜索和API调用性能",observationPoints:["防抖Hook延迟了值的更新，只有在指定时间内没有新的变化时才会更新","在搜索、API调用等场景中非常有用，可以显著减少不必要的操作","支持自定义延迟时间，适应不同的使用场景","使用useEffect和setTimeout实现防抖逻辑"],keyPoints:["使用useState存储防抖后的值","useEffect监听值变化并设置定时器","清理函数确保定时器正确销毁","支持泛型类型参数"],commonTraps:["忘记清理定时器导致内存泄漏","延迟时间设置不合理","在快速变化的值上使用过长的延迟"],solutions:["在useEffect中返回清理函数","根据使用场景调整合适的延迟时间","对于用户输入，通常使用300-500ms的延迟"],preCode:[{title:"useDebounce Hook实现",code:F}],codeExample:{title:"useDebounce 示例组件",code:E}},{title:"usePrevious - 前值Hook",component:e.jsx(H,{}),description:"获取变量的前一个值，用于比较和动画效果",observationPoints:["usePrevious Hook使用useRef存储前一个值，不会触发重新渲染","首次渲染时返回undefined，之后返回前一次的值","常用于比较值的变化、实现动画效果或撤销功能","支持任意类型的值，通过泛型确保类型安全"],keyPoints:["使用useRef存储前一个值","useEffect在每次渲染后更新ref","不会触发组件重新渲染","首次渲染返回undefined"],commonTraps:["期望首次渲染就有前一个值","在useEffect依赖数组中包含ref","误解ref的更新时机"],solutions:["正确处理undefined的情况","不要在依赖数组中包含ref","理解useEffect的执行时机"],preCode:[{title:"usePrevious Hook实现",code:L}],codeExample:{title:"usePrevious 示例组件",code:P}}],tutorial:{concepts:["自定义Hook是以'use'开头的JavaScript函数，可以调用其他Hook","Hook让你在不改变组件层次结构的情况下复用状态逻辑","每次调用自定义Hook都会获得独立的状态","自定义Hook可以接受参数并返回任何值"],steps:["创建以'use'开头的函数","在函数内部调用React内置Hook","处理状态逻辑和副作用","返回组件需要的状态和方法","在组件中调用自定义Hook","测试Hook的功能和边界情况"],tips:["使用TypeScript为Hook添加类型定义","使用useCallback优化回调函数性能","为Hook编写单元测试","考虑Hook的可配置性和灵活性","遵循Hook的命名约定和调用规则"]},interview:{questions:[{question:"什么是自定义Hook？它解决了什么问题？",answer:"自定义Hook是以'use'开头的JavaScript函数，可以调用其他Hook。它解决了状态逻辑复用的问题；在自定义Hook出现之前，组件间共享状态逻辑需要使用高阶组件或render props，这会导致组件层次复杂；自定义Hook让我们可以将状态逻辑提取到可复用的函数中；每次调用自定义Hook都会获得独立的状态实例；它简化了代码结构，提高了可维护性和可测试性。"},{question:"自定义Hook的命名规则和调用规则是什么？",answer:"命名规则：必须以'use'开头，这样React才能识别它是一个Hook；调用规则：只能在函数组件的顶层或其他Hook中调用；不能在循环、条件语句或嵌套函数中调用；必须遵循Hook的调用顺序一致性；这些规则确保Hook在每次渲染时都以相同的顺序被调用；违反规则会导致Hook状态混乱或错误。"},{question:"如何设计一个好的自定义Hook？",answer:"单一职责：每个Hook应该只负责一个特定的功能；参数化配置：通过参数提供灵活的配置选项；返回值设计：返回组件需要的状态和方法，通常使用对象或数组；性能优化：使用useCallback和useMemo优化性能；错误处理：包含适当的错误处理和边界情况处理；类型安全：使用TypeScript提供完整的类型定义；可测试性：设计时考虑如何进行单元测试。"},{question:"自定义Hook与高阶组件(HOC)的区别是什么？",answer:"组件结构：自定义Hook不会改变组件层次结构，HOC会包装组件；状态隔离：Hook的每次调用都有独立状态，HOC共享实例状态；使用方式：Hook在组件内部调用，HOC在组件外部包装；性能影响：Hook避免了额外的组件层级，性能更好；调试体验：Hook的调试更直观，HOC可能导致组件树复杂；灵活性：Hook可以在组件的任何地方调用，HOC只能在组件定义时使用。"},{question:"如何测试自定义Hook？",answer:"使用@testing-library/react-hooks进行Hook测试；创建测试用的包装组件来调用Hook；测试Hook的初始状态和返回值；测试Hook的状态更新和副作用；测试Hook的参数变化和重新渲染；测试错误情况和边界条件；使用act包装异步操作；模拟依赖项和外部API；确保测试覆盖所有分支和场景。"},{question:"自定义Hook中如何处理副作用和清理？",answer:"使用useEffect处理副作用：订阅事件、API调用、定时器等；返回清理函数：在useEffect中返回函数来清理资源；处理组件卸载：确保在组件卸载时取消订阅和清理资源；使用AbortController取消网络请求；清理定时器和间隔器；移除事件监听器；关闭WebSocket连接；正确的清理可以避免内存泄漏和意外的状态更新。"},{question:"如何在自定义Hook中优化性能？",answer:"使用useCallback缓存回调函数，避免子组件不必要的重渲染；使用useMemo缓存计算结果，避免重复计算；合理设置依赖数组，避免过度更新；使用useRef存储不需要触发渲染的值；避免在Hook中创建新的对象或数组；使用防抖和节流技术优化频繁操作；延迟初始化昂贵的计算；考虑使用React.memo包装使用Hook的组件。"},{question:"自定义Hook的最佳实践有哪些？",answer:"遵循单一职责原则，每个Hook只做一件事；使用描述性的命名，清楚表达Hook的功能；提供合理的默认值和参数验证；使用TypeScript增强类型安全；编写完整的文档和使用示例；考虑Hook的可组合性，允许多个Hook协同工作；处理边界情况和错误状态；进行充分的测试覆盖；避免过度抽象，保持简单易用；考虑向后兼容性和API稳定性。"}],keyPoints:["自定义Hook必须以'use'开头","只能在函数组件顶层调用","每次调用都有独立的状态","可以调用其他Hook","返回值可以是任意类型","遵循Hook的调用规则","使用TypeScript增强类型安全","考虑性能优化和错误处理"]},bestPractices:{dos:["使用'use'前缀命名自定义Hook","在函数组件顶层调用Hook","使用TypeScript提供类型定义","使用useCallback优化回调函数","提供合理的默认参数","包含完整的错误处理","编写单元测试验证功能","保持Hook的单一职责","使用useMemo缓存昂贵计算","正确处理副作用清理"],donts:["不要在循环或条件语句中调用Hook","不要在普通JavaScript函数中调用Hook","不要忘记清理副作用","不要在Hook中直接修改props","不要创建过于复杂的Hook","不要忽略依赖数组的设置","不要在Hook中进行同步的昂贵计算","不要返回可变的对象引用","不要在Hook中直接操作DOM","不要忽略错误边界情况"],patterns:["状态管理Hook：封装复杂的状态逻辑","副作用Hook：处理API调用、订阅等","工具Hook：提供通用的工具函数","表单Hook：简化表单状态管理","动画Hook：封装动画逻辑"]}});export{J as default};
