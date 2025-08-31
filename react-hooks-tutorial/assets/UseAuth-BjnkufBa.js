import{r as u,j as e}from"./index-DPG_OKoV.js";import{C as b}from"./ComponentTemplate-HXLvd6Xe.js";const v=`import React, { createContext, useContext } from 'react';
import { AuthContextType } from './types';
import { useAuth } from './useAuth';

// 创建认证上下文
export const AuthContext = createContext<AuthContextType | null>(null);

// 认证提供者组件
export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const auth = useAuth();
  return <AuthContext.Provider value={auth}>{children}</AuthContext.Provider>;
};

// 使用认证上下文的 Hook
export const useAuthContext = (): AuthContextType => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error("useAuthContext must be used within an AuthProvider");
  }
  return context;
};`,x={async login(s,t){await new Promise(r=>setTimeout(r,1e3));const o=[{id:"1",username:"admin",password:"admin123",email:"admin@example.com",role:"admin"},{id:"2",username:"user",password:"user123",email:"user@example.com",role:"user"},{id:"3",username:"guest",password:"guest123",email:"guest@example.com",role:"guest"}].find(r=>r.username===s&&r.password===t);if(o){const{password:r,...m}=o;return{success:!0,user:m}}else return{success:!1,error:"用户名或密码错误"}},async register(s){if(await new Promise(r=>setTimeout(r,1200)),s.username==="admin"||s.username==="user")return{success:!1,error:"用户名已存在"};const{password:t,...n}=s;return{success:!0,user:{...n,id:Date.now().toString()}}},async updateProfile(s,t){return await new Promise(n=>setTimeout(n,800)),{success:!0,user:{id:s,username:t.username||"updated_user",email:t.email||"updated@example.com",role:t.role||"user"}}},async getCurrentUser(){return await new Promise(t=>setTimeout(t,500)),localStorage.getItem("auth_token")?{success:!0,user:{id:"1",username:"demo_user",email:"demo@example.com",role:"user"}}:{success:!1}}},g={admin:["read","write","delete","manage_users","manage_system"],user:["read","write"],guest:["read"]},y=(s,t)=>{var n;return s&&((n=g[s])==null?void 0:n.includes(t))||!1};function w(){const[s,t]=u.useState({user:null,isAuthenticated:!1,isLoading:!0,error:null});u.useEffect(()=>{(async()=>{try{const a=await x.getCurrentUser();a.success&&a.user?t({user:a.user,isAuthenticated:!0,isLoading:!1,error:null}):t(i=>({...i,isLoading:!1}))}catch{t(i=>({...i,isLoading:!1,error:"初始化失败"}))}})()},[]);const n=u.useCallback(async(l,a)=>{t(i=>({...i,isLoading:!0,error:null}));try{const i=await x.login(l,a);return i.success&&i.user?(t({user:i.user,isAuthenticated:!0,isLoading:!1,error:null}),localStorage.setItem("auth_token","mock_token_"+i.user.id),!0):(t(h=>({...h,isLoading:!1,error:i.error||"登录失败"})),!1)}catch{return t(h=>({...h,isLoading:!1,error:"网络错误"})),!1}},[]),o=u.useCallback(()=>{t({user:null,isAuthenticated:!1,isLoading:!1,error:null}),localStorage.removeItem("auth_token")},[]),r=u.useCallback(async l=>{t(a=>({...a,isLoading:!0,error:null}));try{const a=await x.register(l);return a.success&&a.user?(t({user:a.user,isAuthenticated:!0,isLoading:!1,error:null}),localStorage.setItem("auth_token","mock_token_"+a.user.id),!0):(t(i=>({...i,isLoading:!1,error:a.error||"注册失败"})),!1)}catch{return t(i=>({...i,isLoading:!1,error:"网络错误"})),!1}},[]),m=u.useCallback(async l=>{if(!s.user)return!1;t(a=>({...a,isLoading:!0,error:null}));try{const a=await x.updateProfile(s.user.id,l);return a.success&&a.user?(t(i=>({...i,user:a.user,isLoading:!1})),!0):(t(i=>({...i,isLoading:!1,error:a.error||"更新失败"})),!1)}catch{return t(i=>({...i,isLoading:!1,error:"网络错误"})),!1}},[s.user]),d=u.useCallback(()=>{t(l=>({...l,error:null}))},[]),c=u.useCallback(l=>{var a;return y((a=s.user)==null?void 0:a.role,l)},[s.user]);return{...s,login:n,logout:o,register:r,updateProfile:m,clearError:d,hasPermission:c}}const f=u.createContext(null),N=({children:s})=>{const t=w();return e.jsx(f.Provider,{value:t,children:s})},p=()=>{const s=u.useContext(f);if(!s)throw new Error("useAuthContext must be used within an AuthProvider");return s},j=()=>{const[s,t]=u.useState(""),[n,o]=u.useState(""),r=p(),m=async d=>{d.preventDefault(),await r.login(s,n)};return e.jsxs("div",{className:"max-w-sm mx-auto p-4 bg-white rounded-lg border",children:[e.jsx("h3",{className:"text-lg font-semibold mb-4",children:"用户登录"}),r.error&&e.jsxs("div",{className:"mb-3 p-2 bg-red-100 border border-red-300 rounded text-red-700 text-sm",children:[r.error,e.jsx("button",{onClick:r.clearError,className:"ml-2 text-red-500 hover:text-red-700",children:"✕"})]}),e.jsxs("form",{onSubmit:m,className:"space-y-3",children:[e.jsx("div",{children:e.jsx("input",{type:"text",value:s,onChange:d=>t(d.target.value.trim()),placeholder:"用户名 (admin/user/guest)",className:"w-full px-3 py-2 border rounded text-sm",disabled:r.isLoading})}),e.jsx("div",{children:e.jsx("input",{type:"password",value:n,onChange:d=>o(d.target.value.trim()),placeholder:"密码 (如: admin123)",className:"w-full px-3 py-2 border rounded text-sm",disabled:r.isLoading})}),e.jsx("button",{type:"submit",disabled:r.isLoading||!s||!n,className:"w-full bg-blue-500 text-white py-2 rounded text-sm hover:bg-blue-600 disabled:opacity-50",children:r.isLoading?"登录中...":"登录"})]}),e.jsxs("div",{className:"mt-3 text-xs text-gray-500",children:[e.jsx("p",{children:"测试账号："}),e.jsx("p",{children:"admin/admin123 (管理员)"}),e.jsx("p",{children:"user/user123 (普通用户)"}),e.jsx("p",{children:"guest/guest123 (访客)"})]})]})},C=()=>{var d;const s=p(),[t,n]=u.useState(!1),[o,r]=u.useState({username:"",email:""});u.useEffect(()=>{s.user&&r({username:s.user.username,email:s.user.email})},[s.user]);const m=async()=>{await s.updateProfile(o)&&n(!1)};return s.user?e.jsxs("div",{className:"max-w-sm mx-auto p-4 bg-white rounded-lg border",children:[e.jsxs("div",{className:"flex justify-between items-center mb-4",children:[e.jsx("h3",{className:"text-lg font-semibold",children:"用户信息"}),e.jsx("button",{onClick:s.logout,className:"text-sm text-red-500 hover:text-red-700",children:"退出登录"})]}),s.error&&e.jsx("div",{className:"mb-3 p-2 bg-red-100 border border-red-300 rounded text-red-700 text-sm",children:s.error}),e.jsxs("div",{className:"space-y-3",children:[e.jsxs("div",{className:"flex items-center justify-between",children:[e.jsx("span",{className:"text-sm font-medium",children:"ID:"}),e.jsx("span",{className:"text-sm text-gray-600",children:s.user.id})]}),e.jsxs("div",{className:"flex items-center justify-between",children:[e.jsx("span",{className:"text-sm font-medium",children:"用户名:"}),t?e.jsx("input",{type:"text",value:o.username,onChange:c=>r(l=>({...l,username:c.target.value})),className:"text-sm border rounded px-2 py-1 w-24"}):e.jsx("span",{className:"text-sm text-gray-600",children:s.user.username})]}),e.jsxs("div",{className:"flex items-center justify-between",children:[e.jsx("span",{className:"text-sm font-medium",children:"邮箱:"}),t?e.jsx("input",{type:"email",value:o.email,onChange:c=>r(l=>({...l,email:c.target.value})),className:"text-sm border rounded px-2 py-1 w-32"}):e.jsx("span",{className:"text-sm text-gray-600",children:s.user.email})]}),e.jsxs("div",{className:"flex items-center justify-between",children:[e.jsx("span",{className:"text-sm font-medium",children:"角色:"}),e.jsx("span",{className:`text-sm px-2 py-1 rounded ${s.user.role==="admin"?"bg-red-100 text-red-700":s.user.role==="user"?"bg-blue-100 text-blue-700":"bg-gray-100 text-gray-700"}`,children:s.user.role})]}),e.jsxs("div",{className:"pt-2 border-t",children:[e.jsx("p",{className:"text-xs text-gray-500 mb-2",children:"权限:"}),e.jsx("div",{className:"flex flex-wrap gap-1",children:(d=g[s.user.role])==null?void 0:d.map(c=>e.jsx("span",{className:"text-xs bg-green-100 text-green-700 px-2 py-1 rounded",children:c},c))})]}),e.jsx("div",{className:"flex gap-2 pt-2",children:t?e.jsxs(e.Fragment,{children:[e.jsx("button",{onClick:m,disabled:s.isLoading,className:"flex-1 bg-green-500 text-white py-1 rounded text-sm hover:bg-green-600 disabled:opacity-50",children:s.isLoading?"更新中...":"保存"}),e.jsx("button",{onClick:()=>n(!1),className:"flex-1 bg-gray-500 text-white py-1 rounded text-sm hover:bg-gray-600",children:"取消"})]}):e.jsx("button",{onClick:()=>n(!0),className:"w-full bg-blue-500 text-white py-1 rounded text-sm hover:bg-blue-600",children:"编辑资料"})})]})]}):null},P=()=>{var n,o;const s=p(),t=["read","write","delete","manage_users","manage_system"];return e.jsxs("div",{className:"max-w-sm mx-auto p-4 bg-gray-50 rounded-lg",children:[e.jsx("h4",{className:"font-semibold mb-3",children:"权限检查"}),s.isAuthenticated?e.jsxs("div",{className:"space-y-2",children:[e.jsxs("p",{className:"text-sm text-gray-600 mb-2",children:["当前用户: ",(n=s.user)==null?void 0:n.username," (",(o=s.user)==null?void 0:o.role,")"]}),t.map(r=>e.jsxs("div",{className:"flex items-center justify-between",children:[e.jsx("span",{className:"text-sm",children:r}),e.jsx("span",{className:`text-xs px-2 py-1 rounded ${s.hasPermission(r)?"bg-green-100 text-green-700":"bg-red-100 text-red-700"}`,children:s.hasPermission(r)?"✓ 允许":"✗ 拒绝"})]},r))]}):e.jsx("p",{className:"text-sm text-gray-500",children:"请先登录以查看权限"})]})},A=()=>e.jsx(N,{children:e.jsx(k,{})}),k=()=>{var t,n,o;const s=p();return s.isLoading?e.jsxs("div",{className:"text-center py-8",children:[e.jsx("div",{className:"inline-block animate-spin rounded-full h-8 w-8 border-b-2 border-blue-500"}),e.jsx("p",{className:"mt-2 text-gray-600",children:"初始化中..."})]}):e.jsx("div",{className:"grid grid-cols-1 md:grid-cols-3 gap-4",children:s.isAuthenticated?e.jsxs(e.Fragment,{children:[e.jsx(C,{}),e.jsx(P,{}),e.jsxs("div",{className:"p-4 bg-green-50 rounded-lg",children:[e.jsx("h4",{className:"font-semibold text-green-800 mb-2",children:"认证状态"}),e.jsxs("div",{className:"space-y-1 text-sm",children:[e.jsx("div",{children:"✅ 已登录"}),e.jsxs("div",{children:["👤 用户: ",(t=s.user)==null?void 0:t.username]}),e.jsxs("div",{children:["🔑 角色: ",(n=s.user)==null?void 0:n.role]}),e.jsxs("div",{children:["📧 邮箱: ",(o=s.user)==null?void 0:o.email]})]})]})]}):e.jsxs(e.Fragment,{children:[e.jsx(j,{}),e.jsx("div",{className:"md:col-span-2 flex items-center justify-center",children:e.jsx("p",{className:"text-gray-500",children:"请登录以查看更多功能"})})]})})},S=`import React from 'react';\r
import { AuthProvider, useAuthContext } from './AuthContext';\r
import { LoginForm } from './LoginForm';\r
import { UserProfile } from './UserProfile';\r
import { PermissionDemo } from './PermissionDemo';\r
\r
// 主演示组件\r
export const AuthDemo: React.FC = () => {\r
  return (\r
    <AuthProvider>\r
      <AuthDemoContent />\r
    </AuthProvider>\r
  );\r
};\r
\r
const AuthDemoContent: React.FC = () => {\r
  const auth = useAuthContext();\r
\r
  if (auth.isLoading) {\r
    return (\r
      <div className="text-center py-8">\r
        <div className="inline-block animate-spin rounded-full h-8 w-8 border-b-2 border-blue-500"></div>\r
        <p className="mt-2 text-gray-600">初始化中...</p>\r
      </div>\r
    );\r
  }\r
\r
  return (\r
    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">\r
      {!auth.isAuthenticated ? (\r
        <>\r
          <LoginForm />\r
          <div className="md:col-span-2 flex items-center justify-center">\r
            <p className="text-gray-500">请登录以查看更多功能</p>\r
          </div>\r
        </>\r
      ) : (\r
        <>\r
          <UserProfile />\r
          <PermissionDemo />\r
          <div className="p-4 bg-green-50 rounded-lg">\r
            <h4 className="font-semibold text-green-800 mb-2">认证状态</h4>\r
            <div className="space-y-1 text-sm">\r
              <div>✅ 已登录</div>\r
              <div>👤 用户: {auth.user?.username}</div>\r
              <div>🔑 角色: {auth.user?.role}</div>\r
              <div>📧 邮箱: {auth.user?.email}</div>\r
            </div>\r
          </div>\r
        </>\r
      )}\r
    </div>\r
  );\r
};`,L=`import React, { useState } from "react";

import { useAuthContext } from "./AuthContext";

// 登录表单组件
export const LoginForm: React.FC = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const auth = useAuthContext();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    await auth.login(username, password);
  };

  return (
    <div className="max-w-sm mx-auto p-4 bg-white rounded-lg border">
      <h3 className="text-lg font-semibold mb-4">用户登录</h3>

      {auth.error && (
        <div className="mb-3 p-2 bg-red-100 border border-red-300 rounded text-red-700 text-sm">
          {auth.error}
          <button
            onClick={auth.clearError}
            className="ml-2 text-red-500 hover:text-red-700"
          >
            ✕
          </button>
        </div>
      )}

      <form onSubmit={handleSubmit} className="space-y-3">
        <div>
          <input
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value.trim())}
            placeholder="用户名 (admin/user/guest)"
            className="w-full px-3 py-2 border rounded text-sm"
            disabled={auth.isLoading}
          />
        </div>

        <div>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value.trim())}
            placeholder="密码 (如: admin123)"
            className="w-full px-3 py-2 border rounded text-sm"
            disabled={auth.isLoading}
          />
        </div>

        <button
          type="submit"
          disabled={auth.isLoading || !username || !password}
          className="w-full bg-blue-500 text-white py-2 rounded text-sm hover:bg-blue-600 disabled:opacity-50"
        >
          {auth.isLoading ? "登录中..." : "登录"}
        </button>
      </form>

      <div className="mt-3 text-xs text-gray-500">
        <p>测试账号：</p>
        <p>admin/admin123 (管理员)</p>
        <p>user/user123 (普通用户)</p>
        <p>guest/guest123 (访客)</p>
      </div>
    </div>
  );
};`,R=`import React from 'react';
import { useAuthContext } from './AuthContext';

// 权限检查组件
export const PermissionDemo: React.FC = () => {
  const auth = useAuthContext();

  const testPermissions = [
    "read",
    "write",
    "delete",
    "manage_users",
    "manage_system",
  ];

  return (
    <div className="max-w-sm mx-auto p-4 bg-gray-50 rounded-lg">
      <h4 className="font-semibold mb-3">权限检查</h4>

      {auth.isAuthenticated ? (
        <div className="space-y-2">
          <p className="text-sm text-gray-600 mb-2">
            当前用户: {auth.user?.username} ({auth.user?.role})
          </p>

          {testPermissions.map((permission) => (
            <div key={permission} className="flex items-center justify-between">
              <span className="text-sm">{permission}</span>
              <span
                className={\`text-xs px-2 py-1 rounded \${
                  auth.hasPermission(permission)
                    ? "bg-green-100 text-green-700"
                    : "bg-red-100 text-red-700"
                }\`}
              >
                {auth.hasPermission(permission) ? "✓ 允许" : "✗ 拒绝"}
              </span>
            </div>
          ))}
        </div>
      ) : (
        <p className="text-sm text-gray-500">请先登录以查看权限</p>
      )}
    </div>
  );
};`,D=`// 用户类型定义\r
export interface User {\r
  id: string;\r
  username: string;\r
  email: string;\r
  role: "admin" | "user" | "guest";\r
  avatar?: string;\r
}\r
\r
// 认证状态类型\r
export interface AuthState {\r
  user: User | null;\r
  isAuthenticated: boolean;\r
  isLoading: boolean;\r
  error: string | null;\r
}\r
\r
// 认证上下文类型\r
export interface AuthContextType extends AuthState {\r
  login: (username: string, password: string) => Promise<boolean>;\r
  logout: () => void;\r
  register: (\r
    userData: Omit<User, "id"> & { password: string }\r
  ) => Promise<boolean>;\r
  updateProfile: (userData: Partial<User>) => Promise<boolean>;\r
  clearError: () => void;\r
  hasPermission: (permission: string) => boolean;\r
}\r
\r
// API 响应类型\r
export interface AuthResponse {\r
  success: boolean;\r
  user?: User;\r
  error?: string;\r
}\r
\r
// 权限配置类型\r
export type UserRole = "admin" | "user" | "guest";\r
export type Permission = "read" | "write" | "delete" | "manage_users" | "manage_system";\r
export type PermissionConfig = Record<UserRole, Permission[]>;`,U=`import React, { useState, useEffect } from 'react';
import { useAuthContext } from './AuthContext';
import { permissions } from './permissions';

// 用户信息组件
export const UserProfile: React.FC = () => {
  const auth = useAuthContext();
  const [isEditing, setIsEditing] = useState(false);
  const [editData, setEditData] = useState({ username: "", email: "" });

  useEffect(() => {
    if (auth.user) {
      setEditData({
        username: auth.user.username,
        email: auth.user.email,
      });
    }
  }, [auth.user]);

  const handleUpdate = async () => {
    const success = await auth.updateProfile(editData);
    if (success) {
      setIsEditing(false);
    }
  };

  if (!auth.user) return null;

  return (
    <div className="max-w-sm mx-auto p-4 bg-white rounded-lg border">
      <div className="flex justify-between items-center mb-4">
        <h3 className="text-lg font-semibold">用户信息</h3>
        <button
          onClick={auth.logout}
          className="text-sm text-red-500 hover:text-red-700"
        >
          退出登录
        </button>
      </div>

      {auth.error && (
        <div className="mb-3 p-2 bg-red-100 border border-red-300 rounded text-red-700 text-sm">
          {auth.error}
        </div>
      )}

      <div className="space-y-3">
        <div className="flex items-center justify-between">
          <span className="text-sm font-medium">ID:</span>
          <span className="text-sm text-gray-600">{auth.user.id}</span>
        </div>

        <div className="flex items-center justify-between">
          <span className="text-sm font-medium">用户名:</span>
          {isEditing ? (
            <input
              type="text"
              value={editData.username}
              onChange={(e) =>
                setEditData((prev) => ({ ...prev, username: e.target.value }))
              }
              className="text-sm border rounded px-2 py-1 w-24"
            />
          ) : (
            <span className="text-sm text-gray-600">{auth.user.username}</span>
          )}
        </div>

        <div className="flex items-center justify-between">
          <span className="text-sm font-medium">邮箱:</span>
          {isEditing ? (
            <input
              type="email"
              value={editData.email}
              onChange={(e) =>
                setEditData((prev) => ({ ...prev, email: e.target.value }))
              }
              className="text-sm border rounded px-2 py-1 w-32"
            />
          ) : (
            <span className="text-sm text-gray-600">{auth.user.email}</span>
          )}
        </div>

        <div className="flex items-center justify-between">
          <span className="text-sm font-medium">角色:</span>
          <span
            className={\`text-sm px-2 py-1 rounded \${
              auth.user.role === "admin"
                ? "bg-red-100 text-red-700"
                : auth.user.role === "user"
                ? "bg-blue-100 text-blue-700"
                : "bg-gray-100 text-gray-700"
            }\`}
          >
            {auth.user.role}
          </span>
        </div>

        <div className="pt-2 border-t">
          <p className="text-xs text-gray-500 mb-2">权限:</p>
          <div className="flex flex-wrap gap-1">
            {permissions[auth.user.role]?.map((permission) => (
              <span
                key={permission}
                className="text-xs bg-green-100 text-green-700 px-2 py-1 rounded"
              >
                {permission}
              </span>
            ))}
          </div>
        </div>

        <div className="flex gap-2 pt-2">
          {isEditing ? (
            <>
              <button
                onClick={handleUpdate}
                disabled={auth.isLoading}
                className="flex-1 bg-green-500 text-white py-1 rounded text-sm hover:bg-green-600 disabled:opacity-50"
              >
                {auth.isLoading ? "更新中..." : "保存"}
              </button>
              <button
                onClick={() => setIsEditing(false)}
                className="flex-1 bg-gray-500 text-white py-1 rounded text-sm hover:bg-gray-600"
              >
                取消
              </button>
            </>
          ) : (
            <button
              onClick={() => setIsEditing(true)}
              className="w-full bg-blue-500 text-white py-1 rounded text-sm hover:bg-blue-600"
            >
              编辑资料
            </button>
          )}
        </div>
      </div>
    </div>
  );
};`,_=`import { User, AuthResponse } from './types';

// 模拟 API 服务
export const mockAuthService = {
  async login(
    username: string,
    password: string
  ): Promise<AuthResponse> {
    // 模拟网络延迟
    await new Promise((resolve) => setTimeout(resolve, 1000));

    // 模拟用户数据
    const users = [
      {
        id: "1",
        username: "admin",
        password: "admin123",
        email: "admin@example.com",
        role: "admin" as const,
      },
      {
        id: "2",
        username: "user",
        password: "user123",
        email: "user@example.com",
        role: "user" as const,
      },
      {
        id: "3",
        username: "guest",
        password: "guest123",
        email: "guest@example.com",
        role: "guest" as const,
      },
    ];

    const user = users.find(
      (u) => u.username === username && u.password === password
    );

    if (user) {
      const { password: _, ...userWithoutPassword } = user;
      return { success: true, user: userWithoutPassword };
    } else {
      return { success: false, error: "用户名或密码错误" };
    }
  },

  async register(
    userData: Omit<User, "id"> & { password: string }
  ): Promise<AuthResponse> {
    await new Promise((resolve) => setTimeout(resolve, 1200));

    // 模拟用户名已存在检查
    if (userData.username === "admin" || userData.username === "user") {
      return { success: false, error: "用户名已存在" };
    }

    const { password: _, ...userWithoutPassword } = userData;
    const newUser = {
      ...userWithoutPassword,
      id: Date.now().toString(),
    };

    return { success: true, user: newUser };
  },

  async updateProfile(
    userId: string,
    userData: Partial<User>
  ): Promise<AuthResponse> {
    await new Promise((resolve) => setTimeout(resolve, 800));

    // 模拟更新成功
    return {
      success: true,
      user: {
        id: userId,
        username: userData.username || "updated_user",
        email: userData.email || "updated@example.com",
        role: userData.role || "user",
      },
    };
  },

  async getCurrentUser(): Promise<{ success: boolean; user?: User }> {
    await new Promise((resolve) => setTimeout(resolve, 500));

    // 模拟从 token 获取用户信息
    const token = localStorage.getItem("auth_token");
    if (token) {
      return {
        success: true,
        user: {
          id: "1",
          username: "demo_user",
          email: "demo@example.com",
          role: "user",
        },
      };
    }

    return { success: false };
  },
};`,E=`import { PermissionConfig } from './types';

// 权限配置
export const permissions: PermissionConfig = {
  admin: ["read", "write", "delete", "manage_users", "manage_system"],
  user: ["read", "write"],
  guest: ["read"],
};

// 权限检查工具函数
export const checkPermission = (userRole: string | undefined, permission: string): boolean => {
  if (!userRole) return false;
  return permissions[userRole as keyof PermissionConfig]?.includes(permission as any) || false;
};

// 获取用户所有权限
export const getUserPermissions = (userRole: string | undefined): string[] => {
  if (!userRole) return [];
  return permissions[userRole as keyof PermissionConfig] || [];
};`,T=`import { useState, useEffect, useCallback } from 'react';
import { AuthState, AuthContextType, User } from './types';
import { mockAuthService } from './mockAuthService';
import { checkPermission } from './permissions';

// 自定义认证 Hook
export function useAuth(): AuthContextType {
  const [state, setState] = useState<AuthState>({
    user: null,
    isAuthenticated: false,
    isLoading: true,
    error: null,
  });

  // 初始化时检查用户状态
  useEffect(() => {
    const initAuth = async () => {
      try {
        const result = await mockAuthService.getCurrentUser();
        if (result.success && result.user) {
          setState({
            user: result.user,
            isAuthenticated: true,
            isLoading: false,
            error: null,
          });
        } else {
          setState((prev) => ({ ...prev, isLoading: false }));
        }
      } catch (error) {
        setState((prev) => ({
          ...prev,
          isLoading: false,
          error: "初始化失败",
        }));
      }
    };

    initAuth();
  }, []);

  const login = useCallback(
    async (username: string, password: string): Promise<boolean> => {
      setState((prev) => ({ ...prev, isLoading: true, error: null }));

      try {
        const result = await mockAuthService.login(username, password);

        if (result.success && result.user) {
          setState({
            user: result.user,
            isAuthenticated: true,
            isLoading: false,
            error: null,
          });

          // 保存 token
          localStorage.setItem("auth_token", "mock_token_" + result.user.id);
          return true;
        } else {
          setState((prev) => ({
            ...prev,
            isLoading: false,
            error: result.error || "登录失败",
          }));
          return false;
        }
      } catch (error) {
        setState((prev) => ({
          ...prev,
          isLoading: false,
          error: "网络错误",
        }));
        return false;
      }
    },
    []
  );

  const logout = useCallback(() => {
    setState({
      user: null,
      isAuthenticated: false,
      isLoading: false,
      error: null,
    });
    localStorage.removeItem("auth_token");
  }, []);

  const register = useCallback(
    async (
      userData: Omit<User, "id"> & { password: string }
    ): Promise<boolean> => {
      setState((prev) => ({ ...prev, isLoading: true, error: null }));

      try {
        const result = await mockAuthService.register(userData);

        if (result.success && result.user) {
          setState({
            user: result.user,
            isAuthenticated: true,
            isLoading: false,
            error: null,
          });

          localStorage.setItem("auth_token", "mock_token_" + result.user.id);
          return true;
        } else {
          setState((prev) => ({
            ...prev,
            isLoading: false,
            error: result.error || "注册失败",
          }));
          return false;
        }
      } catch (error) {
        setState((prev) => ({
          ...prev,
          isLoading: false,
          error: "网络错误",
        }));
        return false;
      }
    },
    []
  );

  const updateProfile = useCallback(
    async (userData: Partial<User>): Promise<boolean> => {
      if (!state.user) return false;

      setState((prev) => ({ ...prev, isLoading: true, error: null }));

      try {
        const result = await mockAuthService.updateProfile(
          state.user.id,
          userData
        );

        if (result.success && result.user) {
          setState((prev) => ({
            ...prev,
            user: result.user,
            isLoading: false,
          }));
          return true;
        } else {
          setState((prev) => ({
            ...prev,
            isLoading: false,
            error: result.error || "更新失败",
          }));
          return false;
        }
      } catch (error) {
        setState((prev) => ({
          ...prev,
          isLoading: false,
          error: "网络错误",
        }));
        return false;
      }
    },
    [state.user]
  );

  const clearError = useCallback(() => {
    setState((prev) => ({ ...prev, error: null }));
  }, []);

  const hasPermission = useCallback(
    (permission: string): boolean => {
      return checkPermission(state.user?.role, permission);
    },
    [state.user]
  );

  return {
    ...state,
    login,
    logout,
    register,
    updateProfile,
    clearError,
    hasPermission,
  };
}`,H=()=>e.jsx(b,{title:"用户认证 Hook",description:"学习如何创建完整的用户认证系统，包括登录、注册、权限管理等功能。",overview:e.jsx("div",{className:"space-y-4",children:e.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-6",children:[e.jsxs("div",{className:"bg-blue-50 p-4 rounded-lg border border-blue-200",children:[e.jsx("h3",{className:"font-semibold text-blue-800 mb-2",children:"🎯 核心概念"}),e.jsxs("ul",{className:"text-sm text-blue-700 space-y-1",children:[e.jsx("li",{children:"• 认证状态管理"}),e.jsx("li",{children:"• 权限控制系统"}),e.jsx("li",{children:"• 会话管理机制"}),e.jsx("li",{children:"• 错误处理策略"})]})]}),e.jsxs("div",{className:"bg-green-50 p-4 rounded-lg border border-green-200",children:[e.jsx("h3",{className:"font-semibold text-green-800 mb-2",children:"✨ 主要优势"}),e.jsxs("ul",{className:"text-sm text-green-700 space-y-1",children:[e.jsx("li",{children:"• 统一的认证状态管理"}),e.jsx("li",{children:"• 灵活的权限控制系统"}),e.jsx("li",{children:"• 良好的用户体验"}),e.jsx("li",{children:"• 安全的会话管理"})]})]}),e.jsxs("div",{className:"bg-yellow-50 p-4 rounded-lg border border-yellow-200",children:[e.jsx("h3",{className:"font-semibold text-yellow-800 mb-2",children:"🎪 适用场景"}),e.jsxs("ul",{className:"text-sm text-yellow-700 space-y-1",children:[e.jsx("li",{children:"• 需要用户登录的应用"}),e.jsx("li",{children:"• 多角色权限管理系统"}),e.jsx("li",{children:"• 企业级管理后台"}),e.jsx("li",{children:"• 社交媒体平台"})]})]}),e.jsxs("div",{className:"bg-red-50 p-4 rounded-lg border border-red-200",children:[e.jsx("h3",{className:"font-semibold text-red-800 mb-2",children:"⚠️ 注意事项"}),e.jsxs("ul",{className:"text-sm text-red-700 space-y-1",children:[e.jsx("li",{children:"• 安全地存储认证令牌"}),e.jsx("li",{children:"• 处理令牌过期和刷新"}),e.jsx("li",{children:"• 实现适当的权限检查"}),e.jsx("li",{children:"• 考虑安全性和用户体验"})]})]})]})}),examples:[{title:"完整的认证系统",component:e.jsx(A,{}),description:"展示一个包含登录、用户信息管理和权限检查的完整认证系统。",observationPoints:["登录后显示用户信息和权限","不同角色具有不同的权限","支持用户信息编辑和更新","实时的认证状态管理"],keyPoints:["useAuth Hook 封装了所有认证逻辑","Context 提供全局的认证状态","基于角色的权限控制系统","安全的令牌存储和管理"],commonTraps:["在本地存储中明文保存敏感信息","没有处理令牌过期","权限检查不够严格","忘记清理认证状态"],solutions:["使用安全的存储方式（如 httpOnly cookies）","实现令牌自动刷新机制","在组件和路由级别进行权限检查","登出时清理所有相关状态"],importantTips:["测试账号：admin/admin123（管理员）、user/user123（用户）、guest/guest123（访客）","不同角色具有不同的权限，可以在权限检查面板中查看","支持用户信息的实时编辑和更新","认证状态会在页面刷新后保持"],preCode:[{title:"types",code:D},{title:"mockAuthService",code:_},{title:"AuthContext",code:v},{title:"useAuth Hook",code:T},{title:"Permissions",code:E},{title:"PermissionDemo",code:R},{title:"UserProfile",code:U},{title:"LoginForm",code:L}],codeExample:{title:"完整的认证系统",code:S}}],tutorial:{concepts:["认证状态包括用户信息、登录状态、加载状态和错误信息","Context 模式用于在组件树中共享认证状态","权限系统基于用户角色进行访问控制","令牌管理包括存储、验证和刷新机制","错误处理需要考虑网络错误、认证失败等情况"],steps:["设计认证状态的数据结构","实现登录、注册和登出功能","创建认证上下文和提供者","实现权限检查和控制逻辑","添加令牌存储和管理","处理认证错误和边界情况"],tips:["使用 useCallback 优化认证函数的性能","合理设计权限系统的粒度","考虑认证状态的持久化","实现适当的错误处理和用户反馈","注意安全性和隐私保护"]},interview:{questions:[{question:"如何设计一个安全的认证系统？",answer:"安全的认证系统需要考虑：1) 使用 HTTPS 传输；2) 安全的密码存储（哈希+盐）；3) JWT 或 session 管理；4) 令牌过期和刷新；5) CSRF 和 XSS 防护；6) 权限控制和访问限制。"},{question:"React 中如何实现权限控制？",answer:"权限控制可以通过：1) 基于角色的访问控制（RBAC）；2) 路由级别的权限检查；3) 组件级别的条件渲染；4) API 级别的权限验证；5) 使用 Context 共享权限状态；6) 高阶组件封装权限逻辑。"},{question:"如何处理认证状态的持久化？",answer:"认证状态持久化方案：1) localStorage/sessionStorage 存储令牌；2) httpOnly cookies 提高安全性；3) 应用启动时验证令牌有效性；4) 实现令牌自动刷新机制；5) 处理多标签页同步；6) 安全地清理过期状态。"},{question:"认证系统的性能优化有哪些？",answer:"性能优化包括：1) 使用 useCallback 缓存认证函数；2) 避免不必要的重新渲染；3) 合理的状态更新策略；4) 异步操作的优化；5) 权限检查的缓存；6) 减少网络请求次数。"}],keyPoints:["认证系统需要考虑安全性和用户体验","权限控制应该在多个层面实现","状态管理要考虑持久化和同步","错误处理和用户反馈很重要","性能优化对用户体验有重要影响"]},bestPractices:{dos:["使用安全的令牌存储方式","实现完整的错误处理机制","设计合理的权限控制系统","提供良好的用户反馈","考虑认证状态的持久化"],donts:["不要在客户端存储敏感信息","不要忽视令牌过期处理","不要过度复杂化权限系统","不要忘记清理认证状态","不要忽视安全性考虑"],patterns:["Context + Hook 的认证模式","基于角色的权限控制模式","令牌自动刷新模式","多层级权限检查模式","认证状态持久化模式"]}});export{H as default};
