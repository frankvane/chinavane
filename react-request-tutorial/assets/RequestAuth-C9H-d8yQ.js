var f=Object.defineProperty;var A=(o,s,t)=>s in o?f(o,s,{enumerable:!0,configurable:!0,writable:!0,value:t}):o[s]=t;var k=(o,s,t)=>A(o,typeof s!="symbol"?s+"":s,t);import{j as e,r as i}from"./index-Cnne2xOM.js";import{C as N}from"./ComponentTemplate-iqsAHbUA.js";class I{constructor(s="my-jwt-secret-key"){k(this,"secretKey");this.secretKey=s}generateToken(s,t=3600){const n={alg:"HS256",typ:"JWT"},a=Math.floor(Date.now()/1e3),l={...s,iat:a,exp:a+t},u=this.base64UrlEncode(JSON.stringify(n)),d=this.base64UrlEncode(JSON.stringify(l)),g=this.generateSignature(`${u}.${d}`);return`${u}.${d}.${g}`}verifyToken(s){try{const t=s.split(".");if(t.length!==3)return{valid:!1,error:"Invalid token format"};const[n,a,l]=t,u=this.generateSignature(`${n}.${a}`);if(l!==u)return{valid:!1,error:"Invalid signature"};const d=JSON.parse(this.base64UrlDecode(a)),g=Math.floor(Date.now()/1e3);return d.exp&&d.exp<g?{valid:!1,error:"Token expired"}:{valid:!0,payload:d}}catch{return{valid:!1,error:"Token parsing failed"}}}refreshToken(s,t=3600){const n=this.verifyToken(s);if(!n.valid||!n.payload)return null;const a={...n.payload};return delete a.iat,delete a.exp,this.generateToken(a,t)}base64UrlEncode(s){return btoa(s).replace(/\+/g,"-").replace(/\//g,"_").replace(/=/g,"")}base64UrlDecode(s){return s+="=".repeat((4-s.length%4)%4),atob(s.replace(/-/g,"+").replace(/_/g,"/"))}generateSignature(s){let t=0;const n=s+this.secretKey;for(let a=0;a<n.length;a++){const l=n.charCodeAt(a);t=(t<<5)-t+l,t=t&t}return Math.abs(t).toString(36)}}const P={title:"API Key 认证管理实现",language:"typescript",code:`// 使用API Key管理器
const apiKeyManager = new APIKeyManager();

// 生成API Key
const apiKey = apiKeyManager.generateAPIKey('user123', ['read', 'write']);

// 验证API Key
const validation = apiKeyManager.validateAPIKey(apiKey, 'read');
if (validation.valid) {
  console.log('API Key有效，权限:', validation.permissions);
} else {
  console.log('API Key无效:', validation.error);
}

// 撤销API Key
apiKeyManager.revokeAPIKey(apiKey);`,highlights:[1,3,6,9,12,15]},K={title:"OAuth 2.0 认证流程实现",language:"typescript",code:`// OAuth 2.0 模拟器
class OAuthSimulator {
  private authorizationCodes: Map<string, {
    code: string;
    clientId: string;
    redirectUri: string;
    scope: string[];
    expiresAt: Date;
  }> = new Map();

  private accessTokens: Map<string, {
    token: string;
    clientId: string;
    scope: string[];
    expiresAt: Date;
  }> = new Map();

  // 生成授权码
  generateAuthorizationCode(
    clientId: string,
    redirectUri: string,
    scope: string[] = []
  ): string {
    const code = this.generateRandomString(32);
    const expiresAt = new Date(Date.now() + 10 * 60 * 1000); // 10分钟过期

    this.authorizationCodes.set(code, {
      code,
      clientId,
      redirectUri,
      scope,
      expiresAt
    });

    return code;
  }

  // 交换访问令牌
  exchangeCodeForToken(
    code: string,
    clientId: string,
    redirectUri: string
  ): { success: boolean; accessToken?: string; error?: string } {
    const authCode = this.authorizationCodes.get(code);

    if (!authCode) {
      return { success: false, error: 'Invalid authorization code' };
    }

    if (authCode.expiresAt < new Date()) {
      this.authorizationCodes.delete(code);
      return { success: false, error: 'Authorization code expired' };
    }

    if (authCode.clientId !== clientId || authCode.redirectUri !== redirectUri) {
      return { success: false, error: 'Invalid client credentials' };
    }

    // 生成访问令牌
    const accessToken = this.generateRandomString(64);
    const expiresAt = new Date(Date.now() + 60 * 60 * 1000); // 1小时过期

    this.accessTokens.set(accessToken, {
      token: accessToken,
      clientId,
      scope: authCode.scope,
      expiresAt
    });

    // 删除已使用的授权码
    this.authorizationCodes.delete(code);

    return { success: true, accessToken };
  }

  // 验证访问令牌
  validateAccessToken(
    token: string,
    requiredScope?: string
  ): { valid: boolean; scope?: string[]; error?: string } {
    const tokenData = this.accessTokens.get(token);

    if (!tokenData) {
      return { valid: false, error: 'Invalid access token' };
    }

    if (tokenData.expiresAt < new Date()) {
      this.accessTokens.delete(token);
      return { valid: false, error: 'Access token expired' };
    }

    if (requiredScope && !tokenData.scope.includes(requiredScope)) {
      return { valid: false, error: 'Insufficient scope' };
    }

    return { valid: true, scope: tokenData.scope };
  }
}`,highlights:[17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45,46,47,48,49,50,51,52,53,54,55,56,57,58,59,60,61,62,63,64,65,66,67,68,69,70,71,72,73,74,75,76,77,78,79,80,81,82,83,84,85,86,87,88]};class w{constructor(){k(this,"apiKeys",new Map)}generateAPIKey(s,t=[]){const n=this.generateRandomKey();return this.apiKeys.set(n,{key:n,permissions:t,createdAt:new Date}),n}validateAPIKey(s,t){const n=this.apiKeys.get(s);return n?t&&!n.permissions.includes(t)?{valid:!1,error:"Insufficient permissions"}:(n.lastUsed=new Date,{valid:!0,permissions:n.permissions}):{valid:!1,error:"Invalid API key"}}revokeAPIKey(s){return this.apiKeys.delete(s)}getAllAPIKeys(){return Array.from(this.apiKeys.values())}generateRandomKey(){const s="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";let t="ak_";for(let n=0;n<32;n++)t+=s.charAt(Math.floor(Math.random()*s.length));return t}}class C{constructor(){k(this,"authorizationCodes",new Map);k(this,"accessTokens",new Map)}generateAuthorizationCode(s,t,n=[]){const a=this.generateRandomString(32),l=new Date(Date.now()+10*60*1e3);return this.authorizationCodes.set(a,{code:a,clientId:s,redirectUri:t,scope:n,expiresAt:l}),a}exchangeCodeForToken(s,t,n){const a=this.authorizationCodes.get(s);if(!a)return{success:!1,error:"Invalid authorization code"};if(a.expiresAt<new Date)return this.authorizationCodes.delete(s),{success:!1,error:"Authorization code expired"};if(a.clientId!==t||a.redirectUri!==n)return{success:!1,error:"Client ID or redirect URI mismatch"};const l=this.generateRandomString(64),u=new Date(Date.now()+60*60*1e3);return this.accessTokens.set(l,{token:l,clientId:t,scope:a.scope,expiresAt:u}),this.authorizationCodes.delete(s),{success:!0,accessToken:l}}validateAccessToken(s,t){const n=this.accessTokens.get(s);return n?n.expiresAt<new Date?(this.accessTokens.delete(s),{valid:!1,error:"Access token expired"}):t&&!n.scope.includes(t)?{valid:!1,error:"Insufficient scope"}:{valid:!0,scope:n.scope}:{valid:!1,error:"Invalid access token"}}generateRandomString(s){const t="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";let n="";for(let a=0;a<s;a++)n+=t.charAt(Math.floor(Math.random()*t.length));return n}}const S=()=>{const[o]=i.useState(()=>new I),[s,t]=i.useState({userId:"12345",username:"john_doe",email:"john@example.com",role:"user"}),[n,a]=i.useState(""),[l,u]=i.useState(null),[d,g]=i.useState(3600),m=i.useCallback(()=>{const c=o.generateToken(s,d);a(c),u(null)},[o,s,d]),p=i.useCallback(()=>{if(!n)return;const c=o.verifyToken(n);u(c)},[o,n]),b=i.useCallback(()=>{if(!n)return;const c=o.refreshToken(n,d);c&&(a(c),u(null))},[o,n,d]);return e.jsx("div",{className:"space-y-4",children:e.jsxs("div",{className:"bg-white p-6 rounded-lg border",children:[e.jsx("h3",{className:"text-lg font-semibold mb-4",children:"JWT Token 认证"}),e.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-4 mb-4",children:[e.jsxs("div",{children:[e.jsx("label",{className:"block text-sm font-medium text-gray-700 mb-2",children:"用户ID"}),e.jsx("input",{type:"text",value:s.userId,onChange:c=>t(h=>({...h,userId:c.target.value})),className:"w-full p-2 border border-gray-300 rounded-md"})]}),e.jsxs("div",{children:[e.jsx("label",{className:"block text-sm font-medium text-gray-700 mb-2",children:"用户名"}),e.jsx("input",{type:"text",value:s.username,onChange:c=>t(h=>({...h,username:c.target.value})),className:"w-full p-2 border border-gray-300 rounded-md"})]}),e.jsxs("div",{children:[e.jsx("label",{className:"block text-sm font-medium text-gray-700 mb-2",children:"邮箱"}),e.jsx("input",{type:"email",value:s.email,onChange:c=>t(h=>({...h,email:c.target.value})),className:"w-full p-2 border border-gray-300 rounded-md"})]}),e.jsxs("div",{children:[e.jsx("label",{className:"block text-sm font-medium text-gray-700 mb-2",children:"角色"}),e.jsxs("select",{value:s.role,onChange:c=>t(h=>({...h,role:c.target.value})),className:"w-full p-2 border border-gray-300 rounded-md",children:[e.jsx("option",{value:"user",children:"普通用户"}),e.jsx("option",{value:"admin",children:"管理员"}),e.jsx("option",{value:"moderator",children:"版主"})]})]})]}),e.jsxs("div",{className:"mb-4",children:[e.jsx("label",{className:"block text-sm font-medium text-gray-700 mb-2",children:"过期时间 (秒)"}),e.jsx("input",{type:"number",value:d,onChange:c=>g(parseInt(c.target.value)||3600),min:"60",max:"86400",className:"w-32 p-2 border border-gray-300 rounded-md"})]}),e.jsxs("div",{className:"flex space-x-4 mb-4",children:[e.jsx("button",{onClick:m,className:"px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700",children:"生成Token"}),n&&e.jsxs(e.Fragment,{children:[e.jsx("button",{onClick:p,className:"px-4 py-2 bg-green-600 text-white rounded-md hover:bg-green-700",children:"验证Token"}),e.jsx("button",{onClick:b,className:"px-4 py-2 bg-yellow-600 text-white rounded-md hover:bg-yellow-700",children:"刷新Token"})]})]}),n&&e.jsxs("div",{className:"mb-4",children:[e.jsx("label",{className:"block text-sm font-medium text-gray-700 mb-2",children:"生成的JWT Token:"}),e.jsx("textarea",{value:n,readOnly:!0,className:"w-full p-2 border border-gray-300 rounded-md font-mono text-xs",rows:3})]}),l&&e.jsxs("div",{className:`p-4 rounded-md ${l.valid?"bg-green-100 text-green-800 border border-green-200":"bg-red-100 text-red-800 border border-red-200"}`,children:[e.jsxs("div",{className:"font-medium mb-2",children:["验证结果: ",l.valid?"✅ 有效":"❌ 无效"]}),l.error&&e.jsxs("div",{className:"text-sm mb-2",children:["错误信息: ",l.error]}),l.payload&&e.jsxs("div",{className:"text-sm",children:[e.jsx("div",{className:"font-medium mb-1",children:"Token内容:"}),e.jsx("pre",{className:"bg-white p-2 rounded text-xs overflow-x-auto",children:JSON.stringify(l.payload,null,2)})]})]})]})})},D=()=>{const[o]=i.useState(()=>new w),[s,t]=i.useState([]),[n,a]=i.useState([]),[l,u]=i.useState(""),[d,g]=i.useState(""),[m,p]=i.useState(null),b=["read","write","delete","admin"],c=i.useCallback(()=>{o.generateAPIKey("user123",n),t(o.getAllAPIKeys()),a([])},[o,n]),h=i.useCallback(()=>{if(!l)return;const r=o.validateAPIKey(l,d||void 0);p(r),t(o.getAllAPIKeys())},[o,l,d]),j=i.useCallback(r=>{o.revokeAPIKey(r),t(o.getAllAPIKeys()),l===r&&(u(""),p(null))},[o,l]),v=(r,x)=>{a(x?y=>[...y,r]:y=>y.filter(T=>T!==r))};return e.jsx("div",{className:"space-y-4",children:e.jsxs("div",{className:"bg-white p-6 rounded-lg border",children:[e.jsx("h3",{className:"text-lg font-semibold mb-4",children:"API Key 认证管理"}),e.jsxs("div",{className:"mb-6",children:[e.jsx("h4",{className:"font-medium text-gray-900 mb-3",children:"生成新的API Key"}),e.jsxs("div",{className:"mb-3",children:[e.jsx("label",{className:"block text-sm font-medium text-gray-700 mb-2",children:"权限设置"}),e.jsx("div",{className:"flex flex-wrap gap-3",children:b.map(r=>e.jsxs("label",{className:"flex items-center",children:[e.jsx("input",{type:"checkbox",checked:n.includes(r),onChange:x=>v(r,x.target.checked),className:"mr-2"}),e.jsx("span",{className:"text-sm",children:r})]},r))})]}),e.jsx("button",{onClick:c,className:"px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700",children:"生成API Key"})]}),e.jsxs("div",{className:"mb-6",children:[e.jsx("h4",{className:"font-medium text-gray-900 mb-3",children:"验证API Key"}),e.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-4 mb-3",children:[e.jsxs("div",{children:[e.jsx("label",{className:"block text-sm font-medium text-gray-700 mb-2",children:"API Key"}),e.jsx("input",{type:"text",value:l,onChange:r=>u(r.target.value),placeholder:"输入要验证的API Key",className:"w-full p-2 border border-gray-300 rounded-md font-mono text-sm"})]}),e.jsxs("div",{children:[e.jsx("label",{className:"block text-sm font-medium text-gray-700 mb-2",children:"所需权限 (可选)"}),e.jsxs("select",{value:d,onChange:r=>g(r.target.value),className:"w-full p-2 border border-gray-300 rounded-md",children:[e.jsx("option",{value:"",children:"无特定权限要求"}),b.map(r=>e.jsx("option",{value:r,children:r},r))]})]})]}),e.jsx("button",{onClick:h,disabled:!l,className:"px-4 py-2 bg-green-600 text-white rounded-md hover:bg-green-700 disabled:opacity-50",children:"验证API Key"}),m&&e.jsxs("div",{className:`mt-3 p-3 rounded-md ${m.valid?"bg-green-100 text-green-800 border border-green-200":"bg-red-100 text-red-800 border border-red-200"}`,children:[e.jsxs("div",{className:"font-medium",children:["验证结果: ",m.valid?"✅ 有效":"❌ 无效"]}),m.error&&e.jsxs("div",{className:"text-sm mt-1",children:["错误: ",m.error]}),m.permissions&&e.jsxs("div",{className:"text-sm mt-1",children:["权限: ",m.permissions.join(", ")||"无"]})]})]}),e.jsxs("div",{children:[e.jsx("h4",{className:"font-medium text-gray-900 mb-3",children:"已生成的API Keys"}),s.length===0?e.jsx("p",{className:"text-gray-500 text-center py-4",children:"暂无API Key"}):e.jsx("div",{className:"space-y-3",children:s.map((r,x)=>e.jsx("div",{className:"p-3 border border-gray-200 rounded-lg",children:e.jsxs("div",{className:"flex justify-between items-start mb-2",children:[e.jsxs("div",{className:"flex-1",children:[e.jsx("div",{className:"font-mono text-sm bg-gray-100 p-2 rounded mb-2",children:r.key}),e.jsxs("div",{className:"text-sm text-gray-600",children:["权限: ",r.permissions.join(", ")||"无"]}),e.jsxs("div",{className:"text-xs text-gray-500",children:["创建时间: ",r.createdAt.toLocaleString(),r.lastUsed&&e.jsxs("span",{className:"ml-4",children:["最后使用: ",r.lastUsed.toLocaleString()]})]})]}),e.jsx("button",{onClick:()=>j(r.key),className:"px-3 py-1 bg-red-600 text-white text-sm rounded-md hover:bg-red-700",children:"撤销"})]})},x))})]})]})})},J=()=>{const[o]=i.useState(()=>new C),[s]=i.useState("client_123456"),[t]=i.useState("https://example.com/callback"),[n,a]=i.useState(["read"]),[l,u]=i.useState(""),[d,g]=i.useState(""),[m,p]=i.useState(null),b=["read","write","profile","email"],c=i.useCallback(()=>{const r=o.generateAuthorizationCode(s,t,n);u(r),g(""),p(null)},[o,s,t,n]),h=i.useCallback(()=>{if(!l)return;const r=o.exchangeCodeForToken(l,s,t);r.success&&r.accessToken?(g(r.accessToken),u("")):alert(`Token交换失败: ${r.error}`)},[o,l,s,t]),j=i.useCallback(r=>{if(!d)return;const x=o.validateAccessToken(d,r);p({...x,testedScope:r})},[o,d]),v=(r,x)=>{a(x?y=>[...y,r]:y=>y.filter(T=>T!==r))};return e.jsx("div",{className:"space-y-4",children:e.jsxs("div",{className:"bg-white p-6 rounded-lg border",children:[e.jsx("h3",{className:"text-lg font-semibold mb-4",children:"OAuth 2.0 认证流程"}),e.jsxs("div",{className:"space-y-6",children:[e.jsxs("div",{className:"p-4 bg-blue-50 rounded-lg",children:[e.jsx("h4",{className:"font-medium text-blue-900 mb-3",children:"步骤1: 用户授权"}),e.jsxs("div",{className:"mb-3",children:[e.jsxs("label",{className:"block text-sm font-medium text-gray-700 mb-2",children:["客户端ID:"," ",e.jsx("code",{className:"bg-gray-100 px-2 py-1 rounded",children:s})]}),e.jsxs("label",{className:"block text-sm font-medium text-gray-700 mb-2",children:["重定向URI:"," ",e.jsx("code",{className:"bg-gray-100 px-2 py-1 rounded",children:t})]})]}),e.jsxs("div",{className:"mb-3",children:[e.jsx("label",{className:"block text-sm font-medium text-gray-700 mb-2",children:"请求的权限范围"}),e.jsx("div",{className:"flex flex-wrap gap-3",children:b.map(r=>e.jsxs("label",{className:"flex items-center",children:[e.jsx("input",{type:"checkbox",checked:n.includes(r),onChange:x=>v(r,x.target.checked),className:"mr-2"}),e.jsx("span",{className:"text-sm",children:r})]},r))})]}),e.jsx("button",{onClick:c,className:"px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700",children:"授权并生成授权码"}),l&&e.jsxs("div",{className:"mt-3",children:[e.jsx("label",{className:"block text-sm font-medium text-gray-700 mb-1",children:"授权码 (10分钟有效):"}),e.jsx("code",{className:"bg-gray-100 p-2 rounded block text-sm font-mono",children:l})]})]}),e.jsxs("div",{className:"p-4 bg-green-50 rounded-lg",children:[e.jsx("h4",{className:"font-medium text-green-900 mb-3",children:"步骤2: 交换访问令牌"}),e.jsx("button",{onClick:h,disabled:!l,className:"px-4 py-2 bg-green-600 text-white rounded-md hover:bg-green-700 disabled:opacity-50",children:"使用授权码获取访问令牌"}),d&&e.jsxs("div",{className:"mt-3",children:[e.jsx("label",{className:"block text-sm font-medium text-gray-700 mb-1",children:"访问令牌 (1小时有效):"}),e.jsx("code",{className:"bg-gray-100 p-2 rounded block text-sm font-mono break-all",children:d})]})]}),e.jsxs("div",{className:"p-4 bg-purple-50 rounded-lg",children:[e.jsx("h4",{className:"font-medium text-purple-900 mb-3",children:"步骤3: 使用访问令牌"}),e.jsxs("div",{className:"flex flex-wrap gap-2 mb-3",children:[e.jsx("button",{onClick:()=>j(),disabled:!d,className:"px-3 py-2 bg-purple-600 text-white text-sm rounded-md hover:bg-purple-700 disabled:opacity-50",children:"验证令牌"}),b.map(r=>e.jsxs("button",{onClick:()=>j(r),disabled:!d,className:"px-3 py-2 bg-purple-600 text-white text-sm rounded-md hover:bg-purple-700 disabled:opacity-50",children:["验证 ",r," 权限"]},r))]}),m&&e.jsxs("div",{className:`p-3 rounded-md ${m.valid?"bg-green-100 text-green-800 border border-green-200":"bg-red-100 text-red-800 border border-red-200"}`,children:[e.jsxs("div",{className:"font-medium",children:["令牌验证: ",m.valid?"✅ 有效":"❌ 无效"]}),m.testedScope&&e.jsxs("div",{className:"text-sm mt-1",children:["测试权限: ",m.testedScope]}),m.error&&e.jsxs("div",{className:"text-sm mt-1",children:["错误: ",m.error]}),m.scope&&e.jsxs("div",{className:"text-sm mt-1",children:["令牌权限: ",m.scope.join(", ")]})]})]})]})]})})},M=()=>{const o={title:"JWT Token 实现",language:"typescript",code:`// JWT Token 管理器
class JWTManager {
  private secretKey: string;

  constructor(secretKey: string = 'my-jwt-secret-key') {
    this.secretKey = secretKey;
  }

  // 生成JWT Token
  generateToken(payload: any, expiresIn: number = 3600): string {
    const header = {
      alg: 'HS256',
      typ: 'JWT'
    };

    const now = Math.floor(Date.now() / 1000);
    const tokenPayload = {
      ...payload,
      iat: now,
      exp: now + expiresIn
    };

    const encodedHeader = this.base64UrlEncode(JSON.stringify(header));
    const encodedPayload = this.base64UrlEncode(JSON.stringify(tokenPayload));
    const signature = this.generateSignature(\`\${encodedHeader}.\${encodedPayload}\`);

    return \`\${encodedHeader}.\${encodedPayload}.\${signature}\`;
  }

  // 验证JWT Token
  verifyToken(token: string): { valid: boolean; payload?: any; error?: string } {
    try {
      const parts = token.split('.');
      if (parts.length !== 3) {
        return { valid: false, error: 'Invalid token format' };
      }

      const [encodedHeader, encodedPayload, signature] = parts;
      const expectedSignature = this.generateSignature(\`\${encodedHeader}.\${encodedPayload}\`);

      if (signature !== expectedSignature) {
        return { valid: false, error: 'Invalid signature' };
      }

      const payload = JSON.parse(this.base64UrlDecode(encodedPayload));
      const now = Math.floor(Date.now() / 1000);

      if (payload.exp && payload.exp < now) {
        return { valid: false, error: 'Token expired' };
      }

      return { valid: true, payload };
    } catch (error) {
      return { valid: false, error: 'Token parsing failed' };
    }
  }
}`,highlights:[10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45,46,47,48,49,50,51]};return e.jsx(N,{title:"请求认证机制",description:"实现多种认证方式保护API访问，包括JWT Token、API Key和OAuth 2.0认证流程。",overview:e.jsxs("div",{className:"space-y-4",children:[e.jsxs("div",{className:"bg-blue-50 p-6 rounded-lg",children:[e.jsx("h3",{className:"text-lg font-semibold text-blue-900 mb-3",children:"🔐 核心概念"}),e.jsxs("ul",{className:"space-y-2 text-blue-800",children:[e.jsxs("li",{children:[e.jsx("strong",{children:"JWT Token:"})," ","无状态的用户认证令牌，包含用户信息和过期时间"]}),e.jsxs("li",{children:[e.jsx("strong",{children:"API Key:"})," 简单的密钥认证方式，适合服务间调用"]}),e.jsxs("li",{children:[e.jsx("strong",{children:"OAuth 2.0:"})," ","标准的授权框架，支持第三方应用安全访问"]}),e.jsxs("li",{children:[e.jsx("strong",{children:"权限控制:"})," 基于角色和范围的细粒度权限管理"]})]})]}),e.jsxs("div",{className:"bg-green-50 p-6 rounded-lg",children:[e.jsx("h3",{className:"text-lg font-semibold text-green-900 mb-3",children:"✨ 主要优势"}),e.jsxs("ul",{className:"space-y-2 text-green-800",children:[e.jsxs("li",{children:[e.jsx("strong",{children:"安全性:"})," 多层次的身份验证和授权机制"]}),e.jsxs("li",{children:[e.jsx("strong",{children:"灵活性:"})," 支持多种认证方式，适应不同场景"]}),e.jsxs("li",{children:[e.jsx("strong",{children:"可扩展性:"})," 无状态设计，易于水平扩展"]}),e.jsxs("li",{children:[e.jsx("strong",{children:"标准化:"})," 遵循行业标准，兼容性好"]})]})]}),e.jsxs("div",{className:"bg-yellow-50 p-6 rounded-lg",children:[e.jsx("h3",{className:"text-lg font-semibold text-yellow-900 mb-3",children:"🎯 适用场景"}),e.jsxs("ul",{className:"space-y-2 text-yellow-800",children:[e.jsxs("li",{children:[e.jsx("strong",{children:"Web应用:"})," 用户登录和会话管理"]}),e.jsxs("li",{children:[e.jsx("strong",{children:"API服务:"})," 服务间认证和权限控制"]}),e.jsxs("li",{children:[e.jsx("strong",{children:"移动应用:"})," 移动端用户认证"]}),e.jsxs("li",{children:[e.jsx("strong",{children:"第三方集成:"})," OAuth授权和API访问"]})]})]}),e.jsxs("div",{className:"bg-red-50 p-6 rounded-lg",children:[e.jsx("h3",{className:"text-lg font-semibold text-red-900 mb-3",children:"⚠️ 注意事项"}),e.jsxs("ul",{className:"space-y-2 text-red-800",children:[e.jsxs("li",{children:[e.jsx("strong",{children:"Token安全:"})," 防止Token泄露和被盗用"]}),e.jsxs("li",{children:[e.jsx("strong",{children:"过期管理:"})," 合理设置Token过期时间"]}),e.jsxs("li",{children:[e.jsx("strong",{children:"权限最小化:"})," 遵循最小权限原则"]}),e.jsxs("li",{children:[e.jsx("strong",{children:"安全传输:"})," 使用HTTPS保护认证信息"]})]})]})]}),examples:[{title:"JWT Token 认证",component:e.jsx(S,{}),description:"演示JWT Token的生成、验证和刷新机制，支持用户信息和权限管理。",observationPoints:["修改用户信息后重新生成Token，观察Token内容变化","调整过期时间，测试Token的时效性","验证过期Token会返回相应的错误信息","刷新Token可以延长有效期而不需要重新登录"],keyPoints:["JWT由Header、Payload、Signature三部分组成","Token包含用户信息，实现无状态认证","签名验证确保Token未被篡改","过期时间控制Token的有效期"],commonTraps:["Token过期时间设置过长存在安全风险","签名密钥泄露导致Token可被伪造","客户端存储Token不当导致泄露","忘记验证Token过期时间"],solutions:["设置合理的Token过期时间（通常1-24小时）","使用强随机密钥并定期轮换","在安全存储中保存Token（如HttpOnly Cookie）","每次使用Token前都要验证其有效性"],codeExample:o},{title:"API Key 认证管理",component:e.jsx(D,{}),description:"管理API Key的生成、验证、权限控制和撤销，适合服务间认证。",observationPoints:["生成API Key时可以设置不同的权限组合","验证API Key时会检查所需权限","使用API Key后会更新最后使用时间","撤销的API Key立即失效"],keyPoints:["API Key适合长期的服务间认证","支持细粒度的权限控制","可以追踪API Key的使用情况","支持即时撤销和权限管理"],importantTips:["API Key应该定期轮换以提高安全性","为不同的服务分配不同的API Key","监控API Key的使用情况，及时发现异常","在生产环境中使用更复杂的权限模型"],commonTraps:["API Key泄露导致安全风险","权限设置过于宽泛","缺乏API Key使用监控","忘记定期轮换API Key"],solutions:["使用安全的存储和传输方式保护API Key","遵循最小权限原则设置API Key权限","建立API Key使用监控和告警机制","制定API Key定期轮换策略"],codeExample:P},{title:"OAuth 2.0 认证流程",component:e.jsx(J,{}),description:"完整的OAuth 2.0授权码流程演示，包括授权、Token交换和权限验证。",observationPoints:["OAuth流程分为三个步骤：授权、Token交换、使用Token","授权码有短暂的有效期（10分钟）","访问令牌有较长的有效期（1小时）","不同的权限范围控制API访问能力"],keyPoints:["OAuth 2.0是标准的第三方授权协议","授权码模式最安全，适合Web应用","权限范围(Scope)控制访问权限","访问令牌用于实际的API调用"],commonTraps:["授权码泄露导致安全风险","重定向URI验证不严格","权限范围设置过于宽泛","访问令牌存储不安全"],solutions:["确保授权码只能使用一次且有短暂有效期","严格验证重定向URI的合法性","遵循最小权限原则设置权限范围","使用安全的存储方式保护访问令牌"],importantTips:["OAuth 2.0是标准协议，要严格遵循规范","授权码和访问令牌都有有效期限制","权限范围控制着API的访问能力","重定向URI验证是安全的关键环节"],codeExample:K}],tutorial:{concepts:["认证(Authentication)是验证用户身份的过程，授权(Authorization)是验证用户权限的过程","JWT是一种无状态的认证方式，所有信息都包含在Token中","API Key是一种简单的认证方式，适合服务间调用","OAuth 2.0是标准的授权框架，支持第三方应用安全访问用户资源","权限控制应该遵循最小权限原则，只授予必要的权限"],steps:["选择合适的认证方式（JWT、API Key或OAuth）","实现Token或Key的生成机制","建立Token或Key的验证流程","设计权限控制和范围管理","实现Token刷新和撤销机制","建立安全的存储和传输机制","实现认证失败的处理逻辑","建立监控和审计机制","定期进行安全评估和更新"],tips:["根据应用场景选择认证方式：Web应用用JWT，服务间用API Key，第三方集成用OAuth","设置合理的Token过期时间，平衡安全性和用户体验","使用HTTPS保护所有认证相关的通信","实现Token刷新机制，避免用户频繁重新登录","建立完善的权限模型，支持角色和资源级别的控制","监控认证失败的情况，及时发现安全威胁"]},interview:{questions:[{question:"JWT Token的结构是什么，各部分的作用是什么？",answer:"JWT由三部分组成，用点号分隔：1) Header：包含算法类型和Token类型；2) Payload：包含声明信息，如用户ID、过期时间等；3) Signature：使用Header中指定的算法和密钥对前两部分进行签名，确保Token未被篡改。"},{question:"OAuth 2.0的授权码模式流程是什么？",answer:"授权码模式流程：1) 客户端引导用户到授权服务器；2) 用户同意授权后，授权服务器返回授权码到重定向URI；3) 客户端使用授权码向授权服务器请求访问令牌；4) 授权服务器验证授权码后返回访问令牌；5) 客户端使用访问令牌访问受保护的资源。"},{question:"API Key和JWT Token的区别是什么？",answer:"主要区别：1) 复杂度：API Key简单，JWT结构化；2) 信息量：API Key只是标识符，JWT包含用户信息；3) 状态：API Key通常需要服务端存储，JWT无状态；4) 过期：API Key通常长期有效，JWT有明确过期时间；5) 用途：API Key适合服务间调用，JWT适合用户认证。"},{question:"如何防止Token被盗用？",answer:"防止Token盗用的方法：1) 使用HTTPS传输；2) 设置合理的过期时间；3) 实现Token刷新机制；4) 绑定IP地址或设备指纹；5) 使用HttpOnly Cookie存储；6) 实现异常登录检测；7) 支持Token撤销；8) 监控Token使用情况。"}],keyPoints:["选择合适的认证方式需要考虑安全性、性能和复杂度","JWT提供无状态认证，但需要注意Token大小和安全性","API Key适合长期的服务间认证，管理相对简单","OAuth 2.0是标准的第三方授权协议，安全性高但实现复杂","权限控制应该遵循最小权限原则","Token的安全存储和传输至关重要","需要建立完善的监控和审计机制"]},bestPractices:{dos:["根据场景选择合适的认证方式","设置合理的Token过期时间","使用HTTPS保护认证信息传输","实现Token刷新和撤销机制","遵循最小权限原则设计权限模型","建立完善的监控和审计机制","定期轮换密钥和Token","实现多因素认证提高安全性"],donts:["不要在URL中传递敏感的认证信息","不要设置过长的Token过期时间","不要在客户端存储敏感的认证密钥","不要忽视Token的安全存储","不要授予过多的权限","不要忽视认证失败的监控","不要使用弱密钥或算法","不要在日志中记录敏感认证信息"],patterns:["双Token模式：访问Token和刷新Token分离","权限缓存模式：缓存用户权限信息提高性能","降级认证模式：认证服务不可用时的备用方案","联合认证模式：支持多种认证方式的统一入口","会话管理模式：结合Token和会话的混合认证","审计模式：完整记录认证和授权操作","限流模式：防止认证接口被恶意攻击"]}})};export{M as default};
