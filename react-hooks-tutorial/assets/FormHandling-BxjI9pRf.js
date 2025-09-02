import{r as f,j as e}from"./index-CKH9Ek1I.js";import{C as E}from"./ComponentTemplate-B8dTsNLj.js";function D(s,y={}){const[c,o]=f.useState(y),[p,v]=f.useState({}),[n,b]=f.useState({}),[m,r]=f.useState(!1),d=f.useCallback((a,i)=>a.required&&(i==null||i===""||Array.isArray(i)&&i.length===0)?`${a.label}是必填项`:a.type==="email"&&i&&!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(i)?"请输入有效的邮箱地址":a.type==="number"&&i!==""&&i!==void 0&&isNaN(Number(i))?"请输入有效的数字":a.validation&&i!==void 0&&i!==""?a.validation(i):null,[]),h=f.useCallback(()=>{const a={};let i=!0;return s.forEach(l=>{const u=d(l,c[l.name]);u&&(a[l.name]=u,i=!1)}),v(a),i},[s,c,d]),g=f.useCallback((a,i)=>{if(o(l=>({...l,[a]:i})),n[a]){const l=s.find(u=>u.name===a);if(l){const u=d(l,i);v(N=>({...N,[a]:u||""}))}}},[s,n,d]),t=f.useCallback(a=>{b(l=>({...l,[a]:!0}));const i=s.find(l=>l.name===a);if(i){const l=d(i,c[a]);v(u=>({...u,[a]:l||""}))}},[s,c,d]),x=f.useCallback(async a=>{r(!0);const i={};if(s.forEach(u=>{i[u.name]=!0}),b(i),!h()){r(!1);return}try{await a(c)}catch(u){console.error("表单提交失败:",u)}finally{r(!1)}},[c,s,h]),F=f.useCallback(()=>{o(y),v({}),b({}),r(!1)},[y]),w=f.useMemo(()=>s.every(a=>!d(a,c[a.name])),[s,c,d]);return f.useEffect(()=>{const a=s.map(u=>u.name),l=Object.keys(c).filter(u=>!a.includes(u));l.length>0&&(o(u=>{const N={...u};return l.forEach(S=>{delete N[S]}),N}),v(u=>{const N={...u};return l.forEach(S=>{delete N[S]}),N}),b(u=>{const N={...u};return l.forEach(S=>{delete N[S]}),N}))},[s,c]),{...{data:c,errors:p,touched:n,isSubmitting:m,isValid:w},updateField:g,touchField:t,submitForm:x,resetForm:F,validateForm:h}}const R=()=>{const[s,y]=f.useState(""),c=[{name:"name",label:"姓名",type:"text",required:!0,placeholder:"请输入您的姓名"},{name:"email",label:"邮箱",type:"email",required:!0,placeholder:"请输入您的邮箱地址"},{name:"age",label:"年龄",type:"number",required:!0,validation:n=>{const b=Number(n);return b<18||b>100?"年龄必须在18-100之间":null}},{name:"gender",label:"性别",type:"select",required:!0,options:[{value:"male",label:"男"},{value:"female",label:"女"},{value:"other",label:"其他"}]},{name:"bio",label:"个人简介",type:"textarea",placeholder:"请简单介绍一下自己"},{name:"agree",label:"同意用户协议",type:"checkbox",required:!0}],o=D(c,{name:"",email:"",age:"",gender:"",bio:"",agree:!1}),p=async n=>{await new Promise(b=>setTimeout(b,1e3)),y(`表单提交成功！数据：${JSON.stringify(n,null,2)}`)},v=n=>{var g;const b=o.data[n.name]||"",m=o.errors[n.name],d=o.touched[n.name]&&m,h={id:n.name,name:n.name,onBlur:()=>o.touchField(n.name),className:`w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 ${d?"border-red-500":"border-gray-300"}`};switch(n.type){case"textarea":return e.jsx("textarea",{...h,value:b,onChange:t=>o.updateField(n.name,t.target.value),placeholder:n.placeholder,rows:3});case"select":return e.jsxs("select",{...h,value:b,onChange:t=>o.updateField(n.name,t.target.value),children:[e.jsx("option",{value:"",children:"请选择"}),(g=n.options)==null?void 0:g.map(t=>e.jsx("option",{value:t.value,children:t.label},t.value))]});case"checkbox":return e.jsx("input",{...h,type:"checkbox",checked:b,onChange:t=>o.updateField(n.name,t.target.checked),className:"mr-2"});default:return e.jsx("input",{...h,type:n.type,value:b,onChange:t=>o.updateField(n.name,t.target.value),placeholder:n.placeholder})}};return e.jsx("div",{className:"space-y-6",children:e.jsxs("div",{className:"bg-white p-6 rounded-lg border border-gray-200",children:[e.jsx("h3",{className:"text-lg font-semibold mb-4",children:"基础表单处理"}),e.jsxs("form",{onSubmit:n=>{n.preventDefault(),o.submitForm(p).catch(console.error)},className:"space-y-4",children:[c.map(n=>e.jsxs("div",{className:"space-y-1",children:[e.jsxs("label",{htmlFor:n.name,className:"block text-sm font-medium text-gray-700",children:[n.label,n.required&&e.jsx("span",{className:"text-red-500 ml-1",children:"*"})]}),n.type==="checkbox"?e.jsxs("div",{className:"flex items-center",children:[v(n),e.jsx("label",{htmlFor:n.name,className:"text-sm text-gray-700",children:n.label})]}):v(n),o.touched[n.name]&&o.errors[n.name]&&e.jsx("p",{className:"text-sm text-red-600",children:o.errors[n.name]})]},n.name)),e.jsxs("div",{className:"flex space-x-4 pt-4",children:[e.jsx("button",{type:"submit",disabled:o.isSubmitting||!o.isValid,className:`px-4 py-2 rounded-md text-white font-medium ${o.isSubmitting||!o.isValid?"bg-gray-400 cursor-not-allowed":"bg-blue-500 hover:bg-blue-600"}`,children:o.isSubmitting?"提交中...":"提交"}),e.jsx("button",{type:"button",onClick:o.resetForm,className:"px-4 py-2 bg-gray-500 text-white rounded-md hover:bg-gray-600",children:"重置"})]})]}),s&&e.jsxs("div",{className:"mt-4 p-3 bg-green-50 border border-green-200 rounded",children:[e.jsx("h4",{className:"font-medium text-green-800 mb-2",children:"提交结果："}),e.jsx("pre",{className:"text-sm text-green-700 whitespace-pre-wrap",children:s})]}),e.jsxs("div",{className:"mt-4 p-3 bg-blue-50 border border-blue-200 rounded",children:[e.jsx("h4",{className:"font-medium text-blue-800 mb-2",children:"表单状态："}),e.jsxs("div",{className:"text-sm text-blue-700 space-y-1",children:[e.jsxs("p",{children:["表单有效: ",o.isValid?"✅":"❌"]}),e.jsxs("p",{children:["提交中: ",o.isSubmitting?"✅":"❌"]}),e.jsxs("p",{children:["已触摸字段:"," ",Object.keys(o.touched).filter(n=>o.touched[n]).length," ","/ ",c.length]}),e.jsxs("p",{children:["错误数量:"," ",Object.keys(o.errors).filter(n=>o.errors[n]).length]})]})]})]})})},$=`import { FormData, FormField } from "./types";
import React, { useState } from "react";

import { useForm } from "./useForm";

// 基础表单演示组件
export const BasicFormDemo: React.FC = () => {
  const [submitResult, setSubmitResult] = useState<string>("");

  // 定义表单字段
  const formFields: FormField[] = [
    {
      name: "name",
      label: "姓名",
      type: "text",
      required: true,
      placeholder: "请输入您的姓名",
    },
    {
      name: "email",
      label: "邮箱",
      type: "email",
      required: true,
      placeholder: "请输入您的邮箱地址",
    },
    {
      name: "age",
      label: "年龄",
      type: "number",
      required: true,
      validation: (value) => {
        const age = Number(value);
        if (age < 18 || age > 100) {
          return "年龄必须在18-100之间";
        }
        return null;
      },
    },
    {
      name: "gender",
      label: "性别",
      type: "select",
      required: true,
      options: [
        { value: "male", label: "男" },
        { value: "female", label: "女" },
        { value: "other", label: "其他" },
      ],
    },
    {
      name: "bio",
      label: "个人简介",
      type: "textarea",
      placeholder: "请简单介绍一下自己",
    },
    {
      name: "agree",
      label: "同意用户协议",
      type: "checkbox",
      required: true,
    },
  ];

  // 使用自定义表单 Hook
  const form = useForm(formFields, {
    name: "",
    email: "",
    age: "",
    gender: "",
    bio: "",
    agree: false,
  });

  // 处理表单提交
  const handleSubmit = async (data: FormData) => {
    // 模拟异步提交
    await new Promise((resolve) => setTimeout(resolve, 1000));
    setSubmitResult(\`表单提交成功！数据：\${JSON.stringify(data, null, 2)}\`);
  };

  // 渲染表单字段
  const renderField = (field: FormField) => {
    const value = form.data[field.name] || "";
    const error = form.errors[field.name];
    const touched = form.touched[field.name];
    const showError = touched && error;

    const commonProps = {
      id: field.name,
      name: field.name,
      onBlur: () => form.touchField(field.name),
      className: \`w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 \${
        showError ? "border-red-500" : "border-gray-300"
      }\`,
    };

    switch (field.type) {
      case "textarea":
        return (
          <textarea
            {...commonProps}
            value={value}
            onChange={(e) => form.updateField(field.name, e.target.value)}
            placeholder={field.placeholder}
            rows={3}
          />
        );
      case "select":
        return (
          <select
            {...commonProps}
            value={value}
            onChange={(e) => form.updateField(field.name, e.target.value)}
          >
            <option value="">请选择</option>
            {field.options?.map((option) => (
              <option key={option.value} value={option.value}>
                {option.label}
              </option>
            ))}
          </select>
        );
      case "checkbox":
        return (
          <input
            {...commonProps}
            type="checkbox"
            checked={value}
            onChange={(e) => form.updateField(field.name, e.target.checked)}
            className="mr-2"
          />
        );
      default:
        return (
          <input
            {...commonProps}
            type={field.type}
            value={value}
            onChange={(e) => form.updateField(field.name, e.target.value)}
            placeholder={field.placeholder}
          />
        );
    }
  };

  return (
    <div className="space-y-6">
      <div className="bg-white p-6 rounded-lg border border-gray-200">
        <h3 className="text-lg font-semibold mb-4">基础表单处理</h3>

        <form
          onSubmit={(e) => {
            e.preventDefault();
            form.submitForm(handleSubmit).catch(console.error);
          }}
          className="space-y-4"
        >
          {formFields.map((field) => (
            <div key={field.name} className="space-y-1">
              <label
                htmlFor={field.name}
                className="block text-sm font-medium text-gray-700"
              >
                {field.label}
                {field.required && <span className="text-red-500 ml-1">*</span>}
              </label>

              {field.type === "checkbox" ? (
                <div className="flex items-center">
                  {renderField(field)}
                  <label htmlFor={field.name} className="text-sm text-gray-700">
                    {field.label}
                  </label>
                </div>
              ) : (
                renderField(field)
              )}

              {form.touched[field.name] && form.errors[field.name] && (
                <p className="text-sm text-red-600">
                  {form.errors[field.name]}
                </p>
              )}
            </div>
          ))}

          <div className="flex space-x-4 pt-4">
            <button
              type="submit"
              disabled={form.isSubmitting || !form.isValid}
              className={\`px-4 py-2 rounded-md text-white font-medium \${
                form.isSubmitting || !form.isValid
                  ? "bg-gray-400 cursor-not-allowed"
                  : "bg-blue-500 hover:bg-blue-600"
              }\`}
            >
              {form.isSubmitting ? "提交中..." : "提交"}
            </button>

            <button
              type="button"
              onClick={form.resetForm}
              className="px-4 py-2 bg-gray-500 text-white rounded-md hover:bg-gray-600"
            >
              重置
            </button>
          </div>
        </form>

        {submitResult && (
          <div className="mt-4 p-3 bg-green-50 border border-green-200 rounded">
            <h4 className="font-medium text-green-800 mb-2">提交结果：</h4>
            <pre className="text-sm text-green-700 whitespace-pre-wrap">
              {submitResult}
            </pre>
          </div>
        )}

        <div className="mt-4 p-3 bg-blue-50 border border-blue-200 rounded">
          <h4 className="font-medium text-blue-800 mb-2">表单状态：</h4>
          <div className="text-sm text-blue-700 space-y-1">
            <p>表单有效: {form.isValid ? "✅" : "❌"}</p>
            <p>提交中: {form.isSubmitting ? "✅" : "❌"}</p>
            <p>
              已触摸字段:{" "}
              {Object.keys(form.touched).filter((k) => form.touched[k]).length}{" "}
              / {formFields.length}
            </p>
            <p>
              错误数量:{" "}
              {Object.keys(form.errors).filter((k) => form.errors[k]).length}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
`,T=()=>{const[s,y]=f.useState([{name:"field_0",label:"字段 0",type:"text",placeholder:"请输入内容"}]),[c,o]=f.useState(""),p=D(s),v=async r=>{await new Promise(d=>setTimeout(d,1e3)),o(`动态表单提交成功！数据：${JSON.stringify(r,null,2)}`)},n=r=>{const d=s.length,h={name:`field_${d}`,label:`字段 ${d}`,type:r,placeholder:`请输入${r==="textarea"?"文本":"内容"}`};r==="select"&&(h.options=[{value:"option1",label:"选项1"},{value:"option2",label:"选项2"},{value:"option3",label:"选项3"}]),y(g=>[...g,h])},b=r=>{s.length>1&&y(d=>d.filter((h,g)=>g!==r))},m=(r,d)=>{var k;const h=p.data[r.name]||"",g=p.errors[r.name],x=p.touched[r.name]&&g,F={id:r.name,name:r.name,onBlur:()=>p.touchField(r.name),className:`w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 ${x?"border-red-500":"border-gray-300"}`};let w;switch(r.type){case"textarea":w=e.jsx("textarea",{...F,value:h,onChange:a=>p.updateField(r.name,a.target.value),placeholder:r.placeholder,rows:3});break;case"select":w=e.jsxs("select",{...F,value:h,onChange:a=>p.updateField(r.name,a.target.value),children:[e.jsx("option",{value:"",children:"请选择"}),(k=r.options)==null?void 0:k.map(a=>e.jsx("option",{value:a.value,children:a.label},a.value))]});break;case"checkbox":w=e.jsxs("div",{className:"flex items-center",children:[e.jsx("input",{...F,type:"checkbox",checked:h,onChange:a=>p.updateField(r.name,a.target.checked),className:"mr-2"}),e.jsx("label",{htmlFor:r.name,className:"text-sm text-gray-700",children:r.label})]});break;default:w=e.jsx("input",{...F,type:r.type,value:h,onChange:a=>p.updateField(r.name,a.target.value),placeholder:r.placeholder})}return e.jsxs("div",{className:"flex items-start space-x-2",children:[e.jsxs("div",{className:"flex-1 space-y-1",children:[r.type!=="checkbox"&&e.jsx("label",{htmlFor:r.name,className:"block text-sm font-medium text-gray-700",children:r.label}),w,x&&e.jsx("p",{className:"text-sm text-red-600",children:g})]}),e.jsx("button",{type:"button",onClick:()=>b(d),disabled:s.length<=1,className:`mt-6 px-2 py-1 text-sm rounded ${s.length<=1?"bg-gray-200 text-gray-400 cursor-not-allowed":"bg-red-500 text-white hover:bg-red-600"}`,children:"删除"})]},r.name)};return e.jsx("div",{className:"space-y-6",children:e.jsxs("div",{className:"bg-white p-6 rounded-lg border border-gray-200",children:[e.jsx("h3",{className:"text-lg font-semibold mb-4",children:"动态表单构建"}),e.jsxs("div",{className:"mb-4",children:[e.jsx("h4",{className:"font-medium text-gray-800 mb-2",children:"添加字段："}),e.jsxs("div",{className:"flex space-x-2",children:[e.jsx("button",{onClick:()=>n("text"),className:"px-3 py-1 bg-blue-500 text-white rounded hover:bg-blue-600 text-sm",children:"文本"}),e.jsx("button",{onClick:()=>n("number"),className:"px-3 py-1 bg-green-500 text-white rounded hover:bg-green-600 text-sm",children:"数字"}),e.jsx("button",{onClick:()=>n("email"),className:"px-3 py-1 bg-purple-500 text-white rounded hover:bg-purple-600 text-sm",children:"邮箱"}),e.jsx("button",{onClick:()=>n("select"),className:"px-3 py-1 bg-orange-500 text-white rounded hover:bg-orange-600 text-sm",children:"选择"}),e.jsx("button",{onClick:()=>n("textarea"),className:"px-3 py-1 bg-teal-500 text-white rounded hover:bg-teal-600 text-sm",children:"文本域"})]})]}),e.jsxs("form",{onSubmit:r=>{r.preventDefault(),p.submitForm(v).catch(console.error)},className:"space-y-3",children:[s.map((r,d)=>m(r,d)),e.jsxs("div",{className:"flex space-x-4 pt-4",children:[e.jsx("button",{type:"submit",disabled:p.isSubmitting,className:`px-4 py-2 rounded-md text-white font-medium ${p.isSubmitting?"bg-gray-400 cursor-not-allowed":"bg-blue-500 hover:bg-blue-600"}`,children:p.isSubmitting?"提交中...":"提交"}),e.jsx("button",{type:"button",onClick:p.resetForm,className:"px-4 py-2 bg-gray-500 text-white rounded-md hover:bg-gray-600",children:"重置"})]})]}),c&&e.jsxs("div",{className:"mt-4 p-3 bg-green-50 border border-green-200 rounded",children:[e.jsx("h4",{className:"font-medium text-green-800 mb-2",children:"提交结果："}),e.jsx("pre",{className:"text-sm text-green-700 whitespace-pre-wrap",children:c})]}),e.jsxs("div",{className:"mt-4 p-3 bg-yellow-50 border border-yellow-200 rounded",children:[e.jsx("h4",{className:"font-medium text-yellow-800 mb-2",children:"当前表单结构："}),e.jsxs("div",{className:"text-sm text-yellow-700",children:[e.jsxs("p",{children:["字段数量: ",s.length]}),e.jsxs("p",{children:["字段类型: ",s.map(r=>r.type).join(", ")]})]})]})]})})},q=`import { FormData, FormField } from "./types";
import React, { useState } from "react";

import { useForm } from "./useForm";

// 动态表单演示组件
export const DynamicFormDemo: React.FC = () => {
  const [formFields, setFormFields] = useState<FormField[]>([
    {
      name: "field_0",
      label: "字段 0",
      type: "text",
      placeholder: "请输入内容",
    },
  ]);
  const [submitResult, setSubmitResult] = useState<string>("");

  // 使用自定义表单 Hook
  const form = useForm(formFields);

  // 处理表单提交
  const handleSubmit = async (data: FormData) => {
    await new Promise((resolve) => setTimeout(resolve, 1000));
    setSubmitResult(\`动态表单提交成功！数据：\${JSON.stringify(data, null, 2)}\`);
  };

  // 动态添加字段
  const addField = (type: FormField["type"]) => {
    const fieldCount = formFields.length;
    const newField: FormField = {
      name: \`field_\${fieldCount}\`,
      label: \`字段 \${fieldCount}\`,
      type,
      placeholder: \`请输入\${type === "textarea" ? "文本" : "内容"}\`,
    };

    if (type === "select") {
      newField.options = [
        { value: "option1", label: "选项1" },
        { value: "option2", label: "选项2" },
        { value: "option3", label: "选项3" },
      ];
    }

    setFormFields((prev) => [...prev, newField]);
  };

  // 动态移除字段
  const removeField = (index: number) => {
    if (formFields.length > 1) {
      setFormFields((prev) => prev.filter((_, i) => i !== index));
    }
  };

  // 渲染动态字段
  const renderField = (field: FormField, index: number) => {
    const value = form.data[field.name] || "";
    const error = form.errors[field.name];
    const touched = form.touched[field.name];
    const showError = touched && error;

    const commonProps = {
      id: field.name,
      name: field.name,
      onBlur: () => form.touchField(field.name),
      className: \`w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 \${
        showError ? "border-red-500" : "border-gray-300"
      }\`,
    };

    let fieldElement;
    switch (field.type) {
      case "textarea":
        fieldElement = (
          <textarea
            {...commonProps}
            value={value}
            onChange={(e) => form.updateField(field.name, e.target.value)}
            placeholder={field.placeholder}
            rows={3}
          />
        );
        break;
      case "select":
        fieldElement = (
          <select
            {...commonProps}
            value={value}
            onChange={(e) => form.updateField(field.name, e.target.value)}
          >
            <option value="">请选择</option>
            {field.options?.map((option) => (
              <option key={option.value} value={option.value}>
                {option.label}
              </option>
            ))}
          </select>
        );
        break;
      case "checkbox":
        fieldElement = (
          <div className="flex items-center">
            <input
              {...commonProps}
              type="checkbox"
              checked={value}
              onChange={(e) => form.updateField(field.name, e.target.checked)}
              className="mr-2"
            />
            <label htmlFor={field.name} className="text-sm text-gray-700">
              {field.label}
            </label>
          </div>
        );
        break;
      default:
        fieldElement = (
          <input
            {...commonProps}
            type={field.type}
            value={value}
            onChange={(e) => form.updateField(field.name, e.target.value)}
            placeholder={field.placeholder}
          />
        );
    }

    return (
      <div key={field.name} className="flex items-start space-x-2">
        <div className="flex-1 space-y-1">
          {field.type !== "checkbox" && (
            <label
              htmlFor={field.name}
              className="block text-sm font-medium text-gray-700"
            >
              {field.label}
            </label>
          )}
          {fieldElement}
          {showError && <p className="text-sm text-red-600">{error}</p>}
        </div>
        <button
          type="button"
          onClick={() => removeField(index)}
          disabled={formFields.length <= 1}
          className={\`mt-6 px-2 py-1 text-sm rounded \${
            formFields.length <= 1
              ? "bg-gray-200 text-gray-400 cursor-not-allowed"
              : "bg-red-500 text-white hover:bg-red-600"
          }\`}
        >
          删除
        </button>
      </div>
    );
  };

  return (
    <div className="space-y-6">
      <div className="bg-white p-6 rounded-lg border border-gray-200">
        <h3 className="text-lg font-semibold mb-4">动态表单构建</h3>

        <div className="mb-4">
          <h4 className="font-medium text-gray-800 mb-2">添加字段：</h4>
          <div className="flex space-x-2">
            <button
              onClick={() => addField("text")}
              className="px-3 py-1 bg-blue-500 text-white rounded hover:bg-blue-600 text-sm"
            >
              文本
            </button>
            <button
              onClick={() => addField("number")}
              className="px-3 py-1 bg-green-500 text-white rounded hover:bg-green-600 text-sm"
            >
              数字
            </button>
            <button
              onClick={() => addField("email")}
              className="px-3 py-1 bg-purple-500 text-white rounded hover:bg-purple-600 text-sm"
            >
              邮箱
            </button>
            <button
              onClick={() => addField("select")}
              className="px-3 py-1 bg-orange-500 text-white rounded hover:bg-orange-600 text-sm"
            >
              选择
            </button>
            <button
              onClick={() => addField("textarea")}
              className="px-3 py-1 bg-teal-500 text-white rounded hover:bg-teal-600 text-sm"
            >
              文本域
            </button>
          </div>
        </div>

        <form
          onSubmit={(e) => {
            e.preventDefault();
            form.submitForm(handleSubmit).catch(console.error);
          }}
          className="space-y-3"
        >
          {formFields.map((field, index) => renderField(field, index))}

          <div className="flex space-x-4 pt-4">
            <button
              type="submit"
              disabled={form.isSubmitting}
              className={\`px-4 py-2 rounded-md text-white font-medium \${
                form.isSubmitting
                  ? "bg-gray-400 cursor-not-allowed"
                  : "bg-blue-500 hover:bg-blue-600"
              }\`}
            >
              {form.isSubmitting ? "提交中..." : "提交"}
            </button>

            <button
              type="button"
              onClick={form.resetForm}
              className="px-4 py-2 bg-gray-500 text-white rounded-md hover:bg-gray-600"
            >
              重置
            </button>
          </div>
        </form>

        {submitResult && (
          <div className="mt-4 p-3 bg-green-50 border border-green-200 rounded">
            <h4 className="font-medium text-green-800 mb-2">提交结果：</h4>
            <pre className="text-sm text-green-700 whitespace-pre-wrap">
              {submitResult}
            </pre>
          </div>
        )}

        <div className="mt-4 p-3 bg-yellow-50 border border-yellow-200 rounded">
          <h4 className="font-medium text-yellow-800 mb-2">当前表单结构：</h4>
          <div className="text-sm text-yellow-700">
            <p>字段数量: {formFields.length}</p>
            <p>字段类型: {formFields.map((f) => f.type).join(", ")}</p>
          </div>
        </div>
      </div>
    </div>
  );
};
`,P=()=>{const[s,y]=f.useState(0),[c,o]=f.useState({}),[p,v]=f.useState(""),n=[{title:"基本信息",fields:[{name:"firstName",label:"名",type:"text",required:!0},{name:"lastName",label:"姓",type:"text",required:!0},{name:"email",label:"邮箱",type:"email",required:!0}]},{title:"联系信息",fields:[{name:"phone",label:"电话",type:"text",required:!0},{name:"address",label:"地址",type:"textarea",required:!0},{name:"city",label:"城市",type:"text",required:!0}]},{title:"偏好设置",fields:[{name:"newsletter",label:"订阅新闻",type:"checkbox"},{name:"notifications",label:"通知方式",type:"select",options:[{value:"email",label:"邮件"},{value:"sms",label:"短信"},{value:"both",label:"两者"}]}]}],b=n[s],m=D(b.fields,c),r=()=>{m.isValid&&(o(t=>({...t,...m.data})),y(t=>Math.min(t+1,n.length-1)))},d=()=>{o(t=>({...t,...m.data})),y(t=>Math.max(t-1,0))},h=async t=>{const x={...c,...t};await new Promise(F=>setTimeout(F,1e3)),v(`多步骤表单提交成功！完整数据：${JSON.stringify(x,null,2)}`)},g=t=>{var i;const x=m.data[t.name]||"",F=m.errors[t.name],k=m.touched[t.name]&&F,a={id:t.name,name:t.name,onBlur:()=>m.touchField(t.name),className:`w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 ${k?"border-red-500":"border-gray-300"}`};switch(t.type){case"textarea":return e.jsx("textarea",{...a,value:x,onChange:l=>m.updateField(t.name,l.target.value),rows:3});case"select":return e.jsxs("select",{...a,value:x,onChange:l=>m.updateField(t.name,l.target.value),children:[e.jsx("option",{value:"",children:"请选择"}),(i=t.options)==null?void 0:i.map(l=>e.jsx("option",{value:l.value,children:l.label},l.value))]});case"checkbox":return e.jsx("input",{...a,type:"checkbox",checked:x,onChange:l=>m.updateField(t.name,l.target.checked),className:"mr-2"});default:return e.jsx("input",{...a,type:t.type,value:x,onChange:l=>m.updateField(t.name,l.target.value)})}};return e.jsx("div",{className:"space-y-6",children:e.jsxs("div",{className:"bg-white p-6 rounded-lg border border-gray-200",children:[e.jsx("h3",{className:"text-lg font-semibold mb-4",children:"多步骤表单"}),e.jsx("div",{className:"mb-6",children:e.jsx("div",{className:"flex items-center justify-between",children:n.map((t,x)=>e.jsxs("div",{className:"flex items-center",children:[e.jsx("div",{className:`w-8 h-8 rounded-full flex items-center justify-center text-sm font-medium ${x<=s?"bg-blue-500 text-white":"bg-gray-200 text-gray-600"}`,children:x+1}),e.jsx("span",{className:`ml-2 text-sm ${x<=s?"text-blue-600 font-medium":"text-gray-500"}`,children:t.title}),x<n.length-1&&e.jsx("div",{className:`w-16 h-0.5 mx-4 ${x<s?"bg-blue-500":"bg-gray-200"}`})]},x))})}),e.jsxs("form",{onSubmit:t=>{t.preventDefault(),s===n.length-1?m.submitForm(h).catch(console.error):r()},className:"space-y-4",children:[e.jsx("h4",{className:"font-medium text-gray-800 mb-3",children:b.title}),b.fields.map(t=>e.jsxs("div",{className:"space-y-1",children:[e.jsxs("label",{htmlFor:t.name,className:"block text-sm font-medium text-gray-700",children:[t.label,t.required&&e.jsx("span",{className:"text-red-500 ml-1",children:"*"})]}),t.type==="checkbox"?e.jsxs("div",{className:"flex items-center",children:[g(t),e.jsx("label",{htmlFor:t.name,className:"text-sm text-gray-700",children:t.label})]}):g(t),m.touched[t.name]&&m.errors[t.name]&&e.jsx("p",{className:"text-sm text-red-600",children:m.errors[t.name]})]},t.name)),e.jsxs("div",{className:"flex justify-between pt-4",children:[e.jsx("button",{type:"button",onClick:d,disabled:s===0,className:`px-4 py-2 rounded-md font-medium ${s===0?"bg-gray-200 text-gray-400 cursor-not-allowed":"bg-gray-500 text-white hover:bg-gray-600"}`,children:"上一步"}),e.jsx("button",{type:"submit",disabled:m.isSubmitting||!m.isValid,className:`px-4 py-2 rounded-md text-white font-medium ${m.isSubmitting||!m.isValid?"bg-gray-400 cursor-not-allowed":"bg-blue-500 hover:bg-blue-600"}`,children:m.isSubmitting?"提交中...":s===n.length-1?"提交":"下一步"})]})]}),p&&e.jsxs("div",{className:"mt-4 p-3 bg-green-50 border border-green-200 rounded",children:[e.jsx("h4",{className:"font-medium text-green-800 mb-2",children:"提交结果："}),e.jsx("pre",{className:"text-sm text-green-700 whitespace-pre-wrap",children:p})]}),e.jsxs("div",{className:"mt-4 p-3 bg-indigo-50 border border-indigo-200 rounded",children:[e.jsx("h4",{className:"font-medium text-indigo-800 mb-2",children:"表单进度："}),e.jsxs("div",{className:"text-sm text-indigo-700",children:[e.jsxs("p",{children:["当前步骤: ",s+1," / ",n.length]}),e.jsxs("p",{children:["已收集数据: ",Object.keys({...c,...m.data}).length," ","个字段"]}),e.jsxs("p",{children:["当前步骤有效: ",m.isValid?"✅":"❌"]})]})]})]})})},V=`import { FormData, FormField, FormStep } from "./types";
import React, { useState } from "react";

import { useForm } from "./useForm";

// 多步骤表单演示组件
export const MultiStepFormDemo: React.FC = () => {
  const [currentStep, setCurrentStep] = useState(0);
  const [formData, setFormData] = useState<FormData>({});
  const [submitResult, setSubmitResult] = useState<string>("");

  const steps: FormStep[] = [
    {
      title: "基本信息",
      fields: [
        {
          name: "firstName",
          label: "名",
          type: "text",
          required: true,
        },
        {
          name: "lastName",
          label: "姓",
          type: "text",
          required: true,
        },
        {
          name: "email",
          label: "邮箱",
          type: "email",
          required: true,
        },
      ],
    },
    {
      title: "联系信息",
      fields: [
        { name: "phone", label: "电话", type: "text", required: true },
        {
          name: "address",
          label: "地址",
          type: "textarea",
          required: true,
        },
        { name: "city", label: "城市", type: "text", required: true },
      ],
    },
    {
      title: "偏好设置",
      fields: [
        {
          name: "newsletter",
          label: "订阅新闻",
          type: "checkbox",
        },
        {
          name: "notifications",
          label: "通知方式",
          type: "select",
          options: [
            { value: "email", label: "邮件" },
            { value: "sms", label: "短信" },
            { value: "both", label: "两者" },
          ],
        },
      ],
    },
  ];

  const currentStepData = steps[currentStep];
  const form = useForm(currentStepData.fields, formData);

  const nextStep = () => {
    if (form.isValid) {
      setFormData((prev) => ({ ...prev, ...form.data }));
      setCurrentStep((prev) => Math.min(prev + 1, steps.length - 1));
    }
  };

  const prevStep = () => {
    setFormData((prev) => ({ ...prev, ...form.data }));
    setCurrentStep((prev) => Math.max(prev - 1, 0));
  };

  const handleSubmit = async (data: FormData) => {
    const finalData = { ...formData, ...data };
    await new Promise((resolve) => setTimeout(resolve, 1000));
    setSubmitResult(
      \`多步骤表单提交成功！完整数据：\${JSON.stringify(finalData, null, 2)}\`
    );
  };

  const renderField = (field: FormField) => {
    const value = form.data[field.name] || "";
    const error = form.errors[field.name];
    const touched = form.touched[field.name];
    const showError = touched && error;

    const commonProps = {
      id: field.name,
      name: field.name,
      onBlur: () => form.touchField(field.name),
      className: \`w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 \${
        showError ? "border-red-500" : "border-gray-300"
      }\`,
    };

    switch (field.type) {
      case "textarea":
        return (
          <textarea
            {...commonProps}
            value={value}
            onChange={(e) => form.updateField(field.name, e.target.value)}
            rows={3}
          />
        );
      case "select":
        return (
          <select
            {...commonProps}
            value={value}
            onChange={(e) => form.updateField(field.name, e.target.value)}
          >
            <option value="">请选择</option>
            {field.options?.map((option) => (
              <option key={option.value} value={option.value}>
                {option.label}
              </option>
            ))}
          </select>
        );
      case "checkbox":
        return (
          <input
            {...commonProps}
            type="checkbox"
            checked={value}
            onChange={(e) => form.updateField(field.name, e.target.checked)}
            className="mr-2"
          />
        );
      default:
        return (
          <input
            {...commonProps}
            type={field.type}
            value={value}
            onChange={(e) => form.updateField(field.name, e.target.value)}
          />
        );
    }
  };

  return (
    <div className="space-y-6">
      <div className="bg-white p-6 rounded-lg border border-gray-200">
        <h3 className="text-lg font-semibold mb-4">多步骤表单</h3>

        {/* 步骤指示器 */}
        <div className="mb-6">
          <div className="flex items-center justify-between">
            {steps.map((step, index) => (
              <div key={index} className="flex items-center">
                <div
                  className={\`w-8 h-8 rounded-full flex items-center justify-center text-sm font-medium \${
                    index <= currentStep
                      ? "bg-blue-500 text-white"
                      : "bg-gray-200 text-gray-600"
                  }\`}
                >
                  {index + 1}
                </div>
                <span
                  className={\`ml-2 text-sm \${
                    index <= currentStep
                      ? "text-blue-600 font-medium"
                      : "text-gray-500"
                  }\`}
                >
                  {step.title}
                </span>
                {index < steps.length - 1 && (
                  <div
                    className={\`w-16 h-0.5 mx-4 \${
                      index < currentStep ? "bg-blue-500" : "bg-gray-200"
                    }\`}
                  />
                )}
              </div>
            ))}
          </div>
        </div>

        <form
          onSubmit={(e) => {
            e.preventDefault();
            if (currentStep === steps.length - 1) {
              form.submitForm(handleSubmit).catch(console.error);
            } else {
              nextStep();
            }
          }}
          className="space-y-4"
        >
          <h4 className="font-medium text-gray-800 mb-3">
            {currentStepData.title}
          </h4>

          {currentStepData.fields.map((field) => (
            <div key={field.name} className="space-y-1">
              <label
                htmlFor={field.name}
                className="block text-sm font-medium text-gray-700"
              >
                {field.label}
                {field.required && <span className="text-red-500 ml-1">*</span>}
              </label>

              {field.type === "checkbox" ? (
                <div className="flex items-center">
                  {renderField(field)}
                  <label htmlFor={field.name} className="text-sm text-gray-700">
                    {field.label}
                  </label>
                </div>
              ) : (
                renderField(field)
              )}

              {form.touched[field.name] && form.errors[field.name] && (
                <p className="text-sm text-red-600">
                  {form.errors[field.name]}
                </p>
              )}
            </div>
          ))}

          <div className="flex justify-between pt-4">
            <button
              type="button"
              onClick={prevStep}
              disabled={currentStep === 0}
              className={\`px-4 py-2 rounded-md font-medium \${
                currentStep === 0
                  ? "bg-gray-200 text-gray-400 cursor-not-allowed"
                  : "bg-gray-500 text-white hover:bg-gray-600"
              }\`}
            >
              上一步
            </button>

            <button
              type="submit"
              disabled={form.isSubmitting || !form.isValid}
              className={\`px-4 py-2 rounded-md text-white font-medium \${
                form.isSubmitting || !form.isValid
                  ? "bg-gray-400 cursor-not-allowed"
                  : "bg-blue-500 hover:bg-blue-600"
              }\`}
            >
              {form.isSubmitting
                ? "提交中..."
                : currentStep === steps.length - 1
                ? "提交"
                : "下一步"}
            </button>
          </div>
        </form>

        {submitResult && (
          <div className="mt-4 p-3 bg-green-50 border border-green-200 rounded">
            <h4 className="font-medium text-green-800 mb-2">提交结果：</h4>
            <pre className="text-sm text-green-700 whitespace-pre-wrap">
              {submitResult}
            </pre>
          </div>
        )}

        <div className="mt-4 p-3 bg-indigo-50 border border-indigo-200 rounded">
          <h4 className="font-medium text-indigo-800 mb-2">表单进度：</h4>
          <div className="text-sm text-indigo-700">
            <p>
              当前步骤: {currentStep + 1} / {steps.length}
            </p>
            <p>
              已收集数据: {Object.keys({ ...formData, ...form.data }).length}{" "}
              个字段
            </p>
            <p>当前步骤有效: {form.isValid ? "✅" : "❌"}</p>
          </div>
        </div>
      </div>
    </div>
  );
};
`,j=`// 表单处理相关的类型定义

// 表单字段配置接口
export interface FormField {
  name: string;
  label: string;
  type:
    | "text"
    | "email"
    | "password"
    | "number"
    | "select"
    | "textarea"
    | "checkbox";
  required?: boolean;
  options?: { value: string; label: string }[];
  validation?: (value: any) => string | null;
  placeholder?: string;
}

// 表单数据接口
export interface FormData {
  [key: string]: any;
}

// 表单错误接口
export interface FormErrors {
  [key: string]: string;
}

// 表单状态接口
export interface FormState {
  data: FormData;
  errors: FormErrors;
  touched: { [key: string]: boolean };
  isSubmitting: boolean;
  isValid: boolean;
}

// 多步骤表单步骤接口
export interface FormStep {
  title: string;
  fields: FormField[];
}`,C=`import { useCallback, useEffect, useMemo, useState } from "react";
import { FormField, FormData, FormErrors, FormState } from "./types";

// 自定义表单处理 Hook
export function useForm(fields: FormField[], initialData: FormData = {}) {
  const [data, setData] = useState<FormData>(initialData);
  const [errors, setErrors] = useState<FormErrors>({});
  const [touched, setTouched] = useState<{ [key: string]: boolean }>({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  // 验证单个字段
  const validateField = useCallback(
    (field: FormField, value: any): string | null => {
      // 必填验证
      if (field.required) {
        if (
          value === undefined ||
          value === null ||
          value === "" ||
          (Array.isArray(value) && value.length === 0)
        ) {
          return \`\${field.label}是必填项\`;
        }
      }

      // 邮箱验证
      if (field.type === "email" && value) {
        const emailRegex = /^[^\\s@]+@[^\\s@]+\\.[^\\s@]+$/;
        if (!emailRegex.test(value)) {
          return "请输入有效的邮箱地址";
        }
      }

      // 数字验证
      if (field.type === "number" && value !== "" && value !== undefined) {
        if (isNaN(Number(value))) {
          return "请输入有效的数字";
        }
      }

      // 自定义验证
      if (field.validation && value !== undefined && value !== "") {
        return field.validation(value);
      }

      return null;
    },
    []
  );

  // 验证所有字段
  const validateForm = useCallback(() => {
    const newErrors: FormErrors = {};
    let isValid = true;

    fields.forEach((field) => {
      const error = validateField(field, data[field.name]);
      if (error) {
        newErrors[field.name] = error;
        isValid = false;
      }
    });

    setErrors(newErrors);
    return isValid;
  }, [fields, data, validateField]);

  // 更新字段值
  const updateField = useCallback((name: string, value: any) => {
    setData((prev) => ({ ...prev, [name]: value }));

    // 如果字段已经被触摸过，立即验证
    if (touched[name]) {
      const field = fields.find((f) => f.name === name);
      if (field) {
        const error = validateField(field, value);
        setErrors((prev) => ({
          ...prev,
          [name]: error || "",
        }));
      }
    }
  }, [fields, touched, validateField]);

  // 标记字段为已触摸
  const touchField = useCallback((name: string) => {
    setTouched((prev) => ({ ...prev, [name]: true }));

    // 触摸时验证字段
    const field = fields.find((f) => f.name === name);
    if (field) {
      const error = validateField(field, data[name]);
      setErrors((prev) => ({
        ...prev,
        [name]: error || "",
      }));
    }
  }, [fields, data, validateField]);

  // 提交表单
  const submitForm = useCallback(
    async (onSubmit: (data: FormData) => Promise<void>) => {
      setIsSubmitting(true);

      // 标记所有字段为已触摸
      const allTouched: { [key: string]: boolean } = {};
      fields.forEach((field) => {
        allTouched[field.name] = true;
      });
      setTouched(allTouched);

      // 验证表单
      const isValid = validateForm();
      if (!isValid) {
        setIsSubmitting(false);
        return;
      }

      try {
        await onSubmit(data);
      } catch (error) {
        console.error("表单提交失败:", error);
      } finally {
        setIsSubmitting(false);
      }
    },
    [data, fields, validateForm]
  );

  // 重置表单
  const resetForm = useCallback(() => {
    setData(initialData);
    setErrors({});
    setTouched({});
    setIsSubmitting(false);
  }, [initialData]);

  // 计算表单是否有效
  const isValid = useMemo(() => {
    return fields.every((field) => {
      const error = validateField(field, data[field.name]);
      return !error;
    });
  }, [fields, data, validateField]);

  // 监听字段变化，清理不存在字段的数据
  useEffect(() => {
    const fieldNames = fields.map((f) => f.name);
    const currentDataKeys = Object.keys(data);
    const keysToRemove = currentDataKeys.filter(
      (key) => !fieldNames.includes(key)
    );

    if (keysToRemove.length > 0) {
      setData((prev) => {
        const newData = { ...prev };
        keysToRemove.forEach((key) => {
          delete newData[key];
        });
        return newData;
      });

      setErrors((prev) => {
        const newErrors = { ...prev };
        keysToRemove.forEach((key) => {
          delete newErrors[key];
        });
        return newErrors;
      });

      setTouched((prev) => {
        const newTouched = { ...prev };
        keysToRemove.forEach((key) => {
          delete newTouched[key];
        });
        return newTouched;
      });
    }
  }, [fields, data]);

  const formState: FormState = {
    data,
    errors,
    touched,
    isSubmitting,
    isValid,
  };

  return {
    ...formState,
    updateField,
    touchField,
    submitForm,
    resetForm,
    validateForm,
  };
}`,M=()=>e.jsx(E,{title:"表单处理场景实践",description:"表单处理是前端开发中最常见的场景之一。本节展示如何使用 React Hooks 构建强大、灵活且用户友好的表单系统，包括基础表单处理、动态表单构建和多步骤表单等实际应用场景。",overview:[{title:"核心概念",items:["表单状态管理","字段验证","动态表单","多步骤表单"]},{title:"主要优势",items:["集中状态管理","类型安全支持","可复用性强","实时验证反馈"]},{title:"适用场景",items:["用户信息收集","数据结构化输入","设置偏好配置","多步骤数据收集"]},{title:"注意事项",items:["避免重复渲染","平衡体验准确性","错误处理机制","服务端验证必要"]}],examples:[{title:"基础表单处理",component:e.jsx(R,{}),description:"展示完整的表单处理流程，包括字段验证、错误提示、状态管理和提交处理。",observationPoints:["实时字段验证和错误提示","表单状态的实时更新（有效性、提交状态等）","不同类型字段的统一处理","提交按钮的智能启用/禁用"],keyPoints:["使用自定义 Hook 统一管理表单状态","实现字段级别的验证和错误处理","支持多种输入类型（文本、邮箱、选择、复选框等）","提供良好的用户反馈和交互体验"],commonTraps:["每次输入都触发验证导致用户体验差","表单状态管理复杂且容易出错","缺乏统一的错误处理机制"],solutions:["在字段失焦时进行验证，避免过度打扰用户","使用自定义 Hook 封装表单逻辑","建立统一的验证和错误处理规范"],importantTips:["表单状态包括数据、错误、触摸状态和提交状态","验证在合适的时机触发，提供最佳用户体验"],preCode:[{title:"types",code:j},{title:"UseForm",code:C}],codeExample:{title:"基础表单处理",code:$}},{title:"动态表单构建",component:e.jsx(T,{}),description:"演示如何构建可以在运行时动态添加和删除字段的表单系统。",observationPoints:["动态添加不同类型的表单字段","字段的实时删除和状态更新","表单结构的动态变化","动态字段的验证和数据收集"],keyPoints:["表单字段配置的数据驱动设计","动态字段的状态管理和同步","支持多种字段类型的扩展性设计","用户友好的字段操作界面"],commonTraps:["动态字段的状态同步问题","字段删除时的数据清理不完整","动态表单的性能问题"],solutions:["使用字段配置数组驱动表单渲染","在字段删除时同步清理相关状态","合理使用 React.memo 优化渲染性能"],importantTips:["动态表单需要灵活的数据结构设计","字段操作要保持状态的一致性"],preCode:[{title:"types",code:j},{title:"UseForm",code:C}],codeExample:{title:"动态表单构建",code:q}},{title:"多步骤表单",component:e.jsx(P,{}),description:"展示如何实现多步骤表单，包括步骤导航、数据保持和进度跟踪。",observationPoints:["清晰的步骤指示器和进度展示","步骤间的数据保持和传递","每个步骤的独立验证","灵活的前进和后退导航"],keyPoints:["步骤化的用户体验设计","跨步骤的数据状态管理","每个步骤的独立验证逻辑","直观的进度指示和导航"],commonTraps:["步骤间数据丢失或不同步","复杂的步骤导航逻辑","用户体验不够流畅"],solutions:["使用全局状态管理跨步骤数据","封装步骤导航逻辑到自定义 Hook","提供清晰的进度指示和操作反馈"],importantTips:["多步骤表单需要良好的状态管理策略","每个步骤都应该有独立的验证和提交逻辑"],preCode:[{title:"types",code:j},{title:"UseForm",code:C}],codeExample:{title:"多步骤表单",code:V}}],tutorial:{concepts:["表单状态包括数据、错误、触摸状态和提交状态","字段验证应该在合适的时机触发，平衡用户体验","自定义 Hook 可以封装复杂的表单逻辑","动态表单需要数据驱动的设计思路","多步骤表单需要跨步骤的状态管理"],steps:["设计表单的数据结构和字段配置","创建自定义 Hook 管理表单状态","实现字段验证和错误处理逻辑","构建可复用的表单组件","添加动态字段的增删功能","实现多步骤表单的导航逻辑","优化表单的性能和用户体验"],tips:["使用 TypeScript 确保表单数据的类型安全","在字段失焦时进行验证，避免过度打扰","提供清晰的错误信息和操作指导","考虑表单的可访问性和键盘导航","合理使用防抖来优化验证性能","为复杂表单提供保存草稿功能"]},interview:{questions:[{question:"如何设计一个可复用的表单处理系统？",answer:"设计可复用表单系统的关键要素：1) 数据驱动的字段配置，通过配置对象定义字段类型、验证规则等；2) 自定义 Hook 封装表单状态管理逻辑；3) 统一的验证机制，支持同步和异步验证；4) 灵活的错误处理和提示系统；5) 类型安全的 TypeScript 支持；6) 可扩展的字段类型系统；7) 性能优化，避免不必要的重新渲染。"},{question:"表单验证的最佳时机是什么？",answer:"表单验证的时机选择需要平衡用户体验和数据准确性：1) 字段失焦时验证 - 用户完成输入后进行验证，不会过度打扰；2) 提交时验证 - 确保所有数据都符合要求；3) 实时验证 - 适用于密码强度、用户名可用性等场景；4) 延迟验证 - 使用防抖技术避免频繁验证；5) 条件验证 - 根据其他字段的值决定是否验证。关键是避免在用户输入过程中频繁显示错误信息。"},{question:"如何处理复杂的表单状态管理？",answer:"复杂表单状态管理的策略：1) 使用 useReducer 管理复杂状态逻辑；2) 分离关注点，将数据、错误、UI状态分开管理；3) 使用 Context 在大型表单中共享状态；4) 实现字段级别的状态管理，支持独立更新；5) 使用 useMemo 和 useCallback 优化性能；6) 建立清晰的状态更新规则和数据流；7) 考虑使用状态管理库（如 Zustand）处理极复杂场景。"},{question:"动态表单的实现难点和解决方案？",answer:"动态表单的主要难点和解决方案：1) 字段配置管理 - 使用数组存储字段配置，支持动态增删；2) 状态同步 - 字段变化时同步更新表单状态和验证规则；3) 性能优化 - 使用 React.memo 和 key 属性优化渲染；4) 类型安全 - 使用泛型和联合类型确保类型安全；5) 数据清理 - 字段删除时清理相关数据和错误；6) 用户体验 - 提供直观的字段操作界面和反馈；7) 持久化 - 考虑将表单配置保存到后端或本地存储。"},{question:"多步骤表单的状态管理策略？",answer:"多步骤表单状态管理的策略：1) 全局状态管理 - 使用 useState 或 Context 管理跨步骤数据；2) 步骤独立验证 - 每个步骤有独立的验证逻辑；3) 数据持久化 - 在步骤切换时保存数据，防止丢失；4) 进度跟踪 - 维护当前步骤和完成状态；5) 导航控制 - 根据验证结果控制步骤跳转；6) 错误处理 - 在相应步骤显示和处理错误；7) 用户体验 - 提供清晰的进度指示和操作反馈。"}],keyPoints:["表单状态管理需要考虑数据、错误、触摸状态和提交状态","验证时机的选择直接影响用户体验","自定义 Hook 是封装表单逻辑的最佳方式","动态表单需要数据驱动的设计思路","多步骤表单需要跨步骤的状态管理策略","性能优化和用户体验同样重要"]},bestPractices:{dos:["使用自定义 Hook 封装表单逻辑，提高复用性","在字段失焦时进行验证，避免过度打扰用户","提供清晰的错误信息和操作指导","使用 TypeScript 确保表单数据的类型安全","合理使用防抖优化验证性能","为复杂表单提供保存草稿功能","考虑表单的可访问性和键盘导航","使用数据驱动的方式构建动态表单"],donts:["不要在用户输入过程中频繁显示错误信息","不要忽略表单的性能优化","不要在表单组件中硬编码业务逻辑","不要忘记处理异步验证的加载状态","不要在多步骤表单中丢失用户数据","不要忽略表单的可访问性要求","不要过度复杂化简单表单的实现","不要忘记清理动态字段的相关状态"],patterns:["自定义 Hook 模式 - 封装表单状态管理逻辑","配置驱动模式 - 使用配置对象定义表单结构","字段组件模式 - 创建可复用的表单字段组件","验证器模式 - 建立统一的验证规则系统","步骤管理模式 - 多步骤表单的导航和状态管理","错误边界模式 - 统一处理表单错误和异常","草稿保存模式 - 自动保存用户输入的数据","条件渲染模式 - 根据条件动态显示表单字段"]}});export{M as default};
