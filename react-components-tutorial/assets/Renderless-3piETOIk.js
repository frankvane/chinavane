import{j as e,r as i,R as j}from"./index-H7t66yxh.js";import{C as w}from"./ComponentTemplate-bNJaV0ol.js";const C=({condition:t,children:s,fallback:a=null})=>t?e.jsx(e.Fragment,{children:s}):e.jsx(e.Fragment,{children:a}),b=({role:t,requiredRole:s,children:a,fallback:r=null})=>(Array.isArray(s)?s.includes(t):t===s)?e.jsx(e.Fragment,{children:a}):e.jsx(e.Fragment,{children:r}),k=({data:t,loading:s=!1,error:a=null,children:r})=>{const d=!t||Array.isArray(t)&&t.length===0;return e.jsx(e.Fragment,{children:r({data:t,loading:s,error:a,isEmpty:d})})};function S({fetcher:t,dependencies:s=[],children:a}){const[r,d]=i.useState(null),[n,o]=i.useState(!0),[l,m]=i.useState(null),c=async()=>{try{o(!0),m(null);const p=await t();d(p)}catch(p){m(p instanceof Error?p:new Error("Unknown error"))}finally{o(!1)}};return i.useEffect(()=>{c()},s),e.jsx(e.Fragment,{children:a({data:r,loading:n,error:l,refetch:c})})}function R({initialState:t,children:s}){const[a,r]=i.useState(t),d=()=>{r(t)};return e.jsx(e.Fragment,{children:s({state:a,setState:r,resetState:d})})}function P({initialValues:t,validate:s,children:a}){const[r,d]=i.useState(t),[n,o]=i.useState({}),l=s?s(r):{},m=Object.keys(l).length===0,c=(u,h)=>{d(f=>({...f,[u]:h}))},p=u=>{o(h=>({...h,[u]:!0}))},y=()=>{d(t),o({})};return e.jsx(e.Fragment,{children:a({values:r,errors:l,touched:n,isValid:m,setValue:c,setTouched:p,reset:y})})}const g=({children:t,enhance:s})=>e.jsx(e.Fragment,{children:i.Children.map(t,(a,r)=>i.isValidElement(a)?s(a,r):a)}),v=({onChildClick:t,children:s})=>e.jsx(g,{enhance:(a,r)=>i.cloneElement(a,{...a.props,onClick:d=>{a.props.onClick&&a.props.onClick(d),t(r,a.props)}}),children:s}),x=({className:t,children:s})=>e.jsx(g,{enhance:(a,r)=>{const d=a.props.className||"";return i.cloneElement(a,{...a.props,className:`${d} ${t}`.trim()})},children:s}),E=()=>{const[t,s]=i.useState(!1),[a,r]=i.useState("guest");return e.jsxs("div",{className:"space-y-4",children:[e.jsxs("div",{className:"bg-gray-50 p-4 rounded-lg mb-4",children:[e.jsx("h4",{className:"font-medium mb-2",children:"条件渲染示例"}),e.jsx("p",{className:"text-sm text-gray-600",children:"根据登录状态和用户角色动态显示不同的内容。"})]}),e.jsxs("div",{className:"flex space-x-4",children:[e.jsx("button",{onClick:()=>s(!t),className:`px-4 py-2 rounded ${t?"bg-red-500 text-white":"bg-green-500 text-white"}`,children:t?"登出":"登录"}),e.jsxs("select",{value:a,onChange:d=>r(d.target.value),className:"px-3 py-2 border border-gray-300 rounded",children:[e.jsx("option",{value:"guest",children:"访客"}),e.jsx("option",{value:"user",children:"用户"}),e.jsx("option",{value:"admin",children:"管理员"})]})]}),e.jsx(C,{condition:t,fallback:e.jsx("div",{className:"bg-red-50 border border-red-200 p-4 rounded",children:e.jsx("div",{className:"text-red-700",children:"❌ 请先登录以访问系统"})}),children:e.jsxs("div",{className:"bg-green-50 border border-green-200 p-4 rounded",children:[e.jsx("h4",{className:"font-medium text-green-800 mb-2",children:"✅ 欢迎回来！"}),e.jsxs("p",{className:"text-green-700 mb-3",children:["当前角色: ",a]}),e.jsx(b,{role:a,requiredRole:["admin","user"],fallback:e.jsx("div",{className:"bg-gray-100 p-3 rounded",children:e.jsx("p",{className:"text-gray-600",children:"🔒 访客权限有限，只能浏览基础内容"})}),children:e.jsx("div",{className:"bg-blue-50 p-3 rounded mb-2",children:e.jsx("p",{className:"text-blue-700",children:"🎯 您可以访问用户功能区域"})})}),e.jsx(b,{role:a,requiredRole:"admin",fallback:e.jsx("div",{className:"bg-yellow-50 p-3 rounded",children:e.jsx("p",{className:"text-yellow-700",children:"⚠️ 管理员功能需要更高权限"})}),children:e.jsx("div",{className:"bg-purple-50 p-3 rounded",children:e.jsx("p",{className:"text-purple-700",children:"👑 您拥有管理员权限，可以访问所有功能"})})})]})})]})},N=[{id:1,name:"张三",email:"zhangsan@example.com",role:"开发者"},{id:2,name:"李四",email:"lisi@example.com",role:"设计师"},{id:3,name:"王五",email:"wangwu@example.com",role:"产品经理"}],T=()=>new Promise((t,s)=>{setTimeout(()=>{Math.random()>.2?t(N):s(new Error("网络错误：无法获取用户数据"))},1500)}),I=()=>{const[t]=i.useState(N),[s,a]=i.useState(!1),[r,d]=i.useState(0);return e.jsxs("div",{className:"space-y-6",children:[e.jsxs("div",{className:"bg-gray-50 p-4 rounded-lg",children:[e.jsx("h4",{className:"font-medium mb-2",children:"数据注入示例"}),e.jsx("p",{className:"text-sm text-gray-600",children:"展示如何使用无渲染组件处理数据状态和异步数据获取。"})]}),e.jsxs("div",{className:"border border-gray-200 rounded-lg p-4",children:[e.jsx("h5",{className:"font-medium mb-3",children:"静态数据提供者"}),e.jsx("div",{className:"flex space-x-2 mb-3",children:e.jsx("button",{onClick:()=>a(!s),className:"px-3 py-1 bg-blue-500 text-white rounded text-sm",children:s?"显示数据":"显示空数据"})}),e.jsx(k,{data:s?[]:t,loading:!1,error:null,children:({data:n,loading:o,error:l,isEmpty:m})=>e.jsxs("div",{className:"bg-gray-50 p-3 rounded",children:[o&&e.jsx("div",{className:"text-blue-600",children:"🔄 数据加载中..."}),l&&e.jsxs("div",{className:"text-red-600",children:["❌ 错误: ",l.message]}),m&&!o&&!l&&e.jsx("div",{className:"text-gray-500",children:"📭 暂无数据"}),!m&&!o&&!l&&e.jsxs("div",{children:[e.jsxs("div",{className:"text-green-600 mb-2",children:["✅ 成功加载 ",n.length," 条用户数据"]}),e.jsx("div",{className:"space-y-1",children:n.map(c=>e.jsxs("div",{className:"bg-white p-2 rounded border text-sm",children:[e.jsx("span",{className:"font-medium",children:c.name})," -",e.jsx("span",{className:"text-gray-600 ml-1",children:c.role})]},c.id))})]})]})})]}),e.jsxs("div",{className:"border border-gray-200 rounded-lg p-4",children:[e.jsx("h5",{className:"font-medium mb-3",children:"异步数据获取"}),e.jsx("button",{onClick:()=>d(n=>n+1),className:"px-3 py-1 bg-green-500 text-white rounded text-sm mb-3",children:"🔄 重新获取数据"}),e.jsx(S,{fetcher:T,dependencies:[r],children:({data:n,loading:o,error:l,refetch:m})=>e.jsxs("div",{className:"bg-gray-50 p-3 rounded",children:[o&&e.jsxs("div",{className:"flex items-center space-x-2 text-blue-600",children:[e.jsx("div",{className:"animate-spin w-4 h-4 border-2 border-blue-600 border-t-transparent rounded-full"}),e.jsx("span",{children:"正在获取用户数据..."})]}),l&&e.jsxs("div",{className:"space-y-2",children:[e.jsxs("div",{className:"text-red-600",children:["❌ ",l.message]}),e.jsx("button",{onClick:m,className:"px-2 py-1 bg-red-500 text-white rounded text-xs",children:"重试"})]}),n&&!o&&!l&&e.jsxs("div",{children:[e.jsxs("div",{className:"text-green-600 mb-2",children:["✅ 异步加载完成，共 ",n.length," 条数据"]}),e.jsx("div",{className:"grid grid-cols-1 gap-2",children:n.map(c=>e.jsxs("div",{className:"bg-white p-3 rounded border",children:[e.jsx("div",{className:"font-medium",children:c.name}),e.jsx("div",{className:"text-sm text-gray-600",children:c.email}),e.jsx("div",{className:"text-xs text-blue-600",children:c.role})]},c.id))})]})]})},r)]})]})},D=()=>e.jsxs("div",{className:"space-y-6",children:[e.jsxs("div",{className:"bg-gray-50 p-4 rounded-lg",children:[e.jsx("h4",{className:"font-medium mb-2",children:"状态管理示例"}),e.jsx("p",{className:"text-sm text-gray-600",children:"展示如何使用无渲染组件管理复杂状态和表单验证。"})]}),e.jsxs("div",{className:"border border-gray-200 rounded-lg p-4",children:[e.jsx("h5",{className:"font-medium mb-3",children:"通用状态管理"}),e.jsx(R,{initialState:{count:0,name:"React"},children:({state:t,setState:s,resetState:a})=>e.jsxs("div",{className:"space-y-3",children:[e.jsxs("div",{className:"bg-blue-50 p-3 rounded",children:[e.jsx("div",{className:"text-sm text-gray-600 mb-2",children:"当前状态:"}),e.jsx("div",{className:"font-mono text-sm bg-white p-2 rounded border",children:JSON.stringify(t,null,2)})]}),e.jsxs("div",{className:"flex space-x-2",children:[e.jsx("button",{onClick:()=>s(r=>({...r,count:r.count+1})),className:"px-3 py-1 bg-green-500 text-white rounded text-sm",children:"计数 +1"}),e.jsx("button",{onClick:()=>s(r=>({...r,count:r.count-1})),className:"px-3 py-1 bg-red-500 text-white rounded text-sm",children:"计数 -1"}),e.jsx("button",{onClick:()=>s(r=>({...r,name:r.name==="React"?"Vue":"React"})),className:"px-3 py-1 bg-blue-500 text-white rounded text-sm",children:"切换框架"}),e.jsx("button",{onClick:a,className:"px-3 py-1 bg-gray-500 text-white rounded text-sm",children:"重置状态"})]})]})})]}),e.jsxs("div",{className:"border border-gray-200 rounded-lg p-4",children:[e.jsx("h5",{className:"font-medium mb-3",children:"表单状态管理"}),e.jsx(P,{initialValues:{email:"",password:"",confirmPassword:""},validate:t=>{const s={};return t.email?/\S+@\S+\.\S+/.test(t.email)||(s.email="邮箱格式不正确"):s.email="邮箱不能为空",t.password?t.password.length<6&&(s.password="密码至少6位"):s.password="密码不能为空",t.password!==t.confirmPassword&&(s.confirmPassword="两次密码不一致"),s},children:({values:t,errors:s,touched:a,isValid:r,setValue:d,setTouched:n,reset:o})=>e.jsxs("div",{className:"space-y-4",children:[e.jsxs("div",{className:"grid grid-cols-1 gap-4",children:[e.jsxs("div",{children:[e.jsx("label",{className:"block text-sm font-medium text-gray-700 mb-1",children:"邮箱"}),e.jsx("input",{type:"email",value:t.email,onChange:l=>d("email",l.target.value),onBlur:()=>n("email"),className:`w-full px-3 py-2 border rounded-md ${a.email&&s.email?"border-red-500":"border-gray-300"}`,placeholder:"请输入邮箱"}),a.email&&s.email&&e.jsx("div",{className:"text-red-500 text-xs mt-1",children:s.email})]}),e.jsxs("div",{children:[e.jsx("label",{className:"block text-sm font-medium text-gray-700 mb-1",children:"密码"}),e.jsx("input",{type:"password",value:t.password,onChange:l=>d("password",l.target.value),onBlur:()=>n("password"),className:`w-full px-3 py-2 border rounded-md ${a.password&&s.password?"border-red-500":"border-gray-300"}`,placeholder:"请输入密码"}),a.password&&s.password&&e.jsx("div",{className:"text-red-500 text-xs mt-1",children:s.password})]}),e.jsxs("div",{children:[e.jsx("label",{className:"block text-sm font-medium text-gray-700 mb-1",children:"确认密码"}),e.jsx("input",{type:"password",value:t.confirmPassword,onChange:l=>d("confirmPassword",l.target.value),onBlur:()=>n("confirmPassword"),className:`w-full px-3 py-2 border rounded-md ${a.confirmPassword&&s.confirmPassword?"border-red-500":"border-gray-300"}`,placeholder:"请再次输入密码"}),a.confirmPassword&&s.confirmPassword&&e.jsx("div",{className:"text-red-500 text-xs mt-1",children:s.confirmPassword})]})]}),e.jsxs("div",{className:"bg-gray-50 p-3 rounded",children:[e.jsx("div",{className:"text-sm text-gray-600 mb-2",children:"表单状态:"}),e.jsxs("div",{className:"grid grid-cols-2 gap-4 text-xs",children:[e.jsxs("div",{children:[e.jsx("div",{className:"font-medium",children:"验证状态:"}),e.jsx("div",{className:r?"text-green-600":"text-red-600",children:r?"✅ 表单有效":"❌ 表单无效"})]}),e.jsxs("div",{children:[e.jsx("div",{className:"font-medium",children:"错误数量:"}),e.jsxs("div",{className:"text-gray-700",children:[Object.keys(s).length," 个错误"]})]})]})]}),e.jsxs("div",{className:"flex space-x-2",children:[e.jsx("button",{onClick:()=>{alert(r?"表单提交成功！":"请修正表单错误后再提交")},className:`px-4 py-2 rounded text-sm ${r?"bg-green-500 text-white":"bg-gray-300 text-gray-500 cursor-not-allowed"}`,disabled:!r,children:"提交表单"}),e.jsx("button",{onClick:o,className:"px-4 py-2 bg-gray-500 text-white rounded text-sm",children:"重置表单"})]})]})})]})]}),U=()=>{const[t,s]=i.useState([]),[a,r]=i.useState(!0),d=(n,o)=>{const l=`点击了第 ${n+1} 个按钮: ${o.children||o.value||"未知"}`;s(m=>[l,...m.slice(0,4)])};return e.jsxs("div",{className:"space-y-6",children:[e.jsxs("div",{className:"bg-gray-50 p-4 rounded-lg",children:[e.jsx("h4",{className:"font-medium mb-2",children:"子组件增强示例"}),e.jsx("p",{className:"text-sm text-gray-600",children:"展示如何使用无渲染组件增强子组件功能，包括样式注入和事件追踪。"})]}),e.jsxs("div",{className:"border border-gray-200 rounded-lg p-4",children:[e.jsx("h5",{className:"font-medium mb-3",children:"基础子组件增强"}),e.jsx("div",{className:"mb-3",children:e.jsxs("label",{className:"flex items-center space-x-2",children:[e.jsx("input",{type:"checkbox",checked:a,onChange:n=>r(n.target.checked),className:"rounded"}),e.jsx("span",{className:"text-sm",children:"启用样式增强"})]})}),e.jsxs(g,{enhance:(n,o)=>{const l={...n.props,"data-index":o,style:{...n.props.style,...a&&{border:"2px solid #3b82f6",borderRadius:"8px",margin:"4px",transition:"all 0.2s ease"}}};return j.cloneElement(n,l)},children:[e.jsx("button",{className:"px-3 py-2 bg-blue-500 text-white rounded",children:"按钮 1"}),e.jsx("button",{className:"px-3 py-2 bg-green-500 text-white rounded",children:"按钮 2"}),e.jsx("button",{className:"px-3 py-2 bg-red-500 text-white rounded",children:"按钮 3"})]})]}),e.jsxs("div",{className:"border border-gray-200 rounded-lg p-4",children:[e.jsx("h5",{className:"font-medium mb-3",children:"点击事件追踪"}),e.jsxs(v,{onChildClick:d,children:[e.jsx("button",{className:"px-4 py-2 bg-purple-500 text-white rounded mr-2",children:"紫色按钮"}),e.jsx("button",{className:"px-4 py-2 bg-orange-500 text-white rounded mr-2",children:"橙色按钮"}),e.jsx("button",{className:"px-4 py-2 bg-pink-500 text-white rounded mr-2",children:"粉色按钮"})]}),t.length>0&&e.jsxs("div",{className:"mt-4 bg-gray-50 p-3 rounded",children:[e.jsx("div",{className:"text-sm font-medium text-gray-700 mb-2",children:"点击日志:"}),e.jsx("div",{className:"space-y-1",children:t.map((n,o)=>e.jsx("div",{className:"text-xs text-gray-600 bg-white p-2 rounded border",children:n},o))}),e.jsx("button",{onClick:()=>s([]),className:"mt-2 px-2 py-1 bg-gray-500 text-white rounded text-xs",children:"清空日志"})]})]}),e.jsxs("div",{className:"border border-gray-200 rounded-lg p-4",children:[e.jsx("h5",{className:"font-medium mb-3",children:"样式注入增强"}),e.jsxs("div",{className:"space-y-4",children:[e.jsxs("div",{children:[e.jsx("div",{className:"text-sm text-gray-600 mb-2",children:"普通按钮组:"}),e.jsxs("div",{className:"flex space-x-2",children:[e.jsx("button",{className:"px-3 py-2 bg-gray-500 text-white",children:"普通按钮 1"}),e.jsx("button",{className:"px-3 py-2 bg-gray-500 text-white",children:"普通按钮 2"}),e.jsx("button",{className:"px-3 py-2 bg-gray-500 text-white",children:"普通按钮 3"})]})]}),e.jsxs("div",{children:[e.jsx("div",{className:"text-sm text-gray-600 mb-2",children:"样式增强后的按钮组:"}),e.jsxs(x,{className:"shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-200",children:[e.jsx("button",{className:"px-3 py-2 bg-blue-500 text-white rounded",children:"增强按钮 1"}),e.jsx("button",{className:"px-3 py-2 bg-green-500 text-white rounded",children:"增强按钮 2"}),e.jsx("button",{className:"px-3 py-2 bg-red-500 text-white rounded",children:"增强按钮 3"})]})]}),e.jsxs("div",{children:[e.jsx("div",{className:"text-sm text-gray-600 mb-2",children:"多重样式增强:"}),e.jsx(x,{className:"border-2 border-dashed border-yellow-400",children:e.jsxs(x,{className:"bg-gradient-to-r from-purple-400 to-pink-400",children:[e.jsx("div",{className:"p-4 text-white font-bold rounded",children:"多重增强的容器"}),e.jsx("div",{className:"p-2 text-white rounded mt-2",children:"另一个增强元素"})]})})]})]})]}),e.jsxs("div",{className:"border border-gray-200 rounded-lg p-4",children:[e.jsx("h5",{className:"font-medium mb-3",children:"组合使用示例"}),e.jsx("p",{className:"text-sm text-gray-600 mb-3",children:"同时使用样式注入和点击追踪功能:"}),e.jsx(x,{className:"animate-pulse",children:e.jsxs(v,{onChildClick:d,children:[e.jsx("button",{className:"px-4 py-2 bg-indigo-500 text-white rounded mr-2",children:"组合增强按钮 1"}),e.jsx("button",{className:"px-4 py-2 bg-teal-500 text-white rounded mr-2",children:"组合增强按钮 2"})]})})]})]})},F=`import React, { ReactNode } from "react";

// 条件渲染组件接口
export interface ConditionalProps {
  condition: boolean;
  children: ReactNode;
  fallback?: ReactNode;
}

// 条件渲染组件
export const Conditional: React.FC<ConditionalProps> = ({
  condition,
  children,
  fallback = null,
}) => {
  return condition ? <>{children}</> : <>{fallback}</>;
};

// 权限控制组件接口
export interface PermissionProps {
  role: string;
  requiredRole: string | string[];
  children: ReactNode;
  fallback?: ReactNode;
}

// 权限控制组件
export const Permission: React.FC<PermissionProps> = ({
  role,
  requiredRole,
  children,
  fallback = null,
}) => {
  const hasPermission = Array.isArray(requiredRole)
    ? requiredRole.includes(role)
    : role === requiredRole;

  return hasPermission ? <>{children}</> : <>{fallback}</>;
};`,V=`import React, { ReactNode, useState, useEffect } from "react";

// 数据提供者组件接口
export interface DataProviderProps {
  data: any;
  loading?: boolean;
  error?: Error | null;
  children: (props: {
    data: any;
    loading: boolean;
    error: Error | null;
    isEmpty: boolean;
  }) => ReactNode;
}

// 数据提供者组件
export const DataProvider: React.FC<DataProviderProps> = ({
  data,
  loading = false,
  error = null,
  children,
}) => {
  const isEmpty = !data || (Array.isArray(data) && data.length === 0);
  return <>{children({ data, loading, error, isEmpty })}</>;
};

// 异步数据组件接口
export interface AsyncDataProps<T> {
  fetcher: () => Promise<T>;
  dependencies?: any[];
  children: (props: {
    data: T | null;
    loading: boolean;
    error: Error | null;
    refetch: () => void;
  }) => ReactNode;
}

// 异步数据组件
export function AsyncData<T>({
  fetcher,
  dependencies = [],
  children,
}: AsyncDataProps<T>) {
  const [data, setData] = useState<T | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<Error | null>(null);

  const fetchData = async () => {
    try {
      setLoading(true);
      setError(null);
      const result = await fetcher();
      setData(result);
    } catch (err) {
      setError(err instanceof Error ? err : new Error("Unknown error"));
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, dependencies);

  return <>{children({ data, loading, error, refetch: fetchData })}</>;
}`,M=`import React, { ReactNode, useState } from "react";

// 状态管理组件接口
export interface StateManagerProps<T> {
  initialState: T;
  children: (props: {
    state: T;
    setState: React.Dispatch<React.SetStateAction<T>>;
    resetState: () => void;
  }) => ReactNode;
}

// 状态管理组件
export function StateManager<T>({ initialState, children }: StateManagerProps<T>) {
  const [state, setState] = useState<T>(initialState);

  const resetState = () => {
    setState(initialState);
  };

  return <>{children({ state, setState, resetState })}</>;
}

// 表单状态组件接口
export interface FormStateProps<T> {
  initialValues: T;
  validate?: (values: T) => Partial<Record<keyof T, string>>;
  children: (props: {
    values: T;
    errors: Partial<Record<keyof T, string>>;
    touched: Partial<Record<keyof T, boolean>>;
    isValid: boolean;
    setValue: (field: keyof T, value: any) => void;
    setTouched: (field: keyof T) => void;
    reset: () => void;
  }) => ReactNode;
}

// 表单状态组件
export function FormState<T extends Record<string, any>>({
  initialValues,
  validate,
  children,
}: FormStateProps<T>) {
  const [values, setValues] = useState<T>(initialValues);
  const [touched, setTouchedState] = useState<
    Partial<Record<keyof T, boolean>>
  >({});

  const errors = validate ? validate(values) : {};
  const isValid = Object.keys(errors).length === 0;

  const setValue = (field: keyof T, value: any) => {
    setValues((prev) => ({ ...prev, [field]: value }));
  };

  const setTouched = (field: keyof T) => {
    setTouchedState((prev) => ({ ...prev, [field]: true }));
  };

  const reset = () => {
    setValues(initialValues);
    setTouchedState({});
  };

  return (
    <>
      {children({
        values,
        errors,
        touched,
        isValid,
        setValue,
        setTouched,
        reset,
      })}
    </>
  );
}`,L=`import React, { Children, ReactNode, cloneElement, isValidElement } from "react";

// 子组件增强器接口
export interface ChildrenEnhancerProps {
  children: ReactNode;
  enhance: (child: React.ReactElement, index: number) => React.ReactElement;
}

// 子组件增强器
export const ChildrenEnhancer: React.FC<ChildrenEnhancerProps> = ({
  children,
  enhance,
}) => {
  return (
    <>
      {Children.map(children, (child, index) => {
        if (isValidElement(child)) {
          return enhance(child, index);
        }
        return child;
      })}
    </>
  );
};

// 点击追踪组件接口
export interface ClickTrackerProps {
  onChildClick: (childIndex: number, childProps: any) => void;
  children: ReactNode;
}

// 点击追踪组件
export const ClickTracker: React.FC<ClickTrackerProps> = ({
  onChildClick,
  children,
}) => {
  return (
    <ChildrenEnhancer
      enhance={(child, index) => {
        return cloneElement(child, {
          ...child.props,
          onClick: (e: React.MouseEvent) => {
            if (child.props.onClick) child.props.onClick(e);
            onChildClick(index, child.props);
          },
        });
      }}
    >
      {children}
    </ChildrenEnhancer>
  );
};

// 样式注入组件接口
export interface StyleInjectorProps {
  className: string;
  children: ReactNode;
}

// 样式注入组件
export const StyleInjector: React.FC<StyleInjectorProps> = ({
  className,
  children,
}) => {
  return (
    <ChildrenEnhancer
      enhance={(child, index) => {
        const existingClassName = child.props.className || "";
        return cloneElement(child, {
          ...child.props,
          className: \`\${existingClassName} \${className}\`.trim(),
        });
      }}
    >
      {children}
    </ChildrenEnhancer>
  );
};`,A=`import React, { useState } from "react";
import { Conditional, Permission } from "./Conditional";

// 条件渲染示例
export const ConditionalRenderExample: React.FC = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [userRole, setUserRole] = useState<"user" | "admin" | "guest">("guest");

  return (
    <div className="space-y-4">
      <div className="bg-gray-50 p-4 rounded-lg mb-4">
        <h4 className="font-medium mb-2">条件渲染示例</h4>
        <p className="text-sm text-gray-600">
          根据登录状态和用户角色动态显示不同的内容。
        </p>
      </div>

      <div className="flex space-x-4">
        <button
          onClick={() => setIsLoggedIn(!isLoggedIn)}
          className={\`px-4 py-2 rounded \${
            isLoggedIn ? "bg-red-500 text-white" : "bg-green-500 text-white"
          }\`}
        >
          {isLoggedIn ? "登出" : "登录"}
        </button>

        <select
          value={userRole}
          onChange={(e) => setUserRole(e.target.value as any)}
          className="px-3 py-2 border border-gray-300 rounded"
        >
          <option value="guest">访客</option>
          <option value="user">用户</option>
          <option value="admin">管理员</option>
        </select>
      </div>

      <Conditional
        condition={isLoggedIn}
        fallback={
          <div className="bg-red-50 border border-red-200 p-4 rounded">
            <div className="text-red-700">❌ 请先登录以访问系统</div>
          </div>
        }
      >
        <div className="bg-green-50 border border-green-200 p-4 rounded">
          <h4 className="font-medium text-green-800 mb-2">✅ 欢迎回来！</h4>
          <p className="text-green-700 mb-3">当前角色: {userRole}</p>

          <Permission
            role={userRole}
            requiredRole={["admin", "user"]}
            fallback={
              <div className="bg-gray-100 p-3 rounded">
                <p className="text-gray-600">
                  🔒 访客权限有限，只能浏览基础内容
                </p>
              </div>
            }
          >
            <div className="bg-blue-50 p-3 rounded mb-2">
              <p className="text-blue-700">🎯 您可以访问用户功能区域</p>
            </div>
          </Permission>

          <Permission
            role={userRole}
            requiredRole="admin"
            fallback={
              <div className="bg-yellow-50 p-3 rounded">
                <p className="text-yellow-700">⚠️ 管理员功能需要更高权限</p>
              </div>
            }
          >
            <div className="bg-purple-50 p-3 rounded">
              <p className="text-purple-700">
                👑 您拥有管理员权限，可以访问所有功能
              </p>
            </div>
          </Permission>
        </div>
      </Conditional>
    </div>
  );
};`,$=`import React, { useState } from "react";
import { DataProvider, AsyncData } from "./DataProvider";

// 模拟 API 数据
const mockUsers = [
  { id: 1, name: "张三", email: "zhangsan@example.com", role: "开发者" },
  { id: 2, name: "李四", email: "lisi@example.com", role: "设计师" },
  { id: 3, name: "王五", email: "wangwu@example.com", role: "产品经理" },
];

// 模拟异步数据获取
const fetchUsers = (): Promise<typeof mockUsers> => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (Math.random() > 0.2) {
        resolve(mockUsers);
      } else {
        reject(new Error("网络错误：无法获取用户数据"));
      }
    }, 1500);
  });
};

// 数据注入示例
export const DataInjectionExample: React.FC = () => {
  const [staticData] = useState(mockUsers);
  const [showEmpty, setShowEmpty] = useState(false);
  const [refreshKey, setRefreshKey] = useState(0);

  return (
    <div className="space-y-6">
      <div className="bg-gray-50 p-4 rounded-lg">
        <h4 className="font-medium mb-2">数据注入示例</h4>
        <p className="text-sm text-gray-600">
          展示如何使用无渲染组件处理数据状态和异步数据获取。
        </p>
      </div>

      {/* 静态数据提供者示例 */}
      <div className="border border-gray-200 rounded-lg p-4">
        <h5 className="font-medium mb-3">静态数据提供者</h5>
        <div className="flex space-x-2 mb-3">
          <button
            onClick={() => setShowEmpty(!showEmpty)}
            className="px-3 py-1 bg-blue-500 text-white rounded text-sm"
          >
            {showEmpty ? "显示数据" : "显示空数据"}
          </button>
        </div>

        <DataProvider
          data={showEmpty ? [] : staticData}
          loading={false}
          error={null}
        >
          {({ data, loading, error, isEmpty }) => (
            <div className="bg-gray-50 p-3 rounded">
              {loading && (
                <div className="text-blue-600">🔄 数据加载中...</div>
              )}
              {error && (
                <div className="text-red-600">❌ 错误: {error.message}</div>
              )}
              {isEmpty && !loading && !error && (
                <div className="text-gray-500">📭 暂无数据</div>
              )}
              {!isEmpty && !loading && !error && (
                <div>
                  <div className="text-green-600 mb-2">
                    ✅ 成功加载 {data.length} 条用户数据
                  </div>
                  <div className="space-y-1">
                    {data.map((user: any) => (
                      <div
                        key={user.id}
                        className="bg-white p-2 rounded border text-sm"
                      >
                        <span className="font-medium">{user.name}</span> -
                        <span className="text-gray-600 ml-1">{user.role}</span>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>
          )}
        </DataProvider>
      </div>

      {/* 异步数据示例 */}
      <div className="border border-gray-200 rounded-lg p-4">
        <h5 className="font-medium mb-3">异步数据获取</h5>
        <button
          onClick={() => setRefreshKey(prev => prev + 1)}
          className="px-3 py-1 bg-green-500 text-white rounded text-sm mb-3"
        >
          🔄 重新获取数据
        </button>

        <AsyncData
          key={refreshKey}
          fetcher={fetchUsers}
          dependencies={[refreshKey]}
        >
          {({ data, loading, error, refetch }) => (
            <div className="bg-gray-50 p-3 rounded">
              {loading && (
                <div className="flex items-center space-x-2 text-blue-600">
                  <div className="animate-spin w-4 h-4 border-2 border-blue-600 border-t-transparent rounded-full"></div>
                  <span>正在获取用户数据...</span>
                </div>
              )}
              {error && (
                <div className="space-y-2">
                  <div className="text-red-600">❌ {error.message}</div>
                  <button
                    onClick={refetch}
                    className="px-2 py-1 bg-red-500 text-white rounded text-xs"
                  >
                    重试
                  </button>
                </div>
              )}
              {data && !loading && !error && (
                <div>
                  <div className="text-green-600 mb-2">
                    ✅ 异步加载完成，共 {data.length} 条数据
                  </div>
                  <div className="grid grid-cols-1 gap-2">
                    {data.map((user) => (
                      <div
                        key={user.id}
                        className="bg-white p-3 rounded border"
                      >
                        <div className="font-medium">{user.name}</div>
                        <div className="text-sm text-gray-600">
                          {user.email}
                        </div>
                        <div className="text-xs text-blue-600">
                          {user.role}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>
          )}
        </AsyncData>
      </div>
    </div>
  );
};`,H=`import React from "react";
import { StateManager, FormState } from "./StateManager";

// 状态管理示例
export const StateManagementExample: React.FC = () => {
  return (
    <div className="space-y-6">
      <div className="bg-gray-50 p-4 rounded-lg">
        <h4 className="font-medium mb-2">状态管理示例</h4>
        <p className="text-sm text-gray-600">
          展示如何使用无渲染组件管理复杂状态和表单验证。
        </p>
      </div>

      {/* 通用状态管理示例 */}
      <div className="border border-gray-200 rounded-lg p-4">
        <h5 className="font-medium mb-3">通用状态管理</h5>
        <StateManager initialState={{ count: 0, name: "React" }}>
          {({ state, setState, resetState }) => (
            <div className="space-y-3">
              <div className="bg-blue-50 p-3 rounded">
                <div className="text-sm text-gray-600 mb-2">当前状态:</div>
                <div className="font-mono text-sm bg-white p-2 rounded border">
                  {JSON.stringify(state, null, 2)}
                </div>
              </div>

              <div className="flex space-x-2">
                <button
                  onClick={() =>
                    setState((prev) => ({ ...prev, count: prev.count + 1 }))
                  }
                  className="px-3 py-1 bg-green-500 text-white rounded text-sm"
                >
                  计数 +1
                </button>
                <button
                  onClick={() =>
                    setState((prev) => ({ ...prev, count: prev.count - 1 }))
                  }
                  className="px-3 py-1 bg-red-500 text-white rounded text-sm"
                >
                  计数 -1
                </button>
                <button
                  onClick={() =>
                    setState((prev) => ({
                      ...prev,
                      name: prev.name === "React" ? "Vue" : "React",
                    }))
                  }
                  className="px-3 py-1 bg-blue-500 text-white rounded text-sm"
                >
                  切换框架
                </button>
                <button
                  onClick={resetState}
                  className="px-3 py-1 bg-gray-500 text-white rounded text-sm"
                >
                  重置状态
                </button>
              </div>
            </div>
          )}
        </StateManager>
      </div>

      {/* 表单状态管理示例 */}
      <div className="border border-gray-200 rounded-lg p-4">
        <h5 className="font-medium mb-3">表单状态管理</h5>
        <FormState
          initialValues={{ email: "", password: "", confirmPassword: "" }}
          validate={(values) => {
            const errors: any = {};
            if (!values.email) {
              errors.email = "邮箱不能为空";
            } else if (!/\\S+@\\S+\\.\\S+/.test(values.email)) {
              errors.email = "邮箱格式不正确";
            }
            if (!values.password) {
              errors.password = "密码不能为空";
            } else if (values.password.length < 6) {
              errors.password = "密码至少6位";
            }
            if (values.password !== values.confirmPassword) {
              errors.confirmPassword = "两次密码不一致";
            }
            return errors;
          }}
        >
          {({
            values,
            errors,
            touched,
            isValid,
            setValue,
            setTouched,
            reset,
          }) => (
            <div className="space-y-4">
              <div className="grid grid-cols-1 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    邮箱
                  </label>
                  <input
                    type="email"
                    value={values.email}
                    onChange={(e) => setValue("email", e.target.value)}
                    onBlur={() => setTouched("email")}
                    className={\`w-full px-3 py-2 border rounded-md \${
                      touched.email && errors.email
                        ? "border-red-500"
                        : "border-gray-300"
                    }\`}
                    placeholder="请输入邮箱"
                  />
                  {touched.email && errors.email && (
                    <div className="text-red-500 text-xs mt-1">
                      {errors.email}
                    </div>
                  )}
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    密码
                  </label>
                  <input
                    type="password"
                    value={values.password}
                    onChange={(e) => setValue("password", e.target.value)}
                    onBlur={() => setTouched("password")}
                    className={\`w-full px-3 py-2 border rounded-md \${
                      touched.password && errors.password
                        ? "border-red-500"
                        : "border-gray-300"
                    }\`}
                    placeholder="请输入密码"
                  />
                  {touched.password && errors.password && (
                    <div className="text-red-500 text-xs mt-1">
                      {errors.password}
                    </div>
                  )}
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    确认密码
                  </label>
                  <input
                    type="password"
                    value={values.confirmPassword}
                    onChange={(e) => setValue("confirmPassword", e.target.value)}
                    onBlur={() => setTouched("confirmPassword")}
                    className={\`w-full px-3 py-2 border rounded-md \${
                      touched.confirmPassword && errors.confirmPassword
                        ? "border-red-500"
                        : "border-gray-300"
                    }\`}
                    placeholder="请再次输入密码"
                  />
                  {touched.confirmPassword && errors.confirmPassword && (
                    <div className="text-red-500 text-xs mt-1">
                      {errors.confirmPassword}
                    </div>
                  )}
                </div>
              </div>

              <div className="bg-gray-50 p-3 rounded">
                <div className="text-sm text-gray-600 mb-2">表单状态:</div>
                <div className="grid grid-cols-2 gap-4 text-xs">
                  <div>
                    <div className="font-medium">验证状态:</div>
                    <div className={isValid ? "text-green-600" : "text-red-600"}>
                      {isValid ? "✅ 表单有效" : "❌ 表单无效"}
                    </div>
                  </div>
                  <div>
                    <div className="font-medium">错误数量:</div>
                    <div className="text-gray-700">
                      {Object.keys(errors).length} 个错误
                    </div>
                  </div>
                </div>
              </div>

              <div className="flex space-x-2">
                <button
                  onClick={() => {
                    if (isValid) {
                      alert("表单提交成功！");
                    } else {
                      alert("请修正表单错误后再提交");
                    }
                  }}
                  className={\`px-4 py-2 rounded text-sm \${
                    isValid
                      ? "bg-green-500 text-white"
                      : "bg-gray-300 text-gray-500 cursor-not-allowed"
                  }\`}
                  disabled={!isValid}
                >
                  提交表单
                </button>
                <button
                  onClick={reset}
                  className="px-4 py-2 bg-gray-500 text-white rounded text-sm"
                >
                  重置表单
                </button>
              </div>
            </div>
          )}
        </FormState>
      </div>
    </div>
  );
};`,O=`import React, { useState } from "react";
import { ChildrenEnhancer, ClickTracker, StyleInjector } from "./ChildrenEnhancer";

// 子组件增强示例
export const ChildrenEnhancementExample: React.FC = () => {
  const [clickLog, setClickLog] = useState<string[]>([]);
  const [enhanceStyle, setEnhanceStyle] = useState(true);

  const handleChildClick = (index: number, props: any) => {
    const logEntry = \`点击了第 \${index + 1} 个按钮: \${props.children || props.value || '未知'}\`;
    setClickLog(prev => [logEntry, ...prev.slice(0, 4)]); // 保留最近5条记录
  };

  return (
    <div className="space-y-6">
      <div className="bg-gray-50 p-4 rounded-lg">
        <h4 className="font-medium mb-2">子组件增强示例</h4>
        <p className="text-sm text-gray-600">
          展示如何使用无渲染组件增强子组件功能，包括样式注入和事件追踪。
        </p>
      </div>

      {/* 基础子组件增强示例 */}
      <div className="border border-gray-200 rounded-lg p-4">
        <h5 className="font-medium mb-3">基础子组件增强</h5>
        <div className="mb-3">
          <label className="flex items-center space-x-2">
            <input
              type="checkbox"
              checked={enhanceStyle}
              onChange={(e) => setEnhanceStyle(e.target.checked)}
              className="rounded"
            />
            <span className="text-sm">启用样式增强</span>
          </label>
        </div>

        <ChildrenEnhancer
          enhance={(child, index) => {
            const enhancedProps = {
              ...child.props,
              'data-index': index,
              style: {
                ...child.props.style,
                ...(enhanceStyle && {
                  border: '2px solid #3b82f6',
                  borderRadius: '8px',
                  margin: '4px',
                  transition: 'all 0.2s ease',
                }),
              },
            };
            return React.cloneElement(child, enhancedProps);
          }}
        >
          <button className="px-3 py-2 bg-blue-500 text-white rounded">按钮 1</button>
          <button className="px-3 py-2 bg-green-500 text-white rounded">按钮 2</button>
          <button className="px-3 py-2 bg-red-500 text-white rounded">按钮 3</button>
        </ChildrenEnhancer>
      </div>

      {/* 点击追踪示例 */}
      <div className="border border-gray-200 rounded-lg p-4">
        <h5 className="font-medium mb-3">点击事件追踪</h5>
        
        <ClickTracker onChildClick={handleChildClick}>
          <button className="px-4 py-2 bg-purple-500 text-white rounded mr-2">
            紫色按钮
          </button>
          <button className="px-4 py-2 bg-orange-500 text-white rounded mr-2">
            橙色按钮
          </button>
          <button className="px-4 py-2 bg-pink-500 text-white rounded mr-2">
            粉色按钮
          </button>
        </ClickTracker>

        {clickLog.length > 0 && (
          <div className="mt-4 bg-gray-50 p-3 rounded">
            <div className="text-sm font-medium text-gray-700 mb-2">点击日志:</div>
            <div className="space-y-1">
              {clickLog.map((log, index) => (
                <div key={index} className="text-xs text-gray-600 bg-white p-2 rounded border">
                  {log}
                </div>
              ))}
            </div>
            <button
              onClick={() => setClickLog([])}
              className="mt-2 px-2 py-1 bg-gray-500 text-white rounded text-xs"
            >
              清空日志
            </button>
          </div>
        )}
      </div>

      {/* 样式注入示例 */}
      <div className="border border-gray-200 rounded-lg p-4">
        <h5 className="font-medium mb-3">样式注入增强</h5>
        
        <div className="space-y-4">
          <div>
            <div className="text-sm text-gray-600 mb-2">普通按钮组:</div>
            <div className="flex space-x-2">
              <button className="px-3 py-2 bg-gray-500 text-white">普通按钮 1</button>
              <button className="px-3 py-2 bg-gray-500 text-white">普通按钮 2</button>
              <button className="px-3 py-2 bg-gray-500 text-white">普通按钮 3</button>
            </div>
          </div>

          <div>
            <div className="text-sm text-gray-600 mb-2">样式增强后的按钮组:</div>
            <StyleInjector className="shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-200">
              <button className="px-3 py-2 bg-blue-500 text-white rounded">增强按钮 1</button>
              <button className="px-3 py-2 bg-green-500 text-white rounded">增强按钮 2</button>
              <button className="px-3 py-2 bg-red-500 text-white rounded">增强按钮 3</button>
            </StyleInjector>
          </div>

          <div>
            <div className="text-sm text-gray-600 mb-2">多重样式增强:</div>
            <StyleInjector className="border-2 border-dashed border-yellow-400">
              <StyleInjector className="bg-gradient-to-r from-purple-400 to-pink-400">
                <div className="p-4 text-white font-bold rounded">多重增强的容器</div>
                <div className="p-2 text-white rounded mt-2">另一个增强元素</div>
              </StyleInjector>
            </StyleInjector>
          </div>
        </div>
      </div>

      {/* 组合使用示例 */}
      <div className="border border-gray-200 rounded-lg p-4">
        <h5 className="font-medium mb-3">组合使用示例</h5>
        <p className="text-sm text-gray-600 mb-3">
          同时使用样式注入和点击追踪功能:
        </p>
        
        <StyleInjector className="animate-pulse">
          <ClickTracker onChildClick={handleChildClick}>
            <button className="px-4 py-2 bg-indigo-500 text-white rounded mr-2">
              组合增强按钮 1
            </button>
            <button className="px-4 py-2 bg-teal-500 text-white rounded mr-2">
              组合增强按钮 2
            </button>
          </ClickTracker>
        </StyleInjector>
      </div>
    </div>
  );
};`,B=()=>{const t={title:"无渲染组件 (Renderless Components)",description:"无渲染组件是一种React设计模式，专注于逻辑复用而不关心UI渲染。它们通过render props或children函数的方式，将状态和行为注入到子组件中，实现逻辑与视图的完全分离。",overview:[{title:"核心概念",items:["无渲染组件是一种React设计模式，专注于逻辑复用而不关心UI渲染","通过render props或children函数将状态和行为注入到子组件中","实现逻辑与视图的完全分离，提高代码可维护性","不直接产生DOM元素，只负责处理和传递数据"]},{title:"主要优势",items:["逻辑复用 - 将复杂的状态逻辑从UI中抽离","关注点分离 - 逻辑组件专注业务逻辑，UI组件专注展示","灵活性高 - 同一套逻辑可以适配多种UI实现","测试友好 - 逻辑和UI可以独立测试，提高测试覆盖率"]},{title:"适用场景",items:["状态管理 - 复杂的状态逻辑需要在多个组件间复用","数据获取 - 异步数据加载和缓存逻辑的抽象","表单处理 - 表单验证、提交等逻辑的统一管理","权限控制 - 基于角色和权限的条件渲染"]},{title:"实现方式",items:["Render Props - 通过函数prop接收渲染逻辑","Children Function - 使用children作为函数传递渲染逻辑","Custom Hooks - 现代React开发中的推荐方式","组合模式 - 多个无渲染组件组合实现复杂功能"]}],examples:[{title:"示例1：条件渲染组件",description:"基于条件和权限控制的无渲染组件实现",component:e.jsx(E,{}),preCode:[{title:"条件渲染组件",code:F}],codeExample:{title:"条件渲染示例",code:A},observationPoints:["Conditional组件根据condition prop决定渲染children还是fallback","Permission组件基于角色权限控制内容的显示","无渲染组件不产生额外的DOM结构","逻辑完全与UI分离，可以复用到任何场景"],keyPoints:["无渲染组件通过children函数或render props传递渲染逻辑","组件内部只处理逻辑，不关心具体的UI实现","可以轻松组合多个无渲染组件实现复杂功能"],commonTraps:["过度使用无渲染组件导致组件层级过深","在render函数中创建新的函数导致性能问题","逻辑过于复杂时反而降低了代码可读性"],solutions:["合理评估是否需要使用无渲染组件","使用useCallback缓存传递给无渲染组件的函数","保持无渲染组件的逻辑简单清晰"],importantTips:["无渲染组件的核心是逻辑复用，而不是UI复用","适合将复杂的状态逻辑从UI组件中抽离","现代React开发中，Custom Hooks通常是更好的选择"]},{title:"示例2：数据注入组件",description:"通过无渲染组件注入数据和异步状态管理",component:e.jsx(I,{}),preCode:[{title:"数据提供者组件",code:V}],codeExample:{title:"数据注入示例",code:$},observationPoints:["DataProvider组件将数据状态注入到children函数中","AsyncData组件处理异步数据加载的完整生命周期","子组件通过函数参数接收数据和状态","loading、error、data等状态被统一管理"],keyPoints:["数据获取逻辑与UI展示完全分离","异步状态管理被封装在无渲染组件中","子组件只需关心如何展示数据，不需要处理加载状态"],commonTraps:["在children函数中进行复杂的数据处理","忘记处理loading和error状态","异步操作没有正确清理导致内存泄漏"],solutions:["保持children函数的纯净，只做UI渲染","在无渲染组件中统一处理所有异步状态","使用useEffect的清理函数避免内存泄漏"],importantTips:["数据注入是无渲染组件的经典应用场景","异步状态管理应该在无渲染组件中统一处理","children函数应该保持纯净，只负责UI渲染"]},{title:"示例3：状态管理组件",description:"通用状态管理和表单状态处理的无渲染组件",component:e.jsx(D,{}),preCode:[{title:"状态管理组件",code:M}],codeExample:{title:"状态管理示例",code:H},observationPoints:["StateManager提供通用的状态管理能力","FormState专门处理表单相关的状态和验证","状态逻辑完全封装在无渲染组件中","子组件通过函数参数获得状态操作方法"],keyPoints:["状态管理逻辑与UI组件完全分离","表单验证逻辑被统一封装和复用","提供了丰富的状态操作方法"],commonTraps:["状态结构设计不合理导致频繁更新","验证逻辑过于复杂影响性能","忘记重置状态导致数据残留"],solutions:["合理设计状态结构，避免不必要的嵌套","使用useMemo优化复杂的验证计算","提供reset方法确保状态可以正确重置"],importantTips:["状态管理是无渲染组件的重要应用领域","表单处理逻辑应该统一封装以提高复用性","状态操作方法应该保持简单和一致性"]},{title:"示例4：子组件增强组件",description:"通过无渲染组件增强子组件功能，如点击追踪和样式注入",component:e.jsx(U,{}),preCode:[{title:"子组件增强器",code:L}],codeExample:{title:"子组件增强示例",code:O},observationPoints:["ChildrenEnhancer遍历并增强所有子组件","ClickTracker为子组件添加点击事件追踪","StyleInjector为子组件注入额外的CSS类","原有的组件功能和事件处理保持不变"],keyPoints:["子组件增强是无渲染组件的高级应用","通过cloneElement为子组件注入新的props","保持原有功能的同时添加新的能力"],commonTraps:["过度使用cloneElement导致性能问题","破坏了原有组件的事件处理逻辑","增强逻辑过于复杂难以维护"],solutions:["只在必要时使用子组件增强模式","确保增强逻辑不会覆盖原有的事件处理","保持增强逻辑的简单和可预测性"],importantTips:["子组件增强适用于需要批量修改子组件行为的场景","使用cloneElement时要小心处理原有的props","这种模式在现代React中应该谨慎使用"]}],tutorial:{concepts:["无渲染组件专注于逻辑复用而不关心UI渲染，通过render props或children函数将状态和行为注入到子组件中","核心思想是将'做什么'（逻辑）与'怎么显示'（UI）完全分离，实现最大程度的代码复用","主要实现方式包括Render Props模式和Children Function模式","与HOC相比，无渲染组件通过函数参数明确传递数据，避免了props命名冲突问题"],steps:["定义组件接口：明确需要哪些输入参数，以及children函数的签名","实现逻辑处理：在组件内部实现所有的业务逻辑，包括状态管理、事件处理、副作用等","调用和使用：通过children函数接收逻辑组件提供的状态和方法，实现具体的UI渲染"],tips:["保持逻辑组件的单一职责，避免承担过多功能","使用TypeScript确保类型安全和更好的开发体验","考虑性能优化，使用React.memo、useCallback和useMemo避免不必要的重渲染","提供合理的默认值和错误处理机制","现代React开发中，Custom Hooks通常是更好的选择"]},interview:{questions:[{question:"什么是无渲染组件？它解决了什么问题？",answer:"无渲染组件是专注于逻辑复用而不关心UI渲染的React组件，通过render props或children函数将状态和行为注入到子组件，解决了逻辑与UI耦合的问题，实现了关注点分离，提高了代码的复用性和可测试性。"},{question:"无渲染组件与HOC有什么区别？",answer:"HOC是函数，返回增强后的组件；无渲染组件是普通组件，通过children函数传递逻辑。HOC可能存在props命名冲突；无渲染组件通过函数参数明确传递数据。HOC适合简单的逻辑增强；无渲染组件适合复杂的状态逻辑复用。"},{question:"无渲染组件与自定义Hook的区别？",answer:"无渲染组件是React组件，参与组件树；Hook是JavaScript函数，不参与组件树。无渲染组件通过render props传递数据；Hook通过返回值传递数据。现代React开发中，Hook通常是更好的选择。"},{question:"如何优化无渲染组件的性能？",answer:"使用React.memo包装组件避免不必要的重渲染，使用useCallback缓存传递给children的函数，使用useMemo缓存复杂的计算结果，避免在render中创建新的函数或对象。"}],keyPoints:["无渲染组件的核心是逻辑复用，而不是UI复用","通过render props或children函数实现逻辑与UI的分离","适合将复杂的状态逻辑从UI组件中抽离","需要注意性能优化，避免不必要的重渲染","现代React开发中，Custom Hooks通常是更好的选择"]},bestPractices:{dos:["保持单一职责：每个无渲染组件应该只负责一个特定的逻辑功能","使用TypeScript：为无渲染组件提供完整的类型定义，确保类型安全","性能优化：使用React.memo、useCallback和useMemo优化性能","错误边界处理：妥善处理错误情况，提供合理的错误状态和恢复机制","提供默认值：为所有可选参数提供合理的默认值，提高组件的易用性","清理副作用：确保在组件卸载时正确清理定时器、订阅和异步操作"],donts:["过度抽象：不要为了抽象而抽象，简单的逻辑不需要无渲染组件","在render中创建函数：避免在render方法中创建新的函数，这会导致子组件不必要的重渲染","忽略错误处理：不要忽略异步操作的错误处理，这会导致应用崩溃或用户体验差"],patterns:["Render Props：通过render prop传递渲染逻辑，是无渲染组件的经典实现方式","Children Function：使用children作为函数，是现代React中更常用的方式","Custom Hooks：现代React开发中，Custom Hooks通常是更好的选择"]}};return e.jsx(w,{...t})};export{B as default};
