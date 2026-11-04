import{r as d,a as f,P as l,j as s,G as x,b as j,L as N,c as y,C as v}from"./index-JbJttLzM.js";const k=new Map(l.map(i=>[i.dir,i]));function b(i){if(i.length===0)return`// 没有勾选任何插件 —— Core 只有 Canvas 内核 + 轨道调度 + 生命周期转发
const Danmaku = DanmakuCore;`;const r=i.map(a=>a.factory).sort();return`import { DanmakuCore, withDanmakuPlugins } from "vane-danmaku";
${r.length>3?`import {
${r.map(a=>`  ${a},`).join(`
`)}
} from "vane-danmaku/custom-plugins";`:`import { ${r.join(", ")} } from "vane-danmaku/custom-plugins";`}

// 执行顺序由插件自身 priority 决定，这里按名称排序只为读起来整齐
const Danmaku = withDanmakuPlugins(DanmakuCore, [
${i.map(a=>`  ${a.factory}(),  // priority ${a.priority}`).join(`
`)}
]);

export default function Player() {
  return (
    <Danmaku
      items={items}      // 弹幕流（由接口下发）
      currentTime={t}    // 播放进度（秒）
      playing
    />
  );
}`}function D(){var m;const[i,r]=d.useState(()=>new Set(f)),[o,h]=d.useState(l[0].dir),a=d.useMemo(()=>l.filter(e=>i.has(e.dir)),[i]),p=a.map(e=>e.dir).join("|"),u=d.useMemo(()=>a.map(e=>e.make()),[p]),g=e=>{r(t=>{const n=new Set(t);return n.has(e)?n.delete(e):n.add(e),n}),h(e)},c=k.get(o);return s.jsxs("div",{children:[s.jsxs("header",{className:"page-head",children:[s.jsxs("div",{children:[s.jsx("p",{className:"eyebrow",children:"workshop · 装配台"}),s.jsx("h2",{className:"page-title",children:"插件工坊"}),s.jsxs("p",{className:"page-sub",children:[l.length," 个插件按「内容治理 / 视觉强调 / 互动指令 / 轨道策略 / 控制层」五区排列。 勾选即装配 —— 左侧列表按「区 → priority 降序」排，同一个区内越靠上的越先执行。 右侧预览是",s.jsx("b",{children:"真的"}),"在跑这些插件，不是示意图。"]})]}),s.jsxs("div",{className:"page-facts",children:[s.jsxs("div",{children:[s.jsx("b",{children:l.length}),s.jsx("span",{children:"plugins"})]}),s.jsxs("div",{children:[s.jsx("b",{children:x.length}),s.jsx("span",{children:"slots"})]}),s.jsxs("div",{children:[s.jsx("b",{children:i.size}),s.jsx("span",{children:"enabled"})]})]})]}),s.jsxs("div",{className:"ws",children:[s.jsxs("aside",{className:"ws-panel",children:[s.jsxs("div",{className:"ws-panel-head",children:[s.jsx("span",{children:"插件目录"}),s.jsxs("code",{children:[i.size,"/",l.length]})]}),x.map(e=>{const t=l.filter(n=>n.group===e);return s.jsxs("div",{className:"ws-group",children:[s.jsxs("h4",{children:[j[e]," · ",t.length]}),t.map(n=>s.jsxs("label",{className:`ws-check${o===n.dir?" is-focus":""}`,title:n.summary,children:[s.jsx("input",{type:"checkbox",checked:i.has(n.dir),onChange:()=>g(n.dir)}),s.jsxs("span",{children:[s.jsxs("span",{className:"name",children:[n.dir,s.jsx("em",{className:"prio",children:n.priority})]}),s.jsx("span",{className:"desc",children:n.summary})]})]},n.dir))]},e)})]}),s.jsxs("div",{children:[s.jsxs("div",{className:"ws-stage plate",children:[s.jsxs("div",{className:"ws-stage-head",children:[s.jsxs("span",{children:["已启用 ",s.jsx("b",{children:a.length})," 个",a.length>0?` · ${a.map(e=>e.dir).join(" / ")}`:"（裸 Core）"]}),s.jsx("span",{children:"live"})]}),s.jsx("div",{className:"ws-scroll",children:s.jsx(N,{plugins:u,items:y,height:360,showGrid:!0,topInset:48,bottomInset:56})})]}),c?s.jsxs("div",{className:"card",style:{marginTop:14},children:[s.jsxs("div",{className:"doc-head",children:[s.jsx("code",{children:c.factory}),s.jsxs("span",{className:"tag tag-accent",children:["priority ",c.priority]}),s.jsx("span",{className:"tag",children:j[c.group]}),c.doc.since?s.jsxs("span",{className:"tag",children:["since ",c.doc.since]}):null]}),s.jsx("p",{className:"doc-desc",children:c.doc.description}),(m=c.doc.config)!=null&&m.length?s.jsxs("table",{className:"doc-table",children:[s.jsx("thead",{children:s.jsxs("tr",{children:[s.jsx("th",{children:"配置"}),s.jsx("th",{children:"类型"}),s.jsx("th",{children:"默认"}),s.jsx("th",{children:"说明"})]})}),s.jsx("tbody",{children:c.doc.config.map(e=>s.jsxs("tr",{children:[s.jsx("td",{children:s.jsx("code",{children:e.name})}),s.jsx("td",{children:s.jsx("code",{className:"dim",children:e.type})}),s.jsx("td",{children:s.jsx("code",{className:"dim",children:e.default})}),s.jsx("td",{children:e.description})]},e.name))})]}):null,c.doc.example?s.jsx("p",{className:"doc-desc",style:{fontFamily:"var(--ff-mono)",fontSize:12},children:c.doc.example}):null]}):null,s.jsx("div",{style:{marginTop:14},children:s.jsx(v,{code:b(a),title:"workshop.tsx",collapseAfter:0,maxHeight:420})})]})]})]})}export{D as PluginsPage};
