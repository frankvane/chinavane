var m=Object.defineProperty;var d=(a,o,t)=>o in a?m(a,o,{enumerable:!0,configurable:!0,writable:!0,value:t}):a[o]=t;var s=(a,o,t)=>d(a,typeof o!="symbol"?o+"":o,t);import{r as i,j as e}from"./index-H7t66yxh.js";import{C as u}from"./ComponentTemplate-bNJaV0ol.js";const h=`import React, { Component } from "react";

// 示例1: 基础类组件
class BasicClassComponent extends Component {
  render() {
    return (
      <div className="p-4 border border-gray-200 rounded-lg">
        <h3 className="text-lg font-semibold mb-2">基础类组件</h3>
        <p className="text-gray-600">
          这是一个最简单的类组件，继承自React.Component，只实现了render方法。
        </p>
        <div className="mt-2 text-sm text-gray-500">
          <p>• 继承自React.Component</p>
          <p>• 必须实现render()方法</p>
          <p>• 使用class关键字定义</p>
        </div>
      </div>
    );
  }
}

export default BasicClassComponent;`;class g extends i.Component{render(){return e.jsxs("div",{className:"p-4 border border-gray-200 rounded-lg",children:[e.jsx("h3",{className:"text-lg font-semibold mb-2",children:"基础类组件"}),e.jsx("p",{className:"text-gray-600",children:"这是一个最简单的类组件，继承自React.Component，只实现了render方法。"}),e.jsxs("div",{className:"mt-2 text-sm text-gray-500",children:[e.jsx("p",{children:"• 继承自React.Component"}),e.jsx("p",{children:"• 必须实现render()方法"}),e.jsx("p",{children:"• 使用class关键字定义"})]})]})}}const x=()=>e.jsx("div",{className:"space-y-4",children:e.jsx(g,{})}),C=`import React from "react";
import BasicClassComponent from "./BasicClassComponent";

// 基础类组件示例
const BasicClassComponentExample: React.FC = () => {
  return (
    <div className="space-y-4">
      <BasicClassComponent />
    </div>
  );
};

export default BasicClassComponentExample;`,v=`import React, { Component } from "react";

// 示例5: 完整生命周期演示组件
interface CompleteLifecycleState {
  count: number;
  data: string[];
  loading: boolean;
  error: string | null;
  hasError: boolean;
}

interface CompleteLifecycleProps {
  initialCount?: number;
}

class CompleteLifecycleComponent extends Component<
  CompleteLifecycleProps,
  CompleteLifecycleState
> {
  private intervalId: NodeJS.Timeout | null = null;

  constructor(props: CompleteLifecycleProps) {
    super(props);
    console.log("1. Constructor - 组件初始化");
    this.state = {
      count: props.initialCount || 0,
      data: [],
      loading: false,
      error: null,
      hasError: false,
    };
  }

  static getDerivedStateFromProps(
    nextProps: CompleteLifecycleProps,
    prevState: CompleteLifecycleState
  ) {
    console.log("2. getDerivedStateFromProps - 从props派生state");
    // 如果props中的initialCount发生变化，更新state
    if (
      nextProps.initialCount !== undefined &&
      nextProps.initialCount !== prevState.count
    ) {
      return {
        count: nextProps.initialCount,
      };
    }
    return null;
  }

  componentDidMount() {
    console.log("3. componentDidMount - 组件已挂载");
    this.fetchData();
    this.setupInterval();
  }

  getSnapshotBeforeUpdate(
    prevProps: CompleteLifecycleProps,
    prevState: CompleteLifecycleState
  ) {
    console.log("4. getSnapshotBeforeUpdate - 更新前快照");
    // 返回更新前的一些信息，会传递给componentDidUpdate
    return {
      prevCount: prevState.count,
      timestamp: Date.now(),
    };
  }

  componentDidUpdate(
    prevProps: CompleteLifecycleProps,
    prevState: CompleteLifecycleState,
    snapshot: any
  ) {
    console.log("5. componentDidUpdate - 组件已更新", {
      prevCount: snapshot?.prevCount,
      currentCount: this.state.count,
      updateTime: snapshot?.timestamp,
    });

    // 如果count发生变化，可以执行一些副作用
    if (prevState.count !== this.state.count) {
      console.log(\`计数从 \${prevState.count} 变为 \${this.state.count}\`);
    }
  }

  componentWillUnmount() {
    console.log("6. componentWillUnmount - 组件将要卸载");
    this.cleanup();
  }

  static getDerivedStateFromError(error: Error) {
    console.log("7. getDerivedStateFromError - 捕获错误", error);
    return {
      hasError: true,
      error: error.message,
    };
  }

  componentDidCatch(error: Error, errorInfo: React.ErrorInfo) {
    console.log("8. componentDidCatch - 错误边界", { error, errorInfo });
    // 可以将错误信息发送到错误报告服务
  }

  // 业务方法
  fetchData = async () => {
    this.setState({ loading: true, error: null });
    try {
      // 模拟API调用
      await new Promise((resolve) => setTimeout(resolve, 1000));
      const mockData = [
        "数据项 1",
        "数据项 2",
        "数据项 3",
        \`动态数据 \${Date.now()}\`,
      ];
      this.setState({ data: mockData, loading: false });
    } catch (error) {
      this.setState({
        error: error instanceof Error ? error.message : "未知错误",
        loading: false,
      });
    }
  };

  setupInterval = () => {
    this.intervalId = setInterval(() => {
      console.log("定时器执行中...");
    }, 5000);
  };

  cleanup = () => {
    if (this.intervalId) {
      clearInterval(this.intervalId);
      this.intervalId = null;
    }
    this.clearData();
  };

  clearData = () => {
    this.setState({
      data: [],
      loading: false,
      error: null,
    });
  };

  increment = () => {
    this.setState((prevState) => ({
      count: prevState.count + 1,
    }));
  };

  triggerError = () => {
    // 故意触发错误来演示错误边界
    throw new Error("这是一个故意触发的错误，用于演示错误边界");
  };

  render() {
    console.log("Render - 组件渲染");

    if (this.state.hasError) {
      return (
        <div className="p-4 border border-red-200 rounded-lg bg-red-50">
          <h3 className="text-lg font-semibold mb-2 text-red-800">
            错误边界捕获到错误
          </h3>
          <p className="text-red-600">{this.state.error}</p>
          <button
            onClick={() => this.setState({ hasError: false, error: null })}
            className="mt-2 px-3 py-1 bg-red-600 text-white rounded hover:bg-red-700"
          >
            重置错误状态
          </button>
        </div>
      );
    }

    const { count, data, loading } = this.state;

    return (
      <div className="p-4 border border-indigo-200 rounded-lg bg-indigo-50">
        <h3 className="text-lg font-semibold mb-2">完整生命周期演示</h3>
        <div className="space-y-4">
          <div className="flex items-center justify-between">
            <span className="font-medium">计数: {count}</span>
            <button
              onClick={this.increment}
              className="px-3 py-1 bg-indigo-600 text-white rounded hover:bg-indigo-700"
            >
              增加
            </button>
          </div>

          <div>
            <div className="flex items-center justify-between mb-2">
              <span className="font-medium">数据列表:</span>
              <button
                onClick={this.fetchData}
                disabled={loading}
                className="px-3 py-1 bg-green-600 text-white rounded hover:bg-green-700 disabled:opacity-50"
              >
                {loading ? "加载中..." : "刷新数据"}
              </button>
            </div>
            {data.length > 0 && (
              <ul className="list-disc list-inside text-sm text-gray-700">
                {data.map((item, index) => (
                  <li key={index}>{item}</li>
                ))}
              </ul>
            )}
          </div>

          <div className="flex space-x-2">
            <button
              onClick={this.clearData}
              className="px-3 py-1 bg-gray-600 text-white rounded hover:bg-gray-700"
            >
              清空数据
            </button>
            <button
              onClick={this.triggerError}
              className="px-3 py-1 bg-red-600 text-white rounded hover:bg-red-700"
            >
              触发错误
            </button>
          </div>

          <div className="text-xs text-gray-500">
            <p>• 打开控制台查看生命周期方法的执行顺序</p>
            <p>• 演示了所有主要的生命周期方法</p>
            <p>• 包含错误边界处理</p>
          </div>
        </div>
      </div>
    );
  }
}

export default CompleteLifecycleComponent;`;class b extends i.Component{constructor(t){super(t);s(this,"intervalId",null);s(this,"fetchData",async()=>{this.setState({loading:!0,error:null});try{await new Promise(n=>setTimeout(n,1e3));const t=["数据项 1","数据项 2","数据项 3",`动态数据 ${Date.now()}`];this.setState({data:t,loading:!1})}catch(t){this.setState({error:t instanceof Error?t.message:"未知错误",loading:!1})}});s(this,"setupInterval",()=>{this.intervalId=setInterval(()=>{console.log("定时器执行中...")},5e3)});s(this,"cleanup",()=>{this.intervalId&&(clearInterval(this.intervalId),this.intervalId=null),this.clearData()});s(this,"clearData",()=>{this.setState({data:[],loading:!1,error:null})});s(this,"increment",()=>{this.setState(t=>({count:t.count+1}))});s(this,"triggerError",()=>{throw new Error("这是一个故意触发的错误，用于演示错误边界")});console.log("1. Constructor - 组件初始化"),this.state={count:t.initialCount||0,data:[],loading:!1,error:null,hasError:!1}}static getDerivedStateFromProps(t,n){return console.log("2. getDerivedStateFromProps - 从props派生state"),t.initialCount!==void 0&&t.initialCount!==n.count?{count:t.initialCount}:null}componentDidMount(){console.log("3. componentDidMount - 组件已挂载"),this.fetchData(),this.setupInterval()}getSnapshotBeforeUpdate(t,n){return console.log("4. getSnapshotBeforeUpdate - 更新前快照"),{prevCount:n.count,timestamp:Date.now()}}componentDidUpdate(t,n,r){console.log("5. componentDidUpdate - 组件已更新",{prevCount:r==null?void 0:r.prevCount,currentCount:this.state.count,updateTime:r==null?void 0:r.timestamp}),n.count!==this.state.count&&console.log(`计数从 ${n.count} 变为 ${this.state.count}`)}componentWillUnmount(){console.log("6. componentWillUnmount - 组件将要卸载"),this.cleanup()}static getDerivedStateFromError(t){return console.log("7. getDerivedStateFromError - 捕获错误",t),{hasError:!0,error:t.message}}componentDidCatch(t,n){console.log("8. componentDidCatch - 错误边界",{error:t,errorInfo:n})}render(){if(console.log("Render - 组件渲染"),this.state.hasError)return e.jsxs("div",{className:"p-4 border border-red-200 rounded-lg bg-red-50",children:[e.jsx("h3",{className:"text-lg font-semibold mb-2 text-red-800",children:"错误边界捕获到错误"}),e.jsx("p",{className:"text-red-600",children:this.state.error}),e.jsx("button",{onClick:()=>this.setState({hasError:!1,error:null}),className:"mt-2 px-3 py-1 bg-red-600 text-white rounded hover:bg-red-700",children:"重置错误状态"})]});const{count:t,data:n,loading:r}=this.state;return e.jsxs("div",{className:"p-4 border border-indigo-200 rounded-lg bg-indigo-50",children:[e.jsx("h3",{className:"text-lg font-semibold mb-2",children:"完整生命周期演示"}),e.jsxs("div",{className:"space-y-4",children:[e.jsxs("div",{className:"flex items-center justify-between",children:[e.jsxs("span",{className:"font-medium",children:["计数: ",t]}),e.jsx("button",{onClick:this.increment,className:"px-3 py-1 bg-indigo-600 text-white rounded hover:bg-indigo-700",children:"增加"})]}),e.jsxs("div",{children:[e.jsxs("div",{className:"flex items-center justify-between mb-2",children:[e.jsx("span",{className:"font-medium",children:"数据列表:"}),e.jsx("button",{onClick:this.fetchData,disabled:r,className:"px-3 py-1 bg-green-600 text-white rounded hover:bg-green-700 disabled:opacity-50",children:r?"加载中...":"刷新数据"})]}),n.length>0&&e.jsx("ul",{className:"list-disc list-inside text-sm text-gray-700",children:n.map((c,p)=>e.jsx("li",{children:c},p))})]}),e.jsxs("div",{className:"flex space-x-2",children:[e.jsx("button",{onClick:this.clearData,className:"px-3 py-1 bg-gray-600 text-white rounded hover:bg-gray-700",children:"清空数据"}),e.jsx("button",{onClick:this.triggerError,className:"px-3 py-1 bg-red-600 text-white rounded hover:bg-red-700",children:"触发错误"})]}),e.jsxs("div",{className:"text-xs text-gray-500",children:[e.jsx("p",{children:"• 打开控制台查看生命周期方法的执行顺序"}),e.jsx("p",{children:"• 演示了所有主要的生命周期方法"}),e.jsx("p",{children:"• 包含错误边界处理"})]})]})]})}}const f=()=>e.jsx("div",{className:"space-y-4",children:e.jsx(b,{})}),y=`import React from "react";
import CompleteLifecycleComponent from "./CompleteLifecycleComponent";

// 完整生命周期组件示例
const CompleteLifecycleExample: React.FC = () => {
  return (
    <div className="space-y-4">
      <CompleteLifecycleComponent />
    </div>
  );
};

export default CompleteLifecycleExample;`,S=`import React, { Component } from "react";

// 示例3: 带状态的类组件
interface CounterState {
  count: number;
  message: string;
}

class CounterClassComponent extends Component<{}, CounterState> {
  constructor(props: {}) {
    super(props);
    this.state = {
      count: 0,
      message: "点击按钮开始计数",
    };
  }

  increment = () => {
    this.setState((prevState) => ({
      count: prevState.count + 1,
      message: \`你已经点击了 \${prevState.count + 1} 次!\`,
    }));
  };

  decrement = () => {
    this.setState((prevState) => ({
      count: prevState.count - 1,
      message: \`你已经点击了 \${prevState.count - 1} 次!\`,
    }));
  };

  reset = () => {
    this.setState({
      count: 0,
      message: "点击按钮开始计数",
    });
  };

  render() {
    const { count, message } = this.state;
    return (
      <div className="p-4 border border-blue-200 rounded-lg bg-blue-50">
        <h3 className="text-lg font-semibold mb-2">带状态的类组件</h3>
        <div className="space-y-3">
          <div className="text-center">
            <div className="text-2xl font-bold text-blue-800">{count}</div>
            <p className="text-blue-700 mt-1">{message}</p>
          </div>
          
          <div className="flex justify-center space-x-2">
            <button
              onClick={this.increment}
              className="px-3 py-1 bg-green-600 text-white rounded hover:bg-green-700 transition-colors"
            >
              +1
            </button>
            <button
              onClick={this.decrement}
              className="px-3 py-1 bg-red-600 text-white rounded hover:bg-red-700 transition-colors"
            >
              -1
            </button>
            <button
              onClick={this.reset}
              className="px-3 py-1 bg-gray-600 text-white rounded hover:bg-gray-700 transition-colors"
            >
              重置
            </button>
          </div>
        </div>
      </div>
    );
  }
}

export default CounterClassComponent;`;class N extends i.Component{constructor(t){super(t);s(this,"increment",()=>{this.setState(t=>({count:t.count+1,message:`你已经点击了 ${t.count+1} 次!`}))});s(this,"decrement",()=>{this.setState(t=>({count:t.count-1,message:`你已经点击了 ${t.count-1} 次!`}))});s(this,"reset",()=>{this.setState({count:0,message:"点击按钮开始计数"})});this.state={count:0,message:"点击按钮开始计数"}}render(){const{count:t,message:n}=this.state;return e.jsxs("div",{className:"p-4 border border-blue-200 rounded-lg bg-blue-50",children:[e.jsx("h3",{className:"text-lg font-semibold mb-2",children:"带状态的类组件"}),e.jsxs("div",{className:"space-y-3",children:[e.jsxs("div",{className:"text-center",children:[e.jsx("div",{className:"text-2xl font-bold text-blue-800",children:t}),e.jsx("p",{className:"text-blue-700 mt-1",children:n})]}),e.jsxs("div",{className:"flex justify-center space-x-2",children:[e.jsx("button",{onClick:this.increment,className:"px-3 py-1 bg-green-600 text-white rounded hover:bg-green-700 transition-colors",children:"+1"}),e.jsx("button",{onClick:this.decrement,className:"px-3 py-1 bg-red-600 text-white rounded hover:bg-red-700 transition-colors",children:"-1"}),e.jsx("button",{onClick:this.reset,className:"px-3 py-1 bg-gray-600 text-white rounded hover:bg-gray-700 transition-colors",children:"重置"})]})]})]})}}const j=()=>e.jsx("div",{className:"space-y-4",children:e.jsx(N,{})}),D=`import React from "react";
import CounterClassComponent from "./CounterClassComponent";

// 计数器组件示例
const CounterClassComponentExample: React.FC = () => {
  return (
    <div className="space-y-4">
      <CounterClassComponent />
    </div>
  );
};

export default CounterClassComponentExample;`,T=`import React, { Component } from "react";

// 示例4: 带生命周期的类组件
interface TimerState {
  seconds: number;
  isRunning: boolean;
}

class TimerComponent extends Component<{}, TimerState> {
  private intervalId: NodeJS.Timeout | null = null;

  constructor(props: {}) {
    super(props);
    this.state = {
      seconds: 0,
      isRunning: false,
    };
  }

  componentDidMount() {
    console.log("Timer组件已挂载");
  }

  componentDidUpdate(prevProps: {}, prevState: TimerState) {
    if (prevState.isRunning !== this.state.isRunning) {
      if (this.state.isRunning) {
        this.startTimer();
      } else {
        this.stopTimer();
      }
    }
  }

  componentWillUnmount() {
    this.stopTimer();
    console.log("Timer组件将要卸载");
  }

  startTimer = () => {
    this.intervalId = setInterval(() => {
      this.setState((prevState) => ({
        seconds: prevState.seconds + 1,
      }));
    }, 1000);
  };

  stopTimer = () => {
    if (this.intervalId) {
      clearInterval(this.intervalId);
      this.intervalId = null;
    }
  };

  toggleTimer = () => {
    this.setState((prevState) => ({
      isRunning: !prevState.isRunning,
    }));
  };

  resetTimer = () => {
    this.setState({ seconds: 0, isRunning: false });
  };

  formatTime = (seconds: number): string => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return \`\${mins.toString().padStart(2, "0")}:\${secs
      .toString()
      .padStart(2, "0")}\`;
  };

  render() {
    const { seconds, isRunning } = this.state;
    return (
      <div className="p-4 border border-purple-200 rounded-lg bg-purple-50">
        <h3 className="text-lg font-semibold mb-2">带生命周期的类组件</h3>
        <div className="space-y-3">
          <div className="text-center">
            <div className="text-3xl font-mono font-bold text-purple-800">
              {this.formatTime(seconds)}
            </div>
            <p className="text-sm text-purple-600 mt-1">
              状态: {isRunning ? "运行中" : "已停止"}
            </p>
          </div>

          <div className="flex justify-center space-x-2">
            <button
              onClick={this.toggleTimer}
              className={\`px-4 py-2 rounded font-medium transition-colors \${
                isRunning
                  ? "bg-red-600 text-white hover:bg-red-700"
                  : "bg-green-600 text-white hover:bg-green-700"
              }\`}
            >
              {isRunning ? "暂停" : "开始"}
            </button>
            <button
              onClick={this.resetTimer}
              className="px-4 py-2 bg-gray-600 text-white rounded font-medium hover:bg-gray-700 transition-colors"
            >
              重置
            </button>
          </div>
        </div>
      </div>
    );
  }
}

export default TimerComponent;`;class P extends i.Component{constructor(t){super(t);s(this,"intervalId",null);s(this,"startTimer",()=>{this.intervalId=setInterval(()=>{this.setState(t=>({seconds:t.seconds+1}))},1e3)});s(this,"stopTimer",()=>{this.intervalId&&(clearInterval(this.intervalId),this.intervalId=null)});s(this,"toggleTimer",()=>{this.setState(t=>({isRunning:!t.isRunning}))});s(this,"resetTimer",()=>{this.setState({seconds:0,isRunning:!1})});s(this,"formatTime",t=>{const n=Math.floor(t/60),r=t%60;return`${n.toString().padStart(2,"0")}:${r.toString().padStart(2,"0")}`});this.state={seconds:0,isRunning:!1}}componentDidMount(){console.log("Timer组件已挂载")}componentDidUpdate(t,n){n.isRunning!==this.state.isRunning&&(this.state.isRunning?this.startTimer():this.stopTimer())}componentWillUnmount(){this.stopTimer(),console.log("Timer组件将要卸载")}render(){const{seconds:t,isRunning:n}=this.state;return e.jsxs("div",{className:"p-4 border border-purple-200 rounded-lg bg-purple-50",children:[e.jsx("h3",{className:"text-lg font-semibold mb-2",children:"带生命周期的类组件"}),e.jsxs("div",{className:"space-y-3",children:[e.jsxs("div",{className:"text-center",children:[e.jsx("div",{className:"text-3xl font-mono font-bold text-purple-800",children:this.formatTime(t)}),e.jsxs("p",{className:"text-sm text-purple-600 mt-1",children:["状态: ",n?"运行中":"已停止"]})]}),e.jsxs("div",{className:"flex justify-center space-x-2",children:[e.jsx("button",{onClick:this.toggleTimer,className:`px-4 py-2 rounded font-medium transition-colors ${n?"bg-red-600 text-white hover:bg-red-700":"bg-green-600 text-white hover:bg-green-700"}`,children:n?"暂停":"开始"}),e.jsx("button",{onClick:this.resetTimer,className:"px-4 py-2 bg-gray-600 text-white rounded font-medium hover:bg-gray-700 transition-colors",children:"重置"})]})]})]})}}const R=()=>e.jsx("div",{className:"space-y-4",children:e.jsx(P,{})}),E=`import React from "react";
import TimerComponent from "./TimerComponent";

// 定时器组件示例
const TimerComponentExample: React.FC = () => {
  return (
    <div className="space-y-4">
      <TimerComponent />
    </div>
  );
};

export default TimerComponentExample;`,U=`import React, { Component } from "react";

// 示例2: 带Props的类组件
interface UserCardProps {
  name: string;
  email: string;
  avatar?: string;
  role?: string;
}

class UserCard extends Component<UserCardProps> {
  render() {
    const { name, email, avatar, role } = this.props;
    
    return (
      <div className="p-4 border border-green-200 rounded-lg bg-green-50">
        <h3 className="text-lg font-semibold mb-2">带Props的类组件</h3>
        <div className="flex items-center space-x-3">
          <div className="relative">
            {avatar ? (
              <img 
                src={avatar} 
                alt={name}
                className="w-12 h-12 rounded-full object-cover"
              />
            ) : (
              <div className="w-12 h-12 rounded-full bg-blue-500 flex items-center justify-center text-white font-semibold">
                {name.charAt(0).toUpperCase()}
              </div>
            )}
          </div>
          
          <div className="flex-1">
            <h4 className="font-semibold text-gray-900">{name}</h4>
            <p className="text-gray-600 text-sm">{email}</p>
            {role && (
              <span className="inline-block px-2 py-1 text-xs bg-blue-100 text-blue-800 rounded-full mt-1">
                {role}
              </span>
            )}
          </div>
        </div>
        
        <div className="mt-3 text-sm text-gray-500">
          <p>• 通过props接收外部数据</p>
          <p>• 支持可选属性（avatar, role）</p>
          <p>• 使用TypeScript接口定义props类型</p>
        </div>
      </div>
    );
  }
}

export default UserCard;`;class l extends i.Component{render(){const{name:o,email:t,avatar:n,role:r}=this.props;return e.jsxs("div",{className:"p-4 border border-green-200 rounded-lg bg-green-50",children:[e.jsx("h3",{className:"text-lg font-semibold mb-2",children:"带Props的类组件"}),e.jsxs("div",{className:"flex items-center space-x-3",children:[e.jsx("div",{className:"relative",children:n?e.jsx("img",{src:n,alt:o,className:"w-12 h-12 rounded-full object-cover"}):e.jsx("div",{className:"w-12 h-12 rounded-full bg-blue-500 flex items-center justify-center text-white font-semibold",children:o.charAt(0).toUpperCase()})}),e.jsxs("div",{className:"flex-1",children:[e.jsx("h4",{className:"font-semibold text-gray-900",children:o}),e.jsx("p",{className:"text-gray-600 text-sm",children:t}),r&&e.jsx("span",{className:"inline-block px-2 py-1 text-xs bg-blue-100 text-blue-800 rounded-full mt-1",children:r})]})]}),e.jsxs("div",{className:"mt-3 text-sm text-gray-500",children:[e.jsx("p",{children:"• 通过props接收外部数据"}),e.jsx("p",{children:"• 支持可选属性（avatar, role）"}),e.jsx("p",{children:"• 使用TypeScript接口定义props类型"})]})]})}}const w=()=>e.jsxs("div",{className:"space-y-4",children:[e.jsx(l,{name:"张三",email:"zhangsan@example.com",role:"前端开发工程师"}),e.jsx(l,{name:"李四",email:"lisi@example.com",avatar:"https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop&crop=face",role:"UI设计师"})]}),I=`import React from "react";
import UserCard from "./UserCard";

// 用户卡片组件示例
const UserCardExample: React.FC = () => {
  return (
    <div className="space-y-4">
      <UserCard
        name="张三"
        email="zhangsan@example.com"
        role="前端开发工程师"
      />
      <UserCard
        name="李四"
        email="lisi@example.com"
        avatar="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop&crop=face"
        role="UI设计师"
      />
    </div>
  );
};

export default UserCardExample;`,B=()=>{const a={title:"类组件 (Class Components)",description:"类组件是React中传统的组件定义方式，通过继承React.Component类来创建。虽然函数组件配合Hooks已成为主流，但理解类组件仍然重要，特别是在维护旧项目或需要错误边界功能时。",overview:[{title:"核心概念",items:["继承自React.Component基类","使用render()方法返回JSX","通过this.state管理组件状态","使用生命周期方法处理组件的不同阶段","通过this.props访问父组件传递的属性"]},{title:"主要优势",items:["完整的生命周期方法支持","内置错误边界功能（componentDidCatch）","清晰的面向对象编程模式","成熟稳定，广泛应用于现有项目"]},{title:"适用场景",items:["需要实现错误边界的组件","维护和升级现有的类组件代码","复杂的生命周期逻辑处理","团队更熟悉面向对象编程模式"]},{title:"注意事项",items:["函数组件配合Hooks是现代React的推荐方式","类组件的this绑定需要特别注意","避免在render方法中进行副作用操作","合理使用生命周期方法，避免性能问题"]}],examples:[{title:"示例1：基础类组件",description:"最简单的类组件，继承自React.Component",component:e.jsx(x,{}),preCode:[{title:"BasicClassComponent.tsx",code:h,language:"typescript",highlights:"4-22"}],codeExample:{title:"示例1：基础类组件",code:C},observationPoints:["类组件必须继承React.Component或React.PureComponent","必须实现render()方法返回JSX元素","使用class关键字定义，遵循ES6类语法","组件名必须以大写字母开头（PascalCase）"],keyPoints:["类组件是React的传统组件形式，功能完整","render方法是唯一必需的方法","支持完整的生命周期方法和错误边界"],commonTraps:["忘记继承React.Component基类","忘记实现render方法","组件名首字母不大写"],solutions:["始终继承React.Component或React.PureComponent","确保render方法返回有效的JSX元素","使用PascalCase命名组件"],importantTips:["类组件是React的经典形式，虽然函数组件更现代，但类组件仍有其价值","render方法是类组件的核心，必须返回JSX元素或null","类组件支持完整的生命周期，适合复杂的状态管理场景"]},{title:"示例2：带Props的类组件",description:"接收和使用props的类组件，支持TypeScript类型定义",component:e.jsx(w,{}),preCode:[{title:"UserCard.tsx",code:U,language:"typescript",highlights:"4-8,12-60"}],codeExample:{title:"示例2：带Props的类组件",code:I},observationPoints:["使用TypeScript接口定义Props类型","通过this.props访问传入的属性","支持可选属性（avatar?）和必需属性","使用解构赋值简化props访问"],keyPoints:["TypeScript提供类型安全和编译时检查","Props是只读的，不能在组件内部修改","类组件通过this.props访问属性"],commonTraps:["尝试直接修改this.props的值","忘记定义Props接口类型","不处理可选属性的undefined情况"],solutions:["始终将props视为只读数据","为Props定义完整的TypeScript接口","使用条件渲染处理可选属性"],importantTips:["类组件通过this.props访问属性，这是与函数组件的主要区别之一","Props是不可变的，任何修改都应该通过状态管理或回调函数实现","TypeScript接口定义使Props的使用更加安全和清晰"]},{title:"示例3：带State的类组件",description:"使用this.state管理内部状态的类组件",component:e.jsx(j,{}),preCode:[{title:"CounterClassComponent.tsx",code:S,language:"typescript",highlights:"4-8,10-18,20-34,36-42,44-49"}],codeExample:{title:"示例3：带State的类组件",code:D},observationPoints:["在constructor中初始化this.state","使用this.setState()更新状态","setState是异步的，可能会批量更新","箭头函数方法避免this绑定问题"],keyPoints:["状态管理是类组件的核心功能","setState触发组件重新渲染","状态更新应该是不可变的"],commonTraps:["直接修改this.state而不使用setState","在setState中依赖当前状态值","忘记绑定事件处理函数的this"],solutions:["始终使用setState更新状态","使用函数式setState处理状态依赖","使用箭头函数或在constructor中绑定this"],importantTips:["类组件的状态管理通过this.state和this.setState实现，这是其核心优势","setState是异步的，不要依赖立即更新的状态值","箭头函数方法自动绑定this，避免了手动绑定的麻烦"]},{title:"示例4：生命周期方法示例",description:"展示完整生命周期方法的计时器组件",component:e.jsx(R,{}),preCode:[{title:"TimerComponent.tsx",code:T,language:"typescript",highlights:"18-21,23-31,33-37,39-51,53-57,59-63"}],codeExample:{title:"示例4：生命周期方法示例",code:E},observationPoints:["componentDidMount在组件挂载后执行","componentDidUpdate在组件更新后执行","componentWillUnmount在组件卸载前执行","生命周期方法提供了组件各个阶段的钩子"],keyPoints:["生命周期方法是类组件的独特优势","适合处理副作用和资源管理","每个生命周期方法都有特定的用途和时机"],commonTraps:["在componentWillUnmount中忘记清理资源","在componentDidUpdate中造成无限循环","在错误的生命周期方法中执行操作"],solutions:["在componentWillUnmount中清理定时器和事件监听","在componentDidUpdate中添加条件判断","根据需求选择合适的生命周期方法"],importantTips:["生命周期方法是类组件处理副作用的标准方式，每个方法都有特定用途","componentWillUnmount是清理资源的最佳时机，避免内存泄漏","componentDidUpdate需要条件判断，避免无限更新循环"]},{title:"示例5：React 16.8+ 完整生命周期示例",description:"包含所有新旧生命周期方法的完整示例，支持错误边界和快照功能",component:e.jsx(f,{}),preCode:[{title:"CompleteLifecycleComponent.tsx",code:v,language:"typescript",highlights:"25-35,37-47,49-52,54-75,77-81,83-90,92-99"}],codeExample:{title:"示例5：React 16.8+ 完整生命周期示例",code:y},observationPoints:["getDerivedStateFromProps是静态方法，用于根据props更新state","getSnapshotBeforeUpdate在DOM更新前获取快照","componentDidCatch和getDerivedStateFromError处理错误边界","新的生命周期方法更安全，避免了异步渲染问题"],keyPoints:["React 16.3+引入了新的生命周期方法","错误边界可以捕获子组件的错误","快照功能可以保存DOM更新前的状态"],commonTraps:["在getDerivedStateFromProps中使用this","过度使用getDerivedStateFromProps","忘记在错误边界中更新状态"],solutions:["getDerivedStateFromProps是静态方法，不能访问this","只在必要时使用getDerivedStateFromProps","在错误边界方法中正确更新错误状态"],importantTips:["新的生命周期方法设计更安全，适应React的异步渲染特性","错误边界是类组件独有的功能，函数组件无法实现","getDerivedStateFromProps应该谨慎使用，大多数情况下不需要"]}],keyPoints:[{title:"类组件的定义",content:"类组件必须继承React.Component，并实现render方法。使用class关键字定义，组件名必须以大写字母开头。",importance:"high"},{title:"Props和State",content:"通过this.props访问属性，通过this.state访问状态。使用this.setState更新状态，不能直接修改state。",importance:"high"},{title:"生命周期方法",content:"提供完整的生命周期钩子：constructor、componentDidMount、componentDidUpdate、componentWillUnmount等。",importance:"high"},{title:"this绑定",content:"类方法需要正确绑定this。推荐使用箭头函数或在constructor中绑定，避免在render中绑定。",importance:"medium"},{title:"错误边界",content:"只有类组件可以实现错误边界，通过componentDidCatch和getDerivedStateFromError方法捕获错误。",importance:"medium"}],tutorial:{concepts:["类组件继承自React.Component，必须实现render方法","使用this.state管理组件状态，通过this.setState更新状态","提供完整的生命周期方法控制组件的挂载、更新和卸载","需要正确处理this绑定问题，推荐使用箭头函数","可以实现错误边界功能，捕获子组件的错误","支持TypeScript类型定义，通过泛型指定Props和State类型"],steps:["创建基础类组件：继承React.Component，实现render方法","定义Props接口：使用TypeScript接口定义Props类型","添加状态管理：在constructor中初始化state，使用this.setState更新","使用生命周期方法：添加componentDidMount、componentDidUpdate等方法","实现错误边界：使用getDerivedStateFromError和componentDidCatch方法","优化性能：合理使用shouldComponentUpdate或React.memo"],tips:["始终在constructor中调用super(props)确保继承链正确","使用箭头函数避免this绑定问题","不要在render方法中绑定事件处理器，会影响性能","在componentWillUnmount中清理定时器和事件监听器","使用getDerivedStateFromProps替代已废弃的生命周期方法","考虑使用函数组件和Hooks替代类组件，除非需要错误边界功能"]},interview:{title:"类组件面试要点",keyPoints:["类组件继承自React.Component，必须实现render方法","使用this.state管理状态，this.setState更新状态","提供完整的生命周期方法控制组件行为","需要正确处理this绑定问题","可以实现错误边界功能","虽然函数组件更现代，但理解类组件仍然重要"],questions:[{question:"类组件和函数组件的主要区别是什么？",answer:`1. 语法：类组件使用class语法，函数组件使用函数语法
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
4. 只有类组件可以实现错误边界`}]},bestPractices:{dos:["使用this.setState更新状态，不要直接修改state","使用箭头函数定义方法，避免this绑定问题","在componentDidMount中进行API调用和副作用操作","在componentWillUnmount中清理定时器和事件监听器","实现shouldComponentUpdate或使用PureComponent优化性能","使用错误边界捕获子组件错误","保持render方法简洁，提取复杂逻辑为单独方法","使用TypeScript定义Props和State接口"],donts:["不要直接修改this.state，必须使用this.setState","不要在render方法中绑定函数，影响性能","不要忘记在componentWillUnmount中清理副作用","不要在constructor外直接赋值state","不要让错误导致整个应用崩溃","不要让render方法过于复杂","不要使用any类型，失去类型安全","不要强制重写所有现有的类组件"],patterns:["状态提升：将共享状态提升到父组件","组合模式：使用props.children实现组件组合","高阶组件：复用组件逻辑的经典模式","错误边界：实现getDerivedStateFromError和componentDidCatch","受控组件：表单元素的值由React状态控制","生命周期模式：合理使用各个生命周期方法","性能优化：使用shouldComponentUpdate或PureComponent"]}};return e.jsx(u,{...a})};export{B as default};
