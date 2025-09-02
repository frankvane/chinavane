var P=Object.defineProperty;var O=(r,n,s)=>n in r?P(r,n,{enumerable:!0,configurable:!0,writable:!0,value:s}):r[n]=s;var w=(r,n,s)=>O(r,typeof n!="symbol"?n+"":n,s);import{r as l,j as e}from"./index-CKH9Ek1I.js";import{C as M}from"./ComponentTemplate-B8dTsNLj.js";const _=()=>`error_${Date.now()}_${Math.random().toString(36).substr(2,9)}`,$=r=>{var a;const n=r.message.toLowerCase(),s=((a=r.stack)==null?void 0:a.toLowerCase())||"";return n.includes("out of memory")||n.includes("maximum call stack")||n.includes("script error")||s.includes("recursion")?"critical":n.includes("network")||n.includes("fetch")||n.includes("timeout")||n.includes("abort")?"high":n.includes("validation")||n.includes("parse")||n.includes("format")?"medium":"low"},q=r=>{var a;const n=r.message.toLowerCase(),s=((a=r.stack)==null?void 0:a.toLowerCase())||"";return n.includes("render")||n.includes("component")||s.includes("react")?"render":n.includes("network")||n.includes("fetch")||n.includes("xhr")||n.includes("request")?"network":n.includes("validation")||n.includes("invalid")||n.includes("required")||n.includes("format")?"validation":n.includes("promise")||n.includes("async")||n.includes("await")||s.includes("async")?"async":"unknown"},E=(r,n,s)=>({id:_(),message:r.message,stack:r.stack,componentStack:n,timestamp:new Date,severity:$(r),category:q(r),context:s,userAgent:typeof navigator<"u"?navigator.userAgent:void 0,url:typeof window<"u"?window.location.href:void 0}),F=r=>new Promise(n=>setTimeout(n,r)),S=async(r,n={})=>{const{retries:s=3,retryDelay:a=1e3,context:d,fallback:g}=n;for(let i=0;i<=s;i++)try{return await r()}catch(y){if(console.error("Async error:",E(y,void 0,{...d,attempt:i})),i===s){if(g!==void 0)return g;throw y}await F(a*Math.pow(2,i))}},U=async r=>(await Promise.allSettled(r.map(s=>S(s.fn,s.options)))).map((s,a)=>({index:a,success:s.status==="fulfilled",data:s.status==="fulfilled"?s.value:null,error:s.status==="rejected"?s.reason:null})),z=r=>{const n={network:"启用离线模式，使用缓存数据",validation:"显示友好的错误提示，引导用户修正",memory:"减少数据量，实现分页或虚拟滚动",async:"增加超时处理，实现重试机制",render:"检查组件 props 和 state，重置组件状态",unknown:"查看详细日志，联系技术支持"};return n[r.category]||n.unknown};function D(r={}){const{enableLogging:n=!0,enableReporting:s=!1,maxRetries:a=3,retryDelay:d=1e3,onError:g}=r,i=l.useRef([]),[,y]=l.useReducer(c=>c+1,0),x=l.useCallback((c,m,p)=>{const v=E(c,m,p);return i.current.push(v),i.current.length>100&&(i.current=i.current.slice(-50)),n&&console.error("Error logged:",v),s&&g&&g(v),y(),v},[n,s,g]),f=l.useCallback(()=>{i.current=[],y()},[]),o=l.useCallback(c=>{i.current=i.current.filter(m=>m.id!==c),y()},[]),t=l.useCallback(async(c,m={})=>{try{return await S(c,{retries:m.retries??a,retryDelay:d,context:m.context,fallback:m.fallback})}catch(p){return x(p,void 0,m.context),m.fallback}},[x,a,d]),u=l.useCallback(async(c="generic")=>{const m={network:"Network request failed",timeout:"Request timeout",validation:"Data validation failed",generic:"Async operation failed"};throw await new Promise(p=>setTimeout(p,1e3)),new Error(m[c]||m.generic)},[]),h=l.useCallback(async()=>t(()=>u("network"),{context:{operation:"network_request",timestamp:Date.now()},fallback:null}),[t,u]),B=l.useCallback((c,m)=>{const p=new Error(c);return x(p,void 0,m)},[x]),I=l.useMemo(()=>{const c=i.current,m=c.length,p=c.reduce((b,N)=>(b[N.category]=(b[N.category]||0)+1,b),{}),v=c.reduce((b,N)=>(b[N.severity]=(b[N.severity]||0)+1,b),{}),L=c.slice(-10),A=new Date(Date.now()-60*60*1e3),T=c.filter(b=>b.timestamp>A).length;return{totalErrors:m,errorsByCategory:p,errorsBySeverity:v,recentErrors:L,errorRate:T}},[i.current.length]),H=l.useCallback(()=>[...i.current],[]);return{logError:x,clearErrors:f,clearError:o,handleAsync:t,simulateAsyncError:u,simulateNetworkError:h,recordError:B,stats:I,getAllErrors:H,errors:i.current}}class J extends l.Component{constructor(s){super(s);w(this,"retryTimeoutId",null);w(this,"handleRetry",()=>{this.state.retryCount<this.state.maxRetries&&this.setState(s=>({hasError:!1,error:null,errorInfo:null,errorId:null,retryCount:s.retryCount+1}))});w(this,"handleReset",()=>{this.setState({hasError:!1,error:null,errorInfo:null,errorId:null,retryCount:0})});this.state={hasError:!1,error:null,errorInfo:null,errorId:null,retryCount:0,maxRetries:s.maxRetries||3}}static getDerivedStateFromError(s){return{hasError:!0,error:s,errorId:`error_${Date.now()}_${Math.random().toString(36).substr(2,9)}`}}componentDidCatch(s,a){const d=E(s,a.componentStack||void 0);console.error("ErrorBoundary caught an error:",d),this.setState({errorInfo:a}),this.props.onError&&this.props.onError(s,a)}render(){var s;if(this.state.hasError){if(this.props.fallback)return this.props.fallback;const a=this.state.retryCount<this.state.maxRetries;return e.jsx("div",{className:"min-h-[200px] flex items-center justify-center bg-red-50 border border-red-200 rounded-lg p-6",children:e.jsxs("div",{className:"text-center max-w-md",children:[e.jsx("div",{className:"text-red-600 mb-4",children:e.jsx("svg",{className:"w-12 h-12 mx-auto mb-2",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",children:e.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.964-.833-2.732 0L3.732 16.5c-.77.833.192 2.5 1.732 2.5z"})})}),e.jsx("h3",{className:"text-lg font-semibold text-red-800 mb-2",children:"组件发生错误"}),e.jsx("p",{className:"text-red-600 mb-4 text-sm",children:((s=this.state.error)==null?void 0:s.message)||"未知错误"}),e.jsxs("div",{className:"space-y-2",children:[a&&e.jsxs("button",{onClick:this.handleRetry,className:"w-full px-4 py-2 bg-red-600 text-white rounded hover:bg-red-700 transition-colors text-sm",children:["重试 (",this.state.maxRetries-this.state.retryCount," 次剩余)"]}),e.jsx("button",{onClick:this.handleReset,className:"w-full px-4 py-2 bg-gray-600 text-white rounded hover:bg-gray-700 transition-colors text-sm",children:"重置组件"})]}),!1]})})}return this.props.children}}const V=({shouldError:r})=>{if(r)throw new Error("这是一个故意抛出的渲染错误！");return e.jsx("div",{className:"p-4 bg-green-50 border border-green-200 rounded",children:e.jsx("p",{className:"text-green-800",children:"✅ 组件正常渲染"})})},G=()=>{const r=D({enableLogging:!0,maxRetries:3,retryDelay:1e3}),[n,s]=l.useState(!1),[a,d]=l.useState(!1),g=()=>{s(!0)},i=()=>{s(!1)},y=async()=>{d(!0);try{await r.simulateAsyncError("async")}finally{d(!1)}},x=async()=>{d(!0);try{await r.simulateNetworkError()}finally{d(!1)}},f=()=>{r.recordError("这是一个手动记录的错误",{component:"BasicErrorBoundaryDemo",action:"manual_error",timestamp:Date.now()})};return e.jsxs("div",{className:"space-y-6",children:[e.jsxs("div",{className:"bg-white p-6 rounded-lg border border-gray-200",children:[e.jsx("h3",{className:"text-lg font-semibold text-gray-800 mb-4",children:"渲染错误测试"}),e.jsxs("div",{className:"space-y-4",children:[e.jsxs("div",{className:"flex gap-2",children:[e.jsx("button",{onClick:g,className:"px-4 py-2 bg-red-600 text-white rounded hover:bg-red-700 transition-colors",children:"触发渲染错误"}),e.jsx("button",{onClick:i,className:"px-4 py-2 bg-gray-600 text-white rounded hover:bg-gray-700 transition-colors",children:"重置状态"})]}),e.jsx(J,{onError:(o,t)=>{r.logError(o,t.componentStack,{component:"BuggyComponent",trigger:"render_error"})},maxRetries:3,children:e.jsx(V,{shouldError:n})})]})]}),e.jsxs("div",{className:"bg-white p-6 rounded-lg border border-gray-200",children:[e.jsx("h3",{className:"text-lg font-semibold text-gray-800 mb-4",children:"异步错误测试"}),e.jsx("div",{className:"space-y-4",children:e.jsxs("div",{className:"flex gap-2 flex-wrap",children:[e.jsx("button",{onClick:y,disabled:a,className:"px-4 py-2 bg-orange-600 text-white rounded hover:bg-orange-700 transition-colors disabled:opacity-50",children:a?"处理中...":"模拟异步错误"}),e.jsx("button",{onClick:x,disabled:a,className:"px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition-colors disabled:opacity-50",children:a?"处理中...":"模拟网络错误"}),e.jsx("button",{onClick:f,className:"px-4 py-2 bg-purple-600 text-white rounded hover:bg-purple-700 transition-colors",children:"手动记录错误"}),e.jsx("button",{onClick:r.clearErrors,className:"px-4 py-2 bg-gray-600 text-white rounded hover:bg-gray-700 transition-colors",children:"清除所有错误"})]})})]}),e.jsxs("div",{className:"bg-white p-6 rounded-lg border border-gray-200",children:[e.jsx("h3",{className:"text-lg font-semibold text-gray-800 mb-4",children:"错误统计"}),e.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-6",children:[e.jsxs("div",{className:"bg-red-50 p-4 rounded-lg border border-red-200",children:[e.jsx("div",{className:"text-2xl font-bold text-red-600",children:r.stats.totalErrors}),e.jsx("div",{className:"text-sm text-red-700",children:"总错误数"})]}),e.jsxs("div",{className:"bg-orange-50 p-4 rounded-lg border border-orange-200",children:[e.jsx("div",{className:"text-2xl font-bold text-orange-600",children:r.stats.errorRate}),e.jsx("div",{className:"text-sm text-orange-700",children:"错误率/小时"})]}),e.jsxs("div",{className:"bg-yellow-50 p-4 rounded-lg border border-yellow-200",children:[e.jsx("div",{className:"text-2xl font-bold text-yellow-600",children:Object.keys(r.stats.errorsByCategory).length}),e.jsx("div",{className:"text-sm text-yellow-700",children:"错误类别数"})]}),e.jsxs("div",{className:"bg-blue-50 p-4 rounded-lg border border-blue-200",children:[e.jsx("div",{className:"text-2xl font-bold text-blue-600",children:r.stats.recentErrors.length}),e.jsx("div",{className:"text-sm text-blue-700",children:"最近错误数"})]})]}),e.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-6",children:[e.jsxs("div",{children:[e.jsx("h4",{className:"font-medium text-gray-800 mb-3",children:"按类别统计"}),Object.keys(r.stats.errorsByCategory).length>0?e.jsx("div",{className:"space-y-2",children:Object.entries(r.stats.errorsByCategory).map(([o,t])=>e.jsxs("div",{className:"flex items-center justify-between p-2 bg-gray-50 rounded",children:[e.jsx("span",{className:"text-sm font-medium text-gray-700 capitalize",children:o}),e.jsxs("div",{className:"flex items-center gap-2",children:[e.jsx("div",{className:"w-20 bg-gray-200 rounded-full h-2",children:e.jsx("div",{className:"h-2 bg-blue-500 rounded-full",style:{width:`${t/r.stats.totalErrors*100}%`}})}),e.jsx("span",{className:"text-sm font-medium text-gray-800",children:t})]})]},o))}):e.jsx("p",{className:"text-sm text-gray-500",children:"暂无错误数据"})]}),e.jsxs("div",{children:[e.jsx("h4",{className:"font-medium text-gray-800 mb-3",children:"按严重程度统计"}),Object.keys(r.stats.errorsBySeverity).length>0?e.jsx("div",{className:"space-y-2",children:Object.entries(r.stats.errorsBySeverity).map(([o,t])=>e.jsxs("div",{className:"flex items-center justify-between p-2 bg-gray-50 rounded",children:[e.jsx("span",{className:"text-sm font-medium text-gray-700 capitalize",children:o}),e.jsxs("div",{className:"flex items-center gap-2",children:[e.jsx("div",{className:"w-20 bg-gray-200 rounded-full h-2",children:e.jsx("div",{className:`h-2 rounded-full ${o==="critical"?"bg-red-500":o==="high"?"bg-orange-500":o==="medium"?"bg-yellow-500":"bg-green-500"}`,style:{width:`${t/r.stats.totalErrors*100}%`}})}),e.jsx("span",{className:"text-sm font-medium text-gray-800",children:t})]})]},o))}):e.jsx("p",{className:"text-sm text-gray-500",children:"暂无错误数据"})]})]}),r.stats.recentErrors.length>0&&e.jsxs("div",{className:"mt-6",children:[e.jsx("h4",{className:"font-medium text-gray-800 mb-3",children:"最近错误"}),e.jsx("div",{className:"space-y-2 max-h-40 overflow-y-auto",children:r.stats.recentErrors.map(o=>e.jsx("div",{className:"p-3 bg-gray-50 rounded border",children:e.jsxs("div",{className:"flex items-start justify-between",children:[e.jsxs("div",{className:"flex-1",children:[e.jsx("div",{className:"text-sm font-medium text-gray-800",children:o.message}),e.jsxs("div",{className:"text-xs text-gray-500 mt-1",children:[o.timestamp.toLocaleString()," • ",o.category," •"," ",o.severity]})]}),e.jsx("button",{onClick:()=>r.clearError(o.id),className:"text-gray-400 hover:text-gray-600 ml-2",children:"×"})]})},o.id))})]})]}),e.jsxs("div",{className:"p-3 bg-blue-50 border border-blue-200 rounded",children:[e.jsx("h4",{className:"font-medium text-blue-800 mb-2",children:"错误边界功能演示："}),e.jsxs("div",{className:"text-sm text-blue-700 space-y-1",children:[e.jsx("p",{children:"• 渲染错误捕获：自动捕获子组件中的 JavaScript 错误"}),e.jsx("p",{children:"• 重试机制：支持自动和手动重试，避免永久性错误"}),e.jsx("p",{children:"• 异步错误处理：处理 Promise 和异步操作中的错误"}),e.jsx("p",{children:"• 错误分类：按类型和严重程度对错误进行分类"}),e.jsx("p",{children:"• 统计分析：提供详细的错误统计和趋势分析"})]})]})]})},Y=()=>{const r=D({enableLogging:!0,maxRetries:5,retryDelay:2e3}),[n,s]=l.useState(!1),[a,d]=l.useState(!1),[g,i]=l.useState([]),y=l.useCallback(async()=>{d(!0);try{await r.handleAsync(async()=>{throw await new Promise(t=>setTimeout(t,1e3)),new Error("Out of memory: Cannot allocate large array")},{context:{operation:"memory_intensive",dataSize:"1GB"},fallback:null,retries:2})}finally{d(!1)}},[r]),x=l.useCallback(async()=>{d(!0);try{const u=await U([{fn:async()=>{if(await new Promise(h=>setTimeout(h,800)),Math.random()>.7)throw new Error("Network timeout");return{id:1,data:"Success 1"}},options:{context:{endpoint:"/api/users"},fallback:{id:1,data:"Cached data"}}},{fn:async()=>{if(await new Promise(h=>setTimeout(h,600)),Math.random()>.6)throw new Error("Connection refused");return{id:2,data:"Success 2"}},options:{context:{endpoint:"/api/posts"},fallback:{id:2,data:"Default data"}}},{fn:async()=>{if(await new Promise(h=>setTimeout(h,1200)),Math.random()>.8)throw new Error("Request failed");return{id:3,data:"Success 3"}},options:{context:{endpoint:"/api/comments"},fallback:{id:3,data:"Empty list"}}}]);i(u)}finally{d(!1)}},[]),f=l.useCallback(async()=>{d(!0);try{await r.handleAsync(async()=>{throw await new Promise(t=>setTimeout(t,500)),new Error("Validation failed: Invalid email format")},{context:{operation:"user_registration",input:{email:"invalid-email",password:"123"}},fallback:null})}finally{d(!1)}},[r]),o=r.stats.recentErrors.map(t=>({error:t,strategy:z(t)}));return e.jsxs("div",{className:"space-y-6",children:[e.jsxs("div",{className:"bg-white p-6 rounded-lg border border-gray-200",children:[e.jsx("h3",{className:"text-lg font-semibold text-gray-800 mb-4",children:"错误模拟测试"}),e.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-3 gap-4 mb-6",children:[e.jsxs("button",{onClick:y,disabled:a,className:"p-4 bg-red-50 border border-red-200 rounded-lg hover:bg-red-100 transition-colors disabled:opacity-50",children:[e.jsx("div",{className:"text-red-600 font-medium",children:"内存错误测试"}),e.jsx("div",{className:"text-sm text-red-500 mt-1",children:"模拟内存不足错误"})]}),e.jsxs("button",{onClick:x,disabled:a,className:"p-4 bg-blue-50 border border-blue-200 rounded-lg hover:bg-blue-100 transition-colors disabled:opacity-50",children:[e.jsx("div",{className:"text-blue-600 font-medium",children:"网络恢复测试"}),e.jsx("div",{className:"text-sm text-blue-500 mt-1",children:"批量网络请求处理"})]}),e.jsxs("button",{onClick:f,disabled:a,className:"p-4 bg-yellow-50 border border-yellow-200 rounded-lg hover:bg-yellow-100 transition-colors disabled:opacity-50",children:[e.jsx("div",{className:"text-yellow-600 font-medium",children:"验证错误测试"}),e.jsx("div",{className:"text-sm text-yellow-500 mt-1",children:"数据验证失败处理"})]})]}),a&&e.jsxs("div",{className:"flex items-center justify-center p-4 bg-gray-50 rounded-lg",children:[e.jsx("div",{className:"animate-spin rounded-full h-6 w-6 border-b-2 border-blue-600 mr-2"}),e.jsx("span",{className:"text-gray-600",children:"处理中..."})]})]}),g.length>0&&e.jsxs("div",{className:"bg-white p-6 rounded-lg border border-gray-200",children:[e.jsx("h3",{className:"text-lg font-semibold text-gray-800 mb-4",children:"测试结果"}),e.jsx("div",{className:"space-y-3",children:g.map((t,u)=>e.jsx("div",{className:`p-3 rounded-lg border ${t.success?"bg-green-50 border-green-200":"bg-red-50 border-red-200"}`,children:e.jsxs("div",{className:"flex items-center justify-between",children:[e.jsxs("div",{children:[e.jsxs("span",{className:`font-medium ${t.success?"text-green-800":"text-red-800"}`,children:["操作 ",u+1,": ",t.success?"成功":"失败"]}),t.data&&e.jsxs("div",{className:"text-sm text-gray-600 mt-1",children:["数据: ",JSON.stringify(t.data)]}),t.error&&e.jsxs("div",{className:"text-sm text-red-600 mt-1",children:["错误: ",t.error.message]})]}),e.jsx("div",{className:`px-2 py-1 rounded text-xs font-medium ${t.success?"bg-green-100 text-green-800":"bg-red-100 text-red-800"}`,children:t.success?"✓":"✗"})]})},u))})]}),o.length>0&&e.jsxs("div",{className:"bg-white p-6 rounded-lg border border-gray-200",children:[e.jsx("h3",{className:"text-lg font-semibold text-gray-800 mb-4",children:"错误分析和恢复建议"}),e.jsx("div",{className:"space-y-4",children:o.map((t,u)=>e.jsxs("div",{className:"p-4 bg-gray-50 rounded-lg border",children:[e.jsxs("div",{className:"flex items-start justify-between mb-2",children:[e.jsxs("div",{className:"flex-1",children:[e.jsx("div",{className:"font-medium text-gray-800",children:t.error.message}),e.jsxs("div",{className:"text-sm text-gray-500 mt-1",children:["类别: ",t.error.category," • 严重程度:"," ",t.error.severity," • 时间:"," ",t.error.timestamp.toLocaleString()]})]}),e.jsx("div",{className:`px-2 py-1 rounded text-xs font-medium ${t.error.severity==="critical"?"bg-red-100 text-red-800":t.error.severity==="high"?"bg-orange-100 text-orange-800":t.error.severity==="medium"?"bg-yellow-100 text-yellow-800":"bg-green-100 text-green-800"}`,children:t.error.severity})]}),e.jsxs("div",{className:"bg-blue-50 p-3 rounded border border-blue-200",children:[e.jsx("div",{className:"text-sm font-medium text-blue-800 mb-1",children:"恢复建议:"}),e.jsx("div",{className:"text-sm text-blue-700",children:t.strategy})]})]},t.error.id))})]}),e.jsxs("div",{className:"bg-white p-6 rounded-lg border border-gray-200",children:[e.jsx("h3",{className:"text-lg font-semibold text-gray-800 mb-4",children:"错误统计分析"}),e.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-6",children:[e.jsxs("div",{children:[e.jsx("h4",{className:"font-medium text-gray-800 mb-3",children:"按类别统计"}),Object.keys(r.stats.errorsByCategory).length>0?e.jsx("div",{className:"space-y-2",children:Object.entries(r.stats.errorsByCategory).map(([t,u])=>e.jsxs("div",{className:"flex items-center justify-between p-2 bg-gray-50 rounded",children:[e.jsx("span",{className:"text-sm font-medium text-gray-700 capitalize",children:t}),e.jsxs("div",{className:"flex items-center gap-2",children:[e.jsx("div",{className:"w-20 bg-gray-200 rounded-full h-2",children:e.jsx("div",{className:"h-2 bg-blue-500 rounded-full",style:{width:`${u/r.stats.totalErrors*100}%`}})}),e.jsx("span",{className:"text-sm font-medium text-gray-800",children:u})]})]},t))}):e.jsx("p",{className:"text-sm text-gray-500",children:"暂无错误数据"})]}),e.jsxs("div",{children:[e.jsx("h4",{className:"font-medium text-gray-800 mb-3",children:"按严重程度统计"}),Object.keys(r.stats.errorsBySeverity).length>0?e.jsx("div",{className:"space-y-2",children:Object.entries(r.stats.errorsBySeverity).map(([t,u])=>e.jsxs("div",{className:"flex items-center justify-between p-2 bg-gray-50 rounded",children:[e.jsx("span",{className:"text-sm font-medium text-gray-700 capitalize",children:t}),e.jsxs("div",{className:"flex items-center gap-2",children:[e.jsx("div",{className:"w-20 bg-gray-200 rounded-full h-2",children:e.jsx("div",{className:`h-2 rounded-full ${t==="critical"?"bg-red-500":t==="high"?"bg-orange-500":t==="medium"?"bg-yellow-500":"bg-green-500"}`,style:{width:`${u/r.stats.totalErrors*100}%`}})}),e.jsx("span",{className:"text-sm font-medium text-gray-800",children:u})]})]},t))}):e.jsx("p",{className:"text-sm text-gray-500",children:"暂无错误数据"})]})]})]}),e.jsxs("div",{className:"p-3 bg-purple-50 border border-purple-200 rounded",children:[e.jsx("h4",{className:"font-medium text-purple-800 mb-2",children:"高级错误处理功能："}),e.jsxs("div",{className:"text-sm text-purple-700 space-y-1",children:[e.jsx("p",{children:"• 智能重试：指数退避算法，避免系统过载"}),e.jsx("p",{children:"• 错误分类：自动识别错误类型和严重程度"}),e.jsx("p",{children:"• 恢复策略：针对不同错误类型提供恢复建议"}),e.jsx("p",{children:"• 批量处理：并发处理多个可能失败的操作"}),e.jsx("p",{children:"• 统计分析：提供详细的错误统计和趋势分析"})]})]})]})},W=`import React, { useCallback, useState } from "react";
import { getRecoveryStrategy, handleBatchOperations } from "./utils";

import { useErrorHandling } from "./useErrorHandling";

// 高级错误处理演示组件
export const AdvancedErrorHandlingDemo: React.FC = () => {
  const errorHandling = useErrorHandling({
    enableLogging: true,
    maxRetries: 5,
    retryDelay: 2000,
  });

  const [isSimulating, setIsSimulating] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [testResults, setTestResults] = useState<any[]>([]);

  // 模拟内存错误
  const simulateMemoryError = useCallback(async () => {
    setIsLoading(true);
    try {
      await errorHandling.handleAsync(
        async () => {
          // 模拟内存密集型操作
          await new Promise((resolve) => setTimeout(resolve, 1000));
          throw new Error("Out of memory: Cannot allocate large array");
        },
        {
          context: { operation: "memory_intensive", dataSize: "1GB" },
          fallback: null,
          retries: 2,
        }
      );
    } finally {
      setIsLoading(false);
    }
  }, [errorHandling]);

  // 模拟网络错误恢复
  const simulateNetworkRecovery = useCallback(async () => {
    setIsLoading(true);
    try {
      const operations = [
        {
          fn: async () => {
            await new Promise((resolve) => setTimeout(resolve, 800));
            if (Math.random() > 0.7) throw new Error("Network timeout");
            return { id: 1, data: "Success 1" };
          },
          options: {
            context: { endpoint: "/api/users" },
            fallback: { id: 1, data: "Cached data" },
          },
        },
        {
          fn: async () => {
            await new Promise((resolve) => setTimeout(resolve, 600));
            if (Math.random() > 0.6) throw new Error("Connection refused");
            return { id: 2, data: "Success 2" };
          },
          options: {
            context: { endpoint: "/api/posts" },
            fallback: { id: 2, data: "Default data" },
          },
        },
        {
          fn: async () => {
            await new Promise((resolve) => setTimeout(resolve, 1200));
            if (Math.random() > 0.8) throw new Error("Request failed");
            return { id: 3, data: "Success 3" };
          },
          options: {
            context: { endpoint: "/api/comments" },
            fallback: { id: 3, data: "Empty list" },
          },
        },
      ];

      const results = await handleBatchOperations(operations);
      setTestResults(results);
    } finally {
      setIsLoading(false);
    }
  }, []);

  // 模拟数据验证错误
  const simulateValidationError = useCallback(async () => {
    setIsLoading(true);
    try {
      await errorHandling.handleAsync(
        async () => {
          await new Promise((resolve) => setTimeout(resolve, 500));
          throw new Error("Validation failed: Invalid email format");
        },
        {
          context: {
            operation: "user_registration",
            input: { email: "invalid-email", password: "123" },
          },
          fallback: null,
        }
      );
    } finally {
      setIsLoading(false);
    }
  }, [errorHandling]);

  // 错误恢复策略
  const recoveryStrategies = errorHandling.stats.recentErrors.map((error) => ({
    error,
    strategy: getRecoveryStrategy(error),
  }));

  return (
    <div className="space-y-6">
      {/* 错误模拟测试 */}
      <div className="bg-white p-6 rounded-lg border border-gray-200">
        <h3 className="text-lg font-semibold text-gray-800 mb-4">
          错误模拟测试
        </h3>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
          <button
            onClick={simulateMemoryError}
            disabled={isLoading}
            className="p-4 bg-red-50 border border-red-200 rounded-lg hover:bg-red-100 transition-colors disabled:opacity-50"
          >
            <div className="text-red-600 font-medium">内存错误测试</div>
            <div className="text-sm text-red-500 mt-1">模拟内存不足错误</div>
          </button>

          <button
            onClick={simulateNetworkRecovery}
            disabled={isLoading}
            className="p-4 bg-blue-50 border border-blue-200 rounded-lg hover:bg-blue-100 transition-colors disabled:opacity-50"
          >
            <div className="text-blue-600 font-medium">网络恢复测试</div>
            <div className="text-sm text-blue-500 mt-1">批量网络请求处理</div>
          </button>

          <button
            onClick={simulateValidationError}
            disabled={isLoading}
            className="p-4 bg-yellow-50 border border-yellow-200 rounded-lg hover:bg-yellow-100 transition-colors disabled:opacity-50"
          >
            <div className="text-yellow-600 font-medium">验证错误测试</div>
            <div className="text-sm text-yellow-500 mt-1">数据验证失败处理</div>
          </button>
        </div>

        {isLoading && (
          <div className="flex items-center justify-center p-4 bg-gray-50 rounded-lg">
            <div className="animate-spin rounded-full h-6 w-6 border-b-2 border-blue-600 mr-2"></div>
            <span className="text-gray-600">处理中...</span>
          </div>
        )}
      </div>

      {/* 测试结果 */}
      {testResults.length > 0 && (
        <div className="bg-white p-6 rounded-lg border border-gray-200">
          <h3 className="text-lg font-semibold text-gray-800 mb-4">测试结果</h3>

          <div className="space-y-3">
            {testResults.map((result, index) => (
              <div
                key={index}
                className={\`p-3 rounded-lg border \${
                  result.success
                    ? "bg-green-50 border-green-200"
                    : "bg-red-50 border-red-200"
                }\`}
              >
                <div className="flex items-center justify-between">
                  <div>
                    <span
                      className={\`font-medium \${
                        result.success ? "text-green-800" : "text-red-800"
                      }\`}
                    >
                      操作 {index + 1}: {result.success ? "成功" : "失败"}
                    </span>
                    {result.data && (
                      <div className="text-sm text-gray-600 mt-1">
                        数据: {JSON.stringify(result.data)}
                      </div>
                    )}
                    {result.error && (
                      <div className="text-sm text-red-600 mt-1">
                        错误: {result.error.message}
                      </div>
                    )}
                  </div>
                  <div
                    className={\`px-2 py-1 rounded text-xs font-medium \${
                      result.success
                        ? "bg-green-100 text-green-800"
                        : "bg-red-100 text-red-800"
                    }\`}
                  >
                    {result.success ? "✓" : "✗"}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* 错误分析和恢复建议 */}
      {recoveryStrategies.length > 0 && (
        <div className="bg-white p-6 rounded-lg border border-gray-200">
          <h3 className="text-lg font-semibold text-gray-800 mb-4">
            错误分析和恢复建议
          </h3>

          <div className="space-y-4">
            {recoveryStrategies.map((item, index) => (
              <div
                key={item.error.id}
                className="p-4 bg-gray-50 rounded-lg border"
              >
                <div className="flex items-start justify-between mb-2">
                  <div className="flex-1">
                    <div className="font-medium text-gray-800">
                      {item.error.message}
                    </div>
                    <div className="text-sm text-gray-500 mt-1">
                      类别: {item.error.category} • 严重程度:{" "}
                      {item.error.severity} • 时间:{" "}
                      {item.error.timestamp.toLocaleString()}
                    </div>
                  </div>
                  <div
                    className={\`px-2 py-1 rounded text-xs font-medium \${
                      item.error.severity === "critical"
                        ? "bg-red-100 text-red-800"
                        : item.error.severity === "high"
                        ? "bg-orange-100 text-orange-800"
                        : item.error.severity === "medium"
                        ? "bg-yellow-100 text-yellow-800"
                        : "bg-green-100 text-green-800"
                    }\`}
                  >
                    {item.error.severity}
                  </div>
                </div>

                <div className="bg-blue-50 p-3 rounded border border-blue-200">
                  <div className="text-sm font-medium text-blue-800 mb-1">
                    恢复建议:
                  </div>
                  <div className="text-sm text-blue-700">{item.strategy}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* 错误统计图表 */}
      <div className="bg-white p-6 rounded-lg border border-gray-200">
        <h3 className="text-lg font-semibold text-gray-800 mb-4">
          错误统计分析
        </h3>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <h4 className="font-medium text-gray-800 mb-3">按类别统计</h4>
            {Object.keys(errorHandling.stats.errorsByCategory).length > 0 ? (
              <div className="space-y-2">
                {Object.entries(errorHandling.stats.errorsByCategory).map(
                  ([category, count]) => (
                    <div
                      key={category}
                      className="flex items-center justify-between p-2 bg-gray-50 rounded"
                    >
                      <span className="text-sm font-medium text-gray-700 capitalize">
                        {category}
                      </span>
                      <div className="flex items-center gap-2">
                        <div className="w-20 bg-gray-200 rounded-full h-2">
                          <div
                            className="h-2 bg-blue-500 rounded-full"
                            style={{
                              width: \`\${
                                (count / errorHandling.stats.totalErrors) * 100
                              }%\`,
                            }}
                          />
                        </div>
                        <span className="text-sm font-medium text-gray-800">
                          {count}
                        </span>
                      </div>
                    </div>
                  )
                )}
              </div>
            ) : (
              <p className="text-sm text-gray-500">暂无错误数据</p>
            )}
          </div>

          <div>
            <h4 className="font-medium text-gray-800 mb-3">按严重程度统计</h4>
            {Object.keys(errorHandling.stats.errorsBySeverity).length > 0 ? (
              <div className="space-y-2">
                {Object.entries(errorHandling.stats.errorsBySeverity).map(
                  ([severity, count]) => (
                    <div
                      key={severity}
                      className="flex items-center justify-between p-2 bg-gray-50 rounded"
                    >
                      <span className="text-sm font-medium text-gray-700 capitalize">
                        {severity}
                      </span>
                      <div className="flex items-center gap-2">
                        <div className="w-20 bg-gray-200 rounded-full h-2">
                          <div
                            className={\`h-2 rounded-full \${
                              severity === "critical"
                                ? "bg-red-500"
                                : severity === "high"
                                ? "bg-orange-500"
                                : severity === "medium"
                                ? "bg-yellow-500"
                                : "bg-green-500"
                            }\`}
                            style={{
                              width: \`\${
                                (count / errorHandling.stats.totalErrors) * 100
                              }%\`,
                            }}
                          />
                        </div>
                        <span className="text-sm font-medium text-gray-800">
                          {count}
                        </span>
                      </div>
                    </div>
                  )
                )}
              </div>
            ) : (
              <p className="text-sm text-gray-500">暂无错误数据</p>
            )}
          </div>
        </div>
      </div>

      <div className="p-3 bg-purple-50 border border-purple-200 rounded">
        <h4 className="font-medium text-purple-800 mb-2">高级错误处理功能：</h4>
        <div className="text-sm text-purple-700 space-y-1">
          <p>• 智能重试：指数退避算法，避免系统过载</p>
          <p>• 错误分类：自动识别错误类型和严重程度</p>
          <p>• 恢复策略：针对不同错误类型提供恢复建议</p>
          <p>• 批量处理：并发处理多个可能失败的操作</p>
          <p>• 统计分析：提供详细的错误统计和趋势分析</p>
        </div>
      </div>
    </div>
  );
};
`,K=`import React, { useState } from "react";

import { ErrorBoundary } from "./ErrorBoundary";
import { useErrorHandling } from "./useErrorHandling";

// 故意抛出错误的组件
const BuggyComponent: React.FC<{ shouldError: boolean }> = ({
  shouldError,
}) => {
  if (shouldError) {
    throw new Error("这是一个故意抛出的渲染错误！");
  }
  return (
    <div className="p-4 bg-green-50 border border-green-200 rounded">
      <p className="text-green-800">✅ 组件正常渲染</p>
    </div>
  );
};

// 基础错误边界演示组件
export const BasicErrorBoundaryDemo: React.FC = () => {
  const errorHandling = useErrorHandling({
    enableLogging: true,
    maxRetries: 3,
    retryDelay: 1000,
  });

  const [shouldError, setShouldError] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  // 触发渲染错误
  const triggerRenderError = () => {
    setShouldError(true);
  };

  // 重置错误状态
  const resetError = () => {
    setShouldError(false);
  };

  // 模拟异步错误
  const handleAsyncError = async () => {
    setIsLoading(true);
    try {
      await errorHandling.simulateAsyncError("async");
    } finally {
      setIsLoading(false);
    }
  };

  // 模拟网络错误
  const handleNetworkError = async () => {
    setIsLoading(true);
    try {
      await errorHandling.simulateNetworkError();
    } finally {
      setIsLoading(false);
    }
  };

  // 手动记录错误
  const handleManualError = () => {
    errorHandling.recordError("这是一个手动记录的错误", {
      component: "BasicErrorBoundaryDemo",
      action: "manual_error",
      timestamp: Date.now(),
    });
  };

  return (
    <div className="space-y-6">
      {/* 错误边界演示 */}
      <div className="bg-white p-6 rounded-lg border border-gray-200">
        <h3 className="text-lg font-semibold text-gray-800 mb-4">
          渲染错误测试
        </h3>

        <div className="space-y-4">
          <div className="flex gap-2">
            <button
              onClick={triggerRenderError}
              className="px-4 py-2 bg-red-600 text-white rounded hover:bg-red-700 transition-colors"
            >
              触发渲染错误
            </button>
            <button
              onClick={resetError}
              className="px-4 py-2 bg-gray-600 text-white rounded hover:bg-gray-700 transition-colors"
            >
              重置状态
            </button>
          </div>

          <ErrorBoundary
            onError={(error, errorInfo) => {
              errorHandling.logError(error, errorInfo.componentStack, {
                component: "BuggyComponent",
                trigger: "render_error",
              });
            }}
            maxRetries={3}
          >
            <BuggyComponent shouldError={shouldError} />
          </ErrorBoundary>
        </div>
      </div>

      {/* 异步错误测试 */}
      <div className="bg-white p-6 rounded-lg border border-gray-200">
        <h3 className="text-lg font-semibold text-gray-800 mb-4">
          异步错误测试
        </h3>

        <div className="space-y-4">
          <div className="flex gap-2 flex-wrap">
            <button
              onClick={handleAsyncError}
              disabled={isLoading}
              className="px-4 py-2 bg-orange-600 text-white rounded hover:bg-orange-700 transition-colors disabled:opacity-50"
            >
              {isLoading ? "处理中..." : "模拟异步错误"}
            </button>
            <button
              onClick={handleNetworkError}
              disabled={isLoading}
              className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition-colors disabled:opacity-50"
            >
              {isLoading ? "处理中..." : "模拟网络错误"}
            </button>
            <button
              onClick={handleManualError}
              className="px-4 py-2 bg-purple-600 text-white rounded hover:bg-purple-700 transition-colors"
            >
              手动记录错误
            </button>
            <button
              onClick={errorHandling.clearErrors}
              className="px-4 py-2 bg-gray-600 text-white rounded hover:bg-gray-700 transition-colors"
            >
              清除所有错误
            </button>
          </div>
        </div>
      </div>

      {/* 错误统计 */}
      <div className="bg-white p-6 rounded-lg border border-gray-200">
        <h3 className="text-lg font-semibold text-gray-800 mb-4">错误统计</h3>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
          <div className="bg-red-50 p-4 rounded-lg border border-red-200">
            <div className="text-2xl font-bold text-red-600">
              {errorHandling.stats.totalErrors}
            </div>
            <div className="text-sm text-red-700">总错误数</div>
          </div>
          <div className="bg-orange-50 p-4 rounded-lg border border-orange-200">
            <div className="text-2xl font-bold text-orange-600">
              {errorHandling.stats.errorRate}
            </div>
            <div className="text-sm text-orange-700">错误率/小时</div>
          </div>
          <div className="bg-yellow-50 p-4 rounded-lg border border-yellow-200">
            <div className="text-2xl font-bold text-yellow-600">
              {Object.keys(errorHandling.stats.errorsByCategory).length}
            </div>
            <div className="text-sm text-yellow-700">错误类别数</div>
          </div>
          <div className="bg-blue-50 p-4 rounded-lg border border-blue-200">
            <div className="text-2xl font-bold text-blue-600">
              {errorHandling.stats.recentErrors.length}
            </div>
            <div className="text-sm text-blue-700">最近错误数</div>
          </div>
        </div>

        {/* 错误分类统计 */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <h4 className="font-medium text-gray-800 mb-3">按类别统计</h4>
            {Object.keys(errorHandling.stats.errorsByCategory).length > 0 ? (
              <div className="space-y-2">
                {Object.entries(errorHandling.stats.errorsByCategory).map(
                  ([category, count]) => (
                    <div
                      key={category}
                      className="flex items-center justify-between p-2 bg-gray-50 rounded"
                    >
                      <span className="text-sm font-medium text-gray-700 capitalize">
                        {category}
                      </span>
                      <div className="flex items-center gap-2">
                        <div className="w-20 bg-gray-200 rounded-full h-2">
                          <div
                            className="h-2 bg-blue-500 rounded-full"
                            style={{
                              width: \`\${
                                (count / errorHandling.stats.totalErrors) * 100
                              }%\`,
                            }}
                          />
                        </div>
                        <span className="text-sm font-medium text-gray-800">
                          {count}
                        </span>
                      </div>
                    </div>
                  )
                )}
              </div>
            ) : (
              <p className="text-sm text-gray-500">暂无错误数据</p>
            )}
          </div>

          <div>
            <h4 className="font-medium text-gray-800 mb-3">按严重程度统计</h4>
            {Object.keys(errorHandling.stats.errorsBySeverity).length > 0 ? (
              <div className="space-y-2">
                {Object.entries(errorHandling.stats.errorsBySeverity).map(
                  ([severity, count]) => (
                    <div
                      key={severity}
                      className="flex items-center justify-between p-2 bg-gray-50 rounded"
                    >
                      <span className="text-sm font-medium text-gray-700 capitalize">
                        {severity}
                      </span>
                      <div className="flex items-center gap-2">
                        <div className="w-20 bg-gray-200 rounded-full h-2">
                          <div
                            className={\`h-2 rounded-full \${
                              severity === "critical"
                                ? "bg-red-500"
                                : severity === "high"
                                ? "bg-orange-500"
                                : severity === "medium"
                                ? "bg-yellow-500"
                                : "bg-green-500"
                            }\`}
                            style={{
                              width: \`\${
                                (count / errorHandling.stats.totalErrors) * 100
                              }%\`,
                            }}
                          />
                        </div>
                        <span className="text-sm font-medium text-gray-800">
                          {count}
                        </span>
                      </div>
                    </div>
                  )
                )}
              </div>
            ) : (
              <p className="text-sm text-gray-500">暂无错误数据</p>
            )}
          </div>
        </div>

        {/* 最近错误列表 */}
        {errorHandling.stats.recentErrors.length > 0 && (
          <div className="mt-6">
            <h4 className="font-medium text-gray-800 mb-3">最近错误</h4>
            <div className="space-y-2 max-h-40 overflow-y-auto">
              {errorHandling.stats.recentErrors.map((error) => (
                <div key={error.id} className="p-3 bg-gray-50 rounded border">
                  <div className="flex items-start justify-between">
                    <div className="flex-1">
                      <div className="text-sm font-medium text-gray-800">
                        {error.message}
                      </div>
                      <div className="text-xs text-gray-500 mt-1">
                        {error.timestamp.toLocaleString()} • {error.category} •{" "}
                        {error.severity}
                      </div>
                    </div>
                    <button
                      onClick={() => errorHandling.clearError(error.id)}
                      className="text-gray-400 hover:text-gray-600 ml-2"
                    >
                      ×
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>

      <div className="p-3 bg-blue-50 border border-blue-200 rounded">
        <h4 className="font-medium text-blue-800 mb-2">错误边界功能演示：</h4>
        <div className="text-sm text-blue-700 space-y-1">
          <p>• 渲染错误捕获：自动捕获子组件中的 JavaScript 错误</p>
          <p>• 重试机制：支持自动和手动重试，避免永久性错误</p>
          <p>• 异步错误处理：处理 Promise 和异步操作中的错误</p>
          <p>• 错误分类：按类型和严重程度对错误进行分类</p>
          <p>• 统计分析：提供详细的错误统计和趋势分析</p>
        </div>
      </div>
    </div>
  );
};
`,j=`import React, { Component, ErrorInfo, ReactNode } from "react";

import { ErrorBoundaryState } from "./types";
import { createErrorDetails } from "./utils";

// 错误边界类组件
export class ErrorBoundary extends Component<
  {
    children: ReactNode;
    fallback?: ReactNode;
    onError?: (error: Error, errorInfo: ErrorInfo) => void;
    maxRetries?: number;
  },
  ErrorBoundaryState
> {
  private retryTimeoutId: NodeJS.Timeout | null = null;

  constructor(props: any) {
    super(props);
    this.state = {
      hasError: false,
      error: null,
      errorInfo: null,
      errorId: null,
      retryCount: 0,
      maxRetries: props.maxRetries || 3,
    };
  }

  static getDerivedStateFromError(error: Error): Partial<ErrorBoundaryState> {
    return {
      hasError: true,
      error,
      errorId: \`error_\${Date.now()}_\${Math.random().toString(36).substr(2, 9)}\`,
    };
  }

  componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    const errorDetails = createErrorDetails(
      error,
      errorInfo.componentStack || undefined
    );

    console.error("ErrorBoundary caught an error:", errorDetails);

    this.setState({ errorInfo });

    if (this.props.onError) {
      this.props.onError(error, errorInfo);
    }
  }

  handleRetry = () => {
    if (this.state.retryCount < this.state.maxRetries) {
      this.setState((prevState) => ({
        hasError: false,
        error: null,
        errorInfo: null,
        errorId: null,
        retryCount: prevState.retryCount + 1,
      }));
    }
  };

  handleReset = () => {
    this.setState({
      hasError: false,
      error: null,
      errorInfo: null,
      errorId: null,
      retryCount: 0,
    });
  };

  render() {
    if (this.state.hasError) {
      if (this.props.fallback) {
        return this.props.fallback;
      }

      const canRetry = this.state.retryCount < this.state.maxRetries;

      return (
        <div className="min-h-[200px] flex items-center justify-center bg-red-50 border border-red-200 rounded-lg p-6">
          <div className="text-center max-w-md">
            <div className="text-red-600 mb-4">
              <svg
                className="w-12 h-12 mx-auto mb-2"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.964-.833-2.732 0L3.732 16.5c-.77.833.192 2.5 1.732 2.5z"
                />
              </svg>
            </div>

            <h3 className="text-lg font-semibold text-red-800 mb-2">
              组件发生错误
            </h3>

            <p className="text-red-600 mb-4 text-sm">
              {this.state.error?.message || "未知错误"}
            </p>

            <div className="space-y-2">
              {canRetry && (
                <button
                  onClick={this.handleRetry}
                  className="w-full px-4 py-2 bg-red-600 text-white rounded hover:bg-red-700 transition-colors text-sm"
                >
                  重试 ({this.state.maxRetries - this.state.retryCount} 次剩余)
                </button>
              )}

              <button
                onClick={this.handleReset}
                className="w-full px-4 py-2 bg-gray-600 text-white rounded hover:bg-gray-700 transition-colors text-sm"
              >
                重置组件
              </button>
            </div>

            {process.env.NODE_ENV === "development" && this.state.errorInfo && (
              <details className="mt-4 text-left">
                <summary className="cursor-pointer text-sm text-red-700 hover:text-red-800">
                  查看错误详情
                </summary>
                <div className="mt-2 p-3 bg-red-100 rounded text-xs font-mono text-red-800 overflow-auto max-h-32">
                  <div className="mb-2">
                    <strong>错误堆栈：</strong>
                    <pre className="whitespace-pre-wrap">
                      {this.state.error?.stack}
                    </pre>
                  </div>
                  <div>
                    <strong>组件堆栈：</strong>
                    <pre className="whitespace-pre-wrap">
                      {this.state.errorInfo.componentStack}
                    </pre>
                  </div>
                </div>
              </details>
            )}
          </div>
        </div>
      );
    }

    return this.props.children;
  }
}
`,k=`import { ErrorInfo, ReactNode } from "react";

// 错误详情接口
export interface ErrorDetails {
  id: string;
  message: string;
  stack?: string;
  componentStack?: string;
  timestamp: Date;
  severity: "low" | "medium" | "high" | "critical";
  category: "render" | "async" | "network" | "validation" | "unknown";
  context?: Record<string, any>;
  userAgent?: string;
  url?: string;
}

// 错误边界状态接口
export interface ErrorBoundaryState {
  hasError: boolean;
  error: Error | null;
  errorInfo: ErrorInfo | null;
  errorId: string | null;
  retryCount: number;
  maxRetries: number;
}

// 错误处理配置接口
export interface ErrorHandlingConfig {
  enableLogging?: boolean;
  enableReporting?: boolean;
  maxRetries?: number;
  retryDelay?: number;
  fallbackComponent?: ReactNode;
  onError?: (error: ErrorDetails) => void;
  shouldRetry?: (error: Error, retryCount: number) => boolean;
}

// 错误统计接口
export interface ErrorStats {
  totalErrors: number;
  errorsByCategory: Record<string, number>;
  errorsBySeverity: Record<string, number>;
  recentErrors: ErrorDetails[];
  errorRate: number;
}

// 错误边界 Action 类型
export type ErrorBoundaryAction =
  | { type: "SET_ERROR"; payload: { error: Error; errorInfo: ErrorInfo } }
  | { type: "CLEAR_ERROR" }
  | { type: "INCREMENT_RETRY" }
  | { type: "RESET_RETRY" }
  | { type: "UPDATE_CONFIG"; payload: Partial<ErrorHandlingConfig> };
`,R=`import { ErrorDetails, ErrorHandlingConfig, ErrorStats } from "./types";
import { createErrorDetails, handleAsyncError } from "./utils";
import { useCallback, useEffect, useMemo, useReducer, useRef } from "react";

// 错误处理 Hook
export function useErrorHandling(config: ErrorHandlingConfig = {}) {
  const {
    enableLogging = true,
    enableReporting = false,
    maxRetries = 3,
    retryDelay = 1000,
    onError,
  } = config;

  const errorsRef = useRef<ErrorDetails[]>([]);
  const [, forceUpdate] = useReducer((x) => x + 1, 0);

  // 记录错误
  const logError = useCallback(
    (error: Error, componentStack?: string, context?: Record<string, any>) => {
      const errorDetails = createErrorDetails(error, componentStack, context);

      errorsRef.current.push(errorDetails);

      // 限制错误历史记录数量
      if (errorsRef.current.length > 100) {
        errorsRef.current = errorsRef.current.slice(-50);
      }

      if (enableLogging) {
        console.error("Error logged:", errorDetails);
      }

      if (enableReporting && onError) {
        onError(errorDetails);
      }

      forceUpdate();
      return errorDetails;
    },
    [enableLogging, enableReporting, onError]
  );

  // 清除错误
  const clearErrors = useCallback(() => {
    errorsRef.current = [];
    forceUpdate();
  }, []);

  // 清除特定错误
  const clearError = useCallback((errorId: string) => {
    errorsRef.current = errorsRef.current.filter(
      (error) => error.id !== errorId
    );
    forceUpdate();
  }, []);

  // 处理异步错误
  const handleAsync = useCallback(
    async <T>(
      asyncFn: () => Promise<T>,
      options: {
        context?: Record<string, any>;
        fallback?: T;
        retries?: number;
      } = {}
    ): Promise<T | undefined> => {
      try {
        return await handleAsyncError(asyncFn, {
          retries: options.retries ?? maxRetries,
          retryDelay,
          context: options.context,
          fallback: options.fallback,
        });
      } catch (error) {
        logError(error as Error, undefined, options.context);
        return options.fallback;
      }
    },
    [logError, maxRetries, retryDelay]
  );

  // 模拟异步错误
  const simulateAsyncError = useCallback(
    async (errorType: string = "generic") => {
      const errorMessages = {
        network: "Network request failed",
        timeout: "Request timeout",
        validation: "Data validation failed",
        generic: "Async operation failed",
      };

      await new Promise((resolve) => setTimeout(resolve, 1000));
      throw new Error(
        errorMessages[errorType as keyof typeof errorMessages] ||
          errorMessages.generic
      );
    },
    []
  );

  // 模拟网络错误
  const simulateNetworkError = useCallback(async () => {
    return handleAsync(() => simulateAsyncError("network"), {
      context: { operation: "network_request", timestamp: Date.now() },
      fallback: null,
    });
  }, [handleAsync, simulateAsyncError]);

  // 手动记录错误
  const recordError = useCallback(
    (message: string, context?: Record<string, any>) => {
      const error = new Error(message);
      return logError(error, undefined, context);
    },
    [logError]
  );

  // 计算错误统计
  const stats = useMemo((): ErrorStats => {
    const errors = errorsRef.current;
    const totalErrors = errors.length;

    const errorsByCategory = errors.reduce((acc, error) => {
      acc[error.category] = (acc[error.category] || 0) + 1;
      return acc;
    }, {} as Record<string, number>);

    const errorsBySeverity = errors.reduce((acc, error) => {
      acc[error.severity] = (acc[error.severity] || 0) + 1;
      return acc;
    }, {} as Record<string, number>);

    const recentErrors = errors.slice(-10);

    // 计算错误率（最近1小时内的错误数）
    const oneHourAgo = new Date(Date.now() - 60 * 60 * 1000);
    const recentErrorCount = errors.filter(
      (error) => error.timestamp > oneHourAgo
    ).length;
    const errorRate = recentErrorCount;

    return {
      totalErrors,
      errorsByCategory,
      errorsBySeverity,
      recentErrors,
      errorRate,
    };
  }, [errorsRef.current.length]);

  // 获取所有错误
  const getAllErrors = useCallback(() => {
    return [...errorsRef.current];
  }, []);

  return {
    logError,
    clearErrors,
    clearError,
    handleAsync,
    simulateAsyncError,
    simulateNetworkError,
    recordError,
    stats,
    getAllErrors,
    errors: errorsRef.current,
  };
}
`,C=`import { ErrorBoundaryState, ErrorBoundaryAction, ErrorDetails } from './types';\r
\r
// 错误边界 reducer\r
export function errorBoundaryReducer(state: ErrorBoundaryState, action: ErrorBoundaryAction): ErrorBoundaryState {\r
  switch (action.type) {\r
    case 'SET_ERROR':\r
      return {\r
        ...state,\r
        hasError: true,\r
        error: action.payload.error,\r
        errorInfo: action.payload.errorInfo,\r
        errorId: \`error_\${Date.now()}_\${Math.random().toString(36).substr(2, 9)}\`\r
      };\r
    case 'CLEAR_ERROR':\r
      return {\r
        ...state,\r
        hasError: false,\r
        error: null,\r
        errorInfo: null,\r
        errorId: null\r
      };\r
    case 'INCREMENT_RETRY':\r
      return {\r
        ...state,\r
        retryCount: state.retryCount + 1\r
      };\r
    case 'RESET_RETRY':\r
      return {\r
        ...state,\r
        retryCount: 0\r
      };\r
    case 'UPDATE_CONFIG':\r
      return {\r
        ...state,\r
        maxRetries: action.payload.maxRetries ?? state.maxRetries\r
      };\r
    default:\r
      return state;\r
  }\r
}\r
\r
// 生成唯一错误 ID\r
export const generateErrorId = (): string => {\r
  return \`error_\${Date.now()}_\${Math.random().toString(36).substr(2, 9)}\`;\r
};\r
\r
// 确定错误严重程度\r
export const determineErrorSeverity = (error: Error): 'low' | 'medium' | 'high' | 'critical' => {\r
  const message = error.message.toLowerCase();\r
  const stack = error.stack?.toLowerCase() || '';\r
\r
  // 严重错误\r
  if (message.includes('out of memory') || \r
      message.includes('maximum call stack') ||\r
      message.includes('script error') ||\r
      stack.includes('recursion')) {\r
    return 'critical';\r
  }\r
\r
  // 高优先级错误\r
  if (message.includes('network') ||\r
      message.includes('fetch') ||\r
      message.includes('timeout') ||\r
      message.includes('abort')) {\r
    return 'high';\r
  }\r
\r
  // 中等优先级错误\r
  if (message.includes('validation') ||\r
      message.includes('parse') ||\r
      message.includes('format')) {\r
    return 'medium';\r
  }\r
\r
  // 默认为低优先级\r
  return 'low';\r
};\r
\r
// 确定错误类别\r
export const determineErrorCategory = (error: Error): 'render' | 'async' | 'network' | 'validation' | 'unknown' => {\r
  const message = error.message.toLowerCase();\r
  const stack = error.stack?.toLowerCase() || '';\r
\r
  if (message.includes('render') || \r
      message.includes('component') ||\r
      stack.includes('react')) {\r
    return 'render';\r
  }\r
\r
  if (message.includes('network') ||\r
      message.includes('fetch') ||\r
      message.includes('xhr') ||\r
      message.includes('request')) {\r
    return 'network';\r
  }\r
\r
  if (message.includes('validation') ||\r
      message.includes('invalid') ||\r
      message.includes('required') ||\r
      message.includes('format')) {\r
    return 'validation';\r
  }\r
\r
  if (message.includes('promise') ||\r
      message.includes('async') ||\r
      message.includes('await') ||\r
      stack.includes('async')) {\r
    return 'async';\r
  }\r
\r
  return 'unknown';\r
};\r
\r
// 创建错误详情对象\r
export const createErrorDetails = (\r
  error: Error,\r
  componentStack?: string,\r
  context?: Record<string, any>\r
): ErrorDetails => {\r
  return {\r
    id: generateErrorId(),\r
    message: error.message,\r
    stack: error.stack,\r
    componentStack,\r
    timestamp: new Date(),\r
    severity: determineErrorSeverity(error),\r
    category: determineErrorCategory(error),\r
    context,\r
    userAgent: typeof navigator !== 'undefined' ? navigator.userAgent : undefined,\r
    url: typeof window !== 'undefined' ? window.location.href : undefined\r
  };\r
};\r
\r
// 延迟函数\r
export const delay = (ms: number): Promise<void> => {\r
  return new Promise(resolve => setTimeout(resolve, ms));\r
};\r
\r
// 高级异步错误处理\r
export const handleAsyncError = async <T>(\r
  asyncFn: () => Promise<T>,\r
  options: {\r
    retries?: number;\r
    retryDelay?: number;\r
    context?: Record<string, any>;\r
    fallback?: T;\r
  } = {}\r
): Promise<T | undefined> => {\r
  const { retries = 3, retryDelay = 1000, context, fallback } = options;\r
\r
  for (let attempt = 0; attempt <= retries; attempt++) {\r
    try {\r
      return await asyncFn();\r
    } catch (error) {\r
      console.error('Async error:', createErrorDetails(error as Error, undefined, { ...context, attempt }));\r
\r
      if (attempt === retries) {\r
        if (fallback !== undefined) return fallback;\r
        throw error;\r
      }\r
\r
      // 指数退避重试\r
      await delay(retryDelay * Math.pow(2, attempt));\r
    }\r
  }\r
};\r
\r
// 批量错误处理\r
export const handleBatchOperations = async (operations: Array<{\r
  fn: () => Promise<any>;\r
  options?: {\r
    retries?: number;\r
    retryDelay?: number;\r
    context?: Record<string, any>;\r
    fallback?: any;\r
  };\r
}>) => {\r
  const results = await Promise.allSettled(\r
    operations.map(op => handleAsyncError(op.fn, op.options))\r
  );\r
\r
  return results.map((result, index) => ({\r
    index,\r
    success: result.status === 'fulfilled',\r
    data: result.status === 'fulfilled' ? result.value : null,\r
    error: result.status === 'rejected' ? result.reason : null\r
  }));\r
};\r
\r
// 错误恢复策略\r
export const getRecoveryStrategy = (error: ErrorDetails): string => {\r
  const strategies = {\r
    network: '启用离线模式，使用缓存数据',\r
    validation: '显示友好的错误提示，引导用户修正',\r
    memory: '减少数据量，实现分页或虚拟滚动',\r
    async: '增加超时处理，实现重试机制',\r
    render: '检查组件 props 和 state，重置组件状态',\r
    unknown: '查看详细日志，联系技术支持'\r
  };\r
\r
  return strategies[error.category] || strategies.unknown;\r
};`,re=()=>e.jsx(M,{title:"错误边界与异常处理",description:"学习如何在 React 应用中优雅地处理错误，包括错误边界的使用、错误恢复策略和错误监控。",overview:[{title:"核心概念",items:["错误边界捕获","错误恢复机制","错误监控分析","异步错误处理"]},{title:"主要优势",items:["防止整个应用崩溃","提供错误恢复机制","收集错误信息","支持错误分类管理"]},{title:"适用场景",items:["生产环境错误处理","复杂应用错误监控","第三方组件错误隔离","异步操作错误处理"]},{title:"注意事项",items:["只能捕获子组件错误","不能捕获事件处理器错误","需要合理设计恢复策略","错误信息需谨慎处理"]}],examples:[{title:"基础错误边界演示",component:e.jsx(G,{}),description:"演示基本的错误边界功能，包括错误捕获、显示和恢复。",observationPoints:["点击'触发渲染错误'按钮时，错误边界会捕获错误并显示友好的错误界面","点击'重试'按钮可以尝试重新渲染组件","点击'重置'按钮可以清除错误状态","异步错误测试展示了如何处理 Promise 和网络请求中的错误"],keyPoints:["错误边界使用 componentDidCatch 生命周期方法捕获错误","getDerivedStateFromError 用于更新组件状态以显示错误 UI","错误信息包含错误堆栈、组件堆栈等详细信息","支持错误重试和重置功能"],commonTraps:["错误边界不能捕获事件处理器中的错误","异步代码中的错误需要手动处理","错误边界不能捕获自身的错误"],solutions:["使用 try-catch 处理事件处理器中的错误","使用 Promise.catch() 或 async/await 处理异步错误","在父组件中包装错误边界"],importantTips:["错误边界应该放置在组件树的适当位置，既不能太高（影响整个应用）也不能太低（无法捕获足够的错误）","错误恢复策略应该考虑错误的类型和严重程度","生产环境中应该避免显示详细的错误堆栈信息"],preCode:[{title:"types",code:k},{title:"utils",code:C},{title:"ErrorBoundary",code:j},{title:"useErrorHandling",code:R}],codeExample:{title:"基础错误边界演示",code:K}},{title:"高级错误处理演示",component:e.jsx(Y,{}),description:"演示高级错误处理功能，包括错误分类、恢复策略和错误统计。",observationPoints:["不同类型的错误会被自动分类（内存、网络、验证等）","系统会根据错误类型和严重程度提供相应的恢复建议","错误统计图表显示了错误的分布情况","支持批量操作的错误处理和部分成功的情况"],keyPoints:["错误分类有助于快速定位问题类型","错误严重程度影响处理策略和用户体验","错误统计帮助识别应用的薄弱环节","恢复策略应该根据错误类型动态调整"],commonTraps:["过度分类导致处理逻辑复杂","错误恢复策略不当导致无限重试","错误统计数据过多影响性能"],solutions:["使用合理的错误分类体系","设置重试次数和时间限制","定期清理过期的错误统计数据"],importantTips:["错误分类应该基于业务需求和技术特点","恢复策略应该考虑用户体验和系统稳定性","错误监控数据应该定期分析和优化"],preCode:[{title:"types",code:k},{title:"utils",code:C},{title:"ErrorBoundary",code:j},{title:"useErrorHandling",code:R}],codeExample:{title:"高级错误处理演示",code:W}}],tutorial:{concepts:["错误边界是 React 16 引入的新特性，用于捕获组件树中的 JavaScript 错误","错误边界只能捕获子组件的错误，不能捕获自身、事件处理器、异步代码中的错误","使用 componentDidCatch 和 getDerivedStateFromError 生命周期方法实现错误边界","错误处理应该包括错误捕获、错误显示、错误恢复和错误监控四个方面","异步错误需要使用 Promise.catch() 或 try-catch 在 async 函数中处理"],steps:["创建错误边界类组件，实现 componentDidCatch 和 getDerivedStateFromError 方法","在错误边界中定义错误状态和错误处理逻辑","设计错误 UI，提供用户友好的错误信息和操作选项","实现错误恢复机制，如重试、重置、降级等","添加错误监控和统计功能，收集错误信息用于分析","处理异步错误，使用自定义 Hook 或工具函数","在适当的组件层级包装错误边界，平衡错误隔离和用户体验"],tips:["错误边界应该放置在组件树的关键节点，如路由组件、功能模块等","错误信息应该包含足够的上下文信息，但避免暴露敏感数据","错误恢复策略应该考虑错误的类型、频率和影响范围","使用错误监控服务（如 Sentry）可以更好地跟踪和分析错误","开发环境和生产环境的错误处理策略应该有所不同"]},interview:{questions:[{question:"什么是 React 错误边界？它能捕获哪些类型的错误？",answer:"错误边界是 React 16 引入的特性，是一种 React 组件，可以捕获其子组件树中任何位置的 JavaScript 错误，并记录这些错误，同时显示降级 UI。错误边界可以捕获：1) 渲染期间的错误；2) 生命周期方法中的错误；3) 子组件构造函数中的错误。但不能捕获：1) 事件处理器中的错误；2) 异步代码中的错误；3) 服务端渲染中的错误；4) 错误边界自身的错误。"},{question:"如何实现一个错误边界组件？",answer:"实现错误边界需要：1) 创建类组件（函数组件无法实现错误边界）；2) 实现 getDerivedStateFromError 静态方法，用于更新 state 以显示降级 UI；3) 实现 componentDidCatch 生命周期方法，用于记录错误信息；4) 在 render 方法中根据错误状态渲染不同的 UI；5) 可选地实现错误恢复机制，如重试按钮。"},{question:"如何处理异步操作中的错误？",answer:"异步错误不能被错误边界捕获，需要：1) 在 Promise 中使用 .catch() 方法；2) 在 async/await 中使用 try-catch；3) 创建自定义 Hook 来统一处理异步错误；4) 使用全局错误处理器（如 window.onerror）；5) 将异步错误转换为组件状态，然后在渲染时抛出以被错误边界捕获。"},{question:"错误边界的最佳实践有哪些？",answer:"最佳实践包括：1) 在组件树的适当层级放置错误边界，平衡错误隔离和用户体验；2) 提供有意义的错误信息和恢复选项；3) 避免在生产环境显示详细的错误堆栈；4) 实现错误监控和报告机制；5) 区分不同类型的错误并采用相应的处理策略；6) 设置合理的重试机制，避免无限重试；7) 在开发环境保留详细错误信息以便调试。"}],keyPoints:["错误边界是 React 应用稳定性的重要保障","只有类组件可以实现错误边界，函数组件不行","错误边界不能捕获所有类型的错误，需要配合其他错误处理机制","错误恢复策略应该考虑用户体验和系统稳定性","错误监控和分析是持续改进应用质量的关键"]},bestPractices:{dos:["在关键组件层级设置错误边界，如路由、功能模块等","提供用户友好的错误信息和恢复选项","实现错误分类和优先级管理","使用错误监控服务跟踪和分析错误","区分开发环境和生产环境的错误处理策略","为异步操作实现专门的错误处理机制","定期分析错误数据，优化应用质量"],donts:["不要在生产环境显示详细的错误堆栈信息","不要依赖错误边界捕获所有类型的错误","不要设置过于频繁的错误重试机制","不要忽略错误的上下文信息和用户操作","不要在错误边界中执行可能出错的操作","不要将错误边界设置得过于细粒度","不要忘记处理异步操作中的错误"],patterns:["错误边界 + 降级 UI：提供备用界面保证应用可用性","错误分类 + 恢复策略：根据错误类型采用不同的处理方式","错误监控 + 分析报告：持续改进应用质量","异步错误处理 + 状态管理：统一管理各种错误状态","错误重试 + 指数退避：智能的错误恢复机制","错误隔离 + 功能降级：保证核心功能的可用性","错误上报 + 用户反馈：结合技术监控和用户体验"]}});export{re as default};
