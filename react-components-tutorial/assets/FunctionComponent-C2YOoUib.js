import{j as e,r as i}from"./index-B_BA6J2H.js";import{C as r}from"./ComponentTemplate-CRmS-rAK.js";const a=()=>e.jsxs("div",{className:"p-4 border border-gray-200 rounded-lg",children:[e.jsx("h3",{className:"text-lg font-semibold mb-2",children:"基础函数组件"}),e.jsx("p",{className:"text-gray-600",children:"这是一个最简单的函数组件，只负责渲染UI。"})]}),l=()=>{const t=({name:o,age:s})=>e.jsxs("div",{className:"p-4 border border-blue-200 rounded-lg bg-blue-50",children:[e.jsx("h3",{className:"text-lg font-semibold mb-2",children:"带Props的函数组件"}),e.jsxs("p",{className:"text-blue-700",children:["你好, ",o,"! ",s&&`你今年${s}岁了。`]})]});return e.jsx(t,{name:"张三",age:25})},p=()=>{const[t,o]=i.useState(0),[s,n]=i.useState("");return i.useEffect(()=>{t>0?n(`你已经点击了 ${t} 次!`):n("点击按钮开始计数")},[t]),e.jsxs("div",{className:"p-4 border border-green-200 rounded-lg bg-green-50",children:[e.jsx("h3",{className:"text-lg font-semibold mb-2",children:"使用Hooks的函数组件"}),e.jsxs("div",{className:"space-y-2",children:[e.jsx("p",{className:"text-green-700",children:s}),e.jsxs("div",{className:"flex space-x-2",children:[e.jsx("button",{onClick:()=>o(t+1),className:"px-3 py-1 bg-green-600 text-white rounded hover:bg-green-700 transition-colors",children:"+1"}),e.jsx("button",{onClick:()=>o(t-1),className:"px-3 py-1 bg-red-600 text-white rounded hover:bg-red-700 transition-colors",children:"-1"}),e.jsx("button",{onClick:()=>o(0),className:"px-3 py-1 bg-gray-600 text-white rounded hover:bg-gray-700 transition-colors",children:"重置"})]})]})]})},c=(t=!1)=>{const[o,s]=i.useState(t);return[o,()=>s(!o)]},u=()=>{const[t,o]=c(!1),[s,n]=c(!1);return e.jsxs("div",{className:`p-4 border rounded-lg transition-colors ${s?"border-gray-600 bg-gray-800 text-white":"border-purple-200 bg-purple-50 text-gray-900"}`,children:[e.jsx("h3",{className:"text-lg font-semibold mb-2",children:"使用自定义Hook的函数组件"}),e.jsxs("div",{className:"space-y-3",children:[e.jsxs("div",{className:"flex space-x-2",children:[e.jsxs("button",{onClick:o,className:"px-3 py-1 bg-purple-600 text-white rounded hover:bg-purple-700 transition-colors",children:[t?"隐藏":"显示"," 内容"]}),e.jsxs("button",{onClick:n,className:"px-3 py-1 bg-gray-600 text-white rounded hover:bg-gray-700 transition-colors",children:["切换 ",s?"浅色":"深色"," 模式"]})]}),t&&e.jsxs("div",{className:`p-3 rounded ${s?"bg-gray-700":"bg-white"} border`,children:[e.jsx("p",{children:"这是一个可切换显示的内容区域！"}),e.jsx("p",{className:"text-sm mt-1 opacity-75",children:"使用自定义Hook管理状态"})]})]})]})},g=()=>{const t={title:"函数组件 (Function Components)",description:"函数组件是现代React开发的核心形式，它们是纯函数，接收props作为参数，返回JSX元素。函数组件支持Hooks，语法简洁，性能优秀，是React推荐的组件编写方式。",overview:e.jsxs("div",{className:"space-y-4",children:[e.jsxs("div",{children:[e.jsx("h3",{className:"text-lg font-semibold mb-2",children:"核心概念"}),e.jsx("p",{className:"text-gray-700",children:"函数组件是现代React开发的核心形式，它们是纯函数，接收props作为参数，返回JSX元素。 函数组件支持Hooks，语法简洁，性能优秀，是React推荐的组件编写方式。"})]}),e.jsxs("div",{children:[e.jsx("h3",{className:"text-lg font-semibold mb-2",children:"主要优势"}),e.jsxs("ul",{className:"list-disc list-inside space-y-1 text-gray-700",children:[e.jsx("li",{children:"简洁语法 - 使用函数声明，代码更简洁易读"}),e.jsx("li",{children:"Hooks支持 - 可以使用useState、useEffect等Hooks管理状态和副作用"}),e.jsx("li",{children:"性能优秀 - 没有类组件的实例开销，渲染性能更好"}),e.jsx("li",{children:"易于测试 - 纯函数特性使单元测试更简单"}),e.jsx("li",{children:"函数式编程 - 支持函数式编程范式，代码更易理解和维护"})]})]}),e.jsxs("div",{children:[e.jsx("h3",{className:"text-lg font-semibold mb-2",children:"适用场景"}),e.jsxs("ul",{className:"list-disc list-inside space-y-1 text-gray-700",children:[e.jsx("li",{children:"现代React应用 - 新项目推荐使用函数组件"}),e.jsx("li",{children:"状态管理 - 使用Hooks进行状态管理和副作用处理"}),e.jsx("li",{children:"组件复用 - 通过自定义Hook实现逻辑复用"}),e.jsx("li",{children:"性能优化 - 结合React.memo进行性能优化"}),e.jsx("li",{children:"测试友好 - 纯函数特性便于单元测试"})]})]}),e.jsxs("div",{children:[e.jsx("h3",{className:"text-lg font-semibold mb-2",children:"注意事项"}),e.jsxs("ul",{className:"list-disc list-inside space-y-1 text-gray-700",children:[e.jsx("li",{children:"必须遵循Hook规则 - 只在顶层调用，不在循环、条件或嵌套函数中调用"}),e.jsx("li",{children:"组件名必须以大写字母开头，使用PascalCase命名法"}),e.jsx("li",{children:"正确处理useEffect的依赖数组，避免无限循环"}),e.jsx("li",{children:"及时清理副作用，如定时器、事件监听器等"}),e.jsx("li",{children:"合理使用性能优化，避免过度优化"})]})]})]}),examples:[{title:"示例1：基础函数组件",description:"最简单的函数组件形式，只负责渲染UI",component:e.jsx(a,{}),observationPoints:["函数组件就是一个返回JSX的JavaScript函数","组件名必须以大写字母开头（PascalCase）","使用React.FC类型注解提供更好的TypeScript支持","无状态组件，只负责UI渲染"],keyPoints:["函数组件是现代React开发的推荐方式","语法简洁，易于理解和维护","没有类组件的实例开销，性能更好"],commonTraps:["组件名首字母必须大写，否则React会将其视为普通HTML元素","忘记导入React（在React 17+中可选）"],solutions:["始终使用PascalCase命名组件","使用TypeScript接口定义Props类型","保持组件职责单一，只负责UI渲染"],importantTips:["函数组件是现代React开发的标准形式，语法简洁且性能优秀","组件名必须以大写字母开头，这是React识别组件的重要标识","无状态组件专注于UI渲染，保持组件的纯净性和可预测性"],codeExample:{title:"基础函数组件",code:`// 函数组件定义 - 使用React.FC类型注解
const BasicComponent: React.FC = () => {  // ← 重点：组件名大写开头
  return (  // ← 重点：返回JSX元素
    <div>
      <h1>Hello World</h1>
      <p>这是一个基础的函数组件</p>
    </div>
  );
};`,language:"typescript",highlights:[2,3],description:"函数组件就是一个返回JSX的JavaScript函数，这是最基础的形式。"}},{title:"示例2：带Props的函数组件",description:"接收props参数的函数组件，支持TypeScript类型定义",component:e.jsx(l,{}),observationPoints:["使用TypeScript接口定义Props类型","支持可选属性（age?）和必需属性（name）","使用解构赋值接收props参数","条件渲染可选属性内容"],keyPoints:["TypeScript提供类型安全和IDE智能提示","接口定义使组件API更清晰","支持默认值和可选属性"],commonTraps:["忘记定义Props接口类型","使用any类型失去类型安全","不处理可选属性的undefined情况"],solutions:["始终为Props定义TypeScript接口","使用可选属性和默认值处理不确定的props","利用条件渲染处理可选内容"],importantTips:["TypeScript接口定义使组件API更加清晰，提供编译时类型检查","可选属性（age?）允许props在传递时可以省略，增加组件的灵活性","条件渲染确保只有在属性存在时才显示相关内容，避免显示undefined"],codeExample:{title:"带Props的函数组件",code:`// Props接口定义
interface GreetingProps {
  name: string;  // ← 重点：必需属性
  age?: number;  // ← 重点：可选属性
}

// 带Props的函数组件
const GreetingComponent: React.FC<GreetingProps> = ({ name, age }) => {  // ← 重点：解构赋值接收props
  return (
    <div>
      <h2>Hello, {name}!</h2>  {/* ← 重点：使用必需属性 */}
      {age && <p>Age: {age}</p>}  {/* ← 重点：条件渲染可选属性 */}
    </div>
  );
};`,language:"typescript",highlights:[3,4,8,11,12],description:"使用TypeScript接口定义Props类型，支持必需和可选属性。"}},{title:"示例3：使用Hooks的函数组件",description:"使用useState和useEffect管理状态和副作用",component:e.jsx(p,{}),observationPoints:["useState Hook管理组件内部状态","useEffect Hook处理副作用和生命周期","状态更新触发组件重新渲染","依赖数组控制useEffect的执行时机"],keyPoints:["Hooks让函数组件具备状态管理能力","useEffect替代类组件的生命周期方法","状态更新是异步的，可能需要函数式更新"],commonTraps:["在条件语句或循环中调用Hook","useEffect缺少依赖数组导致无限循环","忘记清理副作用（定时器、事件监听器）"],solutions:["遵循Hook规则：只在顶层调用","正确设置useEffect的依赖数组","在useEffect中返回清理函数"],importantTips:["useState让函数组件具备状态管理能力，每次状态更新都会触发重新渲染","useEffect的依赖数组决定了副作用的执行时机，空数组表示只在挂载时执行一次","状态更新是异步的，如果需要基于当前状态更新，使用函数式更新模式"],codeExample:{title:"使用Hooks的函数组件",code:`// 使用Hooks的函数组件
const CounterComponent: React.FC = () => {
  const [count, setCount] = useState(0);  // ← 重点：useState管理状态
  const [message, setMessage] = useState('');

  useEffect(() => {  // ← 重点：useEffect处理副作用
    document.title = \`计数: \${count}\`;
    return () => {  // ← 重点：清理函数
      document.title = 'React App';
    };
  }, [count]);  // ← 重点：依赖数组

  const increment = () => {
    setCount(prev => prev + 1);  // ← 重点：函数式更新
  };

  return (
    <div>
      <p>计数: {count}</p>
      <button onClick={increment}>增加</button>
    </div>
  );
};`,language:"typescript",highlights:[3,6,8,11,14],description:"使用useState管理状态，useEffect处理副作用和生命周期。"}},{title:"示例4：自定义Hook示例",description:"使用自定义Hook封装可复用的状态逻辑",component:e.jsx(u,{}),observationPoints:['自定义Hook以"use"开头命名',"封装可复用的状态逻辑","返回状态和操作函数","多个组件可以共享相同的Hook逻辑"],keyPoints:["自定义Hook是逻辑复用的最佳方式","遵循Hook规则和命名约定","可以组合多个内置Hook"],commonTraps:['自定义Hook命名不以"use"开头',"在Hook内部违反Hook规则","过度抽象，创建不必要的自定义Hook"],solutions:['遵循"use"开头的命名约定',"确保Hook内部遵循Hook规则","只在有明确复用需求时创建自定义Hook"],importantTips:["自定义Hook是逻辑复用的最佳方式，可以在多个组件间共享状态逻辑","useToggle Hook封装了布尔值切换逻辑，返回当前值和切换函数","自定义Hook内部可以使用任何内置Hook，遵循相同的Hook规则"],codeExample:{title:"自定义Hook示例",code:`// 自定义Hook定义
const useToggle = (initialValue: boolean = false) => {  // ← 重点：use开头命名
  const [value, setValue] = useState(initialValue);

  const toggle = useCallback(() => {  // ← 重点：使用useCallback优化
    setValue(prev => !prev);
  }, []);

  return { value, toggle };  // ← 重点：返回状态和操作函数
};

// 使用自定义Hook的组件
const ToggleComponent: React.FC = () => {
  const { value, toggle } = useToggle(false);  // ← 重点：使用自定义Hook

  return (
    <div>
      <p>状态: {value ? '开' : '关'}</p>
      <button onClick={toggle}>切换</button>  {/* ← 重点：使用Hook返回的方法 */}
    </div>
  );
};`,language:"typescript",highlights:[2,5,9,14,19],description:"自定义Hook封装可复用的状态逻辑，以use开头命名。"}}],codeExamples:[{title:"基础函数组件",code:`// 函数组件定义 - 使用React.FC类型注解
const BasicComponent: React.FC = () => {  // ← 重点：组件名大写开头
  return (  // ← 重点：返回JSX元素
    <div>
      <h1>Hello World</h1>
      <p>这是一个基础的函数组件</p>
    </div>
  );
};`,language:"typescript",description:"函数组件就是一个返回JSX的JavaScript函数，这是最基础的形式。"},{title:"带Props的函数组件",code:`// Props接口定义
interface UserProps {  // ← 重点：TypeScript接口定义
  name: string;        // ← 重点：必需属性
  age?: number;        // ← 重点：可选属性
  email: string;
}

// 使用Props的函数组件
const UserCard: React.FC<UserProps> = ({ name, age, email }) => {  // ← 重点：解构赋值
  return (
    <div className="user-card">
      <h2>{name}</h2>
      {age && <p>年龄: {age}</p>}  {/* ← 重点：条件渲染 */}
      <p>邮箱: {email}</p>
    </div>
  );
};`,language:"typescript",description:"使用TypeScript接口定义Props类型，支持可选属性和解构赋值。"},{title:"使用Hooks的函数组件",code:`const TodoList: React.FC = () => {
  // 状态管理 - useState Hook
  const [todos, setTodos] = useState<string[]>([]);  // ← 重点：状态定义
  const [inputValue, setInputValue] = useState('');  // ← 重点：输入状态

  // 事件处理函数
  const addTodo = () => {
    if (inputValue.trim()) {
      setTodos([...todos, inputValue]);  // ← 重点：状态更新
      setInputValue('');  // ← 重点：重置输入
    }
  };

  // 副作用处理 - useEffect Hook
  useEffect(() => {  // ← 重点：副作用Hook
    console.log('Todo列表更新:', todos);
  }, [todos]);  // ← 重点：依赖数组

  return (
    <div>
      <input
        type="text"
        value={inputValue}  // ← 重点：受控组件
        onChange={(e) => setInputValue(e.target.value)}  // ← 重点：事件处理
        placeholder="添加待办事项"
      />
      <button onClick={addTodo}>添加</button>
      <ul>
        {todos.map((todo, index) => (  // ← 重点：列表渲染
          <li key={index}>{todo}</li>
        ))}
      </ul>
    </div>
  );
};`,language:"typescript",description:"使用useState管理状态，useEffect处理副作用，展示了Hooks的基本用法。"},{title:"自定义Hook",code:`// 自定义Hook定义
const useCounter = (initialValue: number = 0) => {  // ← 重点：use开头命名
  const [count, setCount] = useState(initialValue);  // ← 重点：内部状态
  
  // 封装操作逻辑
  const increment = () => setCount(count + 1);  // ← 重点：增加函数
  const decrement = () => setCount(count - 1);  // ← 重点：减少函数
  const reset = () => setCount(initialValue);   // ← 重点：重置函数
  
  return { count, increment, decrement, reset };  // ← 重点：返回状态和方法
};

// 使用自定义Hook的组件
const Counter: React.FC = () => {
  const { count, increment, decrement, reset } = useCounter(0);  // ← 重点：使用自定义Hook
  
  return (
    <div>
      <p>计数: {count}</p>  {/* ← 重点：使用Hook返回的状态 */}
      <button onClick={increment}>+1</button>  {/* ← 重点：使用Hook返回的方法 */}
      <button onClick={decrement}>-1</button>
      <button onClick={reset}>重置</button>
    </div>
  );
};`,language:"typescript",description:"自定义Hook可以封装可复用的状态逻辑，以use开头命名。"}],tutorial:{concepts:["函数组件是一个接收props参数并返回JSX的JavaScript函数","使用TypeScript接口定义Props类型，提供类型安全和IDE智能提示","函数组件通过Hooks来管理状态和副作用","组件名必须以大写字母开头，使用PascalCase命名法","可以使用React.memo包装函数组件来避免不必要的重新渲染"],steps:["创建基础函数组件：使用箭头函数或function关键字创建组件，确保组件名以大写字母开头","定义Props接口：使用TypeScript接口定义组件的Props类型，提供类型安全","添加状态管理：使用useState Hook管理组件的内部状态","处理副作用：使用useEffect Hook处理副作用，如API调用、订阅等","性能优化：使用React.memo、useMemo、useCallback等优化组件性能","错误处理：添加错误边界和异常处理逻辑","测试编写：为函数组件编写单元测试和集成测试"],tips:["遵循Hook规则：只在顶层调用，不在循环、条件或嵌套函数中调用","保持状态最小化，相关状态合并，使用useReducer管理复杂状态","正确使用useEffect的依赖数组，及时清理副作用","将复杂逻辑提取为自定义Hook，保持组件简洁和职责单一","使用TypeScript提供更好的类型安全和开发体验","合理使用性能优化工具，避免过度优化"]},interview:{questions:[{question:"函数组件和类组件有什么区别？",answer:`1. 语法：函数组件使用函数语法，类组件使用class语法
2. 状态管理：函数组件使用Hooks，类组件使用this.state
3. 生命周期：函数组件使用useEffect，类组件有专门的生命周期方法
4. 性能：函数组件没有实例开销，性能更好
5. 代码量：函数组件通常代码更简洁`},{question:"为什么React推荐使用函数组件？",answer:`1. 更简洁的语法和更少的样板代码
2. 更好的性能，没有类实例的开销
3. Hooks提供了更灵活的状态管理和逻辑复用
4. 更容易进行代码分割和懒加载
5. 更符合函数式编程思想，易于测试和理解`},{question:"函数组件如何实现类组件的生命周期？",answer:`使用useEffect Hook：
- componentDidMount: useEffect(() => {}, [])
- componentDidUpdate: useEffect(() => {})
- componentWillUnmount: useEffect(() => { return () => {} }, [])
- shouldComponentUpdate: 使用React.memo和自定义比较函数`},{question:"什么是自定义Hook？有什么优势？",answer:`自定义Hook是以"use"开头的函数，用于封装可复用的状态逻辑。
优势：
1. 逻辑复用：多个组件可以共享相同的状态逻辑
2. 关注点分离：将复杂逻辑从组件中抽离
3. 易于测试：可以单独测试Hook的逻辑
4. 组合性：多个Hook可以组合使用`},{question:"函数组件如何进行性能优化？",answer:`1. React.memo：防止不必要的重新渲染
2. useMemo：缓存计算结果
3. useCallback：缓存函数引用
4. 合理使用useEffect的依赖数组
5. 避免在渲染过程中创建新对象
6. 使用懒加载和代码分割`}],keyPoints:["函数组件是现代React开发的推荐方式","Hooks提供了强大的状态管理和副作用处理能力","函数组件具有更好的性能和更简洁的语法","自定义Hook是实现逻辑复用的重要手段","正确使用性能优化技术可以显著提升应用性能","TypeScript为函数组件提供了更好的类型安全"]},bestPractices:{dos:["使用PascalCase命名组件，文件名与组件名保持一致","始终为Props定义TypeScript接口，使用可选属性和默认值","遵循Hook规则：只在顶层调用，不在循环、条件或嵌套函数中调用","保持状态最小化，相关状态合并，使用useReducer管理复杂状态","正确使用useEffect的依赖数组，及时清理副作用","合理使用React.memo、useMemo和useCallback进行性能优化","使用错误边界处理组件错误，在异步操作中正确处理错误状态","将复杂逻辑提取为自定义Hook，保持组件简洁和职责单一"],donts:["不要使用小写或不规范的组件命名","不要忽略Props的类型定义或使用any类型","不要在条件语句或循环中调用Hook","不要为每个属性单独创建状态，避免状态碎片化","不要忘记清理定时器、事件监听器等副作用","不要过度优化，为所有值都使用useMemo/useCallback","不要忽略错误处理，让错误在生产环境中暴露","不要在组件中写大量业务逻辑，影响可读性和可维护性"],patterns:["纯函数组件模式 - 无状态，只接收props并返回JSX","状态管理模式 - 使用useState管理本地状态","副作用处理模式 - 使用useEffect处理生命周期和副作用","自定义Hook模式 - 封装可复用的状态逻辑","性能优化模式 - 使用memo、useMemo、useCallback优化渲染","错误处理模式 - 结合错误边界处理组件错误","组合模式 - 通过props.children实现组件组合","条件渲染模式 - 根据状态或props条件性渲染内容"]}};return e.jsx(r,{...t})};export{g as default};
