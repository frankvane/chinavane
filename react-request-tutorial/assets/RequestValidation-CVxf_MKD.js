var j=Object.defineProperty;var y=(h,t,s)=>t in h?j(h,t,{enumerable:!0,configurable:!0,writable:!0,value:s}):h[t]=s;var g=(h,t,s)=>y(h,typeof t!="symbol"?t+"":t,s);import{j as e,r as m}from"./index-Bi_r7QuH.js";import{C as v}from"./ComponentTemplate-C5EWLtXX.js";class p{constructor(t=[],s=!1){g(this,"rules");g(this,"strictMode");this.rules=t,this.strictMode=s}addRule(t){this.rules.push(t)}removeRule(t){this.rules=this.rules.filter(s=>s.field!==t)}validate(t){const s={},r={};for(const a of this.rules){const d=this.getFieldValue(t,a.field),c=this.validateField(d,a);c.length>0&&(s[a.field]=c)}if(this.strictMode){const a=new Set(this.rules.map(c=>c.field)),d=this.getAllFields(t);for(const c of d)a.has(c)||(r[c]||(r[c]=[]),r[c].push("未定义的字段"))}return{valid:Object.keys(s).length===0,errors:s,warnings:r}}validateField(t,s){const r=[];if(s.type==="required"&&(t==null||t===""))return r.push(s.message||`${s.field} 是必填字段`),r;if(t==null||t==="")return r;switch(s.type){case"email":this.isValidEmail(t)||r.push(s.message||`${s.field} 必须是有效的邮箱地址`);break;case"phone":this.isValidPhone(t)||r.push(s.message||`${s.field} 必须是有效的手机号码`);break;case"url":this.isValidUrl(t)||r.push(s.message||`${s.field} 必须是有效的URL`);break;case"number":typeof t!="number"||isNaN(t)?r.push(s.message||`${s.field} 必须是数字`):(s.min!==void 0&&t<s.min&&r.push(`${s.field} 不能小于 ${s.min}`),s.max!==void 0&&t>s.max&&r.push(`${s.field} 不能大于 ${s.max}`));break;case"string":typeof t!="string"?r.push(s.message||`${s.field} 必须是字符串`):(s.min!==void 0&&t.length<s.min&&r.push(`${s.field} 长度不能少于 ${s.min} 个字符`),s.max!==void 0&&t.length>s.max&&r.push(`${s.field} 长度不能超过 ${s.max} 个字符`),s.pattern&&!s.pattern.test(t)&&r.push(s.message||`${s.field} 格式不正确`));break;case"array":Array.isArray(t)?(s.min!==void 0&&t.length<s.min&&r.push(`${s.field} 至少需要 ${s.min} 个元素`),s.max!==void 0&&t.length>s.max&&r.push(`${s.field} 最多只能有 ${s.max} 个元素`)):r.push(s.message||`${s.field} 必须是数组`);break;case"object":(typeof t!="object"||Array.isArray(t))&&r.push(s.message||`${s.field} 必须是对象`);break;case"custom":if(s.validator){const a=s.validator(t);a!==!0&&r.push(typeof a=="string"?a:s.message||`${s.field} 验证失败`)}break}return r}getFieldValue(t,s){const r=s.split(".");let a=t;for(const d of r){if(a==null)return;a=a[d]}return a}getAllFields(t,s=""){const r=[];if(typeof t=="object"&&t!==null&&!Array.isArray(t))for(const a in t){const d=s?`${s}.${a}`:a;r.push(d),typeof t[a]=="object"&&t[a]!==null&&!Array.isArray(t[a])&&r.push(...this.getAllFields(t[a],d))}return r}isValidEmail(t){return/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(t)}isValidPhone(t){return/^1[3-9]\d{9}$/.test(t)}isValidUrl(t){try{return new URL(t),!0}catch{return!1}}}class N{constructor(t){g(this,"schema");this.schema=t}validate(t){const s={};try{this.validateObject(t,this.schema,"",s)}catch(r){s.root=[r instanceof Error?r.message:"验证失败"]}return{valid:Object.keys(s).length===0,errors:s}}validateObject(t,s,r,a){if(s.type==="object"){if(typeof t!="object"||t===null||Array.isArray(t)){this.addError(a,r,"必须是对象");return}if(s.required)for(const d of s.required)d in t||this.addError(a,r?`${r}.${d}`:d,"是必填字段");if(s.properties){for(const[d,c]of Object.entries(s.properties))if(d in t){const u=r?`${r}.${d}`:d;this.validateObject(t[d],c,u,a)}}}else if(s.type==="array"){if(!Array.isArray(t)){this.addError(a,r,"必须是数组");return}s.minItems&&t.length<s.minItems&&this.addError(a,r,`至少需要 ${s.minItems} 个元素`),s.maxItems&&t.length>s.maxItems&&this.addError(a,r,`最多只能有 ${s.maxItems} 个元素`),s.items&&t.forEach((d,c)=>{this.validateObject(d,s.items,`${r}[${c}]`,a)})}else if(s.type==="string"){if(typeof t!="string"){this.addError(a,r,"必须是字符串");return}s.minLength&&t.length<s.minLength&&this.addError(a,r,`长度不能少于 ${s.minLength} 个字符`),s.maxLength&&t.length>s.maxLength&&this.addError(a,r,`长度不能超过 ${s.maxLength} 个字符`),s.pattern&&!new RegExp(s.pattern).test(t)&&this.addError(a,r,"格式不正确")}else if(s.type==="number"){if(typeof t!="number"||isNaN(t)){this.addError(a,r,"必须是数字");return}s.minimum!==void 0&&t<s.minimum&&this.addError(a,r,`不能小于 ${s.minimum}`),s.maximum!==void 0&&t>s.maximum&&this.addError(a,r,`不能大于 ${s.maximum}`)}}addError(t,s,r){t[s]||(t[s]=[]),t[s].push(r)}}const w=()=>{const[h]=m.useState(()=>{const l=new p;return l.addRule({field:"name",type:"required"}),l.addRule({field:"name",type:"string",min:2,max:20}),l.addRule({field:"email",type:"required"}),l.addRule({field:"email",type:"email"}),l.addRule({field:"age",type:"number",min:0,max:120}),l.addRule({field:"phone",type:"phone"}),l}),[t,s]=m.useState({name:"",email:"",age:"",phone:""}),[r,a]=m.useState(null),d=m.useCallback((l,i)=>{s(n=>({...n,[l]:i}))},[]),c=m.useCallback(()=>{const l={...t,age:t.age?parseInt(t.age):void 0},i=h.validate(l);a(i)},[h,t]),u=m.useCallback(()=>{s({name:"",email:"",age:"",phone:""}),a(null)},[]);return e.jsx("div",{className:"space-y-4",children:e.jsxs("div",{className:"bg-white p-6 rounded-lg border",children:[e.jsx("h3",{className:"text-lg font-semibold mb-4",children:"基础字段验证"}),e.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-4 mb-4",children:[e.jsxs("div",{children:[e.jsx("label",{className:"block text-sm font-medium text-gray-700 mb-2",children:"姓名 *"}),e.jsx("input",{type:"text",value:t.name,onChange:l=>d("name",l.target.value),className:`w-full p-2 border rounded-md ${r!=null&&r.errors.name?"border-red-300 bg-red-50":"border-gray-300"}`,placeholder:"请输入姓名（2-20个字符）"}),(r==null?void 0:r.errors.name)&&e.jsx("div",{className:"mt-1 text-sm text-red-600",children:r.errors.name.map((l,i)=>e.jsxs("div",{children:["• ",l]},i))})]}),e.jsxs("div",{children:[e.jsx("label",{className:"block text-sm font-medium text-gray-700 mb-2",children:"邮箱 *"}),e.jsx("input",{type:"email",value:t.email,onChange:l=>d("email",l.target.value),className:`w-full p-2 border rounded-md ${r!=null&&r.errors.email?"border-red-300 bg-red-50":"border-gray-300"}`,placeholder:"请输入邮箱地址"}),(r==null?void 0:r.errors.email)&&e.jsx("div",{className:"mt-1 text-sm text-red-600",children:r.errors.email.map((l,i)=>e.jsxs("div",{children:["• ",l]},i))})]}),e.jsxs("div",{children:[e.jsx("label",{className:"block text-sm font-medium text-gray-700 mb-2",children:"年龄"}),e.jsx("input",{type:"number",value:t.age,onChange:l=>d("age",l.target.value),className:`w-full p-2 border rounded-md ${r!=null&&r.errors.age?"border-red-300 bg-red-50":"border-gray-300"}`,placeholder:"请输入年龄（0-120）"}),(r==null?void 0:r.errors.age)&&e.jsx("div",{className:"mt-1 text-sm text-red-600",children:r.errors.age.map((l,i)=>e.jsxs("div",{children:["• ",l]},i))})]}),e.jsxs("div",{children:[e.jsx("label",{className:"block text-sm font-medium text-gray-700 mb-2",children:"手机号"}),e.jsx("input",{type:"tel",value:t.phone,onChange:l=>d("phone",l.target.value),className:`w-full p-2 border rounded-md ${r!=null&&r.errors.phone?"border-red-300 bg-red-50":"border-gray-300"}`,placeholder:"请输入手机号码"}),(r==null?void 0:r.errors.phone)&&e.jsx("div",{className:"mt-1 text-sm text-red-600",children:r.errors.phone.map((l,i)=>e.jsxs("div",{children:["• ",l]},i))})]})]}),e.jsxs("div",{className:"flex space-x-4 mb-4",children:[e.jsx("button",{onClick:c,className:"px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700",children:"验证数据"}),e.jsx("button",{onClick:u,className:"px-4 py-2 bg-gray-600 text-white rounded-md hover:bg-gray-700",children:"重置"})]}),r&&e.jsxs("div",{className:`p-4 rounded-md ${r.valid?"bg-green-100 text-green-800 border border-green-200":"bg-red-100 text-red-800 border border-red-200"}`,children:[e.jsxs("div",{className:"font-medium mb-2",children:["验证结果: ",r.valid?"✅ 通过":"❌ 失败"]}),!r.valid&&e.jsxs("div",{className:"text-sm",children:[e.jsx("div",{className:"font-medium mb-1",children:"错误详情:"}),Object.entries(r.errors).map(([l,i])=>e.jsxs("div",{className:"mb-1",children:[e.jsxs("span",{className:"font-medium",children:[l,":"]}),e.jsx("ul",{className:"ml-4",children:i.map((n,o)=>e.jsxs("li",{children:["• ",n]},o))})]},l))]})]})]})})},$=()=>{const[h]=m.useState({type:"object",required:["title","author","publishYear"],properties:{title:{type:"string",minLength:1,maxLength:100},author:{type:"object",required:["name"],properties:{name:{type:"string",minLength:2,maxLength:50},email:{type:"string",pattern:"^[^\\s@]+@[^\\s@]+\\.[^\\s@]+$"}}},publishYear:{type:"number",minimum:1900,maximum:2024},tags:{type:"array",minItems:1,maxItems:5,items:{type:"string",minLength:1}}}}),[t]=m.useState(()=>new N(h)),[s,r]=m.useState(`{
  "title": "React 请求管理教程",
  "author": {
    "name": "张三",
    "email": "zhangsan@example.com"
  },
  "publishYear": 2024,
  "tags": ["React", "HTTP", "教程"]
}`),[a,d]=m.useState(null),[c,u]=m.useState(null),l=m.useCallback(()=>{try{const o=JSON.parse(s);u(null);const x=t.validate(o);d(x)}catch(o){u(o instanceof Error?o.message:"JSON 解析失败"),d(null)}},[t,s]),i=m.useCallback(()=>{r(`{
  "title": "",
  "author": {
    "name": "",
    "email": ""
  },
  "publishYear": null,
  "tags": []
}`),d(null),u(null)},[]),n=m.useCallback(o=>{const x={valid:`{
  "title": "React 请求管理教程",
  "author": {
    "name": "张三",
    "email": "zhangsan@example.com"
  },
  "publishYear": 2024,
  "tags": ["React", "HTTP", "教程"]
}`,invalid:`{
  "title": "",
  "author": {
    "name": "A",
    "email": "invalid-email"
  },
  "publishYear": 1800,
  "tags": []
}`,missing:`{
  "title": "缺少必填字段的示例",
  "publishYear": 2024
}`};r(x[o]||x.valid),d(null),u(null)},[]);return e.jsx("div",{className:"space-y-4",children:e.jsxs("div",{className:"bg-white p-6 rounded-lg border",children:[e.jsx("h3",{className:"text-lg font-semibold mb-4",children:"JSON Schema 验证"}),e.jsxs("div",{className:"grid grid-cols-1 lg:grid-cols-2 gap-6",children:[e.jsxs("div",{children:[e.jsxs("div",{className:"flex justify-between items-center mb-2",children:[e.jsx("label",{className:"block text-sm font-medium text-gray-700",children:"JSON 数据"}),e.jsxs("div",{className:"flex space-x-2",children:[e.jsx("button",{onClick:()=>n("valid"),className:"px-2 py-1 text-xs bg-green-600 text-white rounded hover:bg-green-700",children:"有效示例"}),e.jsx("button",{onClick:()=>n("invalid"),className:"px-2 py-1 text-xs bg-red-600 text-white rounded hover:bg-red-700",children:"无效示例"}),e.jsx("button",{onClick:()=>n("missing"),className:"px-2 py-1 text-xs bg-yellow-600 text-white rounded hover:bg-yellow-700",children:"缺失字段"})]})]}),e.jsx("textarea",{value:s,onChange:o=>r(o.target.value),className:`w-full h-64 p-3 border rounded-md font-mono text-sm ${c?"border-red-300 bg-red-50":"border-gray-300"}`,placeholder:"请输入 JSON 数据"}),c&&e.jsxs("div",{className:"mt-2 text-sm text-red-600",children:["JSON 解析错误: ",c]})]}),e.jsxs("div",{children:[e.jsx("label",{className:"block text-sm font-medium text-gray-700 mb-2",children:"Schema 定义"}),e.jsx("pre",{className:"w-full h-64 p-3 bg-gray-100 border rounded-md text-sm overflow-auto",children:JSON.stringify(h,null,2)})]})]}),e.jsxs("div",{className:"flex space-x-4 mt-4 mb-4",children:[e.jsx("button",{onClick:l,className:"px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700",children:"验证 JSON"}),e.jsx("button",{onClick:i,className:"px-4 py-2 bg-gray-600 text-white rounded-md hover:bg-gray-700",children:"重置"})]}),a&&e.jsxs("div",{className:`p-4 rounded-md ${a.valid?"bg-green-100 text-green-800 border border-green-200":"bg-red-100 text-red-800 border border-red-200"}`,children:[e.jsxs("div",{className:"font-medium mb-2",children:["验证结果: ",a.valid?"✅ 通过":"❌ 失败"]}),!a.valid&&e.jsxs("div",{className:"text-sm",children:[e.jsx("div",{className:"font-medium mb-2",children:"错误详情:"}),Object.entries(a.errors).map(([o,x])=>e.jsxs("div",{className:"mb-2",children:[e.jsxs("div",{className:"font-medium",children:[o,":"]}),e.jsx("ul",{className:"ml-4",children:x.map((f,b)=>e.jsxs("li",{children:["• ",f]},b))})]},o))]})]})]})})},k=()=>{const[h]=m.useState(()=>{const i=new p;return i.addRule({field:"username",type:"required"}),i.addRule({field:"username",type:"custom",validator:n=>/^[a-zA-Z0-9_]+$/.test(n)?n.length<3?"用户名长度不能少于3个字符":n.length>20?"用户名长度不能超过20个字符":["admin","root","system"].includes(n.toLowerCase())?"用户名不能使用保留关键字":!0:"用户名只能包含字母、数字和下划线"}),i.addRule({field:"password",type:"required"}),i.addRule({field:"password",type:"custom",validator:n=>n.length<8?"密码长度不能少于8个字符":/(?=.*[a-z])/.test(n)?/(?=.*[A-Z])/.test(n)?/(?=.*\d)/.test(n)?/(?=.*[!@#$%^&*])/.test(n)?!0:"密码必须包含至少一个特殊字符 (!@#$%^&*)":"密码必须包含至少一个数字":"密码必须包含至少一个大写字母":"密码必须包含至少一个小写字母"}),i.addRule({field:"confirmPassword",type:"required"}),i}),[t,s]=m.useState({username:"",password:"",confirmPassword:""}),[r,a]=m.useState(null),d=m.useCallback((i,n)=>{s(o=>({...o,[i]:n}))},[]),c=m.useCallback(()=>{const i=new p;h.rules.forEach(o=>{i.addRule(o)}),i.addRule({field:"confirmPassword",type:"custom",validator:o=>o!==t.password?"两次输入的密码不一致":!0});const n=i.validate(t);a(n)},[h,t]),u=m.useCallback(()=>{s({username:"",password:"",confirmPassword:""}),a(null)},[]),l=m.useMemo(()=>{const{password:i}=t;if(!i)return{level:0,text:"未输入",color:"gray"};let n=0;return i.length>=8&&n++,/(?=.*[a-z])/.test(i)&&n++,/(?=.*[A-Z])/.test(i)&&n++,/(?=.*\d)/.test(i)&&n++,/(?=.*[!@#$%^&*])/.test(i)&&n++,[{level:0,text:"很弱",color:"red"},{level:1,text:"弱",color:"red"},{level:2,text:"一般",color:"yellow"},{level:3,text:"较强",color:"blue"},{level:4,text:"强",color:"green"},{level:5,text:"很强",color:"green"}][n]},[t.password]);return e.jsx("div",{className:"space-y-4",children:e.jsxs("div",{className:"bg-white p-6 rounded-lg border",children:[e.jsx("h3",{className:"text-lg font-semibold mb-4",children:"自定义验证规则"}),e.jsxs("div",{className:"space-y-4 mb-4",children:[e.jsxs("div",{children:[e.jsx("label",{className:"block text-sm font-medium text-gray-700 mb-2",children:"用户名 *"}),e.jsx("input",{type:"text",value:t.username,onChange:i=>d("username",i.target.value),className:`w-full p-2 border rounded-md ${r!=null&&r.errors.username?"border-red-300 bg-red-50":"border-gray-300"}`,placeholder:"3-20个字符，只能包含字母、数字和下划线"}),(r==null?void 0:r.errors.username)&&e.jsx("div",{className:"mt-1 text-sm text-red-600",children:r.errors.username.map((i,n)=>e.jsxs("div",{children:["• ",i]},n))})]}),e.jsxs("div",{children:[e.jsx("label",{className:"block text-sm font-medium text-gray-700 mb-2",children:"密码 *"}),e.jsx("input",{type:"password",value:t.password,onChange:i=>d("password",i.target.value),className:`w-full p-2 border rounded-md ${r!=null&&r.errors.password?"border-red-300 bg-red-50":"border-gray-300"}`,placeholder:"至少8个字符，包含大小写字母、数字和特殊字符"}),t.password&&e.jsx("div",{className:"mt-2",children:e.jsxs("div",{className:"flex items-center space-x-2",children:[e.jsx("span",{className:"text-sm text-gray-600",children:"密码强度:"}),e.jsx("div",{className:"flex-1 bg-gray-200 rounded-full h-2",children:e.jsx("div",{className:`h-2 rounded-full transition-all duration-300 ${l.color==="red"?"bg-red-500":l.color==="yellow"?"bg-yellow-500":l.color==="blue"?"bg-blue-500":l.color==="green"?"bg-green-500":"bg-gray-300"}`,style:{width:`${l.level/5*100}%`}})}),e.jsx("span",{className:`text-sm font-medium ${l.color==="red"?"text-red-600":l.color==="yellow"?"text-yellow-600":l.color==="blue"?"text-blue-600":l.color==="green"?"text-green-600":"text-gray-600"}`,children:l.text})]})}),(r==null?void 0:r.errors.password)&&e.jsx("div",{className:"mt-1 text-sm text-red-600",children:r.errors.password.map((i,n)=>e.jsxs("div",{children:["• ",i]},n))})]}),e.jsxs("div",{children:[e.jsx("label",{className:"block text-sm font-medium text-gray-700 mb-2",children:"确认密码 *"}),e.jsx("input",{type:"password",value:t.confirmPassword,onChange:i=>d("confirmPassword",i.target.value),className:`w-full p-2 border rounded-md ${r!=null&&r.errors.confirmPassword?"border-red-300 bg-red-50":"border-gray-300"}`,placeholder:"请再次输入密码"}),(r==null?void 0:r.errors.confirmPassword)&&e.jsx("div",{className:"mt-1 text-sm text-red-600",children:r.errors.confirmPassword.map((i,n)=>e.jsxs("div",{children:["• ",i]},n))})]})]}),e.jsxs("div",{className:"flex space-x-4 mb-4",children:[e.jsx("button",{onClick:c,className:"px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700",children:"验证数据"}),e.jsx("button",{onClick:u,className:"px-4 py-2 bg-gray-600 text-white rounded-md hover:bg-gray-700",children:"重置"})]}),r&&e.jsxs("div",{className:`p-4 rounded-md ${r.valid?"bg-green-100 text-green-800 border border-green-200":"bg-red-100 text-red-800 border border-red-200"}`,children:[e.jsxs("div",{className:"font-medium mb-2",children:["验证结果: ",r.valid?"✅ 通过":"❌ 失败"]}),!r.valid&&e.jsxs("div",{className:"text-sm",children:[e.jsx("div",{className:"font-medium mb-1",children:"错误详情:"}),Object.entries(r.errors).map(([i,n])=>e.jsxs("div",{className:"mb-1",children:[e.jsxs("span",{className:"font-medium",children:[i,":"]}),e.jsx("ul",{className:"ml-4",children:n.map((o,x)=>e.jsxs("li",{children:["• ",o]},x))})]},i))]})]}),e.jsxs("div",{className:"mt-6 p-4 bg-gray-50 rounded-lg",children:[e.jsx("h4",{className:"font-medium text-gray-900 mb-2",children:"验证规则说明"}),e.jsxs("div",{className:"text-sm text-gray-700 space-y-1",children:[e.jsxs("div",{children:[e.jsx("strong",{children:"用户名:"})," 3-20个字符，只能包含字母、数字和下划线，不能使用保留关键字"]}),e.jsxs("div",{children:[e.jsx("strong",{children:"密码:"})," 至少8个字符，必须包含大小写字母、数字和特殊字符"]}),e.jsxs("div",{children:[e.jsx("strong",{children:"确认密码:"})," 必须与密码一致"]})]})]})]})})},O=()=>{const h={title:"请求验证器实现",language:"typescript",code:`// 请求验证器
class RequestValidator {
  private rules: ValidationRule[];
  private strictMode: boolean;

  constructor(rules: ValidationRule[] = [], strictMode: boolean = false) {
    this.rules = rules;
    this.strictMode = strictMode;
  }

  // 验证数据
  validate(data: any): ValidationResult {
    const errors: Record<string, string[]> = {};
    const warnings: Record<string, string[]> = {};

    // 验证每个规则
    for (const rule of this.rules) {
      const fieldValue = this.getFieldValue(data, rule.field);
      const fieldErrors = this.validateField(fieldValue, rule);
      
      if (fieldErrors.length > 0) {
        errors[rule.field] = fieldErrors;
      }
    }

    return {
      valid: Object.keys(errors).length === 0,
      errors,
      warnings
    };
  }

  // 验证单个字段
  private validateField(value: any, rule: ValidationRule): string[] {
    const errors: string[] = [];

    // 必填验证
    if (rule.type === 'required') {
      if (value === undefined || value === null || value === '') {
        errors.push(rule.message || \`\${rule.field} 是必填字段\`);
        return errors;
      }
    }

    // 类型验证
    switch (rule.type) {
      case 'email':
        if (!this.isValidEmail(value)) {
          errors.push(rule.message || \`\${rule.field} 必须是有效的邮箱地址\`);
        }
        break;
      
      case 'custom':
        if (rule.validator) {
          const result = rule.validator(value);
          if (result !== true) {
            errors.push(typeof result === 'string' ? result : (rule.message || \`\${rule.field} 验证失败\`));
          }
        }
        break;
    }

    return errors;
  }
}`,highlights:[11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45,46,47,48,49,50,51,52,53,54,55,56,57]},t={title:"JSON Schema验证实现",language:"typescript",code:`// JSON Schema验证器
class JSONSchemaValidator {
  private schema: any;

  constructor(schema: any) {
    this.schema = schema;
  }

  // 验证数据
  validate(data: any): ValidationResult {
    const errors: Record<string, string[]> = {};
    
    try {
      this.validateObject(data, this.schema, '', errors);
    } catch (error) {
      this.addError(errors, 'root', (error as Error).message);
    }

    return {
      valid: Object.keys(errors).length === 0,
      errors
    };
  }

  // 验证对象
  private validateObject(data: any, schema: any, path: string, errors: Record<string, string[]>): void {
    if (schema.type === 'object') {
      // 验证必填字段
      if (schema.required) {
        for (const field of schema.required) {
          if (!(field in data)) {
            this.addError(errors, path ? \`\${path}.\${field}\` : field, \`字段 \${field} 是必填的\`);
          }
        }
      }

      // 验证属性
      if (schema.properties) {
        for (const [key, propSchema] of Object.entries(schema.properties)) {
          if (key in data) {
            const fieldPath = path ? \`\${path}.\${key}\` : key;
            this.validateValue(data[key], propSchema, fieldPath, errors);
          }
        }
      }
    }
  }

  // 验证值
  private validateValue(value: any, schema: any, path: string, errors: Record<string, string[]>): void {
    // 类型验证
    if (schema.type) {
      const actualType = Array.isArray(value) ? 'array' : typeof value;
      if (actualType !== schema.type) {
        this.addError(errors, path, \`期望类型 \${schema.type}，实际类型 \${actualType}\`);
        return;
      }
    }

    // 字符串验证
    if (schema.type === 'string') {
      if (schema.minLength && value.length < schema.minLength) {
        this.addError(errors, path, \`最小长度为 \${schema.minLength}\`);
      }
      if (schema.maxLength && value.length > schema.maxLength) {
        this.addError(errors, path, \`最大长度为 \${schema.maxLength}\`);
      }
      if (schema.pattern && !new RegExp(schema.pattern).test(value)) {
        this.addError(errors, path, \`格式不正确\`);
      }
    }

    // 数字验证
    if (schema.type === 'number') {
      if (schema.minimum !== undefined && value < schema.minimum) {
        this.addError(errors, path, \`最小值为 \${schema.minimum}\`);
      }
      if (schema.maximum !== undefined && value > schema.maximum) {
        this.addError(errors, path, \`最大值为 \${schema.maximum}\`);
      }
    }

    // 对象验证
    if (schema.type === 'object') {
      this.validateObject(value, schema, path, errors);
    }

    // 数组验证
    if (schema.type === 'array') {
      if (schema.items) {
        value.forEach((item: any, index: number) => {
          this.validateValue(item, schema.items, \`\${path}[\${index}]\`, errors);
        });
      }
    }
  }

  // 添加错误
  private addError(errors: Record<string, string[]>, path: string, message: string): void {
    if (!errors[path]) {
      errors[path] = [];
    }
    errors[path].push(message);
  }
}`,highlights:[9,10,11,12,13,14,15,16,17,18,19,20,21,22,25,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45,46,47,48,49,50,51,52,53,54,55,56,57,58,59,60,61,62,63,64,65,66,67,68,69,70,71,72,73,74,75,76,77,78,79,80,81,82,83,84,85,86,87,88,89,90,91]},s={title:"自定义验证规则实现",language:"typescript",code:`// 自定义验证器集合
class CustomValidators {
  // 用户名验证器
  static validateUsername(username: string): boolean | string {
    if (!username || username.length < 3) {
      return '用户名至少需要3个字符';
    }
    if (username.length > 20) {
      return '用户名不能超过20个字符';
    }
    if (!/^[a-zA-Z0-9_]+$/.test(username)) {
      return '用户名只能包含字母、数字和下划线';
    }
    if (/^\\d/.test(username)) {
      return '用户名不能以数字开头';
    }
    return true;
  }

  // 密码强度验证器
  static validatePasswordStrength(password: string): {
    valid: boolean;
    strength: 'weak' | 'medium' | 'strong';
    score: number;
    feedback: string[];
  } {
    const feedback: string[] = [];
    let score = 0;

    if (!password) {
      return {
        valid: false,
        strength: 'weak',
        score: 0,
        feedback: ['密码不能为空']
      };
    }

    // 长度检查
    if (password.length >= 8) {
      score += 2;
    } else {
      feedback.push('密码至少需要8个字符');
    }

    // 包含小写字母
    if (/[a-z]/.test(password)) {
      score += 1;
    } else {
      feedback.push('需要包含小写字母');
    }

    // 包含大写字母
    if (/[A-Z]/.test(password)) {
      score += 1;
    } else {
      feedback.push('需要包含大写字母');
    }

    // 包含数字
    if (/\\d/.test(password)) {
      score += 1;
    } else {
      feedback.push('需要包含数字');
    }

    // 包含特殊字符
    if (/[!@#$%^&*(),.?":{}|<>]/.test(password)) {
      score += 2;
    } else {
      feedback.push('建议包含特殊字符');
    }

    // 长度奖励
    if (password.length >= 12) {
      score += 1;
    }

    let strength: 'weak' | 'medium' | 'strong';
    if (score >= 6) {
      strength = 'strong';
    } else if (score >= 4) {
      strength = 'medium';
    } else {
      strength = 'weak';
    }

    return {
      valid: score >= 4,
      strength,
      score,
      feedback: feedback.length > 0 ? feedback : ['密码强度良好']
    };
  }

  // 确认密码验证器
  static validatePasswordConfirm(password: string, confirmPassword: string): boolean | string {
    if (!confirmPassword) {
      return '请确认密码';
    }
    if (password !== confirmPassword) {
      return '两次输入的密码不一致';
    }
    return true;
  }

  // 业务规则验证器
  static validateBusinessRule(data: any): boolean | string {
    // 示例：订单金额验证
    if (data.type === 'order' && data.amount) {
      if (data.amount <= 0) {
        return '订单金额必须大于0';
      }
      if (data.amount > 100000) {
        return '单笔订单金额不能超过10万元';
      }
      // VIP用户可以享受更高限额
      if (!data.isVip && data.amount > 50000) {
        return '普通用户单笔订单金额不能超过5万元';
      }
    }
    return true;
  }
}`,highlights:[4,5,6,7,8,9,10,11,12,13,14,15,16,17,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45,46,47,48,49,50,51,52,53,54,55,56,57,58,59,60,61,62,63,64,65,66,67,68,69,70,71,72,73,74,75,76,77,78,79,80,81,82,83,84,85,86,87,88,89,90,91,92,93,94,95,96,97,98,99,100,101,102,103,104,105,106,107,108,109,110]};return e.jsx(v,{title:"请求数据验证",description:"实现全面的数据验证机制，包括基础字段验证、JSON Schema验证和自定义验证规则。",overview:e.jsxs("div",{className:"space-y-4",children:[e.jsxs("div",{className:"bg-blue-50 p-6 rounded-lg",children:[e.jsx("h3",{className:"text-lg font-semibold text-blue-900 mb-3",children:"🔍 核心概念"}),e.jsxs("ul",{className:"space-y-2 text-blue-800",children:[e.jsxs("li",{children:[e.jsx("strong",{children:"字段验证:"})," 验证单个字段的类型、格式和约束条件"]}),e.jsxs("li",{children:[e.jsx("strong",{children:"JSON Schema:"})," 使用标准化的Schema定义验证复杂数据结构"]}),e.jsxs("li",{children:[e.jsx("strong",{children:"自定义验证:"})," 实现业务特定的验证逻辑和规则"]}),e.jsxs("li",{children:[e.jsx("strong",{children:"验证链:"})," 组合多个验证规则形成完整的验证流程"]})]})]}),e.jsxs("div",{className:"bg-green-50 p-6 rounded-lg",children:[e.jsx("h3",{className:"text-lg font-semibold text-green-900 mb-3",children:"✨ 主要优势"}),e.jsxs("ul",{className:"space-y-2 text-green-800",children:[e.jsxs("li",{children:[e.jsx("strong",{children:"数据质量:"})," 确保输入数据的正确性和完整性"]}),e.jsxs("li",{children:[e.jsx("strong",{children:"安全防护:"})," 防止恶意数据和注入攻击"]}),e.jsxs("li",{children:[e.jsx("strong",{children:"用户体验:"})," 提供即时的错误反馈和指导"]}),e.jsxs("li",{children:[e.jsx("strong",{children:"系统稳定:"})," 减少因数据错误导致的系统异常"]})]})]}),e.jsxs("div",{className:"bg-yellow-50 p-6 rounded-lg",children:[e.jsx("h3",{className:"text-lg font-semibold text-yellow-900 mb-3",children:"🎯 适用场景"}),e.jsxs("ul",{className:"space-y-2 text-yellow-800",children:[e.jsxs("li",{children:[e.jsx("strong",{children:"表单提交:"})," 验证用户输入的表单数据"]}),e.jsxs("li",{children:[e.jsx("strong",{children:"API接口:"})," 验证请求参数和数据格式"]}),e.jsxs("li",{children:[e.jsx("strong",{children:"数据导入:"})," 验证批量导入的数据质量"]}),e.jsxs("li",{children:[e.jsx("strong",{children:"配置管理:"})," 验证系统配置的正确性"]})]})]}),e.jsxs("div",{className:"bg-red-50 p-6 rounded-lg",children:[e.jsx("h3",{className:"text-lg font-semibold text-red-900 mb-3",children:"⚠️ 注意事项"}),e.jsxs("ul",{className:"space-y-2 text-red-800",children:[e.jsxs("li",{children:[e.jsx("strong",{children:"性能影响:"})," 复杂验证可能影响响应速度"]}),e.jsxs("li",{children:[e.jsx("strong",{children:"错误信息:"})," 提供清晰易懂的错误提示"]}),e.jsxs("li",{children:[e.jsx("strong",{children:"验证时机:"})," 选择合适的验证触发时机"]}),e.jsxs("li",{children:[e.jsx("strong",{children:"国际化:"})," 考虑多语言环境下的验证规则"]})]})]})]}),examples:[{title:"基础字段验证",component:e.jsx(w,{}),description:"演示常见字段类型的验证，包括必填、邮箱、手机号和数字验证。",observationPoints:["输入不同类型的数据，观察相应的验证错误信息","必填字段为空时会显示相应的错误提示","邮箱和手机号会进行格式验证","数字字段会检查类型和范围限制"],keyPoints:["验证规则可以组合使用，如必填+格式验证","每个字段可以有多个验证错误","验证器支持自定义错误消息","验证结果包含详细的错误信息"],commonTraps:["忘记处理空值和undefined的情况","验证规则过于严格影响用户体验","错误消息不够清晰和友好","没有考虑不同数据类型的转换"],solutions:["在验证前进行适当的数据类型转换","提供清晰的验证规则说明","使用友好的错误消息和建议","支持渐进式验证，避免一次显示所有错误"],codeExample:h},{title:"JSON Schema 验证",component:e.jsx($,{}),description:"使用JSON Schema标准验证复杂的嵌套数据结构。",observationPoints:["尝试不同的示例数据，观察Schema验证的效果","嵌套对象和数组都会被递归验证","Schema定义了数据的结构和约束条件","验证错误会精确定位到具体的字段路径"],keyPoints:["JSON Schema是标准化的数据验证方案","支持复杂的嵌套结构验证","可以定义详细的约束条件","验证结果包含完整的错误路径"],importantTips:["Schema设计要考虑数据的实际使用场景","合理使用required字段，避免过度约束","为复杂Schema提供清晰的文档说明","考虑Schema的版本管理和兼容性"],codeExample:t},{title:"自定义验证规则",component:e.jsx(k,{}),description:"实现业务特定的自定义验证逻辑，如密码强度和用户名规则。",observationPoints:["用户名验证包含多个自定义规则","密码强度会实时显示并动态更新","确认密码验证依赖于密码字段的值","自定义验证器可以返回具体的错误信息"],keyPoints:["自定义验证器提供最大的灵活性","可以实现复杂的业务逻辑验证","支持字段间的关联验证","验证器可以返回布尔值或错误消息"],commonTraps:["自定义验证逻辑过于复杂影响性能","没有考虑边界情况和异常处理","验证规则与业务逻辑耦合过紧","缺乏对验证规则的测试覆盖"],solutions:["保持验证逻辑的简单和高效","充分测试各种边界情况","将验证规则抽象为可复用的函数","建立完善的验证规则测试套件"],codeExample:s}],tutorial:{concepts:["数据验证是确保系统数据质量和安全性的重要手段","验证应该在数据进入系统的各个入口点进行","客户端验证提升用户体验，服务端验证确保数据安全","验证规则应该与业务需求保持一致","良好的错误提示可以显著改善用户体验"],steps:["分析数据结构和业务需求","设计验证规则和约束条件","选择合适的验证方案（基础验证、Schema验证或自定义验证）","实现验证逻辑和错误处理","集成到数据处理流程中","设计友好的错误提示界面","编写验证规则的测试用例","优化验证性能和用户体验","建立验证规则的文档和维护机制"],tips:["使用渐进式验证，避免一次显示过多错误","提供实时验证反馈，提升用户体验","验证错误消息要具体、友好且可操作","考虑国际化需求，支持多语言错误消息","建立验证规则的复用机制，避免重复代码","定期审查和更新验证规则，适应业务变化"]},interview:{questions:[{question:"客户端验证和服务端验证的区别是什么？",answer:"客户端验证主要用于提升用户体验，提供即时反馈，但不能保证安全性；服务端验证是安全的最后防线，必须进行完整的数据验证。两者应该结合使用：客户端验证提升体验，服务端验证确保安全。"},{question:"如何设计一个高效的验证系统？",answer:"高效验证系统的设计要点：1) 分层验证：基础类型验证、业务规则验证、安全验证；2) 规则复用：抽象通用验证规则；3) 性能优化：避免重复验证、使用缓存；4) 错误处理：提供清晰的错误信息和建议；5) 可扩展性：支持自定义验证规则。"},{question:"JSON Schema相比自定义验证有什么优势？",answer:"JSON Schema优势：1) 标准化：遵循JSON Schema标准，兼容性好；2) 声明式：通过配置而非代码定义验证规则；3) 工具支持：有丰富的工具和库支持；4) 文档化：Schema本身就是数据结构的文档；5) 跨语言：可以在不同编程语言间共享。缺点是灵活性不如自定义验证。"},{question:"如何处理复杂的字段关联验证？",answer:"复杂关联验证的处理方法：1) 延迟验证：在所有相关字段输入完成后进行验证；2) 上下文传递：将整个数据对象传递给验证器；3) 验证链：建立字段间的依赖关系；4) 条件验证：根据其他字段的值决定验证规则；5) 分组验证：将相关字段分组进行批量验证。"}],keyPoints:["数据验证是系统安全和稳定性的重要保障","客户端和服务端验证各有作用，需要结合使用","验证规则应该与业务需求保持一致","良好的错误提示可以显著改善用户体验","JSON Schema适合标准化的数据验证","自定义验证提供最大的灵活性","验证性能和用户体验需要平衡考虑"]},bestPractices:{dos:["在数据进入系统的所有入口进行验证","提供清晰、友好的错误提示信息","使用渐进式验证，避免信息过载","建立验证规则的复用机制","对验证逻辑进行充分的测试","考虑国际化和本地化需求","定期审查和更新验证规则","平衡验证严格性和用户体验"],donts:["不要仅依赖客户端验证","不要忽视验证性能的影响","不要使用过于严格的验证规则","不要提供模糊或无用的错误信息","不要忽视边界情况和异常处理","不要让验证逻辑与业务逻辑过度耦合","不要忘记验证规则的文档化","不要忽视验证规则的维护和更新"],patterns:["分层验证模式：基础验证、业务验证、安全验证","规则链模式：将多个验证规则串联执行","策略模式：根据不同场景选择不同的验证策略","装饰器模式：为基础验证器添加额外的验证功能","观察者模式：验证状态变化时通知相关组件","工厂模式：根据配置动态创建验证器实例","组合模式：将多个简单验证器组合成复杂验证器"]}})};export{O as default};
