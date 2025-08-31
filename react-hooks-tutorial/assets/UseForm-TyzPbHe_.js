import{r as m,j as e}from"./index-DPG_OKoV.js";import{C as S}from"./ComponentTemplate-HXLvd6Xe.js";function g(o,u={}){const[a,d]=m.useState(()=>{const t={};return Object.keys(o).forEach(s=>{t[s]={value:o[s],error:null,touched:!1}}),t}),r=m.useCallback((t,s)=>{const n=u[t];return n?n.required&&(!s||s.toString().trim()==="")?"此字段为必填项":n.minLength&&s&&s.toString().length<n.minLength?`最少需要 ${n.minLength} 个字符`:n.maxLength&&s&&s.toString().length>n.maxLength?`最多允许 ${n.maxLength} 个字符`:n.pattern&&s&&!n.pattern.test(s.toString())?"格式不正确":n.custom?n.custom(s):null:null},[u]),c=m.useCallback((t,s)=>{d(n=>({...n,[t]:{...n[t],value:s,error:r(t,s),touched:!0}}))},[r]),l=m.useCallback((t,s)=>{d(n=>({...n,[t]:{...n[t],error:s}}))},[]),i=m.useCallback(()=>{const t={...a};let s=!1;return Object.keys(a).forEach(n=>{const p=n,x=r(p,a[p].value);t[p]={...t[p],error:x,touched:!0},x&&(s=!0)}),d(t),!s},[a,r]),h=m.useCallback(()=>{const t={};Object.keys(o).forEach(s=>{t[s]={value:o[s],error:null,touched:!1}}),d(t)},[o]),v=m.useMemo(()=>{const t={};return Object.keys(a).forEach(s=>{t[s]=a[s].value}),t},[a]),y=m.useMemo(()=>{const t={};return Object.keys(a).forEach(s=>{const n=s;t[n]=a[n].error}),t},[a]),j=m.useMemo(()=>Object.values(a).every(t=>!t.error),[a]),N=m.useMemo(()=>Object.values(a).some(t=>t.touched),[a]),w=m.useCallback(t=>({value:a[t].value,onChange:s=>{c(t,s.target.value)},onBlur:()=>{d(s=>({...s,[t]:{...s[t],touched:!0}}))}}),[a,c]);return{values:v,errors:y,isValid:j,isDirty:N,setValue:c,setError:l,validateAll:i,reset:h,getFieldProps:w}}const k=()=>{const o=g({name:"",message:""},{name:{required:!0,minLength:2},message:{required:!0,minLength:10,maxLength:200}}),u=a=>{a.preventDefault(),o.validateAll()&&(alert(`提交成功！
姓名: ${o.values.name}
消息: ${o.values.message}`),o.reset())};return e.jsxs("div",{className:"max-w-sm mx-auto p-4 bg-gray-50 rounded-lg",children:[e.jsx("h4",{className:"font-semibold mb-3",children:"简单表单"}),e.jsxs("form",{onSubmit:u,className:"space-y-3",children:[e.jsxs("div",{children:[e.jsx("input",{type:"text",...o.getFieldProps("name"),placeholder:"姓名",className:"w-full px-3 py-2 border rounded text-sm"}),o.errors.name&&e.jsx("p",{className:"text-red-500 text-xs mt-1",children:o.errors.name})]}),e.jsxs("div",{children:[e.jsx("textarea",{...o.getFieldProps("message"),placeholder:"留言",rows:3,className:"w-full px-3 py-2 border rounded text-sm"}),o.errors.message&&e.jsx("p",{className:"text-red-500 text-xs mt-1",children:o.errors.message})]}),e.jsx("button",{type:"submit",className:"w-full bg-green-500 text-white py-2 rounded text-sm hover:bg-green-600",children:"提交"})]})]})},F=`import React from 'react';
import { useForm } from './useForm';
import { SimpleForm } from './types';

/**
 * 简单表单演示组件
 */
export const SimpleFormDemo: React.FC = () => {
  const form = useForm<SimpleForm>(
    { name: '', message: '' },
    {
      name: { required: true, minLength: 2 },
      message: { required: true, minLength: 10, maxLength: 200 },
    }
  );

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (form.validateAll()) {
      alert(
        \`提交成功！\\n姓名: \${form.values.name}\\n消息: \${form.values.message}\`
      );
      form.reset();
    }
  };

  return (
    <div className="max-w-sm mx-auto p-4 bg-gray-50 rounded-lg">
      <h4 className="font-semibold mb-3">简单表单</h4>
      <form onSubmit={handleSubmit} className="space-y-3">
        <div>
          <input
            type="text"
            {...form.getFieldProps('name')}
            placeholder="姓名"
            className="w-full px-3 py-2 border rounded text-sm"
          />
          {form.errors.name && (
            <p className="text-red-500 text-xs mt-1">{form.errors.name}</p>
          )}
        </div>

        <div>
          <textarea
            {...form.getFieldProps('message')}
            placeholder="留言"
            rows={3}
            className="w-full px-3 py-2 border rounded text-sm"
          />
          {form.errors.message && (
            <p className="text-red-500 text-xs mt-1">{form.errors.message}</p>
          )}
        </div>

        <button
          type="submit"
          className="w-full bg-green-500 text-white py-2 rounded text-sm hover:bg-green-600"
        >
          提交
        </button>
      </form>
    </div>
  );
};`,f=`// 表单验证规则类型\r
export type ValidationRule = {\r
  required?: boolean;\r
  minLength?: number;\r
  maxLength?: number;\r
  pattern?: RegExp;\r
  custom?: (value: any) => string | null;\r
};\r
\r
// 表单字段类型\r
export type FormField = {\r
  value: any;\r
  error: string | null;\r
  touched: boolean;\r
};\r
\r
// 表单状态类型\r
export type FormState<T> = {\r
  [K in keyof T]: FormField;\r
};\r
\r
// 表单 Hook 返回值类型\r
export interface UseFormReturn<T> {\r
  values: T;\r
  errors: Partial<Record<keyof T, string | null>>;\r
  isValid: boolean;\r
  isDirty: boolean;\r
  setValue: (name: keyof T, value: any) => void;\r
  setError: (name: keyof T, error: string | null) => void;\r
  validateAll: () => boolean;\r
  reset: () => void;\r
  getFieldProps: (name: keyof T) => {\r
    value: any;\r
    onChange: (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => void;\r
    onBlur: () => void;\r
  };\r
}\r
\r
// 用户注册表单接口\r
export interface UserRegistrationForm {\r
  username: string;\r
  email: string;\r
  password: string;\r
  confirmPassword: string;\r
  age: string;\r
  terms: boolean;\r
}\r
\r
// 简单表单接口\r
export interface SimpleForm {\r
  name: string;\r
  message: string;\r
}`,P=()=>{const[o,u]=m.useState(0),[a,d]=m.useState(!1),r=g({username:"",email:"",password:"",confirmPassword:"",age:"",terms:!1},{username:{required:!0,minLength:3,maxLength:20,pattern:/^[a-zA-Z0-9_]+$/},email:{required:!0,pattern:/^[^\s@]+@[^\s@]+\.[^\s@]+$/},password:{required:!0,minLength:6,custom:l=>/(?=.*[a-z])(?=.*[A-Z])(?=.*\d)/.test(l)?null:"密码必须包含大小写字母和数字"},confirmPassword:{required:!0,custom:l=>l!==r.values.password?"密码确认不匹配":null},age:{required:!0,custom:l=>{const i=parseInt(l);return isNaN(i)||i<18||i>100?"年龄必须在 18-100 之间":null}},terms:{custom:l=>l?null:"必须同意服务条款"}}),c=async l=>{l.preventDefault(),r.validateAll()&&(d(!0),u(i=>i+1),await new Promise(i=>setTimeout(i,2e3)),d(!1),alert("注册成功！"),r.reset())};return e.jsxs("div",{className:"max-w-md mx-auto p-6 bg-white rounded-lg border",children:[e.jsx("h3",{className:"text-lg font-semibold mb-4",children:"用户注册表单"}),e.jsxs("div",{className:"mb-4 p-3 bg-gray-50 rounded text-sm",children:[e.jsxs("div",{children:["表单状态: ",r.isValid?"✅ 有效":"❌ 无效"]}),e.jsxs("div",{children:["是否修改: ",r.isDirty?"✅ 已修改":"❌ 未修改"]}),e.jsxs("div",{children:["提交次数: ",o]})]}),e.jsxs("form",{onSubmit:c,className:"space-y-4",children:[e.jsxs("div",{children:[e.jsx("label",{className:"block text-sm font-medium mb-1",children:"用户名"}),e.jsx("input",{type:"text",...r.getFieldProps("username"),className:`w-full px-3 py-2 border rounded-md ${r.errors.username?"border-red-500":"border-gray-300"}`,placeholder:"请输入用户名"}),r.errors.username&&e.jsx("p",{className:"text-red-500 text-sm mt-1",children:r.errors.username})]}),e.jsxs("div",{children:[e.jsx("label",{className:"block text-sm font-medium mb-1",children:"邮箱"}),e.jsx("input",{type:"email",...r.getFieldProps("email"),className:`w-full px-3 py-2 border rounded-md ${r.errors.email?"border-red-500":"border-gray-300"}`,placeholder:"请输入邮箱"}),r.errors.email&&e.jsx("p",{className:"text-red-500 text-sm mt-1",children:r.errors.email})]}),e.jsxs("div",{children:[e.jsx("label",{className:"block text-sm font-medium mb-1",children:"密码"}),e.jsx("input",{type:"password",...r.getFieldProps("password"),className:`w-full px-3 py-2 border rounded-md ${r.errors.password?"border-red-500":"border-gray-300"}`,placeholder:"请输入密码"}),r.errors.password&&e.jsx("p",{className:"text-red-500 text-sm mt-1",children:r.errors.password})]}),e.jsxs("div",{children:[e.jsx("label",{className:"block text-sm font-medium mb-1",children:"确认密码"}),e.jsx("input",{type:"password",...r.getFieldProps("confirmPassword"),className:`w-full px-3 py-2 border rounded-md ${r.errors.confirmPassword?"border-red-500":"border-gray-300"}`,placeholder:"请再次输入密码"}),r.errors.confirmPassword&&e.jsx("p",{className:"text-red-500 text-sm mt-1",children:r.errors.confirmPassword})]}),e.jsxs("div",{children:[e.jsx("label",{className:"block text-sm font-medium mb-1",children:"年龄"}),e.jsx("input",{type:"number",...r.getFieldProps("age"),className:`w-full px-3 py-2 border rounded-md ${r.errors.age?"border-red-500":"border-gray-300"}`,placeholder:"请输入年龄"}),r.errors.age&&e.jsx("p",{className:"text-red-500 text-sm mt-1",children:r.errors.age})]}),e.jsxs("div",{children:[e.jsxs("label",{className:"flex items-center",children:[e.jsx("input",{type:"checkbox",checked:r.values.terms,onChange:l=>r.setValue("terms",l.target.checked),className:"mr-2"}),e.jsx("span",{className:"text-sm",children:"我同意服务条款和隐私政策"})]}),r.errors.terms&&e.jsx("p",{className:"text-red-500 text-sm mt-1",children:r.errors.terms})]}),e.jsxs("div",{className:"flex gap-2",children:[e.jsx("button",{type:"submit",disabled:a,className:"flex-1 bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 disabled:opacity-50",children:a?"注册中...":"注册"}),e.jsx("button",{type:"button",onClick:r.reset,className:"px-4 py-2 border border-gray-300 rounded-md hover:bg-gray-50",children:"重置"})]})]})]})},T=`import React, { useState } from 'react';\r
import { useForm } from './useForm';\r
import { UserRegistrationForm } from './types';\r
\r
/**\r
 * 用户注册表单演示组件\r
 */\r
export const UserRegistrationDemo: React.FC = () => {\r
  const [submitCount, setSubmitCount] = useState(0);\r
  const [isSubmitting, setIsSubmitting] = useState(false);\r
\r
  const form = useForm<UserRegistrationForm>(\r
    {\r
      username: '',\r
      email: '',\r
      password: '',\r
      confirmPassword: '',\r
      age: '',\r
      terms: false,\r
    },\r
    {\r
      username: {\r
        required: true,\r
        minLength: 3,\r
        maxLength: 20,\r
        pattern: /^[a-zA-Z0-9_]+$/,\r
      },\r
      email: {\r
        required: true,\r
        pattern: /^[^\\s@]+@[^\\s@]+\\.[^\\s@]+$/,\r
      },\r
      password: {\r
        required: true,\r
        minLength: 6,\r
        custom: (value) => {\r
          if (!/(?=.*[a-z])(?=.*[A-Z])(?=.*\\d)/.test(value)) {\r
            return '密码必须包含大小写字母和数字';\r
          }\r
          return null;\r
        },\r
      },\r
      confirmPassword: {\r
        required: true,\r
        custom: (value) => {\r
          if (value !== form.values.password) {\r
            return '密码确认不匹配';\r
          }\r
          return null;\r
        },\r
      },\r
      age: {\r
        required: true,\r
        custom: (value) => {\r
          const age = parseInt(value);\r
          if (isNaN(age) || age < 18 || age > 100) {\r
            return '年龄必须在 18-100 之间';\r
          }\r
          return null;\r
        },\r
      },\r
      terms: {\r
        custom: (value) => {\r
          if (!value) {\r
            return '必须同意服务条款';\r
          }\r
          return null;\r
        },\r
      },\r
    }\r
  );\r
\r
  const handleSubmit = async (e: React.FormEvent) => {\r
    e.preventDefault();\r
\r
    if (!form.validateAll()) {\r
      return;\r
    }\r
\r
    setIsSubmitting(true);\r
    setSubmitCount((prev) => prev + 1);\r
\r
    // 模拟 API 调用\r
    await new Promise((resolve) => setTimeout(resolve, 2000));\r
\r
    setIsSubmitting(false);\r
    alert('注册成功！');\r
    form.reset();\r
  };\r
\r
  return (\r
    <div className="max-w-md mx-auto p-6 bg-white rounded-lg border">\r
      <h3 className="text-lg font-semibold mb-4">用户注册表单</h3>\r
\r
      <div className="mb-4 p-3 bg-gray-50 rounded text-sm">\r
        <div>表单状态: {form.isValid ? '✅ 有效' : '❌ 无效'}</div>\r
        <div>是否修改: {form.isDirty ? '✅ 已修改' : '❌ 未修改'}</div>\r
        <div>提交次数: {submitCount}</div>\r
      </div>\r
\r
      <form onSubmit={handleSubmit} className="space-y-4">\r
        <div>\r
          <label className="block text-sm font-medium mb-1">用户名</label>\r
          <input\r
            type="text"\r
            {...form.getFieldProps('username')}\r
            className={\`w-full px-3 py-2 border rounded-md \${\r
              form.errors.username ? 'border-red-500' : 'border-gray-300'\r
            }\`}\r
            placeholder="请输入用户名"\r
          />\r
          {form.errors.username && (\r
            <p className="text-red-500 text-sm mt-1">{form.errors.username}</p>\r
          )}\r
        </div>\r
\r
        <div>\r
          <label className="block text-sm font-medium mb-1">邮箱</label>\r
          <input\r
            type="email"\r
            {...form.getFieldProps('email')}\r
            className={\`w-full px-3 py-2 border rounded-md \${\r
              form.errors.email ? 'border-red-500' : 'border-gray-300'\r
            }\`}\r
            placeholder="请输入邮箱"\r
          />\r
          {form.errors.email && (\r
            <p className="text-red-500 text-sm mt-1">{form.errors.email}</p>\r
          )}\r
        </div>\r
\r
        <div>\r
          <label className="block text-sm font-medium mb-1">密码</label>\r
          <input\r
            type="password"\r
            {...form.getFieldProps('password')}\r
            className={\`w-full px-3 py-2 border rounded-md \${\r
              form.errors.password ? 'border-red-500' : 'border-gray-300'\r
            }\`}\r
            placeholder="请输入密码"\r
          />\r
          {form.errors.password && (\r
            <p className="text-red-500 text-sm mt-1">{form.errors.password}</p>\r
          )}\r
        </div>\r
\r
        <div>\r
          <label className="block text-sm font-medium mb-1">确认密码</label>\r
          <input\r
            type="password"\r
            {...form.getFieldProps('confirmPassword')}\r
            className={\`w-full px-3 py-2 border rounded-md \${\r
              form.errors.confirmPassword ? 'border-red-500' : 'border-gray-300'\r
            }\`}\r
            placeholder="请再次输入密码"\r
          />\r
          {form.errors.confirmPassword && (\r
            <p className="text-red-500 text-sm mt-1">\r
              {form.errors.confirmPassword}\r
            </p>\r
          )}\r
        </div>\r
\r
        <div>\r
          <label className="block text-sm font-medium mb-1">年龄</label>\r
          <input\r
            type="number"\r
            {...form.getFieldProps('age')}\r
            className={\`w-full px-3 py-2 border rounded-md \${\r
              form.errors.age ? 'border-red-500' : 'border-gray-300'\r
            }\`}\r
            placeholder="请输入年龄"\r
          />\r
          {form.errors.age && (\r
            <p className="text-red-500 text-sm mt-1">{form.errors.age}</p>\r
          )}\r
        </div>\r
\r
        <div>\r
          <label className="flex items-center">\r
            <input\r
              type="checkbox"\r
              checked={form.values.terms}\r
              onChange={(e) => form.setValue('terms', e.target.checked)}\r
              className="mr-2"\r
            />\r
            <span className="text-sm">我同意服务条款和隐私政策</span>\r
          </label>\r
          {form.errors.terms && (\r
            <p className="text-red-500 text-sm mt-1">{form.errors.terms}</p>\r
          )}\r
        </div>\r
\r
        <div className="flex gap-2">\r
          <button\r
            type="submit"\r
            disabled={isSubmitting}\r
            className="flex-1 bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 disabled:opacity-50"\r
          >\r
            {isSubmitting ? '注册中...' : '注册'}\r
          </button>\r
          <button\r
            type="button"\r
            onClick={form.reset}\r
            className="px-4 py-2 border border-gray-300 rounded-md hover:bg-gray-50"\r
          >\r
            重置\r
          </button>\r
        </div>\r
      </form>\r
    </div>\r
  );\r
};`,b=`import { FormState, UseFormReturn, ValidationRule } from "./types";
import { useCallback, useMemo, useState } from "react";

/**
 * 自定义表单处理 Hook
 * @param initialValues 表单初始值
 * @param validationRules 验证规则
 * @returns 表单状态和操作方法
 */
export function useForm<T extends Record<string, any>>(
  initialValues: T,
  validationRules: Partial<Record<keyof T, ValidationRule>> = {}
): UseFormReturn<T> {
  // 初始化表单状态
  const [formState, setFormState] = useState<FormState<T>>(() => {
    const state = {} as FormState<T>;
    Object.keys(initialValues).forEach((key) => {
      state[key as keyof T] = {
        value: initialValues[key],
        error: null,
        touched: false,
      };
    });
    return state;
  });

  // 验证单个字段
  const validateField = useCallback(
    (name: keyof T, value: any): string | null => {
      const rules = validationRules[name];
      if (!rules) return null;

      // 必填验证
      if (rules.required && (!value || value.toString().trim() === "")) {
        return "此字段为必填项";
      }

      // 最小长度验证
      if (
        rules.minLength &&
        value &&
        value.toString().length < rules.minLength
      ) {
        return \`最少需要 \${rules.minLength} 个字符\`;
      }

      // 最大长度验证
      if (
        rules.maxLength &&
        value &&
        value.toString().length > rules.maxLength
      ) {
        return \`最多允许 \${rules.maxLength} 个字符\`;
      }

      // 正则验证
      if (rules.pattern && value && !rules.pattern.test(value.toString())) {
        return "格式不正确";
      }

      // 自定义验证
      if (rules.custom) {
        return rules.custom(value);
      }

      return null;
    },
    [validationRules]
  );

  // 设置字段值
  const setValue = useCallback(
    (name: keyof T, value: any) => {
      setFormState((prev) => ({
        ...prev,
        [name]: {
          ...prev[name],
          value,
          error: validateField(name, value),
          touched: true,
        },
      }));
    },
    [validateField]
  );

  // 设置字段错误
  const setError = useCallback((name: keyof T, error: string | null) => {
    setFormState((prev) => ({
      ...prev,
      [name]: {
        ...prev[name],
        error,
      },
    }));
  }, []);

  // 验证所有字段
  const validateAll = useCallback(() => {
    const newState = { ...formState };
    let hasErrors = false;

    Object.keys(formState).forEach((key) => {
      const fieldKey = key as keyof T;
      const error = validateField(fieldKey, formState[fieldKey].value);
      newState[fieldKey] = {
        ...newState[fieldKey],
        error,
        touched: true,
      };
      if (error) hasErrors = true;
    });

    setFormState(newState);
    return !hasErrors;
  }, [formState, validateField]);

  // 重置表单
  const reset = useCallback(() => {
    const state = {} as FormState<T>;
    Object.keys(initialValues).forEach((key) => {
      state[key as keyof T] = {
        value: initialValues[key],
        error: null,
        touched: false,
      };
    });
    setFormState(state);
  }, [initialValues]);

  // 计算表单值
  const values = useMemo(() => {
    const vals = {} as T;
    Object.keys(formState).forEach((key) => {
      vals[key as keyof T] = formState[key as keyof T].value;
    });
    return vals;
  }, [formState]);

  // 计算错误信息
  const errors = useMemo(() => {
    const errs = {} as Partial<Record<keyof T, string | null>>;
    Object.keys(formState).forEach((key) => {
      const fieldKey = key as keyof T;
      errs[fieldKey] = formState[fieldKey].error;
    });
    return errs;
  }, [formState]);

  // 计算表单是否有效
  const isValid = useMemo(() => {
    return Object.values(formState).every((field) => !field.error);
  }, [formState]);

  // 计算表单是否已修改
  const isDirty = useMemo(() => {
    return Object.values(formState).some((field) => field.touched);
  }, [formState]);

  // 获取字段属性
  const getFieldProps = useCallback(
    (name: keyof T) => ({
      value: formState[name].value,
      onChange: (
        e: React.ChangeEvent<
          HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
        >
      ) => {
        setValue(name, e.target.value);
      },
      onBlur: () => {
        setFormState((prev) => ({
          ...prev,
          [name]: {
            ...prev[name],
            touched: true,
          },
        }));
      },
    }),
    [formState, setValue]
  );

  return {
    values,
    errors,
    isValid,
    isDirty,
    setValue,
    setError,
    validateAll,
    reset,
    getFieldProps,
  };
}
`,R=()=>e.jsx(S,{title:"表单处理 Hook",description:"学习如何创建自定义的表单处理 Hook，实现表单状态管理、验证和提交功能。",overview:e.jsx("div",{className:"space-y-4",children:e.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-6",children:[e.jsxs("div",{className:"bg-blue-50 p-4 rounded-lg border border-blue-200",children:[e.jsx("h3",{className:"font-semibold text-blue-800 mb-2",children:"🎯 核心概念"}),e.jsxs("ul",{className:"text-sm text-blue-700 space-y-1",children:[e.jsx("li",{children:"• 表单状态管理"}),e.jsx("li",{children:"• 字段验证机制"}),e.jsx("li",{children:"• 错误处理策略"}),e.jsx("li",{children:"• 表单提交逻辑"})]})]}),e.jsxs("div",{className:"bg-green-50 p-4 rounded-lg border border-green-200",children:[e.jsx("h3",{className:"font-semibold text-green-800 mb-2",children:"✨ 主要优势"}),e.jsxs("ul",{className:"text-sm text-green-700 space-y-1",children:[e.jsx("li",{children:"• 统一的表单状态管理"}),e.jsx("li",{children:"• 灵活的验证规则配置"}),e.jsx("li",{children:"• 良好的用户体验"}),e.jsx("li",{children:"• 代码复用性高"})]})]}),e.jsxs("div",{className:"bg-yellow-50 p-4 rounded-lg border border-yellow-200",children:[e.jsx("h3",{className:"font-semibold text-yellow-800 mb-2",children:"🎪 适用场景"}),e.jsxs("ul",{className:"text-sm text-yellow-700 space-y-1",children:[e.jsx("li",{children:"• 用户注册和登录表单"}),e.jsx("li",{children:"• 数据录入和编辑表单"}),e.jsx("li",{children:"• 搜索和筛选表单"}),e.jsx("li",{children:"• 配置和设置表单"})]})]}),e.jsxs("div",{className:"bg-red-50 p-4 rounded-lg border border-red-200",children:[e.jsx("h3",{className:"font-semibold text-red-800 mb-2",children:"⚠️ 注意事项"}),e.jsxs("ul",{className:"text-sm text-red-700 space-y-1",children:[e.jsx("li",{children:"• 合理设计验证规则"}),e.jsx("li",{children:"• 提供清晰的错误提示"}),e.jsx("li",{children:"• 考虑表单的性能优化"}),e.jsx("li",{children:"• 处理异步验证场景"})]})]})]})}),examples:[{title:"完整的用户注册表单",component:e.jsx(P,{}),description:"展示一个包含多种验证规则的完整表单实现。",observationPoints:["实时验证字段输入，显示错误信息","表单状态实时更新（有效性、是否修改）","提交时进行完整验证","支持表单重置功能"],keyPoints:["useForm Hook 封装了表单的所有逻辑","支持多种验证规则（必填、长度、正则、自定义）","getFieldProps 简化了字段属性绑定","提供了完整的表单状态信息"],commonTraps:["忘记设置字段的 touched 状态","验证规则过于复杂或不合理","没有处理异步验证","表单重置后状态不一致"],solutions:["在 onBlur 事件中设置 touched 状态","设计简洁明确的验证规则","使用 useEffect 处理异步验证","确保重置时恢复初始状态"],importantTips:["表单会实时显示验证状态和错误信息","只有在字段被触摸后才显示错误","提交按钮会根据表单有效性自动禁用","支持复杂的自定义验证逻辑"],preCode:[{title:"types",code:f},{title:"useForm",code:b}],codeExample:{title:"完整的用户注册表单",code:T}},{title:"简单表单示例",component:e.jsx(k,{}),description:"展示一个简化的表单实现，适用于简单场景。",observationPoints:["简化的表单结构和验证","基础的字段验证功能","清晰的错误提示","简洁的提交流程"],keyPoints:["适用于简单的表单场景","保持了核心的验证功能","代码简洁易懂","易于扩展和定制"],preCode:[{title:"types",code:f},{title:"useForm",code:b}],codeExample:{title:"简单表单示例",code:F}}],tutorial:{concepts:["表单状态包括字段值、错误信息和触摸状态","验证规则可以是同步的或异步的","getFieldProps 方法简化了字段属性的绑定","表单的有效性基于所有字段的验证结果","touched 状态用于控制错误信息的显示时机"],steps:["定义表单的初始值和验证规则","实现字段值的更新和验证逻辑","创建统一的字段属性绑定方法","实现表单的提交和重置功能","添加表单状态的计算属性","处理异步验证和错误显示"],tips:["使用 useCallback 优化验证函数的性能","合理设计验证规则，避免过于复杂","提供清晰的错误提示信息","考虑表单的可访问性","使用 TypeScript 提供类型安全"]},interview:{questions:[{question:"如何设计一个通用的表单 Hook？",answer:"通用表单 Hook 应该包括：1) 灵活的初始值配置；2) 可扩展的验证规则系统；3) 统一的字段状态管理；4) 简化的属性绑定方法；5) 完整的表单状态计算；6) 异步验证支持。"},{question:"表单验证的最佳实践是什么？",answer:"最佳实践包括：1) 实时验证用户输入；2) 在字段失焦时显示错误；3) 提供清晰的错误提示；4) 支持自定义验证规则；5) 处理异步验证；6) 考虑用户体验和性能。"},{question:"如何处理复杂的表单场景？",answer:"复杂表单可以通过：1) 分步骤或分页处理；2) 动态字段和条件验证；3) 字段间的依赖关系处理；4) 异步数据加载和验证；5) 表单状态的持久化；6) 错误恢复机制。"},{question:"表单性能优化有哪些方法？",answer:"性能优化方法：1) 使用 useCallback 缓存验证函数；2) 避免不必要的重新渲染；3) 延迟验证或防抖处理；4) 合理的字段更新策略；5) 虚拟化处理大型表单；6) 异步验证的优化。"}],keyPoints:["表单 Hook 应该提供完整的状态管理功能","验证规则要灵活且易于扩展","用户体验是表单设计的重要考虑因素","性能优化对于复杂表单很重要","类型安全可以减少运行时错误"]},bestPractices:{dos:["提供清晰的验证规则和错误提示","使用 TypeScript 确保类型安全","实现合理的验证时机","优化表单的性能","考虑表单的可访问性"],donts:["不要过度复杂化验证逻辑","不要忽视用户体验","不要忘记处理边界情况","不要让表单状态过于复杂","不要忽视表单的性能问题"],patterns:["统一的表单状态管理模式","可配置的验证规则模式","字段属性绑定模式","异步验证处理模式","表单向导和分步模式"]}});export{R as default};
