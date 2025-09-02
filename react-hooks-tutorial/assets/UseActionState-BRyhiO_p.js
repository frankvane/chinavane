import{j as e,r as m}from"./index-D5aG88J3.js";import{C as b}from"./ComponentTemplate-DZf1RTVD.js";function u(t,s){const[n,a]=m.useState(s),[i,o]=m.useTransition(),[d,r]=m.useState(!1);return[n,p=>{o(async()=>{r(!0);try{const l=await t(n,p);a(l)}catch(l){console.error("Action failed:",l)}finally{r(!1)}})},i||d]}const g={status:"idle",message:""};async function y(t,s){await new Promise(i=>setTimeout(i,2e3));const n=s.get("name"),a=s.get("email");return!n||!a?{status:"error",message:"请填写所有必填字段"}:a.includes("@")?{status:"success",message:"表单提交成功！",data:{name:n,email:a}}:{status:"error",message:"请输入有效的邮箱地址"}}const x=()=>{const[t,s,n]=u(y,g),a=i=>{i.preventDefault();const o=new FormData(i.currentTarget);s(o)};return e.jsx("div",{className:"space-y-6",children:e.jsxs("div",{className:"bg-blue-50 p-4 rounded-lg border border-blue-200",children:[e.jsx("h3",{className:"text-lg font-semibold text-blue-800 mb-3",children:"用户注册表单"}),e.jsxs("form",{onSubmit:a,className:"space-y-4",children:[e.jsxs("div",{children:[e.jsx("label",{className:"block text-sm font-medium text-blue-700 mb-1",children:"姓名 *"}),e.jsx("input",{type:"text",name:"name",disabled:n,className:"w-full px-3 py-2 border border-blue-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 disabled:bg-gray-100",placeholder:"请输入您的姓名"})]}),e.jsxs("div",{children:[e.jsx("label",{className:"block text-sm font-medium text-blue-700 mb-1",children:"邮箱 *"}),e.jsx("input",{type:"email",name:"email",disabled:n,className:"w-full px-3 py-2 border border-blue-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 disabled:bg-gray-100",placeholder:"请输入您的邮箱"})]}),e.jsx("button",{type:"submit",disabled:n,className:"w-full px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 disabled:opacity-50 disabled:cursor-not-allowed transition-colors",children:n?e.jsxs("div",{className:"flex items-center justify-center space-x-2",children:[e.jsx("div",{className:"animate-spin rounded-full h-4 w-4 border-2 border-white border-t-transparent"}),e.jsx("span",{children:"提交中..."})]}):"提交表单"})]}),t.status!=="idle"&&e.jsxs("div",{className:`mt-4 p-3 rounded ${t.status==="success"?"bg-green-100 border border-green-300 text-green-700":t.status==="error"?"bg-red-100 border border-red-300 text-red-700":"bg-yellow-100 border border-yellow-300 text-yellow-700"}`,children:[e.jsxs("p",{className:"font-medium",children:[t.status==="success"?"✅ ":t.status==="error"?"❌ ":"⏳ ",t.message]}),t.data&&e.jsxs("div",{className:"mt-2 text-sm",children:[e.jsx("p",{children:"提交的数据："}),e.jsx("pre",{className:"bg-white p-2 rounded mt-1",children:JSON.stringify(t.data,null,2)})]})]})]})})},h={count:0,history:["初始化计数器"]};async function v(t,s){await new Promise(i=>setTimeout(i,500));const n=new Date().toLocaleTimeString();let a;switch(s.type){case"increment":const i=s.amount||1;a={count:t.count+i,history:[...t.history,`${n}: 增加 ${i}，当前值: ${t.count+i}`]};break;case"decrement":const o=s.amount||1;a={count:t.count-o,history:[...t.history,`${n}: 减少 ${o}，当前值: ${t.count-o}`]};break;case"reset":a={count:0,history:[...t.history,`${n}: 重置计数器，当前值: 0`]};break;case"set":a={count:s.value,history:[...t.history,`${n}: 设置值为 ${s.value}`]};break;default:return t}return a}const f=()=>{const[t,s,n]=u(v,h);return e.jsx("div",{className:"space-y-6",children:e.jsxs("div",{className:"bg-green-50 p-4 rounded-lg border border-green-200",children:[e.jsx("h3",{className:"text-lg font-semibold text-green-800 mb-3",children:"异步计数器"}),e.jsxs("div",{className:"text-center mb-4",children:[e.jsx("div",{className:"text-4xl font-bold text-green-600 mb-2",children:t.count}),n&&e.jsxs("div",{className:"flex items-center justify-center space-x-2 text-green-600",children:[e.jsx("div",{className:"animate-spin rounded-full h-4 w-4 border-2 border-green-600 border-t-transparent"}),e.jsx("span",{className:"text-sm",children:"更新中..."})]})]}),e.jsxs("div",{className:"grid grid-cols-2 md:grid-cols-4 gap-2 mb-4",children:[e.jsx("button",{onClick:()=>s({type:"increment"}),disabled:n,className:"px-3 py-2 bg-green-500 text-white rounded hover:bg-green-600 disabled:opacity-50 transition-colors",children:"+1"}),e.jsx("button",{onClick:()=>s({type:"increment",amount:5}),disabled:n,className:"px-3 py-2 bg-green-500 text-white rounded hover:bg-green-600 disabled:opacity-50 transition-colors",children:"+5"}),e.jsx("button",{onClick:()=>s({type:"decrement"}),disabled:n,className:"px-3 py-2 bg-red-500 text-white rounded hover:bg-red-600 disabled:opacity-50 transition-colors",children:"-1"}),e.jsx("button",{onClick:()=>s({type:"reset"}),disabled:n,className:"px-3 py-2 bg-gray-500 text-white rounded hover:bg-gray-600 disabled:opacity-50 transition-colors",children:"重置"})]}),e.jsxs("div",{children:[e.jsx("input",{type:"number",placeholder:"设置值",disabled:n,className:"px-3 py-2 border border-green-300 rounded-l-md focus:outline-none focus:ring-2 focus:ring-green-500 disabled:bg-gray-100",onKeyPress:a=>{if(a.key==="Enter"){const i=parseInt(a.target.value);isNaN(i)||(s({type:"set",value:i}),a.target.value="")}}}),e.jsx("button",{onClick:a=>{const i=a.target.previousElementSibling,o=parseInt(i.value);isNaN(o)||(s({type:"set",value:o}),i.value="")},disabled:n,className:"px-3 py-2 bg-green-500 text-white rounded-r-md hover:bg-green-600 disabled:opacity-50 transition-colors",children:"设置"})]}),e.jsxs("div",{className:"mt-4",children:[e.jsx("h4",{className:"font-semibold text-green-700 mb-2",children:"操作历史"}),e.jsx("div",{className:"bg-white p-3 rounded border max-h-32 overflow-y-auto",children:t.history.map((a,i)=>e.jsx("div",{className:"text-sm text-gray-600 py-1",children:a},i))})]})]})})},N={items:[],total:0,status:"idle",message:""};async function w(t,s){await new Promise(o=>setTimeout(o,800));let n,a="";switch(s.type){case"add":t.items.find(r=>r.id===s.item.id)?(n=t.items.map(r=>r.id===s.item.id?{...r,quantity:r.quantity+1}:r),a=`${s.item.name} 数量已增加`):(n=[...t.items,{...s.item,quantity:1}],a=`${s.item.name} 已添加到购物车`);break;case"remove":const d=t.items.find(r=>r.id===s.id);n=t.items.filter(r=>r.id!==s.id),a=d?`${d.name} 已从购物车移除`:"";break;case"updateQuantity":if(s.quantity<=0){const r=t.items.find(c=>c.id===s.id);n=t.items.filter(c=>c.id!==s.id),a=r?`${r.name} 已从购物车移除`:""}else n=t.items.map(r=>r.id===s.id?{...r,quantity:s.quantity}:r),a="商品数量已更新";break;case"clear":n=[],a="购物车已清空";break;default:return t}const i=n.reduce((o,d)=>o+d.price*d.quantity,0);return{items:n,total:i,status:"idle",message:a}}const S=()=>{const[t,s,n]=u(w,N),a=[{id:"1",name:"MacBook Pro",price:1999},{id:"2",name:"iPhone 15",price:999},{id:"3",name:"AirPods Pro",price:249},{id:"4",name:"iPad Air",price:599}];return e.jsx("div",{className:"space-y-6",children:e.jsxs("div",{className:"bg-purple-50 p-4 rounded-lg border border-purple-200",children:[e.jsx("h3",{className:"text-lg font-semibold text-purple-800 mb-3",children:"购物车管理"}),e.jsxs("div",{className:"grid grid-cols-1 lg:grid-cols-2 gap-6",children:[e.jsxs("div",{children:[e.jsx("h4",{className:"font-semibold text-purple-700 mb-3",children:"商品列表"}),e.jsx("div",{className:"space-y-2",children:a.map(i=>e.jsxs("div",{className:"flex items-center justify-between bg-white p-3 rounded border",children:[e.jsxs("div",{children:[e.jsx("p",{className:"font-medium",children:i.name}),e.jsxs("p",{className:"text-sm text-gray-600",children:["$",i.price]})]}),e.jsx("button",{onClick:()=>s({type:"add",item:i}),disabled:n,className:"px-3 py-1 bg-purple-500 text-white rounded hover:bg-purple-600 disabled:opacity-50 transition-colors",children:n?"...":"添加"})]},i.id))})]}),e.jsxs("div",{children:[e.jsxs("div",{className:"flex items-center justify-between mb-3",children:[e.jsx("h4",{className:"font-semibold text-purple-700",children:"购物车"}),e.jsx("button",{onClick:()=>s({type:"clear"}),disabled:n||t.items.length===0,className:"px-3 py-1 bg-red-500 text-white rounded hover:bg-red-600 disabled:opacity-50 transition-colors",children:"清空"})]}),n&&e.jsxs("div",{className:"flex items-center space-x-2 text-purple-600 mb-3",children:[e.jsx("div",{className:"animate-spin rounded-full h-4 w-4 border-2 border-purple-600 border-t-transparent"}),e.jsx("span",{className:"text-sm",children:"更新中..."})]}),t.items.length===0?e.jsx("div",{className:"bg-gray-100 p-4 rounded text-center text-gray-500",children:"购物车为空"}):e.jsxs("div",{className:"space-y-2",children:[t.items.map(i=>e.jsxs("div",{className:"bg-white p-3 rounded border",children:[e.jsxs("div",{className:"flex items-center justify-between mb-2",children:[e.jsx("span",{className:"font-medium",children:i.name}),e.jsx("button",{onClick:()=>s({type:"remove",id:i.id}),disabled:n,className:"text-red-500 hover:text-red-700 disabled:opacity-50",children:"✕"})]}),e.jsxs("div",{className:"flex items-center justify-between",children:[e.jsxs("span",{className:"text-sm text-gray-600",children:["$",i.price]}),e.jsxs("div",{className:"flex items-center space-x-2",children:[e.jsx("button",{onClick:()=>s({type:"updateQuantity",id:i.id,quantity:i.quantity-1}),disabled:n,className:"px-2 py-1 bg-gray-300 rounded hover:bg-gray-400 disabled:opacity-50",children:"-"}),e.jsx("span",{className:"px-2",children:i.quantity}),e.jsx("button",{onClick:()=>s({type:"updateQuantity",id:i.id,quantity:i.quantity+1}),disabled:n,className:"px-2 py-1 bg-gray-300 rounded hover:bg-gray-400 disabled:opacity-50",children:"+"})]})]}),e.jsxs("div",{className:"text-right text-sm font-medium mt-1",children:["小计: $",(i.price*i.quantity).toFixed(2)]})]},i.id)),e.jsxs("div",{className:"bg-purple-100 p-3 rounded font-semibold text-purple-800",children:["总计: $",t.total.toFixed(2)]})]}),t.message&&e.jsx("div",{className:"mt-3 text-sm text-purple-600 bg-purple-100 p-2 rounded",children:t.message})]})]})]})})},j=`import React, { useState, useTransition } from "react";\r
\r
// 模拟 useActionState（React 19 特性的 polyfill 实现）\r
function useActionState<T, P>(\r
  action: (prevState: T, payload: P) => Promise<T> | T,\r
  initialState: T\r
): [T, (payload: P) => void, boolean] {\r
  const [state, setState] = useState<T>(initialState);\r
  const [isPending, startTransition] = useTransition();\r
  const [isActionPending, setIsActionPending] = useState(false);\r
\r
  const dispatch = (payload: P) => {\r
    startTransition(async () => {\r
      setIsActionPending(true);\r
      try {\r
        const result = await action(state, payload);\r
        setState(result);\r
      } catch (error) {\r
        console.error("Action failed:", error);\r
      } finally {\r
        setIsActionPending(false);\r
      }\r
    });\r
  };\r
\r
  return [state, dispatch, isPending || isActionPending];\r
}\r
\r
// 基础表单状态管理\r
interface FormState {\r
  status: "idle" | "submitting" | "success" | "error";\r
  message: string;\r
  data?: any;\r
}\r
\r
const initialFormState: FormState = {\r
  status: "idle",\r
  message: "",\r
};\r
\r
async function submitForm(\r
  prevState: FormState,\r
  formData: FormData\r
): Promise<FormState> {\r
  // 模拟表单提交\r
  await new Promise((resolve) => setTimeout(resolve, 2000));\r
\r
  const name = formData.get("name") as string;\r
  const email = formData.get("email") as string;\r
\r
  if (!name || !email) {\r
    return {\r
      status: "error",\r
      message: "请填写所有必填字段",\r
    };\r
  }\r
\r
  if (!email.includes("@")) {\r
    return {\r
      status: "error",\r
      message: "请输入有效的邮箱地址",\r
    };\r
  }\r
\r
  return {\r
    status: "success",\r
    message: "表单提交成功！",\r
    data: { name, email },\r
  };\r
}\r
\r
// 基础表单演示组件\r
const BasicFormDemo: React.FC = () => {\r
  const [state, submitAction, isPending] = useActionState(\r
    submitForm,\r
    initialFormState\r
  );\r
\r
  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {\r
    event.preventDefault();\r
    const formData = new FormData(event.currentTarget);\r
    submitAction(formData);\r
  };\r
\r
  return (\r
    <div className="space-y-6">\r
      <div className="bg-blue-50 p-4 rounded-lg border border-blue-200">\r
        <h3 className="text-lg font-semibold text-blue-800 mb-3">\r
          用户注册表单\r
        </h3>\r
\r
        <form onSubmit={handleSubmit} className="space-y-4">\r
          <div>\r
            <label className="block text-sm font-medium text-blue-700 mb-1">\r
              姓名 *\r
            </label>\r
            <input\r
              type="text"\r
              name="name"\r
              disabled={isPending}\r
              className="w-full px-3 py-2 border border-blue-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 disabled:bg-gray-100"\r
              placeholder="请输入您的姓名"\r
            />\r
          </div>\r
\r
          <div>\r
            <label className="block text-sm font-medium text-blue-700 mb-1">\r
              邮箱 *\r
            </label>\r
            <input\r
              type="email"\r
              name="email"\r
              disabled={isPending}\r
              className="w-full px-3 py-2 border border-blue-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 disabled:bg-gray-100"\r
              placeholder="请输入您的邮箱"\r
            />\r
          </div>\r
\r
          <button\r
            type="submit"\r
            disabled={isPending}\r
            className="w-full px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"\r
          >\r
            {isPending ? (\r
              <div className="flex items-center justify-center space-x-2">\r
                <div className="animate-spin rounded-full h-4 w-4 border-2 border-white border-t-transparent"></div>\r
                <span>提交中...</span>\r
              </div>\r
            ) : (\r
              "提交表单"\r
            )}\r
          </button>\r
        </form>\r
\r
        {/* 状态显示 */}\r
        {state.status !== "idle" && (\r
          <div\r
            className={\`mt-4 p-3 rounded \${\r
              state.status === "success"\r
                ? "bg-green-100 border border-green-300 text-green-700"\r
                : state.status === "error"\r
                ? "bg-red-100 border border-red-300 text-red-700"\r
                : "bg-yellow-100 border border-yellow-300 text-yellow-700"\r
            }\`}\r
          >\r
            <p className="font-medium">\r
              {state.status === "success"\r
                ? "✅ "\r
                : state.status === "error"\r
                ? "❌ "\r
                : "⏳ "}\r
              {state.message}\r
            </p>\r
            {state.data && (\r
              <div className="mt-2 text-sm">\r
                <p>提交的数据：</p>\r
                <pre className="bg-white p-2 rounded mt-1">\r
                  {JSON.stringify(state.data, null, 2)}\r
                </pre>\r
              </div>\r
            )}\r
          </div>\r
        )}\r
      </div>\r
    </div>\r
  );\r
};\r
\r
export default BasicFormDemo;\r
export { useActionState, submitForm, initialFormState, type FormState };`,P=`import React from "react";
import { useActionState } from "./BasicFormDemo";

// 计数器状态管理
interface CounterState {
  count: number;
  history: string[];
}

const initialCounterState: CounterState = {
  count: 0,
  history: ["初始化计数器"],
};

type CounterAction =
  | { type: "increment"; amount?: number }
  | { type: "decrement"; amount?: number }
  | { type: "reset" }
  | { type: "set"; value: number };

async function counterReducer(
  prevState: CounterState,
  action: CounterAction
): Promise<CounterState> {
  // 模拟异步操作
  await new Promise((resolve) => setTimeout(resolve, 500));

  const timestamp = new Date().toLocaleTimeString();
  let newState: CounterState;

  switch (action.type) {
    case "increment":
      const incrementAmount = action.amount || 1;
      newState = {
        count: prevState.count + incrementAmount,
        history: [
          ...prevState.history,
          \`\${timestamp}: 增加 \${incrementAmount}，当前值: \${prevState.count + incrementAmount}\`,
        ],
      };
      break;

    case "decrement":
      const decrementAmount = action.amount || 1;
      newState = {
        count: prevState.count - decrementAmount,
        history: [
          ...prevState.history,
          \`\${timestamp}: 减少 \${decrementAmount}，当前值: \${prevState.count - decrementAmount}\`,
        ],
      };
      break;

    case "reset":
      newState = {
        count: 0,
        history: [
          ...prevState.history,
          \`\${timestamp}: 重置计数器，当前值: 0\`,
        ],
      };
      break;

    case "set":
      newState = {
        count: action.value,
        history: [
          ...prevState.history,
          \`\${timestamp}: 设置值为 \${action.value}\`,
        ],
      };
      break;

    default:
      return prevState;
  }

  return newState;
}

// 异步计数器演示组件
const AsyncCounterDemo: React.FC = () => {
  const [state, dispatch, isPending] = useActionState(
    counterReducer,
    initialCounterState
  );

  return (
    <div className="space-y-6">
      <div className="bg-green-50 p-4 rounded-lg border border-green-200">
        <h3 className="text-lg font-semibold text-green-800 mb-3">
          异步计数器
        </h3>

        <div className="text-center mb-4">
          <div className="text-4xl font-bold text-green-600 mb-2">
            {state.count}
          </div>
          {isPending && (
            <div className="flex items-center justify-center space-x-2 text-green-600">
              <div className="animate-spin rounded-full h-4 w-4 border-2 border-green-600 border-t-transparent"></div>
              <span className="text-sm">更新中...</span>
            </div>
          )}
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-2 mb-4">
          <button
            onClick={() => dispatch({ type: "increment" })}
            disabled={isPending}
            className="px-3 py-2 bg-green-500 text-white rounded hover:bg-green-600 disabled:opacity-50 transition-colors"
          >
            +1
          </button>
          <button
            onClick={() => dispatch({ type: "increment", amount: 5 })}
            disabled={isPending}
            className="px-3 py-2 bg-green-500 text-white rounded hover:bg-green-600 disabled:opacity-50 transition-colors"
          >
            +5
          </button>
          <button
            onClick={() => dispatch({ type: "decrement" })}
            disabled={isPending}
            className="px-3 py-2 bg-red-500 text-white rounded hover:bg-red-600 disabled:opacity-50 transition-colors"
          >
            -1
          </button>
          <button
            onClick={() => dispatch({ type: "reset" })}
            disabled={isPending}
            className="px-3 py-2 bg-gray-500 text-white rounded hover:bg-gray-600 disabled:opacity-50 transition-colors"
          >
            重置
          </button>
        </div>

        <div>
          <input
            type="number"
            placeholder="设置值"
            disabled={isPending}
            className="px-3 py-2 border border-green-300 rounded-l-md focus:outline-none focus:ring-2 focus:ring-green-500 disabled:bg-gray-100"
            onKeyPress={(e) => {
              if (e.key === "Enter") {
                const value = parseInt((e.target as HTMLInputElement).value);
                if (!isNaN(value)) {
                  dispatch({ type: "set", value });
                  (e.target as HTMLInputElement).value = "";
                }
              }
            }}
          />
          <button
            onClick={(e) => {
              const input = (e.target as HTMLElement)
                .previousElementSibling as HTMLInputElement;
              const value = parseInt(input.value);
              if (!isNaN(value)) {
                dispatch({ type: "set", value });
                input.value = "";
              }
            }}
            disabled={isPending}
            className="px-3 py-2 bg-green-500 text-white rounded-r-md hover:bg-green-600 disabled:opacity-50 transition-colors"
          >
            设置
          </button>
        </div>

        {/* 操作历史 */}
        <div className="mt-4">
          <h4 className="font-semibold text-green-700 mb-2">操作历史</h4>
          <div className="bg-white p-3 rounded border max-h-32 overflow-y-auto">
            {state.history.map((entry, index) => (
              <div key={index} className="text-sm text-gray-600 py-1">
                {entry}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AsyncCounterDemo;
export { counterReducer, initialCounterState, type CounterState, type CounterAction };`,A=`import React from "react";
import { useActionState } from "./BasicFormDemo";

// 购物车相关类型定义
interface CartItem {
  id: string;
  name: string;
  price: number;
  quantity: number;
}

interface CartState {
  items: CartItem[];
  total: number;
  status: "idle" | "updating" | "error";
  message: string;
}

const initialCartState: CartState = {
  items: [],
  total: 0,
  status: "idle",
  message: "",
};

type CartAction =
  | { type: "add"; item: Omit<CartItem, "quantity"> }
  | { type: "remove"; id: string }
  | { type: "updateQuantity"; id: string; quantity: number }
  | { type: "clear" };

async function cartReducer(
  prevState: CartState,
  action: CartAction
): Promise<CartState> {
  // 模拟异步操作
  await new Promise((resolve) => setTimeout(resolve, 800));

  let newItems: CartItem[];
  let message = "";

  switch (action.type) {
    case "add":
      const existingItem = prevState.items.find(
        (item) => item.id === action.item.id
      );
      if (existingItem) {
        newItems = prevState.items.map((item) =>
          item.id === action.item.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
        message = \`\${action.item.name} 数量已增加\`;
      } else {
        newItems = [...prevState.items, { ...action.item, quantity: 1 }];
        message = \`\${action.item.name} 已添加到购物车\`;
      }
      break;

    case "remove":
      const itemToRemove = prevState.items.find(
        (item) => item.id === action.id
      );
      newItems = prevState.items.filter((item) => item.id !== action.id);
      message = itemToRemove ? \`\${itemToRemove.name} 已从购物车移除\` : "";
      break;

    case "updateQuantity":
      if (action.quantity <= 0) {
        const itemToRemove = prevState.items.find(
          (item) => item.id === action.id
        );
        newItems = prevState.items.filter((item) => item.id !== action.id);
        message = itemToRemove ? \`\${itemToRemove.name} 已从购物车移除\` : "";
      } else {
        newItems = prevState.items.map((item) =>
          item.id === action.id
            ? { ...item, quantity: action.quantity }
            : item
        );
        message = "商品数量已更新";
      }
      break;

    case "clear":
      newItems = [];
      message = "购物车已清空";
      break;

    default:
      return prevState;
  }

  const total = newItems.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );

  return {
    items: newItems,
    total,
    status: "idle",
    message,
  };
}

// 购物车演示组件
const ShoppingCartDemo: React.FC = () => {
  const [state, dispatch, isPending] = useActionState(
    cartReducer,
    initialCartState
  );

  const sampleProducts = [
    { id: "1", name: "MacBook Pro", price: 1999 },
    { id: "2", name: "iPhone 15", price: 999 },
    { id: "3", name: "AirPods Pro", price: 249 },
    { id: "4", name: "iPad Air", price: 599 },
  ];

  return (
    <div className="space-y-6">
      <div className="bg-purple-50 p-4 rounded-lg border border-purple-200">
        <h3 className="text-lg font-semibold text-purple-800 mb-3">
          购物车管理
        </h3>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* 商品列表 */}
          <div>
            <h4 className="font-semibold text-purple-700 mb-3">商品列表</h4>
            <div className="space-y-2">
              {sampleProducts.map((product) => (
                <div
                  key={product.id}
                  className="flex items-center justify-between bg-white p-3 rounded border"
                >
                  <div>
                    <p className="font-medium">{product.name}</p>
                    <p className="text-sm text-gray-600">\${product.price}</p>
                  </div>
                  <button
                    onClick={() => dispatch({ type: "add", item: product })}
                    disabled={isPending}
                    className="px-3 py-1 bg-purple-500 text-white rounded hover:bg-purple-600 disabled:opacity-50 transition-colors"
                  >
                    {isPending ? "..." : "添加"}
                  </button>
                </div>
              ))}
            </div>
          </div>

          {/* 购物车 */}
          <div>
            <div className="flex items-center justify-between mb-3">
              <h4 className="font-semibold text-purple-700">购物车</h4>
              <button
                onClick={() => dispatch({ type: "clear" })}
                disabled={isPending || state.items.length === 0}
                className="px-3 py-1 bg-red-500 text-white rounded hover:bg-red-600 disabled:opacity-50 transition-colors"
              >
                清空
              </button>
            </div>

            {isPending && (
              <div className="flex items-center space-x-2 text-purple-600 mb-3">
                <div className="animate-spin rounded-full h-4 w-4 border-2 border-purple-600 border-t-transparent"></div>
                <span className="text-sm">更新中...</span>
              </div>
            )}

            {state.items.length === 0 ? (
              <div className="bg-gray-100 p-4 rounded text-center text-gray-500">
                购物车为空
              </div>
            ) : (
              <div className="space-y-2">
                {state.items.map((item) => (
                  <div key={item.id} className="bg-white p-3 rounded border">
                    <div className="flex items-center justify-between mb-2">
                      <span className="font-medium">{item.name}</span>
                      <button
                        onClick={() =>
                          dispatch({ type: "remove", id: item.id })
                        }
                        disabled={isPending}
                        className="text-red-500 hover:text-red-700 disabled:opacity-50"
                      >
                        ✕
                      </button>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-sm text-gray-600">
                        \${item.price}
                      </span>
                      <div className="flex items-center space-x-2">
                        <button
                          onClick={() =>
                            dispatch({
                              type: "updateQuantity",
                              id: item.id,
                              quantity: item.quantity - 1,
                            })
                          }
                          disabled={isPending}
                          className="px-2 py-1 bg-gray-300 rounded hover:bg-gray-400 disabled:opacity-50"
                        >
                          -
                        </button>
                        <span className="px-2">{item.quantity}</span>
                        <button
                          onClick={() =>
                            dispatch({
                              type: "updateQuantity",
                              id: item.id,
                              quantity: item.quantity + 1,
                            })
                          }
                          disabled={isPending}
                          className="px-2 py-1 bg-gray-300 rounded hover:bg-gray-400 disabled:opacity-50"
                        >
                          +
                        </button>
                      </div>
                    </div>
                    <div className="text-right text-sm font-medium mt-1">
                      小计: \${(item.price * item.quantity).toFixed(2)}
                    </div>
                  </div>
                ))}

                <div className="bg-purple-100 p-3 rounded font-semibold text-purple-800">
                  总计: \${state.total.toFixed(2)}
                </div>
              </div>
            )}

            {state.message && (
              <div className="mt-3 text-sm text-purple-600 bg-purple-100 p-2 rounded">
                {state.message}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ShoppingCartDemo;
export { cartReducer, initialCartState, type CartState, type CartItem, type CartAction };`,T=()=>e.jsx(b,{title:"useActionState",description:"React 19 新增的状态管理 Hook，专门用于处理表单提交和异步操作的状态管理。它结合了 useState 和 useTransition 的功能，提供了更好的用户体验。",overview:[{title:"核心概念",items:["表单状态管理","异步操作处理","加载状态跟踪","错误状态处理"]},{title:"主要优势",items:["简化异步状态管理","内置加载状态","更好的用户体验","减少样板代码"]},{title:"适用场景",items:["表单提交处理","异步数据更新","购物车操作","用户交互反馈"]},{title:"注意事项",items:["需要 React 19 支持","处理异步操作错误","避免频繁状态更新","合理使用加载状态"]}],examples:[{title:"表单状态管理",component:e.jsx(x,{}),description:"演示如何使用 useActionState 处理表单提交和验证",observationPoints:["提交表单时观察加载状态的显示","尝试提交空表单或无效邮箱，观察错误处理","成功提交后查看返回的数据展示","注意按钮和输入框在提交期间的禁用状态"],keyPoints:["useActionState 返回状态、dispatch 函数和 pending 状态","action 函数接收前一个状态和 payload 参数","自动处理异步操作的加载状态","支持错误处理和状态更新"],commonTraps:["忘记处理异步操作的错误情况","在 pending 状态下允许重复提交","action 函数中的状态不是最新的"],solutions:["在 action 函数中添加 try-catch 错误处理","使用 pending 状态禁用表单控件","通过参数传递最新状态而不是闭包捕获"],codeExample:{code:j,highlights:[10,20,30],title:"表单状态管理源码"}},{title:"异步计数器",component:e.jsx(f,{}),description:"演示使用 useActionState 处理复杂的异步状态更新",observationPoints:["点击按钮时观察异步更新的加载状态","查看操作历史记录的实时更新","尝试快速连续点击，观察操作队列处理","使用输入框设置自定义值的功能"],keyPoints:["支持复杂的状态结构和更新逻辑","可以处理不同类型的 action","自动管理异步操作的执行状态","提供操作历史和状态追踪"],commonTraps:["action 函数中的复杂逻辑导致性能问题","状态更新过于频繁影响用户体验","忘记处理并发操作的冲突"],solutions:["保持 action 函数的简洁性","使用防抖或节流控制更新频率","通过 pending 状态防止并发操作"],codeExample:{code:P,highlights:[12,22,32],title:"异步计数器源码"}},{title:"购物车管理",component:e.jsx(S,{}),description:"演示在复杂业务场景中使用 useActionState 管理状态",observationPoints:["添加商品到购物车时的异步处理","修改商品数量时的实时更新","清空购物车的批量操作处理","总价计算的自动更新"],keyPoints:["适合复杂的业务逻辑状态管理","支持多种操作类型的统一处理","提供良好的用户交互反馈","自动处理状态计算和更新"],commonTraps:["状态结构过于复杂难以维护","异步操作失败后状态不一致","频繁的状态更新影响性能"],solutions:["合理设计状态结构，保持简洁","添加错误处理和回滚机制","使用批量更新减少渲染次数"],codeExample:{code:A,highlights:[15,25,35],title:"购物车管理源码"}}],tutorial:{concepts:["useActionState 的基本语法和返回值","action 函数的定义和参数","状态更新和异步处理","加载状态的自动管理","错误处理和状态恢复"],steps:["从 React 中导入 useActionState（React 19）","定义初始状态和状态类型","创建 action 函数处理状态更新","使用 useActionState 获取状态和 dispatch","在组件中使用状态和处理用户交互"],tips:["action 函数应该是纯函数，避免副作用","使用 TypeScript 定义清晰的状态和 action 类型","合理利用 pending 状态提供用户反馈","处理异步操作的错误情况","避免在 action 中执行过于复杂的逻辑"]},interview:{questions:[{question:"useActionState 与 useState + useTransition 的区别是什么？",answer:"useActionState 是专门为处理表单和异步操作设计的 Hook，它内置了 pending 状态管理，简化了异步操作的处理。相比手动组合 useState 和 useTransition，useActionState 提供了更简洁的 API 和更好的开发体验。"},{question:"useActionState 的 action 函数有什么特点？",answer:"action 函数接收前一个状态和 payload 作为参数，可以是同步或异步函数。它应该返回新的状态，React 会自动处理状态更新和 pending 状态。action 函数应该保持纯净，避免副作用。"},{question:"如何在 useActionState 中处理错误？",answer:"可以在 action 函数中使用 try-catch 捕获错误，并返回包含错误信息的状态。也可以在状态中包含 error 字段来跟踪错误状态，然后在组件中根据错误状态显示相应的 UI。"},{question:"useActionState 适合什么场景使用？",answer:"useActionState 特别适合表单提交、数据更新、购物车操作等需要异步处理和状态管理的场景。它能够简化加载状态的管理，提供更好的用户体验。"}],keyPoints:["useActionState 是 React 19 的新特性","专门用于处理异步操作和表单状态","内置 pending 状态管理","action 函数接收前一状态和 payload","简化了异步状态管理的复杂性"]},bestPractices:{dos:["使用 TypeScript 定义清晰的状态和 action 类型","在 action 函数中处理异步操作和错误","利用 pending 状态提供用户反馈","保持 action 函数的纯净性","合理设计状态结构，避免过度复杂"],donts:["不要在 action 函数中执行副作用","不要忽略异步操作的错误处理","不要在 pending 状态下允许重复操作","不要过度依赖 useActionState 处理简单状态","不要在 action 函数中直接修改外部状态"],patterns:["表单状态模式：管理表单提交和验证状态","异步更新模式：处理数据的异步更新操作","批量操作模式：处理多个相关操作的状态","错误恢复模式：提供错误处理和状态恢复机制"]}});export{T as default};
