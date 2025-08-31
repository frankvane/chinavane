import{r as s,j as e}from"./index-DPG_OKoV.js";import{C}from"./ComponentTemplate-HXLvd6Xe.js";const w=()=>{const[n,f]=s.useState(!1),[a,p]=s.useState([]),[d,r]=s.useState(0),l=(t,i)=>{const g={id:Date.now()+Math.random(),message:t,timestamp:new Date().toLocaleTimeString(),type:i};p(h=>[...h.slice(-4),g])};s.useInsertionEffect(()=>{const t=`
      .dynamic-demo-box {
        background: ${n?"linear-gradient(45deg, #ff6b6b, #feca57)":"linear-gradient(45deg, #74b9ff, #0984e3)"};
        color: white;
        padding: 20px;
        border-radius: 12px;
        text-align: center;
        font-weight: bold;
        transition: all 0.3s ease;
        transform: ${n?"scale(1.05) rotate(2deg)":"scale(1)"};
        box-shadow: ${n?"0 8px 25px rgba(255, 107, 107, 0.3)":"0 4px 15px rgba(116, 185, 255, 0.3)"};
      }
      .dynamic-demo-box:hover {
        transform: ${n?"scale(1.1) rotate(3deg)":"scale(1.02)"};
      }
    `,i=document.createElement("style");return i.id="basic-css-injection-demo",i.textContent=t,document.head.appendChild(i),()=>{const g=document.getElementById("basic-css-injection-demo");g&&g.remove()}},[n]),s.useLayoutEffect(()=>{},[n]),s.useEffect(()=>{l("useInsertionEffect: 样式注入完成","insertion"),l("useLayoutEffect: DOM 布局完成后执行","layout"),l("useEffect: 渲染完成后执行","effect"),r(t=>t+1)},[n]);const m=()=>{p([])};return e.jsxs("div",{className:"space-y-6",children:[e.jsxs("div",{className:"bg-gray-50 p-4 rounded-lg",children:[e.jsxs("div",{className:"flex flex-wrap gap-3 mb-4",children:[e.jsx("button",{onClick:()=>f(!n),className:`px-4 py-2 rounded-lg font-medium transition-colors ${n?"bg-orange-500 text-white hover:bg-orange-600":"bg-blue-500 text-white hover:bg-blue-600"}`,children:n?"停用样式":"激活样式"}),e.jsx("button",{onClick:m,className:"px-4 py-2 bg-gray-500 text-white rounded-lg hover:bg-gray-600 transition-colors",children:"清空日志"})]}),e.jsxs("div",{className:"text-sm text-gray-600",children:["渲染次数: ",e.jsx("span",{className:"font-mono font-bold",children:d})]})]}),e.jsxs("div",{className:"grid grid-cols-1 lg:grid-cols-2 gap-6",children:[e.jsxs("div",{className:"space-y-4",children:[e.jsx("h3",{className:"text-lg font-semibold text-gray-800",children:"样式演示"}),e.jsxs("div",{className:"dynamic-demo-box",children:[e.jsx("div",{className:"text-xl mb-2",children:"🎨 动态样式演示"}),e.jsxs("div",{className:"text-sm opacity-90",children:["状态: ",n?"激活":"未激活"]})]}),e.jsxs("div",{className:"text-sm text-gray-600 bg-blue-50 p-3 rounded-lg",children:[e.jsx("strong",{children:"💡 开发者提示:"}),e.jsx("br",{}),"useInsertionEffect 确保样式在组件渲染前就位，避免样式闪烁问题。 这对于 CSS-in-JS 库特别重要。"]})]}),e.jsxs("div",{className:"space-y-4",children:[e.jsx("h3",{className:"text-lg font-semibold text-gray-800",children:"执行顺序日志"}),e.jsx("div",{className:"bg-gray-900 text-green-400 p-4 rounded-lg font-mono text-sm max-h-80 overflow-y-auto",children:a.length===0?e.jsx("div",{className:"text-gray-500",children:"暂无日志记录..."}):a.map(t=>e.jsxs("div",{className:"mb-1",children:[e.jsxs("span",{className:"text-gray-500",children:["[",t.timestamp,"]"]}),e.jsx("span",{className:`ml-2 ${t.type==="insertion"?"text-red-400":t.type==="layout"?"text-yellow-400":"text-blue-400"}`,children:t.message})]},t.id))}),e.jsxs("div",{className:"text-xs text-gray-600 space-y-1",children:[e.jsxs("div",{className:"flex items-center gap-2",children:[e.jsx("div",{className:"w-3 h-3 bg-red-400 rounded"}),e.jsx("span",{children:"useInsertionEffect (最早执行)"})]}),e.jsxs("div",{className:"flex items-center gap-2",children:[e.jsx("div",{className:"w-3 h-3 bg-yellow-400 rounded"}),e.jsx("span",{children:"useLayoutEffect (DOM 变更后)"})]}),e.jsxs("div",{className:"flex items-center gap-2",children:[e.jsx("div",{className:"w-3 h-3 bg-blue-400 rounded"}),e.jsx("span",{children:"useEffect (渲染完成后)"})]})]})]})]})]})},k=()=>{const[n,f]=s.useState([]),[a,p]=s.useState(1),d=()=>{const t=Math.floor(Math.random()*360),i=Math.floor(Math.random()*360),g=70+Math.floor(Math.random()*20),h=50+Math.floor(Math.random()*20);return`linear-gradient(45deg,
      hsl(${t}, ${g}%, ${h}%),
      hsl(${i}, ${g}%, ${h+10}%)
    )`},r=s.useCallback(()=>{const t={id:`component-${a}`,name:`Component ${a}`,className:`styled-component-${a}-${Date.now()}`};f(i=>[...i,t]),p(i=>i+1)},[a]),l=s.useCallback(t=>{f(i=>i.filter(g=>g.id!==t))},[]),m=s.useCallback(()=>{f([])},[]);return e.jsxs("div",{className:"space-y-6",children:[e.jsx("div",{className:"bg-gray-50 p-4 rounded-lg",children:e.jsxs("div",{className:"flex flex-wrap gap-3 items-center",children:[e.jsx("button",{onClick:r,className:"px-4 py-2 bg-green-500 text-white rounded-lg hover:bg-green-600 transition-colors font-medium",children:"➕ 添加组件"}),e.jsx("button",{onClick:m,className:"px-4 py-2 bg-red-500 text-white rounded-lg hover:bg-red-600 transition-colors font-medium",disabled:n.length===0,children:"🗑️ 清空所有"}),e.jsxs("div",{className:"text-sm text-gray-600",children:["当前组件数量:"," ",e.jsx("span",{className:"font-mono font-bold",children:n.length})]}),e.jsxs("div",{className:"text-sm text-gray-600",children:["样式表数量:"," ",e.jsx("span",{className:"font-mono font-bold",children:n.length})]})]})}),e.jsxs("div",{className:"space-y-4",children:[e.jsx("h3",{className:"text-lg font-semibold text-gray-800",children:"动态生成的样式组件"}),n.length===0?e.jsxs("div",{className:"text-center py-12 text-gray-500",children:[e.jsx("div",{className:"text-4xl mb-2",children:"🎨"}),e.jsx("p",{children:'点击"添加组件"开始创建动态样式组件'})]}):e.jsx("div",{className:"grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4",children:n.map(t=>e.jsx(I,{component:t,onRemove:l,gradient:d()},t.id))})]}),e.jsxs("div",{className:"text-sm text-gray-600 bg-blue-50 p-4 rounded-lg",children:[e.jsx("strong",{children:"💡 CSS-in-JS 模拟说明:"}),e.jsxs("ul",{className:"mt-2 space-y-1 list-disc list-inside",children:[e.jsx("li",{children:"每个组件都有独立的样式表，通过 useInsertionEffect 动态注入"}),e.jsx("li",{children:"样式类名使用时间戳确保唯一性，避免冲突"}),e.jsx("li",{children:"组件移除时会自动清理对应的样式表"}),e.jsx("li",{children:"模拟了真实 CSS-in-JS 库的样式生命周期管理"})]})]})]})},I=({component:n,onRemove:f,gradient:a})=>{s.useInsertionEffect(()=>{const d=`
      .${n.className} {
        background: ${a};
        color: white;
        padding: 16px;
        border-radius: 12px;
        text-align: center;
        font-weight: 600;
        cursor: pointer;
        transition: all 0.3s ease;
        border: 2px solid transparent;
        position: relative;
        overflow: hidden;
      }

      .${n.className}::before {
        content: '';
        position: absolute;
        top: 0;
        left: -100%;
        width: 100%;
        height: 100%;
        background: linear-gradient(90deg, transparent, rgba(255,255,255,0.2), transparent);
        transition: left 0.5s ease;
      }

      .${n.className}:hover {
        transform: translateY(-4px) scale(1.02);
        box-shadow: 0 8px 25px rgba(0, 0, 0, 0.15);
        border-color: rgba(255, 255, 255, 0.3);
      }

      .${n.className}:hover::before {
        left: 100%;
      }

      .${n.className}:active {
        transform: translateY(-2px) scale(0.98);
      }

      .${n.className} .remove-btn {
        position: absolute;
        top: 4px;
        right: 4px;
        background: rgba(255, 255, 255, 0.2);
        border: none;
        color: white;
        width: 24px;
        height: 24px;
        border-radius: 50%;
        cursor: pointer;
        display: flex;
        align-items: center;
        justify-content: center;
        font-size: 12px;
        opacity: 0;
        transition: opacity 0.2s ease;
      }

      .${n.className}:hover .remove-btn {
        opacity: 1;
      }

      .${n.className} .remove-btn:hover {
        background: rgba(255, 255, 255, 0.3);
      }
    `,r=document.createElement("style");return r.id=`style-${n.className}`,r.textContent=d,document.head.appendChild(r),()=>{const l=document.getElementById(`style-${n.className}`);l&&l.remove()}},[n.className,a]);const p=d=>{d.stopPropagation(),f(n.id)};return e.jsxs("div",{className:n.className,children:[e.jsx("button",{className:"remove-btn",onClick:p,title:"移除组件",children:"×"}),e.jsx("div",{className:"text-lg mb-1",children:n.name}),e.jsxs("div",{className:"text-xs opacity-90",children:["类名: ",n.className]}),e.jsx("div",{className:"text-xs opacity-75 mt-2",children:"点击移除 | 悬停查看效果"})]})},D=()=>{const[n,f]=s.useState("light"),[a,p]=s.useState(!1);s.useInsertionEffect(()=>{const r=document.getElementById("dynamic-theme-styles");r&&r.remove();const l={light:`
        .theme-demo-container {
          background: linear-gradient(135deg, #f5f7fa 0%, #c3cfe2 100%);
          color: #333;
          border: 2px solid #e2e8f0;
        }
        .theme-demo-card {
          background: rgba(255, 255, 255, 0.9);
          color: #2d3748;
          border: 1px solid #e2e8f0;
          box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
        }
        .theme-demo-card:hover {
          box-shadow: 0 8px 15px rgba(0, 0, 0, 0.15);
          transform: translateY(-2px);
        }
      `,dark:`
        .theme-demo-container {
          background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
          color: white;
          border: 2px solid #4a5568;
        }
        .theme-demo-card {
          background: rgba(45, 55, 72, 0.9);
          color: #e2e8f0;
          border: 1px solid #4a5568;
          box-shadow: 0 4px 6px rgba(0, 0, 0, 0.3);
        }
        .theme-demo-card:hover {
          box-shadow: 0 8px 15px rgba(0, 0, 0, 0.4);
          transform: translateY(-2px);
        }
      `,colorful:`
        .theme-demo-container {
          background: linear-gradient(45deg, #ff6b6b, #feca57, #48dbfb, #ff9ff3, #54a0ff);
          background-size: 300% 300%;
          color: white;
          border: 2px solid #fff;
          ${a?`
            animation: rainbow-bg 3s ease infinite;
          `:""}
        }
        .theme-demo-card {
          background: rgba(255, 255, 255, 0.2);
          color: white;
          border: 1px solid rgba(255, 255, 255, 0.3);
          backdrop-filter: blur(10px);
          box-shadow: 0 4px 6px rgba(0, 0, 0, 0.2);
        }
        .theme-demo-card:hover {
          background: rgba(255, 255, 255, 0.3);
          box-shadow: 0 8px 15px rgba(0, 0, 0, 0.3);
          transform: translateY(-2px) scale(1.02);
        }
        @keyframes rainbow-bg {
          0% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
        }
      `},m=document.createElement("style");return m.id="dynamic-theme-styles",m.textContent=`
      .theme-demo-container {
        padding: 24px;
        border-radius: 16px;
        transition: all 0.3s ease;
        min-height: 200px;
      }
      .theme-demo-card {
        padding: 16px;
        border-radius: 12px;
        transition: all 0.3s ease;
        cursor: pointer;
      }
      ${l[n]}
    `,document.head.appendChild(m),()=>{const t=document.getElementById("dynamic-theme-styles");t&&t.remove()}},[n,a]);const d=[{key:"light",label:"🌞 浅色主题",color:"bg-blue-500 hover:bg-blue-600"},{key:"dark",label:"🌙 深色主题",color:"bg-purple-500 hover:bg-purple-600"},{key:"colorful",label:"🌈 彩色主题",color:"bg-gradient-to-r from-pink-500 to-yellow-500 hover:from-pink-600 hover:to-yellow-600"}];return e.jsxs("div",{className:"space-y-6",children:[e.jsx("div",{className:"bg-gray-50 p-4 rounded-lg",children:e.jsxs("div",{className:"space-y-4",children:[e.jsxs("div",{children:[e.jsx("h4",{className:"text-sm font-medium text-gray-700 mb-2",children:"选择主题:"}),e.jsx("div",{className:"flex flex-wrap gap-2",children:d.map(({key:r,label:l,color:m})=>e.jsx("button",{onClick:()=>f(r),className:`px-4 py-2 rounded-lg text-white font-medium transition-all ${n===r?`${m} ring-2 ring-offset-2 ring-gray-400`:m}`,children:l},r))})]}),n==="colorful"&&e.jsx("div",{children:e.jsxs("label",{className:"flex items-center gap-2 text-sm text-gray-700",children:[e.jsx("input",{type:"checkbox",checked:a,onChange:r=>p(r.target.checked),className:"rounded"}),"启用彩虹动画效果"]})})]})}),e.jsxs("div",{className:"theme-demo-container",children:[e.jsxs("div",{className:"text-center mb-6",children:[e.jsx("h3",{className:"text-2xl font-bold mb-2",children:"🎨 动态主题演示"}),e.jsxs("p",{className:"opacity-90",children:["当前主题: ",e.jsx("span",{className:"font-semibold",children:n}),n==="colorful"&&a&&" (动画已启用)"]})]}),e.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-4",children:[e.jsxs("div",{className:"theme-demo-card",children:[e.jsx("h4",{className:"text-lg font-semibold mb-2",children:"📝 示例卡片 1"}),e.jsx("p",{className:"text-sm opacity-90",children:"这是一个演示卡片，展示当前主题的样式效果。 悬停查看交互效果。"})]}),e.jsxs("div",{className:"theme-demo-card",children:[e.jsx("h4",{className:"text-lg font-semibold mb-2",children:"🚀 示例卡片 2"}),e.jsx("p",{className:"text-sm opacity-90",children:"主题切换通过 useInsertionEffect 实现， 确保样式在渲染前就位，无闪烁体验。"})]})]})]}),e.jsxs("div",{className:"text-sm text-gray-600 bg-blue-50 p-4 rounded-lg",children:[e.jsx("strong",{children:"💡 技术说明:"}),e.jsxs("ul",{className:"mt-2 space-y-1 list-disc list-inside",children:[e.jsx("li",{children:"使用 useInsertionEffect 确保主题样式在渲染前注入"}),e.jsx("li",{children:"支持动态主题切换，包含复杂的 CSS 动画"}),e.jsx("li",{children:"样式表会在主题变化时自动更新和清理"}),e.jsx("li",{children:"彩色主题展示了高级 CSS 效果的动态注入"})]})]})]})},$=()=>{const[n,f]=s.useState(!0),[a,p]=s.useState(0),[d,r]=s.useState([]),[l,m]=s.useState(!1),t=s.useRef([]),i=s.useCallback((o,c)=>{const u={hookType:o,executionTime:c,timestamp:new Date().toLocaleTimeString()};t.current=[...t.current.slice(-4),u]},[]),g=()=>{const o=["#ff6b6b","#4ecdc4","#45b7d1","#96ceb4","#feca57","#ff9ff3"],c=o[Math.floor(Math.random()*o.length)],u=o[Math.floor(Math.random()*o.length)];return`
      .performance-test-box {
        background: linear-gradient(45deg, ${c}, ${u});
        color: white;
        padding: 20px;
        border-radius: 12px;
        text-align: center;
        font-weight: bold;
        transition: all 0.3s ease;
        transform: rotate(${Math.random()*10-5}deg);
        box-shadow: 0 ${4+Math.random()*8}px ${15+Math.random()*10}px rgba(0, 0, 0, 0.2);
      }
      .performance-test-box:hover {
        transform: scale(1.05) rotate(${Math.random()*20-10}deg);
      }
    `};s.useInsertionEffect(()=>{if(!n)return;const o=performance.now(),c=document.getElementById("performance-test-insertion");c&&c.remove();const u=g(),x=document.createElement("style");x.id="performance-test-insertion",x.textContent=u,document.head.appendChild(x);const v=performance.now()-o;return i("useInsertionEffect",v),()=>{const b=document.getElementById("performance-test-insertion");b&&b.remove()}},[n,a,i]),s.useEffect(()=>{if(n)return;const o=performance.now(),c=document.getElementById("performance-test-effect");c&&c.remove();const u=g(),x=document.createElement("style");x.id="performance-test-effect",x.textContent=u,document.head.appendChild(x);const v=performance.now()-o;return i("useEffect",v),()=>{const b=document.getElementById("performance-test-effect");b&&b.remove()}},[n,a,i]),s.useEffect(()=>{r([...t.current]),m(!1)},[a,n]);const h=()=>{m(!0),p(o=>o+1)},E=()=>{f(o=>!o)},S=()=>{r([]),t.current=[]},N=o=>{const c=d.filter(x=>x.hookType===o);return c.length===0?0:(c.reduce((x,y)=>x+y.executionTime,0)/c.length).toFixed(3)},j=o=>d.filter(c=>c.hookType===o).length;return e.jsxs("div",{className:"space-y-6",children:[e.jsxs("div",{className:"bg-gray-50 p-4 rounded-lg",children:[e.jsxs("div",{className:"flex flex-wrap gap-3 items-center mb-4",children:[e.jsxs("button",{onClick:E,className:`px-4 py-2 rounded-lg font-medium transition-colors ${n?"bg-red-500 text-white hover:bg-red-600":"bg-blue-500 text-white hover:bg-blue-600"}`,children:["当前: ",n?"useInsertionEffect":"useEffect"]}),e.jsx("button",{onClick:h,className:"px-4 py-2 bg-green-500 text-white rounded-lg hover:bg-green-600 transition-colors font-medium",disabled:l,children:l?"⏳ 执行中...":"🔄 触发重新渲染"}),e.jsx("button",{onClick:S,className:"px-4 py-2 bg-gray-500 text-white rounded-lg hover:bg-gray-600 transition-colors font-medium",children:"🗑️ 清空数据"})]}),e.jsxs("div",{className:"grid grid-cols-1 sm:grid-cols-3 gap-4 text-sm",children:[e.jsxs("div",{className:"text-gray-600",children:["渲染次数: ",e.jsx("span",{className:"font-mono font-bold",children:a})]}),e.jsxs("div",{className:"text-gray-600",children:["当前 Hook: ",e.jsx("span",{className:"font-mono font-bold",children:n?"useInsertionEffect":"useEffect"})]}),e.jsxs("div",{className:"text-gray-600",children:["状态: ",e.jsx("span",{className:"font-mono font-bold",children:l?"执行中":"空闲"})]})]})]}),e.jsxs("div",{className:"grid grid-cols-1 lg:grid-cols-2 gap-6",children:[e.jsxs("div",{className:"space-y-4",children:[e.jsx("h3",{className:"text-lg font-semibold text-gray-800",children:"样式演示区域"}),e.jsxs("div",{className:"performance-test-box",children:[e.jsx("div",{className:"text-xl mb-2",children:"⚡ 性能测试演示"}),e.jsxs("div",{className:"text-sm opacity-90",children:["使用 ",n?"useInsertionEffect":"useEffect"]}),e.jsxs("div",{className:"text-xs opacity-75 mt-2",children:["渲染 #",a]})]})]}),e.jsxs("div",{className:"space-y-4",children:[e.jsx("h3",{className:"text-lg font-semibold text-gray-800",children:"性能对比数据"}),e.jsxs("div",{className:"grid grid-cols-2 gap-4",children:[e.jsxs("div",{className:"bg-red-50 p-4 rounded-lg border border-red-200",children:[e.jsx("h4",{className:"text-sm font-semibold text-red-800 mb-2",children:"useInsertionEffect"}),e.jsxs("div",{className:"space-y-1 text-sm",children:[e.jsxs("div",{children:["执行次数: ",e.jsx("span",{className:"font-mono",children:j("useInsertionEffect")})]}),e.jsxs("div",{children:["平均耗时: ",e.jsxs("span",{className:"font-mono",children:[N("useInsertionEffect"),"ms"]})]})]})]}),e.jsxs("div",{className:"bg-blue-50 p-4 rounded-lg border border-blue-200",children:[e.jsx("h4",{className:"text-sm font-semibold text-blue-800 mb-2",children:"useEffect"}),e.jsxs("div",{className:"space-y-1 text-sm",children:[e.jsxs("div",{children:["执行次数: ",e.jsx("span",{className:"font-mono",children:j("useEffect")})]}),e.jsxs("div",{children:["平均耗时: ",e.jsxs("span",{className:"font-mono",children:[N("useEffect"),"ms"]})]})]})]})]}),e.jsxs("div",{className:"bg-gray-900 text-green-400 p-4 rounded-lg font-mono text-sm max-h-48 overflow-y-auto",children:[e.jsx("div",{className:"text-gray-400 mb-2",children:"最近执行记录:"}),d.length===0?e.jsx("div",{className:"text-gray-500",children:"暂无执行记录..."}):d.map((o,c)=>e.jsxs("div",{className:"mb-1",children:[e.jsxs("span",{className:"text-gray-500",children:["[",o.timestamp,"]"]}),e.jsx("span",{className:`ml-2 ${o.hookType==="useInsertionEffect"?"text-red-400":"text-blue-400"}`,children:o.hookType}),e.jsxs("span",{className:"text-yellow-400 ml-2",children:[o.executionTime.toFixed(3),"ms"]})]},c))]})]})]}),e.jsxs("div",{className:"text-sm text-gray-600 bg-blue-50 p-4 rounded-lg",children:[e.jsx("strong",{children:"💡 性能对比说明:"}),e.jsxs("ul",{className:"mt-2 space-y-1 list-disc list-inside",children:[e.jsx("li",{children:"useInsertionEffect 在 DOM 变更前执行，时机更早"}),e.jsx("li",{children:"useEffect 在渲染完成后异步执行，可能有轻微延迟"}),e.jsx("li",{children:"对于样式注入，useInsertionEffect 能避免样式闪烁"}),e.jsx("li",{children:"性能差异通常很小，但在复杂场景下会更明显"})]})]})]})},T=`import React, {
  useEffect,
  useInsertionEffect,
  useLayoutEffect,
  useState,
} from "react";

interface LogEntry {
  id: number;
  message: string;
  timestamp: string;
  type: "insertion" | "layout" | "effect";
}

const BasicCSSInjectionDemo: React.FC = () => {
  const [isActive, setIsActive] = useState(false);
  const [logs, setLogs] = useState<LogEntry[]>([]);
  const [renderCount, setRenderCount] = useState(0);

  const addLog = (message: string, type: LogEntry["type"]) => {
    const newLog: LogEntry = {
      id: Date.now() + Math.random(),
      message,
      timestamp: new Date().toLocaleTimeString(),
      type,
    };
    setLogs((prev) => [...prev.slice(-4), newLog]); // 保留最近5条记录
  };

  // useInsertionEffect - 最早执行，用于样式注入
  useInsertionEffect(() => {
    const css = \`
      .dynamic-demo-box {
        background: \${
          isActive
            ? "linear-gradient(45deg, #ff6b6b, #feca57)"
            : "linear-gradient(45deg, #74b9ff, #0984e3)"
        };
        color: white;
        padding: 20px;
        border-radius: 12px;
        text-align: center;
        font-weight: bold;
        transition: all 0.3s ease;
        transform: \${isActive ? "scale(1.05) rotate(2deg)" : "scale(1)"};
        box-shadow: \${
          isActive
            ? "0 8px 25px rgba(255, 107, 107, 0.3)"
            : "0 4px 15px rgba(116, 185, 255, 0.3)"
        };
      }
      .dynamic-demo-box:hover {
        transform: \${isActive ? "scale(1.1) rotate(3deg)" : "scale(1.02)"};
      }
    \`;

    const style = document.createElement("style");
    style.id = "basic-css-injection-demo";
    style.textContent = css;
    document.head.appendChild(style);

    // 清理函数
    return () => {
      const existingStyle = document.getElementById("basic-css-injection-demo");
      if (existingStyle) {
        existingStyle.remove();
      }
    };
  }, [isActive]);

  // useLayoutEffect - 在 DOM 变更后，浏览器绘制前执行
  useLayoutEffect(() => {
    // 这里可以进行 DOM 测量等操作，但不应该更新状态
  }, [isActive]);

  // useEffect - 在渲染完成后异步执行
  useEffect(() => {
    // 记录所有 Hook 的执行日志
    addLog("useInsertionEffect: 样式注入完成", "insertion");
    addLog("useLayoutEffect: DOM 布局完成后执行", "layout");
    addLog("useEffect: 渲染完成后执行", "effect");
    setRenderCount((prev) => prev + 1);
  }, [isActive]);

  const clearLogs = () => {
    setLogs([]);
  };

  return (
    <div className="space-y-6">
      {/* 控制区域 */}
      <div className="bg-gray-50 p-4 rounded-lg">
        <div className="flex flex-wrap gap-3 mb-4">
          <button
            onClick={() => setIsActive(!isActive)}
            className={\`px-4 py-2 rounded-lg font-medium transition-colors \${
              isActive
                ? "bg-orange-500 text-white hover:bg-orange-600"
                : "bg-blue-500 text-white hover:bg-blue-600"
            }\`}
          >
            {isActive ? "停用样式" : "激活样式"}
          </button>
          <button
            onClick={clearLogs}
            className="px-4 py-2 bg-gray-500 text-white rounded-lg hover:bg-gray-600 transition-colors"
          >
            清空日志
          </button>
        </div>
        <div className="text-sm text-gray-600">
          渲染次数: <span className="font-mono font-bold">{renderCount}</span>
        </div>
      </div>

      {/* 演示区域 */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* 样式演示 */}
        <div className="space-y-4">
          <h3 className="text-lg font-semibold text-gray-800">样式演示</h3>
          <div className="dynamic-demo-box">
            <div className="text-xl mb-2">🎨 动态样式演示</div>
            <div className="text-sm opacity-90">
              状态: {isActive ? "激活" : "未激活"}
            </div>
          </div>
          <div className="text-sm text-gray-600 bg-blue-50 p-3 rounded-lg">
            <strong>💡 开发者提示:</strong>
            <br />
            useInsertionEffect 确保样式在组件渲染前就位，避免样式闪烁问题。
            这对于 CSS-in-JS 库特别重要。
          </div>
        </div>

        {/* 执行日志 */}
        <div className="space-y-4">
          <h3 className="text-lg font-semibold text-gray-800">执行顺序日志</h3>
          <div className="bg-gray-900 text-green-400 p-4 rounded-lg font-mono text-sm max-h-80 overflow-y-auto">
            {logs.length === 0 ? (
              <div className="text-gray-500">暂无日志记录...</div>
            ) : (
              logs.map((log) => (
                <div key={log.id} className="mb-1">
                  <span className="text-gray-500">[{log.timestamp}]</span>
                  <span
                    className={\`ml-2 \${
                      log.type === "insertion"
                        ? "text-red-400"
                        : log.type === "layout"
                        ? "text-yellow-400"
                        : "text-blue-400"
                    }\`}
                  >
                    {log.message}
                  </span>
                </div>
              ))
            )}
          </div>
          <div className="text-xs text-gray-600 space-y-1">
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 bg-red-400 rounded"></div>
              <span>useInsertionEffect (最早执行)</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 bg-yellow-400 rounded"></div>
              <span>useLayoutEffect (DOM 变更后)</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 bg-blue-400 rounded"></div>
              <span>useEffect (渲染完成后)</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BasicCSSInjectionDemo;
`,M=`import React, { useInsertionEffect, useState } from "react";

type Theme = "light" | "dark" | "colorful";

const DynamicThemeDemo: React.FC = () => {
  const [theme, setTheme] = useState<Theme>("light");
  const [enableAnimation, setEnableAnimation] = useState(false);

  useInsertionEffect(() => {
    // 移除旧的主题样式
    const oldStyle = document.getElementById("dynamic-theme-styles");
    if (oldStyle) {
      oldStyle.remove();
    }

    const themes = {
      light: \`
        .theme-demo-container {
          background: linear-gradient(135deg, #f5f7fa 0%, #c3cfe2 100%);
          color: #333;
          border: 2px solid #e2e8f0;
        }
        .theme-demo-card {
          background: rgba(255, 255, 255, 0.9);
          color: #2d3748;
          border: 1px solid #e2e8f0;
          box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
        }
        .theme-demo-card:hover {
          box-shadow: 0 8px 15px rgba(0, 0, 0, 0.15);
          transform: translateY(-2px);
        }
      \`,
      dark: \`
        .theme-demo-container {
          background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
          color: white;
          border: 2px solid #4a5568;
        }
        .theme-demo-card {
          background: rgba(45, 55, 72, 0.9);
          color: #e2e8f0;
          border: 1px solid #4a5568;
          box-shadow: 0 4px 6px rgba(0, 0, 0, 0.3);
        }
        .theme-demo-card:hover {
          box-shadow: 0 8px 15px rgba(0, 0, 0, 0.4);
          transform: translateY(-2px);
        }
      \`,
      colorful: \`
        .theme-demo-container {
          background: linear-gradient(45deg, #ff6b6b, #feca57, #48dbfb, #ff9ff3, #54a0ff);
          background-size: 300% 300%;
          color: white;
          border: 2px solid #fff;
          \${
            enableAnimation
              ? \`
            animation: rainbow-bg 3s ease infinite;
          \`
              : ""
          }
        }
        .theme-demo-card {
          background: rgba(255, 255, 255, 0.2);
          color: white;
          border: 1px solid rgba(255, 255, 255, 0.3);
          backdrop-filter: blur(10px);
          box-shadow: 0 4px 6px rgba(0, 0, 0, 0.2);
        }
        .theme-demo-card:hover {
          background: rgba(255, 255, 255, 0.3);
          box-shadow: 0 8px 15px rgba(0, 0, 0, 0.3);
          transform: translateY(-2px) scale(1.02);
        }
        @keyframes rainbow-bg {
          0% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
        }
      \`,
    };

    // 注入新的主题样式
    const style = document.createElement("style");
    style.id = "dynamic-theme-styles";
    style.textContent = \`
      .theme-demo-container {
        padding: 24px;
        border-radius: 16px;
        transition: all 0.3s ease;
        min-height: 200px;
      }
      .theme-demo-card {
        padding: 16px;
        border-radius: 12px;
        transition: all 0.3s ease;
        cursor: pointer;
      }
      \${themes[theme]}
    \`;
    document.head.appendChild(style);

    // 清理函数
    return () => {
      const style = document.getElementById("dynamic-theme-styles");
      if (style) {
        style.remove();
      }
    };
  }, [theme, enableAnimation]);

  const themeButtons = [
    {
      key: "light" as Theme,
      label: "🌞 浅色主题",
      color: "bg-blue-500 hover:bg-blue-600",
    },
    {
      key: "dark" as Theme,
      label: "🌙 深色主题",
      color: "bg-purple-500 hover:bg-purple-600",
    },
    {
      key: "colorful" as Theme,
      label: "🌈 彩色主题",
      color:
        "bg-gradient-to-r from-pink-500 to-yellow-500 hover:from-pink-600 hover:to-yellow-600",
    },
  ];

  return (
    <div className="space-y-6">
      {/* 控制区域 */}
      <div className="bg-gray-50 p-4 rounded-lg">
        <div className="space-y-4">
          <div>
            <h4 className="text-sm font-medium text-gray-700 mb-2">
              选择主题:
            </h4>
            <div className="flex flex-wrap gap-2">
              {themeButtons.map(({ key, label, color }) => (
                <button
                  key={key}
                  onClick={() => setTheme(key)}
                  className={\`px-4 py-2 rounded-lg text-white font-medium transition-all \${
                    theme === key
                      ? \`\${color} ring-2 ring-offset-2 ring-gray-400\`
                      : color
                  }\`}
                >
                  {label}
                </button>
              ))}
            </div>
          </div>

          {theme === "colorful" && (
            <div>
              <label className="flex items-center gap-2 text-sm text-gray-700">
                <input
                  type="checkbox"
                  checked={enableAnimation}
                  onChange={(e) => setEnableAnimation(e.target.checked)}
                  className="rounded"
                />
                启用彩虹动画效果
              </label>
            </div>
          )}
        </div>
      </div>

      {/* 主题演示区域 */}
      <div className="theme-demo-container">
        <div className="text-center mb-6">
          <h3 className="text-2xl font-bold mb-2">🎨 动态主题演示</h3>
          <p className="opacity-90">
            当前主题: <span className="font-semibold">{theme}</span>
            {theme === "colorful" && enableAnimation && " (动画已启用)"}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="theme-demo-card">
            <h4 className="text-lg font-semibold mb-2">📝 示例卡片 1</h4>
            <p className="text-sm opacity-90">
              这是一个演示卡片，展示当前主题的样式效果。 悬停查看交互效果。
            </p>
          </div>

          <div className="theme-demo-card">
            <h4 className="text-lg font-semibold mb-2">🚀 示例卡片 2</h4>
            <p className="text-sm opacity-90">
              主题切换通过 useInsertionEffect 实现，
              确保样式在渲染前就位，无闪烁体验。
            </p>
          </div>
        </div>
      </div>

      {/* 说明信息 */}
      <div className="text-sm text-gray-600 bg-blue-50 p-4 rounded-lg">
        <strong>💡 技术说明:</strong>
        <ul className="mt-2 space-y-1 list-disc list-inside">
          <li>使用 useInsertionEffect 确保主题样式在渲染前注入</li>
          <li>支持动态主题切换，包含复杂的 CSS 动画</li>
          <li>样式表会在主题变化时自动更新和清理</li>
          <li>彩色主题展示了高级 CSS 效果的动态注入</li>
        </ul>
      </div>
    </div>
  );
};

export default DynamicThemeDemo;
`,R=`import React, { useCallback, useInsertionEffect, useState } from "react";

interface StyledComponent {
  id: string;
  name: string;
  className: string;
}

const CSSInJSLibraryDemo: React.FC = () => {
  const [components, setComponents] = useState<StyledComponent[]>([]);
  const [nextId, setNextId] = useState(1);

  // 生成随机渐变色
  const generateRandomGradient = () => {
    const hue1 = Math.floor(Math.random() * 360);
    const hue2 = Math.floor(Math.random() * 360);
    const saturation = 70 + Math.floor(Math.random() * 20); // 70-90%
    const lightness = 50 + Math.floor(Math.random() * 20); // 50-70%

    return \`linear-gradient(45deg,
      hsl(\${hue1}, \${saturation}%, \${lightness}%),
      hsl(\${hue2}, \${saturation}%, \${lightness + 10}%)
    )\`;
  };

  // 添加新组件
  const addComponent = useCallback(() => {
    const newComponent: StyledComponent = {
      id: \`component-\${nextId}\`,
      name: \`Component \${nextId}\`,
      className: \`styled-component-\${nextId}-\${Date.now()}\`,
    };

    setComponents((prev) => [...prev, newComponent]);
    setNextId((prev) => prev + 1);
  }, [nextId]);

  // 移除组件
  const removeComponent = useCallback((id: string) => {
    setComponents((prev) => prev.filter((comp) => comp.id !== id));
  }, []);

  // 清空所有组件
  const clearAll = useCallback(() => {
    setComponents([]);
  }, []);

  return (
    <div className="space-y-6">
      {/* 控制区域 */}
      <div className="bg-gray-50 p-4 rounded-lg">
        <div className="flex flex-wrap gap-3 items-center">
          <button
            onClick={addComponent}
            className="px-4 py-2 bg-green-500 text-white rounded-lg hover:bg-green-600 transition-colors font-medium"
          >
            ➕ 添加组件
          </button>
          <button
            onClick={clearAll}
            className="px-4 py-2 bg-red-500 text-white rounded-lg hover:bg-red-600 transition-colors font-medium"
            disabled={components.length === 0}
          >
            🗑️ 清空所有
          </button>
          <div className="text-sm text-gray-600">
            当前组件数量:{" "}
            <span className="font-mono font-bold">{components.length}</span>
          </div>
          <div className="text-sm text-gray-600">
            样式表数量:{" "}
            <span className="font-mono font-bold">{components.length}</span>
          </div>
        </div>
      </div>

      {/* 组件展示区域 */}
      <div className="space-y-4">
        <h3 className="text-lg font-semibold text-gray-800">
          动态生成的样式组件
        </h3>

        {components.length === 0 ? (
          <div className="text-center py-12 text-gray-500">
            <div className="text-4xl mb-2">🎨</div>
            <p>点击"添加组件"开始创建动态样式组件</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {components.map((component) => (
              <DynamicStyledComponent
                key={component.id}
                component={component}
                onRemove={removeComponent}
                gradient={generateRandomGradient()}
              />
            ))}
          </div>
        )}
      </div>

      {/* 说明信息 */}
      <div className="text-sm text-gray-600 bg-blue-50 p-4 rounded-lg">
        <strong>💡 CSS-in-JS 模拟说明:</strong>
        <ul className="mt-2 space-y-1 list-disc list-inside">
          <li>每个组件都有独立的样式表，通过 useInsertionEffect 动态注入</li>
          <li>样式类名使用时间戳确保唯一性，避免冲突</li>
          <li>组件移除时会自动清理对应的样式表</li>
          <li>模拟了真实 CSS-in-JS 库的样式生命周期管理</li>
        </ul>
      </div>
    </div>
  );
};

// 动态样式组件
interface DynamicStyledComponentProps {
  component: StyledComponent;
  onRemove: (id: string) => void;
  gradient: string;
}

const DynamicStyledComponent: React.FC<DynamicStyledComponentProps> = ({
  component,
  onRemove,
  gradient,
}) => {
  useInsertionEffect(() => {
    // 为这个组件生成独特的样式
    const css = \`
      .\${component.className} {
        background: \${gradient};
        color: white;
        padding: 16px;
        border-radius: 12px;
        text-align: center;
        font-weight: 600;
        cursor: pointer;
        transition: all 0.3s ease;
        border: 2px solid transparent;
        position: relative;
        overflow: hidden;
      }

      .\${component.className}::before {
        content: '';
        position: absolute;
        top: 0;
        left: -100%;
        width: 100%;
        height: 100%;
        background: linear-gradient(90deg, transparent, rgba(255,255,255,0.2), transparent);
        transition: left 0.5s ease;
      }

      .\${component.className}:hover {
        transform: translateY(-4px) scale(1.02);
        box-shadow: 0 8px 25px rgba(0, 0, 0, 0.15);
        border-color: rgba(255, 255, 255, 0.3);
      }

      .\${component.className}:hover::before {
        left: 100%;
      }

      .\${component.className}:active {
        transform: translateY(-2px) scale(0.98);
      }

      .\${component.className} .remove-btn {
        position: absolute;
        top: 4px;
        right: 4px;
        background: rgba(255, 255, 255, 0.2);
        border: none;
        color: white;
        width: 24px;
        height: 24px;
        border-radius: 50%;
        cursor: pointer;
        display: flex;
        align-items: center;
        justify-content: center;
        font-size: 12px;
        opacity: 0;
        transition: opacity 0.2s ease;
      }

      .\${component.className}:hover .remove-btn {
        opacity: 1;
      }

      .\${component.className} .remove-btn:hover {
        background: rgba(255, 255, 255, 0.3);
      }
    \`;

    // 创建并注入样式表
    const style = document.createElement("style");
    style.id = \`style-\${component.className}\`;
    style.textContent = css;
    document.head.appendChild(style);

    // 清理函数：组件卸载时移除样式表
    return () => {
      const style = document.getElementById(\`style-\${component.className}\`);
      if (style) {
        style.remove();
      }
    };
  }, [component.className, gradient]);

  const handleRemove = (e: React.MouseEvent) => {
    e.stopPropagation();
    onRemove(component.id);
  };

  return (
    <div className={component.className}>
      <button className="remove-btn" onClick={handleRemove} title="移除组件">
        ×
      </button>
      <div className="text-lg mb-1">{component.name}</div>
      <div className="text-xs opacity-90">类名: {component.className}</div>
      <div className="text-xs opacity-75 mt-2">点击移除 | 悬停查看效果</div>
    </div>
  );
};

export default CSSInJSLibraryDemo;
`,L=`import React, { useInsertionEffect, useEffect, useState, useCallback, useRef } from 'react';

interface PerformanceData {
  hookType: 'useInsertionEffect' | 'useEffect';
  executionTime: number;
  timestamp: string;
}

const PerformanceComparisonDemo: React.FC = () => {
  const [useInsertion, setUseInsertion] = useState(true);
  const [renderCount, setRenderCount] = useState(0);
  const [performanceData, setPerformanceData] = useState<PerformanceData[]>([]);
  const [isRunning, setIsRunning] = useState(false);
  const performanceBuffer = useRef<PerformanceData[]>([]);

  // 记录性能数据到缓冲区
  const recordPerformance = useCallback((hookType: PerformanceData['hookType'], executionTime: number) => {
    const newData: PerformanceData = {
      hookType,
      executionTime,
      timestamp: new Date().toLocaleTimeString(),
    };
    performanceBuffer.current = [...performanceBuffer.current.slice(-4), newData]; // 保留最近5条记录
  }, []);

  // 生成测试样式内容
  const generateTestCSS = () => {
    const colors = ['#ff6b6b', '#4ecdc4', '#45b7d1', '#96ceb4', '#feca57', '#ff9ff3'];
    const randomColor1 = colors[Math.floor(Math.random() * colors.length)];
    const randomColor2 = colors[Math.floor(Math.random() * colors.length)];
    
    return \`
      .performance-test-box {
        background: linear-gradient(45deg, \${randomColor1}, \${randomColor2});
        color: white;
        padding: 20px;
        border-radius: 12px;
        text-align: center;
        font-weight: bold;
        transition: all 0.3s ease;
        transform: rotate(\${Math.random() * 10 - 5}deg);
        box-shadow: 0 \${4 + Math.random() * 8}px \${15 + Math.random() * 10}px rgba(0, 0, 0, 0.2);
      }
      .performance-test-box:hover {
        transform: scale(1.05) rotate(\${Math.random() * 20 - 10}deg);
      }
    \`;
  };

  // useInsertionEffect 性能测试
  useInsertionEffect(() => {
    if (!useInsertion) return;

    const start = performance.now();

    // 移除旧样式
    const oldStyle = document.getElementById('performance-test-insertion');
    if (oldStyle) {
      oldStyle.remove();
    }

    // 注入新样式
    const css = generateTestCSS();
    const style = document.createElement('style');
    style.id = 'performance-test-insertion';
    style.textContent = css;
    document.head.appendChild(style);

    const end = performance.now();
    const executionTime = end - start;
    
    // 只记录到缓冲区，不更新状态
    recordPerformance('useInsertionEffect', executionTime);

    return () => {
      const style = document.getElementById('performance-test-insertion');
      if (style) {
        style.remove();
      }
    };
  }, [useInsertion, renderCount, recordPerformance]);

  // useEffect 性能测试
  useEffect(() => {
    if (useInsertion) return;

    const start = performance.now();

    // 移除旧样式
    const oldStyle = document.getElementById('performance-test-effect');
    if (oldStyle) {
      oldStyle.remove();
    }

    // 注入新样式
    const css = generateTestCSS();
    const style = document.createElement('style');
    style.id = 'performance-test-effect';
    style.textContent = css;
    document.head.appendChild(style);

    const end = performance.now();
    const executionTime = end - start;
    
    // 只记录到缓冲区，不更新状态
    recordPerformance('useEffect', executionTime);

    return () => {
      const style = document.getElementById('performance-test-effect');
      if (style) {
        style.remove();
      }
    };
  }, [useInsertion, renderCount, recordPerformance]);

  // 同步缓冲区数据到状态
  useEffect(() => {
    setPerformanceData([...performanceBuffer.current]);
    setIsRunning(false);
  }, [renderCount, useInsertion]);

  // 触发重新渲染
  const triggerRerender = () => {
    setIsRunning(true);
    setRenderCount(prev => prev + 1);
  };

  // 切换 Hook 类型
  const toggleHookType = () => {
    setUseInsertion(prev => !prev);
  };

  // 清空性能数据
  const clearData = () => {
    setPerformanceData([]);
    performanceBuffer.current = [];
  };

  // 计算平均执行时间
  const getAverageTime = (hookType: PerformanceData['hookType']) => {
    const data = performanceData.filter(d => d.hookType === hookType);
    if (data.length === 0) return 0;
    const sum = data.reduce((acc, d) => acc + d.executionTime, 0);
    return (sum / data.length).toFixed(3);
  };

  // 获取执行次数
  const getExecutionCount = (hookType: PerformanceData['hookType']) => {
    return performanceData.filter(d => d.hookType === hookType).length;
  };

  return (
    <div className="space-y-6">
      {/* 控制区域 */}
      <div className="bg-gray-50 p-4 rounded-lg">
        <div className="flex flex-wrap gap-3 items-center mb-4">
          <button
            onClick={toggleHookType}
            className={\`px-4 py-2 rounded-lg font-medium transition-colors \${
              useInsertion
                ? 'bg-red-500 text-white hover:bg-red-600'
                : 'bg-blue-500 text-white hover:bg-blue-600'
            }\`}
          >
            当前: {useInsertion ? 'useInsertionEffect' : 'useEffect'}
          </button>
          <button
            onClick={triggerRerender}
            className="px-4 py-2 bg-green-500 text-white rounded-lg hover:bg-green-600 transition-colors font-medium"
            disabled={isRunning}
          >
            {isRunning ? '⏳ 执行中...' : '🔄 触发重新渲染'}
          </button>
          <button
            onClick={clearData}
            className="px-4 py-2 bg-gray-500 text-white rounded-lg hover:bg-gray-600 transition-colors font-medium"
          >
            🗑️ 清空数据
          </button>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 text-sm">
          <div className="text-gray-600">
            渲染次数: <span className="font-mono font-bold">{renderCount}</span>
          </div>
          <div className="text-gray-600">
            当前 Hook: <span className="font-mono font-bold">{useInsertion ? 'useInsertionEffect' : 'useEffect'}</span>
          </div>
          <div className="text-gray-600">
            状态: <span className="font-mono font-bold">{isRunning ? '执行中' : '空闲'}</span>
          </div>
        </div>
      </div>

      {/* 演示区域 */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* 样式演示 */}
        <div className="space-y-4">
          <h3 className="text-lg font-semibold text-gray-800">样式演示区域</h3>
          <div className="performance-test-box">
            <div className="text-xl mb-2">⚡ 性能测试演示</div>
            <div className="text-sm opacity-90">
              使用 {useInsertion ? 'useInsertionEffect' : 'useEffect'}
            </div>
            <div className="text-xs opacity-75 mt-2">
              渲染 #{renderCount}
            </div>
          </div>
        </div>

        {/* 性能数据 */}
        <div className="space-y-4">
          <h3 className="text-lg font-semibold text-gray-800">性能对比数据</h3>
          
          {/* 统计面板 */}
          <div className="grid grid-cols-2 gap-4">
            <div className="bg-red-50 p-4 rounded-lg border border-red-200">
              <h4 className="text-sm font-semibold text-red-800 mb-2">useInsertionEffect</h4>
              <div className="space-y-1 text-sm">
                <div>执行次数: <span className="font-mono">{getExecutionCount('useInsertionEffect')}</span></div>
                <div>平均耗时: <span className="font-mono">{getAverageTime('useInsertionEffect')}ms</span></div>
              </div>
            </div>
            
            <div className="bg-blue-50 p-4 rounded-lg border border-blue-200">
              <h4 className="text-sm font-semibold text-blue-800 mb-2">useEffect</h4>
              <div className="space-y-1 text-sm">
                <div>执行次数: <span className="font-mono">{getExecutionCount('useEffect')}</span></div>
                <div>平均耗时: <span className="font-mono">{getAverageTime('useEffect')}ms</span></div>
              </div>
            </div>
          </div>

          {/* 执行历史 */}
          <div className="bg-gray-900 text-green-400 p-4 rounded-lg font-mono text-sm max-h-48 overflow-y-auto">
            <div className="text-gray-400 mb-2">最近执行记录:</div>
            {performanceData.length === 0 ? (
              <div className="text-gray-500">暂无执行记录...</div>
            ) : (
              performanceData.map((data, index) => (
                <div key={index} className="mb-1">
                  <span className="text-gray-500">[{data.timestamp}]</span>
                  <span
                    className={\`ml-2 \${
                      data.hookType === 'useInsertionEffect' ? 'text-red-400' : 'text-blue-400'
                    }\`}
                  >
                    {data.hookType}
                  </span>
                  <span className="text-yellow-400 ml-2">
                    {data.executionTime.toFixed(3)}ms
                  </span>
                </div>
              ))
            )}
          </div>
        </div>
      </div>

      {/* 说明信息 */}
      <div className="text-sm text-gray-600 bg-blue-50 p-4 rounded-lg">
        <strong>💡 性能对比说明:</strong>
        <ul className="mt-2 space-y-1 list-disc list-inside">
          <li>useInsertionEffect 在 DOM 变更前执行，时机更早</li>
          <li>useEffect 在渲染完成后异步执行，可能有轻微延迟</li>
          <li>对于样式注入，useInsertionEffect 能避免样式闪烁</li>
          <li>性能差异通常很小，但在复杂场景下会更明显</li>
        </ul>
      </div>
    </div>
  );
};

export default PerformanceComparisonDemo;`,B=()=>e.jsx(C,{title:"useInsertionEffect",description:"React 18 新增的 Hook，用于在所有 DOM 变更之前同步执行副作用。主要用于 CSS-in-JS 库的样式注入，确保样式在组件渲染前就位，避免样式闪烁问题。",overview:e.jsxs("div",{className:"space-y-4",children:[e.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-6",children:[e.jsxs("div",{className:"bg-blue-50 p-4 rounded-lg border border-blue-200",children:[e.jsx("h3",{className:"font-semibold text-blue-800 mb-2",children:"🎯 核心概念"}),e.jsxs("ul",{className:"text-sm text-blue-700 space-y-1",children:[e.jsx("li",{children:"• 最早执行的副作用 Hook"}),e.jsx("li",{children:"• 在 DOM 变更之前同步执行"}),e.jsx("li",{children:"• 主要用于样式注入"}),e.jsx("li",{children:"• 避免样式闪烁问题"})]})]}),e.jsxs("div",{className:"bg-green-50 p-4 rounded-lg border border-green-200",children:[e.jsx("h3",{className:"font-semibold text-green-800 mb-2",children:"✨ 主要优势"}),e.jsxs("ul",{className:"text-sm text-green-700 space-y-1",children:[e.jsx("li",{children:"• 确保样式优先级"}),e.jsx("li",{children:"• 消除样式闪烁"}),e.jsx("li",{children:"• 支持 CSS-in-JS 库"}),e.jsx("li",{children:"• 提升用户体验"})]})]}),e.jsxs("div",{className:"bg-yellow-50 p-4 rounded-lg border border-yellow-200",children:[e.jsx("h3",{className:"font-semibold text-yellow-800 mb-2",children:"🎪 适用场景"}),e.jsxs("ul",{className:"text-sm text-yellow-700 space-y-1",children:[e.jsx("li",{children:"• CSS-in-JS 样式注入"}),e.jsx("li",{children:"• 动态样式表管理"}),e.jsx("li",{children:"• 主题系统实现"}),e.jsx("li",{children:"• 样式库开发"})]})]}),e.jsxs("div",{className:"bg-red-50 p-4 rounded-lg border border-red-200",children:[e.jsx("h3",{className:"font-semibold text-red-800 mb-2",children:"⚠️ 注意事项"}),e.jsxs("ul",{className:"text-sm text-red-700 space-y-1",children:[e.jsx("li",{children:"• 仅用于样式相关操作"}),e.jsx("li",{children:"• 避免复杂的副作用"}),e.jsx("li",{children:"• 不要访问 DOM 元素"}),e.jsx("li",{children:"• 保持操作的轻量性"})]})]})]}),e.jsxs("div",{className:"bg-gray-50 p-4 rounded-lg border border-gray-200",children:[e.jsx("h3",{className:"font-semibold text-gray-800 mb-2",children:"🔄 执行顺序"}),e.jsxs("div",{className:"text-sm text-gray-700",children:[e.jsxs("div",{className:"flex items-center space-x-2 mb-1",children:[e.jsx("span",{className:"w-3 h-3 bg-red-500 rounded-full"}),e.jsx("span",{children:"1. useInsertionEffect (最早执行)"})]}),e.jsxs("div",{className:"flex items-center space-x-2 mb-1",children:[e.jsx("span",{className:"w-3 h-3 bg-yellow-500 rounded-full"}),e.jsx("span",{children:"2. useLayoutEffect (DOM 更新后，绘制前)"})]}),e.jsxs("div",{className:"flex items-center space-x-2",children:[e.jsx("span",{className:"w-3 h-3 bg-green-500 rounded-full"}),e.jsx("span",{children:"3. useEffect (绘制后)"})]})]})]})]}),examples:[{title:"基础 CSS 注入",component:e.jsx(w,{}),description:"演示 useInsertionEffect 的基本用法和执行顺序",observationPoints:["点击按钮切换样式，观察执行顺序日志","注意 useInsertionEffect 总是最先执行","样式变化没有闪烁，因为在渲染前就已注入","清理函数在组件卸载或依赖变化时执行"],keyPoints:["useInsertionEffect 在所有其他 Hook 之前执行","主要用于注入 CSS 样式到 document.head","确保样式在组件渲染前就位","支持清理函数移除注入的样式"],commonTraps:["在 useInsertionEffect 中访问 DOM 元素","执行复杂的计算或异步操作","忘记在清理函数中移除样式"],solutions:["只用于样式注入，不访问 DOM","保持操作的轻量和同步","始终提供清理函数移除样式"],codeExample:{code:T,highlights:[10,20,30],title:"基础 CSS 注入源码"}},{title:"动态主题系统",component:e.jsx(D,{}),description:"演示使用 useInsertionEffect 实现动态主题切换系统",observationPoints:["切换不同主题，观察样式的即时更新","启用彩虹动画，查看动态效果","注意主题切换时没有样式闪烁","样式变化是平滑的过渡效果"],keyPoints:["支持多种主题的动态切换","样式注入确保无闪烁体验","可以包含复杂的 CSS 动画","主题状态变化时自动更新样式"],commonTraps:["主题样式冲突导致显示异常","样式表重复注入影响性能","忘记清理旧的主题样式"],solutions:["使用唯一的样式表 ID 避免冲突","在注入前检查是否已存在","清理函数中移除对应的样式表"],codeExample:{code:M,highlights:[12,22,32],title:"动态主题系统源码"}},{title:"CSS-in-JS 库模拟",component:e.jsx(k,{}),description:"模拟 CSS-in-JS 库的样式注入机制",observationPoints:["添加组件时观察样式的动态生成","每个组件都有独特的随机颜色","点击组件可以移除对应的样式","样式表数量与组件数量保持同步"],keyPoints:["每个组件生成独立的样式表","样式类名动态生成避免冲突","支持样式的动态添加和移除","模拟真实 CSS-in-JS 库的行为"],commonTraps:["样式表泄漏导致内存问题","样式类名冲突","组件卸载时未清理样式"],solutions:["组件卸载时清理对应样式表","使用唯一标识符生成类名","实现样式表的生命周期管理"],codeExample:{code:R,highlights:[15,25,35],title:"CSS-in-JS 库模拟源码"}},{title:"性能对比",component:e.jsx($,{}),description:"对比 useInsertionEffect 和 useEffect 的性能差异",observationPoints:["切换不同的 Hook 类型进行对比","触发多次重新渲染观察性能数据","查看平均执行时间的差异","注意样式应用的时机差异"],keyPoints:["useInsertionEffect 执行时机更早","避免了样式闪烁问题","性能开销相对较小","更适合样式注入场景"],commonTraps:["过度使用 useInsertionEffect","在其中执行非样式相关操作","忽视性能监控和优化"],solutions:["仅在需要样式注入时使用","保持操作的轻量和专一","定期监控和优化性能"],codeExample:{code:L,highlights:[18,28,38],title:"性能对比源码"}}],tutorial:{concepts:["useInsertionEffect 的执行时机和特点","与 useEffect 和 useLayoutEffect 的区别","CSS-in-JS 样式注入的最佳实践","样式表的动态管理和清理","性能优化和避免样式闪烁"],steps:["从 React 中导入 useInsertionEffect","在组件中调用 useInsertionEffect","在回调函数中执行样式注入操作","提供清理函数移除注入的样式","设置正确的依赖数组"],tips:["仅用于 CSS 样式相关的操作","避免在其中执行复杂的计算","始终提供清理函数","使用唯一的样式表 ID 避免冲突","保持操作的轻量和同步"]},interview:{questions:[{question:"useInsertionEffect 与 useEffect 的主要区别是什么？",answer:"useInsertionEffect 在所有 DOM 变更之前同步执行，而 useEffect 在渲染完成后异步执行。useInsertionEffect 主要用于 CSS 样式注入，确保样式在组件渲染前就位，避免样式闪烁问题。"},{question:"什么时候应该使用 useInsertionEffect？",answer:"主要在以下场景使用：1) CSS-in-JS 库的样式注入；2) 动态样式表管理；3) 主题系统实现；4) 需要在渲染前注入样式的场景。不应该用于普通的副作用操作。"},{question:"useInsertionEffect 的执行顺序是怎样的？",answer:"执行顺序为：useInsertionEffect → useLayoutEffect → useEffect。useInsertionEffect 是最早执行的，确保样式在 DOM 变更和布局计算之前就位。"},{question:"使用 useInsertionEffect 时需要注意什么？",answer:"1) 仅用于样式相关操作；2) 避免复杂计算和异步操作；3) 不要访问 DOM 元素；4) 始终提供清理函数；5) 保持操作的轻量性；6) 使用唯一标识符避免样式冲突。"}],keyPoints:["useInsertionEffect 是 React 18 新增的 Hook","专门用于 CSS 样式注入","在所有 DOM 变更之前同步执行","避免样式闪烁问题","主要服务于 CSS-in-JS 库"]},bestPractices:{dos:["仅用于 CSS 样式注入操作","使用唯一的样式表 ID","提供清理函数移除样式","保持操作的轻量和同步","在 CSS-in-JS 库中使用"],donts:["不要用于普通的副作用操作","不要在其中访问 DOM 元素","不要执行复杂的计算","不要进行异步操作","不要忘记清理注入的样式"],patterns:["样式注入模式：动态注入 CSS 样式到 document.head","主题切换模式：根据状态动态切换主题样式","组件样式模式：为每个组件生成独立的样式","样式清理模式：组件卸载时清理对应的样式表"]}});export{B as default};
