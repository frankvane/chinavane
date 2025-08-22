import{j as e,r as n}from"./index-B_BA6J2H.js";import{C as v}from"./ComponentTemplate-CRmS-rAK.js";const S=()=>{const s={title:"受控与非受控组件",subtitle:"Controlled vs Uncontrolled Components",description:"受控与非受控组件是React中两种不同的表单数据管理方式。受控组件的状态由React管理，非受控组件的状态由DOM自身管理。",overview:e.jsxs("div",{className:"space-y-4",children:[e.jsxs("div",{children:[e.jsx("h3",{className:"text-lg font-semibold mb-2",children:"核心概念"}),e.jsx("p",{className:"text-gray-700",children:"受控与非受控组件是React中两种不同的表单数据管理方式。受控组件的状态由React管理，非受控组件的状态由DOM自身管理。"})]}),e.jsxs("div",{children:[e.jsx("h3",{className:"text-lg font-semibold mb-2",children:"主要优势"}),e.jsxs("ul",{className:"list-disc list-inside space-y-1 text-gray-700",children:[e.jsx("li",{children:"受控组件：支持实时验证、数据格式化、复杂表单逻辑"}),e.jsx("li",{children:"非受控组件：性能更好、代码更简洁、适合简单场景"}),e.jsx("li",{children:"可以根据具体需求选择合适的方式"}),e.jsx("li",{children:"支持在同一表单中混合使用两种方式"})]})]}),e.jsxs("div",{children:[e.jsx("h3",{className:"text-lg font-semibold mb-2",children:"适用场景"}),e.jsxs("ul",{className:"list-disc list-inside space-y-1 text-gray-700",children:[e.jsx("li",{children:"受控组件：复杂表单、实时验证、动态字段"}),e.jsx("li",{children:"非受控组件：简单表单、文件上传、性能敏感场景"}),e.jsx("li",{children:"混合使用：平衡功能需求和性能考虑"})]})]})]}),examples:[{id:"controlled",title:"受控组件示例",description:"表单数据存储在React状态中，支持实时验证和复杂逻辑",component:e.jsx(y,{}),codeExample:{code:`// 受控组件示例
const ControlledForm: React.FC = () => {
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    password: ''
  });
  
  const [errors, setErrors] = useState<Record<string, string>>({});
  
  const handleChange = (name: string, value: string) => {
    setFormData(prev => ({ ...prev, [name]: value }));
    // 实时验证
    validateField(name, value);
  };
  
  const validateField = (name: string, value: string) => {
    const newErrors = { ...errors };
    
    switch (name) {
      case 'username':
        if (!value.trim()) {
          newErrors.username = '用户名不能为空';
        } else if (value.length < 3) {
          newErrors.username = '用户名至少3个字符';
        } else {
          delete newErrors.username;
        }
        break;
      case 'email':
        const emailRegex = /^[^\\s@]+@[^\\s@]+\\.[^\\s@]+$/;
        if (!value.trim()) {
          newErrors.email = '邮箱不能为空';
        } else if (!emailRegex.test(value)) {
          newErrors.email = '邮箱格式不正确';
        } else {
          delete newErrors.email;
        }
        break;
    }
    
    setErrors(newErrors);
  };
  
  return (
    <form>
      <input
        type="text"
        value={formData.username}
        onChange={(e) => handleChange('username', e.target.value)}
        placeholder="用户名"
      />
      {errors.username && <span>{errors.username}</span>}
      
      <input
        type="email"
        value={formData.email}
        onChange={(e) => handleChange('email', e.target.value)}
        placeholder="邮箱"
      />
      {errors.email && <span>{errors.email}</span>}
    </form>
  );
};`,language:"typescript",highlights:[3,4,5,6,7,10,11,12,13,14,47,48,49,50,55,56,57,58],description:"受控组件通过useState管理表单状态，支持实时验证和复杂逻辑处理。"},observationPoints:["受控组件的值完全由React状态控制","每次输入都会触发状态更新和重新渲染","支持实时验证和数据格式化","通过value和onChange实现双向数据绑定"],keyPoints:["使用useState管理表单数据状态","通过value属性绑定状态值","通过onChange事件更新状态","可以实现实时验证和复杂逻辑"],commonTraps:["忘记提供onChange处理函数导致输入框无法输入","在onChange中直接修改state对象而不是创建新对象","过度使用受控组件导致性能问题"],solutions:["确保每个受控组件都有对应的onChange处理函数","使用函数式更新或展开运算符创建新的state对象","对于简单场景考虑使用非受控组件"],importantTips:["受控组件的value必须来自state，不能是undefined","实时验证应该在onChange中进行，而不是onBlur","复杂表单可以考虑使用useReducer管理状态"]},{id:"uncontrolled",title:"非受控组件示例",description:"表单数据存储在DOM中，使用ref获取值，性能更好",component:e.jsx(j,{}),codeExample:{code:`// 非受控组件示例
const UncontrolledForm: React.FC = () => {
  const usernameRef = useRef<HTMLInputElement>(null);
  const emailRef = useRef<HTMLInputElement>(null);
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // 通过ref获取值
    const username = usernameRef.current?.value;
    const email = emailRef.current?.value;
    
    console.log({ username, email });
  };
  
  return (
    <form onSubmit={handleSubmit}>
      <input
        ref={usernameRef}
        type="text"
        defaultValue=""
        placeholder="用户名"
      />
      
      <input
        ref={emailRef}
        type="email"
        defaultValue=""
        placeholder="邮箱"
      />
      
      <button type="submit">提交</button>
    </form>
  );
};`,language:"typescript",highlights:[3,4,9,10,11,18,19,21,25,26,28],description:"非受控组件使用ref获取DOM元素的值，性能更好但功能相对简单。"},observationPoints:["非受控组件的值由DOM自身管理","使用ref引用DOM元素获取值","使用defaultValue设置初始值","不会在每次输入时触发重新渲染"],keyPoints:["使用useRef创建DOM元素引用","通过ref.current.value获取输入值","使用defaultValue而不是value设置初始值","适合简单表单和性能敏感场景"],commonTraps:["使用value而不是defaultValue设置初始值","忘记检查ref.current是否存在","试图在非受控组件上使用onChange控制值"],solutions:["非受控组件必须使用defaultValue设置初始值","访问ref.current前要进行空值检查","如需控制值的变化，应该使用受控组件"],importantTips:["非受控组件适合简单表单和文件上传场景","可以通过ref直接操作DOM元素","性能优于受控组件，但功能有限"]},{id:"hybrid",title:"混合使用示例",description:"在同一表单中混合使用受控和非受控组件",component:e.jsx(N,{}),codeExample:{code:`// 混合使用示例
const HybridForm: React.FC = () => {
  // 受控字段 - 需要实时验证
  const [email, setEmail] = useState('');
  const [emailError, setEmailError] = useState('');
  
  // 非受控字段 - 简单输入
  const nameRef = useRef<HTMLInputElement>(null);
  const phoneRef = useRef<HTMLInputElement>(null);
  
  const validateEmail = (value: string) => {
    const emailRegex = /^[^\\s@]+@[^\\s@]+\\.[^\\s@]+$/;
    if (!value.trim()) {
      setEmailError('邮箱不能为空');
    } else if (!emailRegex.test(value)) {
      setEmailError('邮箱格式不正确');
    } else {
      setEmailError('');
    }
  };
  
  const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setEmail(value);
    validateEmail(value);
  };
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (emailError || !email.trim()) {
      return;
    }
    
    const formData = {
      name: nameRef.current?.value,
      email,
      phone: phoneRef.current?.value
    };
    
    console.log('提交数据:', formData);
  };
  
  return (
    <form onSubmit={handleSubmit}>
      {/* 非受控字段 */}
      <input
        ref={nameRef}
        type="text"
        placeholder="姓名"
        defaultValue=""
      />
      
      {/* 受控字段 - 实时验证 */}
      <input
        type="email"
        value={email}
        onChange={handleEmailChange}
        placeholder="邮箱"
      />
      {emailError && <span>{emailError}</span>}
      
      {/* 非受控字段 */}
      <input
        ref={phoneRef}
        type="tel"
        placeholder="电话"
        defaultValue=""
      />
      
      <button type="submit" disabled={!!emailError || !email.trim()}>
        提交
      </button>
    </form>
  );
};`,language:"typescript",highlights:[3,4,5,7,8,9,22,23,24,25,36,37,47,48,55,56,57,62,63],description:"在同一表单中混合使用受控和非受控组件，平衡功能需求和性能考虑。"},observationPoints:["重要字段使用受控组件进行实时验证","简单字段使用非受控组件提升性能","可以根据字段重要性选择不同的管理方式","提交时需要分别处理两种类型的数据"],keyPoints:["根据字段重要性选择受控或非受控方式","受控字段用于需要实时验证的场景","非受控字段用于简单数据收集","提交时统一处理所有字段数据"],commonTraps:["混合使用时忘记区分不同字段的获取方式","在提交时遗漏某些字段的数据","过度复杂化简单表单的实现"],solutions:["明确区分受控和非受控字段的处理逻辑","在提交函数中统一收集所有字段数据","保持实现的简洁性和可维护性"],importantTips:["混合使用可以平衡功能需求和性能考虑","重要字段优先考虑受控组件","简单字段可以使用非受控组件减少渲染"]},{id:"fileupload",title:"文件上传组件",description:"文件输入通常是非受控的，展示文件处理的最佳实践",component:e.jsx(w,{}),codeExample:{code:`// 文件上传组件
const FileUploadForm: React.FC = () => {
  const fileInputRef = useRef<HTMLInputElement>(null);
  const [selectedFiles, setSelectedFiles] = useState<FileList | null>(null);
  const [uploadStatus, setUploadStatus] = useState<string>('');
  
  const handleFileSelect = (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files;
    setSelectedFiles(files);
    
    if (files && files.length > 0) {
      setUploadStatus(\`已选择 \${files.length} 个文件\`);
    } else {
      setUploadStatus('');
    }
  };
  
  const handleUpload = async () => {
    if (!selectedFiles || selectedFiles.length === 0) {
      setUploadStatus('请先选择文件');
      return;
    }
    
    setUploadStatus('上传中...');
    
    try {
      // 模拟文件上传
      await new Promise(resolve => setTimeout(resolve, 2000));
      setUploadStatus('上传成功！');
    } catch (error) {
      setUploadStatus('上传失败，请重试');
    }
  };
  
  const clearFiles = () => {
    if (fileInputRef.current) {
      fileInputRef.current.value = '';
    }
    setSelectedFiles(null);
    setUploadStatus('');
  };
  
  return (
    <div>
      <input
        ref={fileInputRef}
        type="file"
        multiple
        onChange={handleFileSelect}
        accept=".jpg,.jpeg,.png,.pdf"
      />
      
      {selectedFiles && (
        <div>
          <h4>已选择的文件：</h4>
          <ul>
            {Array.from(selectedFiles).map((file, index) => (
              <li key={index}>
                {file.name} ({(file.size / 1024).toFixed(2)} KB)
              </li>
            ))}
          </ul>
        </div>
      )}
      
      <div>
        <button onClick={handleUpload} disabled={!selectedFiles}>
          上传文件
        </button>
        <button onClick={clearFiles}>
          清除选择
        </button>
      </div>
      
      {uploadStatus && <p>{uploadStatus}</p>}
    </div>
  );
};`,language:"typescript",highlights:[3,4,5,7,8,9,18,19,35,36,37,44,45,47,48],description:"文件上传组件展示了非受控组件在文件处理场景中的应用。"},observationPoints:["文件输入框天然是非受控的","使用ref获取文件输入框的引用","通过onChange事件获取选择的文件","文件对象不能作为受控组件的值"],keyPoints:["文件输入框必须使用非受控方式","通过onChange事件处理文件选择","使用FileList和File API处理文件","可以限制文件类型和数量"],commonTraps:["试图将文件对象作为受控组件的值","忘记处理文件选择的边界情况","没有提供清除文件选择的功能"],solutions:["文件上传必须使用非受控组件","添加文件验证和错误处理逻辑","提供清除和重新选择文件的功能"],importantTips:["文件输入框的值不能通过JavaScript设置","可以通过accept属性限制文件类型","处理文件上传时要考虑错误处理和进度显示"]}],tutorial:{concepts:["受控组件：表单数据由React状态管理，通过props传递值和处理函数","非受控组件：表单数据由DOM自身管理，通过ref获取值","混合使用：在同一表单中根据需求选择不同的管理方式","数据流：受控组件实现单向数据流，非受控组件依赖DOM状态"],steps:["受控组件：1) 使用useState定义状态 2) 通过value绑定状态 3) 通过onChange更新状态","非受控组件：1) 使用useRef创建引用 2) 通过defaultValue设置初始值 3) 通过ref.current.value获取值","表单验证：受控组件支持实时验证，非受控组件通常在提交时验证","性能优化：合理选择受控和非受控方式，避免不必要的重新渲染"],tips:["使用自定义Hook封装表单逻辑，提高代码复用性","对于复杂表单，考虑使用useReducer管理状态","文件上传等特殊场景必须使用非受控组件","在性能敏感的场景中优先考虑非受控组件"]},interview:{questions:[{question:"受控组件和非受控组件的区别是什么？",answer:"受控组件的值由React状态管理，通过props传递；非受控组件的值由DOM管理，通过ref获取。受控组件支持实时验证和复杂逻辑，非受控组件性能更好但功能有限。"},{question:"什么时候使用受控组件，什么时候使用非受控组件？",answer:"需要实时验证、数据格式化、动态字段或复杂表单逻辑时使用受控组件；简单表单、文件上传或性能敏感场景使用非受控组件。"},{question:"如何在受控组件中处理多个输入字段？",answer:"使用对象状态存储多个字段值，通过通用的handleChange函数处理所有字段的更新，或者为每个字段创建独立的处理函数。"},{question:"受控组件的性能问题如何解决？",answer:"使用React.memo优化组件渲染，通过useCallback缓存处理函数，对于简单场景考虑使用非受控组件，或者使用防抖技术减少更新频率。"}],keyPoints:["数据管理方式：受控组件由React状态管理，非受控组件由DOM管理","性能权衡：受控组件功能强大但可能影响性能，非受控组件性能更好","适用场景：根据功能需求和性能要求选择合适的方式","实现方式：受控组件需要value和onChange，非受控组件使用ref和defaultValue"]},bestPractices:{dos:["根据具体需求选择受控或非受控组件","为受控组件提供合适的初始值","使用TypeScript增强类型安全","实现适当的表单验证逻辑","为复杂表单考虑使用表单库"],donts:["不要在受控组件中忘记onChange处理","不要直接修改state对象","不要过度使用受控组件影响性能","不要在非受控组件中使用value属性","不要忽视表单的可访问性"],patterns:["使用自定义Hook封装表单逻辑","实现表单字段的组合模式","采用渐进式增强的验证策略","设计可复用的表单组件","实现统一的错误处理机制"]}};return e.jsx(v,{...s})},y=()=>{const[s,d]=n.useState({username:"",email:"",password:"",confirmPassword:"",agreeTerms:!1}),[t,o]=n.useState({}),[u,p]=n.useState(!1),f=(l,a)=>{const r={...t};switch(l){case"username":a.trim()?a.length<3?r.username="用户名至少3个字符":delete r.username:r.username="用户名不能为空";break;case"email":const c=/^[^\s@]+@[^\s@]+\.[^\s@]+$/;a.trim()?c.test(a)?delete r.email:r.email="邮箱格式不正确":r.email="邮箱不能为空";break;case"password":a?a.length<6?r.password="密码至少6个字符":delete r.password:r.password="密码不能为空";break;case"confirmPassword":a!==s.password?r.confirmPassword="两次密码不一致":delete r.confirmPassword;break}o(r)},m=(l,a)=>{d(r=>({...r,[l]:a})),f(l,a)},i=l=>{l.preventDefault(),Object.keys(s).forEach(a=>{f(a,s[a])}),Object.keys(t).length===0&&s.agreeTerms&&(p(!0),console.log("受控表单提交:",s))};return u?e.jsxs("div",{className:"text-center py-8",children:[e.jsx("div",{className:"text-green-600 text-lg font-semibold mb-2",children:"注册成功！"}),e.jsx("button",{onClick:()=>{p(!1),d({username:"",email:"",password:"",confirmPassword:"",agreeTerms:!1}),o({})},className:"px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600",children:"重新注册"})]}):e.jsxs("div",{children:[e.jsx("h3",{className:"text-lg font-semibold mb-4",children:"受控组件 - 用户注册表单"}),e.jsxs("form",{onSubmit:i,className:"space-y-4",children:[e.jsxs("div",{children:[e.jsx("label",{className:"block text-sm font-medium text-gray-700 mb-1",children:"用户名 *"}),e.jsx("input",{type:"text",value:s.username,onChange:l=>m("username",l.target.value),className:`w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 ${t.username?"border-red-500":"border-gray-300"}`,placeholder:"请输入用户名"}),t.username&&e.jsx("p",{className:"text-red-500 text-sm mt-1",children:t.username})]}),e.jsxs("div",{children:[e.jsx("label",{className:"block text-sm font-medium text-gray-700 mb-1",children:"邮箱 *"}),e.jsx("input",{type:"email",value:s.email,onChange:l=>m("email",l.target.value),className:`w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 ${t.email?"border-red-500":"border-gray-300"}`,placeholder:"请输入邮箱"}),t.email&&e.jsx("p",{className:"text-red-500 text-sm mt-1",children:t.email})]}),e.jsxs("div",{children:[e.jsx("label",{className:"block text-sm font-medium text-gray-700 mb-1",children:"密码 *"}),e.jsx("input",{type:"password",value:s.password,onChange:l=>m("password",l.target.value),className:`w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 ${t.password?"border-red-500":"border-gray-300"}`,placeholder:"请输入密码"}),t.password&&e.jsx("p",{className:"text-red-500 text-sm mt-1",children:t.password})]}),e.jsxs("div",{children:[e.jsx("label",{className:"block text-sm font-medium text-gray-700 mb-1",children:"确认密码 *"}),e.jsx("input",{type:"password",value:s.confirmPassword,onChange:l=>m("confirmPassword",l.target.value),className:`w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 ${t.confirmPassword?"border-red-500":"border-gray-300"}`,placeholder:"请再次输入密码"}),t.confirmPassword&&e.jsx("p",{className:"text-red-500 text-sm mt-1",children:t.confirmPassword})]}),e.jsxs("div",{className:"flex items-center",children:[e.jsx("input",{type:"checkbox",id:"agreeTerms",checked:s.agreeTerms,onChange:l=>m("agreeTerms",l.target.checked),className:"mr-2"}),e.jsx("label",{htmlFor:"agreeTerms",className:"text-sm text-gray-700",children:"我同意服务条款和隐私政策"})]}),e.jsx("button",{type:"submit",disabled:Object.keys(t).length>0||!s.agreeTerms,className:"w-full px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 disabled:bg-gray-300 disabled:cursor-not-allowed",children:"注册"})]}),e.jsxs("div",{className:"mt-4 p-3 bg-gray-100 rounded text-sm",children:[e.jsx("strong",{children:"当前表单状态："}),e.jsx("pre",{className:"mt-2 text-xs",children:JSON.stringify(s,null,2)})]})]})},j=()=>{const s=n.useRef(null),d=n.useRef(null),t=n.useRef(null),o=n.useRef(null),[u,p]=n.useState(!1),[f,m]=n.useState(null),i=a=>{if(a.preventDefault(),s.current){const r=new FormData(s.current),c={username:r.get("username"),email:r.get("email"),message:r.get("message")};m(c),p(!0),console.log("非受控表单提交:",c)}},l=()=>{p(!1),m(null),s.current&&s.current.reset()};return u?e.jsxs("div",{className:"text-center py-8",children:[e.jsx("div",{className:"text-green-600 text-lg font-semibold mb-2",children:"提交成功！"}),e.jsxs("div",{className:"bg-gray-100 p-4 rounded mb-4 text-left",children:[e.jsx("strong",{children:"提交的数据："}),e.jsx("pre",{className:"mt-2 text-sm",children:JSON.stringify(f,null,2)})]}),e.jsx("button",{onClick:l,className:"px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600",children:"重新填写"})]}):e.jsxs("div",{children:[e.jsx("h3",{className:"text-lg font-semibold mb-4",children:"非受控组件 - 联系表单"}),e.jsxs("form",{ref:s,onSubmit:i,className:"space-y-4",children:[e.jsxs("div",{children:[e.jsx("label",{className:"block text-sm font-medium text-gray-700 mb-1",children:"用户名"}),e.jsx("input",{ref:d,type:"text",name:"username",defaultValue:"",className:"w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500",placeholder:"请输入用户名",required:!0})]}),e.jsxs("div",{children:[e.jsx("label",{className:"block text-sm font-medium text-gray-700 mb-1",children:"邮箱"}),e.jsx("input",{ref:t,type:"email",name:"email",defaultValue:"",className:"w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500",placeholder:"请输入邮箱",required:!0})]}),e.jsxs("div",{children:[e.jsx("label",{className:"block text-sm font-medium text-gray-700 mb-1",children:"消息"}),e.jsx("textarea",{ref:o,name:"message",rows:4,defaultValue:"",className:"w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500",placeholder:"请输入消息内容",required:!0})]}),e.jsxs("div",{className:"flex space-x-2",children:[e.jsx("button",{type:"submit",className:"px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600",children:"提交"}),e.jsx("button",{type:"button",onClick:()=>{s.current&&s.current.reset()},className:"px-4 py-2 bg-gray-500 text-white rounded hover:bg-gray-600",children:"重置"}),e.jsx("button",{type:"button",onClick:()=>{var r,c,x;const a={username:(r=d.current)==null?void 0:r.value,email:(c=t.current)==null?void 0:c.value,message:(x=o.current)==null?void 0:x.value};alert(`当前值：
`+JSON.stringify(a,null,2))},className:"px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600",children:"获取当前值"})]})]})]})},N=()=>{const[s,d]=n.useState(""),[t,o]=n.useState(""),u=n.useRef(null),p=n.useRef(null),f=n.useRef(null),[m,i]=n.useState(!1),l=c=>{const x=/^[^\s@]+@[^\s@]+\.[^\s@]+$/;c.trim()?x.test(c)?o(""):o("邮箱格式不正确"):o("邮箱不能为空")},a=c=>{const x=c.target.value;d(x),l(x)},r=c=>{var h,g,b;if(c.preventDefault(),t||!s.trim())return;const x={name:(h=u.current)==null?void 0:h.value,email:s,phone:(g=p.current)==null?void 0:g.value,comments:(b=f.current)==null?void 0:b.value};console.log("混合表单提交:",x),i(!0)};return m?e.jsxs("div",{className:"text-center py-8",children:[e.jsx("div",{className:"text-green-600 text-lg font-semibold mb-2",children:"提交成功！"}),e.jsx("button",{onClick:()=>{i(!1),d(""),o("")},className:"px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600",children:"重新填写"})]}):e.jsxs("div",{children:[e.jsx("h3",{className:"text-lg font-semibold mb-4",children:"混合使用 - 客户反馈表单"}),e.jsxs("form",{onSubmit:r,className:"space-y-4",children:[e.jsxs("div",{children:[e.jsx("label",{className:"block text-sm font-medium text-gray-700 mb-1",children:"姓名 (非受控)"}),e.jsx("input",{ref:u,type:"text",defaultValue:"",className:"w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500",placeholder:"请输入姓名",required:!0})]}),e.jsxs("div",{children:[e.jsx("label",{className:"block text-sm font-medium text-gray-700 mb-1",children:"邮箱 (受控 - 实时验证) *"}),e.jsx("input",{type:"email",value:s,onChange:a,className:`w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 ${t?"border-red-500":"border-gray-300"}`,placeholder:"请输入邮箱"}),t&&e.jsx("p",{className:"text-red-500 text-sm mt-1",children:t})]}),e.jsxs("div",{children:[e.jsx("label",{className:"block text-sm font-medium text-gray-700 mb-1",children:"电话 (非受控)"}),e.jsx("input",{ref:p,type:"tel",defaultValue:"",className:"w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500",placeholder:"请输入电话号码"})]}),e.jsxs("div",{children:[e.jsx("label",{className:"block text-sm font-medium text-gray-700 mb-1",children:"意见建议 (非受控)"}),e.jsx("textarea",{ref:f,rows:4,defaultValue:"",className:"w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500",placeholder:"请输入您的意见建议"})]}),e.jsx("button",{type:"submit",disabled:!!t||!s.trim(),className:"w-full px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 disabled:bg-gray-300 disabled:cursor-not-allowed",children:"提交反馈"})]}),e.jsxs("div",{className:"mt-4 p-3 bg-gray-100 rounded text-sm",children:[e.jsx("strong",{children:"受控字段状态："}),e.jsxs("div",{className:"mt-1",children:["邮箱: ",s]}),t&&e.jsxs("div",{className:"text-red-500",children:["错误: ",t]})]})]})},w=()=>{const s=n.useRef(null),[d,t]=n.useState([]),[o,u]=n.useState(""),p=i=>{const l=Array.from(i.target.files||[]);t(l),u("")},f=async()=>{if(d.length===0){u("请选择文件");return}u("上传中...");try{await new Promise(i=>setTimeout(i,2e3)),u("上传成功！")}catch{u("上传失败")}},m=()=>{t([]),u(""),s.current&&(s.current.value="")};return e.jsxs("div",{children:[e.jsx("h3",{className:"text-lg font-semibold mb-4",children:"文件上传组件"}),e.jsxs("div",{className:"space-y-4",children:[e.jsxs("div",{children:[e.jsx("label",{className:"block text-sm font-medium text-gray-700 mb-1",children:"选择文件 (非受控)"}),e.jsx("input",{ref:s,type:"file",multiple:!0,onChange:p,className:"w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500",accept:".jpg,.jpeg,.png,.pdf,.doc,.docx"})]}),d.length>0&&e.jsxs("div",{className:"bg-gray-50 p-4 rounded-lg",children:[e.jsx("h4",{className:"font-medium mb-2",children:"已选择的文件："}),e.jsx("ul",{className:"space-y-1",children:d.map((i,l)=>e.jsxs("li",{className:"text-sm text-gray-600",children:[i.name," (",(i.size/1024).toFixed(1)," KB)"]},l))})]}),o&&e.jsx("div",{className:`p-3 rounded ${o.includes("成功")?"bg-green-100 text-green-700":o.includes("失败")?"bg-red-100 text-red-700":"bg-blue-100 text-blue-700"}`,children:o}),e.jsxs("div",{className:"flex space-x-2",children:[e.jsx("button",{onClick:f,disabled:d.length===0||o==="上传中...",className:"px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 disabled:bg-gray-300 disabled:cursor-not-allowed",children:o==="上传中..."?"上传中...":"上传文件"}),e.jsx("button",{onClick:m,className:"px-4 py-2 bg-gray-500 text-white rounded hover:bg-gray-600",children:"清除选择"})]})]})]})};export{S as default};
