var h=Object.defineProperty;var u=(o,a,t)=>a in o?h(o,a,{enumerable:!0,configurable:!0,writable:!0,value:t}):o[a]=t;var n=(o,a,t)=>u(o,typeof a!="symbol"?a+"":a,t);import{j as e,R as c,r as i}from"./index-MmCcWZhd.js";import{C as g}from"./ComponentTemplate-DoUPe1QN.js";class x extends i.Component{render(){return e.jsxs("div",{className:"p-4 border border-gray-200 rounded-lg",children:[e.jsx("h3",{className:"text-lg font-semibold mb-2",children:"基础类组件"}),e.jsx("p",{className:"text-gray-600",children:"这是一个最简单的类组件，继承自React.Component。"})]})}}class v extends i.Component{render(){const{name:a,email:t,avatar:s}=this.props;return e.jsxs("div",{className:"p-4 border border-blue-200 rounded-lg bg-blue-50",children:[e.jsx("h3",{className:"text-lg font-semibold mb-2",children:"带Props的类组件"}),e.jsxs("div",{className:"flex items-center space-x-3",children:[e.jsx("div",{className:"w-12 h-12 bg-blue-500 rounded-full flex items-center justify-center text-white font-bold",children:s||a.charAt(0).toUpperCase()}),e.jsxs("div",{children:[e.jsx("p",{className:"font-medium text-blue-800",children:a}),e.jsx("p",{className:"text-sm text-blue-600",children:t})]})]})]})}}class S extends i.Component{constructor(t){super(t);n(this,"increment",()=>{this.setState(t=>({count:t.count+t.step}))});n(this,"decrement",()=>{this.setState(t=>({count:t.count-t.step}))});n(this,"reset",()=>{this.setState({count:0})});n(this,"changeStep",t=>{this.setState({step:t})});this.state={count:0,step:1}}render(){const{count:t,step:s}=this.state;return e.jsxs("div",{className:"p-4 border border-green-200 rounded-lg bg-green-50",children:[e.jsx("h3",{className:"text-lg font-semibold mb-2",children:"带State的类组件"}),e.jsxs("div",{className:"space-y-3",children:[e.jsxs("p",{className:"text-green-700",children:["当前计数: ",e.jsx("span",{className:"font-bold text-xl",children:t})]}),e.jsxs("p",{className:"text-green-600",children:["步长: ",s]}),e.jsxs("div",{className:"flex flex-wrap gap-2",children:[e.jsxs("button",{onClick:this.increment,className:"px-3 py-1 bg-green-600 text-white rounded hover:bg-green-700 transition-colors",children:["+",s]}),e.jsxs("button",{onClick:this.decrement,className:"px-3 py-1 bg-red-600 text-white rounded hover:bg-red-700 transition-colors",children:["-",s]}),e.jsx("button",{onClick:this.reset,className:"px-3 py-1 bg-gray-600 text-white rounded hover:bg-gray-700 transition-colors",children:"重置"})]}),e.jsxs("div",{className:"flex gap-2",children:[e.jsx("span",{className:"text-sm text-green-600",children:"步长:"}),[1,2,5,10].map(r=>e.jsx("button",{onClick:()=>this.changeStep(r),className:`px-2 py-1 text-xs rounded transition-colors ${s===r?"bg-green-600 text-white":"bg-white text-green-600 border border-green-600 hover:bg-green-50"}`,children:r},r))]})]})]})}}class b extends i.Component{constructor(t){super(t);n(this,"intervalId",null);n(this,"startTimer",()=>{this.intervalId=setInterval(()=>{this.setState(t=>({seconds:t.seconds+1}))},1e3)});n(this,"stopTimer",()=>{this.intervalId&&(clearInterval(this.intervalId),this.intervalId=null)});n(this,"toggleTimer",()=>{this.setState(t=>({isRunning:!t.isRunning}))});n(this,"resetTimer",()=>{this.setState({seconds:0,isRunning:!1})});n(this,"formatTime",t=>{const s=Math.floor(t/60),r=t%60;return`${s.toString().padStart(2,"0")}:${r.toString().padStart(2,"0")}`});this.state={seconds:0,isRunning:!1}}componentDidMount(){console.log("Timer组件已挂载")}componentDidUpdate(t,s){s.isRunning!==this.state.isRunning&&(this.state.isRunning?this.startTimer():this.stopTimer())}componentWillUnmount(){this.stopTimer(),console.log("Timer组件将要卸载")}render(){const{seconds:t,isRunning:s}=this.state;return e.jsxs("div",{className:"p-4 border border-purple-200 rounded-lg bg-purple-50",children:[e.jsx("h3",{className:"text-lg font-semibold mb-2",children:"带生命周期的类组件"}),e.jsxs("div",{className:"space-y-3",children:[e.jsxs("div",{className:"text-center",children:[e.jsx("div",{className:"text-3xl font-mono font-bold text-purple-800",children:this.formatTime(t)}),e.jsxs("p",{className:"text-sm text-purple-600 mt-1",children:["状态: ",s?"运行中":"已停止"]})]}),e.jsxs("div",{className:"flex justify-center space-x-2",children:[e.jsx("button",{onClick:this.toggleTimer,className:`px-4 py-2 rounded font-medium transition-colors ${s?"bg-red-600 text-white hover:bg-red-700":"bg-green-600 text-white hover:bg-green-700"}`,children:s?"暂停":"开始"}),e.jsx("button",{onClick:this.resetTimer,className:"px-4 py-2 bg-gray-600 text-white rounded font-medium hover:bg-gray-700 transition-colors",children:"重置"})]})]})]})}}class f extends i.Component{constructor(t){super(t);n(this,"intervalId",null);n(this,"containerRef",c.createRef());n(this,"fetchData",async()=>{console.log("📡 开始获取数据..."),this.setState({loading:!0,error:null});try{await new Promise(s=>setTimeout(s,1e3));const t=[`用户${this.props.userId}的数据项 ${Date.now()}`,`数据更新时间: ${new Date().toLocaleTimeString()}`,`随机数据: ${Math.random().toFixed(4)}`];this.setState(s=>({data:[...s.data,...t],loading:!1}))}catch(t){this.setState({error:t instanceof Error?t.message:"获取数据失败",loading:!1})}});n(this,"setupInterval",()=>{this.cleanup();const t=this.props.refreshInterval||5e3;t>0&&(this.intervalId=setInterval(this.fetchData,t),console.log(`⏰ 设置自动刷新间隔: ${t}ms`))});n(this,"cleanup",()=>{this.intervalId&&(clearInterval(this.intervalId),this.intervalId=null,console.log("🧹 清理定时器"))});n(this,"clearData",()=>{this.setState({data:[],error:null})});n(this,"triggerError",()=>{throw new Error("这是一个演示错误")});console.log("🏗️ Constructor: 组件实例创建"),this.state={data:[],loading:!1,error:null,scrollPosition:0}}static getDerivedStateFromProps(t,s){return console.log("📥 getDerivedStateFromProps: 从props派生state"),t.userId!==s.prevPropsId?{prevPropsId:t.userId,data:[],loading:!0,error:null}:null}componentDidMount(){console.log("🎯 componentDidMount: 组件已挂载到DOM"),this.fetchData(),this.setupInterval()}getSnapshotBeforeUpdate(t,s){return console.log("📸 getSnapshotBeforeUpdate: 获取更新前快照"),this.containerRef.current?{scrollTop:this.containerRef.current.scrollTop,hadData:s.data.length>0}:null}componentDidUpdate(t,s,r){console.log("🔄 componentDidUpdate: 组件已更新"),t.userId!==this.props.userId&&this.fetchData(),t.refreshInterval!==this.props.refreshInterval&&this.setupInterval(),r&&this.containerRef.current&&r.hadData&&this.state.data.length>r.hadData&&(this.containerRef.current.scrollTop=r.scrollTop)}componentWillUnmount(){console.log("🗑️ componentWillUnmount: 组件即将卸载"),this.cleanup()}static getDerivedStateFromError(t){return console.log("❌ getDerivedStateFromError: 捕获到错误"),{error:t.message,loading:!1}}componentDidCatch(t,s){console.log("🚨 componentDidCatch: 错误详情",t,s)}render(){console.log("🎨 render: 渲染组件");const{data:t,loading:s,error:r}=this.state,{userId:l,refreshInterval:p=5e3}=this.props;return r?e.jsxs("div",{className:"p-4 border border-red-200 rounded-lg bg-red-50",children:[e.jsx("h3",{className:"text-lg font-semibold mb-2 text-red-800",children:"完整生命周期示例 - 错误状态"}),e.jsxs("div",{className:"text-red-600 mb-3",children:["错误: ",r]}),e.jsx("button",{onClick:()=>this.setState({error:null}),className:"px-3 py-1 bg-red-600 text-white rounded hover:bg-red-700 transition-colors",children:"重试"})]}):e.jsxs("div",{className:"p-4 border border-indigo-200 rounded-lg bg-indigo-50",children:[e.jsx("h3",{className:"text-lg font-semibold mb-2 text-indigo-800",children:"完整生命周期示例 (React 16.8+)"}),e.jsxs("div",{className:"mb-3 text-sm text-indigo-600",children:[e.jsxs("p",{children:["用户ID: ",l," | 刷新间隔: ",p,"ms"]}),e.jsx("p",{className:"text-xs mt-1",children:"打开浏览器控制台查看生命周期方法调用日志"})]}),e.jsxs("div",{ref:this.containerRef,className:"max-h-32 overflow-y-auto bg-white p-2 rounded border mb-3",children:[t.length===0&&!s?e.jsx("p",{className:"text-gray-500 text-sm",children:"暂无数据"}):t.map((d,m)=>e.jsx("div",{className:"text-sm py-1 border-b border-gray-100 last:border-b-0",children:d},m)),s&&e.jsx("div",{className:"text-sm text-indigo-600 animate-pulse",children:"加载中..."})]}),e.jsxs("div",{className:"flex flex-wrap gap-2",children:[e.jsx("button",{onClick:this.fetchData,disabled:s,className:"px-3 py-1 bg-indigo-600 text-white rounded hover:bg-indigo-700 disabled:opacity-50 transition-colors text-sm",children:"手动刷新"}),e.jsx("button",{onClick:this.clearData,className:"px-3 py-1 bg-gray-600 text-white rounded hover:bg-gray-700 transition-colors text-sm",children:"清空数据"}),e.jsx("button",{onClick:this.triggerError,className:"px-3 py-1 bg-red-600 text-white rounded hover:bg-red-700 transition-colors text-sm",children:"触发错误"})]})]})}}const C=()=>e.jsx(x,{}),j=()=>e.jsx(v,{name:"李四",email:"lisi@example.com"}),D=()=>e.jsx(S,{}),P=()=>e.jsx(b,{}),y=()=>{const[o,a]=c.useState("001"),[t,s]=c.useState(5e3);return e.jsxs("div",{className:"space-y-3",children:[e.jsxs("div",{className:"flex gap-2 text-sm",children:[e.jsxs("label",{className:"flex items-center gap-1",children:["用户ID:",e.jsxs("select",{value:o,onChange:r=>a(r.target.value),className:"border rounded px-2 py-1",children:[e.jsx("option",{value:"001",children:"用户001"}),e.jsx("option",{value:"002",children:"用户002"}),e.jsx("option",{value:"003",children:"用户003"})]})]}),e.jsxs("label",{className:"flex items-center gap-1",children:["刷新间隔:",e.jsxs("select",{value:t,onChange:r=>s(Number(r.target.value)),className:"border rounded px-2 py-1",children:[e.jsx("option",{value:3e3,children:"3秒"}),e.jsx("option",{value:5e3,children:"5秒"}),e.jsx("option",{value:1e4,children:"10秒"}),e.jsx("option",{value:0,children:"关闭"})]})]})]}),e.jsx(f,{userId:o,refreshInterval:t})]})},U=()=>{const o={title:"类组件 (Class Components)",description:"类组件是React的传统组件形式，继承自React.Component，使用生命周期方法和this.state管理状态。虽然函数组件更现代，但理解类组件对维护旧代码和深入理解React仍然重要。",overview:e.jsxs("div",{className:"space-y-4",children:[e.jsxs("div",{children:[e.jsx("h3",{className:"text-lg font-semibold mb-2",children:"核心概念"}),e.jsx("p",{className:"text-gray-700",children:"类组件是React的传统组件形式，继承自React.Component，使用生命周期方法和this.state管理状态。 虽然函数组件更现代，但理解类组件对维护旧代码和深入理解React仍然重要。"})]}),e.jsxs("div",{children:[e.jsx("h3",{className:"text-lg font-semibold mb-2",children:"主要优势"}),e.jsxs("ul",{className:"list-disc list-inside space-y-1 text-gray-700",children:[e.jsx("li",{children:"完整生命周期 - 提供完整的组件生命周期方法，精确控制组件行为"}),e.jsx("li",{children:"内置状态管理 - 使用this.state和this.setState管理组件状态"}),e.jsx("li",{children:"错误边界支持 - 可以实现错误边界功能，捕获子组件错误"}),e.jsx("li",{children:"成熟稳定 - 经过长期验证，在复杂场景下表现稳定"}),e.jsx("li",{children:"丰富的生命周期钩子 - 提供多个生命周期方法满足不同需求"})]})]}),e.jsxs("div",{children:[e.jsx("h3",{className:"text-lg font-semibold mb-2",children:"适用场景"}),e.jsxs("ul",{className:"list-disc list-inside space-y-1 text-gray-700",children:[e.jsx("li",{children:"维护和升级现有的类组件代码"}),e.jsx("li",{children:"需要实现错误边界的场景"}),e.jsx("li",{children:"复杂的生命周期管理需求"}),e.jsx("li",{children:"与旧版React代码库的兼容"}),e.jsx("li",{children:"学习React核心概念和原理"})]})]})]}),examples:[{title:"示例1：基础类组件",description:"最简单的类组件，继承自React.Component",component:e.jsx(C,{}),observationPoints:["类组件必须继承React.Component或React.PureComponent","必须实现render()方法返回JSX元素","使用class关键字定义，遵循ES6类语法","组件名必须以大写字母开头（PascalCase）"],keyPoints:["类组件是React的传统组件形式，功能完整","render方法是唯一必需的方法","支持完整的生命周期方法和错误边界"],commonTraps:["忘记继承React.Component基类","忘记实现render方法","组件名首字母不大写"],solutions:["始终继承React.Component或React.PureComponent","确保render方法返回有效的JSX元素","使用PascalCase命名组件"],importantTips:["类组件是React的经典形式，虽然函数组件更现代，但类组件仍有其价值","render方法是类组件的核心，必须返回JSX元素或null","类组件支持完整的生命周期，适合复杂的状态管理场景"],codeExample:{title:"基础类组件",code:`// 类组件定义 - 继承React.Component
class BasicComponent extends React.Component {  // ← 重点：继承Component
  render() {  // ← 重点：必须实现render方法
    return (
      <div>
        <h1>Hello World</h1>
        <p>这是一个基础的类组件</p>
      </div>
    );
  }
}`,language:"typescript",highlights:[2,3],description:"类组件必须继承React.Component并实现render方法，这是最基础的形式。"}},{title:"示例2：带Props的类组件",description:"接收和使用props的类组件，支持TypeScript类型定义",component:e.jsx(j,{}),observationPoints:["使用TypeScript接口定义Props类型","通过this.props访问传入的属性","支持可选属性（avatar?）和必需属性","使用解构赋值简化props访问"],keyPoints:["TypeScript提供类型安全和编译时检查","Props是只读的，不能在组件内部修改","类组件通过this.props访问属性"],commonTraps:["尝试直接修改this.props的值","忘记定义Props接口类型","不处理可选属性的undefined情况"],solutions:["始终将props视为只读数据","为Props定义完整的TypeScript接口","使用条件渲染处理可选属性"],importantTips:["类组件通过this.props访问属性，这是与函数组件的主要区别之一","Props是不可变的，任何修改都应该通过状态管理或回调函数实现","TypeScript接口定义使Props的使用更加安全和清晰"],codeExample:{title:"带Props的类组件",code:`// Props接口定义
interface UserCardProps {
  name: string;    // ← 重点：必需属性
  email: string;
  avatar?: string; // ← 重点：可选属性
}

// 带Props的类组件
class UserCard extends React.Component<UserCardProps> {  // ← 重点：泛型指定Props类型
  render() {
    const { name, email, avatar } = this.props;  // ← 重点：通过this.props访问
    return (
      <div className="user-card">
        <h3>{name}</h3>
        <p>{email}</p>
        {avatar && <img src={avatar} alt={name} />}  // ← 重点：条件渲染
      </div>
    );
  }
}`,language:"typescript",highlights:[9,11,16],description:"类组件通过this.props访问属性，使用TypeScript接口确保类型安全。"}},{title:"示例3：带State的类组件",description:"使用this.state管理内部状态的类组件",component:e.jsx(D,{}),observationPoints:["在constructor中初始化this.state","使用this.setState()更新状态","setState是异步的，可能会批量更新","箭头函数方法避免this绑定问题"],keyPoints:["状态管理是类组件的核心功能","setState触发组件重新渲染","状态更新应该是不可变的"],commonTraps:["直接修改this.state而不使用setState","在setState中依赖当前状态值","忘记绑定事件处理函数的this"],solutions:["始终使用setState更新状态","使用函数式setState处理状态依赖","使用箭头函数或在constructor中绑定this"],importantTips:["类组件的状态管理通过this.state和this.setState实现，这是其核心优势","setState是异步的，不要依赖立即更新的状态值","箭头函数方法自动绑定this，避免了手动绑定的麻烦"],codeExample:{title:"带State的类组件",code:`interface CounterState {
  count: number;
  step: number;
}

class CounterComponent extends React.Component<{}, CounterState> {
  constructor(props: {}) {
    super(props);
    this.state = {  // ← 重点：在constructor中初始化状态
      count: 0,
      step: 1
    };
  }

  // 箭头函数自动绑定this
  increment = () => {  // ← 重点：箭头函数避免this绑定问题
    this.setState(prevState => ({  // ← 重点：函数式setState
      count: prevState.count + prevState.step
    }));
  };

  render() {
    return (
      <div>
        <p>计数: {this.state.count}</p>  // ← 重点：通过this.state访问状态
        <button onClick={this.increment}>增加</button>
      </div>
    );
  }
}`,language:"typescript",highlights:[9,16,17,25],description:"类组件通过this.state管理状态，使用this.setState更新状态并触发重新渲染。"}},{title:"示例4：生命周期方法示例",description:"展示完整生命周期方法的计时器组件",component:e.jsx(P,{}),observationPoints:["componentDidMount在组件挂载后执行","componentDidUpdate在组件更新后执行","componentWillUnmount在组件卸载前执行","生命周期方法提供了组件各个阶段的钩子"],keyPoints:["生命周期方法是类组件的独特优势","适合处理副作用和资源管理","每个生命周期方法都有特定的用途和时机"],commonTraps:["在componentWillUnmount中忘记清理资源","在componentDidUpdate中造成无限循环","在错误的生命周期方法中执行操作"],solutions:["在componentWillUnmount中清理定时器和事件监听","在componentDidUpdate中添加条件判断","根据需求选择合适的生命周期方法"],importantTips:["生命周期方法是类组件处理副作用的标准方式，每个方法都有特定用途","componentWillUnmount是清理资源的最佳时机，避免内存泄漏","componentDidUpdate需要条件判断，避免无限更新循环"],codeExample:{title:"生命周期方法示例",code:`class TimerComponent extends React.Component<{}, TimerState> {
  private intervalId: NodeJS.Timeout | null = null;

  // 组件挂载后执行
  componentDidMount() {  // ← 重点：组件挂载后的钩子
    console.log('Timer组件已挂载');
  }

  // 组件更新后执行
  componentDidUpdate(prevProps: {}, prevState: TimerState) {  // ← 重点：组件更新后的钩子
    if (prevState.isRunning !== this.state.isRunning) {
      console.log('定时器状态已改变');
    }
  }

  // 组件卸载前执行
  componentWillUnmount() {  // ← 重点：组件卸载前的钩子
    if (this.intervalId) {
      clearInterval(this.intervalId);  // ← 重点：清理资源
    }
  }

  render() {
    return <div>定时器组件</div>;
  }
}`,language:"typescript",highlights:[5,10,17,19],description:"生命周期方法提供了组件各个阶段的钩子，适合处理副作用和资源管理。"}},{title:"示例5：React 16.8+ 完整生命周期示例",description:"包含所有新旧生命周期方法的完整示例，支持错误边界和快照功能",component:e.jsx(y,{}),observationPoints:["getDerivedStateFromProps是静态方法，用于根据props更新state","getSnapshotBeforeUpdate在DOM更新前获取快照","componentDidCatch和getDerivedStateFromError处理错误边界","新的生命周期方法更安全，避免了异步渲染问题"],keyPoints:["React 16.3+引入了新的生命周期方法","错误边界可以捕获子组件的错误","快照功能可以保存DOM更新前的状态"],commonTraps:["在getDerivedStateFromProps中使用this","过度使用getDerivedStateFromProps","忘记在错误边界中更新状态"],solutions:["getDerivedStateFromProps是静态方法，不能访问this","只在必要时使用getDerivedStateFromProps","在错误边界方法中正确更新错误状态"],importantTips:["新的生命周期方法设计更安全，适应React的异步渲染特性","错误边界是类组件独有的功能，函数组件无法实现","getDerivedStateFromProps应该谨慎使用，大多数情况下不需要"],codeExample:{title:"完整生命周期示例",code:`class CompleteLifecycleComponent extends React.Component<Props, State> {
  // 静态方法：根据props派生state
  static getDerivedStateFromProps(nextProps: Props, prevState: State) {  // ← 重点：静态方法
    if (nextProps.userId !== prevState.prevPropsId) {
      return {
        prevPropsId: nextProps.userId,
        data: []  // 重置数据
      };
    }
    return null;
  }

  // 获取更新前的快照
  getSnapshotBeforeUpdate(prevProps: Props, prevState: State) {  // ← 重点：获取快照
    if (prevState.data.length < this.state.data.length) {
      return { scrollPosition: window.scrollY };
    }
    return null;
  }

  // 错误边界：派生错误状态
  static getDerivedStateFromError(error: Error) {  // ← 重点：错误边界
    return { error: error.message };
  }

  // 错误边界：捕获错误
  componentDidCatch(error: Error, errorInfo: React.ErrorInfo) {  // ← 重点：捕获错误
    console.error('组件错误:', error, errorInfo);
  }
}`,language:"typescript",highlights:[3,14,22,27],description:"新的生命周期方法提供了更安全的组件更新机制和错误处理能力。"}}],codeExamples:[{title:"基础类组件",code:`class BasicComponent extends React.Component {
  render() {
    return (
      <div>
        <h1>Hello World</h1>
        <p>这是一个基础类组件</p>
      </div>
    );
  }
}`,language:"typescript",description:"类组件必须继承React.Component，并实现render方法返回JSX。"},{title:"带Props的类组件",code:`interface UserProps {
  name: string;
  age?: number;
  email: string;
}

class UserProfile extends React.Component<UserProps> {
  render() {
    const { name, age, email } = this.props;
    return (
      <div className="user-profile">
        <h2>{name}</h2>
        {age && <p>年龄: {age}</p>}
        <p>邮箱: {email}</p>
      </div>
    );
  }
}`,language:"typescript",description:"使用泛型定义Props类型，通过this.props访问传入的属性。"},{title:"带State的类组件",code:`interface CounterState {
  count: number;
}

class Counter extends React.Component<{}, CounterState> {
  constructor(props: {}) {
    super(props);
    this.state = {
      count: 0
    };
  }

  increment = () => {
    this.setState(prevState => ({
      count: prevState.count + 1
    }));
  };

  render() {
    return (
      <div>
        <p>计数: {this.state.count}</p>
        <button onClick={this.increment}>增加</button>
      </div>
    );
  }
}`,language:"typescript",description:"在constructor中初始化state，使用this.setState更新状态。"},{title:"生命周期方法",code:`class LifecycleDemo extends React.Component<{}, { data: any }> {
  constructor(props: {}) {
    super(props);
    this.state = { data: null };
  }

  componentDidMount() {
    // 组件挂载后执行
    this.fetchData();
  }

  componentDidUpdate(prevProps: {}, prevState: { data: any }) {
    // 组件更新后执行
    if (prevState.data !== this.state.data) {
      console.log('数据已更新');
    }
  }

  componentWillUnmount() {
    // 组件卸载前执行清理
    this.cleanup();
  }

  fetchData = async () => {
    const data = await fetch('/api/data');
    this.setState({ data });
  };

  cleanup = () => {
    // 清理定时器、事件监听器等
  };

  render() {
    return <div>{this.state.data ? 'Data loaded' : 'Loading...'}</div>;
  }
}`,language:"typescript",description:"生命周期方法让你可以在组件的不同阶段执行特定逻辑。"},{title:"React 16.8+ 新生命周期方法",code:`class NewLifecycleComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = { data: [], error: null };
  }

  static getDerivedStateFromProps(nextProps, prevState) {
    // 从props派生state
    if (nextProps.reset && prevState.data.length > 0) {
      return { data: [] };
    }
    return null;
  }

  getSnapshotBeforeUpdate(prevProps, prevState) {
    // 获取更新前的快照
    return prevState.data.length;
  }

  componentDidUpdate(prevProps, prevState, snapshot) {
    // 使用快照信息
    console.log('Previous data length:', snapshot);
  }

  static getDerivedStateFromError(error) {
    return { error: error.message };
  }

  componentDidCatch(error, errorInfo) {
    console.error('Error caught:', error);
  }

  render() {
    if (this.state.error) {
      return <div>Error: {this.state.error}</div>;
    }
    return <div>New Lifecycle Component</div>;
  }
}`,language:"typescript",description:"React 16.3+引入了新的生命周期方法，包括getDerivedStateFromProps、getSnapshotBeforeUpdate和错误边界方法。"}],keyPoints:[{title:"类组件的定义",content:"类组件必须继承React.Component，并实现render方法。使用class关键字定义，组件名必须以大写字母开头。",importance:"high"},{title:"Props和State",content:"通过this.props访问属性，通过this.state访问状态。使用this.setState更新状态，不能直接修改state。",importance:"high"},{title:"生命周期方法",content:"提供完整的生命周期钩子：constructor、componentDidMount、componentDidUpdate、componentWillUnmount等。",importance:"high"},{title:"this绑定",content:"类方法需要正确绑定this。推荐使用箭头函数或在constructor中绑定，避免在render中绑定。",importance:"medium"},{title:"错误边界",content:"只有类组件可以实现错误边界，通过componentDidCatch和getDerivedStateFromError方法捕获错误。",importance:"medium"}],tutorial:{concepts:["类组件继承自React.Component，必须实现render方法","使用this.state管理组件状态，通过this.setState更新状态","提供完整的生命周期方法控制组件的挂载、更新和卸载","需要正确处理this绑定问题，推荐使用箭头函数","可以实现错误边界功能，捕获子组件的错误","支持TypeScript类型定义，通过泛型指定Props和State类型"],steps:["创建基础类组件：继承React.Component，实现render方法","定义Props接口：使用TypeScript接口定义Props类型","添加状态管理：在constructor中初始化state，使用this.setState更新","使用生命周期方法：添加componentDidMount、componentDidUpdate等方法","实现错误边界：使用getDerivedStateFromError和componentDidCatch方法","优化性能：合理使用shouldComponentUpdate或React.memo"],tips:["始终在constructor中调用super(props)确保继承链正确","使用箭头函数避免this绑定问题","不要在render方法中绑定事件处理器，会影响性能","在componentWillUnmount中清理定时器和事件监听器","使用getDerivedStateFromProps替代已废弃的生命周期方法","考虑使用函数组件和Hooks替代类组件，除非需要错误边界功能"]},interview:{title:"类组件面试要点",keyPoints:["类组件继承自React.Component，必须实现render方法","使用this.state管理状态，this.setState更新状态","提供完整的生命周期方法控制组件行为","需要正确处理this绑定问题","可以实现错误边界功能","虽然函数组件更现代，但理解类组件仍然重要"],questions:[{question:"类组件和函数组件的主要区别是什么？",answer:`1. 语法：类组件使用class语法，函数组件使用函数语法
2. 状态管理：类组件使用this.state，函数组件使用useState Hook
3. 生命周期：类组件有专门的生命周期方法，函数组件使用useEffect
4. this绑定：类组件需要处理this绑定问题，函数组件没有this
5. 性能：函数组件通常性能更好，没有实例开销`},{question:"类组件的生命周期方法有哪些？",answer:`挂载阶段：constructor → componentDidMount
更新阶段：componentDidUpdate
卸载阶段：componentWillUnmount
错误处理：componentDidCatch、getDerivedStateFromError
还有一些不常用的：shouldComponentUpdate、getSnapshotBeforeUpdate等`},{question:"为什么要在constructor中调用super(props)？",answer:`1. 调用父类构造函数，确保继承链正确初始化
2. 传递props给父类，使this.props可用
3. 如果不调用super，会导致this未定义的错误
4. 必须在使用this之前调用super`},{question:"如何正确处理类组件中的this绑定？",answer:`1. 箭头函数：自动绑定this，推荐方式
2. constructor绑定：this.method = this.method.bind(this)
3. 避免在render中绑定：性能差，每次渲染都创建新函数
4. 使用装饰器（实验性功能）`},{question:"什么是错误边界？如何实现？",answer:`错误边界是可以捕获子组件错误的React组件。
实现方式：
1. 实现getDerivedStateFromError：更新state显示错误UI
2. 实现componentDidCatch：记录错误信息
3. 只能捕获子组件的错误，不能捕获自身错误
4. 只有类组件可以实现错误边界`}]},bestPractices:{dos:["使用this.setState更新状态，不要直接修改state","使用箭头函数定义方法，避免this绑定问题","在componentDidMount中进行API调用和副作用操作","在componentWillUnmount中清理定时器和事件监听器","实现shouldComponentUpdate或使用PureComponent优化性能","使用错误边界捕获子组件错误","保持render方法简洁，提取复杂逻辑为单独方法","使用TypeScript定义Props和State接口"],donts:["不要直接修改this.state，必须使用this.setState","不要在render方法中绑定函数，影响性能","不要忘记在componentWillUnmount中清理副作用","不要在constructor外直接赋值state","不要让错误导致整个应用崩溃","不要让render方法过于复杂","不要使用any类型，失去类型安全","不要强制重写所有现有的类组件"],patterns:["状态提升：将共享状态提升到父组件","组合模式：使用props.children实现组件组合","高阶组件：复用组件逻辑的经典模式","错误边界：实现getDerivedStateFromError和componentDidCatch","受控组件：表单元素的值由React状态控制","生命周期模式：合理使用各个生命周期方法","性能优化：使用shouldComponentUpdate或PureComponent"]}};return e.jsx(g,{...o})};export{U as default};
