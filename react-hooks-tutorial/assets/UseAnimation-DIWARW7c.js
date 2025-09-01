import{r as t,j as e}from"./index-nevtk0dH.js";import{C as T}from"./ComponentTemplate-CQT_cNgc.js";const x={linear:n=>n,easeInQuad:n=>n*n,easeOutQuad:n=>n*(2-n),easeInOutQuad:n=>n<.5?2*n*n:-1+(4-2*n)*n,easeInCubic:n=>n*n*n,easeOutCubic:n=>--n*n*n+1,easeInOutCubic:n=>n<.5?4*n*n*n:(n-1)*(2*n-2)*(2*n-2)+1,easeInSine:n=>1-Math.cos(n*Math.PI/2),easeOutSine:n=>Math.sin(n*Math.PI/2),easeInOutSine:n=>-(Math.cos(Math.PI*n)-1)/2,bounce:n=>n<1/2.75?7.5625*n*n:n<2/2.75?7.5625*(n-=1.5/2.75)*n+.75:n<2.5/2.75?7.5625*(n-=2.25/2.75)*n+.9375:7.5625*(n-=2.625/2.75)*n+.984375,elastic:n=>{if(n===0)return 0;if(n===1)return 1;const d=.3,s=d/4;return-(Math.pow(2,10*(n-=1))*Math.sin((n-s)*(2*Math.PI)/d))}};function S(n,d,s){const[l,r]=t.useState({isPlaying:!1,progress:0,value:n,iteration:0}),i=t.useRef(null),m=t.useRef(null),u=t.useRef(0),o=t.useRef(0),c=t.useRef("forward"),{duration:g,easing:h=x.linear,delay:P=0,loop:y=!1,direction:j="normal",onComplete:C,onUpdate:w}=s,a=t.useCallback(f=>{m.current||(m.current=f-u.current);const v=f-m.current-P;if(v<0){i.current=requestAnimationFrame(a);return}let N=Math.min(v/g,1);(j==="reverse"||j==="alternate"&&c.current==="backward")&&(N=1-N);const I=h(N),F=n+(d-n)*I;r(R=>({...R,progress:v/g,value:F})),w==null||w(F),v>=g?(o.current+=1,y===!0||typeof y=="number"&&o.current<y?(j==="alternate"&&(c.current=c.current==="forward"?"backward":"forward"),m.current=null,u.current=0,r(R=>({...R,iteration:o.current})),i.current=requestAnimationFrame(a)):(r(R=>({...R,isPlaying:!1,progress:1,value:j==="reverse"?n:d,iteration:o.current})),C==null||C())):i.current=requestAnimationFrame(a)},[n,d,g,h,P,y,j,C,w]),b=t.useCallback(()=>{l.isPlaying||(r(f=>({...f,isPlaying:!0})),m.current=null,i.current=requestAnimationFrame(a))},[a,l.isPlaying]),A=t.useCallback(()=>{i.current&&(cancelAnimationFrame(i.current),i.current=null),r(f=>({...f,isPlaying:!1}))},[]),p=t.useCallback(()=>{A(),m.current=null,u.current=0,o.current=0,c.current="forward",r({isPlaying:!1,progress:0,value:n,iteration:0})},[A,n]);return t.useEffect(()=>()=>{i.current&&cancelAnimationFrame(i.current)},[]),[l,{start:b,stop:A,reset:p}]}const q=()=>{const[n,{start:d,stop:s,reset:l}]=S(0,200,{duration:1e3,easing:x.bounce,loop:!0,direction:"alternate"});return e.jsxs("div",{className:"max-w-sm mx-auto p-4 bg-white rounded-lg border",children:[e.jsx("h3",{className:"text-lg font-semibold mb-4",children:"弹跳球动画"}),e.jsx("div",{className:"relative h-48 bg-gray-100 rounded mb-4 overflow-hidden",children:e.jsx("div",{className:"absolute w-8 h-8 bg-red-500 rounded-full transition-all duration-75",style:{left:"50%",transform:`translate(-50%, ${n.value}px)`,boxShadow:"0 2px 4px rgba(0,0,0,0.2)"}})}),e.jsxs("div",{className:"mb-4 text-sm space-y-1",children:[e.jsxs("div",{children:["状态: ",n.isPlaying?"🎬 播放中":"⏸️ 已暂停"]}),e.jsxs("div",{children:["进度: ",Math.round(n.progress*100),"%"]}),e.jsxs("div",{children:["位置: ",Math.round(n.value),"px"]}),e.jsxs("div",{children:["循环次数: ",n.iteration]})]}),e.jsxs("div",{className:"flex gap-2",children:[e.jsx("button",{onClick:d,disabled:n.isPlaying,className:"flex-1 bg-green-500 text-white py-2 rounded text-sm hover:bg-green-600 disabled:opacity-50",children:"开始"}),e.jsx("button",{onClick:s,disabled:!n.isPlaying,className:"flex-1 bg-red-500 text-white py-2 rounded text-sm hover:bg-red-600 disabled:opacity-50",children:"停止"}),e.jsx("button",{onClick:l,className:"flex-1 bg-gray-500 text-white py-2 rounded text-sm hover:bg-gray-600",children:"重置"})]})]})},V=`import React from 'react';
import { useAnimation } from './useAnimation';
import { easingFunctions } from './easingFunctions';

/**
 * 弹跳球动画组件
 * 展示使用弹跳缓动函数的循环动画效果
 */
export const BouncingBall: React.FC = () => {
  const [animationState, { start, stop, reset }] = useAnimation(0, 200, {
    duration: 1000,
    easing: easingFunctions.bounce,
    loop: true,
    direction: 'alternate',
  });

  return (
    <div className="max-w-sm mx-auto p-4 bg-white rounded-lg border">
      <h3 className="text-lg font-semibold mb-4">弹跳球动画</h3>

      <div className="relative h-48 bg-gray-100 rounded mb-4 overflow-hidden">
        <div
          className="absolute w-8 h-8 bg-red-500 rounded-full transition-all duration-75"
          style={{
            left: '50%',
            transform: \`translate(-50%, \${animationState.value}px)\`,
            boxShadow: '0 2px 4px rgba(0,0,0,0.2)',
          }}
        />
      </div>

      <div className="mb-4 text-sm space-y-1">
        <div>状态: {animationState.isPlaying ? '🎬 播放中' : '⏸️ 已暂停'}</div>
        <div>进度: {Math.round(animationState.progress * 100)}%</div>
        <div>位置: {Math.round(animationState.value)}px</div>
        <div>循环次数: {animationState.iteration}</div>
      </div>

      <div className="flex gap-2">
        <button
          onClick={start}
          disabled={animationState.isPlaying}
          className="flex-1 bg-green-500 text-white py-2 rounded text-sm hover:bg-green-600 disabled:opacity-50"
        >
          开始
        </button>
        <button
          onClick={stop}
          disabled={!animationState.isPlaying}
          className="flex-1 bg-red-500 text-white py-2 rounded text-sm hover:bg-red-600 disabled:opacity-50"
        >
          停止
        </button>
        <button
          onClick={reset}
          className="flex-1 bg-gray-500 text-white py-2 rounded text-sm hover:bg-gray-600"
        >
          重置
        </button>
      </div>
    </div>
  );
};`,$=()=>{const[n,d]=t.useState("easeInOutQuad"),[s,l]=t.useState(!1),[r,i]=t.useState(0),[m,u]=t.useState(0),o=t.useRef(null),c=t.useRef(null),g=a=>{c.current||(c.current=a);const b=a-c.current,p=Math.min(b/3e3,1);i(p);const f=x[n](p),v=800,N=24,I=16+v-N,F=16+N+f*(I-(16+N));if(u(F),p<1)o.current=requestAnimationFrame(g);else{l(!1),i(1);const O=16+800-24;u(O)}},h=()=>{if(s)return;l(!0),i(0);const b=16+24;u(b),c.current=null,o.current=requestAnimationFrame(g)},P=()=>{o.current&&(cancelAnimationFrame(o.current),o.current=null),l(!1)},y=()=>{P(),i(0);const b=16+24;u(b),c.current=null};t.useEffect(()=>{y()},[n]),t.useEffect(()=>{const a=setTimeout(()=>{h()},1e3);return()=>{clearTimeout(a),o.current&&cancelAnimationFrame(o.current)}},[]);const w=(a=>{const b=[],A=x[a];for(let p=0;p<=100;p++){const f=p/100,v=A(f);b.push({x:p,y:v*100})}return b})(n).map((a,b)=>`${b===0?"M":"L"} ${a.x} ${100-a.y}`).join(" ");return e.jsxs("div",{className:"max-w-4xl mx-auto p-6 bg-white rounded-lg border shadow-sm",children:[e.jsx("h3",{className:"text-xl font-semibold mb-6 text-center text-gray-800",children:"缓动函数对比演示"}),e.jsxs("div",{className:"mb-6",children:[e.jsx("label",{className:"block text-sm font-medium mb-3 text-gray-700",children:"选择缓动函数:"}),e.jsx("div",{className:"grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-2",children:Object.keys(x).map(a=>e.jsx("button",{onClick:()=>d(a),disabled:s,className:`px-3 py-2 text-xs rounded border transition-colors ${n===a?"bg-blue-500 text-white border-blue-500":"bg-gray-50 text-gray-700 border-gray-300 hover:bg-gray-100"} ${s?"opacity-50 cursor-not-allowed":""}`,children:a},a))})]}),e.jsxs("div",{className:"mb-6 p-4 bg-gray-50 rounded-lg",children:[e.jsx("h4",{className:"text-sm font-medium mb-3 text-gray-700",children:"缓动函数曲线"}),e.jsx("div",{className:"relative h-40 bg-white border rounded overflow-hidden",children:e.jsxs("svg",{className:"w-full h-full",viewBox:"0 0 100 100",preserveAspectRatio:"none",children:[e.jsx("defs",{children:e.jsx("pattern",{id:"grid",width:"10",height:"10",patternUnits:"userSpaceOnUse",children:e.jsx("path",{d:"M 10 0 L 0 0 0 10",fill:"none",stroke:"#e5e7eb",strokeWidth:"0.5"})})}),e.jsx("rect",{width:"100",height:"100",fill:"url(#grid)"}),e.jsx("path",{d:w,fill:"none",stroke:"#3b82f6",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"}),e.jsx("circle",{cx:r*100,cy:100-x[n](r)*100,r:"4",fill:"#ef4444",stroke:"white",strokeWidth:"2"})]})})]}),e.jsx("div",{className:"mb-6",children:e.jsxs("div",{className:"relative h-48 bg-gradient-to-r from-blue-50 to-purple-50 rounded-lg border overflow-hidden",children:[e.jsx("div",{className:"absolute top-12 w-12 h-12 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full shadow-lg",style:{left:`${m}px`,transform:"translateX(-50%)"}}),e.jsx("div",{className:"absolute top-18 left-4 right-4 h-2 bg-gray-200",children:e.jsx("div",{className:"h-full bg-gradient-to-r from-blue-400 to-purple-400 transition-all duration-100",style:{width:`${r*100}%`}})}),e.jsxs("div",{className:"absolute bottom-6 left-6 right-6",children:[e.jsx("div",{className:"text-sm text-gray-600 mb-2",children:"缓动效果进度"}),e.jsx("div",{className:"h-3 bg-gray-200 rounded-full overflow-hidden",children:e.jsx("div",{className:"h-full bg-gradient-to-r from-green-400 to-green-600 transition-all duration-100",style:{width:`${x[n](r)*100}%`}})}),e.jsxs("div",{className:"text-sm text-gray-500 mt-2",children:["时间进度: ",Math.round(r*100),"% | 缓动进度:"," ",Math.round(x[n](r)*100),"%"]})]})]})}),e.jsxs("div",{className:"grid grid-cols-2 md:grid-cols-5 gap-4 mb-6",children:[e.jsxs("div",{className:"text-center p-4 bg-blue-50 rounded-lg border border-blue-200",children:[e.jsx("div",{className:"text-sm text-blue-600 font-medium",children:"缓动函数"}),e.jsx("div",{className:"text-xs text-blue-800 mt-1 font-mono",children:n})]}),e.jsxs("div",{className:"text-center p-4 bg-green-50 rounded-lg border border-green-200",children:[e.jsx("div",{className:"text-sm text-green-600 font-medium",children:"时间进度"}),e.jsxs("div",{className:"text-lg text-green-800 mt-1 font-bold",children:[Math.round(r*100),"%"]})]}),e.jsxs("div",{className:"text-center p-4 bg-purple-50 rounded-lg border border-purple-200",children:[e.jsx("div",{className:"text-sm text-purple-600 font-medium",children:"缓动进度"}),e.jsxs("div",{className:"text-lg text-purple-800 mt-1 font-bold",children:[Math.round(x[n](r)*100),"%"]})]}),e.jsxs("div",{className:"text-center p-4 bg-orange-50 rounded-lg border border-orange-200",children:[e.jsx("div",{className:"text-sm text-orange-600 font-medium",children:"当前位置"}),e.jsxs("div",{className:"text-lg text-orange-800 mt-1 font-bold",children:[Math.round(m),"px"]})]}),e.jsxs("div",{className:"text-center p-4 bg-red-50 rounded-lg border border-red-200",children:[e.jsx("div",{className:"text-sm text-red-600 font-medium",children:"状态"}),e.jsx("div",{className:"text-lg text-red-800 mt-1 font-bold",children:s?"播放中":"已停止"})]})]}),e.jsxs("div",{className:"flex gap-3 mb-6",children:[e.jsx("button",{onClick:h,disabled:s,className:"flex-1 bg-blue-500 text-white py-3 rounded-lg text-sm font-medium hover:bg-blue-600 disabled:opacity-50 transition-colors",children:s?"播放中...":"开始动画演示"}),e.jsx("button",{onClick:P,disabled:!s,className:"flex-1 bg-red-500 text-white py-3 rounded-lg text-sm font-medium hover:bg-red-600 disabled:opacity-50 transition-colors",children:"停止"}),e.jsx("button",{onClick:y,className:"flex-1 bg-gray-500 text-white py-3 rounded-lg text-sm font-medium hover:bg-gray-600 transition-colors",children:"重置"})]}),!s&&r===0&&e.jsx("div",{className:"mb-6 p-4 bg-blue-50 rounded-lg border border-blue-200",children:e.jsx("div",{className:"text-sm text-blue-800 text-center",children:'💡 点击"开始动画演示"按钮开始演示，或等待1秒后自动开始'})}),e.jsxs("div",{className:"p-4 bg-yellow-50 rounded-lg border border-yellow-200",children:[e.jsx("h4",{className:"text-sm font-medium text-yellow-800 mb-3",children:"缓动函数说明:"}),e.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-2 text-xs text-yellow-700",children:[e.jsxs("div",{children:["• ",e.jsx("strong",{children:"linear"}),": 线性变化，速度恒定"]}),e.jsxs("div",{children:["• ",e.jsx("strong",{children:"easeIn"}),": 慢开始，快结束"]}),e.jsxs("div",{children:["• ",e.jsx("strong",{children:"easeOut"}),": 快开始，慢结束"]}),e.jsxs("div",{children:["• ",e.jsx("strong",{children:"easeInOut"}),": 慢开始，快中间，慢结束"]}),e.jsxs("div",{children:["• ",e.jsx("strong",{children:"bounce"}),": 弹跳效果"]}),e.jsxs("div",{children:["• ",e.jsx("strong",{children:"elastic"}),": 弹性效果"]})]})]})]})},W=`import React, { useEffect, useRef, useState } from "react";

import { easingFunctions } from "./easingFunctions";

/**
 * 缓动函数对比组件
 * 对比不同缓动函数的动画效果，理解各种缓动的特点
 */
export const EasingComparison: React.FC = () => {
  const [selectedEasing, setSelectedEasing] = useState<string>("easeInOutQuad");
  const [isPlaying, setIsPlaying] = useState(false);
  const [progress, setProgress] = useState(0);
  const [currentValue, setCurrentValue] = useState(0);
  const animationRef = useRef<number | null>(null);
  const startTimeRef = useRef<number | null>(null);

  // 动画函数
  const animate = (currentTime: number) => {
    if (!startTimeRef.current) {
      startTimeRef.current = currentTime;
    }

    const elapsed = currentTime - startTimeRef.current;
    const duration = 3000; // 3秒
    const newProgress = Math.min(elapsed / duration, 1);

    setProgress(newProgress);

    // 应用缓动函数
    const easedProgress = easingFunctions[selectedEasing](newProgress);
    // 计算球体在轨迹线上的位置：从左边距(16px)到右边距(16px)，减去球体半径(24px)
    const trackWidth = 800; // 轨迹线宽度
    const ballRadius = 24; // 球体半径
    const endPos = 16 + trackWidth - ballRadius; // 结束位置
    const ballPosition =
      16 + ballRadius + easedProgress * (endPos - (16 + ballRadius));
    setCurrentValue(ballPosition);

    if (newProgress < 1) {
      animationRef.current = requestAnimationFrame(animate);
    } else {
      setIsPlaying(false);
      setProgress(1);
      // 计算最终位置
      const trackWidth = 800;
      const ballRadius = 24;
      const endPos = 16 + trackWidth - ballRadius;
      setCurrentValue(endPos);
    }
  };

  // 开始动画
  const startAnimation = () => {
    if (isPlaying) return;

    setIsPlaying(true);
    setProgress(0);
    // 设置初始位置
    const ballRadius = 24;
    const startPos = 16 + ballRadius;
    setCurrentValue(startPos);
    startTimeRef.current = null;
    animationRef.current = requestAnimationFrame(animate);
  };

  // 停止动画
  const stopAnimation = () => {
    if (animationRef.current) {
      cancelAnimationFrame(animationRef.current);
      animationRef.current = null;
    }
    setIsPlaying(false);
  };

  // 重置动画
  const resetAnimation = () => {
    stopAnimation();
    setProgress(0);
    // 设置初始位置
    const ballRadius = 24;
    const startPos = 16 + ballRadius;
    setCurrentValue(startPos);
    startTimeRef.current = null;
  };

  // 切换缓动函数时重置动画
  useEffect(() => {
    resetAnimation();
  }, [selectedEasing]);

  // 组件挂载时自动开始
  useEffect(() => {
    const timer = setTimeout(() => {
      startAnimation();
    }, 1000);

    return () => {
      clearTimeout(timer);
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
    };
  }, []);

  // 生成缓动函数曲线
  const generateCurve = (easingName: string) => {
    const points = [];
    const easing = easingFunctions[easingName];

    for (let i = 0; i <= 100; i++) {
      const t = i / 100;
      const y = easing(t);
      points.push({ x: i, y: y * 100 });
    }

    return points;
  };

  const curvePoints = generateCurve(selectedEasing);
  const curvePath = curvePoints
    .map((p, i) => \`\${i === 0 ? "M" : "L"} \${p.x} \${100 - p.y}\`)
    .join(" ");

  return (
    <div className="max-w-4xl mx-auto p-6 bg-white rounded-lg border shadow-sm">
      <h3 className="text-xl font-semibold mb-6 text-center text-gray-800">
        缓动函数对比演示
      </h3>

      {/* 缓动函数选择 */}
      <div className="mb-6">
        <label className="block text-sm font-medium mb-3 text-gray-700">
          选择缓动函数:
        </label>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-2">
          {Object.keys(easingFunctions).map((name) => (
            <button
              key={name}
              onClick={() => setSelectedEasing(name)}
              disabled={isPlaying}
              className={\`px-3 py-2 text-xs rounded border transition-colors \${
                selectedEasing === name
                  ? "bg-blue-500 text-white border-blue-500"
                  : "bg-gray-50 text-gray-700 border-gray-300 hover:bg-gray-100"
              } \${isPlaying ? "opacity-50 cursor-not-allowed" : ""}\`}
            >
              {name}
            </button>
          ))}
        </div>
      </div>

      {/* 缓动函数曲线图 */}
      <div className="mb-6 p-4 bg-gray-50 rounded-lg">
        <h4 className="text-sm font-medium mb-3 text-gray-700">缓动函数曲线</h4>
        <div className="relative h-40 bg-white border rounded overflow-hidden">
          <svg
            className="w-full h-full"
            viewBox="0 0 100 100"
            preserveAspectRatio="none"
          >
            {/* 网格线 */}
            <defs>
              <pattern
                id="grid"
                width="10"
                height="10"
                patternUnits="userSpaceOnUse"
              >
                <path
                  d="M 10 0 L 0 0 0 10"
                  fill="none"
                  stroke="#e5e7eb"
                  strokeWidth="0.5"
                />
              </pattern>
            </defs>
            <rect width="100" height="100" fill="url(#grid)" />

            {/* 缓动曲线 */}
            <path
              d={curvePath}
              fill="none"
              stroke="#3b82f6"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />

            {/* 当前动画位置指示器 */}
            <circle
              cx={progress * 100}
              cy={100 - easingFunctions[selectedEasing](progress) * 100}
              r="4"
              fill="#ef4444"
              stroke="white"
              strokeWidth="2"
            />
          </svg>
        </div>
      </div>

      {/* 动画演示区域 */}
      <div className="mb-6">
        <div className="relative h-48 bg-gradient-to-r from-blue-50 to-purple-50 rounded-lg border overflow-hidden">
          {/* 移动的球 */}
          <div
            className="absolute top-12 w-12 h-12 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full shadow-lg"
            style={{
              left: \`\${currentValue}px\`,
              transform: "translateX(-50%)",
            }}
          />

          {/* 轨迹线 */}
          <div className="absolute top-18 left-4 right-4 h-2 bg-gray-200">
            <div
              className="h-full bg-gradient-to-r from-blue-400 to-purple-400 transition-all duration-100"
              style={{ width: \`\${progress * 100}%\` }}
            />
          </div>

          {/* 缓动进度指示器 */}
          <div className="absolute bottom-6 left-6 right-6">
            <div className="text-sm text-gray-600 mb-2">缓动效果进度</div>
            <div className="h-3 bg-gray-200 rounded-full overflow-hidden">
              <div
                className="h-full bg-gradient-to-r from-green-400 to-green-600 transition-all duration-100"
                style={{
                  width: \`\${easingFunctions[selectedEasing](progress) * 100}%\`,
                }}
              />
            </div>
            <div className="text-sm text-gray-500 mt-2">
              时间进度: {Math.round(progress * 100)}% | 缓动进度:{" "}
              {Math.round(easingFunctions[selectedEasing](progress) * 100)}%
            </div>
          </div>
        </div>
      </div>

      {/* 状态信息卡片 */}
      <div className="grid grid-cols-2 md:grid-cols-5 gap-4 mb-6">
        <div className="text-center p-4 bg-blue-50 rounded-lg border border-blue-200">
          <div className="text-sm text-blue-600 font-medium">缓动函数</div>
          <div className="text-xs text-blue-800 mt-1 font-mono">
            {selectedEasing}
          </div>
        </div>
        <div className="text-center p-4 bg-green-50 rounded-lg border border-green-200">
          <div className="text-sm text-green-600 font-medium">时间进度</div>
          <div className="text-lg text-green-800 mt-1 font-bold">
            {Math.round(progress * 100)}%
          </div>
        </div>
        <div className="text-center p-4 bg-purple-50 rounded-lg border border-purple-200">
          <div className="text-sm text-purple-600 font-medium">缓动进度</div>
          <div className="text-lg text-purple-800 mt-1 font-bold">
            {Math.round(easingFunctions[selectedEasing](progress) * 100)}%
          </div>
        </div>
        <div className="text-center p-4 bg-orange-50 rounded-lg border border-orange-200">
          <div className="text-sm text-orange-600 font-medium">当前位置</div>
          <div className="text-lg text-orange-800 mt-1 font-bold">
            {Math.round(currentValue)}px
          </div>
        </div>
        <div className="text-center p-4 bg-red-50 rounded-lg border border-red-200">
          <div className="text-sm text-red-600 font-medium">状态</div>
          <div className="text-lg text-red-800 mt-1 font-bold">
            {isPlaying ? "播放中" : "已停止"}
          </div>
        </div>
      </div>

      {/* 控制按钮 */}
      <div className="flex gap-3 mb-6">
        <button
          onClick={startAnimation}
          disabled={isPlaying}
          className="flex-1 bg-blue-500 text-white py-3 rounded-lg text-sm font-medium hover:bg-blue-600 disabled:opacity-50 transition-colors"
        >
          {isPlaying ? "播放中..." : "开始动画演示"}
        </button>
        <button
          onClick={stopAnimation}
          disabled={!isPlaying}
          className="flex-1 bg-red-500 text-white py-3 rounded-lg text-sm font-medium hover:bg-red-600 disabled:opacity-50 transition-colors"
        >
          停止
        </button>
        <button
          onClick={resetAnimation}
          className="flex-1 bg-gray-500 text-white py-3 rounded-lg text-sm font-medium hover:bg-gray-600 transition-colors"
        >
          重置
        </button>
      </div>

      {/* 使用提示 */}
      {!isPlaying && progress === 0 && (
        <div className="mb-6 p-4 bg-blue-50 rounded-lg border border-blue-200">
          <div className="text-sm text-blue-800 text-center">
            💡 点击"开始动画演示"按钮开始演示，或等待1秒后自动开始
          </div>
        </div>
      )}

      {/* 缓动函数说明 */}
      <div className="p-4 bg-yellow-50 rounded-lg border border-yellow-200">
        <h4 className="text-sm font-medium text-yellow-800 mb-3">
          缓动函数说明:
        </h4>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-2 text-xs text-yellow-700">
          <div>
            • <strong>linear</strong>: 线性变化，速度恒定
          </div>
          <div>
            • <strong>easeIn</strong>: 慢开始，快结束
          </div>
          <div>
            • <strong>easeOut</strong>: 快开始，慢结束
          </div>
          <div>
            • <strong>easeInOut</strong>: 慢开始，快中间，慢结束
          </div>
          <div>
            • <strong>bounce</strong>: 弹跳效果
          </div>
          <div>
            • <strong>elastic</strong>: 弹性效果
          </div>
        </div>
      </div>
    </div>
  );
};
`,M=`import { EasingFunction } from './types';

// 常用的缓动函数集合
export const easingFunctions: Record<string, EasingFunction> = {
  // 线性缓动
  linear: (t: number) => t,
  
  // 二次缓动
  easeInQuad: (t: number) => t * t,
  easeOutQuad: (t: number) => t * (2 - t),
  easeInOutQuad: (t: number) => (t < 0.5 ? 2 * t * t : -1 + (4 - 2 * t) * t),
  
  // 三次缓动
  easeInCubic: (t: number) => t * t * t,
  easeOutCubic: (t: number) => --t * t * t + 1,
  easeInOutCubic: (t: number) =>
    t < 0.5 ? 4 * t * t * t : (t - 1) * (2 * t - 2) * (2 * t - 2) + 1,
  
  // 正弦缓动
  easeInSine: (t: number) => 1 - Math.cos((t * Math.PI) / 2),
  easeOutSine: (t: number) => Math.sin((t * Math.PI) / 2),
  easeInOutSine: (t: number) => -(Math.cos(Math.PI * t) - 1) / 2,
  
  // 弹跳缓动
  bounce: (t: number) => {
    if (t < 1 / 2.75) {
      return 7.5625 * t * t;
    } else if (t < 2 / 2.75) {
      return 7.5625 * (t -= 1.5 / 2.75) * t + 0.75;
    } else if (t < 2.5 / 2.75) {
      return 7.5625 * (t -= 2.25 / 2.75) * t + 0.9375;
    } else {
      return 7.5625 * (t -= 2.625 / 2.75) * t + 0.984375;
    }
  },
  
  // 弹性缓动
  elastic: (t: number) => {
    if (t === 0) return 0;
    if (t === 1) return 1;
    const p = 0.3;
    const s = p / 4;
    return -(Math.pow(2, 10 * (t -= 1)) * Math.sin(((t - s) * (2 * Math.PI)) / p));
  },
};

// 获取所有可用的缓动函数名称
export const getEasingFunctionNames = (): string[] => {
  return Object.keys(easingFunctions);
};

// 根据名称获取缓动函数
export const getEasingFunction = (name: string): EasingFunction => {
  return easingFunctions[name] || easingFunctions.linear;
};

// 创建自定义缓动函数
export const createCustomEasing = (controlPoints: number[]): EasingFunction => {
  // 简单的贝塞尔曲线实现
  return (t: number) => {
    // 这里可以实现更复杂的自定义缓动逻辑
    return t;
  };
};`;function D(n=300){const[d,s]=t.useState(!1),[l,r]=t.useState(0),i=t.useCallback(()=>{s(!0);const u=Date.now(),o=()=>{const c=Date.now()-u,g=Math.min(c/n,1);r(g),g<1&&requestAnimationFrame(o)};requestAnimationFrame(o)},[n]),m=t.useCallback(()=>{const u=Date.now(),o=l,c=()=>{const g=Date.now()-u,h=Math.min(g/n,1);r(o*(1-h)),h<1?requestAnimationFrame(c):s(!1)};requestAnimationFrame(c)},[n,l]);return{isVisible:d,opacity:l,fadeIn:i,fadeOut:m}}const U=()=>{const{isVisible:n,opacity:d,fadeIn:s,fadeOut:l}=D(500);return e.jsxs("div",{className:"max-w-xs mx-auto p-4 bg-gray-50 rounded-lg",children:[e.jsx("h4",{className:"font-semibold mb-3",children:"淡入淡出效果"}),e.jsx("div",{className:"h-24 flex items-center justify-center mb-4",children:n&&e.jsx("div",{className:"px-4 py-2 bg-blue-500 text-white rounded",style:{opacity:d},children:"Hello World!"})}),e.jsxs("div",{className:"flex gap-2",children:[e.jsx("button",{onClick:s,className:"flex-1 bg-green-500 text-white py-1 rounded text-sm hover:bg-green-600",children:"淡入"}),e.jsx("button",{onClick:l,disabled:!n,className:"flex-1 bg-red-500 text-white py-1 rounded text-sm hover:bg-red-600 disabled:opacity-50",children:"淡出"})]})]})},B=`import React from 'react';\r
import { useFadeAnimation } from './useFadeAnimation';\r
\r
/**\r
 * 淡入淡出演示组件\r
 * 展示简化的淡入淡出动画实现\r
 */\r
export const FadeDemo: React.FC = () => {\r
  const { isVisible, opacity, fadeIn, fadeOut } = useFadeAnimation(500);\r
\r
  return (\r
    <div className="max-w-xs mx-auto p-4 bg-gray-50 rounded-lg">\r
      <h4 className="font-semibold mb-3">淡入淡出效果</h4>\r
\r
      <div className="h-24 flex items-center justify-center mb-4">\r
        {isVisible && (\r
          <div\r
            className="px-4 py-2 bg-blue-500 text-white rounded"\r
            style={{ opacity }}\r
          >\r
            Hello World!\r
          </div>\r
        )}\r
      </div>\r
\r
      <div className="flex gap-2">\r
        <button\r
          onClick={fadeIn}\r
          className="flex-1 bg-green-500 text-white py-1 rounded text-sm hover:bg-green-600"\r
        >\r
          淡入\r
        </button>\r
        <button\r
          onClick={fadeOut}\r
          disabled={!isVisible}\r
          className="flex-1 bg-red-500 text-white py-1 rounded text-sm hover:bg-red-600 disabled:opacity-50"\r
        >\r
          淡出\r
        </button>\r
      </div>\r
    </div>\r
  );\r
};`,L=()=>{const[n,d]=t.useState(!1),[s,l]=S(1,1.5,{duration:1500,easing:x.easeInOutSine,loop:!0,direction:"alternate"}),[r,i]=S(0,360,{duration:2e3,easing:x.linear,loop:!0}),[m,u]=S(0,360,{duration:3e3,easing:x.linear,loop:!0}),o=()=>{d(!0),l.start(),i.start(),u.start()},c=()=>{d(!1),l.stop(),i.stop(),u.stop()},g=()=>{d(!1),l.reset(),i.reset(),u.reset()};return e.jsxs("div",{className:"max-w-sm mx-auto p-4 bg-white rounded-lg border",children:[e.jsx("h3",{className:"text-lg font-semibold mb-4",children:"多元素动画"}),e.jsx("div",{className:"flex justify-center items-center h-48 bg-gray-100 rounded mb-4",children:e.jsx("div",{className:"w-16 h-16 rounded-lg transition-all duration-75",style:{transform:`scale(${s.value}) rotate(${r.value}deg)`,backgroundColor:`hsl(${m.value}, 70%, 60%)`,boxShadow:"0 4px 8px rgba(0,0,0,0.2)"}})}),e.jsxs("div",{className:"mb-4 text-sm space-y-1",children:[e.jsxs("div",{children:["缩放: ",s.value.toFixed(2),"x"]}),e.jsxs("div",{children:["旋转: ",Math.round(r.value),"°"]}),e.jsxs("div",{children:["色相: ",Math.round(m.value),"°"]}),e.jsxs("div",{children:["状态: ",n?"🎬 播放中":"⏸️ 已暂停"]})]}),e.jsxs("div",{className:"flex gap-2",children:[e.jsx("button",{onClick:o,disabled:n,className:"flex-1 bg-purple-500 text-white py-2 rounded text-sm hover:bg-purple-600 disabled:opacity-50",children:"开始"}),e.jsx("button",{onClick:c,disabled:!n,className:"flex-1 bg-red-500 text-white py-2 rounded text-sm hover:bg-red-600 disabled:opacity-50",children:"停止"}),e.jsx("button",{onClick:g,className:"flex-1 bg-gray-500 text-white py-2 rounded text-sm hover:bg-gray-600",children:"重置"})]})]})},Q=`import React, { useState } from 'react';
import { useAnimation } from './useAnimation';
import { easingFunctions } from './easingFunctions';

/**
 * 多元素动画组件
 * 展示如何同时控制多个动画属性，创造复杂的动画效果
 */
export const MultiElementAnimation: React.FC = () => {
  const [isPlaying, setIsPlaying] = useState(false);

  const [scaleAnimation, scaleControls] = useAnimation(1, 1.5, {
    duration: 1500,
    easing: easingFunctions.easeInOutSine,
    loop: true,
    direction: 'alternate',
  });

  const [rotateAnimation, rotateControls] = useAnimation(0, 360, {
    duration: 2000,
    easing: easingFunctions.linear,
    loop: true,
  });

  const [colorAnimation, colorControls] = useAnimation(0, 360, {
    duration: 3000,
    easing: easingFunctions.linear,
    loop: true,
  });

  const startAll = () => {
    setIsPlaying(true);
    scaleControls.start();
    rotateControls.start();
    colorControls.start();
  };

  const stopAll = () => {
    setIsPlaying(false);
    scaleControls.stop();
    rotateControls.stop();
    colorControls.stop();
  };

  const resetAll = () => {
    setIsPlaying(false);
    scaleControls.reset();
    rotateControls.reset();
    colorControls.reset();
  };

  return (
    <div className="max-w-sm mx-auto p-4 bg-white rounded-lg border">
      <h3 className="text-lg font-semibold mb-4">多元素动画</h3>

      <div className="flex justify-center items-center h-48 bg-gray-100 rounded mb-4">
        <div
          className="w-16 h-16 rounded-lg transition-all duration-75"
          style={{
            transform: \`scale(\${scaleAnimation.value}) rotate(\${rotateAnimation.value}deg)\`,
            backgroundColor: \`hsl(\${colorAnimation.value}, 70%, 60%)\`,
            boxShadow: '0 4px 8px rgba(0,0,0,0.2)',
          }}
        />
      </div>

      <div className="mb-4 text-sm space-y-1">
        <div>缩放: {scaleAnimation.value.toFixed(2)}x</div>
        <div>旋转: {Math.round(rotateAnimation.value)}°</div>
        <div>色相: {Math.round(colorAnimation.value)}°</div>
        <div>状态: {isPlaying ? '🎬 播放中' : '⏸️ 已暂停'}</div>
      </div>

      <div className="flex gap-2">
        <button
          onClick={startAll}
          disabled={isPlaying}
          className="flex-1 bg-purple-500 text-white py-2 rounded text-sm hover:bg-purple-600 disabled:opacity-50"
        >
          开始
        </button>
        <button
          onClick={stopAll}
          disabled={!isPlaying}
          className="flex-1 bg-red-500 text-white py-2 rounded text-sm hover:bg-red-600 disabled:opacity-50"
        >
          停止
        </button>
        <button
          onClick={resetAll}
          className="flex-1 bg-gray-500 text-white py-2 rounded text-sm hover:bg-gray-600"
        >
          重置
        </button>
      </div>
    </div>
  );
};`,k=`// 动画相关的类型定义\r
\r
// 缓动函数类型\r
export type EasingFunction = (t: number) => number;\r
\r
// 动画配置接口\r
export interface AnimationConfig {\r
  duration: number;\r
  easing?: EasingFunction;\r
  delay?: number;\r
  loop?: boolean | number;\r
  direction?: "normal" | "reverse" | "alternate";\r
  onComplete?: () => void;\r
  onUpdate?: (value: number) => void;\r
}\r
\r
// 动画状态接口\r
export interface AnimationState {\r
  isPlaying: boolean;\r
  progress: number;\r
  value: number;\r
  iteration: number;\r
}\r
\r
// 动画控制方法接口\r
export interface AnimationControls {\r
  start: () => void;\r
  stop: () => void;\r
  reset: () => void;\r
}\r
\r
// 淡入淡出动画返回值接口\r
export interface FadeAnimationResult {\r
  isVisible: boolean;\r
  opacity: number;\r
  fadeIn: () => void;\r
  fadeOut: () => void;\r
}`,E=`import { useCallback, useEffect, useRef, useState } from 'react';
import { AnimationConfig, AnimationState, AnimationControls } from './types';
import { easingFunctions } from './easingFunctions';

/**
 * 自定义动画 Hook
 * @param from 起始值
 * @param to 结束值
 * @param config 动画配置
 * @returns [动画状态, 控制方法]
 */
export function useAnimation(
  from: number,
  to: number,
  config: AnimationConfig
): [AnimationState, AnimationControls] {
  const [state, setState] = useState<AnimationState>({
    isPlaying: false,
    progress: 0,
    value: from,
    iteration: 0,
  });

  const animationRef = useRef<number | null>(null);
  const startTimeRef = useRef<number | null>(null);
  const pausedTimeRef = useRef<number>(0);
  const iterationRef = useRef<number>(0);
  const directionRef = useRef<'forward' | 'backward'>('forward');

  const {
    duration,
    easing = easingFunctions.linear,
    delay = 0,
    loop = false,
    direction = 'normal',
    onComplete,
    onUpdate,
  } = config;

  const animate = useCallback(
    (timestamp: number) => {
      if (!startTimeRef.current) {
        startTimeRef.current = timestamp - pausedTimeRef.current;
      }

      const elapsed = timestamp - startTimeRef.current - delay;

      if (elapsed < 0) {
        animationRef.current = requestAnimationFrame(animate);
        return;
      }

      let progress = Math.min(elapsed / duration, 1);

      // 处理方向
      if (
        direction === 'reverse' ||
        (direction === 'alternate' && directionRef.current === 'backward')
      ) {
        progress = 1 - progress;
      }

      const easedProgress = easing(progress);
      const currentValue = from + (to - from) * easedProgress;

      setState((prev) => ({
        ...prev,
        progress: elapsed / duration,
        value: currentValue,
      }));

      onUpdate?.(currentValue);

      if (elapsed >= duration) {
        iterationRef.current += 1;

        // 处理循环
        if (
          loop === true ||
          (typeof loop === 'number' && iterationRef.current < loop)
        ) {
          if (direction === 'alternate') {
            directionRef.current =
              directionRef.current === 'forward' ? 'backward' : 'forward';
          }

          startTimeRef.current = null;
          pausedTimeRef.current = 0;

          setState((prev) => ({
            ...prev,
            iteration: iterationRef.current,
          }));

          animationRef.current = requestAnimationFrame(animate);
        } else {
          setState((prev) => ({
            ...prev,
            isPlaying: false,
            progress: 1,
            value: direction === 'reverse' ? from : to,
            iteration: iterationRef.current,
          }));

          onComplete?.();
        }
      } else {
        animationRef.current = requestAnimationFrame(animate);
      }
    },
    [from, to, duration, easing, delay, loop, direction, onComplete, onUpdate]
  );

  const start = useCallback(() => {
    if (state.isPlaying) return;

    setState((prev) => ({ ...prev, isPlaying: true }));
    startTimeRef.current = null;
    animationRef.current = requestAnimationFrame(animate);
  }, [animate, state.isPlaying]);

  const stop = useCallback(() => {
    if (animationRef.current) {
      cancelAnimationFrame(animationRef.current);
      animationRef.current = null;
    }

    setState((prev) => ({ ...prev, isPlaying: false }));
  }, []);

  const reset = useCallback(() => {
    stop();
    startTimeRef.current = null;
    pausedTimeRef.current = 0;
    iterationRef.current = 0;
    directionRef.current = 'forward';

    setState({
      isPlaying: false,
      progress: 0,
      value: from,
      iteration: 0,
    });
  }, [stop, from]);

  useEffect(() => {
    return () => {
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
    };
  }, []);

  return [state, { start, stop, reset }];
}`,H=`import { useCallback, useState } from 'react';
import { FadeAnimationResult } from './types';

/**
 * 简单的淡入淡出动画 Hook
 * @param duration 动画持续时间（毫秒）
 * @returns 淡入淡出控制对象
 */
export function useFadeAnimation(duration: number = 300): FadeAnimationResult {
  const [isVisible, setIsVisible] = useState(false);
  const [opacity, setOpacity] = useState(0);

  const fadeIn = useCallback(() => {
    setIsVisible(true);
    const startTime = Date.now();

    const animate = () => {
      const elapsed = Date.now() - startTime;
      const progress = Math.min(elapsed / duration, 1);

      setOpacity(progress);

      if (progress < 1) {
        requestAnimationFrame(animate);
      }
    };

    requestAnimationFrame(animate);
  }, [duration]);

  const fadeOut = useCallback(() => {
    const startTime = Date.now();
    const startOpacity = opacity;

    const animate = () => {
      const elapsed = Date.now() - startTime;
      const progress = Math.min(elapsed / duration, 1);

      setOpacity(startOpacity * (1 - progress));

      if (progress < 1) {
        requestAnimationFrame(animate);
      } else {
        setIsVisible(false);
      }
    };

    requestAnimationFrame(animate);
  }, [duration, opacity]);

  return { isVisible, opacity, fadeIn, fadeOut };
}`,J=()=>e.jsx(T,{title:"动画控制 Hook",description:"学习如何创建自定义的动画控制 Hook，实现流畅的动画效果和精确的动画控制。",overview:e.jsx("div",{className:"space-y-4",children:e.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-6",children:[e.jsxs("div",{className:"bg-blue-50 p-4 rounded-lg border border-blue-200",children:[e.jsx("h3",{className:"font-semibold text-blue-800 mb-2",children:"🎯 核心概念"}),e.jsxs("ul",{className:"text-sm text-blue-700 space-y-1",children:[e.jsx("li",{children:"• requestAnimationFrame"}),e.jsx("li",{children:"• 缓动函数"}),e.jsx("li",{children:"• 动画状态"}),e.jsx("li",{children:"• 动画控制"})]})]}),e.jsxs("div",{className:"bg-green-50 p-4 rounded-lg border border-green-200",children:[e.jsx("h3",{className:"font-semibold text-green-800 mb-2",children:"✨ 主要优势"}),e.jsxs("ul",{className:"text-sm text-green-700 space-y-1",children:[e.jsx("li",{children:"• 高性能动画实现"}),e.jsx("li",{children:"• 丰富缓动函数"}),e.jsx("li",{children:"• 灵活动画配置"}),e.jsx("li",{children:"• 精确动画控制"})]})]}),e.jsxs("div",{className:"bg-yellow-50 p-4 rounded-lg border border-yellow-200",children:[e.jsx("h3",{className:"font-semibold text-yellow-800 mb-2",children:"🎪 适用场景"}),e.jsxs("ul",{className:"text-sm text-yellow-700 space-y-1",children:[e.jsx("li",{children:"• UI 元素动画"}),e.jsx("li",{children:"• 数据可视化"}),e.jsx("li",{children:"• 页面转场"}),e.jsx("li",{children:"• 交互反馈"})]})]}),e.jsxs("div",{className:"bg-red-50 p-4 rounded-lg border border-red-200",children:[e.jsx("h3",{className:"font-semibold text-red-800 mb-2",children:"⚠️ 注意事项"}),e.jsxs("ul",{className:"text-sm text-red-700 space-y-1",children:[e.jsx("li",{children:"• 控制性能开销"}),e.jsx("li",{children:"• 动画可访问性"}),e.jsx("li",{children:"• 组件卸载清理"}),e.jsx("li",{children:"• 用户偏好设置"})]})]})]})}),examples:[{title:"弹跳球动画",component:e.jsx(q,{}),description:"展示使用弹跳缓动函数的循环动画效果。",observationPoints:["球会在容器内上下弹跳","使用弹跳缓动函数创造真实的物理效果","支持开始、停止和重置控制","实时显示动画状态信息"],keyPoints:["requestAnimationFrame 提供流畅的动画帧率","缓动函数控制动画的速度曲线","循环和方向控制实现往复动画","动画状态包含进度、值和迭代信息"],commonTraps:["忘记清理 requestAnimationFrame","动画状态更新过于频繁导致性能问题","没有处理组件卸载时的动画清理","缓动函数计算错误导致动画异常"],solutions:["在 useEffect 清理函数中取消动画帧","使用节流或合理的更新频率","在组件卸载时停止所有动画","使用经过验证的缓动函数库"],importantTips:["弹跳效果通过特殊的数学函数实现","循环动画会自动重复播放","方向控制可以实现往复运动","动画状态实时更新并显示在界面上"],preCode:[{title:"types",code:k},{title:"useAnimation",code:E},{title:"easingFunctions",code:M}],codeExample:{title:"弹跳球动画",code:V}},{title:"缓动函数对比",component:e.jsx($,{}),description:"对比不同缓动函数的动画效果，理解各种缓动的特点。",observationPoints:["不同缓动函数产生不同的动画效果","线性缓动保持恒定速度","弹性和弹跳缓动有特殊的物理效果","进度条显示动画的时间进度"],keyPoints:["缓动函数接受 0-1 的时间参数","返回值控制动画的实际进度","不同缓动适用于不同的动画场景","可以自定义缓动函数实现特殊效果"],preCode:[{title:"types",code:k},{title:"easingFunctions",code:M}],codeExample:{title:"缓动函数对比",code:W}},{title:"多元素动画",component:e.jsx(L,{}),description:"展示如何同时控制多个动画属性，创造复杂的动画效果。",observationPoints:["同时控制缩放、旋转和颜色变化","不同动画有不同的持续时间和缓动","所有动画可以统一控制","实时显示各个动画的当前值"],keyPoints:["多个 useAnimation 可以同时使用","每个动画有独立的配置和状态","可以统一控制多个动画的播放","组合动画创造丰富的视觉效果"],preCode:[{title:"types",code:k},{title:"useAnimation",code:E},{title:"easingFunctions",code:M}],codeExample:{title:"多元素动画",code:Q}},{title:"淡入淡出效果",component:e.jsx(U,{}),description:"展示简化的淡入淡出动画实现。",observationPoints:["简单的透明度动画效果","淡入时元素出现，淡出时消失","平滑的过渡效果","轻量级的动画实现"],keyPoints:["专门针对透明度动画优化","简化的 API 易于使用","适用于常见的显示/隐藏场景","性能优化的实现方式"],preCode:[{title:"types",code:k},{title:"useFadeAnimation",code:H}],codeExample:{title:"淡入淡出效果",code:B}}],tutorial:{concepts:["requestAnimationFrame 是浏览器提供的动画 API","缓动函数控制动画的速度变化曲线","动画状态包括播放状态、进度和当前值","动画配置包括持续时间、缓动、循环等参数","动画控制提供开始、停止、重置等方法"],steps:["设计动画状态的数据结构","实现基于 requestAnimationFrame 的动画循环","添加缓动函数支持","实现动画控制方法（开始、停止、重置）","添加循环和方向控制","处理动画完成和清理逻辑"],tips:["使用 useCallback 优化动画函数的性能","合理设置动画的更新频率","注意处理组件卸载时的清理","考虑用户的动画偏好设置","使用 TypeScript 提供类型安全"]},interview:{questions:[{question:"为什么使用 requestAnimationFrame 而不是 setTimeout？",answer:"requestAnimationFrame 的优势：1) 与浏览器刷新率同步，通常是 60fps；2) 页面不可见时自动暂停，节省性能；3) 浏览器优化，更流畅的动画效果；4) 避免丢帧和卡顿；5) 更好的电池续航。"},{question:"如何实现高性能的动画？",answer:"高性能动画技巧：1) 使用 CSS transform 和 opacity 属性；2) 避免触发重排和重绘；3) 使用 will-change 属性；4) 合理控制动画元素数量；5) 使用 requestAnimationFrame；6) 避免在动画中进行复杂计算。"},{question:"缓动函数的作用和实现原理是什么？",answer:"缓动函数作用：1) 控制动画的速度变化；2) 创造自然的运动效果；3) 提升用户体验。实现原理：接受 0-1 的时间参数，返回对应的进度值，通过数学函数（如三次方、正弦等）实现不同的速度曲线。"},{question:"如何处理动画的内存泄漏问题？",answer:"防止内存泄漏：1) 在 useEffect 清理函数中取消 requestAnimationFrame；2) 组件卸载时停止所有动画；3) 避免在动画回调中创建闭包；4) 合理管理动画状态的引用；5) 使用 useCallback 缓存动画函数。"}],keyPoints:["requestAnimationFrame 是现代动画的标准方案","缓动函数决定动画的视觉效果","动画性能优化对用户体验很重要","内存泄漏是动画开发的常见问题","动画的可访问性需要特别考虑"]},bestPractices:{dos:["使用 requestAnimationFrame 实现动画","提供丰富的缓动函数选择","实现完整的动画控制功能","注意动画的性能优化","处理组件卸载时的清理"],donts:["不要使用 setTimeout 实现动画","不要忽视动画的性能影响","不要忘记清理动画资源","不要过度使用复杂动画","不要忽视动画的可访问性"],patterns:["基于 requestAnimationFrame 的动画循环模式","缓动函数库模式","动画状态管理模式","多动画协调模式","动画资源清理模式"]}});export{J as default};
