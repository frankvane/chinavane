import{j as e,r as n}from"./index-B_BA6J2H.js";import{C as p}from"./ComponentTemplate-CRmS-rAK.js";const f=()=>{const[a,s]=n.useState([]),[r,o]=n.useState(!0),[i,d]=n.useState(null);n.useEffect(()=>{(async()=>{try{o(!0),await new Promise(t=>setTimeout(t,1e3)),s([{id:1,name:"张三",email:"zhangsan@example.com",status:"active"},{id:2,name:"李四",email:"lisi@example.com",status:"inactive"},{id:3,name:"王五",email:"wangwu@example.com",status:"active"}])}catch{d("获取用户列表失败")}finally{o(!1)}})()},[]);const l=n.useCallback(c=>{s(m=>m.map(t=>t.id===c?{...t,status:t.status==="active"?"inactive":"active"}:t))},[]);return r?e.jsx(k,{}):i?e.jsx(S,{message:i}):e.jsx(b,{users:a,onUserToggle:l})},b=({users:a,onUserToggle:s})=>e.jsxs("div",{children:[e.jsx("h3",{className:"text-lg font-semibold mb-4",children:"用户列表"}),e.jsx("div",{className:"space-y-2",children:a.map(r=>e.jsxs("div",{className:"flex items-center justify-between p-3 bg-gray-50 rounded-lg",children:[e.jsxs("div",{children:[e.jsx("div",{className:"font-medium",children:r.name}),e.jsx("div",{className:"text-sm text-gray-500",children:r.email})]}),e.jsxs("div",{className:"flex items-center space-x-2",children:[e.jsx("span",{className:`px-2 py-1 text-xs rounded-full ${r.status==="active"?"bg-green-100 text-green-800":"bg-red-100 text-red-800"}`,children:r.status==="active"?"活跃":"非活跃"}),e.jsx("button",{onClick:()=>s(r.id),className:"px-3 py-1 text-sm bg-blue-500 text-white rounded hover:bg-blue-600",children:"切换状态"})]})]},r.id))})]}),y=()=>{const[a,s]=n.useState({name:"",email:"",message:""}),[r,o]=n.useState({}),[i,d]=n.useState(!1),[l,c]=n.useState(!1),m=n.useCallback(g=>{const u={};return g.name.trim()||(u.name="姓名不能为空"),g.email.trim()?/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(g.email)||(u.email="邮箱格式不正确"):u.email="邮箱不能为空",g.message.trim()||(u.message="消息不能为空"),u},[]),t=n.useCallback(async g=>{const u=m(g);if(o(u),Object.keys(u).length===0){d(!0);try{await new Promise(h=>setTimeout(h,1e3)),c(!0),s({name:"",email:"",message:""})}catch(h){console.error("提交失败:",h)}finally{d(!1)}}},[m]),x=n.useCallback(()=>{s({name:"",email:"",message:""}),o({}),c(!1)},[]);return e.jsx(v,{formData:a,errors:r,submitting:i,submitted:l,onChange:s,onSubmit:t,onReset:x})},v=({formData:a,errors:s,submitting:r,submitted:o,onChange:i,onSubmit:d,onReset:l})=>{const c=(t,x)=>{i({...a,[t]:x})},m=t=>{t.preventDefault(),d(a)};return o?e.jsxs("div",{className:"text-center p-6 bg-green-50 rounded-lg",children:[e.jsx("div",{className:"text-green-600 text-lg font-semibold mb-2",children:"✅ 提交成功！"}),e.jsx("p",{className:"text-gray-600 mb-4",children:"您的消息已成功发送。"}),e.jsx("button",{onClick:l,className:"px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600",children:"发送新消息"})]}):e.jsxs("form",{onSubmit:m,className:"space-y-4",children:[e.jsxs("div",{children:[e.jsx("label",{className:"block text-sm font-medium text-gray-700 mb-1",children:"姓名"}),e.jsx("input",{type:"text",value:a.name,onChange:t=>c("name",t.target.value),className:`w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 ${s.name?"border-red-500":"border-gray-300"}`,placeholder:"请输入您的姓名"}),s.name&&e.jsx("p",{className:"text-red-500 text-sm mt-1",children:s.name})]}),e.jsxs("div",{children:[e.jsx("label",{className:"block text-sm font-medium text-gray-700 mb-1",children:"邮箱"}),e.jsx("input",{type:"email",value:a.email,onChange:t=>c("email",t.target.value),className:`w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 ${s.email?"border-red-500":"border-gray-300"}`,placeholder:"请输入您的邮箱"}),s.email&&e.jsx("p",{className:"text-red-500 text-sm mt-1",children:s.email})]}),e.jsxs("div",{children:[e.jsx("label",{className:"block text-sm font-medium text-gray-700 mb-1",children:"消息"}),e.jsx("textarea",{value:a.message,onChange:t=>c("message",t.target.value),rows:4,className:`w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 ${s.message?"border-red-500":"border-gray-300"}`,placeholder:"请输入您的消息"}),s.message&&e.jsx("p",{className:"text-red-500 text-sm mt-1",children:s.message})]}),e.jsxs("div",{className:"flex space-x-3",children:[e.jsx("button",{type:"submit",disabled:r,className:"flex-1 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 disabled:opacity-50 disabled:cursor-not-allowed",children:r?"提交中...":"提交"}),e.jsx("button",{type:"button",onClick:l,className:"px-4 py-2 bg-gray-500 text-white rounded hover:bg-gray-600",children:"重置"})]})]})},j=()=>{const[a,s]=n.useState(""),[r,o]=n.useState([]),[i,d]=n.useState(!1),l=n.useRef(null),c=n.useMemo(()=>["React组件","Vue组件","Angular组件","JavaScript框架","TypeScript类型","CSS样式","HTML标签","Node.js服务","Express框架","MongoDB数据库"],[]),m=n.useCallback(async x=>{if(!x.trim()){o([]);return}d(!0);try{await new Promise(u=>setTimeout(u,300));const g=c.filter(u=>u.toLowerCase().includes(x.toLowerCase()));o(g)}catch(g){console.error("搜索失败:",g),o([])}finally{d(!1)}},[c]),t=n.useCallback(x=>{s(x),l.current&&clearTimeout(l.current),l.current=setTimeout(()=>{m(x)},300)},[m]);return n.useEffect(()=>()=>{l.current&&clearTimeout(l.current)},[]),e.jsx(C,{query:a,results:r,loading:i,onQueryChange:t})},C=({query:a,results:s,loading:r,onQueryChange:o})=>e.jsxs("div",{children:[e.jsx("div",{className:"mb-4",children:e.jsx("input",{type:"text",value:a,onChange:i=>o(i.target.value),placeholder:"搜索技术关键词...",className:"w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"})}),r&&e.jsx("div",{className:"text-center py-4",children:e.jsx("div",{className:"text-gray-500",children:"搜索中..."})}),!r&&a&&s.length===0&&e.jsx("div",{className:"text-center py-4 text-gray-500",children:"未找到相关结果"}),!r&&s.length>0&&e.jsxs("div",{className:"space-y-2",children:[e.jsxs("h4",{className:"font-semibold text-gray-700",children:["找到 ",s.length," 个结果："]}),s.map((i,d)=>e.jsx("div",{className:"p-3 bg-blue-50 rounded-lg border border-blue-200",children:i},d))]})]}),k=()=>e.jsx("div",{className:"text-center py-8",children:e.jsx("div",{className:"text-gray-500",children:"加载中..."})}),S=({message:a})=>e.jsx("div",{className:"text-center py-8 text-red-500",children:e.jsxs("div",{children:["错误: ",a]})}),R=()=>e.jsx(p,{title:"容器组件 (Container Components)",description:"容器组件（智能组件）是React应用架构中的重要概念，负责管理数据和状态，处理业务逻辑，并将数据传递给展示组件。它们关注'如何工作'而不是'如何显示'，是数据层和UI层之间的桥梁。",overview:e.jsxs("div",{className:"space-y-4",children:[e.jsxs("div",{children:[e.jsx("h3",{className:"text-lg font-semibold mb-2",children:"核心概念"}),e.jsx("p",{className:"text-gray-700",children:'容器组件（智能组件）是React应用架构中的重要概念，负责管理数据和状态，处理业务逻辑，并将数据传递给展示组件。它们关注"如何工作"而不是"如何显示"，是数据层和UI层之间的桥梁。'})]}),e.jsxs("div",{children:[e.jsx("h3",{className:"text-lg font-semibold mb-2",children:"主要优势"}),e.jsxs("ul",{className:"list-disc list-inside space-y-1 text-gray-700",children:[e.jsx("li",{children:"职责分离 - 将数据逻辑与UI渲染分离，提高代码可维护性"}),e.jsx("li",{children:"可复用性 - 同一个容器组件可以配合不同的展示组件使用"}),e.jsx("li",{children:"可测试性 - 业务逻辑集中在容器组件中，便于单元测试"}),e.jsx("li",{children:"状态管理 - 统一管理组件状态，避免状态分散"}),e.jsx("li",{children:"数据流清晰 - 明确的数据流向，便于调试和维护"})]})]}),e.jsxs("div",{children:[e.jsx("h3",{className:"text-lg font-semibold mb-2",children:"适用场景"}),e.jsxs("ul",{className:"list-disc list-inside space-y-1 text-gray-700",children:[e.jsx("li",{children:"数据获取 - 从API获取数据并管理加载状态"}),e.jsx("li",{children:"表单处理 - 管理表单状态、验证和提交逻辑"}),e.jsx("li",{children:"用户交互 - 处理用户操作和状态变更"}),e.jsx("li",{children:"路由管理 - 根据路由参数获取和管理数据"}),e.jsx("li",{children:"权限控制 - 根据用户权限控制组件行为"})]})]}),e.jsxs("div",{children:[e.jsx("h3",{className:"text-lg font-semibold mb-2",children:"注意事项"}),e.jsxs("ul",{className:"list-disc list-inside space-y-1 text-gray-700",children:[e.jsx("li",{children:"避免过度抽象 - 不要为了分离而分离，保持代码简洁"}),e.jsx("li",{children:"状态提升 - 合理决定状态应该放在哪个层级"}),e.jsx("li",{children:"性能考虑 - 避免不必要的重新渲染和状态更新"}),e.jsx("li",{children:"错误处理 - 提供完善的错误处理和用户反馈"}),e.jsx("li",{children:"测试覆盖 - 确保容器组件的业务逻辑有充分的测试覆盖"})]})]})]}),examples:[{title:"用户列表容器组件",description:"演示如何管理用户列表数据和状态，处理用户操作",component:e.jsx(f,{}),observationPoints:["容器组件负责数据获取和状态管理，展示组件只负责UI渲染","使用useEffect处理异步数据获取，正确管理loading和error状态","通过props将数据和回调函数传递给展示组件","使用useCallback优化回调函数，避免不必要的重新渲染"],keyPoints:["容器组件专注于数据和业务逻辑处理","展示组件专注于UI渲染和用户交互","通过props实现数据的单向流动","合理处理异步操作的各种状态"],commonTraps:["在展示组件中直接处理业务逻辑","忘记处理loading和error状态","在render中创建新的回调函数","状态管理过于复杂或分散"],solutions:["严格遵循容器组件和展示组件的职责分离","使用统一的状态管理模式处理异步操作","使用useCallback缓存回调函数","保持状态结构简单清晰"],importantTips:["容器组件应该是数据的唯一来源，避免在多个地方管理相同的状态","展示组件应该是纯函数式的，相同的props应该产生相同的输出"],codeExample:{title:"用户列表容器组件实现",code:`// 容器组件 - 负责数据和逻辑
const UserListContainer: React.FC = () => {
  const [users, setUsers] = useState<User[]>([]);  // ← 重点：状态管理
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  // 数据获取逻辑
  useEffect(() => {
    const fetchUsers = async () => {  // ← 重点：异步数据获取
      try {
        setLoading(true);
        // 模拟API调用
        const response = await fetch('/api/users');
        const userData = await response.json();
        setUsers(userData);  // ← 重点：更新状态
      } catch (err) {
        setError('获取用户数据失败');  // ← 重点：错误处理
      } finally {
        setLoading(false);
      }
    };

    fetchUsers();
  }, []);

  // 业务逻辑处理
  const handleUserToggle = useCallback((userId: number) => {  // ← 重点：业务逻辑
    setUsers(prev => prev.map(user =>
      user.id === userId
        ? { ...user, status: user.status === 'active' ? 'inactive' : 'active' }
        : user
    ));
  }, []);

  // 状态判断和组件渲染
  if (loading) return <LoadingComponent />;
  if (error) return <ErrorComponent message={error} />;

  return (
    <UserListPresentation  // ← 重点：传递数据给展示组件
      users={users}
      onUserToggle={handleUserToggle}
    />
  );
};

// 展示组件 - 负责UI渲染
const UserListPresentation: React.FC<UserListPresentationProps> = ({
  users,
  onUserToggle,
}) => {
  return (
    <div>
      <h3 className="text-lg font-semibold mb-4">用户列表</h3>
      <div className="space-y-2">
        {users.map((user) => (
          <div key={user.id} className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
            <div>
              <div className="font-medium">{user.name}</div>
              <div className="text-sm text-gray-500">{user.email}</div>
            </div>
            <button
              onClick={() => onUserToggle(user.id)}
              className="px-3 py-1 text-sm bg-blue-500 text-white rounded hover:bg-blue-600"
            >
              切换状态
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};`,language:"typescript",highlights:[3,10,17,19,29,42],explanation:"容器组件专注于数据获取、状态管理和业务逻辑处理，展示组件专注于UI渲染。"}},{title:"表单容器组件",description:"展示表单状态管理、验证和提交逻辑的处理",component:e.jsx(y,{}),observationPoints:["容器组件管理表单数据、验证错误和提交状态","使用useCallback优化验证函数和提交函数","展示组件通过回调函数与容器组件通信","提供完整的用户反馈和错误处理"],keyPoints:["表单状态集中管理在容器组件中","验证逻辑与UI渲染分离","异步提交操作的状态管理","用户体验优化（loading、成功、错误状态）"],commonTraps:["在展示组件中处理表单验证逻辑","忘记处理提交过程中的loading状态","验证函数在每次渲染时重新创建","缺少用户友好的错误提示"],solutions:["将所有表单逻辑集中在容器组件中","提供完整的状态反馈（loading、success、error）","使用useCallback缓存验证和提交函数","设计清晰的错误提示和用户引导"],importantTips:["表单验证应该在容器组件中进行，保持展示组件的纯净性","合理使用受控组件模式，确保数据流的可预测性"],codeExample:{title:"表单容器组件实现",code:`// 表单容器组件
const FormContainer: React.FC = () => {
  const [formData, setFormData] = useState<FormData>({  // ← 重点：表单状态管理
    name: '',
    email: '',
    message: ''
  });
  const [errors, setErrors] = useState<Partial<FormData>>({});  // ← 重点：错误状态
  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  // 表单验证逻辑
  const validateForm = useCallback((data: FormData): Partial<FormData> => {  // ← 重点：验证逻辑
    const newErrors: Partial<FormData> = {};

    if (!data.name.trim()) {
      newErrors.name = '姓名不能为空';
    }

    if (!data.email.trim()) {
      newErrors.email = '邮箱不能为空';
    } else if (!/^[^\\s@]+@[^\\s@]+\\.[^\\s@]+$/.test(data.email)) {  // ← 重点：邮箱格式验证
      newErrors.email = '邮箱格式不正确';
    }

    if (!data.message.trim()) {
      newErrors.message = '消息不能为空';
    }

    return newErrors;
  }, []);

  // 表单提交逻辑
  const handleSubmit = useCallback(async (data: FormData) => {  // ← 重点：提交处理
    const validationErrors = validateForm(data);
    setErrors(validationErrors);

    if (Object.keys(validationErrors).length === 0) {
      setSubmitting(true);
      try {
        // 模拟API提交
        await new Promise(resolve => setTimeout(resolve, 1000));  // ← 重点：异步提交
        setSubmitted(true);
        setFormData({ name: '', email: '', message: '' });
      } catch (error) {
        console.error('提交失败:', error);
      } finally {
        setSubmitting(false);
      }
    }
  }, [validateForm]);

  const handleReset = useCallback(() => {  // ← 重点：重置逻辑
    setFormData({ name: '', email: '', message: '' });
    setErrors({});
    setSubmitted(false);
  }, []);

  return (
    <FormPresentation  // ← 重点：传递状态和处理函数
      formData={formData}
      errors={errors}
      submitting={submitting}
      submitted={submitted}
      onChange={setFormData}
      onSubmit={handleSubmit}
      onReset={handleReset}
    />
  );
};`,language:"typescript",highlights:[3,8,13,22,34,42,52,58],explanation:"表单容器组件管理表单状态、验证逻辑和提交处理，确保业务逻辑与UI分离。"}},{title:"搜索容器组件",description:"实现搜索功能的状态管理和异步数据处理",component:e.jsx(j,{}),observationPoints:["使用防抖技术优化搜索性能，避免频繁的API调用","管理搜索查询、结果和加载状态","使用useRef管理定时器，避免内存泄漏","展示组件根据不同状态显示相应的UI"],keyPoints:["防抖技术优化用户体验和性能","异步搜索操作的状态管理","使用useRef管理副作用","清理定时器避免内存泄漏"],commonTraps:["没有实现防抖，导致频繁的API调用","忘记清理定时器，造成内存泄漏","搜索状态管理不完整","缺少加载状态的用户反馈"],solutions:["使用setTimeout实现防抖功能","在useEffect的清理函数中清理定时器","完整管理搜索的各种状态","提供清晰的加载和结果状态反馈"],importantTips:["防抖是优化搜索体验的重要技术，可以显著减少不必要的API调用","使用useRef管理定时器引用，确保能够正确清理"],codeExample:{title:"搜索容器组件实现",code:`// 搜索容器组件
const SearchContainer: React.FC = () => {
  const [query, setQuery] = useState('');  // ← 重点：搜索查询状态
  const [results, setResults] = useState<string[]>([]);  // ← 重点：搜索结果状态
  const [loading, setLoading] = useState(false);
  const searchTimeoutRef = useRef<NodeJS.Timeout | null>(null);  // ← 重点：定时器引用

  // 模拟搜索数据
  const mockData = useMemo(() => [
    'React组件', 'Vue组件', 'Angular组件',
    'JavaScript框架', 'TypeScript类型',
    'CSS样式', 'HTML标签', 'Node.js服务'
  ], []);

  // 执行搜索逻辑
  const performSearch = useCallback(async (searchQuery: string) => {  // ← 重点：搜索逻辑
    if (!searchQuery.trim()) {
      setResults([]);
      return;
    }

    setLoading(true);
    try {
      // 模拟API延迟
      await new Promise(resolve => setTimeout(resolve, 300));
      const filteredResults = mockData.filter(item =>
        item.toLowerCase().includes(searchQuery.toLowerCase())
      );
      setResults(filteredResults);  // ← 重点：更新搜索结果
    } catch (error) {
      console.error('搜索失败:', error);
      setResults([]);
    } finally {
      setLoading(false);
    }
  }, [mockData]);

  // 处理查询变化（带防抖）
  const handleQueryChange = useCallback((newQuery: string) => {  // ← 重点：防抖处理
    setQuery(newQuery);

    // 清除之前的定时器
    if (searchTimeoutRef.current) {
      clearTimeout(searchTimeoutRef.current);
    }

    // 设置新的防抖定时器
    searchTimeoutRef.current = setTimeout(() => {
      performSearch(newQuery);  // ← 重点：延迟执行搜索
    }, 300);
  }, [performSearch]);

  // 清理定时器
  useEffect(() => {
    return () => {
      if (searchTimeoutRef.current) {
        clearTimeout(searchTimeoutRef.current);  // ← 重点：清理定时器
      }
    };
  }, []);

  return (
    <SearchPresentation  // ← 重点：传递状态和处理函数
      query={query}
      results={results}
      loading={loading}
      onQueryChange={handleQueryChange}
    />
  );
};`,language:"typescript",highlights:[3,4,6,16,29,39,49,56,61],explanation:"搜索容器组件使用防抖技术优化性能，管理搜索状态和异步操作。"}}],tutorial:{concepts:["容器组件与展示组件分离：容器组件负责数据和逻辑，展示组件负责UI渲染，提高代码可维护性","状态管理策略：合理设计状态结构，包括数据状态、UI状态和错误状态，保持状态最小化","异步操作处理：使用useEffect处理副作用，正确管理异步操作的各个阶段","性能优化技术：使用useCallback缓存函数，useMemo缓存计算结果，避免不必要的重新渲染","错误处理机制：实现完善的错误处理，包括网络错误、验证错误和运行时错误"],steps:["第一步：职责分析 - 明确区分容器组件和展示组件的职责边界","第二步：状态设计 - 设计合理的状态结构和数据流","第三步：数据获取 - 实现异步数据获取和状态管理","第四步：业务逻辑 - 封装业务逻辑和用户交互处理","第五步：性能优化 - 应用React性能优化最佳实践","第六步：错误处理 - 建立完善的错误处理机制","第七步：测试验证 - 编写全面的测试确保代码质量"],tips:["遵循单一职责原则，每个容器组件只负责一个功能域","保持状态最小化，只管理必要的状态信息","使用useCallback缓存事件处理函数，避免子组件重新渲染","使用useMemo缓存复杂计算结果，提高渲染性能","为所有异步操作提供loading和error状态","使用错误边界捕获和处理组件错误","使用TypeScript提供类型安全和更好的开发体验","使用自定义Hook提取可复用的业务逻辑","考虑使用状态管理库处理复杂的全局状态"]},interview:{questions:[{question:"什么是容器组件？它与展示组件有什么区别？",answer:`容器组件（Smart/Container Component）是负责数据获取、状态管理和业务逻辑的组件，而展示组件（Dumb/Presentational Component）只负责UI渲染。

主要区别：
• 容器组件：关注'如何工作'，管理状态、处理副作用、包含业务逻辑
• 展示组件：关注'如何显示'，接收props、渲染UI、处理用户交互

这种分离遵循了关注点分离原则，提高了代码的可维护性、可测试性和可复用性。展示组件可以在不同的容器组件中复用，而容器组件的逻辑可以独立测试。`,difficulty:"基础",tags:["架构模式","组件设计"]},{question:"容器组件的主要职责是什么？请详细说明每个职责。",answer:`容器组件的核心职责包括：

1. **状态管理**：
   - 管理组件内部状态（useState）
   - 处理状态更新逻辑
   - 确保状态的一致性和完整性

2. **数据获取**：
   - 从API、数据库或其他数据源获取数据
   - 处理数据获取的生命周期（loading、success、error）
   - 管理数据缓存和更新策略

3. **业务逻辑处理**：
   - 实现业务规则和计算逻辑
   - 处理用户交互产生的业务操作
   - 协调多个数据源和服务

4. **副作用管理**：
   - 使用useEffect处理组件生命周期
   - 管理订阅、定时器等副作用
   - 处理组件卸载时的清理工作

5. **错误处理**：
   - 捕获和处理异步操作错误
   - 提供错误恢复机制
   - 向用户展示友好的错误信息`,difficulty:"中级",tags:["状态管理","副作用","错误处理"]},{question:"如何设计一个高质量的容器组件？有哪些设计原则？",answer:`设计高质量容器组件的关键原则：

1. **单一职责原则**：
   - 每个容器组件只负责一个特定的功能域
   - 避免'上帝组件'，保持组件职责清晰
   - 当组件变得复杂时，考虑拆分

2. **状态最小化**：
   - 只管理必要的状态，避免冗余状态
   - 优先使用派生状态而不是存储计算结果
   - 保持状态结构扁平，避免深层嵌套

3. **逻辑封装**：
   - 将相关的业务逻辑封装在一起
   - 使用自定义Hook提取可复用逻辑
   - 保持逻辑的纯净性和可测试性

4. **接口设计**：
   - 设计清晰的props接口
   - 使用TypeScript提供类型安全
   - 确保数据流的可预测性

5. **性能考虑**：
   - 合理使用useCallback和useMemo
   - 避免不必要的重新渲染
   - 考虑组件的渲染成本`,difficulty:"中级",tags:["设计原则","性能优化","架构"]},{question:"容器组件如何处理异步数据？请提供完整的实现方案。",answer:`处理异步数据的完整方案：

1. **状态设计**：
\`\`\`typescript
const [data, setData] = useState<T[]>([]);
const [loading, setLoading] = useState(false);
const [error, setError] = useState<string | null>(null);
\`\`\`

2. **数据获取逻辑**：
\`\`\`typescript
const fetchData = useCallback(async () => {
  setLoading(true);
  setError(null);
  try {
    const response = await api.getData();
    setData(response.data);
  } catch (err) {
    setError(err.message);
  } finally {
    setLoading(false);
  }
}, []);
\`\`\`

3. **生命周期管理**：
\`\`\`typescript
useEffect(() => {
  fetchData();
  return () => {
    // 清理工作
  };
}, [fetchData]);
\`\`\`

4. **错误处理策略**：
   - 网络错误：提供重试机制
   - 业务错误：显示具体错误信息
   - 超时处理：设置合理的超时时间

5. **用户体验优化**：
   - 加载状态指示器
   - 错误状态展示
   - 空数据状态处理
   - 乐观更新策略`,difficulty:"中级",tags:["异步处理","状态管理","用户体验"]},{question:"如何优化容器组件的性能？有哪些具体的优化技术？",answer:`容器组件性能优化的具体技术：

1. **React优化技术**：
   - 使用React.memo包装展示组件
   - useCallback缓存事件处理函数
   - useMemo缓存复杂计算结果
   - 避免在render中创建新对象

2. **状态优化**：
   - 状态结构扁平化，减少不必要的嵌套
   - 使用状态分割，避免大对象状态
   - 合理使用useReducer管理复杂状态

3. **数据获取优化**：
   - 实现数据缓存机制
   - 使用防抖和节流技术
   - 分页和虚拟滚动处理大数据
   - 预加载和懒加载策略

4. **渲染优化**：
   - 条件渲染减少DOM操作
   - 使用key属性优化列表渲染
   - 避免内联样式和函数

5. **代码分割**：
   - 动态导入大型组件
   - 路由级别的代码分割
   - 第三方库的按需加载

6. **监控和分析**：
   - 使用React DevTools Profiler
   - 监控组件渲染次数
   - 分析性能瓶颈`,difficulty:"高级",tags:["性能优化","缓存","渲染优化"]},{question:"如何测试容器组件？请提供完整的测试策略。",answer:`容器组件的完整测试策略：

1. **单元测试**：
\`\`\`typescript
// 测试状态变更
test('should update user status', () => {
  const { result } = renderHook(() => useUserContainer());
  act(() => {
    result.current.toggleUser(1);
  });
  expect(result.current.selectedUsers).toContain(1);
});
\`\`\`

2. **集成测试**：
\`\`\`typescript
// 测试API交互
test('should fetch users on mount', async () => {
  const mockFetch = jest.fn().mockResolvedValue({
    json: () => Promise.resolve([{ id: 1, name: 'John' }])
  });
  global.fetch = mockFetch;
  
  render(<UserListContainer />);
  await waitFor(() => {
    expect(mockFetch).toHaveBeenCalledWith('/api/users');
  });
});
\`\`\`

3. **异步操作测试**：
   - 使用waitFor测试异步状态变更
   - Mock API调用和响应
   - 测试loading和error状态

4. **错误场景测试**：
   - 网络错误处理
   - API错误响应
   - 边界条件测试

5. **用户交互测试**：
   - 使用@testing-library/user-event
   - 测试表单提交和验证
   - 测试搜索和过滤功能

6. **性能测试**：
   - 测试组件渲染次数
   - 验证优化效果
   - 内存泄漏检测`,difficulty:"高级",tags:["测试","Mock","异步测试"]},{question:"容器组件与Redux等状态管理库的关系是什么？何时使用哪种方案？",answer:`容器组件与状态管理库的关系和选择策略：

1. **关系说明**：
   - 容器组件是架构模式，Redux是状态管理工具
   - 可以结合使用：容器组件连接Redux store
   - 也可以独立使用：容器组件管理本地状态

2. **使用场景对比**：

**本地状态（useState + 容器组件）**：
   - 组件私有状态
   - 简单的数据流
   - 不需要跨组件共享
   - 快速原型开发

**Redux + 容器组件**：
   - 复杂的全局状态
   - 多组件共享数据
   - 需要时间旅行调试
   - 大型应用架构

**Context + 容器组件**：
   - 中等复杂度的共享状态
   - 主题、用户信息等全局数据
   - 避免prop drilling

3. **选择原则**：
   - 状态复杂度：简单用本地状态，复杂用Redux
   - 共享范围：局部用本地状态，全局用状态管理库
   - 团队规模：小团队可用Context，大团队推荐Redux
   - 调试需求：需要强大调试工具时选择Redux

4. **最佳实践**：
   - 优先使用本地状态，必要时提升到全局
   - 使用自定义Hook封装状态逻辑
   - 保持状态管理方案的一致性`,difficulty:"高级",tags:["状态管理","Redux","架构选择"]},{question:"在现代React开发中，容器组件模式是否还有必要？有什么替代方案？",answer:`现代React中容器组件模式的演进和替代方案：

1. **模式演进**：
   - 传统：类组件 + HOC模式
   - 现代：函数组件 + Hooks模式
   - 核心思想依然有效：关注点分离

2. **现代替代方案**：

**自定义Hooks**：
\`\`\`typescript
// 替代容器组件的逻辑
const useUserList = () => {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(false);
  // 业务逻辑...
  return { users, loading, fetchUsers };
};
\`\`\`

**组合模式**：
\`\`\`typescript
// 组合多个Hooks
const UserListPage = () => {
  const userList = useUserList();
  const search = useSearch();
  const pagination = usePagination();
  
  return <UserListView {...userList} {...search} {...pagination} />;
};
\`\`\`

3. **优势对比**：

**自定义Hooks优势**：
   - 更好的逻辑复用
   - 更灵活的组合
   - 更简洁的代码
   - 更好的测试性

**容器组件优势**：
   - 更清晰的组件层次
   - 更明确的职责边界
   - 更好的代码组织

4. **推荐做法**：
   - 小型项目：优先使用自定义Hooks
   - 大型项目：结合使用两种模式
   - 复杂业务：保持容器组件模式
   - 简单逻辑：使用自定义Hooks

5. **未来趋势**：
   - Hooks成为主流
   - 容器组件概念依然重要
   - 关注点分离原则不变
   - 工具和模式会继续演进`,difficulty:"高级",tags:["现代React","Hooks","架构演进"]}],keyPoints:["容器组件是React应用架构的核心，负责数据和业务逻辑","职责分离是容器组件模式的核心原则","状态管理应该集中在容器组件中，避免状态分散","异步操作需要完整的状态管理（loading、success、error）","性能优化是容器组件设计的重要考虑因素","错误处理和用户体验是容器组件的重要职责","测试覆盖对于容器组件的质量保证至关重要"]},bestPractices:{dos:["保持单一职责原则 - 每个容器组件只负责一个特定的功能域，避免承担过多职责","使用自定义Hook提取逻辑 - 将可复用的业务逻辑提取到自定义Hook中，提高代码复用性和可测试性","完整的异步状态管理 - 为异步操作提供完整的loading、success、error状态管理","性能优化最佳实践 - 使用useCallback、useMemo和React.memo优化性能，避免不必要的重新渲染","设计清晰的状态结构 - 保持状态结构扁平、最小化，避免冗余和复杂嵌套","实现错误边界和错误处理 - 为容器组件添加错误边界，提供优雅的错误处理机制","编写全面的测试覆盖 - 为容器组件编写单元测试、集成测试和端到端测试","保持清晰的数据流 - 通过props实现单向数据流，避免双向绑定和状态混乱"],donts:["避免'上帝组件' - 不要让单个容器组件承担过多职责，应该拆分为多个专门的容器组件","不要在展示组件中处理业务逻辑 - 展示组件应该只负责UI渲染，不应包含状态管理和业务逻辑","不要忽略异步状态处理 - 异步操作必须处理loading和error状态，不能只关注成功情况","避免在render中创建新对象 - 不要在render中创建新的对象、数组或函数，这会导致不必要的重新渲染","避免复杂的嵌套状态 - 不要设计过于复杂的嵌套状态结构，这会增加维护难度和出错概率","不要忽略错误处理 - 不要只测试和处理正常流程，必须考虑异常情况和边界条件"],patterns:["容器/展示组件模式 - 分离数据逻辑和UI渲染的经典架构模式，适用于需要清晰分离业务逻辑和UI展示的场景","状态机模式 - 管理复杂状态转换的设计模式，适用于具有复杂状态转换逻辑的场景","数据获取模式 - 统一处理异步数据获取的标准模式，适用于需要从API获取数据的所有场景","表单管理模式 - 处理表单状态、验证和提交的完整模式，适用于复杂表单处理场景"]}});export{R as default};
