import{r as c,j as e}from"./index-H7t66yxh.js";import{C as v}from"./ComponentTemplate-bNJaV0ol.js";const p=c.forwardRef(({variant:n="primary",size:t="md",loading:r=!1,children:a,className:l="",disabled:s,...o},d)=>{const u="inline-flex items-center justify-center font-medium rounded-md transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2",h={primary:"bg-blue-600 text-white hover:bg-blue-700 focus:ring-blue-500",secondary:"bg-gray-200 text-gray-900 hover:bg-gray-300 focus:ring-gray-500",danger:"bg-red-600 text-white hover:bg-red-700 focus:ring-red-500",success:"bg-green-600 text-white hover:bg-green-700 focus:ring-green-500"},f={sm:"px-3 py-1.5 text-sm",md:"px-4 py-2 text-base",lg:"px-6 py-3 text-lg"},y=`${u} ${h[n]} ${f[t]} ${l}`;return e.jsxs("button",{ref:d,className:y,disabled:s||r,...o,children:[r&&e.jsxs("svg",{className:"animate-spin -ml-1 mr-3 h-5 w-5 text-white",xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",children:[e.jsx("circle",{className:"opacity-25",cx:"12",cy:"12",r:"10",stroke:"currentColor",strokeWidth:"4"}),e.jsx("path",{className:"opacity-75",fill:"currentColor",d:"M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"})]}),a]})});p.displayName="Button";const m=c.forwardRef(({label:n,error:t,leftIcon:r,rightIcon:a,className:l="",variant:s="default",...o},d)=>{const u="w-full px-4 py-2 transition-colors focus:outline-none focus:ring-2",h={default:"border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500",filled:"bg-gray-100 border-none rounded-md focus:ring-blue-500",outlined:"bg-transparent border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"},f=t?"border-red-500 focus:ring-red-500 focus:border-red-500":"",y=`${u} ${h[s]} ${f} ${l}`;return e.jsxs("div",{className:"w-full",children:[n&&e.jsx("label",{className:"block text-sm font-medium text-gray-700 mb-1",children:n}),e.jsxs("div",{className:"relative",children:[r&&e.jsx("div",{className:"absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none",children:r}),e.jsx("input",{ref:d,className:`${y} ${r?"pl-10":""} ${a?"pr-10":""}`,...o}),a&&e.jsx("div",{className:"absolute inset-y-0 right-0 pr-3 flex items-center pointer-events-none",children:a})]}),t&&e.jsx("p",{className:"mt-1 text-sm text-red-600",children:t})]})});m.displayName="Input";const x=c.forwardRef(({value:n,onChange:t,placeholder:r="Select date",format:a="MM/DD/YYYY",className:l=""},s)=>{const o=n?n.toLocaleDateString("en-US",{year:"numeric",month:"2-digit",day:"2-digit"}):"",d=()=>{t(new Date)};return e.jsx("div",{ref:s,className:`border border-gray-300 rounded-md px-4 py-2 cursor-pointer ${l}`,onClick:d,children:o||r})});x.displayName="ThirdPartyDatePicker";const g=c.forwardRef(({label:n,error:t,required:r,className:a="",...l},s)=>e.jsxs("div",{className:"w-full",children:[n&&e.jsxs("label",{className:"block text-sm font-medium text-gray-700 mb-1",children:[n," ",r&&e.jsx("span",{className:"text-red-500",children:"*"})]}),e.jsx(x,{ref:s,className:`w-full ${t?"border-red-500":""} ${a}`,...l}),t&&e.jsx("p",{className:"mt-1 text-sm text-red-600",children:t})]}));g.displayName="CustomDatePicker";const i=({variant:n="body",color:t="default",children:r,className:a=""})=>{const l={h1:"text-3xl font-bold",h2:"text-2xl font-bold",h3:"text-xl font-bold",h4:"text-lg font-medium",body:"text-base",caption:"text-sm"},s={default:"text-gray-900",primary:"text-blue-600",secondary:"text-gray-600",error:"text-red-600"},o=`${l[n]} ${s[t]} ${a}`;switch(n){case"h1":return e.jsx("h1",{className:o,children:r});case"h2":return e.jsx("h2",{className:o,children:r});case"h3":return e.jsx("h3",{className:o,children:r});case"h4":return e.jsx("h4",{className:o,children:r});case"caption":return e.jsx("span",{className:o,children:r});default:return e.jsx("p",{className:o,children:r})}},b=()=>e.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",className:"h-5 w-5 text-gray-400",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor",children:e.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"})}),w=()=>e.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",className:"h-5 w-5 text-gray-400",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor",children:e.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"})}),N=()=>{const[n,t]=c.useState(!1),r=()=>{t(!0),setTimeout(()=>t(!1),2e3)};return e.jsxs("div",{className:"space-y-4",children:[e.jsxs("div",{className:"flex flex-wrap gap-2",children:[e.jsx(p,{variant:"primary",children:"Primary"}),e.jsx(p,{variant:"secondary",children:"Secondary"}),e.jsx(p,{variant:"danger",children:"Danger"}),e.jsx(p,{variant:"success",children:"Success"})]}),e.jsxs("div",{className:"flex flex-wrap gap-2",children:[e.jsx(p,{size:"sm",children:"Small"}),e.jsx(p,{size:"md",children:"Medium"}),e.jsx(p,{size:"lg",children:"Large"})]}),e.jsx("div",{children:e.jsx(p,{loading:n,onClick:r,children:n?"Loading...":"Click to Load"})})]})},P=()=>{const[n,t]=c.useState(""),[r,a]=c.useState(""),[l,s]=c.useState(""),o=d=>{const u=d.target.value;t(u),u&&!u.includes("@")?s("Please enter a valid email address"):s("")};return e.jsxs("div",{className:"space-y-4 max-w-md",children:[e.jsx(m,{label:"Email Address",placeholder:"Enter your email",value:n,onChange:o,leftIcon:e.jsx(b,{}),error:l}),e.jsx(m,{label:"Search",placeholder:"Search...",value:r,onChange:d=>a(d.target.value),rightIcon:e.jsx(w,{}),variant:"filled"}),e.jsxs("div",{className:"flex gap-4",children:[e.jsx(m,{variant:"default",placeholder:"Default"}),e.jsx(m,{variant:"filled",placeholder:"Filled"}),e.jsx(m,{variant:"outlined",placeholder:"Outlined"})]})]})},T=()=>{const[n,t]=c.useState(null),[r,a]=c.useState(""),l=s=>{t(s),a(s?"":"Please select a date")};return e.jsxs("div",{className:"space-y-4 max-w-md",children:[e.jsx(g,{label:"Event Date",value:n,onChange:l,error:r,required:!0}),e.jsx("div",{className:"text-sm text-gray-500",children:n?`Selected date: ${n.toLocaleDateString()}`:"No date selected"})]})},C=()=>e.jsxs("div",{className:"space-y-4",children:[e.jsx(i,{variant:"h1",children:"主标题 (H1)"}),e.jsx(i,{variant:"h2",children:"二级标题 (H2)"}),e.jsx(i,{variant:"h3",children:"三级标题 (H3)"}),e.jsx(i,{variant:"h4",children:"四级标题 (H4)"}),e.jsx(i,{variant:"body",children:"这是正文段落。代理组件自动处理样式和语义HTML元素的选择。 Typography组件根据variant属性自动选择合适的HTML标签。"}),e.jsx(i,{variant:"caption",children:"这是说明文字"}),e.jsxs("div",{className:"space-y-2",children:[e.jsx(i,{color:"default",children:"默认颜色文字"}),e.jsx(i,{color:"primary",children:"主要颜色文字"}),e.jsx(i,{color:"secondary",children:"次要颜色文字"}),e.jsx(i,{color:"error",children:"错误颜色文字"})]}),e.jsxs("div",{className:"bg-gray-50 p-4 rounded-lg",children:[e.jsx(i,{variant:"h3",color:"primary",className:"mb-2",children:"组合示例"}),e.jsx(i,{variant:"body",color:"secondary",children:"这个示例展示了如何组合使用不同的variant、color和自定义className。"})]})]}),j=`import React, { useState } from "react";
import Button from "./Button";

// 基础代理示例组件
const BasicProxyExample = () => {
  const [isLoading, setIsLoading] = useState(false);

  const handleClick = () => {
    setIsLoading(true);
    setTimeout(() => setIsLoading(false), 2000);
  };

  return (
    <div className="space-y-4">
      <div className="flex flex-wrap gap-2">
        <Button variant="primary">Primary</Button>
        <Button variant="secondary">Secondary</Button>
        <Button variant="danger">Danger</Button>
        <Button variant="success">Success</Button>
      </div>
      <div className="flex flex-wrap gap-2">
        <Button size="sm">Small</Button>
        <Button size="md">Medium</Button>
        <Button size="lg">Large</Button>
      </div>
      <div>
        <Button loading={isLoading} onClick={handleClick}>
          {isLoading ? "Loading..." : "Click to Load"}
        </Button>
      </div>
    </div>
  );
};

export default BasicProxyExample;`,I=`import React, { ButtonHTMLAttributes, ReactNode, forwardRef } from "react";

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
          <svg
            className="animate-spin -ml-1 mr-3 h-5 w-5 text-white"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
          >
            <circle
              className="opacity-25"
              cx="12"
              cy="12"
              r="10"
              stroke="currentColor"
              strokeWidth="4"
            ></circle>
            <path
              className="opacity-75"
              fill="currentColor"
              d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
            ></path>
          </svg>
        )}
        {children}
      </button>
    );
  }
);

