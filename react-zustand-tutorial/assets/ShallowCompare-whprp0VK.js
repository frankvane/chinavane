import{r as y,j as e}from"./index-BWM6UHr8.js";import{c as O,C as T}from"./ComponentTemplate-ClBHhBQ8.js";const q=()=>Math.random().toString(36).substr(2,9),g=O((o,S)=>({user:null,products:[],cart:{items:[],totalPrice:0,totalItems:0},ui:{loading:!1,error:null,sidebarOpen:!1,currentPage:"home"},setUser:s=>{o({user:s})},addProduct:s=>{o(n=>({products:[...n.products,{...s,id:q()}]}))},updateProduct:(s,n)=>{o(a=>({products:a.products.map(i=>i.id===s?{...i,...n}:i)}))},removeProduct:s=>{o(n=>({products:n.products.filter(a=>a.id!==s)}))},addToCart:(s,n)=>{o(a=>{const i=a.cart.items.find(r=>r.productId===s);let d;i?d=a.cart.items.map(r=>r.productId===s?{...r,quantity:r.quantity+n}:r):d=[...a.cart.items,{productId:s,quantity:n}];const c=d.reduce((r,u)=>r+u.quantity,0),m=d.reduce((r,u)=>{const N=a.products.find(f=>f.id===u.productId);return r+(N?N.price*u.quantity:0)},0);return{cart:{items:d,totalPrice:m,totalItems:c}}})},removeFromCart:s=>{o(n=>{const a=n.cart.items.filter(c=>c.productId!==s),i=a.reduce((c,m)=>c+m.quantity,0),d=a.reduce((c,m)=>{const r=n.products.find(u=>u.id===m.productId);return c+(r?r.price*m.quantity:0)},0);return{cart:{items:a,totalPrice:d,totalItems:i}}})},clearCart:()=>{o({cart:{items:[],totalPrice:0,totalItems:0}})},setLoading:s=>{o(n=>({ui:{...n.ui,loading:s}}))},setError:s=>{o(n=>({ui:{...n.ui,error:s}}))},toggleSidebar:()=>{o(s=>({ui:{...s.ui,sidebarOpen:!s.ui.sidebarOpen}}))},setCurrentPage:s=>{o(n=>({ui:{...n.ui,currentPage:s}}))},resetState:()=>{o({user:null,products:[],cart:{items:[],totalPrice:0,totalItems:0},ui:{loading:!1,error:null,sidebarOpen:!1,currentPage:"home"}})}})),E=()=>{var h,x,I;const[o,S]=y.useState(0),s=y.useRef(0),n=g(),a={name:(h=n.user)==null?void 0:h.name,email:(x=n.user)==null?void 0:x.email,role:(I=n.user)==null?void 0:I.role},i={totalItems:n.cart.totalItems,totalPrice:n.cart.totalPrice},d={loading:n.ui.loading,sidebarOpen:n.ui.sidebarOpen};s.current+=1,y.useEffect(()=>{S(s.current)},[n.user,n.cart,n.ui]);const{setUser:c,addProduct:m,addToCart:r,setLoading:u,toggleSidebar:N,resetState:f}=n,p=n.products,b=p.length>0?p[0].id:null,C=()=>{const t=[29,49,79,99,129,159,199,299,399,599],l=[5,8,12,15,20,25,30,35,40,50],w=["电子产品","服装","家居","运动","美妆","图书","食品","玩具"],j=[3.5,4,4.2,4.5,4.7,4.8,4.9],P=t[Math.floor(Math.random()*t.length)],k=l[Math.floor(Math.random()*l.length)],v=w[Math.floor(Math.random()*w.length)],R=j[Math.floor(Math.random()*j.length)],M=Math.floor(Math.random()*500)+10;return{name:`产品 ${p.length+1}`,description:`这是一个${v}测试产品`,price:P,category:v,stock:k,images:["https://via.placeholder.com/200"],tags:[v,"测试"],rating:R,reviews:M}};return e.jsx("div",{className:"space-y-6",children:e.jsxs("div",{className:"bg-white p-6 rounded-lg shadow",children:[e.jsx("h3",{className:"text-lg font-semibold mb-4",children:"浅比较问题演示"}),e.jsxs("div",{className:"mb-4 p-4 bg-red-50 rounded-lg border border-red-200",children:[e.jsx("h4",{className:"font-medium text-red-800 mb-2",children:"❌ 浅比较问题"}),e.jsxs("ul",{className:"text-sm text-red-700 space-y-1",children:[e.jsx("li",{children:"• 选择器返回新对象，每次调用都创建新的引用"}),e.jsx("li",{children:"• 即使对象内容相同，浅比较也会认为发生了变化"}),e.jsx("li",{children:"• 导致组件不必要的重新渲染"}),e.jsx("li",{children:"• 影响应用性能，特别是在频繁更新的场景中"})]})]}),e.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-6 mb-6",children:[e.jsxs("div",{className:"border rounded-lg p-4 bg-red-50",children:[e.jsx("h4",{className:"font-medium text-red-800 mb-2",children:"问题组件"}),e.jsxs("div",{className:"text-sm space-y-1",children:[e.jsxs("p",{children:["用户: ",a.name||"未设置"]}),e.jsxs("p",{children:["邮箱: ",a.email||"未设置"]}),e.jsxs("p",{children:["角色: ",a.role||"未设置"]}),e.jsxs("p",{children:["购物车: ",i.totalItems," 件"]}),e.jsxs("p",{children:["总价: ¥",i.totalPrice]}),e.jsxs("p",{children:["状态: ",d.loading?"加载中":"空闲"]}),e.jsxs("p",{children:["侧边栏: ",d.sidebarOpen?"打开":"关闭"]}),e.jsxs("p",{className:"text-red-600 font-medium",children:["渲染次数: ",o]})]})]}),e.jsxs("div",{className:"border rounded-lg p-4 bg-orange-50",children:[e.jsx("h4",{className:"font-medium text-orange-800 mb-2",children:"问题代码"}),e.jsxs("div",{className:"text-xs font-mono bg-gray-100 p-2 rounded",children:[e.jsx("div",{children:"const userInfo = useShallowStore("}),e.jsx("div",{className:"ml-2",children:"(state) => ({"}),e.jsx("div",{className:"ml-4",children:"name: state.user?.name,"}),e.jsx("div",{className:"ml-4",children:"email: state.user?.email,"}),e.jsx("div",{className:"ml-4",children:"role: state.user?.role,"}),e.jsx("div",{className:"ml-2",children:"})"}),e.jsx("div",{children:");"}),e.jsx("div",{className:"mt-2 text-red-600",children:"// ❌ 每次返回新对象"}),e.jsx("div",{className:"mt-2 text-yellow-600",children:"// 注意：这里用订阅整个状态来模拟问题"})]})]})]}),p.length>0&&e.jsxs("div",{className:"mb-6 p-4 bg-gray-50 rounded-lg",children:[e.jsxs("h4",{className:"font-medium text-gray-800 mb-3",children:["产品列表 (",p.length," 个)"]}),e.jsx("div",{className:"grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3",children:p.map(t=>e.jsxs("div",{className:"bg-white p-3 rounded border",children:[e.jsx("h5",{className:"font-medium text-sm",children:t.name}),e.jsxs("p",{className:"text-xs text-gray-600",children:["¥",t.price]}),e.jsxs("p",{className:"text-xs text-gray-500",children:["库存: ",t.stock]}),e.jsxs("p",{className:"text-xs text-gray-500",children:["分类: ",t.category]}),e.jsxs("p",{className:"text-xs text-gray-500",children:["评分: ",t.rating,"⭐ (",t.reviews,"评价)"]}),e.jsx("button",{onClick:()=>r(t.id,1),className:"mt-2 px-2 py-1 bg-blue-500 text-white text-xs rounded hover:bg-blue-600",children:"添加到购物车"})]},t.id))})]}),e.jsxs("div",{className:"space-y-4",children:[e.jsxs("div",{className:"flex flex-wrap gap-3",children:[e.jsx("button",{onClick:()=>c({id:"1",name:"张三",email:"zhangsan@example.com",avatar:"https://via.placeholder.com/40",role:"user",preferences:{theme:"light",language:"zh-CN",notifications:!0},createdAt:new Date,updatedAt:new Date}),className:"px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600",children:"设置用户"}),e.jsx("button",{onClick:()=>m(C()),className:"px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600",children:"添加随机产品"}),e.jsx("button",{onClick:()=>b&&r(b,1),disabled:!b,className:`px-4 py-2 text-white rounded ${b?"bg-purple-500 hover:bg-purple-600":"bg-gray-400 cursor-not-allowed"}`,children:b?"添加第一个产品到购物车":"请先添加产品"}),e.jsx("button",{onClick:()=>u(!0),className:"px-4 py-2 bg-yellow-500 text-white rounded hover:bg-yellow-600",children:"设置加载状态"}),e.jsx("button",{onClick:()=>u(!1),className:"px-4 py-2 bg-orange-500 text-white rounded hover:bg-orange-600",children:"关闭加载状态"}),e.jsx("button",{onClick:N,className:`px-4 py-2 text-white rounded ${d.sidebarOpen?"bg-green-500 hover:bg-green-600":"bg-gray-500 hover:bg-gray-600"}`,children:d.sidebarOpen?"关闭侧边栏":"打开侧边栏"}),e.jsx("button",{onClick:f,className:"px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600",children:"重置状态"})]}),e.jsxs("div",{className:"bg-yellow-50 p-4 rounded-lg border border-yellow-200",children:[e.jsx("h4",{className:"font-medium text-yellow-800 mb-2",children:"⚠️ 观察要点"}),e.jsxs("ul",{className:"text-sm text-yellow-700 space-y-1",children:[e.jsxs("li",{children:["• ",e.jsx("strong",{children:"任何操作"}),"：组件都会重新渲染"]}),e.jsxs("li",{children:["• ",e.jsx("strong",{children:"设置用户"}),"：组件重新渲染（用户信息变化）"]}),e.jsxs("li",{children:["• ",e.jsx("strong",{children:"添加产品"}),"：组件重新渲染（产品列表变化）"]}),e.jsxs("li",{children:["• ",e.jsx("strong",{children:"添加到购物车"}),"：组件重新渲染（购物车信息变化）"]}),e.jsxs("li",{children:["• ",e.jsx("strong",{children:"设置/关闭加载状态"}),"：组件重新渲染（UI信息变化）"]}),e.jsxs("li",{children:["• ",e.jsx("strong",{children:"切换侧边栏"}),"：组件重新渲染（UI信息变化）"]})]}),e.jsx("p",{className:"mt-2 text-yellow-600 font-medium",children:"⚠️ 注意：这里通过订阅整个状态来模拟选择器返回新对象的问题！"})]})]})]})})},U=()=>{const[o,S]=y.useState(0),s=y.useRef(0),n=g(t=>{var l;return(l=t.user)==null?void 0:l.name}),a=g(t=>{var l;return(l=t.user)==null?void 0:l.email}),i=g(t=>{var l;return(l=t.user)==null?void 0:l.role}),d=g(t=>t.cart.totalItems),c=g(t=>t.cart.totalPrice),m=g(t=>t.ui.loading),r=g(t=>t.ui.sidebarOpen);s.current+=1,y.useEffect(()=>{S(s.current)},[n,a,i,d,c,m,r]);const{setUser:u,addProduct:N,addToCart:f,setLoading:p,toggleSidebar:b,resetState:C}=g(),h=g(t=>t.products),x=h.length>0?h[0].id:null,I=()=>{const t=[39,59,89,119,149,179,219,319,419,699],l=[3,6,9,12,18,24,28,32,38,45],w=["数码产品","时尚","家具","健身","护肤","教育","零食","游戏"],j=[3.2,3.8,4.1,4.3,4.6,4.7,4.9],P=t[Math.floor(Math.random()*t.length)],k=l[Math.floor(Math.random()*l.length)],v=w[Math.floor(Math.random()*w.length)],R=j[Math.floor(Math.random()*j.length)],M=Math.floor(Math.random()*800)+20;return{name:`产品 ${h.length+1}`,description:`这是一个${v}测试产品`,price:P,category:v,stock:k,images:["https://via.placeholder.com/200"],tags:[v,"测试"],rating:R,reviews:M}};return e.jsx("div",{className:"space-y-6",children:e.jsxs("div",{className:"bg-white p-6 rounded-lg shadow",children:[e.jsx("h3",{className:"text-lg font-semibold mb-4",children:"浅比较解决方案演示"}),e.jsxs("div",{className:"mb-4 p-4 bg-green-50 rounded-lg border border-green-200",children:[e.jsx("h4",{className:"font-medium text-green-800 mb-2",children:"✅ 浅比较解决方案"}),e.jsxs("ul",{className:"text-sm text-green-700 space-y-1",children:[e.jsx("li",{children:"• 使用精准选择器，只订阅需要的字段"}),e.jsx("li",{children:"• 避免返回新对象，保持引用稳定"}),e.jsx("li",{children:"• 只有相关字段变化时才重新渲染"}),e.jsx("li",{children:"• 显著提升应用性能"})]})]}),e.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-6 mb-6",children:[e.jsxs("div",{className:"border rounded-lg p-4 bg-green-50",children:[e.jsx("h4",{className:"font-medium text-green-800 mb-2",children:"解决方案组件"}),e.jsxs("div",{className:"text-sm space-y-1",children:[e.jsxs("p",{children:["用户: ",n||"未设置"]}),e.jsxs("p",{children:["邮箱: ",a||"未设置"]}),e.jsxs("p",{children:["角色: ",i||"未设置"]}),e.jsxs("p",{children:["购物车: ",d," 件"]}),e.jsxs("p",{children:["总价: ¥",c]}),e.jsxs("p",{children:["状态: ",m?"加载中":"空闲"]}),e.jsxs("p",{children:["侧边栏: ",r?"打开":"关闭"]}),e.jsxs("p",{className:"text-green-600 font-medium",children:["渲染次数: ",o]})]})]}),e.jsxs("div",{className:"border rounded-lg p-4 bg-blue-50",children:[e.jsx("h4",{className:"font-medium text-blue-800 mb-2",children:"解决方案代码"}),e.jsxs("div",{className:"text-xs font-mono bg-gray-100 p-2 rounded",children:[e.jsx("div",{children:"const userName = useShallowStore("}),e.jsx("div",{className:"ml-2",children:"(state) => state.user?.name"}),e.jsx("div",{children:");"}),e.jsx("div",{className:"mt-2",children:"const userEmail = useShallowStore("}),e.jsx("div",{className:"ml-2",children:"(state) => state.user?.email"}),e.jsx("div",{children:");"}),e.jsx("div",{className:"mt-2",children:"const userRole = useShallowStore("}),e.jsx("div",{className:"ml-2",children:"(state) => state.user?.role"}),e.jsx("div",{children:");"}),e.jsx("div",{className:"mt-2 text-green-600",children:"// ✅ 只订阅需要的字段"})]})]})]}),h.length>0&&e.jsxs("div",{className:"mb-6 p-4 bg-gray-50 rounded-lg",children:[e.jsxs("h4",{className:"font-medium text-gray-800 mb-3",children:["产品列表 (",h.length," 个)"]}),e.jsx("div",{className:"grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3",children:h.map(t=>e.jsxs("div",{className:"bg-white p-3 rounded border",children:[e.jsx("h5",{className:"font-medium text-sm",children:t.name}),e.jsxs("p",{className:"text-xs text-gray-600",children:["¥",t.price]}),e.jsxs("p",{className:"text-xs text-gray-500",children:["库存: ",t.stock]}),e.jsxs("p",{className:"text-xs text-gray-500",children:["分类: ",t.category]}),e.jsxs("p",{className:"text-xs text-gray-500",children:["评分: ",t.rating,"⭐ (",t.reviews,"评价)"]}),e.jsx("button",{onClick:()=>f(t.id,1),className:"mt-2 px-2 py-1 bg-blue-500 text-white text-xs rounded hover:bg-blue-600",children:"添加到购物车"})]},t.id))})]}),e.jsxs("div",{className:"space-y-4",children:[e.jsxs("div",{className:"flex flex-wrap gap-3",children:[e.jsx("button",{onClick:()=>u({id:"1",name:"李四",email:"lisi@example.com",avatar:"https://via.placeholder.com/40",role:"admin",preferences:{theme:"dark",language:"en-US",notifications:!1},createdAt:new Date,updatedAt:new Date}),className:"px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600",children:"设置用户"}),e.jsx("button",{onClick:()=>N(I()),className:"px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600",children:"添加随机产品"}),e.jsx("button",{onClick:()=>x&&f(x,2),disabled:!x,className:`px-4 py-2 text-white rounded ${x?"bg-purple-500 hover:bg-purple-600":"bg-gray-400 cursor-not-allowed"}`,children:x?"添加第一个产品到购物车":"请先添加产品"}),e.jsx("button",{onClick:()=>p(!0),className:"px-4 py-2 bg-yellow-500 text-white rounded hover:bg-yellow-600",children:"设置加载状态"}),e.jsx("button",{onClick:()=>p(!1),className:"px-4 py-2 bg-orange-500 text-white rounded hover:bg-orange-600",children:"关闭加载状态"}),e.jsx("button",{onClick:b,className:`px-4 py-2 text-white rounded ${r?"bg-green-500 hover:bg-green-600":"bg-gray-500 hover:bg-gray-600"}`,children:r?"关闭侧边栏":"打开侧边栏"}),e.jsx("button",{onClick:C,className:"px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600",children:"重置状态"})]}),e.jsxs("div",{className:"bg-blue-50 p-4 rounded-lg border border-blue-200",children:[e.jsx("h4",{className:"font-medium text-blue-800 mb-2",children:"⚠️ 观察要点"}),e.jsxs("ul",{className:"text-sm text-blue-700 space-y-1",children:[e.jsxs("li",{children:["• ",e.jsx("strong",{children:"设置用户"}),"：组件会重新渲染（用户信息变化）"]}),e.jsxs("li",{children:["• ",e.jsx("strong",{children:"添加产品"}),"：组件不会重新渲染（不影响订阅的字段）"]}),e.jsxs("li",{children:["• ",e.jsx("strong",{children:"添加到购物车"}),"：组件会重新渲染（购物车信息变化）"]}),e.jsxs("li",{children:["• ",e.jsx("strong",{children:"设置/关闭加载状态"}),"：组件会重新渲染（加载状态变化）"]}),e.jsxs("li",{children:["• ",e.jsx("strong",{children:"切换侧边栏"}),"：组件会重新渲染（侧边栏状态变化）"]})]}),e.jsx("p",{className:"mt-2 text-blue-600 font-medium",children:"✅ 精准选择器只订阅需要的字段，避免不必要的重新渲染！"})]})]})]})})},$=`import React, { useState, useRef, useEffect } from 'react';
import { useShallowStore } from '../stores/shallowStore';

const ShallowProblemDemo: React.FC = () => {
  const [renderCount, setRenderCount] = useState(0);
  const renderCountRef = useRef(0);

  const state = useShallowStore();
  
  const userInfo = {
    name: state.user?.name,
    email: state.user?.email,
    role: state.user?.role,
  };

  const cartInfo = {
    totalItems: state.cart.totalItems,
    totalPrice: state.cart.totalPrice,
  };

  const uiInfo = {
    loading: state.ui.loading,
    sidebarOpen: state.ui.sidebarOpen,
  };

  renderCountRef.current += 1;
  useEffect(() => {
    setRenderCount(renderCountRef.current);
  }, [state.user, state.cart, state.ui]);

  const { setUser, addProduct, addToCart, setLoading, toggleSidebar, resetState } = state;
  const products = state.products;

  const firstProductId = products.length > 0 ? products[0].id : null;

  const generateRandomProduct = () => {
    const prices = [29, 49, 79, 99, 129, 159, 199, 299, 399, 599];
    const stocks = [5, 8, 12, 15, 20, 25, 30, 35, 40, 50];
    const categories = ['电子产品', '服装', '家居', '运动', '美妆', '图书', '食品', '玩具'];
    const ratings = [3.5, 4.0, 4.2, 4.5, 4.7, 4.8, 4.9];
    
    const randomPrice = prices[Math.floor(Math.random() * prices.length)];
    const randomStock = stocks[Math.floor(Math.random() * stocks.length)];
    const randomCategory = categories[Math.floor(Math.random() * categories.length)];
    const randomRating = ratings[Math.floor(Math.random() * ratings.length)];
    const randomReviews = Math.floor(Math.random() * 500) + 10;
    
    return {
      name: \`产品 \${products.length + 1}\`,
      description: \`这是一个\${randomCategory}测试产品\`,
      price: randomPrice,
      category: randomCategory,
      stock: randomStock,
      images: ['https://via.placeholder.com/200'],
      tags: [randomCategory, '测试'],
      rating: randomRating,
      reviews: randomReviews,
    };
  };

  return (
    <div className="space-y-6">
      <div className="bg-white p-6 rounded-lg shadow">
        <h3 className="text-lg font-semibold mb-4">浅比较问题演示</h3>
        
        <div className="mb-4 p-4 bg-red-50 rounded-lg border border-red-200">
          <h4 className="font-medium text-red-800 mb-2">❌ 浅比较问题</h4>
          <ul className="text-sm text-red-700 space-y-1">
            <li>• 选择器返回新对象，每次调用都创建新的引用</li>
            <li>• 即使对象内容相同，浅比较也会认为发生了变化</li>
            <li>• 导致组件不必要的重新渲染</li>
            <li>• 影响应用性能，特别是在频繁更新的场景中</li>
          </ul>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
          <div className="border rounded-lg p-4 bg-red-50">
            <h4 className="font-medium text-red-800 mb-2">问题组件</h4>
            <div className="text-sm space-y-1">
              <p>用户: {userInfo.name || '未设置'}</p>
              <p>邮箱: {userInfo.email || '未设置'}</p>
              <p>角色: {userInfo.role || '未设置'}</p>
              <p>购物车: {cartInfo.totalItems} 件</p>
              <p>总价: ¥{cartInfo.totalPrice}</p>
              <p>状态: {uiInfo.loading ? '加载中' : '空闲'}</p>
              <p>侧边栏: {uiInfo.sidebarOpen ? '打开' : '关闭'}</p>
              <p className="text-red-600 font-medium">渲染次数: {renderCount}</p>
            </div>
          </div>

          <div className="border rounded-lg p-4 bg-orange-50">
            <h4 className="font-medium text-orange-800 mb-2">问题代码</h4>
            <div className="text-xs font-mono bg-gray-100 p-2 rounded">
              <div>const userInfo = useShallowStore(</div>
              <div className="ml-2">(state) =&gt; (&#123;</div>
              <div className="ml-4">name: state.user?.name,</div>
              <div className="ml-4">email: state.user?.email,</div>
              <div className="ml-4">role: state.user?.role,</div>
              <div className="ml-2">&#125;)</div>
              <div>);</div>
              <div className="mt-2 text-red-600">// ❌ 每次返回新对象</div>
              <div className="mt-2 text-yellow-600">// 注意：这里用订阅整个状态来模拟问题</div>
            </div>
          </div>
        </div>

        {products.length > 0 && (
          <div className="mb-6 p-4 bg-gray-50 rounded-lg">
            <h4 className="font-medium text-gray-800 mb-3">产品列表 ({products.length} 个)</h4>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
              {products.map((product) => (
                <div key={product.id} className="bg-white p-3 rounded border">
                  <h5 className="font-medium text-sm">{product.name}</h5>
                  <p className="text-xs text-gray-600">¥{product.price}</p>
                  <p className="text-xs text-gray-500">库存: {product.stock}</p>
                  <p className="text-xs text-gray-500">分类: {product.category}</p>
                  <p className="text-xs text-gray-500">评分: {product.rating}⭐ ({product.reviews}评价)</p>
                  <button
                    onClick={() => addToCart(product.id, 1)}
                    className="mt-2 px-2 py-1 bg-blue-500 text-white text-xs rounded hover:bg-blue-600"
                  >
                    添加到购物车
                  </button>
                </div>
              ))}
            </div>
          </div>
        )}

        <div className="space-y-4">
          <div className="flex flex-wrap gap-3">
            <button
              onClick={() => setUser({
                id: '1',
                name: '张三',
                email: 'zhangsan@example.com',
                avatar: 'https://via.placeholder.com/40',
                role: 'user',
                preferences: { theme: 'light', language: 'zh-CN', notifications: true },
                createdAt: new Date(),
                updatedAt: new Date(),
              })}
              className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
            >
              设置用户
            </button>
            
            <button
              onClick={() => addProduct(generateRandomProduct())}
              className="px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600"
            >
              添加随机产品
            </button>
            
            <button
              onClick={() => firstProductId && addToCart(firstProductId, 1)}
              disabled={!firstProductId}
              className={\`px-4 py-2 text-white rounded \${
                firstProductId 
                  ? 'bg-purple-500 hover:bg-purple-600' 
                  : 'bg-gray-400 cursor-not-allowed'
              }\`}
            >
              {firstProductId ? '添加第一个产品到购物车' : '请先添加产品'}
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
                uiInfo.sidebarOpen 
                  ? 'bg-green-500 hover:bg-green-600' 
                  : 'bg-gray-500 hover:bg-gray-600'
              }\`}
            >
              {uiInfo.sidebarOpen ? '关闭侧边栏' : '打开侧边栏'}
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
              <li>• <strong>设置用户</strong>：组件重新渲染（用户信息变化）</li>
              <li>• <strong>添加产品</strong>：组件重新渲染（产品列表变化）</li>
              <li>• <strong>添加到购物车</strong>：组件重新渲染（购物车信息变化）</li>
              <li>• <strong>设置/关闭加载状态</strong>：组件重新渲染（UI信息变化）</li>
              <li>• <strong>切换侧边栏</strong>：组件重新渲染（UI信息变化）</li>
            </ul>
            <p className="mt-2 text-yellow-600 font-medium">
              ⚠️ 注意：这里通过订阅整个状态来模拟选择器返回新对象的问题！
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ShallowProblemDemo;
`,D=`import React, { useEffect, useRef, useState } from "react";

import { useShallowStore } from "../stores/shallowStore";

const ShallowSolutionDemo: React.FC = () => {
  const [renderCount, setRenderCount] = useState(0);
  const renderCountRef = useRef(0);

  const userName = useShallowStore((state) => state.user?.name);
  const userEmail = useShallowStore((state) => state.user?.email);
  const userRole = useShallowStore((state) => state.user?.role);
  const cartTotalItems = useShallowStore((state) => state.cart.totalItems);
  const cartTotalPrice = useShallowStore((state) => state.cart.totalPrice);
  const isLoading = useShallowStore((state) => state.ui.loading);
  const sidebarOpen = useShallowStore((state) => state.ui.sidebarOpen);

  renderCountRef.current += 1;
  useEffect(() => {
    setRenderCount(renderCountRef.current);
  }, [
    userName,
    userEmail,
    userRole,
    cartTotalItems,
    cartTotalPrice,
    isLoading,
    sidebarOpen,
  ]);

  const {
    setUser,
    addProduct,
    addToCart,
    setLoading,
    toggleSidebar,
    resetState,
  } = useShallowStore();
  const products = useShallowStore((state) => state.products);

  const firstProductId = products.length > 0 ? products[0].id : null;

  const generateRandomProduct = () => {
    const prices = [39, 59, 89, 119, 149, 179, 219, 319, 419, 699];
    const stocks = [3, 6, 9, 12, 18, 24, 28, 32, 38, 45];
    const categories = [
      "数码产品",
      "时尚",
      "家具",
      "健身",
      "护肤",
      "教育",
      "零食",
      "游戏",
    ];
    const ratings = [3.2, 3.8, 4.1, 4.3, 4.6, 4.7, 4.9];

    const randomPrice = prices[Math.floor(Math.random() * prices.length)];
    const randomStock = stocks[Math.floor(Math.random() * stocks.length)];
    const randomCategory =
      categories[Math.floor(Math.random() * categories.length)];
    const randomRating = ratings[Math.floor(Math.random() * ratings.length)];
    const randomReviews = Math.floor(Math.random() * 800) + 20;

    return {
      name: \`产品 \${products.length + 1}\`,
      description: \`这是一个\${randomCategory}测试产品\`,
      price: randomPrice,
      category: randomCategory,
      stock: randomStock,
      images: ["https://via.placeholder.com/200"],
      tags: [randomCategory, "测试"],
      rating: randomRating,
      reviews: randomReviews,
    };
  };

  return (
    <div className="space-y-6">
      <div className="bg-white p-6 rounded-lg shadow">
        <h3 className="text-lg font-semibold mb-4">浅比较解决方案演示</h3>

        <div className="mb-4 p-4 bg-green-50 rounded-lg border border-green-200">
          <h4 className="font-medium text-green-800 mb-2">✅ 浅比较解决方案</h4>
          <ul className="text-sm text-green-700 space-y-1">
            <li>• 使用精准选择器，只订阅需要的字段</li>
            <li>• 避免返回新对象，保持引用稳定</li>
            <li>• 只有相关字段变化时才重新渲染</li>
            <li>• 显著提升应用性能</li>
          </ul>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
          <div className="border rounded-lg p-4 bg-green-50">
            <h4 className="font-medium text-green-800 mb-2">解决方案组件</h4>
            <div className="text-sm space-y-1">
              <p>用户: {userName || "未设置"}</p>
              <p>邮箱: {userEmail || "未设置"}</p>
              <p>角色: {userRole || "未设置"}</p>
              <p>购物车: {cartTotalItems} 件</p>
              <p>总价: ¥{cartTotalPrice}</p>
              <p>状态: {isLoading ? "加载中" : "空闲"}</p>
              <p>侧边栏: {sidebarOpen ? "打开" : "关闭"}</p>
              <p className="text-green-600 font-medium">
                渲染次数: {renderCount}
              </p>
            </div>
          </div>

          <div className="border rounded-lg p-4 bg-blue-50">
            <h4 className="font-medium text-blue-800 mb-2">解决方案代码</h4>
            <div className="text-xs font-mono bg-gray-100 p-2 rounded">
              <div>const userName = useShallowStore(</div>
              <div className="ml-2">(state) =&gt; state.user?.name</div>
              <div>);</div>
              <div className="mt-2">const userEmail = useShallowStore(</div>
              <div className="ml-2">(state) =&gt; state.user?.email</div>
              <div>);</div>
              <div className="mt-2">const userRole = useShallowStore(</div>
              <div className="ml-2">(state) =&gt; state.user?.role</div>
              <div>);</div>
              <div className="mt-2 text-green-600">// ✅ 只订阅需要的字段</div>
            </div>
          </div>
        </div>

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
                  <p className="text-xs text-gray-500">
                    分类: {product.category}
                  </p>
                  <p className="text-xs text-gray-500">
                    评分: {product.rating}⭐ ({product.reviews}评价)
                  </p>
                  <button
                    onClick={() => addToCart(product.id, 1)}
                    className="mt-2 px-2 py-1 bg-blue-500 text-white text-xs rounded hover:bg-blue-600"
                  >
                    添加到购物车
                  </button>
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
                  name: "李四",
                  email: "lisi@example.com",
                  avatar: "https://via.placeholder.com/40",
                  role: "admin",
                  preferences: {
                    theme: "dark",
                    language: "en-US",
                    notifications: false,
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
              onClick={() => addProduct(generateRandomProduct())}
              className="px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600"
            >
              添加随机产品
            </button>

            <button
              onClick={() => firstProductId && addToCart(firstProductId, 2)}
              disabled={!firstProductId}
              className={\`px-4 py-2 text-white rounded \${
                firstProductId
                  ? "bg-purple-500 hover:bg-purple-600"
                  : "bg-gray-400 cursor-not-allowed"
              }\`}
            >
              {firstProductId ? "添加第一个产品到购物车" : "请先添加产品"}
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
                • <strong>设置用户</strong>：组件会重新渲染（用户信息变化）
              </li>
              <li>
                • <strong>添加产品</strong>
                ：组件不会重新渲染（不影响订阅的字段）
              </li>
              <li>
                • <strong>添加到购物车</strong>
                ：组件会重新渲染（购物车信息变化）
              </li>
              <li>
                • <strong>设置/关闭加载状态</strong>
                ：组件会重新渲染（加载状态变化）
              </li>
              <li>
                • <strong>切换侧边栏</strong>：组件会重新渲染（侧边栏状态变化）
              </li>
            </ul>
            <p className="mt-2 text-blue-600 font-medium">
              ✅ 精准选择器只订阅需要的字段，避免不必要的重新渲染！
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ShallowSolutionDemo;
`,L=`import { create } from 'zustand';
import { ShallowCompareState, User, Product, CartItem } from '../types';

const generateUniqueId = (): string => {
  return Math.random().toString(36).substr(2, 9);
};

const useShallowStore = create<ShallowCompareState>((set, get) => ({
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

  setUser: (user: User) => {
    set({ user });
  },

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

export { useShallowStore };
`,z=()=>e.jsx(T,{title:"浅比较（Shallow Compare）",description:"学习如何通过浅比较优化 Zustand 性能。掌握精准选择器、避免对象引用问题和性能最佳实践。",overview:[{title:"核心概念",items:["浅比较是 Zustand 判断状态变化的核心机制，通过比较引用而非内容。","选择器返回新对象会导致不必要的重新渲染，即使内容相同。","精准选择器只订阅需要的字段，避免返回复杂对象。","合理使用选择器可以显著减少组件的重新渲染次数。","通过渲染监控可以直观地看到浅比较的性能影响。"]},{title:"主要优势",items:["减少不必要的重新渲染，提升应用性能。","降低组件复杂度，提高代码可维护性。","更好的用户体验，避免界面卡顿。","减少内存占用，优化资源使用。","便于调试和性能分析。"]},{title:"适用场景",items:["大型应用中的状态管理优化。","频繁更新的状态字段。","复杂组件树的性能优化。","需要精确控制渲染时机的场景。","对性能要求较高的应用。"]},{title:"注意事项",items:["避免选择器返回新对象，优先使用精准选择器。","选择器应定义在组件外部，保持引用稳定。","不要在选择器中做副作用或复杂计算。","选择器返回对象时需配合 shallow 比较。","监控组件渲染次数，及时优化性能瓶颈。"]}],examples:[{title:"浅比较问题演示",component:e.jsx(E,{}),description:"演示选择器返回新对象导致的性能问题",observationPoints:["观察选择器返回新对象的问题","注意任何状态变化都会触发重新渲染","体验浅比较问题的性能影响","理解选择器引用稳定的重要性"],keyPoints:["选择器返回新对象导致不必要的重新渲染","即使内容相同，引用不同也会触发渲染","在复杂应用中可能造成性能问题","影响用户体验，造成界面卡顿"],commonTraps:["选择器返回复杂对象","忽视选择器的引用稳定性","不理解浅比较的工作原理","在大型应用中造成性能瓶颈"],solutions:["使用精准选择器只订阅需要的字段","避免选择器返回新对象","监控组件渲染次数","理解 Zustand 的浅比较机制"],codeExample:{code:$,title:"浅比较问题演示组件"}},{title:"浅比较解决方案演示",component:e.jsx(U,{}),description:"演示使用精准选择器解决浅比较问题",observationPoints:["观察精准选择器的性能优势","注意只有相关字段变化时才会重新渲染","对比问题演示和解决方案的差异","理解精准选择器的工作原理"],keyPoints:["精准选择器只订阅需要的状态字段","只有相关字段变化时才会重新渲染","可以显著减少不必要的渲染","提升应用整体性能"],commonTraps:["使用选择器返回复杂对象","忽视组件的渲染优化","不理解精准选择器的优势","在性能敏感场景中使用不当"],solutions:["使用精准选择器只订阅需要的状态","合理拆分组件和状态","监控组件渲染次数","理解 Zustand 的浅比较机制"],codeExample:{code:D,title:"浅比较解决方案演示组件"}}],tutorial:{concepts:["浅比较是 Zustand 性能优化的核心机制","选择器函数用于选择 store 中的特定状态片段","Zustand 使用浅比较来决定是否触发组件重新渲染","合理使用选择器可以显著提升应用性能","状态订阅是自动的，组件卸载时会自动取消订阅"],steps:["理解浅比较概念和选择器的重要性","避免选择器返回新对象，使用精准选择器","保持选择器简单和稳定","组合多个选择器处理复杂状态","监控组件渲染性能","根据需要优化选择器策略"],tips:["优先使用精准选择器而不是返回复杂对象","将选择器函数定义在组件外部保持引用稳定","使用 TypeScript 为选择器提供类型安全","监控组件渲染次数来评估性能","合理拆分组件以最大化选择器的效果"]},interview:{questions:[{question:"什么是浅比较？它有什么作用？",answer:"浅比较是 Zustand 判断状态变化的机制，通过比较引用而非内容。它的作用是决定是否触发组件重新渲染，避免不必要的渲染提升性能。"},{question:"选择器返回新对象会导致什么问题？",answer:"选择器返回新对象会导致不必要的重新渲染，即使对象内容相同，因为引用不同，浅比较会认为状态发生了变化。"},{question:"如何避免选择器导致的性能问题？",answer:"使用精准选择器只订阅需要的字段、避免返回复杂对象、合理拆分组件、使用 useMemo 组合选择器、监控渲染次数等。"},{question:"什么时候应该使用精准选择器？",answer:"在大型应用中、频繁更新的状态字段、复杂组件树、需要精确控制渲染时机的场景中，都应该使用精准选择器。"},{question:"如何调试选择器的性能问题？",answer:"使用 React DevTools 的 Profiler、自定义渲染监控 hook、控制台日志、性能分析工具等来调试选择器的性能问题。"}],keyPoints:["浅比较是 Zustand 性能优化的关键","选择器应该保持简单和纯净","精准选择器可以最大化性能效果","合理的组件拆分可以优化订阅","状态订阅是自动管理的"]},bestPractices:{dos:["优先使用精准选择器而不是返回复杂对象","将选择器函数定义在组件外部","保持选择器简单和纯净","监控组件渲染性能","合理拆分组件以优化订阅","使用 TypeScript 提供类型安全"],donts:["不要在选择器中返回新对象","不要在组件内部定义选择器函数","不要忽视组件渲染性能","不要过度拆分选择器","不要在选择器中包含副作用"],patterns:["精准选择器模式：为常用状态片段定义专用选择器","组件拆分：将大组件拆分为专注的小组件","性能监控：使用渲染计数器监控性能","类型安全：使用 TypeScript 定义选择器类型"]},codeExamples:[{title:"Store 定义",code:L,language:"typescript"}]});export{z as default};
