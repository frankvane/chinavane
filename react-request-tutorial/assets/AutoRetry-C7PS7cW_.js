var j=Object.defineProperty;var v=(u,o,n)=>o in u?j(u,o,{enumerable:!0,configurable:!0,writable:!0,value:n}):u[o]=n;var R=(u,o,n)=>v(u,typeof o!="symbol"?o+"":o,n);import{j as e,r as p}from"./index-Cnne2xOM.js";import{C as T}from"./ComponentTemplate-iqsAHbUA.js";class w{constructor(){R(this,"defaultConfig",{maxRetries:3,strategy:"exponential",baseDelay:1e3,maxDelay:1e4,retryCondition:o=>{var n;return o.name==="AbortError"?!1:o.code==="NETWORK_ERROR"||((n=o.response)==null?void 0:n.status)>=500||o.code==="TIMEOUT"}})}calculateDelay(o,n){let r;switch(n.strategy){case"exponential":r=n.baseDelay*Math.pow(2,o-1);break;case"linear":r=n.baseDelay*o;break;case"fixed":r=n.baseDelay;break;case"smart":o<=2?r=n.baseDelay:r=n.baseDelay*Math.pow(1.5,o-2);break;default:r=n.baseDelay}const a=Math.random()*.1*r;return r=r+a,Math.min(r,n.maxDelay)}async executeWithRetry(o,n={}){var l,d;const r={...this.defaultConfig,...n},a=[],y=Date.now();let c;for(let t=1;t<=r.maxRetries+1;t++)try{a.push(`尝试 ${t}: 开始请求`);const s=await o(),i=Date.now()-y;return a.push(`尝试 ${t}: 请求成功`),{success:!0,data:s,attempts:t,totalTime:i,retryLog:a}}catch(s){if(c=s,a.push(`尝试 ${t}: 请求失败 - ${s.message}`),t>r.maxRetries){a.push(`达到最大重试次数 ${r.maxRetries}，停止重试`);break}if(!((l=r.retryCondition)!=null&&l.call(r,s))){a.push("错误不满足重试条件，停止重试");break}const i=this.calculateDelay(t,r);a.push(`等待 ${Math.round(i)}ms 后重试`),(d=r.onRetry)==null||d.call(r,t,s),await new Promise(m=>setTimeout(m,i))}const x=Date.now()-y;return{success:!1,error:c,attempts:r.maxRetries+1,totalTime:x,retryLog:a}}createRetryableFetch(o={}){return async(n,r={})=>this.executeWithRetry(()=>fetch(n,r).then(a=>{if(!a.ok){const y=new Error(`HTTP ${a.status}: ${a.statusText}`);throw y.response=a,y}return a}),o)}}const b=new w,E=()=>{const[u,o]=p.useState([]),[n,r]=p.useState(!1),[a,y]=p.useState("exponential"),[c,x]=p.useState(3),l=t=>{o(s=>[...s.slice(-9),`${new Date().toLocaleTimeString()}: ${t}`])},d=async(t=!1)=>{r(!0),l(`开始请求 (策略: ${a}, 最大重试: ${c})`);try{const s=await b.executeWithRetry(async()=>{if(await new Promise(i=>setTimeout(i,500)),t&&Math.random()>.3){const i=new Error("网络错误");throw i.code="NETWORK_ERROR",i}return{data:"请求成功",timestamp:Date.now()}},{maxRetries:c,strategy:a,baseDelay:1e3,onRetry:(i,m)=>{l(`第 ${i} 次重试，错误: ${m.message}`)}});s.success?l(`请求成功！尝试次数: ${s.attempts}, 总耗时: ${s.totalTime}ms`):l(`请求最终失败！尝试次数: ${s.attempts}, 总耗时: ${s.totalTime}ms`),s.retryLog.forEach(i=>l(`  ${i}`))}catch(s){l(`请求异常: ${s.message}`)}finally{r(!1)}};return e.jsxs("div",{className:"space-y-4",children:[e.jsxs("div",{className:"grid grid-cols-2 gap-4",children:[e.jsxs("div",{className:"space-y-2",children:[e.jsx("h4",{className:"font-medium",children:"重试策略"}),e.jsxs("select",{value:a,onChange:t=>y(t.target.value),className:"w-full p-2 border rounded",children:[e.jsx("option",{value:"exponential",children:"指数退避"}),e.jsx("option",{value:"linear",children:"线性退避"}),e.jsx("option",{value:"fixed",children:"固定延迟"}),e.jsx("option",{value:"smart",children:"智能退避"})]})]}),e.jsxs("div",{className:"space-y-2",children:[e.jsx("h4",{className:"font-medium",children:"最大重试次数"}),e.jsxs("select",{value:c,onChange:t=>x(Number(t.target.value)),className:"w-full p-2 border rounded",children:[e.jsx("option",{value:1,children:"1次"}),e.jsx("option",{value:2,children:"2次"}),e.jsx("option",{value:3,children:"3次"}),e.jsx("option",{value:5,children:"5次"})]})]})]}),e.jsxs("div",{className:"space-y-2",children:[e.jsx("h4",{className:"font-medium",children:"测试请求"}),e.jsxs("div",{className:"flex gap-2",children:[e.jsx("button",{onClick:()=>d(!1),disabled:n,className:"px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600 disabled:opacity-50",children:"成功请求"}),e.jsx("button",{onClick:()=>d(!0),disabled:n,className:"px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600 disabled:opacity-50",children:"失败请求 (70%失败率)"})]})]}),e.jsxs("div",{className:"bg-blue-50 p-3 rounded",children:[e.jsx("h4",{className:"font-medium mb-2",children:"策略说明"}),e.jsxs("div",{className:"text-sm text-gray-700",children:[e.jsxs("div",{children:[e.jsx("strong",{children:"指数退避"}),": 1s → 2s → 4s → 8s (快速增长)"]}),e.jsxs("div",{children:[e.jsx("strong",{children:"线性退避"}),": 1s → 2s → 3s → 4s (均匀增长)"]}),e.jsxs("div",{children:[e.jsx("strong",{children:"固定延迟"}),": 1s → 1s → 1s → 1s (固定间隔)"]}),e.jsxs("div",{children:[e.jsx("strong",{children:"智能退避"}),": 1s → 1s → 1.5s → 2.25s (自适应)"]})]})]}),e.jsxs("div",{className:"bg-gray-50 p-3 rounded max-h-60 overflow-y-auto",children:[e.jsx("h4",{className:"font-medium mb-2",children:"请求日志"}),u.map((t,s)=>e.jsx("div",{className:"text-sm text-gray-700 font-mono",children:t},s))]})]})},N=()=>{const[u,o]=p.useState([]),[n,r]=p.useState(!1),[a,y]=p.useState("500"),c=l=>{o(d=>[...d.slice(-9),`${new Date().toLocaleTimeString()}: ${l}`])},x=async()=>{var l;r(!0),c(`模拟HTTP ${a}错误请求`);try{const t=await b.createRetryableFetch({maxRetries:3,strategy:"exponential",baseDelay:1e3,retryCondition:s=>{var i,m,h,g,f;return((i=s.response)==null?void 0:i.status)===400||((m=s.response)==null?void 0:m.status)===401||((h=s.response)==null?void 0:h.status)===403||((g=s.response)==null?void 0:g.status)===404?!1:((f=s.response)==null?void 0:f.status)>=500||s.code==="NETWORK_ERROR"},onRetry:(s,i)=>{var m;c(`第 ${s} 次重试，HTTP状态: ${((m=i.response)==null?void 0:m.status)||"网络错误"}`)}})(`https://httpstat.us/${a}?sleep=500`,{method:"GET"});t.success?c(`请求成功！尝试次数: ${t.attempts}, 总耗时: ${t.totalTime}ms`):c(`请求最终失败！尝试次数: ${t.attempts}, 错误: ${(l=t.error)==null?void 0:l.message}`),t.retryLog.forEach(s=>c(`  ${s}`))}catch(d){c(`请求异常: ${d.message}`)}finally{r(!1)}};return e.jsxs("div",{className:"space-y-4",children:[e.jsxs("div",{className:"space-y-2",children:[e.jsx("h4",{className:"font-medium",children:"HTTP状态码测试"}),e.jsx("div",{className:"grid grid-cols-2 gap-2",children:["400","401","403","404","500","502","503","504"].map(l=>e.jsxs("button",{onClick:()=>y(l),className:`px-3 py-1 rounded text-sm ${a===l?"bg-blue-500 text-white":"bg-gray-200 text-gray-700 hover:bg-gray-300"}`,children:["HTTP ",l]},l))})]}),e.jsx("button",{onClick:x,disabled:n,className:"w-full px-4 py-2 bg-orange-500 text-white rounded hover:bg-orange-600 disabled:opacity-50",children:n?"请求中...":`发送 HTTP ${a} 请求`}),e.jsxs("div",{className:"bg-orange-50 p-3 rounded",children:[e.jsx("h4",{className:"font-medium mb-2",children:"重试规则"}),e.jsxs("div",{className:"text-sm text-gray-700",children:[e.jsx("div",{className:"text-green-600",children:"✓ 会重试: 5xx服务器错误、网络错误"}),e.jsx("div",{className:"text-red-600",children:"✗ 不重试: 4xx客户端错误 (400, 401, 403, 404)"})]})]}),e.jsxs("div",{className:"bg-gray-50 p-3 rounded max-h-60 overflow-y-auto",children:[e.jsx("h4",{className:"font-medium mb-2",children:"请求日志"}),u.map((l,d)=>e.jsx("div",{className:"text-sm text-gray-700 font-mono",children:l},d))]})]})},D=()=>{const[u,o]=p.useState([]),[n,r]=p.useState(!1),[a,y]=p.useState("api"),c=t=>{o(s=>[...s.slice(-9),`${new Date().toLocaleTimeString()}: ${t}`])},x={api:{name:"API数据获取",config:{maxRetries:3,strategy:"exponential",baseDelay:1e3,maxDelay:8e3},description:"关键业务数据，需要快速重试"},upload:{name:"文件上传",config:{maxRetries:5,strategy:"linear",baseDelay:2e3,maxDelay:1e4},description:"大文件上传，使用线性退避避免服务器压力"},analytics:{name:"数据统计",config:{maxRetries:2,strategy:"fixed",baseDelay:5e3,maxDelay:5e3},description:"非关键数据，低频重试"},payment:{name:"支付请求",config:{maxRetries:1,strategy:"smart",baseDelay:3e3,maxDelay:3e3},description:"金融交易，谨慎重试避免重复扣款"}},l=async()=>{var s;r(!0);const t=x[a];c(`开始${t.name}场景测试`);try{const i=await b.executeWithRetry(async()=>{await new Promise(h=>setTimeout(h,800));let m=.6;if(a==="payment"&&(m=.3),a==="analytics"&&(m=.8),Math.random()<m){const h=[{message:"网络连接超时",code:"TIMEOUT"},{message:"服务器内部错误",code:"SERVER_ERROR",status:500},{message:"服务不可用",code:"SERVICE_UNAVAILABLE",status:503}],g=h[Math.floor(Math.random()*h.length)],f=new Error(g.message);throw f.code=g.code,g.status&&(f.response={status:g.status}),f}return{scenario:t.name,data:`${t.name}成功`,timestamp:Date.now()}},{...t.config,onRetry:(m,h)=>{c(`${t.name} - 第 ${m} 次重试: ${h.message}`)}});i.success?c(`${t.name}成功！尝试: ${i.attempts}次, 耗时: ${i.totalTime}ms`):c(`${t.name}失败！尝试: ${i.attempts}次, 错误: ${(s=i.error)==null?void 0:s.message}`),i.retryLog.forEach(m=>c(`  ${m}`))}catch(i){c(`${t.name}异常: ${i.message}`)}finally{r(!1)}},d=x[a];return e.jsxs("div",{className:"space-y-4",children:[e.jsxs("div",{className:"space-y-2",children:[e.jsx("h4",{className:"font-medium",children:"应用场景"}),e.jsx("div",{className:"grid grid-cols-2 gap-2",children:Object.entries(x).map(([t,s])=>e.jsxs("button",{onClick:()=>y(t),className:`px-3 py-2 rounded text-sm text-left ${a===t?"bg-purple-500 text-white":"bg-gray-200 text-gray-700 hover:bg-gray-300"}`,children:[e.jsx("div",{className:"font-medium",children:s.name}),e.jsx("div",{className:"text-xs opacity-75",children:s.description})]},t))})]}),e.jsxs("div",{className:"bg-purple-50 p-3 rounded",children:[e.jsxs("h4",{className:"font-medium mb-2",children:[d.name," - 配置详情"]}),e.jsxs("div",{className:"text-sm text-gray-700 space-y-1",children:[e.jsxs("div",{children:["最大重试: ",d.config.maxRetries,"次"]}),e.jsxs("div",{children:["策略: ",d.config.strategy]}),e.jsxs("div",{children:["基础延迟: ",d.config.baseDelay,"ms"]}),e.jsxs("div",{children:["最大延迟: ",d.config.maxDelay,"ms"]}),e.jsx("div",{className:"text-xs text-gray-600 mt-2",children:d.description})]})]}),e.jsx("button",{onClick:l,disabled:n,className:"w-full px-4 py-2 bg-purple-500 text-white rounded hover:bg-purple-600 disabled:opacity-50",children:n?"执行中...":`测试 ${d.name}`}),e.jsxs("div",{className:"bg-gray-50 p-3 rounded max-h-60 overflow-y-auto",children:[e.jsx("h4",{className:"font-medium mb-2",children:"场景日志"}),u.map((t,s)=>e.jsx("div",{className:"text-sm text-gray-700 font-mono",children:t},s))]})]})},S=()=>e.jsx(T,{title:"自动重试",description:"通过智能重试机制，提高请求成功率和系统稳定性",overview:e.jsxs("div",{className:"space-y-4",children:[e.jsxs("div",{children:[e.jsx("h3",{className:"text-lg font-semibold mb-2",children:"核心概念"}),e.jsxs("ul",{className:"list-disc list-inside space-y-1 text-gray-700",children:[e.jsxs("li",{children:[e.jsx("strong",{children:"退避策略"}),"：控制重试间隔时间的算法"]}),e.jsxs("li",{children:[e.jsx("strong",{children:"重试条件"}),"：判断是否应该重试的逻辑"]}),e.jsxs("li",{children:[e.jsx("strong",{children:"最大重试次数"}),"：避免无限重试的保护机制"]}),e.jsxs("li",{children:[e.jsx("strong",{children:"抖动机制"}),"：避免雷群效应的随机延迟"]})]})]}),e.jsxs("div",{children:[e.jsx("h3",{className:"text-lg font-semibold mb-2",children:"退避策略"}),e.jsxs("ul",{className:"list-disc list-inside space-y-1 text-gray-700",children:[e.jsxs("li",{children:[e.jsx("strong",{children:"指数退避"}),"：延迟时间指数增长，适合快速恢复场景"]}),e.jsxs("li",{children:[e.jsx("strong",{children:"线性退避"}),"：延迟时间线性增长，适合稳定增长场景"]}),e.jsxs("li",{children:[e.jsx("strong",{children:"固定延迟"}),"：固定间隔重试，适合周期性故障"]}),e.jsxs("li",{children:[e.jsx("strong",{children:"智能退避"}),"：根据错误类型自适应调整策略"]})]})]}),e.jsxs("div",{children:[e.jsx("h3",{className:"text-lg font-semibold mb-2",children:"主要优势"}),e.jsxs("ul",{className:"list-disc list-inside space-y-1 text-gray-700",children:[e.jsx("li",{children:"提高请求成功率和系统可靠性"}),e.jsx("li",{children:"自动处理临时性网络故障"}),e.jsx("li",{children:"减少用户感知的错误频率"}),e.jsx("li",{children:"支持多种重试策略和自定义配置"})]})]}),e.jsxs("div",{children:[e.jsx("h3",{className:"text-lg font-semibold mb-2",children:"适用场景"}),e.jsxs("ul",{className:"list-disc list-inside space-y-1 text-gray-700",children:[e.jsx("li",{children:"网络不稳定环境下的API调用"}),e.jsx("li",{children:"微服务间的通信重试"}),e.jsx("li",{children:"文件上传下载的断点续传"}),e.jsx("li",{children:"第三方服务集成的容错处理"})]})]})]}),examples:[{title:"基础重试策略",component:e.jsx(E,{}),description:"演示不同退避策略的重试行为",codeExample:{title:"基础重试策略管理器实现",code:`// 基础重试策略管理器
enum RetryStrategy {
  EXPONENTIAL = 'exponential', // 指数退避
  LINEAR = 'linear',           // 线性退避
  FIXED = 'fixed',             // 固定延迟
  SMART = 'smart'              // 智能退避
}

interface RetryConfig {
  maxRetries: number;
  strategy: RetryStrategy;
  baseDelay: number;
  maxDelay: number;
  retryCondition?: (error: any) => boolean;
  onRetry?: (attempt: number, error: any) => void;
}

class BasicRetryManager {
  // 计算不同策略的延迟时间
  private calculateDelay(attempt: number, config: RetryConfig): number {
    let delay: number;
    
    switch (config.strategy) {
      case RetryStrategy.EXPONENTIAL:
        // 指数退避：1s, 2s, 4s, 8s...
        delay = config.baseDelay * Math.pow(2, attempt - 1);
        break;
      
      case RetryStrategy.LINEAR:
        // 线性退避：1s, 2s, 3s, 4s...
        delay = config.baseDelay * attempt;
        break;
      
      case RetryStrategy.FIXED:
        // 固定延迟：1s, 1s, 1s, 1s...
        delay = config.baseDelay;
        break;
      
      case RetryStrategy.SMART:
        // 智能退避：前两次快速，后续指数增长
        if (attempt <= 2) {
          delay = config.baseDelay;
        } else {
          delay = config.baseDelay * Math.pow(1.5, attempt - 2);
        }
        break;
      
      default:
        delay = config.baseDelay;
    }
    
    // 添加随机抖动，避免雷群效应
    const jitter = Math.random() * 0.1 * delay;
    delay = delay + jitter;
    
    return Math.min(delay, config.maxDelay);
  }

  // 执行带重试的请求
  async executeWithRetry(
    requestFn: () => Promise<any>,
    config: RetryConfig
  ): Promise<{ success: boolean; data?: any; attempts: number }> {
    let lastError: any;
    
    for (let attempt = 1; attempt <= config.maxRetries + 1; attempt++) {
      try {
        const result = await requestFn();
        return { success: true, data: result, attempts: attempt };
      } catch (error) {
        lastError = error;
        
        // 最后一次尝试失败
        if (attempt > config.maxRetries) {
          break;
        }
        
        // 检查是否应该重试
        if (config.retryCondition && !config.retryCondition(error)) {
          break;
        }
        
        // 计算延迟时间并等待
        const delay = this.calculateDelay(attempt, config);
        config.onRetry?.(attempt, error);
        
        await new Promise(resolve => setTimeout(resolve, delay));
      }
    }
    
    return { success: false, data: lastError, attempts: config.maxRetries + 1 };
  }
}

// React组件使用示例
const BasicRetryExample: React.FC = () => {
  const [results, setResults] = useState<any[]>([]);
  const retryManager = new BasicRetryManager();

  const testStrategy = async (strategy: RetryStrategy) => {
    const config: RetryConfig = {
      maxRetries: 3,
      strategy,
      baseDelay: 1000,
      maxDelay: 10000,
      retryCondition: (error) => error.message.includes('temporary'),
      onRetry: (attempt, error) => {
        console.log(\`重试第\${attempt}次: \${error.message}\`);
      }
    };

    const mockRequest = () => {
      if (Math.random() < 0.7) {
        throw new Error('temporary network error');
      }
      return Promise.resolve('success');
    };

    const result = await retryManager.executeWithRetry(mockRequest, config);
    setResults(prev => [...prev, { strategy, ...result }]);
  };

  return (
    <div>
      <button onClick={() => testStrategy(RetryStrategy.EXPONENTIAL)}>
        测试指数退避
      </button>
      <button onClick={() => testStrategy(RetryStrategy.LINEAR)}>
        测试线性退避
      </button>
      <button onClick={() => testStrategy(RetryStrategy.SMART)}>
        测试智能退避
      </button>
      
      <div>
        {results.map((result, index) => (
          <div key={index}>
            {result.strategy}: {result.success ? '成功' : '失败'} 
            (尝试{result.attempts}次)
          </div>
        ))}
      </div>
    </div>
  );
};`,language:"typescript",highlights:[2,9,18,20,23,25,29,31,35,37,39,41,49,51,55,57,59,61,63,65,73,75,77,79,81,83,87,89,93,95,97,99,107,109,113,115]},highlights:[22,24,26,28,30,32,34,36,38,40,42,44,48,50,58,60,66,68,74,76,78,80,94,96,102,104],observationPoints:["指数退避策略延迟时间快速增长","线性退避策略延迟时间均匀增长","固定延迟策略保持相同间隔","智能退避策略根据情况自适应调整"],keyPoints:["退避策略影响重试的时间间隔","添加随机抖动避免雷群效应","最大延迟限制防止过长等待","重试回调提供详细的执行信息"],commonTraps:["重试次数设置过多导致长时间等待","没有设置最大延迟时间限制","所有错误都进行重试"],solutions:["根据业务场景合理设置重试次数","设置合理的最大延迟时间","只对可恢复的错误进行重试"],importantTips:["指数退避适合快速恢复的临时故障","线性退避适合需要稳定间隔的场景","智能退避可以根据错误类型调整策略"]},{title:"HTTP状态码重试",component:e.jsx(N,{}),description:"演示基于HTTP状态码的智能重试",codeExample:{title:"HTTP状态码重试管理器实现",code:`// HTTP状态码重试管理器
interface HttpError extends Error {
  response?: {
    status: number;
    statusText: string;
  };
  code?: string;
}

class HttpRetryManager {
  // 判断HTTP错误是否可重试
  private isRetryableError(error: HttpError): boolean {
    // 网络错误，可重试
    if (error.code === 'NETWORK_ERROR' || error.code === 'TIMEOUT') {
      return true;
    }
    
    // 没有响应状态码，可能是网络问题
    if (!error.response?.status) {
      return true;
    }
    
    const status = error.response.status;
    
    // 5xx服务器错误，通常可重试
    if (status >= 500 && status < 600) {
      return true;
    }
    
    // 特殊的4xx错误可重试
    if (status === 408 || status === 429) { // 请求超时、限流
      return true;
    }
    
    // 其他4xx客户端错误，不重试
    if (status >= 400 && status < 500) {
      return false;
    }
    
    return false;
  }

  // 根据HTTP状态码计算重试延迟
  private calculateHttpDelay(attempt: number, error: HttpError): number {
    const baseDelay = 1000;
    
    // 限流错误使用更长延迟
    if (error.response?.status === 429) {
      return baseDelay * Math.pow(2, attempt) + Math.random() * 1000;
    }
    
    // 服务器错误使用指数退避
    if (error.response?.status && error.response.status >= 500) {
      return baseDelay * Math.pow(1.5, attempt - 1) + Math.random() * 500;
    }
    
    // 网络错误使用标准指数退避
    return baseDelay * Math.pow(2, attempt - 1) + Math.random() * 200;
  }

  // 执行HTTP请求重试
  async fetchWithRetry(
    url: string,
    options: RequestInit = {},
    maxRetries: number = 3
  ): Promise<Response> {
    let lastError: HttpError;
    
    for (let attempt = 1; attempt <= maxRetries + 1; attempt++) {
      try {
        const controller = new AbortController();
        const timeoutId = setTimeout(() => controller.abort(), 10000);
        
        const response = await fetch(url, {
          ...options,
          signal: controller.signal
        });
        
        clearTimeout(timeoutId);
        
        // 检查响应状态
        if (!response.ok) {
          const error: HttpError = new Error(\`HTTP \${response.status}: \${response.statusText}\`);
          error.response = {
            status: response.status,
            statusText: response.statusText
          };
          throw error;
        }
        
        return response;
      } catch (error) {
        lastError = error as HttpError;
        
        // 最后一次尝试
        if (attempt > maxRetries) {
          break;
        }
        
        // 检查是否可重试
        if (!this.isRetryableError(lastError)) {
          console.log(\`不可重试的错误: \${lastError.message}\`);
          break;
        }
        
        // 计算延迟并等待
        const delay = this.calculateHttpDelay(attempt, lastError);
        console.log(\`第\${attempt}次重试失败，\${delay}ms后重试: \${lastError.message}\`);
        
        await new Promise(resolve => setTimeout(resolve, delay));
      }
    }
    
    throw lastError;
  }
}

// React组件使用示例
const HttpRetryExample: React.FC = () => {
  const [results, setResults] = useState<string[]>([]);
  const httpRetryManager = new HttpRetryManager();

  const testHttpRetry = async (scenario: string) => {
    try {
      let url: string;
      
      switch (scenario) {
        case '500error':
          url = '/api/server-error'; // 模拟500错误
          break;
        case '404error':
          url = '/api/not-found'; // 模拟404错误
          break;
        case 'timeout':
          url = '/api/slow-response'; // 模拟超时
          break;
        default:
          url = '/api/success';
      }
      
      const response = await httpRetryManager.fetchWithRetry(url, {}, 3);
      const data = await response.text();
      
      setResults(prev => [...prev, \`\${scenario}: 成功 - \${data}\`]);
    } catch (error) {
      setResults(prev => [...prev, \`\${scenario}: 失败 - \${error.message}\`]);
    }
  };

  return (
    <div>
      <button onClick={() => testHttpRetry('500error')}>
        测试500错误重试
      </button>
      <button onClick={() => testHttpRetry('404error')}>
        测试404错误(不重试)
      </button>
      <button onClick={() => testHttpRetry('timeout')}>
        测试超时重试
      </button>
      
      <div>
        {results.map((result, index) => (
          <div key={index}>{result}</div>
        ))}
      </div>
    </div>
  );
};`,language:"typescript",highlights:[2,10,12,14,16,18,20,22,24,26,28,30,32,34,36,38,42,44,46,48,50,52,54,56,58,60,62,64,66,68,70,72,76,78,80,82,86,88,92,94,96,98,104,106,110,112,114,116,118,120,122,124,126,128,130,132,134,136,138,140,142,144]},highlights:[12,14,16,18,20,22,26,28,30,32,34,36,42,44,46,48,50,52,56,58,66,68,74,76,78,80,88,90,94,96],observationPoints:["5xx服务器错误会触发重试","4xx客户端错误不会重试","网络错误会触发重试","重试条件可以自定义配置"],keyPoints:["区分可重试和不可重试的错误类型","服务器错误通常是临时性的","客户端错误通常是永久性的","自定义重试条件提高重试效率"],commonTraps:["对所有HTTP错误都进行重试","没有区分临时性和永久性错误","重试逻辑过于复杂"],solutions:["明确区分可重试和不可重试的状态码","根据业务逻辑设计重试条件","保持重试逻辑简单明确"],importantTips:["400、401、403、404等客户端错误不应重试","500、502、503、504等服务器错误可以重试","网络超时和连接错误通常可以重试"]},{title:"实际应用场景",component:e.jsx(D,{}),description:"演示不同业务场景的重试策略配置",codeExample:{title:"实际应用场景重试管理器实现",code:`// 实际应用场景重试管理器
class RealWorldRetryManager {
  // API数据获取重试配置
  private apiRetryConfig = {
    maxRetries: 3,
    strategy: 'exponential' as const,
    baseDelay: 500,
    maxDelay: 5000,
    retryCondition: (error: any) => {
      return error.code === 'NETWORK_ERROR' || 
             (error.response?.status >= 500 && error.response?.status < 600);
    }
  };

  // 文件上传重试配置
  private uploadRetryConfig = {
    maxRetries: 5,
    strategy: 'linear' as const,
    baseDelay: 2000,
    maxDelay: 15000,
    retryCondition: (error: any) => {
      // 文件上传失败通常可以重试
      return error.code !== 'FILE_TOO_LARGE' && 
             error.response?.status !== 413;
    }
  };

  // 数据统计重试配置
  private analyticsRetryConfig = {
    maxRetries: 2,
    strategy: 'fixed' as const,
    baseDelay: 5000,
    maxDelay: 5000,
    retryCondition: (error: any) => {
      // 统计数据不是关键功能，简单重试
      return error.code === 'NETWORK_ERROR';
    }
  };

  // 支付请求重试配置（谨慎）
  private paymentRetryConfig = {
    maxRetries: 1,
    strategy: 'fixed' as const,
    baseDelay: 3000,
    maxDelay: 3000,
    retryCondition: (error: any) => {
      // 只对明确的网络错误重试，避免重复支付
      return error.code === 'NETWORK_ERROR' && 
             !error.response; // 确保没有收到任何响应
    }
  };

  // API数据获取
  async fetchApiData(endpoint: string): Promise<any> {
    return this.executeWithRetry(
      () => fetch(endpoint).then(res => res.json()),
      this.apiRetryConfig,
      'API数据获取'
    );
  }

  // 文件上传
  async uploadFile(file: File, uploadUrl: string): Promise<any> {
    const formData = new FormData();
    formData.append('file', file);

    return this.executeWithRetry(
      () => fetch(uploadUrl, {
        method: 'POST',
        body: formData
      }).then(res => res.json()),
      this.uploadRetryConfig,
      '文件上传'
    );
  }

  // 数据统计上报
  async sendAnalytics(data: any): Promise<void> {
    return this.executeWithRetry(
      () => fetch('/api/analytics', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data)
      }),
      this.analyticsRetryConfig,
      '数据统计'
    );
  }

  // 支付请求
  async processPayment(paymentData: any): Promise<any> {
    return this.executeWithRetry(
      () => fetch('/api/payment', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(paymentData)
      }).then(res => res.json()),
      this.paymentRetryConfig,
      '支付处理'
    );
  }

  // 通用重试执行器
  private async executeWithRetry(
    requestFn: () => Promise<any>,
    config: any,
    operation: string
  ): Promise<any> {
    let lastError: any;
    
    for (let attempt = 1; attempt <= config.maxRetries + 1; attempt++) {
      try {
        const result = await requestFn();
        if (attempt > 1) {
          console.log(\`\${operation} 第\${attempt}次尝试成功\`);
        }
        return result;
      } catch (error) {
        lastError = error;
        
        if (attempt > config.maxRetries) {
          console.error(\`\${operation} 重试\${config.maxRetries}次后仍然失败\`);
          break;
        }
        
        if (!config.retryCondition(error)) {
          console.log(\`\${operation} 错误不可重试: \${error.message}\`);
          break;
        }
        
        const delay = this.calculateDelay(attempt, config);
        console.log(\`\${operation} 第\${attempt}次失败，\${delay}ms后重试\`);
        
        await new Promise(resolve => setTimeout(resolve, delay));
      }
    }
    
    throw lastError;
  }

  private calculateDelay(attempt: number, config: any): number {
    let delay: number;
    
    switch (config.strategy) {
      case 'exponential':
        delay = config.baseDelay * Math.pow(2, attempt - 1);
        break;
      case 'linear':
        delay = config.baseDelay * attempt;
        break;
      case 'fixed':
      default:
        delay = config.baseDelay;
    }
    
    return Math.min(delay, config.maxDelay);
  }
}

// React组件使用示例
const RealWorldRetryExample: React.FC = () => {
  const [results, setResults] = useState<string[]>([]);
  const retryManager = new RealWorldRetryManager();

  const testScenario = async (scenario: string) => {
    try {
      let result: any;
      
      switch (scenario) {
        case 'api':
          result = await retryManager.fetchApiData('/api/user-data');
          break;
        case 'upload':
          const mockFile = new File(['test'], 'test.txt');
          result = await retryManager.uploadFile(mockFile, '/api/upload');
          break;
        case 'analytics':
          await retryManager.sendAnalytics({ event: 'page_view' });
          result = 'Analytics sent';
          break;
        case 'payment':
          result = await retryManager.processPayment({ amount: 100 });
          break;
      }
      
      setResults(prev => [...prev, \`\${scenario}: 成功 - \${JSON.stringify(result)}\`]);
    } catch (error) {
      setResults(prev => [...prev, \`\${scenario}: 失败 - \${error.message}\`]);
    }
  };

  return (
    <div>
      <button onClick={() => testScenario('api')}>
        测试API数据获取
      </button>
      <button onClick={() => testScenario('upload')}>
        测试文件上传
      </button>
      <button onClick={() => testScenario('analytics')}>
        测试数据统计
      </button>
      <button onClick={() => testScenario('payment')}>
        测试支付处理
      </button>
      
      <div>
        {results.map((result, index) => (
          <div key={index}>{result}</div>
        ))}
      </div>
    </div>
  );
};`,language:"typescript",highlights:[2,4,6,8,10,12,16,18,20,22,24,28,30,32,34,36,40,42,44,46,48,52,54,56,58,60,62,64,66,68,70,72,74,76,78,80,82,84,86,88,90,92,96,98,100,102,104,106,108,110,112,114,116,118,120,122,124,126,128,130,132,134,136,138,140,142,144,146,148,150,152,154,156,158,160,162,164,166,168,170,172,174,176,178,180,182,184,186,188,190,192,194]},highlights:[4,6,8,10,16,18,20,22,28,30,32,34,40,42,44,46,52,54,58,60,64,66,72,74,80,82,88,90,96,98,104,106,112,114,120,122,128,130],observationPoints:["API数据获取使用指数退避快速重试","文件上传使用线性退避避免服务器压力","数据统计使用固定延迟低频重试","支付请求谨慎重试避免重复操作"],keyPoints:["不同业务场景需要不同的重试策略","关键业务操作需要谨慎设置重试","非关键操作可以使用更宽松的重试","重试配置应该考虑业务影响"],commonTraps:["所有场景使用相同的重试配置","支付等关键操作重试次数过多","没有考虑重试对业务的影响"],solutions:["根据业务重要性设计重试策略","关键操作使用保守的重试配置","非关键操作可以使用激进的重试"],importantTips:["API获取使用快速重试提升用户体验","文件上传需要考虑服务器负载","支付操作重试需要特别谨慎"]}],tutorial:{concepts:["重试是提高系统可靠性的重要手段","退避策略控制重试的时间间隔","重试条件决定哪些错误需要重试","抖动机制避免多个客户端同时重试","最大重试次数防止无限重试"],steps:["定义重试配置接口和策略枚举","实现不同的退避策略算法","添加重试条件判断逻辑","实现重试执行器和状态管理","集成到实际的网络请求中"],tips:["重试次数不宜过多，通常3-5次足够","添加随机抖动避免雷群效应","区分临时性和永久性错误","考虑重试对下游服务的影响","提供重试状态的监控和日志"]},interview:{questions:[{question:"什么是指数退避策略？为什么要使用它？",answer:"指数退避是一种重试策略，每次重试的延迟时间按指数增长（如1s、2s、4s、8s）。它的优势是：1）快速处理临时故障；2）随着重试次数增加，给系统更多恢复时间；3）避免对故障系统造成过大压力。适用于网络抖动、服务临时不可用等场景。"},{question:"如何设计合理的重试条件？",answer:"重试条件应该基于错误的可恢复性：1）可重试：网络超时、连接错误、5xx服务器错误；2）不可重试：4xx客户端错误、认证失败、业务逻辑错误；3）特殊处理：支付等关键操作需要更严格的重试条件；4）考虑幂等性，确保重试不会产生副作用。"},{question:"什么是雷群效应？如何避免？",answer:"雷群效应是指多个客户端在同一时间进行重试，导致服务器瞬间压力激增。避免方法：1）添加随机抖动（jitter），在计算的延迟基础上加上随机时间；2）使用不同的退避策略；3）限制并发重试数量；4）实现熔断机制，在系统故障时暂停重试。"},{question:"重试机制如何与其他容错机制配合？",answer:"重试机制通常与其他容错机制组合使用：1）与熔断器配合，在熔断开启时停止重试；2）与限流配合，避免重试加剧系统压力；3）与降级配合，重试失败后执行降级逻辑；4）与监控配合，记录重试指标用于系统优化；5）与缓存配合，重试期间返回缓存数据。"}],keyPoints:["重试是处理临时性故障的有效手段","退避策略影响重试的效率和对系统的影响","重试条件设计需要考虑错误的可恢复性","避免雷群效应是重试机制设计的重要考虑","重试机制需要与其他容错机制协调配合"]},bestPractices:{dos:["根据业务场景选择合适的退避策略","只对可恢复的错误进行重试","设置合理的最大重试次数和延迟时间","添加随机抖动避免雷群效应","提供详细的重试日志和监控","考虑重试对下游服务的影响"],donts:["不要对所有错误都进行重试","不要设置过多的重试次数","不要忽略重试对系统性能的影响","不要在关键业务操作中使用激进的重试","不要忽略幂等性的重要性"],patterns:["快速失败模式：对明确的错误立即失败，不进行重试","渐进退避模式：随着重试次数增加，延迟时间逐渐增长","智能重试模式：根据错误类型和历史数据调整重试策略","熔断重试模式：与熔断器配合，在系统故障时停止重试","分层重试模式：不同层级使用不同的重试策略和配置"]}});export{S as default};
