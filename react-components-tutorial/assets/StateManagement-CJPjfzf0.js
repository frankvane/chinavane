import{j as e,r as l}from"./index-H7t66yxh.js";import{C as I}from"./ComponentTemplate-bNJaV0ol.js";const v=(n,r)=>{switch(r.type){case"ADD_ITEM":{const t=n.items.find(s=>s.id===r.payload.id);let a;t?a=n.items.map(s=>s.id===r.payload.id?{...s,quantity:s.quantity+1}:s):a=[...n.items,{...r.payload,quantity:1}];const i=a.reduce((s,o)=>s+o.price*o.quantity,0);return{...n,items:a,total:i,error:null}}case"REMOVE_ITEM":{const t=n.items.filter(i=>i.id!==r.payload),a=t.reduce((i,s)=>i+s.price*s.quantity,0);return{...n,items:t,total:a}}case"UPDATE_QUANTITY":{if(r.payload.quantity<=0)return v(n,{type:"REMOVE_ITEM",payload:r.payload.id});const t=n.items.map(i=>i.id===r.payload.id?{...i,quantity:r.payload.quantity}:i),a=t.reduce((i,s)=>i+s.price*s.quantity,0);return{...n,items:t,total:a}}case"CLEAR_CART":return{...n,items:[],total:0,error:null};case"SET_LOADING":return{...n,isLoading:r.payload};case"SET_ERROR":return{...n,error:r.payload,isLoading:!1};default:return n}},y=l.createContext(void 0),T=({children:n})=>{const[r,t]=l.useReducer(v,{items:[],total:0,isLoading:!1,error:null}),a=d=>{t({type:"ADD_ITEM",payload:d})},i=d=>{t({type:"REMOVE_ITEM",payload:d})},s=(d,c)=>{t({type:"UPDATE_QUANTITY",payload:{id:d,quantity:c}})},o=()=>{t({type:"CLEAR_CART"})},u=async()=>{t({type:"SET_LOADING",payload:!0}),t({type:"SET_ERROR",payload:null});try{await new Promise((d,c)=>{setTimeout(()=>{Math.random()>.3?d("success"):c(new Error("支付失败，请重试"))},2e3)}),t({type:"CLEAR_CART"}),t({type:"SET_LOADING",payload:!1})}catch(d){t({type:"SET_ERROR",payload:d instanceof Error?d.message:"未知错误"})}};return e.jsx(y.Provider,{value:{state:r,dispatch:t,addItem:a,removeItem:i,updateQuantity:s,clearCart:o,checkout:u},children:n})},p=()=>{const n=l.useContext(y);if(n===void 0)throw new Error("useCart must be used within a CartProvider");return n},S=()=>{const{addItem:n}=p(),r=[{id:1,name:"苹果",price:5.99},{id:2,name:"香蕉",price:3.49},{id:3,name:"橙子",price:4.99},{id:4,name:"葡萄",price:8.99},{id:5,name:"草莓",price:12.99}];return e.jsxs("div",{className:"bg-white p-4 rounded-lg border",children:[e.jsx("h4",{className:"font-medium mb-3",children:"商品列表"}),e.jsx("div",{className:"grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3",children:r.map(t=>e.jsx("div",{className:"p-3 border border-gray-200 rounded-lg hover:shadow-md transition-shadow",children:e.jsxs("div",{className:"flex justify-between items-center",children:[e.jsxs("div",{children:[e.jsx("h5",{className:"font-medium",children:t.name}),e.jsxs("p",{className:"text-sm text-gray-600",children:["¥",t.price]})]}),e.jsx("button",{onClick:()=>n(t),className:"px-3 py-1 bg-blue-500 text-white rounded hover:bg-blue-600 text-sm",children:"添加"})]})},t.id))})]})},P=()=>{const{state:n,removeItem:r,updateQuantity:t,clearCart:a,checkout:i}=p(),{items:s,total:o,isLoading:u,error:d}=n;return e.jsxs("div",{className:"bg-white p-4 rounded-lg border",children:[e.jsxs("div",{className:"flex justify-between items-center mb-3",children:[e.jsxs("h4",{className:"font-medium",children:["购物车 (",s.length,")"]}),s.length>0&&e.jsx("button",{onClick:a,disabled:u,className:"text-sm text-red-500 hover:text-red-700 disabled:opacity-50",children:"清空"})]}),s.length===0?e.jsx("p",{className:"text-gray-500 text-center py-4",children:"购物车为空"}):e.jsxs("div",{className:"space-y-3",children:[s.map(c=>e.jsxs("div",{className:"flex justify-between items-center p-2 bg-gray-50 rounded",children:[e.jsxs("div",{className:"flex-1",children:[e.jsx("div",{className:"font-medium",children:c.name}),e.jsxs("div",{className:"text-sm text-gray-600",children:["¥",c.price]})]}),e.jsxs("div",{className:"flex items-center space-x-2",children:[e.jsx("button",{onClick:()=>t(c.id,c.quantity-1),disabled:u,className:"w-6 h-6 bg-gray-200 rounded text-sm hover:bg-gray-300 disabled:opacity-50",children:"-"}),e.jsx("span",{className:"w-8 text-center",children:c.quantity}),e.jsx("button",{onClick:()=>t(c.id,c.quantity+1),disabled:u,className:"w-6 h-6 bg-gray-200 rounded text-sm hover:bg-gray-300 disabled:opacity-50",children:"+"}),e.jsx("button",{onClick:()=>r(c.id),disabled:u,className:"ml-2 text-red-500 hover:text-red-700 text-sm disabled:opacity-50",children:"删除"})]})]},c.id)),e.jsxs("div",{className:"border-t pt-3",children:[e.jsxs("div",{className:"flex justify-between items-center mb-3",children:[e.jsx("span",{className:"font-medium",children:"总计:"}),e.jsxs("span",{className:"text-lg font-bold text-green-600",children:["¥",o.toFixed(2)]})]}),d&&e.jsx("div",{className:"mb-3 p-2 bg-red-50 border border-red-200 rounded text-red-700 text-sm",children:d}),e.jsx("button",{onClick:i,disabled:u||s.length===0,className:"w-full px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600 disabled:bg-gray-300 disabled:cursor-not-allowed",children:u?"处理中...":"结算"})]})]})]})},D=()=>{const{state:n}=p(),[r,t]=l.useState(!1);return e.jsxs("div",{className:"bg-gray-50 p-4 rounded-lg border",children:[e.jsxs("div",{className:"flex justify-between items-center mb-2",children:[e.jsx("h4",{className:"font-medium",children:"状态监控"}),e.jsx("button",{onClick:()=>t(!r),className:"text-sm text-blue-500 hover:text-blue-700",children:r?"收起":"展开"})]}),e.jsxs("div",{className:"text-sm space-y-1",children:[e.jsxs("div",{children:["商品数量: ",n.items.length]}),e.jsxs("div",{children:["总金额: ¥",n.total.toFixed(2)]}),e.jsxs("div",{children:["加载状态: ",n.isLoading?"加载中":"空闲"]}),e.jsxs("div",{children:["错误信息: ",n.error||"无"]})]}),r&&e.jsx("div",{className:"mt-3 p-2 bg-white rounded border",children:e.jsx("pre",{className:"text-xs overflow-auto",children:JSON.stringify(n,null,2)})})]})},U=()=>e.jsxs("div",{className:"space-y-6",children:[e.jsx("h3",{className:"text-lg font-semibold mb-4",children:"Context + useReducer 组合状态管理"}),e.jsx(T,{children:e.jsxs("div",{className:"grid grid-cols-1 lg:grid-cols-2 gap-6",children:[e.jsxs("div",{className:"space-y-4",children:[e.jsx(S,{}),e.jsx(D,{})]}),e.jsx(P,{})]})}),e.jsxs("div",{className:"bg-blue-50 p-4 rounded-lg border border-blue-200",children:[e.jsx("h4",{className:"font-medium text-blue-800 mb-2",children:"组合状态管理说明"}),e.jsxs("ul",{className:"text-sm text-blue-700 space-y-1",children:[e.jsx("li",{children:"• 使用 useReducer 管理复杂的购物车状态逻辑"}),e.jsx("li",{children:"• 通过 Context 在组件树中共享状态和操作方法"}),e.jsx("li",{children:"• Provider 封装业务逻辑，提供高级操作方法 (如 checkout)"}),e.jsx("li",{children:"• 自定义 Hook 简化状态访问，提供类型安全"}),e.jsx("li",{children:"• 支持异步操作、错误处理和加载状态管理"}),e.jsx("li",{children:"• 所有状态更新都通过 reducer 集中处理，保证数据一致性"})]})]})]}),A=`import React, {\r
  createContext,\r
  useContext,\r
  useReducer,\r
  ReactNode,\r
  useState,\r
} from "react";\r
\r
// 购物车状态类型定义\r
interface CartItem {\r
  id: number;\r
  name: string;\r
  price: number;\r
  quantity: number;\r
}\r
\r
interface CartState {\r
  items: CartItem[];\r
  total: number;\r
  isLoading: boolean;\r
  error: string | null;\r
}\r
\r
// Action 类型定义\r
type CartAction =\r
  | { type: "ADD_ITEM"; payload: Omit<CartItem, "quantity"> }\r
  | { type: "REMOVE_ITEM"; payload: number }\r
  | { type: "UPDATE_QUANTITY"; payload: { id: number; quantity: number } }\r
  | { type: "CLEAR_CART" }\r
  | { type: "SET_LOADING"; payload: boolean }\r
  | { type: "SET_ERROR"; payload: string | null };\r
\r
// Reducer 函数\r
const cartReducer = (state: CartState, action: CartAction): CartState => {\r
  switch (action.type) {\r
    case "ADD_ITEM": {\r
      const existingItem = state.items.find(\r
        (item) => item.id === action.payload.id\r
      );\r
      \r
      let newItems: CartItem[];\r
      if (existingItem) {\r
        newItems = state.items.map((item) =>\r
          item.id === action.payload.id\r
            ? { ...item, quantity: item.quantity + 1 }\r
            : item\r
        );\r
      } else {\r
        newItems = [...state.items, { ...action.payload, quantity: 1 }];\r
      }\r
      \r
      const total = newItems.reduce(\r
        (sum, item) => sum + item.price * item.quantity,\r
        0\r
      );\r
      \r
      return {\r
        ...state,\r
        items: newItems,\r
        total,\r
        error: null,\r
      };\r
    }\r
    \r
    case "REMOVE_ITEM": {\r
      const newItems = state.items.filter((item) => item.id !== action.payload);\r
      const total = newItems.reduce(\r
        (sum, item) => sum + item.price * item.quantity,\r
        0\r
      );\r
      \r
      return {\r
        ...state,\r
        items: newItems,\r
        total,\r
      };\r
    }\r
    \r
    case "UPDATE_QUANTITY": {\r
      if (action.payload.quantity <= 0) {\r
        return cartReducer(state, { type: "REMOVE_ITEM", payload: action.payload.id });\r
      }\r
      \r
      const newItems = state.items.map((item) =>\r
        item.id === action.payload.id\r
          ? { ...item, quantity: action.payload.quantity }\r
          : item\r
      );\r
      \r
      const total = newItems.reduce(\r
        (sum, item) => sum + item.price * item.quantity,\r
        0\r
      );\r
      \r
      return {\r
        ...state,\r
        items: newItems,\r
        total,\r
      };\r
    }\r
    \r
    case "CLEAR_CART":\r
      return {\r
        ...state,\r
        items: [],\r
        total: 0,\r
        error: null,\r
      };\r
    \r
    case "SET_LOADING":\r
      return {\r
        ...state,\r
        isLoading: action.payload,\r
      };\r
    \r
    case "SET_ERROR":\r
      return {\r
        ...state,\r
        error: action.payload,\r
        isLoading: false,\r
      };\r
    \r
    default:\r
      return state;\r
  }\r
};\r
\r
// Context 类型定义\r
interface CartContextType {\r
  state: CartState;\r
  dispatch: React.Dispatch<CartAction>;\r
  addItem: (item: Omit<CartItem, "quantity">) => void;\r
  removeItem: (id: number) => void;\r
  updateQuantity: (id: number, quantity: number) => void;\r
  clearCart: () => void;\r
  checkout: () => Promise<void>;\r
}\r
\r
// 创建 Context\r
const CartContext = createContext<CartContextType | undefined>(undefined);\r
\r
// Provider 组件\r
const CartProvider: React.FC<{ children: ReactNode }> = ({ children }) => {\r
  const [state, dispatch] = useReducer(cartReducer, {\r
    items: [],\r
    total: 0,\r
    isLoading: false,\r
    error: null,\r
  });\r
\r
  // 封装的操作方法\r
  const addItem = (item: Omit<CartItem, "quantity">) => {\r
    dispatch({ type: "ADD_ITEM", payload: item });\r
  };\r
\r
  const removeItem = (id: number) => {\r
    dispatch({ type: "REMOVE_ITEM", payload: id });\r
  };\r
\r
  const updateQuantity = (id: number, quantity: number) => {\r
    dispatch({ type: "UPDATE_QUANTITY", payload: { id, quantity } });\r
  };\r
\r
  const clearCart = () => {\r
    dispatch({ type: "CLEAR_CART" });\r
  };\r
\r
  const checkout = async () => {\r
    dispatch({ type: "SET_LOADING", payload: true });\r
    dispatch({ type: "SET_ERROR", payload: null });\r
    \r
    try {\r
      // 模拟 API 调用\r
      await new Promise((resolve, reject) => {\r
        setTimeout(() => {\r
          if (Math.random() > 0.3) {\r
            resolve("success");\r
          } else {\r
            reject(new Error("支付失败，请重试"));\r
          }\r
        }, 2000);\r
      });\r
      \r
      dispatch({ type: "CLEAR_CART" });\r
      dispatch({ type: "SET_LOADING", payload: false });\r
    } catch (error) {\r
      dispatch({\r
        type: "SET_ERROR",\r
        payload: error instanceof Error ? error.message : "未知错误",\r
      });\r
    }\r
  };\r
\r
  return (\r
    <CartContext.Provider\r
      value={{\r
        state,\r
        dispatch,\r
        addItem,\r
        removeItem,\r
        updateQuantity,\r
        clearCart,\r
        checkout,\r
      }}\r
    >\r
      {children}\r
    </CartContext.Provider>\r
  );\r
};\r
\r
// 自定义 Hook\r
const useCart = () => {\r
  const context = useContext(CartContext);\r
  if (context === undefined) {\r
    throw new Error("useCart must be used within a CartProvider");\r
  }\r
  return context;\r
};\r
\r
// 商品列表组件\r
const ProductList: React.FC = () => {\r
  const { addItem } = useCart();\r
  \r
  const products = [\r
    { id: 1, name: "苹果", price: 5.99 },\r
    { id: 2, name: "香蕉", price: 3.49 },\r
    { id: 3, name: "橙子", price: 4.99 },\r
    { id: 4, name: "葡萄", price: 8.99 },\r
    { id: 5, name: "草莓", price: 12.99 },\r
  ];\r
\r
  return (\r
    <div className="bg-white p-4 rounded-lg border">\r
      <h4 className="font-medium mb-3">商品列表</h4>\r
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">\r
        {products.map((product) => (\r
          <div\r
            key={product.id}\r
            className="p-3 border border-gray-200 rounded-lg hover:shadow-md transition-shadow"\r
          >\r
            <div className="flex justify-between items-center">\r
              <div>\r
                <h5 className="font-medium">{product.name}</h5>\r
                <p className="text-sm text-gray-600">¥{product.price}</p>\r
              </div>\r
              <button\r
                onClick={() => addItem(product)}\r
                className="px-3 py-1 bg-blue-500 text-white rounded hover:bg-blue-600 text-sm"\r
              >\r
                添加\r
              </button>\r
            </div>\r
          </div>\r
        ))}\r
      </div>\r
    </div>\r
  );\r
};\r
\r
// 购物车组件\r
const Cart: React.FC = () => {\r
  const { state, removeItem, updateQuantity, clearCart, checkout } = useCart();\r
  const { items, total, isLoading, error } = state;\r
\r
  return (\r
    <div className="bg-white p-4 rounded-lg border">\r
      <div className="flex justify-between items-center mb-3">\r
        <h4 className="font-medium">购物车 ({items.length})</h4>\r
        {items.length > 0 && (\r
          <button\r
            onClick={clearCart}\r
            disabled={isLoading}\r
            className="text-sm text-red-500 hover:text-red-700 disabled:opacity-50"\r
          >\r
            清空\r
          </button>\r
        )}\r
      </div>\r
\r
      {items.length === 0 ? (\r
        <p className="text-gray-500 text-center py-4">购物车为空</p>\r
      ) : (\r
        <div className="space-y-3">\r
          {items.map((item) => (\r
            <div\r
              key={item.id}\r
              className="flex justify-between items-center p-2 bg-gray-50 rounded"\r
            >\r
              <div className="flex-1">\r
                <div className="font-medium">{item.name}</div>\r
                <div className="text-sm text-gray-600">¥{item.price}</div>\r
              </div>\r
              <div className="flex items-center space-x-2">\r
                <button\r
                  onClick={() => updateQuantity(item.id, item.quantity - 1)}\r
                  disabled={isLoading}\r
                  className="w-6 h-6 bg-gray-200 rounded text-sm hover:bg-gray-300 disabled:opacity-50"\r
                >\r
                  -\r
                </button>\r
                <span className="w-8 text-center">{item.quantity}</span>\r
                <button\r
                  onClick={() => updateQuantity(item.id, item.quantity + 1)}\r
                  disabled={isLoading}\r
                  className="w-6 h-6 bg-gray-200 rounded text-sm hover:bg-gray-300 disabled:opacity-50"\r
                >\r
                  +\r
                </button>\r
                <button\r
                  onClick={() => removeItem(item.id)}\r
                  disabled={isLoading}\r
                  className="ml-2 text-red-500 hover:text-red-700 text-sm disabled:opacity-50"\r
                >\r
                  删除\r
                </button>\r
              </div>\r
            </div>\r
          ))}\r
\r
          <div className="border-t pt-3">\r
            <div className="flex justify-between items-center mb-3">\r
              <span className="font-medium">总计:</span>\r
              <span className="text-lg font-bold text-green-600">\r
                ¥{total.toFixed(2)}\r
              </span>\r
            </div>\r
            \r
            {error && (\r
              <div className="mb-3 p-2 bg-red-50 border border-red-200 rounded text-red-700 text-sm">\r
                {error}\r
              </div>\r
            )}\r
            \r
            <button\r
              onClick={checkout}\r
              disabled={isLoading || items.length === 0}\r
              className="w-full px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600 disabled:bg-gray-300 disabled:cursor-not-allowed"\r
            >\r
              {isLoading ? "处理中..." : "结算"}\r
            </button>\r
          </div>\r
        </div>\r
      )}\r
    </div>\r
  );\r
};\r
\r
// 状态监控组件\r
const StateMonitor: React.FC = () => {\r
  const { state } = useCart();\r
  const [isExpanded, setIsExpanded] = useState(false);\r
\r
  return (\r
    <div className="bg-gray-50 p-4 rounded-lg border">\r
      <div className="flex justify-between items-center mb-2">\r
        <h4 className="font-medium">状态监控</h4>\r
        <button\r
          onClick={() => setIsExpanded(!isExpanded)}\r
          className="text-sm text-blue-500 hover:text-blue-700"\r
        >\r
          {isExpanded ? "收起" : "展开"}\r
        </button>\r
      </div>\r
      \r
      <div className="text-sm space-y-1">\r
        <div>商品数量: {state.items.length}</div>\r
        <div>总金额: ¥{state.total.toFixed(2)}</div>\r
        <div>加载状态: {state.isLoading ? "加载中" : "空闲"}</div>\r
        <div>错误信息: {state.error || "无"}</div>\r
      </div>\r
      \r
      {isExpanded && (\r
        <div className="mt-3 p-2 bg-white rounded border">\r
          <pre className="text-xs overflow-auto">\r
            {JSON.stringify(state, null, 2)}\r
          </pre>\r
        </div>\r
      )}\r
    </div>\r
  );\r
};\r
\r
// 主组件\r
const CombinedStateExample: React.FC = () => {\r
  return (\r
    <div className="space-y-6">\r
      <h3 className="text-lg font-semibold mb-4">\r
        Context + useReducer 组合状态管理\r
      </h3>\r
\r
      <CartProvider>\r
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">\r
          <div className="space-y-4">\r
            <ProductList />\r
            <StateMonitor />\r
          </div>\r
          <Cart />\r
        </div>\r
      </CartProvider>\r
\r
      {/* 使用说明 */}\r
      <div className="bg-blue-50 p-4 rounded-lg border border-blue-200">\r
        <h4 className="font-medium text-blue-800 mb-2">组合状态管理说明</h4>\r
        <ul className="text-sm text-blue-700 space-y-1">\r
          <li>• 使用 useReducer 管理复杂的购物车状态逻辑</li>\r
          <li>• 通过 Context 在组件树中共享状态和操作方法</li>\r
          <li>• Provider 封装业务逻辑，提供高级操作方法 (如 checkout)</li>\r
          <li>• 自定义 Hook 简化状态访问，提供类型安全</li>\r
          <li>• 支持异步操作、错误处理和加载状态管理</li>\r
          <li>• 所有状态更新都通过 reducer 集中处理，保证数据一致性</li>\r
        </ul>\r
      </div>\r
    </div>\r
  );\r
};\r
\r
export default CombinedStateExample;`,N=l.createContext(void 0),f=l.createContext(void 0),q=({children:n})=>{const[r,t]=l.useState("light"),a=()=>{t(i=>i==="light"?"dark":"light")};return e.jsx(N.Provider,{value:{theme:r,toggleTheme:a},children:n})},L=({children:n})=>{const[r,t]=l.useState(null),a=s=>{t(s)},i=()=>{t(null)};return e.jsx(f.Provider,{value:{user:r,login:a,logout:i},children:n})},b=()=>{const n=l.useContext(N);if(n===void 0)throw new Error("useTheme must be used within a ThemeProvider");return n},h=()=>{const n=l.useContext(f);if(n===void 0)throw new Error("useUser must be used within a UserProvider");return n},_=()=>{const{theme:n,toggleTheme:r}=b(),{user:t,logout:a}=h();return e.jsx("div",{className:`p-4 border-b ${n==="dark"?"bg-gray-800 text-white border-gray-700":"bg-white text-gray-900 border-gray-200"}`,children:e.jsxs("div",{className:"flex justify-between items-center",children:[e.jsx("h2",{className:"text-lg font-semibold",children:"应用头部"}),e.jsxs("div",{className:"flex items-center space-x-4",children:[t&&e.jsxs("div",{className:"flex items-center space-x-2",children:[e.jsxs("span",{className:"text-sm",children:["欢迎, ",t.name," (",t.role,")"]}),e.jsx("button",{onClick:a,className:"px-3 py-1 text-sm bg-red-500 text-white rounded hover:bg-red-600",children:"退出"})]}),e.jsx("button",{onClick:r,className:`px-3 py-1 text-sm rounded ${n==="dark"?"bg-yellow-500 text-black hover:bg-yellow-600":"bg-gray-800 text-white hover:bg-gray-900"}`,children:n==="dark"?"🌞 浅色":"🌙 深色"})]})]})})},M=()=>{const{theme:n}=b(),{login:r}=h(),[t,a]=l.useState({name:"",email:"",role:"user"}),i=o=>{o.preventDefault(),t.name&&t.email&&r({id:Date.now(),name:t.name,email:t.email,role:t.role})},s=o=>{r({...o,id:Date.now()})};return e.jsxs("div",{className:`p-6 rounded-lg border ${n==="dark"?"bg-gray-800 border-gray-700":"bg-white border-gray-200"}`,children:[e.jsx("h3",{className:"text-lg font-semibold mb-4",children:"用户登录"}),e.jsxs("div",{className:"mb-4",children:[e.jsx("p",{className:"text-sm text-gray-600 mb-2",children:"快速登录:"}),e.jsxs("div",{className:"flex space-x-2",children:[e.jsx("button",{onClick:()=>s({name:"管理员",email:"admin@example.com",role:"admin"}),className:"px-3 py-1 text-sm bg-purple-500 text-white rounded hover:bg-purple-600",children:"管理员"}),e.jsx("button",{onClick:()=>s({name:"普通用户",email:"user@example.com",role:"user"}),className:"px-3 py-1 text-sm bg-blue-500 text-white rounded hover:bg-blue-600",children:"普通用户"})]})]}),e.jsxs("form",{onSubmit:i,className:"space-y-4",children:[e.jsxs("div",{children:[e.jsx("label",{className:"block text-sm font-medium mb-1",children:"姓名"}),e.jsx("input",{type:"text",value:t.name,onChange:o=>a({...t,name:o.target.value}),className:`w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 ${n==="dark"?"bg-gray-700 border-gray-600 text-white":"bg-white border-gray-300 text-gray-900"}`,placeholder:"请输入姓名"})]}),e.jsxs("div",{children:[e.jsx("label",{className:"block text-sm font-medium mb-1",children:"邮箱"}),e.jsx("input",{type:"email",value:t.email,onChange:o=>a({...t,email:o.target.value}),className:`w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 ${n==="dark"?"bg-gray-700 border-gray-600 text-white":"bg-white border-gray-300 text-gray-900"}`,placeholder:"请输入邮箱"})]}),e.jsxs("div",{children:[e.jsx("label",{className:"block text-sm font-medium mb-1",children:"角色"}),e.jsxs("select",{value:t.role,onChange:o=>a({...t,role:o.target.value}),className:`w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 ${n==="dark"?"bg-gray-700 border-gray-600 text-white":"bg-white border-gray-300 text-gray-900"}`,children:[e.jsx("option",{value:"user",children:"普通用户"}),e.jsx("option",{value:"admin",children:"管理员"})]})]}),e.jsx("button",{type:"submit",disabled:!t.name||!t.email,className:"w-full px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600 disabled:bg-gray-300 disabled:cursor-not-allowed",children:"登录"})]})]})},O=()=>{const{theme:n}=b(),{user:r}=h();return e.jsx("div",{className:`p-6 ${n==="dark"?"bg-gray-900 text-white":"bg-gray-50 text-gray-900"}`,children:r?e.jsxs("div",{className:"space-y-4",children:[e.jsx("h3",{className:"text-lg font-semibold",children:"用户信息"}),e.jsx("div",{className:`p-4 rounded-lg border ${n==="dark"?"bg-gray-800 border-gray-700":"bg-white border-gray-200"}`,children:e.jsxs("div",{className:"space-y-2",children:[e.jsxs("div",{children:["ID: ",r.id]}),e.jsxs("div",{children:["姓名: ",r.name]}),e.jsxs("div",{children:["邮箱: ",r.email]}),e.jsxs("div",{children:["角色:"," ",e.jsx("span",{className:`px-2 py-1 rounded text-sm ${r.role==="admin"?"bg-purple-100 text-purple-800":"bg-blue-100 text-blue-800"}`,children:r.role==="admin"?"管理员":"普通用户"})]})]})}),r.role==="admin"&&e.jsxs("div",{className:`p-4 rounded-lg border ${n==="dark"?"bg-purple-900 border-purple-700":"bg-purple-50 border-purple-200"}`,children:[e.jsx("h4",{className:"font-medium mb-2",children:"管理员专属功能"}),e.jsx("p",{className:"text-sm",children:"您拥有管理员权限，可以访问高级功能。"})]})]}):e.jsx(M,{})})},F=()=>e.jsxs("div",{className:"space-y-6",children:[e.jsx("h3",{className:"text-lg font-semibold mb-4",children:"Context 跨组件状态共享"}),e.jsx(q,{children:e.jsx(L,{children:e.jsxs("div",{className:"border rounded-lg overflow-hidden",children:[e.jsx(_,{}),e.jsx(O,{})]})})}),e.jsxs("div",{className:"bg-blue-50 p-4 rounded-lg border border-blue-200",children:[e.jsx("h4",{className:"font-medium text-blue-800 mb-2",children:"Context 使用说明"}),e.jsxs("ul",{className:"text-sm text-blue-700 space-y-1",children:[e.jsx("li",{children:"• 使用 createContext 创建主题和用户两个独立的 Context"}),e.jsx("li",{children:"• Provider 组件包装子组件，提供状态和更新方法"}),e.jsx("li",{children:"• 自定义 Hook (useTheme, useUser) 简化 Context 的使用"}),e.jsx("li",{children:"• 子组件通过 useContext 访问共享状态，无需层层传递 props"}),e.jsx("li",{children:"• 支持主题切换和用户登录/退出功能"})]})]})]}),H=`import React, { createContext, useContext, useState, ReactNode } from "react";

// 主题 Context
interface ThemeContextType {
  theme: "light" | "dark";
  toggleTheme: () => void;
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

// 用户 Context
interface User {
  id: number;
  name: string;
  email: string;
  role: "admin" | "user";
}

interface UserContextType {
  user: User | null;
  login: (user: User) => void;
  logout: () => void;
}

const UserContext = createContext<UserContextType | undefined>(undefined);

// 主题 Provider
const ThemeProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [theme, setTheme] = useState<"light" | "dark">("light");

  const toggleTheme = () => {
    setTheme((prev) => (prev === "light" ? "dark" : "light"));
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

// 用户 Provider
const UserProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [user, setUser] = useState<User | null>(null);

  const login = (userData: User) => {
    setUser(userData);
  };

  const logout = () => {
    setUser(null);
  };

  return (
    <UserContext.Provider value={{ user, login, logout }}>
      {children}
    </UserContext.Provider>
  );
};

// 自定义 Hooks
const useTheme = () => {
  const context = useContext(ThemeContext);
  if (context === undefined) {
    throw new Error("useTheme must be used within a ThemeProvider");
  }
  return context;
};

const useUser = () => {
  const context = useContext(UserContext);
  if (context === undefined) {
    throw new Error("useUser must be used within a UserProvider");
  }
  return context;
};

// 头部组件
const Header: React.FC = () => {
  const { theme, toggleTheme } = useTheme();
  const { user, logout } = useUser();

  return (
    <div
      className={\`p-4 border-b \${
        theme === "dark"
          ? "bg-gray-800 text-white border-gray-700"
          : "bg-white text-gray-900 border-gray-200"
      }\`}
    >
      <div className="flex justify-between items-center">
        <h2 className="text-lg font-semibold">应用头部</h2>
        <div className="flex items-center space-x-4">
          {user && (
            <div className="flex items-center space-x-2">
              <span className="text-sm">
                欢迎, {user.name} ({user.role})
              </span>
              <button
                onClick={logout}
                className="px-3 py-1 text-sm bg-red-500 text-white rounded hover:bg-red-600"
              >
                退出
              </button>
            </div>
          )}
          <button
            onClick={toggleTheme}
            className={\`px-3 py-1 text-sm rounded \${
              theme === "dark"
                ? "bg-yellow-500 text-black hover:bg-yellow-600"
                : "bg-gray-800 text-white hover:bg-gray-900"
            }\`}
          >
            {theme === "dark" ? "🌞 浅色" : "🌙 深色"}
          </button>
        </div>
      </div>
    </div>
  );
};

// 登录表单组件
const LoginForm: React.FC = () => {
  const { theme } = useTheme();
  const { login } = useUser();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    role: "user" as "admin" | "user",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (formData.name && formData.email) {
      login({
        id: Date.now(),
        name: formData.name,
        email: formData.email,
        role: formData.role,
      });
    }
  };

  const quickLogin = (userData: Omit<User, "id">) => {
    login({ ...userData, id: Date.now() });
  };

  return (
    <div
      className={\`p-6 rounded-lg border \${
        theme === "dark"
          ? "bg-gray-800 border-gray-700"
          : "bg-white border-gray-200"
      }\`}
    >
      <h3 className="text-lg font-semibold mb-4">用户登录</h3>
      
      {/* 快速登录按钮 */}
      <div className="mb-4">
        <p className="text-sm text-gray-600 mb-2">快速登录:</p>
        <div className="flex space-x-2">
          <button
            onClick={() =>
              quickLogin({
                name: "管理员",
                email: "admin@example.com",
                role: "admin",
              })
            }
            className="px-3 py-1 text-sm bg-purple-500 text-white rounded hover:bg-purple-600"
          >
            管理员
          </button>
          <button
            onClick={() =>
              quickLogin({
                name: "普通用户",
                email: "user@example.com",
                role: "user",
              })
            }
            className="px-3 py-1 text-sm bg-blue-500 text-white rounded hover:bg-blue-600"
          >
            普通用户
          </button>
        </div>
      </div>

      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label className="block text-sm font-medium mb-1">姓名</label>
          <input
            type="text"
            value={formData.name}
            onChange={(e) =>
              setFormData({ ...formData, name: e.target.value })
            }
            className={\`w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 \${
              theme === "dark"
                ? "bg-gray-700 border-gray-600 text-white"
                : "bg-white border-gray-300 text-gray-900"
            }\`}
            placeholder="请输入姓名"
          />
        </div>
        <div>
          <label className="block text-sm font-medium mb-1">邮箱</label>
          <input
            type="email"
            value={formData.email}
            onChange={(e) =>
              setFormData({ ...formData, email: e.target.value })
            }
            className={\`w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 \${
              theme === "dark"
                ? "bg-gray-700 border-gray-600 text-white"
                : "bg-white border-gray-300 text-gray-900"
            }\`}
            placeholder="请输入邮箱"
          />
        </div>
        <div>
          <label className="block text-sm font-medium mb-1">角色</label>
          <select
            value={formData.role}
            onChange={(e) =>
              setFormData({
                ...formData,
                role: e.target.value as "admin" | "user",
              })
            }
            className={\`w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 \${
              theme === "dark"
                ? "bg-gray-700 border-gray-600 text-white"
                : "bg-white border-gray-300 text-gray-900"
            }\`}
          >
            <option value="user">普通用户</option>
            <option value="admin">管理员</option>
          </select>
        </div>
        <button
          type="submit"
          disabled={!formData.name || !formData.email}
          className="w-full px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600 disabled:bg-gray-300 disabled:cursor-not-allowed"
        >
          登录
        </button>
      </form>
    </div>
  );
};

// 内容区域组件
const Content: React.FC = () => {
  const { theme } = useTheme();
  const { user } = useUser();

  return (
    <div
      className={\`p-6 \${
        theme === "dark" ? "bg-gray-900 text-white" : "bg-gray-50 text-gray-900"
      }\`}
    >
      {user ? (
        <div className="space-y-4">
          <h3 className="text-lg font-semibold">用户信息</h3>
          <div
            className={\`p-4 rounded-lg border \${
              theme === "dark"
                ? "bg-gray-800 border-gray-700"
                : "bg-white border-gray-200"
            }\`}
          >
            <div className="space-y-2">
              <div>ID: {user.id}</div>
              <div>姓名: {user.name}</div>
              <div>邮箱: {user.email}</div>
              <div>
                角色:{" "}
                <span
                  className={\`px-2 py-1 rounded text-sm \${
                    user.role === "admin"
                      ? "bg-purple-100 text-purple-800"
                      : "bg-blue-100 text-blue-800"
                  }\`}
                >
                  {user.role === "admin" ? "管理员" : "普通用户"}
                </span>
              </div>
            </div>
          </div>
          
          {user.role === "admin" && (
            <div
              className={\`p-4 rounded-lg border \${
                theme === "dark"
                  ? "bg-purple-900 border-purple-700"
                  : "bg-purple-50 border-purple-200"
              }\`}
            >
              <h4 className="font-medium mb-2">管理员专属功能</h4>
              <p className="text-sm">您拥有管理员权限，可以访问高级功能。</p>
            </div>
          )}
        </div>
      ) : (
        <LoginForm />
      )}
    </div>
  );
};

// 主组件
const ContextExample: React.FC = () => {
  return (
    <div className="space-y-6">
      <h3 className="text-lg font-semibold mb-4">Context 跨组件状态共享</h3>
      
      <ThemeProvider>
        <UserProvider>
          <div className="border rounded-lg overflow-hidden">
            <Header />
            <Content />
          </div>
        </UserProvider>
      </ThemeProvider>

      {/* 使用说明 */}
      <div className="bg-blue-50 p-4 rounded-lg border border-blue-200">
        <h4 className="font-medium text-blue-800 mb-2">Context 使用说明</h4>
        <ul className="text-sm text-blue-700 space-y-1">
          <li>• 使用 createContext 创建主题和用户两个独立的 Context</li>
          <li>• Provider 组件包装子组件，提供状态和更新方法</li>
          <li>• 自定义 Hook (useTheme, useUser) 简化 Context 的使用</li>
          <li>• 子组件通过 useContext 访问共享状态，无需层层传递 props</li>
          <li>• 支持主题切换和用户登录/退出功能</li>
        </ul>
      </div>
    </div>
  );
};

export default ContextExample;`,$=(n,r)=>{switch(r.type){case"increment":return{...n,count:n.count+n.step,history:[...n.history,n.count]};case"decrement":return{...n,count:n.count-n.step,history:[...n.history,n.count]};case"reset":return{...n,count:0,history:[...n.history,n.count]};case"setStep":return{...n,step:r.payload};case"undo":if(n.history.length===0)return n;const t=n.history[n.history.length-1];return{...n,count:t,history:n.history.slice(0,-1)};default:return n}},V=()=>{const[n,r]=l.useReducer($,{count:0,step:1,history:[]});return e.jsxs("div",{className:"space-y-6",children:[e.jsx("h3",{className:"text-lg font-semibold mb-4",children:"useReducer 复杂状态管理"}),e.jsxs("div",{className:"bg-white p-6 rounded-lg border",children:[e.jsxs("div",{className:"text-center mb-6",children:[e.jsx("div",{className:"text-4xl font-bold text-blue-600 mb-2",children:n.count}),e.jsxs("div",{className:"text-sm text-gray-600",children:["当前步长: ",n.step]})]}),e.jsxs("div",{className:"flex justify-center space-x-3 mb-6",children:[e.jsxs("button",{onClick:()=>r({type:"decrement"}),className:"px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600",children:["-",n.step]}),e.jsxs("button",{onClick:()=>r({type:"increment"}),className:"px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600",children:["+",n.step]}),e.jsx("button",{onClick:()=>r({type:"reset"}),className:"px-4 py-2 bg-gray-500 text-white rounded hover:bg-gray-600",children:"重置"}),e.jsx("button",{onClick:()=>r({type:"undo"}),disabled:n.history.length===0,className:"px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 disabled:bg-gray-300 disabled:cursor-not-allowed",children:"撤销"})]}),e.jsxs("div",{className:"flex justify-center items-center space-x-3",children:[e.jsx("label",{className:"text-sm font-medium text-gray-700",children:"步长:"}),e.jsxs("select",{value:n.step,onChange:t=>r({type:"setStep",payload:Number(t.target.value)}),className:"px-3 py-1 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500",children:[e.jsx("option",{value:1,children:"1"}),e.jsx("option",{value:2,children:"2"}),e.jsx("option",{value:5,children:"5"}),e.jsx("option",{value:10,children:"10"})]})]})]}),e.jsxs("div",{className:"bg-white p-4 rounded-lg border",children:[e.jsx("h4",{className:"font-medium mb-3",children:"操作历史"}),n.history.length===0?e.jsx("p",{className:"text-gray-500 text-sm",children:"暂无历史记录"}):e.jsxs("div",{className:"space-y-2",children:[e.jsxs("div",{className:"text-sm text-gray-600",children:["共 ",n.history.length," 条记录 (最多显示最近10条)"]}),e.jsx("div",{className:"max-h-32 overflow-y-auto",children:e.jsx("div",{className:"flex flex-wrap gap-2",children:n.history.slice(-10).reverse().map((t,a)=>e.jsx("span",{className:"px-2 py-1 bg-blue-100 text-blue-800 rounded text-sm",children:t},a))})})]})]}),e.jsxs("div",{className:"bg-gray-50 p-4 rounded-lg",children:[e.jsx("h4",{className:"font-medium mb-2",children:"Reducer 状态信息"}),e.jsxs("div",{className:"text-sm space-y-1",children:[e.jsxs("div",{children:["当前值: ",n.count]}),e.jsxs("div",{children:["步长: ",n.step]}),e.jsxs("div",{children:["历史记录数: ",n.history.length]}),e.jsxs("div",{children:["可撤销: ",n.history.length>0?"是":"否"]})]})]}),e.jsxs("div",{className:"bg-blue-50 p-4 rounded-lg border border-blue-200",children:[e.jsx("h4",{className:"font-medium text-blue-800 mb-2",children:"功能说明"}),e.jsxs("ul",{className:"text-sm text-blue-700 space-y-1",children:[e.jsx("li",{children:"• 使用 useReducer 管理复杂的计数器状态"}),e.jsx("li",{children:"• 支持自定义步长的增减操作"}),e.jsx("li",{children:"• 记录操作历史，支持撤销功能"}),e.jsx("li",{children:"• 所有状态更新都通过 dispatch 和 action 进行"}),e.jsx("li",{children:"• reducer 函数集中处理所有状态更新逻辑"})]})]})]})},Q=`import React, { useReducer } from "react";

interface CounterState {
  count: number;
  step: number;
  history: number[];
}

type CounterAction =
  | { type: "increment" }
  | { type: "decrement" }
  | { type: "reset" }
  | { type: "setStep"; payload: number }
  | { type: "undo" };

const counterReducer = (
  state: CounterState,
  action: CounterAction
): CounterState => {
  switch (action.type) {
    case "increment":
      return {
        ...state,
        count: state.count + state.step,
        history: [...state.history, state.count],
      };
    case "decrement":
      return {
        ...state,
        count: state.count - state.step,
        history: [...state.history, state.count],
      };
    case "reset":
      return {
        ...state,
        count: 0,
        history: [...state.history, state.count],
      };
    case "setStep":
      return {
        ...state,
        step: action.payload,
      };
    case "undo":
      if (state.history.length === 0) return state;
      const previousValue = state.history[state.history.length - 1];
      return {
        ...state,
        count: previousValue,
        history: state.history.slice(0, -1),
      };
    default:
      return state;
  }
};

const UseReducerExample: React.FC = () => {
  const [state, dispatch] = useReducer(counterReducer, {
    count: 0,
    step: 1,
    history: [],
  });

  return (
    <div className="space-y-6">
      <h3 className="text-lg font-semibold mb-4">useReducer 复杂状态管理</h3>

      {/* 主要控制区域 */}
      <div className="bg-white p-6 rounded-lg border">
        <div className="text-center mb-6">
          <div className="text-4xl font-bold text-blue-600 mb-2">
            {state.count}
          </div>
          <div className="text-sm text-gray-600">
            当前步长: {state.step}
          </div>
        </div>

        {/* 操作按钮 */}
        <div className="flex justify-center space-x-3 mb-6">
          <button
            onClick={() => dispatch({ type: "decrement" })}
            className="px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600"
          >
            -{state.step}
          </button>
          <button
            onClick={() => dispatch({ type: "increment" })}
            className="px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600"
          >
            +{state.step}
          </button>
          <button
            onClick={() => dispatch({ type: "reset" })}
            className="px-4 py-2 bg-gray-500 text-white rounded hover:bg-gray-600"
          >
            重置
          </button>
          <button
            onClick={() => dispatch({ type: "undo" })}
            disabled={state.history.length === 0}
            className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 disabled:bg-gray-300 disabled:cursor-not-allowed"
          >
            撤销
          </button>
        </div>

        {/* 步长设置 */}
        <div className="flex justify-center items-center space-x-3">
          <label className="text-sm font-medium text-gray-700">步长:</label>
          <select
            value={state.step}
            onChange={(e) =>
              dispatch({ type: "setStep", payload: Number(e.target.value) })
            }
            className="px-3 py-1 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            <option value={1}>1</option>
            <option value={2}>2</option>
            <option value={5}>5</option>
            <option value={10}>10</option>
          </select>
        </div>
      </div>

      {/* 历史记录 */}
      <div className="bg-white p-4 rounded-lg border">
        <h4 className="font-medium mb-3">操作历史</h4>
        {state.history.length === 0 ? (
          <p className="text-gray-500 text-sm">暂无历史记录</p>
        ) : (
          <div className="space-y-2">
            <div className="text-sm text-gray-600">
              共 {state.history.length} 条记录 (最多显示最近10条)
            </div>
            <div className="max-h-32 overflow-y-auto">
              <div className="flex flex-wrap gap-2">
                {state.history
                  .slice(-10)
                  .reverse()
                  .map((value, index) => (
                    <span
                      key={index}
                      className="px-2 py-1 bg-blue-100 text-blue-800 rounded text-sm"
                    >
                      {value}
                    </span>
                  ))}
              </div>
            </div>
          </div>
        )}
      </div>

      {/* 状态信息 */}
      <div className="bg-gray-50 p-4 rounded-lg">
        <h4 className="font-medium mb-2">Reducer 状态信息</h4>
        <div className="text-sm space-y-1">
          <div>当前值: {state.count}</div>
          <div>步长: {state.step}</div>
          <div>历史记录数: {state.history.length}</div>
          <div>可撤销: {state.history.length > 0 ? "是" : "否"}</div>
        </div>
      </div>

      {/* 使用说明 */}
      <div className="bg-blue-50 p-4 rounded-lg border border-blue-200">
        <h4 className="font-medium text-blue-800 mb-2">功能说明</h4>
        <ul className="text-sm text-blue-700 space-y-1">
          <li>• 使用 useReducer 管理复杂的计数器状态</li>
          <li>• 支持自定义步长的增减操作</li>
          <li>• 记录操作历史，支持撤销功能</li>
          <li>• 所有状态更新都通过 dispatch 和 action 进行</li>
          <li>• reducer 函数集中处理所有状态更新逻辑</li>
        </ul>
      </div>
    </div>
  );
};

export default UseReducerExample;`,G=()=>{const[n,r]=l.useState(0),[t,a]=l.useState(""),[i,s]=l.useState(!0),[o,u]=l.useState([]),[d,c]=l.useState(""),C=()=>{r(m=>m+1)},j=()=>{r(m=>m-1)},w=()=>{r(0)},g=()=>{d.trim()&&(u(m=>[...m,d.trim()]),c(""))},R=m=>{u(x=>x.filter((J,E)=>E!==m))},k=()=>{u([])};return e.jsxs("div",{className:"space-y-6",children:[e.jsx("h3",{className:"text-lg font-semibold mb-4",children:"useState 基础示例"}),e.jsxs("div",{className:"bg-white p-4 rounded-lg border",children:[e.jsx("h4",{className:"font-medium mb-3",children:"计数器 (函数式更新)"}),e.jsxs("div",{className:"flex items-center space-x-4",children:[e.jsx("button",{onClick:j,className:"px-3 py-1 bg-red-500 text-white rounded hover:bg-red-600",children:"-"}),e.jsx("span",{className:"text-xl font-bold",children:n}),e.jsx("button",{onClick:C,className:"px-3 py-1 bg-green-500 text-white rounded hover:bg-green-600",children:"+"}),e.jsx("button",{onClick:w,className:"px-3 py-1 bg-gray-500 text-white rounded hover:bg-gray-600",children:"重置"})]})]}),e.jsxs("div",{className:"bg-white p-4 rounded-lg border",children:[e.jsx("h4",{className:"font-medium mb-3",children:"文本输入"}),e.jsxs("div",{className:"space-y-2",children:[e.jsx("input",{type:"text",value:t,onChange:m=>a(m.target.value),placeholder:"请输入您的姓名",className:"w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"}),e.jsxs("p",{className:"text-sm text-gray-600",children:["当前输入: ",e.jsx("span",{className:"font-medium",children:t||"(空)"})]})]})]}),e.jsxs("div",{className:"bg-white p-4 rounded-lg border",children:[e.jsx("h4",{className:"font-medium mb-3",children:"显示/隐藏切换"}),e.jsxs("div",{className:"space-y-3",children:[e.jsxs("button",{onClick:()=>s(!i),className:"px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600",children:[i?"隐藏":"显示"," 内容"]}),i&&e.jsx("div",{className:"p-3 bg-blue-50 border border-blue-200 rounded",children:e.jsx("p",{className:"text-blue-800",children:"这是一个可以切换显示/隐藏的内容区域！"})})]})]}),e.jsxs("div",{className:"bg-white p-4 rounded-lg border",children:[e.jsx("h4",{className:"font-medium mb-3",children:"列表管理 (数组状态)"}),e.jsxs("div",{className:"space-y-3",children:[e.jsxs("div",{className:"flex space-x-2",children:[e.jsx("input",{type:"text",value:d,onChange:m=>c(m.target.value),placeholder:"添加新项目",className:"flex-1 px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500",onKeyPress:m=>m.key==="Enter"&&g()}),e.jsx("button",{onClick:g,disabled:!d.trim(),className:"px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600 disabled:bg-gray-300 disabled:cursor-not-allowed",children:"添加"})]}),o.length>0&&e.jsxs("div",{className:"space-y-2",children:[e.jsxs("div",{className:"flex justify-between items-center",children:[e.jsxs("span",{className:"text-sm text-gray-600",children:["共 ",o.length," 个项目"]}),e.jsx("button",{onClick:k,className:"text-sm px-2 py-1 bg-red-500 text-white rounded hover:bg-red-600",children:"清空全部"})]}),e.jsx("ul",{className:"space-y-1",children:o.map((m,x)=>e.jsxs("li",{className:"flex justify-between items-center p-2 bg-gray-50 rounded",children:[e.jsx("span",{children:m}),e.jsx("button",{onClick:()=>R(x),className:"text-red-500 hover:text-red-700 text-sm",children:"删除"})]},x))})]})]})]}),e.jsxs("div",{className:"bg-gray-50 p-4 rounded-lg",children:[e.jsx("h4",{className:"font-medium mb-2",children:"当前状态总览"}),e.jsxs("div",{className:"text-sm space-y-1",children:[e.jsxs("div",{children:["计数器: ",n]}),e.jsxs("div",{children:["姓名: ",t||"(未输入)"]}),e.jsxs("div",{children:["内容可见: ",i?"是":"否"]}),e.jsxs("div",{children:["列表项数: ",o.length]})]})]})]})},Y=`import React, { useState } from "react";

const UseStateExample: React.FC = () => {
  const [count, setCount] = useState(0);
  const [name, setName] = useState("");
  const [isVisible, setIsVisible] = useState(true);
  const [items, setItems] = useState<string[]>([]);
  const [newItem, setNewItem] = useState("");

  // 函数式更新示例
  const increment = () => {
    setCount((prev) => prev + 1);
  };

  const decrement = () => {
    setCount((prev) => prev - 1);
  };

  const reset = () => {
    setCount(0);
  };

  // 数组状态管理
  const addItem = () => {
    if (newItem.trim()) {
      setItems((prev) => [...prev, newItem.trim()]);
      setNewItem("");
    }
  };

  const removeItem = (index: number) => {
    setItems((prev) => prev.filter((_, i) => i !== index));
  };

  const clearItems = () => {
    setItems([]);
  };

  return (
    <div className="space-y-6">
      <h3 className="text-lg font-semibold mb-4">useState 基础示例</h3>

      {/* 计数器示例 */}
      <div className="bg-white p-4 rounded-lg border">
        <h4 className="font-medium mb-3">计数器 (函数式更新)</h4>
        <div className="flex items-center space-x-4">
          <button
            onClick={decrement}
            className="px-3 py-1 bg-red-500 text-white rounded hover:bg-red-600"
          >
            -
          </button>
          <span className="text-xl font-bold">{count}</span>
          <button
            onClick={increment}
            className="px-3 py-1 bg-green-500 text-white rounded hover:bg-green-600"
          >
            +
          </button>
          <button
            onClick={reset}
            className="px-3 py-1 bg-gray-500 text-white rounded hover:bg-gray-600"
          >
            重置
          </button>
        </div>
      </div>

      {/* 文本输入示例 */}
      <div className="bg-white p-4 rounded-lg border">
        <h4 className="font-medium mb-3">文本输入</h4>
        <div className="space-y-2">
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="请输入您的姓名"
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <p className="text-sm text-gray-600">
            当前输入: <span className="font-medium">{name || "(空)"}</span>
          </p>
        </div>
      </div>

      {/* 布尔状态示例 */}
      <div className="bg-white p-4 rounded-lg border">
        <h4 className="font-medium mb-3">显示/隐藏切换</h4>
        <div className="space-y-3">
          <button
            onClick={() => setIsVisible(!isVisible)}
            className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
          >
            {isVisible ? "隐藏" : "显示"} 内容
          </button>
          {isVisible && (
            <div className="p-3 bg-blue-50 border border-blue-200 rounded">
              <p className="text-blue-800">这是一个可以切换显示/隐藏的内容区域！</p>
            </div>
          )}
        </div>
      </div>

      {/* 数组状态示例 */}
      <div className="bg-white p-4 rounded-lg border">
        <h4 className="font-medium mb-3">列表管理 (数组状态)</h4>
        <div className="space-y-3">
          <div className="flex space-x-2">
            <input
              type="text"
              value={newItem}
              onChange={(e) => setNewItem(e.target.value)}
              placeholder="添加新项目"
              className="flex-1 px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              onKeyPress={(e) => e.key === "Enter" && addItem()}
            />
            <button
              onClick={addItem}
              disabled={!newItem.trim()}
              className="px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600 disabled:bg-gray-300 disabled:cursor-not-allowed"
            >
              添加
            </button>
          </div>

          {items.length > 0 && (
            <div className="space-y-2">
              <div className="flex justify-between items-center">
                <span className="text-sm text-gray-600">
                  共 {items.length} 个项目
                </span>
                <button
                  onClick={clearItems}
                  className="text-sm px-2 py-1 bg-red-500 text-white rounded hover:bg-red-600"
                >
                  清空全部
                </button>
              </div>
              <ul className="space-y-1">
                {items.map((item, index) => (
                  <li
                    key={index}
                    className="flex justify-between items-center p-2 bg-gray-50 rounded"
                  >
                    <span>{item}</span>
                    <button
                      onClick={() => removeItem(index)}
                      className="text-red-500 hover:text-red-700 text-sm"
                    >
                      删除
                    </button>
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>
      </div>

      {/* 状态总览 */}
      <div className="bg-gray-50 p-4 rounded-lg">
        <h4 className="font-medium mb-2">当前状态总览</h4>
        <div className="text-sm space-y-1">
          <div>计数器: {count}</div>
          <div>姓名: {name || "(未输入)"}</div>
          <div>内容可见: {isVisible ? "是" : "否"}</div>
          <div>列表项数: {items.length}</div>
        </div>
      </div>
    </div>
  );
};

export default UseStateExample;`,Z=()=>{const n={title:"状态管理 (State Management)",description:"React提供了多种状态管理方式，包括useState、useReducer、Context等，每种方式都有其适用的场景。理解不同状态管理方式的特点和使用场景，对于构建高效、可维护的React应用至关重要。",overview:[{title:"核心概念",items:["React提供了多种状态管理方式，包括useState、useReducer、Context等","每种状态管理方式都有其适用的场景和特点","理解不同状态管理方式对于构建高效、可维护的React应用至关重要","状态管理的选择应该基于应用的复杂度和需求"]},{title:"主要优势",items:["useState - 适用于简单的本地状态管理，API简洁易用","useReducer - 适用于复杂状态逻辑，提供可预测的状态更新","Context - 解决props drilling问题，实现跨组件状态共享","组合使用 - 结合多种方式，构建强大的状态管理解决方案","性能优化 - 通过合理的状态设计避免不必要的重渲染"]},{title:"适用场景",items:["表单状态管理 - 处理用户输入和表单验证","主题切换 - 全局主题状态的管理和切换","购物车功能 - 商品添加、删除和数量管理","用户认证 - 登录状态和用户信息管理","数据缓存 - 接口数据的本地缓存和状态管理"]},{title:"注意事项",items:["状态更新是异步的，不要依赖立即获取更新后的值","避免在render函数中创建新对象，会导致不必要的重新渲染","Context值变化会导致所有消费者重新渲染，需要合理拆分","复杂状态逻辑应该使用useReducer而不是多个useState","状态更新必须遵循不可变性原则，创建新对象而不是修改原对象"]}],examples:[{title:"useState - 本地状态管理",description:"演示useState的基本用法，包括计数器、表单输入和切换状态",component:e.jsx(G,{}),codeExample:{code:Y,language:"tsx"},observationPoints:["useState返回状态值和更新函数的数组","函数式更新可以基于前一个状态值进行更新","每个状态变量都是独立管理的","状态更新会触发组件重新渲染"],keyPoints:["useState是最基础的状态管理Hook","适用于简单的本地状态管理","支持函数式更新模式","状态更新是异步的"],commonTraps:["直接修改状态对象而不是创建新对象","在循环或条件语句中调用useState","忘记使用函数式更新导致闭包陷阱"],solutions:["始终使用展开运算符或Object.assign创建新对象","确保Hook调用顺序一致","使用函数式更新避免闭包问题"],importantTips:["useState的初始值只在首次渲染时使用","状态更新可能会被React批处理","复杂状态逻辑考虑使用useReducer"]},{title:"useReducer - 复杂状态管理",description:"使用useReducer管理复杂的状态逻辑，支持多种操作和历史记录",component:e.jsx(V,{}),codeExample:{code:Q,language:"tsx"},observationPoints:["useReducer接收reducer函数和初始状态","dispatch函数用于触发状态更新","reducer函数集中处理所有状态更新逻辑","支持复杂的状态更新和历史记录功能"],keyPoints:["useReducer适用于复杂状态逻辑","reducer函数必须是纯函数","action对象描述状态更新的类型和数据","提供可预测的状态更新机制"],commonTraps:["reducer函数中直接修改state","action类型定义不清晰或重复","忘记处理default case"],solutions:["始终返回新的状态对象","使用TypeScript定义清晰的action类型","在reducer中添加default case处理"],importantTips:["useReducer在状态逻辑复杂时比useState更合适","reducer函数可以在组件外部定义便于测试","可以配合Context实现全局状态管理"]},{title:"Context - 跨组件状态共享",description:"通过Context API实现主题切换，避免props drilling问题",component:e.jsx(F,{}),codeExample:{code:H,language:"tsx"},observationPoints:["createContext创建上下文对象","Provider组件提供状态给子组件树","useContext Hook消费上下文状态","避免了props drilling问题"],keyPoints:["Context解决跨组件状态共享问题","Provider模式提供状态给子组件","useContext Hook简化状态消费","适用于全局状态如主题、用户信息等"],commonTraps:["Context值变化导致所有消费者重新渲染","创建过多的Context导致Provider嵌套","忘记提供默认值或错误处理"],solutions:["拆分Context，将频繁变化和稳定状态分离","使用useMemo优化Provider的value","提供默认值和自定义Hook进行错误处理"],importantTips:["Context不是状态管理库的替代品","避免在Context中放置频繁变化的状态","可以结合useReducer实现复杂的全局状态管理"]},{title:"组合状态管理",description:"结合Context和useReducer，构建完整的状态管理解决方案",component:e.jsx(U,{}),codeExample:{code:A,language:"tsx"},observationPoints:["Context + useReducer的强大组合","Provider管理全局状态和dispatch函数","支持异步操作和复杂状态逻辑","多个组件可以共享和更新状态"],keyPoints:["组合使用Context和useReducer实现全局状态管理","Provider封装状态逻辑和异步操作","自定义Hook简化状态访问","适用于中小型应用的状态管理需求"],commonTraps:["Provider层级过深导致性能问题","状态更新逻辑过于复杂","缺乏适当的错误边界处理"],solutions:["合理拆分Context和状态逻辑","使用中间件模式处理异步操作","添加错误边界和状态重置功能"],importantTips:["这种模式适合替代Redux在简单场景下的使用","可以添加中间件支持如日志、持久化等","考虑使用Immer库简化不可变更新"]}],tutorial:{concepts:["状态是组件内部的数据，当状态发生变化时，组件会重新渲染","useState适用于简单的本地状态管理","useReducer适用于复杂的状态逻辑和多个相关状态","Context API解决跨组件状态共享问题，避免props drilling","状态更新必须遵循不可变性原则，创建新对象而不是修改原对象","函数式更新可以基于前一个状态值进行更新，避免闭包陷阱"],steps:["分析状态的复杂度和作用域，选择合适的状态管理方式","定义状态的数据结构和类型接口","实现状态更新逻辑，确保遵循不可变性原则","创建自定义Hook封装状态逻辑，提高代码复用性","使用Context Provider包装需要共享状态的组件树","在消费组件中使用useContext或自定义Hook访问状态","添加错误处理和边界情况的处理逻辑","使用React DevTools调试状态更新和组件渲染"],tips:["状态更新是异步的，不要依赖立即获取更新后的值","使用函数式更新避免闭包陷阱：setCount(prev => prev + 1)","复杂状态逻辑优先考虑useReducer而不是多个useState","Context值变化会导致所有消费者重新渲染，合理拆分Context","使用useMemo优化Context Provider的value，避免不必要的渲染","自定义Hook可以封装状态逻辑和错误处理，提高代码质量","避免在render函数中创建新对象，使用useMemo缓存复杂计算","状态提升：将状态放在最近的公共父组件中管理"]},interview:{questions:[{question:"useState和useReducer的区别是什么？什么时候使用哪个？",answer:"useState适用于简单状态管理，返回状态值和更新函数。useReducer适用于复杂状态逻辑，通过reducer函数集中处理状态更新。当状态更新逻辑复杂、涉及多个子值、下一个状态依赖于之前的状态，或需要更好的性能优化时，useReducer更合适。useReducer的dispatch函数引用是稳定的，有助于性能优化。"},{question:"Context API的性能问题如何解决？",answer:"Context值变化会导致所有消费者重新渲染，这是主要的性能问题。解决方案包括：1) 拆分Context，将频繁变化和稳定的状态分离到不同的Context中；2) 使用useMemo优化Provider的value，避免每次渲染都创建新对象；3) 使用React.memo包装消费组件，减少不必要的渲染；4) 对于复杂应用，考虑使用专门的状态管理库如Redux或Zustand。"},{question:"如何在函数组件中实现类似componentDidUpdate的效果？",answer:"使用useEffect配合依赖数组可以实现类似componentDidUpdate的效果。useEffect会在依赖项变化后执行回调函数。可以通过useRef保存前一个值来比较变化，或者使用自定义Hook如usePrevious来跟踪状态变化。注意要正确设置依赖数组，避免无限循环或遗漏依赖。"},{question:"什么是状态提升？为什么需要状态提升？",answer:"状态提升是将状态从子组件移动到父组件的过程。当多个兄弟组件需要共享状态时，应该将状态提升到它们最近的公共父组件中。这样可以确保状态的单一数据源原则，便于管理和同步。状态提升有助于保持数据流的可预测性，使应用更容易调试和维护。"},{question:"如何避免useState的闭包陷阱？",answer:"闭包陷阱发生在异步操作中使用过期的状态值。解决方案：1) 使用函数式更新：setCount(prev => prev + 1)；2) 使用useRef保存最新值的引用；3) 使用useCallback和useEffect正确处理依赖；4) 避免在异步回调中直接使用状态值，而是通过函数式更新获取最新值。"},{question:"Context + useReducer与Redux的区别？",answer:"Context + useReducer是React内置的状态管理方案，适合中小型应用。优点是无需额外依赖，学习成本低。Redux是专门的状态管理库，提供更强大的功能如中间件、时间旅行调试、严格的单向数据流等。Redux适合大型复杂应用，有更好的可预测性和调试工具，但学习成本较高。选择取决于应用复杂度和团队需求。"}],keyPoints:["useState适用于简单状态，useReducer适用于复杂状态逻辑","Context API解决props drilling，但要注意性能问题","状态更新遵循不可变性原则，创建新对象而不是修改原对象","函数式更新可以避免闭包陷阱和依赖问题","状态提升将共享状态放在最近的公共父组件中","useMemo和useCallback用于性能优化，避免不必要的渲染","自定义Hook可以封装状态逻辑，提高代码复用性","React DevTools是调试状态管理的重要工具"]},bestPractices:{dos:["根据状态复杂度选择合适的管理方式：简单状态用useState，复杂逻辑用useReducer","始终保持状态的不可变性，创建新对象而不是修改现有对象","使用函数式更新避免闭包陷阱：setCount(prev => prev + 1)","为复杂状态定义清晰的TypeScript接口和Action类型","使用自定义Hook封装状态逻辑，提高代码复用性","合理拆分Context，将频繁变化和稳定状态分离","使用useMemo优化Context Provider的value","设计扁平化的状态结构，避免深层嵌套","为状态管理添加适当的错误处理和边界情况","使用React DevTools调试状态更新和组件渲染"],donts:["不要直接修改状态对象：user.name = newName","不要在循环或条件语句中调用Hook","不要忘记在useEffect中正确设置依赖数组","不要在Context中放置频繁变化的状态","不要创建过多的Context导致Provider嵌套地狱","不要在render函数中创建新对象，影响性能","不要忽略reducer函数的纯函数特性","不要在异步操作中直接使用状态值，容易产生闭包陷阱","不要过度使用Context，简单的props传递可能更合适","不要忘记为Context提供默认值和错误处理"],patterns:["State + Dispatch Pattern: 使用useReducer集中管理复杂状态逻辑","Provider Pattern: 通过Context Provider向子组件树提供状态","Custom Hook Pattern: 封装状态逻辑到自定义Hook中","Compound Component Pattern: 组合多个组件共享状态","State Lifting Pattern: 将状态提升到最近的公共父组件","Reducer + Context Pattern: 结合useReducer和Context实现全局状态管理","State Machine Pattern: 使用状态机管理复杂的状态转换","Optimistic Update Pattern: 先更新UI，再同步到服务器","Error Boundary Pattern: 使用错误边界处理状态管理中的错误","Middleware Pattern: 在状态更新过程中添加日志、持久化等功能"]}};return e.jsx(I,{...n})};export{Z as default};
