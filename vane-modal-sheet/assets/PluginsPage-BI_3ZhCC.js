import{r as o,a as S,P as r,c as C,w as P,j as e,G as h,b as w,C as f,M as k}from"./index-BAYdjArD.js";const M=new Map(r.map(a=>[a.name,a]));function O(a){return a.length===0?`import React from "react";
import { ModalSheetCore } from "vane-modal-sheet";

// 没有勾选任何插件 —— 裸 Core：只有几何状态机 + 生命周期转发
// 没有遮罩 / 把手 / 标题 / 吸底操作区
const Sheet = ModalSheetCore;`:`import React from "react";
import { ModalSheetCore, withModalSheetPlugins } from "vane-modal-sheet";
${a.map(c=>`import { ${c.factory.slice(0,c.factory.indexOf("("))} } from "vane-modal-sheet/custom-plugins/${c.name}";`).join(`
`)}

// 执行顺序由插件自身 priority 决定（升序）；数组顺序只为读起来整齐
const Sheet = withModalSheetPlugins(ModalSheetCore, [
${a.map(c=>`  ${c.factory},  // priority ${c.priority}`).join(`
`)}
]);

export function Demo() {
  const [open, setOpen] = React.useState(true);
  return (
    <Sheet
      isOpen={open}
      onClose={() => setOpen(false)}
      snapPoints={[0.6]}
      width={520}
      horizontalAlign="center"
    >
      <p style={{ padding: 24 }}>当前启用了 ${a.length} 个插件。</p>
    </Sheet>
  );
}`}function $(){var p,u,g,N;const[a,x]=o.useState(()=>new Set(S)),[c,m]=o.useState(r[0].name),[j,d]=o.useState(!0),i=o.useMemo(()=>r.filter(s=>a.has(s.name)),[a]),y=i.map(s=>s.name).join("|"),v=o.useMemo(()=>{const s=i.map(t=>t.name==="FooterPlugin"?C({primaryText:"完成",secondaryText:"取消",onPrimary:()=>d(!1),onSecondary:()=>d(!1)}):t.make());return P(k,s)},[y]),b=s=>{x(t=>{const l=new Set(t);return l.has(s)?l.delete(s):l.add(s),l}),m(s)},n=M.get(c);return e.jsxs("article",{children:[e.jsxs("header",{className:"page-head",children:[e.jsxs("div",{children:[e.jsx("p",{className:"eyebrow",children:"workshop · 装配台"}),e.jsx("h1",{className:"page-title",children:"插件工坊"}),e.jsxs("p",{className:"page-sub",children:[r.length," 个内置插件按 ",h.length," 组排列。勾选即装配 —— 右侧预览是真的在跑这些插件，同一个组内 priority 越小越先执行。 默认不勾 Backdrop，避免遮罩挡住整页；想体验遮罩就手动勾上。"]})]}),e.jsxs("div",{className:"page-facts",children:[e.jsxs("div",{children:[e.jsx("b",{children:r.length}),e.jsx("span",{children:"plugins"})]}),e.jsxs("div",{children:[e.jsx("b",{children:h.length}),e.jsx("span",{children:"groups"})]}),e.jsxs("div",{children:[e.jsx("b",{children:a.size}),e.jsx("span",{children:"enabled"})]})]})]}),e.jsxs("div",{className:"ws",children:[e.jsxs("aside",{className:"ws-panel",children:[e.jsxs("div",{className:"ws-panel-head",children:[e.jsx("span",{children:"插件目录"}),e.jsxs("code",{children:[a.size,"/",r.length]})]}),h.map(s=>{const t=r.filter(l=>l.group===s);return e.jsxs("div",{className:"ws-group",children:[e.jsxs("h4",{children:[w[s]," · ",t.length]}),t.map(l=>e.jsxs("label",{className:`ws-check${c===l.name?" is-focus":""}`,title:l.summary,children:[e.jsx("input",{type:"checkbox",checked:a.has(l.name),onChange:()=>b(l.name)}),e.jsxs("span",{children:[e.jsxs("span",{className:"name",children:[l.name,e.jsx("em",{className:"prio",children:l.priority})]}),e.jsx("span",{className:"desc",children:l.summary})]})]},l.name))]},s)})]}),e.jsxs("div",{children:[e.jsxs("div",{className:"ws-stage",children:[e.jsxs("div",{className:"ws-stage-head",children:[e.jsxs("span",{children:["已启用 ",e.jsx("b",{children:i.length})," 个",i.length>0?` · ${i.map(s=>s.name).join(" / ")}`:"（裸 Core）"]}),e.jsxs("span",{className:"ws-stage-btns",children:[e.jsx("button",{type:"button",className:"ws-btn",onClick:()=>d(!0),children:"打开预览"}),e.jsx("button",{type:"button",className:"ws-btn ws-btn--ghost",onClick:()=>d(!1),children:"关闭预览"})]})]}),e.jsxs("div",{className:"ws-scroll",children:[e.jsxs("p",{className:"ws-hint",children:["预览是真实弹层：",j?"已在视口底部打开":"已关闭","。 拖拽面板试试把手，按 Esc 试试 EscClose，勾上 Backdrop 再点遮罩试试关闭链路。"]}),e.jsx(v,{isOpen:j,onClose:()=>d(!1),snapPoints:[.6],width:520,horizontalAlign:"center",children:e.jsxs("div",{className:"ws-preview-body",children:[e.jsx("p",{className:"ws-preview-title",children:"真跑预览"}),e.jsxs("p",{children:["这一屏由当前勾选的 ",e.jsx("b",{children:i.length})," 个插件装配而成。 插件槽位负责遮罩、把手、标题栏、吸底操作区；行为插件负责键盘避让、 滚动锁、焦点圈定、返回关闭等；反馈插件负责动效、振动与读屏播报。"]}),e.jsx("p",{children:"勾选变化会重建组件类型并即时生效；取消全部勾选后就是没有遮罩、 没有把手、没有头尾的裸 Core。"})]})})]})]}),n?e.jsxs("div",{className:"card",style:{marginTop:14},children:[e.jsxs("div",{className:"doc-head",children:[e.jsx("code",{children:n.factory}),e.jsxs("span",{className:"tag tag-accent",children:["priority ",n.priority]}),e.jsx("span",{className:"tag",children:w[n.group]}),n.doc.since?e.jsxs("span",{className:"tag",children:["since ",n.doc.since]}):null]}),e.jsx("p",{className:"doc-desc",children:n.doc.description}),(p=n.doc.config)!=null&&p.length?e.jsx("div",{className:"doc-table-wrap",children:e.jsxs("table",{className:"doc-table",children:[e.jsx("thead",{children:e.jsxs("tr",{children:[e.jsx("th",{children:"配置"}),e.jsx("th",{children:"类型"}),e.jsx("th",{children:"默认"}),e.jsx("th",{children:"说明"})]})}),e.jsx("tbody",{children:n.doc.config.map(s=>e.jsxs("tr",{children:[e.jsx("td",{children:e.jsx("code",{children:s.name})}),e.jsx("td",{children:e.jsx("code",{className:"dim",children:s.type})}),e.jsx("td",{children:e.jsx("code",{className:"dim",children:s.default??"-"})}),e.jsx("td",{children:s.description})]},s.name))})]})}):null,e.jsxs("div",{className:"doc-cols",children:[(u=n.doc.features)!=null&&u.length?e.jsxs("div",{children:[e.jsx("h5",{children:"能做"}),e.jsx("ul",{children:n.doc.features.map(s=>e.jsx("li",{children:s},s))})]}):null,(g=n.doc.useCases)!=null&&g.length?e.jsxs("div",{children:[e.jsx("h5",{children:"适合"}),e.jsx("ul",{children:n.doc.useCases.map(s=>e.jsx("li",{children:s},s))})]}):null,(N=n.doc.notes)!=null&&N.length?e.jsxs("div",{children:[e.jsx("h5",{children:"注意"}),e.jsx("ul",{children:n.doc.notes.map(s=>e.jsx("li",{children:s},s))})]}):null]}),n.doc.example?e.jsx("div",{style:{marginTop:14},children:e.jsx(f,{code:n.doc.example,title:"example.tsx",collapseAfter:0,maxHeight:220})}):null]}):null,e.jsx("div",{style:{marginTop:14},children:e.jsx(f,{code:O(i),title:"workshop.tsx",collapseAfter:0,maxHeight:420})})]})]})]})}export{$ as PluginsPage};
