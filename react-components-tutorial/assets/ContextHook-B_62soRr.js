import{r as a,j as e}from"./index-CbVlrJMN.js";import{C as W}from"./ComponentTemplate-BnvJNrWP.js";const S=a.createContext(void 0),T=({children:n})=>{const[t,s]=a.useState(0),o=a.useCallback(()=>s(d=>d+1),[]),r=a.useCallback(()=>s(d=>d-1),[]),i=a.useCallback(()=>s(0),[]),x=a.useMemo(()=>({count:t,increment:o,decrement:r,reset:i,setCount:s}),[t,o,r,i]);return e.jsxs(S.Provider,{value:x,children:[" ",n]})},F=()=>{const n=a.useContext(S);if(n===void 0)throw new Error("useCounter must be used within a CounterProvider");return n},H=()=>{const{count:n}=F();return e.jsxs("div",{className:"bg-blue-50 p-4 rounded-lg border border-blue-200",children:[e.jsx("h4",{className:"text-lg font-semibold text-blue-800 mb-2",children:"当前计数"}),e.jsx("div",{className:"text-3xl font-bold text-blue-600",children:n})]})},E=()=>{const{increment:n,decrement:t,reset:s,setCount:o}=F(),r=()=>{const i=prompt("请输入一个数字:");i!==null&&!isNaN(Number(i))&&o(Number(i))};return e.jsxs("div",{className:"bg-green-50 p-4 rounded-lg border border-green-200",children:[e.jsx("h4",{className:"text-lg font-semibold text-green-800 mb-3",children:"控制面板"}),e.jsxs("div",{className:"flex flex-wrap gap-2",children:[e.jsx("button",{onClick:n,className:"px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600 transition-colors",children:"+1"}),e.jsx("button",{onClick:t,className:"px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600 transition-colors",children:"-1"}),e.jsx("button",{onClick:s,className:"px-4 py-2 bg-gray-500 text-white rounded hover:bg-gray-600 transition-colors",children:"重置"}),e.jsx("button",{onClick:r,className:"px-4 py-2 bg-purple-500 text-white rounded hover:bg-purple-600 transition-colors",children:"设置值"})]})]})},D=()=>{const{count:n}=F(),t=n%2===0,s=n>0,o=n<0;return e.jsxs("div",{className:"bg-yellow-50 p-4 rounded-lg border border-yellow-200",children:[e.jsx("h4",{className:"text-lg font-semibold text-yellow-800 mb-3",children:"统计信息"}),e.jsxs("div",{className:"grid grid-cols-2 gap-2 text-sm",children:[e.jsxs("div",{className:"flex justify-between",children:[e.jsx("span",{children:"奇偶性:"}),e.jsx("span",{className:t?"text-green-600":"text-blue-600",children:t?"偶数":"奇数"})]}),e.jsxs("div",{className:"flex justify-between",children:[e.jsx("span",{children:"符号:"}),e.jsx("span",{className:s?"text-green-600":o?"text-red-600":"text-gray-600",children:s?"正数":o?"负数":"零"})]}),e.jsxs("div",{className:"flex justify-between",children:[e.jsx("span",{children:"绝对值:"}),e.jsx("span",{className:"text-purple-600",children:Math.abs(n)})]}),e.jsxs("div",{className:"flex justify-between",children:[e.jsx("span",{children:"平方:"}),e.jsx("span",{className:"text-indigo-600",children:n*n})]})]})]})},V=()=>e.jsx(T,{children:e.jsx("div",{className:"space-y-6",children:e.jsxs("div",{className:"bg-white p-6 rounded-lg shadow-md border",children:[e.jsx("h3",{className:"text-xl font-bold text-gray-800 mb-4",children:"🔢 基础计数器示例"}),e.jsx("p",{className:"text-gray-600 mb-6",children:"这个示例展示了如何使用自定义Hook封装Context逻辑，实现状态共享和组件解耦。"}),e.jsxs("div",{className:"grid md:grid-cols-3 gap-4",children:[e.jsx(H,{}),e.jsx(E,{}),e.jsx(D,{})]}),e.jsxs("div",{className:"mt-6 p-4 bg-gray-50 rounded-lg",children:[e.jsx("h4",{className:"font-semibold text-gray-800 mb-2",children:"💡 技术要点:"}),e.jsxs("ul",{className:"text-sm text-gray-600 space-y-1",children:[e.jsx("li",{children:"• 使用useContext Hook消费Context值"}),e.jsx("li",{children:"• 自定义Hook封装Context逻辑"}),e.jsx("li",{children:"• useCallback优化函数性能"}),e.jsx("li",{children:"• useMemo优化Context值"}),e.jsx("li",{children:"• 错误边界处理Context未提供的情况"})]})]})]})})}),I=`import React, {
  createContext,
  useCallback,
  useContext,
  useMemo,
  useState,
} from "react";

// 定义计数器Context类型
interface CounterContextType {
  count: number;
  increment: () => void;
  decrement: () => void;
  reset: () => void;
  setCount: (count: number) => void;
}

// 创建Context对象
const CounterContext = createContext<CounterContextType | undefined>(undefined); // ← 重点：创建Context

// Provider组件
const CounterProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [count, setCount] = useState(0); // ← 重点：状态管理

  // 使用useCallback优化函数
  const increment = useCallback(() => setCount((prev) => prev + 1), []); // ← 重点：性能优化
  const decrement = useCallback(() => setCount((prev) => prev - 1), []);
  const reset = useCallback(() => setCount(0), []);

  // 使用useMemo优化Context值
  const value = useMemo(
    () => ({
      count,
      increment,
      decrement,
      reset,
      setCount,
    }),
    [count, increment, decrement, reset]
  ); // ← 重点：避免不必要的重渲染

  return (
    <CounterContext.Provider value={value}>
      {" "}
      {/* ← 重点：提供Context值 */}
      {children}
    </CounterContext.Provider>
  );
};

// 自定义Hook
const useCounter = () => {
  const context = useContext(CounterContext); // ← 重点：使用useContext Hook
  if (context === undefined) {
    throw new Error("useCounter must be used within a CounterProvider"); // ← 重点：错误处理
  }
  return context;
};

export { CounterProvider, useCounter };
export type { CounterContextType };`,O=`import React, {
  createContext,
  useCallback,
  useContext,
  useMemo,
  useState,
} from "react";

// 表单字段类型
interface FormField {
  value: string;
  error?: string;
  touched: boolean;
  validators: Array<(value: string) => string | undefined>;
}

// 表单状态类型
interface FormState {
  [key: string]: FormField;
}

// 表单Context类型
interface FormContextType {
  fields: FormState;
  registerField: (
    name: string,
    validators?: Array<(value: string) => string | undefined>
  ) => void;
  updateField: (name: string, value: string) => void;
  touchField: (name: string) => void;
  validateField: (name: string) => boolean;
  validateForm: () => boolean;
  resetForm: () => void;
  getFieldProps: (name: string) => {
    value: string;
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
    onBlur: () => void;
    error?: string;
    touched: boolean;
  };
  isValid: boolean;
  isDirty: boolean;
}

const FormContext = createContext<FormContextType | undefined>(undefined);

// 内置验证器
const validators = {
  required: (message = "此字段为必填项") => (value: string) =>
    value.trim() ? undefined : message,
  minLength: (min: number, message?: string) => (value: string) =>
    value.length >= min
      ? undefined
      : message || \`最少需要\${min}个字符\`,
  maxLength: (max: number, message?: string) => (value: string) =>
    value.length <= max
      ? undefined
      : message || \`最多允许\${max}个字符\`,
  email: (message = "请输入有效的邮箱地址") => (value: string) => {
    const emailRegex = /^[^\\s@]+@[^\\s@]+\\.[^\\s@]+$/;
    return emailRegex.test(value) ? undefined : message;
  },
  pattern: (regex: RegExp, message = "格式不正确") => (value: string) =>
    regex.test(value) ? undefined : message,
};

// Form Provider组件
const FormProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [fields, setFields] = useState<FormState>({}); // ← 重点：表单状态管理

  // 注册字段
  const registerField = useCallback(
    (
      name: string,
      fieldValidators: Array<(value: string) => string | undefined> = []
    ) => {
      setFields((prev) => ({
        ...prev,
        [name]: {
          value: "",
          touched: false,
          validators: fieldValidators,
        },
      }));
    },
    []
  );

  // 更新字段值
  const updateField = useCallback((name: string, value: string) => {
    setFields((prev) => {
      if (!prev[name]) return prev;

      const field = prev[name];
      const error = field.validators
        .map((validator) => validator(value))
        .find((err) => err !== undefined);

      return {
        ...prev,
        [name]: {
          ...field,
          value,
          error,
        },
      };
    });
  }, []);

  // 标记字段为已触摸
  const touchField = useCallback((name: string) => {
    setFields((prev) => {
      if (!prev[name]) return prev;
      return {
        ...prev,
        [name]: {
          ...prev[name],
          touched: true,
        },
      };
    });
  }, []);

  // 验证单个字段
  const validateField = useCallback(
    (name: string): boolean => {
      const field = fields[name];
      if (!field) return true;

      const error = field.validators
        .map((validator) => validator(field.value))
        .find((err) => err !== undefined);

      setFields((prev) => ({
        ...prev,
        [name]: {
          ...field,
          error,
          touched: true,
        },
      }));

      return !error;
    },
    [fields]
  );

  // 验证整个表单
  const validateForm = useCallback((): boolean => {
    let isFormValid = true;

    setFields((prev) => {
      const newFields = { ...prev };

      Object.keys(newFields).forEach((name) => {
        const field = newFields[name];
        const error = field.validators
          .map((validator) => validator(field.value))
          .find((err) => err !== undefined);

        newFields[name] = {
          ...field,
          error,
          touched: true,
        };

        if (error) {
          isFormValid = false;
        }
      });

      return newFields;
    });

    return isFormValid;
  }, []);

  // 重置表单
  const resetForm = useCallback(() => {
    setFields((prev) => {
      const newFields = { ...prev };
      Object.keys(newFields).forEach((name) => {
        newFields[name] = {
          ...newFields[name],
          value: "",
          error: undefined,
          touched: false,
        };
      });
      return newFields;
    });
  }, []);

  // 获取字段属性（用于绑定到input组件）
  const getFieldProps = useCallback(
    (name: string) => {
      const field = fields[name];
      if (!field) {
        console.warn(\`Field "\${name}" is not registered\`);
        return {
          value: "",
          onChange: () => {},
          onBlur: () => {},
          touched: false,
        };
      }

      return {
        value: field.value,
        onChange: (e: React.ChangeEvent<HTMLInputElement>) => {
          updateField(name, e.target.value);
        },
        onBlur: () => {
          touchField(name);
        },
        error: field.touched ? field.error : undefined,
        touched: field.touched,
      };
    },
    [fields, updateField, touchField]
  );

  // 计算表单状态
  const isValid = useMemo(() => {
    return Object.values(fields).every((field) => !field.error);
  }, [fields]);

  const isDirty = useMemo(() => {
    return Object.values(fields).some(
      (field) => field.value !== "" || field.touched
    );
  }, [fields]);

  // Context值优化
  const value = useMemo(
    () => ({
      fields,
      registerField,
      updateField,
      touchField,
      validateField,
      validateForm,
      resetForm,
      getFieldProps,
      isValid,
      isDirty,
    }),
    [
      fields,
      registerField,
      updateField,
      touchField,
      validateField,
      validateForm,
      resetForm,
      getFieldProps,
      isValid,
      isDirty,
    ]
  );

  return <FormContext.Provider value={value}>{children}</FormContext.Provider>;
};

// Form自定义Hook
const useForm = () => {
  const context = useContext(FormContext);
  if (context === undefined) {
    throw new Error("useForm must be used within a FormProvider");
  }
  return context;
};

// 字段级Hook
const useField = (name: string) => {
  const { getFieldProps, validateField } = useForm();
  const fieldProps = getFieldProps(name);

  return {
    ...fieldProps,
    validate: () => validateField(name),
  };
};

export { FormProvider, useForm, useField, validators };
export type { FormContextType, FormField, FormState };`,M=a.createContext(void 0),h={required:(n="此字段为必填项")=>t=>t.trim()?void 0:n,minLength:(n,t)=>s=>s.length>=n?void 0:t||`最少需要${n}个字符`,maxLength:(n,t)=>s=>s.length<=n?void 0:t||`最多允许${n}个字符`,email:(n="请输入有效的邮箱地址")=>t=>/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(t)?void 0:n,pattern:(n,t="格式不正确")=>s=>n.test(s)?void 0:t},$=({children:n})=>{const[t,s]=a.useState({}),o=a.useCallback((c,l=[])=>{s(u=>({...u,[c]:{value:"",touched:!1,validators:l}}))},[]),r=a.useCallback((c,l)=>{s(u=>{if(!u[c])return u;const g=u[c],b=g.validators.map(v=>v(l)).find(v=>v!==void 0);return{...u,[c]:{...g,value:l,error:b}}})},[]),i=a.useCallback(c=>{s(l=>l[c]?{...l,[c]:{...l[c],touched:!0}}:l)},[]),x=a.useCallback(c=>{const l=t[c];if(!l)return!0;const u=l.validators.map(g=>g(l.value)).find(g=>g!==void 0);return s(g=>({...g,[c]:{...l,error:u,touched:!0}})),!u},[t]),d=a.useCallback(()=>{let c=!0;return s(l=>{const u={...l};return Object.keys(u).forEach(g=>{const b=u[g],v=b.validators.map(k=>k(b.value)).find(k=>k!==void 0);u[g]={...b,error:v,touched:!0},v&&(c=!1)}),u}),c},[]),p=a.useCallback(()=>{s(c=>{const l={...c};return Object.keys(l).forEach(u=>{l[u]={...l[u],value:"",error:void 0,touched:!1}}),l})},[]),f=a.useCallback(c=>{const l=t[c];return l?{value:l.value,onChange:u=>{r(c,u.target.value)},onBlur:()=>{i(c)},error:l.touched?l.error:void 0,touched:l.touched}:(console.warn(`Field "${c}" is not registered`),{value:"",onChange:()=>{},onBlur:()=>{},touched:!1})},[t,r,i]),m=a.useMemo(()=>Object.values(t).every(c=>!c.error),[t]),y=a.useMemo(()=>Object.values(t).some(c=>c.value!==""||c.touched),[t]),N=a.useMemo(()=>({fields:t,registerField:o,updateField:r,touchField:i,validateField:x,validateForm:d,resetForm:p,getFieldProps:f,isValid:m,isDirty:y}),[t,o,r,i,x,d,p,f,m,y]);return e.jsx(M.Provider,{value:N,children:n})},C=()=>{const n=a.useContext(M);if(n===void 0)throw new Error("useForm must be used within a FormProvider");return n},L=n=>{const{getFieldProps:t,validateField:s}=C();return{...t(n),validate:()=>s(n)}},j=({name:n,label:t,type:s="text",placeholder:o})=>{const{value:r,onChange:i,onBlur:x,error:d,touched:p}=L(n);return e.jsxs("div",{className:"space-y-1",children:[e.jsx("label",{className:"block text-sm font-medium text-gray-700",children:t}),e.jsx("input",{type:s,value:r,onChange:i,onBlur:x,placeholder:o,className:`w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 transition-colors ${p&&d?"border-red-500 focus:ring-red-500":"border-gray-300 focus:ring-blue-500"}`}),p&&d&&e.jsxs("p",{className:"text-sm text-red-600 flex items-center",children:[e.jsx("span",{className:"mr-1",children:"⚠️"}),d]})]})},q=()=>{const{isValid:n,isDirty:t,fields:s}=C(),o=Object.keys(s).length,r=Object.values(s).filter(d=>!d.error).length,i=Object.values(s).filter(d=>d.touched).length,x=Object.values(s).filter(d=>d.value.trim()!=="").length;return e.jsxs("div",{className:"bg-gray-50 p-4 rounded-lg border",children:[e.jsx("h4",{className:"font-semibold text-gray-800 mb-3",children:"📊 表单状态"}),e.jsxs("div",{className:"grid grid-cols-2 gap-3 text-sm",children:[e.jsxs("div",{className:"flex justify-between",children:[e.jsx("span",{children:"表单有效:"}),e.jsx("span",{className:n?"text-green-600":"text-red-600",children:n?"✅ 是":"❌ 否"})]}),e.jsxs("div",{className:"flex justify-between",children:[e.jsx("span",{children:"已修改:"}),e.jsx("span",{className:t?"text-blue-600":"text-gray-600",children:t?"✏️ 是":"📝 否"})]}),e.jsxs("div",{className:"flex justify-between",children:[e.jsx("span",{children:"字段总数:"}),e.jsx("span",{className:"text-purple-600",children:o})]}),e.jsxs("div",{className:"flex justify-between",children:[e.jsx("span",{children:"有效字段:"}),e.jsxs("span",{className:"text-green-600",children:[r,"/",o]})]}),e.jsxs("div",{className:"flex justify-between",children:[e.jsx("span",{children:"已触摸:"}),e.jsxs("span",{className:"text-orange-600",children:[i,"/",o]})]}),e.jsxs("div",{className:"flex justify-between",children:[e.jsx("span",{children:"已填写:"}),e.jsxs("span",{className:"text-indigo-600",children:[x,"/",o]})]})]})]})},A=()=>{const{validateForm:n,resetForm:t,isValid:s,isDirty:o}=C(),r=d=>{d.preventDefault(),n()?alert(`表单提交成功！

在实际应用中，这里会发送数据到服务器。`):alert("表单验证失败，请检查错误信息。")},i=()=>{o&&!confirm("确定要重置表单吗？所有输入的数据将丢失。")||t()},x=()=>{const d=n();alert(d?"✅ 表单验证通过！":"❌ 表单验证失败，请检查错误信息。")};return e.jsxs("div",{className:"flex flex-wrap gap-3",children:[e.jsx("button",{onClick:r,disabled:!s,className:"px-6 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors disabled:bg-gray-300 disabled:cursor-not-allowed",children:"提交表单"}),e.jsx("button",{onClick:x,className:"px-6 py-2 bg-green-500 text-white rounded-lg hover:bg-green-600 transition-colors",children:"验证表单"}),e.jsx("button",{onClick:i,disabled:!o,className:"px-6 py-2 bg-gray-500 text-white rounded-lg hover:bg-gray-600 transition-colors disabled:bg-gray-300 disabled:cursor-not-allowed",children:"重置表单"})]})},B=()=>{const{fields:n}=C();return e.jsxs("div",{className:"bg-white p-4 rounded-lg border",children:[e.jsx("h4",{className:"font-semibold text-gray-800 mb-3",children:"🔍 字段详情"}),e.jsx("div",{className:"space-y-2 max-h-40 overflow-y-auto",children:Object.entries(n).map(([t,s])=>e.jsxs("div",{className:"flex items-center justify-between p-2 bg-gray-50 rounded text-sm",children:[e.jsxs("span",{className:"font-medium",children:[t,":"]}),e.jsxs("div",{className:"flex items-center space-x-2",children:[e.jsx("span",{className:"text-gray-600",children:s.value||"(空)"}),e.jsxs("div",{className:"flex space-x-1",children:[s.touched&&e.jsx("span",{className:"text-orange-500",title:"已触摸",children:"👆"}),s.error?e.jsx("span",{className:"text-red-500",title:s.error,children:"❌"}):e.jsx("span",{className:"text-green-500",title:"有效",children:"✅"})]})]})]},t))})]})},z=()=>{const{registerField:n}=C();return a.useEffect(()=>{n("username",[h.required("用户名不能为空"),h.minLength(3,"用户名至少需要3个字符"),h.maxLength(20,"用户名不能超过20个字符"),h.pattern(/^[a-zA-Z0-9_]+$/,"用户名只能包含字母、数字和下划线")]),n("email",[h.required("邮箱不能为空"),h.email("请输入有效的邮箱地址")]),n("password",[h.required("密码不能为空"),h.minLength(8,"密码至少需要8个字符"),h.pattern(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)/,"密码必须包含大小写字母和数字")]),n("confirmPassword",[h.required("请确认密码"),t=>{var r;const{fields:s}=C.getState?C.getState():{fields:{}},o=((r=s.password)==null?void 0:r.value)||"";return t===o?void 0:"两次输入的密码不一致"}]),n("phone",[h.required("手机号不能为空"),h.pattern(/^1[3-9]\d{9}$/,"请输入有效的手机号")]),n("age",[h.required("年龄不能为空"),h.pattern(/^\d+$/,"年龄必须是数字"),t=>{const s=parseInt(t);if(s<18)return"年龄必须大于等于18岁";if(s>120)return"年龄不能超过120岁"}])},[n]),e.jsxs("form",{className:"space-y-4",children:[e.jsxs("div",{className:"grid md:grid-cols-2 gap-4",children:[e.jsx(j,{name:"username",label:"用户名",placeholder:"请输入用户名"}),e.jsx(j,{name:"email",label:"邮箱地址",type:"email",placeholder:"请输入邮箱地址"})]}),e.jsxs("div",{className:"grid md:grid-cols-2 gap-4",children:[e.jsx(j,{name:"password",label:"密码",type:"password",placeholder:"请输入密码"}),e.jsx(j,{name:"confirmPassword",label:"确认密码",type:"password",placeholder:"请再次输入密码"})]}),e.jsxs("div",{className:"grid md:grid-cols-2 gap-4",children:[e.jsx(j,{name:"phone",label:"手机号",type:"tel",placeholder:"请输入手机号"}),e.jsx(j,{name:"age",label:"年龄",type:"number",placeholder:"请输入年龄"})]}),e.jsx(A,{})]})},K=()=>e.jsx($,{children:e.jsx("div",{className:"space-y-6",children:e.jsxs("div",{className:"bg-white p-6 rounded-lg shadow-md border",children:[e.jsx("h3",{className:"text-xl font-bold text-gray-800 mb-4",children:"📝 表单管理示例"}),e.jsx("p",{className:"text-gray-600 mb-6",children:"这个示例展示了如何使用Context Hook实现复杂的表单管理，包括字段注册、验证、状态跟踪和错误处理。"}),e.jsxs("div",{className:"grid lg:grid-cols-3 gap-6",children:[e.jsx("div",{className:"lg:col-span-2",children:e.jsx(z,{})}),e.jsxs("div",{className:"space-y-4",children:[e.jsx(q,{}),e.jsx(B,{})]})]}),e.jsxs("div",{className:"mt-6 p-4 bg-gray-50 rounded-lg",children:[e.jsx("h4",{className:"font-semibold text-gray-800 mb-2",children:"⚙️ 功能特性:"}),e.jsxs("ul",{className:"text-sm text-gray-600 space-y-1",children:[e.jsx("li",{children:"• 动态字段注册和验证器配置"}),e.jsx("li",{children:"• 字段级Hook提供细粒度控制"}),e.jsx("li",{children:"• 实时验证和错误提示"}),e.jsx("li",{children:"• 表单状态跟踪（有效性、修改状态）"}),e.jsx("li",{children:"• 自定义验证器和复合验证"}),e.jsx("li",{children:"• 统一的表单操作接口"})]})]})]})})}),P=a.createContext(void 0),U=({children:n})=>{const[t,s]=a.useState([]),[o,r]=a.useState("disconnected"),i=a.useRef(null),x=a.useRef(null),d=a.useCallback(()=>{var l;((l=i.current)==null?void 0:l.readyState)!==WebSocket.OPEN&&(r("connecting"),setTimeout(()=>{r("connected");const u={id:Date.now().toString(),text:"欢迎来到聊天室！",timestamp:new Date,sender:"System",type:"system"};s(b=>[...b,u]);const g=setInterval(()=>{const b=["你好！有什么可以帮助你的吗？","今天天气不错呢！","你在做什么有趣的项目吗？","需要任何技术支持吗？","希望你今天过得愉快！"],v=b[Math.floor(Math.random()*b.length)],k={id:Date.now().toString(),text:v,timestamp:new Date,sender:"Bot",type:"bot"};s(R=>[...R,k])},1e4);return()=>clearInterval(g)},1e3))},[]),p=a.useCallback(()=>{i.current&&(i.current.close(),i.current=null),r("disconnected"),x.current&&(clearTimeout(x.current),x.current=null)},[]),f=a.useCallback(()=>{p(),setTimeout(d,1e3)},[d,p]),m=a.useCallback((l,u)=>{if(o!=="connected"){console.warn("WebSocket is not connected");return}const g={id:Date.now().toString(),text:l,timestamp:new Date,sender:u,type:"user"};s(b=>[...b,g])},[o]),y=a.useCallback(()=>{s([])},[]),N=o==="connected";a.useEffect(()=>(d(),p),[d,p]);const c=a.useMemo(()=>({messages:t,connectionStatus:o,sendMessage:m,clearMessages:y,reconnect:f,isConnected:N}),[t,o,m,y,f,N]);return e.jsx(P.Provider,{value:c,children:n})},w=()=>{const n=a.useContext(P);if(n===void 0)throw new Error("useWebSocket must be used within a WebSocketProvider");return n},Z=()=>{const{connectionStatus:n,reconnect:t}=w(),s=()=>{switch(n){case"connected":return"bg-green-500";case"connecting":return"bg-yellow-500";case"disconnected":return"bg-gray-500";case"error":return"bg-red-500";default:return"bg-gray-500"}},o=()=>{switch(n){case"connected":return"已连接";case"connecting":return"连接中...";case"disconnected":return"已断开";case"error":return"连接错误";default:return"未知状态"}};return e.jsxs("div",{className:"flex items-center justify-between p-3 bg-gray-50 rounded-lg border",children:[e.jsxs("div",{className:"flex items-center space-x-2",children:[e.jsx("div",{className:`w-3 h-3 rounded-full ${s()}`}),e.jsx("span",{className:"text-sm font-medium text-gray-700",children:o()})]}),n!=="connected"&&e.jsx("button",{onClick:t,className:"px-3 py-1 text-xs bg-blue-500 text-white rounded hover:bg-blue-600 transition-colors",children:"重新连接"})]})},J=()=>{const{messages:n}=w(),t=a.useRef(null);a.useEffect(()=>{var r;(r=t.current)==null||r.scrollIntoView({behavior:"smooth"})},[n]);const s=r=>{switch(r.type){case"user":return"bg-blue-500 text-white ml-auto";case"bot":return"bg-gray-200 text-gray-800";case"system":return"bg-yellow-100 text-yellow-800 mx-auto text-center";default:return"bg-gray-100 text-gray-800"}},o=r=>r.toLocaleTimeString("zh-CN",{hour:"2-digit",minute:"2-digit"});return e.jsxs("div",{className:"flex-1 overflow-y-auto p-4 space-y-3 bg-gray-50 rounded-lg border max-h-80",children:[n.length===0?e.jsxs("div",{className:"text-center text-gray-500 py-8",children:[e.jsx("div",{className:"text-4xl mb-2",children:"💬"}),e.jsx("p",{children:"暂无消息，开始聊天吧！"})]}):n.map(r=>e.jsxs("div",{className:`max-w-xs p-3 rounded-lg ${s(r)} ${r.type==="system"?"max-w-full":""}`,children:[e.jsxs("div",{className:"flex items-center justify-between mb-1",children:[e.jsx("span",{className:"text-xs font-medium opacity-75",children:r.sender}),e.jsx("span",{className:"text-xs opacity-60",children:o(r.timestamp)})]}),e.jsx("p",{className:"text-sm",children:r.text})]},r.id)),e.jsx("div",{ref:t})]})},_=()=>{const{sendMessage:n,isConnected:t,clearMessages:s}=w(),[o,r]=a.useState(""),[i,x]=a.useState("用户"),d=a.useRef(null),p=()=>{var m;o.trim()&&t&&(n(o.trim(),i),r(""),(m=d.current)==null||m.focus())},f=m=>{m.key==="Enter"&&!m.shiftKey&&(m.preventDefault(),p())};return e.jsxs("div",{className:"space-y-3",children:[e.jsxs("div",{className:"flex space-x-2",children:[e.jsx("input",{type:"text",value:i,onChange:m=>x(m.target.value),placeholder:"发送者名称",className:"px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 flex-shrink-0 w-32"}),e.jsx("button",{onClick:s,className:"px-3 py-2 bg-gray-500 text-white rounded-lg hover:bg-gray-600 transition-colors flex-shrink-0",children:"清空"})]}),e.jsxs("div",{className:"flex space-x-2",children:[e.jsx("input",{ref:d,type:"text",value:o,onChange:m=>r(m.target.value),onKeyPress:f,placeholder:t?"输入消息...":"请等待连接...",disabled:!t,className:"flex-1 px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 disabled:bg-gray-100 disabled:cursor-not-allowed"}),e.jsx("button",{onClick:p,disabled:!t||!o.trim(),className:"px-6 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors disabled:bg-gray-300 disabled:cursor-not-allowed",children:"发送"})]})]})},G=()=>{const{messages:n}=w(),t=n.filter(i=>i.type==="user").length,s=n.filter(i=>i.type==="bot").length,o=n.filter(i=>i.type==="system").length,r=n.length;return e.jsxs("div",{className:"bg-white p-4 rounded-lg border",children:[e.jsx("h4",{className:"font-semibold text-gray-800 mb-3",children:"📊 聊天统计"}),e.jsxs("div",{className:"grid grid-cols-2 gap-3 text-sm",children:[e.jsxs("div",{className:"flex justify-between",children:[e.jsx("span",{children:"总消息数:"}),e.jsx("span",{className:"font-medium text-blue-600",children:r})]}),e.jsxs("div",{className:"flex justify-between",children:[e.jsx("span",{children:"用户消息:"}),e.jsx("span",{className:"font-medium text-green-600",children:t})]}),e.jsxs("div",{className:"flex justify-between",children:[e.jsx("span",{children:"机器人消息:"}),e.jsx("span",{className:"font-medium text-purple-600",children:s})]}),e.jsxs("div",{className:"flex justify-between",children:[e.jsx("span",{children:"系统消息:"}),e.jsx("span",{className:"font-medium text-orange-600",children:o})]})]})]})},Q=()=>e.jsxs("div",{className:"grid lg:grid-cols-3 gap-6",children:[e.jsxs("div",{className:"lg:col-span-2 space-y-4",children:[e.jsx(Z,{}),e.jsx(J,{}),e.jsx(_,{})]}),e.jsxs("div",{className:"space-y-4",children:[e.jsx(G,{}),e.jsxs("div",{className:"bg-blue-50 p-4 rounded-lg border border-blue-200",children:[e.jsx("h4",{className:"font-semibold text-blue-800 mb-2",children:"💡 功能特性"}),e.jsxs("ul",{className:"text-sm text-blue-700 space-y-1",children:[e.jsx("li",{children:"• 实时连接状态监控"}),e.jsx("li",{children:"• 自动重连机制"}),e.jsx("li",{children:"• 消息类型分类显示"}),e.jsx("li",{children:"• 自动滚动到最新消息"}),e.jsx("li",{children:"• 键盘快捷键支持"}),e.jsx("li",{children:"• 消息统计分析"})]})]})]})]}),X=()=>e.jsx(U,{children:e.jsx("div",{className:"space-y-6",children:e.jsxs("div",{className:"bg-white p-6 rounded-lg shadow-md border",children:[e.jsx("h3",{className:"text-xl font-bold text-gray-800 mb-4",children:"💬 WebSocket 聊天示例"}),e.jsx("p",{className:"text-gray-600 mb-6",children:"这个示例展示了如何使用Context Hook管理复杂的异步状态，包括WebSocket连接、消息队列和实时通信。"}),e.jsx(Q,{}),e.jsxs("div",{className:"mt-6 p-4 bg-gray-50 rounded-lg",children:[e.jsx("h4",{className:"font-semibold text-gray-800 mb-2",children:"🔧 技术实现:"}),e.jsxs("ul",{className:"text-sm text-gray-600 space-y-1",children:[e.jsx("li",{children:"• useRef管理WebSocket连接引用"}),e.jsx("li",{children:"• useEffect处理连接生命周期"}),e.jsx("li",{children:"• 函数式状态更新避免闭包陷阱"}),e.jsx("li",{children:"• 自动清理副作用防止内存泄漏"}),e.jsx("li",{children:"• 状态机模式管理连接状态"}),e.jsx("li",{children:"• 消息队列和实时数据同步"})]})]})]})})}),Y=`import React, {\r
  createContext,\r
  useCallback,\r
  useContext,\r
  useEffect,\r
  useMemo,\r
  useRef,\r
  useState,\r
} from "react";\r
\r
// 消息类型定义\r
interface Message {\r
  id: string;\r
  text: string;\r
  timestamp: Date;\r
  sender: string;\r
  type: "user" | "system" | "bot";\r
}\r
\r
// WebSocket Context类型\r
interface WebSocketContextType {\r
  messages: Message[];\r
  connectionStatus: "connecting" | "connected" | "disconnected" | "error";\r
  sendMessage: (text: string, sender: string) => void;\r
  clearMessages: () => void;\r
  reconnect: () => void;\r
  isConnected: boolean;\r
}\r
\r
const WebSocketContext = createContext<WebSocketContextType | undefined>(\r
  undefined\r
);\r
\r
// WebSocket Provider组件\r
const WebSocketProvider: React.FC<{ children: React.ReactNode }> = ({\r
  children,\r
}) => {\r
  const [messages, setMessages] = useState<Message[]>([]);\r
  const [connectionStatus, setConnectionStatus] = useState<\r
    "connecting" | "connected" | "disconnected" | "error"\r
  >("disconnected");\r
  const wsRef = useRef<WebSocket | null>(null); // ← 重点：使用useRef存储WebSocket引用\r
  const reconnectTimeoutRef = useRef<NodeJS.Timeout | null>(null);\r
\r
  // 连接函数\r
  const connect = useCallback(() => {\r
    if (wsRef.current?.readyState === WebSocket.OPEN) {\r
      return;\r
    }\r
\r
    setConnectionStatus("connecting");\r
\r
    // 模拟WebSocket连接\r
    setTimeout(() => {\r
      setConnectionStatus("connected"); // ← 重点：状态更新\r
\r
      // 模拟接收系统消息\r
      const systemMessage: Message = {\r
        id: Date.now().toString(),\r
        text: "欢迎来到聊天室！",\r
        timestamp: new Date(),\r
        sender: "System",\r
        type: "system",\r
      };\r
      setMessages((prev) => [...prev, systemMessage]); // ← 重点：函数式状态更新\r
\r
      // 模拟定期接收机器人消息\r
      const interval = setInterval(() => {\r
        const botMessages = [\r
          "你好！有什么可以帮助你的吗？",\r
          "今天天气不错呢！",\r
          "你在做什么有趣的项目吗？",\r
          "需要任何技术支持吗？",\r
          "希望你今天过得愉快！",\r
        ];\r
\r
        const randomMessage =\r
          botMessages[Math.floor(Math.random() * botMessages.length)];\r
        const botMessage: Message = {\r
          id: Date.now().toString(),\r
          text: randomMessage,\r
          timestamp: new Date(),\r
          sender: "Bot",\r
          type: "bot",\r
        };\r
\r
        setMessages((prev) => [...prev, botMessage]);\r
      }, 10000); // 每10秒发送一条机器人消息\r
\r
      // 清理定时器\r
      return () => clearInterval(interval);\r
    }, 1000);\r
  }, []);\r
\r
  // 断开连接函数\r
  const disconnect = useCallback(() => {\r
    if (wsRef.current) {\r
      wsRef.current.close();\r
      wsRef.current = null;\r
    }\r
    setConnectionStatus("disconnected");\r
\r
    if (reconnectTimeoutRef.current) {\r
      clearTimeout(reconnectTimeoutRef.current);\r
      reconnectTimeoutRef.current = null;\r
    }\r
  }, []);\r
\r
  // 重连函数\r
  const reconnect = useCallback(() => {\r
    disconnect();\r
    setTimeout(connect, 1000);\r
  }, [connect, disconnect]);\r
\r
  // 发送消息函数\r
  const sendMessage = useCallback(\r
    (text: string, sender: string) => {\r
      if (connectionStatus !== "connected") {\r
        console.warn("WebSocket is not connected");\r
        return;\r
      }\r
\r
      const message: Message = {\r
        id: Date.now().toString(),\r
        text,\r
        timestamp: new Date(),\r
        sender,\r
        type: "user",\r
      };\r
\r
      setMessages((prev) => [...prev, message]);\r
    },\r
    [connectionStatus]\r
  );\r
\r
  // 清空消息函数\r
  const clearMessages = useCallback(() => {\r
    setMessages([]);\r
  }, []);\r
\r
  const isConnected = connectionStatus === "connected";\r
\r
  // 自动连接\r
  useEffect(() => {\r
    connect();\r
    return disconnect; // ← 重点：清理副作用\r
  }, [connect, disconnect]);\r
\r
  // Context值优化\r
  const value = useMemo(\r
    () => ({\r
      messages,\r
      connectionStatus,\r
      sendMessage,\r
      clearMessages,\r
      reconnect,\r
      isConnected,\r
    }),\r
    [\r
      messages,\r
      connectionStatus,\r
      sendMessage,\r
      clearMessages,\r
      reconnect,\r
      isConnected,\r
    ]\r
  );\r
\r
  return (\r
    <WebSocketContext.Provider value={value}>\r
      {children}\r
    </WebSocketContext.Provider>\r
  );\r
};\r
\r
// WebSocket自定义Hook\r
const useWebSocket = () => {\r
  const context = useContext(WebSocketContext);\r
  if (context === undefined) {\r
    throw new Error("useWebSocket must be used within a WebSocketProvider");\r
  }\r
  return context;\r
};\r
\r
export { WebSocketProvider, useWebSocket };\r
export type { WebSocketContextType, Message };\r
`,te=()=>{const n=[{title:"核心概念",items:["useContext Hook用于在函数组件中消费Context值","提供比Context.Consumer更简洁的API","支持直接访问Context中的数据和方法","必须在对应的Provider组件内部使用"]},{title:"主要优势",items:["语法更简洁，减少组件嵌套","提高代码可读性和维护性","支持TypeScript类型推断","提供更好的开发体验"]},{title:"适用场景",items:["多组件间状态共享（主题切换、用户认证）","全局配置和应用设置管理","表单状态管理和验证","替代prop drilling问题"]},{title:"使用限制",items:["只能在函数组件或自定义Hook中使用","必须在对应的Provider组件内部调用","Context值变化会导致所有消费组件重新渲染","需要注意性能优化和合理拆分Context"]}],t=[{title:"基础计数器示例",description:"展示useContext Hook的基本用法，包括状态管理和性能优化",component:e.jsx(V,{}),observationPoints:["点击增加按钮时，计数器值会在所有使用Context的组件中同步更新","重置操作会将计数器值重置为0，所有相关组件都会响应","Context值使用useMemo优化，避免不必要的重渲染"],keyPoints:["useContext Hook提供简洁的Context访问方式","自定义Hook封装Context逻辑，提供更好的API","Context值变化时所有消费组件都会重新渲染","使用TypeScript确保类型安全"],commonTraps:["忘记在Provider内部使用useContext","每次渲染都创建新的Context值对象","在类组件中直接使用useContext Hook"],solutions:["确保组件被正确的Provider包装","使用useMemo缓存Context值对象","在类组件中使用Context.Consumer或静态contextType"],importantTips:["计数器示例展示了useContext的基本用法","自定义Hook提供了更好的错误处理","Context值的优化对性能很重要"],codeExample:{title:"计数器Context实现",code:I,language:"tsx",highlightLines:[10,20,30]}},{title:"WebSocket聊天示例",description:"演示复杂异步状态管理，包括连接状态、消息队列和实时通信",component:e.jsx(X,{}),observationPoints:["连接WebSocket时，连接状态会实时更新显示","发送消息后，消息会立即显示在聊天界面中","断开连接时，界面会显示相应的状态提示"],keyPoints:["Context管理WebSocket连接状态和消息队列","useEffect处理WebSocket生命周期管理","异步操作与Context状态的同步更新","实现实时通信的完整解决方案"],commonTraps:["忘记在组件卸载时关闭WebSocket连接","没有正确处理连接失败的错误状态","消息队列管理不当导致内存泄漏"],solutions:["在useEffect的清理函数中关闭WebSocket","添加完整的错误处理和重连机制","限制消息队列大小，及时清理旧消息"],importantTips:["WebSocket示例展示了异步状态管理的复杂性","Context提供了优雅的实时通信解决方案","正确的生命周期管理对WebSocket很重要"],codeExample:{title:"WebSocket Context实现",code:Y,language:"tsx",highlightLines:[15,35,50]}},{title:"表单管理示例",description:"实现完整的表单状态管理，包括验证、提交和错误处理",component:e.jsx(K,{}),observationPoints:["输入字段时，表单状态会实时更新和验证","提交表单时，会显示加载状态和验证结果","表单重置时，所有字段和错误状态都会清空"],keyPoints:["Context统一管理表单状态和验证逻辑","实现字段级别的验证和错误提示","支持异步表单提交和状态管理","提供完整的表单操作API"],commonTraps:["每次输入都触发整个表单重新渲染","验证逻辑与UI组件耦合过紧","没有正确处理异步提交的状态"],solutions:["使用useCallback优化事件处理函数","将验证逻辑封装在Context中统一管理","添加加载状态和错误处理机制"],importantTips:["表单Context提供了完整的表单管理解决方案","支持复杂的验证规则和异步操作","Context模式简化了表单状态的共享"],codeExample:{title:"表单Context实现",code:O,language:"tsx",highlightLines:[20,40,60]}}];return e.jsx(W,{title:"Context Hook",description:"使用useContext Hook在函数组件中消费Context值，实现组件间的状态共享和通信。",overview:n,examples:t,tutorial:{concepts:["useContext Hook用于在函数组件中消费Context值","自定义Hook封装提供更好的API和错误处理","使用useMemo和useCallback优化Context值性能","Context值变化会导致所有消费组件重新渲染","合理拆分Context可以减少不必要的重渲染"],steps:["使用createContext创建Context对象，定义类型接口","创建Provider组件，管理状态和提供Context值","封装useContext逻辑到自定义Hook中","在函数组件中调用自定义Hook访问Context值","添加错误处理和类型安全检查"],tips:["始终为Context提供默认值和类型定义","使用自定义Hook封装Context逻辑","在Hook中添加错误边界检查","使用useMemo和useCallback优化性能","避免在Context中存储频繁变化的值","考虑将大型Context拆分为多个小Context"]},interview:{questions:[{question:"useContext Hook相比Context.Consumer有什么优势？",answer:"useContext提供更简洁的API，减少组件嵌套，提高代码可读性。支持TypeScript类型推断，在函数组件中使用更自然。避免了render props模式的复杂性。"},{question:"如何优化Context的性能问题？",answer:"使用useMemo缓存Context值，用useCallback缓存函数。将Context按功能拆分，避免不必要的重渲染。使用React.memo包装消费组件。考虑使用状态管理库处理复杂状态。"},{question:"Context Hook在什么情况下会重新渲染？",answer:"当Context的value发生变化时，所有使用该Context的组件都会重新渲染。即使只是对象引用变化而内容相同，也会触发重渲染。这就是为什么需要使用useMemo优化的原因。"},{question:"如何处理Context未提供的错误情况？",answer:"在自定义Hook中检查context是否为undefined，如果是则抛出有意义的错误信息。这样可以帮助开发者快速定位问题，确保Hook只在正确的Provider内使用。"}],keyPoints:["useContext只能在函数组件或自定义Hook中使用","Context值变化会导致所有消费组件重新渲染","需要在对应的Provider组件内部使用","支持TypeScript类型推断和检查","可以与其他Hook组合使用实现复杂逻辑"]},bestPractices:{dos:["使用TypeScript定义Context类型接口","创建自定义Hook封装Context逻辑","在Hook中添加错误边界检查","使用useMemo和useCallback优化性能","按功能拆分Context，避免单一巨大Context","为Context提供有意义的默认值"],donts:["不要在Context中存储频繁变化的值","不要忘记Provider包装组件","不要在类组件中直接使用useContext","不要创建过深的Context嵌套","不要在Context中存储不相关的状态","不要忽视Context的性能影响"],patterns:["Provider + Hook模式：封装Context逻辑","多Context组合：按功能拆分状态","Context + Reducer：管理复杂状态","Context + 本地存储：持久化状态","Context + API：集成数据获取"]}})};export{te as default};
