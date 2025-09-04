import{r as l,j as e}from"./index-H7t66yxh.js";import{C as v}from"./ComponentTemplate-bNJaV0ol.js";const y=()=>{const[n,i]=l.useState({username:"",email:"",password:"",confirmPassword:"",agreeTerms:!1}),[r,o]=l.useState({}),[u,f]=l.useState(!1),b=(t,a)=>{const s={...r};switch(t){case"username":a.trim()?a.length<3?s.username="用户名至少3个字符":delete s.username:s.username="用户名不能为空";break;case"email":const m=/^[^\s@]+@[^\s@]+\.[^\s@]+$/;a.trim()?m.test(a)?delete s.email:s.email="邮箱格式不正确":s.email="邮箱不能为空";break;case"password":a?a.length<6?s.password="密码至少6个字符":delete s.password:s.password="密码不能为空";break;case"confirmPassword":a!==n.password?s.confirmPassword="两次密码不一致":delete s.confirmPassword;break}o(s)},c=(t,a)=>{i(s=>({...s,[t]:a})),b(t,a)},d=t=>{t.preventDefault(),Object.keys(n).forEach(a=>{b(a,n[a])}),Object.keys(r).length===0&&n.agreeTerms&&(f(!0),console.log("受控表单提交:",n))};return u?e.jsxs("div",{className:"text-center py-8",children:[e.jsx("div",{className:"text-green-600 text-lg font-semibold mb-2",children:"注册成功！"}),e.jsx("button",{onClick:()=>{f(!1),i({username:"",email:"",password:"",confirmPassword:"",agreeTerms:!1}),o({})},className:"px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600",children:"重新注册"})]}):e.jsxs("div",{children:[e.jsx("h3",{className:"text-lg font-semibold mb-4",children:"受控组件 - 用户注册表单"}),e.jsxs("form",{onSubmit:d,className:"space-y-4",children:[e.jsxs("div",{children:[e.jsx("label",{className:"block text-sm font-medium text-gray-700 mb-1",children:"用户名 *"}),e.jsx("input",{type:"text",value:n.username,onChange:t=>c("username",t.target.value),className:`w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 ${r.username?"border-red-500":"border-gray-300"}`,placeholder:"请输入用户名"}),r.username&&e.jsx("p",{className:"text-red-500 text-sm mt-1",children:r.username})]}),e.jsxs("div",{children:[e.jsx("label",{className:"block text-sm font-medium text-gray-700 mb-1",children:"邮箱 *"}),e.jsx("input",{type:"email",value:n.email,onChange:t=>c("email",t.target.value),className:`w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 ${r.email?"border-red-500":"border-gray-300"}`,placeholder:"请输入邮箱"}),r.email&&e.jsx("p",{className:"text-red-500 text-sm mt-1",children:r.email})]}),e.jsxs("div",{children:[e.jsx("label",{className:"block text-sm font-medium text-gray-700 mb-1",children:"密码 *"}),e.jsx("input",{type:"password",value:n.password,onChange:t=>c("password",t.target.value),className:`w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 ${r.password?"border-red-500":"border-gray-300"}`,placeholder:"请输入密码"}),r.password&&e.jsx("p",{className:"text-red-500 text-sm mt-1",children:r.password})]}),e.jsxs("div",{children:[e.jsx("label",{className:"block text-sm font-medium text-gray-700 mb-1",children:"确认密码 *"}),e.jsx("input",{type:"password",value:n.confirmPassword,onChange:t=>c("confirmPassword",t.target.value),className:`w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 ${r.confirmPassword?"border-red-500":"border-gray-300"}`,placeholder:"请再次输入密码"}),r.confirmPassword&&e.jsx("p",{className:"text-red-500 text-sm mt-1",children:r.confirmPassword})]}),e.jsxs("div",{className:"flex items-center",children:[e.jsx("input",{type:"checkbox",id:"agreeTerms",checked:n.agreeTerms,onChange:t=>c("agreeTerms",t.target.checked),className:"mr-2"}),e.jsx("label",{htmlFor:"agreeTerms",className:"text-sm text-gray-700",children:"我同意服务条款和隐私政策"})]}),e.jsx("button",{type:"submit",disabled:Object.keys(r).length>0||!n.agreeTerms,className:"w-full px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 disabled:bg-gray-300 disabled:cursor-not-allowed",children:"注册"})]}),e.jsxs("div",{className:"mt-4 p-3 bg-gray-100 rounded text-sm",children:[e.jsx("strong",{children:"当前表单状态："}),e.jsx("pre",{className:"mt-2 text-xs",children:JSON.stringify(n,null,2)})]})]})},N=`import React, { useState } from "react";

interface FormData {
  username: string;
  email: string;
  password: string;
  confirmPassword: string;
  agreeTerms: boolean;
}

const ControlledFormExample: React.FC = () => {
  const [formData, setFormData] = useState<FormData>({
    username: "",
    email: "",
    password: "",
    confirmPassword: "",
    agreeTerms: false,
  });

  const [errors, setErrors] = useState<Record<string, string>>({});
  const [submitted, setSubmitted] = useState(false);

  // 实时验证
  const validateField = (name: string, value: any) => {
    const newErrors = { ...errors };

    switch (name) {
      case "username":
        if (!value.trim()) {
          newErrors.username = "用户名不能为空";
        } else if (value.length < 3) {
          newErrors.username = "用户名至少3个字符";
        } else {
          delete newErrors.username;
        }
        break;

      case "email":
        const emailRegex = /^[^\\s@]+@[^\\s@]+\\.[^\\s@]+$/;
        if (!value.trim()) {
          newErrors.email = "邮箱不能为空";
        } else if (!emailRegex.test(value)) {
          newErrors.email = "邮箱格式不正确";
        } else {
          delete newErrors.email;
        }
        break;

      case "password":
        if (!value) {
          newErrors.password = "密码不能为空";
        } else if (value.length < 6) {
          newErrors.password = "密码至少6个字符";
        } else {
          delete newErrors.password;
        }
        break;

      case "confirmPassword":
        if (value !== formData.password) {
          newErrors.confirmPassword = "两次密码不一致";
        } else {
          delete newErrors.confirmPassword;
        }
        break;
    }

    setErrors(newErrors);
  };

  const handleInputChange = (name: string, value: any) => {
    setFormData((prev) => ({ ...prev, [name]: value }));
    validateField(name, value);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // 验证所有字段
    Object.keys(formData).forEach((key) => {
      validateField(key, formData[key as keyof typeof formData]);
    });

    if (Object.keys(errors).length === 0 && formData.agreeTerms) {
      setSubmitted(true);
      console.log("受控表单提交:", formData);
    }
  };

  if (submitted) {
    return (
      <div className="text-center py-8">
        <div className="text-green-600 text-lg font-semibold mb-2">
          注册成功！
        </div>
        <button
          onClick={() => {
            setSubmitted(false);
            setFormData({
              username: "",
              email: "",
              password: "",
              confirmPassword: "",
              agreeTerms: false,
            });
            setErrors({});
          }}
          className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
        >
          重新注册
        </button>
      </div>
    );
  }

  return (
    <div>
      <h3 className="text-lg font-semibold mb-4">受控组件 - 用户注册表单</h3>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            用户名 *
          </label>
          <input
            type="text"
            value={formData.username}
            onChange={(e) => handleInputChange("username", e.target.value)}
            className={\`w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 \${
              errors.username ? "border-red-500" : "border-gray-300"
            }\`}
            placeholder="请输入用户名"
          />
          {errors.username && (
            <p className="text-red-500 text-sm mt-1">{errors.username}</p>
          )}
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            邮箱 *
          </label>
          <input
            type="email"
            value={formData.email}
            onChange={(e) => handleInputChange("email", e.target.value)}
            className={\`w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 \${
              errors.email ? "border-red-500" : "border-gray-300"
            }\`}
            placeholder="请输入邮箱"
          />
          {errors.email && (
            <p className="text-red-500 text-sm mt-1">{errors.email}</p>
          )}
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            密码 *
          </label>
          <input
            type="password"
            value={formData.password}
            onChange={(e) => handleInputChange("password", e.target.value)}
            className={\`w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 \${
              errors.password ? "border-red-500" : "border-gray-300"
            }\`}
            placeholder="请输入密码"
          />
          {errors.password && (
            <p className="text-red-500 text-sm mt-1">{errors.password}</p>
          )}
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            确认密码 *
          </label>
          <input
            type="password"
            value={formData.confirmPassword}
            onChange={(e) =>
              handleInputChange("confirmPassword", e.target.value)
            }
            className={\`w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 \${
              errors.confirmPassword ? "border-red-500" : "border-gray-300"
            }\`}
            placeholder="请再次输入密码"
          />
          {errors.confirmPassword && (
            <p className="text-red-500 text-sm mt-1">
              {errors.confirmPassword}
            </p>
          )}
        </div>

        <div className="flex items-center">
          <input
            type="checkbox"
            id="agreeTerms"
            checked={formData.agreeTerms}
            onChange={(e) => handleInputChange("agreeTerms", e.target.checked)}
            className="mr-2"
          />
          <label htmlFor="agreeTerms" className="text-sm text-gray-700">
            我同意服务条款和隐私政策
          </label>
        </div>

        <button
          type="submit"
          disabled={Object.keys(errors).length > 0 || !formData.agreeTerms}
          className="w-full px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 disabled:bg-gray-300 disabled:cursor-not-allowed"
        >
          注册
        </button>
      </form>

      <div className="mt-4 p-3 bg-gray-100 rounded text-sm">
        <strong>当前表单状态：</strong>
        <pre className="mt-2 text-xs">{JSON.stringify(formData, null, 2)}</pre>
      </div>
    </div>
  );
};

export default ControlledFormExample;`,w=()=>{const n=l.useRef(null),[i,r]=l.useState([]),[o,u]=l.useState(""),f=d=>{const t=Array.from(d.target.files||[]);r(t),u("")},b=async()=>{if(i.length===0){u("请选择文件");return}u("上传中...");try{await new Promise(d=>setTimeout(d,2e3)),u("上传成功！")}catch{u("上传失败")}},c=()=>{r([]),u(""),n.current&&(n.current.value="")};return e.jsxs("div",{children:[e.jsx("h3",{className:"text-lg font-semibold mb-4",children:"文件上传组件"}),e.jsxs("div",{className:"space-y-4",children:[e.jsxs("div",{children:[e.jsx("label",{className:"block text-sm font-medium text-gray-700 mb-1",children:"选择文件 (非受控)"}),e.jsx("input",{ref:n,type:"file",multiple:!0,onChange:f,className:"w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500",accept:".jpg,.jpeg,.png,.pdf,.doc,.docx"})]}),i.length>0&&e.jsxs("div",{className:"bg-gray-50 p-4 rounded-lg",children:[e.jsx("h4",{className:"font-medium mb-2",children:"已选择的文件："}),e.jsx("ul",{className:"space-y-1",children:i.map((d,t)=>e.jsxs("li",{className:"text-sm text-gray-600",children:[d.name," (",(d.size/1024).toFixed(1)," KB)"]},t))})]}),o&&e.jsx("div",{className:`p-3 rounded ${o.includes("成功")?"bg-green-100 text-green-700":o.includes("失败")?"bg-red-100 text-red-700":"bg-blue-100 text-blue-700"}`,children:o}),e.jsxs("div",{className:"flex space-x-2",children:[e.jsx("button",{onClick:b,disabled:i.length===0||o==="上传中...",className:"px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 disabled:bg-gray-300 disabled:cursor-not-allowed",children:o==="上传中..."?"上传中...":"上传文件"}),e.jsx("button",{onClick:c,className:"px-4 py-2 bg-gray-500 text-white rounded hover:bg-gray-600",children:"清除选择"})]})]})]})},j=`import React, { useRef, useState } from "react";\r
\r
const FileUploadExample: React.FC = () => {\r
  const fileInputRef = useRef<HTMLInputElement>(null);\r
  const [selectedFiles, setSelectedFiles] = useState<File[]>([]);\r
  const [uploadStatus, setUploadStatus] = useState<string>("");\r
\r
  const handleFileSelect = (e: React.ChangeEvent<HTMLInputElement>) => {\r
    const files = Array.from(e.target.files || []);\r
    setSelectedFiles(files);\r
    setUploadStatus("");\r
  };\r
\r
  const handleUpload = async () => {\r
    if (selectedFiles.length === 0) {\r
      setUploadStatus("请选择文件");\r
      return;\r
    }\r
\r
    setUploadStatus("上传中...");\r
\r
    // 模拟文件上传\r
    try {\r
      await new Promise((resolve) => setTimeout(resolve, 2000));\r
      setUploadStatus("上传成功！");\r
    } catch (error) {\r
      setUploadStatus("上传失败");\r
    }\r
  };\r
\r
  const handleClear = () => {\r
    setSelectedFiles([]);\r
    setUploadStatus("");\r
    if (fileInputRef.current) {\r
      fileInputRef.current.value = "";\r
    }\r
  };\r
\r
  return (\r
    <div>\r
      <h3 className="text-lg font-semibold mb-4">文件上传组件</h3>\r
\r
      <div className="space-y-4">\r
        <div>\r
          <label className="block text-sm font-medium text-gray-700 mb-1">\r
            选择文件 (非受控)\r
          </label>\r
          <input\r
            ref={fileInputRef}\r
            type="file"\r
            multiple\r
            onChange={handleFileSelect}\r
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"\r
            accept=".jpg,.jpeg,.png,.pdf,.doc,.docx"\r
          />\r
        </div>\r
\r
        {selectedFiles.length > 0 && (\r
          <div className="bg-gray-50 p-4 rounded-lg">\r
            <h4 className="font-medium mb-2">已选择的文件：</h4>\r
            <ul className="space-y-1">\r
              {selectedFiles.map((file, index) => (\r
                <li key={index} className="text-sm text-gray-600">\r
                  {file.name} ({(file.size / 1024).toFixed(1)} KB)\r
                </li>\r
              ))}\r
            </ul>\r
          </div>\r
        )}\r
\r
        {uploadStatus && (\r
          <div\r
            className={\`p-3 rounded \${\r
              uploadStatus.includes("成功")\r
                ? "bg-green-100 text-green-700"\r
                : uploadStatus.includes("失败")\r
                ? "bg-red-100 text-red-700"\r
                : "bg-blue-100 text-blue-700"\r
            }\`}\r
          >\r
            {uploadStatus}\r
          </div>\r
        )}\r
\r
        <div className="flex space-x-2">\r
          <button\r
            onClick={handleUpload}\r
            disabled={\r
              selectedFiles.length === 0 || uploadStatus === "上传中..."\r
            }\r
            className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 disabled:bg-gray-300 disabled:cursor-not-allowed"\r
          >\r
            {uploadStatus === "上传中..." ? "上传中..." : "上传文件"}\r
          </button>\r
          <button\r
            onClick={handleClear}\r
            className="px-4 py-2 bg-gray-500 text-white rounded hover:bg-gray-600"\r
          >\r
            清除选择\r
          </button>\r
        </div>\r
      </div>\r
    </div>\r
  );\r
};\r
\r
export default FileUploadExample;`,R=()=>{const[n,i]=l.useState(""),[r,o]=l.useState(""),u=l.useRef(null),f=l.useRef(null),b=l.useRef(null),[c,d]=l.useState(!1),t=m=>{const p=/^[^\s@]+@[^\s@]+\.[^\s@]+$/;m.trim()?p.test(m)?o(""):o("邮箱格式不正确"):o("邮箱不能为空")},a=m=>{const p=m.target.value;i(p),t(p)},s=m=>{var g,x,h;if(m.preventDefault(),r||!n.trim())return;const p={name:(g=u.current)==null?void 0:g.value,email:n,phone:(x=f.current)==null?void 0:x.value,comments:(h=b.current)==null?void 0:h.value};console.log("混合表单提交:",p),d(!0)};return c?e.jsxs("div",{className:"text-center py-8",children:[e.jsx("div",{className:"text-green-600 text-lg font-semibold mb-2",children:"提交成功！"}),e.jsx("button",{onClick:()=>{d(!1),i(""),o("")},className:"px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600",children:"重新填写"})]}):e.jsxs("div",{children:[e.jsx("h3",{className:"text-lg font-semibold mb-4",children:"混合使用 - 客户反馈表单"}),e.jsxs("form",{onSubmit:s,className:"space-y-4",children:[e.jsxs("div",{children:[e.jsx("label",{className:"block text-sm font-medium text-gray-700 mb-1",children:"姓名 (非受控)"}),e.jsx("input",{ref:u,type:"text",defaultValue:"",className:"w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500",placeholder:"请输入姓名",required:!0})]}),e.jsxs("div",{children:[e.jsx("label",{className:"block text-sm font-medium text-gray-700 mb-1",children:"邮箱 (受控 - 实时验证) *"}),e.jsx("input",{type:"email",value:n,onChange:a,className:`w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 ${r?"border-red-500":"border-gray-300"}`,placeholder:"请输入邮箱"}),r&&e.jsx("p",{className:"text-red-500 text-sm mt-1",children:r})]}),e.jsxs("div",{children:[e.jsx("label",{className:"block text-sm font-medium text-gray-700 mb-1",children:"电话 (非受控)"}),e.jsx("input",{ref:f,type:"tel",defaultValue:"",className:"w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500",placeholder:"请输入电话号码"})]}),e.jsxs("div",{children:[e.jsx("label",{className:"block text-sm font-medium text-gray-700 mb-1",children:"意见建议 (非受控)"}),e.jsx("textarea",{ref:b,rows:4,defaultValue:"",className:"w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500",placeholder:"请输入您的意见建议"})]}),e.jsx("button",{type:"submit",disabled:!!r||!n.trim(),className:"w-full px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 disabled:bg-gray-300 disabled:cursor-not-allowed",children:"提交反馈"})]}),e.jsxs("div",{className:"mt-4 p-3 bg-gray-100 rounded text-sm",children:[e.jsx("strong",{children:"受控字段状态："}),e.jsxs("div",{className:"mt-1",children:["邮箱: ",n]}),r&&e.jsxs("div",{className:"text-red-500",children:["错误: ",r]})]})]})},E=`import React, { useRef, useState } from "react";\r
\r
const HybridFormExample: React.FC = () => {\r
  // 受控字段 - 需要实时验证\r
  const [email, setEmail] = useState("");\r
  const [emailError, setEmailError] = useState("");\r
\r
  // 非受控字段 - 简单输入\r
  const nameRef = useRef<HTMLInputElement>(null);\r
  const phoneRef = useRef<HTMLInputElement>(null);\r
  const commentsRef = useRef<HTMLTextAreaElement>(null);\r
\r
  const [submitted, setSubmitted] = useState(false);\r
\r
  // 邮箱实时验证\r
  const validateEmail = (value: string) => {\r
    const emailRegex = /^[^\\s@]+@[^\\s@]+\\.[^\\s@]+$/;\r
    if (!value.trim()) {\r
      setEmailError("邮箱不能为空");\r
    } else if (!emailRegex.test(value)) {\r
      setEmailError("邮箱格式不正确");\r
    } else {\r
      setEmailError("");\r
    }\r
  };\r
\r
  const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {\r
    const value = e.target.value;\r
    setEmail(value);\r
    validateEmail(value);\r
  };\r
\r
  const handleSubmit = (e: React.FormEvent) => {\r
    e.preventDefault();\r
\r
    if (emailError || !email.trim()) {\r
      return;\r
    }\r
\r
    const formData = {\r
      name: nameRef.current?.value,\r
      email: email,\r
      phone: phoneRef.current?.value,\r
      comments: commentsRef.current?.value,\r
    };\r
\r
    console.log("混合表单提交:", formData);\r
    setSubmitted(true);\r
  };\r
\r
  if (submitted) {\r
    return (\r
      <div className="text-center py-8">\r
        <div className="text-green-600 text-lg font-semibold mb-2">\r
          提交成功！\r
        </div>\r
        <button\r
          onClick={() => {\r
            setSubmitted(false);\r
            setEmail("");\r
            setEmailError("");\r
          }}\r
          className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"\r
        >\r
          重新填写\r
        </button>\r
      </div>\r
    );\r
  }\r
\r
  return (\r
    <div>\r
      <h3 className="text-lg font-semibold mb-4">混合使用 - 客户反馈表单</h3>\r
      <form onSubmit={handleSubmit} className="space-y-4">\r
        {/* 非受控字段 */}\r
        <div>\r
          <label className="block text-sm font-medium text-gray-700 mb-1">\r
            姓名 (非受控)\r
          </label>\r
          <input\r
            ref={nameRef}\r
            type="text"\r
            defaultValue=""\r
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"\r
            placeholder="请输入姓名"\r
            required\r
          />\r
        </div>\r
\r
        {/* 受控字段 - 需要实时验证 */}\r
        <div>\r
          <label className="block text-sm font-medium text-gray-700 mb-1">\r
            邮箱 (受控 - 实时验证) *\r
          </label>\r
          <input\r
            type="email"\r
            value={email}\r
            onChange={handleEmailChange}\r
            className={\`w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 \${\r
              emailError ? "border-red-500" : "border-gray-300"\r
            }\`}\r
            placeholder="请输入邮箱"\r
          />\r
          {emailError && (\r
            <p className="text-red-500 text-sm mt-1">{emailError}</p>\r
          )}\r
        </div>\r
\r
        {/* 非受控字段 */}\r
        <div>\r
          <label className="block text-sm font-medium text-gray-700 mb-1">\r
            电话 (非受控)\r
          </label>\r
          <input\r
            ref={phoneRef}\r
            type="tel"\r
            defaultValue=""\r
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"\r
            placeholder="请输入电话号码"\r
          />\r
        </div>\r
\r
        {/* 非受控字段 */}\r
        <div>\r
          <label className="block text-sm font-medium text-gray-700 mb-1">\r
            意见建议 (非受控)\r
          </label>\r
          <textarea\r
            ref={commentsRef}\r
            rows={4}\r
            defaultValue=""\r
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"\r
            placeholder="请输入您的意见建议"\r
          />\r
        </div>\r
\r
        <button\r
          type="submit"\r
          disabled={!!emailError || !email.trim()}\r
          className="w-full px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 disabled:bg-gray-300 disabled:cursor-not-allowed"\r
        >\r
          提交反馈\r
        </button>\r
      </form>\r
\r
      <div className="mt-4 p-3 bg-gray-100 rounded text-sm">\r
        <strong>受控字段状态：</strong>\r
        <div className="mt-1">邮箱: {email}</div>\r
        {emailError && <div className="text-red-500">错误: {emailError}</div>}\r
      </div>\r
    </div>\r
  );\r
};\r
\r
export default HybridFormExample;`,S=()=>{const n=l.useRef(null),i=l.useRef(null),r=l.useRef(null),o=l.useRef(null),[u,f]=l.useState(!1),[b,c]=l.useState(null),d=a=>{if(a.preventDefault(),n.current){const s=new FormData(n.current),m={username:s.get("username"),email:s.get("email"),message:s.get("message")};c(m),f(!0),console.log("非受控表单提交:",m)}},t=()=>{f(!1),c(null),n.current&&n.current.reset()};return u?e.jsxs("div",{className:"text-center py-8",children:[e.jsx("div",{className:"text-green-600 text-lg font-semibold mb-2",children:"提交成功！"}),e.jsxs("div",{className:"bg-gray-100 p-4 rounded mb-4 text-left",children:[e.jsx("strong",{children:"提交的数据："}),e.jsx("pre",{className:"mt-2 text-sm",children:JSON.stringify(b,null,2)})]}),e.jsx("button",{onClick:t,className:"px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600",children:"重新填写"})]}):e.jsxs("div",{children:[e.jsx("h3",{className:"text-lg font-semibold mb-4",children:"非受控组件 - 联系表单"}),e.jsxs("form",{ref:n,onSubmit:d,className:"space-y-4",children:[e.jsxs("div",{children:[e.jsx("label",{className:"block text-sm font-medium text-gray-700 mb-1",children:"用户名"}),e.jsx("input",{ref:i,type:"text",name:"username",defaultValue:"",className:"w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500",placeholder:"请输入用户名",required:!0})]}),e.jsxs("div",{children:[e.jsx("label",{className:"block text-sm font-medium text-gray-700 mb-1",children:"邮箱"}),e.jsx("input",{ref:r,type:"email",name:"email",defaultValue:"",className:"w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500",placeholder:"请输入邮箱",required:!0})]}),e.jsxs("div",{children:[e.jsx("label",{className:"block text-sm font-medium text-gray-700 mb-1",children:"消息"}),e.jsx("textarea",{ref:o,name:"message",rows:4,defaultValue:"",className:"w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500",placeholder:"请输入消息内容",required:!0})]}),e.jsxs("div",{className:"flex space-x-2",children:[e.jsx("button",{type:"submit",className:"px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600",children:"提交"}),e.jsx("button",{type:"button",onClick:()=>{n.current&&n.current.reset()},className:"px-4 py-2 bg-gray-500 text-white rounded hover:bg-gray-600",children:"重置"}),e.jsx("button",{type:"button",onClick:()=>{var s,m,p;const a={username:(s=i.current)==null?void 0:s.value,email:(m=r.current)==null?void 0:m.value,message:(p=o.current)==null?void 0:p.value};alert(`当前值：
`+JSON.stringify(a,null,2))},className:"px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600",children:"获取当前值"})]})]})]})},C=`import React, { useRef, useState } from "react";

const UncontrolledFormExample: React.FC = () => {
  const formRef = useRef<HTMLFormElement>(null);
  const usernameRef = useRef<HTMLInputElement>(null);
  const emailRef = useRef<HTMLInputElement>(null);
  const messageRef = useRef<HTMLTextAreaElement>(null);
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState<any>(null);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (formRef.current) {
      const formData = new FormData(formRef.current);
      const data = {
        username: formData.get("username"),
        email: formData.get("email"),
        message: formData.get("message"),
      };

      setFormData(data);
      setSubmitted(true);
      console.log("非受控表单提交:", data);
    }
  };

  const handleReset = () => {
    setSubmitted(false);
    setFormData(null);
    if (formRef.current) {
      formRef.current.reset();
    }
  };

  if (submitted) {
    return (
      <div className="text-center py-8">
        <div className="text-green-600 text-lg font-semibold mb-2">
          提交成功！
        </div>
        <div className="bg-gray-100 p-4 rounded mb-4 text-left">
          <strong>提交的数据：</strong>
          <pre className="mt-2 text-sm">
            {JSON.stringify(formData, null, 2)}
          </pre>
        </div>
        <button
          onClick={handleReset}
          className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
        >
          重新填写
        </button>
      </div>
    );
  }

  return (
    <div>
      <h3 className="text-lg font-semibold mb-4">非受控组件 - 联系表单</h3>
      <form ref={formRef} onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            用户名
          </label>
          <input
            ref={usernameRef}
            type="text"
            name="username"
            defaultValue=""
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="请输入用户名"
            required
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            邮箱
          </label>
          <input
            ref={emailRef}
            type="email"
            name="email"
            defaultValue=""
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="请输入邮箱"
            required
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            消息
          </label>
          <textarea
            ref={messageRef}
            name="message"
            rows={4}
            defaultValue=""
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="请输入消息内容"
            required
          />
        </div>

        <div className="flex space-x-2">
          <button
            type="submit"
            className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
          >
            提交
          </button>
          <button
            type="button"
            onClick={() => {
              if (formRef.current) {
                formRef.current.reset();
              }
            }}
            className="px-4 py-2 bg-gray-500 text-white rounded hover:bg-gray-600"
          >
            重置
          </button>
          <button
            type="button"
            onClick={() => {
              // 演示如何获取当前值
              const currentValues = {
                username: usernameRef.current?.value,
                email: emailRef.current?.value,
                message: messageRef.current?.value,
              };
              alert("当前值：\\n" + JSON.stringify(currentValues, null, 2));
            }}
            className="px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600"
          >
            获取当前值
          </button>
        </div>
      </form>
    </div>
  );
};

export default UncontrolledFormExample;`,D=()=>{const n={title:"受控与非受控组件",subtitle:"Controlled vs Uncontrolled Components",description:"受控与非受控组件是React中两种不同的表单数据管理方式。受控组件的状态由React管理，非受控组件的状态由DOM自身管理。",overview:[{title:"核心概念",items:["受控与非受控组件是React中两种不同的表单数据管理方式","受控组件的状态由React管理，通过props传递值和处理函数","非受控组件的状态由DOM自身管理，通过ref获取值","两种方式各有优势，可以根据具体需求选择合适的实现"]},{title:"主要优势",items:["受控组件：支持实时验证、数据格式化、复杂表单逻辑","非受控组件：性能更好、代码更简洁、适合简单场景","可以根据具体需求选择合适的方式","支持在同一表单中混合使用两种方式"]},{title:"适用场景",items:["受控组件：复杂表单、实时验证、动态字段","非受控组件：简单表单、文件上传、性能敏感场景","混合使用：平衡功能需求和性能考虑"]},{title:"注意事项",items:["受控组件必须提供onChange处理函数，否则输入框无法输入","非受控组件使用defaultValue而不是value设置初始值","文件输入框天然是非受控的，不能通过JavaScript设置其值","避免在JSX中直接创建对象或数组，会导致不必要的重新渲染","混合使用时要明确区分受控和非受控字段的处理逻辑"]}],examples:[{title:"受控组件表单",description:"表单数据存储在React状态中，支持实时验证和复杂逻辑",component:e.jsx(y,{}),codeExample:{code:N,language:"tsx"},observationPoints:["受控组件的值完全由React状态控制","每次输入都会触发状态更新和重新渲染","支持实时验证和数据格式化","通过value和onChange实现双向数据绑定"],keyPoints:["使用useState管理表单数据状态","通过value属性绑定状态值","通过onChange事件更新状态","可以实现实时验证和复杂逻辑"],commonTraps:["忘记提供onChange处理函数导致输入框无法输入","在onChange中直接修改state对象而不是创建新对象","过度使用受控组件导致性能问题"],solutions:["确保每个受控组件都有对应的onChange处理函数","使用函数式更新或展开运算符创建新的state对象","对于简单场景考虑使用非受控组件"],importantTips:["受控组件的value必须来自state，不能是undefined","实时验证应该在onChange中进行，而不是onBlur","复杂表单可以考虑使用useReducer管理状态"]},{title:"非受控组件表单",description:"表单数据存储在DOM中，使用ref获取值，性能更好",component:e.jsx(S,{}),codeExample:{code:C,language:"tsx"},observationPoints:["非受控组件的值由DOM自身管理","使用ref引用DOM元素获取值","使用defaultValue设置初始值","不会在每次输入时触发重新渲染"],keyPoints:["使用useRef创建DOM元素引用","通过ref.current.value获取输入值","使用defaultValue而不是value设置初始值","适合简单表单和性能敏感场景"],commonTraps:["使用value而不是defaultValue设置初始值","忘记检查ref.current是否存在","试图在非受控组件上使用onChange控制值"],solutions:["非受控组件必须使用defaultValue设置初始值","访问ref.current前要进行空值检查","如需控制值的变化，应该使用受控组件"],importantTips:["非受控组件适合简单表单和文件上传场景","可以通过ref直接操作DOM元素","性能优于受控组件，但功能有限"]},{title:"混合使用示例",description:"在同一表单中混合使用受控和非受控组件",component:e.jsx(R,{}),codeExample:{code:E,language:"tsx"},observationPoints:["重要字段使用受控组件进行实时验证","简单字段使用非受控组件提升性能","可以根据字段重要性选择不同的管理方式","提交时需要分别处理两种类型的数据"],keyPoints:["根据字段重要性选择受控或非受控方式","受控字段用于需要实时验证的场景","非受控字段用于简单数据收集","提交时统一处理所有字段数据"],commonTraps:["混合使用时忘记区分不同字段的获取方式","在提交时遗漏某些字段的数据","过度复杂化简单表单的实现"],solutions:["明确区分受控和非受控字段的处理逻辑","在提交函数中统一收集所有字段数据","保持实现的简洁性和可维护性"],importantTips:["混合使用可以平衡功能需求和性能考虑","重要字段优先考虑受控组件","简单字段可以使用非受控组件减少渲染"]},{title:"文件上传组件",description:"文件输入通常是非受控的，展示文件处理的最佳实践",component:e.jsx(w,{}),codeExample:{code:j,language:"tsx"},observationPoints:["文件输入框天然是非受控的","使用ref获取文件输入框的引用","通过onChange事件获取选择的文件","文件对象不能作为受控组件的值"],keyPoints:["文件输入框必须使用非受控方式","通过onChange事件处理文件选择","使用FileList和File API处理文件","可以限制文件类型和数量"],commonTraps:["试图将文件对象作为受控组件的值","忘记处理文件选择的边界情况","没有提供清除文件选择的功能"],solutions:["文件上传必须使用非受控组件","添加文件验证和错误处理逻辑","提供清除和重新选择文件的功能"],importantTips:["文件输入框的值不能通过JavaScript设置","可以通过accept属性限制文件类型","处理文件上传时要考虑错误处理和进度显示"]}],tutorial:{concepts:["受控组件：表单数据由React状态管理，通过props传递值和处理函数","非受控组件：表单数据由DOM自身管理，通过ref获取值","混合使用：在同一表单中根据需求选择不同的管理方式","数据流：受控组件实现单向数据流，非受控组件依赖DOM状态"],steps:["受控组件：1) 使用useState定义状态 2) 通过value绑定状态 3) 通过onChange更新状态","非受控组件：1) 使用useRef创建引用 2) 通过defaultValue设置初始值 3) 通过ref.current.value获取值","表单验证：受控组件支持实时验证，非受控组件通常在提交时验证","性能优化：合理选择受控和非受控方式，避免不必要的重新渲染"],tips:["使用自定义Hook封装表单逻辑，提高代码复用性","对于复杂表单，考虑使用useReducer管理状态","文件上传等特殊场景必须使用非受控组件","在性能敏感的场景中优先考虑非受控组件"]},interview:{questions:[{question:"受控组件和非受控组件的区别是什么？",answer:"受控组件的值由React状态管理，通过props传递；非受控组件的值由DOM管理，通过ref获取。受控组件支持实时验证和复杂逻辑，非受控组件性能更好但功能有限。"},{question:"什么时候使用受控组件，什么时候使用非受控组件？",answer:"需要实时验证、数据格式化、动态字段或复杂表单逻辑时使用受控组件；简单表单、文件上传或性能敏感场景使用非受控组件。"},{question:"如何在受控组件中处理多个输入字段？",answer:"使用对象状态存储多个字段值，通过通用的handleChange函数处理所有字段的更新，或者为每个字段创建独立的处理函数。"},{question:"受控组件的性能问题如何解决？",answer:"使用React.memo优化组件渲染，通过useCallback缓存处理函数，对于简单场景考虑使用非受控组件，或者使用防抖技术减少更新频率。"}],keyPoints:["数据管理方式：受控组件由React状态管理，非受控组件由DOM管理","性能权衡：受控组件功能强大但可能影响性能，非受控组件性能更好","适用场景：根据功能需求和性能要求选择合适的方式","实现方式：受控组件需要value和onChange，非受控组件使用ref和defaultValue"]},bestPractices:{dos:["根据具体需求选择受控或非受控组件","为受控组件提供合适的初始值","使用TypeScript增强类型安全","实现适当的表单验证逻辑","为复杂表单考虑使用表单库"],donts:["不要在受控组件中忘记onChange处理","不要直接修改state对象","不要过度使用受控组件影响性能","不要在非受控组件中使用value属性","不要忽视表单的可访问性"],patterns:["使用自定义Hook封装表单逻辑","实现表单字段的组合模式","采用渐进式增强的验证策略","设计可复用的表单组件","实现统一的错误处理机制"]}};return e.jsx(v,{...n})};export{D as default};
