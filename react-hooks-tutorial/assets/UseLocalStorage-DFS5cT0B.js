import{r as p,j as e}from"./index-nevtk0dH.js";import{C as D}from"./ComponentTemplate-CQT_cNgc.js";function S(r,u){const[b,y]=p.useState(()=>{try{const i=window.localStorage.getItem(r);return i?JSON.parse(i):u}catch(i){return console.warn(`Error reading localStorage key "${r}":`,i),u}}),h=p.useCallback(i=>{try{const d=i instanceof Function?i(b):i;y(d),window.localStorage.setItem(r,JSON.stringify(d))}catch(d){console.error(`Error setting localStorage key "${r}":`,d)}},[r,b]),x=p.useCallback(()=>{try{window.localStorage.removeItem(r),y(u)}catch(i){console.error(`Error removing localStorage key "${r}":`,i)}},[r,u]);return[b,h,x]}function E(r,u,b={}){const{serializer:y={serialize:JSON.stringify,deserialize:JSON.parse},syncAcrossTabs:h=!1,onError:x}=b,i=p.useRef(y),d=p.useRef(x);i.current=y,d.current=x;const[j,v]=p.useState(u),[N,m]=p.useState(!0),[L,f]=p.useState(null);p.useEffect(()=>{var a;try{const o=window.localStorage.getItem(r);o!==null&&v(i.current.deserialize(o)),f(null)}catch(o){const n=o instanceof Error?o:new Error("Unknown error");f(n),(a=d.current)==null||a.call(d,n)}finally{m(!1)}},[r]),p.useEffect(()=>{if(!h)return;const a=o=>{var n;if(o.key===r&&o.newValue!==null)try{v(i.current.deserialize(o.newValue)),f(null)}catch(g){const l=g instanceof Error?g:new Error("Unknown error");f(l),(n=d.current)==null||n.call(d,l)}};return window.addEventListener("storage",a),()=>window.removeEventListener("storage",a)},[r,h]);const w=p.useCallback(a=>{var o;try{const n=a instanceof Function?a(j):a;v(n),window.localStorage.setItem(r,i.current.serialize(n)),f(null)}catch(n){const g=n instanceof Error?n:new Error("Unknown error");f(g),(o=d.current)==null||o.call(d,g)}},[r,j]),s=p.useCallback(()=>{var a;try{window.localStorage.removeItem(r),v(u),f(null)}catch(o){const n=o instanceof Error?o:new Error("Unknown error");f(n),(a=d.current)==null||a.call(d,n)}},[r,u]);return{value:j,setValue:w,removeValue:s,isLoading:N,error:L}}const P=()=>{const[r,u]=p.useState([]),[b,y]=p.useState([]),h=l=>{const t=new Date().toLocaleTimeString();u(c=>[...c.slice(-4),`${t}: ${l.message}`])},{value:x,setValue:i,removeValue:d,isLoading:j,error:v}=E("app-settings",{autoSave:!0,syncInterval:30,maxHistory:10,compression:!1},{syncAcrossTabs:!0,onError:h}),{value:N,setValue:m,removeValue:L,isLoading:f,error:w}=E("user-profile",{username:"",email:"",avatar:"",lastLogin:null,loginCount:0},{serializer:{serialize:l=>JSON.stringify(l,(t,c)=>c instanceof Date?{__type:"Date",value:c.toISOString()}:c),deserialize:l=>JSON.parse(l,(t,c)=>c&&c.__type==="Date"?new Date(c.value):c)},syncAcrossTabs:!0,onError:h});p.useEffect(()=>{const l=t=>{if(t.key&&(t.key==="app-settings"||t.key==="user-profile")){const c=new Date().toLocaleTimeString();y(C=>[...C.slice(-4),`${c}: ${t.key} 已在其他标签页更新`])}};return window.addEventListener("storage",l),()=>window.removeEventListener("storage",l)},[]);const s=()=>{m(l=>({...l,lastLogin:new Date,loginCount:l.loginCount+1}))},a=()=>{m(l=>({...l,lastLogin:null}))},o=()=>{try{const l="x".repeat(10485760);localStorage.setItem("test-large",l)}catch(l){h(l)}},n=()=>{d(),L(),u([]),y([])},g=()=>{window.open(window.location.href,"_blank")};return j||f?e.jsx("div",{className:"p-6 bg-white rounded-lg border border-gray-200",children:e.jsxs("div",{className:"flex items-center justify-center h-32",children:[e.jsx("div",{className:"animate-spin rounded-full h-8 w-8 border-b-2 border-blue-500"}),e.jsx("span",{className:"ml-2 text-gray-600",children:"加载存储数据中..."})]})}):e.jsxs("div",{className:"p-6 bg-white rounded-lg border border-gray-200",children:[e.jsxs("div",{className:"flex items-center justify-between mb-4",children:[e.jsx("h3",{className:"text-lg font-semibold text-gray-800",children:"高级本地存储演示"}),e.jsxs("div",{className:"space-x-2",children:[e.jsx("button",{onClick:g,className:"px-3 py-1 bg-green-500 text-white rounded text-sm hover:bg-green-600 transition-colors",children:"打开新标签页"}),e.jsx("button",{onClick:o,className:"px-3 py-1 bg-orange-500 text-white rounded text-sm hover:bg-orange-600 transition-colors",children:"模拟错误"}),e.jsx("button",{onClick:n,className:"px-3 py-1 bg-red-500 text-white rounded text-sm hover:bg-red-600 transition-colors",children:"清空数据"})]})]}),e.jsxs("div",{className:"grid grid-cols-1 lg:grid-cols-2 gap-6",children:[e.jsxs("div",{className:"space-y-4",children:[e.jsxs("div",{className:"p-4 bg-blue-50 rounded-lg border border-blue-200",children:[e.jsx("h4",{className:"font-semibold text-blue-800 mb-3",children:"应用设置"}),v&&e.jsxs("div",{className:"mb-3 p-2 bg-red-100 border border-red-300 rounded text-red-700 text-sm",children:["错误: ",v.message]}),e.jsxs("div",{className:"space-y-3",children:[e.jsxs("label",{className:"flex items-center space-x-2",children:[e.jsx("input",{type:"checkbox",checked:x.autoSave,onChange:l=>i(t=>({...t,autoSave:l.target.checked})),className:"text-blue-500 focus:ring-blue-500"}),e.jsx("span",{className:"text-sm text-blue-700",children:"自动保存"})]}),e.jsxs("div",{children:[e.jsxs("label",{className:"block text-sm font-medium text-blue-700 mb-1",children:["同步间隔: ",x.syncInterval,"秒"]}),e.jsx("input",{type:"range",min:"10",max:"300",step:"10",value:x.syncInterval,onChange:l=>i(t=>({...t,syncInterval:Number(l.target.value)})),className:"w-full"})]}),e.jsxs("div",{children:[e.jsxs("label",{className:"block text-sm font-medium text-blue-700 mb-1",children:["最大历史记录: ",x.maxHistory]}),e.jsx("input",{type:"range",min:"5",max:"50",step:"5",value:x.maxHistory,onChange:l=>i(t=>({...t,maxHistory:Number(l.target.value)})),className:"w-full"})]}),e.jsxs("label",{className:"flex items-center space-x-2",children:[e.jsx("input",{type:"checkbox",checked:x.compression,onChange:l=>i(t=>({...t,compression:l.target.checked})),className:"text-blue-500 focus:ring-blue-500"}),e.jsx("span",{className:"text-sm text-blue-700",children:"启用压缩"})]})]})]}),e.jsxs("div",{className:"p-4 bg-green-50 rounded-lg border border-green-200",children:[e.jsx("h4",{className:"font-semibold text-green-800 mb-3",children:"用户资料"}),w&&e.jsxs("div",{className:"mb-3 p-2 bg-red-100 border border-red-300 rounded text-red-700 text-sm",children:["错误: ",w.message]}),e.jsxs("div",{className:"space-y-3",children:[e.jsxs("div",{children:[e.jsx("label",{className:"block text-sm font-medium text-green-700 mb-1",children:"用户名:"}),e.jsx("input",{type:"text",value:N.username,onChange:l=>m(t=>({...t,username:l.target.value})),placeholder:"请输入用户名",className:"w-full px-3 py-2 border border-green-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent"})]}),e.jsxs("div",{children:[e.jsx("label",{className:"block text-sm font-medium text-green-700 mb-1",children:"邮箱:"}),e.jsx("input",{type:"email",value:N.email,onChange:l=>m(t=>({...t,email:l.target.value})),placeholder:"请输入邮箱",className:"w-full px-3 py-2 border border-green-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent"})]}),e.jsxs("div",{className:"flex space-x-2",children:[e.jsx("button",{onClick:s,className:"flex-1 px-3 py-2 bg-green-500 text-white rounded hover:bg-green-600 transition-colors",children:"模拟登录"}),e.jsx("button",{onClick:a,className:"flex-1 px-3 py-2 bg-gray-500 text-white rounded hover:bg-gray-600 transition-colors",children:"模拟登出"})]}),e.jsxs("div",{className:"p-2 bg-green-100 rounded text-sm",children:[e.jsxs("p",{className:"text-green-800",children:[e.jsx("strong",{children:"登录次数:"})," ",N.loginCount]}),e.jsxs("p",{className:"text-green-800",children:[e.jsx("strong",{children:"最后登录:"})," ",N.lastLogin?N.lastLogin.toLocaleString():"从未登录"]})]})]})]})]}),e.jsxs("div",{className:"space-y-4",children:[e.jsxs("div",{children:[e.jsx("h4",{className:"font-semibold text-gray-700 mb-3",children:"存储状态:"}),e.jsx("div",{className:"bg-gray-50 rounded-lg p-3",children:e.jsxs("div",{className:"grid grid-cols-2 gap-4 text-sm",children:[e.jsxs("div",{className:"p-2 bg-blue-100 rounded",children:[e.jsx("p",{className:"font-medium text-blue-800",children:"设置状态:"}),e.jsx("p",{className:`text-sm ${v?"text-red-600":"text-green-600"}`,children:v?"错误":"正常"})]}),e.jsxs("div",{className:"p-2 bg-green-100 rounded",children:[e.jsx("p",{className:"font-medium text-green-800",children:"资料状态:"}),e.jsx("p",{className:`text-sm ${w?"text-red-600":"text-green-600"}`,children:w?"错误":"正常"})]})]})})]}),e.jsxs("div",{children:[e.jsx("h4",{className:"font-semibold text-gray-700 mb-3",children:"跨标签页同步日志:"}),e.jsx("div",{className:"bg-purple-50 rounded-lg p-3 h-24 overflow-y-auto",children:b.length===0?e.jsx("p",{className:"text-purple-500 text-sm",children:"打开新标签页测试同步"}):e.jsx("div",{className:"space-y-1",children:b.map((l,t)=>e.jsx("div",{className:"text-sm font-mono text-purple-700",children:l},t))})})]}),e.jsxs("div",{children:[e.jsx("h4",{className:"font-semibold text-gray-700 mb-3",children:"错误日志:"}),e.jsx("div",{className:"bg-red-50 rounded-lg p-3 h-24 overflow-y-auto",children:r.length===0?e.jsx("p",{className:"text-red-500 text-sm",children:"暂无错误"}):e.jsx("div",{className:"space-y-1",children:r.map((l,t)=>e.jsx("div",{className:"text-sm font-mono text-red-700",children:l},t))})})]}),e.jsxs("div",{className:"p-3 bg-cyan-50 rounded border border-cyan-200",children:[e.jsx("h4",{className:"font-semibold text-cyan-800 mb-2",children:"高级特性:"}),e.jsxs("ul",{className:"text-sm text-cyan-700 space-y-1",children:[e.jsx("li",{children:"• 自定义序列化器支持复杂数据类型"}),e.jsx("li",{children:"• 跨标签页实时同步"}),e.jsx("li",{children:"• 错误处理和状态管理"}),e.jsx("li",{children:"• 加载状态指示"})]})]}),e.jsxs("div",{className:"p-3 bg-teal-50 rounded border border-teal-200",children:[e.jsx("h4",{className:"font-semibold text-teal-800 mb-2",children:"测试说明:"}),e.jsxs("ul",{className:"text-sm text-teal-700 space-y-1",children:[e.jsx("li",{children:"• 修改设置后在新标签页查看同步效果"}),e.jsx("li",{children:'• 点击"模拟错误"测试错误处理'}),e.jsx("li",{children:"• 观察Date对象的序列化和反序列化"}),e.jsx("li",{children:"• 查看加载状态和错误状态的处理"})]})]})]})]}),e.jsx("div",{className:"mt-4 p-3 bg-emerald-50 rounded border border-emerald-200",children:e.jsx("p",{className:"text-sm text-emerald-800",children:"💡 高级 useLocalStorage 提供了完整的错误处理、跨标签页同步、自定义序列化等企业级功能，适用于复杂的数据持久化需求。"})})]})},I=`import React, { useState, useEffect } from 'react';
import { useAdvancedLocalStorage } from './useLocalStorageHook';

const AdvancedLocalStorageDemo: React.FC = () => {
  const [errorLogs, setErrorLogs] = useState<string[]>([]);
  const [syncLogs, setSyncLogs] = useState<string[]>([]);
  
  const handleError = (error: Error) => {
    const timestamp = new Date().toLocaleTimeString();
    setErrorLogs(prev => [...prev.slice(-4), \`\${timestamp}: \${error.message}\`]);
  };

  const {
    value: settings,
    setValue: setSettings,
    removeValue: removeSettings,
    isLoading: settingsLoading,
    error: settingsError
  } = useAdvancedLocalStorage(
    'app-settings',
    {
      autoSave: true,
      syncInterval: 30,
      maxHistory: 10,
      compression: false
    },
    {
      syncAcrossTabs: true,
      onError: handleError
    }
  );

  const {
    value: userProfile,
    setValue: setUserProfile,
    removeValue: removeUserProfile,
    isLoading: profileLoading,
    error: profileError
  } = useAdvancedLocalStorage(
    'user-profile',
    {
      username: '',
      email: '',
      avatar: '',
      lastLogin: null as Date | null,
      loginCount: 0
    },
    {
      serializer: {
        serialize: (value) => {
          // 自定义序列化，处理 Date 对象
          return JSON.stringify(value, (key, val) => {
            if (val instanceof Date) {
              return { __type: 'Date', value: val.toISOString() };
            }
            return val;
          });
        },
        deserialize: (value) => {
          // 自定义反序列化，恢复 Date 对象
          return JSON.parse(value, (key, val) => {
            if (val && val.__type === 'Date') {
              return new Date(val.value);
            }
            return val;
          });
        }
      },
      syncAcrossTabs: true,
      onError: handleError
    }
  );

  // 监听跨标签页同步
  useEffect(() => {
    const handleStorageChange = (e: StorageEvent) => {
      if (e.key && (e.key === 'app-settings' || e.key === 'user-profile')) {
        const timestamp = new Date().toLocaleTimeString();
        setSyncLogs(prev => [...prev.slice(-4), \`\${timestamp}: \${e.key} 已在其他标签页更新\`]);
      }
    };

    window.addEventListener('storage', handleStorageChange);
    return () => window.removeEventListener('storage', handleStorageChange);
  }, []);

  const handleLogin = () => {
    setUserProfile(prev => ({
      ...prev,
      lastLogin: new Date(),
      loginCount: prev.loginCount + 1
    }));
  };

  const handleLogout = () => {
    setUserProfile(prev => ({
      ...prev,
      lastLogin: null
    }));
  };

  const simulateError = () => {
    // 模拟存储错误
    try {
      const largeData = 'x'.repeat(10 * 1024 * 1024); // 10MB 数据
      localStorage.setItem('test-large', largeData);
    } catch (error) {
      handleError(error as Error);
    }
  };

  const clearAllData = () => {
    removeSettings();
    removeUserProfile();
    setErrorLogs([]);
    setSyncLogs([]);
  };

  const openNewTab = () => {
    window.open(window.location.href, '_blank');
  };

  if (settingsLoading || profileLoading) {
    return (
      <div className="p-6 bg-white rounded-lg border border-gray-200">
        <div className="flex items-center justify-center h-32">
          <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-blue-500"></div>
          <span className="ml-2 text-gray-600">加载存储数据中...</span>
        </div>
      </div>
    );
  }

  return (
    <div className="p-6 bg-white rounded-lg border border-gray-200">
      <div className="flex items-center justify-between mb-4">
        <h3 className="text-lg font-semibold text-gray-800">高级本地存储演示</h3>
        <div className="space-x-2">
          <button
            onClick={openNewTab}
            className="px-3 py-1 bg-green-500 text-white rounded text-sm hover:bg-green-600 transition-colors"
          >
            打开新标签页
          </button>
          <button
            onClick={simulateError}
            className="px-3 py-1 bg-orange-500 text-white rounded text-sm hover:bg-orange-600 transition-colors"
          >
            模拟错误
          </button>
          <button
            onClick={clearAllData}
            className="px-3 py-1 bg-red-500 text-white rounded text-sm hover:bg-red-600 transition-colors"
          >
            清空数据
          </button>
        </div>
      </div>
      
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="space-y-4">
          <div className="p-4 bg-blue-50 rounded-lg border border-blue-200">
            <h4 className="font-semibold text-blue-800 mb-3">应用设置</h4>
            {settingsError && (
              <div className="mb-3 p-2 bg-red-100 border border-red-300 rounded text-red-700 text-sm">
                错误: {settingsError.message}
              </div>
            )}
            <div className="space-y-3">
              <label className="flex items-center space-x-2">
                <input
                  type="checkbox"
                  checked={settings.autoSave}
                  onChange={(e) => setSettings(prev => ({ ...prev, autoSave: e.target.checked }))}
                  className="text-blue-500 focus:ring-blue-500"
                />
                <span className="text-sm text-blue-700">自动保存</span>
              </label>
              
              <div>
                <label className="block text-sm font-medium text-blue-700 mb-1">
                  同步间隔: {settings.syncInterval}秒
                </label>
                <input
                  type="range"
                  min="10"
                  max="300"
                  step="10"
                  value={settings.syncInterval}
                  onChange={(e) => setSettings(prev => ({ ...prev, syncInterval: Number(e.target.value) }))}
                  className="w-full"
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-blue-700 mb-1">
                  最大历史记录: {settings.maxHistory}
                </label>
                <input
                  type="range"
                  min="5"
                  max="50"
                  step="5"
                  value={settings.maxHistory}
                  onChange={(e) => setSettings(prev => ({ ...prev, maxHistory: Number(e.target.value) }))}
                  className="w-full"
                />
              </div>
              
              <label className="flex items-center space-x-2">
                <input
                  type="checkbox"
                  checked={settings.compression}
                  onChange={(e) => setSettings(prev => ({ ...prev, compression: e.target.checked }))}
                  className="text-blue-500 focus:ring-blue-500"
                />
                <span className="text-sm text-blue-700">启用压缩</span>
              </label>
            </div>
          </div>
          
          <div className="p-4 bg-green-50 rounded-lg border border-green-200">
            <h4 className="font-semibold text-green-800 mb-3">用户资料</h4>
            {profileError && (
              <div className="mb-3 p-2 bg-red-100 border border-red-300 rounded text-red-700 text-sm">
                错误: {profileError.message}
              </div>
            )}
            <div className="space-y-3">
              <div>
                <label className="block text-sm font-medium text-green-700 mb-1">
                  用户名:
                </label>
                <input
                  type="text"
                  value={userProfile.username}
                  onChange={(e) => setUserProfile(prev => ({ ...prev, username: e.target.value }))}
                  placeholder="请输入用户名"
                  className="w-full px-3 py-2 border border-green-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent"
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-green-700 mb-1">
                  邮箱:
                </label>
                <input
                  type="email"
                  value={userProfile.email}
                  onChange={(e) => setUserProfile(prev => ({ ...prev, email: e.target.value }))}
                  placeholder="请输入邮箱"
                  className="w-full px-3 py-2 border border-green-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent"
                />
              </div>
              
              <div className="flex space-x-2">
                <button
                  onClick={handleLogin}
                  className="flex-1 px-3 py-2 bg-green-500 text-white rounded hover:bg-green-600 transition-colors"
                >
                  模拟登录
                </button>
                <button
                  onClick={handleLogout}
                  className="flex-1 px-3 py-2 bg-gray-500 text-white rounded hover:bg-gray-600 transition-colors"
                >
                  模拟登出
                </button>
              </div>
              
              <div className="p-2 bg-green-100 rounded text-sm">
                <p className="text-green-800">
                  <strong>登录次数:</strong> {userProfile.loginCount}
                </p>
                <p className="text-green-800">
                  <strong>最后登录:</strong> {userProfile.lastLogin ? userProfile.lastLogin.toLocaleString() : '从未登录'}
                </p>
              </div>
            </div>
          </div>
        </div>
        
        <div className="space-y-4">
          <div>
            <h4 className="font-semibold text-gray-700 mb-3">存储状态:</h4>
            <div className="bg-gray-50 rounded-lg p-3">
              <div className="grid grid-cols-2 gap-4 text-sm">
                <div className="p-2 bg-blue-100 rounded">
                  <p className="font-medium text-blue-800">设置状态:</p>
                  <p className={\`text-sm \${
                    settingsError ? 'text-red-600' : 'text-green-600'
                  }\`}>
                    {settingsError ? '错误' : '正常'}
                  </p>
                </div>
                <div className="p-2 bg-green-100 rounded">
                  <p className="font-medium text-green-800">资料状态:</p>
                  <p className={\`text-sm \${
                    profileError ? 'text-red-600' : 'text-green-600'
                  }\`}>
                    {profileError ? '错误' : '正常'}
                  </p>
                </div>
              </div>
            </div>
          </div>
          
          <div>
            <h4 className="font-semibold text-gray-700 mb-3">跨标签页同步日志:</h4>
            <div className="bg-purple-50 rounded-lg p-3 h-24 overflow-y-auto">
              {syncLogs.length === 0 ? (
                <p className="text-purple-500 text-sm">打开新标签页测试同步</p>
              ) : (
                <div className="space-y-1">
                  {syncLogs.map((log, index) => (
                    <div key={index} className="text-sm font-mono text-purple-700">
                      {log}
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>
          
          <div>
            <h4 className="font-semibold text-gray-700 mb-3">错误日志:</h4>
            <div className="bg-red-50 rounded-lg p-3 h-24 overflow-y-auto">
              {errorLogs.length === 0 ? (
                <p className="text-red-500 text-sm">暂无错误</p>
              ) : (
                <div className="space-y-1">
                  {errorLogs.map((log, index) => (
                    <div key={index} className="text-sm font-mono text-red-700">
                      {log}
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>
          
          <div className="p-3 bg-cyan-50 rounded border border-cyan-200">
            <h4 className="font-semibold text-cyan-800 mb-2">高级特性:</h4>
            <ul className="text-sm text-cyan-700 space-y-1">
              <li>• 自定义序列化器支持复杂数据类型</li>
              <li>• 跨标签页实时同步</li>
              <li>• 错误处理和状态管理</li>
              <li>• 加载状态指示</li>
            </ul>
          </div>
          
          <div className="p-3 bg-teal-50 rounded border border-teal-200">
            <h4 className="font-semibold text-teal-800 mb-2">测试说明:</h4>
            <ul className="text-sm text-teal-700 space-y-1">
              <li>• 修改设置后在新标签页查看同步效果</li>
              <li>• 点击"模拟错误"测试错误处理</li>
              <li>• 观察Date对象的序列化和反序列化</li>
              <li>• 查看加载状态和错误状态的处理</li>
            </ul>
          </div>
        </div>
      </div>
      
      <div className="mt-4 p-3 bg-emerald-50 rounded border border-emerald-200">
        <p className="text-sm text-emerald-800">
          💡 高级 useLocalStorage 提供了完整的错误处理、跨标签页同步、自定义序列化等企业级功能，适用于复杂的数据持久化需求。
        </p>
      </div>
    </div>
  );
};

export default AdvancedLocalStorageDemo;`,$=()=>{const[r,u]=S("user-name",""),[b,y]=S("user-age",0),[h,x]=S("user-preferences",{theme:"light",language:"zh-CN",notifications:!0}),[,,i]=S("user-name",""),[,,d]=S("user-age",0),[,,j]=S("user-preferences",{}),[v,N]=p.useState([]),m=t=>{const c=new Date().toLocaleTimeString();N(C=>[...C.slice(-9),`${c}: ${t}`])},L=t=>{u(t),m(`姓名更新: "${t}"`)},f=t=>{y(t),m(`年龄更新: ${t}`)},w=t=>{x(c=>({...c,theme:t})),m(`主题更新: ${t}`)},s=t=>{x(c=>({...c,language:t})),m(`语言更新: ${t}`)},a=t=>{x(c=>({...c,notifications:t})),m(`通知设置: ${t?"开启":"关闭"}`)},o=()=>{i(),d(),j(),m("清空所有数据")},n=()=>{N([])},g=()=>{const t={name:r,age:b,preferences:h,timestamp:new Date().toISOString()},c=new Blob([JSON.stringify(t,null,2)],{type:"application/json"}),C=URL.createObjectURL(c),k=document.createElement("a");k.href=C,k.download="user-data.json",k.click(),URL.revokeObjectURL(C),m("导出用户数据")},l=()=>{let t=0;for(let c in localStorage)localStorage.hasOwnProperty(c)&&(t+=localStorage[c].length+c.length);return(t/1024).toFixed(2)};return e.jsxs("div",{className:"p-6 bg-white rounded-lg border border-gray-200",children:[e.jsxs("div",{className:"flex items-center justify-between mb-4",children:[e.jsx("h3",{className:"text-lg font-semibold text-gray-800",children:"基础本地存储演示"}),e.jsxs("div",{className:"space-x-2",children:[e.jsx("button",{onClick:g,className:"px-3 py-1 bg-blue-500 text-white rounded text-sm hover:bg-blue-600 transition-colors",children:"导出数据"}),e.jsx("button",{onClick:o,className:"px-3 py-1 bg-red-500 text-white rounded text-sm hover:bg-red-600 transition-colors",children:"清空数据"}),e.jsx("button",{onClick:n,className:"px-3 py-1 bg-gray-500 text-white rounded text-sm hover:bg-gray-600 transition-colors",children:"清空日志"})]})]}),e.jsxs("div",{className:"grid grid-cols-1 lg:grid-cols-2 gap-6",children:[e.jsxs("div",{className:"space-y-4",children:[e.jsxs("div",{className:"p-4 bg-blue-50 rounded-lg border border-blue-200",children:[e.jsx("h4",{className:"font-semibold text-blue-800 mb-3",children:"基本信息"}),e.jsxs("div",{className:"space-y-3",children:[e.jsxs("div",{children:[e.jsx("label",{className:"block text-sm font-medium text-blue-700 mb-1",children:"姓名:"}),e.jsx("input",{type:"text",value:r,onChange:t=>L(t.target.value),placeholder:"请输入姓名",className:"w-full px-3 py-2 border border-blue-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"}),e.jsx("p",{className:"text-xs text-blue-600 mt-1",children:"存储键: user-name"})]}),e.jsxs("div",{children:[e.jsxs("label",{className:"block text-sm font-medium text-blue-700 mb-1",children:["年龄: ",b]}),e.jsx("input",{type:"range",min:"0",max:"100",value:b,onChange:t=>f(Number(t.target.value)),className:"w-full"}),e.jsxs("div",{className:"flex justify-between text-xs text-blue-600 mt-1",children:[e.jsx("span",{children:"0岁"}),e.jsx("span",{children:"存储键: user-age"}),e.jsx("span",{children:"100岁"})]})]})]})]}),e.jsxs("div",{className:"p-4 bg-green-50 rounded-lg border border-green-200",children:[e.jsx("h4",{className:"font-semibold text-green-800 mb-3",children:"用户偏好设置"}),e.jsxs("div",{className:"space-y-3",children:[e.jsxs("div",{children:[e.jsx("label",{className:"block text-sm font-medium text-green-700 mb-1",children:"主题:"}),e.jsxs("select",{value:h.theme,onChange:t=>w(t.target.value),className:"w-full px-3 py-2 border border-green-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent",children:[e.jsx("option",{value:"light",children:"浅色主题"}),e.jsx("option",{value:"dark",children:"深色主题"}),e.jsx("option",{value:"auto",children:"自动切换"})]})]}),e.jsxs("div",{children:[e.jsx("label",{className:"block text-sm font-medium text-green-700 mb-1",children:"语言:"}),e.jsxs("select",{value:h.language,onChange:t=>s(t.target.value),className:"w-full px-3 py-2 border border-green-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent",children:[e.jsx("option",{value:"zh-CN",children:"简体中文"}),e.jsx("option",{value:"en-US",children:"English"}),e.jsx("option",{value:"ja-JP",children:"日本語"}),e.jsx("option",{value:"ko-KR",children:"한국어"})]})]}),e.jsx("div",{children:e.jsxs("label",{className:"flex items-center space-x-2",children:[e.jsx("input",{type:"checkbox",checked:h.notifications,onChange:t=>a(t.target.checked),className:"text-green-500 focus:ring-green-500"}),e.jsx("span",{className:"text-sm text-green-700",children:"启用通知"})]})}),e.jsx("p",{className:"text-xs text-green-600",children:"存储键: user-preferences"})]})]}),e.jsxs("div",{className:"p-4 bg-purple-50 rounded-lg border border-purple-200",children:[e.jsx("h4",{className:"font-semibold text-purple-800 mb-3",children:"存储信息"}),e.jsxs("div",{className:"grid grid-cols-2 gap-4 text-sm",children:[e.jsxs("div",{children:[e.jsx("p",{className:"text-purple-700 font-medium",children:"存储项数量:"}),e.jsx("p",{className:"text-xl font-bold text-purple-900",children:Object.keys(localStorage).length})]}),e.jsxs("div",{children:[e.jsx("p",{className:"text-purple-700 font-medium",children:"存储大小:"}),e.jsxs("p",{className:"text-xl font-bold text-purple-900",children:[l()," KB"]})]})]}),e.jsx("div",{className:"mt-3 p-2 bg-purple-100 rounded",children:e.jsxs("p",{className:"text-xs text-purple-800",children:[e.jsx("strong",{children:"浏览器限制:"})," localStorage 通常限制为 5-10MB"]})})]})]}),e.jsxs("div",{className:"space-y-4",children:[e.jsxs("div",{children:[e.jsx("h4",{className:"font-semibold text-gray-700 mb-3",children:"当前存储的数据:"}),e.jsx("div",{className:"bg-gray-50 rounded-lg p-3 h-48 overflow-y-auto",children:e.jsx("pre",{className:"text-sm text-gray-700 whitespace-pre-wrap",children:JSON.stringify({name:r,age:b,preferences:h},null,2)})})]}),e.jsxs("div",{children:[e.jsx("h4",{className:"font-semibold text-gray-700 mb-3",children:"操作日志:"}),e.jsx("div",{className:"bg-blue-50 rounded-lg p-3 h-32 overflow-y-auto",children:v.length===0?e.jsx("p",{className:"text-blue-500 text-sm",children:"开始操作查看日志"}):e.jsx("div",{className:"space-y-1",children:v.map((t,c)=>e.jsx("div",{className:"text-sm font-mono text-blue-700",children:t},c))})})]}),e.jsxs("div",{className:"p-3 bg-yellow-50 rounded border border-yellow-200",children:[e.jsx("h4",{className:"font-semibold text-yellow-800 mb-2",children:"使用说明:"}),e.jsxs("ul",{className:"text-sm text-yellow-700 space-y-1",children:[e.jsx("li",{children:"• 数据自动保存到浏览器本地存储"}),e.jsx("li",{children:"• 刷新页面后数据仍然保持"}),e.jsx("li",{children:"• 支持字符串、数字、对象等类型"}),e.jsx("li",{children:"• 提供删除和导出功能"})]})]}),e.jsxs("div",{className:"p-3 bg-orange-50 rounded border border-orange-200",children:[e.jsx("h4",{className:"font-semibold text-orange-800 mb-2",children:"注意事项:"}),e.jsxs("ul",{className:"text-sm text-orange-700 space-y-1",children:[e.jsx("li",{children:"• localStorage 有存储大小限制"}),e.jsx("li",{children:"• 隐私模式下可能不可用"}),e.jsx("li",{children:"• 用户可以手动清除浏览器数据"}),e.jsx("li",{children:"• 不适合存储敏感信息"})]})]})]})]}),e.jsx("div",{className:"mt-4 p-3 bg-indigo-50 rounded border border-indigo-200",children:e.jsx("p",{className:"text-sm text-indigo-800",children:"💡 useLocalStorage 提供了简单易用的本地存储接口，自动处理序列化和反序列化，支持各种数据类型的持久化存储。"})})]})},T=`import React, { useState } from 'react';
import { useLocalStorage } from './useLocalStorageHook';

const BasicLocalStorageDemo: React.FC = () => {
  const [name, setName] = useLocalStorage('user-name', '');
  const [age, setAge] = useLocalStorage('user-age', 0);
  const [preferences, setPreferences] = useLocalStorage('user-preferences', {
    theme: 'light',
    language: 'zh-CN',
    notifications: true
  });
  const [, , removeName] = useLocalStorage('user-name', '');
  const [, , removeAge] = useLocalStorage('user-age', 0);
  const [, , removePreferences] = useLocalStorage('user-preferences', {});

  const [logs, setLogs] = useState<string[]>([]);

  const addLog = (message: string) => {
    const timestamp = new Date().toLocaleTimeString();
    setLogs(prev => [...prev.slice(-9), \`\${timestamp}: \${message}\`]);
  };

  const handleNameChange = (newName: string) => {
    setName(newName);
    addLog(\`姓名更新: "\${newName}"\`);
  };

  const handleAgeChange = (newAge: number) => {
    setAge(newAge);
    addLog(\`年龄更新: \${newAge}\`);
  };

  const handleThemeChange = (theme: string) => {
    setPreferences(prev => ({ ...prev, theme }));
    addLog(\`主题更新: \${theme}\`);
  };

  const handleLanguageChange = (language: string) => {
    setPreferences(prev => ({ ...prev, language }));
    addLog(\`语言更新: \${language}\`);
  };

  const handleNotificationsChange = (notifications: boolean) => {
    setPreferences(prev => ({ ...prev, notifications }));
    addLog(\`通知设置: \${notifications ? '开启' : '关闭'}\`);
  };

  const clearAllData = () => {
    removeName();
    removeAge();
    removePreferences();
    addLog('清空所有数据');
  };

  const clearLogs = () => {
    setLogs([]);
  };

  const exportData = () => {
    const data = {
      name,
      age,
      preferences,
      timestamp: new Date().toISOString()
    };
    const blob = new Blob([JSON.stringify(data, null, 2)], { type: 'application/json' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'user-data.json';
    a.click();
    URL.revokeObjectURL(url);
    addLog('导出用户数据');
  };

  const getStorageSize = () => {
    let total = 0;
    for (let key in localStorage) {
      if (localStorage.hasOwnProperty(key)) {
        total += localStorage[key].length + key.length;
      }
    }
    return (total / 1024).toFixed(2); // KB
  };

  return (
    <div className="p-6 bg-white rounded-lg border border-gray-200">
      <div className="flex items-center justify-between mb-4">
        <h3 className="text-lg font-semibold text-gray-800">基础本地存储演示</h3>
        <div className="space-x-2">
          <button
            onClick={exportData}
            className="px-3 py-1 bg-blue-500 text-white rounded text-sm hover:bg-blue-600 transition-colors"
          >
            导出数据
          </button>
          <button
            onClick={clearAllData}
            className="px-3 py-1 bg-red-500 text-white rounded text-sm hover:bg-red-600 transition-colors"
          >
            清空数据
          </button>
          <button
            onClick={clearLogs}
            className="px-3 py-1 bg-gray-500 text-white rounded text-sm hover:bg-gray-600 transition-colors"
          >
            清空日志
          </button>
        </div>
      </div>
      
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="space-y-4">
          <div className="p-4 bg-blue-50 rounded-lg border border-blue-200">
            <h4 className="font-semibold text-blue-800 mb-3">基本信息</h4>
            <div className="space-y-3">
              <div>
                <label className="block text-sm font-medium text-blue-700 mb-1">
                  姓名:
                </label>
                <input
                  type="text"
                  value={name}
                  onChange={(e) => handleNameChange(e.target.value)}
                  placeholder="请输入姓名"
                  className="w-full px-3 py-2 border border-blue-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
                <p className="text-xs text-blue-600 mt-1">
                  存储键: user-name
                </p>
              </div>
              
              <div>
                <label className="block text-sm font-medium text-blue-700 mb-1">
                  年龄: {age}
                </label>
                <input
                  type="range"
                  min="0"
                  max="100"
                  value={age}
                  onChange={(e) => handleAgeChange(Number(e.target.value))}
                  className="w-full"
                />
                <div className="flex justify-between text-xs text-blue-600 mt-1">
                  <span>0岁</span>
                  <span>存储键: user-age</span>
                  <span>100岁</span>
                </div>
              </div>
            </div>
          </div>
          
          <div className="p-4 bg-green-50 rounded-lg border border-green-200">
            <h4 className="font-semibold text-green-800 mb-3">用户偏好设置</h4>
            <div className="space-y-3">
              <div>
                <label className="block text-sm font-medium text-green-700 mb-1">
                  主题:
                </label>
                <select
                  value={preferences.theme}
                  onChange={(e) => handleThemeChange(e.target.value)}
                  className="w-full px-3 py-2 border border-green-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent"
                >
                  <option value="light">浅色主题</option>
                  <option value="dark">深色主题</option>
                  <option value="auto">自动切换</option>
                </select>
              </div>
              
              <div>
                <label className="block text-sm font-medium text-green-700 mb-1">
                  语言:
                </label>
                <select
                  value={preferences.language}
                  onChange={(e) => handleLanguageChange(e.target.value)}
                  className="w-full px-3 py-2 border border-green-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent"
                >
                  <option value="zh-CN">简体中文</option>
                  <option value="en-US">English</option>
                  <option value="ja-JP">日本語</option>
                  <option value="ko-KR">한국어</option>
                </select>
              </div>
              
              <div>
                <label className="flex items-center space-x-2">
                  <input
                    type="checkbox"
                    checked={preferences.notifications}
                    onChange={(e) => handleNotificationsChange(e.target.checked)}
                    className="text-green-500 focus:ring-green-500"
                  />
                  <span className="text-sm text-green-700">启用通知</span>
                </label>
              </div>
              
              <p className="text-xs text-green-600">
                存储键: user-preferences
              </p>
            </div>
          </div>
          
          <div className="p-4 bg-purple-50 rounded-lg border border-purple-200">
            <h4 className="font-semibold text-purple-800 mb-3">存储信息</h4>
            <div className="grid grid-cols-2 gap-4 text-sm">
              <div>
                <p className="text-purple-700 font-medium">存储项数量:</p>
                <p className="text-xl font-bold text-purple-900">{Object.keys(localStorage).length}</p>
              </div>
              <div>
                <p className="text-purple-700 font-medium">存储大小:</p>
                <p className="text-xl font-bold text-purple-900">{getStorageSize()} KB</p>
              </div>
            </div>
            <div className="mt-3 p-2 bg-purple-100 rounded">
              <p className="text-xs text-purple-800">
                <strong>浏览器限制:</strong> localStorage 通常限制为 5-10MB
              </p>
            </div>
          </div>
        </div>
        
        <div className="space-y-4">
          <div>
            <h4 className="font-semibold text-gray-700 mb-3">当前存储的数据:</h4>
            <div className="bg-gray-50 rounded-lg p-3 h-48 overflow-y-auto">
              <pre className="text-sm text-gray-700 whitespace-pre-wrap">
                {JSON.stringify({
                  name,
                  age,
                  preferences
                }, null, 2)}
              </pre>
            </div>
          </div>
          
          <div>
            <h4 className="font-semibold text-gray-700 mb-3">操作日志:</h4>
            <div className="bg-blue-50 rounded-lg p-3 h-32 overflow-y-auto">
              {logs.length === 0 ? (
                <p className="text-blue-500 text-sm">开始操作查看日志</p>
              ) : (
                <div className="space-y-1">
                  {logs.map((log, index) => (
                    <div key={index} className="text-sm font-mono text-blue-700">
                      {log}
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>
          
          <div className="p-3 bg-yellow-50 rounded border border-yellow-200">
            <h4 className="font-semibold text-yellow-800 mb-2">使用说明:</h4>
            <ul className="text-sm text-yellow-700 space-y-1">
              <li>• 数据自动保存到浏览器本地存储</li>
              <li>• 刷新页面后数据仍然保持</li>
              <li>• 支持字符串、数字、对象等类型</li>
              <li>• 提供删除和导出功能</li>
            </ul>
          </div>
          
          <div className="p-3 bg-orange-50 rounded border border-orange-200">
            <h4 className="font-semibold text-orange-800 mb-2">注意事项:</h4>
            <ul className="text-sm text-orange-700 space-y-1">
              <li>• localStorage 有存储大小限制</li>
              <li>• 隐私模式下可能不可用</li>
              <li>• 用户可以手动清除浏览器数据</li>
              <li>• 不适合存储敏感信息</li>
            </ul>
          </div>
        </div>
      </div>
      
      <div className="mt-4 p-3 bg-indigo-50 rounded border border-indigo-200">
        <p className="text-sm text-indigo-800">
          💡 useLocalStorage 提供了简单易用的本地存储接口，自动处理序列化和反序列化，支持各种数据类型的持久化存储。
        </p>
      </div>
    </div>
  );
};

export default BasicLocalStorageDemo;`,A=()=>{const[r,u]=S("shopping-cart",[]),[,,b]=S("shopping-cart",[]),[y,h]=p.useState([]),x=[{id:"1",name:"MacBook Pro",price:12999,image:"💻"},{id:"2",name:"iPhone 15",price:5999,image:"📱"},{id:"3",name:"AirPods Pro",price:1899,image:"🎧"},{id:"4",name:"iPad Air",price:4399,image:"📱"},{id:"5",name:"Apple Watch",price:2999,image:"⌚"},{id:"6",name:"Magic Mouse",price:799,image:"🖱️"}],i=s=>{const a=new Date().toLocaleTimeString();h(o=>[...o.slice(-9),`${a}: ${s}`])},d=s=>{u(a=>{if(a.find(n=>n.id===s.id)){const n=a.map(g=>g.id===s.id?{...g,quantity:g.quantity+1}:g);return i(`增加 ${s.name} 数量`),n}else{const n={...s,quantity:1};return i(`添加 ${s.name} 到购物车`),[...a,n]}})},j=s=>{const a=r.find(o=>o.id===s);u(o=>o.filter(n=>n.id!==s)),a&&i(`从购物车移除 ${a.name}`)},v=(s,a)=>{if(a<=0){j(s);return}u(n=>n.map(g=>g.id===s?{...g,quantity:a}:g));const o=r.find(n=>n.id===s);o&&i(`更新 ${o.name} 数量为 ${a}`)},N=()=>r.reduce((s,a)=>s+a.price*a.quantity,0),m=()=>r.reduce((s,a)=>s+a.quantity,0),L=()=>{b(),i("清空购物车")},f=()=>{if(r.length===0){i("购物车为空，无法结算");return}i(`结算成功，总金额: ¥${N().toLocaleString()}`),b()},w=()=>{const s={items:r,totalPrice:N(),totalItems:m(),timestamp:new Date().toISOString()},a=new Blob([JSON.stringify(s,null,2)],{type:"application/json"}),o=URL.createObjectURL(a),n=document.createElement("a");n.href=o,n.download="shopping-cart.json",n.click(),URL.revokeObjectURL(o),i("导出购物车数据")};return e.jsxs("div",{className:"p-6 bg-white rounded-lg border border-gray-200",children:[e.jsxs("div",{className:"flex items-center justify-between mb-4",children:[e.jsxs("h3",{className:"text-lg font-semibold text-gray-800",children:["购物车演示",r.length>0&&e.jsx("span",{className:"ml-2 px-2 py-1 bg-red-500 text-white text-sm rounded-full",children:m()})]}),e.jsxs("div",{className:"space-x-2",children:[e.jsx("button",{onClick:w,disabled:r.length===0,className:"px-3 py-1 bg-blue-500 text-white rounded text-sm hover:bg-blue-600 disabled:opacity-50 disabled:cursor-not-allowed transition-colors",children:"导出购物车"}),e.jsx("button",{onClick:f,disabled:r.length===0,className:"px-3 py-1 bg-green-500 text-white rounded text-sm hover:bg-green-600 disabled:opacity-50 disabled:cursor-not-allowed transition-colors",children:"结算"}),e.jsx("button",{onClick:L,disabled:r.length===0,className:"px-3 py-1 bg-red-500 text-white rounded text-sm hover:bg-red-600 disabled:opacity-50 disabled:cursor-not-allowed transition-colors",children:"清空购物车"})]})]}),e.jsxs("div",{className:"grid grid-cols-1 lg:grid-cols-3 gap-6",children:[e.jsxs("div",{className:"lg:col-span-2",children:[e.jsx("h4",{className:"font-semibold text-gray-700 mb-3",children:"商品列表"}),e.jsx("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-4",children:x.map(s=>{const a=r.find(o=>o.id===s.id);return e.jsx("div",{className:"p-4 border border-gray-200 rounded-lg hover:shadow-md transition-shadow",children:e.jsxs("div",{className:"flex items-center space-x-3",children:[e.jsx("div",{className:"text-3xl",children:s.image}),e.jsxs("div",{className:"flex-1",children:[e.jsx("h5",{className:"font-medium text-gray-800",children:s.name}),e.jsxs("p",{className:"text-lg font-bold text-red-600",children:["¥",s.price.toLocaleString()]}),a&&e.jsxs("p",{className:"text-sm text-green-600",children:["购物车中: ",a.quantity," 件"]})]}),e.jsx("button",{onClick:()=>d(s),className:"px-3 py-1 bg-blue-500 text-white rounded text-sm hover:bg-blue-600 transition-colors",children:"加入购物车"})]})},s.id)})})]}),e.jsxs("div",{className:"space-y-4",children:[e.jsxs("div",{className:"p-4 bg-gray-50 rounded-lg",children:[e.jsx("h4",{className:"font-semibold text-gray-700 mb-3",children:"购物车"}),r.length===0?e.jsx("p",{className:"text-gray-500 text-center py-8",children:"购物车为空"}):e.jsxs("div",{className:"space-y-3",children:[r.map(s=>e.jsxs("div",{className:"flex items-center space-x-2 p-2 bg-white rounded border",children:[e.jsx("div",{className:"text-lg",children:s.image}),e.jsxs("div",{className:"flex-1 min-w-0",children:[e.jsx("p",{className:"text-sm font-medium text-gray-800 truncate",children:s.name}),e.jsxs("p",{className:"text-xs text-gray-600",children:["¥",s.price.toLocaleString()]})]}),e.jsxs("div",{className:"flex items-center space-x-1",children:[e.jsx("button",{onClick:()=>v(s.id,s.quantity-1),className:"w-6 h-6 bg-gray-200 text-gray-600 rounded text-xs hover:bg-gray-300 transition-colors",children:"-"}),e.jsx("span",{className:"w-8 text-center text-sm",children:s.quantity}),e.jsx("button",{onClick:()=>v(s.id,s.quantity+1),className:"w-6 h-6 bg-gray-200 text-gray-600 rounded text-xs hover:bg-gray-300 transition-colors",children:"+"})]}),e.jsx("button",{onClick:()=>j(s.id),className:"w-6 h-6 bg-red-500 text-white rounded text-xs hover:bg-red-600 transition-colors",children:"×"})]},s.id)),e.jsxs("div",{className:"border-t pt-3 mt-3",children:[e.jsxs("div",{className:"flex justify-between items-center text-sm text-gray-600",children:[e.jsx("span",{children:"商品数量:"}),e.jsxs("span",{children:[m()," 件"]})]}),e.jsxs("div",{className:"flex justify-between items-center text-lg font-bold text-gray-800",children:[e.jsx("span",{children:"总价:"}),e.jsxs("span",{className:"text-red-600",children:["¥",N().toLocaleString()]})]})]})]})]}),e.jsxs("div",{children:[e.jsx("h4",{className:"font-semibold text-gray-700 mb-3",children:"操作日志:"}),e.jsx("div",{className:"bg-blue-50 rounded-lg p-3 h-40 overflow-y-auto",children:y.length===0?e.jsx("p",{className:"text-blue-500 text-sm",children:"开始购物查看日志"}):e.jsx("div",{className:"space-y-1",children:y.map((s,a)=>e.jsx("div",{className:"text-sm font-mono text-blue-700",children:s},a))})})]}),e.jsxs("div",{className:"p-3 bg-green-50 rounded border border-green-200",children:[e.jsx("h4",{className:"font-semibold text-green-800 mb-2",children:"购物车特性:"}),e.jsxs("ul",{className:"text-sm text-green-700 space-y-1",children:[e.jsx("li",{children:"• 自动保存到本地存储"}),e.jsx("li",{children:"• 刷新页面后数据保持"}),e.jsx("li",{children:"• 支持数量调整和删除"}),e.jsx("li",{children:"• 实时计算总价和数量"})]})]})]})]}),e.jsx("div",{className:"mt-4 p-3 bg-violet-50 rounded border border-violet-200",children:e.jsx("p",{className:"text-sm text-violet-800",children:"💡 购物车演示展示了 useLocalStorage 在实际业务场景中的应用，包括复杂数据结构的存储、状态管理和用户体验优化。"})})]})},O=`import React, { useState } from 'react';
import { useLocalStorage } from './useLocalStorageHook';

const ShoppingCartDemo: React.FC = () => {
  interface CartItem {
    id: string;
    name: string;
    price: number;
    quantity: number;
    image: string;
  }

  const [cart, setCart] = useLocalStorage<CartItem[]>('shopping-cart', []);
  const [, , clearCart] = useLocalStorage<CartItem[]>('shopping-cart', []);
  const [logs, setLogs] = useState<string[]>([]);

  const products = [
    { id: '1', name: 'MacBook Pro', price: 12999, image: '💻' },
    { id: '2', name: 'iPhone 15', price: 5999, image: '📱' },
    { id: '3', name: 'AirPods Pro', price: 1899, image: '🎧' },
    { id: '4', name: 'iPad Air', price: 4399, image: '📱' },
    { id: '5', name: 'Apple Watch', price: 2999, image: '⌚' },
    { id: '6', name: 'Magic Mouse', price: 799, image: '🖱️' }
  ];

  const addLog = (message: string) => {
    const timestamp = new Date().toLocaleTimeString();
    setLogs(prev => [...prev.slice(-9), \`\${timestamp}: \${message}\`]);
  };

  const addToCart = (product: typeof products[0]) => {
    setCart(prevCart => {
      const existingItem = prevCart.find(item => item.id === product.id);
      if (existingItem) {
        const updatedCart = prevCart.map(item =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
        addLog(\`增加 \${product.name} 数量\`);
        return updatedCart;
      } else {
        const newItem: CartItem = {
          ...product,
          quantity: 1
        };
        addLog(\`添加 \${product.name} 到购物车\`);
        return [...prevCart, newItem];
      }
    });
  };

  const removeFromCart = (productId: string) => {
    const item = cart.find(item => item.id === productId);
    setCart(prevCart => prevCart.filter(item => item.id !== productId));
    if (item) {
      addLog(\`从购物车移除 \${item.name}\`);
    }
  };

  const updateQuantity = (productId: string, quantity: number) => {
    if (quantity <= 0) {
      removeFromCart(productId);
      return;
    }
    
    setCart(prevCart =>
      prevCart.map(item =>
        item.id === productId ? { ...item, quantity } : item
      )
    );
    
    const item = cart.find(item => item.id === productId);
    if (item) {
      addLog(\`更新 \${item.name} 数量为 \${quantity}\`);
    }
  };

  const getTotalPrice = () => {
    return cart.reduce((total, item) => total + item.price * item.quantity, 0);
  };

  const getTotalItems = () => {
    return cart.reduce((total, item) => total + item.quantity, 0);
  };

  const handleClearCart = () => {
    clearCart();
    addLog('清空购物车');
  };

  const handleCheckout = () => {
    if (cart.length === 0) {
      addLog('购物车为空，无法结算');
      return;
    }
    
    addLog(\`结算成功，总金额: ¥\${getTotalPrice().toLocaleString()}\`);
    clearCart();
  };

  const exportCart = () => {
    const cartData = {
      items: cart,
      totalPrice: getTotalPrice(),
      totalItems: getTotalItems(),
      timestamp: new Date().toISOString()
    };
    
    const blob = new Blob([JSON.stringify(cartData, null, 2)], { type: 'application/json' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'shopping-cart.json';
    a.click();
    URL.revokeObjectURL(url);
    addLog('导出购物车数据');
  };

  return (
    <div className="p-6 bg-white rounded-lg border border-gray-200">
      <div className="flex items-center justify-between mb-4">
        <h3 className="text-lg font-semibold text-gray-800">
          购物车演示 
          {cart.length > 0 && (
            <span className="ml-2 px-2 py-1 bg-red-500 text-white text-sm rounded-full">
              {getTotalItems()}
            </span>
          )}
        </h3>
        <div className="space-x-2">
          <button
            onClick={exportCart}
            disabled={cart.length === 0}
            className="px-3 py-1 bg-blue-500 text-white rounded text-sm hover:bg-blue-600 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
          >
            导出购物车
          </button>
          <button
            onClick={handleCheckout}
            disabled={cart.length === 0}
            className="px-3 py-1 bg-green-500 text-white rounded text-sm hover:bg-green-600 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
          >
            结算
          </button>
          <button
            onClick={handleClearCart}
            disabled={cart.length === 0}
            className="px-3 py-1 bg-red-500 text-white rounded text-sm hover:bg-red-600 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
          >
            清空购物车
          </button>
        </div>
      </div>
      
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2">
          <h4 className="font-semibold text-gray-700 mb-3">商品列表</h4>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {products.map(product => {
              const cartItem = cart.find(item => item.id === product.id);
              return (
                <div key={product.id} className="p-4 border border-gray-200 rounded-lg hover:shadow-md transition-shadow">
                  <div className="flex items-center space-x-3">
                    <div className="text-3xl">{product.image}</div>
                    <div className="flex-1">
                      <h5 className="font-medium text-gray-800">{product.name}</h5>
                      <p className="text-lg font-bold text-red-600">¥{product.price.toLocaleString()}</p>
                      {cartItem && (
                        <p className="text-sm text-green-600">
                          购物车中: {cartItem.quantity} 件
                        </p>
                      )}
                    </div>
                    <button
                      onClick={() => addToCart(product)}
                      className="px-3 py-1 bg-blue-500 text-white rounded text-sm hover:bg-blue-600 transition-colors"
                    >
                      加入购物车
                    </button>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
        
        <div className="space-y-4">
          <div className="p-4 bg-gray-50 rounded-lg">
            <h4 className="font-semibold text-gray-700 mb-3">购物车</h4>
            {cart.length === 0 ? (
              <p className="text-gray-500 text-center py-8">购物车为空</p>
            ) : (
              <div className="space-y-3">
                {cart.map(item => (
                  <div key={item.id} className="flex items-center space-x-2 p-2 bg-white rounded border">
                    <div className="text-lg">{item.image}</div>
                    <div className="flex-1 min-w-0">
                      <p className="text-sm font-medium text-gray-800 truncate">{item.name}</p>
                      <p className="text-xs text-gray-600">¥{item.price.toLocaleString()}</p>
                    </div>
                    <div className="flex items-center space-x-1">
                      <button
                        onClick={() => updateQuantity(item.id, item.quantity - 1)}
                        className="w-6 h-6 bg-gray-200 text-gray-600 rounded text-xs hover:bg-gray-300 transition-colors"
                      >
                        -
                      </button>
                      <span className="w-8 text-center text-sm">{item.quantity}</span>
                      <button
                        onClick={() => updateQuantity(item.id, item.quantity + 1)}
                        className="w-6 h-6 bg-gray-200 text-gray-600 rounded text-xs hover:bg-gray-300 transition-colors"
                      >
                        +
                      </button>
                    </div>
                    <button
                      onClick={() => removeFromCart(item.id)}
                      className="w-6 h-6 bg-red-500 text-white rounded text-xs hover:bg-red-600 transition-colors"
                    >
                      ×
                    </button>
                  </div>
                ))}
                
                <div className="border-t pt-3 mt-3">
                  <div className="flex justify-between items-center text-sm text-gray-600">
                    <span>商品数量:</span>
                    <span>{getTotalItems()} 件</span>
                  </div>
                  <div className="flex justify-between items-center text-lg font-bold text-gray-800">
                    <span>总价:</span>
                    <span className="text-red-600">¥{getTotalPrice().toLocaleString()}</span>
                  </div>
                </div>
              </div>
            )}
          </div>
          
          <div>
            <h4 className="font-semibold text-gray-700 mb-3">操作日志:</h4>
            <div className="bg-blue-50 rounded-lg p-3 h-40 overflow-y-auto">
              {logs.length === 0 ? (
                <p className="text-blue-500 text-sm">开始购物查看日志</p>
              ) : (
                <div className="space-y-1">
                  {logs.map((log, index) => (
                    <div key={index} className="text-sm font-mono text-blue-700">
                      {log}
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>
          
          <div className="p-3 bg-green-50 rounded border border-green-200">
            <h4 className="font-semibold text-green-800 mb-2">购物车特性:</h4>
            <ul className="text-sm text-green-700 space-y-1">
              <li>• 自动保存到本地存储</li>
              <li>• 刷新页面后数据保持</li>
              <li>• 支持数量调整和删除</li>
              <li>• 实时计算总价和数量</li>
            </ul>
          </div>
        </div>
      </div>
      
      <div className="mt-4 p-3 bg-violet-50 rounded border border-violet-200">
        <p className="text-sm text-violet-800">
          💡 购物车演示展示了 useLocalStorage 在实际业务场景中的应用，包括复杂数据结构的存储、状态管理和用户体验优化。
        </p>
      </div>
    </div>
  );
};

export default ShoppingCartDemo;`,q=()=>e.jsx(D,{title:"useLocalStorage Hook",description:"一个用于在 React 组件中管理 localStorage 的自定义 Hook，提供类型安全的本地存储解决方案。",overview:e.jsx("div",{className:"space-y-4",children:e.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-6",children:[e.jsxs("div",{className:"bg-blue-50 p-4 rounded-lg border border-blue-200",children:[e.jsx("h3",{className:"font-semibold text-blue-800 mb-2",children:"🎯 核心概念"}),e.jsxs("ul",{className:"text-sm text-blue-700 space-y-1",children:[e.jsx("li",{children:"• 持久化存储"}),e.jsx("li",{children:"• 类型安全"}),e.jsx("li",{children:"• 自动序列化"}),e.jsx("li",{children:"• 错误处理"})]})]}),e.jsxs("div",{className:"bg-green-50 p-4 rounded-lg border border-green-200",children:[e.jsx("h3",{className:"font-semibold text-green-800 mb-2",children:"✨ 主要优势"}),e.jsxs("ul",{className:"text-sm text-green-700 space-y-1",children:[e.jsx("li",{children:"• 简化 localStorage"}),e.jsx("li",{children:"• 自动同步状态"}),e.jsx("li",{children:"• 复杂数据支持"}),e.jsx("li",{children:"• 跨标签页同步"})]})]}),e.jsxs("div",{className:"bg-yellow-50 p-4 rounded-lg border border-yellow-200",children:[e.jsx("h3",{className:"font-semibold text-yellow-800 mb-2",children:"🎪 适用场景"}),e.jsxs("ul",{className:"text-sm text-yellow-700 space-y-1",children:[e.jsx("li",{children:"• 用户偏好设置"}),e.jsx("li",{children:"• 表单数据保存"}),e.jsx("li",{children:"• 购物车缓存"}),e.jsx("li",{children:"• 配置信息"})]})]}),e.jsxs("div",{className:"bg-red-50 p-4 rounded-lg border border-red-200",children:[e.jsx("h3",{className:"font-semibold text-red-800 mb-2",children:"⚠️ 注意事项"}),e.jsxs("ul",{className:"text-sm text-red-700 space-y-1",children:[e.jsx("li",{children:"• 存储大小限制"}),e.jsx("li",{children:"• 字符串存储"}),e.jsx("li",{children:"• 安全性考虑"}),e.jsx("li",{children:"• SSR 兼容性"})]})]})]})}),examples:[{title:"基础本地存储演示",component:e.jsx($,{}),description:"展示 useLocalStorage 的基本功能，包括数据存储、读取、更新和删除操作。",codeExample:{code:T,language:"typescript",highlights:"5,6,7,8,9,10,11,14,16,17,18,19,20,21,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45"},observationPoints:["修改计数器值，刷新页面观察数据保持","切换主题和语言设置，查看实时更新效果","填写用户信息并保存，测试复杂对象存储","使用重置按钮清除数据，观察状态变化","查看页面底部的存储状态实时显示"],keyPoints:["useLocalStorage 返回 [value, setValue, removeValue] 三元组","支持函数式更新，如 setValue(prev => prev + 1)","自动处理 JSON 序列化和反序列化","提供类型安全的存储操作","数据在页面刷新后自动恢复"],commonTraps:["忘记处理 localStorage 不可用的情况","存储过大的对象导致性能问题","没有提供合理的默认值","忽略序列化错误的处理"],solutions:["使用 try-catch 包装 localStorage 操作","限制存储数据的大小和复杂度","为所有存储项提供合理的初始值","实现错误处理和用户反馈机制"],importantTips:["localStorage 数据在浏览器关闭后仍然保持","数据在同域的所有标签页间共享","适合存储用户偏好、设置等持久化数据","不要存储敏感信息，数据可被用户查看"]},{title:"高级本地存储演示",component:e.jsx(P,{}),description:"演示高级功能，包括自定义序列化、跨标签页同步和错误处理。",codeExample:{code:I,language:"typescript",highlights:"4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,37,38,39,40,41,42,43,44,45,46,47,48,49,50"},observationPoints:["打开新标签页，修改数据观察同步效果","点击模拟错误按钮，查看错误处理机制","观察Date对象的自定义序列化和反序列化","查看加载状态和错误状态的显示","测试跨标签页同步日志的记录"],keyPoints:["自定义序列化器支持复杂数据类型","跨标签页同步保持数据一致性","完整的错误处理和状态管理","加载状态提供更好的用户体验"],commonTraps:["自定义序列化器实现错误","跨标签页同步事件处理不当","错误处理不完整导致应用崩溃"],solutions:["仔细测试序列化和反序列化逻辑","正确监听storage事件并处理边界情况","提供完整的错误处理和用户反馈"]},{title:"购物车演示",component:e.jsx(A,{}),description:"实际业务场景演示，展示购物车数据的持久化存储和管理。",codeExample:{code:O,language:"typescript",highlights:"17,18,19,20,21,22,23,44,45,46,47,48,49,50,51,52,53,54,55,56,57,58,59,60,61,62,63,64,65,66,67,68,69,70,71,72,73,74,75,76,77,78"},observationPoints:["添加商品到购物车，刷新页面观察数据保持","调整商品数量，观察实时计算和存储更新","查看操作日志记录的详细信息","测试导出购物车数据功能","观察购物车状态的实时反馈"],keyPoints:["复杂业务数据的结构化存储","实时状态更新和计算","用户操作的完整记录","数据导出和备份功能"],commonTraps:["购物车数据结构设计不合理","状态更新逻辑复杂容易出错","没有考虑数据迁移和兼容性"],solutions:["设计清晰的数据结构和接口","使用函数式更新确保状态一致性","考虑版本控制和数据迁移策略"]}],tutorial:{concepts:["localStorage 的基本概念和浏览器支持情况","JSON 序列化和反序列化的原理和限制","React Hook 的状态管理和副作用处理","跨标签页通信和 storage 事件机制","错误处理和用户体验优化策略"],steps:["创建状态存储当前值","实现从 localStorage 读取初始值的逻辑","创建设置值的函数，包含序列化和存储","添加删除值的功能","实现错误处理和边界情况处理","添加高级功能如自定义序列化和跨标签页同步"],tips:["使用 try-catch 包装所有 localStorage 操作","提供合理的默认值和初始状态","考虑存储大小限制和性能影响","使用 TypeScript 提供类型安全","实现数据迁移和版本兼容性"]},interview:{questions:[{question:"localStorage 和 sessionStorage 的区别是什么？",answer:"localStorage 数据持久存储，直到用户手动清除或代码删除；sessionStorage 数据仅在当前会话有效，关闭标签页后清除。localStorage 在同域的所有标签页间共享，sessionStorage 仅限当前标签页。两者都有相同的API和存储限制。"},{question:"如何处理 localStorage 的存储限制和错误？",answer:"1. 监控存储使用量，接近限制时清理旧数据；2. 使用 try-catch 捕获 QuotaExceededError；3. 实现数据压缩和优化策略；4. 提供降级方案如内存存储；5. 给用户提供清理存储的选项。"},{question:"useLocalStorage 如何实现跨标签页同步？",answer:"通过监听 window 的 storage 事件实现。当一个标签页修改 localStorage 时，其他标签页会收到 storage 事件通知。在事件处理函数中检查变更的 key，如果匹配则更新本地状态。需要注意的是，触发变更的标签页本身不会收到事件。"},{question:"如何优化 localStorage 的性能？",answer:"1. 减少读写频率，批量操作；2. 使用防抖延迟写入；3. 压缩存储数据；4. 避免存储大量数据；5. 使用 Web Workers 处理大数据序列化；6. 实现智能缓存策略；7. 定期清理过期数据。"},{question:"localStorage 在 SSR 应用中需要注意什么？",answer:"1. 服务端没有 localStorage，需要检查环境；2. 使用 useEffect 在客户端初始化；3. 避免服务端和客户端状态不一致；4. 考虑使用 cookie 或其他方案作为 SSR 兼容的替代；5. 实现渐进式增强策略。"}],keyPoints:["localStorage 是同步 API，大量数据操作可能阻塞主线程","存储限制通常为 5-10MB，不同浏览器可能有差异","数据以字符串形式存储，需要序列化复杂对象","隐私模式、存储已满等情况下可能抛出异常","跨标签页同步通过 storage 事件实现","不适合存储敏感信息，数据可被用户查看和修改"]},bestPractices:{dos:["使用 try-catch 包装所有 localStorage 操作","提供合理的默认值和初始状态","实现数据验证和类型检查","使用 TypeScript 提供类型安全","考虑数据迁移和版本兼容性","监控存储使用量，避免超出限制","使用防抖优化频繁的写入操作","提供清理和重置功能","实现错误处理和用户反馈","考虑 SSR 兼容性问题"],donts:["不要存储敏感信息如密码、token","不要假设 localStorage 总是可用","不要存储过大的数据对象","不要忽略序列化错误和异常","不要在服务端代码中直接使用","不要存储函数或复杂对象原型","不要频繁进行大量数据的读写操作","不要依赖 localStorage 进行关键业务逻辑","不要忽略浏览器兼容性问题","不要存储临时或一次性数据"],patterns:["数据持久化模式：用户偏好、设置、缓存数据","状态恢复模式：表单数据、应用状态备份","离线存储模式：离线数据缓存、同步队列","跨会话共享模式：多标签页数据同步","渐进增强模式：基础功能 + localStorage 增强","数据迁移模式：版本升级时的数据转换","缓存失效模式：TTL、LRU 等缓存策略","错误恢复模式：存储失败时的降级方案"]}});export{q as default};
