import{r as S,j as e}from"./index-BWM6UHr8.js";import{c as k,C as L}from"./ComponentTemplate-ClBHhBQ8.js";const N=k(a=>({user:null,setUser:n=>{a({user:n})},updateUser:n=>{a(t=>({user:t.user?{...t.user,...n}:null}))},clearUser:()=>{a({user:null})}})),$=()=>Math.random().toString(36).substr(2,9),b=k((a,n)=>({products:[],addProduct:t=>{a(i=>({products:[...i.products,{...t,id:$()}]}))},updateProduct:(t,i)=>{a(s=>({products:s.products.map(o=>o.id===t?{...o,...i}:o)}))},removeProduct:t=>{a(i=>({products:i.products.filter(s=>s.id!==t)}))},getProductById:t=>n().products.find(i=>i.id===t)})),j=k((a,n)=>({cart:{items:[],totalPrice:0,totalItems:0},addToCart:(t,i)=>{a(s=>{const o=s.cart.items.find(d=>d.productId===t);let u;o?u=s.cart.items.map(d=>d.productId===t?{...d,quantity:d.quantity+i}:d):u=[...s.cart.items,{productId:t,quantity:i}];const m=u.reduce((d,p)=>d+p.quantity,0),c=u.reduce((d,p)=>{const v=b.getState().getProductById(p.productId);return d+(v?v.price*p.quantity:0)},0);return{cart:{items:u,totalPrice:c,totalItems:m}}})},removeFromCart:t=>{a(i=>{const s=i.cart.items.filter(m=>m.productId!==t),o=s.reduce((m,c)=>m+c.quantity,0),u=s.reduce((m,c)=>{const d=b.getState().getProductById(c.productId);return m+(d?d.price*c.quantity:0)},0);return{cart:{items:s,totalPrice:u,totalItems:o}}})},updateCartItemQuantity:(t,i)=>{a(s=>{const o=s.cart.items.map(c=>c.productId===t?{...c,quantity:i}:c).filter(c=>c.quantity>0),u=o.reduce((c,d)=>c+d.quantity,0),m=o.reduce((c,d)=>{const p=b.getState().getProductById(d.productId);return c+(p?p.price*d.quantity:0)},0);return{cart:{items:o,totalPrice:m,totalItems:u}}})},clearCart:()=>{a({cart:{items:[],totalPrice:0,totalItems:0}})}})),y=k(a=>({ui:{loading:!1,error:null,sidebarOpen:!1,currentPage:"home",modalOpen:!1,theme:"light"},setLoading:n=>{a(t=>({ui:{...t.ui,loading:n}}))},setError:n=>{a(t=>({ui:{...t.ui,error:n}}))},toggleSidebar:()=>{a(n=>({ui:{...n.ui,sidebarOpen:!n.ui.sidebarOpen}}))},setCurrentPage:n=>{a(t=>({ui:{...t.ui,currentPage:n}}))},toggleModal:()=>{a(n=>({ui:{...n.ui,modalOpen:!n.ui.modalOpen}}))},setTheme:n=>{a(t=>({ui:{...t.ui,theme:n}}))}})),z=()=>{const[a,n]=S.useState(0),t=S.useRef(0),i=N(l=>l.user),s=b(l=>l.products),o=j(l=>l.cart),u=y(l=>l.ui);t.current+=1,S.useEffect(()=>{n(t.current)},[i,s,o,u]);const{setUser:m,clearUser:c}=N(),{addProduct:d}=b(),{addToCart:p,clearCart:v}=j(),{setLoading:I,toggleSidebar:M,setTheme:C}=y(),R=()=>{const l=[29,49,79,99,129,159,199,299,399,599],w=[5,8,12,15,20,25,30,35,40,50],P=["电子产品","服装","家居","运动","美妆","图书","食品","玩具"],x=[3.5,4,4.2,4.5,4.7,4.8,4.9],r=l[Math.floor(Math.random()*l.length)],g=w[Math.floor(Math.random()*w.length)],f=P[Math.floor(Math.random()*P.length)],U=x[Math.floor(Math.random()*x.length)],T=Math.floor(Math.random()*500)+10;return{name:`产品 ${s.length+1}`,description:`这是一个${f}测试产品`,price:r,category:f,stock:g,images:["https://via.placeholder.com/200"],tags:[f,"测试"],rating:U,reviews:T}},h=s.length>0?s[0].id:null;return e.jsx("div",{className:"space-y-6",children:e.jsxs("div",{className:"bg-white p-6 rounded-lg shadow",children:[e.jsx("h3",{className:"text-lg font-semibold mb-4",children:"单一大 Store 问题演示"}),e.jsxs("div",{className:"mb-4 p-4 bg-red-50 rounded-lg border border-red-200",children:[e.jsx("h4",{className:"font-medium text-red-800 mb-2",children:"❌ 单一大 Store 问题"}),e.jsxs("ul",{className:"text-sm text-red-700 space-y-1",children:[e.jsx("li",{children:"• 所有状态集中在一个 store 中，难以维护"}),e.jsx("li",{children:"• 任何状态变化都会影响整个应用"}),e.jsx("li",{children:"• 组件需要订阅整个 store，导致不必要的重新渲染"}),e.jsx("li",{children:"• 代码耦合度高，难以测试和调试"}),e.jsx("li",{children:"• 团队协作困难，容易产生冲突"})]})]}),e.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-6 mb-6",children:[e.jsxs("div",{className:"border rounded-lg p-4 bg-red-50",children:[e.jsx("h4",{className:"font-medium text-red-800 mb-2",children:"单一大 Store 组件"}),e.jsxs("div",{className:"text-sm space-y-1",children:[e.jsxs("p",{children:["用户: ",(i==null?void 0:i.name)||"未设置"]}),e.jsxs("p",{children:["产品数量: ",s.length," 个"]}),e.jsxs("p",{children:["购物车: ",o.totalItems," 件 (¥",o.totalPrice,")"]}),e.jsxs("p",{children:["状态: ",u.loading?"加载中":"空闲"]}),e.jsxs("p",{children:["侧边栏: ",u.sidebarOpen?"打开":"关闭"]}),e.jsxs("p",{children:["主题: ",u.theme]}),e.jsxs("p",{className:"text-red-600 font-medium",children:["渲染次数: ",a]})]})]}),e.jsxs("div",{className:"border rounded-lg p-4 bg-orange-50",children:[e.jsx("h4",{className:"font-medium text-orange-800 mb-2",children:"问题代码"}),e.jsxs("div",{className:"text-xs font-mono bg-gray-100 p-2 rounded",children:[e.jsx("div",{children:"// 需要导入所有 store"}),e.jsx("div",{children:"import { useUserStore } from './userStore';"}),e.jsx("div",{children:"import { useProductStore } from './productStore';"}),e.jsx("div",{children:"import { useCartStore } from './cartStore';"}),e.jsx("div",{children:"import { useUIStore } from './uiStore';"}),e.jsx("div",{className:"mt-2",children:"// 订阅所有状态"}),e.jsx("div",{children:"const user = useUserStore(...);"}),e.jsx("div",{children:"const products = useProductStore(...);"}),e.jsx("div",{children:"const cart = useCartStore(...);"}),e.jsx("div",{children:"const ui = useUIStore(...);"}),e.jsx("div",{className:"mt-2 text-red-600",children:"// ❌ 组件耦合度高"})]})]})]}),s.length>0&&e.jsxs("div",{className:"mb-6 p-4 bg-gray-50 rounded-lg",children:[e.jsxs("h4",{className:"font-medium text-gray-800 mb-3",children:["产品列表 (",s.length," 个)"]}),e.jsx("div",{className:"grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3",children:s.map(l=>e.jsxs("div",{className:"bg-white p-3 rounded border",children:[e.jsx("h5",{className:"font-medium text-sm",children:l.name}),e.jsxs("p",{className:"text-xs text-gray-600",children:["¥",l.price]}),e.jsxs("p",{className:"text-xs text-gray-500",children:["库存: ",l.stock]}),e.jsxs("p",{className:"text-xs text-gray-500",children:["分类: ",l.category]}),e.jsxs("p",{className:"text-xs text-gray-500",children:["评分: ",l.rating,"⭐ (",l.reviews,"评价)"]}),e.jsx("button",{onClick:()=>p(l.id,1),className:"mt-2 px-2 py-1 bg-blue-500 text-white text-xs rounded hover:bg-blue-600",children:"添加到购物车"})]},l.id))})]}),e.jsxs("div",{className:"space-y-4",children:[e.jsxs("div",{className:"flex flex-wrap gap-3",children:[e.jsx("button",{onClick:()=>m({id:"1",name:"张三",email:"zhangsan@example.com",avatar:"https://via.placeholder.com/40",role:"user",preferences:{theme:"light",language:"zh-CN",notifications:!0},createdAt:new Date,updatedAt:new Date}),className:"px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600",children:"设置用户"}),e.jsx("button",{onClick:()=>d(R()),className:"px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600",children:"添加产品"}),e.jsx("button",{onClick:()=>h&&p(h,1),disabled:!h,className:`px-4 py-2 text-white rounded ${h?"bg-purple-500 hover:bg-purple-600":"bg-gray-400 cursor-not-allowed"}`,children:h?"添加到购物车":"请先添加产品"}),e.jsx("button",{onClick:()=>I(!0),className:"px-4 py-2 bg-yellow-500 text-white rounded hover:bg-yellow-600",children:"设置加载状态"}),e.jsx("button",{onClick:()=>I(!1),className:"px-4 py-2 bg-orange-500 text-white rounded hover:bg-orange-600",children:"取消加载状态"}),e.jsx("button",{onClick:()=>M(),className:"px-4 py-2 bg-indigo-500 text-white rounded hover:bg-indigo-600",children:"切换侧边栏"}),e.jsx("button",{onClick:()=>C(u.theme==="light"?"dark":"light"),className:"px-4 py-2 bg-gray-500 text-white rounded hover:bg-gray-600",children:"切换主题"}),e.jsx("button",{onClick:()=>{c(),v()},className:"px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600",children:"重置状态"})]}),e.jsxs("div",{className:"bg-yellow-50 p-4 rounded-lg border border-yellow-200",children:[e.jsx("h4",{className:"font-medium text-yellow-800 mb-2",children:"⚠️ 观察要点"}),e.jsxs("ul",{className:"text-sm text-yellow-700 space-y-1",children:[e.jsxs("li",{children:["• ",e.jsx("strong",{children:"任何操作"}),"：组件都会重新渲染"]}),e.jsxs("li",{children:["• ",e.jsx("strong",{children:"设置用户"}),"：组件重新渲染（用户状态变化）"]}),e.jsxs("li",{children:["• ",e.jsx("strong",{children:"添加产品"}),"：组件重新渲染（产品状态变化）"]}),e.jsxs("li",{children:["• ",e.jsx("strong",{children:"购物车操作"}),"：组件重新渲染（购物车状态变化）"]}),e.jsxs("li",{children:["• ",e.jsx("strong",{children:"UI 操作"}),"：组件重新渲染（UI状态变化）"]})]}),e.jsx("p",{className:"mt-2 text-yellow-600 font-medium",children:"⚠️ 注意：单一大 store 导致组件耦合度高，任何状态变化都会触发重新渲染！"})]})]})]})})},A=()=>{const[a,n]=S.useState(0),t=S.useRef(0),i=N(r=>{var g;return(g=r.user)==null?void 0:g.name}),s=N(r=>{var g;return(g=r.user)==null?void 0:g.email}),o=b(r=>r.products),u=j(r=>r.cart.totalItems),m=j(r=>r.cart.totalPrice),c=y(r=>r.ui.loading),d=y(r=>r.ui.sidebarOpen),p=y(r=>r.ui.theme);t.current+=1,S.useEffect(()=>{n(t.current)},[i,s,o,u,m,c,d,p]);const{setUser:v,clearUser:I}=N(),{addProduct:M}=b(),{addToCart:C,clearCart:R}=j(),{setLoading:h,toggleSidebar:l,setTheme:w}=y(),P=()=>{const r=[39,59,89,119,149,179,219,319,419,699],g=[3,6,9,12,18,24,28,32,38,45],f=["数码产品","时尚","家具","健身","护肤","教育","零食","游戏"],U=[3.2,3.8,4.1,4.3,4.6,4.7,4.9],T=r[Math.floor(Math.random()*r.length)],O=g[Math.floor(Math.random()*g.length)],q=f[Math.floor(Math.random()*f.length)],E=U[Math.floor(Math.random()*U.length)],D=Math.floor(Math.random()*800)+20;return{name:`产品 ${o.length+1}`,description:`这是一个${q}测试产品`,price:T,category:q,stock:O,images:["https://via.placeholder.com/200"],tags:[q,"测试"],rating:E,reviews:D}},x=o.length>0?o[0].id:null;return e.jsx("div",{className:"space-y-6",children:e.jsxs("div",{className:"bg-white p-6 rounded-lg shadow",children:[e.jsx("h3",{className:"text-lg font-semibold mb-4",children:"拆分 Store 解决方案演示"}),e.jsxs("div",{className:"mb-4 p-4 bg-green-50 rounded-lg border border-green-200",children:[e.jsx("h4",{className:"font-medium text-green-800 mb-2",children:"✅ 拆分 Store 优势"}),e.jsxs("ul",{className:"text-sm text-green-700 space-y-1",children:[e.jsx("li",{children:"• 按业务领域拆分 store，职责清晰"}),e.jsx("li",{children:"• 组件只订阅需要的状态，减少重新渲染"}),e.jsx("li",{children:"• 代码模块化，易于维护和测试"}),e.jsx("li",{children:"• 团队协作友好，减少冲突"}),e.jsx("li",{children:"• 支持按需加载，提升性能"})]})]}),e.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-6 mb-6",children:[e.jsxs("div",{className:"border rounded-lg p-4 bg-green-50",children:[e.jsx("h4",{className:"font-medium text-green-800 mb-2",children:"拆分 Store 组件"}),e.jsxs("div",{className:"text-sm space-y-1",children:[e.jsxs("p",{children:["用户: ",i||"未设置"]}),e.jsxs("p",{children:["邮箱: ",s||"未设置"]}),e.jsxs("p",{children:["产品数量: ",o.length," 个"]}),e.jsxs("p",{children:["购物车: ",u," 件 (¥",m,")"]}),e.jsxs("p",{children:["状态: ",c?"加载中":"空闲"]}),e.jsxs("p",{children:["侧边栏: ",d?"打开":"关闭"]}),e.jsxs("p",{children:["主题: ",p]}),e.jsxs("p",{className:"text-green-600 font-medium",children:["渲染次数: ",a]})]})]}),e.jsxs("div",{className:"border rounded-lg p-4 bg-blue-50",children:[e.jsx("h4",{className:"font-medium text-blue-800 mb-2",children:"解决方案代码"}),e.jsxs("div",{className:"text-xs font-mono bg-gray-100 p-2 rounded",children:[e.jsx("div",{children:"// 按需导入 store"}),e.jsx("div",{children:"import { useUserStore } from './userStore';"}),e.jsx("div",{children:"import { useProductStore } from './productStore';"}),e.jsx("div",{children:"import { useCartStore } from './cartStore';"}),e.jsx("div",{children:"import { useUIStore } from './uiStore';"}),e.jsx("div",{className:"mt-2",children:"// 精准订阅需要的状态"}),e.jsx("div",{children:"const userName = useUserStore(s => s.user?.name);"}),e.jsx("div",{children:"const products = useProductStore(s => s.products);"}),e.jsx("div",{children:"const cartTotal = useCartStore(s => s.cart.totalItems);"}),e.jsx("div",{className:"mt-2 text-green-600",children:"// ✅ 组件解耦，性能优化"})]})]})]}),o.length>0&&e.jsxs("div",{className:"mb-6 p-4 bg-gray-50 rounded-lg",children:[e.jsxs("h4",{className:"font-medium text-gray-800 mb-3",children:["产品列表 (",o.length," 个)"]}),e.jsx("div",{className:"grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3",children:o.map(r=>e.jsxs("div",{className:"bg-white p-3 rounded border",children:[e.jsx("h5",{className:"font-medium text-sm",children:r.name}),e.jsxs("p",{className:"text-xs text-gray-600",children:["¥",r.price]}),e.jsxs("p",{className:"text-xs text-gray-500",children:["库存: ",r.stock]}),e.jsxs("p",{className:"text-xs text-gray-500",children:["分类: ",r.category]}),e.jsxs("p",{className:"text-xs text-gray-500",children:["评分: ",r.rating,"⭐ (",r.reviews,"评价)"]}),e.jsx("button",{onClick:()=>C(r.id,1),className:"mt-2 px-2 py-1 bg-blue-500 text-white text-xs rounded hover:bg-blue-600",children:"添加到购物车"})]},r.id))})]}),e.jsxs("div",{className:"space-y-4",children:[e.jsxs("div",{className:"flex flex-wrap gap-3",children:[e.jsx("button",{onClick:()=>v({id:"1",name:"李四",email:"lisi@example.com",avatar:"https://via.placeholder.com/40",role:"admin",preferences:{theme:"dark",language:"en-US",notifications:!1},createdAt:new Date,updatedAt:new Date}),className:"px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600",children:"设置用户"}),e.jsx("button",{onClick:()=>M(P()),className:"px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600",children:"添加产品"}),e.jsx("button",{onClick:()=>x&&C(x,2),disabled:!x,className:`px-4 py-2 text-white rounded ${x?"bg-purple-500 hover:bg-purple-600":"bg-gray-400 cursor-not-allowed"}`,children:x?"添加到购物车":"请先添加产品"}),e.jsx("button",{onClick:()=>h(!0),className:"px-4 py-2 bg-yellow-500 text-white rounded hover:bg-yellow-600",children:"设置加载状态"}),e.jsx("button",{onClick:()=>h(!1),className:"px-4 py-2 bg-orange-500 text-white rounded hover:bg-orange-600",children:"取消加载状态"}),e.jsx("button",{onClick:()=>l(),className:"px-4 py-2 bg-indigo-500 text-white rounded hover:bg-indigo-600",children:"切换侧边栏"}),e.jsx("button",{onClick:()=>w(p==="light"?"dark":"light"),className:"px-4 py-2 bg-gray-500 text-white rounded hover:bg-gray-600",children:"切换主题"}),e.jsx("button",{onClick:()=>{I(),R()},className:"px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600",children:"重置状态"})]}),e.jsxs("div",{className:"bg-blue-50 p-4 rounded-lg border border-blue-200",children:[e.jsx("h4",{className:"font-medium text-blue-800 mb-2",children:"⚠️观察要点"}),e.jsxs("ul",{className:"text-sm text-blue-700 space-y-1",children:[e.jsxs("li",{children:["• ",e.jsx("strong",{children:"设置用户"}),"：组件会重新渲染（用户信息变化）"]}),e.jsxs("li",{children:["• ",e.jsx("strong",{children:"添加产品"}),"：组件会重新渲染（产品列表变化）"]}),e.jsxs("li",{children:["• ",e.jsx("strong",{children:"购物车操作"}),"：组件会重新渲染（购物车信息变化）"]}),e.jsxs("li",{children:["• ",e.jsx("strong",{children:"UI 操作"}),"：组件会重新渲染（相关UI状态变化）"]}),e.jsxs("li",{children:["• ",e.jsx("strong",{children:"精准订阅"}),"：只订阅需要的字段，减少不必要的渲染"]})]}),e.jsx("p",{className:"mt-2 text-blue-600 font-medium",children:"✅ 拆分 store 使组件更加独立，性能更好，维护更容易！"})]})]})]})})},B=`import React, { useState, useRef, useEffect } from 'react';
import { useUserStore } from '../stores/userStore';
import { useProductStore } from '../stores/productStore';
import { useCartStore } from '../stores/cartStore';
import { useUIStore } from '../stores/uiStore';

const MonolithicStoreDemo: React.FC = () => {
  const [renderCount, setRenderCount] = useState(0);
  const renderCountRef = useRef(0);

  // 模拟单一大 store - 订阅所有状态
  const user = useUserStore((state) => state.user);
  const products = useProductStore((state) => state.products);
  const cart = useCartStore((state) => state.cart);
  const ui = useUIStore((state) => state.ui);

  // 渲染计数
  renderCountRef.current += 1;
  useEffect(() => {
    setRenderCount(renderCountRef.current);
  }, [user, products, cart, ui]);

  const { setUser, clearUser } = useUserStore();
  const { addProduct } = useProductStore();
  const { addToCart, clearCart } = useCartStore();
  const { setLoading, toggleSidebar, setTheme } = useUIStore();

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

  const firstProductId = products.length > 0 ? products[0].id : null;

  return (
    <div className="space-y-6">
      <div className="bg-white p-6 rounded-lg shadow">
        <h3 className="text-lg font-semibold mb-4">单一大 Store 问题演示</h3>
        
        <div className="mb-4 p-4 bg-red-50 rounded-lg border border-red-200">
          <h4 className="font-medium text-red-800 mb-2">❌ 单一大 Store 问题</h4>
          <ul className="text-sm text-red-700 space-y-1">
            <li>• 所有状态集中在一个 store 中，难以维护</li>
            <li>• 任何状态变化都会影响整个应用</li>
            <li>• 组件需要订阅整个 store，导致不必要的重新渲染</li>
            <li>• 代码耦合度高，难以测试和调试</li>
            <li>• 团队协作困难，容易产生冲突</li>
          </ul>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
          <div className="border rounded-lg p-4 bg-red-50">
            <h4 className="font-medium text-red-800 mb-2">单一大 Store 组件</h4>
            <div className="text-sm space-y-1">
              <p>用户: {user?.name || '未设置'}</p>
              <p>产品数量: {products.length} 个</p>
              <p>购物车: {cart.totalItems} 件 (¥{cart.totalPrice})</p>
              <p>状态: {ui.loading ? '加载中' : '空闲'}</p>
              <p>侧边栏: {ui.sidebarOpen ? '打开' : '关闭'}</p>
              <p>主题: {ui.theme}</p>
              <p className="text-red-600 font-medium">渲染次数: {renderCount}</p>
            </div>
          </div>

          <div className="border rounded-lg p-4 bg-orange-50">
            <h4 className="font-medium text-orange-800 mb-2">问题代码</h4>
            <div className="text-xs font-mono bg-gray-100 p-2 rounded">
              <div>// 需要导入所有 store</div>
              <div>import &#123; useUserStore &#125; from './userStore';</div>
              <div>import &#123; useProductStore &#125; from './productStore';</div>
              <div>import &#123; useCartStore &#125; from './cartStore';</div>
              <div>import &#123; useUIStore &#125; from './uiStore';</div>
              <div className="mt-2">// 订阅所有状态</div>
              <div>const user = useUserStore(...);</div>
              <div>const products = useProductStore(...);</div>
              <div>const cart = useCartStore(...);</div>
              <div>const ui = useUIStore(...);</div>
              <div className="mt-2 text-red-600">// ❌ 组件耦合度高</div>
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
              添加产品
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
              {firstProductId ? '添加到购物车' : '请先添加产品'}
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
              取消加载状态
            </button>
            
            <button
              onClick={() => toggleSidebar()}
              className="px-4 py-2 bg-indigo-500 text-white rounded hover:bg-indigo-600"
            >
              切换侧边栏
            </button>
            
            <button
              onClick={() => setTheme(ui.theme === 'light' ? 'dark' : 'light')}
              className="px-4 py-2 bg-gray-500 text-white rounded hover:bg-gray-600"
            >
              切换主题
            </button>
            
            <button
              onClick={() => {
                clearUser();
                clearCart();
              }}
              className="px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600"
            >
              重置状态
            </button>
          </div>

          <div className="bg-yellow-50 p-4 rounded-lg border border-yellow-200">
            <h4 className="font-medium text-yellow-800 mb-2">⚠️ 观察要点</h4>
            <ul className="text-sm text-yellow-700 space-y-1">
              <li>• <strong>任何操作</strong>：组件都会重新渲染</li>
              <li>• <strong>设置用户</strong>：组件重新渲染（用户状态变化）</li>
              <li>• <strong>添加产品</strong>：组件重新渲染（产品状态变化）</li>
              <li>• <strong>购物车操作</strong>：组件重新渲染（购物车状态变化）</li>
              <li>• <strong>UI 操作</strong>：组件重新渲染（UI状态变化）</li>
            </ul>
            <p className="mt-2 text-yellow-600 font-medium">
              ⚠️ 注意：单一大 store 导致组件耦合度高，任何状态变化都会触发重新渲染！
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MonolithicStoreDemo;
`,F=`import React, { useEffect, useRef, useState } from "react";

import { useCartStore } from "../stores/cartStore";
import { useProductStore } from "../stores/productStore";
import { useUIStore } from "../stores/uiStore";
import { useUserStore } from "../stores/userStore";

const SplitStoreDemo: React.FC = () => {
  const [renderCount, setRenderCount] = useState(0);
  const renderCountRef = useRef(0);

  // 拆分 store - 只订阅需要的状态
  const userName = useUserStore((state) => state.user?.name);
  const userEmail = useUserStore((state) => state.user?.email);
  const products = useProductStore((state) => state.products);
  const cartTotalItems = useCartStore((state) => state.cart.totalItems);
  const cartTotalPrice = useCartStore((state) => state.cart.totalPrice);
  const isLoading = useUIStore((state) => state.ui.loading);
  const sidebarOpen = useUIStore((state) => state.ui.sidebarOpen);
  const theme = useUIStore((state) => state.ui.theme);

  // 渲染计数
  renderCountRef.current += 1;
  useEffect(() => {
    setRenderCount(renderCountRef.current);
  }, [
    userName,
    userEmail,
    products,
    cartTotalItems,
    cartTotalPrice,
    isLoading,
    sidebarOpen,
    theme,
  ]);

  const { setUser, clearUser } = useUserStore();
  const { addProduct } = useProductStore();
  const { addToCart, clearCart } = useCartStore();
  const { setLoading, toggleSidebar, setTheme } = useUIStore();

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

  const firstProductId = products.length > 0 ? products[0].id : null;

  return (
    <div className="space-y-6">
      <div className="bg-white p-6 rounded-lg shadow">
        <h3 className="text-lg font-semibold mb-4">拆分 Store 解决方案演示</h3>

        <div className="mb-4 p-4 bg-green-50 rounded-lg border border-green-200">
          <h4 className="font-medium text-green-800 mb-2">
            ✅ 拆分 Store 优势
          </h4>
          <ul className="text-sm text-green-700 space-y-1">
            <li>• 按业务领域拆分 store，职责清晰</li>
            <li>• 组件只订阅需要的状态，减少重新渲染</li>
            <li>• 代码模块化，易于维护和测试</li>
            <li>• 团队协作友好，减少冲突</li>
            <li>• 支持按需加载，提升性能</li>
          </ul>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
          <div className="border rounded-lg p-4 bg-green-50">
            <h4 className="font-medium text-green-800 mb-2">拆分 Store 组件</h4>
            <div className="text-sm space-y-1">
              <p>用户: {userName || "未设置"}</p>
              <p>邮箱: {userEmail || "未设置"}</p>
              <p>产品数量: {products.length} 个</p>
              <p>
                购物车: {cartTotalItems} 件 (¥{cartTotalPrice})
              </p>
              <p>状态: {isLoading ? "加载中" : "空闲"}</p>
              <p>侧边栏: {sidebarOpen ? "打开" : "关闭"}</p>
              <p>主题: {theme}</p>
              <p className="text-green-600 font-medium">
                渲染次数: {renderCount}
              </p>
            </div>
          </div>

          <div className="border rounded-lg p-4 bg-blue-50">
            <h4 className="font-medium text-blue-800 mb-2">解决方案代码</h4>
            <div className="text-xs font-mono bg-gray-100 p-2 rounded">
              <div>// 按需导入 store</div>
              <div>import &#123; useUserStore &#125; from './userStore';</div>
              <div>
                import &#123; useProductStore &#125; from './productStore';
              </div>
              <div>import &#123; useCartStore &#125; from './cartStore';</div>
              <div>import &#123; useUIStore &#125; from './uiStore';</div>
              <div className="mt-2">// 精准订阅需要的状态</div>
              <div>const userName = useUserStore(s =&gt; s.user?.name);</div>
              <div>const products = useProductStore(s =&gt; s.products);</div>
              <div>
                const cartTotal = useCartStore(s =&gt; s.cart.totalItems);
              </div>
              <div className="mt-2 text-green-600">
                // ✅ 组件解耦，性能优化
              </div>
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
              添加产品
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
              {firstProductId ? "添加到购物车" : "请先添加产品"}
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
              取消加载状态
            </button>

            <button
              onClick={() => toggleSidebar()}
              className="px-4 py-2 bg-indigo-500 text-white rounded hover:bg-indigo-600"
            >
              切换侧边栏
            </button>

            <button
              onClick={() => setTheme(theme === "light" ? "dark" : "light")}
              className="px-4 py-2 bg-gray-500 text-white rounded hover:bg-gray-600"
            >
              切换主题
            </button>

            <button
              onClick={() => {
                clearUser();
                clearCart();
              }}
              className="px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600"
            >
              重置状态
            </button>
          </div>

          <div className="bg-blue-50 p-4 rounded-lg border border-blue-200">
            <h4 className="font-medium text-blue-800 mb-2">⚠️观察要点</h4>
            <ul className="text-sm text-blue-700 space-y-1">
              <li>
                • <strong>设置用户</strong>：组件会重新渲染（用户信息变化）
              </li>
              <li>
                • <strong>添加产品</strong>：组件会重新渲染（产品列表变化）
              </li>
              <li>
                • <strong>购物车操作</strong>：组件会重新渲染（购物车信息变化）
              </li>
              <li>
                • <strong>UI 操作</strong>：组件会重新渲染（相关UI状态变化）
              </li>
              <li>
                • <strong>精准订阅</strong>：只订阅需要的字段，减少不必要的渲染
              </li>
            </ul>
            <p className="mt-2 text-blue-600 font-medium">
              ✅ 拆分 store 使组件更加独立，性能更好，维护更容易！
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SplitStoreDemo;
`,Q=`import { create } from 'zustand';
import { UserStore, User } from '../types';

const useUserStore = create<UserStore>((set) => ({
  user: null,

  setUser: (user: User) => {
    set({ user });
  },

  updateUser: (updates: Partial<User>) => {
    set((state) => ({
      user: state.user ? { ...state.user, ...updates } : null,
    }));
  },

  clearUser: () => {
    set({ user: null });
  },
}));

export { useUserStore };
`,Z=`import { create } from 'zustand';
import { ProductStore, Product } from '../types';

const generateUniqueId = (): string => {
  return Math.random().toString(36).substr(2, 9);
};

const useProductStore = create<ProductStore>((set, get) => ({
  products: [],

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

  getProductById: (productId: string) => {
    return get().products.find((product) => product.id === productId);
  },
}));

export { useProductStore };
`,G=`import { create } from 'zustand';
import { CartStore, CartItem } from '../types';
import { useProductStore } from './productStore';

const useCartStore = create<CartStore>((set, get) => ({
  cart: {
    items: [],
    totalPrice: 0,
    totalItems: 0,
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
        const product = useProductStore.getState().getProductById(item.productId);
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
        const product = useProductStore.getState().getProductById(item.productId);
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

  updateCartItemQuantity: (productId: string, quantity: number) => {
    set((state) => {
      const newItems = state.cart.items.map((item) =>
        item.productId === productId ? { ...item, quantity } : item
      ).filter((item) => item.quantity > 0);

      const totalItems = newItems.reduce((sum, item) => sum + item.quantity, 0);
      const totalPrice = newItems.reduce((sum, item) => {
        const product = useProductStore.getState().getProductById(item.productId);
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
}));

export { useCartStore };
`,H=`import { create } from 'zustand';
import { UIStore } from '../types';

const useUIStore = create<UIStore>((set) => ({
  ui: {
    loading: false,
    error: null,
    sidebarOpen: false,
    currentPage: 'home',
    modalOpen: false,
    theme: 'light',
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

  toggleModal: () => {
    set((state) => ({
      ui: {
        ...state.ui,
        modalOpen: !state.ui.modalOpen,
      },
    }));
  },

  setTheme: (theme: 'light' | 'dark') => {
    set((state) => ({
      ui: {
        ...state.ui,
        theme,
      },
    }));
  },
}));

export { useUIStore };
`,V=()=>e.jsx(L,{title:"Store 拆分策略",description:"学习如何按业务领域拆分 Zustand store，避免单一大 store 的问题。掌握模块化状态管理、性能优化和团队协作最佳实践。",overview:[{title:"核心概念",items:["按业务领域拆分 store，每个 store 负责特定的功能模块。","避免单一大 store 导致的耦合度高、难以维护的问题。","组件只订阅需要的 store，减少不必要的重新渲染。","每个 store 都有独立的类型定义和状态管理逻辑。","通过合理的 store 拆分实现代码的模块化和可维护性。"]},{title:"主要优势",items:["代码模块化，职责清晰，易于维护和测试。","减少组件耦合度，提升应用性能。","团队协作友好，减少代码冲突。","支持按需加载，优化应用启动性能。","便于代码复用和功能扩展。"]},{title:"适用场景",items:["大型应用的复杂状态管理。","多团队协作开发项目。","需要模块化架构的应用。","对性能和维护性要求较高的项目。","需要支持按需加载的应用。"]},{title:"注意事项",items:["合理划分业务边界，避免过度拆分。","保持 store 之间的独立性，避免循环依赖。","统一的状态更新和错误处理机制。","考虑 store 之间的数据共享需求。","建立清晰的 store 命名和组织规范。"]}],examples:[{title:"单一大 Store 问题演示",component:e.jsx(z,{}),description:"演示单一大 store 的问题，所有状态集中管理导致的问题",observationPoints:["观察单一大 store 组件的渲染次数变化","注意任何状态变化都会触发重新渲染","理解单一大 store 的维护困难","体验代码耦合度高的问题"],keyPoints:["单一大 store 导致组件耦合度高","任何状态变化都会触发重新渲染","代码难以维护和测试","团队协作困难"],commonTraps:["将所有状态集中在一个 store 中","组件订阅整个 store 状态","忽视代码的模块化设计","不理解 store 拆分的重要性"],solutions:["按业务领域拆分 store","组件只订阅需要的状态","建立清晰的模块边界","采用模块化的架构设计"],codeExample:{code:B,title:"单一大 Store 问题演示组件"}},{title:"拆分 Store 解决方案",component:e.jsx(A,{}),description:"演示拆分 store 的解决方案，按业务领域拆分状态管理",observationPoints:["观察拆分 store 组件的渲染次数变化","注意只有相关状态变化才会触发重新渲染","理解拆分 store 的维护优势","体验代码模块化的好处"],keyPoints:["按业务领域拆分 store，职责清晰","组件只订阅需要的状态，减少重新渲染","代码模块化，易于维护和测试","团队协作友好，减少冲突"],commonTraps:["不理解如何合理拆分 store","忽视 store 之间的独立性","过度拆分导致复杂性增加","缺乏统一的架构规范"],solutions:["按业务边界合理拆分 store","保持 store 之间的独立性","建立清晰的命名和组织规范","采用统一的架构模式"],codeExample:{code:F,title:"拆分 Store 解决方案组件"}}],tutorial:{concepts:["Store 拆分是大型应用状态管理的重要策略","按业务领域拆分可以降低代码耦合度","每个 store 应该负责特定的功能模块","组件只订阅需要的 store 可以提升性能","合理的拆分策略有助于团队协作和维护"],steps:["分析应用的功能模块和业务边界","按业务领域设计独立的 store","定义清晰的 store 接口和类型","实现组件与 store 的解耦","建立统一的架构规范和最佳实践","持续优化和重构 store 结构"],tips:["优先考虑业务边界而不是技术边界","保持 store 的单一职责原则","使用 TypeScript 提供类型安全","建立清晰的命名和组织规范","定期审查和重构 store 结构"]},interview:{questions:[{question:"为什么要拆分 store？单一大 store 有什么问题？",answer:"拆分 store 可以降低代码耦合度、提升性能、便于维护和团队协作。单一大 store 会导致组件耦合度高、难以维护、团队协作困难等问题。"},{question:"如何合理拆分 store？拆分的原则是什么？",answer:"按业务领域拆分，每个 store 负责特定的功能模块。拆分原则包括：单一职责、业务边界清晰、避免循环依赖、保持独立性等。"},{question:"拆分 store 后如何管理 store 之间的数据共享？",answer:"可以通过事件总线、共享状态、依赖注入等方式管理 store 之间的数据共享。关键是要保持 store 的独立性，避免直接依赖。"},{question:"拆分 store 对性能有什么影响？",answer:"拆分 store 可以提升性能，因为组件只订阅需要的状态，减少不必要的重新渲染。同时支持按需加载，优化应用启动性能。"},{question:"如何在团队中推广 store 拆分的最佳实践？",answer:"建立清晰的架构规范、提供代码模板和示例、进行技术分享和培训、建立代码审查机制、持续优化和重构等。"}],keyPoints:["Store 拆分是大型应用架构的重要策略","按业务领域拆分可以降低耦合度","组件只订阅需要的状态可以提升性能","合理的拆分有助于团队协作和维护","建立统一的架构规范很重要"]},bestPractices:{dos:["按业务领域合理拆分 store","保持 store 的单一职责原则","使用 TypeScript 提供类型安全","建立清晰的命名和组织规范","定期审查和重构 store 结构","考虑 store 之间的数据共享需求"],donts:["不要过度拆分 store","不要创建循环依赖","不要忽视 store 的独立性","不要缺乏统一的架构规范","不要忽视性能和维护性"],patterns:["领域驱动设计：按业务领域拆分 store","单一职责：每个 store 负责特定功能","依赖注入：通过参数传递依赖","事件驱动：通过事件进行 store 间通信"]},codeExamples:[{title:"用户 Store",code:Q,language:"typescript"},{title:"产品 Store",code:Z,language:"typescript"},{title:"购物车 Store",code:G,language:"typescript"},{title:"UI Store",code:H,language:"typescript"}]});export{V as default};
