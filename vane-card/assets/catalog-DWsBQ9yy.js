import{j as n,w as o,C as r,h as s}from"./index-uKS8H-yJ.js";import{T as e,d as c,f as a,M as i,t}from"./main-BtviUN3R.js";const p={id:"vertical",title:"垂直布局",en:"vertical",use:"商品列表、搜索结果、内容卡片 —— 最通用的一种，也是默认形态。",width:280,structure:["图通栏 + 固定 4:3 裁切：不同来源的图（1:1 / 3:4 / 横图）进来都不会把卡片撑成不同高度","图本身不加圆角，圆角交给容器的 overflow: hidden —— 否则「圆角里套圆角」","价格单独一行、不折行：列表里扫视靠的就是价格永远在同一个位置"],plugins:["Badge","Hover"]},g=o(r,{plugins:[c({text:"热卖",type:"hot"}),a({enableShadow:!0,enableScale:!0})]});function u(){return n.jsxs(g,{cardId:"layout-vertical",data:e,padding:0,containerStyle:{background:"#fff",borderRadius:12,overflow:"hidden"},children:[n.jsx("img",{src:e.image,alt:"",style:{display:"block",width:"100%",aspectRatio:"4 / 3",objectFit:"cover"}}),n.jsxs("div",{style:{padding:14,display:"grid",gap:6},children:[n.jsx("div",{style:{fontSize:15,fontWeight:600,lineHeight:1.35},children:e.title}),n.jsx("div",{style:{fontSize:12,color:"#6b6b6b"},children:e.subtitle}),n.jsxs("div",{style:{display:"flex",alignItems:"baseline",gap:8,marginTop:2},children:[n.jsxs("b",{style:{fontSize:20,color:"#d0021b",fontVariantNumeric:"tabular-nums"},children:["¥",e.price]}),e.oldPrice?n.jsxs("s",{style:{fontSize:12,color:"#6b6b6b"},children:["¥",e.oldPrice]}):null]})]})]})}const f=Object.freeze(Object.defineProperty({__proto__:null,default:u,meta:p},Symbol.toStringTag,{value:"Module"})),b={id:"horizontal",title:"横向布局",en:"horizontal",use:"搜索结果、购物车、订单列表 —— 用户已知道要找什么，一屏多看几条。",width:440,structure:["图固定 112×112 且 flexShrink: 0：窄屏时先压文字，不压图","文字列必须 minWidth: 0，否则长标题撑爆容器、ellipsis 失效","价格 marginTop: auto 贴底：并排几张卡时底边才会齐"],plugins:["Hover"]},m=o(r,{plugins:[a({enableShadow:!0,shadowIntensity:"light"})]});function y(){return n.jsxs(m,{cardId:"layout-horizontal",data:i,padding:0,containerStyle:{display:"flex",alignItems:"stretch",gap:0,background:"#fff",borderRadius:12,overflow:"hidden"},children:[n.jsx("img",{src:i.image,alt:"",style:{width:112,flexShrink:0,alignSelf:"stretch",objectFit:"cover",display:"block"}}),n.jsxs("div",{style:{flex:1,minWidth:0,padding:"12px 14px",display:"flex",flexDirection:"column",gap:4},children:[n.jsx("div",{style:{fontSize:15,fontWeight:600,lineHeight:1.35,display:"-webkit-box",WebkitLineClamp:2,WebkitBoxOrient:"vertical",overflow:"hidden"},children:i.title}),n.jsx("div",{style:{fontSize:12,color:"#6b6b6b",whiteSpace:"nowrap",overflow:"hidden",textOverflow:"ellipsis"},children:i.subtitle}),n.jsxs("div",{style:{marginTop:"auto",display:"flex",alignItems:"baseline",gap:8},children:[n.jsxs("b",{style:{fontSize:18,color:"#d0021b",fontVariantNumeric:"tabular-nums"},children:["¥",i.price]}),i.oldPrice?n.jsxs("s",{style:{fontSize:12,color:"#6b6b6b"},children:["¥",i.oldPrice]}):null,n.jsxs("span",{style:{marginLeft:"auto",fontSize:11,color:"#5f6553"},children:["库存 ",i.inventory]})]})]})]})}const h=Object.freeze(Object.defineProperty({__proto__:null,default:y,meta:b},Symbol.toStringTag,{value:"Module"})),x={id:"right-image",title:"右图布局",en:"right-image",use:"长列表里穿插使用，打破「全是左图」的单调；也用于对话/时间轴这类右侧留白的结构。",width:440,structure:["row-reverse 换视觉方向，DOM 顺序不变 —— 读屏与 Tab 仍先文字后图","图宽 104（比左图版窄一点），给文字更多横向空间","文字右对齐会毁掉可读性，所以文字仍左对齐，只有图换边"],plugins:["Hover"]},v=o(r,{plugins:[a({enableShadow:!0,shadowIntensity:"light"})]});function S(){return n.jsxs(v,{cardId:"layout-right-image",data:t,padding:0,containerStyle:{display:"flex",flexDirection:"row-reverse",background:"#fff",borderRadius:12,overflow:"hidden"},children:[n.jsx("img",{src:t.image,alt:"",style:{width:104,flexShrink:0,alignSelf:"stretch",objectFit:"cover",display:"block"}}),n.jsxs("div",{style:{flex:1,minWidth:0,padding:"12px 14px",display:"flex",flexDirection:"column",gap:4},children:[n.jsx("div",{style:{fontSize:12,color:"#6b6b6b"},children:t.brand}),n.jsx("div",{style:{fontSize:15,fontWeight:600,lineHeight:1.35},children:t.title}),n.jsx("div",{style:{marginTop:"auto",fontSize:12,color:"#6b6b6b"},children:t.subtitle}),n.jsxs("div",{style:{display:"flex",alignItems:"baseline",gap:8},children:[n.jsxs("b",{style:{fontSize:18,color:"#d0021b",fontVariantNumeric:"tabular-nums"},children:["¥",t.price]}),t.oldPrice?n.jsxs("s",{style:{fontSize:12,color:"#6b6b6b"},children:["¥",t.oldPrice]}):null]})]})]})}const w=Object.freeze(Object.defineProperty({__proto__:null,default:S,meta:x},Symbol.toStringTag,{value:"Module"})),j={id:"bottom-image",title:"下图布局",en:"bottom-image",use:"文字比图重要的类目：课程、票务、服务、内容 —— 标题决定点不点，图只是佐证。",width:280,structure:["文字区在上，先给「是什么、多少钱」；图在下当佐证","图高固定（16:9）而不是按比例：否则文字行数不同，一列卡片的图起点会参差","适合配合「一行说明」使用 —— 这类卡的说服力在文字，不在图"],plugins:["Hover"]},_=o(r,{plugins:[a({enableShadow:!0})]});function C(){return n.jsxs(_,{cardId:"layout-bottom-image",data:e,padding:0,containerStyle:{background:"#fff",borderRadius:12,overflow:"hidden"},children:[n.jsxs("div",{style:{padding:"14px 14px 10px",display:"grid",gap:6},children:[n.jsx("div",{style:{fontSize:11,letterSpacing:"0.08em",color:"#5f6553"},children:e.brand}),n.jsx("div",{style:{fontSize:15,fontWeight:600,lineHeight:1.35},children:e.title}),n.jsx("div",{style:{fontSize:12,color:"#6b6b6b",lineHeight:1.5},children:e.subtitle}),n.jsxs("div",{style:{display:"flex",alignItems:"baseline",gap:8,marginTop:2},children:[n.jsxs("b",{style:{fontSize:20,color:"#d0021b",fontVariantNumeric:"tabular-nums"},children:["¥",e.price]}),n.jsx("span",{style:{fontSize:11,color:"#5f6553"},children:"起"})]})]}),n.jsx("img",{src:e.image,alt:"",style:{display:"block",width:"100%",height:110,objectFit:"cover"}})]})}const z=Object.freeze(Object.defineProperty({__proto__:null,default:C,meta:j},Symbol.toStringTag,{value:"Module"})),H=s({width:600,height:900,hue:32}),k={id:"banner",title:"Banner 横幅",en:"banner",use:"活动头图、品类入口、新人礼包 —— 版面级而非列表级，一屏最多一个。",width:580,structure:["左文右图 6:4：文字区 flex: 1 自适应，图固定 240 —— 文字变长时压文字不压图","图 height: 100% + object-fit: cover，跟着左侧内容高度走，不会比文字区矮一截","只放一个主按钮：Banner 的职责是「去不去」，不是「选哪个」"],plugins:["Hover"]},I=o(r,{plugins:[a({enableShadow:!0,shadowIntensity:"medium"})]});function T(){return n.jsxs(I,{cardId:"layout-banner",data:t,padding:0,containerStyle:{display:"flex",background:"linear-gradient(100deg, #f4f3ec 0%, #eceae0 58%, #e6e4d8 100%)",borderRadius:14,overflow:"hidden"},children:[n.jsxs("div",{style:{flex:1,minWidth:0,padding:"26px 24px",display:"grid",alignContent:"center",gap:10},children:[n.jsx("span",{style:{justifySelf:"start",fontSize:10,letterSpacing:"0.18em",textTransform:"uppercase",color:"#565c48",border:"1px solid rgba(124, 131, 104, 0.4)",borderRadius:999,padding:"3px 10px"},children:"夏季出行季"}),n.jsxs("div",{style:{fontSize:26,fontWeight:700,lineHeight:1.2,letterSpacing:"-0.01em"},children:["轻装出发",n.jsx("span",{style:{color:"#565c48"},children:" · 满 399 减 60"})]}),n.jsx("div",{style:{fontSize:13,color:"#545a48",lineHeight:1.6},children:"1.9kg 铝合金折叠椅，收起来 38cm。活动到 8 月 31 日。"}),n.jsxs("div",{style:{display:"flex",gap:10,marginTop:6},children:[n.jsx("button",{type:"button",style:{padding:"9px 18px",borderRadius:8,border:"1px solid #2a2f22",background:"#2a2f22",color:"#f4f3ec",fontSize:13,cursor:"pointer"},children:"立即抢购"}),n.jsx("button",{type:"button",style:{padding:"9px 18px",borderRadius:8,border:"1px solid rgba(42, 47, 34, 0.25)",background:"transparent",color:"#2a2f22",fontSize:13,cursor:"pointer"},children:"查看会场"})]})]}),n.jsx("div",{style:{width:240,flexShrink:0},children:n.jsx("img",{src:H,alt:"",style:{display:"block",width:"100%",height:"100%",objectFit:"cover"}})})]})}const P=Object.freeze(Object.defineProperty({__proto__:null,default:T,meta:k},Symbol.toStringTag,{value:"Module"})),E={id:"grid-compact",title:"网格紧凑",en:"grid",use:"首页猜你喜欢、活动会场、比价列表 —— 一屏尽量多，单条只留决策必需信息。",width:170,structure:["字号整体降一级（标题 12.5、价格 14）：170 宽的卡里 15px 标题会压过图","标题固定 2 行高度（2.8em），行数不固定会让整个网格参差","图 1:1 通栏；只有三个字段，多一个就换行破坏对齐"],plugins:["Hover"]},R=o(r,{plugins:[a({enableShadow:!0,shadowIntensity:"light"})]});function M(){return n.jsxs(R,{cardId:"layout-grid",data:i,padding:0,containerStyle:{background:"#fff",borderRadius:10,overflow:"hidden"},children:[n.jsx("img",{src:i.image,alt:"",style:{display:"block",width:"100%",aspectRatio:"1 / 1",objectFit:"cover"}}),n.jsxs("div",{style:{padding:"8px 8px 10px",display:"grid",gap:4},children:[n.jsx("div",{style:{fontSize:12.5,fontWeight:600,lineHeight:1.4,height:"2.8em",display:"-webkit-box",WebkitLineClamp:2,WebkitBoxOrient:"vertical",overflow:"hidden"},children:i.title}),n.jsxs("div",{style:{display:"flex",alignItems:"baseline",gap:5},children:[n.jsxs("b",{style:{fontSize:14,color:"#d0021b",fontVariantNumeric:"tabular-nums"},children:["¥",i.price]}),n.jsxs("span",{style:{fontSize:10.5,color:"#6b6b6b"},children:[i.ratingCount," 人买过"]})]})]})]})}const L=Object.freeze(Object.defineProperty({__proto__:null,default:M,meta:E},Symbol.toStringTag,{value:"Module"})),O={id:"minimal",title:"极简布局",en:"minimal",use:"品牌向页面、高客单商品、内容专栏 —— 图抢戏时用它，把注意力全给文字。",width:260,structure:["零插件：连 Image 都不装，版式完全由 children 决定","字号层级拉开到 10 / 19 / 22 三档，靠对比而不是靠装饰分区","有一条结构线（顶部分隔）撑住「少」：否则看起来像内容没加载出来"],plugins:[]};function W(){return n.jsx(r,{cardId:"layout-minimal",data:e,padding:0,containerStyle:{background:"#fff",borderRadius:12,overflow:"hidden"},children:n.jsxs("div",{style:{padding:"22px 24px 24px",display:"grid",gap:14},children:[n.jsxs("div",{style:{display:"flex",alignItems:"center",gap:10,paddingBottom:12,borderBottom:"1px solid #eee",fontSize:10,letterSpacing:"0.2em",textTransform:"uppercase",color:"#5f6553"},children:[n.jsx("span",{children:e.brand}),n.jsx("span",{style:{marginLeft:"auto"},children:e.skuCode})]}),n.jsx("div",{style:{fontSize:19,fontWeight:600,lineHeight:1.35,letterSpacing:"-0.01em"},children:e.title}),n.jsx("div",{style:{fontSize:12,color:"#6b6b6b",lineHeight:1.7},children:e.description}),n.jsxs("div",{style:{display:"flex",alignItems:"baseline",gap:8},children:[n.jsxs("b",{style:{fontSize:22,color:"#1c1f18",fontVariantNumeric:"tabular-nums"},children:["¥",e.price]}),n.jsx("span",{style:{fontSize:11,color:"#5f6553"},children:"含税 · 免运费"})]})]})})}const B=Object.freeze(Object.defineProperty({__proto__:null,default:W,meta:O},Symbol.toStringTag,{value:"Module"})),A=s({width:1e3,height:640,hue:96}),G={id:"background",title:"背景图布局",en:"background",use:"活动海报、品牌大片、专题封面 —— 图就是内容，文字压在上面。",width:420,structure:["遮罩用斜向渐变而不是整张压黑：只压文字所在的左下角，图的主体保留","高度用 minHeight 而不是固定高：文案长度变化时不裁字","白字必须配一层遮罩才有保障 —— 依赖「这张图够暗」是运气，不是设计"],plugins:["Hover"],tone:"dark"},V=o(r,{plugins:[a({enableShadow:!0,shadowIntensity:"medium"})]});function U(){return n.jsxs(V,{cardId:"layout-background",data:t,padding:0,containerStyle:{position:"relative",minHeight:240,borderRadius:14,overflow:"hidden",display:"flex",alignItems:"flex-end",backgroundImage:`url("${A}")`,backgroundSize:"cover",backgroundPosition:"center"},children:[n.jsx("div",{"aria-hidden":!0,style:{position:"absolute",inset:0,background:"linear-gradient(28deg, rgba(12, 16, 10, 0.86) 0%, rgba(12, 16, 10, 0.55) 42%, rgba(12, 16, 10, 0.06) 78%)",pointerEvents:"none"}}),n.jsxs("div",{style:{position:"relative",padding:"22px 24px",display:"grid",gap:8},children:[n.jsx("span",{style:{fontSize:10,letterSpacing:"0.18em",textTransform:"uppercase",color:"rgba(255, 255, 255, 0.72)"},children:t.brand}),n.jsx("div",{style:{fontSize:24,fontWeight:700,color:"#fff",lineHeight:1.25},children:t.title}),n.jsx("div",{style:{fontSize:12.5,color:"rgba(255, 255, 255, 0.78)",lineHeight:1.6},children:t.subtitle}),n.jsxs("div",{style:{display:"flex",alignItems:"center",gap:12,marginTop:6},children:[n.jsxs("b",{style:{fontSize:20,color:"#fff",fontVariantNumeric:"tabular-nums"},children:["¥",t.price]}),n.jsx("button",{type:"button",style:{padding:"7px 16px",borderRadius:999,border:"1px solid rgba(255, 255, 255, 0.55)",background:"rgba(255, 255, 255, 0.12)",color:"#fff",fontSize:12.5,cursor:"pointer",backdropFilter:"blur(6px)"},children:"查看详情"})]})]})]})}const $=Object.freeze(Object.defineProperty({__proto__:null,default:U,meta:G},Symbol.toStringTag,{value:"Module"})),F={id:"two-column",title:"双列对称",en:"two-column",use:"主图 + 细节图、现款 + 新款、商品 + 赠品、机型对比 —— 一张卡讲两件事。",width:520,structure:["grid 1fr 1fr，中间 1px 分隔线：让「两个区」这件事在结构上成立，不靠留白暗示","左列图 1:1 通栏裁切，右列按信息块排 —— 对称的是面积，不是内容","窄屏（<420）时用 media query 退化为上下堆叠，别硬撑两列"],plugins:["Hover"]},N=o(r,{plugins:[a({enableShadow:!0,shadowIntensity:"light"})]});function D(){var l;return n.jsxs(N,{cardId:"layout-two-column",data:e,padding:0,containerStyle:{display:"grid",gridTemplateColumns:"1fr 1fr",background:"#fff",borderRadius:12,overflow:"hidden"},children:[n.jsx("img",{src:e.image,alt:"",style:{display:"block",width:"100%",height:"100%",aspectRatio:"1 / 1",objectFit:"cover"}}),n.jsxs("div",{style:{borderLeft:"1px solid #eee",padding:"16px 18px",display:"flex",flexDirection:"column",gap:6},children:[n.jsx("div",{style:{fontSize:11,letterSpacing:"0.08em",color:"#5f6553"},children:e.brand}),n.jsx("div",{style:{fontSize:16,fontWeight:600,lineHeight:1.35},children:e.title}),n.jsx("div",{style:{fontSize:12,color:"#6b6b6b",lineHeight:1.6},children:e.subtitle}),n.jsx("div",{style:{display:"flex",gap:6,flexWrap:"wrap",marginTop:2},children:(l=e.tags)==null?void 0:l.slice(0,3).map(d=>n.jsx("span",{style:{fontSize:10.5,color:"#545a48",border:"1px solid #e4e6dd",borderRadius:999,padding:"2px 8px"},children:d},d))}),n.jsxs("div",{style:{marginTop:"auto",display:"flex",alignItems:"baseline",gap:8},children:[n.jsxs("b",{style:{fontSize:20,color:"#d0021b",fontVariantNumeric:"tabular-nums"},children:["¥",e.price]}),e.oldPrice?n.jsxs("s",{style:{fontSize:12,color:"#6b6b6b"},children:["¥",e.oldPrice]}):null]}),n.jsx("button",{type:"button",style:{marginTop:4,padding:"8px 0",borderRadius:8,border:"1px solid #2a2f22",background:"#2a2f22",color:"#f4f3ec",fontSize:13,cursor:"pointer"},children:"加入购物袋"})]})]})}const K=Object.freeze(Object.defineProperty({__proto__:null,default:D,meta:F},Symbol.toStringTag,{value:"Module"})),q=`/**
 * 01 · 垂直布局
 *
 * 图在上、文在下的默认形态。它之所以是默认，是因为「图先说话」：
 * 用户扫列表时先看图能不能勾住注意力，再看标题，最后看价格。
 *
 * 这一页刻意不用 ImagePlugin 而手写 <img>：版式要控制精确比例（4:3 裁切），
 * 而插件只负责「读哪张图」，不负责「图占多大」。
 */
import React from "react";
import { CardCore, withPlugins } from "vane-card";
import { createBadgePlugin, createHoverPlugin } from "vane-card/custom-plugins";
import { TEE } from "../data/seed";
import type { LayoutMeta } from "./types";

export const meta: LayoutMeta = {
  id: "vertical",
  title: "垂直布局",
  en: "vertical",
  use: "商品列表、搜索结果、内容卡片 —— 最通用的一种，也是默认形态。",
  width: 280,
  structure: [
    "图通栏 + 固定 4:3 裁切：不同来源的图（1:1 / 3:4 / 横图）进来都不会把卡片撑成不同高度",
    "图本身不加圆角，圆角交给容器的 overflow: hidden —— 否则「圆角里套圆角」",
    "价格单独一行、不折行：列表里扫视靠的就是价格永远在同一个位置",
  ],
  plugins: ["Badge", "Hover"],
};

const Card = withPlugins(CardCore, {
  plugins: [
    createBadgePlugin({ text: "热卖", type: "hot" }),
    createHoverPlugin({ enableShadow: true, enableScale: true }),
  ],
});

export default function VerticalLayout() {
  return (
    <Card
      cardId="layout-vertical"
      data={TEE}
      padding={0}
      containerStyle={{ background: "#fff", borderRadius: 12, overflow: "hidden" }}
    >
      <img
        src={TEE.image}
        alt=""
        style={{ display: "block", width: "100%", aspectRatio: "4 / 3", objectFit: "cover" }}
      />
      <div style={{ padding: 14, display: "grid", gap: 6 }}>
        <div style={{ fontSize: 15, fontWeight: 600, lineHeight: 1.35 }}>{TEE.title}</div>
        <div style={{ fontSize: 12, color: "#6b6b6b" }}>{TEE.subtitle}</div>
        <div style={{ display: "flex", alignItems: "baseline", gap: 8, marginTop: 2 }}>
          <b style={{ fontSize: 20, color: "#d0021b", fontVariantNumeric: "tabular-nums" }}>
            ¥{TEE.price}
          </b>
          {TEE.oldPrice ? (
            <s style={{ fontSize: 12, color: "#6b6b6b" }}>¥{TEE.oldPrice}</s>
          ) : null}
        </div>
      </div>
    </Card>
  );
}
`,Y=`/**
 * 02 · 横向布局（图在左）
 *
 * 搜索结果、购物车、订单列表的形态。一屏能放下的条数比垂直布局多一倍，
 * 代价是图变小 —— 所以它适合「用户已经知道要找什么」的场景。
 *
 * 三个必须写对的细节：
 *   1. 图 flexShrink: 0 —— 否则窄屏时图先被压扁
 *   2. 文字列 minWidth: 0 —— 没有它，长标题会把整行撑爆，ellipsis 不生效
 *   3. 价格 marginTop: auto —— 贴底，让一列卡片的底边齐平
 */
import React from "react";
import { CardCore, withPlugins } from "vane-card";
import { createHoverPlugin } from "vane-card/custom-plugins";
import { MUG } from "../data/seed";
import type { LayoutMeta } from "./types";

export const meta: LayoutMeta = {
  id: "horizontal",
  title: "横向布局",
  en: "horizontal",
  use: "搜索结果、购物车、订单列表 —— 用户已知道要找什么，一屏多看几条。",
  width: 440,
  structure: [
    "图固定 112×112 且 flexShrink: 0：窄屏时先压文字，不压图",
    "文字列必须 minWidth: 0，否则长标题撑爆容器、ellipsis 失效",
    "价格 marginTop: auto 贴底：并排几张卡时底边才会齐",
  ],
  plugins: ["Hover"],
};

const Card = withPlugins(CardCore, {
  plugins: [createHoverPlugin({ enableShadow: true, shadowIntensity: "light" })],
});

export default function HorizontalLayout() {
  return (
    <Card
      cardId="layout-horizontal"
      data={MUG}
      padding={0}
      containerStyle={{
        display: "flex",
        alignItems: "stretch",
        gap: 0,
        background: "#fff",
        borderRadius: 12,
        overflow: "hidden",
      }}
    >
      <img
        src={MUG.image}
        alt=""
        style={{
          width: 112,
          flexShrink: 0,
          // 不用固定 height：文字区行数变了卡片就变高，固定高会在底部留一条白边。
          // alignSelf: stretch 让图跟着卡片长，object-fit 负责裁切。
          alignSelf: "stretch",
          objectFit: "cover",
          display: "block",
        }}
      />
      <div
        style={{
          flex: 1,
          minWidth: 0,
          padding: "12px 14px",
          display: "flex",
          flexDirection: "column",
          gap: 4,
        }}
      >
        <div
          style={{
            fontSize: 15,
            fontWeight: 600,
            lineHeight: 1.35,
            display: "-webkit-box",
            WebkitLineClamp: 2,
            WebkitBoxOrient: "vertical",
            overflow: "hidden",
          }}
        >
          {MUG.title}
        </div>
        <div
          style={{
            fontSize: 12,
            color: "#6b6b6b",
            whiteSpace: "nowrap",
            overflow: "hidden",
            textOverflow: "ellipsis",
          }}
        >
          {MUG.subtitle}
        </div>
        <div
          style={{
            marginTop: "auto",
            display: "flex",
            alignItems: "baseline",
            gap: 8,
          }}
        >
          <b style={{ fontSize: 18, color: "#d0021b", fontVariantNumeric: "tabular-nums" }}>
            ¥{MUG.price}
          </b>
          {MUG.oldPrice ? <s style={{ fontSize: 12, color: "#6b6b6b" }}>¥{MUG.oldPrice}</s> : null}
          <span style={{ marginLeft: "auto", fontSize: 11, color: "#5f6553" }}>
            库存 {MUG.inventory}
          </span>
        </div>
      </div>
    </Card>
  );
}
`,J=`/**
 * 03 · 右图布局（图在右）
 *
 * 和横向布局共用一套结构，只是把方向反过来。存在的理由不是「对称好看」，
 * 而是**列表节奏**：一长串卡片全是左图会很单调，穿插右图能让眼睛重新定位。
 *
 * 实现上用 \`flexDirection: "row-reverse"\` 而不是调换 DOM 顺序 ——
 * 屏幕阅读器与 Tab 顺序仍然先读文字后读图，视觉和语义不必绑在一起。
 */
import React from "react";
import { CardCore, withPlugins } from "vane-card";
import { createHoverPlugin } from "vane-card/custom-plugins";
import { CHAIR } from "../data/seed";
import type { LayoutMeta } from "./types";

export const meta: LayoutMeta = {
  id: "right-image",
  title: "右图布局",
  en: "right-image",
  use: "长列表里穿插使用，打破「全是左图」的单调；也用于对话/时间轴这类右侧留白的结构。",
  width: 440,
  structure: [
    "row-reverse 换视觉方向，DOM 顺序不变 —— 读屏与 Tab 仍先文字后图",
    "图宽 104（比左图版窄一点），给文字更多横向空间",
    "文字右对齐会毁掉可读性，所以文字仍左对齐，只有图换边",
  ],
  plugins: ["Hover"],
};

const Card = withPlugins(CardCore, {
  plugins: [createHoverPlugin({ enableShadow: true, shadowIntensity: "light" })],
});

export default function RightImageLayout() {
  return (
    <Card
      cardId="layout-right-image"
      data={CHAIR}
      padding={0}
      containerStyle={{
        display: "flex",
        flexDirection: "row-reverse",
        background: "#fff",
        borderRadius: 12,
        overflow: "hidden",
      }}
    >
      <img
        src={CHAIR.image}
        alt=""
        style={{
          width: 104,
          flexShrink: 0,
          alignSelf: "stretch",
          objectFit: "cover",
          display: "block",
        }}
      />
      <div
        style={{
          flex: 1,
          minWidth: 0,
          padding: "12px 14px",
          display: "flex",
          flexDirection: "column",
          gap: 4,
        }}
      >
        <div style={{ fontSize: 12, color: "#6b6b6b" }}>{CHAIR.brand}</div>
        <div style={{ fontSize: 15, fontWeight: 600, lineHeight: 1.35 }}>{CHAIR.title}</div>
        <div
          style={{
            marginTop: "auto",
            fontSize: 12,
            color: "#6b6b6b",
          }}
        >
          {CHAIR.subtitle}
        </div>
        <div style={{ display: "flex", alignItems: "baseline", gap: 8 }}>
          <b style={{ fontSize: 18, color: "#d0021b", fontVariantNumeric: "tabular-nums" }}>
            ¥{CHAIR.price}
          </b>
          {CHAIR.oldPrice ? <s style={{ fontSize: 12, color: "#6b6b6b" }}>¥{CHAIR.oldPrice}</s> : null}
        </div>
      </div>
    </Card>
  );
}
`,Q=`/**
 * 04 · 下图布局（图在下）
 *
 * 少数派但有用：当**文字比图更重要**时（内容型商品、课程、票务、服务类），
 * 把标题和价格放上面，图变成佐证而不是主角。
 *
 * 注意：这类卡片放在列表里时，图的高度必须固定，否则「文字行数不同」
 * 会让每张卡的图起点不在同一水平线上，整片列表看着参差。
 */
import React from "react";
import { CardCore, withPlugins } from "vane-card";
import { createHoverPlugin } from "vane-card/custom-plugins";
import { TEE } from "../data/seed";
import type { LayoutMeta } from "./types";

export const meta: LayoutMeta = {
  id: "bottom-image",
  title: "下图布局",
  en: "bottom-image",
  use: "文字比图重要的类目：课程、票务、服务、内容 —— 标题决定点不点，图只是佐证。",
  width: 280,
  structure: [
    "文字区在上，先给「是什么、多少钱」；图在下当佐证",
    "图高固定（16:9）而不是按比例：否则文字行数不同，一列卡片的图起点会参差",
    "适合配合「一行说明」使用 —— 这类卡的说服力在文字，不在图",
  ],
  plugins: ["Hover"],
};

const Card = withPlugins(CardCore, {
  plugins: [createHoverPlugin({ enableShadow: true })],
});

export default function BottomImageLayout() {
  return (
    <Card
      cardId="layout-bottom-image"
      data={TEE}
      padding={0}
      containerStyle={{ background: "#fff", borderRadius: 12, overflow: "hidden" }}
    >
      <div style={{ padding: "14px 14px 10px", display: "grid", gap: 6 }}>
        <div style={{ fontSize: 11, letterSpacing: "0.08em", color: "#5f6553" }}>
          {TEE.brand}
        </div>
        <div style={{ fontSize: 15, fontWeight: 600, lineHeight: 1.35 }}>{TEE.title}</div>
        <div style={{ fontSize: 12, color: "#6b6b6b", lineHeight: 1.5 }}>{TEE.subtitle}</div>
        <div style={{ display: "flex", alignItems: "baseline", gap: 8, marginTop: 2 }}>
          <b style={{ fontSize: 20, color: "#d0021b", fontVariantNumeric: "tabular-nums" }}>
            ¥{TEE.price}
          </b>
          <span style={{ fontSize: 11, color: "#5f6553" }}>起</span>
        </div>
      </div>
      <img
        src={TEE.image}
        alt=""
        style={{
          display: "block",
          width: "100%",
          height: 110,
          objectFit: "cover",
        }}
      />
    </Card>
  );
}
`,X=`/**
 * 05 · Banner 横幅
 *
 * 不是「列表卡」，是**页面里的一块版面**：活动头图、品类入口、新人礼包。
 * 所以它的宽度、字号、留白都比卡片大一号，左右分栏也是一半对一半。
 *
 * 关键判断：Banner 里**不要试图塞完整商品信息**。它只回答「这是什么活动、
 * 现在去不去」，具体参数留给点进去之后的页面。
 */
import React from "react";
import { CardCore, withPlugins } from "vane-card";
import { createHoverPlugin } from "vane-card/custom-plugins";
import { svgPlate } from "../data/images";
import { CHAIR } from "../data/seed";
import type { LayoutMeta } from "./types";

/** 侧图用无字装饰图：竖版商品图在 240 宽的列里会被 cover 裁掉一半标签 */
const HERO = svgPlate({ width: 600, height: 900, hue: 32 });

export const meta: LayoutMeta = {
  id: "banner",
  title: "Banner 横幅",
  en: "banner",
  use: "活动头图、品类入口、新人礼包 —— 版面级而非列表级，一屏最多一个。",
  // 580 而不是 620：舞台这一列的实际可用宽是 610，620 会溢出 10px。
  // 版式的宽度值不是装饰，超一像素就会被体检脚本抓住。
  width: 580,
  structure: [
    "左文右图 6:4：文字区 flex: 1 自适应，图固定 240 —— 文字变长时压文字不压图",
    "图 height: 100% + object-fit: cover，跟着左侧内容高度走，不会比文字区矮一截",
    "只放一个主按钮：Banner 的职责是「去不去」，不是「选哪个」",
  ],
  plugins: ["Hover"],
};

const Card = withPlugins(CardCore, {
  plugins: [createHoverPlugin({ enableShadow: true, shadowIntensity: "medium" })],
});

export default function BannerLayout() {
  return (
    <Card
      cardId="layout-banner"
      data={CHAIR}
      padding={0}
      containerStyle={{
        display: "flex",
        background: "linear-gradient(100deg, #f4f3ec 0%, #eceae0 58%, #e6e4d8 100%)",
        borderRadius: 14,
        overflow: "hidden",
      }}
    >
      <div
        style={{
          flex: 1,
          minWidth: 0,
          padding: "26px 24px",
          display: "grid",
          alignContent: "center",
          gap: 10,
        }}
      >
        <span
          style={{
            justifySelf: "start",
            fontSize: 10,
            letterSpacing: "0.18em",
            textTransform: "uppercase",
            color: "#565c48",
            border: "1px solid rgba(124, 131, 104, 0.4)",
            borderRadius: 999,
            padding: "3px 10px",
          }}
        >
          夏季出行季
        </span>
        <div style={{ fontSize: 26, fontWeight: 700, lineHeight: 1.2, letterSpacing: "-0.01em" }}>
          轻装出发
          <span style={{ color: "#565c48" }}> · 满 399 减 60</span>
        </div>
        <div style={{ fontSize: 13, color: "#545a48", lineHeight: 1.6 }}>
          1.9kg 铝合金折叠椅，收起来 38cm。活动到 8 月 31 日。
        </div>
        <div style={{ display: "flex", gap: 10, marginTop: 6 }}>
          <button
            type="button"
            style={{
              padding: "9px 18px",
              borderRadius: 8,
              border: "1px solid #2a2f22",
              background: "#2a2f22",
              color: "#f4f3ec",
              fontSize: 13,
              cursor: "pointer",
            }}
          >
            立即抢购
          </button>
          <button
            type="button"
            style={{
              padding: "9px 18px",
              borderRadius: 8,
              border: "1px solid rgba(42, 47, 34, 0.25)",
              background: "transparent",
              color: "#2a2f22",
              fontSize: 13,
              cursor: "pointer",
            }}
          >
            查看会场
          </button>
        </div>
      </div>

      <div style={{ width: 240, flexShrink: 0 }}>
        <img
          src={HERO}
          alt=""
          style={{ display: "block", width: "100%", height: "100%", objectFit: "cover" }}
        />
      </div>
    </Card>
  );
}
`,Z=`/**
 * 06 · 网格紧凑
 *
 * 同一屏塞更多条。代价是「每条的信息量必须砍到骨头」：图 + 两行标题 + 价格，
 * 再多一个字段就会换行、破坏网格对齐。
 *
 * 这类卡常见错误是字号还按普通卡来（15/20），结果 170 宽的卡里字比图还重。
 * 紧凑网格的字号要整体降一级，价格也不能用 20px。
 *
 * 图这里手写 <img> 而不是装 ImagePlugin：插件挂在 children **之后**渲染，
 * 会把图放到标题下面；版式要的是「图在上」，所以结构得自己写。
 */
import React from "react";
import { CardCore, withPlugins } from "vane-card";
import { createHoverPlugin } from "vane-card/custom-plugins";
import { MUG } from "../data/seed";
import type { LayoutMeta } from "./types";

export const meta: LayoutMeta = {
  id: "grid-compact",
  title: "网格紧凑",
  en: "grid",
  use: "首页猜你喜欢、活动会场、比价列表 —— 一屏尽量多，单条只留决策必需信息。",
  width: 170,
  structure: [
    "字号整体降一级（标题 12.5、价格 14）：170 宽的卡里 15px 标题会压过图",
    "标题固定 2 行高度（2.8em），行数不固定会让整个网格参差",
    "图 1:1 通栏；只有三个字段，多一个就换行破坏对齐",
  ],
  plugins: ["Hover"],
};

const Card = withPlugins(CardCore, {
  plugins: [createHoverPlugin({ enableShadow: true, shadowIntensity: "light" })],
});

export default function GridLayout() {
  return (
    <Card
      cardId="layout-grid"
      data={MUG}
      padding={0}
      containerStyle={{ background: "#fff", borderRadius: 10, overflow: "hidden" }}
    >
      <img
        src={MUG.image}
        alt=""
        style={{ display: "block", width: "100%", aspectRatio: "1 / 1", objectFit: "cover" }}
      />
      <div style={{ padding: "8px 8px 10px", display: "grid", gap: 4 }}>
        <div
          style={{
            fontSize: 12.5,
            fontWeight: 600,
            lineHeight: 1.4,
            height: "2.8em",
            display: "-webkit-box",
            WebkitLineClamp: 2,
            WebkitBoxOrient: "vertical",
            overflow: "hidden",
          }}
        >
          {MUG.title}
        </div>
        <div style={{ display: "flex", alignItems: "baseline", gap: 5 }}>
          <b style={{ fontSize: 14, color: "#d0021b", fontVariantNumeric: "tabular-nums" }}>
            ¥{MUG.price}
          </b>
          <span style={{ fontSize: 10.5, color: "#6b6b6b" }}>{MUG.ratingCount} 人买过</span>
        </div>
      </div>
    </Card>
  );
}
`,nn=`/**
 * 07 · 极简布局
 *
 * 一个插件都不装，连图都不要。它证明一件事：**版式是 children 的事**。
 *
 * 极简不等于「少放点东西」，而是靠三件事撑住：
 *   1. 字号层级拉开（10 / 19 / 22），读者一眼知道先看哪
 *   2. 留白给足（24px 起），窄卡里宁可少一行字
 *   3. 有一条稳定的结构线（这里的顶部分隔线），让「少」看起来是设计而不是缺失
 */
import React from "react";
import { CardCore } from "vane-card";
import { TEE } from "../data/seed";
import type { LayoutMeta } from "./types";

export const meta: LayoutMeta = {
  id: "minimal",
  title: "极简布局",
  en: "minimal",
  use: "品牌向页面、高客单商品、内容专栏 —— 图抢戏时用它，把注意力全给文字。",
  width: 260,
  structure: [
    "零插件：连 Image 都不装，版式完全由 children 决定",
    "字号层级拉开到 10 / 19 / 22 三档，靠对比而不是靠装饰分区",
    "有一条结构线（顶部分隔）撑住「少」：否则看起来像内容没加载出来",
  ],
  plugins: [],
};

export default function MinimalLayout() {
  return (
    <CardCore
      cardId="layout-minimal"
      data={TEE}
      padding={0}
      containerStyle={{ background: "#fff", borderRadius: 12, overflow: "hidden" }}
    >
      <div style={{ padding: "22px 24px 24px", display: "grid", gap: 14 }}>
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: 10,
            paddingBottom: 12,
            borderBottom: "1px solid #eee",
            fontSize: 10,
            letterSpacing: "0.2em",
            textTransform: "uppercase",
            color: "#5f6553",
          }}
        >
          <span>{TEE.brand}</span>
          <span style={{ marginLeft: "auto" }}>{TEE.skuCode}</span>
        </div>

        <div style={{ fontSize: 19, fontWeight: 600, lineHeight: 1.35, letterSpacing: "-0.01em" }}>
          {TEE.title}
        </div>

        <div style={{ fontSize: 12, color: "#6b6b6b", lineHeight: 1.7 }}>{TEE.description}</div>

        <div style={{ display: "flex", alignItems: "baseline", gap: 8 }}>
          <b style={{ fontSize: 22, color: "#1c1f18", fontVariantNumeric: "tabular-nums" }}>
            ¥{TEE.price}
          </b>
          <span style={{ fontSize: 11, color: "#5f6553" }}>含税 · 免运费</span>
        </div>
      </div>
    </CardCore>
  );
}
`,en=`/**
 * 08 · 背景图布局
 *
 * 图当背景、字压在图上。只有一个硬要求：**文字必须可读**。
 * 压在亮图上的白字、压在暗图上的黑字，都是靠运气 —— 所以要一层遮罩。
 *
 * 这里用「左下角更暗」的斜向渐变，而不是整张压黑：
 * 整张压黑会让图失去意义，斜向渐变只压文字所在的那一半，图的主体还看得见。
 */
import React from "react";
import { CardCore, withPlugins } from "vane-card";
import { createHoverPlugin } from "vane-card/custom-plugins";
import { svgPlate } from "../data/images";
import { CHAIR } from "../data/seed";
import type { LayoutMeta } from "./types";

/** 背景图不能用带标签的图：中心的大字会和压在上面的文案叠成一团 */
const BACKDROP = svgPlate({ width: 1000, height: 640, hue: 96 });

export const meta: LayoutMeta = {
  id: "background",
  title: "背景图布局",
  en: "background",
  use: "活动海报、品牌大片、专题封面 —— 图就是内容，文字压在上面。",
  width: 420,
  structure: [
    "遮罩用斜向渐变而不是整张压黑：只压文字所在的左下角，图的主体保留",
    "高度用 minHeight 而不是固定高：文案长度变化时不裁字",
    "白字必须配一层遮罩才有保障 —— 依赖「这张图够暗」是运气，不是设计",
  ],
  plugins: ["Hover"],
  tone: "dark",
};

const Card = withPlugins(CardCore, {
  plugins: [createHoverPlugin({ enableShadow: true, shadowIntensity: "medium" })],
});

export default function BackgroundImageLayout() {
  return (
    <Card
      cardId="layout-background"
      data={CHAIR}
      padding={0}
      containerStyle={{
        position: "relative",
        minHeight: 240,
        borderRadius: 14,
        overflow: "hidden",
        display: "flex",
        alignItems: "flex-end",
        backgroundImage: \`url("\${BACKDROP}")\`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {/* 遮罩：单独一层，方便以后换成「按需压暗」的变量 */}
      <div
        aria-hidden
        style={{
          position: "absolute",
          inset: 0,
          background:
            "linear-gradient(28deg, rgba(12, 16, 10, 0.86) 0%, rgba(12, 16, 10, 0.55) 42%, rgba(12, 16, 10, 0.06) 78%)",
          pointerEvents: "none",
        }}
      />

      <div style={{ position: "relative", padding: "22px 24px", display: "grid", gap: 8 }}>
        <span
          style={{
            fontSize: 10,
            letterSpacing: "0.18em",
            textTransform: "uppercase",
            color: "rgba(255, 255, 255, 0.72)",
          }}
        >
          {CHAIR.brand}
        </span>
        <div style={{ fontSize: 24, fontWeight: 700, color: "#fff", lineHeight: 1.25 }}>
          {CHAIR.title}
        </div>
        <div style={{ fontSize: 12.5, color: "rgba(255, 255, 255, 0.78)", lineHeight: 1.6 }}>
          {CHAIR.subtitle}
        </div>
        <div style={{ display: "flex", alignItems: "center", gap: 12, marginTop: 6 }}>
          <b style={{ fontSize: 20, color: "#fff", fontVariantNumeric: "tabular-nums" }}>
            ¥{CHAIR.price}
          </b>
          <button
            type="button"
            style={{
              padding: "7px 16px",
              borderRadius: 999,
              border: "1px solid rgba(255, 255, 255, 0.55)",
              background: "rgba(255, 255, 255, 0.12)",
              color: "#fff",
              fontSize: 12.5,
              cursor: "pointer",
              backdropFilter: "blur(6px)",
            }}
          >
            查看详情
          </button>
        </div>
      </div>
    </Card>
  );
}
`,tn=`/**
 * 09 · 双列对称
 *
 * 左右各一半，用在中屏（≥480）上「一张卡讲两件事」：
 * 主图 + 细节图、现款 + 新款、商品 + 赠品、机型对比。
 *
 * 对称不等于两列一样重：左边永远是视觉主体（图），右边承载决策信息。
 * 所以左边用 1:1 通栏裁切，右边按信息块排，中间一条 1px 分隔线——
 * 这条线不是装饰，它让人一眼看出「这是两个区」。
 */
import React from "react";
import { CardCore, withPlugins } from "vane-card";
import { createHoverPlugin } from "vane-card/custom-plugins";
import { TEE } from "../data/seed";
import type { LayoutMeta } from "./types";

export const meta: LayoutMeta = {
  id: "two-column",
  title: "双列对称",
  en: "two-column",
  use: "主图 + 细节图、现款 + 新款、商品 + 赠品、机型对比 —— 一张卡讲两件事。",
  width: 520,
  structure: [
    "grid 1fr 1fr，中间 1px 分隔线：让「两个区」这件事在结构上成立，不靠留白暗示",
    "左列图 1:1 通栏裁切，右列按信息块排 —— 对称的是面积，不是内容",
    "窄屏（<420）时用 media query 退化为上下堆叠，别硬撑两列",
  ],
  plugins: ["Hover"],
};

const Card = withPlugins(CardCore, {
  plugins: [createHoverPlugin({ enableShadow: true, shadowIntensity: "light" })],
});

export default function TwoColumnLayout() {
  return (
    <Card
      cardId="layout-two-column"
      data={TEE}
      padding={0}
      containerStyle={{
        display: "grid",
        gridTemplateColumns: "1fr 1fr",
        background: "#fff",
        borderRadius: 12,
        overflow: "hidden",
      }}
    >
      <img
        src={TEE.image}
        alt=""
        style={{ display: "block", width: "100%", height: "100%", aspectRatio: "1 / 1", objectFit: "cover" }}
      />

      <div
        style={{
          borderLeft: "1px solid #eee",
          padding: "16px 18px",
          display: "flex",
          flexDirection: "column",
          gap: 6,
        }}
      >
        <div style={{ fontSize: 11, letterSpacing: "0.08em", color: "#5f6553" }}>{TEE.brand}</div>
        <div style={{ fontSize: 16, fontWeight: 600, lineHeight: 1.35 }}>{TEE.title}</div>
        <div style={{ fontSize: 12, color: "#6b6b6b", lineHeight: 1.6 }}>{TEE.subtitle}</div>

        <div style={{ display: "flex", gap: 6, flexWrap: "wrap", marginTop: 2 }}>
          {TEE.tags?.slice(0, 3).map((t) => (
            <span
              key={t}
              style={{
                fontSize: 10.5,
                color: "#545a48",
                border: "1px solid #e4e6dd",
                borderRadius: 999,
                padding: "2px 8px",
              }}
            >
              {t}
            </span>
          ))}
        </div>

        <div style={{ marginTop: "auto", display: "flex", alignItems: "baseline", gap: 8 }}>
          <b style={{ fontSize: 20, color: "#d0021b", fontVariantNumeric: "tabular-nums" }}>
            ¥{TEE.price}
          </b>
          {TEE.oldPrice ? <s style={{ fontSize: 12, color: "#6b6b6b" }}>¥{TEE.oldPrice}</s> : null}
        </div>

        <button
          type="button"
          style={{
            marginTop: 4,
            padding: "8px 0",
            borderRadius: 8,
            border: "1px solid #2a2f22",
            background: "#2a2f22",
            color: "#f4f3ec",
            fontSize: 13,
            cursor: "pointer",
          }}
        >
          加入购物袋
        </button>
      </div>
    </Card>
  );
}
`,rn=Object.assign({"./01-vertical.tsx":f,"./02-horizontal.tsx":h,"./03-right-image.tsx":w,"./04-bottom-image.tsx":z,"./05-banner.tsx":P,"./06-grid-compact.tsx":L,"./07-minimal.tsx":B,"./08-background.tsx":$,"./09-two-column.tsx":K}),on=Object.assign({"./01-vertical.tsx":q,"./02-horizontal.tsx":Y,"./03-right-image.tsx":J,"./04-bottom-image.tsx":Q,"./05-banner.tsx":X,"./06-grid-compact.tsx":Z,"./07-minimal.tsx":nn,"./08-background.tsx":en,"./09-two-column.tsx":tn}),dn=Object.entries(rn).map(([l,d])=>({meta:d.meta,Component:d.default,file:l.replace(/^\.\//,""),source:on[l]??""})).sort((l,d)=>l.file.localeCompare(d.file));export{dn as L};
