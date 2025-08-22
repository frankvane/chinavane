import{j as e,r as c}from"./index-MmCcWZhd.js";import{C as v}from"./ComponentTemplate-DoUPe1QN.js";const p=c.forwardRef(({variant:r="primary",size:t="md",loading:a=!1,children:s,className:l="",disabled:o,...n},d)=>{const u="inline-flex items-center justify-center font-medium rounded-md transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2",h={primary:"bg-blue-600 text-white hover:bg-blue-700 focus:ring-blue-500",secondary:"bg-gray-200 text-gray-900 hover:bg-gray-300 focus:ring-gray-500",danger:"bg-red-600 text-white hover:bg-red-700 focus:ring-red-500",success:"bg-green-600 text-white hover:bg-green-700 focus:ring-green-500"},g={sm:"px-3 py-1.5 text-sm",md:"px-4 py-2 text-base",lg:"px-6 py-3 text-lg"},x=`${u} ${h[r]} ${g[t]} ${l}`;return e.jsxs("button",{ref:d,className:x,disabled:o||a,...n,children:[a&&e.jsxs("svg",{className:"animate-spin -ml-1 mr-3 h-5 w-5 text-white",xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",children:[e.jsx("circle",{className:"opacity-25",cx:"12",cy:"12",r:"10",stroke:"currentColor",strokeWidth:"4"}),e.jsx("path",{className:"opacity-75",fill:"currentColor",d:"M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"})]}),s]})});p.displayName="Button";const m=c.forwardRef(({label:r,error:t,leftIcon:a,rightIcon:s,className:l="",variant:o="default",...n},d)=>{const u="w-full px-4 py-2 transition-colors focus:outline-none focus:ring-2",h={default:"border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500",filled:"bg-gray-100 border-none rounded-md focus:ring-blue-500",outlined:"bg-transparent border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"},g=t?"border-red-500 focus:ring-red-500 focus:border-red-500":"",x=`${u} ${h[o]} ${g} ${l}`;return e.jsxs("div",{className:"w-full",children:[r&&e.jsx("label",{className:"block text-sm font-medium text-gray-700 mb-1",children:r}),e.jsxs("div",{className:"relative",children:[a&&e.jsx("div",{className:"absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none",children:a}),e.jsx("input",{ref:d,className:`${x} ${a?"pl-10":""} ${s?"pr-10":""}`,...n}),s&&e.jsx("div",{className:"absolute inset-y-0 right-0 pr-3 flex items-center pointer-events-none",children:s})]}),t&&e.jsx("p",{className:"mt-1 text-sm text-red-600",children:t})]})});m.displayName="Input";const b=()=>e.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",className:"h-5 w-5 text-gray-400",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor",children:e.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"})}),N=()=>e.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",className:"h-5 w-5 text-gray-400",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor",children:e.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"})}),j=()=>{const[r,t]=c.useState(!1),a=()=>{t(!0),setTimeout(()=>t(!1),2e3)};return e.jsxs("div",{className:"space-y-4",children:[e.jsxs("div",{className:"flex flex-wrap gap-2",children:[e.jsx(p,{variant:"primary",children:"Primary"}),e.jsx(p,{variant:"secondary",children:"Secondary"}),e.jsx(p,{variant:"danger",children:"Danger"}),e.jsx(p,{variant:"success",children:"Success"})]}),e.jsxs("div",{className:"flex flex-wrap gap-2",children:[e.jsx(p,{size:"sm",children:"Small"}),e.jsx(p,{size:"md",children:"Medium"}),e.jsx(p,{size:"lg",children:"Large"})]}),e.jsx("div",{children:e.jsx(p,{loading:r,onClick:a,children:r?"Loading...":"Click to Load"})})]})},C=()=>{const[r,t]=c.useState(""),[a,s]=c.useState(""),[l,o]=c.useState(""),n=d=>{const u=d.target.value;t(u),u&&!u.includes("@")?o("Please enter a valid email address"):o("")};return e.jsxs("div",{className:"space-y-4 max-w-md",children:[e.jsx(m,{label:"Email Address",placeholder:"Enter your email",value:r,onChange:n,leftIcon:e.jsx(b,{}),error:l}),e.jsx(m,{label:"Search",placeholder:"Search...",value:a,onChange:d=>s(d.target.value),rightIcon:e.jsx(N,{}),variant:"filled"}),e.jsxs("div",{className:"flex gap-4",children:[e.jsx(m,{variant:"default",placeholder:"Default"}),e.jsx(m,{variant:"filled",placeholder:"Filled"}),e.jsx(m,{variant:"outlined",placeholder:"Outlined"})]})]})},y=c.forwardRef(({value:r,onChange:t,placeholder:a="Select date",format:s="MM/DD/YYYY",className:l=""},o)=>{const n=r?r.toLocaleDateString("en-US",{year:"numeric",month:"2-digit",day:"2-digit"}):"",d=()=>{t(new Date)};return e.jsx("div",{ref:o,className:`border border-gray-300 rounded-md px-4 py-2 cursor-pointer ${l}`,onClick:d,children:n||a})});y.displayName="ThirdPartyDatePicker";const f=c.forwardRef(({label:r,error:t,required:a,className:s="",...l},o)=>e.jsxs("div",{className:"w-full",children:[r&&e.jsxs("label",{className:"block text-sm font-medium text-gray-700 mb-1",children:[r," ",a&&e.jsx("span",{className:"text-red-500",children:"*"})]}),e.jsx(y,{ref:o,className:`w-full ${t?"border-red-500":""} ${s}`,...l}),t&&e.jsx("p",{className:"mt-1 text-sm text-red-600",children:t})]}));f.displayName="CustomDatePicker";const w=()=>{const[r,t]=c.useState(null),[a,s]=c.useState(""),l=o=>{t(o),s(o?"":"Please select a date")};return e.jsxs("div",{className:"space-y-4 max-w-md",children:[e.jsx(f,{label:"Event Date",value:r,onChange:l,error:a,required:!0}),e.jsx("div",{className:"text-sm text-gray-500",children:r?`Selected date: ${r.toLocaleDateString()}`:"No date selected"})]})},i=({variant:r="body",color:t="default",children:a,className:s=""})=>{const l={h1:"text-3xl font-bold",h2:"text-2xl font-bold",h3:"text-xl font-bold",h4:"text-lg font-medium",body:"text-base",caption:"text-sm"},o={default:"text-gray-900",primary:"text-blue-600",secondary:"text-gray-600",error:"text-red-600"},n=`${l[r]} ${o[t]} ${s}`;switch(r){case"h1":return e.jsx("h1",{className:n,children:a});case"h2":return e.jsx("h2",{className:n,children:a});case"h3":return e.jsx("h3",{className:n,children:a});case"h4":return e.jsx("h4",{className:n,children:a});case"caption":return e.jsx("span",{className:n,children:a});default:return e.jsx("p",{className:n,children:a})}},T=()=>e.jsxs("div",{className:"space-y-4",children:[e.jsx(i,{variant:"h1",children:"Heading 1"}),e.jsx(i,{variant:"h2",children:"Heading 2"}),e.jsx(i,{variant:"h3",children:"Heading 3"}),e.jsx(i,{variant:"h4",children:"Heading 4"}),e.jsx(i,{variant:"body",children:"This is a body text paragraph. The proxy component handles the styling and semantic HTML element selection automatically."}),e.jsx(i,{variant:"caption",children:"This is a caption text"}),e.jsxs("div",{className:"space-y-2",children:[e.jsx(i,{color:"default",children:"Default Color"}),e.jsx(i,{color:"primary",children:"Primary Color"}),e.jsx(i,{color:"secondary",children:"Secondary Color"}),e.jsx(i,{color:"error",children:"Error Color"})]})]}),P=`
// 基础按钮代理组件
interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "danger" | "success";
  size?: "sm" | "md" | "lg";
  loading?: boolean;
  children: ReactNode;
}

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      variant = "primary",
      size = "md",
      loading = false,
      children,
      className = "",
      disabled,
      ...props
    },
    ref
  ) => {
    const baseClasses =
      "inline-flex items-center justify-center font-medium rounded-md transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2";

    const variantClasses = {
      primary: "bg-blue-600 text-white hover:bg-blue-700 focus:ring-blue-500",
      secondary:
        "bg-gray-200 text-gray-900 hover:bg-gray-300 focus:ring-gray-500",
      danger: "bg-red-600 text-white hover:bg-red-700 focus:ring-red-500",
      success:
        "bg-green-600 text-white hover:bg-green-700 focus:ring-green-500",
    };

    const sizeClasses = {
      sm: "px-3 py-1.5 text-sm",
      md: "px-4 py-2 text-base",
      lg: "px-6 py-3 text-lg",
    };

    const classes = \`\${baseClasses} \${variantClasses[variant]} \${sizeClasses[size]} \${className}\`;

    return (
      <button
        ref={ref}
        className={classes}
        disabled={disabled || loading}
        {...props}
      >
        {loading && (
          <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white">
            {/* SVG内容省略 */}
          </svg>
        )}
        {children}
      </button>
    );
  }
);

Button.displayName = "Button";

// 使用示例
const ButtonExample = () => {
  const [isLoading, setIsLoading] = useState(false);

  const handleClick = () => {
    setIsLoading(true);
    setTimeout(() => setIsLoading(false), 2000);
  };

  return (
    <div className="space-y-4">
      {/* 不同变体 */}
      <div className="flex flex-wrap gap-2">
        <Button variant="primary">Primary</Button>
        <Button variant="secondary">Secondary</Button>
        <Button variant="danger">Danger</Button>
        <Button variant="success">Success</Button>
      </div>

      {/* 不同尺寸 */}
      <div className="flex flex-wrap gap-2">
        <Button size="sm">Small</Button>
        <Button size="md">Medium</Button>
        <Button size="lg">Large</Button>
      </div>

      {/* 加载状态 */}
      <Button loading={isLoading} onClick={handleClick}>
        {isLoading ? "Loading..." : "Click to Load"}
      </Button>
    </div>
  );
};
`,k=`
// 基础输入框代理组件
interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  error?: string;
  leftIcon?: ReactNode;
  rightIcon?: ReactNode;
  variant?: "default" | "filled" | "outlined";
}

const Input = forwardRef<HTMLInputElement, InputProps>(
  (
    {
      label,
      error,
      leftIcon,
      rightIcon,
      className = "",
      variant = "default",
      ...props
    },
    ref
  ) => {
    const baseClasses =
      "w-full px-4 py-2 transition-colors focus:outline-none focus:ring-2";

    const variantClasses = {
      default: "border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500",
      filled: "bg-gray-100 border-none rounded-md focus:ring-blue-500",
      outlined: "bg-transparent border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500",
    };

    const errorClasses = error
      ? "border-red-500 focus:ring-red-500 focus:border-red-500"
      : "";

    const classes = \`\${baseClasses} \${variantClasses[variant]} \${errorClasses} \${className}\`;

    return (
      <div className="w-full">
        {label && (
          <label className="block text-sm font-medium text-gray-700 mb-1">
            {label}
          </label>
        )}
        <div className="relative">
          {leftIcon && (
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              {leftIcon}
            </div>
          )}
          <input
            ref={ref}
            className={\`\${classes} \${leftIcon ? "pl-10" : ""} \${
              rightIcon ? "pr-10" : ""
            }\`}
            {...props}
          />
          {rightIcon && (
            <div className="absolute inset-y-0 right-0 pr-3 flex items-center pointer-events-none">
              {rightIcon}
            </div>
          )}
        </div>
        {error && <p className="mt-1 text-sm text-red-600">{error}</p>}
      </div>
    );
  }
);

Input.displayName = "Input";

// 图标组件
const MailIcon = () => (
  <svg className="h-5 w-5 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
          d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
  </svg>
);

const SearchIcon = () => (
  <svg className="h-5 w-5 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
          d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
  </svg>
);

// 使用示例
const InputExample = () => {
  const [email, setEmail] = useState("");
  const [search, setSearch] = useState("");
  const [error, setError] = useState("");

  const handleEmailChange = (e: ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setEmail(value);

    if (value && !value.includes("@")) {
      setError("Please enter a valid email address");
    } else {
      setError("");
    }
  };

  return (
    <div className="space-y-4 max-w-md">
      {/* 带标签和图标的输入框 */}
      <Input
        label="Email Address"
        placeholder="Enter your email"
        value={email}
        onChange={handleEmailChange}
        leftIcon={<MailIcon />}
        error={error}
      />

      {/* 搜索输入框 */}
      <Input
        label="Search"
        placeholder="Search..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        rightIcon={<SearchIcon />}
        variant="filled"
      />

      {/* 不同变体 */}
      <div className="flex gap-4">
        <Input variant="default" placeholder="Default" />
        <Input variant="filled" placeholder="Filled" />
        <Input variant="outlined" placeholder="Outlined" />
      </div>
    </div>
  );
};
`,I=`
// 第三方日期选择器接口
interface DatePickerProps {
  value: Date | null;
  onChange: (date: Date | null) => void;
  placeholder?: string;
  format?: string;
  className?: string;
}

// 模拟第三方日期选择器组件
const ThirdPartyDatePicker = forwardRef<HTMLDivElement, DatePickerProps>(
  ({ value, onChange, placeholder = "Select date", className = "" }, ref) => {
    const formattedValue = value
      ? value.toLocaleDateString("en-US", {
          year: "numeric",
          month: "2-digit",
          day: "2-digit",
        })
      : "";

    const handleClick = () => {
      // 模拟选择今天的日期
      onChange(new Date());
    };

    return (
      <div
        ref={ref}
        className={\`border border-gray-300 rounded-md px-4 py-2 cursor-pointer \${className}\`}
        onClick={handleClick}
      >
        {formattedValue || placeholder}
      </div>
    );
  }
);

// 代理第三方日期选择器
interface CustomDatePickerProps extends DatePickerProps {
  label?: string;
  error?: string;
  required?: boolean;
}

const CustomDatePicker = forwardRef<HTMLDivElement, CustomDatePickerProps>(
  ({ label, error, required, className = "", ...props }, ref) => {
    return (
      <div className="w-full">
        {label && (
          <label className="block text-sm font-medium text-gray-700 mb-1">
            {label} {required && <span className="text-red-500">*</span>}
          </label>
        )}
        <ThirdPartyDatePicker
          ref={ref}
          className={\`w-full \${error ? "border-red-500" : ""} \${className}\`}
          {...props}
        />
        {error && <p className="mt-1 text-sm text-red-600">{error}</p>}
      </div>
    );
  }
);

CustomDatePicker.displayName = "CustomDatePicker";

// 使用示例
const DatePickerExample = () => {
  const [date, setDate] = useState<Date | null>(null);
  const [error, setError] = useState("");

  const handleDateChange = (newDate: Date | null) => {
    setDate(newDate);

    if (!newDate) {
      setError("Please select a date");
    } else {
      setError("");
    }
  };

  return (
    <div className="space-y-4 max-w-md">
      {/* 带验证的日期选择器 */}
      <CustomDatePicker
        label="Event Date"
        value={date}
        onChange={handleDateChange}
        error={error}
        required
        placeholder="Click to select date"
      />

      {/* 显示选择结果 */}
      <div className="text-sm text-gray-500">
        {date
          ? \`Selected date: \${date.toLocaleDateString()}\`
          : "No date selected"}
      </div>

      {/* 重置按钮 */}
      <button
        onClick={() => handleDateChange(null)}
        className="px-4 py-2 bg-gray-200 text-gray-700 rounded-md hover:bg-gray-300"
      >
        Reset Date
      </button>
    </div>
  );
};
`,S=`
// 样式代理组件
interface TypographyProps {
  variant?: "h1" | "h2" | "h3" | "h4" | "body" | "caption";
  color?: "default" | "primary" | "secondary" | "error";
  children: ReactNode;
  className?: string;
}

const Typography = ({
  variant = "body",
  color = "default",
  children,
  className = "",
}: TypographyProps) => {
  const variantClasses = {
    h1: "text-3xl font-bold",
    h2: "text-2xl font-bold",
    h3: "text-xl font-bold",
    h4: "text-lg font-medium",
    body: "text-base",
    caption: "text-sm",
  };

  const colorClasses = {
    default: "text-gray-900",
    primary: "text-blue-600",
    secondary: "text-gray-600",
    error: "text-red-600",
  };

  const classes = \`\${variantClasses[variant]} \${colorClasses[color]} \${className}\`;

  switch (variant) {
    case "h1":
      return <h1 className={classes}>{children}</h1>;
    case "h2":
      return <h2 className={classes}>{children}</h2>;
    case "h3":
      return <h3 className={classes}>{children}</h3>;
    case "h4":
      return <h4 className={classes}>{children}</h4>;
    case "caption":
      return <span className={classes}>{children}</span>;
    default:
      return <p className={classes}>{children}</p>;
  }
};

// 使用示例
const TypographyExample = () => {
  return (
    <div className="space-y-4">
      {/* 不同标题级别 */}
      <Typography variant="h1">主标题 (H1)</Typography>
      <Typography variant="h2">二级标题 (H2)</Typography>
      <Typography variant="h3">三级标题 (H3)</Typography>
      <Typography variant="h4">四级标题 (H4)</Typography>

      {/* 正文和说明文字 */}
      <Typography variant="body">
        这是正文段落。代理组件自动处理样式和语义HTML元素的选择。
        Typography组件根据variant属性自动选择合适的HTML标签。
      </Typography>
      <Typography variant="caption">这是说明文字</Typography>

      {/* 不同颜色 */}
      <div className="space-y-2">
        <Typography color="default">默认颜色文字</Typography>
        <Typography color="primary">主要颜色文字</Typography>
        <Typography color="secondary">次要颜色文字</Typography>
        <Typography color="error">错误颜色文字</Typography>
      </div>

      {/* 组合使用 */}
      <div className="bg-gray-50 p-4 rounded-lg">
        <Typography variant="h3" color="primary" className="mb-2">
          组合示例
        </Typography>
        <Typography variant="body" color="secondary">
          这个示例展示了如何组合使用不同的variant、color和自定义className。
        </Typography>
      </div>
    </div>
  );
};
`,E=()=>{const r={title:"代理组件模式",description:"代理组件模式是一种封装和扩展现有组件的设计模式，通过创建一个新的组件来包装原始组件，从而添加额外的功能、样式或行为，同时保持原始组件的API和功能完整性。",overview:e.jsxs("div",{className:"space-y-4",children:[e.jsx("p",{children:"代理组件模式是React中常用的一种组件设计模式，它通过创建一个新的组件来包装原始组件，从而实现以下目标："}),e.jsxs("ul",{className:"list-disc pl-5 space-y-2",children:[e.jsxs("li",{children:[e.jsx("strong",{children:"扩展功能"}),"：为原始组件添加额外的功能，如加载状态、错误处理、验证等"]}),e.jsxs("li",{children:[e.jsx("strong",{children:"统一样式"}),"：应用一致的样式和主题，确保UI的一致性"]}),e.jsxs("li",{children:[e.jsx("strong",{children:"简化API"}),"：为复杂组件提供更简单、更直观的接口"]}),e.jsxs("li",{children:[e.jsx("strong",{children:"封装第三方库"}),"：将第三方组件库封装为符合项目规范的组件"]}),e.jsxs("li",{children:[e.jsx("strong",{children:"添加业务逻辑"}),"：注入特定的业务逻辑和验证规则"]})]}),e.jsxs("p",{children:["代理组件通常使用",e.jsx("code",{children:"forwardRef"}),"来确保ref能够正确传递到底层组件，并通过props透传保持原始组件的API完整性。"]})]}),examples:[{title:"基础按钮代理",component:e.jsx(j,{}),description:"这个示例展示了如何创建一个按钮代理组件，它扩展了原生HTML按钮的功能，添加了变体、尺寸和加载状态等特性。",observationPoints:["按钮组件继承了原生button的所有属性和事件","通过variant属性可以轻松切换不同的样式变体","size属性控制按钮的尺寸","loading属性添加了加载动画并自动禁用按钮","所有原生按钮事件（如onClick）都能正常工作"],keyPoints:["使用forwardRef确保ref能够传递到底层button元素","通过...props透传所有原生按钮属性","使用TypeScript扩展ButtonHTMLAttributes类型","条件渲染加载动画","使用Tailwind CSS实现样式变体"],codeExample:{title:"基础按钮代理组件实现",code:P,language:"typescript",highlights:[2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45,46,47,48,49,50,51,52,53,54,55,56,57,58,59]}},{title:"输入框代理组件",component:e.jsx(C,{}),description:"这个示例展示了如何创建一个输入框代理组件，它扩展了原生HTML输入框的功能，添加了标签、错误提示、图标和样式变体等特性。",observationPoints:["输入框组件继承了原生input的所有属性和事件","支持添加标签和错误提示信息","可以在输入框左侧或右侧添加图标","提供多种样式变体（默认、填充、轮廓）","支持表单验证和错误状态"],keyPoints:["使用forwardRef确保ref能够传递到底层input元素","通过...props透传所有原生输入框属性","使用TypeScript扩展InputHTMLAttributes类型","使用相对定位实现图标布局","条件渲染标签和错误信息"],codeExample:{title:"输入框代理组件实现",code:k,language:"typescript",highlights:[2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45,46,47,48,49,50,51,52,53,54,55,56,57,58,59,60,61,62,63,64,65,66,67,68,69]}},{title:"第三方组件代理",component:e.jsx(w,{}),description:"这个示例展示了如何创建一个代理组件来封装第三方日期选择器组件，添加标签、错误提示和必填标记等功能。",observationPoints:["代理组件保留了第三方组件的所有功能","添加了符合项目规范的标签和错误提示","支持必填标记","统一了样式和交互体验","简化了第三方组件的使用"],keyPoints:["使用TypeScript扩展第三方组件的Props类型","使用forwardRef确保ref能够传递到第三方组件","通过...props透传所有原始属性","添加项目特定的UI元素和样式","保持与其他表单组件的一致性"],codeExample:{title:"第三方组件代理实现",code:I,language:"typescript",highlights:[2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45,46,47,48,49,50,51,52,53,54,55,56,57,58,59,60,61,62,63,64]}},{title:"样式代理组件",component:e.jsx(T,{}),description:"这个示例展示了如何创建一个Typography样式代理组件，它根据不同的变体和颜色属性渲染不同的HTML元素和样式。",observationPoints:["根据variant属性渲染不同的HTML元素（h1, h2, p等）","通过color属性应用不同的文本颜色","保持了语义化HTML结构","提供了一致的排版系统","支持自定义className进行样式扩展"],keyPoints:["使用条件渲染选择合适的HTML元素","通过对象映射管理样式类名","提供合理的默认值","支持样式自定义和扩展","确保语义化和可访问性"],codeExample:{title:"样式代理组件实现",code:S,language:"typescript",highlights:[2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45,46,47,48]}}],tutorial:{concepts:["代理模式 - 通过包装现有对象来控制对它的访问","组件组合 - React推荐的组件复用方式","Ref转发 - 使用forwardRef将ref传递给子组件","Props透传 - 使用解构和展开运算符传递属性","TypeScript类型扩展 - 使用接口继承扩展现有类型","条件渲染 - 根据props条件渲染不同的UI元素","样式组合 - 使用模板字符串组合多个样式类"],steps:["确定需要代理的组件（原生HTML元素或第三方组件）","创建新的接口，扩展原始组件的Props类型","使用forwardRef创建代理组件，确保ref能够正确传递","在代理组件中解构props，提取自定义属性","使用剩余参数（...rest）收集原始组件的所有属性","添加额外的功能、样式或行为","将原始属性透传给底层组件","为组件添加displayName以便调试","编写完整的类型定义和文档"],tips:["保持代理组件的轻量化，避免过度封装","确保透传所有必要的原始属性，特别是事件处理器","使用TypeScript的泛型和条件类型提供更精确的类型支持","考虑性能影响，避免不必要的重渲染","为复杂的代理组件添加单元测试","使用React.memo优化代理组件的渲染性能","考虑使用Context API为代理组件提供全局配置","使用组合而非继承来扩展组件功能","为代理组件提供完整的文档和使用示例"]},interview:{questions:[{question:"什么是代理组件模式？它有什么优势？",answer:"代理组件模式是一种通过创建新组件来包装现有组件（原生HTML元素或第三方组件）的设计模式，目的是扩展功能、统一样式或简化API。主要优势包括：1）保持原始组件的API完整性；2）统一UI风格和交互体验；3）添加额外功能如加载状态、错误处理；4）简化复杂组件的使用；5）封装第三方库，降低依赖风险；6）提供更好的TypeScript类型支持；7）改善组件复用性和可维护性。"},{question:"代理组件模式的实现步骤是什么？",answer:"实现代理组件的关键步骤：1）创建新接口，扩展原始组件的Props类型；2）使用forwardRef创建组件，确保ref正确传递；3）解构props，提取自定义属性；4）使用...rest收集原始属性；5）添加额外功能和样式；6）将原始属性透传给底层组件；7）添加displayName便于调试；8）编写完整的类型定义和文档。"},{question:"如何确保代理组件正确传递ref？",answer:"确保代理组件正确传递ref需要使用React.forwardRef API。步骤如下：1）导入forwardRef；2）使用forwardRef创建组件，它接收props和ref两个参数；3）将ref传递给底层DOM元素或组件；4）正确设置TypeScript类型，指定ref的类型（如HTMLButtonElement）。示例：const Button = forwardRef<HTMLButtonElement, ButtonProps>((props, ref) => { return <button ref={ref} {...props} />; });"},{question:"代理组件与高阶组件(HOC)有什么区别？",answer:"主要区别：1）实现方式：代理组件是包装器组件，HOC是函数；2）使用方式：代理组件直接使用，HOC需要包装；3）类型支持：代理组件类型更直观，HOC类型推导复杂；4）调试体验：代理组件更容易调试；5）组合方式：代理组件更灵活，HOC容易形成包装地狱；6）现代React更推荐使用代理组件模式。"},{question:"在什么场景下应该使用代理组件？",answer:"适用场景：1）构建设计系统和组件库；2）封装第三方组件库；3）添加通用功能如加载、错误处理；4）统一样式和交互规范；5）简化复杂组件的使用；6）实现主题和国际化支持；7）添加业务逻辑和验证。不适用于简单的样式修改或一次性使用的场景。"}],keyPoints:["包装器模式 - 通过包装现有组件扩展功能","forwardRef - 确保ref能够正确传递到底层组件","props透传 - 保持原始组件的完整API","类型继承 - 使用TypeScript确保类型安全","性能优化 - 避免不必要的重渲染和性能损失","设计系统 - 构建统一的组件库和样式规范"]},bestPractices:{dos:["保持代理组件的轻量化，只添加必要的功能","使用TypeScript提供完整的类型支持和智能提示","建立清晰的命名约定，区分代理组件和原始组件","提供完整的文档和使用示例","考虑性能影响，避免不必要的重渲染","支持主题和样式定制，提高组件的灵活性","使用forwardRef确保ref能够正确传递到底层组件","通过...props透传原始组件的所有属性，保持API的完整性","合理使用TypeScript泛型和交叉类型，提供良好的类型支持"],donts:["过度封装导致失去原始组件的灵活性","忘记使用forwardRef导致ref无法传递","不透传原始属性导致功能缺失","样式硬编码缺乏定制能力","缺乏错误边界和异常处理","性能优化不当导致渲染问题","在JSX中直接创建对象或数组导致不必要的重渲染","忘记处理受控组件的value和onChange属性"],patterns:["接口设计模式：继承原始组件的所有属性，添加必要的扩展功能","Ref转发模式：使用forwardRef确保ref能够正确传递到底层组件","Props透传模式：通过解构和展开操作符透传原始组件的属性","条件渲染模式：根据props条件渲染不同的UI元素和状态","样式系统模式：通过配置化的样式系统实现统一的视觉规范","错误处理模式：集成统一的错误处理和用户反馈机制"]}};return e.jsx(v,{...r})};export{E as default};
