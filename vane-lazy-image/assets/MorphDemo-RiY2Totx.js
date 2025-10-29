import{R as j,j as e}from"./index-C0E0sUJ6.js";import{D as b}from"./DemoPage-DjGyO8DL.js";import{L as a}from"./LazyLoadImageCore-BPNS9GwS.js";import{w as s}from"./index-BUsnPGUY.js";import"./tomorrow-CNZkBZJs.js";import"./GlobalContext-DYUf_pwM.js";function v(r,i){const{fromBorderRadius:t="50%",toBorderRadius:l="0%",fromScale:m=1,toScale:p=1,fromRotate:g=0,toRotate:u=0,fromSkew:d=0,toSkew:o=0,customTransform:c}=i;return{"circle-to-square":`
      @keyframes morph-circle-to-square {
        from { border-radius: 50%; transform: scale(0.9); }
        to { border-radius: 0%; transform: scale(1); }
      }
    `,"square-to-circle":`
      @keyframes morph-square-to-circle {
        from { border-radius: 0%; transform: scale(1); }
        to { border-radius: 50%; transform: scale(0.9); }
      }
    `,"rounded-corners":`
      @keyframes morph-rounded-corners {
        from { border-radius: ${t}; }
        to { border-radius: ${l}; }
      }
    `,"scale-morph":`
      @keyframes morph-scale {
        from { transform: scale(${m}); }
        to { transform: scale(${p}); }
      }
    `,"rotate-morph":`
      @keyframes morph-rotate {
        from { transform: rotate(${g}deg); }
        to { transform: rotate(${u}deg); }
      }
    `,"skew-morph":`
      @keyframes morph-skew {
        from { transform: skewX(${d}deg) skewY(${d}deg); }
        to { transform: skewX(${o}deg) skewY(${o}deg); }
      }
    `,elastic:`
      @keyframes morph-elastic {
        0% { transform: scale(0.8); }
        30% { transform: scale(1.1); }
        50% { transform: scale(0.95); }
        70% { transform: scale(1.02); }
        100% { transform: scale(1); }
      }
    `,liquid:`
      @keyframes morph-liquid {
        0% { border-radius: 30% 70% 70% 30% / 30% 30% 70% 70%; transform: rotate(0deg); }
        25% { border-radius: 58% 42% 75% 25% / 76% 46% 54% 24%; }
        50% { border-radius: 50% 50% 33% 67% / 55% 27% 73% 45%; transform: rotate(180deg); }
        75% { border-radius: 33% 67% 58% 42% / 63% 68% 32% 37%; }
        100% { border-radius: 30% 70% 70% 30% / 30% 30% 70% 70%; transform: rotate(360deg); }
      }
    `,custom:c?`
      @keyframes morph-custom {
        from { ${c.from} }
        to { ${c.to} }
      }
    `:""}[r]||""}function w(r,i){if(typeof document>"u"||document.getElementById(r))return;const t=document.createElement("style");t.id=r,t.textContent=i,document.head.appendChild(t)}function n(r={}){const{type:i="elastic",duration:t=800,delay:l=0,easing:m="cubic-bezier(0.68, -0.55, 0.265, 1.55)",triggerOnHover:p=!1,continuous:g=!1}=r,u=v(i,r);return w(`morph-plugin-${i}`,u),{name:"morph",version:"1.0.0",config:r,hooks:{onLoadSuccess:d=>{var y;const o=(y=d.imageRef)==null?void 0:y.current;if(!o)return;const h={"circle-to-square":"morph-circle-to-square","square-to-circle":"morph-square-to-circle","rounded-corners":"morph-rounded-corners","scale-morph":"morph-scale","rotate-morph":"morph-rotate","skew-morph":"morph-skew",elastic:"morph-elastic",liquid:"morph-liquid",custom:"morph-custom"}[i];if(g){o.style.animation=`${h} ${t}ms ${m} ${l}ms infinite alternate`;return}if(p){const x=()=>{o.style.animation=`${h} ${t}ms ${m} ${l}ms both`},S=()=>{o.style.animation=""};o.addEventListener("mouseenter",x),o.addEventListener("mouseleave",S);return}o.style.animation=`${h} ${t}ms ${m} ${l}ms both`;const f=()=>{o.style.animation="",o.removeEventListener("animationend",f)};o.addEventListener("animationend",f)}}}}const z="Morph Plugin - 形变过渡效果",k=s(a,[n({type:"elastic",duration:1200,easing:"cubic-bezier(0.68, -0.55, 0.265, 1.55)"})]),B=s(a,[n({type:"circle-to-square",duration:1e3,easing:"ease-in-out"})]),R=s(a,[n({type:"scale-morph",duration:800,fromScale:.5,toScale:1,easing:"ease-out"})]),$=s(a,[n({type:"rotate-morph",duration:1e3,fromRotate:-180,toRotate:0,easing:"ease-out"})]),W=s(a,[n({type:"skew-morph",duration:800,fromSkew:20,toSkew:0,easing:"ease-out"})]),M=s(a,[n({type:"liquid",duration:4e3,continuous:!0,easing:"ease-in-out"})]),q=s(a,[n({type:"rounded-corners",duration:400,triggerOnHover:!0,fromBorderRadius:"0%",toBorderRadius:"50%",easing:"ease-in-out"})]),L=s(a,[n({type:"scale-morph",duration:300,triggerOnHover:!0,fromScale:1,toScale:1.1,easing:"ease-out"})]),H=()=>{const[r,i]=j.useState(0);return e.jsxs(b,{title:z,description:"各种形变过渡效果，让图片展示更具创意。纯 CSS transforms 实现。💡 提示：点击右上角的'🔄 全局重试'按钮可以重新观看所有动画效果。",children:[e.jsx("button",{style:{position:"fixed",top:20,right:20,zIndex:1e3,padding:"10px 20px",fontSize:"14px",fontWeight:600,color:"#fff",background:"linear-gradient(135deg, #667eea 0%, #764ba2 100%)",border:"none",borderRadius:"8px",cursor:"pointer",boxShadow:"0 4px 15px rgba(102, 126, 234, 0.4)",transition:"all 0.3s ease"},onClick:()=>i(t=>t+1),onMouseEnter:t=>{t.currentTarget.style.transform="translateY(-2px)",t.currentTarget.style.boxShadow="0 6px 20px rgba(102, 126, 234, 0.6)"},onMouseLeave:t=>{t.currentTarget.style.transform="translateY(0)",t.currentTarget.style.boxShadow="0 4px 15px rgba(102, 126, 234, 0.4)"},title:"重新加载所有图片和动画效果",children:"🔄 全局重试"}),e.jsxs("div",{children:[e.jsxs("section",{style:{marginBottom:60},children:[e.jsx("h2",{style:{marginBottom:20,fontSize:24,fontWeight:600,color:"#333"},children:"📌 加载时触发的形变效果"}),e.jsxs("div",{style:{display:"grid",gridTemplateColumns:"repeat(auto-fit, minmax(350px, 1fr))",gap:30},children:[e.jsxs("div",{children:[e.jsx("h3",{style:{marginBottom:10,fontSize:16,fontWeight:600},children:"弹性形变（Elastic）"}),e.jsx("p",{style:{color:"#666",marginBottom:12,fontSize:14},children:"弹性缩放效果，自然流畅"}),e.jsx(k,{src:"https://picsum.photos/id/200/400/300",alt:"弹性形变",loading:"lazy",containerStyle:{width:400,height:300,position:"relative"},imageStyle:{width:"100%",height:"100%",objectFit:"cover",borderRadius:"8px"}})]}),e.jsxs("div",{children:[e.jsx("h3",{style:{marginBottom:10,fontSize:16,fontWeight:600},children:"圆形到方形"}),e.jsx("p",{style:{color:"#666",marginBottom:12,fontSize:14},children:"从圆形渐变到方形，适合头像展示"}),e.jsx(B,{src:"https://picsum.photos/id/201/400/300",alt:"圆形到方形",loading:"lazy",containerStyle:{width:400,height:300,position:"relative"},imageStyle:{width:"100%",height:"100%",objectFit:"cover",borderRadius:"8px"}})]}),e.jsxs("div",{children:[e.jsx("h3",{style:{marginBottom:10,fontSize:16,fontWeight:600},children:"缩放形变（Scale）"}),e.jsx("p",{style:{color:"#666",marginBottom:12,fontSize:14},children:"从小到大的缩放效果"}),e.jsx(R,{src:"https://picsum.photos/id/202/400/300",alt:"缩放形变",loading:"lazy",containerStyle:{width:400,height:300,position:"relative"},imageStyle:{width:"100%",height:"100%",objectFit:"cover",borderRadius:"8px"}})]})]})]}),e.jsxs("section",{style:{marginBottom:60},children:[e.jsx("h2",{style:{marginBottom:20,fontSize:24,fontWeight:600,color:"#333"},children:"✨ 3D 变换效果"}),e.jsxs("div",{style:{display:"grid",gridTemplateColumns:"repeat(auto-fit, minmax(350px, 1fr))",gap:30},children:[e.jsxs("div",{children:[e.jsx("h3",{style:{marginBottom:10,fontSize:16,fontWeight:600},children:"旋转形变（Rotate）"}),e.jsx("p",{style:{color:"#666",marginBottom:12,fontSize:14},children:"旋转进入效果，动感十足"}),e.jsx($,{src:"https://picsum.photos/id/203/400/300",alt:"旋转形变",loading:"lazy",containerStyle:{width:400,height:300,position:"relative"},imageStyle:{width:"100%",height:"100%",objectFit:"cover",borderRadius:"8px"}})]}),e.jsxs("div",{children:[e.jsx("h3",{style:{marginBottom:10,fontSize:16,fontWeight:600},children:"倾斜形变（Skew）"}),e.jsx("p",{style:{color:"#666",marginBottom:12,fontSize:14},children:"倾斜角度渐变效果"}),e.jsx(W,{src:"https://picsum.photos/id/204/400/300",alt:"倾斜形变",loading:"lazy",containerStyle:{width:400,height:300,position:"relative"},imageStyle:{width:"100%",height:"100%",objectFit:"cover",borderRadius:"8px"}})]})]})]}),e.jsxs("section",{style:{marginBottom:60},children:[e.jsx("h2",{style:{marginBottom:20,fontSize:24,fontWeight:600,color:"#333"},children:"🔄 持续动画效果"}),e.jsx("div",{style:{display:"grid",gridTemplateColumns:"repeat(auto-fit, minmax(350px, 1fr))",gap:30},children:e.jsxs("div",{children:[e.jsx("h3",{style:{marginBottom:10,fontSize:16,fontWeight:600},children:"液态效果（Liquid）"}),e.jsx("p",{style:{color:"#666",marginBottom:12,fontSize:14},children:"流动的液态边框效果，持续动画"}),e.jsx(M,{src:"https://picsum.photos/id/206/400/300",alt:"液态效果",loading:"lazy",containerStyle:{width:400,height:300,position:"relative"},imageStyle:{width:"100%",height:"100%",objectFit:"cover"}})]})})]}),e.jsxs("section",{children:[e.jsx("h2",{style:{marginBottom:20,fontSize:24,fontWeight:600,color:"#333"},children:"🎯 悬停触发效果"}),e.jsxs("div",{style:{display:"grid",gridTemplateColumns:"repeat(auto-fit, minmax(350px, 1fr))",gap:30},children:[e.jsxs("div",{children:[e.jsx("h3",{style:{marginBottom:10,fontSize:16,fontWeight:600},children:"悬停圆角变化"}),e.jsx("p",{style:{color:"#666",marginBottom:12,fontSize:14},children:"鼠标悬停时从方形变为圆形"}),e.jsx(q,{src:"https://picsum.photos/id/208/400/300",alt:"悬停圆角变化",loading:"lazy",containerStyle:{width:400,height:300,position:"relative"},imageStyle:{width:"100%",height:"100%",objectFit:"cover",borderRadius:"8px"}})]}),e.jsxs("div",{children:[e.jsx("h3",{style:{marginBottom:10,fontSize:16,fontWeight:600},children:"悬停缩放"}),e.jsx("p",{style:{color:"#666",marginBottom:12,fontSize:14},children:"鼠标悬停时轻微放大"}),e.jsx(L,{src:"https://picsum.photos/id/209/400/300",alt:"悬停缩放",loading:"lazy",containerStyle:{width:400,height:300,position:"relative"},imageStyle:{width:"100%",height:"100%",objectFit:"cover",borderRadius:"8px"}})]})]})]}),e.jsxs("section",{style:{marginTop:60,padding:24,background:"#f8f9fa",borderRadius:8},children:[e.jsx("h2",{style:{marginBottom:16,fontSize:20,fontWeight:600,color:"#333"},children:"📖 使用说明"}),e.jsx("pre",{style:{background:"#fff",padding:16,borderRadius:4,overflow:"auto",fontSize:14},children:`import { withPlugins } from "vane-lazy-image/plugins";
import { createMorphPlugin } from "vane-lazy-image/custom-plugins";

const ImageWithMorph = withPlugins(LazyLoadImageCore as any, [
  createMorphPlugin({
    type: 'elastic',          // 形变类型
    duration: 1200,           // 持续时间（毫秒）
    easing: 'ease-out',       // 缓动函数
    triggerOnHover: false,    // 是否悬停触发
    continuous: false,        // 是否持续动画
    fromScale: 0.8,           // 起始缩放（scale-morph）
    toScale: 1,               // 结束缩放
    fromRotate: -180,         // 起始旋转角度（rotate-morph）
    toRotate: 0,              // 结束旋转角度
  }),
]);

// 使用组件
<ImageWithMorph
  src="your-image.jpg"
  alt="描述"
  loading="lazy"
  containerStyle={{ width: 400, height: 300 }}
/>`})]})]},r)]})};export{H as default};
