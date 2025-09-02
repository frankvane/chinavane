import{r as u,j as e}from"./index-D5aG88J3.js";import{C as w}from"./ComponentTemplate-DZf1RTVD.js";const j=(t,s)=>{switch(s.type){case"increment":return{...t,count:t.count+t.step};case"decrement":return{...t,count:t.count-t.step};case"reset":return{...t,count:0};case"set_step":return{...t,step:s.payload};default:return t}},S=()=>{const[t,s]=u.useReducer(j,{count:0,step:1}),[n,o]=u.useState([]),[m,p]=u.useState("1"),i=(c,b)=>{const v=`[${new Date().toLocaleTimeString()}] ${c} -> count: ${b.count}, step: ${b.step}`;o(f=>[v,...f].slice(0,10))},g=()=>{s({type:"increment"}),i("增加",{count:t.count+t.step,step:t.step})},x=()=>{s({type:"decrement"}),i("减少",{count:t.count-t.step,step:t.step})},r=()=>{s({type:"reset"}),i("重置",{count:0,step:t.step})},l=()=>{const c=parseInt(m)||1;s({type:"set_step",payload:c}),i(`设置步长为 ${c}`,{count:t.count,step:c})},d=()=>{o([])};return e.jsxs("div",{className:"p-6 bg-white rounded-lg border border-gray-200",children:[e.jsx("h3",{className:"text-lg font-semibold text-gray-800 mb-4",children:"基础计数器"}),e.jsx("div",{className:"mb-6 p-4 bg-blue-50 rounded-lg border border-blue-200",children:e.jsxs("div",{className:"grid grid-cols-2 gap-4 text-center",children:[e.jsxs("div",{children:[e.jsx("div",{className:"text-2xl font-bold text-blue-600",children:t.count}),e.jsx("div",{className:"text-sm text-blue-500",children:"当前计数"})]}),e.jsxs("div",{children:[e.jsx("div",{className:"text-2xl font-bold text-green-600",children:t.step}),e.jsx("div",{className:"text-sm text-green-500",children:"当前步长"})]})]})}),e.jsxs("div",{className:"mb-6 space-y-4",children:[e.jsxs("div",{className:"flex flex-wrap gap-3",children:[e.jsxs("button",{onClick:g,className:"px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600 transition-colors",children:["增加 (+",t.step,")"]}),e.jsxs("button",{onClick:x,className:"px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600 transition-colors",children:["减少 (-",t.step,")"]}),e.jsx("button",{onClick:r,className:"px-4 py-2 bg-gray-500 text-white rounded hover:bg-gray-600 transition-colors",children:"重置"})]}),e.jsxs("div",{className:"flex items-center space-x-3",children:[e.jsx("label",{className:"text-sm font-medium text-gray-700",children:"设置步长:"}),e.jsx("input",{type:"number",value:m,onChange:c=>p(c.target.value),className:"w-20 px-2 py-1 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500",min:"1"}),e.jsx("button",{onClick:l,className:"px-3 py-1 bg-blue-500 text-white rounded hover:bg-blue-600 transition-colors text-sm",children:"设置"})]})]}),e.jsxs("div",{className:"mb-4",children:[e.jsxs("div",{className:"flex justify-between items-center mb-2",children:[e.jsx("h4",{className:"font-semibold text-gray-800",children:"操作日志"}),e.jsx("button",{onClick:d,className:"px-2 py-1 bg-gray-400 text-white rounded text-xs hover:bg-gray-500 transition-colors",children:"清空日志"})]}),e.jsx("div",{className:"bg-gray-50 rounded-lg p-3 max-h-40 overflow-y-auto",children:n.length===0?e.jsx("div",{className:"text-gray-500 text-sm text-center py-2",children:"暂无操作记录"}):e.jsx("div",{className:"space-y-1",children:n.map((c,b)=>e.jsx("div",{className:"text-xs text-gray-600 font-mono",children:c},b))})})]}),e.jsx("div",{className:"p-3 bg-blue-50 rounded border border-blue-200",children:e.jsx("p",{className:"text-sm text-blue-800",children:"💡 useReducer 通过 reducer 函数集中处理状态更新逻辑，使状态变化更可预测"})})]})},C=`import React, { useReducer, useState } from 'react';

// 定义状态类型
interface CounterState {
  count: number;
  step: number;
}

// 定义 Action 类型
type CounterAction =
  | { type: 'increment' }
  | { type: 'decrement' }
  | { type: 'reset' }
  | { type: 'set_step'; payload: number };

// Reducer 函数
const counterReducer = (state: CounterState, action: CounterAction): CounterState => {
  switch (action.type) {
    case 'increment':
      return { ...state, count: state.count + state.step };
    case 'decrement':
      return { ...state, count: state.count - state.step };
    case 'reset':
      return { ...state, count: 0 };
    case 'set_step':
      return { ...state, step: action.payload };
    default:
      return state;
  }
};

const BasicReducerDemo: React.FC = () => {
  const [state, dispatch] = useReducer(counterReducer, {
    count: 0,
    step: 1
  });
  
  const [logs, setLogs] = useState<string[]>([]);
  const [customStep, setCustomStep] = useState<string>('1');

  const addLog = (action: string, newState: CounterState) => {
    const timestamp = new Date().toLocaleTimeString();
    const logEntry = \`[\${timestamp}] \${action} -> count: \${newState.count}, step: \${newState.step}\`;
    setLogs(prev => [logEntry, ...prev].slice(0, 10));
  };

  const handleIncrement = () => {
    dispatch({ type: 'increment' });
    addLog('增加', { count: state.count + state.step, step: state.step });
  };

  const handleDecrement = () => {
    dispatch({ type: 'decrement' });
    addLog('减少', { count: state.count - state.step, step: state.step });
  };

  const handleReset = () => {
    dispatch({ type: 'reset' });
    addLog('重置', { count: 0, step: state.step });
  };

  const handleSetStep = () => {
    const newStep = parseInt(customStep) || 1;
    dispatch({ type: 'set_step', payload: newStep });
    addLog(\`设置步长为 \${newStep}\`, { count: state.count, step: newStep });
  };

  const clearLogs = () => {
    setLogs([]);
  };

  return (
    <div className="p-6 bg-white rounded-lg border border-gray-200">
      <h3 className="text-lg font-semibold text-gray-800 mb-4">基础计数器</h3>
      
      {/* 当前状态显示 */}
      <div className="mb-6 p-4 bg-blue-50 rounded-lg border border-blue-200">
        <div className="grid grid-cols-2 gap-4 text-center">
          <div>
            <div className="text-2xl font-bold text-blue-600">{state.count}</div>
            <div className="text-sm text-blue-500">当前计数</div>
          </div>
          <div>
            <div className="text-2xl font-bold text-green-600">{state.step}</div>
            <div className="text-sm text-green-500">当前步长</div>
          </div>
        </div>
      </div>
      
      {/* 操作按钮 */}
      <div className="mb-6 space-y-4">
        <div className="flex flex-wrap gap-3">
          <button
            onClick={handleIncrement}
            className="px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600 transition-colors"
          >
            增加 (+{state.step})
          </button>
          <button
            onClick={handleDecrement}
            className="px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600 transition-colors"
          >
            减少 (-{state.step})
          </button>
          <button
            onClick={handleReset}
            className="px-4 py-2 bg-gray-500 text-white rounded hover:bg-gray-600 transition-colors"
          >
            重置
          </button>
        </div>
        
        {/* 步长设置 */}
        <div className="flex items-center space-x-3">
          <label className="text-sm font-medium text-gray-700">设置步长:</label>
          <input
            type="number"
            value={customStep}
            onChange={(e) => setCustomStep(e.target.value)}
            className="w-20 px-2 py-1 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
            min="1"
          />
          <button
            onClick={handleSetStep}
            className="px-3 py-1 bg-blue-500 text-white rounded hover:bg-blue-600 transition-colors text-sm"
          >
            设置
          </button>
        </div>
      </div>
      
      {/* 操作日志 */}
      <div className="mb-4">
        <div className="flex justify-between items-center mb-2">
          <h4 className="font-semibold text-gray-800">操作日志</h4>
          <button
            onClick={clearLogs}
            className="px-2 py-1 bg-gray-400 text-white rounded text-xs hover:bg-gray-500 transition-colors"
          >
            清空日志
          </button>
        </div>
        <div className="bg-gray-50 rounded-lg p-3 max-h-40 overflow-y-auto">
          {logs.length === 0 ? (
            <div className="text-gray-500 text-sm text-center py-2">暂无操作记录</div>
          ) : (
            <div className="space-y-1">
              {logs.map((log, index) => (
                <div key={index} className="text-xs text-gray-600 font-mono">
                  {log}
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
      
      <div className="p-3 bg-blue-50 rounded border border-blue-200">
        <p className="text-sm text-blue-800">
          💡 useReducer 通过 reducer 函数集中处理状态更新逻辑，使状态变化更可预测
        </p>
      </div>
    </div>
  );
};

export default BasicReducerDemo;`,k=(t,s)=>{switch(s.type){case"set_field":return{...t,values:{...t.values,[s.payload.field]:s.payload.value}};case"set_error":return{...t,errors:{...t.errors,[s.payload.field]:s.payload.error}};case"set_touched":return{...t,touched:{...t.touched,[s.payload.field]:!0}};case"toggle_interest":const n=t.values.interests.includes(s.payload)?t.values.interests.filter(m=>m!==s.payload):[...t.values.interests,s.payload];return{...t,values:{...t.values,interests:n}};case"set_submitting":return{...t,isSubmitting:s.payload};case"reset_form":return{values:{name:"",email:"",age:"",gender:"",interests:[],newsletter:!1},errors:{},touched:{},isSubmitting:!1};case"validate_all":const o={};return t.values.name.trim()?t.values.name.length<2&&(o.name="姓名至少2个字符"):o.name="姓名不能为空",t.values.email.trim()?/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(t.values.email)||(o.email="邮箱格式不正确"):o.email="邮箱不能为空",t.values.age.trim()?(isNaN(Number(t.values.age))||Number(t.values.age)<1||Number(t.values.age)>120)&&(o.age="请输入有效的年龄 (1-120)"):o.age="年龄不能为空",{...t,errors:o,touched:{name:!0,email:!0,age:!0}};default:return t}},R=()=>{const[t,s]=u.useReducer(k,{values:{name:"",email:"",age:"",gender:"",interests:[],newsletter:!1},errors:{},touched:{},isSubmitting:!1}),[n,o]=u.useState(""),m=(r,l)=>{let d;switch(r){case"name":l.trim()?l.length<2&&(d="姓名至少2个字符"):d="姓名不能为空";break;case"email":l.trim()?/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(l)||(d="邮箱格式不正确"):d="邮箱不能为空";break;case"age":l.trim()?(isNaN(Number(l))||Number(l)<1||Number(l)>120)&&(d="请输入有效的年龄 (1-120)"):d="年龄不能为空";break}s({type:"set_error",payload:{field:r,error:d}})},p=(r,l)=>{s({type:"set_field",payload:{field:r,value:l}}),(r==="name"||r==="email"||r==="age")&&m(r,l)},i=r=>{s({type:"set_touched",payload:{field:r}})},g=async r=>{if(r.preventDefault(),s({type:"validate_all"}),Object.keys(t.errors).some(d=>t.errors[d])){o("表单验证失败，请检查输入");return}s({type:"set_submitting",payload:!0});try{await new Promise(d=>setTimeout(d,2e3)),o("表单提交成功！"),s({type:"reset_form"})}catch{o("提交失败，请重试")}finally{s({type:"set_submitting",payload:!1})}},x=["编程","阅读","运动","音乐","旅行","摄影"];return e.jsxs("div",{className:"p-6 bg-white rounded-lg border border-gray-200",children:[e.jsx("h3",{className:"text-lg font-semibold text-gray-800 mb-4",children:"表单状态管理"}),e.jsxs("form",{onSubmit:g,className:"space-y-4",children:[e.jsxs("div",{children:[e.jsx("label",{className:"block text-sm font-medium text-gray-700 mb-1",children:"姓名 *"}),e.jsx("input",{type:"text",value:t.values.name,onChange:r=>p("name",r.target.value),onBlur:()=>i("name"),className:`w-full px-3 py-2 border rounded focus:outline-none focus:ring-2 ${t.errors.name&&t.touched.name?"border-red-300 focus:ring-red-500":"border-gray-300 focus:ring-blue-500"}`,placeholder:"请输入姓名"}),t.errors.name&&t.touched.name&&e.jsx("p",{className:"mt-1 text-sm text-red-600",children:t.errors.name})]}),e.jsxs("div",{children:[e.jsx("label",{className:"block text-sm font-medium text-gray-700 mb-1",children:"邮箱 *"}),e.jsx("input",{type:"email",value:t.values.email,onChange:r=>p("email",r.target.value),onBlur:()=>i("email"),className:`w-full px-3 py-2 border rounded focus:outline-none focus:ring-2 ${t.errors.email&&t.touched.email?"border-red-300 focus:ring-red-500":"border-gray-300 focus:ring-blue-500"}`,placeholder:"请输入邮箱"}),t.errors.email&&t.touched.email&&e.jsx("p",{className:"mt-1 text-sm text-red-600",children:t.errors.email})]}),e.jsxs("div",{children:[e.jsx("label",{className:"block text-sm font-medium text-gray-700 mb-1",children:"年龄 *"}),e.jsx("input",{type:"number",value:t.values.age,onChange:r=>p("age",r.target.value),onBlur:()=>i("age"),className:`w-full px-3 py-2 border rounded focus:outline-none focus:ring-2 ${t.errors.age&&t.touched.age?"border-red-300 focus:ring-red-500":"border-gray-300 focus:ring-blue-500"}`,placeholder:"请输入年龄"}),t.errors.age&&t.touched.age&&e.jsx("p",{className:"mt-1 text-sm text-red-600",children:t.errors.age})]}),e.jsxs("div",{children:[e.jsx("label",{className:"block text-sm font-medium text-gray-700 mb-1",children:"性别"}),e.jsx("div",{className:"flex space-x-4",children:["male","female","other"].map(r=>e.jsxs("label",{className:"flex items-center",children:[e.jsx("input",{type:"radio",name:"gender",value:r,checked:t.values.gender===r,onChange:l=>p("gender",l.target.value),className:"mr-2"}),r==="male"?"男":r==="female"?"女":"其他"]},r))})]}),e.jsxs("div",{children:[e.jsx("label",{className:"block text-sm font-medium text-gray-700 mb-1",children:"兴趣爱好"}),e.jsx("div",{className:"grid grid-cols-2 sm:grid-cols-3 gap-2",children:x.map(r=>e.jsxs("label",{className:"flex items-center",children:[e.jsx("input",{type:"checkbox",checked:t.values.interests.includes(r),onChange:()=>s({type:"toggle_interest",payload:r}),className:"mr-2"}),r]},r))})]}),e.jsx("div",{children:e.jsxs("label",{className:"flex items-center",children:[e.jsx("input",{type:"checkbox",checked:t.values.newsletter,onChange:r=>p("newsletter",r.target.checked),className:"mr-2"}),"订阅我们的通讯"]})}),e.jsxs("div",{className:"flex space-x-3",children:[e.jsx("button",{type:"submit",disabled:t.isSubmitting,className:`px-4 py-2 rounded transition-colors ${t.isSubmitting?"bg-gray-300 text-gray-500 cursor-not-allowed":"bg-blue-500 text-white hover:bg-blue-600"}`,children:t.isSubmitting?"提交中...":"提交"}),e.jsx("button",{type:"button",onClick:()=>{s({type:"reset_form"}),o("")},className:"px-4 py-2 bg-gray-500 text-white rounded hover:bg-gray-600 transition-colors",children:"重置"})]}),n&&e.jsx("div",{className:`p-3 rounded ${n.includes("成功")?"bg-green-50 text-green-800 border border-green-200":"bg-red-50 text-red-800 border border-red-200"}`,children:n})]}),e.jsxs("div",{className:"mt-6 p-4 bg-gray-50 rounded-lg",children:[e.jsx("h4",{className:"font-semibold text-gray-800 mb-2",children:"当前状态:"}),e.jsx("pre",{className:"text-xs text-gray-600 overflow-x-auto",children:JSON.stringify({values:t.values,errors:t.errors,touched:t.touched,isSubmitting:t.isSubmitting},null,2)})]}),e.jsx("div",{className:"mt-4 p-3 bg-purple-50 rounded border border-purple-200",children:e.jsx("p",{className:"text-sm text-purple-800",children:"💡 useReducer 非常适合管理复杂的表单状态，包括验证、提交状态等"})})]})},_=`import React, { useReducer, useState } from 'react';

// 表单状态管理示例
interface FormState {
  values: {
    name: string;
    email: string;
    age: string;
    gender: string;
    interests: string[];
    newsletter: boolean;
  };
  errors: {
    name?: string;
    email?: string;
    age?: string;
  };
  touched: {
    name?: boolean;
    email?: boolean;
    age?: boolean;
  };
  isSubmitting: boolean;
}

type FormAction =
  | { type: 'set_field'; payload: { field: keyof FormState['values']; value: any } }
  | { type: 'set_error'; payload: { field: keyof FormState['errors']; error?: string } }
  | { type: 'set_touched'; payload: { field: keyof FormState['touched'] } }
  | { type: 'toggle_interest'; payload: string }
  | { type: 'set_submitting'; payload: boolean }
  | { type: 'reset_form' }
  | { type: 'validate_all' };

const formReducer = (state: FormState, action: FormAction): FormState => {
  switch (action.type) {
    case 'set_field':
      return {
        ...state,
        values: {
          ...state.values,
          [action.payload.field]: action.payload.value
        }
      };
    case 'set_error':
      return {
        ...state,
        errors: {
          ...state.errors,
          [action.payload.field]: action.payload.error
        }
      };
    case 'set_touched':
      return {
        ...state,
        touched: {
          ...state.touched,
          [action.payload.field]: true
        }
      };
    case 'toggle_interest':
      const interests = state.values.interests.includes(action.payload)
        ? state.values.interests.filter(i => i !== action.payload)
        : [...state.values.interests, action.payload];
      return {
        ...state,
        values: {
          ...state.values,
          interests
        }
      };
    case 'set_submitting':
      return {
        ...state,
        isSubmitting: action.payload
      };
    case 'reset_form':
      return {
        values: {
          name: '',
          email: '',
          age: '',
          gender: '',
          interests: [],
          newsletter: false
        },
        errors: {},
        touched: {},
        isSubmitting: false
      };
    case 'validate_all':
      const errors: FormState['errors'] = {};
      
      if (!state.values.name.trim()) {
        errors.name = '姓名不能为空';
      } else if (state.values.name.length < 2) {
        errors.name = '姓名至少2个字符';
      }
      
      if (!state.values.email.trim()) {
        errors.email = '邮箱不能为空';
      } else if (!/^[^\\s@]+@[^\\s@]+\\.[^\\s@]+$/.test(state.values.email)) {
        errors.email = '邮箱格式不正确';
      }
      
      if (!state.values.age.trim()) {
        errors.age = '年龄不能为空';
      } else if (isNaN(Number(state.values.age)) || Number(state.values.age) < 1 || Number(state.values.age) > 120) {
        errors.age = '请输入有效的年龄 (1-120)';
      }
      
      return {
        ...state,
        errors,
        touched: {
          name: true,
          email: true,
          age: true
        }
      };
    default:
      return state;
  }
};

const FormManagerDemo: React.FC = () => {
  const [state, dispatch] = useReducer(formReducer, {
    values: {
      name: '',
      email: '',
      age: '',
      gender: '',
      interests: [],
      newsletter: false
    },
    errors: {},
    touched: {},
    isSubmitting: false
  });
  
  const [submitResult, setSubmitResult] = useState<string>('');

  const validateField = (field: keyof FormState['errors'], value: string) => {
    let error: string | undefined;
    
    switch (field) {
      case 'name':
        if (!value.trim()) {
          error = '姓名不能为空';
        } else if (value.length < 2) {
          error = '姓名至少2个字符';
        }
        break;
      case 'email':
        if (!value.trim()) {
          error = '邮箱不能为空';
        } else if (!/^[^\\s@]+@[^\\s@]+\\.[^\\s@]+$/.test(value)) {
          error = '邮箱格式不正确';
        }
        break;
      case 'age':
        if (!value.trim()) {
          error = '年龄不能为空';
        } else if (isNaN(Number(value)) || Number(value) < 1 || Number(value) > 120) {
          error = '请输入有效的年龄 (1-120)';
        }
        break;
    }
    
    dispatch({ type: 'set_error', payload: { field, error } });
  };

  const handleFieldChange = (field: keyof FormState['values'], value: any) => {
    dispatch({ type: 'set_field', payload: { field, value } });
    
    // 实时验证
    if (field === 'name' || field === 'email' || field === 'age') {
      validateField(field, value);
    }
  };

  const handleFieldBlur = (field: keyof FormState['touched']) => {
    dispatch({ type: 'set_touched', payload: { field } });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    // 验证所有字段
    dispatch({ type: 'validate_all' });
    
    // 检查是否有错误
    const hasErrors = Object.keys(state.errors).some(key => 
      state.errors[key as keyof FormState['errors']]
    );
    
    if (hasErrors) {
      setSubmitResult('表单验证失败，请检查输入');
      return;
    }
    
    dispatch({ type: 'set_submitting', payload: true });
    
    try {
      // 模拟提交
      await new Promise(resolve => setTimeout(resolve, 2000));
      setSubmitResult('表单提交成功！');
      dispatch({ type: 'reset_form' });
    } catch (error) {
      setSubmitResult('提交失败，请重试');
    } finally {
      dispatch({ type: 'set_submitting', payload: false });
    }
  };

  const interestOptions = ['编程', '阅读', '运动', '音乐', '旅行', '摄影'];

  return (
    <div className="p-6 bg-white rounded-lg border border-gray-200">
      <h3 className="text-lg font-semibold text-gray-800 mb-4">表单状态管理</h3>
      
      <form onSubmit={handleSubmit} className="space-y-4">
        {/* 姓名 */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            姓名 *
          </label>
          <input
            type="text"
            value={state.values.name}
            onChange={(e) => handleFieldChange('name', e.target.value)}
            onBlur={() => handleFieldBlur('name')}
            className={\`w-full px-3 py-2 border rounded focus:outline-none focus:ring-2 \${
              state.errors.name && state.touched.name
                ? 'border-red-300 focus:ring-red-500'
                : 'border-gray-300 focus:ring-blue-500'
            }\`}
            placeholder="请输入姓名"
          />
          {state.errors.name && state.touched.name && (
            <p className="mt-1 text-sm text-red-600">{state.errors.name}</p>
          )}
        </div>
        
        {/* 邮箱 */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            邮箱 *
          </label>
          <input
            type="email"
            value={state.values.email}
            onChange={(e) => handleFieldChange('email', e.target.value)}
            onBlur={() => handleFieldBlur('email')}
            className={\`w-full px-3 py-2 border rounded focus:outline-none focus:ring-2 \${
              state.errors.email && state.touched.email
                ? 'border-red-300 focus:ring-red-500'
                : 'border-gray-300 focus:ring-blue-500'
            }\`}
            placeholder="请输入邮箱"
          />
          {state.errors.email && state.touched.email && (
            <p className="mt-1 text-sm text-red-600">{state.errors.email}</p>
          )}
        </div>
        
        {/* 年龄 */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            年龄 *
          </label>
          <input
            type="number"
            value={state.values.age}
            onChange={(e) => handleFieldChange('age', e.target.value)}
            onBlur={() => handleFieldBlur('age')}
            className={\`w-full px-3 py-2 border rounded focus:outline-none focus:ring-2 \${
              state.errors.age && state.touched.age
                ? 'border-red-300 focus:ring-red-500'
                : 'border-gray-300 focus:ring-blue-500'
            }\`}
            placeholder="请输入年龄"
          />
          {state.errors.age && state.touched.age && (
            <p className="mt-1 text-sm text-red-600">{state.errors.age}</p>
          )}
        </div>
        
        {/* 性别 */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            性别
          </label>
          <div className="flex space-x-4">
            {['male', 'female', 'other'].map(gender => (
              <label key={gender} className="flex items-center">
                <input
                  type="radio"
                  name="gender"
                  value={gender}
                  checked={state.values.gender === gender}
                  onChange={(e) => handleFieldChange('gender', e.target.value)}
                  className="mr-2"
                />
                {gender === 'male' ? '男' : gender === 'female' ? '女' : '其他'}
              </label>
            ))}
          </div>
        </div>
        
        {/* 兴趣爱好 */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            兴趣爱好
          </label>
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
            {interestOptions.map(interest => (
              <label key={interest} className="flex items-center">
                <input
                  type="checkbox"
                  checked={state.values.interests.includes(interest)}
                  onChange={() => dispatch({ type: 'toggle_interest', payload: interest })}
                  className="mr-2"
                />
                {interest}
              </label>
            ))}
          </div>
        </div>
        
        {/* 订阅通讯 */}
        <div>
          <label className="flex items-center">
            <input
              type="checkbox"
              checked={state.values.newsletter}
              onChange={(e) => handleFieldChange('newsletter', e.target.checked)}
              className="mr-2"
            />
            订阅我们的通讯
          </label>
        </div>
        
        {/* 提交按钮 */}
        <div className="flex space-x-3">
          <button
            type="submit"
            disabled={state.isSubmitting}
            className={\`px-4 py-2 rounded transition-colors \${
              state.isSubmitting
                ? 'bg-gray-300 text-gray-500 cursor-not-allowed'
                : 'bg-blue-500 text-white hover:bg-blue-600'
            }\`}
          >
            {state.isSubmitting ? '提交中...' : '提交'}
          </button>
          
          <button
            type="button"
            onClick={() => {
              dispatch({ type: 'reset_form' });
              setSubmitResult('');
            }}
            className="px-4 py-2 bg-gray-500 text-white rounded hover:bg-gray-600 transition-colors"
          >
            重置
          </button>
        </div>
        
        {/* 提交结果 */}
        {submitResult && (
          <div className={\`p-3 rounded \${
            submitResult.includes('成功')
              ? 'bg-green-50 text-green-800 border border-green-200'
              : 'bg-red-50 text-red-800 border border-red-200'
          }\`}>
            {submitResult}
          </div>
        )}
      </form>
      
      {/* 状态预览 */}
      <div className="mt-6 p-4 bg-gray-50 rounded-lg">
        <h4 className="font-semibold text-gray-800 mb-2">当前状态:</h4>
        <pre className="text-xs text-gray-600 overflow-x-auto">
          {JSON.stringify({
            values: state.values,
            errors: state.errors,
            touched: state.touched,
            isSubmitting: state.isSubmitting
          }, null, 2)}
        </pre>
      </div>
      
      <div className="mt-4 p-3 bg-purple-50 rounded border border-purple-200">
        <p className="text-sm text-purple-800">
          💡 useReducer 非常适合管理复杂的表单状态，包括验证、提交状态等
        </p>
      </div>
    </div>
  );
};

export default FormManagerDemo;`,T=(t,s)=>{switch(s.type){case"add_todo":return{...t,todos:[...t.todos,{id:t.nextId,text:s.payload.text,completed:!1,priority:s.payload.priority,createdAt:new Date}],nextId:t.nextId+1};case"toggle_todo":return{...t,todos:t.todos.map(o=>o.id===s.payload?{...o,completed:!o.completed}:o)};case"delete_todo":return{...t,todos:t.todos.filter(o=>o.id!==s.payload)};case"edit_todo":return{...t,todos:t.todos.map(o=>o.id===s.payload.id?{...o,text:s.payload.text}:o)};case"set_filter":return{...t,filter:s.payload};case"toggle_all":const n=t.todos.every(o=>o.completed);return{...t,todos:t.todos.map(o=>({...o,completed:!n}))};case"clear_completed":return{...t,todos:t.todos.filter(o=>!o.completed)};default:return t}},E=()=>{const[t,s]=u.useReducer(T,{todos:[],filter:"all",nextId:1}),[n,o]=u.useState(""),[m,p]=u.useState("medium"),[i,g]=u.useState(null),[x,r]=u.useState(""),l=t.todos.filter(a=>{switch(t.filter){case"active":return!a.completed;case"completed":return a.completed;default:return!0}}),d=()=>{n.trim()&&(s({type:"add_todo",payload:{text:n.trim(),priority:m}}),o(""))},c=a=>{g(a.id),r(a.text)},b=()=>{i&&x.trim()&&s({type:"edit_todo",payload:{id:i,text:x.trim()}}),g(null),r("")},h=()=>{g(null),r("")},v=a=>{switch(a){case"high":return"text-red-600 bg-red-50 border-red-200";case"medium":return"text-yellow-600 bg-yellow-50 border-yellow-200";case"low":return"text-green-600 bg-green-50 border-green-200"}},f=t.todos.filter(a=>!a.completed).length,N=t.todos.filter(a=>a.completed).length;return e.jsxs("div",{className:"p-6 bg-white rounded-lg border border-gray-200",children:[e.jsx("h3",{className:"text-lg font-semibold text-gray-800 mb-4",children:"待办事项管理"}),e.jsx("div",{className:"mb-6 p-4 bg-gray-50 rounded-lg",children:e.jsxs("div",{className:"flex flex-col sm:flex-row gap-3",children:[e.jsx("input",{type:"text",value:n,onChange:a=>o(a.target.value),onKeyPress:a=>a.key==="Enter"&&d(),placeholder:"添加新的待办事项...",className:"flex-1 px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"}),e.jsxs("select",{value:m,onChange:a=>p(a.target.value),className:"px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500",children:[e.jsx("option",{value:"low",children:"低优先级"}),e.jsx("option",{value:"medium",children:"中优先级"}),e.jsx("option",{value:"high",children:"高优先级"})]}),e.jsx("button",{onClick:d,className:"px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition-colors",children:"添加"})]})}),e.jsxs("div",{className:"mb-4 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-3",children:[e.jsxs("div",{className:"text-sm text-gray-600",children:["总计: ",t.todos.length," | 活跃: ",f," | 已完成: ",N]}),e.jsx("div",{className:"flex space-x-2",children:["all","active","completed"].map(a=>e.jsx("button",{onClick:()=>s({type:"set_filter",payload:a}),className:`px-3 py-1 rounded text-sm transition-colors ${t.filter===a?"bg-blue-500 text-white":"bg-gray-200 text-gray-700 hover:bg-gray-300"}`,children:a==="all"?"全部":a==="active"?"活跃":"已完成"},a))})]}),t.todos.length>0&&e.jsxs("div",{className:"mb-4 flex space-x-2",children:[e.jsx("button",{onClick:()=>s({type:"toggle_all"}),className:"px-3 py-1 bg-gray-500 text-white rounded text-sm hover:bg-gray-600 transition-colors",children:"全部切换"}),N>0&&e.jsx("button",{onClick:()=>s({type:"clear_completed"}),className:"px-3 py-1 bg-red-500 text-white rounded text-sm hover:bg-red-600 transition-colors",children:"清除已完成"})]}),e.jsx("div",{className:"space-y-2",children:l.length===0?e.jsx("div",{className:"text-center py-8 text-gray-500",children:t.filter==="all"?"暂无待办事项":t.filter==="active"?"暂无活跃事项":"暂无已完成事项"}):l.map(a=>e.jsx("div",{className:`p-3 border rounded-lg transition-colors ${a.completed?"bg-gray-50 border-gray-200":"bg-white border-gray-300"}`,children:e.jsxs("div",{className:"flex items-center space-x-3",children:[e.jsx("input",{type:"checkbox",checked:a.completed,onChange:()=>s({type:"toggle_todo",payload:a.id}),className:"w-4 h-4 text-blue-600 rounded focus:ring-blue-500"}),i===a.id?e.jsxs("div",{className:"flex-1 flex space-x-2",children:[e.jsx("input",{type:"text",value:x,onChange:y=>r(y.target.value),onKeyPress:y=>{y.key==="Enter"&&b(),y.key==="Escape"&&h()},className:"flex-1 px-2 py-1 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500",autoFocus:!0}),e.jsx("button",{onClick:b,className:"px-2 py-1 bg-green-500 text-white rounded text-sm hover:bg-green-600 transition-colors",children:"保存"}),e.jsx("button",{onClick:h,className:"px-2 py-1 bg-gray-500 text-white rounded text-sm hover:bg-gray-600 transition-colors",children:"取消"})]}):e.jsxs(e.Fragment,{children:[e.jsxs("div",{className:"flex-1",children:[e.jsx("div",{className:`${a.completed?"line-through text-gray-500":"text-gray-800"}`,children:a.text}),e.jsxs("div",{className:"flex items-center space-x-2 mt-1",children:[e.jsx("span",{className:`px-2 py-1 rounded text-xs border ${v(a.priority)}`,children:a.priority==="high"?"高":a.priority==="medium"?"中":"低"}),e.jsx("span",{className:"text-xs text-gray-400",children:a.createdAt.toLocaleString()})]})]}),e.jsxs("div",{className:"flex space-x-1",children:[e.jsx("button",{onClick:()=>c(a),className:"px-2 py-1 bg-blue-500 text-white rounded text-sm hover:bg-blue-600 transition-colors",children:"编辑"}),e.jsx("button",{onClick:()=>s({type:"delete_todo",payload:a.id}),className:"px-2 py-1 bg-red-500 text-white rounded text-sm hover:bg-red-600 transition-colors",children:"删除"})]})]})]})},a.id))}),e.jsx("div",{className:"mt-4 p-3 bg-green-50 rounded border border-green-200",children:e.jsx("p",{className:"text-sm text-green-800",children:"💡 复杂状态管理使用 useReducer 可以让状态更新逻辑更清晰和可预测"})})]})},F=`import React, { useReducer, useState } from 'react';

// 定义待办事项类型
interface Todo {
  id: number;
  text: string;
  completed: boolean;
  priority: 'low' | 'medium' | 'high';
  createdAt: Date;
}

// 定义状态类型
interface TodoState {
  todos: Todo[];
  filter: 'all' | 'active' | 'completed';
  nextId: number;
}

// 定义 Action 类型
type TodoAction =
  | { type: 'add_todo'; payload: { text: string; priority: Todo['priority'] } }
  | { type: 'toggle_todo'; payload: number }
  | { type: 'delete_todo'; payload: number }
  | { type: 'edit_todo'; payload: { id: number; text: string } }
  | { type: 'set_filter'; payload: TodoState['filter'] }
  | { type: 'toggle_all' }
  | { type: 'clear_completed' };

// Reducer 函数
const todoReducer = (state: TodoState, action: TodoAction): TodoState => {
  switch (action.type) {
    case 'add_todo':
      return {
        ...state,
        todos: [
          ...state.todos,
          {
            id: state.nextId,
            text: action.payload.text,
            completed: false,
            priority: action.payload.priority,
            createdAt: new Date()
          }
        ],
        nextId: state.nextId + 1
      };
    
    case 'toggle_todo':
      return {
        ...state,
        todos: state.todos.map(todo =>
          todo.id === action.payload
            ? { ...todo, completed: !todo.completed }
            : todo
        )
      };
    
    case 'delete_todo':
      return {
        ...state,
        todos: state.todos.filter(todo => todo.id !== action.payload)
      };
    
    case 'edit_todo':
      return {
        ...state,
        todos: state.todos.map(todo =>
          todo.id === action.payload.id
            ? { ...todo, text: action.payload.text }
            : todo
        )
      };
    
    case 'set_filter':
      return {
        ...state,
        filter: action.payload
      };
    
    case 'toggle_all':
      const allCompleted = state.todos.every(todo => todo.completed);
      return {
        ...state,
        todos: state.todos.map(todo => ({
          ...todo,
          completed: !allCompleted
        }))
      };
    
    case 'clear_completed':
      return {
        ...state,
        todos: state.todos.filter(todo => !todo.completed)
      };
    
    default:
      return state;
  }
};

const TodoManagerDemo: React.FC = () => {
  const [state, dispatch] = useReducer(todoReducer, {
    todos: [],
    filter: 'all',
    nextId: 1
  });
  
  const [newTodoText, setNewTodoText] = useState('');
  const [newTodoPriority, setNewTodoPriority] = useState<Todo['priority']>('medium');
  const [editingId, setEditingId] = useState<number | null>(null);
  const [editText, setEditText] = useState('');

  const filteredTodos = state.todos.filter(todo => {
    switch (state.filter) {
      case 'active':
        return !todo.completed;
      case 'completed':
        return todo.completed;
      default:
        return true;
    }
  });

  const handleAddTodo = () => {
    if (newTodoText.trim()) {
      dispatch({
        type: 'add_todo',
        payload: { text: newTodoText.trim(), priority: newTodoPriority }
      });
      setNewTodoText('');
    }
  };

  const handleEditStart = (todo: Todo) => {
    setEditingId(todo.id);
    setEditText(todo.text);
  };

  const handleEditSave = () => {
    if (editingId && editText.trim()) {
      dispatch({
        type: 'edit_todo',
        payload: { id: editingId, text: editText.trim() }
      });
    }
    setEditingId(null);
    setEditText('');
  };

  const handleEditCancel = () => {
    setEditingId(null);
    setEditText('');
  };

  const getPriorityColor = (priority: Todo['priority']) => {
    switch (priority) {
      case 'high':
        return 'text-red-600 bg-red-50 border-red-200';
      case 'medium':
        return 'text-yellow-600 bg-yellow-50 border-yellow-200';
      case 'low':
        return 'text-green-600 bg-green-50 border-green-200';
    }
  };

  const activeCount = state.todos.filter(todo => !todo.completed).length;
  const completedCount = state.todos.filter(todo => todo.completed).length;

  return (
    <div className="p-6 bg-white rounded-lg border border-gray-200">
      <h3 className="text-lg font-semibold text-gray-800 mb-4">待办事项管理</h3>
      
      {/* 添加新待办 */}
      <div className="mb-6 p-4 bg-gray-50 rounded-lg">
        <div className="flex flex-col sm:flex-row gap-3">
          <input
            type="text"
            value={newTodoText}
            onChange={(e) => setNewTodoText(e.target.value)}
            onKeyPress={(e) => e.key === 'Enter' && handleAddTodo()}
            placeholder="添加新的待办事项..."
            className="flex-1 px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <select
            value={newTodoPriority}
            onChange={(e) => setNewTodoPriority(e.target.value as Todo['priority'])}
            className="px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            <option value="low">低优先级</option>
            <option value="medium">中优先级</option>
            <option value="high">高优先级</option>
          </select>
          <button
            onClick={handleAddTodo}
            className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition-colors"
          >
            添加
          </button>
        </div>
      </div>
      
      {/* 统计和过滤 */}
      <div className="mb-4 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-3">
        <div className="text-sm text-gray-600">
          总计: {state.todos.length} | 活跃: {activeCount} | 已完成: {completedCount}
        </div>
        
        <div className="flex space-x-2">
          {(['all', 'active', 'completed'] as const).map(filter => (
            <button
              key={filter}
              onClick={() => dispatch({ type: 'set_filter', payload: filter })}
              className={\`px-3 py-1 rounded text-sm transition-colors \${
                state.filter === filter
                  ? 'bg-blue-500 text-white'
                  : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
              }\`}
            >
              {filter === 'all' ? '全部' : filter === 'active' ? '活跃' : '已完成'}
            </button>
          ))}
        </div>
      </div>
      
      {/* 批量操作 */}
      {state.todos.length > 0 && (
        <div className="mb-4 flex space-x-2">
          <button
            onClick={() => dispatch({ type: 'toggle_all' })}
            className="px-3 py-1 bg-gray-500 text-white rounded text-sm hover:bg-gray-600 transition-colors"
          >
            全部切换
          </button>
          {completedCount > 0 && (
            <button
              onClick={() => dispatch({ type: 'clear_completed' })}
              className="px-3 py-1 bg-red-500 text-white rounded text-sm hover:bg-red-600 transition-colors"
            >
              清除已完成
            </button>
          )}
        </div>
      )}
      
      {/* 待办列表 */}
      <div className="space-y-2">
        {filteredTodos.length === 0 ? (
          <div className="text-center py-8 text-gray-500">
            {state.filter === 'all' ? '暂无待办事项' : 
             state.filter === 'active' ? '暂无活跃事项' : '暂无已完成事项'}
          </div>
        ) : (
          filteredTodos.map(todo => (
            <div
              key={todo.id}
              className={\`p-3 border rounded-lg transition-colors \${
                todo.completed ? 'bg-gray-50 border-gray-200' : 'bg-white border-gray-300'
              }\`}
            >
              <div className="flex items-center space-x-3">
                <input
                  type="checkbox"
                  checked={todo.completed}
                  onChange={() => dispatch({ type: 'toggle_todo', payload: todo.id })}
                  className="w-4 h-4 text-blue-600 rounded focus:ring-blue-500"
                />
                
                {editingId === todo.id ? (
                  <div className="flex-1 flex space-x-2">
                    <input
                      type="text"
                      value={editText}
                      onChange={(e) => setEditText(e.target.value)}
                      onKeyPress={(e) => {
                        if (e.key === 'Enter') handleEditSave();
                        if (e.key === 'Escape') handleEditCancel();
                      }}
                      className="flex-1 px-2 py-1 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                      autoFocus
                    />
                    <button
                      onClick={handleEditSave}
                      className="px-2 py-1 bg-green-500 text-white rounded text-sm hover:bg-green-600 transition-colors"
                    >
                      保存
                    </button>
                    <button
                      onClick={handleEditCancel}
                      className="px-2 py-1 bg-gray-500 text-white rounded text-sm hover:bg-gray-600 transition-colors"
                    >
                      取消
                    </button>
                  </div>
                ) : (
                  <>
                    <div className="flex-1">
                      <div className={\`\${todo.completed ? 'line-through text-gray-500' : 'text-gray-800'}\`}>
                        {todo.text}
                      </div>
                      <div className="flex items-center space-x-2 mt-1">
                        <span className={\`px-2 py-1 rounded text-xs border \${getPriorityColor(todo.priority)}\`}>
                          {todo.priority === 'high' ? '高' : todo.priority === 'medium' ? '中' : '低'}
                        </span>
                        <span className="text-xs text-gray-400">
                          {todo.createdAt.toLocaleString()}
                        </span>
                      </div>
                    </div>
                    
                    <div className="flex space-x-1">
                      <button
                        onClick={() => handleEditStart(todo)}
                        className="px-2 py-1 bg-blue-500 text-white rounded text-sm hover:bg-blue-600 transition-colors"
                      >
                        编辑
                      </button>
                      <button
                        onClick={() => dispatch({ type: 'delete_todo', payload: todo.id })}
                        className="px-2 py-1 bg-red-500 text-white rounded text-sm hover:bg-red-600 transition-colors"
                      >
                        删除
                      </button>
                    </div>
                  </>
                )}
              </div>
            </div>
          ))
        )}
      </div>
      
      <div className="mt-4 p-3 bg-green-50 rounded border border-green-200">
        <p className="text-sm text-green-800">
          💡 复杂状态管理使用 useReducer 可以让状态更新逻辑更清晰和可预测
        </p>
      </div>
    </div>
  );
};

export default TodoManagerDemo;`,I=()=>e.jsx(w,{title:"useReducer",description:"useReducer 是 React 提供的状态管理 Hook，适用于管理复杂的状态逻辑。它接收一个 reducer 函数和初始状态，返回当前状态和 dispatch 函数。",overview:[{title:"核心概念",items:["Reducer 函数处理","Action 对象描述","Dispatch 函数触发","不可变状态更新"]},{title:"主要优势",items:["集中管理复杂逻辑","状态更新可预测","减少组件状态代码","更好性能优化"]},{title:"适用场景",items:["状态包含多个子值","状态依赖前一状态","状态更新逻辑复杂","多组件共享逻辑"]},{title:"注意事项",items:["Reducer 必须纯函数","避免副作用操作","遵循不可变原则","合理设计 Action"]}],examples:[{title:"基础计数器",component:e.jsx(S,{}),description:"演示 useReducer 的基本用法，通过 reducer 函数管理计数器状态",observationPoints:["点击增加/减少按钮，观察计数值变化","修改步长设置，观察步长对计数的影响","查看操作日志了解每次状态变化","使用重置按钮恢复初始状态","注意所有状态更新都通过 dispatch 函数触发"],keyPoints:["useReducer 接收 reducer 函数和初始状态","dispatch 函数用于触发状态更新","reducer 函数根据 action.type 处理不同操作","状态更新遵循不可变原则"],commonTraps:["直接修改 state 对象","在 reducer 中执行副作用","忘记处理所有 action 类型"],solutions:["使用展开运算符创建新对象","将副作用放在组件中处理","添加 default case 处理未知 action"],codeExample:{code:C,highlights:[8,15,22],title:"基础 useReducer 计数器实现"}},{title:"待办事项管理",component:e.jsx(E,{}),description:"演示使用 useReducer 管理复杂的待办事项状态，包括增删改查和过滤功能",observationPoints:["添加新待办事项，观察列表更新和 ID 自增","切换待办事项完成状态，观察样式变化","使用过滤器查看不同状态的事项","编辑待办事项文本，观察内联编辑功能","使用批量操作功能，观察状态批量更新"],keyPoints:["复杂状态结构的统一管理","多种 Action 类型处理不同操作","状态派生和计算属性的使用","不可变更新模式的实践"],commonTraps:["直接修改数组或对象状态","忘记更新相关的状态字段","Action 类型命名不规范"],solutions:["使用数组方法创建新数组","在 reducer 中同时更新相关字段","建立清晰的 Action 命名约定"],codeExample:{code:F,highlights:[12,20,28],title:"useReducer 待办事项管理实现"}},{title:"表单状态管理",component:e.jsx(R,{}),description:"演示使用 useReducer 管理复杂表单状态，包括验证、提交和错误处理",observationPoints:["填写表单字段，观察实时验证和错误提示","提交表单，观察验证过程和提交状态","查看状态预览了解完整的表单状态结构","使用重置按钮，观察表单状态完全重置","注意复杂表单逻辑的集中管理"],keyPoints:["表单状态的统一管理","验证逻辑与状态更新的分离","异步提交状态的处理","复杂表单交互的简化"],commonTraps:["验证逻辑散布在各个组件中","表单状态结构设计不合理","忘记处理异步操作状态"],solutions:["在 reducer 中集中处理验证","设计清晰的状态结构","添加 loading 和 error 状态"],codeExample:{code:_,highlights:[10,18,25],title:"useReducer 表单状态管理实现"}}],tutorial:{concepts:["useReducer 的基本语法和参数","Reducer 函数的设计原则和模式","Action 对象的结构和类型定义","复杂状态结构的设计方法","不可变状态更新的最佳实践"],steps:["从 React 中导入 useReducer Hook","定义状态类型和 Action 类型","编写 reducer 函数处理状态更新","调用 useReducer 并传入 reducer 和初始状态","使用 dispatch 函数触发状态更新","在组件中使用状态和处理用户交互"],tips:["使用 TypeScript 定义严格的类型约束","保持 reducer 函数的纯净性","为 Action 类型建立清晰的命名约定","合理拆分复杂的 reducer 函数","结合 useContext 实现全局状态管理"]},interview:{questions:[{question:"useReducer 和 useState 有什么区别？什么时候使用 useReducer？",answer:"useReducer 适合管理复杂状态逻辑，特别是当状态包含多个子值或状态更新逻辑复杂时。useState 适合简单的状态管理。useReducer 提供更可预测的状态更新，便于测试和调试。"},{question:"什么是 reducer 函数？它有什么要求？",answer:"Reducer 是一个纯函数，接收当前状态和 action，返回新状态。要求：1) 必须是纯函数，无副作用；2) 不能修改原状态，必须返回新对象；3) 相同输入必须产生相同输出；4) 必须处理所有可能的 action 类型。"},{question:"如何设计好的 Action 结构？",answer:"好的 Action 应该：1) 有明确的 type 字段描述操作类型；2) 使用 payload 字段携带数据；3) 类型命名要清晰和一致；4) 使用 TypeScript 定义联合类型确保类型安全；5) 遵循单一职责原则，每个 action 只做一件事。"},{question:"useReducer 如何与 useContext 结合使用？",answer:"可以将 useReducer 的状态和 dispatch 函数通过 Context 提供给子组件，实现全局状态管理。这种模式类似于 Redux，但更轻量级，适合中等复杂度的应用状态管理。"}],keyPoints:["useReducer 适合复杂状态管理","Reducer 必须是纯函数","Action 描述状态变化的意图","状态更新必须遵循不可变原则","可以与 Context 结合实现全局状态"]},bestPractices:{dos:["使用 TypeScript 定义严格的类型","保持 reducer 函数的纯净性","为 Action 建立清晰的命名约定","使用不可变更新模式","合理拆分复杂的状态结构","添加详细的注释说明状态变化逻辑"],donts:["不要在 reducer 中执行副作用操作","不要直接修改状态对象","不要忘记处理 default case","不要让 reducer 函数过于复杂","不要在 Action 中包含过多的业务逻辑"],patterns:["状态机模式：管理组件的不同状态","命令模式：通过 Action 封装操作","不可变更新模式：确保状态更新的纯净性","组合模式：将多个 reducer 组合使用"]}});export{I as default};
