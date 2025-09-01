import{r as t,j as e,R as w}from"./index-nevtk0dH.js";import{C as S}from"./ComponentTemplate-CQT_cNgc.js";const T=t.createContext(void 0),U=()=>{const[o,C]=t.useState("light"),[c,g]=t.useState([]),h=a=>{const i=new Date().toLocaleTimeString();g(u=>[...u.slice(-4),`${i}: ${a}`])},m={theme:o,toggleTheme:()=>{const a=o==="light"?"dark":"light";C(a),h(`主题切换为 ${a}`)}},x=({children:a})=>{const i=t.useContext(T);if(!i)throw new Error("ThemedButton must be used within ThemeContext.Provider");const{theme:u,toggleTheme:N}=i;return e.jsx("button",{onClick:N,className:`px-4 py-2 rounded transition-colors ${u==="light"?"bg-blue-500 text-white hover:bg-blue-600":"bg-gray-800 text-white hover:bg-gray-700"}`,children:a})},y=()=>{const a=t.useContext(T);if(!a)return e.jsx("div",{children:"No theme context available"});const{theme:i}=a;return e.jsxs("div",{className:`p-3 rounded border ${i==="light"?"bg-gray-50 border-gray-200 text-gray-800":"bg-gray-900 border-gray-700 text-gray-200"}`,children:[e.jsx("p",{className:"text-sm",children:"深层嵌套组件"}),e.jsxs("p",{className:"text-xs opacity-75",children:["当前主题: ",i]})]})},v=()=>{g([])};return e.jsx(T.Provider,{value:m,children:e.jsxs("div",{className:`p-6 rounded-lg border transition-colors ${o==="light"?"bg-white border-gray-200":"bg-gray-800 border-gray-600"}`,children:[e.jsxs("div",{className:"flex items-center justify-between mb-4",children:[e.jsx("h3",{className:`text-lg font-semibold ${o==="light"?"text-gray-800":"text-gray-200"}`,children:"基础 Context 示例"}),e.jsxs("span",{className:`text-sm ${o==="light"?"text-gray-500":"text-gray-400"}`,children:["当前主题: ",o]})]}),e.jsxs("div",{className:"space-y-4",children:[e.jsxs("div",{className:"flex items-center space-x-4",children:[e.jsx(x,{children:"切换主题"}),e.jsx("button",{onClick:v,className:"px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600 transition-colors",children:"清空日志"})]}),e.jsx(y,{}),e.jsxs("div",{className:`rounded-lg p-4 ${o==="light"?"bg-gray-50 border border-gray-200":"bg-gray-900 border border-gray-700"}`,children:[e.jsx("h4",{className:`font-semibold mb-2 ${o==="light"?"text-gray-800":"text-gray-200"}`,children:"操作日志:"}),c.length===0?e.jsx("p",{className:`text-sm ${o==="light"?"text-gray-500":"text-gray-400"}`,children:"暂无日志"}):e.jsx("div",{className:"space-y-1",children:c.map((a,i)=>e.jsx("div",{className:`text-sm font-mono ${o==="light"?"text-gray-700":"text-gray-300"}`,children:a},i))})]})]}),e.jsx("div",{className:`mt-4 p-3 rounded border ${o==="light"?"bg-blue-50 border-blue-200":"bg-blue-900 border-blue-700"}`,children:e.jsx("p",{className:`text-sm ${o==="light"?"text-blue-800":"text-blue-200"}`,children:"💡 观察主题切换如何影响所有使用 Context 的组件"})})]})})},E=`import React, { useState, useContext, createContext, ReactNode } from 'react';

// 主题上下文
interface ThemeContextType {
  theme: 'light' | 'dark';
  toggleTheme: () => void;
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

// 基础 Context 示例
const BasicContextDemo: React.FC = () => {
  const [theme, setTheme] = useState<'light' | 'dark'>('light');
  const [logs, setLogs] = useState<string[]>([]);

  const addLog = (message: string) => {
    const timestamp = new Date().toLocaleTimeString();
    setLogs(prev => [...prev.slice(-4), \`\${timestamp}: \${message}\`]);
  };

  const toggleTheme = () => {
    const newTheme = theme === 'light' ? 'dark' : 'light';
    setTheme(newTheme);
    addLog(\`主题切换为 \${newTheme}\`);
  };

  const themeValue: ThemeContextType = {
    theme,
    toggleTheme
  };

  // 子组件 - 使用 useContext
  const ThemedButton: React.FC<{ children: ReactNode }> = ({ children }) => {
    const context = useContext(ThemeContext);
    
    if (!context) {
      throw new Error('ThemedButton must be used within ThemeContext.Provider');
    }

    const { theme, toggleTheme } = context;
    
    return (
      <button
        onClick={toggleTheme}
        className={\`px-4 py-2 rounded transition-colors \${
          theme === 'light'
            ? 'bg-blue-500 text-white hover:bg-blue-600'
            : 'bg-gray-800 text-white hover:bg-gray-700'
        }\`}
      >
        {children}
      </button>
    );
  };

  // 深层嵌套组件
  const DeepNestedComponent: React.FC = () => {
    const context = useContext(ThemeContext);
    
    if (!context) {
      return <div>No theme context available</div>;
    }

    const { theme } = context;
    
    return (
      <div className={\`p-3 rounded border \${
        theme === 'light'
          ? 'bg-gray-50 border-gray-200 text-gray-800'
          : 'bg-gray-900 border-gray-700 text-gray-200'
      }\`}>
        <p className="text-sm">深层嵌套组件</p>
        <p className="text-xs opacity-75">当前主题: {theme}</p>
      </div>
    );
  };

  const clearLogs = () => {
    setLogs([]);
  };

  return (
    <ThemeContext.Provider value={themeValue}>
      <div className={\`p-6 rounded-lg border transition-colors \${
        theme === 'light'
          ? 'bg-white border-gray-200'
          : 'bg-gray-800 border-gray-600'
      }\`}>
        <div className="flex items-center justify-between mb-4">
          <h3 className={\`text-lg font-semibold \${
            theme === 'light' ? 'text-gray-800' : 'text-gray-200'
          }\`}>基础 Context 示例</h3>
          <span className={\`text-sm \${
            theme === 'light' ? 'text-gray-500' : 'text-gray-400'
          }\`}>当前主题: {theme}</span>
        </div>
        
        <div className="space-y-4">
          <div className="flex items-center space-x-4">
            <ThemedButton>切换主题</ThemedButton>
            <button
              onClick={clearLogs}
              className="px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600 transition-colors"
            >
              清空日志
            </button>
          </div>
          
          <DeepNestedComponent />
          
          <div className={\`rounded-lg p-4 \${
            theme === 'light'
              ? 'bg-gray-50 border border-gray-200'
              : 'bg-gray-900 border border-gray-700'
          }\`}>
            <h4 className={\`font-semibold mb-2 \${
              theme === 'light' ? 'text-gray-800' : 'text-gray-200'
            }\`}>操作日志:</h4>
            {logs.length === 0 ? (
              <p className={\`text-sm \${
                theme === 'light' ? 'text-gray-500' : 'text-gray-400'
              }\`}>暂无日志</p>
            ) : (
              <div className="space-y-1">
                {logs.map((log, index) => (
                  <div key={index} className={\`text-sm font-mono \${
                    theme === 'light' ? 'text-gray-700' : 'text-gray-300'
                  }\`}>
                    {log}
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
        
        <div className={\`mt-4 p-3 rounded border \${
          theme === 'light'
            ? 'bg-blue-50 border-blue-200'
            : 'bg-blue-900 border-blue-700'
        }\`}>
          <p className={\`text-sm \${
            theme === 'light' ? 'text-blue-800' : 'text-blue-200'
          }\`}>
            💡 观察主题切换如何影响所有使用 Context 的组件
          </p>
        </div>
      </div>
    </ThemeContext.Provider>
  );
};

export default BasicContextDemo;`,$=t.createContext(void 0),k=t.createContext(void 0),V=()=>{const[o,C]=t.useState("light"),[c,g]=t.useState(null),[h,b]=t.useState([]),m=r=>{const d=new Date().toLocaleTimeString();b(n=>[...n.slice(-5),`${d}: ${r}`])},x=()=>{const r=o==="light"?"dark":"light";C(r),m(`主题切换为 ${r}`)},y=r=>{g(r),m(`用户 ${r.name} 登录`)},v=()=>{c&&(m(`用户 ${c.name} 登出`),g(null))},a={theme:o,toggleTheme:x},i={user:c,login:y,logout:v},u=()=>{const r=t.useContext($),d=t.useContext(k);if(!r||!d)return e.jsx("div",{children:"Context not available"});const{theme:n}=r,{user:s,login:l,logout:p}=d,j=()=>{const L=[{id:1,name:"Alice",role:"admin"},{id:2,name:"Bob",role:"user"},{id:3,name:"Charlie",role:"user"}],D=L[Math.floor(Math.random()*L.length)];l(D)};return e.jsxs("div",{className:`p-4 rounded-lg border ${n==="light"?"bg-gray-50 border-gray-200":"bg-gray-900 border-gray-700"}`,children:[e.jsx("h4",{className:`font-semibold mb-3 ${n==="light"?"text-gray-800":"text-gray-200"}`,children:"用户信息"}),s?e.jsxs("div",{className:"space-y-2",children:[e.jsxs("p",{className:`text-sm ${n==="light"?"text-gray-700":"text-gray-300"}`,children:["姓名: ",e.jsx("span",{className:"font-medium",children:s.name})]}),e.jsxs("p",{className:`text-sm ${n==="light"?"text-gray-700":"text-gray-300"}`,children:["角色: ",e.jsx("span",{className:`px-2 py-1 rounded text-xs ${s.role==="admin"?"bg-red-100 text-red-800":"bg-green-100 text-green-800"}`,children:s.role})]}),e.jsx("button",{onClick:p,className:"px-3 py-1 bg-red-500 text-white rounded text-sm hover:bg-red-600 transition-colors",children:"登出"})]}):e.jsxs("div",{className:"space-y-2",children:[e.jsx("p",{className:`text-sm ${n==="light"?"text-gray-500":"text-gray-400"}`,children:"未登录"}),e.jsx("button",{onClick:j,className:"px-3 py-1 bg-green-500 text-white rounded text-sm hover:bg-green-600 transition-colors",children:"随机登录"})]})]})},N=()=>{const r=t.useContext($),d=t.useContext(k);if(!r||!d)return e.jsx("div",{children:"Context not available"});const{theme:n}=r,{user:s}=d,l=(s==null?void 0:s.role)==="admin";return e.jsxs("div",{className:`p-4 rounded-lg border ${n==="light"?"bg-gray-50 border-gray-200":"bg-gray-900 border-gray-700"}`,children:[e.jsx("h4",{className:`font-semibold mb-3 ${n==="light"?"text-gray-800":"text-gray-200"}`,children:"权限控制"}),e.jsxs("div",{className:"space-y-2",children:[e.jsx("div",{className:`p-2 rounded ${l?"bg-green-100 border border-green-200":"bg-red-100 border border-red-200"}`,children:e.jsx("p",{className:`text-sm ${l?"text-green-800":"text-red-800"}`,children:l?"✅ 管理员权限":"❌ 普通用户权限"})}),l&&e.jsx("button",{className:"px-3 py-1 bg-blue-500 text-white rounded text-sm hover:bg-blue-600 transition-colors",children:"管理员操作"})]})]})},f=()=>{b([])};return e.jsx($.Provider,{value:a,children:e.jsx(k.Provider,{value:i,children:e.jsxs("div",{className:`p-6 rounded-lg border transition-colors ${o==="light"?"bg-white border-gray-200":"bg-gray-800 border-gray-600"}`,children:[e.jsxs("div",{className:"flex items-center justify-between mb-4",children:[e.jsx("h3",{className:`text-lg font-semibold ${o==="light"?"text-gray-800":"text-gray-200"}`,children:"多层 Context 示例"}),e.jsxs("div",{className:"flex items-center space-x-2",children:[e.jsx("button",{onClick:x,className:`px-3 py-1 rounded text-sm transition-colors ${o==="light"?"bg-blue-500 text-white hover:bg-blue-600":"bg-gray-700 text-white hover:bg-gray-600"}`,children:"切换主题"}),e.jsx("button",{onClick:f,className:"px-3 py-1 bg-red-500 text-white rounded text-sm hover:bg-red-600 transition-colors",children:"清空日志"})]})]}),e.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-4 mb-4",children:[e.jsx(u,{}),e.jsx(N,{})]}),e.jsxs("div",{className:`rounded-lg p-4 ${o==="light"?"bg-gray-50 border border-gray-200":"bg-gray-900 border border-gray-700"}`,children:[e.jsx("h4",{className:`font-semibold mb-2 ${o==="light"?"text-gray-800":"text-gray-200"}`,children:"操作日志:"}),h.length===0?e.jsx("p",{className:`text-sm ${o==="light"?"text-gray-500":"text-gray-400"}`,children:"暂无日志"}):e.jsx("div",{className:"space-y-1",children:h.map((r,d)=>e.jsx("div",{className:`text-sm font-mono ${o==="light"?"text-gray-700":"text-gray-300"}`,children:r},d))})]})]})})})},I=`import React, { useState, useContext, createContext } from 'react';

// 主题上下文
interface ThemeContextType {
  theme: 'light' | 'dark';
  toggleTheme: () => void;
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

// 用户上下文
interface User {
  id: number;
  name: string;
  role: 'admin' | 'user';
}

interface UserContextType {
  user: User | null;
  login: (user: User) => void;
  logout: () => void;
}

const UserContext = createContext<UserContextType | undefined>(undefined);

// 多层 Context 示例
const MultiContextDemo: React.FC = () => {
  const [theme, setTheme] = useState<'light' | 'dark'>('light');
  const [user, setUser] = useState<User | null>(null);
  const [logs, setLogs] = useState<string[]>([]);

  const addLog = (message: string) => {
    const timestamp = new Date().toLocaleTimeString();
    setLogs(prev => [...prev.slice(-5), \`\${timestamp}: \${message}\`]);
  };

  const toggleTheme = () => {
    const newTheme = theme === 'light' ? 'dark' : 'light';
    setTheme(newTheme);
    addLog(\`主题切换为 \${newTheme}\`);
  };

  const login = (newUser: User) => {
    setUser(newUser);
    addLog(\`用户 \${newUser.name} 登录\`);
  };

  const logout = () => {
    if (user) {
      addLog(\`用户 \${user.name} 登出\`);
      setUser(null);
    }
  };

  const themeValue: ThemeContextType = { theme, toggleTheme };
  const userValue: UserContextType = { user, login, logout };

  // 用户信息组件
  const UserInfo: React.FC = () => {
    const themeContext = useContext(ThemeContext);
    const userContext = useContext(UserContext);
    
    if (!themeContext || !userContext) {
      return <div>Context not available</div>;
    }

    const { theme } = themeContext;
    const { user, login, logout } = userContext;

    const handleLogin = () => {
      const users: User[] = [
        { id: 1, name: 'Alice', role: 'admin' },
        { id: 2, name: 'Bob', role: 'user' },
        { id: 3, name: 'Charlie', role: 'user' }
      ];
      const randomUser = users[Math.floor(Math.random() * users.length)];
      login(randomUser);
    };

    return (
      <div className={\`p-4 rounded-lg border \${
        theme === 'light'
          ? 'bg-gray-50 border-gray-200'
          : 'bg-gray-900 border-gray-700'
      }\`}>
        <h4 className={\`font-semibold mb-3 \${
          theme === 'light' ? 'text-gray-800' : 'text-gray-200'
        }\`}>用户信息</h4>
        
        {user ? (
          <div className="space-y-2">
            <p className={\`text-sm \${
              theme === 'light' ? 'text-gray-700' : 'text-gray-300'
            }\`}>
              姓名: <span className="font-medium">{user.name}</span>
            </p>
            <p className={\`text-sm \${
              theme === 'light' ? 'text-gray-700' : 'text-gray-300'
            }\`}>
              角色: <span className={\`px-2 py-1 rounded text-xs \${
                user.role === 'admin'
                  ? 'bg-red-100 text-red-800'
                  : 'bg-green-100 text-green-800'
              }\`}>{user.role}</span>
            </p>
            <button
              onClick={logout}
              className="px-3 py-1 bg-red-500 text-white rounded text-sm hover:bg-red-600 transition-colors"
            >
              登出
            </button>
          </div>
        ) : (
          <div className="space-y-2">
            <p className={\`text-sm \${
              theme === 'light' ? 'text-gray-500' : 'text-gray-400'
            }\`}>未登录</p>
            <button
              onClick={handleLogin}
              className="px-3 py-1 bg-green-500 text-white rounded text-sm hover:bg-green-600 transition-colors"
            >
              随机登录
            </button>
          </div>
        )}
      </div>
    );
  };

  // 权限组件
  const PermissionComponent: React.FC = () => {
    const themeContext = useContext(ThemeContext);
    const userContext = useContext(UserContext);
    
    if (!themeContext || !userContext) {
      return <div>Context not available</div>;
    }

    const { theme } = themeContext;
    const { user } = userContext;

    const hasAdminPermission = user?.role === 'admin';

    return (
      <div className={\`p-4 rounded-lg border \${
        theme === 'light'
          ? 'bg-gray-50 border-gray-200'
          : 'bg-gray-900 border-gray-700'
      }\`}>
        <h4 className={\`font-semibold mb-3 \${
          theme === 'light' ? 'text-gray-800' : 'text-gray-200'
        }\`}>权限控制</h4>
        
        <div className="space-y-2">
          <div className={\`p-2 rounded \${
            hasAdminPermission
              ? 'bg-green-100 border border-green-200'
              : 'bg-red-100 border border-red-200'
          }\`}>
            <p className={\`text-sm \${
              hasAdminPermission ? 'text-green-800' : 'text-red-800'
            }\`}>
              {hasAdminPermission ? '✅ 管理员权限' : '❌ 普通用户权限'}
            </p>
          </div>
          
          {hasAdminPermission && (
            <button className="px-3 py-1 bg-blue-500 text-white rounded text-sm hover:bg-blue-600 transition-colors">
              管理员操作
            </button>
          )}
        </div>
      </div>
    );
  };

  const clearLogs = () => {
    setLogs([]);
  };

  return (
    <ThemeContext.Provider value={themeValue}>
      <UserContext.Provider value={userValue}>
        <div className={\`p-6 rounded-lg border transition-colors \${
          theme === 'light'
            ? 'bg-white border-gray-200'
            : 'bg-gray-800 border-gray-600'
        }\`}>
          <div className="flex items-center justify-between mb-4">
            <h3 className={\`text-lg font-semibold \${
              theme === 'light' ? 'text-gray-800' : 'text-gray-200'
            }\`}>多层 Context 示例</h3>
            <div className="flex items-center space-x-2">
              <button
                onClick={toggleTheme}
                className={\`px-3 py-1 rounded text-sm transition-colors \${
                  theme === 'light'
                    ? 'bg-blue-500 text-white hover:bg-blue-600'
                    : 'bg-gray-700 text-white hover:bg-gray-600'
                }\`}
              >
                切换主题
              </button>
              <button
                onClick={clearLogs}
                className="px-3 py-1 bg-red-500 text-white rounded text-sm hover:bg-red-600 transition-colors"
              >
                清空日志
              </button>
            </div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
            <UserInfo />
            <PermissionComponent />
          </div>
          
          <div className={\`rounded-lg p-4 \${
            theme === 'light'
              ? 'bg-gray-50 border border-gray-200'
              : 'bg-gray-900 border border-gray-700'
          }\`}>
            <h4 className={\`font-semibold mb-2 \${
              theme === 'light' ? 'text-gray-800' : 'text-gray-200'
            }\`}>操作日志:</h4>
            {logs.length === 0 ? (
              <p className={\`text-sm \${
                theme === 'light' ? 'text-gray-500' : 'text-gray-400'
              }\`}>暂无日志</p>
            ) : (
              <div className="space-y-1">
                {logs.map((log, index) => (
                  <div key={index} className={\`text-sm font-mono \${
                    theme === 'light' ? 'text-gray-700' : 'text-gray-300'
                  }\`}>
                    {log}
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      </UserContext.Provider>
    </ThemeContext.Provider>
  );
};

export default MultiContextDemo;`,R=t.createContext(void 0),P=t.createContext(void 0),B=()=>{const[o,C]=t.useState(0),[c,g]=t.useState("React"),[h,b]=t.useState([]),m=t.useRef({CountDisplay:0,NameDisplay:0,IndependentComponent:0}),x=t.useCallback(n=>{m.current[n]++},[]),y=t.useCallback(()=>{const n=new Date().toLocaleTimeString(),s=[];for(const[l,p]of Object.entries(m.current))p>0&&s.push(`${n}: ${l} 第${p}次渲染`);s.length>0&&b(s)},[]),v=t.useCallback(()=>{C(n=>n+1)},[]),a=t.useCallback(n=>{g(n)},[]),i={count:o,increment:v},u={name:c,setName:a},N=t.memo(()=>{const n=t.useContext(R);if(w.useEffect(()=>{x("CountDisplay")},[]),!n)return e.jsx("div",{children:"Count context not available"});const{count:s,increment:l}=n;return e.jsxs("div",{className:"p-4 bg-blue-50 border border-blue-200 rounded-lg",children:[e.jsx("h4",{className:"font-semibold text-blue-800 mb-2",children:"计数器组件"}),e.jsxs("p",{className:"text-blue-700 mb-2",children:["当前计数: ",e.jsx("span",{className:"font-bold text-xl",children:s})]}),e.jsx("button",{onClick:l,className:"px-3 py-1 bg-blue-500 text-white rounded hover:bg-blue-600 transition-colors",children:"增加计数"}),e.jsx("p",{className:"text-xs text-blue-600 mt-2",children:"✅ 使用 memo 优化，只在 count 变化时重新渲染"})]})}),f=t.memo(()=>{const n=t.useContext(P);if(w.useEffect(()=>{x("NameDisplay")},[]),!n)return e.jsx("div",{children:"Name context not available"});const{name:s,setName:l}=n,p=j=>{l(j.target.value)};return e.jsxs("div",{className:"p-4 bg-green-50 border border-green-200 rounded-lg",children:[e.jsx("h4",{className:"font-semibold text-green-800 mb-2",children:"名称组件"}),e.jsxs("p",{className:"text-green-700 mb-2",children:["当前名称: ",e.jsx("span",{className:"font-bold",children:s})]}),e.jsx("input",{type:"text",value:s,onChange:p,className:"px-2 py-1 border border-green-300 rounded text-sm w-full mb-2",placeholder:"输入名称"}),e.jsx("p",{className:"text-xs text-green-600",children:"✅ 使用 memo 优化，只在 name 变化时重新渲染"})]})}),r=t.memo(()=>{const[n,s]=t.useState(0);return w.useEffect(()=>{x("IndependentComponent")},[]),e.jsxs("div",{className:"p-4 bg-gray-50 border border-gray-200 rounded-lg",children:[e.jsx("h4",{className:"font-semibold text-gray-800 mb-2",children:"独立组件"}),e.jsxs("p",{className:"text-gray-700 mb-2",children:["本地状态: ",e.jsx("span",{className:"font-bold",children:n})]}),e.jsx("button",{onClick:()=>s(l=>l+1),className:"px-3 py-1 bg-gray-500 text-white rounded hover:bg-gray-600 transition-colors",children:"更新本地状态"}),e.jsx("p",{className:"text-xs text-gray-600 mt-2",children:"✅ 不依赖 Context，不会因 Context 变化而重新渲染"})]})}),d=()=>{b([])};return e.jsx(R.Provider,{value:i,children:e.jsx(P.Provider,{value:u,children:e.jsxs("div",{className:"p-6 bg-white border border-gray-200 rounded-lg",children:[e.jsxs("div",{className:"flex items-center justify-between mb-4",children:[e.jsx("h3",{className:"text-lg font-semibold text-gray-800",children:"Context 性能优化示例"}),e.jsxs("div",{className:"flex gap-2",children:[e.jsx("button",{onClick:y,className:"px-3 py-1 bg-blue-500 text-white rounded text-sm hover:bg-blue-600 transition-colors",children:"更新日志"}),e.jsx("button",{onClick:d,className:"px-3 py-1 bg-red-500 text-white rounded text-sm hover:bg-red-600 transition-colors",children:"清空日志"})]})]}),e.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-3 gap-4 mb-4",children:[e.jsx(N,{}),e.jsx(f,{}),e.jsx(r,{})]}),e.jsxs("div",{className:"bg-yellow-50 border border-yellow-200 rounded-lg p-4 mb-4",children:[e.jsx("h4",{className:"font-semibold text-yellow-800 mb-2",children:"性能观察点:"}),e.jsxs("ul",{className:"text-sm text-yellow-700 space-y-1",children:[e.jsx("li",{children:"• 修改计数时，只有 CountDisplay 组件重新渲染"}),e.jsx("li",{children:"• 修改名称时，只有 NameDisplay 组件重新渲染"}),e.jsx("li",{children:"• IndependentComponent 不会因 Context 变化而重新渲染"}),e.jsx("li",{children:"• 使用 React.memo 和 useCallback 避免不必要的渲染"})]})]}),e.jsxs("div",{className:"bg-gray-50 border border-gray-200 rounded-lg p-4",children:[e.jsx("h4",{className:"font-semibold text-gray-800 mb-2",children:"渲染日志:"}),h.length===0?e.jsx("p",{className:"text-sm text-gray-500",children:"暂无渲染记录"}):e.jsx("div",{className:"space-y-1 max-h-40 overflow-y-auto",children:h.map((n,s)=>e.jsx("div",{className:"text-sm font-mono text-gray-700",children:n},s))})]})]})})})},H=`import React, {
  createContext,
  memo,
  useCallback,
  useContext,
  useRef,
  useState,
} from "react";

// 计数器上下文
interface CountContextType {
  count: number;
  increment: () => void;
}

const CountContext = createContext<CountContextType | undefined>(undefined);

// 名称上下文
interface NameContextType {
  name: string;
  setName: (name: string) => void;
}

const NameContext = createContext<NameContextType | undefined>(undefined);

// Context 性能优化示例
const PerformanceDemo: React.FC = () => {
  const [count, setCount] = useState(0);
  const [name, setName] = useState("React");
  const [renderLogs, setRenderLogs] = useState<string[]>([]);
  const renderCountRef = useRef({
    CountDisplay: 0,
    NameDisplay: 0,
    IndependentComponent: 0,
  });

  // 创建一个稳定的函数引用，避免在 useEffect 中调用状态更新
  const addRenderLog = useCallback((componentName: string) => {
    // 只更新 ref，不触发状态更新
    renderCountRef.current[
      componentName as keyof typeof renderCountRef.current
    ]++;
  }, []);

  // 手动更新渲染日志的函数
  const updateRenderLogs = useCallback(() => {
    const timestamp = new Date().toLocaleTimeString();
    const logs = [];

    for (const [componentName, count] of Object.entries(
      renderCountRef.current
    )) {
      if (count > 0) {
        logs.push(\`\${timestamp}: \${componentName} 第\${count}次渲染\`);
      }
    }

    if (logs.length > 0) {
      setRenderLogs(logs);
    }
  }, []);

  const increment = useCallback(() => {
    setCount((prev) => prev + 1);
  }, []);

  const updateName = useCallback((newName: string) => {
    setName(newName);
  }, []);

  const countValue: CountContextType = { count, increment };
  const nameValue: NameContextType = { name, setName: updateName };

  // 计数显示组件 - 使用 memo 优化
  const CountDisplay = memo(() => {
    const context = useContext(CountContext);

    // 记录渲染 - Hook 必须在条件检查之前调用
    React.useEffect(() => {
      addRenderLog("CountDisplay");
    }, []); // 只在组件挂载时执行一次

    if (!context) {
      return <div>Count context not available</div>;
    }

    const { count, increment } = context;

    return (
      <div className="p-4 bg-blue-50 border border-blue-200 rounded-lg">
        <h4 className="font-semibold text-blue-800 mb-2">计数器组件</h4>
        <p className="text-blue-700 mb-2">
          当前计数: <span className="font-bold text-xl">{count}</span>
        </p>
        <button
          onClick={increment}
          className="px-3 py-1 bg-blue-500 text-white rounded hover:bg-blue-600 transition-colors"
        >
          增加计数
        </button>
        <p className="text-xs text-blue-600 mt-2">
          ✅ 使用 memo 优化，只在 count 变化时重新渲染
        </p>
      </div>
    );
  });

  // 名称显示组件 - 使用 memo 优化
  const NameDisplay = memo(() => {
    const context = useContext(NameContext);

    // 记录渲染 - Hook 必须在条件检查之前调用
    React.useEffect(() => {
      addRenderLog("NameDisplay");
    }, []); // 只在组件挂载时执行一次

    if (!context) {
      return <div>Name context not available</div>;
    }

    const { name, setName } = context;

    const handleNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
      setName(e.target.value);
    };

    return (
      <div className="p-4 bg-green-50 border border-green-200 rounded-lg">
        <h4 className="font-semibold text-green-800 mb-2">名称组件</h4>
        <p className="text-green-700 mb-2">
          当前名称: <span className="font-bold">{name}</span>
        </p>
        <input
          type="text"
          value={name}
          onChange={handleNameChange}
          className="px-2 py-1 border border-green-300 rounded text-sm w-full mb-2"
          placeholder="输入名称"
        />
        <p className="text-xs text-green-600">
          ✅ 使用 memo 优化，只在 name 变化时重新渲染
        </p>
      </div>
    );
  });

  // 独立组件 - 不使用任何 Context
  const IndependentComponent = memo(() => {
    const [localState, setLocalState] = useState(0);

    // 记录渲染
    React.useEffect(() => {
      addRenderLog("IndependentComponent");
    }, []); // 只在组件挂载时执行一次

    return (
      <div className="p-4 bg-gray-50 border border-gray-200 rounded-lg">
        <h4 className="font-semibold text-gray-800 mb-2">独立组件</h4>
        <p className="text-gray-700 mb-2">
          本地状态: <span className="font-bold">{localState}</span>
        </p>
        <button
          onClick={() => setLocalState((prev) => prev + 1)}
          className="px-3 py-1 bg-gray-500 text-white rounded hover:bg-gray-600 transition-colors"
        >
          更新本地状态
        </button>
        <p className="text-xs text-gray-600 mt-2">
          ✅ 不依赖 Context，不会因 Context 变化而重新渲染
        </p>
      </div>
    );
  });

  const clearLogs = () => {
    setRenderLogs([]);
  };

  return (
    <CountContext.Provider value={countValue}>
      <NameContext.Provider value={nameValue}>
        <div className="p-6 bg-white border border-gray-200 rounded-lg">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-lg font-semibold text-gray-800">
              Context 性能优化示例
            </h3>
            <div className="flex gap-2">
              <button
                onClick={updateRenderLogs}
                className="px-3 py-1 bg-blue-500 text-white rounded text-sm hover:bg-blue-600 transition-colors"
              >
                更新日志
              </button>
              <button
                onClick={clearLogs}
                className="px-3 py-1 bg-red-500 text-white rounded text-sm hover:bg-red-600 transition-colors"
              >
                清空日志
              </button>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
            <CountDisplay />
            <NameDisplay />
            <IndependentComponent />
          </div>

          <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4 mb-4">
            <h4 className="font-semibold text-yellow-800 mb-2">性能观察点:</h4>
            <ul className="text-sm text-yellow-700 space-y-1">
              <li>• 修改计数时，只有 CountDisplay 组件重新渲染</li>
              <li>• 修改名称时，只有 NameDisplay 组件重新渲染</li>
              <li>• IndependentComponent 不会因 Context 变化而重新渲染</li>
              <li>• 使用 React.memo 和 useCallback 避免不必要的渲染</li>
            </ul>
          </div>

          <div className="bg-gray-50 border border-gray-200 rounded-lg p-4">
            <h4 className="font-semibold text-gray-800 mb-2">渲染日志:</h4>
            {renderLogs.length === 0 ? (
              <p className="text-sm text-gray-500">暂无渲染记录</p>
            ) : (
              <div className="space-y-1 max-h-40 overflow-y-auto">
                {renderLogs.map((log, index) => (
                  <div key={index} className="text-sm font-mono text-gray-700">
                    {log}
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      </NameContext.Provider>
    </CountContext.Provider>
  );
};

export default PerformanceDemo;`,F=()=>e.jsx(S,{title:"useContext",description:"React 中用于消费 Context 的 Hook，提供了一种在组件树中传递数据的方式，避免了 props 层层传递的问题。掌握 Context 创建、提供和消费的完整流程。",overview:e.jsx("div",{className:"space-y-4",children:e.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-6",children:[e.jsxs("div",{className:"bg-blue-50 p-4 rounded-lg border border-blue-200",children:[e.jsx("h3",{className:"font-semibold text-blue-800 mb-2",children:"🎯 核心概念"}),e.jsxs("ul",{className:"text-sm text-blue-700 space-y-1",children:[e.jsx("li",{children:"• Context 的创建和提供"}),e.jsx("li",{children:"• useContext Hook 的使用"}),e.jsx("li",{children:"• 跨组件数据传递"}),e.jsx("li",{children:"• Context 的嵌套和组合"})]})]}),e.jsxs("div",{className:"bg-green-50 p-4 rounded-lg border border-green-200",children:[e.jsx("h3",{className:"font-semibold text-green-800 mb-2",children:"✨ 主要优势"}),e.jsxs("ul",{className:"text-sm text-green-700 space-y-1",children:[e.jsx("li",{children:"• 避免 props 层层传递"}),e.jsx("li",{children:"• 简化组件间通信"}),e.jsx("li",{children:"• 支持多个 Context 组合"}),e.jsx("li",{children:"• 类型安全的数据传递"})]})]}),e.jsxs("div",{className:"bg-yellow-50 p-4 rounded-lg border border-yellow-200",children:[e.jsx("h3",{className:"font-semibold text-yellow-800 mb-2",children:"🎪 适用场景"}),e.jsxs("ul",{className:"text-sm text-yellow-700 space-y-1",children:[e.jsx("li",{children:"• 主题和样式配置"}),e.jsx("li",{children:"• 用户认证信息"}),e.jsx("li",{children:"• 语言国际化设置"}),e.jsx("li",{children:"• 全局应用状态"})]})]}),e.jsxs("div",{className:"bg-red-50 p-4 rounded-lg border border-red-200",children:[e.jsx("h3",{className:"font-semibold text-red-800 mb-2",children:"⚠️ 注意事项"}),e.jsxs("ul",{className:"text-sm text-red-700 space-y-1",children:[e.jsx("li",{children:"• Context 变化会导致所有消费者重新渲染"}),e.jsx("li",{children:"• 避免过度使用 Context"}),e.jsx("li",{children:"• 注意 Context 的性能影响"}),e.jsx("li",{children:"• 合理拆分 Context 避免不必要的渲染"})]})]})]})}),examples:[{title:"基础 Context 使用",component:e.jsx(U,{}),description:"演示 Context 的基本创建、提供和消费流程，以及深层组件的数据访问",observationPoints:["点击切换主题按钮，观察所有组件的主题变化","注意深层嵌套组件如何直接访问 Context 数据","查看操作日志了解 Context 数据的变化过程","观察主题切换时整个组件树的视觉变化"],keyPoints:["使用 createContext 创建 Context 对象","Provider 组件提供 Context 值","useContext Hook 消费 Context 值","Context 值变化时所有消费者都会重新渲染"],commonTraps:["忘记使用 Provider 包裹组件","在 Provider 外部使用 useContext","Context 值频繁变化导致性能问题"],solutions:["始终检查 Context 是否可用","使用自定义 Hook 封装 Context 逻辑","合理拆分 Context 减少不必要的渲染"],codeExample:{code:E,highlights:[8,15,22],title:"基础 Context 使用实现"}},{title:"多层 Context 组合",component:e.jsx(V,{}),description:"演示如何组合使用多个 Context，实现复杂的状态管理和权限控制",observationPoints:["点击随机登录按钮，观察用户信息和权限的变化","切换主题，观察所有组件的主题响应","注意权限组件如何同时使用主题和用户 Context","查看操作日志了解多个 Context 的交互过程"],keyPoints:["可以同时使用多个 Context","Context Provider 可以嵌套使用","组件可以消费多个不同的 Context","不同 Context 之间相互独立"],commonTraps:["Provider 嵌套顺序错误","在错误的层级提供 Context","Context 之间的循环依赖"],solutions:["合理规划 Context 的层级结构","使用组合模式管理多个 Context","避免 Context 之间的紧耦合"],codeExample:{code:I,highlights:[10,18,25],title:"多层 Context 组合实现"}},{title:"Context 性能优化",component:e.jsx(B,{}),description:"演示 Context 的性能特性和优化策略，包括 Context 分离和 React.memo 的使用",observationPoints:["修改计数值，观察只有 CountDisplay 组件重新渲染","修改名称，观察只有 NameDisplay 组件重新渲染","注意 IndependentComponent 不会因为 Context 变化而渲染","查看渲染日志了解组件的渲染行为"],keyPoints:["Context 值变化会导致所有消费者重新渲染","可以通过分离 Context 减少不必要的渲染","React.memo 可以防止不必要的重新渲染","合理的 Context 设计对性能很重要"],commonTraps:["将所有状态放在一个 Context 中","Context 值频繁变化","忘记使用 React.memo 优化组件"],solutions:["按功能拆分 Context","使用 useMemo 稳定 Context 值","合理使用 React.memo 和 useCallback"],codeExample:{code:H,highlights:[12,20,28],title:"Context 性能优化实现"}}],tutorial:{concepts:["Context 的创建、提供和消费三个步骤","useContext Hook 的使用方法和注意事项","Context 与 props 传递的区别和选择","多个 Context 的组合和嵌套使用","Context 的性能特性和优化策略"],steps:["使用 createContext 创建 Context 对象","定义 Context 的 TypeScript 类型接口","创建 Provider 组件提供 Context 值","在需要的组件中使用 useContext 消费数据","添加错误处理确保 Context 可用性","根据需要进行性能优化"],tips:["为 Context 创建自定义 Hook 简化使用","使用 TypeScript 确保 Context 类型安全","合理拆分 Context 避免过度耦合","使用 React DevTools 调试 Context 状态","在开发环境中添加 Context 可用性检查"]},interview:{questions:[{question:"useContext 和 props 传递有什么区别？",answer:"useContext 可以跨越多层组件直接传递数据，避免了 props 层层传递的问题。但 Context 的变化会导致所有消费者重新渲染，而 props 只影响直接的子组件。Context 适合全局状态，props 适合组件间的直接通信。"},{question:"如何优化 Context 的性能？",answer:"1) 按功能拆分 Context，避免将所有状态放在一个 Context 中；2) 使用 React.memo 防止不必要的重新渲染；3) 使用 useMemo 稳定 Context 值；4) 避免在 render 中创建新的 Context 值对象。"},{question:"什么时候应该使用 Context？",answer:"当数据需要在多个层级的组件间共享时，比如主题配置、用户认证信息、语言设置等。不应该用 Context 替代所有的 props 传递，只在确实需要跨层级传递数据时使用。"},{question:"如何处理 Context 的错误情况？",answer:"应该检查 Context 是否为 undefined，并提供有意义的错误信息。可以创建自定义 Hook 来封装这种检查逻辑，确保组件只在正确的 Provider 内部使用。"}],keyPoints:["Context 提供了跨组件传递数据的机制","useContext 简化了 Context 的消费过程","Context 变化会导致所有消费者重新渲染","合理的 Context 设计对性能很重要","应该为 Context 提供类型安全和错误处理"]},bestPractices:{dos:["为 Context 定义清晰的 TypeScript 类型","创建自定义 Hook 封装 Context 逻辑","检查 Context 的可用性并提供错误处理","按功能拆分 Context 避免过度耦合","使用 React.memo 优化 Context 消费者","在 Provider 中使用 useMemo 稳定 Context 值"],donts:["不要将所有状态都放在一个 Context 中","不要在 render 中创建新的 Context 值对象","不要过度使用 Context 替代 props","不要忘记处理 Context 不可用的情况","不要在 Context 中存储频繁变化的数据"],patterns:["Provider 模式：封装 Context 的提供逻辑","自定义 Hook 模式：简化 Context 的使用","Context 组合模式：管理多个相关的 Context","Context 分离模式：按功能拆分不同的 Context"]}});export{F as default};