Button.displayName = "Button";

export default Button;
export type { ButtonProps };`,S=`import React, { forwardRef } from "react";

// 第三方日期选择器组件接口
interface DatePickerProps {
  value: Date | null;
  onChange: (date: Date | null) => void;
  placeholder?: string;
  format?: string;
  className?: string;
}

// 模拟第三方日期选择器组件
const ThirdPartyDatePicker = forwardRef<HTMLDivElement, DatePickerProps>(
  (
    {
      value,
      onChange,
      placeholder = "Select date",
      format = "MM/DD/YYYY",
      className = "",
    },
    ref
  ) => {
    // 简单的日期格式化
    const formattedValue = value
      ? value.toLocaleDateString("en-US", {
          year: "numeric",
          month: "2-digit",
          day: "2-digit",
        })
      : "";

    const handleClick = () => {
      // 模拟日期选择，这里简单地设置为当前日期
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

ThirdPartyDatePicker.displayName = "ThirdPartyDatePicker";

// 自定义日期选择器代理组件
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

export default CustomDatePicker;
export { ThirdPartyDatePicker };
export type { DatePickerProps, CustomDatePickerProps };
`,k=`import React from "react";

// SVG图标组件
const MailIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    className="h-5 w-5 text-gray-400"
    fill="none"
    viewBox="0 0 24 24"
    stroke="currentColor"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
    />
  </svg>
);

const SearchIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    className="h-5 w-5 text-gray-400"
    fill="none"
    viewBox="0 0 24 24"
    stroke="currentColor"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
    />
  </svg>
);

export { MailIcon, SearchIcon };`,R=`import React, { ChangeEvent, useState } from "react";
import Input from "./Input";
import { MailIcon, SearchIcon } from "./Icons";

// 输入框代理示例组件
const InputProxyExample = () => {
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
      <Input
        label="Email Address"
        placeholder="Enter your email"
        value={email}
        onChange={handleEmailChange}
        leftIcon={<MailIcon />}
        error={error}
      />
      <Input
        label="Search"
        placeholder="Search..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        rightIcon={<SearchIcon />}
        variant="filled"
      />
      <div className="flex gap-4">
        <Input variant="default" placeholder="Default" />
        <Input variant="filled" placeholder="Filled" />
        <Input variant="outlined" placeholder="Outlined" />
      </div>
    </div>
  );
};

