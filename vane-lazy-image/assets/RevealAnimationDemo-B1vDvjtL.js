import{R as v,j as t}from"./index-C0E0sUJ6.js";import{L as a}from"./LazyLoadImageCore-BPNS9GwS.js";import{D as j}from"./DemoPage-DjGyO8DL.js";import{w as r}from"./index-BUsnPGUY.js";import"./tomorrow-CNZkBZJs.js";import"./GlobalContext-DYUf_pwM.js";function S(o){return{fade:`
      @keyframes reveal-fade {
        from { opacity: 0; }
        to { opacity: 1; }
      }
    `,"fade-up":`
      @keyframes reveal-fade-up {
        from { opacity: 0; transform: translateY(30px); }
        to { opacity: 1; transform: translateY(0); }
      }
    `,"fade-down":`
      @keyframes reveal-fade-down {
        from { opacity: 0; transform: translateY(-30px); }
        to { opacity: 1; transform: translateY(0); }
      }
    `,"fade-left":`
      @keyframes reveal-fade-left {
        from { opacity: 0; transform: translateX(30px); }
        to { opacity: 1; transform: translateX(0); }
      }
    `,"fade-right":`
      @keyframes reveal-fade-right {
        from { opacity: 0; transform: translateX(-30px); }
        to { opacity: 1; transform: translateX(0); }
      }
    `,"zoom-in":`
      @keyframes reveal-zoom-in {
        from { opacity: 0; transform: scale(0.8); }
        to { opacity: 1; transform: scale(1); }
      }
    `,"zoom-out":`
      @keyframes reveal-zoom-out {
        from { opacity: 0; transform: scale(1.2); }
        to { opacity: 1; transform: scale(1); }
      }
    `,"rotate-in":`
      @keyframes reveal-rotate-in {
        from { opacity: 0; transform: rotate(-180deg) scale(0.5); }
        to { opacity: 1; transform: rotate(0deg) scale(1); }
      }
    `,"flip-x":`
      @keyframes reveal-flip-x {
        from { opacity: 0; transform: perspective(400px) rotateX(-90deg); }
        to { opacity: 1; transform: perspective(400px) rotateX(0deg); }
      }
    `,"flip-y":`
      @keyframes reveal-flip-y {
        from { opacity: 0; transform: perspective(400px) rotateY(-90deg); }
        to { opacity: 1; transform: perspective(400px) rotateY(0deg); }
      }
    `,"slide-up":`
      @keyframes reveal-slide-up {
        from { transform: translateY(100%); }
        to { transform: translateY(0); }
      }
    `,"slide-down":`
      @keyframes reveal-slide-down {
        from { transform: translateY(-100%); }
        to { transform: translateY(0); }
      }
    `,"slide-left":`
      @keyframes reveal-slide-left {
        from { transform: translateX(100%); }
        to { transform: translateX(0); }
      }
    `,"slide-right":`
      @keyframes reveal-slide-right {
        from { transform: translateX(-100%); }
        to { transform: translateX(0); }
      }
    `,bounce:`
      @keyframes reveal-bounce {
        from { opacity: 0; transform: scale(0.3) translateY(-50px); }
        50% { opacity: 1; transform: scale(1.05) translateY(0); }
        70% { transform: scale(0.95); }
        to { opacity: 1; transform: scale(1); }
      }
    `,elastic:`
      @keyframes reveal-elastic {
        from { opacity: 0; transform: scale(0); }
        50% { opacity: 1; transform: scale(1.2); }
        75% { transform: scale(0.9); }
        90% { transform: scale(1.05); }
        to { opacity: 1; transform: scale(1); }
      }
    `}[o]||""}function p(o,i){if(typeof document>"u"||document.getElementById(o))return;const e=document.createElement("style");e.id=o,e.textContent=i,document.head.appendChild(e)}function n(o={}){const{animation:i="fade-up",duration:e=600,delay:g=0,easing:y="ease-out",customAnimation:d,customKeyframes:c,fillMode:l="both",disabled:u=!1}=o;if(i!=="custom"){const m=S(i);p(`reveal-animation-${i}`,m)}else c&&p(`reveal-animation-custom-${d}`,c);return{name:"reveal-animation",version:"1.0.0",config:o,hooks:{onLoadSuccess:m=>{var f;if(u)return;const s=(f=m.imageRef)==null?void 0:f.current;if(!s)return;const x=i==="custom"?d||"none":`reveal-${i}`;if(s.style.animation=`${x} ${e}ms ${y} ${g}ms ${l}`,l==="none"||l==="backwards"){const h=()=>{s.style.animation="",s.removeEventListener("animationend",h)};s.addEventListener("animationend",h)}}}}}const b="RevealAnimation Plugin - 图片揭示动画",z=r(a,[n({animation:"fade",duration:600,easing:"ease-out"})]),w=r(a,[n({animation:"fade-up",duration:800,easing:"ease-out"})]),k=r(a,[n({animation:"zoom-in",duration:700,easing:"cubic-bezier(0.68, -0.55, 0.265, 1.55)"})]),B=r(a,[n({animation:"rotate-in",duration:1e3,easing:"ease-out"})]),R=r(a,[n({animation:"bounce",duration:1200,easing:"ease-out"})]),W=r(a,[n({animation:"elastic",duration:1500,easing:"ease-out"})]),I=r(a,[n({animation:"flip-x",duration:800,easing:"ease-out"})]),F=r(a,[n({animation:"slide-right",duration:700,easing:"cubic-bezier(0.25, 0.46, 0.45, 0.94)"})]),C=()=>{const[o,i]=v.useState(0);return t.jsxs(j,{title:b,description:"为图片加载添加各种进场动画效果，提升视觉体验。纯 CSS 实现，无依赖。💡 提示：点击右上角的'🔄 全局重试'按钮可以重新观看所有动画效果。",children:[t.jsx("button",{style:{position:"fixed",top:20,right:20,zIndex:1e3,padding:"10px 20px",fontSize:"14px",fontWeight:600,color:"#fff",background:"linear-gradient(135deg, #667eea 0%, #764ba2 100%)",border:"none",borderRadius:"8px",cursor:"pointer",boxShadow:"0 4px 15px rgba(102, 126, 234, 0.4)",transition:"all 0.3s ease"},onClick:()=>i(e=>e+1),onMouseEnter:e=>{e.currentTarget.style.transform="translateY(-2px)",e.currentTarget.style.boxShadow="0 6px 20px rgba(102, 126, 234, 0.6)"},onMouseLeave:e=>{e.currentTarget.style.transform="translateY(0)",e.currentTarget.style.boxShadow="0 4px 15px rgba(102, 126, 234, 0.4)"},title:"重新加载所有图片和动画效果",children:"🔄 全局重试"}),t.jsxs("div",{children:[t.jsxs("section",{style:{marginBottom:60},children:[t.jsx("h2",{style:{marginBottom:20,fontSize:24,fontWeight:600,color:"#333"},children:"📌 基础动画效果"}),t.jsxs("div",{style:{display:"grid",gridTemplateColumns:"repeat(auto-fit, minmax(350px, 1fr))",gap:30},children:[t.jsxs("div",{children:[t.jsx("h3",{style:{marginBottom:10,fontSize:16,fontWeight:600},children:"淡入（Fade）"}),t.jsx("p",{style:{color:"#666",marginBottom:12,fontSize:14},children:"最简单的淡入效果，适合大部分场景"}),t.jsx(z,{src:"https://picsum.photos/id/1015/400/300",alt:"淡入动画示例",loading:"lazy",containerStyle:{width:400,height:300,position:"relative"},imageStyle:{width:"100%",height:"100%",objectFit:"cover",borderRadius:"8px"}})]}),t.jsxs("div",{children:[t.jsx("h3",{style:{marginBottom:10,fontSize:16,fontWeight:600},children:"从下淡入上移（Fade Up）"}),t.jsx("p",{style:{color:"#666",marginBottom:12,fontSize:14},children:"从下方淡入同时上移，动感十足"}),t.jsx(w,{src:"https://picsum.photos/id/1018/400/300",alt:"从下淡入上移示例",loading:"lazy",containerStyle:{width:400,height:300,position:"relative"},imageStyle:{width:"100%",height:"100%",objectFit:"cover",borderRadius:"8px"}})]}),t.jsxs("div",{children:[t.jsx("h3",{style:{marginBottom:10,fontSize:16,fontWeight:600},children:"缩放进入（Zoom In）"}),t.jsx("p",{style:{color:"#666",marginBottom:12,fontSize:14},children:"从小到大缩放进入，突出重点"}),t.jsx(k,{src:"https://picsum.photos/id/1019/400/300",alt:"缩放进入示例",loading:"lazy",containerStyle:{width:400,height:300,position:"relative"},imageStyle:{width:"100%",height:"100%",objectFit:"cover",borderRadius:"8px"}})]})]})]}),t.jsxs("section",{style:{marginBottom:60},children:[t.jsx("h2",{style:{marginBottom:20,fontSize:24,fontWeight:600,color:"#333"},children:"✨ 创意动画效果"}),t.jsxs("div",{style:{display:"grid",gridTemplateColumns:"repeat(auto-fit, minmax(350px, 1fr))",gap:30},children:[t.jsxs("div",{children:[t.jsx("h3",{style:{marginBottom:10,fontSize:16,fontWeight:600},children:"旋转进入（Rotate In）"}),t.jsx("p",{style:{color:"#666",marginBottom:12,fontSize:14},children:"旋转同时缩放进入，视觉冲击强"}),t.jsx(B,{src:"https://picsum.photos/id/1020/400/300",alt:"旋转进入示例",loading:"lazy",containerStyle:{width:400,height:300,position:"relative"},imageStyle:{width:"100%",height:"100%",objectFit:"cover",borderRadius:"8px"}})]}),t.jsxs("div",{children:[t.jsx("h3",{style:{marginBottom:10,fontSize:16,fontWeight:600},children:"弹跳进入（Bounce）"}),t.jsx("p",{style:{color:"#666",marginBottom:12,fontSize:14},children:"弹跳效果，活泼有趣"}),t.jsx(R,{src:"https://picsum.photos/id/1021/400/300",alt:"弹跳进入示例",loading:"lazy",containerStyle:{width:400,height:300,position:"relative"},imageStyle:{width:"100%",height:"100%",objectFit:"cover",borderRadius:"8px"}})]}),t.jsxs("div",{children:[t.jsx("h3",{style:{marginBottom:10,fontSize:16,fontWeight:600},children:"弹性进入（Elastic）"}),t.jsx("p",{style:{color:"#666",marginBottom:12,fontSize:14},children:"弹性缩放效果，更加自然"}),t.jsx(W,{src:"https://picsum.photos/id/1022/400/300",alt:"弹性进入示例",loading:"lazy",containerStyle:{width:400,height:300,position:"relative"},imageStyle:{width:"100%",height:"100%",objectFit:"cover",borderRadius:"8px"}})]})]})]}),t.jsxs("section",{children:[t.jsx("h2",{style:{marginBottom:20,fontSize:24,fontWeight:600,color:"#333"},children:"🎯 高级动画效果"}),t.jsxs("div",{style:{display:"grid",gridTemplateColumns:"repeat(auto-fit, minmax(350px, 1fr))",gap:30},children:[t.jsxs("div",{children:[t.jsx("h3",{style:{marginBottom:10,fontSize:16,fontWeight:600},children:"X轴翻转（Flip X）"}),t.jsx("p",{style:{color:"#666",marginBottom:12,fontSize:14},children:"3D 翻转效果，科技感十足"}),t.jsx(I,{src:"https://picsum.photos/id/1023/400/300",alt:"X轴翻转示例",loading:"lazy",containerStyle:{width:400,height:300,position:"relative"},imageStyle:{width:"100%",height:"100%",objectFit:"cover",borderRadius:"8px"}})]}),t.jsxs("div",{children:[t.jsx("h3",{style:{marginBottom:10,fontSize:16,fontWeight:600},children:"滑入（Slide Right）"}),t.jsx("p",{style:{color:"#666",marginBottom:12,fontSize:14},children:"从左侧滑入，方向感明确"}),t.jsx(F,{src:"https://picsum.photos/id/1024/400/300",alt:"滑入示例",loading:"lazy",containerStyle:{width:400,height:300,position:"relative"},imageStyle:{width:"100%",height:"100%",objectFit:"cover",borderRadius:"8px"}})]})]})]}),t.jsxs("section",{style:{marginTop:60,padding:24,background:"#f8f9fa",borderRadius:8},children:[t.jsx("h2",{style:{marginBottom:16,fontSize:20,fontWeight:600,color:"#333"},children:"📖 使用说明"}),t.jsx("pre",{style:{background:"#fff",padding:16,borderRadius:4,overflow:"auto",fontSize:14},children:`import { withPlugins } from "vane-lazy-image/plugins";
import { createRevealAnimationPlugin } from "vane-lazy-image/custom-plugins";

const ImageWithAnimation = withPlugins([
  createRevealAnimationPlugin({
    animation: 'fade-up',    // 动画类型
    duration: 800,           // 持续时间（毫秒）
    easing: 'ease-out',      // 缓动函数
    delay: 0,                // 延迟（毫秒）
    fillMode: 'both',        // 动画填充模式
  }),
]);

// 使用组件
<ImageWithAnimation
  src="your-image.jpg"
  alt="描述"
  loading="lazy"
  containerStyle={{ width: 400, height: 300 }}
/>`})]})]},o)]})};export{C as default};
