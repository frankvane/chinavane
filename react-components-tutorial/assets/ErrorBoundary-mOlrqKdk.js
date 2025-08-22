var u=Object.defineProperty;var x=(t,e,o)=>e in t?u(t,e,{enumerable:!0,configurable:!0,writable:!0,value:o}):t[e]=o;var c=(t,e,o)=>x(t,typeof e!="symbol"?e+"":e,o);import{j as r,r as i}from"./index-B_BA6J2H.js";import{C as g}from"./ComponentTemplate-CRmS-rAK.js";class h extends i.Component{constructor(e){super(e),this.state={hasError:!1}}static getDerivedStateFromError(e){return{hasError:!0,error:e}}componentDidCatch(e,o){console.error("ErrorBoundary caught an error:",e,o),this.setState({errorInfo:o}),this.props.onError&&this.props.onError(e,o)}render(){var e;return this.state.hasError?this.props.fallback?this.props.fallback:r.jsxs("div",{className:"p-4 bg-red-50 border border-red-200 rounded-lg",children:[r.jsx("h3",{className:"text-lg font-semibold text-red-800 mb-2",children:"出现错误"}),r.jsx("p",{className:"text-red-600 mb-2",children:"抱歉，组件渲染时发生了错误。"}),r.jsxs("details",{className:"text-sm text-red-700",children:[r.jsx("summary",{className:"cursor-pointer font-medium",children:"错误详情"}),r.jsx("pre",{className:"mt-2 p-2 bg-red-100 rounded text-xs overflow-auto",children:(e=this.state.error)==null?void 0:e.toString()})]})]}):this.props.children}}class b extends i.Component{constructor(o){super(o);c(this,"retryTimeoutId",null);c(this,"retry",()=>{this.setState({hasError:!1,error:void 0,errorInfo:void 0,errorId:this.generateErrorId()})});this.state={hasError:!1,errorId:this.generateErrorId()}}generateErrorId(){return`error_${Date.now()}_${Math.random().toString(36).substr(2,9)}`}static getDerivedStateFromError(o){return{hasError:!0,error:o}}componentDidCatch(o,n){const s=this.generateErrorId();console.error(`[${s}] ErrorBoundary caught an error:`,o,n),this.setState({errorInfo:n,errorId:s}),this.props.onError&&this.props.onError(o,n,s)}componentWillUnmount(){this.retryTimeoutId&&clearTimeout(this.retryTimeoutId)}render(){return this.state.hasError&&this.state.error?this.props.fallback?this.props.fallback(this.state.error,this.retry):r.jsx("div",{className:"p-6 bg-red-50 border border-red-200 rounded-lg",children:r.jsxs("div",{className:"flex items-start space-x-3",children:[r.jsx("div",{className:"flex-shrink-0",children:r.jsx("svg",{className:"w-6 h-6 text-red-600",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",children:r.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.732-.833-2.5 0L4.268 18.5c-.77.833.192 2.5 1.732 2.5z"})})}),r.jsxs("div",{className:"flex-1",children:[r.jsx("h3",{className:"text-lg font-semibold text-red-800 mb-2",children:"组件错误"}),r.jsx("p",{className:"text-red-600 mb-3",children:"组件渲染过程中发生了意外错误。"}),r.jsxs("div",{className:"flex space-x-3 mb-4",children:[r.jsx("button",{onClick:this.retry,className:"px-4 py-2 bg-red-600 text-white rounded hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-red-500",children:"重试"}),r.jsx("button",{onClick:()=>window.location.reload(),className:"px-4 py-2 bg-gray-600 text-white rounded hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-gray-500",children:"刷新页面"})]}),r.jsxs("details",{className:"text-sm",children:[r.jsx("summary",{className:"cursor-pointer font-medium text-red-700 mb-2",children:"技术详情"}),r.jsxs("div",{className:"space-y-2",children:[r.jsxs("div",{children:[r.jsx("span",{className:"font-medium text-red-800",children:"错误ID:"}),r.jsx("span",{className:"ml-2 font-mono text-red-600",children:this.state.errorId})]}),r.jsxs("div",{children:[r.jsx("span",{className:"font-medium text-red-800",children:"错误信息:"}),r.jsx("pre",{className:"mt-1 p-2 bg-red-100 rounded text-xs overflow-auto text-red-700",children:this.state.error.toString()})]}),this.state.errorInfo&&r.jsxs("div",{children:[r.jsx("span",{className:"font-medium text-red-800",children:"组件堆栈:"}),r.jsx("pre",{className:"mt-1 p-2 bg-red-100 rounded text-xs overflow-auto text-red-700",children:this.state.errorInfo.componentStack})]})]})]})]})]})}):this.props.children}}const E=()=>{const[t,e]=i.useState(null);if(t)throw t;return{resetError:()=>e(null),captureError:s=>e(s)}},d=({shouldThrow:t=!1,errorType:e="render"})=>{const[o,n]=i.useState(0),{captureError:s}=E(),a=()=>{switch(e){case"render":throw new Error("渲染错误：组件渲染时发生错误");case"event":s(new Error("事件错误：按钮点击时发生错误"));break;case"async":setTimeout(()=>{s(new Error("异步错误：异步操作中发生错误"))},1e3);break;default:throw new Error("未知错误类型")}};return t&&e==="render"&&a(),r.jsxs("div",{className:"p-4 bg-green-50 border border-green-200 rounded-lg",children:[r.jsx("h4",{className:"text-lg font-semibold text-green-800 mb-2",children:"正常组件"}),r.jsxs("p",{className:"text-green-600 mb-3",children:["计数器: ",o]}),r.jsxs("div",{className:"space-x-2",children:[r.jsx("button",{onClick:()=>n(l=>l+1),className:"px-3 py-1 bg-green-600 text-white rounded hover:bg-green-700",children:"增加计数"}),r.jsxs("button",{onClick:()=>a(),className:"px-3 py-1 bg-red-600 text-white rounded hover:bg-red-700",children:["触发",e==="render"?"渲染":e==="event"?"事件":"异步","错误"]})]})]})},f=()=>{const[t,e]=i.useState(!1);return r.jsxs("div",{className:"space-y-4",children:[r.jsxs("div",{className:"flex items-center space-x-4",children:[r.jsx("button",{onClick:()=>e(!t),className:`px-4 py-2 rounded text-white ${t?"bg-green-600 hover:bg-green-700":"bg-red-600 hover:bg-red-700"}`,children:t?"修复错误":"触发错误"}),r.jsxs("span",{className:"text-sm text-gray-600",children:["状态: ",t?"错误状态":"正常状态"]})]}),r.jsx(h,{onError:(o,n)=>{console.log("错误被捕获:",o.message)},children:r.jsx(d,{shouldThrow:t,errorType:"render"})})]})},y=()=>{const[t,e]=i.useState([]),o=(s,a,l)=>{const p=`[${new Date().toLocaleTimeString()}] ${l}: ${s.message}`;e(m=>[...m,p])},n=(s,a)=>r.jsxs("div",{className:"p-6 bg-orange-50 border border-orange-200 rounded-lg",children:[r.jsxs("div",{className:"flex items-center space-x-3 mb-4",children:[r.jsx("svg",{className:"w-8 h-8 text-orange-600",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",children:r.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"})}),r.jsxs("div",{children:[r.jsx("h3",{className:"text-lg font-semibold text-orange-800",children:"自定义错误界面"}),r.jsx("p",{className:"text-orange-600",children:"使用自定义fallback渲染的错误界面"})]})]}),r.jsxs("div",{className:"flex space-x-3",children:[r.jsx("button",{onClick:a,className:"px-4 py-2 bg-orange-600 text-white rounded hover:bg-orange-700",children:"重新加载组件"}),r.jsx("button",{onClick:()=>window.history.back(),className:"px-4 py-2 bg-gray-600 text-white rounded hover:bg-gray-700",children:"返回上页"})]}),r.jsxs("div",{className:"mt-4 text-sm text-orange-700",children:[r.jsx("strong",{children:"错误:"})," ",s.message]})]});return r.jsxs("div",{className:"space-y-4",children:[r.jsx(b,{fallback:n,onError:o,children:r.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-4",children:[r.jsx(d,{shouldThrow:!1,errorType:"event"}),r.jsx(d,{shouldThrow:!1,errorType:"async"})]})}),t.length>0&&r.jsxs("div",{className:"p-4 bg-gray-50 border border-gray-200 rounded-lg",children:[r.jsx("h4",{className:"font-semibold text-gray-800 mb-2",children:"错误日志"}),r.jsx("div",{className:"space-y-1 text-sm font-mono text-gray-600",children:t.map((s,a)=>r.jsx("div",{className:"p-2 bg-white rounded border",children:s},a))}),r.jsx("button",{onClick:()=>e([]),className:"mt-2 px-3 py-1 bg-gray-600 text-white rounded hover:bg-gray-700 text-sm",children:"清空日志"})]})]})},v=()=>r.jsxs("div",{className:"space-y-4",children:[r.jsx("div",{className:"text-sm text-gray-600 mb-4",children:r.jsx("p",{children:"多个错误边界可以嵌套使用，内层错误边界优先捕获错误。"})}),r.jsx(h,{fallback:r.jsxs("div",{className:"p-4 bg-purple-50 border border-purple-200 rounded-lg",children:[r.jsx("h4",{className:"text-lg font-semibold text-purple-800",children:"外层错误边界"}),r.jsx("p",{className:"text-purple-600",children:"外层错误边界捕获了错误"})]}),children:r.jsxs("div",{className:"p-4 bg-blue-50 border border-blue-200 rounded-lg",children:[r.jsx("h4",{className:"text-lg font-semibold text-blue-800 mb-3",children:"外层组件"}),r.jsx(h,{fallback:r.jsxs("div",{className:"p-3 bg-yellow-50 border border-yellow-200 rounded",children:[r.jsx("h5",{className:"font-semibold text-yellow-800",children:"内层错误边界"}),r.jsx("p",{className:"text-yellow-600 text-sm",children:"内层错误边界捕获了错误"})]}),children:r.jsxs("div",{className:"p-3 bg-green-50 border border-green-200 rounded",children:[r.jsx("h5",{className:"font-semibold text-green-800 mb-2",children:"内层组件"}),r.jsx(d,{shouldThrow:!1,errorType:"event"})]})})]})})]}),k=()=>{const t={title:"错误边界 (Error Boundaries)",description:"错误边界是React组件，用于捕获并处理子组件树中的JavaScript错误，防止整个应用崩溃。",overview:r.jsxs("div",{className:"space-y-4",children:[r.jsxs("div",{children:[r.jsx("h3",{className:"text-lg font-semibold text-gray-800 mb-2",children:"概念"}),r.jsx("p",{className:"text-gray-600",children:"错误边界是一种React组件，它可以捕获发生在其子组件树任何位置的JavaScript错误， 记录这些错误，并展示一个备用UI而不是让整个组件树崩溃。错误边界只能使用类组件实现。"})]}),r.jsxs("div",{children:[r.jsx("h3",{className:"text-lg font-semibold text-gray-800 mb-2",children:"工作原理"}),r.jsxs("ul",{className:"list-disc list-inside text-gray-600 space-y-1",children:[r.jsx("li",{children:"getDerivedStateFromError() - 渲染备用UI"}),r.jsx("li",{children:"componentDidCatch() - 记录错误信息"}),r.jsx("li",{children:"只捕获子组件的错误，不捕获自身错误"}),r.jsx("li",{children:"只捕获渲染期间、生命周期方法和构造函数中的错误"})]})]}),r.jsxs("div",{children:[r.jsx("h3",{className:"text-lg font-semibold text-gray-800 mb-2",children:"不能捕获的错误"}),r.jsxs("ul",{className:"list-disc list-inside text-gray-600 space-y-1",children:[r.jsx("li",{children:"事件处理器中的错误"}),r.jsx("li",{children:"异步代码中的错误（setTimeout、Promise等）"}),r.jsx("li",{children:"服务端渲染期间的错误"}),r.jsx("li",{children:"错误边界自身抛出的错误"})]})]}),r.jsxs("div",{children:[r.jsx("h3",{className:"text-lg font-semibold text-gray-800 mb-2",children:"使用场景"}),r.jsxs("ul",{className:"list-disc list-inside text-gray-600 space-y-1",children:[r.jsx("li",{children:"防止单个组件错误导致整个应用崩溃"}),r.jsx("li",{children:"提供用户友好的错误界面"}),r.jsx("li",{children:"记录和上报错误信息"}),r.jsx("li",{children:"在开发环境中调试组件错误"})]})]})]}),examples:[{title:"基础错误边界",description:"展示基本的错误边界实现和错误捕获机制",component:r.jsx(f,{}),observationPoints:['点击"触发错误"按钮观察错误边界如何捕获渲染错误',"错误发生时组件树不会完全崩溃，而是显示备用UI","查看控制台中的错误日志记录",'点击"修复错误"按钮观察组件如何恢复正常状态'],keyPoints:["getDerivedStateFromError静态方法用于更新状态","componentDidCatch生命周期方法用于记录错误信息","错误边界只捕获子组件树中的错误，不捕获自身错误","提供fallback UI确保用户体验的连续性"],commonTraps:["误以为错误边界能捕获所有类型的错误","在错误边界的render方法中抛出新的错误","忘记在componentDidCatch中记录错误信息","没有提供用户友好的错误恢复机制"],solutions:["理解错误边界的捕获范围和限制","确保错误边界自身的代码健壮性","实现完整的错误记录和上报机制","提供重试、刷新等错误恢复选项"],importantTips:["错误边界只能使用类组件实现，函数组件无法直接实现","getDerivedStateFromError在渲染阶段调用，不能有副作用","componentDidCatch在提交阶段调用，可以执行副作用操作","错误边界应该放在组件树的合适位置以控制错误影响范围"],codeExample:{title:"基础错误边界实现",language:"tsx",code:`class BasicErrorBoundary extends Component<ErrorBoundaryProps, ErrorBoundaryState> {
  constructor(props: ErrorBoundaryProps) {
    super(props);
    this.state = { hasError: false }; // ← 重点：初始化错误状态
  }

  // ← 重点：静态方法，用于更新状态以显示错误UI
  static getDerivedStateFromError(error: Error): ErrorBoundaryState {
    return { hasError: true, error }; // ← 重点：返回新状态触发重新渲染
  }

  // ← 重点：生命周期方法，用于记录错误信息
  componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    console.error('ErrorBoundary caught an error:', error, errorInfo); // ← 重点：记录错误到控制台
    this.setState({ errorInfo });

    // ← 重点：调用错误回调函数
    if (this.props.onError) {
      this.props.onError(error, errorInfo);
    }
  }

  render() {
    if (this.state.hasError) {
      // ← 重点：渲染自定义错误UI
      if (this.props.fallback) {
        return this.props.fallback;
      }

      return (
        <div className="p-4 bg-red-50 border border-red-200 rounded-lg">
          <h3 className="text-lg font-semibold text-red-800 mb-2">出现错误</h3>
          <p className="text-red-600 mb-2">抱歉，组件渲染时发生了错误。</p>
        </div>
      );
    }

    return this.props.children; // ← 重点：正常渲染子组件
  }
}`,highlights:[4,7,9,12,14,17,18,25,37]}},{title:"高级错误边界",description:"包含重试功能、错误日志和自定义fallback的高级错误边界实现",component:r.jsx(y,{}),observationPoints:['点击"触发事件错误"和"触发异步错误"按钮测试不同类型的错误',"观察自定义fallback UI的渲染效果",'使用"重新加载组件"按钮测试错误恢复功能',"查看错误日志面板中的详细错误记录"],keyPoints:["自定义fallback函数提供更灵活的错误UI","错误ID生成机制便于错误追踪和调试","重试机制允许用户从错误状态中恢复","错误日志记录便于问题分析和监控"],commonTraps:["在错误边界中创建内存泄漏（如未清理定时器）","错误恢复逻辑不完整导致状态不一致","错误上报过于频繁影响性能","自定义fallback函数中抛出新错误"],solutions:["在componentWillUnmount中清理所有资源","确保错误恢复时完全重置组件状态","实现错误上报的节流和去重机制","确保fallback函数的健壮性和错误处理"],importantTips:["高级错误边界应该包含完整的错误恢复机制","错误ID有助于在分布式系统中追踪问题","自定义fallback函数应该处理各种错误场景","错误边界可以与监控服务集成实现自动化错误上报"],codeExample:{title:"高级错误边界实现",language:"tsx",code:`class AdvancedErrorBoundary extends Component<AdvancedErrorBoundaryProps, AdvancedErrorBoundaryState> {
  private retryTimeoutId: number | null = null; // ← 重点：用于管理重试定时器

  constructor(props: AdvancedErrorBoundaryProps) {
    super(props);
    this.state = {
      hasError: false,
      errorId: this.generateErrorId() // ← 重点：生成唯一错误ID用于追踪
    };
  }

  // ← 重点：生成唯一错误标识，便于错误追踪和调试
  private generateErrorId(): string {
    return \`error_\${Date.now()}_\${Math.random().toString(36).substr(2, 9)}\`;
  }

  // ← 重点：静态方法，捕获错误并更新状态
  static getDerivedStateFromError(error: Error): Partial<AdvancedErrorBoundaryState> {
    return { hasError: true, error }; // ← 重点：返回部分状态更新
  }

  // ← 重点：捕获错误并记录详细信息
  componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    const errorId = this.generateErrorId(); // ← 重点：为每个错误生成唯一ID
    console.error(\`[\${errorId}] ErrorBoundary caught an error:\`, error, errorInfo);

    this.setState({ errorInfo, errorId }); // ← 重点：更新状态保存错误信息

    // ← 重点：调用错误回调，传递错误ID用于外部处理
    if (this.props.onError) {
      this.props.onError(error, errorInfo, errorId);
    }
  }

  // ← 重点：清理资源，防止内存泄漏
  componentWillUnmount() {
    if (this.retryTimeoutId) {
      clearTimeout(this.retryTimeoutId);
    }
  }

  // ← 重点：重试机制，允许用户从错误状态恢复
  retry = () => {
    this.setState({
      hasError: false,
      error: undefined,
      errorInfo: undefined,
      errorId: this.generateErrorId() // ← 重点：生成新的错误ID用于新的错误追踪
    });
  };

  render() {
    if (this.state.hasError && this.state.error) {
      // ← 重点：使用自定义fallback函数提供灵活的错误UI
      if (this.props.fallback) {
        return this.props.fallback(this.state.error, this.retry);
      }

      // ← 重点：默认的高级错误UI，包含重试功能
      return (
        <div className="p-6 bg-red-50 border border-red-200 rounded-lg">
          <h3 className="text-lg font-semibold text-red-800 mb-2">组件错误</h3>
          <div className="flex space-x-3 mb-4">
            <button onClick={this.retry} className="px-4 py-2 bg-red-600 text-white rounded">
              重试
            </button>
          </div>
        </div>
      );
    }

    return this.props.children; // ← 重点：正常情况下渲染子组件
  }
}`,highlights:[1,3,6,8,14,21,27,33,38,42,50]}},{title:"多层错误边界",description:"演示多个错误边界的嵌套使用和错误冒泡机制",component:r.jsx(v,{}),observationPoints:["观察内层错误边界如何优先捕获子组件的错误","测试内层错误边界失效时外层边界的接管机制","理解错误边界的层级关系和错误冒泡过程","对比不同层级错误边界的UI展示效果"],keyPoints:["内层错误边界优先捕获错误，实现错误隔离","错误边界可以嵌套使用，形成多层防护","每层错误边界可以有不同的错误处理策略","合理的错误边界层级设计提高应用健壮性"],commonTraps:["错误边界层级过多导致调试困难","内外层错误边界职责不清晰","错误边界粒度设计不合理","忽视错误边界之间的交互影响"],solutions:["设计清晰的错误边界层级结构","为不同层级定义明确的错误处理职责","根据业务需求合理划分错误边界粒度","建立错误边界间的协调机制"],importantTips:["错误边界的嵌套应该遵循组件树的层级结构","内层错误边界应该处理具体的业务错误","外层错误边界应该处理系统级的通用错误","避免过度嵌套导致的性能和维护问题"],codeExample:{title:"多层错误边界使用",language:"tsx",code:`// 外层错误边界 - 处理系统级错误
const AppErrorBoundary: React.FC = ({ children }) => (
  <BasicErrorBoundary
    fallback={
      <div className="p-4 bg-purple-50 border border-purple-200 rounded-lg">
        <h4 className="text-lg font-semibold text-purple-800">系统错误</h4>
        <p className="text-purple-600">应用遇到了系统级错误</p>
      </div>
    }
  >
    {children}
  </BasicErrorBoundary>
);

// 内层错误边界 - 处理功能模块错误
const FeatureErrorBoundary: React.FC = ({ children }) => (
  <BasicErrorBoundary
    fallback={
      <div className="p-3 bg-yellow-50 border border-yellow-200 rounded">
        <h5 className="font-semibold text-yellow-800">功能错误</h5>
        <p className="text-yellow-600 text-sm">该功能模块出现错误</p>
      </div>
    }
  >
    {children}
  </BasicErrorBoundary>
);

// 使用多层错误边界
const App: React.FC = () => (
  <AppErrorBoundary>
    <div className="app-container">
      <Header />
      <FeatureErrorBoundary>
        <MainContent />
      </FeatureErrorBoundary>
      <Footer />
    </div>
  </AppErrorBoundary>
);`,highlights:[2,3,16,17,30,31,33,34]}}],codeExamples:[{title:"基础错误边界实现",code:`class ErrorBoundary extends Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false }; // ← 重点：初始化错误状态
  }

  // ← 重点：静态方法，捕获错误并更新状态
  static getDerivedStateFromError(error) {
    // ← 重点：更新state以显示错误UI
    return { hasError: true };
  }

  // ← 重点：生命周期方法，处理错误信息
  componentDidCatch(error, errorInfo) {
    // ← 重点：记录错误信息到控制台
    console.error('ErrorBoundary caught an error:', error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      // ← 重点：渲染自定义错误UI
      return (
        <div className="error-fallback">
          <h2>出现了错误</h2>
          <p>抱歉，组件渲染时发生了错误。</p>
        </div>
      );
    }

    // ← 重点：正常渲染子组件
    return this.props.children;
  }
}

// ← 重点：使用错误边界包装组件
<ErrorBoundary>
  <MyComponent />
</ErrorBoundary>`,language:"tsx",description:"基础错误边界包含两个关键生命周期方法：getDerivedStateFromError和componentDidCatch",highlights:[4,9,11,15,17,23,32,37,38]},{title:"带重试功能的错误边界",code:`class AdvancedErrorBoundary extends Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false, error: null }; // ← 重点：包含错误对象的状态
  }

  // ← 重点：捕获错误并保存错误对象
  static getDerivedStateFromError(error) {
    return { hasError: true, error }; // ← 重点：保存完整的错误对象
  }

  // ← 重点：错误处理和上报
  componentDidCatch(error, errorInfo) {
    // ← 重点：上报错误到监控服务
    this.logErrorToService(error, errorInfo);
  }

  // ← 重点：错误日志记录方法
  logErrorToService = (error, errorInfo) => {
    // ← 重点：发送错误信息到监控服务
    console.error('Error logged:', error, errorInfo);
    // ← 重点：这里可以集成第三方监控服务
    // errorReportingService.report(error, errorInfo);
  };

  // ← 重点：重试机制，重置错误状态
  retry = () => {
    this.setState({ hasError: false, error: null });
  };

  render() {
    if (this.state.hasError) {
      return (
        <div className="error-boundary">
          <h2>组件错误</h2>
          <p>错误信息: {this.state.error?.message}</p>
          <button onClick={this.retry}>重试</button> {/* ← 重点：重试按钮 */}
          <button onClick={() => window.location.reload()}>
            刷新页面
          </button>
        </div>
      );
    }

    // ← 重点：正常渲染子组件
    return this.props.children;
  }
}`,language:"tsx",description:"高级错误边界包含重试功能、错误上报和详细的错误信息展示",highlights:[4,9,11,14,16,20,22,24,28,39,47]},{title:"函数组件中的错误处理",code:`// ← 重点：自定义Hook模拟错误边界功能
const useErrorBoundary = () => {
  const [error, setError] = useState(null); // ← 重点：错误状态管理

  // ← 重点：如果有错误，抛出给上层错误边界处理
  if (error) {
    throw error;
  }

  // ← 重点：重置错误状态的方法
  const resetError = () => setError(null);
  // ← 重点：捕获错误并设置状态的方法
  const captureError = (error) => setError(error);

  return { resetError, captureError };
};

// ← 重点：在函数组件中使用错误处理Hook
const MyComponent = () => {
  const { captureError } = useErrorBoundary();

  // ← 重点：处理异步操作中的错误
  const handleAsyncError = async () => {
    try {
      await riskyAsyncOperation();
    } catch (error) {
      captureError(error); // ← 重点：捕获异步错误并传递给错误边界
    }
  };

  // ← 重点：处理同步操作中的错误
  const handleEventError = () => {
    try {
      riskyOperation();
    } catch (error) {
      captureError(error); // ← 重点：捕获同步错误并传递给错误边界
    }
  };

  return (
    <div>
      <button onClick={handleEventError}>可能出错的操作</button>
      <button onClick={handleAsyncError}>异步操作</button>
    </div>
  );
};`,language:"tsx",description:"函数组件中通过自定义Hook处理错误，配合上层错误边界使用",highlights:[1,3,5,7,12,14,20,24,29,33,38]}],tutorial:{concepts:["错误边界是React类组件，用于捕获子组件树中的错误","getDerivedStateFromError用于渲染备用UI","componentDidCatch用于记录错误信息","只捕获渲染期间、生命周期和构造函数中的错误","不能捕获事件处理器和异步代码中的错误"],steps:["创建继承自Component的错误边界类","实现getDerivedStateFromError静态方法","实现componentDidCatch生命周期方法","在render方法中根据错误状态渲染UI","用错误边界包装可能出错的组件","添加错误恢复和重试机制","集成错误监控和上报服务"],tips:["错误边界应该放在组件树的合适位置","提供有意义的错误信息和恢复选项","在开发环境中保留详细的错误信息","在生产环境中隐藏敏感的错误详情","考虑错误边界的粒度，避免过度包装","结合错误监控服务进行错误追踪"]},interview:{questions:[{question:"什么是错误边界？它解决了什么问题？",answer:"错误边界是React组件，用于捕获子组件树中的JavaScript错误。它解决了单个组件错误导致整个应用崩溃的问题，通过显示备用UI保证应用的稳定性和用户体验。"},{question:"错误边界的两个关键生命周期方法是什么？",answer:"getDerivedStateFromError和componentDidCatch。前者用于更新状态以渲染备用UI，后者用于记录错误信息。getDerivedStateFromError在渲染阶段调用，componentDidCatch在提交阶段调用。"},{question:"错误边界不能捕获哪些类型的错误？",answer:"错误边界不能捕获：1) 事件处理器中的错误；2) 异步代码中的错误；3) 服务端渲染期间的错误；4) 错误边界自身抛出的错误。这些错误需要使用try-catch或其他方式处理。"},{question:"如何在函数组件中处理错误？",answer:"函数组件不能直接实现错误边界，但可以：1) 使用类组件错误边界包装；2) 创建自定义Hook模拟错误边界行为；3) 在事件处理器和异步操作中使用try-catch；4) 使用第三方库如react-error-boundary。"},{question:"错误边界的最佳实践有哪些？",answer:"最佳实践包括：1) 在合适的组件层级设置错误边界；2) 提供有意义的错误信息和恢复选项；3) 集成错误监控服务；4) 区分开发和生产环境的错误处理；5) 避免在错误边界中抛出新错误；6) 考虑错误边界的粒度。"}],keyPoints:["错误边界防止单个组件错误导致整个应用崩溃","只能使用类组件实现，包含两个关键生命周期方法","只捕获渲染期间、生命周期和构造函数中的错误","不能捕获事件处理器和异步代码中的错误","应该提供错误恢复机制和用户友好的界面","结合错误监控服务进行错误追踪和分析"]},bestPractices:{dos:["在组件树的合适位置设置错误边界","提供清晰的错误信息和恢复选项","集成错误监控和上报服务","在开发环境中显示详细错误信息","实现错误重试和恢复机制","考虑错误边界的粒度和范围"],donts:["不要在错误边界的render方法中抛出错误","不要过度使用错误边界包装每个组件","不要忽略错误边界无法捕获的错误类型","不要在生产环境中暴露敏感错误信息","不要依赖错误边界处理所有类型的错误","不要忘记在错误边界中清理资源"],patterns:["全局错误边界模式 - 在应用根部设置错误边界","功能模块边界模式 - 为每个功能模块设置错误边界","组件级边界模式 - 为关键组件设置专门的错误边界","错误恢复模式 - 提供重试和重置功能","错误上报模式 - 集成监控服务自动上报错误"]}};return r.jsx(g,{...t})};export{k as default};
