import{j as e,r as l}from"./index-B_BA6J2H.js";import{C as f}from"./ComponentTemplate-CRmS-rAK.js";function d(t=0,o={}){const{min:s,max:n,step:a=1}=o,[r,c]=l.useState(t),g=l.useCallback(()=>{c(i=>{const u=i+a;return n!==void 0?Math.min(u,n):u})},[a,n]),x=l.useCallback(()=>{c(i=>{const u=i-a;return s!==void 0?Math.max(u,s):u})},[a,s]),b=l.useCallback(()=>{c(t)},[t]),k=l.useCallback(i=>{c(i)},[]);return{count:r,increment:g,decrement:x,reset:b,set:k}}function m(t,o){const[s,n]=l.useState(()=>{try{const r=window.localStorage.getItem(t);return r?JSON.parse(r):o}catch(r){return console.error("Error reading localStorage:",r),o}});return[s,r=>{try{const c=r instanceof Function?r(s):r;n(c),window.localStorage.setItem(t,JSON.stringify(c))}catch(c){console.error("Error setting localStorage:",c)}}]}function v(t){const[o,s]=l.useState({data:null,loading:!0,error:null}),n=l.useCallback(async()=>{s(a=>({...a,loading:!0,error:null}));try{await new Promise(r=>setTimeout(r,1e3));const a={users:["Alice","Bob","Charlie"],timestamp:new Date().toISOString()};s({data:a,loading:!1,error:null})}catch(a){s({data:null,loading:!1,error:a instanceof Error?a.message:"Unknown error"})}},[t]);return l.useEffect(()=>{n()},[n]),{...o,refetch:n}}function p(t=!1){const[o,s]=l.useState(t),n=l.useCallback(()=>{s(r=>!r)},[]),a=l.useCallback(r=>{s(r)},[]);return[o,n,a]}function H(t,o){const[s,n]=l.useState(t);return l.useEffect(()=>{const a=setTimeout(()=>{n(t)},o);return()=>{clearTimeout(a)}},[t,o]),s}function h(t){const o=l.useRef();return l.useEffect(()=>{o.current=t}),o.current}const S=()=>{const t=d(0,{min:0,max:10,step:1}),o=d(5,{step:2});return e.jsxs("div",{className:"space-y-4",children:[e.jsxs("div",{className:"bg-blue-50 border border-blue-200 rounded-lg p-4",children:[e.jsx("h4",{className:"font-medium mb-2",children:"计数器1 (范围: 0-10, 步长: 1)"}),e.jsxs("div",{className:"flex items-center space-x-4",children:[e.jsx("span",{className:"text-2xl font-bold text-blue-600",children:t.count}),e.jsxs("div",{className:"space-x-2",children:[e.jsx("button",{onClick:t.increment,className:"bg-green-500 text-white px-3 py-1 rounded",children:"+"}),e.jsx("button",{onClick:t.decrement,className:"bg-red-500 text-white px-3 py-1 rounded",children:"-"}),e.jsx("button",{onClick:t.reset,className:"bg-gray-500 text-white px-3 py-1 rounded",children:"重置"})]})]})]}),e.jsxs("div",{className:"bg-purple-50 border border-purple-200 rounded-lg p-4",children:[e.jsx("h4",{className:"font-medium mb-2",children:"计数器2 (步长: 2)"}),e.jsxs("div",{className:"flex items-center space-x-4",children:[e.jsx("span",{className:"text-2xl font-bold text-purple-600",children:o.count}),e.jsxs("div",{className:"space-x-2",children:[e.jsx("button",{onClick:o.increment,className:"bg-green-500 text-white px-3 py-1 rounded",children:"+2"}),e.jsx("button",{onClick:o.decrement,className:"bg-red-500 text-white px-3 py-1 rounded",children:"-2"}),e.jsx("button",{onClick:o.reset,className:"bg-gray-500 text-white px-3 py-1 rounded",children:"重置"})]})]})]})]})},C=()=>{const[t,o]=m("user-name",""),[s,n]=m("user-preferences",{theme:"light",language:"zh"});return e.jsxs("div",{className:"space-y-4",children:[e.jsxs("div",{className:"bg-green-50 border border-green-200 rounded-lg p-4",children:[e.jsx("h4",{className:"font-medium mb-2",children:"用户名存储"}),e.jsxs("div",{className:"flex items-center space-x-2",children:[e.jsx("input",{type:"text",value:t,onChange:a=>o(a.target.value),placeholder:"输入用户名",className:"border border-gray-300 rounded px-3 py-1"}),e.jsxs("span",{className:"text-green-700",children:["存储的值: ",t||"(空)"]})]})]}),e.jsxs("div",{className:"bg-yellow-50 border border-yellow-200 rounded-lg p-4",children:[e.jsx("h4",{className:"font-medium mb-2",children:"用户偏好设置"}),e.jsxs("div",{className:"space-y-2",children:[e.jsxs("div",{children:[e.jsx("label",{className:"mr-2",children:"主题:"}),e.jsxs("select",{value:s.theme,onChange:a=>n({...s,theme:a.target.value}),className:"border border-gray-300 rounded px-2 py-1",children:[e.jsx("option",{value:"light",children:"浅色"}),e.jsx("option",{value:"dark",children:"深色"})]})]}),e.jsxs("div",{children:[e.jsx("label",{className:"mr-2",children:"语言:"}),e.jsxs("select",{value:s.language,onChange:a=>n({...s,language:a.target.value}),className:"border border-gray-300 rounded px-2 py-1",children:[e.jsx("option",{value:"zh",children:"中文"}),e.jsx("option",{value:"en",children:"English"})]})]}),e.jsxs("div",{className:"text-sm text-gray-600",children:["当前设置: ",JSON.stringify(s)]})]})]})]})},j=()=>{const{data:t,loading:o,error:s,refetch:n}=v("/api/users");return e.jsxs("div",{className:"bg-indigo-50 border border-indigo-200 rounded-lg p-4",children:[e.jsxs("div",{className:"flex justify-between items-center mb-4",children:[e.jsx("h4",{className:"font-medium",children:"数据获取示例"}),e.jsx("button",{onClick:n,disabled:o,className:"bg-indigo-500 text-white px-3 py-1 rounded disabled:opacity-50",children:o?"加载中...":"重新获取"})]}),o&&e.jsxs("div",{className:"flex items-center text-indigo-600",children:[e.jsx("div",{className:"animate-spin rounded-full h-4 w-4 border-b-2 border-indigo-500 mr-2"}),"加载中..."]}),s&&e.jsxs("div",{className:"text-red-600",children:["错误: ",s]}),t&&e.jsxs("div",{children:[e.jsx("p",{className:"font-medium mb-2",children:"用户列表:"}),e.jsx("ul",{className:"list-disc list-inside mb-2",children:t.users.map((a,r)=>e.jsx("li",{className:"text-indigo-700",children:a},r))}),e.jsxs("p",{className:"text-sm text-gray-600",children:["获取时间: ",t.timestamp]})]})]})},N=()=>{const[t,o,s]=p(!1),[n,a]=p(!0);return e.jsxs("div",{className:"space-y-4",children:[e.jsxs("div",{className:"bg-teal-50 border border-teal-200 rounded-lg p-4",children:[e.jsx("h4",{className:"font-medium mb-2",children:"可见性切换"}),e.jsxs("div",{className:"flex items-center space-x-4",children:[e.jsx("button",{onClick:o,className:"bg-teal-500 text-white px-3 py-1 rounded",children:t?"隐藏":"显示"}),e.jsx("button",{onClick:()=>s(!0),className:"bg-green-500 text-white px-2 py-1 rounded text-sm",children:"强制显示"}),e.jsx("button",{onClick:()=>s(!1),className:"bg-red-500 text-white px-2 py-1 rounded text-sm",children:"强制隐藏"})]}),t&&e.jsx("div",{className:"mt-2 p-2 bg-teal-100 rounded",children:e.jsx("p",{className:"text-teal-800",children:"这个内容现在是可见的！"})})]}),e.jsxs("div",{className:"bg-orange-50 border border-orange-200 rounded-lg p-4",children:[e.jsx("h4",{className:"font-medium mb-2",children:"启用状态切换"}),e.jsxs("div",{className:"flex items-center space-x-4",children:[e.jsx("button",{onClick:a,className:`px-3 py-1 rounded text-white ${n?"bg-green-500":"bg-gray-500"}`,children:n?"已启用":"已禁用"}),e.jsxs("span",{className:"text-sm text-gray-600",children:["状态: ",n?"启用":"禁用"]})]})]})]})},y=()=>{const[t,o]=l.useState(""),s=H(t,500),[n,a]=l.useState([]);return l.useEffect(()=>{if(s){const r=["React Hooks","React Components","React Router","React Context","React State"].filter(c=>c.toLowerCase().includes(s.toLowerCase()));a(r)}else a([])},[s]),e.jsxs("div",{className:"bg-pink-50 border border-pink-200 rounded-lg p-4",children:[e.jsx("h4",{className:"font-medium mb-2",children:"搜索防抖示例"}),e.jsxs("div",{className:"space-y-2",children:[e.jsx("input",{type:"text",value:t,onChange:r=>o(r.target.value),placeholder:"输入搜索关键词...",className:"w-full border border-gray-300 rounded px-3 py-2"}),e.jsxs("div",{className:"text-sm text-gray-600",children:[e.jsxs("p",{children:['输入值: "',t,'"']}),e.jsxs("p",{children:['防抖值: "',s,'"']})]}),n.length>0&&e.jsxs("div",{children:[e.jsx("p",{className:"font-medium text-pink-700 mb-1",children:"搜索结果:"}),e.jsx("ul",{className:"list-disc list-inside space-y-1",children:n.map((r,c)=>e.jsx("li",{className:"text-pink-600",children:r},c))})]})]})]})},T=()=>{const[t,o]=l.useState(0),s=h(t),[n,a]=l.useState("张三"),r=h(n);return e.jsxs("div",{className:"space-y-4",children:[e.jsxs("div",{className:"bg-cyan-50 border border-cyan-200 rounded-lg p-4",children:[e.jsx("h4",{className:"font-medium mb-2",children:"计数器前值追踪"}),e.jsxs("div",{className:"space-y-2",children:[e.jsxs("div",{className:"flex items-center space-x-4",children:[e.jsx("button",{onClick:()=>o(t+1),className:"bg-cyan-500 text-white px-3 py-1 rounded",children:"增加计数"}),e.jsx("button",{onClick:()=>o(t-1),className:"bg-red-500 text-white px-3 py-1 rounded",children:"减少计数"})]}),e.jsxs("div",{className:"text-sm",children:[e.jsxs("p",{children:["当前值: ",e.jsx("span",{className:"font-bold text-cyan-600",children:t})]}),e.jsxs("p",{children:["前一个值: ",e.jsx("span",{className:"font-bold text-gray-600",children:s??"无"})]})]})]})]}),e.jsxs("div",{className:"bg-lime-50 border border-lime-200 rounded-lg p-4",children:[e.jsx("h4",{className:"font-medium mb-2",children:"姓名前值追踪"}),e.jsxs("div",{className:"space-y-2",children:[e.jsxs("div",{className:"flex items-center space-x-2",children:[e.jsx("input",{type:"text",value:n,onChange:c=>a(c.target.value),className:"border border-gray-300 rounded px-3 py-1"}),e.jsx("button",{onClick:()=>a(n==="张三"?"李四":"张三"),className:"bg-lime-500 text-white px-3 py-1 rounded",children:"切换姓名"})]}),e.jsxs("div",{className:"text-sm",children:[e.jsxs("p",{children:["当前姓名: ",e.jsx("span",{className:"font-bold text-lime-600",children:n})]}),e.jsxs("p",{children:["前一个姓名: ",e.jsx("span",{className:"font-bold text-gray-600",children:r??"无"})]})]})]})]})]})},P=()=>{const t={title:"自定义Hooks",description:"自定义Hook是一个JavaScript函数，其名称以'use'开头，函数内部可以调用其他的Hook。它让你在不增加组件的情况下达到同样的效果，是React中最强大的代码复用机制。",overview:e.jsxs("div",{className:"space-y-4",children:[e.jsxs("div",{children:[e.jsx("h3",{className:"text-lg font-semibold mb-2",children:"核心概念"}),e.jsx("p",{className:"text-gray-700",children:"自定义Hook是React提供的一种在组件之间共享状态逻辑的方式。它本质上是一个JavaScript函数， 名称以'use'开头，内部可以调用其他Hook。通过自定义Hook，我们可以将组件逻辑提取到可重用的函数中， 实现逻辑复用而不是UI复用。"})]}),e.jsxs("div",{children:[e.jsx("h3",{className:"text-lg font-semibold mb-2",children:"主要优势"}),e.jsxs("ul",{className:"list-disc list-inside space-y-1 text-gray-700",children:[e.jsx("li",{children:"逻辑复用 - 将相同的状态逻辑在多个组件间共享"}),e.jsx("li",{children:"关注点分离 - 将复杂的逻辑从组件中抽离出来"}),e.jsx("li",{children:"易于测试 - 可以独立测试Hook的逻辑"}),e.jsx("li",{children:"组合性强 - 可以在一个Hook中使用其他Hook"}),e.jsx("li",{children:"类型安全 - 配合TypeScript提供完整的类型支持"})]})]}),e.jsxs("div",{children:[e.jsx("h3",{className:"text-lg font-semibold mb-2",children:"使用规则"}),e.jsxs("ul",{className:"list-disc list-inside space-y-1 text-gray-700",children:[e.jsx("li",{children:"只在最顶层调用Hook - 不要在循环、条件或嵌套函数中调用Hook"}),e.jsx("li",{children:"只在React函数中调用Hook - 在React函数组件或自定义Hook中调用"}),e.jsx("li",{children:"Hook的调用顺序必须一致 - 每次渲染时Hook的调用顺序必须相同"}),e.jsx("li",{children:"命名约定 - 自定义Hook必须以'use'开头"})]})]})]}),examples:[{title:"useCounter - 计数器Hook",description:"提供计数功能，支持增减、重置、设置值和边界限制",component:e.jsx(S,{}),observationPoints:["Hook函数名以'use'开头，遵循React Hook命名约定","使用TypeScript接口定义选项参数和返回值类型","内部使用useState管理计数状态","使用useCallback缓存函数，避免不必要的重新创建","支持最小值、最大值和步长配置"],keyPoints:["自定义Hook本质上是一个JavaScript函数","可以封装复杂的状态逻辑和副作用","返回值可以是任何类型：状态、函数、对象等","支持参数配置，提供灵活的API设计"],commonTraps:["忘记以'use'开头命名Hook函数","在Hook内部违反Hook使用规则","没有使用useCallback优化返回的函数","忽略边界条件的处理"],solutions:["严格遵循Hook命名约定，以'use'开头","确保Hook内部正确使用其他Hook","使用useCallback缓存返回的函数引用","添加边界检查和错误处理逻辑"],importantTips:["自定义Hook是逻辑复用的最佳方式，比HOC和Render Props更简洁","Hook可以返回任何值，设计时要考虑API的易用性和一致性","使用TypeScript可以提供更好的类型安全和开发体验"],codeExample:{title:"useCounter Hook实现",code:`// 定义选项接口
interface UseCounterOptions {
  min?: number;
  max?: number;
  step?: number;
}

// 定义返回值接口
interface UseCounterReturn {
  count: number;
  increment: () => void;
  decrement: () => void;
  reset: () => void;
  set: (value: number) => void;
}

// useCounter Hook实现
function useCounter(
  initialValue: number = 0,
  options: UseCounterOptions = {}
): UseCounterReturn {
  const { min, max, step = 1 } = options;
  const [count, setCount] = useState(initialValue);

  const increment = useCallback(() => {
    setCount(prev => {
      const newValue = prev + step;
      return max !== undefined ? Math.min(newValue, max) : newValue;
    });
  }, [step, max]);

  const decrement = useCallback(() => {
    setCount(prev => {
      const newValue = prev - step;
      return min !== undefined ? Math.max(newValue, min) : newValue;
    });
  }, [step, min]);

  const reset = useCallback(() => {
    setCount(initialValue);
  }, [initialValue]);

  const set = useCallback((value: number) => {
    setCount(value);
  }, []);

  return { count, increment, decrement, reset, set };
}

// 使用示例
const CounterComponent: React.FC = () => {
  const counter = useCounter(0, { min: 0, max: 10, step: 1 });
  
  return (
    <div>
      <span>计数: {counter.count}</span>
      <button onClick={counter.increment}>+</button>
      <button onClick={counter.decrement}>-</button>
      <button onClick={counter.reset}>重置</button>
    </div>
  );
};`,language:"typescript",highlights:[16,21,23,25,26,27,28,29,32,33,34,35,36,37,40,41,44,45,47],description:"这个示例展示了如何创建一个功能完整的计数器Hook。第16行定义Hook函数，第21行解构选项参数，第23行使用useState管理状态，第25-29行实现increment函数并使用useCallback优化，第32-37行实现decrement函数，第40-41行实现reset函数，第44-45行实现set函数，第47行返回所有方法和状态。"}},{title:"useLocalStorage - 本地存储Hook",description:"同步组件状态与localStorage，自动处理序列化和错误",component:e.jsx(C,{}),observationPoints:["使用useState的函数形式进行懒初始化","自动处理JSON序列化和反序列化","包含完整的错误处理机制","支持函数式更新和直接值更新","状态变化时自动同步到localStorage"],keyPoints:["懒初始化避免每次渲染都读取localStorage","错误处理确保Hook的健壮性","支持泛型，提供类型安全","API设计与useState保持一致"],commonTraps:["忘记处理localStorage不可用的情况","没有处理JSON解析错误","在服务端渲染时访问localStorage","存储大量数据导致性能问题"],solutions:["使用try-catch包装localStorage操作","提供合理的默认值和降级方案","检查环境是否支持localStorage","限制存储数据的大小和复杂度"],importantTips:["localStorage操作可能失败，必须包含错误处理","懒初始化是性能优化的重要技巧","API设计应该与React内置Hook保持一致性"],codeExample:{title:"useLocalStorage Hook实现",code:`// useLocalStorage Hook实现
function useLocalStorage<T>(
  key: string,
  initialValue: T
): [T, (value: T | ((val: T) => T)) => void] {
  // 懒初始化：只在首次渲染时读取localStorage
  const [storedValue, setStoredValue] = useState<T>(() => {
    try {
      // 尝试从localStorage获取数据
      const item = window.localStorage.getItem(key);
      // 解析JSON数据，如果不存在则使用初始值
      return item ? JSON.parse(item) : initialValue;
    } catch (error) {
      // 错误处理：localStorage不可用或JSON解析失败
      console.error('Error reading localStorage:', error);
      return initialValue;
    }
  });

  // 设置值的函数，支持直接值和函数式更新
  const setValue = (value: T | ((val: T) => T)) => {
    try {
      // 计算新值：支持函数式更新
      const valueToStore = value instanceof Function ? value(storedValue) : value;
      // 更新React状态
      setStoredValue(valueToStore);
      // 同步到localStorage
      window.localStorage.setItem(key, JSON.stringify(valueToStore));
    } catch (error) {
      // 错误处理：localStorage写入失败
      console.error('Error setting localStorage:', error);
    }
  };

  // 返回当前值和设置函数，API与useState一致
  return [storedValue, setValue];
}

// 使用示例
const SettingsComponent: React.FC = () => {
  const [name, setName] = useLocalStorage('user-name', '');
  const [theme, setTheme] = useLocalStorage('theme', 'light');
  
  return (
    <div>
      <input 
        value={name} 
        onChange={(e) => setName(e.target.value)}
        placeholder="输入姓名" 
      />
      <select value={theme} onChange={(e) => setTheme(e.target.value)}>
        <option value="light">浅色主题</option>
        <option value="dark">深色主题</option>
      </select>
    </div>
  );
};`,language:"typescript",highlights:[2,7,8,9,10,11,12,13,14,15,16,20,22,23,24,25,26,27,28,29,30,31,35],description:"这个示例展示了useLocalStorage的完整实现。第2行定义泛型Hook函数，第7行使用useState的函数形式进行懒初始化，第8-16行在初始化函数中处理localStorage读取和错误，第20行定义setValue函数，第22-31行实现值设置逻辑包括函数式更新支持和错误处理，第35行返回与useState一致的API。"}},{title:"useFetch - 数据获取Hook",description:"封装异步数据获取逻辑，提供loading、error状态管理",component:e.jsx(j,{}),observationPoints:["使用useState管理data、loading、error三个状态","useCallback缓存fetchData函数避免无限循环","useEffect处理副作用，依赖fetchData函数","提供refetch方法支持手动重新获取","支持泛型指定数据类型"],keyPoints:["异步操作需要管理多个相关状态","正确设置useEffect的依赖数组很关键","错误处理是数据获取的重要部分","提供重新获取功能增强用户体验"],commonTraps:["useEffect依赖数组设置不正确导致无限循环","没有处理组件卸载时的异步操作","忘记重置loading和error状态","没有处理网络错误和解析错误"],solutions:["使用useCallback缓存异步函数","在useEffect中返回清理函数","在开始新请求时重置状态","实现完整的错误处理逻辑"],importantTips:["异步Hook需要仔细管理副作用和依赖关系","错误处理和加载状态是用户体验的重要组成部分","考虑使用AbortController取消未完成的请求"],codeExample:{title:"useFetch Hook实现",code:`// useFetch Hook实现
interface UseFetchState<T> {
  data: T | null;
  loading: boolean;
  error: string | null;
}

function useFetch<T>(url: string): UseFetchState<T> & { refetch: () => void } {
  // 管理三种异步状态：数据、加载中、错误
  const [state, setState] = useState<UseFetchState<T>>({
    data: null,
    loading: true,
    error: null
  });

  // 使用useCallback缓存异步函数，避免无限循环
  const fetchData = useCallback(async () => {
    // 重置状态，开始新的请求
    setState(prev => ({ ...prev, loading: true, error: null }));
    
    try {
      // 模拟网络延迟
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      // 模拟数据获取
      const mockData = {
        users: ['Alice', 'Bob', 'Charlie'],
        timestamp: new Date().toISOString()
      } as T;
      
      // 更新成功状态
      setState({ data: mockData, loading: false, error: null });
    } catch (error) {
      // 错误处理：更新错误状态
      setState({
        data: null,
        loading: false,
        error: error instanceof Error ? error.message : 'Unknown error'
      });
    }
  }, [url]); // 依赖url，url变化时重新创建函数

  // 使用useEffect处理副作用
  useEffect(() => {
    fetchData();
  }, [fetchData]); // 依赖fetchData函数

  // 返回状态和重新获取函数
  return { ...state, refetch: fetchData };
}

// 使用示例
const DataComponent: React.FC = () => {
  const { data, loading, error, refetch } = useFetch<{
    users: string[];
    timestamp: string;
  }>('/api/users');
  
  if (loading) return <div>加载中...</div>;
  if (error) return <div>错误: {error}</div>;
  if (!data) return <div>暂无数据</div>;
  
  return (
    <div>
      <button onClick={refetch}>重新获取</button>
      <ul>
        {data.users.map((user, index) => (
          <li key={index}>{user}</li>
        ))}
      </ul>
      <p>获取时间: {data.timestamp}</p>
    </div>
  );
};`,language:"typescript",highlights:[2,8,9,10,11,12,13,16,17,18,19,21,22,23,25,26,27,28,29,31,32,34,35,36,37,38,39,40,42,43,44,47],description:"这个示例展示了useFetch的完整实现。第2行定义状态接口，第8行定义Hook函数，第9-13行初始化状态对象，第16行使用useCallback缓存异步函数，第17-18行重置状态开始新请求，第21-32行处理异步逻辑和成功状态，第34-40行处理错误状态，第42行设置依赖数组，第43-45行使用useEffect处理副作用，第47行返回状态和refetch函数。"}},{title:"useToggle - 切换状态Hook",description:"管理布尔值状态，提供切换和设置功能",component:e.jsx(N,{}),observationPoints:["封装布尔值状态的常见操作","提供toggle切换和set设置两种操作","使用useCallback优化函数引用","API简洁明了，易于使用","支持初始值配置"],keyPoints:["简化布尔值状态的管理","提供语义化的操作方法","函数引用稳定，避免不必要的重渲染","可以替代简单的useState布尔值场景"],commonTraps:["过度使用，简单的useState可能更直接","忘记使用useCallback优化性能","API设计不一致"],solutions:["评估是否真的需要自定义Hook","使用useCallback缓存返回的函数","保持API设计的一致性和简洁性"],importantTips:["简单的Hook也要考虑性能优化","API设计要平衡功能性和易用性","不是所有状态都需要自定义Hook"],codeExample:{title:"useToggle Hook实现",code:`// useToggle Hook实现
function useToggle(
  initialValue: boolean = false
): [boolean, () => void, (value: boolean) => void] {
  // 使用useState管理布尔状态
  const [value, setValue] = useState(initialValue);
  
  // 切换函数：true变false，false变true
  const toggle = useCallback(() => {
    setValue(prev => !prev);
  }, []);
  
  // 设置函数：直接设置布尔值
  const set = useCallback((newValue: boolean) => {
    setValue(newValue);
  }, []);
  
  // 返回当前值、切换函数和设置函数
  return [value, toggle, set];
}

// 使用示例
const ToggleComponent: React.FC = () => {
  const [isVisible, toggleVisible, setVisible] = useToggle(false);
  const [isEnabled, toggleEnabled] = useToggle(true);
  
  return (
    <div>
      {/* 可见性控制 */}
      <div>
        <button onClick={toggleVisible}>
          {isVisible ? '隐藏' : '显示'}
        </button>
        <button onClick={() => setVisible(true)}>强制显示</button>
        <button onClick={() => setVisible(false)}>强制隐藏</button>
      </div>
      
      {/* 启用状态控制 */}
      <div>
        <button onClick={toggleEnabled}>
          {isEnabled ? '禁用' : '启用'}
        </button>
        <span>状态: {isEnabled ? '启用' : '禁用'}</span>
      </div>
      
      {/* 条件渲染 */}
      {isVisible && (
        <div style={{ padding: '10px', background: '#f0f0f0' }}>
          这个内容现在是可见的！
        </div>
      )}
    </div>
  );
};`,language:"typescript",highlights:[2,3,4,6,9,10,11,14,15,16,19,24,25,29,30,31,32,33,34,35,38,39,40,41,42,45,46,47,48,49],description:"这个示例展示了useToggle的完整实现。第2-4行定义Hook函数签名，第6行使用useState管理布尔状态，第9-11行实现toggle切换函数，第14-16行实现set设置函数，第19行返回状态值和操作函数，第24-25行展示了Hook的使用方式，第29-35行和38-42行展示了不同的操作方式，第45-49行展示了条件渲染的应用。"}},{title:"useDebounce - 防抖Hook",description:"对值进行防抖处理，常用于搜索输入优化",component:e.jsx(y,{}),observationPoints:["使用useState存储防抖后的值","useEffect设置延时更新逻辑","返回清理函数取消未执行的定时器","依赖数组包含value和delay","支持泛型，适用于任何类型的值"],keyPoints:["防抖是性能优化的重要技术","正确清理定时器避免内存泄漏","延迟时间可配置，提供灵活性","常用于搜索、API调用等场景"],commonTraps:["忘记清理定时器导致内存泄漏","延迟时间设置不合理","在不合适的场景使用防抖"],solutions:["在useEffect中返回清理函数","根据具体场景调整延迟时间","理解防抖和节流的区别和适用场景"],importantTips:["防抖Hook是处理高频更新的有效方式","清理副作用是Hook开发的重要原则","延迟时间的选择需要平衡用户体验和性能"],codeExample:{title:"useDebounce Hook实现",code:`// useDebounce Hook实现
function useDebounce<T>(value: T, delay: number): T {
  // 存储防抖后的值
  const [debouncedValue, setDebouncedValue] = useState<T>(value);

  useEffect(() => {
    // 设置定时器，延迟更新防抖值
    const timer = setTimeout(() => {
      setDebouncedValue(value);
    }, delay);

    // 清理函数：清除之前的定时器
    return () => {
      clearTimeout(timer);
    };
  }, [value, delay]); // 依赖value和delay

  // 返回防抖后的值
  return debouncedValue;
}

// 使用示例：搜索组件
const SearchComponent: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');
  // 防抖处理搜索词，延迟500ms
  const debouncedSearchTerm = useDebounce(searchTerm, 500);
  const [results, setResults] = useState<string[]>([]);
  const [isSearching, setIsSearching] = useState(false);

  // 当防抖后的搜索词变化时执行搜索
  useEffect(() => {
    if (debouncedSearchTerm) {
      setIsSearching(true);
      // 模拟API调用
      const searchAPI = async () => {
        // 模拟网络延迟
        await new Promise(resolve => setTimeout(resolve, 300));
        
        // 模拟搜索结果
        const mockResults = [
          \`结果1: \${debouncedSearchTerm}\`,
          \`结果2: \${debouncedSearchTerm}\`,
          \`结果3: \${debouncedSearchTerm}\`
        ];
        
        setResults(mockResults);
        setIsSearching(false);
      };
      
      searchAPI();
    } else {
      // 搜索词为空时清空结果
      setResults([]);
      setIsSearching(false);
    }
  }, [debouncedSearchTerm]); // 只依赖防抖后的值

  return (
    <div>
      <input
        type="text"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        placeholder="输入搜索关键词..."
      />
      
      <p>实时输入: {searchTerm}</p>
      <p>防抖后: {debouncedSearchTerm}</p>
      
      {isSearching && <p>搜索中...</p>}
      
      <ul>
        {results.map((result, index) => (
          <li key={index}>{result}</li>
        ))}
      </ul>
    </div>
  );
};`,language:"typescript",highlights:[2,4,6,7,8,9,12,13,14,16,18,23,24,25,26,30,31,32,34,35,36,37,39,40,41,42,45,46,49,50,51,54],description:"这个示例展示了useDebounce的完整实现。第2行定义Hook函数，第4行初始化防抖值状态，第6-16行使用useEffect设置定时器和清理函数，第18行返回防抖后的值，第23-26行展示Hook的使用方式，第30-54行展示了防抖在搜索场景中的应用，只有当防抖后的值变化时才触发API调用。"}},{title:"usePrevious - 获取前一个值Hook",description:"获取变量的前一个值，用于比较和动画效果",component:e.jsx(T,{}),observationPoints:["使用useRef存储前一个值","useEffect在渲染后更新ref的值","首次渲染时返回undefined","不会触发组件重新渲染","支持任何类型的值"],keyPoints:["useRef不会触发重新渲染","useEffect在渲染后执行，确保获取的是前一个值","常用于值比较和动画效果","简单但实用的Hook模式"],commonTraps:["误以为会触发重新渲染","在useEffect中直接返回ref.current","没有处理首次渲染的undefined情况"],solutions:["理解useRef和useState的区别","正确使用useEffect的执行时机","在使用时检查undefined值"],importantTips:["usePrevious是一个经典的Hook模式，展示了useRef的巧妙用法","理解React的渲染时机对Hook开发很重要","简单的Hook往往有着精妙的设计思路"],codeExample:{title:"usePrevious Hook实现",code:`// usePrevious Hook实现
function usePrevious<T>(value: T): T | undefined {
  // 使用useRef存储前一个值，不会触发重新渲染
  const ref = useRef<T | undefined>();
  
  // 在每次渲染后更新ref的值
  useEffect(() => {
    ref.current = value;
  });
  
  // 返回前一个值（首次渲染时为undefined）
  return ref.current;
}

// 使用示例：值变化比较
const ComparisonComponent: React.FC = () => {
  const [count, setCount] = useState(0);
  const [name, setName] = useState('Alice');
  
  // 获取前一个值
  const prevCount = usePrevious(count);
  const prevName = usePrevious(name);
  
  // 计算变化情况
  const countChanged = prevCount !== undefined && prevCount !== count;
  const nameChanged = prevName !== undefined && prevName !== name;
  
  return (
    <div>
      <div>
        <h3>计数器</h3>
        <p>当前值: {count}</p>
        <p>前一个值: {prevCount ?? '无'}</p>
        <p>是否变化: {countChanged ? '是' : '否'}</p>
        {countChanged && (
          <p style={{ color: 'green' }}>
            从 {prevCount} 变为 {count}
          </p>
        )}
        <button onClick={() => setCount(c => c + 1)}>增加</button>
        <button onClick={() => setCount(c => c - 1)}>减少</button>
      </div>
      
      <div>
        <h3>姓名</h3>
        <p>当前值: {name}</p>
        <p>前一个值: {prevName ?? '无'}</p>
        <p>是否变化: {nameChanged ? '是' : '否'}</p>
        {nameChanged && (
          <p style={{ color: 'blue' }}>
            从 "{prevName}" 变为 "{name}"
          </p>
        )}
        <input 
          value={name} 
          onChange={(e) => setName(e.target.value)}
          placeholder="输入姓名"
        />
      </div>
      
      <div>
        <h3>变化历史</h3>
        <p>计数器变化: {countChanged ? '✓' : '✗'}</p>
        <p>姓名变化: {nameChanged ? '✓' : '✗'}</p>
      </div>
    </div>
  );
};`,language:"typescript",highlights:[2,4,6,7,8,11,16,17,20,21,24,25,32,33,34,35,36,37,45,46,47,48,49,58,59],description:"这个示例展示了usePrevious的完整实现。第2行定义Hook函数，第4行使用useRef存储前一个值，第6-8行使用useEffect在每次渲染后更新ref值，第11行返回前一个值，第16-21行展示Hook的使用方式，第24-25行展示如何比较前后值的变化，第32-37行和45-49行展示了变化检测的应用。"}}],tutorial:{concepts:["自定义Hook的本质：自定义Hook是以'use'开头的JavaScript函数，它可以调用其他Hook。本质上是一种逻辑复用机制，允许在多个组件间共享状态逻辑而不是状态本身。","Hook规则的重要性：自定义Hook必须遵循Hook规则：只能在函数组件顶层或其他Hook中调用，不能在循环、条件或嵌套函数中调用。这确保了Hook调用顺序的一致性。","状态隔离原理：每次调用自定义Hook都会创建独立的状态实例。多个组件使用同一个自定义Hook时，它们的状态是完全隔离的，只是共享了相同的状态逻辑。","组合与抽象：自定义Hook可以组合多个内置Hook或其他自定义Hook，提供更高层次的抽象。这种组合能力使得复杂的状态逻辑可以被分解为更小、更可复用的单元。"],steps:["1. 识别可复用的逻辑：分析组件中重复出现的状态逻辑模式，如数据获取、表单处理、本地存储同步等。这些都是创建自定义Hook的好候选。","2. 设计Hook的API：确定Hook的输入参数和返回值。API设计应该简洁直观，遵循React内置Hook的命名约定，如返回数组或对象的模式。","3. 实现Hook逻辑：创建以'use'开头的函数，在其中使用useState、useEffect等内置Hook。确保所有Hook调用都在函数顶层，遵循Hook规则。","4. 处理副作用和清理：使用useEffect处理副作用，如API调用、事件监听等。重要的是要提供清理函数，防止内存泄漏和竞态条件。","5. 添加类型定义：使用TypeScript为Hook添加完整的类型定义，包括参数类型、返回值类型和泛型支持。这提高了代码的可维护性和开发体验。","6. 测试和优化：编写单元测试验证Hook的行为，使用React Testing Library测试Hook。根据性能需求使用useCallback、useMemo等优化Hook。"],tips:["命名约定：始终以'use'开头命名自定义Hook，这不仅是约定，也是React开发工具识别Hook的依据。使用描述性的名称，如useLocalStorage而不是useLS。","单一职责原则：每个Hook应该专注于一个特定的功能。避免创建过于复杂的Hook，如果Hook变得复杂，考虑将其拆分为多个更小的Hook。","依赖数组管理：仔细管理useEffect的依赖数组，包含所有使用的变量。使用useCallback和useMemo来稳定引用，避免不必要的重新执行。","错误处理策略：在Hook中实现适当的错误处理，特别是对于异步操作。提供错误状态和重试机制，让使用Hook的组件能够优雅地处理错误情况。","性能考虑：使用useCallback包装返回的函数，使用useMemo缓存计算结果。避免在Hook中创建不必要的对象或函数，这可能导致使用Hook的组件频繁重渲染。","文档和示例：为自定义Hook编写清晰的文档和使用示例。说明Hook的用途、参数、返回值和使用注意事项，这对团队协作非常重要。"]},interview:{questions:[{question:"什么是自定义Hook？它解决了什么问题？",answer:"自定义Hook是以'use'开头的JavaScript函数，可以调用其他Hook。它解决了组件间状态逻辑复用的问题，允许将组件逻辑提取到可重用的函数中，而不需要改变组件层次结构。"},{question:"自定义Hook的命名规则和使用规则是什么？",answer:"命名规则：必须以'use'开头。使用规则：只能在函数组件顶层或其他Hook中调用，不能在循环、条件语句或嵌套函数中调用。这确保了Hook调用顺序的一致性。"},{question:"自定义Hook和普通函数有什么区别？",answer:"自定义Hook可以调用其他Hook（如useState、useEffect），而普通函数不能。自定义Hook遵循Hook规则，每次调用都会创建独立的状态实例。普通函数只是逻辑封装，不能管理状态。"},{question:"如何在自定义Hook中处理副作用和清理？",answer:"使用useEffect处理副作用，如API调用、事件监听等。重要的是要提供清理函数，防止内存泄漏。对于异步操作，要处理组件卸载时的状态更新问题。"},{question:"自定义Hook的状态是如何隔离的？",answer:"每次调用自定义Hook都会创建独立的状态实例。多个组件使用同一个Hook时，它们的状态是完全隔离的，只是共享了相同的状态逻辑。这是React Hook系统的核心特性。"},{question:"如何优化自定义Hook的性能？",answer:"使用useCallback包装返回的函数，使用useMemo缓存计算结果，合理设置useEffect的依赖数组，避免创建不必要的对象或函数，使用useRef存储不需要触发重渲染的值。"},{question:"什么时候应该创建自定义Hook？",answer:"当发现多个组件有相同的状态逻辑时，当组件逻辑变得复杂需要抽象时，当需要封装第三方库的使用时，当需要处理复杂的副作用逻辑时。避免为简单的状态创建Hook。"},{question:"自定义Hook如何进行错误处理？",answer:"在Hook内部使用try-catch处理同步错误，使用错误状态管理异步错误，提供错误重置和重试机制，考虑使用Error Boundary处理未捕获的错误。"}],keyPoints:["🔧 基础概念：自定义Hook是逻辑复用的主要方式，必须以'use'开头命名","📋 Hook规则：可以调用其他Hook，但必须遵循Hook的使用规则","🔄 状态管理：每次调用创建独立状态实例，状态在组件间完全隔离","📤 返回值设计：可以返回状态和操作函数，支持复杂的状态逻辑","⚡ 性能优化：使用useCallback优化函数引用，useMemo缓存计算结果","📊 依赖管理：合理管理useEffect依赖，避免不必要的对象创建","🎯 最佳实践：保持Hook的单一职责，提供完整的TypeScript类型","🛡️ 错误处理：实现适当的错误处理，编写清晰的文档和示例"]},bestPractices:{dos:["✅ 命名规范：始终以'use'开头命名，如useCounter、useLocalStorage","✅ 单一职责：每个Hook只负责一个特定的功能或逻辑","✅ 类型安全：提供完整的TypeScript类型定义和泛型支持","✅ 性能优化：使用useCallback、useMemo缓存函数和计算结果","✅ 错误处理：实现try-catch和边界情况处理机制","✅ 副作用清理：在useEffect中返回清理函数，避免内存泄漏","✅ API设计：保持接口简洁直观，与React内置Hook风格一致","✅ 文档完善：提供清晰的使用示例和参数说明","✅ 测试覆盖：编写单元测试确保Hook在各种场景下正常工作","✅ 依赖管理：合理设置useEffect依赖数组，避免无限循环","✅ 初始化处理：支持懒初始化和函数式初始值","✅ 状态隔离：确保每次调用Hook都创建独立的状态实例"],donts:["❌ 违反Hook规则：不要在条件语句、循环或嵌套函数中调用Hook","❌ 忽略错误处理：不要忽略异步操作的错误和边界情况","❌ 过度抽象：不要为简单逻辑创建不必要的Hook","❌ 引用不稳定：不要忘记使用useCallback优化返回函数的引用","❌ 强行使用：不要在不合适的场景强行使用Hook模式","❌ 性能忽视：不要忽略Hook对组件渲染性能的影响","❌ 复杂API：不要设计过于复杂或难以理解的接口","❌ 副作用泄漏：不要忘记清理定时器、事件监听器等副作用","❌ 类型缺失：不要省略TypeScript类型定义","❌ 依赖错误：不要遗漏或错误设置useEffect依赖项","❌ 状态污染：不要在Hook间共享可变状态","❌ 同步操作：不要在useEffect中执行同步的DOM操作"],patterns:["🔄 状态管理模式 - 封装复杂的状态逻辑和状态转换（useCounter、useToggle、useLocalStorage）","⚡ 副作用模式 - 处理异步操作、API调用和订阅（useFetch、useWebSocket、useEventListener）","🚀 性能优化模式 - 实现防抖、节流、缓存等性能优化（useDebounce、useThrottle、useMemoizedCallback）","🛠️ 工具类模式 - 提供通用的辅助功能和实用工具（usePrevious、useInterval、useTimeout）","🔗 组合模式 - 将多个简单Hook组合成复杂功能（useForm、useTable、useModal）","🎯 条件Hook模式 - 根据条件动态使用不同的Hook逻辑（useConditionalEffect、useMediaQuery）","♻️ 生命周期模式 - 模拟类组件生命周期方法（useMount、useUnmount、useUpdateEffect）","🔄 数据同步模式 - 实现数据的双向绑定和同步（useControllableState、useSyncedState）"]}};return e.jsx(f,{...t})};export{P as default};
