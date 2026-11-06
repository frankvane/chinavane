import{r as p,j as s,C as v,S as u,e as f,f as C,U as $}from"./index-C-QwpbRb.js";function y(c){const e=c.plugs.map(n=>n.fn).sort(),r=e.length>3?`import {
${e.map(n=>`  ${n},`).join(`
`)}
} from "vane-coupon/custom-plugins";`:`import { ${e.join(", ")} } from "vane-coupon/custom-plugins";`,o=c.plugs.map(n=>`  ${n.fn}(${n.cfg?`{ ${n.cfg} }`:""}),`).join(`
`),a=c.props.map(n=>`      ${n}`).join(`
`);return`// ${c.title} · 最小装配（照抄即可跑）
import { createCouponCard } from "vane-coupon";
import type { CouponData } from "vane-coupon";
${r}

const CouponCard = createCouponCard([
${o}
]);

export default function CouponCard$({
  coupon,
}: {
  coupon: CouponData;
}) {
  return (
    <CouponCard
${a}
    />
  );
}
`}function S({entry:c}){const{meta:e,Component:t,file:r,source:o}=c,[a,n]=p.useState("minimal"),h=y(e);return s.jsxs("section",{className:"scn-card",id:`scn-${e.id}`,"data-scenario":e.id,children:[s.jsxs("header",{className:"scn-head",children:[s.jsx("span",{className:"scn-folio","aria-hidden":!0,children:r.slice(0,2)}),s.jsx("h3",{className:"scn-title",children:e.title}),s.jsxs("div",{className:"scn-head-meta",children:[s.jsx("code",{className:"scn-id",children:r}),s.jsxs("a",{className:"scn-ref",href:e.ref.url,target:"_blank",rel:"noreferrer",children:[e.ref.label," ↗"]})]}),s.jsx("p",{className:"scn-pain",children:e.pain})]}),s.jsxs("div",{className:"scn-body",children:[s.jsxs("figure",{className:"plate scn-plate",children:[s.jsxs("figcaption",{className:"plate-cap",children:[s.jsx("b",{children:"stage"}),s.jsxs("span",{children:[e.group," · ",e.plugs.length," plugins"]}),s.jsx("em",{children:"live"})]}),s.jsx("div",{className:"plate-ruler","aria-hidden":!0}),s.jsx("div",{className:`scn-stage${e.tone==="light"?" tone-light":""}`,children:s.jsx(t,{})})]}),s.jsxs("div",{className:"scn-side",children:[s.jsx("div",{className:"scn-plugs",children:e.plugs.map(i=>s.jsx("span",{className:`scn-plug${i.local?" is-local":""}`,title:i.why,children:i.fn.replace(/^create|Plugin$/g,"")},i.fn))}),s.jsx("ul",{className:"scn-why",children:e.plugs.map(i=>s.jsxs("li",{children:[s.jsx("code",{children:i.fn}),s.jsx("span",{children:i.why})]},i.fn))}),e.note?s.jsxs("p",{className:"scn-note",children:["⚠ ",e.note]}):null]})]}),s.jsxs("div",{className:"scn-code",children:[s.jsxs("div",{className:"scn-switch",role:"tablist",children:[s.jsx("button",{type:"button",role:"tab","aria-selected":a==="minimal",className:a==="minimal"?"is-active":"",onClick:()=>n("minimal"),children:"最小装配"}),s.jsx("button",{type:"button",role:"tab","aria-selected":a==="full",className:a==="full"?"is-active":"",onClick:()=>n("full"),children:"完整源码"})]}),s.jsx(v,{code:a==="minimal"?h:o,title:a==="minimal"?`${e.id}.minimal.tsx`:r,collapseAfter:a==="minimal"?0:24,maxHeight:430},a)]})]})}function w(){const[c,e]=p.useState("全部"),[t,r]=p.useState(null),[o,a]=p.useState(!1),n=p.useMemo(()=>c==="全部"?u:u.filter(l=>l.meta.group===c),[c]),h=["全部",...f],i=p.useCallback(()=>{a(!0),window.setTimeout(()=>{const l=Array.from(document.querySelectorAll(".scn-stage")),d=[];let m=0;for(const j of l){const x=j.closest(".scn-card"),b=(x==null?void 0:x.dataset.scenario)??"scenario",g=C(j);m+=g.checked;for(const N of g.problems)d.push(`${b} · ${N}`)}r({problems:d,checked:m}),a(!1)},320)},[]);return s.jsxs("div",{children:[s.jsxs("header",{className:"page-head",children:[s.jsxs("div",{children:[s.jsx("p",{className:"eyebrow",children:"plates · 版式索引"}),s.jsx("h2",{className:"page-title",children:"场景示例"}),s.jsxs("p",{className:"page-sub",children:[u.length," 个真实券版式，全部可交互（领券、展开规则、复制券码都真的能用）。 每张卡右边有「最小装配」和「完整源码」两份代码，都能直接复制。 原子插件只解决一件事，组合之后才是业务看得见的运营位。"]})]}),s.jsxs("div",{className:"page-facts",children:[s.jsxs("div",{children:[s.jsx("b",{children:u.length}),s.jsx("span",{children:"plates"})]}),s.jsxs("div",{children:[s.jsx("b",{children:f.length}),s.jsx("span",{children:"groups"})]}),s.jsxs("div",{children:[s.jsx("b",{children:$.length}),s.jsx("span",{children:"plugins used"})]})]})]}),s.jsxs("div",{className:"scn-tabs",children:[h.map(l=>{const d=l==="全部"?u.length:u.filter(m=>m.meta.group===l).length;return s.jsxs("button",{type:"button",className:`scn-tab${c===l?" is-active":""}`,onClick:()=>{e(l),r(null)},children:[l,s.jsx("span",{className:"n",children:d})]},l)}),s.jsx("button",{type:"button",className:"scn-tab scn-tab-audit",onClick:i,disabled:o,children:o?"体检中…":"体检全部"})]}),t?s.jsxs("div",{className:`audit${t.problems.length?" is-bad":" is-ok"}`,children:[s.jsxs("div",{className:"audit-head",children:[s.jsxs("b",{children:["体检 ",t.checked," 个交互元素 · ",t.problems.length," 处问题"]}),s.jsx("button",{type:"button",onClick:()=>r(null),children:"关闭"})]}),t.problems.length?s.jsx("ul",{children:t.problems.slice(0,40).map((l,d)=>s.jsx("li",{children:l},d))}):s.jsxs("p",{children:["所有卡片的交互元素都真实渲染、无越界、无重叠、容器正常撑开。 断言口径见 ",s.jsx("code",{children:"demo/src/lib/audit-coupon.ts"}),"。"]})]}):null,n.length===0?s.jsx("div",{className:"scn-empty",children:"这个分类下还没有场景"}):n.map(l=>s.jsx(S,{entry:l},l.meta.id))]})}export{w as ScenariosPage};
