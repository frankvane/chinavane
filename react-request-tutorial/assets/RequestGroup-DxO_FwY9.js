var I=Object.defineProperty;var q=(i,s,o)=>s in i?I(i,s,{enumerable:!0,configurable:!0,writable:!0,value:o}):i[s]=o;var j=(i,s,o)=>q(i,typeof s!="symbol"?s+"":s,o);import{j as t,r as h}from"./index-Bi_r7QuH.js";import{C as G}from"./ComponentTemplate-C5EWLtXX.js";class y{constructor(){j(this,"groups",new Map);j(this,"requestCount",new Map)}createGroupRequest(s,o,l={}){const r=new AbortController;this.groups.has(s)||(this.groups.set(s,new Set),this.requestCount.set(s,0)),this.groups.get(s).add(r),this.requestCount.set(s,this.requestCount.get(s)+1);const u={...l,signal:r.signal};return fetch(o,u).finally(()=>{var v;(v=this.groups.get(s))==null||v.delete(r);const d=this.requestCount.get(s)||0;this.requestCount.set(s,Math.max(0,d-1))})}cancelGroup(s){const o=this.groups.get(s);if(!o)return 0;let l=0;return o.forEach(r=>{r.signal.aborted||(r.abort(),l++)}),o.clear(),this.requestCount.set(s,0),l}getGroupStatus(s){const o=this.groups.get(s),l=o?o.size:0,r=this.requestCount.get(s)||0;return{activeRequests:l,totalRequests:r,isActive:l>0}}getAllGroupsStatus(){const s={};return this.groups.forEach((o,l)=>{s[l]=this.getGroupStatus(l)}),s}cleanup(){this.groups.forEach((s,o)=>{s.size===0&&(this.groups.delete(o),this.requestCount.delete(o))})}}const m=new y,C=()=>{var v,b,n,c;const[i,s]=h.useState([]),[o,l]=h.useState({}),r=e=>{s(a=>[...a.slice(-9),`${new Date().toLocaleTimeString()}: ${e}`])},u=()=>{l(m.getAllGroupsStatus())},p=async(e,a)=>{r(`开始分组 ${e} 的 ${a} 个请求`);const f=Array.from({length:a},(x,g)=>m.createGroupRequest(e,`https://jsonplaceholder.typicode.com/posts/${g+1}`,{method:"GET"}).then(()=>r(`分组 ${e} 请求 ${g+1} 完成`)).catch($=>{$.name==="AbortError"?r(`分组 ${e} 请求 ${g+1} 被取消`):r(`分组 ${e} 请求 ${g+1} 失败: ${$.message}`)}));u(),await Promise.allSettled(f),u()},d=e=>{const a=m.cancelGroup(e);r(`取消分组 ${e}，共取消 ${a} 个请求`),u()};return h.useEffect(()=>{const e=setInterval(u,500);return()=>clearInterval(e)},[]),t.jsxs("div",{className:"space-y-4",children:[t.jsxs("div",{className:"grid grid-cols-2 gap-4",children:[t.jsxs("div",{className:"space-y-2",children:[t.jsx("h4",{className:"font-medium",children:"用户数据分组"}),t.jsxs("div",{className:"flex gap-2",children:[t.jsx("button",{onClick:()=>p("user-data",3),className:"px-3 py-1 bg-blue-500 text-white rounded hover:bg-blue-600",children:"开始用户请求"}),t.jsx("button",{onClick:()=>d("user-data"),className:"px-3 py-1 bg-red-500 text-white rounded hover:bg-red-600",children:"取消用户请求"})]}),t.jsxs("div",{className:"text-sm text-gray-600",children:["活跃: ",((v=o["user-data"])==null?void 0:v.activeRequests)||0," | 总计:"," ",((b=o["user-data"])==null?void 0:b.totalRequests)||0]})]}),t.jsxs("div",{className:"space-y-2",children:[t.jsx("h4",{className:"font-medium",children:"商品数据分组"}),t.jsxs("div",{className:"flex gap-2",children:[t.jsx("button",{onClick:()=>p("product-data",5),className:"px-3 py-1 bg-green-500 text-white rounded hover:bg-green-600",children:"开始商品请求"}),t.jsx("button",{onClick:()=>d("product-data"),className:"px-3 py-1 bg-red-500 text-white rounded hover:bg-red-600",children:"取消商品请求"})]}),t.jsxs("div",{className:"text-sm text-gray-600",children:["活跃: ",((n=o["product-data"])==null?void 0:n.activeRequests)||0," | 总计:"," ",((c=o["product-data"])==null?void 0:c.totalRequests)||0]})]})]}),t.jsxs("div",{className:"bg-gray-50 p-3 rounded max-h-40 overflow-y-auto",children:[t.jsx("h4",{className:"font-medium mb-2",children:"请求日志"}),i.map((e,a)=>t.jsx("div",{className:"text-sm text-gray-700",children:e},a))]})]})},w=()=>{var n,c;const[i,s]=h.useState("home"),[o,l]=h.useState([]),[r,u]=h.useState({}),p=e=>{l(a=>[...a.slice(-9),`${new Date().toLocaleTimeString()}: ${e}`])},d=()=>{u(m.getAllGroupsStatus())},v=e=>{if(i!==e){const a=m.cancelGroup(`page-${i}`);a>0&&p(`切换页面：取消 ${i} 页面的 ${a} 个请求`)}s(e),p(`切换到 ${e} 页面`),b(e),d()},b=async e=>{const a=e==="home"?3:e==="profile"?2:4;p(`开始加载 ${e} 页面数据 (${a} 个请求)`);const f=Array.from({length:a},(x,g)=>m.createGroupRequest(`page-${e}`,`https://jsonplaceholder.typicode.com/posts/${g+1}`,{method:"GET"}).then(()=>p(`${e} 页面请求 ${g+1} 完成`)).catch($=>{$.name==="AbortError"?p(`${e} 页面请求 ${g+1} 被取消`):p(`${e} 页面请求 ${g+1} 失败`)}));await Promise.allSettled(f),d()};return h.useEffect(()=>{const e=setInterval(d,500);return()=>clearInterval(e)},[]),h.useEffect(()=>{b(i)},[]),t.jsxs("div",{className:"space-y-4",children:[t.jsx("div",{className:"flex gap-2",children:["home","profile","settings"].map(e=>t.jsxs("button",{onClick:()=>v(e),className:`px-4 py-2 rounded ${i===e?"bg-blue-500 text-white":"bg-gray-200 text-gray-700 hover:bg-gray-300"}`,children:[e.charAt(0).toUpperCase()+e.slice(1)," 页面"]},e))}),t.jsxs("div",{className:"bg-blue-50 p-3 rounded",children:[t.jsxs("h4",{className:"font-medium mb-2",children:["当前页面: ",i]}),t.jsxs("div",{className:"text-sm text-gray-600",children:["活跃请求: ",((n=r[`page-${i}`])==null?void 0:n.activeRequests)||0," | 总请求数: ",((c=r[`page-${i}`])==null?void 0:c.totalRequests)||0]})]}),t.jsxs("div",{className:"bg-gray-50 p-3 rounded max-h-40 overflow-y-auto",children:[t.jsx("h4",{className:"font-medium mb-2",children:"页面切换日志"}),o.map((e,a)=>t.jsx("div",{className:"text-sm text-gray-700",children:e},a))]})]})},S=()=>{const[i,s]=h.useState([]),[o,l]=h.useState({}),r=n=>{s(c=>[...c.slice(-9),`${new Date().toLocaleTimeString()}: ${n}`])},u=()=>{l(m.getAllGroupsStatus())},p=async n=>{const c={"data-sync":4,"file-upload":3,analytics:2};r(`开始批量操作: ${n}`),Object.entries(c).forEach(([e,a])=>{Array.from({length:a},(f,x)=>m.createGroupRequest(`${n}-${e}`,`https://jsonplaceholder.typicode.com/posts/${x+1}`,{method:"GET"}).then(()=>r(`${n}-${e} 请求 ${x+1} 完成`)).catch(g=>{g.name==="AbortError"?r(`${n}-${e} 请求 ${x+1} 被取消`):r(`${n}-${e} 请求 ${x+1} 失败`)}))}),u()},d=n=>{const c=["data-sync","file-upload","analytics"];let e=0;c.forEach(a=>{const f=m.cancelGroup(`${n}-${a}`);e+=f}),r(`取消批量操作 ${n}，共取消 ${e} 个请求`),u()},v=()=>{const n=m.getAllGroupsStatus();let c=0;Object.keys(n).forEach(e=>{const a=m.cancelGroup(e);c+=a}),r(`取消所有分组，共取消 ${c} 个请求`),u()};h.useEffect(()=>{const n=setInterval(u,500);return()=>clearInterval(n)},[]);const b=n=>{const c=["data-sync","file-upload","analytics"];let e=0,a=0;return c.forEach(f=>{const x=o[`${n}-${f}`];x&&(e+=x.activeRequests,a+=x.totalRequests)}),{totalActive:e,totalRequests:a}};return t.jsxs("div",{className:"space-y-4",children:[t.jsxs("div",{className:"grid grid-cols-2 gap-4",children:[t.jsxs("div",{className:"space-y-2",children:[t.jsx("h4",{className:"font-medium",children:"批量操作 A"}),t.jsxs("div",{className:"flex gap-2",children:[t.jsx("button",{onClick:()=>p("batch-a"),className:"px-3 py-1 bg-purple-500 text-white rounded hover:bg-purple-600",children:"开始操作 A"}),t.jsx("button",{onClick:()=>d("batch-a"),className:"px-3 py-1 bg-red-500 text-white rounded hover:bg-red-600",children:"取消操作 A"})]}),t.jsxs("div",{className:"text-sm text-gray-600",children:["活跃: ",b("batch-a").totalActive," | 总计:"," ",b("batch-a").totalRequests]})]}),t.jsxs("div",{className:"space-y-2",children:[t.jsx("h4",{className:"font-medium",children:"批量操作 B"}),t.jsxs("div",{className:"flex gap-2",children:[t.jsx("button",{onClick:()=>p("batch-b"),className:"px-3 py-1 bg-orange-500 text-white rounded hover:bg-orange-600",children:"开始操作 B"}),t.jsx("button",{onClick:()=>d("batch-b"),className:"px-3 py-1 bg-red-500 text-white rounded hover:bg-red-600",children:"取消操作 B"})]}),t.jsxs("div",{className:"text-sm text-gray-600",children:["活跃: ",b("batch-b").totalActive," | 总计:"," ",b("batch-b").totalRequests]})]})]}),t.jsx("div",{className:"text-center",children:t.jsx("button",{onClick:v,className:"px-4 py-2 bg-red-600 text-white rounded hover:bg-red-700",children:"取消所有分组请求"})}),t.jsxs("div",{className:"bg-gray-50 p-3 rounded max-h-40 overflow-y-auto",children:[t.jsx("h4",{className:"font-medium mb-2",children:"批量操作日志"}),i.map((n,c)=>t.jsx("div",{className:"text-sm text-gray-700",children:n},c))]})]})},M=()=>t.jsx(G,{title:"请求分组",description:"通过分组ID管理相关请求，实现批量控制和取消功能",overview:t.jsxs("div",{className:"space-y-4",children:[t.jsxs("div",{children:[t.jsx("h3",{className:"text-lg font-semibold mb-2",children:"核心概念"}),t.jsxs("ul",{className:"list-disc list-inside space-y-1 text-gray-700",children:[t.jsxs("li",{children:[t.jsx("strong",{children:"分组管理"}),"：将相关请求归类到同一分组中"]}),t.jsxs("li",{children:[t.jsx("strong",{children:"批量控制"}),"：可以同时操作整个分组的所有请求"]}),t.jsxs("li",{children:[t.jsx("strong",{children:"生命周期管理"}),"：自动清理完成的请求和空分组"]}),t.jsxs("li",{children:[t.jsx("strong",{children:"状态监控"}),"：实时跟踪每个分组的请求状态"]})]})]}),t.jsxs("div",{children:[t.jsx("h3",{className:"text-lg font-semibold mb-2",children:"主要优势"}),t.jsxs("ul",{className:"list-disc list-inside space-y-1 text-gray-700",children:[t.jsx("li",{children:"提供细粒度的请求控制能力"}),t.jsx("li",{children:"支持页面切换时自动取消相关请求"}),t.jsx("li",{children:"便于实现复杂的业务逻辑控制"}),t.jsx("li",{children:"减少不必要的网络请求和资源消耗"})]})]}),t.jsxs("div",{children:[t.jsx("h3",{className:"text-lg font-semibold mb-2",children:"适用场景"}),t.jsxs("ul",{className:"list-disc list-inside space-y-1 text-gray-700",children:[t.jsx("li",{children:"页面切换时取消当前页面的所有请求"}),t.jsx("li",{children:"批量数据操作的统一管理"}),t.jsx("li",{children:"按功能模块分组管理请求"}),t.jsx("li",{children:"复杂表单的分步提交控制"})]})]}),t.jsxs("div",{children:[t.jsx("h3",{className:"text-lg font-semibold mb-2",children:"注意事项"}),t.jsxs("ul",{className:"list-disc list-inside space-y-1 text-gray-700",children:[t.jsx("li",{children:"合理设计分组ID的命名规则"}),t.jsx("li",{children:"及时清理不再使用的分组"}),t.jsx("li",{children:"避免分组过于细化导致管理复杂"}),t.jsx("li",{children:"考虑请求之间的依赖关系"})]})]})]}),examples:[{title:"基础分组管理",component:t.jsx(C,{}),description:"演示如何创建和管理不同的请求分组",codeExample:{title:"基础请求分组管理器实现",code:`// 请求分组管理器实现
class RequestGroupManager {
  private groups: Map<string, Set<AbortController>> = new Map();
  private requestCount: Map<string, number> = new Map();

  // 创建分组请求
  createGroupRequest(groupId: string, url: string, options: RequestInit = {}): Promise<Response> {
    const controller = new AbortController();

    // 初始化分组
    if (!this.groups.has(groupId)) {
      this.groups.set(groupId, new Set());
      this.requestCount.set(groupId, 0);
    }

    // 添加到分组
    this.groups.get(groupId)!.add(controller);
    this.requestCount.set(groupId, this.requestCount.get(groupId)! + 1);

    const requestOptions = {
      ...options,
      signal: controller.signal
    };

    const promise = fetch(url, requestOptions)
      .finally(() => {
        // 请求完成后从分组中移除
        this.groups.get(groupId)?.delete(controller);
        const count = this.requestCount.get(groupId) || 0;
        this.requestCount.set(groupId, Math.max(0, count - 1));
      });

    return promise;
  }

  // 取消整个分组的所有请求
  cancelGroup(groupId: string): number {
    const group = this.groups.get(groupId);
    if (!group) return 0;

    let canceledCount = 0;
    group.forEach(controller => {
      if (!controller.signal.aborted) {
        controller.abort();
        canceledCount++;
      }
    });

    // 清空分组
    group.clear();
    this.requestCount.set(groupId, 0);

    return canceledCount;
  }

  // 获取分组状态
  getGroupStatus(groupId: string) {
    return {
      active: this.groups.get(groupId)?.size || 0,
      total: this.requestCount.get(groupId) || 0,
      exists: this.groups.has(groupId)
    };
  }

  // 清理空分组
  cleanup() {
    this.groups.forEach((group, groupId) => {
      if (group.size === 0) {
        this.groups.delete(groupId);
        this.requestCount.delete(groupId);
      }
    });
  }
}

// 使用示例
const groupManager = new RequestGroupManager();

// 创建用户数据分组请求
const startUserRequests = () => {
  for (let i = 1; i <= 3; i++) {
    groupManager.createGroupRequest(
      'user-data',
      \`/api/users/\${i}\`,
      { method: 'GET' }
    ).catch(error => {
      if (error.name === 'AbortError') {
        console.log(\`User request \${i} was cancelled\`);
      }
    });
  }
};

// 取消用户数据分组
const cancelUserRequests = () => {
  const canceled = groupManager.cancelGroup('user-data');
  console.log(\`Canceled \${canceled} user requests\`);
};`,language:"typescript",highlights:[7,9,16,18,24,26,35,37,40,42,53,55,70,72,78,80]},observationPoints:["点击开始按钮时，会创建对应分组的多个请求","活跃请求数会实时更新，显示当前正在进行的请求数量","点击取消按钮时，该分组的所有活跃请求都会被取消","请求完成或取消后，活跃请求数会相应减少"],keyPoints:["每个分组都有独立的AbortController集合","分组状态包括活跃请求数和总请求数","取消操作只影响指定分组的请求","请求完成后会自动从分组中移除"],commonTraps:["忘记在请求完成后清理分组引用","分组ID命名不规范导致管理混乱","没有处理请求取消后的状态更新"],solutions:["在请求的finally块中清理分组引用","制定统一的分组ID命名规范","使用状态管理确保UI及时更新"],importantTips:["左侧用户数据分组和右侧商品数据分组是完全独立的","取消一个分组不会影响其他分组的请求","分组状态会实时显示活跃和总计请求数"]},{title:"页面切换分组",component:t.jsx(w,{}),description:"演示页面切换时自动取消当前页面请求的功能",codeExample:{title:"页面切换分组管理实现",code:`// 页面切换分组管理
class PageSwitchManager {
  private groupManager: RequestGroupManager;
  private currentPage: string = '';
  private switchLog: string[] = [];

  constructor() {
    this.groupManager = new RequestGroupManager();
  }

  // 切换到新页面
  switchToPage(newPage: string) {
    const timestamp = new Date().toLocaleTimeString();

    // 取消当前页面的所有请求
    if (this.currentPage) {
      const canceled = this.groupManager.cancelGroup(\`page-\${this.currentPage}\`);
      this.addLog(\`[\${timestamp}] 取消页面 \${this.currentPage} 的 \${canceled} 个请求\`);
    }

    // 更新当前页面
    this.currentPage = newPage;
    this.addLog(\`[\${timestamp}] 切换到页面: \${newPage}\`);

    // 开始新页面的请求
    this.startPageRequests(newPage);
  }

  // 开始页面请求
  private startPageRequests(page: string) {
    const groupId = \`page-\${page}\`;
    const requestCount = this.getPageRequestCount(page);

    for (let i = 1; i <= requestCount; i++) {
      this.groupManager.createGroupRequest(
        groupId,
        \`/api/\${page}/data\${i}\`,
        { method: 'GET' }
      ).then(() => {
        this.addLog(\`页面 \${page} 请求 \${i} 完成\`);
      }).catch(error => {
        if (error.name === 'AbortError') {
          this.addLog(\`页面 \${page} 请求 \${i} 被取消\`);
        } else {
          this.addLog(\`页面 \${page} 请求 \${i} 失败: \${error.message}\`);
        }
      });
    }

    this.addLog(\`开始页面 \${page} 的 \${requestCount} 个请求\`);
  }

  // 获取页面请求数量
  private getPageRequestCount(page: string): number {
    const counts: Record<string, number> = {
      'home': 3,
      'profile': 2,
      'settings': 4
    };
    return counts[page] || 1;
  }

  // 添加日志
  private addLog(message: string) {
    this.switchLog.push(message);
    if (this.switchLog.length > 10) {
      this.switchLog.shift(); // 保持最新10条日志
    }
  }

  // 获取当前页面状态
  getCurrentPageStatus() {
    if (!this.currentPage) return null;

    const groupId = \`page-\${this.currentPage}\`;
    return {
      page: this.currentPage,
      ...this.groupManager.getGroupStatus(groupId),
      logs: [...this.switchLog]
    };
  }

  // 清理所有页面请求
  cleanup() {
    if (this.currentPage) {
      this.groupManager.cancelGroup(\`page-\${this.currentPage}\`);
    }
    this.groupManager.cleanup();
  }
}

// 使用示例
const pageSwitchManager = new PageSwitchManager();

// 页面切换处理
const handlePageSwitch = (newPage: string) => {
  pageSwitchManager.switchToPage(newPage);
};

// 在React组件中使用
const PageComponent: React.FC = () => {
  useEffect(() => {
    // 组件卸载时清理请求
    return () => {
      pageSwitchManager.cleanup();
    };
  }, []);

  return (
    <div>
      <button onClick={() => handlePageSwitch('home')}>首页</button>
      <button onClick={() => handlePageSwitch('profile')}>个人资料</button>
      <button onClick={() => handlePageSwitch('settings')}>设置</button>
    </div>
  );
};`,language:"typescript",highlights:[12,14,16,18,29,31,34,36,39,41,68,70,78,80,88,90]},observationPoints:["切换页面时，当前页面的所有请求会被自动取消","新页面会立即开始加载自己的数据请求","页面状态显示当前页面的请求情况","切换日志记录了详细的操作过程"],keyPoints:["每个页面使用独立的分组ID","页面切换时先取消再开始新请求","避免了页面切换后的无效请求","提升了用户体验和性能"],commonTraps:["页面切换时没有取消前一个页面的请求","分组ID设计不合理导致误取消","没有处理快速切换页面的情况"],solutions:["在页面切换逻辑中添加请求取消","使用页面标识作为分组ID前缀","添加防抖或节流机制"],importantTips:["快速切换页面时，前一个页面的请求会被立即取消","每个页面的请求数量不同，模拟真实场景","日志显示了完整的请求生命周期"]},{title:"批量操作管理",component:t.jsx(S,{}),description:"演示复杂批量操作的分组管理",codeExample:{title:"批量操作分组管理实现",code:`// 批量操作分组管理
class BatchOperationManager {
  private groupManager: RequestGroupManager;
  private operations: Map<string, string[]> = new Map();
  private operationLogs: Map<string, string[]> = new Map();

  constructor() {
    this.groupManager = new RequestGroupManager();
  }

  // 开始批量操作
  async startBatchOperation(operationId: string) {
    const subGroups = ['data-sync', 'file-upload', 'analytics'];
    const groupCounts = { 'data-sync': 4, 'file-upload': 3, 'analytics': 2 };

    // 记录操作的子分组
    this.operations.set(operationId, subGroups.map(sg => \`\${operationId}-\${sg}\`));
    this.initOperationLog(operationId);

    this.addLog(operationId, \`开始批量操作: \${operationId}\`);

    // 为每个子分组创建请求
    subGroups.forEach(subGroup => {
      const fullGroupId = \`\${operationId}-\${subGroup}\`;
      const count = groupCounts[subGroup as keyof typeof groupCounts];

      this.startSubGroupRequests(fullGroupId, subGroup, count, operationId);
    });
  }

  // 开始子分组请求
  private startSubGroupRequests(groupId: string, subGroup: string, count: number, operationId: string) {
    for (let i = 1; i <= count; i++) {
      this.groupManager.createGroupRequest(
        groupId,
        \`https://jsonplaceholder.typicode.com/posts/\${i}\`,
        { method: 'GET' }
      ).then(() => {
        this.addLog(operationId, \`\${subGroup} 请求 \${i} 完成\`);
      }).catch(error => {
        if (error.name === 'AbortError') {
          this.addLog(operationId, \`\${subGroup} 请求 \${i} 被取消\`);
        } else {
          this.addLog(operationId, \`\${subGroup} 请求 \${i} 失败\`);
        }
      });
    }
  }

  // 取消批量操作
  cancelBatchOperation(operationId: string): number {
    const subGroupIds = this.operations.get(operationId);
    if (!subGroupIds) return 0;

    let totalCanceled = 0;
    subGroupIds.forEach(groupId => {
      const canceled = this.groupManager.cancelGroup(groupId);
      totalCanceled += canceled;
    });

    this.addLog(operationId, \`取消批量操作，共取消 \${totalCanceled} 个请求\`);
    return totalCanceled;
  }

  // 取消所有操作
  cancelAllOperations(): number {
    let totalCanceled = 0;

    this.operations.forEach((subGroupIds, operationId) => {
      subGroupIds.forEach(groupId => {
        const canceled = this.groupManager.cancelGroup(groupId);
        totalCanceled += canceled;
      });
      this.addLog(operationId, \`全局取消：操作 \${operationId} 被取消\`);
    });

    return totalCanceled;
  }

  // 获取操作状态
  getOperationStatus(operationId: string) {
    const subGroupIds = this.operations.get(operationId);
    if (!subGroupIds) return { totalActive: 0, totalRequests: 0 };

    let totalActive = 0;
    let totalRequests = 0;

    subGroupIds.forEach(groupId => {
      const status = this.groupManager.getGroupStatus(groupId);
      totalActive += status.activeRequests || 0;
      totalRequests += status.totalRequests || 0;
    });

    return { totalActive, totalRequests };
  }

  // 初始化操作日志
  private initOperationLog(operationId: string) {
    if (!this.operationLogs.has(operationId)) {
      this.operationLogs.set(operationId, []);
    }
  }

  // 添加日志
  private addLog(operationId: string, message: string) {
    const logs = this.operationLogs.get(operationId) || [];
    const timestamp = new Date().toLocaleTimeString();
    logs.push(\`[\${timestamp}] \${message}\`);

    // 保持最新10条日志
    if (logs.length > 10) {
      logs.shift();
    }

    this.operationLogs.set(operationId, logs);
  }

  // 获取操作日志
  getOperationLogs(operationId: string): string[] {
    return this.operationLogs.get(operationId) || [];
  }

  // 清理操作
  cleanup(operationId?: string) {
    if (operationId) {
      this.cancelBatchOperation(operationId);
      this.operations.delete(operationId);
      this.operationLogs.delete(operationId);
    } else {
      this.cancelAllOperations();
      this.operations.clear();
      this.operationLogs.clear();
    }
  }
}

// 使用示例
const batchManager = new BatchOperationManager();

// 开始批量操作A
const startBatchA = () => {
  batchManager.startBatchOperation('batch-a');
};

// 取消批量操作A
const cancelBatchA = () => {
  batchManager.cancelBatchOperation('batch-a');
};

// 取消所有操作
const cancelAll = () => {
  const totalCanceled = batchManager.cancelAllOperations();
  console.log(\`取消了 \${totalCanceled} 个请求\`);
};

// 在React组件中使用
const BatchOperationComponent: React.FC = () => {
  const [operationStatus, setOperationStatus] = useState<Record<string, any>>({});

  useEffect(() => {
    const interval = setInterval(() => {
      const batchAStatus = batchManager.getOperationStatus('batch-a');
      const batchBStatus = batchManager.getOperationStatus('batch-b');

      setOperationStatus({
        'batch-a': batchAStatus,
        'batch-b': batchBStatus
      });
    }, 500);

    return () => clearInterval(interval);
  }, []);

  return (
    <div>
      <button onClick={startBatchA}>开始批量操作A</button>
      <button onClick={cancelBatchA}>取消操作A</button>
      <button onClick={cancelAll}>取消所有操作</button>

      <div>
        操作A状态: 活跃 {operationStatus['batch-a']?.totalActive || 0} |
        总计 {operationStatus['batch-a']?.totalRequests || 0}
      </div>
    </div>
  );
};`,language:"typescript",highlights:[12,14,17,19,25,27,32,34,48,50,57,59,65,67,74,76,118,120]},observationPoints:["每个批量操作包含多个子分组（数据同步、文件上传、分析）","可以单独取消某个批量操作的所有子分组","全局取消按钮可以取消所有活跃的分组请求","状态统计显示了每个操作的总体情况"],keyPoints:["支持嵌套分组的概念和管理","批量操作可以包含多个相关分组","提供全局控制和局部控制两种方式","状态聚合显示操作的整体进度"],commonTraps:["嵌套分组的命名规则不清晰","批量取消时遗漏某些子分组","状态统计逻辑复杂容易出错"],solutions:["使用层次化的分组ID命名","维护分组关系映射表","封装状态聚合计算逻辑"],importantTips:["批量操作A和B是独立的，可以分别控制","每个操作包含3个子分组，请求数量不同","全局取消会影响所有正在进行的分组请求"]}],tutorial:{concepts:["分组ID是请求分组的唯一标识符","AbortController用于实现请求的取消功能","分组状态包括活跃请求数和历史总数","请求完成后需要从分组中清理引用","支持嵌套分组和批量操作管理"],steps:["创建RequestGroupManager实例","定义分组ID的命名规则","使用createGroupRequest创建分组请求","通过cancelGroup取消整个分组","使用getGroupStatus监控分组状态","定期调用cleanup清理空分组"],tips:["分组ID应该具有业务含义，便于理解和维护","考虑使用层次化命名，如'page-home'、'batch-upload'","在组件卸载时记得取消相关分组的请求","合理设置状态更新频率，避免过度渲染","对于复杂场景，可以考虑使用状态管理库"]},interview:{questions:[{question:"如何实现请求的分组管理？",answer:"通过维护一个Map结构，以分组ID为key，AbortController集合为value。每个请求创建时加入对应分组，完成时自动移除。这样可以实现按分组批量控制请求。"},{question:"页面切换时如何自动取消请求？",answer:"为每个页面分配独立的分组ID，在页面切换时先调用cancelGroup取消当前页面的所有请求，然后开始新页面的请求。这样可以避免无效请求和资源浪费。"},{question:"如何处理嵌套分组的场景？",answer:"可以使用层次化的分组ID命名，如'operation-subgroup'的格式。同时维护分组关系映射，支持按操作或子分组进行批量控制。状态统计时需要聚合相关子分组的数据。"},{question:"分组管理的性能考虑有哪些？",answer:"主要包括：1）及时清理完成的请求引用；2）定期清理空分组；3）合理设置状态更新频率；4）避免创建过多细粒度分组；5）使用WeakMap等优化内存使用。"}],keyPoints:["分组管理提供了细粒度的请求控制能力","AbortController是实现请求取消的核心API","合理的分组设计是成功实现的关键","状态管理和清理机制确保系统稳定性","支持复杂业务场景的嵌套分组需求"]},bestPractices:{dos:["为分组ID制定清晰的命名规范","在请求完成后及时清理分组引用","使用状态管理确保UI及时更新","考虑请求之间的依赖关系","提供全局和局部两种控制方式","定期清理不再使用的空分组"],donts:["不要创建过多细粒度的分组","不要忘记处理请求取消的异常","不要在分组间创建循环依赖","不要忽略内存泄漏的风险","不要在高频操作中频繁创建分组"],patterns:["页面分组模式：按页面或路由分组管理请求","功能分组模式：按业务功能模块分组","批量操作模式：将相关操作归为一个分组","层次分组模式：支持嵌套和继承关系","生命周期模式：与组件生命周期绑定的分组管理"]}});export{M as default};
