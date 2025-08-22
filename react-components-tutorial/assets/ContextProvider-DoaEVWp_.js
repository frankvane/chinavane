import{j as e,r as a}from"./index-MmCcWZhd.js";import{C as f}from"./ComponentTemplate-DoUPe1QN.js";const y=a.createContext(void 0),N=({children:r})=>{const[o,n]=a.useState("light"),t=a.useCallback(()=>{console.log("主题切换:",o==="light"?"dark":"light"),n(x=>x==="light"?"dark":"light")},[o]),s=a.useMemo(()=>o==="light"?{primary:"#3B82F6",secondary:"#6B7280",background:"#FFFFFF",text:"#1F2937",border:"#E5E7EB"}:{primary:"#60A5FA",secondary:"#9CA3AF",background:"#1F2937",text:"#F9FAFB",border:"#374151"},[o]),i=a.useMemo(()=>({theme:o,toggleTheme:t,colors:s}),[o,t,s]);return e.jsxs(y.Provider,{value:i,children:[" ",r]})},P=()=>{const r=a.useContext(y);if(r===void 0)throw new Error("useTheme must be used within a ThemeProvider");return r},v=a.createContext(void 0),F=({children:r})=>{const[o,n]=a.useState(null),[t,s]=a.useState(!1),i=o!==null,x=a.useCallback(async(u,l)=>{console.log("开始登录:",u),s(!0);try{if(await new Promise(c=>setTimeout(c,1e3)),u==="admin@example.com"&&l==="admin123"){const c={id:"1",name:"管理员",email:"admin@example.com",avatar:"https://via.placeholder.com/40/4F46E5/FFFFFF?text=A",role:"admin"};n(c),console.log("管理员登录成功:",c)}else if(u==="user@example.com"&&l==="user123"){const c={id:"2",name:"普通用户",email:"user@example.com",avatar:"https://via.placeholder.com/40/10B981/FFFFFF?text=U",role:"user"};n(c),console.log("用户登录成功:",c)}else throw new Error("邮箱或密码错误")}catch(c){throw console.error("登录失败:",c),c}finally{s(!1)}},[]),m=a.useCallback(()=>{console.log("用户退出登录"),n(null)},[]),h=a.useCallback(u=>{console.log("更新用户资料:",u),n(l=>l?{...l,...u}:null)},[]),d=a.useMemo(()=>({user:o,isLoading:t,isAuthenticated:i,login:x,logout:m,updateProfile:h}),[o,t,i,x,m,h]);return e.jsxs(v.Provider,{value:d,children:[" ",r]})},p=()=>{const r=a.useContext(v);if(r===void 0)throw new Error("useAuth must be used within an AuthProvider");return r},b=a.createContext(void 0),j=(r,o)=>{switch(console.log("购物车操作:",o.type,o.payload),o.type){case"ADD_ITEM":if(r.items.find(t=>t.id===o.payload.id)){const t=r.items.map(s=>s.id===o.payload.id?{...s,quantity:s.quantity+1}:s);return{...r,items:t,total:t.reduce((s,i)=>s+i.price*i.quantity,0),itemCount:t.reduce((s,i)=>s+i.quantity,0)}}else{const t=[...r.items,{...o.payload,quantity:1}];return{...r,items:t,total:t.reduce((s,i)=>s+i.price*i.quantity,0),itemCount:t.reduce((s,i)=>s+i.quantity,0)}}case"REMOVE_ITEM":{const n=r.items.filter(t=>t.id!==o.payload);return{...r,items:n,total:n.reduce((t,s)=>t+s.price*s.quantity,0),itemCount:n.reduce((t,s)=>t+s.quantity,0)}}case"UPDATE_QUANTITY":{if(o.payload.quantity<=0)return j(r,{type:"REMOVE_ITEM",payload:o.payload.id});const n=r.items.map(t=>t.id===o.payload.id?{...t,quantity:o.payload.quantity}:t);return{...r,items:n,total:n.reduce((t,s)=>t+s.price*s.quantity,0),itemCount:n.reduce((t,s)=>t+s.quantity,0)}}case"CLEAR_CART":return{items:[],total:0,itemCount:0};case"APPLY_DISCOUNT":{const n=r.total*(o.payload/100);return{...r,total:Math.max(0,r.total-n)}}default:return r}},T=({children:r})=>{const[o,n]=a.useReducer(j,{items:[],total:0,itemCount:0}),t=a.useCallback(d=>{n({type:"ADD_ITEM",payload:d})},[]),s=a.useCallback(d=>{n({type:"REMOVE_ITEM",payload:d})},[]),i=a.useCallback((d,u)=>{n({type:"UPDATE_QUANTITY",payload:{id:d,quantity:u}})},[]),x=a.useCallback(()=>{n({type:"CLEAR_CART"})},[]),m=a.useCallback(d=>{n({type:"APPLY_DISCOUNT",payload:d})},[]),h=a.useMemo(()=>({state:o,addItem:t,removeItem:s,updateQuantity:i,clearCart:x,applyDiscount:m}),[o,t,s,i,x,m]);return e.jsxs(b.Provider,{value:h,children:[" ",r]})},C=()=>{const r=a.useContext(b);if(r===void 0)throw new Error("useCart must be used within a CartProvider");return r},A=()=>{const r=()=>{const{theme:o,toggleTheme:n,colors:t}=P();return e.jsxs("div",{className:"p-6 rounded-lg border transition-all duration-300",style:{backgroundColor:t.background,color:t.text,borderColor:t.border},children:[e.jsx("h3",{className:"text-xl font-bold mb-4",children:"主题控制面板"}),e.jsxs("div",{className:"space-y-4",children:[e.jsxs("div",{className:"flex items-center justify-between",children:[e.jsx("span",{children:"当前主题:"}),e.jsx("span",{className:"px-3 py-1 rounded-full text-sm font-medium",style:{backgroundColor:t.primary,color:t.background},children:o==="light"?"🌞 浅色":"🌙 深色"})]}),e.jsxs("button",{onClick:n,className:"w-full py-2 px-4 rounded-lg font-medium transition-colors duration-200",style:{backgroundColor:t.primary,color:t.background},children:["切换到",o==="light"?"深色":"浅色","主题"]}),e.jsxs("div",{className:"grid grid-cols-2 gap-3 mt-4",children:[e.jsxs("div",{className:"text-center p-3 rounded",style:{backgroundColor:t.primary+"20"},children:[e.jsx("div",{className:"text-sm font-medium",children:"主色调"}),e.jsx("div",{className:"text-xs mt-1",style:{color:t.secondary},children:t.primary})]}),e.jsxs("div",{className:"text-center p-3 rounded",style:{backgroundColor:t.secondary+"20"},children:[e.jsx("div",{className:"text-sm font-medium",children:"次要色"}),e.jsx("div",{className:"text-xs mt-1",style:{color:t.secondary},children:t.secondary})]})]})]})]})};return e.jsx(N,{children:e.jsxs("div",{className:"space-y-4",children:[e.jsx(r,{}),e.jsxs("div",{className:"p-4 bg-gray-50 border border-gray-200 rounded-lg",children:[e.jsx("h4",{className:"font-semibold text-gray-800 mb-2",children:"Context Provider 特点"}),e.jsxs("ul",{className:"text-sm text-gray-600 space-y-1",children:[e.jsx("li",{children:"• 提供全局状态管理"}),e.jsx("li",{children:"• 避免props drilling问题"}),e.jsx("li",{children:"• 支持多层嵌套和组合"}),e.jsx("li",{children:"• 使用useMemo优化性能"})]})]})]})})},k=()=>{const r=()=>{const{login:t,isLoading:s}=p(),[i,x]=a.useState(""),[m,h]=a.useState(""),[d,u]=a.useState(""),l=async c=>{c.preventDefault(),u("");try{await t(i,m)}catch(g){u(g instanceof Error?g.message:"登录失败")}};return e.jsxs("form",{onSubmit:l,className:"space-y-4",children:[e.jsxs("div",{children:[e.jsx("label",{className:"block text-sm font-medium text-gray-700 mb-1",children:"邮箱地址"}),e.jsx("input",{type:"email",value:i,onChange:c=>x(c.target.value),className:"w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500",placeholder:"请输入邮箱",required:!0})]}),e.jsxs("div",{children:[e.jsx("label",{className:"block text-sm font-medium text-gray-700 mb-1",children:"密码"}),e.jsx("input",{type:"password",value:m,onChange:c=>h(c.target.value),className:"w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500",placeholder:"请输入密码",required:!0})]}),d&&e.jsx("div",{className:"p-3 bg-red-50 border border-red-200 rounded-md",children:e.jsx("p",{className:"text-red-600 text-sm",children:d})}),e.jsx("button",{type:"submit",disabled:s,className:"w-full py-2 px-4 bg-blue-600 text-white rounded-md hover:bg-blue-700 disabled:opacity-50 disabled:cursor-not-allowed",children:s?"登录中...":"登录"}),e.jsxs("div",{className:"text-xs text-gray-500 space-y-1",children:[e.jsx("p",{children:"测试账号:"}),e.jsx("p",{children:"管理员: admin@example.com / admin123"}),e.jsx("p",{children:"普通用户: user@example.com / user123"})]})]})},o=()=>{const{user:t,logout:s,updateProfile:i}=p(),[x,m]=a.useState(!1),[h,d]=a.useState((t==null?void 0:t.name)||""),u=()=>{i({name:h}),m(!1)};return t?e.jsxs("div",{className:"p-4 bg-white border border-gray-200 rounded-lg",children:[e.jsxs("div",{className:"flex items-center space-x-4 mb-4",children:[e.jsx("img",{src:t.avatar,alt:t.name,className:"w-12 h-12 rounded-full"}),e.jsxs("div",{className:"flex-1",children:[x?e.jsx("input",{type:"text",value:h,onChange:l=>d(l.target.value),className:"text-lg font-semibold bg-transparent border-b border-gray-300 focus:outline-none focus:border-blue-500"}):e.jsx("h3",{className:"text-lg font-semibold text-gray-800",children:t.name}),e.jsx("p",{className:"text-gray-600 text-sm",children:t.email}),e.jsx("span",{className:`inline-block px-2 py-1 rounded-full text-xs font-medium ${t.role==="admin"?"bg-red-100 text-red-800":t.role==="user"?"bg-blue-100 text-blue-800":"bg-gray-100 text-gray-800"}`,children:t.role==="admin"?"管理员":t.role==="user"?"用户":"访客"})]})]}),e.jsxs("div",{className:"flex space-x-2",children:[x?e.jsxs(e.Fragment,{children:[e.jsx("button",{onClick:u,className:"px-3 py-1 bg-green-600 text-white rounded text-sm hover:bg-green-700",children:"保存"}),e.jsx("button",{onClick:()=>{m(!1),d(t.name)},className:"px-3 py-1 bg-gray-600 text-white rounded text-sm hover:bg-gray-700",children:"取消"})]}):e.jsx("button",{onClick:()=>m(!0),className:"px-3 py-1 bg-blue-600 text-white rounded text-sm hover:bg-blue-700",children:"编辑资料"}),e.jsx("button",{onClick:s,className:"px-3 py-1 bg-red-600 text-white rounded text-sm hover:bg-red-700",children:"退出登录"})]})]}):null},n=()=>{const{isAuthenticated:t,user:s}=p();return e.jsx("div",{className:"p-3 bg-gray-50 border border-gray-200 rounded-lg",children:e.jsxs("div",{className:"flex items-center space-x-2",children:[e.jsx("div",{className:`w-3 h-3 rounded-full ${t?"bg-green-500":"bg-red-500"}`}),e.jsx("span",{className:"text-sm font-medium",children:t?`已登录 (${s==null?void 0:s.name})`:"未登录"})]})})};return e.jsx(F,{children:e.jsxs("div",{className:"space-y-4",children:[e.jsx(n,{}),e.jsx(w,{children:({isAuthenticated:t})=>t?e.jsx(o,{}):e.jsx(r,{})})]})})},w=({children:r})=>{const o=p();return e.jsx(e.Fragment,{children:r(o)})},R=()=>{const r=[{id:"1",name:"React 教程书籍",price:89,image:"https://via.placeholder.com/60/3B82F6/FFFFFF?text=📚"},{id:"2",name:"TypeScript 指南",price:79,image:"https://via.placeholder.com/60/10B981/FFFFFF?text=📖"},{id:"3",name:"前端开发工具",price:129,image:"https://via.placeholder.com/60/F59E0B/FFFFFF?text=🛠️"},{id:"4",name:"UI 设计套件",price:199,image:"https://via.placeholder.com/60/EF4444/FFFFFF?text=🎨"}],o=()=>{const{addItem:t}=C();return e.jsxs("div",{className:"space-y-3",children:[e.jsx("h3",{className:"text-lg font-semibold text-gray-800",children:"商品列表"}),e.jsx("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-3",children:r.map(s=>e.jsx("div",{className:"p-3 bg-white border border-gray-200 rounded-lg",children:e.jsxs("div",{className:"flex items-center space-x-3",children:[e.jsx("img",{src:s.image,alt:s.name,className:"w-12 h-12 rounded"}),e.jsxs("div",{className:"flex-1",children:[e.jsx("h4",{className:"font-medium text-gray-800",children:s.name}),e.jsxs("p",{className:"text-blue-600 font-semibold",children:["¥",s.price]})]}),e.jsx("button",{onClick:()=>t(s),className:"px-3 py-1 bg-blue-600 text-white rounded text-sm hover:bg-blue-700",children:"加入购物车"})]})},s.id))})]})},n=()=>{const{state:t,removeItem:s,updateQuantity:i,clearCart:x,applyDiscount:m}=C(),[h,d]=a.useState(""),u=()=>{h==="SAVE10"?(m(10),d(""),alert("优惠券已应用！享受10%折扣")):alert("无效的优惠券代码")};return t.items.length===0?e.jsxs("div",{className:"p-6 text-center text-gray-500 border-2 border-dashed border-gray-300 rounded-lg",children:[e.jsx("div",{className:"text-4xl mb-2",children:"🛒"}),e.jsx("p",{children:"购物车为空"}),e.jsx("p",{className:"text-sm mt-1",children:"添加一些商品开始购物吧！"})]}):e.jsxs("div",{className:"space-y-4",children:[e.jsxs("div",{className:"flex items-center justify-between",children:[e.jsx("h3",{className:"text-lg font-semibold text-gray-800",children:"购物车"}),e.jsx("button",{onClick:x,className:"px-3 py-1 bg-red-600 text-white rounded text-sm hover:bg-red-700",children:"清空购物车"})]}),e.jsx("div",{className:"space-y-2",children:t.items.map(l=>e.jsxs("div",{className:"flex items-center space-x-3 p-3 bg-white border border-gray-200 rounded-lg",children:[e.jsx("img",{src:l.image,alt:l.name,className:"w-10 h-10 rounded"}),e.jsxs("div",{className:"flex-1",children:[e.jsx("h4",{className:"font-medium text-gray-800 text-sm",children:l.name}),e.jsxs("p",{className:"text-blue-600 text-sm",children:["¥",l.price]})]}),e.jsxs("div",{className:"flex items-center space-x-2",children:[e.jsx("button",{onClick:()=>i(l.id,l.quantity-1),className:"w-6 h-6 bg-gray-200 rounded text-sm hover:bg-gray-300",children:"-"}),e.jsx("span",{className:"text-sm font-medium w-8 text-center",children:l.quantity}),e.jsx("button",{onClick:()=>i(l.id,l.quantity+1),className:"w-6 h-6 bg-gray-200 rounded text-sm hover:bg-gray-300",children:"+"}),e.jsx("button",{onClick:()=>s(l.id),className:"ml-2 px-2 py-1 bg-red-600 text-white rounded text-xs hover:bg-red-700",children:"删除"})]})]},l.id))}),e.jsxs("div",{className:"border-t pt-4",children:[e.jsxs("div",{className:"flex items-center space-x-2 mb-3",children:[e.jsx("input",{type:"text",value:h,onChange:l=>d(l.target.value),placeholder:"输入优惠券代码 (试试: SAVE10)",className:"flex-1 px-3 py-2 border border-gray-300 rounded text-sm"}),e.jsx("button",{onClick:u,className:"px-3 py-2 bg-green-600 text-white rounded text-sm hover:bg-green-700",children:"应用"})]}),e.jsxs("div",{className:"flex justify-between items-center",children:[e.jsxs("div",{className:"text-sm text-gray-600",children:["共 ",t.itemCount," 件商品"]}),e.jsxs("div",{className:"text-xl font-bold text-gray-800",children:["总计: ¥",t.total.toFixed(2)]})]})]})]})};return e.jsx(T,{children:e.jsxs("div",{className:"grid grid-cols-1 lg:grid-cols-2 gap-6",children:[e.jsx(o,{}),e.jsx(n,{})]})})},S=()=>{const r={title:"Context Provider",description:"Context Provider是React Context API的核心组件，用于向组件树提供共享状态和方法，解决props drilling问题。通过Provider模式，可以实现全局状态管理、主题切换、用户认证等功能。",overview:e.jsxs("div",{className:"space-y-4",children:[e.jsxs("div",{children:[e.jsx("h3",{className:"text-lg font-semibold mb-2",children:"核心概念"}),e.jsx("p",{className:"text-gray-700",children:"Context Provider是React Context API的提供者组件，它将数据和方法传递给组件树中的所有子组件， 使得深层嵌套的组件可以直接访问这些数据，而无需通过props逐层传递。"})]}),e.jsxs("div",{children:[e.jsx("h3",{className:"text-lg font-semibold mb-2",children:"主要优势"}),e.jsxs("ul",{className:"list-disc list-inside space-y-1 text-gray-700",children:[e.jsx("li",{children:"避免props drilling - 深层组件直接访问顶层数据"}),e.jsx("li",{children:"全局状态管理 - 提供应用级别的状态共享"}),e.jsx("li",{children:"组件解耦 - 减少组件间的直接依赖关系"}),e.jsx("li",{children:"性能优化 - 通过useMemo和useCallback优化渲染"}),e.jsx("li",{children:"类型安全 - TypeScript提供完整的类型检查"})]})]}),e.jsxs("div",{children:[e.jsx("h3",{className:"text-lg font-semibold mb-2",children:"适用场景"}),e.jsxs("ul",{className:"list-disc list-inside space-y-1 text-gray-700",children:[e.jsx("li",{children:"主题切换和样式管理 - 全局主题状态"}),e.jsx("li",{children:"用户认证和权限管理 - 登录状态和用户信息"}),e.jsx("li",{children:"购物车和订单管理 - 电商应用状态"}),e.jsx("li",{children:"多语言国际化 - 语言切换和文本管理"}),e.jsx("li",{children:"应用配置和设置 - 全局配置项"})]})]}),e.jsxs("div",{children:[e.jsx("h3",{className:"text-lg font-semibold mb-2",children:"核心API"}),e.jsxs("ul",{className:"list-disc list-inside space-y-1 text-gray-700",children:[e.jsx("li",{children:"createContext() - 创建Context对象"}),e.jsx("li",{children:"Context.Provider - 提供数据的组件"}),e.jsx("li",{children:"useContext() - 消费Context数据的Hook"}),e.jsx("li",{children:"useMemo() - 优化Context值的计算"}),e.jsx("li",{children:"useCallback() - 优化Context方法的创建"})]})]})]}),examples:[{title:"示例1：基础主题Provider",description:"展示如何创建和使用主题Context Provider，实现全局主题切换功能",component:e.jsx(A,{}),observationPoints:["Context通过Provider向子组件提供主题数据","useTheme Hook简化了Context的使用","useMemo优化了colors计算，避免不必要的重渲染","主题切换会触发所有使用该Context的组件更新"],keyPoints:["createContext创建Context对象","Provider组件包装子组件树","自定义Hook提供类型安全的Context访问","useMemo和useCallback优化性能"],commonTraps:["忘记用Provider包装组件导致Context为undefined","没有优化Context值导致不必要的重渲染","在组件内部创建Context值导致每次都重新创建"],solutions:["始终检查Context是否在Provider内使用","使用useMemo包装Context值","将Context值的创建逻辑放在Provider组件中"],importantTips:["Context Provider通过value prop向子组件提供数据","使用TypeScript定义清晰的Context类型接口","自定义Hook可以简化Context的使用并提供错误检查"],codeExample:{title:"基础主题Context Provider实现",code:`// 定义Context类型
interface ThemeContextType {
  theme: 'light' | 'dark';
  toggleTheme: () => void;
  colors: {
    primary: string;
    secondary: string;
    background: string;
    text: string;
    border: string;
  };
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined); // ← 重点：创建Context

const ThemeProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [theme, setTheme] = useState<'light' | 'dark'>('light'); // ← 重点：状态管理

  const toggleTheme = useCallback(() => { // ← 重点：使用useCallback优化
    console.log('主题切换:', theme === 'light' ? 'dark' : 'light');
    setTheme(prev => prev === 'light' ? 'dark' : 'light');
  }, [theme]);

  const colors = useMemo(() => { // ← 重点：使用useMemo优化计算
    return theme === 'light' ? {
      primary: '#3B82F6',
      secondary: '#6B7280',
      background: '#FFFFFF',
      text: '#1F2937',
      border: '#E5E7EB'
    } : {
      primary: '#60A5FA',
      secondary: '#9CA3AF',
      background: '#1F2937',
      text: '#F9FAFB',
      border: '#374151'
    };
  }, [theme]);

  const value = useMemo(() => ({ // ← 重点：优化Context值
    theme,
    toggleTheme,
    colors
  }), [theme, toggleTheme, colors]);

  return (
    <ThemeContext.Provider value={value}> {/* ← 重点：提供Context值 */}
      {children}
    </ThemeContext.Provider>
  );
};

const useTheme = () => { // ← 重点：自定义Hook
  const context = useContext(ThemeContext);
  if (context === undefined) {
    throw new Error('useTheme must be used within a ThemeProvider'); // ← 重点：错误处理
  }
  return context;
};`,language:"tsx",highlights:[17,19,22,28,35,42,47,52,55,58]}},{title:"示例2：用户认证Provider",description:"实现用户登录、登出和资料管理的Context Provider，展示异步操作处理",component:e.jsx(k,{}),observationPoints:["认证Context管理用户登录状态和用户信息","异步登录操作通过useCallback优化","登录状态变化会自动更新相关UI组件","错误处理和加载状态的完整实现"],keyPoints:["异步操作在Context中的处理方式","用户状态的完整生命周期管理","错误处理和用户反馈机制","计算属性的使用（isAuthenticated）"],commonTraps:["异步操作没有正确处理错误状态","忘记在异步操作中设置加载状态","用户状态更新后没有清理相关数据"],solutions:["使用try-catch处理异步操作错误","提供明确的加载状态反馈","在登出时清理所有用户相关状态"],importantTips:["异步Context操作需要合理的错误处理和加载状态","用户认证状态的变化应该触发相关组件的更新","安全考虑：敏感信息不应存储在Context中"],codeExample:{title:"用户认证Context Provider实现",code:`interface AuthContextType {
  user: User | null;
  isLoading: boolean;
  isAuthenticated: boolean;
  login: (email: string, password: string) => Promise<void>;
  logout: () => void;
  updateProfile: (updates: Partial<User>) => void;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined); // ← 重点：认证Context

const AuthProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [user, setUser] = useState<User | null>(null); // ← 重点：用户状态
  const [isLoading, setIsLoading] = useState(false);

  const isAuthenticated = user !== null; // ← 重点：计算属性

  const login = useCallback(async (email: string, password: string) => { // ← 重点：异步登录
    console.log('开始登录:', email);
    setIsLoading(true);
    try {
      // 模拟API调用
      await new Promise(resolve => setTimeout(resolve, 1000));

      // 模拟登录验证
      if (email === 'admin@example.com' && password === 'admin123') {
        const adminUser = {
          id: '1',
          name: '管理员',
          email: 'admin@example.com',
          avatar: 'https://via.placeholder.com/40/4F46E5/FFFFFF?text=A',
          role: 'admin' as const
        };
        setUser(adminUser);
        console.log('管理员登录成功:', adminUser);
      } else {
        throw new Error('邮箱或密码错误');
      }
    } catch (error) {
      console.error('登录失败:', error);
      throw error;
    } finally {
      setIsLoading(false);
    }
  }, []);

  const logout = useCallback(() => { // ← 重点：登出功能
    console.log('用户退出登录');
    setUser(null);
  }, []);

  const value = useMemo(() => ({ // ← 重点：Context值优化
    user,
    isLoading,
    isAuthenticated,
    login,
    logout,
    updateProfile
  }), [user, isLoading, isAuthenticated, login, logout, updateProfile]);

  return (
    <AuthContext.Provider value={value}> {/* ← 重点：认证Provider */}
      {children}
    </AuthContext.Provider>
  );
};`,language:"tsx",highlights:[10,13,16,18,44,48,49]}},{title:"示例3：购物车Provider（useReducer）",description:"使用useReducer管理复杂状态的购物车Context Provider，展示状态管理最佳实践",component:e.jsx(R,{}),observationPoints:["useReducer管理复杂的购物车状态逻辑","Action类型定义确保状态更新的类型安全","Reducer函数集中处理所有状态变更逻辑","购物车操作会实时更新商品数量和总价"],keyPoints:["useReducer适合复杂状态管理场景","Action类型定义和Reducer函数的设计","状态的不可变更新模式","复杂业务逻辑的封装和组织"],commonTraps:["直接修改state对象导致状态不更新","Reducer函数中的副作用操作","Action类型定义不完整或不准确"],solutions:["始终返回新的state对象","保持Reducer函数的纯净性","使用TypeScript确保Action类型安全"],importantTips:["useReducer适合管理具有复杂更新逻辑的状态","Reducer函数应该是纯函数，不包含副作用","Action类型定义应该覆盖所有可能的状态变更"],codeExample:{title:"购物车Context Provider（useReducer）实现",code:`type CartAction = // ← 重点：Action类型定义
  | { type: 'ADD_ITEM'; payload: Omit<CartItem, 'quantity'> }
  | { type: 'REMOVE_ITEM'; payload: string }
  | { type: 'UPDATE_QUANTITY'; payload: { id: string; quantity: number } }
  | { type: 'CLEAR_CART' }
  | { type: 'APPLY_DISCOUNT'; payload: number };

const CartContext = createContext<CartContextType | undefined>(undefined); // ← 重点：购物车Context

const cartReducer = (state: CartState, action: CartAction): CartState => { // ← 重点：Reducer函数
  console.log('购物车操作:', action.type, action.payload);

  switch (action.type) {
    case 'ADD_ITEM': {
      const existingItem = state.items.find(item => item.id === action.payload.id);

      if (existingItem) {
        const updatedItems = state.items.map(item =>
          item.id === action.payload.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );

        return {
          ...state,
          items: updatedItems,
          total: updatedItems.reduce((sum, item) => sum + item.price * item.quantity, 0),
          itemCount: updatedItems.reduce((sum, item) => sum + item.quantity, 0)
        };
      } else {
        const newItems = [...state.items, { ...action.payload, quantity: 1 }];

        return {
          ...state,
          items: newItems,
          total: newItems.reduce((sum, item) => sum + item.price * item.quantity, 0),
          itemCount: newItems.reduce((sum, item) => sum + item.quantity, 0)
        };
      }
    }

    default:
      return state;
  }
};

const CartProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [state, dispatch] = useReducer(cartReducer, { // ← 重点：使用useReducer
    items: [],
    total: 0,
    itemCount: 0
  });

  const addItem = useCallback((item: Omit<CartItem, 'quantity'>) => { // ← 重点：添加商品
    dispatch({ type: 'ADD_ITEM', payload: item });
  }, []);

  const value = useMemo(() => ({ // ← 重点：购物车Context值
    state,
    addItem,
    removeItem,
    updateQuantity,
    clearCart,
    applyDiscount
  }), [state, addItem, removeItem, updateQuantity, clearCart, applyDiscount]);

  return (
    <CartContext.Provider value={value}> {/* ← 重点：购物车Provider */}
      {children}
    </CartContext.Provider>
  );
};`,language:"tsx",highlights:[1,8,10,45,51,54,61]}}],tutorial:{concepts:["createContext()创建Context对象","Context.Provider提供数据给子组件","useContext()消费Context数据","useMemo()优化Context值的性能","useCallback()优化Context方法的性能","useReducer()管理复杂状态逻辑","自定义Hook简化Context使用","TypeScript类型定义确保类型安全"],steps:["定义Context的TypeScript类型接口","使用createContext()创建Context对象","创建Provider组件包装业务逻辑","使用useState或useReducer管理状态","使用useMemo优化Context值","使用useCallback优化Context方法","创建自定义Hook简化Context使用","在组件树根部提供Context","在子组件中消费Context数据"],tips:["使用TypeScript定义清晰的Context类型","用useMemo包装Context值避免不必要的重渲染","创建自定义Hook简化Context的使用","为Context提供默认值和错误处理","避免在Context中存储频繁变化的数据","考虑将大型Context拆分为多个小Context","使用useReducer管理复杂的状态逻辑","在开发环境中添加详细的日志记录"]},interview:{questions:[{question:"什么是Context Provider？它解决了什么问题？",answer:"Context Provider是React Context API的核心组件，用于向组件树提供共享数据。它主要解决props drilling问题，即避免在多层嵌套组件中逐层传递props。通过Provider，深层组件可以直接访问顶层数据，简化了组件间的数据传递，提高了代码的可维护性和可读性。"},{question:"如何优化Context Provider的性能？",answer:"优化Context Provider性能的方法：1) 使用useMemo包装Context值避免不必要的重渲染；2) 使用useCallback包装Context方法；3) 将频繁变化的数据和稳定数据分离到不同Context；4) 避免在Context中存储大量数据；5) 考虑使用多个小Context替代单个大Context；6) 合理设计Context的粒度，避免过度订阅。"},{question:"Context Provider与Redux有什么区别？",answer:"主要区别：1) Context是React内置API，Redux是第三方库；2) Context适合简单到中等复杂度的状态管理，Redux适合复杂应用；3) Context没有时间旅行调试，Redux有强大的开发工具；4) Context的学习成本更低；5) Redux有中间件系统支持异步操作；6) Context更适合组件级状态，Redux更适合应用级状态；7) Redux有更严格的状态管理规范。"},{question:"什么时候应该使用useReducer而不是useState？",answer:"使用useReducer的场景：1) 状态逻辑复杂，包含多个子值；2) 下一个状态依赖于之前的状态；3) 需要集中管理状态更新逻辑；4) 状态更新涉及复杂的业务规则；5) 需要确保状态更新的一致性；6) 团队需要统一的状态管理模式。useState适合简单的状态管理，useReducer适合复杂的状态逻辑。"},{question:"如何处理Context的错误边界和类型安全？",answer:"处理Context错误和类型安全的方法：1) 在自定义Hook中检查Context是否存在；2) 提供有意义的错误信息；3) 使用TypeScript定义严格的类型接口；4) 为Context提供默认值；5) 在开发环境中提供详细的调试信息；6) 使用错误边界组件包装Provider；7) 考虑提供降级方案或备用数据；8) 确保所有Context消费者都在Provider范围内。"}],keyPoints:["Context Provider用于向组件树提供共享数据","解决props drilling问题，简化组件间通信","需要使用useMemo和useCallback优化性能","适合全局状态管理和跨组件通信","应该提供类型安全和错误处理","可以组合多个Context实现复杂功能","useReducer适合管理复杂状态逻辑","自定义Hook可以简化Context的使用"]},bestPractices:{dos:["使用TypeScript定义清晰的Context类型","用useMemo包装Context值优化性能","创建自定义Hook简化Context使用","为Context提供错误处理和默认值","将相关的状态和方法组织在同一个Context中","考虑将大型Context拆分为多个小Context","使用useReducer管理复杂状态逻辑","在开发环境中添加详细的日志记录","合理设计Context的粒度和范围"],donts:["不要在Context中存储频繁变化的数据","不要忽略Context值的性能优化","不要在没有Provider的情况下使用Context","不要将所有状态都放在一个Context中","不要忘记处理Context不存在的错误情况","不要过度使用Context替代简单的props传递","不要在Reducer中执行副作用操作","不要直接修改state对象","不要忽略Context的类型安全"],patterns:["主题Provider - 管理应用主题和样式","认证Provider - 管理用户登录状态和权限","购物车Provider - 管理电商应用的购物车状态","通知Provider - 管理全局通知和消息","配置Provider - 管理应用配置和设置","多语言Provider - 管理国际化和本地化","路由Provider - 管理应用路由状态","数据Provider - 管理全局数据缓存"]}};return e.jsx(f,{...r})};export{S as default};
