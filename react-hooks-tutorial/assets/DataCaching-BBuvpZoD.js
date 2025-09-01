import{r,j as e}from"./index-nevtk0dH.js";import{C as K}from"./ComponentTemplate-CQT_cNgc.js";const w=(s,t,n=[],o={})=>{const{ttl:l=5*60*1e3,maxSize:c=100}=o,i=r.useRef(new Map),[b,u]=r.useState(null),[h,a]=r.useState(!1),[x,p]=r.useState(null),[v,f]=r.useState(!1),[T,k]=r.useState(0),D=r.useCallback(g=>{const d=i.current,m=d.get(g);if(!m)return null;const C=Date.now();return m.expiry&&C>m.expiry?(d.delete(g),null):m.data},[]),y=r.useCallback((g,d)=>{const m=i.current,C=Date.now();m.set(g,{data:d,timestamp:C,expiry:l>0?C+l:void 0});const E=Array.from(m.entries());for(const[j,R]of E)R.expiry&&C>R.expiry&&m.delete(j);if(m.size>c){const j=Array.from(m.entries());j.sort((S,A)=>S[1].timestamp-A[1].timestamp),j.slice(0,m.size-c).forEach(([S])=>m.delete(S))}},[l,c]),N=r.useMemo(()=>`${s}_${JSON.stringify(n)}`,[s,n]),$=r.useCallback(async(g=!1)=>{if(!g){const d=D(N);if(d!==null)return u(d),f(!0),d}a(!0),p(null),f(!1),k(d=>d+1);try{const d=await t();return u(d),y(N,d),d}catch(d){const m=d instanceof Error?d:new Error("Unknown error");throw p(m),m}finally{a(!1)}},[N,t,D,y]),P=r.useCallback(g=>{g?i.current.delete(g):i.current.clear()},[]),L=r.useCallback(async()=>{a(!0),p(null),f(!1),k(g=>g+1);try{const g=await t();return u(g),y(N,g),g}catch(g){const d=g instanceof Error?g:new Error("Unknown error");throw p(d),d}finally{a(!1)}},[N,t,y]);return r.useEffect(()=>{(async()=>{const d=D(N);if(d!==null){u(d),f(!0);return}a(!0),p(null),f(!1),k(m=>m+1);try{const m=await t();u(m),y(N,m)}catch(m){const C=m instanceof Error?m:new Error("Unknown error");p(C)}finally{a(!1)}})()},[N]),{data:b,loading:h,error:x,cacheHit:v,requestCount:T,refresh:L,clearCache:P,executeRequest:$}},F=(s,t)=>{const[n,o]=r.useState(0);return{result:r.useMemo(()=>(o(c=>c+1),console.log(`🔄 执行计算 (第${n+1}次)`),s()),t),computeCount:n}},z=()=>{const[s,t]=r.useState(new Map),[n,o]=r.useState(0),[l,c]=r.useState(0),i=r.useCallback(x=>{o(v=>v+1);const p=s.get(x);return p!==void 0&&c(v=>v+1),p},[s]),b=r.useCallback((x,p)=>{t(v=>new Map(v).set(x,p))},[]),u=r.useCallback(x=>{t(p=>{const v=new Map(p);return v.delete(x),v})},[]),h=r.useCallback(()=>{t(new Map),o(0),c(0)},[]),a=n>0?(l/n*100).toFixed(1):"0";return{get:i,set:b,delete:u,clear:h,cache:s,accessCount:n,hitCount:l,hitRate:a}},M=s=>{console.log(`🔄 执行复杂计算: ${s}`);let t=0;for(let n=0;n<1e6;n++)t+=Math.sqrt(s*n);return Math.floor(t)},B=({number:s,renderCount:t})=>{const n=M(s);return e.jsxs("div",{className:"p-4 border rounded-lg bg-red-50 border-red-200",children:[e.jsxs("h4",{className:"font-semibold text-red-800 mb-3",children:["未使用缓存 (渲染次数: ",t,")"]}),e.jsxs("div",{className:"space-y-2 text-sm",children:[e.jsxs("div",{children:[e.jsx("strong",{children:"输入数字:"})," ",s]}),e.jsxs("div",{children:[e.jsx("strong",{children:"计算结果:"})," ",n.toLocaleString()]})]}),e.jsx("div",{className:"mt-2 text-xs text-red-600",children:"⚠️ 每次渲染都重新计算，性能较差"})]})},_=({number:s,renderCount:t})=>{const n=r.useMemo(()=>M(s),[s]);return e.jsxs("div",{className:"p-4 border rounded-lg bg-green-50 border-green-200",children:[e.jsxs("h4",{className:"font-semibold text-green-800 mb-3",children:["使用 useMemo 缓存 (渲染次数: ",t,")"]}),e.jsxs("div",{className:"space-y-2 text-sm",children:[e.jsxs("div",{children:[e.jsx("strong",{children:"输入数字:"})," ",s]}),e.jsxs("div",{children:[e.jsx("strong",{children:"计算结果:"})," ",n.toLocaleString()]})]}),e.jsx("div",{className:"mt-2 text-xs text-green-600",children:"✅ 使用 useMemo 缓存，只在依赖项变化时重新计算"})]})},J=({number:s,renderCount:t})=>{const{result:n,computeCount:o}=F(()=>M(s),[s]);return e.jsxs("div",{className:"p-4 border rounded-lg bg-blue-50 border-blue-200",children:[e.jsxs("h4",{className:"font-semibold text-blue-800 mb-3",children:["使用自定义缓存 Hook (渲染次数: ",t,")"]}),e.jsxs("div",{className:"space-y-2 text-sm",children:[e.jsxs("div",{children:[e.jsx("strong",{children:"输入数字:"})," ",s]}),e.jsxs("div",{children:[e.jsx("strong",{children:"计算结果:"})," ",n.toLocaleString()]}),e.jsxs("div",{className:"text-blue-600",children:[e.jsx("strong",{children:"计算执行次数:"})," ",o]})]}),e.jsx("div",{className:"mt-2 text-xs text-blue-600",children:"✅ 使用自定义 Hook 缓存，提供计算统计信息"})]})},O=()=>{const[s,t]=r.useState(100),[n,o]=r.useState(0),[l,c]=r.useState(0),[i,b]=r.useState(0),u=()=>{o(a=>a+1),c(a=>a+1),b(a=>a+1)},h=a=>{t(a),o(x=>x+1),c(x=>x+1),b(x=>x+1)};return e.jsxs("div",{className:"space-y-6",children:[e.jsxs("div",{className:"bg-gray-50 p-4 rounded-lg border",children:[e.jsx("h3",{className:"font-semibold mb-3",children:"计算缓存控制面板"}),e.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-3 gap-4",children:[e.jsxs("div",{children:[e.jsx("label",{className:"block text-sm font-medium mb-2",children:"计算数字:"}),e.jsxs("div",{className:"flex gap-2",children:[e.jsx("input",{type:"number",value:s,onChange:a=>h(Number(a.target.value)),className:"flex-1 px-3 py-1 border rounded text-sm"}),e.jsx("button",{onClick:()=>h(Math.floor(Math.random()*1e3)),className:"px-3 py-1 bg-blue-500 text-white rounded text-sm hover:bg-blue-600",children:"随机"})]})]}),e.jsxs("div",{children:[e.jsx("label",{className:"block text-sm font-medium mb-2",children:"性能测试:"}),e.jsx("button",{onClick:u,className:"w-full px-3 py-1 bg-orange-500 text-white rounded text-sm hover:bg-orange-600",children:"强制重新渲染"})]}),e.jsxs("div",{children:[e.jsx("label",{className:"block text-sm font-medium mb-2",children:"当前数字:"}),e.jsx("div",{className:"text-lg font-bold text-gray-700",children:s})]})]}),e.jsx("div",{className:"mt-3 text-xs text-gray-600",children:"💡 打开浏览器控制台查看计算执行情况"})]}),e.jsxs("div",{className:"grid grid-cols-1 lg:grid-cols-3 gap-6",children:[e.jsx(B,{number:s,renderCount:n}),e.jsx(_,{number:s,renderCount:l}),e.jsx(J,{number:s,renderCount:i})]}),e.jsxs("div",{className:"bg-yellow-50 p-4 rounded-lg border border-yellow-200",children:[e.jsx("h4",{className:"font-semibold text-yellow-800 mb-2",children:"计算缓存说明:"}),e.jsxs("ul",{className:"text-sm text-yellow-700 space-y-1",children:[e.jsxs("li",{children:["• ",e.jsx("strong",{children:'点击"强制重新渲染"'}),"：左侧组件会重新计算，中间和右侧组件使用缓存"]}),e.jsxs("li",{children:["• ",e.jsx("strong",{children:"修改计算数字"}),"：所有组件都会重新计算（依赖项变化）"]}),e.jsxs("li",{children:["• ",e.jsx("strong",{children:"观察要点"}),"：对比控制台输出，缓存组件只在依赖项变化时才重新计算"]}),e.jsxs("li",{children:["• ",e.jsx("strong",{children:"自定义 Hook"}),"：提供了计算统计信息，便于性能分析"]})]})]})]})},q=s=>new Promise(t=>setTimeout(t,s)),U={async getUser(s){return console.log(`🌐 发起用户请求: ${s}`),await q(1e3+Math.random()*1e3),{id:s,name:`用户${s}`,email:`user${s}@example.com`,avatar:`https://api.dicebear.com/7.x/avataaars/svg?seed=${s}`}},async getPosts(s){return console.log(`🌐 发起文章请求: 用户${s}`),await q(800+Math.random()*800),Array.from({length:3},(t,n)=>({id:s*10+n+1,title:`用户${s}的文章${n+1}`,content:`这是用户${s}的第${n+1}篇文章内容...`,userId:s}))}},G=({userId:s})=>{const[t,n]=r.useState(null),[o,l]=r.useState(!1),[c,i]=r.useState(0);return r.useEffect(()=>{(async()=>{l(!0),i(u=>u+1);try{const u=await U.getUser(s);n(u)}catch(u){console.error("获取用户失败:",u)}finally{l(!1)}})()},[s]),e.jsxs("div",{className:"p-4 border rounded-lg bg-red-50 border-red-200",children:[e.jsxs("h4",{className:"font-semibold text-red-800 mb-3",children:["未使用缓存 (请求次数: ",c,")"]}),o?e.jsxs("div",{className:"flex items-center space-x-2",children:[e.jsx("div",{className:"animate-spin rounded-full h-4 w-4 border-b-2 border-red-600"}),e.jsx("span",{className:"text-sm text-red-600",children:"加载中..."})]}):t?e.jsxs("div",{className:"space-y-2 text-sm",children:[e.jsxs("div",{children:[e.jsx("strong",{children:"ID:"})," ",t.id]}),e.jsxs("div",{children:[e.jsx("strong",{children:"姓名:"})," ",t.name]}),e.jsxs("div",{children:[e.jsx("strong",{children:"邮箱:"})," ",t.email]})]}):e.jsx("div",{className:"text-sm text-red-600",children:"暂无数据"}),e.jsx("div",{className:"mt-2 text-xs text-red-600",children:"⚠️ 每次都发起新请求，网络开销大"})]})},Q=({userId:s})=>{const{data:t,loading:n,cacheHit:o,requestCount:l,refresh:c}=w("user",()=>U.getUser(s),[s],{ttl:3e4});return e.jsxs("div",{className:"p-4 border rounded-lg bg-green-50 border-green-200",children:[e.jsxs("h4",{className:"font-semibold text-green-800 mb-3",children:["使用缓存 (请求次数: ",l,")"]}),n?e.jsxs("div",{className:"flex items-center space-x-2",children:[e.jsx("div",{className:"animate-spin rounded-full h-4 w-4 border-b-2 border-green-600"}),e.jsx("span",{className:"text-sm text-green-600",children:"加载中..."})]}):t?e.jsxs("div",{className:"space-y-2 text-sm",children:[e.jsxs("div",{children:[e.jsx("strong",{children:"ID:"})," ",t.id]}),e.jsxs("div",{children:[e.jsx("strong",{children:"姓名:"})," ",t.name]}),e.jsxs("div",{children:[e.jsx("strong",{children:"邮箱:"})," ",t.email]}),e.jsxs("div",{className:`${o?"text-green-600":"text-orange-600"}`,children:[e.jsx("strong",{children:"数据来源:"})," ",o?"缓存":"网络请求"]})]}):e.jsx("div",{className:"text-sm text-green-600",children:"暂无数据"}),e.jsxs("div",{className:"mt-2 flex gap-2",children:[e.jsx("button",{onClick:c,className:"px-2 py-1 bg-green-500 text-white rounded text-xs hover:bg-green-600",children:"刷新"}),e.jsx("div",{className:"text-xs text-green-600",children:"✅ 使用缓存，减少网络请求"})]})]})},V=({userId:s})=>{const{data:t,loading:n,cacheHit:o,requestCount:l}=w("posts",()=>U.getPosts(s),[s],{ttl:6e4});return e.jsxs("div",{className:"p-4 border rounded-lg bg-blue-50 border-blue-200",children:[e.jsxs("h4",{className:"font-semibold text-blue-800 mb-3",children:["文章列表缓存 (请求次数: ",l,")"]}),n?e.jsxs("div",{className:"flex items-center space-x-2",children:[e.jsx("div",{className:"animate-spin rounded-full h-4 w-4 border-b-2 border-blue-600"}),e.jsx("span",{className:"text-sm text-blue-600",children:"加载中..."})]}):t&&t.length>0?e.jsxs("div",{className:"space-y-2",children:[t.map(c=>e.jsxs("div",{className:"text-sm bg-white p-2 rounded border",children:[e.jsx("div",{className:"font-medium",children:c.title}),e.jsx("div",{className:"text-gray-600 text-xs",children:c.content})]},c.id)),e.jsxs("div",{className:`text-xs ${o?"text-blue-600":"text-orange-600"}`,children:[e.jsx("strong",{children:"数据来源:"})," ",o?"缓存":"网络请求"]})]}):e.jsx("div",{className:"text-sm text-blue-600",children:"暂无文章"}),e.jsx("div",{className:"mt-2 text-xs text-blue-600",children:"✅ 独立缓存实例，支持不同的 TTL 设置"})]})},W=()=>{const[s,t]=r.useState(1),[n,o]=r.useState(!0);return e.jsxs("div",{className:"space-y-6",children:[e.jsxs("div",{className:"bg-gray-50 p-4 rounded-lg border",children:[e.jsx("h3",{className:"font-semibold mb-3",children:"请求缓存控制面板"}),e.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-3 gap-4",children:[e.jsxs("div",{children:[e.jsx("label",{className:"block text-sm font-medium mb-2",children:"用户ID:"}),e.jsxs("div",{className:"flex gap-2",children:[e.jsx("input",{type:"number",min:"1",max:"10",value:s,onChange:l=>t(Number(l.target.value)),className:"flex-1 px-3 py-1 border rounded text-sm"}),e.jsx("button",{onClick:()=>t(Math.floor(Math.random()*10)+1),className:"px-3 py-1 bg-blue-500 text-white rounded text-sm hover:bg-blue-600",children:"随机"})]})]}),e.jsxs("div",{children:[e.jsx("label",{className:"block text-sm font-medium mb-2",children:"显示对比:"}),e.jsxs("label",{className:"flex items-center",children:[e.jsx("input",{type:"checkbox",checked:n,onChange:l=>o(l.target.checked),className:"mr-2"}),e.jsx("span",{className:"text-sm",children:"显示未缓存组件"})]})]}),e.jsxs("div",{children:[e.jsx("label",{className:"block text-sm font-medium mb-2",children:"当前用户:"}),e.jsxs("div",{className:"text-lg font-bold text-gray-700",children:["用户 ",s]})]})]}),e.jsx("div",{className:"mt-3 text-xs text-gray-600",children:"💡 切换用户ID或重复选择相同ID，观察缓存效果"})]}),e.jsxs("div",{className:`grid gap-6 ${n?"grid-cols-1 lg:grid-cols-2":"grid-cols-1"}`,children:[n&&e.jsx(G,{userId:s}),e.jsx(Q,{userId:s})]}),e.jsx(V,{userId:s}),e.jsxs("div",{className:"bg-yellow-50 p-4 rounded-lg border border-yellow-200",children:[e.jsx("h4",{className:"font-semibold text-yellow-800 mb-2",children:"请求缓存说明:"}),e.jsxs("ul",{className:"text-sm text-yellow-700 space-y-1",children:[e.jsxs("li",{children:["• ",e.jsx("strong",{children:"首次请求"}),'：从网络获取数据，显示"网络请求"']}),e.jsxs("li",{children:["• ",e.jsx("strong",{children:"重复请求"}),'：从缓存获取数据，显示"缓存"，无网络开销']}),e.jsxs("li",{children:["• ",e.jsx("strong",{children:"缓存过期"}),"：用户信息30秒TTL，文章60秒TTL"]}),e.jsxs("li",{children:["• ",e.jsx("strong",{children:"不同用户"}),"：每个用户ID有独立的缓存"]}),e.jsxs("li",{children:["• ",e.jsx("strong",{children:"手动刷新"}),"：点击刷新按钮强制重新请求"]})]})]})]})},H={async getUserProfile(s,t=1){return console.log(`🔄 获取用户资料: ID=${s}, 版本=${t}`),await new Promise(n=>setTimeout(n,800)),{id:s,name:`用户${s}`,age:20+s%30,city:["北京","上海","广州","深圳","杭州"][s%5],preferences:{theme:t%2===0?"dark":"light",language:t%3===0?"en":"zh",notifications:t%2===1},lastUpdated:new Date().toLocaleString()}},async searchData(s,t){console.log(`🔍 搜索数据: "${s}", 过滤器:`,t),await new Promise(o=>setTimeout(o,600));const n=[`${s}相关结果1`,`${s}相关结果2`,`${s}相关结果3`,`${t.category||"默认"}分类结果`,`按${t.sortBy||"相关性"}排序的结果`];return{query:s,results:n.slice(0,3+Math.floor(Math.random()*3)),timestamp:new Date().toLocaleString(),count:n.length}}},X=()=>{const[s,t]=r.useState(1),[n,o]=r.useState(1),[l,c]=r.useState(0),{data:i,loading:b,cacheHit:u,refresh:h}=w("userProfile",r.useCallback(async()=>(c(a=>a+1),H.getUserProfile(s,n)),[s,n]),[s,n],{ttl:6e4});return e.jsxs("div",{className:"space-y-4",children:[e.jsxs("div",{className:"bg-blue-50 p-4 rounded-lg border border-blue-200",children:[e.jsxs("h4",{className:"font-semibold text-blue-800 mb-3",children:["依赖项缓存失效 (请求次数: ",l,")"]}),e.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-3 gap-4 mb-4",children:[e.jsxs("div",{children:[e.jsx("label",{className:"block text-sm font-medium mb-1",children:"用户ID:"}),e.jsx("select",{value:s,onChange:a=>t(Number(a.target.value)),className:"w-full px-2 py-1 border rounded text-sm",children:[1,2,3,4,5].map(a=>e.jsxs("option",{value:a,children:["用户 ",a]},a))})]}),e.jsxs("div",{children:[e.jsx("label",{className:"block text-sm font-medium mb-1",children:"数据版本:"}),e.jsx("select",{value:n,onChange:a=>o(Number(a.target.value)),className:"w-full px-2 py-1 border rounded text-sm",children:[1,2,3,4,5].map(a=>e.jsxs("option",{value:a,children:["版本 ",a]},a))})]}),e.jsx("div",{className:"flex items-end",children:e.jsx("button",{onClick:h,className:"px-3 py-1 bg-blue-500 text-white rounded text-sm hover:bg-blue-600",children:"手动刷新"})})]}),b?e.jsxs("div",{className:"flex items-center space-x-2",children:[e.jsx("div",{className:"animate-spin rounded-full h-4 w-4 border-b-2 border-blue-600"}),e.jsx("span",{className:"text-sm text-blue-600",children:"加载中..."})]}):i?e.jsxs("div",{className:"bg-white p-3 rounded border",children:[e.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-4 text-sm",children:[e.jsxs("div",{children:[e.jsxs("div",{children:[e.jsx("strong",{children:"ID:"})," ",i.id]}),e.jsxs("div",{children:[e.jsx("strong",{children:"姓名:"})," ",i.name]}),e.jsxs("div",{children:[e.jsx("strong",{children:"年龄:"})," ",i.age]}),e.jsxs("div",{children:[e.jsx("strong",{children:"城市:"})," ",i.city]})]}),e.jsxs("div",{children:[e.jsxs("div",{children:[e.jsx("strong",{children:"主题:"})," ",i.preferences.theme]}),e.jsxs("div",{children:[e.jsx("strong",{children:"语言:"})," ",i.preferences.language]}),e.jsxs("div",{children:[e.jsx("strong",{children:"通知:"})," ",i.preferences.notifications?"开启":"关闭"]}),e.jsxs("div",{children:[e.jsx("strong",{children:"更新时间:"})," ",i.lastUpdated]})]})]}),e.jsxs("div",{className:`mt-2 text-xs ${u?"text-green-600":"text-orange-600"}`,children:[e.jsx("strong",{children:"数据来源:"})," ",u?"缓存":"网络请求"]})]}):e.jsx("div",{className:"text-sm text-blue-600",children:"暂无数据"})]}),e.jsxs("div",{className:"bg-yellow-50 p-3 rounded border border-yellow-200",children:[e.jsx("h5",{className:"font-medium text-yellow-800 mb-2",children:"观察要点:"}),e.jsxs("ul",{className:"text-sm text-yellow-700 space-y-1",children:[e.jsx("li",{children:"• 改变用户ID或版本时，缓存会自动失效并重新请求"}),e.jsx("li",{children:"• 相同的用户ID和版本组合会使用缓存数据"}),e.jsx("li",{children:"• 依赖项数组 [userId, version] 控制缓存的失效时机"})]})]})]})},Y=()=>{const[s,t]=r.useState("React"),[n,o]=r.useState(""),[l,c]=r.useState("relevance"),i={category:n||void 0,sortBy:l},{data:b,loading:u,cacheHit:h,requestCount:a}=w("search",()=>H.searchData(s,i),[s,n,l],{ttl:3e4});return e.jsxs("div",{className:"space-y-4",children:[e.jsxs("div",{className:"bg-green-50 p-4 rounded-lg border border-green-200",children:[e.jsxs("h4",{className:"font-semibold text-green-800 mb-3",children:["搜索缓存失效 (请求次数: ",a,")"]}),e.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-3 gap-4 mb-4",children:[e.jsxs("div",{children:[e.jsx("label",{className:"block text-sm font-medium mb-1",children:"搜索关键词:"}),e.jsx("input",{type:"text",value:s,onChange:x=>t(x.target.value),placeholder:"输入搜索关键词",className:"w-full px-2 py-1 border rounded text-sm"})]}),e.jsxs("div",{children:[e.jsx("label",{className:"block text-sm font-medium mb-1",children:"分类:"}),e.jsxs("select",{value:n,onChange:x=>o(x.target.value),className:"w-full px-2 py-1 border rounded text-sm",children:[e.jsx("option",{value:"",children:"全部分类"}),e.jsx("option",{value:"技术",children:"技术"}),e.jsx("option",{value:"设计",children:"设计"}),e.jsx("option",{value:"产品",children:"产品"})]})]}),e.jsxs("div",{children:[e.jsx("label",{className:"block text-sm font-medium mb-1",children:"排序:"}),e.jsxs("select",{value:l,onChange:x=>c(x.target.value),className:"w-full px-2 py-1 border rounded text-sm",children:[e.jsx("option",{value:"relevance",children:"相关性"}),e.jsx("option",{value:"date",children:"时间"}),e.jsx("option",{value:"popularity",children:"热度"})]})]})]}),u?e.jsxs("div",{className:"flex items-center space-x-2",children:[e.jsx("div",{className:"animate-spin rounded-full h-4 w-4 border-b-2 border-green-600"}),e.jsx("span",{className:"text-sm text-green-600",children:"搜索中..."})]}):b?e.jsxs("div",{className:"bg-white p-3 rounded border",children:[e.jsxs("div",{className:"mb-2 text-sm",children:[e.jsx("strong",{children:"搜索:"}),' "',b.query,'"',n&&e.jsxs("span",{className:"ml-2",children:[e.jsx("strong",{children:"分类:"})," ",n]}),e.jsxs("span",{className:"ml-2",children:[e.jsx("strong",{children:"排序:"})," ",l]})]}),e.jsx("div",{className:"space-y-2",children:b.results.map((x,p)=>e.jsx("div",{className:"text-sm bg-gray-50 p-2 rounded",children:x},p))}),e.jsxs("div",{className:"mt-2 flex justify-between items-center text-xs",children:[e.jsxs("span",{className:"text-gray-500",children:["搜索时间: ",b.timestamp]}),e.jsxs("span",{className:h?"text-green-600":"text-orange-600",children:[e.jsx("strong",{children:"数据来源:"})," ",h?"缓存":"网络请求"]})]})]}):e.jsx("div",{className:"text-sm text-green-600",children:"暂无搜索结果"})]}),e.jsxs("div",{className:"bg-yellow-50 p-3 rounded border border-yellow-200",children:[e.jsx("h5",{className:"font-medium text-yellow-800 mb-2",children:"观察要点:"}),e.jsxs("ul",{className:"text-sm text-yellow-700 space-y-1",children:[e.jsx("li",{children:"• 修改任一搜索条件（关键词、分类、排序）都会触发缓存失效"}),e.jsx("li",{children:"• 相同的搜索条件组合会复用缓存结果"}),e.jsx("li",{children:"• 实时输入时可以看到缓存命中和失效的切换"})]})]})]})},Z=()=>{const[s,t]=r.useState(0),[n,o]=r.useState("manual-cache"),l=z(),c=()=>{const h={value:s,timestamp:new Date().toLocaleString(),random:Math.random()};l.set(n,h)},i=()=>{const h=l.get(n);alert(h?`缓存数据: ${JSON.stringify(h,null,2)}`:"缓存中没有数据")},b=()=>{l.delete(n)},u=()=>{l.clear()};return e.jsxs("div",{className:"bg-purple-50 p-4 rounded-lg border border-purple-200",children:[e.jsx("h4",{className:"font-semibold text-purple-800 mb-3",children:"手动缓存管理"}),e.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-4 mb-4",children:[e.jsxs("div",{children:[e.jsx("label",{className:"block text-sm font-medium mb-1",children:"计数器值:"}),e.jsxs("div",{className:"flex gap-2",children:[e.jsx("input",{type:"number",value:s,onChange:h=>t(Number(h.target.value)),className:"flex-1 px-2 py-1 border rounded text-sm"}),e.jsx("button",{onClick:()=>t(h=>h+1),className:"px-2 py-1 bg-purple-500 text-white rounded text-sm hover:bg-purple-600",children:"+1"})]})]}),e.jsxs("div",{children:[e.jsx("label",{className:"block text-sm font-medium mb-1",children:"缓存键:"}),e.jsx("input",{type:"text",value:n,onChange:h=>o(h.target.value),className:"w-full px-2 py-1 border rounded text-sm"})]})]}),e.jsxs("div",{className:"flex flex-wrap gap-2 mb-4",children:[e.jsx("button",{onClick:c,className:"px-3 py-1 bg-green-500 text-white rounded text-sm hover:bg-green-600",children:"设置缓存"}),e.jsx("button",{onClick:i,className:"px-3 py-1 bg-blue-500 text-white rounded text-sm hover:bg-blue-600",children:"获取缓存"}),e.jsx("button",{onClick:b,className:"px-3 py-1 bg-orange-500 text-white rounded text-sm hover:bg-orange-600",children:"清除当前缓存"}),e.jsx("button",{onClick:u,className:"px-3 py-1 bg-red-500 text-white rounded text-sm hover:bg-red-600",children:"清除所有缓存"})]}),e.jsxs("div",{className:"bg-yellow-50 p-3 rounded border border-yellow-200",children:[e.jsx("h5",{className:"font-medium text-yellow-800 mb-2",children:"操作说明:"}),e.jsxs("ul",{className:"text-sm text-yellow-700 space-y-1",children:[e.jsx("li",{children:'• 修改计数器值，点击"设置缓存"将当前状态存入缓存'}),e.jsx("li",{children:'• 点击"获取缓存"查看缓存中的数据'}),e.jsx("li",{children:"• 可以修改缓存键来管理不同的缓存项"}),e.jsx("li",{children:"• 支持单个删除和全部清除操作"})]})]})]})},ee=()=>e.jsxs("div",{className:"space-y-6",children:[e.jsx(X,{}),e.jsx(Y,{}),e.jsx(Z,{}),e.jsxs("div",{className:"bg-gray-50 p-4 rounded-lg border",children:[e.jsx("h4",{className:"font-semibold text-gray-800 mb-2",children:"缓存失效机制总结:"}),e.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-4 text-sm text-gray-700",children:[e.jsxs("div",{children:[e.jsx("h5",{className:"font-medium mb-2",children:"自动失效:"}),e.jsxs("ul",{className:"space-y-1",children:[e.jsxs("li",{children:["• ",e.jsx("strong",{children:"依赖项变化"}),"：依赖数组中任一值改变"]}),e.jsxs("li",{children:["• ",e.jsx("strong",{children:"TTL过期"}),"：超过设定的生存时间"]}),e.jsxs("li",{children:["• ",e.jsx("strong",{children:"组件卸载"}),"：组件销毁时清理缓存"]})]})]}),e.jsxs("div",{children:[e.jsx("h5",{className:"font-medium mb-2",children:"手动失效:"}),e.jsxs("ul",{className:"space-y-1",children:[e.jsxs("li",{children:["• ",e.jsx("strong",{children:"refresh()"}),"：强制刷新特定缓存"]}),e.jsxs("li",{children:["• ",e.jsx("strong",{children:"cache.delete()"}),"：删除指定缓存项"]}),e.jsxs("li",{children:["• ",e.jsx("strong",{children:"cache.clear()"}),"：清空所有缓存"]})]})]})]})]})]}),se=`import React, { useState, useCallback } from 'react';
import { useCache, useSimpleCache } from './useCache';

// 模拟数据类型
interface UserProfile {
  id: number;
  name: string;
  age: number;
  city: string;
  preferences: {
    theme: 'light' | 'dark';
    language: string;
    notifications: boolean;
  };
  lastUpdated: string;
}

interface SearchResult {
  query: string;
  results: string[];
  timestamp: string;
  count: number;
}

// 模拟 API
const mockApi = {
  async getUserProfile(userId: number, version: number = 1): Promise<UserProfile> {
    console.log(\`🔄 获取用户资料: ID=\${userId}, 版本=\${version}\`);
    await new Promise(resolve => setTimeout(resolve, 800));
    
    return {
      id: userId,
      name: \`用户\${userId}\`,
      age: 20 + (userId % 30),
      city: ['北京', '上海', '广州', '深圳', '杭州'][userId % 5],
      preferences: {
        theme: version % 2 === 0 ? 'dark' : 'light',
        language: version % 3 === 0 ? 'en' : 'zh',
        notifications: version % 2 === 1
      },
      lastUpdated: new Date().toLocaleString()
    };
  },

  async searchData(query: string, filters: { category?: string; sortBy?: string }): Promise<SearchResult> {
    console.log(\`🔍 搜索数据: "\${query}", 过滤器:\`, filters);
    await new Promise(resolve => setTimeout(resolve, 600));
    
    const mockResults = [
      \`\${query}相关结果1\`,
      \`\${query}相关结果2\`,
      \`\${query}相关结果3\`,
      \`\${filters.category || '默认'}分类结果\`,
      \`按\${filters.sortBy || '相关性'}排序的结果\`
    ];
    
    return {
      query,
      results: mockResults.slice(0, 3 + Math.floor(Math.random() * 3)),
      timestamp: new Date().toLocaleString(),
      count: mockResults.length
    };
  }
};

// 依赖项缓存失效演示
const DependencyInvalidationDemo: React.FC = () => {
  const [userId, setUserId] = useState(1);
  const [version, setVersion] = useState(1);
  const [requestCount, setRequestCount] = useState(0);

  // 使用 useCache，依赖项包含 userId 和 version
  const { 
    data: profile, 
    loading, 
    cacheHit,
    refresh 
  } = useCache(
    'userProfile',
    useCallback(async () => {
      setRequestCount(prev => prev + 1);
      return mockApi.getUserProfile(userId, version);
    }, [userId, version]),
    [userId, version], // 依赖项数组
    { ttl: 60000 }
  );

  return (
    <div className="space-y-4">
      <div className="bg-blue-50 p-4 rounded-lg border border-blue-200">
        <h4 className="font-semibold text-blue-800 mb-3">
          依赖项缓存失效 (请求次数: {requestCount})
        </h4>
        
        {/* 控制面板 */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
          <div>
            <label className="block text-sm font-medium mb-1">用户ID:</label>
            <select
              value={userId}
              onChange={(e) => setUserId(Number(e.target.value))}
              className="w-full px-2 py-1 border rounded text-sm"
            >
              {[1, 2, 3, 4, 5].map(id => (
                <option key={id} value={id}>用户 {id}</option>
              ))}
            </select>
          </div>
          <div>
            <label className="block text-sm font-medium mb-1">数据版本:</label>
            <select
              value={version}
              onChange={(e) => setVersion(Number(e.target.value))}
              className="w-full px-2 py-1 border rounded text-sm"
            >
              {[1, 2, 3, 4, 5].map(v => (
                <option key={v} value={v}>版本 {v}</option>
              ))}
            </select>
          </div>
          <div className="flex items-end">
            <button
              onClick={refresh}
              className="px-3 py-1 bg-blue-500 text-white rounded text-sm hover:bg-blue-600"
            >
              手动刷新
            </button>
          </div>
        </div>

        {/* 数据显示 */}
        {loading ? (
          <div className="flex items-center space-x-2">
            <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-blue-600"></div>
            <span className="text-sm text-blue-600">加载中...</span>
          </div>
        ) : profile ? (
          <div className="bg-white p-3 rounded border">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
              <div>
                <div><strong>ID:</strong> {profile.id}</div>
                <div><strong>姓名:</strong> {profile.name}</div>
                <div><strong>年龄:</strong> {profile.age}</div>
                <div><strong>城市:</strong> {profile.city}</div>
              </div>
              <div>
                <div><strong>主题:</strong> {profile.preferences.theme}</div>
                <div><strong>语言:</strong> {profile.preferences.language}</div>
                <div><strong>通知:</strong> {profile.preferences.notifications ? '开启' : '关闭'}</div>
                <div><strong>更新时间:</strong> {profile.lastUpdated}</div>
              </div>
            </div>
            <div className={\`mt-2 text-xs \${cacheHit ? 'text-green-600' : 'text-orange-600'}\`}>
              <strong>数据来源:</strong> {cacheHit ? '缓存' : '网络请求'}
            </div>
          </div>
        ) : (
          <div className="text-sm text-blue-600">暂无数据</div>
        )}
      </div>

      <div className="bg-yellow-50 p-3 rounded border border-yellow-200">
        <h5 className="font-medium text-yellow-800 mb-2">观察要点:</h5>
        <ul className="text-sm text-yellow-700 space-y-1">
          <li>• 改变用户ID或版本时，缓存会自动失效并重新请求</li>
          <li>• 相同的用户ID和版本组合会使用缓存数据</li>
          <li>• 依赖项数组 [userId, version] 控制缓存的失效时机</li>
        </ul>
      </div>
    </div>
  );
};

// 搜索缓存失效演示
const SearchCacheDemo: React.FC = () => {
  const [query, setQuery] = useState('React');
  const [category, setCategory] = useState('');
  const [sortBy, setSortBy] = useState('relevance');
  
  const filters = { category: category || undefined, sortBy };
  
  const { 
    data: searchResult, 
    loading, 
    cacheHit,
    requestCount 
  } = useCache(
    'search',
    () => mockApi.searchData(query, filters),
    [query, category, sortBy], // 任一搜索条件变化都会使缓存失效
    { ttl: 30000 }
  );

  return (
    <div className="space-y-4">
      <div className="bg-green-50 p-4 rounded-lg border border-green-200">
        <h4 className="font-semibold text-green-800 mb-3">
          搜索缓存失效 (请求次数: {requestCount})
        </h4>
        
        {/* 搜索控制 */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
          <div>
            <label className="block text-sm font-medium mb-1">搜索关键词:</label>
            <input
              type="text"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="输入搜索关键词"
              className="w-full px-2 py-1 border rounded text-sm"
            />
          </div>
          <div>
            <label className="block text-sm font-medium mb-1">分类:</label>
            <select
              value={category}
              onChange={(e) => setCategory(e.target.value)}
              className="w-full px-2 py-1 border rounded text-sm"
            >
              <option value="">全部分类</option>
              <option value="技术">技术</option>
              <option value="设计">设计</option>
              <option value="产品">产品</option>
            </select>
          </div>
          <div>
            <label className="block text-sm font-medium mb-1">排序:</label>
            <select
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value)}
              className="w-full px-2 py-1 border rounded text-sm"
            >
              <option value="relevance">相关性</option>
              <option value="date">时间</option>
              <option value="popularity">热度</option>
            </select>
          </div>
        </div>

        {/* 搜索结果 */}
        {loading ? (
          <div className="flex items-center space-x-2">
            <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-green-600"></div>
            <span className="text-sm text-green-600">搜索中...</span>
          </div>
        ) : searchResult ? (
          <div className="bg-white p-3 rounded border">
            <div className="mb-2 text-sm">
              <strong>搜索:</strong> "{searchResult.query}" 
              {category && <span className="ml-2"><strong>分类:</strong> {category}</span>}
              <span className="ml-2"><strong>排序:</strong> {sortBy}</span>
            </div>
            <div className="space-y-2">
              {searchResult.results.map((result, index) => (
                <div key={index} className="text-sm bg-gray-50 p-2 rounded">
                  {result}
                </div>
              ))}
            </div>
            <div className="mt-2 flex justify-between items-center text-xs">
              <span className="text-gray-500">搜索时间: {searchResult.timestamp}</span>
              <span className={cacheHit ? 'text-green-600' : 'text-orange-600'}>
                <strong>数据来源:</strong> {cacheHit ? '缓存' : '网络请求'}
              </span>
            </div>
          </div>
        ) : (
          <div className="text-sm text-green-600">暂无搜索结果</div>
        )}
      </div>

      <div className="bg-yellow-50 p-3 rounded border border-yellow-200">
        <h5 className="font-medium text-yellow-800 mb-2">观察要点:</h5>
        <ul className="text-sm text-yellow-700 space-y-1">
          <li>• 修改任一搜索条件（关键词、分类、排序）都会触发缓存失效</li>
          <li>• 相同的搜索条件组合会复用缓存结果</li>
          <li>• 实时输入时可以看到缓存命中和失效的切换</li>
        </ul>
      </div>
    </div>
  );
};

// 手动缓存管理演示
const ManualCacheDemo: React.FC = () => {
  const [counter, setCounter] = useState(0);
  const [cacheKey, setCacheKey] = useState('manual-cache');
  
  const cache = useSimpleCache();
  
  const handleSetCache = () => {
    const data = {
      value: counter,
      timestamp: new Date().toLocaleString(),
      random: Math.random()
    };
    cache.set(cacheKey, data);
  };
  
  const handleGetCache = () => {
    const data = cache.get(cacheKey);
    if (data) {
      alert(\`缓存数据: \${JSON.stringify(data, null, 2)}\`);
    } else {
      alert('缓存中没有数据');
    }
  };
  
  const handleClearCache = () => {
    cache.delete(cacheKey);
  };
  
  const handleClearAllCache = () => {
    cache.clear();
  };

  return (
    <div className="bg-purple-50 p-4 rounded-lg border border-purple-200">
      <h4 className="font-semibold text-purple-800 mb-3">手动缓存管理</h4>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
        <div>
          <label className="block text-sm font-medium mb-1">计数器值:</label>
          <div className="flex gap-2">
            <input
              type="number"
              value={counter}
              onChange={(e) => setCounter(Number(e.target.value))}
              className="flex-1 px-2 py-1 border rounded text-sm"
            />
            <button
              onClick={() => setCounter(prev => prev + 1)}
              className="px-2 py-1 bg-purple-500 text-white rounded text-sm hover:bg-purple-600"
            >
              +1
            </button>
          </div>
        </div>
        <div>
          <label className="block text-sm font-medium mb-1">缓存键:</label>
          <input
            type="text"
            value={cacheKey}
            onChange={(e) => setCacheKey(e.target.value)}
            className="w-full px-2 py-1 border rounded text-sm"
          />
        </div>
      </div>
      
      <div className="flex flex-wrap gap-2 mb-4">
        <button
          onClick={handleSetCache}
          className="px-3 py-1 bg-green-500 text-white rounded text-sm hover:bg-green-600"
        >
          设置缓存
        </button>
        <button
          onClick={handleGetCache}
          className="px-3 py-1 bg-blue-500 text-white rounded text-sm hover:bg-blue-600"
        >
          获取缓存
        </button>
        <button
          onClick={handleClearCache}
          className="px-3 py-1 bg-orange-500 text-white rounded text-sm hover:bg-orange-600"
        >
          清除当前缓存
        </button>
        <button
          onClick={handleClearAllCache}
          className="px-3 py-1 bg-red-500 text-white rounded text-sm hover:bg-red-600"
        >
          清除所有缓存
        </button>
      </div>
      
      <div className="bg-yellow-50 p-3 rounded border border-yellow-200">
        <h5 className="font-medium text-yellow-800 mb-2">操作说明:</h5>
        <ul className="text-sm text-yellow-700 space-y-1">
          <li>• 修改计数器值，点击"设置缓存"将当前状态存入缓存</li>
          <li>• 点击"获取缓存"查看缓存中的数据</li>
          <li>• 可以修改缓存键来管理不同的缓存项</li>
          <li>• 支持单个删除和全部清除操作</li>
        </ul>
      </div>
    </div>
  );
};

// 缓存失效演示主组件
export const CacheInvalidationDemo: React.FC = () => {
  return (
    <div className="space-y-6">
      <DependencyInvalidationDemo />
      <SearchCacheDemo />
      <ManualCacheDemo />
      
      {/* 总体说明 */}
      <div className="bg-gray-50 p-4 rounded-lg border">
        <h4 className="font-semibold text-gray-800 mb-2">缓存失效机制总结:</h4>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm text-gray-700">
          <div>
            <h5 className="font-medium mb-2">自动失效:</h5>
            <ul className="space-y-1">
              <li>• <strong>依赖项变化</strong>：依赖数组中任一值改变</li>
              <li>• <strong>TTL过期</strong>：超过设定的生存时间</li>
              <li>• <strong>组件卸载</strong>：组件销毁时清理缓存</li>
            </ul>
          </div>
          <div>
            <h5 className="font-medium mb-2">手动失效:</h5>
            <ul className="space-y-1">
              <li>• <strong>refresh()</strong>：强制刷新特定缓存</li>
              <li>• <strong>cache.delete()</strong>：删除指定缓存项</li>
              <li>• <strong>cache.clear()</strong>：清空所有缓存</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CacheInvalidationDemo;`,te=`import React, { useState, useMemo } from 'react';
import { useComputeCache } from './useCache';

// 模拟复杂计算函数
const expensiveCalculation = (num: number): number => {
  console.log(\`🔄 执行复杂计算: \${num}\`);
  // 模拟耗时计算
  let result = 0;
  for (let i = 0; i < 1000000; i++) {
    result += Math.sqrt(num * i);
  }
  return Math.floor(result);
};

// 未使用缓存的组件
const UncachedComponent: React.FC<{ number: number; renderCount: number }> = ({ 
  number, 
  renderCount 
}) => {
  // 每次渲染都会重新计算
  const result = expensiveCalculation(number);
  
  return (
    <div className="p-4 border rounded-lg bg-red-50 border-red-200">
      <h4 className="font-semibold text-red-800 mb-3">
        未使用缓存 (渲染次数: {renderCount})
      </h4>
      <div className="space-y-2 text-sm">
        <div><strong>输入数字:</strong> {number}</div>
        <div><strong>计算结果:</strong> {result.toLocaleString()}</div>
      </div>
      <div className="mt-2 text-xs text-red-600">
        ⚠️ 每次渲染都重新计算，性能较差
      </div>
    </div>
  );
};

// 使用 useMemo 缓存的组件
const MemoizedComponent: React.FC<{ number: number; renderCount: number }> = ({ 
  number, 
  renderCount 
}) => {
  // 使用 useMemo 缓存计算结果
  const result = useMemo(() => {
    return expensiveCalculation(number);
  }, [number]);

  return (
    <div className="p-4 border rounded-lg bg-green-50 border-green-200">
      <h4 className="font-semibold text-green-800 mb-3">
        使用 useMemo 缓存 (渲染次数: {renderCount})
      </h4>
      <div className="space-y-2 text-sm">
        <div><strong>输入数字:</strong> {number}</div>
        <div><strong>计算结果:</strong> {result.toLocaleString()}</div>
      </div>
      <div className="mt-2 text-xs text-green-600">
        ✅ 使用 useMemo 缓存，只在依赖项变化时重新计算
      </div>
    </div>
  );
};

// 使用自定义 Hook 缓存的组件
const CustomHookComponent: React.FC<{ number: number; renderCount: number }> = ({ 
  number, 
  renderCount 
}) => {
  // 使用自定义缓存 Hook
  const { result, computeCount } = useComputeCache(
    () => expensiveCalculation(number),
    [number]
  );

  return (
    <div className="p-4 border rounded-lg bg-blue-50 border-blue-200">
      <h4 className="font-semibold text-blue-800 mb-3">
        使用自定义缓存 Hook (渲染次数: {renderCount})
      </h4>
      <div className="space-y-2 text-sm">
        <div><strong>输入数字:</strong> {number}</div>
        <div><strong>计算结果:</strong> {result.toLocaleString()}</div>
        <div className="text-blue-600"><strong>计算执行次数:</strong> {computeCount}</div>
      </div>
      <div className="mt-2 text-xs text-blue-600">
        ✅ 使用自定义 Hook 缓存，提供计算统计信息
      </div>
    </div>
  );
};

// 计算缓存演示组件
export const ComputeCacheDemo: React.FC = () => {
  const [number, setNumber] = useState(100);
  const [uncachedRenderCount, setUncachedRenderCount] = useState(0);
  const [memoizedRenderCount, setMemoizedRenderCount] = useState(0);
  const [customHookRenderCount, setCustomHookRenderCount] = useState(0);

  // 强制重新渲染（不改变数据）
  const handleForceRender = () => {
    setUncachedRenderCount(prev => prev + 1);
    setMemoizedRenderCount(prev => prev + 1);
    setCustomHookRenderCount(prev => prev + 1);
  };

  // 更新数字
  const handleNumberChange = (newNumber: number) => {
    setNumber(newNumber);
    setUncachedRenderCount(prev => prev + 1);
    setMemoizedRenderCount(prev => prev + 1);
    setCustomHookRenderCount(prev => prev + 1);
  };

  return (
    <div className="space-y-6">
      {/* 控制面板 */}
      <div className="bg-gray-50 p-4 rounded-lg border">
        <h3 className="font-semibold mb-3">计算缓存控制面板</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div>
            <label className="block text-sm font-medium mb-2">计算数字:</label>
            <div className="flex gap-2">
              <input
                type="number"
                value={number}
                onChange={(e) => handleNumberChange(Number(e.target.value))}
                className="flex-1 px-3 py-1 border rounded text-sm"
              />
              <button
                onClick={() => handleNumberChange(Math.floor(Math.random() * 1000))}
                className="px-3 py-1 bg-blue-500 text-white rounded text-sm hover:bg-blue-600"
              >
                随机
              </button>
            </div>
          </div>
          <div>
            <label className="block text-sm font-medium mb-2">性能测试:</label>
            <button
              onClick={handleForceRender}
              className="w-full px-3 py-1 bg-orange-500 text-white rounded text-sm hover:bg-orange-600"
            >
              强制重新渲染
            </button>
          </div>
          <div>
            <label className="block text-sm font-medium mb-2">当前数字:</label>
            <div className="text-lg font-bold text-gray-700">{number}</div>
          </div>
        </div>
        <div className="mt-3 text-xs text-gray-600">
          💡 打开浏览器控制台查看计算执行情况
        </div>
      </div>

      {/* 对比演示 */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <UncachedComponent 
          number={number} 
          renderCount={uncachedRenderCount}
        />
        <MemoizedComponent 
          number={number} 
          renderCount={memoizedRenderCount}
        />
        <CustomHookComponent 
          number={number} 
          renderCount={customHookRenderCount}
        />
      </div>

      {/* 性能说明 */}
      <div className="bg-yellow-50 p-4 rounded-lg border border-yellow-200">
        <h4 className="font-semibold text-yellow-800 mb-2">计算缓存说明:</h4>
        <ul className="text-sm text-yellow-700 space-y-1">
          <li>• <strong>点击"强制重新渲染"</strong>：左侧组件会重新计算，中间和右侧组件使用缓存</li>
          <li>• <strong>修改计算数字</strong>：所有组件都会重新计算（依赖项变化）</li>
          <li>• <strong>观察要点</strong>：对比控制台输出，缓存组件只在依赖项变化时才重新计算</li>
          <li>• <strong>自定义 Hook</strong>：提供了计算统计信息，便于性能分析</li>
        </ul>
      </div>
    </div>
  );
};

export default ComputeCacheDemo;`,ne=`import React, { useState, useEffect } from 'react';
import { useCache } from './useCache';

// 模拟 API 接口
interface User {
  id: number;
  name: string;
  email: string;
  avatar: string;
}

interface Post {
  id: number;
  title: string;
  content: string;
  userId: number;
}

// 模拟网络延迟
const delay = (ms: number) => new Promise(resolve => setTimeout(resolve, ms));

// 模拟 API 请求
const mockApi = {
  async getUser(id: number): Promise<User> {
    console.log(\`🌐 发起用户请求: \${id}\`);
    await delay(1000 + Math.random() * 1000); // 1-2秒延迟
    return {
      id,
      name: \`用户\${id}\`,
      email: \`user\${id}@example.com\`,
      avatar: \`https://api.dicebear.com/7.x/avataaars/svg?seed=\${id}\`
    };
  },

  async getPosts(userId: number): Promise<Post[]> {
    console.log(\`🌐 发起文章请求: 用户\${userId}\`);
    await delay(800 + Math.random() * 800); // 0.8-1.6秒延迟
    return Array.from({ length: 3 }, (_, i) => ({
      id: userId * 10 + i + 1,
      title: \`用户\${userId}的文章\${i + 1}\`,
      content: \`这是用户\${userId}的第\${i + 1}篇文章内容...\`,
      userId
    }));
  }
};

// 未使用缓存的用户组件
const UncachedUserComponent: React.FC<{ userId: number }> = ({ userId }) => {
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(false);
  const [requestCount, setRequestCount] = useState(0);

  useEffect(() => {
    const fetchUser = async () => {
      setLoading(true);
      setRequestCount(prev => prev + 1);
      try {
        const userData = await mockApi.getUser(userId);
        setUser(userData);
      } catch (error) {
        console.error('获取用户失败:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchUser();
  }, [userId]);

  return (
    <div className="p-4 border rounded-lg bg-red-50 border-red-200">
      <h4 className="font-semibold text-red-800 mb-3">
        未使用缓存 (请求次数: {requestCount})
      </h4>
      {loading ? (
        <div className="flex items-center space-x-2">
          <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-red-600"></div>
          <span className="text-sm text-red-600">加载中...</span>
        </div>
      ) : user ? (
        <div className="space-y-2 text-sm">
          <div><strong>ID:</strong> {user.id}</div>
          <div><strong>姓名:</strong> {user.name}</div>
          <div><strong>邮箱:</strong> {user.email}</div>
        </div>
      ) : (
        <div className="text-sm text-red-600">暂无数据</div>
      )}
      <div className="mt-2 text-xs text-red-600">
        ⚠️ 每次都发起新请求，网络开销大
      </div>
    </div>
  );
};

// 使用缓存的用户组件
const CachedUserComponent: React.FC<{ userId: number }> = ({ userId }) => {
  const { 
    data: user, 
    loading, 
    cacheHit, 
    requestCount,
    refresh 
  } = useCache(
    'user',
    () => mockApi.getUser(userId),
    [userId],
    { ttl: 30000 } // 30秒缓存
  );

  return (
    <div className="p-4 border rounded-lg bg-green-50 border-green-200">
      <h4 className="font-semibold text-green-800 mb-3">
        使用缓存 (请求次数: {requestCount})
      </h4>
      {loading ? (
        <div className="flex items-center space-x-2">
          <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-green-600"></div>
          <span className="text-sm text-green-600">加载中...</span>
        </div>
      ) : user ? (
        <div className="space-y-2 text-sm">
          <div><strong>ID:</strong> {user.id}</div>
          <div><strong>姓名:</strong> {user.name}</div>
          <div><strong>邮箱:</strong> {user.email}</div>
          <div className={\`\${cacheHit ? 'text-green-600' : 'text-orange-600'}\`}>
            <strong>数据来源:</strong> {cacheHit ? '缓存' : '网络请求'}
          </div>
        </div>
      ) : (
        <div className="text-sm text-green-600">暂无数据</div>
      )}
      <div className="mt-2 flex gap-2">
        <button
          onClick={refresh}
          className="px-2 py-1 bg-green-500 text-white rounded text-xs hover:bg-green-600"
        >
          刷新
        </button>
        <div className="text-xs text-green-600">
          ✅ 使用缓存，减少网络请求
        </div>
      </div>
    </div>
  );
};

// 文章列表组件（演示多个缓存实例）
const PostListComponent: React.FC<{ userId: number }> = ({ userId }) => {
  const { 
    data: posts, 
    loading, 
    cacheHit, 
    requestCount 
  } = useCache(
    'posts',
    () => mockApi.getPosts(userId),
    [userId],
    { ttl: 60000 } // 60秒缓存
  );

  return (
    <div className="p-4 border rounded-lg bg-blue-50 border-blue-200">
      <h4 className="font-semibold text-blue-800 mb-3">
        文章列表缓存 (请求次数: {requestCount})
      </h4>
      {loading ? (
        <div className="flex items-center space-x-2">
          <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-blue-600"></div>
          <span className="text-sm text-blue-600">加载中...</span>
        </div>
      ) : posts && posts.length > 0 ? (
        <div className="space-y-2">
          {posts.map(post => (
            <div key={post.id} className="text-sm bg-white p-2 rounded border">
              <div className="font-medium">{post.title}</div>
              <div className="text-gray-600 text-xs">{post.content}</div>
            </div>
          ))}
          <div className={\`text-xs \${cacheHit ? 'text-blue-600' : 'text-orange-600'}\`}>
            <strong>数据来源:</strong> {cacheHit ? '缓存' : '网络请求'}
          </div>
        </div>
      ) : (
        <div className="text-sm text-blue-600">暂无文章</div>
      )}
      <div className="mt-2 text-xs text-blue-600">
        ✅ 独立缓存实例，支持不同的 TTL 设置
      </div>
    </div>
  );
};

// 请求缓存演示组件
export const RequestCacheDemo: React.FC = () => {
  const [userId, setUserId] = useState(1);
  const [showUncached, setShowUncached] = useState(true);

  return (
    <div className="space-y-6">
      {/* 控制面板 */}
      <div className="bg-gray-50 p-4 rounded-lg border">
        <h3 className="font-semibold mb-3">请求缓存控制面板</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div>
            <label className="block text-sm font-medium mb-2">用户ID:</label>
            <div className="flex gap-2">
              <input
                type="number"
                min="1"
                max="10"
                value={userId}
                onChange={(e) => setUserId(Number(e.target.value))}
                className="flex-1 px-3 py-1 border rounded text-sm"
              />
              <button
                onClick={() => setUserId(Math.floor(Math.random() * 10) + 1)}
                className="px-3 py-1 bg-blue-500 text-white rounded text-sm hover:bg-blue-600"
              >
                随机
              </button>
            </div>
          </div>
          <div>
            <label className="block text-sm font-medium mb-2">显示对比:</label>
            <label className="flex items-center">
              <input
                type="checkbox"
                checked={showUncached}
                onChange={(e) => setShowUncached(e.target.checked)}
                className="mr-2"
              />
              <span className="text-sm">显示未缓存组件</span>
            </label>
          </div>
          <div>
            <label className="block text-sm font-medium mb-2">当前用户:</label>
            <div className="text-lg font-bold text-gray-700">用户 {userId}</div>
          </div>
        </div>
        <div className="mt-3 text-xs text-gray-600">
          💡 切换用户ID或重复选择相同ID，观察缓存效果
        </div>
      </div>

      {/* 用户信息对比 */}
      <div className={\`grid gap-6 \${showUncached ? 'grid-cols-1 lg:grid-cols-2' : 'grid-cols-1'}\`}>
        {showUncached && (
          <UncachedUserComponent userId={userId} />
        )}
        <CachedUserComponent userId={userId} />
      </div>

      {/* 文章列表 */}
      <PostListComponent userId={userId} />

      {/* 缓存说明 */}
      <div className="bg-yellow-50 p-4 rounded-lg border border-yellow-200">
        <h4 className="font-semibold text-yellow-800 mb-2">请求缓存说明:</h4>
        <ul className="text-sm text-yellow-700 space-y-1">
          <li>• <strong>首次请求</strong>：从网络获取数据，显示"网络请求"</li>
          <li>• <strong>重复请求</strong>：从缓存获取数据，显示"缓存"，无网络开销</li>
          <li>• <strong>缓存过期</strong>：用户信息30秒TTL，文章60秒TTL</li>
          <li>• <strong>不同用户</strong>：每个用户ID有独立的缓存</li>
          <li>• <strong>手动刷新</strong>：点击刷新按钮强制重新请求</li>
        </ul>
      </div>
    </div>
  );
};

export default RequestCacheDemo;`,I=`import { useCallback, useEffect, useMemo, useRef, useState } from "react";

// 缓存项接口
interface CacheItem<T> {
  data: T;
  timestamp: number;
  expiry?: number;
}

// 缓存配置接口
interface CacheConfig {
  ttl?: number; // 生存时间（毫秒）
  maxSize?: number; // 最大缓存数量
}

// 请求函数类型
type RequestFunction<T> = () => Promise<T>;

/**
 * 通用缓存 Hook
 * 支持数据缓存、计算缓存、请求缓存和缓存失效
 */
export const useCache = <T>(
  key: string,
  requestFn: RequestFunction<T>,
  deps: any[] = [],
  config: CacheConfig = {}
) => {
  const { ttl = 5 * 60 * 1000, maxSize = 100 } = config; // 默认5分钟TTL，最大100项

  // 全局缓存存储
  const cacheRef = useRef<Map<string, CacheItem<T>>>(new Map());
  const [data, setData] = useState<T | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<Error | null>(null);
  const [cacheHit, setCacheHit] = useState(false);
  const [requestCount, setRequestCount] = useState(0);

  // 获取缓存数据
  const getCachedData = useCallback((cacheKey: string): T | null => {
    const cache = cacheRef.current;
    const item = cache.get(cacheKey);

    if (!item) return null;

    const now = Date.now();
    if (item.expiry && now > item.expiry) {
      cache.delete(cacheKey);
      return null;
    }

    return item.data;
  }, []);

  // 设置缓存数据
  const setCachedData = useCallback(
    (cacheKey: string, newData: T) => {
      const cache = cacheRef.current;
      const now = Date.now();

      cache.set(cacheKey, {
        data: newData,
        timestamp: now,
        expiry: ttl > 0 ? now + ttl : undefined,
      });

      // 直接在这里清理过期缓存，避免依赖循环
      const entries = Array.from(cache.entries());
      for (const [key, item] of entries) {
        if (item.expiry && now > item.expiry) {
          cache.delete(key);
        }
      }

      // 如果缓存超过最大数量，删除最旧的项
      if (cache.size > maxSize) {
        const entries = Array.from(cache.entries());
        entries.sort((a, b) => a[1].timestamp - b[1].timestamp);
        const toDelete = entries.slice(0, cache.size - maxSize);
        toDelete.forEach(([key]) => cache.delete(key));
      }
    },
    [ttl, maxSize]
  );

  // 生成缓存键
  const cacheKey = useMemo(() => {
    return \`\${key}_\${JSON.stringify(deps)}\`;
  }, [key, deps]);

  // 执行请求
  const executeRequest = useCallback(
    async (forceRefresh = false) => {
      // 检查缓存
      if (!forceRefresh) {
        const cachedData = getCachedData(cacheKey);
        if (cachedData !== null) {
          setData(cachedData);
          setCacheHit(true);
          return cachedData;
        }
      }

      setLoading(true);
      setError(null);
      setCacheHit(false);
      setRequestCount((prev) => prev + 1);

      try {
        const result = await requestFn();
        setData(result);
        setCachedData(cacheKey, result);
        return result;
      } catch (err) {
        const error = err instanceof Error ? err : new Error("Unknown error");
        setError(error);
        throw error;
      } finally {
        setLoading(false);
      }
    },
    [cacheKey, requestFn, getCachedData, setCachedData]
  );

  // 清除特定缓存
  const clearCache = useCallback((specificKey?: string) => {
    if (specificKey) {
      cacheRef.current.delete(specificKey);
    } else {
      cacheRef.current.clear();
    }
  }, []);

  // 刷新数据
  const refresh = useCallback(async () => {
    setLoading(true);
    setError(null);
    setCacheHit(false);
    setRequestCount((prev) => prev + 1);

    try {
      const result = await requestFn();
      setData(result);
      setCachedData(cacheKey, result);
      return result;
    } catch (err) {
      const error = err instanceof Error ? err : new Error("Unknown error");
      setError(error);
      throw error;
    } finally {
      setLoading(false);
    }
  }, [cacheKey, requestFn, setCachedData]);

  // 依赖项变化时自动执行请求
  useEffect(() => {
    // 直接在这里实现请求逻辑，避免依赖循环
    const performRequest = async () => {
      // 检查缓存
      const cachedData = getCachedData(cacheKey);
      if (cachedData !== null) {
        setData(cachedData);
        setCacheHit(true);
        return;
      }

      setLoading(true);
      setError(null);
      setCacheHit(false);
      setRequestCount((prev) => prev + 1);

      try {
        const result = await requestFn();
        setData(result);
        setCachedData(cacheKey, result);
      } catch (err) {
        const error = err instanceof Error ? err : new Error("Unknown error");
        setError(error);
      } finally {
        setLoading(false);
      }
    };

    performRequest();
  }, [cacheKey]); // 只依赖 cacheKey，其他依赖项通过闭包访问

  return {
    data,
    loading,
    error,
    cacheHit,
    requestCount,
    refresh,
    clearCache,
    executeRequest,
  };
};

/**
 * 计算缓存 Hook
 * 使用 useMemo 缓存复杂计算结果
 */
export const useComputeCache = <T>(computeFn: () => T, deps: any[]) => {
  const [computeCount, setComputeCount] = useState(0);

  const result = useMemo(() => {
    setComputeCount((prev) => prev + 1);
    console.log(\`🔄 执行计算 (第\${computeCount + 1}次)\`);
    return computeFn();
  }, deps);

  return {
    result,
    computeCount,
  };
};

/**
 * 简单内存缓存 Hook
 * 用于演示基本的缓存概念
 */
export const useSimpleCache = <T>() => {
  const [cache, setCache] = useState<Map<string, T>>(new Map());
  const [accessCount, setAccessCount] = useState(0);
  const [hitCount, setHitCount] = useState(0);

  const get = useCallback(
    (key: string): T | undefined => {
      setAccessCount((prev) => prev + 1);
      const value = cache.get(key);
      if (value !== undefined) {
        setHitCount((prev) => prev + 1);
      }
      return value;
    },
    [cache]
  );

  const set = useCallback((key: string, value: T) => {
    setCache((prev) => new Map(prev).set(key, value));
  }, []);

  const delete_ = useCallback((key: string) => {
    setCache((prev) => {
      const newCache = new Map(prev);
      newCache.delete(key);
      return newCache;
    });
  }, []);

  const clear = useCallback(() => {
    setCache(new Map());
    setAccessCount(0);
    setHitCount(0);
  }, []);

  const hitRate =
    accessCount > 0 ? ((hitCount / accessCount) * 100).toFixed(1) : "0";

  return {
    get,
    set,
    delete: delete_,
    clear,
    cache,
    accessCount,
    hitCount,
    hitRate,
  };
};
`,le=()=>e.jsx(K,{title:"数据缓存优化",description:"学习如何使用 useMemo、useCallback 和自定义 Hook 来实现高效的数据缓存，避免重复计算和网络请求。",overview:e.jsx("div",{className:"space-y-4",children:e.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-6",children:[e.jsxs("div",{className:"bg-blue-50 p-4 rounded-lg border border-blue-200",children:[e.jsx("h3",{className:"font-semibold text-blue-800 mb-2",children:"🎯 核心概念"}),e.jsxs("ul",{className:"text-sm text-blue-700 space-y-1",children:[e.jsxs("li",{children:["• ",e.jsx("strong",{children:"数据缓存"}),"：将计算结果或网络请求结果存储起来重复使用"]}),e.jsxs("li",{children:["• ",e.jsx("strong",{children:"计算缓存"}),"：使用 useMemo 缓存复杂计算的结果"]}),e.jsxs("li",{children:["• ",e.jsx("strong",{children:"请求缓存"}),"：避免重复的网络请求"]}),e.jsxs("li",{children:["• ",e.jsx("strong",{children:"缓存失效"}),"：根据依赖项变化自动更新缓存"]})]})]}),e.jsxs("div",{className:"bg-green-50 p-4 rounded-lg border border-green-200",children:[e.jsx("h3",{className:"font-semibold text-green-800 mb-2",children:"✨ 主要优势"}),e.jsxs("ul",{className:"text-sm text-green-700 space-y-1",children:[e.jsx("li",{children:"• 减少重复计算，提升性能"}),e.jsx("li",{children:"• 降低网络请求频率"}),e.jsx("li",{children:"• 改善用户体验"}),e.jsx("li",{children:"• 节省系统资源"})]})]}),e.jsxs("div",{className:"bg-yellow-50 p-4 rounded-lg border border-yellow-200",children:[e.jsx("h3",{className:"font-semibold text-yellow-800 mb-2",children:"🎯 适用场景"}),e.jsxs("ul",{className:"text-sm text-yellow-700 space-y-1",children:[e.jsx("li",{children:"• 复杂的数据计算和转换"}),e.jsx("li",{children:"• 频繁访问的 API 数据"}),e.jsx("li",{children:"• 大量数据的过滤和排序"}),e.jsx("li",{children:"• 昂贵的渲染计算"})]})]}),e.jsxs("div",{className:"bg-red-50 p-4 rounded-lg border border-red-200",children:[e.jsx("h3",{className:"font-semibold text-red-800 mb-2",children:"⚠️ 注意事项"}),e.jsxs("ul",{className:"text-sm text-red-700 space-y-1",children:[e.jsx("li",{children:"• 合理设置缓存的依赖项"}),e.jsx("li",{children:"• 避免过度缓存导致内存泄漏"}),e.jsx("li",{children:"• 考虑缓存的过期策略"}),e.jsx("li",{children:"• 平衡缓存收益和复杂度"})]})]})]})}),examples:[{title:"计算缓存演示",component:e.jsx(O,{}),description:"使用 useMemo 和自定义 Hook 缓存复杂计算结果，避免不必要的重复计算。",observationPoints:["点击'强制重新渲染'按钮，观察控制台输出和计算执行次数","缓存组件不会重复执行复杂计算，执行次数保持不变","非缓存组件每次都会重新计算，执行次数持续增加","修改输入数字时，所有组件都会重新计算"],keyPoints:["useMemo 可以缓存复杂计算的结果","自定义 useComputeCache Hook 封装了缓存逻辑","合理的依赖项设置是缓存有效性的关键","缓存可以显著减少重复计算，提升性能"],commonTraps:["忘记设置正确的依赖项数组","过度使用缓存导致内存占用过高","在简单计算中不必要地使用缓存","依赖项设置过于宽泛或过于狭窄"],solutions:["仔细分析计算的真实依赖关系","只对昂贵的计算使用缓存","使用 React DevTools Profiler 验证优化效果","定期检查和优化依赖项数组"],importantTips:["未缓存组件每次渲染都执行复杂计算，性能较差","useMemo 缓存组件只在依赖项变化时重新计算","自定义 Hook 组件封装了缓存逻辑，代码更简洁","观察控制台和计算执行次数可以直观看到缓存效果"],preCode:[{title:"useCache",code:I}],codeExample:{title:"计算缓存演示",code:te}},{title:"请求缓存演示",component:e.jsx(W,{}),description:"缓存网络请求结果，避免重复的 API 调用，提升应用性能和用户体验。",observationPoints:["切换用户ID时，观察网络请求的发起情况","重复选择相同用户时，缓存组件不会发起新请求","未缓存组件每次都会发起网络请求","查看数据来源标识：'缓存' 或 '网络请求'"],keyPoints:["useCache Hook 支持网络请求缓存","TTL (生存时间) 控制缓存的有效期","不同的缓存键支持独立的缓存实例","缓存可以显著减少网络开销"],commonTraps:["缓存敏感或实时性要求高的数据","设置过长的 TTL 导致数据过期","忽略网络错误的处理","缓存键设计不合理导致缓存冲突"],solutions:["根据数据特性设置合理的 TTL","为不同类型的数据使用不同的缓存策略","实现完善的错误处理和重试机制","设计清晰的缓存键命名规范"],importantTips:["用户信息缓存30秒，文章列表缓存60秒","每个用户ID有独立的缓存空间","手动刷新按钮可以强制重新请求数据","缓存命中时响应速度明显更快"],preCode:[{title:"useCache",code:I}],codeExample:{title:"请求缓存演示",code:ne}},{title:"缓存失效演示",component:e.jsx(ee,{}),description:"演示依赖项变化、TTL过期和手动清除等多种缓存失效机制。",observationPoints:["修改用户ID或版本时，观察缓存的自动失效","相同参数组合时，数据来源显示为'缓存'","搜索条件变化时，搜索缓存会自动失效","手动缓存管理演示了程序化的缓存控制"],keyPoints:["依赖项数组控制缓存的失效时机","TTL 过期会自动触发缓存失效","支持手动清除特定或全部缓存","不同的缓存实例可以有不同的失效策略"],commonTraps:["依赖项数组设置不正确","忘记处理缓存过期的情况","缓存失效策略过于激进或保守","缺少手动清除缓存的机制"],solutions:["仔细分析数据的真实依赖关系","实现合理的缓存过期和更新策略","提供灵活的缓存管理接口","在适当的时机清理过期缓存"],importantTips:["依赖项变化会立即触发缓存失效和数据重新获取","搜索演示展示了多个条件组合的缓存管理","手动缓存管理提供了程序化控制缓存的能力","观察请求次数可以验证缓存失效的正确性"],preCode:[{title:"useCache",code:I}],codeExample:{title:"缓存失效演示",code:se}}],tutorial:{concepts:["数据缓存是提升应用性能的重要手段","useMemo 用于缓存计算结果，避免重复计算","useCallback 用于缓存函数引用，避免重复创建","自定义 Hook 可以封装复杂的缓存逻辑","缓存的依赖项决定了缓存的更新时机"],steps:["识别需要缓存的计算或数据获取操作","分析数据的依赖关系","使用 useMemo 缓存计算结果","使用 useCallback 缓存函数引用","创建自定义 Hook 封装缓存逻辑","测试缓存的效果和正确性"],tips:["不要过度使用缓存，简单计算可能不需要","确保依赖项数组的正确性","考虑缓存的内存占用","使用 React DevTools Profiler 分析性能","实现合理的缓存失效策略"]},interview:{questions:[{question:"什么时候应该使用数据缓存？",answer:"当存在复杂计算、频繁的数据转换、昂贵的网络请求或大量数据处理时，应该考虑使用数据缓存。但要避免过度缓存，简单操作可能不需要缓存。"},{question:"useMemo 和 useCallback 的区别是什么？",answer:"useMemo 缓存计算结果（值），useCallback 缓存函数引用。useMemo(() => computation, deps) 缓存 computation 的结果，useCallback(fn, deps) 缓存函数 fn 本身。"},{question:"如何设计一个高效的缓存策略？",answer:"高效的缓存策略应该考虑：1) 缓存粒度（不要太细也不要太粗）；2) 依赖项管理（确保正确的更新时机）；3) 内存管理（避免内存泄漏）；4) 过期策略（适时清理过期数据）。"},{question:"缓存可能带来哪些问题？",answer:"缓存可能导致：1) 内存占用增加；2) 数据不一致（缓存未及时更新）；3) 过度复杂化（简单场景不需要缓存）；4) 调试困难（缓存掩盖了性能问题的根源）。"}],keyPoints:["数据缓存可以显著提升应用性能","useMemo 和 useCallback 是实现缓存的主要工具","依赖项数组的正确性是缓存有效性的关键","自定义 Hook 可以封装复杂的缓存逻辑","需要平衡缓存收益和复杂度"]},bestPractices:{dos:["在复杂计算中使用 useMemo","为函数引用使用 useCallback","创建可重用的缓存 Hook","合理设置依赖项数组","监控缓存的性能效果"],donts:["不要过度使用缓存","不要忽视依赖项的设置","不要缓存简单的计算","不要忘记清理过期的缓存","不要让缓存逻辑过于复杂"],patterns:["计算结果缓存模式","API 数据缓存模式","带过期时间的缓存模式","多级缓存模式","缓存失效和更新模式"]}});export{le as default};
