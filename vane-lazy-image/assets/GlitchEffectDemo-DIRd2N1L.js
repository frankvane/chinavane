import{j as t,R as f}from"./index-C0E0sUJ6.js";import{D as z}from"./DemoPage-DjGyO8DL.js";import{L as l}from"./LazyLoadImageCore-BPNS9GwS.js";import{w as c}from"./index-BUsnPGUY.js";import"./tomorrow-CNZkBZJs.js";import"./GlobalContext-DYUf_pwM.js";function h(e={}){const{style:r="glitch-mix",continuous:i=!1,duration:n=1e3,intensity:a=.7,triggerOnHover:g=!1,rgbOffset:x=3,scanLineCount:u=30,animateScanLines:y=!0}=e;if(typeof document<"u"){const s="glitch-effect-styles";if(!document.getElementById(s)){const m=document.createElement("style");m.id=s,m.textContent=`
        @keyframes glitch-anim {
          0% {
            clip-path: inset(${40+Math.random()*10}% 0 ${30+Math.random()*10}% 0);
            transform: translate(${Math.random()*10-5}px, ${Math.random()*10-5}px);
          }
          10% {
            clip-path: inset(${70+Math.random()*10}% 0 ${10+Math.random()*10}% 0);
            transform: translate(${Math.random()*10-5}px, ${Math.random()*10-5}px);
          }
          20% {
            clip-path: inset(${10+Math.random()*10}% 0 ${70+Math.random()*10}% 0);
            transform: translate(${Math.random()*10-5}px, ${Math.random()*10-5}px);
          }
          30% {
            clip-path: inset(${50+Math.random()*10}% 0 ${30+Math.random()*10}% 0);
            transform: translate(${Math.random()*10-5}px, ${Math.random()*10-5}px);
          }
          40% {
            clip-path: inset(${20+Math.random()*10}% 0 ${60+Math.random()*10}% 0);
            transform: translate(${Math.random()*10-5}px, ${Math.random()*10-5}px);
          }
          50% {
            clip-path: inset(${60+Math.random()*10}% 0 ${20+Math.random()*10}% 0);
            transform: translate(${Math.random()*10-5}px, ${Math.random()*10-5}px);
          }
          60% {
            clip-path: inset(${30+Math.random()*10}% 0 ${50+Math.random()*10}% 0);
            transform: translate(${Math.random()*10-5}px, ${Math.random()*10-5}px);
          }
          70% {
            clip-path: inset(${80+Math.random()*10}% 0 ${5+Math.random()*10}% 0);
            transform: translate(${Math.random()*10-5}px, ${Math.random()*10-5}px);
          }
          80% {
            clip-path: inset(${15+Math.random()*10}% 0 ${65+Math.random()*10}% 0);
            transform: translate(${Math.random()*10-5}px, ${Math.random()*10-5}px);
          }
          90% {
            clip-path: inset(${45+Math.random()*10}% 0 ${35+Math.random()*10}% 0);
            transform: translate(${Math.random()*10-5}px, ${Math.random()*10-5}px);
          }
          100% {
            clip-path: inset(${25+Math.random()*10}% 0 ${55+Math.random()*10}% 0);
            transform: translate(0, 0);
          }
        }

        @keyframes glitch-rgb-split {
          0%, 100% {
            transform: translate(0);
            opacity: 1;
          }
          25% {
            transform: translate(-1px, 1px);
            opacity: 0.8;
          }
          50% {
            transform: translate(1px, -1px);
            opacity: 0.9;
          }
          75% {
            transform: translate(-1px, -1px);
            opacity: 0.85;
          }
        }

        @keyframes scan-line-move {
          from { transform: translateY(-100%); }
          to { transform: translateY(100%); }
        }
      `,document.head.appendChild(m)}}return{name:"glitch-effect",version:"1.0.0",config:e,hooks:{renderOverlay:s=>t.jsx(B,{style:r,continuous:i,duration:n,intensity:a,triggerOnHover:g,rgbOffset:x,scanLineCount:u,animateScanLines:y,context:s})}}}const B=({style:e="glitch-mix",continuous:r=!1,duration:i=1e3,intensity:n=.7,triggerOnHover:a=!1,rgbOffset:g=3,scanLineCount:x=30,animateScanLines:u=!0})=>{const[y,s]=f.useState(!1),[m,j]=f.useState(!1);f.useEffect(()=>{if(!r&&!a){s(!0);const o=setTimeout(()=>s(!1),i);return()=>clearTimeout(o)}},[r,a,i]);const d=r||y||a&&m,S=()=>({position:"absolute",inset:0,background:`
      linear-gradient(90deg,
        rgba(255, 0, 0, ${n*.15}) 0%,
        transparent ${g*2}px,
        transparent calc(100% - ${g*2}px),
        rgba(0, 255, 255, ${n*.15}) 100%
      )
    `,mixBlendMode:"color",animation:d?"glitch-rgb-split 0.5s ease-in-out infinite":"none",pointerEvents:"none"}),v=Array.from({length:x},(o,p)=>t.jsx("div",{style:{position:"absolute",left:0,right:0,height:"1px",top:`${p/x*100}%`,background:`rgba(255, 255, 255, ${n*.1})`,animation:u&&d?`scan-line-move ${2+Math.random()*2}s linear infinite`:"none",animationDelay:`${Math.random()*2}s`}},p)),b=o=>{const p=[{main:"rgba(255, 0, 0, 0.15)",secondary:"rgba(0, 255, 255, 0.15)"},{main:"rgba(0, 255, 0, 0.15)",secondary:"rgba(255, 0, 255, 0.15)"},{main:"rgba(0, 100, 255, 0.15)",secondary:"rgba(255, 255, 0, 0.15)"}],$=p[o-1]||p[0];return{position:"absolute",inset:0,background:`
        linear-gradient(
          ${o*45}deg,
          ${$.main} 0%,
          transparent 30%,
          transparent 70%,
          ${$.secondary} 100%
        )
      `,animation:d?`glitch-anim ${.4+o*.1}s infinite ${o%2===0?"normal":"reverse"}`:"none",animationDelay:`${o*.06}s`,opacity:n*.7,mixBlendMode:"screen",pointerEvents:"none",filter:`blur(${n*.5}px)`}},M={position:"absolute",inset:0,pointerEvents:a?"auto":"none",overflow:"hidden"};return t.jsxs("div",{style:M,onMouseEnter:()=>a&&j(!0),onMouseLeave:()=>a&&j(!1),children:[(e==="rgb-split"||e==="glitch-mix"||e==="intense")&&t.jsx("div",{style:S()}),(e==="scan-lines"||e==="glitch-mix")&&d&&v,(e==="digital"||e==="glitch-mix"||e==="intense")&&d&&t.jsxs(t.Fragment,{children:[t.jsx("div",{style:b(1)}),t.jsx("div",{style:b(2)}),e==="intense"&&t.jsx("div",{style:b(3)})]}),e==="intense"&&d&&t.jsx("div",{style:{position:"absolute",inset:0,background:`repeating-linear-gradient(
              0deg,
              rgba(0, 255, 0, ${n*.03}) 0px,
              rgba(0, 255, 0, 0) 2px,
              rgba(0, 255, 0, 0) 4px,
              rgba(0, 255, 0, ${n*.03}) 6px
            )`,animation:"glitch-anim 0.8s ease-in-out infinite",pointerEvents:"none",opacity:.5}})]})},w="GlitchEffect Plugin - 故障艺术效果",R=c(l,[h({style:"rgb-split",continuous:!0,intensity:.8,rgbOffset:5})]),W=c(l,[h({style:"scan-lines",continuous:!0,intensity:.6,scanLineCount:40,animateScanLines:!0})]),I=c(l,[h({style:"digital",continuous:!0,intensity:.6})]),E=c(l,[h({style:"glitch-mix",continuous:!0,intensity:.8,rgbOffset:3,scanLineCount:30})]),L=c(l,[h({style:"intense",continuous:!0,intensity:.8,rgbOffset:5})]),G=c(l,[h({style:"glitch-mix",continuous:!1,duration:1500,intensity:.9})]),T=c(l,[h({style:"glitch-mix",triggerOnHover:!0,intensity:.8})]),Y=()=>{const[e,r]=f.useState(0);return t.jsxs(z,{title:w,description:"赛博朋克风格的故障艺术效果，纯 CSS 实现，无依赖。💡 提示：点击右上角的'🔄 全局重试'按钮可以重新观看所有效果。适合科技感、创意类网站。支持持续动画、触发式、悬停触发等多种模式。",children:[t.jsx("button",{style:{position:"fixed",top:20,right:20,zIndex:1e3,padding:"10px 20px",fontSize:"14px",fontWeight:600,color:"#fff",background:"linear-gradient(135deg, #667eea 0%, #764ba2 100%)",border:"none",borderRadius:"8px",cursor:"pointer",boxShadow:"0 4px 15px rgba(102, 126, 234, 0.4)",transition:"all 0.3s ease"},onClick:()=>r(i=>i+1),onMouseEnter:i=>{i.currentTarget.style.transform="translateY(-2px)",i.currentTarget.style.boxShadow="0 6px 20px rgba(102, 126, 234, 0.6)"},onMouseLeave:i=>{i.currentTarget.style.transform="translateY(0)",i.currentTarget.style.boxShadow="0 4px 15px rgba(102, 126, 234, 0.4)"},title:"重新加载所有图片和效果",children:"🔄 全局重试"}),t.jsxs("div",{children:[t.jsxs("section",{style:{marginBottom:60},children:[t.jsx("h2",{style:{marginBottom:20,fontSize:24,fontWeight:600,color:"#333"},children:"📌 基础故障效果"}),t.jsxs("div",{style:{display:"grid",gridTemplateColumns:"repeat(auto-fit, minmax(350px, 1fr))",gap:30},children:[t.jsxs("div",{children:[t.jsx("h3",{style:{marginBottom:10,fontSize:16,fontWeight:600,color:"#333"},children:"RGB 分离（RGB Split）"}),t.jsx("p",{style:{color:"#666",marginBottom:12,fontSize:14},children:"红蓝分离效果，经典赛博朋克风格"}),t.jsx(R,{src:"https://picsum.photos/id/180/400/300",alt:"RGB分离效果",loading:"lazy",containerStyle:{width:400,height:300,position:"relative"},imageStyle:{width:"100%",height:"100%",objectFit:"cover",borderRadius:"8px"}})]}),t.jsxs("div",{children:[t.jsx("h3",{style:{marginBottom:10,fontSize:16,fontWeight:600,color:"#333"},children:"扫描线（Scan Lines）"}),t.jsx("p",{style:{color:"#666",marginBottom:12,fontSize:14},children:"CRT 显示器风格的扫描线效果"}),t.jsx(W,{src:"https://picsum.photos/id/182/400/300",alt:"扫描线效果",loading:"lazy",containerStyle:{width:400,height:300,position:"relative"},imageStyle:{width:"100%",height:"100%",objectFit:"cover",borderRadius:"8px"}})]}),t.jsxs("div",{children:[t.jsx("h3",{style:{marginBottom:10,fontSize:16,fontWeight:600,color:"#333"},children:"数字失真（Digital）"}),t.jsx("p",{style:{color:"#666",marginBottom:12,fontSize:14},children:"数字信号失真效果"}),t.jsx(I,{src:"https://picsum.photos/id/188/400/300",alt:"数字失真效果",loading:"lazy",containerStyle:{width:400,height:300,position:"relative"},imageStyle:{width:"100%",height:"100%",objectFit:"cover",borderRadius:"8px"}})]})]})]}),t.jsxs("section",{style:{marginBottom:60},children:[t.jsx("h2",{style:{marginBottom:20,fontSize:24,fontWeight:600,color:"#333"},children:"✨ 高级混合效果"}),t.jsxs("div",{style:{display:"grid",gridTemplateColumns:"repeat(auto-fit, minmax(350px, 1fr))",gap:30},children:[t.jsxs("div",{children:[t.jsx("h3",{style:{marginBottom:10,fontSize:16,fontWeight:600,color:"#333"},children:"混合模式（Glitch Mix）"}),t.jsx("p",{style:{color:"#666",marginBottom:12,fontSize:14},children:"RGB + 扫描线 + 数字失真组合"}),t.jsx(E,{src:"https://picsum.photos/id/190/400/300",alt:"混合效果",loading:"lazy",containerStyle:{width:400,height:300,position:"relative"},imageStyle:{width:"100%",height:"100%",objectFit:"cover",borderRadius:"8px"}})]}),t.jsxs("div",{children:[t.jsx("h3",{style:{marginBottom:10,fontSize:16,fontWeight:600,color:"#333"},children:"强烈模式（Intense）"}),t.jsx("p",{style:{color:"#666",marginBottom:12,fontSize:14},children:"最强故障效果，视觉冲击力最强"}),t.jsx(L,{src:"https://picsum.photos/id/191/400/300",alt:"强烈模式",loading:"lazy",containerStyle:{width:400,height:300,position:"relative"},imageStyle:{width:"100%",height:"100%",objectFit:"cover",borderRadius:"8px"}})]})]})]}),t.jsxs("section",{children:[t.jsx("h2",{style:{marginBottom:20,fontSize:24,fontWeight:600,color:"#333"},children:"🎯 交互触发模式"}),t.jsxs("div",{style:{display:"grid",gridTemplateColumns:"repeat(auto-fit, minmax(350px, 1fr))",gap:30},children:[t.jsxs("div",{children:[t.jsx("h3",{style:{marginBottom:10,fontSize:16,fontWeight:600,color:"#333"},children:"一次性触发（加载时）"}),t.jsx("p",{style:{color:"#666",marginBottom:12,fontSize:14},children:'图片加载完成时触发一次，点击"🔄 重试"可重新观看'}),t.jsx(G,{src:"https://picsum.photos/id/193/400/300",alt:"一次性触发",loading:"lazy",containerStyle:{width:400,height:300,position:"relative"},imageStyle:{width:"100%",height:"100%",objectFit:"cover",borderRadius:"8px"}})]}),t.jsxs("div",{children:[t.jsx("h3",{style:{marginBottom:10,fontSize:16,fontWeight:600,color:"#333"},children:"悬停触发（Hover）"}),t.jsx("p",{style:{color:"#666",marginBottom:12,fontSize:14},children:"鼠标悬停时触发效果"}),t.jsx(T,{src:"https://picsum.photos/id/195/400/300",alt:"悬停触发",loading:"lazy",containerStyle:{width:400,height:300,position:"relative"},imageStyle:{width:"100%",height:"100%",objectFit:"cover",borderRadius:"8px"}})]})]})]}),t.jsxs("section",{style:{marginTop:60,padding:24,background:"#fff",borderRadius:8,border:"1px solid #e5e7eb"},children:[t.jsx("h2",{style:{marginBottom:16,fontSize:20,fontWeight:600,color:"#333"},children:"📖 使用说明"}),t.jsx("pre",{style:{background:"#f8fafc",padding:16,borderRadius:4,overflow:"auto",fontSize:14},children:`import { withPlugins } from "vane-lazy-image/plugins";
import { createGlitchEffectPlugin } from "vane-lazy-image/custom-plugins";

const ImageWithGlitch = withPlugins(LazyLoadImageCore as any, [
  createGlitchEffectPlugin({
    style: 'glitch-mix',     // 故障效果类型
    continuous: true,        // 是否持续动画
    duration: 1000,          // 持续时间（非持续模式）
    intensity: 0.8,          // 效果强度（0-1）
    triggerOnHover: false,   // 是否悬停触发
    rgbOffset: 3,            // RGB 分离距离
    scanLineCount: 30,       // 扫描线数量
    animateScanLines: true,  // 扫描线是否动画
  }),
]);

// 使用组件
<ImageWithGlitch
  src="your-image.jpg"
  alt="描述"
  loading="lazy"
  containerStyle={{ width: 400, height: 300 }}
/>`})]})]},e)]})};export{Y as default};
