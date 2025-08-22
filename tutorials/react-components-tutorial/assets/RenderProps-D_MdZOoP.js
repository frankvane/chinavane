import{j as e,r as d}from"./index-MmCcWZhd.js";import{C as c}from"./ComponentTemplate-DoUPe1QN.js";const j=()=>{const r={title:"Render Props",description:"Render Props是一种在React组件之间使用一个值为函数的prop共享代码的简单技术。组件接收一个函数prop，这个函数返回一个React元素并调用它而不是实现自己的渲染逻辑。",overview:e.jsxs("div",{className:"space-y-4",children:[e.jsxs("div",{children:[e.jsx("h3",{className:"text-lg font-semibold mb-2",children:"核心概念"}),e.jsx("p",{className:"text-gray-700",children:"Render Props是一种在React组件之间使用一个值为函数的prop共享代码的简单技术。 组件接收一个函数prop，这个函数返回一个React元素并调用它而不是实现自己的渲染逻辑。 这种模式允许组件共享状态逻辑，同时保持UI的灵活性。"})]}),e.jsxs("div",{children:[e.jsx("h3",{className:"text-lg font-semibold mb-2",children:"主要优势"}),e.jsxs("ul",{className:"list-disc list-inside space-y-1 text-gray-700",children:[e.jsx("li",{children:"代码复用 - 将状态逻辑与UI渲染分离，提高代码复用性"}),e.jsx("li",{children:"灵活性 - 允许使用者自定义渲染逻辑，提供最大的灵活性"}),e.jsx("li",{children:"组合性 - 可以轻松组合多个Render Props组件"}),e.jsx("li",{children:"类型安全 - 配合TypeScript提供完整的类型检查"}),e.jsx("li",{children:"逻辑封装 - 将复杂的状态管理逻辑封装在可复用的组件中"})]})]}),e.jsxs("div",{children:[e.jsx("h3",{className:"text-lg font-semibold mb-2",children:"适用场景"}),e.jsxs("ul",{className:"list-disc list-inside space-y-1 text-gray-700",children:[e.jsx("li",{children:"状态管理 - 封装可复用的状态逻辑（如Toggle、Counter等）"}),e.jsx("li",{children:"数据获取 - 处理异步数据加载和错误状态"}),e.jsx("li",{children:"事件处理 - 封装复杂的事件监听和处理逻辑"}),e.jsx("li",{children:"动画控制 - 管理动画状态和生命周期"}),e.jsx("li",{children:"表单处理 - 封装表单验证和提交逻辑"})]})]}),e.jsxs("div",{children:[e.jsx("h3",{className:"text-lg font-semibold mb-2",children:"注意事项"}),e.jsxs("ul",{className:"list-disc list-inside space-y-1 text-gray-700",children:[e.jsx("li",{children:"性能考虑 - 避免在render方法中创建函数，可能导致不必要的重渲染"}),e.jsx("li",{children:"现代替代 - 考虑使用自定义Hooks替代Render Props"}),e.jsx("li",{children:"嵌套地狱 - 多个Render Props组件嵌套可能导致代码难以阅读"}),e.jsx("li",{children:"调试困难 - 复杂的函数传递可能使调试变得困难"}),e.jsx("li",{children:"类型复杂 - TypeScript中的函数类型定义可能比较复杂"})]})]})]}),examples:[{title:"1. 鼠标位置追踪",description:"使用Render Props模式封装鼠标位置追踪逻辑",component:e.jsx(u,{}),observationPoints:["在指定区域内移动鼠标，实时显示鼠标坐标位置","MouseTracker组件封装了鼠标事件监听逻辑","通过render prop函数将鼠标位置数据传递给UI组件","状态逻辑与UI渲染完全分离，提高了复用性"],keyPoints:["MouseTracker组件管理鼠标位置状态","使用useEffect添加和清理事件监听器","render prop函数接收鼠标位置数据并返回JSX","组件职责单一，只负责鼠标位置追踪"],commonTraps:["忘记在组件卸载时清理事件监听器，导致内存泄漏","在render方法中直接创建函数，导致性能问题","没有正确处理事件对象的类型定义"],solutions:["使用useEffect的清理函数移除事件监听器","将render函数定义在组件外部或使用useCallback缓存","使用TypeScript正确定义事件和状态类型"],importantTips:["Render Props模式特别适合封装事件监听逻辑","可以轻松扩展为支持多种鼠标事件（点击、拖拽等）","这种模式在现代React中可以用自定义Hook替代"],codeExample:{title:"鼠标位置追踪Render Props实现",code:`// 定义鼠标位置接口
interface MousePosition {
  x: number;
  y: number;
}

// MouseTracker组件的Props接口
interface MouseTrackerProps {
  render: (mouse: MousePosition) => ReactNode; // render prop函数
}

// 鼠标追踪组件 - 封装状态逻辑
const MouseTracker: React.FC<MouseTrackerProps> = ({ render }) => {
  const [mouse, setMouse] = useState<MousePosition>({ x: 0, y: 0 });

  useEffect(() => {
    // 鼠标移动事件处理函数
    const handleMouseMove = (event: MouseEvent) => {
      setMouse({
        x: event.clientX, // 获取鼠标X坐标
        y: event.clientY  // 获取鼠标Y坐标
      });
    };

    // 添加事件监听器
    window.addEventListener('mousemove', handleMouseMove);
    
    // 清理函数：组件卸载时移除监听器
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  // 调用render prop函数，传递鼠标位置数据
  return <div>{render(mouse)}</div>;
};

// 使用示例
const MouseTrackerExample: React.FC = () => {
  return (
    <div className="border-2 border-dashed border-gray-300 p-4 h-32 relative">
      <MouseTracker
        render={({ x, y }) => ( // render prop函数接收鼠标位置
          <div className="text-center">
            <p className="text-lg font-medium text-blue-600">
              鼠标位置: ({x}, {y})
            </p>
            <p className="text-sm text-gray-500 mt-2">
              在此区域内移动鼠标查看坐标变化
            </p>
          </div>
        )}
      />
    </div>
  );
};`,highlights:[9,12,16,17,18,19,20,26,29,33,39],description:"这个示例展示了Render Props的核心概念：MouseTracker组件封装鼠标位置追踪逻辑，通过render prop函数将状态数据传递给UI组件。重点关注render prop函数的定义(第9行)、状态管理(第12行)、事件处理(第16-20行)、事件监听器的添加和清理(第26、29行)、render prop的调用(第33行)以及使用方式(第39行)。"}},{title:"2. 数据获取",description:"封装异步数据获取逻辑，处理加载和错误状态",component:e.jsx(g,{}),observationPoints:["组件初始显示加载状态，模拟API调用过程","加载完成后显示用户列表数据","DataFetcher组件封装了完整的异步数据获取流程","通过render prop传递数据、加载状态和错误信息"],keyPoints:["DataFetcher组件管理data、loading、error三种状态","使用useEffect在组件挂载时触发数据获取","render prop函数接收完整的状态对象","支持泛型，可以处理不同类型的数据"],commonTraps:["没有正确处理组件卸载时的异步操作","缺少错误处理逻辑，导致应用崩溃","没有考虑重复请求的情况"],solutions:["使用AbortController取消未完成的请求","添加try-catch块处理异步操作错误","实现请求去重或防抖机制"],importantTips:["这种模式非常适合封装API调用逻辑","可以扩展支持缓存、重试、分页等功能","现代React中推荐使用SWR或React Query等库"],codeExample:{title:"数据获取Render Props实现",code:`// 定义数据获取状态接口
interface DataFetcherState<T> {
  data: T | null;     // 获取到的数据
  loading: boolean;   // 加载状态
  error: string | null; // 错误信息
}

// DataFetcher组件的Props接口
interface DataFetcherProps<T> {
  url: string;
  render: (state: DataFetcherState<T>) => ReactNode; // render prop函数
}

// 数据获取组件 - 支持泛型
const DataFetcher = <T,>({ url, render }: DataFetcherProps<T>) => {
  const [state, setState] = useState<DataFetcherState<T>>({
    data: null,
    loading: true,
    error: null
  });

  useEffect(() => {
    const fetchData = async () => {
      try {
        // 设置加载状态
        setState(prev => ({ ...prev, loading: true, error: null }));
        
        // 模拟API调用延迟
        await new Promise(resolve => setTimeout(resolve, 1000));
        
        // 模拟获取数据
        const mockData = { users: ['用户1', '用户2', '用户3'] } as T;
        
        // 更新成功状态
        setState({ data: mockData, loading: false, error: null });
      } catch (error) {
        // 处理错误状态
        setState({ data: null, loading: false, error: (error as Error).message });
      }
    };

    fetchData();
  }, [url]); // 依赖url变化重新获取数据

  // 调用render prop函数，传递完整状态
  return <>{render(state)}</>;
};

// 使用示例
const DataFetcherExample: React.FC = () => {
  return (
    <DataFetcher<{ users: string[] }>
      url="/api/users"
      render={({ data, loading, error }) => { // render prop接收状态
        if (loading) {
          return (
            <div className="flex items-center justify-center p-4">
              <div className="animate-spin rounded-full h-6 w-6 border-b-2 border-blue-500"></div>
              <span className="ml-2 text-blue-600">加载中...</span>
            </div>
          );
        }
        
        if (error) {
          return (
            <div className="bg-red-50 border border-red-200 rounded-lg p-4">
              <p className="text-red-700">错误: {error}</p>
            </div>
          );
        }
        
        if (!data) {
          return <div className="text-gray-500">暂无数据</div>;
        }
        
        return (
          <div className="bg-green-50 border border-green-200 rounded-lg p-4">
            <h4 className="font-medium mb-2 text-green-800">用户列表：</h4>
            <ul className="list-disc list-inside">
              {data.users.map((user, index) => (
                <li key={index} className="text-green-700">{user}</li>
              ))}
            </ul>
          </div>
        );
      }}
    />
  );
};`,highlights:[11,14,15,16,22,25,28,31,34,36,42,44,50,51],description:"这个示例展示了如何使用Render Props封装异步数据获取逻辑。重点关注render prop函数的定义(第11行)、泛型组件定义(第14行)、状态初始化(第15-16行)、异步数据获取(第22行)、状态更新(第25、28、31、34、36行)、依赖数组(第42行)、render prop调用(第44行)以及条件渲染逻辑(第50-51行)。"}},{title:"3. Toggle状态管理",description:"封装开关状态逻辑，提供灵活的UI渲染方式",component:e.jsx(x,{}),observationPoints:["点击按钮可以切换开关状态","状态变化时按钮文字和颜色会相应改变","开启状态下会显示额外的内容区域","Toggle组件通过children函数传递状态和控制方法"],keyPoints:["Toggle组件管理布尔状态和切换逻辑","使用children作为render prop函数","提供状态值和切换函数给子组件","完全由使用者决定UI的渲染方式"],commonTraps:["忘记将toggle函数传递给子组件","在子组件中直接修改状态而不是调用toggle函数","没有考虑初始状态的配置需求"],solutions:["确保render prop函数接收完整的状态对象","提供清晰的API文档说明如何使用","支持defaultValue或initialValue配置"],importantTips:["children作为函数是Render Props的常见变体","这种模式可以轻松扩展为支持多状态管理","适合封装各种简单的状态逻辑"],codeExample:{title:"Toggle状态管理Render Props实现",code:`// 定义Toggle状态接口
interface ToggleState {
  on: boolean;        // 开关状态
  toggle: () => void; // 切换函数
}

// Toggle组件的Props接口
interface ToggleProps {
  children: (state: ToggleState) => ReactNode; // children作为render prop
}

// Toggle状态管理组件
const Toggle: React.FC<ToggleProps> = ({ children }) => {
  const [on, setOn] = useState(false); // 管理开关状态
  
  // 切换状态的函数
  const toggle = () => setOn(!on);
  
  // 调用children函数，传递状态和控制方法
  return <>{children({ on, toggle })}</>;
};

// 使用示例
const ToggleExample: React.FC = () => {
  return (
    <div className="space-y-4">
      <Toggle>
        {({ on, toggle }) => ( // children函数接收状态和方法
          <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
            <button
              onClick={toggle} // 调用toggle函数切换状态
              className={\`px-4 py-2 rounded font-medium \${
                on 
                  ? 'bg-red-500 hover:bg-red-600 text-white' 
                  : 'bg-green-500 hover:bg-green-600 text-white'
              }\`}
            >
              {on ? '关闭' : '开启'} {/* 根据状态显示不同文字 */}
            </button>
            {on && ( // 条件渲染：只在开启状态下显示内容
              <div className="mt-4 p-3 bg-blue-100 rounded">
                <p className="text-blue-800">🎉 内容已显示！这是通过Render Props控制的内容。</p>
              </div>
            )}
          </div>
        )}
      </Toggle>
    </div>
  );
};`,highlights:[9,12,13,16,19,27,30,37,39],description:"这个示例展示了使用children作为render prop的Toggle组件实现。重点关注children函数的定义(第9行)、状态管理(第12-13行)、toggle函数(第16行)、children函数调用(第19行)、使用方式(第27行)、事件处理(第30行)、条件渲染(第37、39行)。这种模式将状态逻辑与UI完全分离。"}},{title:"4. 计数器状态管理",description:"封装计数器逻辑，支持多种操作方法",component:e.jsx(v,{}),observationPoints:["计数器从初始值5开始显示","提供增加、减少、重置三种操作按钮","数字显示会根据操作实时更新","Counter组件通过children函数传递状态和所有操作方法"],keyPoints:["Counter组件封装了计数器的完整状态逻辑","支持自定义初始值配置","提供多个操作方法（increment、decrement、reset）","使用函数式状态更新确保状态一致性"],commonTraps:["直接修改count值而不是使用提供的方法","没有考虑边界值的处理（如最小值、最大值）","忘记使用函数式状态更新"],solutions:["只通过render prop提供的方法修改状态","在组件内部添加边界值检查逻辑","使用setCount(prev => prev + 1)形式更新状态"],importantTips:["这种模式可以轻松扩展为支持步长、边界值等配置","适合封装各种数值操作逻辑","可以结合localStorage实现状态持久化"],codeExample:{title:"计数器状态管理Render Props实现",code:`// 定义计数器状态接口
interface CounterState {
  count: number;           // 当前计数值
  increment: () => void;   // 增加函数
  decrement: () => void;   // 减少函数
  reset: () => void;       // 重置函数
}

// Counter组件的Props接口
interface CounterProps {
  children: (state: CounterState) => ReactNode; // children作为render prop
  initialCount?: number;                        // 可选的初始值
}

// 计数器状态管理组件
const Counter: React.FC<CounterProps> = ({ children, initialCount = 0 }) => {
  const [count, setCount] = useState(initialCount); // 使用初始值初始化状态
  
  // 增加计数 - 使用函数式更新
  const increment = () => setCount(c => c + 1);
  
  // 减少计数 - 使用函数式更新
  const decrement = () => setCount(c => c - 1);
  
  // 重置到初始值
  const reset = () => setCount(initialCount);
  
  // 调用children函数，传递完整的状态和操作方法
  return <>{children({ count, increment, decrement, reset })}</>;
};

// 使用示例
const CounterExample: React.FC = () => {
  return (
    <div className="space-y-4">
      <Counter initialCount={5}> {/* 设置初始值为5 */}
        {({ count, increment, decrement, reset }) => ( // children函数接收所有状态和方法
          <div className="bg-purple-50 border border-purple-200 rounded-lg p-4">
            <div className="text-center mb-4">
              <span className="text-3xl font-bold text-purple-600">{count}</span>
            </div>
            <div className="flex justify-center space-x-2">
              <button
                onClick={increment} // 调用increment方法
                className="bg-green-500 hover:bg-green-600 text-white px-3 py-1 rounded"
              >
                +1
              </button>
              <button
                onClick={decrement} // 调用decrement方法
                className="bg-red-500 hover:bg-red-600 text-white px-3 py-1 rounded"
              >
                -1
              </button>
              <button
                onClick={reset} // 调用reset方法
                className="bg-gray-500 hover:bg-gray-600 text-white px-3 py-1 rounded"
              >
                重置
              </button>
            </div>
          </div>
        )}
      </Counter>
    </div>
  );
};`,highlights:[11,15,16,19,22,25,28,35,36,42,47,52],description:"这个示例展示了功能完整的计数器Render Props组件实现。重点关注children函数的定义(第11行)、初始值配置(第15-16行)、函数式状态更新(第19、22、25行)、children函数调用(第28行)、初始值设置(第35行)、状态和方法接收(第36行)以及各种操作方法的调用(第42、47、52行)。"}}],tutorial:{concepts:["Render Props是一种在React组件间共享代码的技术，通过函数prop来决定组件渲染什么内容","核心思想：将渲染逻辑作为函数传递给组件，组件负责提供数据和状态","与HOC相比，Render Props提供了更灵活的组合方式和更清晰的数据流","children作为函数是最常见的Render Props实现方式","适合封装可复用的状态逻辑、数据获取、事件处理等功能","支持TypeScript泛型，提供完整的类型安全保障","可以与Hooks结合使用，创建更强大的逻辑复用模式"],steps:["1. 定义组件Props接口，包含render prop函数的类型定义","2. 在组件内部管理状态、副作用或其他逻辑","3. 调用render prop函数，传递当前状态和操作方法","4. 使用组件时传入渲染函数，接收状态并返回JSX","5. 可选：使用children prop简化API设计","6. 添加TypeScript类型约束确保类型安全","7. 考虑性能优化，避免不必要的重新渲染"],tips:["使用children作为render prop可以提供更清晰的API","为render prop函数提供完整的TypeScript类型定义","避免在render方法中创建新的函数，使用useCallback优化性能","可以提供多个render prop来支持不同的渲染场景","结合useMemo缓存复杂的计算结果","使用泛型让组件支持不同类型的数据","考虑提供默认的渲染实现作为fallback","在复杂场景下可以组合多个Render Props组件","使用React.memo优化包装组件的性能","提供清晰的错误边界处理"]},interview:{questions:[{question:"什么是Render Props模式？它解决了什么问题？",answer:"Render Props是一种在React组件间共享代码的技术，通过将函数作为prop传递给组件来实现逻辑复用。它解决了组件间状态逻辑共享的问题，避免了代码重复，同时保持了组件的灵活性和可组合性。核心思想是将渲染逻辑作为函数传递，组件负责提供数据和状态。"},{question:"Render Props与HOC（高阶组件）有什么区别？各有什么优缺点？",answer:"Render Props相比HOC有以下优势：1) 数据流更清晰，避免了props来源不明的问题；2) 避免了HOC的嵌套地狱；3) 更灵活的组合方式；4) 更好的TypeScript支持。缺点是：1) 可能导致回调地狱；2) 性能开销稍大。HOC的优势是使用简单，缺点是容易造成props冲突和调试困难。"},{question:"children作为函数的Render Props有什么特点？",answer:"children作为函数是Render Props的常见变体，它提供了更清晰的API设计。特点包括：1) 语法更简洁，不需要额外的prop名称；2) 符合React的组合模式；3) 更直观的组件嵌套关系；4) 可以与其他props结合使用。"},{question:"如何在TypeScript中正确定义Render Props的类型？",answer:"在TypeScript中定义Render Props需要：1) 为render prop函数定义准确的参数类型和返回类型；2) 使用泛型支持不同类型的数据；3) 正确定义children函数的类型；4) 考虑可选参数和默认值。例如：children: (state: T) => ReactNode。"},{question:"Render Props模式有哪些性能考虑？如何优化？",answer:"性能考虑包括：1) 避免在render中创建新函数，使用useCallback缓存；2) 使用React.memo优化组件渲染；3) 合理使用useMemo缓存复杂计算；4) 避免不必要的状态更新；5) 考虑组件的重新渲染频率。优化策略是将稳定的函数提取到组件外部或使用Hooks进行缓存。"},{question:"现代React中，Render Props与自定义Hooks相比如何选择？",answer:"选择原则：1) 如果只需要共享状态逻辑，优先使用自定义Hooks；2) 如果需要控制渲染时机和方式，使用Render Props；3) 如果需要在类组件中使用，选择Render Props；4) 对于复杂的UI组合场景，Render Props更灵活；5) 简单的状态管理推荐使用Hooks。两者可以结合使用。"}],keyPoints:["Render Props通过函数prop实现组件间的逻辑共享","核心是将渲染逻辑作为函数传递，组件提供数据和状态","相比HOC提供更清晰的数据流和更灵活的组合方式","children作为函数是最常见和推荐的实现方式","TypeScript中需要正确定义render prop函数的类型","性能优化重点是避免不必要的函数创建和组件重渲染","与自定义Hooks各有适用场景，可以结合使用","适合封装可复用的状态逻辑、数据获取、事件处理等功能","支持动态组合和条件渲染，提供了极大的灵活性","在复杂应用中可以组合多个Render Props组件实现强大功能"]},bestPractices:{dos:["使用TypeScript定义清晰的render prop函数接口和泛型约束","优先使用children作为render prop，提供更清晰的API设计","为render prop函数提供完整的参数类型定义和返回类型","使用useCallback缓存render函数，避免不必要的重新渲染","结合useMemo缓存复杂的计算结果和对象创建","提供有意义的默认值和fallback渲染逻辑","在组件内部进行错误边界处理和异常捕获","使用React.memo优化包装组件的渲染性能","为复杂的Render Props组件提供清晰的文档和使用示例","考虑组件的可测试性，提供mock和测试工具","合理使用泛型让组件支持不同类型的数据","在适当的场景下与自定义Hooks结合使用"],donts:["避免在render方法中创建新的函数，这会导致子组件不必要的重新渲染","不要过度嵌套多个Render Props组件，容易造成回调地狱","避免在render prop函数中进行复杂的副作用操作","不要忽略TypeScript的类型检查，确保类型安全","避免在Render Props组件中直接修改传入的props","不要在render prop中进行异步操作而不处理loading状态","避免创建过于复杂的render prop函数签名","不要忽略组件的性能影响，特别是在列表渲染中","避免在render prop中使用不稳定的对象引用","不要过度使用Render Props，简单场景优先考虑Hooks","避免在render prop函数中抛出未处理的异常","不要忽略组件的可访问性和用户体验"],patterns:["Function as Children模式：使用children作为render prop的经典实现","多render props模式：提供多个render prop支持不同的渲染场景","条件渲染模式：根据状态动态决定渲染内容和组件结构","数据获取模式：封装异步数据获取逻辑，提供loading、error、data状态","状态管理模式：封装复杂的状态逻辑和状态转换","事件处理模式：封装常见的事件处理逻辑，如鼠标、键盘事件","组合模式：多个Render Props组件的嵌套和组合使用","高阶Render Props模式：创建返回Render Props组件的高阶函数","泛型Render Props模式：使用TypeScript泛型支持多种数据类型","Hook + Render Props模式：结合自定义Hooks和Render Props的优势","错误边界模式：在Render Props中集成错误处理和恢复机制","性能优化模式：使用memo、callback、useMemo等优化渲染性能"]}};return e.jsx(c,{...r})},p=({render:r})=>{const[t,n]=d.useState({x:0,y:0});return d.useEffect(()=>{const s=o=>{n({x:o.clientX,y:o.clientY})};return window.addEventListener("mousemove",s),()=>window.removeEventListener("mousemove",s)},[]),e.jsx("div",{children:r(t)})},u=()=>e.jsx("div",{className:"border-2 border-dashed border-gray-300 p-4 h-32 relative",children:e.jsx(p,{render:({x:r,y:t})=>e.jsxs("div",{className:"text-center",children:[e.jsxs("p",{className:"text-lg font-medium text-blue-600",children:["鼠标位置: (",r,", ",t,")"]}),e.jsx("p",{className:"text-sm text-gray-500 mt-2",children:"在此区域内移动鼠标查看坐标变化"})]})})}),m=({url:r,render:t})=>{const[n,s]=d.useState({data:null,loading:!0,error:null});return d.useEffect(()=>{(async()=>{try{s(a=>({...a,loading:!0,error:null})),await new Promise(a=>setTimeout(a,1e3)),s({data:{users:["用户1","用户2","用户3"]},loading:!1,error:null})}catch(i){s({data:null,loading:!1,error:i.message})}})()},[r]),e.jsx(e.Fragment,{children:t(n)})},g=()=>e.jsx(m,{url:"/api/users",render:({data:r,loading:t,error:n})=>t?e.jsxs("div",{className:"flex items-center justify-center p-4",children:[e.jsx("div",{className:"animate-spin rounded-full h-6 w-6 border-b-2 border-blue-500"}),e.jsx("span",{className:"ml-2 text-blue-600",children:"加载中..."})]}):n?e.jsx("div",{className:"bg-red-50 border border-red-200 rounded-lg p-4",children:e.jsxs("p",{className:"text-red-700",children:["错误: ",n]})}):r?e.jsxs("div",{className:"bg-green-50 border border-green-200 rounded-lg p-4",children:[e.jsx("h4",{className:"font-medium mb-2 text-green-800",children:"用户列表："}),e.jsx("ul",{className:"list-disc list-inside",children:r.users.map((s,o)=>e.jsx("li",{className:"text-green-700",children:s},o))})]}):e.jsx("div",{className:"text-gray-500",children:"暂无数据"})}),h=({children:r})=>{const[t,n]=d.useState(!1),s=()=>n(!t);return e.jsx(e.Fragment,{children:r({on:t,toggle:s})})},x=()=>e.jsx("div",{className:"space-y-4",children:e.jsx(h,{children:({on:r,toggle:t})=>e.jsxs("div",{className:"bg-blue-50 border border-blue-200 rounded-lg p-4",children:[e.jsx("button",{onClick:t,className:`px-4 py-2 rounded font-medium ${r?"bg-red-500 hover:bg-red-600 text-white":"bg-green-500 hover:bg-green-600 text-white"}`,children:r?"关闭":"开启"}),r&&e.jsx("div",{className:"mt-4 p-3 bg-blue-100 rounded",children:e.jsx("p",{className:"text-blue-800",children:"🎉 内容已显示！这是通过Render Props控制的内容。"})})]})})}),b=({children:r,initialCount:t=0})=>{const[n,s]=d.useState(t),o=()=>s(l=>l+1),i=()=>s(l=>l-1),a=()=>s(t);return e.jsx(e.Fragment,{children:r({count:n,increment:o,decrement:i,reset:a})})},v=()=>e.jsx("div",{className:"space-y-4",children:e.jsx(b,{initialCount:5,children:({count:r,increment:t,decrement:n,reset:s})=>e.jsxs("div",{className:"bg-purple-50 border border-purple-200 rounded-lg p-4",children:[e.jsx("div",{className:"text-center mb-4",children:e.jsx("span",{className:"text-3xl font-bold text-purple-600",children:r})}),e.jsxs("div",{className:"flex justify-center space-x-2",children:[e.jsx("button",{onClick:t,className:"bg-green-500 hover:bg-green-600 text-white px-3 py-1 rounded",children:"+1"}),e.jsx("button",{onClick:n,className:"bg-red-500 hover:bg-red-600 text-white px-3 py-1 rounded",children:"-1"}),e.jsx("button",{onClick:s,className:"bg-gray-500 hover:bg-gray-600 text-white px-3 py-1 rounded",children:"重置"})]})]})})});export{j as default};
