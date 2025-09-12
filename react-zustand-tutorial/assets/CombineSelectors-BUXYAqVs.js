import{r as j,j as e}from"./index-BWM6UHr8.js";import{c as te,C as ne}from"./ComponentTemplate-ClBHhBQ8.js";import{d as se,s as re}from"./middleware-CPUTVaT6.js";const _=()=>`${Date.now()}-${Math.random().toString(36).substr(2,9)}`,U=te()(se(re((i,s)=>({user:null,products:[],cart:{items:[],totalItems:0,totalPrice:0,discount:0,shipping:0,createdAt:new Date,updatedAt:new Date},orders:[],ui:{sidebarOpen:!1,modalOpen:!1,loading:!1,theme:"light",language:"zh-CN",notifications:{items:[],unreadCount:0}},filters:{search:"",category:"",priceRange:{min:0,max:2e4},rating:0,sortBy:"name",sortOrder:"asc",inStock:!1},setUser:n=>{i(t=>({user:{...n,updatedAt:new Date}}))},updateUser:n=>{i(t=>({user:t.user?{...t.user,...n,updatedAt:new Date}:null}))},updateUserPreferences:n=>{i(t=>({user:t.user?{...t.user,preferences:{...t.user.preferences,...n},updatedAt:new Date}:null}))},logout:()=>{i(n=>({user:null,cart:{items:[],totalItems:0,totalPrice:0,discount:0,shipping:0,createdAt:new Date,updatedAt:new Date}}))},addProduct:n=>{i(t=>{const o={...n,id:_(),createdAt:new Date,updatedAt:new Date};return{products:[...t.products,o]}})},updateProduct:(n,t)=>{i(o=>({products:o.products.map(g=>g.id===n?{...g,...t,updatedAt:new Date}:g)}))},deleteProduct:n=>{i(t=>({products:t.products.filter(o=>o.id!==n)}))},setProducts:n=>{i(()=>({products:n}))},addToCart:(n,t=1)=>{i(o=>{if(!o.products.find(p=>p.id===n))return o;const v=o.cart.items.find(p=>p.productId===n);let l;v?l=o.cart.items.map(p=>p.productId===n?{...p,quantity:p.quantity+t}:p):l=[...o.cart.items,{id:_(),productId:n,quantity:t,addedAt:new Date}];const d=l.reduce((p,w)=>p+w.quantity,0),c=l.reduce((p,w)=>{const T=o.products.find($=>$.id===w.productId);return p+(T?T.price*w.quantity:0)},0);return{cart:{...o.cart,items:l,totalItems:d,totalPrice:c,updatedAt:new Date}}})},removeFromCart:n=>{i(t=>{const o=t.cart.items.filter(l=>l.id!==n),g=o.reduce((l,d)=>l+d.quantity,0),v=o.reduce((l,d)=>{const c=t.products.find(p=>p.id===d.productId);return l+(c?c.price*d.quantity:0)},0);return{cart:{...t.cart,items:o,totalItems:g,totalPrice:v,updatedAt:new Date}}})},updateCartItemQuantity:(n,t)=>{i(o=>{if(t<=0)return s().removeFromCart(n);const g=o.cart.items.map(d=>d.id===n?{...d,quantity:t}:d),v=g.reduce((d,c)=>d+c.quantity,0),l=g.reduce((d,c)=>{const p=o.products.find(w=>w.id===c.productId);return d+(p?p.price*c.quantity:0)},0);return{cart:{...o.cart,items:g,totalItems:v,totalPrice:l,updatedAt:new Date}}})},clearCart:()=>{i(n=>({cart:{items:[],totalItems:0,totalPrice:0,discount:0,shipping:0,createdAt:new Date,updatedAt:new Date}}))},applyDiscount:n=>{i(t=>({cart:{...t.cart,discount:n,updatedAt:new Date}}))},createOrder:n=>{i(t=>{const o={...n,id:_(),createdAt:new Date,updatedAt:new Date};return{orders:[...t.orders,o]}})},updateOrderStatus:(n,t)=>{i(o=>({orders:o.orders.map(g=>g.id===n?{...g,status:t,updatedAt:new Date}:g)}))},cancelOrder:n=>{i(t=>({orders:t.orders.map(o=>o.id===n?{...o,status:"cancelled",updatedAt:new Date}:o)}))},toggleSidebar:()=>{i(n=>({ui:{...n.ui,sidebarOpen:!n.ui.sidebarOpen}}))},toggleModal:()=>{i(n=>({ui:{...n.ui,modalOpen:!n.ui.modalOpen}}))},setLoading:n=>{i(t=>({ui:{...t.ui,loading:n}}))},setTheme:n=>{i(t=>({ui:{...t.ui,theme:n}}))},setLanguage:n=>{i(t=>({ui:{...t.ui,language:n}}))},addNotification:n=>{i(t=>{const o={...n,id:_(),createdAt:new Date};return{ui:{...t.ui,notifications:{items:[...t.ui.notifications.items,o],unreadCount:t.ui.notifications.unreadCount+1}}}})},markNotificationAsRead:n=>{i(t=>({ui:{...t.ui,notifications:{items:t.ui.notifications.items.map(o=>o.id===n?{...o,read:!0}:o),unreadCount:Math.max(0,t.ui.notifications.unreadCount-1)}}}))},clearNotifications:()=>{i(n=>({ui:{...n.ui,notifications:{items:[],unreadCount:0}}}))},setSearch:n=>{i(t=>({filters:{...t.filters,search:n}}))},setCategory:n=>{i(t=>({filters:{...t.filters,category:n}}))},setPriceRange:(n,t)=>{i(o=>({filters:{...o.filters,priceRange:{min:n,max:t}}}))},setRating:n=>{i(t=>({filters:{...t.filters,rating:n}}))},setSortBy:n=>{i(t=>({filters:{...t.filters,sortBy:n}}))},setSortOrder:n=>{i(t=>({filters:{...t.filters,sortOrder:n}}))},setInStock:n=>{i(t=>({filters:{...t.filters,inStock:n}}))},resetFilters:()=>{i(n=>({filters:{search:"",category:"",priceRange:{min:0,max:2e4},rating:0,sortBy:"name",sortOrder:"asc",inStock:!1}}))}})),{name:"combine-store"})),J=(i,s)=>{let n=0,t=0;return o=>{const g=performance.now(),v=i(o),l=performance.now();return n++,t+=l-g,{...v,_performance:{callCount:n,avgTime:t/n}}}},S={userProfile:i=>{const{user:s}=i;return{isLoggedIn:!!s,user:s?{id:s.id,name:s.name,email:s.email,role:s.role,avatar:s.avatar,preferences:s.preferences,createdAt:s.createdAt,updatedAt:s.updatedAt}:null,loginStatus:s?"已登录":"未登录",userRole:(s==null?void 0:s.role)||"guest"}},cartSummary:i=>{const{cart:s,products:n}=i,t=s.items.map(o=>{const g=n.find(v=>v.id===o.productId);return{...o,product:g?{name:g.name,price:g.price,image:g.images[0]}:null}});return{totalItems:s.totalItems,totalPrice:s.totalPrice,discount:s.discount,shipping:s.shipping,finalPrice:s.totalPrice-s.discount+s.shipping,items:t,isEmpty:s.items.length===0}},productFilters:i=>{const{products:s,filters:n}=i;if(console.log("=== 产品过滤器选择器开始 ==="),console.log("产品数量:",s.length),console.log("产品列表:",s.map(l=>({id:l.id,name:l.name,category:l.category,tags:l.tags,price:l.price}))),console.log("过滤器设置:",n),!s||s.length===0)return console.log("没有产品，返回空结果"),{filteredProducts:[],totalCount:0,hasFilters:!1};let t=[...s];if(console.log("初始产品数量:",t.length),n.search&&n.search.trim()){const l=n.search.toLowerCase().trim();console.log("执行搜索过滤，关键词:",l);const d=t.length;t=t.filter(c=>{const p=c.name.toLowerCase().includes(l),w=c.description.toLowerCase().includes(l),T=c.tags.some(f=>f.toLowerCase().includes(l)),$=p||w||T;return console.log(`产品 "${c.name}": 名称匹配=${p}, 描述匹配=${w}, 标签匹配=${T}, 总匹配=${$}`),$}),console.log(`搜索过滤结果: ${d} -> ${t.length}`)}if(n.category&&n.category.trim()){console.log("执行分类过滤，分类:",n.category);const l=t.length;t=t.filter(d=>{const c=d.category===n.category;return console.log(`产品 "${d.name}": 分类=${d.category}, 匹配=${c}`),c}),console.log(`分类过滤结果: ${l} -> ${t.length}`)}console.log("执行价格过滤，范围:",n.priceRange);const o=t.length;if(t=t.filter(l=>{const d=l.price>=n.priceRange.min&&l.price<=n.priceRange.max;return console.log(`产品 "${l.name}": 价格=${l.price}, 匹配=${d}`),d}),console.log(`价格过滤结果: ${o} -> ${t.length}`),n.rating>0){console.log("执行评分过滤，最低评分:",n.rating);const l=t.length;t=t.filter(d=>{const c=d.rating>=n.rating;return console.log(`产品 "${d.name}": 评分=${d.rating}, 匹配=${c}`),c}),console.log(`评分过滤结果: ${l} -> ${t.length}`)}if(n.inStock){console.log("执行库存过滤");const l=t.length;t=t.filter(d=>{const c=d.stock>0;return console.log(`产品 "${d.name}": 库存=${d.stock}, 匹配=${c}`),c}),console.log(`库存过滤结果: ${l} -> ${t.length}`)}console.log("执行排序，排序方式:",n.sortBy,n.sortOrder),t.sort((l,d)=>{let c,p;switch(n.sortBy){case"name":c=l.name,p=d.name;break;case"price":c=l.price,p=d.price;break;case"rating":c=l.rating,p=d.rating;break;case"createdAt":c=l.createdAt.getTime(),p=d.createdAt.getTime();break;default:c=l.name,p=d.name}return n.sortOrder==="asc"?c>p?1:-1:c<p?1:-1});const g=!!(n.search&&n.search.trim()||n.category&&n.category.trim()||n.rating>0||n.inStock||n.priceRange.min>0||n.priceRange.max<1e3),v={filteredProducts:t,totalCount:t.length,hasFilters:g};return console.log("=== 产品过滤器选择器结束 ==="),console.log("最终结果:",v),v},userPreferences:i=>{var t,o,g;const{user:s,ui:n}=i;return{theme:((t=s==null?void 0:s.preferences)==null?void 0:t.theme)||n.theme,language:((o=s==null?void 0:s.preferences)==null?void 0:o.language)||n.language,notifications:((g=s==null?void 0:s.preferences)==null?void 0:g.notifications)??!0,sidebarOpen:n.sidebarOpen,modalOpen:n.modalOpen,loading:n.loading}},dashboardStats:i=>{const{products:s,cart:n,user:t,orders:o}=i,g={total:s.length,inStock:s.filter(c=>c.stock>0).length,outOfStock:s.filter(c=>c.stock===0).length,averagePrice:s.length>0?s.reduce((c,p)=>c+p.price,0)/s.length:0,categories:[...new Set(s.map(c=>c.category))]},v={totalItems:n.totalItems,totalValue:n.totalPrice,averageItemValue:n.totalItems>0?n.totalPrice/n.totalItems:0},l={isLoggedIn:!!t,userRole:(t==null?void 0:t.role)||"guest",loginTime:t==null?void 0:t.createdAt},d={total:o.length,pending:o.filter(c=>c.status==="pending").length,completed:o.filter(c=>c.status==="completed").length,cancelled:o.filter(c=>c.status==="cancelled").length,totalValue:o.reduce((c,p)=>c+p.totalAmount,0)};return{products:g,cart:v,user:l,orders:d,lastUpdated:new Date}}},O={userProfile:J(S.userProfile),cartSummary:J(S.cartSummary),productFilters:J(S.productFilters),userPreferences:J(S.userPreferences),dashboardStats:J(S.dashboardStats)},ae=()=>{var m;const{user:i,products:s,cart:n,filters:t,setUser:o,addProduct:g,addToCart:v,setSearch:l,setCategory:d,setPriceRange:c,setRating:p,setSortBy:w,setSortOrder:T,setInStock:$,resetFilters:f}=U(),[k,F]=j.useState("userProfile"),[C,A]=j.useState(null),[I,P]=j.useState(null),V=()=>{try{P(null);const a=U.getState();let h;switch(k){case"userProfile":h=S.userProfile(a);break;case"cartSummary":h=S.cartSummary(a);break;case"productFilters":h=S.productFilters(a);break;case"userPreferences":h=S.userPreferences(a);break;case"dashboardStats":h=S.dashboardStats(a);break;default:h=null}A(h)}catch(a){console.error("选择器执行错误:",a),P(a instanceof Error?a.message:"未知错误"),A(null)}};j.useEffect(()=>{V()},[k,i,s,n,t]);const M=()=>{o({id:"1",name:"测试用户",email:"test@example.com",avatar:"https://via.placeholder.com/40",role:"admin",preferences:{theme:"dark",language:"zh-CN",notifications:!0},createdAt:new Date,updatedAt:new Date})},L=()=>{const a=[{name:"iPhone 15 Pro",description:"最新款苹果专业手机",price:8999,category:"手机",stock:50,images:["https://via.placeholder.com/200"],tags:["手机","苹果","专业","Pro"],rating:4.8,reviews:1200},{name:"iPhone 15 Pro Max",description:"苹果超大屏专业手机",price:9999,category:"手机",stock:30,images:["https://via.placeholder.com/200"],tags:["手机","苹果","专业","Pro","Max"],rating:4.9,reviews:800},{name:"MacBook Pro",description:"专业级笔记本电脑",price:15999,category:"电脑",stock:30,images:["https://via.placeholder.com/200"],tags:["电脑","苹果","专业","Pro"],rating:4.9,reviews:800},{name:"AirPods Pro",description:"无线降噪耳机",price:1999,category:"耳机",stock:100,images:["https://via.placeholder.com/200"],tags:["耳机","无线","降噪","Pro"],rating:4.7,reviews:2e3},{name:"iPad Pro",description:"专业级平板电脑",price:6399,category:"平板",stock:25,images:["https://via.placeholder.com/200"],tags:["平板","苹果","专业","Pro"],rating:4.6,reviews:600},{name:"Apple Watch Pro",description:"专业智能手表",price:3999,category:"配件",stock:80,images:["https://via.placeholder.com/200"],tags:["手表","苹果","智能","Pro"],rating:4.5,reviews:900},{name:"Samsung Galaxy S24 Pro",description:"三星专业旗舰手机",price:7999,category:"手机",stock:40,images:["https://via.placeholder.com/200"],tags:["手机","三星","安卓","Pro"],rating:4.6,reviews:1500},{name:"Dell XPS 13 Pro",description:"戴尔专业超薄笔记本",price:9999,category:"电脑",stock:20,images:["https://via.placeholder.com/200"],tags:["电脑","戴尔","轻薄","Pro"],rating:4.4,reviews:600},{name:"Sony WH-1000XM4 Pro",description:"索尼专业降噪耳机",price:2599,category:"耳机",stock:60,images:["https://via.placeholder.com/200"],tags:["耳机","索尼","降噪","Pro"],rating:4.7,reviews:1800},{name:"Surface Pro 9",description:"微软二合一平板",price:7999,category:"平板",stock:15,images:["https://via.placeholder.com/200"],tags:["平板","微软","二合一","Pro"],rating:4.3,reviews:400},{name:"Garmin Fenix 7 Pro",description:"佳明专业运动手表",price:4999,category:"配件",stock:35,images:["https://via.placeholder.com/200"],tags:["手表","佳明","运动","Pro"],rating:4.5,reviews:700},{name:"iPhone 15",description:"最新款苹果手机",price:7999,category:"手机",stock:50,images:["https://via.placeholder.com/200"],tags:["手机","苹果","智能"],rating:4.8,reviews:1200}];console.log("开始添加测试产品..."),a.forEach((h,N)=>{console.log(`添加产品 ${N+1}:`,h.name),g(h)}),console.log("测试产品添加完成")},R=a=>{v(a,1)},E=[{key:"userProfile",name:"用户档案选择器",description:"获取用户信息和登录状态"},{key:"cartSummary",name:"购物车摘要选择器",description:"计算购物车总价和商品数量"},{key:"productFilters",name:"产品过滤器选择器",description:"根据过滤条件筛选和排序产品"},{key:"userPreferences",name:"用户偏好选择器",description:"获取用户主题和语言偏好"},{key:"dashboardStats",name:"仪表板统计选择器",description:"获取应用统计数据"}],q=(()=>{var a;try{return k==="productFilters"&&C?(console.log("使用过滤后的产品:",((a=C.filteredProducts)==null?void 0:a.length)||0),C.filteredProducts||[]):(console.log("使用所有产品:",s.length),s)}catch(h){return console.error("获取显示产品错误:",h),s}})();return e.jsxs("div",{className:"space-y-6",children:[I&&e.jsxs("div",{className:"bg-red-50 border border-red-200 rounded-lg p-4",children:[e.jsx("h3",{className:"text-lg font-semibold text-red-800 mb-2",children:"错误"}),e.jsx("p",{className:"text-red-700",children:I})]}),e.jsxs("div",{className:"bg-white p-6 rounded-lg shadow",children:[e.jsx("h3",{className:"text-lg font-semibold mb-4",children:"测试数据"}),e.jsxs("div",{className:"flex space-x-2",children:[e.jsx("button",{onClick:M,className:"px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600",children:"创建测试用户"}),e.jsx("button",{onClick:L,className:"px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600",children:"创建测试产品"})]}),e.jsxs("div",{className:"mt-2 text-sm text-gray-600",children:[e.jsxs("p",{children:["当前产品数量: ",s.length]}),e.jsxs("p",{children:["当前用户: ",i?i.name:"未登录"]}),e.jsxs("p",{children:["当前选择器: ",k]}),e.jsxs("p",{children:["显示产品数量: ",q.length]})]})]}),e.jsxs("div",{className:"bg-white p-6 rounded-lg shadow",children:[e.jsx("h3",{className:"text-lg font-semibold mb-4",children:"选择器选择"}),e.jsx("div",{className:"grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4",children:E.map(a=>e.jsxs("button",{onClick:()=>F(a.key),className:`p-4 rounded-lg border-2 text-left transition-colors ${k===a.key?"border-blue-500 bg-blue-50":"border-gray-200 hover:border-gray-300"}`,children:[e.jsx("h4",{className:"font-medium mb-1",children:a.name}),e.jsx("p",{className:"text-sm text-gray-600",children:a.description})]},a.key))})]}),e.jsxs("div",{className:"bg-white p-6 rounded-lg shadow",children:[e.jsxs("h3",{className:"text-lg font-semibold mb-4",children:["选择器结果: ",(m=E.find(a=>a.key===k))==null?void 0:m.name]}),C?e.jsx("div",{className:"bg-gray-50 p-4 rounded",children:e.jsx("pre",{className:"text-sm overflow-x-auto",children:JSON.stringify(C,null,2)})}):e.jsx("div",{className:"bg-gray-50 p-4 rounded",children:e.jsx("p",{className:"text-gray-500",children:"暂无结果"})})]}),s.length>0&&e.jsxs("div",{className:"bg-white p-6 rounded-lg shadow",children:[e.jsx("h3",{className:"text-lg font-semibold mb-4",children:"产品列表和过滤器"}),e.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-6",children:[e.jsxs("div",{children:[e.jsx("label",{className:"block text-sm font-medium mb-1",children:"搜索"}),e.jsx("input",{type:"text",value:t.search,onChange:a=>l(a.target.value),placeholder:"搜索产品...",className:"w-full px-3 py-2 border rounded"})]}),e.jsxs("div",{children:[e.jsx("label",{className:"block text-sm font-medium mb-1",children:"分类"}),e.jsxs("select",{value:t.category,onChange:a=>d(a.target.value),className:"w-full px-3 py-2 border rounded",children:[e.jsx("option",{value:"",children:"全部分类"}),e.jsx("option",{value:"手机",children:"手机"}),e.jsx("option",{value:"电脑",children:"电脑"}),e.jsx("option",{value:"耳机",children:"耳机"}),e.jsx("option",{value:"平板",children:"平板"}),e.jsx("option",{value:"配件",children:"配件"})]})]}),e.jsxs("div",{children:[e.jsx("label",{className:"block text-sm font-medium mb-1",children:"价格范围"}),e.jsxs("div",{className:"flex space-x-2",children:[e.jsx("input",{type:"number",value:t.priceRange.min,onChange:a=>c(Number(a.target.value),t.priceRange.max),placeholder:"最低价",className:"w-full px-3 py-2 border rounded"}),e.jsx("input",{type:"number",value:t.priceRange.max,onChange:a=>c(t.priceRange.min,Number(a.target.value)),placeholder:"最高价",className:"w-full px-3 py-2 border rounded"})]})]}),e.jsxs("div",{children:[e.jsx("label",{className:"block text-sm font-medium mb-1",children:"排序"}),e.jsxs("select",{value:`${t.sortBy}-${t.sortOrder}`,onChange:a=>{const[h,N]=a.target.value.split("-");w(h),T(N)},className:"w-full px-3 py-2 border rounded",children:[e.jsx("option",{value:"name-asc",children:"名称 A-Z"}),e.jsx("option",{value:"name-desc",children:"名称 Z-A"}),e.jsx("option",{value:"price-asc",children:"价格 低-高"}),e.jsx("option",{value:"price-desc",children:"价格 高-低"}),e.jsx("option",{value:"rating-desc",children:"评分 高-低"})]})]})]}),e.jsxs("div",{className:"flex space-x-4 mb-4",children:[e.jsxs("label",{className:"flex items-center",children:[e.jsx("input",{type:"checkbox",checked:t.inStock,onChange:a=>$(a.target.checked),className:"mr-2"}),"仅显示有库存"]}),e.jsxs("div",{className:"flex items-center space-x-2",children:[e.jsx("label",{className:"text-sm",children:"最低评分:"}),e.jsxs("select",{value:t.rating,onChange:a=>p(Number(a.target.value)),className:"px-2 py-1 border rounded",children:[e.jsx("option",{value:0,children:"不限"}),e.jsx("option",{value:3,children:"3星以上"}),e.jsx("option",{value:4,children:"4星以上"}),e.jsx("option",{value:4.5,children:"4.5星以上"})]})]}),e.jsx("button",{onClick:f,className:"px-4 py-2 bg-gray-500 text-white rounded hover:bg-gray-600",children:"重置过滤器"})]}),e.jsxs("div",{className:"mb-4 p-3 bg-blue-50 rounded",children:[e.jsx("h4",{className:"font-medium text-blue-800 mb-2",children:"当前过滤器状态:"}),e.jsxs("div",{className:"text-sm text-blue-700",children:[e.jsxs("p",{children:["搜索: ",t.search||"无"]}),e.jsxs("p",{children:["分类: ",t.category||"全部"]}),e.jsxs("p",{children:["价格范围: ¥",t.priceRange.min," - ¥",t.priceRange.max]}),e.jsxs("p",{children:["评分: ",t.rating>0?`${t.rating}星以上`:"不限"]}),e.jsxs("p",{children:["排序: ",t.sortBy," (",t.sortOrder,")"]}),e.jsxs("p",{children:["仅库存: ",t.inStock?"是":"否"]})]})]}),e.jsx("div",{className:"grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4",children:q.map(a=>e.jsxs("div",{className:"border rounded-lg p-4",children:[e.jsx("h4",{className:"font-medium mb-2",children:a.name}),e.jsx("p",{className:"text-sm text-gray-600 mb-2",children:a.description}),e.jsxs("p",{className:"text-lg font-bold text-green-600 mb-2",children:["¥",a.price]}),e.jsxs("p",{className:"text-sm text-gray-500 mb-2",children:["评分: ",a.rating," (",a.reviews," 评价)"]}),e.jsxs("p",{className:"text-sm text-gray-500 mb-2",children:["库存: ",a.stock]}),e.jsxs("p",{className:"text-sm text-gray-500 mb-2",children:["分类: ",a.category]}),e.jsx("button",{onClick:()=>R(a.id),className:"w-full px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600",children:"加入购物车"})]},a.id))}),e.jsx("div",{className:"mt-4 p-3 bg-gray-50 rounded",children:e.jsxs("p",{className:"text-sm text-gray-600",children:["显示 ",q.length," / ",s.length," 个产品",k==="productFilters"&&C&&e.jsxs("span",{className:"ml-2 text-blue-600",children:["(过滤器: ",C.hasFilters?"已应用":"未应用",")"]})]})})]}),n.items.length>0&&e.jsxs("div",{className:"bg-white p-6 rounded-lg shadow",children:[e.jsx("h3",{className:"text-lg font-semibold mb-4",children:"购物车"}),e.jsx("div",{className:"space-y-2",children:n.items.map(a=>{const h=s.find(N=>N.id===a.productId);return e.jsxs("div",{className:"flex justify-between items-center p-2 border rounded",children:[e.jsx("span",{children:h==null?void 0:h.name}),e.jsxs("span",{children:["数量: ",a.quantity]}),e.jsxs("span",{children:["¥",h?h.price*a.quantity:0]})]},a.id)})}),e.jsx("div",{className:"mt-4 p-4 bg-gray-50 rounded",children:e.jsxs("p",{className:"text-lg font-bold",children:["总计: ¥",n.totalPrice," (",n.totalItems," 件商品)"]})})]}),e.jsxs("div",{className:"bg-white p-6 rounded-lg shadow",children:[e.jsx("h3",{className:"text-lg font-semibold mb-4",children:"当前状态信息"}),e.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-4",children:[e.jsxs("div",{children:[e.jsx("h4",{className:"font-medium mb-2",children:"用户状态"}),e.jsx("p",{className:"text-sm text-gray-600",children:i?`已登录: ${i.name} (${i.role})`:"未登录"})]}),e.jsxs("div",{children:[e.jsx("h4",{className:"font-medium mb-2",children:"数据统计"}),e.jsxs("p",{className:"text-sm text-gray-600",children:["产品: ",s.length," | 购物车: ",n.totalItems," 件 | 总价: ¥",n.totalPrice]})]})]})]})]})},oe=()=>{const{user:i,products:s,cart:n,ui:t,filters:o,setUser:g,addProduct:v,addToCart:l,setSearch:d,setCategory:c,setPriceRange:p,setSortBy:w,setSortOrder:T,setInStock:$,resetFilters:f}=U(),[k,F]=j.useState([]),[C,A]=j.useState([]),I=j.useRef(new Map),P=(m,a,h)=>{const N={id:`log_${Date.now()}_${Math.random().toString(36).substr(2,9)}`,timestamp:new Date,subscription:m,message:a,value:h};A(D=>[N,...D.slice(0,49)])},V=(m,a)=>{const h=`sub_${Date.now()}_${Math.random().toString(36).substr(2,9)}`,N=a(U.getState()),D=U.subscribe(a,(r,b)=>{P(m,"状态变化",{value:r,previousValue:b}),F(u=>u.map(x=>x.id===h?{...x,lastValue:r,callCount:x.callCount+1}:x))},{equalityFn:(r,b)=>JSON.stringify(r)===JSON.stringify(b),fireImmediately:!1});I.current.set(h,D),F(r=>[...r,{id:h,name:m,selector:m,lastValue:N,callCount:0,isActive:!0}]),P(m,"订阅已创建",N)},M=m=>{const a=I.current.get(m);a&&(a(),I.current.delete(m)),F(N=>N.map(D=>D.id===m?{...D,isActive:!1}:D));const h=k.find(N=>N.id===m);h&&P(h.name,"订阅已取消",null)},L=()=>{I.current.forEach(m=>m()),I.current.clear(),F([]),P("系统","所有订阅已清除",null)},R=()=>{A([])},E=[{name:"用户档案",selector:S.userProfile},{name:"购物车摘要",selector:S.cartSummary},{name:"产品过滤器",selector:S.productFilters},{name:"用户偏好",selector:S.userPreferences},{name:"仪表板统计",selector:S.dashboardStats}],z=()=>{g({id:"1",name:"测试用户",email:"test@example.com",avatar:"https://via.placeholder.com/40",role:"admin",preferences:{theme:"dark",language:"zh-CN",notifications:!0},createdAt:new Date,updatedAt:new Date});const m=[{name:"iPhone 15",description:"最新款苹果手机",price:7999,category:"手机",stock:50,images:["https://via.placeholder.com/200"],tags:["手机","苹果","智能"],rating:4.8,reviews:1200},{name:"MacBook Pro",description:"专业级笔记本电脑",price:15999,category:"电脑",stock:30,images:["https://via.placeholder.com/200"],tags:["电脑","苹果","专业"],rating:4.9,reviews:800}];m.forEach(a=>{v(a)}),P("系统","测试数据已创建",{user:!0,products:m.length})},q=()=>{s.length>0&&l(s[0].id,1),d("iPhone"),c("手机"),p(5e3,1e4),P("系统","模拟状态变化",{cart:!0,search:"iPhone",category:"手机",priceRange:[5e3,1e4]})};return j.useEffect(()=>()=>{I.current.forEach(m=>m())},[]),e.jsxs("div",{className:"space-y-6",children:[e.jsxs("div",{className:"bg-white p-6 rounded-lg shadow",children:[e.jsx("h3",{className:"text-lg font-semibold mb-4",children:"订阅控制面板"}),e.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-4",children:[e.jsxs("div",{children:[e.jsx("h4",{className:"font-medium mb-2",children:"预定义选择器"}),e.jsx("div",{className:"space-y-2",children:E.map(m=>e.jsxs("button",{onClick:()=>V(m.name,m.selector),className:"w-full px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 text-left",children:["订阅 ",m.name]},m.name))})]}),e.jsxs("div",{children:[e.jsx("h4",{className:"font-medium mb-2",children:"测试操作"}),e.jsxs("div",{className:"space-y-2",children:[e.jsx("button",{onClick:z,className:"w-full px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600",children:"创建测试数据"}),e.jsx("button",{onClick:q,className:"w-full px-4 py-2 bg-yellow-500 text-white rounded hover:bg-yellow-600",children:"模拟状态变化"}),e.jsx("button",{onClick:L,className:"w-full px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600",children:"清除所有订阅"})]})]})]})]}),e.jsxs("div",{className:"bg-white p-6 rounded-lg shadow",children:[e.jsx("h3",{className:"text-lg font-semibold mb-4",children:"活跃订阅"}),k.length===0?e.jsx("p",{className:"text-gray-500",children:"暂无活跃订阅"}):e.jsx("div",{className:"space-y-2",children:k.map(m=>e.jsxs("div",{className:`p-4 border rounded-lg ${m.isActive?"border-green-200 bg-green-50":"border-gray-200 bg-gray-50"}`,children:[e.jsxs("div",{className:"flex justify-between items-start",children:[e.jsxs("div",{children:[e.jsx("h4",{className:"font-medium",children:m.name}),e.jsxs("p",{className:"text-sm text-gray-600",children:["调用次数: ",m.callCount]}),e.jsxs("p",{className:"text-sm text-gray-600",children:["状态: ",m.isActive?"活跃":"已取消"]})]}),m.isActive&&e.jsx("button",{onClick:()=>M(m.id),className:"px-3 py-1 bg-red-500 text-white rounded hover:bg-red-600 text-sm",children:"取消订阅"})]}),e.jsxs("div",{className:"mt-2",children:[e.jsx("p",{className:"text-sm font-medium",children:"最新值:"}),e.jsx("pre",{className:"text-xs bg-gray-100 p-2 rounded mt-1 overflow-x-auto",children:JSON.stringify(m.lastValue,null,2)})]})]},m.id))})]}),e.jsxs("div",{className:"bg-white p-6 rounded-lg shadow",children:[e.jsxs("div",{className:"flex justify-between items-center mb-4",children:[e.jsx("h3",{className:"text-lg font-semibold",children:"订阅日志"}),e.jsx("button",{onClick:R,className:"px-4 py-2 bg-gray-500 text-white rounded hover:bg-gray-600",children:"清除日志"})]}),C.length===0?e.jsx("p",{className:"text-gray-500",children:"暂无日志"}):e.jsx("div",{className:"space-y-2 max-h-96 overflow-y-auto",children:C.map(m=>e.jsxs("div",{className:"p-3 border rounded-lg bg-gray-50",children:[e.jsxs("div",{className:"flex justify-between items-start mb-2",children:[e.jsx("span",{className:"font-medium text-blue-600",children:m.subscription}),e.jsx("span",{className:"text-sm text-gray-500",children:m.timestamp.toLocaleTimeString()})]}),e.jsx("p",{className:"text-sm mb-2",children:m.message}),m.value&&e.jsx("pre",{className:"text-xs bg-white p-2 rounded border overflow-x-auto",children:JSON.stringify(m.value,null,2)})]},m.id))})]}),e.jsxs("div",{className:"bg-white p-6 rounded-lg shadow",children:[e.jsx("h3",{className:"text-lg font-semibold mb-4",children:"当前状态"}),e.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-4",children:[e.jsxs("div",{children:[e.jsx("h4",{className:"font-medium mb-2",children:"用户信息"}),e.jsx("pre",{className:"text-sm bg-gray-100 p-2 rounded overflow-x-auto",children:JSON.stringify(i,null,2)})]}),e.jsxs("div",{children:[e.jsx("h4",{className:"font-medium mb-2",children:"购物车信息"}),e.jsx("pre",{className:"text-sm bg-gray-100 p-2 rounded overflow-x-auto",children:JSON.stringify(n,null,2)})]})]})]})]})},ie=()=>{var D;const{user:i,products:s,cart:n,filters:t,setUser:o,addProduct:g,addToCart:v,setSearch:l,setCategory:d,setPriceRange:c,setSortBy:p,setSortOrder:w,setInStock:T,resetFilters:$}=U(),[f,k]=j.useState("userProfile"),[F,C]=j.useState(null),[A,I]=j.useState(null),[P,V]=j.useState(!1),[M,L]=j.useState({callCounts:{},executionTimes:{},averageTimes:{},minTimes:{},maxTimes:{}}),R=(r,b=1)=>{const u=[];for(let x=0;x<b;x++){const y=performance.now();r();const B=performance.now();u.push(B-y)}return{times:u,average:u.reduce((x,y)=>x+y,0)/u.length,min:Math.min(...u),max:Math.max(...u),total:u.reduce((x,y)=>x+y,0)}},E=()=>{const r=U.getState();let b,u;try{const x=f==="productFilters"?10:5;switch(f){case"userProfile":u=R(()=>{b=O.userProfile(r)},x);break;case"cartSummary":u=R(()=>{b=O.cartSummary(r)},x);break;case"productFilters":u=R(()=>{b=O.productFilters(r)},x);break;case"userPreferences":u=R(()=>{b=O.userPreferences(r)},x);break;case"dashboardStats":u=R(()=>{b=O.dashboardStats(r)},x);break;default:b=null,u=null}P&&u&&L(y=>{const B={...y.callCounts,[f]:(y.callCounts[f]||0)+1},W={...y.executionTimes,[f]:[...y.executionTimes[f]||[],...u.times].slice(-20)},Q={...y.averageTimes,[f]:W[f].reduce((Y,ee)=>Y+ee,0)/W[f].length},H={...y.minTimes,[f]:Math.min(y.minTimes[f]||1/0,...u.times)},K={...y.maxTimes,[f]:Math.max(y.maxTimes[f]||0,...u.times)};return{callCounts:B,executionTimes:W,averageTimes:Q,minTimes:H,maxTimes:K}}),C(b),I({executionTime:(u==null?void 0:u.average.toFixed(3))||"0.000",minTime:(u==null?void 0:u.min.toFixed(3))||"0.000",maxTime:(u==null?void 0:u.max.toFixed(3))||"0.000",iterations:(u==null?void 0:u.times.length)||0,timestamp:new Date().toLocaleTimeString(),performance:b==null?void 0:b._performance})}catch(x){console.error("选择器执行错误:",x),C(null),I(null)}};j.useEffect(()=>{E()},[f,i,s,n,t,P]);const z=()=>{o({id:"1",name:"测试用户",email:"test@example.com",avatar:"https://via.placeholder.com/40",role:"admin",preferences:{theme:"dark",language:"zh-CN",notifications:!0},createdAt:new Date,updatedAt:new Date})},q=()=>{[{name:"iPhone 15 Pro",description:"最新款苹果手机，配备A17 Pro芯片",price:8999,category:"手机",stock:50,images:["https://via.placeholder.com/200"],tags:["手机","苹果","智能","Pro"],rating:4.8,reviews:1200},{name:"MacBook Pro",description:"专业级笔记本电脑，M3 Pro芯片",price:15999,category:"电脑",stock:30,images:["https://via.placeholder.com/200"],tags:["电脑","苹果","专业","Pro"],rating:4.9,reviews:800},{name:"AirPods Pro",description:"无线降噪耳机，主动降噪技术",price:1999,category:"耳机",stock:100,images:["https://via.placeholder.com/200"],tags:["耳机","无线","降噪","Pro"],rating:4.7,reviews:2e3},{name:"iPad Pro",description:"专业平板电脑，M2芯片",price:6399,category:"平板",stock:40,images:["https://via.placeholder.com/200"],tags:["平板","苹果","专业","Pro"],rating:4.6,reviews:600},{name:"Samsung Galaxy S24 Pro",description:"三星旗舰手机，AI功能",price:7999,category:"手机",stock:60,images:["https://via.placeholder.com/200"],tags:["手机","三星","AI","Pro"],rating:4.5,reviews:900}].forEach(b=>{g(b)})},m=r=>{v(r,1)},a=[{key:"userProfile",name:"用户档案选择器",description:"获取用户信息和登录状态",complexity:"简单"},{key:"cartSummary",name:"购物车摘要选择器",description:"计算购物车总价和商品数量",complexity:"中等"},{key:"productFilters",name:"产品过滤器选择器",description:"根据过滤条件筛选和排序产品",complexity:"复杂"},{key:"userPreferences",name:"用户偏好选择器",description:"获取用户主题和语言偏好",complexity:"简单"},{key:"dashboardStats",name:"仪表板统计选择器",description:"获取应用统计数据",complexity:"中等"}],h=()=>{L({callCounts:{},executionTimes:{},averageTimes:{},minTimes:{},maxTimes:{}})},N=()=>{const b={};a.forEach(u=>{const x=U.getState(),y=R(()=>{switch(u.key){case"userProfile":O.userProfile(x);break;case"cartSummary":O.cartSummary(x);break;case"productFilters":O.productFilters(x);break;case"userPreferences":O.userPreferences(x);break;case"dashboardStats":O.dashboardStats(x);break}},100);b[u.key]=y}),console.log("压力测试结果:",b),alert("压力测试完成！运行了 100 次迭代。查看控制台了解详细结果。")};return e.jsxs("div",{className:"space-y-6",children:[e.jsxs("div",{className:"bg-white p-6 rounded-lg shadow",children:[e.jsx("h3",{className:"text-lg font-semibold mb-4",children:"测试数据"}),e.jsxs("div",{className:"flex space-x-2",children:[e.jsx("button",{onClick:z,className:"px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600",children:"创建测试用户"}),e.jsx("button",{onClick:q,className:"px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600",children:"创建测试产品"}),e.jsx("button",{onClick:N,className:"px-4 py-2 bg-purple-500 text-white rounded hover:bg-purple-600",children:"运行压力测试"})]}),e.jsxs("div",{className:"mt-2 text-sm text-gray-600",children:[e.jsxs("p",{children:["当前产品数量: ",s.length]}),e.jsxs("p",{children:["当前用户: ",i?i.name:"未登录"]})]})]}),e.jsxs("div",{className:"bg-white p-6 rounded-lg shadow",children:[e.jsx("h3",{className:"text-lg font-semibold mb-4",children:"性能监控控制"}),e.jsxs("div",{className:"flex space-x-4 items-center",children:[e.jsxs("label",{className:"flex items-center",children:[e.jsx("input",{type:"checkbox",checked:P,onChange:r=>V(r.target.checked),className:"mr-2"}),"启用性能监控"]}),e.jsx("button",{onClick:h,className:"px-4 py-2 bg-gray-500 text-white rounded hover:bg-gray-600",children:"重置统计"})]}),e.jsx("div",{className:"mt-2 text-sm text-gray-600",children:e.jsx("p",{children:"��� 提示：启用监控后，每次选择器执行都会进行多次测量以获得更准确的性能数据"})})]}),e.jsxs("div",{className:"bg-white p-6 rounded-lg shadow",children:[e.jsx("h3",{className:"text-lg font-semibold mb-4",children:"选择器选择"}),e.jsx("div",{className:"grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4",children:a.map(r=>e.jsxs("button",{onClick:()=>k(r.key),className:`p-4 rounded-lg border-2 text-left transition-colors ${f===r.key?"border-blue-500 bg-blue-50":"border-gray-200 hover:border-gray-300"}`,children:[e.jsxs("div",{className:"flex justify-between items-start mb-1",children:[e.jsx("h4",{className:"font-medium",children:r.name}),e.jsx("span",{className:`text-xs px-2 py-1 rounded ${r.complexity==="简单"?"bg-green-100 text-green-800":r.complexity==="中等"?"bg-yellow-100 text-yellow-800":"bg-red-100 text-red-800"}`,children:r.complexity})]}),e.jsx("p",{className:"text-sm text-gray-600",children:r.description})]},r.key))})]}),e.jsxs("div",{className:"bg-white p-6 rounded-lg shadow",children:[e.jsxs("h3",{className:"text-lg font-semibold mb-4",children:["选择器结果: ",(D=a.find(r=>r.key===f))==null?void 0:D.name]}),F?e.jsxs("div",{className:"space-y-4",children:[e.jsx("div",{className:"bg-gray-50 p-4 rounded",children:e.jsx("pre",{className:"text-sm overflow-x-auto",children:JSON.stringify(F,null,2)})}),A&&e.jsxs("div",{className:"bg-blue-50 p-4 rounded",children:[e.jsx("h4",{className:"font-medium text-blue-800 mb-2",children:"性能数据"}),e.jsxs("div",{className:"text-sm text-blue-700 grid grid-cols-2 md:grid-cols-4 gap-4",children:[e.jsxs("div",{children:[e.jsx("p",{className:"font-medium",children:"平均时间"}),e.jsxs("p",{className:"text-lg",children:[A.executionTime,"ms"]})]}),e.jsxs("div",{children:[e.jsx("p",{className:"font-medium",children:"最短时间"}),e.jsxs("p",{className:"text-lg",children:[A.minTime,"ms"]})]}),e.jsxs("div",{children:[e.jsx("p",{className:"font-medium",children:"最长时间"}),e.jsxs("p",{className:"text-lg",children:[A.maxTime,"ms"]})]}),e.jsxs("div",{children:[e.jsx("p",{className:"font-medium",children:"测量次数"}),e.jsx("p",{className:"text-lg",children:A.iterations})]})]}),e.jsxs("p",{className:"mt-2 text-xs text-blue-600",children:["执行时间: ",A.timestamp]})]})]}):e.jsx("div",{className:"bg-gray-50 p-4 rounded",children:e.jsx("p",{className:"text-gray-500",children:"暂无结果"})})]}),P&&e.jsxs("div",{className:"bg-white p-6 rounded-lg shadow",children:[e.jsx("h3",{className:"text-lg font-semibold mb-4",children:"性能统计"}),e.jsx("div",{className:"grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4",children:a.map(r=>{const b=M.callCounts[r.key]||0,u=M.averageTimes[r.key]||0,x=M.minTimes[r.key]||0,y=M.maxTimes[r.key]||0,B=M.executionTimes[r.key]||[];return e.jsxs("div",{className:"border rounded-lg p-4",children:[e.jsxs("div",{className:"flex justify-between items-start mb-2",children:[e.jsx("h4",{className:"font-medium",children:r.name}),e.jsx("span",{className:`text-xs px-2 py-1 rounded ${r.complexity==="简单"?"bg-green-100 text-green-800":r.complexity==="中等"?"bg-yellow-100 text-yellow-800":"bg-red-100 text-red-800"}`,children:r.complexity})]}),e.jsxs("div",{className:"text-sm text-gray-600 space-y-1",children:[e.jsxs("p",{children:["调用次数: ",e.jsx("span",{className:"font-medium",children:b})]}),e.jsxs("p",{children:["平均时间: ",e.jsxs("span",{className:"font-medium text-blue-600",children:[u.toFixed(3),"ms"]})]}),e.jsxs("p",{children:["最短时间: ",e.jsxs("span",{className:"font-medium text-green-600",children:[x.toFixed(3),"ms"]})]}),e.jsxs("p",{children:["最长时间: ",e.jsxs("span",{className:"font-medium text-red-600",children:[y.toFixed(3),"ms"]})]}),B.length>0&&e.jsxs("div",{className:"mt-2",children:[e.jsx("p",{className:"text-xs text-gray-500",children:"最近时间:"}),e.jsxs("p",{className:"text-xs font-mono",children:[B.slice(-5).map(W=>W.toFixed(3)).join(", "),"ms"]})]})]})]},r.key)})})]}),s.length>0&&e.jsxs("div",{className:"bg-white p-6 rounded-lg shadow",children:[e.jsx("h3",{className:"text-lg font-semibold mb-4",children:"产品列表和过滤器"}),e.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-6",children:[e.jsxs("div",{children:[e.jsx("label",{className:"block text-sm font-medium mb-1",children:"搜索"}),e.jsx("input",{type:"text",value:t.search,onChange:r=>l(r.target.value),placeholder:"搜索产品...",className:"w-full px-3 py-2 border rounded"})]}),e.jsxs("div",{children:[e.jsx("label",{className:"block text-sm font-medium mb-1",children:"分类"}),e.jsxs("select",{value:t.category,onChange:r=>d(r.target.value),className:"w-full px-3 py-2 border rounded",children:[e.jsx("option",{value:"",children:"全部分类"}),e.jsx("option",{value:"手机",children:"手机"}),e.jsx("option",{value:"电脑",children:"电脑"}),e.jsx("option",{value:"耳机",children:"耳机"}),e.jsx("option",{value:"平板",children:"平板"}),e.jsx("option",{value:"配件",children:"配件"})]})]}),e.jsxs("div",{children:[e.jsx("label",{className:"block text-sm font-medium mb-1",children:"价格范围"}),e.jsxs("div",{className:"flex space-x-2",children:[e.jsx("input",{type:"number",value:t.priceRange.min,onChange:r=>c(Number(r.target.value),t.priceRange.max),placeholder:"最低价",className:"w-full px-3 py-2 border rounded"}),e.jsx("input",{type:"number",value:t.priceRange.max,onChange:r=>c(t.priceRange.min,Number(r.target.value)),placeholder:"最高价",className:"w-full px-3 py-2 border rounded"})]})]}),e.jsxs("div",{children:[e.jsx("label",{className:"block text-sm font-medium mb-1",children:"排序"}),e.jsxs("select",{value:`${t.sortBy}-${t.sortOrder}`,onChange:r=>{const[b,u]=r.target.value.split("-");p(b),w(u)},className:"w-full px-3 py-2 border rounded",children:[e.jsx("option",{value:"name-asc",children:"名称 A-Z"}),e.jsx("option",{value:"name-desc",children:"名称 Z-A"}),e.jsx("option",{value:"price-asc",children:"价格 低-高"}),e.jsx("option",{value:"price-desc",children:"价格 高-低"}),e.jsx("option",{value:"rating-desc",children:"评分 高-低"})]})]})]}),e.jsxs("div",{className:"flex space-x-4 mb-4",children:[e.jsxs("label",{className:"flex items-center",children:[e.jsx("input",{type:"checkbox",checked:t.inStock,onChange:r=>T(r.target.checked),className:"mr-2"}),"仅显示有库存"]}),e.jsx("button",{onClick:$,className:"px-4 py-2 bg-gray-500 text-white rounded hover:bg-gray-600",children:"重置过滤器"})]}),e.jsx("div",{className:"grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4",children:s.map(r=>e.jsxs("div",{className:"border rounded-lg p-4",children:[e.jsx("h4",{className:"font-medium mb-2",children:r.name}),e.jsx("p",{className:"text-sm text-gray-600 mb-2",children:r.description}),e.jsxs("p",{className:"text-lg font-bold text-green-600 mb-2",children:["¥",r.price]}),e.jsxs("p",{className:"text-sm text-gray-500 mb-2",children:["评分: ",r.rating," (",r.reviews," 评价)"]}),e.jsxs("p",{className:"text-sm text-gray-500 mb-2",children:["库存: ",r.stock]}),e.jsxs("p",{className:"text-sm text-gray-500 mb-2",children:["分类: ",r.category]}),e.jsx("button",{onClick:()=>m(r.id),className:"w-full px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600",children:"加入购物车"})]},r.id))})]}),n.items.length>0&&e.jsxs("div",{className:"bg-white p-6 rounded-lg shadow",children:[e.jsx("h3",{className:"text-lg font-semibold mb-4",children:"购物车"}),e.jsx("div",{className:"space-y-2",children:n.items.map(r=>{const b=s.find(u=>u.id===r.productId);return e.jsxs("div",{className:"flex justify-between items-center p-2 border rounded",children:[e.jsx("span",{children:b==null?void 0:b.name}),e.jsxs("span",{children:["数量: ",r.quantity]}),e.jsxs("span",{children:["¥",b?b.price*r.quantity:0]})]},r.id)})}),e.jsx("div",{className:"mt-4 p-4 bg-gray-50 rounded",children:e.jsxs("p",{className:"text-lg font-bold",children:["总计: ¥",n.totalPrice," (",n.totalItems," 件商品)"]})})]})]})},ce=`import React, { useState, useEffect } from "react";
import { useCombineStore } from "../stores/combineStore";
import { combinedSelectors } from "../stores/selectorsStore";

const CombinedSelectorsDemo: React.FC = () => {
  const {
    user,
    products,
    cart,
    filters,
    setUser,
    addProduct,
    addToCart,
    setSearch,
    setCategory,
    setPriceRange,
    setRating,
    setSortBy,
    setSortOrder,
    setInStock,
    resetFilters,
  } = useCombineStore();

  const [selectedSelector, setSelectedSelector] = useState<string>("userProfile");
  const [selectorResult, setSelectorResult] = useState<any>(null);
  const [error, setError] = useState<string | null>(null);

  // 获取选择器结果
  const getSelectorResult = () => {
    try {
      setError(null);
      const state = useCombineStore.getState();
      let result;

      switch (selectedSelector) {
        case "userProfile":
          result = combinedSelectors.userProfile(state);
          break;
        case "cartSummary":
          result = combinedSelectors.cartSummary(state);
          break;
        case "productFilters":
          result = combinedSelectors.productFilters(state);
          break;
        case "userPreferences":
          result = combinedSelectors.userPreferences(state);
          break;
        case "dashboardStats":
          result = combinedSelectors.dashboardStats(state);
          break;
        default:
          result = null;
      }

      setSelectorResult(result);
    } catch (err) {
      console.error("选择器执行错误:", err);
      setError(err instanceof Error ? err.message : "未知错误");
      setSelectorResult(null);
    }
  };

  // 当选择器或状态变化时更新结果
  useEffect(() => {
    getSelectorResult();
  }, [selectedSelector, user, products, cart, filters]);

  // 创建测试用户
  const createTestUser = () => {
    setUser({
      id: "1",
      name: "测试用户",
      email: "test@example.com",
      avatar: "https://via.placeholder.com/40",
      role: "admin",
      preferences: {
        theme: "dark",
        language: "zh-CN",
        notifications: true,
      },
      createdAt: new Date(),
      updatedAt: new Date(),
    });
  };

  // 创建测试产品
  const createTestProducts = () => {
    const testProducts = [
      {
        name: "iPhone 15 Pro",
        description: "最新款苹果专业手机",
        price: 8999,
        category: "手机",
        stock: 50,
        images: ["https://via.placeholder.com/200"],
        tags: ["手机", "苹果", "专业", "Pro"],
        rating: 4.8,
        reviews: 1200,
      },
      {
        name: "iPhone 15 Pro Max",
        description: "苹果超大屏专业手机",
        price: 9999,
        category: "手机",
        stock: 30,
        images: ["https://via.placeholder.com/200"],
        tags: ["手机", "苹果", "专业", "Pro", "Max"],
        rating: 4.9,
        reviews: 800,
      },
      {
        name: "MacBook Pro",
        description: "专业级笔记本电脑",
        price: 15999,
        category: "电脑",
        stock: 30,
        images: ["https://via.placeholder.com/200"],
        tags: ["电脑", "苹果", "专业", "Pro"],
        rating: 4.9,
        reviews: 800,
      },
      {
        name: "AirPods Pro",
        description: "无线降噪耳机",
        price: 1999,
        category: "耳机",
        stock: 100,
        images: ["https://via.placeholder.com/200"],
        tags: ["耳机", "无线", "降噪", "Pro"],
        rating: 4.7,
        reviews: 2000,
      },
      {
        name: "iPad Pro",
        description: "专业级平板电脑",
        price: 6399,
        category: "平板",
        stock: 25,
        images: ["https://via.placeholder.com/200"],
        tags: ["平板", "苹果", "专业", "Pro"],
        rating: 4.6,
        reviews: 600,
      },
      {
        name: "Apple Watch Pro",
        description: "专业智能手表",
        price: 3999,
        category: "配件",
        stock: 80,
        images: ["https://via.placeholder.com/200"],
        tags: ["手表", "苹果", "智能", "Pro"],
        rating: 4.5,
        reviews: 900,
      },
      {
        name: "Samsung Galaxy S24 Pro",
        description: "三星专业旗舰手机",
        price: 7999,
        category: "手机",
        stock: 40,
        images: ["https://via.placeholder.com/200"],
        tags: ["手机", "三星", "安卓", "Pro"],
        rating: 4.6,
        reviews: 1500,
      },
      {
        name: "Dell XPS 13 Pro",
        description: "戴尔专业超薄笔记本",
        price: 9999,
        category: "电脑",
        stock: 20,
        images: ["https://via.placeholder.com/200"],
        tags: ["电脑", "戴尔", "轻薄", "Pro"],
        rating: 4.4,
        reviews: 600,
      },
      {
        name: "Sony WH-1000XM4 Pro",
        description: "索尼专业降噪耳机",
        price: 2599,
        category: "耳机",
        stock: 60,
        images: ["https://via.placeholder.com/200"],
        tags: ["耳机", "索尼", "降噪", "Pro"],
        rating: 4.7,
        reviews: 1800,
      },
      {
        name: "Surface Pro 9",
        description: "微软二合一平板",
        price: 7999,
        category: "平板",
        stock: 15,
        images: ["https://via.placeholder.com/200"],
        tags: ["平板", "微软", "二合一", "Pro"],
        rating: 4.3,
        reviews: 400,
      },
      {
        name: "Garmin Fenix 7 Pro",
        description: "佳明专业运动手表",
        price: 4999,
        category: "配件",
        stock: 35,
        images: ["https://via.placeholder.com/200"],
        tags: ["手表", "佳明", "运动", "Pro"],
        rating: 4.5,
        reviews: 700,
      },
      {
        name: "iPhone 15",
        description: "最新款苹果手机",
        price: 7999,
        category: "手机",
        stock: 50,
        images: ["https://via.placeholder.com/200"],
        tags: ["手机", "苹果", "智能"],
        rating: 4.8,
        reviews: 1200,
      },
    ];

    console.log("开始添加测试产品...");
    testProducts.forEach((product, index) => {
      console.log(\`添加产品 \${index + 1}:\`, product.name);
      addProduct(product);
    });
    console.log("测试产品添加完成");
  };

  // 添加产品到购物车
  const addProductToCart = (productId: string) => {
    addToCart(productId, 1);
  };

  // 选择器配置
  const selectorConfigs = [
    {
      key: "userProfile",
      name: "用户档案选择器",
      description: "获取用户信息和登录状态",
    },
    {
      key: "cartSummary",
      name: "购物车摘要选择器",
      description: "计算购物车总价和商品数量",
    },
    {
      key: "productFilters",
      name: "产品过滤器选择器",
      description: "根据过滤条件筛选和排序产品",
    },
    {
      key: "userPreferences",
      name: "用户偏好选择器",
      description: "获取用户主题和语言偏好",
    },
    {
      key: "dashboardStats",
      name: "仪表板统计选择器",
      description: "获取应用统计数据",
    },
  ];

  // 获取要显示的产品
  const getDisplayProducts = () => {
    try {
      // 只有选择产品过滤器选择器时才显示过滤后的产品
      if (selectedSelector === "productFilters" && selectorResult) {
        console.log("使用过滤后的产品:", selectorResult.filteredProducts?.length || 0);
        return selectorResult.filteredProducts || [];
      }
      // 其他情况显示所有产品
      console.log("使用所有产品:", products.length);
      return products;
    } catch (err) {
      console.error("获取显示产品错误:", err);
      return products;
    }
  };

  const displayProducts = getDisplayProducts();

  return (
    <div className="space-y-6">
      {/* 错误显示 */}
      {error && (
        <div className="bg-red-50 border border-red-200 rounded-lg p-4">
          <h3 className="text-lg font-semibold text-red-800 mb-2">错误</h3>
          <p className="text-red-700">{error}</p>
        </div>
      )}

      {/* 测试数据创建 */}
      <div className="bg-white p-6 rounded-lg shadow">
        <h3 className="text-lg font-semibold mb-4">测试数据</h3>
        <div className="flex space-x-2">
          <button
            onClick={createTestUser}
            className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
          >
            创建测试用户
          </button>
          <button
            onClick={createTestProducts}
            className="px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600"
          >
            创建测试产品
          </button>
        </div>
        <div className="mt-2 text-sm text-gray-600">
          <p>当前产品数量: {products.length}</p>
          <p>当前用户: {user ? user.name : "未登录"}</p>
          <p>当前选择器: {selectedSelector}</p>
          <p>显示产品数量: {displayProducts.length}</p>
        </div>
      </div>

      {/* 选择器选择 */}
      <div className="bg-white p-6 rounded-lg shadow">
        <h3 className="text-lg font-semibold mb-4">选择器选择</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {selectorConfigs.map((config) => (
            <button
              key={config.key}
              onClick={() => setSelectedSelector(config.key)}
              className={\`p-4 rounded-lg border-2 text-left transition-colors \${
                selectedSelector === config.key
                  ? "border-blue-500 bg-blue-50"
                  : "border-gray-200 hover:border-gray-300"
              }\`}
            >
              <h4 className="font-medium mb-1">{config.name}</h4>
              <p className="text-sm text-gray-600">{config.description}</p>
            </button>
          ))}
        </div>
      </div>

      {/* 选择器结果 */}
      <div className="bg-white p-6 rounded-lg shadow">
        <h3 className="text-lg font-semibold mb-4">
          选择器结果: {selectorConfigs.find((c) => c.key === selectedSelector)?.name}
        </h3>
        {selectorResult ? (
          <div className="bg-gray-50 p-4 rounded">
            <pre className="text-sm overflow-x-auto">
              {JSON.stringify(selectorResult, null, 2)}
            </pre>
          </div>
        ) : (
          <div className="bg-gray-50 p-4 rounded">
            <p className="text-gray-500">暂无结果</p>
          </div>
        )}
      </div>

      {/* 产品列表和过滤器 */}
      {products.length > 0 && (
        <div className="bg-white p-6 rounded-lg shadow">
          <h3 className="text-lg font-semibold mb-4">产品列表和过滤器</h3>

          {/* 过滤器控制 */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
            <div>
              <label className="block text-sm font-medium mb-1">搜索</label>
              <input
                type="text"
                value={filters.search}
                onChange={(e) => setSearch(e.target.value)}
                placeholder="搜索产品..."
                className="w-full px-3 py-2 border rounded"
              />
            </div>
            <div>
              <label className="block text-sm font-medium mb-1">分类</label>
              <select
                value={filters.category}
                onChange={(e) => setCategory(e.target.value)}
                className="w-full px-3 py-2 border rounded"
              >
                <option value="">全部分类</option>
                <option value="手机">手机</option>
                <option value="电脑">电脑</option>
                <option value="耳机">耳机</option>
                <option value="平板">平板</option>
                <option value="配件">配件</option>
              </select>
            </div>
            <div>
              <label className="block text-sm font-medium mb-1">价格范围</label>
              <div className="flex space-x-2">
                <input
                  type="number"
                  value={filters.priceRange.min}
                  onChange={(e) =>
                    setPriceRange(Number(e.target.value), filters.priceRange.max)
                  }
                  placeholder="最低价"
                  className="w-full px-3 py-2 border rounded"
                />
                <input
                  type="number"
                  value={filters.priceRange.max}
                  onChange={(e) =>
                    setPriceRange(filters.priceRange.min, Number(e.target.value))
                  }
                  placeholder="最高价"
                  className="w-full px-3 py-2 border rounded"
                />
              </div>
            </div>
            <div>
              <label className="block text-sm font-medium mb-1">排序</label>
              <select
                value={\`\${filters.sortBy}-\${filters.sortOrder}\`}
                onChange={(e) => {
                  const [sortBy, sortOrder] = e.target.value.split("-");
                  setSortBy(sortBy as any);
                  setSortOrder(sortOrder as any);
                }}
                className="w-full px-3 py-2 border rounded"
              >
                <option value="name-asc">名称 A-Z</option>
                <option value="name-desc">名称 Z-A</option>
                <option value="price-asc">价格 低-高</option>
                <option value="price-desc">价格 高-低</option>
                <option value="rating-desc">评分 高-低</option>
              </select>
            </div>
          </div>

          <div className="flex space-x-4 mb-4">
            <label className="flex items-center">
              <input
                type="checkbox"
                checked={filters.inStock}
                onChange={(e) => setInStock(e.target.checked)}
                className="mr-2"
              />
              仅显示有库存
            </label>
            <div className="flex items-center space-x-2">
              <label className="text-sm">最低评分:</label>
              <select
                value={filters.rating}
                onChange={(e) => setRating(Number(e.target.value))}
                className="px-2 py-1 border rounded"
              >
                <option value={0}>不限</option>
                <option value={3}>3星以上</option>
                <option value={4}>4星以上</option>
                <option value={4.5}>4.5星以上</option>
              </select>
            </div>
            <button
              onClick={resetFilters}
              className="px-4 py-2 bg-gray-500 text-white rounded hover:bg-gray-600"
            >
              重置过滤器
            </button>
          </div>

          {/* 过滤器状态显示 */}
          <div className="mb-4 p-3 bg-blue-50 rounded">
            <h4 className="font-medium text-blue-800 mb-2">当前过滤器状态:</h4>
            <div className="text-sm text-blue-700">
              <p>搜索: {filters.search || "无"}</p>
              <p>分类: {filters.category || "全部"}</p>
              <p>价格范围: ¥{filters.priceRange.min} - ¥{filters.priceRange.max}</p>
              <p>评分: {filters.rating > 0 ? \`\${filters.rating}星以上\` : "不限"}</p>
              <p>排序: {filters.sortBy} ({filters.sortOrder})</p>
              <p>仅库存: {filters.inStock ? "是" : "否"}</p>
            </div>
          </div>

          {/* 产品列表 */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {displayProducts.map((product) => (
              <div key={product.id} className="border rounded-lg p-4">
                <h4 className="font-medium mb-2">{product.name}</h4>
                <p className="text-sm text-gray-600 mb-2">{product.description}</p>
                <p className="text-lg font-bold text-green-600 mb-2">¥{product.price}</p>
                <p className="text-sm text-gray-500 mb-2">
                  评分: {product.rating} ({product.reviews} 评价)
                </p>
                <p className="text-sm text-gray-500 mb-2">库存: {product.stock}</p>
                <p className="text-sm text-gray-500 mb-2">分类: {product.category}</p>
                <button
                  onClick={() => addProductToCart(product.id)}
                  className="w-full px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
                >
                  加入购物车
                </button>
              </div>
            ))}
          </div>

          {/* 产品统计 */}
          <div className="mt-4 p-3 bg-gray-50 rounded">
            <p className="text-sm text-gray-600">
              显示 {displayProducts.length} / {products.length} 个产品
              {selectedSelector === "productFilters" && selectorResult && (
                <span className="ml-2 text-blue-600">
                  (过滤器: {selectorResult.hasFilters ? "已应用" : "未应用"})
                </span>
              )}
            </p>
          </div>
        </div>
      )}

      {/* 购物车 */}
      {cart.items.length > 0 && (
        <div className="bg-white p-6 rounded-lg shadow">
          <h3 className="text-lg font-semibold mb-4">购物车</h3>
          <div className="space-y-2">
            {cart.items.map((item) => {
              const product = products.find((p) => p.id === item.productId);
              return (
                <div key={item.id} className="flex justify-between items-center p-2 border rounded">
                  <span>{product?.name}</span>
                  <span>数量: {item.quantity}</span>
                  <span>¥{product ? product.price * item.quantity : 0}</span>
                </div>
              );
            })}
          </div>
          <div className="mt-4 p-4 bg-gray-50 rounded">
            <p className="text-lg font-bold">
              总计: ¥{cart.totalPrice} ({cart.totalItems} 件商品)
            </p>
          </div>
        </div>
      )}

      {/* 状态信息 */}
      <div className="bg-white p-6 rounded-lg shadow">
        <h3 className="text-lg font-semibold mb-4">当前状态信息</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <h4 className="font-medium mb-2">用户状态</h4>
            <p className="text-sm text-gray-600">
              {user ? \`已登录: \${user.name} (\${user.role})\` : "未登录"}
            </p>
          </div>
          <div>
            <h4 className="font-medium mb-2">数据统计</h4>
            <p className="text-sm text-gray-600">
              产品: {products.length} | 购物车: {cart.totalItems} 件 | 总价: ¥{cart.totalPrice}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CombinedSelectorsDemo;
`,le=`import React, { useState, useEffect, useRef } from "react";
import { useCombineStore } from "../stores/combineStore";
import { combinedSelectors } from "../stores/selectorsStore";

const SubscribeWithSelectorDemo: React.FC = () => {
  const {
    user,
    products,
    cart,
    ui,
    filters,
    setUser,
    addProduct,
    addToCart,
    setSearch,
    setCategory,
    setPriceRange,
    setSortBy,
    setSortOrder,
    setInStock,
    resetFilters,
  } = useCombineStore();

  const [subscriptions, setSubscriptions] = useState<Array<{
    id: string;
    name: string;
    selector: string;
    lastValue: any;
    callCount: number;
    isActive: boolean;
  }>>([]);

  const [logs, setLogs] = useState<Array<{
    id: string;
    timestamp: Date;
    subscription: string;
    message: string;
    value: any;
  }>>([]);

  const subscriptionRefs = useRef<Map<string, () => void>>(new Map());

  // 添加日志
  const addLog = (subscription: string, message: string, value: any) => {
    const log = {
      id: \`log_\${Date.now()}_\${Math.random().toString(36).substr(2, 9)}\`,
      timestamp: new Date(),
      subscription,
      message,
      value,
    };
    setLogs((prev) => [log, ...prev.slice(0, 49)]); // 保留最近50条日志
  };

  // 创建订阅
  const createSubscription = (selectorName: string, selector: (state: any) => any) => {
    const subscriptionId = \`sub_\${Date.now()}_\${Math.random().toString(36).substr(2, 9)}\`;
    
    // 获取当前值
    const currentValue = selector(useCombineStore.getState());
    
    // 创建订阅
    const unsubscribe = useCombineStore.subscribe(
      selector,
      (value, previousValue) => {
        addLog(selectorName, "状态变化", { value, previousValue });
        
        setSubscriptions((prev) =>
          prev.map((sub) =>
            sub.id === subscriptionId
              ? {
                  ...sub,
                  lastValue: value,
                  callCount: sub.callCount + 1,
                }
              : sub
          )
        );
      },
      {
        equalityFn: (a, b) => JSON.stringify(a) === JSON.stringify(b),
        fireImmediately: false,
      }
    );

    // 保存订阅引用
    subscriptionRefs.current.set(subscriptionId, unsubscribe);

    // 添加到订阅列表
    setSubscriptions((prev) => [
      ...prev,
      {
        id: subscriptionId,
        name: selectorName,
        selector: selectorName,
        lastValue: currentValue,
        callCount: 0,
        isActive: true,
      },
    ]);

    addLog(selectorName, "订阅已创建", currentValue);
  };

  // 取消订阅
  const unsubscribe = (subscriptionId: string) => {
    const unsubscribeFn = subscriptionRefs.current.get(subscriptionId);
    if (unsubscribeFn) {
      unsubscribeFn();
      subscriptionRefs.current.delete(subscriptionId);
    }

    setSubscriptions((prev) =>
      prev.map((sub) =>
        sub.id === subscriptionId ? { ...sub, isActive: false } : sub
      )
    );

    const subscription = subscriptions.find((sub) => sub.id === subscriptionId);
    if (subscription) {
      addLog(subscription.name, "订阅已取消", null);
    }
  };

  // 清除所有订阅
  const clearAllSubscriptions = () => {
    subscriptionRefs.current.forEach((unsubscribeFn) => unsubscribeFn());
    subscriptionRefs.current.clear();
    setSubscriptions([]);
    addLog("系统", "所有订阅已清除", null);
  };

  // 清除日志
  const clearLogs = () => {
    setLogs([]);
  };

  // 预定义的选择器
  const predefinedSelectors = [
    {
      name: "用户档案",
      selector: combinedSelectors.userProfile,
    },
    {
      name: "购物车摘要",
      selector: combinedSelectors.cartSummary,
    },
    {
      name: "产品过滤器",
      selector: combinedSelectors.productFilters,
    },
    {
      name: "用户偏好",
      selector: combinedSelectors.userPreferences,
    },
    {
      name: "仪表板统计",
      selector: combinedSelectors.dashboardStats,
    },
  ];

  // 创建测试数据
  const createTestData = () => {
    // 创建用户
    setUser({
      id: "1",
      name: "测试用户",
      email: "test@example.com",
      avatar: "https://via.placeholder.com/40",
      role: "admin",
      preferences: {
        theme: "dark",
        language: "zh-CN",
        notifications: true,
      },
      createdAt: new Date(),
      updatedAt: new Date(),
    });

    // 创建产品
    const testProducts = [
      {
        name: "iPhone 15",
        description: "最新款苹果手机",
        price: 7999,
        category: "手机",
        stock: 50,
        images: ["https://via.placeholder.com/200"],
        tags: ["手机", "苹果", "智能"],
        rating: 4.8,
        reviews: 1200,
      },
      {
        name: "MacBook Pro",
        description: "专业级笔记本电脑",
        price: 15999,
        category: "电脑",
        stock: 30,
        images: ["https://via.placeholder.com/200"],
        tags: ["电脑", "苹果", "专业"],
        rating: 4.9,
        reviews: 800,
      },
    ];

    testProducts.forEach((product) => {
      addProduct(product);
    });

    addLog("系统", "测试数据已创建", { user: true, products: testProducts.length });
  };

  // 模拟状态变化
  const simulateStateChanges = () => {
    // 添加产品到购物车
    if (products.length > 0) {
      addToCart(products[0].id, 1);
    }

    // 修改搜索条件
    setSearch("iPhone");

    // 修改分类
    setCategory("手机");

    // 修改价格范围
    setPriceRange(5000, 10000);

    addLog("系统", "模拟状态变化", { 
      cart: true, 
      search: "iPhone", 
      category: "手机", 
      priceRange: [5000, 10000] 
    });
  };

  // 组件卸载时清理订阅
  useEffect(() => {
    return () => {
      subscriptionRefs.current.forEach((unsubscribeFn) => unsubscribeFn());
    };
  }, []);

  return (
    <div className="space-y-6">
      {/* 控制面板 */}
      <div className="bg-white p-6 rounded-lg shadow">
        <h3 className="text-lg font-semibold mb-4">订阅控制面板</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <h4 className="font-medium mb-2">预定义选择器</h4>
            <div className="space-y-2">
              {predefinedSelectors.map((selector) => (
                <button
                  key={selector.name}
                  onClick={() => createSubscription(selector.name, selector.selector)}
                  className="w-full px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 text-left"
                >
                  订阅 {selector.name}
                </button>
              ))}
            </div>
          </div>
          <div>
            <h4 className="font-medium mb-2">测试操作</h4>
            <div className="space-y-2">
              <button
                onClick={createTestData}
                className="w-full px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600"
              >
                创建测试数据
              </button>
              <button
                onClick={simulateStateChanges}
                className="w-full px-4 py-2 bg-yellow-500 text-white rounded hover:bg-yellow-600"
              >
                模拟状态变化
              </button>
              <button
                onClick={clearAllSubscriptions}
                className="w-full px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600"
              >
                清除所有订阅
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* 订阅列表 */}
      <div className="bg-white p-6 rounded-lg shadow">
        <h3 className="text-lg font-semibold mb-4">活跃订阅</h3>
        {subscriptions.length === 0 ? (
          <p className="text-gray-500">暂无活跃订阅</p>
        ) : (
          <div className="space-y-2">
            {subscriptions.map((subscription) => (
              <div
                key={subscription.id}
                className={\`p-4 border rounded-lg \${
                  subscription.isActive ? "border-green-200 bg-green-50" : "border-gray-200 bg-gray-50"
                }\`}
              >
                <div className="flex justify-between items-start">
                  <div>
                    <h4 className="font-medium">{subscription.name}</h4>
                    <p className="text-sm text-gray-600">
                      调用次数: {subscription.callCount}
                    </p>
                    <p className="text-sm text-gray-600">
                      状态: {subscription.isActive ? "活跃" : "已取消"}
                    </p>
                  </div>
                  {subscription.isActive && (
                    <button
                      onClick={() => unsubscribe(subscription.id)}
                      className="px-3 py-1 bg-red-500 text-white rounded hover:bg-red-600 text-sm"
                    >
                      取消订阅
                    </button>
                  )}
                </div>
                <div className="mt-2">
                  <p className="text-sm font-medium">最新值:</p>
                  <pre className="text-xs bg-gray-100 p-2 rounded mt-1 overflow-x-auto">
                    {JSON.stringify(subscription.lastValue, null, 2)}
                  </pre>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>

      {/* 日志 */}
      <div className="bg-white p-6 rounded-lg shadow">
        <div className="flex justify-between items-center mb-4">
          <h3 className="text-lg font-semibold">订阅日志</h3>
          <button
            onClick={clearLogs}
            className="px-4 py-2 bg-gray-500 text-white rounded hover:bg-gray-600"
          >
            清除日志
          </button>
        </div>
        {logs.length === 0 ? (
          <p className="text-gray-500">暂无日志</p>
        ) : (
          <div className="space-y-2 max-h-96 overflow-y-auto">
            {logs.map((log) => (
              <div key={log.id} className="p-3 border rounded-lg bg-gray-50">
                <div className="flex justify-between items-start mb-2">
                  <span className="font-medium text-blue-600">{log.subscription}</span>
                  <span className="text-sm text-gray-500">
                    {log.timestamp.toLocaleTimeString()}
                  </span>
                </div>
                <p className="text-sm mb-2">{log.message}</p>
                {log.value && (
                  <pre className="text-xs bg-white p-2 rounded border overflow-x-auto">
                    {JSON.stringify(log.value, null, 2)}
                  </pre>
                )}
              </div>
            ))}
          </div>
        )}
      </div>

      {/* 状态信息 */}
      <div className="bg-white p-6 rounded-lg shadow">
        <h3 className="text-lg font-semibold mb-4">当前状态</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <h4 className="font-medium mb-2">用户信息</h4>
            <pre className="text-sm bg-gray-100 p-2 rounded overflow-x-auto">
              {JSON.stringify(user, null, 2)}
            </pre>
          </div>
          <div>
            <h4 className="font-medium mb-2">购物车信息</h4>
            <pre className="text-sm bg-gray-100 p-2 rounded overflow-x-auto">
              {JSON.stringify(cart, null, 2)}
            </pre>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SubscribeWithSelectorDemo;
`,de=`import React, { useState, useEffect } from "react";
import { useCombineStore } from "../stores/combineStore";
import { performanceSelectors } from "../stores/selectorsStore";

const PerformanceMonitoringDemo: React.FC = () => {
  const {
    user,
    products,
    cart,
    filters,
    setUser,
    addProduct,
    addToCart,
    setSearch,
    setCategory,
    setPriceRange,
    setSortBy,
    setSortOrder,
    setInStock,
    resetFilters,
  } = useCombineStore();

  const [selectedSelector, setSelectedSelector] = useState<string>("userProfile");
  const [selectorResult, setSelectorResult] = useState<any>(null);
  const [performanceData, setPerformanceData] = useState<any>(null);
  const [isMonitoring, setIsMonitoring] = useState(false);

  // 性能监控状态
  const [performanceStats, setPerformanceStats] = useState({
    callCounts: {} as Record<string, number>,
    executionTimes: {} as Record<string, number[]>,
    averageTimes: {} as Record<string, number>,
    minTimes: {} as Record<string, number>,
    maxTimes: {} as Record<string, number>,
  });

  // 高精度性能测量函数
  const measurePerformance = (fn: () => any, iterations: number = 1) => {
    const times: number[] = [];
    
    for (let i = 0; i < iterations; i++) {
      const start = performance.now();
      fn();
      const end = performance.now();
      times.push(end - start);
    }
    
    return {
      times,
      average: times.reduce((a, b) => a + b, 0) / times.length,
      min: Math.min(...times),
      max: Math.max(...times),
      total: times.reduce((a, b) => a + b, 0),
    };
  };

  // 获取选择器结果并监控性能
  const executeSelector = () => {
    const state = useCombineStore.getState();
    let result;
    let performanceResult;

    try {
      // 根据选择器复杂度决定测量次数
      const iterations = selectedSelector === 'productFilters' ? 10 : 5;
      
      switch (selectedSelector) {
        case "userProfile":
          performanceResult = measurePerformance(() => {
            result = performanceSelectors.userProfile(state);
          }, iterations);
          break;
        case "cartSummary":
          performanceResult = measurePerformance(() => {
            result = performanceSelectors.cartSummary(state);
          }, iterations);
          break;
        case "productFilters":
          performanceResult = measurePerformance(() => {
            result = performanceSelectors.productFilters(state);
          }, iterations);
          break;
        case "userPreferences":
          performanceResult = measurePerformance(() => {
            result = performanceSelectors.userPreferences(state);
          }, iterations);
          break;
        case "dashboardStats":
          performanceResult = measurePerformance(() => {
            result = performanceSelectors.dashboardStats(state);
          }, iterations);
          break;
        default:
          result = null;
          performanceResult = null;
      }
      
      // 更新性能统计
      if (isMonitoring && performanceResult) {
        setPerformanceStats(prev => {
          const newCallCounts = {
            ...prev.callCounts,
            [selectedSelector]: (prev.callCounts[selectedSelector] || 0) + 1,
          };
          
          const newExecutionTimes = {
            ...prev.executionTimes,
            [selectedSelector]: [
              ...(prev.executionTimes[selectedSelector] || []),
              ...performanceResult.times,
            ].slice(-20), // 保留最近20次测量
          };
          
          const newAverageTimes = {
            ...prev.averageTimes,
            [selectedSelector]: newExecutionTimes[selectedSelector].reduce((a, b) => a + b, 0) / newExecutionTimes[selectedSelector].length,
          };

          const newMinTimes = {
            ...prev.minTimes,
            [selectedSelector]: Math.min(
              prev.minTimes[selectedSelector] || Infinity,
              ...performanceResult.times
            ),
          };

          const newMaxTimes = {
            ...prev.maxTimes,
            [selectedSelector]: Math.max(
              prev.maxTimes[selectedSelector] || 0,
              ...performanceResult.times
            ),
          };

          return {
            callCounts: newCallCounts,
            executionTimes: newExecutionTimes,
            averageTimes: newAverageTimes,
            minTimes: newMinTimes,
            maxTimes: newMaxTimes,
          };
        });
      }

      setSelectorResult(result);
      setPerformanceData({
        executionTime: performanceResult?.average.toFixed(3) || '0.000',
        minTime: performanceResult?.min.toFixed(3) || '0.000',
        maxTime: performanceResult?.max.toFixed(3) || '0.000',
        iterations: performanceResult?.times.length || 0,
        timestamp: new Date().toLocaleTimeString(),
        performance: result?._performance,
      });
    } catch (error) {
      console.error("选择器执行错误:", error);
      setSelectorResult(null);
      setPerformanceData(null);
    }
  };

  // 当选择器或状态变化时更新结果
  useEffect(() => {
    executeSelector();
  }, [selectedSelector, user, products, cart, filters, isMonitoring]);

  // 创建测试用户
  const createTestUser = () => {
    setUser({
      id: "1",
      name: "测试用户",
      email: "test@example.com",
      avatar: "https://via.placeholder.com/40",
      role: "admin",
      preferences: {
        theme: "dark",
        language: "zh-CN",
        notifications: true,
      },
      createdAt: new Date(),
      updatedAt: new Date(),
    });
  };

  // 创建测试产品
  const createTestProducts = () => {
    const testProducts = [
      {
        name: "iPhone 15 Pro",
        description: "最新款苹果手机，配备A17 Pro芯片",
        price: 8999,
        category: "手机",
        stock: 50,
        images: ["https://via.placeholder.com/200"],
        tags: ["手机", "苹果", "智能", "Pro"],
        rating: 4.8,
        reviews: 1200,
      },
      {
        name: "MacBook Pro",
        description: "专业级笔记本电脑，M3 Pro芯片",
        price: 15999,
        category: "电脑",
        stock: 30,
        images: ["https://via.placeholder.com/200"],
        tags: ["电脑", "苹果", "专业", "Pro"],
        rating: 4.9,
        reviews: 800,
      },
      {
        name: "AirPods Pro",
        description: "无线降噪耳机，主动降噪技术",
        price: 1999,
        category: "耳机",
        stock: 100,
        images: ["https://via.placeholder.com/200"],
        tags: ["耳机", "无线", "降噪", "Pro"],
        rating: 4.7,
        reviews: 2000,
      },
      {
        name: "iPad Pro",
        description: "专业平板电脑，M2芯片",
        price: 6399,
        category: "平板",
        stock: 40,
        images: ["https://via.placeholder.com/200"],
        tags: ["平板", "苹果", "专业", "Pro"],
        rating: 4.6,
        reviews: 600,
      },
      {
        name: "Samsung Galaxy S24 Pro",
        description: "三星旗舰手机，AI功能",
        price: 7999,
        category: "手机",
        stock: 60,
        images: ["https://via.placeholder.com/200"],
        tags: ["手机", "三星", "AI", "Pro"],
        rating: 4.5,
        reviews: 900,
      },
    ];

    testProducts.forEach((product) => {
      addProduct(product);
    });
  };

  // 添加产品到购物车
  const addProductToCart = (productId: string) => {
    addToCart(productId, 1);
  };

  // 选择器配置
  const selectorConfigs = [
    {
      key: "userProfile",
      name: "用户档案选择器",
      description: "获取用户信息和登录状态",
      complexity: "简单",
    },
    {
      key: "cartSummary",
      name: "购物车摘要选择器",
      description: "计算购物车总价和商品数量",
      complexity: "中等",
    },
    {
      key: "productFilters",
      name: "产品过滤器选择器",
      description: "根据过滤条件筛选和排序产品",
      complexity: "复杂",
    },
    {
      key: "userPreferences",
      name: "用户偏好选择器",
      description: "获取用户主题和语言偏好",
      complexity: "简单",
    },
    {
      key: "dashboardStats",
      name: "仪表板统计选择器",
      description: "获取应用统计数据",
      complexity: "中等",
    },
  ];

  // 重置性能统计
  const resetPerformanceStats = () => {
    setPerformanceStats({
      callCounts: {},
      executionTimes: {},
      averageTimes: {},
      minTimes: {},
      maxTimes: {},
    });
  };

  // 运行压力测试
  const runStressTest = () => {
    const iterations = 100;
    const results: Record<string, any> = {};
    
    selectorConfigs.forEach(config => {
      const state = useCombineStore.getState();
      const perfResult = measurePerformance(() => {
        switch (config.key) {
          case "userProfile":
            performanceSelectors.userProfile(state);
            break;
          case "cartSummary":
            performanceSelectors.cartSummary(state);
            break;
          case "productFilters":
            performanceSelectors.productFilters(state);
            break;
          case "userPreferences":
            performanceSelectors.userPreferences(state);
            break;
          case "dashboardStats":
            performanceSelectors.dashboardStats(state);
            break;
        }
      }, iterations);
      
      results[config.key] = perfResult;
    });
    
    console.log("压力测试结果:", results);
    alert(\`压力测试完成！运行了 \${iterations} 次迭代。查看控制台了解详细结果。\`);
  };

  return (
    <div className="space-y-6">
      {/* 测试数据创建 */}
      <div className="bg-white p-6 rounded-lg shadow">
        <h3 className="text-lg font-semibold mb-4">测试数据</h3>
        <div className="flex space-x-2">
          <button
            onClick={createTestUser}
            className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
          >
            创建测试用户
          </button>
          <button
            onClick={createTestProducts}
            className="px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600"
          >
            创建测试产品
          </button>
          <button
            onClick={runStressTest}
            className="px-4 py-2 bg-purple-500 text-white rounded hover:bg-purple-600"
          >
            运行压力测试
          </button>
        </div>
        <div className="mt-2 text-sm text-gray-600">
          <p>当前产品数量: {products.length}</p>
          <p>当前用户: {user ? user.name : "未登录"}</p>
        </div>
      </div>

      {/* 性能监控控制 */}
      <div className="bg-white p-6 rounded-lg shadow">
        <h3 className="text-lg font-semibold mb-4">性能监控控制</h3>
        <div className="flex space-x-4 items-center">
          <label className="flex items-center">
            <input
              type="checkbox"
              checked={isMonitoring}
              onChange={(e) => setIsMonitoring(e.target.checked)}
              className="mr-2"
            />
            启用性能监控
          </label>
          <button
            onClick={resetPerformanceStats}
            className="px-4 py-2 bg-gray-500 text-white rounded hover:bg-gray-600"
          >
            重置统计
          </button>
        </div>
        <div className="mt-2 text-sm text-gray-600">
          <p>��� 提示：启用监控后，每次选择器执行都会进行多次测量以获得更准确的性能数据</p>
        </div>
      </div>

      {/* 选择器选择 */}
      <div className="bg-white p-6 rounded-lg shadow">
        <h3 className="text-lg font-semibold mb-4">选择器选择</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {selectorConfigs.map((config) => (
            <button
              key={config.key}
              onClick={() => setSelectedSelector(config.key)}
              className={\`p-4 rounded-lg border-2 text-left transition-colors \${
                selectedSelector === config.key
                  ? "border-blue-500 bg-blue-50"
                  : "border-gray-200 hover:border-gray-300"
              }\`}
            >
              <div className="flex justify-between items-start mb-1">
                <h4 className="font-medium">{config.name}</h4>
                <span className={\`text-xs px-2 py-1 rounded \${
                  config.complexity === '简单' ? 'bg-green-100 text-green-800' :
                  config.complexity === '中等' ? 'bg-yellow-100 text-yellow-800' :
                  'bg-red-100 text-red-800'
                }\`}>
                  {config.complexity}
                </span>
              </div>
              <p className="text-sm text-gray-600">{config.description}</p>
            </button>
          ))}
        </div>
      </div>

      {/* 选择器结果 */}
      <div className="bg-white p-6 rounded-lg shadow">
        <h3 className="text-lg font-semibold mb-4">
          选择器结果: {selectorConfigs.find((c) => c.key === selectedSelector)?.name}
        </h3>
        {selectorResult ? (
          <div className="space-y-4">
            <div className="bg-gray-50 p-4 rounded">
              <pre className="text-sm overflow-x-auto">
                {JSON.stringify(selectorResult, null, 2)}
              </pre>
            </div>
            
            {/* 性能数据 */}
            {performanceData && (
              <div className="bg-blue-50 p-4 rounded">
                <h4 className="font-medium text-blue-800 mb-2">性能数据</h4>
                <div className="text-sm text-blue-700 grid grid-cols-2 md:grid-cols-4 gap-4">
                  <div>
                    <p className="font-medium">平均时间</p>
                    <p className="text-lg">{performanceData.executionTime}ms</p>
                  </div>
                  <div>
                    <p className="font-medium">最短时间</p>
                    <p className="text-lg">{performanceData.minTime}ms</p>
                  </div>
                  <div>
                    <p className="font-medium">最长时间</p>
                    <p className="text-lg">{performanceData.maxTime}ms</p>
                  </div>
                  <div>
                    <p className="font-medium">测量次数</p>
                    <p className="text-lg">{performanceData.iterations}</p>
                  </div>
                </div>
                <p className="mt-2 text-xs text-blue-600">
                  执行时间: {performanceData.timestamp}
                </p>
              </div>
            )}
          </div>
        ) : (
          <div className="bg-gray-50 p-4 rounded">
            <p className="text-gray-500">暂无结果</p>
          </div>
        )}
      </div>

      {/* 性能统计 */}
      {isMonitoring && (
        <div className="bg-white p-6 rounded-lg shadow">
          <h3 className="text-lg font-semibold mb-4">性能统计</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {selectorConfigs.map((config) => {
              const callCount = performanceStats.callCounts[config.key] || 0;
              const avgTime = performanceStats.averageTimes[config.key] || 0;
              const minTime = performanceStats.minTimes[config.key] || 0;
              const maxTime = performanceStats.maxTimes[config.key] || 0;
              const recentTimes = performanceStats.executionTimes[config.key] || [];
              
              return (
                <div key={config.key} className="border rounded-lg p-4">
                  <div className="flex justify-between items-start mb-2">
                    <h4 className="font-medium">{config.name}</h4>
                    <span className={\`text-xs px-2 py-1 rounded \${
                      config.complexity === '简单' ? 'bg-green-100 text-green-800' :
                      config.complexity === '中等' ? 'bg-yellow-100 text-yellow-800' :
                      'bg-red-100 text-red-800'
                    }\`}>
                      {config.complexity}
                    </span>
                  </div>
                  <div className="text-sm text-gray-600 space-y-1">
                    <p>调用次数: <span className="font-medium">{callCount}</span></p>
                    <p>平均时间: <span className="font-medium text-blue-600">{avgTime.toFixed(3)}ms</span></p>
                    <p>最短时间: <span className="font-medium text-green-600">{minTime.toFixed(3)}ms</span></p>
                    <p>最长时间: <span className="font-medium text-red-600">{maxTime.toFixed(3)}ms</span></p>
                    {recentTimes.length > 0 && (
                      <div className="mt-2">
                        <p className="text-xs text-gray-500">最近时间:</p>
                        <p className="text-xs font-mono">
                          {recentTimes.slice(-5).map(t => t.toFixed(3)).join(', ')}ms
                        </p>
                      </div>
                    )}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      )}

      {/* 产品列表和过滤器 */}
      {products.length > 0 && (
        <div className="bg-white p-6 rounded-lg shadow">
          <h3 className="text-lg font-semibold mb-4">产品列表和过滤器</h3>

          {/* 过滤器控制 */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
            <div>
              <label className="block text-sm font-medium mb-1">搜索</label>
              <input
                type="text"
                value={filters.search}
                onChange={(e) => setSearch(e.target.value)}
                placeholder="搜索产品..."
                className="w-full px-3 py-2 border rounded"
              />
            </div>
            <div>
              <label className="block text-sm font-medium mb-1">分类</label>
              <select
                value={filters.category}
                onChange={(e) => setCategory(e.target.value)}
                className="w-full px-3 py-2 border rounded"
              >
                <option value="">全部分类</option>
                <option value="手机">手机</option>
                <option value="电脑">电脑</option>
                <option value="耳机">耳机</option>
                <option value="平板">平板</option>
                <option value="配件">配件</option>
              </select>
            </div>
            <div>
              <label className="block text-sm font-medium mb-1">价格范围</label>
              <div className="flex space-x-2">
                <input
                  type="number"
                  value={filters.priceRange.min}
                  onChange={(e) =>
                    setPriceRange(Number(e.target.value), filters.priceRange.max)
                  }
                  placeholder="最低价"
                  className="w-full px-3 py-2 border rounded"
                />
                <input
                  type="number"
                  value={filters.priceRange.max}
                  onChange={(e) =>
                    setPriceRange(filters.priceRange.min, Number(e.target.value))
                  }
                  placeholder="最高价"
                  className="w-full px-3 py-2 border rounded"
                />
              </div>
            </div>
            <div>
              <label className="block text-sm font-medium mb-1">排序</label>
              <select
                value={\`\${filters.sortBy}-\${filters.sortOrder}\`}
                onChange={(e) => {
                  const [sortBy, sortOrder] = e.target.value.split("-");
                  setSortBy(sortBy as any);
                  setSortOrder(sortOrder as any);
                }}
                className="w-full px-3 py-2 border rounded"
              >
                <option value="name-asc">名称 A-Z</option>
                <option value="name-desc">名称 Z-A</option>
                <option value="price-asc">价格 低-高</option>
                <option value="price-desc">价格 高-低</option>
                <option value="rating-desc">评分 高-低</option>
              </select>
            </div>
          </div>

          <div className="flex space-x-4 mb-4">
            <label className="flex items-center">
              <input
                type="checkbox"
                checked={filters.inStock}
                onChange={(e) => setInStock(e.target.checked)}
                className="mr-2"
              />
              仅显示有库存
            </label>
            <button
              onClick={resetFilters}
              className="px-4 py-2 bg-gray-500 text-white rounded hover:bg-gray-600"
            >
              重置过滤器
            </button>
          </div>

          {/* 产品列表 */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {products.map((product) => (
              <div key={product.id} className="border rounded-lg p-4">
                <h4 className="font-medium mb-2">{product.name}</h4>
                <p className="text-sm text-gray-600 mb-2">{product.description}</p>
                <p className="text-lg font-bold text-green-600 mb-2">¥{product.price}</p>
                <p className="text-sm text-gray-500 mb-2">
                  评分: {product.rating} ({product.reviews} 评价)
                </p>
                <p className="text-sm text-gray-500 mb-2">库存: {product.stock}</p>
                <p className="text-sm text-gray-500 mb-2">分类: {product.category}</p>
                <button
                  onClick={() => addProductToCart(product.id)}
                  className="w-full px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
                >
                  加入购物车
                </button>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* 购物车 */}
      {cart.items.length > 0 && (
        <div className="bg-white p-6 rounded-lg shadow">
          <h3 className="text-lg font-semibold mb-4">购物车</h3>
          <div className="space-y-2">
            {cart.items.map((item) => {
              const product = products.find((p) => p.id === item.productId);
              return (
                <div key={item.id} className="flex justify-between items-center p-2 border rounded">
                  <span>{product?.name}</span>
                  <span>数量: {item.quantity}</span>
                  <span>¥{product ? product.price * item.quantity : 0}</span>
                </div>
              );
            })}
          </div>
          <div className="mt-4 p-4 bg-gray-50 rounded">
            <p className="text-lg font-bold">
              总计: ¥{cart.totalPrice} ({cart.totalItems} 件商品)
            </p>
          </div>
        </div>
      )}
    </div>
  );
};

export default PerformanceMonitoringDemo;
`,Z=`import { create } from 'zustand';
import { devtools, subscribeWithSelector } from 'zustand/middleware';
import { AppState, User, Product, Cart, CartItem, Order, UIState, Filters } from '../types';

// 生成唯一ID的辅助函数
const generateUniqueId = () => {
  return \`\${Date.now()}-\${Math.random().toString(36).substr(2, 9)}\`;
};

// 定义 Store 接口
interface CombineStore extends AppState {
  // 用户相关操作
  setUser: (user: User) => void;
  updateUser: (updates: Partial<User>) => void;
  updateUserPreferences: (preferences: Partial<User['preferences']>) => void;
  logout: () => void;

  // 产品相关操作
  addProduct: (product: Omit<Product, 'id' | 'createdAt' | 'updatedAt'>) => void;
  updateProduct: (id: string, updates: Partial<Product>) => void;
  deleteProduct: (id: string) => void;
  setProducts: (products: Product[]) => void;

  // 购物车相关操作
  addToCart: (productId: string, quantity?: number) => void;
  removeFromCart: (itemId: string) => void;
  updateCartItemQuantity: (itemId: string, quantity: number) => void;
  clearCart: () => void;
  applyDiscount: (discount: number) => void;

  // 订单相关操作
  createOrder: (order: Omit<Order, 'id' | 'createdAt' | 'updatedAt'>) => void;
  updateOrderStatus: (orderId: string, status: Order['status']) => void;
  cancelOrder: (orderId: string) => void;

  // UI 状态操作
  toggleSidebar: () => void;
  toggleModal: () => void;
  setLoading: (loading: boolean) => void;
  setTheme: (theme: 'light' | 'dark') => void;
  setLanguage: (language: 'zh-CN' | 'en-US') => void;
  addNotification: (notification: Omit<UIState['notifications']['items'][0], 'id' | 'createdAt'>) => void;
  markNotificationAsRead: (notificationId: string) => void;
  clearNotifications: () => void;

  // 过滤器操作
  setSearch: (search: string) => void;
  setCategory: (category: string) => void;
  setPriceRange: (min: number, max: number) => void;
  setRating: (rating: number) => void;
  setSortBy: (sortBy: 'name' | 'price' | 'rating' | 'createdAt') => void;
  setSortOrder: (sortOrder: 'asc' | 'desc') => void;
  setInStock: (inStock: boolean) => void;
  resetFilters: () => void;
}

// 创建 Store
export const useCombineStore = create<CombineStore>()(
  devtools(
    subscribeWithSelector((set, get) => ({
      // 初始状态
      user: null,
      products: [],
      cart: {
        items: [],
        totalItems: 0,
        totalPrice: 0,
        discount: 0,
        shipping: 0,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      orders: [],
      ui: {
        sidebarOpen: false,
        modalOpen: false,
        loading: false,
        theme: 'light',
        language: 'zh-CN',
        notifications: {
          items: [],
          unreadCount: 0,
        },
      },
      filters: {
        search: '',
        category: '',
        priceRange: {
          min: 0,
          max: 20000, // 增加最大价格范围
        },
        rating: 0,
        sortBy: 'name',
        sortOrder: 'asc',
        inStock: false,
      },

      // 用户相关操作
      setUser: (user) => {
        set((state) => ({
          user: {
            ...user,
            updatedAt: new Date(),
          },
        }));
      },

      updateUser: (updates) => {
        set((state) => ({
          user: state.user ? {
            ...state.user,
            ...updates,
            updatedAt: new Date(),
          } : null,
        }));
      },

      updateUserPreferences: (preferences) => {
        set((state) => ({
          user: state.user ? {
            ...state.user,
            preferences: {
              ...state.user.preferences,
              ...preferences,
            },
            updatedAt: new Date(),
          } : null,
        }));
      },

      logout: () => {
        set((state) => ({
          user: null,
          cart: {
            items: [],
            totalItems: 0,
            totalPrice: 0,
            discount: 0,
            shipping: 0,
            createdAt: new Date(),
            updatedAt: new Date(),
          },
        }));
      },

      // 产品相关操作
      addProduct: (product) => {
        set((state) => {
          const newProduct: Product = {
            ...product,
            id: generateUniqueId(),
            createdAt: new Date(),
            updatedAt: new Date(),
          };
          
          return {
            products: [...state.products, newProduct],
          };
        });
      },

      updateProduct: (id, updates) => {
        set((state) => ({
          products: state.products.map((product) =>
            product.id === id
              ? {
                  ...product,
                  ...updates,
                  updatedAt: new Date(),
                }
              : product
          ),
        }));
      },

      deleteProduct: (id) => {
        set((state) => ({
          products: state.products.filter((product) => product.id !== id),
        }));
      },

      setProducts: (products) => {
        set(() => ({ products }));
      },

      // 购物车相关操作
      addToCart: (productId, quantity = 1) => {
        set((state) => {
          const product = state.products.find(p => p.id === productId);
          if (!product) return state;

          const existingItem = state.cart.items.find(item => item.productId === productId);
          let newItems: CartItem[];

          if (existingItem) {
            newItems = state.cart.items.map(item =>
              item.productId === productId
                ? { ...item, quantity: item.quantity + quantity }
                : item
            );
          } else {
            newItems = [
              ...state.cart.items,
              {
                id: generateUniqueId(),
                productId,
                quantity,
                addedAt: new Date(),
              },
            ];
          }

          const totalItems = newItems.reduce((sum, item) => sum + item.quantity, 0);
          const totalPrice = newItems.reduce((sum, item) => {
            const product = state.products.find(p => p.id === item.productId);
            return sum + (product ? product.price * item.quantity : 0);
          }, 0);

          return {
            cart: {
              ...state.cart,
              items: newItems,
              totalItems,
              totalPrice,
              updatedAt: new Date(),
            },
          };
        });
      },

      removeFromCart: (itemId) => {
        set((state) => {
          const newItems = state.cart.items.filter(item => item.id !== itemId);
          const totalItems = newItems.reduce((sum, item) => sum + item.quantity, 0);
          const totalPrice = newItems.reduce((sum, item) => {
            const product = state.products.find(p => p.id === item.productId);
            return sum + (product ? product.price * item.quantity : 0);
          }, 0);

          return {
            cart: {
              ...state.cart,
              items: newItems,
              totalItems,
              totalPrice,
              updatedAt: new Date(),
            },
          };
        });
      },

      updateCartItemQuantity: (itemId, quantity) => {
        set((state) => {
          if (quantity <= 0) {
            return get().removeFromCart(itemId);
          }

          const newItems = state.cart.items.map(item =>
            item.id === itemId ? { ...item, quantity } : item
          );
          const totalItems = newItems.reduce((sum, item) => sum + item.quantity, 0);
          const totalPrice = newItems.reduce((sum, item) => {
            const product = state.products.find(p => p.id === item.productId);
            return sum + (product ? product.price * item.quantity : 0);
          }, 0);

          return {
            cart: {
              ...state.cart,
              items: newItems,
              totalItems,
              totalPrice,
              updatedAt: new Date(),
            },
          };
        });
      },

      clearCart: () => {
        set((state) => ({
          cart: {
            items: [],
            totalItems: 0,
            totalPrice: 0,
            discount: 0,
            shipping: 0,
            createdAt: new Date(),
            updatedAt: new Date(),
          },
        }));
      },

      applyDiscount: (discount) => {
        set((state) => ({
          cart: {
            ...state.cart,
            discount,
            updatedAt: new Date(),
          },
        }));
      },

      // 订单相关操作
      createOrder: (order) => {
        set((state) => {
          const newOrder: Order = {
            ...order,
            id: generateUniqueId(),
            createdAt: new Date(),
            updatedAt: new Date(),
          };
          return {
            orders: [...state.orders, newOrder],
          };
        });
      },

      updateOrderStatus: (orderId, status) => {
        set((state) => ({
          orders: state.orders.map((order) =>
            order.id === orderId
              ? { ...order, status, updatedAt: new Date() }
              : order
          ),
        }));
      },

      cancelOrder: (orderId) => {
        set((state) => ({
          orders: state.orders.map((order) =>
            order.id === orderId
              ? { ...order, status: 'cancelled', updatedAt: new Date() }
              : order
          ),
        }));
      },

      // UI 状态操作
      toggleSidebar: () => {
        set((state) => ({
          ui: {
            ...state.ui,
            sidebarOpen: !state.ui.sidebarOpen,
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

      setLoading: (loading) => {
        set((state) => ({
          ui: {
            ...state.ui,
            loading,
          },
        }));
      },

      setTheme: (theme) => {
        set((state) => ({
          ui: {
            ...state.ui,
            theme,
          },
        }));
      },

      setLanguage: (language) => {
        set((state) => ({
          ui: {
            ...state.ui,
            language,
          },
        }));
      },

      addNotification: (notification) => {
        set((state) => {
          const newNotification = {
            ...notification,
            id: generateUniqueId(),
            createdAt: new Date(),
          };
          return {
            ui: {
              ...state.ui,
              notifications: {
                items: [...state.ui.notifications.items, newNotification],
                unreadCount: state.ui.notifications.unreadCount + 1,
              },
            },
          };
        });
      },

      markNotificationAsRead: (notificationId) => {
        set((state) => ({
          ui: {
            ...state.ui,
            notifications: {
              items: state.ui.notifications.items.map(item =>
                item.id === notificationId ? { ...item, read: true } : item
              ),
              unreadCount: Math.max(0, state.ui.notifications.unreadCount - 1),
            },
          },
        }));
      },

      clearNotifications: () => {
        set((state) => ({
          ui: {
            ...state.ui,
            notifications: {
              items: [],
              unreadCount: 0,
            },
          },
        }));
      },

      // 过滤器操作
      setSearch: (search) => {
        set((state) => ({
          filters: {
            ...state.filters,
            search,
          },
        }));
      },

      setCategory: (category) => {
        set((state) => ({
          filters: {
            ...state.filters,
            category,
          },
        }));
      },

      setPriceRange: (min, max) => {
        set((state) => ({
          filters: {
            ...state.filters,
            priceRange: { min, max },
          },
        }));
      },

      setRating: (rating) => {
        set((state) => ({
          filters: {
            ...state.filters,
            rating,
          },
        }));
      },

      setSortBy: (sortBy) => {
        set((state) => ({
          filters: {
            ...state.filters,
            sortBy,
          },
        }));
      },

      setSortOrder: (sortOrder) => {
        set((state) => ({
          filters: {
            ...state.filters,
            sortOrder,
          },
        }));
      },

      setInStock: (inStock) => {
        set((state) => ({
          filters: {
            ...state.filters,
            inStock,
          },
        }));
      },

      resetFilters: () => {
        set((state) => ({
          filters: {
            search: '',
            category: '',
            priceRange: {
              min: 0,
              max: 20000, // 重置时也使用更大的价格范围
            },
            rating: 0,
            sortBy: 'name',
            sortOrder: 'asc',
            inStock: false,
          },
        }));
      },
    })),
    {
      name: 'combine-store',
    }
  )
);
`,G=`import { AppState, DashboardStats } from '../types';

// 创建带性能监控的选择器
const createSelector = <T>(selector: (state: AppState) => T, name: string) => {
  let callCount = 0;
  let totalTime = 0;

  return (state: AppState): T & { _performance?: { callCount: number; avgTime: number } } => {
    const start = performance.now();
    const result = selector(state);
    const end = performance.now();
    
    callCount++;
    totalTime += (end - start);
    
    return {
      ...result,
      _performance: {
        callCount,
        avgTime: totalTime / callCount,
      },
    } as T & { _performance?: { callCount: number; avgTime: number } };
  };
};

// 组合选择器
export const combinedSelectors = {
  // 用户档案选择器
  userProfile: (state: AppState) => {
    const { user } = state;
    return {
      isLoggedIn: !!user,
      user: user ? {
        id: user.id,
        name: user.name,
        email: user.email,
        role: user.role,
        avatar: user.avatar,
        preferences: user.preferences,
        createdAt: user.createdAt,
        updatedAt: user.updatedAt,
      } : null,
      loginStatus: user ? '已登录' : '未登录',
      userRole: user?.role || 'guest',
    };
  },

  // 购物车摘要选择器
  cartSummary: (state: AppState) => {
    const { cart, products } = state;
    const cartItems = cart.items.map(item => {
      const product = products.find(p => p.id === item.productId);
      return {
        ...item,
        product: product ? {
          name: product.name,
          price: product.price,
          image: product.images[0],
        } : null,
      };
    });

    return {
      totalItems: cart.totalItems,
      totalPrice: cart.totalPrice,
      discount: cart.discount,
      shipping: cart.shipping,
      finalPrice: cart.totalPrice - cart.discount + cart.shipping,
      items: cartItems,
      isEmpty: cart.items.length === 0,
    };
  },

  // 产品过滤器选择器
  productFilters: (state: AppState) => {
    const { products, filters } = state;
    console.log("=== 产品过滤器选择器开始 ===");
    console.log("产品数量:", products.length);
    console.log("产品列表:", products.map(p => ({ 
      id: p.id, 
      name: p.name, 
      category: p.category,
      tags: p.tags,
      price: p.price
    })));
    console.log("过滤器设置:", filters);
    
    // 如果没有产品，直接返回空结果
    if (!products || products.length === 0) {
      console.log("没有产品，返回空结果");
      return {
        filteredProducts: [],
        totalCount: 0,
        hasFilters: false,
      };
    }

    let filteredProducts = [...products];
    console.log("初始产品数量:", filteredProducts.length);

    // 搜索过滤
    if (filters.search && filters.search.trim()) {
      const searchLower = filters.search.toLowerCase().trim();
      console.log("执行搜索过滤，关键词:", searchLower);
      
      const beforeSearch = filteredProducts.length;
      filteredProducts = filteredProducts.filter((product) => {
        const nameMatch = product.name.toLowerCase().includes(searchLower);
        const descMatch = product.description.toLowerCase().includes(searchLower);
        const tagMatch = product.tags.some((tag) => tag.toLowerCase().includes(searchLower));
        
        const matches = nameMatch || descMatch || tagMatch;
        console.log(\`产品 "\${product.name}": 名称匹配=\${nameMatch}, 描述匹配=\${descMatch}, 标签匹配=\${tagMatch}, 总匹配=\${matches}\`);
        
        return matches;
      });
      console.log(\`搜索过滤结果: \${beforeSearch} -> \${filteredProducts.length}\`);
    }

    // 分类过滤
    if (filters.category && filters.category.trim()) {
      console.log("执行分类过滤，分类:", filters.category);
      const beforeCategory = filteredProducts.length;
      filteredProducts = filteredProducts.filter((product) => {
        const matches = product.category === filters.category;
        console.log(\`产品 "\${product.name}": 分类=\${product.category}, 匹配=\${matches}\`);
        return matches;
      });
      console.log(\`分类过滤结果: \${beforeCategory} -> \${filteredProducts.length}\`);
    }

    // 价格范围过滤
    console.log("执行价格过滤，范围:", filters.priceRange);
    const beforePrice = filteredProducts.length;
    filteredProducts = filteredProducts.filter((product) => {
      const matches = product.price >= filters.priceRange.min && product.price <= filters.priceRange.max;
      console.log(\`产品 "\${product.name}": 价格=\${product.price}, 匹配=\${matches}\`);
      return matches;
    });
    console.log(\`价格过滤结果: \${beforePrice} -> \${filteredProducts.length}\`);

    // 评分过滤
    if (filters.rating > 0) {
      console.log("执行评分过滤，最低评分:", filters.rating);
      const beforeRating = filteredProducts.length;
      filteredProducts = filteredProducts.filter((product) => {
        const matches = product.rating >= filters.rating;
        console.log(\`产品 "\${product.name}": 评分=\${product.rating}, 匹配=\${matches}\`);
        return matches;
      });
      console.log(\`评分过滤结果: \${beforeRating} -> \${filteredProducts.length}\`);
    }

    // 库存过滤
    if (filters.inStock) {
      console.log("执行库存过滤");
      const beforeStock = filteredProducts.length;
      filteredProducts = filteredProducts.filter((product) => {
        const matches = product.stock > 0;
        console.log(\`产品 "\${product.name}": 库存=\${product.stock}, 匹配=\${matches}\`);
        return matches;
      });
      console.log(\`库存过滤结果: \${beforeStock} -> \${filteredProducts.length}\`);
    }

    // 排序
    console.log("执行排序，排序方式:", filters.sortBy, filters.sortOrder);
    filteredProducts.sort((a, b) => {
      let aValue: any, bValue: any;

      switch (filters.sortBy) {
        case "name":
          aValue = a.name;
          bValue = b.name;
          break;
        case "price":
          aValue = a.price;
          bValue = b.price;
          break;
        case "rating":
          aValue = a.rating;
          bValue = b.rating;
          break;
        case "createdAt":
          aValue = a.createdAt.getTime();
          bValue = b.createdAt.getTime();
          break;
        default:
          aValue = a.name;
          bValue = b.name;
      }

      if (filters.sortOrder === "asc") {
        return aValue > bValue ? 1 : -1;
      } else {
        return aValue < bValue ? 1 : -1;
      }
    });

    const hasFilters = !!(
      (filters.search && filters.search.trim()) ||
      (filters.category && filters.category.trim()) ||
      filters.rating > 0 ||
      filters.inStock ||
      filters.priceRange.min > 0 ||
      filters.priceRange.max < 1000
    );

    const result = {
      filteredProducts,
      totalCount: filteredProducts.length,
      hasFilters,
    };
    
    console.log("=== 产品过滤器选择器结束 ===");
    console.log("最终结果:", result);
    return result;
  },

  // 用户偏好选择器
  userPreferences: (state: AppState) => {
    const { user, ui } = state;
    return {
      theme: user?.preferences?.theme || ui.theme,
      language: user?.preferences?.language || ui.language,
      notifications: user?.preferences?.notifications ?? true,
      sidebarOpen: ui.sidebarOpen,
      modalOpen: ui.modalOpen,
      loading: ui.loading,
    };
  },

  // 仪表板统计选择器
  dashboardStats: (state: AppState): DashboardStats => {
    const { products, cart, user, orders } = state;
    
    // 产品统计
    const productStats = {
      total: products.length,
      inStock: products.filter(p => p.stock > 0).length,
      outOfStock: products.filter(p => p.stock === 0).length,
      averagePrice: products.length > 0 
        ? products.reduce((sum, p) => sum + p.price, 0) / products.length 
        : 0,
      categories: [...new Set(products.map(p => p.category))],
    };

    // 购物车统计
    const cartStats = {
      totalItems: cart.totalItems,
      totalValue: cart.totalPrice,
      averageItemValue: cart.totalItems > 0 ? cart.totalPrice / cart.totalItems : 0,
    };

    // 用户统计
    const userStats = {
      isLoggedIn: !!user,
      userRole: user?.role || 'guest',
      loginTime: user?.createdAt,
    };

    // 订单统计
    const orderStats = {
      total: orders.length,
      pending: orders.filter(o => o.status === 'pending').length,
      completed: orders.filter(o => o.status === 'completed').length,
      cancelled: orders.filter(o => o.status === 'cancelled').length,
      totalValue: orders.reduce((sum, o) => sum + o.totalAmount, 0),
    };

    return {
      products: productStats,
      cart: cartStats,
      user: userStats,
      orders: orderStats,
      lastUpdated: new Date(),
    };
  },
};

// 性能监控选择器
export const performanceSelectors = {
  userProfile: createSelector(combinedSelectors.userProfile, 'userProfile'),
  cartSummary: createSelector(combinedSelectors.cartSummary, 'cartSummary'),
  productFilters: createSelector(combinedSelectors.productFilters, 'productFilters'),
  userPreferences: createSelector(combinedSelectors.userPreferences, 'userPreferences'),
  dashboardStats: createSelector(combinedSelectors.dashboardStats, 'dashboardStats'),
};
`,X=`// 用户相关类型
export interface User {
  id: string;
  name: string;
  email: string;
  avatar: string;
  role: 'admin' | 'user' | 'guest';
  preferences: {
    theme: 'light' | 'dark';
    language: 'zh-CN' | 'en-US';
    notifications: boolean;
  };
  createdAt: Date;
  updatedAt: Date;
}

// 产品相关类型
export interface Product {
  id: string;
  name: string;
  description: string;
  price: number;
  category: string;
  stock: number;
  images: string[];
  tags: string[];
  rating: number;
  reviews: number;
  createdAt: Date;
  updatedAt: Date;
}

// 购物车相关类型
export interface CartItem {
  id: string;
  productId: string;
  quantity: number;
  addedAt: Date;
}

export interface Cart {
  items: CartItem[];
  totalItems: number;
  totalPrice: number;
  discount: number;
  shipping: number;
  createdAt: Date;
  updatedAt: Date;
}

// 订单相关类型
export interface Order {
  id: string;
  userId: string;
  items: CartItem[];
  status: 'pending' | 'processing' | 'shipped' | 'delivered' | 'cancelled';
  totalAmount: number;
  shippingAddress: {
    name: string;
    address: string;
    city: string;
    postalCode: string;
    country: string;
  };
  paymentMethod: string;
  createdAt: Date;
  updatedAt: Date;
}

// UI 状态类型
export interface UIState {
  sidebarOpen: boolean;
  modalOpen: boolean;
  loading: boolean;
  theme: 'light' | 'dark';
  language: 'zh-CN' | 'en-US';
  notifications: {
    enabled: boolean;
    count: number;
    items: Array<{
      id: string;
      title: string;
      message: string;
      type: 'info' | 'success' | 'warning' | 'error';
      read: boolean;
      createdAt: Date;
    }>;
  };
}

// 过滤器类型
export interface Filters {
  search: string;
  category: string;
  priceRange: {
    min: number;
    max: number;
  };
  rating: number;
  sortBy: 'name' | 'price' | 'rating' | 'createdAt';
  sortOrder: 'asc' | 'desc';
  inStock: boolean;
}

// 应用状态类型
export interface AppState {
  user: User | null;
  products: Product[];
  cart: Cart;
  orders: Order[];
  ui: UIState;
  filters: Filters;
}

// 选择器类型
export type UserSelector = (state: AppState) => User | null;
export type ProductsSelector = (state: AppState) => Product[];
export type CartSelector = (state: AppState) => Cart;
export type UIStateSelector = (state: AppState) => UIState;
export type FiltersSelector = (state: AppState) => Filters;

// 组合选择器类型
export interface CombinedSelectors {
  userProfile: (state: AppState) => {
    user: User | null;
    isLoggedIn: boolean;
    isAdmin: boolean;
  };
  cartSummary: (state: AppState) => {
    totalItems: number;
    totalPrice: number;
    itemCount: number;
    isEmpty: boolean;
  };
  productFilters: (state: AppState) => {
    filteredProducts: Product[];
    totalCount: number;
    hasFilters: boolean;
  };
  userPreferences: (state: AppState) => {
    theme: 'light' | 'dark';
    language: 'zh-CN' | 'en-US';
    notifications: boolean;
  };
  dashboardStats: (state: AppState) => {
    totalProducts: number;
    totalOrders: number;
    totalUsers: number;
    cartValue: number;
  };
}

// 订阅配置类型
export interface SubscriptionConfig {
  selector: (state: AppState) => any;
  callback: (value: any, previousValue: any) => void;
  options?: {
    equalityFn?: (a: any, b: any) => boolean;
    fireImmediately?: boolean;
  };
}

// 性能监控类型
export interface PerformanceMetrics {
  selectorName: string;
  executionTime: number;
  callCount: number;
  lastCalled: Date;
  averageTime: number;
}
`,ge=()=>e.jsx(ne,{title:"组合选择器 & 订阅选择器",description:"演示 Zustand 的组合选择器和订阅选择器功能，包括状态的高效组合、精确订阅和性能监控，提供更优雅的状态管理和性能优化方案。",overview:[{title:"核心概念",items:["组合选择器 - 将多个状态组合成复杂的选择器，提高代码复用性","订阅选择器 - 精确订阅特定状态变化，避免不必要的重新渲染","性能监控 - 监控选择器性能，优化应用性能","状态管理 - 统一管理应用状态，提供清晰的数据流","类型安全 - 完整的 TypeScript 支持，提供类型安全的状态管理","开发工具 - 集成 Redux DevTools，提供强大的调试功能"]},{title:"主要优势",items:["提高代码复用性 - 通过组合选择器减少重复代码","优化性能 - 通过精确订阅减少不必要的重新渲染","改善开发体验 - 提供清晰的 API 和完整的类型支持","增强可维护性 - 模块化的状态管理结构","提升调试能力 - 完整的性能监控和状态追踪","减少内存泄漏 - 自动管理订阅生命周期"]},{title:"适用场景",items:["复杂状态组合 - 需要将多个状态组合成复杂选择器的场景","精确状态订阅 - 需要精确控制状态变化监听的场景","性能优化 - 需要监控和优化选择器性能的场景","状态管理 - 需要统一管理应用状态的场景","实时数据更新 - 需要实时响应状态变化的场景","组件优化 - 需要减少不必要重新渲染的场景"]},{title:"注意事项",items:["合理设计选择器结构，避免过度复杂化","注意订阅的生命周期管理，防止内存泄漏","监控选择器性能，避免性能瓶颈","使用 TypeScript 确保类型安全","合理使用组合选择器，避免过度抽象","注意选择器的依赖关系，避免循环依赖"]}],examples:[{title:"组合选择器演示",component:e.jsx(ae,{}),description:"展示如何使用 combine 功能创建复杂的组合选择器，实现状态的高效组合和计算。",observationPoints:["用户档案选择器 - 组合用户信息和登录状态","购物车摘要选择器 - 计算购物车总价和商品数量","产品过滤器选择器 - 根据过滤条件筛选和排序产品","用户偏好选择器 - 获取用户主题和语言偏好","仪表板统计选择器 - 获取应用统计数据","实时状态更新和选择器结果展示","交互式测试数据创建和状态修改"],keyPoints:["使用组合选择器减少重复代码","提供清晰的状态组合逻辑","支持复杂的数据计算和过滤","实时响应状态变化","提供完整的类型支持"],commonTraps:["选择器过于复杂导致性能问题","忘记处理空值或未定义状态","选择器依赖关系不清晰","没有考虑选择器的性能影响"],solutions:["合理设计选择器结构","添加适当的错误处理","明确文档化选择器依赖","使用性能监控工具"],preCode:[{title:"类型定义",code:X},{title:"主 Store",code:Z},{title:"选择器 Store",code:G}],codeExample:{title:"组合选择器演示",code:ce}},{title:"订阅选择器演示",component:e.jsx(oe,{}),description:"展示如何使用 subscribeWithSelector 功能实现精确的状态订阅和变化监听。",observationPoints:["精确的状态订阅 - 只订阅特定选择器的变化","订阅生命周期管理 - 创建、取消和清理订阅","实时日志记录 - 记录所有订阅变化和状态更新","订阅状态监控 - 显示活跃订阅和调用统计","自定义选择器订阅 - 支持任意选择器的订阅","订阅性能优化 - 避免不必要的重新渲染","订阅清理机制 - 防止内存泄漏"],keyPoints:["使用 subscribeWithSelector 精确订阅","自动管理订阅生命周期","提供详细的订阅日志","支持订阅状态监控","防止内存泄漏"],commonTraps:["忘记取消订阅导致内存泄漏","订阅过于频繁导致性能问题","没有正确处理订阅错误","订阅回调函数过于复杂"],solutions:["使用 useEffect 管理订阅生命周期","合理设置订阅频率","添加错误处理机制","简化订阅回调逻辑"],preCode:[{title:"类型定义",code:X},{title:"主 Store",code:Z},{title:"选择器 Store",code:G}],codeExample:{title:"订阅选择器演示",code:le}},{title:"性能监控演示",component:e.jsx(ie,{}),description:"展示如何监控选择器的性能，包括执行时间、调用次数和性能分析。",observationPoints:["选择器性能监控 - 实时监控选择器执行时间","性能指标收集 - 记录平均时间、调用次数等指标","性能测试工具 - 批量测试选择器性能","性能分析报告 - 生成详细的性能分析报告","性能优化建议 - 基于监控数据提供优化建议","性能对比分析 - 对比不同选择器的性能表现","性能趋势分析 - 分析性能变化趋势"],keyPoints:["实时监控选择器性能","收集详细的性能指标","提供性能测试工具","生成性能分析报告","支持性能优化建议"],commonTraps:["性能监控本身影响性能","没有正确解读性能数据","过度优化导致代码复杂化","忽略性能监控的准确性"],solutions:["使用轻量级性能监控","正确分析性能数据","平衡性能与代码可读性","验证性能监控的准确性"],preCode:[{title:"类型定义",code:X},{title:"主 Store",code:Z},{title:"选择器 Store",code:G}],codeExample:{title:"性能监控演示",code:de}}],tutorial:{concepts:["组合选择器的设计和实现","subscribeWithSelector 的使用方法","性能监控的实现原理","选择器的最佳实践","订阅生命周期管理"],steps:["设计选择器结构和类型定义","实现组合选择器逻辑","配置 subscribeWithSelector 中间件","添加性能监控装饰器","实现订阅生命周期管理","测试选择器性能和功能"],tips:["合理设计选择器结构，避免过度复杂化","使用 TypeScript 确保类型安全","注意订阅的生命周期管理","监控选择器性能，避免性能瓶颈","提供清晰的错误处理机制","文档化选择器的使用方法和依赖关系"]},interview:{questions:[{question:"什么是组合选择器？它有什么优势？",answer:"组合选择器是将多个状态组合成复杂选择器的功能，可以提高代码复用性，减少重复代码，提供清晰的状态组合逻辑。"},{question:"subscribeWithSelector 如何工作？",answer:"subscribeWithSelector 允许精确订阅特定选择器的变化，只在该选择器返回的值发生变化时触发回调，避免不必要的重新渲染。"},{question:"如何监控选择器的性能？",answer:"可以通过装饰器模式包装选择器，记录执行时间、调用次数等指标，生成性能分析报告，提供优化建议。"},{question:"如何避免订阅导致的内存泄漏？",answer:"使用 useEffect 管理订阅生命周期，在组件卸载时取消订阅，使用订阅管理器统一管理所有订阅。"}],keyPoints:["组合选择器的设计和实现","subscribeWithSelector 的使用方法","性能监控的实现原理","订阅生命周期管理"]},bestPractices:{dos:["合理设计选择器结构，避免过度复杂化","使用 TypeScript 确保类型安全","注意订阅的生命周期管理","监控选择器性能，避免性能瓶颈","提供清晰的错误处理机制","文档化选择器的使用方法和依赖关系"],donts:["不要创建过于复杂的选择器","不要忘记取消订阅导致内存泄漏","不要忽略选择器的性能影响","不要在没有类型检查的情况下使用选择器"],patterns:["组合选择器 + 类型安全","subscribeWithSelector + 生命周期管理","性能监控 + 装饰器模式","订阅管理器 + 错误处理"]}});export{ge as default};
