import{r as b,R as M,j as e}from"./index-BWM6UHr8.js";import{p as $}from"./middleware-CPUTVaT6.js";import{c as T,C as V}from"./ComponentTemplate-ClBHhBQ8.js";const U=()=>Math.random().toString(36).substr(2,9),P=m=>{const j=m.reduce((i,a)=>i+a.quantity,0),d=m.reduce((i,a)=>{const u=a.product.price*a.quantity,r=a.product.discount||0;return i+u*(1-r/100)},0),s=m.reduce((i,a)=>{const u=a.product.price*a.quantity,r=a.product.discount||0;return i+u*r/100},0);return{totalItems:j,totalPrice:d,totalDiscount:s}},g=T()($((m,j)=>({items:[],totalItems:0,totalPrice:0,totalDiscount:0,isOpen:!1,isLoading:!1,error:null,lastUpdated:null,addItem:(d,s=1,i)=>{m(a=>{if(a.items.find(r=>r.productId===d.id)){const r=a.items.map(o=>o.productId===d.id?{...o,quantity:o.quantity+s}:o),h=P(r);return{items:r,...h,lastUpdated:new Date}}else{const r={id:U(),productId:d.id,product:d,quantity:s,addedAt:new Date,notes:i},h=[...a.items,r],o=P(h);return{items:h,...o,lastUpdated:new Date}}})},removeItem:d=>{m(s=>{const i=s.items.filter(u=>u.id!==d),a=P(i);return{items:i,...a,lastUpdated:new Date}})},updateQuantity:(d,s)=>{if(s<=0){j().removeItem(d);return}m(i=>{const a=i.items.map(r=>r.id===d?{...r,quantity:s}:r),u=P(a);return{items:a,...u,lastUpdated:new Date}})},clearCart:()=>{m({items:[],totalItems:0,totalPrice:0,totalDiscount:0,lastUpdated:new Date})},toggleCart:()=>{m(d=>({isOpen:!d.isOpen}))},openCart:()=>{m({isOpen:!0})},closeCart:()=>{m({isOpen:!1})},addMultipleItems:d=>{m(s=>{let i=[...s.items];d.forEach(({product:u,quantity:r})=>{if(i.find(o=>o.productId===u.id))i=i.map(o=>o.productId===u.id?{...o,quantity:o.quantity+r}:o);else{const o={id:U(),productId:u.id,product:u,quantity:r,addedAt:new Date};i.push(o)}});const a=P(i);return{items:i,...a,lastUpdated:new Date}})},removeMultipleItems:d=>{m(s=>{const i=s.items.filter(u=>!d.includes(u.id)),a=P(i);return{items:i,...a,lastUpdated:new Date}})},setLoading:d=>{m({isLoading:d})},setError:d=>{m({error:d})},clearError:()=>{m({error:null})}}),{name:"cart-storage",partialize:m=>({items:m.items,totalItems:m.totalItems,totalPrice:m.totalPrice,totalDiscount:m.totalDiscount,lastUpdated:m.lastUpdated})})),Q=()=>{var L,S;const[m,j]=b.useState(0),d=b.useRef(0),[s,i]=b.useState({sortBy:"addedAt",sortOrder:"desc"}),[a,u]=b.useState([]),r=g(n=>n.items),h=g(n=>n.totalItems),o=g(n=>n.totalPrice),R=g(n=>n.totalDiscount),y=g(n=>n.isLoading),w=g(n=>n.error);d.current+=1,b.useEffect(()=>{j(d.current)},[r,h,o,y,w]);const{addMultipleItems:k,removeMultipleItems:x,setLoading:I,clearError:D}=g(),q=[{id:"5",name:"Samsung Galaxy S24",price:899,description:"三星旗舰手机，AI 功能强大",image:"https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?w=200",category:"手机",stock:40,rating:4.7,reviews:980,tags:["手机","三星","AI"],discount:8},{id:"6",name:"Dell XPS 13",price:1299,description:"轻薄商务笔记本电脑",image:"https://images.unsplash.com/photo-1496181133206-80ce9b88a853?w=200",category:"电脑",stock:25,rating:4.5,reviews:650,tags:["电脑","戴尔","商务"],discount:12},{id:"7",name:"Sony WH-1000XM5",price:399,description:"顶级降噪耳机",image:"https://images.unsplash.com/photo-1583394838336-acd977736f90?w=200",category:"音频",stock:60,rating:4.8,reviews:1800,tags:["耳机","索尼","降噪"],discount:5},{id:"8",name:'iPad Pro 12.9"',price:1099,description:"专业级平板电脑",image:"https://images.unsplash.com/photo-1544244015-0df4b3ffc6b0?w=200",category:"平板",stock:35,rating:4.9,reviews:1200,tags:["平板","苹果","专业"],discount:15}],f=M.useMemo(()=>{let n=[...r];return s.category&&(n=n.filter(c=>c.product.category===s.category)),s.priceRange&&(n=n.filter(c=>c.product.price>=s.priceRange.min&&c.product.price<=s.priceRange.max)),s.tags&&s.tags.length>0&&(n=n.filter(c=>s.tags.some(t=>c.product.tags.includes(t)))),s.sortBy&&n.sort((c,t)=>{let l,p;switch(s.sortBy){case"name":l=c.product.name,p=t.product.name;break;case"price":l=c.product.price,p=t.product.price;break;case"addedAt":l=c.addedAt,p=t.addedAt;break;case"quantity":l=c.quantity,p=t.quantity;break;default:return 0}return s.sortOrder==="asc"?l>p?1:-1:l<p?1:-1}),n},[r,s]),C=M.useMemo(()=>{const n={};let c=null,t=null,l=0,p=1/0;r.forEach(N=>{n[N.product.category]=(n[N.product.category]||0)+N.quantity,N.product.price>l&&(l=N.product.price,c=N),N.product.price<p&&(p=N.product.price,t=N)});const B=r.length>0?o/h:0;return{categories:n,mostExpensiveItem:c,cheapestItem:t,averageItemPrice:B}},[r,o,h]),F=async()=>{I(!0),setTimeout(()=>{k(q.map(n=>({product:n,quantity:1}))),I(!1)},1e3)},A=()=>{a.length>0&&(x(a),u([]))},v=n=>{u(c=>c.includes(n)?c.filter(t=>t!==n):[...c,n])},O=()=>{a.length===f.length?u([]):u(f.map(n=>n.id))},E=()=>{const c=JSON.stringify({items:r,totalPrice:o,totalItems:h,exportDate:new Date},null,2),t=new Blob([c],{type:"application/json"}),l=URL.createObjectURL(t),p=document.createElement("a");p.href=l,p.download=`cart-export-${new Date().toISOString().split("T")[0]}.json`,p.click(),URL.revokeObjectURL(l)};return e.jsx("div",{className:"space-y-6",children:e.jsxs("div",{className:"bg-white p-6 rounded-lg shadow",children:[e.jsx("h3",{className:"text-lg font-semibold mb-4",children:"高级购物车功能演示"}),e.jsxs("div",{className:"mb-4 p-4 bg-green-50 rounded-lg border border-green-200",children:[e.jsx("h4",{className:"font-medium text-green-800 mb-2",children:"✅ 高级购物车功能"}),e.jsxs("ul",{className:"text-sm text-green-700 space-y-1",children:[e.jsx("li",{children:"• 批量添加和移除商品"}),e.jsx("li",{children:"• 购物车过滤和排序"}),e.jsx("li",{children:"• 购物车统计分析"}),e.jsx("li",{children:"• 购物车导出功能"}),e.jsx("li",{children:"• 多选和批量操作"})]})]}),e.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-3 gap-6 mb-6",children:[e.jsxs("div",{className:"border rounded-lg p-4 bg-blue-50",children:[e.jsx("h4",{className:"font-medium text-blue-800 mb-2",children:"购物车统计"}),e.jsxs("div",{className:"text-sm space-y-1",children:[e.jsxs("p",{children:["总商品数: ",h," 件"]}),e.jsxs("p",{children:["总价格: ¥",o.toFixed(2)]}),e.jsxs("p",{children:["总折扣: ¥",R.toFixed(2)]}),e.jsxs("p",{children:["平均单价: ¥",C.averageItemPrice.toFixed(2)]}),e.jsxs("p",{children:["最贵商品: ",((L=C.mostExpensiveItem)==null?void 0:L.product.name)||"无"]}),e.jsxs("p",{children:["最便宜商品: ",((S=C.cheapestItem)==null?void 0:S.product.name)||"无"]}),e.jsxs("p",{className:"text-blue-600 font-medium",children:["渲染次数: ",m]})]})]}),e.jsxs("div",{className:"border rounded-lg p-4 bg-green-50",children:[e.jsx("h4",{className:"font-medium text-green-800 mb-2",children:"类别统计"}),e.jsxs("div",{className:"text-sm space-y-1",children:[Object.entries(C.categories).map(([n,c])=>e.jsxs("div",{className:"flex justify-between",children:[e.jsxs("span",{children:[n,":"]}),e.jsxs("span",{className:"font-medium",children:[c," 件"]})]},n)),Object.keys(C.categories).length===0&&e.jsx("p",{className:"text-gray-500",children:"暂无数据"})]})]}),e.jsxs("div",{className:"border rounded-lg p-4 bg-yellow-50",children:[e.jsx("h4",{className:"font-medium text-yellow-800 mb-2",children:"批量操作"}),e.jsxs("div",{className:"space-y-2",children:[e.jsx("button",{onClick:F,disabled:y,className:`w-full py-2 px-4 rounded text-white text-sm ${y?"bg-gray-400 cursor-not-allowed":"bg-blue-500 hover:bg-blue-600"}`,children:y?"添加中...":"批量添加商品"}),e.jsxs("button",{onClick:A,disabled:a.length===0,className:`w-full py-2 px-4 rounded text-white text-sm ${a.length===0?"bg-gray-400 cursor-not-allowed":"bg-red-500 hover:bg-red-600"}`,children:["批量移除 (",a.length,")"]}),e.jsx("button",{onClick:E,disabled:r.length===0,className:`w-full py-2 px-4 rounded text-white text-sm ${r.length===0?"bg-gray-400 cursor-not-allowed":"bg-green-500 hover:bg-green-600"}`,children:"导出购物车"})]})]})]}),e.jsxs("div",{className:"mb-6 border rounded-lg p-4 bg-gray-50",children:[e.jsx("h4",{className:"font-medium mb-4",children:"过滤和排序"}),e.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-4 gap-4",children:[e.jsxs("div",{children:[e.jsx("label",{className:"block text-sm font-medium text-gray-700 mb-1",children:"类别过滤"}),e.jsxs("select",{value:s.category||"",onChange:n=>i({...s,category:n.target.value||void 0}),className:"w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500",children:[e.jsx("option",{value:"",children:"全部类别"}),e.jsx("option",{value:"手机",children:"手机"}),e.jsx("option",{value:"电脑",children:"电脑"}),e.jsx("option",{value:"音频",children:"音频"}),e.jsx("option",{value:"平板",children:"平板"})]})]}),e.jsxs("div",{children:[e.jsx("label",{className:"block text-sm font-medium text-gray-700 mb-1",children:"价格范围"}),e.jsxs("select",{value:s.priceRange?`${s.priceRange.min}-${s.priceRange.max}`:"",onChange:n=>{const c=n.target.value;if(c==="")i({...s,priceRange:void 0});else{const[t,l]=c.split("-").map(Number);i({...s,priceRange:{min:t,max:l}})}},className:"w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500",children:[e.jsx("option",{value:"",children:"全部价格"}),e.jsx("option",{value:"0-500",children:"¥0 - ¥500"}),e.jsx("option",{value:"500-1000",children:"¥500 - ¥1000"}),e.jsx("option",{value:"1000-2000",children:"¥1000 - ¥2000"}),e.jsx("option",{value:"2000-9999",children:"¥2000+"})]})]}),e.jsxs("div",{children:[e.jsx("label",{className:"block text-sm font-medium text-gray-700 mb-1",children:"排序方式"}),e.jsxs("select",{value:s.sortBy||"",onChange:n=>i({...s,sortBy:n.target.value}),className:"w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500",children:[e.jsx("option",{value:"addedAt",children:"添加时间"}),e.jsx("option",{value:"name",children:"商品名称"}),e.jsx("option",{value:"price",children:"价格"}),e.jsx("option",{value:"quantity",children:"数量"})]})]}),e.jsxs("div",{children:[e.jsx("label",{className:"block text-sm font-medium text-gray-700 mb-1",children:"排序顺序"}),e.jsxs("select",{value:s.sortOrder||"desc",onChange:n=>i({...s,sortOrder:n.target.value}),className:"w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500",children:[e.jsx("option",{value:"desc",children:"降序"}),e.jsx("option",{value:"asc",children:"升序"})]})]})]})]}),e.jsxs("div",{className:"border rounded-lg p-4",children:[e.jsxs("div",{className:"flex items-center justify-between mb-4",children:[e.jsxs("h4",{className:"font-medium",children:["购物车商品 (",f.length,")"]}),f.length>0&&e.jsxs("div",{className:"flex items-center space-x-2",children:[e.jsx("input",{type:"checkbox",checked:a.length===f.length&&f.length>0,onChange:O,className:"rounded"}),e.jsx("span",{className:"text-sm text-gray-600",children:"全选"})]})]}),f.length===0?e.jsx("div",{className:"text-center text-gray-500 py-8",children:r.length===0?"购物车为空":"没有符合条件的商品"}):e.jsx("div",{className:"space-y-3",children:f.map(n=>e.jsx("div",{className:`p-3 border rounded-lg ${a.includes(n.id)?"border-blue-500 bg-blue-50":"border-gray-200"}`,children:e.jsxs("div",{className:"flex items-center space-x-3",children:[e.jsx("input",{type:"checkbox",checked:a.includes(n.id),onChange:()=>v(n.id),className:"rounded"}),e.jsx("img",{src:n.product.image,alt:n.product.name,className:"w-12 h-12 rounded object-cover"}),e.jsxs("div",{className:"flex-1",children:[e.jsx("h6",{className:"font-medium",children:n.product.name}),e.jsx("p",{className:"text-sm text-gray-600",children:n.product.description}),e.jsxs("div",{className:"flex items-center space-x-4 mt-1",children:[e.jsxs("span",{className:"text-sm text-gray-500",children:["类别: ",n.product.category]}),e.jsxs("span",{className:"text-sm text-gray-500",children:["数量: ",n.quantity]}),e.jsxs("span",{className:"text-sm font-medium text-green-600",children:["¥",(n.product.price*n.quantity).toFixed(2)]}),n.product.discount&&n.product.discount>0&&e.jsxs("span",{className:"text-xs bg-red-100 text-red-600 px-1 rounded",children:["折扣 -",n.product.discount,"%"]})]})]})]})},n.id))})]}),w&&e.jsxs("div",{className:"mt-4 p-4 bg-red-50 border border-red-200 rounded-lg",children:[e.jsx("p",{className:"text-red-800",children:w}),e.jsx("button",{onClick:D,className:"mt-2 px-3 py-1 bg-red-500 text-white text-sm rounded hover:bg-red-600",children:"清除错误"})]}),e.jsxs("div",{className:"bg-green-50 p-4 rounded-lg border border-green-200 mt-6",children:[e.jsx("h4",{className:"font-medium text-green-800 mb-2",children:"⚠️ 观察要点"}),e.jsxs("ul",{className:"text-sm text-green-700 space-y-1",children:[e.jsxs("li",{children:["• ",e.jsx("strong",{children:"批量操作"}),"：体验批量添加和移除商品"]}),e.jsxs("li",{children:["• ",e.jsx("strong",{children:"过滤排序"}),"：使用不同条件过滤和排序商品"]}),e.jsxs("li",{children:["• ",e.jsx("strong",{children:"统计分析"}),"：查看购物车的详细统计信息"]}),e.jsxs("li",{children:["• ",e.jsx("strong",{children:"多选功能"}),"：选择多个商品进行批量操作"]}),e.jsxs("li",{children:["• ",e.jsx("strong",{children:"导出功能"}),"：导出购物车数据为 JSON 文件"]}),e.jsxs("li",{children:["• ",e.jsx("strong",{children:"性能优化"}),"：观察渲染次数和计算优化"]})]}),e.jsx("p",{className:"mt-2 text-green-600 font-medium",children:"✅ 高级购物车功能完整，支持复杂的购物车管理！"})]})]})})},J=()=>{const[m,j]=b.useState(0),d=b.useRef(0),[s,i]=b.useState(null),[a,u]=b.useState(1),[r,h]=b.useState(!1),o=g(t=>t.items),R=g(t=>t.totalItems),y=g(t=>t.totalPrice),w=g(t=>t.totalDiscount),k=g(t=>t.isOpen),x=g(t=>t.isLoading),I=g(t=>t.error);d.current+=1,b.useEffect(()=>{j(d.current)},[o.length,R,y,k]);const{addItem:D,removeItem:q,updateQuantity:f,clearCart:C,toggleCart:F,clearError:A,setLoading:v}=g(),O=[{id:"1",name:"iPhone 15 Pro",price:999,description:"最新款 iPhone，配备 A17 Pro 芯片",image:"https://images.unsplash.com/photo-1592899677977-9c10ca588bbd?w=200",category:"手机",stock:50,rating:4.8,reviews:1250,tags:["手机","苹果","旗舰"],discount:5,isNew:!0},{id:"2",name:'MacBook Pro 16"',price:2499,description:"专业级笔记本电脑，M3 Max 芯片",image:"https://images.unsplash.com/photo-1517336714731-489689fd1ca8?w=200",category:"电脑",stock:30,rating:4.9,reviews:890,tags:["电脑","苹果","专业"],discount:10,isFeatured:!0},{id:"3",name:"AirPods Pro",price:249,description:"主动降噪无线耳机",image:"https://images.unsplash.com/photo-1606220945770-b5b6c2c55bf1?w=200",category:"音频",stock:100,rating:4.7,reviews:2100,tags:["耳机","无线","降噪"],discount:0},{id:"4",name:"iPad Air",price:599,description:"轻薄便携的平板电脑",image:"https://images.unsplash.com/photo-1544244015-0df4b3ffc6b0?w=200",category:"平板",stock:75,rating:4.6,reviews:1560,tags:["平板","苹果","便携"],discount:8}],E=async()=>{s&&(v(!0),await new Promise(t=>setTimeout(t,500)),D(s,a),u(1),v(!1))},L=async t=>{v(!0),await new Promise(l=>setTimeout(l,200)),q(t),v(!1)},S=async(t,l)=>{v(!0),await new Promise(p=>setTimeout(p,200)),f(t,l),v(!1)},n=async()=>{v(!0),await new Promise(t=>setTimeout(t,800)),C(),v(!1)},c=t=>{const l=t.product.price*t.quantity,p=l*(t.product.discount||0)/100,B=l-p;return{originalPrice:l,discountAmount:p,finalPrice:B,discountPercent:t.product.discount||0}};return e.jsx("div",{className:"space-y-6",children:e.jsxs("div",{className:"bg-white p-6 rounded-lg shadow",children:[e.jsx("h3",{className:"text-lg font-semibold mb-4",children:"基础购物车功能演示"}),e.jsxs("div",{className:"mb-4 p-4 bg-blue-50 rounded-lg border border-blue-200",children:[e.jsx("h4",{className:"font-medium text-blue-800 mb-2",children:"✅ 基础购物车功能"}),e.jsxs("ul",{className:"text-sm text-blue-700 space-y-1",children:[e.jsx("li",{children:"• 添加商品到购物车"}),e.jsx("li",{children:"• 移除购物车商品"}),e.jsx("li",{children:"• 更新商品数量"}),e.jsx("li",{children:"• 计算总价和折扣"}),e.jsx("li",{children:"• 购物车状态管理"})]})]}),e.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-6 mb-6",children:[e.jsxs("div",{className:"border rounded-lg p-4 bg-blue-50",children:[e.jsx("h4",{className:"font-medium text-blue-800 mb-2",children:"购物车状态"}),e.jsxs("div",{className:"text-sm space-y-1",children:[e.jsxs("p",{children:["商品数量: ",R," 件"]}),e.jsxs("p",{children:["总价格: ¥",y.toFixed(2)]}),e.jsxs("p",{children:["总折扣: ¥",w.toFixed(2)]}),e.jsxs("p",{children:["购物车状态: ",k?"打开":"关闭"]}),e.jsxs("p",{children:["加载状态: ",x?"加载中...":"空闲"]}),I&&e.jsxs("p",{className:"text-red-600",children:["错误: ",I]}),e.jsxs("p",{className:"text-blue-600 font-medium",children:["渲染次数: ",m]}),e.jsx("p",{className:"text-xs text-gray-500 mt-1",children:"⚠️ 渲染次数反映状态变化频率，优化后可减少"})]})]}),e.jsxs("div",{className:"border rounded-lg p-4 bg-green-50",children:[e.jsx("h4",{className:"font-medium text-green-800 mb-2",children:"购物车操作"}),e.jsxs("div",{className:"space-y-2",children:[e.jsx("button",{onClick:F,disabled:x,className:`w-full py-2 px-4 rounded text-white ${x?"bg-gray-400 cursor-not-allowed":"bg-blue-500 hover:bg-blue-600"}`,children:k?"关闭购物车":"打开购物车"}),e.jsx("button",{onClick:n,disabled:o.length===0||x,className:`w-full py-2 px-4 rounded text-white ${o.length===0||x?"bg-gray-400 cursor-not-allowed":"bg-red-500 hover:bg-red-600"}`,children:x?"清空中...":"清空购物车"}),e.jsx("button",{onClick:()=>h(!r),className:"w-full py-2 px-4 bg-purple-500 text-white rounded hover:bg-purple-600",children:r?"隐藏计算详情":"显示计算详情"}),I&&e.jsx("button",{onClick:A,className:"w-full py-2 px-4 bg-gray-500 text-white rounded hover:bg-gray-600",children:"清除错误"})]})]})]}),r&&o.length>0&&e.jsxs("div",{className:"mb-6 border rounded-lg p-4 bg-yellow-50",children:[e.jsx("h4",{className:"font-medium text-yellow-800 mb-3",children:"⚠️ 价格计算详情"}),e.jsxs("div",{className:"space-y-3",children:[o.map(t=>{const l=c(t);return e.jsx("div",{className:"p-3 bg-white rounded border",children:e.jsxs("div",{className:"flex items-center justify-between",children:[e.jsxs("div",{className:"flex items-center space-x-3",children:[e.jsx("img",{src:t.product.image,alt:t.product.name,className:"w-8 h-8 rounded object-cover"}),e.jsxs("div",{children:[e.jsx("h6",{className:"font-medium text-sm",children:t.product.name}),e.jsxs("p",{className:"text-xs text-gray-600",children:["数量: ",t.quantity]})]})]}),e.jsx("div",{className:"text-right text-sm",children:e.jsxs("div",{className:"space-y-1",children:[e.jsxs("p",{children:["原价: ¥",l.originalPrice.toFixed(2)]}),l.discountPercent>0&&e.jsxs("p",{className:"text-red-600",children:["折扣: -¥",l.discountAmount.toFixed(2)," (",l.discountPercent,"%)"]}),e.jsxs("p",{className:"font-medium text-green-600",children:["实付: ¥",l.finalPrice.toFixed(2)]})]})})]})},t.id)}),e.jsx("div",{className:"border-t pt-3 mt-3",children:e.jsxs("div",{className:"flex justify-between items-center",children:[e.jsx("span",{className:"font-medium",children:"总计:"}),e.jsxs("div",{className:"text-right",children:[e.jsxs("p",{className:"text-sm",children:["原价: ¥",(y+w).toFixed(2)]}),e.jsxs("p",{className:"text-sm text-red-600",children:["总折扣: -¥",w.toFixed(2)]}),e.jsxs("p",{className:"text-lg font-bold text-green-600",children:["实付: ¥",y.toFixed(2)]})]})]})})]})]}),e.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-6",children:[e.jsxs("div",{className:"border rounded-lg p-4",children:[e.jsx("h4",{className:"font-medium mb-4",children:"选择商品"}),e.jsx("div",{className:"space-y-4",children:O.map(t=>e.jsx("div",{className:`p-3 border rounded-lg cursor-pointer transition-colors ${(s==null?void 0:s.id)===t.id?"border-blue-500 bg-blue-50":"border-gray-200 hover:border-gray-300"}`,onClick:()=>i(t),children:e.jsxs("div",{className:"flex items-center space-x-3",children:[e.jsx("img",{src:t.image,alt:t.name,className:"w-12 h-12 rounded object-cover"}),e.jsxs("div",{className:"flex-1",children:[e.jsx("h5",{className:"font-medium text-sm",children:t.name}),e.jsx("p",{className:"text-xs text-gray-600",children:t.description}),e.jsxs("div",{className:"flex items-center space-x-2 mt-1",children:[e.jsxs("span",{className:"text-sm font-medium text-green-600",children:["¥",t.price]}),t.discount&&t.discount>0&&e.jsxs("span",{className:"text-xs bg-red-100 text-red-600 px-1 rounded",children:["-",t.discount,"%"]}),e.jsxs("span",{className:"text-xs text-gray-500",children:["库存: ",t.stock]})]})]})]})},t.id))}),s&&e.jsxs("div",{className:"mt-4 p-3 bg-gray-50 rounded-lg",children:[e.jsx("h5",{className:"font-medium mb-2",children:"添加到购物车"}),e.jsxs("div",{className:"flex items-center space-x-2",children:[e.jsx("label",{className:"text-sm",children:"数量:"}),e.jsx("input",{type:"number",min:"1",max:s.stock,value:a,onChange:t=>u(parseInt(t.target.value)||1),className:"w-20 px-2 py-1 border border-gray-300 rounded text-sm"}),e.jsx("button",{onClick:E,disabled:x,className:`px-4 py-1 rounded text-white text-sm ${x?"bg-gray-400 cursor-not-allowed":"bg-green-500 hover:bg-green-600"}`,children:x?"添加中...":"添加到购物车"})]})]})]}),e.jsxs("div",{className:"border rounded-lg p-4",children:[e.jsx("h4",{className:"font-medium mb-4",children:"购物车内容"}),o.length===0?e.jsx("div",{className:"text-center text-gray-500 py-8",children:"购物车为空"}):e.jsx("div",{className:"space-y-3",children:o.map(t=>e.jsx("div",{className:"p-3 border border-gray-200 rounded-lg",children:e.jsxs("div",{className:"flex items-center space-x-3",children:[e.jsx("img",{src:t.product.image,alt:t.product.name,className:"w-10 h-10 rounded object-cover"}),e.jsxs("div",{className:"flex-1",children:[e.jsx("h6",{className:"font-medium text-sm",children:t.product.name}),e.jsxs("p",{className:"text-xs text-gray-600",children:["¥",t.product.price," × ",t.quantity]}),t.product.discount&&t.product.discount>0&&e.jsxs("p",{className:"text-xs text-green-600",children:["折扣: -",t.product.discount,"%"]}),e.jsxs("p",{className:"text-xs font-medium text-green-600",children:["小计: ¥",c(t).finalPrice.toFixed(2)]})]}),e.jsxs("div",{className:"flex items-center space-x-2",children:[e.jsx("button",{onClick:()=>S(t.id,t.quantity-1),disabled:x,className:"w-6 h-6 bg-gray-200 rounded flex items-center justify-center text-sm hover:bg-gray-300 disabled:opacity-50",children:"-"}),e.jsx("span",{className:"text-sm font-medium w-8 text-center",children:t.quantity}),e.jsx("button",{onClick:()=>S(t.id,t.quantity+1),disabled:x,className:"w-6 h-6 bg-gray-200 rounded flex items-center justify-center text-sm hover:bg-gray-300 disabled:opacity-50",children:"+"}),e.jsx("button",{onClick:()=>L(t.id),disabled:x,className:"w-6 h-6 bg-red-200 rounded flex items-center justify-center text-sm hover:bg-red-300 disabled:opacity-50",children:"×"})]})]})},t.id))})]})]}),e.jsxs("div",{className:"bg-blue-50 p-4 rounded-lg border border-blue-200 mt-6",children:[e.jsx("h4",{className:"font-medium text-blue-800 mb-2",children:"⚠️ 观察要点"}),e.jsxs("ul",{className:"text-sm text-blue-700 space-y-1",children:[e.jsxs("li",{children:["• ",e.jsx("strong",{children:"添加商品"}),"：选择商品并添加到购物车"]}),e.jsxs("li",{children:["• ",e.jsx("strong",{children:"数量管理"}),"：增加或减少商品数量"]}),e.jsxs("li",{children:["• ",e.jsx("strong",{children:"价格计算"}),"：观察总价和折扣的实时计算"]}),e.jsxs("li",{children:["• ",e.jsx("strong",{children:"状态同步"}),"：购物车状态实时更新"]}),e.jsxs("li",{children:["• ",e.jsx("strong",{children:"持久化"}),"：刷新页面后购物车内容保持"]}),e.jsxs("li",{children:["• ",e.jsx("strong",{children:"渲染优化"}),"：观察渲染次数和性能"]}),e.jsxs("li",{children:["• ",e.jsx("strong",{children:"计算详情"}),'：点击"显示计算详情"查看详细价格计算']})]}),e.jsx("p",{className:"mt-2 text-blue-600 font-medium",children:"✅ 基础购物车功能完整，支持完整的商品管理和价格计算！"})]})]})})},X=`import { CartFilter, Product, CartItem } from "../types";
import React, { useEffect, useRef, useState } from "react";

import { useCartStore } from "../stores/cartStore";

const AdvancedCartDemo: React.FC = () => {
  const [renderCount, setRenderCount] = useState(0);
  const renderCountRef = useRef(0);
  const [filter, setFilter] = useState<CartFilter>({
    sortBy: "addedAt",
    sortOrder: "desc",
  });
  const [selectedItems, setSelectedItems] = useState<string[]>([]);

  // 使用精准选择器
  const items = useCartStore((state) => state.items);
  const totalItems = useCartStore((state) => state.totalItems);
  const totalPrice = useCartStore((state) => state.totalPrice);
  const totalDiscount = useCartStore((state) => state.totalDiscount);
  const isLoading = useCartStore((state) => state.isLoading);
  const error = useCartStore((state) => state.error);

  // 渲染计数
  renderCountRef.current += 1;
  useEffect(() => {
    setRenderCount(renderCountRef.current);
  }, [items, totalItems, totalPrice, isLoading, error]);

  const {
    addMultipleItems,
    removeMultipleItems,

    setLoading,
    clearError,
  } = useCartStore();

  // 模拟更多产品数据
  const products: Product[] = [
    {
      id: "5",
      name: "Samsung Galaxy S24",
      price: 899,
      description: "三星旗舰手机，AI 功能强大",
      image:
        "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?w=200",
      category: "手机",
      stock: 40,
      rating: 4.7,
      reviews: 980,
      tags: ["手机", "三星", "AI"],
      discount: 8,
    },
    {
      id: "6",
      name: "Dell XPS 13",
      price: 1299,
      description: "轻薄商务笔记本电脑",
      image:
        "https://images.unsplash.com/photo-1496181133206-80ce9b88a853?w=200",
      category: "电脑",
      stock: 25,
      rating: 4.5,
      reviews: 650,
      tags: ["电脑", "戴尔", "商务"],
      discount: 12,
    },
    {
      id: "7",
      name: "Sony WH-1000XM5",
      price: 399,
      description: "顶级降噪耳机",
      image:
        "https://images.unsplash.com/photo-1583394838336-acd977736f90?w=200",
      category: "音频",
      stock: 60,
      rating: 4.8,
      reviews: 1800,
      tags: ["耳机", "索尼", "降噪"],
      discount: 5,
    },
    {
      id: "8",
      name: 'iPad Pro 12.9"',
      price: 1099,
      description: "专业级平板电脑",
      image: "https://images.unsplash.com/photo-1544244015-0df4b3ffc6b0?w=200",
      category: "平板",
      stock: 35,
      rating: 4.9,
      reviews: 1200,
      tags: ["平板", "苹果", "专业"],
      discount: 15,
    },
  ];

  // 过滤和排序购物车商品
  const filteredItems = React.useMemo(() => {
    let filtered = [...items];

    // 按类别过滤
    if (filter.category) {
      filtered = filtered.filter(
        (item) => item.product.category === filter.category
      );
    }

    // 按价格范围过滤
    if (filter.priceRange) {
      filtered = filtered.filter(
        (item) =>
          item.product.price >= filter.priceRange!.min &&
          item.product.price <= filter.priceRange!.max
      );
    }

    // 按标签过滤
    if (filter.tags && filter.tags.length > 0) {
      filtered = filtered.filter((item) =>
        filter.tags!.some((tag) => item.product.tags.includes(tag))
      );
    }

    // 排序
    if (filter.sortBy) {
      filtered.sort((a, b) => {
        let aValue: any, bValue: any;

        switch (filter.sortBy) {
          case "name":
            aValue = a.product.name;
            bValue = b.product.name;
            break;
          case "price":
            aValue = a.product.price;
            bValue = b.product.price;
            break;
          case "addedAt":
            aValue = a.addedAt;
            bValue = b.addedAt;
            break;
          case "quantity":
            aValue = a.quantity;
            bValue = b.quantity;
            break;
          default:
            return 0;
        }

        if (filter.sortOrder === "asc") {
          return aValue > bValue ? 1 : -1;
        } else {
          return aValue < bValue ? 1 : -1;
        }
      });
    }

    return filtered;
  }, [items, filter]);

  // 计算购物车统计
  const cartStats = React.useMemo(() => {
    const categories: { [key: string]: number } = {};
    let mostExpensiveItem: CartItem | null = null;
    let cheapestItem: CartItem | null = null;
    let maxPrice = 0;
    let minPrice = Infinity;

    items.forEach((item) => {
      // 统计类别
      categories[item.product.category] =
        (categories[item.product.category] || 0) + item.quantity;

      // 找最贵和最便宜的商品
      if (item.product.price > maxPrice) {
        maxPrice = item.product.price;
        mostExpensiveItem = item;
      }
      if (item.product.price < minPrice) {
        minPrice = item.product.price;
        cheapestItem = item;
      }
    });

    const averageItemPrice = items.length > 0 ? totalPrice / totalItems : 0;

    return {
      categories,
      mostExpensiveItem,
      cheapestItem,
      averageItemPrice,
    };
  }, [items, totalPrice, totalItems]);

  const handleBatchAdd = async () => {
    setLoading(true);
    // 模拟异步操作
    setTimeout(() => {
      addMultipleItems(products.map((product) => ({ product, quantity: 1 })));
      setLoading(false);
    }, 1000);
  };

  const handleBatchRemove = () => {
    if (selectedItems.length > 0) {
      removeMultipleItems(selectedItems);
      setSelectedItems([]);
    }
  };

  const handleSelectItem = (itemId: string) => {
    setSelectedItems((prev) =>
      prev.includes(itemId)
        ? prev.filter((id) => id !== itemId)
        : [...prev, itemId]
    );
  };

  const handleSelectAll = () => {
    if (selectedItems.length === filteredItems.length) {
      setSelectedItems([]);
    } else {
      setSelectedItems(filteredItems.map((item) => item.id));
    }
  };

  const handleExportCart = () => {
    const cartData = {
      items: items,
      totalPrice,
      totalItems,
      exportDate: new Date(),
    };

    const dataStr = JSON.stringify(cartData, null, 2);
    const dataBlob = new Blob([dataStr], { type: "application/json" });
    const url = URL.createObjectURL(dataBlob);
    const link = document.createElement("a");
    link.href = url;
    link.download = \`cart-export-\${
      new Date().toISOString().split("T")[0]
    }.json\`;
    link.click();
    URL.revokeObjectURL(url);
  };

  return (
    <div className="space-y-6">
      <div className="bg-white p-6 rounded-lg shadow">
        <h3 className="text-lg font-semibold mb-4">高级购物车功能演示</h3>

        <div className="mb-4 p-4 bg-green-50 rounded-lg border border-green-200">
          <h4 className="font-medium text-green-800 mb-2">✅ 高级购物车功能</h4>
          <ul className="text-sm text-green-700 space-y-1">
            <li>• 批量添加和移除商品</li>
            <li>• 购物车过滤和排序</li>
            <li>• 购物车统计分析</li>
            <li>• 购物车导出功能</li>
            <li>• 多选和批量操作</li>
          </ul>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
          {/* 购物车统计 */}
          <div className="border rounded-lg p-4 bg-blue-50">
            <h4 className="font-medium text-blue-800 mb-2">购物车统计</h4>
            <div className="text-sm space-y-1">
              <p>总商品数: {totalItems} 件</p>
              <p>总价格: ¥{totalPrice.toFixed(2)}</p>
              <p>总折扣: ¥{totalDiscount.toFixed(2)}</p>
              <p>平均单价: ¥{cartStats.averageItemPrice.toFixed(2)}</p>
              <p>
                最贵商品: {cartStats.mostExpensiveItem?.product.name || "无"}
              </p>
              <p>最便宜商品: {cartStats.cheapestItem?.product.name || "无"}</p>
              <p className="text-blue-600 font-medium">
                渲染次数: {renderCount}
              </p>
            </div>
          </div>

          {/* 类别统计 */}
          <div className="border rounded-lg p-4 bg-green-50">
            <h4 className="font-medium text-green-800 mb-2">类别统计</h4>
            <div className="text-sm space-y-1">
              {Object.entries(cartStats.categories).map(([category, count]) => (
                <div key={category} className="flex justify-between">
                  <span>{category}:</span>
                  <span className="font-medium">{count} 件</span>
                </div>
              ))}
              {Object.keys(cartStats.categories).length === 0 && (
                <p className="text-gray-500">暂无数据</p>
              )}
            </div>
          </div>

          {/* 批量操作 */}
          <div className="border rounded-lg p-4 bg-yellow-50">
            <h4 className="font-medium text-yellow-800 mb-2">批量操作</h4>
            <div className="space-y-2">
              <button
                onClick={handleBatchAdd}
                disabled={isLoading}
                className={\`w-full py-2 px-4 rounded text-white text-sm \${
                  isLoading
                    ? "bg-gray-400 cursor-not-allowed"
                    : "bg-blue-500 hover:bg-blue-600"
                }\`}
              >
                {isLoading ? "添加中..." : "批量添加商品"}
              </button>
              <button
                onClick={handleBatchRemove}
                disabled={selectedItems.length === 0}
                className={\`w-full py-2 px-4 rounded text-white text-sm \${
                  selectedItems.length === 0
                    ? "bg-gray-400 cursor-not-allowed"
                    : "bg-red-500 hover:bg-red-600"
                }\`}
              >
                批量移除 ({selectedItems.length})
              </button>
              <button
                onClick={handleExportCart}
                disabled={items.length === 0}
                className={\`w-full py-2 px-4 rounded text-white text-sm \${
                  items.length === 0
                    ? "bg-gray-400 cursor-not-allowed"
                    : "bg-green-500 hover:bg-green-600"
                }\`}
              >
                导出购物车
              </button>
            </div>
          </div>
        </div>

        {/* 过滤和排序 */}
        <div className="mb-6 border rounded-lg p-4 bg-gray-50">
          <h4 className="font-medium mb-4">过滤和排序</h4>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                类别过滤
              </label>
              <select
                value={filter.category || ""}
                onChange={(e) =>
                  setFilter({
                    ...filter,
                    category: e.target.value || undefined,
                  })
                }
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              >
                <option value="">全部类别</option>
                <option value="手机">手机</option>
                <option value="电脑">电脑</option>
                <option value="音频">音频</option>
                <option value="平板">平板</option>
              </select>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                价格范围
              </label>
              <select
                value={
                  filter.priceRange
                    ? \`\${filter.priceRange.min}-\${filter.priceRange.max}\`
                    : ""
                }
                onChange={(e) => {
                  const value = e.target.value;
                  if (value === "") {
                    setFilter({ ...filter, priceRange: undefined });
                  } else {
                    const [min, max] = value.split("-").map(Number);
                    setFilter({ ...filter, priceRange: { min, max } });
                  }
                }}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              >
                <option value="">全部价格</option>
                <option value="0-500">¥0 - ¥500</option>
                <option value="500-1000">¥500 - ¥1000</option>
                <option value="1000-2000">¥1000 - ¥2000</option>
                <option value="2000-9999">¥2000+</option>
              </select>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                排序方式
              </label>
              <select
                value={filter.sortBy || ""}
                onChange={(e) =>
                  setFilter({ ...filter, sortBy: e.target.value as any })
                }
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              >
                <option value="addedAt">添加时间</option>
                <option value="name">商品名称</option>
                <option value="price">价格</option>
                <option value="quantity">数量</option>
              </select>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                排序顺序
              </label>
              <select
                value={filter.sortOrder || "desc"}
                onChange={(e) =>
                  setFilter({
                    ...filter,
                    sortOrder: e.target.value as "asc" | "desc",
                  })
                }
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              >
                <option value="desc">降序</option>
                <option value="asc">升序</option>
              </select>
            </div>
          </div>
        </div>

        {/* 购物车商品列表 */}
        <div className="border rounded-lg p-4">
          <div className="flex items-center justify-between mb-4">
            <h4 className="font-medium">购物车商品 ({filteredItems.length})</h4>
            {filteredItems.length > 0 && (
              <div className="flex items-center space-x-2">
                <input
                  type="checkbox"
                  checked={
                    selectedItems.length === filteredItems.length &&
                    filteredItems.length > 0
                  }
                  onChange={handleSelectAll}
                  className="rounded"
                />
                <span className="text-sm text-gray-600">全选</span>
              </div>
            )}
          </div>

          {filteredItems.length === 0 ? (
            <div className="text-center text-gray-500 py-8">
              {items.length === 0 ? "购物车为空" : "没有符合条件的商品"}
            </div>
          ) : (
            <div className="space-y-3">
              {filteredItems.map((item) => (
                <div
                  key={item.id}
                  className={\`p-3 border rounded-lg \${
                    selectedItems.includes(item.id)
                      ? "border-blue-500 bg-blue-50"
                      : "border-gray-200"
                  }\`}
                >
                  <div className="flex items-center space-x-3">
                    <input
                      type="checkbox"
                      checked={selectedItems.includes(item.id)}
                      onChange={() => handleSelectItem(item.id)}
                      className="rounded"
                    />
                    <img
                      src={item.product.image}
                      alt={item.product.name}
                      className="w-12 h-12 rounded object-cover"
                    />
                    <div className="flex-1">
                      <h6 className="font-medium">{item.product.name}</h6>
                      <p className="text-sm text-gray-600">
                        {item.product.description}
                      </p>
                      <div className="flex items-center space-x-4 mt-1">
                        <span className="text-sm text-gray-500">
                          类别: {item.product.category}
                        </span>
                        <span className="text-sm text-gray-500">
                          数量: {item.quantity}
                        </span>
                        <span className="text-sm font-medium text-green-600">
                          ¥{(item.product.price * item.quantity).toFixed(2)}
                        </span>
                        {item.product.discount && item.product.discount > 0 && (
                          <span className="text-xs bg-red-100 text-red-600 px-1 rounded">
                            折扣 -{item.product.discount}%
                          </span>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>

        {error && (
          <div className="mt-4 p-4 bg-red-50 border border-red-200 rounded-lg">
            <p className="text-red-800">{error}</p>
            <button
              onClick={clearError}
              className="mt-2 px-3 py-1 bg-red-500 text-white text-sm rounded hover:bg-red-600"
            >
              清除错误
            </button>
          </div>
        )}

        <div className="bg-green-50 p-4 rounded-lg border border-green-200 mt-6">
          <h4 className="font-medium text-green-800 mb-2">⚠️ 观察要点</h4>
          <ul className="text-sm text-green-700 space-y-1">
            <li>
              • <strong>批量操作</strong>：体验批量添加和移除商品
            </li>
            <li>
              • <strong>过滤排序</strong>：使用不同条件过滤和排序商品
            </li>
            <li>
              • <strong>统计分析</strong>：查看购物车的详细统计信息
            </li>
            <li>
              • <strong>多选功能</strong>：选择多个商品进行批量操作
            </li>
            <li>
              • <strong>导出功能</strong>：导出购物车数据为 JSON 文件
            </li>
            <li>
              • <strong>性能优化</strong>：观察渲染次数和计算优化
            </li>
          </ul>
          <p className="mt-2 text-green-600 font-medium">
            ✅ 高级购物车功能完整，支持复杂的购物车管理！
          </p>
        </div>
      </div>
    </div>
  );
};

export default AdvancedCartDemo;
`,Z=`import React, { useEffect, useRef, useState } from "react";

import { Product, CartItem } from "../types";
import { useCartStore } from "../stores/cartStore";

const BasicCartDemo: React.FC = () => {
  const [renderCount, setRenderCount] = useState(0);
  const renderCountRef = useRef(0);
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
  const [quantity, setQuantity] = useState(1);
  const [showCalculation, setShowCalculation] = useState(false);

  // 使用精准选择器
  const items = useCartStore((state) => state.items);
  const totalItems = useCartStore((state) => state.totalItems);
  const totalPrice = useCartStore((state) => state.totalPrice);
  const totalDiscount = useCartStore((state) => state.totalDiscount);
  const isOpen = useCartStore((state) => state.isOpen);
  const isLoading = useCartStore((state) => state.isLoading);
  const error = useCartStore((state) => state.error);

  // 渲染计数 - 只在有意义的状态变化时更新
  renderCountRef.current += 1;
  useEffect(() => {
    setRenderCount(renderCountRef.current);
  }, [items.length, totalItems, totalPrice, isOpen]);

  const {
    addItem,
    removeItem,
    updateQuantity,
    clearCart,
    toggleCart,
    clearError,
    setLoading,
  } = useCartStore();

  // 模拟产品数据
  const products: Product[] = [
    {
      id: "1",
      name: "iPhone 15 Pro",
      price: 999,
      description: "最新款 iPhone，配备 A17 Pro 芯片",
      image:
        "https://images.unsplash.com/photo-1592899677977-9c10ca588bbd?w=200",
      category: "手机",
      stock: 50,
      rating: 4.8,
      reviews: 1250,
      tags: ["手机", "苹果", "旗舰"],
      discount: 5,
      isNew: true,
    },
    {
      id: "2",
      name: 'MacBook Pro 16"',
      price: 2499,
      description: "专业级笔记本电脑，M3 Max 芯片",
      image:
        "https://images.unsplash.com/photo-1517336714731-489689fd1ca8?w=200",
      category: "电脑",
      stock: 30,
      rating: 4.9,
      reviews: 890,
      tags: ["电脑", "苹果", "专业"],
      discount: 10,
      isFeatured: true,
    },
    {
      id: "3",
      name: "AirPods Pro",
      price: 249,
      description: "主动降噪无线耳机",
      image:
        "https://images.unsplash.com/photo-1606220945770-b5b6c2c55bf1?w=200",
      category: "音频",
      stock: 100,
      rating: 4.7,
      reviews: 2100,
      tags: ["耳机", "无线", "降噪"],
      discount: 0,
    },
    {
      id: "4",
      name: "iPad Air",
      price: 599,
      description: "轻薄便携的平板电脑",
      image: "https://images.unsplash.com/photo-1544244015-0df4b3ffc6b0?w=200",
      category: "平板",
      stock: 75,
      rating: 4.6,
      reviews: 1560,
      tags: ["平板", "苹果", "便携"],
      discount: 8,
    },
  ];

  const handleAddToCart = async () => {
    if (selectedProduct) {
      setLoading(true);
      // 模拟异步操作
      await new Promise((resolve) => setTimeout(resolve, 500));
      addItem(selectedProduct, quantity);
      setQuantity(1);
      setLoading(false);
    }
  };

  const handleRemoveFromCart = async (itemId: string) => {
    setLoading(true);
    await new Promise((resolve) => setTimeout(resolve, 200));
    removeItem(itemId);
    setLoading(false);
  };

  const handleUpdateQuantity = async (itemId: string, newQuantity: number) => {
    setLoading(true);
    await new Promise((resolve) => setTimeout(resolve, 200));
    updateQuantity(itemId, newQuantity);
    setLoading(false);
  };

  const handleClearCart = async () => {
    setLoading(true);
    await new Promise((resolve) => setTimeout(resolve, 800));
    clearCart();
    setLoading(false);
  };

  // 计算每个商品的详细信息
  const getItemCalculation = (item: CartItem) => {
    const originalPrice = item.product.price * item.quantity;
    const discountAmount = (originalPrice * (item.product.discount || 0)) / 100;
    const finalPrice = originalPrice - discountAmount;

    return {
      originalPrice,
      discountAmount,
      finalPrice,
      discountPercent: item.product.discount || 0,
    };
  };

  return (
    <div className="space-y-6">
      <div className="bg-white p-6 rounded-lg shadow">
        <h3 className="text-lg font-semibold mb-4">基础购物车功能演示</h3>

        <div className="mb-4 p-4 bg-blue-50 rounded-lg border border-blue-200">
          <h4 className="font-medium text-blue-800 mb-2">✅ 基础购物车功能</h4>
          <ul className="text-sm text-blue-700 space-y-1">
            <li>• 添加商品到购物车</li>
            <li>• 移除购物车商品</li>
            <li>• 更新商品数量</li>
            <li>• 计算总价和折扣</li>
            <li>• 购物车状态管理</li>
          </ul>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
          <div className="border rounded-lg p-4 bg-blue-50">
            <h4 className="font-medium text-blue-800 mb-2">购物车状态</h4>
            <div className="text-sm space-y-1">
              <p>商品数量: {totalItems} 件</p>
              <p>总价格: ¥{totalPrice.toFixed(2)}</p>
              <p>总折扣: ¥{totalDiscount.toFixed(2)}</p>
              <p>购物车状态: {isOpen ? "打开" : "关闭"}</p>
              <p>加载状态: {isLoading ? "加载中..." : "空闲"}</p>
              {error && <p className="text-red-600">错误: {error}</p>}
              <p className="text-blue-600 font-medium">
                渲染次数: {renderCount}
              </p>
              <p className="text-xs text-gray-500 mt-1">
                ⚠️ 渲染次数反映状态变化频率，优化后可减少
              </p>
            </div>
          </div>

          <div className="border rounded-lg p-4 bg-green-50">
            <h4 className="font-medium text-green-800 mb-2">购物车操作</h4>
            <div className="space-y-2">
              <button
                onClick={toggleCart}
                disabled={isLoading}
                className={\`w-full py-2 px-4 rounded text-white \${
                  isLoading
                    ? "bg-gray-400 cursor-not-allowed"
                    : "bg-blue-500 hover:bg-blue-600"
                }\`}
              >
                {isOpen ? "关闭购物车" : "打开购物车"}
              </button>
              <button
                onClick={handleClearCart}
                disabled={items.length === 0 || isLoading}
                className={\`w-full py-2 px-4 rounded text-white \${
                  items.length === 0 || isLoading
                    ? "bg-gray-400 cursor-not-allowed"
                    : "bg-red-500 hover:bg-red-600"
                }\`}
              >
                {isLoading ? "清空中..." : "清空购物车"}
              </button>
              <button
                onClick={() => setShowCalculation(!showCalculation)}
                className="w-full py-2 px-4 bg-purple-500 text-white rounded hover:bg-purple-600"
              >
                {showCalculation ? "隐藏计算详情" : "显示计算详情"}
              </button>
              {error && (
                <button
                  onClick={clearError}
                  className="w-full py-2 px-4 bg-gray-500 text-white rounded hover:bg-gray-600"
                >
                  清除错误
                </button>
              )}
            </div>
          </div>
        </div>

        {/* 计算详情面板 */}
        {showCalculation && items.length > 0 && (
          <div className="mb-6 border rounded-lg p-4 bg-yellow-50">
            <h4 className="font-medium text-yellow-800 mb-3">
              ⚠️ 价格计算详情
            </h4>
            <div className="space-y-3">
              {items.map((item) => {
                const calc = getItemCalculation(item);
                return (
                  <div key={item.id} className="p-3 bg-white rounded border">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-3">
                        <img
                          src={item.product.image}
                          alt={item.product.name}
                          className="w-8 h-8 rounded object-cover"
                        />
                        <div>
                          <h6 className="font-medium text-sm">
                            {item.product.name}
                          </h6>
                          <p className="text-xs text-gray-600">
                            数量: {item.quantity}
                          </p>
                        </div>
                      </div>
                      <div className="text-right text-sm">
                        <div className="space-y-1">
                          <p>原价: ¥{calc.originalPrice.toFixed(2)}</p>
                          {calc.discountPercent > 0 && (
                            <p className="text-red-600">
                              折扣: -¥{calc.discountAmount.toFixed(2)} (
                              {calc.discountPercent}%)
                            </p>
                          )}
                          <p className="font-medium text-green-600">
                            实付: ¥{calc.finalPrice.toFixed(2)}
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
              <div className="border-t pt-3 mt-3">
                <div className="flex justify-between items-center">
                  <span className="font-medium">总计:</span>
                  <div className="text-right">
                    <p className="text-sm">
                      原价: ¥{(totalPrice + totalDiscount).toFixed(2)}
                    </p>
                    <p className="text-sm text-red-600">
                      总折扣: -¥{totalDiscount.toFixed(2)}
                    </p>
                    <p className="text-lg font-bold text-green-600">
                      实付: ¥{totalPrice.toFixed(2)}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* 商品选择 */}
          <div className="border rounded-lg p-4">
            <h4 className="font-medium mb-4">选择商品</h4>
            <div className="space-y-4">
              {products.map((product) => (
                <div
                  key={product.id}
                  className={\`p-3 border rounded-lg cursor-pointer transition-colors \${
                    selectedProduct?.id === product.id
                      ? "border-blue-500 bg-blue-50"
                      : "border-gray-200 hover:border-gray-300"
                  }\`}
                  onClick={() => setSelectedProduct(product)}
                >
                  <div className="flex items-center space-x-3">
                    <img
                      src={product.image}
                      alt={product.name}
                      className="w-12 h-12 rounded object-cover"
                    />
                    <div className="flex-1">
                      <h5 className="font-medium text-sm">{product.name}</h5>
                      <p className="text-xs text-gray-600">
                        {product.description}
                      </p>
                      <div className="flex items-center space-x-2 mt-1">
                        <span className="text-sm font-medium text-green-600">
                          ¥{product.price}
                        </span>
                        {product.discount && product.discount > 0 && (
                          <span className="text-xs bg-red-100 text-red-600 px-1 rounded">
                            -{product.discount}%
                          </span>
                        )}
                        <span className="text-xs text-gray-500">
                          库存: {product.stock}
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {selectedProduct && (
              <div className="mt-4 p-3 bg-gray-50 rounded-lg">
                <h5 className="font-medium mb-2">添加到购物车</h5>
                <div className="flex items-center space-x-2">
                  <label className="text-sm">数量:</label>
                  <input
                    type="number"
                    min="1"
                    max={selectedProduct.stock}
                    value={quantity}
                    onChange={(e) => setQuantity(parseInt(e.target.value) || 1)}
                    className="w-20 px-2 py-1 border border-gray-300 rounded text-sm"
                  />
                  <button
                    onClick={handleAddToCart}
                    disabled={isLoading}
                    className={\`px-4 py-1 rounded text-white text-sm \${
                      isLoading
                        ? "bg-gray-400 cursor-not-allowed"
                        : "bg-green-500 hover:bg-green-600"
                    }\`}
                  >
                    {isLoading ? "添加中..." : "添加到购物车"}
                  </button>
                </div>
              </div>
            )}
          </div>

          {/* 购物车内容 */}
          <div className="border rounded-lg p-4">
            <h4 className="font-medium mb-4">购物车内容</h4>
            {items.length === 0 ? (
              <div className="text-center text-gray-500 py-8">购物车为空</div>
            ) : (
              <div className="space-y-3">
                {items.map((item) => (
                  <div
                    key={item.id}
                    className="p-3 border border-gray-200 rounded-lg"
                  >
                    <div className="flex items-center space-x-3">
                      <img
                        src={item.product.image}
                        alt={item.product.name}
                        className="w-10 h-10 rounded object-cover"
                      />
                      <div className="flex-1">
                        <h6 className="font-medium text-sm">
                          {item.product.name}
                        </h6>
                        <p className="text-xs text-gray-600">
                          ¥{item.product.price} × {item.quantity}
                        </p>
                        {item.product.discount && item.product.discount > 0 && (
                          <p className="text-xs text-green-600">
                            折扣: -{item.product.discount}%
                          </p>
                        )}
                        <p className="text-xs font-medium text-green-600">
                          小计: ¥
                          {getItemCalculation(item).finalPrice.toFixed(2)}
                        </p>
                      </div>
                      <div className="flex items-center space-x-2">
                        <button
                          onClick={() =>
                            handleUpdateQuantity(item.id, item.quantity - 1)
                          }
                          disabled={isLoading}
                          className="w-6 h-6 bg-gray-200 rounded flex items-center justify-center text-sm hover:bg-gray-300 disabled:opacity-50"
                        >
                          -
                        </button>
                        <span className="text-sm font-medium w-8 text-center">
                          {item.quantity}
                        </span>
                        <button
                          onClick={() =>
                            handleUpdateQuantity(item.id, item.quantity + 1)
                          }
                          disabled={isLoading}
                          className="w-6 h-6 bg-gray-200 rounded flex items-center justify-center text-sm hover:bg-gray-300 disabled:opacity-50"
                        >
                          +
                        </button>
                        <button
                          onClick={() => handleRemoveFromCart(item.id)}
                          disabled={isLoading}
                          className="w-6 h-6 bg-red-200 rounded flex items-center justify-center text-sm hover:bg-red-300 disabled:opacity-50"
                        >
                          ×
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>

        <div className="bg-blue-50 p-4 rounded-lg border border-blue-200 mt-6">
          <h4 className="font-medium text-blue-800 mb-2">⚠️ 观察要点</h4>
          <ul className="text-sm text-blue-700 space-y-1">
            <li>
              • <strong>添加商品</strong>：选择商品并添加到购物车
            </li>
            <li>
              • <strong>数量管理</strong>：增加或减少商品数量
            </li>
            <li>
              • <strong>价格计算</strong>：观察总价和折扣的实时计算
            </li>
            <li>
              • <strong>状态同步</strong>：购物车状态实时更新
            </li>
            <li>
              • <strong>持久化</strong>：刷新页面后购物车内容保持
            </li>
            <li>
              • <strong>渲染优化</strong>：观察渲染次数和性能
            </li>
            <li>
              • <strong>计算详情</strong>：点击"显示计算详情"查看详细价格计算
            </li>
          </ul>
          <p className="mt-2 text-blue-600 font-medium">
            ✅ 基础购物车功能完整，支持完整的商品管理和价格计算！
          </p>
        </div>
      </div>
    </div>
  );
};

export default BasicCartDemo;
`,z=()=>e.jsx(V,{title:"购物车管理 Store",description:"学习如何使用 Zustand 实现完整的购物车管理系统。掌握商品管理、价格计算、状态持久化和批量操作最佳实践。",overview:[{title:"核心概念",items:["购物车是电商应用的核心功能，需要管理商品添加、移除、数量更新等操作。","价格计算包括原价、折扣、总价等复杂计算逻辑。","状态持久化确保用户购物车内容在页面刷新后保持。","批量操作提供高效的购物车管理体验。","过滤和排序功能帮助用户快速找到需要的商品。"]},{title:"主要功能",items:["商品添加、移除和数量管理。","实时价格计算和折扣处理。","购物车状态管理和持久化。","批量操作和商品筛选。","购物车统计和导出功能。"]},{title:"适用场景",items:["电商网站和在线商店。","购物车和订单管理系统。","需要复杂商品管理的应用。","多商品批量操作场景。","需要购物车持久化的应用。"]},{title:"注意事项",items:["确保价格计算的准确性。","优化大量商品时的性能。","实现完善的错误处理机制。","考虑购物车数据的持久化策略。","提供良好的用户体验和交互反馈。"]}],examples:[{title:"基础购物车功能演示",component:e.jsx(J,{}),description:"演示购物车的基本操作，包括添加商品、数量管理和价格计算",observationPoints:["观察商品添加到购物车的过程","注意数量变化时的价格重新计算","理解购物车状态的实时更新","体验购物车的持久化功能","观察渲染次数：通常为 8-12 次（商品操作 + 状态更新）"],keyPoints:["商品添加和移除功能完整","数量管理支持增减操作","价格计算包含折扣处理","状态持久化确保数据保持","渲染次数反映了操作的复杂度"],commonTraps:["价格计算逻辑错误","状态更新不及时","缺乏错误处理机制","性能优化不足"],solutions:["使用计算函数确保价格准确性","实现实时状态同步","建立完善的错误处理","优化渲染和计算性能"],codeExample:{code:Z,title:"基础购物车功能演示组件"}},{title:"高级购物车功能演示",component:e.jsx(Q,{}),description:"演示购物车的高级功能，包括批量操作、过滤排序和统计分析",observationPoints:["观察批量添加和移除操作","注意过滤和排序的实时效果","理解购物车统计的计算逻辑","体验多选和批量操作功能","观察渲染次数：通常为 6-10 次（批量操作 + 过滤计算）"],keyPoints:["批量操作提高管理效率","过滤排序提供灵活查询","统计分析提供数据洞察","多选功能支持批量处理","渲染次数体现了功能复杂度"],commonTraps:["批量操作性能问题","过滤逻辑过于复杂","统计计算不准确","用户体验不佳"],solutions:["优化批量操作算法","简化过滤逻辑","确保统计计算准确性","提供直观的用户界面"],codeExample:{code:X,title:"高级购物车功能演示组件"}}],tutorial:{concepts:["购物车是电商应用的核心功能模块","状态管理需要处理复杂的商品操作","价格计算是购物车的关键逻辑","持久化确保用户体验的连续性","批量操作提高管理效率"],steps:["设计购物车数据模型和状态结构","实现商品添加、移除和数量管理","建立价格计算和折扣处理逻辑","开发过滤排序和批量操作功能","完善错误处理和用户体验","优化性能和实现数据持久化"],tips:["优先考虑价格计算的准确性","实现高效的批量操作算法","提供直观的过滤和排序界面","优化大量商品时的性能表现","建立完善的错误处理机制"]},interview:{questions:[{question:"如何实现购物车的价格计算？",answer:"使用计算函数处理原价、数量、折扣等，确保计算准确性。通过 Zustand 的 set 函数更新状态，实时反映价格变化。"},{question:"如何处理购物车的批量操作？",answer:"实现批量添加、移除、更新等操作，使用数组方法处理多个商品，优化性能并提供良好的用户体验。"},{question:"如何实现购物车的过滤和排序？",answer:"使用 useMemo 优化过滤和排序计算，支持多条件过滤和多种排序方式，提供灵活的查询功能。"},{question:"如何确保购物车数据的持久化？",answer:"使用 Zustand 的 persist 中间件，选择性持久化购物车数据，确保页面刷新后数据保持。"},{question:"如何优化购物车的性能？",answer:"使用精准选择器减少不必要的渲染，优化计算逻辑，使用 useMemo 缓存复杂计算，提升用户体验。"}],keyPoints:["购物车是电商应用的核心功能","价格计算需要准确和实时","批量操作提高管理效率","过滤排序提供灵活查询","持久化确保用户体验"]},bestPractices:{dos:["实现准确的价格计算逻辑","提供高效的批量操作功能","建立完善的过滤排序机制","优化大量商品时的性能","实现可靠的数据持久化","提供直观的用户界面"],donts:["不要忽视价格计算的准确性","不要忽略批量操作的性能","不要缺乏错误处理机制","不要忽视用户体验优化","不要忽略数据持久化"],patterns:["计算模式：使用纯函数处理价格计算","批量模式：实现高效的批量操作","过滤模式：提供灵活的查询功能","持久化模式：选择性保存重要数据"]}});export{z as default};
