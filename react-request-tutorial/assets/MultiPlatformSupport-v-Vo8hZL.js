var j=Object.defineProperty;var b=(a,t,s)=>t in a?j(a,t,{enumerable:!0,configurable:!0,writable:!0,value:s}):a[t]=s;var f=(a,t,s)=>b(a,typeof t!="symbol"?t+"":t,s);import{j as e,r as c}from"./index-Cnne2xOM.js";import{a as v}from"./index-NIGUFBhG.js";import{C as y}from"./ComponentTemplate-iqsAHbUA.js";class g{constructor(){f(this,"deviceInfo");f(this,"platformConfig");f(this,"adapters",new Map);f(this,"activeAdapter",null);f(this,"performanceMetrics",new Map);f(this,"listeners",new Set);this.deviceInfo=this.detectDevice(),this.platformConfig=this.getPlatformConfig(this.deviceInfo.platform),this.initializeAdapters(),this.selectBestAdapter(),this.setupEventListeners()}detectDevice(){var u;const t=navigator.userAgent,s=window.screen;let r="web";/Mobile|Android|iPhone|iPad/.test(t)?/iPad/.test(t)||s.width>=768&&s.height>=1024?r="tablet":r="mobile":/Electron/.test(t)?r="desktop":/TV|SmartTV/.test(t)?r="tv":/Watch/.test(t)&&(r="watch");const o="ontouchstart"in window||navigator.maxTouchPoints>0,p=s.width>s.height?"landscape":"portrait";let h;"connection"in navigator&&(h=(u=navigator.connection)==null?void 0:u.effectiveType);let l;"deviceMemory"in navigator&&(l=navigator.deviceMemory);let m;return"hardwareConcurrency"in navigator&&(m=navigator.hardwareConcurrency),{platform:r,userAgent:t,screenWidth:s.width,screenHeight:s.height,pixelRatio:window.devicePixelRatio||1,touchSupport:o,orientation:p,connectionType:h,memory:l,cores:m}}getPlatformConfig(t){return{web:{platform:"web",maxConcurrentRequests:6,timeout:3e4,retryAttempts:3,cacheSize:52428800,compressionEnabled:!0,batchingEnabled:!0,prefetchEnabled:!0,headers:{"User-Agent":navigator.userAgent,Accept:"application/json, text/plain, */*"}},mobile:{platform:"mobile",maxConcurrentRequests:3,timeout:15e3,retryAttempts:2,cacheSize:20971520,compressionEnabled:!0,batchingEnabled:!0,prefetchEnabled:!1,headers:{"User-Agent":navigator.userAgent,Accept:"application/json","Cache-Control":"max-age=300"}},tablet:{platform:"tablet",maxConcurrentRequests:4,timeout:2e4,retryAttempts:3,cacheSize:31457280,compressionEnabled:!0,batchingEnabled:!0,prefetchEnabled:!0,headers:{"User-Agent":navigator.userAgent,Accept:"application/json, text/plain, */*"}},desktop:{platform:"desktop",maxConcurrentRequests:8,timeout:45e3,retryAttempts:3,cacheSize:104857600,compressionEnabled:!0,batchingEnabled:!0,prefetchEnabled:!0,headers:{"User-Agent":navigator.userAgent,Accept:"application/json, text/plain, */*","X-Platform":"desktop"}},tv:{platform:"tv",maxConcurrentRequests:2,timeout:1e4,retryAttempts:1,cacheSize:10485760,compressionEnabled:!1,batchingEnabled:!1,prefetchEnabled:!1,headers:{"User-Agent":navigator.userAgent,Accept:"application/json","X-Platform":"tv"}},watch:{platform:"watch",maxConcurrentRequests:1,timeout:5e3,retryAttempts:1,cacheSize:5242880,compressionEnabled:!1,batchingEnabled:!1,prefetchEnabled:!1,headers:{"User-Agent":navigator.userAgent,Accept:"application/json","X-Platform":"watch"}}}[t]}getMockData(t){return{users:{data:[{id:1,name:"张三",email:"zhangsan@example.com",role:"admin"},{id:2,name:"李四",email:"lisi@example.com",role:"user"},{id:3,name:"王五",email:"wangwu@example.com",role:"user"}],total:3,page:1},posts:{data:[{id:1,title:"React多端支持最佳实践",author:"张三",views:1250},{id:2,title:"移动端性能优化指南",author:"李四",views:890},{id:3,title:"跨平台开发经验分享",author:"王五",views:2100}],total:3,page:1},profile:{id:1,name:"当前用户",email:"user@example.com",avatar:"/avatar.jpg",settings:{theme:"light",language:"zh-CN",notifications:!0}}}[t]||{error:"未找到数据"}}initializeAdapters(){this.registerAdapter({name:"axios",platform:["web","mobile","tablet","desktop"],execute:async t=>{const s=t.url.replace("/api/","");return await new Promise(r=>setTimeout(r,Math.random()*500+100)),this.getMockData(s)},isSupported:()=>typeof v<"u"}),this.registerAdapter({name:"fetch",platform:["web","mobile","tablet","desktop"],execute:async t=>{const s=t.url.replace("/api/","");return await new Promise(r=>setTimeout(r,Math.random()*500+100)),this.getMockData(s)},isSupported:()=>typeof fetch<"u"}),this.registerAdapter({name:"xhr",platform:["web","mobile","tablet","desktop","tv"],execute:async t=>{const s=t.url.replace("/api/","");return await new Promise(r=>setTimeout(r,Math.random()*800+200)),this.getMockData(s)},isSupported:()=>typeof XMLHttpRequest<"u"}),this.registerAdapter({name:"simple",platform:["tv","watch"],execute:async t=>{const s=t.url.replace("/api/","");return await new Promise(r=>setTimeout(r,Math.random()*1200+300)),this.getMockData(s)},isSupported:()=>typeof fetch<"u"})}registerAdapter(t){this.adapters.set(t.name,t)}selectBestAdapter(){const t=Array.from(this.adapters.values()).filter(s=>s.platform.includes(this.deviceInfo.platform)&&s.isSupported()).sort((s,r)=>{const o={axios:4,fetch:3,xhr:2,simple:1};return(o[r.name]||0)-(o[s.name]||0)});this.activeAdapter=t[0]||null}setupEventListeners(){window.addEventListener("orientationchange",()=>{setTimeout(()=>{this.deviceInfo=this.detectDevice(),this.notifyListeners()},100)}),window.addEventListener("resize",()=>{this.deviceInfo=this.detectDevice(),this.notifyListeners()})}notifyListeners(){this.listeners.forEach(t=>t(this.deviceInfo))}addDeviceListener(t){return this.listeners.add(t),()=>this.listeners.delete(t)}async request(t){if(!this.activeAdapter)throw new Error("No suitable adapter available for current platform");const s=performance.now();try{const r={method:"GET",...t,headers:{...this.platformConfig.headers,...t.headers},timeout:t.timeout||this.platformConfig.timeout},o=await this.activeAdapter.execute(r),p=performance.now()-s;return this.recordPerformance(this.activeAdapter.name,p),{data:o,adapter:this.activeAdapter.name,platform:this.deviceInfo.platform,duration:p}}catch(r){const o=performance.now()-s;throw this.recordPerformance(`${this.activeAdapter.name}_error`,o),r}}recordPerformance(t,s){this.performanceMetrics.has(t)||this.performanceMetrics.set(t,[]);const r=this.performanceMetrics.get(t);r.push(s),r.length>100&&r.shift()}getDeviceInfo(){return{...this.deviceInfo}}getPlatformConfiguration(){return{...this.platformConfig}}getActiveAdapter(){var t;return((t=this.activeAdapter)==null?void 0:t.name)||null}getPerformanceStats(){const t={};return this.performanceMetrics.forEach((s,r)=>{if(s.length>0){const o=s.reduce((l,m)=>l+m,0)/s.length,p=Math.min(...s),h=Math.max(...s);t[r]={avg:o,min:p,max:h,count:s.length}}}),t}getSupportedAdapters(){return Array.from(this.adapters.values()).filter(t=>t.platform.includes(this.deviceInfo.platform)&&t.isSupported()).map(t=>t.name)}switchAdapter(t){const s=this.adapters.get(t);return s&&s.platform.includes(this.deviceInfo.platform)&&s.isSupported()?(this.activeAdapter=s,!0):!1}updatePlatformConfig(t){this.platformConfig={...this.platformConfig,...t}}}const w=()=>{const[a]=c.useState(()=>new g),[t,s]=c.useState(null),[r,o]=c.useState(null),[p,h]=c.useState([]),[l,m]=c.useState(!1);c.useEffect(()=>(s(a.getDeviceInfo()),o(a.getPlatformConfiguration()),a.addDeviceListener(i=>{s(i)})),[a]);const u=c.useCallback(async n=>{m(!0);const i=Math.random().toString(36).substr(2,9);try{const d=await a.request({url:`/api/${n}`,method:"GET"});h(x=>[...x.slice(-9),{id:i,url:`/api/${n}`,status:"success",adapter:d.adapter,platform:d.platform,duration:d.duration,timestamp:Date.now()}])}catch(d){h(x=>[...x.slice(-9),{id:i,url:`/api/${n}`,status:"error",adapter:a.getActiveAdapter()||"unknown",platform:(t==null?void 0:t.platform)||"unknown",duration:0,timestamp:Date.now(),error:d.message}])}finally{m(!1)}},[a,t]);return!t||!r?e.jsx("div",{children:"Loading..."}):e.jsx("div",{className:"space-y-6",children:e.jsxs("div",{className:"bg-white p-6 rounded-lg shadow-sm border",children:[e.jsx("h3",{className:"text-lg font-semibold mb-4",children:"基础多端支持"}),e.jsxs("div",{className:"grid grid-cols-3 gap-6",children:[e.jsxs("div",{className:"space-y-4",children:[e.jsxs("div",{children:[e.jsx("h4",{className:"font-medium mb-3",children:"设备信息"}),e.jsxs("div",{className:"p-3 bg-gray-50 rounded space-y-2",children:[e.jsxs("div",{className:"flex justify-between",children:[e.jsx("span",{className:"text-gray-600",children:"平台:"}),e.jsx("span",{className:"font-medium capitalize",children:t.platform})]}),e.jsxs("div",{className:"flex justify-between",children:[e.jsx("span",{className:"text-gray-600",children:"屏幕:"}),e.jsxs("span",{className:"font-medium",children:[t.screenWidth,"×",t.screenHeight]})]}),e.jsxs("div",{className:"flex justify-between",children:[e.jsx("span",{className:"text-gray-600",children:"像素比:"}),e.jsx("span",{className:"font-medium",children:t.pixelRatio})]}),e.jsxs("div",{className:"flex justify-between",children:[e.jsx("span",{className:"text-gray-600",children:"触摸:"}),e.jsx("span",{className:"font-medium",children:t.touchSupport?"支持":"不支持"})]}),e.jsxs("div",{className:"flex justify-between",children:[e.jsx("span",{className:"text-gray-600",children:"方向:"}),e.jsx("span",{className:"font-medium capitalize",children:t.orientation})]}),t.connectionType&&e.jsxs("div",{className:"flex justify-between",children:[e.jsx("span",{className:"text-gray-600",children:"网络:"}),e.jsx("span",{className:"font-medium",children:t.connectionType})]}),t.memory&&e.jsxs("div",{className:"flex justify-between",children:[e.jsx("span",{className:"text-gray-600",children:"内存:"}),e.jsxs("span",{className:"font-medium",children:[t.memory,"GB"]})]}),t.cores&&e.jsxs("div",{className:"flex justify-between",children:[e.jsx("span",{className:"text-gray-600",children:"CPU核心:"}),e.jsx("span",{className:"font-medium",children:t.cores})]})]})]}),e.jsxs("div",{children:[e.jsx("h4",{className:"font-medium mb-3",children:"平台配置"}),e.jsxs("div",{className:"p-3 bg-gray-50 rounded space-y-2 text-sm",children:[e.jsxs("div",{className:"flex justify-between",children:[e.jsx("span",{className:"text-gray-600",children:"并发请求:"}),e.jsx("span",{className:"font-medium",children:r.maxConcurrentRequests})]}),e.jsxs("div",{className:"flex justify-between",children:[e.jsx("span",{className:"text-gray-600",children:"超时时间:"}),e.jsxs("span",{className:"font-medium",children:[r.timeout,"ms"]})]}),e.jsxs("div",{className:"flex justify-between",children:[e.jsx("span",{className:"text-gray-600",children:"重试次数:"}),e.jsx("span",{className:"font-medium",children:r.retryAttempts})]}),e.jsxs("div",{className:"flex justify-between",children:[e.jsx("span",{className:"text-gray-600",children:"缓存大小:"}),e.jsxs("span",{className:"font-medium",children:[Math.round(r.cacheSize/1024/1024),"MB"]})]}),e.jsxs("div",{className:"flex justify-between",children:[e.jsx("span",{className:"text-gray-600",children:"压缩:"}),e.jsx("span",{className:"font-medium",children:r.compressionEnabled?"启用":"禁用"})]}),e.jsxs("div",{className:"flex justify-between",children:[e.jsx("span",{className:"text-gray-600",children:"批处理:"}),e.jsx("span",{className:"font-medium",children:r.batchingEnabled?"启用":"禁用"})]}),e.jsxs("div",{className:"flex justify-between",children:[e.jsx("span",{className:"text-gray-600",children:"预取:"}),e.jsx("span",{className:"font-medium",children:r.prefetchEnabled?"启用":"禁用"})]})]})]}),e.jsxs("div",{children:[e.jsx("h4",{className:"font-medium mb-3",children:"测试请求"}),e.jsxs("div",{className:"space-y-2",children:[e.jsx("button",{onClick:()=>u("users"),disabled:l,className:"w-full px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 disabled:bg-gray-300 disabled:cursor-not-allowed transition-colors",children:l?"请求中...":"获取用户列表"}),e.jsx("button",{onClick:()=>u("posts"),disabled:l,className:"w-full px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600 disabled:bg-gray-300 disabled:cursor-not-allowed transition-colors",children:l?"请求中...":"获取文章列表"}),e.jsx("button",{onClick:()=>u("profile"),disabled:l,className:"w-full px-4 py-2 bg-purple-500 text-white rounded hover:bg-purple-600 disabled:bg-gray-300 disabled:cursor-not-allowed transition-colors",children:l?"请求中...":"获取用户资料"})]})]})]}),e.jsxs("div",{className:"col-span-2",children:[e.jsx("h4",{className:"font-medium mb-3",children:"请求历史"}),e.jsx("div",{className:"max-h-80 overflow-y-auto border rounded-lg",children:p.length>0?e.jsx("div",{className:"space-y-2 p-2",children:p.map(n=>e.jsxs("div",{className:"p-3 bg-gray-50 rounded",children:[e.jsxs("div",{className:"flex justify-between items-center mb-2",children:[e.jsx("span",{className:"font-medium text-blue-600",children:n.url}),e.jsx("span",{className:`px-2 py-1 rounded text-xs ${n.status==="success"?"bg-green-100 text-green-600":"bg-red-100 text-red-600"}`,children:n.status==="success"?"成功":"失败"})]}),e.jsxs("div",{className:"grid grid-cols-2 gap-4 text-xs text-gray-600",children:[e.jsxs("div",{children:[e.jsxs("div",{children:["适配器:"," ",e.jsx("span",{className:"font-medium",children:n.adapter})]}),e.jsxs("div",{children:["平台:"," ",e.jsx("span",{className:"font-medium",children:n.platform})]})]}),e.jsxs("div",{children:[e.jsxs("div",{children:["耗时:"," ",e.jsxs("span",{className:"font-medium",children:[n.duration.toFixed(2),"ms"]})]}),e.jsxs("div",{children:["时间:"," ",e.jsx("span",{className:"font-medium",children:new Date(n.timestamp).toLocaleTimeString()})]})]})]}),n.error&&e.jsx("div",{className:"mt-2 text-xs text-red-600 bg-red-50 p-2 rounded",children:n.error})]},n.id))}):e.jsxs("div",{className:"p-4 text-center text-gray-500",children:["暂无请求记录",e.jsx("br",{}),e.jsx("small",{children:"执行测试请求后显示历史记录"})]})})]})]})]})})},A=()=>{const[a]=c.useState(()=>new g),[t,s]=c.useState([]),[r,o]=c.useState(null),[p,h]=c.useState({}),[l,m]=c.useState(!1);c.useEffect(()=>{s(a.getSupportedAdapters()),o(a.getActiveAdapter())},[a]);const u=c.useCallback(i=>{a.switchAdapter(i)&&o(i)},[a]),n=c.useCallback(async()=>{m(!0);try{const i=[];for(let d=0;d<10;d++)i.push(a.request({url:`/api/test/${d}`,method:"GET"}).catch(()=>null));await Promise.all(i),h(a.getPerformanceStats())}finally{m(!1)}},[a]);return e.jsx("div",{className:"space-y-6",children:e.jsxs("div",{className:"bg-white p-6 rounded-lg shadow-sm border",children:[e.jsx("h3",{className:"text-lg font-semibold mb-4",children:"适配器比较"}),e.jsxs("div",{className:"grid grid-cols-2 gap-6",children:[e.jsxs("div",{className:"space-y-4",children:[e.jsxs("div",{children:[e.jsx("h4",{className:"font-medium mb-3",children:"支持的适配器"}),e.jsx("div",{className:"space-y-2",children:t.map(i=>e.jsxs("div",{className:"flex items-center justify-between p-3 bg-gray-50 rounded",children:[e.jsxs("div",{className:"flex items-center space-x-3",children:[e.jsx("div",{className:`w-3 h-3 rounded-full ${r===i?"bg-green-500":"bg-gray-300"}`}),e.jsx("span",{className:"font-medium capitalize",children:i})]}),e.jsx("button",{onClick:()=>u(i),disabled:r===i,className:"px-3 py-1 text-sm bg-blue-500 text-white rounded hover:bg-blue-600 disabled:bg-gray-300 disabled:cursor-not-allowed transition-colors",children:r===i?"当前":"切换"})]},i))})]}),e.jsxs("div",{children:[e.jsx("h4",{className:"font-medium mb-3",children:"性能测试"}),e.jsx("button",{onClick:n,disabled:l,className:"w-full px-4 py-2 bg-purple-500 text-white rounded hover:bg-purple-600 disabled:bg-gray-300 disabled:cursor-not-allowed transition-colors",children:l?"测试中...":"开始性能测试"})]})]}),e.jsxs("div",{children:[e.jsx("h4",{className:"font-medium mb-3",children:"性能统计"}),e.jsx("div",{className:"max-h-80 overflow-y-auto border rounded-lg",children:Object.keys(p).length>0?e.jsx("div",{className:"space-y-2 p-2",children:Object.entries(p).map(([i,d])=>e.jsxs("div",{className:"p-3 bg-gray-50 rounded",children:[e.jsx("div",{className:"font-medium text-blue-600 mb-2 capitalize",children:i.replace("_"," ")}),e.jsxs("div",{className:"grid grid-cols-2 gap-2 text-xs text-gray-600",children:[e.jsxs("div",{children:["平均:"," ",e.jsxs("span",{className:"font-medium",children:[d.avg.toFixed(2),"ms"]})]}),e.jsxs("div",{children:["最小:"," ",e.jsxs("span",{className:"font-medium",children:[d.min.toFixed(2),"ms"]})]}),e.jsxs("div",{children:["最大:"," ",e.jsxs("span",{className:"font-medium",children:[d.max.toFixed(2),"ms"]})]}),e.jsxs("div",{children:["次数:"," ",e.jsx("span",{className:"font-medium",children:d.count})]})]})]},i))}):e.jsxs("div",{className:"p-4 text-center text-gray-500",children:["暂无性能数据",e.jsx("br",{}),e.jsx("small",{children:"执行性能测试后显示统计信息"})]})})]})]})]})})},E=()=>{const a={title:"多端支持实现",language:"typescript",code:`// 多端支持管理器
class MultiPlatformSupportManager {
  private deviceInfo: DeviceInfo;
  private platformConfig: PlatformConfig;
  private adapters: Map<string, RequestAdapter> = new Map();
  private activeAdapter: RequestAdapter | null = null;

  constructor() {
    this.deviceInfo = this.detectDevice();
    this.platformConfig = this.getPlatformConfig(this.deviceInfo.platform);
    this.initializeAdapters();
    this.selectBestAdapter();
  }

  // 检测设备信息
  private detectDevice(): DeviceInfo {
    const userAgent = navigator.userAgent;
    const screen = window.screen;

    // 检测平台类型
    let platform: PlatformType = 'web';
    if (/Mobile|Android|iPhone|iPad/.test(userAgent)) {
      if (/iPad/.test(userAgent) || (screen.width >= 768 && screen.height >= 1024)) {
        platform = 'tablet';
      } else {
        platform = 'mobile';
      }
    } else if (/Electron/.test(userAgent)) {
      platform = 'desktop';
    } else if (/TV|SmartTV/.test(userAgent)) {
      platform = 'tv';
    }

    return {
      platform,
      userAgent,
      screenWidth: screen.width,
      screenHeight: screen.height,
      pixelRatio: window.devicePixelRatio || 1,
      touchSupport: 'ontouchstart' in window || navigator.maxTouchPoints > 0,
      orientation: screen.width > screen.height ? 'landscape' : 'portrait'
    };
  }

  // 获取平台配置
  private getPlatformConfig(platform: PlatformType): PlatformConfig {
    const configs: Record<PlatformType, PlatformConfig> = {
      web: {
        platform: 'web',
        maxConcurrentRequests: 6,
        timeout: 30000,
        retryAttempts: 3,
        cacheSize: 50 * 1024 * 1024, // 50MB
        compressionEnabled: true,
        batchingEnabled: true,
        prefetchEnabled: true,
        headers: { 'Accept': 'application/json, text/plain, */*' }
      },
      mobile: {
        platform: 'mobile',
        maxConcurrentRequests: 3,
        timeout: 15000,
        retryAttempts: 2,
        cacheSize: 20 * 1024 * 1024, // 20MB
        compressionEnabled: true,
        batchingEnabled: true,
        prefetchEnabled: false, // 节省流量
        headers: { 'Accept': 'application/json', 'Cache-Control': 'max-age=300' }
      }
      // ... 其他平台配置
    };

    return configs[platform];
  }

  // 初始化适配器
  private initializeAdapters() {
    // Fetch API 适配器
    this.registerAdapter({
      name: 'fetch',
      platform: ['web', 'mobile', 'tablet', 'desktop'],
      execute: async (config) => {
        const response = await fetch(config.url, {
          method: config.method,
          headers: config.headers,
          body: config.body ? JSON.stringify(config.body) : undefined
        });

        if (!response.ok) {
          throw new Error(\`HTTP \${response.status}: \${response.statusText}\`);
        }

        return response.json();
      },
      isSupported: () => typeof fetch !== 'undefined'
    });

    // XMLHttpRequest 适配器（兼容性）
    this.registerAdapter({
      name: 'xhr',
      platform: ['web', 'mobile', 'tablet', 'desktop', 'tv'],
      execute: (config) => {
        return new Promise((resolve, reject) => {
          const xhr = new XMLHttpRequest();
          xhr.open(config.method, config.url);

          Object.entries(config.headers || {}).forEach(([key, value]) => {
            xhr.setRequestHeader(key, value);
          });

          xhr.onload = () => {
            if (xhr.status >= 200 && xhr.status < 300) {
              resolve(JSON.parse(xhr.responseText));
            } else {
              reject(new Error(\`HTTP \${xhr.status}: \${xhr.statusText}\`));
            }
          };

          xhr.send(config.body ? JSON.stringify(config.body) : undefined);
        });
      },
      isSupported: () => typeof XMLHttpRequest !== 'undefined'
    });
  }

  // 选择最佳适配器
  private selectBestAdapter() {
    const platformAdapters = Array.from(this.adapters.values())
      .filter(adapter =>
        adapter.platform.includes(this.deviceInfo.platform) &&
        adapter.isSupported()
      )
      .sort((a, b) => {
        // 优先级排序：fetch > xhr > simple
        const priority = { fetch: 3, xhr: 2, simple: 1 };
        return (priority[b.name] || 0) - (priority[a.name] || 0);
      });

    this.activeAdapter = platformAdapters[0] || null;
  }

  // 执行请求
  async request(config: RequestConfig) {
    if (!this.activeAdapter) {
      throw new Error('No suitable adapter available for current platform');
    }

    const startTime = performance.now();

    try {
      // 合并平台配置
      const requestConfig = {
        method: 'GET',
        ...config,
        headers: {
          ...this.platformConfig.headers,
          ...config.headers
        },
        timeout: config.timeout || this.platformConfig.timeout
      };

      const result = await this.activeAdapter.execute(requestConfig);

      return {
        data: result,
        adapter: this.activeAdapter.name,
        platform: this.deviceInfo.platform,
        duration: performance.now() - startTime
      };
    } catch (error) {
      throw error;
    }
  }
}`,highlights:[15,25,35,45,55,65,75,85,95,105,115,125]};return e.jsx(y,{title:"多端支持",description:"多端支持是现代应用开发的重要需求，它确保应用能够在不同平台和设备上提供一致且优化的用户体验。",overview:e.jsxs("div",{className:"space-y-4",children:[e.jsxs("div",{children:[e.jsx("h3",{className:"text-lg font-semibold mb-2",children:"核心概念"}),e.jsxs("ul",{className:"space-y-2 text-gray-700",children:[e.jsxs("li",{children:[e.jsx("strong",{children:"平台检测："}),"自动识别运行环境（Web、移动端、桌面端、TV等）"]}),e.jsxs("li",{children:[e.jsx("strong",{children:"适配器模式："}),"为不同平台提供统一的请求接口"]}),e.jsxs("li",{children:[e.jsx("strong",{children:"配置优化："}),"根据平台特性调整请求参数和策略"]}),e.jsxs("li",{children:[e.jsx("strong",{children:"性能适配："}),"针对设备性能和网络条件优化请求行为"]}),e.jsxs("li",{children:[e.jsx("strong",{children:"兼容性处理："}),"确保在各种环境下的功能可用性"]})]})]}),e.jsxs("div",{children:[e.jsx("h3",{className:"text-lg font-semibold mb-2",children:"主要优势"}),e.jsxs("ul",{className:"space-y-2 text-gray-700",children:[e.jsxs("li",{children:[e.jsx("strong",{children:"一致体验："}),"在不同平台上提供统一的功能和性能"]}),e.jsxs("li",{children:[e.jsx("strong",{children:"性能优化："}),"根据平台特性优化请求策略和资源使用"]}),e.jsxs("li",{children:[e.jsx("strong",{children:"开发效率："}),"统一的API减少平台特定的代码维护"]}),e.jsxs("li",{children:[e.jsx("strong",{children:"用户覆盖："}),"支持更多设备类型，扩大用户群体"]}),e.jsxs("li",{children:[e.jsx("strong",{children:"未来兼容："}),"易于扩展支持新的平台和设备"]})]})]}),e.jsxs("div",{children:[e.jsx("h3",{className:"text-lg font-semibold mb-2",children:"适用场景"}),e.jsxs("ul",{className:"space-y-2 text-gray-700",children:[e.jsxs("li",{children:[e.jsx("strong",{children:"跨平台应用："}),"需要在Web、移动端、桌面端运行的应用"]}),e.jsxs("li",{children:[e.jsx("strong",{children:"响应式设计："}),"适配不同屏幕尺寸和交互方式的应用"]}),e.jsxs("li",{children:[e.jsx("strong",{children:"IoT应用："}),"需要支持智能TV、手表等设备的应用"]}),e.jsxs("li",{children:[e.jsx("strong",{children:"企业应用："}),"需要在多种设备上保持一致性的业务应用"]}),e.jsxs("li",{children:[e.jsx("strong",{children:"游戏应用："}),"需要在不同平台上优化性能的游戏"]})]})]}),e.jsxs("div",{children:[e.jsx("h3",{className:"text-lg font-semibold mb-2",children:"注意事项"}),e.jsxs("ul",{className:"space-y-2 text-gray-700",children:[e.jsxs("li",{children:[e.jsx("strong",{children:"性能差异："}),"不同平台的性能和资源限制差异很大"]}),e.jsxs("li",{children:[e.jsx("strong",{children:"API兼容性："}),"某些API在特定平台上可能不可用"]}),e.jsxs("li",{children:[e.jsx("strong",{children:"用户体验："}),"需要考虑不同平台的交互习惯和设计规范"]}),e.jsxs("li",{children:[e.jsx("strong",{children:"测试复杂性："}),"需要在多个平台上进行充分测试"]}),e.jsxs("li",{children:[e.jsx("strong",{children:"维护成本："}),"支持多平台会增加开发和维护复杂度"]})]})]})]}),examples:[{title:"基础多端支持",component:e.jsx(w,{}),description:"演示自动平台检测、配置适配和请求执行功能。",observationPoints:["观察设备信息面板，显示了当前平台的详细信息","查看平台配置，不同平台有不同的优化参数","执行测试请求，观察适配器选择和性能表现","尝试调整浏览器窗口大小，观察设备信息的变化","在不同设备上访问，比较平台检测的准确性"],keyPoints:["平台检测基于User Agent、屏幕尺寸、API支持等多个因素","每个平台都有针对性的配置优化，如并发数、超时时间等","适配器会根据平台支持情况自动选择最佳实现","性能监控帮助了解不同平台的请求表现"],commonTraps:["User Agent检测不准确或被伪造","平台配置过于激进导致兼容性问题","忽略设备性能差异导致卡顿","适配器选择逻辑不当影响功能"],solutions:["结合多种检测方法提高平台识别准确性","采用保守的默认配置，逐步优化","实现性能监控和自适应调整","提供手动适配器选择的备选方案"],importantTips:["设备信息会实时更新，包括屏幕方向变化等","平台配置针对不同设备的性能和网络特点进行了优化","请求历史显示了适配器使用情况和性能数据"],codeExample:a},{title:"适配器比较",component:e.jsx(A,{}),description:"比较不同请求适配器的性能和兼容性。",observationPoints:["查看当前平台支持的所有适配器","手动切换不同的适配器，观察功能差异","执行性能测试，比较各适配器的表现","观察性能统计数据，包括平均、最小、最大耗时","注意错误处理和兼容性差异"],keyPoints:["Fetch API通常性能最好但兼容性相对较差","XMLHttpRequest兼容性好但功能相对有限","简化适配器适用于资源受限的设备","性能测试帮助选择最适合的适配器"],commonTraps:["盲目选择最新的API而忽略兼容性","性能测试样本不足导致结论偏差","忽略错误处理的差异","适配器切换时状态不一致"],solutions:["实现渐进增强，优先保证基础功能","进行充分的性能测试和统计分析","统一错误处理接口","实现适配器状态管理和迁移"],importantTips:["适配器列表显示了当前平台的所有可用选项","性能测试会执行多个并发请求来评估适配器表现","统计数据包括成功和失败的请求，帮助全面评估"],codeExample:{title:"请求适配器比较系统实现",language:"typescript",code:`// 适配器性能比较工具
class AdapterPerformanceComparator {
  private adapters: Map<string, RequestAdapter> = new Map();
  private performanceData: Map<string, PerformanceMetrics> = new Map();
  private testConfig: TestConfig;

  constructor(testConfig: TestConfig) {
    this.testConfig = testConfig;
    this.initializeAdapters();
  }

  // 初始化所有可用适配器
  private initializeAdapters(): void {
    // Fetch API 适配器
    this.adapters.set('fetch', {
      name: 'Fetch API',
      platform: ['web', 'mobile'],
      isSupported: () => typeof fetch !== 'undefined',
      execute: async (config: RequestConfig) => {
        const response = await fetch(config.url, {
          method: config.method || 'GET',
          headers: config.headers,
          body: config.body ? JSON.stringify(config.body) : undefined,
          signal: config.signal
        });
        return response.json();
      }
    });

    // XMLHttpRequest 适配器
    this.adapters.set('xhr', {
      name: 'XMLHttpRequest',
      platform: ['web', 'mobile', 'desktop'],
      isSupported: () => typeof XMLHttpRequest !== 'undefined',
      execute: (config: RequestConfig) => {
        return new Promise((resolve, reject) => {
          const xhr = new XMLHttpRequest();
          xhr.open(config.method || 'GET', config.url);

          if (config.headers) {
            Object.entries(config.headers).forEach(([key, value]) => {
              xhr.setRequestHeader(key, value);
            });
          }

          xhr.onload = () => {
            if (xhr.status >= 200 && xhr.status < 300) {
              resolve(JSON.parse(xhr.responseText));
            } else {
              reject(new Error(\`HTTP \${xhr.status}: \${xhr.statusText}\`));
            }
          };

          xhr.onerror = () => reject(new Error('Network error'));
          xhr.ontimeout = () => reject(new Error('Request timeout'));

          if (config.timeout) {
            xhr.timeout = config.timeout;
          }

          xhr.send(config.body ? JSON.stringify(config.body) : null);
        });
      }
    });

    // 简化适配器（用于低端设备）
    this.adapters.set('simple', {
      name: 'Simple Adapter',
      platform: ['tv', 'watch'],
      isSupported: () => true,
      execute: async (config: RequestConfig) => {
        // 简化的实现，减少内存使用
        const response = await fetch(config.url, {
          method: config.method || 'GET',
          headers: { 'Content-Type': 'application/json' }
        });
        return response.json();
      }
    });
  }

  // 获取支持的适配器列表
  getSupportedAdapters(): RequestAdapter[] {
    return Array.from(this.adapters.values()).filter(adapter => adapter.isSupported());
  }

  // 执行单个适配器的性能测试
  async testAdapter(adapterId: string, iterations: number = 10): Promise<PerformanceMetrics> {
    const adapter = this.adapters.get(adapterId);
    if (!adapter || !adapter.isSupported()) {
      throw new Error(\`Adapter \${adapterId} not supported\`);
    }

    const durations: number[] = [];
    const errors: string[] = [];
    let successCount = 0;

    for (let i = 0; i < iterations; i++) {
      const startTime = performance.now();

      try {
        await adapter.execute({
          url: this.testConfig.testUrl,
          method: 'GET',
          timeout: this.testConfig.timeout
        });

        const duration = performance.now() - startTime;
        durations.push(duration);
        successCount++;
      } catch (error) {
        errors.push(error instanceof Error ? error.message : 'Unknown error');
      }

      // 添加延迟避免请求过于频繁
      await new Promise(resolve => setTimeout(resolve, 100));
    }

    const metrics: PerformanceMetrics = {
      adapterId,
      adapterName: adapter.name,
      totalRequests: iterations,
      successCount,
      errorCount: errors.length,
      successRate: (successCount / iterations) * 100,
      avgDuration: durations.reduce((a, b) => a + b, 0) / durations.length || 0,
      minDuration: Math.min(...durations) || 0,
      maxDuration: Math.max(...durations) || 0,
      errors: errors.slice(0, 5) // 只保留前5个错误
    };

    this.performanceData.set(adapterId, metrics);
    return metrics;
  }

  // 比较所有支持的适配器
  async compareAllAdapters(): Promise<PerformanceMetrics[]> {
    const supportedAdapters = this.getSupportedAdapters();
    const results: PerformanceMetrics[] = [];

    for (const adapter of supportedAdapters) {
      try {
        const metrics = await this.testAdapter(adapter.name.toLowerCase().replace(/\\s+/g, ''));
        results.push(metrics);
      } catch (error) {
        console.error(\`Failed to test adapter \${adapter.name}:\`, error);
      }
    }

    // 按平均响应时间排序
    return results.sort((a, b) => a.avgDuration - b.avgDuration);
  }

  // 获取推荐的适配器
  getRecommendedAdapter(platform: PlatformType): string | null {
    const supportedAdapters = this.getSupportedAdapters()
      .filter(adapter => adapter.platform.includes(platform));

    if (supportedAdapters.length === 0) return null;

    // 根据平台特性选择最佳适配器
    switch (platform) {
      case 'web':
      case 'mobile':
        return supportedAdapters.find(a => a.name === 'Fetch API')?.name.toLowerCase().replace(/\\s+/g, '') || 'xhr';
      case 'desktop':
        return 'xhr';
      case 'tv':
      case 'watch':
        return 'simple';
      default:
        return supportedAdapters[0].name.toLowerCase().replace(/\\s+/g, '');
    }
  }
}`,highlights:[2,13,28,58,75,105,125,140]}}],tutorial:{concepts:["多端支持的核心是抽象化平台差异，提供统一的开发接口","适配器模式是实现多端支持的经典设计模式","平台检测需要综合考虑User Agent、API支持、硬件特性等因素","性能优化应该基于平台特性和用户体验需求","兼容性处理包括API polyfill、功能降级、错误处理等","测试策略需要覆盖目标平台的主要设备和浏览器"],steps:["分析目标平台和设备，确定支持范围和优先级","设计平台检测机制，识别运行环境和设备特性","定义统一的请求接口和配置结构","实现各平台的适配器，处理API差异和兼容性","设计平台特定的配置和优化策略","实现适配器选择和切换机制","添加性能监控和错误处理","进行跨平台测试和性能优化"],tips:["使用特性检测而不是浏览器检测来判断API支持","实现渐进增强，确保基础功能在所有平台上可用","考虑设备性能差异，为低端设备提供优化方案","提供配置选项，允许开发者根据需求调整行为","实现完善的错误处理和降级机制","使用自动化测试覆盖主要平台和设备","监控实际使用中的性能数据，持续优化","保持代码的可维护性，避免过度复杂的适配逻辑"]},interview:{questions:[{question:"如何实现跨平台的请求适配？",answer:"实现跨平台请求适配主要包括：1) 平台检测：识别运行环境和设备特性；2) 适配器模式：为不同平台实现统一接口；3) 配置管理：根据平台特性调整参数；4) 兼容性处理：提供API polyfill和降级方案；5) 性能优化：针对平台特点优化请求策略；6) 错误处理：统一异常处理和恢复机制。"},{question:"移动端和桌面端的请求优化有什么区别？",answer:"主要区别包括：1) 网络环境：移动端网络不稳定，需要更短的超时时间和更多重试；2) 性能限制：移动端CPU和内存有限，需要减少并发请求数；3) 电池消耗：移动端需要考虑省电，减少不必要的网络请求；4) 流量成本：移动端需要启用压缩，禁用预取；5) 交互方式：移动端触摸操作，桌面端鼠标键盘；6) 屏幕尺寸：影响数据加载策略和UI适配。"},{question:"如何处理不同平台的API兼容性问题？",answer:"API兼容性处理策略：1) 特性检测：使用typeof、in操作符检测API支持；2) Polyfill：为不支持的API提供兼容实现；3) 适配器模式：抽象API差异，提供统一接口；4) 渐进增强：优先保证基础功能，逐步增强；5) 降级处理：当高级功能不可用时提供替代方案；6) 条件加载：根据平台动态加载相应的实现；7) 错误边界：捕获和处理兼容性错误。"},{question:"多端应用的性能监控策略是什么？",answer:"性能监控策略包括：1) 平台分类：按设备类型、操作系统、浏览器分类监控；2) 关键指标：请求耗时、成功率、错误类型、资源使用；3) 实时监控：使用Performance API收集性能数据；4) 数据上报：定期或触发式上报监控数据；5) 阈值告警：设置平台特定的性能阈值；6) 趋势分析：分析性能变化趋势和异常；7) 优化反馈：基于监控数据调整配置和策略。"},{question:"如何设计可扩展的多端支持架构？",answer:"可扩展架构设计：1) 插件化：将平台支持设计为可插拔的模块；2) 配置驱动：通过配置文件定义平台特性和策略；3) 接口抽象：定义清晰的适配器接口和生命周期；4) 工厂模式：使用工厂创建和管理适配器实例；5) 策略模式：将平台特定逻辑封装为策略；6) 观察者模式：监听平台变化和状态更新；7) 版本管理：支持适配器的版本控制和升级；8) 文档规范：提供清晰的扩展指南和API文档。"}],keyPoints:["多端支持需要平衡功能一致性和平台特性优化","适配器模式是实现多端支持的核心设计模式","平台检测应该基于特性而不是User Agent","性能优化必须考虑不同平台的硬件和网络限制","兼容性处理需要提供优雅的降级方案","测试和监控是确保多端支持质量的关键"]},bestPractices:{dos:["使用特性检测而不是浏览器检测","实现渐进增强，确保基础功能可用","根据平台特性优化配置参数","提供统一的API接口和错误处理","实现完善的性能监控和分析","进行充分的跨平台测试","保持代码的模块化和可维护性","提供清晰的文档和使用指南"],donts:["不要依赖不稳定的User Agent检测","不要忽略低端设备的性能限制","不要为了功能完整性牺牲兼容性","不要忽略平台特定的用户体验","不要过度复杂化适配逻辑","不要忽略错误处理和降级方案","不要缺少性能监控和优化","不要忽略新平台和设备的支持"],patterns:["使用Adapter模式抽象平台差异","实现Factory模式创建适配器实例","使用Strategy模式处理平台特定逻辑","实现Observer模式监听平台变化","使用Command模式封装平台操作","实现Chain of Responsibility处理兼容性","使用Facade模式简化多端接口","实现Plugin模式支持扩展"]}})};export{E as default};
