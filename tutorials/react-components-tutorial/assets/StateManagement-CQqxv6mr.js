import{j as e,r}from"./index-B_BA6J2H.js";import{C as v}from"./ComponentTemplate-CRmS-rAK.js";const M=()=>{const t={title:"状态管理 (State Management)",description:"React提供了多种状态管理方式，包括useState、useReducer、Context等，每种方式都有其适用的场景。理解不同状态管理方式的特点和使用场景，对于构建高效、可维护的React应用至关重要。",overview:e.jsxs("div",{className:"space-y-4",children:[e.jsxs("div",{children:[e.jsx("h3",{className:"text-lg font-semibold mb-2",children:"核心概念"}),e.jsx("p",{className:"text-gray-700",children:"React提供了多种状态管理方式，包括useState、useReducer、Context等，每种方式都有其适用的场景。 理解不同状态管理方式的特点和使用场景，对于构建高效、可维护的React应用至关重要。"})]}),e.jsxs("div",{children:[e.jsx("h3",{className:"text-lg font-semibold mb-2",children:"主要优势"}),e.jsxs("ul",{className:"list-disc list-inside space-y-1 text-gray-700",children:[e.jsx("li",{children:"useState - 适用于简单的本地状态管理，API简洁易用"}),e.jsx("li",{children:"useReducer - 适用于复杂状态逻辑，提供可预测的状态更新"}),e.jsx("li",{children:"Context - 解决props drilling问题，实现跨组件状态共享"}),e.jsx("li",{children:"组合使用 - 结合多种方式，构建强大的状态管理解决方案"}),e.jsx("li",{children:"性能优化 - 通过合理的状态设计避免不必要的重渲染"})]})]}),e.jsxs("div",{children:[e.jsx("h3",{className:"text-lg font-semibold mb-2",children:"适用场景"}),e.jsxs("ul",{className:"list-disc list-inside space-y-1 text-gray-700",children:[e.jsx("li",{children:"表单状态管理 - 处理用户输入和表单验证"}),e.jsx("li",{children:"主题切换 - 全局主题状态的管理和切换"}),e.jsx("li",{children:"购物车功能 - 商品添加、删除和数量管理"}),e.jsx("li",{children:"用户认证 - 登录状态和用户信息管理"}),e.jsx("li",{children:"数据缓存 - 接口数据的本地缓存和状态管理"})]})]})]}),examples:[{title:"useState - 本地状态管理",description:"演示useState的基本用法，包括计数器、表单输入和切换状态",component:e.jsx(C,{}),observationPoints:["useState返回状态值和更新函数的数组","函数式更新可以基于前一个状态值进行更新","每个状态变量都是独立管理的","状态更新会触发组件重新渲染"],keyPoints:["useState是最基础的状态管理Hook","适用于简单的本地状态管理","支持函数式更新模式","状态更新是异步的"],commonTraps:["直接修改状态对象而不是创建新对象","在循环或条件语句中调用useState","忘记使用函数式更新导致闭包陷阱"],solutions:["始终使用展开运算符或Object.assign创建新对象","确保Hook调用顺序一致","使用函数式更新避免闭包问题"],importantTips:["useState的初始值只在首次渲染时使用","状态更新可能会被React批处理","复杂状态逻辑考虑使用useReducer"],codeExample:{code:`const UseStateExample: React.FC = () => {
  const [count, setCount] = useState(0);                    // ← 重点：声明状态变量
  const [user, setUser] = useState({ name: '', age: 0 });  // ← 重点：对象类型状态
  const [todos, setTodos] = useState<string[]>([]);        // ← 重点：数组类型状态

  // 函数式更新
  const increment = () => setCount(prev => prev + 1);      // ← 重点：函数式更新
  
  // 对象状态更新
  const updateUser = (name: string) => {                   // ← 重点：对象状态更新
    setUser(prev => ({ ...prev, name }));
  };
  
  // 数组状态更新
  const addTodo = (todo: string) => {                      // ← 重点：数组状态更新
    setTodos(prev => [...prev, todo]);
  };

  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={increment}>+1</button>
    </div>
  );
};`,highlights:[2,3,4,7,10,14]}},{title:"useReducer - 复杂状态管理",description:"使用useReducer管理复杂的状态逻辑，支持多种操作和历史记录",component:e.jsx(N,{}),observationPoints:["useReducer接收reducer函数和初始状态","dispatch函数用于触发状态更新","reducer函数集中处理所有状态更新逻辑","支持复杂的状态更新和历史记录功能"],keyPoints:["useReducer适用于复杂状态逻辑","reducer函数必须是纯函数","action对象描述状态更新的类型和数据","提供可预测的状态更新机制"],commonTraps:["reducer函数中直接修改state","action类型定义不清晰或重复","忘记处理default case"],solutions:["始终返回新的状态对象","使用TypeScript定义清晰的action类型","在reducer中添加default case处理"],importantTips:["useReducer在状态逻辑复杂时比useState更合适","reducer函数可以在组件外部定义便于测试","可以配合Context实现全局状态管理"],codeExample:{code:`interface CounterState {                                      // ← 重点：定义状态接口
  count: number;
  step: number;
  history: number[];
}

type CounterAction =                                           // ← 重点：定义Action类型
  | { type: 'increment' }
  | { type: 'decrement' }
  | { type: 'reset' }
  | { type: 'setStep'; payload: number };

const counterReducer = (state: CounterState, action: CounterAction): CounterState => {  // ← 重点：reducer纯函数
  switch (action.type) {                                       // ← 重点：switch处理不同action
    case 'increment':
      return {                                                  // ← 重点：返回新状态对象
        ...state,
        count: state.count + state.step,
        history: [...state.history, state.count]
      };
    case 'decrement':
      return {
        ...state,
        count: state.count - state.step,
        history: [...state.history, state.count]
      };
    case 'reset':
      return { ...state, count: 0, history: [] };
    case 'setStep':
      return { ...state, step: action.payload };
    default:
      return state;
  }
};

const UseReducerExample: React.FC = () => {
  const [state, dispatch] = useReducer(counterReducer, {      // ← 重点：useReducer初始化
    count: 0,
    step: 1,
    history: []
  });

  return (
    <div>
      <p>Count: {state.count}</p>
      <button onClick={() => dispatch({ type: 'increment' })}>  {/* ← 重点：dispatch派发action */}
        +{state.step}
      </button>
    </div>
  );
};`,highlights:[1,8,14,15,17,38,47]}},{title:"Context - 跨组件状态共享",description:"通过Context API实现主题切换，避免props drilling问题",component:e.jsx(T,{children:e.jsx(f,{})}),observationPoints:["createContext创建上下文对象","Provider组件提供状态给子组件树","useContext Hook消费上下文状态","避免了props drilling问题"],keyPoints:["Context解决跨组件状态共享问题","Provider模式提供状态给子组件","useContext Hook简化状态消费","适用于全局状态如主题、用户信息等"],commonTraps:["Context值变化导致所有消费者重新渲染","创建过多的Context导致Provider嵌套","忘记提供默认值或错误处理"],solutions:["拆分Context，将频繁变化和稳定状态分离","使用useMemo优化Provider的value","提供默认值和自定义Hook进行错误处理"],importantTips:["Context不是状态管理库的替代品","避免在Context中放置频繁变化的状态","可以结合useReducer实现复杂的全局状态管理"],codeExample:{code:`interface ThemeContextType { // ← 重点：定义Context类型
  theme: 'light' | 'dark';
  toggleTheme: () => void;
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined); // ← 重点：创建Context

const ThemeProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [theme, setTheme] = useState<'light' | 'dark'>('light'); // ← 重点：Provider内部状态

  const toggleTheme = () => {
    setTheme(prev => prev === 'light' ? 'dark' : 'light');
  };

  const value = useMemo(() => ({ theme, toggleTheme }), [theme]); // ← 重点：使用useMemo优化

  return (
    <ThemeContext.Provider value={value}> // ← 重点：Provider提供状态
      <div className={theme === 'dark' ? 'dark-theme' : 'light-theme'}>
        {children}
      </div>
    </ThemeContext.Provider>
  );
};

const useTheme = () => { // ← 重点：自定义Hook
  const context = useContext(ThemeContext); // ← 重点：使用useContext消费
  if (context === undefined) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  return context;
};

const ThemedComponent: React.FC = () => {
  const { theme, toggleTheme } = useTheme(); // ← 重点：通过Hook获取状态
  
  return (
    <div>
      <p>Current theme: {theme}</p>
      <button onClick={toggleTheme}>Toggle Theme</button>
    </div>
  );
};`,highlights:[1,7,9,16,19,27,35]}},{title:"组合状态管理",description:"结合Context和useReducer，构建完整的状态管理解决方案",component:e.jsx(k,{children:e.jsx(A,{})}),observationPoints:["Context + useReducer的强大组合","Provider管理全局状态和dispatch函数","支持异步操作和复杂状态逻辑","多个组件可以共享和更新状态"],keyPoints:["组合使用Context和useReducer实现全局状态管理","Provider封装状态逻辑和异步操作","自定义Hook简化状态访问","适用于中小型应用的状态管理需求"],commonTraps:["Provider层级过深导致性能问题","状态更新逻辑过于复杂","缺乏适当的错误边界处理"],solutions:["合理拆分Context和状态逻辑","使用中间件模式处理异步操作","添加错误边界和状态重置功能"],importantTips:["这种模式适合替代Redux在简单场景下的使用","可以添加中间件支持如日志、持久化等","考虑使用Immer库简化不可变更新"],codeExample:{code:`interface AppState { // ← 重点：定义全局状态结构
  count: number;
  user: { name: string; id: number } | null;
  loading: boolean;
}

type AppAction = // ← 重点：定义所有可能的Action类型
  | { type: 'SET_COUNT'; payload: number }
  | { type: 'SET_USER'; payload: { name: string; id: number } }
  | { type: 'SET_LOADING'; payload: boolean }
  | { type: 'RESET' };

const appReducer = (state: AppState, action: AppAction): AppState => { // ← 重点：Reducer处理状态更新
  switch (action.type) {
    case 'SET_COUNT':
      return { ...state, count: action.payload };
    case 'SET_USER':
      return { ...state, user: action.payload };
    case 'SET_LOADING':
      return { ...state, loading: action.payload };
    case 'RESET':
      return { count: 0, user: null, loading: false };
    default:
      return state;
  }
};

interface AppContextType { // ← 重点：Context类型包含状态和方法
  state: AppState;
  dispatch: React.Dispatch<AppAction>;
  incrementAsync: () => Promise<void>;
}

const AppContext = createContext<AppContextType | undefined>(undefined);

const AppProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [state, dispatch] = useReducer(appReducer, { // ← 重点：使用useReducer管理状态
    count: 0,
    user: null,
    loading: false
  });

  const incrementAsync = async () => { // ← 重点：异步操作封装
    dispatch({ type: 'SET_LOADING', payload: true });
    await new Promise(resolve => setTimeout(resolve, 1000));
    dispatch({ type: 'SET_COUNT', payload: state.count + 1 });
    dispatch({ type: 'SET_LOADING', payload: false });
  };

  const value = useMemo(() => ({ // ← 重点：优化Context值
    state,
    dispatch,
    incrementAsync
  }), [state]);

  return (
    <AppContext.Provider value={value}>
      {children}
    </AppContext.Provider>
  );
};`,highlights:[1,8,14,29,37,44,50]}}],codeImplementation:{code:`// 1. useState - 本地状态管理
const UseStateExample: React.FC = () => {
  const [count, setCount] = useState(0);
  const [name, setName] = useState('');
  const [isVisible, setIsVisible] = useState(true);

  return (
    <div className="space-y-4">
      <div className="bg-gray-50 p-4 rounded">
        <h4 className="font-medium mb-2">计数器示例</h4>
        <div className="flex items-center space-x-4">
          <span className="text-2xl font-bold">{count}</span>
          <button onClick={() => setCount(count + 1)}>+1</button>
          <button onClick={() => setCount(prev => prev - 1)}>-1</button>
        </div>
      </div>
    </div>
  );
};

// 2. useReducer - 复杂状态管理
interface CounterState {
  count: number;
  step: number;
  history: number[];
}

type CounterAction =
  | { type: 'increment' }
  | { type: 'decrement' }
  | { type: 'reset' }
  | { type: 'setStep'; payload: number }
  | { type: 'undo' };

const counterReducer = (state: CounterState, action: CounterAction): CounterState => {
  switch (action.type) {
    case 'increment':
      return {
        ...state,
        count: state.count + state.step,
        history: [...state.history, state.count]
      };
    case 'decrement':
      return {
        ...state,
        count: state.count - state.step,
        history: [...state.history, state.count]
      };
    case 'reset':
      return { ...state, count: 0, history: [] };
    case 'setStep':
      return { ...state, step: action.payload };
    case 'undo':
      const lastValue = state.history[state.history.length - 1];
      return {
        ...state,
        count: lastValue || 0,
        history: state.history.slice(0, -1)
      };
    default:
      return state;
  }
};

// 3. Context - 跨组件状态共享
interface ThemeContextType {
  theme: 'light' | 'dark';
  toggleTheme: () => void;
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

const ThemeProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [theme, setTheme] = useState<'light' | 'dark'>('light');

  const toggleTheme = () => {
    setTheme(prev => prev === 'light' ? 'dark' : 'light');
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      <div className={theme === 'dark' ? 'bg-gray-800 text-white' : 'bg-white text-gray-900'}>
        {children}
      </div>
    </ThemeContext.Provider>
  );
};

// 4. 组合状态管理 (Context + useReducer)
interface CounterContextState {
  count: number;
  step: number;
  isLoading: boolean;
}

type CounterContextAction =
  | { type: 'increment' }
  | { type: 'decrement' }
  | { type: 'reset' }
  | { type: 'setStep'; payload: number }
  | { type: 'setLoading'; payload: boolean };

const CounterProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [state, dispatch] = useReducer(counterContextReducer, {
    count: 0,
    step: 1,
    isLoading: false
  });

  const asyncIncrement = async () => {
    dispatch({ type: 'setLoading', payload: true });
    await new Promise(resolve => setTimeout(resolve, 1000));
    dispatch({ type: 'increment' });
    dispatch({ type: 'setLoading', payload: false });
  };

  return (
    <CounterContext.Provider value={{ state, dispatch, asyncIncrement }}>
      {children}
    </CounterContext.Provider>
  );
};`,highlights:[{line:3,description:"useState Hook - 管理简单的本地状态"},{line:4,description:"多个状态变量 - 每个状态独立管理"},{line:13,description:"函数式更新 - 基于前一个状态值更新"},{line:32,description:"useReducer Hook - 管理复杂状态逻辑"},{line:35,description:"Reducer函数 - 集中处理状态更新逻辑"},{line:67,description:"Context创建 - 定义跨组件共享的状态类型"},{line:71,description:"Provider组件 - 提供状态给子组件树"},{line:95,description:"组合模式 - Context + useReducer的强大组合"}]},tutorial:{concepts:["状态是组件内部的数据，当状态发生变化时，组件会重新渲染","useState适用于简单的本地状态管理","useReducer适用于复杂的状态逻辑和多个相关状态","Context API解决跨组件状态共享问题，避免props drilling","状态更新必须遵循不可变性原则，创建新对象而不是修改原对象","函数式更新可以基于前一个状态值进行更新，避免闭包陷阱"],steps:["分析状态的复杂度和作用域，选择合适的状态管理方式","定义状态的数据结构和类型接口","实现状态更新逻辑，确保遵循不可变性原则","创建自定义Hook封装状态逻辑，提高代码复用性","使用Context Provider包装需要共享状态的组件树","在消费组件中使用useContext或自定义Hook访问状态","添加错误处理和边界情况的处理逻辑","使用React DevTools调试状态更新和组件渲染"],tips:["状态更新是异步的，不要依赖立即获取更新后的值","使用函数式更新避免闭包陷阱：setCount(prev => prev + 1)","复杂状态逻辑优先考虑useReducer而不是多个useState","Context值变化会导致所有消费者重新渲染，合理拆分Context","使用useMemo优化Context Provider的value，避免不必要的渲染","自定义Hook可以封装状态逻辑和错误处理，提高代码质量","避免在render函数中创建新对象，使用useMemo缓存复杂计算","状态提升：将状态放在最近的公共父组件中管理"]},interview:{questions:[{question:"useState和useReducer的区别是什么？什么时候使用哪个？",answer:"useState适用于简单状态管理，返回状态值和更新函数。useReducer适用于复杂状态逻辑，通过reducer函数集中处理状态更新。当状态更新逻辑复杂、涉及多个子值、下一个状态依赖于之前的状态，或需要更好的性能优化时，useReducer更合适。useReducer的dispatch函数引用是稳定的，有助于性能优化。"},{question:"Context API的性能问题如何解决？",answer:"Context值变化会导致所有消费者重新渲染，这是主要的性能问题。解决方案包括：1) 拆分Context，将频繁变化和稳定的状态分离到不同的Context中；2) 使用useMemo优化Provider的value，避免每次渲染都创建新对象；3) 使用React.memo包装消费组件，减少不必要的渲染；4) 对于复杂应用，考虑使用专门的状态管理库如Redux或Zustand。"},{question:"如何在函数组件中实现类似componentDidUpdate的效果？",answer:"使用useEffect配合依赖数组可以实现类似componentDidUpdate的效果。useEffect会在依赖项变化后执行回调函数。可以通过useRef保存前一个值来比较变化，或者使用自定义Hook如usePrevious来跟踪状态变化。注意要正确设置依赖数组，避免无限循环或遗漏依赖。"},{question:"什么是状态提升？为什么需要状态提升？",answer:"状态提升是将状态从子组件移动到父组件的过程。当多个兄弟组件需要共享状态时，应该将状态提升到它们最近的公共父组件中。这样可以确保状态的单一数据源原则，便于管理和同步。状态提升有助于保持数据流的可预测性，使应用更容易调试和维护。"},{question:"如何避免useState的闭包陷阱？",answer:"闭包陷阱发生在异步操作中使用过期的状态值。解决方案：1) 使用函数式更新：setCount(prev => prev + 1)；2) 使用useRef保存最新值的引用；3) 使用useCallback和useEffect正确处理依赖；4) 避免在异步回调中直接使用状态值，而是通过函数式更新获取最新值。"},{question:"Context + useReducer与Redux的区别？",answer:"Context + useReducer是React内置的状态管理方案，适合中小型应用。优点是无需额外依赖，学习成本低。Redux是专门的状态管理库，提供更强大的功能如中间件、时间旅行调试、严格的单向数据流等。Redux适合大型复杂应用，有更好的可预测性和调试工具，但学习成本较高。选择取决于应用复杂度和团队需求。"}],keyPoints:["useState适用于简单状态，useReducer适用于复杂状态逻辑","Context API解决props drilling，但要注意性能问题","状态更新遵循不可变性原则，创建新对象而不是修改原对象","函数式更新可以避免闭包陷阱和依赖问题","状态提升将共享状态放在最近的公共父组件中","useMemo和useCallback用于性能优化，避免不必要的渲染","自定义Hook可以封装状态逻辑，提高代码复用性","React DevTools是调试状态管理的重要工具"]},bestPractices:{dos:["根据状态复杂度选择合适的管理方式：简单状态用useState，复杂逻辑用useReducer","始终保持状态的不可变性，创建新对象而不是修改现有对象","使用函数式更新避免闭包陷阱：setCount(prev => prev + 1)","为复杂状态定义清晰的TypeScript接口和Action类型","使用自定义Hook封装状态逻辑，提高代码复用性","合理拆分Context，将频繁变化和稳定状态分离","使用useMemo优化Context Provider的value","设计扁平化的状态结构，避免深层嵌套","为状态管理添加适当的错误处理和边界情况","使用React DevTools调试状态更新和组件渲染"],donts:["不要直接修改状态对象：user.name = newName","不要在循环或条件语句中调用Hook","不要忘记在useEffect中正确设置依赖数组","不要在Context中放置频繁变化的状态","不要创建过多的Context导致Provider嵌套地狱","不要在render函数中创建新对象，影响性能","不要忽略reducer函数的纯函数特性","不要在异步操作中直接使用状态值，容易产生闭包陷阱","不要过度使用Context，简单的props传递可能更合适","不要忘记为Context提供默认值和错误处理"],patterns:["State + Dispatch Pattern: 使用useReducer集中管理复杂状态逻辑","Provider Pattern: 通过Context Provider向子组件树提供状态","Custom Hook Pattern: 封装状态逻辑到自定义Hook中","Compound Component Pattern: 组合多个组件共享状态","State Lifting Pattern: 将状态提升到最近的公共父组件","Reducer + Context Pattern: 结合useReducer和Context实现全局状态管理","State Machine Pattern: 使用状态机管理复杂的状态转换","Optimistic Update Pattern: 先更新UI，再同步到服务器","Error Boundary Pattern: 使用错误边界处理状态管理中的错误","Middleware Pattern: 在状态更新过程中添加日志、持久化等功能"]}};return e.jsx(v,{...t})},C=()=>{const[t,s]=r.useState(0),[n,a]=r.useState({name:"",age:0}),[i,p]=r.useState([]),[d,m]=r.useState(""),h=()=>{d.trim()&&(p(o=>[...o,d.trim()]),m(""))},y=o=>{p(c=>c.filter((I,b)=>b!==o))};return e.jsxs("div",{className:"space-y-6",children:[e.jsx("h3",{className:"text-lg font-semibold",children:"useState 示例"}),e.jsxs("div",{className:"bg-gray-50 p-4 rounded-lg",children:[e.jsx("h4",{className:"font-medium mb-2",children:"计数器"}),e.jsxs("div",{className:"flex items-center space-x-4",children:[e.jsx("button",{onClick:()=>s(o=>o-1),className:"px-3 py-1 bg-red-500 text-white rounded hover:bg-red-600",children:"-1"}),e.jsx("span",{className:"text-xl font-bold",children:t}),e.jsx("button",{onClick:()=>s(o=>o+1),className:"px-3 py-1 bg-green-500 text-white rounded hover:bg-green-600",children:"+1"}),e.jsx("button",{onClick:()=>s(0),className:"px-3 py-1 bg-gray-500 text-white rounded hover:bg-gray-600",children:"重置"})]})]}),e.jsxs("div",{className:"bg-gray-50 p-4 rounded-lg",children:[e.jsx("h4",{className:"font-medium mb-2",children:"用户信息"}),e.jsxs("div",{className:"space-y-2",children:[e.jsx("input",{type:"text",placeholder:"姓名",value:n.name,onChange:o=>a(c=>({...c,name:o.target.value})),className:"w-full px-3 py-2 border border-gray-300 rounded"}),e.jsx("input",{type:"number",placeholder:"年龄",value:n.age||"",onChange:o=>a(c=>({...c,age:parseInt(o.target.value)||0})),className:"w-full px-3 py-2 border border-gray-300 rounded"}),e.jsxs("div",{className:"text-sm text-gray-600",children:["当前用户: ",n.name||"未设置",", 年龄: ",n.age||"未设置"]})]})]}),e.jsxs("div",{className:"bg-gray-50 p-4 rounded-lg",children:[e.jsx("h4",{className:"font-medium mb-2",children:"待办事项"}),e.jsxs("div",{className:"space-y-2",children:[e.jsxs("div",{className:"flex space-x-2",children:[e.jsx("input",{type:"text",placeholder:"添加新任务",value:d,onChange:o=>m(o.target.value),onKeyPress:o=>o.key==="Enter"&&h(),className:"flex-1 px-3 py-2 border border-gray-300 rounded"}),e.jsx("button",{onClick:h,className:"px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600",children:"添加"})]}),e.jsx("ul",{className:"space-y-1",children:i.map((o,c)=>e.jsxs("li",{className:"flex items-center justify-between bg-white p-2 rounded",children:[e.jsx("span",{children:o}),e.jsx("button",{onClick:()=>y(c),className:"px-2 py-1 text-sm bg-red-500 text-white rounded hover:bg-red-600",children:"删除"})]},c))}),i.length===0&&e.jsx("div",{className:"text-gray-500 text-center py-4",children:"暂无任务"})]})]})]})},j=(t,s)=>{switch(s.type){case"increment":return{...t,count:t.count+t.step,history:[...t.history,t.count]};case"decrement":return{...t,count:t.count-t.step,history:[...t.history,t.count]};case"reset":return{...t,count:0,history:[...t.history,t.count]};case"setStep":return{...t,step:s.payload};case"undo":if(t.history.length>0){const n=[...t.history],a=n.pop();return{...t,count:a,history:n}}return t;default:return t}},N=()=>{const[t,s]=r.useReducer(j,{count:0,step:1,history:[]});return e.jsxs("div",{className:"space-y-4",children:[e.jsx("h3",{className:"text-lg font-semibold",children:"useReducer 示例"}),e.jsxs("div",{className:"bg-gray-50 p-4 rounded-lg",children:[e.jsx("h4",{className:"font-medium mb-4",children:"高级计数器"}),e.jsxs("div",{className:"space-y-4",children:[e.jsxs("div",{className:"text-center",children:[e.jsx("div",{className:"text-3xl font-bold text-blue-600 mb-2",children:t.count}),e.jsxs("div",{className:"text-sm text-gray-600",children:["当前步长: ",t.step]})]}),e.jsxs("div",{className:"flex justify-center space-x-2",children:[e.jsxs("button",{onClick:()=>s({type:"decrement"}),className:"px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600",children:["-",t.step]}),e.jsxs("button",{onClick:()=>s({type:"increment"}),className:"px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600",children:["+",t.step]}),e.jsx("button",{onClick:()=>s({type:"reset"}),className:"px-4 py-2 bg-gray-500 text-white rounded hover:bg-gray-600",children:"重置"}),e.jsx("button",{onClick:()=>s({type:"undo"}),disabled:t.history.length===0,className:"px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 disabled:bg-gray-300 disabled:cursor-not-allowed",children:"撤销"})]}),e.jsxs("div",{className:"flex items-center justify-center space-x-2",children:[e.jsx("label",{className:"text-sm font-medium",children:"步长:"}),e.jsxs("select",{value:t.step,onChange:n=>s({type:"setStep",payload:parseInt(n.target.value)}),className:"px-2 py-1 border border-gray-300 rounded",children:[e.jsx("option",{value:1,children:"1"}),e.jsx("option",{value:5,children:"5"}),e.jsx("option",{value:10,children:"10"}),e.jsx("option",{value:100,children:"100"})]})]}),t.history.length>0&&e.jsxs("div",{className:"bg-white p-3 rounded border",children:[e.jsx("div",{className:"text-sm font-medium mb-1",children:"历史记录:"}),e.jsxs("div",{className:"text-sm text-gray-600",children:[t.history.slice(-5).join(" → ")," → ",t.count]})]})]})]})]})},x=r.createContext(void 0),T=({children:t})=>{const[s,n]=r.useState("light"),a=()=>{n(i=>i==="light"?"dark":"light")};return e.jsx(x.Provider,{value:{theme:s,toggleTheme:a},children:e.jsx("div",{className:s==="dark"?"bg-gray-800 text-white":"bg-white text-gray-900",children:t})})},u=()=>{const t=r.useContext(x);if(t===void 0)throw new Error("useTheme must be used within a ThemeProvider");return t},f=()=>e.jsxs("div",{className:"space-y-4",children:[e.jsx("h3",{className:"text-lg font-semibold",children:"Context 示例"}),e.jsx(R,{}),e.jsx(S,{}),e.jsx(P,{})]}),R=()=>{const{theme:t,toggleTheme:s}=u();return e.jsxs("button",{onClick:s,className:`px-4 py-2 rounded font-medium ${t==="light"?"bg-gray-800 text-white hover:bg-gray-700":"bg-white text-gray-800 hover:bg-gray-100"}`,children:["切换到 ",t==="light"?"深色":"浅色"," 主题"]})},S=()=>{const{theme:t}=u();return e.jsxs("div",{className:`p-4 rounded-lg border ${t==="light"?"bg-gray-50 border-gray-200":"bg-gray-700 border-gray-600"}`,children:[e.jsx("h4",{className:"font-medium mb-2",children:"主题卡片"}),e.jsxs("p",{className:"text-sm opacity-75",children:["当前主题: ",t==="light"?"浅色模式":"深色模式"]})]})},P=()=>{const{theme:t}=u();return e.jsxs("div",{className:`p-4 rounded-lg border ${t==="light"?"bg-blue-50 border-blue-200":"bg-blue-900 border-blue-700"}`,children:[e.jsx("h4",{className:"font-medium mb-2",children:"嵌套组件"}),e.jsx("p",{className:"text-sm opacity-75",children:"这个组件在组件树的深层，但仍然可以访问主题状态。"})]})},w=(t,s)=>{switch(s.type){case"increment":return{...t,count:t.count+t.step};case"decrement":return{...t,count:t.count-t.step};case"reset":return{...t,count:0};case"setStep":return{...t,step:s.payload};case"setLoading":return{...t,isLoading:s.payload};default:return t}},g=r.createContext(void 0),k=({children:t})=>{const[s,n]=r.useReducer(w,{count:0,step:1,isLoading:!1}),a=async()=>{n({type:"setLoading",payload:!0}),await new Promise(i=>setTimeout(i,1e3)),n({type:"increment"}),n({type:"setLoading",payload:!1})};return e.jsx(g.Provider,{value:{state:s,dispatch:n,asyncIncrement:a},children:t})},l=()=>{const t=r.useContext(g);if(t===void 0)throw new Error("useCounter must be used within a CounterProvider");return t},A=()=>e.jsxs("div",{className:"space-y-4",children:[e.jsx("h3",{className:"text-lg font-semibold",children:"组合状态管理示例"}),e.jsx(E,{}),e.jsx(L,{}),e.jsx(H,{})]}),E=()=>{const{state:t}=l();return e.jsxs("div",{className:"bg-gray-50 p-4 rounded-lg text-center",children:[e.jsx("div",{className:"text-3xl font-bold text-blue-600 mb-2",children:t.isLoading?"...":t.count}),e.jsxs("div",{className:"text-sm text-gray-600",children:["步长: ",t.step," | 状态: ",t.isLoading?"加载中":"就绪"]})]})},L=()=>{const{state:t,dispatch:s,asyncIncrement:n}=l();return e.jsxs("div",{className:"flex justify-center space-x-2",children:[e.jsxs("button",{onClick:()=>s({type:"decrement"}),disabled:t.isLoading,className:"px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600 disabled:bg-gray-300 disabled:cursor-not-allowed",children:["-",t.step]}),e.jsxs("button",{onClick:()=>s({type:"increment"}),disabled:t.isLoading,className:"px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600 disabled:bg-gray-300 disabled:cursor-not-allowed",children:["+",t.step]}),e.jsxs("button",{onClick:n,disabled:t.isLoading,className:"px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 disabled:bg-gray-300 disabled:cursor-not-allowed",children:["异步+",t.step]}),e.jsx("button",{onClick:()=>s({type:"reset"}),disabled:t.isLoading,className:"px-4 py-2 bg-gray-500 text-white rounded hover:bg-gray-600 disabled:bg-gray-300 disabled:cursor-not-allowed",children:"重置"})]})},H=()=>{const{state:t,dispatch:s}=l();return e.jsxs("div",{className:"bg-gray-50 p-4 rounded-lg",children:[e.jsx("h4",{className:"font-medium mb-2",children:"设置"}),e.jsxs("div",{className:"flex items-center space-x-2",children:[e.jsx("label",{className:"text-sm font-medium",children:"步长:"}),e.jsxs("select",{value:t.step,onChange:n=>s({type:"setStep",payload:parseInt(n.target.value)}),disabled:t.isLoading,className:"px-2 py-1 border border-gray-300 rounded disabled:bg-gray-100",children:[e.jsx("option",{value:1,children:"1"}),e.jsx("option",{value:5,children:"5"}),e.jsx("option",{value:10,children:"10"}),e.jsx("option",{value:50,children:"50"})]})]})]})};export{M as default};
