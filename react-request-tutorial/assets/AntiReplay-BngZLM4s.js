var v=Object.defineProperty;var C=(t,n,a)=>n in t?v(t,n,{enumerable:!0,configurable:!0,writable:!0,value:a}):t[n]=a;var j=(t,n,a)=>C(t,typeof n!="symbol"?n+"":n,a);import{j as e,r as u}from"./index-Cnne2xOM.js";import{C as S}from"./ComponentTemplate-iqsAHbUA.js";class f{constructor(n){j(this,"nonceStore",new Set);j(this,"timestampWindow",3e5);j(this,"maxNonceCount",1e4);n!=null&&n.timestampWindow&&(this.timestampWindow=n.timestampWindow),n!=null&&n.maxNonceCount&&(this.maxNonceCount=n.maxNonceCount)}generateNonce(){const n=Date.now().toString(),a=Math.random().toString(36).substring(2,15);return`${n}_${a}`}generateTimestamp(){return Date.now()}validateRequest(n,a){const r=Date.now();return Math.abs(r-a)>this.timestampWindow?{isValid:!1,reason:"请求时间戳超出有效窗口"}:this.nonceStore.has(n)?{isValid:!1,reason:"Nonce已被使用，疑似重放攻击"}:(this.addNonce(n),{isValid:!0})}addNonce(n){this.nonceStore.size>=this.maxNonceCount&&this.cleanupOldNonces(),this.nonceStore.add(n)}cleanupOldNonces(){const n=Date.now(),a=[];this.nonceStore.forEach(r=>{const[m]=r.split("_"),d=parseInt(m);n-d>this.timestampWindow&&a.push(r)}),a.forEach(r=>{this.nonceStore.delete(r)})}getStats(){return{nonceCount:this.nonceStore.size,timestampWindow:this.timestampWindow,maxNonceCount:this.maxNonceCount}}clear(){this.nonceStore.clear()}}class N{constructor(n){j(this,"secretKey");this.secretKey=n}async generateSignature(n,a,r,m,d){const c=d?JSON.stringify(d):"",g=`${n}
${a}
${r}
${m}
${c}`,b=new TextEncoder,s=b.encode(this.secretKey),i=b.encode(g),l=await crypto.subtle.importKey("raw",s,{name:"HMAC",hash:"SHA-256"},!1,["sign"]),x=await crypto.subtle.sign("HMAC",l,i);return Array.from(new Uint8Array(x)).map(h=>h.toString(16).padStart(2,"0")).join("")}async verifySignature(n,a,r,m,d,c){return await this.generateSignature(n,a,r,m,c)===d}}const k=()=>{const[t]=u.useState(()=>new f),[n]=u.useState(()=>new N("your-secret-key")),[a,r]=u.useState([]),[m,d]=u.useState(t.getStats()),c=u.useCallback(async()=>{const s=t.generateNonce(),i=t.generateTimestamp(),l="POST",x="/api/secure-endpoint",o={data:"test"},h=await n.generateSignature(l,x,s,i,o),p=t.validateRequest(s,i),y={id:Date.now(),nonce:s,timestamp:i,signature:h,isValid:p.isValid,reason:p.reason};r(w=>[y,...w.slice(0,9)]),d(t.getStats())},[t,n]),g=u.useCallback(async()=>{if(a.length===0){alert("请先发送一个正常请求");return}const s=a[0],i=t.validateRequest(s.nonce,s.timestamp),l={id:Date.now(),nonce:s.nonce,timestamp:s.timestamp,signature:s.signature,isValid:i.isValid,reason:i.reason};r(x=>[l,...x.slice(0,9)]),d(t.getStats())},[t,a]),b=u.useCallback(()=>{t.clear(),r([]),d(t.getStats())},[t]);return e.jsx("div",{className:"space-y-6",children:e.jsxs("div",{className:"bg-white p-6 rounded-lg shadow-sm border",children:[e.jsx("h3",{className:"text-lg font-semibold mb-4",children:"防重放攻击演示"}),e.jsxs("div",{className:"flex flex-wrap gap-3 mb-6",children:[e.jsx("button",{onClick:c,className:"px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition-colors",children:"发送正常请求"}),e.jsx("button",{onClick:g,className:"px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600 transition-colors",children:"模拟重放攻击"}),e.jsx("button",{onClick:b,className:"px-4 py-2 bg-gray-500 text-white rounded hover:bg-gray-600 transition-colors",children:"清空历史"})]}),e.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-3 gap-4 mb-6",children:[e.jsxs("div",{className:"bg-blue-50 p-4 rounded-lg",children:[e.jsx("h4",{className:"font-medium text-blue-900 mb-2",children:"Nonce数量"}),e.jsx("p",{className:"text-2xl font-bold text-blue-600",children:m.nonceCount})]}),e.jsxs("div",{className:"bg-green-50 p-4 rounded-lg",children:[e.jsx("h4",{className:"font-medium text-green-900 mb-2",children:"时间窗口"}),e.jsxs("p",{className:"text-2xl font-bold text-green-600",children:[m.timestampWindow/1e3,"s"]})]}),e.jsxs("div",{className:"bg-purple-50 p-4 rounded-lg",children:[e.jsx("h4",{className:"font-medium text-purple-900 mb-2",children:"最大存储"}),e.jsx("p",{className:"text-2xl font-bold text-purple-600",children:m.maxNonceCount})]})]}),e.jsxs("div",{className:"space-y-3",children:[e.jsx("h4",{className:"font-medium",children:"请求历史"}),a.length===0?e.jsx("p",{className:"text-gray-500 text-center py-8",children:"暂无请求记录"}):a.map(s=>e.jsxs("div",{className:`p-4 rounded-lg border ${s.isValid?"bg-green-50 border-green-200":"bg-red-50 border-red-200"}`,children:[e.jsxs("div",{className:"flex items-center justify-between mb-2",children:[e.jsx("span",{className:`px-2 py-1 rounded text-sm font-medium ${s.isValid?"bg-green-100 text-green-800":"bg-red-100 text-red-800"}`,children:s.isValid?"✓ 有效":"✗ 无效"}),e.jsx("span",{className:"text-sm text-gray-500",children:new Date(s.timestamp).toLocaleTimeString()})]}),e.jsxs("div",{className:"text-sm space-y-1",children:[e.jsxs("div",{children:[e.jsx("strong",{children:"Nonce:"})," ",s.nonce]}),e.jsxs("div",{children:[e.jsx("strong",{children:"签名:"})," ",s.signature.substring(0,32),"..."]}),s.reason&&e.jsxs("div",{className:"text-red-600",children:[e.jsx("strong",{children:"原因:"})," ",s.reason]})]})]},s.id))]})]})})},R=()=>{const[t,n]=u.useState({timestampWindow:3e5,maxNonceCount:1e4,secretKey:"your-secret-key"}),[,a]=u.useState(()=>new f),[r,m]=u.useState([]),d=u.useCallback(async()=>{const c=new f({timestampWindow:t.timestampWindow,maxNonceCount:t.maxNonceCount}),g=new N(t.secretKey),b=performance.now(),s=[];for(let o=0;o<100;o++){const h=c.generateNonce(),p=c.generateTimestamp();await g.generateSignature("POST","/api/test",h,p);const y=c.validateRequest(h,p);s.push(y.isValid)}const i=performance.now(),l=s.filter(o=>o).length,x={config:`窗口:${t.timestampWindow/1e3}s, 最大:${t.maxNonceCount}`,result:`${l}/100 有效请求`,time:Math.round(i-b)};m(o=>[x,...o.slice(0,4)]),a(c)},[t]);return e.jsx("div",{className:"space-y-6",children:e.jsxs("div",{className:"bg-white p-6 rounded-lg shadow-sm border",children:[e.jsx("h3",{className:"text-lg font-semibold mb-4",children:"安全配置测试"}),e.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-3 gap-4 mb-6",children:[e.jsxs("div",{children:[e.jsx("label",{className:"block text-sm font-medium text-gray-700 mb-2",children:"时间窗口 (秒)"}),e.jsx("input",{type:"number",value:t.timestampWindow/1e3,onChange:c=>n(g=>({...g,timestampWindow:parseInt(c.target.value)*1e3})),className:"w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"})]}),e.jsxs("div",{children:[e.jsx("label",{className:"block text-sm font-medium text-gray-700 mb-2",children:"最大Nonce数量"}),e.jsx("input",{type:"number",value:t.maxNonceCount,onChange:c=>n(g=>({...g,maxNonceCount:parseInt(c.target.value)})),className:"w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"})]}),e.jsxs("div",{children:[e.jsx("label",{className:"block text-sm font-medium text-gray-700 mb-2",children:"密钥"}),e.jsx("input",{type:"text",value:t.secretKey,onChange:c=>n(g=>({...g,secretKey:c.target.value})),className:"w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"})]})]}),e.jsx("button",{onClick:d,className:"px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600 transition-colors mb-6",children:"测试配置"}),e.jsxs("div",{className:"space-y-3",children:[e.jsx("h4",{className:"font-medium",children:"测试结果"}),r.length===0?e.jsx("p",{className:"text-gray-500 text-center py-8",children:"暂无测试结果"}):r.map((c,g)=>e.jsx("div",{className:"p-4 bg-gray-50 rounded-lg",children:e.jsxs("div",{className:"flex justify-between items-center",children:[e.jsxs("div",{children:[e.jsx("div",{className:"font-medium",children:c.config}),e.jsx("div",{className:"text-sm text-gray-600",children:c.result})]}),e.jsxs("div",{className:"text-sm text-gray-500",children:[c.time,"ms"]})]})},g))]})]})})},A=()=>{const[t]=u.useState(()=>new f({timestampWindow:6e4})),[n]=u.useState(()=>new N("demo-secret-key")),[a,r]=u.useState([]),[m,d]=u.useState(!1),c=u.useCallback(async()=>{d(!0);const s=performance.now(),i=t.generateNonce(),l=t.generateTimestamp();await n.generateSignature("POST","/api/test",i,l),t.validateRequest(i,l);let x=0;const o=50;for(let p=0;p<o;p++)t.validateRequest(i,l).isValid||x++;const h=performance.now();r(p=>[{type:"重放攻击",success:x===o,blocked:x,total:o,time:Math.round(h-s)},...p.slice(0,4)]),d(!1)},[t,n]),g=u.useCallback(async()=>{d(!0);const s=performance.now();let i=0;const l=50;for(let o=0;o<l;o++){const h=t.generateNonce(),p=Date.now()-6e5;t.validateRequest(h,p).isValid||i++}const x=performance.now();r(o=>[{type:"时间戳攻击",success:i===l,blocked:i,total:l,time:Math.round(x-s)},...o.slice(0,4)]),d(!1)},[t]),b=u.useCallback(async()=>{d(!0);const s=performance.now();let i=0;const l=100;for(let o=0;o<l;o++){const h=`fake_${o}_${Math.random()}`,p=Date.now()+Math.random()*1e3;t.validateRequest(h,p).isValid&&i++}const x=performance.now();r(o=>[{type:"暴力破解",success:i<l*.1,blocked:l-i,total:l,time:Math.round(x-s)},...o.slice(0,4)]),d(!1)},[t]);return e.jsx("div",{className:"space-y-6",children:e.jsxs("div",{className:"bg-white p-6 rounded-lg shadow-sm border",children:[e.jsx("h3",{className:"text-lg font-semibold mb-4",children:"攻击模拟测试"}),e.jsxs("div",{className:"flex flex-wrap gap-3 mb-6",children:[e.jsx("button",{onClick:c,disabled:m,className:"px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600 transition-colors disabled:opacity-50",children:m?"运行中...":"模拟重放攻击"}),e.jsx("button",{onClick:g,disabled:m,className:"px-4 py-2 bg-orange-500 text-white rounded hover:bg-orange-600 transition-colors disabled:opacity-50",children:m?"运行中...":"模拟时间戳攻击"}),e.jsx("button",{onClick:b,disabled:m,className:"px-4 py-2 bg-purple-500 text-white rounded hover:bg-purple-600 transition-colors disabled:opacity-50",children:m?"运行中...":"模拟暴力破解"})]}),e.jsxs("div",{className:"space-y-3",children:[e.jsx("h4",{className:"font-medium",children:"攻击测试结果"}),a.length===0?e.jsx("p",{className:"text-gray-500 text-center py-8",children:"暂无测试结果"}):a.map((s,i)=>e.jsxs("div",{className:`p-4 rounded-lg border ${s.success?"bg-green-50 border-green-200":"bg-red-50 border-red-200"}`,children:[e.jsxs("div",{className:"flex justify-between items-center mb-2",children:[e.jsxs("div",{className:"flex items-center space-x-2",children:[e.jsx("span",{className:`px-2 py-1 rounded text-sm font-medium ${s.success?"bg-green-100 text-green-800":"bg-red-100 text-red-800"}`,children:s.success?"✓ 防护成功":"✗ 防护失败"}),e.jsx("span",{className:"font-medium",children:s.type})]}),e.jsxs("span",{className:"text-sm text-gray-500",children:[s.time,"ms"]})]}),e.jsxs("div",{className:"text-sm text-gray-600",children:["阻止: ",s.blocked,"/",s.total," 次攻击"]})]},i))]})]})})},P=()=>{const t={title:"防重放攻击实现",code:`// 防重放攻击管理器
class AntiReplayManager {
  private nonceStore: Set<string> = new Set();
  private timestampWindow: number = 300000; // 5分钟时间窗口

  // 生成随机nonce
  generateNonce(): string {
    const timestamp = Date.now().toString();
    const random = Math.random().toString(36).substring(2, 15);
    return \`\${timestamp}_\${random}\`;
  }

  // 验证请求是否为重放攻击
  validateRequest(nonce: string, timestamp: number): {
    isValid: boolean;
    reason?: string;
  } {
    const currentTime = Date.now();

    // 检查时间戳是否在有效窗口内
    if (Math.abs(currentTime - timestamp) > this.timestampWindow) {
      return {
        isValid: false,
        reason: '请求时间戳超出有效窗口'
      };
    }

    // 检查nonce是否已被使用
    if (this.nonceStore.has(nonce)) {
      return {
        isValid: false,
        reason: 'Nonce已被使用，疑似重放攻击'
      };
    }

    // 记录nonce
    this.nonceStore.add(nonce);
    return { isValid: true };
  }
}`,language:"typescript",highlights:[8,9,10,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,37,38,39]},n={title:"安全配置管理实现",code:`// 安全配置管理
class SecurityConfigManager {
  private config: {
    timestampWindow: number;
    maxNonceCount: number;
    secretKey: string;
  };
  
  constructor(initialConfig: any) {
    this.config = initialConfig;
  }
  
  // 测试配置有效性
  async testConfiguration(): Promise<{
    validRequests: number;
    totalRequests: number;
    performanceTime: number;
  }> {
    const manager = new AntiReplayManager({
      timestampWindow: this.config.timestampWindow,
      maxNonceCount: this.config.maxNonceCount
    });
    
    const signer = new RequestSigner(this.config.secretKey);
    const startTime = performance.now();
    
    let validCount = 0;
    const totalRequests = 100;
    
    // 测试多个请求
    for (let i = 0; i < totalRequests; i++) {
      const nonce = manager.generateNonce();
      const timestamp = manager.generateTimestamp();
      
      await signer.generateSignature('POST', '/api/test', nonce, timestamp);
      const validation = manager.validateRequest(nonce, timestamp);
      
      if (validation.isValid) {
        validCount++;
      }
    }
    
    const endTime = performance.now();
    
    return {
      validRequests: validCount,
      totalRequests,
      performanceTime: Math.round(endTime - startTime)
    };
  }
}`,language:"typescript",highlights:[14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45,46,47]},a={title:"攻击模拟测试实现",code:`// 攻击模拟器
class AttackSimulator {
  private manager: AntiReplayManager;
  
  constructor(manager: AntiReplayManager) {
    this.manager = manager;
  }
  
  // 模拟重放攻击
  async simulateReplayAttack(): Promise<{
    success: boolean;
    blocked: number;
    total: number;
  }> {
    const nonce = this.manager.generateNonce();
    const timestamp = this.manager.generateTimestamp();
    
    // 第一次请求（正常）
    const firstRequest = this.manager.validateRequest(nonce, timestamp);
    
    let blockedCount = 0;
    const attackCount = 50;
    
    // 重复使用相同的nonce进行攻击
    for (let i = 0; i < attackCount; i++) {
      const attackResult = this.manager.validateRequest(nonce, timestamp);
      if (!attackResult.isValid) {
        blockedCount++;
      }
    }
    
    return {
      success: blockedCount === attackCount, // 所有重放攻击都应该被阻止
      blocked: blockedCount,
      total: attackCount
    };
  }
  
  // 模拟时间戳攻击
  async simulateTimestampAttack(): Promise<{
    success: boolean;
    blocked: number;
    total: number;
  }> {
    let blockedCount = 0;
    const attackCount = 50;
    
    // 使用过期的时间戳进行攻击
    for (let i = 0; i < attackCount; i++) {
      const nonce = this.manager.generateNonce();
      const expiredTimestamp = Date.now() - 600000; // 10分钟前
      
      const result = this.manager.validateRequest(nonce, expiredTimestamp);
      if (!result.isValid) {
        blockedCount++;
      }
    }
    
    return {
      success: blockedCount > attackCount * 0.9, // 90%以上应该被阻止
      blocked: blockedCount,
      total: attackCount
    };
  }
}`,language:"typescript",highlights:[9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45,46,47,48,49,50,51,52,53,54,55,56,57,58,59,60,61]};return e.jsx(S,{title:"防重放攻击",description:"通过nonce和时间戳机制防止请求重放攻击，保障API安全性",overview:e.jsxs("div",{className:"space-y-4",children:[e.jsx("h3",{className:"text-lg font-semibold",children:"核心概念"}),e.jsxs("ul",{className:"list-disc list-inside space-y-2 text-gray-700",children:[e.jsxs("li",{children:[e.jsx("strong",{children:"Nonce机制："}),"每个请求使用唯一的随机数，防止重复使用"]}),e.jsxs("li",{children:[e.jsx("strong",{children:"时间戳验证："}),"限制请求的有效时间窗口，防止过期请求"]}),e.jsxs("li",{children:[e.jsx("strong",{children:"签名验证："}),"结合HMAC-SHA256确保请求完整性"]}),e.jsxs("li",{children:[e.jsx("strong",{children:"存储管理："}),"高效管理已使用的nonce，防止内存泄漏"]})]}),e.jsx("h3",{className:"text-lg font-semibold mt-6",children:"主要优势"}),e.jsxs("ul",{className:"list-disc list-inside space-y-2 text-gray-700",children:[e.jsxs("li",{children:[e.jsx("strong",{children:"安全性高："}),"有效防止重放攻击和篡改攻击"]}),e.jsxs("li",{children:[e.jsx("strong",{children:"性能优化："}),"自动清理过期nonce，控制内存使用"]}),e.jsxs("li",{children:[e.jsx("strong",{children:"配置灵活："}),"可调整时间窗口和存储限制"]}),e.jsxs("li",{children:[e.jsx("strong",{children:"易于集成："}),"简单的API设计，易于集成到现有系统"]})]}),e.jsx("h3",{className:"text-lg font-semibold mt-6",children:"适用场景"}),e.jsxs("ul",{className:"list-disc list-inside space-y-2 text-gray-700",children:[e.jsxs("li",{children:[e.jsx("strong",{children:"支付接口："}),"防止重复扣款和恶意重放"]}),e.jsxs("li",{children:[e.jsx("strong",{children:"敏感操作："}),"用户信息修改、权限变更等"]}),e.jsxs("li",{children:[e.jsx("strong",{children:"API网关："}),"统一的安全防护层"]}),e.jsxs("li",{children:[e.jsx("strong",{children:"金融系统："}),"高安全要求的业务场景"]})]}),e.jsx("h3",{className:"text-lg font-semibold mt-6",children:"注意事项"}),e.jsxs("ul",{className:"list-disc list-inside space-y-2 text-gray-700",children:[e.jsxs("li",{children:[e.jsx("strong",{children:"时钟同步："}),"客户端和服务端时间需要同步"]}),e.jsxs("li",{children:[e.jsx("strong",{children:"存储清理："}),"定期清理过期nonce避免内存泄漏"]}),e.jsxs("li",{children:[e.jsx("strong",{children:"密钥管理："}),"签名密钥需要安全存储和定期轮换"]}),e.jsxs("li",{children:[e.jsx("strong",{children:"性能考虑："}),"大量并发时需要优化nonce存储结构"]})]})]}),examples:[{title:"基础防重放演示",component:e.jsx(k,{}),description:"演示基本的防重放攻击机制，包括nonce生成、时间戳验证和签名校验",observationPoints:["点击'发送正常请求'时，请求会被正常处理并记录nonce","点击'模拟重放攻击'时，使用相同nonce的请求会被拒绝","观察统计信息中nonce数量的变化和时间窗口设置"],keyPoints:["每个nonce只能使用一次，重复使用会被检测为重放攻击","时间戳超出有效窗口的请求会被拒绝","签名确保请求内容的完整性和真实性"],commonTraps:["客户端和服务端时间不同步导致时间戳验证失败","nonce存储无限增长导致内存泄漏","签名密钥泄露导致安全风险"],solutions:["使用NTP同步时间或允许合理的时间偏差","定期清理过期nonce并设置存储上限","定期轮换签名密钥并使用安全的密钥管理"],codeExample:t},{title:"安全配置测试",component:e.jsx(R,{}),description:"测试不同安全配置参数对防重放效果的影响",observationPoints:["调整时间窗口大小观察对请求验证的影响","修改最大nonce数量测试存储管理效果","更换密钥测试签名验证的安全性"],keyPoints:["时间窗口越小安全性越高，但可能影响正常请求","nonce存储数量需要平衡内存使用和安全性","密钥强度直接影响签名的安全性"],codeExample:n},{title:"攻击模拟测试",component:e.jsx(A,{}),description:"模拟各种攻击场景，验证防护机制的有效性",observationPoints:["重放攻击：使用相同nonce和时间戳的攻击被完全阻止","时间戳攻击：使用过期时间戳的攻击被有效防护","暴力破解：大量随机请求的处理性能和安全性"],keyPoints:["重放攻击检测率应该达到100%","时间戳攻击防护依赖于时间窗口设置","暴力破解防护需要结合限流机制"],codeExample:a}],tutorial:{concepts:["防重放攻击是通过确保每个请求的唯一性来防止恶意重复请求的安全机制","Nonce（Number Once）是一个只能使用一次的随机数，用于标识请求的唯一性","时间戳验证限制请求的有效时间窗口，防止过期请求被重放","HMAC-SHA256签名确保请求内容的完整性和来源的真实性","存储管理通过定期清理过期nonce来控制内存使用"],steps:["创建AntiReplayManager实例，配置时间窗口和存储限制","为每个请求生成唯一的nonce和当前时间戳","使用密钥对请求内容进行HMAC-SHA256签名","在请求头中包含nonce、时间戳和签名信息","服务端验证nonce唯一性、时间戳有效性和签名正确性","记录已使用的nonce并定期清理过期数据"],tips:["时间窗口设置需要平衡安全性和用户体验，通常设置为5-15分钟","nonce生成应该包含时间戳信息，便于后续的过期清理","签名字符串的格式要严格统一，避免验证失败","在高并发场景下考虑使用更高效的数据结构存储nonce","定期监控nonce存储的内存使用情况，及时调整清理策略"]},interview:{questions:[{question:"什么是重放攻击？如何防护？",answer:"重放攻击是指攻击者截获合法的网络传输数据，然后恶意重复发送这些数据的攻击方式。防护方法包括：1）使用nonce确保每个请求的唯一性；2）添加时间戳限制请求的有效期；3）使用数字签名确保数据完整性；4）在服务端记录已处理的请求标识。"},{question:"nonce机制的实现原理是什么？",answer:"nonce（Number Once）是一个只能使用一次的随机数。实现原理：1）客户端为每个请求生成唯一的nonce；2）服务端维护一个已使用nonce的存储；3）收到请求时检查nonce是否已存在；4）如果nonce已存在则拒绝请求，否则记录并处理；5）定期清理过期的nonce以控制存储大小。"},{question:"时间戳验证有什么作用？如何设置合理的时间窗口？",answer:"时间戳验证的作用：1）限制请求的有效期，防止过期请求被重放；2）减少nonce存储的时间，降低内存压力；3）提高系统的安全性。时间窗口设置考虑因素：1）网络延迟和时钟偏差；2）用户体验和安全性的平衡；3）系统的并发量和存储能力。通常设置为5-15分钟。"},{question:"如何处理大量并发请求时的nonce存储问题？",answer:"大量并发时的nonce存储优化：1）使用高效的数据结构如Set或HashMap；2）实现分片存储，将nonce按时间或哈希值分片；3）使用LRU缓存策略，自动淘汰最久未使用的nonce；4）定期批量清理过期nonce；5）考虑使用Redis等外部存储；6）设置合理的存储上限和清理策略。"},{question:"防重放攻击在微服务架构中如何实现？",answer:"微服务架构中的防重放实现：1）在API网关层统一实现防重放检查；2）使用分布式缓存（如Redis）共享nonce存储；3）每个服务可以有独立的nonce命名空间；4）实现nonce的分布式一致性检查；5）考虑服务间的时钟同步问题；6）设计合理的降级策略，避免防重放机制影响系统可用性。"}],keyPoints:["防重放攻击是保障API安全的重要机制，特别适用于敏感操作","nonce机制确保请求唯一性，时间戳验证限制请求有效期","HMAC-SHA256签名提供数据完整性和来源验证","存储管理需要平衡安全性、性能和内存使用","在分布式系统中需要考虑一致性和时钟同步问题"]},bestPractices:{dos:["为每个请求生成强随机性的nonce，包含时间戳信息","设置合理的时间窗口，平衡安全性和用户体验","使用HMAC-SHA256等强签名算法确保数据完整性","定期清理过期nonce，控制内存使用","在高并发场景下使用高效的数据结构存储nonce","实现完善的错误处理和日志记录","定期轮换签名密钥，提高安全性"],donts:["不要使用弱随机数生成器生成nonce","不要设置过长的时间窗口，增加安全风险","不要在客户端存储签名密钥","不要忽略nonce存储的内存管理","不要在生产环境中使用固定的测试密钥","不要忽略客户端和服务端的时钟同步","不要在日志中记录敏感的签名信息"],patterns:["单例模式：AntiReplayManager使用单例确保全局唯一性","策略模式：支持不同的签名算法和验证策略","观察者模式：监控nonce存储状态和清理事件","工厂模式：根据配置创建不同类型的防重放管理器","装饰器模式：为现有请求添加防重放功能","责任链模式：多层安全验证的处理链"]}})};export{P as default};
