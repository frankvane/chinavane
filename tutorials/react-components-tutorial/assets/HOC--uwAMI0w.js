import{j as e,r as i}from"./index-MmCcWZhd.js";import{C}from"./ComponentTemplate-DoUPe1QN.js";const y=()=>{const t={title:"高阶组件 (Higher-Order Components)",description:"高阶组件是一个函数，接收一个组件并返回一个新的增强组件。它是React中复用组件逻辑的高级技巧，类似于高阶函数的概念。",overview:e.jsxs("div",{className:"space-y-4",children:[e.jsxs("div",{className:"bg-gradient-to-r from-blue-50 to-indigo-50 p-6 rounded-lg border border-blue-200",children:[e.jsx("h3",{className:"text-lg font-semibold text-blue-800 mb-3",children:"什么是高阶组件？"}),e.jsx("p",{className:"text-blue-700 mb-4",children:"高阶组件（HOC）是React中的一种设计模式，用于复用组件逻辑。它不是React API的一部分，而是一种基于React组合特性而形成的设计模式。"}),e.jsx("div",{className:"bg-white p-4 rounded border border-blue-100",children:e.jsx("code",{className:"text-sm text-gray-800",children:"const EnhancedComponent = higherOrderComponent(WrappedComponent);"})})]}),e.jsxs("div",{className:"grid md:grid-cols-2 gap-6",children:[e.jsxs("div",{className:"bg-green-50 p-4 rounded-lg border border-green-200",children:[e.jsx("h4",{className:"font-semibold text-green-800 mb-2",children:"✅ 适用场景"}),e.jsxs("ul",{className:"text-sm text-green-700 space-y-1",children:[e.jsx("li",{children:"• 横切关注点（如日志、权限验证）"}),e.jsx("li",{children:"• 条件渲染逻辑"}),e.jsx("li",{children:"• 数据获取和状态管理"}),e.jsx("li",{children:"• 组件增强和装饰"})]})]}),e.jsxs("div",{className:"bg-yellow-50 p-4 rounded-lg border border-yellow-200",children:[e.jsx("h4",{className:"font-semibold text-yellow-800 mb-2",children:"⚠️ 注意事项"}),e.jsxs("ul",{className:"text-sm text-yellow-700 space-y-1",children:[e.jsx("li",{children:"• 不要在render方法中使用HOC"}),e.jsx("li",{children:"• 静态方法需要手动复制"}),e.jsx("li",{children:"• Refs不会被传递"}),e.jsx("li",{children:"• 可能导致组件层级过深"})]})]})]})]}),examples:[{title:"1. Loading状态HOC",description:"为组件添加统一的加载状态处理",component:e.jsx(f,{}),observationPoints:['点击"开始加载"按钮时，组件显示loading状态','loading状态下显示旋转动画和"加载中..."文字','点击"停止加载"按钮时，恢复显示原组件内容',"HOC完全接管了loading状态的UI展示逻辑"],keyPoints:["HOC接收isLoading prop来控制loading状态","使用条件渲染在loading和正常状态间切换","通过解构props分离HOC专用props和组件props","HOC不修改原组件，只是在外层包装逻辑"],commonTraps:["忘记传递isLoading prop导致组件无法显示loading状态","在HOC内部硬编码loading UI，缺乏灵活性","没有正确解构props，导致原组件收到不需要的props"],solutions:["确保在使用HOC时正确传递isLoading prop","可以将loading UI作为参数传入HOC，提高复用性","使用TypeScript确保props类型安全"],importantTips:["withLoading HOC可以应用于任何组件，提供统一的loading体验","loading状态的UI可以根据设计系统进行定制","这种模式特别适合需要异步数据加载的组件"],codeExample:{title:"Loading状态HOC实现",description:"为任何组件添加loading状态处理能力",code:`// Loading状态HOC
function withLoading<T extends object>(WrappedComponent: ComponentType<T>) {  // ← 重点：泛型HOC函数定义
  return function WithLoadingComponent(props: T & { isLoading?: boolean }) {  // ← 重点：返回增强组件
    const { isLoading, ...restProps } = props;  // ← 重点：解构分离HOC专用props
    
    // 显示loading状态
    if (isLoading) {  // ← 重点：条件渲染loading状态
      return (
        <div className="flex items-center justify-center p-8">
          <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-blue-500"></div>
          <span className="ml-2 text-gray-600">加载中...</span>
        </div>
      );
    }
    
    // 渲染原组件
    return <WrappedComponent {...(restProps as T)} />;  // ← 重点：渲染原组件并传递props
  };
}

// 使用HOC
const EnhancedUserProfile = withLoading(UserProfile);  // ← 重点：创建增强组件

// 在组件中使用
<EnhancedUserProfile isLoading={loading} user={userData} />  // ← 重点：使用增强组件`,highlights:[2,3,4,7,16,20,23]}},{title:"2. 权限控制HOC",description:"根据用户权限控制组件的访问",component:e.jsx(H,{}),observationPoints:["管理员权限组件正常显示用户信息","用户权限组件也正常显示（当前用户是管理员）","如果用户权限不足，会显示权限不足的提示信息","HOC在权限验证失败时完全阻止原组件渲染"],keyPoints:["HOC接收requiredRole参数指定所需权限级别","在渲染前进行权限检查，决定是否渲染原组件","权限不足时显示友好的错误提示","权限验证通过时将用户信息传递给原组件"],commonTraps:["硬编码用户信息，实际应用中应从Context或状态管理获取","权限检查逻辑过于简单，实际可能需要更复杂的权限系统","没有处理用户信息为空的情况"],solutions:["集成真实的用户认证系统和权限管理","使用React Context或Redux管理用户状态","提供更灵活的权限检查函数"],importantTips:["权限控制HOC应该与应用的认证系统紧密集成","考虑提供loading状态，因为权限检查可能是异步的","权限不足的提示信息应该用户友好且符合设计规范"],codeExample:{title:"权限控制HOC实现",description:"基于用户角色控制组件访问权限",code:`// 权限控制HOC
function withAuth<T extends object>(  // ← 重点：泛型HOC函数定义
  WrappedComponent: ComponentType<T>,  // ← 重点：接收要包装的组件
  requiredRole: string = 'user'  // ← 重点：指定所需权限级别
) {
  return function WithAuthComponent(props: T) {  // ← 重点：返回权限控制组件
    // 获取当前用户信息（实际项目中可能来自Context或Redux）
    const [user] = useState({ role: 'admin', name: '管理员' });  // ← 重点：获取用户信息
    
    // 权限检查
    if (!user || user.role !== requiredRole) {  // ← 重点：权限验证逻辑
      return (
        <div className="bg-red-50 border border-red-200 rounded-lg p-4">
          <p className="text-red-700">⚠️ 权限不足，需要 {requiredRole} 权限</p>
        </div>
      );
    }
    
    // 权限验证通过，渲染组件并传递用户信息
    return <WrappedComponent {...props} user={user} />;  // ← 重点：渲染原组件并传递用户信息
  };
}

// 使用示例
const AdminPanel = withAuth(AdminComponent, 'admin');  // ← 重点：创建管理员组件
const UserDashboard = withAuth(DashboardComponent, 'user');  // ← 重点：创建用户组件`,highlights:[2,3,4,6,8,11,20,25,26]}},{title:"3. 数据获取HOC",description:"封装数据获取逻辑，提供统一的数据接口",component:e.jsx(b,{}),observationPoints:['组件加载时自动显示"数据加载中..."状态',"1秒后数据加载完成，显示用户列表","HOC自动处理了loading、data、error三种状态","原组件只需关心如何渲染数据，无需处理加载逻辑"],keyPoints:["HOC封装了完整的异步数据获取流程","提供loading、data、error三个状态给原组件","使用useEffect在组件挂载时自动获取数据","通过isMounted标志避免组件卸载后的状态更新"],commonTraps:["没有处理组件卸载时的清理，可能导致内存泄漏","数据获取失败时没有提供重试机制","没有考虑数据缓存，每次都重新获取"],solutions:["使用cleanup函数和isMounted标志防止内存泄漏","提供重试机制和错误恢复功能","考虑集成数据缓存或使用SWR等库"],importantTips:["withData HOC适合封装标准的CRUD操作","可以扩展支持分页、筛选等高级功能","在实际项目中建议使用成熟的数据获取库如React Query"],codeExample:{title:"数据获取HOC实现",description:"封装异步数据获取逻辑，提供统一的数据、loading和error状态",code:`// 数据获取HOC
function withData<T extends object, D = any>(  // ← 重点：泛型HOC函数定义
  WrappedComponent: ComponentType<T & { data: D; loading: boolean; error: string | null }>,  // ← 重点：组件类型定义
  dataSource: () => Promise<D>  // ← 重点：数据源函数
) {
  return function WithDataComponent(props: T) {  // ← 重点：返回数据获取组件
    const [data, setData] = useState<D | null>(null);  // ← 重点：数据状态
    const [loading, setLoading] = useState(true);  // ← 重点：加载状态
    const [error, setError] = useState<string | null>(null);  // ← 重点：错误状态
    
    useEffect(() => {  // ← 重点：数据获取副作用
      let isMounted = true;  // ← 重点：防止内存泄漏标志
      
      const fetchData = async () => {
        try {
          setLoading(true);
          setError(null);
          const result = await dataSource();  // ← 重点：调用数据源函数
          
          if (isMounted) {
            setData(result);  // ← 重点：设置数据
          }
        } catch (err) {
          if (isMounted) {
            setError(err instanceof Error ? err.message : '数据获取失败');
          }
        } finally {
          if (isMounted) {
            setLoading(false);  // ← 重点：结束加载状态
          }
        }
      };
      
      fetchData();
      
      // 清理函数
      return () => {
        isMounted = false;  // ← 重点：组件卸载时清理
      };
    }, []);
    
    // 传递数据状态给包装的组件
    return (  // ← 重点：渲染原组件并传递数据状态
      <WrappedComponent 
        {...props} 
        data={data} 
        loading={loading} 
        error={error} 
      />
    );
  };
}

// 使用示例
const fetchUsers = () =>   // ← 重点：定义数据源函数
  new Promise(resolve => 
    setTimeout(() => resolve({ users: ['Alice', 'Bob', 'Charlie'] }), 2000)
  );

const EnhancedUserList = withData(UserListComponent, fetchUsers);  // ← 重点：创建增强组件`,highlights:[2,3,4,6,7,8,9,11,12,18,21,29,38,42,54,58]}}],codeExamples:[{title:"Loading状态HOC实现",description:"这个HOC为任何组件添加loading状态处理能力",code:`// Loading状态HOC
function withLoading<T extends object>(WrappedComponent: ComponentType<T>) {  // ← 重点：泛型HOC函数定义
  return function WithLoadingComponent(props: T & { isLoading?: boolean }) {  // ← 重点：返回增强组件
    const { isLoading, ...restProps } = props;  // ← 重点：解构分离HOC专用props
    
    // 显示loading状态
    if (isLoading) {  // ← 重点：条件渲染loading状态
      return (
        <div className="flex items-center justify-center p-8">
          <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-blue-500"></div>
          <span className="ml-2 text-gray-600">加载中...</span>
        </div>
      );
    }
    
    // 渲染原组件
    return <WrappedComponent {...(restProps as T)} />;  // ← 重点：渲染原组件并传递props
  };
}

// 使用HOC
const EnhancedUserProfile = withLoading(UserProfile);  // ← 重点：创建增强组件

// 在组件中使用
<EnhancedUserProfile isLoading={loading} user={userData} />  // ← 重点：使用增强组件`,highlights:[2,3,4,7,16,20,23]},{title:"权限控制HOC实现",description:"基于用户角色控制组件访问权限",code:`// 权限控制HOC
function withAuth<T extends object>(  // ← 重点：泛型HOC函数定义
  WrappedComponent: ComponentType<T>,  // ← 重点：接收要包装的组件
  requiredRole: string = 'user'  // ← 重点：指定所需权限级别
) {
  return function WithAuthComponent(props: T) {  // ← 重点：返回权限控制组件
    // 获取当前用户信息（实际项目中可能来自Context或Redux）
    const [user] = useState({ role: 'admin', name: '管理员' });  // ← 重点：获取用户信息
    
    // 权限检查
    if (!user || user.role !== requiredRole) {  // ← 重点：权限验证逻辑
      return (
        <div className="bg-red-50 border border-red-200 rounded-lg p-4">
          <p className="text-red-700">⚠️ 权限不足，需要 {requiredRole} 权限</p>
        </div>
      );
    }
    
    // 权限验证通过，渲染组件并传递用户信息
    return <WrappedComponent {...props} user={user} />;  // ← 重点：渲染原组件并传递用户信息
  };
}

// 使用示例
const AdminPanel = withAuth(AdminComponent, 'admin');  // ← 重点：创建管理员组件
const UserDashboard = withAuth(DashboardComponent, 'user');  // ← 重点：创建用户组件`,highlights:[2,3,4,6,8,11,20,25,26]},{title:"数据获取HOC实现",description:"封装异步数据获取逻辑，提供统一的数据、loading和error状态",code:`// 数据获取HOC
function withData<T extends object, D = any>(  // ← 重点：泛型HOC函数定义
  WrappedComponent: ComponentType<T & { data: D; loading: boolean; error: string | null }>,  // ← 重点：组件类型定义
  dataSource: () => Promise<D>  // ← 重点：数据源函数
) {
  return function WithDataComponent(props: T) {  // ← 重点：返回数据获取组件
    const [data, setData] = useState<D | null>(null);  // ← 重点：数据状态
    const [loading, setLoading] = useState(true);  // ← 重点：加载状态
    const [error, setError] = useState<string | null>(null);  // ← 重点：错误状态
    
    useEffect(() => {  // ← 重点：数据获取副作用
      let isMounted = true;  // ← 重点：防止内存泄漏标志
      
      const fetchData = async () => {
        try {
          setLoading(true);
          setError(null);
          const result = await dataSource();  // ← 重点：调用数据源函数
          
          if (isMounted) {
            setData(result);  // ← 重点：设置数据
          }
        } catch (err) {
          if (isMounted) {
            setError(err instanceof Error ? err.message : '数据获取失败');
          }
        } finally {
          if (isMounted) {
            setLoading(false);  // ← 重点：结束加载状态
          }
        }
      };
      
      fetchData();
      
      // 清理函数
      return () => {
        isMounted = false;  // ← 重点：组件卸载时清理
      };
    }, []);
    
    // 传递数据状态给包装的组件
    return (  // ← 重点：渲染原组件并传递数据状态
      <WrappedComponent 
        {...props} 
        data={data} 
        loading={loading} 
        error={error} 
      />
    );
  };
}

// 使用示例
const fetchUsers = () =>   // ← 重点：定义数据源函数
  new Promise(resolve => 
    setTimeout(() => resolve({ users: ['Alice', 'Bob', 'Charlie'] }), 2000)
  );

const EnhancedUserList = withData(UserListComponent, fetchUsers);  // ← 重点：创建增强组件`,highlights:[2,3,4,6,7,8,9,11,12,18,21,29,38,42,54,58]}],tutorial:{concepts:["HOC（Higher-Order Component）是一个函数，接收一个组件并返回一个新的增强组件","HOC是React中实现横切关注点（cross-cutting concerns）的主要方式","HOC不修改原始组件，而是通过组合的方式扩展功能，遵循开闭原则","HOC可以用于逻辑复用、props操作、状态管理、条件渲染等场景","HOC本质上是一种设计模式，类似于装饰器模式"],steps:["1. 定义HOC函数：创建一个接收组件作为参数的函数","2. 创建包装组件：在HOC内部定义一个新的React组件","3. 添加增强逻辑：在包装组件中实现所需的功能（状态管理、副作用等）","4. 渲染原组件：返回原始组件并传递所有必要的props","5. 设置displayName：为调试和开发工具提供有意义的组件名称","6. 处理静态方法：复制原组件的静态方法到新组件","7. 转发refs：使用React.forwardRef确保ref能正确传递到原组件"],tips:["使用TypeScript泛型确保类型安全，避免props类型丢失","为HOC组件设置有意义的displayName，格式如：WithHOCName(ComponentName)","使用React.forwardRef转发refs，确保父组件能访问到被包装组件的实例","复制原组件的静态方法到新组件，使用hoist-non-react-statics库","避免在render方法中创建HOC，这会导致组件重新挂载","考虑使用React Hooks替代HOC，Hooks通常更简洁且易于理解","为复杂的HOC提供配置选项，增加灵活性和可复用性"]},interview:{questions:[{question:"什么是HOC（高阶组件）？它的核心思想是什么？",answer:"HOC是一个函数，接收一个组件作为参数并返回一个新的增强组件。核心思想是通过组合而非继承来扩展组件功能，实现横切关注点的分离和逻辑复用。它类似于高阶函数的概念，但应用于React组件。"},{question:"HOC解决了什么问题？有哪些典型应用场景？",answer:"HOC主要解决组件间逻辑复用问题。典型应用场景包括：1）权限控制和身份验证；2）数据获取和状态管理；3）日志记录和性能监控；4）主题切换和样式注入；5）表单验证和错误处理；6）条件渲染和加载状态管理。"},{question:"HOC和React Hooks的区别是什么？各有什么优缺点？",answer:"HOC通过组件包装实现逻辑复用，Hooks通过函数调用实现。HOC优点：概念清晰、可以操作整个组件树；缺点：可能导致包装地狱、props来源不明确。Hooks优点：更简洁、逻辑更清晰、避免嵌套；缺点：只能在函数组件中使用、有使用规则限制。"},{question:"使用HOC时需要注意哪些问题？如何避免常见陷阱？",answer:"常见问题：1）不要在render中创建HOC，会导致重新挂载；2）需要转发refs和复制静态方法；3）props命名冲突；4）调试困难。解决方案：1）在组件外部创建HOC；2）使用React.forwardRef和hoist-non-react-statics；3）使用命名空间避免冲突；4）设置displayName便于调试。"},{question:"如何实现一个类型安全的HOC？",answer:"使用TypeScript泛型：1）定义泛型参数约束原组件props类型；2）明确指定HOC注入的props类型；3）使用交叉类型合并props；4）正确处理可选props和默认值；5）为复杂场景提供类型辅助函数。"}],keyPoints:["HOC是函数，不是组件，遵循函数式编程思想","通过组合而非继承实现功能扩展，符合React设计理念","解决横切关注点问题，实现关注点分离","不修改原组件，保持组件的纯净性和可测试性","需要正确处理refs转发、静态方法复制和displayName设置","在现代React开发中，Hooks通常是更好的选择","适合封装复杂的、跨组件的业务逻辑"]},bestPractices:{dos:["使用TypeScript泛型确保类型安全，避免any类型的滥用","为HOC设置有意义的displayName，格式：WithHOCName(ComponentName)","使用React.forwardRef正确转发refs到被包装组件","使用hoist-non-react-statics库复制静态方法","在组件外部创建HOC实例，避免在render中创建","提供清晰的文档说明HOC的功能和使用方法","为复杂HOC提供配置选项，增加灵活性","使用命名空间避免props命名冲突","实现适当的错误边界和异常处理","考虑性能优化，使用React.memo等优化手段"],donts:["不要在render方法中创建HOC，会导致组件重新挂载","不要修改原始组件的prototype或静态属性",'不要过度嵌套HOC，避免"包装地狱"',"不要在HOC中直接修改传入的props对象","不要忽略ref转发和静态方法复制","不要使用HOC处理简单的逻辑，优先考虑Hooks","不要在HOC中硬编码业务逻辑，保持通用性","不要忽略TypeScript类型定义，避免类型丢失","不要在HOC中进行副作用操作而不清理","不要创建过于复杂的HOC，影响代码可读性"],patterns:["属性代理模式：HOC通过props传递数据和方法给被包装组件","反向继承模式：HOC返回的组件继承自被包装组件（不推荐）","条件渲染模式：根据条件决定是否渲染被包装组件","数据获取模式：HOC负责数据获取，被包装组件负责展示","权限控制模式：HOC进行权限验证，控制组件访问","错误边界模式：HOC提供错误捕获和处理能力","主题注入模式：HOC注入主题相关的props和样式","生命周期增强模式：HOC添加额外的生命周期逻辑","状态管理模式：HOC提供状态管理和状态同步功能","组合模式：多个HOC组合使用，实现复杂功能"]}};return e.jsx(C,{...t})},a=({user:t})=>e.jsxs("div",{className:"bg-green-50 border border-green-200 rounded-lg p-4",children:[e.jsx("h3",{className:"text-lg font-semibold text-green-800",children:"用户资料"}),e.jsxs("p",{className:"text-green-700",children:["姓名: ",(t==null?void 0:t.name)||"未知用户"]}),e.jsxs("p",{className:"text-green-700",children:["角色: ",(t==null?void 0:t.role)||"无"]})]});function g(t){return function(r){const{isLoading:o,...n}=r;return o?e.jsxs("div",{className:"flex items-center justify-center p-8",children:[e.jsx("div",{className:"animate-spin rounded-full h-8 w-8 border-b-2 border-blue-500"}),e.jsx("span",{className:"ml-2 text-gray-600",children:"加载中..."})]}):e.jsx(t,{...n})}}function d(t,s="user"){return function(o){const[n]=i.useState({role:"admin",name:"管理员"});return!n||n.role!==s?e.jsx("div",{className:"bg-red-50 border border-red-200 rounded-lg p-4",children:e.jsxs("p",{className:"text-red-700",children:["⚠️ 权限不足，需要 ",s," 权限"]})}):e.jsx(t,{...o,user:n})}}function x(t,s){return function(o){const[n,l]=i.useState(null),[c,p]=i.useState(!0),[u,m]=i.useState(null);return i.useEffect(()=>{s().then(l).catch(h=>m(h.message)).finally(()=>p(!1))},[]),e.jsx(t,{...o,data:n,loading:c,error:u})}}const f=()=>{const[t,s]=i.useState(!1),r=g(a);return e.jsxs("div",{children:[e.jsx("button",{onClick:()=>s(!t),className:"mb-4 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded",children:t?"停止加载":"开始加载"}),e.jsx(r,{isLoading:t,user:{name:"张三",role:"user"}})]})},H=()=>{const t=d(a,"admin"),s=d(a,"user");return e.jsxs("div",{className:"space-y-4",children:[e.jsxs("div",{children:[e.jsx("h4",{className:"font-medium mb-2",children:"需要管理员权限的组件："}),e.jsx(t,{})]}),e.jsxs("div",{children:[e.jsx("h4",{className:"font-medium mb-2",children:"需要用户权限的组件："}),e.jsx(s,{})]})]})},O=({data:t,loading:s,error:r})=>s?e.jsx("div",{className:"text-blue-600",children:"数据加载中..."}):r?e.jsxs("div",{className:"text-red-600",children:["错误: ",r]}):t?e.jsxs("div",{className:"bg-blue-50 border border-blue-200 rounded-lg p-4",children:[e.jsx("h4",{className:"font-medium mb-2",children:"用户列表："}),e.jsx("ul",{className:"list-disc list-inside",children:t.users.map((o,n)=>e.jsx("li",{className:"text-blue-700",children:o},n))})]}):e.jsx("div",{className:"text-gray-600",children:"暂无数据"}),b=()=>{const s=x(O,()=>new Promise(r=>{setTimeout(()=>{r({users:["用户1","用户2","用户3"]})},1e3)}));return e.jsx(s,{})};export{y as default};