export default InputProxyExample;`,D=`import React, { InputHTMLAttributes, ReactNode, forwardRef } from "react";

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
      default:
        "border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500",
      filled: "bg-gray-100 border-none rounded-md focus:ring-blue-500",
      outlined:
        "bg-transparent border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500",
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

export default Input;
export type { InputProps };`,L=`import React, { useState } from "react";

import CustomDatePicker from "./DatePicker";

// 第三方代理示例组件
const ThirdPartyProxyExample = () => {
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
      <CustomDatePicker
        label="Event Date"
        value={date}
        onChange={handleDateChange}
        error={error}
        required
      />
      <div className="text-sm text-gray-500">
        {date
          ? \`Selected date: \${date.toLocaleDateString()}\`
          : "No date selected"}
      </div>
    </div>
  );
};

export default ThirdPartyProxyExample;
`,E=`import React from "react";
import Typography from "./Typography";

// 样式代理示例组件
const TypographyProxyExample = () => {
  return (
    <div className="space-y-4">
      <Typography variant="h1">主标题 (H1)</Typography>
      <Typography variant="h2">二级标题 (H2)</Typography>
      <Typography variant="h3">三级标题 (H3)</Typography>
      <Typography variant="h4">四级标题 (H4)</Typography>
      <Typography variant="body">
        这是正文段落。代理组件自动处理样式和语义HTML元素的选择。
        Typography组件根据variant属性自动选择合适的HTML标签。
      </Typography>
      <Typography variant="caption">这是说明文字</Typography>

      <div className="space-y-2">
        <Typography color="default">默认颜色文字</Typography>
        <Typography color="primary">主要颜色文字</Typography>
        <Typography color="secondary">次要颜色文字</Typography>
        <Typography color="error">错误颜色文字</Typography>
      </div>

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

export default TypographyProxyExample;`,M=`import React, { ReactNode } from "react";

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

  // 根据variant选择合适的HTML元素
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

export default Typography;
export type { TypographyProps };`,$=()=>{const n={title:"代理组件模式",description:"代理组件模式是一种封装和扩展现有组件的设计模式，通过创建一个新的组件来包装原始组件，从而添加额外的功能、样式或行为，同时保持原始组件的API和功能完整性。",overview:[{title:"核心概念",items:["代理组件通过包装原始组件实现功能扩展和样式统一","Ref转发确保ref能正确传递到底层组件","Props透传保持原始组件的API完整性","类型扩展支持TypeScript接口继承和类型安全"]},{title:"主要优势",items:["功能扩展：为原始组件添加加载、错误处理、验证等功能","样式统一：应用一致的样式和主题，确保UI一致性","API简化：为复杂组件提供更简单的接口","第三方封装：将第三方组件库封装为项目规范组件"]},{title:"适用场景",items:["构建设计系统和组件库时统一样式和交互规范","封装第三方组件库以降低依赖风险","为基础组件添加通用功能","实现主题系统和国际化支持"]},{title:"注意事项",items:["避免过度封装导致灵活性降低","确保forwardRef正确传递ref","通过...props透传所有原始属性","保持代理组件轻量化，只添加必要功能"]}],examples:[{title:"基础按钮代理",component:e.jsx(N,{}),description:"扩展原生HTML按钮，添加变体、尺寸和加载状态等特性。",observationPoints:["继承原生button所有属性和事件","variant属性切换不同样式","size属性控制尺寸","loading属性添加加载动画并禁用按钮","所有原生事件都能正常工作"],keyPoints:["forwardRef确保ref传递","...props透传所有原生属性","TypeScript扩展ButtonHTMLAttributes","条件渲染加载动画","Tailwind CSS实现样式变体"],commonTraps:["忘记forwardRef导致ref无法传递","不透传原生属性导致功能缺失","样式硬编码缺乏定制能力","JSX中直接创建对象导致重渲染"],solutions:["使用forwardRef包装组件","...props透传所有原生属性","配置化样式系统支持主题定制","样式对象定义在组件外部或用useMemo缓存"],importantTips:["代理组件应保持原始组件所有功能和API","TypeScript确保类型安全","避免不必要的重渲染","添加displayName便于调试"],preCode:[{title:"Button组件实现",code:I}],codeExample:{title:"基础按钮代理示例",code:j}},{title:"输入框代理组件",component:e.jsx(P,{}),description:"扩展原生HTML输入框，添加标签、错误提示、图标和样式变体等特性。",observationPoints:["继承原生input所有属性和事件","支持标签和错误提示","可在输入框左右添加图标","多种样式变体（默认、填充、轮廓）","支持表单验证和错误状态"],keyPoints:["forwardRef确保ref传递","...props透传所有原生属性","TypeScript扩展InputHTMLAttributes","相对定位实现图标布局","条件渲染标签和错误信息"],commonTraps:["图标定位不当导致重叠","错误状态样式覆盖不完整","忘记处理受控组件的value和onChange","标签和输入框关联性问题"],solutions:["绝对定位和padding确保图标不遮挡内容","条件样式类确保错误状态正确显示","正确透传value、onChange等属性","label元素和htmlFor建立关联"],importantTips:["应支持所有原生input功能","图标用pointer-events-none避免干扰","错误提示应有良好可访问性","支持样式变体以适应设计需求"],preCode:[{title:"Input组件实现",code:D},{title:"Icons组件实现",code:k}],codeExample:{title:"输入框代理示例",code:R}},{title:"第三方组件代理",component:e.jsx(T,{}),description:"封装第三方日期选择器，添加标签、错误提示和必填标记等功能。",observationPoints:["保留第三方组件所有功能","添加标签和错误提示","支持必填标记","统一样式和交互体验","简化第三方组件使用"],keyPoints:["TypeScript扩展第三方Props类型","forwardRef确保ref传递","...props透传所有原始属性","添加项目特定UI元素和样式","保持一致性"],commonTraps:["第三方API变更导致兼容性问题","样式冲突和覆盖问题","事件处理器正确传递","类型定义不完整"],solutions:["接口扩展而非直接修改类型","CSS模块或样式隔离避免冲突","确保事件处理器正确透传","为第三方组件创建完整类型定义"],importantTips:["应隐藏第三方组件复杂性","保持与项目其他组件一致性","考虑版本升级和兼容性","提供良好错误处理和反馈"],preCode:[{title:"DatePicker组件实现",code:S}],codeExample:{title:"第三方组件代理示例",code:L}},{title:"样式代理组件",component:e.jsx(C,{}),description:"根据变体和颜色属性渲染不同HTML元素和样式。",observationPoints:["根据variant渲染不同HTML元素（h1, h2, p等）","color属性应用不同文本颜色","保持语义化HTML结构","提供一致排版系统","支持自定义className扩展样式"],keyPoints:["条件渲染选择HTML元素","对象映射管理样式类名","合理默认值","支持样式自定义和扩展","确保语义化和可访问性"],commonTraps:["样式变体定义不一致","颜色系统与设计规范不匹配","多态组件类型定义复杂","样式优先级和覆盖问题"],solutions:["统一设计系统和样式规范","CSS变量或主题系统管理颜色","泛型和条件类型处理多态组件","CSS-in-JS或CSS模块避免冲突"],importantTips:["Typography组件应覆盖所有常用文本样式","保持样式变体语义化和一致性","考虑响应式和可访问性","合理默认值和样式回退"],preCode:[{title:"Typography组件实现",code:M}],codeExample:{title:"样式代理组件示例",code:E}}],tutorial:{concepts:["代理模式 - 通过包装现有对象来控制对它的访问","组件组合 - React推荐的组件复用方式","Ref转发 - 使用forwardRef将ref传递给子组件","Props透传 - 使用解构和展开运算符传递属性","TypeScript类型扩展 - 使用接口继承扩展现有类型","条件渲染 - 根据props条件渲染不同的UI元素","样式组合 - 使用模板字符串组合多个样式类"],steps:["确定需要代理的组件（原生HTML元素或第三方组件）","创建新的接口，扩展原始组件的Props类型","使用forwardRef创建代理组件，确保ref能够正确传递","在代理组件中解构props，提取自定义属性","使用剩余参数（...rest）收集原始组件的所有属性","添加额外的功能、样式或行为","将原始属性透传给底层组件","为组件添加displayName以便调试","编写完整的类型定义和文档"],tips:["保持代理组件的轻量化，避免过度封装","确保透传所有必要的原始属性，特别是事件处理器","使用TypeScript的泛型和条件类型提供更精确的类型支持","考虑性能影响，避免不必要的重渲染","为复杂的代理组件添加单元测试","使用React.memo优化代理组件的渲染性能","考虑使用Context API为代理组件提供全局配置","使用组合而非继承来扩展组件功能","为代理组件提供完整的文档和使用示例"]},interview:{questions:[{question:"什么是代理组件模式？它有什么优势？",answer:"代理组件模式是一种通过创建新组件来包装现有组件（原生HTML元素或第三方组件）的设计模式，目的是扩展功能、统一样式或简化API。主要优势包括：1）保持原始组件的API完整性；2）统一UI风格和交互体验；3）添加额外功能如加载状态、错误处理；4）简化复杂组件的使用；5）封装第三方库，降低依赖风险；6）提供更好的TypeScript类型支持；7）改善组件复用性和可维护性。"},{question:"代理组件模式的实现步骤是什么？",answer:"实现代理组件的关键步骤：1）创建新接口，扩展原始组件的Props类型；2）使用forwardRef创建组件，确保ref正确传递；3）解构props，提取自定义属性；4）使用...rest收集原始属性；5）添加额外功能和样式；6）将原始属性透传给底层组件；7）添加displayName便于调试；8）编写完整的类型定义和文档。"},{question:"如何确保代理组件正确传递ref？",answer:"确保代理组件正确传递ref需要使用React.forwardRef API。步骤如下：1）导入forwardRef；2）使用forwardRef创建组件，它接收props和ref两个参数；3）将ref传递给底层DOM元素或组件；4）正确设置TypeScript类型，指定ref的类型（如HTMLButtonElement）。示例：const Button = forwardRef<HTMLButtonElement, ButtonProps>((props, ref) => { return <button ref={ref} {...props} />; });"},{question:"代理组件与高阶组件(HOC)有什么区别？",answer:"主要区别：1）实现方式：代理组件是包装器组件，HOC是函数；2）使用方式：代理组件直接使用，HOC需要包装；3）类型支持：代理组件类型更直观，HOC类型推导复杂；4）调试体验：代理组件更容易调试；5）组合方式：代理组件更灵活，HOC容易形成包装地狱；6）现代React更推荐使用代理组件模式。"},{question:"在什么场景下应该使用代理组件？",answer:"适用场景：1）构建设计系统和组件库；2）封装第三方组件库；3）添加通用功能如加载、错误处理；4）统一样式和交互规范；5）简化复杂组件的使用；6）实现主题和国际化支持；7）添加业务逻辑和验证。不适用于简单的样式修改或一次性使用的场景。"}],keyPoints:["包装器模式 - 通过包装现有组件扩展功能","forwardRef - 确保ref能够正确传递到底层组件","props透传 - 保持原始组件的完整API","类型继承 - 使用TypeScript确保类型安全","性能优化 - 避免不必要的重渲染和性能损失","设计系统 - 构建统一的组件库和样式规范"]},bestPractices:{dos:["保持代理组件的轻量化，只添加必要的功能","使用TypeScript提供完整的类型支持和智能提示","建立清晰的命名约定，区分代理组件和原始组件","提供完整的文档和使用示例","考虑性能影响，避免不必要的重渲染","支持主题和样式定制，提高组件的灵活性","使用forwardRef确保ref能够正确传递到底层组件","通过...props透传原始组件的所有属性，保持API的完整性","合理使用TypeScript泛型和交叉类型，提供良好的类型支持"],donts:["过度封装导致失去原始组件的灵活性","忘记使用forwardRef导致ref无法传递","不透传原始属性导致功能缺失","样式硬编码缺乏定制能力","缺乏错误边界和异常处理","性能优化不当导致渲染问题","在JSX中直接创建对象或数组导致不必要的重渲染","忘记处理受控组件的value和onChange属性"],patterns:["接口设计模式：继承原始组件的所有属性，添加必要的扩展功能","Ref转发模式：使用forwardRef确保ref能够正确传递到底层组件","Props透传模式：通过解构和展开操作符透传原始组件的属性","条件渲染模式：根据props条件渲染不同的UI元素和状态","样式系统模式：通过配置化的样式系统实现统一的视觉规范","错误处理模式：集成统一的错误处理和用户反馈机制"]}};return e.jsx(v,{...n})};export{$ as default};
