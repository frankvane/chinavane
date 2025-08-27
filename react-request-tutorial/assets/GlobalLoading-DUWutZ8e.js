var w=Object.defineProperty;var T=(r,t,a)=>t in r?w(r,t,{enumerable:!0,configurable:!0,writable:!0,value:a}):r[t]=a;var x=(r,t,a)=>T(r,typeof t!="symbol"?t+"":t,a);import{j as s,r as p}from"./index-Cnne2xOM.js";import{C as L}from"./ComponentTemplate-iqsAHbUA.js";class N{constructor(){x(this,"state",{isLoading:!1,loadingCount:0,loadingTasks:new Map});x(this,"listeners",new Set);x(this,"debounceTimer",null);x(this,"minLoadingDuration",300)}subscribe(t){return this.listeners.add(t),()=>this.listeners.delete(t)}notify(){this.listeners.forEach(t=>t({...this.state}))}startLoading(t,a={}){const c={id:t,name:a.name||t,startTime:Date.now(),minDuration:a.minDuration||this.minLoadingDuration,priority:a.priority||"medium"};return this.state.loadingTasks.set(t,c),this.state.loadingCount++,this.state.isLoading=!0,this.notify(),t}async endLoading(t){const a=this.state.loadingTasks.get(t);if(!a)return;const c=Date.now()-a.startTime,u=Math.max(0,(a.minDuration||0)-c);u>0&&await new Promise(l=>setTimeout(l,u)),this.state.loadingTasks.delete(t),this.state.loadingCount=Math.max(0,this.state.loadingCount-1),this.state.isLoading=this.state.loadingCount>0,this.notify()}clearAll(){this.state.loadingTasks.clear(),this.state.loadingCount=0,this.state.isLoading=!1,this.notify()}getState(){return{...this.state}}getHighPriorityCount(){return Array.from(this.state.loadingTasks.values()).filter(t=>t.priority==="high").length}debouncedNotify(){this.debounceTimer&&clearTimeout(this.debounceTimer),this.debounceTimer=setTimeout(()=>{this.notify()},50)}}const h=new N,b=p.createContext(null),j=({children:r})=>{const[t,a]=p.useState(h.getState());return p.useEffect(()=>h.subscribe(a),[]),s.jsx(b.Provider,{value:{state:t,startLoading:h.startLoading.bind(h),endLoading:h.endLoading.bind(h),clearAll:h.clearAll.bind(h)},children:r})},k=()=>{const r=p.useContext(b);if(!r)throw new Error("useGlobalLoading must be used within GlobalLoadingProvider");return r},D=({position:r="top",showTaskCount:t=!0,showTaskNames:a=!1})=>{const{state:c}=k();if(!c.isLoading)return null;const u={top:"fixed top-4 left-1/2 transform -translate-x-1/2 z-50",center:"fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-50",bottom:"fixed bottom-4 left-1/2 transform -translate-x-1/2 z-50"},l=Array.from(c.loadingTasks.values()),g=l.filter(e=>e.priority==="high");return s.jsxs("div",{className:`${u[r]} bg-white rounded-lg shadow-lg border p-4 min-w-64`,children:[s.jsxs("div",{className:"flex items-center space-x-3",children:[s.jsx("div",{className:"animate-spin rounded-full h-6 w-6 border-b-2 border-blue-500"}),s.jsxs("div",{children:[s.jsx("div",{className:"font-medium text-gray-900",children:g.length>0?"重要任务加载中...":"加载中..."}),t&&s.jsxs("div",{className:"text-sm text-gray-500",children:[c.loadingCount," 个任务进行中"]})]})]}),a&&l.length>0&&s.jsxs("div",{className:"mt-3 space-y-1",children:[l.slice(0,3).map(e=>s.jsxs("div",{className:"text-xs text-gray-600 flex items-center",children:[s.jsx("div",{className:`w-2 h-2 rounded-full mr-2 ${e.priority==="high"?"bg-red-400":e.priority==="medium"?"bg-yellow-400":"bg-green-400"}`}),e.name]},e.id)),l.length>3&&s.jsxs("div",{className:"text-xs text-gray-500",children:["还有 ",l.length-3," 个任务..."]})]})]})},C=()=>{const{state:r,startLoading:t,endLoading:a,clearAll:c}=k(),[u,l]=p.useState([]),g=o=>{l(i=>[...i.slice(-9),`${new Date().toLocaleTimeString()}: ${o}`])},e=async(o,i,n="medium")=>{const d=`task-${Date.now()}-${Math.random().toString(36).substr(2,9)}`;g(`开始任务: ${o} (${n}优先级)`),t(d,{name:o,priority:n,minDuration:300}),setTimeout(async()=>{await a(d),g(`完成任务: ${o}`)},i)},y=()=>{g("开始多个并发任务"),e("数据获取",2e3,"high"),e("图片加载",3e3,"medium"),e("统计上报",1500,"low")},m=()=>{g("测试防闪烁机制 (快速任务)"),e("快速任务1",100,"medium"),e("快速任务2",150,"medium")};return s.jsxs("div",{className:"space-y-4",children:[s.jsxs("div",{className:"grid grid-cols-2 gap-4",children:[s.jsxs("div",{className:"space-y-2",children:[s.jsx("h4",{className:"font-medium",children:"单个任务测试"}),s.jsxs("div",{className:"space-y-2",children:[s.jsx("button",{onClick:()=>e("API请求",2e3,"high"),className:"w-full px-3 py-2 bg-red-500 text-white rounded hover:bg-red-600 text-sm",children:"高优先级任务 (2s)"}),s.jsx("button",{onClick:()=>e("数据处理",1500,"medium"),className:"w-full px-3 py-2 bg-yellow-500 text-white rounded hover:bg-yellow-600 text-sm",children:"中优先级任务 (1.5s)"}),s.jsx("button",{onClick:()=>e("后台同步",1e3,"low"),className:"w-full px-3 py-2 bg-green-500 text-white rounded hover:bg-green-600 text-sm",children:"低优先级任务 (1s)"})]})]}),s.jsxs("div",{className:"space-y-2",children:[s.jsx("h4",{className:"font-medium",children:"批量任务测试"}),s.jsxs("div",{className:"space-y-2",children:[s.jsx("button",{onClick:y,className:"w-full px-3 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 text-sm",children:"并发多任务"}),s.jsx("button",{onClick:m,className:"w-full px-3 py-2 bg-purple-500 text-white rounded hover:bg-purple-600 text-sm",children:"快速任务 (防闪烁)"}),s.jsx("button",{onClick:c,className:"w-full px-3 py-2 bg-gray-500 text-white rounded hover:bg-gray-600 text-sm",children:"清除所有任务"})]})]})]}),s.jsxs("div",{className:"bg-blue-50 p-3 rounded",children:[s.jsx("h4",{className:"font-medium mb-2",children:"当前状态"}),s.jsxs("div",{className:"text-sm text-gray-700 space-y-1",children:[s.jsxs("div",{children:["加载状态: ",r.isLoading?"加载中":"空闲"]}),s.jsxs("div",{children:["任务数量: ",r.loadingCount]}),s.jsxs("div",{children:["高优先级任务: ",h.getHighPriorityCount()]})]})]}),s.jsxs("div",{className:"bg-gray-50 p-3 rounded max-h-40 overflow-y-auto",children:[s.jsx("h4",{className:"font-medium mb-2",children:"操作日志"}),u.map((o,i)=>s.jsx("div",{className:"text-sm text-gray-700 font-mono",children:o},i))]})]})},I=()=>{const{state:r,startLoading:t,endLoading:a}=k(),[c,u]=p.useState([]),[l,g]=p.useState(300),e=m=>{u(o=>[...o.slice(-9),`${new Date().toLocaleTimeString()}: ${m}`])},y=async m=>{const o=`flicker-test-${Date.now()}`,i=Date.now();e(`开始 ${m}ms 任务 (最小显示: ${l}ms)`),t(o,{name:`${m}ms任务`,minDuration:l,priority:"medium"}),setTimeout(async()=>{await a(o);const n=Date.now()-i;e(`任务完成，实际显示时间: ${n}ms`)},m)};return s.jsxs("div",{className:"space-y-4",children:[s.jsxs("div",{className:"space-y-2",children:[s.jsx("h4",{className:"font-medium",children:"最小显示时间设置"}),s.jsxs("div",{className:"flex items-center space-x-4",children:[s.jsx("label",{className:"text-sm",children:"最小时间:"}),s.jsxs("select",{value:l,onChange:m=>g(Number(m.target.value)),className:"px-2 py-1 border rounded",children:[s.jsx("option",{value:0,children:"0ms (无防闪烁)"}),s.jsx("option",{value:200,children:"200ms"}),s.jsx("option",{value:300,children:"300ms (推荐)"}),s.jsx("option",{value:500,children:"500ms"}),s.jsx("option",{value:1e3,children:"1000ms"})]})]})]}),s.jsxs("div",{className:"space-y-2",children:[s.jsx("h4",{className:"font-medium",children:"闪烁测试"}),s.jsxs("div",{className:"grid grid-cols-3 gap-2",children:[s.jsx("button",{onClick:()=>y(50),className:"px-3 py-2 bg-red-500 text-white rounded hover:bg-red-600 text-sm",children:"50ms 任务"}),s.jsx("button",{onClick:()=>y(150),className:"px-3 py-2 bg-orange-500 text-white rounded hover:bg-orange-600 text-sm",children:"150ms 任务"}),s.jsx("button",{onClick:()=>y(400),className:"px-3 py-2 bg-green-500 text-white rounded hover:bg-green-600 text-sm",children:"400ms 任务"})]})]}),s.jsxs("div",{className:"bg-yellow-50 p-3 rounded",children:[s.jsx("h4",{className:"font-medium mb-2",children:"防闪烁原理"}),s.jsxs("div",{className:"text-sm text-gray-700 space-y-1",children:[s.jsx("div",{children:"• 当任务执行时间 < 最小显示时间时，会延迟隐藏加载指示器"}),s.jsx("div",{children:"• 这样可以避免加载指示器快速出现和消失造成的闪烁"}),s.jsx("div",{children:"• 推荐设置为 300ms，既能防闪烁又不会让用户感觉卡顿"})]})]}),s.jsxs("div",{className:"bg-gray-50 p-3 rounded max-h-40 overflow-y-auto",children:[s.jsx("h4",{className:"font-medium mb-2",children:"测试日志"}),c.map((m,o)=>s.jsx("div",{className:"text-sm text-gray-700 font-mono",children:m},o))]})]})},S=()=>{const{state:r,startLoading:t,endLoading:a}=k(),[c,u]=p.useState([]),[l,g]=p.useState(null),e=i=>{u(n=>[...n.slice(-9),`${new Date().toLocaleTimeString()}: ${i}`])},y=async()=>{e("开始页面初始化"),g(null);const n=[{id:"user-info",name:"用户信息",duration:1e3,priority:"high"},{id:"menu-data",name:"菜单数据",duration:800,priority:"high"},{id:"config-data",name:"配置数据",duration:1200,priority:"medium"},{id:"analytics",name:"统计数据",duration:2e3,priority:"low"}].map(async d=>{const v=t(d.id,{name:d.name,priority:d.priority,minDuration:300});return e(`开始加载: ${d.name}`),await new Promise(f=>setTimeout(f,d.duration)),await a(v),e(`完成加载: ${d.name}`),{[d.id]:`${d.name}数据`}});try{const d=await Promise.all(n),v=Object.assign({},...d);g(v),e("页面初始化完成")}catch{e("页面初始化失败")}},m=async()=>{e("开始表单提交");const i=t("form-submit",{name:"提交表单",priority:"high",minDuration:500});try{await new Promise(n=>setTimeout(n,300)),e("表单验证通过"),await new Promise(n=>setTimeout(n,1500)),e("表单提交成功")}catch{e("表单提交失败")}finally{await a(i)}},o=async i=>{e(`搜索: "${i}"`);const n=t("search",{name:`搜索 "${i}"`,priority:"medium",minDuration:200});try{await new Promise(d=>setTimeout(d,800)),e(`搜索完成: 找到 ${Math.floor(Math.random()*50)} 条结果`)}finally{await a(n)}};return s.jsxs("div",{className:"space-y-4",children:[s.jsxs("div",{className:"grid grid-cols-2 gap-4",children:[s.jsxs("div",{className:"space-y-2",children:[s.jsx("h4",{className:"font-medium",children:"页面场景"}),s.jsxs("div",{className:"space-y-2",children:[s.jsx("button",{onClick:y,className:"w-full px-3 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 text-sm",children:"页面初始化"}),s.jsx("button",{onClick:m,className:"w-full px-3 py-2 bg-green-500 text-white rounded hover:bg-green-600 text-sm",children:"表单提交"})]})]}),s.jsxs("div",{className:"space-y-2",children:[s.jsx("h4",{className:"font-medium",children:"交互场景"}),s.jsxs("div",{className:"space-y-2",children:[s.jsx("button",{onClick:()=>o("React教程"),className:"w-full px-3 py-2 bg-purple-500 text-white rounded hover:bg-purple-600 text-sm",children:"搜索功能"}),s.jsx("button",{onClick:()=>o("JavaScript"),className:"w-full px-3 py-2 bg-indigo-500 text-white rounded hover:bg-indigo-600 text-sm",children:"搜索其他内容"})]})]})]}),l&&s.jsxs("div",{className:"bg-green-50 p-3 rounded",children:[s.jsx("h4",{className:"font-medium mb-2",children:"页面数据"}),s.jsx("div",{className:"text-sm text-gray-700",children:Object.entries(l).map(([i,n])=>s.jsxs("div",{children:["• ",n]},i))})]}),s.jsxs("div",{className:"bg-orange-50 p-3 rounded",children:[s.jsx("h4",{className:"font-medium mb-2",children:"应用场景说明"}),s.jsxs("div",{className:"text-sm text-gray-700 space-y-1",children:[s.jsxs("div",{children:[s.jsx("strong",{children:"页面初始化"}),": 并发加载多个资源，高优先级任务优先显示"]}),s.jsxs("div",{children:[s.jsx("strong",{children:"表单提交"}),": 高优先级任务，确保用户感知到操作正在进行"]}),s.jsxs("div",{children:[s.jsx("strong",{children:"搜索功能"}),": 中优先级任务，快速响应用户输入"]})]})]}),s.jsxs("div",{className:"bg-gray-50 p-3 rounded max-h-40 overflow-y-auto",children:[s.jsx("h4",{className:"font-medium mb-2",children:"操作日志"}),c.map((i,n)=>s.jsx("div",{className:"text-sm text-gray-700 font-mono",children:i},n))]})]})},P=()=>s.jsx(L,{title:"全局加载管理",description:"通过统一的加载状态管理，提供一致的用户体验和防闪烁机制",overview:s.jsxs("div",{className:"space-y-4",children:[s.jsxs("div",{children:[s.jsx("h3",{className:"text-lg font-semibold mb-2",children:"核心概念"}),s.jsxs("ul",{className:"list-disc list-inside space-y-1 text-gray-700",children:[s.jsxs("li",{children:[s.jsx("strong",{children:"加载计数器"}),"：跟踪当前进行中的加载任务数量"]}),s.jsxs("li",{children:[s.jsx("strong",{children:"任务优先级"}),"：区分不同重要程度的加载任务"]}),s.jsxs("li",{children:[s.jsx("strong",{children:"防闪烁机制"}),"：避免短时间任务造成的加载指示器闪烁"]}),s.jsxs("li",{children:[s.jsx("strong",{children:"全局状态管理"}),"：统一管理应用中的所有加载状态"]})]})]}),s.jsxs("div",{children:[s.jsx("h3",{className:"text-lg font-semibold mb-2",children:"主要优势"}),s.jsxs("ul",{className:"list-disc list-inside space-y-1 text-gray-700",children:[s.jsx("li",{children:"提供一致的加载体验和视觉反馈"}),s.jsx("li",{children:"避免多个加载指示器同时出现"}),s.jsx("li",{children:"智能防闪烁，提升用户体验"}),s.jsx("li",{children:"支持任务优先级和批量管理"})]})]}),s.jsxs("div",{children:[s.jsx("h3",{className:"text-lg font-semibold mb-2",children:"适用场景"}),s.jsxs("ul",{className:"list-disc list-inside space-y-1 text-gray-700",children:[s.jsx("li",{children:"页面初始化时的多资源并发加载"}),s.jsx("li",{children:"表单提交和数据保存操作"}),s.jsx("li",{children:"搜索和筛选功能的实时反馈"}),s.jsx("li",{children:"文件上传下载的进度管理"})]})]}),s.jsxs("div",{children:[s.jsx("h3",{className:"text-lg font-semibold mb-2",children:"注意事项"}),s.jsxs("ul",{className:"list-disc list-inside space-y-1 text-gray-700",children:[s.jsx("li",{children:"合理设置最小显示时间，通常推荐300ms"}),s.jsx("li",{children:"根据业务重要性设置任务优先级"}),s.jsx("li",{children:"避免过多的并发加载任务"}),s.jsx("li",{children:"提供清晰的加载状态和错误处理"})]})]})]}),examples:[{title:"基础加载管理",component:s.jsx(C,{}),description:"演示全局加载状态的基本管理功能",observationPoints:["不同优先级任务的加载指示器显示","加载计数器实时更新","多任务并发时的状态管理","清除所有任务的功能"],keyPoints:["加载计数器跟踪所有进行中的任务","高优先级任务会影响加载指示器的显示","支持任务的批量管理和清除","提供详细的任务状态信息"],commonTraps:["忘记调用endLoading导致加载状态一直存在","没有设置合适的任务优先级","同时启动过多的加载任务"],solutions:["使用try-finally确保endLoading被调用","根据业务重要性合理设置优先级","控制并发任务数量，避免性能问题"],importantTips:["高优先级任务会优先显示在加载指示器中","加载计数器为0时自动隐藏加载指示器","每个任务都有唯一的ID用于管理"],codeExample:{title:"基础全局加载管理器实现",code:`// 基础全局加载管理器实现
class BasicGlobalLoadingManager {
  private state = {
    isLoading: false,
    loadingCount: 0,
    loadingTasks: new Map<string, LoadingTask>()
  };
  private listeners = new Set<(state: any) => void>();

  // 开始加载任务
  startLoading(taskId: string, options: {
    name?: string;
    priority?: 'low' | 'medium' | 'high';
    minDuration?: number;
  } = {}) {
    const task = {
      id: taskId,
      name: options.name || taskId,
      startTime: Date.now(),
      priority: options.priority || 'medium',
      minDuration: options.minDuration || 300
    };
    
    this.state.loadingTasks.set(taskId, task);
    this.state.loadingCount++;
    this.state.isLoading = true;
    
    this.notifyListeners();
    return taskId;
  }

  // 结束加载任务
  async endLoading(taskId: string) {
    const task = this.state.loadingTasks.get(taskId);
    if (!task) return;
    
    const elapsed = Date.now() - task.startTime;
    const remainingTime = Math.max(0, task.minDuration - elapsed);
    
    // 防闪烁：确保最小显示时间
    if (remainingTime > 0) {
      await new Promise(resolve => setTimeout(resolve, remainingTime));
    }
    
    this.state.loadingTasks.delete(taskId);
    this.state.loadingCount = Math.max(0, this.state.loadingCount - 1);
    this.state.isLoading = this.state.loadingCount > 0;
    
    this.notifyListeners();
  }

  // 清除所有任务
  clearAll() {
    this.state.loadingTasks.clear();
    this.state.loadingCount = 0;
    this.state.isLoading = false;
    this.notifyListeners();
  }

  // 获取高优先级任务数量
  getHighPriorityCount(): number {
    return Array.from(this.state.loadingTasks.values())
      .filter(task => task.priority === 'high').length;
  }

  // 订阅状态变化
  subscribe(listener: (state: any) => void) {
    this.listeners.add(listener);
    return () => this.listeners.delete(listener);
  }

  private notifyListeners() {
    this.listeners.forEach(listener => listener({ ...this.state }));
  }
}

// React Hook 封装
const useBasicGlobalLoading = () => {
  const [state, setState] = useState({
    isLoading: false,
    loadingCount: 0,
    loadingTasks: new Map()
  });
  const managerRef = useRef(new BasicGlobalLoadingManager());

  useEffect(() => {
    const unsubscribe = managerRef.current.subscribe(setState);
    return unsubscribe;
  }, []);

  return {
    ...state,
    startLoading: (taskId: string, options?: any) => 
      managerRef.current.startLoading(taskId, options),
    endLoading: (taskId: string) => managerRef.current.endLoading(taskId),
    clearAll: () => managerRef.current.clearAll(),
    getHighPriorityCount: () => managerRef.current.getHighPriorityCount()
  };
};

// React 组件使用示例
const BasicLoadingExample: React.FC = () => {
  const { 
    isLoading, 
    loadingCount, 
    loadingTasks,
    startLoading, 
    endLoading, 
    clearAll,
    getHighPriorityCount
  } = useBasicGlobalLoading();

  const handleStartTask = async (priority: 'low' | 'medium' | 'high') => {
    const taskId = \`task-\${Date.now()}\`;
    try {
      startLoading(taskId, {
        name: \`\${priority}优先级任务\`,
        priority,
        minDuration: 300
      });
      
      // 模拟异步任务
      await new Promise(resolve => setTimeout(resolve, Math.random() * 2000 + 500));
    } finally {
      await endLoading(taskId);
    }
  };

  return (
    <div className="space-y-4">
      {/* 全局加载指示器 */}
      {isLoading && (
        <div className="bg-blue-100 p-4 rounded-lg">
          <div className="flex items-center space-x-2">
            <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-blue-600"></div>
            <span>正在加载... ({loadingCount} 个任务)</span>
          </div>
          <div className="mt-2 text-sm text-gray-600">
            高优先级任务: {getHighPriorityCount()} 个
          </div>
        </div>
      )}
      
      {/* 控制按钮 */}
      <div className="flex space-x-2">
        <button 
          onClick={() => handleStartTask('high')}
          className="px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600"
        >
          启动高优先级任务
        </button>
        <button 
          onClick={() => handleStartTask('medium')}
          className="px-4 py-2 bg-yellow-500 text-white rounded hover:bg-yellow-600"
        >
          启动中优先级任务
        </button>
        <button 
          onClick={() => handleStartTask('low')}
          className="px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600"
        >
          启动低优先级任务
        </button>
        <button 
          onClick={clearAll}
          className="px-4 py-2 bg-gray-500 text-white rounded hover:bg-gray-600"
        >
          清除所有任务
        </button>
      </div>
      
      {/* 任务状态显示 */}
      <div className="bg-gray-50 p-4 rounded-lg">
        <h4 className="font-semibold mb-2">当前任务状态:</h4>
        <div className="space-y-1 text-sm">
          <div>总任务数: {loadingCount}</div>
          <div>是否加载中: {isLoading ? '是' : '否'}</div>
          <div>活跃任务: {Array.from(loadingTasks.values()).map(task => task.name).join(', ') || '无'}</div>
        </div>
      </div>
    </div>
  );
};`,language:"typescript",highlights:[2,12,16,24,26,28,30,34,36,40,42,50,52,54,56,60,62,66,68,72,74,78,80,84,86,90,92,96,98,102,104,108,110,114,116,120,122,126,128,132,134,138,140,144,146,150,152,156,158,162,164]},highlights:[12,14,16,18,20,22,24,26,30,32,34,36,38,40,44,46,48,50,54,56,58,60,64,66,70,72,76,78,82,84,88,90,94,96,100,102,106,108,112,114,118,120,124,126,130,132,136,138,142,144,148,150,154,156,160,162,166,168,172,174,178,180]},{title:"防闪烁机制",component:s.jsx(I,{}),description:"演示如何避免短时间任务造成的加载指示器闪烁",observationPoints:["短时间任务会延迟隐藏加载指示器","最小显示时间的设置影响","实际显示时间与任务执行时间的关系","不同最小时间设置的效果对比"],keyPoints:["防闪烁机制通过最小显示时间实现","推荐设置300ms的最小显示时间","实际显示时间 = max(任务时间, 最小显示时间)","平衡用户体验和响应速度"],commonTraps:["最小显示时间设置过长导致用户感觉卡顿","最小显示时间设置过短无法防止闪烁","没有考虑不同场景的时间需求"],solutions:["根据任务类型设置不同的最小显示时间","通过用户测试确定最佳的时间设置","为关键操作设置更长的最小显示时间"],importantTips:["300ms是经过验证的最佳防闪烁时间","快速任务会自动延迟隐藏加载指示器","防闪烁不会影响实际的任务执行时间"],codeExample:{title:"防闪烁加载管理器实现",code:`// 防闪烁加载管理器实现
class AntiFlickerLoadingManager {
  private state = {
    isLoading: false,
    loadingTasks: new Map<string, LoadingTask>(),
    displayStartTime: 0
  };
  private listeners = new Set<(state: any) => void>();
  private readonly DEFAULT_MIN_DURATION = 300; // 默认最小显示时间

  // 开始加载任务
  startLoading(taskId: string, options: {
    name?: string;
    minDuration?: number;
    taskType?: 'quick' | 'normal' | 'critical';
  } = {}) {
    // 根据任务类型设置不同的最小显示时间
    const minDurationMap = {
      quick: 200,     // 快速任务
      normal: 300,    // 普通任务
      critical: 500   // 关键任务
    };
    
    const task = {
      id: taskId,
      name: options.name || taskId,
      startTime: Date.now(),
      minDuration: options.minDuration || 
        minDurationMap[options.taskType || 'normal'],
      taskType: options.taskType || 'normal'
    };
    
    this.state.loadingTasks.set(taskId, task);
    
    // 如果是第一个任务，记录显示开始时间
    if (this.state.loadingTasks.size === 1) {
      this.state.isLoading = true;
      this.state.displayStartTime = Date.now();
    }
    
    this.notifyListeners();
    return taskId;
  }

  // 结束加载任务（核心防闪烁逻辑）
  async endLoading(taskId: string) {
    const task = this.state.loadingTasks.get(taskId);
    if (!task) return;
    
    // 计算任务实际执行时间
    const taskElapsed = Date.now() - task.startTime;
    const taskRemainingTime = Math.max(0, task.minDuration - taskElapsed);
    
    this.state.loadingTasks.delete(taskId);
    
    // 如果还有其他任务在执行，直接返回
    if (this.state.loadingTasks.size > 0) {
      this.notifyListeners();
      return;
    }
    
    // 计算整体显示时间
    const displayElapsed = Date.now() - this.state.displayStartTime;
    const displayRemainingTime = Math.max(0, this.DEFAULT_MIN_DURATION - displayElapsed);
    
    // 防闪烁延迟：取任务延迟和显示延迟的最大值
    const finalDelay = Math.max(taskRemainingTime, displayRemainingTime);
    
    if (finalDelay > 0) {
      await new Promise(resolve => setTimeout(resolve, finalDelay));
    }
    
    this.state.isLoading = false;
    this.state.displayStartTime = 0;
    this.notifyListeners();
  }

  // 获取加载统计信息
  getLoadingStats() {
    const tasks = Array.from(this.state.loadingTasks.values());
    const now = Date.now();
    
    return {
      totalTasks: tasks.length,
      tasksByType: {
        quick: tasks.filter(t => t.taskType === 'quick').length,
        normal: tasks.filter(t => t.taskType === 'normal').length,
        critical: tasks.filter(t => t.taskType === 'critical').length
      },
      displayDuration: this.state.displayStartTime > 0 ? 
        now - this.state.displayStartTime : 0,
      longestTask: tasks.reduce((max, task) => {
        const elapsed = now - task.startTime;
        return elapsed > max.elapsed ? { name: task.name, elapsed } : max;
      }, { name: '', elapsed: 0 })
    };
  }

  subscribe(listener: (state: any) => void) {
    this.listeners.add(listener);
    return () => this.listeners.delete(listener);
  }

  private notifyListeners() {
    this.listeners.forEach(listener => listener({ 
      ...this.state, 
      stats: this.getLoadingStats()
    }));
  }
}

// React Hook 封装
const useAntiFlickerLoading = () => {
  const [state, setState] = useState({
    isLoading: false,
    loadingTasks: new Map(),
    stats: null
  });
  const managerRef = useRef(new AntiFlickerLoadingManager());

  useEffect(() => {
    const unsubscribe = managerRef.current.subscribe(setState);
    return unsubscribe;
  }, []);

  return {
    ...state,
    startLoading: (taskId: string, options?: any) => 
      managerRef.current.startLoading(taskId, options),
    endLoading: (taskId: string) => managerRef.current.endLoading(taskId)
  };
};

// React 组件使用示例
const AntiFlickerExample: React.FC = () => {
  const { isLoading, loadingTasks, stats, startLoading, endLoading } = useAntiFlickerLoading();
  const [logs, setLogs] = useState<string[]>([]);

  const addLog = (message: string) => {
    setLogs(prev => [...prev.slice(-4), \`\${new Date().toLocaleTimeString()}: \${message}\`]);
  };

  const handleQuickTask = async () => {
    const taskId = \`quick-\${Date.now()}\`;
    const startTime = Date.now();
    addLog('开始快速任务 (100ms)');
    
    try {
      startLoading(taskId, {
        name: '快速任务',
        taskType: 'quick',
        minDuration: 200
      });
      
      await new Promise(resolve => setTimeout(resolve, 100));
    } finally {
      await endLoading(taskId);
      const totalTime = Date.now() - startTime;
      addLog(\`快速任务完成，总显示时间: \${totalTime}ms\`);
    }
  };

  const handleNormalTask = async () => {
    const taskId = \`normal-\${Date.now()}\`;
    const startTime = Date.now();
    addLog('开始普通任务 (800ms)');
    
    try {
      startLoading(taskId, {
        name: '普通任务',
        taskType: 'normal',
        minDuration: 300
      });
      
      await new Promise(resolve => setTimeout(resolve, 800));
    } finally {
      await endLoading(taskId);
      const totalTime = Date.now() - startTime;
      addLog(\`普通任务完成，总显示时间: \${totalTime}ms\`);
    }
  };

  const handleCriticalTask = async () => {
    const taskId = \`critical-\${Date.now()}\`;
    const startTime = Date.now();
    addLog('开始关键任务 (200ms)');
    
    try {
      startLoading(taskId, {
        name: '关键任务',
        taskType: 'critical',
        minDuration: 500
      });
      
      await new Promise(resolve => setTimeout(resolve, 200));
    } finally {
      await endLoading(taskId);
      const totalTime = Date.now() - startTime;
      addLog(\`关键任务完成，总显示时间: \${totalTime}ms\`);
    }
  };

  return (
    <div className="space-y-4">
      {/* 防闪烁加载指示器 */}
      {isLoading && (
        <div className="bg-blue-100 p-4 rounded-lg border-l-4 border-blue-500">
          <div className="flex items-center space-x-2">
            <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-blue-600"></div>
            <span className="font-medium">防闪烁加载中...</span>
          </div>
          {stats && (
            <div className="mt-2 text-sm text-gray-600 space-y-1">
              <div>显示时长: {stats.displayDuration}ms</div>
              <div>活跃任务: {stats.totalTasks} 个</div>
              <div>任务分布: 快速({stats.tasksByType.quick}) 普通({stats.tasksByType.normal}) 关键({stats.tasksByType.critical})</div>
            </div>
          )}
        </div>
      )}
      
      {/* 测试按钮 */}
      <div className="grid grid-cols-3 gap-4">
        <button 
          onClick={handleQuickTask}
          className="px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600"
        >
          快速任务 (100ms)
          <div className="text-xs opacity-75">最小显示: 200ms</div>
        </button>
        <button 
          onClick={handleNormalTask}
          className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
        >
          普通任务 (800ms)
          <div className="text-xs opacity-75">最小显示: 300ms</div>
        </button>
        <button 
          onClick={handleCriticalTask}
          className="px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600"
        >
          关键任务 (200ms)
          <div className="text-xs opacity-75">最小显示: 500ms</div>
        </button>
      </div>
      
      {/* 执行日志 */}
      <div className="bg-gray-50 p-4 rounded-lg">
        <h4 className="font-semibold mb-2">执行日志:</h4>
        <div className="space-y-1 text-sm font-mono">
          {logs.length === 0 ? (
            <div className="text-gray-500">点击按钮开始测试防闪烁效果</div>
          ) : (
            logs.map((log, index) => (
              <div key={index} className="text-gray-700">{log}</div>
            ))
          )}
        </div>
      </div>
    </div>
  );
};`,language:"typescript",highlights:[2,12,16,18,20,22,24,26,30,32,34,36,40,42,46,48,50,52,56,58,60,62,66,68,70,72,76,78,80,82,86,88,90,92,96,98,100,102,106,108,112,114,118,120,124,126,130,132,136,138,142,144,148,150,154,156,160,162,166,168,172,174,178,180,184,186,190,192,196,198,202,204,208,210,214,216,220,222,226,228,232,234,238,240,244,246,250,252,256,258,262,264,268,270,274,276,280,282]},highlights:[8,10,12,14,16,18,20,22,26,28,30,32,34,36,40,42,44,46,48,50,54,56,58,60,64,66,68,70,74,76,78,80,84,86,88,90,94,96,98,100,104,106,108,110,114,116,118,120,124,126,130,132,136,138,142,144,148,150,154,156,160,162,166,168,172,174,178,180,184,186,190,192,196,198,202,204,208,210,214,216,220,222,226,228,232,234,238,240,244,246,250,252,256,258,262,264,268,270,274,276,280,282]},{title:"实际应用场景",component:s.jsx(S,{}),description:"演示在真实应用中的全局加载管理",observationPoints:["页面初始化时多个资源的并发加载","表单提交的高优先级加载状态","搜索功能的快速响应加载","不同场景下的加载策略"],keyPoints:["页面初始化使用并发加载提高效率","关键操作使用高优先级确保用户感知","搜索等交互使用中优先级快速响应","根据业务场景选择合适的加载策略"],commonTraps:["所有任务都设置为高优先级","没有区分关键和非关键的加载任务","忽略用户体验的连续性"],solutions:["根据业务重要性合理分配优先级","关键路径优先，非关键任务可以延后","保持加载状态的一致性和连续性"],importantTips:["页面初始化应该优先加载关键数据","用户操作反馈要及时显示加载状态","搜索等高频操作需要快速响应"],codeExample:{title:"真实应用场景的全局加载管理器实现",code:`// 真实应用场景的全局加载管理器
class RealWorldLoadingManager {
  private state = {
    isLoading: false,
    loadingTasks: new Map<string, LoadingTask>(),
    loadingHistory: [] as Array<{ taskId: string; duration: number; type: string }>
  };
  private listeners = new Set<(state: any) => void>();

  // 页面初始化加载
  async initializePage() {
    const initTasks = [
      { id: 'user-profile', name: '用户信息', priority: 'high' as const, duration: 800 },
      { id: 'navigation', name: '导航菜单', priority: 'high' as const, duration: 300 },
      { id: 'main-content', name: '主要内容', priority: 'medium' as const, duration: 1200 },
      { id: 'sidebar', name: '侧边栏', priority: 'low' as const, duration: 600 },
      { id: 'analytics', name: '统计数据', priority: 'low' as const, duration: 400 }
    ];
    
    // 并发启动所有初始化任务
    const promises = initTasks.map(async (task) => {
      const taskId = this.startLoading(task.id, {
        name: task.name,
        priority: task.priority,
        minDuration: 300
      });
      
      try {
        // 模拟异步加载
        await new Promise(resolve => setTimeout(resolve, task.duration));
        return { success: true, taskId, name: task.name };
      } catch (error) {
        return { success: false, taskId, name: task.name, error };
      } finally {
        await this.endLoading(taskId);
      }
    });
    
    return Promise.all(promises);
  }

  // 表单提交（高优先级）
  async submitForm(formData: any) {
    const taskId = this.startLoading('form-submit', {
      name: '提交表单',
      priority: 'high',
      minDuration: 500 // 关键操作需要更长的最小显示时间
    });
    
    try {
      // 模拟表单提交
      await new Promise(resolve => setTimeout(resolve, 1500));
      
      // 模拟服务器响应
      if (Math.random() > 0.8) {
        throw new Error('提交失败');
      }
      
      return { success: true, message: '提交成功' };
    } catch (error) {
      return { success: false, message: '提交失败，请重试' };
    } finally {
      await this.endLoading(taskId);
    }
  }

  // 搜索功能（中优先级，快速响应）
  async performSearch(query: string) {
    // 取消之前的搜索任务
    this.cancelTasksByType('search');
    
    const taskId = this.startLoading(\`search-\${Date.now()}\`, {
      name: \`搜索: \${query}\`,
      priority: 'medium',
      minDuration: 200, // 搜索需要快速响应
      taskType: 'search'
    });
    
    try {
      // 模拟搜索API调用
      await new Promise(resolve => setTimeout(resolve, 300 + Math.random() * 500));
      
      return {
        results: Array.from({ length: Math.floor(Math.random() * 10) + 1 }, (_, i) => ({
          id: i,
          title: \`搜索结果 \${i + 1} - \${query}\`,
          description: \`与 "\${query}" 相关的内容描述\`
        }))
      };
    } finally {
      await this.endLoading(taskId);
    }
  }

  // 后台数据同步（低优先级）
  async syncBackgroundData() {
    const syncTasks = [
      { id: 'user-preferences', name: '用户偏好', duration: 800 },
      { id: 'cache-update', name: '缓存更新', duration: 1200 },
      { id: 'log-upload', name: '日志上传', duration: 600 }
    ];
    
    const promises = syncTasks.map(async (task) => {
      const taskId = this.startLoading(task.id, {
        name: task.name,
        priority: 'low',
        minDuration: 100 // 后台任务最小显示时间较短
      });
      
      try {
        await new Promise(resolve => setTimeout(resolve, task.duration));
        return { success: true, task: task.name };
      } catch (error) {
        return { success: false, task: task.name, error };
      } finally {
        await this.endLoading(taskId);
      }
    });
    
    return Promise.all(promises);
  }

  startLoading(taskId: string, options: {
    name?: string;
    priority?: 'low' | 'medium' | 'high';
    minDuration?: number;
    taskType?: string;
  } = {}) {
    const task = {
      id: taskId,
      name: options.name || taskId,
      startTime: Date.now(),
      priority: options.priority || 'medium',
      minDuration: options.minDuration || 300,
      taskType: options.taskType || 'general'
    };
    
    this.state.loadingTasks.set(taskId, task);
    
    // 更新全局加载状态
    this.updateGlobalLoadingState();
    this.notifyListeners();
    return taskId;
  }

  async endLoading(taskId: string) {
    const task = this.state.loadingTasks.get(taskId);
    if (!task) return;
    
    const duration = Date.now() - task.startTime;
    const remainingTime = Math.max(0, task.minDuration - duration);
    
    if (remainingTime > 0) {
      await new Promise(resolve => setTimeout(resolve, remainingTime));
    }
    
    // 记录任务历史
    this.state.loadingHistory.push({
      taskId,
      duration: Date.now() - task.startTime,
      type: task.taskType || 'general'
    });
    
    // 保持最近50条记录
    if (this.state.loadingHistory.length > 50) {
      this.state.loadingHistory = this.state.loadingHistory.slice(-50);
    }
    
    this.state.loadingTasks.delete(taskId);
    this.updateGlobalLoadingState();
    this.notifyListeners();
  }

  // 取消特定类型的任务
  cancelTasksByType(taskType: string) {
    const tasksToCancel = Array.from(this.state.loadingTasks.values())
      .filter(task => task.taskType === taskType);
    
    tasksToCancel.forEach(task => {
      this.state.loadingTasks.delete(task.id);
    });
    
    this.updateGlobalLoadingState();
    this.notifyListeners();
  }

  private updateGlobalLoadingState() {
    const tasks = Array.from(this.state.loadingTasks.values());
    this.state.isLoading = tasks.length > 0;
    
    // 高优先级任务优先显示
    const hasHighPriority = tasks.some(task => task.priority === 'high');
    const hasMediumPriority = tasks.some(task => task.priority === 'medium');
    
    // 根据优先级设置加载状态的显示策略
    if (hasHighPriority) {
      // 高优先级任务存在时，显示更明显的加载状态
    } else if (hasMediumPriority) {
      // 中优先级任务的常规显示
    }
    // 低优先级任务可以使用更轻量的显示方式
  }

  getLoadingStats() {
    const tasks = Array.from(this.state.loadingTasks.values());
    return {
      totalTasks: tasks.length,
      tasksByPriority: {
        high: tasks.filter(t => t.priority === 'high').length,
        medium: tasks.filter(t => t.priority === 'medium').length,
        low: tasks.filter(t => t.priority === 'low').length
      },
      recentHistory: this.state.loadingHistory.slice(-5),
      averageLoadTime: this.state.loadingHistory.length > 0 ?
        this.state.loadingHistory.reduce((sum, h) => sum + h.duration, 0) / this.state.loadingHistory.length : 0
    };
  }

  subscribe(listener: (state: any) => void) {
    this.listeners.add(listener);
    return () => this.listeners.delete(listener);
  }

  private notifyListeners() {
    this.listeners.forEach(listener => listener({
      ...this.state,
      stats: this.getLoadingStats()
    }));
  }
}

// React Hook 封装
const useRealWorldLoading = () => {
  const [state, setState] = useState({
    isLoading: false,
    loadingTasks: new Map(),
    stats: null
  });
  const managerRef = useRef(new RealWorldLoadingManager());

  useEffect(() => {
    const unsubscribe = managerRef.current.subscribe(setState);
    return unsubscribe;
  }, []);

  return {
    ...state,
    initializePage: () => managerRef.current.initializePage(),
    submitForm: (data: any) => managerRef.current.submitForm(data),
    performSearch: (query: string) => managerRef.current.performSearch(query),
    syncBackgroundData: () => managerRef.current.syncBackgroundData()
  };
};

// React 组件使用示例
const RealWorldExample: React.FC = () => {
  const { 
    isLoading, 
    loadingTasks, 
    stats,
    initializePage, 
    submitForm, 
    performSearch, 
    syncBackgroundData
  } = useRealWorldLoading();

  const [searchQuery, setSearchQuery] = useState('');
  const [searchResults, setSearchResults] = useState<any[]>([]);
  const [logs, setLogs] = useState<string[]>([]);

  const addLog = (message: string) => {
    setLogs(prev => [...prev.slice(-3), \`\${new Date().toLocaleTimeString()}: \${message}\`]);
  };

  const handlePageInit = async () => {
    addLog('开始页面初始化...');
    const results = await initializePage();
    const successCount = results.filter(r => r.success).length;
    addLog(\`页面初始化完成: \${successCount}/\${results.length} 个任务成功\`);
  };

  const handleFormSubmit = async () => {
    addLog('提交表单...');
    const result = await submitForm({ name: '测试数据', email: 'test@example.com' });
    addLog(result.message);
  };

  const handleSearch = async () => {
    if (!searchQuery.trim()) return;
    
    addLog(\`搜索: \${searchQuery}\`);
    const results = await performSearch(searchQuery);
    setSearchResults(results.results);
    addLog(\`搜索完成，找到 \${results.results.length} 个结果\`);
  };

  const handleBackgroundSync = async () => {
    addLog('开始后台数据同步...');
    const results = await syncBackgroundData();
    const successCount = results.filter(r => r.success).length;
    addLog(\`后台同步完成: \${successCount}/\${results.length} 个任务成功\`);
  };

  return (
    <div className="space-y-6">
      {/* 全局加载指示器 */}
      {isLoading && (
        <div className="bg-gradient-to-r from-blue-50 to-indigo-50 p-4 rounded-lg border border-blue-200">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-blue-600"></div>
              <span className="font-medium text-blue-800">系统处理中...</span>
            </div>
            {stats && (
              <div className="text-sm text-blue-600">
                {stats.tasksByPriority.high > 0 && <span className="bg-red-100 px-2 py-1 rounded text-red-700 mr-2">高优先级: {stats.tasksByPriority.high}</span>}
                {stats.tasksByPriority.medium > 0 && <span className="bg-yellow-100 px-2 py-1 rounded text-yellow-700 mr-2">中优先级: {stats.tasksByPriority.medium}</span>}
                {stats.tasksByPriority.low > 0 && <span className="bg-green-100 px-2 py-1 rounded text-green-700">低优先级: {stats.tasksByPriority.low}</span>}
              </div>
            )}
          </div>
        </div>
      )}
      
      {/* 场景测试按钮 */}
      <div className="grid grid-cols-2 gap-4">
        <button 
          onClick={handlePageInit}
          className="p-4 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors"
        >
          <div className="font-semibold">页面初始化</div>
          <div className="text-sm opacity-75">并发加载多个资源</div>
        </button>
        <button 
          onClick={handleFormSubmit}
          className="p-4 bg-red-500 text-white rounded-lg hover:bg-red-600 transition-colors"
        >
          <div className="font-semibold">表单提交</div>
          <div className="text-sm opacity-75">高优先级操作</div>
        </button>
        <div className="p-4 bg-yellow-500 text-white rounded-lg">
          <div className="font-semibold mb-2">搜索功能</div>
          <div className="flex space-x-2">
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="输入搜索关键词"
              className="flex-1 px-2 py-1 text-black rounded"
              onKeyPress={(e) => e.key === 'Enter' && handleSearch()}
            />
            <button 
              onClick={handleSearch}
              className="px-3 py-1 bg-yellow-600 rounded hover:bg-yellow-700"
            >
              搜索
            </button>
          </div>
        </div>
        <button 
          onClick={handleBackgroundSync}
          className="p-4 bg-green-500 text-white rounded-lg hover:bg-green-600 transition-colors"
        >
          <div className="font-semibold">后台同步</div>
          <div className="text-sm opacity-75">低优先级任务</div>
        </button>
      </div>
      
      {/* 搜索结果 */}
      {searchResults.length > 0 && (
        <div className="bg-gray-50 p-4 rounded-lg">
          <h4 className="font-semibold mb-2">搜索结果:</h4>
          <div className="space-y-2">
            {searchResults.map((result) => (
              <div key={result.id} className="bg-white p-2 rounded border">
                <div className="font-medium">{result.title}</div>
                <div className="text-sm text-gray-600">{result.description}</div>
              </div>
            ))}
          </div>
        </div>
      )}
      
      {/* 统计信息 */}
      {stats && (
        <div className="bg-gray-50 p-4 rounded-lg">
          <h4 className="font-semibold mb-2">加载统计:</h4>
          <div className="grid grid-cols-2 gap-4 text-sm">
            <div>
              <div>当前任务: {stats.totalTasks} 个</div>
              <div>平均加载时间: {Math.round(stats.averageLoadTime)}ms</div>
            </div>
            <div>
              <div className="font-medium mb-1">最近任务:</div>
              {stats.recentHistory.map((h: any, i: number) => (
                <div key={i} className="text-xs text-gray-600">
                  {h.taskId}: {h.duration}ms
                </div>
              ))}
            </div>
          </div>
        </div>
      )}
      
      {/* 操作日志 */}
      <div className="bg-gray-50 p-4 rounded-lg">
        <h4 className="font-semibold mb-2">操作日志:</h4>
        <div className="space-y-1 text-sm font-mono">
          {logs.length === 0 ? (
            <div className="text-gray-500">点击按钮开始测试真实场景</div>
          ) : (
            logs.map((log, index) => (
              <div key={index} className="text-gray-700">{log}</div>
            ))
          )}
        </div>
      </div>
    </div>
  );
};`,language:"typescript",highlights:[10,12,14,16,18,20,22,24,26,28,32,34,36,38,40,42,46,48,50,52,56,58,60,62,66,68,70,72,76,78,80,82,86,88,90,92,96,98,100,102,106,108,110,112,116,118,120,122,126,128,130,132,136,138,140,142,146,148,150,152,156,158,160,162,166,168,170,172,176,178,180,182,186,188,190,192,196,198,200,202,206,208,210,212,216,218,220,222,226,228,230,232,236,238,240,242,246,248,250,252,256,258,260,262,266,268,270,272,276,278,280,282,286,288,290,292,296,298,300,302,306,308,310,312,316,318,320,322,326,328,330,332,336,338,340,342,346,348,350,352,356,358,360,362,366,368,370,372,376,378,380,382,386,388,390,392,396,398,400,402,406,408,410,412]},highlights:[10,12,14,16,18,20,22,24,26,28,32,34,36,38,40,42,46,48,50,52,56,58,60,62,66,68,70,72,76,78,80,82,86,88,90,92,96,98,100,102,106,108,110,112,116,118,120,122,126,128,130,132,136,138,140,142,146,148,150,152,156,158,160,162,166,168,170,172,176,178,180,182,186,188,190,192,196,198,200,202,206,208,210,212,216,218,220,222,226,228,230,232,236,238,240,242,246,248,250,252,256,258,260,262,266,268,270,272,276,278,280,282,286,288,290,292,296,298,300,302,306,308,310,312,316,318,320,322,326,328,330,332,336,338,340,342,346,348,350,352,356,358,360,362,366,368,370,372,376,378,380,382,386,388,390,392,396,398,400,402,406,408,410,412]}],tutorial:{concepts:["全局加载管理是现代应用的重要组成部分","加载计数器可以准确跟踪所有进行中的任务","防闪烁机制通过最小显示时间避免视觉干扰","任务优先级帮助区分不同重要程度的操作","统一的加载状态提供一致的用户体验"],steps:["设计全局加载状态的数据结构","实现加载任务的生命周期管理","添加防闪烁机制和最小显示时间","实现任务优先级和批量管理","创建React Context和Hook进行状态共享","开发全局加载指示器组件"],tips:["使用唯一的任务ID避免冲突","合理设置最小显示时间，推荐300ms","根据业务重要性设置任务优先级","提供清晰的加载状态和进度反馈","考虑错误处理和异常情况的加载状态"]},interview:{questions:[{question:"什么是防闪烁机制？为什么需要它？",answer:"防闪烁机制是指当加载任务执行时间很短时，通过设置最小显示时间来避免加载指示器快速出现和消失造成的视觉闪烁。需要它的原因：1）提升用户体验，避免视觉干扰；2）保持界面的稳定性；3）让用户感知到系统正在工作。通常设置300ms的最小显示时间是最佳实践。"},{question:"如何设计全局加载状态的优先级系统？",answer:"优先级系统设计要点：1）高优先级：关键业务操作，如登录、支付、数据保存；2）中优先级：一般用户交互，如搜索、筛选、页面跳转；3）低优先级：后台任务，如统计上报、预加载。高优先级任务会优先显示在加载指示器中，影响全局加载状态的显示策略。"},{question:"全局加载管理如何处理并发任务？",answer:"并发任务处理策略：1）使用加载计数器跟踪所有进行中的任务；2）每个任务有唯一ID进行独立管理；3）只要有任务在进行，就显示全局加载状态；4）根据任务优先级决定加载指示器的显示内容；5）提供批量清除和管理功能；6）支持任务的独立完成和状态更新。"},{question:"如何在React应用中实现全局加载状态共享？",answer:"实现方案：1）使用React Context提供全局状态；2）创建自定义Hook封装加载逻辑；3）实现Provider组件包装应用根组件；4）使用观察者模式监听状态变化；5）提供统一的API接口进行状态管理；6）支持组件级别的加载状态订阅和更新。"}],keyPoints:["全局加载管理提供统一的用户体验","防闪烁机制是提升用户体验的重要手段","任务优先级帮助区分不同重要程度的操作","加载计数器准确跟踪所有进行中的任务","React Context是实现全局状态共享的最佳方案"]},bestPractices:{dos:["设置合理的最小显示时间，推荐300ms","根据业务重要性设置任务优先级","使用唯一的任务ID进行管理","提供清晰的加载状态和进度反馈","在组件卸载时清理未完成的加载任务","考虑错误处理和异常情况的状态管理"],donts:["不要忘记调用endLoading导致状态泄漏","不要设置过长的最小显示时间","不要所有任务都设置为高优先级","不要同时启动过多的并发任务","不要忽略加载状态的一致性"],patterns:["计数器模式：使用计数器跟踪并发任务数量","优先级模式：根据任务重要性设置不同优先级","防闪烁模式：设置最小显示时间避免视觉闪烁","观察者模式：监听状态变化并通知相关组件","上下文模式：使用React Context实现全局状态共享"]}}),A=()=>s.jsx(j,{children:s.jsxs("div",{className:"relative",children:[s.jsx(D,{position:"top",showTaskCount:!0,showTaskNames:!0}),s.jsx(P,{})]})});export{A as default};
