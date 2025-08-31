import{r as i,j as e}from"./index-DPG_OKoV.js";import{C as $}from"./ComponentTemplate-HXLvd6Xe.js";function w(r,N={}){const[a,m]=i.useState(null),[l,o]=i.useState(!1),[n,g]=i.useState(null),d=i.useRef(null),{method:y="GET",headers:p={},body:u,dependencies:t=[],enabled:b=!0}=N,v=i.useCallback(async(f=!1)=>{if(!(!b&&!f)){d.current&&d.current.abort(),d.current=new AbortController,o(!0),g(null);try{if(await new Promise(s=>setTimeout(s,1e3+Math.random()*1e3)),Math.random()<.2)throw new Error("网络请求失败");let x;if(r.includes("users")){const s=r.split("/").pop();s&&s!=="users"?x={id:parseInt(s),name:`用户${s}`,email:`user${s}@example.com`,avatar:`https://api.dicebear.com/7.x/avataaars/svg?seed=${s}`,status:"active",joinDate:new Date().toISOString(),lastLogin:new Date().toISOString()}:x={users:Array.from({length:5},(h,j)=>({id:j+1,name:`用户${j+1}`,email:`user${j+1}@example.com`,avatar:`https://api.dicebear.com/7.x/avataaars/svg?seed=${j+1}`}))}}else r.includes("posts")?x={posts:Array.from({length:3},(s,h)=>({id:h+1,title:`文章标题${h+1}`,content:`这是第${h+1}篇文章的内容，包含了丰富的信息和有趣的观点。`,author:`作者${h+1}`,createdAt:new Date(Date.now()-h*24*60*60*1e3).toISOString()}))}:x={message:"请求成功",timestamp:new Date().toISOString()};m(x)}catch(x){x.name!=="AbortError"&&g(x.message||"请求失败")}finally{o(!1)}}},[r,y,JSON.stringify(p),JSON.stringify(u),b,...t]),c=i.useCallback(()=>{v(!0)},[v]);return i.useEffect(()=>(v(),()=>{d.current&&d.current.abort()}),[v]),{data:a,loading:l,error:n,refetch:c}}const C=()=>{const[r,N]=i.useState("/api/users"),{data:a,loading:m,error:l,refetch:o}=w(r),[n,g]=i.useState([]),d=t=>{const b=new Date().toLocaleTimeString();g(v=>[...v.slice(-9),`${b}: ${t}`])};i.useEffect(()=>{m?d(`开始请求: ${r}`):l?d(`请求失败: ${l}`):a&&d("请求成功: 获取到数据")},[m,l,a,r]);const y=t=>{N(t),d(`切换端点: ${t}`)},p=()=>{d("手动重新请求"),o()},u=()=>{g([])};return e.jsxs("div",{className:"p-6 bg-white rounded-lg border border-gray-200",children:[e.jsxs("div",{className:"flex items-center justify-between mb-4",children:[e.jsx("h3",{className:"text-lg font-semibold text-gray-800",children:"基础用法演示"}),e.jsxs("div",{className:"space-x-2",children:[e.jsx("button",{onClick:p,disabled:m,className:"px-3 py-1 bg-blue-500 text-white rounded text-sm hover:bg-blue-600 disabled:opacity-50 disabled:cursor-not-allowed transition-colors",children:m?"请求中...":"重新请求"}),e.jsx("button",{onClick:u,className:"px-3 py-1 bg-gray-500 text-white rounded text-sm hover:bg-gray-600 transition-colors",children:"清空日志"})]})]}),e.jsxs("div",{className:"grid grid-cols-1 lg:grid-cols-2 gap-6",children:[e.jsxs("div",{className:"space-y-4",children:[e.jsxs("div",{children:[e.jsx("label",{className:"block text-sm font-medium text-gray-700 mb-2",children:"选择 API 端点:"}),e.jsx("div",{className:"space-y-2",children:[{value:"/api/users",label:"用户列表"},{value:"/api/posts",label:"文章列表"},{value:"/api/data",label:"通用数据"}].map(t=>e.jsxs("label",{className:"flex items-center space-x-2",children:[e.jsx("input",{type:"radio",name:"endpoint",value:t.value,checked:r===t.value,onChange:b=>y(b.target.value),className:"text-blue-500 focus:ring-blue-500"}),e.jsx("span",{className:"text-sm text-gray-700",children:t.label})]},t.value))})]}),e.jsx("div",{className:"flex items-center space-x-4",children:e.jsxs("div",{className:`flex items-center space-x-2 px-3 py-1 rounded-full text-sm ${m?"bg-blue-100 text-blue-800":l?"bg-red-100 text-red-800":"bg-green-100 text-green-800"}`,children:[e.jsx("div",{className:`w-2 h-2 rounded-full ${m?"bg-blue-500 animate-pulse":l?"bg-red-500":"bg-green-500"}`}),e.jsx("span",{children:m?"请求中...":l?"请求失败":"请求成功"})]})}),e.jsxs("div",{className:"border border-gray-200 rounded-lg",children:[e.jsx("div",{className:"bg-gray-50 px-3 py-2 border-b border-gray-200",children:e.jsx("h4",{className:"font-semibold text-gray-700",children:"响应数据"})}),e.jsx("div",{className:"p-3 max-h-60 overflow-y-auto",children:m?e.jsx("div",{className:"flex items-center justify-center h-20",children:e.jsx("div",{className:"animate-spin rounded-full h-6 w-6 border-b-2 border-blue-500"})}):l?e.jsxs("div",{className:"text-red-600 text-sm",children:[e.jsx("p",{className:"font-semibold",children:"错误信息:"}),e.jsx("p",{children:l})]}):a?e.jsxs("div",{className:"space-y-2",children:[a.users&&e.jsxs("div",{children:[e.jsx("h5",{className:"font-semibold text-gray-800 mb-2",children:"用户列表:"}),e.jsx("div",{className:"space-y-2",children:a.users.map(t=>e.jsxs("div",{className:"flex items-center space-x-3 p-2 bg-gray-50 rounded",children:[e.jsx("img",{src:t.avatar,alt:t.name,className:"w-8 h-8 rounded-full"}),e.jsxs("div",{children:[e.jsx("p",{className:"font-medium text-gray-900",children:t.name}),e.jsx("p",{className:"text-sm text-gray-600",children:t.email})]})]},t.id))})]}),a.posts&&e.jsxs("div",{children:[e.jsx("h5",{className:"font-semibold text-gray-800 mb-2",children:"文章列表:"}),e.jsx("div",{className:"space-y-2",children:a.posts.map(t=>e.jsxs("div",{className:"p-3 bg-gray-50 rounded",children:[e.jsx("h6",{className:"font-medium text-gray-900",children:t.title}),e.jsx("p",{className:"text-sm text-gray-600 mt-1",children:t.content}),e.jsxs("div",{className:"flex items-center justify-between mt-2 text-xs text-gray-500",children:[e.jsxs("span",{children:["作者: ",t.author]}),e.jsx("span",{children:new Date(t.createdAt).toLocaleDateString()})]})]},t.id))})]}),a.message&&e.jsxs("div",{children:[e.jsx("h5",{className:"font-semibold text-gray-800 mb-2",children:"响应信息:"}),e.jsxs("div",{className:"p-2 bg-gray-50 rounded",children:[e.jsx("p",{className:"text-gray-700",children:a.message}),e.jsxs("p",{className:"text-sm text-gray-500 mt-1",children:["时间: ",new Date(a.timestamp).toLocaleString()]})]})]})]}):e.jsx("p",{className:"text-gray-500 text-sm",children:"暂无数据"})})]})]}),e.jsxs("div",{children:[e.jsx("h4",{className:"font-semibold text-gray-700 mb-3",children:"请求日志:"}),e.jsx("div",{className:"bg-gray-50 rounded-lg p-3 min-h-[300px]",children:n.length===0?e.jsx("p",{className:"text-gray-500 text-sm",children:"选择端点或重新请求查看日志"}):e.jsx("div",{className:"space-y-1 max-h-60 overflow-y-auto",children:n.map((t,b)=>e.jsx("div",{className:"text-sm font-mono text-gray-700",children:t},b))})}),e.jsxs("div",{className:"mt-4 p-3 bg-blue-50 rounded border border-blue-200",children:[e.jsx("h4",{className:"font-semibold text-blue-800 mb-2",children:"请求状态:"}),e.jsxs("div",{className:"text-sm text-blue-700 space-y-1",children:[e.jsxs("p",{children:[e.jsx("strong",{children:"端点:"})," ",r]}),e.jsxs("p",{children:[e.jsx("strong",{children:"状态:"})," ",m?"请求中":l?"失败":"成功"]}),e.jsxs("p",{children:[e.jsx("strong",{children:"数据:"})," ",a?"已加载":"无数据"]}),e.jsxs("p",{children:[e.jsx("strong",{children:"错误:"})," ",l||"无"]})]})]})]})]}),e.jsx("div",{className:"mt-4 p-3 bg-green-50 rounded border border-green-200",children:e.jsx("p",{className:"text-sm text-green-800",children:"💡 useFetch Hook 封装了数据获取逻辑，提供 loading、error、data 状态和 refetch 方法，支持自动请求取消。"})})]})},S=`import React, { useState, useEffect } from 'react';\r
import useFetch from './useFetchHook';\r
\r
const BasicUsageDemo: React.FC = () => {\r
  const [endpoint, setEndpoint] = useState('/api/users');\r
  const { data, loading, error, refetch } = useFetch(endpoint);\r
  const [logs, setLogs] = useState<string[]>([]);\r
\r
  const addLog = (message: string) => {\r
    const timestamp = new Date().toLocaleTimeString();\r
    setLogs(prev => [...prev.slice(-9), \`\${timestamp}: \${message}\`]);\r
  };\r
\r
  useEffect(() => {\r
    if (loading) {\r
      addLog(\`开始请求: \${endpoint}\`);\r
    } else if (error) {\r
      addLog(\`请求失败: \${error}\`);\r
    } else if (data) {\r
      addLog(\`请求成功: 获取到数据\`);\r
    }\r
  }, [loading, error, data, endpoint]);\r
\r
  const handleEndpointChange = (newEndpoint: string) => {\r
    setEndpoint(newEndpoint);\r
    addLog(\`切换端点: \${newEndpoint}\`);\r
  };\r
\r
  const handleRefetch = () => {\r
    addLog('手动重新请求');\r
    refetch();\r
  };\r
\r
  const clearLogs = () => {\r
    setLogs([]);\r
  };\r
\r
  return (\r
    <div className="p-6 bg-white rounded-lg border border-gray-200">\r
      <div className="flex items-center justify-between mb-4">\r
        <h3 className="text-lg font-semibold text-gray-800">基础用法演示</h3>\r
        <div className="space-x-2">\r
          <button\r
            onClick={handleRefetch}\r
            disabled={loading}\r
            className="px-3 py-1 bg-blue-500 text-white rounded text-sm hover:bg-blue-600 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"\r
          >\r
            {loading ? '请求中...' : '重新请求'}\r
          </button>\r
          <button\r
            onClick={clearLogs}\r
            className="px-3 py-1 bg-gray-500 text-white rounded text-sm hover:bg-gray-600 transition-colors"\r
          >\r
            清空日志\r
          </button>\r
        </div>\r
      </div>\r
      \r
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">\r
        <div className="space-y-4">\r
          <div>\r
            <label className="block text-sm font-medium text-gray-700 mb-2">\r
              选择 API 端点:\r
            </label>\r
            <div className="space-y-2">\r
              {[\r
                { value: '/api/users', label: '用户列表' },\r
                { value: '/api/posts', label: '文章列表' },\r
                { value: '/api/data', label: '通用数据' }\r
              ].map(option => (\r
                <label key={option.value} className="flex items-center space-x-2">\r
                  <input\r
                    type="radio"\r
                    name="endpoint"\r
                    value={option.value}\r
                    checked={endpoint === option.value}\r
                    onChange={(e) => handleEndpointChange(e.target.value)}\r
                    className="text-blue-500 focus:ring-blue-500"\r
                  />\r
                  <span className="text-sm text-gray-700">{option.label}</span>\r
                </label>\r
              ))}\r
            </div>\r
          </div>\r
          \r
          <div className="flex items-center space-x-4">\r
            <div className={\`flex items-center space-x-2 px-3 py-1 rounded-full text-sm \${\r
              loading ? 'bg-blue-100 text-blue-800' : \r
              error ? 'bg-red-100 text-red-800' : \r
              'bg-green-100 text-green-800'\r
            }\`}>\r
              <div className={\`w-2 h-2 rounded-full \${\r
                loading ? 'bg-blue-500 animate-pulse' : \r
                error ? 'bg-red-500' : \r
                'bg-green-500'\r
              }\`} />\r
              <span>\r
                {loading ? '请求中...' : error ? '请求失败' : '请求成功'}\r
              </span>\r
            </div>\r
          </div>\r
          \r
          <div className="border border-gray-200 rounded-lg">\r
            <div className="bg-gray-50 px-3 py-2 border-b border-gray-200">\r
              <h4 className="font-semibold text-gray-700">响应数据</h4>\r
            </div>\r
            <div className="p-3 max-h-60 overflow-y-auto">\r
              {loading ? (\r
                <div className="flex items-center justify-center h-20">\r
                  <div className="animate-spin rounded-full h-6 w-6 border-b-2 border-blue-500"></div>\r
                </div>\r
              ) : error ? (\r
                <div className="text-red-600 text-sm">\r
                  <p className="font-semibold">错误信息:</p>\r
                  <p>{error}</p>\r
                </div>\r
              ) : data ? (\r
                <div className="space-y-2">\r
                  {data.users && (\r
                    <div>\r
                      <h5 className="font-semibold text-gray-800 mb-2">用户列表:</h5>\r
                      <div className="space-y-2">\r
                        {data.users.map((user: any) => (\r
                          <div key={user.id} className="flex items-center space-x-3 p-2 bg-gray-50 rounded">\r
                            <img \r
                              src={user.avatar} \r
                              alt={user.name}\r
                              className="w-8 h-8 rounded-full"\r
                            />\r
                            <div>\r
                              <p className="font-medium text-gray-900">{user.name}</p>\r
                              <p className="text-sm text-gray-600">{user.email}</p>\r
                            </div>\r
                          </div>\r
                        ))}\r
                      </div>\r
                    </div>\r
                  )}\r
                  {data.posts && (\r
                    <div>\r
                      <h5 className="font-semibold text-gray-800 mb-2">文章列表:</h5>\r
                      <div className="space-y-2">\r
                        {data.posts.map((post: any) => (\r
                          <div key={post.id} className="p-3 bg-gray-50 rounded">\r
                            <h6 className="font-medium text-gray-900">{post.title}</h6>\r
                            <p className="text-sm text-gray-600 mt-1">{post.content}</p>\r
                            <div className="flex items-center justify-between mt-2 text-xs text-gray-500">\r
                              <span>作者: {post.author}</span>\r
                              <span>{new Date(post.createdAt).toLocaleDateString()}</span>\r
                            </div>\r
                          </div>\r
                        ))}\r
                      </div>\r
                    </div>\r
                  )}\r
                  {data.message && (\r
                    <div>\r
                      <h5 className="font-semibold text-gray-800 mb-2">响应信息:</h5>\r
                      <div className="p-2 bg-gray-50 rounded">\r
                        <p className="text-gray-700">{data.message}</p>\r
                        <p className="text-sm text-gray-500 mt-1">\r
                          时间: {new Date(data.timestamp).toLocaleString()}\r
                        </p>\r
                      </div>\r
                    </div>\r
                  )}\r
                </div>\r
              ) : (\r
                <p className="text-gray-500 text-sm">暂无数据</p>\r
              )}\r
            </div>\r
          </div>\r
        </div>\r
        \r
        <div>\r
          <h4 className="font-semibold text-gray-700 mb-3">请求日志:</h4>\r
          <div className="bg-gray-50 rounded-lg p-3 min-h-[300px]">\r
            {logs.length === 0 ? (\r
              <p className="text-gray-500 text-sm">选择端点或重新请求查看日志</p>\r
            ) : (\r
              <div className="space-y-1 max-h-60 overflow-y-auto">\r
                {logs.map((log, index) => (\r
                  <div key={index} className="text-sm font-mono text-gray-700">\r
                    {log}\r
                  </div>\r
                ))}\r
              </div>\r
            )}\r
          </div>\r
          \r
          <div className="mt-4 p-3 bg-blue-50 rounded border border-blue-200">\r
            <h4 className="font-semibold text-blue-800 mb-2">请求状态:</h4>\r
            <div className="text-sm text-blue-700 space-y-1">\r
              <p><strong>端点:</strong> {endpoint}</p>\r
              <p><strong>状态:</strong> {loading ? '请求中' : error ? '失败' : '成功'}</p>\r
              <p><strong>数据:</strong> {data ? '已加载' : '无数据'}</p>\r
              <p><strong>错误:</strong> {error || '无'}</p>\r
            </div>\r
          </div>\r
        </div>\r
      </div>\r
      \r
      <div className="mt-4 p-3 bg-green-50 rounded border border-green-200">\r
        <p className="text-sm text-green-800">\r
          💡 useFetch Hook 封装了数据获取逻辑，提供 loading、error、data 状态和 refetch 方法，支持自动请求取消。\r
        </p>\r
      </div>\r
    </div>\r
  );\r
};\r
\r
export default BasicUsageDemo;`,D=()=>{const[r,N]=i.useState(""),[a,m]=i.useState(!1),{data:l,loading:o,error:n,refetch:g}=w(`/api/users/${r}`,{enabled:a&&r!==""}),[d,y]=i.useState([]),p=c=>{const f=new Date().toLocaleTimeString();y(x=>[...x.slice(-9),`${f}: ${c}`])};i.useEffect(()=>{a&&r&&(o?p(`开始请求用户 ${r} 的信息`):n?p(`请求用户 ${r} 失败: ${n}`):l&&p(`成功获取用户 ${r} 的信息`))},[o,n,l,r,a]);const u=c=>{N(c),p(`输入用户ID: ${c}`)},t=c=>{m(c),p(`${c?"启用":"禁用"}自动请求`)},b=()=>{r&&(p(`手动请求用户 ${r} 的信息`),g())},v=()=>{y([])};return e.jsxs("div",{className:"p-6 bg-white rounded-lg border border-gray-200",children:[e.jsxs("div",{className:"flex items-center justify-between mb-4",children:[e.jsx("h3",{className:"text-lg font-semibold text-gray-800",children:"条件请求演示"}),e.jsx("button",{onClick:v,className:"px-3 py-1 bg-gray-500 text-white rounded text-sm hover:bg-gray-600 transition-colors",children:"清空日志"})]}),e.jsxs("div",{className:"grid grid-cols-1 lg:grid-cols-2 gap-6",children:[e.jsxs("div",{className:"space-y-4",children:[e.jsxs("div",{children:[e.jsx("label",{className:"block text-sm font-medium text-gray-700 mb-2",children:"用户ID:"}),e.jsx("input",{type:"text",value:r,onChange:c=>u(c.target.value),placeholder:"输入用户ID (1-5)",className:"w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"})]}),e.jsxs("div",{className:"flex items-center space-x-2",children:[e.jsx("input",{type:"checkbox",id:"autoFetch",checked:a,onChange:c=>t(c.target.checked),className:"text-blue-500 focus:ring-blue-500"}),e.jsx("label",{htmlFor:"autoFetch",className:"text-sm text-gray-700",children:"启用自动请求 (当用户ID变化时自动发起请求)"})]}),e.jsxs("div",{className:"flex items-center space-x-4",children:[e.jsx("button",{onClick:b,disabled:!r||o,className:"px-4 py-2 bg-blue-500 text-white rounded text-sm hover:bg-blue-600 disabled:opacity-50 disabled:cursor-not-allowed transition-colors",children:o?"请求中...":"手动请求"}),e.jsxs("div",{className:`flex items-center space-x-2 px-3 py-1 rounded-full text-sm ${r?o?"bg-blue-100 text-blue-800":n?"bg-red-100 text-red-800":l?"bg-green-100 text-green-800":"bg-gray-100 text-gray-600":"bg-gray-100 text-gray-600"}`,children:[e.jsx("div",{className:`w-2 h-2 rounded-full ${r?o?"bg-blue-500 animate-pulse":n?"bg-red-500":l?"bg-green-500":"bg-gray-400":"bg-gray-400"}`}),e.jsx("span",{children:r?o?"请求中...":n?"请求失败":l?"请求成功":"等待请求":"请输入用户ID"})]})]}),e.jsxs("div",{className:"border border-gray-200 rounded-lg",children:[e.jsx("div",{className:"bg-gray-50 px-3 py-2 border-b border-gray-200",children:e.jsx("h4",{className:"font-semibold text-gray-700",children:"用户信息"})}),e.jsx("div",{className:"p-3 min-h-[200px]",children:r?o?e.jsx("div",{className:"flex items-center justify-center h-32",children:e.jsxs("div",{className:"text-center",children:[e.jsx("div",{className:"animate-spin rounded-full h-6 w-6 border-b-2 border-blue-500 mx-auto mb-2"}),e.jsx("p",{className:"text-gray-600 text-sm",children:"加载用户信息..."})]})}):n?e.jsx("div",{className:"flex items-center justify-center h-32",children:e.jsxs("div",{className:"text-center",children:[e.jsx("div",{className:"text-red-500 text-2xl mb-2",children:"⚠️"}),e.jsx("p",{className:"text-red-600 text-sm",children:n})]})}):l?e.jsxs("div",{className:"space-y-3",children:[e.jsxs("div",{className:"flex items-center space-x-3",children:[e.jsx("img",{src:`https://api.dicebear.com/7.x/avataaars/svg?seed=${r}`,alt:"用户头像",className:"w-12 h-12 rounded-full"}),e.jsxs("div",{children:[e.jsxs("h5",{className:"font-semibold text-gray-900",children:["用户 ",r]}),e.jsxs("p",{className:"text-sm text-gray-600",children:["user",r,"@example.com"]})]})]}),e.jsxs("div",{className:"grid grid-cols-2 gap-4 text-sm",children:[e.jsxs("div",{className:"p-2 bg-gray-50 rounded",children:[e.jsx("p",{className:"font-medium text-gray-700",children:"用户ID"}),e.jsx("p",{className:"text-gray-900",children:r})]}),e.jsxs("div",{className:"p-2 bg-gray-50 rounded",children:[e.jsx("p",{className:"font-medium text-gray-700",children:"状态"}),e.jsx("p",{className:"text-green-600",children:"活跃"})]}),e.jsxs("div",{className:"p-2 bg-gray-50 rounded",children:[e.jsx("p",{className:"font-medium text-gray-700",children:"注册时间"}),e.jsx("p",{className:"text-gray-900",children:new Date().toLocaleDateString()})]}),e.jsxs("div",{className:"p-2 bg-gray-50 rounded",children:[e.jsx("p",{className:"font-medium text-gray-700",children:"最后登录"}),e.jsx("p",{className:"text-gray-900",children:new Date().toLocaleTimeString()})]})]})]}):e.jsx("div",{className:"flex items-center justify-center h-32",children:e.jsx("p",{className:"text-gray-500 text-sm",children:"暂无数据"})}):e.jsx("div",{className:"flex items-center justify-center h-32",children:e.jsx("p",{className:"text-gray-500 text-sm text-center",children:"请输入用户ID"})})})]})]}),e.jsxs("div",{children:[e.jsx("h4",{className:"font-semibold text-gray-700 mb-3",children:"操作日志:"}),e.jsx("div",{className:"bg-gray-50 rounded-lg p-3 min-h-[200px]",children:d.length===0?e.jsx("p",{className:"text-gray-500 text-sm",children:"输入用户ID或切换设置查看日志"}):e.jsx("div",{className:"space-y-1 max-h-40 overflow-y-auto",children:d.map((c,f)=>e.jsx("div",{className:"text-sm font-mono text-gray-700",children:c},f))})}),e.jsxs("div",{className:"mt-4 p-3 bg-purple-50 rounded border border-purple-200",children:[e.jsx("h4",{className:"font-semibold text-purple-800 mb-2",children:"请求配置:"}),e.jsxs("div",{className:"text-sm text-purple-700 space-y-1",children:[e.jsxs("p",{children:[e.jsx("strong",{children:"用户ID:"})," ",r||"未设置"]}),e.jsxs("p",{children:[e.jsx("strong",{children:"自动请求:"})," ",a?"启用":"禁用"]}),e.jsxs("p",{children:[e.jsx("strong",{children:"请求条件:"})," ",a&&r?"满足":"不满足"]}),e.jsxs("p",{children:[e.jsx("strong",{children:"当前状态:"})," ",o?"请求中":n?"失败":l?"成功":"待请求"]})]})]}),e.jsxs("div",{className:"mt-4 p-3 bg-yellow-50 rounded border border-yellow-200",children:[e.jsx("h4",{className:"font-semibold text-yellow-800 mb-2",children:"使用提示:"}),e.jsxs("ul",{className:"text-sm text-yellow-700 space-y-1",children:[e.jsx("li",{children:"• 输入1-5之间的数字作为用户ID"}),e.jsx("li",{children:"• 启用自动请求后，ID变化时自动发起请求"}),e.jsx("li",{children:"• 禁用自动请求时，需要手动点击请求按钮"}),e.jsx("li",{children:"• enabled 参数控制请求是否执行"})]})]})]})]}),e.jsx("div",{className:"mt-4 p-3 bg-indigo-50 rounded border border-indigo-200",children:e.jsx("p",{className:"text-sm text-indigo-800",children:"💡 通过 enabled 参数可以控制请求的执行时机，只有在满足条件时才会发起请求，避免不必要的网络调用。"})})]})},k=`import React, { useState, useEffect } from 'react';\r
import useFetch from './useFetchHook';\r
\r
const ConditionalFetchDemo: React.FC = () => {\r
  const [userId, setUserId] = useState('');\r
  const [enabled, setEnabled] = useState(false);\r
  const { data, loading, error, refetch } = useFetch(\r
    \`/api/users/\${userId}\`,\r
    { enabled: enabled && userId !== '' }\r
  );\r
  const [logs, setLogs] = useState<string[]>([]);\r
\r
  const addLog = (message: string) => {\r
    const timestamp = new Date().toLocaleTimeString();\r
    setLogs(prev => [...prev.slice(-9), \`\${timestamp}: \${message}\`]);\r
  };\r
\r
  useEffect(() => {\r
    if (enabled && userId) {\r
      if (loading) {\r
        addLog(\`开始请求用户 \${userId} 的信息\`);\r
      } else if (error) {\r
        addLog(\`请求用户 \${userId} 失败: \${error}\`);\r
      } else if (data) {\r
        addLog(\`成功获取用户 \${userId} 的信息\`);\r
      }\r
    }\r
  }, [loading, error, data, userId, enabled]);\r
\r
  const handleUserIdChange = (value: string) => {\r
    setUserId(value);\r
    addLog(\`输入用户ID: \${value}\`);\r
  };\r
\r
  const handleEnabledChange = (checked: boolean) => {\r
    setEnabled(checked);\r
    addLog(\`\${checked ? '启用' : '禁用'}自动请求\`);\r
  };\r
\r
  const handleManualFetch = () => {\r
    if (userId) {\r
      addLog(\`手动请求用户 \${userId} 的信息\`);\r
      refetch();\r
    }\r
  };\r
\r
  const clearLogs = () => {\r
    setLogs([]);\r
  };\r
\r
  return (\r
    <div className="p-6 bg-white rounded-lg border border-gray-200">\r
      <div className="flex items-center justify-between mb-4">\r
        <h3 className="text-lg font-semibold text-gray-800">条件请求演示</h3>\r
        <button\r
          onClick={clearLogs}\r
          className="px-3 py-1 bg-gray-500 text-white rounded text-sm hover:bg-gray-600 transition-colors"\r
        >\r
          清空日志\r
        </button>\r
      </div>\r
      \r
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">\r
        <div className="space-y-4">\r
          <div>\r
            <label className="block text-sm font-medium text-gray-700 mb-2">\r
              用户ID:\r
            </label>\r
            <input\r
              type="text"\r
              value={userId}\r
              onChange={(e) => handleUserIdChange(e.target.value)}\r
              placeholder="输入用户ID (1-5)"\r
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"\r
            />\r
          </div>\r
          \r
          <div className="flex items-center space-x-2">\r
            <input\r
              type="checkbox"\r
              id="autoFetch"\r
              checked={enabled}\r
              onChange={(e) => handleEnabledChange(e.target.checked)}\r
              className="text-blue-500 focus:ring-blue-500"\r
            />\r
            <label htmlFor="autoFetch" className="text-sm text-gray-700">\r
              启用自动请求 (当用户ID变化时自动发起请求)\r
            </label>\r
          </div>\r
          \r
          <div className="flex items-center space-x-4">\r
            <button\r
              onClick={handleManualFetch}\r
              disabled={!userId || loading}\r
              className="px-4 py-2 bg-blue-500 text-white rounded text-sm hover:bg-blue-600 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"\r
            >\r
              {loading ? '请求中...' : '手动请求'}\r
            </button>\r
            \r
            <div className={\`flex items-center space-x-2 px-3 py-1 rounded-full text-sm \${\r
              !userId ? 'bg-gray-100 text-gray-600' :\r
              loading ? 'bg-blue-100 text-blue-800' : \r
              error ? 'bg-red-100 text-red-800' : \r
              data ? 'bg-green-100 text-green-800' : 'bg-gray-100 text-gray-600'\r
            }\`}>\r
              <div className={\`w-2 h-2 rounded-full \${\r
                !userId ? 'bg-gray-400' :\r
                loading ? 'bg-blue-500 animate-pulse' : \r
                error ? 'bg-red-500' : \r
                data ? 'bg-green-500' : 'bg-gray-400'\r
              }\`} />\r
              <span>\r
                {!userId ? '请输入用户ID' :\r
                 loading ? '请求中...' : error ? '请求失败' : data ? '请求成功' : '等待请求'}\r
              </span>\r
            </div>\r
          </div>\r
          \r
          <div className="border border-gray-200 rounded-lg">\r
            <div className="bg-gray-50 px-3 py-2 border-b border-gray-200">\r
              <h4 className="font-semibold text-gray-700">用户信息</h4>\r
            </div>\r
            <div className="p-3 min-h-[200px]">\r
              {!userId ? (\r
                <div className="flex items-center justify-center h-32">\r
                  <p className="text-gray-500 text-sm text-center">\r
                    请输入用户ID\r
                  </p>\r
                </div>\r
              ) : loading ? (\r
                <div className="flex items-center justify-center h-32">\r
                  <div className="text-center">\r
                    <div className="animate-spin rounded-full h-6 w-6 border-b-2 border-blue-500 mx-auto mb-2"></div>\r
                    <p className="text-gray-600 text-sm">加载用户信息...</p>\r
                  </div>\r
                </div>\r
              ) : error ? (\r
                <div className="flex items-center justify-center h-32">\r
                  <div className="text-center">\r
                    <div className="text-red-500 text-2xl mb-2">⚠️</div>\r
                    <p className="text-red-600 text-sm">{error}</p>\r
                  </div>\r
                </div>\r
              ) : data ? (\r
                <div className="space-y-3">\r
                  <div className="flex items-center space-x-3">\r
                    <img \r
                      src={\`https://api.dicebear.com/7.x/avataaars/svg?seed=\${userId}\`}\r
                      alt="用户头像"\r
                      className="w-12 h-12 rounded-full"\r
                    />\r
                    <div>\r
                      <h5 className="font-semibold text-gray-900">用户 {userId}</h5>\r
                      <p className="text-sm text-gray-600">user{userId}@example.com</p>\r
                    </div>\r
                  </div>\r
                  <div className="grid grid-cols-2 gap-4 text-sm">\r
                    <div className="p-2 bg-gray-50 rounded">\r
                      <p className="font-medium text-gray-700">用户ID</p>\r
                      <p className="text-gray-900">{userId}</p>\r
                    </div>\r
                    <div className="p-2 bg-gray-50 rounded">\r
                      <p className="font-medium text-gray-700">状态</p>\r
                      <p className="text-green-600">活跃</p>\r
                    </div>\r
                    <div className="p-2 bg-gray-50 rounded">\r
                      <p className="font-medium text-gray-700">注册时间</p>\r
                      <p className="text-gray-900">{new Date().toLocaleDateString()}</p>\r
                    </div>\r
                    <div className="p-2 bg-gray-50 rounded">\r
                      <p className="font-medium text-gray-700">最后登录</p>\r
                      <p className="text-gray-900">{new Date().toLocaleTimeString()}</p>\r
                    </div>\r
                  </div>\r
                </div>\r
              ) : (\r
                <div className="flex items-center justify-center h-32">\r
                  <p className="text-gray-500 text-sm">暂无数据</p>\r
                </div>\r
              )}\r
            </div>\r
          </div>\r
        </div>\r
        \r
        <div>\r
          <h4 className="font-semibold text-gray-700 mb-3">操作日志:</h4>\r
          <div className="bg-gray-50 rounded-lg p-3 min-h-[200px]">\r
            {logs.length === 0 ? (\r
              <p className="text-gray-500 text-sm">输入用户ID或切换设置查看日志</p>\r
            ) : (\r
              <div className="space-y-1 max-h-40 overflow-y-auto">\r
                {logs.map((log, index) => (\r
                  <div key={index} className="text-sm font-mono text-gray-700">\r
                    {log}\r
                  </div>\r
                ))}\r
              </div>\r
            )}\r
          </div>\r
          \r
          <div className="mt-4 p-3 bg-purple-50 rounded border border-purple-200">\r
            <h4 className="font-semibold text-purple-800 mb-2">请求配置:</h4>\r
            <div className="text-sm text-purple-700 space-y-1">\r
              <p><strong>用户ID:</strong> {userId || '未设置'}</p>\r
              <p><strong>自动请求:</strong> {enabled ? '启用' : '禁用'}</p>\r
              <p><strong>请求条件:</strong> {enabled && userId ? '满足' : '不满足'}</p>\r
              <p><strong>当前状态:</strong> {loading ? '请求中' : error ? '失败' : data ? '成功' : '待请求'}</p>\r
            </div>\r
          </div>\r
          \r
          <div className="mt-4 p-3 bg-yellow-50 rounded border border-yellow-200">\r
            <h4 className="font-semibold text-yellow-800 mb-2">使用提示:</h4>\r
            <ul className="text-sm text-yellow-700 space-y-1">\r
              <li>• 输入1-5之间的数字作为用户ID</li>\r
              <li>• 启用自动请求后，ID变化时自动发起请求</li>\r
              <li>• 禁用自动请求时，需要手动点击请求按钮</li>\r
              <li>• enabled 参数控制请求是否执行</li>\r
            </ul>\r
          </div>\r
        </div>\r
      </div>\r
      \r
      <div className="mt-4 p-3 bg-indigo-50 rounded border border-indigo-200">\r
        <p className="text-sm text-indigo-800">\r
          💡 通过 enabled 参数可以控制请求的执行时机，只有在满足条件时才会发起请求，避免不必要的网络调用。\r
        </p>\r
      </div>\r
    </div>\r
  );\r
};\r
\r
export default ConditionalFetchDemo;`,I=()=>{const[r,N]=i.useState(""),[a,m]=i.useState("all"),[l,o]=i.useState("name"),{data:n,loading:g,error:d}=w("/api/search",{dependencies:[r,a,l],enabled:r.length>0}),[y,p]=i.useState([]),u=s=>{const h=new Date().toLocaleTimeString();p(j=>[...j.slice(-9),`${h}: ${s}`])};i.useEffect(()=>{var s;r.length>0&&(g?u(`搜索: "${r}", 分类: ${a}, 排序: ${l}`):d?u(`搜索失败: ${d}`):n&&u(`搜索完成，找到 ${((s=n.results)==null?void 0:s.length)||0} 个结果`))},[g,d,n,r,a,l]);const t=s=>{N(s),u(`输入搜索词: "${s}"`)},b=s=>{m(s),u(`选择分类: ${s}`)},v=s=>{o(s),u(`选择排序: ${s}`)},c=()=>{N(""),m("all"),o("name"),u("清空搜索条件")},f=()=>{p([])},x=(n==null?void 0:n.results)||(r.length>0?Array.from({length:Math.floor(Math.random()*10)+1},(s,h)=>({id:h+1,name:`${r} 相关结果 ${h+1}`,category:a==="all"?["电子产品","服装","食品"][h%3]:a,score:Math.floor(Math.random()*100),description:`这是与 "${r}" 相关的搜索结果，分类为 ${a}，按 ${l} 排序。`})):[]);return e.jsxs("div",{className:"p-6 bg-white rounded-lg border border-gray-200",children:[e.jsxs("div",{className:"flex items-center justify-between mb-4",children:[e.jsx("h3",{className:"text-lg font-semibold text-gray-800",children:"依赖更新演示"}),e.jsxs("div",{className:"space-x-2",children:[e.jsx("button",{onClick:c,className:"px-3 py-1 bg-red-500 text-white rounded text-sm hover:bg-red-600 transition-colors",children:"清空搜索"}),e.jsx("button",{onClick:f,className:"px-3 py-1 bg-gray-500 text-white rounded text-sm hover:bg-gray-600 transition-colors",children:"清空日志"})]})]}),e.jsxs("div",{className:"grid grid-cols-1 lg:grid-cols-2 gap-6",children:[e.jsxs("div",{className:"space-y-4",children:[e.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-3 gap-4",children:[e.jsxs("div",{children:[e.jsx("label",{className:"block text-sm font-medium text-gray-700 mb-2",children:"搜索词:"}),e.jsx("input",{type:"text",value:r,onChange:s=>t(s.target.value),placeholder:"输入搜索内容...",className:"w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"})]}),e.jsxs("div",{children:[e.jsx("label",{className:"block text-sm font-medium text-gray-700 mb-2",children:"分类:"}),e.jsxs("select",{value:a,onChange:s=>b(s.target.value),className:"w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent",children:[e.jsx("option",{value:"all",children:"全部分类"}),e.jsx("option",{value:"电子产品",children:"电子产品"}),e.jsx("option",{value:"服装",children:"服装"}),e.jsx("option",{value:"食品",children:"食品"})]})]}),e.jsxs("div",{children:[e.jsx("label",{className:"block text-sm font-medium text-gray-700 mb-2",children:"排序:"}),e.jsxs("select",{value:l,onChange:s=>v(s.target.value),className:"w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent",children:[e.jsx("option",{value:"name",children:"按名称"}),e.jsx("option",{value:"score",children:"按评分"}),e.jsx("option",{value:"date",children:"按时间"})]})]})]}),e.jsxs("div",{className:"flex items-center space-x-4",children:[e.jsxs("div",{className:`flex items-center space-x-2 px-3 py-1 rounded-full text-sm ${r.length===0?"bg-gray-100 text-gray-600":g?"bg-blue-100 text-blue-800":d?"bg-red-100 text-red-800":"bg-green-100 text-green-800"}`,children:[e.jsx("div",{className:`w-2 h-2 rounded-full ${r.length===0?"bg-gray-400":g?"bg-blue-500 animate-pulse":d?"bg-red-500":"bg-green-500"}`}),e.jsx("span",{children:r.length===0?"等待输入":g?"搜索中...":d?"搜索失败":"搜索完成"})]}),r.length>0&&e.jsxs("span",{className:"text-sm text-gray-600",children:["找到 ",x.length," 个结果"]})]}),e.jsxs("div",{className:"border border-gray-200 rounded-lg",children:[e.jsx("div",{className:"bg-gray-50 px-3 py-2 border-b border-gray-200",children:e.jsx("h4",{className:"font-semibold text-gray-700",children:"搜索结果"})}),e.jsx("div",{className:"max-h-60 overflow-y-auto",children:r.length===0?e.jsx("div",{className:"p-4 text-center text-gray-500",children:"请输入搜索词开始搜索"}):g?e.jsx("div",{className:"flex items-center justify-center h-20",children:e.jsx("div",{className:"animate-spin rounded-full h-6 w-6 border-b-2 border-blue-500"})}):d?e.jsxs("div",{className:"p-4 text-center text-red-600",children:["搜索失败: ",d]}):x.length===0?e.jsx("div",{className:"p-4 text-center text-gray-500",children:"没有找到相关结果"}):e.jsx("div",{className:"divide-y divide-gray-100",children:x.map(s=>e.jsx("div",{className:"p-3 hover:bg-gray-50",children:e.jsx("div",{className:"flex justify-between items-start",children:e.jsxs("div",{className:"flex-1",children:[e.jsx("h5",{className:"font-medium text-gray-900",children:s.name}),e.jsx("p",{className:"text-sm text-gray-600 mt-1",children:s.description}),e.jsxs("div",{className:"flex items-center space-x-2 mt-2",children:[e.jsx("span",{className:"px-2 py-1 bg-blue-100 text-blue-800 text-xs rounded",children:s.category}),e.jsxs("span",{className:"text-sm text-gray-500",children:["评分: ",s.score]})]})]})})},s.id))})})]})]}),e.jsxs("div",{children:[e.jsx("h4",{className:"font-semibold text-gray-700 mb-3",children:"操作日志:"}),e.jsx("div",{className:"bg-gray-50 rounded-lg p-3 min-h-[200px]",children:y.length===0?e.jsx("p",{className:"text-gray-500 text-sm",children:"修改搜索条件查看日志"}):e.jsx("div",{className:"space-y-1 max-h-40 overflow-y-auto",children:y.map((s,h)=>e.jsx("div",{className:"text-sm font-mono text-gray-700",children:s},h))})}),e.jsxs("div",{className:"mt-4 p-3 bg-teal-50 rounded border border-teal-200",children:[e.jsx("h4",{className:"font-semibold text-teal-800 mb-2",children:"当前搜索条件:"}),e.jsxs("div",{className:"text-sm text-teal-700 space-y-1",children:[e.jsxs("p",{children:[e.jsx("strong",{children:"搜索词:"}),' "',r,'" (',r.length," 字符)"]}),e.jsxs("p",{children:[e.jsx("strong",{children:"分类:"})," ",a]}),e.jsxs("p",{children:[e.jsx("strong",{children:"排序:"})," ",l]}),e.jsxs("p",{children:[e.jsx("strong",{children:"启用搜索:"})," ",r.length>0?"是":"否"]})]})]}),e.jsxs("div",{className:"mt-4 p-3 bg-orange-50 rounded border border-orange-200",children:[e.jsx("h4",{className:"font-semibold text-orange-800 mb-2",children:"依赖机制:"}),e.jsxs("ul",{className:"text-sm text-orange-700 space-y-1",children:[e.jsx("li",{children:"• 搜索词、分类、排序作为依赖项"}),e.jsx("li",{children:"• 任一依赖项变化都会触发新请求"}),e.jsx("li",{children:"• 只有搜索词不为空时才启用请求"}),e.jsx("li",{children:"• 自动取消之前的请求避免竞态"})]})]})]})]}),e.jsx("div",{className:"mt-4 p-3 bg-cyan-50 rounded border border-cyan-200",children:e.jsx("p",{className:"text-sm text-cyan-800",children:"💡 dependencies 参数让 useFetch 在指定依赖项变化时自动重新请求，结合 enabled 参数可以精确控制请求时机。"})})]})},L=`import React, { useState, useEffect } from 'react';\r
import useFetch from './useFetchHook';\r
\r
const DependencyDemo: React.FC = () => {\r
  const [searchTerm, setSearchTerm] = useState('');\r
  const [category, setCategory] = useState('all');\r
  const [sortBy, setSortBy] = useState('name');\r
  \r
  const { data, loading, error, refetch } = useFetch(\r
    '/api/search',\r
    {\r
      dependencies: [searchTerm, category, sortBy],\r
      enabled: searchTerm.length > 0\r
    }\r
  );\r
  \r
  const [logs, setLogs] = useState<string[]>([]);\r
\r
  const addLog = (message: string) => {\r
    const timestamp = new Date().toLocaleTimeString();\r
    setLogs(prev => [...prev.slice(-9), \`\${timestamp}: \${message}\`]);\r
  };\r
\r
  useEffect(() => {\r
    if (searchTerm.length > 0) {\r
      if (loading) {\r
        addLog(\`搜索: "\${searchTerm}", 分类: \${category}, 排序: \${sortBy}\`);\r
      } else if (error) {\r
        addLog(\`搜索失败: \${error}\`);\r
      } else if (data) {\r
        addLog(\`搜索完成，找到 \${data.results?.length || 0} 个结果\`);\r
      }\r
    }\r
  }, [loading, error, data, searchTerm, category, sortBy]);\r
\r
  const handleSearchChange = (value: string) => {\r
    setSearchTerm(value);\r
    addLog(\`输入搜索词: "\${value}"\`);\r
  };\r
\r
  const handleCategoryChange = (value: string) => {\r
    setCategory(value);\r
    addLog(\`选择分类: \${value}\`);\r
  };\r
\r
  const handleSortChange = (value: string) => {\r
    setSortBy(value);\r
    addLog(\`选择排序: \${value}\`);\r
  };\r
\r
  const clearSearch = () => {\r
    setSearchTerm('');\r
    setCategory('all');\r
    setSortBy('name');\r
    addLog('清空搜索条件');\r
  };\r
\r
  const clearLogs = () => {\r
    setLogs([]);\r
  };\r
\r
  // 模拟搜索结果\r
  const mockResults = data?.results || (\r
    searchTerm.length > 0 ? Array.from({ length: Math.floor(Math.random() * 10) + 1 }, (_, i) => ({\r
      id: i + 1,\r
      name: \`\${searchTerm} 相关结果 \${i + 1}\`,\r
      category: category === 'all' ? ['电子产品', '服装', '食品'][i % 3] : category,\r
      score: Math.floor(Math.random() * 100),\r
      description: \`这是与 "\${searchTerm}" 相关的搜索结果，分类为 \${category}，按 \${sortBy} 排序。\`\r
    })) : []\r
  );\r
\r
  return (\r
    <div className="p-6 bg-white rounded-lg border border-gray-200">\r
      <div className="flex items-center justify-between mb-4">\r
        <h3 className="text-lg font-semibold text-gray-800">依赖更新演示</h3>\r
        <div className="space-x-2">\r
          <button\r
            onClick={clearSearch}\r
            className="px-3 py-1 bg-red-500 text-white rounded text-sm hover:bg-red-600 transition-colors"\r
          >\r
            清空搜索\r
          </button>\r
          <button\r
            onClick={clearLogs}\r
            className="px-3 py-1 bg-gray-500 text-white rounded text-sm hover:bg-gray-600 transition-colors"\r
          >\r
            清空日志\r
          </button>\r
        </div>\r
      </div>\r
      \r
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">\r
        <div className="space-y-4">\r
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">\r
            <div>\r
              <label className="block text-sm font-medium text-gray-700 mb-2">\r
                搜索词:\r
              </label>\r
              <input\r
                type="text"\r
                value={searchTerm}\r
                onChange={(e) => handleSearchChange(e.target.value)}\r
                placeholder="输入搜索内容..."\r
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"\r
              />\r
            </div>\r
            \r
            <div>\r
              <label className="block text-sm font-medium text-gray-700 mb-2">\r
                分类:\r
              </label>\r
              <select\r
                value={category}\r
                onChange={(e) => handleCategoryChange(e.target.value)}\r
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"\r
              >\r
                <option value="all">全部分类</option>\r
                <option value="电子产品">电子产品</option>\r
                <option value="服装">服装</option>\r
                <option value="食品">食品</option>\r
              </select>\r
            </div>\r
            \r
            <div>\r
              <label className="block text-sm font-medium text-gray-700 mb-2">\r
                排序:\r
              </label>\r
              <select\r
                value={sortBy}\r
                onChange={(e) => handleSortChange(e.target.value)}\r
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"\r
              >\r
                <option value="name">按名称</option>\r
                <option value="score">按评分</option>\r
                <option value="date">按时间</option>\r
              </select>\r
            </div>\r
          </div>\r
          \r
          <div className="flex items-center space-x-4">\r
            <div className={\`flex items-center space-x-2 px-3 py-1 rounded-full text-sm \${\r
              searchTerm.length === 0 ? 'bg-gray-100 text-gray-600' :\r
              loading ? 'bg-blue-100 text-blue-800' : \r
              error ? 'bg-red-100 text-red-800' : \r
              'bg-green-100 text-green-800'\r
            }\`}>\r
              <div className={\`w-2 h-2 rounded-full \${\r
                searchTerm.length === 0 ? 'bg-gray-400' :\r
                loading ? 'bg-blue-500 animate-pulse' : \r
                error ? 'bg-red-500' : \r
                'bg-green-500'\r
              }\`} />\r
              <span>\r
                {searchTerm.length === 0 ? '等待输入' :\r
                 loading ? '搜索中...' : error ? '搜索失败' : '搜索完成'}\r
              </span>\r
            </div>\r
            {searchTerm.length > 0 && (\r
              <span className="text-sm text-gray-600">\r
                找到 {mockResults.length} 个结果\r
              </span>\r
            )}\r
          </div>\r
          \r
          <div className="border border-gray-200 rounded-lg">\r
            <div className="bg-gray-50 px-3 py-2 border-b border-gray-200">\r
              <h4 className="font-semibold text-gray-700">搜索结果</h4>\r
            </div>\r
            <div className="max-h-60 overflow-y-auto">\r
              {searchTerm.length === 0 ? (\r
                <div className="p-4 text-center text-gray-500">\r
                  请输入搜索词开始搜索\r
                </div>\r
              ) : loading ? (\r
                <div className="flex items-center justify-center h-20">\r
                  <div className="animate-spin rounded-full h-6 w-6 border-b-2 border-blue-500"></div>\r
                </div>\r
              ) : error ? (\r
                <div className="p-4 text-center text-red-600">\r
                  搜索失败: {error}\r
                </div>\r
              ) : mockResults.length === 0 ? (\r
                <div className="p-4 text-center text-gray-500">\r
                  没有找到相关结果\r
                </div>\r
              ) : (\r
                <div className="divide-y divide-gray-100">\r
                  {mockResults.map((result: any) => (\r
                    <div key={result.id} className="p-3 hover:bg-gray-50">\r
                      <div className="flex justify-between items-start">\r
                        <div className="flex-1">\r
                          <h5 className="font-medium text-gray-900">{result.name}</h5>\r
                          <p className="text-sm text-gray-600 mt-1">{result.description}</p>\r
                          <div className="flex items-center space-x-2 mt-2">\r
                            <span className="px-2 py-1 bg-blue-100 text-blue-800 text-xs rounded">\r
                              {result.category}\r
                            </span>\r
                            <span className="text-sm text-gray-500">\r
                              评分: {result.score}\r
                            </span>\r
                          </div>\r
                        </div>\r
                      </div>\r
                    </div>\r
                  ))}\r
                </div>\r
              )}\r
            </div>\r
          </div>\r
        </div>\r
        \r
        <div>\r
          <h4 className="font-semibold text-gray-700 mb-3">操作日志:</h4>\r
          <div className="bg-gray-50 rounded-lg p-3 min-h-[200px]">\r
            {logs.length === 0 ? (\r
              <p className="text-gray-500 text-sm">修改搜索条件查看日志</p>\r
            ) : (\r
              <div className="space-y-1 max-h-40 overflow-y-auto">\r
                {logs.map((log, index) => (\r
                  <div key={index} className="text-sm font-mono text-gray-700">\r
                    {log}\r
                  </div>\r
                ))}\r
              </div>\r
            )}\r
          </div>\r
          \r
          <div className="mt-4 p-3 bg-teal-50 rounded border border-teal-200">\r
            <h4 className="font-semibold text-teal-800 mb-2">当前搜索条件:</h4>\r
            <div className="text-sm text-teal-700 space-y-1">\r
              <p><strong>搜索词:</strong> "{searchTerm}" ({searchTerm.length} 字符)</p>\r
              <p><strong>分类:</strong> {category}</p>\r
              <p><strong>排序:</strong> {sortBy}</p>\r
              <p><strong>启用搜索:</strong> {searchTerm.length > 0 ? '是' : '否'}</p>\r
            </div>\r
          </div>\r
          \r
          <div className="mt-4 p-3 bg-orange-50 rounded border border-orange-200">\r
            <h4 className="font-semibold text-orange-800 mb-2">依赖机制:</h4>\r
            <ul className="text-sm text-orange-700 space-y-1">\r
              <li>• 搜索词、分类、排序作为依赖项</li>\r
              <li>• 任一依赖项变化都会触发新请求</li>\r
              <li>• 只有搜索词不为空时才启用请求</li>\r
              <li>• 自动取消之前的请求避免竞态</li>\r
            </ul>\r
          </div>\r
        </div>\r
      </div>\r
      \r
      <div className="mt-4 p-3 bg-cyan-50 rounded border border-cyan-200">\r
        <p className="text-sm text-cyan-800">\r
          💡 dependencies 参数让 useFetch 在指定依赖项变化时自动重新请求，结合 enabled 参数可以精确控制请求时机。\r
        </p>\r
      </div>\r
    </div>\r
  );\r
};\r
\r
export default DependencyDemo;`,E=()=>e.jsx($,{title:"useFetch",description:"自定义 Hook，用于封装数据获取逻辑。它提供了 loading、error、data 状态管理，支持请求取消、条件请求、依赖更新等功能，是处理 API 请求的强大工具。",overview:e.jsx("div",{className:"space-y-4",children:e.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-6",children:[e.jsxs("div",{className:"bg-blue-50 p-4 rounded-lg border border-blue-200",children:[e.jsx("h3",{className:"font-semibold text-blue-800 mb-2",children:"🎯 核心功能"}),e.jsxs("ul",{className:"text-sm text-blue-700 space-y-1",children:[e.jsx("li",{children:"• 自动状态管理 (loading/error/data)"}),e.jsx("li",{children:"• 请求取消和防止内存泄漏"}),e.jsx("li",{children:"• 条件请求控制"}),e.jsx("li",{children:"• 依赖项自动更新"})]})]}),e.jsxs("div",{className:"bg-green-50 p-4 rounded-lg border border-green-200",children:[e.jsx("h3",{className:"font-semibold text-green-800 mb-2",children:"✨ 主要优势"}),e.jsxs("ul",{className:"text-sm text-green-700 space-y-1",children:[e.jsx("li",{children:"• 减少样板代码"}),e.jsx("li",{children:"• 统一错误处理"}),e.jsx("li",{children:"• 自动清理资源"}),e.jsx("li",{children:"• 灵活的配置选项"})]})]}),e.jsxs("div",{className:"bg-yellow-50 p-4 rounded-lg border border-yellow-200",children:[e.jsx("h3",{className:"font-semibold text-yellow-800 mb-2",children:"🎪 适用场景"}),e.jsxs("ul",{className:"text-sm text-yellow-700 space-y-1",children:[e.jsx("li",{children:"• RESTful API 数据获取"}),e.jsx("li",{children:"• 条件性数据加载"}),e.jsx("li",{children:"• 搜索和过滤功能"}),e.jsx("li",{children:"• 用户交互驱动的请求"})]})]}),e.jsxs("div",{className:"bg-red-50 p-4 rounded-lg border border-red-200",children:[e.jsx("h3",{className:"font-semibold text-red-800 mb-2",children:"⚠️ 注意事项"}),e.jsxs("ul",{className:"text-sm text-red-700 space-y-1",children:[e.jsx("li",{children:"• 合理设置依赖项避免过度请求"}),e.jsx("li",{children:"• 处理组件卸载时的清理"}),e.jsx("li",{children:"• 考虑缓存策略优化性能"}),e.jsx("li",{children:"• 错误边界和用户反馈"})]})]})]})}),examples:[{title:"基础用法演示",component:e.jsx(C,{}),description:"演示 useFetch 的基本用法，包括不同端点的数据获取和状态管理",observationPoints:["切换不同的 API 端点，观察数据的变化","注意 loading 状态的显示和隐藏","观察错误处理和重试机制","查看请求日志中的时间记录","测试手动重新请求功能"],keyPoints:["useFetch 自动管理 loading、error、data 状态","支持不同类型的 API 端点","提供 refetch 方法手动重新请求","自动取消之前的请求避免竞态条件"],commonTraps:["忘记处理 loading 和 error 状态","没有正确设置依赖项导致过度请求","组件卸载时没有清理请求"],solutions:["始终处理三种状态：loading、error、success","合理设置 dependencies 参数","使用 AbortController 自动取消请求"],codeExample:{title:"基础 useFetch 实现",code:S,language:"typescript",highlights:"17,18,19,20,21,22,23,31,32,33,34,35,36,37,38,39,58,59,64,65,66,67,68,69,70,71,72,73,74"}},{title:"条件请求演示",component:e.jsx(D,{}),description:"演示如何使用 enabled 参数控制请求的执行时机",observationPoints:["输入用户ID但不启用自动请求，观察不会发起请求","启用自动请求后，ID变化时自动发起新请求","使用手动请求按钮在禁用自动请求时获取数据","观察请求状态的实时变化","查看操作日志中的请求时机"],keyPoints:["enabled 参数控制请求是否执行","支持手动触发和自动触发两种模式","避免不必要的网络请求","提供灵活的请求控制策略"],commonTraps:["忘记设置 enabled 参数导致意外请求","条件逻辑过于复杂难以维护","没有提供手动请求的备选方案"],solutions:["明确定义请求的触发条件","保持条件逻辑简单清晰","提供手动请求作为备选"],codeExample:{title:"条件请求实现",code:k,language:"typescript",highlights:"5,6,7,8,9,10,11,22,23,24,25"}},{title:"依赖更新演示",component:e.jsx(I,{}),description:"演示如何使用 dependencies 参数实现依赖项变化时的自动重新请求",observationPoints:["修改搜索词、分类或排序，观察自动重新请求","注意只有搜索词不为空时才会发起请求","观察多个依赖项同时变化时的请求合并","查看搜索结果的实时更新","检查操作日志中的依赖项变化记录"],keyPoints:["dependencies 数组中的任一项变化都会触发重新请求","结合 enabled 参数精确控制请求时机","自动取消之前的请求避免竞态条件","支持复杂的搜索和过滤场景"],commonTraps:["依赖项设置不当导致过度请求","忘记将相关变量加入依赖项","依赖项变化过于频繁影响性能"],solutions:["仔细分析哪些变量应该作为依赖项","使用防抖或节流优化频繁变化的依赖项","合理设置 enabled 条件减少不必要的请求"],codeExample:{title:"依赖更新实现",code:L,language:"typescript",highlights:"6,7,8,9,10,11,12,15,16,17,20,21,22,25,26,27"}}],tutorial:{concepts:["自定义 Hook 的基本结构和返回值","useState 和 useEffect 的组合使用","AbortController 的请求取消机制","useCallback 的依赖项管理","条件请求和依赖更新的实现原理"],steps:["定义 Hook 的参数接口和返回值类型","使用 useState 管理 data、loading、error 状态","实现 fetchData 函数处理实际的网络请求","使用 AbortController 支持请求取消","通过 useCallback 和 useEffect 管理请求时机","提供 refetch 方法支持手动重新请求"],tips:["始终处理 loading、error、success 三种状态","使用 AbortController 避免内存泄漏","合理设置依赖项避免过度请求","提供 enabled 参数控制请求时机","考虑添加缓存机制优化性能"]},interview:{questions:[{question:"useFetch 相比直接使用 fetch 有什么优势？",answer:"useFetch 提供了统一的状态管理（loading/error/data），自动处理请求取消避免内存泄漏，支持条件请求和依赖更新，减少了大量样板代码，让组件专注于业务逻辑而不是请求细节。"},{question:"如何避免 useFetch 中的竞态条件？",answer:"使用 AbortController 在新请求开始前取消之前的请求，确保只有最新的请求结果会更新状态。同时在组件卸载时也要取消正在进行的请求，避免在已卸载的组件上更新状态。"},{question:"useFetch 的依赖项应该如何设置？",answer:"依赖项应该包含所有影响请求结果的变量，如 URL 参数、查询条件等。要避免将频繁变化的值直接作为依赖项，可以使用防抖处理。同时要注意对象和数组的引用比较问题。"},{question:"如何在 useFetch 中实现缓存？",answer:"可以在 Hook 外部维护一个缓存对象，以请求的 key（URL + 参数）作为缓存键。在发起请求前先检查缓存，如果有有效缓存则直接返回，否则发起请求并将结果存入缓存。还可以设置缓存过期时间。"}],keyPoints:["统一的状态管理","自动请求取消","条件请求控制","依赖项自动更新","错误处理和重试机制"]},bestPractices:{dos:["始终处理 loading、error、success 三种状态","使用 AbortController 取消请求避免内存泄漏","合理设置 dependencies 参数","提供 enabled 参数控制请求时机","使用 TypeScript 定义清晰的类型","考虑添加重试机制处理临时失败","实现适当的缓存策略优化性能"],donts:["不要忘记处理组件卸载时的清理","不要将频繁变化的值直接作为依赖项","不要在请求中直接修改外部状态","不要忽略错误处理和用户反馈","不要在每次渲染时创建新的配置对象"],patterns:["请求状态管理模式：loading -> success/error","请求取消模式：AbortController + cleanup","条件请求模式：enabled + dependencies","重试模式：exponential backoff + max attempts","缓存模式：key-value + TTL"]}});export{E as default};
