import{r as c,j as e}from"./index-nevtk0dH.js";import{C as w}from"./ComponentTemplate-CQT_cNgc.js";const T=()=>{const[a,j]=c.useState(""),[s,y]=c.useState([]),[l,f]=c.useTransition(),[h,g]=c.useState([]),m=c.useMemo(()=>Array.from({length:1e4},(n,i)=>`项目 ${i+1} - ${Math.random().toString(36).substring(2)}`),[]),v=n=>{const i=new Date().toLocaleTimeString();g(x=>[...x.slice(-5),`${i}: ${n}`])},p=n=>{j(n),v(`开始搜索: "${n}"`),f(()=>{const i=m.filter(x=>x.toLowerCase().includes(n.toLowerCase()));y(i),v(`搜索完成，找到 ${i.length} 个结果`)})},u=()=>{j(""),y([]),v("清空搜索")},r=()=>{g([])};return e.jsxs("div",{className:"p-6 bg-white rounded-lg border border-gray-200",children:[e.jsxs("div",{className:"flex items-center justify-between mb-4",children:[e.jsx("h3",{className:"text-lg font-semibold text-gray-800",children:"搜索过滤演示"}),e.jsxs("div",{className:"space-x-2",children:[e.jsx("button",{onClick:u,className:"px-3 py-1 bg-red-500 text-white rounded text-sm hover:bg-red-600 transition-colors",children:"清空搜索"}),e.jsx("button",{onClick:r,className:"px-3 py-1 bg-gray-500 text-white rounded text-sm hover:bg-gray-600 transition-colors",children:"清空日志"})]})]}),e.jsxs("div",{className:"grid grid-cols-1 lg:grid-cols-2 gap-6",children:[e.jsxs("div",{className:"space-y-4",children:[e.jsxs("div",{children:[e.jsxs("label",{className:"block text-sm font-medium text-gray-700 mb-2",children:["搜索内容 (总共 ",m.length.toLocaleString()," 项):"]}),e.jsxs("div",{className:"relative",children:[e.jsx("input",{type:"text",value:a,onChange:n=>p(n.target.value),placeholder:"输入关键词搜索...",className:"w-full px-3 py-2 pr-10 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"}),l&&e.jsx("div",{className:"absolute right-3 top-1/2 transform -translate-y-1/2",children:e.jsx("div",{className:"animate-spin rounded-full h-4 w-4 border-b-2 border-blue-500"})})]})]}),e.jsxs("div",{className:"flex items-center space-x-4",children:[e.jsxs("div",{className:`flex items-center space-x-2 px-3 py-1 rounded-full text-sm ${l?"bg-yellow-100 text-yellow-800":"bg-green-100 text-green-800"}`,children:[e.jsx("div",{className:`w-2 h-2 rounded-full ${l?"bg-yellow-500 animate-pulse":"bg-green-500"}`}),e.jsx("span",{children:l?"搜索中...":"搜索完成"})]}),e.jsxs("span",{className:"text-sm text-gray-600",children:["找到 ",s.length.toLocaleString()," 个结果"]})]}),e.jsxs("div",{className:"border border-gray-200 rounded-lg",children:[e.jsx("div",{className:"bg-gray-50 px-3 py-2 border-b border-gray-200",children:e.jsx("h4",{className:"font-semibold text-gray-700",children:"搜索结果"})}),e.jsx("div",{className:"max-h-60 overflow-y-auto",children:a===""?e.jsx("div",{className:"p-4 text-center text-gray-500",children:"请输入关键词开始搜索"}):s.length===0&&!l?e.jsx("div",{className:"p-4 text-center text-gray-500",children:"没有找到匹配的结果"}):e.jsxs("div",{className:"divide-y divide-gray-100",children:[s.slice(0,50).map((n,i)=>e.jsx("div",{className:"px-3 py-2 text-sm text-gray-700 hover:bg-gray-50",children:n},i)),s.length>50&&e.jsxs("div",{className:"px-3 py-2 text-sm text-gray-500 text-center bg-gray-50",children:["还有 ",(s.length-50).toLocaleString()," ","个结果..."]})]})})]})]}),e.jsxs("div",{children:[e.jsx("h4",{className:"font-semibold text-gray-700 mb-3",children:"操作日志:"}),e.jsx("div",{className:"bg-gray-50 rounded-lg p-3 min-h-[300px]",children:h.length===0?e.jsx("p",{className:"text-gray-500 text-sm",children:"输入搜索内容查看日志"}):e.jsx("div",{className:"space-y-1 max-h-60 overflow-y-auto",children:h.map((n,i)=>e.jsx("div",{className:"text-sm font-mono text-gray-700",children:n},i))})}),e.jsxs("div",{className:"mt-4 p-3 bg-blue-50 rounded border border-blue-200",children:[e.jsx("h4",{className:"font-semibold text-blue-800 mb-2",children:"性能指标:"}),e.jsxs("div",{className:"text-sm text-blue-700 space-y-1",children:[e.jsxs("p",{children:[e.jsx("strong",{children:"数据量:"})," ",m.length.toLocaleString()," 项"]}),e.jsxs("p",{children:[e.jsx("strong",{children:"搜索状态:"})," ",l?"进行中":"空闲"]}),e.jsxs("p",{children:[e.jsx("strong",{children:"结果数量:"})," ",s.length.toLocaleString()," 项"]}),e.jsxs("p",{children:[e.jsx("strong",{children:"显示数量:"})," ",Math.min(s.length,50)," ","项"]})]})]})]})]}),e.jsx("div",{className:"mt-4 p-3 bg-green-50 rounded border border-green-200",children:e.jsx("p",{className:"text-sm text-green-800",children:"💡 useTransition 将搜索过滤标记为非紧急更新，保持输入框的响应性，避免界面卡顿。"})})]})},S=()=>{var u;const[a,j]=c.useState(0),[s,y]=c.useTransition(),[l,f]=c.useState([]),h=r=>{const n=new Date().toLocaleTimeString();f(i=>[...i.slice(-5),`${n}: ${r}`])},g=r=>Array.from({length:1e3},(i,x)=>e.jsxs("div",{className:"p-2 border-b border-gray-100 text-sm",children:["标签页 ",r+1," - 项目 ",x+1,":"," ",Math.random().toString(36).substring(2)]},x)),m=[{id:"home",title:"首页",content:e.jsxs("div",{className:"space-y-2",children:[e.jsx("h3",{className:"text-lg font-semibold text-gray-800",children:"欢迎来到首页"}),e.jsx("p",{className:"text-gray-600",children:"这是一个简单的标签页内容，渲染速度很快。"}),e.jsxs("div",{className:"grid grid-cols-2 gap-4 mt-4",children:[e.jsxs("div",{className:"p-4 bg-blue-50 rounded-lg",children:[e.jsx("h4",{className:"font-semibold text-blue-800",children:"快速访问"}),e.jsx("p",{className:"text-sm text-blue-600 mt-1",children:"这个标签页加载很快"})]}),e.jsxs("div",{className:"p-4 bg-green-50 rounded-lg",children:[e.jsx("h4",{className:"font-semibold text-green-800",children:"实时状态"}),e.jsx("p",{className:"text-sm text-green-600 mt-1",children:"界面响应迅速"})]})]})]})},{id:"products",title:"产品列表",content:e.jsxs("div",{children:[e.jsx("h3",{className:"text-lg font-semibold text-gray-800 mb-3",children:"产品列表 (1000 项)"}),e.jsx("div",{className:"max-h-60 overflow-y-auto border border-gray-200 rounded",children:g(1)})]})},{id:"analytics",title:"数据分析",content:e.jsxs("div",{children:[e.jsx("h3",{className:"text-lg font-semibold text-gray-800 mb-3",children:"数据分析 (1000 项)"}),e.jsx("div",{className:"max-h-60 overflow-y-auto border border-gray-200 rounded",children:g(2)})]})},{id:"settings",title:"设置",content:e.jsxs("div",{children:[e.jsx("h3",{className:"text-lg font-semibold text-gray-800 mb-3",children:"系统设置 (1000 项)"}),e.jsx("div",{className:"max-h-60 overflow-y-auto border border-gray-200 rounded",children:g(3)})]})}],v=r=>{h(`开始切换到: ${m[r].title}`),y(()=>{j(r),h(`切换完成: ${m[r].title}`)})},p=()=>{f([])};return e.jsxs("div",{className:"p-6 bg-white rounded-lg border border-gray-200",children:[e.jsxs("div",{className:"flex items-center justify-between mb-4",children:[e.jsx("h3",{className:"text-lg font-semibold text-gray-800",children:"标签页切换演示"}),e.jsx("button",{onClick:p,className:"px-3 py-1 bg-gray-500 text-white rounded text-sm hover:bg-gray-600 transition-colors",children:"清空日志"})]}),e.jsxs("div",{className:"grid grid-cols-1 lg:grid-cols-2 gap-6",children:[e.jsxs("div",{className:"space-y-4",children:[e.jsx("div",{className:"flex items-center space-x-2",children:e.jsxs("div",{className:`flex items-center space-x-2 px-3 py-1 rounded-full text-sm ${s?"bg-yellow-100 text-yellow-800":"bg-green-100 text-green-800"}`,children:[e.jsx("div",{className:`w-2 h-2 rounded-full ${s?"bg-yellow-500 animate-pulse":"bg-green-500"}`}),e.jsx("span",{children:s?"切换中...":"切换完成"})]})}),e.jsx("div",{className:"border-b border-gray-200",children:e.jsx("nav",{className:"flex space-x-1",children:m.map((r,n)=>e.jsxs("button",{onClick:()=>v(n),className:`px-4 py-2 text-sm font-medium rounded-t-lg transition-colors ${a===n?"bg-blue-500 text-white border-b-2 border-blue-500":"bg-gray-100 text-gray-700 hover:bg-gray-200"}`,children:[r.title,s&&a!==n&&e.jsx("span",{className:"ml-2 inline-block w-2 h-2 bg-yellow-400 rounded-full animate-pulse"})]},r.id))})}),e.jsx("div",{className:"min-h-[300px] p-4 bg-gray-50 rounded-lg",children:s?e.jsx("div",{className:"flex items-center justify-center h-40",children:e.jsxs("div",{className:"text-center",children:[e.jsx("div",{className:"animate-spin rounded-full h-8 w-8 border-b-2 border-blue-500 mx-auto mb-2"}),e.jsx("p",{className:"text-gray-600",children:"加载中..."})]})}):m[a].content})]}),e.jsxs("div",{children:[e.jsx("h4",{className:"font-semibold text-gray-700 mb-3",children:"操作日志:"}),e.jsx("div",{className:"bg-gray-50 rounded-lg p-3 min-h-[200px]",children:l.length===0?e.jsx("p",{className:"text-gray-500 text-sm",children:"点击标签页查看切换日志"}):e.jsx("div",{className:"space-y-1 max-h-40 overflow-y-auto",children:l.map((r,n)=>e.jsx("div",{className:"text-sm font-mono text-gray-700",children:r},n))})}),e.jsxs("div",{className:"mt-4 p-3 bg-purple-50 rounded border border-purple-200",children:[e.jsx("h4",{className:"font-semibold text-purple-800 mb-2",children:"切换状态:"}),e.jsxs("div",{className:"text-sm text-purple-700 space-y-1",children:[e.jsxs("p",{children:[e.jsx("strong",{children:"当前标签页:"})," ",(u=m[a])==null?void 0:u.title]}),e.jsxs("p",{children:[e.jsx("strong",{children:"切换状态:"})," ",s?"进行中":"完成"]}),e.jsxs("p",{children:[e.jsx("strong",{children:"标签页数量:"})," ",m.length]})]})]}),e.jsxs("div",{className:"mt-4 p-3 bg-orange-50 rounded border border-orange-200",children:[e.jsx("h4",{className:"font-semibold text-orange-800 mb-2",children:"性能提示:"}),e.jsxs("ul",{className:"text-sm text-orange-700 space-y-1",children:[e.jsx("li",{children:"• 复杂标签页使用 transition 避免卡顿"}),e.jsx("li",{children:"• 保持界面响应性"}),e.jsx("li",{children:"• 用户可以随时取消切换"})]})]})]})]}),e.jsx("div",{className:"mt-4 p-3 bg-yellow-50 rounded border border-yellow-200",children:e.jsx("p",{className:"text-sm text-yellow-800",children:"💡 标签页切换使用 useTransition，即使内容复杂也能保持界面响应，用户可以随时切换到其他标签页。"})})]})},L=()=>{const[a,j]=c.useState("name"),[s,y]=c.useState("asc"),[l,f]=c.useTransition(),[h,g]=c.useState([]),m=t=>{const o=new Date().toLocaleTimeString();g(N=>[...N.slice(-5),`${o}: ${t}`])},v=()=>{const t=["电子产品","服装","食品","图书","家居"],o=["产品A","产品B","产品C","产品D","产品E"];return Array.from({length:5e3},(N,d)=>({id:d+1,name:`${o[d%o.length]}${d+1}`,price:Math.floor(Math.random()*1e3)+10,category:t[d%t.length]}))},p=c.useMemo(()=>v(),[]),u=c.useMemo(()=>[...p].sort((o,N)=>{let d,b;switch(a){case"name":d=o.name,b=N.name;break;case"price":d=o.price,b=N.price;break;case"category":d=o.category,b=N.category;break;default:d=o.name,b=N.name}return typeof d=="string"&&typeof b=="string"?s==="asc"?d.localeCompare(b):b.localeCompare(d):s==="asc"?d-b:b-d}),[p,a,s]),r=t=>{m(`开始排序: ${t} (${s==="asc"?"升序":"降序"})`),f(()=>{a===t?y(o=>o==="asc"?"desc":"asc"):(j(t),y("asc")),m(`排序完成: ${t}`)})},n=()=>{g([])},i=t=>a!==t?"↕️":s==="asc"?"↑":"↓",x=u.slice(0,100);return e.jsxs("div",{className:"p-6 bg-white rounded-lg border border-gray-200",children:[e.jsxs("div",{className:"flex items-center justify-between mb-4",children:[e.jsx("h3",{className:"text-lg font-semibold text-gray-800",children:"列表排序演示"}),e.jsx("button",{onClick:n,className:"px-3 py-1 bg-gray-500 text-white rounded text-sm hover:bg-gray-600 transition-colors",children:"清空日志"})]}),e.jsxs("div",{className:"grid grid-cols-1 lg:grid-cols-3 gap-6",children:[e.jsxs("div",{className:"lg:col-span-2",children:[e.jsxs("div",{className:"flex items-center space-x-2 mb-4",children:[e.jsxs("div",{className:`flex items-center space-x-2 px-3 py-1 rounded-full text-sm ${l?"bg-yellow-100 text-yellow-800":"bg-green-100 text-green-800"}`,children:[e.jsx("div",{className:`w-2 h-2 rounded-full ${l?"bg-yellow-500 animate-pulse":"bg-green-500"}`}),e.jsx("span",{children:l?"排序中...":"排序完成"})]}),e.jsxs("span",{className:"text-sm text-gray-600",children:["共 ",p.length," 条数据"]})]}),e.jsxs("div",{className:"border border-gray-200 rounded-lg overflow-hidden",children:[e.jsxs("table",{className:"w-full",children:[e.jsx("thead",{className:"bg-gray-50",children:e.jsxs("tr",{children:[e.jsx("th",{className:"px-4 py-3 text-left",children:e.jsxs("button",{onClick:()=>r("name"),className:`flex items-center space-x-1 font-semibold text-sm hover:text-blue-600 transition-colors ${a==="name"?"text-blue-600":"text-gray-700"}`,children:[e.jsx("span",{children:"名称"}),e.jsx("span",{className:"text-xs",children:i("name")})]})}),e.jsx("th",{className:"px-4 py-3 text-left",children:e.jsxs("button",{onClick:()=>r("price"),className:`flex items-center space-x-1 font-semibold text-sm hover:text-blue-600 transition-colors ${a==="price"?"text-blue-600":"text-gray-700"}`,children:[e.jsx("span",{children:"价格"}),e.jsx("span",{className:"text-xs",children:i("price")})]})}),e.jsx("th",{className:"px-4 py-3 text-left",children:e.jsxs("button",{onClick:()=>r("category"),className:`flex items-center space-x-1 font-semibold text-sm hover:text-blue-600 transition-colors ${a==="category"?"text-blue-600":"text-gray-700"}`,children:[e.jsx("span",{children:"分类"}),e.jsx("span",{className:"text-xs",children:i("category")})]})})]})}),e.jsx("tbody",{children:x.map((t,o)=>e.jsxs("tr",{className:o%2===0?"bg-white":"bg-gray-50",children:[e.jsx("td",{className:"px-4 py-2 text-sm text-gray-900",children:t.name}),e.jsxs("td",{className:"px-4 py-2 text-sm text-gray-900",children:["¥",t.price]}),e.jsx("td",{className:"px-4 py-2 text-sm text-gray-900",children:t.category})]},t.id))})]}),u.length>100&&e.jsx("div",{className:"px-4 py-3 bg-gray-50 border-t border-gray-200 text-center",children:e.jsxs("p",{className:"text-sm text-gray-600",children:["显示前 100 条，还有 ",u.length-100," 条数据"]})})]})]}),e.jsxs("div",{className:"space-y-4",children:[e.jsxs("div",{children:[e.jsx("h4",{className:"font-semibold text-gray-700 mb-3",children:"排序状态:"}),e.jsx("div",{className:`p-3 rounded-lg border ${l?"bg-yellow-50 border-yellow-200":"bg-green-50 border-green-200"}`,children:l?e.jsxs("div",{className:"flex items-center space-x-2",children:[e.jsx("div",{className:"animate-spin rounded-full h-4 w-4 border-b-2 border-yellow-500"}),e.jsx("span",{className:"text-sm text-yellow-800",children:"正在排序..."})]}):e.jsx("span",{className:"text-sm text-green-800",children:"排序完成"})})]}),e.jsxs("div",{children:[e.jsx("h4",{className:"font-semibold text-gray-700 mb-3",children:"操作日志:"}),e.jsx("div",{className:"bg-gray-50 rounded-lg p-3 min-h-[150px]",children:h.length===0?e.jsx("p",{className:"text-gray-500 text-sm",children:"点击表头进行排序"}):e.jsx("div",{className:"space-y-1 max-h-32 overflow-y-auto",children:h.map((t,o)=>e.jsx("div",{className:"text-sm font-mono text-gray-700",children:t},o))})})]}),e.jsxs("div",{className:"p-3 bg-blue-50 rounded border border-blue-200",children:[e.jsx("h4",{className:"font-semibold text-blue-800 mb-2",children:"排序信息:"}),e.jsxs("div",{className:"text-sm text-blue-700 space-y-1",children:[e.jsxs("p",{children:[e.jsx("strong",{children:"排序字段:"})," ",a==="name"?"名称":a==="price"?"价格":"分类"]}),e.jsxs("p",{children:[e.jsx("strong",{children:"排序方向:"})," ",s==="asc"?"升序":"降序"]}),e.jsxs("p",{children:[e.jsx("strong",{children:"数据总量:"})," ",p.length," 条"]}),e.jsxs("p",{children:[e.jsx("strong",{children:"显示数量:"})," ",x.length," 条"]})]})]}),e.jsxs("div",{className:"p-3 bg-orange-50 rounded border border-orange-200",children:[e.jsx("h4",{className:"font-semibold text-orange-800 mb-2",children:"性能优化:"}),e.jsxs("ul",{className:"text-sm text-orange-700 space-y-1",children:[e.jsx("li",{children:"• 大数据量排序不阻塞UI"}),e.jsx("li",{children:"• 保持界面响应性"}),e.jsx("li",{children:"• 可中断和恢复操作"})]})]})]})]}),e.jsx("div",{className:"mt-4 p-3 bg-yellow-50 rounded border border-yellow-200",children:e.jsx("p",{className:"text-sm text-yellow-800",children:"💡 大数据量排序使用 useTransition，避免长时间阻塞UI，用户可以随时进行其他操作。"})})]})},$=`import React, { useMemo, useState, useTransition } from "react";\r
\r
// 基础用法演示 - 搜索过滤\r
export const BasicUsageDemo: React.FC = () => {\r
  const [query, setQuery] = useState("");\r
  const [filteredItems, setFilteredItems] = useState<string[]>([]);\r
  const [isPending, startTransition] = useTransition();\r
  const [logs, setLogs] = useState<string[]>([]);\r
\r
  // 模拟大量数据\r
  const allItems = useMemo(() => {\r
    return Array.from(\r
      { length: 10000 },\r
      (_, i) => \`项目 \${i + 1} - \${Math.random().toString(36).substring(2)}\`\r
    );\r
  }, []);\r
\r
  const addLog = (message: string) => {\r
    const timestamp = new Date().toLocaleTimeString();\r
    setLogs((prev) => [...prev.slice(-5), \`\${timestamp}: \${message}\`]);\r
  };\r
\r
  const handleSearch = (value: string) => {\r
    setQuery(value);\r
    addLog(\`开始搜索: "\${value}"\`);\r
\r
    // 使用 startTransition 标记为非紧急更新\r
    startTransition(() => {\r
      const filtered = allItems.filter((item) =>\r
        item.toLowerCase().includes(value.toLowerCase())\r
      );\r
      setFilteredItems(filtered);\r
      addLog(\`搜索完成，找到 \${filtered.length} 个结果\`);\r
    });\r
  };\r
\r
  const clearSearch = () => {\r
    setQuery("");\r
    setFilteredItems([]);\r
    addLog("清空搜索");\r
  };\r
\r
  const clearLogs = () => {\r
    setLogs([]);\r
  };\r
\r
  return (\r
    <div className="p-6 bg-white rounded-lg border border-gray-200">\r
      <div className="flex items-center justify-between mb-4">\r
        <h3 className="text-lg font-semibold text-gray-800">搜索过滤演示</h3>\r
        <div className="space-x-2">\r
          <button\r
            onClick={clearSearch}\r
            className="px-3 py-1 bg-red-500 text-white rounded text-sm hover:bg-red-600 transition-colors"\r
          >\r
            清空搜索\r
          </button>\r
          <button\r
            onClick={clearLogs}\r
            className="px-3 py-1 bg-gray-500 text-white rounded text-sm hover:bg-gray-600 transition-colors"\r
          >\r
            清空日志\r
          </button>\r
        </div>\r
      </div>\r
\r
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">\r
        <div className="space-y-4">\r
          <div>\r
            <label className="block text-sm font-medium text-gray-700 mb-2">\r
              搜索内容 (总共 {allItems.length.toLocaleString()} 项):\r
            </label>\r
            <div className="relative">\r
              <input\r
                type="text"\r
                value={query}\r
                onChange={(e) => handleSearch(e.target.value)}\r
                placeholder="输入关键词搜索..."\r
                className="w-full px-3 py-2 pr-10 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"\r
              />\r
              {isPending && (\r
                <div className="absolute right-3 top-1/2 transform -translate-y-1/2">\r
                  <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-blue-500"></div>\r
                </div>\r
              )}\r
            </div>\r
          </div>\r
\r
          <div className="flex items-center space-x-4">\r
            <div\r
              className={\`flex items-center space-x-2 px-3 py-1 rounded-full text-sm \${\r
                isPending\r
                  ? "bg-yellow-100 text-yellow-800"\r
                  : "bg-green-100 text-green-800"\r
              }\`}\r
            >\r
              <div\r
                className={\`w-2 h-2 rounded-full \${\r
                  isPending ? "bg-yellow-500 animate-pulse" : "bg-green-500"\r
                }\`}\r
              />\r
              <span>{isPending ? "搜索中..." : "搜索完成"}</span>\r
            </div>\r
            <span className="text-sm text-gray-600">\r
              找到 {filteredItems.length.toLocaleString()} 个结果\r
            </span>\r
          </div>\r
\r
          <div className="border border-gray-200 rounded-lg">\r
            <div className="bg-gray-50 px-3 py-2 border-b border-gray-200">\r
              <h4 className="font-semibold text-gray-700">搜索结果</h4>\r
            </div>\r
            <div className="max-h-60 overflow-y-auto">\r
              {query === "" ? (\r
                <div className="p-4 text-center text-gray-500">\r
                  请输入关键词开始搜索\r
                </div>\r
              ) : filteredItems.length === 0 && !isPending ? (\r
                <div className="p-4 text-center text-gray-500">\r
                  没有找到匹配的结果\r
                </div>\r
              ) : (\r
                <div className="divide-y divide-gray-100">\r
                  {filteredItems.slice(0, 50).map((item, index) => (\r
                    <div\r
                      key={index}\r
                      className="px-3 py-2 text-sm text-gray-700 hover:bg-gray-50"\r
                    >\r
                      {item}\r
                    </div>\r
                  ))}\r
                  {filteredItems.length > 50 && (\r
                    <div className="px-3 py-2 text-sm text-gray-500 text-center bg-gray-50">\r
                      还有 {(filteredItems.length - 50).toLocaleString()}{" "}\r
                      个结果...\r
                    </div>\r
                  )}\r
                </div>\r
              )}\r
            </div>\r
          </div>\r
        </div>\r
\r
        <div>\r
          <h4 className="font-semibold text-gray-700 mb-3">操作日志:</h4>\r
          <div className="bg-gray-50 rounded-lg p-3 min-h-[300px]">\r
            {logs.length === 0 ? (\r
              <p className="text-gray-500 text-sm">输入搜索内容查看日志</p>\r
            ) : (\r
              <div className="space-y-1 max-h-60 overflow-y-auto">\r
                {logs.map((log, index) => (\r
                  <div key={index} className="text-sm font-mono text-gray-700">\r
                    {log}\r
                  </div>\r
                ))}\r
              </div>\r
            )}\r
          </div>\r
\r
          <div className="mt-4 p-3 bg-blue-50 rounded border border-blue-200">\r
            <h4 className="font-semibold text-blue-800 mb-2">性能指标:</h4>\r
            <div className="text-sm text-blue-700 space-y-1">\r
              <p>\r
                <strong>数据量:</strong> {allItems.length.toLocaleString()} 项\r
              </p>\r
              <p>\r
                <strong>搜索状态:</strong> {isPending ? "进行中" : "空闲"}\r
              </p>\r
              <p>\r
                <strong>结果数量:</strong>{" "}\r
                {filteredItems.length.toLocaleString()} 项\r
              </p>\r
              <p>\r
                <strong>显示数量:</strong> {Math.min(filteredItems.length, 50)}{" "}\r
                项\r
              </p>\r
            </div>\r
          </div>\r
        </div>\r
      </div>\r
\r
      <div className="mt-4 p-3 bg-green-50 rounded border border-green-200">\r
        <p className="text-sm text-green-800">\r
          💡 useTransition\r
          将搜索过滤标记为非紧急更新，保持输入框的响应性，避免界面卡顿。\r
        </p>\r
      </div>\r
    </div>\r
  );\r
};\r
`,C=`import React, { useState, useTransition, useMemo } from "react";

// 列表排序演示
interface ListItem {
  id: number;
  name: string;
  price: number;
  category: string;
}

type SortField = "name" | "price" | "category";
type SortDirection = "asc" | "desc";

export const ListSortDemo: React.FC = () => {
  const [sortField, setSortField] = useState<SortField>("name");
  const [sortDirection, setSortDirection] = useState<SortDirection>("asc");
  const [isPending, startTransition] = useTransition();
  const [logs, setLogs] = useState<string[]>([]);

  const addLog = (message: string) => {
    const timestamp = new Date().toLocaleTimeString();
    setLogs((prev) => [...prev.slice(-5), \`\${timestamp}: \${message}\`]);
  };

  // 生成大量测试数据
  const generateData = (): ListItem[] => {
    const categories = ["电子产品", "服装", "食品", "图书", "家居"];
    const names = ["产品A", "产品B", "产品C", "产品D", "产品E"];

    return Array.from({ length: 5000 }, (_, i) => ({
      id: i + 1,
      name: \`\${names[i % names.length]}\${i + 1}\`,
      price: Math.floor(Math.random() * 1000) + 10,
      category: categories[i % categories.length],
    }));
  };

  const data = useMemo(() => generateData(), []);

  // 排序逻辑
  const sortedData = useMemo(() => {
    const sorted = [...data].sort((a, b) => {
      let aValue: string | number;
      let bValue: string | number;

      switch (sortField) {
        case "name":
          aValue = a.name;
          bValue = b.name;
          break;
        case "price":
          aValue = a.price;
          bValue = b.price;
          break;
        case "category":
          aValue = a.category;
          bValue = b.category;
          break;
        default:
          aValue = a.name;
          bValue = b.name;
      }

      if (typeof aValue === "string" && typeof bValue === "string") {
        return sortDirection === "asc"
          ? aValue.localeCompare(bValue)
          : bValue.localeCompare(aValue);
      } else {
        return sortDirection === "asc"
          ? (aValue as number) - (bValue as number)
          : (bValue as number) - (aValue as number);
      }
    });

    return sorted;
  }, [data, sortField, sortDirection]);

  const handleSort = (field: SortField) => {
    addLog(\`开始排序: \${field} (\${sortDirection === "asc" ? "升序" : "降序"})\`);

    // 使用 startTransition 标记排序为非紧急更新
    startTransition(() => {
      if (sortField === field) {
        setSortDirection((prev) => (prev === "asc" ? "desc" : "asc"));
      } else {
        setSortField(field);
        setSortDirection("asc");
      }
      addLog(\`排序完成: \${field}\`);
    });
  };

  const clearLogs = () => {
    setLogs([]);
  };

  const getSortIcon = (field: SortField) => {
    if (sortField !== field) return "↕️";
    return sortDirection === "asc" ? "↑" : "↓";
  };

  const displayData = sortedData.slice(0, 100); // 只显示前100条

  return (
    <div className="p-6 bg-white rounded-lg border border-gray-200">
      <div className="flex items-center justify-between mb-4">
        <h3 className="text-lg font-semibold text-gray-800">列表排序演示</h3>
        <button
          onClick={clearLogs}
          className="px-3 py-1 bg-gray-500 text-white rounded text-sm hover:bg-gray-600 transition-colors"
        >
          清空日志
        </button>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2">
          <div className="flex items-center space-x-2 mb-4">
            <div
              className={\`flex items-center space-x-2 px-3 py-1 rounded-full text-sm \${
                isPending
                  ? "bg-yellow-100 text-yellow-800"
                  : "bg-green-100 text-green-800"
              }\`}
            >
              <div
                className={\`w-2 h-2 rounded-full \${
                  isPending ? "bg-yellow-500 animate-pulse" : "bg-green-500"
                }\`}
              />
              <span>{isPending ? "排序中..." : "排序完成"}</span>
            </div>
            <span className="text-sm text-gray-600">
              共 {data.length} 条数据
            </span>
          </div>

          <div className="border border-gray-200 rounded-lg overflow-hidden">
            <table className="w-full">
              <thead className="bg-gray-50">
                <tr>
                  <th className="px-4 py-3 text-left">
                    <button
                      onClick={() => handleSort("name")}
                      className={\`flex items-center space-x-1 font-semibold text-sm hover:text-blue-600 transition-colors \${
                        sortField === "name" ? "text-blue-600" : "text-gray-700"
                      }\`}
                    >
                      <span>名称</span>
                      <span className="text-xs">{getSortIcon("name")}</span>
                    </button>
                  </th>
                  <th className="px-4 py-3 text-left">
                    <button
                      onClick={() => handleSort("price")}
                      className={\`flex items-center space-x-1 font-semibold text-sm hover:text-blue-600 transition-colors \${
                        sortField === "price"
                          ? "text-blue-600"
                          : "text-gray-700"
                      }\`}
                    >
                      <span>价格</span>
                      <span className="text-xs">{getSortIcon("price")}</span>
                    </button>
                  </th>
                  <th className="px-4 py-3 text-left">
                    <button
                      onClick={() => handleSort("category")}
                      className={\`flex items-center space-x-1 font-semibold text-sm hover:text-blue-600 transition-colors \${
                        sortField === "category"
                          ? "text-blue-600"
                          : "text-gray-700"
                      }\`}
                    >
                      <span>分类</span>
                      <span className="text-xs">{getSortIcon("category")}</span>
                    </button>
                  </th>
                </tr>
              </thead>
              <tbody>
                {displayData.map((item, index) => (
                  <tr
                    key={item.id}
                    className={index % 2 === 0 ? "bg-white" : "bg-gray-50"}
                  >
                    <td className="px-4 py-2 text-sm text-gray-900">
                      {item.name}
                    </td>
                    <td className="px-4 py-2 text-sm text-gray-900">
                      ¥{item.price}
                    </td>
                    <td className="px-4 py-2 text-sm text-gray-900">
                      {item.category}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>

            {sortedData.length > 100 && (
              <div className="px-4 py-3 bg-gray-50 border-t border-gray-200 text-center">
                <p className="text-sm text-gray-600">
                  显示前 100 条，还有 {sortedData.length - 100} 条数据
                </p>
              </div>
            )}
          </div>
        </div>

        <div className="space-y-4">
          <div>
            <h4 className="font-semibold text-gray-700 mb-3">排序状态:</h4>
            <div
              className={\`p-3 rounded-lg border \${
                isPending
                  ? "bg-yellow-50 border-yellow-200"
                  : "bg-green-50 border-green-200"
              }\`}
            >
              {isPending ? (
                <div className="flex items-center space-x-2">
                  <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-yellow-500"></div>
                  <span className="text-sm text-yellow-800">正在排序...</span>
                </div>
              ) : (
                <span className="text-sm text-green-800">排序完成</span>
              )}
            </div>
          </div>

          <div>
            <h4 className="font-semibold text-gray-700 mb-3">操作日志:</h4>
            <div className="bg-gray-50 rounded-lg p-3 min-h-[150px]">
              {logs.length === 0 ? (
                <p className="text-gray-500 text-sm">点击表头进行排序</p>
              ) : (
                <div className="space-y-1 max-h-32 overflow-y-auto">
                  {logs.map((log, index) => (
                    <div
                      key={index}
                      className="text-sm font-mono text-gray-700"
                    >
                      {log}
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>

          <div className="p-3 bg-blue-50 rounded border border-blue-200">
            <h4 className="font-semibold text-blue-800 mb-2">排序信息:</h4>
            <div className="text-sm text-blue-700 space-y-1">
              <p>
                <strong>排序字段:</strong>{" "}
                {sortField === "name"
                  ? "名称"
                  : sortField === "price"
                  ? "价格"
                  : "分类"}
              </p>
              <p>
                <strong>排序方向:</strong>{" "}
                {sortDirection === "asc" ? "升序" : "降序"}
              </p>
              <p>
                <strong>数据总量:</strong> {data.length} 条
              </p>
              <p>
                <strong>显示数量:</strong> {displayData.length} 条
              </p>
            </div>
          </div>

          <div className="p-3 bg-orange-50 rounded border border-orange-200">
            <h4 className="font-semibold text-orange-800 mb-2">性能优化:</h4>
            <ul className="text-sm text-orange-700 space-y-1">
              <li>• 大数据量排序不阻塞UI</li>
              <li>• 保持界面响应性</li>
              <li>• 可中断和恢复操作</li>
            </ul>
          </div>
        </div>
      </div>

      <div className="mt-4 p-3 bg-yellow-50 rounded border border-yellow-200">
        <p className="text-sm text-yellow-800">
          💡 大数据量排序使用
          useTransition，避免长时间阻塞UI，用户可以随时进行其他操作。
        </p>
      </div>
    </div>
  );
};
`,D=`import React, { useState, useTransition } from "react";

// 标签页切换演示
interface TabContent {
  id: string;
  title: string;
  content: React.ReactNode;
}

export const TabSwitchDemo: React.FC = () => {
  const [activeTab, setActiveTab] = useState(0);
  const [isPending, startTransition] = useTransition();
  const [logs, setLogs] = useState<string[]>([]);

  const addLog = (message: string) => {
    const timestamp = new Date().toLocaleTimeString();
    setLogs((prev) => [...prev.slice(-5), \`\${timestamp}: \${message}\`]);
  };

  // 模拟复杂的标签页内容
  const generateComplexContent = (tabIndex: number) => {
    const items = Array.from({ length: 1000 }, (_, i) => (
      <div key={i} className="p-2 border-b border-gray-100 text-sm">
        标签页 {tabIndex + 1} - 项目 {i + 1}:{" "}
        {Math.random().toString(36).substring(2)}
      </div>
    ));
    return items;
  };

  const tabs: TabContent[] = [
    {
      id: "home",
      title: "首页",
      content: (
        <div className="space-y-2">
          <h3 className="text-lg font-semibold text-gray-800">欢迎来到首页</h3>
          <p className="text-gray-600">
            这是一个简单的标签页内容，渲染速度很快。
          </p>
          <div className="grid grid-cols-2 gap-4 mt-4">
            <div className="p-4 bg-blue-50 rounded-lg">
              <h4 className="font-semibold text-blue-800">快速访问</h4>
              <p className="text-sm text-blue-600 mt-1">这个标签页加载很快</p>
            </div>
            <div className="p-4 bg-green-50 rounded-lg">
              <h4 className="font-semibold text-green-800">实时状态</h4>
              <p className="text-sm text-green-600 mt-1">界面响应迅速</p>
            </div>
          </div>
        </div>
      ),
    },
    {
      id: "products",
      title: "产品列表",
      content: (
        <div>
          <h3 className="text-lg font-semibold text-gray-800 mb-3">
            产品列表 (1000 项)
          </h3>
          <div className="max-h-60 overflow-y-auto border border-gray-200 rounded">
            {generateComplexContent(1)}
          </div>
        </div>
      ),
    },
    {
      id: "analytics",
      title: "数据分析",
      content: (
        <div>
          <h3 className="text-lg font-semibold text-gray-800 mb-3">
            数据分析 (1000 项)
          </h3>
          <div className="max-h-60 overflow-y-auto border border-gray-200 rounded">
            {generateComplexContent(2)}
          </div>
        </div>
      ),
    },
    {
      id: "settings",
      title: "设置",
      content: (
        <div>
          <h3 className="text-lg font-semibold text-gray-800 mb-3">
            系统设置 (1000 项)
          </h3>
          <div className="max-h-60 overflow-y-auto border border-gray-200 rounded">
            {generateComplexContent(3)}
          </div>
        </div>
      ),
    },
  ];

  const handleTabSwitch = (index: number) => {
    addLog(\`开始切换到: \${tabs[index].title}\`);

    // 使用 startTransition 标记标签页切换为非紧急更新
    startTransition(() => {
      setActiveTab(index);
      addLog(\`切换完成: \${tabs[index].title}\`);
    });
  };

  const clearLogs = () => {
    setLogs([]);
  };

  return (
    <div className="p-6 bg-white rounded-lg border border-gray-200">
      <div className="flex items-center justify-between mb-4">
        <h3 className="text-lg font-semibold text-gray-800">标签页切换演示</h3>
        <button
          onClick={clearLogs}
          className="px-3 py-1 bg-gray-500 text-white rounded text-sm hover:bg-gray-600 transition-colors"
        >
          清空日志
        </button>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="space-y-4">
          <div className="flex items-center space-x-2">
            <div
              className={\`flex items-center space-x-2 px-3 py-1 rounded-full text-sm \${
                isPending
                  ? "bg-yellow-100 text-yellow-800"
                  : "bg-green-100 text-green-800"
              }\`}
            >
              <div
                className={\`w-2 h-2 rounded-full \${
                  isPending ? "bg-yellow-500 animate-pulse" : "bg-green-500"
                }\`}
              />
              <span>{isPending ? "切换中..." : "切换完成"}</span>
            </div>
          </div>

          <div className="border-b border-gray-200">
            <nav className="flex space-x-1">
              {tabs.map((tab, index) => (
                <button
                  key={tab.id}
                  onClick={() => handleTabSwitch(index)}
                  className={\`px-4 py-2 text-sm font-medium rounded-t-lg transition-colors \${
                    activeTab === index
                      ? "bg-blue-500 text-white border-b-2 border-blue-500"
                      : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                  }\`}
                >
                  {tab.title}
                  {isPending && activeTab !== index && (
                    <span className="ml-2 inline-block w-2 h-2 bg-yellow-400 rounded-full animate-pulse" />
                  )}
                </button>
              ))}
            </nav>
          </div>

          <div className="min-h-[300px] p-4 bg-gray-50 rounded-lg">
            {isPending ? (
              <div className="flex items-center justify-center h-40">
                <div className="text-center">
                  <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-blue-500 mx-auto mb-2"></div>
                  <p className="text-gray-600">加载中...</p>
                </div>
              </div>
            ) : (
              tabs[activeTab].content
            )}
          </div>
        </div>

        <div>
          <h4 className="font-semibold text-gray-700 mb-3">操作日志:</h4>
          <div className="bg-gray-50 rounded-lg p-3 min-h-[200px]">
            {logs.length === 0 ? (
              <p className="text-gray-500 text-sm">点击标签页查看切换日志</p>
            ) : (
              <div className="space-y-1 max-h-40 overflow-y-auto">
                {logs.map((log, index) => (
                  <div key={index} className="text-sm font-mono text-gray-700">
                    {log}
                  </div>
                ))}
              </div>
            )}
          </div>

          <div className="mt-4 p-3 bg-purple-50 rounded border border-purple-200">
            <h4 className="font-semibold text-purple-800 mb-2">切换状态:</h4>
            <div className="text-sm text-purple-700 space-y-1">
              <p>
                <strong>当前标签页:</strong> {tabs[activeTab]?.title}
              </p>
              <p>
                <strong>切换状态:</strong> {isPending ? "进行中" : "完成"}
              </p>
              <p>
                <strong>标签页数量:</strong> {tabs.length}
              </p>
            </div>
          </div>

          <div className="mt-4 p-3 bg-orange-50 rounded border border-orange-200">
            <h4 className="font-semibold text-orange-800 mb-2">性能提示:</h4>
            <ul className="text-sm text-orange-700 space-y-1">
              <li>• 复杂标签页使用 transition 避免卡顿</li>
              <li>• 保持界面响应性</li>
              <li>• 用户可以随时取消切换</li>
            </ul>
          </div>
        </div>
      </div>

      <div className="mt-4 p-3 bg-yellow-50 rounded border border-yellow-200">
        <p className="text-sm text-yellow-800">
          💡 标签页切换使用
          useTransition，即使内容复杂也能保持界面响应，用户可以随时切换到其他标签页。
        </p>
      </div>
    </div>
  );
};
`,I=()=>e.jsx(w,{title:"useTransition",description:"React 18 中的并发特性 Hook，用于标记状态更新为非紧急更新。它可以让 React 在处理大量计算时保持界面响应性，用户可以随时中断当前操作。",overview:e.jsx("div",{className:"space-y-4",children:e.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-6",children:[e.jsxs("div",{className:"bg-blue-50 p-4 rounded-lg border border-blue-200",children:[e.jsx("h3",{className:"font-semibold text-blue-800 mb-2",children:"🎯 核心概念"}),e.jsxs("ul",{className:"text-sm text-blue-700 space-y-1",children:[e.jsx("li",{children:"• 标记非紧急状态更新"}),e.jsx("li",{children:"• 保持界面响应性"}),e.jsx("li",{children:"• 支持中断和恢复"}),e.jsx("li",{children:"• 并发渲染特性"})]})]}),e.jsxs("div",{className:"bg-green-50 p-4 rounded-lg border border-green-200",children:[e.jsx("h3",{className:"font-semibold text-green-800 mb-2",children:"✨ 主要优势"}),e.jsxs("ul",{className:"text-sm text-green-700 space-y-1",children:[e.jsx("li",{children:"• 避免界面卡顿"}),e.jsx("li",{children:"• 提升用户体验"}),e.jsx("li",{children:"• 支持大数据处理"}),e.jsx("li",{children:"• 可中断的更新"})]})]}),e.jsxs("div",{className:"bg-yellow-50 p-4 rounded-lg border border-yellow-200",children:[e.jsx("h3",{className:"font-semibold text-yellow-800 mb-2",children:"🎪 适用场景"}),e.jsxs("ul",{className:"text-sm text-yellow-700 space-y-1",children:[e.jsx("li",{children:"• 大数据量搜索和过滤"}),e.jsx("li",{children:"• 复杂列表排序"}),e.jsx("li",{children:"• 标签页切换"}),e.jsx("li",{children:"• 数据可视化更新"})]})]}),e.jsxs("div",{className:"bg-red-50 p-4 rounded-lg border border-red-200",children:[e.jsx("h3",{className:"font-semibold text-red-800 mb-2",children:"⚠️ 注意事项"}),e.jsxs("ul",{className:"text-sm text-red-700 space-y-1",children:[e.jsx("li",{children:"• 仅在 React 18+ 中可用"}),e.jsx("li",{children:"• 不适用于紧急更新"}),e.jsx("li",{children:"• 需要合理设计加载状态"}),e.jsx("li",{children:"• 避免过度使用"})]})]})]})}),examples:[{title:"搜索过滤演示",component:e.jsx(T,{}),description:"演示在大数据量搜索中使用 useTransition 保持输入框的响应性",observationPoints:["在搜索框中快速输入，观察输入框始终保持响应","注意搜索过程中的加载状态指示器","观察搜索结果的实时更新","尝试在搜索过程中继续输入新内容","查看操作日志中的搜索时间记录"],keyPoints:["startTransition 标记搜索为非紧急更新","isPending 提供加载状态反馈","输入框保持响应性不被阻塞","用户可以随时修改搜索条件"],commonTraps:["将所有状态更新都标记为 transition","忘记处理 pending 状态","在紧急更新中使用 transition"],solutions:["只对非紧急更新使用 startTransition","使用 isPending 提供用户反馈","保持紧急更新的同步性"],codeExample:{code:$,highlights:[10,20,30],title:"基础用法源码"}},{title:"标签页切换演示",component:e.jsx(S,{}),description:"演示在复杂标签页切换中使用 useTransition 避免界面卡顿",observationPoints:["快速点击不同标签页，观察切换的流畅性","注意切换过程中的加载状态","尝试在加载过程中切换到其他标签页","观察复杂内容的渲染过程","查看切换日志中的时间记录"],keyPoints:["标签页切换使用 transition 避免阻塞","复杂内容渲染不影响用户交互","提供清晰的加载状态反馈","支持快速切换和中断"],commonTraps:["所有 UI 更新都使用 transition","缺乏加载状态的用户反馈","在简单操作中过度使用"],solutions:["区分紧急和非紧急更新","设计合适的加载状态 UI","根据操作复杂度选择是否使用"],codeExample:{code:D,highlights:[15,25,35],title:"标签切换源码"}},{title:"列表排序演示",component:e.jsx(L,{}),description:"演示在大数据量排序中使用 useTransition 保持界面响应性",observationPoints:["点击列标题进行排序，观察排序过程","快速切换不同的排序方式","注意排序过程中的状态指示","观察大数据量排序的性能表现","查看排序完成后的结果展示"],keyPoints:["大数据量排序不阻塞用户界面","支持排序过程中的状态切换","提供排序进度的视觉反馈","保持操作的可中断性"],commonTraps:["同步执行大数据量排序","缺乏排序状态的反馈","忽略排序过程的用户体验"],solutions:["使用 useTransition 包装排序操作","显示排序进度和状态","设计友好的加载界面"],codeExample:{code:C,highlights:[12,22,32],title:"列表排序源码"}}],tutorial:{concepts:["useTransition 的基本语法和返回值","startTransition 函数的使用方法","isPending 状态的含义和用途","紧急更新与非紧急更新的区别","React 18 并发特性的工作原理"],steps:["从 React 中导入 useTransition Hook","在组件中调用 useTransition 获取 isPending 和 startTransition","识别哪些状态更新是非紧急的","使用 startTransition 包装非紧急更新","利用 isPending 提供加载状态反馈","测试并发场景下的用户体验"],tips:["只对非紧急、耗时的状态更新使用 startTransition","保持用户输入等紧急更新的同步性","使用 isPending 提供适当的用户反馈","避免在所有状态更新中都使用 transition","结合 useMemo 和 useCallback 优化性能"]},interview:{questions:[{question:"useTransition 的作用是什么？",answer:"useTransition 用于标记状态更新为非紧急更新，让 React 在处理大量计算时保持界面响应性。它返回 isPending 状态和 startTransition 函数，可以让用户在复杂操作进行时仍能与界面交互。"},{question:"什么是紧急更新和非紧急更新？",answer:"紧急更新是需要立即响应的操作，如用户输入、点击等；非紧急更新是可以延迟的操作，如搜索结果、数据排序等。紧急更新会立即执行，非紧急更新可以被中断和恢复。"},{question:"useTransition 和 setTimeout 有什么区别？",answer:"useTransition 是 React 的并发特性，可以被中断和恢复，React 会智能调度；setTimeout 只是简单的延迟执行，无法被中断。useTransition 还提供 isPending 状态，更适合 React 应用的状态管理。"},{question:"什么时候应该使用 useTransition？",answer:"当有耗时的状态更新可能阻塞用户界面时使用：1) 大数据量的搜索和过滤；2) 复杂列表的排序；3) 重型组件的渲染；4) 数据可视化的更新。不要在简单操作或紧急更新中使用。"}],keyPoints:["标记非紧急状态更新","保持界面响应性","支持中断和恢复","提供 isPending 状态","仅在 React 18+ 中可用"]},bestPractices:{dos:["只对非紧急、耗时的更新使用 startTransition","使用 isPending 提供用户反馈","保持紧急更新的同步性","结合 useMemo 优化计算性能","设计合适的加载状态 UI","测试并发场景下的用户体验"],donts:["不要在所有状态更新中都使用 transition","不要在紧急更新中使用 startTransition","不要忽略 isPending 状态的处理","不要在简单操作中过度使用","不要依赖 transition 解决所有性能问题"],patterns:["搜索过滤模式：输入同步，搜索异步","标签页切换模式：点击同步，内容异步","列表排序模式：操作同步，排序异步","数据加载模式：请求同步，渲染异步"]}});export{I as default};
