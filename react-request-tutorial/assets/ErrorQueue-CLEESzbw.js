var f=Object.defineProperty;var E=(o,r,t)=>r in o?f(o,r,{enumerable:!0,configurable:!0,writable:!0,value:t}):o[r]=t;var x=(o,r,t)=>E(o,typeof r!="symbol"?r+"":r,t);import{j as e,r as p}from"./index-Cnne2xOM.js";import{C as S}from"./ComponentTemplate-iqsAHbUA.js";class w{constructor(){x(this,"state",{errors:[],visibleErrors:[],totalCount:0});x(this,"listeners",new Set);x(this,"maxCacheSize",6);x(this,"maxVisibleSize",3);x(this,"autoHideTimer",new Map)}subscribe(r){return this.listeners.add(r),()=>this.listeners.delete(r)}notify(){this.listeners.forEach(r=>r({...this.state}))}addError(r){const t=this.generateErrorKey(r.message,r.type,r.source),s=this.state.errors.find(l=>this.generateErrorKey(l.message,l.type,l.source)===t);if(s)s.count++,s.timestamp=Date.now(),this.resetAutoHideTimer(s.id);else{const l={...r,id:`error-${Date.now()}-${Math.random().toString(36).substr(2,9)}`,timestamp:Date.now(),count:1};if(this.state.errors.unshift(l),this.state.totalCount++,this.state.errors.length>this.maxCacheSize){const c=this.state.errors.pop();c&&this.clearAutoHideTimer(c.id)}this.setAutoHideTimer(l.id)}this.updateVisibleErrors(),this.notify()}generateErrorKey(r,t,s){return`${t}:${s||"unknown"}:${r}`}updateVisibleErrors(){this.state.visibleErrors=this.state.errors.slice(0,this.maxVisibleSize).sort((r,t)=>{const s={error:3,warning:2,info:1},l=s[r.type],c=s[t.type];return l!==c?c-l:t.timestamp-r.timestamp})}setAutoHideTimer(r){const t=setTimeout(()=>{this.removeError(r)},5e3);this.autoHideTimer.set(r,t)}resetAutoHideTimer(r){this.clearAutoHideTimer(r),this.setAutoHideTimer(r)}clearAutoHideTimer(r){const t=this.autoHideTimer.get(r);t&&(clearTimeout(t),this.autoHideTimer.delete(r))}removeError(r){const t=this.state.errors.findIndex(s=>s.id===r);t!==-1&&(this.state.errors.splice(t,1),this.clearAutoHideTimer(r),this.updateVisibleErrors(),this.notify())}clearAll(){this.state.errors.forEach(r=>{this.clearAutoHideTimer(r.id)}),this.state.errors=[],this.state.visibleErrors=[],this.notify()}getState(){return{...this.state}}setConfig(r){r.maxCacheSize!==void 0&&(this.maxCacheSize=r.maxCacheSize),r.maxVisibleSize!==void 0&&(this.maxVisibleSize=r.maxVisibleSize),this.state.errors.length>this.maxCacheSize&&this.state.errors.splice(this.maxCacheSize).forEach(s=>{this.clearAutoHideTimer(s.id)}),this.updateVisibleErrors(),this.notify()}}const g=new w,b=p.createContext(null),N=({children:o})=>{const[r,t]=p.useState(g.getState());return p.useEffect(()=>g.subscribe(t),[]),e.jsx(b.Provider,{value:{state:r,addError:g.addError.bind(g),removeError:g.removeError.bind(g),clearAll:g.clearAll.bind(g),setConfig:g.setConfig.bind(g)},children:o})},y=()=>{const o=p.useContext(b);if(!o)throw new Error("useErrorQueue must be used within ErrorQueueProvider");return o},C=({position:o="top-right",showCount:r=!0})=>{const{state:t,removeError:s}=y();if(t.visibleErrors.length===0)return null;const l={"top-right":"fixed top-4 right-4 z-50","top-left":"fixed top-4 left-4 z-50","bottom-right":"fixed bottom-4 right-4 z-50","bottom-left":"fixed bottom-4 left-4 z-50"},c=i=>{switch(i){case"error":return"❌";case"warning":return"⚠️";case"info":return"ℹ️";default:return"📝"}},h=i=>{switch(i){case"error":return"bg-red-50 border-red-200 text-red-800";case"warning":return"bg-yellow-50 border-yellow-200 text-yellow-800";case"info":return"bg-blue-50 border-blue-200 text-blue-800";default:return"bg-gray-50 border-gray-200 text-gray-800"}};return e.jsxs("div",{className:`${l[o]} space-y-2 max-w-sm`,children:[t.visibleErrors.map(i=>e.jsx("div",{className:`${h(i.type)} border rounded-lg p-3 shadow-lg animate-slide-in`,children:e.jsxs("div",{className:"flex items-start justify-between",children:[e.jsxs("div",{className:"flex items-start space-x-2 flex-1",children:[e.jsx("span",{className:"text-lg",children:c(i.type)}),e.jsxs("div",{className:"flex-1",children:[e.jsxs("div",{className:"font-medium text-sm",children:[i.message,r&&i.count>1&&e.jsxs("span",{className:"ml-2 px-2 py-1 bg-white bg-opacity-50 rounded-full text-xs",children:[i.count,"x"]})]}),i.source&&e.jsxs("div",{className:"text-xs opacity-75 mt-1",children:["来源: ",i.source]}),e.jsx("div",{className:"text-xs opacity-75 mt-1",children:new Date(i.timestamp).toLocaleTimeString()})]})]}),e.jsx("button",{onClick:()=>s(i.id),className:"ml-2 text-gray-500 hover:text-gray-700 text-sm",children:"✕"})]})},i.id)),t.errors.length>t.visibleErrors.length&&e.jsx("div",{className:"text-center",children:e.jsxs("div",{className:"bg-gray-100 border border-gray-200 rounded-lg p-2 text-sm text-gray-600",children:["还有 ",t.errors.length-t.visibleErrors.length," 条错误未显示"]})})]})},j=()=>{const{state:o,addError:r,removeError:t,clearAll:s}=y(),[l,c]=p.useState([]),h=m=>{c(u=>[...u.slice(-9),`${new Date().toLocaleTimeString()}: ${m}`])},i=(m,u,n)=>{r({type:m,message:u,source:n||"模拟组件",details:{timestamp:Date.now()}}),h(`添加${m}消息: ${u}`)},d=()=>{h("测试去重机制 - 添加重复错误"),i("error","网络连接失败","API服务"),setTimeout(()=>i("error","网络连接失败","API服务"),500),setTimeout(()=>i("error","网络连接失败","API服务"),1e3)},a=()=>{h("添加多种类型的错误"),i("error","数据加载失败","数据服务"),i("warning","响应时间较长","性能监控"),i("info","缓存已更新","缓存系统"),i("error","权限验证失败","认证服务"),i("warning","内存使用率高","系统监控")};return e.jsxs("div",{className:"space-y-4",children:[e.jsxs("div",{className:"grid grid-cols-2 gap-4",children:[e.jsxs("div",{className:"space-y-2",children:[e.jsx("h4",{className:"font-medium",children:"单个错误测试"}),e.jsxs("div",{className:"space-y-2",children:[e.jsx("button",{onClick:()=>i("error","服务器内部错误","API"),className:"w-full px-3 py-2 bg-red-500 text-white rounded hover:bg-red-600 text-sm",children:"添加错误消息"}),e.jsx("button",{onClick:()=>i("warning","数据可能不准确","数据验证"),className:"w-full px-3 py-2 bg-yellow-500 text-white rounded hover:bg-yellow-600 text-sm",children:"添加警告消息"}),e.jsx("button",{onClick:()=>i("info","操作已完成","用户操作"),className:"w-full px-3 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 text-sm",children:"添加信息消息"})]})]}),e.jsxs("div",{className:"space-y-2",children:[e.jsx("h4",{className:"font-medium",children:"批量错误测试"}),e.jsxs("div",{className:"space-y-2",children:[e.jsx("button",{onClick:d,className:"w-full px-3 py-2 bg-purple-500 text-white rounded hover:bg-purple-600 text-sm",children:"测试去重机制"}),e.jsx("button",{onClick:a,className:"w-full px-3 py-2 bg-indigo-500 text-white rounded hover:bg-indigo-600 text-sm",children:"添加多种错误"}),e.jsx("button",{onClick:s,className:"w-full px-3 py-2 bg-gray-500 text-white rounded hover:bg-gray-600 text-sm",children:"清除所有错误"})]})]})]}),e.jsxs("div",{className:"bg-blue-50 p-3 rounded",children:[e.jsx("h4",{className:"font-medium mb-2",children:"队列状态"}),e.jsxs("div",{className:"text-sm text-gray-700 space-y-1",children:[e.jsxs("div",{children:["总错误数: ",o.totalCount]}),e.jsxs("div",{children:["缓存错误数: ",o.errors.length]}),e.jsxs("div",{children:["显示错误数: ",o.visibleErrors.length]}),e.jsxs("div",{children:["错误类型分布:",["error","warning","info"].map(m=>{const u=o.errors.filter(n=>n.type===m).length;return u>0?`${m}: ${u}`:null}).filter(Boolean).join(", ")||"无"]})]})]}),e.jsxs("div",{className:"bg-gray-50 p-3 rounded max-h-40 overflow-y-auto",children:[e.jsx("h4",{className:"font-medium mb-2",children:"操作日志"}),l.map((m,u)=>e.jsx("div",{className:"text-sm text-gray-700 font-mono",children:m},u))]})]})},A=()=>{const{state:o,addError:r,setConfig:t}=y(),[s,l]=p.useState(6),[c,h]=p.useState(3),[i,d]=p.useState([]),a=n=>{d(v=>[...v.slice(-9),`${new Date().toLocaleTimeString()}: ${n}`])},m=()=>{t({maxCacheSize:s,maxVisibleSize:c}),a(`配置已更新: 缓存${s}条, 显示${c}条`)},u=()=>{a("填充错误队列到上限");for(let n=1;n<=10;n++)r({type:n%3===0?"error":n%2===0?"warning":"info",message:`测试错误消息 ${n}`,source:`测试源 ${n}`})};return e.jsxs("div",{className:"space-y-4",children:[e.jsxs("div",{className:"grid grid-cols-2 gap-4",children:[e.jsxs("div",{className:"space-y-3",children:[e.jsx("h4",{className:"font-medium",children:"队列配置"}),e.jsxs("div",{className:"space-y-2",children:[e.jsxs("div",{children:[e.jsx("label",{className:"block text-sm font-medium mb-1",children:"最大缓存数量"}),e.jsx("input",{type:"number",min:"1",max:"20",value:s,onChange:n=>l(Number(n.target.value)),className:"w-full px-2 py-1 border rounded"})]}),e.jsxs("div",{children:[e.jsx("label",{className:"block text-sm font-medium mb-1",children:"最大显示数量"}),e.jsx("input",{type:"number",min:"1",max:"10",value:c,onChange:n=>h(Number(n.target.value)),className:"w-full px-2 py-1 border rounded"})]}),e.jsx("button",{onClick:m,className:"w-full px-3 py-2 bg-green-500 text-white rounded hover:bg-green-600 text-sm",children:"应用配置"})]})]}),e.jsxs("div",{className:"space-y-3",children:[e.jsx("h4",{className:"font-medium",children:"测试操作"}),e.jsxs("div",{className:"space-y-2",children:[e.jsx("button",{onClick:u,className:"w-full px-3 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 text-sm",children:"填充队列 (10条)"}),e.jsx("button",{onClick:()=>{a("添加重复错误测试缓存限制");for(let n=0;n<5;n++)r({type:"error",message:"重复错误消息",source:"测试"})},className:"w-full px-3 py-2 bg-orange-500 text-white rounded hover:bg-orange-600 text-sm",children:"测试去重机制"})]})]})]}),e.jsxs("div",{className:"bg-green-50 p-3 rounded",children:[e.jsx("h4",{className:"font-medium mb-2",children:"配置说明"}),e.jsxs("div",{className:"text-sm text-gray-700 space-y-1",children:[e.jsxs("div",{children:["• ",e.jsx("strong",{children:"最大缓存数量"}),": 系统最多保存的错误消息数量"]}),e.jsxs("div",{children:["• ",e.jsx("strong",{children:"最大显示数量"}),": 同时显示在界面上的错误消息数量"]}),e.jsxs("div",{children:["• ",e.jsx("strong",{children:"去重机制"}),": 相同的错误消息会合并，显示重复次数"]}),e.jsxs("div",{children:["• ",e.jsx("strong",{children:"优先级排序"}),": 错误 > 警告 > 信息，相同类型按时间排序"]})]})]}),e.jsxs("div",{className:"bg-gray-50 p-3 rounded max-h-40 overflow-y-auto",children:[e.jsx("h4",{className:"font-medium mb-2",children:"配置日志"}),i.map((n,v)=>e.jsx("div",{className:"text-sm text-gray-700 font-mono",children:n},v))]})]})},H=()=>{const{addError:o}=y(),[r,t]=p.useState([]),s=d=>{t(a=>[...a.slice(-9),`${new Date().toLocaleTimeString()}: ${d}`])},l=async()=>{s("模拟API请求...");try{await new Promise((d,a)=>{setTimeout(()=>{a(new Error("网络连接超时"))},1e3)})}catch(d){o({type:"error",message:d.message,source:"API请求",details:{url:"/api/users",method:"GET"}}),s("API请求失败，错误已记录")}},c=()=>{s("模拟表单验证..."),[{field:"email",message:"邮箱格式不正确"},{field:"password",message:"密码长度至少8位"},{field:"phone",message:"手机号格式错误"}].forEach(a=>{o({type:"warning",message:`${a.field}: ${a.message}`,source:"表单验证",details:{field:a.field}})}),s("表单验证完成，发现3个问题")},h=()=>{s("模拟系统监控检查..."),[{metric:"CPU使用率",value:"85%",threshold:"80%"},{metric:"内存使用率",value:"92%",threshold:"90%"},{metric:"磁盘空间",value:"78%",threshold:"75%"}].forEach(a=>{o({type:"warning",message:`${a.metric}超过阈值: ${a.value} (阈值: ${a.threshold})`,source:"系统监控",details:a})}),s("系统监控完成，发现性能警告")},i=()=>{s("模拟用户操作...");const d=["用户登录成功","数据保存完成","文件上传成功","缓存已刷新"],a=d[Math.floor(Math.random()*d.length)];o({type:"info",message:a,source:"用户操作",details:{userId:"user123",timestamp:Date.now()}}),s(`用户操作: ${a}`)};return e.jsxs("div",{className:"space-y-4",children:[e.jsxs("div",{className:"grid grid-cols-2 gap-4",children:[e.jsxs("div",{className:"space-y-2",children:[e.jsx("h4",{className:"font-medium",children:"API相关错误"}),e.jsxs("div",{className:"space-y-2",children:[e.jsx("button",{onClick:l,className:"w-full px-3 py-2 bg-red-500 text-white rounded hover:bg-red-600 text-sm",children:"模拟API请求失败"}),e.jsx("button",{onClick:()=>{o({type:"error",message:"服务器返回500错误",source:"HTTP请求",details:{status:500,url:"/api/data"}}),s("HTTP 500错误已记录")},className:"w-full px-3 py-2 bg-red-600 text-white rounded hover:bg-red-700 text-sm",children:"模拟服务器错误"})]})]}),e.jsxs("div",{className:"space-y-2",children:[e.jsx("h4",{className:"font-medium",children:"业务逻辑错误"}),e.jsxs("div",{className:"space-y-2",children:[e.jsx("button",{onClick:c,className:"w-full px-3 py-2 bg-yellow-500 text-white rounded hover:bg-yellow-600 text-sm",children:"模拟表单验证错误"}),e.jsx("button",{onClick:h,className:"w-full px-3 py-2 bg-orange-500 text-white rounded hover:bg-orange-600 text-sm",children:"模拟系统监控警告"})]})]})]}),e.jsxs("div",{className:"space-y-2",children:[e.jsx("h4",{className:"font-medium",children:"用户操作信息"}),e.jsxs("div",{className:"grid grid-cols-2 gap-2",children:[e.jsx("button",{onClick:i,className:"px-3 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 text-sm",children:"模拟用户操作"}),e.jsx("button",{onClick:()=>{s("模拟批量操作..."),l(),setTimeout(()=>c(),500),setTimeout(()=>i(),1e3)},className:"px-3 py-2 bg-purple-500 text-white rounded hover:bg-purple-600 text-sm",children:"模拟复合场景"})]})]}),e.jsxs("div",{className:"bg-orange-50 p-3 rounded",children:[e.jsx("h4",{className:"font-medium mb-2",children:"应用场景说明"}),e.jsxs("div",{className:"text-sm text-gray-700 space-y-1",children:[e.jsxs("div",{children:[e.jsx("strong",{children:"API请求错误"}),": 网络超时、服务器错误等"]}),e.jsxs("div",{children:[e.jsx("strong",{children:"表单验证错误"}),": 用户输入格式错误、必填项缺失"]}),e.jsxs("div",{children:[e.jsx("strong",{children:"系统监控警告"}),": 性能指标超过阈值"]}),e.jsxs("div",{children:[e.jsx("strong",{children:"用户操作信息"}),": 成功操作的反馈信息"]})]})]}),e.jsxs("div",{className:"bg-gray-50 p-3 rounded max-h-40 overflow-y-auto",children:[e.jsx("h4",{className:"font-medium mb-2",children:"操作日志"}),r.map((d,a)=>e.jsx("div",{className:"text-sm text-gray-700 font-mono",children:d},a))]})]})},T=()=>e.jsx(S,{title:"错误队列管理",description:"通过队列化管理错误消息，实现去重、限制显示数量和自动清理功能",overview:e.jsxs("div",{className:"space-y-4",children:[e.jsxs("div",{children:[e.jsx("h3",{className:"text-lg font-semibold mb-2",children:"核心概念"}),e.jsxs("ul",{className:"list-disc list-inside space-y-1 text-gray-700",children:[e.jsxs("li",{children:[e.jsx("strong",{children:"错误去重"}),"：相同的错误消息会合并，显示重复次数"]}),e.jsxs("li",{children:[e.jsx("strong",{children:"队列限制"}),"：最多缓存6条错误，显示3条错误"]}),e.jsxs("li",{children:[e.jsx("strong",{children:"优先级排序"}),"：错误 > 警告 > 信息，相同类型按时间排序"]}),e.jsxs("li",{children:[e.jsx("strong",{children:"自动清理"}),"：错误消息5秒后自动隐藏"]})]})]}),e.jsxs("div",{children:[e.jsx("h3",{className:"text-lg font-semibold mb-2",children:"主要优势"}),e.jsxs("ul",{className:"list-disc list-inside space-y-1 text-gray-700",children:[e.jsx("li",{children:"避免重复错误消息干扰用户"}),e.jsx("li",{children:"限制显示数量，保持界面整洁"}),e.jsx("li",{children:"智能优先级排序，重要错误优先显示"}),e.jsx("li",{children:"自动清理机制，减少用户手动操作"})]})]}),e.jsxs("div",{children:[e.jsx("h3",{className:"text-lg font-semibold mb-2",children:"适用场景"}),e.jsxs("ul",{className:"list-disc list-inside space-y-1 text-gray-700",children:[e.jsx("li",{children:"API请求失败的错误提示"}),e.jsx("li",{children:"表单验证错误的批量显示"}),e.jsx("li",{children:"系统监控警告的集中管理"}),e.jsx("li",{children:"用户操作反馈的统一展示"})]})]}),e.jsxs("div",{children:[e.jsx("h3",{className:"text-lg font-semibold mb-2",children:"注意事项"}),e.jsxs("ul",{className:"list-disc list-inside space-y-1 text-gray-700",children:[e.jsx("li",{children:"合理设置缓存和显示数量限制"}),e.jsx("li",{children:"根据错误重要性设置正确的类型"}),e.jsx("li",{children:"提供清晰的错误来源信息"}),e.jsx("li",{children:"考虑错误消息的可读性和用户体验"})]})]})]}),examples:[{title:"基础错误队列管理",component:e.jsx(j,{}),description:"演示错误队列的基本功能，包括添加、去重和清理",observationPoints:["不同类型错误消息的显示样式","重复错误的去重机制和计数显示","错误队列的状态统计信息","自动清理和手动清理功能"],keyPoints:["错误消息按类型和时间进行优先级排序","相同错误会合并显示，并显示重复次数","队列状态实时更新，提供详细统计","支持手动清除单个或所有错误"],commonTraps:["没有设置合适的错误类型导致优先级混乱","错误消息过于技术化，用户难以理解","忽略错误来源信息，难以定位问题"],solutions:["根据错误严重程度正确设置类型","使用用户友好的错误消息描述","提供清晰的错误来源和上下文信息"],importantTips:["错误类型影响显示优先级和样式","去重机制基于消息内容、类型和来源","队列会自动限制缓存和显示数量"],codeExample:{title:"基础错误队列管理实现",code:`// 基础错误队列管理器
class BasicErrorQueueManager {
  private state: ErrorQueueState = {
    errors: [],
    visibleErrors: [],
    totalCount: 0
  };
  private listeners = new Set<(state: ErrorQueueState) => void>();
  private maxCacheSize = 6; // 最多缓存6条错误
  private maxVisibleSize = 3; // 最多显示3条错误
  private autoHideTimer = new Map<string, NodeJS.Timeout>();
  private errorStats = {
    totalAdded: 0,
    totalDuplicated: 0,
    totalRemoved: 0,
    typeStats: { error: 0, warning: 0, info: 0 }
  };

  // 添加错误到队列
  addError(error: Omit<ErrorMessage, 'id' | 'timestamp' | 'count'>) {
    const errorKey = this.generateErrorKey(error.message, error.type, error.source);
    const existingError = this.state.errors.find(e => 
      this.generateErrorKey(e.message, e.type, e.source) === errorKey
    );

    if (existingError) {
      // 处理重复错误
      existingError.count += 1;
      existingError.timestamp = Date.now();
      this.errorStats.totalDuplicated += 1;
      
      // 重置自动隐藏定时器
      this.resetAutoHideTimer(existingError.id);
    } else {
      // 创建新错误
      const newError: ErrorMessage = {
        id: \`error_\${Date.now()}_\${Math.random().toString(36).substr(2, 9)}\`,
        ...error,
        timestamp: Date.now(),
        count: 1
      };

      this.state.errors.push(newError);
      this.errorStats.totalAdded += 1;
      this.errorStats.typeStats[error.type] += 1;
      
      // 限制缓存大小
      if (this.state.errors.length > this.maxCacheSize) {
        const removedError = this.state.errors.shift()!;
        this.clearAutoHideTimer(removedError.id);
        this.errorStats.totalRemoved += 1;
      }
      
      // 设置自动隐藏定时器
      this.setAutoHideTimer(newError.id);
    }

    this.updateVisibleErrors();
    this.notify();
  }

  // 生成错误去重键
  private generateErrorKey(message: string, type: string, source?: string): string {
    return \`\${type}:\${message}:\${source || 'unknown'}\`;
  }

  // 更新可见错误列表
  private updateVisibleErrors() {
    // 按优先级排序：error > warning > info，相同类型按时间倒序
    const sortedErrors = [...this.state.errors].sort((a, b) => {
      const typeOrder = { error: 3, warning: 2, info: 1 };
      const aPriority = typeOrder[a.type];
      const bPriority = typeOrder[b.type];
      
      if (aPriority !== bPriority) {
        return bPriority - aPriority; // 优先级高的在前
      }
      return b.timestamp - a.timestamp; // 时间新的在前
    });

    this.state.visibleErrors = sortedErrors.slice(0, this.maxVisibleSize);
    this.state.totalCount = this.state.errors.length;
  }

  // 设置自动隐藏定时器
  private setAutoHideTimer(errorId: string) {
    const timer = setTimeout(() => {
      this.removeError(errorId);
    }, 5000); // 5秒后自动隐藏
    
    this.autoHideTimer.set(errorId, timer);
  }

  // 重置自动隐藏定时器
  private resetAutoHideTimer(errorId: string) {
    this.clearAutoHideTimer(errorId);
    this.setAutoHideTimer(errorId);
  }

  // 清除自动隐藏定时器
  private clearAutoHideTimer(errorId: string) {
    const timer = this.autoHideTimer.get(errorId);
    if (timer) {
      clearTimeout(timer);
      this.autoHideTimer.delete(errorId);
    }
  }

  // 移除指定错误
  removeError(errorId: string) {
    const index = this.state.errors.findIndex(e => e.id === errorId);
    if (index !== -1) {
      this.state.errors.splice(index, 1);
      this.clearAutoHideTimer(errorId);
      this.errorStats.totalRemoved += 1;
      this.updateVisibleErrors();
      this.notify();
    }
  }

  // 清除所有错误
  clearAll() {
    this.state.errors.forEach(error => {
      this.clearAutoHideTimer(error.id);
    });
    
    this.state.errors = [];
    this.state.visibleErrors = [];
    this.state.totalCount = 0;
    this.errorStats.totalRemoved += this.state.errors.length;
    this.notify();
  }

  // 获取当前状态
  getState(): ErrorQueueState {
    return { ...this.state };
  }

  // 获取统计信息
  getStats() {
    return {
      ...this.errorStats,
      currentCount: this.state.errors.length,
      visibleCount: this.state.visibleErrors.length,
      config: {
        maxCacheSize: this.maxCacheSize,
        maxVisibleSize: this.maxVisibleSize
      }
    };
  }

  // 订阅状态变化
  subscribe(listener: (state: ErrorQueueState) => void) {
    this.listeners.add(listener);
    return () => this.listeners.delete(listener);
  }

  // 通知所有监听器
  private notify() {
    this.listeners.forEach(listener => listener(this.state));
  }

  // 重置统计信息
  resetStats() {
    this.errorStats = {
      totalAdded: 0,
      totalDuplicated: 0,
      totalRemoved: 0,
      typeStats: { error: 0, warning: 0, info: 0 }
    };
    this.notify();
  }
}

// React Hook 封装
const useBasicErrorQueue = () => {
  const [manager] = useState(() => new BasicErrorQueueManager());
  const [state, setState] = useState(manager.getState());
  const [stats, setStats] = useState(manager.getStats());

  useEffect(() => {
    const unsubscribe = manager.subscribe((newState) => {
      setState(newState);
      setStats(manager.getStats());
    });
    return unsubscribe;
  }, [manager]);

  return { manager, state, stats };
};

// 错误显示组件
const BasicErrorDisplay: React.FC<{
  errors: ErrorMessage[];
  onRemove: (id: string) => void;
}> = ({ errors, onRemove }) => {
  const getErrorStyle = (type: ErrorMessage['type']) => {
    const baseStyle = 'p-3 rounded-lg border-l-4 mb-2 relative';
    switch (type) {
      case 'error':
        return \`\${baseStyle} bg-red-50 border-red-500 text-red-800\`;
      case 'warning':
        return \`\${baseStyle} bg-yellow-50 border-yellow-500 text-yellow-800\`;
      case 'info':
        return \`\${baseStyle} bg-blue-50 border-blue-500 text-blue-800\`;
      default:
        return \`\${baseStyle} bg-gray-50 border-gray-500 text-gray-800\`;
    }
  };

  const getErrorIcon = (type: ErrorMessage['type']) => {
    switch (type) {
      case 'error':
        return '❌';
      case 'warning':
        return '⚠️';
      case 'info':
        return 'ℹ️';
      default:
        return '📝';
    }
  };

  if (errors.length === 0) {
    return (
      <div className="text-center py-8 text-gray-500">
        暂无错误消息
      </div>
    );
  }

  return (
    <div className="space-y-2">
      {errors.map((error) => (
        <div key={error.id} className={getErrorStyle(error.type)}>
          <div className="flex items-start justify-between">
            <div className="flex items-start space-x-2 flex-1">
              <span className="text-lg">{getErrorIcon(error.type)}</span>
              <div className="flex-1">
                <div className="font-medium">{error.message}</div>
                {error.source && (
                  <div className="text-xs opacity-75 mt-1">
                    来源: {error.source}
                  </div>
                )}
                <div className="text-xs opacity-75 mt-1">
                  {new Date(error.timestamp).toLocaleTimeString()}
                  {error.count > 1 && (
                    <span className="ml-2 px-2 py-1 bg-black bg-opacity-10 rounded-full">
                      重复 {error.count} 次
                    </span>
                  )}
                </div>
              </div>
            </div>
            <button
              onClick={() => onRemove(error.id)}
              className="ml-2 text-gray-500 hover:text-gray-700 text-lg leading-none"
              title="移除错误"
            >
              ×
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

// 组件使用示例
const BasicExample: React.FC = () => {
  const { manager, state, stats } = useBasicErrorQueue();
  const [logs, setLogs] = useState<string[]>([]);

  const addLog = (message: string) => {
    setLogs(prev => [...prev.slice(-9), \`\${new Date().toLocaleTimeString()}: \${message}\`]);
  };

  // 添加不同类型的错误
  const addError = (type: ErrorMessage['type'], message: string, source?: string) => {
    manager.addError({ type, message, source });
    addLog(\`添加\${type}错误: \${message}\`);
  };

  // 添加重复错误
  const addDuplicateError = () => {
    manager.addError({
      type: 'warning',
      message: '网络连接不稳定',
      source: 'NetworkService'
    });
    addLog('添加重复错误（测试去重机制）');
  };

  // 清除所有错误
  const clearAllErrors = () => {
    manager.clearAll();
    addLog('清除所有错误');
  };

  // 重置统计
  const resetStats = () => {
    manager.resetStats();
    setLogs([]);
    addLog('重置统计信息');
  };

  return (
    <div className="space-y-4">
      <div className="grid grid-cols-2 gap-4">
        <div className="bg-gray-50 p-3 rounded">
          <h4 className="font-medium mb-2">队列状态</h4>
          <div className="text-sm text-gray-700 space-y-1">
            <div>总错误数: {stats.currentCount}</div>
            <div>可见错误: {stats.visibleCount}</div>
            <div>缓存限制: {stats.config.maxCacheSize}</div>
            <div>显示限制: {stats.config.maxVisibleSize}</div>
          </div>
        </div>
        
        <div className="bg-blue-50 p-3 rounded">
          <h4 className="font-medium mb-2">统计信息</h4>
          <div className="text-sm text-gray-700 space-y-1">
            <div>已添加: {stats.totalAdded}</div>
            <div>重复: {stats.totalDuplicated}</div>
            <div>已移除: {stats.totalRemoved}</div>
            <div>错误/警告/信息: {stats.typeStats.error}/{stats.typeStats.warning}/{stats.typeStats.info}</div>
          </div>
        </div>
      </div>
      
      <div className="grid grid-cols-3 gap-2">
        <button
          onClick={() => addError('error', 'API请求失败', 'UserService')}
          className="px-3 py-2 bg-red-500 text-white rounded hover:bg-red-600 text-sm"
        >
          添加错误
        </button>
        <button
          onClick={() => addError('warning', '数据格式异常', 'DataValidator')}
          className="px-3 py-2 bg-yellow-500 text-white rounded hover:bg-yellow-600 text-sm"
        >
          添加警告
        </button>
        <button
          onClick={() => addError('info', '操作完成', 'UserAction')}
          className="px-3 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 text-sm"
        >
          添加信息
        </button>
      </div>
      
      <div className="grid grid-cols-3 gap-2">
        <button
          onClick={addDuplicateError}
          className="px-3 py-2 bg-purple-500 text-white rounded hover:bg-purple-600 text-sm"
        >
          重复错误
        </button>
        <button
          onClick={clearAllErrors}
          className="px-3 py-2 bg-gray-500 text-white rounded hover:bg-gray-600 text-sm"
        >
          清除所有
        </button>
        <button
          onClick={resetStats}
          className="px-3 py-2 bg-green-500 text-white rounded hover:bg-green-600 text-sm"
        >
          重置统计
        </button>
      </div>
      
      <div className="border rounded-lg p-4">
        <h4 className="font-medium mb-3">错误显示区域</h4>
        <BasicErrorDisplay 
          errors={state.visibleErrors} 
          onRemove={(id) => {
            manager.removeError(id);
            addLog('手动移除错误');
          }} 
        />
      </div>
      
      <div className="bg-gray-50 p-3 rounded max-h-32 overflow-y-auto">
        <h4 className="font-medium mb-2">操作日志</h4>
        {logs.map((log, index) => (
          <div key={index} className="text-sm text-gray-700 font-mono">{log}</div>
        ))}
      </div>
    </div>
  );
};`,language:"typescript",highlights:[18,20,22,24,26,28,30,32,34,36,38,40,42,44,46,48,50,52,54,56,58,60,62,64,66,68,70,72,74,76,78,80,82,84,86,88,90,92,94,96,98,100,102,104,106,108,110,112,114,116,118,120,122,124,126,128,130,132,134,136,138,140,142,144,146,148,150,152,154,156,158,160,162,164,166,168,170,172,174,176,178,180,182,184,186,188,190,192,194,196,198,200,202,204,206,208,210,212,214,216,218,220,222,224,226,228,230,232,234,236,238,240,242,244,246,248,250,252,254,256,258,260,262,264,266,268,270,272,274,276,278,280,282,284,286,288,290,292,294,296,298,300,302,304,306,308,310,312,314,316,318,320,322,324,326,328,330,332,334,336,338,340,342,344,346,348,350,352,354,356,358,360,362,364,366,368,370,372,374,376,378,380,382,384,386,388,390,392,394,396,398,400]},highlights:[18,20,22,24,26,28,30,32,34,36,38,40,42,44,46,48,50,52,54,56,58,60,62,64,66,68,70,72,74,76,78,80,82,84,86,88,90,92,94,96,98,100,102,104,106,108,110,112,114,116,118,120,122,124,126,128,130,132,134,136,138,140,142,144,146,148,150,152,154,156,158,160,162,164,166,168,170,172,174,176,178,180,182,184,186,188,190,192,194,196,198,200,202,204,206,208,210,212,214,216,218,220,222,224,226,228,230,232,234,236,238,240,242,244,246,248,250,252,254,256,258,260,262,264,266,268,270,272,274,276,278,280,282,284,286,288,290,292,294,296,298,300,302,304,306,308,310,312,314,316,318,320,322,324,326,328,330,332,334,336,338,340,342,344,346,348,350,352,354,356,358,360,362,364,366,368,370,372,374,376,378,380,382,384,386,388,390,392,394,396,398,400]},{title:"配置管理",component:e.jsx(A,{}),description:"演示如何配置错误队列的缓存和显示限制",observationPoints:["缓存数量限制对错误保存的影响","显示数量限制对界面展示的影响","配置变更后队列的实时调整","超出限制时的处理策略"],keyPoints:["缓存数量决定系统保存的错误总数","显示数量决定同时展示的错误数量","配置变更会立即生效并调整现有队列","超出限制时会移除最旧的错误"],commonTraps:["缓存数量设置过小导致重要错误丢失","显示数量设置过多影响界面美观","没有考虑不同场景的配置需求"],solutions:["根据应用复杂度合理设置缓存数量","平衡用户体验和信息完整性设置显示数量","为不同模块提供独立的配置选项"],importantTips:["推荐缓存6条、显示3条的默认配置","配置变更会影响现有错误的显示","去重机制不受配置限制影响"],codeExample:{title:"可配置错误队列管理实现",code:`// 可配置错误队列管理器
class ConfigurableErrorQueueManager {
  private state: ErrorQueueState = {
    errors: [],
    visibleErrors: [],
    totalCount: 0
  };
  private listeners = new Set<(state: ErrorQueueState) => void>();
  private config = {
    maxCacheSize: 6,
    maxVisibleSize: 3,
    autoHideDelay: 5000,
    enableAutoHide: true,
    enableDeduplication: true
  };
  private autoHideTimer = new Map<string, NodeJS.Timeout>();
  private configHistory: Array<{ timestamp: number; config: any; reason: string }> = [];
  private performanceStats = {
    configChanges: 0,
    errorsDropped: 0,
    errorsHidden: 0,
    averageQueueSize: 0,
    peakQueueSize: 0
  };

  constructor(initialConfig?: Partial<typeof this.config>) {
    if (initialConfig) {
      this.updateConfig(initialConfig, '初始化配置');
    }
  }

  // 更新配置
  updateConfig(newConfig: Partial<typeof this.config>, reason: string = '手动更新') {
    const oldConfig = { ...this.config };
    this.config = { ...this.config, ...newConfig };
    
    // 记录配置变更历史
    this.configHistory.push({
      timestamp: Date.now(),
      config: { ...this.config },
      reason
    });
    
    this.performanceStats.configChanges += 1;
    
    // 验证配置合理性
    this.validateConfig();
    
    // 应用配置变更
    this.applyConfigChanges(oldConfig);
    
    this.notify();
  }

  // 验证配置合理性
  private validateConfig() {
    if (this.config.maxCacheSize < 1) {
      console.warn('缓存大小不能小于1，已重置为1');
      this.config.maxCacheSize = 1;
    }
    
    if (this.config.maxVisibleSize < 1) {
      console.warn('显示大小不能小于1，已重置为1');
      this.config.maxVisibleSize = 1;
    }
    
    if (this.config.maxVisibleSize > this.config.maxCacheSize) {
      console.warn('显示大小不能大于缓存大小，已调整为缓存大小');
      this.config.maxVisibleSize = this.config.maxCacheSize;
    }
    
    if (this.config.autoHideDelay < 1000) {
      console.warn('自动隐藏延迟不能小于1秒，已重置为1秒');
      this.config.autoHideDelay = 1000;
    }
  }

  // 应用配置变更
  private applyConfigChanges(oldConfig: typeof this.config) {
    // 如果缓存大小减小，移除多余的错误
    if (this.config.maxCacheSize < oldConfig.maxCacheSize) {
      const excessCount = this.state.errors.length - this.config.maxCacheSize;
      if (excessCount > 0) {
        const removedErrors = this.state.errors.splice(0, excessCount);
        removedErrors.forEach(error => {
          this.clearAutoHideTimer(error.id);
        });
        this.performanceStats.errorsDropped += excessCount;
      }
    }
    
    // 如果自动隐藏设置变更，重新设置定时器
    if (this.config.autoHideDelay !== oldConfig.autoHideDelay || 
        this.config.enableAutoHide !== oldConfig.enableAutoHide) {
      this.resetAllAutoHideTimers();
    }
    
    // 更新可见错误列表
    this.updateVisibleErrors();
    
    // 更新性能统计
    this.updatePerformanceStats();
  }

  // 重置所有自动隐藏定时器
  private resetAllAutoHideTimers() {
    // 清除现有定时器
    this.autoHideTimer.forEach(timer => clearTimeout(timer));
    this.autoHideTimer.clear();
    
    // 如果启用自动隐藏，为所有错误重新设置定时器
    if (this.config.enableAutoHide) {
      this.state.errors.forEach(error => {
        this.setAutoHideTimer(error.id);
      });
    }
  }

  // 添加错误
  addError(error: Omit<ErrorMessage, 'id' | 'timestamp' | 'count'>) {
    let processedError: ErrorMessage;
    
    if (this.config.enableDeduplication) {
      // 启用去重
      const errorKey = this.generateErrorKey(error.message, error.type, error.source);
      const existingError = this.state.errors.find(e => 
        this.generateErrorKey(e.message, e.type, e.source) === errorKey
      );
      
      if (existingError) {
        existingError.count += 1;
        existingError.timestamp = Date.now();
        this.resetAutoHideTimer(existingError.id);
        processedError = existingError;
      } else {
        processedError = this.createNewError(error);
      }
    } else {
      // 不启用去重，直接创建新错误
      processedError = this.createNewError(error);
    }
    
    this.updateVisibleErrors();
    this.updatePerformanceStats();
    this.notify();
  }

  // 创建新错误
  private createNewError(error: Omit<ErrorMessage, 'id' | 'timestamp' | 'count'>): ErrorMessage {
    const newError: ErrorMessage = {
      id: \`error_\${Date.now()}_\${Math.random().toString(36).substr(2, 9)}\`,
      ...error,
      timestamp: Date.now(),
      count: 1
    };
    
    this.state.errors.push(newError);
    
    // 限制缓存大小
    if (this.state.errors.length > this.config.maxCacheSize) {
      const removedError = this.state.errors.shift()!;
      this.clearAutoHideTimer(removedError.id);
      this.performanceStats.errorsDropped += 1;
    }
    
    // 设置自动隐藏定时器
    if (this.config.enableAutoHide) {
      this.setAutoHideTimer(newError.id);
    }
    
    return newError;
  }

  // 生成错误去重键
  private generateErrorKey(message: string, type: string, source?: string): string {
    return \`\${type}:\${message}:\${source || 'unknown'}\`;
  }

  // 更新可见错误列表
  private updateVisibleErrors() {
    const sortedErrors = [...this.state.errors].sort((a, b) => {
      const typeOrder = { error: 3, warning: 2, info: 1 };
      const aPriority = typeOrder[a.type];
      const bPriority = typeOrder[b.type];
      
      if (aPriority !== bPriority) {
        return bPriority - aPriority;
      }
      return b.timestamp - a.timestamp;
    });
    
    this.state.visibleErrors = sortedErrors.slice(0, this.config.maxVisibleSize);
    this.state.totalCount = this.state.errors.length;
  }

  // 设置自动隐藏定时器
  private setAutoHideTimer(errorId: string) {
    if (!this.config.enableAutoHide) return;
    
    const timer = setTimeout(() => {
      this.removeError(errorId);
      this.performanceStats.errorsHidden += 1;
    }, this.config.autoHideDelay);
    
    this.autoHideTimer.set(errorId, timer);
  }

  // 重置自动隐藏定时器
  private resetAutoHideTimer(errorId: string) {
    this.clearAutoHideTimer(errorId);
    this.setAutoHideTimer(errorId);
  }

  // 清除自动隐藏定时器
  private clearAutoHideTimer(errorId: string) {
    const timer = this.autoHideTimer.get(errorId);
    if (timer) {
      clearTimeout(timer);
      this.autoHideTimer.delete(errorId);
    }
  }

  // 移除错误
  removeError(errorId: string) {
    const index = this.state.errors.findIndex(e => e.id === errorId);
    if (index !== -1) {
      this.state.errors.splice(index, 1);
      this.clearAutoHideTimer(errorId);
      this.updateVisibleErrors();
      this.updatePerformanceStats();
      this.notify();
    }
  }

  // 清除所有错误
  clearAll() {
    this.state.errors.forEach(error => {
      this.clearAutoHideTimer(error.id);
    });
    
    this.state.errors = [];
    this.state.visibleErrors = [];
    this.state.totalCount = 0;
    this.updatePerformanceStats();
    this.notify();
  }

  // 更新性能统计
  private updatePerformanceStats() {
    const currentSize = this.state.errors.length;
    this.performanceStats.peakQueueSize = Math.max(
      this.performanceStats.peakQueueSize, 
      currentSize
    );
    
    // 计算平均队列大小（简化版本）
    this.performanceStats.averageQueueSize = 
      (this.performanceStats.averageQueueSize + currentSize) / 2;
  }

  // 获取配置
  getConfig() {
    return { ...this.config };
  }

  // 获取配置历史
  getConfigHistory() {
    return [...this.configHistory];
  }

  // 获取性能统计
  getPerformanceStats() {
    return { ...this.performanceStats };
  }

  // 获取状态
  getState(): ErrorQueueState {
    return { ...this.state };
  }

  // 订阅状态变化
  subscribe(listener: (state: ErrorQueueState) => void) {
    this.listeners.add(listener);
    return () => this.listeners.delete(listener);
  }

  // 通知监听器
  private notify() {
    this.listeners.forEach(listener => listener(this.state));
  }

  // 重置所有统计
  resetStats() {
    this.performanceStats = {
      configChanges: 0,
      errorsDropped: 0,
      errorsHidden: 0,
      averageQueueSize: 0,
      peakQueueSize: 0
    };
    this.configHistory.length = 0;
    this.notify();
  }
}

// React Hook 封装
const useConfigurableErrorQueue = (initialConfig?: any) => {
  const [manager] = useState(() => new ConfigurableErrorQueueManager(initialConfig));
  const [state, setState] = useState(manager.getState());
  const [config, setConfig] = useState(manager.getConfig());
  const [stats, setStats] = useState(manager.getPerformanceStats());
  const [history, setHistory] = useState(manager.getConfigHistory());

  useEffect(() => {
    const unsubscribe = manager.subscribe(() => {
      setState(manager.getState());
      setConfig(manager.getConfig());
      setStats(manager.getPerformanceStats());
      setHistory(manager.getConfigHistory());
    });
    return unsubscribe;
  }, [manager]);

  return { manager, state, config, stats, history };
};

// 配置面板组件
const ConfigPanel: React.FC<{
  config: any;
  onConfigChange: (config: any, reason: string) => void;
}> = ({ config, onConfigChange }) => {
  const [localConfig, setLocalConfig] = useState(config);
  const [reason, setReason] = useState('');

  useEffect(() => {
    setLocalConfig(config);
  }, [config]);

  const handleApplyConfig = () => {
    onConfigChange(localConfig, reason || '手动配置更新');
    setReason('');
  };

  const presetConfigs = {
    conservative: {
      maxCacheSize: 3,
      maxVisibleSize: 2,
      autoHideDelay: 8000,
      enableAutoHide: true,
      enableDeduplication: true
    },
    balanced: {
      maxCacheSize: 6,
      maxVisibleSize: 3,
      autoHideDelay: 5000,
      enableAutoHide: true,
      enableDeduplication: true
    },
    aggressive: {
      maxCacheSize: 10,
      maxVisibleSize: 5,
      autoHideDelay: 3000,
      enableAutoHide: true,
      enableDeduplication: false
    }
  };

  return (
    <div className="bg-white border rounded-lg p-4 space-y-4">
      <h4 className="font-medium">配置管理</h4>
      
      <div className="grid grid-cols-2 gap-4">
        <div>
          <label className="block text-sm font-medium mb-1">缓存大小</label>
          <input
            type="number"
            min="1"
            max="20"
            value={localConfig.maxCacheSize}
            onChange={(e) => setLocalConfig(prev => ({ 
              ...prev, 
              maxCacheSize: parseInt(e.target.value) || 1 
            }))}
            className="w-full px-3 py-1 border rounded text-sm"
          />
        </div>
        
        <div>
          <label className="block text-sm font-medium mb-1">显示数量</label>
          <input
            type="number"
            min="1"
            max={localConfig.maxCacheSize}
            value={localConfig.maxVisibleSize}
            onChange={(e) => setLocalConfig(prev => ({ 
              ...prev, 
              maxVisibleSize: parseInt(e.target.value) || 1 
            }))}
            className="w-full px-3 py-1 border rounded text-sm"
          />
        </div>
        
        <div>
          <label className="block text-sm font-medium mb-1">自动隐藏延迟(ms)</label>
          <input
            type="number"
            min="1000"
            max="30000"
            step="1000"
            value={localConfig.autoHideDelay}
            onChange={(e) => setLocalConfig(prev => ({ 
              ...prev, 
              autoHideDelay: parseInt(e.target.value) || 5000 
            }))}
            className="w-full px-3 py-1 border rounded text-sm"
          />
        </div>
        
        <div className="space-y-2">
          <label className="flex items-center">
            <input
              type="checkbox"
              checked={localConfig.enableAutoHide}
              onChange={(e) => setLocalConfig(prev => ({ 
                ...prev, 
                enableAutoHide: e.target.checked 
              }))}
              className="mr-2"
            />
            <span className="text-sm">启用自动隐藏</span>
          </label>
          
          <label className="flex items-center">
            <input
              type="checkbox"
              checked={localConfig.enableDeduplication}
              onChange={(e) => setLocalConfig(prev => ({ 
                ...prev, 
                enableDeduplication: e.target.checked 
              }))}
              className="mr-2"
            />
            <span className="text-sm">启用去重</span>
          </label>
        </div>
      </div>
      
      <div>
        <label className="block text-sm font-medium mb-1">变更原因</label>
        <input
          type="text"
          value={reason}
          onChange={(e) => setReason(e.target.value)}
          placeholder="请输入配置变更原因..."
          className="w-full px-3 py-1 border rounded text-sm"
        />
      </div>
      
      <div className="flex space-x-2">
        <button
          onClick={handleApplyConfig}
          className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 text-sm"
        >
          应用配置
        </button>
        
        <select
          onChange={(e) => {
            if (e.target.value) {
              const preset = presetConfigs[e.target.value as keyof typeof presetConfigs];
              setLocalConfig(preset);
              setReason(\`应用\${e.target.value}预设配置\`);
            }
          }}
          className="px-3 py-2 border rounded text-sm"
        >
          <option value="">选择预设配置</option>
          <option value="conservative">保守模式</option>
          <option value="balanced">平衡模式</option>
          <option value="aggressive">激进模式</option>
        </select>
      </div>
    </div>
  );
};

// 组件使用示例
const ConfigurationExample: React.FC = () => {
  const { manager, state, config, stats, history } = useConfigurableErrorQueue();
  const [logs, setLogs] = useState<string[]>([]);

  const addLog = (message: string) => {
    setLogs(prev => [...prev.slice(-9), \`\${new Date().toLocaleTimeString()}: \${message}\`]);
  };

  const handleConfigChange = (newConfig: any, reason: string) => {
    manager.updateConfig(newConfig, reason);
    addLog(\`配置已更新: \${reason}\`);
  };

  const addTestErrors = () => {
    const errors = [
      { type: 'error' as const, message: 'API连接失败', source: 'NetworkService' },
      { type: 'warning' as const, message: '数据格式警告', source: 'DataValidator' },
      { type: 'info' as const, message: '用户操作完成', source: 'UserAction' },
      { type: 'error' as const, message: '权限验证失败', source: 'AuthService' },
      { type: 'warning' as const, message: '缓存即将过期', source: 'CacheManager' }
    ];
    
    errors.forEach((error, index) => {
      setTimeout(() => {
        manager.addError(error);
        addLog(\`添加测试错误: \${error.message}\`);
      }, index * 200);
    });
  };

  return (
    <div className="space-y-4">
      <div className="grid grid-cols-3 gap-4">
        <div className="bg-gray-50 p-3 rounded">
          <h4 className="font-medium mb-2">当前状态</h4>
          <div className="text-sm text-gray-700 space-y-1">
            <div>错误总数: {state.totalCount}</div>
            <div>可见错误: {state.visibleErrors.length}</div>
            <div>缓存限制: {config.maxCacheSize}</div>
            <div>显示限制: {config.maxVisibleSize}</div>
          </div>
        </div>
        
        <div className="bg-blue-50 p-3 rounded">
          <h4 className="font-medium mb-2">性能统计</h4>
          <div className="text-sm text-gray-700 space-y-1">
            <div>配置变更: {stats.configChanges}</div>
            <div>丢弃错误: {stats.errorsDropped}</div>
            <div>自动隐藏: {stats.errorsHidden}</div>
            <div>峰值队列: {stats.peakQueueSize}</div>
          </div>
        </div>
        
        <div className="bg-green-50 p-3 rounded">
          <h4 className="font-medium mb-2">配置状态</h4>
          <div className="text-sm text-gray-700 space-y-1">
            <div>自动隐藏: {config.enableAutoHide ? '启用' : '禁用'}</div>
            <div>去重机制: {config.enableDeduplication ? '启用' : '禁用'}</div>
            <div>隐藏延迟: {config.autoHideDelay}ms</div>
            <div>历史记录: {history.length}条</div>
          </div>
        </div>
      </div>
      
      <ConfigPanel config={config} onConfigChange={handleConfigChange} />
      
      <div className="flex space-x-2">
        <button
          onClick={addTestErrors}
          className="px-4 py-2 bg-purple-500 text-white rounded hover:bg-purple-600 text-sm"
        >
          添加测试错误
        </button>
        <button
          onClick={() => {
            manager.clearAll();
            addLog('清除所有错误');
          }}
          className="px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600 text-sm"
        >
          清除所有错误
        </button>
        <button
          onClick={() => {
            manager.resetStats();
            setLogs([]);
            addLog('重置统计信息');
          }}
          className="px-4 py-2 bg-gray-500 text-white rounded hover:bg-gray-600 text-sm"
        >
          重置统计
        </button>
      </div>
      
      <div className="border rounded-lg p-4">
        <h4 className="font-medium mb-3">错误显示区域</h4>
        <BasicErrorDisplay 
          errors={state.visibleErrors} 
          onRemove={(id) => {
            manager.removeError(id);
            addLog('手动移除错误');
          }} 
        />
      </div>
      
      <div className="bg-gray-50 p-3 rounded max-h-32 overflow-y-auto">
        <h4 className="font-medium mb-2">操作日志</h4>
        {logs.map((log, index) => (
          <div key={index} className="text-sm text-gray-700 font-mono">{log}</div>
        ))}
      </div>
    </div>
  );
};`,language:"typescript",highlights:[24,26,28,30,32,34,36,38,40,42,44,46,48,50,52,54,56,58,60,62,64,66,68,70,72,74,76,78,80,82,84,86,88,90,92,94,96,98,100,102,104,106,108,110,112,114,116,118,120,122,124,126,128,130,132,134,136,138,140,142,144,146,148,150,152,154,156,158,160,162,164,166,168,170,172,174,176,178,180,182,184,186,188,190,192,194,196,198,200,202,204,206,208,210,212,214,216,218,220,222,224,226,228,230,232,234,236,238,240,242,244,246,248,250,252,254,256,258,260,262,264,266,268,270,272,274,276,278,280,282,284,286,288,290,292,294,296,298,300,302,304,306,308,310,312,314,316,318,320,322,324,326,328,330,332,334,336,338,340,342,344,346,348,350,352,354,356,358,360,362,364,366,368,370,372,374,376,378,380,382,384,386,388,390,392,394,396,398,400,402,404,406,408,410,412,414,416,418,420,422,424,426,428,430,432,434,436,438,440,442,444,446,448,450]},highlights:[24,26,28,30,32,34,36,38,40,42,44,46,48,50,52,54,56,58,60,62,64,66,68,70,72,74,76,78,80,82,84,86,88,90,92,94,96,98,100,102,104,106,108,110,112,114,116,118,120,122,124,126,128,130,132,134,136,138,140,142,144,146,148,150,152,154,156,158,160,162,164,166,168,170,172,174,176,178,180,182,184,186,188,190,192,194,196,198,200,202,204,206,208,210,212,214,216,218,220,222,224,226,228,230,232,234,236,238,240,242,244,246,248,250,252,254,256,258,260,262,264,266,268,270,272,274,276,278,280,282,284,286,288,290,292,294,296,298,300,302,304,306,308,310,312,314,316,318,320,322,324,326,328,330,332,334,336,338,340,342,344,346,348,350,352,354,356,358,360,362,364,366,368,370,372,374,376,378,380,382,384,386,388,390,392,394,396,398,400,402,404,406,408,410,412,414,416,418,420,422,424,426,428,430,432,434,436,438,440,442,444,446,448,450]},{title:"实际应用场景",component:e.jsx(H,{}),description:"演示在真实应用中的错误队列管理",observationPoints:["API请求错误的统一处理和显示","表单验证错误的批量展示","系统监控警告的集中管理","不同场景下的错误优先级排序"],keyPoints:["API错误使用error类型，优先级最高","验证错误使用warning类型，批量显示","系统警告提供详细的监控信息","用户操作使用info类型，提供反馈"],commonTraps:["所有错误都使用相同类型","错误消息缺乏上下文信息","没有区分用户错误和系统错误"],solutions:["根据错误性质选择合适的类型","在错误详情中包含相关上下文","为不同来源的错误提供清晰标识"],importantTips:["API错误应该提供请求相关信息","验证错误要指明具体的字段问题","系统警告需要包含具体的指标数据"],codeExample:{title:"实际应用场景错误队列管理实现",code:`// 实际应用场景错误队列管理器
class RealWorldErrorQueueManager {
  private state: ErrorQueueState = {
    errors: [],
    visibleErrors: [],
    totalCount: 0
  };
  private listeners = new Set<(state: ErrorQueueState) => void>();
  private config = {
    maxCacheSize: 8,
    maxVisibleSize: 4,
    autoHideDelay: 6000,
    enableAutoHide: true,
    enableDeduplication: true,
    enableRetry: true,
    enableSolutions: true
  };
  private autoHideTimer = new Map<string, NodeJS.Timeout>();
  private retryAttempts = new Map<string, number>();
  private errorCategories = {
    api: { priority: 3, icon: '🌐', color: 'red', retryable: true },
    validation: { priority: 2, icon: '⚠️', color: 'orange', retryable: false },
    system: { priority: 3, icon: '🔧', color: 'red', retryable: false },
    network: { priority: 3, icon: '📡', color: 'red', retryable: true },
    auth: { priority: 3, icon: '🔒', color: 'red', retryable: false },
    warning: { priority: 1, icon: '⚡', color: 'yellow', retryable: false },
    info: { priority: 0, icon: 'ℹ️', color: 'blue', retryable: false }
  };
  private solutionTemplates = {
    'API连接失败': '请检查网络连接，或稍后重试',
    '权限验证失败': '请重新登录或联系管理员',
    '数据格式错误': '请检查输入数据的格式',
    '服务器内部错误': '服务器暂时不可用，请稍后重试',
    '网络超时': '网络连接超时，请检查网络状态',
    '资源不存在': '请求的资源不存在或已被删除',
    '参数验证失败': '请检查必填字段和数据格式'
  };
  private statistics = {
    totalErrors: 0,
    errorsByCategory: {} as Record<string, number>,
    errorsBySource: {} as Record<string, number>,
    retrySuccessRate: 0,
    averageResolutionTime: 0,
    userActions: {
      dismissed: 0,
      retried: 0,
      ignored: 0
    }
  };

  constructor(initialConfig?: Partial<typeof this.config>) {
    if (initialConfig) {
      this.config = { ...this.config, ...initialConfig };
    }
  }

  // 添加错误（增强版）
  addError(error: Omit<ErrorMessage, 'id' | 'timestamp' | 'count'> & {
    category?: keyof typeof this.errorCategories;
    solution?: string;
    retryAction?: () => Promise<void>;
    metadata?: Record<string, any>;
  }) {
    const category = error.category || this.detectCategory(error.message, error.source);
    const categoryInfo = this.errorCategories[category] || this.errorCategories.info;
    
    let processedError: ErrorMessage & {
      category: string;
      solution?: string;
      retryAction?: () => Promise<void>;
      metadata?: Record<string, any>;
      canRetry: boolean;
      priority: number;
      icon: string;
      color: string;
    };
    
    if (this.config.enableDeduplication) {
      const errorKey = this.generateErrorKey(error.message, error.type, error.source);
      const existingError = this.state.errors.find(e => 
        this.generateErrorKey(e.message, e.type, e.source) === errorKey
      ) as any;
      
      if (existingError) {
        existingError.count += 1;
        existingError.timestamp = Date.now();
        this.resetAutoHideTimer(existingError.id);
        processedError = existingError;
      } else {
        processedError = this.createEnhancedError(error, category, categoryInfo);
      }
    } else {
      processedError = this.createEnhancedError(error, category, categoryInfo);
    }
    
    // 更新统计信息
    this.updateStatistics(processedError);
    
    this.updateVisibleErrors();
    this.notify();
    
    return processedError;
  }

  // 创建增强错误对象
  private createEnhancedError(error: any, category: string, categoryInfo: any) {
    const enhancedError = {
      id: \`error_\${Date.now()}_\${Math.random().toString(36).substr(2, 9)}\`,
      ...error,
      timestamp: Date.now(),
      count: 1,
      category,
      solution: error.solution || this.generateSolution(error.message),
      canRetry: categoryInfo.retryable && this.config.enableRetry,
      priority: categoryInfo.priority,
      icon: categoryInfo.icon,
      color: categoryInfo.color,
      metadata: error.metadata || {}
    };
    
    this.state.errors.push(enhancedError);
    
    // 限制缓存大小
    if (this.state.errors.length > this.config.maxCacheSize) {
      const removedError = this.state.errors.shift()!;
      this.clearAutoHideTimer(removedError.id);
    }
    
    // 设置自动隐藏定时器
    if (this.config.enableAutoHide) {
      this.setAutoHideTimer(enhancedError.id);
    }
    
    return enhancedError;
  }

  // 检测错误类别
  private detectCategory(message: string, source?: string): keyof typeof this.errorCategories {
    const lowerMessage = message.toLowerCase();
    const lowerSource = (source || '').toLowerCase();
    
    if (lowerMessage.includes('api') || lowerMessage.includes('请求') || lowerSource.includes('api')) {
      return 'api';
    }
    if (lowerMessage.includes('网络') || lowerMessage.includes('连接') || lowerMessage.includes('timeout')) {
      return 'network';
    }
    if (lowerMessage.includes('权限') || lowerMessage.includes('认证') || lowerMessage.includes('登录')) {
      return 'auth';
    }
    if (lowerMessage.includes('验证') || lowerMessage.includes('格式') || lowerSource.includes('validator')) {
      return 'validation';
    }
    if (lowerMessage.includes('系统') || lowerMessage.includes('服务器') || lowerSource.includes('system')) {
      return 'system';
    }
    if (lowerMessage.includes('警告')) {
      return 'warning';
    }
    
    return 'info';
  }

  // 生成解决方案
  private generateSolution(message: string): string {
    for (const [key, solution] of Object.entries(this.solutionTemplates)) {
      if (message.includes(key)) {
        return solution;
      }
    }
    
    // 基于错误类型生成通用解决方案
    const lowerMessage = message.toLowerCase();
    if (lowerMessage.includes('网络') || lowerMessage.includes('连接')) {
      return '请检查网络连接状态，确保网络畅通';
    }
    if (lowerMessage.includes('权限') || lowerMessage.includes('认证')) {
      return '请检查登录状态或联系管理员获取权限';
    }
    if (lowerMessage.includes('验证') || lowerMessage.includes('格式')) {
      return '请检查输入数据的格式和完整性';
    }
    
    return '如问题持续存在，请联系技术支持';
  }

  // 重试错误
  async retryError(errorId: string): Promise<boolean> {
    const error = this.state.errors.find(e => e.id === errorId) as any;
    if (!error || !error.canRetry || !error.retryAction) {
      return false;
    }
    
    const currentAttempts = this.retryAttempts.get(errorId) || 0;
    if (currentAttempts >= 3) {
      return false; // 最多重试3次
    }
    
    try {
      this.retryAttempts.set(errorId, currentAttempts + 1);
      await error.retryAction();
      
      // 重试成功，移除错误
      this.removeError(errorId);
      this.statistics.userActions.retried += 1;
      this.updateRetrySuccessRate(true);
      
      return true;
    } catch (retryError) {
      // 重试失败，更新错误信息
      error.message = \`重试失败 (\${currentAttempts + 1}/3): \${error.message}\`;
      error.metadata.retryCount = currentAttempts + 1;
      this.updateRetrySuccessRate(false);
      this.notify();
      
      return false;
    }
  }

  // 更新重试成功率
  private updateRetrySuccessRate(success: boolean) {
    const totalRetries = this.statistics.userActions.retried + (success ? 1 : 0);
    const successfulRetries = success ? this.statistics.userActions.retried + 1 : this.statistics.userActions.retried;
    this.statistics.retrySuccessRate = totalRetries > 0 ? (successfulRetries / totalRetries) * 100 : 0;
  }

  // 更新统计信息
  private updateStatistics(error: any) {
    this.statistics.totalErrors += 1;
    
    // 按类别统计
    const category = error.category || 'unknown';
    this.statistics.errorsByCategory[category] = (this.statistics.errorsByCategory[category] || 0) + 1;
    
    // 按来源统计
    const source = error.source || 'unknown';
    this.statistics.errorsBySource[source] = (this.statistics.errorsBySource[source] || 0) + 1;
  }

  // 用户操作：忽略错误
  ignoreError(errorId: string) {
    this.removeError(errorId);
    this.statistics.userActions.ignored += 1;
  }

  // 用户操作：关闭错误
  dismissError(errorId: string) {
    this.removeError(errorId);
    this.statistics.userActions.dismissed += 1;
  }

  // 生成错误去重键
  private generateErrorKey(message: string, type: string, source?: string): string {
    return \`\${type}:\${message}:\${source || 'unknown'}\`;
  }

  // 更新可见错误列表（增强版）
  private updateVisibleErrors() {
    const sortedErrors = [...this.state.errors].sort((a: any, b: any) => {
      // 首先按优先级排序
      if (a.priority !== b.priority) {
        return b.priority - a.priority;
      }
      
      // 然后按类型排序
      const typeOrder = { error: 3, warning: 2, info: 1 };
      const aPriority = typeOrder[a.type] || 0;
      const bPriority = typeOrder[b.type] || 0;
      
      if (aPriority !== bPriority) {
        return bPriority - aPriority;
      }
      
      // 最后按时间排序
      return b.timestamp - a.timestamp;
    });
    
    this.state.visibleErrors = sortedErrors.slice(0, this.config.maxVisibleSize);
    this.state.totalCount = this.state.errors.length;
  }

  // 设置自动隐藏定时器
  private setAutoHideTimer(errorId: string) {
    if (!this.config.enableAutoHide) return;
    
    const timer = setTimeout(() => {
      this.removeError(errorId);
    }, this.config.autoHideDelay);
    
    this.autoHideTimer.set(errorId, timer);
  }

  // 重置自动隐藏定时器
  private resetAutoHideTimer(errorId: string) {
    this.clearAutoHideTimer(errorId);
    this.setAutoHideTimer(errorId);
  }

  // 清除自动隐藏定时器
  private clearAutoHideTimer(errorId: string) {
    const timer = this.autoHideTimer.get(errorId);
    if (timer) {
      clearTimeout(timer);
      this.autoHideTimer.delete(errorId);
    }
  }

  // 移除错误
  removeError(errorId: string) {
    const index = this.state.errors.findIndex(e => e.id === errorId);
    if (index !== -1) {
      this.state.errors.splice(index, 1);
      this.clearAutoHideTimer(errorId);
      this.retryAttempts.delete(errorId);
      this.updateVisibleErrors();
      this.notify();
    }
  }

  // 清除所有错误
  clearAll() {
    this.state.errors.forEach(error => {
      this.clearAutoHideTimer(error.id);
    });
    
    this.state.errors = [];
    this.state.visibleErrors = [];
    this.state.totalCount = 0;
    this.autoHideTimer.clear();
    this.retryAttempts.clear();
    this.notify();
  }

  // 获取统计信息
  getStatistics() {
    return { ...this.statistics };
  }

  // 获取状态
  getState(): ErrorQueueState {
    return { ...this.state };
  }

  // 订阅状态变化
  subscribe(listener: (state: ErrorQueueState) => void) {
    this.listeners.add(listener);
    return () => this.listeners.delete(listener);
  }

  // 通知监听器
  private notify() {
    this.listeners.forEach(listener => listener(this.state));
  }

  // 重置统计信息
  resetStatistics() {
    this.statistics = {
      totalErrors: 0,
      errorsByCategory: {},
      errorsBySource: {},
      retrySuccessRate: 0,
      averageResolutionTime: 0,
      userActions: {
        dismissed: 0,
        retried: 0,
        ignored: 0
      }
    };
    this.notify();
  }
}

// React Hook 封装
const useRealWorldErrorQueue = (initialConfig?: any) => {
  const [manager] = useState(() => new RealWorldErrorQueueManager(initialConfig));
  const [state, setState] = useState(manager.getState());
  const [statistics, setStatistics] = useState(manager.getStatistics());

  useEffect(() => {
    const unsubscribe = manager.subscribe(() => {
      setState(manager.getState());
      setStatistics(manager.getStatistics());
    });
    return unsubscribe;
  }, [manager]);

  return { manager, state, statistics };
};

// 增强错误显示组件
const EnhancedErrorDisplay: React.FC<{
  errors: any[];
  onRetry: (id: string) => void;
  onDismiss: (id: string) => void;
  onIgnore: (id: string) => void;
}> = ({ errors, onRetry, onDismiss, onIgnore }) => {
  if (errors.length === 0) {
    return (
      <div className="text-center py-8 text-gray-500">
        <div className="text-4xl mb-2">✨</div>
        <div>暂无错误信息</div>
      </div>
    );
  }

  return (
    <div className="space-y-3">
      {errors.map((error) => (
        <div
          key={error.id}
          className={\`border-l-4 p-4 rounded-r-lg bg-\${error.color}-50 border-\${error.color}-400\`}
        >
          <div className="flex items-start justify-between">
            <div className="flex items-start space-x-3 flex-1">
              <span className="text-xl">{error.icon}</span>
              <div className="flex-1">
                <div className="flex items-center space-x-2 mb-1">
                  <span className={\`px-2 py-1 text-xs rounded bg-\${error.color}-100 text-\${error.color}-800\`}>
                    {error.category}
                  </span>
                  <span className={\`px-2 py-1 text-xs rounded bg-gray-100 text-gray-600\`}>
                    {error.type}
                  </span>
                  {error.count > 1 && (
                    <span className="px-2 py-1 text-xs rounded bg-blue-100 text-blue-600">
                      ×{error.count}
                    </span>
                  )}
                </div>
                <div className="font-medium text-gray-900 mb-1">{error.message}</div>
                {error.solution && (
                  <div className="text-sm text-gray-600 mb-2">
                    💡 {error.solution}
                  </div>
                )}
                <div className="flex items-center space-x-4 text-xs text-gray-500">
                  <span>来源: {error.source || '未知'}</span>
                  <span>时间: {new Date(error.timestamp).toLocaleTimeString()}</span>
                  {error.metadata?.retryCount && (
                    <span>重试: {error.metadata.retryCount}/3</span>
                  )}
                </div>
              </div>
            </div>
            <div className="flex space-x-2 ml-4">
              {error.canRetry && (
                <button
                  onClick={() => onRetry(error.id)}
                  className="px-3 py-1 text-xs bg-blue-500 text-white rounded hover:bg-blue-600"
                  title="重试操作"
                >
                  🔄 重试
                </button>
              )}
              <button
                onClick={() => onIgnore(error.id)}
                className="px-3 py-1 text-xs bg-gray-500 text-white rounded hover:bg-gray-600"
                title="忽略此错误"
              >
                🙈 忽略
              </button>
              <button
                onClick={() => onDismiss(error.id)}
                className="px-3 py-1 text-xs bg-red-500 text-white rounded hover:bg-red-600"
                title="关闭错误"
              >
                ✕ 关闭
              </button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

// 统计面板组件
const StatisticsPanel: React.FC<{ statistics: any }> = ({ statistics }) => {
  const categoryEntries = Object.entries(statistics.errorsByCategory);
  const sourceEntries = Object.entries(statistics.errorsBySource);
  
  return (
    <div className="bg-white border rounded-lg p-4">
      <h4 className="font-medium mb-3">错误统计</h4>
      
      <div className="grid grid-cols-4 gap-4 mb-4">
        <div className="bg-blue-50 p-3 rounded text-center">
          <div className="text-2xl font-bold text-blue-600">{statistics.totalErrors}</div>
          <div className="text-sm text-gray-600">总错误数</div>
        </div>
        <div className="bg-green-50 p-3 rounded text-center">
          <div className="text-2xl font-bold text-green-600">{statistics.retrySuccessRate.toFixed(1)}%</div>
          <div className="text-sm text-gray-600">重试成功率</div>
        </div>
        <div className="bg-orange-50 p-3 rounded text-center">
          <div className="text-2xl font-bold text-orange-600">{statistics.userActions.retried}</div>
          <div className="text-sm text-gray-600">重试次数</div>
        </div>
        <div className="bg-red-50 p-3 rounded text-center">
          <div className="text-2xl font-bold text-red-600">{statistics.userActions.dismissed}</div>
          <div className="text-sm text-gray-600">关闭次数</div>
        </div>
      </div>
      
      <div className="grid grid-cols-2 gap-4">
        <div>
          <h5 className="font-medium mb-2">错误类别分布</h5>
          <div className="space-y-1">
            {categoryEntries.map(([category, count]) => (
              <div key={category} className="flex justify-between text-sm">
                <span className="capitalize">{category}</span>
                <span className="font-medium">{count}</span>
              </div>
            ))}
          </div>
        </div>
        
        <div>
          <h5 className="font-medium mb-2">错误来源分布</h5>
          <div className="space-y-1">
            {sourceEntries.slice(0, 5).map(([source, count]) => (
              <div key={source} className="flex justify-between text-sm">
                <span className="truncate">{source}</span>
                <span className="font-medium">{count}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

// 组件使用示例
const RealWorldExample: React.FC = () => {
  const { manager, state, statistics } = useRealWorldErrorQueue();
  const [logs, setLogs] = useState<string[]>([]);

  const addLog = (message: string) => {
    setLogs(prev => [...prev.slice(-9), \`\${new Date().toLocaleTimeString()}: \${message}\`]);
  };

  const simulateApiError = () => {
    manager.addError({
      type: 'error',
      message: 'API连接失败',
      source: 'UserService',
      category: 'api',
      retryAction: async () => {
        // 模拟API重试
        await new Promise(resolve => setTimeout(resolve, 1000));
        if (Math.random() > 0.3) {
          throw new Error('重试失败');
        }
      }
    });
    addLog('模拟API错误');
  };

  const simulateValidationError = () => {
    manager.addError({
      type: 'warning',
      message: '用户名格式不正确',
      source: 'FormValidator',
      category: 'validation',
      solution: '用户名应为3-20个字符，只能包含字母、数字和下划线'
    });
    addLog('模拟表单验证错误');
  };

  const simulateSystemWarning = () => {
    manager.addError({
      type: 'info',
      message: '系统将在5分钟后进行维护',
      source: 'SystemMonitor',
      category: 'system',
      solution: '请保存当前工作，系统维护期间服务将暂时不可用'
    });
    addLog('模拟系统警告');
  };

  const handleRetry = async (errorId: string) => {
    addLog('尝试重试操作...');
    const success = await manager.retryError(errorId);
    addLog(success ? '重试成功' : '重试失败');
  };

  const handleDismiss = (errorId: string) => {
    manager.dismissError(errorId);
    addLog('错误已关闭');
  };

  const handleIgnore = (errorId: string) => {
    manager.ignoreError(errorId);
    addLog('错误已忽略');
  };

  return (
    <div className="space-y-4">
      <div className="flex space-x-2">
        <button
          onClick={simulateApiError}
          className="px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600 text-sm"
        >
          🌐 模拟API错误
        </button>
        <button
          onClick={simulateValidationError}
          className="px-4 py-2 bg-orange-500 text-white rounded hover:bg-orange-600 text-sm"
        >
          ⚠️ 模拟验证错误
        </button>
        <button
          onClick={simulateSystemWarning}
          className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 text-sm"
        >
          🔧 模拟系统警告
        </button>
        <button
          onClick={() => {
            manager.clearAll();
            addLog('清除所有错误');
          }}
          className="px-4 py-2 bg-gray-500 text-white rounded hover:bg-gray-600 text-sm"
        >
          清除所有
        </button>
        <button
          onClick={() => {
            manager.resetStatistics();
            setLogs([]);
            addLog('重置统计信息');
          }}
          className="px-4 py-2 bg-purple-500 text-white rounded hover:bg-purple-600 text-sm"
        >
          重置统计
        </button>
      </div>
      
      <StatisticsPanel statistics={statistics} />
      
      <div className="border rounded-lg p-4">
        <h4 className="font-medium mb-3">错误显示区域 ({state.visibleErrors.length}/{state.totalCount})</h4>
        <EnhancedErrorDisplay 
          errors={state.visibleErrors}
          onRetry={handleRetry}
          onDismiss={handleDismiss}
          onIgnore={handleIgnore}
        />
      </div>
      
      <div className="bg-gray-50 p-3 rounded max-h-32 overflow-y-auto">
        <h4 className="font-medium mb-2">操作日志</h4>
        {logs.map((log, index) => (
          <div key={index} className="text-sm text-gray-700 font-mono">{log}</div>
        ))}
      </div>
    </div>
  );
};`,language:"typescript",highlights:[18,20,22,24,26,28,30,32,34,36,38,40,42,44,46,48,50,52,54,56,58,60,62,64,66,68,70,72,74,76,78,80,82,84,86,88,90,92,94,96,98,100,102,104,106,108,110,112,114,116,118,120,122,124,126,128,130,132,134,136,138,140,142,144,146,148,150,152,154,156,158,160,162,164,166,168,170,172,174,176,178,180,182,184,186,188,190,192,194,196,198,200,202,204,206,208,210,212,214,216,218,220,222,224,226,228,230,232,234,236,238,240,242,244,246,248,250,252,254,256,258,260,262,264,266,268,270,272,274,276,278,280,282,284,286,288,290,292,294,296,298,300,302,304,306,308,310,312,314,316,318,320,322,324,326,328,330,332,334,336,338,340,342,344,346,348,350,352,354,356,358,360,362,364,366,368,370,372,374,376,378,380,382,384,386,388,390,392,394,396,398,400,402,404,406,408,410,412,414,416,418,420,422,424,426,428,430,432,434,436,438,440,442,444,446,448,450,452,454,456,458,460,462,464,466,468,470,472,474,476,478,480,482,484,486,488,490,492,494,496,498,500,502,504,506,508,510,512,514,516,518,520,522,524,526,528,530,532,534,536,538,540,542,544,546,548,550,552,554,556,558,560,562,564,566,568,570,572,574,576,578,580,582,584,586,588,590,592,594,596,598,600,602,604,606,608,610,612,614,616,618,620,622,624,626,628,630,632,634,636,638,640,642,644,646,648,650,652,654,656,658,660,662,664,666,668,670,672,674,676,678,680,682,684,686,688,690,692,694,696,698,700]},highlights:[18,20,22,24,26,28,30,32,34,36,38,40,42,44,46,48,50,52,54,56,58,60,62,64,66,68,70,72,74,76,78,80,82,84,86,88,90,92,94,96,98,100,102,104,106,108,110,112,114,116,118,120,122,124,126,128,130,132,134,136,138,140,142,144,146,148,150,152,154,156,158,160,162,164,166,168,170,172,174,176,178,180,182,184,186,188,190,192,194,196,198,200,202,204,206,208,210,212,214,216,218,220,222,224,226,228,230,232,234,236,238,240,242,244,246,248,250,252,254,256,258,260,262,264,266,268,270,272,274,276,278,280,282,284,286,288,290,292,294,296,298,300,302,304,306,308,310,312,314,316,318,320,322,324,326,328,330,332,334,336,338,340,342,344,346,348,350,352,354,356,358,360,362,364,366,368,370,372,374,376,378,380,382,384,386,388,390,392,394,396,398,400,402,404,406,408,410,412,414,416,418,420,422,424,426,428,430,432,434,436,438,440,442,444,446,448,450,452,454,456,458,460,462,464,466,468,470,472,474,476,478,480,482,484,486,488,490,492,494,496,498,500,502,504,506,508,510,512,514,516,518,520,522,524,526,528,530,532,534,536,538,540,542,544,546,548,550,552,554,556,558,560,562,564,566,568,570,572,574,576,578,580,582,584,586,588,590,592,594,596,598,600,602,604,606,608,610,612,614,616,618,620,622,624,626,628,630,632,634,636,638,640,642,644,646,648,650,652,654,656,658,660,662,664,666,668,670,672,674,676,678,680,682,684,686,688,690,692,694,696,698,700]}],tutorial:{concepts:["错误队列管理是提升用户体验的重要手段","去重机制避免重复错误消息的干扰","优先级排序确保重要错误优先显示","队列限制保持界面整洁和性能","自动清理减少用户的手动操作负担"],steps:["设计错误消息的数据结构和类型","实现错误去重的键值生成逻辑","添加队列限制和优先级排序","实现自动清理和手动清理功能","创建React Context和Hook进行状态管理","开发错误显示组件和交互功能"],tips:["使用消息内容、类型和来源生成去重键","合理设置缓存和显示数量的默认值","提供清晰的错误类型和来源信息","考虑错误消息的用户友好性","实现灵活的配置管理机制"]},interview:{questions:[{question:"如何实现错误消息的去重机制？",answer:"去重机制通过生成唯一键实现：1）组合错误消息内容、类型和来源生成键值；2）新错误到达时检查是否存在相同键值；3）如果存在则增加重复计数并更新时间戳；4）如果不存在则创建新的错误记录。这样可以避免相同错误的重复显示，同时保留重复次数信息。"},{question:"错误队列的优先级排序策略是什么？",answer:"优先级排序策略：1）按错误类型排序：error > warning > info；2）相同类型按时间戳排序，最新的在前；3）显示时优先展示高优先级错误；4）队列满时优先移除低优先级的旧错误。这确保了重要错误能够及时被用户看到。"},{question:"如何设计错误队列的容量限制？",answer:"容量限制设计考虑：1）缓存容量：平衡内存使用和错误保留，推荐6-10条；2）显示容量：考虑界面美观和用户体验，推荐3-5条；3）超出限制时的处理：移除最旧的低优先级错误；4）提供配置接口允许根据应用需求调整；5）考虑不同设备屏幕尺寸的适配。"},{question:"错误队列如何与React应用集成？",answer:"集成方案：1）使用React Context提供全局错误状态；2）创建自定义Hook封装错误操作；3）实现Provider组件管理错误队列；4）使用观察者模式监听状态变化；5）提供统一的错误添加和清理API；6）支持组件级别的错误处理和显示定制。"}],keyPoints:["错误去重机制避免重复消息干扰","优先级排序确保重要错误优先显示","队列容量限制保持性能和用户体验","自动清理机制减少用户操作负担","React Context实现全局错误状态管理"]},bestPractices:{dos:["根据错误严重程度设置正确的类型","提供清晰的错误来源和上下文信息","使用用户友好的错误消息描述","合理设置队列的缓存和显示限制","实现灵活的配置管理机制","考虑不同设备和场景的适配"],donts:["不要所有错误都使用相同类型","不要显示过于技术化的错误信息","不要忽略错误的上下文和来源","不要设置过小的队列容量限制","不要忘记实现错误的清理机制"],patterns:["队列模式：使用FIFO队列管理错误消息","去重模式：基于键值合并相同错误","优先级模式：按重要程度排序显示","观察者模式：监听错误状态变化","配置模式：提供灵活的参数设置"]}}),D=()=>e.jsx(N,{children:e.jsxs("div",{className:"relative",children:[e.jsx(C,{position:"top-right",showCount:!0}),e.jsx(T,{})]})});export{D as default};
