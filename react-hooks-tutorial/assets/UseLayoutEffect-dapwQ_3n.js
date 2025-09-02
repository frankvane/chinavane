import{r,j as e}from"./index-D5aG88J3.js";import{C as y}from"./ComponentTemplate-DZf1RTVD.js";const v=()=>{const[n,f]=r.useState(0),[o,u]=r.useState([]),[i,x]=r.useState("#f3f4f6"),[a,p]=r.useState("#f3f4f6");r.useEffect(()=>{const c=new Date().toLocaleTimeString("zh-CN",{hour12:!1,hour:"2-digit",minute:"2-digit",second:"2-digit",fractionalSecondDigits:3}),m={id:Date.now()+Math.random(),type:"useEffect",timestamp:c,count:n};u(s=>[...s.slice(-7),m]);const t=["#fef3c7","#fed7aa","#fecaca","#e0e7ff","#d1fae5"];x(t[n%t.length])},[n]),r.useLayoutEffect(()=>{const c=new Date().toLocaleTimeString("zh-CN",{hour12:!1,hour:"2-digit",minute:"2-digit",second:"2-digit",fractionalSecondDigits:3}),m={id:Date.now()+Math.random()+.1,type:"useLayoutEffect",timestamp:c,count:n};u(s=>[...s.slice(-7),m]);const t=["#ddd6fe","#fde68a","#fbb6ce","#a7f3d0","#fed7d7"];p(t[n%t.length])},[n]);const h=()=>{f(c=>c+1)},l=()=>{u([])};return e.jsxs("div",{className:"p-6 bg-white rounded-lg border border-gray-200",children:[e.jsxs("div",{className:"flex items-center justify-between mb-4",children:[e.jsx("h3",{className:"text-lg font-semibold text-gray-800",children:"执行时机对比"}),e.jsxs("div",{className:"flex items-center space-x-3",children:[e.jsxs("button",{onClick:h,className:"px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition-colors",children:["增加计数 (",n,")"]}),e.jsx("button",{onClick:l,className:"px-3 py-1 bg-gray-500 text-white rounded text-sm hover:bg-gray-600 transition-colors",children:"清空日志"})]})]}),e.jsxs("div",{className:"grid grid-cols-1 lg:grid-cols-2 gap-6",children:[e.jsxs("div",{className:"space-y-4",children:[e.jsxs("div",{className:"text-center mb-4",children:[e.jsx("h4",{className:"font-semibold text-gray-700 mb-2",children:"效果演示"}),e.jsx("p",{className:"text-sm text-gray-600",children:"观察两个盒子背景色的变化时机"})]}),e.jsxs("div",{className:"space-y-3",children:[e.jsx("div",{className:"p-4 rounded-lg border-2 border-blue-200 transition-all duration-300",style:{backgroundColor:i},children:e.jsxs("div",{className:"text-center",children:[e.jsx("h5",{className:"font-semibold text-blue-800 mb-1",children:"useEffect"}),e.jsx("p",{className:"text-sm text-blue-600",children:"异步执行 • 绘制后"}),e.jsxs("p",{className:"text-xs text-blue-500 mt-1",children:["当前计数: ",n]})]})}),e.jsx("div",{className:"p-4 rounded-lg border-2 border-purple-200 transition-all duration-300",style:{backgroundColor:a},children:e.jsxs("div",{className:"text-center",children:[e.jsx("h5",{className:"font-semibold text-purple-800 mb-1",children:"useLayoutEffect"}),e.jsx("p",{className:"text-sm text-purple-600",children:"同步执行 • 绘制前"}),e.jsxs("p",{className:"text-xs text-purple-500 mt-1",children:["当前计数: ",n]})]})})]})]}),e.jsxs("div",{children:[e.jsxs("div",{className:"text-center mb-4",children:[e.jsx("h4",{className:"font-semibold text-gray-700 mb-2",children:"执行时序日志"}),e.jsx("p",{className:"text-sm text-gray-600",children:"记录两种 Effect 的执行顺序和时间"})]}),e.jsx("div",{className:"bg-gray-50 rounded-lg p-4 max-h-80 overflow-y-auto",children:o.length===0?e.jsx("p",{className:"text-gray-500 text-center py-4",children:"暂无执行日志"}):e.jsx("div",{className:"space-y-2",children:o.map(c=>e.jsxs("div",{className:`p-2 rounded text-sm ${c.type==="useLayoutEffect"?"bg-purple-100 text-purple-800 border border-purple-200":"bg-blue-100 text-blue-800 border border-blue-200"}`,children:[e.jsxs("div",{className:"flex justify-between items-center",children:[e.jsx("span",{className:"font-semibold",children:c.type==="useLayoutEffect"?"🟣 useLayoutEffect":"🔵 useEffect"}),e.jsxs("span",{className:"text-xs opacity-75",children:["计数: ",c.count]})]}),e.jsx("div",{className:"text-xs opacity-75 mt-1",children:c.timestamp})]},c.id))})})]})]}),e.jsxs("div",{className:"mt-6 grid grid-cols-1 md:grid-cols-2 gap-4",children:[e.jsxs("div",{className:"p-3 bg-blue-50 rounded border border-blue-200",children:[e.jsx("h4",{className:"font-semibold text-blue-800 mb-2",children:"🔵 useEffect"}),e.jsxs("ul",{className:"text-sm text-blue-700 space-y-1",children:[e.jsx("li",{children:"• 在浏览器绘制后异步执行"}),e.jsx("li",{children:"• 不会阻塞浏览器绘制"}),e.jsx("li",{children:"• 适用于数据获取、订阅等"}),e.jsx("li",{children:"• 执行时机较晚"})]})]}),e.jsxs("div",{className:"p-3 bg-purple-50 rounded border border-purple-200",children:[e.jsx("h4",{className:"font-semibold text-purple-800 mb-2",children:"🟣 useLayoutEffect"}),e.jsxs("ul",{className:"text-sm text-purple-700 space-y-1",children:[e.jsx("li",{children:"• 在浏览器绘制前同步执行"}),e.jsx("li",{children:"• 会阻塞浏览器绘制"}),e.jsx("li",{children:"• 适用于 DOM 操作、测量等"}),e.jsx("li",{children:"• 执行时机较早"})]})]})]}),e.jsx("div",{className:"mt-4 p-3 bg-yellow-50 rounded border border-yellow-200",children:e.jsx("p",{className:"text-sm text-yellow-800",children:'💡 点击"增加计数"按钮观察执行顺序。useLayoutEffect 总是在 useEffect 之前执行， 这是因为它在浏览器绘制前同步执行，而 useEffect 在绘制后异步执行。'})})]})},N=()=>{const[n,f]=r.useState([{id:1,text:"Item 1",color:"#fef3c7"},{id:2,text:"Item 2",color:"#fed7aa"},{id:3,text:"Item 3",color:"#fecaca"}]),[o,u]=r.useState([]),[i,x]=r.useState(!1),a=r.useRef([]),p=r.useRef(null);r.useLayoutEffect(()=>{const t=a.current.map(s=>{if(s){const d=s.getBoundingClientRect();return{width:Math.round(d.width),height:Math.round(d.height)}}return{width:0,height:0}});u(t)},[n,i]);const h=()=>{const t=["#e0e7ff","#d1fae5","#fde68a","#fbb6ce","#a7f3d0","#fed7d7"],s={id:Date.now(),text:`Item ${n.length+1}`,color:t[Math.floor(Math.random()*t.length)]};f(d=>[...d,s])},l=t=>{f(s=>s.filter(d=>d.id!==t)),a.current=a.current.filter((s,d)=>{const g=n.findIndex(b=>b.id===t);return d!==g})},c=()=>{f([]),a.current=[]},m=()=>{x(t=>!t)};return e.jsxs("div",{className:"p-6 bg-white rounded-lg border border-gray-200",children:[e.jsxs("div",{className:"flex items-center justify-between mb-4",children:[e.jsx("h3",{className:"text-lg font-semibold text-gray-800",children:"DOM 元素测量"}),e.jsxs("div",{className:"flex items-center space-x-3",children:[e.jsxs("label",{className:"flex items-center space-x-2",children:[e.jsx("input",{type:"checkbox",checked:i,onChange:m,className:"rounded"}),e.jsx("span",{className:"text-sm text-gray-700",children:"动画效果"})]}),e.jsx("button",{onClick:h,className:"px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600 transition-colors",children:"添加项目"}),e.jsx("button",{onClick:c,className:"px-3 py-1 bg-red-500 text-white rounded text-sm hover:bg-red-600 transition-colors",children:"清空"})]})]}),e.jsxs("div",{className:"grid grid-cols-1 lg:grid-cols-2 gap-6",children:[e.jsxs("div",{children:[e.jsxs("div",{className:"text-center mb-4",children:[e.jsx("h4",{className:"font-semibold text-gray-700 mb-2",children:"动态列表"}),e.jsx("p",{className:"text-sm text-gray-600",children:"添加或删除项目，观察尺寸变化"})]}),e.jsx("div",{ref:p,className:"space-y-3 min-h-[200px] p-4 bg-gray-50 rounded-lg",children:n.length===0?e.jsxs("div",{className:"text-center py-8 text-gray-500",children:[e.jsx("p",{children:"暂无项目"}),e.jsx("p",{className:"text-sm mt-1",children:'点击"添加项目"开始'})]}):n.map((t,s)=>e.jsxs("div",{ref:d=>a.current[s]=d,className:`p-4 rounded-lg border-2 border-gray-300 cursor-pointer transition-all duration-300 ${i?"hover:scale-105 hover:rotate-1":""}`,style:{backgroundColor:t.color,transform:i?`rotate(${Math.sin(s)*2}deg)`:"none"},onClick:()=>l(t.id),children:[e.jsxs("div",{className:"flex justify-between items-center",children:[e.jsx("span",{className:"font-semibold text-gray-800",children:t.text}),e.jsx("button",{className:"text-red-600 hover:text-red-800 text-sm",children:"✕ 删除"})]}),o[s]&&e.jsxs("div",{className:"text-xs text-gray-600 mt-2",children:["尺寸: ",o[s].width," ×"," ",o[s].height," px"]})]},t.id))})]}),e.jsxs("div",{children:[e.jsxs("div",{className:"text-center mb-4",children:[e.jsx("h4",{className:"font-semibold text-gray-700 mb-2",children:"实时测量数据"}),e.jsx("p",{className:"text-sm text-gray-600",children:"useLayoutEffect 确保获取最新尺寸"})]}),e.jsx("div",{className:"bg-gray-50 rounded-lg p-4",children:n.length===0?e.jsx("p",{className:"text-gray-500 text-center py-8",children:"暂无测量数据"}):e.jsxs("div",{className:"space-y-3",children:[e.jsxs("div",{className:"text-sm text-gray-600 mb-3",children:["总计 ",n.length," 个项目"]}),n.map((t,s)=>e.jsxs("div",{className:"p-3 bg-white rounded border border-gray-200",children:[e.jsxs("div",{className:"flex justify-between items-center mb-2",children:[e.jsx("span",{className:"font-semibold text-gray-800",children:t.text}),e.jsx("div",{className:"w-4 h-4 rounded",style:{backgroundColor:t.color}})]}),o[s]?e.jsxs("div",{className:"grid grid-cols-2 gap-2 text-sm",children:[e.jsxs("div",{className:"text-blue-600",children:["宽度:"," ",e.jsxs("span",{className:"font-mono",children:[o[s].width,"px"]})]}),e.jsxs("div",{className:"text-green-600",children:["高度:"," ",e.jsxs("span",{className:"font-mono",children:[o[s].height,"px"]})]}),e.jsxs("div",{className:"col-span-2 text-purple-600",children:["面积:"," ",e.jsxs("span",{className:"font-mono",children:[(o[s].width*o[s].height).toLocaleString(),"px²"]})]})]}):e.jsx("div",{className:"text-gray-400 text-sm",children:"测量中..."})]},t.id)),o.length>0&&e.jsxs("div",{className:"mt-4 p-3 bg-blue-50 rounded border border-blue-200",children:[e.jsx("h5",{className:"font-semibold text-blue-800 mb-2",children:"统计信息"}),e.jsxs("div",{className:"text-sm text-blue-700 space-y-1",children:[e.jsxs("div",{children:["平均宽度:"," ",e.jsxs("span",{className:"font-mono",children:[Math.round(o.reduce((t,s)=>t+s.width,0)/o.length),"px"]})]}),e.jsxs("div",{children:["平均高度:"," ",e.jsxs("span",{className:"font-mono",children:[Math.round(o.reduce((t,s)=>t+s.height,0)/o.length),"px"]})]}),e.jsxs("div",{children:["总面积:"," ",e.jsxs("span",{className:"font-mono",children:[o.reduce((t,s)=>t+s.width*s.height,0).toLocaleString(),"px²"]})]})]})]})]})})]})]}),e.jsxs("div",{className:"mt-6 p-4 bg-blue-50 rounded border border-blue-200",children:[e.jsx("h4",{className:"font-semibold text-blue-800 mb-2",children:"💡 技术说明"}),e.jsxs("div",{className:"text-sm text-blue-700 space-y-2",children:[e.jsxs("p",{children:[e.jsx("strong",{children:"useLayoutEffect 的优势："}),"在 DOM 更新后立即同步获取元素尺寸，确保测量数据的准确性和实时性。"]}),e.jsxs("p",{children:[e.jsx("strong",{children:"应用场景："}),"响应式布局、动态内容尺寸计算、基于内容的布局调整等。"]}),e.jsxs("p",{children:[e.jsx("strong",{children:"与 useEffect 的区别："}),"useLayoutEffect 在浏览器绘制前执行，能获取最新的布局信息； useEffect 在绘制后执行，可能获取到过时的数据。"]})]})]})]})},j=()=>{const[n,f]=r.useState(!0),[o,u]=r.useState(0),[i,x]=r.useState(!1),a=r.useRef(null);r.useLayoutEffect(()=>{if(n&&i&&a.current){const l=["#fef3c7","#fed7aa","#fecaca","#e0e7ff","#d1fae5","#fde68a"],c=l[Math.floor(Math.random()*l.length)],m=.8+Math.random()*.4,t=(Math.random()-.5)*20;a.current.style.backgroundColor=c,a.current.style.transform=`scale(${m}) rotate(${t}deg)`,a.current.style.boxShadow=`0 ${Math.random()*10+5}px ${Math.random()*20+10}px rgba(0,0,0,0.1)`}},[o,n,i]),r.useEffect(()=>{!n&&i&&a.current&&setTimeout(()=>{if(a.current){const l=["#fef3c7","#fed7aa","#fecaca","#e0e7ff","#d1fae5","#fde68a"],c=l[Math.floor(Math.random()*l.length)],m=.8+Math.random()*.4,t=(Math.random()-.5)*20;a.current.style.backgroundColor=c,a.current.style.transform=`scale(${m}) rotate(${t}deg)`,a.current.style.boxShadow=`0 ${Math.random()*10+5}px ${Math.random()*20+10}px rgba(0,0,0,0.1)`}},0)},[o,n,i]);const p=()=>{x(!0),u(l=>l+1)},h=()=>{x(!1),u(0),a.current&&(a.current.style.transform="scale(1)",a.current.style.opacity="1",a.current.style.backgroundColor="#f3f4f6",a.current.style.boxShadow="none")};return e.jsxs("div",{className:"p-6 bg-white rounded-lg border border-gray-200",children:[e.jsxs("div",{className:"flex items-center justify-between mb-4",children:[e.jsx("h3",{className:"text-lg font-semibold text-gray-800",children:"解决闪烁问题"}),e.jsxs("div",{className:"flex items-center space-x-3",children:[e.jsxs("label",{className:"flex items-center space-x-2",children:[e.jsx("input",{type:"checkbox",checked:n,onChange:l=>f(l.target.checked),className:"rounded"}),e.jsx("span",{className:"text-sm text-gray-700",children:"使用 useLayoutEffect"})]}),e.jsx("button",{onClick:p,className:"px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition-colors",children:"开始动画"}),e.jsx("button",{onClick:h,className:"px-3 py-1 bg-gray-500 text-white rounded text-sm hover:bg-gray-600 transition-colors",children:"重置"})]})]}),e.jsxs("div",{className:"flex flex-col items-center space-y-6",children:[e.jsxs("div",{className:"text-center",children:[e.jsxs("p",{className:"text-sm text-gray-600 mb-2",children:["当前模式:"," ",n?"useLayoutEffect (同步)":"useEffect (异步)"]}),e.jsxs("p",{className:"text-xs text-gray-500",children:["动画次数: ",o]})]}),e.jsx("div",{className:"flex justify-center items-center min-h-[200px]",children:e.jsx("div",{ref:a,className:"w-24 h-24 bg-gray-100 rounded-lg border-2 border-gray-300 transition-all duration-300 flex items-center justify-center",style:{transform:"scale(1)",opacity:1},children:e.jsx("span",{className:"text-sm font-semibold text-gray-700",children:"测试盒子"})})}),e.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-4 w-full max-w-2xl",children:[e.jsxs("div",{className:"p-4 bg-red-50 rounded border border-red-200",children:[e.jsx("h4",{className:"font-semibold text-red-800 mb-2",children:"❌ useEffect (异步)"}),e.jsxs("ul",{className:"text-sm text-red-700 space-y-1",children:[e.jsx("li",{children:"• 在浏览器绘制后执行"}),e.jsx("li",{children:"• 可能产生视觉闪烁"}),e.jsx("li",{children:"• 用户可能看到中间状态"}),e.jsx("li",{children:"• 适用于不影响布局的副作用"})]})]}),e.jsxs("div",{className:"p-4 bg-green-50 rounded border border-green-200",children:[e.jsx("h4",{className:"font-semibold text-green-800 mb-2",children:"✅ useLayoutEffect (同步)"}),e.jsxs("ul",{className:"text-sm text-green-700 space-y-1",children:[e.jsx("li",{children:"• 在浏览器绘制前执行"}),e.jsx("li",{children:"• 避免视觉闪烁"}),e.jsx("li",{children:"• 用户只看到最终状态"}),e.jsx("li",{children:"• 适用于 DOM 操作和测量"})]})]})]})]}),e.jsxs("div",{className:"mt-6 space-y-4",children:[e.jsxs("div",{className:"p-4 bg-yellow-50 rounded border border-yellow-200",children:[e.jsx("h4",{className:"font-semibold text-yellow-800 mb-2",children:"💡 观察要点"}),e.jsxs("div",{className:"text-sm text-yellow-700 space-y-1",children:[e.jsxs("p",{children:["• ",e.jsx("strong",{children:"useLayoutEffect 模式："}),"动画更流畅，无闪烁现象"]}),e.jsxs("p",{children:["• ",e.jsx("strong",{children:"useEffect 模式："}),"可能出现短暂的闪烁或中间状态"]}),e.jsxs("p",{children:["• ",e.jsx("strong",{children:"性能考虑："}),"useLayoutEffect 会阻塞绘制，需谨慎使用"]})]})]}),e.jsxs("div",{className:"p-4 bg-blue-50 rounded border border-blue-200",children:[e.jsx("h4",{className:"font-semibold text-blue-800 mb-2",children:"🔧 技术原理"}),e.jsxs("div",{className:"text-sm text-blue-700 space-y-2",children:[e.jsx("p",{children:e.jsx("strong",{children:"执行时机差异："})}),e.jsxs("div",{className:"ml-4 space-y-1",children:[e.jsx("p",{children:"1. 状态更新 → 组件重新渲染 → DOM 更新"}),e.jsxs("p",{children:["2."," ",e.jsx("span",{className:"font-semibold text-purple-600",children:"useLayoutEffect 执行"})," ","(同步，阻塞绘制)"]}),e.jsx("p",{children:"3. 浏览器绘制更新后的 DOM"}),e.jsxs("p",{children:["4."," ",e.jsx("span",{className:"font-semibold text-blue-600",children:"useEffect 执行"})," ","(异步，不阻塞绘制)"]})]}),e.jsxs("p",{className:"mt-2",children:[e.jsx("strong",{children:"闪烁原因："}),"useEffect 在绘制后执行，用户可能先看到初始状态，再看到更新后的状态， 从而产生闪烁。useLayoutEffect 在绘制前完成所有更新，用户只看到最终状态。"]})]})]}),e.jsxs("div",{className:"p-4 bg-purple-50 rounded border border-purple-200",children:[e.jsx("h4",{className:"font-semibold text-purple-800 mb-2",children:"🎯 最佳实践"}),e.jsxs("div",{className:"text-sm text-purple-700 space-y-1",children:[e.jsxs("p",{children:["• ",e.jsx("strong",{children:"默认选择："}),"优先使用 useEffect"]}),e.jsxs("p",{children:["• ",e.jsx("strong",{children:"特殊情况："}),"需要避免闪烁时使用 useLayoutEffect"]}),e.jsxs("p",{children:["• ",e.jsx("strong",{children:"性能考虑："}),"避免在 useLayoutEffect 中执行耗时操作"]}),e.jsxs("p",{children:["• ",e.jsx("strong",{children:"适用场景："}),"DOM 测量、样式调整、滚动位置等"]})]})]})]})]})},E=`import React, { useState, useEffect, useLayoutEffect } from 'react';

interface LogEntry {
  id: number;
  type: 'useEffect' | 'useLayoutEffect';
  timestamp: string;
  count: number;
}

const BasicComparisonDemo: React.FC = () => {
  const [count, setCount] = useState(0);
  const [logs, setLogs] = useState<LogEntry[]>([]);
  const [effectBgColor, setEffectBgColor] = useState('#f3f4f6');
  const [layoutEffectBgColor, setLayoutEffectBgColor] = useState('#f3f4f6');

  // useEffect - 异步执行，在浏览器绘制后
  useEffect(() => {
    const timestamp = new Date().toLocaleTimeString('zh-CN', {
      hour12: false,
      hour: '2-digit',
      minute: '2-digit',
      second: '2-digit',
      fractionalSecondDigits: 3
    });
    
    const newLog: LogEntry = {
      id: Date.now() + Math.random(),
      type: 'useEffect',
      timestamp,
      count
    };
    
    setLogs(prev => [...prev.slice(-7), newLog]);
    
    // 改变背景色以显示执行
    const colors = ['#fef3c7', '#fed7aa', '#fecaca', '#e0e7ff', '#d1fae5'];
    setEffectBgColor(colors[count % colors.length]);
  }, [count]);

  // useLayoutEffect - 同步执行，在浏览器绘制前
  useLayoutEffect(() => {
    const timestamp = new Date().toLocaleTimeString('zh-CN', {
      hour12: false,
      hour: '2-digit',
      minute: '2-digit',
      second: '2-digit',
      fractionalSecondDigits: 3
    });
    
    const newLog: LogEntry = {
      id: Date.now() + Math.random() + 0.1,
      type: 'useLayoutEffect',
      timestamp,
      count
    };
    
    setLogs(prev => [...prev.slice(-7), newLog]);
    
    // 改变背景色以显示执行
    const colors = ['#ddd6fe', '#fde68a', '#fbb6ce', '#a7f3d0', '#fed7d7'];
    setLayoutEffectBgColor(colors[count % colors.length]);
  }, [count]);

  const incrementCount = () => {
    setCount(prev => prev + 1);
  };

  const clearLogs = () => {
    setLogs([]);
  };

  return (
    <div className="p-6 bg-white rounded-lg border border-gray-200">
      <div className="flex items-center justify-between mb-4">
        <h3 className="text-lg font-semibold text-gray-800">执行时机对比</h3>
        <div className="flex items-center space-x-3">
          <button
            onClick={incrementCount}
            className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition-colors"
          >
            增加计数 ({count})
          </button>
          <button
            onClick={clearLogs}
            className="px-3 py-1 bg-gray-500 text-white rounded text-sm hover:bg-gray-600 transition-colors"
          >
            清空日志
          </button>
        </div>
      </div>
      
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* 左侧：效果演示 */}
        <div className="space-y-4">
          <div className="text-center mb-4">
            <h4 className="font-semibold text-gray-700 mb-2">效果演示</h4>
            <p className="text-sm text-gray-600">
              观察两个盒子背景色的变化时机
            </p>
          </div>
          
          <div className="space-y-3">
            <div 
              className="p-4 rounded-lg border-2 border-blue-200 transition-all duration-300"
              style={{ backgroundColor: effectBgColor }}
            >
              <div className="text-center">
                <h5 className="font-semibold text-blue-800 mb-1">useEffect</h5>
                <p className="text-sm text-blue-600">异步执行 • 绘制后</p>
                <p className="text-xs text-blue-500 mt-1">当前计数: {count}</p>
              </div>
            </div>
            
            <div 
              className="p-4 rounded-lg border-2 border-purple-200 transition-all duration-300"
              style={{ backgroundColor: layoutEffectBgColor }}
            >
              <div className="text-center">
                <h5 className="font-semibold text-purple-800 mb-1">useLayoutEffect</h5>
                <p className="text-sm text-purple-600">同步执行 • 绘制前</p>
                <p className="text-xs text-purple-500 mt-1">当前计数: {count}</p>
              </div>
            </div>
          </div>
        </div>
        
        {/* 右侧：执行日志 */}
        <div>
          <div className="text-center mb-4">
            <h4 className="font-semibold text-gray-700 mb-2">执行时序日志</h4>
            <p className="text-sm text-gray-600">
              记录两种 Effect 的执行顺序和时间
            </p>
          </div>
          
          <div className="bg-gray-50 rounded-lg p-4 max-h-80 overflow-y-auto">
            {logs.length === 0 ? (
              <p className="text-gray-500 text-center py-4">暂无执行日志</p>
            ) : (
              <div className="space-y-2">
                {logs.map((log) => (
                  <div
                    key={log.id}
                    className={\`p-2 rounded text-sm \${
                      log.type === 'useLayoutEffect'
                        ? 'bg-purple-100 text-purple-800 border border-purple-200'
                        : 'bg-blue-100 text-blue-800 border border-blue-200'
                    }\`}
                  >
                    <div className="flex justify-between items-center">
                      <span className="font-semibold">
                        {log.type === 'useLayoutEffect' ? '🟣 useLayoutEffect' : '🔵 useEffect'}
                      </span>
                      <span className="text-xs opacity-75">
                        计数: {log.count}
                      </span>
                    </div>
                    <div className="text-xs opacity-75 mt-1">
                      {log.timestamp}
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
      
      <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="p-3 bg-blue-50 rounded border border-blue-200">
          <h4 className="font-semibold text-blue-800 mb-2">🔵 useEffect</h4>
          <ul className="text-sm text-blue-700 space-y-1">
            <li>• 在浏览器绘制后异步执行</li>
            <li>• 不会阻塞浏览器绘制</li>
            <li>• 适用于数据获取、订阅等</li>
            <li>• 执行时机较晚</li>
          </ul>
        </div>
        
        <div className="p-3 bg-purple-50 rounded border border-purple-200">
          <h4 className="font-semibold text-purple-800 mb-2">🟣 useLayoutEffect</h4>
          <ul className="text-sm text-purple-700 space-y-1">
            <li>• 在浏览器绘制前同步执行</li>
            <li>• 会阻塞浏览器绘制</li>
            <li>• 适用于 DOM 操作、测量等</li>
            <li>• 执行时机较早</li>
          </ul>
        </div>
      </div>
      
      <div className="mt-4 p-3 bg-yellow-50 rounded border border-yellow-200">
        <p className="text-sm text-yellow-800">
          💡 点击"增加计数"按钮观察执行顺序。useLayoutEffect 总是在 useEffect 之前执行，
          这是因为它在浏览器绘制前同步执行，而 useEffect 在绘制后异步执行。
        </p>
      </div>
    </div>
  );
};

export default BasicComparisonDemo;`,L=`import React, { useLayoutEffect, useRef, useState } from "react";

interface ItemData {
  id: number;
  text: string;
  color: string;
}

const DOMMeasurementDemo: React.FC = () => {
  const [items, setItems] = useState<ItemData[]>([
    { id: 1, text: "Item 1", color: "#fef3c7" },
    { id: 2, text: "Item 2", color: "#fed7aa" },
    { id: 3, text: "Item 3", color: "#fecaca" },
  ]);
  const [measurements, setMeasurements] = useState<
    { width: number; height: number }[]
  >([]);
  const [animationEnabled, setAnimationEnabled] = useState(false);
  const itemRefs = useRef<(HTMLDivElement | null)[]>([]);
  const containerRef = useRef<HTMLDivElement>(null);

  // 使用 useLayoutEffect 测量 DOM 元素
  useLayoutEffect(() => {
    const newMeasurements = itemRefs.current.map((ref) => {
      if (ref) {
        const rect = ref.getBoundingClientRect();
        return {
          width: Math.round(rect.width),
          height: Math.round(rect.height),
        };
      }
      return { width: 0, height: 0 };
    });

    setMeasurements(newMeasurements);
  }, [items, animationEnabled]); // 当 items 或动画状态变化时重新测量

  const addItem = () => {
    const colors = [
      "#e0e7ff",
      "#d1fae5",
      "#fde68a",
      "#fbb6ce",
      "#a7f3d0",
      "#fed7d7",
    ];
    const newItem: ItemData = {
      id: Date.now(),
      text: \`Item \${items.length + 1}\`,
      color: colors[Math.floor(Math.random() * colors.length)],
    };
    setItems((prev) => [...prev, newItem]);
  };

  const removeItem = (id: number) => {
    setItems((prev) => prev.filter((item) => item.id !== id));
    // 清理对应的 ref
    itemRefs.current = itemRefs.current.filter((_, index) => {
      const itemIndex = items.findIndex((item) => item.id === id);
      return index !== itemIndex;
    });
  };

  const clearItems = () => {
    setItems([]);
    itemRefs.current = [];
  };

  const toggleAnimation = () => {
    setAnimationEnabled((prev) => !prev);
  };

  return (
    <div className="p-6 bg-white rounded-lg border border-gray-200">
      <div className="flex items-center justify-between mb-4">
        <h3 className="text-lg font-semibold text-gray-800">DOM 元素测量</h3>
        <div className="flex items-center space-x-3">
          <label className="flex items-center space-x-2">
            <input
              type="checkbox"
              checked={animationEnabled}
              onChange={toggleAnimation}
              className="rounded"
            />
            <span className="text-sm text-gray-700">动画效果</span>
          </label>
          <button
            onClick={addItem}
            className="px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600 transition-colors"
          >
            添加项目
          </button>
          <button
            onClick={clearItems}
            className="px-3 py-1 bg-red-500 text-white rounded text-sm hover:bg-red-600 transition-colors"
          >
            清空
          </button>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* 左侧：动态列表 */}
        <div>
          <div className="text-center mb-4">
            <h4 className="font-semibold text-gray-700 mb-2">动态列表</h4>
            <p className="text-sm text-gray-600">
              添加或删除项目，观察尺寸变化
            </p>
          </div>

          <div
            ref={containerRef}
            className="space-y-3 min-h-[200px] p-4 bg-gray-50 rounded-lg"
          >
            {items.length === 0 ? (
              <div className="text-center py-8 text-gray-500">
                <p>暂无项目</p>
                <p className="text-sm mt-1">点击"添加项目"开始</p>
              </div>
            ) : (
              items.map((item, index) => (
                <div
                  key={item.id}
                  ref={(el) => (itemRefs.current[index] = el)}
                  className={\`p-4 rounded-lg border-2 border-gray-300 cursor-pointer transition-all duration-300 \${
                    animationEnabled ? "hover:scale-105 hover:rotate-1" : ""
                  }\`}
                  style={{
                    backgroundColor: item.color,
                    transform: animationEnabled
                      ? \`rotate(\${Math.sin(index) * 2}deg)\`
                      : "none",
                  }}
                  onClick={() => removeItem(item.id)}
                >
                  <div className="flex justify-between items-center">
                    <span className="font-semibold text-gray-800">
                      {item.text}
                    </span>
                    <button className="text-red-600 hover:text-red-800 text-sm">
                      ✕ 删除
                    </button>
                  </div>
                  {measurements[index] && (
                    <div className="text-xs text-gray-600 mt-2">
                      尺寸: {measurements[index].width} ×{" "}
                      {measurements[index].height} px
                    </div>
                  )}
                </div>
              ))
            )}
          </div>
        </div>

        {/* 右侧：测量数据 */}
        <div>
          <div className="text-center mb-4">
            <h4 className="font-semibold text-gray-700 mb-2">实时测量数据</h4>
            <p className="text-sm text-gray-600">
              useLayoutEffect 确保获取最新尺寸
            </p>
          </div>

          <div className="bg-gray-50 rounded-lg p-4">
            {items.length === 0 ? (
              <p className="text-gray-500 text-center py-8">暂无测量数据</p>
            ) : (
              <div className="space-y-3">
                <div className="text-sm text-gray-600 mb-3">
                  总计 {items.length} 个项目
                </div>

                {items.map((item, index) => (
                  <div
                    key={item.id}
                    className="p-3 bg-white rounded border border-gray-200"
                  >
                    <div className="flex justify-between items-center mb-2">
                      <span className="font-semibold text-gray-800">
                        {item.text}
                      </span>
                      <div
                        className="w-4 h-4 rounded"
                        style={{ backgroundColor: item.color }}
                      ></div>
                    </div>

                    {measurements[index] ? (
                      <div className="grid grid-cols-2 gap-2 text-sm">
                        <div className="text-blue-600">
                          宽度:{" "}
                          <span className="font-mono">
                            {measurements[index].width}px
                          </span>
                        </div>
                        <div className="text-green-600">
                          高度:{" "}
                          <span className="font-mono">
                            {measurements[index].height}px
                          </span>
                        </div>
                        <div className="col-span-2 text-purple-600">
                          面积:{" "}
                          <span className="font-mono">
                            {(
                              measurements[index].width *
                              measurements[index].height
                            ).toLocaleString()}
                            px²
                          </span>
                        </div>
                      </div>
                    ) : (
                      <div className="text-gray-400 text-sm">测量中...</div>
                    )}
                  </div>
                ))}

                {measurements.length > 0 && (
                  <div className="mt-4 p-3 bg-blue-50 rounded border border-blue-200">
                    <h5 className="font-semibold text-blue-800 mb-2">
                      统计信息
                    </h5>
                    <div className="text-sm text-blue-700 space-y-1">
                      <div>
                        平均宽度:{" "}
                        <span className="font-mono">
                          {Math.round(
                            measurements.reduce((sum, m) => sum + m.width, 0) /
                              measurements.length
                          )}
                          px
                        </span>
                      </div>
                      <div>
                        平均高度:{" "}
                        <span className="font-mono">
                          {Math.round(
                            measurements.reduce((sum, m) => sum + m.height, 0) /
                              measurements.length
                          )}
                          px
                        </span>
                      </div>
                      <div>
                        总面积:{" "}
                        <span className="font-mono">
                          {measurements
                            .reduce((sum, m) => sum + m.width * m.height, 0)
                            .toLocaleString()}
                          px²
                        </span>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            )}
          </div>
        </div>
      </div>

      <div className="mt-6 p-4 bg-blue-50 rounded border border-blue-200">
        <h4 className="font-semibold text-blue-800 mb-2">💡 技术说明</h4>
        <div className="text-sm text-blue-700 space-y-2">
          <p>
            <strong>useLayoutEffect 的优势：</strong>在 DOM
            更新后立即同步获取元素尺寸，确保测量数据的准确性和实时性。
          </p>
          <p>
            <strong>应用场景：</strong>
            响应式布局、动态内容尺寸计算、基于内容的布局调整等。
          </p>
          <p>
            <strong>与 useEffect 的区别：</strong>
            useLayoutEffect 在浏览器绘制前执行，能获取最新的布局信息； useEffect
            在绘制后执行，可能获取到过时的数据。
          </p>
        </div>
      </div>
    </div>
  );
};

export default DOMMeasurementDemo;
`,M=`import React, { useEffect, useLayoutEffect, useRef, useState } from "react";

const FlickerFixDemo: React.FC = () => {
  const [useLayoutEffectMode, setUseLayoutEffectMode] = useState(true);
  const [animationCount, setAnimationCount] = useState(0);
  const [showDemo, setShowDemo] = useState(false);
  const boxRef = useRef<HTMLDivElement>(null);

  // 使用 useLayoutEffect 避免闪烁
  useLayoutEffect(() => {
    if (useLayoutEffectMode && showDemo && boxRef.current) {
      // 在浏览器绘制前完成所有样式更新
      const colors = [
        "#fef3c7",
        "#fed7aa",
        "#fecaca",
        "#e0e7ff",
        "#d1fae5",
        "#fde68a",
      ];
      const randomColor = colors[Math.floor(Math.random() * colors.length)];
      const randomScale = 0.8 + Math.random() * 0.4; // 0.8 - 1.2
      const randomRotate = (Math.random() - 0.5) * 20; // -10deg to 10deg

      boxRef.current.style.backgroundColor = randomColor;
      boxRef.current.style.transform = \`scale(\${randomScale}) rotate(\${randomRotate}deg)\`;
      boxRef.current.style.boxShadow = \`0 \${Math.random() * 10 + 5}px \${
        Math.random() * 20 + 10
      }px rgba(0,0,0,0.1)\`;
    }
  }, [animationCount, useLayoutEffectMode, showDemo]);

  // 使用 useEffect 模拟闪烁问题
  useEffect(() => {
    if (!useLayoutEffectMode && showDemo && boxRef.current) {
      // 模拟异步更新可能导致的闪烁
      setTimeout(() => {
        if (boxRef.current) {
          const colors = [
            "#fef3c7",
            "#fed7aa",
            "#fecaca",
            "#e0e7ff",
            "#d1fae5",
            "#fde68a",
          ];
          const randomColor = colors[Math.floor(Math.random() * colors.length)];
          const randomScale = 0.8 + Math.random() * 0.4;
          const randomRotate = (Math.random() - 0.5) * 20;

          boxRef.current.style.backgroundColor = randomColor;
          boxRef.current.style.transform = \`scale(\${randomScale}) rotate(\${randomRotate}deg)\`;
          boxRef.current.style.boxShadow = \`0 \${Math.random() * 10 + 5}px \${
            Math.random() * 20 + 10
          }px rgba(0,0,0,0.1)\`;
        }
      }, 0);
    }
  }, [animationCount, useLayoutEffectMode, showDemo]);

  const startAnimation = () => {
    setShowDemo(true);
    setAnimationCount((prev) => prev + 1);
  };

  const resetAnimation = () => {
    setShowDemo(false);
    setAnimationCount(0);
    if (boxRef.current) {
      boxRef.current.style.transform = "scale(1)";
      boxRef.current.style.opacity = "1";
      boxRef.current.style.backgroundColor = "#f3f4f6";
      boxRef.current.style.boxShadow = "none";
    }
  };

  return (
    <div className="p-6 bg-white rounded-lg border border-gray-200">
      <div className="flex items-center justify-between mb-4">
        <h3 className="text-lg font-semibold text-gray-800">解决闪烁问题</h3>
        <div className="flex items-center space-x-3">
          <label className="flex items-center space-x-2">
            <input
              type="checkbox"
              checked={useLayoutEffectMode}
              onChange={(e) => setUseLayoutEffectMode(e.target.checked)}
              className="rounded"
            />
            <span className="text-sm text-gray-700">使用 useLayoutEffect</span>
          </label>
          <button
            onClick={startAnimation}
            className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition-colors"
          >
            开始动画
          </button>
          <button
            onClick={resetAnimation}
            className="px-3 py-1 bg-gray-500 text-white rounded text-sm hover:bg-gray-600 transition-colors"
          >
            重置
          </button>
        </div>
      </div>

      <div className="flex flex-col items-center space-y-6">
        <div className="text-center">
          <p className="text-sm text-gray-600 mb-2">
            当前模式:{" "}
            {useLayoutEffectMode
              ? "useLayoutEffect (同步)"
              : "useEffect (异步)"}
          </p>
          <p className="text-xs text-gray-500">动画次数: {animationCount}</p>
        </div>

        <div className="flex justify-center items-center min-h-[200px]">
          <div
            ref={boxRef}
            className="w-24 h-24 bg-gray-100 rounded-lg border-2 border-gray-300 transition-all duration-300 flex items-center justify-center"
            style={{
              transform: "scale(1)",
              opacity: 1,
            }}
          >
            <span className="text-sm font-semibold text-gray-700">
              测试盒子
            </span>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 w-full max-w-2xl">
          <div className="p-4 bg-red-50 rounded border border-red-200">
            <h4 className="font-semibold text-red-800 mb-2">
              ❌ useEffect (异步)
            </h4>
            <ul className="text-sm text-red-700 space-y-1">
              <li>• 在浏览器绘制后执行</li>
              <li>• 可能产生视觉闪烁</li>
              <li>• 用户可能看到中间状态</li>
              <li>• 适用于不影响布局的副作用</li>
            </ul>
          </div>

          <div className="p-4 bg-green-50 rounded border border-green-200">
            <h4 className="font-semibold text-green-800 mb-2">
              ✅ useLayoutEffect (同步)
            </h4>
            <ul className="text-sm text-green-700 space-y-1">
              <li>• 在浏览器绘制前执行</li>
              <li>• 避免视觉闪烁</li>
              <li>• 用户只看到最终状态</li>
              <li>• 适用于 DOM 操作和测量</li>
            </ul>
          </div>
        </div>
      </div>

      <div className="mt-6 space-y-4">
        <div className="p-4 bg-yellow-50 rounded border border-yellow-200">
          <h4 className="font-semibold text-yellow-800 mb-2">💡 观察要点</h4>
          <div className="text-sm text-yellow-700 space-y-1">
            <p>
              • <strong>useLayoutEffect 模式：</strong>动画更流畅，无闪烁现象
            </p>
            <p>
              • <strong>useEffect 模式：</strong>可能出现短暂的闪烁或中间状态
            </p>
            <p>
              • <strong>性能考虑：</strong>useLayoutEffect
              会阻塞绘制，需谨慎使用
            </p>
          </div>
        </div>

        <div className="p-4 bg-blue-50 rounded border border-blue-200">
          <h4 className="font-semibold text-blue-800 mb-2">🔧 技术原理</h4>
          <div className="text-sm text-blue-700 space-y-2">
            <p>
              <strong>执行时机差异：</strong>
            </p>
            <div className="ml-4 space-y-1">
              <p>1. 状态更新 → 组件重新渲染 → DOM 更新</p>
              <p>
                2.{" "}
                <span className="font-semibold text-purple-600">
                  useLayoutEffect 执行
                </span>{" "}
                (同步，阻塞绘制)
              </p>
              <p>3. 浏览器绘制更新后的 DOM</p>
              <p>
                4.{" "}
                <span className="font-semibold text-blue-600">
                  useEffect 执行
                </span>{" "}
                (异步，不阻塞绘制)
              </p>
            </div>
            <p className="mt-2">
              <strong>闪烁原因：</strong>
              useEffect
              在绘制后执行，用户可能先看到初始状态，再看到更新后的状态，
              从而产生闪烁。useLayoutEffect
              在绘制前完成所有更新，用户只看到最终状态。
            </p>
          </div>
        </div>

        <div className="p-4 bg-purple-50 rounded border border-purple-200">
          <h4 className="font-semibold text-purple-800 mb-2">🎯 最佳实践</h4>
          <div className="text-sm text-purple-700 space-y-1">
            <p>
              • <strong>默认选择：</strong>优先使用 useEffect
            </p>
            <p>
              • <strong>特殊情况：</strong>需要避免闪烁时使用 useLayoutEffect
            </p>
            <p>
              • <strong>性能考虑：</strong>避免在 useLayoutEffect 中执行耗时操作
            </p>
            <p>
              • <strong>适用场景：</strong>DOM 测量、样式调整、滚动位置等
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FlickerFixDemo;
`,C=()=>e.jsx(y,{title:"useLayoutEffect",description:"React 中用于在 DOM 更新后、浏览器绘制前同步执行副作用的 Hook。与 useEffect 不同，useLayoutEffect 会阻塞浏览器绘制，确保在用户看到更新前完成所有 DOM 操作。",overview:[{title:"核心概念",items:["同步执行的副作用 Hook","在 DOM 更新后、绘制前执行","阻塞浏览器绘制过程","与 useEffect 语法完全相同"]},{title:"主要优势",items:["避免视觉闪烁问题","确保 DOM 操作的原子性","获取准确的 DOM 测量数据","提供更好的用户体验"]},{title:"适用场景",items:["DOM 元素尺寸测量","滚动位置调整","动画前的样式设置","避免布局闪烁的操作"]},{title:"注意事项",items:["会阻塞浏览器绘制","可能影响性能","不要用于非 DOM 相关操作","优先使用 useEffect"]}],examples:[{title:"useEffect vs useLayoutEffect 对比",component:e.jsx(v,{}),description:"直观对比 useEffect 和 useLayoutEffect 的执行时机和顺序",observationPoints:['点击"增加计数"按钮，观察执行时序日志',"useLayoutEffect 总是在 useEffect 之前执行","两个盒子的背景色变化时机不同","注意执行时间戳的差异","观察同步执行和异步执行的区别"],keyPoints:["useLayoutEffect 在 DOM 更新后立即同步执行","useEffect 在浏览器绘制后异步执行","执行顺序：状态更新 → DOM 更新 → useLayoutEffect → 浏览器绘制 → useEffect","useLayoutEffect 会阻塞浏览器绘制"],commonTraps:["在 useLayoutEffect 中执行耗时操作","不必要地使用 useLayoutEffect","混淆两者的使用场景"],solutions:["只在需要同步 DOM 操作时使用 useLayoutEffect","避免在 useLayoutEffect 中执行复杂计算","优先使用 useEffect，只在必要时使用 useLayoutEffect"],codeExample:{code:E,highlights:[10,20,30],title:"基础对比源码"}},{title:"DOM 元素测量",component:e.jsx(N,{}),description:"使用 useLayoutEffect 实时测量 DOM 元素的尺寸和位置",observationPoints:["添加或删除项目，观察测量数据的实时更新",'点击"动画效果"，观察动画过程中的尺寸变化',"测量数据在 DOM 更新后立即获取","注意测量的准确性和实时性","观察动态列表的布局变化"],keyPoints:["useLayoutEffect 确保获取最新的 DOM 尺寸","在 DOM 更新后立即测量，避免延迟","适用于响应式布局和动态内容","可以基于测量结果进行后续操作"],commonTraps:["在 useEffect 中测量 DOM 可能获取旧数据","忘记清理 ref 数组","测量操作过于频繁影响性能"],solutions:["使用 useLayoutEffect 确保测量时机","合理管理 ref 数组的生命周期","使用防抖或节流优化测量频率"],codeExample:{code:L,highlights:[12,22,32],title:"DOM 测量源码"}},{title:"解决闪烁问题",component:e.jsx(j,{}),description:"演示如何使用 useLayoutEffect 避免 DOM 操作导致的视觉闪烁",observationPoints:['切换"使用 useLayoutEffect"选项','点击"开始动画"观察不同模式下的效果',"useLayoutEffect 模式下动画更流畅","useEffect 模式下可能出现闪烁","注意两种模式的视觉差异"],keyPoints:["useLayoutEffect 在绘制前完成所有 DOM 操作","避免用户看到中间状态","确保视觉更新的原子性","提供更好的用户体验"],commonTraps:["在 useEffect 中进行影响布局的 DOM 操作","忽视闪烁问题对用户体验的影响","不了解两者的执行时机差异"],solutions:["对于影响布局的操作使用 useLayoutEffect","在绘制前完成所有必要的 DOM 更新","合理选择 Hook 类型"],codeExample:{code:M,highlights:[15,25,35],title:"闪烁修复源码"}}],tutorial:{concepts:["useLayoutEffect 的执行时机和特点","与 useEffect 的区别和选择原则","DOM 操作和测量的最佳实践","避免视觉闪烁的技术方案","性能考虑和优化策略"],steps:["从 React 中导入 useLayoutEffect","识别需要同步执行的 DOM 操作","使用 useLayoutEffect 替代 useEffect","设置正确的依赖项数组","测试和验证视觉效果","优化性能和用户体验"],tips:["优先使用 useEffect，只在必要时使用 useLayoutEffect","避免在 useLayoutEffect 中执行耗时操作","使用浏览器开发工具分析渲染性能","结合 requestAnimationFrame 优化动画","考虑使用 CSS 动画替代 JavaScript 动画"]},interview:{questions:[{question:"useLayoutEffect 和 useEffect 有什么区别？",answer:"主要区别在执行时机：useLayoutEffect 在 DOM 更新后、浏览器绘制前同步执行，会阻塞绘制；useEffect 在浏览器绘制后异步执行，不会阻塞绘制。useLayoutEffect 适用于需要同步 DOM 操作的场景。"},{question:"什么时候应该使用 useLayoutEffect？",answer:"当需要在浏览器绘制前完成 DOM 操作时使用：1) 测量 DOM 元素尺寸；2) 避免视觉闪烁的样式更新；3) 滚动位置调整；4) 需要基于 DOM 状态进行计算的场景。其他情况优先使用 useEffect。"},{question:"useLayoutEffect 会影响性能吗？",answer:"是的，useLayoutEffect 会阻塞浏览器绘制，如果执行时间过长会影响性能和用户体验。应该避免在其中执行耗时操作，只进行必要的 DOM 操作和测量。"},{question:"如何选择使用 useEffect 还是 useLayoutEffect？",answer:"选择原则：1) 默认使用 useEffect；2) 如果操作会影响 DOM 布局或需要避免闪烁，使用 useLayoutEffect；3) 如果需要获取准确的 DOM 测量数据，使用 useLayoutEffect；4) 考虑性能影响，避免过度使用。"}],keyPoints:["useLayoutEffect 在 DOM 更新后、绘制前同步执行","主要用于 DOM 操作和测量","可以避免视觉闪烁问题","会阻塞浏览器绘制，需要谨慎使用","语法与 useEffect 完全相同"]},bestPractices:{dos:["在需要同步 DOM 操作时使用 useLayoutEffect","用于测量 DOM 元素尺寸和位置","避免视觉闪烁的样式更新","保持操作简洁和高效","正确设置依赖项数组","结合 ref 进行 DOM 操作"],donts:["不要在 useLayoutEffect 中执行耗时操作","不要过度使用，优先考虑 useEffect","不要在其中进行网络请求","不要忽视性能影响","不要在服务端渲染中使用"],patterns:["DOM 测量模式：获取元素尺寸和位置信息","闪烁避免模式：在绘制前完成样式更新","布局调整模式：基于内容动态调整布局","动画准备模式：在动画开始前设置初始状态"]}});export{C as default};
