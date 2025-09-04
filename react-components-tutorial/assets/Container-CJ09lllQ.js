import{r as l,j as e}from"./index-CbVlrJMN.js";import{C as y}from"./ComponentTemplate-BnvJNrWP.js";const v=({users:n,loading:r,error:s,onRefresh:t})=>r?e.jsxs("div",{className:"flex items-center justify-center p-8",children:[e.jsx("div",{className:"animate-spin rounded-full h-8 w-8 border-b-2 border-blue-600"}),e.jsx("span",{className:"ml-2 text-gray-600",children:"加载中..."})]}):s?e.jsxs("div",{className:"p-4 bg-red-50 border border-red-200 rounded-lg",children:[e.jsxs("p",{className:"text-red-600 mb-2",children:["错误: ",s]}),e.jsx("button",{onClick:t,className:"px-3 py-1 bg-red-600 text-white rounded hover:bg-red-700",children:"重试"})]}):e.jsxs("div",{className:"space-y-4",children:[e.jsxs("div",{className:"flex justify-between items-center",children:[e.jsx("h3",{className:"text-lg font-semibold text-gray-800",children:"用户列表"}),e.jsx("button",{onClick:t,className:"px-3 py-1 bg-blue-600 text-white rounded hover:bg-blue-700",children:"刷新"})]}),e.jsx("div",{className:"grid gap-3",children:n.map(i=>e.jsx("div",{className:"p-3 border border-gray-200 rounded-lg hover:bg-gray-50",children:e.jsxs("div",{className:"flex justify-between items-center",children:[e.jsxs("div",{children:[e.jsx("h4",{className:"font-medium text-gray-900",children:i.name}),e.jsx("p",{className:"text-sm text-gray-600",children:i.email})]}),e.jsx("span",{className:`px-2 py-1 text-xs rounded-full ${i.status==="active"?"bg-green-100 text-green-800":"bg-gray-100 text-gray-800"}`,children:i.status==="active"?"活跃":"非活跃"})]})},i.id))})]}),N=()=>{const[n,r]=l.useState([]),[s,t]=l.useState(!1),[i,m]=l.useState(null),c=async()=>{t(!0),m(null);try{if(await new Promise(u=>setTimeout(u,1e3)),Math.random()<.2)throw new Error("网络请求失败");r([{id:1,name:"张三",email:"zhangsan@example.com",status:"active"},{id:2,name:"李四",email:"lisi@example.com",status:"inactive"},{id:3,name:"王五",email:"wangwu@example.com",status:"active"},{id:4,name:"赵六",email:"zhaoliu@example.com",status:"active"}])}catch(a){m(a instanceof Error?a.message:"未知错误")}finally{t(!1)}};return l.useEffect(()=>{c()},[]),e.jsx(v,{users:n,loading:s,error:i,onRefresh:c})},w=({formData:n,errors:r,isSubmitting:s,onInputChange:t,onSubmit:i,onReset:m})=>e.jsxs("div",{className:"max-w-md mx-auto",children:[e.jsx("h3",{className:"text-lg font-semibold text-gray-800 mb-4",children:"用户信息表单"}),e.jsxs("form",{onSubmit:i,className:"space-y-4",children:[e.jsxs("div",{children:[e.jsx("label",{className:"block text-sm font-medium text-gray-700 mb-1",children:"姓名 *"}),e.jsx("input",{type:"text",value:n.name,onChange:c=>t("name",c.target.value),className:`w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 ${r.name?"border-red-300 focus:ring-red-500":"border-gray-300 focus:ring-blue-500"}`,placeholder:"请输入姓名"}),r.name&&e.jsx("p",{className:"mt-1 text-sm text-red-600",children:r.name})]}),e.jsxs("div",{children:[e.jsx("label",{className:"block text-sm font-medium text-gray-700 mb-1",children:"邮箱 *"}),e.jsx("input",{type:"email",value:n.email,onChange:c=>t("email",c.target.value),className:`w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 ${r.email?"border-red-300 focus:ring-red-500":"border-gray-300 focus:ring-blue-500"}`,placeholder:"请输入邮箱"}),r.email&&e.jsx("p",{className:"mt-1 text-sm text-red-600",children:r.email})]}),e.jsxs("div",{children:[e.jsx("label",{className:"block text-sm font-medium text-gray-700 mb-1",children:"留言"}),e.jsx("textarea",{value:n.message,onChange:c=>t("message",c.target.value),rows:4,className:`w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 ${r.message?"border-red-300 focus:ring-red-500":"border-gray-300 focus:ring-blue-500"}`,placeholder:"请输入留言（可选）"}),r.message&&e.jsx("p",{className:"mt-1 text-sm text-red-600",children:r.message})]}),e.jsxs("div",{className:"flex space-x-3",children:[e.jsx("button",{type:"submit",disabled:s,className:"flex-1 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 disabled:bg-gray-400 disabled:cursor-not-allowed",children:s?"提交中...":"提交"}),e.jsx("button",{type:"button",onClick:m,disabled:s,className:"px-4 py-2 bg-gray-600 text-white rounded-lg hover:bg-gray-700 disabled:bg-gray-400 disabled:cursor-not-allowed",children:"重置"})]})]})]}),S=()=>{const[n,r]=l.useState({name:"",email:"",message:""}),[s,t]=l.useState({}),[i,m]=l.useState(!1),c=()=>{const o={};return n.name.trim()?n.name.trim().length<2&&(o.name="姓名至少需要2个字符"):o.name="姓名不能为空",n.email.trim()?/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(n.email)||(o.email="请输入有效的邮箱地址"):o.email="邮箱不能为空",n.message.trim().length>500&&(o.message="留言不能超过500个字符"),t(o),Object.keys(o).length===0},a=(o,g)=>{r(x=>({...x,[o]:g})),s[o]&&t(x=>({...x,[o]:void 0}))},u=async o=>{if(o.preventDefault(),!!c()){m(!0);try{if(await new Promise(g=>setTimeout(g,2e3)),Math.random()<.3)throw new Error("提交失败，请重试");alert("表单提交成功！"),p()}catch(g){alert(g instanceof Error?g.message:"提交失败")}finally{m(!1)}}},p=()=>{r({name:"",email:"",message:""}),t({})};return e.jsx(w,{formData:n,errors:s,isSubmitting:i,onInputChange:a,onSubmit:u,onReset:p})},j=({query:n,results:r,loading:s,error:t,onQueryChange:i,onSearch:m,onClear:c})=>e.jsxs("div",{className:"space-y-4",children:[e.jsxs("div",{className:"flex space-x-2",children:[e.jsxs("div",{className:"flex-1 relative",children:[e.jsx("input",{type:"text",value:n,onChange:a=>i(a.target.value),onKeyPress:a=>a.key==="Enter"&&m(),placeholder:"输入搜索关键词...",className:"w-full px-4 py-2 pr-10 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"}),n&&e.jsx("button",{onClick:c,className:"absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600",children:"✕"})]}),e.jsx("button",{onClick:m,disabled:!n.trim()||s,className:"px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 disabled:bg-gray-400 disabled:cursor-not-allowed",children:s?"搜索中...":"搜索"})]}),s&&e.jsxs("div",{className:"flex items-center justify-center p-8",children:[e.jsx("div",{className:"animate-spin rounded-full h-6 w-6 border-b-2 border-blue-600"}),e.jsx("span",{className:"ml-2 text-gray-600",children:"搜索中..."})]}),t&&e.jsx("div",{className:"p-4 bg-red-50 border border-red-200 rounded-lg",children:e.jsxs("p",{className:"text-red-600",children:["搜索出错: ",t]})}),!s&&!t&&r.length>0&&e.jsxs("div",{className:"space-y-3",children:[e.jsxs("p",{className:"text-sm text-gray-600",children:["找到 ",r.length," 个结果"]}),r.map(a=>e.jsxs("div",{className:"p-4 border border-gray-200 rounded-lg hover:bg-gray-50",children:[e.jsxs("div",{className:"flex justify-between items-start mb-2",children:[e.jsx("h4",{className:"font-medium text-gray-900",children:a.title}),e.jsx("span",{className:"text-xs bg-blue-100 text-blue-800 px-2 py-1 rounded",children:a.category})]}),e.jsx("p",{className:"text-sm text-gray-600 mb-2",children:a.description}),e.jsxs("div",{className:"flex items-center",children:[e.jsx("span",{className:"text-xs text-gray-500",children:"相关度: "}),e.jsx("div",{className:"ml-1 flex",children:Array.from({length:5},(u,p)=>e.jsx("span",{className:`text-xs ${p<a.relevance?"text-yellow-400":"text-gray-300"}`,children:"★"},p))})]})]},a.id))]}),!s&&!t&&n&&r.length===0&&e.jsxs("div",{className:"text-center p-8 text-gray-500",children:[e.jsx("p",{children:"没有找到相关结果"}),e.jsx("p",{className:"text-sm mt-1",children:"尝试使用不同的关键词"})]})]}),C=()=>{const[n,r]=l.useState(""),[s,t]=l.useState([]),[i,m]=l.useState(!1),[c,a]=l.useState(null),[u,p]=l.useState("");l.useEffect(()=>{const d=setTimeout(()=>{p(n)},500);return()=>clearTimeout(d)},[n]);const o=l.useCallback(async d=>{if(!d.trim()){t([]);return}m(!0),a(null);try{if(await new Promise(f=>setTimeout(f,800)),Math.random()<.1)throw new Error("搜索服务暂时不可用");const b=[{id:1,title:`${d} 相关文档`,description:`这是关于 ${d} 的详细文档说明，包含了完整的使用指南和最佳实践。`,category:"文档",relevance:5},{id:2,title:`${d} 教程`,description:`学习 ${d} 的入门教程，适合初学者快速上手。`,category:"教程",relevance:4},{id:3,title:`${d} 示例代码`,description:`实用的 ${d} 代码示例，可以直接在项目中使用。`,category:"代码",relevance:4},{id:4,title:`${d} 常见问题`,description:`关于 ${d} 的常见问题解答和故障排除指南。`,category:"FAQ",relevance:3}].filter(()=>Math.random()>.3);t(b)}catch(b){a(b instanceof Error?b.message:"搜索失败"),t([])}finally{m(!1)}},[]);l.useEffect(()=>{u?o(u):t([])},[u,o]);const g=d=>{r(d)},x=()=>{n.trim()&&o(n.trim())},h=()=>{r(""),t([]),a(null)};return e.jsx(j,{query:n,results:s,loading:i,error:c,onQueryChange:g,onSearch:x,onClear:h})},P=`import React, { useState, useEffect } from "react";\r
\r
// 用户数据类型定义\r
interface User {\r
  id: number;\r
  name: string;\r
  email: string;\r
  status: "active" | "inactive";\r
}\r
\r
// 用户列表展示组件的Props\r
interface UserListPresentationProps {\r
  users: User[];\r
  loading: boolean;\r
  error: string | null;\r
  onRefresh: () => void;\r
}\r
\r
// 用户列表展示组件\r
const UserListPresentation: React.FC<UserListPresentationProps> = ({\r
  users,\r
  loading,\r
  error,\r
  onRefresh,\r
}) => {\r
  if (loading) {\r
    return (\r
      <div className="flex items-center justify-center p-8">\r
        <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-blue-600"></div>\r
        <span className="ml-2 text-gray-600">加载中...</span>\r
      </div>\r
    );\r
  }\r
\r
  if (error) {\r
    return (\r
      <div className="p-4 bg-red-50 border border-red-200 rounded-lg">\r
        <p className="text-red-600 mb-2">错误: {error}</p>\r
        <button\r
          onClick={onRefresh}\r
          className="px-3 py-1 bg-red-600 text-white rounded hover:bg-red-700"\r
        >\r
          重试\r
        </button>\r
      </div>\r
    );\r
  }\r
\r
  return (\r
    <div className="space-y-4">\r
      <div className="flex justify-between items-center">\r
        <h3 className="text-lg font-semibold text-gray-800">用户列表</h3>\r
        <button\r
          onClick={onRefresh}\r
          className="px-3 py-1 bg-blue-600 text-white rounded hover:bg-blue-700"\r
        >\r
          刷新\r
        </button>\r
      </div>\r
      <div className="grid gap-3">\r
        {users.map((user) => (\r
          <div\r
            key={user.id}\r
            className="p-3 border border-gray-200 rounded-lg hover:bg-gray-50"\r
          >\r
            <div className="flex justify-between items-center">\r
              <div>\r
                <h4 className="font-medium text-gray-900">{user.name}</h4>\r
                <p className="text-sm text-gray-600">{user.email}</p>\r
              </div>\r
              <span\r
                className={\`px-2 py-1 text-xs rounded-full \${\r
                  user.status === "active"\r
                    ? "bg-green-100 text-green-800"\r
                    : "bg-gray-100 text-gray-800"\r
                }\`}\r
              >\r
                {user.status === "active" ? "活跃" : "非活跃"}\r
              </span>\r
            </div>\r
          </div>\r
        ))}\r
      </div>\r
    </div>\r
  );\r
};\r
\r
// 用户列表容器组件\r
const UserListContainer: React.FC = () => {\r
  const [users, setUsers] = useState<User[]>([]);\r
  const [loading, setLoading] = useState(false);\r
  const [error, setError] = useState<string | null>(null);\r
\r
  // 模拟API调用\r
  const fetchUsers = async () => {\r
    setLoading(true);\r
    setError(null);\r
    \r
    try {\r
      // 模拟网络延迟\r
      await new Promise((resolve) => setTimeout(resolve, 1000));\r
      \r
      // 模拟随机错误\r
      if (Math.random() < 0.2) {\r
        throw new Error("网络请求失败");\r
      }\r
      \r
      // 模拟用户数据\r
      const mockUsers: User[] = [\r
        { id: 1, name: "张三", email: "zhangsan@example.com", status: "active" },\r
        { id: 2, name: "李四", email: "lisi@example.com", status: "inactive" },\r
        { id: 3, name: "王五", email: "wangwu@example.com", status: "active" },\r
        { id: 4, name: "赵六", email: "zhaoliu@example.com", status: "active" },\r
      ];\r
      \r
      setUsers(mockUsers);\r
    } catch (err) {\r
      setError(err instanceof Error ? err.message : "未知错误");\r
    } finally {\r
      setLoading(false);\r
    }\r
  };\r
\r
  useEffect(() => {\r
    fetchUsers();\r
  }, []);\r
\r
  return (\r
    <UserListPresentation\r
      users={users}\r
      loading={loading}\r
      error={error}\r
      onRefresh={fetchUsers}\r
    />\r
  );\r
};\r
\r
export default UserListContainer;\r
export { UserListPresentation };\r
export type { User, UserListPresentationProps };`,E=`import React, { useState } from "react";

// 表单数据类型定义
interface FormData {
  name: string;
  email: string;
  message: string;
}

// 表单验证错误类型
interface FormErrors {
  name?: string;
  email?: string;
  message?: string;
}

// 表单展示组件的Props
interface FormPresentationProps {
  formData: FormData;
  errors: FormErrors;
  isSubmitting: boolean;
  onInputChange: (field: keyof FormData, value: string) => void;
  onSubmit: (e: React.FormEvent) => void;
  onReset: () => void;
}

// 表单展示组件
const FormPresentation: React.FC<FormPresentationProps> = ({
  formData,
  errors,
  isSubmitting,
  onInputChange,
  onSubmit,
  onReset,
}) => {
  return (
    <div className="max-w-md mx-auto">
      <h3 className="text-lg font-semibold text-gray-800 mb-4">用户信息表单</h3>
      <form onSubmit={onSubmit} className="space-y-4">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            姓名 *
          </label>
          <input
            type="text"
            value={formData.name}
            onChange={(e) => onInputChange("name", e.target.value)}
            className={\`w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 \${
              errors.name
                ? "border-red-300 focus:ring-red-500"
                : "border-gray-300 focus:ring-blue-500"
            }\`}
            placeholder="请输入姓名"
          />
          {errors.name && (
            <p className="mt-1 text-sm text-red-600">{errors.name}</p>
          )}
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            邮箱 *
          </label>
          <input
            type="email"
            value={formData.email}
            onChange={(e) => onInputChange("email", e.target.value)}
            className={\`w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 \${
              errors.email
                ? "border-red-300 focus:ring-red-500"
                : "border-gray-300 focus:ring-blue-500"
            }\`}
            placeholder="请输入邮箱"
          />
          {errors.email && (
            <p className="mt-1 text-sm text-red-600">{errors.email}</p>
          )}
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            留言
          </label>
          <textarea
            value={formData.message}
            onChange={(e) => onInputChange("message", e.target.value)}
            rows={4}
            className={\`w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 \${
              errors.message
                ? "border-red-300 focus:ring-red-500"
                : "border-gray-300 focus:ring-blue-500"
            }\`}
            placeholder="请输入留言（可选）"
          />
          {errors.message && (
            <p className="mt-1 text-sm text-red-600">{errors.message}</p>
          )}
        </div>

        <div className="flex space-x-3">
          <button
            type="submit"
            disabled={isSubmitting}
            className="flex-1 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 disabled:bg-gray-400 disabled:cursor-not-allowed"
          >
            {isSubmitting ? "提交中..." : "提交"}
          </button>
          <button
            type="button"
            onClick={onReset}
            disabled={isSubmitting}
            className="px-4 py-2 bg-gray-600 text-white rounded-lg hover:bg-gray-700 disabled:bg-gray-400 disabled:cursor-not-allowed"
          >
            重置
          </button>
        </div>
      </form>
    </div>
  );
};

// 表单容器组件
const FormContainer: React.FC = () => {
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    message: "",
  });
  const [errors, setErrors] = useState<FormErrors>({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  // 表单验证
  const validateForm = (): boolean => {
    const newErrors: FormErrors = {};

    if (!formData.name.trim()) {
      newErrors.name = "姓名不能为空";
    } else if (formData.name.trim().length < 2) {
      newErrors.name = "姓名至少需要2个字符";
    }

    if (!formData.email.trim()) {
      newErrors.email = "邮箱不能为空";
    } else if (!/^[^\\s@]+@[^\\s@]+\\.[^\\s@]+$/.test(formData.email)) {
      newErrors.email = "请输入有效的邮箱地址";
    }

    if (formData.message.trim().length > 500) {
      newErrors.message = "留言不能超过500个字符";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  // 处理输入变化
  const handleInputChange = (field: keyof FormData, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
    
    // 清除对应字段的错误
    if (errors[field]) {
      setErrors((prev) => ({ ...prev, [field]: undefined }));
    }
  };

  // 处理表单提交
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!validateForm()) {
      return;
    }

    setIsSubmitting(true);
    
    try {
      // 模拟API调用
      await new Promise((resolve) => setTimeout(resolve, 2000));
      
      // 模拟随机错误
      if (Math.random() < 0.3) {
        throw new Error("提交失败，请重试");
      }
      
      alert("表单提交成功！");
      handleReset();
    } catch (error) {
      alert(error instanceof Error ? error.message : "提交失败");
    } finally {
      setIsSubmitting(false);
    }
  };

  // 重置表单
  const handleReset = () => {
    setFormData({ name: "", email: "", message: "" });
    setErrors({});
  };

  return (
    <FormPresentation
      formData={formData}
      errors={errors}
      isSubmitting={isSubmitting}
      onInputChange={handleInputChange}
      onSubmit={handleSubmit}
      onReset={handleReset}
    />
  );
};

export default FormContainer;
export { FormPresentation };
export type { FormData, FormErrors, FormPresentationProps };`,R=`import React, { useState, useEffect, useCallback } from "react";

// 搜索结果数据类型定义
interface SearchResult {
  id: number;
  title: string;
  description: string;
  category: string;
  relevance: number;
}

// 搜索展示组件的Props
interface SearchPresentationProps {
  query: string;
  results: SearchResult[];
  loading: boolean;
  error: string | null;
  onQueryChange: (query: string) => void;
  onSearch: () => void;
  onClear: () => void;
}

// 搜索展示组件
const SearchPresentation: React.FC<SearchPresentationProps> = ({
  query,
  results,
  loading,
  error,
  onQueryChange,
  onSearch,
  onClear,
}) => {
  return (
    <div className="space-y-4">
      <div className="flex space-x-2">
        <div className="flex-1 relative">
          <input
            type="text"
            value={query}
            onChange={(e) => onQueryChange(e.target.value)}
            onKeyPress={(e) => e.key === "Enter" && onSearch()}
            placeholder="输入搜索关键词..."
            className="w-full px-4 py-2 pr-10 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          {query && (
            <button
              onClick={onClear}
              className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600"
            >
              ✕
            </button>
          )}
        </div>
        <button
          onClick={onSearch}
          disabled={!query.trim() || loading}
          className="px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 disabled:bg-gray-400 disabled:cursor-not-allowed"
        >
          {loading ? "搜索中..." : "搜索"}
        </button>
      </div>

      {loading && (
        <div className="flex items-center justify-center p-8">
          <div className="animate-spin rounded-full h-6 w-6 border-b-2 border-blue-600"></div>
          <span className="ml-2 text-gray-600">搜索中...</span>
        </div>
      )}

      {error && (
        <div className="p-4 bg-red-50 border border-red-200 rounded-lg">
          <p className="text-red-600">搜索出错: {error}</p>
        </div>
      )}

      {!loading && !error && results.length > 0 && (
        <div className="space-y-3">
          <p className="text-sm text-gray-600">
            找到 {results.length} 个结果
          </p>
          {results.map((result) => (
            <div
              key={result.id}
              className="p-4 border border-gray-200 rounded-lg hover:bg-gray-50"
            >
              <div className="flex justify-between items-start mb-2">
                <h4 className="font-medium text-gray-900">{result.title}</h4>
                <span className="text-xs bg-blue-100 text-blue-800 px-2 py-1 rounded">
                  {result.category}
                </span>
              </div>
              <p className="text-sm text-gray-600 mb-2">{result.description}</p>
              <div className="flex items-center">
                <span className="text-xs text-gray-500">相关度: </span>
                <div className="ml-1 flex">
                  {Array.from({ length: 5 }, (_, i) => (
                    <span
                      key={i}
                      className={\`text-xs \${
                        i < result.relevance ? "text-yellow-400" : "text-gray-300"
                      }\`}
                    >
                      ★
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      )}

      {!loading && !error && query && results.length === 0 && (
        <div className="text-center p-8 text-gray-500">
          <p>没有找到相关结果</p>
          <p className="text-sm mt-1">尝试使用不同的关键词</p>
        </div>
      )}
    </div>
  );
};

// 搜索容器组件
const SearchContainer: React.FC = () => {
  const [query, setQuery] = useState("");
  const [results, setResults] = useState<SearchResult[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [debouncedQuery, setDebouncedQuery] = useState("");

  // 防抖处理
  useEffect(() => {
    const timer = setTimeout(() => {
      setDebouncedQuery(query);
    }, 500);

    return () => clearTimeout(timer);
  }, [query]);

  // 模拟搜索API
  const performSearch = useCallback(async (searchQuery: string) => {
    if (!searchQuery.trim()) {
      setResults([]);
      return;
    }

    setLoading(true);
    setError(null);

    try {
      // 模拟网络延迟
      await new Promise((resolve) => setTimeout(resolve, 800));

      // 模拟随机错误
      if (Math.random() < 0.1) {
        throw new Error("搜索服务暂时不可用");
      }

      // 模拟搜索结果
      const mockResults: SearchResult[] = [
        {
          id: 1,
          title: \`\${searchQuery} 相关文档\`,
          description: \`这是关于 \${searchQuery} 的详细文档说明，包含了完整的使用指南和最佳实践。\`,
          category: "文档",
          relevance: 5,
        },
        {
          id: 2,
          title: \`\${searchQuery} 教程\`,
          description: \`学习 \${searchQuery} 的入门教程，适合初学者快速上手。\`,
          category: "教程",
          relevance: 4,
        },
        {
          id: 3,
          title: \`\${searchQuery} 示例代码\`,
          description: \`实用的 \${searchQuery} 代码示例，可以直接在项目中使用。\`,
          category: "代码",
          relevance: 4,
        },
        {
          id: 4,
          title: \`\${searchQuery} 常见问题\`,
          description: \`关于 \${searchQuery} 的常见问题解答和故障排除指南。\`,
          category: "FAQ",
          relevance: 3,
        },
      ].filter(() => Math.random() > 0.3); // 随机过滤一些结果

      setResults(mockResults);
    } catch (err) {
      setError(err instanceof Error ? err.message : "搜索失败");
      setResults([]);
    } finally {
      setLoading(false);
    }
  }, []);

  // 自动搜索（防抖后）
  useEffect(() => {
    if (debouncedQuery) {
      performSearch(debouncedQuery);
    } else {
      setResults([]);
    }
  }, [debouncedQuery, performSearch]);

  // 处理查询变化
  const handleQueryChange = (newQuery: string) => {
    setQuery(newQuery);
  };

  // 手动搜索
  const handleSearch = () => {
    if (query.trim()) {
      performSearch(query.trim());
    }
  };

  // 清除搜索
  const handleClear = () => {
    setQuery("");
    setResults([]);
    setError(null);
  };

  return (
    <SearchPresentation
      query={query}
      results={results}
      loading={loading}
      error={error}
      onQueryChange={handleQueryChange}
      onSearch={handleSearch}
      onClear={handleClear}
    />
  );
};

export default SearchContainer;
export { SearchPresentation };
export type { SearchResult, SearchPresentationProps };`,F=()=>{const n={title:"Container 容器组件",description:"容器组件是一种设计模式，用于分离业务逻辑和展示逻辑，提高组件的可维护性和可测试性。",overview:[{title:"核心概念",items:["容器组件（Container Component）是一种React设计模式，主要负责处理数据获取、状态管理和业务逻辑","将UI渲染交给展示组件（Presentation Component），实现关注点分离","这种分离关注点的方式使代码更加清晰和可维护"]},{title:"主要优势",items:["关注点分离：业务逻辑与UI展示分离","可重用性：展示组件可以在不同容器中复用","可测试性：业务逻辑和UI可以独立测试","可维护性：代码结构清晰，易于维护和扩展"]},{title:"适用场景",items:["复杂的数据处理和状态管理","需要与外部API交互的组件","包含复杂业务逻辑的功能模块","需要高度可测试性的应用"]},{title:"注意事项",items:["避免过度抽象，简单组件不需要强制分离","保持容器组件的职责单一性","合理设计Props接口，避免过度耦合","注意性能优化，避免不必要的重渲染"]}],examples:[{title:"用户列表容器",component:e.jsx(N,{}),description:"演示如何使用容器组件管理用户列表的数据获取、加载状态和错误处理。",observationPoints:["点击'刷新用户'按钮观察加载状态的变化","注意容器组件如何处理异步数据获取","观察错误状态的处理和用户反馈","容器组件与展示组件的职责分离"],keyPoints:["容器组件负责数据获取和状态管理","展示组件只负责UI渲染，通过props接收数据","使用useEffect处理副作用操作","合理的错误处理和加载状态管理"],commonTraps:["在展示组件中直接进行数据获取","容器组件包含过多的UI逻辑","没有合理处理异步操作的各种状态","Props接口设计不合理，导致组件耦合"],solutions:["严格分离容器组件和展示组件的职责","使用TypeScript定义清晰的Props接口","实现完整的加载、成功、错误状态处理","使用自定义Hook进一步抽象业务逻辑"],importantTips:["容器组件应该是'智能'的，负责数据和逻辑","展示组件应该是'愚蠢'的，只负责渲染","通过Props传递数据和回调函数","保持组件的单一职责原则"],codeExample:{title:"UserListContainer.tsx",code:P,highlightLines:[15,25,35,45]}},{title:"表单容器",component:e.jsx(S,{}),description:"展示容器组件如何处理表单状态管理、验证逻辑和提交操作。",observationPoints:["输入不同内容观察实时验证效果","点击提交按钮观察表单处理流程","注意表单状态的统一管理","观察错误信息的显示和清除"],keyPoints:["容器组件管理表单状态和验证逻辑","展示组件负责表单UI的渲染","实时验证和错误信息反馈","表单提交的异步处理"],commonTraps:["在每个输入组件中单独管理状态","验证逻辑散布在多个组件中","没有统一的错误处理机制","表单重置逻辑不完整"],solutions:["使用统一的状态管理方案","将验证逻辑集中在容器组件中","实现统一的错误处理和显示机制","提供完整的表单操作方法"],importantTips:["表单状态应该在容器组件中统一管理","验证逻辑与UI展示分离","提供清晰的表单操作接口","合理处理表单的各种状态"],codeExample:{title:"FormContainer.tsx",code:E,highlightLines:[20,30,40,50]}},{title:"搜索容器",component:e.jsx(C,{}),description:"演示容器组件如何处理搜索功能，包括防抖、异步搜索和结果展示。",observationPoints:["输入搜索关键词观察防抖效果","注意搜索过程中的加载状态","观察搜索结果的展示和交互","体验错误处理和重试机制"],keyPoints:["使用防抖优化搜索性能","容器组件处理搜索逻辑和状态","异步搜索的完整状态管理","搜索结果的格式化和展示"],commonTraps:["没有实现搜索防抖，频繁发起请求","搜索状态管理不完整","没有合理的错误处理机制","搜索结果展示逻辑混乱"],solutions:["使用useEffect和setTimeout实现防抖","完整管理搜索的各种状态","实现统一的错误处理和用户反馈","分离搜索逻辑和结果展示逻辑"],importantTips:["搜索功能必须实现防抖优化","搜索状态包括：空闲、搜索中、成功、失败","提供清晰的用户反馈和交互","搜索结果要有合理的展示格式"],codeExample:{title:"SearchContainer.tsx",code:R,highlightLines:[25,35,45,55]}}],tutorial:{concepts:["容器组件（Container Component）：负责数据获取、状态管理和业务逻辑的组件","展示组件（Presentation Component）：只负责UI渲染，通过props接收数据的组件","关注点分离（Separation of Concerns）：将不同的功能职责分离到不同的组件中","Props接口设计：定义清晰的组件通信接口，确保组件间的松耦合","状态提升（State Lifting）：将共享状态提升到共同的父组件中管理"],steps:["分析组件功能，识别业务逻辑和UI逻辑","设计容器组件，负责数据获取和状态管理","创建展示组件，只负责UI渲染","定义Props接口，确保组件间的清晰通信","实现容器组件的业务逻辑和副作用处理","在展示组件中实现UI渲染和用户交互","测试容器组件和展示组件的功能","优化性能，避免不必要的重渲染"],tips:["容器组件应该是'智能'的，展示组件应该是'愚蠢'的","使用TypeScript定义清晰的Props接口","容器组件可以包含多个展示组件","展示组件应该是纯函数组件，便于测试","使用自定义Hook进一步抽象业务逻辑","合理使用React.memo优化展示组件性能","容器组件负责错误边界和异常处理","保持组件的单一职责原则"]},interview:{questions:[{question:"什么是容器组件模式？它解决了什么问题？",answer:"容器组件模式是一种React设计模式，将组件分为容器组件和展示组件。容器组件负责数据获取、状态管理和业务逻辑，展示组件只负责UI渲染。这种模式解决了关注点分离的问题，提高了代码的可维护性、可测试性和可重用性。"},{question:"容器组件和展示组件的区别是什么？",answer:"容器组件：关注数据如何工作，包含状态管理、数据获取、业务逻辑，通常使用Hooks或类组件的生命周期方法。展示组件：关注UI如何展示，只通过props接收数据，不包含状态管理，通常是纯函数组件，易于测试和复用。"},{question:"在现代React开发中，容器组件模式还有必要吗？",answer:"虽然Hooks的出现使得状态管理更加灵活，但容器组件模式仍然有价值。它提供了清晰的架构指导，特别适用于复杂的业务逻辑场景。现代实践中，可以结合自定义Hooks来实现更优雅的关注点分离。"},{question:"如何测试容器组件和展示组件？",answer:"展示组件测试：专注于UI渲染和用户交互，使用快照测试和交互测试。容器组件测试：专注于业务逻辑、数据获取和状态管理，可以mock外部依赖，测试各种状态变化。分离测试使得测试更加专注和高效。"},{question:"容器组件模式与Redux的关系是什么？",answer:"Redux的connect函数实际上就是容器组件模式的实现。connect创建了一个容器组件，负责从Redux store获取数据并传递给展示组件。现代Redux Toolkit和React-Redux hooks也延续了这种思想，但使用更简洁的API。"}],keyPoints:["容器组件模式是关注点分离的经典实现","提高了组件的可测试性和可维护性","展示组件具有更好的可重用性","现代React开发中仍然具有指导意义","可以与Hooks和现代状态管理库很好地结合"]},bestPractices:{dos:["严格分离容器组件和展示组件的职责","使用TypeScript定义清晰的Props接口","在容器组件中处理所有的副作用操作","展示组件保持纯函数特性，便于测试","使用自定义Hooks抽象复杂的业务逻辑","合理使用React.memo优化展示组件性能","实现完整的错误处理和加载状态管理","保持组件的单一职责原则"],donts:["不要在展示组件中直接进行数据获取","不要让容器组件包含过多的UI逻辑","不要在展示组件中管理复杂的状态","不要忽略异步操作的各种状态处理","不要设计过于复杂的Props接口","不要为简单组件强制使用容器模式","不要忽略组件的性能优化","不要让组件承担过多的职责"],patterns:["容器-展示组件模式：分离业务逻辑和UI逻辑","自定义Hook模式：抽象和复用业务逻辑","高阶组件模式：为组件添加通用功能","Render Props模式：通过函数prop共享逻辑","Context模式：跨组件共享状态和逻辑","状态机模式：管理复杂的组件状态","观察者模式：处理组件间的通信","策略模式：根据不同条件选择不同的处理逻辑"]}};return e.jsx(y,{...n})};export{F as default};
