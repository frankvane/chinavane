import{r as i,j as e}from"./index-DPG_OKoV.js";import{C as f}from"./ComponentTemplate-HXLvd6Xe.js";function h(s=0){const[t,m]=i.useState(s),[r,c]=i.useState(!1),l=i.useRef(null),a=i.useCallback(()=>{r||(c(!0),l.current=setInterval(()=>{m(d=>d+1)},1e3))},[r]),o=i.useCallback(()=>{r&&l.current&&(clearInterval(l.current),l.current=null,c(!1))},[r]),u=i.useCallback(()=>{l.current&&(clearInterval(l.current),l.current=null),c(!1),m(s)},[s]),x=i.useCallback(d=>{m(d)},[]);return i.useEffect(()=>()=>{l.current&&clearInterval(l.current)},[]),{time:t,isRunning:r,start:a,pause:o,reset:u,setTimer:x}}function g(s){const[t,m]=i.useState(s),[r,c]=i.useState(!1),[l,a]=i.useState(!1),o=i.useRef(null),u=i.useCallback(()=>{!r&&t>0&&(c(!0),a(!1),o.current=setInterval(()=>{m(n=>n<=1?(c(!1),a(!0),0):n-1)},1e3))},[r,t]),x=i.useCallback(()=>{r&&o.current&&(clearInterval(o.current),o.current=null,c(!1))},[r]),d=i.useCallback(()=>{o.current&&(clearInterval(o.current),o.current=null),c(!1),a(!1),m(s)},[s]);return i.useEffect(()=>()=>{o.current&&clearInterval(o.current)},[]),{time:t,isRunning:r,isFinished:l,start:u,pause:x,reset:d}}const b=s=>{const t=Math.floor(s/3600),m=Math.floor(s%3600/60),r=s%60;return t>0?`${t.toString().padStart(2,"0")}:${m.toString().padStart(2,"0")}:${r.toString().padStart(2,"0")}`:`${m.toString().padStart(2,"0")}:${r.toString().padStart(2,"0")}`},N=()=>{const[s,t]=i.useState(300),[m,r]=i.useState(25*60),[c,l]=i.useState(5*60),[a,o]=i.useState(!0),[u,x]=i.useState(0),d=h(0),n=g(a?m:c);i.useEffect(()=>{n.isFinished&&(a?(x(p=>p+1),o(!1),setTimeout(()=>{n.reset()},1e3)):(o(!0),setTimeout(()=>{n.reset()},1e3)))},[n.isFinished,a]);const v=()=>{d.setTimer(s)};return e.jsxs("div",{className:"p-6 bg-white rounded-lg shadow-sm border",children:[e.jsx("h3",{className:"text-lg font-semibold mb-4",children:"高级 useTimer 示例"}),e.jsxs("div",{className:"space-y-6",children:[e.jsxs("div",{className:"p-4 bg-purple-50 rounded",children:[e.jsx("h4",{className:"font-medium mb-3",children:"自定义时间计时器"}),e.jsxs("div",{className:"flex items-center space-x-4 mb-4",children:[e.jsx("input",{type:"number",value:s,onChange:p=>t(Number(p.target.value)),className:"w-20 px-2 py-1 border rounded text-sm",min:"0"}),e.jsx("span",{className:"text-sm text-gray-600",children:"秒"}),e.jsx("button",{onClick:v,className:"px-3 py-1 bg-purple-500 text-white rounded text-sm hover:bg-purple-600",children:"设置时间"})]}),e.jsxs("div",{className:"text-center",children:[e.jsx("div",{className:"text-2xl font-mono font-bold text-purple-600 mb-3",children:b(d.time)}),e.jsxs("div",{className:"flex justify-center space-x-2",children:[e.jsx("button",{onClick:d.start,disabled:d.isRunning,className:"px-3 py-1 bg-green-500 text-white rounded text-sm hover:bg-green-600 disabled:opacity-50",children:"开始"}),e.jsx("button",{onClick:d.pause,disabled:!d.isRunning,className:"px-3 py-1 bg-yellow-500 text-white rounded text-sm hover:bg-yellow-600 disabled:opacity-50",children:"暂停"}),e.jsx("button",{onClick:d.reset,className:"px-3 py-1 bg-red-500 text-white rounded text-sm hover:bg-red-600",children:"重置"})]})]})]}),e.jsxs("div",{className:"p-4 bg-red-50 rounded",children:[e.jsx("h4",{className:"font-medium mb-3",children:"番茄工作法计时器"}),e.jsxs("div",{className:"text-center",children:[e.jsx("div",{className:"mb-2",children:e.jsx("span",{className:`px-3 py-1 rounded-full text-sm font-medium ${a?"bg-red-100 text-red-700":"bg-green-100 text-green-700"}`,children:a?"🍅 工作时间":"☕ 休息时间"})}),e.jsx("div",{className:`text-3xl font-mono font-bold mb-3 ${n.isFinished||a?"text-red-600":"text-green-600"}`,children:b(n.time)}),e.jsxs("div",{className:"flex justify-center space-x-2 mb-3",children:[e.jsx("button",{onClick:n.start,disabled:n.isRunning||n.time===0,className:"px-3 py-1 bg-green-500 text-white rounded text-sm hover:bg-green-600 disabled:opacity-50",children:"开始"}),e.jsx("button",{onClick:n.pause,disabled:!n.isRunning,className:"px-3 py-1 bg-yellow-500 text-white rounded text-sm hover:bg-yellow-600 disabled:opacity-50",children:"暂停"}),e.jsx("button",{onClick:n.reset,className:"px-3 py-1 bg-red-500 text-white rounded text-sm hover:bg-red-600",children:"重置"})]}),e.jsxs("div",{className:"text-sm text-gray-600",children:["已完成工作周期: ",u]}),n.isFinished&&e.jsx("div",{className:"mt-2 text-sm font-medium",children:a?e.jsx("span",{className:"text-green-600",children:"🎉 工作完成！开始休息"}):e.jsx("span",{className:"text-red-600",children:"⏰ 休息结束！开始工作"})})]})]})]})]})},y=`import React, { useState, useEffect } from 'react';
import { useTimer, useCountdown, formatTime } from './useTimerHook';

const AdvancedTimerDemo: React.FC = () => {
  const [customTime, setCustomTime] = useState(300); // 5分钟
  const [pomodoroTime, setPomodoroTime] = useState(25 * 60); // 25分钟
  const [breakTime, setBreakTime] = useState(5 * 60); // 5分钟
  const [isWorkSession, setIsWorkSession] = useState(true);
  const [sessionCount, setSessionCount] = useState(0);
  
  const customTimer = useTimer(0);
  const pomodoroTimer = useCountdown(isWorkSession ? pomodoroTime : breakTime);

  // 番茄钟自动切换
  useEffect(() => {
    if (pomodoroTimer.isFinished) {
      if (isWorkSession) {
        setSessionCount(prev => prev + 1);
        setIsWorkSession(false);
        // 自动开始休息时间
        setTimeout(() => {
          pomodoroTimer.reset();
        }, 1000);
      } else {
        setIsWorkSession(true);
        // 自动开始工作时间
        setTimeout(() => {
          pomodoroTimer.reset();
        }, 1000);
      }
    }
  }, [pomodoroTimer.isFinished, isWorkSession]);

  const handleCustomTimeSet = () => {
    customTimer.setTimer(customTime);
  };

  return (
    <div className="p-6 bg-white rounded-lg shadow-sm border">
      <h3 className="text-lg font-semibold mb-4">高级 useTimer 示例</h3>
      
      <div className="space-y-6">
        {/* 自定义计时器 */}
        <div className="p-4 bg-purple-50 rounded">
          <h4 className="font-medium mb-3">自定义时间计时器</h4>
          <div className="flex items-center space-x-4 mb-4">
            <input
              type="number"
              value={customTime}
              onChange={(e) => setCustomTime(Number(e.target.value))}
              className="w-20 px-2 py-1 border rounded text-sm"
              min="0"
            />
            <span className="text-sm text-gray-600">秒</span>
            <button
              onClick={handleCustomTimeSet}
              className="px-3 py-1 bg-purple-500 text-white rounded text-sm hover:bg-purple-600"
            >
              设置时间
            </button>
          </div>
          <div className="text-center">
            <div className="text-2xl font-mono font-bold text-purple-600 mb-3">
              {formatTime(customTimer.time)}
            </div>
            <div className="flex justify-center space-x-2">
              <button
                onClick={customTimer.start}
                disabled={customTimer.isRunning}
                className="px-3 py-1 bg-green-500 text-white rounded text-sm hover:bg-green-600 disabled:opacity-50"
              >
                开始
              </button>
              <button
                onClick={customTimer.pause}
                disabled={!customTimer.isRunning}
                className="px-3 py-1 bg-yellow-500 text-white rounded text-sm hover:bg-yellow-600 disabled:opacity-50"
              >
                暂停
              </button>
              <button
                onClick={customTimer.reset}
                className="px-3 py-1 bg-red-500 text-white rounded text-sm hover:bg-red-600"
              >
                重置
              </button>
            </div>
          </div>
        </div>
        
        {/* 番茄钟 */}
        <div className="p-4 bg-red-50 rounded">
          <h4 className="font-medium mb-3">番茄工作法计时器</h4>
          <div className="text-center">
            <div className="mb-2">
              <span className={\`px-3 py-1 rounded-full text-sm font-medium \${
                isWorkSession 
                  ? 'bg-red-100 text-red-700' 
                  : 'bg-green-100 text-green-700'
              }\`}>
                {isWorkSession ? '🍅 工作时间' : '☕ 休息时间'}
              </span>
            </div>
            <div className={\`text-3xl font-mono font-bold mb-3 \${
              pomodoroTimer.isFinished 
                ? 'text-red-600' 
                : isWorkSession 
                  ? 'text-red-600' 
                  : 'text-green-600'
            }\`}>
              {formatTime(pomodoroTimer.time)}
            </div>
            <div className="flex justify-center space-x-2 mb-3">
              <button
                onClick={pomodoroTimer.start}
                disabled={pomodoroTimer.isRunning || pomodoroTimer.time === 0}
                className="px-3 py-1 bg-green-500 text-white rounded text-sm hover:bg-green-600 disabled:opacity-50"
              >
                开始
              </button>
              <button
                onClick={pomodoroTimer.pause}
                disabled={!pomodoroTimer.isRunning}
                className="px-3 py-1 bg-yellow-500 text-white rounded text-sm hover:bg-yellow-600 disabled:opacity-50"
              >
                暂停
              </button>
              <button
                onClick={pomodoroTimer.reset}
                className="px-3 py-1 bg-red-500 text-white rounded text-sm hover:bg-red-600"
              >
                重置
              </button>
            </div>
            <div className="text-sm text-gray-600">
              已完成工作周期: {sessionCount}
            </div>
            {pomodoroTimer.isFinished && (
              <div className="mt-2 text-sm font-medium">
                {isWorkSession ? (
                  <span className="text-green-600">🎉 工作完成！开始休息</span>
                ) : (
                  <span className="text-red-600">⏰ 休息结束！开始工作</span>
                )}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdvancedTimerDemo;`,j=()=>{const s=h(0),t=g(60);return e.jsxs("div",{className:"p-6 bg-white rounded-lg shadow-sm border",children:[e.jsx("h3",{className:"text-lg font-semibold mb-4",children:"基础 useTimer 示例"}),e.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-6",children:[e.jsxs("div",{className:"p-4 bg-blue-50 rounded",children:[e.jsx("h4",{className:"font-medium mb-3",children:"正向计时器"}),e.jsxs("div",{className:"text-center",children:[e.jsx("div",{className:"text-3xl font-mono font-bold text-blue-600 mb-4",children:b(s.time)}),e.jsxs("div",{className:"flex justify-center space-x-2",children:[e.jsx("button",{onClick:s.start,disabled:s.isRunning,className:"px-3 py-1 bg-green-500 text-white rounded text-sm hover:bg-green-600 disabled:opacity-50",children:"开始"}),e.jsx("button",{onClick:s.pause,disabled:!s.isRunning,className:"px-3 py-1 bg-yellow-500 text-white rounded text-sm hover:bg-yellow-600 disabled:opacity-50",children:"暂停"}),e.jsx("button",{onClick:s.reset,className:"px-3 py-1 bg-red-500 text-white rounded text-sm hover:bg-red-600",children:"重置"})]}),e.jsxs("div",{className:"mt-2 text-xs text-gray-600",children:["状态: ",s.isRunning?"运行中":"已暂停"]})]})]}),e.jsxs("div",{className:"p-4 bg-orange-50 rounded",children:[e.jsx("h4",{className:"font-medium mb-3",children:"倒计时器"}),e.jsxs("div",{className:"text-center",children:[e.jsx("div",{className:`text-3xl font-mono font-bold mb-4 ${t.isFinished?"text-red-600":"text-orange-600"}`,children:b(t.time)}),e.jsxs("div",{className:"flex justify-center space-x-2",children:[e.jsx("button",{onClick:t.start,disabled:t.isRunning||t.time===0,className:"px-3 py-1 bg-green-500 text-white rounded text-sm hover:bg-green-600 disabled:opacity-50",children:"开始"}),e.jsx("button",{onClick:t.pause,disabled:!t.isRunning,className:"px-3 py-1 bg-yellow-500 text-white rounded text-sm hover:bg-yellow-600 disabled:opacity-50",children:"暂停"}),e.jsx("button",{onClick:t.reset,className:"px-3 py-1 bg-red-500 text-white rounded text-sm hover:bg-red-600",children:"重置"})]}),e.jsxs("div",{className:"mt-2 text-xs text-gray-600",children:["状态: ",t.isFinished?"已完成":t.isRunning?"运行中":"已暂停"]}),t.isFinished&&e.jsx("div",{className:"mt-2 text-sm text-red-600 font-medium",children:"⏰ 倒计时结束！"})]})]})]})]})},T=`import React from 'react';
import { useTimer, useCountdown, formatTime } from './useTimerHook';

const BasicTimerDemo: React.FC = () => {
  const timer = useTimer(0);
  const countdown = useCountdown(60);

  return (
    <div className="p-6 bg-white rounded-lg shadow-sm border">
      <h3 className="text-lg font-semibold mb-4">基础 useTimer 示例</h3>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* 计时器 */}
        <div className="p-4 bg-blue-50 rounded">
          <h4 className="font-medium mb-3">正向计时器</h4>
          <div className="text-center">
            <div className="text-3xl font-mono font-bold text-blue-600 mb-4">
              {formatTime(timer.time)}
            </div>
            <div className="flex justify-center space-x-2">
              <button
                onClick={timer.start}
                disabled={timer.isRunning}
                className="px-3 py-1 bg-green-500 text-white rounded text-sm hover:bg-green-600 disabled:opacity-50"
              >
                开始
              </button>
              <button
                onClick={timer.pause}
                disabled={!timer.isRunning}
                className="px-3 py-1 bg-yellow-500 text-white rounded text-sm hover:bg-yellow-600 disabled:opacity-50"
              >
                暂停
              </button>
              <button
                onClick={timer.reset}
                className="px-3 py-1 bg-red-500 text-white rounded text-sm hover:bg-red-600"
              >
                重置
              </button>
            </div>
            <div className="mt-2 text-xs text-gray-600">
              状态: {timer.isRunning ? '运行中' : '已暂停'}
            </div>
          </div>
        </div>
        
        {/* 倒计时器 */}
        <div className="p-4 bg-orange-50 rounded">
          <h4 className="font-medium mb-3">倒计时器</h4>
          <div className="text-center">
            <div className={\`text-3xl font-mono font-bold mb-4 \${
              countdown.isFinished ? 'text-red-600' : 'text-orange-600'
            }\`}>
              {formatTime(countdown.time)}
            </div>
            <div className="flex justify-center space-x-2">
              <button
                onClick={countdown.start}
                disabled={countdown.isRunning || countdown.time === 0}
                className="px-3 py-1 bg-green-500 text-white rounded text-sm hover:bg-green-600 disabled:opacity-50"
              >
                开始
              </button>
              <button
                onClick={countdown.pause}
                disabled={!countdown.isRunning}
                className="px-3 py-1 bg-yellow-500 text-white rounded text-sm hover:bg-yellow-600 disabled:opacity-50"
              >
                暂停
              </button>
              <button
                onClick={countdown.reset}
                className="px-3 py-1 bg-red-500 text-white rounded text-sm hover:bg-red-600"
              >
                重置
              </button>
            </div>
            <div className="mt-2 text-xs text-gray-600">
              状态: {countdown.isFinished ? '已完成' : countdown.isRunning ? '运行中' : '已暂停'}
            </div>
            {countdown.isFinished && (
              <div className="mt-2 text-sm text-red-600 font-medium">
                ⏰ 倒计时结束！
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default BasicTimerDemo;`,C=()=>e.jsx(f,{title:"useTimer",description:"功能完整的计时器管理自定义 Hook",overview:e.jsx("div",{className:"space-y-4",children:e.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-6",children:[e.jsxs("div",{className:"bg-blue-50 p-4 rounded-lg border border-blue-200",children:[e.jsx("h3",{className:"font-semibold text-blue-800 mb-2",children:"🎯 核心概念"}),e.jsxs("ul",{className:"text-sm text-blue-700 space-y-1",children:[e.jsx("li",{children:"• 计时器管理"}),e.jsx("li",{children:"• 完整控制功能"}),e.jsx("li",{children:"• 正向倒计时"}),e.jsx("li",{children:"• 状态监控"})]})]}),e.jsxs("div",{className:"bg-green-50 p-4 rounded-lg border border-green-200",children:[e.jsx("h3",{className:"font-semibold text-green-800 mb-2",children:"✨ 主要优势"}),e.jsxs("ul",{className:"text-sm text-green-700 space-y-1",children:[e.jsx("li",{children:"• 完整控制功能"}),e.jsx("li",{children:"• 自动生命周期"}),e.jsx("li",{children:"• 双向计时"}),e.jsx("li",{children:"• 状态监控"})]})]}),e.jsxs("div",{className:"bg-yellow-50 p-4 rounded-lg border border-yellow-200",children:[e.jsx("h3",{className:"font-semibold text-yellow-800 mb-2",children:"🎪 适用场景"}),e.jsxs("ul",{className:"text-sm text-yellow-700 space-y-1",children:[e.jsx("li",{children:"• 番茄工作法"}),e.jsx("li",{children:"• 运动训练"}),e.jsx("li",{children:"• 考试倒计时"}),e.jsx("li",{children:"• 游戏时限"})]})]}),e.jsxs("div",{className:"bg-red-50 p-4 rounded-lg border border-red-200",children:[e.jsx("h3",{className:"font-semibold text-red-800 mb-2",children:"⚠️ 注意事项"}),e.jsxs("ul",{className:"text-sm text-red-700 space-y-1",children:[e.jsx("li",{children:"• 自动清理定时器"}),e.jsx("li",{children:"• 函数性能优化"}),e.jsx("li",{children:"• 初始时间设置"}),e.jsx("li",{children:"• 完成状态回调"})]})]})]})}),examples:[{title:"基础用法",component:e.jsx(j,{}),description:"展示 useTimer 的基本计时和倒计时功能",observationPoints:["观察正向计时器的时间递增","注意倒计时器的时间递减和完成提示","查看开始、暂停、重置按钮的状态变化"],keyPoints:["useTimer 提供完整的计时器控制功能","支持正向计时和倒计时两种模式","自动管理定时器的启动和清理"],codeExample:{title:"基础计时器演示",code:T,language:"typescript",highlights:"15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30"}},{title:"高级应用",component:e.jsx(N,{}),description:"展示 useTimer 在复杂场景中的应用",observationPoints:["观察自定义时间设置的功能","查看番茄工作法的自动切换机制","注意工作和休息状态的视觉区分"],keyPoints:["可以动态设置计时器的初始时间","支持复杂的状态切换逻辑","适合实现专业的时间管理工具"],codeExample:{title:"高级计时器演示",code:y,language:"typescript",highlights:"20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35"}}],tutorial:{concepts:["useTimer 使用 useState 管理时间和运行状态","使用 useRef 存储定时器引用，避免闭包问题","useCallback 优化函数性能，避免不必要的重新创建","useEffect 清理函数确保组件卸载时清理定时器"],steps:["创建时间状态和运行状态的 useState","使用 useRef 创建定时器引用","实现 start、pause、reset 等控制函数","在 useEffect 中添加清理逻辑"],tips:["使用 useCallback 包装控制函数以优化性能","在 setInterval 回调中使用函数式更新避免闭包问题","为倒计时器添加完成状态的检测逻辑","考虑添加毫秒级精度的计时功能"]},interview:{questions:[{question:"useTimer Hook 如何避免内存泄漏？",answer:"useTimer 通过多种方式避免内存泄漏：1) 使用 useRef 存储定时器引用；2) 在 pause 和 reset 函数中主动清理定时器；3) 在 useEffect 的清理函数中确保组件卸载时清理定时器；4) 在状态更新时检查定时器的有效性。"},{question:"为什么在 setInterval 回调中使用函数式更新？",answer:"使用函数式更新（如 setTime(prevTime => prevTime + 1)）是为了避免闭包问题。如果直接使用 setTime(time + 1)，由于闭包的特性，time 的值会被固定在创建定时器时的值，导致计时器无法正常工作。函数式更新确保每次都能获取到最新的状态值。"},{question:"useTimer 中的 useCallback 起什么作用？",answer:"useCallback 用于优化性能，避免在每次渲染时重新创建函数。由于 start、pause、reset 等函数可能会作为 props 传递给子组件，如果每次都创建新函数，会导致子组件不必要的重新渲染。useCallback 确保只有在依赖项变化时才重新创建函数。"},{question:"如何实现毫秒级精度的计时器？",answer:"可以通过以下方式实现毫秒级精度：1) 将 setInterval 的间隔设置为更小的值（如 10ms）；2) 记录开始时间戳，每次更新时计算实际经过的时间；3) 使用 requestAnimationFrame 替代 setInterval 获得更好的性能；4) 考虑使用 Web Workers 在后台线程中处理计时逻辑。"},{question:"useTimer 与原生 setTimeout/setInterval 的优势是什么？",answer:"useTimer 的优势包括：1) 自动管理生命周期，无需手动清理；2) 提供了完整的控制接口（开始、暂停、重置）；3) 集成了 React 的状态管理；4) 提供了运行状态的监控；5) 使用 useCallback 优化了性能；6) 代码更简洁，减少了样板代码。"}],keyPoints:["useTimer 提供完整的计时器控制功能","使用 useRef 存储定时器引用避免闭包问题","useCallback 优化函数性能，避免不必要的重新创建","支持正向计时和倒计时两种模式","自动管理定时器生命周期，防止内存泄漏","提供运行状态和完成状态的监控","函数式状态更新确保计时器正常工作","适合实现各种时间相关的应用功能"]},bestPractices:{dos:["使用 useCallback 优化控制函数的性能","在状态更新中使用函数式更新避免闭包问题","为定时器添加完成状态的检测和处理","在组件卸载时确保清理所有定时器","为不同的计时器场景提供专门的 Hook","添加时间格式化功能提升用户体验","考虑添加暂停恢复的视觉反馈","为长时间计时提供持久化存储","实现计时器的声音或振动提醒","添加计时器的历史记录功能"],donts:["不要忘记在组件卸载时清理定时器","不要在 setInterval 回调中直接使用状态值","不要创建过多的定时器影响性能","不要在定时器回调中进行重型计算","不要忽略定时器的错误处理","不要在循环或条件语句中创建定时器","不要将定时器逻辑与业务逻辑过度耦合","不要忘记处理页面不可见时的计时器行为","不要在定时器中进行同步的网络请求","不要忽略不同浏览器的定时器精度差异"],patterns:["基础计时器模式：简单的开始、暂停、重置功能","倒计时模式：带有完成检测的倒计时功能","番茄工作法模式：工作和休息时间的自动切换","多阶段计时模式：支持多个连续的计时阶段","精确计时模式：使用时间戳确保计时精度","持久化计时模式：计时器状态的本地存储","后台计时模式：页面不可见时的计时处理","同步计时模式：多个计时器的同步控制","条件计时模式：基于条件的自动开始/停止","通知计时模式：集成通知和提醒功能"]}});export{C as default};
