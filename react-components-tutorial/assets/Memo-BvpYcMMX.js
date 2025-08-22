import{j as e,r as o,R as j}from"./index-MmCcWZhd.js";import{C as k}from"./ComponentTemplate-DoUPe1QN.js";const x=({name:s})=>{const[t,a]=o.useState(0);return j.useEffect(()=>{a(i=>i+1)},[]),e.jsxs("div",{className:"text-sm text-gray-600 mb-2",children:[s," 渲染次数: ",t]})},M=({name:s,count:t})=>(console.log(`${s} 组件重新渲染`),e.jsxs("div",{className:"p-4 border border-gray-300 rounded",children:[e.jsx(x,{name:s}),e.jsx("h3",{className:"font-bold",children:s}),e.jsxs("p",{children:["计数: ",t]})]})),y=o.memo(({name:s,count:t})=>(console.log(`${s} 组件重新渲染`),e.jsxs("div",{className:"p-4 border border-green-300 rounded",children:[e.jsx(x,{name:s}),e.jsx("h3",{className:"font-bold",children:s}),e.jsxs("p",{children:["计数: ",t]})]}))),f=()=>{const[s,t]=o.useState(0),[a,i]=o.useState(0);return e.jsxs("div",{className:"space-y-4",children:[e.jsxs("div",{className:"flex gap-4 mb-4",children:[e.jsxs("button",{onClick:()=>t(l=>l+1),className:"px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600",children:["无关更新 (",s,")"]}),e.jsxs("button",{onClick:()=>i(l=>l+1),className:"px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600",children:["更新计数 (",a,")"]})]}),e.jsxs("div",{className:"grid grid-cols-2 gap-4",children:[e.jsx(M,{name:"普通组件",count:a}),e.jsx(y,{name:"Memo组件",count:a})]})]})},N=()=>{const[s]=o.useState(Array.from({length:1e3},(r,p)=>({id:p,value:Math.random()}))),[t,a]=o.useState(""),[i,l]=o.useState(0),c=(r,p)=>(console.log("执行昂贵计算..."),r.filter(h=>h.value.toString().includes(p)).reduce((h,b)=>h+b.value,0)),d=o.useMemo(()=>c(s,t),[s,t]);return e.jsxs("div",{className:"space-y-4",children:[e.jsxs("div",{className:"flex gap-4 mb-4",children:[e.jsx("input",{type:"text",value:t,onChange:r=>a(r.target.value),placeholder:"过滤条件...",className:"px-3 py-2 border border-gray-300 rounded"}),e.jsxs("button",{onClick:()=>l(r=>r+1),className:"px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600",children:["无关更新 (",i,")"]})]}),e.jsxs("div",{className:"p-4 bg-gray-100 rounded",children:[e.jsxs("p",{children:["计算结果: ",d.toFixed(4)]}),e.jsx("p",{className:"text-sm text-gray-600",children:"打开控制台查看计算执行情况"})]})]})},S=()=>{const[s,t]=o.useState([{id:1,text:"学习React",completed:!1},{id:2,text:"学习TypeScript",completed:!0},{id:3,text:"学习性能优化",completed:!1}]),[a,i]=o.useState(0),l=o.useCallback(c=>{t(d=>d.map(r=>r.id===c?{...r,completed:!r.completed}:r))},[]);return e.jsxs("div",{className:"space-y-4",children:[e.jsxs("button",{onClick:()=>i(c=>c+1),className:"px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 mb-4",children:["无关更新 (",a,")"]}),e.jsx("div",{className:"space-y-2",children:s.map(c=>e.jsx(T,{todo:c,onToggle:l},c.id))})]})},T=o.memo(({todo:s,onToggle:t})=>(console.log(`TodoItem ${s.id} 重新渲染`),e.jsxs("div",{className:"flex items-center gap-2 p-2 border border-gray-200 rounded",children:[e.jsx("input",{type:"checkbox",checked:s.completed,onChange:()=>t(s.id)}),e.jsx("span",{className:s.completed?"line-through text-gray-500":"",children:s.text}),e.jsx(x,{name:`Todo-${s.id}`})]}))),w=()=>{const[s,t]=o.useState([{id:1,name:"张三",email:"zhangsan@example.com",age:25},{id:2,name:"李四",email:"lisi@example.com",age:30},{id:3,name:"王五",email:"wangwu@example.com",age:28}]),[a,i]=o.useState(""),[l,c]=o.useState("name"),[d,r]=o.useState(new Set),p=o.useMemo(()=>(console.log("执行用户过滤和排序..."),s.filter(n=>n.name.toLowerCase().includes(a.toLowerCase())||n.email.toLowerCase().includes(a.toLowerCase())).sort((n,m)=>l==="name"?n.name.localeCompare(m.name):l==="email"?n.email.localeCompare(m.email):n.age-m.age)),[s,a,l]),h=o.useCallback((n,m)=>{r(u=>{const g=new Set(u);return m?g.add(n):g.delete(n),g})},[]),b=o.useCallback(n=>{console.log("编辑用户:",n.name)},[]),C=o.useCallback(n=>{t(m=>m.filter(u=>u.id!==n)),r(m=>{const u=new Set(m);return u.delete(n),u})},[]),v=o.useMemo(()=>d.size,[d]);return e.jsxs("div",{className:"space-y-4",children:[e.jsxs("div",{className:"flex gap-4 mb-4",children:[e.jsx("input",{type:"text",value:a,onChange:n=>i(n.target.value),placeholder:"搜索用户...",className:"px-3 py-2 border border-gray-300 rounded"}),e.jsxs("select",{value:l,onChange:n=>c(n.target.value),className:"px-3 py-2 border border-gray-300 rounded",children:[e.jsx("option",{value:"name",children:"按姓名排序"}),e.jsx("option",{value:"email",children:"按邮箱排序"}),e.jsx("option",{value:"age",children:"按年龄排序"})]})]}),e.jsxs("div",{className:"text-sm text-gray-600 mb-2",children:["已选择 ",v," 个用户"]}),e.jsx("div",{className:"space-y-2",children:p.map(n=>e.jsx(R,{user:n,selected:d.has(n.id),onSelect:h,onEdit:b,onDelete:C},n.id))})]})},R=o.memo(({user:s,selected:t,onSelect:a,onEdit:i,onDelete:l})=>(console.log(`UserCard ${s.id} 重新渲染`),e.jsxs("div",{className:`p-4 border rounded ${t?"border-blue-500 bg-blue-50":"border-gray-200"}`,children:[e.jsxs("div",{className:"flex items-center justify-between",children:[e.jsxs("div",{className:"flex items-center gap-3",children:[e.jsx("input",{type:"checkbox",checked:t,onChange:c=>a(s.id,c.target.checked)}),e.jsxs("div",{children:[e.jsx("h3",{className:"font-semibold",children:s.name}),e.jsx("p",{className:"text-sm text-gray-600",children:s.email}),e.jsxs("p",{className:"text-sm text-gray-600",children:["年龄: ",s.age]})]})]}),e.jsxs("div",{className:"flex gap-2",children:[e.jsx("button",{onClick:()=>i(s),className:"px-3 py-1 text-sm bg-yellow-500 text-white rounded hover:bg-yellow-600",children:"编辑"}),e.jsx("button",{onClick:()=>l(s.id),className:"px-3 py-1 text-sm bg-red-500 text-white rounded hover:bg-red-600",children:"删除"})]})]}),e.jsx(x,{name:`UserCard-${s.id}`})]}))),P={title:"React.memo 性能优化",description:"学习如何使用 React.memo、useMemo 和 useCallback 进行 React 应用性能优化",overview:e.jsxs("div",{className:"space-y-4",children:[e.jsx("p",{children:"React.memo 是一个高阶组件，用于优化函数组件的性能。它通过对组件的 props 进行浅比较， 只有当 props 发生变化时才重新渲染组件，从而避免不必要的渲染。"}),e.jsxs("div",{className:"bg-blue-50 p-4 rounded-lg",children:[e.jsx("h4",{className:"font-semibold text-blue-800 mb-2",children:"核心概念"}),e.jsxs("ul",{className:"list-disc list-inside space-y-1 text-blue-700",children:[e.jsxs("li",{children:[e.jsx("strong",{children:"React.memo"}),": 通过浅比较 props 来决定是否重新渲染组件"]}),e.jsxs("li",{children:[e.jsx("strong",{children:"useMemo"}),": 缓存计算结果，避免昂贵计算的重复执行"]}),e.jsxs("li",{children:[e.jsx("strong",{children:"useCallback"}),": 缓存函数引用，避免因函数重新创建导致的子组件重新渲染"]})]})]}),e.jsxs("div",{className:"bg-green-50 p-4 rounded-lg",children:[e.jsx("h4",{className:"font-semibold text-green-800 mb-2",children:"主要优势"}),e.jsxs("ul",{className:"list-disc list-inside space-y-1 text-green-700",children:[e.jsx("li",{children:"减少不必要的组件重新渲染"}),e.jsx("li",{children:"提升应用整体性能"}),e.jsx("li",{children:"优化用户体验，减少界面卡顿"}),e.jsx("li",{children:"降低 CPU 使用率"})]})]}),e.jsxs("div",{className:"bg-yellow-50 p-4 rounded-lg",children:[e.jsx("h4",{className:"font-semibold text-yellow-800 mb-2",children:"适用场景"}),e.jsxs("ul",{className:"list-disc list-inside space-y-1 text-yellow-700",children:[e.jsx("li",{children:"纯展示组件，props 变化频率较低"}),e.jsx("li",{children:"渲染开销较大的组件"}),e.jsx("li",{children:"父组件频繁更新但子组件 props 相对稳定"}),e.jsx("li",{children:"列表渲染中的单个项目组件"})]})]}),e.jsxs("div",{className:"bg-red-50 p-4 rounded-lg",children:[e.jsx("h4",{className:"font-semibold text-red-800 mb-2",children:"注意事项"}),e.jsxs("ul",{className:"list-disc list-inside space-y-1 text-red-700",children:[e.jsx("li",{children:"不要过度使用，可能带来额外的比较开销"}),e.jsx("li",{children:"注意对象和数组 props 的引用比较问题"}),e.jsx("li",{children:"需要配合 useMemo 和 useCallback 使用才能发挥最大效果"}),e.jsx("li",{children:"对于 props 经常变化的组件，memo 可能不会带来性能提升"})]})]})]}),examples:[{title:"React.memo 基础用法",component:e.jsx(f,{}),description:"演示 React.memo 如何避免不必要的组件重新渲染",observationPoints:["点击'无关更新'按钮时，只有普通组件会重新渲染（渲染次数增加），memo组件会跳过渲染（渲染次数不变）","点击'更新计数'按钮时，两个组件都会重新渲染，因为props发生了变化","这展示了React.memo的性能优化效果：当props没有变化时，memo组件会跳过重新渲染"],keyPoints:["React.memo会对props进行浅比较","只有props发生变化时才会重新渲染","可以显著减少不必要的渲染次数"],commonTraps:["在JSX中直接创建对象或数组","在render方法中创建新的函数","不正确使用内联样式对象"],solutions:["使用useMemo缓存复杂对象","使用useCallback缓存函数","将对象定义在组件外部"],importantTips:["左侧组件每次都会重新渲染，因为父组件状态变化","右侧组件使用了memo，只有在props变化时才会重新渲染","打开控制台可以看到渲染日志"],codeExample:{title:"React.memo基础用法",code:`// 未优化的组件
const UnoptimizedComponent = ({ name, count }) => {
  console.log(\`\${name} 组件重新渲染\`); // ← 重点：观察渲染频率
  return (
    <div className="p-4 border border-gray-300 rounded">
      <h3>{name}</h3>
      <p>计数: {count}</p>
    </div>
  );
};

// 使用React.memo优化的组件
const OptimizedComponent = memo(({ name, count }) => { // ← 重点：使用memo包装组件
  console.log(\`\${name} 组件重新渲染\`); // ← 重点：只有props变化时才重新渲染
  return (
    <div className="p-4 border border-green-300 rounded">
      <h3>{name}</h3>
      <p>计数: {count}</p>
    </div>
  );
});

// 自定义比较函数
const CustomMemoComponent = memo(({ name, data }) => {
  return <div>{name}: {data.value}</div>;
}, (prevProps, nextProps) => {
  // 自定义比较逻辑 ← 重点：自定义比较函数
  return prevProps.name === nextProps.name &&
         prevProps.data.value === nextProps.data.value; // ← 重点：深度比较对象属性
});`,language:"javascript",highlights:[1,8,9,19,20,21]}},{title:"useMemo 优化昂贵计算",component:e.jsx(N,{}),description:"演示如何使用 useMemo 缓存计算结果，避免重复执行昂贵的计算",observationPoints:["在过滤条件输入框中输入内容时，会触发计算重新执行","点击'无关更新'按钮时，计算不会重新执行，因为依赖项没有变化","打开控制台可以看到'执行昂贵计算...'的日志，观察计算执行时机"],keyPoints:["useMemo缓存计算结果，只有依赖项变化时才重新计算","适用于计算开销较大的场景","依赖数组决定何时重新计算"],commonTraps:["依赖数组设置不正确","对简单计算使用useMemo，可能带来额外开销","在useMemo中执行副作用操作"],solutions:["仔细检查依赖数组，确保包含所有相关变量","只对真正昂贵的计算使用useMemo","将副作用操作移到useEffect中"],importantTips:["useMemo的第一个参数是计算函数，第二个参数是依赖数组","当依赖项没有变化时，直接返回缓存的结果","适合用于过滤、排序、格式化等计算密集型操作"],codeExample:{title:"useMemo优化昂贵计算",code:`const ExpensiveCalculation = ({ items, filter }) => {
  // 未优化：每次渲染都会执行过滤和排序
  const processedItems = items
    .filter(item => item.name.includes(filter))
    .sort((a, b) => a.name.localeCompare(b.name));

  // 优化：使用useMemo缓存结果
  const memoizedItems = useMemo(() => { // ← 重点：useMemo缓存计算结果
    console.log('执行过滤和排序...');
    return items
      .filter(item => item.name.includes(filter))
      .sort((a, b) => a.name.localeCompare(b.name));
  }, [items, filter]); // ← 重点：依赖项变化时才执行计算

  const [count, setCount] = useState(0);

  return (
    <div>
      <button onClick={() => setCount(c => c + 1)}>
        无关更新 ({count}) {/* ← 重点：count变化不会触发昂贵计算 */}
      </button>
      <ul>
        {memoizedItems.map(item => (
          <li key={item.id}>{item.name}</li>
        ))}
      </ul>
    </div>
  );
};`,language:"javascript",highlights:[8,13,20]}},{title:"useCallback 优化函数引用",component:e.jsx(S,{}),description:"演示如何使用 useCallback 缓存函数引用，避免因函数重新创建导致的子组件重新渲染",observationPoints:["点击'无关更新'按钮时，TodoItem组件不会重新渲染","点击复选框切换完成状态时，只有对应的TodoItem会重新渲染","打开控制台查看组件渲染日志，观察优化效果"],keyPoints:["useCallback缓存函数引用，避免每次渲染都创建新函数","配合memo使用可以避免子组件不必要的重新渲染","依赖数组决定何时重新创建函数"],commonTraps:["对所有函数都使用useCallback","依赖数组设置错误","在useCallback中使用过时的闭包变量"],solutions:["只对传递给memo组件的函数使用useCallback","正确设置依赖数组","使用函数式更新避免闭包问题"],importantTips:["useCallback返回的是函数本身，useMemo返回的是函数执行结果","useCallback(fn, deps) 等价于 useMemo(() => fn, deps)","主要用于优化传递给子组件的回调函数"],codeExample:{title:"useCallback优化函数引用",code:`const TodoList = () => {
  const [todos, setTodos] = useState([]);

  // 未优化：每次渲染都创建新的函数引用
  const handleToggle = (id) => { // ← 重点：每次渲染都创建新函数引用
    setTodos(prev => prev.map(todo =>
      todo.id === id ? { ...todo, completed: !todo.completed } : todo
    ));
  };

  // 优化：使用useCallback缓存函数引用
  const memoizedHandleToggle = useCallback((id) => { // ← 重点：使用useCallback缓存函数引用
    setTodos(prev => prev.map(todo =>
      todo.id === id ? { ...todo, completed: !todo.completed } : todo
    ));
  }, []); // ← 重点：空依赖数组，函数引用永远不变

  // 依赖name的回调函数
  const handleEdit = useCallback((id, name) => {
    // 编辑逻辑
  }, [name]); // ← 重点：依赖name，只有name变化时函数引用才改变

  return (
    <div>
      {todos.map(todo => (
        <TodoItem
          key={todo.id}
          todo={todo}
          onToggle={memoizedHandleToggle} // ← 重点：使用缓存的函数引用
        />
      ))}
    </div>
  );
};

// memo优化的子组件
const TodoItem = memo(({ todo, onToggle }) => { // ← 重点：memo组件对函数引用敏感
  console.log(\`TodoItem \${todo.id} 重新渲染\`);
  return (
    <div>
      <input
        type="checkbox"
        checked={todo.completed}
        onChange={() => onToggle(todo.id)}
      />
      {todo.text}
    </div>
  );
});`,language:"javascript",highlights:[5,12,16,21,29,36]}},{title:"综合优化策略",component:e.jsx(w,{}),description:"在实际项目中，通常需要结合多种优化技术来达到最佳性能",observationPoints:["在搜索框中输入内容时，会触发用户列表的过滤和排序","改变排序方式时，会重新执行排序逻辑","选择/取消选择用户时，只有对应的UserCard会重新渲染","打开控制台查看优化效果和渲染日志"],keyPoints:["useMemo缓存搜索和排序结果","useCallback缓存事件处理函数","memo优化UserCard组件","合理的依赖数组设置"],commonTraps:["传递不稳定的对象引用给子组件","在渲染过程中创建新的函数","忘记对列表项组件使用memo"],solutions:["使用useMemo缓存传递给子组件的对象","使用useCallback缓存事件处理函数","对列表项组件使用memo优化"],importantTips:["这是一个完整的性能优化示例，展示了多种技术的组合使用","注意观察控制台日志，了解各个组件的渲染情况","在实际项目中，应该根据具体情况选择合适的优化策略"],codeExample:{title:"综合优化策略",code:`const UserManagement = () => {
  const [users, setUsers] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedUsers, setSelectedUsers] = useState(new Set());

  // 1. 使用useMemo优化搜索和排序
  const filteredUsers = useMemo(() => { // ← 重点：useMemo缓存昂贵计算
    console.log('执行用户过滤和排序...');
    return users
      .filter(user => user.name.includes(searchTerm))
      .sort((a, b) => a.name.localeCompare(b.name));
  }, [users, searchTerm]); // ← 重点：依赖数组

  // 2. 使用useCallback缓存事件处理函数
  const handleUserSelect = useCallback((userId, selected) => { // ← 重点：useCallback缓存事件处理函数
    setSelectedUsers(prev => {
      const newSet = new Set(prev);
      if (selected) newSet.add(userId);
      else newSet.delete(userId);
      return newSet;
    });
  }, []); // ← 重点：空依赖数组

  // 3. 缓存传递给子组件的对象
  const userProps = useMemo(() => ({ // ← 重点：使用缓存的函数引用
    onSelect: handleUserSelect,
    onEdit: (user) => console.log('编辑', user),
    onDelete: (id) => setUsers(prev => prev.filter(u => u.id !== id))
  }), [handleUserSelect]);

  return (
    <div>
      <input
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        placeholder="搜索用户..."
      />
      {filteredUsers.map(user => (
        <UserCard // ← 重点：传递稳定对象
          key={user.id}
          user={user}
          selected={selectedUsers.has(user.id)}
          {...userProps}
        />
      ))}
    </div>
  );
};

// 4. memo优化的用户卡片组件
const UserCard = memo(({ user, selected, onSelect, onEdit, onDelete }) => { // ← 重点：memo避免不必要重新渲染
  console.log(\`UserCard \${user.id} 重新渲染\`);
  return (
    <div className={\`user-card \${selected ? 'selected' : ''}\`}>
      <input
        type="checkbox"
        checked={selected}
        onChange={(e) => onSelect(user.id, e.target.checked)}
      />
      <span>{user.name}</span>
      <button onClick={() => onEdit(user)}>编辑</button>
      <button onClick={() => onDelete(user.id)}>删除</button>
    </div>
  );
});`,language:"javascript",highlights:[7,12,15,22,25,39,48]}}],tutorial:{concepts:["React.memo 是一个高阶组件，用于优化函数组件的渲染性能","useMemo 用于缓存计算结果，避免在每次渲染时重复执行昂贵的计算","useCallback 用于缓存函数引用，避免因函数重新创建导致的子组件重新渲染","浅比较是 React.memo 的默认比较方式，只比较 props 的第一层属性","依赖数组决定了 useMemo 和 useCallback 何时重新计算或重新创建"],steps:["1. 理解渲染机制：了解 React 组件何时会重新渲染，识别性能瓶颈","2. 使用 React.memo：对纯展示组件或渲染开销大的组件使用 memo 包装","3. 应用 useMemo：对计算密集型操作使用 useMemo 缓存结果","4. 应用 useCallback：对传递给 memo 组件的回调函数使用 useCallback","5. 综合优化：结合多种技术，系统性地优化组件树的渲染性能"],tips:["使用 React DevTools Profiler 分析组件渲染性能","不要过度优化，先测量性能瓶颈再进行针对性优化","注意对象和数组 props 的引用比较问题","正确设置依赖数组，避免遗漏或添加不必要的依赖","对于 props 经常变化的组件，memo 可能不会带来性能提升","保持自定义比较函数简单高效，避免复杂的深度比较"]},interview:{questions:[{question:"React.memo的工作原理是什么？什么时候应该使用它？",answer:`React.memo是一个高阶组件，它通过对组件的props进行浅比较来决定是否重新渲染组件。工作原理：

1. **浅比较机制**：React.memo默认使用Object.is()进行浅比较，比较props的第一层属性
2. **渲染决策**：如果props没有变化，返回上次渲染的结果；如果有变化，重新渲染组件
3. **自定义比较**：可以提供第二个参数作为自定义比较函数

**使用场景**：
- 纯展示组件，props变化频率低
- 渲染开销较大的组件
- 父组件频繁更新但子组件props相对稳定

**注意事项**：
- 对于props经常变化的组件，memo可能带来额外开销
- 对象和数组props需要注意引用比较问题`},{question:"useMemo和useCallback的区别是什么？如何选择使用？",answer:`useMemo和useCallback都是用于性能优化的Hook，但用途不同：

**useMemo**：
- 缓存计算结果（值）
- 用于避免昂贵的计算重复执行
- 返回计算后的值

**useCallback**：
- 缓存函数引用
- 用于避免函数重新创建导致的子组件重新渲染
- 返回函数本身

**选择原则**：
- 需要缓存计算结果时使用useMemo
- 需要稳定函数引用时使用useCallback
- useCallback(fn, deps) 等价于 useMemo(() => fn, deps)

**实际应用**：
\`\`\`javascript
// useMemo - 缓存计算结果
const expensiveValue = useMemo(() => {
  return heavyCalculation(data);
}, [data]);

// useCallback - 缓存函数引用
const handleClick = useCallback(() => {
  // 处理逻辑
}, [dependency]);
\`\`\``},{question:"如何避免React性能优化中的常见陷阱？",answer:`React性能优化中的常见陷阱及避免方法：

**1. 过度优化**
- 陷阱：对所有组件都使用memo，对所有函数都使用useCallback
- 避免：只在确实需要时使用，通过性能分析工具验证效果

**2. 依赖数组错误**
- 陷阱：遗漏依赖项或添加不必要的依赖项
- 避免：使用ESLint规则，仔细检查依赖关系

**3. 引用类型props问题**
- 陷阱：传递对象或数组字面量作为props
- 避免：使用useMemo缓存对象，或将对象提取到组件外部

**4. memo比较函数错误**
- 陷阱：自定义比较函数逻辑错误或过于复杂
- 避免：保持比较函数简单，返回true表示props相等

**5. 忽略子组件优化**
- 陷阱：只优化父组件，忽略子组件的优化
- 避免：系统性地分析组件树，从叶子节点开始优化

**最佳实践**：
- 先测量，后优化
- 使用React DevTools Profiler
- 关注用户体验指标
- 避免premature optimization`},{question:"在什么情况下React.memo可能不起作用？如何解决？",answer:`React.memo不起作用的常见情况及解决方案：

**1. 对象/数组props引用变化**
\`\`\`javascript
// 问题：每次渲染都创建新对象
const Parent = () => {
  return <Child user={{ name: 'John', age: 25 }} />; // 新对象引用
};

// 解决：使用useMemo缓存对象
const Parent = () => {
  const user = useMemo(() => ({ name: 'John', age: 25 }), []);
  return <Child user={user} />;
};
\`\`\`

**2. 函数props引用变化**
\`\`\`javascript
// 问题：每次渲染都创建新函数
const Parent = () => {
  return <Child onClick={() => console.log('click')} />; // 新函数引用
};

// 解决：使用useCallback缓存函数
const Parent = () => {
  const handleClick = useCallback(() => console.log('click'), []);
  return <Child onClick={handleClick} />;
};
\`\`\`

**3. children prop变化**
\`\`\`javascript
// 问题：children每次都是新的React元素
const Parent = () => {
  return (
    <MemoChild>
      <div>Content</div> {/* 新的React元素 */}
    </MemoChild>
  );
};

// 解决：将children提取为稳定引用
const stableContent = <div>Content</div>;
const Parent = () => {
  return <MemoChild>{stableContent}</MemoChild>;
};
\`\`\`

**4. 深层对象属性变化**
\`\`\`javascript
// 问题：浅比较无法检测深层变化
const user = { profile: { name: 'John' } };
user.profile.name = 'Jane'; // 引用相同但内容变化

// 解决：使用自定义比较函数
const DeepMemoChild = memo(Child, (prevProps, nextProps) => {
  return isEqual(prevProps.user, nextProps.user); // 深度比较
});
\`\`\``}],keyPoints:["React.memo通过浅比较props来决定是否重新渲染组件","useMemo用于缓存计算结果，useCallback用于缓存函数引用","对象和数组props的引用变化会导致memo失效","正确的依赖数组设置对优化效果至关重要","过度优化可能带来负面效果，需要基于实际测量进行优化","组合使用多种优化技术可以达到最佳性能效果"]},bestPractices:{dos:["使用React DevTools Profiler分析性能瓶颈后再进行优化","对纯展示组件和渲染开销大的组件使用React.memo","对昂贵的计算使用useMemo缓存结果","对传递给memo组件的回调函数使用useCallback","正确设置依赖数组，包含所有相关变量","使用useMemo缓存传递给子组件的对象和数组","保持自定义比较函数简单高效","定期检查优化效果，确保性能确实得到提升"],donts:["不要对所有组件都使用memo，避免过度优化","不要对props频繁变化的组件使用memo","不要对简单计算使用useMemo，可能带来额外开销","不要对所有函数都使用useCallback","不要在useMemo中执行副作用操作","不要忽略依赖数组，避免闭包陷阱","不要在render中创建新的对象和函数引用","不要进行过早优化，先确保功能正确"],patterns:["组合优化模式：结合memo、useMemo、useCallback进行综合优化","依赖提升模式：将稳定的值提升到组件外部或使用useMemo缓存","回调稳定化模式：使用useCallback稳定传递给子组件的函数引用","计算缓存模式：使用useMemo缓存复杂的数据处理结果","条件优化模式：根据组件特性选择合适的优化策略","渐进优化模式：从叶子节点开始，逐步向上优化组件树","测量驱动模式：基于实际性能测量结果进行优化决策"]}},z=()=>e.jsx(k,{...P});export{z as default};
