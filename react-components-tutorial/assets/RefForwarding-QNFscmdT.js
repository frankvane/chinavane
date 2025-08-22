import{j as e,r as s}from"./index-B_BA6J2H.js";import{C as h}from"./ComponentTemplate-CRmS-rAK.js";const R=s.forwardRef(({placeholder:n},t)=>e.jsx("input",{ref:t,type:"text",placeholder:n,className:"px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"})),v=()=>{const n=s.useRef(null),[t,r]=s.useState(""),l=()=>{var i;(i=n.current)==null||i.focus()},u=()=>{n.current&&(n.current.value="",r(""),n.current.focus())},a=()=>{n.current&&r(n.current.value)};return e.jsxs("div",{className:"space-y-4",children:[e.jsx("div",{className:"flex space-x-2",children:e.jsx(R,{ref:n,placeholder:"请输入内容"})}),e.jsxs("div",{className:"flex space-x-2",children:[e.jsx("button",{onClick:l,className:"px-3 py-1 bg-blue-600 text-white rounded hover:bg-blue-700",children:"聚焦输入框"}),e.jsx("button",{onClick:u,className:"px-3 py-1 bg-red-600 text-white rounded hover:bg-red-700",children:"清空内容"}),e.jsx("button",{onClick:a,className:"px-3 py-1 bg-green-600 text-white rounded hover:bg-green-700",children:"获取值"})]}),t&&e.jsxs("div",{className:"p-2 bg-gray-100 rounded",children:[e.jsx("strong",{children:"当前值："})," ",t]}),e.jsx("p",{className:"text-sm text-gray-600",children:"通过 ref 可以直接访问和控制子组件的 DOM 元素。"})]})},x=s.forwardRef(({label:n},t)=>{const[r,l]=s.useState(""),u=s.useRef(null);return s.useImperativeHandle(t,()=>({focus:()=>{var a;(a=u.current)==null||a.focus()},clear:()=>{var a;l(""),(a=u.current)==null||a.focus()},getValue:()=>r,setValue:a=>{l(a)}})),e.jsxs("div",{className:"mb-4",children:[e.jsx("label",{className:"block text-sm font-medium text-gray-700 mb-2",children:n}),e.jsx("input",{ref:u,type:"text",value:r,onChange:a=>l(a.target.value),className:"w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"})]})}),g=()=>{const n=s.useRef(null),t=s.useRef(null),[r,l]=s.useState({name:"",email:""}),u=()=>{var o;(o=n.current)==null||o.focus()},a=()=>{var o,c;(o=n.current)==null||o.clear(),(c=t.current)==null||c.clear(),l({name:"",email:""})},i=()=>{var p,m;const o=((p=n.current)==null?void 0:p.getValue())||"",c=((m=t.current)==null?void 0:m.getValue())||"";l({name:o,email:c})},f=()=>{var o,c;(o=n.current)==null||o.setValue("张三"),(c=t.current)==null||c.setValue("zhangsan@example.com")};return e.jsxs("div",{className:"space-y-4",children:[e.jsxs("div",{className:"max-w-md",children:[e.jsx(x,{ref:n,label:"姓名"}),e.jsx(x,{ref:t,label:"邮箱"})]}),e.jsxs("div",{className:"flex flex-wrap gap-2",children:[e.jsx("button",{onClick:u,className:"px-3 py-1 bg-blue-600 text-white rounded hover:bg-blue-700",children:"聚焦姓名"}),e.jsx("button",{onClick:a,className:"px-3 py-1 bg-red-600 text-white rounded hover:bg-red-700",children:"清空所有"}),e.jsx("button",{onClick:i,className:"px-3 py-1 bg-green-600 text-white rounded hover:bg-green-700",children:"获取所有值"}),e.jsx("button",{onClick:f,className:"px-3 py-1 bg-purple-600 text-white rounded hover:bg-purple-700",children:"设置默认值"})]}),(r.name||r.email)&&e.jsxs("div",{className:"p-4 bg-gray-100 rounded",children:[e.jsx("h4",{className:"font-semibold mb-2",children:"表单数据："}),e.jsxs("p",{children:[e.jsx("strong",{children:"姓名："})," ",r.name]}),e.jsxs("p",{children:[e.jsx("strong",{children:"邮箱："})," ",r.email]})]}),e.jsx("p",{className:"text-sm text-gray-600",children:"useImperativeHandle 允许父组件调用子组件的自定义方法。"})]})},d=s.forwardRef(({label:n,placeholder:t},r)=>e.jsxs("div",{className:"mb-4",children:[e.jsx("label",{className:"block text-sm font-medium text-gray-700 mb-2",children:n}),e.jsx("input",{ref:r,type:"text",placeholder:t,className:"w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"})]})),b=()=>{const n=s.useRef(null),t=s.useRef(null),r=s.useRef(null),[l,u]=s.useState(null),a=()=>{if(n.current&&t.current&&r.current){const f={name:n.current.value,email:t.current.value,phone:r.current.value,timestamp:new Date().toLocaleString()};u(f),console.log("表单提交:",f),n.current.value="",t.current.value="",r.current.value="",n.current.focus()}},i=()=>{n.current&&t.current&&r.current&&(n.current.value="",t.current.value="",r.current.value="",n.current.focus()),u(null)};return e.jsxs("div",{className:"space-y-4",children:[e.jsxs("div",{className:"max-w-md mx-auto p-6 bg-white rounded-lg shadow-md",children:[e.jsx("h3",{className:"text-lg font-semibold mb-4",children:"用户信息表单"}),e.jsx(d,{ref:n,label:"姓名",placeholder:"请输入姓名"}),e.jsx(d,{ref:t,label:"邮箱",placeholder:"请输入邮箱"}),e.jsx(d,{ref:r,label:"电话",placeholder:"请输入电话"}),e.jsxs("div",{className:"flex space-x-2",children:[e.jsx("button",{onClick:a,className:"flex-1 bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 transition-colors",children:"提交"}),e.jsx("button",{onClick:i,className:"flex-1 bg-gray-500 text-white py-2 px-4 rounded-md hover:bg-gray-600 transition-colors",children:"重置"})]})]}),l&&e.jsxs("div",{className:"max-w-md mx-auto p-4 bg-green-50 border border-green-200 rounded-lg",children:[e.jsx("h4",{className:"font-semibold text-green-800 mb-2",children:"提交成功！"}),e.jsxs("div",{className:"text-sm text-green-700",children:[e.jsxs("p",{children:[e.jsx("strong",{children:"姓名："})," ",l.name]}),e.jsxs("p",{children:[e.jsx("strong",{children:"邮箱："})," ",l.email]}),e.jsxs("p",{children:[e.jsx("strong",{children:"电话："})," ",l.phone]}),e.jsxs("p",{children:[e.jsx("strong",{children:"提交时间："})," ",l.timestamp]})]})]}),e.jsx("p",{className:"text-sm text-gray-600 text-center",children:"在表单场景中，Ref转发可以方便地控制表单元素的焦点和值。"})]})},w=()=>{const n={title:"Ref 转发 (Ref Forwarding)",description:"React Ref转发是一种将ref自动传递给子组件内部DOM元素的技术，让父组件能够直接访问和控制子组件的DOM节点。",overview:e.jsxs("div",{className:"space-y-4",children:[e.jsxs("div",{className:"bg-blue-50 p-4 rounded-lg",children:[e.jsx("h3",{className:"text-lg font-semibold text-blue-800 mb-2",children:"核心概念"}),e.jsxs("ul",{className:"list-disc list-inside text-blue-700 space-y-1",children:[e.jsx("li",{children:"Ref转发允许组件将接收到的ref传递给其子元素"}),e.jsx("li",{children:"使用forwardRef包装组件，使其能够接收和转发ref"}),e.jsx("li",{children:"useImperativeHandle可以自定义暴露给父组件的实例值"}),e.jsx("li",{children:"主要用于访问DOM元素或调用子组件的方法"})]})]}),e.jsxs("div",{className:"bg-green-50 p-4 rounded-lg",children:[e.jsx("h3",{className:"text-lg font-semibold text-green-800 mb-2",children:"主要优势"}),e.jsxs("ul",{className:"list-disc list-inside text-green-700 space-y-1",children:[e.jsx("li",{children:"提供了访问子组件DOM元素的直接方式"}),e.jsx("li",{children:"可以实现更精确的焦点管理和DOM操作"}),e.jsx("li",{children:"支持自定义API暴露，增强组件的可控性"}),e.jsx("li",{children:"保持组件封装性的同时提供必要的访问接口"})]})]}),e.jsxs("div",{className:"bg-yellow-50 p-4 rounded-lg",children:[e.jsx("h3",{className:"text-lg font-semibold text-yellow-800 mb-2",children:"适用场景"}),e.jsxs("ul",{className:"list-disc list-inside text-yellow-700 space-y-1",children:[e.jsx("li",{children:"表单组件需要外部控制焦点和验证"}),e.jsx("li",{children:"媒体播放器需要外部控制播放状态"}),e.jsx("li",{children:"自定义输入组件需要暴露DOM方法"}),e.jsx("li",{children:"第三方库集成需要访问底层DOM"})]})]}),e.jsxs("div",{className:"bg-red-50 p-4 rounded-lg",children:[e.jsx("h3",{className:"text-lg font-semibold text-red-800 mb-2",children:"注意事项"}),e.jsxs("ul",{className:"list-disc list-inside text-red-700 space-y-1",children:[e.jsx("li",{children:"避免过度使用，优先考虑props和回调函数"}),e.jsx("li",{children:"Ref转发会破坏组件的封装性，需要谨慎使用"}),e.jsx("li",{children:"useImperativeHandle应该只暴露必要的方法"}),e.jsx("li",{children:"在函数组件中必须使用forwardRef包装"})]})]})]}),examples:[{title:"示例1：基础Ref转发",component:e.jsx(v,{}),description:"演示如何使用forwardRef创建可以接收ref的组件，并通过ref直接操作DOM元素。",observationPoints:["点击'聚焦输入框'按钮，输入框会获得焦点","点击'清空内容'按钮，输入框内容被清空并重新获得焦点","点击'获取值'按钮，显示当前输入框的值","父组件可以直接访问和控制子组件的DOM元素"],keyPoints:["forwardRef包装组件使其能够接收ref参数","ref参数作为第二个参数传递给组件函数","父组件可以通过ref直接访问子组件的DOM节点","适用于需要直接DOM操作的场景"],commonTraps:["忘记使用forwardRef包装组件","在类组件中错误地使用forwardRef","过度依赖ref而忽略了props和回调函数","在ref.current为null时直接调用方法"],solutions:["始终使用forwardRef包装需要转发ref的函数组件","类组件不需要forwardRef，直接使用ref属性","优先使用props和回调，只在必要时使用ref","使用可选链操作符(?.)或条件判断确保ref存在"],importantTips:["forwardRef的第二个参数就是传递进来的ref","ref可以是useRef创建的对象或回调函数","转发的ref通常直接传递给DOM元素","可以在开发工具中看到ref的传递过程"],codeExample:{code:`// 基础转发输入组件
const BasicForwardedInput = forwardRef<HTMLInputElement, { placeholder?: string }>(
  ({ placeholder }, ref) => {
    return (
      <input
        ref={ref}
        type="text"
        placeholder={placeholder}
        className="px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
      />
    );
  }
);

// 基础Ref转发示例
const BasicRefForwardingExample: React.FC = () => {
  const inputRef = useRef<HTMLInputElement>(null);
  const [value, setValue] = useState("");

  const handleFocus = () => {
    inputRef.current?.focus();
  };

  const handleClear = () => {
    if (inputRef.current) {
      inputRef.current.value = "";
      setValue("");
      inputRef.current.focus();
    }
  };

  const handleGetValue = () => {
    if (inputRef.current) {
      setValue(inputRef.current.value);
    }
  };

  return (
    <div className="space-y-4">
      <div className="flex space-x-2">
        <BasicForwardedInput ref={inputRef} placeholder="请输入内容" />
      </div>
      <div className="flex space-x-2">
        <button
          onClick={handleFocus}
          className="px-3 py-1 bg-blue-600 text-white rounded hover:bg-blue-700"
        >
          聚焦输入框
        </button>
        <button
          onClick={handleClear}
          className="px-3 py-1 bg-red-600 text-white rounded hover:bg-red-700"
        >
          清空内容
        </button>
        <button
          onClick={handleGetValue}
          className="px-3 py-1 bg-green-600 text-white rounded hover:bg-green-700"
        >
          获取值
        </button>
      </div>
      {value && (
        <div className="p-2 bg-gray-100 rounded">
          <strong>当前值：</strong> {value}
        </div>
      )}
    </div>
  );
};`,language:"typescript",highlights:[2,3,4,12,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45,46,47,48,49,50,51,52,53,54,55,56,57,58,59,60,61,62,63,64,65,66,67,68,69,70],description:"基础Ref转发实现，展示forwardRef的基本用法和父组件对子组件DOM的直接控制"}},{title:"示例2：useImperativeHandle高级用法",component:e.jsx(g,{}),description:"使用useImperativeHandle自定义暴露给父组件的实例值和方法，提供更精确的控制接口。",observationPoints:["点击'聚焦姓名'按钮，姓名输入框获得焦点","点击'清空所有'按钮，两个输入框都被清空","点击'获取所有值'按钮，显示当前所有输入框的值","点击'设置默认值'按钮，输入框被设置为预定义的值","父组件调用的是子组件暴露的自定义方法，而不是直接操作DOM"],keyPoints:["useImperativeHandle可以自定义暴露给父组件的实例值","第一个参数是ref，第二个参数是返回暴露对象的函数","可以选择性地暴露子组件的方法和属性","提供了比直接DOM访问更高级的抽象"],commonTraps:["暴露过多的内部实现细节","忘记在依赖数组中包含必要的依赖","在useImperativeHandle中直接返回DOM元素","过度使用useImperativeHandle而忽略props模式"],solutions:["只暴露必要的公共API，保持组件封装性","正确设置useImperativeHandle的依赖数组","返回包含方法的对象，而不是DOM元素本身","优先考虑props和回调函数，只在必要时使用命令式API"],importantTips:["useImperativeHandle必须与forwardRef一起使用","暴露的方法应该是组件的公共API","可以在暴露的方法中进行参数验证和错误处理","依赖数组的变化会重新创建暴露的对象"],codeExample:{code:`// 高级输入组件接口
interface AdvancedInputHandle {
  focus: () => void;
  clear: () => void;
  getValue: () => string;
  setValue: (value: string) => void;
}

// 使用 useImperativeHandle 的高级组件
const AdvancedInput = forwardRef<AdvancedInputHandle, { label: string }>(
  ({ label }, ref) => {
    const [value, setValue] = useState("");
    const inputRef = useRef<HTMLInputElement>(null);

    useImperativeHandle(ref, () => ({
      focus: () => {
        inputRef.current?.focus();
      },
      clear: () => {
        setValue("");
        inputRef.current?.focus();
      },
      getValue: () => value,
      setValue: (newValue: string) => {
        setValue(newValue);
      },
    }));

    return (
      <div className="mb-4">
        <label className="block text-sm font-medium text-gray-700 mb-2">
          {label}
        </label>
        <input
          ref={inputRef}
          type="text"
          value={value}
          onChange={(e) => setValue(e.target.value)}
          className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      </div>
    );
  }
);

// useImperativeHandle 示例
const ImperativeHandleExample: React.FC = () => {
  const nameRef = useRef<AdvancedInputHandle>(null);
  const emailRef = useRef<AdvancedInputHandle>(null);
  const [formData, setFormData] = useState({ name: "", email: "" });

  const handleFocusName = () => {
    nameRef.current?.focus();
  };

  const handleClearAll = () => {
    nameRef.current?.clear();
    emailRef.current?.clear();
    setFormData({ name: "", email: "" });
  };

  const handleGetValues = () => {
    const name = nameRef.current?.getValue() || "";
    const email = emailRef.current?.getValue() || "";
    setFormData({ name, email });
  };

  const handleSetDefaults = () => {
    nameRef.current?.setValue("张三");
    emailRef.current?.setValue("zhangsan@example.com");
  };

  return (
    <div className="space-y-4">
      <div className="max-w-md">
        <AdvancedInput ref={nameRef} label="姓名" />
        <AdvancedInput ref={emailRef} label="邮箱" />
      </div>
      <div className="flex flex-wrap gap-2">
        <button onClick={handleFocusName}>聚焦姓名</button>
        <button onClick={handleClearAll}>清空所有</button>
        <button onClick={handleGetValues}>获取所有值</button>
        <button onClick={handleSetDefaults}>设置默认值</button>
      </div>
      {(formData.name || formData.email) && (
        <div className="p-4 bg-gray-100 rounded">
          <h4 className="font-semibold mb-2">表单数据：</h4>
          <p><strong>姓名：</strong> {formData.name}</p>
          <p><strong>邮箱：</strong> {formData.email}</p>
        </div>
      )}
    </div>
  );
};`,language:"typescript",highlights:[2,3,4,5,6,7,10,15,16,17,18,19,20,21,22,23,24,25,26,27],description:"useImperativeHandle高级用法，自定义暴露给父组件的API接口"}},{title:"示例3：表单场景应用",component:e.jsx(b,{}),description:"在实际表单场景中应用Ref转发，实现表单验证、焦点管理和数据收集。",observationPoints:["填写表单信息后点击'提交'按钮，表单数据被收集并显示","提交后表单自动清空并聚焦到第一个输入框","点击'重置'按钮，表单被清空并聚焦到第一个输入框","提交成功后显示绿色的成功提示和提交的数据","演示了在实际业务场景中如何使用Ref转发"],keyPoints:["Ref转发在表单处理中非常有用","可以实现精确的焦点控制和用户体验优化","结合业务逻辑可以创建更好的交互体验","适合需要直接DOM操作的复杂表单场景"],commonTraps:["在表单验证中过度依赖ref而忽略受控组件","没有正确处理ref.current为null的情况","在异步操作中使用过期的ref引用","忽略了表单的可访问性要求"],solutions:["结合受控组件和ref，在合适的场景使用合适的方案","始终检查ref.current是否存在再进行操作","在异步操作中重新获取最新的ref状态","确保表单具有正确的标签和可访问性属性"],importantTips:["表单提交后清空输入框并重新聚焦提升用户体验","可以结合表单验证库使用ref进行错误提示","在复杂表单中可以使用ref数组管理多个输入框","考虑使用受控组件作为主要方案，ref作为补充"],codeExample:{code:`// 表单输入组件
const FormInput = forwardRef<HTMLInputElement, { label: string; placeholder?: string }>(
  ({ label, placeholder }, ref) => {
    return (
      <div className="mb-4">
        <label className="block text-sm font-medium text-gray-700 mb-2">
          {label}
        </label>
        <input
          ref={ref}
          type="text"
          placeholder={placeholder}
          className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      </div>
    );
  }
);

// 表单场景应用示例
const FormExample: React.FC = () => {
  const nameRef = useRef<HTMLInputElement>(null);
  const emailRef = useRef<HTMLInputElement>(null);
  const phoneRef = useRef<HTMLInputElement>(null);
  const [submitData, setSubmitData] = useState<any>(null);

  const handleSubmit = () => {
    if (nameRef.current && emailRef.current && phoneRef.current) {
      const data = {
        name: nameRef.current.value,
        email: emailRef.current.value,
        phone: phoneRef.current.value,
        timestamp: new Date().toLocaleString(),
      };

      setSubmitData(data);
      console.log('表单提交:', data);

      // 清空表单
      nameRef.current.value = '';
      emailRef.current.value = '';
      phoneRef.current.value = '';

      // 聚焦到第一个输入框
      nameRef.current.focus();
    }
  };

  const handleReset = () => {
    if (nameRef.current && emailRef.current && phoneRef.current) {
      nameRef.current.value = '';
      emailRef.current.value = '';
      phoneRef.current.value = '';
      nameRef.current.focus();
    }
    setSubmitData(null);
  };

  return (
    <div className="space-y-4">
      <div className="max-w-md mx-auto p-6 bg-white rounded-lg shadow-md">
        <h3 className="text-lg font-semibold mb-4">用户信息表单</h3>
        <FormInput ref={nameRef} label="姓名" placeholder="请输入姓名" />
        <FormInput ref={emailRef} label="邮箱" placeholder="请输入邮箱" />
        <FormInput ref={phoneRef} label="电话" placeholder="请输入电话" />
        <div className="flex space-x-2">
          <button onClick={handleSubmit}>提交</button>
          <button onClick={handleReset}>重置</button>
        </div>
      </div>
      {submitData && (
        <div className="max-w-md mx-auto p-4 bg-green-50 border border-green-200 rounded-lg">
          <h4 className="font-semibold text-green-800 mb-2">提交成功！</h4>
          <div className="text-sm text-green-700">
            <p><strong>姓名：</strong> {submitData.name}</p>
            <p><strong>邮箱：</strong> {submitData.email}</p>
            <p><strong>电话：</strong> {submitData.phone}</p>
            <p><strong>提交时间：</strong> {submitData.timestamp}</p>
          </div>
        </div>
      )}
    </div>
  );
};`,language:"typescript",highlights:[2,9,10,11,12,13,21,22,23,24,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45],description:"表单场景应用，展示Ref转发在实际业务中的使用方式"}}],tutorial:{concepts:["Ref转发是React中将ref从父组件传递到子组件内部DOM元素的机制","forwardRef是一个高阶组件，用于包装需要转发ref的函数组件","useImperativeHandle允许自定义暴露给父组件的实例值和方法","Ref转发主要用于访问DOM元素、调用子组件方法、集成第三方库","应该谨慎使用，优先考虑props和回调函数的声明式方案"],steps:["确定需要ref访问的场景：DOM操作、焦点管理、第三方库集成等","使用forwardRef包装函数组件，接收ref作为第二个参数","将ref传递给需要访问的DOM元素或使用useImperativeHandle","在父组件中创建ref并传递给子组件","通过ref.current访问DOM元素或调用暴露的方法","处理ref可能为null的情况，确保代码的健壮性","测试ref转发的功能，确保在各种场景下都能正常工作"],tips:["只在真正需要命令式API时使用ref转发","保持暴露的API简单和一致，避免暴露内部实现细节","使用TypeScript时为ref定义正确的类型","在useImperativeHandle中正确设置依赖数组","考虑使用可选链操作符(?.)来安全地访问ref","在开发环境中使用React DevTools检查ref的传递"]},interview:{questions:[{question:"什么是Ref转发？为什么需要它？",answer:`Ref转发是React中将ref从父组件传递到子组件内部DOM元素的技术。

**为什么需要Ref转发：**

1. **组件封装**：子组件通常会封装DOM元素，父组件无法直接访问
2. **DOM操作需求**：某些场景需要直接操作DOM，如焦点管理、滚动控制
3. **第三方库集成**：集成第三方库时经常需要传递DOM引用
4. **命令式API**：提供命令式的组件控制接口

**实现方式：**

\`\`\`javascript
// 使用forwardRef包装组件
const MyInput = forwardRef((props, ref) => {
  return <input ref={ref} {...props} />;
});

// 父组件使用
function Parent() {
  const inputRef = useRef();
  
  const focusInput = () => {
    inputRef.current?.focus();
  };
  
  return (
    <div>
      <MyInput ref={inputRef} />
      <button onClick={focusInput}>聚焦</button>
    </div>
  );
}
\`\`\``},{question:"forwardRef和useImperativeHandle有什么区别？",answer:`forwardRef和useImperativeHandle都用于ref转发，但用途和实现方式不同。

**forwardRef：**
- **用途**：将ref转发给子组件的DOM元素
- **实现**：高阶组件，包装函数组件
- **暴露内容**：直接暴露DOM元素
- **使用场景**：简单的DOM访问需求

\`\`\`javascript
const Input = forwardRef((props, ref) => {
  return <input ref={ref} {...props} />;
});
\`\`\`

**useImperativeHandle：**
- **用途**：自定义暴露给父组件的实例值
- **实现**：Hook，在组件内部使用
- **暴露内容**：自定义的方法和属性
- **使用场景**：需要精确控制暴露API

\`\`\`javascript
const Input = forwardRef((props, ref) => {
  const inputRef = useRef();
  
  useImperativeHandle(ref, () => ({
    focus: () => inputRef.current?.focus(),
    clear: () => { inputRef.current.value = ''; },
    getValue: () => inputRef.current?.value
  }));
  
  return <input ref={inputRef} {...props} />;
});
\`\`\`

**选择原则：**
- 简单DOM访问用forwardRef
- 需要自定义API用useImperativeHandle`},{question:"在什么情况下应该避免使用Ref转发？",answer:`虽然Ref转发很有用，但在某些情况下应该避免使用，优先考虑React的声明式方案。

**应该避免的情况：**

**1. 可以用props解决的场景**
\`\`\`javascript
// ❌ 不必要的ref使用
const Input = forwardRef((props, ref) => {
  useImperativeHandle(ref, () => ({
    setValue: (value) => setInputValue(value)
  }));
  return <input value={inputValue} onChange={...} />;
});

// ✅ 使用props更好
const Input = ({ value, onChange }) => {
  return <input value={value} onChange={onChange} />;
};
\`\`\`

**2. 破坏组件封装性**
\`\`\`javascript
// ❌ 暴露过多内部细节
useImperativeHandle(ref, () => ({
  inputRef: inputRef.current,
  setState: setInternalState,
  forceUpdate: () => setCounter(c => c + 1)
}));
\`\`\`

**3. 可以用回调函数的场景**
\`\`\`javascript
// ❌ 用ref传递数据
const Child = forwardRef((props, ref) => {
  useImperativeHandle(ref, () => ({
    getData: () => data
  }));
});

// ✅ 用回调函数更好
const Child = ({ onDataChange }) => {
  useEffect(() => {
    onDataChange(data);
  }, [data]);
};
\`\`\`

**4. 频繁变化的数据**
- ref不会触发重新渲染
- 数据变化无法及时反映到UI

**最佳实践：**
- 优先使用props和回调函数
- 只在需要命令式API时使用ref
- 保持暴露的API最小化
- 考虑组件的可测试性和可维护性`},{question:"如何正确处理ref可能为null的情况？",answer:`ref可能为null是常见情况，正确处理这种情况对于代码的健壮性很重要。

**ref为null的常见原因：**

1. **组件未挂载**：组件还没有渲染到DOM
2. **条件渲染**：组件被条件性地渲染
3. **异步操作**：在异步回调中访问ref
4. **组件卸载**：组件已经从DOM中移除

**安全访问ref的方法：**

**1. 可选链操作符（推荐）**
\`\`\`javascript
const handleClick = () => {
  // 安全地调用方法
  inputRef.current?.focus();
  
  // 安全地访问属性
  const value = inputRef.current?.value || '';
};
\`\`\`

**2. 条件判断**
\`\`\`javascript
const handleClick = () => {
  if (inputRef.current) {
    inputRef.current.focus();
    console.log(inputRef.current.value);
  }
};
\`\`\`

**3. 在useEffect中检查**
\`\`\`javascript
useEffect(() => {
  if (inputRef.current) {
    inputRef.current.focus();
  }
}, []); // 组件挂载后执行
\`\`\`

**4. 异步操作中的处理**
\`\`\`javascript
const handleAsyncOperation = async () => {
  await someAsyncTask();
  
  // 异步操作后重新检查ref
  if (inputRef.current) {
    inputRef.current.focus();
  }
};
\`\`\`

**5. 在useImperativeHandle中处理**
\`\`\`javascript
useImperativeHandle(ref, () => ({
  focus: () => {
    if (internalRef.current) {
      internalRef.current.focus();
    }
  },
  getValue: () => {
    return internalRef.current?.value || '';
  }
}));
\`\`\`

**最佳实践：**
- 始终假设ref可能为null
- 使用可选链操作符简化代码
- 在异步操作中重新验证ref
- 提供合理的默认值和错误处理`},{question:"Ref转发在TypeScript中如何正确使用？",answer:`在TypeScript中使用Ref转发需要正确的类型定义，确保类型安全和良好的开发体验。

**基础ref转发类型定义：**

\`\`\`typescript
// 转发到DOM元素
const Input = forwardRef<HTMLInputElement, { placeholder?: string }>((
  { placeholder },
  ref
) => {
  return <input ref={ref} placeholder={placeholder} />;
});

// 使用时的类型
const Parent = () => {
  const inputRef = useRef<HTMLInputElement>(null);
  return <Input ref={inputRef} placeholder="输入内容" />;
};
\`\`\`

**useImperativeHandle的类型定义：**

\`\`\`typescript
// 定义暴露的API接口
interface InputHandle {
  focus: () => void;
  clear: () => void;
  getValue: () => string;
}

// 组件实现
const Input = forwardRef<InputHandle, { defaultValue?: string }>((
  { defaultValue },
  ref
) => {
  const [value, setValue] = useState(defaultValue || '');
  const inputRef = useRef<HTMLInputElement>(null);

  useImperativeHandle(ref, () => ({
    focus: () => inputRef.current?.focus(),
    clear: () => setValue(''),
    getValue: () => value
  }));

  return (
    <input
      ref={inputRef}
      value={value}
      onChange={(e) => setValue(e.target.value)}
    />
  );
});

// 使用时的类型
const Parent = () => {
  const inputRef = useRef<InputHandle>(null);
  
  const handleClick = () => {
    inputRef.current?.focus();
    const value = inputRef.current?.getValue();
  };
  
  return <Input ref={inputRef} defaultValue="初始值" />;
};
\`\`\`

**泛型组件的ref转发：**

\`\`\`typescript
interface ListProps<T> {
  items: T[];
  renderItem: (item: T) => ReactNode;
}

interface ListHandle {
  scrollToTop: () => void;
  getItemCount: () => number;
}

const List = <T,>(
  { items, renderItem }: ListProps<T>,
  ref: ForwardedRef<ListHandle>
) => {
  const listRef = useRef<HTMLDivElement>(null);

  useImperativeHandle(ref, () => ({
    scrollToTop: () => listRef.current?.scrollTo(0, 0),
    getItemCount: () => items.length
  }));

  return (
    <div ref={listRef}>
      {items.map((item, index) => (
        <div key={index}>{renderItem(item)}</div>
      ))}
    </div>
  );
};

// 导出时需要特殊处理
export default forwardRef(List) as <T>(
  props: ListProps<T> & { ref?: ForwardedRef<ListHandle> }
) => ReactElement;
\`\`\`

**常见类型错误和解决方案：**

\`\`\`typescript
// ❌ 错误：缺少泛型参数
const Input = forwardRef((props, ref) => {
  return <input ref={ref} />;
});

// ✅ 正确：提供完整的类型参数
const Input = forwardRef<HTMLInputElement, {}>((props, ref) => {
  return <input ref={ref} />;
});

// ❌ 错误：ref类型不匹配
const inputRef = useRef<string>(null);

// ✅ 正确：ref类型匹配
const inputRef = useRef<HTMLInputElement>(null);
\`\`\``}],keyPoints:["**forwardRef机制**：forwardRef是高阶组件，用于将ref从父组件传递到子组件的DOM元素","**useImperativeHandle用途**：允许自定义暴露给父组件的实例值，提供更精确的API控制","**类型安全**：在TypeScript中需要正确定义ref的类型，包括DOM元素类型和自定义接口类型","**使用场景**：主要用于DOM操作、焦点管理、第三方库集成等需要命令式API的场景","**最佳实践**：优先使用props和回调函数，只在必要时使用ref转发，保持API简洁","**错误处理**：始终检查ref.current是否存在，使用可选链操作符或条件判断确保安全访问","**性能考虑**：ref访问不会触发重新渲染，适合频繁的DOM操作但不适合数据传递","**组件封装**：合理使用ref转发可以在保持组件封装性的同时提供必要的控制接口","**调试技巧**：使用React DevTools可以查看ref的传递过程，帮助调试ref相关问题","**兼容性**：forwardRef在React 16.3+版本可用，是现代React开发的标准实践"]},bestPractices:{dos:["优先使用props和回调函数，只在真正需要命令式API时使用ref转发","使用forwardRef包装需要转发ref的函数组件","在useImperativeHandle中只暴露必要的公共API","始终检查ref.current是否存在，使用可选链操作符确保安全访问","为ref定义正确的TypeScript类型，提高代码的类型安全性","在表单组件中合理使用ref进行焦点管理和验证"],donts:["不要过度使用ref转发，避免破坏React的声明式编程模式","不要在useImperativeHandle中暴露过多的内部实现细节","不要忘记处理ref可能为null的情况","不要在异步操作中直接使用可能过期的ref引用","不要用ref传递频繁变化的数据，这不会触发重新渲染","不要在类组件中使用forwardRef，类组件天然支持ref"],patterns:["基础转发模式 - 使用forwardRef直接转发ref到DOM元素","自定义API模式 - 使用useImperativeHandle暴露自定义方法","表单控制模式 - 在表单组件中使用ref进行焦点和验证管理","第三方集成模式 - 使用ref将DOM引用传递给第三方库","条件渲染模式 - 在条件渲染的组件中安全地使用ref","异步安全模式 - 在异步操作中安全地访问和使用ref","类型安全模式 - 在TypeScript中正确定义和使用ref类型","组合组件模式 - 在复合组件中传递和管理多个ref","高阶组件模式 - 在HOC中正确处理ref的转发","Hook封装模式 - 创建自定义Hook来管理ref的逻辑","错误边界模式 - 在错误边界中处理ref相关的错误","性能优化模式 - 使用ref避免不必要的重新渲染"]}};return e.jsx(h,{...n})};export{w as default};
