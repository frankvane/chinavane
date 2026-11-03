import{r as x,a as $,P as h,w as v,j as s,G as y,b as u,s as f,C as b,c as w,A}from"./index-CJk50hJg.js";function g(e,l=0){const t="  ".repeat(l+1),d="  ".repeat(l);if(e===null)return"null";if(typeof e=="number"||typeof e=="boolean")return String(e);if(typeof e=="string")return JSON.stringify(e);if(Array.isArray(e))return e.length===0?"[]":`[
${e.map(o=>t+g(o,l+1)).join(`,
`)},
${d}]`;const c=Object.entries(e).filter(([,o])=>o!==void 0);return c.length===0?"{}":`{
${c.map(([o,a])=>{const r=/^[A-Za-z_$][\w$]*$/.test(o)?o:JSON.stringify(o);return`${t}${r}: ${g(a,l+1)}`}).join(`,
`)},
${d}}`}function k(e){return Object.keys(e.args).length===0?`${e.factory}()`:`${e.factory}(${g(e.args).replace(/\n/g,`
  `)})`}function O({plugins:e,data:l}){const t=[...e].sort((a,r)=>a.priority-r.priority),d=t.map(a=>`import { ${a.factory} } from "vane-activity/custom-plugins/${a.dir}";`).join(`
`),c=t.map(a=>`  ${k(a)},`).join(`
`),p=t.length===0?"[]":`[
${c}
]`;return`/**
 * 插件工坊 · 勾选组合的完整源码（复制即可运行）
 *
 * 组合：${t.length===0?"裸内核（一个插件都没装）":`${t.map(a=>a.dir).join(" + ")}（${t.length} 个）`}
 * 装配顺序按 priority 升序，与勾选的先后无关。
 * 依赖：npm install vane-activity react react-dom
 */
import React from "react";
import { ActivityCore, withPlugins } from "vane-activity";
import type { ActivityData } from "vane-activity";
${d?`${d}
`:""}
// 演示数据：改这里即改界面（进度 = 任务完成度加权平均）
const data: ActivityData = ${g(l)};

// 装配：内核只提供语义骨架 + 生命周期，行为全在插件里
const Activity = withPlugins(ActivityCore, ${p});

export default function App() {
  return (
    <Activity
      data={data}
      onTaskAction={(id) => console.log("task action", id)}
      onClaim={(id) => console.log("claim", id)}
    />
  );
}
`}const P=new Map(h.map(e=>[e.dir,e]));function C(){const[e,l]=x.useState(()=>new Set($)),[t,d]=x.useState(h[0].dir),c=x.useMemo(()=>h.filter(n=>e.has(n.dir)),[e]),p=c.map(n=>n.dir).join("|"),o=x.useMemo(()=>{const n=c.map(m=>m.make());return v(A,n)},[p]),a=n=>{l(m=>{const i=new Set(m);return i.has(n)?i.delete(n):i.add(n),i}),d(n)},r=P.get(t),j=r==null?void 0:r.doc,N=x.useMemo(()=>O({plugins:c,data:f}),[p]);return s.jsxs("div",{children:[s.jsxs("header",{className:"page-head",children:[s.jsxs("div",{children:[s.jsx("p",{className:"eyebrow",children:"workshop · 装配台"}),s.jsx("h2",{className:"page-title",children:"插件工坊"}),s.jsxs("p",{className:"page-sub",children:[h.length," 个插件按 ",y.length," 组排列，勾选即装配 —— 右侧预览是**真的**在跑这些插件，不是示意图。舞台下方给出当前组合的 **完整源码**（复制即可运行），再往下是选中插件的属性 / 事件 / 方法。"]})]}),s.jsxs("div",{className:"page-facts",children:[s.jsxs("div",{children:[s.jsx("b",{children:h.length}),s.jsx("span",{children:"plugins"})]}),s.jsxs("div",{children:[s.jsx("b",{children:y.length}),s.jsx("span",{children:"groups"})]}),s.jsxs("div",{children:[s.jsx("b",{children:e.size}),s.jsx("span",{children:"enabled"})]})]})]}),s.jsxs("div",{className:"ws",children:[s.jsxs("aside",{className:"ws-panel",children:[s.jsxs("div",{className:"ws-panel-head",children:[s.jsx("span",{children:"插件目录"}),s.jsxs("code",{children:[e.size,"/",h.length]})]}),y.map(n=>{const m=h.filter(i=>i.group===n);return s.jsxs("div",{className:"ws-group",children:[s.jsxs("h4",{children:[u[n]," · ",m.length]}),m.map(i=>s.jsxs("label",{className:`ws-check${t===i.dir?" is-focus":""}`,title:i.summary,children:[s.jsx("input",{type:"checkbox",checked:e.has(i.dir),onChange:()=>a(i.dir)}),s.jsxs("span",{children:[s.jsxs("span",{className:"name",children:[i.dir,s.jsx("em",{className:"prio",children:i.priority})]}),s.jsx("span",{className:"desc",children:i.summary})]})]},i.dir))]},n)})]}),s.jsxs("div",{children:[s.jsxs("div",{className:"ws-stage",children:[s.jsxs("div",{className:"ws-stage-head",children:[s.jsxs("span",{children:["已启用 ",s.jsx("b",{children:c.length})," 个",c.length>0?` · ${c.map(n=>n.dir).join(" / ")}`:"（裸内核）"]}),s.jsx("span",{children:"live"})]}),s.jsx("div",{className:"ws-scroll",children:s.jsx(o,{data:f,onTaskAction:n=>console.log("task action",n),onClaim:n=>console.log("claim",n)})})]}),s.jsx("div",{className:"ws-source",children:s.jsx(b,{code:N,title:`源码 · ${c.length} 个插件 · 复制即可运行`,collapseAfter:26})}),r&&j?s.jsxs("div",{className:"card",style:{marginTop:14},children:[s.jsxs("div",{className:"doc-head",children:[s.jsx("code",{children:r.factory}),s.jsxs("span",{className:"tag tag-accent",children:["priority ",r.priority]}),s.jsx("span",{className:"tag",children:u[r.group]}),j.since?s.jsxs("span",{className:"tag",children:["since ",j.since]}):null]}),s.jsx("p",{className:"doc-desc",children:j.description}),s.jsx(w,{doc:j})]}):null]})]})]})}export{C as PluginsPage};
