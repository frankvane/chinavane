import{r as h,j as e}from"./index-BWM6UHr8.js";import{p as F}from"./middleware-CPUTVaT6.js";import{c as C,C as A}from"./ComponentTemplate-ClBHhBQ8.js";const x=async(s,g=1e3)=>(await new Promise(a=>setTimeout(a,g)),s),L=(s,g,a="user")=>{const n=a==="admin"?["read","write","delete","admin"]:a==="moderator"?["read","write","moderate"]:["read"];return{id:Math.random().toString(36).substr(2,9),username:s,email:g,avatar:`https://ui-avatars.com/api/?name=${s}&background=random`,role:a,permissions:n,profile:{firstName:s.split(" ")[0]||s,lastName:s.split(" ")[1]||"User",phone:"+1-234-567-8900",address:"123 Main St, City, State",bio:`Hello, I'm ${s}!`},preferences:{theme:"light",language:"en",notifications:!0},createdAt:new Date,updatedAt:new Date,lastLoginAt:new Date}},f=s=>`mock-jwt-token-${s}-${Date.now()}`,p=C()(F((s,g)=>({auth:{isAuthenticated:!1,isLoading:!1,user:null,token:null,refreshToken:null,expiresAt:null,error:null},login:async a=>{s(n=>({auth:{...n.auth,isLoading:!0,error:null}}));try{const n=L(a.username,`${a.username}@example.com`),r=f(n.id),o=f(n.id),u=Date.now()+24*60*60*1e3;await x({user:n,token:r,refreshToken:o,expiresAt:u}),s(m=>({auth:{...m.auth,isAuthenticated:!0,isLoading:!1,user:n,token:r,refreshToken:o,expiresAt:u,error:null}}))}catch(n){s(r=>({auth:{...r.auth,isLoading:!1,error:n instanceof Error?n.message:"Login failed"}}))}},register:async a=>{s(n=>({auth:{...n.auth,isLoading:!0,error:null}}));try{const n=L(a.username,a.email),r=f(n.id),o=f(n.id),u=Date.now()+24*60*60*1e3;await x({user:n,token:r,refreshToken:o,expiresAt:u}),s(m=>({auth:{...m.auth,isAuthenticated:!0,isLoading:!1,user:n,token:r,refreshToken:o,expiresAt:u,error:null}}))}catch(n){s(r=>({auth:{...r.auth,isLoading:!1,error:n instanceof Error?n.message:"Registration failed"}}))}},logout:()=>{s(a=>({auth:{...a.auth,isAuthenticated:!1,user:null,token:null,refreshToken:null,expiresAt:null,error:null}}))},refreshAuth:async()=>{var n,r;const{auth:a}=g();if(a.refreshToken){s(o=>({auth:{...o.auth,isLoading:!0}}));try{const o=f(((n=a.user)==null?void 0:n.id)||""),u=f(((r=a.user)==null?void 0:r.id)||""),m=Date.now()+24*60*60*1e3;await x({newToken:o,newRefreshToken:u,expiresAt:m}),s(d=>({auth:{...d.auth,token:o,refreshToken:u,expiresAt:m,isLoading:!1}}))}catch{s(u=>({auth:{...u.auth,isLoading:!1,error:"Token refresh failed"}}))}}},requestPasswordReset:async a=>{s(n=>({auth:{...n.auth,isLoading:!0,error:null}}));try{await x({success:!0,message:"Password reset email sent"}),s(n=>({auth:{...n.auth,isLoading:!1,error:null}}))}catch{s(r=>({auth:{...r.auth,isLoading:!1,error:"Failed to send password reset email"}}))}},confirmPasswordReset:async a=>{s(n=>({auth:{...n.auth,isLoading:!0,error:null}}));try{await x({success:!0,message:"Password reset successfully"}),s(n=>({auth:{...n.auth,isLoading:!1,error:null}}))}catch{s(r=>({auth:{...r.auth,isLoading:!1,error:"Password reset failed"}}))}},changePassword:async(a,n)=>{s(r=>({auth:{...r.auth,isLoading:!0,error:null}}));try{await x({success:!0,message:"Password changed successfully"}),s(r=>({auth:{...r.auth,isLoading:!1,error:null}}))}catch{s(o=>({auth:{...o.auth,isLoading:!1,error:"Password change failed"}}))}},updateProfile:async a=>{s(n=>({auth:{...n.auth,isLoading:!0,error:null}}));try{await x({success:!0}),s(n=>({auth:{...n.auth,user:n.auth.user?{...n.auth.user,profile:{...n.auth.user.profile,...a}}:null,isLoading:!1,error:null}}))}catch{s(r=>({auth:{...r.auth,isLoading:!1,error:"Profile update failed"}}))}},updatePreferences:async a=>{s(n=>({auth:{...n.auth,isLoading:!0,error:null}}));try{await x({success:!0}),s(n=>({auth:{...n.auth,user:n.auth.user?{...n.auth.user,preferences:{...n.auth.user.preferences,...a}}:null,isLoading:!1,error:null}}))}catch{s(r=>({auth:{...r.auth,isLoading:!1,error:"Preferences update failed"}}))}},uploadAvatar:async a=>{s(n=>({auth:{...n.auth,isLoading:!0,error:null}}));try{const n=URL.createObjectURL(a);await x({success:!0,avatarUrl:n}),s(r=>({auth:{...r.auth,user:r.auth.user?{...r.auth.user,avatar:n}:null,isLoading:!1,error:null}}))}catch{s(r=>({auth:{...r.auth,isLoading:!1,error:"Avatar upload failed"}}))}},hasPermission:a=>{var r;const{auth:n}=g();return((r=n.user)==null?void 0:r.permissions.includes(a))||!1},hasRole:a=>{var r;const{auth:n}=g();return((r=n.user)==null?void 0:r.role)===a},clearError:()=>{s(a=>({auth:{...a.auth,error:null}}))},setLoading:a=>{s(n=>({auth:{...n.auth,isLoading:a}}))}}),{name:"auth-storage",partialize:s=>({auth:{isAuthenticated:s.auth.isAuthenticated,user:s.auth.user,token:s.auth.token,refreshToken:s.auth.refreshToken,expiresAt:s.auth.expiresAt}})})),R=()=>{const[s,g]=h.useState(0),a=h.useRef(0),[n,r]=h.useState({firstName:"",lastName:"",phone:"",address:"",bio:""}),[o,u]=h.useState({theme:"light",language:"en",notifications:!0}),m=p(i=>i.auth.isAuthenticated),d=p(i=>i.auth.isLoading),t=p(i=>i.auth.user),b=p(i=>i.auth.error);a.current+=1,h.useEffect(()=>{g(a.current)},[m,d,t,b]);const{updateProfile:N,updatePreferences:v,hasPermission:y,hasRole:j,clearError:w}=p();h.useEffect(()=>{t&&(r({firstName:t.profile.firstName,lastName:t.profile.lastName,phone:t.profile.phone||"",address:t.profile.address||"",bio:t.profile.bio||""}),u({theme:t.preferences.theme,language:t.preferences.language,notifications:t.preferences.notifications}))},[t]);const k=async i=>{i.preventDefault(),await N(n)},P=async i=>{i.preventDefault(),await v(o)};if(!m||!t)return e.jsxs("div",{className:"bg-white p-6 rounded-lg shadow",children:[e.jsx("h3",{className:"text-lg font-semibold mb-4",children:"高级认证功能演示"}),e.jsx("div",{className:"text-center text-gray-500 py-8",children:"请先登录以查看高级功能"})]});const c=i=>y(i),l=i=>j(i);return e.jsx("div",{className:"space-y-6",children:e.jsxs("div",{className:"bg-white p-6 rounded-lg shadow",children:[e.jsx("h3",{className:"text-lg font-semibold mb-4",children:"高级认证功能演示"}),e.jsxs("div",{className:"mb-4 p-4 bg-green-50 rounded-lg border border-green-200",children:[e.jsx("h4",{className:"font-medium text-green-800 mb-2",children:"✅ 高级认证功能"}),e.jsxs("ul",{className:"text-sm text-green-700 space-y-1",children:[e.jsx("li",{children:"• 用户资料管理和更新"}),e.jsx("li",{children:"• 偏好设置和主题切换"}),e.jsx("li",{children:"• 权限检查和角色验证"}),e.jsx("li",{children:"• 错误处理和状态管理"}),e.jsx("li",{children:"• 实时状态同步"})]})]}),e.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-3 gap-6 mb-6",children:[e.jsxs("div",{className:"border rounded-lg p-4 bg-blue-50",children:[e.jsx("h4",{className:"font-medium text-blue-800 mb-2",children:"当前用户信息"}),e.jsxs("div",{className:"text-sm space-y-1",children:[e.jsxs("div",{className:"flex items-center space-x-2",children:[e.jsx("img",{src:t.avatar,alt:t.username,className:"w-8 h-8 rounded-full"}),e.jsx("span",{className:"font-medium",children:t.username})]}),e.jsxs("p",{children:["邮箱: ",t.email]}),e.jsxs("p",{children:["姓名: ",t.profile.firstName," ",t.profile.lastName]}),e.jsxs("p",{children:["电话: ",t.profile.phone||"未设置"]}),e.jsxs("p",{children:["地址: ",t.profile.address||"未设置"]}),e.jsxs("p",{children:["简介: ",t.profile.bio||"未设置"]}),e.jsxs("p",{children:["主题: ",t.preferences.theme]}),e.jsxs("p",{children:["语言: ",t.preferences.language]}),e.jsxs("p",{children:["通知: ",t.preferences.notifications?"开启":"关闭"]})]})]}),e.jsxs("div",{className:"border rounded-lg p-4 bg-green-50",children:[e.jsx("h4",{className:"font-medium text-green-800 mb-2",children:"角色权限"}),e.jsxs("div",{className:"text-sm space-y-2",children:[e.jsxs("div",{children:[e.jsxs("p",{className:"font-medium",children:["用户角色: ",e.jsx("span",{className:"text-blue-600",children:t.role})]}),e.jsxs("div",{className:"mt-2 space-y-1",children:[e.jsxs("p",{children:["管理员角色: ",l("admin")?"✅":"❌"]}),e.jsxs("p",{children:["版主角色: ",l("moderator")?"✅":"❌"]}),e.jsxs("p",{children:["普通用户角色: ",l("user")?"✅":"❌"]})]})]}),e.jsxs("div",{className:"mt-3",children:[e.jsx("p",{className:"font-medium",children:"权限列表:"}),e.jsx("div",{className:"mt-1 text-xs bg-gray-100 p-2 rounded",children:t.permissions.join(", ")})]})]})]}),e.jsxs("div",{className:"border rounded-lg p-4 bg-yellow-50",children:[e.jsx("h4",{className:"font-medium text-yellow-800 mb-2",children:"权限检查"}),e.jsxs("div",{className:"text-sm space-y-1",children:[e.jsxs("p",{children:["读取权限: ",c("read")?"✅":"❌"]}),e.jsxs("p",{children:["写入权限: ",c("write")?"✅":"❌"]}),e.jsxs("p",{children:["删除权限: ",c("delete")?"✅":"❌"]}),e.jsxs("p",{children:["管理权限: ",c("admin")?"✅":"❌"]}),e.jsxs("p",{children:["审核权限: ",c("moderate")?"✅":"❌"]}),e.jsxs("p",{className:"text-yellow-600 font-medium mt-2",children:["渲染次数: ",s]})]})]})]}),e.jsxs("div",{className:"mb-6 border rounded-lg p-4 bg-gray-50",children:[e.jsx("h4",{className:"font-medium mb-4",children:"权限功能演示"}),e.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-4 gap-4",children:[e.jsxs("div",{className:`p-3 rounded-lg border ${c("read")?"bg-green-100 border-green-300":"bg-gray-100 border-gray-300"}`,children:[e.jsx("h5",{className:"font-medium text-sm",children:"读取功能"}),e.jsx("p",{className:"text-xs text-gray-600 mt-1",children:"查看内容权限"}),e.jsx("div",{className:"mt-2",children:e.jsx("button",{disabled:!c("read"),className:`px-3 py-1 text-xs rounded ${c("read")?"bg-green-500 text-white hover:bg-green-600":"bg-gray-300 text-gray-500 cursor-not-allowed"}`,children:c("read")?"可以查看":"无权限"})})]}),e.jsxs("div",{className:`p-3 rounded-lg border ${c("write")?"bg-blue-100 border-blue-300":"bg-gray-100 border-gray-300"}`,children:[e.jsx("h5",{className:"font-medium text-sm",children:" 写入功能"}),e.jsx("p",{className:"text-xs text-gray-600 mt-1",children:"创建/编辑内容权限"}),e.jsx("div",{className:"mt-2",children:e.jsx("button",{disabled:!c("write"),className:`px-3 py-1 text-xs rounded ${c("write")?"bg-blue-500 text-white hover:bg-blue-600":"bg-gray-300 text-gray-500 cursor-not-allowed"}`,children:c("write")?"可以编辑":"无权限"})})]}),e.jsxs("div",{className:`p-3 rounded-lg border ${c("delete")?"bg-red-100 border-red-300":"bg-gray-100 border-gray-300"}`,children:[e.jsx("h5",{className:"font-medium text-sm",children:"删除功能"}),e.jsx("p",{className:"text-xs text-gray-600 mt-1",children:"删除内容权限"}),e.jsx("div",{className:"mt-2",children:e.jsx("button",{disabled:!c("delete"),className:`px-3 py-1 text-xs rounded ${c("delete")?"bg-red-500 text-white hover:bg-red-600":"bg-gray-300 text-gray-500 cursor-not-allowed"}`,children:c("delete")?"可以删除":"无权限"})})]}),e.jsxs("div",{className:`p-3 rounded-lg border ${c("admin")?"bg-purple-100 border-purple-300":"bg-gray-100 border-gray-300"}`,children:[e.jsx("h5",{className:"font-medium text-sm",children:"管理功能"}),e.jsx("p",{className:"text-xs text-gray-600 mt-1",children:"系统管理权限"}),e.jsx("div",{className:"mt-2",children:e.jsx("button",{disabled:!c("admin"),className:`px-3 py-1 text-xs rounded ${c("admin")?"bg-purple-500 text-white hover:bg-purple-600":"bg-gray-300 text-gray-500 cursor-not-allowed"}`,children:c("admin")?"可以管理":"无权限"})})]})]})]}),e.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-6",children:[e.jsxs("div",{className:"border rounded-lg p-4",children:[e.jsx("h4",{className:"font-medium mb-4",children:"更新资料"}),e.jsxs("form",{onSubmit:k,className:"space-y-3",children:[e.jsxs("div",{children:[e.jsx("label",{className:"block text-sm font-medium text-gray-700 mb-1",children:"名字"}),e.jsx("input",{type:"text",value:n.firstName,onChange:i=>r({...n,firstName:i.target.value}),className:"w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500",required:!0})]}),e.jsxs("div",{children:[e.jsx("label",{className:"block text-sm font-medium text-gray-700 mb-1",children:"姓氏"}),e.jsx("input",{type:"text",value:n.lastName,onChange:i=>r({...n,lastName:i.target.value}),className:"w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500",required:!0})]}),e.jsxs("div",{children:[e.jsx("label",{className:"block text-sm font-medium text-gray-700 mb-1",children:"电话"}),e.jsx("input",{type:"tel",value:n.phone,onChange:i=>r({...n,phone:i.target.value}),className:"w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"})]}),e.jsxs("div",{children:[e.jsx("label",{className:"block text-sm font-medium text-gray-700 mb-1",children:"地址"}),e.jsx("input",{type:"text",value:n.address,onChange:i=>r({...n,address:i.target.value}),className:"w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"})]}),e.jsxs("div",{children:[e.jsx("label",{className:"block text-sm font-medium text-gray-700 mb-1",children:"简介"}),e.jsx("textarea",{value:n.bio,onChange:i=>r({...n,bio:i.target.value}),className:"w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500",rows:3})]}),e.jsx("button",{type:"submit",disabled:d,className:`w-full py-2 px-4 rounded-md text-white ${d?"bg-gray-400 cursor-not-allowed":"bg-blue-500 hover:bg-blue-600"}`,children:d?"更新中...":"更新资料"})]})]}),e.jsxs("div",{className:"border rounded-lg p-4",children:[e.jsx("h4",{className:"font-medium mb-4",children:"偏好设置"}),e.jsxs("form",{onSubmit:P,className:"space-y-3",children:[e.jsxs("div",{children:[e.jsx("label",{className:"block text-sm font-medium text-gray-700 mb-1",children:"主题"}),e.jsxs("select",{value:o.theme,onChange:i=>u({...o,theme:i.target.value}),className:"w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500",children:[e.jsx("option",{value:"light",children:"浅色主题"}),e.jsx("option",{value:"dark",children:"深色主题"})]})]}),e.jsxs("div",{children:[e.jsx("label",{className:"block text-sm font-medium text-gray-700 mb-1",children:"语言"}),e.jsxs("select",{value:o.language,onChange:i=>u({...o,language:i.target.value}),className:"w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500",children:[e.jsx("option",{value:"en",children:"English"}),e.jsx("option",{value:"zh",children:"中文"}),e.jsx("option",{value:"ja",children:"日本語"})]})]}),e.jsx("div",{children:e.jsxs("label",{className:"flex items-center",children:[e.jsx("input",{type:"checkbox",checked:o.notifications,onChange:i=>u({...o,notifications:i.target.checked}),className:"mr-2"}),e.jsx("span",{className:"text-sm font-medium text-gray-700",children:"接收通知"})]})}),e.jsx("button",{type:"submit",disabled:d,className:`w-full py-2 px-4 rounded-md text-white ${d?"bg-gray-400 cursor-not-allowed":"bg-green-500 hover:bg-green-600"}`,children:d?"更新中...":"更新偏好"})]})]})]}),b&&e.jsxs("div",{className:"mt-4 p-4 bg-red-50 border border-red-200 rounded-lg",children:[e.jsx("p",{className:"text-red-800",children:b}),e.jsx("button",{onClick:w,className:"mt-2 px-3 py-1 bg-red-500 text-white text-sm rounded hover:bg-red-600",children:"清除错误"})]}),e.jsxs("div",{className:"bg-green-50 p-4 rounded-lg border border-green-200 mt-6",children:[e.jsx("h4",{className:"font-medium text-green-800 mb-2",children:"⚠️ 观察要点"}),e.jsxs("ul",{className:"text-sm text-green-700 space-y-1",children:[e.jsxs("li",{children:["• ",e.jsx("strong",{children:"权限展示"}),"：清晰显示不同角色的权限差异"]}),e.jsxs("li",{children:["• ",e.jsx("strong",{children:"功能演示"}),"：根据权限控制功能可用性"]}),e.jsxs("li",{children:["• ",e.jsx("strong",{children:"资料更新"}),"：观察用户信息的实时更新"]}),e.jsxs("li",{children:["• ",e.jsx("strong",{children:"偏好设置"}),"：查看主题和语言切换效果"]}),e.jsxs("li",{children:["• ",e.jsx("strong",{children:"状态管理"}),"：观察渲染次数和状态变化"]}),e.jsxs("li",{children:["• ",e.jsx("strong",{children:"错误处理"}),"：体验错误状态和清除功能"]})]}),e.jsx("p",{className:"mt-2 text-green-600 font-medium",children:"✅ 高级认证功能完整，支持完整的用户管理和权限控制！"})]})]})})},S=()=>{const[s,g]=h.useState(0),a=h.useRef(0),[n,r]=h.useState({username:"",password:""}),[o,u]=h.useState({username:"",email:"",password:"",confirmPassword:"",firstName:"",lastName:""}),m=p(l=>l.auth.isAuthenticated),d=p(l=>l.auth.isLoading),t=p(l=>l.auth.user),b=p(l=>l.auth.error);a.current+=1,h.useEffect(()=>{g(a.current)},[m,d,t,b]);const{login:N,register:v,logout:y,clearError:j}=p(),w=async l=>{l.preventDefault(),await N(n)},k=async l=>{l.preventDefault(),o.password===o.confirmPassword&&await v(o)},P=()=>{y(),r({username:"",password:""}),u({username:"",email:"",password:"",confirmPassword:"",firstName:"",lastName:""})},c=async l=>{await N({username:l==="admin"?"admin":l==="moderator"?"moderator":"user",password:"password123"})};return e.jsx("div",{className:"space-y-6",children:e.jsxs("div",{className:"bg-white p-6 rounded-lg shadow",children:[e.jsx("h3",{className:"text-lg font-semibold mb-4",children:"基础认证功能演示"}),e.jsxs("div",{className:"mb-4 p-4 bg-blue-50 rounded-lg border border-blue-200",children:[e.jsx("h4",{className:"font-medium text-blue-800 mb-2",children:"✅ 基础认证功能"}),e.jsxs("ul",{className:"text-sm text-blue-700 space-y-1",children:[e.jsx("li",{children:"• 用户登录和注册功能"}),e.jsx("li",{children:"• 用户状态管理和持久化"}),e.jsx("li",{children:"• Token 管理和自动刷新"}),e.jsx("li",{children:"• 权限和角色检查"}),e.jsx("li",{children:"• 错误处理和加载状态"})]})]}),e.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-6 mb-6",children:[e.jsxs("div",{className:"border rounded-lg p-4 bg-blue-50",children:[e.jsx("h4",{className:"font-medium text-blue-800 mb-2",children:"认证状态"}),e.jsxs("div",{className:"text-sm space-y-1",children:[e.jsxs("p",{children:["登录状态: ",m?"已登录":"未登录"]}),e.jsxs("p",{children:["加载状态: ",d?"加载中...":"空闲"]}),e.jsxs("p",{children:["用户: ",(t==null?void 0:t.username)||"未登录"]}),e.jsxs("p",{children:["角色: ",(t==null?void 0:t.role)||"无"]}),e.jsxs("p",{children:["权限: ",(t==null?void 0:t.permissions.join(", "))||"无"]}),b&&e.jsxs("p",{className:"text-red-600",children:["错误: ",b]}),e.jsxs("p",{className:"text-blue-600 font-medium",children:["渲染次数: ",s]})]})]}),e.jsxs("div",{className:"border rounded-lg p-4 bg-green-50",children:[e.jsx("h4",{className:"font-medium text-green-800 mb-2",children:"用户信息"}),t?e.jsxs("div",{className:"text-sm space-y-1",children:[e.jsxs("p",{children:["用户名: ",t.username]}),e.jsxs("p",{children:["邮箱: ",t.email]}),e.jsxs("p",{children:["姓名: ",t.profile.firstName," ",t.profile.lastName]}),e.jsxs("p",{children:["电话: ",t.profile.phone]}),e.jsxs("p",{children:["地址: ",t.profile.address]}),e.jsxs("p",{children:["主题: ",t.preferences.theme]}),e.jsxs("p",{children:["语言: ",t.preferences.language]}),e.jsxs("p",{children:["通知: ",t.preferences.notifications?"开启":"关闭"]})]}):e.jsx("p",{className:"text-gray-500",children:"请先登录"})]})]}),m?e.jsx("div",{className:"space-y-4",children:e.jsxs("div",{className:"flex gap-3",children:[e.jsx("button",{onClick:P,className:"px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600",children:"退出登录"}),e.jsx("button",{onClick:j,className:"px-4 py-2 bg-gray-500 text-white rounded hover:bg-gray-600",children:"清除错误"})]})}):e.jsxs("div",{className:"space-y-6",children:[e.jsxs("div",{className:"border rounded-lg p-4 bg-yellow-50",children:[e.jsx("h4",{className:"font-medium mb-4 text-yellow-800",children:"快速登录演示"}),e.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-3 gap-4",children:[e.jsxs("div",{className:"text-center",children:[e.jsx("h5",{className:"font-medium text-gray-700 mb-2",children:"管理员"}),e.jsx("p",{className:"text-xs text-gray-500 mb-3",children:"完整权限"}),e.jsx("button",{onClick:()=>c("admin"),disabled:d,className:`w-full py-2 px-4 rounded-md text-white text-sm ${d?"bg-gray-400 cursor-not-allowed":"bg-red-500 hover:bg-red-600"}`,children:d?"登录中...":"管理员登录"}),e.jsx("p",{className:"text-xs text-gray-500 mt-1",children:"权限: read, write, delete, admin"})]}),e.jsxs("div",{className:"text-center",children:[e.jsx("h5",{className:"font-medium text-gray-700 mb-2",children:"版主"}),e.jsx("p",{className:"text-xs text-gray-500 mb-3",children:"管理权限"}),e.jsx("button",{onClick:()=>c("moderator"),disabled:d,className:`w-full py-2 px-4 rounded-md text-white text-sm ${d?"bg-gray-400 cursor-not-allowed":"bg-orange-500 hover:bg-orange-600"}`,children:d?"登录中...":"版主登录"}),e.jsx("p",{className:"text-xs text-gray-500 mt-1",children:"权限: read, write, moderate"})]}),e.jsxs("div",{className:"text-center",children:[e.jsx("h5",{className:"font-medium text-gray-700 mb-2",children:"普通用户"}),e.jsx("p",{className:"text-xs text-gray-500 mb-3",children:"基础权限"}),e.jsx("button",{onClick:()=>c("user"),disabled:d,className:`w-full py-2 px-4 rounded-md text-white text-sm ${d?"bg-gray-400 cursor-not-allowed":"bg-blue-500 hover:bg-blue-600"}`,children:d?"登录中...":"用户登录"}),e.jsx("p",{className:"text-xs text-gray-500 mt-1",children:"权限: read"})]})]})]}),e.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-6",children:[e.jsxs("div",{className:"border rounded-lg p-4",children:[e.jsx("h4",{className:"font-medium mb-4",children:"手动登录"}),e.jsxs("form",{onSubmit:w,className:"space-y-4",children:[e.jsxs("div",{children:[e.jsx("label",{className:"block text-sm font-medium text-gray-700 mb-1",children:"用户名"}),e.jsx("input",{type:"text",value:n.username,onChange:l=>r({...n,username:l.target.value}),className:"w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500",placeholder:"请输入用户名",required:!0})]}),e.jsxs("div",{children:[e.jsx("label",{className:"block text-sm font-medium text-gray-700 mb-1",children:"密码"}),e.jsx("input",{type:"password",value:n.password,onChange:l=>r({...n,password:l.target.value}),className:"w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500",placeholder:"请输入密码",required:!0})]}),e.jsx("button",{type:"submit",disabled:d,className:`w-full py-2 px-4 rounded-md text-white ${d?"bg-gray-400 cursor-not-allowed":"bg-blue-500 hover:bg-blue-600"}`,children:d?"登录中...":"登录"})]})]}),e.jsxs("div",{className:"border rounded-lg p-4",children:[e.jsx("h4",{className:"font-medium mb-4",children:"用户注册"}),e.jsxs("form",{onSubmit:k,className:"space-y-4",children:[e.jsxs("div",{className:"grid grid-cols-2 gap-2",children:[e.jsxs("div",{children:[e.jsx("label",{className:"block text-sm font-medium text-gray-700 mb-1",children:"用户名"}),e.jsx("input",{type:"text",value:o.username,onChange:l=>u({...o,username:l.target.value}),className:"w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500",placeholder:"用户名",required:!0})]}),e.jsxs("div",{children:[e.jsx("label",{className:"block text-sm font-medium text-gray-700 mb-1",children:"邮箱"}),e.jsx("input",{type:"email",value:o.email,onChange:l=>u({...o,email:l.target.value}),className:"w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500",placeholder:"邮箱",required:!0})]})]}),e.jsxs("div",{className:"grid grid-cols-2 gap-2",children:[e.jsxs("div",{children:[e.jsx("label",{className:"block text-sm font-medium text-gray-700 mb-1",children:"密码"}),e.jsx("input",{type:"password",value:o.password,onChange:l=>u({...o,password:l.target.value}),className:"w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500",placeholder:"密码",required:!0})]}),e.jsxs("div",{children:[e.jsx("label",{className:"block text-sm font-medium text-gray-700 mb-1",children:"确认密码"}),e.jsx("input",{type:"password",value:o.confirmPassword,onChange:l=>u({...o,confirmPassword:l.target.value}),className:"w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500",placeholder:"确认密码",required:!0})]})]}),e.jsxs("div",{className:"grid grid-cols-2 gap-2",children:[e.jsxs("div",{children:[e.jsx("label",{className:"block text-sm font-medium text-gray-700 mb-1",children:"名字"}),e.jsx("input",{type:"text",value:o.firstName,onChange:l=>u({...o,firstName:l.target.value}),className:"w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500",placeholder:"名字",required:!0})]}),e.jsxs("div",{children:[e.jsx("label",{className:"block text-sm font-medium text-gray-700 mb-1",children:"姓氏"}),e.jsx("input",{type:"text",value:o.lastName,onChange:l=>u({...o,lastName:l.target.value}),className:"w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500",placeholder:"姓氏",required:!0})]})]}),e.jsx("button",{type:"submit",disabled:d,className:`w-full py-2 px-4 rounded-md text-white ${d?"bg-gray-400 cursor-not-allowed":"bg-green-500 hover:bg-green-600"}`,children:d?"注册中...":"注册"})]})]})]})]}),e.jsxs("div",{className:"bg-blue-50 p-4 rounded-lg border border-blue-200 mt-6",children:[e.jsx("h4",{className:"font-medium text-blue-800 mb-2",children:"⚠️ 观察要点"}),e.jsxs("ul",{className:"text-sm text-blue-700 space-y-1",children:[e.jsxs("li",{children:["• ",e.jsx("strong",{children:"快速登录"}),"：体验不同角色的权限差异"]}),e.jsxs("li",{children:["• ",e.jsx("strong",{children:"登录/注册"}),"：观察状态变化和渲染次数"]}),e.jsxs("li",{children:["• ",e.jsx("strong",{children:"用户信息"}),"：查看用户详细信息和权限"]}),e.jsxs("li",{children:["• ",e.jsx("strong",{children:"持久化"}),"：刷新页面后状态保持"]}),e.jsxs("li",{children:["• ",e.jsx("strong",{children:"错误处理"}),"：查看错误状态和清除功能"]}),e.jsxs("li",{children:["• ",e.jsx("strong",{children:"加载状态"}),"：观察异步操作的加载状态"]})]}),e.jsx("p",{className:"mt-2 text-blue-600 font-medium",children:"✅ 基础认证功能完整，支持多种登录方式和权限管理！"})]})]})})},T=`import React, { useEffect, useRef, useState } from "react";

import { useAuthStore } from "../stores/authStore";

const AdvancedAuthDemo: React.FC = () => {
  const [renderCount, setRenderCount] = useState(0);
  const renderCountRef = useRef(0);
  const [profileForm, setProfileForm] = useState({
    firstName: "",
    lastName: "",
    phone: "",
    address: "",
    bio: "",
  });
  const [preferencesForm, setPreferencesForm] = useState({
    theme: "light" as "light" | "dark",
    language: "en",
    notifications: true,
  });

  // 使用精准选择器
  const isAuthenticated = useAuthStore((state) => state.auth.isAuthenticated);
  const isLoading = useAuthStore((state) => state.auth.isLoading);
  const user = useAuthStore((state) => state.auth.user);
  const error = useAuthStore((state) => state.auth.error);

  // 渲染计数
  renderCountRef.current += 1;
  useEffect(() => {
    setRenderCount(renderCountRef.current);
  }, [isAuthenticated, isLoading, user, error]);

  const {
    updateProfile,
    updatePreferences,
    hasPermission,
    hasRole,
    clearError,
  } = useAuthStore();

  // 初始化表单数据
  useEffect(() => {
    if (user) {
      setProfileForm({
        firstName: user.profile.firstName,
        lastName: user.profile.lastName,
        phone: user.profile.phone || "",
        address: user.profile.address || "",
        bio: user.profile.bio || "",
      });
      setPreferencesForm({
        theme: user.preferences.theme,
        language: user.preferences.language,
        notifications: user.preferences.notifications,
      });
    }
  }, [user]);

  const handleProfileUpdate = async (e: React.FormEvent) => {
    e.preventDefault();
    await updateProfile(profileForm);
  };

  const handlePreferencesUpdate = async (e: React.FormEvent) => {
    e.preventDefault();
    await updatePreferences(preferencesForm);
  };

  if (!isAuthenticated || !user) {
    return (
      <div className="bg-white p-6 rounded-lg shadow">
        <h3 className="text-lg font-semibold mb-4">高级认证功能演示</h3>
        <div className="text-center text-gray-500 py-8">
          请先登录以查看高级功能
        </div>
      </div>
    );
  }

  // 权限检查函数
  const checkPermission = (permission: string) => {
    return hasPermission(permission);
  };

  const checkRole = (role: string) => {
    return hasRole(role);
  };

  return (
    <div className="space-y-6">
      <div className="bg-white p-6 rounded-lg shadow">
        <h3 className="text-lg font-semibold mb-4">高级认证功能演示</h3>

        <div className="mb-4 p-4 bg-green-50 rounded-lg border border-green-200">
          <h4 className="font-medium text-green-800 mb-2">✅ 高级认证功能</h4>
          <ul className="text-sm text-green-700 space-y-1">
            <li>• 用户资料管理和更新</li>
            <li>• 偏好设置和主题切换</li>
            <li>• 权限检查和角色验证</li>
            <li>• 错误处理和状态管理</li>
            <li>• 实时状态同步</li>
          </ul>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
          {/* 用户信息 */}
          <div className="border rounded-lg p-4 bg-blue-50">
            <h4 className="font-medium text-blue-800 mb-2">当前用户信息</h4>
            <div className="text-sm space-y-1">
              <div className="flex items-center space-x-2">
                <img
                  src={user.avatar}
                  alt={user.username}
                  className="w-8 h-8 rounded-full"
                />
                <span className="font-medium">{user.username}</span>
              </div>
              <p>邮箱: {user.email}</p>
              <p>
                姓名: {user.profile.firstName} {user.profile.lastName}
              </p>
              <p>电话: {user.profile.phone || "未设置"}</p>
              <p>地址: {user.profile.address || "未设置"}</p>
              <p>简介: {user.profile.bio || "未设置"}</p>
              <p>主题: {user.preferences.theme}</p>
              <p>语言: {user.preferences.language}</p>
              <p>通知: {user.preferences.notifications ? "开启" : "关闭"}</p>
            </div>
          </div>

          {/* 角色和权限 */}
          <div className="border rounded-lg p-4 bg-green-50">
            <h4 className="font-medium text-green-800 mb-2">角色权限</h4>
            <div className="text-sm space-y-2">
              <div>
                <p className="font-medium">
                  用户角色: <span className="text-blue-600">{user.role}</span>
                </p>
                <div className="mt-2 space-y-1">
                  <p>管理员角色: {checkRole("admin") ? "✅" : "❌"}</p>
                  <p>版主角色: {checkRole("moderator") ? "✅" : "❌"}</p>
                  <p>普通用户角色: {checkRole("user") ? "✅" : "❌"}</p>
                </div>
              </div>
              <div className="mt-3">
                <p className="font-medium">权限列表:</p>
                <div className="mt-1 text-xs bg-gray-100 p-2 rounded">
                  {user.permissions.join(", ")}
                </div>
              </div>
            </div>
          </div>

          {/* 详细权限检查 */}
          <div className="border rounded-lg p-4 bg-yellow-50">
            <h4 className="font-medium text-yellow-800 mb-2">权限检查</h4>
            <div className="text-sm space-y-1">
              <p>读取权限: {checkPermission("read") ? "✅" : "❌"}</p>
              <p>写入权限: {checkPermission("write") ? "✅" : "❌"}</p>
              <p>删除权限: {checkPermission("delete") ? "✅" : "❌"}</p>
              <p>管理权限: {checkPermission("admin") ? "✅" : "❌"}</p>
              <p>审核权限: {checkPermission("moderate") ? "✅" : "❌"}</p>
              <p className="text-yellow-600 font-medium mt-2">
                渲染次数: {renderCount}
              </p>
            </div>
          </div>
        </div>

        {/* 权限功能演示 */}
        <div className="mb-6 border rounded-lg p-4 bg-gray-50">
          <h4 className="font-medium mb-4">权限功能演示</h4>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            <div
              className={\`p-3 rounded-lg border \${
                checkPermission("read")
                  ? "bg-green-100 border-green-300"
                  : "bg-gray-100 border-gray-300"
              }\`}
            >
              <h5 className="font-medium text-sm">读取功能</h5>
              <p className="text-xs text-gray-600 mt-1">查看内容权限</p>
              <div className="mt-2">
                <button
                  disabled={!checkPermission("read")}
                  className={\`px-3 py-1 text-xs rounded \${
                    checkPermission("read")
                      ? "bg-green-500 text-white hover:bg-green-600"
                      : "bg-gray-300 text-gray-500 cursor-not-allowed"
                  }\`}
                >
                  {checkPermission("read") ? "可以查看" : "无权限"}
                </button>
              </div>
            </div>
            <div
              className={\`p-3 rounded-lg border \${
                checkPermission("write")
                  ? "bg-blue-100 border-blue-300"
                  : "bg-gray-100 border-gray-300"
              }\`}
            >
              <h5 className="font-medium text-sm"> 写入功能</h5>
              <p className="text-xs text-gray-600 mt-1">创建/编辑内容权限</p>
              <div className="mt-2">
                <button
                  disabled={!checkPermission("write")}
                  className={\`px-3 py-1 text-xs rounded \${
                    checkPermission("write")
                      ? "bg-blue-500 text-white hover:bg-blue-600"
                      : "bg-gray-300 text-gray-500 cursor-not-allowed"
                  }\`}
                >
                  {checkPermission("write") ? "可以编辑" : "无权限"}
                </button>
              </div>
            </div>
            <div
              className={\`p-3 rounded-lg border \${
                checkPermission("delete")
                  ? "bg-red-100 border-red-300"
                  : "bg-gray-100 border-gray-300"
              }\`}
            >
              <h5 className="font-medium text-sm">删除功能</h5>
              <p className="text-xs text-gray-600 mt-1">删除内容权限</p>
              <div className="mt-2">
                <button
                  disabled={!checkPermission("delete")}
                  className={\`px-3 py-1 text-xs rounded \${
                    checkPermission("delete")
                      ? "bg-red-500 text-white hover:bg-red-600"
                      : "bg-gray-300 text-gray-500 cursor-not-allowed"
                  }\`}
                >
                  {checkPermission("delete") ? "可以删除" : "无权限"}
                </button>
              </div>
            </div>
            <div
              className={\`p-3 rounded-lg border \${
                checkPermission("admin")
                  ? "bg-purple-100 border-purple-300"
                  : "bg-gray-100 border-gray-300"
              }\`}
            >
              <h5 className="font-medium text-sm">管理功能</h5>
              <p className="text-xs text-gray-600 mt-1">系统管理权限</p>
              <div className="mt-2">
                <button
                  disabled={!checkPermission("admin")}
                  className={\`px-3 py-1 text-xs rounded \${
                    checkPermission("admin")
                      ? "bg-purple-500 text-white hover:bg-purple-600"
                      : "bg-gray-300 text-gray-500 cursor-not-allowed"
                  }\`}
                >
                  {checkPermission("admin") ? "可以管理" : "无权限"}
                </button>
              </div>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* 资料更新 */}
          <div className="border rounded-lg p-4">
            <h4 className="font-medium mb-4">更新资料</h4>
            <form onSubmit={handleProfileUpdate} className="space-y-3">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  名字
                </label>
                <input
                  type="text"
                  value={profileForm.firstName}
                  onChange={(e) =>
                    setProfileForm({
                      ...profileForm,
                      firstName: e.target.value,
                    })
                  }
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  required
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  姓氏
                </label>
                <input
                  type="text"
                  value={profileForm.lastName}
                  onChange={(e) =>
                    setProfileForm({ ...profileForm, lastName: e.target.value })
                  }
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  required
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  电话
                </label>
                <input
                  type="tel"
                  value={profileForm.phone}
                  onChange={(e) =>
                    setProfileForm({ ...profileForm, phone: e.target.value })
                  }
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  地址
                </label>
                <input
                  type="text"
                  value={profileForm.address}
                  onChange={(e) =>
                    setProfileForm({ ...profileForm, address: e.target.value })
                  }
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  简介
                </label>
                <textarea
                  value={profileForm.bio}
                  onChange={(e) =>
                    setProfileForm({ ...profileForm, bio: e.target.value })
                  }
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  rows={3}
                />
              </div>
              <button
                type="submit"
                disabled={isLoading}
                className={\`w-full py-2 px-4 rounded-md text-white \${
                  isLoading
                    ? "bg-gray-400 cursor-not-allowed"
                    : "bg-blue-500 hover:bg-blue-600"
                }\`}
              >
                {isLoading ? "更新中..." : "更新资料"}
              </button>
            </form>
          </div>

          {/* 偏好设置 */}
          <div className="border rounded-lg p-4">
            <h4 className="font-medium mb-4">偏好设置</h4>
            <form onSubmit={handlePreferencesUpdate} className="space-y-3">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  主题
                </label>
                <select
                  value={preferencesForm.theme}
                  onChange={(e) =>
                    setPreferencesForm({
                      ...preferencesForm,
                      theme: e.target.value as "light" | "dark",
                    })
                  }
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                >
                  <option value="light">浅色主题</option>
                  <option value="dark">深色主题</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  语言
                </label>
                <select
                  value={preferencesForm.language}
                  onChange={(e) =>
                    setPreferencesForm({
                      ...preferencesForm,
                      language: e.target.value,
                    })
                  }
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                >
                  <option value="en">English</option>
                  <option value="zh">中文</option>
                  <option value="ja">日本語</option>
                </select>
              </div>
              <div>
                <label className="flex items-center">
                  <input
                    type="checkbox"
                    checked={preferencesForm.notifications}
                    onChange={(e) =>
                      setPreferencesForm({
                        ...preferencesForm,
                        notifications: e.target.checked,
                      })
                    }
                    className="mr-2"
                  />
                  <span className="text-sm font-medium text-gray-700">
                    接收通知
                  </span>
                </label>
              </div>
              <button
                type="submit"
                disabled={isLoading}
                className={\`w-full py-2 px-4 rounded-md text-white \${
                  isLoading
                    ? "bg-gray-400 cursor-not-allowed"
                    : "bg-green-500 hover:bg-green-600"
                }\`}
              >
                {isLoading ? "更新中..." : "更新偏好"}
              </button>
            </form>
          </div>
        </div>

        {error && (
          <div className="mt-4 p-4 bg-red-50 border border-red-200 rounded-lg">
            <p className="text-red-800">{error}</p>
            <button
              onClick={clearError}
              className="mt-2 px-3 py-1 bg-red-500 text-white text-sm rounded hover:bg-red-600"
            >
              清除错误
            </button>
          </div>
        )}

        <div className="bg-green-50 p-4 rounded-lg border border-green-200 mt-6">
          <h4 className="font-medium text-green-800 mb-2">⚠️ 观察要点</h4>
          <ul className="text-sm text-green-700 space-y-1">
            <li>
              • <strong>权限展示</strong>：清晰显示不同角色的权限差异
            </li>
            <li>
              • <strong>功能演示</strong>：根据权限控制功能可用性
            </li>
            <li>
              • <strong>资料更新</strong>：观察用户信息的实时更新
            </li>
            <li>
              • <strong>偏好设置</strong>：查看主题和语言切换效果
            </li>
            <li>
              • <strong>状态管理</strong>：观察渲染次数和状态变化
            </li>
            <li>
              • <strong>错误处理</strong>：体验错误状态和清除功能
            </li>
          </ul>
          <p className="mt-2 text-green-600 font-medium">
            ✅ 高级认证功能完整，支持完整的用户管理和权限控制！
          </p>
        </div>
      </div>
    </div>
  );
};

export default AdvancedAuthDemo;
`,$=`import React, { useEffect, useRef, useState } from "react";

import { useAuthStore } from "../stores/authStore";

const BasicAuthDemo: React.FC = () => {
  const [renderCount, setRenderCount] = useState(0);
  const renderCountRef = useRef(0);
  const [loginForm, setLoginForm] = useState({ username: "", password: "" });
  const [registerForm, setRegisterForm] = useState({
    username: "",
    email: "",
    password: "",
    confirmPassword: "",
    firstName: "",
    lastName: "",
  });

  // 使用精准选择器
  const isAuthenticated = useAuthStore((state) => state.auth.isAuthenticated);
  const isLoading = useAuthStore((state) => state.auth.isLoading);
  const user = useAuthStore((state) => state.auth.user);
  const error = useAuthStore((state) => state.auth.error);

  // 渲染计数
  renderCountRef.current += 1;
  useEffect(() => {
    setRenderCount(renderCountRef.current);
  }, [isAuthenticated, isLoading, user, error]);

  const { login, register, logout, clearError } = useAuthStore();

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    await login(loginForm);
  };

  const handleRegister = async (e: React.FormEvent) => {
    e.preventDefault();
    if (registerForm.password !== registerForm.confirmPassword) {
      return;
    }
    await register(registerForm);
  };

  const handleLogout = () => {
    logout();
    setLoginForm({ username: "", password: "" });
    setRegisterForm({
      username: "",
      email: "",
      password: "",
      confirmPassword: "",
      firstName: "",
      lastName: "",
    });
  };

  // 快速登录不同角色
  const handleQuickLogin = async (role: "admin" | "moderator" | "user") => {
    const credentials = {
      username:
        role === "admin"
          ? "admin"
          : role === "moderator"
          ? "moderator"
          : "user",
      password: "password123",
    };
    await login(credentials);
  };

  return (
    <div className="space-y-6">
      <div className="bg-white p-6 rounded-lg shadow">
        <h3 className="text-lg font-semibold mb-4">基础认证功能演示</h3>

        <div className="mb-4 p-4 bg-blue-50 rounded-lg border border-blue-200">
          <h4 className="font-medium text-blue-800 mb-2">✅ 基础认证功能</h4>
          <ul className="text-sm text-blue-700 space-y-1">
            <li>• 用户登录和注册功能</li>
            <li>• 用户状态管理和持久化</li>
            <li>• Token 管理和自动刷新</li>
            <li>• 权限和角色检查</li>
            <li>• 错误处理和加载状态</li>
          </ul>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
          <div className="border rounded-lg p-4 bg-blue-50">
            <h4 className="font-medium text-blue-800 mb-2">认证状态</h4>
            <div className="text-sm space-y-1">
              <p>登录状态: {isAuthenticated ? "已登录" : "未登录"}</p>
              <p>加载状态: {isLoading ? "加载中..." : "空闲"}</p>
              <p>用户: {user?.username || "未登录"}</p>
              <p>角色: {user?.role || "无"}</p>
              <p>权限: {user?.permissions.join(", ") || "无"}</p>
              {error && <p className="text-red-600">错误: {error}</p>}
              <p className="text-blue-600 font-medium">
                渲染次数: {renderCount}
              </p>
            </div>
          </div>

          <div className="border rounded-lg p-4 bg-green-50">
            <h4 className="font-medium text-green-800 mb-2">用户信息</h4>
            {user ? (
              <div className="text-sm space-y-1">
                <p>用户名: {user.username}</p>
                <p>邮箱: {user.email}</p>
                <p>
                  姓名: {user.profile.firstName} {user.profile.lastName}
                </p>
                <p>电话: {user.profile.phone}</p>
                <p>地址: {user.profile.address}</p>
                <p>主题: {user.preferences.theme}</p>
                <p>语言: {user.preferences.language}</p>
                <p>通知: {user.preferences.notifications ? "开启" : "关闭"}</p>
              </div>
            ) : (
              <p className="text-gray-500">请先登录</p>
            )}
          </div>
        </div>

        {!isAuthenticated ? (
          <div className="space-y-6">
            {/* 快速登录 */}
            <div className="border rounded-lg p-4 bg-yellow-50">
              <h4 className="font-medium mb-4 text-yellow-800">快速登录演示</h4>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="text-center">
                  <h5 className="font-medium text-gray-700 mb-2">管理员</h5>
                  <p className="text-xs text-gray-500 mb-3">完整权限</p>
                  <button
                    onClick={() => handleQuickLogin("admin")}
                    disabled={isLoading}
                    className={\`w-full py-2 px-4 rounded-md text-white text-sm \${
                      isLoading
                        ? "bg-gray-400 cursor-not-allowed"
                        : "bg-red-500 hover:bg-red-600"
                    }\`}
                  >
                    {isLoading ? "登录中..." : "管理员登录"}
                  </button>
                  <p className="text-xs text-gray-500 mt-1">
                    权限: read, write, delete, admin
                  </p>
                </div>
                <div className="text-center">
                  <h5 className="font-medium text-gray-700 mb-2">版主</h5>
                  <p className="text-xs text-gray-500 mb-3">管理权限</p>
                  <button
                    onClick={() => handleQuickLogin("moderator")}
                    disabled={isLoading}
                    className={\`w-full py-2 px-4 rounded-md text-white text-sm \${
                      isLoading
                        ? "bg-gray-400 cursor-not-allowed"
                        : "bg-orange-500 hover:bg-orange-600"
                    }\`}
                  >
                    {isLoading ? "登录中..." : "版主登录"}
                  </button>
                  <p className="text-xs text-gray-500 mt-1">
                    权限: read, write, moderate
                  </p>
                </div>
                <div className="text-center">
                  <h5 className="font-medium text-gray-700 mb-2">普通用户</h5>
                  <p className="text-xs text-gray-500 mb-3">基础权限</p>
                  <button
                    onClick={() => handleQuickLogin("user")}
                    disabled={isLoading}
                    className={\`w-full py-2 px-4 rounded-md text-white text-sm \${
                      isLoading
                        ? "bg-gray-400 cursor-not-allowed"
                        : "bg-blue-500 hover:bg-blue-600"
                    }\`}
                  >
                    {isLoading ? "登录中..." : "用户登录"}
                  </button>
                  <p className="text-xs text-gray-500 mt-1">权限: read</p>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* 登录表单 */}
              <div className="border rounded-lg p-4">
                <h4 className="font-medium mb-4">手动登录</h4>
                <form onSubmit={handleLogin} className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      用户名
                    </label>
                    <input
                      type="text"
                      value={loginForm.username}
                      onChange={(e) =>
                        setLoginForm({ ...loginForm, username: e.target.value })
                      }
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                      placeholder="请输入用户名"
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      密码
                    </label>
                    <input
                      type="password"
                      value={loginForm.password}
                      onChange={(e) =>
                        setLoginForm({ ...loginForm, password: e.target.value })
                      }
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                      placeholder="请输入密码"
                      required
                    />
                  </div>
                  <button
                    type="submit"
                    disabled={isLoading}
                    className={\`w-full py-2 px-4 rounded-md text-white \${
                      isLoading
                        ? "bg-gray-400 cursor-not-allowed"
                        : "bg-blue-500 hover:bg-blue-600"
                    }\`}
                  >
                    {isLoading ? "登录中..." : "登录"}
                  </button>
                </form>
              </div>

              {/* 注册表单 */}
              <div className="border rounded-lg p-4">
                <h4 className="font-medium mb-4">用户注册</h4>
                <form onSubmit={handleRegister} className="space-y-4">
                  <div className="grid grid-cols-2 gap-2">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">
                        用户名
                      </label>
                      <input
                        type="text"
                        value={registerForm.username}
                        onChange={(e) =>
                          setRegisterForm({
                            ...registerForm,
                            username: e.target.value,
                          })
                        }
                        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                        placeholder="用户名"
                        required
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">
                        邮箱
                      </label>
                      <input
                        type="email"
                        value={registerForm.email}
                        onChange={(e) =>
                          setRegisterForm({
                            ...registerForm,
                            email: e.target.value,
                          })
                        }
                        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                        placeholder="邮箱"
                        required
                      />
                    </div>
                  </div>
                  <div className="grid grid-cols-2 gap-2">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">
                        密码
                      </label>
                      <input
                        type="password"
                        value={registerForm.password}
                        onChange={(e) =>
                          setRegisterForm({
                            ...registerForm,
                            password: e.target.value,
                          })
                        }
                        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                        placeholder="密码"
                        required
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">
                        确认密码
                      </label>
                      <input
                        type="password"
                        value={registerForm.confirmPassword}
                        onChange={(e) =>
                          setRegisterForm({
                            ...registerForm,
                            confirmPassword: e.target.value,
                          })
                        }
                        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                        placeholder="确认密码"
                        required
                      />
                    </div>
                  </div>
                  <div className="grid grid-cols-2 gap-2">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">
                        名字
                      </label>
                      <input
                        type="text"
                        value={registerForm.firstName}
                        onChange={(e) =>
                          setRegisterForm({
                            ...registerForm,
                            firstName: e.target.value,
                          })
                        }
                        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                        placeholder="名字"
                        required
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">
                        姓氏
                      </label>
                      <input
                        type="text"
                        value={registerForm.lastName}
                        onChange={(e) =>
                          setRegisterForm({
                            ...registerForm,
                            lastName: e.target.value,
                          })
                        }
                        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                        placeholder="姓氏"
                        required
                      />
                    </div>
                  </div>
                  <button
                    type="submit"
                    disabled={isLoading}
                    className={\`w-full py-2 px-4 rounded-md text-white \${
                      isLoading
                        ? "bg-gray-400 cursor-not-allowed"
                        : "bg-green-500 hover:bg-green-600"
                    }\`}
                  >
                    {isLoading ? "注册中..." : "注册"}
                  </button>
                </form>
              </div>
            </div>
          </div>
        ) : (
          <div className="space-y-4">
            <div className="flex gap-3">
              <button
                onClick={handleLogout}
                className="px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600"
              >
                退出登录
              </button>
              <button
                onClick={clearError}
                className="px-4 py-2 bg-gray-500 text-white rounded hover:bg-gray-600"
              >
                清除错误
              </button>
            </div>
          </div>
        )}

        <div className="bg-blue-50 p-4 rounded-lg border border-blue-200 mt-6">
          <h4 className="font-medium text-blue-800 mb-2">⚠️ 观察要点</h4>
          <ul className="text-sm text-blue-700 space-y-1">
            <li>
              • <strong>快速登录</strong>：体验不同角色的权限差异
            </li>
            <li>
              • <strong>登录/注册</strong>：观察状态变化和渲染次数
            </li>
            <li>
              • <strong>用户信息</strong>：查看用户详细信息和权限
            </li>
            <li>
              • <strong>持久化</strong>：刷新页面后状态保持
            </li>
            <li>
              • <strong>错误处理</strong>：查看错误状态和清除功能
            </li>
            <li>
              • <strong>加载状态</strong>：观察异步操作的加载状态
            </li>
          </ul>
          <p className="mt-2 text-blue-600 font-medium">
            ✅ 基础认证功能完整，支持多种登录方式和权限管理！
          </p>
        </div>
      </div>
    </div>
  );
};

export default BasicAuthDemo;
`,U=()=>e.jsx(A,{title:"用户认证 Store",description:"学习如何使用 Zustand 实现完整的用户认证系统。掌握登录、注册、权限管理和状态持久化最佳实践。",overview:[{title:"核心概念",items:["用户认证是应用安全的基础，包括登录、注册、权限验证等功能。","状态持久化确保用户登录状态在页面刷新后保持。","Token 管理包括访问令牌和刷新令牌的自动处理。","权限系统基于角色和权限的细粒度访问控制。","用户资料管理支持个人信息的更新和维护。"]},{title:"主要功能",items:["用户登录和注册功能。","Token 自动刷新和过期处理。","用户资料和偏好设置管理。","基于角色的权限控制系统。","密码重置和安全设置。"]},{title:"适用场景",items:["需要用户认证的 Web 应用。","多角色权限管理系统。","需要状态持久化的应用。","企业级用户管理系统。","需要安全控制的业务应用。"]},{title:"注意事项",items:["确保敏感信息的安全存储。","实现完善的错误处理机制。","考虑 Token 过期和刷新策略。","建立清晰的权限验证流程。","优化用户体验和加载状态。"]}],examples:[{title:"基础认证功能演示",component:e.jsx(S,{}),description:"演示用户登录、注册和基础状态管理功能",observationPoints:["观察登录和注册流程","注意用户状态的变化","理解 Token 管理和持久化","体验错误处理和加载状态","观察渲染次数：通常为 5-8 次（登录状态变化 + 用户信息更新）"],keyPoints:["用户登录和注册功能完整","状态持久化确保数据保持","Token 管理自动化处理","错误处理用户友好","渲染次数反映了状态变化的效率"],commonTraps:["忽视状态持久化的重要性","缺乏完善的错误处理","Token 管理策略不当","权限验证逻辑不清晰"],solutions:["使用 persist 中间件实现持久化","建立完善的错误处理机制","实现自动 Token 刷新策略","建立清晰的权限验证流程"],codeExample:{code:$,title:"基础认证功能演示组件"}},{title:"高级认证功能演示",component:e.jsx(R,{}),description:"演示用户资料管理、权限检查和高级功能",observationPoints:["观察用户资料更新功能","注意权限检查的准确性","理解偏好设置的持久化","体验头像上传功能","观察渲染次数：通常为 3-6 次（资料更新 + 偏好设置变化）"],keyPoints:["用户资料管理功能完整","权限检查基于角色和权限","偏好设置支持个性化","文件上传功能完善","渲染次数体现了功能复杂度"],commonTraps:["权限验证逻辑过于复杂","用户资料更新不及时","文件上传处理不当","偏好设置缺乏验证"],solutions:["简化权限验证逻辑","实现实时资料更新","优化文件上传处理","添加偏好设置验证"],codeExample:{code:T,title:"高级认证功能演示组件"}}],tutorial:{concepts:["用户认证是应用安全的核心功能","状态持久化确保用户体验的连续性","Token 管理是认证系统的关键","权限系统提供细粒度的访问控制","用户资料管理支持个性化体验"],steps:["设计用户数据模型和认证流程","实现登录注册和状态管理","建立 Token 管理和刷新机制","开发权限验证和角色管理","完善用户资料和偏好设置","优化用户体验和错误处理"],tips:["优先考虑安全性和用户体验","实现完善的错误处理机制","建立清晰的权限验证流程","优化状态持久化策略","定期审查和更新安全策略"]},interview:{questions:[{question:"如何实现用户认证状态管理？",answer:"使用 Zustand 创建认证 store，包含登录状态、用户信息、Token 等。通过 persist 中间件实现状态持久化，确保页面刷新后状态保持。"},{question:"如何处理 Token 过期和刷新？",answer:"实现自动 Token 刷新机制，在 Token 即将过期时自动刷新。使用拦截器处理 API 请求，在 Token 过期时自动刷新并重试请求。"},{question:"如何实现基于角色的权限控制？",answer:"在用户数据中包含角色和权限信息，提供 hasRole 和 hasPermission 方法进行权限检查。在组件中根据权限控制功能显示和访问。"},{question:"如何确保敏感信息的安全存储？",answer:"使用 HTTPS 传输，在客户端使用安全的存储方式（如 httpOnly cookies），敏感信息不存储在 localStorage 中。实现适当的加密和签名机制。"},{question:"如何处理认证错误和异常情况？",answer:"建立完善的错误处理机制，包括网络错误、认证失败、权限不足等情况。提供用户友好的错误提示和恢复机制。"}],keyPoints:["用户认证是应用安全的基础","状态持久化确保用户体验","Token 管理是认证系统的关键","权限系统提供访问控制","错误处理提升用户体验"]},bestPractices:{dos:["实现完善的用户认证流程","使用安全的 Token 管理策略","建立清晰的权限验证机制","优化状态持久化性能","提供用户友好的错误处理","定期审查和更新安全策略"],donts:["不要在客户端存储敏感信息","不要忽视 Token 过期处理","不要缺乏权限验证","不要忽视错误处理","不要忽视用户体验"],patterns:["认证模式：统一的认证状态管理","权限模式：基于角色的访问控制","持久化模式：安全的状态持久化","错误处理模式：完善的错误处理机制"]}});export{U as default};
