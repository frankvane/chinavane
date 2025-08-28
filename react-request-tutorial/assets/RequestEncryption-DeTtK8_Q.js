var T=Object.defineProperty;var D=(n,r,a)=>r in n?T(n,r,{enumerable:!0,configurable:!0,writable:!0,value:a}):n[r]=a;var j=(n,r,a)=>D(n,typeof r!="symbol"?r+"":r,a);import{j as e,r as o}from"./index-Bi_r7QuH.js";import{C as K}from"./ComponentTemplate-C5EWLtXX.js";class E{constructor(){j(this,"publicKey",null);j(this,"privateKey",null);j(this,"symmetricKey",null);this.initializeKeys()}async initializeKeys(){try{const r=await crypto.subtle.generateKey({name:"RSA-OAEP",modulusLength:2048,publicExponent:new Uint8Array([1,0,1]),hash:"SHA-256"},!0,["encrypt","decrypt"]);this.publicKey=r.publicKey,this.privateKey=r.privateKey,this.symmetricKey=await crypto.subtle.generateKey({name:"AES-GCM",length:256},!0,["encrypt","decrypt"])}catch(r){console.error("密钥初始化失败:",r)}}async encryptWithRSA(r){try{this.publicKey||await this.initializeKeys();const i=new TextEncoder().encode(r),d=await crypto.subtle.encrypt({name:"RSA-OAEP"},this.publicKey,i);return{encrypted:Array.from(new Uint8Array(d)).map(s=>s.toString(16).padStart(2,"0")).join(""),success:!0}}catch(a){return console.error("RSA加密失败:",a),{encrypted:"",success:!1}}}async decryptWithRSA(r){try{this.privateKey||await this.initializeKeys();const a=new Uint8Array(r.match(/.{1,2}/g).map(s=>parseInt(s,16))),i=await crypto.subtle.decrypt({name:"RSA-OAEP"},this.privateKey,a);return{decrypted:new TextDecoder().decode(i),success:!0}}catch(a){return console.error("RSA解密失败:",a),{decrypted:"",success:!1}}}async encryptWithAES(r){try{this.symmetricKey||await this.initializeKeys();const i=new TextEncoder().encode(r),d=crypto.getRandomValues(new Uint8Array(12)),s=await crypto.subtle.encrypt({name:"AES-GCM",iv:d},this.symmetricKey,i);return{encrypted:Array.from(new Uint8Array(s)).map(m=>m.toString(16).padStart(2,"0")).join(""),iv:Array.from(d).map(m=>m.toString(16).padStart(2,"0")).join(""),success:!0}}catch(a){return console.error("AES加密失败:",a),{encrypted:"",iv:"",success:!1}}}async decryptWithAES(r,a){try{this.symmetricKey||await this.initializeKeys();const i=new Uint8Array(r.match(/.{1,2}/g).map(l=>parseInt(l,16))),d=new Uint8Array(a.match(/.{1,2}/g).map(l=>parseInt(l,16))),s=await crypto.subtle.decrypt({name:"AES-GCM",iv:d},this.symmetricKey,i);return{decrypted:new TextDecoder().decode(s),success:!0}}catch(i){return console.error("AES解密失败:",i),{decrypted:"",success:!1}}}async hybridEncrypt(r){try{const a=await crypto.subtle.generateKey({name:"AES-GCM",length:256},!0,["encrypt","decrypt"]),d=new TextEncoder().encode(r),s=crypto.getRandomValues(new Uint8Array(12)),m=await crypto.subtle.encrypt({name:"AES-GCM",iv:s},a,d),l=await crypto.subtle.exportKey("raw",a),u=await crypto.subtle.encrypt({name:"RSA-OAEP"},this.publicKey,l);return{encryptedData:Array.from(new Uint8Array(m)).map(t=>t.toString(16).padStart(2,"0")).join(""),encryptedKey:Array.from(new Uint8Array(u)).map(t=>t.toString(16).padStart(2,"0")).join(""),iv:Array.from(s).map(t=>t.toString(16).padStart(2,"0")).join(""),success:!0}}catch(a){return console.error("混合加密失败:",a),{encryptedData:"",encryptedKey:"",iv:"",success:!1}}}async hybridDecrypt(r,a,i){try{const d=new Uint8Array(a.match(/.{1,2}/g).map(y=>parseInt(y,16))),s=await crypto.subtle.decrypt({name:"RSA-OAEP"},this.privateKey,d),m=await crypto.subtle.importKey("raw",s,{name:"AES-GCM"},!1,["decrypt"]),l=new Uint8Array(r.match(/.{1,2}/g).map(y=>parseInt(y,16))),u=new Uint8Array(i.match(/.{1,2}/g).map(y=>parseInt(y,16))),t=await crypto.subtle.decrypt({name:"AES-GCM",iv:u},m,l);return{decrypted:new TextDecoder().decode(t),success:!0}}catch(d){return console.error("混合解密失败:",d),{decrypted:"",success:!1}}}}const M=()=>{const[n]=o.useState(()=>new E),[r,a]=o.useState("Hello, this is sensitive data!"),[i,d]=o.useState("aes"),[s,m]=o.useState(null),[l,u]=o.useState(""),[t,p]=o.useState(!1),y=o.useCallback(async()=>{p(!0),u("");try{let c;switch(i){case"rsa":c=await n.encryptWithRSA(r);break;case"aes":c=await n.encryptWithAES(r);break;case"hybrid":c=await n.hybridEncrypt(r);break}m(c)}catch(c){console.error("加密失败:",c)}finally{p(!1)}},[n,r,i]),h=o.useCallback(async()=>{if(!(!s||!s.success)){p(!0);try{let c;switch(i){case"rsa":c=await n.decryptWithRSA(s.encrypted);break;case"aes":c=await n.decryptWithAES(s.encrypted,s.iv);break;case"hybrid":c=await n.hybridDecrypt(s.encryptedData,s.encryptedKey,s.iv);break}u(c.success?c.decrypted:"解密失败")}catch(c){console.error("解密失败:",c),u("解密失败")}finally{p(!1)}}},[n,s,i]);return e.jsx("div",{className:"space-y-4",children:e.jsxs("div",{className:"bg-white p-6 rounded-lg border",children:[e.jsx("h3",{className:"text-lg font-semibold mb-4",children:"请求数据加密与解密"}),e.jsxs("div",{className:"space-y-4",children:[e.jsxs("div",{children:[e.jsx("label",{className:"block text-sm font-medium text-gray-700 mb-2",children:"要加密的数据"}),e.jsx("textarea",{value:r,onChange:c=>a(c.target.value),className:"w-full p-3 border border-gray-300 rounded-md",rows:3,placeholder:"输入要加密的敏感数据..."})]}),e.jsxs("div",{children:[e.jsx("label",{className:"block text-sm font-medium text-gray-700 mb-2",children:"加密方式"}),e.jsxs("select",{value:i,onChange:c=>d(c.target.value),className:"w-full p-2 border border-gray-300 rounded-md",children:[e.jsx("option",{value:"aes",children:"AES对称加密（推荐用于大数据）"}),e.jsx("option",{value:"rsa",children:"RSA非对称加密（适用于小数据）"}),e.jsx("option",{value:"hybrid",children:"混合加密（RSA + AES）"})]})]}),e.jsxs("div",{className:"flex space-x-4",children:[e.jsx("button",{onClick:y,disabled:t||!r.trim(),className:"px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 disabled:opacity-50",children:t?"加密中...":"加密数据"}),s&&s.success&&e.jsx("button",{onClick:h,disabled:t,className:"px-4 py-2 bg-green-600 text-white rounded-md hover:bg-green-700 disabled:opacity-50",children:t?"解密中...":"解密数据"})]}),s&&e.jsxs("div",{className:"space-y-3",children:[e.jsx("h4",{className:"font-medium text-gray-900",children:"加密结果:"}),s.success?e.jsxs("div",{className:"space-y-2",children:[i==="aes"&&e.jsxs(e.Fragment,{children:[e.jsxs("div",{children:[e.jsx("label",{className:"block text-sm font-medium text-gray-700",children:"初始化向量 (IV):"}),e.jsx("code",{className:"text-xs bg-gray-100 p-2 rounded block break-all",children:s.iv})]}),e.jsxs("div",{children:[e.jsx("label",{className:"block text-sm font-medium text-gray-700",children:"加密数据:"}),e.jsx("code",{className:"text-xs bg-gray-100 p-2 rounded block break-all",children:s.encrypted})]})]}),i==="rsa"&&e.jsxs("div",{children:[e.jsx("label",{className:"block text-sm font-medium text-gray-700",children:"加密数据:"}),e.jsx("code",{className:"text-xs bg-gray-100 p-2 rounded block break-all",children:s.encrypted})]}),i==="hybrid"&&e.jsxs(e.Fragment,{children:[e.jsxs("div",{children:[e.jsx("label",{className:"block text-sm font-medium text-gray-700",children:"加密的AES密钥:"}),e.jsx("code",{className:"text-xs bg-gray-100 p-2 rounded block break-all",children:s.encryptedKey})]}),e.jsxs("div",{children:[e.jsx("label",{className:"block text-sm font-medium text-gray-700",children:"初始化向量 (IV):"}),e.jsx("code",{className:"text-xs bg-gray-100 p-2 rounded block break-all",children:s.iv})]}),e.jsxs("div",{children:[e.jsx("label",{className:"block text-sm font-medium text-gray-700",children:"加密数据:"}),e.jsx("code",{className:"text-xs bg-gray-100 p-2 rounded block break-all",children:s.encryptedData})]})]})]}):e.jsx("div",{className:"p-3 bg-red-100 text-red-800 rounded-md",children:"加密失败，请检查输入数据"})]}),l&&e.jsxs("div",{children:[e.jsx("h4",{className:"font-medium text-gray-900 mb-2",children:"解密结果:"}),e.jsxs("div",{className:`p-3 rounded-md ${l===r?"bg-green-100 text-green-800 border border-green-200":"bg-red-100 text-red-800 border border-red-200"}`,children:[e.jsx("div",{className:"font-medium mb-1",children:l===r?"✅ 解密成功":"❌ 解密失败"}),e.jsxs("div",{className:"text-sm",children:["解密结果: ",l]})]})]})]})]})})},k=()=>{const[n]=o.useState(()=>new E),[r,a]=o.useState([]),[i,d]=o.useState(!1),[s,m]=o.useState(1e3),l=o.useCallback(t=>"A".repeat(t),[]),u=o.useCallback(async()=>{d(!0),a([]);const t=l(s),p=[];try{const y=performance.now(),h=await n.encryptWithAES(t),c=performance.now()-y;let S=0;if(h.success){const f=performance.now();await n.decryptWithAES(h.encrypted,h.iv),S=performance.now()-f}if(p.push({method:"AES-256-GCM",encryptTime:c.toFixed(2),decryptTime:S.toFixed(2),totalTime:(c+S).toFixed(2),success:h.success,dataSize:s}),s<=200){const f=performance.now(),A=await n.encryptWithRSA(t),R=performance.now()-f;let v=0;if(A.success){const N=performance.now();await n.decryptWithRSA(A.encrypted),v=performance.now()-N}p.push({method:"RSA-2048-OAEP",encryptTime:R.toFixed(2),decryptTime:v.toFixed(2),totalTime:(R+v).toFixed(2),success:A.success,dataSize:s})}else p.push({method:"RSA-2048-OAEP",encryptTime:"N/A",decryptTime:"N/A",totalTime:"N/A",success:!1,dataSize:s,note:"数据过大，RSA不适用"});const x=performance.now(),g=await n.hybridEncrypt(t),b=performance.now()-x;let w=0;if(g.success){const f=performance.now();await n.hybridDecrypt(g.encryptedData,g.encryptedKey,g.iv),w=performance.now()-f}p.push({method:"混合加密 (RSA+AES)",encryptTime:b.toFixed(2),decryptTime:w.toFixed(2),totalTime:(b+w).toFixed(2),success:g.success,dataSize:s})}catch(y){console.error("性能测试失败:",y)}a(p),d(!1)},[n,s,l]);return e.jsx("div",{className:"space-y-4",children:e.jsxs("div",{className:"bg-white p-6 rounded-lg border",children:[e.jsx("h3",{className:"text-lg font-semibold mb-4",children:"加密方式性能对比"}),e.jsxs("div",{className:"flex items-center space-x-4 mb-4",children:[e.jsxs("div",{children:[e.jsx("label",{className:"block text-sm font-medium text-gray-700 mb-2",children:"测试数据大小 (字符数)"}),e.jsx("input",{type:"number",value:s,onChange:t=>m(parseInt(t.target.value)||1e3),min:"100",max:"10000",step:"100",className:"w-32 p-2 border border-gray-300 rounded-md"})]}),e.jsx("button",{onClick:u,disabled:i,className:"px-4 py-2 bg-purple-600 text-white rounded-md hover:bg-purple-700 disabled:opacity-50",children:i?"测试中...":"开始性能测试"})]}),r.length>0&&e.jsx("div",{className:"overflow-x-auto",children:e.jsxs("table",{className:"min-w-full divide-y divide-gray-200",children:[e.jsx("thead",{className:"bg-gray-50",children:e.jsxs("tr",{children:[e.jsx("th",{className:"px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider",children:"加密方式"}),e.jsx("th",{className:"px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider",children:"加密时间 (ms)"}),e.jsx("th",{className:"px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider",children:"解密时间 (ms)"}),e.jsx("th",{className:"px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider",children:"总时间 (ms)"}),e.jsx("th",{className:"px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider",children:"状态"}),e.jsx("th",{className:"px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider",children:"备注"})]})}),e.jsx("tbody",{className:"bg-white divide-y divide-gray-200",children:r.map((t,p)=>e.jsxs("tr",{children:[e.jsx("td",{className:"px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900",children:t.method}),e.jsx("td",{className:"px-6 py-4 whitespace-nowrap text-sm text-gray-500",children:t.encryptTime}),e.jsx("td",{className:"px-6 py-4 whitespace-nowrap text-sm text-gray-500",children:t.decryptTime}),e.jsx("td",{className:"px-6 py-4 whitespace-nowrap text-sm text-gray-500",children:t.totalTime}),e.jsx("td",{className:"px-6 py-4 whitespace-nowrap",children:e.jsx("span",{className:`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${t.success?"bg-green-100 text-green-800":"bg-red-100 text-red-800"}`,children:t.success?"成功":"失败"})}),e.jsx("td",{className:"px-6 py-4 whitespace-nowrap text-sm text-gray-500",children:t.note||`数据大小: ${t.dataSize} 字符`})]},p))})]})}),r.length>0&&e.jsxs("div",{className:"mt-4 p-4 bg-blue-50 rounded-lg",children:[e.jsx("h4",{className:"font-medium text-blue-900 mb-2",children:"性能分析:"}),e.jsxs("ul",{className:"text-sm text-blue-800 space-y-1",children:[e.jsx("li",{children:"• AES对称加密适合大数据量，性能优秀"}),e.jsx("li",{children:"• RSA非对称加密适合小数据量，安全性高但性能较低"}),e.jsx("li",{children:"• 混合加密结合两者优势，适合实际生产环境"}),e.jsx("li",{children:"• 数据量越大，AES的性能优势越明显"})]})]})]})})},P=()=>{const[n]=o.useState(()=>new E),[r,a]=o.useState([]),[i,d]=o.useState(!1),s=o.useCallback(async(t,p)=>{d(!0);try{const y=Math.random().toString(36).substring(2,15),h=JSON.stringify(p),c=await n.hybridEncrypt(h),S={id:y,type:t,originalData:p,encryptedData:c.success?{data:c.encryptedData,key:c.encryptedKey,iv:c.iv}:null,timestamp:new Date().toLocaleTimeString(),status:"encrypted",success:c.success};a(x=>[S,...x.slice(0,9)]),c.success&&setTimeout(async()=>{const x=await n.hybridDecrypt(c.encryptedData,c.encryptedKey,c.iv);a(g=>g.map(b=>b.id===y?{...b,status:x.success?"verified":"failed",decryptedData:x.success?JSON.parse(x.decrypted):null}:b))},1e3+Math.random()*2e3)}catch(y){console.error("加密请求失败:",y)}finally{d(!1)}},[n]),m=()=>{s("支付请求",{cardNumber:"4532-1234-5678-9012",cvv:"123",expiryDate:"12/25",amount:299.99,currency:"USD",merchantId:"merchant_12345"})},l=()=>{s("个人信息更新",{ssn:"123-45-6789",phoneNumber:"+1-555-123-4567",address:"123 Main St, Anytown, USA",email:"user@example.com",dateOfBirth:"1990-01-01"})},u=()=>{s("医疗记录",{patientId:"P123456",diagnosis:"Hypertension",medications:["Lisinopril 10mg","Metformin 500mg"],allergies:["Penicillin","Shellfish"],bloodType:"O+",emergencyContact:"+1-555-987-6543"})};return e.jsx("div",{className:"space-y-4",children:e.jsxs("div",{className:"bg-white p-6 rounded-lg border",children:[e.jsx("h3",{className:"text-lg font-semibold mb-4",children:"敏感数据加密传输"}),e.jsxs("div",{className:"flex flex-wrap gap-3 mb-6",children:[e.jsx("button",{onClick:m,disabled:i,className:"px-4 py-2 bg-green-600 text-white rounded-md hover:bg-green-700 disabled:opacity-50",children:"💳 支付信息"}),e.jsx("button",{onClick:l,disabled:i,className:"px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 disabled:opacity-50",children:"👤 个人信息"}),e.jsx("button",{onClick:u,disabled:i,className:"px-4 py-2 bg-purple-600 text-white rounded-md hover:bg-purple-700 disabled:opacity-50",children:"🏥 医疗记录"})]}),e.jsxs("div",{className:"space-y-4",children:[e.jsx("h4",{className:"font-medium text-gray-900",children:"加密请求历史:"}),r.length===0?e.jsx("p",{className:"text-gray-500 text-center py-8",children:"暂无加密请求记录"}):r.map(t=>e.jsxs("div",{className:`p-4 rounded-lg border ${t.status==="verified"?"bg-green-50 border-green-200":t.status==="failed"?"bg-red-50 border-red-200":"bg-yellow-50 border-yellow-200"}`,children:[e.jsxs("div",{className:"flex justify-between items-start mb-3",children:[e.jsxs("div",{children:[e.jsx("span",{className:"font-medium",children:t.type}),e.jsx("span",{className:`ml-2 px-2 py-1 text-xs rounded-full ${t.status==="verified"?"bg-green-100 text-green-800":t.status==="failed"?"bg-red-100 text-red-800":"bg-yellow-100 text-yellow-800"}`,children:t.status==="encrypted"?"已加密":t.status==="verified"?"已验证":"验证失败"})]}),e.jsx("span",{className:"text-sm text-gray-500",children:t.timestamp})]}),e.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-4 text-sm",children:[e.jsxs("div",{children:[e.jsx("h5",{className:"font-medium text-gray-700 mb-2",children:"原始数据:"}),e.jsx("pre",{className:"bg-gray-100 p-2 rounded text-xs overflow-x-auto",children:JSON.stringify(t.originalData,null,2)})]}),t.encryptedData&&e.jsxs("div",{children:[e.jsx("h5",{className:"font-medium text-gray-700 mb-2",children:"加密信息:"}),e.jsxs("div",{className:"space-y-1 text-xs",children:[e.jsxs("div",{children:[e.jsx("span",{className:"font-medium",children:"加密密钥:"}),e.jsxs("code",{className:"bg-gray-100 px-1 rounded ml-1",children:[t.encryptedData.key.substring(0,20),"..."]})]}),e.jsxs("div",{children:[e.jsx("span",{className:"font-medium",children:"初始向量:"}),e.jsx("code",{className:"bg-gray-100 px-1 rounded ml-1",children:t.encryptedData.iv})]}),e.jsxs("div",{children:[e.jsx("span",{className:"font-medium",children:"加密数据:"}),e.jsxs("code",{className:"bg-gray-100 px-1 rounded ml-1",children:[t.encryptedData.data.substring(0,20),"..."]})]})]})]})]}),t.status==="verified"&&t.decryptedData&&e.jsx("div",{className:"mt-3 p-2 bg-green-100 rounded",children:e.jsx("span",{className:"text-sm font-medium text-green-800",children:"✅ 服务端解密验证成功，数据完整性确认"})})]},t.id))]})]})})},z=()=>{const n={title:"混合加密实现",language:"typescript",code:`// 混合加密（RSA + AES）
async hybridEncrypt(data: string): Promise<{
  encryptedData: string;
  encryptedKey: string;
  iv: string;
  success: boolean;
}> {
  try {
    // 1. 生成临时AES密钥
    const tempAESKey = await crypto.subtle.generateKey(
      { name: 'AES-GCM', length: 256 },
      true,
      ['encrypt', 'decrypt']
    );
    
    // 2. 用AES加密数据
    const encoder = new TextEncoder();
    const dataBuffer = encoder.encode(data);
    const iv = crypto.getRandomValues(new Uint8Array(12));
    
    const encryptedData = await crypto.subtle.encrypt(
      { name: 'AES-GCM', iv: iv },
      tempAESKey,
      dataBuffer
    );
    
    // 3. 导出AES密钥
    const exportedKey = await crypto.subtle.exportKey('raw', tempAESKey);
    
    // 4. 用RSA加密AES密钥
    const encryptedKey = await crypto.subtle.encrypt(
      { name: 'RSA-OAEP' },
      this.publicKey!,
      exportedKey
    );
    
    return {
      encryptedData: this.bufferToHex(encryptedData),
      encryptedKey: this.bufferToHex(encryptedKey),
      iv: this.bufferToHex(iv),
      success: true
    };
  } catch (error) {
    console.error('混合加密失败:', error);
    return { encryptedData: '', encryptedKey: '', iv: '', success: false };
  }
}`,highlights:[9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33]},r={title:"加密性能测试实现",language:"typescript",code:`// 加密性能测试
class EncryptionPerformanceTester {
  private encryptionManager: RequestEncryptionManager;

  constructor() {
    this.encryptionManager = new RequestEncryptionManager();
  }

  // 性能测试方法
  async runPerformanceTest(dataSize: number): Promise<PerformanceResult[]> {
    const testData = this.generateTestData(dataSize);
    const results: PerformanceResult[] = [];

    // 测试AES加密
    try {
      const aesStart = performance.now();
      const aesEncrypted = await this.encryptionManager.encryptWithAES(testData);
      const aesEncryptTime = performance.now() - aesStart;

      if (aesEncrypted.success) {
        const aesDecryptStart = performance.now();
        const aesDecrypted = await this.encryptionManager.decryptWithAES(
          aesEncrypted.encrypted,
          aesEncrypted.iv
        );
        const aesDecryptTime = performance.now() - aesDecryptStart;

        results.push({
          method: 'AES-256-GCM',
          dataSize,
          encryptTime: Math.round(aesEncryptTime * 100) / 100,
          decryptTime: Math.round(aesDecryptTime * 100) / 100,
          totalTime: Math.round((aesEncryptTime + aesDecryptTime) * 100) / 100,
          success: aesDecrypted.success,
          note: aesDecrypted.success ? '对称加密，性能优秀' : '解密失败'
        });
      }
    } catch (error) {
      results.push({
        method: 'AES-256-GCM',
        dataSize,
        encryptTime: 0,
        decryptTime: 0,
        totalTime: 0,
        success: false,
        note: '加密失败: ' + (error as Error).message
      });
    }

    // 测试RSA加密（仅适用于小数据）
    if (dataSize <= 200) {
      try {
        const rsaStart = performance.now();
        const rsaEncrypted = await this.encryptionManager.encryptWithRSA(testData);
        const rsaEncryptTime = performance.now() - rsaStart;

        if (rsaEncrypted.success) {
          const rsaDecryptStart = performance.now();
          const rsaDecrypted = await this.encryptionManager.decryptWithRSA(
            rsaEncrypted.encrypted
          );
          const rsaDecryptTime = performance.now() - rsaDecryptStart;

          results.push({
            method: 'RSA-2048-OAEP',
            dataSize,
            encryptTime: Math.round(rsaEncryptTime * 100) / 100,
            decryptTime: Math.round(rsaDecryptTime * 100) / 100,
            totalTime: Math.round((rsaEncryptTime + rsaDecryptTime) * 100) / 100,
            success: rsaDecrypted.success,
            note: rsaDecrypted.success ? '非对称加密，安全性高' : '解密失败'
          });
        }
      } catch (error) {
        results.push({
          method: 'RSA-2048-OAEP',
          dataSize,
          encryptTime: 0,
          decryptTime: 0,
          totalTime: 0,
          success: false,
          note: '数据过大或加密失败'
        });
      }
    }

    // 测试混合加密
    try {
      const hybridStart = performance.now();
      const hybridEncrypted = await this.encryptionManager.hybridEncrypt(testData);
      const hybridEncryptTime = performance.now() - hybridStart;

      if (hybridEncrypted.success) {
        const hybridDecryptStart = performance.now();
        const hybridDecrypted = await this.encryptionManager.hybridDecrypt(
          hybridEncrypted.encryptedData,
          hybridEncrypted.encryptedKey,
          hybridEncrypted.iv
        );
        const hybridDecryptTime = performance.now() - hybridDecryptStart;

        results.push({
          method: '混合加密(RSA+AES)',
          dataSize,
          encryptTime: Math.round(hybridEncryptTime * 100) / 100,
          decryptTime: Math.round(hybridDecryptTime * 100) / 100,
          totalTime: Math.round((hybridEncryptTime + hybridDecryptTime) * 100) / 100,
          success: hybridDecrypted.success,
          note: hybridDecrypted.success ? '平衡安全性和性能' : '解密失败'
        });
      }
    } catch (error) {
      results.push({
        method: '混合加密(RSA+AES)',
        dataSize,
        encryptTime: 0,
        decryptTime: 0,
        totalTime: 0,
        success: false,
        note: '加密失败: ' + (error as Error).message
      });
    }

    return results;
  }

  // 生成测试数据
  private generateTestData(size: number): string {
    const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    let result = '';
    for (let i = 0; i < size; i++) {
      result += chars.charAt(Math.floor(Math.random() * chars.length));
    }
    return result;
  }
}`,highlights:[9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45,46,47,48,49,50,51,52,53,54,55,56,57,58,59,60,61,62,63,64,65,66,67,68,69,70,71,72,73,74,75,76,77,78,79,80,81,82,83,84,85,86,87,88,89,90,91,92,93,94,95,96,97,98,99,100,101,102,103,104,105,106,107,108,109,110,111,112,113,114,115,116,117,118,119,120]},a={title:"实际应用场景实现",language:"typescript",code:`// 敏感数据加密传输管理器
class SensitiveDataManager {
  private encryptionManager: RequestEncryptionManager;
  private requestQueue: EncryptedRequest[] = [];

  constructor() {
    this.encryptionManager = new RequestEncryptionManager();
  }

  // 处理敏感数据请求
  async processSensitiveRequest(
    requestType: string,
    sensitiveData: any
  ): Promise<EncryptedRequest> {
    const requestId = this.generateRequestId();
    const dataString = JSON.stringify(sensitiveData);

    try {
      // 使用混合加密保护敏感数据
      const encryptionResult = await this.encryptionManager.hybridEncrypt(dataString);

      const request: EncryptedRequest = {
        id: requestId,
        type: requestType,
        originalData: sensitiveData,
        encryptedPayload: encryptionResult.success ? {
          data: encryptionResult.encryptedData,
          key: encryptionResult.encryptedKey,
          iv: encryptionResult.iv
        } : null,
        timestamp: new Date().toISOString(),
        status: encryptionResult.success ? 'encrypted' : 'failed',
        metadata: {
          dataSize: dataString.length,
          encryptionMethod: 'hybrid',
          securityLevel: this.getSecurityLevel(requestType)
        }
      };

      // 添加到请求队列
      this.requestQueue.push(request);

      // 模拟发送到服务器
      if (encryptionResult.success) {
        this.simulateServerProcessing(request);
      }

      return request;
    } catch (error) {
      console.error('处理敏感数据请求失败:', error);
      throw new Error('数据加密失败');
    }
  }

  // 模拟服务器处理
  private async simulateServerProcessing(request: EncryptedRequest): Promise<void> {
    // 模拟网络延迟
    const delay = 1000 + Math.random() * 2000;
    
    setTimeout(async () => {
      try {
        if (request.encryptedPayload) {
          // 服务端解密验证
          const decryptionResult = await this.encryptionManager.hybridDecrypt(
            request.encryptedPayload.data,
            request.encryptedPayload.key,
            request.encryptedPayload.iv
          );

          // 更新请求状态
          const updatedRequest = this.requestQueue.find(r => r.id === request.id);
          if (updatedRequest) {
            updatedRequest.status = decryptionResult.success ? 'verified' : 'failed';
            updatedRequest.serverResponse = {
              success: decryptionResult.success,
              message: decryptionResult.success ? '数据验证成功' : '数据验证失败',
              processedAt: new Date().toISOString()
            };

            if (decryptionResult.success) {
              updatedRequest.decryptedData = JSON.parse(decryptionResult.decrypted);
            }
          }
        }
      } catch (error) {
        console.error('服务器处理失败:', error);
        const updatedRequest = this.requestQueue.find(r => r.id === request.id);
        if (updatedRequest) {
          updatedRequest.status = 'failed';
          updatedRequest.serverResponse = {
            success: false,
            message: '服务器处理异常',
            processedAt: new Date().toISOString()
          };
        }
      }
    }, delay);
  }

  // 获取安全级别
  private getSecurityLevel(requestType: string): 'high' | 'medium' | 'low' {
    const highSecurityTypes = ['payment', 'medical', 'identity'];
    const mediumSecurityTypes = ['personal', 'financial', 'contact'];
    
    if (highSecurityTypes.includes(requestType)) {
      return 'high';
    } else if (mediumSecurityTypes.includes(requestType)) {
      return 'medium';
    } else {
      return 'low';
    }
  }

  // 生成请求ID
  private generateRequestId(): string {
    return Math.random().toString(36).substring(2, 15) + 
           Math.random().toString(36).substring(2, 15);
  }

  // 获取请求队列
  getRequestQueue(): EncryptedRequest[] {
    return [...this.requestQueue];
  }

  // 清空请求队列
  clearQueue(): void {
    this.requestQueue = [];
  }
}`,highlights:[11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45,46,47,48,49,50,51,52,53,54,55,56,57,58,59,60,61,62,63,64,65,66,67,68,69,70,71,72,73,74,75,76,77,78,79,80,81,82,83,84,85,86,87,88,89,90,91,92,93,94,95,96,97,98,99,100,101,102,103,104,105,106,107,108,109,110,111,112,113,114,115,116,117,118,119,120]};return e.jsx(K,{title:"请求加密机制",description:"实现多种加密算法保护敏感数据传输，包括RSA非对称加密、AES对称加密和混合加密方案。",overview:e.jsxs("div",{className:"space-y-4",children:[e.jsxs("div",{className:"bg-blue-50 p-6 rounded-lg",children:[e.jsx("h3",{className:"text-lg font-semibold text-blue-900 mb-3",children:"🔐 核心概念"}),e.jsxs("ul",{className:"space-y-2 text-blue-800",children:[e.jsxs("li",{children:[e.jsx("strong",{children:"对称加密(AES):"})," 使用相同密钥进行加密和解密，速度快，适合大数据"]}),e.jsxs("li",{children:[e.jsx("strong",{children:"非对称加密(RSA):"})," 使用公私钥对，安全性高，适合小数据和密钥交换"]}),e.jsxs("li",{children:[e.jsx("strong",{children:"混合加密:"})," 结合RSA和AES优势，用RSA加密AES密钥，用AES加密数据"]}),e.jsxs("li",{children:[e.jsx("strong",{children:"初始化向量(IV):"})," 确保相同明文产生不同密文，提高安全性"]})]})]}),e.jsxs("div",{className:"bg-green-50 p-6 rounded-lg",children:[e.jsx("h3",{className:"text-lg font-semibold text-green-900 mb-3",children:"✨ 主要优势"}),e.jsxs("ul",{className:"space-y-2 text-green-800",children:[e.jsxs("li",{children:[e.jsx("strong",{children:"数据保护:"})," 防止敏感信息在传输过程中被窃取"]}),e.jsxs("li",{children:[e.jsx("strong",{children:"多种算法:"})," 根据数据特点选择最适合的加密方式"]}),e.jsxs("li",{children:[e.jsx("strong",{children:"标准实现:"})," 基于Web Crypto API，符合安全标准"]}),e.jsxs("li",{children:[e.jsx("strong",{children:"性能优化:"})," 混合加密兼顾安全性和性能"]})]})]}),e.jsxs("div",{className:"bg-yellow-50 p-6 rounded-lg",children:[e.jsx("h3",{className:"text-lg font-semibold text-yellow-900 mb-3",children:"🎯 适用场景"}),e.jsxs("ul",{className:"space-y-2 text-yellow-800",children:[e.jsxs("li",{children:[e.jsx("strong",{children:"支付系统:"})," 信用卡信息、银行账户等金融数据加密"]}),e.jsxs("li",{children:[e.jsx("strong",{children:"个人隐私:"})," 身份证号、手机号等个人敏感信息保护"]}),e.jsxs("li",{children:[e.jsx("strong",{children:"医疗数据:"})," 病历、诊断结果等医疗隐私数据"]}),e.jsxs("li",{children:[e.jsx("strong",{children:"企业机密:"})," 商业机密、技术文档等企业敏感数据"]})]})]}),e.jsxs("div",{className:"bg-red-50 p-6 rounded-lg",children:[e.jsx("h3",{className:"text-lg font-semibold text-red-900 mb-3",children:"⚠️ 注意事项"}),e.jsxs("ul",{className:"space-y-2 text-red-800",children:[e.jsxs("li",{children:[e.jsx("strong",{children:"密钥管理:"})," 确保密钥的安全生成、存储和分发"]}),e.jsxs("li",{children:[e.jsx("strong",{children:"算法选择:"})," 根据数据大小和安全要求选择合适算法"]}),e.jsxs("li",{children:[e.jsx("strong",{children:"性能影响:"})," 加密解密会增加计算开销和延迟"]}),e.jsxs("li",{children:[e.jsx("strong",{children:"兼容性:"})," 确保客户端和服务端使用相同的加密标准"]})]})]})]}),examples:[{title:"基础加密与解密",component:e.jsx(M,{}),description:"演示RSA、AES和混合加密的基本使用方法，比较不同加密方式的特点。",observationPoints:["AES加密速度快，适合大数据量","RSA加密安全性高，但有数据大小限制","混合加密结合两者优势，实际应用中最常用","每次加密都会生成不同的结果（由于IV的随机性）"],keyPoints:["AES使用256位密钥和GCM模式，提供认证加密","RSA使用2048位密钥和OAEP填充，确保安全性","混合加密先用AES加密数据，再用RSA加密AES密钥","初始化向量(IV)确保相同数据产生不同密文"],commonTraps:["RSA直接加密大数据会失败","忘记保存IV导致无法解密","密钥管理不当导致安全风险","加密后的数据需要正确的编码转换"],solutions:["大数据使用AES或混合加密","将IV与密文一起传输或存储","使用安全的密钥管理系统","统一使用十六进制编码处理二进制数据"],codeExample:n},{title:"性能对比分析",component:e.jsx(k,{}),description:"对比不同加密算法的性能表现，帮助选择最适合的加密方案。",observationPoints:["调整数据大小观察性能变化","RSA在大数据时会失败或性能极差","AES性能随数据量线性增长","混合加密在各种数据量下都有良好表现"],keyPoints:["AES对称加密性能优秀，适合大数据","RSA非对称加密安全但性能较低","混合加密平衡了安全性和性能","数据量是选择加密算法的重要因素"],importantTips:["生产环境建议使用混合加密","小于200字节的数据可考虑直接使用RSA","大数据量时AES性能优势明显","定期进行性能测试优化加密策略"],codeExample:r},{title:"实际应用场景",component:e.jsx(P,{}),description:"模拟真实的敏感数据加密传输场景，包括支付、个人信息和医疗数据。",observationPoints:["不同类型的敏感数据都使用统一的加密流程","加密后的数据完全不可读，确保隐私安全","服务端能够正确解密并验证数据完整性","加密过程对用户透明，不影响使用体验"],keyPoints:["混合加密适用于各种类型的敏感数据","加密传输确保数据在网络中的安全","服务端解密验证确保数据完整性","详细的日志记录便于安全审计"],commonTraps:["加密密钥泄露导致数据暴露","加密算法实现错误导致安全漏洞","忽视密钥轮换导致长期风险","加密性能影响用户体验"],solutions:["使用硬件安全模块(HSM)保护密钥","采用经过验证的加密库和标准","建立定期的密钥轮换机制","优化加密流程，使用异步处理"],importantTips:["选择合适的加密算法和密钥长度","实现完整的密钥管理生命周期","定期进行安全审计和漏洞扫描","建立完善的监控和告警机制"],codeExample:a}],tutorial:{concepts:["对称加密使用相同的密钥进行加密和解密，速度快但密钥分发困难","非对称加密使用公私钥对，解决了密钥分发问题但性能较低","混合加密结合两者优势，用非对称加密传输对称密钥，用对称加密传输数据","初始化向量(IV)是随机数，确保相同明文产生不同密文，防止模式攻击","Web Crypto API提供了标准化的加密实现，确保安全性和兼容性"],steps:["选择合适的加密算法（根据数据大小和安全要求）","生成或获取加密所需的密钥","对于AES加密，生成随机的初始化向量(IV)","使用选定的算法和参数对数据进行加密","将加密结果转换为适合传输的格式（如十六进制）","将加密数据、IV等信息一起发送给接收方","接收方使用相应的密钥和参数进行解密","验证解密结果的完整性和正确性","安全地处理和存储解密后的敏感数据"],tips:["根据数据大小选择加密算法：小数据用RSA，大数据用AES，通用场景用混合加密","始终使用随机生成的IV，不要重复使用","定期轮换加密密钥，建议每季度更换一次","使用经过验证的加密库，不要自己实现加密算法","加密不能替代其他安全措施，需要结合HTTPS、访问控制等","在开发环境提供加密调试工具，便于问题排查"]},interview:{questions:[{question:"对称加密和非对称加密的区别是什么？",answer:"对称加密使用相同密钥进行加密和解密，优点是速度快、效率高，缺点是密钥分发困难；非对称加密使用公私钥对，公钥加密私钥解密，优点是解决了密钥分发问题，缺点是速度慢、计算开销大。实际应用中常使用混合加密，结合两者优势。"},{question:"什么是混合加密，为什么要使用它？",answer:"混合加密是结合对称加密和非对称加密的方案：用非对称加密（如RSA）加密对称密钥（如AES密钥），用对称加密加密实际数据。这样既解决了密钥分发问题，又保证了加密性能。HTTPS、PGP等都采用混合加密方案。"},{question:"初始化向量(IV)的作用是什么？",answer:"IV的作用是确保相同的明文在不同时间加密时产生不同的密文，防止模式攻击和重放攻击。IV应该是随机生成的，对于每次加密都应该使用不同的IV。IV不需要保密，可以与密文一起传输，但必须确保其随机性和唯一性。"},{question:"如何选择合适的加密算法？",answer:"选择加密算法需要考虑：1) 数据大小：小数据可用RSA，大数据用AES；2) 安全要求：高安全要求选择更长的密钥；3) 性能要求：实时应用优先考虑AES；4) 兼容性：确保各端支持相同算法；5) 标准化：优先选择标准化的算法如AES-256、RSA-2048等。"}],keyPoints:["混合加密是实际应用中的最佳选择","Web Crypto API提供标准化的加密实现","初始化向量(IV)对于加密安全至关重要","密钥管理是加密系统的核心","加密算法的选择需要平衡安全性和性能","加密不能替代其他安全措施","定期的安全审计和密钥轮换是必要的"]},bestPractices:{dos:["使用标准化的加密算法（AES-256、RSA-2048等）","为每次加密生成随机的初始化向量","实施定期的密钥轮换策略","使用混合加密处理不同大小的数据","结合HTTPS确保端到端安全","建立完善的密钥管理系统","进行定期的安全审计和渗透测试","提供详细的加密日志用于审计"],donts:["不要自己实现加密算法","不要重复使用初始化向量","不要在客户端硬编码密钥","不要忽视密钥的安全存储","不要仅依赖加密而忽视其他安全措施","不要在日志中记录敏感的密钥信息","不要使用已知有漏洞的加密算法","不要忽视加密对性能的影响"],patterns:["信封加密模式：多层密钥保护敏感数据","密钥轮换模式：定期更换密钥确保安全","分层加密模式：不同敏感级别使用不同加密强度","异步加密模式：后台处理加密不阻塞用户操作","缓存加密模式：缓存加密结果提高性能","降级模式：加密失败时的安全降级策略","审计模式：完整记录加密操作用于合规"]}})};export{z as default};
