var v=Object.defineProperty;var A=(t,s,r)=>s in t?v(t,s,{enumerable:!0,configurable:!0,writable:!0,value:r}):t[s]=r;var w=(t,s,r)=>A(t,typeof s!="symbol"?s+"":s,r);import{j as e,r as d}from"./index-Cnne2xOM.js";import{C as M}from"./ComponentTemplate-iqsAHbUA.js";class f{constructor(s,r="HMAC-SHA256"){w(this,"secretKey");w(this,"algorithm");this.secretKey=s,this.algorithm=r}async generateSignature(s,r,o){const g={data:typeof s=="string"?s:JSON.stringify(s),timestamp:r,nonce:o},n=Object.keys(g).sort().map(c=>`${c}=${g[c]}`).join("&"),i=new TextEncoder,m=i.encode(this.secretKey),p=i.encode(n),a=await crypto.subtle.importKey("raw",m,{name:"HMAC",hash:"SHA-256"},!1,["sign"]),u=await crypto.subtle.sign("HMAC",a,p);return Array.from(new Uint8Array(u)).map(c=>c.toString(16).padStart(2,"0")).join("")}async verifySignature(s,r,o,g){return await this.generateSignature(s,r,o)===g}generateNonce(){return Math.random().toString(36).substring(2,15)+Math.random().toString(36).substring(2,15)}isTimestampValid(s,r=3e5){const o=Date.now();return Math.abs(o-s)<=r}}const C=()=>{const[t]=d.useState(()=>new f("my-secret-key")),[s,r]=d.useState('{ "userId": 123, "action": "transfer" }'),[o,g]=d.useState(""),[n,i]=d.useState(null),[m,p]=d.useState(Date.now()),[a,u]=d.useState(""),c=d.useCallback(async()=>{try{const l=Date.now(),x=t.generateNonce(),y=await t.generateSignature(s,l,x);p(l),u(x),g(y),i(null)}catch(l){console.error("签名生成失败:",l)}},[t,s]),h=d.useCallback(async()=>{try{const l=await t.verifySignature(s,m,a,o);i(l)}catch(l){console.error("签名验证失败:",l),i(!1)}},[t,s,m,a,o]);return e.jsx("div",{className:"space-y-4",children:e.jsxs("div",{className:"bg-white p-6 rounded-lg border",children:[e.jsx("h3",{className:"text-lg font-semibold mb-4",children:"请求签名生成与验证"}),e.jsxs("div",{className:"space-y-4",children:[e.jsxs("div",{children:[e.jsx("label",{className:"block text-sm font-medium text-gray-700 mb-2",children:"请求数据 (JSON)"}),e.jsx("textarea",{value:s,onChange:l=>r(l.target.value),className:"w-full p-3 border border-gray-300 rounded-md font-mono text-sm",rows:3,placeholder:"输入要签名的请求数据..."})]}),e.jsxs("div",{className:"flex space-x-4",children:[e.jsx("button",{onClick:c,className:"px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700",children:"生成签名"}),o&&e.jsx("button",{onClick:h,className:"px-4 py-2 bg-green-600 text-white rounded-md hover:bg-green-700",children:"验证签名"})]}),o&&e.jsxs("div",{className:"space-y-2",children:[e.jsxs("div",{children:[e.jsx("label",{className:"block text-sm font-medium text-gray-700",children:"时间戳:"}),e.jsx("code",{className:"text-sm bg-gray-100 p-2 rounded",children:m})]}),e.jsxs("div",{children:[e.jsx("label",{className:"block text-sm font-medium text-gray-700",children:"随机数 (Nonce):"}),e.jsx("code",{className:"text-sm bg-gray-100 p-2 rounded",children:a})]}),e.jsxs("div",{children:[e.jsx("label",{className:"block text-sm font-medium text-gray-700",children:"签名:"}),e.jsx("code",{className:"text-sm bg-gray-100 p-2 rounded break-all",children:o})]})]}),n!==null&&e.jsxs("div",{className:`p-3 rounded-md ${n?"bg-green-100 text-green-800 border border-green-200":"bg-red-100 text-red-800 border border-red-200"}`,children:["签名验证: ",n?"✅ 通过":"❌ 失败"]})]})]})})},H=()=>{const[t,s]=d.useState({secretKey:"my-secret-key",algorithm:"HMAC-SHA256",timestampWindow:3e5,nonceLength:16}),[r,o]=d.useState([]),g=d.useCallback(async()=>{const n=new f(t.secretKey,t.algorithm),i={userId:123,action:"test"},m=[],p=Date.now(),a=n.generateNonce(),u=await n.generateSignature(i,p,a),c=await n.verifySignature(i,p,a,u);m.push({test:"正常签名验证",result:c?"通过":"失败",status:c?"success":"error"});const h={userId:456,action:"test"},l=await n.verifySignature(h,p,a,u);m.push({test:"数据篡改检测",result:l?"失败（未检测到篡改）":"通过（正确拒绝）",status:l?"error":"success"});const x=Date.now()-t.timestampWindow-1e3,y=n.isTimestampValid(x,t.timestampWindow);m.push({test:"时间戳过期检测",result:y?"失败（未检测到过期）":"通过（正确拒绝）",status:y?"error":"success"}),o(m)},[t]);return e.jsx("div",{className:"space-y-4",children:e.jsxs("div",{className:"bg-white p-6 rounded-lg border",children:[e.jsx("h3",{className:"text-lg font-semibold mb-4",children:"安全配置管理"}),e.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-4 mb-4",children:[e.jsxs("div",{children:[e.jsx("label",{className:"block text-sm font-medium text-gray-700 mb-2",children:"密钥"}),e.jsx("input",{type:"text",value:t.secretKey,onChange:n=>s(i=>({...i,secretKey:n.target.value})),className:"w-full p-2 border border-gray-300 rounded-md"})]}),e.jsxs("div",{children:[e.jsx("label",{className:"block text-sm font-medium text-gray-700 mb-2",children:"算法"}),e.jsxs("select",{value:t.algorithm,onChange:n=>s(i=>({...i,algorithm:n.target.value})),className:"w-full p-2 border border-gray-300 rounded-md",children:[e.jsx("option",{value:"HMAC-SHA256",children:"HMAC-SHA256"}),e.jsx("option",{value:"HMAC-SHA512",children:"HMAC-SHA512"})]})]}),e.jsxs("div",{children:[e.jsx("label",{className:"block text-sm font-medium text-gray-700 mb-2",children:"时间戳窗口 (毫秒)"}),e.jsx("input",{type:"number",value:t.timestampWindow,onChange:n=>s(i=>({...i,timestampWindow:parseInt(n.target.value)})),className:"w-full p-2 border border-gray-300 rounded-md"})]}),e.jsxs("div",{children:[e.jsx("label",{className:"block text-sm font-medium text-gray-700 mb-2",children:"Nonce长度"}),e.jsx("input",{type:"number",value:t.nonceLength,onChange:n=>s(i=>({...i,nonceLength:parseInt(n.target.value)})),className:"w-full p-2 border border-gray-300 rounded-md"})]})]}),e.jsx("button",{onClick:g,className:"px-4 py-2 bg-purple-600 text-white rounded-md hover:bg-purple-700 mb-4",children:"运行安全测试"}),r.length>0&&e.jsxs("div",{className:"space-y-2",children:[e.jsx("h4",{className:"font-medium text-gray-900",children:"测试结果:"}),r.map((n,i)=>e.jsxs("div",{className:`p-3 rounded-md ${n.status==="success"?"bg-green-100 text-green-800 border border-green-200":"bg-red-100 text-red-800 border border-red-200"}`,children:[e.jsxs("strong",{children:[n.test,":"]})," ",n.result]},i))]})]})})},T=()=>{const[t]=d.useState(()=>new f("production-secret-key")),[s,r]=d.useState([]),[o,g]=d.useState(!1),n=d.useCallback(async(a,u)=>{g(!0);try{const c=Date.now(),h=t.generateNonce(),l=await t.generateSignature(u,c,h),x=Math.random().toString(36).substring(2,15),y={id:x,endpoint:a,data:u,timestamp:c,nonce:h,signature:l,status:"pending",createdAt:new Date().toLocaleTimeString()};r(b=>[y,...b.slice(0,9)]),setTimeout(async()=>{const b=await t.verifySignature(u,c,h,l),N=t.isTimestampValid(c);r(S=>S.map(j=>j.id===x?{...j,status:b&&N?"success":"failed",validationResult:{signatureValid:b,timestampValid:N}}:j)),g(!1)},1e3+Math.random()*2e3)}catch(c){console.error("API请求失败:",c),g(!1)}},[t]),i=()=>{n("/api/transfer",{fromAccount:"123456789",toAccount:"987654321",amount:1e3,currency:"USD"})},m=()=>{n("/api/user/update",{userId:12345,email:"user@example.com",profile:{name:"John Doe",age:30}})},p=()=>{n("/api/resource/delete",{resourceId:"res_"+Math.random().toString(36).substring(2,10),reason:"User requested deletion"})};return e.jsx("div",{className:"space-y-4",children:e.jsxs("div",{className:"bg-white p-6 rounded-lg border",children:[e.jsx("h3",{className:"text-lg font-semibold mb-4",children:"实际应用场景"}),e.jsxs("div",{className:"flex flex-wrap gap-3 mb-6",children:[e.jsx("button",{onClick:i,disabled:o,className:"px-4 py-2 bg-green-600 text-white rounded-md hover:bg-green-700 disabled:opacity-50",children:"转账请求"}),e.jsx("button",{onClick:m,disabled:o,className:"px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 disabled:opacity-50",children:"用户更新"}),e.jsx("button",{onClick:p,disabled:o,className:"px-4 py-2 bg-red-600 text-white rounded-md hover:bg-red-700 disabled:opacity-50",children:"删除资源"})]}),e.jsxs("div",{className:"space-y-3",children:[e.jsx("h4",{className:"font-medium text-gray-900",children:"API请求历史:"}),s.length===0?e.jsx("p",{className:"text-gray-500 text-center py-8",children:"暂无API请求记录"}):s.map(a=>e.jsxs("div",{className:`p-4 rounded-lg border ${a.status==="success"?"bg-green-50 border-green-200":a.status==="failed"?"bg-red-50 border-red-200":"bg-yellow-50 border-yellow-200"}`,children:[e.jsxs("div",{className:"flex justify-between items-start mb-2",children:[e.jsxs("div",{children:[e.jsx("span",{className:"font-medium",children:a.endpoint}),e.jsx("span",{className:`ml-2 px-2 py-1 text-xs rounded-full ${a.status==="success"?"bg-green-100 text-green-800":a.status==="failed"?"bg-red-100 text-red-800":"bg-yellow-100 text-yellow-800"}`,children:a.status==="pending"?"处理中...":a.status==="success"?"成功":"失败"})]}),e.jsx("span",{className:"text-sm text-gray-500",children:a.createdAt})]}),e.jsxs("div",{className:"text-sm text-gray-600 space-y-1",children:[e.jsxs("div",{children:["签名: ",e.jsxs("code",{className:"bg-gray-100 px-1 rounded",children:[a.signature.substring(0,16),"..."]})]}),e.jsxs("div",{children:["时间戳: ",e.jsx("code",{className:"bg-gray-100 px-1 rounded",children:a.timestamp})]}),e.jsxs("div",{children:["Nonce: ",e.jsx("code",{className:"bg-gray-100 px-1 rounded",children:a.nonce})]}),a.validationResult&&e.jsxs("div",{className:"mt-2 text-xs",children:["签名验证: ",a.validationResult.signatureValid?"✅":"❌"," | 时间戳验证: ",a.validationResult.timestampValid?"✅":"❌"]})]})]},a.id))]})]})})},D=()=>{const t={title:"请求签名实现",language:"typescript",code:`// 请求签名管理器
class RequestSigningManager {
  private secretKey: string;
  private algorithm: string;

  constructor(secretKey: string, algorithm: string = 'HMAC-SHA256') {
    this.secretKey = secretKey;
    this.algorithm = algorithm;
  }

  // 生成签名
  async generateSignature(data: any, timestamp: number, nonce: string): Promise<string> {
    const payload = {
      data: typeof data === 'string' ? data : JSON.stringify(data),
      timestamp,
      nonce
    };
    
    const message = Object.keys(payload)
      .sort()
      .map(key => \`\${key}=\${payload[key as keyof typeof payload]}\`)
      .join('&');

    // 使用Web Crypto API生成HMAC-SHA256签名
    const encoder = new TextEncoder();
    const keyData = encoder.encode(this.secretKey);
    const messageData = encoder.encode(message);
    
    const cryptoKey = await crypto.subtle.importKey(
      'raw',
      keyData,
      { name: 'HMAC', hash: 'SHA-256' },
      false,
      ['sign']
    );
    
    const signature = await crypto.subtle.sign('HMAC', cryptoKey, messageData);
    return Array.from(new Uint8Array(signature))
      .map(b => b.toString(16).padStart(2, '0'))
      .join('');
  }

  // 验证签名
  async verifySignature(
    data: any, 
    timestamp: number, 
    nonce: string, 
    signature: string
  ): Promise<boolean> {
    const expectedSignature = await this.generateSignature(data, timestamp, nonce);
    return expectedSignature === signature;
  }

  // 生成随机nonce
  generateNonce(): string {
    return Math.random().toString(36).substring(2, 15) + 
           Math.random().toString(36).substring(2, 15);
  }

  // 检查时间戳有效性（防重放攻击）
  isTimestampValid(timestamp: number, windowMs: number = 300000): boolean {
    const now = Date.now();
    return Math.abs(now - timestamp) <= windowMs;
  }
}`,highlights:[15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,37]},s={title:"安全配置管理实现",language:"typescript",code:`// 安全配置管理器
class SecurityConfigManager {
  private config: {
    algorithm: string;
    secretKey: string;
    timestampWindow: number;
    enableNonce: boolean;
  };

  constructor() {
    this.config = {
      algorithm: 'HMAC-SHA256',
      secretKey: 'default-secret-key',
      timestampWindow: 300000, // 5分钟
      enableNonce: true
    };
  }

  // 更新安全配置
  updateConfig(newConfig: Partial<typeof this.config>) {
    this.config = { ...this.config, ...newConfig };
  }

  // 运行安全测试
  async runSecurityTests(signingManager: RequestSigningManager) {
    const testResults = [];
    const testData = { userId: 123, action: 'transfer', amount: 1000 };
    const timestamp = Date.now();
    const nonce = signingManager.generateNonce();

    try {
      // 测试1: 正常签名验证
      const signature = await signingManager.generateSignature(testData, timestamp, nonce);
      const isValid = await signingManager.verifySignature(testData, timestamp, nonce, signature);
      testResults.push({
        test: '正常签名验证',
        result: isValid ? '通过' : '失败',
        status: isValid ? 'success' : 'error'
      });

      // 测试2: 数据篡改检测
      const tamperedData = { ...testData, amount: 9999 };
      const isTamperedValid = await signingManager.verifySignature(tamperedData, timestamp, nonce, signature);
      testResults.push({
        test: '数据篡改检测',
        result: !isTamperedValid ? '通过' : '失败',
        status: !isTamperedValid ? 'success' : 'error'
      });

      // 测试3: 时间戳过期检测
      const expiredTimestamp = timestamp - 400000; // 超过5分钟
      const isExpiredValid = signingManager.isTimestampValid(expiredTimestamp, this.config.timestampWindow);
      testResults.push({
        test: '时间戳过期检测',
        result: !isExpiredValid ? '通过' : '失败',
        status: !isExpiredValid ? 'success' : 'error'
      });

    } catch (error) {
      testResults.push({
        test: '安全测试执行',
        result: '异常: ' + (error as Error).message,
        status: 'error'
      });
    }

    return testResults;
  }
}`,highlights:[20,21,22,23,25,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45,46,47,48,49,50,51,52,53,54,55]},r={title:"实际应用场景实现",language:"typescript",code:`// API请求签名服务
class APISigningService {
  private signingManager: RequestSigningManager;
  private requestHistory: Array<{
    id: string;
    type: string;
    data: any;
    timestamp: number;
    signature: string;
    status: 'pending' | 'success' | 'failed';
    error?: string;
  }> = [];

  constructor(secretKey: string) {
    this.signingManager = new RequestSigningManager(secretKey);
  }

  // 处理API请求
  async processAPIRequest(type: string, data: any): Promise<{
    success: boolean;
    requestId: string;
    message: string;
    signature?: string;
  }> {
    const requestId = this.generateRequestId();
    const timestamp = Date.now();
    const nonce = this.signingManager.generateNonce();

    try {
      // 生成签名
      const signature = await this.signingManager.generateSignature(data, timestamp, nonce);
      
      // 验证签名（模拟服务端验证）
      const isValid = await this.signingManager.verifySignature(data, timestamp, nonce, signature);
      
      // 检查时间戳
      const isTimestampValid = this.signingManager.isTimestampValid(timestamp);
      
      if (!isValid || !isTimestampValid) {
        throw new Error('签名验证失败或时间戳无效');
      }

      // 记录成功的请求
      this.requestHistory.push({
        id: requestId,
        type,
        data,
        timestamp,
        signature,
        status: 'success'
      });

      return {
        success: true,
        requestId,
        message: \`\${type}请求处理成功\`,
        signature
      };

    } catch (error) {
      // 记录失败的请求
      this.requestHistory.push({
        id: requestId,
        type,
        data,
        timestamp,
        signature: '',
        status: 'failed',
        error: (error as Error).message
      });

      return {
        success: false,
        requestId,
        message: \`\${type}请求处理失败: \${(error as Error).message}\`
      };
    }
  }

  // 生成请求ID
  private generateRequestId(): string {
    return 'req_' + Date.now() + '_' + Math.random().toString(36).substring(2, 8);
  }

  // 获取请求历史
  getRequestHistory() {
    return this.requestHistory.slice(-10); // 返回最近10条记录
  }

  // 清除历史记录
  clearHistory() {
    this.requestHistory = [];
  }
}`,highlights:[18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45,46,47,48,49,50,51,52,53,54,55,56,57,58,59,60,61,62,63,64,65,66,67,68]};return e.jsx(M,{title:"请求签名机制",description:"实现基于HMAC的请求签名验证，确保API请求的完整性和真实性，防止数据篡改和伪造攻击。",overview:e.jsxs("div",{className:"space-y-4",children:[e.jsxs("div",{className:"bg-blue-50 p-6 rounded-lg",children:[e.jsx("h3",{className:"text-lg font-semibold text-blue-900 mb-3",children:"🔐 核心概念"}),e.jsxs("ul",{className:"space-y-2 text-blue-800",children:[e.jsxs("li",{children:[e.jsx("strong",{children:"HMAC签名:"})," 使用共享密钥生成消息认证码，确保数据完整性"]}),e.jsxs("li",{children:[e.jsx("strong",{children:"时间戳验证:"})," 防止重放攻击，限制请求的有效时间窗口"]}),e.jsxs("li",{children:[e.jsx("strong",{children:"随机数(Nonce):"})," 确保相同数据的签名每次都不同"]}),e.jsxs("li",{children:[e.jsx("strong",{children:"参数排序:"})," 对请求参数进行字典序排序，确保签名一致性"]})]})]}),e.jsxs("div",{className:"bg-green-50 p-6 rounded-lg",children:[e.jsx("h3",{className:"text-lg font-semibold text-green-900 mb-3",children:"✨ 主要优势"}),e.jsxs("ul",{className:"space-y-2 text-green-800",children:[e.jsxs("li",{children:[e.jsx("strong",{children:"数据完整性:"})," 任何数据篡改都会导致签名验证失败"]}),e.jsxs("li",{children:[e.jsx("strong",{children:"身份认证:"})," 只有拥有正确密钥的客户端才能生成有效签名"]}),e.jsxs("li",{children:[e.jsx("strong",{children:"防重放攻击:"})," 时间戳和nonce机制防止请求被重复使用"]}),e.jsxs("li",{children:[e.jsx("strong",{children:"标准化实现:"})," 基于Web Crypto API，安全可靠"]})]})]}),e.jsxs("div",{className:"bg-yellow-50 p-6 rounded-lg",children:[e.jsx("h3",{className:"text-lg font-semibold text-yellow-900 mb-3",children:"🎯 适用场景"}),e.jsxs("ul",{className:"space-y-2 text-yellow-800",children:[e.jsxs("li",{children:[e.jsx("strong",{children:"金融交易:"})," 转账、支付等敏感操作的安全验证"]}),e.jsxs("li",{children:[e.jsx("strong",{children:"API安全:"})," 开放API的请求签名验证"]}),e.jsxs("li",{children:[e.jsx("strong",{children:"数据同步:"})," 系统间数据传输的完整性保证"]}),e.jsxs("li",{children:[e.jsx("strong",{children:"用户认证:"})," 无状态的用户身份验证机制"]})]})]}),e.jsxs("div",{className:"bg-red-50 p-6 rounded-lg",children:[e.jsx("h3",{className:"text-lg font-semibold text-red-900 mb-3",children:"⚠️ 注意事项"}),e.jsxs("ul",{className:"space-y-2 text-red-800",children:[e.jsxs("li",{children:[e.jsx("strong",{children:"密钥管理:"})," 确保密钥的安全存储和定期轮换"]}),e.jsxs("li",{children:[e.jsx("strong",{children:"时钟同步:"})," 客户端和服务端时钟需要保持同步"]}),e.jsxs("li",{children:[e.jsx("strong",{children:"HTTPS传输:"})," 签名不能替代HTTPS，仍需加密传输"]}),e.jsxs("li",{children:[e.jsx("strong",{children:"性能考虑:"})," 签名计算会增加一定的性能开销"]})]})]})]}),examples:[{title:"基础签名生成与验证",component:e.jsx(C,{}),description:"演示如何生成和验证请求签名，包括时间戳和随机数的使用。",observationPoints:["输入不同的请求数据，观察生成的签名变化","每次生成签名时，时间戳和nonce都会更新","修改请求数据后，原签名验证会失败","签名使用HMAC-SHA256算法，确保安全性"],keyPoints:["签名包含数据、时间戳和随机数三个要素","参数按字典序排序后再进行签名","使用Web Crypto API确保签名的安全性","签名验证通过重新计算并比较结果"],commonTraps:["忘记对参数进行排序导致签名不一致","时间戳精度不一致导致验证失败","nonce重复使用降低安全性","密钥泄露导致签名机制失效"],solutions:["使用Object.keys().sort()确保参数排序一致","统一使用毫秒级时间戳","每次请求生成新的随机nonce","定期轮换密钥并使用安全的存储方式"],codeExample:t},{title:"安全配置管理",component:e.jsx(H,{}),description:"管理签名算法、密钥和安全参数，运行安全测试验证配置有效性。",observationPoints:["修改密钥后，旧签名验证会失败","调整时间戳窗口影响过期检测","安全测试覆盖正常和异常场景","不同算法生成的签名格式不同"],keyPoints:["支持多种HMAC算法（SHA-256、SHA-512）","可配置的时间戳有效窗口","自动化安全测试验证配置","数据篡改和时间戳过期检测"],importantTips:["生产环境建议使用更长的密钥","时间戳窗口不宜过长，建议5-10分钟","定期运行安全测试确保系统安全","记录签名验证失败的请求用于安全分析"],codeExample:s},{title:"实际应用场景",component:e.jsx(T,{}),description:"模拟真实的API请求签名场景，包括转账、用户更新等敏感操作。",observationPoints:["每个API请求都有独立的签名和验证过程","请求状态实时更新，显示验证结果","签名验证失败的请求会被拒绝","请求历史记录便于审计和调试"],keyPoints:["不同类型的API请求使用统一的签名机制","实时验证签名和时间戳有效性","详细的请求日志便于问题排查","支持高并发的签名验证处理"],commonTraps:["网络延迟导致时间戳过期","客户端时钟不准确影响验证","签名计算错误导致请求失败","密钥不一致导致所有请求失败"],solutions:["适当放宽时间戳窗口以容忍网络延迟","使用NTP同步客户端时钟","提供签名调试工具帮助排查问题","实现密钥版本管理支持平滑切换"],codeExample:r}],tutorial:{concepts:["HMAC (Hash-based Message Authentication Code) 是一种基于哈希函数的消息认证码算法","签名验证通过重新计算签名并与提供的签名比较来验证数据完整性","时间戳机制防止重放攻击，限制请求的有效时间窗口","Nonce (Number used once) 确保相同数据的签名每次都不同","参数排序确保客户端和服务端计算签名时使用相同的字符串"],steps:["创建RequestSigningManager实例，配置密钥和算法","准备要签名的数据，包括请求参数和业务数据","生成当前时间戳和随机nonce","将数据、时间戳、nonce按字典序排序并拼接","使用HMAC算法和密钥对拼接字符串进行签名","将签名、时间戳、nonce随请求一起发送","服务端接收请求后重新计算签名进行验证","验证时间戳是否在有效窗口内","根据验证结果决定是否处理请求"],tips:["使用强随机数生成器生成nonce，提高安全性","定期轮换签名密钥，建议每3-6个月更换一次","记录签名验证失败的请求，用于安全监控","在开发环境提供签名调试工具，便于问题排查","考虑使用JWT等标准化方案替代自定义签名","对于高频API，可以考虑签名缓存优化性能"]},interview:{questions:[{question:"什么是HMAC，它与普通哈希有什么区别？",answer:"HMAC (Hash-based Message Authentication Code) 是基于哈希函数的消息认证码。与普通哈希的区别：1) HMAC使用密钥，只有拥有密钥的人才能生成和验证；2) HMAC提供数据完整性和身份认证；3) HMAC抗长度扩展攻击；4) 普通哈希只提供数据完整性检查，不提供身份认证。"},{question:"如何防止API请求的重放攻击？",answer:"防止重放攻击的方法：1) 时间戳验证：限制请求的有效时间窗口；2) Nonce机制：每个请求使用唯一的随机数；3) 序列号：为每个请求分配递增的序列号；4) 会话令牌：使用一次性的会话令牌；5) 请求去重：服务端记录已处理的请求ID。"},{question:"请求签名的完整流程是什么？",answer:"请求签名流程：1) 客户端准备请求数据；2) 生成时间戳和nonce；3) 将参数按字典序排序并拼接；4) 使用HMAC算法和密钥生成签名；5) 将签名、时间戳、nonce添加到请求头或参数中；6) 发送请求到服务端；7) 服务端提取签名信息；8) 重新计算签名并验证；9) 检查时间戳有效性；10) 根据验证结果处理请求。"},{question:"签名验证失败的常见原因有哪些？",answer:"签名验证失败的原因：1) 密钥不一致：客户端和服务端使用不同密钥；2) 参数排序错误：排序规则不一致；3) 编码问题：字符编码不一致；4) 时间戳过期：请求时间超出有效窗口；5) 数据篡改：请求数据被修改；6) 算法不匹配：使用不同的哈希算法；7) 时钟偏差：客户端和服务端时钟不同步。"}],keyPoints:["HMAC提供数据完整性和身份认证双重保障","时间戳和nonce机制有效防止重放攻击","参数排序确保签名计算的一致性","Web Crypto API提供标准化的加密实现","密钥管理是签名机制安全的关键","签名验证不能替代HTTPS加密传输","性能和安全需要在实际应用中平衡考虑"]},bestPractices:{dos:["使用标准的HMAC算法（如HMAC-SHA256）","为每个请求生成唯一的nonce","设置合理的时间戳有效窗口（5-10分钟）","定期轮换签名密钥","记录签名验证失败的请求用于安全分析","使用HTTPS确保传输安全","提供签名调试工具便于开发调试","实现密钥版本管理支持平滑升级"],donts:["不要在客户端硬编码密钥","不要重复使用nonce","不要设置过长的时间戳窗口","不要忽略时钟同步问题","不要在日志中记录敏感的签名信息","不要依赖签名替代所有安全措施","不要在不安全的环境中存储密钥","不要忽略签名计算的性能影响"],patterns:["密钥轮换模式：支持多版本密钥并行验证","签名缓存模式：缓存计算结果提高性能","分层验证模式：结合多种验证机制","异步验证模式：后台验证不阻塞业务流程","降级模式：签名验证失败时的备用方案","监控模式：实时监控签名验证成功率","调试模式：开发环境的签名调试支持"]}})};export{D as default};
