import{r as h,j as s,C as j,n as g}from"./index-Cy703kYk.js";import{S as u,G as p,U as f}from"./catalog-ghWyacdf.js";function b(e){const a=e.plugs.map(t=>t.fn).sort().map(t=>`import { ${t} } from "vane-sku/custom-plugins/${t.replace(/^create/,"")}";`).join(`
`),c=e.plugs.map(t=>`  ${t.fn}(${t.cfg?`{ ${t.cfg} }`:""}),`).join(`
`),o=e.props.map(t=>`      ${t}`).join(`
`),i=e.plugs.length===0?`// ${e.title} · 这一版只用内核
const Sku = createSkuSelector([]);`:`const Sku = createSkuSelector([
${c}
]);`;return`// ${e.title} · 最小装配（照抄即可跑）
import { createSkuSelector } from "vane-sku";
${a}
import type { SkuAttribute, SkuVariant } from "vane-sku";

${i}

export default function Demo({
  attributes,
  variants,
}: {
  attributes: SkuAttribute[];
  variants: SkuVariant[];
}) {
  return (
    <Sku
      attributes={attributes}
      variants={variants}
${o}
    />
  );
}
`}function N({entry:e}){const{meta:n,Component:a,file:c,source:o}=e,[i,t]=h.useState("minimal"),d=b(n);return s.jsxs("section",{className:"scn-card",id:`scn-${n.id}`,"data-scenario":n.id,children:[s.jsxs("header",{className:"scn-head",children:[s.jsx("span",{className:"scn-folio","aria-hidden":!0,children:c.slice(0,2)}),s.jsx("h3",{className:"scn-title",children:n.title}),s.jsxs("div",{className:"scn-head-meta",children:[s.jsx("code",{className:"scn-id",children:c}),s.jsxs("a",{className:"scn-ref",href:n.ref.url,target:"_blank",rel:"noreferrer",children:[n.ref.label," ↗"]})]}),s.jsx("p",{className:"scn-pain",children:n.pain})]}),s.jsxs("div",{className:"scn-body",children:[s.jsxs("figure",{className:"plate scn-plate",children:[s.jsxs("figcaption",{className:"plate-cap",children:[s.jsx("b",{children:"stage"}),s.jsxs("span",{children:[n.group," · ",n.plugs.length," plugins"]}),s.jsx("em",{children:"live"})]}),s.jsx("div",{className:"plate-ruler","aria-hidden":!0}),s.jsx("div",{className:`scn-stage${n.tone==="light"?" tone-light":""}`,children:s.jsx(a,{})})]}),s.jsxs("div",{className:"scn-side",children:[s.jsx("div",{className:"scn-plugs",children:n.plugs.map(r=>s.jsx("span",{className:`scn-plug${r.local?" is-local":""}`,title:r.why,children:r.fn.replace(/^create|Plugin$/g,"")},r.fn))}),s.jsx("ul",{className:"scn-why",children:n.plugs.map(r=>s.jsxs("li",{children:[s.jsx("code",{children:r.fn}),s.jsx("span",{children:r.why})]},r.fn))}),n.note?s.jsxs("p",{className:"scn-note",children:["⚠ ",n.note]}):null]})]}),s.jsxs("div",{className:"scn-code",children:[s.jsxs("div",{className:"scn-switch",role:"tablist",children:[s.jsx("button",{type:"button",role:"tab","aria-selected":i==="minimal",className:i==="minimal"?"is-active":"",onClick:()=>t("minimal"),children:"最小装配"}),s.jsx("button",{type:"button",role:"tab","aria-selected":i==="full",className:i==="full"?"is-active":"",onClick:()=>t("full"),children:"完整源码"})]}),s.jsx(j,{code:i==="minimal"?d:o,title:i==="minimal"?`${n.id}.minimal.tsx`:c,collapseAfter:i==="minimal"?0:24,maxHeight:430},i)]})]})}function S(){const e=[];return Array.from(document.querySelectorAll(".scn-card")).forEach((a,c)=>{const o=a.dataset.scenario??a.id.replace(/^scn-/,"")??`#${c+1}`,i=a.querySelector(".scn-stage");if(!i){e.push({scenario:o,detail:"卡片里找不到 .scn-stage 舞台节点"});return}const t=i.getBoundingClientRect();if(t.width===0||t.height===0){e.push({scenario:o,detail:"舞台未渲染（.scn-stage 宽高为 0）"});return}const{problems:d,checked:r}=g(i);for(const l of d)e.push({scenario:o,detail:`${l}${r?`（查了 ${r} 个规格按钮）`:""}`});!d.length&&r===0&&e.push({scenario:o,detail:"舞台内没有可体检的规格按钮（[data-testid^=sku-opt-]）"})}),e}function v(e,n){if(e.length===0)return`${n} 张卡 · 0 命中`;const a=new Map;for(const c of e)a.set(c.scenario,(a.get(c.scenario)??0)+1);return`${n} 张卡 · ${e.length} 命中（${[...a].map(([c,o])=>`${c}:${o}`).join(" ")}）`}function y(){const[e,n]=h.useState("全部"),[a,c]=h.useState(null),[o,i]=h.useState(!1),t=h.useMemo(()=>e==="全部"?u:u.filter(l=>l.meta.group===e),[e]),d=["全部",...p],r=h.useCallback(()=>{i(!0),window.setTimeout(()=>{c(S()),i(!1)},320)},[]);return s.jsxs("div",{children:[s.jsxs("header",{className:"page-head",children:[s.jsxs("div",{children:[s.jsx("p",{className:"eyebrow",children:"plates · 版式索引"}),s.jsx("h2",{className:"page-title",children:"场景示例"}),s.jsxs("p",{className:"page-sub",children:[u.length," 个真实版式，全部可交互（点规格、调数量、重挂载还原都真的能用）。 每张卡右边有「最小装配」和「完整源码」两份代码，都能直接复制。"]})]}),s.jsxs("div",{className:"page-facts",children:[s.jsxs("div",{children:[s.jsx("b",{children:u.length}),s.jsx("span",{children:"plates"})]}),s.jsxs("div",{children:[s.jsx("b",{children:p.length}),s.jsx("span",{children:"groups"})]}),s.jsxs("div",{children:[s.jsx("b",{children:f.length}),s.jsx("span",{children:"plugins used"})]})]})]}),s.jsxs("div",{className:"scn-tabs",children:[d.map(l=>{const m=l==="全部"?u.length:u.filter(x=>x.meta.group===l).length;return s.jsxs("button",{type:"button",className:`scn-tab${e===l?" is-active":""}`,onClick:()=>{n(l),c(null)},children:[l,s.jsx("span",{className:"n",children:m})]},l)}),s.jsx("button",{type:"button",className:"scn-tab scn-tab-audit",onClick:r,disabled:o,children:o?"体检中…":"体检全部"})]}),a?s.jsxs("div",{className:`audit${a.length?" is-bad":" is-ok"}`,children:[s.jsxs("div",{className:"audit-head",children:[s.jsx("b",{children:v(a,document.querySelectorAll(".scn-card").length)}),s.jsx("button",{type:"button",onClick:()=>c(null),children:"关闭"})]}),a.length?s.jsx("ul",{children:a.slice(0,40).map((l,m)=>s.jsxs("li",{children:[s.jsx("code",{children:l.scenario}),l.detail]},m))}):s.jsxs("p",{children:["所有卡片的舞台都真实渲染、规格按钮无零尺寸 / 负坐标 / 越界 / 重叠。 断言口径见 ",s.jsx("code",{children:"demo/src/lib/audit-stages.ts"})," 与"," ",s.jsx("code",{children:"demo/src/lib/audit-sku.ts"}),"。"]})]}):null,t.length===0?s.jsx("div",{className:"scn-empty",children:"这个分类下还没有场景"}):t.map(l=>s.jsx(N,{entry:l},l.meta.id))]})}export{y as ScenariosPage};
