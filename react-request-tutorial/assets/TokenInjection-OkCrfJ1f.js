var S=Object.defineProperty;var R=(n,s,t)=>s in n?S(n,s,{enumerable:!0,configurable:!0,writable:!0,value:t}):n[s]=t;var g=(n,s,t)=>R(n,typeof s!="symbol"?s+"":s,t);import{j as e,r as a}from"./index-Cnne2xOM.js";import{C as I}from"./ComponentTemplate-iqsAHbUA.js";class w{constructor(){g(this,"token",null)}async getToken(){return this.token}async setToken(s){this.token=s}async removeToken(){this.token=null}}class A{constructor(s="app_token"){g(this,"key");this.key=s}async getToken(){try{const s=localStorage.getItem(this.key);return s?JSON.parse(s):null}catch{return null}}async setToken(s){localStorage.setItem(this.key,JSON.stringify(s))}async removeToken(){localStorage.removeItem(this.key)}}class M{constructor(s=3e5){g(this,"refreshThreshold");this.refreshThreshold=s}shouldRefresh(s){const t=Date.now();return s.expiresAt-t<=this.refreshThreshold}async refreshToken(s){const t=await fetch("/api/auth/refresh",{method:"POST",headers:{"Content-Type":"application/json",Authorization:`Bearer ${s.refreshToken}`}});if(!t.ok)throw new Error("Token refresh failed");const i=await t.json();return{accessToken:i.access_token,refreshToken:i.refresh_token||s.refreshToken,expiresAt:Date.now()+i.expires_in*1e3,tokenType:i.token_type||"Bearer",scope:i.scope?i.scope.split(" "):s.scope}}}const _={title:"存储策略比较实现",language:"typescript",code:`// 内存存储实现
class MemoryTokenStorage implements TokenStorage {
  private token: TokenInfo | null = null;

  async getToken(): Promise<TokenInfo | null> {
    return this.token;
  }

  async setToken(token: TokenInfo): Promise<void> {
    this.token = token;
  }

  async removeToken(): Promise<void> {
    this.token = null;
  }
}

// LocalStorage存储实现
class LocalStorageTokenStorage implements TokenStorage {
  private key: string;

  constructor(key: string = "app_token") {
    this.key = key;
  }

  async getToken(): Promise<TokenInfo | null> {
    try {
      const tokenStr = localStorage.getItem(this.key);
      return tokenStr ? JSON.parse(tokenStr) : null;
    } catch {
      return null;
    }
  }

  async setToken(token: TokenInfo): Promise<void> {
    localStorage.setItem(this.key, JSON.stringify(token));
  }

  async removeToken(): Promise<void> {
    localStorage.removeItem(this.key);
  }
}

// 性能测试比较
const memoryManager = new TokenInjectionManager(
  new MemoryTokenStorage(),
  new MockRefreshStrategy()
);

const localStorageManager = new TokenInjectionManager(
  new LocalStorageTokenStorage("demo_token"),
  new MockRefreshStrategy()
);

// 测试Token操作性能
const testToken: TokenInfo = {
  accessToken: "test_access_token",
  refreshToken: "test_refresh_token",
  expiresAt: Date.now() + 3600000,
  tokenType: "Bearer",
  scope: ["read", "write"]
};

// 性能测试
const startTime = performance.now();
await memoryManager.setToken(testToken);
const memoryTime = performance.now() - startTime;

const startTime2 = performance.now();
await localStorageManager.setToken(testToken);
const localStorageTime = performance.now() - startTime2;

console.log('Memory storage time:', memoryTime);
console.log('LocalStorage time:', localStorageTime);`,highlights:[1,8,12,16,22,28,35,39,44,50,56,62,68]},P={title:"自动刷新机制实现",language:"typescript",code:`// 创建带自动刷新的Token管理器
const tokenManager = new TokenInjectionManager(
  new LocalStorageTokenStorage('auto_refresh_token'),
  new MockRefreshStrategy(30000) // 30秒刷新阈值
);

// 设置短期Token用于演示
const shortLivedToken: TokenInfo = {
  accessToken: 'demo_access_token',
  refreshToken: 'demo_refresh_token',
  expiresAt: Date.now() + 30000, // 30秒后过期
  tokenType: 'Bearer',
  scope: ['read', 'write']
};

await tokenManager.setToken(shortLivedToken);

// 启动自动刷新（每5秒检查一次）
tokenManager.startAutoRefresh(5000);

// 监听Token变化
const unsubscribe = tokenManager.addListener((newToken) => {
  if (newToken) {
    console.log('Token refreshed:', {
      accessToken: newToken.accessToken,
      expiresAt: new Date(newToken.expiresAt).toLocaleTimeString(),
      remainingTime: Math.max(0, newToken.expiresAt - Date.now())
    });
  } else {
    console.log('Token removed or refresh failed');
  }
});

// 模拟长时间运行的应用
setInterval(async () => {
  const currentToken = await tokenManager.getToken();
  if (currentToken) {
    const remainingTime = Math.max(0, currentToken.expiresAt - Date.now());
    console.log('Current token remaining time:', remainingTime + 'ms');

    // 模拟API请求
    const request = {
      url: '/api/data',
      method: 'GET',
      headers: { 'Content-Type': 'application/json' }
    };

    const authenticatedRequest = await tokenManager.injectToken(request);
    console.log('Request with token:', authenticatedRequest.headers.Authorization);
  }
}, 10000); // 每10秒执行一次

// 清理资源
// unsubscribe();
// tokenManager.stopAutoRefresh();`,highlights:[1,8,16,19,22,34,37,41,47]};class y{constructor(s=3e4){g(this,"refreshThreshold");this.refreshThreshold=s}shouldRefresh(s){const t=Date.now();return s.expiresAt-t<=this.refreshThreshold}async refreshToken(s){return await new Promise(t=>setTimeout(t,1e3)),{accessToken:`new_access_${Date.now()}`,refreshToken:`new_refresh_${Date.now()}`,expiresAt:Date.now()+6e4,tokenType:"Bearer",scope:s.scope}}}class j{constructor(s=new w,t=new M){g(this,"storage");g(this,"refreshStrategy");g(this,"isRefreshing",!1);g(this,"refreshPromise",null);g(this,"listeners",[]);g(this,"autoRefreshInterval",null);this.storage=s,this.refreshStrategy=t}async getToken(){const s=await this.storage.getToken();if(!s)return null;if(this.refreshStrategy.shouldRefresh(s))try{return await this.refreshTokenIfNeeded(s)}catch(t){return console.error("Token refresh failed:",t),await this.removeToken(),null}return s}async setToken(s){await this.storage.setToken(s),this.notifyListeners(s)}async removeToken(){await this.storage.removeToken(),this.notifyListeners(null)}async refreshTokenIfNeeded(s){if(this.isRefreshing&&this.refreshPromise)return this.refreshPromise;this.isRefreshing=!0,this.refreshPromise=this.refreshStrategy.refreshToken(s);try{const t=await this.refreshPromise;return await this.setToken(t),t}finally{this.isRefreshing=!1,this.refreshPromise=null}}async injectToken(s){const t=await this.getToken(),i={...s.headers};return t&&(i.Authorization=`${t.tokenType} ${t.accessToken}`),{...s,headers:i}}async isTokenValid(){const s=await this.storage.getToken();return s?Date.now()<s.expiresAt:!1}startAutoRefresh(s=6e4){this.stopAutoRefresh(),this.autoRefreshInterval=setInterval(async()=>{const t=await this.storage.getToken();if(t&&this.refreshStrategy.shouldRefresh(t))try{await this.refreshTokenIfNeeded(t)}catch(i){console.error("Auto refresh failed:",i)}},s)}stopAutoRefresh(){this.autoRefreshInterval&&(clearInterval(this.autoRefreshInterval),this.autoRefreshInterval=null)}addListener(s){return this.listeners.push(s),()=>{const t=this.listeners.indexOf(s);t>-1&&this.listeners.splice(t,1)}}notifyListeners(s){this.listeners.forEach(t=>t(s))}getStatus(){return{hasToken:this.storage.getToken()!==null,isRefreshing:this.isRefreshing,autoRefreshEnabled:this.autoRefreshInterval!==null}}}const L=()=>{const[n]=a.useState(()=>new j(new w,new y)),[s,t]=a.useState(null),[i]=a.useState({url:"/api/users",method:"GET",headers:{"Content-Type":"application/json"}}),[h,T]=a.useState(null),[m,r]=a.useState(n.getStatus()),[x,u]=a.useState([]),c=a.useCallback(o=>{u(d=>[...d.slice(-9),`${new Date().toLocaleTimeString()}: ${o}`])},[]);a.useEffect(()=>n.addListener(d=>{t(d),c(d?"Token updated":"Token removed")}),[n,c]),a.useEffect(()=>{const o=setInterval(()=>{r(n.getStatus())},1e3);return()=>clearInterval(o)},[n]);const p=async()=>{const o={accessToken:`access_${Date.now()}`,refreshToken:`refresh_${Date.now()}`,expiresAt:Date.now()+6e4,tokenType:"Bearer",scope:["read","write"]};await n.setToken(o),c("Token set successfully")},l=async()=>{await n.removeToken(),c("Token removed")},k=async()=>{try{const o=await n.injectToken(i);T(o),c("Token injected to request")}catch(o){c(`Injection failed: ${o}`)}},b=()=>{n.startAutoRefresh(1e4),c("Auto refresh started")},f=()=>{n.stopAutoRefresh(),c("Auto refresh stopped")},v=o=>new Date(o).toLocaleString();return e.jsx("div",{className:"space-y-6",children:e.jsxs("div",{className:"bg-white p-6 rounded-lg border",children:[e.jsx("h3",{className:"text-lg font-semibold mb-4",children:"Token 管理"}),e.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-6",children:[e.jsxs("div",{children:[e.jsx("h4",{className:"font-medium text-gray-900 mb-3",children:"当前Token"}),s?e.jsxs("div",{className:"bg-gray-50 p-4 rounded-md space-y-2",children:[e.jsxs("div",{className:"text-sm",children:[e.jsx("strong",{children:"Access Token:"}),e.jsxs("code",{className:"block bg-gray-200 p-1 rounded text-xs mt-1",children:[s.accessToken.substring(0,20),"..."]})]}),e.jsxs("div",{className:"text-sm",children:[e.jsx("strong",{children:"过期时间:"})," ",v(s.expiresAt)]}),e.jsxs("div",{className:"text-sm",children:[e.jsx("strong",{children:"类型:"})," ",s.tokenType]}),s.scope&&e.jsxs("div",{className:"text-sm",children:[e.jsx("strong",{children:"权限:"})," ",s.scope.join(", ")]})]}):e.jsx("div",{className:"bg-gray-50 p-4 rounded-md text-gray-500",children:"暂无Token"})]}),e.jsxs("div",{children:[e.jsx("h4",{className:"font-medium text-gray-900 mb-3",children:"管理器状态"}),e.jsxs("div",{className:"space-y-2",children:[e.jsxs("div",{className:"flex items-center justify-between",children:[e.jsx("span",{className:"text-sm text-gray-600",children:"Token状态:"}),e.jsx("span",{className:`px-2 py-1 text-xs rounded-full ${m.hasToken?"bg-green-100 text-green-800":"bg-gray-100 text-gray-800"}`,children:m.hasToken?"已设置":"未设置"})]}),e.jsxs("div",{className:"flex items-center justify-between",children:[e.jsx("span",{className:"text-sm text-gray-600",children:"刷新状态:"}),e.jsx("span",{className:`px-2 py-1 text-xs rounded-full ${m.isRefreshing?"bg-yellow-100 text-yellow-800":"bg-gray-100 text-gray-800"}`,children:m.isRefreshing?"刷新中":"空闲"})]}),e.jsxs("div",{className:"flex items-center justify-between",children:[e.jsx("span",{className:"text-sm text-gray-600",children:"自动刷新:"}),e.jsx("span",{className:`px-2 py-1 text-xs rounded-full ${m.autoRefreshEnabled?"bg-blue-100 text-blue-800":"bg-gray-100 text-gray-800"}`,children:m.autoRefreshEnabled?"已启用":"已禁用"})]})]})]})]}),e.jsxs("div",{className:"flex flex-wrap gap-2 mt-6",children:[e.jsx("button",{onClick:p,className:"px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500",children:"设置Token"}),e.jsx("button",{onClick:l,disabled:!s,className:"px-4 py-2 bg-red-500 text-white rounded-md hover:bg-red-600 focus:outline-none focus:ring-2 focus:ring-red-500 disabled:bg-gray-300 disabled:cursor-not-allowed",children:"移除Token"}),e.jsx("button",{onClick:k,className:"px-4 py-2 bg-green-500 text-white rounded-md hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-green-500",children:"注入Token"}),e.jsx("button",{onClick:b,disabled:m.autoRefreshEnabled,className:"px-4 py-2 bg-purple-500 text-white rounded-md hover:bg-purple-600 focus:outline-none focus:ring-2 focus:ring-purple-500 disabled:bg-gray-300 disabled:cursor-not-allowed",children:"启动自动刷新"}),e.jsx("button",{onClick:f,disabled:!m.autoRefreshEnabled,className:"px-4 py-2 bg-orange-500 text-white rounded-md hover:bg-orange-600 focus:outline-none focus:ring-2 focus:ring-orange-500 disabled:bg-gray-300 disabled:cursor-not-allowed",children:"停止自动刷新"})]}),h&&e.jsxs("div",{className:"mt-6",children:[e.jsx("h4",{className:"font-medium text-gray-900 mb-3",children:"注入结果"}),e.jsx("div",{className:"bg-gray-50 p-4 rounded-md",children:e.jsxs("div",{className:"text-sm space-y-2",children:[e.jsxs("div",{children:[e.jsx("strong",{children:"URL:"})," ",h.url]}),e.jsxs("div",{children:[e.jsx("strong",{children:"Method:"})," ",h.method]}),e.jsx("div",{children:e.jsx("strong",{children:"Headers:"})}),e.jsx("pre",{className:"bg-gray-200 p-2 rounded text-xs overflow-x-auto",children:JSON.stringify(h.headers,null,2)})]})})]}),e.jsxs("div",{className:"mt-6",children:[e.jsx("h4",{className:"font-medium text-gray-900 mb-3",children:"操作日志"}),e.jsx("div",{className:"bg-gray-50 p-4 rounded-md max-h-40 overflow-y-auto",children:x.length>0?e.jsx("div",{className:"space-y-1",children:x.map((o,d)=>e.jsx("div",{className:"text-xs text-gray-600",children:o},d))}):e.jsx("div",{className:"text-sm text-gray-500",children:"暂无日志"})})]})]})})},D=()=>{const[n]=a.useState(()=>new j(new w,new y)),[s]=a.useState(()=>new j(new A("demo_token"),new y)),[t,i]=a.useState([]),[h,T]=a.useState(!1),m=async()=>{T(!0);const r=[],x={accessToken:"test_access_token",refreshToken:"test_refresh_token",expiresAt:Date.now()+36e5,tokenType:"Bearer",scope:["read","write"]},u=[{name:"Memory",manager:n},{name:"LocalStorage",manager:s}];for(const{name:c,manager:p}of u){try{const l=performance.now();await p.setToken(x);const k=performance.now();r.push({storage:c,operation:"Set Token",time:k-l,success:!0})}catch(l){r.push({storage:c,operation:"Set Token",time:0,success:!1,error:String(l)})}try{const l=performance.now();await p.getToken();const k=performance.now();r.push({storage:c,operation:"Get Token",time:k-l,success:!0})}catch(l){r.push({storage:c,operation:"Get Token",time:0,success:!1,error:String(l)})}try{const l=performance.now();await p.removeToken();const k=performance.now();r.push({storage:c,operation:"Remove Token",time:k-l,success:!0})}catch(l){r.push({storage:c,operation:"Remove Token",time:0,success:!1,error:String(l)})}await new Promise(l=>setTimeout(l,100))}i(r),T(!1)};return e.jsx("div",{className:"space-y-6",children:e.jsxs("div",{className:"bg-white p-6 rounded-lg border",children:[e.jsx("h3",{className:"text-lg font-semibold mb-4",children:"存储策略比较"}),e.jsxs("div",{className:"mb-4",children:[e.jsx("p",{className:"text-gray-600 mb-4",children:"比较不同存储策略的性能和特点。"}),e.jsx("button",{onClick:m,disabled:h,className:"px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 disabled:bg-gray-300 disabled:cursor-not-allowed",children:h?"测试中...":"开始测试"})]}),t.length>0&&e.jsx("div",{className:"overflow-x-auto",children:e.jsxs("table",{className:"min-w-full divide-y divide-gray-200",children:[e.jsx("thead",{className:"bg-gray-50",children:e.jsxs("tr",{children:[e.jsx("th",{className:"px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider",children:"存储类型"}),e.jsx("th",{className:"px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider",children:"操作"}),e.jsx("th",{className:"px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider",children:"耗时 (ms)"}),e.jsx("th",{className:"px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider",children:"结果"})]})}),e.jsx("tbody",{className:"bg-white divide-y divide-gray-200",children:t.map((r,x)=>e.jsxs("tr",{children:[e.jsx("td",{className:"px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900",children:r.storage}),e.jsx("td",{className:"px-6 py-4 whitespace-nowrap text-sm text-gray-500",children:r.operation}),e.jsx("td",{className:"px-6 py-4 whitespace-nowrap text-sm text-gray-500",children:r.time.toFixed(2)}),e.jsxs("td",{className:"px-6 py-4 whitespace-nowrap",children:[e.jsx("span",{className:`inline-flex px-2 py-1 text-xs font-semibold rounded-full ${r.success?"bg-green-100 text-green-800":"bg-red-100 text-red-800"}`,children:r.success?"成功":"失败"}),r.error&&e.jsx("div",{className:"text-xs text-red-600 mt-1",children:r.error})]})]},x))})]})}),e.jsxs("div",{className:"mt-6 grid grid-cols-1 md:grid-cols-2 gap-4",children:[e.jsxs("div",{className:"bg-blue-50 p-4 rounded-lg",children:[e.jsx("h4",{className:"font-medium text-blue-900 mb-2",children:"内存存储"}),e.jsxs("ul",{className:"text-sm text-blue-800 space-y-1",children:[e.jsx("li",{children:"• 速度最快"}),e.jsx("li",{children:"• 页面刷新后丢失"}),e.jsx("li",{children:"• 适合临时存储"}),e.jsx("li",{children:"• 无持久化"})]})]}),e.jsxs("div",{className:"bg-green-50 p-4 rounded-lg",children:[e.jsx("h4",{className:"font-medium text-green-900 mb-2",children:"LocalStorage"}),e.jsxs("ul",{className:"text-sm text-green-800 space-y-1",children:[e.jsx("li",{children:"• 持久化存储"}),e.jsx("li",{children:"• 跨页面共享"}),e.jsx("li",{children:"• 有存储限制"}),e.jsx("li",{children:"• 适合长期存储"})]})]})]})]})})},C=()=>{const[n]=a.useState(()=>new j(new w,new y(15e3))),[s,t]=a.useState(null),[i,h]=a.useState(0),[T,m]=a.useState([]),[r,x]=a.useState(!1),u=a.useCallback(o=>{m(d=>[...d.slice(-9),`${new Date().toLocaleTimeString()}: ${o}`])},[]);a.useEffect(()=>n.addListener(d=>{t(d),d&&(h(N=>N+1),u("Token refreshed automatically"))}),[n,u]);const c=async()=>{const o={accessToken:`initial_${Date.now()}`,refreshToken:`refresh_${Date.now()}`,expiresAt:Date.now()+3e4,tokenType:"Bearer",scope:["read","write"]};await n.setToken(o),h(0),u("Initial token set (expires in 30s)")},p=()=>{n.startAutoRefresh(5e3),x(!0),u("Auto refresh started (check every 5s)")},l=()=>{n.stopAutoRefresh(),x(!1),u("Auto refresh stopped")},k=()=>s?Math.max(0,s.expiresAt-Date.now()):0,b=o=>`${Math.floor(o/1e3)}秒`,[f,v]=a.useState(0);return a.useEffect(()=>{const o=setInterval(()=>{v(k())},1e3);return()=>clearInterval(o)},[s]),e.jsx("div",{className:"space-y-6",children:e.jsxs("div",{className:"bg-white p-6 rounded-lg border",children:[e.jsx("h3",{className:"text-lg font-semibold mb-4",children:"自动刷新演示"}),e.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-6",children:[e.jsxs("div",{children:[e.jsx("h4",{className:"font-medium text-gray-900 mb-3",children:"Token 状态"}),s?e.jsxs("div",{className:"bg-gray-50 p-4 rounded-md space-y-2",children:[e.jsxs("div",{className:"text-sm",children:[e.jsx("strong",{children:"Access Token:"}),e.jsx("code",{className:"block bg-gray-200 p-1 rounded text-xs mt-1",children:s.accessToken})]}),e.jsxs("div",{className:"text-sm",children:[e.jsx("strong",{children:"剩余时间:"}),e.jsx("span",{className:`ml-2 px-2 py-1 rounded text-xs ${f>15e3?"bg-green-100 text-green-800":f>5e3?"bg-yellow-100 text-yellow-800":"bg-red-100 text-red-800"}`,children:b(f)})]}),e.jsxs("div",{className:"text-sm",children:[e.jsx("strong",{children:"刷新次数:"})," ",i]})]}):e.jsx("div",{className:"bg-gray-50 p-4 rounded-md text-gray-500",children:"暂无Token"})]}),e.jsxs("div",{children:[e.jsx("h4",{className:"font-medium text-gray-900 mb-3",children:"自动刷新状态"}),e.jsxs("div",{className:"bg-gray-50 p-4 rounded-md space-y-2",children:[e.jsxs("div",{className:"flex items-center justify-between",children:[e.jsx("span",{className:"text-sm text-gray-600",children:"状态:"}),e.jsx("span",{className:`px-2 py-1 text-xs rounded-full ${r?"bg-green-100 text-green-800":"bg-gray-100 text-gray-800"}`,children:r?"已启用":"已禁用"})]}),e.jsxs("div",{className:"text-sm text-gray-600",children:[e.jsx("strong",{children:"检查间隔:"})," 5秒"]}),e.jsxs("div",{className:"text-sm text-gray-600",children:[e.jsx("strong",{children:"刷新阈值:"})," 15秒"]})]})]})]}),e.jsxs("div",{className:"flex flex-wrap gap-2 mt-6",children:[e.jsx("button",{onClick:c,className:"px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500",children:"设置初始Token"}),e.jsx("button",{onClick:p,disabled:r,className:"px-4 py-2 bg-green-500 text-white rounded-md hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-green-500 disabled:bg-gray-300 disabled:cursor-not-allowed",children:"启动自动刷新"}),e.jsx("button",{onClick:l,disabled:!r,className:"px-4 py-2 bg-red-500 text-white rounded-md hover:bg-red-600 focus:outline-none focus:ring-2 focus:ring-red-500 disabled:bg-gray-300 disabled:cursor-not-allowed",children:"停止自动刷新"})]}),e.jsxs("div",{className:"mt-6",children:[e.jsx("h4",{className:"font-medium text-gray-900 mb-3",children:"操作日志"}),e.jsx("div",{className:"bg-gray-50 p-4 rounded-md max-h-40 overflow-y-auto",children:T.length>0?e.jsx("div",{className:"space-y-1",children:T.map((o,d)=>e.jsx("div",{className:"text-xs text-gray-600",children:o},d))}):e.jsx("div",{className:"text-sm text-gray-500",children:"暂无日志"})})]}),e.jsxs("div",{className:"mt-6 bg-yellow-50 p-4 rounded-lg",children:[e.jsx("h4",{className:"font-medium text-yellow-900 mb-2",children:"演示说明"}),e.jsxs("ul",{className:"text-sm text-yellow-800 space-y-1",children:[e.jsx("li",{children:"• Token设置为30秒后过期"}),e.jsx("li",{children:"• 自动刷新每5秒检查一次"}),e.jsx("li",{children:"• 当剩余时间少于15秒时触发刷新"}),e.jsx("li",{children:"• 观察Token的自动更新过程"})]})]})]})})},E={title:"TokenInjection 实现",language:"typescript",code:`// 创建Token注入管理器
const tokenManager = new TokenInjectionManager(
  new LocalStorageTokenStorage('app_token'),
  new TimeBasedRefreshStrategy(300000) // 5分钟刷新阈值
);

// 设置Token
const token: TokenInfo = {
  accessToken: 'your_access_token',
  refreshToken: 'your_refresh_token',
  expiresAt: Date.now() + 3600000, // 1小时后过期
  tokenType: 'Bearer',
  scope: ['read', 'write']
};

await tokenManager.setToken(token);

// 为请求注入Token
const request = {
  url: '/api/users',
  method: 'GET',
  headers: { 'Content-Type': 'application/json' }
};

const authenticatedRequest = await tokenManager.injectToken(request);
console.log(authenticatedRequest);
// 输出包含 Authorization 头部的请求

// 启动自动刷新
tokenManager.startAutoRefresh(60000); // 每分钟检查一次

// 监听Token变化
const unsubscribe = tokenManager.addListener((newToken) => {
  if (newToken) {
    console.log('Token updated:', newToken.accessToken);
  } else {
    console.log('Token removed');
  }
});

// 自定义刷新策略
class CustomRefreshStrategy implements RefreshStrategy {
  shouldRefresh(token: TokenInfo): boolean {
    // 自定义刷新逻辑
    return Date.now() > token.expiresAt - 600000; // 10分钟前刷新
  }

  async refreshToken(token: TokenInfo): Promise<TokenInfo> {
    // 调用刷新API
    const response = await fetch('/api/auth/refresh', {
      method: 'POST',
      headers: {
        'Authorization': \`Bearer \${token.refreshToken}\`
      }
    });

    const data = await response.json();
    return {
      accessToken: data.access_token,
      refreshToken: data.refresh_token,
      expiresAt: Date.now() + data.expires_in * 1000,
      tokenType: 'Bearer'
    };
  }
}`,highlights:[1,7,15,23,29,33,39]},O=()=>{const n=e.jsxs("div",{className:"space-y-4",children:[e.jsxs("div",{className:"bg-blue-50 p-6 rounded-lg",children:[e.jsx("h3",{className:"text-lg font-semibold text-blue-900 mb-2",children:"核心概念"}),e.jsxs("ul",{className:"space-y-2 text-blue-800",children:[e.jsxs("li",{children:["• ",e.jsx("strong",{children:"自动注入"}),"：为每个请求自动添加认证Token"]}),e.jsxs("li",{children:["• ",e.jsx("strong",{children:"智能刷新"}),"：在Token过期前自动刷新"]}),e.jsxs("li",{children:["• ",e.jsx("strong",{children:"存储管理"}),"：支持多种存储策略（内存、本地存储等）"]}),e.jsxs("li",{children:["• ",e.jsx("strong",{children:"无感知续期"}),"：用户无感知的Token续期机制"]})]})]}),e.jsxs("div",{className:"bg-green-50 p-6 rounded-lg",children:[e.jsx("h3",{className:"text-lg font-semibold text-green-900 mb-2",children:"主要优势"}),e.jsxs("ul",{className:"space-y-2 text-green-800",children:[e.jsxs("li",{children:["• ",e.jsx("strong",{children:"自动化管理"}),"：减少手动Token管理的复杂性"]}),e.jsxs("li",{children:["• ",e.jsx("strong",{children:"用户体验"}),"：避免因Token过期导致的登录中断"]}),e.jsxs("li",{children:["• ",e.jsx("strong",{children:"安全性"}),"：及时刷新Token降低安全风险"]}),e.jsxs("li",{children:["• ",e.jsx("strong",{children:"灵活配置"}),"：支持多种刷新策略和存储方式"]})]})]}),e.jsxs("div",{className:"bg-yellow-50 p-6 rounded-lg",children:[e.jsx("h3",{className:"text-lg font-semibold text-yellow-900 mb-2",children:"适用场景"}),e.jsxs("ul",{className:"space-y-2 text-yellow-800",children:[e.jsxs("li",{children:["• ",e.jsx("strong",{children:"SPA应用"}),"：单页应用的Token管理"]}),e.jsxs("li",{children:["• ",e.jsx("strong",{children:"移动应用"}),"：移动端的认证Token管理"]}),e.jsxs("li",{children:["• ",e.jsx("strong",{children:"微服务"}),"：服务间的Token传递和刷新"]}),e.jsxs("li",{children:["• ",e.jsx("strong",{children:"长时间会话"}),"：需要长时间保持登录状态的应用"]})]})]}),e.jsxs("div",{className:"bg-red-50 p-6 rounded-lg",children:[e.jsx("h3",{className:"text-lg font-semibold text-red-900 mb-2",children:"注意事项"}),e.jsxs("ul",{className:"space-y-2 text-red-800",children:[e.jsxs("li",{children:["• ",e.jsx("strong",{children:"安全存储"}),"：确保Token的安全存储和传输"]}),e.jsxs("li",{children:["• ",e.jsx("strong",{children:"刷新时机"}),"：合理设置Token刷新的时机"]}),e.jsxs("li",{children:["• ",e.jsx("strong",{children:"错误处理"}),"：处理Token刷新失败的情况"]}),e.jsxs("li",{children:["• ",e.jsx("strong",{children:"并发控制"}),"：避免多个请求同时触发Token刷新"]})]})]})]}),s=[{title:"基础Token管理",component:e.jsx(L,{}),description:"演示Token的基本管理功能，包括设置、获取、注入和自动刷新。",observationPoints:["观察Token的设置和获取过程","注意Token注入到请求头部的方式","查看自动刷新的启动和停止效果","体验Token状态的实时更新"],keyPoints:["TokenInjectionManager 提供完整的Token管理功能","支持多种存储策略的灵活切换","自动刷新机制确保Token的有效性","事件监听机制实现状态同步"],commonTraps:["Token过期时间设置不合理","刷新策略配置错误","存储策略选择不当","并发刷新导致的竞态条件"],solutions:["合理设置Token过期时间和刷新阈值","使用适合的刷新策略","根据应用场景选择存储方式","实施刷新锁机制防止并发问题"],importantTips:["Token会自动注入到请求的Authorization头部","刷新过程中会阻止重复刷新请求","监听器可以实时获取Token状态变化","自动刷新可以根据需要启用或禁用"],codeExample:E},{title:"存储策略比较",component:e.jsx(D,{}),description:"比较不同存储策略的性能和特点，帮助选择合适的存储方式。",observationPoints:["观察不同存储方式的性能差异","比较各存储策略的操作耗时","注意存储策略的成功率","分析各策略的适用场景"],keyPoints:["内存存储速度最快但不持久","LocalStorage提供持久化存储","不同存储方式有不同的适用场景","性能测试有助于选择合适的策略"],commonTraps:["盲目选择高性能存储而忽略持久性","不考虑存储容量限制","忽略浏览器兼容性问题","没有考虑安全性要求"],solutions:["根据应用需求选择合适的存储策略","考虑存储容量和性能的平衡","实施存储降级策略","加强Token的安全保护"],importantTips:["内存存储适合临时Token管理","LocalStorage适合需要持久化的场景","可以组合使用多种存储策略","定期清理过期的存储数据"],codeExample:_},{title:"自动刷新演示",component:e.jsx(C,{}),description:"演示Token的自动刷新机制，展示无感知的Token续期过程。",observationPoints:["观察Token剩余时间的实时变化","注意自动刷新的触发时机","查看Token刷新后的内容变化","体验无感知的续期体验"],keyPoints:["自动刷新基于时间阈值触发","刷新过程对用户完全透明","支持自定义刷新检查间隔","刷新失败时有相应的处理机制"],commonTraps:["刷新阈值设置过小或过大","检查间隔设置不合理","刷新失败时处理不当","多个实例同时刷新Token"],solutions:["根据Token有效期合理设置刷新阈值","平衡检查频率和性能开销","实施完善的错误处理和重试机制","使用单例模式避免重复刷新"],importantTips:["演示中Token设置为30秒过期以便观察","实际应用中Token通常有更长的有效期","自动刷新可以显著提升用户体验","刷新失败时应该引导用户重新登录"],codeExample:P}],t={concepts:["Token注入是一种自动为HTTP请求添加认证信息的机制","自动刷新通过监控Token过期时间来主动更新Token","存储策略决定了Token的持久性和访问性能","刷新策略定义了何时以及如何刷新Token"],steps:["创建TokenInjectionManager实例并配置存储和刷新策略","设置初始Token信息包括访问令牌和刷新令牌","启用自动刷新机制并设置合适的检查间隔","使用injectToken方法为请求自动添加认证头部","监听Token变化事件以同步应用状态"],tips:["选择合适的存储策略以平衡性能和持久性","设置合理的刷新阈值避免过早或过晚刷新","实施错误处理机制应对刷新失败的情况","使用事件监听器保持应用状态同步","在生产环境中启用详细的日志记录"]},i={questions:[{question:"Token自动刷新的基本原理是什么？",answer:"Token自动刷新基于时间监控机制：1) 定期检查Token的剩余有效时间；2) 当剩余时间低于设定阈值时触发刷新；3) 使用refresh token调用刷新API获取新的access token；4) 更新存储中的Token信息；5) 通知相关组件Token已更新。这个过程对用户完全透明。"},{question:"如何处理Token刷新过程中的并发问题？",answer:"处理并发问题的策略包括：1) 刷新锁机制 - 使用标志位防止同时发起多个刷新请求；2) Promise缓存 - 缓存正在进行的刷新Promise，后续请求等待同一个Promise；3) 队列机制 - 将需要Token的请求加入队列，刷新完成后批量处理；4) 重试机制 - 刷新失败时的指数退避重试。"},{question:"不同存储策略的优缺点是什么？",answer:"各存储策略特点：1) 内存存储 - 优点：速度快，安全性高；缺点：页面刷新丢失，不能跨标签页共享；2) LocalStorage - 优点：持久化，跨标签页共享；缺点：有容量限制，存在XSS风险；3) SessionStorage - 优点：会话级持久化；缺点：不能跨标签页；4) Cookie - 优点：自动发送，服务端可访问；缺点：大小限制，CSRF风险。"},{question:"如何设计安全的Token管理策略？",answer:"安全的Token管理策略包括：1) 最小权限原则 - Token只包含必要的权限信息；2) 短期有效 - 设置较短的Token有效期；3) 安全存储 - 避免在不安全的地方存储Token；4) 传输加密 - 使用HTTPS传输Token；5) 刷新机制 - 定期刷新Token降低泄露风险；6) 撤销机制 - 支持Token的主动撤销；7) 异常检测 - 监控异常的Token使用模式。"}],keyPoints:["Token的生命周期管理是认证系统的核心","自动刷新机制显著提升用户体验","存储策略的选择需要平衡安全性和便利性","并发控制是Token管理的重要考虑因素","错误处理和降级策略同样重要"]},h={dos:["实施合理的Token过期时间和刷新策略","使用安全的存储方式保护Token","实现完善的错误处理和重试机制","提供Token状态的实时反馈","支持Token的主动撤销和清理","实施并发控制防止重复刷新","记录详细的Token操作日志","定期评估和更新安全策略"],donts:["不要在不安全的地方存储敏感Token","不要设置过长的Token有效期","不要忽略Token刷新失败的处理","不要在客户端硬编码刷新逻辑","不要忽略Token的并发访问问题","不要在日志中记录完整的Token内容","不要忽略Token的撤销机制","不要在生产环境中使用调试配置"],patterns:["单例模式：确保全局唯一的Token管理器","观察者模式：监听Token状态变化","策略模式：支持多种存储和刷新策略","装饰器模式：为请求自动添加认证信息","工厂模式：创建不同类型的存储适配器","代理模式：拦截请求并注入Token","状态模式：管理Token的不同状态","责任链模式：处理Token验证和刷新流程"]};return e.jsx(I,{title:"Token注入与刷新 (Token Injection)",description:"实现自动化的Token管理机制，支持智能注入、自动刷新和多种存储策略，提供无感知的用户认证体验。",overview:n,examples:s,tutorial:t,interview:i,bestPractices:h})};export{O as default};
