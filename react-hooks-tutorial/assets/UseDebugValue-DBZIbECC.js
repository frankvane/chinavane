import{j as e,r as o}from"./index-DPG_OKoV.js";import{C as x}from"./ComponentTemplate-HXLvd6Xe.js";function m(n=0){const[t,s]=o.useState(n);o.useDebugValue(t>10?"High":"Low");const l=o.useCallback(()=>s(r=>r+1),[]),a=o.useCallback(()=>s(r=>r-1),[]),d=o.useCallback(()=>s(n),[n]);return{count:t,increment:l,decrement:a,reset:d}}const p=()=>{const n=m(0),t=m(15);return e.jsxs("div",{className:"space-y-6",children:[e.jsxs("div",{className:"bg-blue-50 p-4 rounded-lg border border-blue-200",children:[e.jsx("h3",{className:"text-lg font-semibold text-blue-800 mb-3",children:"计数器 1 (初始值: 0)"}),e.jsxs("div",{className:"flex items-center space-x-4 mb-3",children:[e.jsx("span",{className:"text-2xl font-bold text-blue-600",children:n.count}),e.jsxs("div",{className:"space-x-2",children:[e.jsx("button",{onClick:n.increment,className:"px-3 py-1 bg-blue-500 text-white rounded hover:bg-blue-600 transition-colors",children:"+1"}),e.jsx("button",{onClick:n.decrement,className:"px-3 py-1 bg-red-500 text-white rounded hover:bg-red-600 transition-colors",children:"-1"}),e.jsx("button",{onClick:n.reset,className:"px-3 py-1 bg-gray-500 text-white rounded hover:bg-gray-600 transition-colors",children:"重置"})]})]}),e.jsxs("p",{className:"text-sm text-blue-600",children:["调试信息: ",n.count>10?"High":"Low"]})]}),e.jsxs("div",{className:"bg-green-50 p-4 rounded-lg border border-green-200",children:[e.jsx("h3",{className:"text-lg font-semibold text-green-800 mb-3",children:"计数器 2 (初始值: 15)"}),e.jsxs("div",{className:"flex items-center space-x-4 mb-3",children:[e.jsx("span",{className:"text-2xl font-bold text-green-600",children:t.count}),e.jsxs("div",{className:"space-x-2",children:[e.jsx("button",{onClick:t.increment,className:"px-3 py-1 bg-green-500 text-white rounded hover:bg-green-600 transition-colors",children:"+1"}),e.jsx("button",{onClick:t.decrement,className:"px-3 py-1 bg-red-500 text-white rounded hover:bg-red-600 transition-colors",children:"-1"}),e.jsx("button",{onClick:t.reset,className:"px-3 py-1 bg-gray-500 text-white rounded hover:bg-gray-600 transition-colors",children:"重置"})]})]}),e.jsxs("p",{className:"text-sm text-green-600",children:["调试信息: ",t.count>10?"High":"Low"]})]}),e.jsxs("div",{className:"bg-yellow-50 p-4 rounded-lg border border-yellow-200",children:[e.jsx("h3",{className:"text-lg font-semibold text-yellow-800 mb-2",children:"💡 开发者工具提示"}),e.jsx("p",{className:"text-sm text-yellow-700",children:'打开浏览器开发者工具 → Components 标签页 → 选择使用了 useCounter 的组件， 可以在右侧面板看到 "DebugValue" 显示的调试信息。'})]})]})};function b(n){const[t,s]=o.useState(null),[l,a]=o.useState(!0),[d,r]=o.useState(null);return o.useDebugValue(t,i=>i?`${i.name} (${i.status})`:"No user"),o.useEffect(()=>{n&&(async()=>{try{a(!0),r(null),await new Promise(c=>setTimeout(c,1e3));const u={id:n,name:`User ${n}`,status:Math.random()>.5?"online":"offline"};s(u)}catch{r("Failed to fetch user")}finally{a(!1)}})()},[n]),{user:t,loading:l,error:d}}const g=()=>{const[n,t]=o.useState("1"),{user:s,loading:l,error:a}=b(n);return e.jsx("div",{className:"space-y-6",children:e.jsxs("div",{className:"bg-purple-50 p-4 rounded-lg border border-purple-200",children:[e.jsx("h3",{className:"text-lg font-semibold text-purple-800 mb-3",children:"用户状态查询"}),e.jsxs("div",{className:"mb-4",children:[e.jsx("label",{className:"block text-sm font-medium text-purple-700 mb-2",children:"用户 ID:"}),e.jsxs("select",{value:n,onChange:d=>t(d.target.value),className:"px-3 py-2 border border-purple-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500",children:[e.jsx("option",{value:"1",children:"用户 1"}),e.jsx("option",{value:"2",children:"用户 2"}),e.jsx("option",{value:"3",children:"用户 3"})]})]}),l&&e.jsxs("div",{className:"flex items-center space-x-2 text-purple-600",children:[e.jsx("div",{className:"animate-spin rounded-full h-4 w-4 border-2 border-purple-600 border-t-transparent"}),e.jsx("span",{children:"加载中..."})]}),a&&e.jsxs("div",{className:"bg-red-100 border border-red-300 text-red-700 px-3 py-2 rounded",children:["错误: ",a]}),s&&e.jsxs("div",{className:"bg-white p-3 rounded border",children:[e.jsx("h4",{className:"font-semibold",children:s.name}),e.jsxs("p",{className:"text-sm text-gray-600",children:["ID: ",s.id]}),e.jsxs("p",{className:"text-sm",children:["状态:",e.jsx("span",{className:`ml-1 px-2 py-1 rounded text-xs ${s.status==="online"?"bg-green-100 text-green-800":"bg-gray-100 text-gray-800"}`,children:s.status==="online"?"在线":"离线"})]})]}),e.jsx("div",{className:"mt-4 bg-purple-100 p-3 rounded",children:e.jsxs("p",{className:"text-sm text-purple-700",children:[e.jsx("strong",{children:"调试信息:"})," 在开发者工具中可以看到用户的详细状态信息"]})})]})})};function h(){const[n,t]=o.useState([]),s=n.reduce((r,i)=>r+i.price*i.quantity,0);o.useDebugValue({itemCount:n.length,total:`$${s.toFixed(2)}`,isEmpty:n.length===0});const l=o.useCallback(r=>{t(i=>i.find(c=>c.id===r.id)?i.map(c=>c.id===r.id?{...c,quantity:c.quantity+1}:c):[...i,{...r,quantity:1}])},[]),a=o.useCallback(r=>{t(i=>i.filter(u=>u.id!==r))},[]),d=o.useCallback(()=>{t([])},[]);return{items:n,total:s,addItem:l,removeItem:a,clearCart:d}}const v=()=>{const{items:n,total:t,addItem:s,removeItem:l,clearCart:a}=h(),d=[{id:"1",name:"MacBook Pro",price:1999},{id:"2",name:"iPhone 15",price:999},{id:"3",name:"AirPods Pro",price:249},{id:"4",name:"iPad Air",price:599}];return e.jsx("div",{className:"space-y-6",children:e.jsxs("div",{className:"bg-indigo-50 p-4 rounded-lg border border-indigo-200",children:[e.jsx("h3",{className:"text-lg font-semibold text-indigo-800 mb-3",children:"购物车管理"}),e.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-6",children:[e.jsxs("div",{children:[e.jsx("h4",{className:"font-semibold text-indigo-700 mb-3",children:"可选商品"}),e.jsx("div",{className:"space-y-2",children:d.map(r=>e.jsxs("div",{className:"flex items-center justify-between bg-white p-3 rounded border",children:[e.jsxs("div",{children:[e.jsx("p",{className:"font-medium",children:r.name}),e.jsxs("p",{className:"text-sm text-gray-600",children:["$",r.price]})]}),e.jsx("button",{onClick:()=>s(r),className:"px-3 py-1 bg-indigo-500 text-white rounded hover:bg-indigo-600 transition-colors",children:"添加"})]},r.id))})]}),e.jsxs("div",{children:[e.jsxs("div",{className:"flex items-center justify-between mb-3",children:[e.jsx("h4",{className:"font-semibold text-indigo-700",children:"购物车"}),e.jsx("button",{onClick:a,disabled:n.length===0,className:"px-3 py-1 bg-red-500 text-white rounded hover:bg-red-600 transition-colors disabled:opacity-50 disabled:cursor-not-allowed",children:"清空"})]}),n.length===0?e.jsx("div",{className:"bg-gray-100 p-4 rounded text-center text-gray-500",children:"购物车为空"}):e.jsxs("div",{className:"space-y-2",children:[n.map(r=>e.jsxs("div",{className:"flex items-center justify-between bg-white p-3 rounded border",children:[e.jsxs("div",{children:[e.jsx("p",{className:"font-medium",children:r.name}),e.jsxs("p",{className:"text-sm text-gray-600",children:["$",r.price," × ",r.quantity," = $",(r.price*r.quantity).toFixed(2)]})]}),e.jsx("button",{onClick:()=>l(r.id),className:"px-2 py-1 bg-red-500 text-white rounded hover:bg-red-600 transition-colors",children:"移除"})]},r.id)),e.jsxs("div",{className:"bg-indigo-100 p-3 rounded font-semibold text-indigo-800",children:["总计: $",t.toFixed(2)]})]})]})]}),e.jsx("div",{className:"mt-4 bg-indigo-100 p-3 rounded",children:e.jsxs("p",{className:"text-sm text-indigo-700",children:[e.jsx("strong",{children:"调试信息:"})," 商品数量: ",n.length,", 总价: $",t.toFixed(2),",",n.length===0?"购物车为空":"有商品"]})})]})})},N=`import React, { useCallback, useDebugValue, useState } from "react";

// 基础用法演示 - 带调试信息的自定义 Hook
function useCounter(initialValue: number = 0) {
  const [count, setCount] = useState(initialValue);

  // 为开发者工具提供调试信息
  useDebugValue(count > 10 ? "High" : "Low");

  const increment = useCallback(() => setCount((c) => c + 1), []);
  const decrement = useCallback(() => setCount((c) => c - 1), []);
  const reset = useCallback(() => setCount(initialValue), [initialValue]);

  return { count, increment, decrement, reset };
}

// 基础用法演示组件
const BasicUsageDemo: React.FC = () => {
  const counter1 = useCounter(0);
  const counter2 = useCounter(15); // 初始值大于 10，调试信息显示 "High"

  return (
    <div className="space-y-6">
      <div className="bg-blue-50 p-4 rounded-lg border border-blue-200">
        <h3 className="text-lg font-semibold text-blue-800 mb-3">
          计数器 1 (初始值: 0)
        </h3>
        <div className="flex items-center space-x-4 mb-3">
          <span className="text-2xl font-bold text-blue-600">
            {counter1.count}
          </span>
          <div className="space-x-2">
            <button
              onClick={counter1.increment}
              className="px-3 py-1 bg-blue-500 text-white rounded hover:bg-blue-600 transition-colors"
            >
              +1
            </button>
            <button
              onClick={counter1.decrement}
              className="px-3 py-1 bg-red-500 text-white rounded hover:bg-red-600 transition-colors"
            >
              -1
            </button>
            <button
              onClick={counter1.reset}
              className="px-3 py-1 bg-gray-500 text-white rounded hover:bg-gray-600 transition-colors"
            >
              重置
            </button>
          </div>
        </div>
        <p className="text-sm text-blue-600">
          调试信息: {counter1.count > 10 ? "High" : "Low"}
        </p>
      </div>

      <div className="bg-green-50 p-4 rounded-lg border border-green-200">
        <h3 className="text-lg font-semibold text-green-800 mb-3">
          计数器 2 (初始值: 15)
        </h3>
        <div className="flex items-center space-x-4 mb-3">
          <span className="text-2xl font-bold text-green-600">
            {counter2.count}
          </span>
          <div className="space-x-2">
            <button
              onClick={counter2.increment}
              className="px-3 py-1 bg-green-500 text-white rounded hover:bg-green-600 transition-colors"
            >
              +1
            </button>
            <button
              onClick={counter2.decrement}
              className="px-3 py-1 bg-red-500 text-white rounded hover:bg-red-600 transition-colors"
            >
              -1
            </button>
            <button
              onClick={counter2.reset}
              className="px-3 py-1 bg-gray-500 text-white rounded hover:bg-gray-600 transition-colors"
            >
              重置
            </button>
          </div>
        </div>
        <p className="text-sm text-green-600">
          调试信息: {counter2.count > 10 ? "High" : "Low"}
        </p>
      </div>

      <div className="bg-yellow-50 p-4 rounded-lg border border-yellow-200">
        <h3 className="text-lg font-semibold text-yellow-800 mb-2">
          💡 开发者工具提示
        </h3>
        <p className="text-sm text-yellow-700">
          打开浏览器开发者工具 → Components 标签页 → 选择使用了 useCounter
          的组件， 可以在右侧面板看到 "DebugValue" 显示的调试信息。
        </p>
      </div>
    </div>
  );
};

export default BasicUsageDemo;
export { useCounter };`,j=`import React, { useDebugValue, useEffect, useState } from "react";\r
\r
// 复杂调试信息演示\r
function useUserStatus(userId: string) {\r
  const [user, setUser] = useState<{\r
    id: string;\r
    name: string;\r
    status: "online" | "offline" | "away";\r
  } | null>(null);\r
  const [loading, setLoading] = useState(true);\r
  const [error, setError] = useState<string | null>(null);\r
\r
  // 使用函数形式的 useDebugValue，只在开发者工具打开时计算\r
  useDebugValue(user, (user) => {\r
    if (!user) return "No user";\r
    return \`\${user.name} (\${user.status})\`;\r
  });\r
\r
  useEffect(() => {\r
    const fetchUser = async () => {\r
      try {\r
        setLoading(true);\r
        setError(null);\r
\r
        // 模拟 API 调用\r
        await new Promise((resolve) => setTimeout(resolve, 1000));\r
\r
        const mockUser = {\r
          id: userId,\r
          name: \`User \${userId}\`,\r
          status:\r
            Math.random() > 0.5\r
              ? "online"\r
              : ("offline" as "online" | "offline"),\r
        };\r
\r
        setUser(mockUser);\r
      } catch (err) {\r
        setError("Failed to fetch user");\r
      } finally {\r
        setLoading(false);\r
      }\r
    };\r
\r
    if (userId) {\r
      fetchUser();\r
    }\r
  }, [userId]);\r
\r
  return { user, loading, error };\r
}\r
\r
const ComplexDebugDemo: React.FC = () => {\r
  const [userId, setUserId] = useState("1");\r
  const { user, loading, error } = useUserStatus(userId);\r
\r
  return (\r
    <div className="space-y-6">\r
      <div className="bg-purple-50 p-4 rounded-lg border border-purple-200">\r
        <h3 className="text-lg font-semibold text-purple-800 mb-3">\r
          用户状态查询\r
        </h3>\r
\r
        <div className="mb-4">\r
          <label className="block text-sm font-medium text-purple-700 mb-2">\r
            用户 ID:\r
          </label>\r
          <select\r
            value={userId}\r
            onChange={(e) => setUserId(e.target.value)}\r
            className="px-3 py-2 border border-purple-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500"\r
          >\r
            <option value="1">用户 1</option>\r
            <option value="2">用户 2</option>\r
            <option value="3">用户 3</option>\r
          </select>\r
        </div>\r
\r
        {loading && (\r
          <div className="flex items-center space-x-2 text-purple-600">\r
            <div className="animate-spin rounded-full h-4 w-4 border-2 border-purple-600 border-t-transparent"></div>\r
            <span>加载中...</span>\r
          </div>\r
        )}\r
\r
        {error && (\r
          <div className="bg-red-100 border border-red-300 text-red-700 px-3 py-2 rounded">\r
            错误: {error}\r
          </div>\r
        )}\r
\r
        {user && (\r
          <div className="bg-white p-3 rounded border">\r
            <h4 className="font-semibold">{user.name}</h4>\r
            <p className="text-sm text-gray-600">ID: {user.id}</p>\r
            <p className="text-sm">\r
              状态:\r
              <span\r
                className={\`ml-1 px-2 py-1 rounded text-xs \${\r
                  user.status === "online"\r
                    ? "bg-green-100 text-green-800"\r
                    : "bg-gray-100 text-gray-800"\r
                }\`}\r
              >\r
                {user.status === "online" ? "在线" : "离线"}\r
              </span>\r
            </p>\r
          </div>\r
        )}\r
\r
        <div className="mt-4 bg-purple-100 p-3 rounded">\r
          <p className="text-sm text-purple-700">\r
            <strong>调试信息:</strong> 在开发者工具中可以看到用户的详细状态信息\r
          </p>\r
        </div>\r
      </div>\r
    </div>\r
  );\r
};\r
\r
export default ComplexDebugDemo;\r
export { useUserStatus };`,y=`import React, { useCallback, useDebugValue, useState } from "react";\r
\r
// 嵌套调试信息演示\r
function useShoppingCart() {\r
  const [items, setItems] = useState<\r
    Array<{ id: string; name: string; price: number; quantity: number }>\r
  >([]);\r
\r
  // 计算总价\r
  const total = items.reduce(\r
    (sum, item) => sum + item.price * item.quantity,\r
    0\r
  );\r
\r
  // 提供详细的调试信息\r
  useDebugValue({\r
    itemCount: items.length,\r
    total: \`$\${total.toFixed(2)}\`,\r
    isEmpty: items.length === 0,\r
  });\r
\r
  const addItem = useCallback(\r
    (item: { id: string; name: string; price: number }) => {\r
      setItems((prev) => {\r
        const existing = prev.find((i) => i.id === item.id);\r
        if (existing) {\r
          return prev.map((i) =>\r
            i.id === item.id ? { ...i, quantity: i.quantity + 1 } : i\r
          );\r
        }\r
        return [...prev, { ...item, quantity: 1 }];\r
      });\r
    },\r
    []\r
  );\r
\r
  const removeItem = useCallback((id: string) => {\r
    setItems((prev) => prev.filter((item) => item.id !== id));\r
  }, []);\r
\r
  const clearCart = useCallback(() => {\r
    setItems([]);\r
  }, []);\r
\r
  return { items, total, addItem, removeItem, clearCart };\r
}\r
\r
const ShoppingCartDemo: React.FC = () => {\r
  const { items, total, addItem, removeItem, clearCart } = useShoppingCart();\r
\r
  const sampleItems = [\r
    { id: "1", name: "MacBook Pro", price: 1999 },\r
    { id: "2", name: "iPhone 15", price: 999 },\r
    { id: "3", name: "AirPods Pro", price: 249 },\r
    { id: "4", name: "iPad Air", price: 599 },\r
  ];\r
\r
  return (\r
    <div className="space-y-6">\r
      <div className="bg-indigo-50 p-4 rounded-lg border border-indigo-200">\r
        <h3 className="text-lg font-semibold text-indigo-800 mb-3">\r
          购物车管理\r
        </h3>\r
\r
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">\r
          {/* 商品列表 */}\r
          <div>\r
            <h4 className="font-semibold text-indigo-700 mb-3">可选商品</h4>\r
            <div className="space-y-2">\r
              {sampleItems.map((item) => (\r
                <div\r
                  key={item.id}\r
                  className="flex items-center justify-between bg-white p-3 rounded border"\r
                >\r
                  <div>\r
                    <p className="font-medium">{item.name}</p>\r
                    <p className="text-sm text-gray-600">\${item.price}</p>\r
                  </div>\r
                  <button\r
                    onClick={() => addItem(item)}\r
                    className="px-3 py-1 bg-indigo-500 text-white rounded hover:bg-indigo-600 transition-colors"\r
                  >\r
                    添加\r
                  </button>\r
                </div>\r
              ))}\r
            </div>\r
          </div>\r
\r
          {/* 购物车 */}\r
          <div>\r
            <div className="flex items-center justify-between mb-3">\r
              <h4 className="font-semibold text-indigo-700">购物车</h4>\r
              <button\r
                onClick={clearCart}\r
                disabled={items.length === 0}\r
                className="px-3 py-1 bg-red-500 text-white rounded hover:bg-red-600 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"\r
              >\r
                清空\r
              </button>\r
            </div>\r
\r
            {items.length === 0 ? (\r
              <div className="bg-gray-100 p-4 rounded text-center text-gray-500">\r
                购物车为空\r
              </div>\r
            ) : (\r
              <div className="space-y-2">\r
                {items.map((item) => (\r
                  <div\r
                    key={item.id}\r
                    className="flex items-center justify-between bg-white p-3 rounded border"\r
                  >\r
                    <div>\r
                      <p className="font-medium">{item.name}</p>\r
                      <p className="text-sm text-gray-600">\r
                        \${item.price} × {item.quantity} = $\r
                        {(item.price * item.quantity).toFixed(2)}\r
                      </p>\r
                    </div>\r
                    <button\r
                      onClick={() => removeItem(item.id)}\r
                      className="px-2 py-1 bg-red-500 text-white rounded hover:bg-red-600 transition-colors"\r
                    >\r
                      移除\r
                    </button>\r
                  </div>\r
                ))}\r
\r
                <div className="bg-indigo-100 p-3 rounded font-semibold text-indigo-800">\r
                  总计: \${total.toFixed(2)}\r
                </div>\r
              </div>\r
            )}\r
          </div>\r
        </div>\r
\r
        <div className="mt-4 bg-indigo-100 p-3 rounded">\r
          <p className="text-sm text-indigo-700">\r
            <strong>调试信息:</strong> 商品数量: {items.length}, 总价: $\r
            {total.toFixed(2)},{items.length === 0 ? "购物车为空" : "有商品"}\r
          </p>\r
        </div>\r
      </div>\r
    </div>\r
  );\r
};\r
\r
export default ShoppingCartDemo;\r
export { useShoppingCart };`,k=()=>e.jsx(x,{title:"useDebugValue",description:"React 开发调试 Hook，为自定义 Hooks 提供调试信息。在开发者工具中显示有用的调试标签，帮助开发者理解 Hook 的内部状态。",overview:e.jsx("div",{className:"space-y-4",children:e.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-6",children:[e.jsxs("div",{className:"bg-blue-50 p-4 rounded-lg border border-blue-200",children:[e.jsx("h3",{className:"font-semibold text-blue-800 mb-2",children:"🎯 核心概念"}),e.jsxs("ul",{className:"text-sm text-blue-700 space-y-1",children:[e.jsx("li",{children:"• 开发者工具调试支持"}),e.jsx("li",{children:"• 自定义 Hook 状态展示"}),e.jsx("li",{children:"• 条件性调试信息计算"}),e.jsx("li",{children:"• 生产环境自动忽略"})]})]}),e.jsxs("div",{className:"bg-green-50 p-4 rounded-lg border border-green-200",children:[e.jsx("h3",{className:"font-semibold text-green-800 mb-2",children:"✨ 主要优势"}),e.jsxs("ul",{className:"text-sm text-green-700 space-y-1",children:[e.jsx("li",{children:"• 提升开发体验"}),e.jsx("li",{children:"• 简化调试过程"}),e.jsx("li",{children:"• 零生产环境开销"}),e.jsx("li",{children:"• 灵活的信息格式"})]})]}),e.jsxs("div",{className:"bg-yellow-50 p-4 rounded-lg border border-yellow-200",children:[e.jsx("h3",{className:"font-semibold text-yellow-800 mb-2",children:"🎪 适用场景"}),e.jsxs("ul",{className:"text-sm text-yellow-700 space-y-1",children:[e.jsx("li",{children:"• 复杂自定义 Hook 调试"}),e.jsx("li",{children:"• 状态变化追踪"}),e.jsx("li",{children:"• 团队协作开发"}),e.jsx("li",{children:"• Hook 库开发"})]})]}),e.jsxs("div",{className:"bg-red-50 p-4 rounded-lg border border-red-200",children:[e.jsx("h3",{className:"font-semibold text-red-800 mb-2",children:"⚠️ 注意事项"}),e.jsxs("ul",{className:"text-sm text-red-700 space-y-1",children:[e.jsx("li",{children:"• 仅在开发环境有效"}),e.jsx("li",{children:"• 避免昂贵的计算"}),e.jsx("li",{children:"• 使用函数形式优化性能"}),e.jsx("li",{children:"• 不要依赖调试信息逻辑"})]})]})]})}),examples:[{title:"基础调试信息",component:e.jsx(p,{}),description:"演示如何使用 useDebugValue 为自定义 Hook 添加简单的调试信息",observationPoints:["操作计数器，观察调试信息在 'High' 和 'Low' 之间切换","打开开发者工具的 Components 标签页查看调试信息","注意不同初始值的计数器显示不同的调试状态","调试信息会实时反映 Hook 的内部状态"],keyPoints:["useDebugValue 只在开发环境中有效","调试信息显示在 React 开发者工具中","可以提供字符串或任意值作为调试信息","帮助理解自定义 Hook 的内部状态"],commonTraps:["在生产环境中依赖调试信息","提供过于复杂的调试信息计算","忘记调试信息只在开发者工具中可见"],solutions:["只在开发环境使用，生产环境会被忽略","使用函数形式进行复杂计算","提供简洁明了的调试标签"],codeExample:{code:N,highlights:[8,15,22],title:"基础调试信息源码"}},{title:"函数形式调试信息",component:e.jsx(g,{}),description:"演示使用函数形式的 useDebugValue，只在需要时计算复杂的调试信息",observationPoints:["切换不同用户 ID，观察加载状态和用户信息变化","在开发者工具中查看格式化的用户调试信息","注意函数形式只在开发者工具打开时才执行","调试信息包含用户名和状态的组合显示"],keyPoints:["函数形式可以避免不必要的计算","只在开发者工具需要时才执行函数","可以格式化复杂的调试信息","提供更好的性能优化"],commonTraps:["在调试函数中执行副作用","调试函数计算过于复杂","依赖调试函数的返回值"],solutions:["保持调试函数的纯净性","使用简单的格式化逻辑","仅用于显示，不影响业务逻辑"],codeExample:{code:j,highlights:[10,20,30],title:"函数形式调试信息源码"}},{title:"复杂状态调试",component:e.jsx(v,{}),description:"演示为复杂状态管理 Hook 提供详细的调试信息",observationPoints:["添加和移除商品，观察购物车状态变化","在开发者工具中查看购物车的详细调试信息","注意调试信息包含商品数量、总价等关键指标","清空购物车时调试信息的变化"],keyPoints:["可以提供对象形式的调试信息","包含多个关键状态指标","帮助理解复杂 Hook 的内部状态","提供结构化的调试数据"],commonTraps:["调试信息过于详细影响性能","包含敏感信息在调试中","调试对象结构过于复杂"],solutions:["只包含关键的调试信息","避免敏感数据的暴露","使用简洁的对象结构"],codeExample:{code:y,highlights:[12,22,32],title:"复杂状态调试源码"}}],tutorial:{concepts:["useDebugValue 的基本语法和用法","开发者工具中的调试信息显示","函数形式的性能优化","调试信息的格式化和结构化","生产环境的自动优化"],steps:["从 React 中导入 useDebugValue","在自定义 Hook 中调用 useDebugValue","提供字符串或对象形式的调试信息","使用函数形式进行复杂计算优化","在开发者工具中查看调试信息"],tips:["只在自定义 Hook 中使用 useDebugValue","提供简洁明了的调试标签","使用函数形式避免不必要的计算","调试信息应该帮助理解 Hook 状态","不要在调试函数中执行副作用"]},interview:{questions:[{question:"useDebugValue 的作用是什么？",answer:"useDebugValue 是 React 提供的开发调试 Hook，用于在 React 开发者工具中为自定义 Hook 显示调试信息。它只在开发环境中有效，生产环境会被自动忽略，不会影响性能。"},{question:"useDebugValue 什么时候会执行？",answer:"useDebugValue 只在开发环境且 React 开发者工具打开时才会执行。如果使用函数形式，函数只在开发者工具需要显示调试信息时才会被调用，这样可以避免不必要的计算开销。"},{question:"useDebugValue 可以在哪里使用？",answer:"useDebugValue 只能在自定义 Hook 中使用，不能在普通组件中直接使用。它的目的是为自定义 Hook 提供调试信息，帮助开发者理解 Hook 的内部状态和行为。"},{question:"如何优化 useDebugValue 的性能？",answer:"可以使用函数形式的 useDebugValue，这样只有在开发者工具需要显示调试信息时才会执行计算。避免在调试函数中执行复杂计算或副作用，保持调试逻辑的简洁性。"}],keyPoints:["useDebugValue 是开发调试工具","只在开发环境中有效","仅能在自定义 Hook 中使用","支持字符串和对象形式的调试信息","函数形式可以优化性能"]},bestPractices:{dos:["只在自定义 Hook 中使用","提供简洁明了的调试信息","使用函数形式进行复杂计算","包含关键的状态指标","保持调试函数的纯净性"],donts:["不要在普通组件中使用","不要依赖调试信息进行业务逻辑","不要在调试函数中执行副作用","不要提供过于复杂的调试信息","不要在生产环境中依赖调试功能"],patterns:["状态标签模式：提供简单的状态描述","格式化信息模式：使用函数格式化复杂数据","多指标模式：提供对象形式的多个关键指标","条件调试模式：根据状态提供不同的调试信息"]}});export{k as default};
