import{r as l,j as e}from"./index-DPG_OKoV.js";import{C as G}from"./ComponentTemplate-HXLvd6Xe.js";const K=u=>{const{initialValues:p,validate:m,onSubmit:r}=u,[o,t]=l.useState(p),[n,w]=l.useState({}),[x,j]=l.useState({}),[y,s]=l.useState(!1),d=l.useCallback((b,h)=>{t(v=>({...v,[b]:h})),n[b]&&w(v=>({...v,[b]:void 0}))},[n]),a=l.useCallback((b,h=!0)=>{j(v=>({...v,[b]:h}))},[]),f=l.useCallback(b=>h=>{const v=h.target.type==="checkbox"?h.target.checked:h.target.value;d(b,v)},[d]),N=l.useCallback(b=>()=>{if(a(b,!0),m){const h=m(o);h[b]&&w(v=>({...v,[b]:h[b]}))}},[m,o,a]),F=l.useCallback(()=>{if(!m)return!0;const b=m(o);w(b);const h=Object.keys(o).reduce((v,k)=>(v[k]=!0,v),{});return j(h),Object.keys(b).length===0},[m,o]),S=l.useCallback(async b=>{if(b&&b.preventDefault(),!!F()&&r){s(!0);try{await r(o)}catch(h){console.error("Form submission error:",h)}finally{s(!1)}}},[F,r,o]),T=l.useCallback(()=>{t(p),w({}),j({}),s(!1)},[p]),C=l.useMemo(()=>Object.keys(n).length===0,[n]);return{values:o,errors:n,touched:x,isSubmitting:y,isValid:C,setValue:d,setFieldTouched:a,handleChange:f,handleBlur:N,handleSubmit:S,reset:T,validateForm:F}},E=u=>{const{initialValues:p,validate:m,onSubmit:r,validateOnChange:o=!1,validateOnBlur:t=!0,resetOnSubmit:n=!1,enableReinitialize:w=!1}=u,[x,j]=l.useState(p),[y,s]=l.useState({}),[d,a]=l.useState({}),[f,N]=l.useState(!1),[F,S]=l.useState(0),[T,C]=l.useState(!1),[b,h]=l.useState({}),v=l.useCallback(i=>{w&&(j(i),s({}),a({}))},[w]),k=l.useCallback((i,g)=>{if(j(c=>({...c,[i]:g})),o&&m){const c=m({...x,[i]:g});s(P=>({...P,[i]:c[i]}))}else y[i]&&s(c=>({...c,[i]:void 0}))},[y,m,o,x]),$=l.useCallback((i,g=!0)=>{a(c=>({...c,[i]:g}))},[]),M=l.useCallback((i,g)=>{s(c=>({...c,[i]:g}))},[]),D=l.useCallback(i=>g=>{const c=g.target.type==="checkbox"?g.target.checked:g.target.value;k(i,c)},[k]),B=l.useCallback(i=>()=>{if($(i,!0),t&&m){const g=m(x);g[i]&&s(c=>({...c,[i]:g[i]}))}},[m,x,$,t]),R=l.useCallback(async()=>{if(!m)return!0;C(!0);try{const i=m(x);s(i);const g=Object.keys(x).reduce((c,P)=>(c[P]=!0,c),{});return a(g),Object.keys(i).length===0}finally{C(!1)}},[m,x]),H=l.useCallback(async i=>{if(i&&i.preventDefault(),S(c=>c+1),!!await R()&&r){N(!0);try{await r(x),n&&O()}catch(c){console.error("Form submission error:",c)}finally{N(!1)}}},[R,r,x,n]),O=l.useCallback(()=>{j(p),s({}),a({}),N(!1),S(0)},[p]),I=l.useMemo(()=>Object.keys(y).length===0,[y]),z=l.useMemo(()=>JSON.stringify(x)!==JSON.stringify(p),[x,p]),_=l.useCallback(i=>{const g=d[i]&&y[i]?y[i]:void 0,c=d[i]||!1,P=x[i],U=D(i),J=B(i),A={name:i,onChange:U,onBlur:J,onFocus:()=>{h(q=>{var Z;return{...q,[i]:{visitCount:(((Z=q[i])==null?void 0:Z.visitCount)||0)+1}}})}};typeof P=="boolean"?A.checked=!!P:A.value=P??"";const V={...A};return Object.defineProperty(V,"error",{value:g,enumerable:!1,configurable:!0,writable:!1}),Object.defineProperty(V,"touched",{value:c,enumerable:!1,configurable:!0,writable:!1}),V},[x,D,B,d,y]);return{values:x,errors:y,touched:d,isSubmitting:f,isValid:I,isDirty:z,submitCount:F,isValidating:T,fieldMeta:b,setValue:k,setFieldTouched:$,setFieldError:M,handleChange:D,handleBlur:B,handleSubmit:H,reset:O,validateForm:R,reinitialize:v,getFieldProps:_}},L=()=>{const[u,p]=l.useState(""),r=E({initialValues:{firstName:"",lastName:"",email:"",phone:"",country:"",bio:"",newsletter:!1},validate:t=>{const n={};return t.firstName||(n.firstName="名字不能为空"),t.lastName||(n.lastName="姓氏不能为空"),t.email?/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(t.email)||(n.email="邮箱格式不正确"):n.email="邮箱不能为空",t.phone&&!/^\d{10,11}$/.test(t.phone.replace(/\D/g,""))&&(n.phone="手机号格式不正确"),t.country||(n.country="请选择国家"),t.bio&&t.bio.length>200&&(n.bio="个人简介不能超过200个字符"),n},validateOnChange:!0,validateOnBlur:!0,resetOnSubmit:!1,onSubmit:async t=>{await new Promise(n=>setTimeout(n,1500)),p(`高级表单提交成功！姓名: ${t.firstName} ${t.lastName}`)}}),o=[{value:"",label:"请选择国家"},{value:"cn",label:"中国"},{value:"us",label:"美国"},{value:"jp",label:"日本"},{value:"kr",label:"韩国"},{value:"uk",label:"英国"}];return e.jsxs("div",{className:"space-y-6",children:[e.jsxs("div",{className:"bg-white p-6 rounded-lg border border-gray-200",children:[e.jsx("h3",{className:"text-lg font-semibold mb-4",children:"个人信息表单 (实时验证)"}),e.jsxs("form",{onSubmit:r.handleSubmit,className:"space-y-4",children:[e.jsxs("div",{className:"grid grid-cols-2 gap-4",children:[e.jsxs("div",{children:[e.jsx("label",{className:"block text-sm font-medium text-gray-700 mb-1",children:"名字 *"}),e.jsx("input",{...r.getFieldProps("firstName"),type:"text",className:`w-full px-3 py-2 border rounded focus:outline-none focus:ring-2 ${r.getFieldProps("firstName").error?"border-red-500 focus:ring-red-500":"border-gray-300 focus:ring-blue-500"}`,placeholder:"请输入名字"}),r.getFieldProps("firstName").error&&e.jsx("div",{className:"text-red-500 text-sm mt-1",children:r.getFieldProps("firstName").error})]}),e.jsxs("div",{children:[e.jsx("label",{className:"block text-sm font-medium text-gray-700 mb-1",children:"姓氏 *"}),e.jsx("input",{...r.getFieldProps("lastName"),type:"text",className:`w-full px-3 py-2 border rounded focus:outline-none focus:ring-2 ${r.getFieldProps("lastName").error?"border-red-500 focus:ring-red-500":"border-gray-300 focus:ring-blue-500"}`,placeholder:"请输入姓氏"}),r.getFieldProps("lastName").error&&e.jsx("div",{className:"text-red-500 text-sm mt-1",children:r.getFieldProps("lastName").error})]})]}),e.jsxs("div",{className:"grid grid-cols-2 gap-4",children:[e.jsxs("div",{children:[e.jsx("label",{className:"block text-sm font-medium text-gray-700 mb-1",children:"邮箱 *"}),e.jsx("input",{...r.getFieldProps("email"),type:"email",className:`w-full px-3 py-2 border rounded focus:outline-none focus:ring-2 ${r.getFieldProps("email").error?"border-red-500 focus:ring-red-500":"border-gray-300 focus:ring-blue-500"}`,placeholder:"请输入邮箱"}),r.getFieldProps("email").error&&e.jsx("div",{className:"text-red-500 text-sm mt-1",children:r.getFieldProps("email").error})]}),e.jsxs("div",{children:[e.jsx("label",{className:"block text-sm font-medium text-gray-700 mb-1",children:"手机号"}),e.jsx("input",{...r.getFieldProps("phone"),type:"tel",className:`w-full px-3 py-2 border rounded focus:outline-none focus:ring-2 ${r.getFieldProps("phone").error?"border-red-500 focus:ring-red-500":"border-gray-300 focus:ring-blue-500"}`,placeholder:"请输入手机号"}),r.getFieldProps("phone").error&&e.jsx("div",{className:"text-red-500 text-sm mt-1",children:r.getFieldProps("phone").error})]})]}),e.jsxs("div",{children:[e.jsx("label",{className:"block text-sm font-medium text-gray-700 mb-1",children:"国家 *"}),e.jsx("select",{...r.getFieldProps("country"),className:`w-full px-3 py-2 border rounded focus:outline-none focus:ring-2 ${r.getFieldProps("country").error?"border-red-500 focus:ring-red-500":"border-gray-300 focus:ring-blue-500"}`,children:o.map(t=>e.jsx("option",{value:t.value,children:t.label},t.value))}),r.getFieldProps("country").error&&e.jsx("div",{className:"text-red-500 text-sm mt-1",children:r.getFieldProps("country").error})]}),e.jsxs("div",{children:[e.jsxs("label",{className:"block text-sm font-medium text-gray-700 mb-1",children:["个人简介 (",r.values.bio.length,"/200)"]}),e.jsx("textarea",{...r.getFieldProps("bio"),rows:4,className:`w-full px-3 py-2 border rounded focus:outline-none focus:ring-2 ${r.getFieldProps("bio").error?"border-red-500 focus:ring-red-500":"border-gray-300 focus:ring-blue-500"}`,placeholder:"请输入个人简介..."}),r.getFieldProps("bio").error&&e.jsx("div",{className:"text-red-500 text-sm mt-1",children:r.getFieldProps("bio").error})]}),e.jsx("div",{children:e.jsxs("label",{className:"flex items-center",children:[e.jsx("input",{...r.getFieldProps("newsletter"),type:"checkbox",className:"mr-2 w-4 h-4 text-blue-600 rounded focus:ring-blue-500"}),e.jsx("span",{className:"text-sm text-gray-700",children:"订阅我们的新闻通讯"})]})}),e.jsxs("div",{className:"grid grid-cols-4 gap-4 p-3 bg-gray-50 rounded",children:[e.jsxs("div",{className:"text-center",children:[e.jsx("div",{className:"text-xs text-gray-500",children:"表单状态"}),e.jsx("div",{className:`text-sm font-medium ${r.isValid?"text-green-600":"text-red-600"}`,children:r.isValid?"有效":"无效"})]}),e.jsxs("div",{className:"text-center",children:[e.jsx("div",{className:"text-xs text-gray-500",children:"是否修改"}),e.jsx("div",{className:`text-sm font-medium ${r.isDirty?"text-blue-600":"text-gray-600"}`,children:r.isDirty?"已修改":"未修改"})]}),e.jsxs("div",{className:"text-center",children:[e.jsx("div",{className:"text-xs text-gray-500",children:"提交次数"}),e.jsx("div",{className:"text-sm font-medium text-purple-600",children:r.submitCount})]}),e.jsxs("div",{className:"text-center",children:[e.jsx("div",{className:"text-xs text-gray-500",children:"提交状态"}),e.jsx("div",{className:`text-sm font-medium ${r.isSubmitting?"text-yellow-600":"text-gray-600"}`,children:r.isSubmitting?"提交中":"就绪"})]})]}),e.jsxs("div",{className:"bg-blue-50 p-3 rounded border border-blue-200",children:[e.jsx("div",{className:"text-sm font-medium text-blue-800 mb-2",children:"字段访问统计："}),e.jsx("div",{className:"grid grid-cols-3 gap-2 text-xs",children:Object.entries(r.fieldMeta).map(([t,n])=>e.jsxs("div",{className:"text-blue-700",children:[t,": ",n.visitCount,"次"]},t))})]}),e.jsxs("div",{className:"flex space-x-2",children:[e.jsx("button",{type:"submit",disabled:r.isSubmitting,className:"flex-1 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 disabled:bg-gray-300 disabled:cursor-not-allowed",children:r.isSubmitting?"提交中...":"提交"}),e.jsx("button",{type:"button",onClick:r.reset,className:"px-4 py-2 bg-gray-500 text-white rounded hover:bg-gray-600",children:"重置"})]})]}),u&&e.jsx("div",{className:"mt-4 p-3 bg-green-50 border border-green-200 rounded",children:e.jsx("div",{className:"text-green-800",children:u})})]}),e.jsxs("div",{className:"bg-gray-50 p-4 rounded-lg",children:[e.jsx("h4",{className:"font-medium text-gray-800 mb-2",children:"高级功能"}),e.jsxs("div",{className:"text-sm text-gray-600 space-y-1",children:[e.jsxs("p",{children:["• ",e.jsx("strong",{children:"实时验证"}),"：validateOnChange 启用输入时验证"]}),e.jsxs("p",{children:["• ",e.jsx("strong",{children:"失焦验证"}),"：validateOnBlur 启用失焦时验证"]}),e.jsxs("p",{children:["• ",e.jsx("strong",{children:"字段属性"}),"：getFieldProps 简化字段绑定"]}),e.jsxs("p",{children:["• ",e.jsx("strong",{children:"访问统计"}),"：fieldMeta 记录字段访问次数"]}),e.jsxs("p",{children:["• ",e.jsx("strong",{children:"提交统计"}),"：submitCount 记录提交次数"]})]})]})]})},Q=`import React, { useState } from 'react';
import { useAdvancedForm } from './useFormHook';

interface AdvancedFormData {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  country: string;
  bio: string;
  newsletter: boolean;
}

const AdvancedFormDemo: React.FC = () => {
  const [submitResult, setSubmitResult] = useState<string>('');

  const validateAdvancedForm = (values: AdvancedFormData) => {
    const errors: Partial<Record<keyof AdvancedFormData, string>> = {};
    
    if (!values.firstName) {
      errors.firstName = '名字不能为空';
    }
    
    if (!values.lastName) {
      errors.lastName = '姓氏不能为空';
    }
    
    if (!values.email) {
      errors.email = '邮箱不能为空';
    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\\.[A-Z]{2,}$/i.test(values.email)) {
      errors.email = '邮箱格式不正确';
    }
    
    if (values.phone && !/^\\d{10,11}$/.test(values.phone.replace(/\\D/g, ''))) {
      errors.phone = '手机号格式不正确';
    }
    
    if (!values.country) {
      errors.country = '请选择国家';
    }
    
    if (values.bio && values.bio.length > 200) {
      errors.bio = '个人简介不能超过200个字符';
    }
    
    return errors;
  };

  const form = useAdvancedForm<AdvancedFormData>({
    initialValues: {
      firstName: '',
      lastName: '',
      email: '',
      phone: '',
      country: '',
      bio: '',
      newsletter: false
    },
    validate: validateAdvancedForm,
    validateOnChange: true,
    validateOnBlur: true,
    resetOnSubmit: false,
    onSubmit: async (values) => {
      await new Promise(resolve => setTimeout(resolve, 1500));
      setSubmitResult(\`高级表单提交成功！姓名: \${values.firstName} \${values.lastName}\`);
    }
  });

  const countries = [
    { value: '', label: '请选择国家' },
    { value: 'cn', label: '中国' },
    { value: 'us', label: '美国' },
    { value: 'jp', label: '日本' },
    { value: 'kr', label: '韩国' },
    { value: 'uk', label: '英国' }
  ];

  return (
    <div className="space-y-6">
      <div className="bg-white p-6 rounded-lg border border-gray-200">
        <h3 className="text-lg font-semibold mb-4">个人信息表单 (实时验证)</h3>
        
        <form onSubmit={form.handleSubmit} className="space-y-4">
          {/* 姓名 */}
          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                名字 *
              </label>
              <input
                {...form.getFieldProps('firstName')}
                type="text"
                className={\`w-full px-3 py-2 border rounded focus:outline-none focus:ring-2 \${
                  form.getFieldProps('firstName').error
                    ? 'border-red-500 focus:ring-red-500'
                    : 'border-gray-300 focus:ring-blue-500'
                }\`}
                placeholder="请输入名字"
              />
              {form.getFieldProps('firstName').error && (
                <div className="text-red-500 text-sm mt-1">
                  {form.getFieldProps('firstName').error}
                </div>
              )}
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                姓氏 *
              </label>
              <input
                {...form.getFieldProps('lastName')}
                type="text"
                className={\`w-full px-3 py-2 border rounded focus:outline-none focus:ring-2 \${
                  form.getFieldProps('lastName').error
                    ? 'border-red-500 focus:ring-red-500'
                    : 'border-gray-300 focus:ring-blue-500'
                }\`}
                placeholder="请输入姓氏"
              />
              {form.getFieldProps('lastName').error && (
                <div className="text-red-500 text-sm mt-1">
                  {form.getFieldProps('lastName').error}
                </div>
              )}
            </div>
          </div>

          {/* 联系信息 */}
          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                邮箱 *
              </label>
              <input
                {...form.getFieldProps('email')}
                type="email"
                className={\`w-full px-3 py-2 border rounded focus:outline-none focus:ring-2 \${
                  form.getFieldProps('email').error
                    ? 'border-red-500 focus:ring-red-500'
                    : 'border-gray-300 focus:ring-blue-500'
                }\`}
                placeholder="请输入邮箱"
              />
              {form.getFieldProps('email').error && (
                <div className="text-red-500 text-sm mt-1">
                  {form.getFieldProps('email').error}
                </div>
              )}
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                手机号
              </label>
              <input
                {...form.getFieldProps('phone')}
                type="tel"
                className={\`w-full px-3 py-2 border rounded focus:outline-none focus:ring-2 \${
                  form.getFieldProps('phone').error
                    ? 'border-red-500 focus:ring-red-500'
                    : 'border-gray-300 focus:ring-blue-500'
                }\`}
                placeholder="请输入手机号"
              />
              {form.getFieldProps('phone').error && (
                <div className="text-red-500 text-sm mt-1">
                  {form.getFieldProps('phone').error}
                </div>
              )}
            </div>
          </div>

          {/* 国家选择 */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              国家 *
            </label>
            <select
              {...form.getFieldProps('country')}
              className={\`w-full px-3 py-2 border rounded focus:outline-none focus:ring-2 \${
                form.getFieldProps('country').error
                  ? 'border-red-500 focus:ring-red-500'
                  : 'border-gray-300 focus:ring-blue-500'
              }\`}
            >
              {countries.map(country => (
                <option key={country.value} value={country.value}>
                  {country.label}
                </option>
              ))}
            </select>
            {form.getFieldProps('country').error && (
              <div className="text-red-500 text-sm mt-1">
                {form.getFieldProps('country').error}
              </div>
            )}
          </div>

          {/* 个人简介 */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              个人简介 ({form.values.bio.length}/200)
            </label>
            <textarea
              {...form.getFieldProps('bio')}
              rows={4}
              className={\`w-full px-3 py-2 border rounded focus:outline-none focus:ring-2 \${
                form.getFieldProps('bio').error
                  ? 'border-red-500 focus:ring-red-500'
                  : 'border-gray-300 focus:ring-blue-500'
              }\`}
              placeholder="请输入个人简介..."
            />
            {form.getFieldProps('bio').error && (
              <div className="text-red-500 text-sm mt-1">
                {form.getFieldProps('bio').error}
              </div>
            )}
          </div>

          {/* 订阅选项 */}
          <div>
            <label className="flex items-center">
              <input
                {...form.getFieldProps('newsletter')}
                type="checkbox"
                className="mr-2 w-4 h-4 text-blue-600 rounded focus:ring-blue-500"
              />
              <span className="text-sm text-gray-700">
                订阅我们的新闻通讯
              </span>
            </label>
          </div>

          {/* 表单统计 */}
          <div className="grid grid-cols-4 gap-4 p-3 bg-gray-50 rounded">
            <div className="text-center">
              <div className="text-xs text-gray-500">表单状态</div>
              <div className={\`text-sm font-medium \${
                form.isValid ? 'text-green-600' : 'text-red-600'
              }\`}>
                {form.isValid ? '有效' : '无效'}
              </div>
            </div>
            <div className="text-center">
              <div className="text-xs text-gray-500">是否修改</div>
              <div className={\`text-sm font-medium \${
                form.isDirty ? 'text-blue-600' : 'text-gray-600'
              }\`}>
                {form.isDirty ? '已修改' : '未修改'}
              </div>
            </div>
            <div className="text-center">
              <div className="text-xs text-gray-500">提交次数</div>
              <div className="text-sm font-medium text-purple-600">
                {form.submitCount}
              </div>
            </div>
            <div className="text-center">
              <div className="text-xs text-gray-500">提交状态</div>
              <div className={\`text-sm font-medium \${
                form.isSubmitting ? 'text-yellow-600' : 'text-gray-600'
              }\`}>
                {form.isSubmitting ? '提交中' : '就绪'}
              </div>
            </div>
          </div>

          {/* 字段访问统计 */}
          <div className="bg-blue-50 p-3 rounded border border-blue-200">
            <div className="text-sm font-medium text-blue-800 mb-2">字段访问统计：</div>
            <div className="grid grid-cols-3 gap-2 text-xs">
              {Object.entries(form.fieldMeta).map(([field, meta]) => (
                <div key={field} className="text-blue-700">
                  {field}: {meta.visitCount}次
                </div>
              ))}
            </div>
          </div>

          {/* 提交按钮 */}
          <div className="flex space-x-2">
            <button
              type="submit"
              disabled={form.isSubmitting}
              className="flex-1 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 disabled:bg-gray-300 disabled:cursor-not-allowed"
            >
              {form.isSubmitting ? '提交中...' : '提交'}
            </button>
            <button
              type="button"
              onClick={form.reset}
              className="px-4 py-2 bg-gray-500 text-white rounded hover:bg-gray-600"
            >
              重置
            </button>
          </div>
        </form>

        {/* 提交结果 */}
        {submitResult && (
          <div className="mt-4 p-3 bg-green-50 border border-green-200 rounded">
            <div className="text-green-800">{submitResult}</div>
          </div>
        )}
      </div>

      <div className="bg-gray-50 p-4 rounded-lg">
        <h4 className="font-medium text-gray-800 mb-2">高级功能</h4>
        <div className="text-sm text-gray-600 space-y-1">
          <p>• <strong>实时验证</strong>：validateOnChange 启用输入时验证</p>
          <p>• <strong>失焦验证</strong>：validateOnBlur 启用失焦时验证</p>
          <p>• <strong>字段属性</strong>：getFieldProps 简化字段绑定</p>
          <p>• <strong>访问统计</strong>：fieldMeta 记录字段访问次数</p>
          <p>• <strong>提交统计</strong>：submitCount 记录提交次数</p>
        </div>
      </div>
    </div>
  );
};

export default AdvancedFormDemo;`,W=()=>{const[u,p]=l.useState(""),r=K({initialValues:{username:"",email:"",password:"",confirmPassword:"",agreeToTerms:!1},validate:o=>{const t={};return o.username?o.username.length<3&&(t.username="用户名至少需要3个字符"):t.username="用户名不能为空",o.email?/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(o.email)||(t.email="邮箱格式不正确"):t.email="邮箱不能为空",o.password?o.password.length<6&&(t.password="密码至少需要6个字符"):t.password="密码不能为空",o.confirmPassword?o.password!==o.confirmPassword&&(t.confirmPassword="两次输入的密码不一致"):t.confirmPassword="确认密码不能为空",o.agreeToTerms||(t.agreeToTerms="请同意服务条款"),t},onSubmit:async o=>{await new Promise(t=>setTimeout(t,1e3)),p(`表单提交成功！用户名: ${o.username}, 邮箱: ${o.email}`)}});return e.jsx("div",{className:"space-y-6",children:e.jsxs("div",{className:"bg-white p-6 rounded-lg border border-gray-200",children:[e.jsx("h3",{className:"text-lg font-semibold mb-4",children:"用户注册表单"}),e.jsxs("form",{onSubmit:r.handleSubmit,className:"space-y-4",children:[e.jsxs("div",{children:[e.jsx("label",{className:"block text-sm font-medium text-gray-700 mb-1",children:"用户名 *"}),e.jsx("input",{type:"text",value:r.values.username,onChange:r.handleChange("username"),onBlur:r.handleBlur("username"),className:`w-full px-3 py-2 border rounded focus:outline-none focus:ring-2 ${r.touched.username&&r.errors.username?"border-red-500 focus:ring-red-500":"border-gray-300 focus:ring-blue-500"}`,placeholder:"请输入用户名"}),r.touched.username&&r.errors.username&&e.jsx("div",{className:"text-red-500 text-sm mt-1",children:r.errors.username})]}),e.jsxs("div",{children:[e.jsx("label",{className:"block text-sm font-medium text-gray-700 mb-1",children:"邮箱 *"}),e.jsx("input",{type:"email",value:r.values.email,onChange:r.handleChange("email"),onBlur:r.handleBlur("email"),className:`w-full px-3 py-2 border rounded focus:outline-none focus:ring-2 ${r.touched.email&&r.errors.email?"border-red-500 focus:ring-red-500":"border-gray-300 focus:ring-blue-500"}`,placeholder:"请输入邮箱地址"}),r.touched.email&&r.errors.email&&e.jsx("div",{className:"text-red-500 text-sm mt-1",children:r.errors.email})]}),e.jsxs("div",{children:[e.jsx("label",{className:"block text-sm font-medium text-gray-700 mb-1",children:"密码 *"}),e.jsx("input",{type:"password",value:r.values.password,onChange:r.handleChange("password"),onBlur:r.handleBlur("password"),className:`w-full px-3 py-2 border rounded focus:outline-none focus:ring-2 ${r.touched.password&&r.errors.password?"border-red-500 focus:ring-red-500":"border-gray-300 focus:ring-blue-500"}`,placeholder:"请输入密码"}),r.touched.password&&r.errors.password&&e.jsx("div",{className:"text-red-500 text-sm mt-1",children:r.errors.password})]}),e.jsxs("div",{children:[e.jsx("label",{className:"block text-sm font-medium text-gray-700 mb-1",children:"确认密码 *"}),e.jsx("input",{type:"password",value:r.values.confirmPassword,onChange:r.handleChange("confirmPassword"),onBlur:r.handleBlur("confirmPassword"),className:`w-full px-3 py-2 border rounded focus:outline-none focus:ring-2 ${r.touched.confirmPassword&&r.errors.confirmPassword?"border-red-500 focus:ring-red-500":"border-gray-300 focus:ring-blue-500"}`,placeholder:"请再次输入密码"}),r.touched.confirmPassword&&r.errors.confirmPassword&&e.jsx("div",{className:"text-red-500 text-sm mt-1",children:r.errors.confirmPassword})]}),e.jsxs("div",{children:[e.jsxs("label",{className:"flex items-center",children:[e.jsx("input",{type:"checkbox",checked:r.values.agreeToTerms,onChange:r.handleChange("agreeToTerms"),onBlur:r.handleBlur("agreeToTerms"),className:"mr-2 w-4 h-4 text-blue-600 rounded focus:ring-blue-500"}),e.jsxs("span",{className:"text-sm text-gray-700",children:["我同意"," ",e.jsx("a",{href:"#",className:"text-blue-600 hover:underline",children:"服务条款"})," ","和"," ",e.jsx("a",{href:"#",className:"text-blue-600 hover:underline",children:"隐私政策"})]})]}),r.touched.agreeToTerms&&r.errors.agreeToTerms&&e.jsx("div",{className:"text-red-500 text-sm mt-1",children:r.errors.agreeToTerms})]}),e.jsxs("div",{className:"grid grid-cols-3 gap-4 p-3 bg-gray-50 rounded",children:[e.jsxs("div",{className:"text-center",children:[e.jsx("div",{className:"text-xs text-gray-500",children:"表单状态"}),e.jsx("div",{className:`text-sm font-medium ${r.isValid?"text-green-600":"text-red-600"}`,children:r.isValid?"有效":"无效"})]}),e.jsxs("div",{className:"text-center",children:[e.jsx("div",{className:"text-xs text-gray-500",children:"是否修改"}),e.jsx("div",{className:`text-sm font-medium ${r.isDirty?"text-blue-600":"text-gray-600"}`,children:r.isDirty?"已修改":"未修改"})]}),e.jsxs("div",{className:"text-center",children:[e.jsx("div",{className:"text-xs text-gray-500",children:"提交状态"}),e.jsx("div",{className:`text-sm font-medium ${r.isSubmitting?"text-yellow-600":"text-gray-600"}`,children:r.isSubmitting?"提交中":"就绪"})]})]}),e.jsxs("div",{className:"flex space-x-2",children:[e.jsx("button",{type:"submit",disabled:r.isSubmitting,className:"flex-1 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 disabled:bg-gray-300 disabled:cursor-not-allowed",children:r.isSubmitting?"注册中...":"注册"}),e.jsx("button",{type:"button",onClick:r.reset,className:"px-4 py-2 bg-gray-500 text-white rounded hover:bg-gray-600",children:"重置"})]})]}),u&&e.jsx("div",{className:"mt-4 p-3 bg-green-50 border border-green-200 rounded",children:e.jsx("div",{className:"text-green-800",children:u})})]})})},X=`import React, { useState } from "react";

import { useForm } from "./useFormHook";

interface BasicFormData {
  username: string;
  email: string;
  password: string;
  confirmPassword: string;
  agreeToTerms: boolean;
}

const BasicFormDemo: React.FC = () => {
  const [submitResult, setSubmitResult] = useState<string>("");

  const validateBasicForm = (values: BasicFormData) => {
    const errors: Partial<Record<keyof BasicFormData, string>> = {};

    if (!values.username) {
      errors.username = "用户名不能为空";
    } else if (values.username.length < 3) {
      errors.username = "用户名至少需要3个字符";
    }

    if (!values.email) {
      errors.email = "邮箱不能为空";
    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\\.[A-Z]{2,}$/i.test(values.email)) {
      errors.email = "邮箱格式不正确";
    }

    if (!values.password) {
      errors.password = "密码不能为空";
    } else if (values.password.length < 6) {
      errors.password = "密码至少需要6个字符";
    }

    if (!values.confirmPassword) {
      errors.confirmPassword = "确认密码不能为空";
    } else if (values.password !== values.confirmPassword) {
      errors.confirmPassword = "两次输入的密码不一致";
    }

    if (!values.agreeToTerms) {
      errors.agreeToTerms = "请同意服务条款";
    }

    return errors;
  };

  const form = useForm<BasicFormData>({
    initialValues: {
      username: "",
      email: "",
      password: "",
      confirmPassword: "",
      agreeToTerms: false,
    },
    validate: validateBasicForm,
    onSubmit: async (values) => {
      // 模拟API调用
      await new Promise((resolve) => setTimeout(resolve, 1000));
      setSubmitResult(
        \`表单提交成功！用户名: \${values.username}, 邮箱: \${values.email}\`
      );
    },
  });

  return (
    <div className="space-y-6">
      <div className="bg-white p-6 rounded-lg border border-gray-200">
        <h3 className="text-lg font-semibold mb-4">用户注册表单</h3>

        <form onSubmit={form.handleSubmit} className="space-y-4">
          {/* 用户名 */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              用户名 *
            </label>
            <input
              type="text"
              value={form.values.username}
              onChange={form.handleChange("username")}
              onBlur={form.handleBlur("username")}
              className={\`w-full px-3 py-2 border rounded focus:outline-none focus:ring-2 \${
                form.touched.username && form.errors.username
                  ? "border-red-500 focus:ring-red-500"
                  : "border-gray-300 focus:ring-blue-500"
              }\`}
              placeholder="请输入用户名"
            />
            {form.touched.username && form.errors.username && (
              <div className="text-red-500 text-sm mt-1">
                {form.errors.username}
              </div>
            )}
          </div>

          {/* 邮箱 */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              邮箱 *
            </label>
            <input
              type="email"
              value={form.values.email}
              onChange={form.handleChange("email")}
              onBlur={form.handleBlur("email")}
              className={\`w-full px-3 py-2 border rounded focus:outline-none focus:ring-2 \${
                form.touched.email && form.errors.email
                  ? "border-red-500 focus:ring-red-500"
                  : "border-gray-300 focus:ring-blue-500"
              }\`}
              placeholder="请输入邮箱地址"
            />
            {form.touched.email && form.errors.email && (
              <div className="text-red-500 text-sm mt-1">
                {form.errors.email}
              </div>
            )}
          </div>

          {/* 密码 */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              密码 *
            </label>
            <input
              type="password"
              value={form.values.password}
              onChange={form.handleChange("password")}
              onBlur={form.handleBlur("password")}
              className={\`w-full px-3 py-2 border rounded focus:outline-none focus:ring-2 \${
                form.touched.password && form.errors.password
                  ? "border-red-500 focus:ring-red-500"
                  : "border-gray-300 focus:ring-blue-500"
              }\`}
              placeholder="请输入密码"
            />
            {form.touched.password && form.errors.password && (
              <div className="text-red-500 text-sm mt-1">
                {form.errors.password}
              </div>
            )}
          </div>

          {/* 确认密码 */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              确认密码 *
            </label>
            <input
              type="password"
              value={form.values.confirmPassword}
              onChange={form.handleChange("confirmPassword")}
              onBlur={form.handleBlur("confirmPassword")}
              className={\`w-full px-3 py-2 border rounded focus:outline-none focus:ring-2 \${
                form.touched.confirmPassword && form.errors.confirmPassword
                  ? "border-red-500 focus:ring-red-500"
                  : "border-gray-300 focus:ring-blue-500"
              }\`}
              placeholder="请再次输入密码"
            />
            {form.touched.confirmPassword && form.errors.confirmPassword && (
              <div className="text-red-500 text-sm mt-1">
                {form.errors.confirmPassword}
              </div>
            )}
          </div>

          {/* 同意条款 */}
          <div>
            <label className="flex items-center">
              <input
                type="checkbox"
                checked={form.values.agreeToTerms}
                onChange={form.handleChange("agreeToTerms")}
                onBlur={form.handleBlur("agreeToTerms")}
                className="mr-2 w-4 h-4 text-blue-600 rounded focus:ring-blue-500"
              />
              <span className="text-sm text-gray-700">
                我同意{" "}
                <a href="#" className="text-blue-600 hover:underline">
                  服务条款
                </a>{" "}
                和{" "}
                <a href="#" className="text-blue-600 hover:underline">
                  隐私政策
                </a>
              </span>
            </label>
            {form.touched.agreeToTerms && form.errors.agreeToTerms && (
              <div className="text-red-500 text-sm mt-1">
                {form.errors.agreeToTerms}
              </div>
            )}
          </div>

          {/* 表单状态 */}
          <div className="grid grid-cols-3 gap-4 p-3 bg-gray-50 rounded">
            <div className="text-center">
              <div className="text-xs text-gray-500">表单状态</div>
              <div
                className={\`text-sm font-medium \${
                  form.isValid ? "text-green-600" : "text-red-600"
                }\`}
              >
                {form.isValid ? "有效" : "无效"}
              </div>
            </div>
            <div className="text-center">
              <div className="text-xs text-gray-500">是否修改</div>
              <div
                className={\`text-sm font-medium \${
                  form.isDirty ? "text-blue-600" : "text-gray-600"
                }\`}
              >
                {form.isDirty ? "已修改" : "未修改"}
              </div>
            </div>
            <div className="text-center">
              <div className="text-xs text-gray-500">提交状态</div>
              <div
                className={\`text-sm font-medium \${
                  form.isSubmitting ? "text-yellow-600" : "text-gray-600"
                }\`}
              >
                {form.isSubmitting ? "提交中" : "就绪"}
              </div>
            </div>
          </div>

          {/* 提交按钮 */}
          <div className="flex space-x-2">
            <button
              type="submit"
              disabled={form.isSubmitting}
              className="flex-1 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 disabled:bg-gray-300 disabled:cursor-not-allowed"
            >
              {form.isSubmitting ? "注册中..." : "注册"}
            </button>
            <button
              type="button"
              onClick={form.reset}
              className="px-4 py-2 bg-gray-500 text-white rounded hover:bg-gray-600"
            >
              重置
            </button>
          </div>
        </form>

        {/* 提交结果 */}
        {submitResult && (
          <div className="mt-4 p-3 bg-green-50 border border-green-200 rounded">
            <div className="text-green-800">{submitResult}</div>
          </div>
        )}
      </div>
    </div>
  );
};

export default BasicFormDemo;
`,Y=()=>{const[u,p]=l.useState([{id:"1",type:"text",label:"姓名",required:!0,value:""},{id:"2",type:"email",label:"邮箱",required:!0,value:""}]),[m,r]=l.useState(""),o=l.useMemo(()=>u.reduce((s,d)=>(s[d.id]=d.value,s),{}),[u]),t=l.useCallback(s=>{const d={};return u.forEach(a=>{const f=s[a.id];a.required&&!f&&(d[a.id]=`${a.label}不能为空`),a.type==="email"&&f&&!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(f)&&(d[a.id]="邮箱格式不正确"),a.type==="number"&&f&&isNaN(Number(f))&&(d[a.id]="请输入有效的数字")}),d},[u]),n=E({initialValues:o,validate:t,validateOnBlur:!0,enableReinitialize:!0,onSubmit:async s=>{await new Promise(a=>setTimeout(a,1e3));const d=Object.entries(s).map(([a,f])=>{const N=u.find(F=>F.id===a);return`${N==null?void 0:N.label}: ${f}`}).join(", ");r(`动态表单提交成功！${d}`)}}),w=()=>{const s={id:Date.now().toString(),type:"text",label:`字段${u.length+1}`,required:!1,value:""};p(d=>[...d,s])},x=s=>{p(d=>d.filter(a=>a.id!==s))},j=(s,d)=>{p(a=>a.map(f=>f.id===s?{...f,...d}:f))},y=[{value:"text",label:"文本"},{value:"email",label:"邮箱"},{value:"number",label:"数字"},{value:"select",label:"选择"}];return e.jsxs("div",{className:"space-y-6",children:[e.jsxs("div",{className:"bg-white p-6 rounded-lg border border-gray-200",children:[e.jsx("h3",{className:"text-lg font-semibold mb-4",children:"动态表单构建器"}),e.jsxs("div",{className:"mb-6",children:[e.jsx("h4",{className:"font-medium text-gray-800 mb-3",children:"字段配置"}),e.jsx("div",{className:"space-y-3",children:u.map((s,d)=>e.jsxs("div",{className:"flex items-center space-x-2 p-3 bg-gray-50 rounded border",children:[e.jsxs("span",{className:"text-sm font-medium text-gray-600 w-8",children:[d+1,"."]}),e.jsx("input",{type:"text",value:s.label,onChange:a=>j(s.id,{label:a.target.value}),className:"flex-1 px-2 py-1 border border-gray-300 rounded text-sm",placeholder:"字段标签"}),e.jsx("select",{value:s.type,onChange:a=>j(s.id,{type:a.target.value}),className:"px-2 py-1 border border-gray-300 rounded text-sm",children:y.map(a=>e.jsx("option",{value:a.value,children:a.label},a.value))}),e.jsxs("label",{className:"flex items-center text-sm",children:[e.jsx("input",{type:"checkbox",checked:s.required,onChange:a=>j(s.id,{required:a.target.checked}),className:"mr-1 w-3 h-3"}),"必填"]}),e.jsx("button",{onClick:()=>x(s.id),disabled:u.length<=1,className:"px-2 py-1 bg-red-500 text-white rounded text-sm hover:bg-red-600 disabled:bg-gray-300 disabled:cursor-not-allowed",children:"删除"})]},s.id))}),e.jsx("button",{onClick:w,className:"mt-3 px-3 py-2 bg-green-500 text-white rounded hover:bg-green-600",children:"添加字段"})]}),e.jsxs("div",{className:"border-t pt-6",children:[e.jsx("h4",{className:"font-medium text-gray-800 mb-3",children:"表单预览"}),e.jsxs("form",{onSubmit:n.handleSubmit,className:"space-y-4",children:[u.map(s=>e.jsxs("div",{children:[e.jsxs("label",{className:"block text-sm font-medium text-gray-700 mb-1",children:[s.label," ",s.required&&e.jsx("span",{className:"text-red-500",children:"*"})]}),(()=>{const d=n.getFieldProps(s.id),{error:a,touched:f,...N}=d;return e.jsxs(e.Fragment,{children:[s.type==="select"?e.jsxs("select",{...N,className:`w-full px-3 py-2 border rounded focus:outline-none focus:ring-2 ${a?"border-red-500 focus:ring-red-500":"border-gray-300 focus:ring-blue-500"}`,children:[e.jsx("option",{value:"",children:"请选择..."}),e.jsx("option",{value:"选项1",children:"选项1"}),e.jsx("option",{value:"选项2",children:"选项2"}),e.jsx("option",{value:"选项3",children:"选项3"})]}):e.jsx("input",{...N,type:s.type,className:`w-full px-3 py-2 border rounded focus:outline-none focus:ring-2 ${a?"border-red-500 focus:ring-red-500":"border-gray-300 focus:ring-blue-500"}`,placeholder:`请输入${s.label}`}),a&&e.jsx("div",{className:"text-red-500 text-sm mt-1",children:a})]})})()]},s.id)),e.jsxs("div",{className:"grid grid-cols-2 gap-4 p-3 bg-gray-50 rounded",children:[e.jsxs("div",{className:"text-center",children:[e.jsx("div",{className:"text-xs text-gray-500",children:"字段数量"}),e.jsx("div",{className:"text-sm font-medium text-blue-600",children:u.length})]}),e.jsxs("div",{className:"text-center",children:[e.jsx("div",{className:"text-xs text-gray-500",children:"表单状态"}),e.jsx("div",{className:`text-sm font-medium ${n.isValid?"text-green-600":"text-red-600"}`,children:n.isValid?"有效":"无效"})]})]}),e.jsxs("div",{className:"flex space-x-2",children:[e.jsx("button",{type:"submit",disabled:n.isSubmitting,className:"flex-1 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 disabled:bg-gray-300 disabled:cursor-not-allowed",children:n.isSubmitting?"提交中...":"提交表单"}),e.jsx("button",{type:"button",onClick:n.reset,className:"px-4 py-2 bg-gray-500 text-white rounded hover:bg-gray-600",children:"重置"})]})]})]}),m&&e.jsx("div",{className:"mt-4 p-3 bg-green-50 border border-green-200 rounded",children:e.jsx("div",{className:"text-green-800",children:m})})]}),e.jsxs("div",{className:"bg-gray-50 p-4 rounded-lg",children:[e.jsx("h4",{className:"font-medium text-gray-800 mb-2",children:"动态表单特性"}),e.jsxs("div",{className:"text-sm text-gray-600 space-y-1",children:[e.jsxs("p",{children:["• ",e.jsx("strong",{children:"动态字段"}),"：支持运行时添加和删除字段"]}),e.jsxs("p",{children:["• ",e.jsx("strong",{children:"字段配置"}),"：可配置字段类型、标签、是否必填"]}),e.jsxs("p",{children:["• ",e.jsx("strong",{children:"自动重初始化"}),"：enableReinitialize 支持动态更新初始值"]}),e.jsxs("p",{children:["• ",e.jsx("strong",{children:"动态验证"}),"：根据字段配置动态生成验证规则"]}),e.jsxs("p",{children:["• ",e.jsx("strong",{children:"类型支持"}),"：支持文本、邮箱、数字、选择等字段类型"]})]})]})]})},ee=`import React, { useState, useCallback, useMemo } from 'react';
import { useAdvancedForm } from './useFormHook';

interface DynamicField {
  id: string;
  type: 'text' | 'email' | 'number' | 'select';
  label: string;
  required: boolean;
  options?: string[];
  value: string;
}

const DynamicFormDemo: React.FC = () => {
  const [fields, setFields] = useState<DynamicField[]>([
    { id: '1', type: 'text', label: '姓名', required: true, value: '' },
    { id: '2', type: 'email', label: '邮箱', required: true, value: '' }
  ]);
  const [submitResult, setSubmitResult] = useState<string>('');

  // 动态生成初始值
  const initialValues = useMemo(() => {
    return fields.reduce((acc, field) => {
      acc[field.id] = field.value;
      return acc;
    }, {} as Record<string, string>);
  }, [fields]);

  // 动态验证函数
  const validateDynamicForm = useCallback((values: Record<string, string>) => {
    const errors: Record<string, string> = {};
    
    fields.forEach(field => {
      const value = values[field.id];
      
      if (field.required && !value) {
        errors[field.id] = \`\${field.label}不能为空\`;
      }
      
      if (field.type === 'email' && value && !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\\.[A-Z]{2,}$/i.test(value)) {
        errors[field.id] = '邮箱格式不正确';
      }
      
      if (field.type === 'number' && value && isNaN(Number(value))) {
        errors[field.id] = '请输入有效的数字';
      }
    });
    
    return errors;
  }, [fields]);

  const form = useAdvancedForm({
    initialValues,
    validate: validateDynamicForm,
    validateOnBlur: true,
    enableReinitialize: true,
    onSubmit: async (values) => {
      await new Promise(resolve => setTimeout(resolve, 1000));
      const result = Object.entries(values)
        .map(([id, value]) => {
          const field = fields.find(f => f.id === id);
          return \`\${field?.label}: \${value}\`;
        })
        .join(', ');
      setSubmitResult(\`动态表单提交成功！\${result}\`);
    }
  });

  const addField = () => {
    const newField: DynamicField = {
      id: Date.now().toString(),
      type: 'text',
      label: \`字段\${fields.length + 1}\`,
      required: false,
      value: ''
    };
    setFields(prev => [...prev, newField]);
  };

  const removeField = (id: string) => {
    setFields(prev => prev.filter(field => field.id !== id));
  };

  const updateField = (id: string, updates: Partial<DynamicField>) => {
    setFields(prev => prev.map(field => 
      field.id === id ? { ...field, ...updates } : field
    ));
  };

  const fieldTypes = [
    { value: 'text', label: '文本' },
    { value: 'email', label: '邮箱' },
    { value: 'number', label: '数字' },
    { value: 'select', label: '选择' }
  ];

  return (
    <div className="space-y-6">
      <div className="bg-white p-6 rounded-lg border border-gray-200">
        <h3 className="text-lg font-semibold mb-4">动态表单构建器</h3>
        
        {/* 字段配置 */}
        <div className="mb-6">
          <h4 className="font-medium text-gray-800 mb-3">字段配置</h4>
          <div className="space-y-3">
            {fields.map((field, index) => (
              <div key={field.id} className="flex items-center space-x-2 p-3 bg-gray-50 rounded border">
                <span className="text-sm font-medium text-gray-600 w-8">{index + 1}.</span>
                <input
                  type="text"
                  value={field.label}
                  onChange={(e) => updateField(field.id, { label: e.target.value })}
                  className="flex-1 px-2 py-1 border border-gray-300 rounded text-sm"
                  placeholder="字段标签"
                />
                <select
                  value={field.type}
                  onChange={(e) => updateField(field.id, { type: e.target.value as any })}
                  className="px-2 py-1 border border-gray-300 rounded text-sm"
                >
                  {fieldTypes.map(type => (
                    <option key={type.value} value={type.value}>{type.label}</option>
                  ))}
                </select>
                <label className="flex items-center text-sm">
                  <input
                    type="checkbox"
                    checked={field.required}
                    onChange={(e) => updateField(field.id, { required: e.target.checked })}
                    className="mr-1 w-3 h-3"
                  />
                  必填
                </label>
                <button
                  onClick={() => removeField(field.id)}
                  disabled={fields.length <= 1}
                  className="px-2 py-1 bg-red-500 text-white rounded text-sm hover:bg-red-600 disabled:bg-gray-300 disabled:cursor-not-allowed"
                >
                  删除
                </button>
              </div>
            ))}
          </div>
          <button
            onClick={addField}
            className="mt-3 px-3 py-2 bg-green-500 text-white rounded hover:bg-green-600"
          >
            添加字段
          </button>
        </div>

        {/* 动态表单 */}
        <div className="border-t pt-6">
          <h4 className="font-medium text-gray-800 mb-3">表单预览</h4>
          <form onSubmit={form.handleSubmit} className="space-y-4">
            {fields.map(field => (
              <div key={field.id}>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  {field.label} {field.required && <span className="text-red-500">*</span>}
                </label>
                {(() => {
                  const fieldProps = form.getFieldProps(field.id);
                  const { error, touched, ...domProps } = fieldProps;
                  
                  return (
                    <>
                      {field.type === 'select' ? (
                        <select
                          {...domProps}
                          className={\`w-full px-3 py-2 border rounded focus:outline-none focus:ring-2 \${
                            error
                              ? 'border-red-500 focus:ring-red-500'
                              : 'border-gray-300 focus:ring-blue-500'
                          }\`}
                        >
                          <option value="">请选择...</option>
                          <option value="选项1">选项1</option>
                          <option value="选项2">选项2</option>
                          <option value="选项3">选项3</option>
                        </select>
                      ) : (
                        <input
                          {...domProps}
                          type={field.type}
                          className={\`w-full px-3 py-2 border rounded focus:outline-none focus:ring-2 \${
                            error
                              ? 'border-red-500 focus:ring-red-500'
                              : 'border-gray-300 focus:ring-blue-500'
                          }\`}
                          placeholder={\`请输入\${field.label}\`}
                        />
                      )}
                      {error && (
                        <div className="text-red-500 text-sm mt-1">
                          {error}
                        </div>
                      )}
                    </>
                  );
                })()}
              </div>
            ))}

            {/* 表单状态 */}
            <div className="grid grid-cols-2 gap-4 p-3 bg-gray-50 rounded">
              <div className="text-center">
                <div className="text-xs text-gray-500">字段数量</div>
                <div className="text-sm font-medium text-blue-600">{fields.length}</div>
              </div>
              <div className="text-center">
                <div className="text-xs text-gray-500">表单状态</div>
                <div className={\`text-sm font-medium \${
                  form.isValid ? 'text-green-600' : 'text-red-600'
                }\`}>
                  {form.isValid ? '有效' : '无效'}
                </div>
              </div>
            </div>

            {/* 提交按钮 */}
            <div className="flex space-x-2">
              <button
                type="submit"
                disabled={form.isSubmitting}
                className="flex-1 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 disabled:bg-gray-300 disabled:cursor-not-allowed"
              >
                {form.isSubmitting ? '提交中...' : '提交表单'}
              </button>
              <button
                type="button"
                onClick={form.reset}
                className="px-4 py-2 bg-gray-500 text-white rounded hover:bg-gray-600"
              >
                重置
              </button>
            </div>
          </form>
        </div>

        {/* 提交结果 */}
        {submitResult && (
          <div className="mt-4 p-3 bg-green-50 border border-green-200 rounded">
            <div className="text-green-800">{submitResult}</div>
          </div>
        )}
      </div>

      <div className="bg-gray-50 p-4 rounded-lg">
        <h4 className="font-medium text-gray-800 mb-2">动态表单特性</h4>
        <div className="text-sm text-gray-600 space-y-1">
          <p>• <strong>动态字段</strong>：支持运行时添加和删除字段</p>
          <p>• <strong>字段配置</strong>：可配置字段类型、标签、是否必填</p>
          <p>• <strong>自动重初始化</strong>：enableReinitialize 支持动态更新初始值</p>
          <p>• <strong>动态验证</strong>：根据字段配置动态生成验证规则</p>
          <p>• <strong>类型支持</strong>：支持文本、邮箱、数字、选择等字段类型</p>
        </div>
      </div>
    </div>
  );
};

export default DynamicFormDemo;`,ae=()=>e.jsx(G,{title:"useForm - 表单管理Hook",description:"useForm 是一个用于管理表单状态的自定义 Hook，提供完整的表单处理功能，包括验证、提交、重置等，支持复杂的表单场景。",overview:e.jsx("div",{className:"space-y-4",children:e.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-6",children:[e.jsxs("div",{className:"bg-blue-50 p-4 rounded-lg border border-blue-200",children:[e.jsx("h3",{className:"font-semibold text-blue-800 mb-2",children:"🎯 核心概念"}),e.jsxs("ul",{className:"text-sm text-blue-700 space-y-1",children:[e.jsx("li",{children:"• 状态管理"}),e.jsx("li",{children:"• 验证机制"}),e.jsx("li",{children:"• 事件处理"}),e.jsx("li",{children:"• 提交流程"})]})]}),e.jsxs("div",{className:"bg-green-50 p-4 rounded-lg border border-green-200",children:[e.jsx("h3",{className:"font-semibold text-green-800 mb-2",children:"✨ 主要优势"}),e.jsxs("ul",{className:"text-sm text-green-700 space-y-1",children:[e.jsx("li",{children:"• 简化开发"}),e.jsx("li",{children:"• 类型安全"}),e.jsx("li",{children:"• 灵活验证"}),e.jsx("li",{children:"• 性能优化"})]})]}),e.jsxs("div",{className:"bg-yellow-50 p-4 rounded-lg border border-yellow-200",children:[e.jsx("h3",{className:"font-semibold text-yellow-800 mb-2",children:"🎪 适用场景"}),e.jsxs("ul",{className:"text-sm text-yellow-700 space-y-1",children:[e.jsx("li",{children:"• 用户注册"}),e.jsx("li",{children:"• 数据录入"}),e.jsx("li",{children:"• 设置页面"}),e.jsx("li",{children:"• 动态表单"})]})]}),e.jsxs("div",{className:"bg-red-50 p-4 rounded-lg border border-red-200",children:[e.jsx("h3",{className:"font-semibold text-red-800 mb-2",children:"⚠️ 注意事项"}),e.jsxs("ul",{className:"text-sm text-red-700 space-y-1",children:[e.jsx("li",{children:"• 验证时机"}),e.jsx("li",{children:"• 性能考虑"}),e.jsx("li",{children:"• 用户体验"}),e.jsx("li",{children:"• 数据安全"})]})]})]})}),examples:[{title:"基础表单演示",component:e.jsx(W,{}),description:"展示 useForm 的基本功能，包括表单验证、提交处理、状态管理等。",observationPoints:["支持多种输入类型：文本、邮箱、密码、复选框","失焦时触发字段验证，显示错误信息","实时显示表单状态：有效性、是否修改、提交状态","提交时进行完整的表单验证","支持表单重置功能"],keyPoints:["useForm 接收 initialValues、validate、onSubmit 参数","handleChange 和 handleBlur 处理表单事件","touched 状态控制错误信息的显示时机","isValid 和 isDirty 提供表单状态信息","handleSubmit 自动处理表单提交流程"],commonTraps:["忘记在 onBlur 时设置 touched 状态","验证函数过于复杂影响性能","没有正确处理异步提交的错误"],solutions:["使用 handleBlur 自动管理 touched 状态","保持验证函数的简单和高效","在 onSubmit 中使用 try-catch 处理错误"],importantTips:["基础版本适用于大多数常见的表单场景","验证函数应该返回错误对象，没有错误时返回空对象","支持同步和异步的 onSubmit 处理函数"],codeExample:{title:"基础表单演示",code:X,highlights:"17,50-66"}},{title:"高级表单演示",component:e.jsx(L,{}),description:"展示 useAdvancedForm 的高级功能，包括实时验证、字段属性、访问统计等。",observationPoints:["启用实时验证，输入时即时显示验证结果","使用 getFieldProps 简化字段属性绑定","显示字段访问统计和提交次数","支持多种字段类型和复杂的表单布局","提供详细的表单状态信息"],keyPoints:["validateOnChange 启用输入时验证","validateOnBlur 控制失焦时验证","getFieldProps 返回字段的所有属性","fieldMeta 记录字段的访问信息","submitCount 统计表单提交次数"],commonTraps:["实时验证可能影响用户体验","过多的状态统计影响性能","getFieldProps 的属性展开可能覆盖自定义属性"],solutions:["合理选择验证时机，避免过于频繁的验证","只在需要时启用统计功能","在使用 getFieldProps 时注意属性的优先级"],importantTips:["高级版本提供更多的控制选项和统计信息","适用于需要复杂交互和分析的表单场景","可以根据需要选择性启用高级功能"],codeExample:{title:"高级表单演示",code:Q,highlights:"49-67"}},{title:"动态表单演示",component:e.jsx(Y,{}),description:"展示如何使用 useForm 构建动态表单，支持运行时添加和删除字段。",observationPoints:["支持动态添加和删除表单字段","可配置字段类型、标签、是否必填","表单会根据字段配置自动重新初始化","动态生成验证规则和初始值","实时预览表单效果"],keyPoints:["enableReinitialize 支持动态更新初始值","使用 useMemo 动态生成初始值","使用 useCallback 动态生成验证函数","支持多种字段类型的动态渲染","字段配置与表单渲染分离"],commonTraps:["动态更新时可能丢失用户输入","验证函数的依赖项管理复杂","字段 ID 的唯一性问题"],solutions:["合理使用 enableReinitialize 选项","正确设置 useCallback 的依赖数组","使用时间戳或 UUID 生成唯一 ID"],importantTips:["动态表单适用于表单构建器、配置页面等场景","需要仔细处理字段变化时的状态同步","考虑提供字段模板和预设配置"],codeExample:{title:"动态表单演示",code:ee,highlights:"51-87"}}],tutorial:{concepts:["useForm 是一个专门用于表单状态管理的自定义 Hook","提供完整的表单处理流程：输入、验证、提交、重置","支持字段级和表单级的验证机制","使用 touched 状态控制错误信息的显示时机","高级版本提供更多的配置选项和统计功能"],steps:["定义表单数据的 TypeScript 接口","创建验证函数，返回错误对象","使用 useForm Hook 初始化表单状态","绑定表单字段的 onChange 和 onBlur 事件","实现表单提交和验证逻辑","处理表单重置和错误状态","根据需要启用高级功能和配置选项"],tips:["保持验证函数的简单和高效，避免复杂的异步操作","合理选择验证时机，平衡用户体验和数据准确性","使用 TypeScript 接口定义表单数据结构","为每个字段提供清晰的错误提示信息","考虑使用 getFieldProps 简化字段属性绑定","在动态表单中注意字段 ID 的唯一性","客户端验证不能替代服务端验证"]},interview:{questions:[{question:"useForm Hook 的核心功能有哪些？",answer:"useForm Hook 的核心功能包括：1) 表单状态管理 - 统一管理 values、errors、touched 等状态；2) 事件处理 - 提供 handleChange、handleBlur、handleSubmit 等事件处理函数；3) 验证机制 - 支持字段级和表单级验证；4) 提交流程 - 完整的表单提交和错误处理；5) 重置功能 - 支持表单重置到初始状态；6) 状态查询 - 提供 isValid、isDirty、isSubmitting 等状态信息。"},{question:"如何实现表单的实时验证？",answer:"实现表单实时验证的方法：1) 在 useAdvancedForm 中设置 validateOnChange: true；2) 在 setValue 函数中调用验证逻辑；3) 使用 useCallback 优化验证函数性能；4) 合理控制验证频率，避免过于频繁的验证影响用户体验；5) 可以结合防抖技术减少验证调用次数；6) 区分字段级验证和表单级验证的触发时机。"},{question:"touched 状态的作用是什么？",answer:"touched 状态的作用：1) 控制错误信息的显示时机 - 只有在用户与字段交互后才显示错误；2) 改善用户体验 - 避免在用户还未输入时就显示错误信息；3) 区分用户操作 - 标记哪些字段被用户访问过；4) 验证策略 - 配合验证逻辑实现更智能的错误提示；5) 表单提交 - 在提交时可以标记所有字段为 touched 以显示所有错误。"},{question:"如何处理动态表单的状态同步？",answer:"处理动态表单状态同步的方法：1) 使用 enableReinitialize 选项自动重新初始化；2) 使用 useMemo 动态生成初始值；3) 使用 useCallback 动态生成验证函数；4) 正确设置依赖数组确保状态同步；5) 在字段变化时清理相关的错误和 touched 状态；6) 使用唯一的字段 ID 避免状态混乱；7) 考虑提供字段变化的回调函数。"},{question:"useForm 与 Formik 等库相比有什么优势？",answer:"useForm 相比第三方库的优势：1) 轻量级 - 没有额外的依赖，包体积小；2) 定制化 - 可以根据项目需求定制功能；3) 类型安全 - 完整的 TypeScript 支持；4) 学习成本低 - 基于 React Hooks，易于理解和使用；5) 性能优化 - 使用 useCallback 等优化手段；6) 灵活性高 - 可以轻松扩展和修改功能；7) 项目控制 - 完全掌控代码逻辑，便于调试和维护。"}],keyPoints:["useForm 是表单状态管理的核心 Hook","touched 状态控制错误信息的显示时机","支持同步和异步的验证机制","高级版本提供更多配置选项和统计功能","动态表单需要特别处理状态同步问题","性能优化是表单 Hook 设计的重要考虑因素"]},bestPractices:{dos:["使用 TypeScript 接口定义表单数据结构","保持验证函数的简单和高效","合理选择验证时机，平衡用户体验和准确性","使用 useCallback 优化事件处理函数","为每个字段提供清晰的错误提示","在动态表单中使用唯一的字段标识符","结合服务端验证确保数据安全","使用 getFieldProps 简化字段属性绑定"],donts:["不要在验证函数中执行复杂的异步操作","不要忽略 touched 状态的重要性","不要在每次渲染时创建新的验证函数","不要过度依赖客户端验证","不要在动态表单中使用不稳定的字段 ID","不要忘记处理表单提交时的错误情况","不要在不必要时启用实时验证","不要忽略表单的性能优化"],patterns:["表单状态集中管理模式 - 使用单一 Hook 管理所有表单状态","字段属性绑定模式 - 使用 getFieldProps 简化字段绑定","验证策略模式 - 根据不同场景选择合适的验证时机","动态表单模式 - 支持运行时配置的表单结构","错误处理模式 - 统一的错误信息显示和处理机制","性能优化模式 - 使用 useCallback 和 useMemo 优化性能","状态同步模式 - 在动态场景下保持状态一致性","类型安全模式 - 使用 TypeScript 确保类型安全"]}});export{ae as default};
