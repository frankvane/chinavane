import{r as x,j as e}from"./index-BWM6UHr8.js";import{c as j,C as y}from"./ComponentTemplate-ClBHhBQ8.js";const f=()=>Math.random().toString(36).substr(2,9),p=j((a,v)=>({user:null,products:[],cart:{items:[],totalPrice:0,totalItems:0},ui:{loading:!1,error:null,sidebarOpen:!1,currentPage:"home"},setUser:t=>{a({user:t})},addProduct:t=>{a(s=>({products:[...s.products,{...t,id:f()}]}))},updateProduct:(t,s)=>{a(n=>({products:n.products.map(d=>d.id===t?{...d,...s}:d)}))},removeProduct:t=>{a(s=>({products:s.products.filter(n=>n.id!==t)}))},addToCart:(t,s)=>{a(n=>{const d=n.cart.items.find(r=>r.productId===t);let c;d?c=n.cart.items.map(r=>r.productId===t?{...r,quantity:r.quantity+s}:r):c=[...n.cart.items,{productId:t,quantity:s}];const o=c.reduce((r,u)=>r+u.quantity,0),l=c.reduce((r,u)=>{const g=n.products.find(m=>m.id===u.productId);return r+(g?g.price*u.quantity:0)},0);return{cart:{items:c,totalPrice:l,totalItems:o}}})},removeFromCart:t=>{a(s=>{const n=s.cart.items.filter(o=>o.productId!==t),d=n.reduce((o,l)=>o+l.quantity,0),c=n.reduce((o,l)=>{const r=s.products.find(u=>u.id===l.productId);return o+(r?r.price*l.quantity:0)},0);return{cart:{items:n,totalPrice:c,totalItems:d}}})},clearCart:()=>{a({cart:{items:[],totalPrice:0,totalItems:0}})},setLoading:t=>{a(s=>({ui:{...s.ui,loading:t}}))},setError:t=>{a(s=>({ui:{...s.ui,error:t}}))},toggleSidebar:()=>{a(t=>({ui:{...t.ui,sidebarOpen:!t.ui.sidebarOpen}}))},setCurrentPage:t=>{a(s=>({ui:{...s.ui,currentPage:t}}))},resetState:()=>{a({user:null,products:[],cart:{items:[],totalPrice:0,totalItems:0},ui:{loading:!1,error:null,sidebarOpen:!1,currentPage:"home"}})}})),w=()=>{const[a,v]=x.useState(0),t=x.useRef(0),s=p(i=>{var b;return(b=i.user)==null?void 0:b.name}),n=p(i=>i.cart.totalItems),d=p(i=>i.ui.loading);t.current+=1,x.useEffect(()=>{v(t.current)},[s,n,d]);const{setUser:c,addProduct:o,addToCart:l,setLoading:r,toggleSidebar:u,resetState:g}=p(),m=p(i=>i.products),h=p(i=>i.ui.sidebarOpen);return e.jsx("div",{className:"space-y-6",children:e.jsxs("div",{className:"bg-white p-6 rounded-lg shadow",children:[e.jsx("h3",{className:"text-lg font-semibold mb-4",children:"精准选择器演示"}),e.jsxs("div",{className:"mb-4 p-4 bg-green-50 rounded-lg border border-green-200",children:[e.jsx("h4",{className:"font-medium text-green-800 mb-2",children:"✅ 精准选择器特点"}),e.jsxs("ul",{className:"text-sm text-green-700 space-y-1",children:[e.jsx("li",{children:"• 只订阅需要的状态字段：用户名、购物车数量、加载状态、产品列表、侧边栏状态"}),e.jsx("li",{children:"• 只有相关字段变化时才会重新渲染"}),e.jsx("li",{children:"• 可以显著减少不必要的渲染"}),e.jsx("li",{children:"• 提升应用整体性能"})]})]}),e.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-6 mb-6",children:[e.jsxs("div",{className:"border rounded-lg p-4 bg-green-50",children:[e.jsx("h4",{className:"font-medium text-green-800 mb-2",children:"精准选择器组件"}),e.jsxs("div",{className:"text-sm space-y-1",children:[e.jsxs("p",{children:["用户: ",s||"未设置"]}),e.jsxs("p",{children:["购物车: ",n," 件"]}),e.jsxs("p",{children:["状态: ",d?"加载中":"空闲"]}),e.jsxs("p",{children:["侧边栏: ",h?"打开":"关闭"]}),e.jsxs("p",{children:["产品数量: ",m.length," 个"]}),e.jsxs("p",{className:"text-green-600 font-medium",children:["渲染次数: ",a]})]})]}),e.jsxs("div",{className:"border rounded-lg p-4 bg-blue-50",children:[e.jsx("h4",{className:"font-medium text-blue-800 mb-2",children:"选择器代码"}),e.jsxs("div",{className:"text-xs font-mono bg-gray-100 p-2 rounded",children:[e.jsx("div",{children:"const userName = usePrecisionStore("}),e.jsx("div",{className:"ml-2",children:"(state) => state.user?.name"}),e.jsx("div",{children:");"}),e.jsx("div",{className:"mt-2",children:"const cartTotalItems = usePrecisionStore("}),e.jsx("div",{className:"ml-2",children:"(state) => state.cart.totalItems"}),e.jsx("div",{children:");"}),e.jsx("div",{className:"mt-2",children:"const isLoading = usePrecisionStore("}),e.jsx("div",{className:"ml-2",children:"(state) => state.ui.loading"}),e.jsx("div",{children:");"}),e.jsx("div",{className:"mt-2",children:"const products = usePrecisionStore("}),e.jsx("div",{className:"ml-2",children:"(state) => state.products"}),e.jsx("div",{children:");"}),e.jsx("div",{className:"mt-2",children:"const sidebarOpen = usePrecisionStore("}),e.jsx("div",{className:"ml-2",children:"(state) => state.ui.sidebarOpen"}),e.jsx("div",{children:");"})]})]})]}),m.length>0&&e.jsxs("div",{className:"mb-6 p-4 bg-gray-50 rounded-lg",children:[e.jsxs("h4",{className:"font-medium text-gray-800 mb-3",children:["产品列表 (",m.length," 个)"]}),e.jsx("div",{className:"grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3",children:m.map(i=>e.jsxs("div",{className:"bg-white p-3 rounded border",children:[e.jsx("h5",{className:"font-medium text-sm",children:i.name}),e.jsxs("p",{className:"text-xs text-gray-600",children:["¥",i.price]}),e.jsxs("p",{className:"text-xs text-gray-500",children:["库存: ",i.stock]})]},i.id))})]}),e.jsxs("div",{className:"space-y-4",children:[e.jsxs("div",{className:"flex flex-wrap gap-3",children:[e.jsx("button",{onClick:()=>c({id:"1",name:"张三",email:"zhangsan@example.com",avatar:"https://via.placeholder.com/40",role:"user",preferences:{theme:"light",language:"zh-CN",notifications:!0},createdAt:new Date,updatedAt:new Date}),className:"px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600",children:"设置用户"}),e.jsx("button",{onClick:()=>o({name:`产品 ${m.length+1}`,description:"这是一个测试产品",price:99,category:"测试",stock:10,images:["https://via.placeholder.com/200"],tags:["测试"],rating:4.5,reviews:100}),className:"px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600",children:"添加产品"}),e.jsx("button",{onClick:()=>l("1",1),className:"px-4 py-2 bg-purple-500 text-white rounded hover:bg-purple-600",children:"添加到购物车"}),e.jsx("button",{onClick:()=>r(!0),className:"px-4 py-2 bg-yellow-500 text-white rounded hover:bg-yellow-600",children:"设置加载状态"}),e.jsx("button",{onClick:()=>r(!1),className:"px-4 py-2 bg-orange-500 text-white rounded hover:bg-orange-600",children:"关闭加载状态"}),e.jsx("button",{onClick:u,className:`px-4 py-2 text-white rounded ${h?"bg-green-500 hover:bg-green-600":"bg-gray-500 hover:bg-gray-600"}`,children:h?"关闭侧边栏":"打开侧边栏"}),e.jsx("button",{onClick:g,className:"px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600",children:"重置状态"})]}),e.jsxs("div",{className:"bg-blue-50 p-4 rounded-lg border border-blue-200",children:[e.jsx("h4",{className:"font-medium text-blue-800 mb-2",children:"⚠️ 观察要点"}),e.jsxs("ul",{className:"text-sm text-blue-700 space-y-1",children:[e.jsxs("li",{children:["• ",e.jsx("strong",{children:"设置用户"}),"：组件会重新渲染（用户名变化）"]}),e.jsxs("li",{children:["• ",e.jsx("strong",{children:"添加产品"}),"：组件不会重新渲染（不影响订阅的字段）"]}),e.jsxs("li",{children:["• ",e.jsx("strong",{children:"添加到购物车"}),"：组件会重新渲染（购物车数量变化）"]}),e.jsxs("li",{children:["• ",e.jsx("strong",{children:"设置/关闭加载状态"}),"：组件会重新渲染（加载状态变化）"]}),e.jsxs("li",{children:["• ",e.jsx("strong",{children:"切换侧边栏"}),"：组件不会重新渲染（不影响订阅的字段）"]})]})]})]})]})})},P=()=>{var b;const[a,v]=x.useState(0),t=x.useRef(0),s=p(),n=(b=s.user)==null?void 0:b.name,d=s.cart.totalItems,c=s.ui.loading,o=s.products,l=s.ui.sidebarOpen;t.current+=1,x.useEffect(()=>{v(t.current)},[n,d,c]);const{setUser:r,addProduct:u,addToCart:g,setLoading:m,toggleSidebar:h,resetState:i}=s;return e.jsx("div",{className:"space-y-6",children:e.jsxs("div",{className:"bg-white p-6 rounded-lg shadow",children:[e.jsx("h3",{className:"text-lg font-semibold mb-4",children:"非精准选择器对比"}),e.jsxs("div",{className:"mb-4 p-4 bg-red-50 rounded-lg border border-red-200",children:[e.jsx("h4",{className:"font-medium text-red-800 mb-2",children:"❌ 非精准选择器问题"}),e.jsxs("ul",{className:"text-sm text-red-700 space-y-1",children:[e.jsx("li",{children:"• 订阅整个状态对象，任何状态变化都会触发重新渲染"}),e.jsx("li",{children:"• 可能导致性能问题，特别是在复杂应用中"}),e.jsx("li",{children:"• 影响用户体验，造成界面卡顿"}),e.jsx("li",{children:"• 增加不必要的计算和内存占用"})]})]}),e.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-6 mb-6",children:[e.jsxs("div",{className:"border rounded-lg p-4 bg-red-50",children:[e.jsx("h4",{className:"font-medium text-red-800 mb-2",children:"非精准选择器组件"}),e.jsxs("div",{className:"text-sm space-y-1",children:[e.jsxs("p",{children:["用户: ",n||"未设置"]}),e.jsxs("p",{children:["购物车: ",d," 件"]}),e.jsxs("p",{children:["状态: ",c?"加载中":"空闲"]}),e.jsxs("p",{children:["侧边栏: ",l?"打开":"关闭"]}),e.jsxs("p",{children:["产品数量: ",o.length," 个"]}),e.jsxs("p",{className:"text-red-600 font-medium",children:["渲染次数: ",a]})]})]}),e.jsxs("div",{className:"border rounded-lg p-4 bg-orange-50",children:[e.jsx("h4",{className:"font-medium text-orange-800 mb-2",children:"选择器代码"}),e.jsxs("div",{className:"text-xs font-mono bg-gray-100 p-2 rounded",children:[e.jsx("div",{children:"const state = usePrecisionStore();"}),e.jsx("div",{className:"mt-2",children:"const userName = state.user?.name;"}),e.jsx("div",{children:"const cartTotalItems = state.cart.totalItems;"}),e.jsx("div",{children:"const isLoading = state.ui.loading;"}),e.jsx("div",{children:"const products = state.products;"}),e.jsx("div",{children:"const sidebarOpen = state.ui.sidebarOpen;"})]})]})]}),o.length>0&&e.jsxs("div",{className:"mb-6 p-4 bg-gray-50 rounded-lg",children:[e.jsxs("h4",{className:"font-medium text-gray-800 mb-3",children:["产品列表 (",o.length," 个)"]}),e.jsx("div",{className:"grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3",children:o.map(N=>e.jsxs("div",{className:"bg-white p-3 rounded border",children:[e.jsx("h5",{className:"font-medium text-sm",children:N.name}),e.jsxs("p",{className:"text-xs text-gray-600",children:["¥",N.price]}),e.jsxs("p",{className:"text-xs text-gray-500",children:["库存: ",N.stock]})]},N.id))})]}),e.jsxs("div",{className:"space-y-4",children:[e.jsxs("div",{className:"flex flex-wrap gap-3",children:[e.jsx("button",{onClick:()=>r({id:"1",name:"李四",email:"lisi@example.com",avatar:"https://via.placeholder.com/40",role:"user",preferences:{theme:"dark",language:"en-US",notifications:!1},createdAt:new Date,updatedAt:new Date}),className:"px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600",children:"设置用户"}),e.jsx("button",{onClick:()=>u({name:`产品 ${o.length+1}`,description:"这是另一个测试产品",price:199,category:"测试",stock:5,images:["https://via.placeholder.com/200"],tags:["测试"],rating:4,reviews:50}),className:"px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600",children:"添加产品"}),e.jsx("button",{onClick:()=>g("1",2),className:"px-4 py-2 bg-purple-500 text-white rounded hover:bg-purple-600",children:"添加到购物车"}),e.jsx("button",{onClick:()=>m(!0),className:"px-4 py-2 bg-yellow-500 text-white rounded hover:bg-yellow-600",children:"设置加载状态"}),e.jsx("button",{onClick:()=>m(!1),className:"px-4 py-2 bg-orange-500 text-white rounded hover:bg-orange-600",children:"关闭加载状态"}),e.jsx("button",{onClick:h,className:`px-4 py-2 text-white rounded ${l?"bg-green-500 hover:bg-green-600":"bg-gray-500 hover:bg-gray-600"}`,children:l?"关闭侧边栏":"打开侧边栏"}),e.jsx("button",{onClick:i,className:"px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600",children:"重置状态"})]}),e.jsxs("div",{className:"bg-yellow-50 p-4 rounded-lg border border-yellow-200",children:[e.jsx("h4",{className:"font-medium text-yellow-800 mb-2",children:"⚠️ 观察要点"}),e.jsxs("ul",{className:"text-sm text-yellow-700 space-y-1",children:[e.jsxs("li",{children:["• ",e.jsx("strong",{children:"任何操作"}),"：组件都会重新渲染"]}),e.jsxs("li",{children:["• ",e.jsx("strong",{children:"设置用户"}),"：组件重新渲染（用户名变化）"]}),e.jsxs("li",{children:["• ",e.jsx("strong",{children:"添加产品"}),"：组件重新渲染（产品列表变化）"]}),e.jsxs("li",{children:["• ",e.jsx("strong",{children:"添加到购物车"}),"：组件重新渲染（购物车变化）"]}),e.jsxs("li",{children:["• ",e.jsx("strong",{children:"设置/关闭加载状态"}),"：组件重新渲染（加载状态变化）"]}),e.jsxs("li",{children:["• ",e.jsx("strong",{children:"切换侧边栏"}),"：组件重新渲染（UI状态变化）"]})]}),e.jsx("p",{className:"mt-2 text-yellow-600 font-medium",children:"⚠️ 注意：非精准选择器在任何状态变化时都会重新渲染，这可能导致性能问题！"})]})]})]})})},I=`import React, { useEffect, useRef, useState } from "react";

import { usePrecisionStore } from "../stores/precisionStore";

const PrecisionSelectorDemo: React.FC = () => {
  const [renderCount, setRenderCount] = useState(0);
  const renderCountRef = useRef(0);

  // 精准选择器 - 只订阅需要的字段
  const userName = usePrecisionStore((state) => state.user?.name);
  const cartTotalItems = usePrecisionStore((state) => state.cart.totalItems);
  const isLoading = usePrecisionStore((state) => state.ui.loading);

  // 渲染计数
  renderCountRef.current += 1;
  useEffect(() => {
    setRenderCount(renderCountRef.current);
  }, [userName, cartTotalItems, isLoading]);

  const {
    setUser,
    addProduct,
    addToCart,
    setLoading,
    toggleSidebar,
    resetState,
  } = usePrecisionStore();

  // 获取产品列表和侧边栏状态用于显示
  const products = usePrecisionStore((state) => state.products);
  const sidebarOpen = usePrecisionStore((state) => state.ui.sidebarOpen);

  return (
    <div className="space-y-6">
      <div className="bg-white p-6 rounded-lg shadow">
        <h3 className="text-lg font-semibold mb-4">精准选择器演示</h3>

        <div className="mb-4 p-4 bg-green-50 rounded-lg border border-green-200">
          <h4 className="font-medium text-green-800 mb-2">✅ 精准选择器特点</h4>
          <ul className="text-sm text-green-700 space-y-1">
            <li>
              •
              只订阅需要的状态字段：用户名、购物车数量、加载状态、产品列表、侧边栏状态
            </li>
            <li>• 只有相关字段变化时才会重新渲染</li>
            <li>• 可以显著减少不必要的渲染</li>
            <li>• 提升应用整体性能</li>
          </ul>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
          <div className="border rounded-lg p-4 bg-green-50">
            <h4 className="font-medium text-green-800 mb-2">精准选择器组件</h4>
            <div className="text-sm space-y-1">
              <p>用户: {userName || "未设置"}</p>
              <p>购物车: {cartTotalItems} 件</p>
              <p>状态: {isLoading ? "加载中" : "空闲"}</p>
              <p>侧边栏: {sidebarOpen ? "打开" : "关闭"}</p>
              <p>产品数量: {products.length} 个</p>
              <p className="text-green-600 font-medium">
                渲染次数: {renderCount}
              </p>
            </div>
          </div>

          <div className="border rounded-lg p-4 bg-blue-50">
            <h4 className="font-medium text-blue-800 mb-2">选择器代码</h4>
            <div className="text-xs font-mono bg-gray-100 p-2 rounded">
              <div>const userName = usePrecisionStore(</div>
              <div className="ml-2">(state) =&gt; state.user?.name</div>
              <div>);</div>
              <div className="mt-2">
                const cartTotalItems = usePrecisionStore(
              </div>
              <div className="ml-2">(state) =&gt; state.cart.totalItems</div>
              <div>);</div>
              <div className="mt-2">const isLoading = usePrecisionStore(</div>
              <div className="ml-2">(state) =&gt; state.ui.loading</div>
              <div>);</div>
              <div className="mt-2">const products = usePrecisionStore(</div>
              <div className="ml-2">(state) =&gt; state.products</div>
              <div>);</div>
              <div className="mt-2">const sidebarOpen = usePrecisionStore(</div>
              <div className="ml-2">(state) =&gt; state.ui.sidebarOpen</div>
              <div>);</div>
            </div>
          </div>
        </div>

        {/* 产品列表显示 */}
        {products.length > 0 && (
          <div className="mb-6 p-4 bg-gray-50 rounded-lg">
            <h4 className="font-medium text-gray-800 mb-3">
              产品列表 ({products.length} 个)
            </h4>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
              {products.map((product) => (
                <div key={product.id} className="bg-white p-3 rounded border">
                  <h5 className="font-medium text-sm">{product.name}</h5>
                  <p className="text-xs text-gray-600">¥{product.price}</p>
                  <p className="text-xs text-gray-500">库存: {product.stock}</p>
                </div>
              ))}
            </div>
          </div>
        )}

        <div className="space-y-4">
          <div className="flex flex-wrap gap-3">
            <button
              onClick={() =>
                setUser({
                  id: "1",
                  name: "张三",
                  email: "zhangsan@example.com",
                  avatar: "https://via.placeholder.com/40",
                  role: "user",
                  preferences: {
                    theme: "light",
                    language: "zh-CN",
                    notifications: true,
                  },
                  createdAt: new Date(),
                  updatedAt: new Date(),
                })
              }
              className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
            >
              设置用户
            </button>

            <button
              onClick={() =>
                addProduct({
                  name: \`产品 \${products.length + 1}\`,
                  description: "这是一个测试产品",
                  price: 99,
                  category: "测试",
                  stock: 10,
                  images: ["https://via.placeholder.com/200"],
                  tags: ["测试"],
                  rating: 4.5,
                  reviews: 100,
                })
              }
              className="px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600"
            >
              添加产品
            </button>

            <button
              onClick={() => addToCart("1", 1)}
              className="px-4 py-2 bg-purple-500 text-white rounded hover:bg-purple-600"
            >
              添加到购物车
            </button>

            <button
              onClick={() => setLoading(true)}
              className="px-4 py-2 bg-yellow-500 text-white rounded hover:bg-yellow-600"
            >
              设置加载状态
            </button>

            <button
              onClick={() => setLoading(false)}
              className="px-4 py-2 bg-orange-500 text-white rounded hover:bg-orange-600"
            >
              关闭加载状态
            </button>

            <button
              onClick={toggleSidebar}
              className={\`px-4 py-2 text-white rounded \${
                sidebarOpen
                  ? "bg-green-500 hover:bg-green-600"
                  : "bg-gray-500 hover:bg-gray-600"
              }\`}
            >
              {sidebarOpen ? "关闭侧边栏" : "打开侧边栏"}
            </button>

            <button
              onClick={resetState}
              className="px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600"
            >
              重置状态
            </button>
          </div>

          <div className="bg-blue-50 p-4 rounded-lg border border-blue-200">
            <h4 className="font-medium text-blue-800 mb-2">⚠️ 观察要点</h4>
            <ul className="text-sm text-blue-700 space-y-1">
              <li>
                • <strong>设置用户</strong>：组件会重新渲染（用户名变化）
              </li>
              <li>
                • <strong>添加产品</strong>
                ：组件不会重新渲染（不影响订阅的字段）
              </li>
              <li>
                • <strong>添加到购物车</strong>
                ：组件会重新渲染（购物车数量变化）
              </li>
              <li>
                • <strong>设置/关闭加载状态</strong>
                ：组件会重新渲染（加载状态变化）
              </li>
              <li>
                • <strong>切换侧边栏</strong>
                ：组件不会重新渲染（不影响订阅的字段）
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PrecisionSelectorDemo;
`,C=`import React, { useState, useRef, useEffect } from "react";
import { usePrecisionStore } from "../stores/precisionStore";

const NonPrecisionSelectorDemo: React.FC = () => {
  const [renderCount, setRenderCount] = useState(0);
  const renderCountRef = useRef(0);

  // 非精准选择器 - 订阅整个状态
  const state = usePrecisionStore();
  const userName = state.user?.name;
  const cartTotalItems = state.cart.totalItems;
  const isLoading = state.ui.loading;
  const products = state.products;
  const sidebarOpen = state.ui.sidebarOpen;

  // 渲染计数
  renderCountRef.current += 1;
  useEffect(() => {
    setRenderCount(renderCountRef.current);
  }, [userName, cartTotalItems, isLoading]);

  const { setUser, addProduct, addToCart, setLoading, toggleSidebar, resetState } = state;

  return (
    <div className="space-y-6">
      <div className="bg-white p-6 rounded-lg shadow">
        <h3 className="text-lg font-semibold mb-4">非精准选择器对比</h3>
        
        <div className="mb-4 p-4 bg-red-50 rounded-lg border border-red-200">
          <h4 className="font-medium text-red-800 mb-2">❌ 非精准选择器问题</h4>
          <ul className="text-sm text-red-700 space-y-1">
            <li>• 订阅整个状态对象，任何状态变化都会触发重新渲染</li>
            <li>• 可能导致性能问题，特别是在复杂应用中</li>
            <li>• 影响用户体验，造成界面卡顿</li>
            <li>• 增加不必要的计算和内存占用</li>
          </ul>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
          <div className="border rounded-lg p-4 bg-red-50">
            <h4 className="font-medium text-red-800 mb-2">非精准选择器组件</h4>
            <div className="text-sm space-y-1">
              <p>用户: {userName || "未设置"}</p>
              <p>购物车: {cartTotalItems} 件</p>
              <p>状态: {isLoading ? "加载中" : "空闲"}</p>
              <p>侧边栏: {sidebarOpen ? "打开" : "关闭"}</p>
              <p>产品数量: {products.length} 个</p>
              <p className="text-red-600 font-medium">渲染次数: {renderCount}</p>
            </div>
          </div>

          <div className="border rounded-lg p-4 bg-orange-50">
            <h4 className="font-medium text-orange-800 mb-2">选择器代码</h4>
            <div className="text-xs font-mono bg-gray-100 p-2 rounded">
              <div>const state = usePrecisionStore();</div>
              <div className="mt-2">const userName = state.user?.name;</div>
              <div>const cartTotalItems = state.cart.totalItems;</div>
              <div>const isLoading = state.ui.loading;</div>
              <div>const products = state.products;</div>
              <div>const sidebarOpen = state.ui.sidebarOpen;</div>
            </div>
          </div>
        </div>

        {/* 产品列表显示 */}
        {products.length > 0 && (
          <div className="mb-6 p-4 bg-gray-50 rounded-lg">
            <h4 className="font-medium text-gray-800 mb-3">产品列表 ({products.length} 个)</h4>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
              {products.map((product) => (
                <div key={product.id} className="bg-white p-3 rounded border">
                  <h5 className="font-medium text-sm">{product.name}</h5>
                  <p className="text-xs text-gray-600">¥{product.price}</p>
                  <p className="text-xs text-gray-500">库存: {product.stock}</p>
                </div>
              ))}
            </div>
          </div>
        )}

        <div className="space-y-4">
          <div className="flex flex-wrap gap-3">
            <button
              onClick={() => setUser({
                id: "1",
                name: "李四",
                email: "lisi@example.com",
                avatar: "https://via.placeholder.com/40",
                role: "user",
                preferences: { theme: "dark", language: "en-US", notifications: false },
                createdAt: new Date(),
                updatedAt: new Date(),
              })}
              className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
            >
              设置用户
            </button>
            
            <button
              onClick={() => addProduct({
                name: \`产品 \${products.length + 1}\`,
                description: "这是另一个测试产品",
                price: 199,
                category: "测试",
                stock: 5,
                images: ["https://via.placeholder.com/200"],
                tags: ["测试"],
                rating: 4.0,
                reviews: 50,
              })}
              className="px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600"
            >
              添加产品
            </button>
            
            <button
              onClick={() => addToCart("1", 2)}
              className="px-4 py-2 bg-purple-500 text-white rounded hover:bg-purple-600"
            >
              添加到购物车
            </button>
            
            <button
              onClick={() => setLoading(true)}
              className="px-4 py-2 bg-yellow-500 text-white rounded hover:bg-yellow-600"
            >
              设置加载状态
            </button>
            
            <button
              onClick={() => setLoading(false)}
              className="px-4 py-2 bg-orange-500 text-white rounded hover:bg-orange-600"
            >
              关闭加载状态
            </button>
            
            <button
              onClick={toggleSidebar}
              className={\`px-4 py-2 text-white rounded \${
                sidebarOpen 
                  ? 'bg-green-500 hover:bg-green-600' 
                  : 'bg-gray-500 hover:bg-gray-600'
              }\`}
            >
              {sidebarOpen ? '关闭侧边栏' : '打开侧边栏'}
            </button>
            
            <button
              onClick={resetState}
              className="px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600"
            >
              重置状态
            </button>
          </div>

          <div className="bg-yellow-50 p-4 rounded-lg border border-yellow-200">
            <h4 className="font-medium text-yellow-800 mb-2">⚠️ 观察要点</h4>
            <ul className="text-sm text-yellow-700 space-y-1">
              <li>• <strong>任何操作</strong>：组件都会重新渲染</li>
              <li>• <strong>设置用户</strong>：组件重新渲染（用户名变化）</li>
              <li>• <strong>添加产品</strong>：组件重新渲染（产品列表变化）</li>
              <li>• <strong>添加到购物车</strong>：组件重新渲染（购物车变化）</li>
              <li>• <strong>设置/关闭加载状态</strong>：组件重新渲染（加载状态变化）</li>
              <li>• <strong>切换侧边栏</strong>：组件重新渲染（UI状态变化）</li>
            </ul>
            <p className="mt-2 text-yellow-600 font-medium">
              ⚠️ 注意：非精准选择器在任何状态变化时都会重新渲染，这可能导致性能问题！
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NonPrecisionSelectorDemo;
`,S=`import { create } from 'zustand';
import { PrecisionState, User, Product, CartItem } from '../types';

// 生成唯一ID的辅助函数
const generateUniqueId = (): string => {
  return Math.random().toString(36).substr(2, 9);
};

const usePrecisionStore = create<PrecisionState>((set, get) => ({
  // 初始状态
  user: null,
  products: [],
  cart: {
    items: [],
    totalPrice: 0,
    totalItems: 0,
  },
  ui: {
    loading: false,
    error: null,
    sidebarOpen: false,
    currentPage: 'home',
  },

  // 用户相关操作
  setUser: (user: User) => {
    set({ user });
  },

  // 产品相关操作
  addProduct: (product: Omit<Product, 'id'>) => {
    set((state) => ({
      products: [
        ...state.products,
        {
          ...product,
          id: generateUniqueId(),
        },
      ],
    }));
  },

  updateProduct: (productId: string, updates: Partial<Product>) => {
    set((state) => ({
      products: state.products.map((product) =>
        product.id === productId ? { ...product, ...updates } : product
      ),
    }));
  },

  removeProduct: (productId: string) => {
    set((state) => ({
      products: state.products.filter((product) => product.id !== productId),
    }));
  },

  // 购物车相关操作
  addToCart: (productId: string, quantity: number) => {
    set((state) => {
      const existingItem = state.cart.items.find(
        (item) => item.productId === productId
      );

      let newItems: CartItem[];
      if (existingItem) {
        newItems = state.cart.items.map((item) =>
          item.productId === productId
            ? { ...item, quantity: item.quantity + quantity }
            : item
        );
      } else {
        newItems = [...state.cart.items, { productId, quantity }];
      }

      const totalItems = newItems.reduce((sum, item) => sum + item.quantity, 0);
      const totalPrice = newItems.reduce((sum, item) => {
        const product = state.products.find((p) => p.id === item.productId);
        return sum + (product ? product.price * item.quantity : 0);
      }, 0);

      return {
        cart: {
          items: newItems,
          totalPrice,
          totalItems,
        },
      };
    });
  },

  removeFromCart: (productId: string) => {
    set((state) => {
      const newItems = state.cart.items.filter(
        (item) => item.productId !== productId
      );

      const totalItems = newItems.reduce((sum, item) => sum + item.quantity, 0);
      const totalPrice = newItems.reduce((sum, item) => {
        const product = state.products.find((p) => p.id === item.productId);
        return sum + (product ? product.price * item.quantity : 0);
      }, 0);

      return {
        cart: {
          items: newItems,
          totalPrice,
          totalItems,
        },
      };
    });
  },

  clearCart: () => {
    set({
      cart: {
        items: [],
        totalPrice: 0,
        totalItems: 0,
      },
    });
  },

  // UI相关操作
  setLoading: (loading: boolean) => {
    set((state) => ({
      ui: {
        ...state.ui,
        loading,
      },
    }));
  },

  setError: (error: string | null) => {
    set((state) => ({
      ui: {
        ...state.ui,
        error,
      },
    }));
  },

  toggleSidebar: () => {
    set((state) => ({
      ui: {
        ...state.ui,
        sidebarOpen: !state.ui.sidebarOpen,
      },
    }));
  },

  setCurrentPage: (page: string) => {
    set((state) => ({
      ui: {
        ...state.ui,
        currentPage: page,
      },
    }));
  },

  // 重置状态
  resetState: () => {
    set({
      user: null,
      products: [],
      cart: {
        items: [],
        totalPrice: 0,
        totalItems: 0,
      },
      ui: {
        loading: false,
        error: null,
        sidebarOpen: false,
        currentPage: 'home',
      },
    });
  },
}));

export { usePrecisionStore };
`,T=()=>e.jsx(y,{title:"Selector 精准更新",description:"学习如何通过精准选择器优化 Zustand 性能。掌握精准订阅、避免不必要渲染和性能最佳实践。",overview:[{title:"核心概念",items:["精准选择器只订阅需要的状态字段，避免全状态订阅导致的性能问题。","Zustand 使用浅比较判断状态变化，精准选择器可以显著减少不必要的重新渲染。","选择器应该返回稳定的引用，避免每次调用都创建新对象。","合理拆分组件和选择器，可以实现细粒度的性能控制。","通过渲染监控可以直观地看到精准选择器的性能优势。"]},{title:"主要优势",items:["减少不必要的重新渲染，提升应用性能。","降低组件复杂度，提高代码可维护性。","更好的用户体验，避免界面卡顿。","减少内存占用，优化资源使用。","便于调试和性能分析。"]},{title:"适用场景",items:["大型应用中的状态管理优化。","频繁更新的状态字段。","复杂组件树的性能优化。","需要精确控制渲染时机的场景。","对性能要求较高的应用。"]},{title:"注意事项",items:["避免订阅整个 store，优先使用选择器。","选择器应定义在组件外部，保持引用稳定。","不要在选择器中做副作用或复杂计算。","选择器返回对象时需配合 shallow 比较。","监控组件渲染次数，及时优化性能瓶颈。"]}],examples:[{title:"精准选择器演示",component:e.jsx(w,{}),description:"演示精准选择器的正确用法，只订阅需要的状态字段",observationPoints:["观察精准选择器组件的渲染次数变化","注意只有相关字段变化时才会重新渲染","体验精准选择器的性能优势","理解精准选择器的工作原理"],keyPoints:["精准选择器只订阅需要的状态字段","只有相关字段变化时才会重新渲染","可以显著减少不必要的渲染","提升应用整体性能"],commonTraps:["订阅整个状态对象","在选择器中创建新对象","忽视选择器的性能影响","不理解精准选择器的工作原理"],solutions:["使用函数选择器订阅特定字段","保持选择器简单和纯净","监控组件渲染次数","理解 Zustand 的浅比较机制"],codeExample:{code:I,title:"精准选择器演示组件"}},{title:"非精准选择器对比",component:e.jsx(P,{}),description:"演示非精准选择器的问题，订阅整个状态对象",observationPoints:["观察非精准选择器组件的渲染次数变化","注意任何状态变化都会触发重新渲染","对比精准选择器和非精准选择器的差异","理解全状态订阅的性能问题"],keyPoints:["非精准选择器订阅整个状态对象","任何状态变化都会触发重新渲染","可能导致性能问题","在复杂应用中影响用户体验"],commonTraps:["使用 useStore() 获取整个状态","忽视组件的渲染优化","不理解状态订阅机制","在大型应用中造成性能瓶颈"],solutions:["使用选择器只订阅需要的状态","合理拆分组件和状态","监控组件渲染次数","理解 Zustand 的订阅机制"],codeExample:{code:C,title:"非精准选择器对比组件"}}],tutorial:{concepts:["精准选择器是 Zustand 性能优化的核心机制","选择器函数用于选择 store 中的特定状态片段","Zustand 使用浅比较来决定是否触发组件重新渲染","合理使用选择器可以显著提升应用性能","状态订阅是自动的，组件卸载时会自动取消订阅"],steps:["理解选择器概念和精准订阅的重要性","避免全状态订阅，使用函数选择器","保持选择器简单和稳定","组合多个选择器处理复杂状态","监控组件渲染性能","根据需要优化选择器策略"],tips:["优先使用选择器而不是订阅整个 store","将选择器函数定义在组件外部保持引用稳定","使用 TypeScript 为选择器提供类型安全","监控组件渲染次数来评估性能","合理拆分组件以最大化选择器的效果"]},interview:{questions:[{question:"什么是精准选择器？它有什么优势？",answer:"精准选择器是只订阅组件真正需要的状态字段的选择器。它的优势包括：减少不必要的重新渲染、提升应用性能、降低组件复杂度、减少内存占用等。"},{question:"Zustand 是如何判断状态变化的？",answer:"Zustand 使用浅比较（shallow comparison）来判断状态变化。当选择器返回的值发生变化时，订阅该选择器的组件会重新渲染。"},{question:"如何避免选择器导致的性能问题？",answer:"避免全状态订阅、使用稳定的选择器、合理拆分组件、使用 useMemo 组合选择器、监控渲染次数等。"},{question:"什么时候应该使用精准选择器？",answer:"在大型应用中、频繁更新的状态字段、复杂组件树、需要精确控制渲染时机的场景中，都应该使用精准选择器。"},{question:"如何调试选择器的性能问题？",answer:"使用 React DevTools 的 Profiler、自定义渲染监控 hook、控制台日志、性能分析工具等来调试选择器的性能问题。"}],keyPoints:["精准选择器是 Zustand 性能优化的关键","浅比较决定是否重新渲染","选择器应该保持简单和纯净","合理的组件拆分可以最大化选择器效果","状态订阅是自动管理的"]},bestPractices:{dos:["优先使用选择器而不是订阅整个 store","将选择器函数定义在组件外部","保持选择器简单和纯净","监控组件渲染性能","合理拆分组件以优化订阅","使用 TypeScript 提供类型安全"],donts:["不要在选择器中进行复杂计算","不要在组件内部定义选择器函数","不要忽视组件渲染性能","不要过度拆分选择器","不要在选择器中包含副作用"],patterns:["选择器模式：为常用状态片段定义专用选择器","组件拆分：将大组件拆分为专注的小组件","性能监控：使用渲染计数器监控性能","类型安全：使用 TypeScript 定义选择器类型"]},codeExamples:[{title:"Store 定义",code:S,language:"typescript"}]});export{T as default};
